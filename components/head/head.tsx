import React from "react";
import NextHead from "next/head";

interface HeaderProps {
    title: string;
}

const Head = (props: HeaderProps) => {
    const title = "";
    const description = "";
    const url = "";
    const image = "";
    const twitterUsername = "";

    return (
        <NextHead>
            <title>{`${props.title}`}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={description} />
            <meta name="keywords" content="" />
            <meta name="language" content="en" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_small_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:image" content={image} />
        </NextHead>
    );
};

export default Head;
