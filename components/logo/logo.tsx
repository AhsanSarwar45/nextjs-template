// External imports
import React from "react";

// Component imports
import { LogoProps } from "./types";

// Project imports
import LogoSvg from "@/public/svg/logo.svg";
import Anchor from "../anchor";

const Logo = (props: LogoProps) => {
    return (
        <Anchor href="/">
            <LogoSvg aria-label="website logo" {...props} />
        </Anchor>
    );
};

Logo.defaultProps = {
    width: "6rem",
};

export default Logo;
