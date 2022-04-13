import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { getPage } from "~/models/page.server"
import { Seo } from "~/utils/seo"
import PageTemplate from "~/components/templates/PageTemplate"

export const meta = ({data}) => {
  return Seo(data)
}

// Get page by path
export const loader = async ({params}) => {
  const { menu, page } = await getPage(params["*"])
  const canonical = `${process.env.FRONTEND_URL}${page.uri}`

  return json({page, menu, canonical})
}

export default function Page() {
  const data = useLoaderData()
  return <PageTemplate data={data} />
}