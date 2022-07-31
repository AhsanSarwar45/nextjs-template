// External imports
import { HStack, Icon } from "@chakra-ui/react";
import { BsFacebook, BsFillEnvelopeFill, BsInstagram } from "react-icons/bs";

// Component imports
import { SocialIconProps, SocialsProps } from "./types";

// Project imports
import { metaConfig, socialsConfig } from "@/config";
import Anchor from "@/components/anchor";

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
                href={socialsConfig.instagramLink}
                ariaLabel={`${metaConfig.title} instagram`}
                icon={BsInstagram}
            />
            <SocialIcon
                href={socialsConfig.facebookLink}
                ariaLabel={`${metaConfig.title} facebook`}
                icon={BsFacebook}
            />
            <SocialIcon
                href={`mailto: ${socialsConfig.email} `}
                ariaLabel={`Send Email to ${socialsConfig.email} `}
                icon={BsFillEnvelopeFill}
            />
        </HStack>
    );
};

Socials.defaultProps = {};

export default Socials;
