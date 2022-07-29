import fs from "fs";
import fse from "fs-extra";
import { execSync } from "child_process";

const options = { stdio: [0, 1, 2] };

execSync("npm un nodejs-nodemailer-outlook", options);

fse.removeSync("./interfaces/contactData.ts");
fse.removeSync("./pages/api/contact.ts");
fse.removeSync("./components/contact");

console.log(`Contact template removed successfully!`);
