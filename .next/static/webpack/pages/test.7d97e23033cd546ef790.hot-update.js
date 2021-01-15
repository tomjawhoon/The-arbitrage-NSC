webpackHotUpdate_N_E("pages/test",{

/***/ "./pages/test.tsx":
/*!************************!*\
  !*** ./pages/test.tsx ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/layout */ "./components/layouts/layout.tsx");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");



var _jsxFileName = "C:\\Users\\AToMixz\\Desktop\\NSC\\Workshopnext-Full-1550BATH\\pages\\test.tsx",
    _s = $RefreshSig$();







var useStylesbuttom = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    button: {
      margin: theme.spacing(1)
    }
  });
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    maxWidth: 800
  },
  media: {
    height: 800
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    minHeight: "50vh"
  },
  test: {
    display: "flex",
    marginLeft: "500px"
  },
  testright: {
    display: "flex",
    marginLeft: "1000px",
    marginTop: "-350px"
  }
});
var useStylesRight = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    maxWidth: 350,
    marginTop: "-380px",
    marginLeft: "950px"
  },
  media: {
    height: 500
  }
});
var __N_SSP = true;
function Test(props) {
  _s();

  var _this = this;

  var data = props.result.data;
  console.log("Show---->getAPI---->", data);

  var formatPercent = function formatPercent(number) {
    return "".concat(new Number(number).toFixed(2), "%");
  };

  var formatDollar = function formatDollar(number, maximumSignificantDigits) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumSignificantDigits: maximumSignificantDigits
    }).format(number);
  };

  var classestest = useStylesbuttom();
  var classes = useStyles();
  var classesRight = useStylesRight();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.root,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.test,
          children: ["Balance:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            name: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 22
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: ["Token:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "submit",
            value: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: "___________________________________________________________________________________________________________"
        }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: ["Token:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "submit",
            value: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          color: "primary",
          className: classestest.button //endIcon={<Icon>send</Icon>}
          ,
          children: "Exchang Token"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_table__WEBPACK_IMPORTED_MODULE_4___default.a, {
      columns: [{
        title: "Symbol",
        field: 'image'
      }, {
        title: "Name",
        field: 'name'
      }, {
        title: "24H Change",
        field: 'price24'
      }, {
        title: "	Price ($)",
        field: 'current_price'
      }, {
        title: "	Market cap ($)",
        field: 'market_cap'
      }],
      data: data.map(function (coin) {
        return {
          image: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: coin.image,
            style: {
              width: 25,
              height: 25,
              marginRight: 10
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 36
          }, _this),
          name: coin.symbol.toUpperCase(),
          price24: formatPercent(coin.price_change_percentage_24h),
          current_price: coin.current_price,
          market_cap: coin.market_cap
        };
      }) //{ image: "test", price24: "test", Price: "test", Marketcap: "test" },
      ,
      title: "Coinmarketcap"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 9
  }, this);
}

_s(Test, "EJoy2sp+3Ixxi5fD+GHLXrqmrPA=", false, function () {
  return [useStylesbuttom, useStyles, useStylesRight];
});

_c = Test;

var _c;

