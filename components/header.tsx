import React from "react";
import Head from "next/head";

interface HeaderProps {
    title: string;
}

const Header = (props: HeaderProps) => {
    return (
        <Head>
            <title>{`${props.title} - Arcane Art`}</title>
            <meta name="description" content="" />
            <meta name="keywords" content="Art" />
            <meta name="language" content="en" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:url" content="" />
            <meta property="og:title" content="Arcane Art" />
            <meta
                property="og:description"
                content="My Art Portfolio Website"
            />
            <meta property="og:image" content="/public/images/stars.jpg" />
            <meta name="twitter:card" content="summary_small_image" />
            <meta name="twitter:title" content="Arcane Art" />
            <meta
                name="twitter:description"
                content="My Art Portfolio Website"
            />
            <meta name="twitter:creator" content="Arcane Artist" />
            <meta name="twitter:image" content="/public/images/stars.jpg" />
        </Head>
    );
};

export default Header;
