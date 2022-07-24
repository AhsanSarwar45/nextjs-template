// component.tsx
export const codegenConfig = `
import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./schemas/schema.js",
  outputPath: "./schema.ts",
};

export default config;
`;

// types.ts
export const client = `
import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from "sanity-codegen";
import config from "./config";
import { Documents } from "./schema";

export default createClient<Documents>(config);

export const urlFor = (source: any) =>
    createImageUrlBuilder(config).image(source);
`;

export const config = (projectId: string) => `
const config = {
    projectId: "${projectId}",
    dataset: "production",
    fetch: fetch,
};

export default config;
`;
