import { BookText, CodeSquare, HomeIcon, UserRound, MailIcon, Linkedin,GithubIcon, Twitter, DownloadIcon, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, FullscreenIcon, LockIcon, PhoneIcon, ContactIcon, ComputerIcon, AppleIcon, ArrowDownNarrowWideIcon, AppWindowIcon } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <MailIcon size={30} strokeWidth={1} />,
        src: "mailto:limk69966@gmail.com",
    },
    {
        id: 2,
        logo: <GithubIcon size={30} strokeWidth={1} />,
        src: "https://github.com/greensoft0608",
    },
    {
        id: 3,
        logo: <DownloadIcon size={30} strokeWidth={1} />,
        src: "/myresume.pdf",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    // {
    //     id: 5,
    //     title: "Clients",
    //     icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    //     link: "/testimonials",
    // },
    {
        id: 6,
        title: "Contact",
        icon: <ContactIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Web3 Frontend Engineer",
        subtitle: "Unifarm",
        description: "Integrated AMM with gasless logic on Shardeum network based on Uniswap SDK and developed IDO and token bridge smart contract for integrating cross-chain",
        date: "Oct 2022",
    },
    {
        id: 2,
        title: "Blockchain Developer",
        subtitle: "Rebate",
        description: "Build dApp implementing DEX on Ethereum using Solidity and also the crypto investment platform using React on Ethereum network.",
        date: "Oct 2021",
    },
    {
        id: 3,
        title: "Full Stack Developer",
        subtitle: "SBI Holding",
        description: "Developed RESTful APIs for music/video commerce web app using Django-Rest-Framework and reviewed the pull requests submitted from other front-end developers.",
        date: "Sep 2020",
    },
    {
        id: 4,
        title: "Front Developer",
        subtitle: "Westgate",
        description: "Integrated Web Admin Panel to IoT projects using Angular , Node.js , and AWS EC2 and Used React.js , Node.js and MongoDB to build RESTful APIs for live communication for IoTprojects.",
        date: "Feb 2027",
    },
    {
        id: 5,
        title: "Education",
        subtitle: "Nanyang Technological University",
        description: "Master's Degree in Computer Science, Nanyang Technological University",
        date: "May 2013",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 7,
        text: "YEARS OF EXPERIENCE",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 30,
        text: "SATISFIED CUSTOMERS",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 30,
        text: "COMPLETED PROJECTS",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 10,
        text: "WINNING AWARDS",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <ComputerIcon />,
        title: "Full-Stack Web",
        description: "Crafting dynamic web apps with React, Node.js, and databases like MySQL and MongoDB for seamless user experiences.",
    },
    {
        icon: <AppleIcon />,
        title: "Mobile App",
        description: "Building cross-platform mobile apps using React Native, ensuring native-like performance and backend synchronization.",
    },
    {
        icon: <LockIcon />,
        title: "Blockchain",
        description: "Integrating Ethereum and Solidity for decentralized solutions like smart contracts, enhancing security and transparency.",
    },
    {
        icon: <Book />,
        title: "Solutions",
        description: "Tailored development addressing unique project needs, including custom features, integration, and scalable design.",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimizing your online presence through advanced SEO strategies.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "https://aetherapparel.com/",
    },
    {
        id: 2,
        title: "Design Perfecto",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "https://designperfecto.com/",
    },
    {
        id: 3,
        title: "E-commerce Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "https://peacefulsquirrelbox.com/",
    },
    {
        id: 4,
        title: "Go Tasting Local",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "https://apps.apple.com/in/app/go-tasting-local/id1567525232",
    },
    {
        id: 5,
        title: "MYKA App",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "https://apps.apple.com/in/app/myka/id1600228371",
    },
    {
        id: 6,
        title: "Nftave Blockchain",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "https://junglefreaks.io/",
    },
    {
        id: 7,
        title: "BlazeX Blockchain",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "https://blazex.org",
    },
    {
        id: 8,
        title: "ONEDEX Blockchain",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "https://onedex.app/",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "Incredible platform! The testimonials here are genuine and have helped me make informed decisions. Highly recommended!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Perez",
        description:
            "I love the variety of testimonials available on this page. It's inspiring to see how other people have overcome challenges similar to mine. Thank you for this ",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María Garcia",
        description:
            "Excellent resource for authentic reviews on different products and services. It has helped me a lot in my online purchases. Bravo for this site!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "What a fantastic find! The testimonials here are honest and detailed. I feel more confident making decisions after reading the experiences shared by other users.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sanchez",
        description:
            "A gem on the web. The testimonials are easy to find and well organized. Definitely my number one destination when I need reliable references!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martinez",
        description:
            "Fantastic resource for those seeking validation before making big decisions! The testimonials here are truthful and really helpful. Thanks for simplifying my decision-making process!",
        imageUrl: "/profile6.png",
    },
];