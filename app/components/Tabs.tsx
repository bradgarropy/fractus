import {NavLink} from "react-router"

export type Tab = {
    name: string
    url: string
}

type TabsProps = {
    tabs: Tab[]
}

export const Tabs = ({tabs}: TabsProps) => {
    return (
        <nav>
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
