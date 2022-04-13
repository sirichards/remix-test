import {
  init_react
} from "/build/_shared/chunk-KCZACNCQ.js";

// app/utils/seo.js
init_react();
function Seo(data) {
  const {
    title,
    metaDesc,
    metaKeywords
  } = data.page.seo;
  const {
    canonical
  } = data;
  return {
    title,
    description: metaDesc,
    keywords: metaKeywords,
    "og:title": title,
    "og:description": metaDesc,
    "og:url": canonical,
    "og:type": "website",
    "twitter:card": "summary",
    "twitter:creator": "Dewynters",
    "twitter:title": title,
    "twitter:description": metaDesc
  };
}

export {
  Seo
};
//# sourceMappingURL=/build/_shared/chunk-QFYGIOGU.js.map
