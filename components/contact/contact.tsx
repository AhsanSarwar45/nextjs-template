// External imports
import { Formik } from "formik";

// Component imports
import ContactData from "@/interfaces/contactData";

// Project imports
import FormikInput, { FormikTextArea } from "@/components/formikInput";

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

    const handleSubmit = (data: ContactData, formikProps: any) => {
        console.log("[Contact] Sending");
        fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                console.log("[Contact] Response received");
                if (res.status === 200) {
                    console.log("Response succeeded!");
                    formikProps.setSubmitting(false);
                    formikProps.resetForm();
                }
            })
            .catch((err) => {
                console.log("Response failed!");
                console.log(err);
                formikProps.setSubmitting(false);
            });
    };

    return (
        <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validate={validate}
            onSubmit={handleSubmit}
        >
            {(formikProps) => (
                <>
                    <FormikInput
                        fontSize={fontSize}
                        fieldName="name"
                        formikProps={formikProps}
                    />
                    <FormikInput
                        fontSize={fontSize}
                        fieldName="email"
                        formikProps={formikProps}
                    />
                    <FormikTextArea
                        fontSize={fontSize}
                        fieldName="message"
                        formikProps={formikProps}
                        height="10rem"
                    />
                </>
            )}
        </Formik>
    );
};

export default Contact;
