// External imports
import { HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsFillEnvelopeFill, BsInstagram } from "react-icons/bs";
import Anchor from "../anchor";

// Component imports
import { SocialIconProps, SocialsProps } from "./types";

// Project imports

const SocialIcon = (props: SocialIconProps) => {
    // const { onCopy } = useClipboard("arcane_artist@gmail.com");

    const InternalIcon = () => (
        <Icon
            as={props.icon}
            width="1.5rem"
            height="1.5rem"
            fontWeight="body"
            onMouseEnter={props.onMouseEnter}
            display="block"
        />
    );

    return props.href ? (
        <Anchor href={props.href} isExternal>
            <InternalIcon />
        </Anchor>
    ) : (
        <InternalIcon />
    );
};

SocialIcon.defaultProps = {
    onMouseEnter: () => {},
    href: "",
};

const Socials = (props: SocialsProps) => {
    return (
        <HStack spacing="2rem" {...props}>
            <SocialIcon href="#" icon={BsInstagram} />
            <SocialIcon href="#" icon={BsFacebook} />
            <SocialIcon href="mailto:" icon={BsFillEnvelopeFill} />
        </HStack>
    );
};

Socials.defaultProps = {};

export default Socials;
