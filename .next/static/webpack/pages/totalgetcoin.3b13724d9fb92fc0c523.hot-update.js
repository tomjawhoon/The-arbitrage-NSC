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

  var WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  var DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  var OMG = "0xd26114cd6ee289accf82350c8d8487fedb8a0c07";
  var MKR = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
  var USDT = "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e";
  console.log("Price", Price);

  var onSave = /*#__PURE__*/function () {
    var _ref = Object(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(valueinput) {
      var response, response2, response3;
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
              setTimeout(function () {
                onSave(valueinput);
              }, 1);

            case 15:
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
          lineNumber: 72,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["MKR:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          value: Price
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
        children: ["DAI:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price1
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
        children: ["ETH:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      lineNumber: 85,
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
      lineNumber: 91,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Totalgetcoin, "J8At4sxkpNK2EhCv5+D1zceOk0U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG90YWxnZXRjb2luLnRzeCJdLCJuYW1lcyI6WyJUb3RhbGdldGNvaW4iLCJwcm9wcyIsImluaXRpYWxJZCIsInVzZVN0YXRlIiwibmV3SWQiLCJzZXROZXdJZCIsIlByaWNlIiwic2V0UHJpY2UiLCJQcmljZTEiLCJzZXRQcmljZTEiLCJQcmljZTIiLCJzZXRQcmljZTIiLCJzdW0iLCJzZXRTdW0iLCJ0b3RhbCIsInNldFRvdGFsIiwiV0VUSCIsIkRBSSIsIk9NRyIsIk1LUiIsIlVTRFQiLCJjb25zb2xlIiwibG9nIiwib25TYXZlIiwidmFsdWVpbnB1dCIsImF4aW9zIiwicG9zdCIsImZyb210b2tlbiIsInRvdG9rZW4iLCJyZXNwb25zZSIsImRhdGEiLCJ0b1N0cmluZyIsInJlc3BvbnNlMiIsInJlc3BvbnNlMyIsIlByaWNlMyIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0aXRsZSIsImZpZWxkIiwibWFwIiwiU2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBUWUsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkJDLFNBQTdCLEVBQTZEO0FBQUE7O0FBQUEsa0JBQzlDQyxzREFBUSxDQUFDRCxTQUFELENBRHNDO0FBQUEsTUFDakVFLEtBRGlFO0FBQUEsTUFDMURDLFFBRDBEOztBQUFBLG1CQUU5Q0Ysc0RBQVEsQ0FBQyxDQUFELENBRnNDO0FBQUEsTUFFakVHLEtBRmlFO0FBQUEsTUFFMURDLFFBRjBEOztBQUFBLG1CQUc1Q0osc0RBQVEsQ0FBQyxDQUFELENBSG9DO0FBQUEsTUFHakVLLE1BSGlFO0FBQUEsTUFHekRDLFNBSHlEOztBQUFBLG1CQUk1Q04sc0RBQVEsQ0FBQyxDQUFELENBSm9DO0FBQUEsTUFJakVPLE1BSmlFO0FBQUEsTUFJekRDLFNBSnlEOztBQUFBLG1CQUts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QUFFO0FBQXZCLE9BSEssRUFJTDtBQUFFRCxhQUFLLEVBQUUsS0FBVDtBQUFnQkMsYUFBSyxFQUFFO0FBQXZCLE9BSkssQ0FEYjtBQU9JLFVBQUksRUFBRTdCLEdBQUcsQ0FBQzhCLEdBQUosQ0FBUSxVQUFDQyxJQUFEO0FBQUEsZUFDVDtBQUFFckMsZUFBSyxFQUFFcUMsSUFBSSxDQUFDbkMsTUFBZDtBQUFzQkEsZ0JBQU0sRUFBRW1DLElBQUksQ0FBQ2pDLE1BQW5DO0FBQTJDQSxnQkFBTSxFQUFFaUMsSUFBSSxDQUFDVDtBQUF4RCxTQURTO0FBQUEsT0FBUixDQVBWO0FBV0ksV0FBSyxFQUFDO0FBWFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCSjtBQUFBLGtCQURKO0FBcUNIOztHQTNGdUJsQyxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RvdGFsZ2V0Y29pbi4zYjEzNzI0ZDlmYjkyZmMwYzUyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHJlc3VsdDogeyBkYXRhOiBhbnk7IH07XHJcbiAgICBpbml0aWFsSWQ6IGFueSxcclxuICAgIHZhbHVlaW5wdXQ6IGFueSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG90YWxnZXRjb2luKHByb3BzLCBpbml0aWFsSWQ6IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoaW5pdGlhbElkKVxyXG4gICAgY29uc3QgW1ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW1ByaWNlMSwgc2V0UHJpY2UxXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbUHJpY2UyLCBzZXRQcmljZTJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtzdW0sIHNldFN1bV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBXRVRIID0gXCIweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzJcIjtcclxuICAgIGNvbnN0IERBSSA9IFwiMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGXCI7XHJcbiAgICBjb25zdCBPTUcgPSBcIjB4ZDI2MTE0Y2Q2ZWUyODlhY2NmODIzNTBjOGQ4NDg3ZmVkYjhhMGMwN1wiO1xyXG4gICAgY29uc3QgTUtSID0gXCIweDlmOEY3MmFBOTMwNGM4QjU5M2Q1NTVGMTJlRjY1ODljQzNBNTc5QTJcIjtcclxuICAgIGNvbnN0IFVTRFQgPSBcIjB4OGRkNWZiY2UyZjZhOTU2YzMwMjJiYTM2NjM3NTkwMTFkZDUxZTczZVwiO1xyXG4gICAgY29uc29sZS5sb2coXCJQcmljZVwiLCBQcmljZSlcclxuXHJcbiAgICBjb25zdCBvblNhdmUgPSBhc3luYyAodmFsdWVpbnB1dDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywgeyAvL0VUSFxyXG4gICAgICAgICAgICB2YWx1ZWlucHV0LCAvLzAuMDA1IOC4hOC5iOC4suC4l+C4teC5iOC4geC4o+C4reC4geC5g+C4meC4iuC5iOC4reC4h+C4reC5iOC4suC4meC4seC5ieC4meC5geC4q+C4peC4sFxyXG4gICAgICAgICAgICBmcm9tdG9rZW46IFdFVEgsIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgIHRvdG9rZW46IE1LUixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vc2V0UHJpY2UocmVzcG9uc2UuZGF0YSkgLy8xMFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRlJPTSBOT0RFID0gTUtSID0gXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBub2RlIFwiLCByZXNwb25zZS5kYXRhKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7XHJcbiAgICAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXHJcbiAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlLmRhdGEudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgZnJvbXRva2VuOiBNS1IsIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgIHRvdG9rZW46IERBSSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHNldFByaWNlMShyZXNwb25zZTIuZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZST00gTk9ERSA9IERBSSA9IFwiLCByZXNwb25zZTIuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAgICAgLy8gdmFsdWVpbnB1dDogdmFsdWVpbnB1dCxcclxuICAgICAgICAgICAgdmFsdWVpbnB1dDogcmVzcG9uc2UyLmRhdGEudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgZnJvbXRva2VuOiBEQUksIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgIHRvdG9rZW46IFdFVEgsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBzZXRQcmljZTIocmVzcG9uc2UzLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGUk9NIE5PREUgPSBXRVRIID0gXCIsIHJlc3BvbnNlMy5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN1bSA9PT09PlwiLCBzdW0pXHJcbiAgICAgICAgc2V0VG90YWwoe1xyXG4gICAgICAgICAgICBQcmljZTE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgIFByaWNlMjogcmVzcG9uc2UyLmRhdGEsXHJcbiAgICAgICAgICAgIFByaWNlMzogcmVzcG9uc2UzLmRhdGEsXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IG9uU2F2ZSh2YWx1ZWlucHV0KSB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0b3RhbCkge1xyXG4gICAgICAgICAgICBzZXRTdW0oWy4uLnN1bSwgdG90YWxdKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt0b3RhbF0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEVUSDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBNS1I6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiB2YWx1ZT17UHJpY2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIERBSTo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtQcmljZTF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEVUSDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtQcmljZTJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNhdmUobmV3SWQpfVxyXG4gICAgICAgICAgICA+IEV4Y2hhbmcgVG9rZW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJFVEhcIiwgZmllbGQ6IFwiU1RBUlRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiTUtSXCIsIGZpZWxkOiAnUHJpY2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJEQUlcIiwgZmllbGQ6ICdQcmljZTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJFVEhcIiwgZmllbGQ6ICdQcmljZTInIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17c3VtLm1hcCgoU2hvdykgPT5cclxuICAgICAgICAgICAgICAgICAgICAoeyBQcmljZTogU2hvdy5QcmljZTEsIFByaWNlMTogU2hvdy5QcmljZTIsIFByaWNlMjogU2hvdy5QcmljZTMgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVtb1wiIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=