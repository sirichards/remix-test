import {
  Page,
  Seo
} from "/build/_shared/chunk-ANFM76ES.js";
import {
  useLoaderData
} from "/build/_shared/chunk-LLKHRCJG.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react
} from "/build/_shared/chunk-6BO74FWO.js";

// empty-module:~/models/frontpage.server
var require_frontpage = __commonJS({
  "empty-module:~/models/frontpage.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/Users/s.richards/Documents/GitHub/remix-test/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
var import_frontpage = __toESM(require_frontpage());
var meta = ({ data }) => {
  return Seo(data);
};
function IndexPage() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement(Page, {
    data
  });
}
export {
  IndexPage as default,
  meta
};
//# sourceMappingURL=/build/routes/index-G2IIVNDW.js.map
