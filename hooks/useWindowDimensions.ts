import { useState, useEffect } from "react";

import { Coordinates, Dimensions } from "@/interfaces/coordinates";

// Modified from here https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

function getWindowDimensions() {
    if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window;

        return {
            width,
            height,
        };
    } else {
        return {
            width: 0,
            height: 0,
        };
    }
}

const useWindowDimensions = () => {
    const [dimensions, setDimensions] = useState<Dimensions>(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return dimensions;
};

export default useWindowDimensions;
