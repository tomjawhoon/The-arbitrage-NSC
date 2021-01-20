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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/metamasklogin.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/getWeb3.tsx":
/*!***************************!*\
  !*** ./pages/getWeb3.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);


const getWeb3 = () => new Promise((resolve, reject) => {
  window.addEventListener("load", () => {
    let web3 = window.web3;

    if (typeof web3 !== "undefined") {
      web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(web3.currentProvider);
      resolve(web3);
    } else {
      reject("No web3 instance injected, make sure MetaMask is installed.");
    }
  });
});

/* harmony default export */ __webpack_exports__["default"] = (getWeb3);

/***/ }),

/***/ "./pages/metamasklogin.tsx":
/*!*********************************!*\
  !*** ./pages/metamasklogin.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWeb3 */ "./pages/getWeb3.tsx");

var _jsxFileName = "C:\\Users\\AToMixz\\Desktop\\NSC\\nscno1\\pages\\metamasklogin.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class App extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      web3: null,
      accounts: null,
      challenge: null,
      signature: null
    });

    _defineProperty(this, "getChallenge", async () => {
      const {
        accounts
      } = this.state;
      console.log("accounts", accounts);
      console.log("show ==> accounts[0]", accounts[0]);
      const res = await fetch(`http://localhost:5001/auth/${accounts[0].toLowerCase()}`);
      this.setState({
        challenge: await res.json()
      });
    });

    _defineProperty(this, "signChallenge", async () => {
      const {
        web3,
        challenge,
        accounts
      } = this.state;
      web3.currentProvider.sendAsync({
        method: "eth_signTypedData",
        params: [challenge, accounts[0]],
        from: accounts[0]
      }, (error, res) => {
        if (error) return console.error(error);
        this.setState({
          signature: res.result
        });
      });
    });

    _defineProperty(this, "verifySignature", async () => {
      const {
        challenge,
        signature,
        accounts
      } = this.state;
      const res = await fetch(`http://localhost:5001/auth/${challenge[1].value}/${signature}`);
      const recovered = await res.text();

      if (res.status === 200 && recovered === accounts[0].toLowerCase()) {
        console.log("Signature verified");
      } else {
        console.log("Signature not verified");
      }
    });
  }

  async componentDidMount() {
    const web3 = await Object(_getWeb3__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const accounts = "0x6c25FE295Ecee6F0D8D34fC28dca2de68538fA4a";
    console.log("show accout new new ", accounts);
    this.setState({
      web3,
      accounts
    });
  }

  render() {
    const {
      web3,
      challenge,
      signature
    } = this.state;
    if (!web3) return "Loading...";
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: this.getChallenge,
        children: "Get Challenge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: this.signChallenge,
        disabled: !challenge,
        children: "Sign Challenge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: this.verifySignature,
        disabled: !signature,
        children: "Verify Signature"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), challenge && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "data",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Challenge"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
          children: JSON.stringify(challenge, null, 4)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, this), signature && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "data",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Signature"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
          children: signature
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

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

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ2V0V2ViMy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWV0YW1hc2tsb2dpbi50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsiZ2V0V2ViMyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndlYjMiLCJXZWIzIiwiY3VycmVudFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwiYWNjb3VudHMiLCJjaGFsbGVuZ2UiLCJzaWduYXR1cmUiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJmZXRjaCIsInRvTG93ZXJDYXNlIiwic2V0U3RhdGUiLCJqc29uIiwic2VuZEFzeW5jIiwibWV0aG9kIiwicGFyYW1zIiwiZnJvbSIsImVycm9yIiwicmVzdWx0IiwidmFsdWUiLCJyZWNvdmVyZWQiLCJ0ZXh0Iiwic3RhdHVzIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJnZXRDaGFsbGVuZ2UiLCJzaWduQ2hhbGxlbmdlIiwidmVyaWZ5U2lnbmF0dXJlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFD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QUNSO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLG9CQUFNeUIsSUFBSSxDQUFDQyxTQUFMLENBQWUxQixTQUFmLEVBQTBCLElBQTFCLEVBQWdDLENBQWhDO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSixFQWdCR0MsU0FBUyxpQkFDUjtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFBTUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXlCRDs7QUE1RXlCOztBQStFYkosa0VBQWYsRTs7Ozs7Ozs7Ozs7QUNqRkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvbWV0YW1hc2tsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbWV0YW1hc2tsb2dpbi50c3hcIik7XG4iLCJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5cclxuY29uc3QgZ2V0V2ViMyA9ICgpID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgICAgbGV0IHdlYjMgPSB3aW5kb3cud2ViMztcclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygd2ViMyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHdlYjMgPSBuZXcgV2ViMyh3ZWIzLmN1cnJlbnRQcm92aWRlcik7XHJcbiAgICAgICAgcmVzb2x2ZSh3ZWIzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZWplY3QoXCJObyB3ZWIzIGluc3RhbmNlIGluamVjdGVkLCBtYWtlIHN1cmUgTWV0YU1hc2sgaXMgaW5zdGFsbGVkLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRXZWIzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuL2dldFdlYjNcIjtcclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHsgd2ViMzogbnVsbCwgYWNjb3VudHM6IG51bGwsIGNoYWxsZW5nZTogbnVsbCwgc2lnbmF0dXJlOiBudWxsIH07XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3Qgd2ViMyA9IGF3YWl0IGdldFdlYjMoKTtcclxuICAgIGNvbnN0IGFjY291bnRzID0gXCIweDZjMjVGRTI5NUVjZWU2RjBEOEQzNGZDMjhkY2EyZGU2ODUzOGZBNGFcIjtcclxuICAgIGNvbnNvbGUubG9nKFwic2hvdyBhY2NvdXQgbmV3IG5ldyBcIiwgYWNjb3VudHMpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgd2ViMywgYWNjb3VudHMgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRDaGFsbGVuZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGFjY291bnRzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJhY2NvdW50c1wiLCBhY2NvdW50cylcclxuICAgIGNvbnNvbGUubG9nKFwic2hvdyA9PT4gYWNjb3VudHNbMF1cIiwgYWNjb3VudHNbMF0pXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9hdXRoLyR7YWNjb3VudHNbMF0udG9Mb3dlckNhc2UoKX1gXHJcbiAgICApO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoYWxsZW5nZTogYXdhaXQgcmVzLmpzb24oKSB9KTtcclxuICB9O1xyXG4gIC8vMHg2YzI1RkUyOTVFY2VlNkYwRDhEMzRmQzI4ZGNhMmRlNjg1MzhmQTRhXHJcbiAgc2lnbkNoYWxsZW5nZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgd2ViMywgY2hhbGxlbmdlLCBhY2NvdW50cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHdlYjMuY3VycmVudFByb3ZpZGVyLnNlbmRBc3luYyhcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJldGhfc2lnblR5cGVkRGF0YVwiLFxyXG4gICAgICAgIHBhcmFtczogW2NoYWxsZW5nZSwgYWNjb3VudHNbMF1dLFxyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvciwgcmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpZ25hdHVyZTogcmVzLnJlc3VsdCB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICB2ZXJpZnlTaWduYXR1cmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNoYWxsZW5nZSwgc2lnbmF0dXJlLCBhY2NvdW50cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo1MDAxL2F1dGgvJHtjaGFsbGVuZ2VbMV0udmFsdWV9LyR7c2lnbmF0dXJlfWBcclxuICAgICk7XHJcbiAgICBjb25zdCByZWNvdmVyZWQgPSBhd2FpdCByZXMudGV4dCgpO1xyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCAmJiByZWNvdmVyZWQgPT09IGFjY291bnRzWzBdLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJTaWduYXR1cmUgdmVyaWZpZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNpZ25hdHVyZSBub3QgdmVyaWZpZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB3ZWIzLCBjaGFsbGVuZ2UsIHNpZ25hdHVyZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGlmICghd2ViMykgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZ2V0Q2hhbGxlbmdlfT5HZXQgQ2hhbGxlbmdlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNpZ25DaGFsbGVuZ2V9IGRpc2FibGVkPXshY2hhbGxlbmdlfT5cclxuICAgICAgICAgIFNpZ24gQ2hhbGxlbmdlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnZlcmlmeVNpZ25hdHVyZX0gZGlzYWJsZWQ9eyFzaWduYXR1cmV9PlxyXG4gICAgICAgICAgVmVyaWZ5IFNpZ25hdHVyZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICB7Y2hhbGxlbmdlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YVwiPlxyXG4gICAgICAgICAgICA8aDI+Q2hhbGxlbmdlPC9oMj5cclxuICAgICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoY2hhbGxlbmdlLCBudWxsLCA0KX08L3ByZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtzaWduYXR1cmUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhXCI+XHJcbiAgICAgICAgICAgIDxoMj5TaWduYXR1cmU8L2gyPlxyXG4gICAgICAgICAgICA8cHJlPntzaWduYXR1cmV9PC9wcmU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=