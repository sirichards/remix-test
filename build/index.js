var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/s.richards/Documents/GitHub/remix-test/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-6ETONH67.css";

// app/config.json
var title = "Hello world";
var description = "This is a description";
var author = "Dewynters - Simon Richards";
var url = "https://domain.coms";
var name = "Dewynters";
var short_name = "Dewynters";
var icons = [
  {
    src: "/favicons/android-chrome-192x192.png",
    sizes: "192x192",
    type: "image/png"
  },
  {
    src: "/favicons/android-chrome-512x512.png",
    sizes: "512x512",
    type: "image/png"
  }
];
var theme_color = "#A9ADC1";
var background_color = "#1f2028";
var config_default = {
  title,
  description,
  author,
  url,
  name,
  short_name,
  icons,
  theme_color,
  background_color
};

// route:/Users/s.richards/Documents/GitHub/remix-test/app/root.jsx
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "sitemap", href: "/sitemap.xml", type: "application/xml" }
];
var meta = () => ({
  charset: "utf-8",
  refresh: {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  },
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
});
var loader = async ({ request }) => {
  let canonical = new URL(request.url).href;
  if (!canonical.includes("?")) {
    if (canonical.substr(-1) !== "/")
      canonical = canonical + "/";
  }
  return canonical;
};
function App() {
  const canonical = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), !!canonical && /* @__PURE__ */ React.createElement("link", {
    rel: "canonical",
    href: canonical
  }), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/s.richards/Documents/GitHub/remix-test/app/routes/site[.webmanifest].jsx
