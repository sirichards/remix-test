import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";

// import globalStyles from '~/styles/global.css';
import styles from "./tailwind.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
];

export const meta = () => ({
  charset: "utf-8",
  refresh: {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  },
  viewport: "width=device-width,initial-scale=1",
  title: "Default title here",
  description: "Default description here"
});

export default function App() {
  // finds and pulls data from current route file export
  const matches = useMatches();
  const match = matches.find((match) => match.data && match.data.canonical);
  const canonical = match?.data.canonical;

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