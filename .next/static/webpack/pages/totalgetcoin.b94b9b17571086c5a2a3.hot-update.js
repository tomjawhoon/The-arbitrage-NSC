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
/* harmony import */ var C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\AToMixz\\Desktop\\NSC\\The-arbitrage-NSC\\pages\\totalgetcoin.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Totalgetcoin(props, initialId) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialId),
      newId = _useState[0],
      setNewId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      Price = _useState2[0],
      setPrice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      Price1 = _useState3[0],
      setPrice1 = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      Price2 = _useState4[0],
      setPrice2 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      sum = _useState5[0],
      setSum = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      total = _useState6[0],
      setTotal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      time = _useState7[0],
      setTime = _useState7[1];

  var WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  var DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  var OMG = "0xd26114cd6ee289accf82350c8d8487fedb8a0c07";
  var MKR = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
  var USDT = "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e";
  console.log("Price", Price);
  console.log("newId", newId);

  var onSave = /*#__PURE__*/function () {
    var _ref = Object(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(valueinput) {
      var response, response2, response3, timestart;
      return C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5001/totalcoin', {
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
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5001/totalcoin', {
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
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5001/totalcoin', {
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
              setTime("".concat(timestart));

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

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    console.log("total in newId", newId);

    if (total) {
      console.log("total in useEffect", total);
      setSum([].concat(Object(C_Users_AToMixz_Desktop_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(sum), [_objectSpread(_objectSpread({}, total), {}, {
        newId: "".concat(newId)
      })]));
    }
  }, [total]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        children: ["ETH:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          onChange: function onChange(e) {
            return setNewId(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        children: ["MKR:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          value: Price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        children: ["DAI:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        children: ["ETH:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick() {
        onSave(newId);
      },
      children: " Exchang Token"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(material_table__WEBPACK_IMPORTED_MODULE_6___default.a, {
      columns: [{
        title: "ETH",
        field: 'start'
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
          start: Show.newId,
          Price: Show.Price1,
          Price1: Show.Price2,
          Price2: Show.Price3
        };
      }),
      title: "Demo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG90YWxnZXRjb2luLnRzeCJdLCJuYW1lcyI6WyJUb3RhbGdldGNvaW4iLCJwcm9wcyIsImluaXRpYWxJZCIsInVzZVN0YXRlIiwibmV3SWQiLCJzZXROZXdJZCIsIlByaWNlIiwic2V0UHJpY2UiLCJQcmljZTEiLCJzZXRQcmljZTEiLCJQcmljZTIiLCJzZXRQcmljZTIiLCJzdW0iLCJzZXRTdW0iLCJ0b3RhbCIsInNldFRvdGFsIiwidGltZSIsInNldFRpbWUiLCJXRVRIIiwiREFJIiwiT01HIiwiTUtSIiwiVVNEVCIsImNvbnNvbGUiLCJsb2ciLCJvblNhdmUiLCJ2YWx1ZWlucHV0IiwiYXhpb3MiLCJwb3N0IiwiZnJvbXRva2VuIiwidG90b2tlbiIsInJlc3BvbnNlIiwiZGF0YSIsInRvU3RyaW5nIiwicmVzcG9uc2UyIiwicmVzcG9uc2UzIiwiUHJpY2UzIiwidGltZXN0YXJ0Iiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpdGxlIiwiZmllbGQiLCJtYXAiLCJTaG93Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVFlLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxTQUE3QixFQUE2RDtBQUFBOztBQUFBLGtCQUM5Q0Msc0RBQVEsQ0FBQ0QsU0FBRCxDQURzQztBQUFBLE1BQ2pFRSxLQURpRTtBQUFBLE1BQzFEQyxRQUQwRDs7QUFBQSxtQkFFOUNGLHNEQUFRLENBQUMsQ0FBRCxDQUZzQztBQUFBLE1BRWpFRyxLQUZpRTtBQUFBLE1BRTFEQyxRQUYwRDs7QUFBQSxtQkFHNUNKLHNEQUFRLENBQUMsQ0FBRCxDQUhvQztBQUFBLE1BR2pFSyxNQUhpRTtBQUFBLE1BR3pEQyxTQUh5RDs7QUFBQSxtQkFJNUNOLHNEQUFRLENBQUMsQ0FBRCxDQUpvQztBQUFB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Z0JJLHFFQUFDLHdEQUFEO0FBQ0ksYUFBTyxFQUFDLFdBRFo7QUFFSSxXQUFLLEVBQUMsU0FGVjtBQUdJLGFBQU8sRUFBRSxtQkFBTTtBQUVYZSxjQUFNLENBQUNyQixLQUFELENBQU47QUFDSCxPQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJKLGVBeUJJLHFFQUFDLHFEQUFEO0FBQ0ksYUFBTyxFQUFFLENBQ0w7QUFBRXVDLGFBQUssRUFBRSxLQUFUO0FBQWdCQyxhQUFLLEVBQUU7QUFBdkIsT0FESyxFQUVMO0FBQUVELGFBQUssRUFBRSxLQUFUO0FBQWdCQyxhQUFLLEVBQUU7QUFBdkIsT0FGSyxFQUdMO0FBQUVELGFBQUssRUFBRSxLQUFUO0FBQWdCQyxhQUFLLEVBQUU7QUFBdkIsT0FISyxFQUlMO0FBQUVELGFBQUssRUFBRSxLQUFUO0FBQWdCQyxhQUFLLEVBQUU7QUFBdkIsT0FKSyxDQURiO0FBT0ksVUFBSSxFQUFFaEMsR0FBRyxDQUFDaUMsR0FBSixDQUFRLFVBQUNDLElBQUQ7QUFBQSxlQUNUO0FBQUNDLGVBQUssRUFBQ0QsSUFBSSxDQUFDMUMsS0FBWjtBQUFtQkUsZUFBSyxFQUFFd0MsSUFBSSxDQUFDdEMsTUFBL0I7QUFBdUNBLGdCQUFNLEVBQUVzQyxJQUFJLENBQUNwQyxNQUFwRDtBQUE0REEsZ0JBQU0sRUFBRW9DLElBQUksQ0FBQ1Y7QUFBekUsU0FEUztBQUFBLE9BQVIsQ0FQVjtBQVdJLFdBQUssRUFBQztBQVhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Qko7QUFBQSxrQkFESjtBQXdDSDs7R0FwR3VCcEMsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90b3RhbGdldGNvaW4uYjk0YjliMTc1NzEwODZjNWEyYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE1hdGVyaWFsVGFibGUgZnJvbSAnbWF0ZXJpYWwtdGFibGUnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICByZXN1bHQ6IHsgZGF0YTogYW55OyB9O1xyXG4gICAgaW5pdGlhbElkOiBhbnksXHJcbiAgICB2YWx1ZWlucHV0OiBhbnksXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvdGFsZ2V0Y29pbihwcm9wcywgaW5pdGlhbElkOiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XHJcbiAgICBjb25zdCBbbmV3SWQsIHNldE5ld0lkXSA9IHVzZVN0YXRlKGluaXRpYWxJZClcclxuICAgIGNvbnN0IFtQcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtQcmljZTEsIHNldFByaWNlMV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW1ByaWNlMiwgc2V0UHJpY2UyXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbc3VtLCBzZXRTdW1dID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBXRVRIID0gXCIweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzJcIjtcclxuICAgIGNvbnN0IERBSSA9IFwiMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGXCI7XHJcbiAgICBjb25zdCBPTUcgPSBcIjB4ZDI2MTE0Y2Q2ZWUyODlhY2NmODIzNTBjOGQ4NDg3ZmVkYjhhMGMwN1wiO1xyXG4gICAgY29uc3QgTUtSID0gXCIweDlmOEY3MmFBOTMwNGM4QjU5M2Q1NTVGMTJlRjY1ODljQzNBNTc5QTJcIjtcclxuICAgIGNvbnN0IFVTRFQgPSBcIjB4OGRkNWZiY2UyZjZhOTU2YzMwMjJiYTM2NjM3NTkwMTFkZDUxZTczZVwiO1xyXG4gICAgY29uc29sZS5sb2coXCJQcmljZVwiLCBQcmljZSlcclxuICAgIGNvbnNvbGUubG9nKFwibmV3SWRcIiwgbmV3SWQpXHJcblxyXG4gICAgY29uc3Qgb25TYXZlID0gYXN5bmMgKHZhbHVlaW5wdXQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHsgLy9FVEhcclxuICAgICAgICAgICAgdmFsdWVpbnB1dCwgLy8wLjAwNSDguITguYjguLLguJfguLXguYjguIHguKPguK3guIHguYPguJnguIrguYjguK3guIfguK3guYjguLLguJnguLHguYnguJnguYHguKvguKXguLBcclxuICAgICAgICAgICAgZnJvbXRva2VuOiBXRVRILCAvL1dFVEggLU1LUlxyXG4gICAgICAgICAgICB0b3Rva2VuOiBNS1IsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL3NldFByaWNlKHJlc3BvbnNlLmRhdGEpIC8vMTBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZST00gTk9ERSA9IE1LUiA9IFwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gbm9kZSBcIiwgcmVzcG9uc2UuZGF0YSlcclxuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywge1xyXG4gICAgICAgICAgICAvLyB2YWx1ZWlucHV0OiB2YWx1ZWlucHV0LFxyXG4gICAgICAgICAgICB2YWx1ZWlucHV0OiByZXNwb25zZS5kYXRhLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGZyb210b2tlbjogTUtSLCAvL1dFVEggLU1LUlxyXG4gICAgICAgICAgICB0b3Rva2VuOiBEQUksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBzZXRQcmljZTEocmVzcG9uc2UyLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGUk9NIE5PREUgPSBEQUkgPSBcIiwgcmVzcG9uc2UyLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMyA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7XHJcbiAgICAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXHJcbiAgICAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlMi5kYXRhLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGZyb210b2tlbjogREFJLCAvL1dFVEggLU1LUlxyXG4gICAgICAgICAgICB0b3Rva2VuOiBXRVRILFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gc2V0UHJpY2UyKHJlc3BvbnNlMy5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRlJPTSBOT0RFID0gV0VUSCA9IFwiLCByZXNwb25zZTMuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdW0gPT09PT5cIiwgc3VtKVxyXG4gICAgICAgIHNldFRvdGFsKHtcclxuICAgICAgICAgICAgUHJpY2UxOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICBQcmljZTI6IHJlc3BvbnNlMi5kYXRhLFxyXG4gICAgICAgICAgICBQcmljZTM6IHJlc3BvbnNlMy5kYXRhLFxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCB0aW1lc3RhcnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgb25TYXZlKHZhbHVlaW5wdXQpIH0sIDEpO1xyXG4gICAgICAgIHNldFRpbWUoYCR7dGltZXN0YXJ0fWApXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRvdGFsIGluIG5ld0lkXCIsIG5ld0lkKVxyXG4gICAgICAgIGlmICh0b3RhbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvdGFsIGluIHVzZUVmZmVjdFwiLCB0b3RhbClcclxuICAgICAgICAgICAgc2V0U3VtKFsuLi5zdW0sIHsgLi4udG90YWwsIG5ld0lkOiBgJHtuZXdJZH1gIH1dKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt0b3RhbF0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEVUSDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBNS1I6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiB2YWx1ZT17UHJpY2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIERBSTo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtQcmljZTF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEVUSDo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtQcmljZTJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2F2ZShuZXdJZClcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID4gRXhjaGFuZyBUb2tlblxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPE1hdGVyaWFsVGFibGVcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkVUSFwiLCBmaWVsZDogJ3N0YXJ0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiTUtSXCIsIGZpZWxkOiAnUHJpY2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJEQUlcIiwgZmllbGQ6ICdQcmljZTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJFVEhcIiwgZmllbGQ6ICdQcmljZTInIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17c3VtLm1hcCgoU2hvdykgPT5cclxuICAgICAgICAgICAgICAgICAgICAoe3N0YXJ0OlNob3cubmV3SWQsIFByaWNlOiBTaG93LlByaWNlMSwgUHJpY2UxOiBTaG93LlByaWNlMiwgUHJpY2UyOiBTaG93LlByaWNlMyB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJEZW1vXCIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==