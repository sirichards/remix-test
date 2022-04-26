import { json } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react"
import { getPreviewPage } from "~/models/preview.server"
import { Seo } from "~/utils/seo"
import PageTemplate from "~/components/templates/PageTemplate"

/**
 * 
 * @param {object} data data from loader with seo fields 
 * @returns 
 */
export const meta = ({data}) => {
  const noindex = true
  return Seo(data, noindex)
}

/**
 * Get page by path
 * 
 * @param {object} request  Page request data
 * @param {obect} context   Contains env variables required for graphql query
 * @returns {object}        Contains preview page data
 */
export const loader = async ({request, context}) => {
  const url = new URL(request.url);
  const pageId = url.searchParams.get("page_id")
  const secret = url.searchParams.get("secret")

  const { menu, page } = await getPreviewPage(context, pageId, secret)
  return json({menu, page})
}

export default function Preview() {
  const data = useLoaderData()

  return <PageTemplate data={data} />
}