import {
    InputProps as ChakraInputProps,
    TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";

interface InputFormProps {
    label: string;
    labelPosition: "top" | "placeholder";
    error: string;
    errorPosition: "icon" | "bottom";
}

export interface InputBaseProps extends InputFormProps {
    isBaseValid: boolean | undefined;
    field: React.ComponentType;
    fieldProps: ChakraInputProps | ChakraTextareaProps;
}

export interface TextAreaProps extends ChakraTextareaProps, InputFormProps {}

export interface InputProps extends ChakraInputProps, InputFormProps {}
