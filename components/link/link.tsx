// External imports
import { useRouter } from "next/router";

// Component imports
import { LinkProps } from "./types";

// Project imports
import Anchor from "../anchor/anchor";
import TextButton from "../textButton/textButton";

const Link = (props: LinkProps) => {
    const router = useRouter();

    return (
        <Anchor href={props.href} isExternal={props.isExternal}>
            <TextButton
                label={props.label}
                color={props.color}
                fontSize={props.fontSize}
                underlined={router.pathname === props.href}
            />
        </Anchor>
    );
};

Link.defaultProps = {
    color: "text.primary",
    fontSize: "1rem",
    isExternal: false,
};

export default Link;
