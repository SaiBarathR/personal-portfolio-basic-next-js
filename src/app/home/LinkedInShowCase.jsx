"use client"

import Image from "next/image";
import LinkedInImagePatter from '../../icons/pattern.png'
import LinkedInProfilePic from '../../icons/linkedinprofile.JPG'
import { space_grotesk } from "@/font";

export default function LinkedInShowcase() {
    return (
        <div className="w-full flex flex-col justify-center items-center  bg-black content-center linkedin-background-img">
            <div className="p-12 w-full  max-w-[1440px] flex flex-col gap-5 items-center md:items-start">
                <div className={"text-[#9bc1bc] font-normal mx-1.5 md:text-base text-[3vw] "} >
                    <p className={space_grotesk.className}>Linkedin Profile</p>
                </div>
                <div className="flex w-full flex-col md:flex-row items-center justify-between md:gap-1 gap-5">
                    <div component={"p"} className="text-[#f4f1bb] text-[6vw] md:text-[3vw] lg:text-5xl text-center md:text-left max-w-lg">
                        Get amazed by my professional journey, documented on my Linkedin Profile!
                    </div>
                    <div className="bg-slate-300 md:max-h-[155px] md:max-w-[155px] md:min-h-[155px] md:min-w-[155px] max-h-[200px] max-w-[200px] min-h-[200px] min-w-[200px] lg:max-h-[250px] lg:max-w-[250px] lg:min-h-[250px] lg:min-w-[250px] rounded-full">
                    </div>
                </div>
            </div>
        </div>
    )
}