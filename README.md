# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

You will be utilizing Wrangler for local development to emulate the Cloudflare runtime. This is already wired up in your package.json as the `dev` script:

```sh
# start the remix dev server and wrangler
npm run dev
```

Open up [http://127.0.0.1:8788](http://127.0.0.1:8788) and you should be ready to go!

## Deployment

Cloudflare Pages are currently only deployable through their Git provider integrations.

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages) and after verifying your email address with Cloudflare, go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the "Build command" should be set to `npm run build`, and the "Build output directory" should be set to `public`.

# Simons notes

This project is based from: https://developers.cloudflare.com/pages/framework-guides/remix/ using the cloudflare pages option during the init process. 

Cloudflare pages/workers does not use node but V8, so certain modules/functions will not be compatible for server run time.
e.g. graphql-request did not work as it uses XMLHttpRequest, so used the native fetch instead

Node is used for the build phase but not in the server realtime/run time

To get environment vars working I had to edit the server.js handle request to:

```sh
const handleRequest = createPagesFunctionHandler({
  build,
  getLoadContext: ({ env }) => {
    env.NODE_ENV = process.env.NODE_ENV
    return { env }
  },
})
```

Then you can have access to them inside the loader function via context.env, these should be used server side, must be careful to not pass them down to the frontend unless not a secret.

To get env vars working locally you must edit the dev:wrangler process inside package,json and add

```sh
--binding $(cat .env)
```

To the end.