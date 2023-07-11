"use client"

import Image from "next/image";
import LinkedInImagePatter from '../../icons/pattern.png'
import LinkedInProfilePic from '../../icons/linkedin.svg'
import { space_grotesk } from "@/icons/font";
import Link from "next/link";
// import Resume from "../../../public/SaiBarathR_Resume.pdf"

export default function LinkedInShowcase() {
    return (
        <div className="w-full flex flex-col justify-center items-center  bg-black content-center linkedin-background-img">
            <div className="p-12 w-full  max-w-[1440px] flex flex-col gap-5 items-center md:items-start">
                <div className={"text-[#9bc1bc] font-normal mx-1.5 md:text-base text-[3vw] "} >
                    <p className={"cursor-pointer hover:scale-105 hover:opacity-100 " + space_grotesk.className} onClick={() => window.open('https://www.linkedin.com/in/saibarath-r', '_blank', 'noreferrer')}>Linkedin Profile</p>
                </div>
                <div className="flex w-full flex-col md:flex-row items-center justify-between md:gap-1 gap-5">
                    <p className="text-[#f4f1bb] text-[6vw] md:text-[3vw] lg:text-5xl text-center md:text-left max-w-lg">
                        Get amazed by my professional journey, documented on my Linkedin Profile!
                    </p>
                    <div className="flex items-center flex-col">
                        <Image src={LinkedInProfilePic} onClick={() => window.open('https://www.linkedin.com/in/saibarath-r', '_blank', 'noreferrer')} alt="profile"
                            className="cursor-pointer dark:opacity-95 md:max-h-[155px] md:max-w-[155px] md:min-h-[155px] md:min-w-[155px] max-h-[200px] max-w-[200px] min-h-[200px] min-w-[200px] lg:max-h-[250px] lg:max-w-[250px] lg:min-h-[250px] lg:min-w-[250px] hover:scale-110 hover:transition ease-in-out delay-150"
                        />
                        <Link
                            href={"../../../public/SaiBarathR_Resume.pdf"}
                            download="SaiBarathR_Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button
                                className={"button text-sm text-black " + space_grotesk.className} type="button">
                                <span className="button__text">Download CV</span>
                                <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307"
                                    data-name="Layer 2" className="svg">
                                    <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                            </button>
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    )
}