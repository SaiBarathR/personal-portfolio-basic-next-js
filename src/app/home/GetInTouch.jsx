'use client'

import Image from "next/image";
import { space_grotesk } from "@/font";
import Twitter from '../../icons/twitter.svg'
import Gmail from '../../icons/gmail.svg'
import Linkedinsvg from '../../icons/linkedin.svg'
import Whatsapp from '../../icons/whatsapp.svg'
import ProfileEmoji from '../../icons/profilepic.png'
import Github from '../../icons/github.svg'

export default function GetInTouchDrawer({ toggleDrawer, open }) {

    return <div className={" w-full bg-teal-50 md:w-auto min-h-[200px] flex flex-row  h-full " + space_grotesk.className}>
        <div className="w-[6px] h-[30px] bg-slate-400 rounded-lg flex self-center items-center m-2 cursor-pointer " onMouseDown={toggleDrawer(false)}></div>
        <div className="w-full flex flex-col m-2 mr-4 md:m-10 md:mr-12 gap-9 items-center ">
            <h1 className="font-semibold text-3xl ">Contact - Info</h1>
            <GeitInTouchContent open={open} />
        </div>
    </div>
}

function GeitInTouchContent({ open }) {

    async function copyTextToClipboard(text) {
        setTimeout(async () => {
            if ('clipboard' in navigator) {
                return await navigator.clipboard.writeText(text);
            } else {
                return document.execCommand('copy', true, text);
            }
        }, 3000);
    }

    function onClickContact(link, name) {
        copyTextToClipboard(name)
        link.includes('mail') ? window.open(link) : window.open(link, '_blank', 'noreferrer')
    }

    function ImageRenderer({ src, link, name, className }) {
        return <div className={"flex hover:bg-cyan-200  md:m-0 m-2 flex-col md:flex-row gap-5  items-center cursor-pointer hover:scale-105 transition ease-in-out delay-75 hover:-translate-y-1 shadow-md p-2 rounded-lg " + className}
            onClick={() => onClickContact(link, name)}
        >
            <Image src={src} alt={name} />
            <p className="text-lg md:text-xl font-medium break-all">{name}</p>
        </div >
    }

    return <div className={`w-full flex flex-col bg-cyan-100 shadow-2xl p-4 md:p-6  gap-5 items-start rounded-2xl mb-5 overflow-y-auto ${open ? "animate-appear" : "animate-disappear"}`}>
        <div className="w-full flex h-min flex-col md:flex-row  items-center gap-5 ">
            <Image src={ProfileEmoji} alt={"profil"} className=" bg-teal-200 h-[80px] w-[80px] rounded-full flex items-center justify-center pl-2 pt-1" />
            <div>
                <h1 className="font-semibold text-2xl">Sai Barath R</h1>
                <p className="font-light text-xs">Software Engineer - RND</p>
            </div>
        </div>
        <div className="flex w-full flex-col p-3  gap-5 md:gap-8 pr-3 mt-1 mb-2 md:mb-5 overflow-y-auto">
            <ImageRenderer className={"animate-appear"} src={Linkedinsvg} name={"@saibarathr"} link={'https://www.linkedin.com/in/saibarath-r'} />
            <ImageRenderer className={"animate-appear-1"} src={Gmail} name={"Saibarathr@gmail.com"} link={'mailto:saibarathr@gmail.com'} />
            <ImageRenderer className={"animate-appear-2"} src={Github} name={"@SaiBarathR"} link={'https://github.com/SaiBarathR'} />
            <ImageRenderer className={"animate-appear-4"} src={Whatsapp} name={"Sai Barath R"} link={' https://wa.me/919843621231 '} />
            <ImageRenderer className={"animate-appear-6"} src={Twitter} name={"@saibarathr"} link={'https://twitter.com/saibarathr'} />
        </div>
    </div>
}