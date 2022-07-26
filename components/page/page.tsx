import { VStack } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

import { useEffect, useRef, useState } from "react";

import Footer from "@/components/footer";
import Head from "@/components/head";
import Nav from "@/components/nav";
import { AnimatedPageProps, PageProps } from "./types";
import { animation } from "./animations";
import useCollapsibleMenu from "@/hooks/useCollapsibleMenu";

const Page = (props: PageProps) => {
    const { isMenuOpen, setIsMenuOpen, contentRef } = useCollapsibleMenu();

    return (
        <VStack ref={contentRef}>
            <Head title={props.title} />
            <Nav />
            <main>{props.children}</main>
            <Footer />
        </VStack>
    );
};

export const AnimatedPage = (props: AnimatedPageProps) => {
    const { animationVariants, ...pageProps } = props;

    return (
        <motion.main
            key={props.title}
            variants={props.animationVariants as any}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <Page {...pageProps} />
        </motion.main>
    );
};

AnimatedPage.defaultProps = {
    animationVariants: animation,
};

export default Page;
