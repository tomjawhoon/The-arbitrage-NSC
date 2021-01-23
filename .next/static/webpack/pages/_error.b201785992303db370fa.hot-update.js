webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5CNSC%5CThe-arbitrage-NSC%5Cpages%5C_error.tsx!./":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5CNSC%5CThe-arbitrage-NSC%5Cpages%5C_error.tsx ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.tsx */ "./pages/_error.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.tsx":
/*!**************************!*\
  !*** ./pages/_error.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\NSC\\The-arbitrage-NSC\\pages\\_error.tsx",
    _s = $RefreshSig$();


 //Client side

//Called in client side
function Error(_ref) {
  _s();

  var statusCode = _ref.statusCode;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setTimeout(function () {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
    }, 2000);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["ERROR PAGE NOT : ", statusCode]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
} //Called in server side

_s(Error, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Error;

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  //destructoring
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
  /*if (statusCode == 404) {
      res.writeHead(301, { Location: "/home" })
      res.end();
      return {};
  } else {
      return { statusCode };
  }*/
};

var _c;

$RefreshReg$(_c, "Error");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fZXJyb3IudHN4Il0sIm5hbWVzIjpbIkVycm9yIiwic3RhdHVzQ29kZSIsIlJlYWN0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsOENBQStDO0FBQ3RFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Q0FDa0M7O0FBS2xDO0FBQ2UsU0FBU0EsS0FBVCxPQUFvRDtBQUFBOztBQUFBLE1BQW5DQyxVQUFtQyxRQUFuQ0EsVUFBbUM7QUFDL0RDLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQkMsY0FBVSxDQUFDLFlBQU07QUFDYkMsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsR0FKRCxFQUlHLEVBSkg7QUFLQSxzQkFDSTtBQUFBLG9DQUNzQkwsVUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSCxDLENBRUQ7O0dBYndCRCxLOztLQUFBQSxLOztBQWN4QkEsS0FBSyxDQUFDTyxlQUFOLEdBQXdCLGlCQUFrQjtBQUFBLE1BQWZDLEdBQWUsU0FBZkEsR0FBZTtBQUFBLE1BQVZDLEdBQVUsU0FBVkEsR0FBVTtBQUFFO0FBQ3hDLE1BQU1SLFVBQVUsR0FBR08sR0FBRyxHQUFHQSxHQUFHLENBQUNQLFVBQVAsR0FBb0JRLEdBQUcsR0FBR0EsR0FBRyxDQUFDUixVQUFQLEdBQW9CLEdBQWpFO0FBQ0EsU0FBTztBQUFFQSxjQUFVLEVBQVZBO0FBQUYsR0FBUDtBQUNBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUMsQ0FYRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fZXJyb3IuYjIwMTc4NTk5MjMwM2RiMzcwZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiRDpcXFxcTlNDXFxcXFRoZS1hcmJpdHJhZ2UtTlNDXFxcXHBhZ2VzXFxcXF9lcnJvci50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjsgLy9DbGllbnQgc2lkZVxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgc3RhdHVzQ29kZTogc3RyaW5nXHJcbn1cclxuXHJcbi8vQ2FsbGVkIGluIGNsaWVudCBzaWRlXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yKHsgc3RhdHVzQ29kZSB9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBFUlJPUiBQQUdFIE5PVCA6IHtzdGF0dXNDb2RlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL0NhbGxlZCBpbiBzZXJ2ZXIgc2lkZVxyXG5FcnJvci5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXMsIGVyciB9KSA9PiB7IC8vZGVzdHJ1Y3RvcmluZ1xyXG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUgOiA0MDQ7XHJcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlIH07XHJcbiAgICAvKmlmIChzdGF0dXNDb2RlID09IDQwNCkge1xyXG4gICAgICAgIHJlcy53cml0ZUhlYWQoMzAxLCB7IExvY2F0aW9uOiBcIi9ob21lXCIgfSlcclxuICAgICAgICByZXMuZW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4geyBzdGF0dXNDb2RlIH07XHJcbiAgICB9Ki9cclxuXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=