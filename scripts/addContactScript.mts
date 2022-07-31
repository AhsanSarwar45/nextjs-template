import fs from "fs";
import fse from "fs-extra";
import { execSync } from "child_process";

const options = { stdio: [0, 1, 2] };

execSync("npm i nodejs-nodemailer-outlook", options);

const contactDir = "./components/contact";
const apiPath = "./pages/api/contact.ts";
const interfacePath = "./interfaces/contactData.ts";

if (fs.existsSync(apiPath)) {
    throw new Error(`${apiPath} already exists.`);
}
const dir = "./pages/api";
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
fs.copyFileSync("./scripts/contactTemplate/apiEndpoint.ts", apiPath);

if (fs.existsSync(interfacePath)) {
    throw new Error(`${interfacePath} already exists.`);
}
fs.copyFileSync("./scripts/contactTemplate/contactData.ts", interfacePath);

if (fs.existsSync(contactDir)) {
    throw new Error(`${contactDir} already exists.`);
}
fse.copySync("./scripts/contactTemplate/contact", contactDir);

console.log(`Contact template added successfully! 🎉`);
