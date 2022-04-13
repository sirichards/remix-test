import {
  Page,
  Seo
} from "/build/_shared/chunk-IBMI5CPZ.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-MF4C3WIR.js";

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
  let { page } = useLoaderData();
  return /* @__PURE__ */ React.createElement(Page, {
    data: page
  });
}
export {
  IndexPage as default,
  meta
};
//# sourceMappingURL=/build/routes/index-4KIFQB2Y.js.map