import "../styles/globals.css";

// import "@fontsource/gamja-flower";
// import "@fontsource/montserrat/400.css";
// import "@fontsource/montserrat/500.css";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "@/themes/theme";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.pathname} />
            </AnimatePresence>
        </ChakraProvider>
    );
}

export default MyApp;
