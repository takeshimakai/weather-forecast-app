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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\n#bg-img {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    z-index: -1;\\n    height: 100vh;\\n    width: 100vw;\\n    object-fit: cover;\\n}\\n\\n#content {\\n    text-align: center;\\n    margin-top: 20px;\\n}\\n\\n#controls {\\n    display: flex;\\n    justify-content: center;\\n    margin: 20px 0;\\n}\\n\\n#unitBtn {\\n    margin-left: 5px;\\n}\\n\\n#current-display {\\n    background-color: white;\\n    margin: auto;\\n    border: 1px solid lightgray;\\n    border-radius: 5px;\\n    width: 200px;\\n    padding-bottom: 20px;\\n}\\n\\n#current-display > h2 {\\n    padding: 20px 0 10px;\\n    margin: 0 30px 10px;\\n    border-bottom: 1px solid lightgray;\\n}\\n\\n#forecast-display {\\n    display: flex;\\n    justify-content: center;\\n    margin-top: 20px;\\n}\\n\\n#forecast-display > div {\\n    background-color: white;\\n    border: lightgray 1px solid;\\n    border-radius: 5px;\\n    margin: 5px;\\n    padding: 10px 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/background.js":
/*!**************************************!*\
  !*** ./src/components/background.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./src/components/fetchData.js\");\n\n\nconst loadBackground = async (location) => {\n    try {\n        const url = `http://api.giphy.com/v1/gifs/search?q=${location}&api_key=Mt4nTlonthoBKxLA5ZFtxJ6ePcpw4b2E&limit=5`;\n        const fetchedData = await Object(_fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url);\n    \n        const randomIndex = Math.floor(Math.random() * 5);\n    \n        const img = document.querySelector('#bg-img');\n        img.src = fetchedData.data[randomIndex].images.original.url;\n    } catch (err) {\n        const img = document.querySelector('#bg-img');\n        img.style.display = 'none';\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadBackground);\n\n\n//# sourceURL=webpack:///./src/components/background.js?");

/***/ }),

/***/ "./src/components/fetchData.js":
/*!*************************************!*\
  !*** ./src/components/fetchData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fetchData = async (url) => {\n    try {\n        const response = await fetch(url);\n        const json = await response.json();\n        return json;\n    } catch (err) {\n        return err;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchData);\n\n\n//# sourceURL=webpack:///./src/components/fetchData.js?");

/***/ }),

/***/ "./src/components/getInput.js":
/*!************************************!*\
  !*** ./src/components/getInput.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getInput = (inputId) => {\n    const { value } = document.querySelector(inputId);\n    return value;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getInput);\n\n\n//# sourceURL=webpack:///./src/components/getInput.js?");

/***/ }),

/***/ "./src/components/handleError.js":
/*!***************************************!*\
  !*** ./src/components/handleError.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst handleError = (error) => {\n    document.body.innerHTML = '';\n    \n    const errorMsg = document.createElement('p');\n    errorMsg.textContent = `${error}. Please refresh page.`;\n\n    document.body.appendChild(errorMsg);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleError);\n\n\n//# sourceURL=webpack:///./src/components/handleError.js?");

/***/ }),

/***/ "./src/components/processData.js":
/*!***************************************!*\
  !*** ./src/components/processData.js ***!
  \***************************************/
/*! exports provided: processCurrentData, processForecastData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processCurrentData\", function() { return processCurrentData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processForecastData\", function() { return processForecastData; });\nconst tempConversion = (kelvin) => {\n    const degC = Math.round(kelvin - 273.15);\n    const degF = Math.round((kelvin * 9) / 5 - 459.67);\n\n    return {\n        degC,\n        degF,\n    };\n};\n\nconst processCurrentData = (json) => {\n    const { name: location } = json;\n    const { temp } = json.main;\n    const { main: weather, icon } = json.weather[0];\n    const day = 'Today';\n\n    return {\n        day,\n        location,\n        temp: tempConversion(temp),\n        weather,\n        icon,\n    };\n};\n\nconst processForecastData = (json) => {\n    const filteredJson = json.list.filter((item) => item['dt_txt'].includes('12:00:00'));\n    \n    const filteredData = [];\n    filteredJson.forEach((data) => {\n        const { dt_txt: date } = data;\n        const { temp } = data.main;\n        const { main: weather, icon } = data.weather[0];\n\n        const forecastDay = new Date(date).getDay();\n        let day;\n        switch (forecastDay) {\n            case 0:\n                day = 'Sunday';\n                break;\n            case 1:\n                day = 'Monday';\n                break;\n            case 2:\n                day = 'Tuesday';\n                break;\n            case 3:\n                day = 'Wednesday';\n                break;\n            case 4:\n                day = 'Thursday';\n                break;\n            case 5:\n                day = 'Friday';\n                break;\n            case 6:\n                day = 'Saturday';\n                break;\n            default:\n        }\n\n        filteredData.push({\n            day,\n            temp: tempConversion(temp),\n            weather,\n            icon,\n        });\n    });\n\n    return filteredData;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/components/processData.js?");

/***/ }),

