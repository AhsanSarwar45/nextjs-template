// External imports
import React from "react";
import NextHead from "next/head";
import { useRouter } from "next/router";

// Component imports
import { HeaderProps } from "./types";

const Head = (props: HeaderProps) => {
    const twitterUsername = "";
    const baseUrl = "localhost:3000";

    const router = useRouter();

    const url = baseUrl + router.pathname;
    const urlPageName = router.pathname
        .substring(router.pathname.indexOf("/") + 1)
        .toUpperCase();
    const title = props.title || urlPageName;

    return (
        <NextHead>
            <title>{`${title}`}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content="" />
            <meta name="language" content="en" />
            <link rel="icon" href="/favicon.ico" />

            <meta name="robots" content={props.robots} />

            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={props.imageUrl} />

            <meta name="twitter:card" content="summary_small_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:image" content={props.imageUrl} />
        </NextHead>
    );
};

Head.defaultProps = {
    title: "",
    description: "",
    imageUrl: "",
    robots: "",
};

export default Head;
