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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\vanth\\OneDrive\\Desktop\\next-cy\\src\\components\\Product.js";


const Product = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "San pham ban chay"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-3 gap-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: " w-96",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://i.pinimg.com/236x/c4/37/2f/c4372f9f00e707767f6565b62cf929bd.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "descriptor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://i.pinimg.com/236x/c4/37/2f/c4372f9f00e707767f6565b62cf929bd.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "descriptor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://i.pinimg.com/236x/c4/37/2f/c4372f9f00e707767f6565b62cf929bd.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "descriptor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-span-2 ...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://i.pinimg.com/236x/c4/37/2f/c4372f9f00e707767f6565b62cf929bd.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "descriptor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://i.pinimg.com/236x/c4/37/2f/c4372f9f00e707767f6565b62cf929bd.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "descriptor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://i.pinimg.com/236x/c4/37/2f/c4372f9f00e707767f6565b62cf929bd.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "descriptor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-span-2 ...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://i.pinimg.com/236x/c4/37/2f/c4372f9f00e707767f6565b62cf929bd.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "descriptor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./src/components/Slider/Arrow.js":
/*!****************************************!*\
  !*** ./src/components/Slider/Arrow.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\vanth\\OneDrive\\Desktop\\next-cy\\src\\components\\Slider\\Arrow.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable no-nested-ternary */



const StyledArrow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  position: absolute;
  ${props => props.direction === "right" ? "right: 25px; top: 50%;" : ""};
  ${props => props.direction === "left" ? "left: 25px; top: 50%;" : ""};
  ${props => props.direction === "pause" ? "bottom: 65px; left: 48%" : ""};
  ${props => props.direction === "play" ? "bottom: 65px; left: 48%" : ""};
  ${props => props.playState ? "opacity: 0;" : "opacity: 1;"}

  height: 50px;
  width: 50px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(
      ${props => props.direction === "left" ? "-2" : props.direction === "right" ? "2" : props.direction === "play" ? "3" : "0"}px
    );
    &:focus {
      outline: 0;
    }
  }
