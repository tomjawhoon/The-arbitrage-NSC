webpackHotUpdate_N_E("pages/totalgetcoin",{

/***/ "./pages/totalgetcoin.tsx":
/*!********************************!*\
  !*** ./pages/totalgetcoin.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Totalgetcoin; });
/* harmony import */ var C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "C:\\Users\\AToMixz\\Desktop\\NSC\\The-arbitrage-NSC\\pages\\totalgetcoin.tsx",
    _s = $RefreshSig$();





function Totalgetcoin(props, initialId) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialId),
      newId = _useState[0],
      setNewId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      Price = _useState2[0],
      setPrice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      Price1 = _useState3[0],
      setPrice1 = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      Price2 = _useState4[0],
      setPrice2 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      sum = _useState5[0],
      setSum = _useState5[1];

  var WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  var DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  var OMG = "0xd26114cd6ee289accf82350c8d8487fedb8a0c07";
  var MKR = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
  var USDT = "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e";
  console.log("Price", Price);

  var onSave = /*#__PURE__*/function () {
    var _ref = Object(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(valueinput) {
      var response, response2, response3;
      return C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('http://localhost:5001/totalcoin', {
                //ETH
                valueinput: valueinput,
                //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ
                fromtoken: WETH,
                //WETH -MKR
                totoken: MKR
              });

            case 2:
              response = _context.sent;
              //setPrice(response.data) //10
              console.log("FROM NODE = MKR = ", response.data); // console.log("from node ", response.data)

              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('http://localhost:5001/totalcoin', {
                // valueinput: valueinput,
                valueinput: response.data.toString(),
                fromtoken: MKR,
                //WETH -MKR
                totoken: DAI
              });

            case 6:
              response2 = _context.sent;
              // setPrice1(response2.data)
              console.log("FROM NODE = DAI = ", response2.data);
              _context.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('http://localhost:5001/totalcoin', {
                // valueinput: valueinput,
                valueinput: response2.data.toString(),
                fromtoken: DAI,
                //WETH -MKR
                totoken: WETH
              });

            case 10:
              response3 = _context.sent;
              // setPrice2(response3.data)
              console.log("FROM NODE = WETH = ", response3.data);
              console.log("sum ====>", sum);
              setSum([].concat(Object(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(sum), [{
                Price1: response.data,
                Price2: response2.data,
                Price3: response3.data
              }]));
              console.log("sum ball za eiei ====>", [].concat(Object(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(sum), [{
                Price1: response.data,
                Price2: response2.data,
                Price3: response3.data
              }]));
              onSave(valueinput);
              /* for (; ;) {
                   {
                       console.log("valueinput", valueinput);
                       const response = await axios.post('http://localhost:5001/totalcoin', { //ETH
                           valueinput, //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ
                           fromtoken: WETH, //WETH -MKR
                           totoken: MKR,
                       })
                       setPrice(response.data)
                       console.log("FROM NODE = MKR = ", response.data);
                       // console.log("from node ", response.data)
                       const response2 = await axios.post('http://localhost:5001/totalcoin', {
                           // valueinput: valueinput,
                           valueinput: response.data.toString(),
                           fromtoken: MKR, //WETH -MKR
                           totoken: DAI,
                       })
                       setPrice1(response2.data)
                       console.log("FROM NODE = DAI = ", response2.data);
                       const response3 = await axios.post('http://localhost:5001/totalcoin', {
                           // valueinput: valueinput,
                           valueinput: response2.data.toString(),
                           fromtoken: DAI, //WETH -MKR
                           totoken: WETH,
                       })
                       setPrice2(response3.data)
                       console.log("FROM NODE = WETH = ", response3.data);
                   }
               }*/
              //     const response4 = await axios.post('http://localhost:5001/totalcoin', {
              //         // valueinput: valueinput,
              //         valueinput: response3.data,
              //         //response4 = eth
              //     })

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSave(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["ETH:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          onChange: function onChange(e) {
            return setNewId(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["MKR:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          value: Price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["DAI:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["ETH:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick() {
        return onSave(newId);
      },
      children: " Exchang Token"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(material_table__WEBPACK_IMPORTED_MODULE_5___default.a, {
      columns: [//{ title: "ETH", field: "START" },
      {
        title: "MKR",
        field: 'Price'
      }, {
        title: "DAI",
        field: 'Price1'
      }, {
        title: "ETH",
        field: 'Price2'
      }],
      data: sum.map(function (Show) {
        return {
          Price: Show.Price1,
          Price1: Show.Price2,
          Price2: Show.Price3
        };
      }),
      title: "Demo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Totalgetcoin, "2YnVIFl+WgxRFJU7pZ41oGaxqO0=");

_c = Totalgetcoin;

var _c;

$RefreshReg$(_c, "Totalgetcoin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG90YWxnZXRjb2luLnRzeCJdLCJuYW1lcyI6WyJUb3RhbGdldGNvaW4iLCJwcm9wcyIsImluaXRpYWxJZCIsInVzZVN0YXRlIiwibmV3SWQiLCJzZXROZXdJZCIsIlByaWNlIiwic2V0UHJpY2UiLCJQcmljZTEiLCJzZXRQcmljZTEiLCJQcmljZTIiLCJzZXRQcmljZTIiLCJzdW0iLCJzZXRTdW0iLCJXRVRIIiwiREFJIiwiT01HIiwiTUtSIiwiVVNEVCIsImNvbnNvbGUiLCJsb2ciLCJvblNhdmUiLCJ2YWx1ZWlucHV0IiwiYXhpb3MiLCJwb3N0IiwiZnJvbXRva2VuIiwidG90b2tlbiIsInJlc3BvbnNlIiwiZGF0YSIsInRvU3RyaW5nIiwicmVzcG9uc2UyIiwicmVzcG9uc2UzIiwiUHJpY2UzIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGl0bGUiLCJmaWVsZCIsIm1hcCIsIlNob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVFlLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxTQUE3QixFQUE2RDtBQUFBOztBQUFBLGtCQUM5Q0Msc0RBQVEsQ0FBQ0QsU0FBRCxDQURzQztBQUFBLE1BQ2pFRSxLQURpRTtBQUFBLE1BQzFEQyxRQUQwRDs7QUFBQSxtQkFFOUNGLHNEQUFRLENBQUMsQ0FBRCxDQUZzQztBQUFBLE1BRWpFRyxLQUZpRTtBQUFBLE1BRTFEQyxRQUYwRDs7QUFBQSxtQkFHNUNKLHNEQUFRLENBQUMsQ0FBRCxDQUhvQztBQUFBLE1BR2pFSyxNQUhpRTtBQUFBLE1BR3pEQyxTQUh5RDs7QUFBQSxtQkFJNUNOLHNEQUFRLENBQUMsQ0FBRCxDQUpvQztBQUFBLE1BSWpFTyxNQUppRTtBQUFBLE1BSXpEQyxTQUp5RDs7QUFBQSxtQkFLbERSLHNEQUFRLENBQUMsRUFBRCxDQUwwQztBQUFBLE1BS2pFUyxHQUxpRTtB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QyxhQUFLLEVBQUU7QUFBdkIsT0FISyxFQUlMO0FBQUVELGFBQUssRUFBRSxLQUFUO0FBQWdCQyxhQUFLLEVBQUU7QUFBdkIsT0FKSyxDQURiO0FBT0ksVUFBSSxFQUFFekIsR0FBRyxDQUFDMEIsR0FBSixDQUFRLFVBQUNDLElBQUQ7QUFBQSxlQUNUO0FBQUVqQyxlQUFLLEVBQUVpQyxJQUFJLENBQUMvQixNQUFkO0FBQXNCQSxnQkFBTSxFQUFFK0IsSUFBSSxDQUFDN0IsTUFBbkM7QUFBMkNBLGdCQUFNLEVBQUU2QixJQUFJLENBQUNQO0FBQXhELFNBRFM7QUFBQSxPQUFSLENBUFY7QUFXSSxXQUFLLEVBQUM7QUFYVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJKO0FBQUEsa0JBREo7QUFxQ0g7O0dBcEl1QmhDLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG90YWxnZXRjb2luLmVmNzVlZTQ5NmExMjZkMjkyNDAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHJlc3VsdDogeyBkYXRhOiBhbnk7IH07XHJcbiAgICBpbml0aWFsSWQ6IGFueSxcclxuICAgIHZhbHVlaW5wdXQ6IGFueSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG90YWxnZXRjb2luKHByb3BzLCBpbml0aWFsSWQ6IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoaW5pdGlhbElkKVxyXG4gICAgY29uc3QgW1ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW1ByaWNlMSwgc2V0UHJpY2UxXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbUHJpY2UyLCBzZXRQcmljZTJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtzdW0sIHNldFN1bV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFdFVEggPSBcIjB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMlwiO1xyXG4gICAgY29uc3QgREFJID0gXCIweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEZcIjtcclxuICAgIGNvbnN0IE9NRyA9IFwiMHhkMjYxMTRjZDZlZTI4OWFjY2Y4MjM1MGM4ZDg0ODdmZWRiOGEwYzA3XCI7XHJcbiAgICBjb25zdCBNS1IgPSBcIjB4OWY4RjcyYUE5MzA0YzhCNTkzZDU1NUYxMmVGNjU4OWNDM0E1NzlBMlwiO1xyXG4gICAgY29uc3QgVVNEVCA9IFwiMHg4ZGQ1ZmJjZTJmNmE5NTZjMzAyMmJhMzY2Mzc1OTAxMWRkNTFlNzNlXCI7XHJcbiAgICBjb25zb2xlLmxvZyhcIlByaWNlXCIsIFByaWNlKVxyXG4gICAgY29uc3Qgb25TYXZlID0gYXN5bmMgKHZhbHVlaW5wdXQ6IGFueSkgPT57XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywgeyAvL0VUSFxyXG4gICAgICAgICAgICB2YWx1ZWlucHV0LCAvLzAuMDA1IOC4hOC5iOC4suC4l+C4teC5iOC4geC4o+C4reC4geC5g+C4meC4iuC5iOC4reC4h+C4reC5iOC4suC4meC4seC5ieC4meC5geC4q+C4peC4sFxyXG4gICAgICAgICAgICBmcm9tdG9rZW46IFdFVEgsIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgIHRvdG9rZW46IE1LUixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vc2V0UHJpY2UocmVzcG9uc2UuZGF0YSkgLy8xMFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRlJPTSBOT0RFID0gTUtSID0gXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBub2RlIFwiLCByZXNwb25zZS5kYXRhKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7XHJcbiAgICAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXHJcbiAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlLmRhdGEudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgZnJvbXRva2VuOiBNS1IsIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgIHRvdG9rZW46IERBSSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHNldFByaWNlMShyZXNwb25zZTIuZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZST00gTk9ERSA9IERBSSA9IFwiLCByZXNwb25zZTIuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAgICAgLy8gdmFsdWVpbnB1dDogdmFsdWVpbnB1dCxcclxuICAgICAgICAgICAgdmFsdWVpbnB1dDogcmVzcG9uc2UyLmRhdGEudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgZnJvbXRva2VuOiBEQUksIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgIHRvdG9rZW46IFdFVEgsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBzZXRQcmljZTIocmVzcG9uc2UzLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGUk9NIE5PREUgPSBXRVRIID0gXCIsIHJlc3BvbnNlMy5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN1bSA9PT09PlwiLCBzdW0pXHJcbiAgICAgICAgc2V0U3VtKFsuLi5zdW0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQcmljZTE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgIFByaWNlMjogcmVzcG9uc2UyLmRhdGEsXHJcbiAgICAgICAgICAgIFByaWNlMzogcmVzcG9uc2UzLmRhdGEsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3VtIGJhbGwgemEgZWllaSA9PT09PlwiLCBbLi4uc3VtLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUHJpY2UxOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICBQcmljZTI6IHJlc3BvbnNlMi5kYXRhLFxyXG4gICAgICAgICAgICBQcmljZTM6IHJlc3BvbnNlMy5kYXRhLFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXSlcclxuXHJcbiAgICAgICAgb25TYXZlKHZhbHVlaW5wdXQpXHJcblxyXG5cclxuICAgICAgICAvKiBmb3IgKDsgOykge1xyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVpbnB1dFwiLCB2YWx1ZWlucHV0KTtcclxuICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7IC8vRVRIXHJcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlaW5wdXQsIC8vMC4wMDUg4LiE4LmI4Liy4LiX4Li14LmI4LiB4Lij4Lit4LiB4LmD4LiZ4LiK4LmI4Lit4LiH4Lit4LmI4Liy4LiZ4Lix4LmJ4LiZ4LmB4Lir4Lil4LiwXHJcbiAgICAgICAgICAgICAgICAgICAgIGZyb210b2tlbjogV0VUSCwgLy9XRVRIIC1NS1JcclxuICAgICAgICAgICAgICAgICAgICAgdG90b2tlbjogTUtSLFxyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgc2V0UHJpY2UocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZST00gTk9ERSA9IE1LUiA9IFwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gbm9kZSBcIiwgcmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZWlucHV0OiB2YWx1ZWlucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZWlucHV0OiByZXNwb25zZS5kYXRhLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgIGZyb210b2tlbjogTUtSLCAvL1dFVEggLU1LUlxyXG4gICAgICAgICAgICAgICAgICAgICB0b3Rva2VuOiBEQUksXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICBzZXRQcmljZTEocmVzcG9uc2UyLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGUk9NIE5PREUgPSBEQUkgPSBcIiwgcmVzcG9uc2UyLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlMyA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlMi5kYXRhLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgIGZyb210b2tlbjogREFJLCAvL1dFVEggLU1LUlxyXG4gICAgICAgICAgICAgICAgICAgICB0b3Rva2VuOiBXRVRILFxyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgc2V0UHJpY2UyKHJlc3BvbnNlMy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRlJPTSBOT0RFID0gV0VUSCA9IFwiLCByZXNwb25zZTMuZGF0YSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH0qL1xyXG5cclxuXHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHJlc3BvbnNlNCA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB2YWx1ZWlucHV0OiB2YWx1ZWlucHV0LFxyXG4gICAgICAgIC8vICAgICAgICAgdmFsdWVpbnB1dDogcmVzcG9uc2UzLmRhdGEsXHJcbiAgICAgICAgLy8gICAgICAgICAvL3Jlc3BvbnNlNCA9IGV0aFxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBFVEg6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgTUtSOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjb2luXCIgdmFsdWU9e1ByaWNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBEQUk6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17UHJpY2UxfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBFVEg6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17UHJpY2UyfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TYXZlKG5ld0lkKX1cclxuICAgICAgICAgICAgPiBFeGNoYW5nIFRva2VuXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8TWF0ZXJpYWxUYWJsZVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIC8veyB0aXRsZTogXCJFVEhcIiwgZmllbGQ6IFwiU1RBUlRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiTUtSXCIsIGZpZWxkOiAnUHJpY2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJEQUlcIiwgZmllbGQ6ICdQcmljZTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJFVEhcIiwgZmllbGQ6ICdQcmljZTInIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17c3VtLm1hcCgoU2hvdykgPT5cclxuICAgICAgICAgICAgICAgICAgICAoeyBQcmljZTogU2hvdy5QcmljZTEsIFByaWNlMTogU2hvdy5QcmljZTIsIFByaWNlMjogU2hvdy5QcmljZTMgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVtb1wiIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=