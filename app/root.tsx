import {
    Await,
    isRouteErrorResponse,
    Link,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "react-router"

import type {Route} from "./+types/root"
import "./app.css"
import {Suspense} from "react"
import {Navigation} from "~/components/Navigation"
import type {NavRoute} from "~/types"

export const links: Route.LinksFunction = () => [
    {rel: "preconnect", href: "https://fonts.googleapis.com"},
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
]

export const loader = async () => {
    const navigation = new Promise<NavRoute[]>(resolve =>
        setTimeout(
            () =>
                resolve([
                    {name: "Home", url: "/"},
                    {name: "Account", url: "/account"},
                    {name: "Projects", url: "/projects"},
                ]),
            1000,
        ),
    )

    return {navigation}
}

export const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>

            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    const {navigation} = useLoaderData<typeof loader>()

    return (
        <div className="grid grid-cols-[1fr_3fr] p-8">
            <aside>
                <Suspense fallback={<div>Loading navigation...</div>}>
                    <Await resolve={navigation}>
                        {routes => {
                            return <Navigation routes={routes} />
                        }}
                    </Await>
                </Suspense>
            </aside>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export const ErrorBoundary = ({error}: Route.ErrorBoundaryProps) => {
    let message = "Oops!"
    let details = "An unexpected error occurred."
    let stack: string | undefined

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error"
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message
        stack = error.stack
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    )
}
