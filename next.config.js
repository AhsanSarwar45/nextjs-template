/** @type {import('next').NextConfig} */
// /** @type {import('withPWA') from "next-pwa" } */
const withPWA = require("next-pwa");

const nextConfig = {
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
    devIndicators: {
        autoPrerender: false,
    },
    pwa: {
        dest: "public",
    },
};

module.exports =
    process.env.NODE_ENV === "development" ? nextConfig : withPWA(nextConfig);

// module.exports = withPWA({
//     pwa: {
//         dest: "public",
//     },
// });
