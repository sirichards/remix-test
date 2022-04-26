import defaults from "~/config.json"

export function Seo(data, noindex=false) {
  const {
    title, 
    metaDesc,
    metaKeywords
  } = data.page.seo
  const {
    canonical
  } = data

  const metaTitle = title || defaults.title
  const metaDescription = metaDesc || defaults.description

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    // "og:image": "https://remix-jokes.lol/social.png",
    "og:title": metaTitle,
    "og:description": metaDescription,
    "og:url": canonical,
    "og:type": "website",
    // "twitter:image": "https://remix-jokes.lol/social.png",
    "twitter:card": "summary",
    "twitter:creator": "Dewynters",
    "twitter:title": metaTitle,
    "twitter:description": metaDescription,
    "robots": noindex ? "noindex" : "index, follow"
  };
}