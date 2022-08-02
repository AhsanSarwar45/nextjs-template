// External imports
import { VStack, Box, Text } from "@chakra-ui/react";
import { useAnimation, Variants, motion } from "framer-motion";

// Component imports
import { TextButtonProps } from "./types";

// Project imports

const TextButton = (props: TextButtonProps) => {
    const animationControls = useAnimation();

    const { label, onClick, isUnderlined, ...textProps } = props;

    const transition = {
        duration: 0.3,
    };
    const animation: Variants = {
        initial: {
            scaleX: props.isUnderlined ? 1 : 0,
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
                console.log("onHover");
            }}
            onMouseLeave={() => {
                animationControls.start("initial");
            }}
            spacing={"0"}
            userSelect={"none"}
            onClick={props.onClick}
        >
            <Text fontWeight="link" {...textProps}>
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
    isUnderlined: false,
    onClick: () => {},
};

export default TextButton;
