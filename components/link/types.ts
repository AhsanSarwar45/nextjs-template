import { TextProps } from "@chakra-ui/react";

export interface LinkProps extends TextProps {
    href: string;
    label: string;
    isExternal: boolean;
}
