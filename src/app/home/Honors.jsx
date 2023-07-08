"use client"

import Image from "next/image";
import Arrow from '../../icons/arraow.png'
import { space_grotesk } from "@/font";
import { Tooltip } from "@mui/material";

export default function Honors() {

    const honors = [
        { date: "May 30, 2023", description: "Star Performer Award for Q3 FY23 - Ozonetel Communications", link: "https://www.linkedin.com/posts/saibarath-r_im-thrilled-to-share-that-i-received-the-activity-7073490672997068800-pQPz?utm_source=share&utm_medium=member_desktop" },
        { date: "July 6, 2023", description: "Hack Idea Mech - A - Thon - SRM University", link: "https://drive.google.com/file/d/1taLGx_RfPkQq3fiAeeEqTBRoW_UGp2tn/view?usp=sharing" },
    ]
    const courseraCourses = [
        { date: "May 3, 2021", description: "Data Science - IBM", link: "https://drive.google.com/file/d/18SLontlSLCoqLdNk11bgUmVrlc44r2Gn/view?usp=sharing" },
        { date: "May 3, 2021", description: "AWS Fundamentals - Amazon Web Services", link: "https://drive.google.com/file/d/1yZC5xsifl2Mp_o_J08rNgDTxN8NXgv5M/view?usp=sharing" },
        { date: "April 4, 2021", description: "Programming with MATLAB - Vanderbilt University", link: "https://drive.google.com/file/d/1nC-pURo5bQYDyb4z0DgSCkh2bEuMQuk_/view?usp=sharing" },
    ]

    function ListItems({ list }) {
        return (
            list.map((item, index) => <Tooltip key={item.description + index} title={item.link}>
                <div
                    onClick={() => window.open(item.link, '_blank', 'noreferrer')}
                    className="w-full gap-2 md:gap-7 items-center flex flex-col md:flex-row   md:min-h-[73px] border-b-2 border-[#67A297] md:hover:scale-105 translate-y-4 transition ease-out delay-75 cursor-pointer">
                    < p > {item.date}</p>
                    <p className="flex-1 transform-none text-center md:text-start">{item.description}</p>
                    <Image src={Arrow} alt="link" />
                </div>
            </Tooltip>
            )
        )
    }

    return (
        <div className="w-full flex flex-col justify-center items-center  bg-[#77ACA2] content-center honors-background-img">
            <div className={"w-full max-w-[1440px] p-12 flex gap-5 flex-col items-center justify-center  text-[#031926] " + space_grotesk.className}>
                <ListItems list={honors} />
                {/* <div className="w-full gap-7 items-center flex flex-col min-h-[73px] border-b-2 border-[#67A297] hover:scale-105 translate-y-4 transition ease-out delay-75 cursor-pointer">
                    <p className="flex-1 transform-none">{"Coursera"}</p>
                    <Image src={Arrow} alt="link" /> */}
                <ListItems list={courseraCourses} />
                {/* </div> */}
            </div>
        </div>
    )
}