const fs = require("fs");
const path = require("path");

const sourceFiles = ["index.html", "styles.css", "script.js"];
const outputDir = path.join(__dirname, "dist");

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

for (const file of sourceFiles) {
  fs.copyFileSync(path.join(__dirname, file), path.join(outputDir, file));
}

console.log("Build concluido: arquivos publicados em dist/");
