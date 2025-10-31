import {NavLink} from "react-router"
import type {NavRoute} from "~/types"

type TabsProps = {
    tabs: NavRoute[]
    className?: string
}

export const Tabs = ({tabs}: TabsProps) => {
    return (
        <nav className="mb-4">
            <ul className="flex gap-4">
                {tabs.map(tab => {
                    return (
                        <li key={tab.name}>
                            <NavLink
                                relative="route"
                                to={tab.url}
                                className={({isActive}) =>
                                    isActive ? "font-bold" : ""
                                }
                            >
                                {tab.name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
