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

/**
 * Get frontpage data
 * 
 * @param {object} context   Contains env variables required for graphql query
 * @returns {object}         Contains frontpage data
 */
export async function getFrontPage(context) {
  // get frontpage data + menus
  const { data } = await createNewClient(context, query)

  // front page not found
  if (!data.pageBy) error404()

  return data
}