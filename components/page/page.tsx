// External imports
import {
    useBreakpoint,
    useBreakpointValue,
    VStack,
    Image,
    Spacer,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

// Component imports
import { animation } from "./animations";
import { AnimatedPageProps, PageProps } from "./types";

// Project imports
import Footer from "@/components/footer";
import Head from "@/components/head";
import Nav, { CollapsibleNav } from "@/components/nav";

const Page = (props: PageProps) => {
    const { title, description, imageUrl, robots, children, ...stackProps } =
        props;

    const isSmallScreen = useBreakpointValue({
        base: true,
        xs: true,
        md: false,
    });

    return (
        <VStack width="full" minHeight="100vh" spacing="0" {...stackProps}>
            <Head
                title={title}
                description={description}
                imageUrl={imageUrl}
                robots={robots}
            />
            {isSmallScreen ? <CollapsibleNav /> : <Nav />}
            <main>{children}</main>
            <Spacer />
            <Footer />
        </VStack>
    );
};

const pageDefaultProps = {
    title: "",
    description: "",
    imageUrl: "",
    robots: "",
};

Page.defaultProps = pageDefaultProps;

export const AnimatedPage = (props: AnimatedPageProps) => {
    const { animationVariants, animateContentOnly, ...pageProps } = props;

    return animateContentOnly ? (
        <Page {...pageProps}>
            <motion.main
                key={props.title}
                variants={animationVariants as any}
                initial="initial"
                animate="enter"
                exit="exit"
            >
                {props.children}
            </motion.main>
        </Page>
    ) : (
        <motion.main
            key={props.title}
            variants={animationVariants as any}
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
    animateContentOnly: false,
    ...pageDefaultProps,
};

export default Page;
