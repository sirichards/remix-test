import { error404, error401 } from "~/utils/helpers"
import { createNewClient } from "~/client.server"
import defaultPageFields from "./query-partials/query-page"
import primaryMenu from "./query-partials/query-primaryMenu"

const query = `
  query page($pageId: ID!) {
    ${primaryMenu}
    page(idType: DATABASE_ID, id: $pageId, asPreview: true) {
      ${defaultPageFields}
    }
  }
`

/**
 * Get preview page data
 * 
 * @param {object} context Contains env variables required for graphql query
 * @param {int} pageId     ID of page to preview
 * @param {string} secret  Secret string
 * @returns {object}       Page data
 */
export async function getPreviewPage(context, pageId, secret) {
  if (!pageId || !context || secret !== context.env.WORDPRESS_PREVIEW_SECRET) { 
    error401()
  }

  // query preview page
  const auth = true
  const { data } = await createNewClient(context, query, { pageId }, auth)

  // page not found
  if (!data.page) error404()

  return data
}