$RefreshReg$(_c, "Test");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzYnV0dG9tIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwiYnV0dG9uIiwibWFyZ2luIiwic3BhY2luZyIsInVzZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1lZGlhIiwiaGVpZ2h0IiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtaW5IZWlnaHQiLCJ0ZXN0IiwibWFyZ2luTGVmdCIsInRlc3RyaWdodCIsIm1hcmdpblRvcCIsInVzZVN0eWxlc1JpZ2h0IiwiVGVzdCIsInByb3BzIiwiZGF0YSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtYXRQZXJjZW50IiwibnVtYmVyIiwiTnVtYmVyIiwidG9GaXhlZCIsImZvcm1hdERvbGxhciIsIm1heGltdW1TaWduaWZpY2FudERpZ2l0cyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwiY2xhc3Nlc3Rlc3QiLCJjbGFzc2VzIiwiY2xhc3Nlc1JpZ2h0IiwidGl0bGUiLCJmaWVsZCIsIm1hcCIsImNvaW4iLCJpbWFnZSIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJuYW1lIiwic3ltYm9sIiwidG9VcHBlckNhc2UiLCJwcmljZTI0IiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoIiwiY3VycmVudF9wcmljZSIsIm1hcmtldF9jYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUtBO0FBTUEsSUFBTUEsZUFBZSxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMvQkMsNkVBQVksQ0FBQztBQUNUQyxVQUFNLEVBQUU7QUFDSkMsWUFBTSxFQUFFSCxLQUFLLENBQUNJ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QUFBRUQsYUFBSyxFQUFFLFlBQVQ7QUFBdUJDLGFBQUssRUFBRTtBQUE5QixPQUpLLEVBS0w7QUFBRUQsYUFBSyxFQUFFLGlCQUFUO0FBQTRCQyxhQUFLLEVBQUU7QUFBbkMsT0FMSyxDQURiO0FBUUksVUFBSSxFQUNBbkIsSUFBSSxDQUFDb0IsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxlQUNMO0FBQ0lDLGVBQUssZUFBRTtBQUNILGVBQUcsRUFBRUQsSUFBSSxDQUFDQyxLQURQO0FBRUgsaUJBQUssRUFBRTtBQUFFQyxtQkFBSyxFQUFFLEVBQVQ7QUFBYXJDLG9CQUFNLEVBQUUsRUFBckI7QUFBeUJzQyx5QkFBVyxFQUFFO0FBQXRDO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEWDtBQUtJQyxjQUFJLEVBQUVKLElBQUksQ0FBQ0ssTUFBTCxDQUFZQyxXQUFaLEVBTFY7QUFNSUMsaUJBQU8sRUFBRXhCLGFBQWEsQ0FBQ2lCLElBQUksQ0FBQ1EsMkJBQU4sQ0FOMUI7QUFPSUMsdUJBQWEsRUFBRVQsSUFBSSxDQUFDUyxhQVB4QjtBQVFJQyxvQkFBVSxFQUFFVixJQUFJLENBQUNVO0FBUnJCLFNBREs7QUFBQSxPQUFULENBVFIsQ0FxQkk7QUFyQko7QUFzQkksV0FBSyxFQUFDO0FBdEJWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtRUg7O0dBckZ1QmpDLEk7VUFlQXZCLGUsRUFDSk8sUyxFQUNLZSxjOzs7S0FqQkRDLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC43ZDk3ZTIzMDMzY2Q1NDZlZjc5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9oZWFkZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL2xheW91dCdcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL21lbnUnXHJcbmltcG9ydCBDb2luR2Vja28gZnJvbSAnY29pbmdlY2tvLWFwaSc7XHJcbmNvbnN0IGNvaW5HZWNrb0NsaWVudCA9IG5ldyBDb2luR2Vja28oKTtcclxuaW1wb3J0IE1hdGVyaWFsVGFibGUgZnJvbSAnbWF0ZXJpYWwtdGFibGUnXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5jb25zdCB1c2VTdHlsZXNidXR0b20gPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgfSxcclxuICAgIH0pLFxyXG4pO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBtYXhXaWR0aDogODAwLFxyXG4gICAgfSxcclxuICAgIG1lZGlhOiB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MDAsXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJsZWZ0XCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJsZWZ0XCIsXHJcbiAgICAgICAgbWluSGVpZ2h0OiBcIjUwdmhcIixcclxuICAgIH0sXHJcbiAgICB0ZXN0OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCI1MDBweFwiLFxyXG4gICAgfSxcclxuICAgIHRlc3RyaWdodDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMTAwMHB4XCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIi0zNTBweFwiXHJcblxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlc1JpZ2h0ID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IDM1MCxcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiLTM4MHB4XCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCI5NTBweFwiLFxyXG4gICAgfSxcclxuICAgIG1lZGlhOiB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICByZXN1bHQ6IHsgZGF0YTogYW55OyB9O1xyXG5cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICBvcmRlcjogQ29pbkdlY2tvLk9SREVSLk1BUktFVF9DQVBfREVTQ1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvaW5HZWNrb0NsaWVudC5jb2lucy5tYXJrZXRzKHsgcGFyYW1zIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICByZXN1bHRcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QocHJvcHM6IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHMucmVzdWx0O1xyXG4gICAgY29uc29sZS5sb2coXCJTaG93LS0tLT5nZXRBUEktLS0tPlwiLCBkYXRhKVxyXG4gICAgY29uc3QgZm9ybWF0UGVyY2VudCA9IG51bWJlciA9PlxyXG4gICAgYCR7bmV3IE51bWJlcihudW1iZXIpLnRvRml4ZWQoMil9JWBcclxuXHJcbiAgY29uc3QgZm9ybWF0RG9sbGFyID0gKG51bWJlciwgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzKSA9PlxyXG4gICAgbmV3IEludGwuTnVtYmVyRm9ybWF0KFxyXG4gICAgICAnZW4tVVMnLFxyXG4gICAgICB7XHJcbiAgICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxyXG4gICAgICAgIG1heGltdW1TaWduaWZpY2FudERpZ2l0c1xyXG4gICAgICB9KVxyXG4gICAgICAuZm9ybWF0KG51bWJlcik7XHJcbiAgICBjb25zdCBjbGFzc2VzdGVzdCA9IHVzZVN0eWxlc2J1dHRvbSgpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgY2xhc3Nlc1JpZ2h0ID0gdXNlU3R5bGVzUmlnaHQoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSA+XHJcblxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCYWxhbmNlOlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbjpcclxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDw+X19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX188Lz5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW46XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjb2luXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN0ZXN0LmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAvL2VuZEljb249ezxJY29uPnNlbmQ8L0ljb24+fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRXhjaGFuZyBUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8TWF0ZXJpYWxUYWJsZVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiU3ltYm9sXCIsIGZpZWxkOiAnaW1hZ2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJOYW1lXCIsIGZpZWxkOiAnbmFtZScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIjI0SCBDaGFuZ2VcIiwgZmllbGQ6ICdwcmljZTI0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiXHRQcmljZSAoJClcIiwgZmllbGQ6ICdjdXJyZW50X3ByaWNlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiXHRNYXJrZXQgY2FwICgkKVwiLCBmaWVsZDogJ21hcmtldF9jYXAnIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGNvaW4pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NvaW4uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI1LCBoZWlnaHQ6IDI1LCBtYXJnaW5SaWdodDogMTAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY29pbi5zeW1ib2wudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlMjQ6IGZvcm1hdFBlcmNlbnQoY29pbi5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wcmljZTogY29pbi5jdXJyZW50X3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0X2NhcDogY29pbi5tYXJrZXRfY2FwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAvL3sgaW1hZ2U6IFwidGVzdFwiLCBwcmljZTI0OiBcInRlc3RcIiwgUHJpY2U6IFwidGVzdFwiLCBNYXJrZXRjYXA6IFwidGVzdFwiIH0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNvaW5tYXJrZXRjYXBcIiAvPlxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9