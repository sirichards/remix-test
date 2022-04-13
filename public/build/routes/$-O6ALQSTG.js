import {
  Page,
  Seo
} from "/build/_shared/chunk-OGXX5EZ3.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-MF4C3WIR.js";

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
//# sourceMappingURL=/build/routes/$-O6ALQSTG.js.map
