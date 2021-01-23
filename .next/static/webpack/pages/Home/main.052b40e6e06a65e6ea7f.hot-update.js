webpackHotUpdate_N_E("pages/Home/main",{

/***/ "./components/Home/Components/Header/styled.tsx":
/*!******************************************************!*\
  !*** ./components/Home/Components/Header/styled.tsx ***!
  \******************************************************/
/*! exports provided: Container, Box_header, Box_logo, Logo, Menu_isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box_header", function() { return Box_header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box_logo", function() { return Box_logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu_isMobile", function() { return Menu_isMobile; });
/* harmony import */ var D_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject5() {
  var data = Object(D_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display:flex;\n    align-items:center;\n    padding-right:15px;\n    button{\n        cursor: pointer;\n        font-size:20px;\n        border:none;\n        outline:none;\n        background:transparent;\n        margin-left:15px;\n        color:#1367ce;\n\n    }\n\n    @media (min-width:425px){\n        button{\n        font-size:20px;\n    }\n    \n    @media (min-width:1024px){\n        display:none;\n    }\n    \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 50px;\n    height:50px;\n    padding-left:15px;\n    opacity:0.8;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    position:relative;\n    align-items:center;\n\n    a{\n        position:absolute;\n        top:18px;\n        left:22px;\n        margin-left:5px;\n        font-weight:700;\n        font-size:20px;\n        color:#00377a;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display : flex;\n    justify-content:space-between;\n    width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display : flex;\n    width : 100vw ;\n    box-sizing : border-box;\n    align-items:center ;\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.5);\n    height:67px;\n    padding: relative;\n\n    @media (min-width : 768px){\n        height:110px;\n    }\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Box_header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Box_logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject4());
var Menu_isMobile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0NvbXBvbmVudHMvSGVhZGVyL3N0eWxlZC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQm94X2hlYWRlciIsIkJveF9sb2dvIiwiTG9nbyIsImltZyIsIk1lbnVfaXNNb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtBQWdCQSxJQUFNQyxVQUFVLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWhCO0FBTUEsSUFBTUUsUUFBUSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWLG9CQUFkO0FBZ0JBLElBQU1HLElBQUksR0FBR0oseURBQU0sQ0FBQ0ssR0FBVixvQkFBVjtBQU9BLElBQU1DLGFBQWEsR0FBR04seURBQU0sQ0FBQ0MsR0FBVixvQkFBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvSG9tZS9tYWluLjA1MmI0MGU2ZTA2YTY1ZTZlYTdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheSA6IGZsZXg7XHJcbiAgICB3aWR0aCA6IDEwMHZ3IDtcclxuICAgIGJveC1zaXppbmcgOiBib3JkZXItYm94O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyIDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgaGVpZ2h0OjY3cHg7XHJcbiAgICBwYWRkaW5nOiByZWxhdGl2ZTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aCA6IDc2OHB4KXtcclxuICAgICAgICBoZWlnaHQ6MTEwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCb3hfaGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCb3hfbG9nbyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcblxyXG4gICAgYXtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MThweDtcclxuICAgICAgICBsZWZ0OjIycHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICBjb2xvcjojMDAzNzdhO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuaW1nYFxyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgb3BhY2l0eTowLjg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudV9pc01vYmlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgY29sb3I6IzEzNjdjZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6NDI1cHgpe1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MTAyNHB4KXtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuYDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=