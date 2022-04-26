import { error404 } from "~/utils/helpers"
import { createNewClient } from "~/client.server"
import defaultPageFields from "./query-partials/query-page"
import primaryMenu from "./query-partials/query-primaryMenu"

const query = `
  query page($path: ID!) {
    ${primaryMenu}
    page(idType: URI, id: $path) {
      ${defaultPageFields}
    }
  }
`

/**
 * Get page data by uri
 * 
 * @param {object} context   Contains env variables required for graphql query
 * @param {string} path      Contains page uri
 * @returns {object}         Page data
 */
export async function getPage(context, path) {
  // query page by path/uri  + menus
  const { data } = await createNewClient(context, query, { path })

  // page not found
  if (!data.page) error404()

  return data
}