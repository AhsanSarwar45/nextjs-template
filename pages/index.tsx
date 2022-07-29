import type { NextPage } from "next";

import AnimatedPage from "@/components/page";
import Input from "@/components/input";

const Home: NextPage = () => {
    return (
        <AnimatedPage title="Home" height="100vh" justifyContent="center">
            <Input label="Name" labelPosition="placeholder" />
            <Input label="Email" placeholder="example@site.com" />
            <Input label="Age" isInvalid error="Incorrect" />
            <Input
                label="Country"
                isInvalid
                error="Incorrect"
                errorPosition="icon"
            />
        </AnimatedPage>
    );
};

export default Home;
