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

/**
 * 
 * @param {object} context Contains env variables required for graphql query
 * @returns pages data
 */
export async function getPages(context) {
  const { data } = await createNewClient(context, query)

  return data
}