/***/ "./src/components/render.js":
/*!**********************************!*\
  !*** ./src/components/render.js ***!
  \**********************************/
/*! exports provided: renderWeather, changeTempDisplay, renderUnitBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderWeather\", function() { return renderWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeTempDisplay\", function() { return changeTempDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderUnitBtn\", function() { return renderUnitBtn; });\nconst renderTemp = (day, temp, unit, elementTag) => {\n    const tempDisplay = document.createElement(elementTag);\n    tempDisplay.setAttribute('id', day);\n    tempDisplay.setAttribute('class', 'temp-display');\n    \n    if (unit === 'celsius') {\n        tempDisplay.innerHTML = `${temp.degC}&#8451`;\n    } else {\n        tempDisplay.innerHTML = `${temp.degF}&#8457`;\n    }\n\n    return tempDisplay;\n};\n\nconst changeTempDisplay = (data, unit) => {\n    const tempDisplays = document.querySelectorAll('.temp-display');\n\n    data.forEach((obj) => {\n        tempDisplays.forEach((item) => {\n            if (obj.day === item.id) {\n                if (unit === 'celsius') {\n                    item.innerHTML = `${obj.temp.degC}&#8451`;\n                } else {\n                    item.innerHTML = `${obj.temp.degF}&#8457`;\n                }\n            }\n        });\n    });\n};\n\nconst renderWeather = (data, unit) => {\n    data.forEach((item) => {\n        if (item.day === 'Today') {\n            const {\n                day,\n                location,\n                temp,\n                weather,\n                icon,\n            } = item;\n            \n            const locationDisplay = document.createElement('h2');\n            locationDisplay.textContent = location;\n        \n            const tempDisplay = renderTemp(day, temp, unit, 'h3');\n        \n            const weatherDisplay = document.createElement('h3');\n            weatherDisplay.textContent = weather;\n        \n            const weatherIcon = document.createElement('img');\n            weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;\n        \n            const dayDisplay = document.createElement('h3');\n            dayDisplay.textContent = day;\n        \n            const currentDisplay = document.querySelector('#current-display');\n            currentDisplay.append(\n                locationDisplay,\n                dayDisplay,\n                weatherIcon,\n                weatherDisplay,\n                tempDisplay,\n            );\n        } else {\n            const {\n                day,\n                temp,\n                weather,\n                icon,\n            } = item;\n            \n            const dayDisplay = document.createElement('h4');\n            dayDisplay.textContent = day;\n    \n            const tempDisplay = renderTemp(day, temp, unit, 'h4');\n    \n            const weatherDisplay = document.createElement('h4');\n            weatherDisplay.textContent = weather;\n    \n            const weatherIcon = document.createElement('img');\n            weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;\n    \n            const dayContainer = document.createElement('div');\n            dayContainer.append(\n                dayDisplay,\n                weatherIcon,\n                weatherDisplay,\n                tempDisplay,\n            );\n    \n            const forecastDisplay = document.querySelector('#forecast-display');\n            forecastDisplay.appendChild(dayContainer);\n        }\n    });\n};\n\nconst renderUnitBtn = (unit) => {\n    const unitBtn = document.querySelector('#unitBtn');\n\n    if (unit === 'celsius') {\n        unitBtn.innerHTML = '&#8457';\n    } else {\n        unitBtn.innerHTML = '&#8451';\n    }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/components/render.js?");

/***/ }),

/***/ "./src/components/weatherData.js":
/*!***************************************!*\
  !*** ./src/components/weatherData.js ***!
  \***************************************/
