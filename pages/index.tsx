import type { NextPage } from "next";

import AnimatedPage from "@/components/page";
import FormInput from "@/components/formInput";

const Home: NextPage = () => {
    return (
        <AnimatedPage title="Home" height="100vh" justifyContent="center">
            <FormInput label="Name" labelPosition="placeholder" />
            <FormInput label="Email" placeholder="example@site.com" />
            <FormInput label="Age" isInvalid error="Incorrect" />
            <FormInput
                label="Country"
                isInvalid
                error="Incorrect"
                errorPosition="icon"
            />
        </AnimatedPage>
    );
};

export default Home;
