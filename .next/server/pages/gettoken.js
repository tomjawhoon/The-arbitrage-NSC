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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/gettoken.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/gettoken.tsx":
/*!****************************!*\
  !*** ./pages/gettoken.tsx ***!
  \****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var coingecko_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! coingecko-api */ "coingecko-api");
/* harmony import */ var coingecko_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(coingecko_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-table */ "material-table");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\AToMixz\\Desktop\\NSC\\The-arbitrage-NSC\\pages\\gettoken.tsx";



const coinGeckoClient = new coingecko_api__WEBPACK_IMPORTED_MODULE_3___default.a();

function Home(props) {
  const {
    data
  } = props.result;
  console.log("Show---->getAPI---->", data);

  const formatPercent = number => `${new Number(number).toFixed(2)}%`;

  const formatDollar = (number, maximumSignificantDigits) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits
  }).format(number);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Coinmarketcap clone"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Coinmarketcap clone"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "table",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Symbol"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "24H Change"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Market cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: data.map(coin => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: coin.image,
              style: {
                width: 25,
                height: 25,
                marginRight: 10
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, this), coin.symbol.toUpperCase()]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger',
              children: formatPercent(coin.price_change_percentage_24h)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: formatDollar(coin.current_price, 20)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: formatDollar(coin.market_cap, 12)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, this)]
        }, coin.id, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_table__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
        title: "Price",
        field: 'current_price'
      }, {
        title: "Market cap",
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
          lineNumber: 75,
          columnNumber: 20
        }, this),
        name: coin.symbol,
        price24: coin.price_change_percentage_24h,
        current_price: coin.current_price,
        market_cap: coin.market_cap
      })),
      title: "Demo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
