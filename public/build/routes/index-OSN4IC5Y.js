import {
  Page
} from "/build/_shared/chunk-57W5XT7O.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-7YOZ3W5H.js";

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
//# sourceMappingURL=/build/routes/index-OSN4IC5Y.js.map
