import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

<<<<<<< HEAD
import Footer from "../footer";
import Header from "../header/header";
import Nav from "../nav/nav";
=======
import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav";
>>>>>>> a51549b376a39808f8e6df1f04a34778710f9e20
import { PageProps } from "./types";
import { animation } from "./animations";

const Page = (props: PageProps) => {
<<<<<<< HEAD
=======
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

>>>>>>> a51549b376a39808f8e6df1f04a34778710f9e20
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
<<<<<<< HEAD
            <Nav />
            <VStack>
=======
            <Nav setOnMenuOpenScrollPos={setOnMenuOpenScrollPos} />
            <VStack display={isMenuOpen ? "none" : "flex"}>
>>>>>>> a51549b376a39808f8e6df1f04a34778710f9e20
                {props.children}
                {/* <Box height="200rem" /> */}
                <Footer />
            </VStack>
        </motion.main>
    );
};

export default Page;
