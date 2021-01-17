webpackHotUpdate_N_E("pages/testgetdata",{

/***/ "./pages/testgetdata.tsx":
/*!*******************************!*\
  !*** ./pages/testgetdata.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Testgetdata; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\AToMixz\\Desktop\\NSC\\nscno1\\pages\\testgetdata.tsx",
    _s = $RefreshSig$();



axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:5001/testgetdata', {
  name: 'EIEIEI',
  number: 10
}).then(function (response) {
  console.log("response", response.data); //1000.000
});
function Testgetdata(_ref) {
  _s();

  var initialId = _ref.initialId,
      onSave = _ref.onSave;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialId),
      newId = _useState[0],
      setNewId = _useState[1];

  console.log("show =>>> ID", newId);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "Enter new ID",
        onChange: function onChange(e) {
          return setNewId(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return onSave(newId);
        },
        children: "Save"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

_s(Testgetdata, "n5LIjTQ6c5PKp86wIAROXBVGiBE=");

_c = Testgetdata;

var _c;

$RefreshReg$(_c, "Testgetdata");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGdldGRhdGEudHN4Il0sIm5hbWVzIjpbImF4aW9zIiwicG9zdCIsIm5hbWUiLCJudW1iZXIiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIlRlc3RnZXRkYXRhIiwiaW5pdGlhbElkIiwib25TYXZlIiwidXNlU3RhdGUiLCJuZXdJZCIsInNldE5ld0lkIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRQUEsNENBQUssQ0FBQ0MsSUFBTixDQUFXLG1DQUFYLEVBQWdEO0FBQzVDQyxNQUFJLEVBQUUsUUFEc0M7QUFFNUNDLFFBQU0sRUFBRTtBQUZvQyxDQUFoRCxFQUdHQyxJQUhILENBR1EsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixRQUFRLENBQUNHLElBQWpDLEVBRGdCLENBQ3dCO0FBQzNDLENBTEQ7QUFPZSxTQUFTQyxXQUFULE9BQWdFO0FBQUE7O0FBQUEsTUFBMUNDLFNBQTBDLFFBQTFDQSxTQUEwQztBQUFBLE1BQS9CQyxNQUErQixRQUEvQkEsTUFBK0I7O0FBQUEsa0JBQ2pEQyxzREFBUSxDQUFDRixTQUFELENBRHlDO0FBQUEsTUFDcEVHLEtBRG9FO0FBQUEsTUFDN0RDLFFBRDZEOztBQUUzRVIsU0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUEyQk0sS0FBM0I7QUFDQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUEsOEJBQ0k7QUFDSSxZQUFJLEVBQUMsTUFEVDtBQUVJLG1CQUFXLEVBQUMsY0FGaEI7QUFHSSxnQkFBUSxFQUFFLGtCQUFDRSxDQUFEO0FBQUEsaUJBQU9ELFFBQVEsQ0FBQ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBTUk7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTU4sTUFBTSxDQUFDRSxLQUFELENBQVo7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlIOztHQWZ1QkosVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0Z2V0ZGF0YS41NzQ2YTAzMTBkMWJjOGIxYjY0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgUm9vdE9iamVjdCB9IGZyb20gJy4uL21vZGVscy9wcmljZWJpdGt1YidcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzLCBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgaW5pdGlhbElkOiBhbnksIFxyXG4gICAgb25TYXZlOiBhbnlcclxufVxyXG5cclxuYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3Rlc3RnZXRkYXRhJywge1xyXG4gICAgbmFtZTogJ0VJRUlFSScsXHJcbiAgICBudW1iZXI6IDEwLFxyXG59KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UuZGF0YSk7IC8vMTAwMC4wMDBcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0Z2V0ZGF0YSh7aW5pdGlhbElkLCBvblNhdmUgfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gICAgY29uc3QgW25ld0lkLCBzZXROZXdJZF0gPSB1c2VTdGF0ZShpbml0aWFsSWQpXHJcbiAgICBjb25zb2xlLmxvZyhcInNob3cgPT4+PiBJRFwiLG5ld0lkKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBuZXcgSURcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25TYXZlKG5ld0lkKX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=