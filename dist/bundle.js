/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: black;
  margin: 0px;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.mainContainer{
  box-sizing: border-box;
  background-color: white;
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header{
  box-sizing: border-box;
  background-color: #fb923c;
  padding: 0% 2% 0% 2%;
  color: white;
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.headerLeft{
  display: flex;
  gap: 10px;
  width: 50%;
  height: 100%;
  align-items: center;
}

.logoSvg{
  height: 80%;
  fill: white;
}

.addImageButton{
  fill: white;
  height: 70%;
  cursor: pointer;
}

p{
  margin: 0px;
  font-size: larger;
}

.contentContainer{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.contentBottom{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
}

.contentTop{
  align-self: flex-end;
}

.minimised{
  display: none;
}

.extended{
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #fb923c;
  width: fit-content;
  height: 20%;
  gap: 5px;
  color: white;
  padding-right: 2%;
  padding-left: 2%;
  border-bottom-left-radius: 8px;
}

input{
  border: 0px;
  border-radius: 8px;
}

.submitImageButton{
  background-color: white;
  border: 0px;
  border-radius: 6px;
  font-size: small;
}


.pictureContainer {
  display: flex;
  border: 1px solid black;
  border-radius: 8px;
}

.pictureFrame {
  margin-top: 4%;
  margin-bottom: 1%;
  border-radius: 8px;
  position: relative;
  display: flex;
  height: 70vh;
  width: 20vw;
  overflow: hidden;
}

.pictureCarousel {
  display: flex;
  height: 100%;
  width: 200000000000px;
}

.picture {
  height: 70vh;
  width: 20vw;
  background-position: center;
  background-size: cover;
}

#leftButton, #rightButton{
  opacity: 0.25;
  position: absolute;
  background: inherit;
  width: 30%;
  height: 70vh;
  border: 0px;
}

button{
  cursor: pointer;
}

button:hover, .addImageButton:hover{
  transform: scale(1.05);
}

#deletePicButton{
  border: 0px;
  border-radius: 360px;
  background: inherit;
  top: 5%;
  width: 80px;
  height: 90px;
  position: absolute;
  left: 50%;
  margin-left: -40px;
  opacity: 0.00;
}

#deletePicButton:hover{
  background-color: red;
  opacity: 0.75;
}

#rightButton{
  right: 0cm;
}

.dotContainer {
  width: 20vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  gap: 2%;
}

.current {
  background-color: #fb923c;
}

