import { space_grotesk } from "@/font";
import { useMemo } from "react"

export default function Description() {
    const description = useMemo(() => [
        'Welcome to the digital playground of a front-end expert React developer. Follow the journey of a seasoned coder, conquering challenges and transforming visions into reality.',
        `With a strong command over React, Next.js, JavaScript, Typescript, SaaS, WebAPI's, Webpack and other modern web technologies along with strong knowledge in Node.js, MySQL, PostgreSQL, RestAPI's, Spring Boot. I have delivered exceptional user experiences, ensuring projects run smoothly, and websites come to life.`,
        `From working with startups to Fortune 500 companies, I've honed my skills, driving innovative solutions and pushing the boundaries of what's possible in the digital realm.`,
    ], []);

    return (
        <div className="w-full min-h-[400px] flex flex-col  items-center bg-[#da7422]">
            <div className="max-w-[1440px] w-full p-12 flex flex-col gap-7 text-center items-start">
                <h2 className="text-black text-4xl 2xl:text-6xl text-center  font-normal md:text-5xl">
                    Mastering the Front-End
                </h2>
                {description.map((paragraph, index) => <p key={index + paragraph} className={"text-white  text-start lg:max-w-[60%] font-bold text-xl " + space_grotesk.className}>{paragraph}</p>)}
            </div>
        </div>
    )
}