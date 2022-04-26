/**
 * Query WP graphql endpoint
 * 
 * @param {object} context    Contains env variables required for graphql query, endpoint and username/password if required
 * @param {object} query      Graphql query
 * @param {object} variables  Grapqhl variables
 * @param {boolean} auth 
 * @returns {object}          Contains object result
 */
export async function createNewClient(context, query, variables={}, auth=false) {
  let wpAuthorization
  const username = context.env.WORDPRESS_APPLICATION_USERNAME
  const password = context.env.WORDPRESS_APPLICATION_PASSWORD
  if (auth && username && password) {
    // Set WP application password auth header.
    // wpAuthorization = Buffer.from(`${username}:${password}`).toString(
    //   'base64'
    // )
    wpAuthorization = btoa(`${username}:${password}`)
  }

  const req = await fetch(context.env.WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
      authorization: auth ? `Basic ${wpAuthorization}` : ''
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    }),
  })
  .then((res) => res.json())
  // .then((result) => console.log(result));

  return req
}