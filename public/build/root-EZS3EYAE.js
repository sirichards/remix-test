import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches
} from "/build/_shared/chunk-I6MIBIGM.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-6BO74FWO.js";

// browser-route-module:/Users/s.richards/Documents/GitHub/remix-test/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-QJBQBVSH.css";

// app/root.jsx
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
var meta = () => ({
  charset: "utf-8",
  refresh: {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  },
  viewport: "width=device-width,initial-scale=1",
  title: "Default title here",
  description: "Default description here"
});
function App() {
  const matches = useMatches();
  const match = matches.find((match2) => match2.data && match2.data.canonical);
  const canonical = match == null ? void 0 : match.data.canonical;
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), !!canonical && /* @__PURE__ */ React.createElement("link", {
    rel: "canonical",
    href: canonical
  }), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-EZS3EYAE.js.map