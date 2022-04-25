import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";

// const handleRequest = createPagesFunctionHandler({
//   build,
//   mode: process.env.NODE_ENV,
//   getLoadContext: (context) => context.env,
// });

const handleRequest = createPagesFunctionHandler({
  build,
  getLoadContext: ({ env }) => {
    return { env }
  },
})

export function onRequest(context) {
  return handleRequest(context);
}
