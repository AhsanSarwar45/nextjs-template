import { InputProps, TextareaProps } from "@chakra-ui/react";
import FormInput, { FormProps } from "../formInput";

export interface FormikBaseInputProps extends FormProps {
    fieldName: string;
}

export interface FormikInputProps extends FormikBaseInputProps, InputProps {}
export interface FormikTextAreaProps
    extends FormikBaseInputProps,
        TextareaProps {}
