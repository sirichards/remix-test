import {
  Page
} from "/build/_shared/chunk-DRHZXWE3.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-7YOZ3W5H.js";

// empty-module:~/models/preview.server
var require_preview = __commonJS({
  "empty-module:~/models/preview.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/Users/s.richards/Documents/GitHub/remix-test/app/routes/preview.jsx?browser
init_react();

// app/routes/preview.jsx
init_react();
var import_preview = __toESM(require_preview());
function Preview() {
  const page = useLoaderData();
  return /* @__PURE__ */ React.createElement(Page, {
    data: page
  });
}
export {
  Preview as default
};
//# sourceMappingURL=/build/routes/preview-ZWDMZL5D.js.map
