import { Variant, Variants } from "framer-motion";

export interface PageAnimation extends Variants {
    initial: Variant;
    enter: Variant;
    exit: Variant;
}

export interface PageProps {
    title: string;
    children?: React.ReactNode;
    animatable: boolean;
    animationVariants: PageAnimation;
}
