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
      var response, response2, response3;
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
              console.log("FROM NODE = WETH = ", response3.data); //     const response4 = await axios.post('http://localhost:5001/totalcoin', {
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
          lineNumber: 63,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        children: ["MKR:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          value: Price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        children: ["DAI:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        children: ["ETH:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 77,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(material_table__WEBPACK_IMPORTED_MODULE_4___default.a, {
      columns: [{
        title: "No",
        field: 'no'
      }, {
        title: "Name",
        field: 'name'
      }],
      data: [{
        no: 1,
        name: "Next"
      }, {
        no: 1,
        name: "React"
      }, {
        no: 1,
        name: "Test"
      }, {
        no: 1,
        name: "May"
      }],
      title: "Demo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG90YWxnZXRjb2luLnRzeCJdLCJuYW1lcyI6WyJUb3RhbGdldGNvaW4iLCJwcm9wcyIsImluaXRpYWxJZCIsInVzZVN0YXRlIiwibmV3SWQiLCJzZXROZXdJZCIsIlByaWNlIiwic2V0UHJpY2UiLCJQcmljZTEiLCJzZXRQcmljZTEiLCJQcmljZTIiLCJzZXRQcmljZTIiLCJXRVRIIiwiREFJIiwiT01HIiwiTUtSIiwiVVNEVCIsImNvbnNvbGUiLCJsb2ciLCJvblNhdmUiLCJ2YWx1ZWlucHV0IiwiYXhpb3MiLCJwb3N0IiwiZnJvbXRva2VuIiwidG90b2tlbiIsInJlc3BvbnNlIiwiZGF0YSIsInRvU3RyaW5nIiwicmVzcG9uc2UyIiwicmVzcG9uc2UzIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGl0bGUiLCJmaWVsZCIsIm5vIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9lLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxTQUE3QixFQUE2RDtBQUFBOztBQUFBLGtCQUM5Q0Msc0RBQVEsQ0FBQ0QsU0FBRCxDQURzQztBQUFBLE1BQ2pFRSxLQURpRTtBQUFBLE1BQzFEQyxRQUQwRDs7QUFBQSxtQkFFOUNGLHNEQUFRLENBQUMsQ0FBRCxDQUZzQztBQUFBLE1BRWpFRyxLQUZpRTtBQUFBLE1BRTFEQyxRQUYwRDs7QUFBQSxtQkFHNUNKLHNEQUFRLENBQUMsQ0FBRCxDQUhvQztBQUFBLE1BR2pFSyxNQUhpRTtBQUFBLE1BR3pEQyxTQUh5RDs7QUFBQSxtQkFJNUNOLHNEQUFRLENBQUMsQ0FBRCxDQUpvQztBQUFBLE1BSWpFTyxNQUppRTtBQUFBLE1BSXpEQyxTQUp5RDs7QUFLeEUsTUFBTUMsSUFBSSxHQUFHLDRDQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLDRDQUFaO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLDRDQUFa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QU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsY0FBSSxFQUFDLE1BQXhCO0FBQStCLGVBQUssRUFBRUU7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSixlQWlCSSxxRUFBQyx3REFBRDtBQUNJLGFBQU8sRUFBQyxXQURaO0FBRUksV0FBSyxFQUFDLFNBRlY7QUFHSSxhQUFPLEVBQUU7QUFBQSxlQUFNUyxNQUFNLENBQUNmLEtBQUQsQ0FBWjtBQUFBLE9BSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkosZUF3QkkscUVBQUMscURBQUQ7QUFDSSxhQUFPLEVBQUUsQ0FDTDtBQUFFNkIsYUFBSyxFQUFFLElBQVQ7QUFBZUMsYUFBSyxFQUFFO0FBQXRCLE9BREssRUFFTDtBQUFFRCxhQUFLLEVBQUUsTUFBVDtBQUFpQkMsYUFBSyxFQUFFO0FBQXhCLE9BRkssQ0FEYjtBQUtJLFVBQUksRUFBRSxDQUNGO0FBQUVDLFVBQUUsRUFBRSxDQUFOO0FBQVNDLFlBQUksRUFBRTtBQUFmLE9BREUsRUFFRjtBQUFFRCxVQUFFLEVBQUUsQ0FBTjtBQUFTQyxZQUFJLEVBQUU7QUFBZixPQUZFLEVBR0Y7QUFBRUQsVUFBRSxFQUFFLENBQU47QUFBU0MsWUFBSSxFQUFFO0FBQWYsT0FIRSxFQUlGO0FBQUVELFVBQUUsRUFBRSxDQUFOO0FBQVNDLFlBQUksRUFBRTtBQUFmLE9BSkUsQ0FMVjtBQVdJLFdBQUssRUFBQztBQVhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Qko7QUFBQSxrQkFESjtBQXdDSDs7R0F0RnVCcEMsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90b3RhbGdldGNvaW4uZDJlN2JjNmQ3Y2NkYWQwN2YyODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNYXRlcmlhbFRhYmxlIGZyb20gJ21hdGVyaWFsLXRhYmxlJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgcmVzdWx0OiB7IGRhdGE6IGFueTsgfTtcclxuICAgIGluaXRpYWxJZDogYW55LFxyXG4gICAgdmFsdWVpbnB1dDogYW55LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvdGFsZ2V0Y29pbihwcm9wcywgaW5pdGlhbElkOiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XHJcbiAgICBjb25zdCBbbmV3SWQsIHNldE5ld0lkXSA9IHVzZVN0YXRlKGluaXRpYWxJZClcclxuICAgIGNvbnN0IFtQcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtQcmljZTEsIHNldFByaWNlMV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW1ByaWNlMiwgc2V0UHJpY2UyXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBXRVRIID0gXCIweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzJcIjtcclxuICAgIGNvbnN0IERBSSA9IFwiMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGXCI7XHJcbiAgICBjb25zdCBPTUcgPSBcIjB4ZDI2MTE0Y2Q2ZWUyODlhY2NmODIzNTBjOGQ4NDg3ZmVkYjhhMGMwN1wiO1xyXG4gICAgY29uc3QgTUtSID0gXCIweDlmOEY3MmFBOTMwNGM4QjU5M2Q1NTVGMTJlRjY1ODljQzNBNTc5QTJcIjtcclxuICAgIGNvbnN0IFVTRFQgPSBcIjB4OGRkNWZiY2UyZjZhOTU2YzMwMjJiYTM2NjM3NTkwMTFkZDUxZTczZVwiO1xyXG4gICAgY29uc29sZS5sb2coXCJuZXdJZFwiLCBuZXdJZClcclxuICAgIC8vIGNvbnN0IFtQcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMClcclxuICAgIC8vIGNvbnN0IFtIYXNoLCBzZXRIYXNoXSA9IHVzZVN0YXRlKDApXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvblNhdmUodmFsdWVpbnB1dDogYW55KSB7XHJcbiAgICAgICAgLy9jb25zdCB0b3RhbCA9IFtdXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZWlucHV0XCIsIHZhbHVlaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHsgLy9FVEhcclxuICAgICAgICAgICAgdmFsdWVpbnB1dCwgLy8wLjAwNSDguITguYjguLLguJfguLXguYjguIHguKPguK3guIHguYPguJnguIrguYjguK3guIfguK3guYjguLLguJnguLHguYnguJnguYHguKvguKXguLBcclxuICAgICAgICAgICAgZnJvbXRva2VuOiBXRVRILCAvL1dFVEggLU1LUlxyXG4gICAgICAgICAgICB0b3Rva2VuOiBNS1IsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRQcmljZShyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRlJPTSBOT0RFID0gTUtSID0gXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBub2RlIFwiLCByZXNwb25zZS5kYXRhKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7XHJcbiAgICAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXHJcbiAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlLmRhdGEudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgZnJvbXRva2VuOiBNS1IsIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgIHRvdG9rZW46IERBSSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFByaWNlMShyZXNwb25zZTIuZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZST00gTk9ERSA9IERBSSA9IFwiLCByZXNwb25zZTIuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAgICAgLy8gdmFsdWVpbnB1dDogdmFsdWVpbnB1dCxcclxuICAgICAgICAgICAgdmFsdWVpbnB1dDogcmVzcG9uc2UyLmRhdGEudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgZnJvbXRva2VuOiBEQUksIC8vV0VUSCAtTUtSXHJcbiAgICAgICAgICAgIHRvdG9rZW46IFdFVEgsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRQcmljZTIocmVzcG9uc2UzLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGUk9NIE5PREUgPSBXRVRIID0gXCIsIHJlc3BvbnNlMy5kYXRhKTtcclxuICAgICAgICAvLyAgICAgY29uc3QgcmVzcG9uc2U0ID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXHJcbiAgICAgICAgLy8gICAgICAgICB2YWx1ZWlucHV0OiByZXNwb25zZTMuZGF0YSxcclxuICAgICAgICAvLyAgICAgICAgIC8vcmVzcG9uc2U0ID0gZXRoXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEVUSDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBNS1I6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiB2YWx1ZT17UHJpY2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIERBSTo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtQcmljZTF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEVUSDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtQcmljZTJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TYXZlKG5ld0lkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRXhjaGFuZyBUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPE1hdGVyaWFsVGFibGVcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIk5vXCIsIGZpZWxkOiAnbm8nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJOYW1lXCIsIGZpZWxkOiAnbmFtZScgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBubzogMSwgbmFtZTogXCJOZXh0XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5vOiAxLCBuYW1lOiBcIlJlYWN0XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5vOiAxLCBuYW1lOiBcIlRlc3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbm86IDEsIG5hbWU6IFwiTWF5XCIgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbW9cIiAvPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==