import Layout from "~/components/Layout"
import FlexibleContent from "~/components/FlexibleContent/FlexibleContent"

export default function Page({data}) {
  const { menu, page } = data
  return(
    <Layout menu={menu}>
      <h1 className="text-4xl py-4">Page title: { page.title }</h1>
      <FlexibleContent blocks={page.acfFlexibleContent?.blocks} />
    </Layout>
  )
}