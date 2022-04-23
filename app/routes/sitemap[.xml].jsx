import { getPages } from "~/models/pages.server"

export async function loader() {
  const { pages } = await getPages()

  function getEntry(node) {
    return `
    <url>
      <loc>${process.env.FRONTEND_URL}${node.uri}</loc>
      <lastmod>${node.modified}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${node.uri === "/" ? "1.0" : "0.7"}</priority>
    </url>
    `.trim()
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
      >
        ${pages.edges.map(({node}) => getEntry(node)).join('')}
    </urlset>`;
    
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}