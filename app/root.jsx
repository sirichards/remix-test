import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
  useLoaderData
} from "@remix-run/react";

// import globalStyles from '~/styles/global.css';
import tailwindStyles from "./tailwind.css";
import defaults from "./config.json"

export const links = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: 'manifest', href: '/site.webmanifest' },
  { rel: 'icon', href: '/favicon.ico' },
  { rel: 'sitemap', href: '/sitemap.xml', type: 'application/xml' },
]

export const meta = () => ({
  charset: "utf-8",
  refresh: {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  },
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
})

export const loader = async ({request}) => {
  let canonical = new URL(request.url).href
  // force trailing slash
  if (!canonical.includes("?")) {
    if (canonical.substr(-1) !== '/') canonical = canonical + "/" 
  }

  return canonical
}

export default function App() {
  // finds and pulls data from current route file export
  const canonical = useLoaderData()

  return (
    <html lang="en">
      <head>
        <Meta />
        {!!canonical && <link rel="canonical" href={canonical} />}
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}