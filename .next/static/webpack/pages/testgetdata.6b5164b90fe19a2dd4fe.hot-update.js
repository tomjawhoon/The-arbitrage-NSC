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




var onSave = function onSave(valueinput) {
  //arrow function
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:5001/testgetdata', {
    name: 'EIEIEI',
    number: 10,
    valueinput: valueinput
  }).then(function (response) {
    console.log("response", response.data); //1000.000
  });
};

function Testgetdata(_ref) {
  _s();

  var initialId = _ref.initialId,
      onSave = _ref.onSave;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialId),
      newId = _useState[0],
      setNewId = _useState[1];

  console.log("newId", newId);
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
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return onSave(newId);
        },
        children: "Save"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGdldGRhdGEudHN4Il0sIm5hbWVzIjpbIm9uU2F2ZSIsInZhbHVlaW5wdXQiLCJheGlvcyIsInBvc3QiLCJuYW1lIiwibnVtYmVyIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJUZXN0Z2V0ZGF0YSIsImluaXRpYWxJZCIsInVzZVN0YXRlIiwibmV3SWQiLCJzZXROZXdJZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLFVBQUQsRUFBZ0I7QUFBRTtBQUM3QkMsOENBQUssQ0FBQ0MsSUFBTixDQUFXLG1DQUFYLEVBQWdEO0FBQzVDQyxRQUFJLEVBQUUsUUFEc0M7QUFFNUNDLFVBQU0sRUFBRSxFQUZvQztBQUc1Q0osY0FBVSxFQUFWQTtBQUg0QyxHQUFoRCxFQUlHSyxJQUpILENBSVEsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixRQUFRLENBQUNHLElBQWpDLEVBRGdCLENBQ3dCO0FBQzNDLEdBTkQ7QUFRSCxDQVREOztBQVllLFNBQVNDLFdBQVQsT0FBaUU7QUFBQTs7QUFBQSxNQUExQ0MsU0FBMEMsUUFBMUNBLFNBQTBDO0FBQUEsTUFBL0JaLE1BQStCLFFBQS9CQSxNQUErQjs7QUFBQSxrQkFDbERhLHNEQUFRLENBQUNELFNBQUQsQ0FEMEM7QUFBQSxNQUNyRUUsS0FEcUU7QUFBQSxNQUM5REMsUUFEOEQ7O0FBRTVFUCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCSyxLQUFyQjtBQUNBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBQSw4QkFDSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUMsY0FBL0I7QUFBOEMsZ0JBQVEsRUFBRSxrQkFBQ0UsQ0FBRDtBQUFBLGlCQUFPRCxRQUFRLENBQUNDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNbEIsTUFBTSxDQUFDYyxLQUFELENBQVo7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztHQVh1QkgsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0Z2V0ZGF0YS42YjUxNjRiOTBmZTE5YTJkZDRmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgUm9vdE9iamVjdCB9IGZyb20gJy4uL21vZGVscy9wcmljZWJpdGt1YidcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzLCBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgaW5pdGlhbElkOiBhbnksXHJcbiAgICBvblNhdmU6IGFueVxyXG59XHJcblxyXG5cclxuY29uc3Qgb25TYXZlID0gKHZhbHVlaW5wdXQpID0+IHsgLy9hcnJvdyBmdW5jdGlvblxyXG4gICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3Rlc3RnZXRkYXRhJywge1xyXG4gICAgICAgIG5hbWU6ICdFSUVJRUknLFxyXG4gICAgICAgIG51bWJlcjogMTAsXHJcbiAgICAgICAgdmFsdWVpbnB1dCxcclxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UuZGF0YSk7IC8vMTAwMC4wMDBcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RnZXRkYXRhKHsgaW5pdGlhbElkLCBvblNhdmUgfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gICAgY29uc3QgW25ld0lkLCBzZXROZXdJZF0gPSB1c2VTdGF0ZShpbml0aWFsSWQpXHJcbiAgICBjb25zb2xlLmxvZyhcIm5ld0lkXCIsIG5ld0lkKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIG5ldyBJRFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblNhdmUobmV3SWQpfT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==