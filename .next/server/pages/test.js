module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/test.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layouts/footer.tsx":
/*!***************************************!*\
  !*** ./components/layouts/footer.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footes; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\AToMixz\\Desktop\\NSC\\nscno1\\components\\layouts\\footer.tsx";

function Footes({
  style
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: style,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      style: {
        paddingLeft: 240
      },
      children: "copyright \xA9 2020 MasterOfNodeJs"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/layouts/header.tsx":
/*!***************************************!*\
  !*** ./components/layouts/header.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\AToMixz\\Desktop\\NSC\\nscno1\\components\\layouts\\header.tsx";











const drawerWidth = 240;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  grow: {
    flexGrow: 1
  }
}));

const onclickLogin = () => {
  //arrow function
  next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/stock");
};

function Header() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
      position: "fixed",
      className: classes.appBar,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
          variant: "h6",
          noWrap: true,
          children: "Arbitrage trading"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.grow
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this), "       ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
            "aria-label": "show 4 new mails",
            color: "inherit",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7___default.a, {
              badgeContent: 4,
              color: "secondary",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
            "aria-label": "show 17 new notifications",
            color: "inherit",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7___default.a, {
              badgeContent: 17,
              color: "secondary",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
            edge: "end",
            "aria-label": "account of current user",
            "aria-haspopup": "true",
            onClick: () => {
              next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/login");
            },
            color: "inherit",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/layouts/layout.tsx":
/*!***************************************!*\
  !*** ./components/layouts/layout.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./components/layouts/footer.tsx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./components/layouts/header.tsx");

var _jsxFileName = "C:\\Users\\AToMixz\\Desktop\\NSC\\nscno1\\components\\layouts\\layout.tsx";





const drawerWidth = 240;
const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
function Layout({
  children
}) {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "jsx-701726857" + " " + (classes.content || ""),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"] // maxWidth="sm" //small sizw = sm // md = medium // lg = lrage //sx == extrasmall
      , {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#EEEEEE",
        color: "black",
        fontSize: 13,
        textAlign: "left",
        height: 30,
        paddingLeft: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontWeight: 900
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "701726857",
      children: "body{margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVRvTWl4elxcRGVza3RvcFxcTlNDXFxuc2NubzFcXGNvbXBvbmVudHNcXGxheW91dHNcXGxheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVpQixBQUdvQyxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQVRvTWl4elxcRGVza3RvcFxcTlNDXFxuc2NubzFcXGNvbXBvbmVudHNcXGxheW91dHNcXGxheW91dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUsIFRvb2xiYXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZvb3RlcyBmcm9tICcuL2Zvb3RlcidcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51J1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcHBCYXI6IHtcclxuICAgICAgICAgICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRyYXdlcjoge1xyXG4gICAgICAgICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkcmF3ZXJQYXBlcjoge1xyXG4gICAgICAgICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkcmF3ZXJDb250YWluZXI6IHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgIH0pLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgXHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAvLyBtYXhXaWR0aD1cInNtXCIgLy9zbWFsbCBzaXp3ID0gc20gLy8gbWQgPSBtZWRpdW0gLy8gbGcgPSBscmFnZSAvL3N4ID09IGV4dHJhc21hbGxcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICAgICAgPEZvb3RlcyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VFRUVFRVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDgsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\AToMixz\\\\Desktop\\\\NSC\\\\nscno1\\\\components\\\\layouts\\\\layout.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/test.tsx":
/*!************************!*\
  !*** ./pages/test.tsx ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/layout */ "./components/layouts/layout.tsx");
/* harmony import */ var coingecko_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! coingecko-api */ "coingecko-api");
/* harmony import */ var coingecko_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(coingecko_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-table */ "material-table");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\AToMixz\\Desktop\\NSC\\nscno1\\pages\\test.tsx";




const coinGeckoClient = new coingecko_api__WEBPACK_IMPORTED_MODULE_4___default.a();




