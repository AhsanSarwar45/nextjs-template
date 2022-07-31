// External imports
import React from "react";
import NextHead from "next/head";
import { useRouter } from "next/router";
import absoluteUrl from "next-absolute-url";

// Component imports
import { HeaderProps } from "./types";

const Head = (props: HeaderProps) => {
    const twitterUsername = "";

    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || process.env.URL;

    const router = useRouter();

    const url = baseUrl + router.pathname;
    const urlPageName = router.pathname
        .substring(router.pathname.indexOf("/") + 1)
        .toUpperCase();
    const title = props.title || urlPageName;

    const socialDescription = props.socialDescription || props.description;

    return (
        <NextHead>
            <title>{`${title}`}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta name="language" content={props.language} />
            <link rel="icon" href="/favicon.ico" />

            <meta name="robots" content={props.robots} />

            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={socialDescription} />
            <meta property="og:image" content={props.imageUrl} />
            <meta property="og:type" content={props.type} />

            <meta name="twitter:card" content="summary_small_image" />
            <meta name="twitter:site" content={twitterUsername} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={socialDescription} />
            <meta
                name="twitter:creator"
                content={props.creatorTwitterUsername || twitterUsername}
            />
            <meta name="twitter:image" content={props.imageUrl} />
        </NextHead>
    );
};

Head.defaultProps = {
    title: "",
    description: "",
    socialDescription: "",
    keywords: "",
    imageUrl: "/public/images/test.png",
    robots: "",
    type: "website",
    language: "en",
    creatorTwitterUsername: "",
};

export default Head;
