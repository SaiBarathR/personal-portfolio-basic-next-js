import Intro from "./Intro";
import Image from "next/image";
import LinkedInShowcase from "./LinkedInShowCase";
import Description from "./Description";
import FillerContent from "./FillerContent";
import Honors from "./Honors";
import { Hobbies } from "./Hobbies";
import Footer from "./Footer";
import AboutMe from "./AboutMe";

export default function PortfolioHome() {
    return (
        <>
            <Intro />
            <AboutMe />
            <FillerContent />
            <Description />
            <LinkedInShowcase />
            <Honors />
            <Hobbies />
            <Footer />
        </>
    )
}
