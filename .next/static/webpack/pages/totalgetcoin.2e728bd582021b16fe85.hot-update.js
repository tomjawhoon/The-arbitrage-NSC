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
      var response, response2, response3, ballzazeed, _ballzazeed;

      return C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ballzazeed = function _ballzazeed3() {
                _ballzazeed = Object(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(valueinput) {
                  return C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));
                return _ballzazeed.apply(this, arguments);
              };

              ballzazeed = function _ballzazeed2(_x2) {
                return _ballzazeed.apply(this, arguments);
              };

            case 2:
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('http://localhost:5001/totalcoin', {
                //ETH
                valueinput: valueinput,
                //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ
                fromtoken: WETH,
                //WETH -MKR
                totoken: MKR
              });

            case 4:
              response = _context2.sent;
              //setPrice(response.data) //10
              console.log("FROM NODE = MKR = ", response.data); // console.log("from node ", response.data)

              _context2.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('http://localhost:5001/totalcoin', {
                // valueinput: valueinput,
                valueinput: response.data.toString(),
                fromtoken: MKR,
                //WETH -MKR
                totoken: DAI
              });

            case 8:
              response2 = _context2.sent;
              // setPrice1(response2.data)
              console.log("FROM NODE = DAI = ", response2.data);
              _context2.next = 12;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('http://localhost:5001/totalcoin', {
                // valueinput: valueinput,
                valueinput: response2.data.toString(),
                fromtoken: DAI,
                //WETH -MKR
                totoken: WETH
              });

            case 12:
              response3 = _context2.sent;
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

            case 17:
              _context2.next = 2;
              break;

            case 19:
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
          lineNumber: 115,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["MKR:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          value: Price
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
        children: ["DAI:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["ETH:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 128,
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
      lineNumber: 134,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG90YWxnZXRjb2luLnRzeCJdLCJuYW1lcyI6WyJUb3RhbGdldGNvaW4iLCJwcm9wcyIsImluaXRpYWxJZCIsInVzZVN0YXRlIiwibmV3SWQiLCJzZXROZXdJZCIsIlByaWNlIiwic2V0UHJpY2UiLCJQcmljZTEiLCJzZXRQcmljZTEiLCJQcmljZTIiLCJzZXRQcmljZTIiLCJzdW0iLCJzZXRTdW0iLCJXRVRIIiwiREFJIiwiT01HIiwiTUtSIiwiVVNEVCIsImNvbnNvbGUiLCJsb2ciLCJvblNhdmUiLCJ2YWx1ZWlucHV0IiwiYmFsbHphemVlZCIsImF4aW9zIiwicG9zdCIsImZyb210b2tlbiIsInRvdG9rZW4iLCJyZXNwb25zZSIsImRhdGEiLCJ0b1N0cmluZyIsInJlc3BvbnNlMiIsInJlc3BvbnNlMyIsIlByaWNlMyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpdGxlIiwiZmllbGQiLCJtYXAiLCJTaG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFRZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QkMsU0FBN0IsRUFBNkQ7QUFBQTs7QUFBQSxrQkFDOUNDLHNEQUFRLENBQUNELFNBQUQsQ0FEc0M7QUFBQSxNQUNqRUUsS0FEaUU7QUFBQSxNQUMxREMsUUFEMEQ7O0FBQUEsbUJBRTlDRixzREFBUSxDQUFDLENBQUQsQ0FGc0M7QUFBQSxNQUVqRUcsS0FGaUU7QUFBQSxNQUUxREMsUUFGMEQ7O0FBQUEsbUJBRzVDSixzREFBUSxDQUFDLENBQUQsQ0FIb0M7QUFBQSxNQUdqRUssTUFIaUU7QUFBQSxNQUd6REMsU0FIeUQ7O0FBQUEsbUJBSTVDTixzREFBUSxDQUFDLENBQUQsQ0FKb0M7QUFBQSxNQUlqRU8sTUFKaUU7QUFBQSxNQUl6REMsU0FKeUQ7O0FBQUEsbUJBS2xEUixzREFBUSxDQUFDLEVBQUQsQ0FMMEM7QUFBQSxN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LE9BSEssRUFJTDtBQUFFRCxhQUFLLEVBQUUsS0FBVDtBQUFnQkMsYUFBSyxFQUFFO0FBQXZCLE9BSkssQ0FEYjtBQU9JLFVBQUksRUFBRTFCLEdBQUcsQ0FBQzJCLEdBQUosQ0FBUSxVQUFDQyxJQUFEO0FBQUEsZUFDVDtBQUFFbEMsZUFBSyxFQUFFa0MsSUFBSSxDQUFDaEMsTUFBZDtBQUFzQkEsZ0JBQU0sRUFBRWdDLElBQUksQ0FBQzlCLE1BQW5DO0FBQTJDQSxnQkFBTSxFQUFFOEIsSUFBSSxDQUFDUDtBQUF4RCxTQURTO0FBQUEsT0FBUixDQVBWO0FBV0ksV0FBSyxFQUFDO0FBWFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCSjtBQUFBLGtCQURKO0FBcUNIOztHQXRJdUJqQyxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RvdGFsZ2V0Y29pbi4yZTcyOGJkNTgyMDIxYjE2ZmU4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE1hdGVyaWFsVGFibGUgZnJvbSAnbWF0ZXJpYWwtdGFibGUnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICByZXN1bHQ6IHsgZGF0YTogYW55OyB9O1xyXG4gICAgaW5pdGlhbElkOiBhbnksXHJcbiAgICB2YWx1ZWlucHV0OiBhbnksXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvdGFsZ2V0Y29pbihwcm9wcywgaW5pdGlhbElkOiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XHJcbiAgICBjb25zdCBbbmV3SWQsIHNldE5ld0lkXSA9IHVzZVN0YXRlKGluaXRpYWxJZClcclxuICAgIGNvbnN0IFtQcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtQcmljZTEsIHNldFByaWNlMV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW1ByaWNlMiwgc2V0UHJpY2UyXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbc3VtLCBzZXRTdW1dID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBXRVRIID0gXCIweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzJcIjtcclxuICAgIGNvbnN0IERBSSA9IFwiMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGXCI7XHJcbiAgICBjb25zdCBPTUcgPSBcIjB4ZDI2MTE0Y2Q2ZWUyODlhY2NmODIzNTBjOGQ4NDg3ZmVkYjhhMGMwN1wiO1xyXG4gICAgY29uc3QgTUtSID0gXCIweDlmOEY3MmFBOTMwNGM4QjU5M2Q1NTVGMTJlRjY1ODljQzNBNTc5QTJcIjtcclxuICAgIGNvbnN0IFVTRFQgPSBcIjB4OGRkNWZiY2UyZjZhOTU2YzMwMjJiYTM2NjM3NTkwMTFkZDUxZTczZVwiO1xyXG4gICAgY29uc29sZS5sb2coXCJQcmljZVwiLCBQcmljZSlcclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uU2F2ZSh2YWx1ZWlucHV0OiBhbnkpIHtcclxuICAgICAgICBmb3IgKDsgOykge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7IC8vRVRIXHJcbiAgICAgICAgICAgICAgICB2YWx1ZWlucHV0LCAvLzAuMDA1IOC4hOC5iOC4suC4l+C4teC5iOC4geC4o+C4reC4geC5g+C4meC4iuC5iOC4reC4h+C4reC5iOC4suC4meC4seC5ieC4meC5geC4q+C4peC4sFxyXG4gICAgICAgICAgICAgICAgZnJvbXRva2VuOiBXRVRILCAvL1dFVEggLU1LUlxyXG4gICAgICAgICAgICAgICAgdG90b2tlbjogTUtSLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL3NldFByaWNlKHJlc3BvbnNlLmRhdGEpIC8vMTBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGUk9NIE5PREUgPSBNS1IgPSBcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBub2RlIFwiLCByZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywge1xyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWVpbnB1dDogdmFsdWVpbnB1dCxcclxuICAgICAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlLmRhdGEudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIGZyb210b2tlbjogTUtSLCAvL1dFVEggLU1LUlxyXG4gICAgICAgICAgICAgICAgdG90b2tlbjogREFJLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBzZXRQcmljZTEocmVzcG9uc2UyLmRhdGEpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRlJPTSBOT0RFID0gREFJID0gXCIsIHJlc3BvbnNlMi5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZWlucHV0OiByZXNwb25zZTIuZGF0YS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgZnJvbXRva2VuOiBEQUksIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgICAgICB0b3Rva2VuOiBXRVRILFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBzZXRQcmljZTIocmVzcG9uc2UzLmRhdGEpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRlJPTSBOT0RFID0gV0VUSCA9IFwiLCByZXNwb25zZTMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VtID09PT0+XCIsc3VtKVxyXG4gICAgICAgICAgICBzZXRTdW0oWy4uLnN1bSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUHJpY2UxOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgUHJpY2UyOiByZXNwb25zZTIuZGF0YSxcclxuICAgICAgICAgICAgICAgIFByaWNlMzogcmVzcG9uc2UzLmRhdGEsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VtIGJhbGwgemEgZWllaSA9PT09PlwiLFsuLi5zdW0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgUHJpY2UxOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIFByaWNlMjogcmVzcG9uc2UyLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJpY2UzOiByZXNwb25zZTMuZGF0YSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBiYWxsemF6ZWVkKHZhbHVlaW5wdXQ6IGFueSkge1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIGZvciAoOyA7KSB7XHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZWlucHV0XCIsIHZhbHVlaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHsgLy9FVEhcclxuICAgICAgICAgICAgICAgICAgICAgdmFsdWVpbnB1dCwgLy8wLjAwNSDguITguYjguLLguJfguLXguYjguIHguKPguK3guIHguYPguJnguIrguYjguK3guIfguK3guYjguLLguJnguLHguYnguJnguYHguKvguKXguLBcclxuICAgICAgICAgICAgICAgICAgICAgZnJvbXRva2VuOiBXRVRILCAvL1dFVEggLU1LUlxyXG4gICAgICAgICAgICAgICAgICAgICB0b3Rva2VuOiBNS1IsXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICBzZXRQcmljZShyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRlJPTSBOT0RFID0gTUtSID0gXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBub2RlIFwiLCByZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlLmRhdGEudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAgZnJvbXRva2VuOiBNS1IsIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgICAgICAgICAgIHRvdG9rZW46IERBSSxcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIHNldFByaWNlMShyZXNwb25zZTIuZGF0YSlcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZST00gTk9ERSA9IERBSSA9IFwiLCByZXNwb25zZTIuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWVpbnB1dDogdmFsdWVpbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICAgdmFsdWVpbnB1dDogcmVzcG9uc2UyLmRhdGEudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAgZnJvbXRva2VuOiBEQUksIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgICAgICAgICAgIHRvdG9rZW46IFdFVEgsXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICBzZXRQcmljZTIocmVzcG9uc2UzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGUk9NIE5PREUgPSBXRVRIID0gXCIsIHJlc3BvbnNlMy5kYXRhKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfSovXHJcblxyXG5cclxuICAgICAgICAvLyAgICAgY29uc3QgcmVzcG9uc2U0ID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXHJcbiAgICAgICAgLy8gICAgICAgICB2YWx1ZWlucHV0OiByZXNwb25zZTMuZGF0YSxcclxuICAgICAgICAvLyAgICAgICAgIC8vcmVzcG9uc2U0ID0gZXRoXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEVUSDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBNS1I6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiB2YWx1ZT17UHJpY2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIERBSTo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtQcmljZTF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEVUSDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtQcmljZTJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNhdmUobmV3SWQpfVxyXG4gICAgICAgICAgICA+IEV4Y2hhbmcgVG9rZW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgLy97IHRpdGxlOiBcIkVUSFwiLCBmaWVsZDogXCJTVEFSVFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJNS1JcIiwgZmllbGQ6ICdQcmljZScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkRBSVwiLCBmaWVsZDogJ1ByaWNlMScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkVUSFwiLCBmaWVsZDogJ1ByaWNlMicgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtzdW0ubWFwKChTaG93KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICh7IFByaWNlOiBTaG93LlByaWNlMSwgUHJpY2UxOiBTaG93LlByaWNlMiwgUHJpY2UyOiBTaG93LlByaWNlMyB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJEZW1vXCIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==