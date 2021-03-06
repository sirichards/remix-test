import { redirect } from "@remix-run/cloudflare";

export function error404() {
  throw new Response("Not Found", {
    status: 404,
  });
}

export function error401() {
  throw new Response("Unauthorized", {
    status: 401,
  });
}

/**
 * Add trailing slash if missing, isn't a file or query url
 * 
 * @param {object} url Current url
 */
export function addTrailingSlash(url) {
  if (
    url.pathname !== "/" &&
    !url.pathname.endsWith("/") &&
    !url.pathname.includes(".") &&
    !url.href.includes("?")
  ) {
    throw redirect(`${url.pathname}/`, {
      status: 308,
    });
  }
}

/**
 * Format a flat list WP nav menu into a heirarchial list.
 *
 
 * @see https://www.wpgraphql.com/docs/menus/#hierarchical-data
 * @param  {Array}  data             The array containing menu data.
 * @param  {object} keys             Object keys.
 * @param  {string} keys.idKey       ID key.
 * @param  {string} keys.parentKey   Parent key.
 * @param  {string} keys.childrenKey Children key.
 * @return {Array}                   Array containing a updated menu list.
 */
 export function formatHeirarchialMenu(
  data = [],
  { idKey = 'id', parentKey = 'parentId', childrenKey = 'children' } = {}
) {
  const tree = []
  const childrenOf = {}
  data.forEach((item) => {
    const newItem = { ...item }
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
    childrenOf[id] = childrenOf[id] || []
    newItem[childrenKey] = childrenOf[id]
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem)
  })
  return tree
}