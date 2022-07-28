import { Variants } from "framer-motion";

export const animation: Variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: { duration: 0.5, type: "linear" },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2, type: "linear" },
    },
};
