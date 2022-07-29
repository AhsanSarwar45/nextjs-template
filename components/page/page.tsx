// External imports
import { useBreakpoint, useBreakpointValue, VStack } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

// Component imports
import { animation } from "./animations";
import { AnimatedPageProps, PageProps } from "./types";

// Project imports
import Footer from "@/components/footer";
import Head from "@/components/head";
import Nav, { CollapsibleNav } from "@/components/nav";

const Page = (props: PageProps) => {
    const isSmallScreen = useBreakpointValue({
        base: true,
        xs: true,
        md: false,
    });

    return (
        <VStack>
            <Head title={props.title} />
            {isSmallScreen ? <CollapsibleNav /> : <Nav />}
            <main>{props.children}</main>
            <Footer />
        </VStack>
    );
};

Page.defaultProps = {
    title: "",
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
    title: "",  
};

export default Page;
