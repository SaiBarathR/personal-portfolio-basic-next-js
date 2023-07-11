'use client'

import { space_grotesk } from "@/icons/font"
import { getGithubUserDetails, getRepos } from "@/service/gitHubServices";
import { useEffect, useMemo, useRef, useState } from "react"
import DropDown from '../../icons/dropdown.svg'
import { Grow, Slide } from "@mui/material";
import { professionalProjectDetails } from "../utils";

export default function Projects({ toggleDrawer, open, currentTheme }) {

    const [gitHubDetail, setGitHubDetail] = useState({});
    const [repositoryDetails, setRepositoryDetails] = useState([])

    async function getGitubUserInfo() {
        try {
            const resp = await getGithubUserDetails('saibarathr');
            setGitHubDetail(resp);
        }
        catch (error) {
            console.error(error)
        }
    }

    async function getRepositoryList() {
        try {
            const resp = await getRepos('saibarathr');
            setRepositoryDetails(resp.sort((first, second) => new Date(second.updated_at) - new Date(first.updated_at)));
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getGitubUserInfo()
        getRepositoryList()
    }, [])

    function onClickContact(link, name) {
        copyTextToClipboard(name)
        link.includes('mail') ? window.open(link) : window.open(link, '_blank', 'noreferrer')
    }

    return <div className={" w-full  md:w-auto  dark:bg-gradient-to-r dark:from-emerald-500 dark:from-20% dark:via-sky-500 dark:via-100% bg-gradient-to-br from-teal-200 from 20% via-lime-400 via-100%  bg-teal-100 h-full flex flex-row " + space_grotesk.className}>
        <div className="w-full dark:text-black flex flex-col  items-center ">
            <h1 className="font-semibold text-3xl m-2">Projects</h1>
            <div className="w-full h-6/6 overflow-y-auto min-h-[500px]  flex flex-col p-2 pl-5 md:p-7 md:pl-11 gap-9 items-center ">
                <ProjectList currentTheme={currentTheme} open={open} className={open ? " animate-appear" : "animate-disappear"} repositoryDetails={repositoryDetails} header="Github Projects" />
                <ProjectList currentTheme={currentTheme} open={open} className={open ? " animate-appear-1 " : "animate-disappear"} header="Professional Projects" repositoryDetails={professionalProjectDetails} />
            </div>
        </div>
        <div className="w-[7px] h-[38px] bg-slate-400 dark:bg-black rounded-lg flex self-center items-center m-2 md:mr-2 cursor-pointer " onMouseDown={toggleDrawer(false)}></div>
    </div>
}

function ProjectList({ repositoryDetails, header, open, className, currentTheme }) {

    const [openPersonalPRojects, setOpenPersonalPRojects] = useState(false);
    const isProfessionalProject = useMemo(() => header === "Professional Projects", [header])

    function formatDate(string) {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], options);
    }

    return <div className={"w-full bg-cyan-100 dark:bg-[#f3cd9c2a] bg-gradient-to-br from-lime-200 from 20% via-teal-400 via-100%  flex flex-col shadow md:shadow-2xl items-start  rounded-2xl " + className} >
        <div className={"p-4 md:p-6  flex justify-between gap-8 w-full items-center "}>
            <h1 className="font-normal text-2xl">{header}</h1>
            <svg
                className={`cursor-pointer path-black min-w-[30px] min-h-[30px] p-1 rounded-full hover:bg-cyan-200  dark:hover:bg-emerald-600 hover:scale-125 ${openPersonalPRojects ? " rotate-180" : ""}`}
                onClick={() => setOpenPersonalPRojects((prev) => !prev)} src={DropDown} alt={"arrow"}
                width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16797 7L10.0013 13.6667L15.8346 7" stroke={currentTheme === "dark" ? "#000000" : "#99A0A8"} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
        <Grow timeout={{ enter: 600, appear: 600, exit: 300, }} in={openPersonalPRojects} mountOnEnter unmountOnExit>
            <div className=" w-full items-center justify-center flex flex-col gap-6 mb-4 ">
                {repositoryDetails.map((repo, index) => (
                    <div key={repo.id}
                        onClick={() => repo.html_url && window.open(repo.html_url, '_blank', 'noreferrer')}
                        className={`w-11/12 none gap-3 p-4 flex-col ${isProfessionalProject ? '' : 'cursor-pointer'} bg-cyan-200 dark:bg-emerald-400 rounded-2xl shadow-md ${isProfessionalProject ? '' : 'hover:bg-sky-300 hover:scale-105 transition ease-in-out delay-75'}  flex`}
                    ><div className="flex  w-full justify-between">
                            <p className="uppercase font-medium">{repo.name}</p>
                            <p>{formatDate(repo.created_at)}</p>
                        </div>
                        <p >{repo.description}</p>
                        {repo.homepage && <div className="bg-teal-400 dark:bg-teal-300 hover:bg-teal-600 dark:hover:bg-teal-600 hover:text-white transition ease-in-out hover:scale-105 w-fit break-all  p-2 gap-1  rounded-2xl" onClick={() => window.open(repo.homepage, '_blank', 'noreferrer')}> {repo.homepage}</div>}
                        <p className="uppercase font-medium">{repo.language}</p>
                        <div className="grid grid-cols-2 lg:grid-cols-3 text-center gap-2">
                            {repo.topics.map((topic) => <div key={topic} className="bg-teal-400 dark:bg-teal-300 animate-appear-1 break-words capitalize  p-2 gap-1  rounded-2xl" > {topic}</div>)}
                        </div>
                    </div>
                ))
                }
            </div>
        </Grow>
    </div>
}
