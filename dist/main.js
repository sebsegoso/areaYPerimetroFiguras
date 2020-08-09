/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Circulo.js":
/*!************************!*\
  !*** ./src/Circulo.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Poligono__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Poligono */ \"./src/Poligono.js\");\n\n\nconst circulo = {\n  area() {    \n    let radio = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[4]\n    \n    return Math.pow(radio, 2) * Math.PI\n  },\n  perimetro() {\n    let radio = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[4]\n    return Math.PI * 2 * radio\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (circulo);\n\n//# sourceURL=webpack:///./src/Circulo.js?");

/***/ }),

/***/ "./src/Cuadrado.js":
/*!*************************!*\
  !*** ./src/Cuadrado.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Poligono__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Poligono */ \"./src/Poligono.js\");\n\r\n\r\nconst cuadrado = {\r\n    area() {\r\n        let lado = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[1]\r\n\r\n        return Math.pow(lado, 2)\r\n    },\r\n    perimetro() {\r\n        let lado = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[1]\r\n\r\n        return lado * 4\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (cuadrado);\n\n//# sourceURL=webpack:///./src/Cuadrado.js?");

/***/ }),

/***/ "./src/Decagono.js":
/*!*************************!*\
  !*** ./src/Decagono.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Poligono__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Poligono */ \"./src/Poligono.js\");\n\n\nconst decagono = {\n  area() {\n    let lado = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[1]\n    let apotema = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[3]\n\n    return (lado * 10) * apotema /2\n  },\n  perimetro() {\n    let lado = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[1]\n\n    return lado * 10\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (decagono);\n\n\n//# sourceURL=webpack:///./src/Decagono.js?");

/***/ }),

/***/ "./src/Octagono.js":
/*!*************************!*\
  !*** ./src/Octagono.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Poligono__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Poligono */ \"./src/Poligono.js\");\n\n\nconst octagono = {\n  area() {\n    let lado = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[1]\n    let apotema = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[3]\n\n    return (lado * 8) * apotema / 2\n  },\n  perimetro() {\n    let lado = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[1]\n\n    return lado * 8\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (octagono);\n\n//# sourceURL=webpack:///./src/Octagono.js?");

/***/ }),

/***/ "./src/Poligono.js":
/*!*************************!*\
  !*** ./src/Poligono.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet Poligono = {\n    getValues: function () {\n        let base = parseInt(document.getElementById('base').value) || null\n        let lado = parseInt(document.getElementById('lado').value) || null\n        let altura = parseInt(document.getElementById('altura').value) || null\n        let apotema = parseInt(document.getElementById('apotema').value) || null\n        let radio = parseInt(document.getElementById('radio').value) || null\n        return [base, lado, altura, apotema, radio]\n    },\n\n    valores: function () {\n        return this.getValues()\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Poligono);\n\n//# sourceURL=webpack:///./src/Poligono.js?");

/***/ }),

/***/ "./src/Rectangulo.js":
/*!***************************!*\
  !*** ./src/Rectangulo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Poligono__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Poligono */ \"./src/Poligono.js\");\n\n\nconst rectangulo = {\n  area() {\n    let base = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[0]\n    let altura = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[2]\n\n    return (base * altura)\n  },\n  perimetro() {\n    let base = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[0]\n    let altura = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[2]\n\n    return (base + altura) * 2\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rectangulo);\n\n//# sourceURL=webpack:///./src/Rectangulo.js?");

/***/ }),

/***/ "./src/Triangulo.js":
/*!**************************!*\
  !*** ./src/Triangulo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Poligono__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Poligono */ \"./src/Poligono.js\");\n\n\nconst triangulo = {\n  area() {\n    let base = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[0]\n    let altura = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[2]\n\n    return (base * altura) / 2\n  },\n  perimetro() {\n    let lado = _Poligono__WEBPACK_IMPORTED_MODULE_0__[\"default\"].valores()[1]\n\n    return lado * 3\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (triangulo);\n\n//# sourceURL=webpack:///./src/Triangulo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Circulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circulo */ \"./src/Circulo.js\");\n/* harmony import */ var _Triangulo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Triangulo */ \"./src/Triangulo.js\");\n/* harmony import */ var _Cuadrado__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cuadrado */ \"./src/Cuadrado.js\");\n/* harmony import */ var _Rectangulo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rectangulo */ \"./src/Rectangulo.js\");\n/* harmony import */ var _Octagono_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Octagono.js */ \"./src/Octagono.js\");\n/* harmony import */ var _Decagono_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Decagono.js */ \"./src/Decagono.js\");\n\n\n\n\n\n\n\ndocument.getElementsByTagName('select')[0].addEventListener('change', function (e) {\n  let poligono = e.target.value\n  if (poligono === 'circulo') {\n    console.clear()\n    console.log(`Perímetro del Círculo ===> ${_Circulo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].perimetro()}`)\n    console.log(`Área del Círculo ===> ${_Circulo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].area()}`)\n  }\n  if (poligono === 'triangulo') {\n    console.clear()\n    console.log(`Perímetro del Triángulo ===> ${_Triangulo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].perimetro()}`)\n    console.log(`Área del Triángulo ===> ${_Triangulo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].area()}`)\n  }\n  if (poligono === 'cuadrado') {\n    console.clear()\n    console.log(`Perímetro del Cuadrado ===> ${_Cuadrado__WEBPACK_IMPORTED_MODULE_2__[\"default\"].perimetro()}`)\n    console.log(`Área del Cuadrado ===> ${_Cuadrado__WEBPACK_IMPORTED_MODULE_2__[\"default\"].area()}`)\n  }\n  if (poligono === 'rectangulo') {\n    console.clear()\n    console.log(`Perímetro del Rectángulo ===> ${_Rectangulo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].perimetro()}`)\n    console.log(`Área del Rectángulo ===> ${_Rectangulo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].area()}`)\n  }\n  if (poligono === 'octagono') {\n    console.clear()\n    console.log(`Perímetro del Octágono ===> ${_Octagono_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].perimetro()}`)\n    console.log(`Área del Octágono ===> ${_Octagono_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].area()}`)\n  }\n  if (poligono === 'decagono') {\n    console.clear()\n    console.log(`Perímetro del Decágono ===> ${_Decagono_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].perimetro()}`)\n    console.log(`Área del Decágono ===> ${_Decagono_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].area()}`)\n  }\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });