import { VStack } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

import { useEffect, useRef, useState } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav";
import { PageProps } from "./types";
import { animation } from "./animations";
import useCollapsibleMenu from "@/hooks/useCollapsibleMenu";

const Page = (props: PageProps) => {
    const { isMenuOpen, setIsMenuOpen, contentRef } = useCollapsibleMenu();

    const Internal = () => (
        <>
            <Header title={props.title} />
            <Nav />
            <VStack ref={contentRef}>
                {props.children}
                <Footer />
            </VStack>
        </>
    );

    return props.animatable ? (
        <motion.main
            key={props.title}
            variants={props.animationVariants}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <Internal />
        </motion.main>
    ) : (
        <Internal />
    );
};

Page.defaultProps = {
    animatable: true,
    animationVariants: animation,
};

export default Page;
