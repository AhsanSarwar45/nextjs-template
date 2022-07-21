import {
    Text,
    Input,
    VStack,
    HStack,
    InputGroup,
    Icon,
    Tooltip,
    InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import FormInput from "./formInput";
// import Tooltip from "./tootip";

interface FormikInputProps {
    type: string;
    name: string;
    formikProps: any;
    fontSize: any;
}

const FormikInput = (props: FormikInputProps) => {
    return (
        <FormInput formikProps={props.formikProps} fieldName={props.name}>
            <Input
                value={props.formikProps.values[props.name]}
                variant="flushed"
                type={props.type}
                onChange={props.formikProps.handleChange(props.name)}
                onBlur={props.formikProps.handleBlur(props.name)}
                placeholder={props.name}
                _placeholder={{
                    color: "text.secondary",
                    textTransform: "capitalize",
                }}
                fontSize={props.fontSize}
                borderColor="text.secondary"
                borderBottomWidth={2}
                focusBorderColor="text.primary"
            />
        </FormInput>
    );
};

FormikInput.defaultProps = {
    type: "text",
    fontSize: "lg",
};

export default FormikInput;
