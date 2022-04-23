import { error404 } from "~/utils/helpers"
import { createNewClient } from "~/client.server"
import defaultPageFields from "./query-partials/query-page"
import primaryMenu from "./query-partials/query-primaryMenu"

const query = `
  query PAGE($path: ID!) {
    ${primaryMenu}
    page(idType: URI, id: $path) {
      ${defaultPageFields}
    }
  }
`

export async function getPage(path) {
  // query page by path/uri  + menus
  // const data = await createNewClient().request(query, { path })
  const data = await createNewClient(query, { path })

  // page not found
  if (!data.page) error404()

  return data
}