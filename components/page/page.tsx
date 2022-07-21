import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav";
import { PageProps } from "./types";
import { animation } from "./animations";

const Page = (props: PageProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onMenuOpenScrollPos = useRef(0);

    const setOnMenuOpenScrollPos = (pos: number) => {
        onMenuOpenScrollPos.current = pos;
    };

    useEffect(() => {
        if (!isMenuOpen) {
            window.scrollTo(0, onMenuOpenScrollPos.current);
        }
    }, [isMenuOpen]);

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
            <VStack display={isMenuOpen ? "none" : "flex"}>
                {props.children}
                {/* <Box height="200rem" /> */}
                <Footer />
            </VStack>
        </motion.main>
    );
};

export default Page;
