'use client'

import Image from "next/image";
import { space_grotesk } from "@/font";
import { useMemo, useState } from "react";
import GetInTouchDrawer from "./GetInTouch";
import Projects from "./Projects";
import CustomDrawer from "../Components/CustomDrawer";
import { useTheme } from "next-themes";
import Script from "next/script";
import { ThemeSwitcher } from "../Components/ModeSwitcherButton";


export default function Intro() {
    const [openGetInfo, setGetInfo] = useState(false);
    const [openProjects, setOpenProjects] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = useMemo(() => theme === "system" ? systemTheme : theme, [systemTheme, theme,])

    const toggleDrawer = (newOpen) => () => {
        setGetInfo(newOpen);
    };

    const toggleProjectsDrawer = (newOpen) => () => {
        setOpenProjects(newOpen);
    }

    return (
        <>
            <div className='w-full min-h-[800px] bg-[#F4E9CD] dark:bg-black flex flex-col justify-center  items-center p-12 intro-background-color content-center '>
                <div className="max-w-[1440px] p-0 flex flex-col items-center justify-center gap-7">
                    <div className="hover:scale-125 transition ease-in-out delay-75 cursor-pointer" onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")} >
                        <svg className="animate-spin-slow " xmlns="http://www.w3.org/2000/svg" width="119" height="120">
                            <path d="M 59.5 0.663 C 92.273 0.663 118.841 27.229 118.841 60 C 118.841 60.042 118.841 60.084 118.841 60.127 L 0.159 60.127 C 0.159 60.084 0.159 60.042 0.159 60 C 0.159 27.229 26.727 0.663 59.5 0.663 Z M 59.5 119.337 C 49.507 119.337 40.092 116.867 31.83 112.505 L 87.17 112.505 C 78.908 116.867 69.493 119.337 59.5 119.337 Z M 118.803 62.151 C 118.757 63.427 118.672 64.692 118.547 65.946 L 0.453 65.946 C 0.328 64.692 0.243 63.427 0.197 62.151 Z M 118.31 67.971 C 118.116 69.422 117.868 70.856 117.571 72.272 L 1.429 72.272 C 1.132 70.856 0.884 69.422 0.69 67.971 Z M 116.568 76.321 C 116.152 77.778 115.682 79.213 115.159 80.622 L 3.841 80.622 C 3.318 79.213 2.848 77.778 2.432 76.321 Z M 113.485 84.671 C 112.773 86.227 111.995 87.746 111.156 89.226 L 7.844 89.226 C 7.005 87.746 6.227 86.227 5.515 84.671 Z M 105.22 97.829 C 103.432 99.987 101.494 102.017 99.422 103.902 L 19.578 103.902 C 17.506 102.017 15.568 99.987 13.78 97.829 Z" fill={currentTheme === "dark" ? "#30362F" : "#FFFFFF"}></path>
                        </svg>
                    </div>
                    <ThemeSwitcher />
                    <p className="md:animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-[9vw] lg:text-[8vw] xl:text-9xl 2xl:text-[150px]  md:text-[8vw] text-center not-italic  text-[#fffbdb] break-words">
                        Unleashing<br />React<br />Superpowers!
                    </p>
                    <div className="gap-7 flex flex-col md:flex-row">
                        <button onClick={() => setOpenProjects((prev) => !prev)} variant="contained" className={"bg-black p-2 dark:bg-cyan-300 dark:text-black rounded-none normal-case text-[#FFFBDB] text-base font-bold hover:scale-125 transition ease-in-out delay-75 " + space_grotesk.className}>
                            Explore Projects
                        </button>
                        <button onClick={() => setGetInfo((prev) => !prev)} variant="contained" className={"bg-[#FFFBDB] p-2 rounded-none normal-case dark:bg-pink-300 text-[#30362F] text-base font-bold hover:scale-125 transition ease-in-out delay-75 " + space_grotesk.className}>
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
            <CustomDrawer open={openGetInfo} toggleDrawer={toggleDrawer} position={"right"} width="auto">
                <GetInTouchDrawer open={openGetInfo} toggleDrawer={toggleDrawer} />
            </CustomDrawer>
            <CustomDrawer open={openProjects} toggleDrawer={toggleProjectsDrawer} position={"left"} width={"50%"}>
                <Projects open={openProjects} toggleDrawer={toggleProjectsDrawer} currentTheme={currentTheme} />
            </CustomDrawer>
        </>
    )
}