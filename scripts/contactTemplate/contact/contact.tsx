// External imports
import { Formik, FormikHelpers, FormikProps } from "formik";

// Component imports
import ContactData from "scripts/contactTemplate/contactData";

// Project imports
import FormikInput, { FormikTextArea } from "@/components/formikInput";
import { handleFormikSubmit } from "@/utility/formik";
import { Button } from "@chakra-ui/react";

const Contact = () => {
    const fontSize = { xs: "4vw", md: "max(1vw, 1rem)" };

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.name) {
            errors.name = "Required";
        }
        if (!values.email) {
            errors.email = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }

        if (!values.message) {
            errors.message = "Required";
        }
        return errors;
    };

    return (
        <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validate={validate}
            onSubmit={(data, helpers) =>
                handleFormikSubmit<ContactData>(
                    "/api/contact",
                    data,
                    helpers,
                    (res) => console.log(res.status)
                )
            }
        >
            {(formikProps) => (
                <>
                    <FormikInput fontSize={fontSize} fieldName="name" />
                    <FormikInput fontSize={fontSize} fieldName="email" />
                    <FormikTextArea
                        fontSize={fontSize}
                        fieldName="message"
                        height="10rem"
                    />
                    <Button
                        isLoading={formikProps.isSubmitting}
                        onClick={() => {
                            formikProps.handleSubmit();
                        }}
                    >
                        Submit
                    </Button>
                </>
            )}
        </Formik>
    );
};

export default Contact;
