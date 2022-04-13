import { gql } from "graphql-request"
import { error404 } from "~/utils/helpers"
import { createNewClient } from "~/client.server"
import defaultPageFields from "./query-partials/query-page"
import primaryMenu from "./query-partials/query-primaryMenu"

const query = gql`
  query FRONTPAGE {
    ${primaryMenu}
    pageBy(uri: "/") {
      ${defaultPageFields}
    }
  }
`

export async function getFrontPage() {
  // get frontpage data + menus
  const data = await createNewClient().request(query)

  // front page not found
  if (!data.pageBy) error404()

  return data
}