.dotButton {
  width: 5px;
  height: 5px;
  border: 0px;
}
`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,mJAAmJ;EACnJ,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,oBAAoB;EACpB,YAAY;EACZ,WAAW;EACX,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,UAAU;EACV,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,WAAW;EACX,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;;;AAGA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,mBAAmB;EACnB,OAAO;EACP,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,OAAO;AACT;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,WAAW;EACX,WAAW;AACb",
            sourcesContent: [
              "body {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  background-color: black;\n  margin: 0px;\n  height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n}\n\n.mainContainer{\n  box-sizing: border-box;\n  background-color: white;\n  height: 100%;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader{\n  box-sizing: border-box;\n  background-color: #fb923c;\n  padding: 0% 2% 0% 2%;\n  color: white;\n  width: 100%;\n  height: 7vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.headerLeft{\n  display: flex;\n  gap: 10px;\n  width: 50%;\n  height: 100%;\n  align-items: center;\n}\n\n.logoSvg{\n  height: 80%;\n  fill: white;\n}\n\n.addImageButton{\n  fill: white;\n  height: 70%;\n  cursor: pointer;\n}\n\np{\n  margin: 0px;\n  font-size: larger;\n}\n\n.contentContainer{\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n.contentBottom{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.contentTop{\n  align-self: flex-end;\n}\n\n.minimised{\n  display: none;\n}\n\n.extended{\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  background-color: #fb923c;\n  width: fit-content;\n  height: 20%;\n  gap: 5px;\n  color: white;\n  padding-right: 2%;\n  padding-left: 2%;\n  border-bottom-left-radius: 8px;\n}\n\ninput{\n  border: 0px;\n  border-radius: 8px;\n}\n\n.submitImageButton{\n  background-color: white;\n  border: 0px;\n  border-radius: 6px;\n  font-size: small;\n}\n\n\n.pictureContainer {\n  display: flex;\n  border: 1px solid black;\n  border-radius: 8px;\n}\n\n.pictureFrame {\n  margin-top: 4%;\n  margin-bottom: 1%;\n  border-radius: 8px;\n  position: relative;\n  display: flex;\n  height: 70vh;\n  width: 20vw;\n  overflow: hidden;\n}\n\n.pictureCarousel {\n  display: flex;\n  height: 100%;\n  width: 200000000000px;\n}\n\n.picture {\n  height: 70vh;\n  width: 20vw;\n  background-position: center;\n  background-size: cover;\n}\n\n#leftButton, #rightButton{\n  opacity: 0.25;\n  position: absolute;\n  background: inherit;\n  width: 30%;\n  height: 70vh;\n  border: 0px;\n}\n\nbutton{\n  cursor: pointer;\n}\n\nbutton:hover, .addImageButton:hover{\n  transform: scale(1.05);\n}\n\n#deletePicButton{\n  border: 0px;\n  border-radius: 360px;\n  background: inherit;\n  top: 5%;\n  width: 80px;\n  height: 90px;\n  position: absolute;\n  left: 50%;\n  margin-left: -40px;\n  opacity: 0.00;\n}\n\n#deletePicButton:hover{\n  background-color: red;\n  opacity: 0.75;\n}\n\n#rightButton{\n  right: 0cm;\n}\n\n.dotContainer {\n  width: 20vw;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  gap: 2%;\n}\n\n.current {\n  background-color: #fb923c;\n}\n\n.dotButton {\n  width: 5px;\n  height: 5px;\n  border: 0px;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          var list = [];

          // return the list of modules as css string
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {",
                );
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
          };

          // import a list of modules into the list
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping))),
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64,
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css",
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head",
          );
        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {",
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */",
              );
          }

          // For old IE
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
          if (typeof document === "undefined") {
            return {
              update: function update() {},
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/addNewPic.js":
      /*!**************************!*\
  !*** ./src/addNewPic.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addNewPic: () => /* binding */ addNewPic,
          /* harmony export */
        });
        /* harmony import */ var _dotSelection__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./dotSelection */ "./src/dotSelection.js");
        /* harmony import */ var _newPicture__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./newPicture */ "./src/newPicture.js");

        function addNewPic(pictureArray) {
          let currentPic = pictureArray[0].id;
          let unsortedArray = pictureArray.sort((a, b) => a.id - b.id);
          (0, _dotSelection__WEBPACK_IMPORTED_MODULE_0__.dotSelection)(
            unsortedArray,
            0,
          );
          const picInput = document.getElementById("picInput").value;

          let id, url, position;
          id = unsortedArray.length;
          url = picInput;
          position = id;

          pictureArray.push(
            (0, _newPicture__WEBPACK_IMPORTED_MODULE_1__.newPicture)(
              id,
              url,
              position,
            ),
          );
          (0, _dotSelection__WEBPACK_IMPORTED_MODULE_0__.dotSelection)(
            pictureArray,
            currentPic,
          );
          picInput.value = "";
        }

        /***/
      },

    /***/ "./src/changeOrder.js":
      /*!****************************!*\
  !*** ./src/changeOrder.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ changeOrder: () => /* binding */ changeOrder,
          /* harmony export */
        });
        function changeOrder(pictureArray, e) {
          const dotButton = document.querySelectorAll(".dotButton");
          dotButton.forEach((dot) => {
            dot.classList.remove("current");
          });

          const moveRight = (pictureArray) => {
            for (let i = 0; i < pictureArray.length; i++) {
              if (pictureArray[i].position == 0) {
                pictureArray[i].position = pictureArray.length;
              }
              pictureArray[i].position--;
            }
          };

          const moveLeft = (pictureArray) => {
            for (let i = 0; i < pictureArray.length; i++) {
              if (pictureArray[i].position == pictureArray.length - 1) {
                pictureArray[i].position = -1;
              }
              pictureArray[i].position++;
            }
          };

          e == "leftButton" ? moveLeft(pictureArray) : moveRight(pictureArray);
        }

        /***/
      },

    /***/ "./src/controlMenu.js":
      /*!****************************!*\
  !*** ./src/controlMenu.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ controlMenu: () => /* binding */ controlMenu,
          /* harmony export */
        });
        function controlMenu() {
          const contentTop = document.querySelector(".contentTop");

          const minimise = () => {
            contentTop.classList.remove("extended");
            contentTop.classList.add("minimised");
          };

          const extend = () => {
            contentTop.classList.remove("minimised");
            contentTop.classList.add("extended");
          };

          contentTop.classList.contains("extended") ? minimise() : extend();
        }

        /***/
      },

    /***/ "./src/deletePic.js":
      /*!**************************!*\
  !*** ./src/deletePic.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ deletePic: () => /* binding */ deletePic,
          /* harmony export */
        });
        /* harmony import */ var _dotSelection__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./dotSelection */ "./src/dotSelection.js");

        function deletePic(pictureArray) {
          let currentPic = pictureArray[0].id;
          pictureArray.splice(0, 1);

          for (let i = 0; i < pictureArray.length; i++) {
            pictureArray[i].id = i;
          }
          (0, _dotSelection__WEBPACK_IMPORTED_MODULE_0__.dotSelection)(
            pictureArray,
            currentPic,
          );
        }

        /***/
      },

    /***/ "./src/displayPicture.js":
      /*!*******************************!*\
  !*** ./src/displayPicture.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ displayPicture: () =>
            /* binding */ displayPicture,
          /* harmony export */
        });
        /* harmony import */ var _dotSelection__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./dotSelection */ "./src/dotSelection.js");

        function displayPicture(pictureArray) {
          const pictureCarousel = document.querySelector(".pictureCarousel");
          const dotContainer = document.querySelector(".dotContainer");
          pictureCarousel.replaceChildren();
          dotContainer.replaceChildren();

          let unsortedArray = pictureArray.sort((a, b) => a.id - b.id);

          for (let n = 0; n < unsortedArray.length; n++) {
            let button;
            button = document.createElement("button");
            button.setAttribute("id", `dot${unsortedArray[n].id}`);
            button.classList.add("dotButton");
            if (unsortedArray[n].position == 0) {
              button.classList.add("current");
            }
            button.addEventListener("click", (e) => {
              (0, _dotSelection__WEBPACK_IMPORTED_MODULE_0__.dotSelection)(
                unsortedArray,
                e.target.id.slice(-1),
              );
              displayPicture(unsortedArray);
            });
            dotContainer.appendChild(button);
          }

          let sortedArray = pictureArray.sort(
            (a, b) => a.position - b.position,
          );

          console.log(pictureArray);

          for (let i = 0; i < pictureArray.length; i++) {
            let div;

            div = document.createElement("div");
            div.setAttribute("id", pictureArray[i].id);
            div.classList.add(
              "picture",
              "position" + pictureArray[i].position + "'",
            );

            if (pictureArray[i].position == "0") {
              div.style.backgroundImage = `url(${pictureArray[i].url})`;
            }
            pictureCarousel.appendChild(div);
          }
        }

        /***/
      },

    /***/ "./src/dotSelection.js":
      /*!*****************************!*\
  !*** ./src/dotSelection.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ dotSelection: () => /* binding */ dotSelection,
          /* harmony export */
        });
        function dotSelection(pictureArray, e) {
          let id = e;

          let unsortedArray = pictureArray.sort((a, b) => a.id - b.id);

          const loopPictures = () => {
            for (let i = 0; i < unsortedArray.length; i++) {
              if (unsortedArray[i].position == 0) {
                unsortedArray[i].position = unsortedArray.length;
              }
              unsortedArray[i].position--;
            }
            return unsortedArray;
          };

          while (unsortedArray[id].position !== 0) {
            loopPictures();
          }
        }

        /***/
      },

    /***/ "./src/newPicture.js":
      /*!***************************!*\
  !*** ./src/newPicture.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createDemoPictures: () =>
            /* binding */ createDemoPictures,
          /* harmony export */ newPicture: () => /* binding */ newPicture,
          /* harmony export */
        });
        function newPicture(id, url, position) {
          class createPicture {
            constructor(id, url, position) {
              this.id = id;
              this.url = url;
              this.position = position;
            }
          }

          const newPic = new createPicture(id, url, position);

          return newPic;
        }

        function createDemoPictures(pictureArray) {
          pictureArray.push(
            newPicture(
              "0",
              "https://plus.unsplash.com/premium_photo-1686090450479-370d5ddf4de1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "0",
            ),

            newPicture(
              "1",
              "https://images.unsplash.com/photo-1724232547374-69758574fff5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "1",
            ),

            newPicture(
              "2",
              "https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "2",
            ),

            newPicture(
              "3",
              "https://images.unsplash.com/photo-1720048169970-9c651cf17ccd?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "3",
            ),

            newPicture(
              "4",
              "https://images.unsplash.com/photo-1724150067801-b8db11d8ecf0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "4",
            ),
          );
        }

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
    __webpack_require__(/*! ./style.css */ "./src/style.css");
  /* harmony import */ var _newPicture__WEBPACK_IMPORTED_MODULE_1__ =
    __webpack_require__(/*! ./newPicture */ "./src/newPicture.js");
  /* harmony import */ var _displayPicture__WEBPACK_IMPORTED_MODULE_2__ =
    __webpack_require__(/*! ./displayPicture */ "./src/displayPicture.js");
  /* harmony import */ var _changeOrder__WEBPACK_IMPORTED_MODULE_3__ =
    __webpack_require__(/*! ./changeOrder */ "./src/changeOrder.js");
  /* harmony import */ var _controlMenu__WEBPACK_IMPORTED_MODULE_4__ =
    __webpack_require__(/*! ./controlMenu */ "./src/controlMenu.js");
  /* harmony import */ var _addNewPic__WEBPACK_IMPORTED_MODULE_5__ =
    __webpack_require__(/*! ./addNewPic */ "./src/addNewPic.js");
  /* harmony import */ var _deletePic__WEBPACK_IMPORTED_MODULE_6__ =
    __webpack_require__(/*! ./deletePic */ "./src/deletePic.js");

  function initialise() {
    const navButtons = document.querySelectorAll(".navButton");
    const addImageButton = document.querySelector(".addImageButton");
    const submitImageButton = document.querySelector(".submitImageButton");
    const deletePicButton = document.getElementById("deletePicButton");
    const pictureArray = [];

    (0, _newPicture__WEBPACK_IMPORTED_MODULE_1__.createDemoPictures)(
      pictureArray,
    );
    (0, _displayPicture__WEBPACK_IMPORTED_MODULE_2__.displayPicture)(
      pictureArray,
    );

    navButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        (0, _changeOrder__WEBPACK_IMPORTED_MODULE_3__.changeOrder)(
          pictureArray,
          e.target.id,
        );
        (0, _displayPicture__WEBPACK_IMPORTED_MODULE_2__.displayPicture)(
          pictureArray,
        );
      });
    });

    addImageButton.addEventListener("click", () => {
      (0, _controlMenu__WEBPACK_IMPORTED_MODULE_4__.controlMenu)();
    });

    submitImageButton.addEventListener("click", () => {
      (0, _controlMenu__WEBPACK_IMPORTED_MODULE_4__.controlMenu)();
      (0, _addNewPic__WEBPACK_IMPORTED_MODULE_5__.addNewPic)(pictureArray);
      (0, _displayPicture__WEBPACK_IMPORTED_MODULE_2__.displayPicture)(
        pictureArray,
      );
    });

    deletePicButton.addEventListener("click", (e) => {
      (0, _deletePic__WEBPACK_IMPORTED_MODULE_6__.deletePic)(pictureArray);
      (0, _displayPicture__WEBPACK_IMPORTED_MODULE_2__.displayPicture)(
        pictureArray,
      );
    });

    function autoScroll() {
      (0, _changeOrder__WEBPACK_IMPORTED_MODULE_3__.changeOrder)(
        pictureArray,
        "rightButton",
      );
      (0, _displayPicture__WEBPACK_IMPORTED_MODULE_2__.displayPicture)(
        pictureArray,
      );
    }

    setInterval(autoScroll, 3000);
  }

  initialise();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFP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MEM7Ozs7Ozs7VUNoRDFDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzZCO0FBQ0E7QUFDTjtBQUNBO0FBQ0o7QUFDQTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsK0RBQWtCO0FBQ3BCLEVBQUUsK0RBQWM7O0FBRWhCO0FBQ0E7QUFDQSxNQUFNLHlEQUFXO0FBQ2pCLE1BQU0sK0RBQWM7QUFDcEIsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSxJQUFJLHlEQUFXO0FBQ2YsR0FBRzs7QUFFSDtBQUNBLElBQUksMERBQVc7QUFDZixJQUFJLHNEQUFTO0FBQ2IsSUFBSSxnRUFBYztBQUNsQixHQUFHOztBQUVIO0FBQ0EsSUFBSSxzREFBUztBQUNiLElBQUksZ0VBQWM7QUFDbEIsR0FBRzs7QUFFSDtBQUNBLElBQUksMERBQVc7QUFDZixJQUFJLCtEQUFjO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC8uL3NyYy9hZGROZXdQaWMuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvLi9zcmMvY2hhbmdlT3JkZXIuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvLi9zcmMvY29udHJvbE1lbnUuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvLi9zcmMvZGVsZXRlUGljLmpzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLy4vc3JjL2Rpc3BsYXlQaWN0dXJlLmpzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLy4vc3JjL2RvdFNlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC8uL3NyYy9uZXdQaWN0dXJlLmpzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluQ29udGFpbmVye1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oZWFkZXJ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjkyM2M7XG4gIHBhZGRpbmc6IDAlIDIlIDAlIDIlO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDd2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGVhZGVyTGVmdHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvU3Zne1xuICBoZWlnaHQ6IDgwJTtcbiAgZmlsbDogd2hpdGU7XG59XG5cbi5hZGRJbWFnZUJ1dHRvbntcbiAgZmlsbDogd2hpdGU7XG4gIGhlaWdodDogNzAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLmNvbnRlbnRDb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50Qm90dG9te1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudFRvcHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5taW5pbWlzZWR7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5leHRlbmRlZHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiOTIzYztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDIwJTtcbiAgZ2FwOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbn1cblxuaW5wdXR7XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zdWJtaXRJbWFnZUJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cblxuLnBpY3R1cmVDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ucGljdHVyZUZyYW1lIHtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA3MHZoO1xuICB3aWR0aDogMjB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBpY3R1cmVDYXJvdXNlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDIwMDAwMDAwMDAwMHB4O1xufVxuXG4ucGljdHVyZSB7XG4gIGhlaWdodDogNzB2aDtcbiAgd2lkdGg6IDIwdnc7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2xlZnRCdXR0b24sICNyaWdodEJ1dHRvbntcbiAgb3BhY2l0eTogMC4yNTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDcwdmg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG5idXR0b257XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyLCAuYWRkSW1hZ2VCdXR0b246aG92ZXJ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbiNkZWxldGVQaWNCdXR0b257XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAzNjBweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgdG9wOiA1JTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgb3BhY2l0eTogMC4wMDtcbn1cblxuI2RlbGV0ZVBpY0J1dHRvbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBvcGFjaXR5OiAwLjc1O1xufVxuXG4jcmlnaHRCdXR0b257XG4gIHJpZ2h0OiAwY207XG59XG5cbi5kb3RDb250YWluZXIge1xuICB3aWR0aDogMjB2dztcbiAgaGVpZ2h0OiAxMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyJTtcbn1cblxuLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI5MjNjO1xufVxuXG4uZG90QnV0dG9uIHtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUpBQW1KO0VBQ25KLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsT0FBTztBQUNUOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG1hcmdpbjogMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluQ29udGFpbmVye1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVye1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjkyM2M7XFxuICBwYWRkaW5nOiAwJSAyJSAwJSAyJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhlYWRlckxlZnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvU3Zne1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLmFkZEltYWdlQnV0dG9ue1xcbiAgZmlsbDogd2hpdGU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxucHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRCb3R0b217XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRUb3B7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLm1pbmltaXNlZHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5leHRlbmRlZHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI5MjNjO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiAyMCU7XFxuICBnYXA6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG59XFxuXFxuaW5wdXR7XFxuICBib3JkZXI6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnN1Ym1pdEltYWdlQnV0dG9ue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcblxcbi5waWN0dXJlQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnBpY3R1cmVGcmFtZSB7XFxuICBtYXJnaW4tdG9wOiA0JTtcXG4gIG1hcmdpbi1ib3R0b206IDElO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnBpY3R1cmVDYXJvdXNlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDIwMDAwMDAwMDAwMHB4O1xcbn1cXG5cXG4ucGljdHVyZSB7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICB3aWR0aDogMjB2dztcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNsZWZ0QnV0dG9uLCAjcmlnaHRCdXR0b257XFxuICBvcGFjaXR5OiAwLjI1O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBib3JkZXI6IDBweDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIsIC5hZGRJbWFnZUJ1dHRvbjpob3ZlcntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNkZWxldGVQaWNCdXR0b257XFxuICBib3JkZXI6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDM2MHB4O1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gIHRvcDogNSU7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogOTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcXG4gIG9wYWNpdHk6IDAuMDA7XFxufVxcblxcbiNkZWxldGVQaWNCdXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBvcGFjaXR5OiAwLjc1O1xcbn1cXG5cXG4jcmlnaHRCdXR0b257XFxuICByaWdodDogMGNtO1xcbn1cXG5cXG4uZG90Q29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyJTtcXG59XFxuXFxuLmN1cnJlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiOTIzYztcXG59XFxuXFxuLmRvdEJ1dHRvbiB7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBib3JkZXI6IDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkb3RTZWxlY3Rpb24gfSBmcm9tIFwiLi9kb3RTZWxlY3Rpb25cIjtcbmltcG9ydCB7IG5ld1BpY3R1cmUgfSBmcm9tIFwiLi9uZXdQaWN0dXJlXCI7XG5cbmZ1bmN0aW9uIGFkZE5ld1BpYyhwaWN0dXJlQXJyYXkpe1xuICAgIGxldCBjdXJyZW50UGljID0gcGljdHVyZUFycmF5WzBdLmlkXG4gICAgbGV0IHVuc29ydGVkQXJyYXkgPSBwaWN0dXJlQXJyYXkuc29ydCgoYSwgYikgPT4gYS5pZCAtIGIuaWQpO1xuICAgIGRvdFNlbGVjdGlvbih1bnNvcnRlZEFycmF5LCAwKVxuICAgIGNvbnN0IHBpY0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY0lucHV0JykudmFsdWVcblxuICAgIGxldCBpZCwgdXJsLCBwb3NpdGlvblxuICAgIGlkID0gdW5zb3J0ZWRBcnJheS5sZW5ndGhcbiAgICB1cmwgPSBwaWNJbnB1dFxuICAgIHBvc2l0aW9uID0gaWRcblxuICAgICBwaWN0dXJlQXJyYXkucHVzaChuZXdQaWN0dXJlKGlkLCB1cmwsIHBvc2l0aW9uKSlcbiAgICAgZG90U2VsZWN0aW9uKHBpY3R1cmVBcnJheSwgY3VycmVudFBpYylcbiAgICAgcGljSW5wdXQudmFsdWUgPScnXG59XG5cbmV4cG9ydCB7IGFkZE5ld1BpYyB9IiwiZnVuY3Rpb24gY2hhbmdlT3JkZXIocGljdHVyZUFycmF5LCBlKSB7XG4gIGNvbnN0IGRvdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG90QnV0dG9uXCIpO1xuICBkb3RCdXR0b24uZm9yRWFjaCgoZG90KSA9PiB7XG4gICAgZG90LmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xuICB9KTtcblxuICBjb25zdCBtb3ZlUmlnaHQgPSAocGljdHVyZUFycmF5KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaWN0dXJlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwaWN0dXJlQXJyYXlbaV0ucG9zaXRpb24gPT0gMCkge1xuICAgICAgICBwaWN0dXJlQXJyYXlbaV0ucG9zaXRpb24gPSBwaWN0dXJlQXJyYXkubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcGljdHVyZUFycmF5W2ldLnBvc2l0aW9uLS07XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vdmVMZWZ0ID0gKHBpY3R1cmVBcnJheSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGljdHVyZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocGljdHVyZUFycmF5W2ldLnBvc2l0aW9uID09IHBpY3R1cmVBcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgIHBpY3R1cmVBcnJheVtpXS5wb3NpdGlvbiA9IC0xO1xuICAgICAgfVxuICAgICAgcGljdHVyZUFycmF5W2ldLnBvc2l0aW9uKys7XG4gICAgfVxuICB9O1xuXG4gIGUgPT0gXCJsZWZ0QnV0dG9uXCIgPyBtb3ZlTGVmdChwaWN0dXJlQXJyYXkpIDogbW92ZVJpZ2h0KHBpY3R1cmVBcnJheSk7XG59XG5cbmV4cG9ydCB7IGNoYW5nZU9yZGVyIH07XG4iLCJmdW5jdGlvbiBjb250cm9sTWVudSgpe1xuXG4gICAgY29uc3QgY29udGVudFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50VG9wJylcblxuICAgIGNvbnN0IG1pbmltaXNlID0gKCkgPT4ge1xuICAgICAgICBjb250ZW50VG9wLmNsYXNzTGlzdC5yZW1vdmUoJ2V4dGVuZGVkJylcbiAgICAgICAgY29udGVudFRvcC5jbGFzc0xpc3QuYWRkKCdtaW5pbWlzZWQnKVxuICAgIH1cblxuICAgIGNvbnN0IGV4dGVuZCA9ICgpID0+IHtcbiAgICAgICAgY29udGVudFRvcC5jbGFzc0xpc3QucmVtb3ZlKCdtaW5pbWlzZWQnKVxuICAgICAgICBjb250ZW50VG9wLmNsYXNzTGlzdC5hZGQoJ2V4dGVuZGVkJylcbiAgICB9XG5cbiAgICBjb250ZW50VG9wLmNsYXNzTGlzdC5jb250YWlucygnZXh0ZW5kZWQnKT8gbWluaW1pc2UoKTpcbiAgICBleHRlbmQoKVxufVxuXG5leHBvcnQgeyBjb250cm9sTWVudSB9IiwiaW1wb3J0IHsgZG90U2VsZWN0aW9uIH0gZnJvbSBcIi4vZG90U2VsZWN0aW9uXCI7XG5cbmZ1bmN0aW9uIGRlbGV0ZVBpYyhwaWN0dXJlQXJyYXkpe1xuXG4gICAgbGV0IGN1cnJlbnRQaWMgPSBwaWN0dXJlQXJyYXlbMF0uaWRcbiAgICBwaWN0dXJlQXJyYXkuc3BsaWNlKDAsMSlcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwaWN0dXJlQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBwaWN0dXJlQXJyYXlbaV0uaWQgPSBpXG4gICAgfVxuICAgIGRvdFNlbGVjdGlvbihwaWN0dXJlQXJyYXksIGN1cnJlbnRQaWMpXG5cbn1cblxuZXhwb3J0IHsgZGVsZXRlUGljIH0iLCJpbXBvcnQgeyBkb3RTZWxlY3Rpb24gfSBmcm9tIFwiLi9kb3RTZWxlY3Rpb25cIjtcblxuZnVuY3Rpb24gZGlzcGxheVBpY3R1cmUocGljdHVyZUFycmF5KSB7XG4gIGNvbnN0IHBpY3R1cmVDYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGljdHVyZUNhcm91c2VsXCIpO1xuICBjb25zdCBkb3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvdENvbnRhaW5lclwiKTtcbiAgcGljdHVyZUNhcm91c2VsLnJlcGxhY2VDaGlsZHJlbigpO1xuICBkb3RDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgbGV0IHVuc29ydGVkQXJyYXkgPSBwaWN0dXJlQXJyYXkuc29ydCgoYSwgYikgPT4gYS5pZCAtIGIuaWQpO1xuXG4gIGZvciAobGV0IG4gPSAwOyBuIDwgdW5zb3J0ZWRBcnJheS5sZW5ndGg7IG4rKykge1xuICAgIGxldCBidXR0b247XG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRvdCR7dW5zb3J0ZWRBcnJheVtuXS5pZH1gKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImRvdEJ1dHRvblwiKTtcbiAgICBpZiAodW5zb3J0ZWRBcnJheVtuXS5wb3NpdGlvbiA9PSAwKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XG4gICAgfVxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGRvdFNlbGVjdGlvbih1bnNvcnRlZEFycmF5LCBlLnRhcmdldC5pZC5zbGljZSgtMSkpO1xuICAgICAgZGlzcGxheVBpY3R1cmUodW5zb3J0ZWRBcnJheSk7XG4gICAgfSk7XG4gICAgZG90Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH1cblxuICBsZXQgc29ydGVkQXJyYXkgPSBwaWN0dXJlQXJyYXkuc29ydCgoYSwgYikgPT4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24pO1xuXG5cbiAgY29uc29sZS5sb2cocGljdHVyZUFycmF5KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGljdHVyZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGRpdjtcblxuICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIHBpY3R1cmVBcnJheVtpXS5pZCk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlXCIsIFwicG9zaXRpb25cIiArIHBpY3R1cmVBcnJheVtpXS5wb3NpdGlvbiArIFwiJ1wiKTtcblxuICAgIGlmIChwaWN0dXJlQXJyYXlbaV0ucG9zaXRpb24gPT0gXCIwXCIpIHtcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGljdHVyZUFycmF5W2ldLnVybH0pYDtcbiAgICB9XG4gICAgcGljdHVyZUNhcm91c2VsLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbn1cblxuZXhwb3J0IHsgZGlzcGxheVBpY3R1cmUgfTtcbiIsImZ1bmN0aW9uIGRvdFNlbGVjdGlvbihwaWN0dXJlQXJyYXksIGUpIHtcbiAgbGV0IGlkID0gZTtcblxuICBsZXQgdW5zb3J0ZWRBcnJheSA9IHBpY3R1cmVBcnJheS5zb3J0KChhLCBiKSA9PiBhLmlkIC0gYi5pZCk7XG5cbiAgY29uc3QgbG9vcFBpY3R1cmVzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5zb3J0ZWRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHVuc29ydGVkQXJyYXlbaV0ucG9zaXRpb24gPT0gMCkge1xuICAgICAgICB1bnNvcnRlZEFycmF5W2ldLnBvc2l0aW9uID0gdW5zb3J0ZWRBcnJheS5sZW5ndGg7XG4gICAgICB9XG4gICAgICB1bnNvcnRlZEFycmF5W2ldLnBvc2l0aW9uLS07XG4gICAgfVxuICAgIHJldHVybiB1bnNvcnRlZEFycmF5O1xuICB9O1xuXG4gIHdoaWxlICh1bnNvcnRlZEFycmF5W2lkXS5wb3NpdGlvbiAhPT0gMCkge1xuICAgIGxvb3BQaWN0dXJlcygpO1xuICB9XG59XG5cbmV4cG9ydCB7IGRvdFNlbGVjdGlvbiB9O1xuIiwiZnVuY3Rpb24gbmV3UGljdHVyZShpZCwgdXJsLCBwb3NpdGlvbikge1xuICBjbGFzcyBjcmVhdGVQaWN0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdXJsLCBwb3NpdGlvbikge1xuICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmV3UGljID0gbmV3IGNyZWF0ZVBpY3R1cmUoaWQsIHVybCwgcG9zaXRpb24pO1xuXG4gIHJldHVybiBuZXdQaWM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlbW9QaWN0dXJlcyhwaWN0dXJlQXJyYXkpIHtcbiAgcGljdHVyZUFycmF5LnB1c2goXG4gICAgbmV3UGljdHVyZShcbiAgICAgIFwiMFwiLFxuICAgICAgXCJodHRwczovL3BsdXMudW5zcGxhc2guY29tL3ByZW1pdW1fcGhvdG8tMTY4NjA5MDQ1MDQ3OS0zNzBkNWRkZjRkZTE/cT04MCZ3PTE5NzQmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgICBcIjBcIixcbiAgICApLFxuXG4gICAgbmV3UGljdHVyZShcbiAgICAgIFwiMVwiLFxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTcyNDIzMjU0NzM3NC02OTc1ODU3NGZmZjU/cT04MCZ3PTE5NzQmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgICBcIjFcIixcbiAgICApLFxuXG4gICAgbmV3UGljdHVyZShcbiAgICAgIFwiMlwiLFxuICAgICAgXCJodHRwczovL3BsdXMudW5zcGxhc2guY29tL3ByZW1pdW1fcGhvdG8tMTY2OTg0MjMzNjgyNi0yOGI1MjcwODc5MmE/cT04MCZ3PTE5MzUmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgICBcIjJcIixcbiAgICApLFxuXG4gICAgbmV3UGljdHVyZShcbiAgICAgIFwiM1wiLFxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTcyMDA0ODE2OTk3MC05YzY1MWNmMTdjY2Q/cT04MCZ3PTIwMjgmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZERjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgICBcIjNcIixcbiAgICApLFxuXG4gICAgbmV3UGljdHVyZShcbiAgICAgIFwiNFwiLFxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTcyNDE1MDA2NzgwMS1iOGRiMTFkOGVjZjA/cT04MCZ3PTE5NjQmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgICBcIjRcIixcbiAgICApLFxuICApO1xufVxuXG5leHBvcnQgeyBuZXdQaWN0dXJlLCBjcmVhdGVEZW1vUGljdHVyZXMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVEZW1vUGljdHVyZXMgfSBmcm9tIFwiLi9uZXdQaWN0dXJlXCI7XG5pbXBvcnQgeyBkaXNwbGF5UGljdHVyZSB9IGZyb20gXCIuL2Rpc3BsYXlQaWN0dXJlXCI7XG5pbXBvcnQgeyBjaGFuZ2VPcmRlciB9IGZyb20gXCIuL2NoYW5nZU9yZGVyXCI7XG5pbXBvcnQgeyBjb250cm9sTWVudSB9IGZyb20gXCIuL2NvbnRyb2xNZW51XCI7XG5pbXBvcnQgeyBhZGROZXdQaWMgfSBmcm9tIFwiLi9hZGROZXdQaWNcIjtcbmltcG9ydCB7IGRlbGV0ZVBpYyB9IGZyb20gXCIuL2RlbGV0ZVBpY1wiO1xuXG5mdW5jdGlvbiBpbml0aWFsaXNlKCkge1xuICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZCdXR0b25cIik7XG4gIGNvbnN0IGFkZEltYWdlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEltYWdlQnV0dG9uJylcbiAgY29uc3Qgc3VibWl0SW1hZ2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0SW1hZ2VCdXR0b24nKVxuICBjb25zdCBkZWxldGVQaWNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlUGljQnV0dG9uJylcbiAgY29uc3QgcGljdHVyZUFycmF5ID0gW107XG5cbiAgY3JlYXRlRGVtb1BpY3R1cmVzKHBpY3R1cmVBcnJheSk7XG4gIGRpc3BsYXlQaWN0dXJlKHBpY3R1cmVBcnJheSk7XG5cbiAgbmF2QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjaGFuZ2VPcmRlcihwaWN0dXJlQXJyYXksIGUudGFyZ2V0LmlkKTtcbiAgICAgIGRpc3BsYXlQaWN0dXJlKHBpY3R1cmVBcnJheSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGFkZEltYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRyb2xNZW51KClcbiAgfSlcblxuICBzdWJtaXRJbWFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250cm9sTWVudSgpXG4gICAgYWRkTmV3UGljKHBpY3R1cmVBcnJheSlcbiAgICBkaXNwbGF5UGljdHVyZShwaWN0dXJlQXJyYXkpIFxuICB9KVxuXG4gIGRlbGV0ZVBpY0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZGVsZXRlUGljKHBpY3R1cmVBcnJheSlcbiAgICBkaXNwbGF5UGljdHVyZShwaWN0dXJlQXJyYXkpXG4gIH0pXG5cbiAgZnVuY3Rpb24gYXV0b1Njcm9sbCgpIHtcbiAgICBjaGFuZ2VPcmRlcihwaWN0dXJlQXJyYXksIFwicmlnaHRCdXR0b25cIik7XG4gICAgZGlzcGxheVBpY3R1cmUocGljdHVyZUFycmF5KTtcbiAgfSBcblxuICAgIHNldEludGVydmFsKGF1dG9TY3JvbGwsIDMwMDApO1xufVxuXG5pbml0aWFsaXNlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
