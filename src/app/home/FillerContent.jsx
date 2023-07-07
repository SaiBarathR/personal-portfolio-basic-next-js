'use client'

import { Grid, Tooltip } from "@mui/material"
import Image from "next/image"
import CssImage from "../../icons/cssmagic.png"
import Github from "../../icons/github.jpeg"


export default function FillerContent() {

    return <div className="w-full flex  justify-center items-center  bg-black content-center">
        <div className="p-12  max-w-[1440px]  flex flex-col gap-10 items-center justify-center mb-7">
            <p className="font-normal text-[9vw] md:text-7xl text-white w-full text-center">Dive into the world of code.</p>
            <Grid container className="flex md:m-5 flex-col md:flex-row gap-24 md:gap-5 lg:justify-between md:justify-center md:content-center">
                <ImageDescriptionsRenderer link={"https://mahashipping.netlify.app/"} src={CssImage} header={'CSS Magic'} description={'Immerse into the world of advanced CSS creations that transform websites into visual wonders!'} />
                <ImageDescriptionsRenderer link={'https://github.com/SaiBarathR'} src={Github} header={'Github Projects'} description={'Check out a trove of groundbreaking Github projects I’ve contributed to!'} />
            </Grid>
        </div>
    </div>
}

function ImageDescriptionsRenderer({ src, header, description, link }) {

    return (
        <Tooltip title={link}>
            <Grid onClick={() => window.open(link, '_blank', 'noreferrer')} item className="flex md:w-[48%] flex-col gap-5 text-center items-center hover:scale-110 cursor-pointer transition ease-linear delay-50 hover:translate-y-7">
                <Image src={src} alt="link" className="w-full max-h-[384px] max-w-[384px] md:max-w-[304px] lg:max-w-[384px]  bg-white rounded-[80px]" />
                <h3 className="font-normal text-3xl :hover animate-pulse text-white  ">{header}</h3>
                <p className="text-[#f4f1bb] :hover animate-pulse font-normal text-base max-w-sm">{description}</p>
            </Grid>
        </Tooltip>

    )
}