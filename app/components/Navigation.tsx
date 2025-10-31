import {NavLink} from "react-router"

export type Route = {
    name: string
    url: string
}

type NavigationProps = {
    routes: Route[]
}

export const Navigation = ({routes}: NavigationProps) => {
    return (
        <nav>
            <ul>
                {routes.map(route => {
                    return (
                        <li key={route.name}>
                            <NavLink
                                to={route.url}
                                className={({isActive}) =>
                                    isActive ? "font-bold" : ""
                                }
                            >
                                {route.name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
