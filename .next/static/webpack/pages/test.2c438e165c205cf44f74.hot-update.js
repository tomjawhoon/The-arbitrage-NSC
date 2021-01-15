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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classesRight.root,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "show"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
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
            lineNumber: 154,
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
      lineNumber: 143,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzYnV0dG9tIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwiYnV0dG9uIiwibWFyZ2luIiwic3BhY2luZyIsInVzZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1lZGlhIiwiaGVpZ2h0IiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtaW5IZWlnaHQiLCJ0ZXN0IiwibWFyZ2luTGVmdCIsInRlc3RyaWdodCIsIm1hcmdpblRvcCIsInVzZVN0eWxlc1JpZ2h0IiwiVGVzdCIsInByb3BzIiwiZGF0YSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtYXRQZXJjZW50IiwibnVtYmVyIiwiTnVtYmVyIiwidG9GaXhlZCIsImZvcm1hdERvbGxhciIsIm1heGltdW1TaWduaWZpY2FudERpZ2l0cyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwiY2xhc3Nlc3Rlc3QiLCJjbGFzc2VzIiwiY2xhc3Nlc1JpZ2h0IiwidGl0bGUiLCJmaWVsZCIsIm1hcCIsImNvaW4iLCJpbWFnZSIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJuYW1lIiwic3ltYm9sIiwidG9VcHBlckNhc2UiLCJwcmljZTI0IiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoIiwiY3VycmVudF9wcmljZSIsIm1hcmtldF9jYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUtBO0FBTUEsSUFBTUEsZUFBZSxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMvQkMsNkVBQVksQ0FBQztBQUNUQyxVQUFNLEVBQUU7QUFDSkMsWUFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBREo7QUFEQyxHQUFELENBRG1CO0FBQUEsQ0FBRCxDQUFsQztBQU9BLElBQU1DLFNBQVMsR0FBR04sMkVBQVUsQ0FBQztBQUN6Qk8sTUFBSSxFQUFFO0FBQ0ZDLFlBQVEsRUFBRTtBQURSLEdBRG1CO0FBSXpCQyxPQUFLLEVBQUU7QUFDSEMsVUFBTSxFQUFFO0FBREwsR0FKa0I7QUFPekJDLFdBQVMsRUFBRTtBQUNQQyxXQUFPLEVBQUUsTUFERjtBQUVQQyxpQkFBYSxFQUFFLFFBRlI7QUFHUEMsa0JBQWMsRUFBRSxNQUhUO0FBSVBDLGNBQVUsRUFBRSxNQUpMO0FBS1BDLGFBQVMsRUFBRTtBQUxKLEdBUGM7QUFjekJDLE1BQUksRUFBRTtBQUNGTCxXQUFPLEVBQUUsTUFEUDtBQUVGTSxjQUFVLEVBQUU7QUFGVixHQWRtQjtBQWtCekJDLFdBQVMsRUFBRTtBQUNQUCxXQUFPLEVBQUUsTUFERjtBQUVQTSxjQUFVLEVBQUUsUUFGTDtBQUdQRSxhQUFTLEVBQUU7QUFISjtBQWxCYyxDQUFELENBQTVCO0FBMEJBLElBQU1DLGNBQWMsR0FBR3JCLDJFQUFVLENBQUM7QUFDOUJPLE1BQUksRUFBRTtBQUNGQyxZQUFRLEVBQUUsR0FEUjtBQUVGWSxhQUFTLEVBQUUsUUFGVDtBQUdGRixjQUFVLEVBQUU7QUFIVixHQUR3QjtBQU05QlQsT0FBSyxFQUFFO0FBQ0hDLFVBQU0sRUFBRTtBQURMO0FBTnVCLENBQUQsQ0FBakM7O0FBMEJlLFNBQVNZLElBQVQsQ0FBY0MsS0FBZCxFQUEwQztBQUFBOztBQUFBOztBQUFBLE1BQzdDQyxJQUQ2QyxHQUNwQ0QsS0FBSyxDQUFDRSxNQUQ4QixDQUM3Q0QsSUFENkM7QUFFckRFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaLEVBQW9DSCxJQUFwQzs7QUFDQSxNQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLE1BQU07QUFBQSxxQkFDekIsSUFBSUMsTUFBSixDQUFXRCxNQUFYLEVBQW1CRSxPQUFuQixDQUEyQixDQUEzQixDQUR5QjtBQUFBLEdBQTVCOztBQUdGLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILE1BQUQsRUFBU0ksd0JBQVQ7QUFBQSxXQUNuQixJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FDRSxPQURGLEVBRUU7QUFDRUMsV0FBSyxFQUFFLFVBRFQ7QUFFRUMsY0FBUSxFQUFFLEtBRlo7QUFHRUosOEJBQXdCLEVBQXhCQTtBQUhGLEtBRkYsRUFPR0ssTUFQSCxDQU9VVCxNQVBWLENBRG1CO0FBQUEsR0FBckI7O0FBU0UsTUFBTVUsV0FBVyxHQUFHeEMsZUFBZSxFQUFuQztBQUNBLE1BQU15QyxPQUFPLEdBQUdsQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTW1DLFlBQVksR0FBR3BCLGNBQWMsRUFBbkM7QUFDQSxzQkFDSSxxRUFBQyxrRUFBRDtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFbUIsT0FBTyxDQUFDN0IsU0FBeEI7QUFBQSw2QkFFSSxxRUFBQyw4REFBRDtBQUFNLGlCQUFTLEVBQUU2QixPQUFPLENBQUNqQyxJQUF6QjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRWlDLE9BQU8sQ0FBQ3ZCLElBQXhCO0FBQUEsOENBRUM7QUFBTyxnQkFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQUksRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU1JO0FBQUEsa0NBQ0k7QUFBQSw4Q0FFSDtBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBSSxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBS0k7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQUssRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSixlQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkosZUFjSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGNBQUksRUFBQyxNQUF4QjtBQUErQixxQkFBVyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEosZUFlSTtBQUFBO0FBQUEseUJBZkosZUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkosZUFpQkk7QUFBQSxrQ0FDSTtBQUFBLDhDQUVIO0FBQU8sa0JBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFJLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFLSTtBQUFPLGdCQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCSixlQXdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXhCSixlQXlCSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGNBQUksRUFBQyxNQUF4QjtBQUErQixxQkFBVyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekJKLGVBMEJJLHFFQUFDLGdFQUFEO0FBQ0ksaUJBQU8sRUFBQyxXQURaO0FBRUksZUFBSyxFQUFDLFNBRlY7QUFHSSxtQkFBUyxFQUFFc0IsV0FBVyxDQUFDcEMsTUFIM0IsQ0FJQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUF1Q0kscUVBQUMsOERBQUQ7QUFBTSxlQUFTLEVBQUVzQyxZQUFZLENBQUNsQyxJQUE5QjtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZDSixlQTZDSSxxRUFBQyxxREFBRDtBQUNJLGFBQU8sRUFBRSxDQUNMO0FBQUVtQyxhQUFLLEVBQUUsUUFBVDtBQUFtQkMsYUFBSyxFQUFFO0FBQTFCLE9BREssRUFFTDtBQUFFRCxhQUFLLEVBQUUsTUFBVDtBQUFpQkMsYUFBSyxFQUFFO0FBQXhCLE9BRkssRUFHTDtBQUFFRCxhQUFLLEVBQUUsWUFBVDtBQUF1QkMsYUFBSyxFQUFFO0FBQTlCLE9BSEssRUFJTDtBQUFFRCxhQUFLLEVBQUUsWUFBVDtBQUF1QkMsYUFBSyxFQUFFO0FBQTlCLE9BSkssRUFLTDtBQUFFRCxhQUFLLEVBQUUsaUJBQVQ7QUFBNEJDLGFBQUssRUFBRTtBQUFuQyxPQUxLLENBRGI7QUFRSSxVQUFJLEVBQ0FuQixJQUFJLENBQUNvQixHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLGVBQ0w7QUFDSUMsZUFBSyxlQUFFO0FBQ0gsZUFBRyxFQUFFRCxJQUFJLENBQUNDLEtBRFA7QUFFSCxpQkFBSyxFQUFFO0FBQUVDLG1CQUFLLEVBQUUsRUFBVDtBQUFhckMsb0JBQU0sRUFBRSxFQUFyQjtBQUF5QnNDLHlCQUFXLEVBQUU7QUFBdEM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURYO0FBS0lDLGNBQUksRUFBRUosSUFBSSxDQUFDSyxNQUFMLENBQVlDLFdBQVosRUFMVjtBQU1JQyxpQkFBTyxFQUFFeEIsYUFBYSxDQUFDaUIsSUFBSSxDQUFDUSwyQkFBTixDQU4xQjtBQU9JQyx1QkFBYSxFQUFFVCxJQUFJLENBQUNTLGFBUHhCO0FBUUlDLG9CQUFVLEVBQUVWLElBQUksQ0FBQ1U7QUFSckIsU0FESztBQUFBLE9BQVQsQ0FUUixDQXFCSTtBQXJCSjtBQXNCSSxXQUFLLEVBQUM7QUF0QlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXdFSDs7R0ExRnVCakMsSTtVQWVBdkIsZSxFQUNKTyxTLEVBQ0tlLGM7OztLQWpCREMsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LjJjNDM4ZTE2NWMyMDVjZjQ0Zjc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL2hlYWRlcidcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvbGF5b3V0J1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvbWVudSdcclxuaW1wb3J0IENvaW5HZWNrbyBmcm9tICdjb2luZ2Vja28tYXBpJztcclxuY29uc3QgY29pbkdlY2tvQ2xpZW50ID0gbmV3IENvaW5HZWNrbygpO1xyXG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSdcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmNvbnN0IHVzZVN0eWxlc2J1dHRvbSA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICB9LFxyXG4gICAgfSksXHJcbik7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIG1heFdpZHRoOiA4MDAsXHJcbiAgICB9LFxyXG4gICAgbWVkaWE6IHtcclxuICAgICAgICBoZWlnaHQ6IDgwMCxcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImxlZnRcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImxlZnRcIixcclxuICAgICAgICBtaW5IZWlnaHQ6IFwiNTB2aFwiLFxyXG4gICAgfSxcclxuICAgIHRlc3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjUwMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgdGVzdHJpZ2h0OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIxMDAwcHhcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiLTM1MHB4XCJcclxuXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzUmlnaHQgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBtYXhXaWR0aDogMzUwLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCItMzgwcHhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjk1MHB4XCIsXHJcbiAgICB9LFxyXG4gICAgbWVkaWE6IHtcclxuICAgICAgICBoZWlnaHQ6IDUwMCxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHJlc3VsdDogeyBkYXRhOiBhbnk7IH07XHJcblxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgIG9yZGVyOiBDb2luR2Vja28uT1JERVIuTUFSS0VUX0NBUF9ERVNDXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29pbkdlY2tvQ2xpZW50LmNvaW5zLm1hcmtldHMoeyBwYXJhbXMgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHJlc3VsdFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdChwcm9wczogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcy5yZXN1bHQ7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNob3ctLS0tPmdldEFQSS0tLS0+XCIsIGRhdGEpXHJcbiAgICBjb25zdCBmb3JtYXRQZXJjZW50ID0gbnVtYmVyID0+XHJcbiAgICBgJHtuZXcgTnVtYmVyKG51bWJlcikudG9GaXhlZCgyKX0lYFxyXG5cclxuICBjb25zdCBmb3JtYXREb2xsYXIgPSAobnVtYmVyLCBtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMpID0+XHJcbiAgICBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXHJcbiAgICAgICdlbi1VUycsXHJcbiAgICAgIHtcclxuICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgICAgICBjdXJyZW5jeTogJ1VTRCcsXHJcbiAgICAgICAgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzXHJcbiAgICAgIH0pXHJcbiAgICAgIC5mb3JtYXQobnVtYmVyKTtcclxuICAgIGNvbnN0IGNsYXNzZXN0ZXN0ID0gdXNlU3R5bGVzYnV0dG9tKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzUmlnaHQgPSB1c2VTdHlsZXNSaWdodCgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9ID5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGVzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJhbGFuY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRva2VuOlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPD5fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXzwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbjpcclxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc3Rlc3QuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8vZW5kSWNvbj17PEljb24+c2VuZDwvSWNvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFeGNoYW5nIFRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzUmlnaHQucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICA+XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJTeW1ib2xcIiwgZmllbGQ6ICdpbWFnZScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIk5hbWVcIiwgZmllbGQ6ICduYW1lJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiMjRIIENoYW5nZVwiLCBmaWVsZDogJ3ByaWNlMjQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJcdFByaWNlICgkKVwiLCBmaWVsZDogJ2N1cnJlbnRfcHJpY2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJcdE1hcmtldCBjYXAgKCQpXCIsIGZpZWxkOiAnbWFya2V0X2NhcCcgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoY29pbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y29pbi5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjUsIGhlaWdodDogMjUsIG1hcmdpblJpZ2h0OiAxMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjb2luLnN5bWJvbC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UyNDogZm9ybWF0UGVyY2VudChjb2luLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ByaWNlOiBjb2luLmN1cnJlbnRfcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRfY2FwOiBjb2luLm1hcmtldF9jYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIC8veyBpbWFnZTogXCJ0ZXN0XCIsIHByaWNlMjQ6IFwidGVzdFwiLCBQcmljZTogXCJ0ZXN0XCIsIE1hcmtldGNhcDogXCJ0ZXN0XCIgfSxcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29pbm1hcmtldGNhcFwiIC8+XHJcblxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=