import {
  Page
} from "/build/_shared/chunk-RRFFU5FK.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-KUHQYM7W.js";

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
function IndexPage() {
  let page = useLoaderData();
  return /* @__PURE__ */ React.createElement(Page, {
    data: page
  });
}
export {
  IndexPage as default
};
//# sourceMappingURL=/build/routes/index-SUYHSOUB.js.map
