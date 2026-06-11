// One-time conversion: browser-Babel globals -> ESM modules for Vite
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
fs.mkdirSync(path.join(SRC, "pages"), { recursive: true });
fs.mkdirSync(path.join(SRC, "entry"), { recursive: true });

const read = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");
const HOOKS = ["useState", "useEffect", "useRef", "useMemo", "useCallback", "useLayoutEffect"];

const SHARED_EXPORTS = ["Wordmark","Pill","StatusDot","Nav","Footer","submitForm","mailtoFallback","FinalCTA","useReveal","Breadcrumb","ForwardEngine"];
const MOCK_EXPORTS = ["PmChrome","PelvarUI","PipworthUI"];

function hooksUsed(code) {
  return HOOKS.filter((h) => new RegExp(`\\b${h}\\(`).test(code));
}
function namesUsed(code, names) {
  return names.filter((n) => new RegExp(`<${n}[\\s/>]|\\b${n}\\(`).test(code));
}
function stripGlobals(code) {
  return code.replace(/^Object\.assign\(window,[\s\S]*?\);\s*$/m, "");
}

// ---- shared.jsx ----
{
  let code = stripGlobals(read("shared.jsx"));
  const hooks = hooksUsed(code);
  const header = `import React from "react";\n`;
  const footer = `\nexport { ${SHARED_EXPORTS.join(", ")} };\n`;
  fs.writeFileSync(path.join(SRC, "shared.jsx"), header + code + footer);
}

// ---- product-mocks.jsx ----
{
  let code = stripGlobals(read("product-mocks.jsx"));
  const hooks = hooksUsed(code);
  const fromShared = namesUsed(code, SHARED_EXPORTS);
  let header = `import React from "react";\n`;
  if (fromShared.length) header += `import { ${fromShared.join(", ")} } from "./shared.jsx";\n`;
  fs.writeFileSync(path.join(SRC, "product-mocks.jsx"), header + code + `\nexport { ${MOCK_EXPORTS.join(", ")} };\n`);
}

// ---- pages ----
const PAGES = { "404": "404", approach: "approach", contact: "contact", cookies: "cookies",
  home: "index", howcraft: "howcraft", "ilr-calc": "ilr-calc", operating: "operating",
  pelvar: "pelvar", pipworth: "pipworth", privacy: "privacy", software: "software",
  terms: "terms", "workforce-atlas": "workforce-atlas" };

const manifest = [];
for (const [jsxName, htmlName] of Object.entries(PAGES)) {
  let code = stripGlobals(read(`${jsxName}.jsx`));
  const m = code.match(/ReactDOM\.createRoot\(.*?\)\.render\(<(\w+)\s*\/>\);?/);
  if (!m) { console.error(`!! no render() found in ${jsxName}.jsx`); process.exit(1); }
  const appName = m[1];
  code = code.replace(m[0], `export default ${appName};`);
  if (jsxName === "ilr-calc") {
    code = code.replace(/\/\/ Last-mile:[\s\S]*?const root = document\.getElementById\("root"\);\s*/, "");
    code = code.replace(/\/\/ After render, patch[\s\S]*?\}, 0\);\s*/, "");
    code = code.replace("export default ILRApp;", `const ILRPage = () => {
  React.useEffect(() => {
    document.querySelectorAll(\`a[href="\${ILR_URL}"]\`).forEach((a) => {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });
  }, []);
  return <ILRApp />;
};
export default ILRPage;`);
  }
  const hooks = hooksUsed(code);
  const fromShared = namesUsed(code, SHARED_EXPORTS);
  const fromMocks = namesUsed(code, MOCK_EXPORTS);
  let header = `import React from "react";\n`;
  if (fromShared.length) header += `import { ${fromShared.join(", ")} } from "../shared.jsx";\n`;
  if (fromMocks.length) header += `import { ${fromMocks.join(", ")} } from "../product-mocks.jsx";\n`;
  fs.writeFileSync(path.join(SRC, "pages", `${jsxName}.jsx`), header + code);

  fs.writeFileSync(path.join(SRC, "entry", `${jsxName}.jsx`),
`import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "../pages/${jsxName}.jsx";
const el = document.getElementById("root");
if (el.hasChildNodes()) { hydrateRoot(el, <App />); } else { createRoot(el).render(<App />); }
`);
  manifest.push({ jsxName, htmlName, appName });
}
fs.writeFileSync(path.join(ROOT, "scripts", "pages.json"), JSON.stringify(manifest, null, 2));
console.log("Converted:", manifest.map((p) => p.jsxName).join(", "));
