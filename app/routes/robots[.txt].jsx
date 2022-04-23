// export async function loader() {
//   const live = process.env.NODE_ENV === "production"
//   const text = `
// User-agent: *
// ${live ? "Allow: /" : "Disallow: /"}
// Sitemap: ${process.env.FRONTEND_URL}/sitemap.xml
// Host: ${process.env.FRONTEND_URL}
//   `.trim();
    
//   return new Response(text, {
//     status: 200,
//     headers: {
//       "Content-Type": "text/plain",
//     },
//   });
// }