'use client'

import { space_grotesk } from "@/icons/font";
import X from '../../icons/twitterlight.svg';
import Instagram from '../../icons/instagram.svg'
import Twitch from '../../icons/twitch.svg'
import Github from '../../icons/github.svg'
import Image from "next/image";
import { useMemo } from "react";

export default function Footer() {

    const imageList = useMemo(() => [
        { src: Github, alt: 'github', url: "https://github.com/SaiBarathR" },
        { src: X, alt: 'twitter', url: "https://twitter.com/saibarathr" },
        { src: Instagram, alt: 'Instagram', url: "https://www.instagram.com/saibarath_r/" },
        { src: Twitch, alt: 'twitch', url: "https://www.twitch.tv/meteoldrag0" },
    ], [])

    function handleIconClick(link) {
        return () => window.open(link, '_blank', 'noreferrer')
    }

    return <div className="dark:bg-black bg-[#F4E9CD] flex w-full items-center justify-center">
        <div className="p-12 max-w-[1440px] w-full gap-5 flex flex-col items-center justify-center">
            <div className="flex flex-row gap-3 cursor-pointer" >
                {imageList.map((img, index) => <Image key={img.url} className="transition ease-in-out delay-75  hover:scale-125 " src={img.src} alt={img.alt} onClick={handleIconClick(img.url)} />)}
            </div>
            <p className={"dark:text-[#E6EBE0] text-black text-base text-center animate-text " + space_grotesk.className}>All magic belongs to the CSS sorcerer. © 2023</p>
        </div>
    </div>
}