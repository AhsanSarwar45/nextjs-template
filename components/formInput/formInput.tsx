import {
    InputGroup,
    Icon,
    Tooltip,
    InputRightElement,
    InputGroupProps,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { FormInputProps } from "./types";

const FormInput = (props: FormInputProps & InputGroupProps) => {
    const { fieldName, formikProps, ...inputGroupProps } = props;

    const [isErrorOpen, setIsErrorOpen] = useState(false);

    return (
        <InputGroup {...inputGroupProps}>
            {props.children}
            {formikProps.errors[fieldName] && formikProps.touched[fieldName] && (
                <Tooltip
                    hasArrow
                    label={props.formikProps.errors[fieldName]}
                    bgColor="brand.accent"
                    color="text.primary"
                    isOpen={isErrorOpen}
                >
                    <InputRightElement
                        id={`${props.fieldName}-input-error-icon`}
                        onMouseEnter={() => setIsErrorOpen(true)}
                        onMouseLeave={() => setIsErrorOpen(false)}
                        onClick={() => setIsErrorOpen(true)}
                    >
                        <Icon as={BsExclamationCircle} color="red.300" />
                    </InputRightElement>
                </Tooltip>
            )}
        </InputGroup>
    );
};

export default FormInput;
