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
var meta = ({ data }) => {
  return Seo(data);
};
function Page2() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement(Page, {
    data
  });
}
export {
  Page2 as default,
  meta
};
//# sourceMappingURL=/build/routes/$-ZKPZ7OAC.js.map
