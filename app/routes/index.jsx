import { json } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react"
import { getFrontPage } from "~/models/frontpage.server"
import { Seo } from "~/utils/seo"
import PageTemplate from "~/components/templates/PageTemplate"

// Get front page data
export let loader = async () => {
  const { menu, pageBy } = await getFrontPage()
  return json({page: pageBy, menu})
}

export const meta = ({data}) => {
  return Seo(data)
}

export default function IndexPage() {
  const data = useLoaderData()
  return <PageTemplate data={data} />
}