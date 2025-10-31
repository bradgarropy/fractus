import {Await, useLoaderData} from "react-router"
import {Suspense} from "react"

export const meta = () => {
    return [{title: "Analytics"}]
}

export const loader = async () => {
    const message = new Promise<string>(resolve =>
        setTimeout(() => resolve("Projects Analytics"), 1000),
    )

    return {message}
}

const Analytics = () => {
    const {message} = useLoaderData<typeof loader>()

    return (
        <Suspense fallback={<div>Loading data...</div>}>
            <Await resolve={message}>
                {message => {
                    return <h1>{message}</h1>
                }}
            </Await>
        </Suspense>
    )
}

export default Analytics
