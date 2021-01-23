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
  var data = Object(D_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display:flex;\n    align-items:center;\n    padding-right:15px;\n    button{\n        cursor: pointer;\n        font-size:20px;\n        border:none;\n        outline:none;\n        background:transparent;\n        margin-left:15px;\n        color:#616060;\n\n    }\n\n    @media (min-width:1024px){\n        display:none;\n    }\n    \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 50px;\n    height:50px;\n    padding-left:15px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_NSC_The_arbitrage_NSC_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    position:relative;\n    align-items:content;\n\n    a{\n        font-weight:500;\n    }\n"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0NvbXBvbmVudHMvSGVhZGVyL3N0eWxlZC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQm94X2hlYWRlciIsIkJveF9sb2dvIiwiTG9nbyIsImltZyIsIk1lbnVfaXNNb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtBQWdCQSxJQUFNQyxVQUFVLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWhCO0FBTUEsSUFBTUUsUUFBUSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWLG9CQUFkO0FBVUEsSUFBTUcsSUFBSSxHQUFHSix5REFBTSxDQUFDSyxHQUFWLG9CQUFWO0FBTUEsSUFBTUMsYUFBYSxHQUFHTix5REFBTSxDQUFDQyxHQUFWLG9CQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Ib21lL21haW4uOWJlZWNkOTZjNmE3NzdiZWM1NDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5IDogZmxleDtcclxuICAgIHdpZHRoIDogMTAwdncgO1xyXG4gICAgYm94LXNpemluZyA6IGJvcmRlci1ib3g7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXIgO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuNSk7XHJcbiAgICBoZWlnaHQ6NjdweDtcclxuICAgIHBhZGRpbmc6IHJlbGF0aXZlO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoIDogNzY4cHgpe1xyXG4gICAgICAgIGhlaWdodDoxMTBweDtcclxuICAgIH1cclxuXHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJveF9oZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheSA6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJveF9sb2dvID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGFsaWduLWl0ZW1zOmNvbnRlbnQ7XHJcblxyXG4gICAgYXtcclxuICAgICAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudV9pc01vYmlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgY29sb3I6IzYxNjA2MDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MTAyNHB4KXtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuYDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=