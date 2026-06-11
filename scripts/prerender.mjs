// Prerender: renders every page to static HTML inside dist/, so crawlers and
// first paint get real content. Client JS then hydrates. Fails loudly if any
// page throws or renders empty — doubles as the smoke test.
import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const pages = JSON.parse(fs.readFileSync("scripts/pages.json", "utf8"));

const vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });
let failures = 0;

for (const { jsxName, htmlName } of pages) {
  try {
    const mod = await vite.ssrLoadModule(`/src/pages/${jsxName}.jsx`);
    const html = renderToStaticMarkup(React.createElement(mod.default));
    if (!html || html.length < 500) throw new Error(`suspiciously small output (${html.length} chars)`);
    const file = path.resolve("dist", `${htmlName}.html`);
    let doc = fs.readFileSync(file, "utf8");
    if (!doc.includes('<div id="root"></div>')) throw new Error("no empty #root found in built html");
    doc = doc.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    fs.writeFileSync(file, doc);
    console.log(`✓ ${htmlName}.html prerendered (${(html.length / 1024).toFixed(1)} kB of content)`);
  } catch (e) {
    failures++;
    console.error(`✗ ${jsxName}: ${e.message}`);
  }
}
await vite.close();
if (failures) { console.error(`\n${failures} page(s) failed prerender`); process.exit(1); }
console.log("\nAll pages prerendered.");
