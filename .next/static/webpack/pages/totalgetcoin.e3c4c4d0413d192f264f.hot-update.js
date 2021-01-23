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
/* harmony import */ var C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\AToMixz\\Desktop\\NSC\\The-arbitrage-NSC\\pages\\totalgetcoin.tsx",
    _s = $RefreshSig$();





function Totalgetcoin(props, initialId) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialId),
      newId = _useState[0],
      setNewId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      Price = _useState2[0],
      setPrice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      Price1 = _useState3[0],
      setPrice1 = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      Price2 = _useState4[0],
      setPrice2 = _useState4[1];

  var WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  var DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  var OMG = "0xd26114cd6ee289accf82350c8d8487fedb8a0c07";
  var MKR = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
  var USDT = "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e";
  console.log("newId", newId); // const [Price, setPrice] = useState(0)
  // const [Hash, setHash] = useState(0)

  function onSave(_x) {
    return _onSave.apply(this, arguments);
  }

  function _onSave() {
    _onSave = Object(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(valueinput) {
      var response, response2, response3, _response, _response2, _response3;

      return C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //const total = []
              console.log("valueinput", valueinput);
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('http://localhost:5001/totalcoin', {
                //ETH
                valueinput: valueinput,
                //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ
                fromtoken: WETH,
                //WETH -MKR
                totoken: MKR
              });

            case 3:
              response = _context.sent;
              setPrice(response.data);
              console.log("FROM NODE = MKR = ", response.data); // console.log("from node ", response.data)

              _context.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('http://localhost:5001/totalcoin', {
                // valueinput: valueinput,
                valueinput: response.data.toString(),
                fromtoken: MKR,
                //WETH -MKR
                totoken: DAI
              });

            case 8:
              response2 = _context.sent;
              setPrice1(response2.data);
              console.log("FROM NODE = DAI = ", response2.data);
              _context.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('http://localhost:5001/totalcoin', {
                // valueinput: valueinput,
                valueinput: response2.data.toString(),
                fromtoken: DAI,
                //WETH -MKR
                totoken: WETH
              });

            case 13:
              response3 = _context.sent;
              setPrice2(response3.data);
              console.log("FROM NODE = WETH = ", response3.data);

              if (!(response3.data != "")) {
                _context.next = 35;
                break;
              }

            case 17:
              console.log("valueinput", valueinput);
              _context.next = 20;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('http://localhost:5001/totalcoin', {
                //ETH
                valueinput: valueinput,
                //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ
                fromtoken: WETH,
                //WETH -MKR
                totoken: MKR
              });

            case 20:
              _response = _context.sent;
              setPrice(_response.data);
              console.log("FROM NODE = MKR = ", _response.data); // console.log("from node ", response.data)

              _context.next = 25;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('http://localhost:5001/totalcoin', {
                // valueinput: valueinput,
                valueinput: _response.data.toString(),
                fromtoken: MKR,
                //WETH -MKR
                totoken: DAI
              });

            case 25:
              _response2 = _context.sent;
              setPrice1(_response2.data);
              console.log("FROM NODE = DAI = ", _response2.data);
              _context.next = 30;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('http://localhost:5001/totalcoin', {
                // valueinput: valueinput,
                valueinput: _response2.data.toString(),
                fromtoken: DAI,
                //WETH -MKR
                totoken: WETH
              });

            case 30:
              _response3 = _context.sent;
              setPrice2(_response3.data);
              console.log("FROM NODE = WETH = ", _response3.data);

            case 33:
              _context.next = 17;
              break;

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onSave.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        children: ["ETH:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          onChange: function onChange(e) {
            return setNewId(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        children: ["MKR:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          value: Price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        children: ["DAI:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        children: ["ETH:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick() {
        return onSave(newId);
      },
      children: "Exchang Token"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(material_table__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
      data: [{
        START: 1,
        Price: Price,
        Price1: Price1,
        Price2: Price2
      }],
      title: "Demo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Totalgetcoin, "u6L9m669MI2NVolWsdEd1RAlqfM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG90YWxnZXRjb2luLnRzeCJdLCJuYW1lcyI6WyJUb3RhbGdldGNvaW4iLCJwcm9wcyIsImluaXRpYWxJZCIsInVzZVN0YXRlIiwibmV3SWQiLCJzZXROZXdJZCIsIlByaWNlIiwic2V0UHJpY2UiLCJQcmljZTEiLCJzZXRQcmljZTEiLCJQcmljZTIiLCJzZXRQcmljZTIiLCJXRVRIIiwiREFJIiwiT01HIiwiTUtSIiwiVVNEVCIsImNvbnNvbGUiLCJsb2ciLCJvblNhdmUiLCJ2YWx1ZWlucHV0IiwiYXhpb3MiLCJwb3N0IiwiZnJvbXRva2VuIiwidG90b2tlbiIsInJlc3BvbnNlIiwiZGF0YSIsInRvU3RyaW5nIiwicmVzcG9uc2UyIiwicmVzcG9uc2UzIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGl0bGUiLCJmaWVsZCIsIlNUQVJUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBT2UsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkJDLFNBQTdCLEVBQTZEO0FBQUE7O0FBQUEsa0JBQzlDQyxzREFBUSxDQUFDRCxTQUFELENBRHNDO0FBQUEsTUFDakVFLEtBRGlFO0FBQUEsTUFDMURDLFFBRDBEOztBQUFBLG1CQUU5Q0Ysc0RBQVEsQ0FBQyxDQUFELENBRnNDO0FBQUEsTUFFakVHLEtBRmlFO0FBQUEsTUFFMURDLFFBRjBEOztBQUFBLG1CQUc1Q0osc0RBQVEsQ0FBQyxDQUFELENBSG9DO0FBQUEsTUFHakVLLE1BSGlFO0FBQUEsTUFHekRDLFNBSHlEOztBQUFBLG1CQUk1Q04sc0RBQVEsQ0FBQyxDQUFELENBSm9DO0FBQUEsTUFJakVPLE1BSmlFO0FBQUEsTUFJekRDLFNBSnlEOztBQUt4RSxNQUFNQyxJQUFJLEdBQUcsNENBQWI7QUFDQSxNQUFNQyxHQUFHLEdBQUcsNENBQVo7QUFDQSxNQUFNQyxHQUFHLEdBQUcsNENBQVo7QUFD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InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RvdGFsZ2V0Y29pbi5lM2M0YzRkMDQxM2QxOTJmMjY0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE1hdGVyaWFsVGFibGUgZnJvbSAnbWF0ZXJpYWwtdGFibGUnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICByZXN1bHQ6IHsgZGF0YTogYW55OyB9O1xyXG4gICAgaW5pdGlhbElkOiBhbnksXHJcbiAgICB2YWx1ZWlucHV0OiBhbnksXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG90YWxnZXRjb2luKHByb3BzLCBpbml0aWFsSWQ6IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoaW5pdGlhbElkKVxyXG4gICAgY29uc3QgW1ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW1ByaWNlMSwgc2V0UHJpY2UxXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbUHJpY2UyLCBzZXRQcmljZTJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFdFVEggPSBcIjB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMlwiO1xyXG4gICAgY29uc3QgREFJID0gXCIweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEZcIjtcclxuICAgIGNvbnN0IE9NRyA9IFwiMHhkMjYxMTRjZDZlZTI4OWFjY2Y4MjM1MGM4ZDg0ODdmZWRiOGEwYzA3XCI7XHJcbiAgICBjb25zdCBNS1IgPSBcIjB4OWY4RjcyYUE5MzA0YzhCNTkzZDU1NUYxMmVGNjU4OWNDM0E1NzlBMlwiO1xyXG4gICAgY29uc3QgVVNEVCA9IFwiMHg4ZGQ1ZmJjZTJmNmE5NTZjMzAyMmJhMzY2Mzc1OTAxMWRkNTFlNzNlXCI7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5ld0lkXCIsIG5ld0lkKVxyXG4gICAgLy8gY29uc3QgW1ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgLy8gY29uc3QgW0hhc2gsIHNldEhhc2hdID0gdXNlU3RhdGUoMClcclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uU2F2ZSh2YWx1ZWlucHV0OiBhbnkpIHtcclxuICAgICAgICAvL2NvbnN0IHRvdGFsID0gW11cclxuICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlaW5wdXRcIiwgdmFsdWVpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywgeyAvL0VUSFxyXG4gICAgICAgICAgICB2YWx1ZWlucHV0LCAvLzAuMDA1IOC4hOC5iOC4suC4l+C4teC5iOC4geC4o+C4reC4geC5g+C4meC4iuC5iOC4reC4h+C4reC5iOC4suC4meC4seC5ieC4meC5geC4q+C4peC4sFxyXG4gICAgICAgICAgICBmcm9tdG9rZW46IFdFVEgsIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgIHRvdG9rZW46IE1LUixcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFByaWNlKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGUk9NIE5PREUgPSBNS1IgPSBcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJmcm9tIG5vZGUgXCIsIHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAgICAgLy8gdmFsdWVpbnB1dDogdmFsdWVpbnB1dCxcclxuICAgICAgICAgICAgdmFsdWVpbnB1dDogcmVzcG9uc2UuZGF0YS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBmcm9tdG9rZW46IE1LUiwgLy9XRVRIIC1NS1JcclxuICAgICAgICAgICAgdG90b2tlbjogREFJLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0UHJpY2UxKHJlc3BvbnNlMi5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRlJPTSBOT0RFID0gREFJID0gXCIsIHJlc3BvbnNlMi5kYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZTMgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywge1xyXG4gICAgICAgICAgICAvLyB2YWx1ZWlucHV0OiB2YWx1ZWlucHV0LFxyXG4gICAgICAgICAgICB2YWx1ZWlucHV0OiByZXNwb25zZTIuZGF0YS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBmcm9tdG9rZW46IERBSSwgLy9XRVRIIC1NS1JcclxuICAgICAgICAgICAgdG90b2tlbjogV0VUSCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFByaWNlMihyZXNwb25zZTMuZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZST00gTk9ERSA9IFdFVEggPSBcIiwgcmVzcG9uc2UzLmRhdGEpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZTMuZGF0YSAhPSBcIlwiKVxyXG4gICAgICAgICAgICBmb3IgKDsgOykge1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVpbnB1dFwiLCB2YWx1ZWlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7IC8vRVRIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlaW5wdXQsIC8vMC4wMDUg4LiE4LmI4Liy4LiX4Li14LmI4LiB4Lij4Lit4LiB4LmD4LiZ4LiK4LmI4Lit4LiH4Lit4LmI4Liy4LiZ4Lix4LmJ4LiZ4LmB4Lir4Lil4LiwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb210b2tlbjogV0VUSCwgLy9XRVRIIC1NS1JcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90b2tlbjogTUtSLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJpY2UocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZST00gTk9ERSA9IE1LUiA9IFwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gbm9kZSBcIiwgcmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZWlucHV0OiB2YWx1ZWlucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZWlucHV0OiByZXNwb25zZS5kYXRhLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb210b2tlbjogTUtSLCAvL1dFVEggLU1LUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3Rva2VuOiBEQUksXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcmljZTEocmVzcG9uc2UyLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGUk9NIE5PREUgPSBEQUkgPSBcIiwgcmVzcG9uc2UyLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlMyA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlMi5kYXRhLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb210b2tlbjogREFJLCAvL1dFVEggLU1LUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3Rva2VuOiBXRVRILFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJpY2UyKHJlc3BvbnNlMy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRlJPTSBOT0RFID0gV0VUSCA9IFwiLCByZXNwb25zZTMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHJlc3BvbnNlNCA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB2YWx1ZWlucHV0OiB2YWx1ZWlucHV0LFxyXG4gICAgICAgIC8vICAgICAgICAgdmFsdWVpbnB1dDogcmVzcG9uc2UzLmRhdGEsXHJcbiAgICAgICAgLy8gICAgICAgICAvL3Jlc3BvbnNlNCA9IGV0aFxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBFVEg6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgTUtSOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjb2luXCIgdmFsdWU9e1ByaWNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBEQUk6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17UHJpY2UxfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBFVEg6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17UHJpY2UyfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2F2ZShuZXdJZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEV4Y2hhbmcgVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJFVEhcIiwgZmllbGQ6IFwiU1RBUlRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiTUtSXCIsIGZpZWxkOiAnUHJpY2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJEQUlcIiwgZmllbGQ6ICdQcmljZTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJFVEhcIiwgZmllbGQ6ICdQcmljZTInIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGRhdGE9e1tcclxuICAgICAgICAgICAgICAgICAgICB7IFNUQVJUOiAxLCBQcmljZTogUHJpY2UsIFByaWNlMTogUHJpY2UxLCBQcmljZTI6IFByaWNlMiB9LFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVtb1wiIC8+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9