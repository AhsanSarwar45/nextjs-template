import { FlexProps, StackProps } from "@chakra-ui/react";
import { Variant, Variants } from "framer-motion";

export interface PageAnimation {
    initial: Variant;
    enter: Variant;
    exit: Variant;
}

export interface PageProps extends StackProps {
    title: string;
    description: string;
    imageUrl: string;
    robots: string;
}
export interface AnimatedPageProps extends PageProps {
    animationVariants: PageAnimation;
    animateContentOnly: boolean;
}
