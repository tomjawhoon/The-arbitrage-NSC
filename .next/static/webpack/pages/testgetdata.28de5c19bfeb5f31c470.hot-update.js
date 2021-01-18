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



function Testgetdata(_ref) {
  _s();

  var initialId = _ref.initialId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialId),
      newId = _useState[0],
      setNewId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      newtest = _useState2[0],
      settest = _useState2[1];

  function onSave(valueinput) {
    console.log("valueinput", valueinput);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:5001/testgetdata', {
      //name: 'EIEIEI',
      //number: 55,
      valueinput: valueinput
    }).then(function (response) {
      console.log("response", response.data); //1000.000

      settest(response.data);
    });
  }

  console.log("newtest", newtest);
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
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return onSave(newId);
        },
        children: "Save"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "show value"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

_s(Testgetdata, "cz3r7GcF4sN7u2MI2CPCyZAjsgU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGdldGRhdGEudHN4Il0sIm5hbWVzIjpbIlRlc3RnZXRkYXRhIiwiaW5pdGlhbElkIiwidXNlU3RhdGUiLCJuZXdJZCIsInNldE5ld0lkIiwibmV3dGVzdCIsInNldHRlc3QiLCJvblNhdmUiLCJ2YWx1ZWlucHV0IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9lLFNBQVNBLFdBQVQsT0FBeUQ7QUFBQTs7QUFBQSxNQUFsQ0MsU0FBa0MsUUFBbENBLFNBQWtDOztBQUFBLGtCQUUxQ0Msc0RBQVEsQ0FBQ0QsU0FBRCxDQUZrQztBQUFBLE1BRTdERSxLQUY2RDtBQUFBLE1BRXREQyxRQUZzRDs7QUFBQSxtQkFHekNGLHNEQUFRLENBQUMsQ0FBRCxDQUhpQztBQUFBLE1BRzdERyxPQUg2RDtBQUFBLE1BR3BEQyxPQUhvRDs7QUFLcEUsV0FBU0MsTUFBVCxDQUFnQkMsVUFBaEIsRUFBaUM7QUFDN0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJGLFVBQTFCO0FBQ0FHLGdEQUFLLENBQUNDLElBQU4sQ0FBVyxtQ0FBWCxFQUFnRDtBQUM1QztBQUNBO0FBQ0FKLGdCQUFVLEVBQVZBO0FBSDRDLEtBQWhELEVBSUdLLElBSkgsQ0FJUSxVQUFBQyxRQUFRLEVBQUk7QUFDaEJMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JJLFFBQVEsQ0FBQ0MsSUFBakMsRUFEZ0IsQ0FDd0I7O0FBQ3hDVCxhQUFPLENBQUNRLFFBQVEsQ0FBQ0MsSUFBVixDQUFQO0FBQ0gsS0FQRDtBQVFIOztBQUNETixTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCTCxPQUF2QjtBQUNBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCUCxLQUFyQjtBQUNBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBQSw4QkFDSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUMsY0FBL0I7QUFBOEMsZ0JBQVEsRUFBRSxrQkFBQ2EsQ0FBRDtBQUFBLGlCQUFPWixRQUFRLENBQUNZLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNWCxNQUFNLENBQUNKLEtBQUQsQ0FBWjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztHQTVCdUJILFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdGdldGRhdGEuMjhkZTVjMTliZmViNWYzMWM0NzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBpbml0aWFsSWQ6IGFueSxcclxuICAgIHZhbHVlaW5wdXQ6IGFueSxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RnZXRkYXRhKHsgaW5pdGlhbElkIH06IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuXHJcbiAgICBjb25zdCBbbmV3SWQsIHNldE5ld0lkXSA9IHVzZVN0YXRlKGluaXRpYWxJZClcclxuICAgIGNvbnN0IFtuZXd0ZXN0LCBzZXR0ZXN0XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gICAgZnVuY3Rpb24gb25TYXZlKHZhbHVlaW5wdXQ6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVpbnB1dFwiLCB2YWx1ZWlucHV0KTtcclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdGVzdGdldGRhdGEnLCB7XHJcbiAgICAgICAgICAgIC8vbmFtZTogJ0VJRUlFSScsXHJcbiAgICAgICAgICAgIC8vbnVtYmVyOiA1NSxcclxuICAgICAgICAgICAgdmFsdWVpbnB1dCxcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZS5kYXRhKTsgLy8xMDAwLjAwMFxyXG4gICAgICAgICAgICBzZXR0ZXN0KHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcIm5ld3Rlc3RcIiwgbmV3dGVzdClcclxuICAgIGNvbnNvbGUubG9nKFwibmV3SWRcIiwgbmV3SWQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IElEXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2F2ZShuZXdJZCl9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwic2hvdyB2YWx1ZVwiICAgLz4gXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==