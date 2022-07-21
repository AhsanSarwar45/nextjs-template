import { VStack, Box, Text } from "@chakra-ui/react";
import { useAnimation, Variants, motion } from "framer-motion";
import React from "react";
import { TextButtonProps } from "./types";

const TextButton = (props: TextButtonProps) => {
    const animationControls = useAnimation();

    const transition = {
        duration: 0.3,
    };
    const animation: Variants = {
        initial: {
            scaleX: props.underlined ? 1 : 0,
            transition: transition,
        },
        onHover: {
            scaleX: 1,
            transition: transition,
        },
    };

    return (
        <VStack
            cursor="pointer"
            onMouseEnter={() => {
                animationControls.start("onHover");
            }}
            onMouseLeave={() => {
                animationControls.start("initial");
            }}
            spacing={"0"}
            userSelect={"none"}
            onClick={props.onClick}
        >
            <Text
                fontSize={props.fontSize}
                fontWeight="link"
                color={props.color}
            >
                {props.label}
            </Text>

            <Box
                as={motion.div}
                variants={animation}
                initial={"initial"}
                animate={animationControls}
                backgroundColor={props.color}
                height="2px"
                width="full"
            />
        </VStack>
    );
};

TextButton.defaultProps = {
    color: "text.primary",
    fontSize: "1rem",
    underlined: false,
    onClick: () => {},
};

export default TextButton;