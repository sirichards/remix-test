import { GraphQLClient } from "graphql-request"

export function createNewClient(auth=false) {
  let wpAuthorization
  if (auth) {
    // Define env vars.
    const wpAppUser = process.env.WORDPRESS_APPLICATION_USERNAME
    const wpAppPass = process.env.WORDPRESS_APPLICATION_PASSWORD

    // Set WP application password auth header.
    wpAuthorization = Buffer.from(`${wpAppUser}:${wpAppPass}`).toString(
      'base64'
    )
  }

  const endpoint = process.env.WORDPRESS_API_URL
  const client = new GraphQLClient(endpoint, { headers: {
    authorization: auth ? `Basic ${wpAuthorization}` : '' // how do we send htaccess auth as well?
  } })

  return client
}