const useStylesbuttom = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
  button: {
    margin: theme.spacing(1)
  }
}));
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    maxWidth: 800
  },
  media: {
    height: 800
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    minHeight: "50vh"
  },
  test: {
    display: "flex",
    marginLeft: "500px"
  },
  testright: {
    display: "flex",
    marginLeft: "1000px",
    marginTop: "-350px"
  }
});
const useStylesRight = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    maxWidth: 350,
    marginTop: "-380px",
    marginLeft: "950px"
  },
  media: {
    height: 500
  }
});
async function getServerSideProps(context) {
  const params = {
    order: coingecko_api__WEBPACK_IMPORTED_MODULE_4___default.a.ORDER.MARKET_CAP_DESC
  };
  const result = await coinGeckoClient.coins.markets({
    params
  });
  return {
    props: {
      result
    }
  };
}
function Test(props, initialId) {
  const {
    0: newId,
    1: setNewId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialId);
  const {
    0: Price,
    1: setPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: Hash,
    1: setHash
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0); //  console.log("Price", Price)

  function onSave(valueinput) {
    console.log("valueinput", valueinput);
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5001/testgetdata', {
      valueinput //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ

    }).then(response => {
      //console.log("response", response.data); //1000.000
      setPrice(response.data);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5001/swapcoin', {
        valueinput
      }).then(response => {
        //console.log("Hash", Hash.data); //1000.000
        setHash(response.data);
      });
      console.log("Hash", Hash); //1000.000
    });
  } //console.log("setPrice",Price) //1000.000


  console.log("Hash", Hash); //1000.000

  const {
    data
  } = props.result; //console.log("Show---->getAPI---->", data)

  const formatPercent = number => `${new Number(number).toFixed(2)}%`;

  const formatDollar = (number, maximumSignificantDigits) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits
  }).format(number);

  const classestest = useStylesbuttom();
  const classes = useStyles();
  const classesRight = useStylesRight();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.root,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.test,
          children: ["Balance:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            name: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 22
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: ["Token: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "name",
              value: "WETH"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 36
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          onChange: e => setNewId(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: ["Token:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "name",
              value: "MKR"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          value: Price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Enter coin",
          value: `https://kovan.etherscan.io/tx/` + Hash
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
          variant: "contained",
          color: "primary",
          className: classestest.button,
          onClick: () => onSave(newId),
          children: "Exchang Token"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_table__WEBPACK_IMPORTED_MODULE_5___default.a, {
      columns: [{
        title: "Symbol",
        field: 'image'
      }, {
        title: "Name",
        field: 'name'
      }, {
        title: "24H Change",
        field: 'price24'
      }, {
        title: "	Price ($)",
        field: 'current_price'
      }, {
        title: "	Market cap ($)",
        field: 'market_cap'
      }],
      data: data.map(coin => ({
        image: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: coin.image,
          style: {
            width: 25,
            height: 25,
            marginRight: 10
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 36
        }, this),
        name: coin.symbol.toUpperCase(),
        price24: formatPercent(coin.price_change_percentage_24h),
        current_price: coin.current_price,
        market_cap: coin.market_cap
      })) //{ image: "test", price24: "test", Price: "test", Marketcap: "test" },
      ,
      title: "Coinmarketcap"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "coingecko-api":
/*!********************************!*\
  !*** external "coingecko-api" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("coingecko-api");

/***/ }),

/***/ "material-table":
/*!*********************************!*\
  !*** external "material-table" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-table");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXRzL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXRzL2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXRzL2xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdGVzdC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvaW5nZWNrby1hcGlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXRlcmlhbC10YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiRm9vdGVzIiwic3R5bGUiLCJwYWRkaW5nTGVmdCIsImRyYXdlcldpZHRoIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJkcmF3ZXJQYXBlciIsImRyYXdlckNvbnRhaW5lciIsIm92ZXJmbG93IiwiY29udGVudCIsImZsZXhHcm93IiwicGFkZGluZyIsInNwYWNpbmciLCJncm93Iiwib25jbGlja0xvZ2luIiwiUm91dGVyIiwicHVzaCIsIkhlYWRlciIsImNsYXNzZXMiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInBvc2l0aW9uIiwibGVmdCIsImJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImZvbnRXZWlnaHQiLCJjb2luR2Vja29DbGllbnQiLCJDb2luR2Vja28iLCJ1c2VTdHlsZXNidXR0b20iLCJidXR0b24iLCJtYXJnaW4iLCJtYXhXaWR0aCIsIm1lZGlhIiwiY29udGFpbmVyIiwianVzdGlmeUNvbnRlbnQiLCJtaW5IZWlnaHQiLCJ0ZXN0IiwibWFyZ2luTGVmdCIsInRlc3RyaWdodCIsIm1hcmdpblRvcCIsInVzZVN0eWxlc1JpZ2h0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInBhcmFtcyIsIm9yZGVyIiwiT1JERVIiLCJNQVJLRVRfQ0FQX0RFU0MiLCJyZXN1bHQiLCJjb2lucyIsIm1hcmtldHMiLCJwcm9wcyIsIlRlc3QiLCJpbml0aWFsSWQiLCJuZXdJZCIsInNldE5ld0lkIiwidXNlU3RhdGUiLCJQcmljZSIsInNldFByaWNlIiwiSGFzaCIsInNldEhhc2giLCJvblNhdmUiLCJ2YWx1ZWlucHV0IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJmb3JtYXRQZXJjZW50IiwibnVtYmVyIiwiTnVtYmVyIiwidG9GaXhlZCIsImZvcm1hdERvbGxhciIsIm1heGltdW1TaWduaWZpY2FudERpZ2l0cyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJjdXJyZW5jeSIsImZvcm1hdCIsImNsYXNzZXN0ZXN0IiwiY2xhc3Nlc1JpZ2h0IiwiZSIsInRhcmdldCIsInZhbHVlIiwidGl0bGUiLCJmaWVsZCIsIm1hcCIsImNvaW4iLCJpbWFnZSIsIm1hcmdpblJpZ2h0IiwibmFtZSIsInN5bWJvbCIsInRvVXBwZXJDYXNlIiwicHJpY2UyNCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCIsImN1cnJlbnRfcHJpY2UiLCJtYXJrZXRfY2FwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy90ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy90ZXN0LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7IC8v4Liq4LmI4LiH4Lih4Liy4LiI4Liy4LiBIExBWU9VVCA9PT4gQ09NUE9ORU5UIFNUWUxFXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3Rlcyh7IHN0eWxlIH06IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ0xlZnQ6MjQwfX0+XHJcbiAgICAgICAgICAgY29weXJpZ2h0IMKpIDIwMjAgTWFzdGVyT2ZOb2RlSnMgXHJcbiAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgVGhlbWUsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlJztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhZGdlJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZSc7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFwcEJhcjoge1xyXG4gICAgICAgICAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHJhd2VyOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRyYXdlclBhcGVyOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRyYXdlckNvbnRhaW5lcjoge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBncm93OiB7XHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSksXHJcbik7XHJcblxyXG5jb25zdCBvbmNsaWNrTG9naW4gPSAoKSA9PiB7IC8vYXJyb3cgZnVuY3Rpb25cclxuICAgIFJvdXRlci5wdXNoKFwiL3N0b2NrXCIpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblxyXG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJiaXRyYWdlIHRyYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9PjwvZGl2PiAgICAgICB7LypmbGV4R3JvdyA9IOC4l+C4s+C5g+C4q+C5ieC4lOC5ieC4suC4meC4peC5iOC4suC4h+C4hOC4s+C4quC4seC5iOC4h+C5hOC4m+C4iuC4tOC4lOC4guC4p+C4siovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvdyA0IG5ldyBtYWlsc1wiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17NH0gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFpbEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3cgMTcgbmV3IG5vdGlmaWNhdGlvbnNcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezE3fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWNjb3VudCBvZiBjdXJyZW50IHVzZXJcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudENpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lLCBUb29sYmFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGb290ZXMgZnJvbSAnLi9mb290ZXInXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXHJcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXBwQmFyOiB7XHJcbiAgICAgICAgICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkcmF3ZXI6IHtcclxuICAgICAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHJhd2VyUGFwZXI6IHtcclxuICAgICAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHJhd2VyQ29udGFpbmVyOiB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICB9KSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIFxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgLy8gbWF4V2lkdGg9XCJzbVwiIC8vc21hbGwgc2l6dyA9IHNtIC8vIG1kID0gbWVkaXVtIC8vIGxnID0gbHJhZ2UgLy9zeCA9PSBleHRyYXNtYWxsXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgIDxGb290ZXMgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFRUVFRUVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTMsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiA4LFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9oZWFkZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL2xheW91dCdcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL21lbnUnXHJcbmltcG9ydCBDb2luR2Vja28gZnJvbSAnY29pbmdlY2tvLWFwaSc7XHJcbmNvbnN0IGNvaW5HZWNrb0NsaWVudCA9IG5ldyBDb2luR2Vja28oKTtcclxuaW1wb3J0IE1hdGVyaWFsVGFibGUgZnJvbSAnbWF0ZXJpYWwtdGFibGUnXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBIYXNoIH0gZnJvbSAnY3J5cHRvJztcclxuY29uc3QgdXNlU3R5bGVzYnV0dG9tID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KSxcclxuKTtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IDgwMCxcclxuICAgIH0sXHJcbiAgICBtZWRpYToge1xyXG4gICAgICAgIGhlaWdodDogODAwLFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwibGVmdFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwibGVmdFwiLFxyXG4gICAgICAgIG1pbkhlaWdodDogXCI1MHZoXCIsXHJcbiAgICB9LFxyXG4gICAgdGVzdDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiNTAwcHhcIixcclxuICAgIH0sXHJcbiAgICB0ZXN0cmlnaHQ6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwMDBweFwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCItMzUwcHhcIlxyXG5cclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCB1c2VTdHlsZXNSaWdodCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIG1heFdpZHRoOiAzNTAsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIi0zODBweFwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiOTUwcHhcIixcclxuICAgIH0sXHJcbiAgICBtZWRpYToge1xyXG4gICAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgcmVzdWx0OiB7IGRhdGE6IGFueTsgfTtcclxuICAgIGluaXRpYWxJZDogYW55LFxyXG4gICAgdmFsdWVpbnB1dDogYW55LFxyXG5cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICBvcmRlcjogQ29pbkdlY2tvLk9SREVSLk1BUktFVF9DQVBfREVTQ1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvaW5HZWNrb0NsaWVudC5jb2lucy5tYXJrZXRzKHsgcGFyYW1zIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICByZXN1bHRcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QocHJvcHMsIGluaXRpYWxJZDogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gICAgY29uc3QgW25ld0lkLCBzZXROZXdJZF0gPSB1c2VTdGF0ZShpbml0aWFsSWQpXHJcbiAgICBjb25zdCBbUHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbSGFzaCwgc2V0SGFzaF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgLy8gIGNvbnNvbGUubG9nKFwiUHJpY2VcIiwgUHJpY2UpXHJcbiAgICBmdW5jdGlvbiBvblNhdmUodmFsdWVpbnB1dDogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZWlucHV0XCIsIHZhbHVlaW5wdXQpO1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90ZXN0Z2V0ZGF0YScsIHtcclxuICAgICAgICAgICAgdmFsdWVpbnB1dCwgLy8wLjAwNSDguITguYjguLLguJfguLXguYjguIHguKPguK3guIHguYPguJnguIrguYjguK3guIfguK3guYjguLLguJnguLHguYnguJnguYHguKvguKXguLBcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlLmRhdGEpOyAvLzEwMDAuMDAwXHJcbiAgICAgICAgICAgIHNldFByaWNlKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9zd2FwY29pbicsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlaW5wdXQsXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkhhc2hcIiwgSGFzaC5kYXRhKTsgLy8xMDAwLjAwMFxyXG4gICAgICAgICAgICAgICAgc2V0SGFzaChyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIYXNoXCIsIEhhc2gpIC8vMTAwMC4wMDBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwic2V0UHJpY2VcIixQcmljZSkgLy8xMDAwLjAwMFxyXG4gICAgY29uc29sZS5sb2coXCJIYXNoXCIsSGFzaCkgLy8xMDAwLjAwMFxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcy5yZXN1bHQ7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiU2hvdy0tLS0+Z2V0QVBJLS0tLT5cIiwgZGF0YSlcclxuICAgIGNvbnN0IGZvcm1hdFBlcmNlbnQgPSBudW1iZXIgPT5cclxuICAgICAgICBgJHtuZXcgTnVtYmVyKG51bWJlcikudG9GaXhlZCgyKX0lYFxyXG5cclxuICAgIGNvbnN0IGZvcm1hdERvbGxhciA9IChudW1iZXIsIG1heGltdW1TaWduaWZpY2FudERpZ2l0cykgPT5cclxuICAgICAgICBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXHJcbiAgICAgICAgICAgICdlbi1VUycsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mb3JtYXQobnVtYmVyKTtcclxuICAgIGNvbnN0IGNsYXNzZXN0ZXN0ID0gdXNlU3R5bGVzYnV0dG9tKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzUmlnaHQgPSB1c2VTdHlsZXNSaWdodCgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCYWxhbmNlOlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbjogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT1cIldFVEhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW46XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9XCJNS1JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIHZhbHVlPXtQcmljZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29pblwiIHZhbHVlPXtgaHR0cHM6Ly9rb3Zhbi5ldGhlcnNjYW4uaW8vdHgvYCtIYXNofSAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN0ZXN0LmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TYXZlKG5ld0lkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEV4Y2hhbmcgVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJTeW1ib2xcIiwgZmllbGQ6ICdpbWFnZScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIk5hbWVcIiwgZmllbGQ6ICduYW1lJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiMjRIIENoYW5nZVwiLCBmaWVsZDogJ3ByaWNlMjQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJcdFByaWNlICgkKVwiLCBmaWVsZDogJ2N1cnJlbnRfcHJpY2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJcdE1hcmtldCBjYXAgKCQpXCIsIGZpZWxkOiAnbWFya2V0X2NhcCcgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoY29pbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogPGltZyBzcmM9e2NvaW4uaW1hZ2V9IHN0eWxlPXt7IHdpZHRoOiAyNSwgaGVpZ2h0OiAyNSwgbWFyZ2luUmlnaHQ6IDEwIH19IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY29pbi5zeW1ib2wudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlMjQ6IGZvcm1hdFBlcmNlbnQoY29pbi5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wcmljZTogY29pbi5jdXJyZW50X3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0X2NhcDogY29pbi5tYXJrZXRfY2FwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAvL3sgaW1hZ2U6IFwidGVzdFwiLCBwcmljZTI0OiBcInRlc3RcIiwgUHJpY2U6IFwidGVzdFwiLCBNYXJrZXRjYXA6IFwidGVzdFwiIH0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNvaW5tYXJrZXRjYXBcIiAvPlxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvaW5nZWNrby1hcGlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==