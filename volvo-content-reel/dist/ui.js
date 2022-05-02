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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: sans-serif;\n  font-size: 12px;\n  margin: 0;\n  box-sizing: border-box;\n}\n#main {\n  height: 100%;\n  padding: 16px;\n  overflow: auto;\n}\n#content {\n  overflow: auto;\n}\n#corner {\n  z-index: 99999;\n  position: fixed;\n  right: -1px;\n  bottom: -2px;\n  cursor: nwse-resize;\n}\nbody {\n  font: 12px sans-serif;\n  text-align: center;\n  margin: 20px;\n}\nbutton {\n  border-radius: 5px;\n  background: white;\n  color: black;\n  border: none;\n  padding: 8px 15px;\n  margin: 0 5px;\n  box-shadow: inset 0 0 0 1px black;\n  outline: none;\n}\n#create {\n  box-shadow: none;\n  background: #0d99ff;\n  color: white;\n}\ninput {\n  border: none;\n  outline: none;\n  padding: 8px;\n}\ninput:hover {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\nbutton:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n#create:focus {\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);\n}\ninput:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n\n.top {\n  margin: 16px;\n}\n\n/*LIST ITEMS*/\n#item-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.list-item {\n  margin-bottom: 24px;\n  width: 320px;\n  height: auto;\n}\n.list-item:hover {\n  background-color: rgba(0, 0, 0, 0.25);\n}\n\n.list-item .header,\n.list-item .attachment {\n  cursor: pointer;\n}\n\n.list-item .attachment {\n  width: 100%;\n  height: auto;\n}\n.list-item .attachement img {\n  width: 100%;\n  height: auto;\n}\n\n.bar {\n  margin: 16px auto;\n  width: 100%;\n  border-radius: 30px;\n  border: 1px solid #dcdcdc;\n}\n.bar:hover {\n  border: 1px solid #b6b4b4;\n}\n.bar:focus-within {\n  border: 1px solid #b6b4b4;\n  outline: none;\n}\n.searchbar {\n  height: 45px;\n  border: none;\n  width: 100%;\n  border-radius: inherit;\n  font-size: 16px;\n  outline: none;\n}\n.btn-random {\n  cursor: pointer;\n  background-color: #f5f5f5;\n  border: none;\n  color: #707070;\n  font-size: 15px;\n  padding: 10px 20px;\n  margin: 5px;\n  border-radius: 4px;\n  outline: none;\n}\n.btn-random:hover {\n  border: 1px solid #c8c8c8;\n  padding: 9px 19px;\n  color: #808080;\n}\n.btn-random:focus {\n  border: 1px solid #4885ed;\n  padding: 9px 19px;\n}\n", "",{"version":3,"sources":["webpack://./src/style/ui.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,eAAe;EACf,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;EACd,eAAe;EACf,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,iCAAiC;EACjC,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;AACd;AACA;EACE,8CAA8C;AAChD;AACA;EACE,mCAAmC;AACrC;AACA;EACE,8CAA8C;AAChD;AACA;EACE,mCAAmC;AACrC;;AAEA;EACE,YAAY;AACd;;AAEA,aAAa;AACb;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;AAC/B;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;AACA;EACE,qCAAqC;AACvC;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,eAAe;EACf,aAAa;AACf;AACA;EACE,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["* {\n  font-family: sans-serif;\n  font-size: 12px;\n  margin: 0;\n  box-sizing: border-box;\n}\n#main {\n  height: 100%;\n  padding: 16px;\n  overflow: auto;\n}\n#content {\n  overflow: auto;\n}\n#corner {\n  z-index: 99999;\n  position: fixed;\n  right: -1px;\n  bottom: -2px;\n  cursor: nwse-resize;\n}\nbody {\n  font: 12px sans-serif;\n  text-align: center;\n  margin: 20px;\n}\nbutton {\n  border-radius: 5px;\n  background: white;\n  color: black;\n  border: none;\n  padding: 8px 15px;\n  margin: 0 5px;\n  box-shadow: inset 0 0 0 1px black;\n  outline: none;\n}\n#create {\n  box-shadow: none;\n  background: #0d99ff;\n  color: white;\n}\ninput {\n  border: none;\n  outline: none;\n  padding: 8px;\n}\ninput:hover {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\nbutton:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n#create:focus {\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);\n}\ninput:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n\n.top {\n  margin: 16px;\n}\n\n/*LIST ITEMS*/\n#item-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.list-item {\n  margin-bottom: 24px;\n  width: 320px;\n  height: auto;\n}\n.list-item:hover {\n  background-color: rgba(0, 0, 0, 0.25);\n}\n\n.list-item .header,\n.list-item .attachment {\n  cursor: pointer;\n}\n\n.list-item .attachment {\n  width: 100%;\n  height: auto;\n}\n.list-item .attachement img {\n  width: 100%;\n  height: auto;\n}\n\n.bar {\n  margin: 16px auto;\n  width: 100%;\n  border-radius: 30px;\n  border: 1px solid #dcdcdc;\n}\n.bar:hover {\n  border: 1px solid #b6b4b4;\n}\n.bar:focus-within {\n  border: 1px solid #b6b4b4;\n  outline: none;\n}\n.searchbar {\n  height: 45px;\n  border: none;\n  width: 100%;\n  border-radius: inherit;\n  font-size: 16px;\n  outline: none;\n}\n.btn-random {\n  cursor: pointer;\n  background-color: #f5f5f5;\n  border: none;\n  color: #707070;\n  font-size: 15px;\n  padding: 10px 20px;\n  margin: 5px;\n  border-radius: 4px;\n  outline: none;\n}\n.btn-random:hover {\n  border: 1px solid #c8c8c8;\n  padding: 9px 19px;\n  color: #808080;\n}\n.btn-random:focus {\n  border: 1px solid #4885ed;\n  padding: 9px 19px;\n}\n"],"sourceRoot":""}]);
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
        fetch(`https://files.pickit.com/api/v2/files?`, {
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
        fetch("https://files.pickit.com/api/v2/files?" +
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
        attachment.style.backgroundImage = `url(${imgFile.url})`;
        attachment.style.backgroundSize = "contain";
        attachment.style.backgroundPosition = "center";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxZQUFZO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL3NyYy9zdHlsZS9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vc3JjL3N0eWxlL3VpLmNzcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL3NyYy9zdHlsZS9yZXNldC5jc3M/NDQ1ZSIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9zcmMvc3R5bGUvdWkuY3NzPzA1ZGYiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9zcmMvY29udGVudHJlZWwuY29uZmlnLmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL3NyYy91dGlscy9yZXNpemVyLmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9zcmMvdWkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKioqXFxuICAgIFRoZSBuZXcgQ1NTIHJlc2V0IC0gdmVyc2lvbiAxLjUuMSAobGFzdCB1cGRhdGVkIDEuMy4yMDIyKVxcbiAgICBHaXRIdWIgcGFnZTogaHR0cHM6Ly9naXRodWIuY29tL2VsYWQyNDEyL3RoZS1uZXctY3NzLXJlc2V0XFxuKioqL1xcblxcbi8qXFxuICAgIFJlbW92ZSBhbGwgdGhlIHN0eWxlcyBvZiB0aGUgXFxcIlVzZXItQWdlbnQtU3R5bGVzaGVldFxcXCIsIGV4Y2VwdCBmb3IgdGhlICdkaXNwbGF5JyBwcm9wZXJ0eVxcbiAgICAtIFRoZSBcXFwic3ltYm9sICpcXFwiIHBhcnQgaXMgdG8gc29sdmUgRmlyZWZveCBTVkcgc3ByaXRlIGJ1Z1xcbiAqL1xcbiAqOndoZXJlKDpub3QoaWZyYW1lLCBjYW52YXMsIGltZywgc3ZnLCB2aWRlbyk6bm90KHN2ZyAqLCBzeW1ib2wgKikpIHtcXG4gICAgYWxsOiB1bnNldDtcXG4gICAgZGlzcGxheTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiBQcmVmZXJyZWQgYm94LXNpemluZyB2YWx1ZSAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVhcHBseSB0aGUgcG9pbnRlciBjdXJzb3IgZm9yIGFuY2hvciB0YWdzICovXFxuYSwgYnV0dG9uIHtcXG4gICAgY3Vyc29yOiByZXZlcnQ7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyAoYnVsbGV0cy9udW1iZXJzKSAqL1xcbm9sLCB1bCwgbWVudSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvciBpbWFnZXMgdG8gbm90IGJlIGFibGUgdG8gZXhjZWVkIHRoZWlyIGNvbnRhaW5lciAqL1xcbmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLyogcmVtb3ZlcyBzcGFjaW5nIGJldHdlZW4gY2VsbHMgaW4gdGFibGVzICovXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4vKiByZXZlcnQgdGhlICd3aGl0ZS1zcGFjZScgcHJvcGVydHkgZm9yIHRleHRhcmVhIGVsZW1lbnRzIG9uIFNhZmFyaSAqL1xcbnRleHRhcmVhIHtcXG4gICAgd2hpdGUtc3BhY2U6IHJldmVydDtcXG59XFxuXFxuLyogbWluaW11bSBzdHlsZSB0byBhbGxvdyB0byBzdHlsZSBtZXRlciBlbGVtZW50ICovXFxubWV0ZXIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHJldmVydDtcXG4gICAgYXBwZWFyYW5jZTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiByZXNldCBkZWZhdWx0IHRleHQgb3BhY2l0eSBvZiBpbnB1dCBwbGFjZWhvbGRlciAqL1xcbjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdW5zZXQ7XFxufVxcblxcbi8qIGZpeCB0aGUgZmVhdHVyZSBvZiAnaGlkZGVuJyBhdHRyaWJ1dGUuXFxuICAgZGlzcGxheTpyZXZlcnQ7IHJldmVydCB0byBlbGVtZW50IGluc3RlYWQgb2YgYXR0cmlidXRlICovXFxuOndoZXJlKFtoaWRkZW5dKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIHJldmVydCBmb3IgYnVnIGluIENocm9taXVtIGJyb3dzZXJzXFxuICAgLSBmaXggZm9yIHRoZSBjb250ZW50IGVkaXRhYmxlIGF0dHJpYnV0ZSB3aWxsIHdvcmsgcHJvcGVybHkuICovXFxuOndoZXJlKFtjb250ZW50ZWRpdGFibGVdKSB7XFxuICAgIC1tb3otdXNlci1tb2RpZnk6IHJlYWQtd3JpdGU7XFxuICAgIC13ZWJraXQtdXNlci1tb2RpZnk6IHJlYWQtd3JpdGU7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIC13ZWJraXQtbGluZS1icmVhazogYWZ0ZXItd2hpdGUtc3BhY2U7XFxufVxcblxcbi8qIGFwcGx5IGJhY2sgdGhlIGRyYWdnYWJsZSBmZWF0dXJlIC0gZXhpc3Qgb25seSBpbiBDaHJvbWl1bSBhbmQgU2FmYXJpICovXFxuOndoZXJlKFtkcmFnZ2FibGU9XFxcInRydWVcXFwiXSkge1xcbiAgICAtd2Via2l0LXVzZXItZHJhZzogZWxlbWVudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0dBR0c7O0FBRUg7OztFQUdFO0NBQ0Q7SUFDRyxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQSwrQkFBK0I7QUFDL0I7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQSwrQ0FBK0M7QUFDL0M7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLHlDQUF5QztBQUN6QztJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQSx3REFBd0Q7QUFDeEQ7SUFDSSxlQUFlO0FBQ25COztBQUVBLDRDQUE0QztBQUM1QztJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQSxzRUFBc0U7QUFDdEU7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsa0RBQWtEO0FBQ2xEO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7QUFFQSxvREFBb0Q7QUFDcEQ7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOzJEQUMyRDtBQUMzRDtJQUNJLGFBQWE7QUFDakI7O0FBRUE7aUVBQ2lFO0FBQ2pFO0lBQ0ksNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIscUNBQXFDO0FBQ3pDOztBQUVBLHlFQUF5RTtBQUN6RTtJQUNJLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqXFxuICAgIFRoZSBuZXcgQ1NTIHJlc2V0IC0gdmVyc2lvbiAxLjUuMSAobGFzdCB1cGRhdGVkIDEuMy4yMDIyKVxcbiAgICBHaXRIdWIgcGFnZTogaHR0cHM6Ly9naXRodWIuY29tL2VsYWQyNDEyL3RoZS1uZXctY3NzLXJlc2V0XFxuKioqL1xcblxcbi8qXFxuICAgIFJlbW92ZSBhbGwgdGhlIHN0eWxlcyBvZiB0aGUgXFxcIlVzZXItQWdlbnQtU3R5bGVzaGVldFxcXCIsIGV4Y2VwdCBmb3IgdGhlICdkaXNwbGF5JyBwcm9wZXJ0eVxcbiAgICAtIFRoZSBcXFwic3ltYm9sICpcXFwiIHBhcnQgaXMgdG8gc29sdmUgRmlyZWZveCBTVkcgc3ByaXRlIGJ1Z1xcbiAqL1xcbiAqOndoZXJlKDpub3QoaWZyYW1lLCBjYW52YXMsIGltZywgc3ZnLCB2aWRlbyk6bm90KHN2ZyAqLCBzeW1ib2wgKikpIHtcXG4gICAgYWxsOiB1bnNldDtcXG4gICAgZGlzcGxheTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiBQcmVmZXJyZWQgYm94LXNpemluZyB2YWx1ZSAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVhcHBseSB0aGUgcG9pbnRlciBjdXJzb3IgZm9yIGFuY2hvciB0YWdzICovXFxuYSwgYnV0dG9uIHtcXG4gICAgY3Vyc29yOiByZXZlcnQ7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyAoYnVsbGV0cy9udW1iZXJzKSAqL1xcbm9sLCB1bCwgbWVudSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvciBpbWFnZXMgdG8gbm90IGJlIGFibGUgdG8gZXhjZWVkIHRoZWlyIGNvbnRhaW5lciAqL1xcbmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLyogcmVtb3ZlcyBzcGFjaW5nIGJldHdlZW4gY2VsbHMgaW4gdGFibGVzICovXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4vKiByZXZlcnQgdGhlICd3aGl0ZS1zcGFjZScgcHJvcGVydHkgZm9yIHRleHRhcmVhIGVsZW1lbnRzIG9uIFNhZmFyaSAqL1xcbnRleHRhcmVhIHtcXG4gICAgd2hpdGUtc3BhY2U6IHJldmVydDtcXG59XFxuXFxuLyogbWluaW11bSBzdHlsZSB0byBhbGxvdyB0byBzdHlsZSBtZXRlciBlbGVtZW50ICovXFxubWV0ZXIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHJldmVydDtcXG4gICAgYXBwZWFyYW5jZTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiByZXNldCBkZWZhdWx0IHRleHQgb3BhY2l0eSBvZiBpbnB1dCBwbGFjZWhvbGRlciAqL1xcbjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdW5zZXQ7XFxufVxcblxcbi8qIGZpeCB0aGUgZmVhdHVyZSBvZiAnaGlkZGVuJyBhdHRyaWJ1dGUuXFxuICAgZGlzcGxheTpyZXZlcnQ7IHJldmVydCB0byBlbGVtZW50IGluc3RlYWQgb2YgYXR0cmlidXRlICovXFxuOndoZXJlKFtoaWRkZW5dKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIHJldmVydCBmb3IgYnVnIGluIENocm9taXVtIGJyb3dzZXJzXFxuICAgLSBmaXggZm9yIHRoZSBjb250ZW50IGVkaXRhYmxlIGF0dHJpYnV0ZSB3aWxsIHdvcmsgcHJvcGVybHkuICovXFxuOndoZXJlKFtjb250ZW50ZWRpdGFibGVdKSB7XFxuICAgIC1tb3otdXNlci1tb2RpZnk6IHJlYWQtd3JpdGU7XFxuICAgIC13ZWJraXQtdXNlci1tb2RpZnk6IHJlYWQtd3JpdGU7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIC13ZWJraXQtbGluZS1icmVhazogYWZ0ZXItd2hpdGUtc3BhY2U7XFxufVxcblxcbi8qIGFwcGx5IGJhY2sgdGhlIGRyYWdnYWJsZSBmZWF0dXJlIC0gZXhpc3Qgb25seSBpbiBDaHJvbWl1bSBhbmQgU2FmYXJpICovXFxuOndoZXJlKFtkcmFnZ2FibGU9XFxcInRydWVcXFwiXSkge1xcbiAgICAtd2Via2l0LXVzZXItZHJhZzogZWxlbWVudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiNtYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuI2NvbnRlbnQge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbiNjb3JuZXIge1xcbiAgei1pbmRleDogOTk5OTk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogLTFweDtcXG4gIGJvdHRvbTogLTJweDtcXG4gIGN1cnNvcjogbndzZS1yZXNpemU7XFxufVxcbmJvZHkge1xcbiAgZm9udDogMTJweCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggMTVweDtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggYmxhY2s7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jY3JlYXRlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMGQ5OWZmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5pbnB1dDpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwZDk5ZmY7XFxufVxcbiNjcmVhdGU6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwZDk5ZmY7XFxufVxcblxcbi50b3Age1xcbiAgbWFyZ2luOiAxNnB4O1xcbn1cXG5cXG4vKkxJU1QgSVRFTVMqL1xcbiNpdGVtLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4ubGlzdC1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5saXN0LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLmxpc3QtaXRlbSAuaGVhZGVyLFxcbi5saXN0LWl0ZW0gLmF0dGFjaG1lbnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtIC5hdHRhY2htZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubGlzdC1pdGVtIC5hdHRhY2hlbWVudCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5iYXIge1xcbiAgbWFyZ2luOiAxNnB4IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xcbn1cXG4uYmFyOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI0YjQ7XFxufVxcbi5iYXI6Zm9jdXMtd2l0aGluIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI0YjQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uc2VhcmNoYmFyIHtcXG4gIGhlaWdodDogNDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5idG4tcmFuZG9tIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogIzcwNzA3MDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmJ0bi1yYW5kb206aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcXG4gIHBhZGRpbmc6IDlweCAxOXB4O1xcbiAgY29sb3I6ICM4MDgwODA7XFxufVxcbi5idG4tcmFuZG9tOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ODg1ZWQ7XFxuICBwYWRkaW5nOiA5cHggMTlweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3VpLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsYUFBYTtBQUNiO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiNtYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuI2NvbnRlbnQge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbiNjb3JuZXIge1xcbiAgei1pbmRleDogOTk5OTk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogLTFweDtcXG4gIGJvdHRvbTogLTJweDtcXG4gIGN1cnNvcjogbndzZS1yZXNpemU7XFxufVxcbmJvZHkge1xcbiAgZm9udDogMTJweCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggMTVweDtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggYmxhY2s7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jY3JlYXRlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMGQ5OWZmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5pbnB1dDpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwZDk5ZmY7XFxufVxcbiNjcmVhdGU6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwZDk5ZmY7XFxufVxcblxcbi50b3Age1xcbiAgbWFyZ2luOiAxNnB4O1xcbn1cXG5cXG4vKkxJU1QgSVRFTVMqL1xcbiNpdGVtLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4ubGlzdC1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5saXN0LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLmxpc3QtaXRlbSAuaGVhZGVyLFxcbi5saXN0LWl0ZW0gLmF0dGFjaG1lbnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtIC5hdHRhY2htZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubGlzdC1pdGVtIC5hdHRhY2hlbWVudCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5iYXIge1xcbiAgbWFyZ2luOiAxNnB4IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xcbn1cXG4uYmFyOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI0YjQ7XFxufVxcbi5iYXI6Zm9jdXMtd2l0aGluIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI0YjQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uc2VhcmNoYmFyIHtcXG4gIGhlaWdodDogNDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5idG4tcmFuZG9tIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogIzcwNzA3MDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmJ0bi1yYW5kb206aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcXG4gIHBhZGRpbmc6IDlweCAxOXB4O1xcbiAgY29sb3I6ICM4MDgwODA7XFxufVxcbi5idG4tcmFuZG9tOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ODg1ZWQ7XFxuICBwYWRkaW5nOiA5cHggMTlweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgY29uZmlncyA9IHtcbiAgQUlSVEFCTEVfQVBJX0tFWTogXCJrZXlYTklWVm5WdVI5UkNjaVwiLFxuICBQSUNLSVRfQVBJX0tFWTogXCJhcGl1c2VyLXU0eGo4N2RvYml6c21jY2duNHg5NHY3OWk0N2RodEBwaWNraXQuY29tXCIsXG4gIFBJQ0tJVF9TRUNSRVQ6IFwiaHVrZzg5cjlsbWJ3MXB0djNoMWZqamIwZG5pMGhhXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWdzO1xuIiwiLy9SRVNJWkVSIEZVTkNUSU9OU1xuY29uc3QgY29ybmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3JuZXJcIik7XG5mdW5jdGlvbiByZXNpemVXaW5kb3coZSkge1xuICBjb25zdCBzaXplID0ge1xuICAgIHc6IE1hdGgubWF4KDUwLCBNYXRoLmZsb29yKGUuY2xpZW50WCArIDUpKSxcbiAgICBoOiBNYXRoLm1heCg1MCwgTWF0aC5mbG9vcihlLmNsaWVudFkgKyA1KSksXG4gIH07XG4gIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogXCJyZXNpemVcIiwgc2l6ZTogc2l6ZSB9IH0sIFwiKlwiKTtcbn1cbmNvcm5lci5vbnBvaW50ZXJkb3duID0gKGUpID0+IHtcbiAgY29ybmVyLm9ucG9pbnRlcm1vdmUgPSByZXNpemVXaW5kb3c7XG4gIGNvcm5lci5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG59O1xuY29ybmVyLm9ucG9pbnRlcnVwID0gKGUpID0+IHtcbiAgY29ybmVyLm9ucG9pbnRlcm1vdmUgPSBudWxsO1xuICBjb3JuZXIucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFwiLi9zdHlsZS91aS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL3V0aWxzL3Jlc2l6ZXJcIjtcbmltcG9ydCBjb25maWdzIGZyb20gXCIuL2NvbnRlbnRyZWVsLmNvbmZpZy5qc1wiO1xubGV0IHNlbGVjdGlvblNpemUgPSAwO1xubGV0IHJhbmRvbUFyciA9IFtdO1xubGV0IFBpY2tpdE1lZGlhQXJyYXkgPSBbXTtcbmxldCBjdXJyZW50UGFnZSA9IDE7XG5jb25zdCBwcmV2aWV3U2l6ZSA9IDA7XG5jb25zdCByYW5kb21CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbVwiKTtcbnJhbmRvbUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IGRvOiBcInJhbmRvbVwiIH0gfSwgXCIqXCIpO1xufTtcbmNvbnN0IGl0ZW1MaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtLWxpc3RcIik7XG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbmNvbnN0IHBpY2tpdEhlYWRlcnMgPSB7XG4gICAgXCJQaWNraXQtQXBpLUtleVwiOiBgJHtjb25maWdzLlBJQ0tJVF9BUElfS0VZfWAsXG4gICAgXCJQaWNraXQtQXBpLVNlY3JldFwiOiBgJHtjb25maWdzLlBJQ0tJVF9TRUNSRVR9YCxcbiAgICBcIlBpY2tpdC1BcGktTGlicmFyeVwiOiBcIm1lZGlhXCIsXG59O1xuLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHNlYXJjaFxuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgbGV0IHNlYXJjaFRlcm0gPSBcIlwiO1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHNlYXJjaFRlcm0gPSBzZWFyY2hCYXIudmFsdWU7XG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgICAgIGRvOiBcImxvYWRcIixcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICBzZWFyY2hTdHJpbmc6IHNlYXJjaFRlcm0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCBcIipcIik7XG4gICAgfVxufSk7XG4vLyBPbiBuZXR3b3JrIHJlcXVlc3QgZnJvbSB0aGUgcGx1Z2luLCBmZXRjaCBpbmZvcm1hdGlvbiBmcm9tIFBpY2tpdC5cbi8vIFRPRE86IEFkZCBvZmZzZXQgaW5zdGVhZCBvZiBpdGVyYXRpaW5nIG9uIHJlcXVlc3RtYXhcbndpbmRvdy5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2UudHlwZSA9PT0gXCJtdWx0aXBsZXNcIikge1xuICAgICAgICBzZWxlY3Rpb25TaXplID0gZXZlbnQuZGF0YS5wbHVnaW5NZXNzYWdlLnNpemU7XG4gICAgfVxuICAgIC8vIE9uIHN0YXJ0dXAgcnVuIHRocm91Z2ggc2FtcGxlIHBpY2tpdCBsaWJyYXJ5IHRvIGdldCBhIHJhbmRvbSBhcnJheSBvZiBpbWFnZXMgdG8gcG9wdWxhdGUgd2l0aFxuICAgIGlmIChldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2Uuc3R5bGUgPT09IFwiZmlyc3QtY2FsbFwiKSB7XG4gICAgICAgIGZldGNoKGBodHRwczovL2ZpbGVzLnBpY2tpdC5jb20vYXBpL3YyL2ZpbGVzP2AsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHBpY2tpdEhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAvLyBDbGVhciBhcnJheSBzaW5jZSBJJ20ganVzdCBsb29waW5nIHRocm91Z2ggbWF4UmVjb3Jkc1xuICAgICAgICAgICAgUGlja2l0TWVkaWFBcnJheSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VBcnJheSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICByZXNwb25zZUFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAvL0xvb3AgdGhyb3VnaCBlbnRyaWVzIGFuZCBhZGQgdGhlICdmaWVsZHMnIG9mIGVhY2ggZW50cnkgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICAgICAgUGlja2l0TWVkaWFBcnJheS5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGUpID0+IFBvcHVsYXRlVmlldygpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gU2VhcmNoaW5nIHJlbmRlcnMgb3V0cHV0IHdpdGggbWF4IHBhZ2Ugc2l6ZSBvZiBhbGwgZm91bmQgaW1hZ2VzXG4gICAgaWYgKGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZS5zdHlsZSA9PT0gXCJzZWFyY2hcIikge1xuICAgICAgICBmZXRjaChcImh0dHBzOi8vZmlsZXMucGlja2l0LmNvbS9hcGkvdjIvZmlsZXM/XCIgK1xuICAgICAgICAgICAgbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICAgICAgcGFnZV9saW1pdDogXCIyMDBcIixcbiAgICAgICAgICAgICAgICBzZWFyY2g6IGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZS5zZWFyY2hTdHJpbmcsXG4gICAgICAgICAgICB9KSwge1xuICAgICAgICAgICAgaGVhZGVyczogcGlja2l0SGVhZGVycyxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIC8vIENsZWFyIGFycmF5IHNpbmNlIEknbSBqdXN0IGxvb3BpbmcgdGhyb3VnaCBtYXhSZWNvcmRzXG4gICAgICAgICAgICBQaWNraXRNZWRpYUFycmF5ID0gW107XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUFycmF5ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHJlc3BvbnNlQXJyYXkubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vTG9vcCB0aHJvdWdoIGVudHJpZXMgYW5kIGFkZCB0aGUgJ2ZpZWxkcycgb2YgZWFjaCBlbnRyeSB0byB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICBQaWNraXRNZWRpYUFycmF5LnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoZSkgPT4ge1xuICAgICAgICAgICAgUG9wdWxhdGVWaWV3KCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBJZiByYW5kb20sIHJlbmRlciByYW5kb20gaW1hZ2UgZnJvbSBkZWZhdWx0IGFycmF5XG4gICAgaWYgKGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZS5zdHlsZSA9PT0gXCJyYW5kb21cIiAmJlxuICAgICAgICBQaWNraXRNZWRpYUFycmF5Lmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGxldCByYW5kb21JbWFnZSA9IFBpY2tpdE1lZGlhQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogUGlja2l0TWVkaWFBcnJheS5sZW5ndGgpXVxuICAgICAgICAgICAgLmZpbGUucHJldmlld3NbcHJldmlld1NpemVdO1xuICAgICAgICBBZGRJbWFnZVRvVUkocmFuZG9tSW1hZ2UpO1xuICAgIH1cbn0pO1xuY29uc3QgQWRkSW1hZ2VUb1VJID0gKGltYWdlKSA9PiB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICBmZXRjaChpbWFnZS51cmwpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmJsb2IoKSlcbiAgICAgICAgICAgIC50aGVuKChibG9iKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUobmV3IFVpbnQ4QXJyYXkocmVhZGVyLnJlc3VsdCkpO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgICAgICB9KSlcbiAgICAgICAgICAgIC50aGVuKChpbWFnZUJ5dGVzKSA9PiB7XG4gICAgICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhdHRhY2htZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlQnl0ZXMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIFwiKlwiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpbWcuc3JjID0gaW1hZ2UudXJsO1xufTtcbi8vIFBvcHVsYXRlcyB2aWV3IHdpdGggaW1hZ2VzIGZyb20gcGlja2l0XG5jb25zdCBQb3B1bGF0ZVZpZXcgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoaXRlbUxpc3REaXYuaW5uZXJIVE1MICE9IG51bGwpIHtcbiAgICAgICAgaXRlbUxpc3REaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgUGlja2l0TWVkaWFBcnJheS5tYXAoKG1lZGlhKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ0ZpbGUgPSBtZWRpYS5maWxlLnByZXZpZXdzW3ByZXZpZXdTaXplXTtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSBcImxpc3QtaXRlbVwiO1xuICAgICAgICBjb25zdCBhdHRhY2htZW50ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGF0dGFjaG1lbnQuY2xhc3NOYW1lID0gXCJhdHRhY2htZW50XCI7XG4gICAgICAgIGF0dGFjaG1lbnQud2lkdGggPSBpbWdGaWxlLndpZHRoO1xuICAgICAgICBhdHRhY2htZW50LmhlaWdodCA9IGltZ0ZpbGUuaGVpZ2h0O1xuICAgICAgICBhdHRhY2htZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWdGaWxlLnVybH0pYDtcbiAgICAgICAgYXR0YWNobWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY29udGFpblwiO1xuICAgICAgICBhdHRhY2htZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIC8vbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25zKTtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoYXR0YWNobWVudCk7XG4gICAgICAgIGl0ZW1MaXN0RGl2LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgYXR0YWNobWVudC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgQWRkSW1hZ2VUb1VJKGltZ0ZpbGUpO1xuICAgICAgICB9O1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=