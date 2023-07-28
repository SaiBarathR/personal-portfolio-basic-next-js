'use client'

import { getRepoDetails, getRepos } from "@/service/gitHubServices";
import { GeitInTouchContent } from "./GetInTouch";
import { space_grotesk } from "@/icons/font";
import { useEffect, useState } from "react";
import { ProjectList } from "./Projects";

export default function AboutMe() {
    const [repositoryDetails, setRepositoryDetails] = useState([])

    async function getRepositories(name) {
        try {
            const resp = getRepoDetails({ owner: "saibarathr", name: name }).then((response) => {
                setRepositoryDetails((prev) => {
                    if (prev.length > 0) {
                        const newRepoList = prev.filter((item) => item.id === response.id)
                        return newRepoList.length > 0 ? prev : [...prev, response]
                    }
                    else { return [...prev, response] }
                })
            }).catch((error) => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getRepositories("folder-file-management");
        getRepositories("Custom-Table");
    }, [])

    return <div className={"w-full min-h-[400px] flex flex-col items-center bg-[#4fbcee] dark:bg-teal-800 " + space_grotesk.className}>
        <div className="flex md:p-12 p-4 flex-col md:flex-row justify-between w-full gap-4 max-w-[1200px]">
            {repositoryDetails.length > 0 && <>
                <GeitInTouchContent open={true} />
                <div className="w-full">
                    <ProjectList defaultOpen={true} enableDropDown={false} currentTheme={'dark'} open={repositoryDetails.length > 0} className={" animate-appear"} repositoryDetails={repositoryDetails} header="Highlighted Projects" />
                </div>
            </>
            }
        </div>
    </div>
}