import {
  React,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-7YOZ3W5H.js";

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
function Page() {
  const page = useLoaderData();
  console.log(page);
  return /* @__PURE__ */ React.createElement(PageTemplate, {
    data: page
  });
}
export {
  Page as default
};
//# sourceMappingURL=/build/routes/$-OLRDB5IY.js.map
