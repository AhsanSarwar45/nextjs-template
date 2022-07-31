import { FlexProps, StackProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface SocialIconProps {
    icon: IconType;
    onMouseEnter: () => void;
    href: string;
    ariaLabel: string;
}

export interface SocialsProps extends StackProps {}
