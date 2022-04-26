import { json } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react"
import { getFrontPage } from "~/models/frontpage.server"
import { Seo } from "~/utils/seo"
import PageTemplate from "~/components/templates/PageTemplate"

/**
 * 
 * @param {object} data data from loader with seo fields 
 * @returns 
 */
export const meta = ({data}) => {
  return Seo(data)
}

/**
 * Get frontpage data
 * 
 * @param {obect} context   Contains env variables required for graphql query
 * @returns {object}        Contains frontpage data
 */
export let loader = async ({context}) => {
  const { menu, pageBy } = await getFrontPage(context)
  return json({page: pageBy, menu})
}

export default function IndexPage() {
  const data = useLoaderData()
  return <PageTemplate data={data} />
}