/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

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
        register: true,
        skipWaiting: true,
        runtimeCaching,
    },
};

module.exports =
    process.env.NODE_ENV === "development" ? nextConfig : withPWA(nextConfig);

// module.exports = withPWA({
//     pwa: {
//         dest: "public",
//     },
// });
