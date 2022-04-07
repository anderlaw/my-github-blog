"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 14:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "zebing\u7684\u4E2A\u4EBA\u4E3B\u9875"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "\u4E2A\u4EBA\u4E3B\u9875,\u4E2A\u4EBA\u535A\u5BA2,\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08,\u5168\u6808\u5DE5\u7A0B\u5E08,\u81EA\u7531\u804C\u4E1A\u8005,\u7ED9\u81EA\u5DF1\u6253\u5DE5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "zebing\u7684\u4E2A\u4EBA\u7F51\u7AD9,zebing\u7684\u5728\u7EBF\u540D\u7247,\u81EA\u7531\u804C\u4E1A\u7684zebing"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(14));
module.exports = __webpack_exports__;

})();