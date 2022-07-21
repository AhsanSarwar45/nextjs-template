import { useRouter } from "next/router";
import Anchor from "./anchor/anchor";
import TextButton from "./textButton";

interface NavLinkProps {
    href: string;
    label: string;
    color: string;
    fontSize: any;
    isExternal: boolean;
}

const Link = (props: NavLinkProps) => {
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
