import {
  Page
} from "/build/_shared/chunk-A4362D42.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-7YOZ3W5H.js";

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
    "og:url": `${process.env.FRONTEND_URL}${data.uri}`,
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
function Page2() {
  const page = useLoaderData();
  console.log(page);
  return /* @__PURE__ */ React.createElement(Page, {
    data: page
  });
}
export {
  Page2 as default,
  meta
};
//# sourceMappingURL=/build/routes/$-CZCHKEKA.js.map
