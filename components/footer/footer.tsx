// External imports
import { VStack } from "@chakra-ui/react";

// Component imports

// Project imports

const DesktopFooter = () => {
    return <VStack display={{ xs: "none", md: "block" }}></VStack>;
};

const MobileFooter = () => {
    return <VStack display={{ xs: "flex", md: "none" }}></VStack>;
};

const Footer = () => {
    return (
        <footer>
            <DesktopFooter />
            <MobileFooter />
        </footer>
    );
};

export default Footer;
