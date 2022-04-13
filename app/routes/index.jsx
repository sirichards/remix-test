import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { getFrontPage } from "~/models/frontpage.server"
import { Seo } from "~/utils/seo"
import PageTemplate from "~/components/templates/PageTemplate"

export const meta = ({data}) => {
  return Seo(data)
}

// Get front page data
export let loader = async () => {
  const { menu, pageBy } = await getFrontPage()
  const canonical = `${process.env.FRONTEND_URL}`

  return json({page: pageBy, menu, canonical})
}

export default function IndexPage() {
  let data = useLoaderData()
  return <PageTemplate data={data} />
}