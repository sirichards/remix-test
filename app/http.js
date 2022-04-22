import { redirect } from "@remix-run/node";

export function addTrailingSlash(url) {
  if (
    url.pathname !== "/" &&
    !url.pathname.endsWith("/") &&
    !url.pathname.includes(".") &&
    !url.pathname.includes("?")
  ) {
    throw redirect(`${url.pathname}/`, {
      status: 308,
    });
  }
}