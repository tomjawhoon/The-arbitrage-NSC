webpackHotUpdate_N_E("pages/totalgetcoin",{

/***/ "./pages/totalgetcoin.tsx":
/*!********************************!*\
  !*** ./pages/totalgetcoin.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Totalgetcoin; });\n/* harmony import */ var _Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/masterofnodejs/MasterofNode/The-arbitrage-NSC/pages/totalgetcoin.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Totalgetcoin(props, initialId) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialId),\n      newId = _useState[0],\n      setNewId = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      Price = _useState2[0],\n      setPrice = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      Price1 = _useState3[0],\n      setPrice1 = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      Price2 = _useState4[0],\n      setPrice2 = _useState4[1];\n\n  var WETH = \"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\";\n  var DAI = \"0x6B175474E89094C44Da98b954EedeAC495271d0F\";\n  var OMG = \"0xd26114cd6ee289accf82350c8d8487fedb8a0c07\";\n  var MKR = \"0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2\";\n  var USDT = \"0x8dd5fbce2f6a956c3022ba3663759011dd51e73e\";\n  console.log(\"newId\", newId); // const [Price, setPrice] = useState(0)\n  // const [Hash, setHash] = useState(0)\n\n  function onSave(_x) {\n    return _onSave.apply(this, arguments);\n  }\n\n  function _onSave() {\n    _onSave = Object(_Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(valueinput) {\n      var response, response2, response3;\n      return _Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"valueinput\", valueinput);\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:5001/totalcoin', {\n                //ETH\n                valueinput: valueinput,\n                //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ\n                fromtoken: WETH,\n                //WETH -MKR\n                totoken: MKR\n              });\n\n            case 3:\n              response = _context.sent;\n              setPrice(response.data);\n              console.log(\"from node \", response.data);\n              _context.next = 8;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:5001/totalcoin', {\n                // valueinput: valueinput,\n                valueinput: response.data.toString(),\n                fromtoken: MKR,\n                //WETH -MKR\n                totoken: USDT\n              });\n\n            case 8:\n              response2 = _context.sent;\n              setPrice1(response2.data);\n              _context.next = 12;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:5001/totalcoin', {\n                // valueinput: valueinput,\n                valueinput: response2.data.toString(),\n                fromtoken: USDT,\n                //WETH -MKR\n                totoken: WETH\n              });\n\n            case 12:\n              response3 = _context.sent;\n              setPrice2(response3.data); //     const response4 = await axios.post('http://localhost:5001/totalcoin', {\n              //         // valueinput: valueinput,\n              //         valueinput: response3.data,\n              //         //response4 = eth\n              //     })\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _onSave.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        children: [\"ETH:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\",\n          placeholder: \"Enter coin\",\n          onChange: function onChange(e) {\n            return setNewId(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        children: [\"MKR:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\",\n          placeholder: \"Enter coin\",\n          value: Price\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        children: [\"USDT:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 26\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        children: [\"ETH:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n      variant: \"contained\",\n      color: \"primary\",\n      onClick: function onClick() {\n        return onSave(newId);\n      },\n      children: \"Exchang Token\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Totalgetcoin, \"u6L9m669MI2NVolWsdEd1RAlqfM=\");\n\n_c = Totalgetcoin;\n\nvar _c;\n\n$RefreshReg$(_c, \"Totalgetcoin\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG90YWxnZXRjb2luLnRzeD8wZGNhIl0sIm5hbWVzIjpbIlRvdGFsZ2V0Y29pbiIsInByb3BzIiwiaW5pdGlhbElkIiwidXNlU3RhdGUiLCJuZXdJZCIsInNldE5ld0lkIiwiUHJpY2UiLCJzZXRQcmljZSIsIlByaWNlMSIsInNldFByaWNlMSIsIlByaWNlMiIsInNldFByaWNlMiIsIldFVEgiLCJEQUkiLCJPTUciLCJNS1IiLCJVU0RUIiwiY29uc29sZSIsImxvZyIsIm9uU2F2ZSIsInZhbHVlaW5wdXQiLCJheGlvcyIsInBvc3QiLCJmcm9tdG9rZW4iLCJ0b3Rva2VuIiwicmVzcG9uc2UiLCJkYXRhIiwidG9TdHJpbmciLCJyZXNwb25zZTIiLCJyZXNwb25zZTMiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUNBO0FBTWUsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkJDLFNBQTdCLEVBQTZEO0FBQUE7O0FBQUEsa0JBQzlDQyxzREFBUSxDQUFDRCxTQUFELENBRHNDO0FBQUEsTUFDakVFLEtBRGlFO0FBQUEsTUFDMURDLFFBRDBEOztBQUFBLG1CQUU5Q0Ysc0RBQVEsQ0FBQyxDQUFELENBRnNDO0FBQUEsTUFFakVHLEtBRmlFO0FBQUEsTUFFMURDLFFBRjBEOztBQUFBLG1CQUc1Q0osc0RBQVEsQ0FBQyxDQUFELENBSG9DO0FBQUEsTUFHakVLLE1BSGlFO0FBQUEsTUFHekRDLFNBSHlEOztBQUFBLG1CQUk1Q04sc0RBQVEsQ0FBQyxDQUFELENBSm9DO0FBQUEsTUFJakVPLE1BSmlFO0FBQUEsTUFJekRDLFNBSnlEOztBQUt4RSxNQUFNQyxJQUFJLEdBQUcsNENBQWI7QUFDQSxNQUFNQyxHQUFHLEdBQUcsNENBQVo7QUFDQSxNQUFNQyxHQUFHLEdBQUcsNENBQVo7QUFDQSxNQUFNQyxHQUFHLEdBQUcsNENBQVo7QUFDQSxNQUFNQyxJ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LFdBQUssRUFBQyxTQUZWO0FBR0ksYUFBTyxFQUFFO0FBQUEsZUFBTWEsTUFBTSxDQUFDZixLQUFELENBQVo7QUFBQSxPQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJKO0FBQUEsa0JBREo7QUEwQkg7O0dBcEV1QkosWTs7S0FBQUEsWSIsImZpbGUiOiIuL3BhZ2VzL3RvdGFsZ2V0Y29pbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHJlc3VsdDogeyBkYXRhOiBhbnk7IH07XG4gICAgaW5pdGlhbElkOiBhbnksXG4gICAgdmFsdWVpbnB1dDogYW55LFxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG90YWxnZXRjb2luKHByb3BzLCBpbml0aWFsSWQ6IFByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgICBjb25zdCBbbmV3SWQsIHNldE5ld0lkXSA9IHVzZVN0YXRlKGluaXRpYWxJZClcbiAgICBjb25zdCBbUHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW1ByaWNlMSwgc2V0UHJpY2UxXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW1ByaWNlMiwgc2V0UHJpY2UyXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgV0VUSCA9IFwiMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyXCI7XG4gICAgY29uc3QgREFJID0gXCIweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEZcIjtcbiAgICBjb25zdCBPTUcgPSBcIjB4ZDI2MTE0Y2Q2ZWUyODlhY2NmODIzNTBjOGQ4NDg3ZmVkYjhhMGMwN1wiO1xuICAgIGNvbnN0IE1LUiA9IFwiMHg5ZjhGNzJhQTkzMDRjOEI1OTNkNTU1RjEyZUY2NTg5Y0MzQTU3OUEyXCI7XG4gICAgY29uc3QgVVNEVCA9IFwiMHg4ZGQ1ZmJjZTJmNmE5NTZjMzAyMmJhMzY2Mzc1OTAxMWRkNTFlNzNlXCI7XG4gICAgY29uc29sZS5sb2coXCJuZXdJZFwiLCBuZXdJZClcbiAgICAvLyBjb25zdCBbUHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApXG4gICAgLy8gY29uc3QgW0hhc2gsIHNldEhhc2hdID0gdXNlU3RhdGUoMClcbiAgICBhc3luYyBmdW5jdGlvbiBvblNhdmUodmFsdWVpbnB1dDogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVpbnB1dFwiLCB2YWx1ZWlucHV0KTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywgeyAvL0VUSFxuICAgICAgICAgICAgdmFsdWVpbnB1dCwgLy8wLjAwNSDguITguYjguLLguJfguLXguYjguIHguKPguK3guIHguYPguJnguIrguYjguK3guIfguK3guYjguLLguJnguLHguYnguJnguYHguKvguKXguLBcbiAgICAgICAgICAgIGZyb210b2tlbjogV0VUSCwgLy9XRVRIIC1NS1JcbiAgICAgICAgICAgIHRvdG9rZW46TUtSLFxuICAgICAgICB9KVxuICAgICAgICBzZXRQcmljZShyZXNwb25zZS5kYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhcImZyb20gbm9kZSBcIixyZXNwb25zZS5kYXRhKVxuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywge1xuICAgICAgICAgICAgLy8gdmFsdWVpbnB1dDogdmFsdWVpbnB1dCxcbiAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlLmRhdGEudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGZyb210b2tlbjogTUtSLCAvL1dFVEggLU1LUlxuICAgICAgICAgICAgdG90b2tlbjpVU0RULFxuICAgICAgICB9KVxuICAgICAgICBzZXRQcmljZTEocmVzcG9uc2UyLmRhdGEpXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMyA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7XG4gICAgICAgICAgICAvLyB2YWx1ZWlucHV0OiB2YWx1ZWlucHV0LFxuICAgICAgICAgICAgdmFsdWVpbnB1dDogcmVzcG9uc2UyLmRhdGEudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGZyb210b2tlbjogVVNEVCwgLy9XRVRIIC1NS1JcbiAgICAgICAgICAgIHRvdG9rZW46V0VUSCxcbiAgICAgICAgfSlcbiAgICAgICAgc2V0UHJpY2UyKHJlc3BvbnNlMy5kYXRhKVxuICAgIC8vICAgICBjb25zdCByZXNwb25zZTQgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywge1xuICAgIC8vICAgICAgICAgLy8gdmFsdWVpbnB1dDogdmFsdWVpbnB1dCxcbiAgICAvLyAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlMy5kYXRhLFxuICAgIC8vICAgICAgICAgLy9yZXNwb25zZTQgPSBldGhcbiAgICAvLyAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRVRIOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjb2luXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJZChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIE1LUjo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIHZhbHVlPXtQcmljZX0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgVVNEVDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIEVUSDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TYXZlKG5ld0lkKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFeGNoYW5nIFRva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/totalgetcoin.tsx\n");

/***/ })

})