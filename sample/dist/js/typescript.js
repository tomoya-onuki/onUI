/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\nwindow.addEventListener('load', () => {\n    const mytoggle = document.querySelector('#mytoggle2');\n    const console0 = document.querySelector('#mytoggle2-console');\n    mytoggle.addEventListener('input', function (e) {\n        console0.textContent = String(this.checked);\n        console.log(this.checked);\n    });\n    const mytoggleBtn = document.querySelector('#mytogglebtn2');\n    const console1 = document.querySelector('#mytogglebtn2-console');\n    mytoggleBtn.addEventListener('input', function (e) {\n        console1.textContent = String(this.checked);\n        console.log(this.checked);\n    });\n    const myslider = document.querySelector('#myslider2');\n    const mysliderMin = myslider.querySelector('.onui-min');\n    const mysliderMax = myslider.querySelector('.onui-max');\n    const console2 = document.querySelector('#myslider2-console');\n    mysliderMin.addEventListener('input', function (e) {\n        console2.textContent = String(myslider.value);\n        console.log(myslider.value);\n    });\n    mysliderMax.addEventListener('input', function (e) {\n        console2.textContent = String(myslider.value);\n        console.log(myslider.value);\n    });\n    const myfontselector = document.querySelector('#myfontselector2 > onui-options');\n    const console3 = document.querySelector('#myfontselector2-console');\n    myfontselector.addEventListener('click', function (e) {\n        console3.style.fontFamily = String(this.getAttribute('font'));\n        console.log('%csample', `font-family:${this.getAttribute('font')}`);\n    });\n});\n\n\n//# sourceURL=webpack://sample/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;