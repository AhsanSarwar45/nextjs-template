import {
    InputProps as ChakraInputProps,
    TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";

export interface FormProps {
    label: string;
    labelPosition: "top" | "placeholder";
    error?: string;
    errorPosition: "icon" | "bottom";
}

export interface FormInputBaseProps extends FormProps {
    isBaseValid: boolean | undefined;
    field: React.ComponentType;
    fieldProps: ChakraInputProps | ChakraTextareaProps;
}

export interface FormTextAreaProps extends ChakraTextareaProps, FormProps {}

export interface FormInputProps extends ChakraInputProps, FormProps {}
