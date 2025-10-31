import {Await, Outlet, useLoaderData} from "react-router"
import {Suspense} from "react"
import {Tabs} from "~/components/Tabs"
import type {Route} from "~/components/Navigation"

export const meta = () => {
    return [{title: "Account"}]
}

export const loader = async () => {
    const tabs = new Promise<Route[]>(resolve =>
        setTimeout(
            () =>
                resolve([
                    {name: "Billing", url: "/account/billing"},
                    {name: "Members", url: "/account/members"},
                    {name: "Organizations", url: "/account/organizations"},
                    {name: "Settings", url: "/account/settings"},
                ]),
            1000,
        ),
    )

    return {tabs}
}

export default function Account() {
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
