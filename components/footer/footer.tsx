// External imports
import { HStack, VStack, Text, Flex } from "@chakra-ui/react";

// Component imports

// Project imports
import VercelLogo from "@/public/vercel.svg";
import Socials from "@/components/socials";

const Footer = () => {
    return (
        <footer>
            <Flex
                direction={{ xs: "column", md: "row" }}
                padding="1rem"
                paddingX={{ xs: "1rem", md: "4rem" }}
                width="full"
                gap="1rem"
                bgColor="brand.secondary"
                alignItems="center"
                justifyContent="space-between"
            >
                <VercelLogo width="6rem" />
                <Text>© 2022 NextJs Template. All rights reserved</Text>
                <Socials />
            </Flex>
        </footer>
    );
};

export default Footer;
