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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/_error.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_error.tsx":
/*!**************************!*\
  !*** ./pages/_error.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Error; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/masterofnodejs/MasterofNode/The-arbitrage-NSC/pages/_error.tsx\";\n\n //Client side\n\n//Called in client side\nfunction Error({\n  statusCode\n}) {\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {\n    setTimeout(() => {\n      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(\"/\");\n    }, 2000);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [\"ERROR PAGE NOT : \", statusCode]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n} //Called in server side\n\nError.getInitialProps = ({\n  res,\n  err\n}) => {\n  //destructoring\n  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;\n  return {\n    statusCode\n  };\n  /*if (statusCode == 404) {\n      res.writeHead(301, { Location: \"/home\" })\n      res.end();\n      return {};\n  } else {\n      return { statusCode };\n  }*/\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZXJyb3IudHN4PzBmOGYiXSwibmFtZXMiOlsiRXJyb3IiLCJzdGF0dXNDb2RlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0NBQ2tDOztBQUtsQztBQUNlLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQztBQUFGLENBQWYsRUFBb0Q7QUFDL0RDLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsTUFBTTtBQUNsQkMsY0FBVSxDQUFDLE1BQU07QUFDYkMsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsR0FKRCxFQUlHLEVBSkg7QUFLQSxzQkFDSTtBQUFBLG9DQUNzQkwsVUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSCxDLENBRUQ7O0FBQ0FELEtBQUssQ0FBQ08sZUFBTixHQUF3QixDQUFDO0FBQUVDLEtBQUY7QUFBT0M7QUFBUCxDQUFELEtBQWtCO0FBQUU7QUFDeEMsUUFBTVIsVUFBVSxHQUFHTyxHQUFHLEdBQUdBLEdBQUcsQ0FBQ1AsVUFBUCxHQUFvQlEsR0FBRyxHQUFHQSxHQUFHLENBQUNSLFVBQVAsR0FBb0IsR0FBakU7QUFDQSxTQUFPO0FBQUVBO0FBQUYsR0FBUDtBQUNBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUMsQ0FYRCIsImZpbGUiOiIuL3BhZ2VzL19lcnJvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiOyAvL0NsaWVudCBzaWRlXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHN0YXR1c0NvZGU6IHN0cmluZ1xufVxuXG4vL0NhbGxlZCBpbiBjbGllbnQgc2lkZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3IoeyBzdGF0dXNDb2RlIH06IFByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgfSwgMjAwMClcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgRVJST1IgUEFHRSBOT1QgOiB7c3RhdHVzQ29kZX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG4vL0NhbGxlZCBpbiBzZXJ2ZXIgc2lkZVxuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVzLCBlcnIgfSkgPT4geyAvL2Rlc3RydWN0b3JpbmdcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlIH07XG4gICAgLyppZiAoc3RhdHVzQ29kZSA9PSA0MDQpIHtcbiAgICAgICAgcmVzLndyaXRlSGVhZCgzMDEsIHsgTG9jYXRpb246IFwiL2hvbWVcIiB9KVxuICAgICAgICByZXMuZW5kKCk7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geyBzdGF0dXNDb2RlIH07XG4gICAgfSovXG5cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_error.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });