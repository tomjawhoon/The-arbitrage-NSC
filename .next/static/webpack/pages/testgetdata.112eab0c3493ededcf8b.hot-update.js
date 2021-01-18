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




function onSave(valueinput) {
  console.log("valueinput", valueinput);
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:5001/testgetdata', {
    //name: 'EIEIEI',
    //number: 55,
    valueinput: valueinput
  }).then(function (response) {
    console.log("response", response.data); //1000.000
    // const show = response.data;
  });
}

function Testgetdata(_ref) {
  _s();

  var initialId = _ref.initialId,
      show = _ref.show;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGdldGRhdGEudHN4Il0sIm5hbWVzIjpbIm9uU2F2ZSIsInZhbHVlaW5wdXQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIlRlc3RnZXRkYXRhIiwiaW5pdGlhbElkIiwic2hvdyIsInVzZVN0YXRlIiwibmV3SWQiLCJzZXROZXdJZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVFBLFNBQVNBLE1BQVQsQ0FBZ0JDLFVBQWhCLEVBQWlDO0FBQzdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixVQUExQjtBQUNBRyw4Q0FBSyxDQUFDQyxJQUFOLENBQVcsbUNBQVgsRUFBZ0Q7QUFDNUM7QUFDQTtBQUNBSixjQUFVLEVBQVZBO0FBSDRDLEdBQWhELEVBSUdLLElBSkgsQ0FJUSxVQUFBQyxRQUFRLEVBQUk7QUFDaEJMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JJLFFBQVEsQ0FBQ0MsSUFBakMsRUFEZ0IsQ0FDd0I7QUFDekM7QUFFRixHQVJEO0FBU0g7O0FBRWMsU0FBU0MsV0FBVCxPQUErRDtBQUFBOztBQUFBLE1BQXhDQyxTQUF3QyxRQUF4Q0EsU0FBd0M7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCOztBQUFBLGtCQUNoREMsc0RBQVEsQ0FBQ0YsU0FBRCxDQUR3QztBQUFBLE1BQ25FRyxLQURtRTtBQUFBLE1BQzVEQyxRQUQ0RDs7QUFFMUVaLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJVLEtBQXJCO0FBQ0Esc0JBQ0k7QUFBQSwyQkFDSTtBQUFBLDhCQUNJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsbUJBQVcsRUFBQyxjQUEvQjtBQUE4QyxnQkFBUSxFQUFFLGtCQUFDRSxDQUFEO0FBQUEsaUJBQU9ELFFBQVEsQ0FBQ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1qQixNQUFNLENBQUNhLEtBQUQsQ0FBWjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0dBWHVCSixXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3RnZXRkYXRhLjExMmVhYjBjMzQ5M2VkZWRjZjhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgaW5pdGlhbElkOiBhbnksXHJcbiAgICB2YWx1ZWlucHV0OiBhbnksXHJcbiAgICBzaG93OmFueSxcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uU2F2ZSh2YWx1ZWlucHV0OiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidmFsdWVpbnB1dFwiLCB2YWx1ZWlucHV0KTtcclxuICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90ZXN0Z2V0ZGF0YScsIHtcclxuICAgICAgICAvL25hbWU6ICdFSUVJRUknLFxyXG4gICAgICAgIC8vbnVtYmVyOiA1NSxcclxuICAgICAgICB2YWx1ZWlucHV0LFxyXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZS5kYXRhKTsgLy8xMDAwLjAwMFxyXG4gICAgICAgLy8gY29uc3Qgc2hvdyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICBcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0Z2V0ZGF0YSh7IGluaXRpYWxJZCAsIHNob3d9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XHJcbiAgICBjb25zdCBbbmV3SWQsIHNldE5ld0lkXSA9IHVzZVN0YXRlKGluaXRpYWxJZClcclxuICAgIGNvbnNvbGUubG9nKFwibmV3SWRcIiwgbmV3SWQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IElEXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2F2ZShuZXdJZCl9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9