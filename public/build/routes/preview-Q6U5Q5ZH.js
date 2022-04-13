import {
  Page,
  Seo
} from "/build/_shared/chunk-57W5XT7O.js";
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
var meta = ({ data }) => {
  return Seo(data);
};
function Preview() {
  const page = useLoaderData();
  return /* @__PURE__ */ React.createElement(Page, {
    data: page
  });
}
export {
  Preview as default,
  meta
};
//# sourceMappingURL=/build/routes/preview-Q6U5Q5ZH.js.map
