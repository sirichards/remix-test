import { json } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react"
import { getPage } from "~/models/page.server"
import { Seo } from "~/utils/seo"
import PageTemplate from "~/components/templates/PageTemplate"

export const meta = ({data}) => {
  return Seo(data)
}

/**
 * Get page by path
 * 
 * @param {object} context  Contains env variables required for graphql query
 * @param {array} params    Page params
 * @returns {object}        Contains page data
 */
export const loader = async ({context, params}) => {
  const { menu, page } = await getPage(context, params["*"])

  return json({page, menu})
}

export default function Page() {
  const data = useLoaderData()
  return <PageTemplate data={data} />
}