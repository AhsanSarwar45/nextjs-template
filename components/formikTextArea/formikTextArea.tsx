// External imports
import { Textarea } from "@chakra-ui/react";
import FormInput from "@/components/formInput";

// Component imports
import { FormikTextAreaProps } from "./types";

// Project imports

const FormikTextArea = (props: FormikTextAreaProps) => {
    return (
        <FormInput
            formikProps={props.formikProps}
            fieldName={props.name}
            height={props.height}
        >
            <Textarea
                value={props.formikProps.values[props.name]}
                variant="flushed"
                onChange={props.formikProps.handleChange(props.name)}
                onBlur={props.formikProps.handleBlur(props.name)}
                placeholder={props.name}
                _placeholder={{
                    color: "text.secondary",
                    textTransform: "capitalize",
                }}
                height="100%"
                fontSize={props.fontSize}
                borderColor="text.secondary"
                borderBottomWidth={2}
                focusBorderColor="text.primary"
                resize="none"
            />
        </FormInput>
    );
};

export default FormikTextArea;
