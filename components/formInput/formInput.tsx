// External imports
import {
    FormControl,
    FormLabel,
    Input as ChakraInput,
    InputGroup,
    Tooltip,
    InputRightElement,
    Icon,
    FormErrorMessage,
    Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";

// Component imports
import { FormTextAreaProps, FormInputBaseProps, FormInputProps } from "./types";

// Project imports

const FormInputBase = (props: FormInputBaseProps) => {
    const [isErrorOpen, setIsErrorOpen] = useState(false);

    const Field = props.field;

    return (
        <FormControl isInvalid={props.isBaseValid}>
            {props.labelPosition === "top" && (
                <FormLabel textTransform="capitalize">{props.label}</FormLabel>
            )}
            <InputGroup>
                {props.isBaseValid && props.errorPosition === "icon" && (
                    <Tooltip
                        hasArrow
                        label={props.error}
                        bgColor="error"
                        color="white"
                        isOpen={isErrorOpen}
                    >
                        <InputRightElement
                            id={`${props.label.toLowerCase()}-input-error-icon`}
                            onMouseEnter={() => setIsErrorOpen(true)}
                            onMouseLeave={() => setIsErrorOpen(false)}
                            onClick={() => setIsErrorOpen(true)}
                            color="error"
                        >
                            <Icon as={BsExclamationCircle} />
                        </InputRightElement>
                    </Tooltip>
                )}
                <Field
                    placeholder={
                        props.labelPosition === "placeholder"
                            ? props.label
                            : undefined
                    }
                    _placeholder={{
                        textTransform:
                            props.labelPosition === "placeholder"
                                ? "capitalize"
                                : undefined,
                    }}
                    {...props.fieldProps}
                />
            </InputGroup>
            {props.errorPosition === "bottom" && (
                <FormErrorMessage color="error">{props.error}</FormErrorMessage>
            )}
        </FormControl>
    );
};

const FormInput = (props: FormInputProps) => {
    const { label, labelPosition, error, errorPosition, ...inputProps } = props;

    return (
        <FormInputBase
            field={ChakraInput}
            fieldProps={inputProps}
            isBaseValid={props.isInvalid}
            label={props.label}
            labelPosition={props.labelPosition}
            error={props.error}
            errorPosition={props.errorPosition}
        />
    );
};

export const FormTextArea = (props: FormTextAreaProps) => {
    const { label, labelPosition, error, errorPosition, ...inputProps } = props;

    return (
        <FormInputBase
            field={Textarea}
            fieldProps={inputProps}
            isBaseValid={props.isInvalid}
            label={props.label}
            labelPosition={props.labelPosition}
            error={props.error}
            errorPosition={props.errorPosition}
        />
    );
};

const defaultProps = {
    labelPosition: "top",
    errorPosition: "bottom",
    error: "",
};

FormInput.defaultProps = defaultProps;
FormTextArea.defaultProps = defaultProps;

export default FormInput;