/*! exports provided: updateWeatherData, getWeatherData, changeTempUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateWeatherData\", function() { return updateWeatherData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeatherData\", function() { return getWeatherData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeTempUnit\", function() { return changeTempUnit; });\n/* harmony import */ var _getInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getInput */ \"./src/components/getInput.js\");\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchData */ \"./src/components/fetchData.js\");\n/* harmony import */ var _processData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processData */ \"./src/components/processData.js\");\n\n\n\n\nlet locationInput;\n\nconst apiInfo = {\n    apiKey: 'ac8b5267855b6a12f7ad7ef83847bfde',\n    get currentUrl() {\n        return `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${this.apiKey}`;\n    },\n    get forecastUrl() {\n        return `https://api.openweathermap.org/data/2.5/forecast?q=${locationInput}&appid=${this.apiKey}`;\n    },\n};\n\nconst weather = {\n    displayUnit: 'celsius',\n    data: [],\n};\n\nconst getWeatherData = () => weather;\n\nconst updateWeatherData = async () => {\n    try {\n        locationInput = await Object(_getInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#search-input') || 'Arctic';\n\n        let [currentWeather, forecastWeather] = await Promise.all(\n            [\n                Object(_fetchData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(apiInfo.currentUrl),\n                Object(_fetchData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(apiInfo.forecastUrl),\n            ],\n        );\n\n        currentWeather = Object(_processData__WEBPACK_IMPORTED_MODULE_2__[\"processCurrentData\"])(currentWeather);\n        forecastWeather = Object(_processData__WEBPACK_IMPORTED_MODULE_2__[\"processForecastData\"])(forecastWeather);\n\n        const combinedWeather = [];\n        combinedWeather.push(currentWeather);\n        forecastWeather.forEach((item) => {\n            combinedWeather.push(item);\n        });\n        \n        weather.data = combinedWeather;\n        \n        return weather;\n    } catch (err) {\n        return err;\n    }\n};\n\nconst changeTempUnit = () => {\n    if (weather.displayUnit === 'celsius') {\n        weather.displayUnit = 'fahrenheit';\n    } else {\n        weather.displayUnit = 'celsius';\n    }\n\n    return weather.displayUnit;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/components/weatherData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/render */ \"./src/components/render.js\");\n/* harmony import */ var _components_weatherData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/weatherData */ \"./src/components/weatherData.js\");\n/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/background */ \"./src/components/background.js\");\n/* harmony import */ var _components_handleError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/handleError */ \"./src/components/handleError.js\");\n\n\n\n\n\n\nconst initLoad = async () => {\n    try {\n        const weatherData = await Object(_components_weatherData__WEBPACK_IMPORTED_MODULE_2__[\"updateWeatherData\"])();\n        Object(_components_render__WEBPACK_IMPORTED_MODULE_1__[\"renderWeather\"])(weatherData.data, weatherData.displayUnit);\n        Object(_components_render__WEBPACK_IMPORTED_MODULE_1__[\"renderUnitBtn\"])(weatherData.displayUnit);\n        Object(_components_background__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(weatherData.data[0].location);\n    } catch (err) {\n        Object(_components_handleError__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(err);\n    }\n};\n\ninitLoad();\n\nconst handleSearch = async (e) => {\n    e.preventDefault();\n\n    try {\n        const currentDisplay = document.querySelector('#current-display');\n        const forecastDisplay = document.querySelector('#forecast-display');\n        currentDisplay.innerHTML = '';\n        forecastDisplay.innerHTML = '';\n\n        const weatherData = await Object(_components_weatherData__WEBPACK_IMPORTED_MODULE_2__[\"updateWeatherData\"])();\n        \n        Object(_components_render__WEBPACK_IMPORTED_MODULE_1__[\"renderWeather\"])(weatherData.data, weatherData.displayUnit);\n        Object(_components_background__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(weatherData.data[0].location);\n    } catch (err) {\n        Object(_components_handleError__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(err);\n    }\n};\n\nconst searchBtn = document.querySelector('#searchBtn');\nsearchBtn.addEventListener('click', handleSearch);\n\nconst handleUnitChange = (e) => {\n    e.preventDefault();\n\n    const weatherData = Object(_components_weatherData__WEBPACK_IMPORTED_MODULE_2__[\"getWeatherData\"])();\n    weatherData.displayUnit = Object(_components_weatherData__WEBPACK_IMPORTED_MODULE_2__[\"changeTempUnit\"])();\n\n    Object(_components_render__WEBPACK_IMPORTED_MODULE_1__[\"changeTempDisplay\"])(weatherData.data, weatherData.displayUnit);\n    Object(_components_render__WEBPACK_IMPORTED_MODULE_1__[\"renderUnitBtn\"])(weatherData.displayUnit);\n};\n\nconst unitBtn = document.querySelector('#unitBtn');\nunitBtn.addEventListener('click', handleUnitChange);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });