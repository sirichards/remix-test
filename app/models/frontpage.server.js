import { error404 } from "~/utils/helpers"
import { createNewClient } from "~/client.server"
import defaultPageFields from "./query-partials/query-page"
import primaryMenu from "./query-partials/query-primaryMenu"

const query = `
  query frontpageWithMenu {
    ${primaryMenu}
    pageBy(uri: "/") {
      ${defaultPageFields}
    }
  }
`

export async function getFrontPage() {
  // get frontpage data + menus
  const { data } = await createNewClient(query)

  // front page not found
  if (!data.pageBy) error404()

  return data
}