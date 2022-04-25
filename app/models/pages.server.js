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
  const { data } = await createNewClient(query)

  return data
}