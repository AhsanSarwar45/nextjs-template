import fs from "fs";
import path from "path";
import { codegenConfig, client, config } from "./sanityTemplate.mjs";
import { execSync } from "child_process";

const dir = path.resolve(`./cms`);

if (fs.existsSync(dir)) {
    throw new Error("CMS folder already exists.");
}

fs.mkdirSync(dir);

const options = { stdio: [0, 1, 2], cwd: dir };
const rootOptions = { stdio: [0, 1, 2] };

execSync("npm i -g @sanity/cli", options);
execSync(
    `sanity init --provider github --dataset production --output-path "${dir}"`,
    rootOptions
);
execSync(
    "npm i --save-dev sanity-codegen prettier @sanity/image-url",
    rootOptions
);
fs.writeFileSync(`${dir}/sanity-codegen.config.ts`, codegenConfig);
fs.writeFileSync(`${dir}/sanityClient.ts`, client);
const projectId = JSON.parse(
    fs.readFileSync(`./cms/sanity.json`, "utf8").toString()
).api.projectId;
fs.writeFileSync(`${dir}/config.ts`, config(projectId));
execSync("npx sanity-codegen", options);
fs.copyFileSync(
    "./scripts/sanityTemplate/deploy-cms.yml",
    "./.github/workflows/deploy-cms.yml"
);

console.log(`Sanity CMS has been initialized successfully! 🎉`);
console.log(`Type 'npm run cms' to start the Studio.`);
