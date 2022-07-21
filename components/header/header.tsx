import React from "react";
import Head from "next/head";

interface HeaderProps {
    title: string;
}

const Header = (props: HeaderProps) => {
    const title = "";
    const description = "";
    const url = "";
    const image = "";
    const twitterUsername = "";

    return (
        <Head>
            <title>{`${props.title}`}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="" />
            <meta name="language" content="en" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_small_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
};

export default Header;
