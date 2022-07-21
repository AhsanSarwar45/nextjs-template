// Adapted from https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/utils/gen-component-script.ts

import fs from "fs";
import path from "path";
import { component, barrel, type } from "./genComponentTemplate.mjs";

// Grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) {
    throw new Error("You must include a component name.");
}

if (!name.match(/^[A-Z]/)) {
    throw new Error("Component name must be in PascalCase.");
}

const ToCamelCase = (str: string) => {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
};

const camelCaseName = ToCamelCase(name);

const dir = `./components/${camelCaseName}`;

// Throw an error if the component's folder already exists
if (fs.existsSync(dir)) {
    throw new Error("A component with that name already exists.");
}

// Create the folder
fs.mkdirSync(dir);

const writeFileErrorHandler = (err: Error | null) => {
    if (err) {
        throw err;
    }
};

// Create the component file - my-component.tsx
fs.writeFile(
    `${dir}/${camelCaseName}.tsx`,
    component(name),
    writeFileErrorHandler
);

// Create the type file - types.ts
fs.writeFile(`${dir}/types.ts`, type(name), writeFileErrorHandler);

// Create the barrel file - index.ts
fs.writeFile(
    `${dir}/index.ts`,
    barrel(name, camelCaseName),
    writeFileErrorHandler
);

console.log(`The ${name} component has been created successfully! 🎉`);
