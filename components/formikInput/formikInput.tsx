// External imports

// Component imports
import { FormikInputProps, FormikTextAreaProps } from "./types";

// Project imports
import Input, { TextArea } from "@/components/input";

const FormikInput = (props: FormikInputProps) => {
    const {
        fieldName,
        label,
        formikProps,
        value,
        onChange,
        onBlur,
        ...inputProps
    } = props;
    return (
        <Input
            label={label || fieldName}
            value={formikProps.values[fieldName]}
            onChange={formikProps.handleChange(fieldName)}
            onBlur={formikProps.handleBlur(fieldName)}
            isInvalid={
                formikProps.errors[fieldName] && formikProps.touched[fieldName]
            }
            error={formikProps.errors[fieldName]}
            {...inputProps}
        />
    );
};

export const FormikTextArea = (props: FormikTextAreaProps) => {
    const {
        fieldName,
        label,
        formikProps,
        value,
        onChange,
        onBlur,
        ...inputProps
    } = props;
    return (
        <TextArea
            label={label || fieldName}
            value={formikProps.values[fieldName]}
            onChange={formikProps.handleChange(fieldName)}
            onBlur={formikProps.handleBlur(fieldName)}
            isInvalid={
                formikProps.errors[fieldName] && formikProps.touched[fieldName]
            }
            error={formikProps.errors[fieldName]}
            {...inputProps}
        />
    );
};

export default FormikInput;
