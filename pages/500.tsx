// External imports
import { Flex, Heading } from "@chakra-ui/react";

// Project imports
import Page, { AnimatedPage } from "@/components/page";

const Custom500 = () => {
    return (
        <AnimatedPage title="Page not found">
            <Flex height="100vh" alignItems="center">
                <Heading>500 - Server-side error occurred</Heading>
            </Flex>
        </AnimatedPage>
    );
};

export default Custom500;
