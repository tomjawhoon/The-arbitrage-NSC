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

  function onSave(_x) {
    return _onSave.apply(this, arguments);
  }

  function _onSave() {
    _onSave = Object(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(valueinput) {
      var ballza;
      return C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ballza = /*#__PURE__*/function () {
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

                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function ballza(_x2) {
                  return _ref.apply(this, arguments);
                };
              }();

              ballza();
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

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _onSave.apply(this, arguments);
  }

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
          lineNumber: 112,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["MKR:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          value: Price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["DAI:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["ETH:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 125,
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
      lineNumber: 131,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG90YWxnZXRjb2luLnRzeCJdLCJuYW1lcyI6WyJUb3RhbGdldGNvaW4iLCJwcm9wcyIsImluaXRpYWxJZCIsInVzZVN0YXRlIiwibmV3SWQiLCJzZXROZXdJZCIsIlByaWNlIiwic2V0UHJpY2UiLCJQcmljZTEiLCJzZXRQcmljZTEiLCJQcmljZTIiLCJzZXRQcmljZTIiLCJzdW0iLCJzZXRTdW0iLCJXRVRIIiwiREFJIiwiT01HIiwiTUtSIiwiVVNEVCIsImNvbnNvbGUiLCJsb2ciLCJvblNhdmUiLCJ2YWx1ZWlucHV0IiwiYmFsbHphIiwiYXhpb3MiLCJwb3N0IiwiZnJvbXRva2VuIiwidG90b2tlbiIsInJlc3BvbnNlIiwiZGF0YSIsInRvU3RyaW5nIiwicmVzcG9uc2UyIiwicmVzcG9uc2UzIiwiUHJpY2UzIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGl0bGUiLCJmaWVsZCIsIm1hcCIsIlNob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVFlLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxTQUE3QixFQUE2RDtBQUFBOztBQUFBLGtCQUM5Q0Msc0RBQVEsQ0FBQ0QsU0FBRCxDQURzQztBQUFBLE1BQ2pFRSxLQURpRTtBQUFBLE1BQzFEQyxRQUQwRDs7QUFBQSxtQkFFOUNGLHNEQUFRLENBQUMsQ0FBRCxDQUZzQztBQUFBLE1BRWpFRyxLQUZpRTtBQUFBLE1BRTFEQyxRQUYwRDs7QUFBQSxtQkFHNUNKLHNEQUFRLENBQUMsQ0FBRCxDQUhvQztBQUFBLE1BR2pFSyxNQUhpRTtBQUFBLE1BR3pEQyxTQUh5RDs7QUFBQSxtQkFJNUNOLHNEQUFRLENBQUMsQ0FBRCxDQUpvQztBQUFBLE1BSWpFTyxNQUppRTtBQUFBLE1BSXpEQyxTQUp5RDs7QUFBQSxtQkFLbERSLHNEQUFRLENBQUMsRUFBRCxDQUwwQztBQUFBLE1BS2pF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O0FBQUE7QUFBQSxZQWhCSixlQXNCSSxxRUFBQyxxREFBRDtBQUNJLGFBQU8sRUFBRSxDQUNMO0FBQ0E7QUFBRWlDLGFBQUssRUFBRSxLQUFUO0FBQWdCQyxhQUFLLEVBQUU7QUFBdkIsT0FGSyxFQUdMO0FBQUVELGFBQUssRUFBRSxLQUFUO0FBQWdCQyxhQUFLLEVBQUU7QUFBdkIsT0FISyxFQUlMO0FBQUVELGFBQUssRUFBRSxLQUFUO0FBQWdCQyxhQUFLLEVBQUU7QUFBdkIsT0FKSyxDQURiO0FBT0ksVUFBSSxFQUFFMUIsR0FBRyxDQUFDMkIsR0FBSixDQUFRLFVBQUNDLElBQUQ7QUFBQSxlQUNUO0FBQUVsQyxlQUFLLEVBQUVrQyxJQUFJLENBQUNoQyxNQUFkO0FBQXNCQSxnQkFBTSxFQUFFZ0MsSUFBSSxDQUFDOUIsTUFBbkM7QUFBMkNBLGdCQUFNLEVBQUU4QixJQUFJLENBQUNQO0FBQXhELFNBRFM7QUFBQSxPQUFSLENBUFY7QUFXSSxXQUFLLEVBQUM7QUFYVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJKO0FBQUEsa0JBREo7QUFxQ0g7O0dBbkl1QmpDLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG90YWxnZXRjb2luLmI5OGNjYWVjNWE5YTlhNzczMWRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHJlc3VsdDogeyBkYXRhOiBhbnk7IH07XHJcbiAgICBpbml0aWFsSWQ6IGFueSxcclxuICAgIHZhbHVlaW5wdXQ6IGFueSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG90YWxnZXRjb2luKHByb3BzLCBpbml0aWFsSWQ6IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoaW5pdGlhbElkKVxyXG4gICAgY29uc3QgW1ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW1ByaWNlMSwgc2V0UHJpY2UxXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbUHJpY2UyLCBzZXRQcmljZTJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtzdW0sIHNldFN1bV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFdFVEggPSBcIjB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMlwiO1xyXG4gICAgY29uc3QgREFJID0gXCIweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEZcIjtcclxuICAgIGNvbnN0IE9NRyA9IFwiMHhkMjYxMTRjZDZlZTI4OWFjY2Y4MjM1MGM4ZDg0ODdmZWRiOGEwYzA3XCI7XHJcbiAgICBjb25zdCBNS1IgPSBcIjB4OWY4RjcyYUE5MzA0YzhCNTkzZDU1NUYxMmVGNjU4OWNDM0E1NzlBMlwiO1xyXG4gICAgY29uc3QgVVNEVCA9IFwiMHg4ZGQ1ZmJjZTJmNmE5NTZjMzAyMmJhMzY2Mzc1OTAxMWRkNTFlNzNlXCI7XHJcbiAgICBjb25zb2xlLmxvZyhcIlByaWNlXCIsIFByaWNlKVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25TYXZlKHZhbHVlaW5wdXQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGJhbGx6YSA9IGFzeW5jICh2YWx1ZWlucHV0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHsgLy9FVEhcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZWlucHV0LCAvLzAuMDA1IOC4hOC5iOC4suC4l+C4teC5iOC4geC4o+C4reC4geC5g+C4meC4iuC5iOC4reC4h+C4reC5iOC4suC4meC4seC5ieC4meC5geC4q+C4peC4sFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb210b2tlbjogV0VUSCwgLy9XRVRIIC1NS1JcclxuICAgICAgICAgICAgICAgICAgICB0b3Rva2VuOiBNS1IsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy9zZXRQcmljZShyZXNwb25zZS5kYXRhKSAvLzEwXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZST00gTk9ERSA9IE1LUiA9IFwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBub2RlIFwiLCByZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZWlucHV0OiB2YWx1ZWlucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlLmRhdGEudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tdG9rZW46IE1LUiwgLy9XRVRIIC1NS1JcclxuICAgICAgICAgICAgICAgICAgICB0b3Rva2VuOiBEQUksXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gc2V0UHJpY2UxKHJlc3BvbnNlMi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGUk9NIE5PREUgPSBEQUkgPSBcIiwgcmVzcG9uc2UyLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZWlucHV0OiB2YWx1ZWlucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlMi5kYXRhLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbXRva2VuOiBEQUksIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgICAgICAgICAgdG90b2tlbjogV0VUSCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyBzZXRQcmljZTIocmVzcG9uc2UzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZST00gTk9ERSA9IFdFVEggPSBcIiwgcmVzcG9uc2UzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdW0gPT09PT5cIiwgc3VtKVxyXG4gICAgICAgICAgICAgICAgc2V0U3VtKFsuLi5zdW0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgUHJpY2UxOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIFByaWNlMjogcmVzcG9uc2UyLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJpY2UzOiByZXNwb25zZTMuZGF0YSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0pXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdW0gYmFsbCB6YSBlaWVpID09PT0+XCIsIFsuLi5zdW0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgUHJpY2UxOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIFByaWNlMjogcmVzcG9uc2UyLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJpY2UzOiByZXNwb25zZTMuZGF0YSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiYWxsemEoKVxyXG4gICAgICAgIC8qIGZvciAoOyA7KSB7XHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZWlucHV0XCIsIHZhbHVlaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHsgLy9FVEhcclxuICAgICAgICAgICAgICAgICAgICAgdmFsdWVpbnB1dCwgLy8wLjAwNSDguITguYjguLLguJfguLXguYjguIHguKPguK3guIHguYPguJnguIrguYjguK3guIfguK3guYjguLLguJnguLHguYnguJnguYHguKvguKXguLBcclxuICAgICAgICAgICAgICAgICAgICAgZnJvbXRva2VuOiBXRVRILCAvL1dFVEggLU1LUlxyXG4gICAgICAgICAgICAgICAgICAgICB0b3Rva2VuOiBNS1IsXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICBzZXRQcmljZShyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRlJPTSBOT0RFID0gTUtSID0gXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBub2RlIFwiLCByZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlLmRhdGEudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAgZnJvbXRva2VuOiBNS1IsIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgICAgICAgICAgIHRvdG9rZW46IERBSSxcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIHNldFByaWNlMShyZXNwb25zZTIuZGF0YSlcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZST00gTk9ERSA9IERBSSA9IFwiLCByZXNwb25zZTIuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWVpbnB1dDogdmFsdWVpbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICAgdmFsdWVpbnB1dDogcmVzcG9uc2UyLmRhdGEudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAgZnJvbXRva2VuOiBEQUksIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgICAgICAgICAgIHRvdG9rZW46IFdFVEgsXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICBzZXRQcmljZTIocmVzcG9uc2UzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGUk9NIE5PREUgPSBXRVRIID0gXCIsIHJlc3BvbnNlMy5kYXRhKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfSovXHJcblxyXG5cclxuICAgICAgICAvLyAgICAgY29uc3QgcmVzcG9uc2U0ID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXHJcbiAgICAgICAgLy8gICAgICAgICB2YWx1ZWlucHV0OiByZXNwb25zZTMuZGF0YSxcclxuICAgICAgICAvLyAgICAgICAgIC8vcmVzcG9uc2U0ID0gZXRoXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEVUSDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBNS1I6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiB2YWx1ZT17UHJpY2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIERBSTo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtQcmljZTF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEVUSDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtQcmljZTJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNhdmUobmV3SWQpfVxyXG4gICAgICAgICAgICA+IEV4Y2hhbmcgVG9rZW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgLy97IHRpdGxlOiBcIkVUSFwiLCBmaWVsZDogXCJTVEFSVFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJNS1JcIiwgZmllbGQ6ICdQcmljZScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkRBSVwiLCBmaWVsZDogJ1ByaWNlMScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkVUSFwiLCBmaWVsZDogJ1ByaWNlMicgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtzdW0ubWFwKChTaG93KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICh7IFByaWNlOiBTaG93LlByaWNlMSwgUHJpY2UxOiBTaG93LlByaWNlMiwgUHJpY2UyOiBTaG93LlByaWNlMyB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJEZW1vXCIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==