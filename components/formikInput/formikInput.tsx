// External imports

// Component imports
import {
    FormikBaseInputProps,
    FormikInputProps,
    FormikTextAreaProps,
} from "./types";

// Project imports
import FormInput, { FormTextArea } from "@/components/formInput";
import { useFormikContext } from "formik";

const FormikInput = (props: FormikInputProps) => {
    const { values, errors, touched, handleChange, handleBlur } =
        useFormikContext<any>();
    const {
        label,
        labelPosition,
        error,
        errorPosition,
        fieldName,
        ...inputProps
    } = props;

    return (
        <FormInput
            label={label || fieldName}
            labelPosition={labelPosition}
            value={values[fieldName]}
            onChange={handleChange(fieldName)}
            onBlur={handleBlur(props.fieldName)}
            isInvalid={
                errors[props.fieldName]?.valueOf() !== "" &&
                (touched[props.fieldName]?.valueOf() as boolean)
            }
            error={errors[props.fieldName]?.toString()}
            errorPosition={props.errorPosition}
            {...inputProps}
        />
    );
};
export const FormikTextArea = (props: FormikTextAreaProps) => {
    const { values, errors, touched, handleChange, handleBlur } =
        useFormikContext<any>();
    const {
        label,
        labelPosition,
        error,
        errorPosition,
        fieldName,
        ...inputProps
    } = props;

    return (
        <FormTextArea
            label={label || fieldName}
            labelPosition={labelPosition}
            value={values[fieldName]}
            onChange={handleChange(fieldName)}
            onBlur={handleBlur(props.fieldName)}
            isInvalid={
                errors[props.fieldName]?.valueOf() !== "" &&
                (touched[props.fieldName]?.valueOf() as boolean)
            }
            error={errors[props.fieldName]?.toString()}
            errorPosition={props.errorPosition}
            {...inputProps}
        />
    );
};

const defaultProps = {
    label: "",
    labelPosition: "top",
    errorPosition: "bottom",
};

FormikInput.defaultProps = defaultProps;
FormikTextArea.defaultProps = defaultProps;

export default FormikInput;
