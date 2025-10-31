import {Await, useLoaderData} from "react-router"
import {Suspense} from "react"
import {Tabs} from "~/components/Tabs"
import type {Route} from "~/components/Navigation"

export const meta = () => {
    return [{title: "Projects"}]
}

export const loader = async () => {
    const tabs = new Promise<Route[]>(resolve =>
        setTimeout(
            () =>
                resolve([
                    {name: "Builds", url: "/builds"},
                    {name: "Deploys", url: "/deploys"},
                    {name: "Analytics", url: "/analytics"},
                    {name: "Logs", url: "/logs"},
                    {name: "Settings", url: "/settings"},
                ]),
            1000,
        ),
    )

    return {tabs}
}

export default function Projects() {
    const {tabs} = useLoaderData<typeof loader>()

    return (
        <Suspense fallback={<div>Loading tabs...</div>}>
            <Await resolve={tabs}>
                {tabs => {
                    return <Tabs tabs={tabs} />
                }}
            </Await>
        </Suspense>
    )
}
