import { VStack, Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import Footer from "../footer";
import Header from "../header/header";
import Nav from "../nav/nav";
import { PageProps } from "./types";
import { animation } from "./animations";

const Page = (props: PageProps) => {
    return (
        <motion.main
            key={props.title}
            variants={animation} // Pass the variant object into Framer Motion
            initial="initial" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: "linear" }} // Set the transition to linear
        >
            <Header title={props.title} />
            <Nav />
            <VStack>
                {props.children}
                {/* <Box height="200rem" /> */}
                <Footer />
            </VStack>
        </motion.main>
    );
};

export default Page;
