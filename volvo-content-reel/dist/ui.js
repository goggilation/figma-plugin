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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: 'Helvetica', sans-serif;\n  font-size: 12px;\n  margin: 0;\n  box-sizing: border-box;\n}\n#main {\n  height: 100%;\n  overflow: auto;\n}\n#content {\n  overflow: auto;\n}\n#corner {\n  z-index: 99999;\n  position: fixed;\n  right: -1px;\n  bottom: -2px;\n  cursor: nwse-resize;\n}\nbody {\n  font: 12px sans-serif;\n  text-align: center;\n}\n.btn {\n  border-radius: 5px;\n  background: white;\n  color: black;\n  border: none;\n  padding: 8px 15px;\n  margin: 0 5px;\n  box-shadow: inset 0 0 0 1px black;\n  outline: none;\n}\n#create {\n  box-shadow: none;\n  background: #0d99ff;\n  color: white;\n}\ninput {\n  border: none;\n  outline: none;\n  padding: 8px;\n}\ninput:hover {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\nbutton:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n#create:focus {\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);\n}\ninput:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n\n.top {\n  margin: 0 16px;\n  display: flex;\n}\n\n/*LIST ITEMS*/\n#item-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.list-item {\n  margin-bottom: 24px;\n  width: auto;\n  height: auto;\n}\n.list-item:hover {\n  opacity: .75;\n}\n\n.list-item .header,\n.list-item .attachment {\n  cursor: pointer;\n}\n\n.list-item .attachment {\n  width: 100%;\n  height: 100%;\n  max-width: 320px;\n  object-fit: contain;\n}\n.list-item .attachement img {\n  width: 100%;\n  height: auto;\n}\n\n\n@media only screen and (max-width: 630px) {\n  #item-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n  .list-item {\n    margin-bottom: 24px;\n    width: 100%;\n    height: auto;\n  }\n  .list-item .attachment {\n    max-width: 100%;\n    padding: 16px;\n  }\n}\n\n.bar {\n  margin: 16px auto;\n  width: 100%;\n  border: 1px solid #dcdcdc;\n  position: relative;\n}\n.bar:hover {\n  border: 1px solid #104E9B;\n}\n.bar:focus-within {\n  border: 1px solid #2B8EDE;\n}\n.searchbar {\n  height: 45px;\n  border: none;\n  width: 100%;\n  border-radius: inherit;\n  font-size: 14px;\n  outline: none;\n  text-align: left;\n  padding-left: 40px;\n}\n.searchbar::placeholder{\n  color: gray;\n}\n.bar:before {\n  content: \"\";\n  position: absolute;\n  left: 10px;\n  top: 0;\n  bottom: 0;\n  width: 20px;\n  color: inherit;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center / contain no-repeat;\n}\n.btn-random {\n  cursor: pointer;\n  background-color: #1C6BBA;\n  color: white;\n  font-size: 14px;\n  padding: 10px 20px;\n  width: 230px;\n  margin: 16px;\n  border-radius: 0;\n}\n.btn-random:hover {\n  background-color: #2B8EDE;\n}\n.btn-random:focus {\n  border: 1px solid #104E9B;\n}", "",{"version":3,"sources":["webpack://./src/style/ui.css"],"names":[],"mappings":"AAAA;EACE,oCAAoC;EACpC,eAAe;EACf,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;EACd,eAAe;EACf,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,iCAAiC;EACjC,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;AACd;AACA;EACE,8CAA8C;AAChD;AACA;EACE,mCAAmC;AACrC;AACA;EACE,8CAA8C;AAChD;AACA;EACE,mCAAmC;AACrC;;AAEA;EACE,cAAc;EACd,aAAa;AACf;;AAEA,aAAa;AACb;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;AAC/B;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;AACA;EACE,YAAY;AACd;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;AACd;;;AAGA;EACE;IACE,aAAa;IACb,eAAe;IACf,6BAA6B;EAC/B;EACA;IACE,mBAAmB;IACnB,WAAW;IACX,YAAY;EACd;EACA;IACE,eAAe;IACf,aAAa;EACf;AACF;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,SAAS;EACT,WAAW;EACX,cAAc;EACd,8EAA6b;AAC/b;AACA;EACE,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B","sourcesContent":["* {\n  font-family: 'Helvetica', sans-serif;\n  font-size: 12px;\n  margin: 0;\n  box-sizing: border-box;\n}\n#main {\n  height: 100%;\n  overflow: auto;\n}\n#content {\n  overflow: auto;\n}\n#corner {\n  z-index: 99999;\n  position: fixed;\n  right: -1px;\n  bottom: -2px;\n  cursor: nwse-resize;\n}\nbody {\n  font: 12px sans-serif;\n  text-align: center;\n}\n.btn {\n  border-radius: 5px;\n  background: white;\n  color: black;\n  border: none;\n  padding: 8px 15px;\n  margin: 0 5px;\n  box-shadow: inset 0 0 0 1px black;\n  outline: none;\n}\n#create {\n  box-shadow: none;\n  background: #0d99ff;\n  color: white;\n}\ninput {\n  border: none;\n  outline: none;\n  padding: 8px;\n}\ninput:hover {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\nbutton:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n#create:focus {\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);\n}\ninput:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n\n.top {\n  margin: 0 16px;\n  display: flex;\n}\n\n/*LIST ITEMS*/\n#item-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.list-item {\n  margin-bottom: 24px;\n  width: auto;\n  height: auto;\n}\n.list-item:hover {\n  opacity: .75;\n}\n\n.list-item .header,\n.list-item .attachment {\n  cursor: pointer;\n}\n\n.list-item .attachment {\n  width: 100%;\n  height: 100%;\n  max-width: 320px;\n  object-fit: contain;\n}\n.list-item .attachement img {\n  width: 100%;\n  height: auto;\n}\n\n\n@media only screen and (max-width: 630px) {\n  #item-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n  .list-item {\n    margin-bottom: 24px;\n    width: 100%;\n    height: auto;\n  }\n  .list-item .attachment {\n    max-width: 100%;\n    padding: 16px;\n  }\n}\n\n.bar {\n  margin: 16px auto;\n  width: 100%;\n  border: 1px solid #dcdcdc;\n  position: relative;\n}\n.bar:hover {\n  border: 1px solid #104E9B;\n}\n.bar:focus-within {\n  border: 1px solid #2B8EDE;\n}\n.searchbar {\n  height: 45px;\n  border: none;\n  width: 100%;\n  border-radius: inherit;\n  font-size: 14px;\n  outline: none;\n  text-align: left;\n  padding-left: 40px;\n}\n.searchbar::placeholder{\n  color: gray;\n}\n.bar:before {\n  content: \"\";\n  position: absolute;\n  left: 10px;\n  top: 0;\n  bottom: 0;\n  width: 20px;\n  color: inherit;\n  background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='lightgray' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E\") center / contain no-repeat;\n}\n.btn-random {\n  cursor: pointer;\n  background-color: #1C6BBA;\n  color: white;\n  font-size: 14px;\n  padding: 10px 20px;\n  width: 230px;\n  margin: 16px;\n  border-radius: 0;\n}\n.btn-random:hover {\n  background-color: #2B8EDE;\n}\n.btn-random:focus {\n  border: 1px solid #104E9B;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL3NyYy9zdHlsZS9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vc3JjL3N0eWxlL3VpLmNzcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vc3JjL3N0eWxlL3Jlc2V0LmNzcz80NDVlIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL3NyYy9zdHlsZS91aS5jc3M/MDVkZiIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL3NyYy9jb250ZW50cmVlbC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vc3JjL3V0aWxzL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9zcmMvdWkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKioqXFxuICAgIFRoZSBuZXcgQ1NTIHJlc2V0IC0gdmVyc2lvbiAxLjUuMSAobGFzdCB1cGRhdGVkIDEuMy4yMDIyKVxcbiAgICBHaXRIdWIgcGFnZTogaHR0cHM6Ly9naXRodWIuY29tL2VsYWQyNDEyL3RoZS1uZXctY3NzLXJlc2V0XFxuKioqL1xcblxcbi8qXFxuICAgIFJlbW92ZSBhbGwgdGhlIHN0eWxlcyBvZiB0aGUgXFxcIlVzZXItQWdlbnQtU3R5bGVzaGVldFxcXCIsIGV4Y2VwdCBmb3IgdGhlICdkaXNwbGF5JyBwcm9wZXJ0eVxcbiAgICAtIFRoZSBcXFwic3ltYm9sICpcXFwiIHBhcnQgaXMgdG8gc29sdmUgRmlyZWZveCBTVkcgc3ByaXRlIGJ1Z1xcbiAqL1xcbiAqOndoZXJlKDpub3QoaWZyYW1lLCBjYW52YXMsIGltZywgc3ZnLCB2aWRlbyk6bm90KHN2ZyAqLCBzeW1ib2wgKikpIHtcXG4gICAgYWxsOiB1bnNldDtcXG4gICAgZGlzcGxheTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiBQcmVmZXJyZWQgYm94LXNpemluZyB2YWx1ZSAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVhcHBseSB0aGUgcG9pbnRlciBjdXJzb3IgZm9yIGFuY2hvciB0YWdzICovXFxuYSwgYnV0dG9uIHtcXG4gICAgY3Vyc29yOiByZXZlcnQ7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyAoYnVsbGV0cy9udW1iZXJzKSAqL1xcbm9sLCB1bCwgbWVudSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvciBpbWFnZXMgdG8gbm90IGJlIGFibGUgdG8gZXhjZWVkIHRoZWlyIGNvbnRhaW5lciAqL1xcbmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLyogcmVtb3ZlcyBzcGFjaW5nIGJldHdlZW4gY2VsbHMgaW4gdGFibGVzICovXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4vKiByZXZlcnQgdGhlICd3aGl0ZS1zcGFjZScgcHJvcGVydHkgZm9yIHRleHRhcmVhIGVsZW1lbnRzIG9uIFNhZmFyaSAqL1xcbnRleHRhcmVhIHtcXG4gICAgd2hpdGUtc3BhY2U6IHJldmVydDtcXG59XFxuXFxuLyogbWluaW11bSBzdHlsZSB0byBhbGxvdyB0byBzdHlsZSBtZXRlciBlbGVtZW50ICovXFxubWV0ZXIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHJldmVydDtcXG4gICAgYXBwZWFyYW5jZTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiByZXNldCBkZWZhdWx0IHRleHQgb3BhY2l0eSBvZiBpbnB1dCBwbGFjZWhvbGRlciAqL1xcbjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdW5zZXQ7XFxufVxcblxcbi8qIGZpeCB0aGUgZmVhdHVyZSBvZiAnaGlkZGVuJyBhdHRyaWJ1dGUuXFxuICAgZGlzcGxheTpyZXZlcnQ7IHJldmVydCB0byBlbGVtZW50IGluc3RlYWQgb2YgYXR0cmlidXRlICovXFxuOndoZXJlKFtoaWRkZW5dKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIHJldmVydCBmb3IgYnVnIGluIENocm9taXVtIGJyb3dzZXJzXFxuICAgLSBmaXggZm9yIHRoZSBjb250ZW50IGVkaXRhYmxlIGF0dHJpYnV0ZSB3aWxsIHdvcmsgcHJvcGVybHkuICovXFxuOndoZXJlKFtjb250ZW50ZWRpdGFibGVdKSB7XFxuICAgIC1tb3otdXNlci1tb2RpZnk6IHJlYWQtd3JpdGU7XFxuICAgIC13ZWJraXQtdXNlci1tb2RpZnk6IHJlYWQtd3JpdGU7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIC13ZWJraXQtbGluZS1icmVhazogYWZ0ZXItd2hpdGUtc3BhY2U7XFxufVxcblxcbi8qIGFwcGx5IGJhY2sgdGhlIGRyYWdnYWJsZSBmZWF0dXJlIC0gZXhpc3Qgb25seSBpbiBDaHJvbWl1bSBhbmQgU2FmYXJpICovXFxuOndoZXJlKFtkcmFnZ2FibGU9XFxcInRydWVcXFwiXSkge1xcbiAgICAtd2Via2l0LXVzZXItZHJhZzogZWxlbWVudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0dBR0c7O0FBRUg7OztFQUdFO0NBQ0Q7SUFDRyxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQSwrQkFBK0I7QUFDL0I7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQSwrQ0FBK0M7QUFDL0M7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLHlDQUF5QztBQUN6QztJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQSx3REFBd0Q7QUFDeEQ7SUFDSSxlQUFlO0FBQ25COztBQUVBLDRDQUE0QztBQUM1QztJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQSxzRUFBc0U7QUFDdEU7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsa0RBQWtEO0FBQ2xEO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7QUFFQSxvREFBb0Q7QUFDcEQ7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOzJEQUMyRDtBQUMzRDtJQUNJLGFBQWE7QUFDakI7O0FBRUE7aUVBQ2lFO0FBQ2pFO0lBQ0ksNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIscUNBQXFDO0FBQ3pDOztBQUVBLHlFQUF5RTtBQUN6RTtJQUNJLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqXFxuICAgIFRoZSBuZXcgQ1NTIHJlc2V0IC0gdmVyc2lvbiAxLjUuMSAobGFzdCB1cGRhdGVkIDEuMy4yMDIyKVxcbiAgICBHaXRIdWIgcGFnZTogaHR0cHM6Ly9naXRodWIuY29tL2VsYWQyNDEyL3RoZS1uZXctY3NzLXJlc2V0XFxuKioqL1xcblxcbi8qXFxuICAgIFJlbW92ZSBhbGwgdGhlIHN0eWxlcyBvZiB0aGUgXFxcIlVzZXItQWdlbnQtU3R5bGVzaGVldFxcXCIsIGV4Y2VwdCBmb3IgdGhlICdkaXNwbGF5JyBwcm9wZXJ0eVxcbiAgICAtIFRoZSBcXFwic3ltYm9sICpcXFwiIHBhcnQgaXMgdG8gc29sdmUgRmlyZWZveCBTVkcgc3ByaXRlIGJ1Z1xcbiAqL1xcbiAqOndoZXJlKDpub3QoaWZyYW1lLCBjYW52YXMsIGltZywgc3ZnLCB2aWRlbyk6bm90KHN2ZyAqLCBzeW1ib2wgKikpIHtcXG4gICAgYWxsOiB1bnNldDtcXG4gICAgZGlzcGxheTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiBQcmVmZXJyZWQgYm94LXNpemluZyB2YWx1ZSAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVhcHBseSB0aGUgcG9pbnRlciBjdXJzb3IgZm9yIGFuY2hvciB0YWdzICovXFxuYSwgYnV0dG9uIHtcXG4gICAgY3Vyc29yOiByZXZlcnQ7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyAoYnVsbGV0cy9udW1iZXJzKSAqL1xcbm9sLCB1bCwgbWVudSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvciBpbWFnZXMgdG8gbm90IGJlIGFibGUgdG8gZXhjZWVkIHRoZWlyIGNvbnRhaW5lciAqL1xcbmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLyogcmVtb3ZlcyBzcGFjaW5nIGJldHdlZW4gY2VsbHMgaW4gdGFibGVzICovXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4vKiByZXZlcnQgdGhlICd3aGl0ZS1zcGFjZScgcHJvcGVydHkgZm9yIHRleHRhcmVhIGVsZW1lbnRzIG9uIFNhZmFyaSAqL1xcbnRleHRhcmVhIHtcXG4gICAgd2hpdGUtc3BhY2U6IHJldmVydDtcXG59XFxuXFxuLyogbWluaW11bSBzdHlsZSB0byBhbGxvdyB0byBzdHlsZSBtZXRlciBlbGVtZW50ICovXFxubWV0ZXIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHJldmVydDtcXG4gICAgYXBwZWFyYW5jZTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiByZXNldCBkZWZhdWx0IHRleHQgb3BhY2l0eSBvZiBpbnB1dCBwbGFjZWhvbGRlciAqL1xcbjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdW5zZXQ7XFxufVxcblxcbi8qIGZpeCB0aGUgZmVhdHVyZSBvZiAnaGlkZGVuJyBhdHRyaWJ1dGUuXFxuICAgZGlzcGxheTpyZXZlcnQ7IHJldmVydCB0byBlbGVtZW50IGluc3RlYWQgb2YgYXR0cmlidXRlICovXFxuOndoZXJlKFtoaWRkZW5dKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIHJldmVydCBmb3IgYnVnIGluIENocm9taXVtIGJyb3dzZXJzXFxuICAgLSBmaXggZm9yIHRoZSBjb250ZW50IGVkaXRhYmxlIGF0dHJpYnV0ZSB3aWxsIHdvcmsgcHJvcGVybHkuICovXFxuOndoZXJlKFtjb250ZW50ZWRpdGFibGVdKSB7XFxuICAgIC1tb3otdXNlci1tb2RpZnk6IHJlYWQtd3JpdGU7XFxuICAgIC13ZWJraXQtdXNlci1tb2RpZnk6IHJlYWQtd3JpdGU7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIC13ZWJraXQtbGluZS1icmVhazogYWZ0ZXItd2hpdGUtc3BhY2U7XFxufVxcblxcbi8qIGFwcGx5IGJhY2sgdGhlIGRyYWdnYWJsZSBmZWF0dXJlIC0gZXhpc3Qgb25seSBpbiBDaHJvbWl1bSBhbmQgU2FmYXJpICovXFxuOndoZXJlKFtkcmFnZ2FibGU9XFxcInRydWVcXFwiXSkge1xcbiAgICAtd2Via2l0LXVzZXItZHJhZzogZWxlbWVudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHN0cm9rZT0lMjdsaWdodGdyYXklMjcgd2lkdGg9JTI3MjUlMjcgaGVpZ2h0PSUyNzI1JTI3IHZpZXdCb3g9JTI3MCAwIDI1IDI1JTI3IGZpbGwtcnVsZT0lMjdldmVub2RkJTI3JTNFJTNDcGF0aCBkPSUyN00xNi4wMzYgMTguNDU1bDIuNDA0LTIuNDA1IDUuNTg2IDUuNTg3LTIuNDA0IDIuNDA0ek04LjUgMkMxMi4xIDIgMTUgNC45IDE1IDguNVMxMi4xIDE1IDguNSAxNSAyIDEyLjEgMiA4LjUgNC45IDIgOC41IDJ6bTAtMkMzLjggMCAwIDMuOCAwIDguNVMzLjggMTcgOC41IDE3IDE3IDEzLjIgMTcgOC41IDEzLjIgMCA4LjUgMHpNMTUgMTZhMSAxIDAgMSAxIDIgMCAxIDEgMCAxIDEtMiAwJTI3JTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYScsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4jbWFpbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuI2NvbnRlbnQge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbiNjb3JuZXIge1xcbiAgei1pbmRleDogOTk5OTk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogLTFweDtcXG4gIGJvdHRvbTogLTJweDtcXG4gIGN1cnNvcjogbndzZS1yZXNpemU7XFxufVxcbmJvZHkge1xcbiAgZm9udDogMTJweCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYnRuIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IGJsYWNrO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI2NyZWF0ZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZDogIzBkOTlmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuaW5wdXQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMGQ5OWZmO1xcbn1cXG4jY3JlYXRlOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMGQ5OWZmO1xcbn1cXG5cXG4udG9wIHtcXG4gIG1hcmdpbjogMCAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLypMSVNUIElURU1TKi9cXG4jaXRlbS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmxpc3QtaXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5saXN0LWl0ZW06aG92ZXIge1xcbiAgb3BhY2l0eTogLjc1O1xcbn1cXG5cXG4ubGlzdC1pdGVtIC5oZWFkZXIsXFxuLmxpc3QtaXRlbSAuYXR0YWNobWVudCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0LWl0ZW0gLmF0dGFjaG1lbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDMyMHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLmxpc3QtaXRlbSAuYXR0YWNoZW1lbnQgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XFxuICAjaXRlbS1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG4gIC5saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmxpc3QtaXRlbSAuYXR0YWNobWVudCB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gIH1cXG59XFxuXFxuLmJhciB7XFxuICBtYXJnaW46IDE2cHggYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJhcjpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTA0RTlCO1xcbn1cXG4uYmFyOmZvY3VzLXdpdGhpbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMkI4RURFO1xcbn1cXG4uc2VhcmNoYmFyIHtcXG4gIGhlaWdodDogNDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG4uc2VhcmNoYmFyOjpwbGFjZWhvbGRlcntcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG4uYmFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMjBweDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcXG59XFxuLmJ0bi1yYW5kb20ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDNkJCQTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIG1hcmdpbjogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi5idG4tcmFuZG9tOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQjhFREU7XFxufVxcbi5idG4tcmFuZG9tOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMDRFOUI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS91aS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUEsYUFBYTtBQUNiO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBR0E7RUFDRTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0VBQ2QsOEVBQTZiO0FBQy9iO0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiNtYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4jY29udGVudCB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuI2Nvcm5lciB7XFxuICB6LWluZGV4OiA5OTk5OTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAtMXB4O1xcbiAgYm90dG9tOiAtMnB4O1xcbiAgY3Vyc29yOiBud3NlLXJlc2l6ZTtcXG59XFxuYm9keSB7XFxuICBmb250OiAxMnB4IHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5idG4ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggMTVweDtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggYmxhY2s7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jY3JlYXRlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMGQ5OWZmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5pbnB1dDpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwZDk5ZmY7XFxufVxcbiNjcmVhdGU6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwZDk5ZmY7XFxufVxcblxcbi50b3Age1xcbiAgbWFyZ2luOiAwIDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKkxJU1QgSVRFTVMqL1xcbiNpdGVtLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4ubGlzdC1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmxpc3QtaXRlbTpob3ZlciB7XFxuICBvcGFjaXR5OiAuNzU7XFxufVxcblxcbi5saXN0LWl0ZW0gLmhlYWRlcixcXG4ubGlzdC1pdGVtIC5hdHRhY2htZW50IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QtaXRlbSAuYXR0YWNobWVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMzIwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4ubGlzdC1pdGVtIC5hdHRhY2hlbWVudCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gICNpdGVtLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcbiAgLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICAubGlzdC1pdGVtIC5hdHRhY2htZW50IHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgfVxcbn1cXG5cXG4uYmFyIHtcXG4gIG1hcmdpbjogMTZweCBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYmFyOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMDRFOUI7XFxufVxcbi5iYXI6Zm9jdXMtd2l0aGluIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyQjhFREU7XFxufVxcbi5zZWFyY2hiYXIge1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcbi5zZWFyY2hiYXI6OnBsYWNlaG9sZGVye1xcbiAgY29sb3I6IGdyYXk7XFxufVxcbi5iYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBzdHJva2U9J2xpZ2h0Z3JheScgd2lkdGg9JzI1JyBoZWlnaHQ9JzI1JyB2aWV3Qm94PScwIDAgMjUgMjUnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NwYXRoIGQ9J00xNi4wMzYgMTguNDU1bDIuNDA0LTIuNDA1IDUuNTg2IDUuNTg3LTIuNDA0IDIuNDA0ek04LjUgMkMxMi4xIDIgMTUgNC45IDE1IDguNVMxMi4xIDE1IDguNSAxNSAyIDEyLjEgMiA4LjUgNC45IDIgOC41IDJ6bTAtMkMzLjggMCAwIDMuOCAwIDguNVMzLjggMTcgOC41IDE3IDE3IDEzLjIgMTcgOC41IDEzLjIgMCA4LjUgMHpNMTUgMTZhMSAxIDAgMSAxIDIgMCAxIDEgMCAxIDEtMiAwJyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVxcXCIpIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xcbn1cXG4uYnRuLXJhbmRvbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUM2QkJBO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgbWFyZ2luOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLmJ0bi1yYW5kb206aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCOEVERTtcXG59XFxuLmJ0bi1yYW5kb206Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzEwNEU5QjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCBjb25maWdzID0ge1xuICBBSVJUQUJMRV9BUElfS0VZOiBcImtleVhOSVZWblZ1UjlSQ2NpXCIsXG4gIFBJQ0tJVF9BUElfS0VZOiBcImFwaXVzZXItdTR4ajg3ZG9iaXpzbWNjZ240eDk0djc5aTQ3ZGh0QHBpY2tpdC5jb21cIixcbiAgUElDS0lUX1NFQ1JFVDogXCJodWtnODlyOWxtYncxcHR2M2gxZmpqYjBkbmkwaGFcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3M7XG4iLCIvL1JFU0laRVIgRlVOQ1RJT05TXG5jb25zdCBjb3JuZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcm5lclwiKTtcbmZ1bmN0aW9uIHJlc2l6ZVdpbmRvdyhlKSB7XG4gIGNvbnN0IHNpemUgPSB7XG4gICAgdzogTWF0aC5tYXgoNTAsIE1hdGguZmxvb3IoZS5jbGllbnRYICsgNSkpLFxuICAgIGg6IE1hdGgubWF4KDUwLCBNYXRoLmZsb29yKGUuY2xpZW50WSArIDUpKSxcbiAgfTtcbiAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiBcInJlc2l6ZVwiLCBzaXplOiBzaXplIH0gfSwgXCIqXCIpO1xufVxuY29ybmVyLm9ucG9pbnRlcmRvd24gPSAoZSkgPT4ge1xuICBjb3JuZXIub25wb2ludGVybW92ZSA9IHJlc2l6ZVdpbmRvdztcbiAgY29ybmVyLnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbn07XG5jb3JuZXIub25wb2ludGVydXAgPSAoZSkgPT4ge1xuICBjb3JuZXIub25wb2ludGVybW92ZSA9IG51bGw7XG4gIGNvcm5lci5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwidWlcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFwiLi9zdHlsZS91aS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL3V0aWxzL3Jlc2l6ZXJcIjtcbmltcG9ydCBjb25maWdzIGZyb20gXCIuL2NvbnRlbnRyZWVsLmNvbmZpZy5qc1wiO1xubGV0IHNlbGVjdGlvblNpemUgPSAwO1xubGV0IHJhbmRvbUFyciA9IFtdO1xubGV0IFBpY2tpdE1lZGlhQXJyYXkgPSBbXTtcbmxldCBjdXJyZW50UGFnZSA9IDE7XG5jb25zdCBwcmV2aWV3U2l6ZSA9IDA7XG5jb25zdCByYW5kb21CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbVwiKTtcbnJhbmRvbUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IGRvOiBcInJhbmRvbVwiIH0gfSwgXCIqXCIpO1xufTtcbmNvbnN0IGl0ZW1MaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtLWxpc3RcIik7XG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbmNvbnN0IHBpY2tpdEhlYWRlcnMgPSB7XG4gICAgXCJQaWNraXQtQXBpLUtleVwiOiBgJHtjb25maWdzLlBJQ0tJVF9BUElfS0VZfWAsXG4gICAgXCJQaWNraXQtQXBpLVNlY3JldFwiOiBgJHtjb25maWdzLlBJQ0tJVF9TRUNSRVR9YCxcbiAgICBcIlBpY2tpdC1BcGktTGlicmFyeVwiOiBcIm1lZGlhXCIsXG59O1xuY29uc3QgYmFzZUNhbGwgPSBcImh0dHBzOi8vZmlsZXMucGlja2l0LmNvbS9hcGkvdjIvZmlsZXM/cGFnZV9saW1pdD0yMDBcIjtcbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBzZWFyY2hcbnNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGxldCBzZWFyY2hUZXJtID0gXCJcIjtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBzZWFyY2hUZXJtID0gc2VhcmNoQmFyLnZhbHVlO1xuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICBkbzogXCJsb2FkXCIsXG4gICAgICAgICAgICAgICAgc3R5bGU6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgc2VhcmNoU3RyaW5nOiBzZWFyY2hUZXJtLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgXCIqXCIpO1xuICAgIH1cbn0pO1xuLy8gT24gbmV0d29yayByZXF1ZXN0IGZyb20gdGhlIHBsdWdpbiwgZmV0Y2ggaW5mb3JtYXRpb24gZnJvbSBQaWNraXQuXG4vLyBUT0RPOiBBZGQgb2Zmc2V0IGluc3RlYWQgb2YgaXRlcmF0aWluZyBvbiByZXF1ZXN0bWF4XG53aW5kb3cub25tZXNzYWdlID0gKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoZXZlbnQuZGF0YS5wbHVnaW5NZXNzYWdlLnR5cGUgPT09IFwibXVsdGlwbGVzXCIpIHtcbiAgICAgICAgc2VsZWN0aW9uU2l6ZSA9IGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZS5zaXplO1xuICAgIH1cbiAgICAvLyBPbiBzdGFydHVwIHJ1biB0aHJvdWdoIHNhbXBsZSBwaWNraXQgbGlicmFyeSB0byBnZXQgYSByYW5kb20gYXJyYXkgb2YgaW1hZ2VzIHRvIHBvcHVsYXRlIHdpdGhcbiAgICBpZiAoZXZlbnQuZGF0YS5wbHVnaW5NZXNzYWdlLnN0eWxlID09PSBcImZpcnN0LWNhbGxcIikge1xuICAgICAgICBmZXRjaChgJHtiYXNlQ2FsbH1gLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBwaWNraXRIZWFkZXJzLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgLy8gQ2xlYXIgYXJyYXkgc2luY2UgSSdtIGp1c3QgbG9vcGluZyB0aHJvdWdoIG1heFJlY29yZHNcbiAgICAgICAgICAgIFBpY2tpdE1lZGlhQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQXJyYXkgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgcmVzcG9uc2VBcnJheS5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgLy9Mb29wIHRocm91Z2ggZW50cmllcyBhbmQgYWRkIHRoZSAnZmllbGRzJyBvZiBlYWNoIGVudHJ5IHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgIFBpY2tpdE1lZGlhQXJyYXkucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChlKSA9PiBQb3B1bGF0ZVZpZXcoKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFNlYXJjaGluZyByZW5kZXJzIG91dHB1dCB3aXRoIG1heCBwYWdlIHNpemUgb2YgYWxsIGZvdW5kIGltYWdlc1xuICAgIGlmIChldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2Uuc3R5bGUgPT09IFwic2VhcmNoXCIpIHtcbiAgICAgICAgZmV0Y2goYCR7YmFzZUNhbGx9YCArXG4gICAgICAgICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICAgICAgICBwYWdlX2xpbWl0OiBcIjIwMFwiLFxuICAgICAgICAgICAgICAgIHNlYXJjaDogZXZlbnQuZGF0YS5wbHVnaW5NZXNzYWdlLnNlYXJjaFN0cmluZyxcbiAgICAgICAgICAgIH0pLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBwaWNraXRIZWFkZXJzLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgLy8gQ2xlYXIgYXJyYXkgc2luY2UgSSdtIGp1c3QgbG9vcGluZyB0aHJvdWdoIG1heFJlY29yZHNcbiAgICAgICAgICAgIFBpY2tpdE1lZGlhQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQXJyYXkgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgcmVzcG9uc2VBcnJheS5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgLy9Mb29wIHRocm91Z2ggZW50cmllcyBhbmQgYWRkIHRoZSAnZmllbGRzJyBvZiBlYWNoIGVudHJ5IHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgIFBpY2tpdE1lZGlhQXJyYXkucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChlKSA9PiB7XG4gICAgICAgICAgICBQb3B1bGF0ZVZpZXcoKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIElmIHJhbmRvbSwgcmVuZGVyIHJhbmRvbSBpbWFnZSBmcm9tIGRlZmF1bHQgYXJyYXlcbiAgICBpZiAoZXZlbnQuZGF0YS5wbHVnaW5NZXNzYWdlLnN0eWxlID09PSBcInJhbmRvbVwiICYmXG4gICAgICAgIFBpY2tpdE1lZGlhQXJyYXkubGVuZ3RoID49IDEpIHtcbiAgICAgICAgbGV0IHJhbmRvbUltYWdlID0gUGlja2l0TWVkaWFBcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBQaWNraXRNZWRpYUFycmF5Lmxlbmd0aCldXG4gICAgICAgICAgICAuZmlsZS5wcmV2aWV3c1twcmV2aWV3U2l6ZV07XG4gICAgICAgIEFkZEltYWdlVG9VSShyYW5kb21JbWFnZSk7XG4gICAgfVxufSk7XG5jb25zdCBBZGRJbWFnZVRvVUkgPSAoaW1hZ2UpID0+IHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGltYWdlLndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgICAgIGZldGNoKGltYWdlLnVybClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuYmxvYigpKVxuICAgICAgICAgICAgLnRoZW4oKGJsb2IpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShuZXcgVWludDhBcnJheShyZWFkZXIucmVzdWx0KSk7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XG4gICAgICAgIH0pKVxuICAgICAgICAgICAgLnRoZW4oKGltYWdlQnl0ZXMpID0+IHtcbiAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImF0dGFjaG1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VCeXRlcyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwgXCIqXCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGltZy5zcmMgPSBpbWFnZS51cmw7XG59O1xuLy8gUG9wdWxhdGVzIHZpZXcgd2l0aCBpbWFnZXMgZnJvbSBwaWNraXRcbmNvbnN0IFBvcHVsYXRlVmlldyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChpdGVtTGlzdERpdi5pbm5lckhUTUwgIT0gbnVsbCkge1xuICAgICAgICBpdGVtTGlzdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBQaWNraXRNZWRpYUFycmF5Lm1hcCgobWVkaWEpID0+IHtcbiAgICAgICAgY29uc3QgaW1nRmlsZSA9IG1lZGlhLmZpbGUucHJldmlld3NbcHJldmlld1NpemVdO1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTmFtZSA9IFwibGlzdC1pdGVtXCI7XG4gICAgICAgIGNvbnN0IGF0dGFjaG1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYXR0YWNobWVudC5jbGFzc05hbWUgPSBcImF0dGFjaG1lbnRcIjtcbiAgICAgICAgYXR0YWNobWVudC53aWR0aCA9IGltZ0ZpbGUud2lkdGg7XG4gICAgICAgIGF0dGFjaG1lbnQuaGVpZ2h0ID0gaW1nRmlsZS5oZWlnaHQ7XG4gICAgICAgIGF0dGFjaG1lbnQuc3JjID0gaW1nRmlsZS51cmw7XG4gICAgICAgIC8vbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25zKTtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoYXR0YWNobWVudCk7XG4gICAgICAgIGl0ZW1MaXN0RGl2LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgYXR0YWNobWVudC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgQWRkSW1hZ2VUb1VJKGltZ0ZpbGUpO1xuICAgICAgICB9O1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=