import {NavLink} from "react-router"
import type {NavRoute} from "~/types"

type NavigationProps = {
    routes: NavRoute[]
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
