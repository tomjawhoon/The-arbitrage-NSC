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
  });
}

function Testgetdata(_ref) {
  _s();

  var initialId = _ref.initialId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialId),
      newId = _useState[0],
      setNewId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      newtest = _useState2[0],
      settest = _useState2[1];

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
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return onSave(newId);
        },
        children: "Save"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), settest(response.data)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGdldGRhdGEudHN4Il0sIm5hbWVzIjpbIm9uU2F2ZSIsInZhbHVlaW5wdXQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIlRlc3RnZXRkYXRhIiwiaW5pdGlhbElkIiwidXNlU3RhdGUiLCJuZXdJZCIsInNldE5ld0lkIiwibmV3dGVzdCIsInNldHRlc3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFPQSxTQUFTQSxNQUFULENBQWdCQyxVQUFoQixFQUFpQztBQUM3QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkYsVUFBMUI7QUFDQUcsOENBQUssQ0FBQ0MsSUFBTixDQUFXLG1DQUFYLEVBQWdEO0FBQzVDO0FBQ0E7QUFDQUosY0FBVSxFQUFWQTtBQUg0QyxHQUFoRCxFQUlHSyxJQUpILENBSVEsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCTCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCSSxRQUFRLENBQUNDLElBQWpDLEVBRGdCLENBQ3dCO0FBRTNDLEdBUEQ7QUFRSDs7QUFFYyxTQUFTQyxXQUFULE9BQXlEO0FBQUE7O0FBQUEsTUFBbENDLFNBQWtDLFFBQWxDQSxTQUFrQzs7QUFBQSxrQkFDMUNDLHNEQUFRLENBQUNELFNBQUQsQ0FEa0M7QUFBQSxNQUM3REUsS0FENkQ7QUFBQSxNQUN0REMsUUFEc0Q7O0FBQUEsbUJBRXpDRixzREFBUSxDQUFDLENBQUQsQ0FGaUM7QUFBQSxNQUU3REcsT0FGNkQ7QUFBQSxNQUVwREMsT0FGb0Q7O0FBR3BFYixTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCUyxLQUFyQjtBQUNBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBQSw4QkFDSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUMsY0FBL0I7QUFBOEMsZ0JBQVEsRUFBRSxrQkFBQ0ksQ0FBRDtBQUFBLGlCQUFPSCxRQUFRLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNbEIsTUFBTSxDQUFDWSxLQUFELENBQVo7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBR0tHLE9BQU8sQ0FBQ1IsUUFBUSxDQUFDQyxJQUFWLENBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0dBYnVCQyxXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3RnZXRkYXRhLjdiYTM1ZTZkOWM2NTZjNDYxOTY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgaW5pdGlhbElkOiBhbnksXHJcbiAgICB2YWx1ZWlucHV0OiBhbnksXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBvblNhdmUodmFsdWVpbnB1dDogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInZhbHVlaW5wdXRcIiwgdmFsdWVpbnB1dCk7XHJcbiAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdGVzdGdldGRhdGEnLCB7XHJcbiAgICAgICAgLy9uYW1lOiAnRUlFSUVJJyxcclxuICAgICAgICAvL251bWJlcjogNTUsXHJcbiAgICAgICAgdmFsdWVpbnB1dCxcclxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UuZGF0YSk7IC8vMTAwMC4wMDBcclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGdldGRhdGEoeyBpbml0aWFsSWQgfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gICAgY29uc3QgW25ld0lkLCBzZXROZXdJZF0gPSB1c2VTdGF0ZShpbml0aWFsSWQpXHJcbiAgICBjb25zdCBbbmV3dGVzdCwgc2V0dGVzdF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc29sZS5sb2coXCJuZXdJZFwiLCBuZXdJZClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBuZXcgSURcIiBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25TYXZlKG5ld0lkKX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge3NldHRlc3QocmVzcG9uc2UuZGF0YSl9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==