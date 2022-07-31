// External imports
import { useRouter } from "next/router";

// Component imports
import { LinkProps } from "./types";

// Project imports
import Anchor from "@/components/anchor";
import TextButton from "@/components/textButton";

const Link = (props: LinkProps) => {
    const router = useRouter();
    const { href, label, isExternal, ...textProps } = props;

    return (
        <Anchor href={props.href} isExternal={props.isExternal}>
            <TextButton
                label={props.label}
                isUnderlined={router.pathname === props.href}
                {...textProps}
            />
        </Anchor>
    );
};

Link.defaultProps = {
    color: "text.primary",
    fontSize: "1rem",
    // role: "",
    isExternal: false,
};

export default Link;
