/*
 * Renders cv/resume.html to public/resume.pdf.
 *
 *   node cv/build.js
 *
 * Playwright is not a dependency of this project — it is reused from another
 * workspace on this machine, so this script is a local tool, not part of the
 * site build. The PDF it produces is committed.
 */
const path = require("path");
const { chromium } = require(
  "E:/blitzschnell/scrape/node_modules/playwright",
);

const SRC = path.join(__dirname, "resume.html");
const OUT = path.join(__dirname, "..", "public", "resume.pdf");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("file:///" + SRC.replace(/\\/g, "/"), {
    waitUntil: "networkidle",
  });
  // Google Fonts load over the network; without this the PDF can render in
  // the fallback face.
  await page.evaluate(() => document.fonts.ready);

  await page.pdf({
    path: OUT,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  console.log("wrote", OUT);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
