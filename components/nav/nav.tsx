// External imports
import { Flex, Icon, Box, HStack, VStack } from "@chakra-ui/react";
import { MdClose, MdOutlineMenu } from "react-icons/md";

// Component imports
import { NavBarProps, NavProps } from "./types";
import { fullScreenMenuAnimation } from "./animations";
import { links } from "./links";

// Project imports
import useFullScreenMenu from "@/hooks/useFullScreenMenu";
import { motion, useAnimation } from "framer-motion";
import Link from "@/components/link";
import Logo from "@/components/logo";

const NavBar = (props: NavBarProps) => {
    return (
        <Flex
            direction={props.direction}
            position="fixed"
            top="0"
            width="full"
            alignItems="center"
            justifyContent="space-between"
            paddingX={{ xs: "1rem", md: "4rem" }}
            paddingTop={{ xs: "0.5rem", md: "2rem" }}
            zIndex={20}
        >
            {props.children}
        </Flex>
    );
};

const Nav = (props: NavProps) => {
    return (
        <NavBar direction={props.direction}>
            {/* Put ant logos here */}
            <Logo width="6rem" aria-label="website logo" />
            <nav>
                <HStack role="list" spacing="4rem">
                    {/* Put nav links here */}
                    {links.map((link) => (
                        <div key={link.label} role="listitem">
                            <Link label={link.label} href={link.href} />
                        </div>
                    ))}
                </HStack>
            </nav>
        </NavBar>
    );
};

Nav.defaultProps = {
    direction: "row",
};

export const CollapsibleNav = (props: NavProps) => {
    const { isMenuOpen, setIsMenuOpen } = useFullScreenMenu();
    const animationControls = useAnimation();

    return (
        <NavBar direction={props.direction}>
            {/* Put ant logos here */}
            <Logo />
            <>
                <Flex
                    as={motion.div}
                    variants={fullScreenMenuAnimation}
                    initial="close"
                    animate={animationControls}
                    onAnimationComplete={(definition: any) => {
                        if (definition === "open") {
                            setIsMenuOpen(true);
                        }
                    }}
                    position="fixed"
                    top="0"
                    left="0"
                    width="full"
                    height="100vh"
                    bgColor="brand.primary"
                    zIndex={30}
                    pointerEvents={isMenuOpen ? "all" : "none"}
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* Menu content goes here */}
                    <nav>
                        <VStack role="list">
                            {links.map((link) => (
                                <div key={link.label} role="listitem">
                                    <Link
                                        label={link.label}
                                        href={link.href}
                                        fontSize="2rem"
                                    />
                                </div>
                            ))}
                        </VStack>
                    </nav>
                </Flex>
                <Icon
                    as={isMenuOpen ? MdClose : MdOutlineMenu}
                    onClick={() => {
                        if (isMenuOpen) {
                            animationControls.start("close");
                            setIsMenuOpen(false);
                        } else {
                            animationControls.start("open");
                        }
                    }}
                    cursor="pointer"
                    pointerEvents="all"
                    w="2rem"
                    h="2rem"
                    zIndex={31}
                />
            </>
        </NavBar>
    );
};

CollapsibleNav.defaultProps = {
    direction: "row",
};

export default Nav;
