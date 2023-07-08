'use client'

import Image from "next/image";
import IntroImgSrc from '../../icons/intrologo.svg'
import { space_grotesk } from "@/font";

export default function Intro() {

    return (
        <div className='w-full min-h-[800px] flex flex-col justify-center  items-center p-12 intro-background-color content-center '>
            <div className="max-w-[1440px] p-0 flex flex-col items-center justify-center gap-7">
                <Image className="animate-spin-fast" alt="intro" src={IntroImgSrc} />
                <p className="md:animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-[9vw] lg:text-[8vw] xl:text-9xl 2xl:text-[150px]  md:text-[8vw] text-center not-italic  text-[#fffbdb] break-words">
                    Unleashing<br />React<br />Superpowers!
                </p>
                <div className="gap-7 flex flex-col md:flex-row">
                    <button variant="contained" className={"bg-black p-2  rounded-none normal-case text-[#FFFBDB] text-base font-bold hover:scale-125 transition ease-in-out delay-75 " + space_grotesk.className}>
                        Explore Projects
                    </button>
                    <button variant="contained" className={"bg-[#FFFBDB] p-2 rounded-none normal-case text-[#30362F] text-base font-bold hover:scale-125 transition ease-in-out delay-75 " + space_grotesk.className}>
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
    )
}