var site_webmanifest_exports = {};
__export(site_webmanifest_exports, {
  loader: () => loader2
});
async function loader2() {
  const json5 = `
  {
    "name": "${config_default.name}",
    "short_name": "${config_default.short_name}",
    "icons": [
      {
        "src": "/favicons/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/favicons/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "theme_color": "${config_default.theme_color}",
    "background_color": "${config_default.background_color}",
    "display": "standalone"
  }`;
  return new Response(json5, {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

// route:/Users/s.richards/Documents/GitHub/remix-test/app/routes/sitemap[.xml].jsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader3
});

// app/models/pages.server.js
var import_graphql_request2 = require("graphql-request");

// app/client.server.js
var import_graphql_request = require("graphql-request");
function createNewClient(auth = false) {
  let wpAuthorization;
  if (auth) {
    const wpAppUser = process.env.WORDPRESS_APPLICATION_USERNAME;
    const wpAppPass = process.env.WORDPRESS_APPLICATION_PASSWORD;
    wpAuthorization = Buffer.from(`${wpAppUser}:${wpAppPass}`).toString("base64");
  }
  const endpoint = process.env.WORDPRESS_API_URL;
  const client = new import_graphql_request.GraphQLClient(endpoint, { headers: {
    authorization: auth ? `Basic ${wpAuthorization}` : ""
  } });
  return client;
}

// app/models/pages.server.js
var query = import_graphql_request2.gql`
  query PAGES {
    pages {
      edges {
        node {
          id
          uri
          modified
        }
      }
    }
  }
`;
async function getPages() {
  const pages = await createNewClient().request(query);
  console.log(pages);
  return pages;
}

// route:/Users/s.richards/Documents/GitHub/remix-test/app/routes/sitemap[.xml].jsx
async function loader3() {
  const { pages } = await getPages();
  function getEntry(node) {
    return `
    <url>
      <loc>${process.env.FRONTEND_URL}${node.uri}</loc>
      <lastmod>${node.modified}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${node.uri === "/" ? "1.0" : "0.7"}</priority>
    </url>
    `.trim();
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
      >
        ${pages.edges.map(({ node }) => getEntry(node)).join("")}
    </urlset>`;
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml"
    }
  });
}

// route:/Users/s.richards/Documents/GitHub/remix-test/app/routes/robots[.txt].jsx
var robots_txt_exports = {};
__export(robots_txt_exports, {
  loader: () => loader4
});
async function loader4() {
  const live = false;
  const text = `
User-agent: *
${live ? "Allow: /" : "Disallow: /"}
Sitemap: ${process.env.FRONTEND_URL}/sitemap.xml
Host: ${process.env.FRONTEND_URL}
  `.trim();
  return new Response(text, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}

// route:/Users/s.richards/Documents/GitHub/remix-test/app/routes/preview.jsx
var preview_exports = {};
__export(preview_exports, {
  default: () => Preview,
  loader: () => loader5,
  meta: () => meta2
});
var import_node2 = require("@remix-run/node");
var import_react5 = require("@remix-run/react");

// app/models/preview.server.js
var import_node = require("@remix-run/node");
var import_graphql_request3 = require("graphql-request");

// app/utils/helpers.js
function error404() {
  throw new Response("Not Found", {
    status: 404
  });
}
function error401() {
  throw new Response("Unauthorized", {
    status: 401
  });
}
function formatHeirarchialMenu(data = [], { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {}) {
  const tree = [];
  const childrenOf = {};
  data.forEach((item) => {
    const newItem = __spreadValues({}, item);
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    parentId ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem) : tree.push(newItem);
  });
  return tree;
}

// app/models/query-partials/query-page.js
var defaultPageFields = `
	title
	uri
	date
	content
	seo {
		title
		metaDesc
		opengraphImage {
			sourceUrl
		}
		breadcrumbs {
			text
			url
		}
		canonical
	}
	acfFlexibleContent {
		blocks {
			__typename
			... on Page_Acfflexiblecontent_Blocks_Hero {
				title
				desktopImage {
					altText
					mediaItemUrl
					mediaDetails {
						height
						width
					}
					srcSet
				}
			}
			... on Page_Acfflexiblecontent_Blocks_TextFullWidth {
				text
			}
		}
	}
`;
var query_page_default = defaultPageFields;

// app/models/preview.server.js
var query2 = import_graphql_request3.gql`
  query PAGE($pageId: ID!) {
    page(idType: DATABASE_ID, id: $pageId, asPreview: true) {
      ${query_page_default}
    }
  }
`;
async function getPreviewPage(pageId, secret) {
  if (!pageId || !process.env.WORDPRESS_PREVIEW_SECRET || secret !== process.env.WORDPRESS_PREVIEW_SECRET) {
    error401();
  }
  const { page } = await createNewClient(true).request(query2, { pageId });
  if (!page)
    error404();
  return page;
}

// app/utils/seo.js
function Seo(data) {
  const {
    title: title2,
    metaDesc,
    metaKeywords
  } = data.page.seo;
  const {
    canonical
  } = data;
  const metaTitle = title2 || config_default.title;
  const metaDescription = metaDesc || config_default.description;
  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    "og:title": metaTitle,
    "og:description": metaDescription,
    "og:url": canonical,
    "og:type": "website",
    "twitter:card": "summary",
    "twitter:creator": "Dewynters",
    "twitter:title": metaTitle,
    "twitter:description": metaDescription
  };
}

// app/components/Header/Header.jsx
var import_react4 = require("@remix-run/react");

// app/components/Navigation/Navigation.jsx
var import_prop_types = __toESM(require("prop-types"));
var import_react3 = require("@remix-run/react");
function Arrow() {
  return /* @__PURE__ */ React.createElement("span", {
    role: "button",
    "aria-label": "expand the dropdown menu"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M6 0l12 12-12 12z"
  })));
}
function NavigationMenu({ menu }) {
  if (!menu || !(menu == null ? void 0 : menu.length)) {
    return null;
  }
  const activeStyle = {
    textDecoration: "underline"
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, menu.map((item) => {
    const children = item.children && item.children.length > 0 ? item.children : "";
    return /* @__PURE__ */ React.createElement("li", {
      key: item.id
    }, item.path.charAt(0) === "/" ? /* @__PURE__ */ React.createElement(import_react3.NavLink, {
      to: item.path,
      target: item.target ? item.target : "_self",
      style: ({ isActive }) => isActive ? activeStyle : void 0,
      className: "flex px-3 py-2 text-slate-700 hover:text-slate-900"
    }, item.label, children && (children == null ? void 0 : children.length) && /* @__PURE__ */ React.createElement(Arrow, null)) : /* @__PURE__ */ React.createElement("a", {
      href: item.path,
      target: item.target,
      rel: item.target === "_blank" ? "noopener noreferrer" : null,
      className: "flex px-3 py-2 text-slate-700 font-medium hover:text-slate-900"
    }, item.label), !!children && !!children.length && /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement(NavigationMenu, {
      menu: children
    })));
  }));
}
NavigationMenu.propTypes = {
  menu: import_prop_types.default.arrayOf(import_prop_types.default.object)
};
function Navigation({ menu }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, !!(menu == null ? void 0 : menu.length) && /* @__PURE__ */ React.createElement("ul", {
    className: "flex space-x-4"
  }, /* @__PURE__ */ React.createElement(NavigationMenu, {
    menu
  })));
}
Navigation.propTypes = {
  className: import_prop_types.default.string,
  menu: import_prop_types.default.arrayOf(import_prop_types.default.object)
};

// app/components/Header/Header.jsx
function Header(props) {
  const menu = formatHeirarchialMenu(props.menu.menuItems.nodes);
  return /* @__PURE__ */ React.createElement("header", {
    className: "p-6 bg-slate-100 flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/"
  }, "Remix template"), /* @__PURE__ */ React.createElement(Navigation, {
    menu
  }));
}

// app/components/Footer/Footer.jsx
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "py-5"
  }, "Footer here");
}

// app/components/Layout/Layout.jsx
function Layout({ menu, children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    menu
  }), /* @__PURE__ */ React.createElement("main", null, children), /* @__PURE__ */ React.createElement(Footer, null));
}

// app/components/FlexibleContent/blocks/Hero.jsx
var Hero = (props) => {
  const {
    title: title2,
    desktopImage
  } = props.data;
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, desktopImage && /* @__PURE__ */ React.createElement("img", {
    src: desktopImage.mediaItemUrl,
    alt: desktopImage.altText,
    width: desktopImage.mediaDetails.width,
    height: desktopImage.mediaDetails.height
  }));
};
var Hero_default = Hero;

// app/components/FlexibleContent/blocks/TextBlock.jsx
var TextBlock = (props) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: props.data.text }
  }));
};
var TextBlock_default = TextBlock;

// app/components/FlexibleContent/FlexibleContent.js
function FlexibleContent({ blocks }) {
  if (blocks) {
    return blocks.map((block, i) => {
      switch (block.__typename) {
        case "Page_Acfflexiblecontent_Blocks_Hero":
          return /* @__PURE__ */ React.createElement(Hero_default, {
            data: block,
            key: i
          });
        case "Page_Acfflexiblecontent_Blocks_TextFullWidth":
          return /* @__PURE__ */ React.createElement(TextBlock_default, {
            data: block,
            key: i
          });
        default:
          return /* @__PURE__ */ React.createElement("pre", {
            key: i
          }, JSON.stringify(block, null, 2));
      }
    });
  } else
    return null;
}

// app/components/templates/PageTemplate.jsx
function Page({ data }) {
  var _a;
  const { menu, page } = data;
  return /* @__PURE__ */ React.createElement(Layout, {
    menu
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl py-4"
  }, "Page title: ", page.title), /* @__PURE__ */ React.createElement(FlexibleContent, {
    blocks: (_a = page.acfFlexibleContent) == null ? void 0 : _a.blocks
  }));
}

// route:/Users/s.richards/Documents/GitHub/remix-test/app/routes/preview.jsx
var meta2 = ({ data }) => {
  return Seo(data);
};
var loader5 = async ({ request }) => {
  const url2 = new URL(request.url);
  const pageId = url2.searchParams.get("page_id");
  const secret = url2.searchParams.get("secret");
  const page = await getPreviewPage(pageId, secret);
  return (0, import_node2.json)({ page });
};
function Preview() {
  const { page } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Page, {
    data: page
  });
}

// route:/Users/s.richards/Documents/GitHub/remix-test/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexPage,
  loader: () => loader6,
  meta: () => meta3
});
var import_node3 = require("@remix-run/node");
var import_react6 = require("@remix-run/react");

// app/models/frontpage.server.js
var import_graphql_request4 = require("graphql-request");

// app/models/query-partials/query-primaryMenu.js
var primaryMenu = `
  menu(id: "primary", idType: NAME) {
    menuItems(first: 100) {
      nodes {
        id
        parentId
        label
        path
        target
      }
    }
  }
`;
var query_primaryMenu_default = primaryMenu;

// app/models/frontpage.server.js
var query3 = import_graphql_request4.gql`
  query FRONTPAGE {
    ${query_primaryMenu_default}
    pageBy(uri: "/") {
      ${query_page_default}
    }
  }
`;
async function getFrontPage() {
  const data = await createNewClient().request(query3);
  if (!data.pageBy)
    error404();
  return data;
}

// route:/Users/s.richards/Documents/GitHub/remix-test/app/routes/index.jsx
var meta3 = ({ data }) => {
  return Seo(data);
};
var loader6 = async () => {
  const { menu, pageBy } = await getFrontPage();
  return (0, import_node3.json)({ page: pageBy, menu });
};
function IndexPage() {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Page, {
    data
  });
}

// route:/Users/s.richards/Documents/GitHub/remix-test/app/routes/$.jsx
var __exports = {};
__export(__exports, {
  default: () => Page2,
  loader: () => loader7,
  meta: () => meta4
});
var import_node4 = require("@remix-run/node");
var import_react7 = require("@remix-run/react");

// app/models/page.server.js
var import_graphql_request5 = require("graphql-request");
var query4 = import_graphql_request5.gql`
  query PAGE($path: ID!) {
    ${query_primaryMenu_default}
    page(idType: URI, id: $path) {
      ${query_page_default}
    }
  }
`;
async function getPage(path) {
  const data = await createNewClient().request(query4, { path });
  if (!data.page)
    error404();
  return data;
}

// route:/Users/s.richards/Documents/GitHub/remix-test/app/routes/$.jsx
var meta4 = ({ data }) => {
  return Seo(data);
};
var loader7 = async ({ params }) => {
  const { menu, page } = await getPage(params["*"]);
  return (0, import_node4.json)({ page, menu });
};
function Page2() {
  const data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Page, {
    data
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "6d116b25", "entry": { "module": "/build/entry.client-BLNOZ625.js", "imports": ["/build/_shared/chunk-LZ6OABYT.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-HAQ2A4RI.js", "imports": ["/build/_shared/chunk-EFH6VQ2G.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$-KGTFMXGK.js", "imports": ["/build/_shared/chunk-ZPCKTIIQ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-TFKGICVM.js", "imports": ["/build/_shared/chunk-ZPCKTIIQ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview": { "id": "routes/preview", "parentId": "root", "path": "preview", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview-MRVKOYI5.js", "imports": ["/build/_shared/chunk-ZPCKTIIQ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/robots[.txt]": { "id": "routes/robots[.txt]", "parentId": "root", "path": "robots.txt", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/robots[.txt]-D7H6MAQ2.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/site[.webmanifest]": { "id": "routes/site[.webmanifest]", "parentId": "root", "path": "site.webmanifest", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/site[.webmanifest]-IFWJPETA.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sitemap[.xml]": { "id": "routes/sitemap[.xml]", "parentId": "root", "path": "sitemap.xml", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sitemap[.xml]-QCUKQTWZ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-6D116B25.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/site[.webmanifest]": {
    id: "routes/site[.webmanifest]",
    parentId: "root",
    path: "site.webmanifest",
    index: void 0,
    caseSensitive: void 0,
    module: site_webmanifest_exports
  },
  "routes/sitemap[.xml]": {
    id: "routes/sitemap[.xml]",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/robots[.txt]": {
    id: "routes/robots[.txt]",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: robots_txt_exports
  },
  "routes/preview": {
    id: "routes/preview",
    parentId: "root",
    path: "preview",
    index: void 0,
    caseSensitive: void 0,
    module: preview_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
