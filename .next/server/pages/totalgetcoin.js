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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/totalgetcoin.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/totalgetcoin.tsx":
/*!********************************!*\
  !*** ./pages/totalgetcoin.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Totalgetcoin; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/masterofnodejs/MasterofNode/The-arbitrage-NSC/pages/totalgetcoin.tsx\";\n\n\n\nfunction Totalgetcoin(props, initialId) {\n  const {\n    0: newId,\n    1: setNewId\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(initialId);\n  const {\n    0: Price,\n    1: setPrice\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: Price1,\n    1: setPrice1\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: Price2,\n    1: setPrice2\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const WETH = \"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\";\n  const DAI = \"0x6B175474E89094C44Da98b954EedeAC495271d0F\";\n  const OMG = \"0xd26114cd6ee289accf82350c8d8487fedb8a0c07\";\n  const MKR = \"0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2\";\n  const USDT = \"0x8dd5fbce2f6a956c3022ba3663759011dd51e73e\";\n  console.log(\"newId\", newId); // const [Price, setPrice] = useState(0)\n  // const [Hash, setHash] = useState(0)\n\n  async function onSave(valueinput) {\n    console.log(\"valueinput\", valueinput);\n    const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:5001/totalcoin', {\n      //ETH\n      valueinput,\n      //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ\n      fromtoken: WETH,\n      //WETH -MKR\n      totoken: MKR\n    });\n    setPrice(response.data);\n    console.log(\"from node \", response.data);\n    const response2 = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:5001/totalcoin', {\n      // valueinput: valueinput,\n      valueinput: response.data.toString(),\n      fromtoken: MKR,\n      //WETH -MKR\n      totoken: USDT\n    });\n    setPrice1(response2.data);\n    const response3 = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:5001/totalcoin', {\n      // valueinput: valueinput,\n      valueinput: response2.data.toString(),\n      fromtoken: USDT,\n      //WETH -MKR\n      totoken: WETH\n    });\n    setPrice2(response3.data); //     const response4 = await axios.post('http://localhost:5001/totalcoin', {\n    //         // valueinput: valueinput,\n    //         valueinput: response3.data,\n    //         //response4 = eth\n    //     })\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"ETH:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\",\n          placeholder: \"Enter coin\",\n          onChange: e => setNewId(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"MKR:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\",\n          placeholder: \"Enter coin\",\n          value: Price\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"USDT:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 26\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"ETH:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"ETH:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      variant: \"contained\",\n      color: \"primary\",\n      onClick: () => onSave(newId),\n      children: \"Exchang Token\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90b3RhbGdldGNvaW4udHN4PzBkY2EiXSwibmFtZXMiOlsiVG90YWxnZXRjb2luIiwicHJvcHMiLCJpbml0aWFsSWQiLCJuZXdJZCIsInNldE5ld0lkIiwidXNlU3RhdGUiLCJQcmljZSIsInNldFByaWNlIiwiUHJpY2UxIiwic2V0UHJpY2UxIiwiUHJpY2UyIiwic2V0UHJpY2UyIiwiV0VUSCIsIkRBSSIsIk9NRyIsIk1LUiIsIlVTRFQiLCJjb25zb2xlIiwibG9nIiwib25TYXZlIiwidmFsdWVpbnB1dCIsInJlc3BvbnNlIiwiYXhpb3MiLCJwb3N0IiwiZnJvbXRva2VuIiwidG90b2tlbiIsImRhdGEiLCJyZXNwb25zZTIiLCJ0b1N0cmluZyIsInJlc3BvbnNlMyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBR0E7QUFDQTtBQU1lLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxTQUE3QixFQUE2RDtBQUN4RSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUNILFNBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ksS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLHNEQUFRLENBQUMsQ0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkosc0RBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTixzREFBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNTyxJQUFJLEdBQUcsNENBQWI7QUFDQSxRQUFNQyxHQUFHLEdBQUcsNENBQVo7QUFDQSxRQUFNQyxHQUFHLEdBQUcsNENBQVo7QUFDQSxRQUFNQyxHQUFHLEdBQUcsNENBQVo7QUFDQSxRQUFNQyxJQUFJLEdBQUcsNENBQWI7QUFDQUMs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QUE7QUFBQSxZQW5CSjtBQUFBLGtCQURKO0FBNkJIIiwiZmlsZSI6Ii4vcGFnZXMvdG90YWxnZXRjb2luLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBNYXRlcmlhbFRhYmxlIGZyb20gJ21hdGVyaWFsLXRhYmxlJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmludGVyZmFjZSBQcm9wcyB7XG4gICAgcmVzdWx0OiB7IGRhdGE6IGFueTsgfTtcbiAgICBpbml0aWFsSWQ6IGFueSxcbiAgICB2YWx1ZWlucHV0OiBhbnksXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3RhbGdldGNvaW4ocHJvcHMsIGluaXRpYWxJZDogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xuICAgIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoaW5pdGlhbElkKVxuICAgIGNvbnN0IFtQcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbUHJpY2UxLCBzZXRQcmljZTFdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbUHJpY2UyLCBzZXRQcmljZTJdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBXRVRIID0gXCIweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzJcIjtcbiAgICBjb25zdCBEQUkgPSBcIjB4NkIxNzU0NzRFODkwOTRDNDREYTk4Yjk1NEVlZGVBQzQ5NTI3MWQwRlwiO1xuICAgIGNvbnN0IE9NRyA9IFwiMHhkMjYxMTRjZDZlZTI4OWFjY2Y4MjM1MGM4ZDg0ODdmZWRiOGEwYzA3XCI7XG4gICAgY29uc3QgTUtSID0gXCIweDlmOEY3MmFBOTMwNGM4QjU5M2Q1NTVGMTJlRjY1ODljQzNBNTc5QTJcIjtcbiAgICBjb25zdCBVU0RUID0gXCIweDhkZDVmYmNlMmY2YTk1NmMzMDIyYmEzNjYzNzU5MDExZGQ1MWU3M2VcIjtcbiAgICBjb25zb2xlLmxvZyhcIm5ld0lkXCIsIG5ld0lkKVxuICAgIC8vIGNvbnN0IFtQcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMClcbiAgICAvLyBjb25zdCBbSGFzaCwgc2V0SGFzaF0gPSB1c2VTdGF0ZSgwKVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uU2F2ZSh2YWx1ZWlucHV0OiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZWlucHV0XCIsIHZhbHVlaW5wdXQpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90b3RhbGNvaW4nLCB7IC8vRVRIXG4gICAgICAgICAgICB2YWx1ZWlucHV0LCAvLzAuMDA1IOC4hOC5iOC4suC4l+C4teC5iOC4geC4o+C4reC4geC5g+C4meC4iuC5iOC4reC4h+C4reC5iOC4suC4meC4seC5ieC4meC5geC4q+C4peC4sFxuICAgICAgICAgICAgZnJvbXRva2VuOiBXRVRILCAvL1dFVEggLU1LUlxuICAgICAgICAgICAgdG90b2tlbjogTUtSLFxuICAgICAgICB9KVxuICAgICAgICBzZXRQcmljZShyZXNwb25zZS5kYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhcImZyb20gbm9kZSBcIiwgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcbiAgICAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXG4gICAgICAgICAgICB2YWx1ZWlucHV0OiByZXNwb25zZS5kYXRhLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBmcm9tdG9rZW46IE1LUiwgLy9XRVRIIC1NS1JcbiAgICAgICAgICAgIHRvdG9rZW46IFVTRFQsXG4gICAgICAgIH0pXG4gICAgICAgIHNldFByaWNlMShyZXNwb25zZTIuZGF0YSlcbiAgICAgICAgY29uc3QgcmVzcG9uc2UzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcbiAgICAgICAgICAgIC8vIHZhbHVlaW5wdXQ6IHZhbHVlaW5wdXQsXG4gICAgICAgICAgICB2YWx1ZWlucHV0OiByZXNwb25zZTIuZGF0YS50b1N0cmluZygpLFxuICAgICAgICAgICAgZnJvbXRva2VuOiBVU0RULCAvL1dFVEggLU1LUlxuICAgICAgICAgICAgdG90b2tlbjogV0VUSCxcbiAgICAgICAgfSlcbiAgICAgICAgc2V0UHJpY2UyKHJlc3BvbnNlMy5kYXRhKVxuICAgICAgICAvLyAgICAgY29uc3QgcmVzcG9uc2U0ID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3RvdGFsY29pbicsIHtcbiAgICAgICAgLy8gICAgICAgICAvLyB2YWx1ZWlucHV0OiB2YWx1ZWlucHV0LFxuICAgICAgICAvLyAgICAgICAgIHZhbHVlaW5wdXQ6IHJlc3BvbnNlMy5kYXRhLFxuICAgICAgICAvLyAgICAgICAgIC8vcmVzcG9uc2U0ID0gZXRoXG4gICAgICAgIC8vICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBFVEg6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvaW5cIiBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgTUtSOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjb2luXCIgdmFsdWU9e1ByaWNlfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBVU0RUOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRVRIOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRVRIOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNhdmUobmV3SWQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEV4Y2hhbmcgVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/totalgetcoin.tsx\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

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