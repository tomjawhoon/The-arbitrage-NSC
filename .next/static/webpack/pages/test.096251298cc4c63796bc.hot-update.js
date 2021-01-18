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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\AToMixz\\Desktop\\NSC\\nscno1\\pages\\test.tsx",
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
function Test(props, initialId) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialId),
      newId = _useState[0],
      setNewId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      Price = _useState2[0],
      setPrice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      Hash = _useState3[0],
      setHash = _useState3[1]; //  console.log("Price", Price)


  function onSave(valueinput) {
    console.log("valueinput", valueinput);
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('http://localhost:5001/testgetdata', {
      valueinput: valueinput //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ

    }).then(function (response) {
      //console.log("response", response.data); //1000.000
      setPrice(response.data);
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('http://localhost:5001/swapcoin', {
        valueinput: valueinput
      }).then(function (response) {
        //console.log("Hash", Hash.data); //1000.000
        setHash(response.data);
      });
      console.log("Hash", Hash); //1000.000
    });
  } //console.log("setPrice",Price) //1000.000


  console.log("Hash", Hash); //1000.000

  var data = props.result.data; //console.log("Show---->getAPI---->", data)

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
            lineNumber: 130,
            columnNumber: 22
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: ["Token: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "name",
              value: "WETH"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 36
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          onChange: function onChange(e) {
            return setNewId(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: ["Token:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "name",
              value: "MKR"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          value: Price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          value: Hash
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          color: "primary",
          className: classestest.button,
          onClick: function onClick() {
            return onSave(newId);
          },
          children: "Exchang Token"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
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
            lineNumber: 172,
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
      lineNumber: 161,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 9
  }, this);
}

_s(Test, "K5mzLnad+jwf7kfDPZVC7m0axEU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzYnV0dG9tIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwiYnV0dG9uIiwibWFyZ2luIiwic3BhY2luZyIsInVzZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1lZGlhIiwiaGVpZ2h0IiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtaW5IZWlnaHQiLCJ0ZXN0IiwibWFyZ2luTGVmdCIsInRlc3RyaWdodCIsIm1hcmdpblRvcCIsInVzZVN0eWxlc1JpZ2h0IiwiVGVzdCIsInByb3BzIiwiaW5pdGlhbElkIiwidXNlU3RhdGUiLCJuZXdJZCIsInNldE5ld0lkIiwiUHJpY2UiLCJzZXRQcmljZSIsIkhhc2giLCJzZXRIYXNoIiwib25TYXZlIiwidmFsdWVpbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0IiwiZm9ybWF0UGVyY2VudCIsIm51bWJlciIsIk51bWJlciIsInRvRml4ZWQiLCJmb3JtYXREb2xsYXIiLCJtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsImNsYXNzZXN0ZXN0IiwiY2xhc3NlcyIsImNsYXNzZXNSaWdodCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpdGxlIiwiZmllbGQiLCJtYXAiLCJjb2luIiwiaW1hZ2UiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwibmFtZSIsInN5bWJvbCIsInRvVXBwZXJDYXNlIiwicHJpY2UyNCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCIsImN1cnJlbnRfcHJpY2UiLCJtYXJrZXRfY2FwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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RCxhQUFLLEVBQUUsTUFBVDtBQUFpQkMsYUFBSyxFQUFFO0FBQXhCLE9BRkssRUFHTDtBQUFFRCxhQUFLLEVBQUUsWUFBVDtBQUF1QkMsYUFBSyxFQUFFO0FBQTlCLE9BSEssRUFJTDtBQUFFRCxhQUFLLEVBQUUsWUFBVDtBQUF1QkMsYUFBSyxFQUFFO0FBQTlCLE9BSkssRUFLTDtBQUFFRCxhQUFLLEVBQUUsaUJBQVQ7QUFBNEJDLGFBQUssRUFBRTtBQUFuQyxPQUxLLENBRGI7QUFRSSxVQUFJLEVBQ0FwQixJQUFJLENBQUNxQixHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLGVBQ0w7QUFDSUMsZUFBSyxlQUFFO0FBQUssZUFBRyxFQUFFRCxJQUFJLENBQUNDLEtBQWY7QUFBc0IsaUJBQUssRUFBRTtBQUFFQyxtQkFBSyxFQUFFLEVBQVQ7QUFBYXRELG9CQUFNLEVBQUUsRUFBckI7QUFBeUJ1RCx5QkFBVyxFQUFFO0FBQXRDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFg7QUFFSUMsY0FBSSxFQUFFSixJQUFJLENBQUNLLE1BQUwsQ0FBWUMsV0FBWixFQUZWO0FBR0lDLGlCQUFPLEVBQUUzQixhQUFhLENBQUNvQixJQUFJLENBQUNRLDJCQUFOLENBSDFCO0FBSUlDLHVCQUFhLEVBQUVULElBQUksQ0FBQ1MsYUFKeEI7QUFLSUMsb0JBQVUsRUFBRVYsSUFBSSxDQUFDVTtBQUxyQixTQURLO0FBQUEsT0FBVCxDQVRSLENBa0JJO0FBbEJKO0FBbUJJLFdBQUssRUFBQztBQW5CVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNERIOztHQXJHdUJsRCxJO1VBc0NBdkIsZSxFQUNKTyxTLEVBQ0tlLGM7OztLQXhDREMsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LjA5NjI1MTI5OGNjNGM2Mzc5NmJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9oZWFkZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL2xheW91dCdcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL21lbnUnXHJcbmltcG9ydCBDb2luR2Vja28gZnJvbSAnY29pbmdlY2tvLWFwaSc7XHJcbmNvbnN0IGNvaW5HZWNrb0NsaWVudCA9IG5ldyBDb2luR2Vja28oKTtcclxuaW1wb3J0IE1hdGVyaWFsVGFibGUgZnJvbSAnbWF0ZXJpYWwtdGFibGUnXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBIYXNoIH0gZnJvbSAnY3J5cHRvJztcclxuY29uc3QgdXNlU3R5bGVzYnV0dG9tID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KSxcclxuKTtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IDgwMCxcclxuICAgIH0sXHJcbiAgICBtZWRpYToge1xyXG4gICAgICAgIGhlaWdodDogODAwLFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwibGVmdFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwibGVmdFwiLFxyXG4gICAgICAgIG1pbkhlaWdodDogXCI1MHZoXCIsXHJcbiAgICB9LFxyXG4gICAgdGVzdDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiNTAwcHhcIixcclxuICAgIH0sXHJcbiAgICB0ZXN0cmlnaHQ6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwMDBweFwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCItMzUwcHhcIlxyXG5cclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCB1c2VTdHlsZXNSaWdodCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIG1heFdpZHRoOiAzNTAsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIi0zODBweFwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiOTUwcHhcIixcclxuICAgIH0sXHJcbiAgICBtZWRpYToge1xyXG4gICAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgcmVzdWx0OiB7IGRhdGE6IGFueTsgfTtcclxuICAgIGluaXRpYWxJZDogYW55LFxyXG4gICAgdmFsdWVpbnB1dDogYW55LFxyXG5cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICBvcmRlcjogQ29pbkdlY2tvLk9SREVSLk1BUktFVF9DQVBfREVTQ1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvaW5HZWNrb0NsaWVudC5jb2lucy5tYXJrZXRzKHsgcGFyYW1zIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICByZXN1bHRcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QocHJvcHMsIGluaXRpYWxJZDogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gICAgY29uc3QgW25ld0lkLCBzZXROZXdJZF0gPSB1c2VTdGF0ZShpbml0aWFsSWQpXHJcbiAgICBjb25zdCBbUHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbSGFzaCwgc2V0SGFzaF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgLy8gIGNvbnNvbGUubG9nKFwiUHJpY2VcIiwgUHJpY2UpXHJcbiAgICBmdW5jdGlvbiBvblNhdmUodmFsdWVpbnB1dDogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZWlucHV0XCIsIHZhbHVlaW5wdXQpO1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90ZXN0Z2V0ZGF0YScsIHtcclxuICAgICAgICAgICAgdmFsdWVpbnB1dCwgLy8wLjAwNSDguITguYjguLLguJfguLXguYjguIHguKPguK3guIHguYPguJnguIrguYjguK3guIfguK3guYjguLLguJnguLHguYnguJnguYHguKvguKXguLBcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlLmRhdGEpOyAvLzEwMDAuMDAwXHJcbiAgICAgICAgICAgIHNldFByaWNlKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9zd2FwY29pbicsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlaW5wdXQsXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkhhc2hcIiwgSGFzaC5kYXRhKTsgLy8xMDAwLjAwMFxyXG4gICAgICAgICAgICAgICAgc2V0SGFzaChyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIYXNoXCIsIEhhc2gpIC8vMTAwMC4wMDBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwic2V0UHJpY2VcIixQcmljZSkgLy8xMDAwLjAwMFxyXG4gICAgY29uc29sZS5sb2coXCJIYXNoXCIsSGFzaCkgLy8xMDAwLjAwMFxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcy5yZXN1bHQ7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiU2hvdy0tLS0+Z2V0QVBJLS0tLT5cIiwgZGF0YSlcclxuICAgIGNvbnN0IGZvcm1hdFBlcmNlbnQgPSBudW1iZXIgPT5cclxuICAgICAgICBgJHtuZXcgTnVtYmVyKG51bWJlcikudG9GaXhlZCgyKX0lYFxyXG5cclxuICAgIGNvbnN0IGZvcm1hdERvbGxhciA9IChudW1iZXIsIG1heGltdW1TaWduaWZpY2FudERpZ2l0cykgPT5cclxuICAgICAgICBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXHJcbiAgICAgICAgICAgICdlbi1VUycsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mb3JtYXQobnVtYmVyKTtcclxuICAgIGNvbnN0IGNsYXNzZXN0ZXN0ID0gdXNlU3R5bGVzYnV0dG9tKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzUmlnaHQgPSB1c2VTdHlsZXNSaWdodCgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCYWxhbmNlOlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbjogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT1cIldFVEhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW46XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9XCJNS1JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIHZhbHVlPXtQcmljZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIHZhbHVlPXtIYXNofSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc3Rlc3QuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNhdmUobmV3SWQpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRXhjaGFuZyBUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPE1hdGVyaWFsVGFibGVcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIlN5bWJvbFwiLCBmaWVsZDogJ2ltYWdlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiTmFtZVwiLCBmaWVsZDogJ25hbWUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCIyNEggQ2hhbmdlXCIsIGZpZWxkOiAncHJpY2UyNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIlx0UHJpY2UgKCQpXCIsIGZpZWxkOiAnY3VycmVudF9wcmljZScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIlx0TWFya2V0IGNhcCAoJClcIiwgZmllbGQ6ICdtYXJrZXRfY2FwJyB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGRhdGE9e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChjb2luKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiA8aW1nIHNyYz17Y29pbi5pbWFnZX0gc3R5bGU9e3sgd2lkdGg6IDI1LCBoZWlnaHQ6IDI1LCBtYXJnaW5SaWdodDogMTAgfX0gLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjb2luLnN5bWJvbC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UyNDogZm9ybWF0UGVyY2VudChjb2luLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ByaWNlOiBjb2luLmN1cnJlbnRfcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRfY2FwOiBjb2luLm1hcmtldF9jYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIC8veyBpbWFnZTogXCJ0ZXN0XCIsIHByaWNlMjQ6IFwidGVzdFwiLCBQcmljZTogXCJ0ZXN0XCIsIE1hcmtldGNhcDogXCJ0ZXN0XCIgfSxcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29pbm1hcmtldGNhcFwiIC8+XHJcblxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=