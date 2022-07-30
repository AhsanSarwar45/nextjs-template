// External imports
import { Flex, Heading } from "@chakra-ui/react";

// Project imports
import { AnimatedPage } from "@/components/page";

const Custom404 = () => {
    return (
        <AnimatedPage title="Page not found" animateContentOnly>
            <Flex
                height="80vh"
                width="full"
                justifyContent="center"
                alignItems="center"
            >
                <Heading>404 - Page Not Found</Heading>
            </Flex>
        </AnimatedPage>
    );
};

export default Custom404;
