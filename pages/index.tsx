// External imports
import type { NextPage } from "next";

// Project imports
import { AnimatedPage } from "@/components/page";

const Home: NextPage = () => {
    return (
        <AnimatedPage
            title="NextJS-ChakraUI Template"
            description="A template For NextJS that is accessibility and seo friendly "
            imageUrl="https://ahsan-nextjs-template.vercel.app/images/socialCardImage.png"
        ></AnimatedPage>
    );
};

export default Home;
