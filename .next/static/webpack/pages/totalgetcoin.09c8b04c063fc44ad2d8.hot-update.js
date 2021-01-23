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
/* harmony import */ var C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      total = _useState6[0],
      setTotal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      time = _useState7[0],
      setTime = _useState7[1];

  var WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  var DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  var OMG = "0xd26114cd6ee289accf82350c8d8487fedb8a0c07";
  var MKR = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
  var USDT = "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e";
  console.log("Price", Price);

  var onSave = /*#__PURE__*/function () {
    var _ref = Object(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(valueinput) {
      var response, response2, response3, timestart;
      return C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
              setTotal({
                Price1: response.data,
                Price2: response2.data,
                Price3: response3.data
              });
              timestart = setTimeout(function () {
                onSave(valueinput);
              }, 1);
              setTime("&{timestart}");

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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (total) {
      setSum([].concat(Object(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(sum), [total]));
    }
  }, [total]);
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
          lineNumber: 75,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["MKR:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          value: Price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["DAI:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["ETH:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 88,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(material_table__WEBPACK_IMPORTED_MODULE_5___default.a, {
      columns: [{
        title: "ETH",
        field: "START"
      }, {
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
      lineNumber: 94,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Totalgetcoin, "ooDdm0ggcsXEB5dQ/mQC6Dt95tw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG90YWxnZXRjb2luLnRzeCJdLCJuYW1lcyI6WyJUb3RhbGdldGNvaW4iLCJwcm9wcyIsImluaXRpYWxJZCIsInVzZVN0YXRlIiwibmV3SWQiLCJzZXROZXdJZCIsIlByaWNlIiwic2V0UHJpY2UiLCJQcmljZTEiLCJzZXRQcmljZTEiLCJQcmljZTIiLCJzZXRQcmljZTIiLCJzdW0iLCJzZXRTdW0iLCJ0b3RhbCIsInNldFRvdGFsIiwidGltZSIsInNldFRpbWUiLCJXRVRIIiwiREFJIiwiT01HIiwiTUtSIiwiVVNEVCIsImNvbnNvbGUiLCJsb2ciLCJvblNhdmUiLCJ2YWx1ZWlucHV0IiwiYXhpb3MiLCJwb3N0IiwiZnJvbXRva2VuIiwidG90b2tlbiIsInJlc3BvbnNlIiwiZGF0YSIsInRvU3RyaW5nIiwicmVzcG9uc2UyIiwicmVzcG9uc2UzIiwiUHJpY2UzIiwidGltZXN0YXJ0Iiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpdGxlIiwiZmllbGQiLCJtYXAiLCJTaG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFRZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QkMsU0FBN0IsRUFBNkQ7QUFBQTs7QUFBQSxrQkFDOUNDLHNEQUFRLENBQUNELFNBQUQsQ0FEc0M7QUFBQSxNQUNqRUUsS0FEaUU7QUFBQSxNQUMxREMsUUFEMEQ7O0FBQUEsbUJBRTlDRixzREFBUSxDQUFDLENBQUQsQ0FGc0M7QUFBQSxNQUVqRUcsS0FGaUU7QUFBQSxNQUUxREMsUUFGMEQ7O0FBQUEsbUJBRzVDSixzREFBUSxDQUFDLENBQUQsQ0FIb0M7QUFBQSxNQUdqRUssTUFIaUU7QUFBQSxNQUd6REMsU0FIeUQ7O0FBQUEsbUJBSTVDTixzREFBUSxDQUFDLENBQUQsQ0FKb0M7QUFBQSxNQUlqRU8sTUFKaUU7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QUFLLEVBQUUsS0FBVDtBQUFnQkMsYUFBSyxFQUFFO0FBQXZCLE9BREssRUFFTDtBQUFFRCxhQUFLLEVBQUUsS0FBVDtBQUFnQkMsYUFBSyxFQUFFO0FBQXZCLE9BRkssRUFHTDtBQUFFRCxhQUFLLEVBQUUsS0FBVDtBQUFnQkMsYUFBSyxFQUFFO0FBQXZCLE9BSEssRUFJTDtBQUFFRCxhQUFLLEVBQUUsS0FBVDtBQUFnQkMsYUFBSyxFQUFFO0FBQXZCLE9BSkssQ0FEYjtBQU9JLFVBQUksRUFBRWhDLEdBQUcsQ0FBQ2lDLEdBQUosQ0FBUSxVQUFDQyxJQUFEO0FBQUEsZUFDVDtBQUFFeEMsZUFBSyxFQUFFd0MsSUFBSSxDQUFDdEMsTUFBZDtBQUFzQkEsZ0JBQU0sRUFBRXNDLElBQUksQ0FBQ3BDLE1BQW5DO0FBQTJDQSxnQkFBTSxFQUFFb0MsSUFBSSxDQUFDVjtBQUF4RCxTQURTO0FBQUEsT0FBUixDQVBWO0FBV0ksV0FBSyxFQUFDO0FBWFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCSjtBQUFBLGtCQURKO0FBcUNIOztHQTlGdUJwQyxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RvdGFsZ2V0Y29pbi4wOWM4YjA0YzA2M2ZjNDRhZDJkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHJlc3VsdDogeyBkYXRhOiBhbnk7IH07XHJcbiAgICBpbml0aWFsSWQ6IGFueSxcclxuICAgIHZhbHVlaW5wdXQ6IGFueSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG90YWxnZXRjb2luKHByb3BzLCBpbml0aWFsSWQ6IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoaW5pdGlhbElkKVxyXG4gICAgY29uc3QgW1ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW1ByaWNlMSwgc2V0UHJpY2UxXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbUHJpY2UyLCBzZXRQcmljZTJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtzdW0sIHNldFN1bV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFdFVEggPSBcIjB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMlwiO1xyXG4gICAgY29uc3QgREFJID0gXCIweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEZcIjtcclxuICAgIGNvbnN0IE9NRyA9IFwiMHhkMjYxMTRjZDZlZTI4OWFjY2Y4MjM1MGM4ZDg0ODdmZWRiOGEwYzA3XCI7XHJcbiAgICBjb25zdCBNS1IgPSBcIjB4OWY4RjcyYUE5MzA0YzhCNTkzZDU1NUYxMmVGNjU4OWNDM0E1NzlBMlwiO1xyXG4gICAgY29uc3QgVVNEVCA9IFwiMHg4ZGQ1ZmJjZTJmNmE5NTZjMzAyMmJhMzY2Mzc1OTAxMWRkNTFlNzNlXCI7XHJcbiAgICBjb25zb2xlLmxvZyhcIlByaWNlXCIsIFByaWNlKVxyXG5cclxuICAgIGNvbnN0IG9uU2F2ZSA9IGFzeW5jICh2YWx1ZWlucHV0OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7IC8vRVRIXHJcbiAgICAgICAgICAgIHZhbHVlaW5wdXQsIC8vMC4wMDUg4LiE4LmI4Liy4LiX4Li14LmI4LiB4Lij4Lit4LiB4LmD4LiZ4LiK4LmI4Lit4LiH4Lit4LmI4Liy4LiZ4Lix4LmJ4LiZ4LmB4Lir4Lil4LiwXHJcbiAgICAgICAgICAgIGZyb210b2tlbjogV0VUSCwgLy9XRVRIIC1NS1JcclxuICAgICAgICAgICAgdG90b2tlbjogTUtSLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9zZXRQcmljZShyZXNwb25zZS5kYXRhKSAvLzEwXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGUk9NIE5PREUgPSBNS1IgPSBcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJmcm9tIG5vZGUgXCIsIHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAgICAgLy8gdmFsdWVpbnB1dDogdmFsdWVpbnB1dCxcclxuICAgICAgICAgICAgdmFsdWVpbnB1dDogcmVzcG9uc2UuZGF0YS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBmcm9tdG9rZW46IE1LUiwgLy9XRVRIIC1NS1JcclxuICAgICAgICAgICAgdG90b2tlbjogREFJLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gc2V0UHJpY2UxKHJlc3BvbnNlMi5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRlJPTSBOT0RFID0gREFJID0gXCIsIHJlc3BvbnNlMi5kYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZTMgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywge1xyXG4gICAgICAgICAgICAvLyB2YWx1ZWlucHV0OiB2YWx1ZWlucHV0LFxyXG4gICAgICAgICAgICB2YWx1ZWlucHV0OiByZXNwb25zZTIuZGF0YS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBmcm9tdG9rZW46IERBSSwgLy9XRVRIIC1NS1JcclxuICAgICAgICAgICAgdG90b2tlbjogV0VUSCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHNldFByaWNlMihyZXNwb25zZTMuZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZST00gTk9ERSA9IFdFVEggPSBcIiwgcmVzcG9uc2UzLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3VtID09PT0+XCIsIHN1bSlcclxuICAgICAgICBzZXRUb3RhbCh7XHJcbiAgICAgICAgICAgIFByaWNlMTogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgUHJpY2UyOiByZXNwb25zZTIuZGF0YSxcclxuICAgICAgICAgICAgUHJpY2UzOiByZXNwb25zZTMuZGF0YSxcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICBjb25zdCB0aW1lc3RhcnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgb25TYXZlKHZhbHVlaW5wdXQpIH0sIDEpO1xyXG4gICAgICAgc2V0VGltZShgJnt0aW1lc3RhcnR9YClcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0b3RhbCkge1xyXG4gICAgICAgICAgICBzZXRTdW0oWy4uLnN1bSwgdG90YWxdKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt0b3RhbF0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEVUSDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBNS1I6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiB2YWx1ZT17UHJpY2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIERBSTo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtQcmljZTF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEVUSDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtQcmljZTJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNhdmUobmV3SWQpfVxyXG4gICAgICAgICAgICA+IEV4Y2hhbmcgVG9rZW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJFVEhcIiwgZmllbGQ6IFwiU1RBUlRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiTUtSXCIsIGZpZWxkOiAnUHJpY2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJEQUlcIiwgZmllbGQ6ICdQcmljZTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJFVEhcIiwgZmllbGQ6ICdQcmljZTInIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17c3VtLm1hcCgoU2hvdykgPT5cclxuICAgICAgICAgICAgICAgICAgICAoeyBQcmljZTogU2hvdy5QcmljZTEsIFByaWNlMTogU2hvdy5QcmljZTIsIFByaWNlMjogU2hvdy5QcmljZTMgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVtb1wiIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=