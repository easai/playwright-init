#! /usr/bin/env node
import fs from "node:fs";
import { execSync } from "node:child_process";
import prompts from "prompts";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const response = await prompts({
    type: "text",
    name: "projectName",
    message: "Project name?"
});
console.log(`Creating project ${response.projectName} ...`);
fs.mkdirSync(response.projectName, {
    recursive: true
});
console.log(`Copying files form ${path.join(__dirname, "..", "templates")}`);
fs.cpSync(path.join(__dirname, "..", "templates"), response.projectName, { recursive: true });
execSync("git init", {
    stdio: "inherit"
});
execSync("npm init -y", {
    cwd: response.projectName,
    stdio: "inherit"
});
execSync("npm install -D @playwright/test typescript @types/node", {
    cwd: response.projectName,
    stdio: "inherit"
});
execSync("npx playwright install", {
    cwd: response.projectName,
    stdio: "inherit"
});
const sites = [];
while (true) {
    const { name } = await prompts({
        type: "text",
        name: "name",
        message: "Site name (leave empty to finish):",
    });
    if (!name) {
        break;
    }
    const { baseUrl } = await prompts({
        type: "text",
        name: "baseUrl",
        message: "Base URL:",
    });
    sites.push({ name, baseUrl });
}
const content = `// Auto-generated

export const sites = [
${sites
    .map((site) => `  {
    name: "${site.name}",
    baseUrl: "${site.baseUrl}",
  }`)
    .join(",\n")}
];
`;
const outputPath = path.join(response.projectName, "sites", "sites.ts");
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, content, "utf8");
console.log(`Created ${outputPath}`);
//# sourceMappingURL=index.js.map