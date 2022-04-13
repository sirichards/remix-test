import {
  React,
  init_react
} from "/build/_shared/chunk-KUHQYM7W.js";

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

// app/components/FlexibleContent/FlexibleContent.js
init_react();

// app/components/FlexibleContent/blocks/Hero.jsx
init_react();
var Hero = (props) => {
  const {
    title,
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
init_react();
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
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, data.title), /* @__PURE__ */ React.createElement(FlexibleContent, {
    blocks: (_a = data.acfFlexibleContent) == null ? void 0 : _a.blocks
  }));
}

export {
  Page
};
//# sourceMappingURL=/build/_shared/chunk-RRFFU5FK.js.map
