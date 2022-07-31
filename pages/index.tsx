// External imports
import type { NextPage } from "next";

// Project imports
import { AnimatedPage } from "@/components/page";

const Home: NextPage = () => {
    return (
        <AnimatedPage
            title="Home Of The NextJS Portfolio Template"
            description="An OpenSource Template For NextJS Portfolio With Multiple Cool Features"
            imageUrl="https://ahsan-nextjs-template.vercel.app/images/test.jpg"
        ></AnimatedPage>
    );
};

export default Home;
