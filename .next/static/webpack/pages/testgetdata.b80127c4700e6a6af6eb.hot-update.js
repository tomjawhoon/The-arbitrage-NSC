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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialId),
      newId = _useState[0],
      setNewId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      newtest = _useState2[0],
      settest = _useState2[1];

  console.log("settest", settest);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGdldGRhdGEudHN4Il0sIm5hbWVzIjpbIlRlc3RnZXRkYXRhIiwiaW5pdGlhbElkIiwib25TYXZlIiwidmFsdWVpbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwic2V0dGVzdCIsInVzZVN0YXRlIiwibmV3SWQiLCJzZXROZXdJZCIsIm5ld3Rlc3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNlLFNBQVNBLFdBQVQsT0FBeUQ7QUFBQTs7QUFBQSxNQUFsQ0MsU0FBa0MsUUFBbENBLFNBQWtDOztBQUNwRSxXQUFTQyxNQUFULENBQWdCQyxVQUFoQixFQUFpQztBQUM3QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkYsVUFBMUI7QUFDQUcsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXLG1DQUFYLEVBQWdEO0FBQzVDO0FBQ0E7QUFDQUosZ0JBQVUsRUFBVkE7QUFINEMsS0FBaEQsRUFJR0ssSUFKSCxDQUlRLFVBQUFDLFFBQVEsRUFBSTtBQUNoQkwsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkksUUFBUSxDQUFDQyxJQUFqQyxFQURnQixDQUN3Qjs7QUFDeENDLGFBQU8sQ0FBQ0YsUUFBUSxDQUFDQyxJQUFWLENBQVA7QUFDSCxLQVBEO0FBUUg7O0FBWG1FLGtCQVkxQ0Usc0RBQVEsQ0FBQ1gsU0FBRCxDQVprQztBQUFBLE1BWTdEWSxLQVo2RDtBQUFBLE1BWXREQyxRQVpzRDs7QUFBQSxtQkFhekNGLHNEQUFRLENBQUMsQ0FBRCxDQWJpQztBQUFBLE1BYTdERyxPQWI2RDtBQUFBLE1BYXBESixPQWJvRDs7QUFjcEVQLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBc0JNLE9BQXRCO0FBQ0FQLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJRLEtBQXJCO0FBQ0Esc0JBQ0k7QUFBQSwyQkFDSTtBQUFBLDhCQUNJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsbUJBQVcsRUFBQyxjQUEvQjtBQUE4QyxnQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsaUJBQU9GLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1oQixNQUFNLENBQUNXLEtBQUQsQ0FBWjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0dBekJ1QmIsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0Z2V0ZGF0YS5iODAxMjdjNDcwMGU2YTZhZjZlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGluaXRpYWxJZDogYW55LFxyXG4gICAgdmFsdWVpbnB1dDogYW55LFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0Z2V0ZGF0YSh7IGluaXRpYWxJZCB9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XHJcbiAgICBmdW5jdGlvbiBvblNhdmUodmFsdWVpbnB1dDogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZWlucHV0XCIsIHZhbHVlaW5wdXQpO1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90ZXN0Z2V0ZGF0YScsIHtcclxuICAgICAgICAgICAgLy9uYW1lOiAnRUlFSUVJJyxcclxuICAgICAgICAgICAgLy9udW1iZXI6IDU1LFxyXG4gICAgICAgICAgICB2YWx1ZWlucHV0LFxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlLmRhdGEpOyAvLzEwMDAuMDAwXHJcbiAgICAgICAgICAgIHNldHRlc3QocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoaW5pdGlhbElkKVxyXG4gICAgY29uc3QgW25ld3Rlc3QsIHNldHRlc3RdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnNvbGUubG9nKFwic2V0dGVzdFwiLHNldHRlc3QpXHJcbiAgICBjb25zb2xlLmxvZyhcIm5ld0lkXCIsIG5ld0lkKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIG5ldyBJRFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblNhdmUobmV3SWQpfT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB7fVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=