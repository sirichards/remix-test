import { error404, error401 } from "~/utils/helpers"
import { createNewClient } from "~/client.server"
import defaultPageFields from "./query-partials/query-page"

const query = `
  query PAGE($pageId: ID!) {
    page(idType: DATABASE_ID, id: $pageId, asPreview: true) {
      ${defaultPageFields}
    }
  }
`

export async function getPreviewPage(pageId, secret) {
  if (!pageId || secret !== 'dewynters') { // needs to be ENV var
    error401()
  }

  // query preview page
  const { page } = await createNewClient(true).request(query, { pageId })

  // page not found
  if (!page) error404()

  return page
}