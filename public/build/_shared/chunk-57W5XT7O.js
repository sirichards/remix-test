import {
  React,
  init_react
} from "/build/_shared/chunk-7YOZ3W5H.js";

// app/utils/seo.js
init_react();
function Seo(data) {
  return {
    title: "Test"
  };
}

// app/components/templates/PageTemplate.jsx
init_react();

// app/components/Layout/index.jsx
init_react();

// app/components/Layout/Layout.jsx
init_react();

// app/components/Header/index.jsx
init_react();

// app/components/Header/Header.jsx
init_react();
function Header() {
  return /* @__PURE__ */ React.createElement("header", null, "Header here");
}

// app/components/Footer/index.jsx
init_react();

// app/components/Footer/Footer.jsx
init_react();
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", null, "Footer here");
}

// app/components/Layout/Layout.jsx
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", null, children), /* @__PURE__ */ React.createElement(Footer, null));
}

// app/components/templates/PageTemplate.jsx
function Page({ data }) {
  return /* @__PURE__ */ React.createElement(Layout, null);
}

export {
  Seo,
  Page
};
//# sourceMappingURL=/build/_shared/chunk-57W5XT7O.js.map
