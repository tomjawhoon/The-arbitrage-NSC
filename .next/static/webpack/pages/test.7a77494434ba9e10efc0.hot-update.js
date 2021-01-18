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
          value: "https://kovan.etherscan.io/tx/" + Hash
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzYnV0dG9tIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwiYnV0dG9uIiwibWFyZ2luIiwic3BhY2luZyIsInVzZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1lZGlhIiwiaGVpZ2h0IiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtaW5IZWlnaHQiLCJ0ZXN0IiwibWFyZ2luTGVmdCIsInRlc3RyaWdodCIsIm1hcmdpblRvcCIsInVzZVN0eWxlc1JpZ2h0IiwiVGVzdCIsInByb3BzIiwiaW5pdGlhbElkIiwidXNlU3RhdGUiLCJuZXdJZCIsInNldE5ld0lkIiwiUHJpY2UiLCJzZXRQcmljZSIsIkhhc2giLCJzZXRIYXNoIiwib25TYXZlIiwidmFsdWVpbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0IiwiZm9ybWF0UGVyY2VudCIsIm51bWJlciIsIk51bWJlciIsInRvRml4ZWQiLCJmb3JtYXREb2xsYXIiLCJtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsImNsYXNzZXN0ZXN0IiwiY2xhc3NlcyIsImNsYXNzZXNSaWdodCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpdGxlIiwiZmllbGQiLCJtYXAiLCJjb2luIiwiaW1hZ2UiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwibmFtZSIsInN5bWJvbCIsInRvVXBwZXJDYXNlIiwicHJpY2UyNCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCIsImN1cnJlbnRfcHJpY2UiLCJtYXJrZXRfY2FwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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RUw7QUFBRUQsYUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGFBQUssRUFBRTtBQUF4QixPQUZLLEVBR0w7QUFBRUQsYUFBSyxFQUFFLFlBQVQ7QUFBdUJDLGFBQUssRUFBRTtBQUE5QixPQUhLLEVBSUw7QUFBRUQsYUFBSyxFQUFFLFlBQVQ7QUFBdUJDLGFBQUssRUFBRTtBQUE5QixPQUpLLEVBS0w7QUFBRUQsYUFBSyxFQUFFLGlCQUFUO0FBQTRCQyxhQUFLLEVBQUU7QUFBbkMsT0FMSyxDQURiO0FBUUksVUFBSSxFQUNBcEIsSUFBSSxDQUFDcUIsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxlQUNMO0FBQ0lDLGVBQUssZUFBRTtBQUFLLGVBQUcsRUFBRUQsSUFBSSxDQUFDQyxLQUFmO0FBQXNCLGlCQUFLLEVBQUU7QUFBRUMsbUJBQUssRUFBRSxFQUFUO0FBQWF0RCxvQkFBTSxFQUFFLEVBQXJCO0FBQXlCdUQseUJBQVcsRUFBRTtBQUF0QztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURYO0FBRUlDLGNBQUksRUFBRUosSUFBSSxDQUFDSyxNQUFMLENBQVlDLFdBQVosRUFGVjtBQUdJQyxpQkFBTyxFQUFFM0IsYUFBYSxDQUFDb0IsSUFBSSxDQUFDUSwyQkFBTixDQUgxQjtBQUlJQyx1QkFBYSxFQUFFVCxJQUFJLENBQUNTLGFBSnhCO0FBS0lDLG9CQUFVLEVBQUVWLElBQUksQ0FBQ1U7QUFMckIsU0FESztBQUFBLE9BQVQsQ0FUUixDQWtCSTtBQWxCSjtBQW1CSSxXQUFLLEVBQUM7QUFuQlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRESDs7R0FyR3VCbEQsSTtVQXNDQXZCLGUsRUFDSk8sUyxFQUNLZSxjOzs7S0F4Q0RDLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC43YTc3NDk0NDM0YmE5ZTEwZWZjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvaGVhZGVyJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9sYXlvdXQnXHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9tZW51J1xyXG5pbXBvcnQgQ29pbkdlY2tvIGZyb20gJ2NvaW5nZWNrby1hcGknO1xyXG5jb25zdCBjb2luR2Vja29DbGllbnQgPSBuZXcgQ29pbkdlY2tvKCk7XHJcbmltcG9ydCBNYXRlcmlhbFRhYmxlIGZyb20gJ21hdGVyaWFsLXRhYmxlJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgSGFzaCB9IGZyb20gJ2NyeXB0byc7XHJcbmNvbnN0IHVzZVN0eWxlc2J1dHRvbSA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICB9LFxyXG4gICAgfSksXHJcbik7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIG1heFdpZHRoOiA4MDAsXHJcbiAgICB9LFxyXG4gICAgbWVkaWE6IHtcclxuICAgICAgICBoZWlnaHQ6IDgwMCxcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImxlZnRcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImxlZnRcIixcclxuICAgICAgICBtaW5IZWlnaHQ6IFwiNTB2aFwiLFxyXG4gICAgfSxcclxuICAgIHRlc3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjUwMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgdGVzdHJpZ2h0OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIxMDAwcHhcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiLTM1MHB4XCJcclxuXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzUmlnaHQgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBtYXhXaWR0aDogMzUwLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCItMzgwcHhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjk1MHB4XCIsXHJcbiAgICB9LFxyXG4gICAgbWVkaWE6IHtcclxuICAgICAgICBoZWlnaHQ6IDUwMCxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHJlc3VsdDogeyBkYXRhOiBhbnk7IH07XHJcbiAgICBpbml0aWFsSWQ6IGFueSxcclxuICAgIHZhbHVlaW5wdXQ6IGFueSxcclxuXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgb3JkZXI6IENvaW5HZWNrby5PUkRFUi5NQVJLRVRfQ0FQX0RFU0NcclxuICAgIH07XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb2luR2Vja29DbGllbnQuY29pbnMubWFya2V0cyh7IHBhcmFtcyB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcmVzdWx0XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0KHByb3BzLCBpbml0aWFsSWQ6IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoaW5pdGlhbElkKVxyXG4gICAgY29uc3QgW1ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW0hhc2gsIHNldEhhc2hdID0gdXNlU3RhdGUoMClcclxuICAgIC8vICBjb25zb2xlLmxvZyhcIlByaWNlXCIsIFByaWNlKVxyXG4gICAgZnVuY3Rpb24gb25TYXZlKHZhbHVlaW5wdXQ6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVpbnB1dFwiLCB2YWx1ZWlucHV0KTtcclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdGVzdGdldGRhdGEnLCB7XHJcbiAgICAgICAgICAgIHZhbHVlaW5wdXQsIC8vMC4wMDUg4LiE4LmI4Liy4LiX4Li14LmI4LiB4Lij4Lit4LiB4LmD4LiZ4LiK4LmI4Lit4LiH4Lit4LmI4Liy4LiZ4Lix4LmJ4LiZ4LmB4Lir4Lil4LiwXHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZS5kYXRhKTsgLy8xMDAwLjAwMFxyXG4gICAgICAgICAgICBzZXRQcmljZShyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvc3dhcGNvaW4nLCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZWlucHV0LFxyXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJIYXNoXCIsIEhhc2guZGF0YSk7IC8vMTAwMC4wMDBcclxuICAgICAgICAgICAgICAgIHNldEhhc2gocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGFzaFwiLCBIYXNoKSAvLzEwMDAuMDAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcInNldFByaWNlXCIsUHJpY2UpIC8vMTAwMC4wMDBcclxuICAgIGNvbnNvbGUubG9nKFwiSGFzaFwiLEhhc2gpIC8vMTAwMC4wMDBcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHMucmVzdWx0O1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIlNob3ctLS0tPmdldEFQSS0tLS0+XCIsIGRhdGEpXHJcbiAgICBjb25zdCBmb3JtYXRQZXJjZW50ID0gbnVtYmVyID0+XHJcbiAgICAgICAgYCR7bmV3IE51bWJlcihudW1iZXIpLnRvRml4ZWQoMil9JWBcclxuXHJcbiAgICBjb25zdCBmb3JtYXREb2xsYXIgPSAobnVtYmVyLCBtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMpID0+XHJcbiAgICAgICAgbmV3IEludGwuTnVtYmVyRm9ybWF0KFxyXG4gICAgICAgICAgICAnZW4tVVMnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcclxuICAgICAgICAgICAgICAgIG1heGltdW1TaWduaWZpY2FudERpZ2l0c1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZm9ybWF0KG51bWJlcik7XHJcbiAgICBjb25zdCBjbGFzc2VzdGVzdCA9IHVzZVN0eWxlc2J1dHRvbSgpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgY2xhc3Nlc1JpZ2h0ID0gdXNlU3R5bGVzUmlnaHQoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQmFsYW5jZTpcclxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW46IDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9XCJXRVRIXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRva2VuOlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPVwiTUtSXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiB2YWx1ZT17UHJpY2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiB2YWx1ZT17YGh0dHBzOi8va292YW4uZXRoZXJzY2FuLmlvL3R4L2ArSGFzaH0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzdGVzdC5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2F2ZShuZXdJZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFeGNoYW5nIFRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8TWF0ZXJpYWxUYWJsZVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiU3ltYm9sXCIsIGZpZWxkOiAnaW1hZ2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJOYW1lXCIsIGZpZWxkOiAnbmFtZScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIjI0SCBDaGFuZ2VcIiwgZmllbGQ6ICdwcmljZTI0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiXHRQcmljZSAoJClcIiwgZmllbGQ6ICdjdXJyZW50X3ByaWNlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiXHRNYXJrZXQgY2FwICgkKVwiLCBmaWVsZDogJ21hcmtldF9jYXAnIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGNvaW4pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IDxpbWcgc3JjPXtjb2luLmltYWdlfSBzdHlsZT17eyB3aWR0aDogMjUsIGhlaWdodDogMjUsIG1hcmdpblJpZ2h0OiAxMCB9fSAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNvaW4uc3ltYm9sLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTI0OiBmb3JtYXRQZXJjZW50KGNvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcHJpY2U6IGNvaW4uY3VycmVudF9wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldF9jYXA6IGNvaW4ubWFya2V0X2NhcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgLy97IGltYWdlOiBcInRlc3RcIiwgcHJpY2UyNDogXCJ0ZXN0XCIsIFByaWNlOiBcInRlc3RcIiwgTWFya2V0Y2FwOiBcInRlc3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDb2lubWFya2V0Y2FwXCIgLz5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==