import { FlexProps } from "@chakra-ui/react";
import { Variant, Variants } from "framer-motion";

export interface PageAnimation {
    initial: Variant;
    enter: Variant;
    exit: Variant;
}

export interface PageProps extends FlexProps {
    title: string;
}
export interface AnimatedPageProps extends PageProps {
    animationVariants: PageAnimation;
}
