import { json } from "@remix-run/cloudflare"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import { addTrailingSlash } from "~/utils/helpers"
import defaults from "./config.json"

export const meta = () => ({
  charset: "utf-8",
  refresh: {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  },
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  'msapplication-TileColor': "#000000",
  'theme-color': "#ffffff"
})

export const links = () => [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/site.webmanifest' },
  { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
  { rel: 'icon', href: '/favicon.ico' },
  // { rel: "stylesheet", href: tailwindStyles },
  { rel: 'sitemap', href: '/sitemap.xml', type: 'application/xml' },
]

export let loader = async ({request, context}) => {
  const url = new URL(request.url)
  // force trailing slash
  addTrailingSlash(url)

  // WARNING: dont expose any secret envs
  return json({
    canonical: url.href, // trailing slash added with redirect, so we can trust our url for canonical
    ENV: {
      NODE_ENV: context.env.NODE_ENV
    },
  });
}

export default function App() {
  const data = useLoaderData()

  useEffect(() => {
    // inject GTM
    if (defaults.GTM_ID) {
      const postscribe = require('postscribe');
      postscribe(document.head, `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${defaults.GTM_ID}');</script>`)
    }
  })

  return (
    <html lang="en">
      <head>
        <Meta />
        {!!data.canonical && <link rel="canonical" href={data.canonical} />}
        <Links />
      </head>
      <body>
        {defaults.GTM_ID && (
          <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${defaults.GTM_ID}`}
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        )}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {data.ENV.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
