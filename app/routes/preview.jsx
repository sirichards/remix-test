import { json } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react"
import { getPreviewPage } from "~/models/preview.server"
import { Seo } from "~/utils/seo"
import PageTemplate from "~/components/templates/PageTemplate"

export const meta = ({data}) => {
  return Seo(data)
};

// Get page by path
export const loader = async ({request}) => {
  const url = new URL(request.url);
  const pageId = url.searchParams.get("page_id")
  const secret = url.searchParams.get("secret")

  const page = await getPreviewPage(pageId, secret)
  return json({page})
}

export default function Preview() {
  const { page } = useLoaderData()

  return <PageTemplate data={page} />
}