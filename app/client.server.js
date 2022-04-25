export async function createNewClient(query, variables={}, auth=false) {
  let wpAuthorization
  // if (auth) {
  //   // needs to be ENV var
  //   const wpAppUser = "admin"
  //   const wpAppPass = ""

  //   // Set WP application password auth header.
  //   wpAuthorization = Buffer.from(`${wpAppUser}:${wpAppPass}`).toString(
  //     'base64'
  //   )
  // }

  const endpoint = "https://cms.dewynters-aws.co.uk/graphql"

  const req = await fetch(endpoint, {
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