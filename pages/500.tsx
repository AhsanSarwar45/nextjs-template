// External imports
import { Flex, Heading } from "@chakra-ui/react";

// Project imports
import { AnimatedPage } from "@/components/page";

const Custom500 = () => {
    return (
        <AnimatedPage title="Server-side error" animateContentOnly>
            <Flex
                height="80vh"
                width="full"
                justifyContent="center"
                alignItems="center"
            >
                <Heading>500 - Server-side error occurred</Heading>
            </Flex>
        </AnimatedPage>
    );
};

export default Custom500;
