import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" style={{opacity:"0.7"}} />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Hi There, I AM KEVIN LIM <br />
                        <TypeAnimation
                            sequence={[
                                "software developer",
                                1000,
                                "full stack web developer",
                                1000,
                                "mobile expert",
                                1000,
                                "blockchain developer",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        As an experienced full-stack web developer with expertise in React JS, Node.js, Express.js, Typescript, Tailwind CSS, MySQL and MongoDB, I have a strong background in developing high-quality, responsive full stack web, mobile, and blockchain applications. 
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            <Link href="portfolio">View projects</Link>
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            <Link href="contact">Contact me</Link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;