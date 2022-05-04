/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/reset.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/reset.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/***\n    The new CSS reset - version 1.5.1 (last updated 1.3.2022)\n    GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n\n/*\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\n */\n *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {\n    all: unset;\n    display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na, button {\n    cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol, ul, menu {\n    list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n    max-width: 100%;\n}\n\n/* removes spacing between cells in tables */\ntable {\n    border-collapse: collapse;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n    white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n    -webkit-appearance: revert;\n    appearance: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::placeholder {\n    color: unset;\n}\n\n/* fix the feature of 'hidden' attribute.\n   display:revert; revert to element instead of attribute */\n:where([hidden]) {\n    display: none;\n}\n\n/* revert for bug in Chromium browsers\n   - fix for the content editable attribute will work properly. */\n:where([contenteditable]) {\n    -moz-user-modify: read-write;\n    -webkit-user-modify: read-write;\n    overflow-wrap: break-word;\n    -webkit-line-break: after-white-space;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=\"true\"]) {\n    -webkit-user-drag: element;\n}", "",{"version":3,"sources":["webpack://./src/style/reset.css"],"names":[],"mappings":"AAAA;;;GAGG;;AAEH;;;EAGE;CACD;IACG,UAAU;IACV,eAAe;AACnB;;AAEA,+BAA+B;AAC/B;;;IAGI,sBAAsB;AAC1B;;AAEA,+CAA+C;AAC/C;IACI,cAAc;AAClB;;AAEA,yCAAyC;AACzC;IACI,gBAAgB;AACpB;;AAEA,wDAAwD;AACxD;IACI,eAAe;AACnB;;AAEA,4CAA4C;AAC5C;IACI,yBAAyB;AAC7B;;AAEA,sEAAsE;AACtE;IACI,mBAAmB;AACvB;;AAEA,kDAAkD;AAClD;IACI,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA,oDAAoD;AACpD;IACI,YAAY;AAChB;;AAEA;2DAC2D;AAC3D;IACI,aAAa;AACjB;;AAEA;iEACiE;AACjE;IACI,4BAA4B;IAC5B,+BAA+B;IAC/B,yBAAyB;IACzB,qCAAqC;AACzC;;AAEA,yEAAyE;AACzE;IACI,0BAA0B;AAC9B","sourcesContent":["/***\n    The new CSS reset - version 1.5.1 (last updated 1.3.2022)\n    GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n\n/*\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\n */\n *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {\n    all: unset;\n    display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na, button {\n    cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol, ul, menu {\n    list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n    max-width: 100%;\n}\n\n/* removes spacing between cells in tables */\ntable {\n    border-collapse: collapse;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n    white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n    -webkit-appearance: revert;\n    appearance: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::placeholder {\n    color: unset;\n}\n\n/* fix the feature of 'hidden' attribute.\n   display:revert; revert to element instead of attribute */\n:where([hidden]) {\n    display: none;\n}\n\n/* revert for bug in Chromium browsers\n   - fix for the content editable attribute will work properly. */\n:where([contenteditable]) {\n    -moz-user-modify: read-write;\n    -webkit-user-modify: read-write;\n    overflow-wrap: break-word;\n    -webkit-line-break: after-white-space;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=\"true\"]) {\n    -webkit-user-drag: element;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/ui.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/ui.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 stroke=%27lightgray%27 width=%2725%27 height=%2725%27 viewBox=%270 0 25 25%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0%27%3E%3C/path%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 stroke=%27lightgray%27 width=%2725%27 height=%2725%27 viewBox=%270 0 25 25%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0%27%3E%3C/path%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: 'Helvetica', sans-serif;\n  font-size: 12px;\n  margin: 0;\n  box-sizing: border-box;\n}\n#main {\n  height: 100%;\n  overflow: auto;\n}\n#content {\n  overflow: auto;\n}\n#corner {\n  z-index: 99999;\n  position: fixed;\n  right: -1px;\n  bottom: -2px;\n  cursor: nwse-resize;\n}\nbody {\n  font: 12px sans-serif;\n  text-align: center;\n}\n.btn {\n  border-radius: 5px;\n  background: white;\n  color: black;\n  border: none;\n  padding: 8px 15px;\n  margin: 0 5px;\n  box-shadow: inset 0 0 0 1px black;\n  outline: none;\n}\n#create {\n  box-shadow: none;\n  background: #0d99ff;\n  color: white;\n}\ninput {\n  border: none;\n  outline: none;\n  padding: 8px;\n}\ninput:hover {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\nbutton:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n#create:focus {\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);\n}\ninput:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n\n.top {\n  width: 100%;\n  position: fixed;\n  background-color: white;\n  z-index: 999999;\n  padding: 0 16px;\n  display: flex;\n}\n\n/*LIST ITEMS*/\n#item-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  padding-top: 80px;\n}\n.list-item {\n  margin-bottom: 24px;\n  width: auto;\n  height: auto;\n}\n.list-item:hover {\n  opacity: .75;\n}\n\n.list-item .header,\n.list-item .attachment {\n  cursor: pointer;\n}\n\n.list-item .attachment {\n  width: 100%;\n  height: 100%;\n  max-width: 320px;\n  object-fit: contain;\n}\n.list-item .attachement img {\n  width: 100%;\n  height: auto;\n}\n\n\n@media only screen and (max-width: 630px) {\n  #item-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n  .list-item {\n    margin-bottom: 24px;\n    width: 100%;\n    height: auto;\n  }\n  .list-item .attachment {\n    max-width: 100%;\n    padding: 16px;\n  }\n}\n\n.bar {\n  margin: 16px auto;\n  width: 100%;\n  border: 1px solid #dcdcdc;\n  position: relative;\n}\n.bar:hover {\n  border: 1px solid #104E9B;\n}\n.bar:focus-within {\n  border: 1px solid #2B8EDE;\n}\n.searchbar {\n  height: 45px;\n  border: none;\n  width: 100%;\n  border-radius: inherit;\n  font-size: 14px;\n  outline: none;\n  text-align: left;\n  padding-left: 40px;\n}\n.searchbar::placeholder{\n  color: gray;\n}\n.bar:before {\n  content: \"\";\n  position: absolute;\n  left: 10px;\n  top: 0;\n  bottom: 0;\n  width: 20px;\n  color: inherit;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center / contain no-repeat;\n}\n.btn-random {\n  cursor: pointer;\n  background-color: #1C6BBA;\n  color: white;\n  font-size: 14px;\n  padding: 10px 20px;\n  width: 230px;\n  margin: 16px;\n  border-radius: 0;\n}\n.btn-random:hover {\n  background-color: #2B8EDE;\n}\n.btn-random:focus {\n  border: 1px solid #104E9B;\n}\n\n/*\nSKELETON\n*/\n\n.skeleton-loader:empty {\n  width: 100%;\n  height: 4px;\n  margin: 16px;\n  display: block;\n  background: linear-gradient(\n      to right,\n      rgba(0, 151, 201, 0),\n      rgba(35, 69, 204, 0.5) 50%,\n      rgba(103, 151, 215, 0.747) 80%\n    ),\n    rgba(9, 116, 209, 0.221);\n  background-repeat: repeat-y;\n  background-size: 50px 500px;\n  background-position: 0 0;\n  animation: shine 1s infinite;\n}\n\n@keyframes shine {\n  to {\n    background-position: 100% 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/ui.css"],"names":[],"mappings":"AAAA;EACE,oCAAoC;EACpC,eAAe;EACf,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;EACd,eAAe;EACf,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,iCAAiC;EACjC,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;AACd;AACA;EACE,8CAA8C;AAChD;AACA;EACE,mCAAmC;AACrC;AACA;EACE,8CAA8C;AAChD;AACA;EACE,mCAAmC;AACrC;;AAEA;EACE,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,eAAe;EACf,eAAe;EACf,aAAa;AACf;;AAEA,aAAa;AACb;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;AACA;EACE,YAAY;AACd;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;AACd;;;AAGA;EACE;IACE,aAAa;IACb,eAAe;IACf,6BAA6B;EAC/B;EACA;IACE,mBAAmB;IACnB,WAAW;IACX,YAAY;EACd;EACA;IACE,eAAe;IACf,aAAa;EACf;AACF;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,SAAS;EACT,WAAW;EACX,cAAc;EACd,8EAA6b;AAC/b;AACA;EACE,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;;AAEA;;CAEC;;AAED;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,cAAc;EACd;;;;;;4BAM0B;EAC1B,2BAA2B;EAC3B,2BAA2B;EAC3B,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE;IACE,2BAA2B;EAC7B;AACF","sourcesContent":["* {\n  font-family: 'Helvetica', sans-serif;\n  font-size: 12px;\n  margin: 0;\n  box-sizing: border-box;\n}\n#main {\n  height: 100%;\n  overflow: auto;\n}\n#content {\n  overflow: auto;\n}\n#corner {\n  z-index: 99999;\n  position: fixed;\n  right: -1px;\n  bottom: -2px;\n  cursor: nwse-resize;\n}\nbody {\n  font: 12px sans-serif;\n  text-align: center;\n}\n.btn {\n  border-radius: 5px;\n  background: white;\n  color: black;\n  border: none;\n  padding: 8px 15px;\n  margin: 0 5px;\n  box-shadow: inset 0 0 0 1px black;\n  outline: none;\n}\n#create {\n  box-shadow: none;\n  background: #0d99ff;\n  color: white;\n}\ninput {\n  border: none;\n  outline: none;\n  padding: 8px;\n}\ninput:hover {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\nbutton:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n#create:focus {\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);\n}\ninput:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n\n.top {\n  width: 100%;\n  position: fixed;\n  background-color: white;\n  z-index: 999999;\n  padding: 0 16px;\n  display: flex;\n}\n\n/*LIST ITEMS*/\n#item-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  padding-top: 80px;\n}\n.list-item {\n  margin-bottom: 24px;\n  width: auto;\n  height: auto;\n}\n.list-item:hover {\n  opacity: .75;\n}\n\n.list-item .header,\n.list-item .attachment {\n  cursor: pointer;\n}\n\n.list-item .attachment {\n  width: 100%;\n  height: 100%;\n  max-width: 320px;\n  object-fit: contain;\n}\n.list-item .attachement img {\n  width: 100%;\n  height: auto;\n}\n\n\n@media only screen and (max-width: 630px) {\n  #item-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n  .list-item {\n    margin-bottom: 24px;\n    width: 100%;\n    height: auto;\n  }\n  .list-item .attachment {\n    max-width: 100%;\n    padding: 16px;\n  }\n}\n\n.bar {\n  margin: 16px auto;\n  width: 100%;\n  border: 1px solid #dcdcdc;\n  position: relative;\n}\n.bar:hover {\n  border: 1px solid #104E9B;\n}\n.bar:focus-within {\n  border: 1px solid #2B8EDE;\n}\n.searchbar {\n  height: 45px;\n  border: none;\n  width: 100%;\n  border-radius: inherit;\n  font-size: 14px;\n  outline: none;\n  text-align: left;\n  padding-left: 40px;\n}\n.searchbar::placeholder{\n  color: gray;\n}\n.bar:before {\n  content: \"\";\n  position: absolute;\n  left: 10px;\n  top: 0;\n  bottom: 0;\n  width: 20px;\n  color: inherit;\n  background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='lightgray' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E\") center / contain no-repeat;\n}\n.btn-random {\n  cursor: pointer;\n  background-color: #1C6BBA;\n  color: white;\n  font-size: 14px;\n  padding: 10px 20px;\n  width: 230px;\n  margin: 16px;\n  border-radius: 0;\n}\n.btn-random:hover {\n  background-color: #2B8EDE;\n}\n.btn-random:focus {\n  border: 1px solid #104E9B;\n}\n\n/*\nSKELETON\n*/\n\n.skeleton-loader:empty {\n  width: 100%;\n  height: 4px;\n  margin: 16px;\n  display: block;\n  background: linear-gradient(\n      to right,\n      rgba(0, 151, 201, 0),\n      rgba(35, 69, 204, 0.5) 50%,\n      rgba(103, 151, 215, 0.747) 80%\n    ),\n    rgba(9, 116, 209, 0.221);\n  background-repeat: repeat-y;\n  background-size: 50px 500px;\n  background-position: 0 0;\n  animation: shine 1s infinite;\n}\n\n@keyframes shine {\n  to {\n    background-position: 100% 0;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/reset.css":
/*!*****************************!*\
  !*** ./src/style/reset.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/ui.css":
/*!**************************!*\
  !*** ./src/style/ui.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ui.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/ui.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contentreel.config.js":
/*!***********************************!*\
  !*** ./src/contentreel.config.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let configs = {
  AIRTABLE_API_KEY: "keyXNIVVnVuR9RCci",
  PICKIT_API_KEY: "apiuser-u4xj87dobizsmccgn4x94v79i47dht@pickit.com",
  PICKIT_SECRET: "hukg89r9lmbw1ptv3h1fjjb0dni0ha",
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configs);


/***/ }),

/***/ "./src/utils/resizer.js":
/*!******************************!*\
  !*** ./src/utils/resizer.js ***!
  \******************************/
/***/ (() => {

//RESIZER FUNCTIONS
const corner = document.getElementById("corner");
function resizeWindow(e) {
  const size = {
    w: Math.max(50, Math.floor(e.clientX + 5)),
    h: Math.max(50, Math.floor(e.clientY + 5)),
  };
  parent.postMessage({ pluginMessage: { type: "resize", size: size } }, "*");
}
corner.onpointerdown = (e) => {
  corner.onpointermove = resizeWindow;
  corner.setPointerCapture(e.pointerId);
};
corner.onpointerup = (e) => {
  corner.onpointermove = null;
  corner.releasePointerCapture(e.pointerId);
};

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 stroke=%27lightgray%27 width=%2725%27 height=%2725%27 viewBox=%270 0 25 25%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0%27%3E%3C/path%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 stroke=%27lightgray%27 width=%2725%27 height=%2725%27 viewBox=%270 0 25 25%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0%27%3E%3C/path%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 stroke=%27lightgray%27 width=%2725%27 height=%2725%27 viewBox=%270 0 25 25%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0%27%3E%3C/path%3E%3C/svg%3E";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"ui": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/ui.css */ "./src/style/ui.css");
/* harmony import */ var _style_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/reset.css */ "./src/style/reset.css");
/* harmony import */ var _utils_resizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/resizer */ "./src/utils/resizer.js");
/* harmony import */ var _utils_resizer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_resizer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contentreel_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contentreel.config.js */ "./src/contentreel.config.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let selectionSize = 0;
let randomArr = [];
let loading = true;
const loader = "<div class='skeleton-loader'></div>";
let PickitMediaArray = [];
let currentPage = 1;
const previewSize = 0;
const randomButton = document.getElementById("random");
randomButton.onclick = () => {
    window.parent.postMessage({ pluginMessage: { do: "random" } }, "*");
};
const itemListDiv = document.getElementById("item-list");
const searchBar = document.getElementById("search");
const pickitHeaders = {
    "Pickit-Api-Key": `${_contentreel_config_js__WEBPACK_IMPORTED_MODULE_3__["default"].PICKIT_API_KEY}`,
    "Pickit-Api-Secret": `${_contentreel_config_js__WEBPACK_IMPORTED_MODULE_3__["default"].PICKIT_SECRET}`,
    "Pickit-Api-Library": "media",
};
const baseCall = "https://files.pickit.com/api/v2/files?page_limit=200";
// Event listener for search
searchBar.addEventListener("keydown", (e) => {
    let searchTerm = "";
    if (e.key === "Enter") {
        searchTerm = searchBar.value;
        window.parent.postMessage({
            pluginMessage: {
                do: "load",
                style: "search",
                searchString: searchTerm,
            },
        }, "*");
    }
});
// On network request from the plugin, fetch information from Pickit.
// TODO: Add offset instead of iteratiing on requestmax
window.onmessage = (event) => __awaiter(void 0, void 0, void 0, function* () {
    loading = !loading;
    itemListDiv.innerHTML = loading ? loader : "";
    if (event.data.pluginMessage.type === "multiples") {
        selectionSize = event.data.pluginMessage.size;
    }
    // On startup run through sample pickit library to get a random array of images to populate with
    if (event.data.pluginMessage.style === "first-call") {
        fetch(`${baseCall}`, {
            headers: pickitHeaders,
        })
            .then((res) => res.json())
            .then((response) => {
            loading = false;
            // Clear array since I'm just looping through maxRecords
            PickitMediaArray = [];
            const responseArray = response.data;
            responseArray.map((entry) => {
                //Loop through entries and add the 'fields' of each entry to the array
                PickitMediaArray.push(entry);
            });
        })
            .then((e) => PopulateView())
            .catch((error) => {
            console.log(error);
        });
    }
    // Searching renders output with max page size of all found images
    if (event.data.pluginMessage.style === "search") {
        fetch(`${baseCall}` +
            new URLSearchParams({
                page_limit: "200",
                search: event.data.pluginMessage.searchString,
            }), {
            headers: pickitHeaders,
        })
            .then((res) => res.json())
            .then((response) => {
            loading = false;
            // Clear array since I'm just looping through maxRecords
            PickitMediaArray = [];
            const responseArray = response.data;
            responseArray.map((entry) => {
                //Loop through entries and add the 'fields' of each entry to the array
                PickitMediaArray.push(entry);
            });
        })
            .then((e) => {
            PopulateView();
        })
            .catch((error) => {
            console.log(error);
        });
    }
    // If random, render random image from default array
    if (event.data.pluginMessage.style === "random" &&
        PickitMediaArray.length >= 1) {
        let randomImage = PickitMediaArray[Math.floor(Math.random() * PickitMediaArray.length)]
            .file.previews[previewSize];
        AddImageToUI(randomImage);
    }
});
const AddImageToUI = (image) => {
    const img = new Image();
    img.onload = () => {
        const width = image.width;
        const height = image.height;
        fetch(image.url)
            .then((response) => response.blob())
            .then((blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(new Uint8Array(reader.result));
            reader.readAsArrayBuffer(blob);
        }))
            .then((imageBytes) => {
            parent.postMessage({
                pluginMessage: {
                    type: "attachment",
                    width: width,
                    height: height,
                    imageBytes,
                },
            }, "*");
        });
    };
    img.src = image.url;
};
// Populates view with images from pickit
const PopulateView = () => __awaiter(void 0, void 0, void 0, function* () {
    if (itemListDiv.innerHTML != null) {
        itemListDiv.innerHTML = "";
    }
    PickitMediaArray.map((media) => {
        const imgFile = media.file.previews[previewSize];
        const listItem = document.createElement("div");
        listItem.className = "list-item";
        const attachment = new Image();
        attachment.className = "attachment";
        attachment.width = imgFile.width;
        attachment.height = imgFile.height;
        attachment.src = imgFile.url;
        //listItem.appendChild(descriptions);
        listItem.appendChild(attachment);
        itemListDiv.appendChild(listItem);
        attachment.onclick = () => {
            AddImageToUI(imgFile);
        };
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vc3JjL3N0eWxlL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9zcmMvc3R5bGUvdWkuY3NzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9zcmMvc3R5bGUvcmVzZXQuY3NzPzQ0NWUiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vc3JjL3N0eWxlL3VpLmNzcz8wNWRmIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vc3JjL2NvbnRlbnRyZWVsLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9zcmMvdXRpbHMvcmVzaXplci5qcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL3NyYy91aS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKipcXG4gICAgVGhlIG5ldyBDU1MgcmVzZXQgLSB2ZXJzaW9uIDEuNS4xIChsYXN0IHVwZGF0ZWQgMS4zLjIwMjIpXFxuICAgIEdpdEh1YiBwYWdlOiBodHRwczovL2dpdGh1Yi5jb20vZWxhZDI0MTIvdGhlLW5ldy1jc3MtcmVzZXRcXG4qKiovXFxuXFxuLypcXG4gICAgUmVtb3ZlIGFsbCB0aGUgc3R5bGVzIG9mIHRoZSBcXFwiVXNlci1BZ2VudC1TdHlsZXNoZWV0XFxcIiwgZXhjZXB0IGZvciB0aGUgJ2Rpc3BsYXknIHByb3BlcnR5XFxuICAgIC0gVGhlIFxcXCJzeW1ib2wgKlxcXCIgcGFydCBpcyB0byBzb2x2ZSBGaXJlZm94IFNWRyBzcHJpdGUgYnVnXFxuICovXFxuICo6d2hlcmUoOm5vdChpZnJhbWUsIGNhbnZhcywgaW1nLCBzdmcsIHZpZGVvKTpub3Qoc3ZnICosIHN5bWJvbCAqKSkge1xcbiAgICBhbGw6IHVuc2V0O1xcbiAgICBkaXNwbGF5OiByZXZlcnQ7XFxufVxcblxcbi8qIFByZWZlcnJlZCBib3gtc2l6aW5nIHZhbHVlICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZWFwcGx5IHRoZSBwb2ludGVyIGN1cnNvciBmb3IgYW5jaG9yIHRhZ3MgKi9cXG5hLCBidXR0b24ge1xcbiAgICBjdXJzb3I6IHJldmVydDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIChidWxsZXRzL251bWJlcnMpICovXFxub2wsIHVsLCBtZW51IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9yIGltYWdlcyB0byBub3QgYmUgYWJsZSB0byBleGNlZWQgdGhlaXIgY29udGFpbmVyICovXFxuaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiByZW1vdmVzIHNwYWNpbmcgYmV0d2VlbiBjZWxscyBpbiB0YWJsZXMgKi9cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi8qIHJldmVydCB0aGUgJ3doaXRlLXNwYWNlJyBwcm9wZXJ0eSBmb3IgdGV4dGFyZWEgZWxlbWVudHMgb24gU2FmYXJpICovXFxudGV4dGFyZWEge1xcbiAgICB3aGl0ZS1zcGFjZTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiBtaW5pbXVtIHN0eWxlIHRvIGFsbG93IHRvIHN0eWxlIG1ldGVyIGVsZW1lbnQgKi9cXG5tZXRlciB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogcmV2ZXJ0O1xcbiAgICBhcHBlYXJhbmNlOiByZXZlcnQ7XFxufVxcblxcbi8qIHJlc2V0IGRlZmF1bHQgdGV4dCBvcGFjaXR5IG9mIGlucHV0IHBsYWNlaG9sZGVyICovXFxuOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB1bnNldDtcXG59XFxuXFxuLyogZml4IHRoZSBmZWF0dXJlIG9mICdoaWRkZW4nIGF0dHJpYnV0ZS5cXG4gICBkaXNwbGF5OnJldmVydDsgcmV2ZXJ0IHRvIGVsZW1lbnQgaW5zdGVhZCBvZiBhdHRyaWJ1dGUgKi9cXG46d2hlcmUoW2hpZGRlbl0pIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogcmV2ZXJ0IGZvciBidWcgaW4gQ2hyb21pdW0gYnJvd3NlcnNcXG4gICAtIGZpeCBmb3IgdGhlIGNvbnRlbnQgZWRpdGFibGUgYXR0cmlidXRlIHdpbGwgd29yayBwcm9wZXJseS4gKi9cXG46d2hlcmUoW2NvbnRlbnRlZGl0YWJsZV0pIHtcXG4gICAgLW1vei11c2VyLW1vZGlmeTogcmVhZC13cml0ZTtcXG4gICAgLXdlYmtpdC11c2VyLW1vZGlmeTogcmVhZC13cml0ZTtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgLXdlYmtpdC1saW5lLWJyZWFrOiBhZnRlci13aGl0ZS1zcGFjZTtcXG59XFxuXFxuLyogYXBwbHkgYmFjayB0aGUgZHJhZ2dhYmxlIGZlYXR1cmUgLSBleGlzdCBvbmx5IGluIENocm9taXVtIGFuZCBTYWZhcmkgKi9cXG46d2hlcmUoW2RyYWdnYWJsZT1cXFwidHJ1ZVxcXCJdKSB7XFxuICAgIC13ZWJraXQtdXNlci1kcmFnOiBlbGVtZW50O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7R0FHRzs7QUFFSDs7O0VBR0U7Q0FDRDtJQUNHLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBLCtCQUErQjtBQUMvQjs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBLCtDQUErQztBQUMvQztJQUNJLGNBQWM7QUFDbEI7O0FBRUEseUNBQXlDO0FBQ3pDO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLHdEQUF3RDtBQUN4RDtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsNENBQTRDO0FBQzVDO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLHNFQUFzRTtBQUN0RTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQSxrREFBa0Q7QUFDbEQ7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBLG9EQUFvRDtBQUNwRDtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7MkRBQzJEO0FBQzNEO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtpRUFDaUU7QUFDakU7SUFDSSw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixxQ0FBcUM7QUFDekM7O0FBRUEseUVBQXlFO0FBQ3pFO0lBQ0ksMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKipcXG4gICAgVGhlIG5ldyBDU1MgcmVzZXQgLSB2ZXJzaW9uIDEuNS4xIChsYXN0IHVwZGF0ZWQgMS4zLjIwMjIpXFxuICAgIEdpdEh1YiBwYWdlOiBodHRwczovL2dpdGh1Yi5jb20vZWxhZDI0MTIvdGhlLW5ldy1jc3MtcmVzZXRcXG4qKiovXFxuXFxuLypcXG4gICAgUmVtb3ZlIGFsbCB0aGUgc3R5bGVzIG9mIHRoZSBcXFwiVXNlci1BZ2VudC1TdHlsZXNoZWV0XFxcIiwgZXhjZXB0IGZvciB0aGUgJ2Rpc3BsYXknIHByb3BlcnR5XFxuICAgIC0gVGhlIFxcXCJzeW1ib2wgKlxcXCIgcGFydCBpcyB0byBzb2x2ZSBGaXJlZm94IFNWRyBzcHJpdGUgYnVnXFxuICovXFxuICo6d2hlcmUoOm5vdChpZnJhbWUsIGNhbnZhcywgaW1nLCBzdmcsIHZpZGVvKTpub3Qoc3ZnICosIHN5bWJvbCAqKSkge1xcbiAgICBhbGw6IHVuc2V0O1xcbiAgICBkaXNwbGF5OiByZXZlcnQ7XFxufVxcblxcbi8qIFByZWZlcnJlZCBib3gtc2l6aW5nIHZhbHVlICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZWFwcGx5IHRoZSBwb2ludGVyIGN1cnNvciBmb3IgYW5jaG9yIHRhZ3MgKi9cXG5hLCBidXR0b24ge1xcbiAgICBjdXJzb3I6IHJldmVydDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIChidWxsZXRzL251bWJlcnMpICovXFxub2wsIHVsLCBtZW51IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9yIGltYWdlcyB0byBub3QgYmUgYWJsZSB0byBleGNlZWQgdGhlaXIgY29udGFpbmVyICovXFxuaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiByZW1vdmVzIHNwYWNpbmcgYmV0d2VlbiBjZWxscyBpbiB0YWJsZXMgKi9cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi8qIHJldmVydCB0aGUgJ3doaXRlLXNwYWNlJyBwcm9wZXJ0eSBmb3IgdGV4dGFyZWEgZWxlbWVudHMgb24gU2FmYXJpICovXFxudGV4dGFyZWEge1xcbiAgICB3aGl0ZS1zcGFjZTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiBtaW5pbXVtIHN0eWxlIHRvIGFsbG93IHRvIHN0eWxlIG1ldGVyIGVsZW1lbnQgKi9cXG5tZXRlciB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogcmV2ZXJ0O1xcbiAgICBhcHBlYXJhbmNlOiByZXZlcnQ7XFxufVxcblxcbi8qIHJlc2V0IGRlZmF1bHQgdGV4dCBvcGFjaXR5IG9mIGlucHV0IHBsYWNlaG9sZGVyICovXFxuOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB1bnNldDtcXG59XFxuXFxuLyogZml4IHRoZSBmZWF0dXJlIG9mICdoaWRkZW4nIGF0dHJpYnV0ZS5cXG4gICBkaXNwbGF5OnJldmVydDsgcmV2ZXJ0IHRvIGVsZW1lbnQgaW5zdGVhZCBvZiBhdHRyaWJ1dGUgKi9cXG46d2hlcmUoW2hpZGRlbl0pIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogcmV2ZXJ0IGZvciBidWcgaW4gQ2hyb21pdW0gYnJvd3NlcnNcXG4gICAtIGZpeCBmb3IgdGhlIGNvbnRlbnQgZWRpdGFibGUgYXR0cmlidXRlIHdpbGwgd29yayBwcm9wZXJseS4gKi9cXG46d2hlcmUoW2NvbnRlbnRlZGl0YWJsZV0pIHtcXG4gICAgLW1vei11c2VyLW1vZGlmeTogcmVhZC13cml0ZTtcXG4gICAgLXdlYmtpdC11c2VyLW1vZGlmeTogcmVhZC13cml0ZTtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgLXdlYmtpdC1saW5lLWJyZWFrOiBhZnRlci13aGl0ZS1zcGFjZTtcXG59XFxuXFxuLyogYXBwbHkgYmFjayB0aGUgZHJhZ2dhYmxlIGZlYXR1cmUgLSBleGlzdCBvbmx5IGluIENocm9taXVtIGFuZCBTYWZhcmkgKi9cXG46d2hlcmUoW2RyYWdnYWJsZT1cXFwidHJ1ZVxcXCJdKSB7XFxuICAgIC13ZWJraXQtdXNlci1kcmFnOiBlbGVtZW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgc3Ryb2tlPSUyN2xpZ2h0Z3JheSUyNyB3aWR0aD0lMjcyNSUyNyBoZWlnaHQ9JTI3MjUlMjcgdmlld0JveD0lMjcwIDAgMjUgMjUlMjcgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjclM0UlM0NwYXRoIGQ9JTI3TTE2LjAzNiAxOC40NTVsMi40MDQtMi40MDUgNS41ODYgNS41ODctMi40MDQgMi40MDR6TTguNSAyQzEyLjEgMiAxNSA0LjkgMTUgOC41UzEyLjEgMTUgOC41IDE1IDIgMTIuMSAyIDguNSA0LjkgMiA4LjUgMnptMC0yQzMuOCAwIDAgMy44IDAgOC41UzMuOCAxNyA4LjUgMTcgMTcgMTMuMiAxNyA4LjUgMTMuMiAwIDguNSAwek0xNSAxNmExIDEgMCAxIDEgMiAwIDEgMSAwIDEgMS0yIDAlMjclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiNtYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4jY29udGVudCB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuI2Nvcm5lciB7XFxuICB6LWluZGV4OiA5OTk5OTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAtMXB4O1xcbiAgYm90dG9tOiAtMnB4O1xcbiAgY3Vyc29yOiBud3NlLXJlc2l6ZTtcXG59XFxuYm9keSB7XFxuICBmb250OiAxMnB4IHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5idG4ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggMTVweDtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggYmxhY2s7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jY3JlYXRlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMGQ5OWZmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5pbnB1dDpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwZDk5ZmY7XFxufVxcbiNjcmVhdGU6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwZDk5ZmY7XFxufVxcblxcbi50b3Age1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDk5OTk5OTtcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qTElTVCBJVEVNUyovXFxuI2l0ZW0tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nLXRvcDogODBweDtcXG59XFxuLmxpc3QtaXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5saXN0LWl0ZW06aG92ZXIge1xcbiAgb3BhY2l0eTogLjc1O1xcbn1cXG5cXG4ubGlzdC1pdGVtIC5oZWFkZXIsXFxuLmxpc3QtaXRlbSAuYXR0YWNobWVudCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0LWl0ZW0gLmF0dGFjaG1lbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDMyMHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLmxpc3QtaXRlbSAuYXR0YWNoZW1lbnQgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XFxuICAjaXRlbS1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG4gIC5saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmxpc3QtaXRlbSAuYXR0YWNobWVudCB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gIH1cXG59XFxuXFxuLmJhciB7XFxuICBtYXJnaW46IDE2cHggYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJhcjpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTA0RTlCO1xcbn1cXG4uYmFyOmZvY3VzLXdpdGhpbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMkI4RURFO1xcbn1cXG4uc2VhcmNoYmFyIHtcXG4gIGhlaWdodDogNDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG4uc2VhcmNoYmFyOjpwbGFjZWhvbGRlcntcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG4uYmFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMjBweDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcXG59XFxuLmJ0bi1yYW5kb20ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDNkJCQTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIG1hcmdpbjogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi5idG4tcmFuZG9tOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQjhFREU7XFxufVxcbi5idG4tcmFuZG9tOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMDRFOUI7XFxufVxcblxcbi8qXFxuU0tFTEVUT05cXG4qL1xcblxcbi5za2VsZXRvbi1sb2FkZXI6ZW1wdHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRweDtcXG4gIG1hcmdpbjogMTZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIHJpZ2h0LFxcbiAgICAgIHJnYmEoMCwgMTUxLCAyMDEsIDApLFxcbiAgICAgIHJnYmEoMzUsIDY5LCAyMDQsIDAuNSkgNTAlLFxcbiAgICAgIHJnYmEoMTAzLCAxNTEsIDIxNSwgMC43NDcpIDgwJVxcbiAgICApLFxcbiAgICByZ2JhKDksIDExNiwgMjA5LCAwLjIyMSk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggNTAwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICBhbmltYXRpb246IHNoaW5lIDFzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoaW5lIHtcXG4gIHRvIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvdWkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQSxhQUFhO0FBQ2I7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBR0E7RUFDRTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0VBQ2QsOEVBQTZiO0FBQy9iO0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7Q0FFQzs7QUFFRDtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZDs7Ozs7OzRCQU0wQjtFQUMxQiwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuI21haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbiNjb250ZW50IHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4jY29ybmVyIHtcXG4gIHotaW5kZXg6IDk5OTk5O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IC0xcHg7XFxuICBib3R0b206IC0ycHg7XFxuICBjdXJzb3I6IG53c2UtcmVzaXplO1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQ6IDEycHggc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJ0biB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCBibGFjaztcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNjcmVhdGUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwZDk5ZmY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbmlucHV0OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbmJ1dHRvbjpmb2N1cyB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggIzBkOTlmZjtcXG59XFxuI2NyZWF0ZTpmb2N1cyB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggIzBkOTlmZjtcXG59XFxuXFxuLnRvcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogOTk5OTk5O1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLypMSVNUIElURU1TKi9cXG4jaXRlbS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xcbn1cXG4ubGlzdC1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmxpc3QtaXRlbTpob3ZlciB7XFxuICBvcGFjaXR5OiAuNzU7XFxufVxcblxcbi5saXN0LWl0ZW0gLmhlYWRlcixcXG4ubGlzdC1pdGVtIC5hdHRhY2htZW50IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QtaXRlbSAuYXR0YWNobWVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMzIwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4ubGlzdC1pdGVtIC5hdHRhY2hlbWVudCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gICNpdGVtLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcbiAgLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICAubGlzdC1pdGVtIC5hdHRhY2htZW50IHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgfVxcbn1cXG5cXG4uYmFyIHtcXG4gIG1hcmdpbjogMTZweCBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYmFyOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMDRFOUI7XFxufVxcbi5iYXI6Zm9jdXMtd2l0aGluIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyQjhFREU7XFxufVxcbi5zZWFyY2hiYXIge1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcbi5zZWFyY2hiYXI6OnBsYWNlaG9sZGVye1xcbiAgY29sb3I6IGdyYXk7XFxufVxcbi5iYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBzdHJva2U9J2xpZ2h0Z3JheScgd2lkdGg9JzI1JyBoZWlnaHQ9JzI1JyB2aWV3Qm94PScwIDAgMjUgMjUnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NwYXRoIGQ9J00xNi4wMzYgMTguNDU1bDIuNDA0LTIuNDA1IDUuNTg2IDUuNTg3LTIuNDA0IDIuNDA0ek04LjUgMkMxMi4xIDIgMTUgNC45IDE1IDguNVMxMi4xIDE1IDguNSAxNSAyIDEyLjEgMiA4LjUgNC45IDIgOC41IDJ6bTAtMkMzLjggMCAwIDMuOCAwIDguNVMzLjggMTcgOC41IDE3IDE3IDEzLjIgMTcgOC41IDEzLjIgMCA4LjUgMHpNMTUgMTZhMSAxIDAgMSAxIDIgMCAxIDEgMCAxIDEtMiAwJyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVxcXCIpIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xcbn1cXG4uYnRuLXJhbmRvbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUM2QkJBO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgbWFyZ2luOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLmJ0bi1yYW5kb206aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCOEVERTtcXG59XFxuLmJ0bi1yYW5kb206Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzEwNEU5QjtcXG59XFxuXFxuLypcXG5TS0VMRVRPTlxcbiovXFxuXFxuLnNrZWxldG9uLWxvYWRlcjplbXB0eSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHB4O1xcbiAgbWFyZ2luOiAxNnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gcmlnaHQsXFxuICAgICAgcmdiYSgwLCAxNTEsIDIwMSwgMCksXFxuICAgICAgcmdiYSgzNSwgNjksIDIwNCwgMC41KSA1MCUsXFxuICAgICAgcmdiYSgxMDMsIDE1MSwgMjE1LCAwLjc0NykgODAlXFxuICAgICksXFxuICAgIHJnYmEoOSwgMTE2LCAyMDksIDAuMjIxKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MDBweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIGFuaW1hdGlvbjogc2hpbmUgMXMgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hpbmUge1xcbiAgdG8ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgY29uZmlncyA9IHtcbiAgQUlSVEFCTEVfQVBJX0tFWTogXCJrZXlYTklWVm5WdVI5UkNjaVwiLFxuICBQSUNLSVRfQVBJX0tFWTogXCJhcGl1c2VyLXU0eGo4N2RvYml6c21jY2duNHg5NHY3OWk0N2RodEBwaWNraXQuY29tXCIsXG4gIFBJQ0tJVF9TRUNSRVQ6IFwiaHVrZzg5cjlsbWJ3MXB0djNoMWZqamIwZG5pMGhhXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWdzO1xuIiwiLy9SRVNJWkVSIEZVTkNUSU9OU1xuY29uc3QgY29ybmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3JuZXJcIik7XG5mdW5jdGlvbiByZXNpemVXaW5kb3coZSkge1xuICBjb25zdCBzaXplID0ge1xuICAgIHc6IE1hdGgubWF4KDUwLCBNYXRoLmZsb29yKGUuY2xpZW50WCArIDUpKSxcbiAgICBoOiBNYXRoLm1heCg1MCwgTWF0aC5mbG9vcihlLmNsaWVudFkgKyA1KSksXG4gIH07XG4gIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogXCJyZXNpemVcIiwgc2l6ZTogc2l6ZSB9IH0sIFwiKlwiKTtcbn1cbmNvcm5lci5vbnBvaW50ZXJkb3duID0gKGUpID0+IHtcbiAgY29ybmVyLm9ucG9pbnRlcm1vdmUgPSByZXNpemVXaW5kb3c7XG4gIGNvcm5lci5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG59O1xuY29ybmVyLm9ucG9pbnRlcnVwID0gKGUpID0+IHtcbiAgY29ybmVyLm9ucG9pbnRlcm1vdmUgPSBudWxsO1xuICBjb3JuZXIucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInVpXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBcIi4vc3R5bGUvdWkuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi91dGlscy9yZXNpemVyXCI7XG5pbXBvcnQgY29uZmlncyBmcm9tIFwiLi9jb250ZW50cmVlbC5jb25maWcuanNcIjtcbmxldCBzZWxlY3Rpb25TaXplID0gMDtcbmxldCByYW5kb21BcnIgPSBbXTtcbmxldCBsb2FkaW5nID0gdHJ1ZTtcbmNvbnN0IGxvYWRlciA9IFwiPGRpdiBjbGFzcz0nc2tlbGV0b24tbG9hZGVyJz48L2Rpdj5cIjtcbmxldCBQaWNraXRNZWRpYUFycmF5ID0gW107XG5sZXQgY3VycmVudFBhZ2UgPSAxO1xuY29uc3QgcHJldmlld1NpemUgPSAwO1xuY29uc3QgcmFuZG9tQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kb21cIik7XG5yYW5kb21CdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyBkbzogXCJyYW5kb21cIiB9IH0sIFwiKlwiKTtcbn07XG5jb25zdCBpdGVtTGlzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS1saXN0XCIpO1xuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XG5jb25zdCBwaWNraXRIZWFkZXJzID0ge1xuICAgIFwiUGlja2l0LUFwaS1LZXlcIjogYCR7Y29uZmlncy5QSUNLSVRfQVBJX0tFWX1gLFxuICAgIFwiUGlja2l0LUFwaS1TZWNyZXRcIjogYCR7Y29uZmlncy5QSUNLSVRfU0VDUkVUfWAsXG4gICAgXCJQaWNraXQtQXBpLUxpYnJhcnlcIjogXCJtZWRpYVwiLFxufTtcbmNvbnN0IGJhc2VDYWxsID0gXCJodHRwczovL2ZpbGVzLnBpY2tpdC5jb20vYXBpL3YyL2ZpbGVzP3BhZ2VfbGltaXQ9MjAwXCI7XG4vLyBFdmVudCBsaXN0ZW5lciBmb3Igc2VhcmNoXG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBsZXQgc2VhcmNoVGVybSA9IFwiXCI7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgc2VhcmNoVGVybSA9IHNlYXJjaEJhci52YWx1ZTtcbiAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgZG86IFwibG9hZFwiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgIHNlYXJjaFN0cmluZzogc2VhcmNoVGVybSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIFwiKlwiKTtcbiAgICB9XG59KTtcbi8vIE9uIG5ldHdvcmsgcmVxdWVzdCBmcm9tIHRoZSBwbHVnaW4sIGZldGNoIGluZm9ybWF0aW9uIGZyb20gUGlja2l0LlxuLy8gVE9ETzogQWRkIG9mZnNldCBpbnN0ZWFkIG9mIGl0ZXJhdGlpbmcgb24gcmVxdWVzdG1heFxud2luZG93Lm9ubWVzc2FnZSA9IChldmVudCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbG9hZGluZyA9ICFsb2FkaW5nO1xuICAgIGl0ZW1MaXN0RGl2LmlubmVySFRNTCA9IGxvYWRpbmcgPyBsb2FkZXIgOiBcIlwiO1xuICAgIGlmIChldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2UudHlwZSA9PT0gXCJtdWx0aXBsZXNcIikge1xuICAgICAgICBzZWxlY3Rpb25TaXplID0gZXZlbnQuZGF0YS5wbHVnaW5NZXNzYWdlLnNpemU7XG4gICAgfVxuICAgIC8vIE9uIHN0YXJ0dXAgcnVuIHRocm91Z2ggc2FtcGxlIHBpY2tpdCBsaWJyYXJ5IHRvIGdldCBhIHJhbmRvbSBhcnJheSBvZiBpbWFnZXMgdG8gcG9wdWxhdGUgd2l0aFxuICAgIGlmIChldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2Uuc3R5bGUgPT09IFwiZmlyc3QtY2FsbFwiKSB7XG4gICAgICAgIGZldGNoKGAke2Jhc2VDYWxsfWAsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHBpY2tpdEhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBDbGVhciBhcnJheSBzaW5jZSBJJ20ganVzdCBsb29waW5nIHRocm91Z2ggbWF4UmVjb3Jkc1xuICAgICAgICAgICAgUGlja2l0TWVkaWFBcnJheSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VBcnJheSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICByZXNwb25zZUFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAvL0xvb3AgdGhyb3VnaCBlbnRyaWVzIGFuZCBhZGQgdGhlICdmaWVsZHMnIG9mIGVhY2ggZW50cnkgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICAgICAgUGlja2l0TWVkaWFBcnJheS5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGUpID0+IFBvcHVsYXRlVmlldygpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gU2VhcmNoaW5nIHJlbmRlcnMgb3V0cHV0IHdpdGggbWF4IHBhZ2Ugc2l6ZSBvZiBhbGwgZm91bmQgaW1hZ2VzXG4gICAgaWYgKGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZS5zdHlsZSA9PT0gXCJzZWFyY2hcIikge1xuICAgICAgICBmZXRjaChgJHtiYXNlQ2FsbH1gICtcbiAgICAgICAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgICAgIHBhZ2VfbGltaXQ6IFwiMjAwXCIsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiBldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2Uuc2VhcmNoU3RyaW5nLFxuICAgICAgICAgICAgfSksIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHBpY2tpdEhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBDbGVhciBhcnJheSBzaW5jZSBJJ20ganVzdCBsb29waW5nIHRocm91Z2ggbWF4UmVjb3Jkc1xuICAgICAgICAgICAgUGlja2l0TWVkaWFBcnJheSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VBcnJheSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICByZXNwb25zZUFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAvL0xvb3AgdGhyb3VnaCBlbnRyaWVzIGFuZCBhZGQgdGhlICdmaWVsZHMnIG9mIGVhY2ggZW50cnkgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICAgICAgUGlja2l0TWVkaWFBcnJheS5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGUpID0+IHtcbiAgICAgICAgICAgIFBvcHVsYXRlVmlldygpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gSWYgcmFuZG9tLCByZW5kZXIgcmFuZG9tIGltYWdlIGZyb20gZGVmYXVsdCBhcnJheVxuICAgIGlmIChldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2Uuc3R5bGUgPT09IFwicmFuZG9tXCIgJiZcbiAgICAgICAgUGlja2l0TWVkaWFBcnJheS5sZW5ndGggPj0gMSkge1xuICAgICAgICBsZXQgcmFuZG9tSW1hZ2UgPSBQaWNraXRNZWRpYUFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFBpY2tpdE1lZGlhQXJyYXkubGVuZ3RoKV1cbiAgICAgICAgICAgIC5maWxlLnByZXZpZXdzW3ByZXZpZXdTaXplXTtcbiAgICAgICAgQWRkSW1hZ2VUb1VJKHJhbmRvbUltYWdlKTtcbiAgICB9XG59KTtcbmNvbnN0IEFkZEltYWdlVG9VSSA9IChpbWFnZSkgPT4ge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgZmV0Y2goaW1hZ2UudXJsKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5ibG9iKCkpXG4gICAgICAgICAgICAudGhlbigoYmxvYikgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKG5ldyBVaW50OEFycmF5KHJlYWRlci5yZXN1bHQpKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICAgICAgfSkpXG4gICAgICAgICAgICAudGhlbigoaW1hZ2VCeXRlcykgPT4ge1xuICAgICAgICAgICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXR0YWNobWVudFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUJ5dGVzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LCBcIipcIik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgaW1nLnNyYyA9IGltYWdlLnVybDtcbn07XG4vLyBQb3B1bGF0ZXMgdmlldyB3aXRoIGltYWdlcyBmcm9tIHBpY2tpdFxuY29uc3QgUG9wdWxhdGVWaWV3ID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKGl0ZW1MaXN0RGl2LmlubmVySFRNTCAhPSBudWxsKSB7XG4gICAgICAgIGl0ZW1MaXN0RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIFBpY2tpdE1lZGlhQXJyYXkubWFwKChtZWRpYSkgPT4ge1xuICAgICAgICBjb25zdCBpbWdGaWxlID0gbWVkaWEuZmlsZS5wcmV2aWV3c1twcmV2aWV3U2l6ZV07XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gXCJsaXN0LWl0ZW1cIjtcbiAgICAgICAgY29uc3QgYXR0YWNobWVudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBhdHRhY2htZW50LmNsYXNzTmFtZSA9IFwiYXR0YWNobWVudFwiO1xuICAgICAgICBhdHRhY2htZW50LndpZHRoID0gaW1nRmlsZS53aWR0aDtcbiAgICAgICAgYXR0YWNobWVudC5oZWlnaHQgPSBpbWdGaWxlLmhlaWdodDtcbiAgICAgICAgYXR0YWNobWVudC5zcmMgPSBpbWdGaWxlLnVybDtcbiAgICAgICAgLy9saXN0SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbnMpO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChhdHRhY2htZW50KTtcbiAgICAgICAgaXRlbUxpc3REaXYuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICBhdHRhY2htZW50Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBBZGRJbWFnZVRvVUkoaW1nRmlsZSk7XG4gICAgICAgIH07XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==