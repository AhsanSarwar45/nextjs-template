import { Flex } from "@chakra-ui/react";
import { NavProps } from "./types";

const Nav = (props: NavProps) => {
    return (
        <nav>
            <Flex direction={props.direction} position="fixed" top="0"></Flex>
        </nav>
    );
};

Nav.defaultProps = {
    direction: "row",
};

export default Nav;
