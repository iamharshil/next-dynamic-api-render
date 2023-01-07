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
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./pages/posts/[id].jsx":
/*!******************************!*\
  !*** ./pages/posts/[id].jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Post({ post  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Single Post\"\n            }, void 0, false, {\n                fileName: \"/home/iamharshil/redundantCode/next-dynamic-api-render/pages/posts/[id].jsx\",\n                lineNumber: 4,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    post.id,\n                    \" \",\n                    post.body\n                ]\n            }, void 0, true, {\n                fileName: \"/home/iamharshil/redundantCode/next-dynamic-api-render/pages/posts/[id].jsx\",\n                lineNumber: 5,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/iamharshil/redundantCode/next-dynamic-api-render/pages/posts/[id].jsx\",\n        lineNumber: 3,\n        columnNumber: 3\n    }, this);\n}\nasync function getStaticPaths() {\n    const posts = await fetch(\"https://jsonplaceholder.typicode.com/posts\").then((res)=>res.json());\n    return {\n        paths: posts.map((post)=>{\n            const postId = post.id.toString();\n            return {\n                params: {\n                    id: postId\n                }\n            };\n        }),\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((res)=>res.json());\n    return {\n        props: {\n            post: post\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWUsU0FBU0EsS0FBSyxFQUFFQyxLQUFJLEVBQUUsRUFBRTtJQUN0QyxxQkFDQyw4REFBQ0M7OzBCQUNBLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7b0JBQ0NILEtBQUtJLEVBQUU7b0JBQUM7b0JBQUVKLEtBQUtLLElBQUk7Ozs7Ozs7Ozs7Ozs7QUFJeEIsQ0FBQztBQUVNLGVBQWVDLGlCQUFpQjtJQUN0QyxNQUFNQyxRQUFRLE1BQU1DLE1BQU0sOENBQThDQyxJQUFJLENBQzNFLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFHbEIsT0FBTztRQUNOQyxPQUFPTCxNQUFNTSxHQUFHLENBQUMsQ0FBQ2IsT0FBUztZQUMxQixNQUFNYyxTQUFTZCxLQUFLSSxFQUFFLENBQUNXLFFBQVE7WUFDL0IsT0FBTztnQkFDTkMsUUFBUTtvQkFDUFosSUFBSVU7Z0JBQ0w7WUFDRDtRQUNEO1FBQ0FHLFVBQVUsS0FBSztJQUNoQjtBQUNELENBQUM7QUFFTSxlQUFlQyxlQUFlLEVBQUVGLE9BQU0sRUFBRSxFQUFFO0lBQ2hELE1BQU1oQixPQUFPLE1BQU1RLE1BQ2xCLENBQUMsMkNBQTJDLEVBQUVRLE9BQU9aLEVBQUUsQ0FBQyxDQUFDLEVBQ3hESyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUV4QixPQUFPO1FBQ05RLE9BQU87WUFDTm5CLE1BQU1BO1FBQ1A7SUFDRDtBQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3V0aW5nLWFwcC8uL3BhZ2VzL3Bvc3RzL1tpZF0uanN4Pzc2Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3QgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+U2luZ2xlIFBvc3Q8L2gxPlxuXHRcdFx0PHA+XG5cdFx0XHRcdHtwb3N0LmlkfSB7cG9zdC5ib2R5fVxuXHRcdFx0PC9wPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG5cdGNvbnN0IHBvc3RzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIikudGhlbihcblx0XHQocmVzKSA9PiByZXMuanNvbigpLFxuXHQpO1xuXG5cdHJldHVybiB7XG5cdFx0cGF0aHM6IHBvc3RzLm1hcCgocG9zdCkgPT4ge1xuXHRcdFx0Y29uc3QgcG9zdElkID0gcG9zdC5pZC50b1N0cmluZygpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdFx0aWQ6IHBvc3RJZCxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fSksXG5cdFx0ZmFsbGJhY2s6IGZhbHNlLFxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuXHRjb25zdCBwb3N0ID0gYXdhaXQgZmV0Y2goXG5cdFx0YGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke3BhcmFtcy5pZH1gLFxuXHQpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0cG9zdDogcG9zdCxcblx0XHR9LFxuXHR9O1xufVxuIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwiZGl2IiwiaDEiLCJwIiwiaWQiLCJib2R5IiwiZ2V0U3RhdGljUGF0aHMiLCJwb3N0cyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwYXRocyIsIm1hcCIsInBvc3RJZCIsInRvU3RyaW5nIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].jsx\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].jsx"));
module.exports = __webpack_exports__;

})();