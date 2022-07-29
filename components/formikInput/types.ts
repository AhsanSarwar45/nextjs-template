import { InputProps, TextareaProps } from "@chakra-ui/react";

interface FormikBaseInputProps {
    label?: string;
    fieldName: string;
    formikProps: any;
}

export interface FormikInputProps extends FormikBaseInputProps, InputProps {}
export interface FormikTextAreaProps
    extends FormikBaseInputProps,
        TextareaProps {}
