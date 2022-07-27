import { Variants } from "framer-motion";

const transition = {
    duration: 0.3,
};

export const topBarAnimation: Variants = {
    initial: {
        top: "0%",
    },
    open: {
        top: ["0%", "50%", "50%"],
        rotate: ["0deg", "0deg", "45deg"],
        transition: transition,
    },
    close: {
        top: ["50%", "50%", "0%"],
        rotate: ["45deg", "0deg", "0deg"],
        transition: transition,
    },
};
export const bottomBarAnimation: Variants = {
    initial: {
        top: "100%",
    },
    open: {
        top: ["100%", "50%", "50%"],
        rotate: ["0deg", "0deg", "-45deg"],
        transition: transition,
    },
    close: {
        top: ["50%", "50%", "100%"],
        rotate: ["-45deg", "0deg", "0deg"],
        transition: transition,
    },
};
export const textAnimation: Variants = {
    initial: {
        opacity: "100%",
    },
    open: {
        opacity: "0%",
        transition: transition,
    },
    close: {
        opacity: "100%",
        transition: transition,
    },
};

export const fullScreenMenuAnimation: Variants = {
    open: {
        opacity: "100%",
        transition: transition,
    },
    close: {
        opacity: "0%",
        transition: transition,
    },
};
