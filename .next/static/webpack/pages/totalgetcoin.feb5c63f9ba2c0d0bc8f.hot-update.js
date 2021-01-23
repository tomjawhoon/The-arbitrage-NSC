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
  console.log("newId", newId);

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
          lineNumber: 76,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["MKR:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          value: Price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["DAI:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["ETH:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          value: Price2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick() {
        onSave(newId);
      },
      children: " Exchang Token"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(material_table__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
          Price: Show.Price1,
          Price1: Show.Price2,
          Price2: Show.Price3
        };
      }),
      title: "Demo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG90YWxnZXRjb2luLnRzeCJdLCJuYW1lcyI6WyJUb3RhbGdldGNvaW4iLCJwcm9wcyIsImluaXRpYWxJZCIsInVzZVN0YXRlIiwibmV3SWQiLCJzZXROZXdJZCIsIlByaWNlIiwic2V0UHJpY2UiLCJQcmljZTEiLCJzZXRQcmljZTEiLCJQcmljZTIiLCJzZXRQcmljZTIiLCJzdW0iLCJzZXRTdW0iLCJ0b3RhbCIsInNldFRvdGFsIiwidGltZSIsInNldFRpbWUiLCJXRVRIIiwiREFJIiwiT01HIiwiTUtSIiwiVVNEVCIsImNvbnNvbGUiLCJsb2ciLCJvblNhdmUiLCJ2YWx1ZWlucHV0IiwiYXhpb3MiLCJwb3N0IiwiZnJvbXRva2VuIiwidG90b2tlbiIsInJlc3BvbnNlIiwiZGF0YSIsInRvU3RyaW5nIiwicmVzcG9uc2UyIiwicmVzcG9uc2UzIiwiUHJpY2UzIiwidGltZXN0YXJ0Iiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpdGxlIiwiZmllbGQiLCJtYXAiLCJTaG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFRZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QkMsU0FBN0IsRUFBNkQ7QUFBQTs7QUFBQSxrQkFDOUNDLHNEQUFRLENBQUNELFNBQUQsQ0FEc0M7QUFBQSxNQUNqRUUsS0FEaUU7QUFBQSxNQUMxREMsUUFEMEQ7O0FBQUEsbUJBRTlDRixzREFBUSxDQUFDLENBQUQsQ0FGc0M7QUFBQSxNQUVqRUcsS0FGaUU7QUFBQSxNQUUxREMsUUFGMEQ7O0FBQUEsbUJBRzVDSixzREFBUSxDQUFDLENBQUQsQ0FIb0M7QUFBQSxNQUdqRUssTUFIaUU7QUFBQSxNQUd6REMsU0FIeUQ7O0FBQUEsbUJBSTVDTixzREFBUSxDQUFDLENBQUQsQ0FKb0M7QUFBQSxNQUlqRU8sTUFKaUU7QUFBQSxNQUl6REMsU0FKeUQ7O0FBQUEsbUJBS2xEUixzREFBUSxDQUFDLEVBQUQsQ0FMMEM7QUFBQSxNQUtqRVMsR0FMaUU7QUFBQSxNQUs1REMsTUFMNEQ7O0FBQUEsbUJBTTlDVixzREFBUSxDQUFDLEVBQUQsQ0FOc0M7QUFBQSxNQU1qRVcsS0FOaUU7QUFBQSxNQU0xREMsUUFOMEQ7O0FBQUEsbUJBT2hEWixzREFBUSxDQUFDLEVBQUQsQ0FQd0M7QUFBQSxNQU9qRWEsSUFQaUU7QUFBQSxNQU8zREMsT0FQMkQ7O0FBUXhFLE1BQU1DLElBQUksR0FBRyw0Q0FBYjtBQUNBLE1BQU1DLEdBQUcsR0FBRyw0Q0FBWjtBQUNBLE1BQU1DLEdBQUcsR0FBRyw0Q0FBWjtBQUNBLE1BQU1DLEdBQUcsR0FBRyw0Q0FBWjtBQUNBLE1BQU1DLElBQUksR0FBRyw0Q0FBYjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCbEIsS0FBckI7QUFDQWlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJwQixLQUFyQjs7QUFFQSxNQUFNcUIsTUFBTTtBQUFBLG9UQUFHLGlCQUFPQyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1lDLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxpQ0FBWCxFQUE4QztBQUFFO0FBQ25FRiwwQkFBVSxFQUFWQSxVQURpRTtBQUNyRDtBQUNaRyx5QkFBUyxFQUFFWCxJQUZzRDtBQUVoRDtBQUNqQlksdUJBQU8sRUFBRVQ7QUFId0QsZUFBOUMsQ0FEWjs7QUFBQTtBQUNMVSxzQkFESztBQU1YO0FBQ0FSLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ08sUUFBUSxDQUFDQyxJQUEzQyxFQVBXLENBUVg7O0FBUlc7QUFBQSxxQkFTYUwsNENBQUssQ0FBQ0MsSUFBTixDQUFXLGlDQUFYLEVBQThDO0FBQ2xFO0FBQ0FGLDBCQUFVLEVBQUVLLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxRQUFkLEVBRnNEO0FBR2xFSix5QkFBUyxFQUFFUixHQUh1RDtBQUdsRDtBQUNoQlMsdUJBQU8sRUFBRVg7QUFKeUQsZUFBOUMsQ0FUYjs7QUFBQTtBQVNMZSx1QkFUSztBQWVYO0FBQ0FYLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ1UsU0FBUyxDQUFDRixJQUE1QztBQWhCVztBQUFBLHFCQWlCYUwsNENBQUssQ0FBQ0MsSUFBTixDQUFXLGlDQUFYLEVBQThDO0FBQ2xFO0FBQ0FGLDBCQUFVLEVBQUVRLFNBQVMsQ0FBQ0YsSUFBVixDQUFlQyxRQUFmLEVBRnNEO0FBR2xFSix5QkFBUyxFQUFFVixHQUh1RDtBQUdsRDtBQUNoQlcsdUJBQU8sRUFBRVo7QUFKeUQsZUFBOUMsQ0FqQmI7O0FBQUE7QUFpQkxpQix1QkFqQks7QUF1Qlg7QUFDQVoscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DVyxTQUFTLENBQUNILElBQTdDO0FBQ0FULHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCWixHQUF6QjtBQUNBRyxzQkFBUSxDQUFDO0FBQ0xQLHNCQUFNLEVBQUV1QixRQUFRLENBQUNDLElBRFo7QUFFTHRCLHNCQUFNLEVBQUV3QixTQUFTLENBQUNGLElBRmI7QUFHTEksc0JBQU0sRUFBRUQsU0FBUyxDQUFDSDtBQUhiLGVBQUQsQ0FBUjtBQU9NSyx1QkFqQ0ssR0FpQ09DLFVBQVUsQ0FBQyxZQUFZO0FBQUViLHNCQUFNLENBQUNDLFVBQUQsQ0FBTjtBQUFvQixlQUFuQyxFQUFxQyxDQUFyQyxDQWpDakI7QUFrQ1hULHFCQUFPLFdBQUlvQixTQUFKLEVBQVA7O0FBbENXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5aLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFxQ0FjLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUl6QixLQUFKLEVBQVc7QUFDUEQsWUFBTSxrS0FBS0QsR0FBTCxJQUFVRSxLQUFWLEdBQU47QUFDSDtBQUNKLEdBSlEsRUFJTixDQUFDQSxLQUFELENBSk0sQ0FBVDtBQUtBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSTtBQUFBLHdDQUNRO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsY0FBSSxFQUFDLE1BQXhCO0FBQStCLHFCQUFXLEVBQUMsWUFBM0M7QUFBd0Qsa0JBQVEsRUFBRSxrQkFBQzBCLENBQUQ7QUFBQSxtQkFBT25DLFFBQVEsQ0FBQ21DLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBQSx3Q0FDUTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGNBQUksRUFBQyxNQUF4QjtBQUErQixxQkFBVyxFQUFDLFlBQTNDO0FBQXdELGVBQUssRUFBRXBDO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFPSTtBQUFBLHdDQUNRO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsY0FBSSxFQUFDLE1BQXhCO0FBQStCLGVBQUssRUFBRUU7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQVVJO0FBQUEsd0NBQ1E7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFJLEVBQUMsTUFBeEI7QUFBK0IsZUFBSyxFQUFFRTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBZUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZKLGVBZ0JJLHFFQUFDLHdEQUFEO0FBQ0ksYUFBTyxFQUFDLFdBRFo7QUFFSSxXQUFLLEVBQUMsU0FGVjtBQUdJLGFBQU8sRUFBRSxtQkFBTTtBQUVYZSxjQUFNLENBQUNyQixLQUFELENBQU47QUFDSCxPQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJKLGVBeUJJLHFFQUFDLHFEQUFEO0FBQ0ksYUFBTyxFQUFFLENBQ0w7QUFBRXVDLGFBQUssRUFBRSxLQUFUO0FBQWdCQyxhQUFLLEVBQUU7QUFBdkIsT0FESyxFQUVMO0FBQUVELGFBQUssRUFBRSxLQUFUO0FBQWdCQyxhQUFLLEVBQUU7QUFBdkIsT0FGSyxFQUdMO0FBQUVELGFBQUssRUFBRSxLQUFUO0FBQWdCQyxhQUFLLEVBQUU7QUFBdkIsT0FISyxFQUlMO0FBQUVELGFBQUssRUFBRSxLQUFUO0FBQWdCQyxhQUFLLEVBQUU7QUFBdkIsT0FKSyxDQURiO0FBT0ksVUFBSSxFQUFFaEMsR0FBRyxDQUFDaUMsR0FBSixDQUFRLFVBQUNDLElBQUQ7QUFBQSxlQUNUO0FBQUV4QyxlQUFLLEVBQUV3QyxJQUFJLENBQUN0QyxNQUFkO0FBQXNCQSxnQkFBTSxFQUFFc0MsSUFBSSxDQUFDcEMsTUFBbkM7QUFBMkNBLGdCQUFNLEVBQUVvQyxJQUFJLENBQUNWO0FBQXhELFNBRFM7QUFBQSxPQUFSLENBUFY7QUFXSSxXQUFLLEVBQUM7QUFYVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJKO0FBQUEsa0JBREo7QUF3Q0g7O0dBbEd1QnBDLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG90YWxnZXRjb2luLmZlYjVjNjNmOWJhMmMwZDBiYzhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNYXRlcmlhbFRhYmxlIGZyb20gJ21hdGVyaWFsLXRhYmxlJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgcmVzdWx0OiB7IGRhdGE6IGFueTsgfTtcclxuICAgIGluaXRpYWxJZDogYW55LFxyXG4gICAgdmFsdWVpbnB1dDogYW55LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3RhbGdldGNvaW4ocHJvcHMsIGluaXRpYWxJZDogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gICAgY29uc3QgW25ld0lkLCBzZXROZXdJZF0gPSB1c2VTdGF0ZShpbml0aWFsSWQpXHJcbiAgICBjb25zdCBbUHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbUHJpY2UxLCBzZXRQcmljZTFdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtQcmljZTIsIHNldFByaWNlMl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3N1bSwgc2V0U3VtXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSh7fSlcclxuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgV0VUSCA9IFwiMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyXCI7XHJcbiAgICBjb25zdCBEQUkgPSBcIjB4NkIxNzU0NzRFODkwOTRDNDREYTk4Yjk1NEVlZGVBQzQ5NTI3MWQwRlwiO1xyXG4gICAgY29uc3QgT01HID0gXCIweGQyNjExNGNkNmVlMjg5YWNjZjgyMzUwYzhkODQ4N2ZlZGI4YTBjMDdcIjtcclxuICAgIGNvbnN0IE1LUiA9IFwiMHg5ZjhGNzJhQTkzMDRjOEI1OTNkNTU1RjEyZUY2NTg5Y0MzQTU3OUEyXCI7XHJcbiAgICBjb25zdCBVU0RUID0gXCIweDhkZDVmYmNlMmY2YTk1NmMzMDIyYmEzNjYzNzU5MDExZGQ1MWU3M2VcIjtcclxuICAgIGNvbnNvbGUubG9nKFwiUHJpY2VcIiwgUHJpY2UpXHJcbiAgICBjb25zb2xlLmxvZyhcIm5ld0lkXCIsIG5ld0lkKVxyXG5cclxuICAgIGNvbnN0IG9uU2F2ZSA9IGFzeW5jICh2YWx1ZWlucHV0OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7IC8vRVRIXHJcbiAgICAgICAgICAgIHZhbHVlaW5wdXQsIC8vMC4wMDUg4LiE4LmI4Liy4LiX4Li14LmI4LiB4Lij4Lit4LiB4LmD4LiZ4LiK4LmI4Lit4LiH4Lit4LmI4Liy4LiZ4Lix4LmJ4LiZ4LmB4Lir4Lil4LiwXHJcbiAgICAgICAgICAgIGZyb210b2tlbjogV0VUSCwgLy9XRVRIIC1NS1JcclxuICAgICAgICAgICAgdG90b2tlbjogTUtSLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9zZXRQcmljZShyZXNwb25zZS5kYXRhKSAvLzEwXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGUk9NIE5PREUgPSBNS1IgPSBcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJmcm9tIG5vZGUgXCIsIHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcclxuICAgICAgICAgICAgLy8gdmFsdWVpbnB1dDogdmFsdWVpbnB1dCxcclxuICAgICAgICAgICAgdmFsdWVpbnB1dDogcmVzcG9uc2UuZGF0YS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBmcm9tdG9rZW46IE1LUiwgLy9XRVRIIC1NS1JcclxuICAgICAgICAgICAgdG90b2tlbjogREFJLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gc2V0UHJpY2UxKHJlc3BvbnNlMi5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRlJPTSBOT0RFID0gREFJID0gXCIsIHJlc3BvbnNlMi5kYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZTMgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvdG90YWxjb2luJywge1xyXG4gICAgICAgICAgICAvLyB2YWx1ZWlucHV0OiB2YWx1ZWlucHV0LFxyXG4gICAgICAgICAgICB2YWx1ZWlucHV0OiByZXNwb25zZTIuZGF0YS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBmcm9tdG9rZW46IERBSSwgLy9XRVRIIC1NS1JcclxuICAgICAgICAgICAgdG90b2tlbjogV0VUSCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHNldFByaWNlMihyZXNwb25zZTMuZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZST00gTk9ERSA9IFdFVEggPSBcIiwgcmVzcG9uc2UzLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3VtID09PT0+XCIsIHN1bSlcclxuICAgICAgICBzZXRUb3RhbCh7XHJcbiAgICAgICAgICAgIFByaWNlMTogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgUHJpY2UyOiByZXNwb25zZTIuZGF0YSxcclxuICAgICAgICAgICAgUHJpY2UzOiByZXNwb25zZTMuZGF0YSxcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgdGltZXN0YXJ0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IG9uU2F2ZSh2YWx1ZWlucHV0KSB9LCAxKTtcclxuICAgICAgICBzZXRUaW1lKGAke3RpbWVzdGFydH1gKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRvdGFsKSB7XHJcbiAgICAgICAgICAgIHNldFN1bShbLi4uc3VtLCB0b3RhbF0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RvdGFsXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgRVRIOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjb2luXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIE1LUjo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIHZhbHVlPXtQcmljZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgREFJOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e1ByaWNlMX0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgRVRIOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e1ByaWNlMn0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb25TYXZlKG5ld0lkKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPiBFeGNoYW5nIFRva2VuXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8TWF0ZXJpYWxUYWJsZVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiRVRIXCIsIGZpZWxkOiAnc3RhcnQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJNS1JcIiwgZmllbGQ6ICdQcmljZScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkRBSVwiLCBmaWVsZDogJ1ByaWNlMScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkVUSFwiLCBmaWVsZDogJ1ByaWNlMicgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtzdW0ubWFwKChTaG93KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICh7IFByaWNlOiBTaG93LlByaWNlMSwgUHJpY2UxOiBTaG93LlByaWNlMiwgUHJpY2UyOiBTaG93LlByaWNlMyB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJEZW1vXCIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==