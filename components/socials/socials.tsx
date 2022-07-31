// External imports
import { HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsFillEnvelopeFill, BsInstagram } from "react-icons/bs";
import Anchor from "../anchor";

// Component imports
import { SocialIconProps, SocialsProps } from "./types";

// Project imports
import config from "../../config.json";

const SocialIcon = (props: SocialIconProps) => {
    const InternalIcon = () => (
        <Icon
            as={props.icon}
            aria-label={props.ariaLabel}
            width="1.2rem"
            height="1.2rem"
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
    ariaLabel: "",
};

const Socials = (props: SocialsProps) => {
    return (
        <HStack spacing="2rem" {...props}>
            <SocialIcon
                href={config.instagramLink}
                ariaLabel={`${config.title} instagram`}
                icon={BsInstagram}
            />
            <SocialIcon
                href={config.facebookLink}
                ariaLabel={`${config.title} facebook`}
                icon={BsFacebook}
            />
            <SocialIcon
                href={`mailto: ${config.email} `}
                ariaLabel={`Send Email to ${config.email} `}
                icon={BsFillEnvelopeFill}
            />
        </HStack>
    );
};

Socials.defaultProps = {};

export default Socials;
