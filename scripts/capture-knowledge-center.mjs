import { spawn } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.resolve(rootDir, "design-review", "knowledge-center");
const host = process.env.KNOWLEDGE_CENTER_HOST || "localhost";
const pagePath = process.env.KNOWLEDGE_CENTER_PATH || "/blog";
const requestedPort = Number(process.env.KNOWLEDGE_CENTER_PORT || 0);

const desktopPath = path.join(outputDir, "knowledge-center-desktop-full.png");
const mobilePath = path.join(outputDir, "knowledge-center-mobile-full.png");
const expertPath = path.join(outputDir, "knowledge-center-expert-section.png");
const pdfPath = path.join(outputDir, "knowledge-center-visual-brief.pdf");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once("error", reject);
    server.listen(requestedPort, "127.0.0.1", () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });
}

async function waitForUrl(url, timeoutMs = 120000) {
  const startedAt = Date.now();
  let lastError;

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.status < 500) return;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }

    await delay(1000);
  }

  throw new Error(`Timed out waiting for ${url}: ${lastError?.message}`);
}

function startNextDev(port) {
  const nextBin = path.join(rootDir, "node_modules", "next", "dist", "bin", "next");
  const child = spawn(
    process.execPath,
    [nextBin, "dev", "--hostname", host, "--port", String(port)],
    {
      cwd: rootDir,
      env: {
        ...process.env,
        NEXT_TELEMETRY_DISABLED: "1",
      },
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
    }
  );

  child.stdout.on("data", (chunk) => process.stdout.write(chunk));
  child.stderr.on("data", (chunk) => process.stderr.write(chunk));

  return child;
}

function stopNextDev(child) {
  if (!child || child.killed) return;
  child.kill("SIGTERM");
}

async function waitForStablePage(page) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("networkidle", { timeout: 10000 }).catch(() => {});
  await page
    .evaluate(async () => {
      const imageSettled = Promise.all(
        Array.from(document.images)
          .filter((img) => !img.complete)
          .map(
            (img) =>
              new Promise((resolve) => {
                img.addEventListener("load", resolve, { once: true });
                img.addEventListener("error", resolve, { once: true });
              })
          )
      );
      const timeout = new Promise((resolve) => setTimeout(resolve, 8000));
      await Promise.race([imageSettled, timeout]);
    })
    .catch(() => {});
  await page.waitForTimeout(700);
}

async function warmLazyContent(page) {
  const height = await page.evaluate(() =>
    Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  );

  for (let y = 0; y < height; y += 700) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(125);
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
}

async function captureFullPage(page, url, viewport, filePath) {
  console.log(`Capturing ${path.basename(filePath)} (${viewport.width}x${viewport.height}, fullPage)`);
  await page.setViewportSize(viewport);
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120000 });
  await waitForStablePage(page);
  await warmLazyContent(page);
  await page.screenshot({ path: filePath, fullPage: true, timeout: 60000 });
}

async function captureExpertSection(page, url) {
  console.log(`Capturing ${path.basename(expertPath)} (#expert)`);
  await page.setViewportSize({ width: 1440, height: 1200 });
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120000 });
  await waitForStablePage(page);
  await warmLazyContent(page);

  const expert = page.locator("#expert");
  if ((await expert.count()) === 0) return false;

  await expert.screenshot({ path: expertPath });
  return true;
}

async function createPdf(page, hasExpertSection) {
  console.log(`Creating ${path.basename(pdfPath)}`);
  const desktop = fs.readFileSync(desktopPath).toString("base64");
  const mobile = fs.readFileSync(mobilePath).toString("base64");
  const expert =
    hasExpertSection && fs.existsSync(expertPath)
      ? fs.readFileSync(expertPath).toString("base64")
      : null;

  const expertBlock = expert
    ? `<h1>Enerix Expert section</h1><img src="data:image/png;base64,${expert}" />`
    : `<h1>Enerix Expert section</h1><p>Section crop was not created reliably.</p>`;

  await page.setContent(
    `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          @page { size: A4; margin: 12mm; }
          body { margin: 0; font-family: Arial, sans-serif; color: #111; }
          h1 { font: 700 18px/1.25 Arial, sans-serif; margin: 0 0 10px; break-after: avoid; }
          img { display: block; width: 100%; height: auto; margin: 0 0 22px; break-inside: avoid; border: 1px solid #ddd; }
          p { font: 400 13px/1.45 Arial, sans-serif; }
        </style>
      </head>
      <body>
        <h1>Desktop full page</h1>
        <img src="data:image/png;base64,${desktop}" />
        <h1>Mobile full page</h1>
        <img src="data:image/png;base64,${mobile}" />
        ${expertBlock}
      </body>
    </html>`,
    { waitUntil: "load" }
  );

  await page.pdf({
    path: pdfPath,
    printBackground: true,
    preferCSSPageSize: true,
  });
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  const port = await getFreePort();
  const url = `http://${host}:${port}${pagePath}`;
  const server = startNextDev(port);

  server.once("exit", (code) => {
    if (code !== null && code !== 0) {
      console.error(`Next dev server exited with code ${code}`);
    }
  });

  let browser;
  try {
    await waitForUrl(url);

    browser = await chromium.launch({ channel: "msedge", headless: true });
    const page = await browser.newPage();

    await captureFullPage(page, url, { width: 1440, height: 1200 }, desktopPath);
    await captureFullPage(page, url, { width: 390, height: 1200 }, mobilePath);
    const hasExpertSection = await captureExpertSection(page, url);
    await createPdf(page, hasExpertSection);

    console.log(
      JSON.stringify(
        {
          url,
          desktop: desktopPath,
          mobile: mobilePath,
          expert: hasExpertSection ? expertPath : null,
          pdf: pdfPath,
        },
        null,
        2
      )
    );
  } finally {
    if (browser) await browser.close();
    stopNextDev(server);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
