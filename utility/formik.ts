// External imports
import { FormikHelpers } from "formik";

// Project imports
import { JsonHeader } from "@/data/headers";
import {
    SubmitSuccessCallback,
    SubmitErrorCallback,
} from "@/types/fetchCallbacks";

export const handleFormikSubmit = <T>(
    endpoint: string,
    data: T,
    formikProps: FormikHelpers<T>,
    onSuccess: SubmitSuccessCallback = () => {},
    onError: SubmitErrorCallback = () => {}
) => {
    console.log("[Contact] Sending");
    fetch(endpoint, {
        method: "POST",
        headers: JsonHeader,
        body: JSON.stringify(data),
    })
        .then((res) => {
            console.log("[Contact] Response received");
            if (res.status === 200) {
                console.log("[Contact] Response succeeded!");
                onSuccess(res);
                formikProps.resetForm();
            }
        })
        .catch((err) => {
            console.log("[Contact] Response failed!: " + err);
            onError();
        })
        .finally(() => {
            formikProps.setSubmitting(false);
        });
};
