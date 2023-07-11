import { space_grotesk } from "@/icons/font";

export function Hobbies() {
    return (
        <div className="w-full dark:bg-black bg-[#F4E9CD] flex items-center justify-center">
            <div className="p-12  max-w-[1440px] text-center md:text-left  flex flex-col md:flex-row w-full gap-10 items-center ">
                <h2 className="dark:text-[#F4F1BB] text-[#815AC0] text-5xl flex-1 ">Endless <br />Pursuits</h2>
                <p className={"dark:text-[#9BC1BC] text-black" + space_grotesk.className}>Not only do I tinker with code, I also enjoy Ligth Novels, Software development, PC Assembling, Badminton and even a bit of wild origami!</p>
            </div>
        </div>
    )
}