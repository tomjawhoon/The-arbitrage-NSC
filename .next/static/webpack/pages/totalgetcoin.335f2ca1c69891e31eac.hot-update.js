webpackHotUpdate_N_E("pages/totalgetcoin",{

/***/ "./pages/totalgetcoin.tsx":
/*!********************************!*\
  !*** ./pages/totalgetcoin.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Totalgetcoin; });\n/* harmony import */ var _Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/masterofnodejs/MasterofNode/The-arbitrage-NSC/pages/totalgetcoin.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Totalgetcoin(props, initialId) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialId),\n      newId = _useState[0],\n      setNewId = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      Price = _useState2[0],\n      setPrice = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      Price1 = _useState3[0],\n      setPrice1 = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      Price2 = _useState4[0],\n      setPrice2 = _useState4[1];\n\n  var WETH = \"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\";\n  var DAI = \"0x6B175474E89094C44Da98b954EedeAC495271d0F\";\n  var OMG = \"0xd26114cd6ee289accf82350c8d8487fedb8a0c07\";\n  var MKR = \"0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2\";\n  var USDT = \"0x8dd5fbce2f6a956c3022ba3663759011dd51e73e\";\n  console.log(\"newId\", newId); // const [Price, setPrice] = useState(0)\n  // const [Hash, setHash] = useState(0)\n\n  function onSave(_x) {\n    return _onSave.apply(this, arguments);\n  }\n\n  function _onSave() {\n    _onSave = Object(_Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(valueinput) {\n      var response, response2, response3, response4;\n      return _Users_masterofnodejs_MasterofNode_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"valueinput\", valueinput);\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:5001/totalcoin', {\n                //ETH\n                valueinput: valueinput,\n                //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ\n                fromtoken: WETH,\n                //WETH -MKR\n                totoken: MKR\n              });\n\n            case 3:\n              response = _context.sent;\n              setPrice(response.data);\n              _context.next = 7;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:5001/totalcoin', {\n                // valueinput: valueinput,\n                valueinput: response.data,\n                fromtoken: MKR,\n                //WETH -MKR\n                totoken: USDT\n              });\n\n            case 7:\n              response2 = _context.sent;\n              setPrice1(response2.data);\n              _context.next = 11;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:5001/totalcoin', {\n                // valueinput: valueinput,\n                valueinput: response2.data\n              });\n\n            case 11:\n              response3 = _context.sent;\n              setPrice2(response3.data);\n              _context.next = 15;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:5001/totalcoin', {\n                // valueinput: valueinput,\n                valueinput: response3.data //response4 = eth\n\n              });\n\n            case 15:\n              response4 = _context.sent;\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _onSave.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        children: [\"ETH:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\",\n          placeholder: \"Enter coin\",\n          onChange: function onChange(e) {\n            return setNewId(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        children: [\"MKR:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\",\n          placeholder: \"Enter coin\",\n          value: Price\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        children: [\"USDT:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 26\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        children: [\"ETH:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n      variant: \"contained\",\n      color: \"primary\",\n      onClick: function onClick() {\n        return onSave(newId);\n      },\n      children: \"Exchang Token\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Totalgetcoin, \"u6L9m669MI2NVolWsdEd1RAlqfM=\");\n\n_c = Totalgetcoin;\n\nvar _c;\n\n$RefreshReg$(_c, \"Totalgetcoin\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG90YWxnZXRjb2luLnRzeD8wZGNhIl0sIm5hbWVzIjpbIlRvdGFsZ2V0Y29pbiIsInByb3BzIiwiaW5pdGlhbElkIiwidXNlU3RhdGUiLCJuZXdJZCIsInNldE5ld0lkIiwiUHJpY2UiLCJzZXRQcmljZSIsIlByaWNlMSIsInNldFByaWNlMSIsIlByaWNlMiIsInNldFByaWNlMiIsIldFVEgiLCJEQUkiLCJPTUciLCJNS1IiLCJVU0RUIiwiY29uc29sZSIsImxvZyIsIm9uU2F2ZSIsInZhbHVlaW5wdXQiLCJheGlvcyIsInBvc3QiLCJmcm9tdG9rZW4iLCJ0b3Rva2VuIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzcG9uc2UyIiwicmVzcG9uc2UzIiwicmVzcG9uc2U0IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBR0E7QUFDQTtBQU1lLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxTQUE3QixFQUE2RDtBQUFBOztBQUFBLGtCQUM5Q0Msc0RBQVEsQ0FBQ0QsU0FBRCxDQURzQztBQUFBLE1BQ2pFRSxLQURpRTtBQUFBLE1BQzFEQyxRQUQwRDs7QUFBQSxtQkFFOUNGLHNEQUFRLENBQUMsQ0FBRCxDQUZzQztBQUFBLE1BRWpFRyxLQUZpRTtBQUFBLE1BRTFEQyxRQUYwRDs7QUFBQSxtQkFHNUNKLHNEQUFRLENBQUMsQ0FBRCxDQUhvQztBQUFBLE1BR2pFSyxNQUhpRTtBQUFBLE1BR3pEQyxTQUh5RDs7QUFBQSxtQkFJNUNOLHNEQUFRLENBQUMsQ0FBRCxDQUpvQztBQUFBLE1BSWpFTyxNQUppRTtBQUFBLE1BSXpEQyxTQUp5RDs7QUFLeEUsTUFBTUMsSUFBSSxHQUFHLDRDQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLDRDQUFaO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLDRDQUFaO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLDRDQUFaO0FBQ0EsTUFBTUMs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LE1BQU0sQ0FBQ2YsS0FBRCxDQUFaO0FBQUEsT0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSjtBQUFBLGtCQURKO0FBMEJIOztHQWxFdUJKLFk7O0tBQUFBLFkiLCJmaWxlIjoiLi9wYWdlcy90b3RhbGdldGNvaW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IE1hdGVyaWFsVGFibGUgZnJvbSAnbWF0ZXJpYWwtdGFibGUnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW50ZXJmYWNlIFByb3BzIHtcbiAgICByZXN1bHQ6IHsgZGF0YTogYW55OyB9O1xuICAgIGluaXRpYWxJZDogYW55LFxuICAgIHZhbHVlaW5wdXQ6IGFueSxcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvdGFsZ2V0Y29pbihwcm9wcywgaW5pdGlhbElkOiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gICAgY29uc3QgW25ld0lkLCBzZXROZXdJZF0gPSB1c2VTdGF0ZShpbml0aWFsSWQpXG4gICAgY29uc3QgW1ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtQcmljZTEsIHNldFByaWNlMV0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtQcmljZTIsIHNldFByaWNlMl0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFdFVEggPSBcIjB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMlwiO1xuICAgIGNvbnN0IERBSSA9IFwiMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGXCI7XG4gICAgY29uc3QgT01HID0gXCIweGQyNjExNGNkNmVlMjg5YWNjZjgyMzUwYzhkODQ4N2ZlZGI4YTBjMDdcIjtcbiAgICBjb25zdCBNS1IgPSBcIjB4OWY4RjcyYUE5MzA0YzhCNTkzZDU1NUYxMmVGNjU4OWNDM0E1NzlBMlwiO1xuICAgIGNvbnN0IFVTRFQgPSBcIjB4OGRkNWZiY2UyZjZhOTU2YzMwMjJiYTM2NjM3NTkwMTFkZDUxZTczZVwiO1xuXG4gICAgY29uc29sZS5sb2coXCJuZXdJZFwiLCBuZXdJZClcbiAgICAvLyBjb25zdCBbUHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApXG4gICAgLy8gY29uc3QgW0hhc2gsIHNldEhhc2hdID0gdXNlU3RhdGUoMClcbiAgICBhc3luYyBmdW5jdGlvbiBvblNhdmUodmFsdWVpbnB1dDogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVpbnB1dFwiLCB2YWx1ZWlucHV0KTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywgeyAvL0VUSFxuICAgICAgICAgICAgdmFsdWVpbnB1dCwgLy8wLjAwNSDguITguYjguLLguJfguLXguYjguIHguKPguK3guIHguYPguJnguIrguYjguK3guIfguK3guYjguLLguJnguLHguYnguJnguYHguKvguKXguLBcbiAgICAgICAgICAgIGZyb210b2tlbjogV0VUSCwgLy9XRVRIIC1NS1JcbiAgICAgICAgICAgIHRvdG9rZW46TUtSLFxuICAgICAgICB9KVxuICAgICAgICBzZXRQcmljZShyZXNwb25zZS5kYXRhKVxuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywge1xuICAgICAgICAgICAgLy8gdmFsdWVpbnB1dDogdmFsdWVpbnB1dCxcbiAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICBmcm9tdG9rZW46IE1LUiwgLy9XRVRIIC1NS1JcbiAgICAgICAgICAgIHRvdG9rZW46VVNEVCxcbiAgICAgICAgfSlcbiAgICAgICAgc2V0UHJpY2UxKHJlc3BvbnNlMi5kYXRhKVxuICAgICAgICBjb25zdCByZXNwb25zZTMgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywge1xuICAgICAgICAgICAgLy8gdmFsdWVpbnB1dDogdmFsdWVpbnB1dCxcbiAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlMi5kYXRhLFxuICAgICAgICB9KVxuICAgICAgICBzZXRQcmljZTIocmVzcG9uc2UzLmRhdGEpXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlNCA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7XG4gICAgICAgICAgICAvLyB2YWx1ZWlucHV0OiB2YWx1ZWlucHV0LFxuICAgICAgICAgICAgdmFsdWVpbnB1dDogcmVzcG9uc2UzLmRhdGEsXG4gICAgICAgICAgICAvL3Jlc3BvbnNlNCA9IGV0aFxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBFVEg6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgTUtSOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjb2luXCIgdmFsdWU9e1ByaWNlfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBVU0RUOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRVRIOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNhdmUobmV3SWQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEV4Y2hhbmcgVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/totalgetcoin.tsx\n");

/***/ })

})