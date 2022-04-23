import { createNewClient } from "~/client.server"

const query = `
  query pages {
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
  const pages = await createNewClient(query)

  return pages
}