async function getServerSideProps(context) {
  const params = {
    order: coingecko_api__WEBPACK_IMPORTED_MODULE_3___default.a.ORDER.MARKET_CAP_DESC
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

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ2V0dG9rZW4udHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29pbmdlY2tvLWFwaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hdGVyaWFsLXRhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiY29pbkdlY2tvQ2xpZW50IiwiQ29pbkdlY2tvIiwiSG9tZSIsInByb3BzIiwiZGF0YSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtYXRQZXJjZW50IiwibnVtYmVyIiwiTnVtYmVyIiwidG9GaXhlZCIsImZvcm1hdERvbGxhciIsIm1heGltdW1TaWduaWZpY2FudERpZ2l0cyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFwIiwiY29pbiIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsInN5bWJvbCIsInRvVXBwZXJDYXNlIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoIiwiY3VycmVudF9wcmljZSIsIm1hcmtldF9jYXAiLCJpZCIsInRpdGxlIiwiZmllbGQiLCJuYW1lIiwicHJpY2UyNCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJvcmRlciIsIk9SREVSIiwiTUFSS0VUX0NBUF9ERVNDIiwiY29pbnMiLCJtYXJrZXRzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFA7QUFLQVMsWUFBSSxFQUFDYixJQUFJLENBQUNLLE1BTFY7QUFNQVMsZUFBTyxFQUFDZCxJQUFJLENBQUNPLDJCQU5iO0FBT0FDLHFCQUFhLEVBQUNSLElBQUksQ0FBQ1EsYUFQbkI7QUFRQUMsa0JBQVUsRUFBQ1QsSUFBSSxDQUFDUztBQVJoQixPQURPLENBQVQsQ0FUSjtBQXVCRSxXQUFLLEVBQUM7QUF2QlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVFRDtBQUVNLGVBQWVNLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUNoRCxRQUFNQyxNQUFNLEdBQUc7QUFDYkMsU0FBSyxFQUFFdkMsb0RBQVMsQ0FBQ3dDLEtBQVYsQ0FBZ0JDO0FBRFYsR0FBZjtBQUdBLFFBQU1yQyxNQUFNLEdBQUcsTUFBTUwsZUFBZSxDQUFDMkMsS0FBaEIsQ0FBc0JDLE9BQXRCLENBQThCO0FBQUVMO0FBQUYsR0FBOUIsQ0FBckI7QUFDQSxTQUFPO0FBQ0xwQyxTQUFLLEVBQUU7QUFDTEU7QUFESztBQURGLEdBQVA7QUFLRCxDOzs7Ozs7Ozs7OztBQ3pHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBLDBDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2dldHRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9nZXR0b2tlbi50c3hcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IENvaW5HZWNrbyBmcm9tICdjb2luZ2Vja28tYXBpJztcclxuY29uc3QgY29pbkdlY2tvQ2xpZW50ID0gbmV3IENvaW5HZWNrbygpO1xyXG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzLnJlc3VsdDtcclxuICBjb25zb2xlLmxvZyhcIlNob3ctLS0tPmdldEFQSS0tLS0+XCIsIGRhdGEpXHJcbiAgY29uc3QgZm9ybWF0UGVyY2VudCA9IG51bWJlciA9PlxyXG4gICAgYCR7bmV3IE51bWJlcihudW1iZXIpLnRvRml4ZWQoMil9JWBcclxuXHJcbiAgY29uc3QgZm9ybWF0RG9sbGFyID0gKG51bWJlciwgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzKSA9PlxyXG4gICAgbmV3IEludGwuTnVtYmVyRm9ybWF0KFxyXG4gICAgICAnZW4tVVMnLFxyXG4gICAgICB7XHJcbiAgICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxyXG4gICAgICAgIG1heGltdW1TaWduaWZpY2FudERpZ2l0c1xyXG4gICAgICB9KVxyXG4gICAgICAuZm9ybWF0KG51bWJlcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Db2lubWFya2V0Y2FwIGNsb25lPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgxPkNvaW5tYXJrZXRjYXAgY2xvbmU8L2gxPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5TeW1ib2w8L3RoPlxyXG4gICAgICAgICAgICA8dGg+MjRIIENoYW5nZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5NYXJrZXQgY2FwPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoY29pbiA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2NvaW4uaWR9PlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtjb2luLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjUsIGhlaWdodDogMjUsIG1hcmdpblJpZ2h0OiAxMCB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtjb2luLnN5bWJvbC50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb2luLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgKSA6ICd0ZXh0LWRhbmdlcid9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtmb3JtYXRQZXJjZW50KGNvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57Zm9ybWF0RG9sbGFyKGNvaW4uY3VycmVudF9wcmljZSwgMjApfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntmb3JtYXREb2xsYXIoY29pbi5tYXJrZXRfY2FwLCAxMil9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAge3RpdGxlOiBcIlN5bWJvbFwiLCBmaWVsZDogJ2ltYWdlJyB9LFxyXG4gICAgICAgICAge3RpdGxlOiBcIk5hbWVcIiwgZmllbGQ6ICduYW1lJyB9LFxyXG4gICAgICAgICAge3RpdGxlOiBcIjI0SCBDaGFuZ2VcIiwgZmllbGQ6ICdwcmljZTI0JyB9LFxyXG4gICAgICAgICAge3RpdGxlOiBcIlByaWNlXCIsIGZpZWxkOiAnY3VycmVudF9wcmljZScgfSxcclxuICAgICAgICAgIHt0aXRsZTogXCJNYXJrZXQgY2FwXCIsIGZpZWxkOiAnbWFya2V0X2NhcCcgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAgIGRhdGE9e1xyXG4gICAgICAgICAgZGF0YS5tYXAoKGNvaW4pPT4gKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17Y29pbi5pbWFnZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI1LCBoZWlnaHQ6IDI1LCBtYXJnaW5SaWdodDogMTAgfX1cclxuICAgICAgICAgIC8+LFxyXG4gICAgICAgICAgICBuYW1lOmNvaW4uc3ltYm9sLFxyXG4gICAgICAgICAgICBwcmljZTI0OmNvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoLFxyXG4gICAgICAgICAgICBjdXJyZW50X3ByaWNlOmNvaW4uY3VycmVudF9wcmljZSxcclxuICAgICAgICAgICAgbWFya2V0X2NhcDpjb2luLm1hcmtldF9jYXAsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApKX1cclxuICAgICBcclxuICAgICAgICB0aXRsZT1cIkRlbW9cIiAvPlxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICBvcmRlcjogQ29pbkdlY2tvLk9SREVSLk1BUktFVF9DQVBfREVTQ1xyXG4gIH07XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29pbkdlY2tvQ2xpZW50LmNvaW5zLm1hcmtldHMoeyBwYXJhbXMgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHJlc3VsdFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29pbmdlY2tvLWFwaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXRlcmlhbC10YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=