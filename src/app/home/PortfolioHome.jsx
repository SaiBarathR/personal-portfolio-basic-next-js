import Intro from "./Intro";
import IntroImg from "../../icons/introoverlay.png"
import Image from "next/image";

export default function PortfolioHome() {
    return (
        <>
            <Image alt="background" src={IntroImg} className="z-10 h-full w-screen" />
            <Intro />
        </>
    )
}
