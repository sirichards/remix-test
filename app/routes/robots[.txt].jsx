export async function loader({context}) {
  const live = context.env.NODE_ENV === "production"
  const text = `
User-agent: *
${live ? "Allow: /" : "Disallow: /"}
Sitemap: ${context.env.FRONTEND_URL}/sitemap.xml
Host: ${context.env.FRONTEND_URL}
  `.trim();
    
  return new Response(text, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}