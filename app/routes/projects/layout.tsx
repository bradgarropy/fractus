import {Await, Outlet, useLoaderData} from "react-router"
import {Suspense} from "react"
import {Tabs} from "~/components/Tabs"
import type {NavRoute} from "~/types"

export const meta = () => {
    return [{title: "Projects"}]
}

export const loader = async () => {
    const tabs = new Promise<NavRoute[]>(resolve =>
        setTimeout(
            () =>
                resolve([
                    {name: "Builds", url: "/projects/builds"},
                    {name: "Deploys", url: "/projects/deploys"},
                    {name: "Analytics", url: "/projects/analytics"},
                    {name: "Logs", url: "/projects/logs"},
                    {name: "Settings", url: "/projects/settings"},
                ]),
            1000,
        ),
    )

    return {tabs}
}

const Layout = () => {
    const {tabs} = useLoaderData<typeof loader>()

    return (
        <>
            <Suspense fallback={<div>Loading tabs...</div>}>
                <Await resolve={tabs}>
                    {tabs => {
                        return <Tabs tabs={tabs} />
                    }}
                </Await>
            </Suspense>

            <Outlet />
        </>
    )
}

export default Layout
