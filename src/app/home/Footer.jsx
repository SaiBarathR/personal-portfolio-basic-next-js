'use client'

import { space_grotesk } from "@/font";
import Twitter from '../../icons/twitter.svg'
import Instagram from '../../icons/instagram.svg'
import Twitch from '../../icons/twitch.svg'
import Image from "next/image";

export default function Footer() {

    function handleIconClick(link) {
        return () => window.open(link, '_blank', 'noreferrer')
    }

    return <div className="bg-black flex w-full items-center justify-center">
        <div className="p-12 max-w-[1440px] w-full gap-5 flex flex-col items-center justify-center">
            <div className="flex flex-row gap-3 cursor-pointer hover:gap-8 transition ease-in-out delay-200  hover:animate-wiggle " >
                <Image src={Twitter} alt="Twitter" onClick={handleIconClick('https://twitter.com/saibarathr')} />
                <Image src={Instagram} alt="Instagram" onClick={handleIconClick("https://www.instagram.com/saibarath_r/")} />
                <Image src={Twitch} alt="twitch" onClick={handleIconClick("https://www.twitch.tv/meteoldrag0")} />
            </div>
            <p className={"text-[#E6EBE0] text-base text-center animate-text " + space_grotesk.className}>All magic belongs to the CSS sorcerer. © 2023</p>
        </div>
    </div>
}