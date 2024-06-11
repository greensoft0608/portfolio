import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/home-4.png" width="400" height="400" className="w-[350px] h-full " alt="Particles " style={{opacity:'0.5'}}/>
        </MotionTransition>
    );
}

export default AvatarServices;