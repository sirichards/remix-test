import { gql } from "graphql-request"
import { createNewClient } from "~/client.server"

const query = gql`
  query PAGES {
    pages {
      edges {
        node {
          id
          uri
          modified
        }
      }
    }
  }
`

export async function getPages() {
  // query page by path/uri  + menus
  const pages = await createNewClient().request(query)
  
  console.log(pages)

  return pages
}