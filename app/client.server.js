export async function createNewClient(query, auth=false) {
  let wpAuthorization
  if (auth) {
    // Define env vars.
    const wpAppUser = "admin"
    const wpAppPass = "wB0M iSID LQIs WFKl uPEo 0mX6"

    // Set WP application password auth header.
    wpAuthorization = Buffer.from(`${wpAppUser}:${wpAppPass}`).toString(
      'base64'
    )
  }

  const endpoint = "https://cms.dewynters-aws.co.uk/graphql"

  const req = await fetch(endpoint, {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
      authorization: auth ? `Basic ${wpAuthorization}` : ''
    },
    body: JSON.stringify({
      query: query
    }),
  })
  .then((res) => res.json())
  // .then((result) => console.log(result));

  return req
}