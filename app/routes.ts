import {
    type RouteConfig,
    index,
    layout,
    prefix,
    route,
} from "@react-router/dev/routes"

export default [
    index("routes/index.tsx"),
    layout("routes/account/layout.tsx", [
        route("/account", "routes/account/index.tsx"),
        route("/account/billing", "routes/account/billing.tsx"),
        route("/account/members", "routes/account/members.tsx"),
        route("/account/organizations", "routes/account/organizations.tsx"),
        route("/account/settings", "routes/account/settings.tsx"),
    ]),
    route("/projects", "routes/projects.tsx"),
] satisfies RouteConfig
