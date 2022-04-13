export function Seo(data) {
  const {
    title, 
    metaDesc,
    metaKeywords
  } = data.page.seo
  const {
    canonical
  } = data

  return {
    title: title,
    description: metaDesc,
    keywords: metaKeywords,
    // "og:image": "https://remix-jokes.lol/social.png",
    "og:title": title,
    "og:description": metaDesc,
    "og:url": canonical,
    "og:type": "website",
    // "twitter:image": "https://remix-jokes.lol/social.png",
    "twitter:card": "summary",
    "twitter:creator": "Dewynters",
    "twitter:title": title,
    "twitter:description": metaDesc,
  };
}