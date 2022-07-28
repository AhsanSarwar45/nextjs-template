//External imports
import React from "react";
import NextLink from "next/link";

// Component imports
import { AnchorProps } from "./types";

// Project imports

const Anchor = (props: AnchorProps) => {
    // If link is external, we want to open it in new tab by using
    // the target and rel attributes.
    const aProps = props.isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

    return (
        <NextLink href={props.href} passHref>
            <a {...aProps}>{props.children}</a>
        </NextLink>
    );
};

Anchor.defaultProps = {
    isExternal: false,
};

export default Anchor;
