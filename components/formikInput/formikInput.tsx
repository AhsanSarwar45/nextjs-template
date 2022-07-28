// External imports
import { Input } from "@chakra-ui/react";

// Component imports
import { FormikInputProps } from "./types";

// Project imports
import FormInput from "@/components/formInput";

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
