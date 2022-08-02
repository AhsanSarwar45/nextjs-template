// External imports
import { Text, Flex } from "@chakra-ui/react";

// Component imports

// Project imports
import Socials from "@/components/socials";
import Logo from "@/components/logo";

const Footer = () => {
    return (
        <footer>
            <Flex
                // aria-label="footer"
                direction={{ xs: "column", md: "row" }}
                padding="1rem"
                paddingX={{ xs: "1rem", md: "4rem" }}
                width="full"
                gap="1rem"
                bgColor="brand.secondary"
                alignItems="center"
                justifyContent="space-between"
            >
                <Logo width="6rem" />
                <Text>© 2022 NextJs Template. All rights reserved</Text>
                <Socials />
            </Flex>
        </footer>
    );
};

export default Footer;
