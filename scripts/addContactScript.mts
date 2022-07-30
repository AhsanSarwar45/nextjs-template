import fs from "fs";
import fse from "fs-extra";
import { execSync } from "child_process";

const options = { stdio: [0, 1, 2] };

execSync("npm i nodejs-nodemailer-outlook", options);

const dir = "./pages/api";
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
fs.copyFileSync(
    "./scripts/contactTemplate/apiEndpoint.ts",
    "./pages/api/contact.ts"
);
fs.copyFileSync(
    "./scripts/contactTemplate/contactData.ts",
    "./interfaces/contactData.ts"
);
fse.copySync("./scripts/contactTemplate/contact", "./components/contact");

console.log(`Contact template added successfully! 🎉`);
