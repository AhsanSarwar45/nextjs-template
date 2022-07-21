import { useRouter } from "next/router";
import Anchor from "../anchor/anchor";
import TextButton from "../textButton/textButton";
import { LinkProps } from "./types";

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
