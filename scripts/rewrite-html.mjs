import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const pages = JSON.parse(fs.readFileSync("scripts/pages.json", "utf8"));

const FONTS = `<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Hanken+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">`;

for (const { jsxName, htmlName } of pages) {
  const f = path.join(ROOT, `${htmlName}.html`);
  let html = fs.readFileSync(f, "utf8");

  // Replace the React UMD + Babel + jsx script block with a single module entry
  html = html.replace(
    /\s*<script src="https:\/\/unpkg\.com\/react@[\s\S]*?<script type="text\/babel"[^>]*><\/script>(\s*<script type="text\/babel"[^>]*><\/script>)*/,
    `\n  <script type="module" src="/src/entry/${jsxName}.jsx"></script>`
  );
  // Fonts: Poppins -> brand stack
  html = html.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Poppins[^"]*" rel="stylesheet">/, FONTS);
  // Root-absolute asset paths for public/ dir
  html = html.replace(/href="assets\//g, 'href="/assets/');
  // Explicit relative stylesheet so Vite bundles it
  html = html.replace(/href="styles\.css"/g, 'href="./styles.css"');

  fs.writeFileSync(f, html);
  console.log("rewrote", `${htmlName}.html`);
}
