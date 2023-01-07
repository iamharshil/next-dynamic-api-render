"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./pages/posts.jsx":
/*!*************************!*\
  !*** ./pages/posts.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Avatars),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Avatars({ posts  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Posts\"\n            }, void 0, false, {\n                fileName: \"/home/iamharshil/redundantCode/next-dynamic-api-render/pages/posts.jsx\",\n                lineNumber: 4,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    posts.map((posts)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: posts.body\n                        }, posts.id, false, {\n                            fileName: \"/home/iamharshil/redundantCode/next-dynamic-api-render/pages/posts.jsx\",\n                            lineNumber: 7,\n                            columnNumber: 13\n                        }, this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/iamharshil/redundantCode/next-dynamic-api-render/pages/posts.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/iamharshil/redundantCode/next-dynamic-api-render/pages/posts.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/iamharshil/redundantCode/next-dynamic-api-render/pages/posts.jsx\",\n                lineNumber: 5,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/iamharshil/redundantCode/next-dynamic-api-render/pages/posts.jsx\",\n        lineNumber: 3,\n        columnNumber: 3\n    }, this);\n}\nasync function getStaticProps() {\n    const posts = await fetch(\"https://jsonplaceholder.typicode.com/posts\").then((res)=>res.json());\n    // console.log(posts)\n    return {\n        props: {\n            posts\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQWUsU0FBU0EsUUFBUSxFQUFFQyxNQUFLLEVBQUUsRUFBRTtJQUMxQyxxQkFDQyw4REFBQ0M7OzBCQUNBLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7b0JBQ0NILE1BQU1JLEdBQUcsQ0FBQyxDQUFDSixRQUFVO3dCQUNyQixxQkFBTyw4REFBQ0s7c0NBQW1CTCxNQUFNTSxJQUFJOzJCQUFyQk4sTUFBTU8sRUFBRTs7Ozs7b0JBQ3pCO2tDQUNBLDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlMLENBQUM7QUFFTSxlQUFlQyxpQkFBaUI7SUFDdEMsTUFBTVQsUUFBUSxNQUFNVSxNQUFNLDhDQUE4Q0MsSUFBSSxDQUMzRSxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBRWxCLHFCQUFxQjtJQUNyQixPQUFPO1FBQ05DLE9BQU87WUFDTmQ7UUFDRDtJQUNEO0FBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JvdXRpbmctYXBwLy4vcGFnZXMvcG9zdHMuanN4PzdhNTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZhdGFycyh7IHBvc3RzIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgxPlBvc3RzPC9oMT5cblx0XHRcdDx1bD5cblx0XHRcdFx0e3Bvc3RzLm1hcCgocG9zdHMpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gPGxpIGtleT17cG9zdHMuaWR9Pntwb3N0cy5ib2R5fTwvbGk+O1xuXHRcdFx0XHR9KX1cblx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXHRjb25zdCBwb3N0cyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpLnRoZW4oXG5cdFx0KHJlcykgPT4gcmVzLmpzb24oKSxcblx0KTtcblx0Ly8gY29uc29sZS5sb2cocG9zdHMpXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHBvc3RzLFxuXHRcdH0sXG5cdH07XG59XG4iXSwibmFtZXMiOlsiQXZhdGFycyIsInBvc3RzIiwiZGl2IiwiaDEiLCJ1bCIsIm1hcCIsImxpIiwiYm9keSIsImlkIiwiYnIiLCJnZXRTdGF0aWNQcm9wcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts.jsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts.jsx"));
module.exports = __webpack_exports__;

})();