`;

const Arrow = (_ref) => {
  let {
    direction,
    handleClick,
    playState,
    wrapperProps
  } = _ref,
      imgProps = _objectWithoutProperties(_ref, ["direction", "handleClick", "playState", "wrapperProps"]);

  let icon;

  switch (direction) {
    case "right":
      icon = "https://img2.pngio.com/arrow-arrow-right-chevron-chevronright-right-right-icon-icon-arrow-right-png-512_512.png";
      break;

    case "left":
      icon = "https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-left-512.png";
      break;

    case "pause":
      icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAABhYWGxsbG0tLQwMDBHR0fKysrt7e1wcHC7u7tsbGyQkJCkpKReXl4VFRU6Ojr19fVAQEAeHh4NFjK4AAABjklEQVR4nO3SW2rDQBBFQcuxZcvvx/73mo/G4BCQJpA7JFBnAZeuYVYrSZIkSZIkSZKk/9953C512S2u7C6LK+O5g+Z7++vQ0rQwMzWtXPddTF+7NZ02DKfZlVPjyq2T6q1N42nDcJ9ZuTevbLrJXh2bbzvMrByaV47dZK/Wv/L6H80r626yV4SEFSFhMkLCipAwGSFhRUiYjJCwIiRMRkhYERImIySsCAmTERJWhITJCAkrQsJkhIQVIWEyQsKKkDAZIWFFSJiMkLAiJExGSFgREiYjJKwICZMRElaEhMkICStCwmSEhBUhYTJCwoqQMBkhYUVImIyQsCIkTEZIWBESJiMkrAgJkxESVoSEyQgJK0LCZISEFSFhMkLCipAwGSFhRUiYjJCwIiRMRkhYERImIySsCAmTERJWhITJCAmrvyw8Nt92mFk5NK8cu8l+ftt9ZuX+K+8U6tF42ml25dS48uikem//bDptWpiZmlaecx8h13ncLrXeLa7sLosr47mDRpIkSZIkSZIkKd0n1Z1BHSVRBlQAAAAASUVORK5CYII=";
      break;

    case "play":
      icon = "https://i.dlpng.com/static/png/6903815_preview.png";
      break;

    default:
      break;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledArrow, _objectSpread(_objectSpread({
    onClick: handleClick,
    direction: direction,
    playState: playState
  }, wrapperProps), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", _objectSpread({
      src: icon,
      alt: "right arrow",
      className: "h-6 w-6"
    }, imgProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, undefined);
};

Arrow.propTypes = {
  handleClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  playState: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  imgProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  wrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Arrow);

/***/ }),

/***/ "./src/components/Slider/Container.js":
/*!********************************************!*\
  !*** ./src/components/Slider/Container.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\vanth\\OneDrive\\Desktop\\next-cy\\src\\components\\Slider\\Container.js";



const Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(({
  className,
  children,
  element: Element = "div",
  marginX = "mx-auto"
}, ref) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Element, {
  ref: ref,
  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("container", marginX, className),
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 5
}, undefined));
Container.propTypes = {
  marginX: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  element: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/components/Slider/Dots.js":
/*!***************************************!*\
  !*** ./src/components/Slider/Dots.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\vanth\\OneDrive\\Desktop\\next-cy\\src\\components\\Slider\\Dots.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Dots = (_ref) => {
  let {
    slides,
    activeSlide,
    wrapperProps
  } = _ref,
      dotProps = _objectWithoutProperties(_ref, ["slides", "activeSlide", "wrapperProps"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    css: styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `
  }, wrapperProps), {}, {
    children: slides.map((slide, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", _objectSpread({
      css: styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
          padding: 10px;
          margin-right: 5px;
          cursor: pointer;
          border-radius: 50%;
          background: ${activeSlide === i ? "black" : "white"};
        `
    }, dotProps), slide, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined))
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};

Dots.propTypes = {
  wrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  dotProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  slides: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  activeSlide: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Dots);

/***/ }),

/***/ "./src/components/Slider/Slide.js":
/*!****************************************!*\
  !*** ./src/components/Slider/Slide.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\vanth\\OneDrive\\Desktop\\next-cy\\src\\components\\Slider\\Slide.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Slide = (_ref) => {
  let {
    content,
    width,
    imagePosition = "center"
  } = _ref,
      wrapperProps = _objectWithoutProperties(_ref, ["content", "width", "imagePosition"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread({
    css: styled_components__WEBPACK_IMPORTED_MODULE_3__["css"]`
      height: 100%;
      width: ${width}px;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: ${imagePosition};
    `
  }, wrapperProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined);
};

Slide.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  imagePosition: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  wrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Slide);

/***/ }),

/***/ "./src/components/Slider/SliderContent.js":
/*!************************************************!*\
  !*** ./src/components/Slider/SliderContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\vanth\\OneDrive\\Desktop\\next-cy\\src\\components\\Slider\\SliderContent.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SliderContent = (_ref) => {
  let {
    translate,
    transition,
    width,
    children
  } = _ref,
      wrapperProps = _objectWithoutProperties(_ref, ["translate", "transition", "width", "children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    css: styled_components__WEBPACK_IMPORTED_MODULE_3__["css"]`
      transform: translateX(-${translate}px);
      transition: transform ease-out ${transition}s;
      height: 100%;
      width: ${width}px;
      display: flex;
    `
  }, wrapperProps), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, undefined);
};

SliderContent.propTypes = {
  translate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  transition: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  wrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (SliderContent);

/***/ }),

/***/ "./src/components/Slider/index.js":
/*!****************************************!*\
  !*** ./src/components/Slider/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Container */ "./src/components/Slider/Container.js");
/* harmony import */ var _SliderContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SliderContent */ "./src/components/Slider/SliderContent.js");
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Slide */ "./src/components/Slider/Slide.js");
/* harmony import */ var _Arrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Arrow */ "./src/components/Slider/Arrow.js");
/* harmony import */ var _Dots__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dots */ "./src/components/Slider/Dots.js");


var _jsxFileName = "C:\\Users\\vanth\\OneDrive\\Desktop\\next-cy\\src\\components\\Slider\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const useIntervalWithStop = (callback, delay) => {
  const savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const intervalId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const {
    0: currentDelay,
    1: setDelay
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(delay);
  const toggleRunning = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => setDelay(currentDelayVar => currentDelayVar === null ? delay : null), [delay]);
  const clear = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => clearInterval(intervalId.current), []); // Remember the latest function.

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    function tick() {
      savedCallback.current();
    }

    if (intervalId.current) clear();

    if (currentDelay !== null) {
      intervalId.current = setInterval(tick, currentDelay);
    }

    return clear;
  }, [currentDelay, clear]);
  return [toggleRunning, !!currentDelay];
};

const Slider = ({
  className,
  inContainer = false,
  slideInterval,
  slides,
  size = "medium",
  arrowProps,
  dotsProps,
  slideProps,
  sliderWrapperProps,
  sliderProps
}) => {
  const {
    0: width,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const transitionRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const resizeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  let togglePausePlay;
  let isPlaying;
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];
  const SIZES = {
    small: "h-1/3",
    medium: "h-1/2",
    large: "h-screen"
  };
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    activeSlide: 0,
    translate: width,
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  });
  const {
    activeSlide,
    translate,
    _slides,
    transition
  } = state;

  const handleResize = () => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      translate: width,
      transition: 0
    }));
  };

  const smoothTransition = () => {
    let _slidesClone = [];

    if (activeSlide === slides.length - 1) {
      _slidesClone = [slides[slides.length - 2], lastSlide, firstSlide];
    } else if (activeSlide === 0) {
      _slidesClone = [lastSlide, firstSlide, secondSlide];
    } else _slidesClone = slides.slice(activeSlide - 1, activeSlide + 2);

    setState(_objectSpread(_objectSpread({}, state), {}, {
      _slides: _slidesClone,
      transition: 0,
      translate: width
    }));
  };

  const nextSlide = () => setState(_objectSpread(_objectSpread({}, state), {}, {
    translate: translate + width,
    activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
  }));

  const prevSlide = () => setState(_objectSpread(_objectSpread({}, state), {}, {
    translate: 0,
    activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
  }));

  if (slideInterval) {
    const [toggle, running] = useIntervalWithStop(() => {
      nextSlide();
    }, slideInterval * 1000);
    togglePausePlay = toggle;
    isPlaying = running;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setWidth(containerRef.current.clientWidth);
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      translate: containerRef.current.clientWidth
    }));

    const smooth = e => {
      if (e.target.className.includes("SliderContent")) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = window.addEventListener("transitionend", smooth);
    const onResize = window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (transition === 0) setState(_objectSpread(_objectSpread({}, state), {}, {
      transition: 0.45
    }));
  }, [transition]);
  const Element = inContainer ? _Container__WEBPACK_IMPORTED_MODULE_4__["default"] : "div";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Element, _objectSpread(_objectSpread({
    ref: containerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(SIZES[size], "relative w-screen overflow-hidden whitespace-no-wrap p-0 m-0", className)
  }, sliderProps), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SliderContent__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
      translate: translate,
      transition: transition,
      width: width * _slides.length
    }, sliderWrapperProps), {}, {
      children: _slides.map((_slide, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Slide__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({
        width: width,
        content: _slide
      }, slideProps), _slide + i, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 11
      }, undefined))
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Arrow__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread({
      direction: "left",
      handleClick: prevSlide
    }, arrowProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Arrow__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread({
      direction: "right",
      handleClick: nextSlide
    }, arrowProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, undefined), slideInterval && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Arrow__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread({
        direction: "pause",
        playState: !isPlaying,
        handleClick: togglePausePlay
      }, arrowProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Arrow__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread({
        direction: "play",
        playState: isPlaying,
        handleClick: togglePausePlay
      }, arrowProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Dots__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread({
      slides: slides,
      activeSlide: activeSlide
    }, dotsProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 5
  }, undefined);
};

Slider.propTypes = {
  slides: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  slideInterval: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  inContainer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  arrowProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  dotsProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  slideProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  sliderWrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  sliderProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Slider */ "./src/components/Slider/index.js");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Product */ "./src/components/Product.js");


var _jsxFileName = "C:\\Users\\vanth\\OneDrive\\Desktop\\next-cy\\src\\pages\\index.js";






const Index = () => {
  const images = ["https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60", "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60", "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "wrapper-home-page",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

Index.getInitialProps = async ctx => {// ctx.store.dispatch(getHomeBanner(5));
  // ctx.store.dispatch(getHomePropose(3));
  // ctx.store.dispatch(getHomeProduct(8));
  // ctx.store.dispatch(getHomeArticle(3));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TbGlkZXIvQXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVyL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TbGlkZXIvRG90cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TbGlkZXIvU2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlckNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJQcm9kdWN0IiwiU3R5bGVkQXJyb3ciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImRpcmVjdGlvbiIsInBsYXlTdGF0ZSIsIkFycm93IiwiaGFuZGxlQ2xpY2siLCJ3cmFwcGVyUHJvcHMiLCJpbWdQcm9wcyIsImljb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nIiwiYm9vbCIsIm9iamVjdCIsIkNvbnRhaW5lciIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZWxlbWVudCIsIkVsZW1lbnQiLCJtYXJnaW5YIiwicmVmIiwiY2xhc3NOYW1lcyIsIm5vZGUiLCJEb3RzIiwic2xpZGVzIiwiYWN0aXZlU2xpZGUiLCJkb3RQcm9wcyIsImNzcyIsIm1hcCIsInNsaWRlIiwiaSIsImFycmF5IiwibnVtYmVyIiwiU2xpZGUiLCJjb250ZW50Iiwid2lkdGgiLCJpbWFnZVBvc2l0aW9uIiwiU2xpZGVyQ29udGVudCIsInRyYW5zbGF0ZSIsInRyYW5zaXRpb24iLCJ1c2VJbnRlcnZhbFdpdGhTdG9wIiwiY2FsbGJhY2siLCJkZWxheSIsInNhdmVkQ2FsbGJhY2siLCJ1c2VSZWYiLCJpbnRlcnZhbElkIiwiY3VycmVudERlbGF5Iiwic2V0RGVsYXkiLCJ1c2VTdGF0ZSIsInRvZ2dsZVJ1bm5pbmciLCJ1c2VDYWxsYmFjayIsImN1cnJlbnREZWxheVZhciIsImNsZWFyIiwiY2xlYXJJbnRlcnZhbCIsImN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJ0aWNrIiwic2V0SW50ZXJ2YWwiLCJTbGlkZXIiLCJpbkNvbnRhaW5lciIsInNsaWRlSW50ZXJ2YWwiLCJzaXplIiwiYXJyb3dQcm9wcyIsImRvdHNQcm9wcyIsInNsaWRlUHJvcHMiLCJzbGlkZXJXcmFwcGVyUHJvcHMiLCJzbGlkZXJQcm9wcyIsInNldFdpZHRoIiwidHJhbnNpdGlvblJlZiIsInJlc2l6ZVJlZiIsImNvbnRhaW5lclJlZiIsInRvZ2dsZVBhdXNlUGxheSIsImlzUGxheWluZyIsImZpcnN0U2xpZGUiLCJzZWNvbmRTbGlkZSIsImxhc3RTbGlkZSIsImxlbmd0aCIsIlNJWkVTIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsInN0YXRlIiwic2V0U3RhdGUiLCJfc2xpZGVzIiwiaGFuZGxlUmVzaXplIiwic21vb3RoVHJhbnNpdGlvbiIsIl9zbGlkZXNDbG9uZSIsInNsaWNlIiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwidG9nZ2xlIiwicnVubmluZyIsImNsaWVudFdpZHRoIiwic21vb3RoIiwiZSIsInRhcmdldCIsImluY2x1ZGVzIiwicmVzaXplIiwidHJhbnNpdGlvbkVuZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbiIsIl9zbGlkZSIsIkluZGV4IiwiaW1hZ2VzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDcEIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsT0FBZjtBQUFBLGlDQUNFO0FB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R0FBUCxJQUFlLENBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0FMRDs7QUFPZUgsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNqQ0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgPGgxPlNhbiBwaGFtIGJhbiBjaGF5PC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIuLi5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctOTZcIj5cclxuICAgICAgICAgICAgPGltZyAgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC9jNC8zNy8yZi9jNDM3MmY5ZjAwZTcwNzc2N2Y2NTY1YjYyY2Y5MjliZC5qcGdcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+bmFtZTwvaDE+XHJcbiAgICAgICAgICAgIDxwPmRlc2NyaXB0b3I8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi4uLlwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kucGluaW1nLmNvbS8yMzZ4L2M0LzM3LzJmL2M0MzcyZjlmMDBlNzA3NzY3ZjY1NjViNjJjZjkyOWJkLmpwZ1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5uYW1lPC9oMT5cclxuICAgICAgICAgICAgPHA+ZGVzY3JpcHRvcjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLi4uXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvYzQvMzcvMmYvYzQzNzJmOWYwMGU3MDc3NjdmNjU2NWI2MmNmOTI5YmQuanBnXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPm5hbWU8L2gxPlxyXG4gICAgICAgICAgICA8cD5kZXNjcmlwdG9yPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIC4uLlwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kucGluaW1nLmNvbS8yMzZ4L2M0LzM3LzJmL2M0MzcyZjlmMDBlNzA3NzY3ZjY1NjViNjJjZjkyOWJkLmpwZ1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5uYW1lPC9oMT5cclxuICAgICAgICAgICAgPHA+ZGVzY3JpcHRvcjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLi4uXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvYzQvMzcvMmYvYzQzNzJmOWYwMGU3MDc3NjdmNjU2NWI2MmNmOTI5YmQuanBnXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPm5hbWU8L2gxPlxyXG4gICAgICAgICAgICA8cD5kZXNjcmlwdG9yPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIuLi5cIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC9jNC8zNy8yZi9jNDM3MmY5ZjAwZTcwNzc2N2Y2NTY1YjYyY2Y5MjliZC5qcGdcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+bmFtZTwvaDE+XHJcbiAgICAgICAgICAgIDxwPmRlc2NyaXB0b3I8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgLi4uXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvYzQvMzcvMmYvYzQzNzJmOWYwMGU3MDc3NjdmNjU2NWI2MmNmOTI5YmQuanBnXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPm5hbWU8L2gxPlxyXG4gICAgICAgICAgICA8cD5kZXNjcmlwdG9yPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgU3R5bGVkQXJyb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICR7KHByb3BzKSA9PiAocHJvcHMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgPyBcInJpZ2h0OiAyNXB4OyB0b3A6IDUwJTtcIiA6IFwiXCIpfTtcclxuICAkeyhwcm9wcykgPT4gKHByb3BzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgPyBcImxlZnQ6IDI1cHg7IHRvcDogNTAlO1wiIDogXCJcIil9O1xyXG4gICR7KHByb3BzKSA9PiAocHJvcHMuZGlyZWN0aW9uID09PSBcInBhdXNlXCIgPyBcImJvdHRvbTogNjVweDsgbGVmdDogNDglXCIgOiBcIlwiKX07XHJcbiAgJHsocHJvcHMpID0+IChwcm9wcy5kaXJlY3Rpb24gPT09IFwicGxheVwiID8gXCJib3R0b206IDY1cHg7IGxlZnQ6IDQ4JVwiIDogXCJcIil9O1xyXG4gICR7KHByb3BzKSA9PiAocHJvcHMucGxheVN0YXRlID8gXCJvcGFjaXR5OiAwO1wiIDogXCJvcGFjaXR5OiAxO1wiKX1cclxuXHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbiAwLjFzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKFxyXG4gICAgICAkeyhwcm9wcykgPT5cclxuICAgICAgICBwcm9wcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiXHJcbiAgICAgICAgICA/IFwiLTJcIlxyXG4gICAgICAgICAgOiBwcm9wcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIlxyXG4gICAgICAgICAgPyBcIjJcIlxyXG4gICAgICAgICAgOiBwcm9wcy5kaXJlY3Rpb24gPT09IFwicGxheVwiXHJcbiAgICAgICAgICA/IFwiM1wiXHJcbiAgICAgICAgICA6IFwiMFwifXB4XHJcbiAgICApO1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQXJyb3cgPSAoe1xyXG4gIGRpcmVjdGlvbixcclxuICBoYW5kbGVDbGljayxcclxuICBwbGF5U3RhdGUsXHJcbiAgd3JhcHBlclByb3BzLFxyXG4gIC4uLmltZ1Byb3BzXHJcbn0pID0+IHtcclxuICBsZXQgaWNvbjtcclxuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgIGljb24gPVxyXG4gICAgICAgIFwiaHR0cHM6Ly9pbWcyLnBuZ2lvLmNvbS9hcnJvdy1hcnJvdy1yaWdodC1jaGV2cm9uLWNoZXZyb25yaWdodC1yaWdodC1yaWdodC1pY29uLWljb24tYXJyb3ctcmlnaHQtcG5nLTUxMl81MTIucG5nXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgaWNvbiA9XHJcbiAgICAgICAgXCJodHRwczovL2NkbjEuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9nZW5lcmFsLXVpLW91dGxpbmVkLXRoaWNrLzI0L2NoZXZyb24tbGVmdC01MTIucG5nXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInBhdXNlXCI6XHJcbiAgICAgIGljb24gPVxyXG4gICAgICAgIFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FNQUFBQUpiU0pJQUFBQVBGQk1WRVgvLy84QUFBQmhZV0d4c2JHMHRMUXdNREJIUjBmS3lzcnQ3ZTF3Y0hDN3U3dHNiR3lRa0pDa3BLUmVYbDRWRlJVNk9qcjE5ZlZBUUVBZUhoNE5Gaks0QUFBQmprbEVRVlI0bk8zU1cyckRRQkJGUWN1eFpjdnZ4LzczbW8vRzRCQ1FKcEE3SkZCbkFaZXVZVllyU1pJa1NaSWtTWktrLzk5NTNDNTEyUzJ1N0M2TEsrTzVnK1o3Kyt2UTByUXdNeld0WFBkZFRGKzdOWjAyREtmWmxWUGp5cTJUNnExTjQybkRjSjladVRldmJMckpYaDJiYnp2TXJCeWFWNDdkWksvV3YvTDZIODByNjI2eVY0U0VGU0ZoTWtMQ2lwQXdHU0ZoUlVpWWpKQ3dJaVJNUmtoWUVSSW1JeVNzQ0FtVEVSSldoSVRKQ0FrclFzSmtoSVFWSVdFeVFzS0trREFaSVdGRlNKaU1rTEFpSkV4R1NGZ1JFaVlqSkt3SUNaTVJFbGFFaE1rSUNTdEN3bVNFaEJVaFlUSkN3b3FRTUJraFlVVkltSXlRc0NJa1RFWklXQkVTSmlNa3JBZ0preEVTVm9TRXlRZ0pLMExDWklTRUZTRmhNa0xDaXBBd0dTRmhSVWlZakpDd0lpUk1Sa2hZRVJJbUl5U3NDQW1URVJKV2hJVEpDQW1ydnl3OE50OTJtRms1Tks4Y3U4bCtmdHQ5WnVYK0srOFU2dEY0Mm1sMjVkUzQ4dWlrZW0vL2JEcHRXcGlabWxhZWN4OGgxM25jTHJYZUxhN3NMb3NyNDdtRFJwSWtTWklrU1pJa0tkMG4xWjFCSFNWUkJsUUFBQUFBU1VWT1JLNUNZSUk9XCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInBsYXlcIjpcclxuICAgICAgaWNvbiA9IFwiaHR0cHM6Ly9pLmRscG5nLmNvbS9zdGF0aWMvcG5nLzY5MDM4MTVfcHJldmlldy5wbmdcIjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQXJyb3dcclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIGRpcmVjdGlvbj17ZGlyZWN0aW9ufVxyXG4gICAgICBwbGF5U3RhdGU9e3BsYXlTdGF0ZX1cclxuICAgICAgey4uLndyYXBwZXJQcm9wc31cclxuICAgID5cclxuICAgICAgPGltZyBzcmM9e2ljb259IGFsdD1cInJpZ2h0IGFycm93XCIgY2xhc3NOYW1lPVwiaC02IHctNlwiIHsuLi5pbWdQcm9wc30gLz5cclxuICAgIDwvU3R5bGVkQXJyb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbkFycm93LnByb3BUeXBlcyA9IHtcclxuICBoYW5kbGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYXlTdGF0ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaW1nUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgd3JhcHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnJvdztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBSZWFjdC5mb3J3YXJkUmVmKFxyXG4gIChcclxuICAgIHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgZWxlbWVudDogRWxlbWVudCA9IFwiZGl2XCIsIG1hcmdpblggPSBcIm14LWF1dG9cIiB9LFxyXG4gICAgcmVmXHJcbiAgKSA9PiAoXHJcbiAgICA8RWxlbWVudCByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiY29udGFpbmVyXCIsIG1hcmdpblgsIGNsYXNzTmFtZSl9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0VsZW1lbnQ+XHJcbiAgKVxyXG4pO1xyXG5cclxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBtYXJnaW5YOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBlbGVtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jb25zdCBEb3RzID0gKHsgc2xpZGVzLCBhY3RpdmVTbGlkZSwgd3JhcHBlclByb3BzLCAuLi5kb3RQcm9wcyB9KSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgY3NzPXtjc3NgXHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAyNXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBgfVxyXG4gICAgey4uLndyYXBwZXJQcm9wc31cclxuICA+XHJcbiAgICB7c2xpZGVzLm1hcCgoc2xpZGUsIGkpID0+IChcclxuICAgICAgPHNwYW5cclxuICAgICAgICBrZXk9e3NsaWRlfVxyXG4gICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHthY3RpdmVTbGlkZSA9PT0gaSA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIn07XHJcbiAgICAgICAgYH1cclxuICAgICAgICB7Li4uZG90UHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICApKX1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbkRvdHMucHJvcFR5cGVzID0ge1xyXG4gIHdyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICBkb3RQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzbGlkZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICBhY3RpdmVTbGlkZTogUHJvcFR5cGVzLm51bWJlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG90cztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgU2xpZGUgPSAoe1xyXG4gIGNvbnRlbnQsXHJcbiAgd2lkdGgsXHJcbiAgaW1hZ2VQb3NpdGlvbiA9IFwiY2VudGVyXCIsXHJcbiAgLi4ud3JhcHBlclByb3BzXHJcbn0pID0+IChcclxuICA8ZGl2XHJcbiAgICBjc3M9e2Nzc2BcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogJHt3aWR0aH1weDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke2NvbnRlbnR9Jyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR7aW1hZ2VQb3NpdGlvbn07XHJcbiAgICBgfVxyXG4gICAgey4uLndyYXBwZXJQcm9wc31cclxuICAvPlxyXG4pO1xyXG5cclxuU2xpZGUucHJvcFR5cGVzID0ge1xyXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgaW1hZ2VQb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICB3cmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBTbGlkZXJDb250ZW50ID0gKHtcclxuICB0cmFuc2xhdGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICB3aWR0aCxcclxuICBjaGlsZHJlbixcclxuICAuLi53cmFwcGVyUHJvcHNcclxufSkgPT4gKFxyXG4gIDxkaXZcclxuICAgIGNzcz17Y3NzYFxyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7dHJhbnNsYXRlfXB4KTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0ICR7dHJhbnNpdGlvbn1zO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYH1cclxuICAgIHsuLi53cmFwcGVyUHJvcHN9XHJcbiAgPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuU2xpZGVyQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHRyYW5zaXRpb246IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIHdyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyQ29udGVudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XHJcblxyXG5pbXBvcnQgU2xpZGVyQ29udGVudCBmcm9tIFwiLi9TbGlkZXJDb250ZW50XCI7XHJcbmltcG9ydCBTbGlkZSBmcm9tIFwiLi9TbGlkZVwiO1xyXG5pbXBvcnQgQXJyb3cgZnJvbSBcIi4vQXJyb3dcIjtcclxuaW1wb3J0IERvdHMgZnJvbSBcIi4vRG90c1wiO1xyXG5cclxuY29uc3QgdXNlSW50ZXJ2YWxXaXRoU3RvcCA9IChjYWxsYmFjaywgZGVsYXkpID0+IHtcclxuICBjb25zdCBzYXZlZENhbGxiYWNrID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgaW50ZXJ2YWxJZCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbY3VycmVudERlbGF5LCBzZXREZWxheV0gPSB1c2VTdGF0ZShkZWxheSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVJ1bm5pbmcgPSB1c2VDYWxsYmFjayhcclxuICAgICgpID0+XHJcbiAgICAgIHNldERlbGF5KChjdXJyZW50RGVsYXlWYXIpID0+IChjdXJyZW50RGVsYXlWYXIgPT09IG51bGwgPyBkZWxheSA6IG51bGwpKSxcclxuICAgIFtkZWxheV1cclxuICApO1xyXG5cclxuICBjb25zdCBjbGVhciA9IHVzZUNhbGxiYWNrKCgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZC5jdXJyZW50KSwgW10pO1xyXG5cclxuICAvLyBSZW1lbWJlciB0aGUgbGF0ZXN0IGZ1bmN0aW9uLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzYXZlZENhbGxiYWNrLmN1cnJlbnQgPSBjYWxsYmFjaztcclxuICB9LCBbY2FsbGJhY2tdKTtcclxuXHJcbiAgLy8gU2V0IHVwIHRoZSBpbnRlcnZhbC5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gdGljaygpIHtcclxuICAgICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGludGVydmFsSWQuY3VycmVudCkgY2xlYXIoKTtcclxuXHJcbiAgICBpZiAoY3VycmVudERlbGF5ICE9PSBudWxsKSB7XHJcbiAgICAgIGludGVydmFsSWQuY3VycmVudCA9IHNldEludGVydmFsKHRpY2ssIGN1cnJlbnREZWxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNsZWFyO1xyXG4gIH0sIFtjdXJyZW50RGVsYXksIGNsZWFyXSk7XHJcblxyXG4gIHJldHVybiBbdG9nZ2xlUnVubmluZywgISFjdXJyZW50RGVsYXldO1xyXG59O1xyXG5cclxuY29uc3QgU2xpZGVyID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgaW5Db250YWluZXIgPSBmYWxzZSxcclxuICBzbGlkZUludGVydmFsLFxyXG4gIHNsaWRlcyxcclxuICBzaXplID0gXCJtZWRpdW1cIixcclxuICBhcnJvd1Byb3BzLFxyXG4gIGRvdHNQcm9wcyxcclxuICBzbGlkZVByb3BzLFxyXG4gIHNsaWRlcldyYXBwZXJQcm9wcyxcclxuICBzbGlkZXJQcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB0cmFuc2l0aW9uUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcmVzaXplUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBsZXQgdG9nZ2xlUGF1c2VQbGF5O1xyXG4gIGxldCBpc1BsYXlpbmc7XHJcblxyXG4gIGNvbnN0IGZpcnN0U2xpZGUgPSBzbGlkZXNbMF07XHJcbiAgY29uc3Qgc2Vjb25kU2xpZGUgPSBzbGlkZXNbMV07XHJcbiAgY29uc3QgbGFzdFNsaWRlID0gc2xpZGVzW3NsaWRlcy5sZW5ndGggLSAxXTtcclxuICBjb25zdCBTSVpFUyA9IHtcclxuICAgIHNtYWxsOiBcImgtMS8zXCIsXHJcbiAgICBtZWRpdW06IFwiaC0xLzJcIixcclxuICAgIGxhcmdlOiBcImgtc2NyZWVuXCJcclxuICB9O1xyXG5cclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGFjdGl2ZVNsaWRlOiAwLFxyXG4gICAgdHJhbnNsYXRlOiB3aWR0aCxcclxuICAgIHRyYW5zaXRpb246IDAuNDUsXHJcbiAgICBfc2xpZGVzOiBbbGFzdFNsaWRlLCBmaXJzdFNsaWRlLCBzZWNvbmRTbGlkZV1cclxuICB9KTtcclxuICBjb25zdCB7IGFjdGl2ZVNsaWRlLCB0cmFuc2xhdGUsIF9zbGlkZXMsIHRyYW5zaXRpb24gfSA9IHN0YXRlO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCB0cmFuc2xhdGU6IHdpZHRoLCB0cmFuc2l0aW9uOiAwIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNtb290aFRyYW5zaXRpb24gPSAoKSA9PiB7XHJcbiAgICBsZXQgX3NsaWRlc0Nsb25lID0gW107XHJcblxyXG4gICAgaWYgKGFjdGl2ZVNsaWRlID09PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBfc2xpZGVzQ2xvbmUgPSBbc2xpZGVzW3NsaWRlcy5sZW5ndGggLSAyXSwgbGFzdFNsaWRlLCBmaXJzdFNsaWRlXTtcclxuICAgIH0gZWxzZSBpZiAoYWN0aXZlU2xpZGUgPT09IDApIHtcclxuICAgICAgX3NsaWRlc0Nsb25lID0gW2xhc3RTbGlkZSwgZmlyc3RTbGlkZSwgc2Vjb25kU2xpZGVdO1xyXG4gICAgfSBlbHNlIF9zbGlkZXNDbG9uZSA9IHNsaWRlcy5zbGljZShhY3RpdmVTbGlkZSAtIDEsIGFjdGl2ZVNsaWRlICsgMik7XHJcblxyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgX3NsaWRlczogX3NsaWRlc0Nsb25lLFxyXG4gICAgICB0cmFuc2l0aW9uOiAwLFxyXG4gICAgICB0cmFuc2xhdGU6IHdpZHRoXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PlxyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgdHJhbnNsYXRlOiB0cmFuc2xhdGUgKyB3aWR0aCxcclxuICAgICAgYWN0aXZlU2xpZGU6IGFjdGl2ZVNsaWRlID09PSBzbGlkZXMubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVTbGlkZSArIDFcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PlxyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgdHJhbnNsYXRlOiAwLFxyXG4gICAgICBhY3RpdmVTbGlkZTogYWN0aXZlU2xpZGUgPT09IDAgPyBzbGlkZXMubGVuZ3RoIC0gMSA6IGFjdGl2ZVNsaWRlIC0gMVxyXG4gICAgfSk7XHJcblxyXG4gIGlmIChzbGlkZUludGVydmFsKSB7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBydW5uaW5nXSA9IHVzZUludGVydmFsV2l0aFN0b3AoKCkgPT4ge1xyXG4gICAgICBuZXh0U2xpZGUoKTtcclxuICAgIH0sIHNsaWRlSW50ZXJ2YWwgKiAxMDAwKTtcclxuXHJcbiAgICB0b2dnbGVQYXVzZVBsYXkgPSB0b2dnbGU7XHJcbiAgICBpc1BsYXlpbmcgPSBydW5uaW5nO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFdpZHRoKGNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudFdpZHRoKTtcclxuXHJcbiAgICB0cmFuc2l0aW9uUmVmLmN1cnJlbnQgPSBzbW9vdGhUcmFuc2l0aW9uO1xyXG4gICAgcmVzaXplUmVmLmN1cnJlbnQgPSBoYW5kbGVSZXNpemU7XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCB0cmFuc2xhdGU6IGNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudFdpZHRoIH0pO1xyXG4gICAgY29uc3Qgc21vb3RoID0gKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcyhcIlNsaWRlckNvbnRlbnRcIikpIHtcclxuICAgICAgICB0cmFuc2l0aW9uUmVmLmN1cnJlbnQoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHJlc2l6ZVJlZi5jdXJyZW50KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRyYW5zaXRpb25FbmQgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgc21vb3RoKTtcclxuICAgIGNvbnN0IG9uUmVzaXplID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgdHJhbnNpdGlvbkVuZCk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRyYW5zaXRpb24gPT09IDApIHNldFN0YXRlKHsgLi4uc3RhdGUsIHRyYW5zaXRpb246IDAuNDUgfSk7XHJcbiAgfSwgW3RyYW5zaXRpb25dKTtcclxuXHJcbiAgY29uc3QgRWxlbWVudCA9IGluQ29udGFpbmVyID8gQ29udGFpbmVyIDogXCJkaXZcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxFbGVtZW50XHJcbiAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFNJWkVTW3NpemVdLFxyXG4gICAgICAgIFwicmVsYXRpdmUgdy1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuIHdoaXRlc3BhY2Utbm8td3JhcCBwLTAgbS0wXCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5zbGlkZXJQcm9wc31cclxuICAgID5cclxuICAgICAgPFNsaWRlckNvbnRlbnRcclxuICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgICAgIHdpZHRoPXt3aWR0aCAqIF9zbGlkZXMubGVuZ3RofVxyXG4gICAgICAgIHsuLi5zbGlkZXJXcmFwcGVyUHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7X3NsaWRlcy5tYXAoKF9zbGlkZSwgaSkgPT4gKFxyXG4gICAgICAgICAgPFNsaWRlXHJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgICAga2V5PXtfc2xpZGUgKyBpfVxyXG4gICAgICAgICAgICBjb250ZW50PXtfc2xpZGV9XHJcbiAgICAgICAgICAgIHsuLi5zbGlkZVByb3BzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9TbGlkZXJDb250ZW50PlxyXG5cclxuICAgICAgPEFycm93IGRpcmVjdGlvbj1cImxlZnRcIiBoYW5kbGVDbGljaz17cHJldlNsaWRlfSB7Li4uYXJyb3dQcm9wc30gLz5cclxuICAgICAgPEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgaGFuZGxlQ2xpY2s9e25leHRTbGlkZX0gey4uLmFycm93UHJvcHN9IC8+XHJcbiAgICAgIHtzbGlkZUludGVydmFsICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEFycm93XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cInBhdXNlXCJcclxuICAgICAgICAgICAgcGxheVN0YXRlPXshaXNQbGF5aW5nfVxyXG4gICAgICAgICAgICBoYW5kbGVDbGljaz17dG9nZ2xlUGF1c2VQbGF5fVxyXG4gICAgICAgICAgICB7Li4uYXJyb3dQcm9wc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXJyb3dcclxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicGxheVwiXHJcbiAgICAgICAgICAgIHBsYXlTdGF0ZT17aXNQbGF5aW5nfVxyXG4gICAgICAgICAgICBoYW5kbGVDbGljaz17dG9nZ2xlUGF1c2VQbGF5fVxyXG4gICAgICAgICAgICB7Li4uYXJyb3dQcm9wc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8RG90cyBzbGlkZXM9e3NsaWRlc30gYWN0aXZlU2xpZGU9e2FjdGl2ZVNsaWRlfSB7Li4uZG90c1Byb3BzfSAvPlxyXG4gICAgPC9FbGVtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5TbGlkZXIucHJvcFR5cGVzID0ge1xyXG4gIHNsaWRlczogUHJvcFR5cGVzLmFycmF5LFxyXG4gIHNsaWRlSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaW5Db250YWluZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gIGFycm93UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgZG90c1Byb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNsaWRlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2xpZGVyV3JhcHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNsaWRlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZXJcIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdFwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VzID0gW1xyXG4gICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNjY1NTg1NTAzNS1kNTIxNWJjYjU2MDQ/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEyMDAmcT02MFwiLFxyXG4gICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ2NDgyMjc1OTAyMy1mZWQ2MjJmZjJjM2I/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEyMDAmcT02MFwiLFxyXG4gICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxOTY4MTM5Mzc4NC1kMTIwMjY3OTMzYmE/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEyMDAmcT02MFwiLFxyXG4gICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ1ODY2ODM4Mzk3MC04ZGRkMzkyN2RlZWQ/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEyMDAmcT02MFwiXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWhvbWUtcGFnZVwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICB7LyogPFNsaWRlciBzbGlkZXM9e2ltYWdlc30gc2l6ZT1cImxhcmdlXCIgc2xpZGVJbnRlcnZhbD17Nn0gLz4gKi99XHJcbiAgICAgIDxQcm9kdWN0IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIC8vIGN0eC5zdG9yZS5kaXNwYXRjaChnZXRIb21lQmFubmVyKDUpKTtcclxuICAvLyBjdHguc3RvcmUuZGlzcGF0Y2goZ2V0SG9tZVByb3Bvc2UoMykpO1xyXG4gIC8vIGN0eC5zdG9yZS5kaXNwYXRjaChnZXRIb21lUHJvZHVjdCg4KSk7XHJcbiAgLy8gY3R4LnN0b3JlLmRpc3BhdGNoKGdldEhvbWVBcnRpY2xlKDMpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=