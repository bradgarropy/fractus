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
    layout("routes/projects/layout.tsx", [
        route("/projects", "routes/projects/index.tsx"),
        route("/projects/builds", "routes/projects/builds.tsx"),
        route("/projects/deploys", "routes/projects/deploys.tsx"),
        route("/projects/analytics", "routes/projects/analytics.tsx"),
        route("/projects/logs", "routes/projects/logs.tsx"),
        route("/projects/settings", "routes/projects/settings.tsx"),
    ]),
] satisfies RouteConfig
