import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            {/* <AvatarServices /> */}
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">My <span className="font-bold text-secondary"> services.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">🌐 Full-stack web development: Comprehensive development services encompassing front-end and back-end technologies, tailored to your project requirements.</p>
                    <p className="mb-3 text-xl text-gray-300">📱 Mobile app development: Cross-platform mobile app development utilizing React Native, delivering native-like performance and user experiences.</p>
                    <p className="mb-3 text-xl text-gray-300">⛓️ Blockchain integration: Leveraging blockchain technology to enhance security and transparency in web and mobile applications, with expertise in Ethereum, Solidity, and Smart Contracts.</p>
                    <p className="mb-3 text-xl text-gray-300">🔍 Customized Solutions: From traditional web and mobile applications to blockchain integration, I provide tailored solutions to meet your unique needs and exceed expectations.</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65"><Link href="contact">Contact me</Link></button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;