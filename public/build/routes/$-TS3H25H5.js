import "/build/_shared/chunk-RRFFU5FK.js";
import {
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-KUHQYM7W.js";

// empty-module:~/models/page.server
var require_page = __commonJS({
  "empty-module:~/models/page.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/Users/s.richards/Documents/GitHub/remix-test/app/routes/$.jsx?browser
init_react();

// app/routes/$.jsx
init_react();
var import_page = __toESM(require_page());

// app/utils/seo.js
init_react();
function Seo(data) {
  const {
    title,
    metaDesc,
    metaKeywords
  } = data.seo;
  return {
    title,
    description: metaDesc,
    keywords: metaKeywords,
    "og:title": title,
    "og:description": metaDesc,
    "og:type": "website",
    "twitter:card": "summary",
    "twitter:creator": "Dewynters",
    "twitter:title": title,
    "twitter:description": metaDesc
  };
}

// app/routes/$.jsx
var meta = ({ data }) => {
  return Seo(data);
};
function Page() {
  const { page } = useLoaderData();
  console.log(page);
  return null;
}
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/$-TS3H25H5.js.map
