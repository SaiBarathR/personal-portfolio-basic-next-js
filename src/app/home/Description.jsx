'use client'

import { space_grotesk } from "@/font";
import { useMemo } from "react"

export default function Description() {
    const description = useMemo(() => [
        'Welcome to the digital playground of a front-end expert React developer. Follow the journey of a seasoned coder, conquering challenges and transforming visions into reality.',
        'With a strong command over React, JavaScript, and other modern web technologies, this developer delivers exceptional user experiences, ensuring projects run smoothly, and websites come to life.',
        `From working with startups to Fortune 500 companies, they've honed their skills, driving innovative solutions and pushing the boundaries of what's possible in the digital realm.`,
    ], []);

    return (
        <div className="w-full min-h-[400px] flex flex-col  items-center bg-[#da7422]">
            <div className="max-w-[1440px]  p-12 flex flex-col gap-7 text-center items-start">
                <div component={"h2"} className="text-black text-4xl 2xl:text-6xl font-normal md:text-5xl">
                    Mastering the Front-End
                </div>
                {description.map((paragraph, index) => <p key={index + paragraph} className={"text-white w-full text-start lg:max-w-[60%] font-bold text-xl " + space_grotesk.className}>{paragraph}</p>)}
            </div>
        </div>
    )
}