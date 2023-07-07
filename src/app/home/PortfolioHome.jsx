import Intro from "./Intro";
import Image from "next/image";
import LinkedInShowcase from "./LinkedInShowCase";
import Description from "./Description";

export default function PortfolioHome() {
    return (
        <>
            <Intro />
            <LinkedInShowcase />
            <Description />
        </>
    )
}
