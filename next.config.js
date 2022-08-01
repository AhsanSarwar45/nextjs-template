/** @type {import('next').NextConfig} */
// /** @type {import('withPWA') from "next-pwa" } */
const withPWA = require("next-pwa");

const prod = process.env.NODE_ENV === "production";

const nextConfig = withPWA({
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    pwa: {
        dest: "public",
        disable: prod ? false : true,
    },
});

module.exports = nextConfig;

// module.exports = withPWA({
//     pwa: {
//         dest: "public",
//     },
// });
