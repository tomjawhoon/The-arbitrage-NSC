webpackHotUpdate_N_E("pages/gettoken",{

/***/ "./pages/gettoken.tsx":
/*!****************************!*\
  !*** ./pages/gettoken.tsx ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\AToMixz\\Desktop\\NSC\\Workshopnext-Full-1550BATH\\pages\\gettoken.tsx";



var __N_SSP = true;
function Home(props) {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Coinmarketcap clone"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Coinmarketcap clone"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "table",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Symbol"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "24H Change"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Market cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: data.map(function (coin) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: coin.image,
                style: {
                  width: 25,
                  height: 25,
                  marginRight: 10
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, _this), coin.symbol.toUpperCase()]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger',
                children: formatPercent(coin.price_change_percentage_24h)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: formatDollar(coin.current_price, 20)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: formatDollar(coin.market_cap, 12)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this)]
          }, coin.id, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_table__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
        title: "Price",
        field: 'current_price'
      }, {
        title: "Market cap",
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
            lineNumber: 75,
            columnNumber: 20
          }, _this),
          name: coin.symbol,
          price24: coin.price_change_percentage_24h,
          current_price: coin.current_price,
          market_cap: coin.market_cap
        };
      }) //{ image: "test", price24: "test", Price: "test", Marketcap: "test" },
      ,
      title: "Demo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2V0dG9rZW4udHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImRhdGEiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZm9ybWF0UGVyY2VudCIsIm51bWJlciIsIk51bWJlciIsInRvRml4ZWQiLCJmb3JtYXREb2xsYXIiLCJtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1hcCIsImNvaW4iLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJzeW1ib2wiLCJ0b1VwcGVyQ2FzZSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCIsImN1cnJlbnRfcHJpY2UiLCJtYXJrZXRfY2FwIiwiaWQiLCJ0aXRsZSIsImZpZWxkIiwibmFtZSIsInByaWNlMjQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBOztBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLE1BQzFCQyxJQUQwQixHQUNqQkQsS0FBSyxDQUFDRSxNQURXLENBQzFCRCxJQUQwQjtBQUVsQ0UsU0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NILElBQXBDOztBQUNBLE1BQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsTUFBTTtBQUFBLHFCQUN2QixJQUFJQyxNQUFKLENBQVdELE1BQVgsRUFBbUJFLE9BQW5CLENBQTJCLENBQTNCLENBRHVCO0FBQUEsR0FBNUI7O0FBR0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0gsTUFBRCxFQUFTSSx3QkFBVDtBQUFBLFdBQ25CLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUNFLE9BREYsRUFFRTtBQUNFQyxXQUFLLEVBQUUsVUFEVDtBQUVFQyxjQUFRLEVB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QUFDQyxLQURIO0FBRVAsaUJBQUssRUFBRTtBQUFFQyxtQkFBSyxFQUFFLEVBQVQ7QUFBYUMsb0JBQU0sRUFBRSxFQUFyQjtBQUF5QkMseUJBQVcsRUFBRTtBQUF0QztBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFA7QUFLQVMsY0FBSSxFQUFDYixJQUFJLENBQUNLLE1BTFY7QUFNQVMsaUJBQU8sRUFBQ2QsSUFBSSxDQUFDTywyQkFOYjtBQU9BQyx1QkFBYSxFQUFDUixJQUFJLENBQUNRLGFBUG5CO0FBUUFDLG9CQUFVLEVBQUNULElBQUksQ0FBQ1M7QUFSaEIsU0FETztBQUFBLE9BQVQsQ0FUSixDQXNCRztBQXRCSDtBQXVCRSxXQUFLLEVBQUM7QUF2QlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVFRDtLQXZGdUI3QixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldHRva2VuLmU0OTQ3N2U5ZmJlN2I3Nzc5OTA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IENvaW5HZWNrbyBmcm9tICdjb2luZ2Vja28tYXBpJztcclxuY29uc3QgY29pbkdlY2tvQ2xpZW50ID0gbmV3IENvaW5HZWNrbygpO1xyXG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzLnJlc3VsdDtcclxuICBjb25zb2xlLmxvZyhcIlNob3ctLS0tPmdldEFQSS0tLS0+XCIsIGRhdGEpXHJcbiAgY29uc3QgZm9ybWF0UGVyY2VudCA9IG51bWJlciA9PlxyXG4gICAgYCR7bmV3IE51bWJlcihudW1iZXIpLnRvRml4ZWQoMil9JWBcclxuXHJcbiAgY29uc3QgZm9ybWF0RG9sbGFyID0gKG51bWJlciwgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzKSA9PlxyXG4gICAgbmV3IEludGwuTnVtYmVyRm9ybWF0KFxyXG4gICAgICAnZW4tVVMnLFxyXG4gICAgICB7XHJcbiAgICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxyXG4gICAgICAgIG1heGltdW1TaWduaWZpY2FudERpZ2l0c1xyXG4gICAgICB9KVxyXG4gICAgICAuZm9ybWF0KG51bWJlcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Db2lubWFya2V0Y2FwIGNsb25lPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgxPkNvaW5tYXJrZXRjYXAgY2xvbmU8L2gxPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5TeW1ib2w8L3RoPlxyXG4gICAgICAgICAgICA8dGg+MjRIIENoYW5nZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5NYXJrZXQgY2FwPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoY29pbiA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2NvaW4uaWR9PlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtjb2luLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjUsIGhlaWdodDogMjUsIG1hcmdpblJpZ2h0OiAxMCB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtjb2luLnN5bWJvbC50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb2luLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgKSA6ICd0ZXh0LWRhbmdlcid9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtmb3JtYXRQZXJjZW50KGNvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57Zm9ybWF0RG9sbGFyKGNvaW4uY3VycmVudF9wcmljZSwgMjApfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntmb3JtYXREb2xsYXIoY29pbi5tYXJrZXRfY2FwLCAxMil9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAge3RpdGxlOiBcIlN5bWJvbFwiLCBmaWVsZDogJ2ltYWdlJyB9LFxyXG4gICAgICAgICAge3RpdGxlOiBcIk5hbWVcIiwgZmllbGQ6ICduYW1lJyB9LFxyXG4gICAgICAgICAge3RpdGxlOiBcIjI0SCBDaGFuZ2VcIiwgZmllbGQ6ICdwcmljZTI0JyB9LFxyXG4gICAgICAgICAge3RpdGxlOiBcIlByaWNlXCIsIGZpZWxkOiAnY3VycmVudF9wcmljZScgfSxcclxuICAgICAgICAgIHt0aXRsZTogXCJNYXJrZXQgY2FwXCIsIGZpZWxkOiAnbWFya2V0X2NhcCcgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAgIGRhdGE9e1xyXG4gICAgICAgICAgZGF0YS5tYXAoKGNvaW4pPT4gKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17Y29pbi5pbWFnZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI1LCBoZWlnaHQ6IDI1LCBtYXJnaW5SaWdodDogMTAgfX1cclxuICAgICAgICAgIC8+LFxyXG4gICAgICAgICAgICBuYW1lOmNvaW4uc3ltYm9sLFxyXG4gICAgICAgICAgICBwcmljZTI0OmNvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoLFxyXG4gICAgICAgICAgICBjdXJyZW50X3ByaWNlOmNvaW4uY3VycmVudF9wcmljZSxcclxuICAgICAgICAgICAgbWFya2V0X2NhcDpjb2luLm1hcmtldF9jYXAsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgLy97IGltYWdlOiBcInRlc3RcIiwgcHJpY2UyNDogXCJ0ZXN0XCIsIFByaWNlOiBcInRlc3RcIiwgTWFya2V0Y2FwOiBcInRlc3RcIiB9LFxyXG4gICAgICAgIHRpdGxlPVwiRGVtb1wiIC8+XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgIG9yZGVyOiBDb2luR2Vja28uT1JERVIuTUFSS0VUX0NBUF9ERVNDXHJcbiAgfTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb2luR2Vja29DbGllbnQuY29pbnMubWFya2V0cyh7IHBhcmFtcyB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcmVzdWx0XHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==