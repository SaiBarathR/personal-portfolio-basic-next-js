'use client'
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import IntroImgSrc from '../../icons/intrologo.svg'

export default function Intro() {

    return (
        <>
            <div className='w-full absolute min-h-[800px] flex flex-row justify-center items-center p-12 bg-[#30362f] content-center'>
                <Grid container className="z-20 flex flex-col items-center justify-center gap-7">
                    <Grid item>
                        <Image alt="intro" src={IntroImgSrc} />
                    </Grid>
                    <Grid item component={"p"} className=" text-[9vw] lg:text-[8vw]  md:text-[8vw] text-center not-italic  text-[#fffbdb] break-words">
                        Unleashing<br />
                        React<br />
                        Superpowers!
                    </Grid>
                    <Grid item className="gap-7 flex flex-col md:flex-row">
                        <Button variant="contained" className="bg-black rounded-none normal-case text-[#FFFBDB] text-base font-bold hover:bg-black hover:scale-125 transition ease-in-out delay-75">
                            Explore Projects
                        </Button>
                        <Button variant="contained" className="bg-[#FFFBDB] rounded-none normal-case text-[#30362F] transition ease-in-out delay-75 text-base font-bold hover:bg-[#FFFBDB] hover:scale-125">
                            Get in Touch
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}