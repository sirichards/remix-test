import { createNewClient } from "~/client.server"

const query = `
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
  const pages = await createNewClient(query)
  
  console.log(pages)

  return pages
}