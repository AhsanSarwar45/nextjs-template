// External imports
import { Flex, Heading } from "@chakra-ui/react";

// Project imports
import Page, { AnimatedPage } from "@/components/page";

const Custom404 = () => {
    return (
        <AnimatedPage title="Page not found">
            <Flex height="100vh" alignItems="center">
                <Heading>404 - Page Not Found</Heading>
            </Flex>
        </AnimatedPage>
    );
};

export default Custom404;
