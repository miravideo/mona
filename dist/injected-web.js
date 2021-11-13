if (window['Violentmonkey:vuaHiC62kVk='] !== 1)
        window['Violentmonkey:vuaHiC62kVk='] = function (IS_FIREFOX,__HANDSHAKE_ID__,__VAULT_ID__) {
          const module = { __proto__: null };
          /* eslint-disable no-unused-vars */

/**
 * This file is used by both `injected` and `injected-web` entries.
 * `global` is used instead of WebPack's polyfill which we disable in webpack.conf.js.
 * `export` is stripped in the final output and is only used for our NodeJS test scripts.
 * WARNING! Don't use exported functions from #/common anywhere in injected!
 */
const global = function _() {
  return this || globalThis; // eslint-disable-line no-undef
}();
/** These two are unforgeable so we extract them primarily to improve minification.
 * The document's value can change only in about:blank but we don't inject there. */


const {
  document,
  window
} = global;
const PROTO = 'prototype';
const IS_TOP = window.top === window;
const WINDOW_CLOSE = 'window.close';
const WINDOW_FOCUS = 'window.focus';
const NS_HTML = 'http://www.w3.org/1999/xhtml';
const CALLBACK_ID = '__CBID';

const getObjectTypeTag = val => val && safeCall(slice, safeCall(objectToString, val), 8, -1);

const isFunction = val => typeof val === 'function';

const isObject = val => val !== null && typeof val === 'object'; // TODO: maybe use `val[toStringTagSym]` when strict_min_version > 78


const isPromise = val => getObjectTypeTag(val) === 'Promise';

const isString = val => typeof val === 'string';

const getOwnProp = (obj, key) => safeCall(hasOwnProperty, obj, key) ? obj[key] : undefined;
/** Workaround for array eavesdropping via prototype setters like '0','1',...
 * on `push` and `arr[i] = 123`, as well as via getters if you read beyond
 * its length or from an unassigned `hole`. */


const setOwnProp = (obj, key, value) => defineProperty(obj, key, {
  __proto__: null,
  value,
  configurable: true,
  enumerable: true,
  writable: true
});

const vmOwnFuncToString = () => '[Violentmonkey property]';
/** Using __proto__ because Object.create(null) may be spoofed */


const createNullObj = () => ({
  __proto__: null
}); // WARNING! `obj` must use __proto__:null


const ensureNestedProp = (obj, bucketId, key, defaultValue) => {
  var _bucket$key;

  const bucket = obj[bucketId] || (obj[bucketId] = createNullObj());
  const val = (_bucket$key = bucket[key]) != null ? _bucket$key : bucket[key] = defaultValue != null ? defaultValue : createNullObj();
  return val;
};

const promiseResolve = () => (async () => {})();

const vmOwnFunc = (func, toString) => defineProperty(func, 'toString', {
  __proto__: null,
  value: toString || vmOwnFuncToString
}); // Avoiding the need to safe-guard a bunch of methods so we use just one


const getUniqIdSafe = (prefix = 'VM') => `${prefix}${mathRandom()}`;
/** args is [tags?, ...rest] */


const log = (level, ...args) => {
  let s = '[Violentmonkey]';
  if (args[0]) safeCall(forEach, args[0], tag => {
    s += `[${tag}]`;
  });
  args[0] = s;
  safeCall(apply, logging[level], logging, args);
};
/**
 * Picks into `this`
 * WARNING! `this` must use __proto__:null or already have own properties on the picked keys.
 * @param {Object} obj
 * @param {string[]} keys
 * @returns {Object} same object as `this`
 */


const pickIntoThis = function pickIntoThis(obj, keys) {
  if (obj) {
    safeCall(forEach, keys, key => {
      if (safeCall(hasOwnProperty, obj, key)) {
        this[key] = obj[key];
      }
    });
  }

  return this;
};
/**
 * Object.defineProperty seems to be inherently broken: it reads inherited props from desc
 * (even though the purpose of this API is to define own props) and then complains when it finds
 * invalid props like an inherited setter when you only provide `{value}`.
 */


const safeDefineProperty = (obj, key, desc) => defineProperty(obj, key, assign(createNullObj(), desc));
/* eslint-disable one-var, one-var-declaration-per-line, no-unused-vars,
   prefer-const, import/no-mutable-exports */

/**
 * `safeCall` is used by our modified babel-plugin-safe-bind.js.
 * `export` is stripped in the final output and is only used for our NodeJS test scripts.
 */
let // window
BlobSafe, CustomEventSafe, DOMParserSafe, ErrorSafe, FileReaderSafe, KeyboardEventSafe, MouseEventSafe, Object, PromiseSafe, ProxySafe, ResponseSafe, SymbolSafe, fire, off, on, openWindow, safeIsFinite, // Symbol
toStringTagSym, // Object
apply, assign, bind, defineProperty, describeProperty, getOwnPropertyNames, getOwnPropertySymbols, objectKeys, objectValues, // Object.prototype
hasOwnProperty, objectToString,
/** Array.prototype can be eavesdropped via setters like '0','1',...
 * on `push` and `arr[i] = 123`, as well as via getters if you read beyond
 * its length or from an unassigned `hole`. */
concat, filter, forEach, indexOf, // Element.prototype
remove, // String.prototype
charCodeAt, slice, // safeCall
safeCall, // various methods
createObjectURL, funcToString, ArrayIsArray, jsonParse, logging, mathRandom, parseFromString, // DOMParser
readAsDataURL, // FileReader
safeResponseBlob, // Response - safe = "safe global" to disambiguate the name
stopImmediatePropagation, regexpReplace, then, // various getters
getBlobType, // Blob
getCurrentScript, // Document
getDetail, // CustomEvent
getReaderResult, // FileReader
getRelatedTarget; // MouseEvent

/**
 * VAULT consists of the parent's safe globals to protect our communications/globals
 * from a page that creates an iframe with src = location and modifies its contents
 * immediately after adding it to DOM via direct manipulation in frame.contentWindow
 * or window[0] before our content script runs at document_start, https://crbug.com/1261964 */

const VAULT = (() => {
  let ArrayP;
  let ElementP;
  let ObjectSafe;
  let StringP;
  let i = -1;
  let call;
  let res;
  let src = global; // FF defines some stuff only on `global` in content mode

  if (__VAULT_ID__) {
    res = window[__VAULT_ID__];
    delete window[__VAULT_ID__];
  }

  if (!res) {
    res = createNullObj();
  } else if (!isFunction(res[0])) {
    src = res[0];
    res = createNullObj();
  }

  res = [// window
  BlobSafe = res[i += 1] || src.Blob, CustomEventSafe = res[i += 1] || src.CustomEvent, DOMParserSafe = res[i += 1] || src.DOMParser, ErrorSafe = res[i += 1] || src.Error, FileReaderSafe = res[i += 1] || src.FileReader, KeyboardEventSafe = res[i += 1] || src.KeyboardEvent, MouseEventSafe = res[i += 1] || src.MouseEvent, Object = res[i += 1] || src.Object, PromiseSafe = res[i += 1] || src.Promise, SymbolSafe = res[i += 1] || src.Symbol, // In FF content mode global.Proxy !== window.Proxy
  ProxySafe = res[i += 1] || src.Proxy, ResponseSafe = res[i += 1] || src.Response, fire = res[i += 1] || src.dispatchEvent, safeIsFinite = res[i += 1] || src.isFinite, // Firefox defines `isFinite` on `global`
  off = res[i += 1] || src.removeEventListener, on = res[i += 1] || src.addEventListener, openWindow = res[i += 1] || src.open, // Object - using ObjectSafe to pacify eslint without disabling the rule
  defineProperty = (ObjectSafe = Object) && res[i += 1] || ObjectSafe.defineProperty, describeProperty = res[i += 1] || ObjectSafe.getOwnPropertyDescriptor, getOwnPropertyNames = res[i += 1] || ObjectSafe.getOwnPropertyNames, getOwnPropertySymbols = res[i += 1] || ObjectSafe.getOwnPropertySymbols, assign = res[i += 1] || ObjectSafe.assign, objectKeys = res[i += 1] || ObjectSafe.keys, objectValues = res[i += 1] || ObjectSafe.values, apply = res[i += 1] || ObjectSafe.apply, bind = res[i += 1] || ObjectSafe.bind, // Object.prototype
  hasOwnProperty = res[i += 1] || ObjectSafe[PROTO].hasOwnProperty, objectToString = res[i += 1] || ObjectSafe[PROTO].toString, // Array.prototype
  concat = res[i += 1] || (ArrayP = src.Array[PROTO]).concat, filter = res[i += 1] || ArrayP.filter, forEach = res[i += 1] || ArrayP.forEach, indexOf = res[i += 1] || ArrayP.indexOf, // Element.prototype
  remove = res[i += 1] || (ElementP = src.Element[PROTO]).remove, // String.prototype
  charCodeAt = res[i += 1] || (StringP = src.String[PROTO]).charCodeAt, slice = res[i += 1] || StringP.slice, // safeCall
  safeCall = res[i += 1] || (call = ObjectSafe.call).bind(call), // various methods
  createObjectURL = res[i += 1] || src.URL.createObjectURL, funcToString = res[i += 1] || safeCall.toString, ArrayIsArray = res[i += 1] || src.Array.isArray, jsonParse = res[i += 1] || src.JSON.parse, logging = res[i += 1] || assign({
    __proto__: null
  }, src.console), mathRandom = res[i += 1] || src.Math.random, parseFromString = res[i += 1] || DOMParserSafe[PROTO].parseFromString, readAsDataURL = res[i += 1] || FileReaderSafe[PROTO].readAsDataURL, safeResponseBlob = res[i += 1] || ResponseSafe[PROTO].blob, stopImmediatePropagation = res[i += 1] || src.Event[PROTO].stopImmediatePropagation, regexpReplace = res[i += 1] || src.RegExp[PROTO][SymbolSafe.replace], then = res[i += 1] || PromiseSafe[PROTO].then, // various getters
  getBlobType = res[i += 1] || describeProperty(BlobSafe[PROTO], 'type').get, getCurrentScript = res[i += 1] || describeProperty(src.Document[PROTO], 'currentScript').get, getDetail = res[i += 1] || describeProperty(CustomEventSafe[PROTO], 'detail').get, getReaderResult = res[i += 1] || describeProperty(FileReaderSafe[PROTO], 'result').get, getRelatedTarget = res[i += 1] || describeProperty(MouseEventSafe[PROTO], 'relatedTarget').get]; // Well-known Symbols are unforgeable

  toStringTagSym = SymbolSafe.toStringTag;
  return res;
})();module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = { __proto__: null };          for (let i = 0, c, str = "cdmnoprt"; i < str.length && (c = str[i++]);)            defineProperty(__webpack_require__, c, { __proto__: null, value: undefined, writable: true });
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
/******/ 			exports: { __proto__: null }, __proto__: null
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		safeCall(modules[moduleId], module.exports, module, module.exports, __webpack_require__);
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
/******/ 			defineProperty(exports, name, {__proto__: null, enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(true) {
/******/ 			defineProperty(exports, toStringTagSym, {__proto__: null, value: 'Module' });
/******/ 		}
/******/ 		defineProperty(exports, '__esModule', {__proto__: null, value: true });
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
/******/ 		var ns = { __proto__: null };
/******/ 		__webpack_require__.r(ns);
/******/ 		defineProperty(ns, 'default', {__proto__: null, enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(const key in value) __webpack_require__.d(ns, key, () => value[key]);
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
/******/ 	__webpack_require__.o = (obj, key) => safeCall(hasOwnProperty, obj, key);
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/injected/web/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/consts.js":
/*!******************************!*\
  !*** ./src/common/consts.js ***!
  \******************************/
/*! exports provided: KEY_GLOBAL_ID, BUILD_IN_SCRIPT_SRC, INJECT_AUTO, INJECT_PAGE, INJECT_CONTENT, IS_DEV, INJECT_MAPPING, CMD_SCRIPT_ADD, CMD_SCRIPT_UPDATE, METABLOCK_RE, INJECTABLE_TAB_URL_RE, browser, TIMEOUT_MAX, TIMEOUT_HOUR, TIMEOUT_24HOURS, TIMEOUT_WEEK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_GLOBAL_ID", function() { return KEY_GLOBAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILD_IN_SCRIPT_SRC", function() { return BUILD_IN_SCRIPT_SRC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_AUTO", function() { return INJECT_AUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_PAGE", function() { return INJECT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_CONTENT", function() { return INJECT_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_DEV", function() { return IS_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_MAPPING", function() { return INJECT_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMD_SCRIPT_ADD", function() { return CMD_SCRIPT_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMD_SCRIPT_UPDATE", function() { return CMD_SCRIPT_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METABLOCK_RE", function() { return METABLOCK_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECTABLE_TAB_URL_RE", function() { return INJECTABLE_TAB_URL_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browser", function() { return browser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_MAX", function() { return TIMEOUT_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_HOUR", function() { return TIMEOUT_HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_24HOURS", function() { return TIMEOUT_24HOURS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_WEEK", function() { return TIMEOUT_WEEK; });
// SAFETY WARNING! Exports used by `injected` must make ::safe() calls and use __proto__:null
// for global event bus and save some build in info
const KEY_GLOBAL_ID = '_GLOBAL_ID_';
const BUILD_IN_SCRIPT_SRC = 'https://mira-1255830993.cos.ap-shanghai.myqcloud.com/lab/plugin/base.user.js';
const INJECT_AUTO = 'auto';
const INJECT_PAGE = 'page';
const INJECT_CONTENT = 'content';
const IS_DEV = true;
const INJECT_MAPPING = {
  __proto__: null,
  // `auto` tries to provide `window` from the real page as `unsafeWindow`
  [INJECT_AUTO]: [INJECT_PAGE, INJECT_CONTENT],
  // inject into page context
  [INJECT_PAGE]: [INJECT_PAGE],
  // inject into content context only
  [INJECT_CONTENT]: [INJECT_CONTENT]
};
const CMD_SCRIPT_ADD = 'AddScript';
const CMD_SCRIPT_UPDATE = 'UpdateScript'; // Allow metadata lines to start with WHITESPACE? '//' SPACE
// Allow anything to follow the predefined text of the metaStart/End
// The SPACE must be on the same line and specifically \x20 as \s would also match \r\n\t
// Note: when there's no valid metablock, an empty string is matched for convenience

const METABLOCK_RE = /(?:^|\n)\s*\/\/\x20==UserScript==([\s\S]*?\n)\s*\/\/\x20==\/UserScript==|$/;
const INJECTABLE_TAB_URL_RE = /^(https?|file|ftps?):/; // `browser` is a local variable since we remove the global `chrome` and `browser` in injected*
// to prevent exposing them to userscripts with `@inject-into content`

const {
  browser
} = global; // setTimeout truncates the delay to a 32-bit signed integer so the max delay is ~24 days

const TIMEOUT_MAX = 0x7FFFFFFF;
const TIMEOUT_HOUR = 60 * 60 * 1000;
const TIMEOUT_24HOURS = 24 * 60 * 60 * 1000;
const TIMEOUT_WEEK = 7 * 24 * 60 * 60 * 1000;

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! exports provided: normalizeKeys, i18n, toString, memoize, debounce, throttle, noop, getUniqId, buffer2string, blob2base64, string2uint8array, compareVersion, formatTime, formatByteLength, isEmpty, ensureArray, requestLocalFile, isRemote, request, dumpScriptValue, defaultImage, initHooks, sendCmd, sendCmdDirectly, sendTabCmd, sendMessage, sendMessageRetry, leftpad, getLocaleString, getScriptName, getFullUrl, encodeFilename, decodeFilename, getActiveTab, makePause, trueJoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultImage", function() { return defaultImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initHooks", function() { return initHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCmd", function() { return sendCmd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCmdDirectly", function() { return sendCmdDirectly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendTabCmd", function() { return sendTabCmd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageRetry", function() { return sendMessageRetry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftpad", function() { return leftpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocaleString", function() { return getLocaleString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScriptName", function() { return getScriptName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullUrl", function() { return getFullUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeFilename", function() { return encodeFilename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeFilename", function() { return decodeFilename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveTab", function() { return getActiveTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePause", function() { return makePause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trueJoin", function() { return trueJoin; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./src/common/object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/common/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeKeys", function() { return _object__WEBPACK_IMPORTED_MODULE_1__["normalizeKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["toString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["throttle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUniqId", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getUniqId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffer2string", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["buffer2string"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blob2base64", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["blob2base64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "string2uint8array", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["string2uint8array"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareVersion", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["compareVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["formatTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatByteLength", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["formatByteLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensureArray", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["ensureArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestLocalFile", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["requestLocalFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRemote", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isRemote"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dumpScriptValue", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["dumpScriptValue"]; });

// SAFETY WARNING! Exports used by `injected` must make ::safe() calls and use __proto__:null





const defaultImage = '/public/images/icon128.png';
function initHooks() {
  const hooks = [];

  function fire(data) {
    hooks.slice().forEach(cb => {
      cb(data);
    });
  }

  function hook(callback) {
    hooks.push(callback);
    return () => {
      const i = hooks.indexOf(callback);
      if (i >= 0) hooks.splice(i, 1);
    };
  }

  return {
    hook,
    fire
  };
}
/**
 * Used by `injected`
 * @param {string} cmd
 * @param data
 * @param {{retry?: boolean, ignoreError?: boolean}} [options]
 * @return {Promise}
 */

function sendCmd(cmd, data, options) {
  return sendMessage({
    cmd,
    data
  }, options);
} // These need `src` parameter so we'll use sendCmd for them. We could have forged `src` via
// browser.tabs.getCurrent but there's no need as they normally use only a tiny amount of data.

const COMMANDS_WITH_SRC = ['ConfirmInstall', 'Notification', 'TabClose', 'TabFocus', 'TabOpen', 'UpdateValue'
/*
  These are used only by content scripts where sendCmdDirectly can't be used anyway
  'GetInjected',
  'GetRequestId',
  'HttpRequest',
  'InjectionFeedback',
  'SetPopup',
*/
];

const getBgPage = () => _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].extension.getBackgroundPage == null ? void 0 : _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].extension.getBackgroundPage();
/**
 * Sends the command+data directly so it's synchronous and faster than sendCmd thanks to deepCopy.
 * WARNING! Make sure `cmd` handler doesn't use `src` or `cmd` is listed in COMMANDS_WITH_SRC.
 */


function sendCmdDirectly(cmd, data, options) {
  const bg = !COMMANDS_WITH_SRC.includes(cmd) && getBgPage();
  return bg && bg !== window && bg.deepCopy ? bg.handleCommandMessage(bg.deepCopy({
    cmd,
    data
  })).then(_object__WEBPACK_IMPORTED_MODULE_1__["deepCopy"]) : sendCmd(cmd, data, options);
}
/**
 * @param {number} tabId
 * @param {string} cmd
 * @param data
 * @param {{frameId?: number}} [options]
 * @return {Promise}
 */

function sendTabCmd(tabId, cmd, data, options) {
  return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].tabs.sendMessage(tabId, {
    cmd,
    data
  }, options).catch(_util__WEBPACK_IMPORTED_MODULE_2__["noop"]);
} // Used by `injected`

function sendMessage(payload, {
  retry
} = {}) {
  if (retry) return sendMessageRetry(payload);
  let promise = _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].runtime.sendMessage(payload); // Ignoring errors when sending from the background script because it's a broadcast

  if (false) {}

  return promise;
}
/**
 * Used by `injected`
 * The active tab page and its [content] scripts load before the extension's
 * persistent background script when Chrome starts with a URL via command line
 * or when configured to restore the session, https://crbug.com/314686
 */

async function sendMessageRetry(payload, retries = 10) {
  let pauseDuration = 10;

  for (; retries > 0; retries -= 1) {
    try {
      const data = await sendMessage(payload);
      if (data) return data;
    } catch (e) {
      if (!`${e}`.includes('Could not establish connection.')) {
        throw e;
      }
    }

    await makePause(pauseDuration);
    pauseDuration *= 2;
  }

  throw new Error('Violentmonkey cannot connect to the background page.');
}
function leftpad(input, length, pad = '0') {
  let num = input.toString();

  while (num.length < length) num = `${pad}${num}`;

  return num;
}
/**
 * Get locale attributes such as `@name:zh-CN`
 */

function getLocaleString(meta, key) {
  const localeMeta = navigator.languages // Use `lang.toLowerCase()` since v2.6.5
  .map(lang => meta[`${key}:${lang}`] || meta[`${key}:${lang.toLowerCase()}`]).find(Boolean);
  return localeMeta || meta[key] || '';
}
function getScriptName(script) {
  var _script$props$id;

  return script.custom.name || getLocaleString(script.meta, 'name') || `#${(_script$props$id = script.props.id) != null ? _script$props$id : Object(_util__WEBPACK_IMPORTED_MODULE_2__["i18n"])('labelNoName')}`;
}
function getFullUrl(url, base) {
  const obj = new URL(url, base); // Use protocol whitelist to filter URLs

  if (!['http:', 'https:', 'ftp:', 'data:'].includes(obj.protocol)) obj.protocol = 'http:';
  return obj.href;
}
function encodeFilename(name) {
  // `escape` generated URI has % in it
  return name.replace(/[-\\/:*?"<>|%\s]/g, m => {
    let code = m.charCodeAt(0).toString(16);
    if (code.length < 2) code = `0${code}`;
    return `-${code}`;
  });
}
function decodeFilename(filename) {
  return filename.replace(/-([0-9a-f]{2})/g, (_m, g) => String.fromCharCode(parseInt(g, 16)));
}
async function getActiveTab() {
  return (await _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].tabs.query({
    active: true,
    currentWindow: true
  }))[0] || ( // Chrome bug workaround when an undocked devtools window is focused
  await _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].tabs.query({
    active: true,
    windowId: (await _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].windows.getCurrent()).id
  }))[0];
}
function makePause(ms) {
  return ms < 0 ? Promise.resolve() : new Promise(resolve => setTimeout(resolve, ms));
}
function trueJoin(separator) {
  return this.filter(Boolean).join(separator);
}

/***/ }),

/***/ "./src/common/object.js":
/*!******************************!*\
  !*** ./src/common/object.js ***!
  \******************************/
/*! exports provided: normalizeKeys, objectGet, objectSet, objectPick, mapEntry, forEachEntry, forEachKey, forEachValue, deepCopy, deepEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeKeys", function() { return normalizeKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectGet", function() { return objectGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectSet", function() { return objectSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectPick", function() { return objectPick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapEntry", function() { return mapEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEachEntry", function() { return forEachEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEachKey", function() { return forEachKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEachValue", function() { return forEachValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
function normalizeKeys(key) {
  if (key == null) return [];
  if (Array.isArray(key)) return key;
  return `${key}`.split('.').filter(Boolean);
}
function objectGet(obj, rawKey, def) {
  const keys = normalizeKeys(rawKey);
  let res = obj;
  keys.every(key => {
    if (res && typeof res === 'object' && key in res) {
      res = res[key];
      return true;
    }

    res = def;
    return false;
  });
  return res;
}
function objectSet(obj, rawKey, val) {
  const keys = normalizeKeys(rawKey);
  if (!keys.length) return val;
  const root = obj || {};
  let sub = root;
  const lastKey = keys.pop();
  keys.forEach(key => {
    sub = sub[key] || (sub[key] = {});
  });

  if (typeof val === 'undefined') {
    delete sub[lastKey];
  } else {
    sub[lastKey] = val;
  }

  return root;
}
/**
 * @param {{}} obj
 * @param {string[]} keys
 * @param {function(value,key):?} [transform]
 * @returns {{}}
 */

function objectPick(obj, keys, transform) {
  return keys.reduce((res, key) => {
    let value = obj == null ? void 0 : obj[key];
    if (transform) value = transform(value, key);
    if (value != null) res[key] = value;
    return res;
  }, {});
} // invoked as obj::mapEntry(([key, value], i, allEntries) => transformedValue)

function mapEntry(func) {
  return Object.entries(this).reduce((res, entry, i, allEntries) => {
    res[entry[0]] = func(entry, i, allEntries);
    return res;
  }, {});
} // invoked as obj::forEachEntry(([key, value], i, allEntries) => {})

function forEachEntry(func) {
  if (this) Object.entries(this).forEach(func);
} // invoked as obj::forEachKey(key => {}, i, allKeys)

function forEachKey(func) {
  if (this) Object.keys(this).forEach(func);
} // invoked as obj::forEachValue(value => {}, i, allValues)

function forEachValue(func) {
  if (this) Object.values(this).forEach(func);
} // Needed for Firefox's browser.storage API which fails on Vue observables

function deepCopy(src) {
  return src && (Array.isArray(src) && src.map(deepCopy) // Used in safe context
  // eslint-disable-next-line no-restricted-syntax
  || typeof src === 'object' && safeCall(mapEntry, src, ([, val]) => deepCopy(val))) || src;
} // Simplified deep equality checker

function deepEqual(a, b) {
  let res;

  if (!a || !b || typeof a !== typeof b || typeof a !== 'object') {
    res = a === b;
  } else if (Array.isArray(a)) {
    res = a.length === b.length && a.every((item, i) => deepEqual(item, b[i]));
  } else {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    res = keysA.length === keysB.length && keysA.every(key => keysB.includes(key) && deepEqual(a[key], b[key]));
  }

  return res;
}

/***/ }),

/***/ "./src/common/util.js":
/*!****************************!*\
  !*** ./src/common/util.js ***!
  \****************************/
/*! exports provided: i18n, toString, memoize, debounce, throttle, noop, getUniqId, buffer2string, blob2base64, string2uint8array, compareVersion, formatTime, formatByteLength, isEmpty, ensureArray, requestLocalFile, isRemote, request, dumpScriptValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniqId", function() { return getUniqId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer2string", function() { return buffer2string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blob2base64", function() { return blob2base64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string2uint8array", function() { return string2uint8array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareVersion", function() { return compareVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatByteLength", function() { return formatByteLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureArray", function() { return ensureArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestLocalFile", function() { return requestLocalFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRemote", function() { return isRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dumpScriptValue", function() { return dumpScriptValue; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
// SAFETY WARNING! Exports used by `injected` must make ::safe() calls and use __proto__:null

function i18n(name, args) {
  return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].i18n.getMessage(name, args) || name;
}
function toString(param) {
  if (param == null) return '';
  return `${param}`;
}
function memoize(func, resolver = toString) {
  const cacheMap = {};

  function memoized(...args) {
    // Used in safe context
    // eslint-disable-next-line no-restricted-syntax
    const key = resolver(...args);
    let cache = cacheMap[key];

    if (!cache) {
      cache = {
        value: func.apply(this, args)
      };
      cacheMap[key] = cache;
    }

    return cache.value;
  }

  return memoized;
}
function debounce(func, time) {
  let startTime;
  let timer;
  let callback;
  time = Math.max(0, +time || 0);

  function checkTime() {
    timer = null;
    if (performance.now() >= startTime) callback();else checkTimer();
  }

  function checkTimer() {
    if (!timer) {
      const delta = startTime - performance.now();
      timer = setTimeout(checkTime, delta);
    }
  }

  function debouncedFunction(...args) {
    startTime = performance.now() + time;

    callback = () => {
      callback = null;
      func.apply(this, args);
    };

    checkTimer();
  }

  return debouncedFunction;
}
function throttle(func, time) {
  let lastTime = 0;
  time = Math.max(0, +time || 0);

  function throttledFunction(...args) {
    const now = performance.now();

    if (lastTime + time < now) {
      lastTime = now;
      func.apply(this, args);
    }
  }

  return throttledFunction;
}
function noop() {}
function getUniqId(prefix = 'VM') {
  const now = performance.now();
  return prefix + Math.floor((now - Math.floor(now)) * 1e12).toString(36) + Math.floor(Math.random() * 1e12).toString(36);
}
/**
 * @param {ArrayBuffer|Uint8Array|Array} buf
 * @param {number} [offset]
 * @param {number} [length]
 * @return {string} a binary string i.e. one byte per character
 */

function buffer2string(buf, offset = 0, length = 1e99) {
  // The max number of arguments varies between JS engines but it's >32k so we're safe
  const sliceSize = 8192;
  const slices = [];
  const arrayLen = buf.length; // present on Uint8Array/Array

  const end = Math.min(arrayLen || buf.byteLength, offset + length);
  const needsSlicing = arrayLen == null || offset || end > sliceSize;

  for (; offset < end; offset += sliceSize) {
    slices.push(String.fromCharCode.apply(null, needsSlicing ? new Uint8Array(buf, offset, Math.min(sliceSize, end - offset)) : buf));
  }

  return slices.join('');
}
/**
 * Faster than buffer2string+btoa: 2x in Chrome, 10x in FF
 * @param {Blob} blob
 * @param {number} [offset]
 * @param {number} [length]
 * @return {Promise<string>} base64-encoded contents
 */

function blob2base64(blob, offset = 0, length = 1e99) {
  if (offset || length < blob.size) {
    blob = blob.slice(offset, offset + length);
  }

  return !blob.size ? '' : new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onload = () => {
      const res = reader.result;
      resolve(res.slice(res.indexOf(',') + 1));
    };
  });
}
function string2uint8array(str) {
  const len = str.length;
  const array = new Uint8Array(len);

  for (let i = 0; i < len; i += 1) {
    array[i] = str.charCodeAt(i);
  }

  return array;
}
const VERSION_RE = /^(.*?)-([-.0-9a-z]+)|$/i;
const DIGITS_RE = /^\d+$/; // using regexp to avoid +'1e2' being parsed as 100

/** @return -1 | 0 | 1 */

function compareVersion(ver1, ver2) {
  // Used in safe context
  // eslint-disable-next-line no-restricted-syntax
  const [, main1 = ver1 || '', pre1] = VERSION_RE.exec(ver1); // eslint-disable-next-line no-restricted-syntax

  const [, main2 = ver2 || '', pre2] = VERSION_RE.exec(ver2);
  const delta = compareVersionChunk(main1, main2) || !pre1 - !pre2 // 1.2.3-pre-release is less than 1.2.3
  || pre1 && compareVersionChunk(pre1, pre2, true); // if pre1 is present, pre2 is too

  return delta < 0 ? -1 : +!!delta;
}

function compareVersionChunk(ver1, ver2, isSemverMode) {
  const parts1 = ver1.split('.');
  const parts2 = ver2.split('.');
  const len1 = parts1.length;
  const len2 = parts2.length;
  const len = (isSemverMode ? Math.min : Math.max)(len1, len2);
  let delta;

  for (let i = 0; !delta && i < len; i += 1) {
    const a = parts1[i];
    const b = parts2[i];

    if (isSemverMode) {
      delta = DIGITS_RE.test(a) && DIGITS_RE.test(b) ? a - b : a > b || a < b && -1;
    } else {
      delta = (parseInt(a, 10) || 0) - (parseInt(b, 10) || 0);
    }
  }

  return delta || isSemverMode && len1 - len2;
}

const units = [['min', 60], ['h', 24], ['d', 1000, 365], ['y']];
function formatTime(duration) {
  duration /= 60 * 1000;
  const unitInfo = units.find(item => {
    const max = item[1];
    if (!max || duration < max) return true;
    const step = item[2] || max;
    duration /= step;
    return false;
  });
  return `${duration | 0}${unitInfo[0]}`;
}
const formatByteLength = len => !len ? '' : len < 1024 && `${len} B` || len < 1024 * 1024 && `${len >> 10} k` // eslint-disable-line no-bitwise
|| `${+(len / (1024 * 1024)).toFixed(1)} M` // allow fractions for megabytes
; // Used by `injected`

function isEmpty(obj) {
  for (const key in obj) {
    if (safeCall(hasOwnProperty, obj, key)) {
      return false;
    }
  }

  return true;
}
function ensureArray(data) {
  return Array.isArray(data) ? data : [data];
}
const binaryTypes = ['blob', 'arraybuffer'];
async function requestLocalFile(url, options = {}) {
  // only GET method is allowed for local files
  // headers is meaningless
  return new Promise((resolve, reject) => {
    const result = {};
    const xhr = new XMLHttpRequest();
    const {
      responseType
    } = options;
    xhr.open('GET', url, true);
    if (binaryTypes.includes(responseType)) xhr.responseType = responseType;

    xhr.onload = () => {
      // status for `file:` protocol will always be `0`
      result.status = xhr.status || 200;
      result.data = binaryTypes.includes(responseType) ? xhr.response : xhr.responseText;

      if (responseType === 'json') {
        try {
          result.data = JSON.parse(result.data);
        } catch (_unused) {// ignore invalid JSON
        }
      }

      if (result.status > 300) {
        reject(result);
      } else {
        resolve(result);
      }
    };

    xhr.onerror = () => {
      result.status = -1;
      reject(result);
    };

    xhr.send();
  });
}
/**
 * Excludes `text/html` to avoid LINK header that Chrome uses to prefetch js and css,
 * because GreasyFork's 404 error response causes CSP violations in console of our page.
 */

const FORCED_ACCEPT = {
  'greasyfork.org': 'application/javascript, text/plain, text/css'
};
const isRemote = url => url && !/^(file:|data:|https?:\/\/(localhost|127\.0\.0\.1[:/]))/.test(url);
/** @typedef {{
  url: string,
  status: number,
  headers: Headers,
  data: string|ArrayBuffer|Blob|Object
}} VMRequestResponse */

/**
 * Make a request.
 * @param {string} url
 * @param {RequestInit} options
 * @return Promise<VMRequestResponse>
 */

async function request(url, options = {}) {
  // fetch does not support local file
  if (url.startsWith('file://')) return requestLocalFile(url, options);
  const {
    body,
    headers,
    responseType
  } = options;
  const isBodyObj = body && safeCall({}.toString, body) === '[object Object]';
  const hostname = url.split('/', 3)[2];
  const accept = FORCED_ACCEPT[hostname]; // Not using ...spread because Babel mistakenly adds its polyfill to injected-web

  const init = Object.assign({
    cache: isRemote(url) ? undefined : 'no-cache'
  }, options, {
    body: isBodyObj ? JSON.stringify(body) : body,
    headers: isBodyObj || accept ? Object.assign({}, headers, isBodyObj && {
      'Content-Type': 'application/json'
    }, accept && {
      accept
    }) : headers
  });
  const result = {
    url,
    status: -1
  };

  try {
    const resp = await fetch(url, init);
    const loadMethod = {
      arraybuffer: 'arrayBuffer',
      blob: 'blob',
      json: 'json'
    }[responseType] || 'text'; // status for `file:` protocol will always be `0`

    result.status = resp.status || 200;
    result.headers = resp.headers;
    result.data = await resp[loadMethod]();
  } catch (_unused2) {
    /* NOP */
  }

  if (result.status < 0 || result.status > 300) throw result;
  return result;
} // Used by `injected`

const SIMPLE_VALUE_TYPE = {
  __proto__: null,
  string: 's',
  number: 'n',
  boolean: 'b'
}; // Used by `injected`

function dumpScriptValue(value, jsonDump = JSON.stringify) {
  if (value !== undefined) {
    const simple = SIMPLE_VALUE_TYPE[typeof value];
    return `${simple || 'o'}${simple ? value : jsonDump(value)}`;
  }
}

/***/ }),

/***/ "./src/injected/util/index.js":
/*!************************************!*\
  !*** ./src/injected/util/index.js ***!
  \************************************/
/*! exports provided: dumpScriptValue, isEmpty, KEY_GLOBAL_ID, BUILD_IN_SCRIPT_SRC, INJECT_AUTO, INJECT_PAGE, INJECT_CONTENT, IS_DEV, INJECT_MAPPING, CMD_SCRIPT_ADD, CMD_SCRIPT_UPDATE, METABLOCK_RE, INJECTABLE_TAB_URL_RE, browser, TIMEOUT_MAX, TIMEOUT_HOUR, TIMEOUT_24HOURS, TIMEOUT_WEEK, fireBridgeEvent, bindEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fireBridgeEvent", function() { return fireBridgeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindEvents", function() { return bindEvents; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dumpScriptValue", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["dumpScriptValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["isEmpty"]; });

/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_GLOBAL_ID", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["KEY_GLOBAL_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BUILD_IN_SCRIPT_SRC", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["BUILD_IN_SCRIPT_SRC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECT_AUTO", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_AUTO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECT_PAGE", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_PAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECT_CONTENT", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_CONTENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IS_DEV", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["IS_DEV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECT_MAPPING", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_MAPPING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CMD_SCRIPT_ADD", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["CMD_SCRIPT_ADD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CMD_SCRIPT_UPDATE", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["CMD_SCRIPT_UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "METABLOCK_RE", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["METABLOCK_RE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECTABLE_TAB_URL_RE", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECTABLE_TAB_URL_RE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browser", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["browser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_MAX", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_MAX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_HOUR", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_HOUR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_24HOURS", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_24HOURS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_WEEK", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_WEEK"]; });

/* eslint-disable no-restricted-imports */

/* WARNING!
 * Make sure all re-exported functions survive in a spoofed/broken environment:
 * use only ::safe() globals that are initialized in a corresponding safe-globals* file,
 * use __proto__:null or get/set own props explicitly. */


const fireBridgeEvent = (eventId, msg, cloneInto) => {
  const detail = cloneInto ? cloneInto(msg, document) : msg;
  const evtMain = new CustomEventSafe(eventId, {
    __proto__: null,
    detail
  });
  safeCall(fire, window, evtMain);
};
const bindEvents = (srcId, destId, bridge, cloneInto) => {
  /* Using a separate event for `node` because CustomEvent can't transfer nodes,
   * whereas MouseEvent (and some others) can't transfer objects without stringification. */
  let incomingNodeEvent;
  safeCall(on, window, srcId, e => {
    safeCall(stopImmediatePropagation, e);

    if (false) {}

    if (!incomingNodeEvent) {
      // CustomEvent is the main message
      const data = safeCall(getDetail, e);
      incomingNodeEvent = data.node && data;
      if (!incomingNodeEvent) bridge.onHandle(data);
    } else {
      // MouseEvent is the second event when the main event has `node: true`
      incomingNodeEvent.node = safeCall(getRelatedTarget, e);
      bridge.onHandle(incomingNodeEvent);
      incomingNodeEvent = null;
    }
  }, true);

  bridge.post = (cmd, data, {
    dataKey
  } = bridge, node) => {
    // Constructing the event now so we don't send anything if it throws on invalid `node`
    const evtNode = node && new MouseEventSafe(destId, {
      __proto__: null,
      relatedTarget: node
    });
    fireBridgeEvent(destId, {
      cmd,
      data,
      dataKey,
      node: !!evtNode
    }, cloneInto);
    if (evtNode) safeCall(fire, window, evtNode);
  };
};

/***/ }),

/***/ "./src/injected/web/bridge.js":
/*!************************************!*\
  !*** ./src/injected/web/bridge.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const handlers = createNullObj();
const callbacks = createNullObj();
/**
 * @property {UAInjected} ua
 */

const bridge = {
  __proto__: null,
  callbacks,

  addHandlers(obj) {
    assign(handlers, obj);
  },

  onHandle({
    cmd,
    data,
    node
  }) {
    const fn = handlers[cmd];
    if (fn) safeCall(fn, node, data);
  },

  send(cmd, data, context, node) {
    return new PromiseSafe(resolve => {
      postWithCallback(cmd, data, context, node, resolve);
    });
  },

  syncCall: postWithCallback
};

function postWithCallback(cmd, data, context, node, cb, customCallbackId) {
  const id = getUniqIdSafe();
  callbacks[id] = cb;

  if (customCallbackId) {
    setOwnProp(data, customCallbackId, id);
  } else {
    data = {
      [CALLBACK_ID]: id,
      data
    };
  }

  bridge.post(cmd, data, context, node);
}

/* harmony default export */ __webpack_exports__["default"] = (bridge);

/***/ }),

/***/ "./src/injected/web/gm-api-wrapper.js":
/*!********************************************!*\
  !*** ./src/injected/web/gm-api-wrapper.js ***!
  \********************************************/
/*! exports provided: makeGmApiWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGmApiWrapper", function() { return makeGmApiWrapper; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");
/* harmony import */ var _gm_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gm-api */ "./src/injected/web/gm-api.js");
/* harmony import */ var _gm_global_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gm-global-wrapper */ "./src/injected/web/gm-global-wrapper.js");
/* harmony import */ var _util_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util-web */ "./src/injected/web/util-web.js");




/** Name in Greasemonkey4 -> name in GM */

const GM4_ALIAS = {
  __proto__: null,
  getResourceUrl: 'getResourceURL',
  xmlHttpRequest: 'xmlhttpRequest'
};
const GM4_ASYNC = {
  __proto__: null,
  getResourceUrl: 1,
  getValue: 1,
  deleteValue: 1,
  setValue: 1,
  listValues: 1
};
let gmApi;
let componentUtils;
/**
 * @param {VMScript & VMInjectedScript} script
 * @returns {Object}
 */

function makeGmApiWrapper(script) {
  // Add GM functions
  // Reference: http://wiki.greasespot.net/Greasemonkey_Manual:API
  const {
    meta
  } = script;
  const grant = meta.grant;

  if (grant.length === 1 && grant[0] === 'none') {
    grant.length = 0;
  }

  const {
    id
  } = script.props;
  const resources = assign(createNullObj(), meta.resources);
  /** @namespace VMInjectedScript.Context */

  const context = {
    id,
    script,
    resources,
    dataKey: script.dataKey,
    resCache: createNullObj()
  };
  const gmInfo = makeGmInfo(script, resources);
  const gm = {
    __proto__: null,
    GM: {
      __proto__: null,
      info: gmInfo
    },
    GM_info: gmInfo,
    unsafeWindow: global
  };

  if (!componentUtils) {
    componentUtils = Object(_util_web__WEBPACK_IMPORTED_MODULE_3__["makeComponentUtils"])();
  }

  assign(gm, componentUtils);

  if (safeCall(indexOf, grant, WINDOW_CLOSE) >= 0) {
    gm.close = vmOwnFunc(() => _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('TabClose', 0, context));
  }

  if (safeCall(indexOf, grant, WINDOW_FOCUS) >= 0) {
    gm.focus = vmOwnFunc(() => _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('TabFocus', 0, context));
  }

  if (!gmApi && grant.length) gmApi = Object(_gm_api__WEBPACK_IMPORTED_MODULE_1__["makeGmApi"])();
  safeCall(forEach, grant, name => {
    const gm4name = safeCall(slice, name, 0, 3) === 'GM.' && safeCall(slice, name, 3);
    const fn = gmApi[gm4name ? `GM_${GM4_ALIAS[gm4name] || gm4name}` : name];

    if (fn) {
      if (gm4name) {
        gm.GM[gm4name] = makeGmMethodCaller(fn, context, GM4_ASYNC[gm4name]);
      } else {
        gm[name] = makeGmMethodCaller(fn, context);
      }
    }
  });
  return grant.length ? Object(_gm_global_wrapper__WEBPACK_IMPORTED_MODULE_2__["makeGlobalWrapper"])(gm) : gm;
}

function makeGmInfo(script, resources) {
  // TODO: move into background.js
  const {
    meta
  } = script;
  const metaCopy = createNullObj();
  let val;
  safeCall(forEach, objectKeys(meta), key => {
    val = meta[key];

    switch (key) {
      case 'match': // -> matches

      case 'excludeMatch':
        // -> excludeMatches
        key += 'e';
      // fallthrough

      case 'exclude': // -> excludes

      case 'include':
        // -> includes
        key += 's';
        val = Object(_util_web__WEBPACK_IMPORTED_MODULE_3__["safeConcat"])([], val);
        break;

      default:
    }

    metaCopy[key] = val;
  });
  safeCall(forEach, ['description', 'name', 'namespace', 'runAt', 'version'], key => {
    if (!metaCopy[key]) metaCopy[key] = '';
  });
  val = objectKeys(resources);
  safeCall(forEach, val, (name, i) => {
    val[i] = {
      name,
      url: resources[name]
    };
  });
  metaCopy.resources = val;
  metaCopy.unwrap = false; // deprecated, always `false`

  return {
    uuid: script.props.uuid,
    scriptMetaStr: script.metaStr,
    scriptWillUpdate: !!script.config.shouldUpdate,
    scriptHandler: 'Violentmonkey',
    version: "2.13.0.12",
    injectInto: _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].mode,
    platform: assign({}, _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].ua),
    script: metaCopy
  };
}

function makeGmMethodCaller(gmMethod, context, isAsync) {
  // keeping the native console.log intact
  return gmMethod === gmApi.GM_log ? gmMethod : vmOwnFunc(isAsync ? async (...args) => safeCall(apply, gmMethod, context, args) : safeCall(bind, gmMethod, context));
}

/***/ }),

/***/ "./src/injected/web/gm-api.js":
/*!************************************!*\
  !*** ./src/injected/web/gm-api.js ***!
  \************************************/
/*! exports provided: makeGmApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGmApi", function() { return makeGmApi; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/injected/util/index.js");
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/injected/web/store.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs */ "./src/injected/web/tabs.js");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requests */ "./src/injected/web/requests.js");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications */ "./src/injected/web/notifications.js");
/* harmony import */ var _gm_values__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gm-values */ "./src/injected/web/gm-values.js");
/* harmony import */ var _util_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util-web */ "./src/injected/web/util-web.js");
// eslint-disable-next-line no-restricted-imports









function makeGmApi() {
  return {
    __proto__: null,

    GM_addGlobalListener(key, fn) {
      return addListener(_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["KEY_GLOBAL_ID"], key, fn);
    },

    GM_removeGlobalListener(listenerId) {
      return removeListener(_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["KEY_GLOBAL_ID"], listenerId);
    },

    GM_sendGlobalEvent(key, event) {
      var _changeHooks$KEY_GLOB;

      const hooks = (_changeHooks$KEY_GLOB = _gm_values__WEBPACK_IMPORTED_MODULE_7__["changeHooks"][_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["KEY_GLOBAL_ID"]]) == null ? void 0 : _changeHooks$KEY_GLOB[key];
      if (!hooks) return;
      safeCall(forEach, objectValues(hooks), fn => {
        try {
          fn(key, event);
        } catch (e) {
          log('error', ['GM_sendGlobalEvent', 'callback'], e);
        }
      });
    },

    GM_regFn(key, fn) {
      var _changeHooks$KEY_GLOB2;

      const hooks = (_changeHooks$KEY_GLOB2 = _gm_values__WEBPACK_IMPORTED_MODULE_7__["changeHooks"][_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["KEY_GLOBAL_ID"]]) == null ? void 0 : _changeHooks$KEY_GLOB2[key];
      if (hooks) throw `duplicate reg ${key}`;
      addListener(_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["KEY_GLOBAL_ID"], key, fn);
    },

    GM_invokeFn(key, arg) {
      var _changeHooks$KEY_GLOB3;

      const hooks = (_changeHooks$KEY_GLOB3 = _gm_values__WEBPACK_IMPORTED_MODULE_7__["changeHooks"][_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["KEY_GLOBAL_ID"]]) == null ? void 0 : _changeHooks$KEY_GLOB3[key];
      if (!hooks) throw `has not reg ${key}`;
      const fn = hooks[objectKeys(hooks)[0]];
      return fn(arg);
    },

    GM_deleteValue(key) {
      const {
        id
      } = this;
      const values = Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["loadValues"])(id);
      const oldRaw = values[key];
      delete values[key]; // using `undefined` to match the documentation and TM for GM_addValueChangeListener

      Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["dumpValue"])(id, key, undefined, null, oldRaw, this);
    },

    GM_getValue(key, def) {
      const raw = Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["loadValues"])(this.id)[key];
      return raw ? Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["decodeValue"])(raw) : def;
    },

    GM_listValues() {
      return objectKeys(Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["loadValues"])(this.id));
    },

    GM_setValue(key, val) {
      const {
        id
      } = this;
      const raw = Object(_util__WEBPACK_IMPORTED_MODULE_1__["dumpScriptValue"])(val, _util_web__WEBPACK_IMPORTED_MODULE_8__["jsonDump"]) || null;
      const values = Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["loadValues"])(id);
      const oldRaw = values[key];
      values[key] = raw;
      Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["dumpValue"])(id, key, val, raw, oldRaw, this);
    },

    /**
     * @callback GMValueChangeListener
     * @param {String} key
     * @param {?} oldValue - `undefined` means value was created
     * @param {?} newValue - `undefined` means value was removed
     * @param {boolean} remote - `true` means value was modified in another tab
     */

    /**
     * @param {String} key - name of the value to monitor
     * @param {GMValueChangeListener} fn - callback
     * @returns {String} listenerId
     */
    GM_addValueChangeListener(key, fn) {
      return addListener(this.id, key, fn);
    },

    /**
     * @param {String} listenerId
     */
    GM_removeValueChangeListener(listenerId) {
      return removeListener(this.id, listenerId);
    },

    GM_getResourceText(name) {
      return getResource(this, name);
    },

    GM_getResourceURL(name) {
      return getResource(this, name, true);
    },

    GM_registerMenuCommand(cap, func) {
      const {
        id
      } = this;
      const key = `${id}:${cap}`;
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].commands[key] = func;
      _bridge__WEBPACK_IMPORTED_MODULE_2__["default"].post('RegisterMenu', {
        id,
        cap
      }, this);
      return cap;
    },

    GM_unregisterMenuCommand(cap) {
      const {
        id
      } = this;
      const key = `${id}:${cap}`;
      delete _store__WEBPACK_IMPORTED_MODULE_3__["default"].commands[key];
      _bridge__WEBPACK_IMPORTED_MODULE_2__["default"].post('UnregisterMenu', {
        id,
        cap
      }, this);
    },

    GM_download(arg1, name) {
      // not using ... as it calls Babel's polyfill that calls unsafe Object.xxx
      const opts = createNullObj();
      let onload;

      if (isString(arg1)) {
        opts.url = arg1;
        opts.name = name;
      } else if (arg1) {
        name = arg1.name;
        onload = arg1.onload;
        safeCall(pickIntoThis, opts, arg1, ['url', 'headers', 'timeout', 'onerror', 'onprogress', 'ontimeout']);
      }

      if (!name || !isString(name)) {
        throw new ErrorSafe('Required parameter "name" is missing or not a string.');
      }

      assign(opts, {
        method: 'GET',
        responseType: 'blob',
        overrideMimeType: 'application/octet-stream',
        // Must be present and a function to trigger downloadBlob in content bridge
        onload: isFunction(onload) ? onload : () => {}
      });
      return Object(_requests__WEBPACK_IMPORTED_MODULE_5__["onRequestCreate"])(opts, this, name);
    },

    GM_xmlhttpRequest(opts) {
      return Object(_requests__WEBPACK_IMPORTED_MODULE_5__["onRequestCreate"])(opts, this);
    },

    /**
     * Bypasses site's CSP for inline `style`, `link`, and `script`.
     * @param {Node} [parent]
     * @param {string} tag
     * @param {Object} [attributes]
     * @returns {HTMLElement} it also has .then() so it should be compatible with TM
     */
    GM_addElement(parent, tag, attributes) {
      return isString(parent) ? webAddElement(null, parent, tag, this) : webAddElement(parent, tag, attributes, this);
    },

    /**
     * Bypasses site's CSP for inline `style`.
     * @param {string} css
     * @returns {HTMLElement} it also has .then() so it should be compatible with TM and old VM
     */
    GM_addStyle(css) {
      return webAddElement(null, 'style', {
        textContent: css,
        id: getUniqIdSafe('VMst')
      }, this);
    },

    GM_openInTab(url, options) {
      return Object(_tabs__WEBPACK_IMPORTED_MODULE_4__["onTabCreate"])(isObject(options) ? assign(createNullObj(), options, {
        url
      }) : {
        active: !options,
        url
      }, this);
    },

    GM_notification(text, title, image, onclick) {
      const options = isObject(text) ? text : {
        __proto__: null,
        text,
        title,
        image,
        onclick
      };

      if (!options.text) {
        throw new ErrorSafe('GM_notification: `text` is required!');
      }

      const id = Object(_notifications__WEBPACK_IMPORTED_MODULE_6__["onNotificationCreate"])(options, this);
      return {
        remove: vmOwnFunc(() => _bridge__WEBPACK_IMPORTED_MODULE_2__["default"].send('RemoveNotification', id, this))
      };
    },

    GM_setClipboard(data, type) {
      _bridge__WEBPACK_IMPORTED_MODULE_2__["default"].post('SetClipboard', {
        data,
        type
      }, this);
    },

    // using the native console.log so the output has a clickable link to the caller's source
    GM_log: logging.log
  };
}

function addListener(id, key, fn) {
  if (!isString(key)) key = `${key}`;
  if (!isFunction(fn)) return;
  const hooks = ensureNestedProp(_gm_values__WEBPACK_IMPORTED_MODULE_7__["changeHooks"], id, key);
  const i = safeCall(indexOf, objectValues(hooks), fn);
  let listenerId = i >= 0 && objectKeys(hooks)[i];

  if (!listenerId) {
    listenerId = getUniqIdSafe('VMvc');
    hooks[listenerId] = fn;
  }

  return listenerId;
}

function removeListener(id, listenerId) {
  const keyHooks = _gm_values__WEBPACK_IMPORTED_MODULE_7__["changeHooks"][id];
  if (!keyHooks) return;

  for (const key in keyHooks) {
    /* proto is null */
    // eslint-disable-line guard-for-in
    const hooks = keyHooks[key];

    if (listenerId in hooks) {
      delete hooks[listenerId];
      if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(hooks)) delete keyHooks[key];
      break;
    }
  }

  if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(keyHooks)) delete _gm_values__WEBPACK_IMPORTED_MODULE_7__["changeHooks"][id];
}

function webAddElement(parent, tag, attrs, context) {
  let el;
  let errorInfo;
  _bridge__WEBPACK_IMPORTED_MODULE_2__["default"].syncCall('AddElement', {
    tag,
    attrs
  }, context, parent, function _(res) {
    el = this;
    errorInfo = res;
  }, 'cbId'); // DOM error in content script can't be caught by a page-mode userscript so we rethrow it here

  if (errorInfo) {
    const err = new ErrorSafe(errorInfo[0]);
    err.stack += `\n${errorInfo[1]}`;
    throw err;
  }
  /* A Promise polyfill is not actually necessary because DOM messaging is synchronous,
     but we keep it for compatibility with GM_addStyle in VM of 2017-2019
     https://github.com/violentmonkey/violentmonkey/issues/217
     as well as for GM_addElement in Tampermonkey. */


  return setOwnProp(el, 'then', async cb => // Preventing infinite resolve loop
  delete el.then // Native Promise ignores non-function
  && (isFunction(cb) ? cb(el) : el));
}

function getResource(context, name, isBlob) {
  const {
    id,
    resCache,
    resources
  } = context;
  const key = resources[name];

  if (key) {
    let res = resCache[key];

    if (!res) {
      _bridge__WEBPACK_IMPORTED_MODULE_2__["default"].syncCall('GetResource', {
        id,
        isBlob,
        key
      }, context, null, response => {
        res = response;
      });

      if (res !== true && isBlob) {
        res = createObjectURL(res);
      }

      resCache[key] = res;
    }

    return res === true ? key : res;
  }
}

/***/ }),

/***/ "./src/injected/web/gm-global-wrapper.js":
/*!***********************************************!*\
  !*** ./src/injected/web/gm-global-wrapper.js ***!
  \***********************************************/
/*! exports provided: makeGlobalWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGlobalWrapper", function() { return makeGlobalWrapper; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/injected/util/index.js");
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");
/* harmony import */ var _util_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util-web */ "./src/injected/web/util-web.js");



/** The index strings that look exactly like integers can't be forged
 * but for example '011' doesn't look like 11 so it's allowed */

const isFrameIndex = key => key >= 0 && key <= 0xFFFFFFFE && key === `${+key}`;

const scopeSym = SymbolSafe.unscopables;
const globalKeysSet = Object(_util_web__WEBPACK_IMPORTED_MODULE_2__["FastLookup"])();

const globalKeys = function makeGlobalKeys() {
  const kWrappedJSObject = 'wrappedJSObject';
  const names = getOwnPropertyNames(window); // True if `names` is usable as is, but FF is bugged: its names have duplicates

  let ok = !IS_FIREFOX;
  safeCall(forEach, names, key => {
    if (isFrameIndex(key)) {
      ok = false;
    } else {
      globalKeysSet.add(key);
    }
  });
  /* Chrome and FF page mode: `global` is `window`
     FF content mode: `global` is different, some props e.g. `isFinite` are defined only there */

  if (global !== window) {
    safeCall(forEach, getOwnPropertyNames(global), key => {
      if (!isFrameIndex(key)) {
        globalKeysSet.add(key);
        ok = false;
      }
    });
  } // wrappedJSObject is not included in getOwnPropertyNames so we add it explicitly.


  if (IS_FIREFOX && _bridge__WEBPACK_IMPORTED_MODULE_1__["default"].mode === _util__WEBPACK_IMPORTED_MODULE_0__["INJECT_CONTENT"] && kWrappedJSObject in global && !globalKeysSet.has(kWrappedJSObject)) {
    globalKeysSet.add(kWrappedJSObject);
    if (ok) setOwnProp(names, names.length, kWrappedJSObject);
  }

  return ok ? names : globalKeysSet.toArray();
}();

const inheritedKeys = createNullObj();
/* These can be redefined but can't be assigned, see sandbox-globals.html */

const readonlyKeys = {
  __proto__: null,
  applicationCache: 1,
  caches: 1,
  closed: 1,
  crossOriginIsolated: 1,
  crypto: 1,
  customElements: 1,
  frameElement: 1,
  history: 1,
  indexedDB: 1,
  isSecureContext: 1,
  localStorage: 1,
  mozInnerScreenX: 1,
  mozInnerScreenY: 1,
  navigator: 1,
  sessionStorage: 1,
  speechSynthesis: 1,
  styleMedia: 1,
  trustedTypes: 1
};
/* These can't be redefined, see sandbox-globals.html */

const unforgeables = {
  __proto__: null,
  Infinity: 1,
  NaN: 1,
  document: 1,
  location: 1,
  top: 1,
  undefined: 1,
  window: 1
};
/* ~50 methods like alert/fetch/moveBy that need `window` as `this`, see sandbox-globals.html */

const MAYBE = vmOwnFunc; // something that can't be imitated by the page

const boundMethods = {
  __proto__: null,
  addEventListener: MAYBE,
  alert: MAYBE,
  atobSafe: MAYBE,
  blur: MAYBE,
  btoa: MAYBE,
  cancelAnimationFrame: MAYBE,
  cancelIdleCallback: MAYBE,
  captureEvents: MAYBE,
  clearInterval: MAYBE,
  clearTimeout: MAYBE,
  close: MAYBE,
  confirm: MAYBE,
  createImageBitmap: MAYBE,
  dispatchEvent: MAYBE,
  dump: MAYBE,
  fetch: MAYBE,
  find: MAYBE,
  focus: MAYBE,
  getComputedStyle: MAYBE,
  getDefaultComputedStyle: MAYBE,
  getSelection: MAYBE,
  matchMedia: MAYBE,
  moveBy: MAYBE,
  moveTo: MAYBE,
  open: MAYBE,
  openDatabase: MAYBE,
  postMessage: MAYBE,
  print: MAYBE,
  prompt: MAYBE,
  queueMicrotask: MAYBE,
  releaseEvents: MAYBE,
  removeEventListener: MAYBE,
  requestAnimationFrame: MAYBE,
  requestIdleCallback: MAYBE,
  resizeBy: MAYBE,
  resizeTo: MAYBE,
  scroll: MAYBE,
  scrollBy: MAYBE,
  scrollByLines: MAYBE,
  scrollByPages: MAYBE,
  scrollTo: MAYBE,
  setInterval: MAYBE,
  setResizable: MAYBE,
  setTimeout: MAYBE,
  sizeToContent: MAYBE,
  stop: MAYBE,
  updateCommands: MAYBE,
  webkitCancelAnimationFrame: MAYBE,
  webkitRequestAnimationFrame: MAYBE,
  webkitRequestFileSystem: MAYBE,
  webkitResolveLocalFileSystemURL: MAYBE
};

for (const name in unforgeables) {
  /* proto is null */
  // eslint-disable-line guard-for-in
  let thisObj;
  let info = describeProperty(thisObj = global, name) || describeProperty(thisObj = window, name);
  let fn;

  if (info) {
    info = assign(createNullObj(), info); // currently only `document` and `window`

    if (fn = info.get) info.get = safeCall(bind, fn, thisObj); // currently only `location`

    if (fn = info.set) info.set = safeCall(bind, fn, thisObj);
    unforgeables[name] = info;
  } else {
    delete unforgeables[name];
  }
}

safeCall(forEach, [EventTarget, Object], src => {
  safeCall(forEach, getOwnPropertyNames(src[PROTO]), key => {
    inheritedKeys[key] = 1;
  });
});
/**
 * @desc Wrap helpers to prevent unexpected modifications.
 */

function makeGlobalWrapper(local) {
  const events = createNullObj();
  const readonlys = assign(createNullObj(), readonlyKeys);
  let globals = globalKeysSet; // will be copied only if modified

  /* Browsers may return [object Object] for Object.prototype.toString(window)
     on our `window` proxy so jQuery libs see it as a plain object and throw
     when trying to clone its recursive properties like `self` and `window`. */

  safeDefineProperty(local, toStringTagSym, {
    get: () => 'Window'
  });
  const wrapper = new ProxySafe(local, {
    __proto__: null,

    defineProperty(_, name, desc) {
      const isStr = isString(name);

      if (!isStr || !isFrameIndex(name)) {
        safeDefineProperty(local, name, desc);
        if (isStr) setEventHandler(name);
        delete readonlys[name];
      }

      return true;
    },

    deleteProperty(_, name) {
      if (!(name in unforgeables) && delete local[name]) {
        if (globals.has(name)) {
          if (globals === globalKeysSet) {
            globals = globalKeysSet.clone();
          }

          globals.delete(name);
        }

        return true;
      }
    },

    // Reducing "steppability" so it doesn't get in the way of debugging other parts of our code.
    // eslint-disable-next-line no-return-assign, no-nested-ternary
    get: (_, name) => name === 'undefined' || name === scopeSym ? undefined : (_ = local[name]) !== undefined || name in local ? _ : resolveProp(name, wrapper, globals, local),

    getOwnPropertyDescriptor(_, name) {
      const ownDesc = describeProperty(local, name);
      const desc = ownDesc || globals.has(name) && describeProperty(global, name);
      if (!desc) return;

      if (getOwnProp(desc, 'value') === window) {
        desc.value = wrapper;
      } // preventing spec violation - we must mirror an unknown unforgeable prop


      if (!ownDesc && !getOwnProp(desc, 'configurable')) {
        const get = getOwnProp(desc, 'get');
        if (get) desc.get = safeCall(bind, get, global);
        safeDefineProperty(local, name, desc);
      }

      return desc;
    },

    has: (_, name) => name in local || name in inheritedKeys || globals.has(name),
    ownKeys: () => makeOwnKeys(local, globals),

    preventExtensions() {},

    set(_, name, value) {
      const isStr = isString(name);
      let readonly = readonlys[name];

      if (readonly === 1) {
        readonly = globals.has(name) ? 2 : 0;
        readonlys[name] = readonly;
      }

      if (!readonly && (!isStr || !isFrameIndex(name))) {
        local[name] = value;
        if (isStr) setEventHandler(name, value, globals, events);
      }

      return true;
    }

  });

  for (const name in unforgeables) {
    /* proto is null */
    // eslint-disable-line guard-for-in
    const desc = unforgeables[name];

    if (name === 'window' || name === 'top' && IS_TOP) {
      delete desc.get;
      delete desc.set;
      desc.value = wrapper;
    }
    /* proto is already null */
    // eslint-disable-next-line no-restricted-syntax


    defineProperty(local, name, desc);
  }

  return wrapper;
}

function makeOwnKeys(local, globals) {
  /** Note that arrays can be eavesdropped via prototype setters like '0','1',...
   * on `push` and `arr[i] = 123`, as well as via getters if you read beyond
   * its length or from an unassigned `hole`. */
  const names = safeCall(filter, getOwnPropertyNames(local), notIncludedIn, globals);
  const symbols = safeCall(filter, getOwnPropertySymbols(local), notIncludedIn, globals);
  const frameIndexes = [];

  for (let i = 0, s; getObjectTypeTag(global[s = `${i}`]) === 'Window'; i += 1) {
    if (!(s in local)) {
      setOwnProp(frameIndexes, s, s);
    }
  }

  return Object(_util_web__WEBPACK_IMPORTED_MODULE_2__["safeConcat"])([], globals === globalKeysSet ? globalKeys : globals.toArray(), frameIndexes, names, symbols);
}

function resolveProp(name, wrapper, globals, local) {
  let value = boundMethods[name];

  if (value === MAYBE) {
    value = window[name];

    if (isFunction(value)) {
      value = safeCall(bind, value, window);
    }

    boundMethods[name] = value;
  }

  const canCopy = value || name in inheritedKeys || globals.has(name);

  if (!value && (canCopy || isString(name) && isFrameIndex(name))) {
    value = global[name];
  }

  if (value === window) {
    value = wrapper;
  }

  if (canCopy && (isFunction(value) || isObject(value) && name !== 'event' // window.event contains the current event so it's always different
  )) {
    local[name] = value;
  }

  return value;
}

function setEventHandler(name, value, globals, events) {
  // Spoofed String index getters won't be called within length, length itself is unforgeable
  if (name.length < 3 || name[0] !== 'o' || name[1] !== 'n' || !globals.has(name)) {
    return;
  }

  name = safeCall(slice, name, 2);
  safeCall(off, window, name, events[name]);

  if (isFunction(value)) {
    // the handler will be unique so that one script couldn't remove something global
    // like console.log set by another script
    safeCall(on, window, name, events[name] = safeCall(bind, value, window));
  } else {
    delete events[name];
  }
}
/** @this {FastLookup|Set} */


function notIncludedIn(key) {
  return !this.has(key);
}

/***/ }),

/***/ "./src/injected/web/gm-values.js":
/*!***************************************!*\
  !*** ./src/injected/web/gm-values.js ***!
  \***************************************/
/*! exports provided: changeHooks, loadValues, dumpValue, decodeValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHooks", function() { return changeHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadValues", function() { return loadValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dumpValue", function() { return dumpValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeValue", function() { return decodeValue; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/injected/web/store.js");

 // Nested objects: scriptId -> keyName -> listenerId -> GMValueChangeListener

const changeHooks = createNullObj();
const dataDecoders = {
  __proto__: null,
  o: jsonParse,
  n: val => +val,
  b: val => val === 'true'
};
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  UpdatedValues(updates) {
    const {
      partial
    } = updates;
    safeCall(forEach, objectKeys(updates), id => {
      const oldData = _store__WEBPACK_IMPORTED_MODULE_1__["default"].values[id];

      if (oldData) {
        const update = updates[id];
        const keyHooks = changeHooks[id];
        if (keyHooks) changedRemotely(keyHooks, oldData, update);
        if (partial) applyPartialUpdate(oldData, update);else _store__WEBPACK_IMPORTED_MODULE_1__["default"].values[id] = update;
      }
    });
  }

});
function loadValues(id) {
  return _store__WEBPACK_IMPORTED_MODULE_1__["default"].values[id];
}
function dumpValue(id, key, val, raw, oldRaw, context) {
  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('UpdateValue', {
    id,
    key,
    value: raw
  }, context);

  if (raw !== oldRaw) {
    var _changeHooks$id;

    const hooks = (_changeHooks$id = changeHooks[id]) == null ? void 0 : _changeHooks$id[key];
    if (hooks) notifyChange(hooks, key, val, raw, oldRaw);
  }
}
function decodeValue(raw) {
  const type = raw[0];
  const handle = dataDecoders[type];
  let val = safeCall(slice, raw, 1);

  try {
    if (handle) val = handle(val);
  } catch (e) {
    if (false) {}
  }

  return val;
}

function applyPartialUpdate(data, update) {
  safeCall(forEach, objectKeys(update), key => {
    const val = update[key];
    if (val) data[key] = val;else delete data[key];
  });
}

function changedRemotely(keyHooks, data, update) {
  safeCall(forEach, objectKeys(update), key => {
    const hooks = keyHooks[key];

    if (hooks) {
      let raw = update[key];
      if (!raw) raw = undefined; // partial `update` currently uses null for deleted values

      const oldRaw = data[key];

      if (oldRaw !== raw) {
        data[key] = raw; // will be deleted later in applyPartialUpdate if empty

        notifyChange(hooks, key, undefined, raw, oldRaw, true);
      }
    }
  });
}

function notifyChange(hooks, key, val, raw, oldRaw, remote = false) {
  // converting `null` from messaging to `undefined` to match the documentation and TM
  const oldVal = (oldRaw || undefined) && decodeValue(oldRaw);
  const newVal = val === undefined && raw ? decodeValue(raw) : val;
  safeCall(forEach, objectValues(hooks), fn => {
    try {
      fn(key, oldVal, newVal, remote);
    } catch (e) {
      log('error', ['GM_addValueChangeListener', 'callback'], e);
    }
  });
}

/***/ }),

/***/ "./src/injected/web/index.js":
/*!***********************************!*\
  !*** ./src/injected/web/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initialize; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/injected/web/store.js");
/* harmony import */ var _gm_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gm-api-wrapper */ "./src/injected/web/gm-api-wrapper.js");
/* harmony import */ var _gm_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gm-values */ "./src/injected/web/gm-values.js");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications */ "./src/injected/web/notifications.js");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requests */ "./src/injected/web/requests.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs */ "./src/injected/web/tabs.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util */ "./src/injected/util/index.js");







 // Make sure to call safe::methods() in code that may run after userscripts

const sendSetTimeout = () => _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].send('SetTimeout', 0); // Waiting for injection of content mode scripts that don't run on document-start


let resolvers;
let waiters;
function initialize(webId, contentId, invokeHost) {
  let invokeGuest;

  if (__HANDSHAKE_ID__) {
    safeCall(on, window, __HANDSHAKE_ID__ + 1, e => {
      e = safeCall(getDetail, e);
      webId = e[0];
      contentId = e[1];
    }, {
      __proto__: null,
      once: true,
      capture: true
    });
    safeCall(fire, window, new CustomEventSafe(__HANDSHAKE_ID__));
  }

  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].dataKey = contentId;

  if (invokeHost) {
    resolvers = createNullObj();
    waiters = createNullObj();
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].mode = _util__WEBPACK_IMPORTED_MODULE_7__["INJECT_CONTENT"];

    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post = (cmd, data, context, node) => {
      invokeHost({
        cmd,
        data,
        node,
        dataKey: (context || _bridge__WEBPACK_IMPORTED_MODULE_0__["default"]).dataKey
      }, _util__WEBPACK_IMPORTED_MODULE_7__["INJECT_CONTENT"]);
    };

    invokeGuest = (cmd, data, realm, node) => {
      if (false) {}
      _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].onHandle({
        cmd,
        data,
        node
      });
    };

    global.chrome = undefined;
    global.browser = undefined;
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
      RunAt: name => resolvers[name]()
    });
  } else {
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].mode = _util__WEBPACK_IMPORTED_MODULE_7__["INJECT_PAGE"];
    Object(_util__WEBPACK_IMPORTED_MODULE_7__["bindEvents"])(webId, contentId, _bridge__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
      /** @this {Node} contentWindow */
      WriteVault(id) {
        this[id] = VAULT;
      }

    });
  }

  return invokeGuest;
}
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  Command({
    id,
    cap,
    evt
  }) {
    const constructor = evt.key ? KeyboardEventSafe : MouseEventSafe;
    const fn = _store__WEBPACK_IMPORTED_MODULE_1__["default"].commands[`${id}:${cap}`];
    if (fn) fn(new constructor(evt.type, evt));
  },

  /** @this {Node} */
  Callback({
    id,
    data
  }) {
    const fn = _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].callbacks[id];
    delete _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].callbacks[id];
    if (fn) safeCall(fn, this, data);
  },

  ScriptData({
    info,
    items,
    runAt
  }) {
    if (info) {
      assign(_bridge__WEBPACK_IMPORTED_MODULE_0__["default"], info);
    }

    if (items) {
      if (waiters && runAt !== 'start') {
        waiters[runAt] = new PromiseSafe(resolve => {
          resolvers[runAt] = resolve;
        });
      }

      safeCall(forEach, items, createScriptData); // FF bug workaround to enable processing of sourceURL in injected page scripts

      if (IS_FIREFOX && _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].mode === _util__WEBPACK_IMPORTED_MODULE_7__["INJECT_PAGE"]) {
        _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('InjectList', runAt);
      }
    }
  },

  Expose() {
    window.external.Violentmonkey = {
      version: "2.13.0.12",
      isInstalled: (name, namespace) => _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].send('GetScriptVer', {
        meta: {
          name,
          namespace
        }
      })
    };
  }

});

function createScriptData(item) {
  const {
    dataKey
  } = item;
  _store__WEBPACK_IMPORTED_MODULE_1__["default"].values[item.props.id] = item.values || createNullObj();

  if (window[dataKey]) {
    // executeScript ran before GetInjected response
    onCodeSet(item, window[dataKey]);
  } else {
    safeDefineProperty(window, dataKey, {
      configurable: true,
      set: fn => onCodeSet(item, fn)
    });
  }
}

async function onCodeSet(item, fn) {
  var _waiters;

  const {
    dataKey,
    stage
  } = item; // deleting now to prevent interception via DOMNodeRemoved on el::remove()

  delete window[dataKey];

  if (false) {}

  const run = () => {
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('Run', item.props.id, item);
    safeCall(fn, Object(_gm_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["makeGmApiWrapper"])(item), logging.error);
  };

  const el = safeCall(getCurrentScript, document);
  const wait = (_waiters = waiters) == null ? void 0 : _waiters[stage];
  if (el) safeCall(remove, el);

  if (wait) {
    waiters[stage] = safeCall(then, stage === 'idle' ? safeCall(then, wait, sendSetTimeout) : wait, run);
  } else {
    run();
  }
}

/***/ }),

/***/ "./src/injected/web/notifications.js":
/*!*******************************************!*\
  !*** ./src/injected/web/notifications.js ***!
  \*******************************************/
/*! exports provided: onNotificationCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNotificationCreate", function() { return onNotificationCreate; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");

let lastId = 0;
const notifications = createNullObj();
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  NotificationClicked(id) {
    var _notifications$id;

    const fn = (_notifications$id = notifications[id]) == null ? void 0 : _notifications$id.onclick;
    if (fn) fn();
  },

  NotificationClosed(id) {
    const options = notifications[id];

    if (options) {
      delete notifications[id];
      const fn = options.ondone;
      if (fn) fn();
    }
  }

});
function onNotificationCreate(options, context) {
  lastId += 1;
  notifications[lastId] = options;
  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('Notification', {
    id: lastId,
    text: options.text,
    title: options.title,
    image: options.image
  }, context);
  return lastId;
}

/***/ }),

/***/ "./src/injected/web/requests.js":
/*!**************************************!*\
  !*** ./src/injected/web/requests.js ***!
  \**************************************/
/*! exports provided: onRequestCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRequestCreate", function() { return onRequestCreate; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");

const idMap = createNullObj();
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  HttpRequested(msg) {
    const req = idMap[msg.id];
    if (req) callback(req, msg);
  }

});
function onRequestCreate(opts, context, fileName) {
  if (!opts.url) throw new ErrorSafe('Required parameter "url" is missing.');
  const scriptId = context.id;
  const id = getUniqIdSafe(`VMxhr${scriptId}`);
  const req = {
    __proto__: null,
    id,
    scriptId,
    opts
  };
  start(req, context, fileName);
  return {
    abort() {
      _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('AbortRequest', id, context);
    }

  };
}

function parseData(req, msg) {
  let res = req.raw;

  switch (req.opts.responseType) {
    case 'json':
      res = jsonParse(res);
      break;

    case 'document':
      res = safeCall(parseFromString, new DOMParserSafe(), res, // Cutting everything after , or ; and trimming whitespace
      safeCall(regexpReplace, /[,;].*|\s+/g, msg.contentType, '') || 'text/html');
      break;

    default:
  } // `response` is sent only when changed so we need to remember it for response-less events


  req.response = res; // `raw` is decoded once per `response` change so we reuse the result just like native XHR

  delete req.raw;
  return res;
} // request object functions


function callback(req, msg) {
  const {
    opts
  } = req;
  const cb = opts[`on${msg.type}`];

  if (cb) {
    const {
      data,
      downloadId
    } = msg;

    if (downloadId) {
      cb(msg);
      if (msg.type === 'load') delete idMap[req.id];
      return;
    }

    const {
      response,
      responseHeaders: headers,
      responseText: text
    } = data;

    if (response && !('raw' in req)) {
      req.raw = response;
    }

    defineProperty(data, 'response', {
      __proto__: null,

      get() {
        const value = 'raw' in req ? parseData(req, msg) : req.response;
        defineProperty(this, 'response', {
          __proto__: null,
          value
        });
        return value;
      }

    });
    if (headers != null) req.headers = headers;
    if (text != null) req.text = getOwnProp(text, 0) === 'same' ? response : text;
    setOwnProp(data, 'context', opts.context);
    setOwnProp(data, 'responseHeaders', req.headers);
    setOwnProp(data, 'responseText', req.text);
    cb(data);
  }

  if (msg.type === 'loadend') delete idMap[req.id];
}

async function start(req, context, fileName) {
  const {
    id,
    opts,
    scriptId
  } = req; // withCredentials is for GM4 compatibility and used only if `anonymous` is not set,
  // it's true by default per the standard/historical behavior of gmxhr

  const {
    data,
    withCredentials = true,
    anonymous = !withCredentials
  } = opts;
  idMap[id] = req;
  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('HttpRequest', safeCall(pickIntoThis, {
    __proto__: null,
    id,
    scriptId,
    anonymous,
    fileName,
    data: data == null && [] // `binary` is for TM/GM-compatibility + non-objects = must use a string `data`
    || (opts.binary || !isObject(data)) && [`${data}`] // FF56+ can send any cloneable data directly, FF52-55 can't due to https://bugzil.la/1371246
    || IS_FIREFOX && _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].ua.browserVersion >= 56 && [data] // TODO: support huge data by splitting it to multiple messages
    || (await encodeBody(data)),
    eventsToNotify: safeCall(filter, ['abort', 'error', 'load', 'loadend', 'loadstart', 'progress', 'readystatechange', 'timeout'], key => isFunction(getOwnProp(opts, `on${key}`))),
    xhrType: getResponseType(opts.responseType)
  }, opts, ['headers', 'method', 'overrideMimeType', 'password', 'timeout', 'url', 'user']), context);
}

function getResponseType({
  responseType = ''
}) {
  switch (responseType) {
    case 'arraybuffer':
    case 'blob':
      return responseType;

    case 'document':
    case 'json':
    case 'text':
    case '':
      break;

    default:
      log('warn', null, `Unknown responseType "${responseType}",` + ' see https://violentmonkey.github.io/api/gm/#gm_xmlhttprequest for more detail.');
  }

  return '';
}
/**
 * Polyfill for Chrome's inability to send complex types over extension messaging.
 * We're encoding the body here, not in content, because we want to support FormData
 * and ReadableStream, which Chrome can't transfer to isolated world via CustomEvent.
 */


async function encodeBody(body) {
  const wasBlob = getObjectTypeTag(body) === 'Blob';
  const blob = wasBlob ? body : await safeCall(safeResponseBlob, new ResponseSafe(body));
  const reader = new FileReaderSafe();
  return new PromiseSafe(resolve => {
    safeCall(on, reader, 'load', () => resolve([safeCall(getReaderResult, reader), safeCall(getBlobType, blob), wasBlob]));
    safeCall(readAsDataURL, reader, blob);
  });
}

/***/ }),

/***/ "./src/injected/web/store.js":
/*!***********************************!*\
  !*** ./src/injected/web/store.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  __proto__: null,
  commands: createNullObj(),
  values: createNullObj()
});

/***/ }),

/***/ "./src/injected/web/tabs.js":
/*!**********************************!*\
  !*** ./src/injected/web/tabs.js ***!
  \**********************************/
/*! exports provided: onTabCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onTabCreate", function() { return onTabCreate; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");

let lastId = 0;
const tabs = createNullObj();
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  TabClosed(key) {
    const item = tabs[key];

    if (item) {
      item.closed = true;
      delete tabs[key];
      const fn = item.onclose;
      if (fn) fn();
    }
  }

});
function onTabCreate(data, context) {
  lastId += 1;
  const key = lastId;
  const item = {
    onclose: null,
    closed: false,

    close() {
      _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('TabClose', key, context);
    }

  };
  tabs[key] = item;
  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('TabOpen', {
    key,
    data
  }, context);
  return item;
}

/***/ }),

/***/ "./src/injected/web/util-web.js":
/*!**************************************!*\
  !*** ./src/injected/web/util-web.js ***!
  \**************************************/
/*! exports provided: safeConcat, jsonDump, FastLookup, makeComponentUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeConcat", function() { return safeConcat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonDump", function() { return jsonDump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastLookup", function() { return FastLookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeComponentUtils", function() { return makeComponentUtils; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/injected/util/index.js");
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");


const isConcatSpreadableSym = SymbolSafe.isConcatSpreadable;
const safeConcat = (dest, ...arrays) => {
  if (!dest[isConcatSpreadableSym]) {
    setOwnProp(dest, isConcatSpreadableSym, true);
    safeCall(forEach, arrays, arr => setOwnProp(arr, isConcatSpreadableSym, true));
  }

  return safeCall(apply, concat, dest, arrays);
}; // Reference: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON#Polyfill

const escMap = {
  __proto__: null,
  '"': '\\"',
  '\\': '\\\\',
  '\b': '\\b',
  '\f': '\\f',
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t'
}; // TODO: handle \u2028\u2029 when Chrome's JSON.stringify starts to escape them

const escRE = /[\\"\u0000-\u001F]/g; // eslint-disable-line no-control-regex

const hex = '0123456789ABCDEF';

const escCharCode = num => `\\u00${hex[num >> 4] // eslint-disable-line no-bitwise
}${hex[num % 16]}`;

const escFunc = m => escMap[m] || escCharCode(safeCall(charCodeAt, m, 0));
/**
 * When running in the page context we must beware of sites that override Array#toJSON
 * leading to an invalid result, which is why our jsonDump() ignores toJSON.
 * Thus, we use the native JSON.stringify() only in the content script context and only until
 * a userscript is injected into this context (due to `@inject-into` and/or a CSP problem).
 */


const jsonDump = (value, stack) => {
  let res;

  switch (value === null ? res = 'null' : typeof value) {
    case 'bigint':
    case 'number':
      res = safeIsFinite(value) ? `${value}` : 'null';
      break;

    case 'boolean':
      res = `${value}`;
      break;

    case 'string':
      res = `"${safeCall(regexpReplace, escRE, value, escFunc)}"`;
      break;

    case 'object':
      if (!stack) {
        stack = [value]; // Creating the array here, only when type is object.
      } else if (safeCall(indexOf, stack, value) >= 0) {
        throw new ErrorSafe('Converting circular structure to JSON');
      } else {
        setOwnProp(stack, stack.length, value);
      }

      if (ArrayIsArray(value)) {
        res = '['; // Must enumerate all values to include holes in sparse arrays

        for (let i = 0, len = value.length; i < len; i += 1) {
          var _jsonDump;

          res += `${i ? ',' : ''}${(_jsonDump = jsonDump(value[i], stack)) != null ? _jsonDump : 'null'}`;
        }

        res += ']';
      } else {
        res = '{';
        safeCall(forEach, objectKeys(value), key => {
          const v = jsonDump(value[key], stack); // JSON.stringify skips keys with `undefined` or incompatible values

          if (v !== undefined) {
            res += `${res.length > 1 ? ',' : ''}${jsonDump(key)}:${v}`;
          }
        });
        res += '}';
      }

      stack.length -= 1;
      break;

    default:
  }

  return res;
};
/**
 * 2x faster than `Set`, 5x faster than flat object
 * @param {Object} [hubs]
 */

const FastLookup = (hubs = createNullObj()) => {
  /** @namespace FastLookup */
  return {
    add(val) {
      getHub(val, true)[val] = true;
    },

    clone() {
      const clone = createNullObj();

      for (const group in hubs) {
        /* proto is null */
        // eslint-disable-line guard-for-in
        clone[group] = assign(createNullObj(), hubs[group]);
      }

      return FastLookup(clone);
    },

    delete(val) {
      var _getHub;

      (_getHub = getHub(val)) == null ? true : delete _getHub[val];
    },

    has: val => {
      var _getHub2;

      return (_getHub2 = getHub(val)) == null ? void 0 : _getHub2[val];
    },
    toArray: () => {
      const values = objectValues(hubs);
      safeCall(forEach, values, (val, i) => {
        values[i] = objectKeys(val);
      });
      return safeConcat([], values);
    }
  };

  function getHub(val, autoCreate) {
    const group = val.length ? val[0] : ''; // length is unforgeable, index getters aren't

    const hub = hubs[group] || (autoCreate ? hubs[group] = createNullObj() : null);
    return hub;
  }
};
/**
 * Adding the polyfills in Chrome (always as it doesn't provide them)
 * and in Firefox page mode (while preserving the native ones in content mode)
 * for compatibility with many [old] scripts that use these utils blindly
 */

const makeComponentUtils = () => {
  const CLONE_INTO = 'cloneInto';
  const CREATE_OBJECT_IN = 'createObjectIn';
  const EXPORT_FUNCTION = 'exportFunction';
  const src = IS_FIREFOX && _bridge__WEBPACK_IMPORTED_MODULE_1__["default"].mode === _util__WEBPACK_IMPORTED_MODULE_0__["INJECT_CONTENT"] && global;

  const defineIn = !src && ((target, as, val) => {
    if (as && (as = getOwnProp(as, 'defineAs'))) {
      setOwnProp(target, as, val);
    }

    return val;
  });

  return {
    [CLONE_INTO]: src && src[CLONE_INTO] || (obj => obj),
    [CREATE_OBJECT_IN]: src && src[CREATE_OBJECT_IN] || ((target, as) => defineIn(target, as, {})),
    [EXPORT_FUNCTION]: src && src[EXPORT_FUNCTION] || ((func, target, as) => defineIn(target, as, func))
  };
};

/***/ })

/******/ });
          const { exports } = module;
          return exports.__esModule ? exports.default : exports;
        };0;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL3dlYi9icmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL3dlYi9nbS1hcGktd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5qZWN0ZWQvd2ViL2dtLWFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5qZWN0ZWQvd2ViL2dtLWdsb2JhbC13cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC93ZWIvZ20tdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC93ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL3dlYi9ub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC93ZWIvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL3dlYi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5qZWN0ZWQvd2ViL3RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL3dlYi91dGlsLXdlYi5qcyJdLCJuYW1lcyI6WyJLRVlfR0xPQkFMX0lEIiwiQlVJTERfSU5fU0NSSVBUX1NSQyIsIklOSkVDVF9BVVRPIiwiSU5KRUNUX1BBR0UiLCJJTkpFQ1RfQ09OVEVOVCIsIklTX0RFViIsIklOSkVDVF9NQVBQSU5HIiwiX19wcm90b19fIiwiQ01EX1NDUklQVF9BREQiLCJDTURfU0NSSVBUX1VQREFURSIsIk1FVEFCTE9DS19SRSIsIklOSkVDVEFCTEVfVEFCX1VSTF9SRSIsImJyb3dzZXIiLCJnbG9iYWwiLCJUSU1FT1VUX01BWCIsIlRJTUVPVVRfSE9VUiIsIlRJTUVPVVRfMjRIT1VSUyIsIlRJTUVPVVRfV0VFSyIsImRlZmF1bHRJbWFnZSIsImluaXRIb29rcyIsImhvb2tzIiwiZmlyZSIsImRhdGEiLCJzbGljZSIsImZvckVhY2giLCJjYiIsImhvb2siLCJjYWxsYmFjayIsInB1c2giLCJpIiwiaW5kZXhPZiIsInNwbGljZSIsInNlbmRDbWQiLCJjbWQiLCJvcHRpb25zIiwic2VuZE1lc3NhZ2UiLCJDT01NQU5EU19XSVRIX1NSQyIsImdldEJnUGFnZSIsImV4dGVuc2lvbiIsImdldEJhY2tncm91bmRQYWdlIiwic2VuZENtZERpcmVjdGx5IiwiYmciLCJpbmNsdWRlcyIsIndpbmRvdyIsImRlZXBDb3B5IiwiaGFuZGxlQ29tbWFuZE1lc3NhZ2UiLCJ0aGVuIiwic2VuZFRhYkNtZCIsInRhYklkIiwidGFicyIsImNhdGNoIiwibm9vcCIsInBheWxvYWQiLCJyZXRyeSIsInNlbmRNZXNzYWdlUmV0cnkiLCJwcm9taXNlIiwicnVudGltZSIsInJldHJpZXMiLCJwYXVzZUR1cmF0aW9uIiwiZSIsIm1ha2VQYXVzZSIsIkVycm9yIiwibGVmdHBhZCIsImlucHV0IiwibGVuZ3RoIiwicGFkIiwibnVtIiwidG9TdHJpbmciLCJnZXRMb2NhbGVTdHJpbmciLCJtZXRhIiwia2V5IiwibG9jYWxlTWV0YSIsIm5hdmlnYXRvciIsImxhbmd1YWdlcyIsIm1hcCIsImxhbmciLCJ0b0xvd2VyQ2FzZSIsImZpbmQiLCJCb29sZWFuIiwiZ2V0U2NyaXB0TmFtZSIsInNjcmlwdCIsImN1c3RvbSIsIm5hbWUiLCJwcm9wcyIsImlkIiwiaTE4biIsImdldEZ1bGxVcmwiLCJ1cmwiLCJiYXNlIiwib2JqIiwiVVJMIiwicHJvdG9jb2wiLCJocmVmIiwiZW5jb2RlRmlsZW5hbWUiLCJyZXBsYWNlIiwibSIsImNvZGUiLCJjaGFyQ29kZUF0IiwiZGVjb2RlRmlsZW5hbWUiLCJmaWxlbmFtZSIsIl9tIiwiZyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwiZ2V0QWN0aXZlVGFiIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93Iiwid2luZG93SWQiLCJ3aW5kb3dzIiwiZ2V0Q3VycmVudCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidHJ1ZUpvaW4iLCJzZXBhcmF0b3IiLCJmaWx0ZXIiLCJqb2luIiwibm9ybWFsaXplS2V5cyIsIkFycmF5IiwiaXNBcnJheSIsInNwbGl0Iiwib2JqZWN0R2V0IiwicmF3S2V5IiwiZGVmIiwia2V5cyIsInJlcyIsImV2ZXJ5Iiwib2JqZWN0U2V0IiwidmFsIiwicm9vdCIsInN1YiIsImxhc3RLZXkiLCJwb3AiLCJvYmplY3RQaWNrIiwidHJhbnNmb3JtIiwicmVkdWNlIiwidmFsdWUiLCJtYXBFbnRyeSIsImZ1bmMiLCJPYmplY3QiLCJlbnRyaWVzIiwiZW50cnkiLCJhbGxFbnRyaWVzIiwiZm9yRWFjaEVudHJ5IiwiZm9yRWFjaEtleSIsImZvckVhY2hWYWx1ZSIsInZhbHVlcyIsInNyYyIsImRlZXBFcXVhbCIsImEiLCJiIiwiaXRlbSIsImtleXNBIiwia2V5c0IiLCJhcmdzIiwiZ2V0TWVzc2FnZSIsInBhcmFtIiwibWVtb2l6ZSIsInJlc29sdmVyIiwiY2FjaGVNYXAiLCJtZW1vaXplZCIsImNhY2hlIiwiYXBwbHkiLCJkZWJvdW5jZSIsInRpbWUiLCJzdGFydFRpbWUiLCJ0aW1lciIsIk1hdGgiLCJtYXgiLCJjaGVja1RpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNoZWNrVGltZXIiLCJkZWx0YSIsImRlYm91bmNlZEZ1bmN0aW9uIiwidGhyb3R0bGUiLCJsYXN0VGltZSIsInRocm90dGxlZEZ1bmN0aW9uIiwiZ2V0VW5pcUlkIiwicHJlZml4IiwiZmxvb3IiLCJyYW5kb20iLCJidWZmZXIyc3RyaW5nIiwiYnVmIiwib2Zmc2V0Iiwic2xpY2VTaXplIiwic2xpY2VzIiwiYXJyYXlMZW4iLCJlbmQiLCJtaW4iLCJieXRlTGVuZ3RoIiwibmVlZHNTbGljaW5nIiwiVWludDhBcnJheSIsImJsb2IyYmFzZTY0IiwiYmxvYiIsInNpemUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsInN0cmluZzJ1aW50OGFycmF5Iiwic3RyIiwibGVuIiwiYXJyYXkiLCJWRVJTSU9OX1JFIiwiRElHSVRTX1JFIiwiY29tcGFyZVZlcnNpb24iLCJ2ZXIxIiwidmVyMiIsIm1haW4xIiwicHJlMSIsImV4ZWMiLCJtYWluMiIsInByZTIiLCJjb21wYXJlVmVyc2lvbkNodW5rIiwiaXNTZW12ZXJNb2RlIiwicGFydHMxIiwicGFydHMyIiwibGVuMSIsImxlbjIiLCJ0ZXN0IiwidW5pdHMiLCJmb3JtYXRUaW1lIiwiZHVyYXRpb24iLCJ1bml0SW5mbyIsInN0ZXAiLCJmb3JtYXRCeXRlTGVuZ3RoIiwidG9GaXhlZCIsImlzRW1wdHkiLCJoYXNPd25Qcm9wZXJ0eSIsImVuc3VyZUFycmF5IiwiYmluYXJ5VHlwZXMiLCJyZXF1ZXN0TG9jYWxGaWxlIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJyZXNwb25zZVR5cGUiLCJvcGVuIiwic3RhdHVzIiwicmVzcG9uc2UiLCJyZXNwb25zZVRleHQiLCJKU09OIiwicGFyc2UiLCJvbmVycm9yIiwic2VuZCIsIkZPUkNFRF9BQ0NFUFQiLCJpc1JlbW90ZSIsInJlcXVlc3QiLCJzdGFydHNXaXRoIiwiYm9keSIsImhlYWRlcnMiLCJpc0JvZHlPYmoiLCJob3N0bmFtZSIsImFjY2VwdCIsImluaXQiLCJhc3NpZ24iLCJ1bmRlZmluZWQiLCJzdHJpbmdpZnkiLCJyZXNwIiwiZmV0Y2giLCJsb2FkTWV0aG9kIiwiYXJyYXlidWZmZXIiLCJqc29uIiwiU0lNUExFX1ZBTFVFX1RZUEUiLCJzdHJpbmciLCJudW1iZXIiLCJib29sZWFuIiwiZHVtcFNjcmlwdFZhbHVlIiwianNvbkR1bXAiLCJzaW1wbGUiLCJmaXJlQnJpZGdlRXZlbnQiLCJldmVudElkIiwibXNnIiwiY2xvbmVJbnRvIiwiZGV0YWlsIiwiZG9jdW1lbnQiLCJldnRNYWluIiwiQ3VzdG9tRXZlbnRTYWZlIiwiYmluZEV2ZW50cyIsInNyY0lkIiwiZGVzdElkIiwiYnJpZGdlIiwiaW5jb21pbmdOb2RlRXZlbnQiLCJvbiIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInByb2Nlc3MiLCJnZXREZXRhaWwiLCJub2RlIiwib25IYW5kbGUiLCJnZXRSZWxhdGVkVGFyZ2V0IiwicG9zdCIsImRhdGFLZXkiLCJldnROb2RlIiwiTW91c2VFdmVudFNhZmUiLCJyZWxhdGVkVGFyZ2V0IiwiaGFuZGxlcnMiLCJjcmVhdGVOdWxsT2JqIiwiY2FsbGJhY2tzIiwiYWRkSGFuZGxlcnMiLCJmbiIsImNvbnRleHQiLCJQcm9taXNlU2FmZSIsInBvc3RXaXRoQ2FsbGJhY2siLCJzeW5jQ2FsbCIsImN1c3RvbUNhbGxiYWNrSWQiLCJnZXRVbmlxSWRTYWZlIiwic2V0T3duUHJvcCIsIkNBTExCQUNLX0lEIiwiR000X0FMSUFTIiwiZ2V0UmVzb3VyY2VVcmwiLCJ4bWxIdHRwUmVxdWVzdCIsIkdNNF9BU1lOQyIsImdldFZhbHVlIiwiZGVsZXRlVmFsdWUiLCJzZXRWYWx1ZSIsImxpc3RWYWx1ZXMiLCJnbUFwaSIsImNvbXBvbmVudFV0aWxzIiwibWFrZUdtQXBpV3JhcHBlciIsImdyYW50IiwicmVzb3VyY2VzIiwicmVzQ2FjaGUiLCJnbUluZm8iLCJtYWtlR21JbmZvIiwiZ20iLCJHTSIsImluZm8iLCJHTV9pbmZvIiwidW5zYWZlV2luZG93IiwibWFrZUNvbXBvbmVudFV0aWxzIiwiV0lORE9XX0NMT1NFIiwiY2xvc2UiLCJ2bU93bkZ1bmMiLCJXSU5ET1dfRk9DVVMiLCJmb2N1cyIsIm1ha2VHbUFwaSIsImdtNG5hbWUiLCJtYWtlR21NZXRob2RDYWxsZXIiLCJtYWtlR2xvYmFsV3JhcHBlciIsIm1ldGFDb3B5Iiwib2JqZWN0S2V5cyIsInNhZmVDb25jYXQiLCJ1bndyYXAiLCJ1dWlkIiwic2NyaXB0TWV0YVN0ciIsIm1ldGFTdHIiLCJzY3JpcHRXaWxsVXBkYXRlIiwiY29uZmlnIiwic2hvdWxkVXBkYXRlIiwic2NyaXB0SGFuZGxlciIsInZlcnNpb24iLCJpbmplY3RJbnRvIiwibW9kZSIsInBsYXRmb3JtIiwidWEiLCJnbU1ldGhvZCIsImlzQXN5bmMiLCJHTV9sb2ciLCJiaW5kIiwiR01fYWRkR2xvYmFsTGlzdGVuZXIiLCJhZGRMaXN0ZW5lciIsIkdNX3JlbW92ZUdsb2JhbExpc3RlbmVyIiwibGlzdGVuZXJJZCIsInJlbW92ZUxpc3RlbmVyIiwiR01fc2VuZEdsb2JhbEV2ZW50IiwiZXZlbnQiLCJjaGFuZ2VIb29rcyIsIm9iamVjdFZhbHVlcyIsImxvZyIsIkdNX3JlZ0ZuIiwiR01faW52b2tlRm4iLCJhcmciLCJHTV9kZWxldGVWYWx1ZSIsImxvYWRWYWx1ZXMiLCJvbGRSYXciLCJkdW1wVmFsdWUiLCJHTV9nZXRWYWx1ZSIsInJhdyIsImRlY29kZVZhbHVlIiwiR01fbGlzdFZhbHVlcyIsIkdNX3NldFZhbHVlIiwiR01fYWRkVmFsdWVDaGFuZ2VMaXN0ZW5lciIsIkdNX3JlbW92ZVZhbHVlQ2hhbmdlTGlzdGVuZXIiLCJHTV9nZXRSZXNvdXJjZVRleHQiLCJnZXRSZXNvdXJjZSIsIkdNX2dldFJlc291cmNlVVJMIiwiR01fcmVnaXN0ZXJNZW51Q29tbWFuZCIsImNhcCIsInN0b3JlIiwiY29tbWFuZHMiLCJHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQiLCJHTV9kb3dubG9hZCIsImFyZzEiLCJvcHRzIiwiaXNTdHJpbmciLCJwaWNrSW50b1RoaXMiLCJFcnJvclNhZmUiLCJtZXRob2QiLCJvdmVycmlkZU1pbWVUeXBlIiwiaXNGdW5jdGlvbiIsIm9uUmVxdWVzdENyZWF0ZSIsIkdNX3htbGh0dHBSZXF1ZXN0IiwiR01fYWRkRWxlbWVudCIsInBhcmVudCIsInRhZyIsImF0dHJpYnV0ZXMiLCJ3ZWJBZGRFbGVtZW50IiwiR01fYWRkU3R5bGUiLCJjc3MiLCJ0ZXh0Q29udGVudCIsIkdNX29wZW5JblRhYiIsIm9uVGFiQ3JlYXRlIiwiaXNPYmplY3QiLCJHTV9ub3RpZmljYXRpb24iLCJ0ZXh0IiwidGl0bGUiLCJpbWFnZSIsIm9uY2xpY2siLCJvbk5vdGlmaWNhdGlvbkNyZWF0ZSIsInJlbW92ZSIsIkdNX3NldENsaXBib2FyZCIsInR5cGUiLCJsb2dnaW5nIiwiZW5zdXJlTmVzdGVkUHJvcCIsImtleUhvb2tzIiwiYXR0cnMiLCJlbCIsImVycm9ySW5mbyIsIl8iLCJlcnIiLCJzdGFjayIsImlzQmxvYiIsImNyZWF0ZU9iamVjdFVSTCIsImlzRnJhbWVJbmRleCIsInNjb3BlU3ltIiwiU3ltYm9sU2FmZSIsInVuc2NvcGFibGVzIiwiZ2xvYmFsS2V5c1NldCIsIkZhc3RMb29rdXAiLCJnbG9iYWxLZXlzIiwibWFrZUdsb2JhbEtleXMiLCJrV3JhcHBlZEpTT2JqZWN0IiwibmFtZXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2siLCJJU19GSVJFRk9YIiwiYWRkIiwiaGFzIiwidG9BcnJheSIsImluaGVyaXRlZEtleXMiLCJyZWFkb25seUtleXMiLCJhcHBsaWNhdGlvbkNhY2hlIiwiY2FjaGVzIiwiY2xvc2VkIiwiY3Jvc3NPcmlnaW5Jc29sYXRlZCIsImNyeXB0byIsImN1c3RvbUVsZW1lbnRzIiwiZnJhbWVFbGVtZW50IiwiaGlzdG9yeSIsImluZGV4ZWREQiIsImlzU2VjdXJlQ29udGV4dCIsImxvY2FsU3RvcmFnZSIsIm1veklubmVyU2NyZWVuWCIsIm1veklubmVyU2NyZWVuWSIsInNlc3Npb25TdG9yYWdlIiwic3BlZWNoU3ludGhlc2lzIiwic3R5bGVNZWRpYSIsInRydXN0ZWRUeXBlcyIsInVuZm9yZ2VhYmxlcyIsIkluZmluaXR5IiwiTmFOIiwibG9jYXRpb24iLCJ0b3AiLCJNQVlCRSIsImJvdW5kTWV0aG9kcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGVydCIsImF0b2JTYWZlIiwiYmx1ciIsImJ0b2EiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbmNlbElkbGVDYWxsYmFjayIsImNhcHR1cmVFdmVudHMiLCJjbGVhckludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwiY29uZmlybSIsImNyZWF0ZUltYWdlQml0bWFwIiwiZGlzcGF0Y2hFdmVudCIsImR1bXAiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUiLCJnZXRTZWxlY3Rpb24iLCJtYXRjaE1lZGlhIiwibW92ZUJ5IiwibW92ZVRvIiwib3BlbkRhdGFiYXNlIiwicG9zdE1lc3NhZ2UiLCJwcmludCIsInByb21wdCIsInF1ZXVlTWljcm90YXNrIiwicmVsZWFzZUV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwicmVzaXplQnkiLCJyZXNpemVUbyIsInNjcm9sbCIsInNjcm9sbEJ5Iiwic2Nyb2xsQnlMaW5lcyIsInNjcm9sbEJ5UGFnZXMiLCJzY3JvbGxUbyIsInNldEludGVydmFsIiwic2V0UmVzaXphYmxlIiwic2l6ZVRvQ29udGVudCIsInN0b3AiLCJ1cGRhdGVDb21tYW5kcyIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0iLCJ3ZWJraXRSZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMIiwidGhpc09iaiIsImRlc2NyaWJlUHJvcGVydHkiLCJnZXQiLCJzZXQiLCJFdmVudFRhcmdldCIsIlBST1RPIiwibG9jYWwiLCJldmVudHMiLCJyZWFkb25seXMiLCJnbG9iYWxzIiwic2FmZURlZmluZVByb3BlcnR5IiwidG9TdHJpbmdUYWdTeW0iLCJ3cmFwcGVyIiwiUHJveHlTYWZlIiwiZGVmaW5lUHJvcGVydHkiLCJkZXNjIiwiaXNTdHIiLCJzZXRFdmVudEhhbmRsZXIiLCJkZWxldGVQcm9wZXJ0eSIsImNsb25lIiwiZGVsZXRlIiwicmVzb2x2ZVByb3AiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJvd25EZXNjIiwiZ2V0T3duUHJvcCIsIm93bktleXMiLCJtYWtlT3duS2V5cyIsInByZXZlbnRFeHRlbnNpb25zIiwicmVhZG9ubHkiLCJJU19UT1AiLCJub3RJbmNsdWRlZEluIiwic3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZyYW1lSW5kZXhlcyIsInMiLCJnZXRPYmplY3RUeXBlVGFnIiwiY2FuQ29weSIsIm9mZiIsImRhdGFEZWNvZGVycyIsIm8iLCJqc29uUGFyc2UiLCJuIiwiVXBkYXRlZFZhbHVlcyIsInVwZGF0ZXMiLCJwYXJ0aWFsIiwib2xkRGF0YSIsInVwZGF0ZSIsImNoYW5nZWRSZW1vdGVseSIsImFwcGx5UGFydGlhbFVwZGF0ZSIsIm5vdGlmeUNoYW5nZSIsImhhbmRsZSIsInJlbW90ZSIsIm9sZFZhbCIsIm5ld1ZhbCIsInNlbmRTZXRUaW1lb3V0IiwicmVzb2x2ZXJzIiwid2FpdGVycyIsImluaXRpYWxpemUiLCJ3ZWJJZCIsImNvbnRlbnRJZCIsImludm9rZUhvc3QiLCJpbnZva2VHdWVzdCIsIm9uY2UiLCJjYXB0dXJlIiwicmVhbG0iLCJjb25zb2xlIiwiY2hyb21lIiwiUnVuQXQiLCJXcml0ZVZhdWx0IiwiVkFVTFQiLCJDb21tYW5kIiwiZXZ0IiwiY29uc3RydWN0b3IiLCJLZXlib2FyZEV2ZW50U2FmZSIsIkNhbGxiYWNrIiwiU2NyaXB0RGF0YSIsIml0ZW1zIiwicnVuQXQiLCJjcmVhdGVTY3JpcHREYXRhIiwiRXhwb3NlIiwiZXh0ZXJuYWwiLCJWaW9sZW50bW9ua2V5IiwiaXNJbnN0YWxsZWQiLCJuYW1lc3BhY2UiLCJvbkNvZGVTZXQiLCJjb25maWd1cmFibGUiLCJzdGFnZSIsInJ1biIsImVycm9yIiwiZ2V0Q3VycmVudFNjcmlwdCIsIndhaXQiLCJsYXN0SWQiLCJub3RpZmljYXRpb25zIiwiTm90aWZpY2F0aW9uQ2xpY2tlZCIsIk5vdGlmaWNhdGlvbkNsb3NlZCIsIm9uZG9uZSIsImlkTWFwIiwiSHR0cFJlcXVlc3RlZCIsInJlcSIsImZpbGVOYW1lIiwic2NyaXB0SWQiLCJzdGFydCIsImFib3J0IiwicGFyc2VEYXRhIiwicGFyc2VGcm9tU3RyaW5nIiwiRE9NUGFyc2VyU2FmZSIsInJlZ2V4cFJlcGxhY2UiLCJjb250ZW50VHlwZSIsImRvd25sb2FkSWQiLCJyZXNwb25zZUhlYWRlcnMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJhbm9ueW1vdXMiLCJiaW5hcnkiLCJicm93c2VyVmVyc2lvbiIsImVuY29kZUJvZHkiLCJldmVudHNUb05vdGlmeSIsInhoclR5cGUiLCJnZXRSZXNwb25zZVR5cGUiLCJ3YXNCbG9iIiwic2FmZVJlc3BvbnNlQmxvYiIsIlJlc3BvbnNlU2FmZSIsIkZpbGVSZWFkZXJTYWZlIiwiZ2V0UmVhZGVyUmVzdWx0IiwiZ2V0QmxvYlR5cGUiLCJUYWJDbG9zZWQiLCJvbmNsb3NlIiwiaXNDb25jYXRTcHJlYWRhYmxlU3ltIiwiaXNDb25jYXRTcHJlYWRhYmxlIiwiZGVzdCIsImFycmF5cyIsImFyciIsImNvbmNhdCIsImVzY01hcCIsImVzY1JFIiwiaGV4IiwiZXNjQ2hhckNvZGUiLCJlc2NGdW5jIiwic2FmZUlzRmluaXRlIiwiQXJyYXlJc0FycmF5IiwidiIsImh1YnMiLCJnZXRIdWIiLCJncm91cCIsImF1dG9DcmVhdGUiLCJodWIiLCJDTE9ORV9JTlRPIiwiQ1JFQVRFX09CSkVDVF9JTiIsIkVYUE9SVF9GVU5DVElPTiIsImRlZmluZUluIiwidGFyZ2V0IiwiYXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUFBO1FBQ0EsMEJBQTBCLG1CQUFtQiw4Q0FBOEMsa0NBQWtDLHFEQUFxRCxvREFBb0Q7O1FBRXRPO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGNBQWMsa0JBQWtCO1FBQ2hDOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxtQ0FBbUMsZ0RBQWdEO1FBQ25GO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsNkNBQTZDLGtDQUFrQztRQUMvRTtRQUNBLDBDQUEwQyw4QkFBOEI7UUFDeEU7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsYUFBYTtRQUNiO1FBQ0Esa0NBQWtDLGlEQUFpRDtRQUNuRjtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDTyxNQUFNQSxhQUFhLEdBQUcsYUFBdEI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyw4RUFBNUI7QUFFQSxNQUFNQyxXQUFXLEdBQUcsTUFBcEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsTUFBcEI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsU0FBdkI7QUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBZjtBQUVBLE1BQU1DLGNBQWMsR0FBRztBQUM1QkMsV0FBUyxFQUFFLElBRGlCO0FBRTVCO0FBQ0EsR0FBQ0wsV0FBRCxHQUFlLENBQUNDLFdBQUQsRUFBY0MsY0FBZCxDQUhhO0FBSTVCO0FBQ0EsR0FBQ0QsV0FBRCxHQUFlLENBQUNBLFdBQUQsQ0FMYTtBQU01QjtBQUNBLEdBQUNDLGNBQUQsR0FBa0IsQ0FBQ0EsY0FBRDtBQVBVLENBQXZCO0FBVUEsTUFBTUksY0FBYyxHQUFHLFdBQXZCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsY0FBMUIsQyxDQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1DLFlBQVksR0FBRyw0RUFBckI7QUFFQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUIsQyxDQUVQO0FBQ0E7O0FBQ08sTUFBTTtBQUFFQztBQUFGLElBQWNDLE1BQXBCLEMsQ0FFUDs7QUFDTyxNQUFNQyxXQUFXLEdBQUcsVUFBcEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsS0FBSyxFQUFMLEdBQVUsSUFBL0I7QUFDQSxNQUFNQyxlQUFlLEdBQUcsS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLElBQXZDO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLElBQUksRUFBSixHQUFTLEVBQVQsR0FBYyxFQUFkLEdBQW1CLElBQXhDLEM7Ozs7Ozs7Ozs7OztBQ3pDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFTyxNQUFNQyxZQUFZLEdBQUcsNEJBQXJCO0FBRUEsU0FBU0MsU0FBVCxHQUFxQjtBQUMxQixRQUFNQyxLQUFLLEdBQUcsRUFBZDs7QUFFQSxXQUFTQyxJQUFULENBQWNDLElBQWQsRUFBb0I7QUFDbEJGLFNBQUssQ0FBQ0csS0FBTixHQUFjQyxPQUFkLENBQXVCQyxFQUFELElBQVE7QUFDNUJBLFFBQUUsQ0FBQ0gsSUFBRCxDQUFGO0FBQ0QsS0FGRDtBQUdEOztBQUVELFdBQVNJLElBQVQsQ0FBY0MsUUFBZCxFQUF3QjtBQUN0QlAsU0FBSyxDQUFDUSxJQUFOLENBQVdELFFBQVg7QUFDQSxXQUFPLE1BQU07QUFDWCxZQUFNRSxDQUFDLEdBQUdULEtBQUssQ0FBQ1UsT0FBTixDQUFjSCxRQUFkLENBQVY7QUFDQSxVQUFJRSxDQUFDLElBQUksQ0FBVCxFQUFZVCxLQUFLLENBQUNXLE1BQU4sQ0FBYUYsQ0FBYixFQUFnQixDQUFoQjtBQUNiLEtBSEQ7QUFJRDs7QUFFRCxTQUFPO0FBQUVILFFBQUY7QUFBUUw7QUFBUixHQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFPTyxTQUFTVyxPQUFULENBQWlCQyxHQUFqQixFQUFzQlgsSUFBdEIsRUFBNEJZLE9BQTVCLEVBQXFDO0FBQzFDLFNBQU9DLFdBQVcsQ0FBQztBQUFFRixPQUFGO0FBQU9YO0FBQVAsR0FBRCxFQUFnQlksT0FBaEIsQ0FBbEI7QUFDRCxDLENBRUQ7QUFDQTs7QUFDQSxNQUFNRSxpQkFBaUIsR0FBRyxDQUN4QixnQkFEd0IsRUFFeEIsY0FGd0IsRUFHeEIsVUFId0IsRUFJeEIsVUFKd0IsRUFLeEIsU0FMd0IsRUFNeEI7QUFDRjs7Ozs7Ozs7QUFQMEIsQ0FBMUI7O0FBZ0JBLE1BQU1DLFNBQVMsR0FBRyxNQUFNekIsOEZBQU8sQ0FBQzBCLFNBQVIsQ0FBa0JDLGlCQUF4QixvQkFBTTNCLDhGQUFPLENBQUMwQixTQUFSLENBQWtCQyxpQkFBbEIsRUFBeEI7QUFFQTs7Ozs7O0FBSU8sU0FBU0MsZUFBVCxDQUF5QlAsR0FBekIsRUFBOEJYLElBQTlCLEVBQW9DWSxPQUFwQyxFQUE2QztBQUNsRCxRQUFNTyxFQUFFLEdBQUcsQ0FBQ0wsaUJBQWlCLENBQUNNLFFBQWxCLENBQTJCVCxHQUEzQixDQUFELElBQW9DSSxTQUFTLEVBQXhEO0FBQ0EsU0FBT0ksRUFBRSxJQUFJQSxFQUFFLEtBQUtFLE1BQWIsSUFBdUJGLEVBQUUsQ0FBQ0csUUFBMUIsR0FDSEgsRUFBRSxDQUFDSSxvQkFBSCxDQUF3QkosRUFBRSxDQUFDRyxRQUFILENBQVk7QUFBRVgsT0FBRjtBQUFPWDtBQUFQLEdBQVosQ0FBeEIsRUFBb0R3QixJQUFwRCxDQUF5REYsZ0RBQXpELENBREcsR0FFSFosT0FBTyxDQUFDQyxHQUFELEVBQU1YLElBQU4sRUFBWVksT0FBWixDQUZYO0FBR0Q7QUFFRDs7Ozs7Ozs7QUFPTyxTQUFTYSxVQUFULENBQW9CQyxLQUFwQixFQUEyQmYsR0FBM0IsRUFBZ0NYLElBQWhDLEVBQXNDWSxPQUF0QyxFQUErQztBQUNwRCxTQUFPdEIsOEZBQU8sQ0FBQ3FDLElBQVIsQ0FBYWQsV0FBYixDQUF5QmEsS0FBekIsRUFBZ0M7QUFBRWYsT0FBRjtBQUFPWDtBQUFQLEdBQWhDLEVBQStDWSxPQUEvQyxFQUF3RGdCLEtBQXhELENBQThEQywwQ0FBOUQsQ0FBUDtBQUNELEMsQ0FFRDs7QUFDTyxTQUFTaEIsV0FBVCxDQUFxQmlCLE9BQXJCLEVBQThCO0FBQUVDO0FBQUYsSUFBWSxFQUExQyxFQUE4QztBQUNuRCxNQUFJQSxLQUFKLEVBQVcsT0FBT0MsZ0JBQWdCLENBQUNGLE9BQUQsQ0FBdkI7QUFDWCxNQUFJRyxPQUFPLEdBQUczQyw4RkFBTyxDQUFDNEMsT0FBUixDQUFnQnJCLFdBQWhCLENBQTRCaUIsT0FBNUIsQ0FBZCxDQUZtRCxDQUduRDs7QUFDQSxNQUFJLEtBQUosRUFBd0QsRUFFdkQ7O0FBQ0QsU0FBT0csT0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7QUFNTyxlQUFlRCxnQkFBZixDQUFnQ0YsT0FBaEMsRUFBeUNLLE9BQU8sR0FBRyxFQUFuRCxFQUF1RDtBQUM1RCxNQUFJQyxhQUFhLEdBQUcsRUFBcEI7O0FBQ0EsU0FBT0QsT0FBTyxHQUFHLENBQWpCLEVBQW9CQSxPQUFPLElBQUksQ0FBL0IsRUFBa0M7QUFDaEMsUUFBSTtBQUNGLFlBQU1uQyxJQUFJLEdBQUcsTUFBTWEsV0FBVyxDQUFDaUIsT0FBRCxDQUE5QjtBQUNBLFVBQUk5QixJQUFKLEVBQVUsT0FBT0EsSUFBUDtBQUNYLEtBSEQsQ0FHRSxPQUFPcUMsQ0FBUCxFQUFVO0FBQ1YsVUFBSSxDQUFFLEdBQUVBLENBQUUsRUFBTCxDQUFPakIsUUFBUCxDQUFnQixpQ0FBaEIsQ0FBTCxFQUF5RDtBQUN2RCxjQUFNaUIsQ0FBTjtBQUNEO0FBQ0Y7O0FBQ0QsVUFBTUMsU0FBUyxDQUFDRixhQUFELENBQWY7QUFDQUEsaUJBQWEsSUFBSSxDQUFqQjtBQUNEOztBQUNELFFBQU0sSUFBSUcsS0FBSixDQUFVLHNEQUFWLENBQU47QUFDRDtBQUVNLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQ0MsR0FBRyxHQUFHLEdBQXRDLEVBQTJDO0FBQ2hELE1BQUlDLEdBQUcsR0FBR0gsS0FBSyxDQUFDSSxRQUFOLEVBQVY7O0FBQ0EsU0FBT0QsR0FBRyxDQUFDRixNQUFKLEdBQWFBLE1BQXBCLEVBQTRCRSxHQUFHLEdBQUksR0FBRUQsR0FBSSxHQUFFQyxHQUFJLEVBQW5COztBQUM1QixTQUFPQSxHQUFQO0FBQ0Q7QUFFRDs7OztBQUdPLFNBQVNFLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCQyxHQUEvQixFQUFvQztBQUN6QyxRQUFNQyxVQUFVLEdBQUdDLFNBQVMsQ0FBQ0MsU0FBVixDQUNuQjtBQURtQixHQUVsQkMsR0FGa0IsQ0FFZEMsSUFBSSxJQUFJTixJQUFJLENBQUUsR0FBRUMsR0FBSSxJQUFHSyxJQUFLLEVBQWhCLENBQUosSUFBMEJOLElBQUksQ0FBRSxHQUFFQyxHQUFJLElBQUdLLElBQUksQ0FBQ0MsV0FBTCxFQUFtQixFQUE5QixDQUZ4QixFQUdsQkMsSUFIa0IsQ0FHYkMsT0FIYSxDQUFuQjtBQUlBLFNBQU9QLFVBQVUsSUFBSUYsSUFBSSxDQUFDQyxHQUFELENBQWxCLElBQTJCLEVBQWxDO0FBQ0Q7QUFFTSxTQUFTUyxhQUFULENBQXVCQyxNQUF2QixFQUErQjtBQUFBOztBQUNwQyxTQUFPQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsSUFBZCxJQUFzQmQsZUFBZSxDQUFDWSxNQUFNLENBQUNYLElBQVIsRUFBYyxNQUFkLENBQXJDLElBQ0QsSUFBRCxvQkFBSVcsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEVBQWpCLCtCQUF1QkMsa0RBQUksQ0FBQyxhQUFELENBQWdCLEVBRGhEO0FBRUQ7QUFFTSxTQUFTQyxVQUFULENBQW9CQyxHQUFwQixFQUF5QkMsSUFBekIsRUFBK0I7QUFDcEMsUUFBTUMsR0FBRyxHQUFHLElBQUlDLEdBQUosQ0FBUUgsR0FBUixFQUFhQyxJQUFiLENBQVosQ0FEb0MsQ0FFcEM7O0FBQ0EsTUFBSSxDQUFDLENBQ0gsT0FERyxFQUVILFFBRkcsRUFHSCxNQUhHLEVBSUgsT0FKRyxFQUtIOUMsUUFMRyxDQUtNK0MsR0FBRyxDQUFDRSxRQUxWLENBQUwsRUFLMEJGLEdBQUcsQ0FBQ0UsUUFBSixHQUFlLE9BQWY7QUFDMUIsU0FBT0YsR0FBRyxDQUFDRyxJQUFYO0FBQ0Q7QUFFTSxTQUFTQyxjQUFULENBQXdCWCxJQUF4QixFQUE4QjtBQUNuQztBQUNBLFNBQU9BLElBQUksQ0FBQ1ksT0FBTCxDQUFhLG1CQUFiLEVBQW1DQyxDQUFELElBQU87QUFDOUMsUUFBSUMsSUFBSSxHQUFHRCxDQUFDLENBQUNFLFVBQUYsQ0FBYSxDQUFiLEVBQWdCOUIsUUFBaEIsQ0FBeUIsRUFBekIsQ0FBWDtBQUNBLFFBQUk2QixJQUFJLENBQUNoQyxNQUFMLEdBQWMsQ0FBbEIsRUFBcUJnQyxJQUFJLEdBQUksSUFBR0EsSUFBSyxFQUFoQjtBQUNyQixXQUFRLElBQUdBLElBQUssRUFBaEI7QUFDRCxHQUpNLENBQVA7QUFLRDtBQUVNLFNBQVNFLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDO0FBQ3ZDLFNBQU9BLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQixpQkFBakIsRUFBb0MsQ0FBQ00sRUFBRCxFQUFLQyxDQUFMLEtBQVdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsUUFBUSxDQUFDSCxDQUFELEVBQUksRUFBSixDQUE1QixDQUEvQyxDQUFQO0FBQ0Q7QUFFTSxlQUFlSSxZQUFmLEdBQThCO0FBQ25DLFNBQU8sQ0FDTCxNQUFNN0YsOEZBQU8sQ0FBQ3FDLElBQVIsQ0FBYXlELEtBQWIsQ0FBbUI7QUFDdkJDLFVBQU0sRUFBRSxJQURlO0FBRXZCQyxpQkFBYSxFQUFFO0FBRlEsR0FBbkIsQ0FERCxFQUtMLENBTEssS0FLQyxFQUNOO0FBQ0EsUUFBTWhHLDhGQUFPLENBQUNxQyxJQUFSLENBQWF5RCxLQUFiLENBQW1CO0FBQ3ZCQyxVQUFNLEVBQUUsSUFEZTtBQUV2QkUsWUFBUSxFQUFFLENBQUMsTUFBTWpHLDhGQUFPLENBQUNrRyxPQUFSLENBQWdCQyxVQUFoQixFQUFQLEVBQXFDM0I7QUFGeEIsR0FBbkIsQ0FGQSxFQU1OLENBTk0sQ0FMUjtBQVlEO0FBRU0sU0FBU3hCLFNBQVQsQ0FBbUJvRCxFQUFuQixFQUF1QjtBQUM1QixTQUFPQSxFQUFFLEdBQUcsQ0FBTCxHQUNIQyxPQUFPLENBQUNDLE9BQVIsRUFERyxHQUVILElBQUlELE9BQUosQ0FBWUMsT0FBTyxJQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUFqQyxDQUZKO0FBR0Q7QUFFTSxTQUFTSSxRQUFULENBQWtCQyxTQUFsQixFQUE2QjtBQUNsQyxTQUFPLEtBQUtDLE1BQUwsQ0FBWXhDLE9BQVosRUFBcUJ5QyxJQUFyQixDQUEwQkYsU0FBMUIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQzVMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0csYUFBVCxDQUF1QmxELEdBQXZCLEVBQTRCO0FBQ2pDLE1BQUlBLEdBQUcsSUFBSSxJQUFYLEVBQWlCLE9BQU8sRUFBUDtBQUNqQixNQUFJbUQsS0FBSyxDQUFDQyxPQUFOLENBQWNwRCxHQUFkLENBQUosRUFBd0IsT0FBT0EsR0FBUDtBQUN4QixTQUFRLEdBQUVBLEdBQUksRUFBUCxDQUFTcUQsS0FBVCxDQUFlLEdBQWYsRUFBb0JMLE1BQXBCLENBQTJCeEMsT0FBM0IsQ0FBUDtBQUNEO0FBRU0sU0FBUzhDLFNBQVQsQ0FBbUJuQyxHQUFuQixFQUF3Qm9DLE1BQXhCLEVBQWdDQyxHQUFoQyxFQUFxQztBQUMxQyxRQUFNQyxJQUFJLEdBQUdQLGFBQWEsQ0FBQ0ssTUFBRCxDQUExQjtBQUNBLE1BQUlHLEdBQUcsR0FBR3ZDLEdBQVY7QUFDQXNDLE1BQUksQ0FBQ0UsS0FBTCxDQUFZM0QsR0FBRCxJQUFTO0FBQ2xCLFFBQUkwRCxHQUFHLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQXRCLElBQW1DMUQsR0FBRyxJQUFJMEQsR0FBOUMsRUFBb0Q7QUFDbERBLFNBQUcsR0FBR0EsR0FBRyxDQUFDMUQsR0FBRCxDQUFUO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7O0FBQ0QwRCxPQUFHLEdBQUdGLEdBQU47QUFDQSxXQUFPLEtBQVA7QUFDRCxHQVBEO0FBUUEsU0FBT0UsR0FBUDtBQUNEO0FBRU0sU0FBU0UsU0FBVCxDQUFtQnpDLEdBQW5CLEVBQXdCb0MsTUFBeEIsRUFBZ0NNLEdBQWhDLEVBQXFDO0FBQzFDLFFBQU1KLElBQUksR0FBR1AsYUFBYSxDQUFDSyxNQUFELENBQTFCO0FBQ0EsTUFBSSxDQUFDRSxJQUFJLENBQUMvRCxNQUFWLEVBQWtCLE9BQU9tRSxHQUFQO0FBQ2xCLFFBQU1DLElBQUksR0FBRzNDLEdBQUcsSUFBSSxFQUFwQjtBQUNBLE1BQUk0QyxHQUFHLEdBQUdELElBQVY7QUFDQSxRQUFNRSxPQUFPLEdBQUdQLElBQUksQ0FBQ1EsR0FBTCxFQUFoQjtBQUNBUixNQUFJLENBQUN2RyxPQUFMLENBQWM4QyxHQUFELElBQVM7QUFDcEIrRCxPQUFHLEdBQUdBLEdBQUcsQ0FBQy9ELEdBQUQsQ0FBSCxLQUFhK0QsR0FBRyxDQUFDL0QsR0FBRCxDQUFILEdBQVcsRUFBeEIsQ0FBTjtBQUNELEdBRkQ7O0FBR0EsTUFBSSxPQUFPNkQsR0FBUCxLQUFlLFdBQW5CLEVBQWdDO0FBQzlCLFdBQU9FLEdBQUcsQ0FBQ0MsT0FBRCxDQUFWO0FBQ0QsR0FGRCxNQUVPO0FBQ0xELE9BQUcsQ0FBQ0MsT0FBRCxDQUFILEdBQWVILEdBQWY7QUFDRDs7QUFDRCxTQUFPQyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQU1PLFNBQVNJLFVBQVQsQ0FBb0IvQyxHQUFwQixFQUF5QnNDLElBQXpCLEVBQStCVSxTQUEvQixFQUEwQztBQUMvQyxTQUFPVixJQUFJLENBQUNXLE1BQUwsQ0FBWSxDQUFDVixHQUFELEVBQU0xRCxHQUFOLEtBQWM7QUFDL0IsUUFBSXFFLEtBQUssR0FBR2xELEdBQUgsb0JBQUdBLEdBQUcsQ0FBR25CLEdBQUgsQ0FBZjtBQUNBLFFBQUltRSxTQUFKLEVBQWVFLEtBQUssR0FBR0YsU0FBUyxDQUFDRSxLQUFELEVBQVFyRSxHQUFSLENBQWpCO0FBQ2YsUUFBSXFFLEtBQUssSUFBSSxJQUFiLEVBQW1CWCxHQUFHLENBQUMxRCxHQUFELENBQUgsR0FBV3FFLEtBQVg7QUFDbkIsV0FBT1gsR0FBUDtBQUNELEdBTE0sRUFLSixFQUxJLENBQVA7QUFNRCxDLENBRUQ7O0FBQ08sU0FBU1ksUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDN0IsU0FBT0MsTUFBTSxDQUFDQyxPQUFQLENBQWUsSUFBZixFQUFxQkwsTUFBckIsQ0FBNEIsQ0FBQ1YsR0FBRCxFQUFNZ0IsS0FBTixFQUFhbkgsQ0FBYixFQUFnQm9ILFVBQWhCLEtBQStCO0FBQ2hFakIsT0FBRyxDQUFDZ0IsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFILEdBQWdCSCxJQUFJLENBQUNHLEtBQUQsRUFBUW5ILENBQVIsRUFBV29ILFVBQVgsQ0FBcEI7QUFDQSxXQUFPakIsR0FBUDtBQUNELEdBSE0sRUFHSixFQUhJLENBQVA7QUFJRCxDLENBRUQ7O0FBQ08sU0FBU2tCLFlBQVQsQ0FBc0JMLElBQXRCLEVBQTRCO0FBQ2pDLE1BQUksSUFBSixFQUFVQyxNQUFNLENBQUNDLE9BQVAsQ0FBZSxJQUFmLEVBQXFCdkgsT0FBckIsQ0FBNkJxSCxJQUE3QjtBQUNYLEMsQ0FFRDs7QUFDTyxTQUFTTSxVQUFULENBQW9CTixJQUFwQixFQUEwQjtBQUMvQixNQUFJLElBQUosRUFBVUMsTUFBTSxDQUFDZixJQUFQLENBQVksSUFBWixFQUFrQnZHLE9BQWxCLENBQTBCcUgsSUFBMUI7QUFDWCxDLENBRUQ7O0FBQ08sU0FBU08sWUFBVCxDQUFzQlAsSUFBdEIsRUFBNEI7QUFDakMsTUFBSSxJQUFKLEVBQVVDLE1BQU0sQ0FBQ08sTUFBUCxDQUFjLElBQWQsRUFBb0I3SCxPQUFwQixDQUE0QnFILElBQTVCO0FBQ1gsQyxDQUVEOztBQUNPLFNBQVNqRyxRQUFULENBQWtCMEcsR0FBbEIsRUFBdUI7QUFDNUIsU0FBT0EsR0FBRyxLQUNSN0IsS0FBSyxDQUFDQyxPQUFOLENBQWM0QixHQUFkLEtBQXNCQSxHQUFHLENBQUM1RSxHQUFKLENBQVE5QixRQUFSLENBQXRCLENBQ0E7QUFDQTtBQUZBLEtBR0csT0FBTzBHLEdBQVAsS0FBZSxRQUFmLElBQTJCLFNBQUtWLFFBQUwsRUFBQVUsR0FBRyxFQUFXLENBQUMsR0FBR25CLEdBQUgsQ0FBRCxLQUFhdkYsUUFBUSxDQUFDdUYsR0FBRCxDQUFoQyxDQUp6QixDQUFILElBS0ZtQixHQUxMO0FBTUQsQyxDQUVEOztBQUNPLFNBQVNDLFNBQVQsQ0FBbUJDLENBQW5CLEVBQXNCQyxDQUF0QixFQUF5QjtBQUM5QixNQUFJekIsR0FBSjs7QUFDQSxNQUFJLENBQUN3QixDQUFELElBQU0sQ0FBQ0MsQ0FBUCxJQUFZLE9BQU9ELENBQVAsS0FBYSxPQUFPQyxDQUFoQyxJQUFxQyxPQUFPRCxDQUFQLEtBQWEsUUFBdEQsRUFBZ0U7QUFDOUR4QixPQUFHLEdBQUd3QixDQUFDLEtBQUtDLENBQVo7QUFDRCxHQUZELE1BRU8sSUFBSWhDLEtBQUssQ0FBQ0MsT0FBTixDQUFjOEIsQ0FBZCxDQUFKLEVBQXNCO0FBQzNCeEIsT0FBRyxHQUFHd0IsQ0FBQyxDQUFDeEYsTUFBRixLQUFheUYsQ0FBQyxDQUFDekYsTUFBZixJQUNEd0YsQ0FBQyxDQUFDdkIsS0FBRixDQUFRLENBQUN5QixJQUFELEVBQU83SCxDQUFQLEtBQWEwSCxTQUFTLENBQUNHLElBQUQsRUFBT0QsQ0FBQyxDQUFDNUgsQ0FBRCxDQUFSLENBQTlCLENBREw7QUFFRCxHQUhNLE1BR0E7QUFDTCxVQUFNOEgsS0FBSyxHQUFHYixNQUFNLENBQUNmLElBQVAsQ0FBWXlCLENBQVosQ0FBZDtBQUNBLFVBQU1JLEtBQUssR0FBR2QsTUFBTSxDQUFDZixJQUFQLENBQVkwQixDQUFaLENBQWQ7QUFDQXpCLE9BQUcsR0FBRzJCLEtBQUssQ0FBQzNGLE1BQU4sS0FBaUI0RixLQUFLLENBQUM1RixNQUF2QixJQUNEMkYsS0FBSyxDQUFDMUIsS0FBTixDQUFZM0QsR0FBRyxJQUFJc0YsS0FBSyxDQUFDbEgsUUFBTixDQUFlNEIsR0FBZixLQUF1QmlGLFNBQVMsQ0FBQ0MsQ0FBQyxDQUFDbEYsR0FBRCxDQUFGLEVBQVNtRixDQUFDLENBQUNuRixHQUFELENBQVYsQ0FBbkQsQ0FETDtBQUVEOztBQUNELFNBQU8wRCxHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDcEdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFTyxTQUFTM0MsSUFBVCxDQUFjSCxJQUFkLEVBQW9CMkUsSUFBcEIsRUFBMEI7QUFDL0IsU0FBT2pKLDhGQUFPLENBQUN5RSxJQUFSLENBQWF5RSxVQUFiLENBQXdCNUUsSUFBeEIsRUFBOEIyRSxJQUE5QixLQUF1QzNFLElBQTlDO0FBQ0Q7QUFFTSxTQUFTZixRQUFULENBQWtCNEYsS0FBbEIsRUFBeUI7QUFDOUIsTUFBSUEsS0FBSyxJQUFJLElBQWIsRUFBbUIsT0FBTyxFQUFQO0FBQ25CLFNBQVEsR0FBRUEsS0FBTSxFQUFoQjtBQUNEO0FBRU0sU0FBU0MsT0FBVCxDQUFpQm5CLElBQWpCLEVBQXVCb0IsUUFBUSxHQUFHOUYsUUFBbEMsRUFBNEM7QUFDakQsUUFBTStGLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxXQUFTQyxRQUFULENBQWtCLEdBQUdOLElBQXJCLEVBQTJCO0FBQ3pCO0FBQ0E7QUFDQSxVQUFNdkYsR0FBRyxHQUFHMkYsUUFBUSxDQUFDLEdBQUdKLElBQUosQ0FBcEI7QUFDQSxRQUFJTyxLQUFLLEdBQUdGLFFBQVEsQ0FBQzVGLEdBQUQsQ0FBcEI7O0FBQ0EsUUFBSSxDQUFDOEYsS0FBTCxFQUFZO0FBQ1ZBLFdBQUssR0FBRztBQUNOekIsYUFBSyxFQUFFRSxJQUFJLENBQUN3QixLQUFMLENBQVcsSUFBWCxFQUFpQlIsSUFBakI7QUFERCxPQUFSO0FBR0FLLGNBQVEsQ0FBQzVGLEdBQUQsQ0FBUixHQUFnQjhGLEtBQWhCO0FBQ0Q7O0FBQ0QsV0FBT0EsS0FBSyxDQUFDekIsS0FBYjtBQUNEOztBQUNELFNBQU93QixRQUFQO0FBQ0Q7QUFFTSxTQUFTRyxRQUFULENBQWtCekIsSUFBbEIsRUFBd0IwQixJQUF4QixFQUE4QjtBQUNuQyxNQUFJQyxTQUFKO0FBQ0EsTUFBSUMsS0FBSjtBQUNBLE1BQUk5SSxRQUFKO0FBQ0E0SSxNQUFJLEdBQUdHLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDSixJQUFELElBQVMsQ0FBckIsQ0FBUDs7QUFDQSxXQUFTSyxTQUFULEdBQXFCO0FBQ25CSCxTQUFLLEdBQUcsSUFBUjtBQUNBLFFBQUlJLFdBQVcsQ0FBQ0MsR0FBWixNQUFxQk4sU0FBekIsRUFBb0M3SSxRQUFRLEdBQTVDLEtBQ0tvSixVQUFVO0FBQ2hCOztBQUNELFdBQVNBLFVBQVQsR0FBc0I7QUFDcEIsUUFBSSxDQUFDTixLQUFMLEVBQVk7QUFDVixZQUFNTyxLQUFLLEdBQUdSLFNBQVMsR0FBR0ssV0FBVyxDQUFDQyxHQUFaLEVBQTFCO0FBQ0FMLFdBQUssR0FBR3RELFVBQVUsQ0FBQ3lELFNBQUQsRUFBWUksS0FBWixDQUFsQjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBU0MsaUJBQVQsQ0FBMkIsR0FBR3BCLElBQTlCLEVBQW9DO0FBQ2xDVyxhQUFTLEdBQUdLLFdBQVcsQ0FBQ0MsR0FBWixLQUFvQlAsSUFBaEM7O0FBQ0E1SSxZQUFRLEdBQUcsTUFBTTtBQUNmQSxjQUFRLEdBQUcsSUFBWDtBQUNBa0gsVUFBSSxDQUFDd0IsS0FBTCxDQUFXLElBQVgsRUFBaUJSLElBQWpCO0FBQ0QsS0FIRDs7QUFJQWtCLGNBQVU7QUFDWDs7QUFDRCxTQUFPRSxpQkFBUDtBQUNEO0FBRU0sU0FBU0MsUUFBVCxDQUFrQnJDLElBQWxCLEVBQXdCMEIsSUFBeEIsRUFBOEI7QUFDbkMsTUFBSVksUUFBUSxHQUFHLENBQWY7QUFDQVosTUFBSSxHQUFHRyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQ0osSUFBRCxJQUFTLENBQXJCLENBQVA7O0FBQ0EsV0FBU2EsaUJBQVQsQ0FBMkIsR0FBR3ZCLElBQTlCLEVBQW9DO0FBQ2xDLFVBQU1pQixHQUFHLEdBQUdELFdBQVcsQ0FBQ0MsR0FBWixFQUFaOztBQUNBLFFBQUlLLFFBQVEsR0FBR1osSUFBWCxHQUFrQk8sR0FBdEIsRUFBMkI7QUFDekJLLGNBQVEsR0FBR0wsR0FBWDtBQUNBakMsVUFBSSxDQUFDd0IsS0FBTCxDQUFXLElBQVgsRUFBaUJSLElBQWpCO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPdUIsaUJBQVA7QUFDRDtBQUVNLFNBQVNqSSxJQUFULEdBQWdCLENBQUU7QUFFbEIsU0FBU2tJLFNBQVQsQ0FBbUJDLE1BQU0sR0FBRyxJQUE1QixFQUFrQztBQUN2QyxRQUFNUixHQUFHLEdBQUdELFdBQVcsQ0FBQ0MsR0FBWixFQUFaO0FBQ0EsU0FBT1EsTUFBTSxHQUNUWixJQUFJLENBQUNhLEtBQUwsQ0FBVyxDQUFDVCxHQUFHLEdBQUdKLElBQUksQ0FBQ2EsS0FBTCxDQUFXVCxHQUFYLENBQVAsSUFBMEIsSUFBckMsRUFBMkMzRyxRQUEzQyxDQUFvRCxFQUFwRCxDQURHLEdBRUh1RyxJQUFJLENBQUNhLEtBQUwsQ0FBV2IsSUFBSSxDQUFDYyxNQUFMLEtBQWdCLElBQTNCLEVBQWlDckgsUUFBakMsQ0FBMEMsRUFBMUMsQ0FGSjtBQUdEO0FBRUQ7Ozs7Ozs7QUFNTyxTQUFTc0gsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEJDLE1BQU0sR0FBRyxDQUFyQyxFQUF3QzNILE1BQU0sR0FBRyxJQUFqRCxFQUF1RDtBQUM1RDtBQUNBLFFBQU00SCxTQUFTLEdBQUcsSUFBbEI7QUFDQSxRQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNBLFFBQU1DLFFBQVEsR0FBR0osR0FBRyxDQUFDMUgsTUFBckIsQ0FKNEQsQ0FJL0I7O0FBQzdCLFFBQU0rSCxHQUFHLEdBQUdyQixJQUFJLENBQUNzQixHQUFMLENBQVNGLFFBQVEsSUFBSUosR0FBRyxDQUFDTyxVQUF6QixFQUFxQ04sTUFBTSxHQUFHM0gsTUFBOUMsQ0FBWjtBQUNBLFFBQU1rSSxZQUFZLEdBQUdKLFFBQVEsSUFBSSxJQUFaLElBQW9CSCxNQUFwQixJQUE4QkksR0FBRyxHQUFHSCxTQUF6RDs7QUFDQSxTQUFPRCxNQUFNLEdBQUdJLEdBQWhCLEVBQXFCSixNQUFNLElBQUlDLFNBQS9CLEVBQTBDO0FBQ3hDQyxVQUFNLENBQUNqSyxJQUFQLENBQVkwRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0I4RCxLQUFwQixDQUEwQixJQUExQixFQUNWNkIsWUFBWSxHQUNSLElBQUlDLFVBQUosQ0FBZVQsR0FBZixFQUFvQkMsTUFBcEIsRUFBNEJqQixJQUFJLENBQUNzQixHQUFMLENBQVNKLFNBQVQsRUFBb0JHLEdBQUcsR0FBR0osTUFBMUIsQ0FBNUIsQ0FEUSxHQUVSRCxHQUhNLENBQVo7QUFJRDs7QUFDRCxTQUFPRyxNQUFNLENBQUN0RSxJQUFQLENBQVksRUFBWixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFPTyxTQUFTNkUsV0FBVCxDQUFxQkMsSUFBckIsRUFBMkJWLE1BQU0sR0FBRyxDQUFwQyxFQUF1QzNILE1BQU0sR0FBRyxJQUFoRCxFQUFzRDtBQUMzRCxNQUFJMkgsTUFBTSxJQUFJM0gsTUFBTSxHQUFHcUksSUFBSSxDQUFDQyxJQUE1QixFQUFrQztBQUNoQ0QsUUFBSSxHQUFHQSxJQUFJLENBQUM5SyxLQUFMLENBQVdvSyxNQUFYLEVBQW1CQSxNQUFNLEdBQUczSCxNQUE1QixDQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxDQUFDcUksSUFBSSxDQUFDQyxJQUFOLEdBQWEsRUFBYixHQUFrQixJQUFJckYsT0FBSixDQUFZQyxPQUFPLElBQUk7QUFDOUMsVUFBTXFGLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQUQsVUFBTSxDQUFDRSxhQUFQLENBQXFCSixJQUFyQjs7QUFDQUUsVUFBTSxDQUFDRyxNQUFQLEdBQWdCLE1BQU07QUFDcEIsWUFBTTFFLEdBQUcsR0FBR3VFLE1BQU0sQ0FBQ0ksTUFBbkI7QUFDQXpGLGFBQU8sQ0FBQ2MsR0FBRyxDQUFDekcsS0FBSixDQUFVeUcsR0FBRyxDQUFDbEcsT0FBSixDQUFZLEdBQVosSUFBbUIsQ0FBN0IsQ0FBRCxDQUFQO0FBQ0QsS0FIRDtBQUlELEdBUHdCLENBQXpCO0FBUUQ7QUFFTSxTQUFTOEssaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQWdDO0FBQ3JDLFFBQU1DLEdBQUcsR0FBR0QsR0FBRyxDQUFDN0ksTUFBaEI7QUFDQSxRQUFNK0ksS0FBSyxHQUFHLElBQUlaLFVBQUosQ0FBZVcsR0FBZixDQUFkOztBQUNBLE9BQUssSUFBSWpMLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdpTCxHQUFwQixFQUF5QmpMLENBQUMsSUFBSSxDQUE5QixFQUFpQztBQUMvQmtMLFNBQUssQ0FBQ2xMLENBQUQsQ0FBTCxHQUFXZ0wsR0FBRyxDQUFDNUcsVUFBSixDQUFlcEUsQ0FBZixDQUFYO0FBQ0Q7O0FBQ0QsU0FBT2tMLEtBQVA7QUFDRDtBQUVELE1BQU1DLFVBQVUsR0FBRyx5QkFBbkI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsT0FBbEIsQyxDQUEyQjs7QUFFM0I7O0FBQ08sU0FBU0MsY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEJDLElBQTlCLEVBQW9DO0FBQ3pDO0FBQ0E7QUFDQSxRQUFNLEdBQUdDLEtBQUssR0FBR0YsSUFBSSxJQUFJLEVBQW5CLEVBQXVCRyxJQUF2QixJQUErQk4sVUFBVSxDQUFDTyxJQUFYLENBQWdCSixJQUFoQixDQUFyQyxDQUh5QyxDQUl6Qzs7QUFDQSxRQUFNLEdBQUdLLEtBQUssR0FBR0osSUFBSSxJQUFJLEVBQW5CLEVBQXVCSyxJQUF2QixJQUErQlQsVUFBVSxDQUFDTyxJQUFYLENBQWdCSCxJQUFoQixDQUFyQztBQUNBLFFBQU1wQyxLQUFLLEdBQUcwQyxtQkFBbUIsQ0FBQ0wsS0FBRCxFQUFRRyxLQUFSLENBQW5CLElBQ1QsQ0FBQ0YsSUFBRCxHQUFRLENBQUNHLElBREEsQ0FDSztBQURMLEtBRVRILElBQUksSUFBSUksbUJBQW1CLENBQUNKLElBQUQsRUFBT0csSUFBUCxFQUFhLElBQWIsQ0FGaEMsQ0FOeUMsQ0FRVzs7QUFDcEQsU0FBT3pDLEtBQUssR0FBRyxDQUFSLEdBQVksQ0FBQyxDQUFiLEdBQWlCLENBQUMsQ0FBQyxDQUFDQSxLQUEzQjtBQUNEOztBQUVELFNBQVMwQyxtQkFBVCxDQUE2QlAsSUFBN0IsRUFBbUNDLElBQW5DLEVBQXlDTyxZQUF6QyxFQUF1RDtBQUNyRCxRQUFNQyxNQUFNLEdBQUdULElBQUksQ0FBQ3hGLEtBQUwsQ0FBVyxHQUFYLENBQWY7QUFDQSxRQUFNa0csTUFBTSxHQUFHVCxJQUFJLENBQUN6RixLQUFMLENBQVcsR0FBWCxDQUFmO0FBQ0EsUUFBTW1HLElBQUksR0FBR0YsTUFBTSxDQUFDNUosTUFBcEI7QUFDQSxRQUFNK0osSUFBSSxHQUFHRixNQUFNLENBQUM3SixNQUFwQjtBQUNBLFFBQU04SSxHQUFHLEdBQUcsQ0FBQ2EsWUFBWSxHQUFHakQsSUFBSSxDQUFDc0IsR0FBUixHQUFjdEIsSUFBSSxDQUFDQyxHQUFoQyxFQUFxQ21ELElBQXJDLEVBQTJDQyxJQUEzQyxDQUFaO0FBQ0EsTUFBSS9DLEtBQUo7O0FBQ0EsT0FBSyxJQUFJbkosQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQ21KLEtBQUQsSUFBVW5KLENBQUMsR0FBR2lMLEdBQTlCLEVBQW1DakwsQ0FBQyxJQUFJLENBQXhDLEVBQTJDO0FBQ3pDLFVBQU0ySCxDQUFDLEdBQUdvRSxNQUFNLENBQUMvTCxDQUFELENBQWhCO0FBQ0EsVUFBTTRILENBQUMsR0FBR29FLE1BQU0sQ0FBQ2hNLENBQUQsQ0FBaEI7O0FBQ0EsUUFBSThMLFlBQUosRUFBa0I7QUFDaEIzQyxXQUFLLEdBQUdpQyxTQUFTLENBQUNlLElBQVYsQ0FBZXhFLENBQWYsS0FBcUJ5RCxTQUFTLENBQUNlLElBQVYsQ0FBZXZFLENBQWYsQ0FBckIsR0FDSkQsQ0FBQyxHQUFHQyxDQURBLEdBRUpELENBQUMsR0FBR0MsQ0FBSixJQUFTRCxDQUFDLEdBQUdDLENBQUosSUFBUyxDQUFDLENBRnZCO0FBR0QsS0FKRCxNQUlPO0FBQ0x1QixXQUFLLEdBQUcsQ0FBQ3hFLFFBQVEsQ0FBQ2dELENBQUQsRUFBSSxFQUFKLENBQVIsSUFBbUIsQ0FBcEIsS0FBMEJoRCxRQUFRLENBQUNpRCxDQUFELEVBQUksRUFBSixDQUFSLElBQW1CLENBQTdDLENBQVI7QUFDRDtBQUNGOztBQUNELFNBQU91QixLQUFLLElBQUkyQyxZQUFZLElBQUtHLElBQUksR0FBR0MsSUFBeEM7QUFDRDs7QUFFRCxNQUFNRSxLQUFLLEdBQUcsQ0FDWixDQUFDLEtBQUQsRUFBUSxFQUFSLENBRFksRUFFWixDQUFDLEdBQUQsRUFBTSxFQUFOLENBRlksRUFHWixDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksR0FBWixDQUhZLEVBSVosQ0FBQyxHQUFELENBSlksQ0FBZDtBQU1PLFNBQVNDLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQThCO0FBQ25DQSxVQUFRLElBQUksS0FBSyxJQUFqQjtBQUNBLFFBQU1DLFFBQVEsR0FBR0gsS0FBSyxDQUFDcEosSUFBTixDQUFZNkUsSUFBRCxJQUFVO0FBQ3BDLFVBQU1pQixHQUFHLEdBQUdqQixJQUFJLENBQUMsQ0FBRCxDQUFoQjtBQUNBLFFBQUksQ0FBQ2lCLEdBQUQsSUFBUXdELFFBQVEsR0FBR3hELEdBQXZCLEVBQTRCLE9BQU8sSUFBUDtBQUM1QixVQUFNMEQsSUFBSSxHQUFHM0UsSUFBSSxDQUFDLENBQUQsQ0FBSixJQUFXaUIsR0FBeEI7QUFDQXdELFlBQVEsSUFBSUUsSUFBWjtBQUNBLFdBQU8sS0FBUDtBQUNELEdBTmdCLENBQWpCO0FBT0EsU0FBUSxHQUFFRixRQUFRLEdBQUcsQ0FBRSxHQUFFQyxRQUFRLENBQUMsQ0FBRCxDQUFJLEVBQXJDO0FBQ0Q7QUFFTSxNQUFNRSxnQkFBZ0IsR0FBR3hCLEdBQUcsSUFDakMsQ0FBQ0EsR0FBRCxHQUFPLEVBQVAsR0FDSUEsR0FBRyxHQUFHLElBQU4sSUFBZSxHQUFFQSxHQUFJLElBQXJCLElBQ0NBLEdBQUcsR0FBRyxPQUFPLElBQWIsSUFBc0IsR0FBRUEsR0FBRyxJQUFJLEVBQUcsSUFEbkMsQ0FDdUM7QUFEdkMsR0FFRSxHQUFFLENBQUMsQ0FBQ0EsR0FBRyxJQUFJLE9BQU8sSUFBWCxDQUFKLEVBQXNCeUIsT0FBdEIsQ0FBOEIsQ0FBOUIsQ0FBaUMsSUFKVCxDQUlhO0FBSnpDLEMsQ0FPUDs7QUFDTyxTQUFTQyxPQUFULENBQWlCL0ksR0FBakIsRUFBc0I7QUFDM0IsT0FBSyxNQUFNbkIsR0FBWCxJQUFrQm1CLEdBQWxCLEVBQXVCO0FBQ3JCLFFBQUksU0FBS2dKLGNBQUwsRUFBQWhKLEdBQUcsRUFBaUJuQixHQUFqQixDQUFQLEVBQThCO0FBQzVCLGFBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxJQUFQO0FBQ0Q7QUFFTSxTQUFTb0ssV0FBVCxDQUFxQnBOLElBQXJCLEVBQTJCO0FBQ2hDLFNBQU9tRyxLQUFLLENBQUNDLE9BQU4sQ0FBY3BHLElBQWQsSUFBc0JBLElBQXRCLEdBQTZCLENBQUNBLElBQUQsQ0FBcEM7QUFDRDtBQUVELE1BQU1xTixXQUFXLEdBQUcsQ0FDbEIsTUFEa0IsRUFFbEIsYUFGa0IsQ0FBcEI7QUFJTyxlQUFlQyxnQkFBZixDQUFnQ3JKLEdBQWhDLEVBQXFDckQsT0FBTyxHQUFHLEVBQS9DLEVBQW1EO0FBQ3hEO0FBQ0E7QUFDQSxTQUFPLElBQUkrRSxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVMkgsTUFBVixLQUFxQjtBQUN0QyxVQUFNbEMsTUFBTSxHQUFHLEVBQWY7QUFDQSxVQUFNbUMsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBWjtBQUNBLFVBQU07QUFBRUM7QUFBRixRQUFtQjlNLE9BQXpCO0FBQ0E0TSxPQUFHLENBQUNHLElBQUosQ0FBUyxLQUFULEVBQWdCMUosR0FBaEIsRUFBcUIsSUFBckI7QUFDQSxRQUFJb0osV0FBVyxDQUFDak0sUUFBWixDQUFxQnNNLFlBQXJCLENBQUosRUFBd0NGLEdBQUcsQ0FBQ0UsWUFBSixHQUFtQkEsWUFBbkI7O0FBQ3hDRixPQUFHLENBQUNwQyxNQUFKLEdBQWEsTUFBTTtBQUNqQjtBQUNBQyxZQUFNLENBQUN1QyxNQUFQLEdBQWdCSixHQUFHLENBQUNJLE1BQUosSUFBYyxHQUE5QjtBQUNBdkMsWUFBTSxDQUFDckwsSUFBUCxHQUFjcU4sV0FBVyxDQUFDak0sUUFBWixDQUFxQnNNLFlBQXJCLElBQXFDRixHQUFHLENBQUNLLFFBQXpDLEdBQW9ETCxHQUFHLENBQUNNLFlBQXRFOztBQUNBLFVBQUlKLFlBQVksS0FBSyxNQUFyQixFQUE2QjtBQUMzQixZQUFJO0FBQ0ZyQyxnQkFBTSxDQUFDckwsSUFBUCxHQUFjK04sSUFBSSxDQUFDQyxLQUFMLENBQVczQyxNQUFNLENBQUNyTCxJQUFsQixDQUFkO0FBQ0QsU0FGRCxDQUVFLGdCQUFNLENBQ047QUFDRDtBQUNGOztBQUNELFVBQUlxTCxNQUFNLENBQUN1QyxNQUFQLEdBQWdCLEdBQXBCLEVBQXlCO0FBQ3ZCTCxjQUFNLENBQUNsQyxNQUFELENBQU47QUFDRCxPQUZELE1BRU87QUFDTHpGLGVBQU8sQ0FBQ3lGLE1BQUQsQ0FBUDtBQUNEO0FBQ0YsS0FoQkQ7O0FBaUJBbUMsT0FBRyxDQUFDUyxPQUFKLEdBQWMsTUFBTTtBQUNsQjVDLFlBQU0sQ0FBQ3VDLE1BQVAsR0FBZ0IsQ0FBQyxDQUFqQjtBQUNBTCxZQUFNLENBQUNsQyxNQUFELENBQU47QUFDRCxLQUhEOztBQUlBbUMsT0FBRyxDQUFDVSxJQUFKO0FBQ0QsR0E1Qk0sQ0FBUDtBQTZCRDtBQUVEOzs7OztBQUlBLE1BQU1DLGFBQWEsR0FBRztBQUNwQixvQkFBa0I7QUFERSxDQUF0QjtBQUlPLE1BQU1DLFFBQVEsR0FBR25LLEdBQUcsSUFBSUEsR0FBRyxJQUM3QixDQUFFLHlEQUF5RHlJLElBQXpELENBQThEekksR0FBOUQsQ0FEQTtBQUdQOzs7Ozs7O0FBTUE7Ozs7Ozs7QUFNTyxlQUFlb0ssT0FBZixDQUF1QnBLLEdBQXZCLEVBQTRCckQsT0FBTyxHQUFHLEVBQXRDLEVBQTBDO0FBQy9DO0FBQ0EsTUFBSXFELEdBQUcsQ0FBQ3FLLFVBQUosQ0FBZSxTQUFmLENBQUosRUFBK0IsT0FBT2hCLGdCQUFnQixDQUFDckosR0FBRCxFQUFNckQsT0FBTixDQUF2QjtBQUMvQixRQUFNO0FBQUUyTixRQUFGO0FBQVFDLFdBQVI7QUFBaUJkO0FBQWpCLE1BQWtDOU0sT0FBeEM7QUFDQSxRQUFNNk4sU0FBUyxHQUFHRixJQUFJLElBQUksU0FBTyxFQUFELENBQUsxTCxRQUFYLEVBQUEwTCxJQUFJLE1BQXNCLGlCQUFwRDtBQUNBLFFBQU1HLFFBQVEsR0FBR3pLLEdBQUcsQ0FBQ29DLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFqQjtBQUNBLFFBQU1zSSxNQUFNLEdBQUdSLGFBQWEsQ0FBQ08sUUFBRCxDQUE1QixDQU4rQyxDQU8vQzs7QUFDQSxRQUFNRSxJQUFJLEdBQUdwSCxNQUFNLENBQUNxSCxNQUFQLENBQWM7QUFDekIvRixTQUFLLEVBQUVzRixRQUFRLENBQUNuSyxHQUFELENBQVIsR0FBZ0I2SyxTQUFoQixHQUE0QjtBQURWLEdBQWQsRUFFVmxPLE9BRlUsRUFFRDtBQUNWMk4sUUFBSSxFQUFFRSxTQUFTLEdBQUdWLElBQUksQ0FBQ2dCLFNBQUwsQ0FBZVIsSUFBZixDQUFILEdBQTBCQSxJQUQvQjtBQUVWQyxXQUFPLEVBQUVDLFNBQVMsSUFBSUUsTUFBYixHQUNMbkgsTUFBTSxDQUFDcUgsTUFBUCxDQUFjLEVBQWQsRUFDQUwsT0FEQSxFQUVBQyxTQUFTLElBQUk7QUFBRSxzQkFBZ0I7QUFBbEIsS0FGYixFQUdBRSxNQUFNLElBQUk7QUFBRUE7QUFBRixLQUhWLENBREssR0FLTEg7QUFQTSxHQUZDLENBQWI7QUFXQSxRQUFNbkQsTUFBTSxHQUFHO0FBQUVwSCxPQUFGO0FBQU8ySixVQUFNLEVBQUUsQ0FBQztBQUFoQixHQUFmOztBQUNBLE1BQUk7QUFDRixVQUFNb0IsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQ2hMLEdBQUQsRUFBTTJLLElBQU4sQ0FBeEI7QUFDQSxVQUFNTSxVQUFVLEdBQUc7QUFDakJDLGlCQUFXLEVBQUUsYUFESTtBQUVqQnBFLFVBQUksRUFBRSxNQUZXO0FBR2pCcUUsVUFBSSxFQUFFO0FBSFcsTUFJakIxQixZQUppQixLQUlBLE1BSm5CLENBRkUsQ0FPRjs7QUFDQXJDLFVBQU0sQ0FBQ3VDLE1BQVAsR0FBZ0JvQixJQUFJLENBQUNwQixNQUFMLElBQWUsR0FBL0I7QUFDQXZDLFVBQU0sQ0FBQ21ELE9BQVAsR0FBaUJRLElBQUksQ0FBQ1IsT0FBdEI7QUFDQW5ELFVBQU0sQ0FBQ3JMLElBQVAsR0FBYyxNQUFNZ1AsSUFBSSxDQUFDRSxVQUFELENBQUosRUFBcEI7QUFDRCxHQVhELENBV0UsaUJBQU07QUFBRTtBQUFXOztBQUNyQixNQUFJN0QsTUFBTSxDQUFDdUMsTUFBUCxHQUFnQixDQUFoQixJQUFxQnZDLE1BQU0sQ0FBQ3VDLE1BQVAsR0FBZ0IsR0FBekMsRUFBOEMsTUFBTXZDLE1BQU47QUFDOUMsU0FBT0EsTUFBUDtBQUNELEMsQ0FFRDs7QUFDQSxNQUFNZ0UsaUJBQWlCLEdBQUc7QUFDeEJwUSxXQUFTLEVBQUUsSUFEYTtBQUV4QnFRLFFBQU0sRUFBRSxHQUZnQjtBQUd4QkMsUUFBTSxFQUFFLEdBSGdCO0FBSXhCQyxTQUFPLEVBQUU7QUFKZSxDQUExQixDLENBT0E7O0FBQ08sU0FBU0MsZUFBVCxDQUF5QnBJLEtBQXpCLEVBQWdDcUksUUFBUSxHQUFHM0IsSUFBSSxDQUFDZ0IsU0FBaEQsRUFBMkQ7QUFDaEUsTUFBSTFILEtBQUssS0FBS3lILFNBQWQsRUFBeUI7QUFDdkIsVUFBTWEsTUFBTSxHQUFHTixpQkFBaUIsQ0FBQyxPQUFPaEksS0FBUixDQUFoQztBQUNBLFdBQVEsR0FBRXNJLE1BQU0sSUFBSSxHQUFJLEdBQUVBLE1BQU0sR0FBR3RJLEtBQUgsR0FBV3FJLFFBQVEsQ0FBQ3JJLEtBQUQsQ0FBUSxFQUEzRDtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDL1REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTs7OztBQUtBO0FBSUE7QUFFTyxNQUFNdUksZUFBZSxHQUFHLENBQUNDLE9BQUQsRUFBVUMsR0FBVixFQUFlQyxTQUFmLEtBQTZCO0FBQzFELFFBQU1DLE1BQU0sR0FBR0QsU0FBUyxHQUFHQSxTQUFTLENBQUNELEdBQUQsRUFBTUcsUUFBTixDQUFaLEdBQThCSCxHQUF0RDtBQUNBLFFBQU1JLE9BQU8sR0FBRyxJQUFJQyxlQUFKLENBQW9CTixPQUFwQixFQUE2QjtBQUFFNVEsYUFBUyxFQUFFLElBQWI7QUFBbUIrUTtBQUFuQixHQUE3QixDQUFoQjtBQUNBLFdBQVFqUSxJQUFSLEVBQUFzQixNQUFNLEVBQU82TyxPQUFQLENBQU47QUFDRCxDQUpNO0FBTUEsTUFBTUUsVUFBVSxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsTUFBaEIsRUFBd0JSLFNBQXhCLEtBQXNDO0FBQzlEOztBQUVBLE1BQUlTLGlCQUFKO0FBQ0EsV0FBUUMsRUFBUixFQUFBcFAsTUFBTSxFQUFLZ1AsS0FBTCxFQUFZaE8sQ0FBQyxJQUFJO0FBQ3JCLGFBQUdxTyx3QkFBSCxFQUFBck8sQ0FBQzs7QUFDRCxRQUFJc08sS0FBSixFQUF1QixFQUd0Qjs7QUFDRCxRQUFJLENBQUNILGlCQUFMLEVBQXdCO0FBQ3RCO0FBQ0EsWUFBTXhRLElBQUksR0FBRyxTQUFHNFEsU0FBSCxFQUFBdk8sQ0FBQyxDQUFkO0FBQ0FtTyx1QkFBaUIsR0FBR3hRLElBQUksQ0FBQzZRLElBQUwsSUFBYTdRLElBQWpDO0FBQ0EsVUFBSSxDQUFDd1EsaUJBQUwsRUFBd0JELE1BQU0sQ0FBQ08sUUFBUCxDQUFnQjlRLElBQWhCO0FBQ3pCLEtBTEQsTUFLTztBQUNMO0FBQ0F3USx1QkFBaUIsQ0FBQ0ssSUFBbEIsR0FBeUIsU0FBR0UsZ0JBQUgsRUFBQTFPLENBQUMsQ0FBMUI7QUFDQWtPLFlBQU0sQ0FBQ08sUUFBUCxDQUFnQk4saUJBQWhCO0FBQ0FBLHVCQUFpQixHQUFHLElBQXBCO0FBQ0Q7QUFDRixHQWpCSyxFQWlCSCxJQWpCRyxDQUFOOztBQWtCQUQsUUFBTSxDQUFDUyxJQUFQLEdBQWMsQ0FBQ3JRLEdBQUQsRUFBTVgsSUFBTixFQUFZO0FBQUVpUjtBQUFGLE1BQWNWLE1BQTFCLEVBQWtDTSxJQUFsQyxLQUEyQztBQUN2RDtBQUNBLFVBQU1LLE9BQU8sR0FBR0wsSUFBSSxJQUFJLElBQUlNLGNBQUosQ0FBbUJiLE1BQW5CLEVBQTJCO0FBQUVyUixlQUFTLEVBQUUsSUFBYjtBQUFtQm1TLG1CQUFhLEVBQUVQO0FBQWxDLEtBQTNCLENBQXhCO0FBQ0FqQixtQkFBZSxDQUFDVSxNQUFELEVBQVM7QUFBRTNQLFNBQUY7QUFBT1gsVUFBUDtBQUFhaVIsYUFBYjtBQUFzQkosVUFBSSxFQUFFLENBQUMsQ0FBQ0s7QUFBOUIsS0FBVCxFQUFrRG5CLFNBQWxELENBQWY7QUFDQSxRQUFJbUIsT0FBSixFQUFhLFNBQVFuUixJQUFSLEVBQUFzQixNQUFNLEVBQU82UCxPQUFQLENBQU47QUFDZCxHQUxEO0FBTUQsQ0E1Qk0sQzs7Ozs7Ozs7Ozs7O0FDbkJQO0FBQUEsTUFBTUcsUUFBUSxHQUFHQyxhQUFhLEVBQTlCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRCxhQUFhLEVBQS9CO0FBQ0E7Ozs7QUFHQSxNQUFNZixNQUFNLEdBQUc7QUFDYnRSLFdBQVMsRUFBRSxJQURFO0FBRWJzUyxXQUZhOztBQUdiQyxhQUFXLENBQUNyTixHQUFELEVBQU07QUFDZjBLLFVBQU0sQ0FBQ3dDLFFBQUQsRUFBV2xOLEdBQVgsQ0FBTjtBQUNELEdBTFk7O0FBTWIyTSxVQUFRLENBQUM7QUFBRW5RLE9BQUY7QUFBT1gsUUFBUDtBQUFhNlE7QUFBYixHQUFELEVBQXNCO0FBQzVCLFVBQU1ZLEVBQUUsR0FBR0osUUFBUSxDQUFDMVEsR0FBRCxDQUFuQjtBQUNBLFFBQUk4USxFQUFKLEVBQVEsU0FBTUEsRUFBTixFQUFBWixJQUFJLEVBQUs3USxJQUFMLENBQUo7QUFDVCxHQVRZOztBQVVia08sTUFBSSxDQUFDdk4sR0FBRCxFQUFNWCxJQUFOLEVBQVkwUixPQUFaLEVBQXFCYixJQUFyQixFQUEyQjtBQUM3QixXQUFPLElBQUljLFdBQUosQ0FBZ0IvTCxPQUFPLElBQUk7QUFDaENnTSxzQkFBZ0IsQ0FBQ2pSLEdBQUQsRUFBTVgsSUFBTixFQUFZMFIsT0FBWixFQUFxQmIsSUFBckIsRUFBMkJqTCxPQUEzQixDQUFoQjtBQUNELEtBRk0sQ0FBUDtBQUdELEdBZFk7O0FBZWJpTSxVQUFRLEVBQUVEO0FBZkcsQ0FBZjs7QUFrQkEsU0FBU0EsZ0JBQVQsQ0FBMEJqUixHQUExQixFQUErQlgsSUFBL0IsRUFBcUMwUixPQUFyQyxFQUE4Q2IsSUFBOUMsRUFBb0QxUSxFQUFwRCxFQUF3RDJSLGdCQUF4RCxFQUEwRTtBQUN4RSxRQUFNaE8sRUFBRSxHQUFHaU8sYUFBYSxFQUF4QjtBQUNBUixXQUFTLENBQUN6TixFQUFELENBQVQsR0FBZ0IzRCxFQUFoQjs7QUFDQSxNQUFJMlIsZ0JBQUosRUFBc0I7QUFDcEJFLGNBQVUsQ0FBQ2hTLElBQUQsRUFBTzhSLGdCQUFQLEVBQXlCaE8sRUFBekIsQ0FBVjtBQUNELEdBRkQsTUFFTztBQUNMOUQsUUFBSSxHQUFHO0FBQUUsT0FBQ2lTLFdBQUQsR0FBZW5PLEVBQWpCO0FBQXFCOUQ7QUFBckIsS0FBUDtBQUNEOztBQUNEdVEsUUFBTSxDQUFDUyxJQUFQLENBQVlyUSxHQUFaLEVBQWlCWCxJQUFqQixFQUF1QjBSLE9BQXZCLEVBQWdDYixJQUFoQztBQUNEOztBQUVjTixxRUFBZixFOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxNQUFNMkIsU0FBUyxHQUFHO0FBQ2hCalQsV0FBUyxFQUFFLElBREs7QUFFaEJrVCxnQkFBYyxFQUFFLGdCQUZBO0FBR2hCQyxnQkFBYyxFQUFFO0FBSEEsQ0FBbEI7QUFLQSxNQUFNQyxTQUFTLEdBQUc7QUFDaEJwVCxXQUFTLEVBQUUsSUFESztBQUVoQmtULGdCQUFjLEVBQUUsQ0FGQTtBQUdoQkcsVUFBUSxFQUFFLENBSE07QUFJaEJDLGFBQVcsRUFBRSxDQUpHO0FBS2hCQyxVQUFRLEVBQUUsQ0FMTTtBQU1oQkMsWUFBVSxFQUFFO0FBTkksQ0FBbEI7QUFRQSxJQUFJQyxLQUFKO0FBQ0EsSUFBSUMsY0FBSjtBQUVBOzs7OztBQUlPLFNBQVNDLGdCQUFULENBQTBCbFAsTUFBMUIsRUFBa0M7QUFDdkM7QUFDQTtBQUNBLFFBQU07QUFBRVg7QUFBRixNQUFXVyxNQUFqQjtBQUNBLFFBQU1tUCxLQUFLLEdBQUc5UCxJQUFJLENBQUM4UCxLQUFuQjs7QUFDQSxNQUFJQSxLQUFLLENBQUNuUSxNQUFOLEtBQWlCLENBQWpCLElBQXNCbVEsS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhLE1BQXZDLEVBQStDO0FBQzdDQSxTQUFLLENBQUNuUSxNQUFOLEdBQWUsQ0FBZjtBQUNEOztBQUNELFFBQU07QUFBRW9CO0FBQUYsTUFBU0osTUFBTSxDQUFDRyxLQUF0QjtBQUNBLFFBQU1pUCxTQUFTLEdBQUdqRSxNQUFNLENBQUN5QyxhQUFhLEVBQWQsRUFBa0J2TyxJQUFJLENBQUMrUCxTQUF2QixDQUF4QjtBQUNBOztBQUNBLFFBQU1wQixPQUFPLEdBQUc7QUFDZDVOLE1BRGM7QUFFZEosVUFGYztBQUdkb1AsYUFIYztBQUlkN0IsV0FBTyxFQUFFdk4sTUFBTSxDQUFDdU4sT0FKRjtBQUtkOEIsWUFBUSxFQUFFekIsYUFBYTtBQUxULEdBQWhCO0FBT0EsUUFBTTBCLE1BQU0sR0FBR0MsVUFBVSxDQUFDdlAsTUFBRCxFQUFTb1AsU0FBVCxDQUF6QjtBQUNBLFFBQU1JLEVBQUUsR0FBRztBQUNUalUsYUFBUyxFQUFFLElBREY7QUFFVGtVLE1BQUUsRUFBRTtBQUNGbFUsZUFBUyxFQUFFLElBRFQ7QUFFRm1VLFVBQUksRUFBRUo7QUFGSixLQUZLO0FBTVRLLFdBQU8sRUFBRUwsTUFOQTtBQU9UTSxnQkFBWSxFQUFFL1Q7QUFQTCxHQUFYOztBQVNBLE1BQUksQ0FBQ29ULGNBQUwsRUFBcUI7QUFDbkJBLGtCQUFjLEdBQUdZLG9FQUFrQixFQUFuQztBQUNEOztBQUNEMUUsUUFBTSxDQUFDcUUsRUFBRCxFQUFLUCxjQUFMLENBQU47O0FBQ0EsTUFBSSxTQUFPblMsT0FBUCxFQUFBcVMsS0FBSyxFQUFVVyxZQUFWLENBQUwsSUFBZ0MsQ0FBcEMsRUFBdUM7QUFDckNOLE1BQUUsQ0FBQ08sS0FBSCxHQUFXQyxTQUFTLENBQUMsTUFBTW5ELCtDQUFNLENBQUNTLElBQVAsQ0FBWSxVQUFaLEVBQXdCLENBQXhCLEVBQTJCVSxPQUEzQixDQUFQLENBQXBCO0FBQ0Q7O0FBQ0QsTUFBSSxTQUFPbFIsT0FBUCxFQUFBcVMsS0FBSyxFQUFVYyxZQUFWLENBQUwsSUFBZ0MsQ0FBcEMsRUFBdUM7QUFDckNULE1BQUUsQ0FBQ1UsS0FBSCxHQUFXRixTQUFTLENBQUMsTUFBTW5ELCtDQUFNLENBQUNTLElBQVAsQ0FBWSxVQUFaLEVBQXdCLENBQXhCLEVBQTJCVSxPQUEzQixDQUFQLENBQXBCO0FBQ0Q7O0FBQ0QsTUFBSSxDQUFDZ0IsS0FBRCxJQUFVRyxLQUFLLENBQUNuUSxNQUFwQixFQUE0QmdRLEtBQUssR0FBR21CLHlEQUFTLEVBQWpCO0FBQzVCLFdBQU8zVCxPQUFQLEVBQUEyUyxLQUFLLEVBQVdqUCxJQUFELElBQVU7QUFDdkIsVUFBTWtRLE9BQU8sR0FBRyxTQUFNN1QsS0FBTixFQUFBMkQsSUFBSSxFQUFRLENBQVIsRUFBVyxDQUFYLENBQUosS0FBc0IsS0FBdEIsSUFBK0IsU0FBTTNELEtBQU4sRUFBQTJELElBQUksRUFBUSxDQUFSLENBQW5EO0FBQ0EsVUFBTTZOLEVBQUUsR0FBR2lCLEtBQUssQ0FBQ29CLE9BQU8sR0FBSSxNQUFLNUIsU0FBUyxDQUFDNEIsT0FBRCxDQUFULElBQXNCQSxPQUFRLEVBQXZDLEdBQTJDbFEsSUFBbkQsQ0FBaEI7O0FBQ0EsUUFBSTZOLEVBQUosRUFBUTtBQUNOLFVBQUlxQyxPQUFKLEVBQWE7QUFDWFosVUFBRSxDQUFDQyxFQUFILENBQU1XLE9BQU4sSUFBaUJDLGtCQUFrQixDQUFDdEMsRUFBRCxFQUFLQyxPQUFMLEVBQWNXLFNBQVMsQ0FBQ3lCLE9BQUQsQ0FBdkIsQ0FBbkM7QUFDRCxPQUZELE1BRU87QUFDTFosVUFBRSxDQUFDdFAsSUFBRCxDQUFGLEdBQVdtUSxrQkFBa0IsQ0FBQ3RDLEVBQUQsRUFBS0MsT0FBTCxDQUE3QjtBQUNEO0FBQ0Y7QUFDRixHQVZJLENBQUw7QUFXQSxTQUFPbUIsS0FBSyxDQUFDblEsTUFBTixHQUFlc1IsNEVBQWlCLENBQUNkLEVBQUQsQ0FBaEMsR0FBdUNBLEVBQTlDO0FBQ0Q7O0FBRUQsU0FBU0QsVUFBVCxDQUFvQnZQLE1BQXBCLEVBQTRCb1AsU0FBNUIsRUFBdUM7QUFDckM7QUFDQSxRQUFNO0FBQUUvUDtBQUFGLE1BQVdXLE1BQWpCO0FBQ0EsUUFBTXVRLFFBQVEsR0FBRzNDLGFBQWEsRUFBOUI7QUFDQSxNQUFJekssR0FBSjtBQUNBLFdBQWtCM0csT0FBbEIsRUFBQWdVLFVBQVUsQ0FBQ25SLElBQUQsQ0FBVixFQUEyQkMsR0FBRCxJQUFTO0FBQ2pDNkQsT0FBRyxHQUFHOUQsSUFBSSxDQUFDQyxHQUFELENBQVY7O0FBQ0EsWUFBUUEsR0FBUjtBQUNBLFdBQUssT0FBTCxDQURBLENBQ2M7O0FBQ2QsV0FBSyxjQUFMO0FBQXFCO0FBQ25CQSxXQUFHLElBQUksR0FBUDtBQUNBOztBQUNGLFdBQUssU0FBTCxDQUxBLENBS2dCOztBQUNoQixXQUFLLFNBQUw7QUFBZ0I7QUFDZEEsV0FBRyxJQUFJLEdBQVA7QUFDQTZELFdBQUcsR0FBR3NOLDREQUFVLENBQUMsRUFBRCxFQUFLdE4sR0FBTCxDQUFoQjtBQUNBOztBQUNGO0FBVkE7O0FBWUFvTixZQUFRLENBQUNqUixHQUFELENBQVIsR0FBZ0I2RCxHQUFoQjtBQUNELEdBZkQ7QUFnQkEsV0FNRzNHLE9BTkgsR0FDRSxhQURGLEVBRUUsTUFGRixFQUdFLFdBSEYsRUFJRSxPQUpGLEVBS0UsU0FMRixHQU1ZOEMsR0FBRCxJQUFTO0FBQ2xCLFFBQUksQ0FBQ2lSLFFBQVEsQ0FBQ2pSLEdBQUQsQ0FBYixFQUFvQmlSLFFBQVEsQ0FBQ2pSLEdBQUQsQ0FBUixHQUFnQixFQUFoQjtBQUNyQixHQVJEO0FBU0E2RCxLQUFHLEdBQUdxTixVQUFVLENBQUNwQixTQUFELENBQWhCO0FBQ0EsV0FBSzVTLE9BQUwsRUFBQTJHLEdBQUcsRUFBVSxDQUFDakQsSUFBRCxFQUFPckQsQ0FBUCxLQUFhO0FBQ3hCc0csT0FBRyxDQUFDdEcsQ0FBRCxDQUFILEdBQVM7QUFBRXFELFVBQUY7QUFBUUssU0FBRyxFQUFFNk8sU0FBUyxDQUFDbFAsSUFBRDtBQUF0QixLQUFUO0FBQ0QsR0FGRSxDQUFIO0FBR0FxUSxVQUFRLENBQUNuQixTQUFULEdBQXFCak0sR0FBckI7QUFDQW9OLFVBQVEsQ0FBQ0csTUFBVCxHQUFrQixLQUFsQixDQW5DcUMsQ0FtQ1o7O0FBQ3pCLFNBQU87QUFDTEMsUUFBSSxFQUFFM1EsTUFBTSxDQUFDRyxLQUFQLENBQWF3USxJQURkO0FBRUxDLGlCQUFhLEVBQUU1USxNQUFNLENBQUM2USxPQUZqQjtBQUdMQyxvQkFBZ0IsRUFBRSxDQUFDLENBQUM5USxNQUFNLENBQUMrUSxNQUFQLENBQWNDLFlBSDdCO0FBSUxDLGlCQUFhLEVBQUUsZUFKVjtBQUtMQyxXQUFPLEVBQUVqRSxXQUxKO0FBTUxrRSxjQUFVLEVBQUV0RSwrQ0FBTSxDQUFDdUUsSUFOZDtBQU9MQyxZQUFRLEVBQUVsRyxNQUFNLENBQUMsRUFBRCxFQUFLMEIsK0NBQU0sQ0FBQ3lFLEVBQVosQ0FQWDtBQVFMdFIsVUFBTSxFQUFFdVE7QUFSSCxHQUFQO0FBVUQ7O0FBRUQsU0FBU0Ysa0JBQVQsQ0FBNEJrQixRQUE1QixFQUFzQ3ZELE9BQXRDLEVBQStDd0QsT0FBL0MsRUFBd0Q7QUFDdEQ7QUFDQSxTQUFPRCxRQUFRLEtBQUt2QyxLQUFLLENBQUN5QyxNQUFuQixHQUE0QkYsUUFBNUIsR0FBdUN2QixTQUFTLENBQ3JEd0IsT0FBTyxHQUNGLE9BQU8sR0FBRzNNLElBQVYsS0FBbUIsU0FBVVEsS0FBVixFQUFBa00sUUFBUSxFQUFRdkQsT0FBUixFQUFpQm5KLElBQWpCLENBRHpCLEdBRUgsU0FBVTZNLElBQVYsRUFBQUgsUUFBUSxFQUFPdkQsT0FBUCxDQUh5QyxDQUF2RDtBQUtELEM7Ozs7Ozs7Ozs7OztBQ3RJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTbUMsU0FBVCxHQUFxQjtBQUMxQixTQUFPO0FBQ0w1VSxhQUFTLEVBQUUsSUFETjs7QUFFTG9XLHdCQUFvQixDQUFDclMsR0FBRCxFQUFNeU8sRUFBTixFQUFVO0FBQzVCLGFBQU82RCxXQUFXLENBQUM1VyxvR0FBRCxFQUFnQnNFLEdBQWhCLEVBQXFCeU8sRUFBckIsQ0FBbEI7QUFDRCxLQUpJOztBQUtMOEQsMkJBQXVCLENBQUNDLFVBQUQsRUFBYTtBQUNsQyxhQUFPQyxjQUFjLENBQUMvVyxvR0FBRCxFQUFnQjhXLFVBQWhCLENBQXJCO0FBQ0QsS0FQSTs7QUFRTEUsc0JBQWtCLENBQUMxUyxHQUFELEVBQU0yUyxLQUFOLEVBQWE7QUFBQTs7QUFDN0IsWUFBTTdWLEtBQUssNEJBQUc4VixzREFBVyxDQUFDbFgsb0dBQUQsQ0FBZCxxQkFBRyxzQkFBNkJzRSxHQUE3QixDQUFkO0FBQ0EsVUFBSSxDQUFDbEQsS0FBTCxFQUFZO0FBQ1osZUFBcUJJLE9BQXJCLEVBQUEyVixZQUFZLENBQUMvVixLQUFELENBQVosRUFBNkIyUixFQUFFLElBQUk7QUFDakMsWUFBSTtBQUNGQSxZQUFFLENBQUN6TyxHQUFELEVBQU0yUyxLQUFOLENBQUY7QUFDRCxTQUZELENBRUUsT0FBT3RULENBQVAsRUFBVTtBQUNWeVQsYUFBRyxDQUFDLE9BQUQsRUFBVSxDQUFDLG9CQUFELEVBQXVCLFVBQXZCLENBQVYsRUFBOEN6VCxDQUE5QyxDQUFIO0FBQ0Q7QUFDRixPQU5EO0FBT0QsS0FsQkk7O0FBbUJMMFQsWUFBUSxDQUFDL1MsR0FBRCxFQUFNeU8sRUFBTixFQUFVO0FBQUE7O0FBQ2hCLFlBQU0zUixLQUFLLDZCQUFHOFYsc0RBQVcsQ0FBQ2xYLG9HQUFELENBQWQscUJBQUcsdUJBQTZCc0UsR0FBN0IsQ0FBZDtBQUNBLFVBQUlsRCxLQUFKLEVBQVcsTUFBTyxpQkFBZ0JrRCxHQUFJLEVBQTNCO0FBQ1hzUyxpQkFBVyxDQUFDNVcsb0dBQUQsRUFBZ0JzRSxHQUFoQixFQUFxQnlPLEVBQXJCLENBQVg7QUFDRCxLQXZCSTs7QUF3Qkx1RSxlQUFXLENBQUNoVCxHQUFELEVBQU1pVCxHQUFOLEVBQVc7QUFBQTs7QUFDcEIsWUFBTW5XLEtBQUssNkJBQUc4VixzREFBVyxDQUFDbFgsb0dBQUQsQ0FBZCxxQkFBRyx1QkFBNkJzRSxHQUE3QixDQUFkO0FBQ0EsVUFBSSxDQUFDbEQsS0FBTCxFQUFZLE1BQU8sZUFBY2tELEdBQUksRUFBekI7QUFDWixZQUFNeU8sRUFBRSxHQUFHM1IsS0FBSyxDQUFDb1UsVUFBVSxDQUFDcFUsS0FBRCxDQUFWLENBQWtCLENBQWxCLENBQUQsQ0FBaEI7QUFDQSxhQUFPMlIsRUFBRSxDQUFDd0UsR0FBRCxDQUFUO0FBQ0QsS0E3Qkk7O0FBOEJMQyxrQkFBYyxDQUFDbFQsR0FBRCxFQUFNO0FBQ2xCLFlBQU07QUFBRWM7QUFBRixVQUFTLElBQWY7QUFDQSxZQUFNaUUsTUFBTSxHQUFHb08sNkRBQVUsQ0FBQ3JTLEVBQUQsQ0FBekI7QUFDQSxZQUFNc1MsTUFBTSxHQUFHck8sTUFBTSxDQUFDL0UsR0FBRCxDQUFyQjtBQUNBLGFBQU8rRSxNQUFNLENBQUMvRSxHQUFELENBQWIsQ0FKa0IsQ0FLbEI7O0FBQ0FxVCxrRUFBUyxDQUFDdlMsRUFBRCxFQUFLZCxHQUFMLEVBQVU4TCxTQUFWLEVBQXFCLElBQXJCLEVBQTJCc0gsTUFBM0IsRUFBbUMsSUFBbkMsQ0FBVDtBQUNELEtBckNJOztBQXNDTEUsZUFBVyxDQUFDdFQsR0FBRCxFQUFNd0QsR0FBTixFQUFXO0FBQ3BCLFlBQU0rUCxHQUFHLEdBQUdKLDZEQUFVLENBQUMsS0FBS3JTLEVBQU4sQ0FBVixDQUFvQmQsR0FBcEIsQ0FBWjtBQUNBLGFBQU91VCxHQUFHLEdBQUdDLDhEQUFXLENBQUNELEdBQUQsQ0FBZCxHQUFzQi9QLEdBQWhDO0FBQ0QsS0F6Q0k7O0FBMENMaVEsaUJBQWEsR0FBRztBQUNkLGFBQU92QyxVQUFVLENBQUNpQyw2REFBVSxDQUFDLEtBQUtyUyxFQUFOLENBQVgsQ0FBakI7QUFDRCxLQTVDSTs7QUE2Q0w0UyxlQUFXLENBQUMxVCxHQUFELEVBQU02RCxHQUFOLEVBQVc7QUFDcEIsWUFBTTtBQUFFL0M7QUFBRixVQUFTLElBQWY7QUFDQSxZQUFNeVMsR0FBRyxHQUFHOUcsNkRBQWUsQ0FBQzVJLEdBQUQsRUFBTTZJLGtEQUFOLENBQWYsSUFBa0MsSUFBOUM7QUFDQSxZQUFNM0gsTUFBTSxHQUFHb08sNkRBQVUsQ0FBQ3JTLEVBQUQsQ0FBekI7QUFDQSxZQUFNc1MsTUFBTSxHQUFHck8sTUFBTSxDQUFDL0UsR0FBRCxDQUFyQjtBQUNBK0UsWUFBTSxDQUFDL0UsR0FBRCxDQUFOLEdBQWN1VCxHQUFkO0FBQ0FGLGtFQUFTLENBQUN2UyxFQUFELEVBQUtkLEdBQUwsRUFBVTZELEdBQVYsRUFBZTBQLEdBQWYsRUFBb0JILE1BQXBCLEVBQTRCLElBQTVCLENBQVQ7QUFDRCxLQXBESTs7QUFxREw7Ozs7Ozs7O0FBT0E7Ozs7O0FBS0FPLDZCQUF5QixDQUFDM1QsR0FBRCxFQUFNeU8sRUFBTixFQUFVO0FBQ2pDLGFBQU82RCxXQUFXLENBQUMsS0FBS3hSLEVBQU4sRUFBVWQsR0FBVixFQUFleU8sRUFBZixDQUFsQjtBQUNELEtBbkVJOztBQW9FTDs7O0FBR0FtRixnQ0FBNEIsQ0FBQ3BCLFVBQUQsRUFBYTtBQUN2QyxhQUFPQyxjQUFjLENBQUMsS0FBSzNSLEVBQU4sRUFBVTBSLFVBQVYsQ0FBckI7QUFDRCxLQXpFSTs7QUEwRUxxQixzQkFBa0IsQ0FBQ2pULElBQUQsRUFBTztBQUN2QixhQUFPa1QsV0FBVyxDQUFDLElBQUQsRUFBT2xULElBQVAsQ0FBbEI7QUFDRCxLQTVFSTs7QUE2RUxtVCxxQkFBaUIsQ0FBQ25ULElBQUQsRUFBTztBQUN0QixhQUFPa1QsV0FBVyxDQUFDLElBQUQsRUFBT2xULElBQVAsRUFBYSxJQUFiLENBQWxCO0FBQ0QsS0EvRUk7O0FBZ0ZMb1QsMEJBQXNCLENBQUNDLEdBQUQsRUFBTTFQLElBQU4sRUFBWTtBQUNoQyxZQUFNO0FBQUV6RDtBQUFGLFVBQVMsSUFBZjtBQUNBLFlBQU1kLEdBQUcsR0FBSSxHQUFFYyxFQUFHLElBQUdtVCxHQUFJLEVBQXpCO0FBQ0FDLG9EQUFLLENBQUNDLFFBQU4sQ0FBZW5VLEdBQWYsSUFBc0J1RSxJQUF0QjtBQUNBZ0oscURBQU0sQ0FBQ1MsSUFBUCxDQUFZLGNBQVosRUFBNEI7QUFBRWxOLFVBQUY7QUFBTW1UO0FBQU4sT0FBNUIsRUFBeUMsSUFBekM7QUFDQSxhQUFPQSxHQUFQO0FBQ0QsS0F0Rkk7O0FBdUZMRyw0QkFBd0IsQ0FBQ0gsR0FBRCxFQUFNO0FBQzVCLFlBQU07QUFBRW5UO0FBQUYsVUFBUyxJQUFmO0FBQ0EsWUFBTWQsR0FBRyxHQUFJLEdBQUVjLEVBQUcsSUFBR21ULEdBQUksRUFBekI7QUFDQSxhQUFPQyw4Q0FBSyxDQUFDQyxRQUFOLENBQWVuVSxHQUFmLENBQVA7QUFDQXVOLHFEQUFNLENBQUNTLElBQVAsQ0FBWSxnQkFBWixFQUE4QjtBQUFFbE4sVUFBRjtBQUFNbVQ7QUFBTixPQUE5QixFQUEyQyxJQUEzQztBQUNELEtBNUZJOztBQTZGTEksZUFBVyxDQUFDQyxJQUFELEVBQU8xVCxJQUFQLEVBQWE7QUFDdEI7QUFDQSxZQUFNMlQsSUFBSSxHQUFHakcsYUFBYSxFQUExQjtBQUNBLFVBQUlsRyxNQUFKOztBQUNBLFVBQUlvTSxRQUFRLENBQUNGLElBQUQsQ0FBWixFQUFvQjtBQUNsQkMsWUFBSSxDQUFDdFQsR0FBTCxHQUFXcVQsSUFBWDtBQUNBQyxZQUFJLENBQUMzVCxJQUFMLEdBQVlBLElBQVo7QUFDRCxPQUhELE1BR08sSUFBSTBULElBQUosRUFBVTtBQUNmMVQsWUFBSSxHQUFHMFQsSUFBSSxDQUFDMVQsSUFBWjtBQUNBd0gsY0FBTSxHQUFHa00sSUFBSSxDQUFDbE0sTUFBZDtBQUNBLGlCQUFNcU0sWUFBTixFQUFBRixJQUFJLEVBQWVELElBQWYsRUFBcUIsQ0FDdkIsS0FEdUIsRUFFdkIsU0FGdUIsRUFHdkIsU0FIdUIsRUFJdkIsU0FKdUIsRUFLdkIsWUFMdUIsRUFNdkIsV0FOdUIsQ0FBckIsQ0FBSjtBQVFEOztBQUNELFVBQUksQ0FBQzFULElBQUQsSUFBUyxDQUFDNFQsUUFBUSxDQUFDNVQsSUFBRCxDQUF0QixFQUE4QjtBQUM1QixjQUFNLElBQUk4VCxTQUFKLENBQWMsdURBQWQsQ0FBTjtBQUNEOztBQUNEN0ksWUFBTSxDQUFDMEksSUFBRCxFQUFPO0FBQ1hJLGNBQU0sRUFBRSxLQURHO0FBRVhqSyxvQkFBWSxFQUFFLE1BRkg7QUFHWGtLLHdCQUFnQixFQUFFLDBCQUhQO0FBSVg7QUFDQXhNLGNBQU0sRUFBRXlNLFVBQVUsQ0FBQ3pNLE1BQUQsQ0FBVixHQUFxQkEsTUFBckIsR0FBK0IsTUFBTSxDQUFFO0FBTHBDLE9BQVAsQ0FBTjtBQU9BLGFBQU8wTSxpRUFBZSxDQUFDUCxJQUFELEVBQU8sSUFBUCxFQUFhM1QsSUFBYixDQUF0QjtBQUNELEtBM0hJOztBQTRITG1VLHFCQUFpQixDQUFDUixJQUFELEVBQU87QUFDdEIsYUFBT08saUVBQWUsQ0FBQ1AsSUFBRCxFQUFPLElBQVAsQ0FBdEI7QUFDRCxLQTlISTs7QUErSEw7Ozs7Ozs7QUFPQVMsaUJBQWEsQ0FBQ0MsTUFBRCxFQUFTQyxHQUFULEVBQWNDLFVBQWQsRUFBMEI7QUFDckMsYUFBT1gsUUFBUSxDQUFDUyxNQUFELENBQVIsR0FDSEcsYUFBYSxDQUFDLElBQUQsRUFBT0gsTUFBUCxFQUFlQyxHQUFmLEVBQW9CLElBQXBCLENBRFYsR0FFSEUsYUFBYSxDQUFDSCxNQUFELEVBQVNDLEdBQVQsRUFBY0MsVUFBZCxFQUEwQixJQUExQixDQUZqQjtBQUdELEtBMUlJOztBQTJJTDs7Ozs7QUFLQUUsZUFBVyxDQUFDQyxHQUFELEVBQU07QUFDZixhQUFPRixhQUFhLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0I7QUFBRUcsbUJBQVcsRUFBRUQsR0FBZjtBQUFvQnhVLFVBQUUsRUFBRWlPLGFBQWEsQ0FBQyxNQUFEO0FBQXJDLE9BQWhCLEVBQWlFLElBQWpFLENBQXBCO0FBQ0QsS0FsSkk7O0FBbUpMeUcsZ0JBQVksQ0FBQ3ZVLEdBQUQsRUFBTXJELE9BQU4sRUFBZTtBQUN6QixhQUFPNlgseURBQVcsQ0FDaEJDLFFBQVEsQ0FBQzlYLE9BQUQsQ0FBUixHQUNJaU8sTUFBTSxDQUFDeUMsYUFBYSxFQUFkLEVBQWtCMVEsT0FBbEIsRUFBMkI7QUFBRXFEO0FBQUYsT0FBM0IsQ0FEVixHQUVJO0FBQUVvQixjQUFNLEVBQUUsQ0FBQ3pFLE9BQVg7QUFBb0JxRDtBQUFwQixPQUhZLEVBSWhCLElBSmdCLENBQWxCO0FBTUQsS0ExSkk7O0FBMkpMMFUsbUJBQWUsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWNDLEtBQWQsRUFBcUJDLE9BQXJCLEVBQThCO0FBQzNDLFlBQU1uWSxPQUFPLEdBQUc4WCxRQUFRLENBQUNFLElBQUQsQ0FBUixHQUFpQkEsSUFBakIsR0FBd0I7QUFDdEMzWixpQkFBUyxFQUFFLElBRDJCO0FBRXRDMlosWUFGc0M7QUFHdENDLGFBSHNDO0FBSXRDQyxhQUpzQztBQUt0Q0M7QUFMc0MsT0FBeEM7O0FBT0EsVUFBSSxDQUFDblksT0FBTyxDQUFDZ1ksSUFBYixFQUFtQjtBQUNqQixjQUFNLElBQUlsQixTQUFKLENBQWMsc0NBQWQsQ0FBTjtBQUNEOztBQUNELFlBQU01VCxFQUFFLEdBQUdrViwyRUFBb0IsQ0FBQ3BZLE9BQUQsRUFBVSxJQUFWLENBQS9CO0FBQ0EsYUFBTztBQUNMcVksY0FBTSxFQUFFdkYsU0FBUyxDQUFDLE1BQU1uRCwrQ0FBTSxDQUFDckMsSUFBUCxDQUFZLG9CQUFaLEVBQWtDcEssRUFBbEMsRUFBc0MsSUFBdEMsQ0FBUDtBQURaLE9BQVA7QUFHRCxLQTFLSTs7QUEyS0xvVixtQkFBZSxDQUFDbFosSUFBRCxFQUFPbVosSUFBUCxFQUFhO0FBQzFCNUkscURBQU0sQ0FBQ1MsSUFBUCxDQUFZLGNBQVosRUFBNEI7QUFBRWhSLFlBQUY7QUFBUW1aO0FBQVIsT0FBNUIsRUFBNEMsSUFBNUM7QUFDRCxLQTdLSTs7QUE4S0w7QUFDQWhFLFVBQU0sRUFBRWlFLE9BQU8sQ0FBQ3REO0FBL0tYLEdBQVA7QUFpTEQ7O0FBRUQsU0FBU1IsV0FBVCxDQUFxQnhSLEVBQXJCLEVBQXlCZCxHQUF6QixFQUE4QnlPLEVBQTlCLEVBQWtDO0FBQ2hDLE1BQUksQ0FBQytGLFFBQVEsQ0FBQ3hVLEdBQUQsQ0FBYixFQUFvQkEsR0FBRyxHQUFJLEdBQUVBLEdBQUksRUFBYjtBQUNwQixNQUFJLENBQUM2VSxVQUFVLENBQUNwRyxFQUFELENBQWYsRUFBcUI7QUFDckIsUUFBTTNSLEtBQUssR0FBR3VaLGdCQUFnQixDQUFDekQsc0RBQUQsRUFBYzlSLEVBQWQsRUFBa0JkLEdBQWxCLENBQTlCO0FBQ0EsUUFBTXpDLENBQUMsR0FBRyxTQUFxQkMsT0FBckIsRUFBQXFWLFlBQVksQ0FBQy9WLEtBQUQsQ0FBWixFQUE2QjJSLEVBQTdCLENBQVY7QUFDQSxNQUFJK0QsVUFBVSxHQUFHalYsQ0FBQyxJQUFJLENBQUwsSUFBVTJULFVBQVUsQ0FBQ3BVLEtBQUQsQ0FBVixDQUFrQlMsQ0FBbEIsQ0FBM0I7O0FBQ0EsTUFBSSxDQUFDaVYsVUFBTCxFQUFpQjtBQUNmQSxjQUFVLEdBQUd6RCxhQUFhLENBQUMsTUFBRCxDQUExQjtBQUNBalMsU0FBSyxDQUFDMFYsVUFBRCxDQUFMLEdBQW9CL0QsRUFBcEI7QUFDRDs7QUFDRCxTQUFPK0QsVUFBUDtBQUNEOztBQUVELFNBQVNDLGNBQVQsQ0FBd0IzUixFQUF4QixFQUE0QjBSLFVBQTVCLEVBQXdDO0FBQ3RDLFFBQU04RCxRQUFRLEdBQUcxRCxzREFBVyxDQUFDOVIsRUFBRCxDQUE1QjtBQUNBLE1BQUksQ0FBQ3dWLFFBQUwsRUFBZTs7QUFDZixPQUFLLE1BQU10VyxHQUFYLElBQWtCc1csUUFBbEIsRUFBNEI7QUFBRTtBQUFtQjtBQUMvQyxVQUFNeFosS0FBSyxHQUFHd1osUUFBUSxDQUFDdFcsR0FBRCxDQUF0Qjs7QUFDQSxRQUFJd1MsVUFBVSxJQUFJMVYsS0FBbEIsRUFBeUI7QUFDdkIsYUFBT0EsS0FBSyxDQUFDMFYsVUFBRCxDQUFaO0FBQ0EsVUFBSXRJLHFEQUFPLENBQUNwTixLQUFELENBQVgsRUFBb0IsT0FBT3daLFFBQVEsQ0FBQ3RXLEdBQUQsQ0FBZjtBQUNwQjtBQUNEO0FBQ0Y7O0FBQ0QsTUFBSWtLLHFEQUFPLENBQUNvTSxRQUFELENBQVgsRUFBdUIsT0FBTzFELHNEQUFXLENBQUM5UixFQUFELENBQWxCO0FBQ3hCOztBQUVELFNBQVNzVSxhQUFULENBQXVCSCxNQUF2QixFQUErQkMsR0FBL0IsRUFBb0NxQixLQUFwQyxFQUEyQzdILE9BQTNDLEVBQW9EO0FBQ2xELE1BQUk4SCxFQUFKO0FBQ0EsTUFBSUMsU0FBSjtBQUNBbEosaURBQU0sQ0FBQ3NCLFFBQVAsQ0FBZ0IsWUFBaEIsRUFBOEI7QUFBRXFHLE9BQUY7QUFBT3FCO0FBQVAsR0FBOUIsRUFBOEM3SCxPQUE5QyxFQUF1RHVHLE1BQXZELEVBQStELFNBQVN5QixDQUFULENBQVdoVCxHQUFYLEVBQWdCO0FBQzdFOFMsTUFBRSxHQUFHLElBQUw7QUFDQUMsYUFBUyxHQUFHL1MsR0FBWjtBQUNELEdBSEQsRUFHRyxNQUhILEVBSGtELENBT2xEOztBQUNBLE1BQUkrUyxTQUFKLEVBQWU7QUFDYixVQUFNRSxHQUFHLEdBQUcsSUFBSWpDLFNBQUosQ0FBYytCLFNBQVMsQ0FBQyxDQUFELENBQXZCLENBQVo7QUFDQUUsT0FBRyxDQUFDQyxLQUFKLElBQWMsS0FBSUgsU0FBUyxDQUFDLENBQUQsQ0FBSSxFQUEvQjtBQUNBLFVBQU1FLEdBQU47QUFDRDtBQUNEOzs7Ozs7QUFJQSxTQUFPM0gsVUFBVSxDQUFDd0gsRUFBRCxFQUFLLE1BQUwsRUFBYSxNQUFNclosRUFBTixJQUM1QjtBQUNBLFNBQU9xWixFQUFFLENBQUNoWSxJQUFWLENBQ0E7QUFEQSxNQUVJcVcsVUFBVSxDQUFDMVgsRUFBRCxDQUFWLEdBQWlCQSxFQUFFLENBQUNxWixFQUFELENBQW5CLEdBQTBCQSxFQUY5QixDQUZlLENBQWpCO0FBTUQ7O0FBRUQsU0FBUzFDLFdBQVQsQ0FBcUJwRixPQUFyQixFQUE4QjlOLElBQTlCLEVBQW9DaVcsTUFBcEMsRUFBNEM7QUFDMUMsUUFBTTtBQUFFL1YsTUFBRjtBQUFNaVAsWUFBTjtBQUFnQkQ7QUFBaEIsTUFBOEJwQixPQUFwQztBQUNBLFFBQU0xTyxHQUFHLEdBQUc4UCxTQUFTLENBQUNsUCxJQUFELENBQXJCOztBQUNBLE1BQUlaLEdBQUosRUFBUztBQUNQLFFBQUkwRCxHQUFHLEdBQUdxTSxRQUFRLENBQUMvUCxHQUFELENBQWxCOztBQUNBLFFBQUksQ0FBQzBELEdBQUwsRUFBVTtBQUNSNkoscURBQU0sQ0FBQ3NCLFFBQVAsQ0FBZ0IsYUFBaEIsRUFBK0I7QUFBRS9OLFVBQUY7QUFBTStWLGNBQU47QUFBYzdXO0FBQWQsT0FBL0IsRUFBb0QwTyxPQUFwRCxFQUE2RCxJQUE3RCxFQUFtRTdELFFBQVEsSUFBSTtBQUM3RW5ILFdBQUcsR0FBR21ILFFBQU47QUFDRCxPQUZEOztBQUdBLFVBQUluSCxHQUFHLEtBQUssSUFBUixJQUFnQm1ULE1BQXBCLEVBQTRCO0FBQzFCblQsV0FBRyxHQUFHb1QsZUFBZSxDQUFDcFQsR0FBRCxDQUFyQjtBQUNEOztBQUNEcU0sY0FBUSxDQUFDL1AsR0FBRCxDQUFSLEdBQWdCMEQsR0FBaEI7QUFDRDs7QUFDRCxXQUFPQSxHQUFHLEtBQUssSUFBUixHQUFlMUQsR0FBZixHQUFxQjBELEdBQTVCO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7QUNuUUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQSxNQUFNcVQsWUFBWSxHQUFHL1csR0FBRyxJQUFJQSxHQUFHLElBQUksQ0FBUCxJQUFZQSxHQUFHLElBQUksVUFBbkIsSUFBa0NBLEdBQUcsS0FBTSxHQUFFLENBQUNBLEdBQUksRUFBOUU7O0FBQ0EsTUFBTWdYLFFBQVEsR0FBR0MsVUFBVSxDQUFDQyxXQUE1QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0MsNERBQVUsRUFBaEM7O0FBQ0EsTUFBTUMsVUFBVSxHQUFJLFNBQVNDLGNBQVQsR0FBMEI7QUFDNUMsUUFBTUMsZ0JBQWdCLEdBQUcsaUJBQXpCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxtQkFBbUIsQ0FBQ3BaLE1BQUQsQ0FBakMsQ0FGNEMsQ0FHNUM7O0FBQ0EsTUFBSXFaLEVBQUUsR0FBRyxDQUFDQyxVQUFWO0FBQ0EsV0FBT3phLE9BQVAsRUFBQXNhLEtBQUssRUFBVXhYLEdBQUcsSUFBSTtBQUNwQixRQUFJK1csWUFBWSxDQUFDL1csR0FBRCxDQUFoQixFQUF1QjtBQUNyQjBYLFFBQUUsR0FBRyxLQUFMO0FBQ0QsS0FGRCxNQUVPO0FBQ0xQLG1CQUFhLENBQUNTLEdBQWQsQ0FBa0I1WCxHQUFsQjtBQUNEO0FBQ0YsR0FOSSxDQUFMO0FBT0E7OztBQUVBLE1BQUl6RCxNQUFNLEtBQUs4QixNQUFmLEVBQXVCO0FBQ3JCLGFBQTZCbkIsT0FBN0IsRUFBQXVhLG1CQUFtQixDQUFDbGIsTUFBRCxDQUFuQixFQUFxQ3lELEdBQUcsSUFBSTtBQUMxQyxVQUFJLENBQUMrVyxZQUFZLENBQUMvVyxHQUFELENBQWpCLEVBQXdCO0FBQ3RCbVgscUJBQWEsQ0FBQ1MsR0FBZCxDQUFrQjVYLEdBQWxCO0FBQ0EwWCxVQUFFLEdBQUcsS0FBTDtBQUNEO0FBQ0YsS0FMRDtBQU1ELEdBckIyQyxDQXNCNUM7OztBQUNBLE1BQUlDLFVBQVUsSUFDVHBLLCtDQUFNLENBQUN1RSxJQUFQLEtBQWdCaFcsb0RBRGpCLElBRUN5YixnQkFBZ0IsSUFBSWhiLE1BRnJCLElBR0MsQ0FBQzRhLGFBQWEsQ0FBQ1UsR0FBZCxDQUFrQk4sZ0JBQWxCLENBSE4sRUFHMkM7QUFDekNKLGlCQUFhLENBQUNTLEdBQWQsQ0FBa0JMLGdCQUFsQjtBQUNBLFFBQUlHLEVBQUosRUFBUTFJLFVBQVUsQ0FBQ3dJLEtBQUQsRUFBUUEsS0FBSyxDQUFDOVgsTUFBZCxFQUFzQjZYLGdCQUF0QixDQUFWO0FBQ1Q7O0FBQ0QsU0FBT0csRUFBRSxHQUFHRixLQUFILEdBQVdMLGFBQWEsQ0FBQ1csT0FBZCxFQUFwQjtBQUNELENBL0JtQixFQUFwQjs7QUFnQ0EsTUFBTUMsYUFBYSxHQUFHekosYUFBYSxFQUFuQztBQUNBOztBQUNBLE1BQU0wSixZQUFZLEdBQUc7QUFDbkIvYixXQUFTLEVBQUUsSUFEUTtBQUVuQmdjLGtCQUFnQixFQUFFLENBRkM7QUFHbkJDLFFBQU0sRUFBRSxDQUhXO0FBSW5CQyxRQUFNLEVBQUUsQ0FKVztBQUtuQkMscUJBQW1CLEVBQUUsQ0FMRjtBQU1uQkMsUUFBTSxFQUFFLENBTlc7QUFPbkJDLGdCQUFjLEVBQUUsQ0FQRztBQVFuQkMsY0FBWSxFQUFFLENBUks7QUFTbkJDLFNBQU8sRUFBRSxDQVRVO0FBVW5CQyxXQUFTLEVBQUUsQ0FWUTtBQVduQkMsaUJBQWUsRUFBRSxDQVhFO0FBWW5CQyxjQUFZLEVBQUUsQ0FaSztBQWFuQkMsaUJBQWUsRUFBRSxDQWJFO0FBY25CQyxpQkFBZSxFQUFFLENBZEU7QUFlbkIzWSxXQUFTLEVBQUUsQ0FmUTtBQWdCbkI0WSxnQkFBYyxFQUFFLENBaEJHO0FBaUJuQkMsaUJBQWUsRUFBRSxDQWpCRTtBQWtCbkJDLFlBQVUsRUFBRSxDQWxCTztBQW1CbkJDLGNBQVksRUFBRTtBQW5CSyxDQUFyQjtBQXFCQTs7QUFDQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJqZCxXQUFTLEVBQUUsSUFEUTtBQUVuQmtkLFVBQVEsRUFBRSxDQUZTO0FBR25CQyxLQUFHLEVBQUUsQ0FIYztBQUluQm5NLFVBQVEsRUFBRSxDQUpTO0FBS25Cb00sVUFBUSxFQUFFLENBTFM7QUFNbkJDLEtBQUcsRUFBRSxDQU5jO0FBT25CeE4sV0FBUyxFQUFFLENBUFE7QUFRbkJ6TixRQUFNLEVBQUU7QUFSVyxDQUFyQjtBQVVBOztBQUNBLE1BQU1rYixLQUFLLEdBQUc3SSxTQUFkLEMsQ0FBeUI7O0FBQ3pCLE1BQU04SSxZQUFZLEdBQUc7QUFDbkJ2ZCxXQUFTLEVBQUUsSUFEUTtBQUVuQndkLGtCQUFnQixFQUFFRixLQUZDO0FBR25CRyxPQUFLLEVBQUVILEtBSFk7QUFJbkJJLFVBQVEsRUFBRUosS0FKUztBQUtuQkssTUFBSSxFQUFFTCxLQUxhO0FBTW5CTSxNQUFJLEVBQUVOLEtBTmE7QUFPbkJPLHNCQUFvQixFQUFFUCxLQVBIO0FBUW5CUSxvQkFBa0IsRUFBRVIsS0FSRDtBQVNuQlMsZUFBYSxFQUFFVCxLQVRJO0FBVW5CVSxlQUFhLEVBQUVWLEtBVkk7QUFXbkJXLGNBQVksRUFBRVgsS0FYSztBQVluQjlJLE9BQUssRUFBRThJLEtBWlk7QUFhbkJZLFNBQU8sRUFBRVosS0FiVTtBQWNuQmEsbUJBQWlCLEVBQUViLEtBZEE7QUFlbkJjLGVBQWEsRUFBRWQsS0FmSTtBQWdCbkJlLE1BQUksRUFBRWYsS0FoQmE7QUFpQm5CdE4sT0FBSyxFQUFFc04sS0FqQlk7QUFrQm5CaFosTUFBSSxFQUFFZ1osS0FsQmE7QUFtQm5CM0ksT0FBSyxFQUFFMkksS0FuQlk7QUFvQm5CZ0Isa0JBQWdCLEVBQUVoQixLQXBCQztBQXFCbkJpQix5QkFBdUIsRUFBRWpCLEtBckJOO0FBc0JuQmtCLGNBQVksRUFBRWxCLEtBdEJLO0FBdUJuQm1CLFlBQVUsRUFBRW5CLEtBdkJPO0FBd0JuQm9CLFFBQU0sRUFBRXBCLEtBeEJXO0FBeUJuQnFCLFFBQU0sRUFBRXJCLEtBekJXO0FBMEJuQjVPLE1BQUksRUFBRTRPLEtBMUJhO0FBMkJuQnNCLGNBQVksRUFBRXRCLEtBM0JLO0FBNEJuQnVCLGFBQVcsRUFBRXZCLEtBNUJNO0FBNkJuQndCLE9BQUssRUFBRXhCLEtBN0JZO0FBOEJuQnlCLFFBQU0sRUFBRXpCLEtBOUJXO0FBK0JuQjBCLGdCQUFjLEVBQUUxQixLQS9CRztBQWdDbkIyQixlQUFhLEVBQUUzQixLQWhDSTtBQWlDbkI0QixxQkFBbUIsRUFBRTVCLEtBakNGO0FBa0NuQjZCLHVCQUFxQixFQUFFN0IsS0FsQ0o7QUFtQ25COEIscUJBQW1CLEVBQUU5QixLQW5DRjtBQW9DbkIrQixVQUFRLEVBQUUvQixLQXBDUztBQXFDbkJnQyxVQUFRLEVBQUVoQyxLQXJDUztBQXNDbkJpQyxRQUFNLEVBQUVqQyxLQXRDVztBQXVDbkJrQyxVQUFRLEVBQUVsQyxLQXZDUztBQXdDbkJtQyxlQUFhLEVBQUVuQyxLQXhDSTtBQXlDbkJvQyxlQUFhLEVBQUVwQyxLQXpDSTtBQTBDbkJxQyxVQUFRLEVBQUVyQyxLQTFDUztBQTJDbkJzQyxhQUFXLEVBQUV0QyxLQTNDTTtBQTRDbkJ1QyxjQUFZLEVBQUV2QyxLQTVDSztBQTZDbkIxVyxZQUFVLEVBQUUwVyxLQTdDTztBQThDbkJ3QyxlQUFhLEVBQUV4QyxLQTlDSTtBQStDbkJ5QyxNQUFJLEVBQUV6QyxLQS9DYTtBQWdEbkIwQyxnQkFBYyxFQUFFMUMsS0FoREc7QUFpRG5CMkMsNEJBQTBCLEVBQUUzQyxLQWpEVDtBQWtEbkI0Qyw2QkFBMkIsRUFBRTVDLEtBbERWO0FBbURuQjZDLHlCQUF1QixFQUFFN0MsS0FuRE47QUFvRG5COEMsaUNBQStCLEVBQUU5QztBQXBEZCxDQUFyQjs7QUF1REEsS0FBSyxNQUFNM1ksSUFBWCxJQUFtQnNZLFlBQW5CLEVBQWlDO0FBQUU7QUFBbUI7QUFDcEQsTUFBSW9ELE9BQUo7QUFDQSxNQUFJbE0sSUFBSSxHQUNObU0sZ0JBQWdCLENBQUNELE9BQU8sR0FBRy9mLE1BQVgsRUFBbUJxRSxJQUFuQixDQUFoQixJQUNHMmIsZ0JBQWdCLENBQUNELE9BQU8sR0FBR2plLE1BQVgsRUFBbUJ1QyxJQUFuQixDQUZyQjtBQUlBLE1BQUk2TixFQUFKOztBQUNBLE1BQUkyQixJQUFKLEVBQVU7QUFDUkEsUUFBSSxHQUFHdkUsTUFBTSxDQUFDeUMsYUFBYSxFQUFkLEVBQWtCOEIsSUFBbEIsQ0FBYixDQURRLENBRVI7O0FBQ0EsUUFBSzNCLEVBQUUsR0FBRzJCLElBQUksQ0FBQ29NLEdBQWYsRUFBcUJwTSxJQUFJLENBQUNvTSxHQUFMLEdBQVcsU0FBSXBLLElBQUosRUFBQTNELEVBQUUsRUFBTzZOLE9BQVAsQ0FBYixDQUhiLENBSVI7O0FBQ0EsUUFBSzdOLEVBQUUsR0FBRzJCLElBQUksQ0FBQ3FNLEdBQWYsRUFBcUJyTSxJQUFJLENBQUNxTSxHQUFMLEdBQVcsU0FBSXJLLElBQUosRUFBQTNELEVBQUUsRUFBTzZOLE9BQVAsQ0FBYjtBQUNyQnBELGdCQUFZLENBQUN0WSxJQUFELENBQVosR0FBcUJ3UCxJQUFyQjtBQUNELEdBUEQsTUFPTztBQUNMLFdBQU84SSxZQUFZLENBQUN0WSxJQUFELENBQW5CO0FBQ0Q7QUFDRjs7QUFDRCxTQUF1QjFELE9BQXZCLEdBQUN3ZixXQUFELEVBQWNsWSxNQUFkLEdBQStCUSxHQUFHLElBQUk7QUFDcEMsV0FBaUM5SCxPQUFqQyxFQUFBdWEsbUJBQW1CLENBQUN6UyxHQUFHLENBQUMyWCxLQUFELENBQUosQ0FBbkIsRUFBeUMzYyxHQUFHLElBQUk7QUFDOUMrWCxpQkFBYSxDQUFDL1gsR0FBRCxDQUFiLEdBQXFCLENBQXJCO0FBQ0QsR0FGRDtBQUdELENBSkQ7QUFNQTs7OztBQUdPLFNBQVNnUixpQkFBVCxDQUEyQjRMLEtBQTNCLEVBQWtDO0FBQ3ZDLFFBQU1DLE1BQU0sR0FBR3ZPLGFBQWEsRUFBNUI7QUFDQSxRQUFNd08sU0FBUyxHQUFHalIsTUFBTSxDQUFDeUMsYUFBYSxFQUFkLEVBQWtCMEosWUFBbEIsQ0FBeEI7QUFDQSxNQUFJK0UsT0FBTyxHQUFHNUYsYUFBZCxDQUh1QyxDQUdWOztBQUM3Qjs7OztBQUdBNkYsb0JBQWtCLENBQUNKLEtBQUQsRUFBUUssY0FBUixFQUF3QjtBQUFFVCxPQUFHLEVBQUUsTUFBTTtBQUFiLEdBQXhCLENBQWxCO0FBQ0EsUUFBTVUsT0FBTyxHQUFHLElBQUlDLFNBQUosQ0FBY1AsS0FBZCxFQUFxQjtBQUNuQzNnQixhQUFTLEVBQUUsSUFEd0I7O0FBRW5DbWhCLGtCQUFjLENBQUMxRyxDQUFELEVBQUk5VixJQUFKLEVBQVV5YyxJQUFWLEVBQWdCO0FBQzVCLFlBQU1DLEtBQUssR0FBRzlJLFFBQVEsQ0FBQzVULElBQUQsQ0FBdEI7O0FBQ0EsVUFBSSxDQUFDMGMsS0FBRCxJQUFVLENBQUN2RyxZQUFZLENBQUNuVyxJQUFELENBQTNCLEVBQW1DO0FBQ2pDb2MsMEJBQWtCLENBQUNKLEtBQUQsRUFBUWhjLElBQVIsRUFBY3ljLElBQWQsQ0FBbEI7QUFDQSxZQUFJQyxLQUFKLEVBQVdDLGVBQWUsQ0FBQzNjLElBQUQsQ0FBZjtBQUNYLGVBQU9rYyxTQUFTLENBQUNsYyxJQUFELENBQWhCO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0QsS0FWa0M7O0FBV25DNGMsa0JBQWMsQ0FBQzlHLENBQUQsRUFBSTlWLElBQUosRUFBVTtBQUN0QixVQUFJLEVBQUVBLElBQUksSUFBSXNZLFlBQVYsS0FBMkIsT0FBTzBELEtBQUssQ0FBQ2hjLElBQUQsQ0FBM0MsRUFBbUQ7QUFDakQsWUFBSW1jLE9BQU8sQ0FBQ2xGLEdBQVIsQ0FBWWpYLElBQVosQ0FBSixFQUF1QjtBQUNyQixjQUFJbWMsT0FBTyxLQUFLNUYsYUFBaEIsRUFBK0I7QUFDN0I0RixtQkFBTyxHQUFHNUYsYUFBYSxDQUFDc0csS0FBZCxFQUFWO0FBQ0Q7O0FBQ0RWLGlCQUFPLENBQUNXLE1BQVIsQ0FBZTljLElBQWY7QUFDRDs7QUFDRCxlQUFPLElBQVA7QUFDRDtBQUNGLEtBckJrQzs7QUFzQm5DO0FBQ0E7QUFDQTRiLE9BQUcsRUFBRSxDQUFDOUYsQ0FBRCxFQUFJOVYsSUFBSixLQUFjQSxJQUFJLEtBQUssV0FBVCxJQUF3QkEsSUFBSSxLQUFLb1csUUFBakMsR0FBNENsTCxTQUE1QyxHQUNmLENBQUM0SyxDQUFDLEdBQUdrRyxLQUFLLENBQUNoYyxJQUFELENBQVYsTUFBc0JrTCxTQUF0QixJQUFtQ2xMLElBQUksSUFBSWdjLEtBQTNDLEdBQW1EbEcsQ0FBbkQsR0FDRWlILFdBQVcsQ0FBQy9jLElBQUQsRUFBT3NjLE9BQVAsRUFBZ0JILE9BQWhCLEVBQXlCSCxLQUF6QixDQTFCa0I7O0FBNEJuQ2dCLDRCQUF3QixDQUFDbEgsQ0FBRCxFQUFJOVYsSUFBSixFQUFVO0FBQ2hDLFlBQU1pZCxPQUFPLEdBQUd0QixnQkFBZ0IsQ0FBQ0ssS0FBRCxFQUFRaGMsSUFBUixDQUFoQztBQUNBLFlBQU15YyxJQUFJLEdBQUdRLE9BQU8sSUFBSWQsT0FBTyxDQUFDbEYsR0FBUixDQUFZalgsSUFBWixLQUFxQjJiLGdCQUFnQixDQUFDaGdCLE1BQUQsRUFBU3FFLElBQVQsQ0FBN0Q7QUFDQSxVQUFJLENBQUN5YyxJQUFMLEVBQVc7O0FBQ1gsVUFBSVMsVUFBVSxDQUFDVCxJQUFELEVBQU8sT0FBUCxDQUFWLEtBQThCaGYsTUFBbEMsRUFBMEM7QUFDeENnZixZQUFJLENBQUNoWixLQUFMLEdBQWE2WSxPQUFiO0FBQ0QsT0FOK0IsQ0FPaEM7OztBQUNBLFVBQUksQ0FBQ1csT0FBRCxJQUFZLENBQUNDLFVBQVUsQ0FBQ1QsSUFBRCxFQUFPLGNBQVAsQ0FBM0IsRUFBbUQ7QUFDakQsY0FBTWIsR0FBRyxHQUFHc0IsVUFBVSxDQUFDVCxJQUFELEVBQU8sS0FBUCxDQUF0QjtBQUNBLFlBQUliLEdBQUosRUFBU2EsSUFBSSxDQUFDYixHQUFMLEdBQVcsU0FBS3BLLElBQUwsRUFBQW9LLEdBQUcsRUFBT2pnQixNQUFQLENBQWQ7QUFDVHlnQiwwQkFBa0IsQ0FBQ0osS0FBRCxFQUFRaGMsSUFBUixFQUFjeWMsSUFBZCxDQUFsQjtBQUNEOztBQUNELGFBQU9BLElBQVA7QUFDRCxLQTFDa0M7O0FBMkNuQ3hGLE9BQUcsRUFBRSxDQUFDbkIsQ0FBRCxFQUFJOVYsSUFBSixLQUFhQSxJQUFJLElBQUlnYyxLQUFSLElBQWlCaGMsSUFBSSxJQUFJbVgsYUFBekIsSUFBMENnRixPQUFPLENBQUNsRixHQUFSLENBQVlqWCxJQUFaLENBM0N6QjtBQTRDbkNtZCxXQUFPLEVBQUUsTUFBTUMsV0FBVyxDQUFDcEIsS0FBRCxFQUFRRyxPQUFSLENBNUNTOztBQTZDbkNrQixxQkFBaUIsR0FBRyxDQUFFLENBN0NhOztBQThDbkN4QixPQUFHLENBQUMvRixDQUFELEVBQUk5VixJQUFKLEVBQVV5RCxLQUFWLEVBQWlCO0FBQ2xCLFlBQU1pWixLQUFLLEdBQUc5SSxRQUFRLENBQUM1VCxJQUFELENBQXRCO0FBQ0EsVUFBSXNkLFFBQVEsR0FBR3BCLFNBQVMsQ0FBQ2xjLElBQUQsQ0FBeEI7O0FBQ0EsVUFBSXNkLFFBQVEsS0FBSyxDQUFqQixFQUFvQjtBQUNsQkEsZ0JBQVEsR0FBR25CLE9BQU8sQ0FBQ2xGLEdBQVIsQ0FBWWpYLElBQVosSUFBb0IsQ0FBcEIsR0FBd0IsQ0FBbkM7QUFDQWtjLGlCQUFTLENBQUNsYyxJQUFELENBQVQsR0FBa0JzZCxRQUFsQjtBQUNEOztBQUNELFVBQUksQ0FBQ0EsUUFBRCxLQUFjLENBQUNaLEtBQUQsSUFBVSxDQUFDdkcsWUFBWSxDQUFDblcsSUFBRCxDQUFyQyxDQUFKLEVBQWtEO0FBQ2hEZ2MsYUFBSyxDQUFDaGMsSUFBRCxDQUFMLEdBQWN5RCxLQUFkO0FBQ0EsWUFBSWlaLEtBQUosRUFBV0MsZUFBZSxDQUFDM2MsSUFBRCxFQUFPeUQsS0FBUCxFQUFjMFksT0FBZCxFQUF1QkYsTUFBdkIsQ0FBZjtBQUNaOztBQUNELGFBQU8sSUFBUDtBQUNEOztBQTFEa0MsR0FBckIsQ0FBaEI7O0FBNERBLE9BQUssTUFBTWpjLElBQVgsSUFBbUJzWSxZQUFuQixFQUFpQztBQUFFO0FBQW1CO0FBQ3BELFVBQU1tRSxJQUFJLEdBQUduRSxZQUFZLENBQUN0WSxJQUFELENBQXpCOztBQUNBLFFBQUlBLElBQUksS0FBSyxRQUFULElBQXFCQSxJQUFJLEtBQUssS0FBVCxJQUFrQnVkLE1BQTNDLEVBQW1EO0FBQ2pELGFBQU9kLElBQUksQ0FBQ2IsR0FBWjtBQUNBLGFBQU9hLElBQUksQ0FBQ1osR0FBWjtBQUNBWSxVQUFJLENBQUNoWixLQUFMLEdBQWE2WSxPQUFiO0FBQ0Q7QUFDRDtBQUEyQjs7O0FBQzNCRSxrQkFBYyxDQUFDUixLQUFELEVBQVFoYyxJQUFSLEVBQWN5YyxJQUFkLENBQWQ7QUFDRDs7QUFDRCxTQUFPSCxPQUFQO0FBQ0Q7O0FBRUQsU0FBU2MsV0FBVCxDQUFxQnBCLEtBQXJCLEVBQTRCRyxPQUE1QixFQUFxQztBQUNuQzs7O0FBR0EsUUFBTXZGLEtBQUssR0FBRyxTQUE0QnhVLE1BQTVCLEVBQUF5VSxtQkFBbUIsQ0FBQ21GLEtBQUQsQ0FBbkIsRUFBbUN3QixhQUFuQyxFQUFrRHJCLE9BQWxELENBQWQ7QUFDQSxRQUFNc0IsT0FBTyxHQUFHLFNBQThCcmIsTUFBOUIsRUFBQXNiLHFCQUFxQixDQUFDMUIsS0FBRCxDQUFyQixFQUFxQ3dCLGFBQXJDLEVBQW9EckIsT0FBcEQsQ0FBaEI7QUFDQSxRQUFNd0IsWUFBWSxHQUFHLEVBQXJCOztBQUNBLE9BQUssSUFBSWhoQixDQUFDLEdBQUcsQ0FBUixFQUFXaWhCLENBQWhCLEVBQW1CQyxnQkFBZ0IsQ0FBQ2xpQixNQUFNLENBQUNpaUIsQ0FBQyxHQUFJLEdBQUVqaEIsQ0FBRSxFQUFWLENBQVAsQ0FBaEIsS0FBeUMsUUFBNUQsRUFBc0VBLENBQUMsSUFBSSxDQUEzRSxFQUE4RTtBQUM1RSxRQUFJLEVBQUVpaEIsQ0FBQyxJQUFJNUIsS0FBUCxDQUFKLEVBQW1CO0FBQ2pCNU4sZ0JBQVUsQ0FBQ3VQLFlBQUQsRUFBZUMsQ0FBZixFQUFrQkEsQ0FBbEIsQ0FBVjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT3JOLDREQUFVLENBQ2YsRUFEZSxFQUVmNEwsT0FBTyxLQUFLNUYsYUFBWixHQUE0QkUsVUFBNUIsR0FBeUMwRixPQUFPLENBQUNqRixPQUFSLEVBRjFCLEVBR2Z5RyxZQUhlLEVBSWYvRyxLQUplLEVBS2Y2RyxPQUxlLENBQWpCO0FBT0Q7O0FBRUQsU0FBU1YsV0FBVCxDQUFxQi9jLElBQXJCLEVBQTJCc2MsT0FBM0IsRUFBb0NILE9BQXBDLEVBQTZDSCxLQUE3QyxFQUFvRDtBQUNsRCxNQUFJdlksS0FBSyxHQUFHbVYsWUFBWSxDQUFDNVksSUFBRCxDQUF4Qjs7QUFDQSxNQUFJeUQsS0FBSyxLQUFLa1YsS0FBZCxFQUFxQjtBQUNuQmxWLFNBQUssR0FBR2hHLE1BQU0sQ0FBQ3VDLElBQUQsQ0FBZDs7QUFDQSxRQUFJaVUsVUFBVSxDQUFDeFEsS0FBRCxDQUFkLEVBQXVCO0FBQ3JCQSxXQUFLLEdBQUcsU0FBTytOLElBQVAsRUFBQS9OLEtBQUssRUFBT2hHLE1BQVAsQ0FBYjtBQUNEOztBQUNEbWIsZ0JBQVksQ0FBQzVZLElBQUQsQ0FBWixHQUFxQnlELEtBQXJCO0FBQ0Q7O0FBQ0QsUUFBTXFhLE9BQU8sR0FBR3JhLEtBQUssSUFBSXpELElBQUksSUFBSW1YLGFBQWpCLElBQWtDZ0YsT0FBTyxDQUFDbEYsR0FBUixDQUFZalgsSUFBWixDQUFsRDs7QUFDQSxNQUFJLENBQUN5RCxLQUFELEtBQVdxYSxPQUFPLElBQUlsSyxRQUFRLENBQUM1VCxJQUFELENBQVIsSUFBa0JtVyxZQUFZLENBQUNuVyxJQUFELENBQXBELENBQUosRUFBaUU7QUFDL0R5RCxTQUFLLEdBQUc5SCxNQUFNLENBQUNxRSxJQUFELENBQWQ7QUFDRDs7QUFDRCxNQUFJeUQsS0FBSyxLQUFLaEcsTUFBZCxFQUFzQjtBQUNwQmdHLFNBQUssR0FBRzZZLE9BQVI7QUFDRDs7QUFDRCxNQUFJd0IsT0FBTyxLQUNUN0osVUFBVSxDQUFDeFEsS0FBRCxDQUFWLElBQXFCcVIsUUFBUSxDQUFDclIsS0FBRCxDQUFSLElBQW1CekQsSUFBSSxLQUFLLE9BRHhDLENBRVQ7QUFGUyxHQUFYLEVBR0c7QUFDRGdjLFNBQUssQ0FBQ2hjLElBQUQsQ0FBTCxHQUFjeUQsS0FBZDtBQUNEOztBQUNELFNBQU9BLEtBQVA7QUFDRDs7QUFFRCxTQUFTa1osZUFBVCxDQUF5QjNjLElBQXpCLEVBQStCeUQsS0FBL0IsRUFBc0MwWSxPQUF0QyxFQUErQ0YsTUFBL0MsRUFBdUQ7QUFDckQ7QUFDQSxNQUFJamMsSUFBSSxDQUFDbEIsTUFBTCxHQUFjLENBQWQsSUFBbUJrQixJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksR0FBL0IsSUFBc0NBLElBQUksQ0FBQyxDQUFELENBQUosS0FBWSxHQUFsRCxJQUF5RCxDQUFDbWMsT0FBTyxDQUFDbEYsR0FBUixDQUFZalgsSUFBWixDQUE5RCxFQUFpRjtBQUMvRTtBQUNEOztBQUNEQSxNQUFJLEdBQUcsU0FBTTNELEtBQU4sRUFBQTJELElBQUksRUFBUSxDQUFSLENBQVg7QUFDQSxXQUFRK2QsR0FBUixFQUFBdGdCLE1BQU0sRUFBTXVDLElBQU4sRUFBWWljLE1BQU0sQ0FBQ2pjLElBQUQsQ0FBbEIsQ0FBTjs7QUFDQSxNQUFJaVUsVUFBVSxDQUFDeFEsS0FBRCxDQUFkLEVBQXVCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFRb0osRUFBUixFQUFBcFAsTUFBTSxFQUFLdUMsSUFBTCxFQUFXaWMsTUFBTSxDQUFDamMsSUFBRCxDQUFOLEdBQWUsU0FBT3dSLElBQVAsRUFBQS9OLEtBQUssRUFBT2hHLE1BQVAsQ0FBL0IsQ0FBTjtBQUNELEdBSkQsTUFJTztBQUNMLFdBQU93ZSxNQUFNLENBQUNqYyxJQUFELENBQWI7QUFDRDtBQUNGO0FBRUQ7OztBQUNBLFNBQVN3ZCxhQUFULENBQXVCcGUsR0FBdkIsRUFBNEI7QUFDMUIsU0FBTyxDQUFDLEtBQUs2WCxHQUFMLENBQVM3WCxHQUFULENBQVI7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNqVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNPLE1BQU00UyxXQUFXLEdBQUd0RSxhQUFhLEVBQWpDO0FBRVAsTUFBTXNRLFlBQVksR0FBRztBQUNuQjNpQixXQUFTLEVBQUUsSUFEUTtBQUVuQjRpQixHQUFDLEVBQUVDLFNBRmdCO0FBR25CQyxHQUFDLEVBQUVsYixHQUFHLElBQUksQ0FBQ0EsR0FIUTtBQUluQnNCLEdBQUMsRUFBRXRCLEdBQUcsSUFBSUEsR0FBRyxLQUFLO0FBSkMsQ0FBckI7QUFPQTBKLCtDQUFNLENBQUNpQixXQUFQLENBQW1CO0FBQ2pCd1EsZUFBYSxDQUFDQyxPQUFELEVBQVU7QUFDckIsVUFBTTtBQUFFQztBQUFGLFFBQWNELE9BQXBCO0FBQ0EsYUFBcUIvaEIsT0FBckIsRUFBQWdVLFVBQVUsQ0FBQytOLE9BQUQsQ0FBVixFQUE2Qm5lLEVBQUUsSUFBSTtBQUNqQyxZQUFNcWUsT0FBTyxHQUFHakwsOENBQUssQ0FBQ25QLE1BQU4sQ0FBYWpFLEVBQWIsQ0FBaEI7O0FBQ0EsVUFBSXFlLE9BQUosRUFBYTtBQUNYLGNBQU1DLE1BQU0sR0FBR0gsT0FBTyxDQUFDbmUsRUFBRCxDQUF0QjtBQUNBLGNBQU13VixRQUFRLEdBQUcxRCxXQUFXLENBQUM5UixFQUFELENBQTVCO0FBQ0EsWUFBSXdWLFFBQUosRUFBYytJLGVBQWUsQ0FBQy9JLFFBQUQsRUFBVzZJLE9BQVgsRUFBb0JDLE1BQXBCLENBQWY7QUFDZCxZQUFJRixPQUFKLEVBQWFJLGtCQUFrQixDQUFDSCxPQUFELEVBQVVDLE1BQVYsQ0FBbEIsQ0FBYixLQUNLbEwsOENBQUssQ0FBQ25QLE1BQU4sQ0FBYWpFLEVBQWIsSUFBbUJzZSxNQUFuQjtBQUNOO0FBQ0YsS0FURDtBQVVEOztBQWJnQixDQUFuQjtBQWdCTyxTQUFTak0sVUFBVCxDQUFvQnJTLEVBQXBCLEVBQXdCO0FBQzdCLFNBQU9vVCw4Q0FBSyxDQUFDblAsTUFBTixDQUFhakUsRUFBYixDQUFQO0FBQ0Q7QUFFTSxTQUFTdVMsU0FBVCxDQUFtQnZTLEVBQW5CLEVBQXVCZCxHQUF2QixFQUE0QjZELEdBQTVCLEVBQWlDMFAsR0FBakMsRUFBc0NILE1BQXRDLEVBQThDMUUsT0FBOUMsRUFBdUQ7QUFDNURuQixpREFBTSxDQUFDUyxJQUFQLENBQVksYUFBWixFQUEyQjtBQUFFbE4sTUFBRjtBQUFNZCxPQUFOO0FBQVdxRSxTQUFLLEVBQUVrUDtBQUFsQixHQUEzQixFQUFvRDdFLE9BQXBEOztBQUNBLE1BQUk2RSxHQUFHLEtBQUtILE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsVUFBTXRXLEtBQUssc0JBQUc4VixXQUFXLENBQUM5UixFQUFELENBQWQscUJBQUcsZ0JBQWtCZCxHQUFsQixDQUFkO0FBQ0EsUUFBSWxELEtBQUosRUFBV3lpQixZQUFZLENBQUN6aUIsS0FBRCxFQUFRa0QsR0FBUixFQUFhNkQsR0FBYixFQUFrQjBQLEdBQWxCLEVBQXVCSCxNQUF2QixDQUFaO0FBQ1o7QUFDRjtBQUVNLFNBQVNJLFdBQVQsQ0FBcUJELEdBQXJCLEVBQTBCO0FBQy9CLFFBQU00QyxJQUFJLEdBQUc1QyxHQUFHLENBQUMsQ0FBRCxDQUFoQjtBQUNBLFFBQU1pTSxNQUFNLEdBQUdaLFlBQVksQ0FBQ3pJLElBQUQsQ0FBM0I7QUFDQSxNQUFJdFMsR0FBRyxHQUFHLFNBQUs1RyxLQUFMLEVBQUFzVyxHQUFHLEVBQVEsQ0FBUixDQUFiOztBQUNBLE1BQUk7QUFDRixRQUFJaU0sTUFBSixFQUFZM2IsR0FBRyxHQUFHMmIsTUFBTSxDQUFDM2IsR0FBRCxDQUFaO0FBQ2IsR0FGRCxDQUVFLE9BQU94RSxDQUFQLEVBQVU7QUFDVixRQUFJc08sS0FBSixFQUF1Qm1GLEVBQUE7QUFDeEI7O0FBQ0QsU0FBT2pQLEdBQVA7QUFDRDs7QUFFRCxTQUFTeWIsa0JBQVQsQ0FBNEJ0aUIsSUFBNUIsRUFBa0NvaUIsTUFBbEMsRUFBMEM7QUFDeEMsV0FBb0JsaUIsT0FBcEIsRUFBQWdVLFVBQVUsQ0FBQ2tPLE1BQUQsQ0FBVixFQUE0QnBmLEdBQUcsSUFBSTtBQUNqQyxVQUFNNkQsR0FBRyxHQUFHdWIsTUFBTSxDQUFDcGYsR0FBRCxDQUFsQjtBQUNBLFFBQUk2RCxHQUFKLEVBQVM3RyxJQUFJLENBQUNnRCxHQUFELENBQUosR0FBWTZELEdBQVosQ0FBVCxLQUNLLE9BQU83RyxJQUFJLENBQUNnRCxHQUFELENBQVg7QUFDTixHQUpEO0FBS0Q7O0FBRUQsU0FBU3FmLGVBQVQsQ0FBeUIvSSxRQUF6QixFQUFtQ3RaLElBQW5DLEVBQXlDb2lCLE1BQXpDLEVBQWlEO0FBQy9DLFdBQW9CbGlCLE9BQXBCLEVBQUFnVSxVQUFVLENBQUNrTyxNQUFELENBQVYsRUFBNEJwZixHQUFHLElBQUk7QUFDakMsVUFBTWxELEtBQUssR0FBR3daLFFBQVEsQ0FBQ3RXLEdBQUQsQ0FBdEI7O0FBQ0EsUUFBSWxELEtBQUosRUFBVztBQUNULFVBQUl5VyxHQUFHLEdBQUc2TCxNQUFNLENBQUNwZixHQUFELENBQWhCO0FBQ0EsVUFBSSxDQUFDdVQsR0FBTCxFQUFVQSxHQUFHLEdBQUd6SCxTQUFOLENBRkQsQ0FFa0I7O0FBQzNCLFlBQU1zSCxNQUFNLEdBQUdwVyxJQUFJLENBQUNnRCxHQUFELENBQW5COztBQUNBLFVBQUlvVCxNQUFNLEtBQUtHLEdBQWYsRUFBb0I7QUFDbEJ2VyxZQUFJLENBQUNnRCxHQUFELENBQUosR0FBWXVULEdBQVosQ0FEa0IsQ0FDRDs7QUFDakJnTSxvQkFBWSxDQUFDemlCLEtBQUQsRUFBUWtELEdBQVIsRUFBYThMLFNBQWIsRUFBd0J5SCxHQUF4QixFQUE2QkgsTUFBN0IsRUFBcUMsSUFBckMsQ0FBWjtBQUNEO0FBQ0Y7QUFDRixHQVhEO0FBWUQ7O0FBRUQsU0FBU21NLFlBQVQsQ0FBc0J6aUIsS0FBdEIsRUFBNkJrRCxHQUE3QixFQUFrQzZELEdBQWxDLEVBQXVDMFAsR0FBdkMsRUFBNENILE1BQTVDLEVBQW9EcU0sTUFBTSxHQUFHLEtBQTdELEVBQW9FO0FBQ2xFO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLENBQUN0TSxNQUFNLElBQUl0SCxTQUFYLEtBQXlCMEgsV0FBVyxDQUFDSixNQUFELENBQW5EO0FBQ0EsUUFBTXVNLE1BQU0sR0FBRzliLEdBQUcsS0FBS2lJLFNBQVIsSUFBcUJ5SCxHQUFyQixHQUEyQkMsV0FBVyxDQUFDRCxHQUFELENBQXRDLEdBQThDMVAsR0FBN0Q7QUFDQSxXQUFxQjNHLE9BQXJCLEVBQUEyVixZQUFZLENBQUMvVixLQUFELENBQVosRUFBNkIyUixFQUFFLElBQUk7QUFDakMsUUFBSTtBQUNGQSxRQUFFLENBQUN6TyxHQUFELEVBQU0wZixNQUFOLEVBQWNDLE1BQWQsRUFBc0JGLE1BQXRCLENBQUY7QUFDRCxLQUZELENBRUUsT0FBT3BnQixDQUFQLEVBQVU7QUFDVnlULFNBQUcsQ0FBQyxPQUFELEVBQVUsQ0FBQywyQkFBRCxFQUE4QixVQUE5QixDQUFWLEVBQXFEelQsQ0FBckQsQ0FBSDtBQUNEO0FBQ0YsR0FORDtBQU9ELEM7Ozs7Ozs7Ozs7OztBQ3ZGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBRUEsTUFBTXVnQixjQUFjLEdBQUcsTUFBTXJTLCtDQUFNLENBQUNyQyxJQUFQLENBQVksWUFBWixFQUEwQixDQUExQixDQUE3QixDLENBQ0E7OztBQUNBLElBQUkyVSxTQUFKO0FBQ0EsSUFBSUMsT0FBSjtBQUVlLFNBQVNDLFVBQVQsQ0FDYkMsS0FEYSxFQUViQyxTQUZhLEVBR2JDLFVBSGEsRUFJYjtBQUNBLE1BQUlDLFdBQUo7O0FBQ0EsTUFBSXhTLGdCQUFKLEVBQThCO0FBQzVCLGFBQVFGLEVBQVIsRUFBQXBQLE1BQU0sRUFBS3NQLGdCQUFBLEdBQTJCQSxDQUFoQyxFQUEyRHRPLENBQUMsSUFBSTtBQUNwRUEsT0FBQyxHQUFHLFNBQUd1TyxTQUFILEVBQUF2TyxDQUFDLENBQUw7QUFDQTJnQixXQUFLLEdBQUczZ0IsQ0FBQyxDQUFDLENBQUQsQ0FBVDtBQUNBNGdCLGVBQVMsR0FBRzVnQixDQUFDLENBQUMsQ0FBRCxDQUFiO0FBQ0QsS0FKSyxFQUlIO0FBQUVwRCxlQUFTLEVBQUUsSUFBYjtBQUFtQm1rQixVQUFJLEVBQUUsSUFBekI7QUFBK0JDLGFBQU8sRUFBRTtBQUF4QyxLQUpHLENBQU47QUFLQSxhQUFRdGpCLElBQVIsRUFBQXNCLE1BQU0sRUFBTyxJQUFJOE8sZUFBSixDQUFvQlEsZ0JBQXBCLENBQVAsQ0FBTjtBQUNEOztBQUNESixpREFBTSxDQUFDVSxPQUFQLEdBQWlCZ1MsU0FBakI7O0FBQ0EsTUFBSUMsVUFBSixFQUFnQjtBQUNkTCxhQUFTLEdBQUd2UixhQUFhLEVBQXpCO0FBQ0F3UixXQUFPLEdBQUd4UixhQUFhLEVBQXZCO0FBQ0FmLG1EQUFNLENBQUN1RSxJQUFQLEdBQWNoVyxvREFBZDs7QUFDQXlSLG1EQUFNLENBQUNTLElBQVAsR0FBYyxDQUFDclEsR0FBRCxFQUFNWCxJQUFOLEVBQVkwUixPQUFaLEVBQXFCYixJQUFyQixLQUE4QjtBQUMxQ3FTLGdCQUFVLENBQUM7QUFBRXZpQixXQUFGO0FBQU9YLFlBQVA7QUFBYTZRLFlBQWI7QUFBbUJJLGVBQU8sRUFBRSxDQUFDUyxPQUFPLElBQUluQiwrQ0FBWixFQUFvQlU7QUFBaEQsT0FBRCxFQUE0RG5TLG9EQUE1RCxDQUFWO0FBQ0QsS0FGRDs7QUFHQXFrQixlQUFXLEdBQUcsQ0FBQ3hpQixHQUFELEVBQU1YLElBQU4sRUFBWXNqQixLQUFaLEVBQW1CelMsSUFBbkIsS0FBNEI7QUFDeEMsVUFBSUYsS0FBSixFQUF1QjRTLEVBQUE7QUFDdkJoVCxxREFBTSxDQUFDTyxRQUFQLENBQWdCO0FBQUVuUSxXQUFGO0FBQU9YLFlBQVA7QUFBYTZRO0FBQWIsT0FBaEI7QUFDRCxLQUhEOztBQUlBdFIsVUFBTSxDQUFDaWtCLE1BQVAsR0FBZ0IxVSxTQUFoQjtBQUNBdlAsVUFBTSxDQUFDRCxPQUFQLEdBQWlCd1AsU0FBakI7QUFDQXlCLG1EQUFNLENBQUNpQixXQUFQLENBQW1CO0FBQ2pCaVMsV0FBSyxFQUFFN2YsSUFBSSxJQUFJaWYsU0FBUyxDQUFDamYsSUFBRCxDQUFUO0FBREUsS0FBbkI7QUFHRCxHQWhCRCxNQWdCTztBQUNMMk0sbURBQU0sQ0FBQ3VFLElBQVAsR0FBY2pXLGlEQUFkO0FBQ0F1Uiw0REFBVSxDQUFDNFMsS0FBRCxFQUFRQyxTQUFSLEVBQW1CMVMsK0NBQW5CLENBQVY7QUFDQUEsbURBQU0sQ0FBQ2lCLFdBQVAsQ0FBbUI7QUFDakI7QUFDQWtTLGdCQUFVLENBQUM1ZixFQUFELEVBQUs7QUFDYixhQUFLQSxFQUFMLElBQVc2ZixLQUFYO0FBQ0Q7O0FBSmdCLEtBQW5CO0FBTUQ7O0FBQ0QsU0FBT1IsV0FBUDtBQUNEO0FBRUQ1UywrQ0FBTSxDQUFDaUIsV0FBUCxDQUFtQjtBQUNqQm9TLFNBQU8sQ0FBQztBQUFFOWYsTUFBRjtBQUFNbVQsT0FBTjtBQUFXNE07QUFBWCxHQUFELEVBQW1CO0FBQ3hCLFVBQU1DLFdBQVcsR0FBR0QsR0FBRyxDQUFDN2dCLEdBQUosR0FBVStnQixpQkFBVixHQUE4QjVTLGNBQWxEO0FBQ0EsVUFBTU0sRUFBRSxHQUFHeUYsOENBQUssQ0FBQ0MsUUFBTixDQUFnQixHQUFFclQsRUFBRyxJQUFHbVQsR0FBSSxFQUE1QixDQUFYO0FBQ0EsUUFBSXhGLEVBQUosRUFBUUEsRUFBRSxDQUFDLElBQUlxUyxXQUFKLENBQWdCRCxHQUFHLENBQUMxSyxJQUFwQixFQUEwQjBLLEdBQTFCLENBQUQsQ0FBRjtBQUNULEdBTGdCOztBQU1qQjtBQUNBRyxVQUFRLENBQUM7QUFBRWxnQixNQUFGO0FBQU05RDtBQUFOLEdBQUQsRUFBZTtBQUNyQixVQUFNeVIsRUFBRSxHQUFHbEIsK0NBQU0sQ0FBQ2dCLFNBQVAsQ0FBaUJ6TixFQUFqQixDQUFYO0FBQ0EsV0FBT3lNLCtDQUFNLENBQUNnQixTQUFQLENBQWlCek4sRUFBakIsQ0FBUDtBQUNBLFFBQUkyTixFQUFKLEVBQVEsU0FBTUEsRUFBTixRQUFTelIsSUFBVDtBQUNULEdBWGdCOztBQVlqQmlrQixZQUFVLENBQUM7QUFBRTdRLFFBQUY7QUFBUThRLFNBQVI7QUFBZUM7QUFBZixHQUFELEVBQXlCO0FBQ2pDLFFBQUkvUSxJQUFKLEVBQVU7QUFDUnZFLFlBQU0sQ0FBQzBCLCtDQUFELEVBQVM2QyxJQUFULENBQU47QUFDRDs7QUFDRCxRQUFJOFEsS0FBSixFQUFXO0FBQ1QsVUFBSXBCLE9BQU8sSUFBSXFCLEtBQUssS0FBSyxPQUF6QixFQUFrQztBQUNoQ3JCLGVBQU8sQ0FBQ3FCLEtBQUQsQ0FBUCxHQUFpQixJQUFJeFMsV0FBSixDQUFnQi9MLE9BQU8sSUFBSTtBQUFFaWQsbUJBQVMsQ0FBQ3NCLEtBQUQsQ0FBVCxHQUFtQnZlLE9BQW5CO0FBQTZCLFNBQTFELENBQWpCO0FBQ0Q7O0FBQ0QsZUFBTzFGLE9BQVAsRUFBQWdrQixLQUFLLEVBQVVFLGdCQUFWLENBQUwsQ0FKUyxDQUtUOztBQUNBLFVBQUl6SixVQUFVLElBQUlwSywrQ0FBTSxDQUFDdUUsSUFBUCxLQUFnQmpXLGlEQUFsQyxFQUErQztBQUM3QzBSLHVEQUFNLENBQUNTLElBQVAsQ0FBWSxZQUFaLEVBQTBCbVQsS0FBMUI7QUFDRDtBQUNGO0FBQ0YsR0ExQmdCOztBQTJCakJFLFFBQU0sR0FBRztBQUNQaGpCLFVBQU0sQ0FBQ2lqQixRQUFQLENBQWdCQyxhQUFoQixHQUFnQztBQUM5QjNQLGFBQU8sRUFBRWpFLFdBRHFCO0FBRTlCNlQsaUJBQVcsRUFBRSxDQUFDNWdCLElBQUQsRUFBTzZnQixTQUFQLEtBQ1hsVSwrQ0FBTSxDQUFDckMsSUFBUCxDQUFZLGNBQVosRUFBNEI7QUFBRW5MLFlBQUksRUFBRTtBQUFFYSxjQUFGO0FBQVE2Z0I7QUFBUjtBQUFSLE9BQTVCO0FBSDRCLEtBQWhDO0FBTUQ7O0FBbENnQixDQUFuQjs7QUFxQ0EsU0FBU0wsZ0JBQVQsQ0FBMEJoYyxJQUExQixFQUFnQztBQUM5QixRQUFNO0FBQUU2STtBQUFGLE1BQWM3SSxJQUFwQjtBQUNBOE8sZ0RBQUssQ0FBQ25QLE1BQU4sQ0FBYUssSUFBSSxDQUFDdkUsS0FBTCxDQUFXQyxFQUF4QixJQUE4QnNFLElBQUksQ0FBQ0wsTUFBTCxJQUFldUosYUFBYSxFQUExRDs7QUFDQSxNQUFJalEsTUFBTSxDQUFDNFAsT0FBRCxDQUFWLEVBQXFCO0FBQUU7QUFDckJ5VCxhQUFTLENBQUN0YyxJQUFELEVBQU8vRyxNQUFNLENBQUM0UCxPQUFELENBQWIsQ0FBVDtBQUNELEdBRkQsTUFFTztBQUNMK08sc0JBQWtCLENBQUMzZSxNQUFELEVBQVM0UCxPQUFULEVBQWtCO0FBQ2xDMFQsa0JBQVksRUFBRSxJQURvQjtBQUVsQ2xGLFNBQUcsRUFBRWhPLEVBQUUsSUFBSWlULFNBQVMsQ0FBQ3RjLElBQUQsRUFBT3FKLEVBQVA7QUFGYyxLQUFsQixDQUFsQjtBQUlEO0FBQ0Y7O0FBRUQsZUFBZWlULFNBQWYsQ0FBeUJ0YyxJQUF6QixFQUErQnFKLEVBQS9CLEVBQW1DO0FBQUE7O0FBQ2pDLFFBQU07QUFBRVIsV0FBRjtBQUFXMlQ7QUFBWCxNQUFxQnhjLElBQTNCLENBRGlDLENBRWpDOztBQUNBLFNBQU8vRyxNQUFNLENBQUM0UCxPQUFELENBQWI7O0FBQ0EsTUFBSU4sS0FBSixFQUF1QixFQUV0Qjs7QUFDRCxRQUFNa1UsR0FBRyxHQUFHLE1BQU07QUFDaEJ0VSxtREFBTSxDQUFDUyxJQUFQLENBQVksS0FBWixFQUFtQjVJLElBQUksQ0FBQ3ZFLEtBQUwsQ0FBV0MsRUFBOUIsRUFBa0NzRSxJQUFsQztBQUNBLGFBQXdCcUosRUFBeEIsRUFBQW1CLHdFQUFnQixDQUFDeEssSUFBRCxDQUFoQixFQUEyQmdSLE9BQU8sQ0FBQzBMLEtBQW5DO0FBQ0QsR0FIRDs7QUFJQSxRQUFNdEwsRUFBRSxHQUFHLFNBQVV1TCxnQkFBVixFQUFBOVUsUUFBUSxDQUFuQjtBQUNBLFFBQU0rVSxJQUFJLGVBQUdsQyxPQUFILHFCQUFHLFNBQVU4QixLQUFWLENBQWI7QUFDQSxNQUFJcEwsRUFBSixFQUFRLFNBQUlQLE1BQUosRUFBQU8sRUFBRTs7QUFDVixNQUFJd0wsSUFBSixFQUFVO0FBQ1JsQyxXQUFPLENBQUM4QixLQUFELENBQVAsR0FBaUIsU0FBd0RwakIsSUFBeEQsRUFBQ29qQixLQUFLLEtBQUssTUFBVixHQUFtQixTQUFNcGpCLElBQU4sRUFBQXdqQixJQUFJLEVBQU9wQyxjQUFQLENBQXZCLEdBQWdEb0MsSUFBakQsRUFBNkRILEdBQTdELENBQWpCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xBLE9BQUc7QUFDSjtBQUNGLEM7Ozs7Ozs7Ozs7OztBQ2pJRDtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUlJLE1BQU0sR0FBRyxDQUFiO0FBQ0EsTUFBTUMsYUFBYSxHQUFHNVQsYUFBYSxFQUFuQztBQUVBZiwrQ0FBTSxDQUFDaUIsV0FBUCxDQUFtQjtBQUNqQjJULHFCQUFtQixDQUFDcmhCLEVBQUQsRUFBSztBQUFBOztBQUN0QixVQUFNMk4sRUFBRSx3QkFBR3lULGFBQWEsQ0FBQ3BoQixFQUFELENBQWhCLHFCQUFHLGtCQUFtQmlWLE9BQTlCO0FBQ0EsUUFBSXRILEVBQUosRUFBUUEsRUFBRTtBQUNYLEdBSmdCOztBQUtqQjJULG9CQUFrQixDQUFDdGhCLEVBQUQsRUFBSztBQUNyQixVQUFNbEQsT0FBTyxHQUFHc2tCLGFBQWEsQ0FBQ3BoQixFQUFELENBQTdCOztBQUNBLFFBQUlsRCxPQUFKLEVBQWE7QUFDWCxhQUFPc2tCLGFBQWEsQ0FBQ3BoQixFQUFELENBQXBCO0FBQ0EsWUFBTTJOLEVBQUUsR0FBRzdRLE9BQU8sQ0FBQ3lrQixNQUFuQjtBQUNBLFVBQUk1VCxFQUFKLEVBQVFBLEVBQUU7QUFDWDtBQUNGOztBQVpnQixDQUFuQjtBQWVPLFNBQVN1SCxvQkFBVCxDQUE4QnBZLE9BQTlCLEVBQXVDOFEsT0FBdkMsRUFBZ0Q7QUFDckR1VCxRQUFNLElBQUksQ0FBVjtBQUNBQyxlQUFhLENBQUNELE1BQUQsQ0FBYixHQUF3QnJrQixPQUF4QjtBQUNBMlAsaURBQU0sQ0FBQ1MsSUFBUCxDQUFZLGNBQVosRUFBNEI7QUFDMUJsTixNQUFFLEVBQUVtaEIsTUFEc0I7QUFFMUJyTSxRQUFJLEVBQUVoWSxPQUFPLENBQUNnWSxJQUZZO0FBRzFCQyxTQUFLLEVBQUVqWSxPQUFPLENBQUNpWSxLQUhXO0FBSTFCQyxTQUFLLEVBQUVsWSxPQUFPLENBQUNrWTtBQUpXLEdBQTVCLEVBS0dwSCxPQUxIO0FBTUEsU0FBT3VULE1BQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUM5QkQ7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNSyxLQUFLLEdBQUdoVSxhQUFhLEVBQTNCO0FBRUFmLCtDQUFNLENBQUNpQixXQUFQLENBQW1CO0FBQ2pCK1QsZUFBYSxDQUFDelYsR0FBRCxFQUFNO0FBQ2pCLFVBQU0wVixHQUFHLEdBQUdGLEtBQUssQ0FBQ3hWLEdBQUcsQ0FBQ2hNLEVBQUwsQ0FBakI7QUFDQSxRQUFJMGhCLEdBQUosRUFBU25sQixRQUFRLENBQUNtbEIsR0FBRCxFQUFNMVYsR0FBTixDQUFSO0FBQ1Y7O0FBSmdCLENBQW5CO0FBT08sU0FBU2dJLGVBQVQsQ0FBeUJQLElBQXpCLEVBQStCN0YsT0FBL0IsRUFBd0MrVCxRQUF4QyxFQUFrRDtBQUN2RCxNQUFJLENBQUNsTyxJQUFJLENBQUN0VCxHQUFWLEVBQWUsTUFBTSxJQUFJeVQsU0FBSixDQUFjLHNDQUFkLENBQU47QUFDZixRQUFNZ08sUUFBUSxHQUFHaFUsT0FBTyxDQUFDNU4sRUFBekI7QUFDQSxRQUFNQSxFQUFFLEdBQUdpTyxhQUFhLENBQUUsUUFBTzJULFFBQVMsRUFBbEIsQ0FBeEI7QUFDQSxRQUFNRixHQUFHLEdBQUc7QUFDVnZtQixhQUFTLEVBQUUsSUFERDtBQUVWNkUsTUFGVTtBQUdWNGhCLFlBSFU7QUFJVm5PO0FBSlUsR0FBWjtBQU1Bb08sT0FBSyxDQUFDSCxHQUFELEVBQU05VCxPQUFOLEVBQWUrVCxRQUFmLENBQUw7QUFDQSxTQUFPO0FBQ0xHLFNBQUssR0FBRztBQUNOclYscURBQU0sQ0FBQ1MsSUFBUCxDQUFZLGNBQVosRUFBNEJsTixFQUE1QixFQUFnQzROLE9BQWhDO0FBQ0Q7O0FBSEksR0FBUDtBQUtEOztBQUVELFNBQVNtVSxTQUFULENBQW1CTCxHQUFuQixFQUF3QjFWLEdBQXhCLEVBQTZCO0FBQzNCLE1BQUlwSixHQUFHLEdBQUc4ZSxHQUFHLENBQUNqUCxHQUFkOztBQUNBLFVBQVFpUCxHQUFHLENBQUNqTyxJQUFKLENBQVM3SixZQUFqQjtBQUNBLFNBQUssTUFBTDtBQUNFaEgsU0FBRyxHQUFHb2IsU0FBUyxDQUFDcGIsR0FBRCxDQUFmO0FBQ0E7O0FBQ0YsU0FBSyxVQUFMO0FBQ0VBLFNBQUcsR0FBRyxTQUFxQm9mLGVBQXJCLE1BQUlDLGFBQUosSUFBcUNyZixHQUFyQyxFQUNKO0FBQ0EsZUFBZXNmLGFBQWYsaUJBQTZCbFcsR0FBRyxDQUFDbVcsV0FBakMsRUFBOEMsRUFBOUMsS0FBcUQsV0FGakQsQ0FBTjtBQUdBOztBQUNGO0FBVEEsR0FGMkIsQ0FhM0I7OztBQUNBVCxLQUFHLENBQUMzWCxRQUFKLEdBQWVuSCxHQUFmLENBZDJCLENBZTNCOztBQUNBLFNBQU84ZSxHQUFHLENBQUNqUCxHQUFYO0FBQ0EsU0FBTzdQLEdBQVA7QUFDRCxDLENBRUQ7OztBQUNBLFNBQVNyRyxRQUFULENBQWtCbWxCLEdBQWxCLEVBQXVCMVYsR0FBdkIsRUFBNEI7QUFDMUIsUUFBTTtBQUFFeUg7QUFBRixNQUFXaU8sR0FBakI7QUFDQSxRQUFNcmxCLEVBQUUsR0FBR29YLElBQUksQ0FBRSxLQUFJekgsR0FBRyxDQUFDcUosSUFBSyxFQUFmLENBQWY7O0FBQ0EsTUFBSWhaLEVBQUosRUFBUTtBQUNOLFVBQU07QUFBRUgsVUFBRjtBQUFRa21CO0FBQVIsUUFBdUJwVyxHQUE3Qjs7QUFDQSxRQUFJb1csVUFBSixFQUFnQjtBQUNkL2xCLFFBQUUsQ0FBQzJQLEdBQUQsQ0FBRjtBQUNBLFVBQUlBLEdBQUcsQ0FBQ3FKLElBQUosS0FBYSxNQUFqQixFQUF5QixPQUFPbU0sS0FBSyxDQUFDRSxHQUFHLENBQUMxaEIsRUFBTCxDQUFaO0FBQ3pCO0FBQ0Q7O0FBQ0QsVUFBTTtBQUNKK0osY0FESTtBQUVKc1kscUJBQWUsRUFBRTNYLE9BRmI7QUFHSlYsa0JBQVksRUFBRThLO0FBSFYsUUFJRjVZLElBSko7O0FBS0EsUUFBSTZOLFFBQVEsSUFBSSxFQUFFLFNBQVMyWCxHQUFYLENBQWhCLEVBQWlDO0FBQy9CQSxTQUFHLENBQUNqUCxHQUFKLEdBQVUxSSxRQUFWO0FBQ0Q7O0FBQ0R1UyxrQkFBYyxDQUFDcGdCLElBQUQsRUFBTyxVQUFQLEVBQW1CO0FBQy9CZixlQUFTLEVBQUUsSUFEb0I7O0FBRS9CdWdCLFNBQUcsR0FBRztBQUNKLGNBQU1uWSxLQUFLLEdBQUcsU0FBU21lLEdBQVQsR0FBZUssU0FBUyxDQUFDTCxHQUFELEVBQU0xVixHQUFOLENBQXhCLEdBQXFDMFYsR0FBRyxDQUFDM1gsUUFBdkQ7QUFDQXVTLHNCQUFjLENBQUMsSUFBRCxFQUFPLFVBQVAsRUFBbUI7QUFBRW5oQixtQkFBUyxFQUFFLElBQWI7QUFBbUJvSTtBQUFuQixTQUFuQixDQUFkO0FBQ0EsZUFBT0EsS0FBUDtBQUNEOztBQU44QixLQUFuQixDQUFkO0FBUUEsUUFBSW1ILE9BQU8sSUFBSSxJQUFmLEVBQXFCZ1gsR0FBRyxDQUFDaFgsT0FBSixHQUFjQSxPQUFkO0FBQ3JCLFFBQUlvSyxJQUFJLElBQUksSUFBWixFQUFrQjRNLEdBQUcsQ0FBQzVNLElBQUosR0FBV2tJLFVBQVUsQ0FBQ2xJLElBQUQsRUFBTyxDQUFQLENBQVYsS0FBd0IsTUFBeEIsR0FBaUMvSyxRQUFqQyxHQUE0QytLLElBQXZEO0FBQ2xCNUcsY0FBVSxDQUFDaFMsSUFBRCxFQUFPLFNBQVAsRUFBa0J1WCxJQUFJLENBQUM3RixPQUF2QixDQUFWO0FBQ0FNLGNBQVUsQ0FBQ2hTLElBQUQsRUFBTyxpQkFBUCxFQUEwQndsQixHQUFHLENBQUNoWCxPQUE5QixDQUFWO0FBQ0F3RCxjQUFVLENBQUNoUyxJQUFELEVBQU8sY0FBUCxFQUF1QndsQixHQUFHLENBQUM1TSxJQUEzQixDQUFWO0FBQ0F6WSxNQUFFLENBQUNILElBQUQsQ0FBRjtBQUNEOztBQUNELE1BQUk4UCxHQUFHLENBQUNxSixJQUFKLEtBQWEsU0FBakIsRUFBNEIsT0FBT21NLEtBQUssQ0FBQ0UsR0FBRyxDQUFDMWhCLEVBQUwsQ0FBWjtBQUM3Qjs7QUFFRCxlQUFlNmhCLEtBQWYsQ0FBcUJILEdBQXJCLEVBQTBCOVQsT0FBMUIsRUFBbUMrVCxRQUFuQyxFQUE2QztBQUMzQyxRQUFNO0FBQUUzaEIsTUFBRjtBQUFNeVQsUUFBTjtBQUFZbU87QUFBWixNQUF5QkYsR0FBL0IsQ0FEMkMsQ0FFM0M7QUFDQTs7QUFDQSxRQUFNO0FBQUV4bEIsUUFBRjtBQUFRb21CLG1CQUFlLEdBQUcsSUFBMUI7QUFBZ0NDLGFBQVMsR0FBRyxDQUFDRDtBQUE3QyxNQUFpRTdPLElBQXZFO0FBQ0ErTixPQUFLLENBQUN4aEIsRUFBRCxDQUFMLEdBQVkwaEIsR0FBWjtBQUNBalYsaURBQU0sQ0FBQ1MsSUFBUCxDQUFZLGFBQVosRUFBMkIsU0F3QnhCeUcsWUF4QndCO0FBQ3pCeFksYUFBUyxFQUFFLElBRGM7QUFFekI2RSxNQUZ5QjtBQUd6QjRoQixZQUh5QjtBQUl6QlcsYUFKeUI7QUFLekJaLFlBTHlCO0FBTXpCemxCLFFBQUksRUFBRUEsSUFBSSxJQUFJLElBQVIsSUFBZ0IsRUFBaEIsQ0FDSjtBQURJLE9BRUQsQ0FBQ3VYLElBQUksQ0FBQytPLE1BQUwsSUFBZSxDQUFDNU4sUUFBUSxDQUFDMVksSUFBRCxDQUF6QixLQUFvQyxDQUFFLEdBQUVBLElBQUssRUFBVCxDQUZuQyxDQUdKO0FBSEksT0FJRDJhLFVBQVUsSUFBSXBLLCtDQUFNLENBQUN5RSxFQUFQLENBQVV1UixjQUFWLElBQTRCLEVBQTFDLElBQWdELENBQUN2bUIsSUFBRCxDQUovQyxDQUtKO0FBTEksUUFNRCxNQUFNd21CLFVBQVUsQ0FBQ3htQixJQUFELENBTmYsQ0FObUI7QUFhekJ5bUIsa0JBQWMsRUFBRSxTQVNiemdCLE1BVGEsR0FDZCxPQURjLEVBRWQsT0FGYyxFQUdkLE1BSGMsRUFJZCxTQUpjLEVBS2QsV0FMYyxFQU1kLFVBTmMsRUFPZCxrQkFQYyxFQVFkLFNBUmMsR0FTTmhELEdBQUcsSUFBSTZVLFVBQVUsQ0FBQ2lKLFVBQVUsQ0FBQ3ZKLElBQUQsRUFBUSxLQUFJdlUsR0FBSSxFQUFoQixDQUFYLENBVFgsQ0FiUztBQXVCekIwakIsV0FBTyxFQUFFQyxlQUFlLENBQUNwUCxJQUFJLENBQUM3SixZQUFOO0FBdkJDLEtBd0JYNkosSUF4QlcsRUF3QkwsQ0FDcEIsU0FEb0IsRUFFcEIsUUFGb0IsRUFHcEIsa0JBSG9CLEVBSXBCLFVBSm9CLEVBS3BCLFNBTG9CLEVBTXBCLEtBTm9CLEVBT3BCLE1BUG9CLENBeEJLLENBQTNCLEVBZ0NJN0YsT0FoQ0o7QUFpQ0Q7O0FBRUQsU0FBU2lWLGVBQVQsQ0FBeUI7QUFBRWpaLGNBQVksR0FBRztBQUFqQixDQUF6QixFQUFnRDtBQUM5QyxVQUFRQSxZQUFSO0FBQ0EsU0FBSyxhQUFMO0FBQ0EsU0FBSyxNQUFMO0FBQ0UsYUFBT0EsWUFBUDs7QUFDRixTQUFLLFVBQUw7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLEVBQUw7QUFDRTs7QUFDRjtBQUNFb0ksU0FBRyxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWdCLHlCQUF3QnBJLFlBQWEsSUFBdEMsR0FDZCxpRkFERCxDQUFIO0FBVkY7O0FBYUEsU0FBTyxFQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLGVBQWU4WSxVQUFmLENBQTBCalksSUFBMUIsRUFBZ0M7QUFDOUIsUUFBTXFZLE9BQU8sR0FBR25GLGdCQUFnQixDQUFDbFQsSUFBRCxDQUFoQixLQUEyQixNQUEzQztBQUNBLFFBQU14RCxJQUFJLEdBQUc2YixPQUFPLEdBQUdyWSxJQUFILEdBQVUsTUFBTSxTQUF3QnNZLGdCQUF4QixNQUFJQyxZQUFKLENBQWlCdlksSUFBakIsRUFBcEM7QUFDQSxRQUFNdEQsTUFBTSxHQUFHLElBQUk4YixjQUFKLEVBQWY7QUFDQSxTQUFPLElBQUlwVixXQUFKLENBQWdCL0wsT0FBTyxJQUFJO0FBQ2hDLGFBQVE2SyxFQUFSLEVBQUF4RixNQUFNLEVBQUssTUFBTCxFQUFhLE1BQU1yRixPQUFPLENBQUMsQ0FDL0IsU0FBUW9oQixlQUFSLEVBQUEvYixNQUFNLENBRHlCLEVBRS9CLFNBQU1nYyxXQUFOLEVBQUFsYyxJQUFJLENBRjJCLEVBRy9CNmIsT0FIK0IsQ0FBRCxDQUExQixDQUFOO0FBS0EsYUFBUXpiLGFBQVIsRUFBQUYsTUFBTSxFQUFnQkYsSUFBaEIsQ0FBTjtBQUNELEdBUE0sQ0FBUDtBQVFELEM7Ozs7Ozs7Ozs7OztBQ2pLRDtBQUFlO0FBQ2I5TCxXQUFTLEVBQUUsSUFERTtBQUVia1ksVUFBUSxFQUFFN0YsYUFBYSxFQUZWO0FBR2J2SixRQUFNLEVBQUV1SixhQUFhO0FBSFIsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUkyVCxNQUFNLEdBQUcsQ0FBYjtBQUNBLE1BQU10akIsSUFBSSxHQUFHMlAsYUFBYSxFQUExQjtBQUVBZiwrQ0FBTSxDQUFDaUIsV0FBUCxDQUFtQjtBQUNqQjBWLFdBQVMsQ0FBQ2xrQixHQUFELEVBQU07QUFDYixVQUFNb0YsSUFBSSxHQUFHekcsSUFBSSxDQUFDcUIsR0FBRCxDQUFqQjs7QUFDQSxRQUFJb0YsSUFBSixFQUFVO0FBQ1JBLFVBQUksQ0FBQytTLE1BQUwsR0FBYyxJQUFkO0FBQ0EsYUFBT3haLElBQUksQ0FBQ3FCLEdBQUQsQ0FBWDtBQUNBLFlBQU15TyxFQUFFLEdBQUdySixJQUFJLENBQUMrZSxPQUFoQjtBQUNBLFVBQUkxVixFQUFKLEVBQVFBLEVBQUU7QUFDWDtBQUNGOztBQVRnQixDQUFuQjtBQVlPLFNBQVNnSCxXQUFULENBQXFCelksSUFBckIsRUFBMkIwUixPQUEzQixFQUFvQztBQUN6Q3VULFFBQU0sSUFBSSxDQUFWO0FBQ0EsUUFBTWppQixHQUFHLEdBQUdpaUIsTUFBWjtBQUNBLFFBQU03YyxJQUFJLEdBQUc7QUFDWCtlLFdBQU8sRUFBRSxJQURFO0FBRVhoTSxVQUFNLEVBQUUsS0FGRzs7QUFHWDFILFNBQUssR0FBRztBQUNObEQscURBQU0sQ0FBQ1MsSUFBUCxDQUFZLFVBQVosRUFBd0JoTyxHQUF4QixFQUE2QjBPLE9BQTdCO0FBQ0Q7O0FBTFUsR0FBYjtBQU9BL1AsTUFBSSxDQUFDcUIsR0FBRCxDQUFKLEdBQVlvRixJQUFaO0FBQ0FtSSxpREFBTSxDQUFDUyxJQUFQLENBQVksU0FBWixFQUF1QjtBQUFFaE8sT0FBRjtBQUFPaEQ7QUFBUCxHQUF2QixFQUFzQzBSLE9BQXRDO0FBQ0EsU0FBT3RKLElBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUM5QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTWdmLHFCQUFxQixHQUFHbk4sVUFBVSxDQUFDb04sa0JBQXpDO0FBRU8sTUFBTWxULFVBQVUsR0FBRyxDQUFDbVQsSUFBRCxFQUFPLEdBQUdDLE1BQVYsS0FBcUI7QUFDN0MsTUFBSSxDQUFDRCxJQUFJLENBQUNGLHFCQUFELENBQVQsRUFBa0M7QUFDaENwVixjQUFVLENBQUNzVixJQUFELEVBQU9GLHFCQUFQLEVBQThCLElBQTlCLENBQVY7QUFDQSxhQUFRbG5CLE9BQVIsRUFBQXFuQixNQUFNLEVBQVVDLEdBQUcsSUFBSXhWLFVBQVUsQ0FBQ3dWLEdBQUQsRUFBTUoscUJBQU4sRUFBNkIsSUFBN0IsQ0FBM0IsQ0FBTjtBQUNEOztBQUNELFNBQU8sU0FBUXJlLEtBQVIsRUFBQTBlLE1BQU0sRUFBUUgsSUFBUixFQUFjQyxNQUFkLENBQWI7QUFDRCxDQU5NLEMsQ0FRUDs7QUFDQSxNQUFNRyxNQUFNLEdBQUc7QUFDYnpvQixXQUFTLEVBQUUsSUFERTtBQUViLE9BQUssS0FGUTtBQUdiLFFBQU0sTUFITztBQUliLFFBQU0sS0FKTztBQUtiLFFBQU0sS0FMTztBQU1iLFFBQU0sS0FOTztBQU9iLFFBQU0sS0FQTztBQVFiLFFBQU07QUFSTyxDQUFmLEMsQ0FVQTs7QUFDQSxNQUFNMG9CLEtBQUssR0FBRyxxQkFBZCxDLENBQXFDOztBQUNyQyxNQUFNQyxHQUFHLEdBQUcsa0JBQVo7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHamxCLEdBQUcsSUFBSyxRQUMxQmdsQixHQUFHLENBQUNobEIsR0FBRyxJQUFJLENBQVIsQ0FEc0IsQ0FDWDtBQUNmLEdBQ0NnbEIsR0FBRyxDQUFDaGxCLEdBQUcsR0FBRyxFQUFQLENBQ0osRUFKRDs7QUFLQSxNQUFNa2xCLE9BQU8sR0FBR3JqQixDQUFDLElBQUlpakIsTUFBTSxDQUFDampCLENBQUQsQ0FBTixJQUFhb2pCLFdBQVcsQ0FBQyxTQUFHbGpCLFVBQUgsRUFBQUYsQ0FBQyxFQUFhLENBQWIsQ0FBRixDQUE3QztBQUNBOzs7Ozs7OztBQU1PLE1BQU1pTCxRQUFRLEdBQUcsQ0FBQ3JJLEtBQUQsRUFBUXVTLEtBQVIsS0FBa0I7QUFDeEMsTUFBSWxULEdBQUo7O0FBQ0EsVUFBUVcsS0FBSyxLQUFLLElBQVYsR0FBa0JYLEdBQUcsR0FBRyxNQUF4QixHQUFrQyxPQUFPVyxLQUFqRDtBQUNBLFNBQUssUUFBTDtBQUNBLFNBQUssUUFBTDtBQUNFWCxTQUFHLEdBQUdxaEIsWUFBWSxDQUFDMWdCLEtBQUQsQ0FBWixHQUF1QixHQUFFQSxLQUFNLEVBQS9CLEdBQW1DLE1BQXpDO0FBQ0E7O0FBQ0YsU0FBSyxTQUFMO0FBQ0VYLFNBQUcsR0FBSSxHQUFFVyxLQUFNLEVBQWY7QUFDQTs7QUFDRixTQUFLLFFBQUw7QUFDRVgsU0FBRyxHQUFJLElBQUcsU0FBT3NmLGFBQVAsRUFBQTJCLEtBQUssRUFBZ0J0Z0IsS0FBaEIsRUFBdUJ5Z0IsT0FBdkIsQ0FBZ0MsR0FBL0M7QUFDQTs7QUFDRixTQUFLLFFBQUw7QUFDRSxVQUFJLENBQUNsTyxLQUFMLEVBQVk7QUFDVkEsYUFBSyxHQUFHLENBQUN2UyxLQUFELENBQVIsQ0FEVSxDQUNPO0FBQ2xCLE9BRkQsTUFFTyxJQUFJLFNBQU83RyxPQUFQLEVBQUFvWixLQUFLLEVBQVV2UyxLQUFWLENBQUwsSUFBeUIsQ0FBN0IsRUFBZ0M7QUFDckMsY0FBTSxJQUFJcVEsU0FBSixDQUFjLHVDQUFkLENBQU47QUFDRCxPQUZNLE1BRUE7QUFDTDFGLGtCQUFVLENBQUM0SCxLQUFELEVBQVFBLEtBQUssQ0FBQ2xYLE1BQWQsRUFBc0IyRSxLQUF0QixDQUFWO0FBQ0Q7O0FBQ0QsVUFBSTJnQixZQUFZLENBQUMzZ0IsS0FBRCxDQUFoQixFQUF5QjtBQUN2QlgsV0FBRyxHQUFHLEdBQU4sQ0FEdUIsQ0FFdkI7O0FBQ0EsYUFBSyxJQUFJbkcsQ0FBQyxHQUFHLENBQVIsRUFBV2lMLEdBQUcsR0FBR25FLEtBQUssQ0FBQzNFLE1BQTVCLEVBQW9DbkMsQ0FBQyxHQUFHaUwsR0FBeEMsRUFBNkNqTCxDQUFDLElBQUksQ0FBbEQsRUFBcUQ7QUFBQTs7QUFDbkRtRyxhQUFHLElBQUssR0FBRW5HLENBQUMsR0FBRyxHQUFILEdBQVMsRUFBRyxHQUFoQixhQUFrQm1QLFFBQVEsQ0FBQ3JJLEtBQUssQ0FBQzlHLENBQUQsQ0FBTixFQUFXcVosS0FBWCxDQUExQix3QkFBK0MsTUFBTyxFQUE3RDtBQUNEOztBQUNEbFQsV0FBRyxJQUFJLEdBQVA7QUFDRCxPQVBELE1BT087QUFDTEEsV0FBRyxHQUFHLEdBQU47QUFDQSxpQkFBbUJ4RyxPQUFuQixFQUFBZ1UsVUFBVSxDQUFDN00sS0FBRCxDQUFWLEVBQTRCckUsR0FBRCxJQUFTO0FBQ2xDLGdCQUFNaWxCLENBQUMsR0FBR3ZZLFFBQVEsQ0FBQ3JJLEtBQUssQ0FBQ3JFLEdBQUQsQ0FBTixFQUFhNFcsS0FBYixDQUFsQixDQURrQyxDQUVsQzs7QUFDQSxjQUFJcU8sQ0FBQyxLQUFLblosU0FBVixFQUFxQjtBQUNuQnBJLGVBQUcsSUFBSyxHQUFFQSxHQUFHLENBQUNoRSxNQUFKLEdBQWEsQ0FBYixHQUFpQixHQUFqQixHQUF1QixFQUFHLEdBQUVnTixRQUFRLENBQUMxTSxHQUFELENBQU0sSUFBR2lsQixDQUFFLEVBQXpEO0FBQ0Q7QUFDRixTQU5EO0FBT0F2aEIsV0FBRyxJQUFJLEdBQVA7QUFDRDs7QUFDRGtULFdBQUssQ0FBQ2xYLE1BQU4sSUFBZ0IsQ0FBaEI7QUFDQTs7QUFDRjtBQXZDQTs7QUF5Q0EsU0FBT2dFLEdBQVA7QUFDRCxDQTVDTTtBQThDUDs7Ozs7QUFJTyxNQUFNMFQsVUFBVSxHQUFHLENBQUM4TixJQUFJLEdBQUc1VyxhQUFhLEVBQXJCLEtBQTRCO0FBQ3BEO0FBQ0EsU0FBTztBQUNMc0osT0FBRyxDQUFDL1QsR0FBRCxFQUFNO0FBQ1BzaEIsWUFBTSxDQUFDdGhCLEdBQUQsRUFBTSxJQUFOLENBQU4sQ0FBa0JBLEdBQWxCLElBQXlCLElBQXpCO0FBQ0QsS0FISTs7QUFJTDRaLFNBQUssR0FBRztBQUNOLFlBQU1BLEtBQUssR0FBR25QLGFBQWEsRUFBM0I7O0FBQ0EsV0FBSyxNQUFNOFcsS0FBWCxJQUFvQkYsSUFBcEIsRUFBMEI7QUFBRTtBQUFtQjtBQUM3Q3pILGFBQUssQ0FBQzJILEtBQUQsQ0FBTCxHQUFldlosTUFBTSxDQUFDeUMsYUFBYSxFQUFkLEVBQWtCNFcsSUFBSSxDQUFDRSxLQUFELENBQXRCLENBQXJCO0FBQ0Q7O0FBQ0QsYUFBT2hPLFVBQVUsQ0FBQ3FHLEtBQUQsQ0FBakI7QUFDRCxLQVZJOztBQVdMQyxVQUFNLENBQUM3WixHQUFELEVBQU07QUFBQTs7QUFDVixpQkFBT3NoQixNQUFNLENBQUN0aEIsR0FBRCxDQUFiLDBCQUFPLFFBQWNBLEdBQWQsQ0FBUDtBQUNELEtBYkk7O0FBY0xnVSxPQUFHLEVBQUVoVSxHQUFHO0FBQUE7O0FBQUEseUJBQUlzaEIsTUFBTSxDQUFDdGhCLEdBQUQsQ0FBVixxQkFBSSxTQUFjQSxHQUFkLENBQUo7QUFBQSxLQWRIO0FBZUxpVSxXQUFPLEVBQUUsTUFBTTtBQUNiLFlBQU0vUyxNQUFNLEdBQUc4TixZQUFZLENBQUNxUyxJQUFELENBQTNCO0FBQ0EsZUFBUWhvQixPQUFSLEVBQUE2SCxNQUFNLEVBQVUsQ0FBQ2xCLEdBQUQsRUFBTXRHLENBQU4sS0FBWTtBQUFFd0gsY0FBTSxDQUFDeEgsQ0FBRCxDQUFOLEdBQVkyVCxVQUFVLENBQUNyTixHQUFELENBQXRCO0FBQThCLE9BQXRELENBQU47QUFDQSxhQUFPc04sVUFBVSxDQUFDLEVBQUQsRUFBS3BNLE1BQUwsQ0FBakI7QUFDRDtBQW5CSSxHQUFQOztBQXFCQSxXQUFTb2dCLE1BQVQsQ0FBZ0J0aEIsR0FBaEIsRUFBcUJ3aEIsVUFBckIsRUFBaUM7QUFDL0IsVUFBTUQsS0FBSyxHQUFHdmhCLEdBQUcsQ0FBQ25FLE1BQUosR0FBYW1FLEdBQUcsQ0FBQyxDQUFELENBQWhCLEdBQXNCLEVBQXBDLENBRCtCLENBQ1M7O0FBQ3hDLFVBQU15aEIsR0FBRyxHQUFHSixJQUFJLENBQUNFLEtBQUQsQ0FBSixLQUNWQyxVQUFVLEdBQUlILElBQUksQ0FBQ0UsS0FBRCxDQUFKLEdBQWM5VyxhQUFhLEVBQS9CLEdBQ04sSUFGTSxDQUFaO0FBSUEsV0FBT2dYLEdBQVA7QUFDRDtBQUNGLENBL0JNO0FBaUNQOzs7Ozs7QUFLTyxNQUFNL1Usa0JBQWtCLEdBQUcsTUFBTTtBQUN0QyxRQUFNZ1YsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsUUFBTUMsZ0JBQWdCLEdBQUcsZ0JBQXpCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLGdCQUF4QjtBQUNBLFFBQU16Z0IsR0FBRyxHQUFHMlMsVUFBVSxJQUFJcEssK0NBQU0sQ0FBQ3VFLElBQVAsS0FBZ0JoVyxvREFBOUIsSUFBZ0RTLE1BQTVEOztBQUNBLFFBQU1tcEIsUUFBUSxHQUFHLENBQUMxZ0IsR0FBRCxLQUFTLENBQUMyZ0IsTUFBRCxFQUFTQyxFQUFULEVBQWEvaEIsR0FBYixLQUFxQjtBQUM3QyxRQUFJK2hCLEVBQUUsS0FBS0EsRUFBRSxHQUFHOUgsVUFBVSxDQUFDOEgsRUFBRCxFQUFLLFVBQUwsQ0FBcEIsQ0FBTixFQUE2QztBQUMzQzVXLGdCQUFVLENBQUMyVyxNQUFELEVBQVNDLEVBQVQsRUFBYS9oQixHQUFiLENBQVY7QUFDRDs7QUFDRCxXQUFPQSxHQUFQO0FBQ0QsR0FMZ0IsQ0FBakI7O0FBTUEsU0FBTztBQUNMLEtBQUMwaEIsVUFBRCxHQUFjdmdCLEdBQUcsSUFBSUEsR0FBRyxDQUFDdWdCLFVBQUQsQ0FBVixLQUNacGtCLEdBQUcsSUFBSUEsR0FESyxDQURUO0FBSUwsS0FBQ3FrQixnQkFBRCxHQUFvQnhnQixHQUFHLElBQUlBLEdBQUcsQ0FBQ3dnQixnQkFBRCxDQUFWLEtBQ2xCLENBQUNHLE1BQUQsRUFBU0MsRUFBVCxLQUFnQkYsUUFBUSxDQUFDQyxNQUFELEVBQVNDLEVBQVQsRUFBYSxFQUFiLENBRE4sQ0FKZjtBQU9MLEtBQUNILGVBQUQsR0FBbUJ6Z0IsR0FBRyxJQUFJQSxHQUFHLENBQUN5Z0IsZUFBRCxDQUFWLEtBQ2pCLENBQUNsaEIsSUFBRCxFQUFPb2hCLE1BQVAsRUFBZUMsRUFBZixLQUFzQkYsUUFBUSxDQUFDQyxNQUFELEVBQVNDLEVBQVQsRUFBYXJoQixJQUFiLENBRGI7QUFQZCxHQUFQO0FBV0QsQ0F0Qk0sQyIsImZpbGUiOiJpbmplY3RlZC13ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHsgX19wcm90b19fOiBudWxsIH07ICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBjLCBzdHIgPSBcImNkbW5vcHJ0XCI7IGkgPCBzdHIubGVuZ3RoICYmIChjID0gc3RyW2krK10pOykgICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfcmVxdWlyZV9fLCBjLCB7IF9fcHJvdG9fXzogbnVsbCwgdmFsdWU6IHVuZGVmaW5lZCwgd3JpdGFibGU6IHRydWUgfSk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHsgX19wcm90b19fOiBudWxsIH0sIF9fcHJvdG9fXzogbnVsbFxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRzYWZlQ2FsbChtb2R1bGVzW21vZHVsZUlkXSwgbW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRkZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7X19wcm90b19fOiBudWxsLCBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0cnVlKSB7XG4gXHRcdFx0ZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgdG9TdHJpbmdUYWdTeW0sIHtfX3Byb3RvX186IG51bGwsIHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRkZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtfX3Byb3RvX186IG51bGwsIHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0geyBfX3Byb3RvX186IG51bGwgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0ZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0Jywge19fcHJvdG9fXzogbnVsbCwgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcihjb25zdCBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCAoKSA9PiB2YWx1ZVtrZXldKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwga2V5KSA9PiBzYWZlQ2FsbChoYXNPd25Qcm9wZXJ0eSwgb2JqLCBrZXkpO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5qZWN0ZWQvd2ViL2luZGV4LmpzXCIpO1xuIiwiLy8gU0FGRVRZIFdBUk5JTkchIEV4cG9ydHMgdXNlZCBieSBgaW5qZWN0ZWRgIG11c3QgbWFrZSA6OnNhZmUoKSBjYWxscyBhbmQgdXNlIF9fcHJvdG9fXzpudWxsXG5cbi8vIGZvciBnbG9iYWwgZXZlbnQgYnVzIGFuZCBzYXZlIHNvbWUgYnVpbGQgaW4gaW5mb1xuZXhwb3J0IGNvbnN0IEtFWV9HTE9CQUxfSUQgPSAnX0dMT0JBTF9JRF8nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX0lOX1NDUklQVF9TUkMgPSAnaHR0cHM6Ly9taXJhLTEyNTU4MzA5OTMuY29zLmFwLXNoYW5naGFpLm15cWNsb3VkLmNvbS9sYWIvcGx1Z2luL2Jhc2UudXNlci5qcyc7XG5cbmV4cG9ydCBjb25zdCBJTkpFQ1RfQVVUTyA9ICdhdXRvJztcbmV4cG9ydCBjb25zdCBJTkpFQ1RfUEFHRSA9ICdwYWdlJztcbmV4cG9ydCBjb25zdCBJTkpFQ1RfQ09OVEVOVCA9ICdjb250ZW50JztcblxuZXhwb3J0IGNvbnN0IElTX0RFViA9IHRydWU7XG5cbmV4cG9ydCBjb25zdCBJTkpFQ1RfTUFQUElORyA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICAvLyBgYXV0b2AgdHJpZXMgdG8gcHJvdmlkZSBgd2luZG93YCBmcm9tIHRoZSByZWFsIHBhZ2UgYXMgYHVuc2FmZVdpbmRvd2BcbiAgW0lOSkVDVF9BVVRPXTogW0lOSkVDVF9QQUdFLCBJTkpFQ1RfQ09OVEVOVF0sXG4gIC8vIGluamVjdCBpbnRvIHBhZ2UgY29udGV4dFxuICBbSU5KRUNUX1BBR0VdOiBbSU5KRUNUX1BBR0VdLFxuICAvLyBpbmplY3QgaW50byBjb250ZW50IGNvbnRleHQgb25seVxuICBbSU5KRUNUX0NPTlRFTlRdOiBbSU5KRUNUX0NPTlRFTlRdLFxufTtcblxuZXhwb3J0IGNvbnN0IENNRF9TQ1JJUFRfQUREID0gJ0FkZFNjcmlwdCc7XG5leHBvcnQgY29uc3QgQ01EX1NDUklQVF9VUERBVEUgPSAnVXBkYXRlU2NyaXB0JztcblxuLy8gQWxsb3cgbWV0YWRhdGEgbGluZXMgdG8gc3RhcnQgd2l0aCBXSElURVNQQUNFPyAnLy8nIFNQQUNFXG4vLyBBbGxvdyBhbnl0aGluZyB0byBmb2xsb3cgdGhlIHByZWRlZmluZWQgdGV4dCBvZiB0aGUgbWV0YVN0YXJ0L0VuZFxuLy8gVGhlIFNQQUNFIG11c3QgYmUgb24gdGhlIHNhbWUgbGluZSBhbmQgc3BlY2lmaWNhbGx5IFxceDIwIGFzIFxccyB3b3VsZCBhbHNvIG1hdGNoIFxcclxcblxcdFxuLy8gTm90ZTogd2hlbiB0aGVyZSdzIG5vIHZhbGlkIG1ldGFibG9jaywgYW4gZW1wdHkgc3RyaW5nIGlzIG1hdGNoZWQgZm9yIGNvbnZlbmllbmNlXG5leHBvcnQgY29uc3QgTUVUQUJMT0NLX1JFID0gLyg/Ol58XFxuKVxccypcXC9cXC9cXHgyMD09VXNlclNjcmlwdD09KFtcXHNcXFNdKj9cXG4pXFxzKlxcL1xcL1xceDIwPT1cXC9Vc2VyU2NyaXB0PT18JC87XG5cbmV4cG9ydCBjb25zdCBJTkpFQ1RBQkxFX1RBQl9VUkxfUkUgPSAvXihodHRwcz98ZmlsZXxmdHBzPyk6LztcblxuLy8gYGJyb3dzZXJgIGlzIGEgbG9jYWwgdmFyaWFibGUgc2luY2Ugd2UgcmVtb3ZlIHRoZSBnbG9iYWwgYGNocm9tZWAgYW5kIGBicm93c2VyYCBpbiBpbmplY3RlZCpcbi8vIHRvIHByZXZlbnQgZXhwb3NpbmcgdGhlbSB0byB1c2Vyc2NyaXB0cyB3aXRoIGBAaW5qZWN0LWludG8gY29udGVudGBcbmV4cG9ydCBjb25zdCB7IGJyb3dzZXIgfSA9IGdsb2JhbDtcblxuLy8gc2V0VGltZW91dCB0cnVuY2F0ZXMgdGhlIGRlbGF5IHRvIGEgMzItYml0IHNpZ25lZCBpbnRlZ2VyIHNvIHRoZSBtYXggZGVsYXkgaXMgfjI0IGRheXNcbmV4cG9ydCBjb25zdCBUSU1FT1VUX01BWCA9IDB4N0ZGRl9GRkZGO1xuZXhwb3J0IGNvbnN0IFRJTUVPVVRfSE9VUiA9IDYwICogNjAgKiAxMDAwO1xuZXhwb3J0IGNvbnN0IFRJTUVPVVRfMjRIT1VSUyA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5leHBvcnQgY29uc3QgVElNRU9VVF9XRUVLID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4iLCIvLyBTQUZFVFkgV0FSTklORyEgRXhwb3J0cyB1c2VkIGJ5IGBpbmplY3RlZGAgbXVzdCBtYWtlIDo6c2FmZSgpIGNhbGxzIGFuZCB1c2UgX19wcm90b19fOm51bGxcblxuaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJy4vb2JqZWN0JztcbmltcG9ydCB7IGkxOG4sIG5vb3AgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgeyBub3JtYWxpemVLZXlzIH0gZnJvbSAnLi9vYmplY3QnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJbWFnZSA9ICcvcHVibGljL2ltYWdlcy9pY29uMTI4LnBuZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0SG9va3MoKSB7XG4gIGNvbnN0IGhvb2tzID0gW107XG5cbiAgZnVuY3Rpb24gZmlyZShkYXRhKSB7XG4gICAgaG9va3Muc2xpY2UoKS5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgY2IoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBob29rKGNhbGxiYWNrKSB7XG4gICAgaG9va3MucHVzaChjYWxsYmFjayk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGkgPSBob29rcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIGlmIChpID49IDApIGhvb2tzLnNwbGljZShpLCAxKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaG9vaywgZmlyZSB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYGluamVjdGVkYFxuICogQHBhcmFtIHtzdHJpbmd9IGNtZFxuICogQHBhcmFtIGRhdGFcbiAqIEBwYXJhbSB7e3JldHJ5PzogYm9vbGVhbiwgaWdub3JlRXJyb3I/OiBib29sZWFufX0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZENtZChjbWQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHNlbmRNZXNzYWdlKHsgY21kLCBkYXRhIH0sIG9wdGlvbnMpO1xufVxuXG4vLyBUaGVzZSBuZWVkIGBzcmNgIHBhcmFtZXRlciBzbyB3ZSdsbCB1c2Ugc2VuZENtZCBmb3IgdGhlbS4gV2UgY291bGQgaGF2ZSBmb3JnZWQgYHNyY2AgdmlhXG4vLyBicm93c2VyLnRhYnMuZ2V0Q3VycmVudCBidXQgdGhlcmUncyBubyBuZWVkIGFzIHRoZXkgbm9ybWFsbHkgdXNlIG9ubHkgYSB0aW55IGFtb3VudCBvZiBkYXRhLlxuY29uc3QgQ09NTUFORFNfV0lUSF9TUkMgPSBbXG4gICdDb25maXJtSW5zdGFsbCcsXG4gICdOb3RpZmljYXRpb24nLFxuICAnVGFiQ2xvc2UnLFxuICAnVGFiRm9jdXMnLFxuICAnVGFiT3BlbicsXG4gICdVcGRhdGVWYWx1ZScsXG4vKlxuICBUaGVzZSBhcmUgdXNlZCBvbmx5IGJ5IGNvbnRlbnQgc2NyaXB0cyB3aGVyZSBzZW5kQ21kRGlyZWN0bHkgY2FuJ3QgYmUgdXNlZCBhbnl3YXlcbiAgJ0dldEluamVjdGVkJyxcbiAgJ0dldFJlcXVlc3RJZCcsXG4gICdIdHRwUmVxdWVzdCcsXG4gICdJbmplY3Rpb25GZWVkYmFjaycsXG4gICdTZXRQb3B1cCcsXG4qL1xuXTtcbmNvbnN0IGdldEJnUGFnZSA9ICgpID0+IGJyb3dzZXIuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlPy4oKTtcblxuLyoqXG4gKiBTZW5kcyB0aGUgY29tbWFuZCtkYXRhIGRpcmVjdGx5IHNvIGl0J3Mgc3luY2hyb25vdXMgYW5kIGZhc3RlciB0aGFuIHNlbmRDbWQgdGhhbmtzIHRvIGRlZXBDb3B5LlxuICogV0FSTklORyEgTWFrZSBzdXJlIGBjbWRgIGhhbmRsZXIgZG9lc24ndCB1c2UgYHNyY2Agb3IgYGNtZGAgaXMgbGlzdGVkIGluIENPTU1BTkRTX1dJVEhfU1JDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZENtZERpcmVjdGx5KGNtZCwgZGF0YSwgb3B0aW9ucykge1xuICBjb25zdCBiZyA9ICFDT01NQU5EU19XSVRIX1NSQy5pbmNsdWRlcyhjbWQpICYmIGdldEJnUGFnZSgpO1xuICByZXR1cm4gYmcgJiYgYmcgIT09IHdpbmRvdyAmJiBiZy5kZWVwQ29weVxuICAgID8gYmcuaGFuZGxlQ29tbWFuZE1lc3NhZ2UoYmcuZGVlcENvcHkoeyBjbWQsIGRhdGEgfSkpLnRoZW4oZGVlcENvcHkpXG4gICAgOiBzZW5kQ21kKGNtZCwgZGF0YSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYklkXG4gKiBAcGFyYW0ge3N0cmluZ30gY21kXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIHt7ZnJhbWVJZD86IG51bWJlcn19IFtvcHRpb25zXVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRUYWJDbWQodGFiSWQsIGNtZCwgZGF0YSwgb3B0aW9ucykge1xuICByZXR1cm4gYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IGNtZCwgZGF0YSB9LCBvcHRpb25zKS5jYXRjaChub29wKTtcbn1cblxuLy8gVXNlZCBieSBgaW5qZWN0ZWRgXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2UocGF5bG9hZCwgeyByZXRyeSB9ID0ge30pIHtcbiAgaWYgKHJldHJ5KSByZXR1cm4gc2VuZE1lc3NhZ2VSZXRyeShwYXlsb2FkKTtcbiAgbGV0IHByb21pc2UgPSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UocGF5bG9hZCk7XG4gIC8vIElnbm9yaW5nIGVycm9ycyB3aGVuIHNlbmRpbmcgZnJvbSB0aGUgYmFja2dyb3VuZCBzY3JpcHQgYmVjYXVzZSBpdCdzIGEgYnJvYWRjYXN0XG4gIGlmICghcHJvY2Vzcy5lbnYuSVNfSU5KRUNURUQgJiYgd2luZG93ID09PSBnZXRCZ1BhZ2UoKSkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLmNhdGNoKG5vb3ApO1xuICB9XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYGluamVjdGVkYFxuICogVGhlIGFjdGl2ZSB0YWIgcGFnZSBhbmQgaXRzIFtjb250ZW50XSBzY3JpcHRzIGxvYWQgYmVmb3JlIHRoZSBleHRlbnNpb24nc1xuICogcGVyc2lzdGVudCBiYWNrZ3JvdW5kIHNjcmlwdCB3aGVuIENocm9tZSBzdGFydHMgd2l0aCBhIFVSTCB2aWEgY29tbWFuZCBsaW5lXG4gKiBvciB3aGVuIGNvbmZpZ3VyZWQgdG8gcmVzdG9yZSB0aGUgc2Vzc2lvbiwgaHR0cHM6Ly9jcmJ1Zy5jb20vMzE0Njg2XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZVJldHJ5KHBheWxvYWQsIHJldHJpZXMgPSAxMCkge1xuICBsZXQgcGF1c2VEdXJhdGlvbiA9IDEwO1xuICBmb3IgKDsgcmV0cmllcyA+IDA7IHJldHJpZXMgLT0gMSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VuZE1lc3NhZ2UocGF5bG9hZCk7XG4gICAgICBpZiAoZGF0YSkgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFgJHtlfWAuaW5jbHVkZXMoJ0NvdWxkIG5vdCBlc3RhYmxpc2ggY29ubmVjdGlvbi4nKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCBtYWtlUGF1c2UocGF1c2VEdXJhdGlvbik7XG4gICAgcGF1c2VEdXJhdGlvbiAqPSAyO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignVmlvbGVudG1vbmtleSBjYW5ub3QgY29ubmVjdCB0byB0aGUgYmFja2dyb3VuZCBwYWdlLicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdHBhZChpbnB1dCwgbGVuZ3RoLCBwYWQgPSAnMCcpIHtcbiAgbGV0IG51bSA9IGlucHV0LnRvU3RyaW5nKCk7XG4gIHdoaWxlIChudW0ubGVuZ3RoIDwgbGVuZ3RoKSBudW0gPSBgJHtwYWR9JHtudW19YDtcbiAgcmV0dXJuIG51bTtcbn1cblxuLyoqXG4gKiBHZXQgbG9jYWxlIGF0dHJpYnV0ZXMgc3VjaCBhcyBgQG5hbWU6emgtQ05gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVTdHJpbmcobWV0YSwga2V5KSB7XG4gIGNvbnN0IGxvY2FsZU1ldGEgPSBuYXZpZ2F0b3IubGFuZ3VhZ2VzXG4gIC8vIFVzZSBgbGFuZy50b0xvd2VyQ2FzZSgpYCBzaW5jZSB2Mi42LjVcbiAgLm1hcChsYW5nID0+IG1ldGFbYCR7a2V5fToke2xhbmd9YF0gfHwgbWV0YVtgJHtrZXl9OiR7bGFuZy50b0xvd2VyQ2FzZSgpfWBdKVxuICAuZmluZChCb29sZWFuKTtcbiAgcmV0dXJuIGxvY2FsZU1ldGEgfHwgbWV0YVtrZXldIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyaXB0TmFtZShzY3JpcHQpIHtcbiAgcmV0dXJuIHNjcmlwdC5jdXN0b20ubmFtZSB8fCBnZXRMb2NhbGVTdHJpbmcoc2NyaXB0Lm1ldGEsICduYW1lJylcbiAgICB8fCBgIyR7c2NyaXB0LnByb3BzLmlkID8/IGkxOG4oJ2xhYmVsTm9OYW1lJyl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxVcmwodXJsLCBiYXNlKSB7XG4gIGNvbnN0IG9iaiA9IG5ldyBVUkwodXJsLCBiYXNlKTtcbiAgLy8gVXNlIHByb3RvY29sIHdoaXRlbGlzdCB0byBmaWx0ZXIgVVJMc1xuICBpZiAoIVtcbiAgICAnaHR0cDonLFxuICAgICdodHRwczonLFxuICAgICdmdHA6JyxcbiAgICAnZGF0YTonLFxuICBdLmluY2x1ZGVzKG9iai5wcm90b2NvbCkpIG9iai5wcm90b2NvbCA9ICdodHRwOic7XG4gIHJldHVybiBvYmouaHJlZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUZpbGVuYW1lKG5hbWUpIHtcbiAgLy8gYGVzY2FwZWAgZ2VuZXJhdGVkIFVSSSBoYXMgJSBpbiBpdFxuICByZXR1cm4gbmFtZS5yZXBsYWNlKC9bLVxcXFwvOio/XCI8PnwlXFxzXS9nLCAobSkgPT4ge1xuICAgIGxldCBjb2RlID0gbS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KTtcbiAgICBpZiAoY29kZS5sZW5ndGggPCAyKSBjb2RlID0gYDAke2NvZGV9YDtcbiAgICByZXR1cm4gYC0ke2NvZGV9YDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVGaWxlbmFtZShmaWxlbmFtZSkge1xuICByZXR1cm4gZmlsZW5hbWUucmVwbGFjZSgvLShbMC05YS1mXXsyfSkvZywgKF9tLCBnKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGcsIDE2KSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWN0aXZlVGFiKCkge1xuICByZXR1cm4gKFxuICAgIGF3YWl0IGJyb3dzZXIudGFicy5xdWVyeSh7XG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICBjdXJyZW50V2luZG93OiB0cnVlLFxuICAgIH0pXG4gIClbMF0gfHwgKFxuICAgIC8vIENocm9tZSBidWcgd29ya2Fyb3VuZCB3aGVuIGFuIHVuZG9ja2VkIGRldnRvb2xzIHdpbmRvdyBpcyBmb2N1c2VkXG4gICAgYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHtcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIHdpbmRvd0lkOiAoYXdhaXQgYnJvd3Nlci53aW5kb3dzLmdldEN1cnJlbnQoKSkuaWQsXG4gICAgfSlcbiAgKVswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQYXVzZShtcykge1xuICByZXR1cm4gbXMgPCAwXG4gICAgPyBQcm9taXNlLnJlc29sdmUoKVxuICAgIDogbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnVlSm9pbihzZXBhcmF0b3IpIHtcbiAgcmV0dXJuIHRoaXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oc2VwYXJhdG9yKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVLZXlzKGtleSkge1xuICBpZiAoa2V5ID09IG51bGwpIHJldHVybiBbXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkgcmV0dXJuIGtleTtcbiAgcmV0dXJuIGAke2tleX1gLnNwbGl0KCcuJykuZmlsdGVyKEJvb2xlYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0R2V0KG9iaiwgcmF3S2V5LCBkZWYpIHtcbiAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMocmF3S2V5KTtcbiAgbGV0IHJlcyA9IG9iajtcbiAga2V5cy5ldmVyeSgoa2V5KSA9PiB7XG4gICAgaWYgKHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAoa2V5IGluIHJlcykpIHtcbiAgICAgIHJlcyA9IHJlc1trZXldO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlcyA9IGRlZjtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0U2V0KG9iaiwgcmF3S2V5LCB2YWwpIHtcbiAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMocmF3S2V5KTtcbiAgaWYgKCFrZXlzLmxlbmd0aCkgcmV0dXJuIHZhbDtcbiAgY29uc3Qgcm9vdCA9IG9iaiB8fCB7fTtcbiAgbGV0IHN1YiA9IHJvb3Q7XG4gIGNvbnN0IGxhc3RLZXkgPSBrZXlzLnBvcCgpO1xuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHN1YiA9IHN1YltrZXldIHx8IChzdWJba2V5XSA9IHt9KTtcbiAgfSk7XG4gIGlmICh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgIGRlbGV0ZSBzdWJbbGFzdEtleV07XG4gIH0gZWxzZSB7XG4gICAgc3ViW2xhc3RLZXldID0gdmFsO1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7e319IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZSxrZXkpOj99IFt0cmFuc2Zvcm1dXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RQaWNrKG9iaiwga2V5cywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBvYmo/LltrZXldO1xuICAgIGlmICh0cmFuc2Zvcm0pIHZhbHVlID0gdHJhbnNmb3JtKHZhbHVlLCBrZXkpO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSByZXNba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiByZXM7XG4gIH0sIHt9KTtcbn1cblxuLy8gaW52b2tlZCBhcyBvYmo6Om1hcEVudHJ5KChba2V5LCB2YWx1ZV0sIGksIGFsbEVudHJpZXMpID0+IHRyYW5zZm9ybWVkVmFsdWUpXG5leHBvcnQgZnVuY3Rpb24gbWFwRW50cnkoZnVuYykge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcykucmVkdWNlKChyZXMsIGVudHJ5LCBpLCBhbGxFbnRyaWVzKSA9PiB7XG4gICAgcmVzW2VudHJ5WzBdXSA9IGZ1bmMoZW50cnksIGksIGFsbEVudHJpZXMpO1xuICAgIHJldHVybiByZXM7XG4gIH0sIHt9KTtcbn1cblxuLy8gaW52b2tlZCBhcyBvYmo6OmZvckVhY2hFbnRyeSgoW2tleSwgdmFsdWVdLCBpLCBhbGxFbnRyaWVzKSA9PiB7fSlcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoRW50cnkoZnVuYykge1xuICBpZiAodGhpcykgT2JqZWN0LmVudHJpZXModGhpcykuZm9yRWFjaChmdW5jKTtcbn1cblxuLy8gaW52b2tlZCBhcyBvYmo6OmZvckVhY2hLZXkoa2V5ID0+IHt9LCBpLCBhbGxLZXlzKVxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hLZXkoZnVuYykge1xuICBpZiAodGhpcykgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChmdW5jKTtcbn1cblxuLy8gaW52b2tlZCBhcyBvYmo6OmZvckVhY2hWYWx1ZSh2YWx1ZSA9PiB7fSwgaSwgYWxsVmFsdWVzKVxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hWYWx1ZShmdW5jKSB7XG4gIGlmICh0aGlzKSBPYmplY3QudmFsdWVzKHRoaXMpLmZvckVhY2goZnVuYyk7XG59XG5cbi8vIE5lZWRlZCBmb3IgRmlyZWZveCdzIGJyb3dzZXIuc3RvcmFnZSBBUEkgd2hpY2ggZmFpbHMgb24gVnVlIG9ic2VydmFibGVzXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkoc3JjKSB7XG4gIHJldHVybiBzcmMgJiYgKFxuICAgIEFycmF5LmlzQXJyYXkoc3JjKSAmJiBzcmMubWFwKGRlZXBDb3B5KVxuICAgIC8vIFVzZWQgaW4gc2FmZSBjb250ZXh0XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgfHwgdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgc3JjOjptYXBFbnRyeSgoWywgdmFsXSkgPT4gZGVlcENvcHkodmFsKSlcbiAgKSB8fCBzcmM7XG59XG5cbi8vIFNpbXBsaWZpZWQgZGVlcCBlcXVhbGl0eSBjaGVja2VyXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxdWFsKGEsIGIpIHtcbiAgbGV0IHJlcztcbiAgaWYgKCFhIHx8ICFiIHx8IHR5cGVvZiBhICE9PSB0eXBlb2YgYiB8fCB0eXBlb2YgYSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXMgPSBhID09PSBiO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICByZXMgPSBhLmxlbmd0aCA9PT0gYi5sZW5ndGhcbiAgICAgICYmIGEuZXZlcnkoKGl0ZW0sIGkpID0+IGRlZXBFcXVhbChpdGVtLCBiW2ldKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qga2V5c0EgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBjb25zdCBrZXlzQiA9IE9iamVjdC5rZXlzKGIpO1xuICAgIHJlcyA9IGtleXNBLmxlbmd0aCA9PT0ga2V5c0IubGVuZ3RoXG4gICAgICAmJiBrZXlzQS5ldmVyeShrZXkgPT4ga2V5c0IuaW5jbHVkZXMoa2V5KSAmJiBkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuIiwiLy8gU0FGRVRZIFdBUk5JTkchIEV4cG9ydHMgdXNlZCBieSBgaW5qZWN0ZWRgIG11c3QgbWFrZSA6OnNhZmUoKSBjYWxscyBhbmQgdXNlIF9fcHJvdG9fXzpudWxsXG5cbmltcG9ydCB7IGJyb3dzZXIgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaTE4bihuYW1lLCBhcmdzKSB7XG4gIHJldHVybiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShuYW1lLCBhcmdzKSB8fCBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcocGFyYW0pIHtcbiAgaWYgKHBhcmFtID09IG51bGwpIHJldHVybiAnJztcbiAgcmV0dXJuIGAke3BhcmFtfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyID0gdG9TdHJpbmcpIHtcbiAgY29uc3QgY2FjaGVNYXAgPSB7fTtcbiAgZnVuY3Rpb24gbWVtb2l6ZWQoLi4uYXJncykge1xuICAgIC8vIFVzZWQgaW4gc2FmZSBjb250ZXh0XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgY29uc3Qga2V5ID0gcmVzb2x2ZXIoLi4uYXJncyk7XG4gICAgbGV0IGNhY2hlID0gY2FjaGVNYXBba2V5XTtcbiAgICBpZiAoIWNhY2hlKSB7XG4gICAgICBjYWNoZSA9IHtcbiAgICAgICAgdmFsdWU6IGZ1bmMuYXBwbHkodGhpcywgYXJncyksXG4gICAgICB9O1xuICAgICAgY2FjaGVNYXBba2V5XSA9IGNhY2hlO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGUudmFsdWU7XG4gIH1cbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgdGltZSkge1xuICBsZXQgc3RhcnRUaW1lO1xuICBsZXQgdGltZXI7XG4gIGxldCBjYWxsYmFjaztcbiAgdGltZSA9IE1hdGgubWF4KDAsICt0aW1lIHx8IDApO1xuICBmdW5jdGlvbiBjaGVja1RpbWUoKSB7XG4gICAgdGltZXIgPSBudWxsO1xuICAgIGlmIChwZXJmb3JtYW5jZS5ub3coKSA+PSBzdGFydFRpbWUpIGNhbGxiYWNrKCk7XG4gICAgZWxzZSBjaGVja1RpbWVyKCk7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tUaW1lcigpIHtcbiAgICBpZiAoIXRpbWVyKSB7XG4gICAgICBjb25zdCBkZWx0YSA9IHN0YXJ0VGltZSAtIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGNoZWNrVGltZSwgZGVsdGEpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkZWJvdW5jZWRGdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgKyB0aW1lO1xuICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgY2FsbGJhY2sgPSBudWxsO1xuICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICAgIGNoZWNrVGltZXIoKTtcbiAgfVxuICByZXR1cm4gZGVib3VuY2VkRnVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB0aW1lKSB7XG4gIGxldCBsYXN0VGltZSA9IDA7XG4gIHRpbWUgPSBNYXRoLm1heCgwLCArdGltZSB8fCAwKTtcbiAgZnVuY3Rpb24gdGhyb3R0bGVkRnVuY3Rpb24oLi4uYXJncykge1xuICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGlmIChsYXN0VGltZSArIHRpbWUgPCBub3cpIHtcbiAgICAgIGxhc3RUaW1lID0gbm93O1xuICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRocm90dGxlZEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmlxSWQocHJlZml4ID0gJ1ZNJykge1xuICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgcmV0dXJuIHByZWZpeFxuICAgICsgTWF0aC5mbG9vcigobm93IC0gTWF0aC5mbG9vcihub3cpKSAqIDFlMTIpLnRvU3RyaW5nKDM2KVxuICAgICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWUxMikudG9TdHJpbmcoMzYpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ8VWludDhBcnJheXxBcnJheX0gYnVmXG4gKiBAcGFyYW0ge251bWJlcn0gW29mZnNldF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXVxuICogQHJldHVybiB7c3RyaW5nfSBhIGJpbmFyeSBzdHJpbmcgaS5lLiBvbmUgYnl0ZSBwZXIgY2hhcmFjdGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWZmZXIyc3RyaW5nKGJ1Ziwgb2Zmc2V0ID0gMCwgbGVuZ3RoID0gMWU5OSkge1xuICAvLyBUaGUgbWF4IG51bWJlciBvZiBhcmd1bWVudHMgdmFyaWVzIGJldHdlZW4gSlMgZW5naW5lcyBidXQgaXQncyA+MzJrIHNvIHdlJ3JlIHNhZmVcbiAgY29uc3Qgc2xpY2VTaXplID0gODE5MjtcbiAgY29uc3Qgc2xpY2VzID0gW107XG4gIGNvbnN0IGFycmF5TGVuID0gYnVmLmxlbmd0aDsgLy8gcHJlc2VudCBvbiBVaW50OEFycmF5L0FycmF5XG4gIGNvbnN0IGVuZCA9IE1hdGgubWluKGFycmF5TGVuIHx8IGJ1Zi5ieXRlTGVuZ3RoLCBvZmZzZXQgKyBsZW5ndGgpO1xuICBjb25zdCBuZWVkc1NsaWNpbmcgPSBhcnJheUxlbiA9PSBudWxsIHx8IG9mZnNldCB8fCBlbmQgPiBzbGljZVNpemU7XG4gIGZvciAoOyBvZmZzZXQgPCBlbmQ7IG9mZnNldCArPSBzbGljZVNpemUpIHtcbiAgICBzbGljZXMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsXG4gICAgICBuZWVkc1NsaWNpbmdcbiAgICAgICAgPyBuZXcgVWludDhBcnJheShidWYsIG9mZnNldCwgTWF0aC5taW4oc2xpY2VTaXplLCBlbmQgLSBvZmZzZXQpKVxuICAgICAgICA6IGJ1ZikpO1xuICB9XG4gIHJldHVybiBzbGljZXMuam9pbignJyk7XG59XG5cbi8qKlxuICogRmFzdGVyIHRoYW4gYnVmZmVyMnN0cmluZytidG9hOiAyeCBpbiBDaHJvbWUsIDEweCBpbiBGRlxuICogQHBhcmFtIHtCbG9ifSBibG9iXG4gKiBAcGFyYW0ge251bWJlcn0gW29mZnNldF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXVxuICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBiYXNlNjQtZW5jb2RlZCBjb250ZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gYmxvYjJiYXNlNjQoYmxvYiwgb2Zmc2V0ID0gMCwgbGVuZ3RoID0gMWU5OSkge1xuICBpZiAob2Zmc2V0IHx8IGxlbmd0aCA8IGJsb2Iuc2l6ZSkge1xuICAgIGJsb2IgPSBibG9iLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgbGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gIWJsb2Iuc2l6ZSA/ICcnIDogbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgIHJlc29sdmUocmVzLnNsaWNlKHJlcy5pbmRleE9mKCcsJykgKyAxKSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmcydWludDhhcnJheShzdHIpIHtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgY29uc3QgYXJyYXkgPSBuZXcgVWludDhBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgYXJyYXlbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmNvbnN0IFZFUlNJT05fUkUgPSAvXiguKj8pLShbLS4wLTlhLXpdKyl8JC9pO1xuY29uc3QgRElHSVRTX1JFID0gL15cXGQrJC87IC8vIHVzaW5nIHJlZ2V4cCB0byBhdm9pZCArJzFlMicgYmVpbmcgcGFyc2VkIGFzIDEwMFxuXG4vKiogQHJldHVybiAtMSB8IDAgfCAxICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVZlcnNpb24odmVyMSwgdmVyMikge1xuICAvLyBVc2VkIGluIHNhZmUgY29udGV4dFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgY29uc3QgWywgbWFpbjEgPSB2ZXIxIHx8ICcnLCBwcmUxXSA9IFZFUlNJT05fUkUuZXhlYyh2ZXIxKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGNvbnN0IFssIG1haW4yID0gdmVyMiB8fCAnJywgcHJlMl0gPSBWRVJTSU9OX1JFLmV4ZWModmVyMik7XG4gIGNvbnN0IGRlbHRhID0gY29tcGFyZVZlcnNpb25DaHVuayhtYWluMSwgbWFpbjIpXG4gICAgfHwgIXByZTEgLSAhcHJlMiAvLyAxLjIuMy1wcmUtcmVsZWFzZSBpcyBsZXNzIHRoYW4gMS4yLjNcbiAgICB8fCBwcmUxICYmIGNvbXBhcmVWZXJzaW9uQ2h1bmsocHJlMSwgcHJlMiwgdHJ1ZSk7IC8vIGlmIHByZTEgaXMgcHJlc2VudCwgcHJlMiBpcyB0b29cbiAgcmV0dXJuIGRlbHRhIDwgMCA/IC0xIDogKyEhZGVsdGE7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9uQ2h1bmsodmVyMSwgdmVyMiwgaXNTZW12ZXJNb2RlKSB7XG4gIGNvbnN0IHBhcnRzMSA9IHZlcjEuc3BsaXQoJy4nKTtcbiAgY29uc3QgcGFydHMyID0gdmVyMi5zcGxpdCgnLicpO1xuICBjb25zdCBsZW4xID0gcGFydHMxLmxlbmd0aDtcbiAgY29uc3QgbGVuMiA9IHBhcnRzMi5sZW5ndGg7XG4gIGNvbnN0IGxlbiA9IChpc1NlbXZlck1vZGUgPyBNYXRoLm1pbiA6IE1hdGgubWF4KShsZW4xLCBsZW4yKTtcbiAgbGV0IGRlbHRhO1xuICBmb3IgKGxldCBpID0gMDsgIWRlbHRhICYmIGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGNvbnN0IGEgPSBwYXJ0czFbaV07XG4gICAgY29uc3QgYiA9IHBhcnRzMltpXTtcbiAgICBpZiAoaXNTZW12ZXJNb2RlKSB7XG4gICAgICBkZWx0YSA9IERJR0lUU19SRS50ZXN0KGEpICYmIERJR0lUU19SRS50ZXN0KGIpXG4gICAgICAgID8gYSAtIGJcbiAgICAgICAgOiBhID4gYiB8fCBhIDwgYiAmJiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsdGEgPSAocGFyc2VJbnQoYSwgMTApIHx8IDApIC0gKHBhcnNlSW50KGIsIDEwKSB8fCAwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlbHRhIHx8IGlzU2VtdmVyTW9kZSAmJiAobGVuMSAtIGxlbjIpO1xufVxuXG5jb25zdCB1bml0cyA9IFtcbiAgWydtaW4nLCA2MF0sXG4gIFsnaCcsIDI0XSxcbiAgWydkJywgMTAwMCwgMzY1XSxcbiAgWyd5J10sXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWUoZHVyYXRpb24pIHtcbiAgZHVyYXRpb24gLz0gNjAgKiAxMDAwO1xuICBjb25zdCB1bml0SW5mbyA9IHVuaXRzLmZpbmQoKGl0ZW0pID0+IHtcbiAgICBjb25zdCBtYXggPSBpdGVtWzFdO1xuICAgIGlmICghbWF4IHx8IGR1cmF0aW9uIDwgbWF4KSByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCBzdGVwID0gaXRlbVsyXSB8fCBtYXg7XG4gICAgZHVyYXRpb24gLz0gc3RlcDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gYCR7ZHVyYXRpb24gfCAwfSR7dW5pdEluZm9bMF19YDtcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdEJ5dGVMZW5ndGggPSBsZW4gPT4gKFxuICAhbGVuID8gJydcbiAgICA6IGxlbiA8IDEwMjQgJiYgYCR7bGVufSBCYFxuICAgIHx8IGxlbiA8IDEwMjQgKiAxMDI0ICYmIGAke2xlbiA+PiAxMH0ga2AgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1iaXR3aXNlXG4gICAgfHwgYCR7KyhsZW4gLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDEpfSBNYCAvLyBhbGxvdyBmcmFjdGlvbnMgZm9yIG1lZ2FieXRlc1xuKTtcblxuLy8gVXNlZCBieSBgaW5qZWN0ZWRgXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShvYmopIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9iajo6aGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZUFycmF5KGRhdGEpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdO1xufVxuXG5jb25zdCBiaW5hcnlUeXBlcyA9IFtcbiAgJ2Jsb2InLFxuICAnYXJyYXlidWZmZXInLFxuXTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0TG9jYWxGaWxlKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gIC8vIG9ubHkgR0VUIG1ldGhvZCBpcyBhbGxvd2VkIGZvciBsb2NhbCBmaWxlc1xuICAvLyBoZWFkZXJzIGlzIG1lYW5pbmdsZXNzXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3QgeyByZXNwb25zZVR5cGUgfSA9IG9wdGlvbnM7XG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgaWYgKGJpbmFyeVR5cGVzLmluY2x1ZGVzKHJlc3BvbnNlVHlwZSkpIHhoci5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGU7XG4gICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIHN0YXR1cyBmb3IgYGZpbGU6YCBwcm90b2NvbCB3aWxsIGFsd2F5cyBiZSBgMGBcbiAgICAgIHJlc3VsdC5zdGF0dXMgPSB4aHIuc3RhdHVzIHx8IDIwMDtcbiAgICAgIHJlc3VsdC5kYXRhID0gYmluYXJ5VHlwZXMuaW5jbHVkZXMocmVzcG9uc2VUeXBlKSA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICBpZiAocmVzcG9uc2VUeXBlID09PSAnanNvbicpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQuZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0LmRhdGEpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBpZ25vcmUgaW52YWxpZCBKU09OXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID4gMzAwKSB7XG4gICAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfVxuICAgIH07XG4gICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICByZXN1bHQuc3RhdHVzID0gLTE7XG4gICAgICByZWplY3QocmVzdWx0KTtcbiAgICB9O1xuICAgIHhoci5zZW5kKCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEV4Y2x1ZGVzIGB0ZXh0L2h0bWxgIHRvIGF2b2lkIExJTksgaGVhZGVyIHRoYXQgQ2hyb21lIHVzZXMgdG8gcHJlZmV0Y2gganMgYW5kIGNzcyxcbiAqIGJlY2F1c2UgR3JlYXN5Rm9yaydzIDQwNCBlcnJvciByZXNwb25zZSBjYXVzZXMgQ1NQIHZpb2xhdGlvbnMgaW4gY29uc29sZSBvZiBvdXIgcGFnZS5cbiAqL1xuY29uc3QgRk9SQ0VEX0FDQ0VQVCA9IHtcbiAgJ2dyZWFzeWZvcmsub3JnJzogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQsIHRleHQvcGxhaW4sIHRleHQvY3NzJyxcbn07XG5cbmV4cG9ydCBjb25zdCBpc1JlbW90ZSA9IHVybCA9PiB1cmxcbiAgJiYgISgvXihmaWxlOnxkYXRhOnxodHRwcz86XFwvXFwvKGxvY2FsaG9zdHwxMjdcXC4wXFwuMFxcLjFbOi9dKSkvLnRlc3QodXJsKSk7XG5cbi8qKiBAdHlwZWRlZiB7e1xuICB1cmw6IHN0cmluZyxcbiAgc3RhdHVzOiBudW1iZXIsXG4gIGhlYWRlcnM6IEhlYWRlcnMsXG4gIGRhdGE6IHN0cmluZ3xBcnJheUJ1ZmZlcnxCbG9ifE9iamVjdFxufX0gVk1SZXF1ZXN0UmVzcG9uc2UgKi9cbi8qKlxuICogTWFrZSBhIHJlcXVlc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge1JlcXVlc3RJbml0fSBvcHRpb25zXG4gKiBAcmV0dXJuIFByb21pc2U8Vk1SZXF1ZXN0UmVzcG9uc2U+XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gIC8vIGZldGNoIGRvZXMgbm90IHN1cHBvcnQgbG9jYWwgZmlsZVxuICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2ZpbGU6Ly8nKSkgcmV0dXJuIHJlcXVlc3RMb2NhbEZpbGUodXJsLCBvcHRpb25zKTtcbiAgY29uc3QgeyBib2R5LCBoZWFkZXJzLCByZXNwb25zZVR5cGUgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzQm9keU9iaiA9IGJvZHkgJiYgYm9keTo6KHt9KS50b1N0cmluZygpID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgY29uc3QgaG9zdG5hbWUgPSB1cmwuc3BsaXQoJy8nLCAzKVsyXTtcbiAgY29uc3QgYWNjZXB0ID0gRk9SQ0VEX0FDQ0VQVFtob3N0bmFtZV07XG4gIC8vIE5vdCB1c2luZyAuLi5zcHJlYWQgYmVjYXVzZSBCYWJlbCBtaXN0YWtlbmx5IGFkZHMgaXRzIHBvbHlmaWxsIHRvIGluamVjdGVkLXdlYlxuICBjb25zdCBpbml0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgY2FjaGU6IGlzUmVtb3RlKHVybCkgPyB1bmRlZmluZWQgOiAnbm8tY2FjaGUnLFxuICB9LCBvcHRpb25zLCB7XG4gICAgYm9keTogaXNCb2R5T2JqID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5LFxuICAgIGhlYWRlcnM6IGlzQm9keU9iaiB8fCBhY2NlcHRcbiAgICAgID8gT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgaXNCb2R5T2JqICYmIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBhY2NlcHQgJiYgeyBhY2NlcHQgfSlcbiAgICAgIDogaGVhZGVycyxcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IHsgdXJsLCBzdGF0dXM6IC0xIH07XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XG4gICAgY29uc3QgbG9hZE1ldGhvZCA9IHtcbiAgICAgIGFycmF5YnVmZmVyOiAnYXJyYXlCdWZmZXInLFxuICAgICAgYmxvYjogJ2Jsb2InLFxuICAgICAganNvbjogJ2pzb24nLFxuICAgIH1bcmVzcG9uc2VUeXBlXSB8fCAndGV4dCc7XG4gICAgLy8gc3RhdHVzIGZvciBgZmlsZTpgIHByb3RvY29sIHdpbGwgYWx3YXlzIGJlIGAwYFxuICAgIHJlc3VsdC5zdGF0dXMgPSByZXNwLnN0YXR1cyB8fCAyMDA7XG4gICAgcmVzdWx0LmhlYWRlcnMgPSByZXNwLmhlYWRlcnM7XG4gICAgcmVzdWx0LmRhdGEgPSBhd2FpdCByZXNwW2xvYWRNZXRob2RdKCk7XG4gIH0gY2F0Y2ggeyAvKiBOT1AgKi8gfVxuICBpZiAocmVzdWx0LnN0YXR1cyA8IDAgfHwgcmVzdWx0LnN0YXR1cyA+IDMwMCkgdGhyb3cgcmVzdWx0O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBVc2VkIGJ5IGBpbmplY3RlZGBcbmNvbnN0IFNJTVBMRV9WQUxVRV9UWVBFID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIHN0cmluZzogJ3MnLFxuICBudW1iZXI6ICduJyxcbiAgYm9vbGVhbjogJ2InLFxufTtcblxuLy8gVXNlZCBieSBgaW5qZWN0ZWRgXG5leHBvcnQgZnVuY3Rpb24gZHVtcFNjcmlwdFZhbHVlKHZhbHVlLCBqc29uRHVtcCA9IEpTT04uc3RyaW5naWZ5KSB7XG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gU0lNUExFX1ZBTFVFX1RZUEVbdHlwZW9mIHZhbHVlXTtcbiAgICByZXR1cm4gYCR7c2ltcGxlIHx8ICdvJ30ke3NpbXBsZSA/IHZhbHVlIDoganNvbkR1bXAodmFsdWUpfWA7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtaW1wb3J0cyAqL1xuXG4vKiBXQVJOSU5HIVxuICogTWFrZSBzdXJlIGFsbCByZS1leHBvcnRlZCBmdW5jdGlvbnMgc3Vydml2ZSBpbiBhIHNwb29mZWQvYnJva2VuIGVudmlyb25tZW50OlxuICogdXNlIG9ubHkgOjpzYWZlKCkgZ2xvYmFscyB0aGF0IGFyZSBpbml0aWFsaXplZCBpbiBhIGNvcnJlc3BvbmRpbmcgc2FmZS1nbG9iYWxzKiBmaWxlLFxuICogdXNlIF9fcHJvdG9fXzpudWxsIG9yIGdldC9zZXQgb3duIHByb3BzIGV4cGxpY2l0bHkuICovXG5cbmV4cG9ydCB7XG4gIGR1bXBTY3JpcHRWYWx1ZSxcbiAgaXNFbXB0eSxcbn0gZnJvbSAnIy9jb21tb24nO1xuZXhwb3J0ICogZnJvbSAnIy9jb21tb24vY29uc3RzJztcblxuZXhwb3J0IGNvbnN0IGZpcmVCcmlkZ2VFdmVudCA9IChldmVudElkLCBtc2csIGNsb25lSW50bykgPT4ge1xuICBjb25zdCBkZXRhaWwgPSBjbG9uZUludG8gPyBjbG9uZUludG8obXNnLCBkb2N1bWVudCkgOiBtc2c7XG4gIGNvbnN0IGV2dE1haW4gPSBuZXcgQ3VzdG9tRXZlbnRTYWZlKGV2ZW50SWQsIHsgX19wcm90b19fOiBudWxsLCBkZXRhaWwgfSk7XG4gIHdpbmRvdzo6ZmlyZShldnRNYWluKTtcbn07XG5cbmV4cG9ydCBjb25zdCBiaW5kRXZlbnRzID0gKHNyY0lkLCBkZXN0SWQsIGJyaWRnZSwgY2xvbmVJbnRvKSA9PiB7XG4gIC8qIFVzaW5nIGEgc2VwYXJhdGUgZXZlbnQgZm9yIGBub2RlYCBiZWNhdXNlIEN1c3RvbUV2ZW50IGNhbid0IHRyYW5zZmVyIG5vZGVzLFxuICAgKiB3aGVyZWFzIE1vdXNlRXZlbnQgKGFuZCBzb21lIG90aGVycykgY2FuJ3QgdHJhbnNmZXIgb2JqZWN0cyB3aXRob3V0IHN0cmluZ2lmaWNhdGlvbi4gKi9cbiAgbGV0IGluY29taW5nTm9kZUV2ZW50O1xuICB3aW5kb3c6Om9uKHNyY0lkLCBlID0+IHtcbiAgICBlOjpzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgW2JyaWRnZS4ke2JyaWRnZS5pZHMgPyAnaG9zdCcgOiAnZ3Vlc3Qud2ViJ31dIHJlY2VpdmVkYCxcbiAgICAgICAgaW5jb21pbmdOb2RlRXZlbnQgPyBlOjpnZXRSZWxhdGVkVGFyZ2V0KCkgOiBlOjpnZXREZXRhaWwoKSk7XG4gICAgfVxuICAgIGlmICghaW5jb21pbmdOb2RlRXZlbnQpIHtcbiAgICAgIC8vIEN1c3RvbUV2ZW50IGlzIHRoZSBtYWluIG1lc3NhZ2VcbiAgICAgIGNvbnN0IGRhdGEgPSBlOjpnZXREZXRhaWwoKTtcbiAgICAgIGluY29taW5nTm9kZUV2ZW50ID0gZGF0YS5ub2RlICYmIGRhdGE7XG4gICAgICBpZiAoIWluY29taW5nTm9kZUV2ZW50KSBicmlkZ2Uub25IYW5kbGUoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1vdXNlRXZlbnQgaXMgdGhlIHNlY29uZCBldmVudCB3aGVuIHRoZSBtYWluIGV2ZW50IGhhcyBgbm9kZTogdHJ1ZWBcbiAgICAgIGluY29taW5nTm9kZUV2ZW50Lm5vZGUgPSBlOjpnZXRSZWxhdGVkVGFyZ2V0KCk7XG4gICAgICBicmlkZ2Uub25IYW5kbGUoaW5jb21pbmdOb2RlRXZlbnQpO1xuICAgICAgaW5jb21pbmdOb2RlRXZlbnQgPSBudWxsO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG4gIGJyaWRnZS5wb3N0ID0gKGNtZCwgZGF0YSwgeyBkYXRhS2V5IH0gPSBicmlkZ2UsIG5vZGUpID0+IHtcbiAgICAvLyBDb25zdHJ1Y3RpbmcgdGhlIGV2ZW50IG5vdyBzbyB3ZSBkb24ndCBzZW5kIGFueXRoaW5nIGlmIGl0IHRocm93cyBvbiBpbnZhbGlkIGBub2RlYFxuICAgIGNvbnN0IGV2dE5vZGUgPSBub2RlICYmIG5ldyBNb3VzZUV2ZW50U2FmZShkZXN0SWQsIHsgX19wcm90b19fOiBudWxsLCByZWxhdGVkVGFyZ2V0OiBub2RlIH0pO1xuICAgIGZpcmVCcmlkZ2VFdmVudChkZXN0SWQsIHsgY21kLCBkYXRhLCBkYXRhS2V5LCBub2RlOiAhIWV2dE5vZGUgfSwgY2xvbmVJbnRvKTtcbiAgICBpZiAoZXZ0Tm9kZSkgd2luZG93OjpmaXJlKGV2dE5vZGUpO1xuICB9O1xufTtcbiIsImNvbnN0IGhhbmRsZXJzID0gY3JlYXRlTnVsbE9iaigpO1xuY29uc3QgY2FsbGJhY2tzID0gY3JlYXRlTnVsbE9iaigpO1xuLyoqXG4gKiBAcHJvcGVydHkge1VBSW5qZWN0ZWR9IHVhXG4gKi9cbmNvbnN0IGJyaWRnZSA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBjYWxsYmFja3MsXG4gIGFkZEhhbmRsZXJzKG9iaikge1xuICAgIGFzc2lnbihoYW5kbGVycywgb2JqKTtcbiAgfSxcbiAgb25IYW5kbGUoeyBjbWQsIGRhdGEsIG5vZGUgfSkge1xuICAgIGNvbnN0IGZuID0gaGFuZGxlcnNbY21kXTtcbiAgICBpZiAoZm4pIG5vZGU6OmZuKGRhdGEpO1xuICB9LFxuICBzZW5kKGNtZCwgZGF0YSwgY29udGV4dCwgbm9kZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZVNhZmUocmVzb2x2ZSA9PiB7XG4gICAgICBwb3N0V2l0aENhbGxiYWNrKGNtZCwgZGF0YSwgY29udGV4dCwgbm9kZSwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH0sXG4gIHN5bmNDYWxsOiBwb3N0V2l0aENhbGxiYWNrLFxufTtcblxuZnVuY3Rpb24gcG9zdFdpdGhDYWxsYmFjayhjbWQsIGRhdGEsIGNvbnRleHQsIG5vZGUsIGNiLCBjdXN0b21DYWxsYmFja0lkKSB7XG4gIGNvbnN0IGlkID0gZ2V0VW5pcUlkU2FmZSgpO1xuICBjYWxsYmFja3NbaWRdID0gY2I7XG4gIGlmIChjdXN0b21DYWxsYmFja0lkKSB7XG4gICAgc2V0T3duUHJvcChkYXRhLCBjdXN0b21DYWxsYmFja0lkLCBpZCk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YSA9IHsgW0NBTExCQUNLX0lEXTogaWQsIGRhdGEgfTtcbiAgfVxuICBicmlkZ2UucG9zdChjbWQsIGRhdGEsIGNvbnRleHQsIG5vZGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBicmlkZ2U7XG4iLCJpbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcbmltcG9ydCB7IG1ha2VHbUFwaSB9IGZyb20gJy4vZ20tYXBpJztcbmltcG9ydCB7IG1ha2VHbG9iYWxXcmFwcGVyIH0gZnJvbSAnLi9nbS1nbG9iYWwtd3JhcHBlcic7XG5pbXBvcnQgeyBtYWtlQ29tcG9uZW50VXRpbHMsIHNhZmVDb25jYXQgfSBmcm9tICcuL3V0aWwtd2ViJztcblxuLyoqIE5hbWUgaW4gR3JlYXNlbW9ua2V5NCAtPiBuYW1lIGluIEdNICovXG5jb25zdCBHTTRfQUxJQVMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZ2V0UmVzb3VyY2VVcmw6ICdnZXRSZXNvdXJjZVVSTCcsXG4gIHhtbEh0dHBSZXF1ZXN0OiAneG1saHR0cFJlcXVlc3QnLFxufTtcbmNvbnN0IEdNNF9BU1lOQyA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBnZXRSZXNvdXJjZVVybDogMSxcbiAgZ2V0VmFsdWU6IDEsXG4gIGRlbGV0ZVZhbHVlOiAxLFxuICBzZXRWYWx1ZTogMSxcbiAgbGlzdFZhbHVlczogMSxcbn07XG5sZXQgZ21BcGk7XG5sZXQgY29tcG9uZW50VXRpbHM7XG5cbi8qKlxuICogQHBhcmFtIHtWTVNjcmlwdCAmIFZNSW5qZWN0ZWRTY3JpcHR9IHNjcmlwdFxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VHbUFwaVdyYXBwZXIoc2NyaXB0KSB7XG4gIC8vIEFkZCBHTSBmdW5jdGlvbnNcbiAgLy8gUmVmZXJlbmNlOiBodHRwOi8vd2lraS5ncmVhc2VzcG90Lm5ldC9HcmVhc2Vtb25rZXlfTWFudWFsOkFQSVxuICBjb25zdCB7IG1ldGEgfSA9IHNjcmlwdDtcbiAgY29uc3QgZ3JhbnQgPSBtZXRhLmdyYW50O1xuICBpZiAoZ3JhbnQubGVuZ3RoID09PSAxICYmIGdyYW50WzBdID09PSAnbm9uZScpIHtcbiAgICBncmFudC5sZW5ndGggPSAwO1xuICB9XG4gIGNvbnN0IHsgaWQgfSA9IHNjcmlwdC5wcm9wcztcbiAgY29uc3QgcmVzb3VyY2VzID0gYXNzaWduKGNyZWF0ZU51bGxPYmooKSwgbWV0YS5yZXNvdXJjZXMpO1xuICAvKiogQG5hbWVzcGFjZSBWTUluamVjdGVkU2NyaXB0LkNvbnRleHQgKi9cbiAgY29uc3QgY29udGV4dCA9IHtcbiAgICBpZCxcbiAgICBzY3JpcHQsXG4gICAgcmVzb3VyY2VzLFxuICAgIGRhdGFLZXk6IHNjcmlwdC5kYXRhS2V5LFxuICAgIHJlc0NhY2hlOiBjcmVhdGVOdWxsT2JqKCksXG4gIH07XG4gIGNvbnN0IGdtSW5mbyA9IG1ha2VHbUluZm8oc2NyaXB0LCByZXNvdXJjZXMpO1xuICBjb25zdCBnbSA9IHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgR006IHtcbiAgICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICAgIGluZm86IGdtSW5mbyxcbiAgICB9LFxuICAgIEdNX2luZm86IGdtSW5mbyxcbiAgICB1bnNhZmVXaW5kb3c6IGdsb2JhbCxcbiAgfTtcbiAgaWYgKCFjb21wb25lbnRVdGlscykge1xuICAgIGNvbXBvbmVudFV0aWxzID0gbWFrZUNvbXBvbmVudFV0aWxzKCk7XG4gIH1cbiAgYXNzaWduKGdtLCBjb21wb25lbnRVdGlscyk7XG4gIGlmIChncmFudDo6aW5kZXhPZihXSU5ET1dfQ0xPU0UpID49IDApIHtcbiAgICBnbS5jbG9zZSA9IHZtT3duRnVuYygoKSA9PiBicmlkZ2UucG9zdCgnVGFiQ2xvc2UnLCAwLCBjb250ZXh0KSk7XG4gIH1cbiAgaWYgKGdyYW50OjppbmRleE9mKFdJTkRPV19GT0NVUykgPj0gMCkge1xuICAgIGdtLmZvY3VzID0gdm1Pd25GdW5jKCgpID0+IGJyaWRnZS5wb3N0KCdUYWJGb2N1cycsIDAsIGNvbnRleHQpKTtcbiAgfVxuICBpZiAoIWdtQXBpICYmIGdyYW50Lmxlbmd0aCkgZ21BcGkgPSBtYWtlR21BcGkoKTtcbiAgZ3JhbnQ6OmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCBnbTRuYW1lID0gbmFtZTo6c2xpY2UoMCwgMykgPT09ICdHTS4nICYmIG5hbWU6OnNsaWNlKDMpO1xuICAgIGNvbnN0IGZuID0gZ21BcGlbZ200bmFtZSA/IGBHTV8ke0dNNF9BTElBU1tnbTRuYW1lXSB8fCBnbTRuYW1lfWAgOiBuYW1lXTtcbiAgICBpZiAoZm4pIHtcbiAgICAgIGlmIChnbTRuYW1lKSB7XG4gICAgICAgIGdtLkdNW2dtNG5hbWVdID0gbWFrZUdtTWV0aG9kQ2FsbGVyKGZuLCBjb250ZXh0LCBHTTRfQVNZTkNbZ200bmFtZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ21bbmFtZV0gPSBtYWtlR21NZXRob2RDYWxsZXIoZm4sIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBncmFudC5sZW5ndGggPyBtYWtlR2xvYmFsV3JhcHBlcihnbSkgOiBnbTtcbn1cblxuZnVuY3Rpb24gbWFrZUdtSW5mbyhzY3JpcHQsIHJlc291cmNlcykge1xuICAvLyBUT0RPOiBtb3ZlIGludG8gYmFja2dyb3VuZC5qc1xuICBjb25zdCB7IG1ldGEgfSA9IHNjcmlwdDtcbiAgY29uc3QgbWV0YUNvcHkgPSBjcmVhdGVOdWxsT2JqKCk7XG4gIGxldCB2YWw7XG4gIG9iamVjdEtleXMobWV0YSk6OmZvckVhY2goKGtleSkgPT4ge1xuICAgIHZhbCA9IG1ldGFba2V5XTtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ21hdGNoJzogLy8gLT4gbWF0Y2hlc1xuICAgIGNhc2UgJ2V4Y2x1ZGVNYXRjaCc6IC8vIC0+IGV4Y2x1ZGVNYXRjaGVzXG4gICAgICBrZXkgKz0gJ2UnO1xuICAgICAgLy8gZmFsbHRocm91Z2hcbiAgICBjYXNlICdleGNsdWRlJzogLy8gLT4gZXhjbHVkZXNcbiAgICBjYXNlICdpbmNsdWRlJzogLy8gLT4gaW5jbHVkZXNcbiAgICAgIGtleSArPSAncyc7XG4gICAgICB2YWwgPSBzYWZlQ29uY2F0KFtdLCB2YWwpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICB9XG4gICAgbWV0YUNvcHlba2V5XSA9IHZhbDtcbiAgfSk7XG4gIFtcbiAgICAnZGVzY3JpcHRpb24nLFxuICAgICduYW1lJyxcbiAgICAnbmFtZXNwYWNlJyxcbiAgICAncnVuQXQnLFxuICAgICd2ZXJzaW9uJyxcbiAgXTo6Zm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFtZXRhQ29weVtrZXldKSBtZXRhQ29weVtrZXldID0gJyc7XG4gIH0pO1xuICB2YWwgPSBvYmplY3RLZXlzKHJlc291cmNlcyk7XG4gIHZhbDo6Zm9yRWFjaCgobmFtZSwgaSkgPT4ge1xuICAgIHZhbFtpXSA9IHsgbmFtZSwgdXJsOiByZXNvdXJjZXNbbmFtZV0gfTtcbiAgfSk7XG4gIG1ldGFDb3B5LnJlc291cmNlcyA9IHZhbDtcbiAgbWV0YUNvcHkudW53cmFwID0gZmFsc2U7IC8vIGRlcHJlY2F0ZWQsIGFsd2F5cyBgZmFsc2VgXG4gIHJldHVybiB7XG4gICAgdXVpZDogc2NyaXB0LnByb3BzLnV1aWQsXG4gICAgc2NyaXB0TWV0YVN0cjogc2NyaXB0Lm1ldGFTdHIsXG4gICAgc2NyaXB0V2lsbFVwZGF0ZTogISFzY3JpcHQuY29uZmlnLnNob3VsZFVwZGF0ZSxcbiAgICBzY3JpcHRIYW5kbGVyOiAnVmlvbGVudG1vbmtleScsXG4gICAgdmVyc2lvbjogcHJvY2Vzcy5lbnYuVk1fVkVSLFxuICAgIGluamVjdEludG86IGJyaWRnZS5tb2RlLFxuICAgIHBsYXRmb3JtOiBhc3NpZ24oe30sIGJyaWRnZS51YSksXG4gICAgc2NyaXB0OiBtZXRhQ29weSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZUdtTWV0aG9kQ2FsbGVyKGdtTWV0aG9kLCBjb250ZXh0LCBpc0FzeW5jKSB7XG4gIC8vIGtlZXBpbmcgdGhlIG5hdGl2ZSBjb25zb2xlLmxvZyBpbnRhY3RcbiAgcmV0dXJuIGdtTWV0aG9kID09PSBnbUFwaS5HTV9sb2cgPyBnbU1ldGhvZCA6IHZtT3duRnVuYyhcbiAgICBpc0FzeW5jXG4gICAgICA/IChhc3luYyAoLi4uYXJncykgPT4gZ21NZXRob2Q6OmFwcGx5KGNvbnRleHQsIGFyZ3MpKVxuICAgICAgOiBnbU1ldGhvZDo6YmluZChjb250ZXh0KSxcbiAgKTtcbn1cbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWltcG9ydHNcbmltcG9ydCB7IEtFWV9HTE9CQUxfSUQgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgZHVtcFNjcmlwdFZhbHVlLCBpc0VtcHR5IH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB7IG9uVGFiQ3JlYXRlIH0gZnJvbSAnLi90YWJzJztcbmltcG9ydCB7IG9uUmVxdWVzdENyZWF0ZSB9IGZyb20gJy4vcmVxdWVzdHMnO1xuaW1wb3J0IHsgb25Ob3RpZmljYXRpb25DcmVhdGUgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHsgZGVjb2RlVmFsdWUsIGR1bXBWYWx1ZSwgbG9hZFZhbHVlcywgY2hhbmdlSG9va3MgfSBmcm9tICcuL2dtLXZhbHVlcyc7XG5pbXBvcnQgeyBqc29uRHVtcCB9IGZyb20gJy4vdXRpbC13ZWInO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUdtQXBpKCkge1xuICByZXR1cm4ge1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBHTV9hZGRHbG9iYWxMaXN0ZW5lcihrZXksIGZuKSB7XG4gICAgICByZXR1cm4gYWRkTGlzdGVuZXIoS0VZX0dMT0JBTF9JRCwga2V5LCBmbik7XG4gICAgfSxcbiAgICBHTV9yZW1vdmVHbG9iYWxMaXN0ZW5lcihsaXN0ZW5lcklkKSB7XG4gICAgICByZXR1cm4gcmVtb3ZlTGlzdGVuZXIoS0VZX0dMT0JBTF9JRCwgbGlzdGVuZXJJZCk7XG4gICAgfSxcbiAgICBHTV9zZW5kR2xvYmFsRXZlbnQoa2V5LCBldmVudCkge1xuICAgICAgY29uc3QgaG9va3MgPSBjaGFuZ2VIb29rc1tLRVlfR0xPQkFMX0lEXT8uW2tleV07XG4gICAgICBpZiAoIWhvb2tzKSByZXR1cm47XG4gICAgICBvYmplY3RWYWx1ZXMoaG9va3MpOjpmb3JFYWNoKGZuID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmbihrZXksIGV2ZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZygnZXJyb3InLCBbJ0dNX3NlbmRHbG9iYWxFdmVudCcsICdjYWxsYmFjayddLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBHTV9yZWdGbihrZXksIGZuKSB7XG4gICAgICBjb25zdCBob29rcyA9IGNoYW5nZUhvb2tzW0tFWV9HTE9CQUxfSURdPy5ba2V5XTtcbiAgICAgIGlmIChob29rcykgdGhyb3cgYGR1cGxpY2F0ZSByZWcgJHtrZXl9YDtcbiAgICAgIGFkZExpc3RlbmVyKEtFWV9HTE9CQUxfSUQsIGtleSwgZm4pO1xuICAgIH0sXG4gICAgR01faW52b2tlRm4oa2V5LCBhcmcpIHtcbiAgICAgIGNvbnN0IGhvb2tzID0gY2hhbmdlSG9va3NbS0VZX0dMT0JBTF9JRF0/LltrZXldO1xuICAgICAgaWYgKCFob29rcykgdGhyb3cgYGhhcyBub3QgcmVnICR7a2V5fWA7XG4gICAgICBjb25zdCBmbiA9IGhvb2tzW29iamVjdEtleXMoaG9va3MpWzBdXTtcbiAgICAgIHJldHVybiBmbihhcmcpO1xuICAgIH0sXG4gICAgR01fZGVsZXRlVmFsdWUoa2V5KSB7XG4gICAgICBjb25zdCB7IGlkIH0gPSB0aGlzO1xuICAgICAgY29uc3QgdmFsdWVzID0gbG9hZFZhbHVlcyhpZCk7XG4gICAgICBjb25zdCBvbGRSYXcgPSB2YWx1ZXNba2V5XTtcbiAgICAgIGRlbGV0ZSB2YWx1ZXNba2V5XTtcbiAgICAgIC8vIHVzaW5nIGB1bmRlZmluZWRgIHRvIG1hdGNoIHRoZSBkb2N1bWVudGF0aW9uIGFuZCBUTSBmb3IgR01fYWRkVmFsdWVDaGFuZ2VMaXN0ZW5lclxuICAgICAgZHVtcFZhbHVlKGlkLCBrZXksIHVuZGVmaW5lZCwgbnVsbCwgb2xkUmF3LCB0aGlzKTtcbiAgICB9LFxuICAgIEdNX2dldFZhbHVlKGtleSwgZGVmKSB7XG4gICAgICBjb25zdCByYXcgPSBsb2FkVmFsdWVzKHRoaXMuaWQpW2tleV07XG4gICAgICByZXR1cm4gcmF3ID8gZGVjb2RlVmFsdWUocmF3KSA6IGRlZjtcbiAgICB9LFxuICAgIEdNX2xpc3RWYWx1ZXMoKSB7XG4gICAgICByZXR1cm4gb2JqZWN0S2V5cyhsb2FkVmFsdWVzKHRoaXMuaWQpKTtcbiAgICB9LFxuICAgIEdNX3NldFZhbHVlKGtleSwgdmFsKSB7XG4gICAgICBjb25zdCB7IGlkIH0gPSB0aGlzO1xuICAgICAgY29uc3QgcmF3ID0gZHVtcFNjcmlwdFZhbHVlKHZhbCwganNvbkR1bXApIHx8IG51bGw7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBsb2FkVmFsdWVzKGlkKTtcbiAgICAgIGNvbnN0IG9sZFJhdyA9IHZhbHVlc1trZXldO1xuICAgICAgdmFsdWVzW2tleV0gPSByYXc7XG4gICAgICBkdW1wVmFsdWUoaWQsIGtleSwgdmFsLCByYXcsIG9sZFJhdywgdGhpcyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAY2FsbGJhY2sgR01WYWx1ZUNoYW5nZUxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7P30gb2xkVmFsdWUgLSBgdW5kZWZpbmVkYCBtZWFucyB2YWx1ZSB3YXMgY3JlYXRlZFxuICAgICAqIEBwYXJhbSB7P30gbmV3VmFsdWUgLSBgdW5kZWZpbmVkYCBtZWFucyB2YWx1ZSB3YXMgcmVtb3ZlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVtb3RlIC0gYHRydWVgIG1lYW5zIHZhbHVlIHdhcyBtb2RpZmllZCBpbiBhbm90aGVyIHRhYlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBuYW1lIG9mIHRoZSB2YWx1ZSB0byBtb25pdG9yXG4gICAgICogQHBhcmFtIHtHTVZhbHVlQ2hhbmdlTGlzdGVuZXJ9IGZuIC0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBsaXN0ZW5lcklkXG4gICAgICovXG4gICAgR01fYWRkVmFsdWVDaGFuZ2VMaXN0ZW5lcihrZXksIGZuKSB7XG4gICAgICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcy5pZCwga2V5LCBmbik7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGlzdGVuZXJJZFxuICAgICAqL1xuICAgIEdNX3JlbW92ZVZhbHVlQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXJJZCkge1xuICAgICAgcmV0dXJuIHJlbW92ZUxpc3RlbmVyKHRoaXMuaWQsIGxpc3RlbmVySWQpO1xuICAgIH0sXG4gICAgR01fZ2V0UmVzb3VyY2VUZXh0KG5hbWUpIHtcbiAgICAgIHJldHVybiBnZXRSZXNvdXJjZSh0aGlzLCBuYW1lKTtcbiAgICB9LFxuICAgIEdNX2dldFJlc291cmNlVVJMKG5hbWUpIHtcbiAgICAgIHJldHVybiBnZXRSZXNvdXJjZSh0aGlzLCBuYW1lLCB0cnVlKTtcbiAgICB9LFxuICAgIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmQoY2FwLCBmdW5jKSB7XG4gICAgICBjb25zdCB7IGlkIH0gPSB0aGlzO1xuICAgICAgY29uc3Qga2V5ID0gYCR7aWR9OiR7Y2FwfWA7XG4gICAgICBzdG9yZS5jb21tYW5kc1trZXldID0gZnVuYztcbiAgICAgIGJyaWRnZS5wb3N0KCdSZWdpc3Rlck1lbnUnLCB7IGlkLCBjYXAgfSwgdGhpcyk7XG4gICAgICByZXR1cm4gY2FwO1xuICAgIH0sXG4gICAgR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kKGNhcCkge1xuICAgICAgY29uc3QgeyBpZCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IGtleSA9IGAke2lkfToke2NhcH1gO1xuICAgICAgZGVsZXRlIHN0b3JlLmNvbW1hbmRzW2tleV07XG4gICAgICBicmlkZ2UucG9zdCgnVW5yZWdpc3Rlck1lbnUnLCB7IGlkLCBjYXAgfSwgdGhpcyk7XG4gICAgfSxcbiAgICBHTV9kb3dubG9hZChhcmcxLCBuYW1lKSB7XG4gICAgICAvLyBub3QgdXNpbmcgLi4uIGFzIGl0IGNhbGxzIEJhYmVsJ3MgcG9seWZpbGwgdGhhdCBjYWxscyB1bnNhZmUgT2JqZWN0Lnh4eFxuICAgICAgY29uc3Qgb3B0cyA9IGNyZWF0ZU51bGxPYmooKTtcbiAgICAgIGxldCBvbmxvYWQ7XG4gICAgICBpZiAoaXNTdHJpbmcoYXJnMSkpIHtcbiAgICAgICAgb3B0cy51cmwgPSBhcmcxO1xuICAgICAgICBvcHRzLm5hbWUgPSBuYW1lO1xuICAgICAgfSBlbHNlIGlmIChhcmcxKSB7XG4gICAgICAgIG5hbWUgPSBhcmcxLm5hbWU7XG4gICAgICAgIG9ubG9hZCA9IGFyZzEub25sb2FkO1xuICAgICAgICBvcHRzOjpwaWNrSW50b1RoaXMoYXJnMSwgW1xuICAgICAgICAgICd1cmwnLFxuICAgICAgICAgICdoZWFkZXJzJyxcbiAgICAgICAgICAndGltZW91dCcsXG4gICAgICAgICAgJ29uZXJyb3InLFxuICAgICAgICAgICdvbnByb2dyZXNzJyxcbiAgICAgICAgICAnb250aW1lb3V0JyxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgICBpZiAoIW5hbWUgfHwgIWlzU3RyaW5nKG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvclNhZmUoJ1JlcXVpcmVkIHBhcmFtZXRlciBcIm5hbWVcIiBpcyBtaXNzaW5nIG9yIG5vdCBhIHN0cmluZy4nKTtcbiAgICAgIH1cbiAgICAgIGFzc2lnbihvcHRzLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxuICAgICAgICBvdmVycmlkZU1pbWVUeXBlOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAgICAgLy8gTXVzdCBiZSBwcmVzZW50IGFuZCBhIGZ1bmN0aW9uIHRvIHRyaWdnZXIgZG93bmxvYWRCbG9iIGluIGNvbnRlbnQgYnJpZGdlXG4gICAgICAgIG9ubG9hZDogaXNGdW5jdGlvbihvbmxvYWQpID8gb25sb2FkIDogKCgpID0+IHt9KSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG9uUmVxdWVzdENyZWF0ZShvcHRzLCB0aGlzLCBuYW1lKTtcbiAgICB9LFxuICAgIEdNX3htbGh0dHBSZXF1ZXN0KG9wdHMpIHtcbiAgICAgIHJldHVybiBvblJlcXVlc3RDcmVhdGUob3B0cywgdGhpcyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBCeXBhc3NlcyBzaXRlJ3MgQ1NQIGZvciBpbmxpbmUgYHN0eWxlYCwgYGxpbmtgLCBhbmQgYHNjcmlwdGAuXG4gICAgICogQHBhcmFtIHtOb2RlfSBbcGFyZW50XVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2F0dHJpYnV0ZXNdXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBpdCBhbHNvIGhhcyAudGhlbigpIHNvIGl0IHNob3VsZCBiZSBjb21wYXRpYmxlIHdpdGggVE1cbiAgICAgKi9cbiAgICBHTV9hZGRFbGVtZW50KHBhcmVudCwgdGFnLCBhdHRyaWJ1dGVzKSB7XG4gICAgICByZXR1cm4gaXNTdHJpbmcocGFyZW50KVxuICAgICAgICA/IHdlYkFkZEVsZW1lbnQobnVsbCwgcGFyZW50LCB0YWcsIHRoaXMpXG4gICAgICAgIDogd2ViQWRkRWxlbWVudChwYXJlbnQsIHRhZywgYXR0cmlidXRlcywgdGhpcyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBCeXBhc3NlcyBzaXRlJ3MgQ1NQIGZvciBpbmxpbmUgYHN0eWxlYC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3NzXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBpdCBhbHNvIGhhcyAudGhlbigpIHNvIGl0IHNob3VsZCBiZSBjb21wYXRpYmxlIHdpdGggVE0gYW5kIG9sZCBWTVxuICAgICAqL1xuICAgIEdNX2FkZFN0eWxlKGNzcykge1xuICAgICAgcmV0dXJuIHdlYkFkZEVsZW1lbnQobnVsbCwgJ3N0eWxlJywgeyB0ZXh0Q29udGVudDogY3NzLCBpZDogZ2V0VW5pcUlkU2FmZSgnVk1zdCcpIH0sIHRoaXMpO1xuICAgIH0sXG4gICAgR01fb3BlbkluVGFiKHVybCwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9uVGFiQ3JlYXRlKFxuICAgICAgICBpc09iamVjdChvcHRpb25zKVxuICAgICAgICAgID8gYXNzaWduKGNyZWF0ZU51bGxPYmooKSwgb3B0aW9ucywgeyB1cmwgfSlcbiAgICAgICAgICA6IHsgYWN0aXZlOiAhb3B0aW9ucywgdXJsIH0sXG4gICAgICAgIHRoaXMsXG4gICAgICApO1xuICAgIH0sXG4gICAgR01fbm90aWZpY2F0aW9uKHRleHQsIHRpdGxlLCBpbWFnZSwgb25jbGljaykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IGlzT2JqZWN0KHRleHQpID8gdGV4dCA6IHtcbiAgICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgICB0ZXh0LFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIG9uY2xpY2ssXG4gICAgICB9O1xuICAgICAgaWYgKCFvcHRpb25zLnRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yU2FmZSgnR01fbm90aWZpY2F0aW9uOiBgdGV4dGAgaXMgcmVxdWlyZWQhJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBpZCA9IG9uTm90aWZpY2F0aW9uQ3JlYXRlKG9wdGlvbnMsIHRoaXMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiB2bU93bkZ1bmMoKCkgPT4gYnJpZGdlLnNlbmQoJ1JlbW92ZU5vdGlmaWNhdGlvbicsIGlkLCB0aGlzKSksXG4gICAgICB9O1xuICAgIH0sXG4gICAgR01fc2V0Q2xpcGJvYXJkKGRhdGEsIHR5cGUpIHtcbiAgICAgIGJyaWRnZS5wb3N0KCdTZXRDbGlwYm9hcmQnLCB7IGRhdGEsIHR5cGUgfSwgdGhpcyk7XG4gICAgfSxcbiAgICAvLyB1c2luZyB0aGUgbmF0aXZlIGNvbnNvbGUubG9nIHNvIHRoZSBvdXRwdXQgaGFzIGEgY2xpY2thYmxlIGxpbmsgdG8gdGhlIGNhbGxlcidzIHNvdXJjZVxuICAgIEdNX2xvZzogbG9nZ2luZy5sb2csXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGlkLCBrZXksIGZuKSB7XG4gIGlmICghaXNTdHJpbmcoa2V5KSkga2V5ID0gYCR7a2V5fWA7XG4gIGlmICghaXNGdW5jdGlvbihmbikpIHJldHVybjtcbiAgY29uc3QgaG9va3MgPSBlbnN1cmVOZXN0ZWRQcm9wKGNoYW5nZUhvb2tzLCBpZCwga2V5KTtcbiAgY29uc3QgaSA9IG9iamVjdFZhbHVlcyhob29rcyk6OmluZGV4T2YoZm4pO1xuICBsZXQgbGlzdGVuZXJJZCA9IGkgPj0gMCAmJiBvYmplY3RLZXlzKGhvb2tzKVtpXTtcbiAgaWYgKCFsaXN0ZW5lcklkKSB7XG4gICAgbGlzdGVuZXJJZCA9IGdldFVuaXFJZFNhZmUoJ1ZNdmMnKTtcbiAgICBob29rc1tsaXN0ZW5lcklkXSA9IGZuO1xuICB9XG4gIHJldHVybiBsaXN0ZW5lcklkO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihpZCwgbGlzdGVuZXJJZCkge1xuICBjb25zdCBrZXlIb29rcyA9IGNoYW5nZUhvb2tzW2lkXTtcbiAgaWYgKCFrZXlIb29rcykgcmV0dXJuO1xuICBmb3IgKGNvbnN0IGtleSBpbiBrZXlIb29rcykgeyAvKiBwcm90byBpcyBudWxsICovLy8gZXNsaW50LWRpc2FibGUtbGluZSBndWFyZC1mb3ItaW5cbiAgICBjb25zdCBob29rcyA9IGtleUhvb2tzW2tleV07XG4gICAgaWYgKGxpc3RlbmVySWQgaW4gaG9va3MpIHtcbiAgICAgIGRlbGV0ZSBob29rc1tsaXN0ZW5lcklkXTtcbiAgICAgIGlmIChpc0VtcHR5KGhvb2tzKSkgZGVsZXRlIGtleUhvb2tzW2tleV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKGlzRW1wdHkoa2V5SG9va3MpKSBkZWxldGUgY2hhbmdlSG9va3NbaWRdO1xufVxuXG5mdW5jdGlvbiB3ZWJBZGRFbGVtZW50KHBhcmVudCwgdGFnLCBhdHRycywgY29udGV4dCkge1xuICBsZXQgZWw7XG4gIGxldCBlcnJvckluZm87XG4gIGJyaWRnZS5zeW5jQ2FsbCgnQWRkRWxlbWVudCcsIHsgdGFnLCBhdHRycyB9LCBjb250ZXh0LCBwYXJlbnQsIGZ1bmN0aW9uIF8ocmVzKSB7XG4gICAgZWwgPSB0aGlzO1xuICAgIGVycm9ySW5mbyA9IHJlcztcbiAgfSwgJ2NiSWQnKTtcbiAgLy8gRE9NIGVycm9yIGluIGNvbnRlbnQgc2NyaXB0IGNhbid0IGJlIGNhdWdodCBieSBhIHBhZ2UtbW9kZSB1c2Vyc2NyaXB0IHNvIHdlIHJldGhyb3cgaXQgaGVyZVxuICBpZiAoZXJyb3JJbmZvKSB7XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yU2FmZShlcnJvckluZm9bMF0pO1xuICAgIGVyci5zdGFjayArPSBgXFxuJHtlcnJvckluZm9bMV19YDtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgLyogQSBQcm9taXNlIHBvbHlmaWxsIGlzIG5vdCBhY3R1YWxseSBuZWNlc3NhcnkgYmVjYXVzZSBET00gbWVzc2FnaW5nIGlzIHN5bmNocm9ub3VzLFxuICAgICBidXQgd2Uga2VlcCBpdCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEdNX2FkZFN0eWxlIGluIFZNIG9mIDIwMTctMjAxOVxuICAgICBodHRwczovL2dpdGh1Yi5jb20vdmlvbGVudG1vbmtleS92aW9sZW50bW9ua2V5L2lzc3Vlcy8yMTdcbiAgICAgYXMgd2VsbCBhcyBmb3IgR01fYWRkRWxlbWVudCBpbiBUYW1wZXJtb25rZXkuICovXG4gIHJldHVybiBzZXRPd25Qcm9wKGVsLCAndGhlbicsIGFzeW5jIGNiID0+IChcbiAgICAvLyBQcmV2ZW50aW5nIGluZmluaXRlIHJlc29sdmUgbG9vcFxuICAgIGRlbGV0ZSBlbC50aGVuXG4gICAgLy8gTmF0aXZlIFByb21pc2UgaWdub3JlcyBub24tZnVuY3Rpb25cbiAgICAmJiAoaXNGdW5jdGlvbihjYikgPyBjYihlbCkgOiBlbClcbiAgKSk7XG59XG5cbmZ1bmN0aW9uIGdldFJlc291cmNlKGNvbnRleHQsIG5hbWUsIGlzQmxvYikge1xuICBjb25zdCB7IGlkLCByZXNDYWNoZSwgcmVzb3VyY2VzIH0gPSBjb250ZXh0O1xuICBjb25zdCBrZXkgPSByZXNvdXJjZXNbbmFtZV07XG4gIGlmIChrZXkpIHtcbiAgICBsZXQgcmVzID0gcmVzQ2FjaGVba2V5XTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgYnJpZGdlLnN5bmNDYWxsKCdHZXRSZXNvdXJjZScsIHsgaWQsIGlzQmxvYiwga2V5IH0sIGNvbnRleHQsIG51bGwsIHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmVzID0gcmVzcG9uc2U7XG4gICAgICB9KTtcbiAgICAgIGlmIChyZXMgIT09IHRydWUgJiYgaXNCbG9iKSB7XG4gICAgICAgIHJlcyA9IGNyZWF0ZU9iamVjdFVSTChyZXMpO1xuICAgICAgfVxuICAgICAgcmVzQ2FjaGVba2V5XSA9IHJlcztcbiAgICB9XG4gICAgcmV0dXJuIHJlcyA9PT0gdHJ1ZSA/IGtleSA6IHJlcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSU5KRUNUX0NPTlRFTlQgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBicmlkZ2UgZnJvbSAnLi9icmlkZ2UnO1xuaW1wb3J0IHsgRmFzdExvb2t1cCwgc2FmZUNvbmNhdCB9IGZyb20gJy4vdXRpbC13ZWInO1xuXG4vKiogVGhlIGluZGV4IHN0cmluZ3MgdGhhdCBsb29rIGV4YWN0bHkgbGlrZSBpbnRlZ2VycyBjYW4ndCBiZSBmb3JnZWRcbiAqIGJ1dCBmb3IgZXhhbXBsZSAnMDExJyBkb2Vzbid0IGxvb2sgbGlrZSAxMSBzbyBpdCdzIGFsbG93ZWQgKi9cbmNvbnN0IGlzRnJhbWVJbmRleCA9IGtleSA9PiBrZXkgPj0gMCAmJiBrZXkgPD0gMHhGRkZGX0ZGRkUgJiYga2V5ID09PSBgJHsra2V5fWA7XG5jb25zdCBzY29wZVN5bSA9IFN5bWJvbFNhZmUudW5zY29wYWJsZXM7XG5jb25zdCBnbG9iYWxLZXlzU2V0ID0gRmFzdExvb2t1cCgpO1xuY29uc3QgZ2xvYmFsS2V5cyA9IChmdW5jdGlvbiBtYWtlR2xvYmFsS2V5cygpIHtcbiAgY29uc3Qga1dyYXBwZWRKU09iamVjdCA9ICd3cmFwcGVkSlNPYmplY3QnO1xuICBjb25zdCBuYW1lcyA9IGdldE93blByb3BlcnR5TmFtZXMod2luZG93KTtcbiAgLy8gVHJ1ZSBpZiBgbmFtZXNgIGlzIHVzYWJsZSBhcyBpcywgYnV0IEZGIGlzIGJ1Z2dlZDogaXRzIG5hbWVzIGhhdmUgZHVwbGljYXRlc1xuICBsZXQgb2sgPSAhSVNfRklSRUZPWDtcbiAgbmFtZXM6OmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoaXNGcmFtZUluZGV4KGtleSkpIHtcbiAgICAgIG9rID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsb2JhbEtleXNTZXQuYWRkKGtleSk7XG4gICAgfVxuICB9KTtcbiAgLyogQ2hyb21lIGFuZCBGRiBwYWdlIG1vZGU6IGBnbG9iYWxgIGlzIGB3aW5kb3dgXG4gICAgIEZGIGNvbnRlbnQgbW9kZTogYGdsb2JhbGAgaXMgZGlmZmVyZW50LCBzb21lIHByb3BzIGUuZy4gYGlzRmluaXRlYCBhcmUgZGVmaW5lZCBvbmx5IHRoZXJlICovXG4gIGlmIChnbG9iYWwgIT09IHdpbmRvdykge1xuICAgIGdldE93blByb3BlcnR5TmFtZXMoZ2xvYmFsKTo6Zm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKCFpc0ZyYW1lSW5kZXgoa2V5KSkge1xuICAgICAgICBnbG9iYWxLZXlzU2V0LmFkZChrZXkpO1xuICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vIHdyYXBwZWRKU09iamVjdCBpcyBub3QgaW5jbHVkZWQgaW4gZ2V0T3duUHJvcGVydHlOYW1lcyBzbyB3ZSBhZGQgaXQgZXhwbGljaXRseS5cbiAgaWYgKElTX0ZJUkVGT1hcbiAgICAmJiBicmlkZ2UubW9kZSA9PT0gSU5KRUNUX0NPTlRFTlRcbiAgICAmJiBrV3JhcHBlZEpTT2JqZWN0IGluIGdsb2JhbFxuICAgICYmICFnbG9iYWxLZXlzU2V0LmhhcyhrV3JhcHBlZEpTT2JqZWN0KSkge1xuICAgIGdsb2JhbEtleXNTZXQuYWRkKGtXcmFwcGVkSlNPYmplY3QpO1xuICAgIGlmIChvaykgc2V0T3duUHJvcChuYW1lcywgbmFtZXMubGVuZ3RoLCBrV3JhcHBlZEpTT2JqZWN0KTtcbiAgfVxuICByZXR1cm4gb2sgPyBuYW1lcyA6IGdsb2JhbEtleXNTZXQudG9BcnJheSgpO1xufSgpKTtcbmNvbnN0IGluaGVyaXRlZEtleXMgPSBjcmVhdGVOdWxsT2JqKCk7XG4vKiBUaGVzZSBjYW4gYmUgcmVkZWZpbmVkIGJ1dCBjYW4ndCBiZSBhc3NpZ25lZCwgc2VlIHNhbmRib3gtZ2xvYmFscy5odG1sICovXG5jb25zdCByZWFkb25seUtleXMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgYXBwbGljYXRpb25DYWNoZTogMSxcbiAgY2FjaGVzOiAxLFxuICBjbG9zZWQ6IDEsXG4gIGNyb3NzT3JpZ2luSXNvbGF0ZWQ6IDEsXG4gIGNyeXB0bzogMSxcbiAgY3VzdG9tRWxlbWVudHM6IDEsXG4gIGZyYW1lRWxlbWVudDogMSxcbiAgaGlzdG9yeTogMSxcbiAgaW5kZXhlZERCOiAxLFxuICBpc1NlY3VyZUNvbnRleHQ6IDEsXG4gIGxvY2FsU3RvcmFnZTogMSxcbiAgbW96SW5uZXJTY3JlZW5YOiAxLFxuICBtb3pJbm5lclNjcmVlblk6IDEsXG4gIG5hdmlnYXRvcjogMSxcbiAgc2Vzc2lvblN0b3JhZ2U6IDEsXG4gIHNwZWVjaFN5bnRoZXNpczogMSxcbiAgc3R5bGVNZWRpYTogMSxcbiAgdHJ1c3RlZFR5cGVzOiAxLFxufTtcbi8qIFRoZXNlIGNhbid0IGJlIHJlZGVmaW5lZCwgc2VlIHNhbmRib3gtZ2xvYmFscy5odG1sICovXG5jb25zdCB1bmZvcmdlYWJsZXMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgSW5maW5pdHk6IDEsXG4gIE5hTjogMSxcbiAgZG9jdW1lbnQ6IDEsXG4gIGxvY2F0aW9uOiAxLFxuICB0b3A6IDEsXG4gIHVuZGVmaW5lZDogMSxcbiAgd2luZG93OiAxLFxufTtcbi8qIH41MCBtZXRob2RzIGxpa2UgYWxlcnQvZmV0Y2gvbW92ZUJ5IHRoYXQgbmVlZCBgd2luZG93YCBhcyBgdGhpc2AsIHNlZSBzYW5kYm94LWdsb2JhbHMuaHRtbCAqL1xuY29uc3QgTUFZQkUgPSB2bU93bkZ1bmM7IC8vIHNvbWV0aGluZyB0aGF0IGNhbid0IGJlIGltaXRhdGVkIGJ5IHRoZSBwYWdlXG5jb25zdCBib3VuZE1ldGhvZHMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgYWRkRXZlbnRMaXN0ZW5lcjogTUFZQkUsXG4gIGFsZXJ0OiBNQVlCRSxcbiAgYXRvYlNhZmU6IE1BWUJFLFxuICBibHVyOiBNQVlCRSxcbiAgYnRvYTogTUFZQkUsXG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lOiBNQVlCRSxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrOiBNQVlCRSxcbiAgY2FwdHVyZUV2ZW50czogTUFZQkUsXG4gIGNsZWFySW50ZXJ2YWw6IE1BWUJFLFxuICBjbGVhclRpbWVvdXQ6IE1BWUJFLFxuICBjbG9zZTogTUFZQkUsXG4gIGNvbmZpcm06IE1BWUJFLFxuICBjcmVhdGVJbWFnZUJpdG1hcDogTUFZQkUsXG4gIGRpc3BhdGNoRXZlbnQ6IE1BWUJFLFxuICBkdW1wOiBNQVlCRSxcbiAgZmV0Y2g6IE1BWUJFLFxuICBmaW5kOiBNQVlCRSxcbiAgZm9jdXM6IE1BWUJFLFxuICBnZXRDb21wdXRlZFN0eWxlOiBNQVlCRSxcbiAgZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGU6IE1BWUJFLFxuICBnZXRTZWxlY3Rpb246IE1BWUJFLFxuICBtYXRjaE1lZGlhOiBNQVlCRSxcbiAgbW92ZUJ5OiBNQVlCRSxcbiAgbW92ZVRvOiBNQVlCRSxcbiAgb3BlbjogTUFZQkUsXG4gIG9wZW5EYXRhYmFzZTogTUFZQkUsXG4gIHBvc3RNZXNzYWdlOiBNQVlCRSxcbiAgcHJpbnQ6IE1BWUJFLFxuICBwcm9tcHQ6IE1BWUJFLFxuICBxdWV1ZU1pY3JvdGFzazogTUFZQkUsXG4gIHJlbGVhc2VFdmVudHM6IE1BWUJFLFxuICByZW1vdmVFdmVudExpc3RlbmVyOiBNQVlCRSxcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lOiBNQVlCRSxcbiAgcmVxdWVzdElkbGVDYWxsYmFjazogTUFZQkUsXG4gIHJlc2l6ZUJ5OiBNQVlCRSxcbiAgcmVzaXplVG86IE1BWUJFLFxuICBzY3JvbGw6IE1BWUJFLFxuICBzY3JvbGxCeTogTUFZQkUsXG4gIHNjcm9sbEJ5TGluZXM6IE1BWUJFLFxuICBzY3JvbGxCeVBhZ2VzOiBNQVlCRSxcbiAgc2Nyb2xsVG86IE1BWUJFLFxuICBzZXRJbnRlcnZhbDogTUFZQkUsXG4gIHNldFJlc2l6YWJsZTogTUFZQkUsXG4gIHNldFRpbWVvdXQ6IE1BWUJFLFxuICBzaXplVG9Db250ZW50OiBNQVlCRSxcbiAgc3RvcDogTUFZQkUsXG4gIHVwZGF0ZUNvbW1hbmRzOiBNQVlCRSxcbiAgd2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWU6IE1BWUJFLFxuICB3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IE1BWUJFLFxuICB3ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbTogTUFZQkUsXG4gIHdlYmtpdFJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkw6IE1BWUJFLFxufTtcblxuZm9yIChjb25zdCBuYW1lIGluIHVuZm9yZ2VhYmxlcykgeyAvKiBwcm90byBpcyBudWxsICovLy8gZXNsaW50LWRpc2FibGUtbGluZSBndWFyZC1mb3ItaW5cbiAgbGV0IHRoaXNPYmo7XG4gIGxldCBpbmZvID0gKFxuICAgIGRlc2NyaWJlUHJvcGVydHkodGhpc09iaiA9IGdsb2JhbCwgbmFtZSlcbiAgICB8fCBkZXNjcmliZVByb3BlcnR5KHRoaXNPYmogPSB3aW5kb3csIG5hbWUpXG4gICk7XG4gIGxldCBmbjtcbiAgaWYgKGluZm8pIHtcbiAgICBpbmZvID0gYXNzaWduKGNyZWF0ZU51bGxPYmooKSwgaW5mbyk7XG4gICAgLy8gY3VycmVudGx5IG9ubHkgYGRvY3VtZW50YCBhbmQgYHdpbmRvd2BcbiAgICBpZiAoKGZuID0gaW5mby5nZXQpKSBpbmZvLmdldCA9IGZuOjpiaW5kKHRoaXNPYmopO1xuICAgIC8vIGN1cnJlbnRseSBvbmx5IGBsb2NhdGlvbmBcbiAgICBpZiAoKGZuID0gaW5mby5zZXQpKSBpbmZvLnNldCA9IGZuOjpiaW5kKHRoaXNPYmopO1xuICAgIHVuZm9yZ2VhYmxlc1tuYW1lXSA9IGluZm87XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIHVuZm9yZ2VhYmxlc1tuYW1lXTtcbiAgfVxufVxuW0V2ZW50VGFyZ2V0LCBPYmplY3RdOjpmb3JFYWNoKHNyYyA9PiB7XG4gIGdldE93blByb3BlcnR5TmFtZXMoc3JjW1BST1RPXSk6OmZvckVhY2goa2V5ID0+IHtcbiAgICBpbmhlcml0ZWRLZXlzW2tleV0gPSAxO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIEBkZXNjIFdyYXAgaGVscGVycyB0byBwcmV2ZW50IHVuZXhwZWN0ZWQgbW9kaWZpY2F0aW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VHbG9iYWxXcmFwcGVyKGxvY2FsKSB7XG4gIGNvbnN0IGV2ZW50cyA9IGNyZWF0ZU51bGxPYmooKTtcbiAgY29uc3QgcmVhZG9ubHlzID0gYXNzaWduKGNyZWF0ZU51bGxPYmooKSwgcmVhZG9ubHlLZXlzKTtcbiAgbGV0IGdsb2JhbHMgPSBnbG9iYWxLZXlzU2V0OyAvLyB3aWxsIGJlIGNvcGllZCBvbmx5IGlmIG1vZGlmaWVkXG4gIC8qIEJyb3dzZXJzIG1heSByZXR1cm4gW29iamVjdCBPYmplY3RdIGZvciBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKHdpbmRvdylcbiAgICAgb24gb3VyIGB3aW5kb3dgIHByb3h5IHNvIGpRdWVyeSBsaWJzIHNlZSBpdCBhcyBhIHBsYWluIG9iamVjdCBhbmQgdGhyb3dcbiAgICAgd2hlbiB0cnlpbmcgdG8gY2xvbmUgaXRzIHJlY3Vyc2l2ZSBwcm9wZXJ0aWVzIGxpa2UgYHNlbGZgIGFuZCBgd2luZG93YC4gKi9cbiAgc2FmZURlZmluZVByb3BlcnR5KGxvY2FsLCB0b1N0cmluZ1RhZ1N5bSwgeyBnZXQ6ICgpID0+ICdXaW5kb3cnIH0pO1xuICBjb25zdCB3cmFwcGVyID0gbmV3IFByb3h5U2FmZShsb2NhbCwge1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBkZWZpbmVQcm9wZXJ0eShfLCBuYW1lLCBkZXNjKSB7XG4gICAgICBjb25zdCBpc1N0ciA9IGlzU3RyaW5nKG5hbWUpO1xuICAgICAgaWYgKCFpc1N0ciB8fCAhaXNGcmFtZUluZGV4KG5hbWUpKSB7XG4gICAgICAgIHNhZmVEZWZpbmVQcm9wZXJ0eShsb2NhbCwgbmFtZSwgZGVzYyk7XG4gICAgICAgIGlmIChpc1N0cikgc2V0RXZlbnRIYW5kbGVyKG5hbWUpO1xuICAgICAgICBkZWxldGUgcmVhZG9ubHlzW25hbWVdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBkZWxldGVQcm9wZXJ0eShfLCBuYW1lKSB7XG4gICAgICBpZiAoIShuYW1lIGluIHVuZm9yZ2VhYmxlcykgJiYgZGVsZXRlIGxvY2FsW25hbWVdKSB7XG4gICAgICAgIGlmIChnbG9iYWxzLmhhcyhuYW1lKSkge1xuICAgICAgICAgIGlmIChnbG9iYWxzID09PSBnbG9iYWxLZXlzU2V0KSB7XG4gICAgICAgICAgICBnbG9iYWxzID0gZ2xvYmFsS2V5c1NldC5jbG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBnbG9iYWxzLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIFJlZHVjaW5nIFwic3RlcHBhYmlsaXR5XCIgc28gaXQgZG9lc24ndCBnZXQgaW4gdGhlIHdheSBvZiBkZWJ1Z2dpbmcgb3RoZXIgcGFydHMgb2Ygb3VyIGNvZGUuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJldHVybi1hc3NpZ24sIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgZ2V0OiAoXywgbmFtZSkgPT4gKG5hbWUgPT09ICd1bmRlZmluZWQnIHx8IG5hbWUgPT09IHNjb3BlU3ltID8gdW5kZWZpbmVkXG4gICAgICA6IChfID0gbG9jYWxbbmFtZV0pICE9PSB1bmRlZmluZWQgfHwgbmFtZSBpbiBsb2NhbCA/IF9cbiAgICAgICAgOiByZXNvbHZlUHJvcChuYW1lLCB3cmFwcGVyLCBnbG9iYWxzLCBsb2NhbClcbiAgICApLFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihfLCBuYW1lKSB7XG4gICAgICBjb25zdCBvd25EZXNjID0gZGVzY3JpYmVQcm9wZXJ0eShsb2NhbCwgbmFtZSk7XG4gICAgICBjb25zdCBkZXNjID0gb3duRGVzYyB8fCBnbG9iYWxzLmhhcyhuYW1lKSAmJiBkZXNjcmliZVByb3BlcnR5KGdsb2JhbCwgbmFtZSk7XG4gICAgICBpZiAoIWRlc2MpIHJldHVybjtcbiAgICAgIGlmIChnZXRPd25Qcm9wKGRlc2MsICd2YWx1ZScpID09PSB3aW5kb3cpIHtcbiAgICAgICAgZGVzYy52YWx1ZSA9IHdyYXBwZXI7XG4gICAgICB9XG4gICAgICAvLyBwcmV2ZW50aW5nIHNwZWMgdmlvbGF0aW9uIC0gd2UgbXVzdCBtaXJyb3IgYW4gdW5rbm93biB1bmZvcmdlYWJsZSBwcm9wXG4gICAgICBpZiAoIW93bkRlc2MgJiYgIWdldE93blByb3AoZGVzYywgJ2NvbmZpZ3VyYWJsZScpKSB7XG4gICAgICAgIGNvbnN0IGdldCA9IGdldE93blByb3AoZGVzYywgJ2dldCcpO1xuICAgICAgICBpZiAoZ2V0KSBkZXNjLmdldCA9IGdldDo6YmluZChnbG9iYWwpO1xuICAgICAgICBzYWZlRGVmaW5lUHJvcGVydHkobG9jYWwsIG5hbWUsIGRlc2MpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2M7XG4gICAgfSxcbiAgICBoYXM6IChfLCBuYW1lKSA9PiBuYW1lIGluIGxvY2FsIHx8IG5hbWUgaW4gaW5oZXJpdGVkS2V5cyB8fCBnbG9iYWxzLmhhcyhuYW1lKSxcbiAgICBvd25LZXlzOiAoKSA9PiBtYWtlT3duS2V5cyhsb2NhbCwgZ2xvYmFscyksXG4gICAgcHJldmVudEV4dGVuc2lvbnMoKSB7fSxcbiAgICBzZXQoXywgbmFtZSwgdmFsdWUpIHtcbiAgICAgIGNvbnN0IGlzU3RyID0gaXNTdHJpbmcobmFtZSk7XG4gICAgICBsZXQgcmVhZG9ubHkgPSByZWFkb25seXNbbmFtZV07XG4gICAgICBpZiAocmVhZG9ubHkgPT09IDEpIHtcbiAgICAgICAgcmVhZG9ubHkgPSBnbG9iYWxzLmhhcyhuYW1lKSA/IDIgOiAwO1xuICAgICAgICByZWFkb25seXNbbmFtZV0gPSByZWFkb25seTtcbiAgICAgIH1cbiAgICAgIGlmICghcmVhZG9ubHkgJiYgKCFpc1N0ciB8fCAhaXNGcmFtZUluZGV4KG5hbWUpKSkge1xuICAgICAgICBsb2NhbFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICBpZiAoaXNTdHIpIHNldEV2ZW50SGFuZGxlcihuYW1lLCB2YWx1ZSwgZ2xvYmFscywgZXZlbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gIH0pO1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gdW5mb3JnZWFibGVzKSB7IC8qIHByb3RvIGlzIG51bGwgKi8vLyBlc2xpbnQtZGlzYWJsZS1saW5lIGd1YXJkLWZvci1pblxuICAgIGNvbnN0IGRlc2MgPSB1bmZvcmdlYWJsZXNbbmFtZV07XG4gICAgaWYgKG5hbWUgPT09ICd3aW5kb3cnIHx8IG5hbWUgPT09ICd0b3AnICYmIElTX1RPUCkge1xuICAgICAgZGVsZXRlIGRlc2MuZ2V0O1xuICAgICAgZGVsZXRlIGRlc2Muc2V0O1xuICAgICAgZGVzYy52YWx1ZSA9IHdyYXBwZXI7XG4gICAgfVxuICAgIC8qIHByb3RvIGlzIGFscmVhZHkgbnVsbCAqLy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIGRlZmluZVByb3BlcnR5KGxvY2FsLCBuYW1lLCBkZXNjKTtcbiAgfVxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gbWFrZU93bktleXMobG9jYWwsIGdsb2JhbHMpIHtcbiAgLyoqIE5vdGUgdGhhdCBhcnJheXMgY2FuIGJlIGVhdmVzZHJvcHBlZCB2aWEgcHJvdG90eXBlIHNldHRlcnMgbGlrZSAnMCcsJzEnLC4uLlxuICAgKiBvbiBgcHVzaGAgYW5kIGBhcnJbaV0gPSAxMjNgLCBhcyB3ZWxsIGFzIHZpYSBnZXR0ZXJzIGlmIHlvdSByZWFkIGJleW9uZFxuICAgKiBpdHMgbGVuZ3RoIG9yIGZyb20gYW4gdW5hc3NpZ25lZCBgaG9sZWAuICovXG4gIGNvbnN0IG5hbWVzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhsb2NhbCk6OmZpbHRlcihub3RJbmNsdWRlZEluLCBnbG9iYWxzKTtcbiAgY29uc3Qgc3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhsb2NhbCk6OmZpbHRlcihub3RJbmNsdWRlZEluLCBnbG9iYWxzKTtcbiAgY29uc3QgZnJhbWVJbmRleGVzID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBzOyBnZXRPYmplY3RUeXBlVGFnKGdsb2JhbFtzID0gYCR7aX1gXSkgPT09ICdXaW5kb3cnOyBpICs9IDEpIHtcbiAgICBpZiAoIShzIGluIGxvY2FsKSkge1xuICAgICAgc2V0T3duUHJvcChmcmFtZUluZGV4ZXMsIHMsIHMpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2FmZUNvbmNhdChcbiAgICBbXSxcbiAgICBnbG9iYWxzID09PSBnbG9iYWxLZXlzU2V0ID8gZ2xvYmFsS2V5cyA6IGdsb2JhbHMudG9BcnJheSgpLFxuICAgIGZyYW1lSW5kZXhlcyxcbiAgICBuYW1lcyxcbiAgICBzeW1ib2xzLFxuICApO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlUHJvcChuYW1lLCB3cmFwcGVyLCBnbG9iYWxzLCBsb2NhbCkge1xuICBsZXQgdmFsdWUgPSBib3VuZE1ldGhvZHNbbmFtZV07XG4gIGlmICh2YWx1ZSA9PT0gTUFZQkUpIHtcbiAgICB2YWx1ZSA9IHdpbmRvd1tuYW1lXTtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWU6OmJpbmQod2luZG93KTtcbiAgICB9XG4gICAgYm91bmRNZXRob2RzW25hbWVdID0gdmFsdWU7XG4gIH1cbiAgY29uc3QgY2FuQ29weSA9IHZhbHVlIHx8IG5hbWUgaW4gaW5oZXJpdGVkS2V5cyB8fCBnbG9iYWxzLmhhcyhuYW1lKTtcbiAgaWYgKCF2YWx1ZSAmJiAoY2FuQ29weSB8fCBpc1N0cmluZyhuYW1lKSAmJiBpc0ZyYW1lSW5kZXgobmFtZSkpKSB7XG4gICAgdmFsdWUgPSBnbG9iYWxbbmFtZV07XG4gIH1cbiAgaWYgKHZhbHVlID09PSB3aW5kb3cpIHtcbiAgICB2YWx1ZSA9IHdyYXBwZXI7XG4gIH1cbiAgaWYgKGNhbkNvcHkgJiYgKFxuICAgIGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzT2JqZWN0KHZhbHVlKSAmJiBuYW1lICE9PSAnZXZlbnQnXG4gICAgLy8gd2luZG93LmV2ZW50IGNvbnRhaW5zIHRoZSBjdXJyZW50IGV2ZW50IHNvIGl0J3MgYWx3YXlzIGRpZmZlcmVudFxuICApKSB7XG4gICAgbG9jYWxbbmFtZV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNldEV2ZW50SGFuZGxlcihuYW1lLCB2YWx1ZSwgZ2xvYmFscywgZXZlbnRzKSB7XG4gIC8vIFNwb29mZWQgU3RyaW5nIGluZGV4IGdldHRlcnMgd29uJ3QgYmUgY2FsbGVkIHdpdGhpbiBsZW5ndGgsIGxlbmd0aCBpdHNlbGYgaXMgdW5mb3JnZWFibGVcbiAgaWYgKG5hbWUubGVuZ3RoIDwgMyB8fCBuYW1lWzBdICE9PSAnbycgfHwgbmFtZVsxXSAhPT0gJ24nIHx8ICFnbG9iYWxzLmhhcyhuYW1lKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBuYW1lID0gbmFtZTo6c2xpY2UoMik7XG4gIHdpbmRvdzo6b2ZmKG5hbWUsIGV2ZW50c1tuYW1lXSk7XG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIC8vIHRoZSBoYW5kbGVyIHdpbGwgYmUgdW5pcXVlIHNvIHRoYXQgb25lIHNjcmlwdCBjb3VsZG4ndCByZW1vdmUgc29tZXRoaW5nIGdsb2JhbFxuICAgIC8vIGxpa2UgY29uc29sZS5sb2cgc2V0IGJ5IGFub3RoZXIgc2NyaXB0XG4gICAgd2luZG93OjpvbihuYW1lLCBldmVudHNbbmFtZV0gPSB2YWx1ZTo6YmluZCh3aW5kb3cpKTtcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgZXZlbnRzW25hbWVdO1xuICB9XG59XG5cbi8qKiBAdGhpcyB7RmFzdExvb2t1cHxTZXR9ICovXG5mdW5jdGlvbiBub3RJbmNsdWRlZEluKGtleSkge1xuICByZXR1cm4gIXRoaXMuaGFzKGtleSk7XG59XG4iLCJpbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuLy8gTmVzdGVkIG9iamVjdHM6IHNjcmlwdElkIC0+IGtleU5hbWUgLT4gbGlzdGVuZXJJZCAtPiBHTVZhbHVlQ2hhbmdlTGlzdGVuZXJcbmV4cG9ydCBjb25zdCBjaGFuZ2VIb29rcyA9IGNyZWF0ZU51bGxPYmooKTtcblxuY29uc3QgZGF0YURlY29kZXJzID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIG86IGpzb25QYXJzZSxcbiAgbjogdmFsID0+ICt2YWwsXG4gIGI6IHZhbCA9PiB2YWwgPT09ICd0cnVlJyxcbn07XG5cbmJyaWRnZS5hZGRIYW5kbGVycyh7XG4gIFVwZGF0ZWRWYWx1ZXModXBkYXRlcykge1xuICAgIGNvbnN0IHsgcGFydGlhbCB9ID0gdXBkYXRlcztcbiAgICBvYmplY3RLZXlzKHVwZGF0ZXMpOjpmb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IG9sZERhdGEgPSBzdG9yZS52YWx1ZXNbaWRdO1xuICAgICAgaWYgKG9sZERhdGEpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlID0gdXBkYXRlc1tpZF07XG4gICAgICAgIGNvbnN0IGtleUhvb2tzID0gY2hhbmdlSG9va3NbaWRdO1xuICAgICAgICBpZiAoa2V5SG9va3MpIGNoYW5nZWRSZW1vdGVseShrZXlIb29rcywgb2xkRGF0YSwgdXBkYXRlKTtcbiAgICAgICAgaWYgKHBhcnRpYWwpIGFwcGx5UGFydGlhbFVwZGF0ZShvbGREYXRhLCB1cGRhdGUpO1xuICAgICAgICBlbHNlIHN0b3JlLnZhbHVlc1tpZF0gPSB1cGRhdGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRWYWx1ZXMoaWQpIHtcbiAgcmV0dXJuIHN0b3JlLnZhbHVlc1tpZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkdW1wVmFsdWUoaWQsIGtleSwgdmFsLCByYXcsIG9sZFJhdywgY29udGV4dCkge1xuICBicmlkZ2UucG9zdCgnVXBkYXRlVmFsdWUnLCB7IGlkLCBrZXksIHZhbHVlOiByYXcgfSwgY29udGV4dCk7XG4gIGlmIChyYXcgIT09IG9sZFJhdykge1xuICAgIGNvbnN0IGhvb2tzID0gY2hhbmdlSG9va3NbaWRdPy5ba2V5XTtcbiAgICBpZiAoaG9va3MpIG5vdGlmeUNoYW5nZShob29rcywga2V5LCB2YWwsIHJhdywgb2xkUmF3KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlVmFsdWUocmF3KSB7XG4gIGNvbnN0IHR5cGUgPSByYXdbMF07XG4gIGNvbnN0IGhhbmRsZSA9IGRhdGFEZWNvZGVyc1t0eXBlXTtcbiAgbGV0IHZhbCA9IHJhdzo6c2xpY2UoMSk7XG4gIHRyeSB7XG4gICAgaWYgKGhhbmRsZSkgdmFsID0gaGFuZGxlKHZhbCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIGxvZygnd2FybicsIFsnR01fZ2V0VmFsdWUnXSwgZSk7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gYXBwbHlQYXJ0aWFsVXBkYXRlKGRhdGEsIHVwZGF0ZSkge1xuICBvYmplY3RLZXlzKHVwZGF0ZSk6OmZvckVhY2goa2V5ID0+IHtcbiAgICBjb25zdCB2YWwgPSB1cGRhdGVba2V5XTtcbiAgICBpZiAodmFsKSBkYXRhW2tleV0gPSB2YWw7XG4gICAgZWxzZSBkZWxldGUgZGF0YVtrZXldO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlZFJlbW90ZWx5KGtleUhvb2tzLCBkYXRhLCB1cGRhdGUpIHtcbiAgb2JqZWN0S2V5cyh1cGRhdGUpOjpmb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgaG9va3MgPSBrZXlIb29rc1trZXldO1xuICAgIGlmIChob29rcykge1xuICAgICAgbGV0IHJhdyA9IHVwZGF0ZVtrZXldO1xuICAgICAgaWYgKCFyYXcpIHJhdyA9IHVuZGVmaW5lZDsgLy8gcGFydGlhbCBgdXBkYXRlYCBjdXJyZW50bHkgdXNlcyBudWxsIGZvciBkZWxldGVkIHZhbHVlc1xuICAgICAgY29uc3Qgb2xkUmF3ID0gZGF0YVtrZXldO1xuICAgICAgaWYgKG9sZFJhdyAhPT0gcmF3KSB7XG4gICAgICAgIGRhdGFba2V5XSA9IHJhdzsgLy8gd2lsbCBiZSBkZWxldGVkIGxhdGVyIGluIGFwcGx5UGFydGlhbFVwZGF0ZSBpZiBlbXB0eVxuICAgICAgICBub3RpZnlDaGFuZ2UoaG9va3MsIGtleSwgdW5kZWZpbmVkLCByYXcsIG9sZFJhdywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbm90aWZ5Q2hhbmdlKGhvb2tzLCBrZXksIHZhbCwgcmF3LCBvbGRSYXcsIHJlbW90ZSA9IGZhbHNlKSB7XG4gIC8vIGNvbnZlcnRpbmcgYG51bGxgIGZyb20gbWVzc2FnaW5nIHRvIGB1bmRlZmluZWRgIHRvIG1hdGNoIHRoZSBkb2N1bWVudGF0aW9uIGFuZCBUTVxuICBjb25zdCBvbGRWYWwgPSAob2xkUmF3IHx8IHVuZGVmaW5lZCkgJiYgZGVjb2RlVmFsdWUob2xkUmF3KTtcbiAgY29uc3QgbmV3VmFsID0gdmFsID09PSB1bmRlZmluZWQgJiYgcmF3ID8gZGVjb2RlVmFsdWUocmF3KSA6IHZhbDtcbiAgb2JqZWN0VmFsdWVzKGhvb2tzKTo6Zm9yRWFjaChmbiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGZuKGtleSwgb2xkVmFsLCBuZXdWYWwsIHJlbW90ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nKCdlcnJvcicsIFsnR01fYWRkVmFsdWVDaGFuZ2VMaXN0ZW5lcicsICdjYWxsYmFjayddLCBlKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgeyBtYWtlR21BcGlXcmFwcGVyIH0gZnJvbSAnLi9nbS1hcGktd3JhcHBlcic7XG5pbXBvcnQgJy4vZ20tdmFsdWVzJztcbmltcG9ydCAnLi9ub3RpZmljYXRpb25zJztcbmltcG9ydCAnLi9yZXF1ZXN0cyc7XG5pbXBvcnQgJy4vdGFicyc7XG5pbXBvcnQgeyBiaW5kRXZlbnRzLCBJTkpFQ1RfUEFHRSwgSU5KRUNUX0NPTlRFTlQgfSBmcm9tICcuLi91dGlsJztcblxuLy8gTWFrZSBzdXJlIHRvIGNhbGwgc2FmZTo6bWV0aG9kcygpIGluIGNvZGUgdGhhdCBtYXkgcnVuIGFmdGVyIHVzZXJzY3JpcHRzXG5cbmNvbnN0IHNlbmRTZXRUaW1lb3V0ID0gKCkgPT4gYnJpZGdlLnNlbmQoJ1NldFRpbWVvdXQnLCAwKTtcbi8vIFdhaXRpbmcgZm9yIGluamVjdGlvbiBvZiBjb250ZW50IG1vZGUgc2NyaXB0cyB0aGF0IGRvbid0IHJ1biBvbiBkb2N1bWVudC1zdGFydFxubGV0IHJlc29sdmVycztcbmxldCB3YWl0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplKFxuICB3ZWJJZCxcbiAgY29udGVudElkLFxuICBpbnZva2VIb3N0LFxuKSB7XG4gIGxldCBpbnZva2VHdWVzdDtcbiAgaWYgKHByb2Nlc3MuZW52LkhBTkRTSEFLRV9JRCkge1xuICAgIHdpbmRvdzo6b24ocHJvY2Vzcy5lbnYuSEFORFNIQUtFX0lEICsgcHJvY2Vzcy5lbnYuSEFORFNIQUtFX0FDSywgZSA9PiB7XG4gICAgICBlID0gZTo6Z2V0RGV0YWlsKCk7XG4gICAgICB3ZWJJZCA9IGVbMF07XG4gICAgICBjb250ZW50SWQgPSBlWzFdO1xuICAgIH0sIHsgX19wcm90b19fOiBudWxsLCBvbmNlOiB0cnVlLCBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIHdpbmRvdzo6ZmlyZShuZXcgQ3VzdG9tRXZlbnRTYWZlKHByb2Nlc3MuZW52LkhBTkRTSEFLRV9JRCkpO1xuICB9XG4gIGJyaWRnZS5kYXRhS2V5ID0gY29udGVudElkO1xuICBpZiAoaW52b2tlSG9zdCkge1xuICAgIHJlc29sdmVycyA9IGNyZWF0ZU51bGxPYmooKTtcbiAgICB3YWl0ZXJzID0gY3JlYXRlTnVsbE9iaigpO1xuICAgIGJyaWRnZS5tb2RlID0gSU5KRUNUX0NPTlRFTlQ7XG4gICAgYnJpZGdlLnBvc3QgPSAoY21kLCBkYXRhLCBjb250ZXh0LCBub2RlKSA9PiB7XG4gICAgICBpbnZva2VIb3N0KHsgY21kLCBkYXRhLCBub2RlLCBkYXRhS2V5OiAoY29udGV4dCB8fCBicmlkZ2UpLmRhdGFLZXkgfSwgSU5KRUNUX0NPTlRFTlQpO1xuICAgIH07XG4gICAgaW52b2tlR3Vlc3QgPSAoY21kLCBkYXRhLCByZWFsbSwgbm9kZSkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSBjb25zb2xlLmluZm8oJ1ticmlkZ2UuZ3Vlc3QuY29udGVudF0gcmVjZWl2ZWQnLCB7IGNtZCwgZGF0YSwgbm9kZSB9KTtcbiAgICAgIGJyaWRnZS5vbkhhbmRsZSh7IGNtZCwgZGF0YSwgbm9kZSB9KTtcbiAgICB9O1xuICAgIGdsb2JhbC5jaHJvbWUgPSB1bmRlZmluZWQ7XG4gICAgZ2xvYmFsLmJyb3dzZXIgPSB1bmRlZmluZWQ7XG4gICAgYnJpZGdlLmFkZEhhbmRsZXJzKHtcbiAgICAgIFJ1bkF0OiBuYW1lID0+IHJlc29sdmVyc1tuYW1lXSgpLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGJyaWRnZS5tb2RlID0gSU5KRUNUX1BBR0U7XG4gICAgYmluZEV2ZW50cyh3ZWJJZCwgY29udGVudElkLCBicmlkZ2UpO1xuICAgIGJyaWRnZS5hZGRIYW5kbGVycyh7XG4gICAgICAvKiogQHRoaXMge05vZGV9IGNvbnRlbnRXaW5kb3cgKi9cbiAgICAgIFdyaXRlVmF1bHQoaWQpIHtcbiAgICAgICAgdGhpc1tpZF0gPSBWQVVMVDtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGludm9rZUd1ZXN0O1xufVxuXG5icmlkZ2UuYWRkSGFuZGxlcnMoe1xuICBDb21tYW5kKHsgaWQsIGNhcCwgZXZ0IH0pIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IGV2dC5rZXkgPyBLZXlib2FyZEV2ZW50U2FmZSA6IE1vdXNlRXZlbnRTYWZlO1xuICAgIGNvbnN0IGZuID0gc3RvcmUuY29tbWFuZHNbYCR7aWR9OiR7Y2FwfWBdO1xuICAgIGlmIChmbikgZm4obmV3IGNvbnN0cnVjdG9yKGV2dC50eXBlLCBldnQpKTtcbiAgfSxcbiAgLyoqIEB0aGlzIHtOb2RlfSAqL1xuICBDYWxsYmFjayh7IGlkLCBkYXRhIH0pIHtcbiAgICBjb25zdCBmbiA9IGJyaWRnZS5jYWxsYmFja3NbaWRdO1xuICAgIGRlbGV0ZSBicmlkZ2UuY2FsbGJhY2tzW2lkXTtcbiAgICBpZiAoZm4pIHRoaXM6OmZuKGRhdGEpO1xuICB9LFxuICBTY3JpcHREYXRhKHsgaW5mbywgaXRlbXMsIHJ1bkF0IH0pIHtcbiAgICBpZiAoaW5mbykge1xuICAgICAgYXNzaWduKGJyaWRnZSwgaW5mbyk7XG4gICAgfVxuICAgIGlmIChpdGVtcykge1xuICAgICAgaWYgKHdhaXRlcnMgJiYgcnVuQXQgIT09ICdzdGFydCcpIHtcbiAgICAgICAgd2FpdGVyc1tydW5BdF0gPSBuZXcgUHJvbWlzZVNhZmUocmVzb2x2ZSA9PiB7IHJlc29sdmVyc1tydW5BdF0gPSByZXNvbHZlOyB9KTtcbiAgICAgIH1cbiAgICAgIGl0ZW1zOjpmb3JFYWNoKGNyZWF0ZVNjcmlwdERhdGEpO1xuICAgICAgLy8gRkYgYnVnIHdvcmthcm91bmQgdG8gZW5hYmxlIHByb2Nlc3Npbmcgb2Ygc291cmNlVVJMIGluIGluamVjdGVkIHBhZ2Ugc2NyaXB0c1xuICAgICAgaWYgKElTX0ZJUkVGT1ggJiYgYnJpZGdlLm1vZGUgPT09IElOSkVDVF9QQUdFKSB7XG4gICAgICAgIGJyaWRnZS5wb3N0KCdJbmplY3RMaXN0JywgcnVuQXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgRXhwb3NlKCkge1xuICAgIHdpbmRvdy5leHRlcm5hbC5WaW9sZW50bW9ua2V5ID0ge1xuICAgICAgdmVyc2lvbjogcHJvY2Vzcy5lbnYuVk1fVkVSLFxuICAgICAgaXNJbnN0YWxsZWQ6IChuYW1lLCBuYW1lc3BhY2UpID0+IChcbiAgICAgICAgYnJpZGdlLnNlbmQoJ0dldFNjcmlwdFZlcicsIHsgbWV0YTogeyBuYW1lLCBuYW1lc3BhY2UgfSB9KVxuICAgICAgKSxcbiAgICB9O1xuICB9LFxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNjcmlwdERhdGEoaXRlbSkge1xuICBjb25zdCB7IGRhdGFLZXkgfSA9IGl0ZW07XG4gIHN0b3JlLnZhbHVlc1tpdGVtLnByb3BzLmlkXSA9IGl0ZW0udmFsdWVzIHx8IGNyZWF0ZU51bGxPYmooKTtcbiAgaWYgKHdpbmRvd1tkYXRhS2V5XSkgeyAvLyBleGVjdXRlU2NyaXB0IHJhbiBiZWZvcmUgR2V0SW5qZWN0ZWQgcmVzcG9uc2VcbiAgICBvbkNvZGVTZXQoaXRlbSwgd2luZG93W2RhdGFLZXldKTtcbiAgfSBlbHNlIHtcbiAgICBzYWZlRGVmaW5lUHJvcGVydHkod2luZG93LCBkYXRhS2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBzZXQ6IGZuID0+IG9uQ29kZVNldChpdGVtLCBmbiksXG4gICAgfSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gb25Db2RlU2V0KGl0ZW0sIGZuKSB7XG4gIGNvbnN0IHsgZGF0YUtleSwgc3RhZ2UgfSA9IGl0ZW07XG4gIC8vIGRlbGV0aW5nIG5vdyB0byBwcmV2ZW50IGludGVyY2VwdGlvbiB2aWEgRE9NTm9kZVJlbW92ZWQgb24gZWw6OnJlbW92ZSgpXG4gIGRlbGV0ZSB3aW5kb3dbZGF0YUtleV07XG4gIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgIGxvZygnaW5mbycsIFticmlkZ2UubW9kZV0sIGl0ZW0uZGlzcGxheU5hbWUpO1xuICB9XG4gIGNvbnN0IHJ1biA9ICgpID0+IHtcbiAgICBicmlkZ2UucG9zdCgnUnVuJywgaXRlbS5wcm9wcy5pZCwgaXRlbSk7XG4gICAgbWFrZUdtQXBpV3JhcHBlcihpdGVtKTo6Zm4obG9nZ2luZy5lcnJvcik7XG4gIH07XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQ6OmdldEN1cnJlbnRTY3JpcHQoKTtcbiAgY29uc3Qgd2FpdCA9IHdhaXRlcnM/LltzdGFnZV07XG4gIGlmIChlbCkgZWw6OnJlbW92ZSgpO1xuICBpZiAod2FpdCkge1xuICAgIHdhaXRlcnNbc3RhZ2VdID0gKHN0YWdlID09PSAnaWRsZScgPyB3YWl0Ojp0aGVuKHNlbmRTZXRUaW1lb3V0KSA6IHdhaXQpOjp0aGVuKHJ1bik7XG4gIH0gZWxzZSB7XG4gICAgcnVuKCk7XG4gIH1cbn1cbiIsImltcG9ydCBicmlkZ2UgZnJvbSAnLi9icmlkZ2UnO1xuXG5sZXQgbGFzdElkID0gMDtcbmNvbnN0IG5vdGlmaWNhdGlvbnMgPSBjcmVhdGVOdWxsT2JqKCk7XG5cbmJyaWRnZS5hZGRIYW5kbGVycyh7XG4gIE5vdGlmaWNhdGlvbkNsaWNrZWQoaWQpIHtcbiAgICBjb25zdCBmbiA9IG5vdGlmaWNhdGlvbnNbaWRdPy5vbmNsaWNrO1xuICAgIGlmIChmbikgZm4oKTtcbiAgfSxcbiAgTm90aWZpY2F0aW9uQ2xvc2VkKGlkKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG5vdGlmaWNhdGlvbnNbaWRdO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBkZWxldGUgbm90aWZpY2F0aW9uc1tpZF07XG4gICAgICBjb25zdCBmbiA9IG9wdGlvbnMub25kb25lO1xuICAgICAgaWYgKGZuKSBmbigpO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gb25Ob3RpZmljYXRpb25DcmVhdGUob3B0aW9ucywgY29udGV4dCkge1xuICBsYXN0SWQgKz0gMTtcbiAgbm90aWZpY2F0aW9uc1tsYXN0SWRdID0gb3B0aW9ucztcbiAgYnJpZGdlLnBvc3QoJ05vdGlmaWNhdGlvbicsIHtcbiAgICBpZDogbGFzdElkLFxuICAgIHRleHQ6IG9wdGlvbnMudGV4dCxcbiAgICB0aXRsZTogb3B0aW9ucy50aXRsZSxcbiAgICBpbWFnZTogb3B0aW9ucy5pbWFnZSxcbiAgfSwgY29udGV4dCk7XG4gIHJldHVybiBsYXN0SWQ7XG59XG4iLCJpbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcblxuY29uc3QgaWRNYXAgPSBjcmVhdGVOdWxsT2JqKCk7XG5cbmJyaWRnZS5hZGRIYW5kbGVycyh7XG4gIEh0dHBSZXF1ZXN0ZWQobXNnKSB7XG4gICAgY29uc3QgcmVxID0gaWRNYXBbbXNnLmlkXTtcbiAgICBpZiAocmVxKSBjYWxsYmFjayhyZXEsIG1zZyk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVxdWVzdENyZWF0ZShvcHRzLCBjb250ZXh0LCBmaWxlTmFtZSkge1xuICBpZiAoIW9wdHMudXJsKSB0aHJvdyBuZXcgRXJyb3JTYWZlKCdSZXF1aXJlZCBwYXJhbWV0ZXIgXCJ1cmxcIiBpcyBtaXNzaW5nLicpO1xuICBjb25zdCBzY3JpcHRJZCA9IGNvbnRleHQuaWQ7XG4gIGNvbnN0IGlkID0gZ2V0VW5pcUlkU2FmZShgVk14aHIke3NjcmlwdElkfWApO1xuICBjb25zdCByZXEgPSB7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGlkLFxuICAgIHNjcmlwdElkLFxuICAgIG9wdHMsXG4gIH07XG4gIHN0YXJ0KHJlcSwgY29udGV4dCwgZmlsZU5hbWUpO1xuICByZXR1cm4ge1xuICAgIGFib3J0KCkge1xuICAgICAgYnJpZGdlLnBvc3QoJ0Fib3J0UmVxdWVzdCcsIGlkLCBjb250ZXh0KTtcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGEocmVxLCBtc2cpIHtcbiAgbGV0IHJlcyA9IHJlcS5yYXc7XG4gIHN3aXRjaCAocmVxLm9wdHMucmVzcG9uc2VUeXBlKSB7XG4gIGNhc2UgJ2pzb24nOlxuICAgIHJlcyA9IGpzb25QYXJzZShyZXMpO1xuICAgIGJyZWFrO1xuICBjYXNlICdkb2N1bWVudCc6XG4gICAgcmVzID0gbmV3IERPTVBhcnNlclNhZmUoKTo6cGFyc2VGcm9tU3RyaW5nKHJlcyxcbiAgICAgIC8vIEN1dHRpbmcgZXZlcnl0aGluZyBhZnRlciAsIG9yIDsgYW5kIHRyaW1taW5nIHdoaXRlc3BhY2VcbiAgICAgIC9bLDtdLip8XFxzKy9nOjpyZWdleHBSZXBsYWNlKG1zZy5jb250ZW50VHlwZSwgJycpIHx8ICd0ZXh0L2h0bWwnKTtcbiAgICBicmVhaztcbiAgZGVmYXVsdDpcbiAgfVxuICAvLyBgcmVzcG9uc2VgIGlzIHNlbnQgb25seSB3aGVuIGNoYW5nZWQgc28gd2UgbmVlZCB0byByZW1lbWJlciBpdCBmb3IgcmVzcG9uc2UtbGVzcyBldmVudHNcbiAgcmVxLnJlc3BvbnNlID0gcmVzO1xuICAvLyBgcmF3YCBpcyBkZWNvZGVkIG9uY2UgcGVyIGByZXNwb25zZWAgY2hhbmdlIHNvIHdlIHJldXNlIHRoZSByZXN1bHQganVzdCBsaWtlIG5hdGl2ZSBYSFJcbiAgZGVsZXRlIHJlcS5yYXc7XG4gIHJldHVybiByZXM7XG59XG5cbi8vIHJlcXVlc3Qgb2JqZWN0IGZ1bmN0aW9uc1xuZnVuY3Rpb24gY2FsbGJhY2socmVxLCBtc2cpIHtcbiAgY29uc3QgeyBvcHRzIH0gPSByZXE7XG4gIGNvbnN0IGNiID0gb3B0c1tgb24ke21zZy50eXBlfWBdO1xuICBpZiAoY2IpIHtcbiAgICBjb25zdCB7IGRhdGEsIGRvd25sb2FkSWQgfSA9IG1zZztcbiAgICBpZiAoZG93bmxvYWRJZCkge1xuICAgICAgY2IobXNnKTtcbiAgICAgIGlmIChtc2cudHlwZSA9PT0gJ2xvYWQnKSBkZWxldGUgaWRNYXBbcmVxLmlkXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgcmVzcG9uc2UsXG4gICAgICByZXNwb25zZUhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICByZXNwb25zZVRleHQ6IHRleHQsXG4gICAgfSA9IGRhdGE7XG4gICAgaWYgKHJlc3BvbnNlICYmICEoJ3JhdycgaW4gcmVxKSkge1xuICAgICAgcmVxLnJhdyA9IHJlc3BvbnNlO1xuICAgIH1cbiAgICBkZWZpbmVQcm9wZXJ0eShkYXRhLCAncmVzcG9uc2UnLCB7XG4gICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICBnZXQoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gJ3JhdycgaW4gcmVxID8gcGFyc2VEYXRhKHJlcSwgbXNnKSA6IHJlcS5yZXNwb25zZTtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ3Jlc3BvbnNlJywgeyBfX3Byb3RvX186IG51bGwsIHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGlmIChoZWFkZXJzICE9IG51bGwpIHJlcS5oZWFkZXJzID0gaGVhZGVycztcbiAgICBpZiAodGV4dCAhPSBudWxsKSByZXEudGV4dCA9IGdldE93blByb3AodGV4dCwgMCkgPT09ICdzYW1lJyA/IHJlc3BvbnNlIDogdGV4dDtcbiAgICBzZXRPd25Qcm9wKGRhdGEsICdjb250ZXh0Jywgb3B0cy5jb250ZXh0KTtcbiAgICBzZXRPd25Qcm9wKGRhdGEsICdyZXNwb25zZUhlYWRlcnMnLCByZXEuaGVhZGVycyk7XG4gICAgc2V0T3duUHJvcChkYXRhLCAncmVzcG9uc2VUZXh0JywgcmVxLnRleHQpO1xuICAgIGNiKGRhdGEpO1xuICB9XG4gIGlmIChtc2cudHlwZSA9PT0gJ2xvYWRlbmQnKSBkZWxldGUgaWRNYXBbcmVxLmlkXTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnQocmVxLCBjb250ZXh0LCBmaWxlTmFtZSkge1xuICBjb25zdCB7IGlkLCBvcHRzLCBzY3JpcHRJZCB9ID0gcmVxO1xuICAvLyB3aXRoQ3JlZGVudGlhbHMgaXMgZm9yIEdNNCBjb21wYXRpYmlsaXR5IGFuZCB1c2VkIG9ubHkgaWYgYGFub255bW91c2AgaXMgbm90IHNldCxcbiAgLy8gaXQncyB0cnVlIGJ5IGRlZmF1bHQgcGVyIHRoZSBzdGFuZGFyZC9oaXN0b3JpY2FsIGJlaGF2aW9yIG9mIGdteGhyXG4gIGNvbnN0IHsgZGF0YSwgd2l0aENyZWRlbnRpYWxzID0gdHJ1ZSwgYW5vbnltb3VzID0gIXdpdGhDcmVkZW50aWFscyB9ID0gb3B0cztcbiAgaWRNYXBbaWRdID0gcmVxO1xuICBicmlkZ2UucG9zdCgnSHR0cFJlcXVlc3QnLCB7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGlkLFxuICAgIHNjcmlwdElkLFxuICAgIGFub255bW91cyxcbiAgICBmaWxlTmFtZSxcbiAgICBkYXRhOiBkYXRhID09IG51bGwgJiYgW11cbiAgICAgIC8vIGBiaW5hcnlgIGlzIGZvciBUTS9HTS1jb21wYXRpYmlsaXR5ICsgbm9uLW9iamVjdHMgPSBtdXN0IHVzZSBhIHN0cmluZyBgZGF0YWBcbiAgICAgIHx8IChvcHRzLmJpbmFyeSB8fCAhaXNPYmplY3QoZGF0YSkpICYmIFtgJHtkYXRhfWBdXG4gICAgICAvLyBGRjU2KyBjYW4gc2VuZCBhbnkgY2xvbmVhYmxlIGRhdGEgZGlyZWN0bHksIEZGNTItNTUgY2FuJ3QgZHVlIHRvIGh0dHBzOi8vYnVnemlsLmxhLzEzNzEyNDZcbiAgICAgIHx8IElTX0ZJUkVGT1ggJiYgYnJpZGdlLnVhLmJyb3dzZXJWZXJzaW9uID49IDU2ICYmIFtkYXRhXVxuICAgICAgLy8gVE9ETzogc3VwcG9ydCBodWdlIGRhdGEgYnkgc3BsaXR0aW5nIGl0IHRvIG11bHRpcGxlIG1lc3NhZ2VzXG4gICAgICB8fCBhd2FpdCBlbmNvZGVCb2R5KGRhdGEpLFxuICAgIGV2ZW50c1RvTm90aWZ5OiBbXG4gICAgICAnYWJvcnQnLFxuICAgICAgJ2Vycm9yJyxcbiAgICAgICdsb2FkJyxcbiAgICAgICdsb2FkZW5kJyxcbiAgICAgICdsb2Fkc3RhcnQnLFxuICAgICAgJ3Byb2dyZXNzJyxcbiAgICAgICdyZWFkeXN0YXRlY2hhbmdlJyxcbiAgICAgICd0aW1lb3V0JyxcbiAgICBdOjpmaWx0ZXIoa2V5ID0+IGlzRnVuY3Rpb24oZ2V0T3duUHJvcChvcHRzLCBgb24ke2tleX1gKSkpLFxuICAgIHhoclR5cGU6IGdldFJlc3BvbnNlVHlwZShvcHRzLnJlc3BvbnNlVHlwZSksXG4gIH06OnBpY2tJbnRvVGhpcyhvcHRzLCBbXG4gICAgJ2hlYWRlcnMnLFxuICAgICdtZXRob2QnLFxuICAgICdvdmVycmlkZU1pbWVUeXBlJyxcbiAgICAncGFzc3dvcmQnLFxuICAgICd0aW1lb3V0JyxcbiAgICAndXJsJyxcbiAgICAndXNlcicsXG4gIF0pLCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVzcG9uc2VUeXBlKHsgcmVzcG9uc2VUeXBlID0gJycgfSkge1xuICBzd2l0Y2ggKHJlc3BvbnNlVHlwZSkge1xuICBjYXNlICdhcnJheWJ1ZmZlcic6XG4gIGNhc2UgJ2Jsb2InOlxuICAgIHJldHVybiByZXNwb25zZVR5cGU7XG4gIGNhc2UgJ2RvY3VtZW50JzpcbiAgY2FzZSAnanNvbic6XG4gIGNhc2UgJ3RleHQnOlxuICBjYXNlICcnOlxuICAgIGJyZWFrO1xuICBkZWZhdWx0OlxuICAgIGxvZygnd2FybicsIG51bGwsIGBVbmtub3duIHJlc3BvbnNlVHlwZSBcIiR7cmVzcG9uc2VUeXBlfVwiLGBcbiAgICAgICsgJyBzZWUgaHR0cHM6Ly92aW9sZW50bW9ua2V5LmdpdGh1Yi5pby9hcGkvZ20vI2dtX3htbGh0dHByZXF1ZXN0IGZvciBtb3JlIGRldGFpbC4nKTtcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogUG9seWZpbGwgZm9yIENocm9tZSdzIGluYWJpbGl0eSB0byBzZW5kIGNvbXBsZXggdHlwZXMgb3ZlciBleHRlbnNpb24gbWVzc2FnaW5nLlxuICogV2UncmUgZW5jb2RpbmcgdGhlIGJvZHkgaGVyZSwgbm90IGluIGNvbnRlbnQsIGJlY2F1c2Ugd2Ugd2FudCB0byBzdXBwb3J0IEZvcm1EYXRhXG4gKiBhbmQgUmVhZGFibGVTdHJlYW0sIHdoaWNoIENocm9tZSBjYW4ndCB0cmFuc2ZlciB0byBpc29sYXRlZCB3b3JsZCB2aWEgQ3VzdG9tRXZlbnQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGVuY29kZUJvZHkoYm9keSkge1xuICBjb25zdCB3YXNCbG9iID0gZ2V0T2JqZWN0VHlwZVRhZyhib2R5KSA9PT0gJ0Jsb2InO1xuICBjb25zdCBibG9iID0gd2FzQmxvYiA/IGJvZHkgOiBhd2FpdCBuZXcgUmVzcG9uc2VTYWZlKGJvZHkpOjpzYWZlUmVzcG9uc2VCbG9iKCk7XG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyU2FmZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2VTYWZlKHJlc29sdmUgPT4ge1xuICAgIHJlYWRlcjo6b24oJ2xvYWQnLCAoKSA9PiByZXNvbHZlKFtcbiAgICAgIHJlYWRlcjo6Z2V0UmVhZGVyUmVzdWx0KCksXG4gICAgICBibG9iOjpnZXRCbG9iVHlwZSgpLFxuICAgICAgd2FzQmxvYixcbiAgICBdKSk7XG4gICAgcmVhZGVyOjpyZWFkQXNEYXRhVVJMKGJsb2IpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBjb21tYW5kczogY3JlYXRlTnVsbE9iaigpLFxuICB2YWx1ZXM6IGNyZWF0ZU51bGxPYmooKSxcbn07XG4iLCJpbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcblxubGV0IGxhc3RJZCA9IDA7XG5jb25zdCB0YWJzID0gY3JlYXRlTnVsbE9iaigpO1xuXG5icmlkZ2UuYWRkSGFuZGxlcnMoe1xuICBUYWJDbG9zZWQoa2V5KSB7XG4gICAgY29uc3QgaXRlbSA9IHRhYnNba2V5XTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgaXRlbS5jbG9zZWQgPSB0cnVlO1xuICAgICAgZGVsZXRlIHRhYnNba2V5XTtcbiAgICAgIGNvbnN0IGZuID0gaXRlbS5vbmNsb3NlO1xuICAgICAgaWYgKGZuKSBmbigpO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gb25UYWJDcmVhdGUoZGF0YSwgY29udGV4dCkge1xuICBsYXN0SWQgKz0gMTtcbiAgY29uc3Qga2V5ID0gbGFzdElkO1xuICBjb25zdCBpdGVtID0ge1xuICAgIG9uY2xvc2U6IG51bGwsXG4gICAgY2xvc2VkOiBmYWxzZSxcbiAgICBjbG9zZSgpIHtcbiAgICAgIGJyaWRnZS5wb3N0KCdUYWJDbG9zZScsIGtleSwgY29udGV4dCk7XG4gICAgfSxcbiAgfTtcbiAgdGFic1trZXldID0gaXRlbTtcbiAgYnJpZGdlLnBvc3QoJ1RhYk9wZW4nLCB7IGtleSwgZGF0YSB9LCBjb250ZXh0KTtcbiAgcmV0dXJuIGl0ZW07XG59XG4iLCJpbXBvcnQgeyBJTkpFQ1RfQ09OVEVOVCB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5cbmNvbnN0IGlzQ29uY2F0U3ByZWFkYWJsZVN5bSA9IFN5bWJvbFNhZmUuaXNDb25jYXRTcHJlYWRhYmxlO1xuXG5leHBvcnQgY29uc3Qgc2FmZUNvbmNhdCA9IChkZXN0LCAuLi5hcnJheXMpID0+IHtcbiAgaWYgKCFkZXN0W2lzQ29uY2F0U3ByZWFkYWJsZVN5bV0pIHtcbiAgICBzZXRPd25Qcm9wKGRlc3QsIGlzQ29uY2F0U3ByZWFkYWJsZVN5bSwgdHJ1ZSk7XG4gICAgYXJyYXlzOjpmb3JFYWNoKGFyciA9PiBzZXRPd25Qcm9wKGFyciwgaXNDb25jYXRTcHJlYWRhYmxlU3ltLCB0cnVlKSk7XG4gIH1cbiAgcmV0dXJuIGNvbmNhdDo6YXBwbHkoZGVzdCwgYXJyYXlzKTtcbn07XG5cbi8vIFJlZmVyZW5jZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSlNPTiNQb2x5ZmlsbFxuY29uc3QgZXNjTWFwID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gICdcIic6ICdcXFxcXCInLFxuICAnXFxcXCc6ICdcXFxcXFxcXCcsXG4gICdcXGInOiAnXFxcXGInLFxuICAnXFxmJzogJ1xcXFxmJyxcbiAgJ1xcbic6ICdcXFxcbicsXG4gICdcXHInOiAnXFxcXHInLFxuICAnXFx0JzogJ1xcXFx0Jyxcbn07XG4vLyBUT0RPOiBoYW5kbGUgXFx1MjAyOFxcdTIwMjkgd2hlbiBDaHJvbWUncyBKU09OLnN0cmluZ2lmeSBzdGFydHMgdG8gZXNjYXBlIHRoZW1cbmNvbnN0IGVzY1JFID0gL1tcXFxcXCJcXHUwMDAwLVxcdTAwMUZdL2c7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29udHJvbC1yZWdleFxuY29uc3QgaGV4ID0gJzAxMjM0NTY3ODlBQkNERUYnO1xuY29uc3QgZXNjQ2hhckNvZGUgPSBudW0gPT4gYFxcXFx1MDAke1xuICBoZXhbbnVtID4+IDRdIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYml0d2lzZVxufSR7XG4gIGhleFtudW0gJSAxNl1cbn1gO1xuY29uc3QgZXNjRnVuYyA9IG0gPT4gZXNjTWFwW21dIHx8IGVzY0NoYXJDb2RlKG06OmNoYXJDb2RlQXQoMCkpO1xuLyoqXG4gKiBXaGVuIHJ1bm5pbmcgaW4gdGhlIHBhZ2UgY29udGV4dCB3ZSBtdXN0IGJld2FyZSBvZiBzaXRlcyB0aGF0IG92ZXJyaWRlIEFycmF5I3RvSlNPTlxuICogbGVhZGluZyB0byBhbiBpbnZhbGlkIHJlc3VsdCwgd2hpY2ggaXMgd2h5IG91ciBqc29uRHVtcCgpIGlnbm9yZXMgdG9KU09OLlxuICogVGh1cywgd2UgdXNlIHRoZSBuYXRpdmUgSlNPTi5zdHJpbmdpZnkoKSBvbmx5IGluIHRoZSBjb250ZW50IHNjcmlwdCBjb250ZXh0IGFuZCBvbmx5IHVudGlsXG4gKiBhIHVzZXJzY3JpcHQgaXMgaW5qZWN0ZWQgaW50byB0aGlzIGNvbnRleHQgKGR1ZSB0byBgQGluamVjdC1pbnRvYCBhbmQvb3IgYSBDU1AgcHJvYmxlbSkuXG4gKi9cbmV4cG9ydCBjb25zdCBqc29uRHVtcCA9ICh2YWx1ZSwgc3RhY2spID0+IHtcbiAgbGV0IHJlcztcbiAgc3dpdGNoICh2YWx1ZSA9PT0gbnVsbCA/IChyZXMgPSAnbnVsbCcpIDogdHlwZW9mIHZhbHVlKSB7XG4gIGNhc2UgJ2JpZ2ludCc6XG4gIGNhc2UgJ251bWJlcic6XG4gICAgcmVzID0gc2FmZUlzRmluaXRlKHZhbHVlKSA/IGAke3ZhbHVlfWAgOiAnbnVsbCc7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIHJlcyA9IGAke3ZhbHVlfWA7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ3N0cmluZyc6XG4gICAgcmVzID0gYFwiJHtlc2NSRTo6cmVnZXhwUmVwbGFjZSh2YWx1ZSwgZXNjRnVuYyl9XCJgO1xuICAgIGJyZWFrO1xuICBjYXNlICdvYmplY3QnOlxuICAgIGlmICghc3RhY2spIHtcbiAgICAgIHN0YWNrID0gW3ZhbHVlXTsgLy8gQ3JlYXRpbmcgdGhlIGFycmF5IGhlcmUsIG9ubHkgd2hlbiB0eXBlIGlzIG9iamVjdC5cbiAgICB9IGVsc2UgaWYgKHN0YWNrOjppbmRleE9mKHZhbHVlKSA+PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3JTYWZlKCdDb252ZXJ0aW5nIGNpcmN1bGFyIHN0cnVjdHVyZSB0byBKU09OJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE93blByb3Aoc3RhY2ssIHN0YWNrLmxlbmd0aCwgdmFsdWUpO1xuICAgIH1cbiAgICBpZiAoQXJyYXlJc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmVzID0gJ1snO1xuICAgICAgLy8gTXVzdCBlbnVtZXJhdGUgYWxsIHZhbHVlcyB0byBpbmNsdWRlIGhvbGVzIGluIHNwYXJzZSBhcnJheXNcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICByZXMgKz0gYCR7aSA/ICcsJyA6ICcnfSR7anNvbkR1bXAodmFsdWVbaV0sIHN0YWNrKSA/PyAnbnVsbCd9YDtcbiAgICAgIH1cbiAgICAgIHJlcyArPSAnXSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9ICd7JztcbiAgICAgIG9iamVjdEtleXModmFsdWUpOjpmb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdiA9IGpzb25EdW1wKHZhbHVlW2tleV0sIHN0YWNrKTtcbiAgICAgICAgLy8gSlNPTi5zdHJpbmdpZnkgc2tpcHMga2V5cyB3aXRoIGB1bmRlZmluZWRgIG9yIGluY29tcGF0aWJsZSB2YWx1ZXNcbiAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlcyArPSBgJHtyZXMubGVuZ3RoID4gMSA/ICcsJyA6ICcnfSR7anNvbkR1bXAoa2V5KX06JHt2fWA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVzICs9ICd9JztcbiAgICB9XG4gICAgc3RhY2subGVuZ3RoIC09IDE7XG4gICAgYnJlYWs7XG4gIGRlZmF1bHQ6XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogMnggZmFzdGVyIHRoYW4gYFNldGAsIDV4IGZhc3RlciB0aGFuIGZsYXQgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gW2h1YnNdXG4gKi9cbmV4cG9ydCBjb25zdCBGYXN0TG9va3VwID0gKGh1YnMgPSBjcmVhdGVOdWxsT2JqKCkpID0+IHtcbiAgLyoqIEBuYW1lc3BhY2UgRmFzdExvb2t1cCAqL1xuICByZXR1cm4ge1xuICAgIGFkZCh2YWwpIHtcbiAgICAgIGdldEh1Yih2YWwsIHRydWUpW3ZhbF0gPSB0cnVlO1xuICAgIH0sXG4gICAgY2xvbmUoKSB7XG4gICAgICBjb25zdCBjbG9uZSA9IGNyZWF0ZU51bGxPYmooKTtcbiAgICAgIGZvciAoY29uc3QgZ3JvdXAgaW4gaHVicykgeyAvKiBwcm90byBpcyBudWxsICovLy8gZXNsaW50LWRpc2FibGUtbGluZSBndWFyZC1mb3ItaW5cbiAgICAgICAgY2xvbmVbZ3JvdXBdID0gYXNzaWduKGNyZWF0ZU51bGxPYmooKSwgaHVic1tncm91cF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEZhc3RMb29rdXAoY2xvbmUpO1xuICAgIH0sXG4gICAgZGVsZXRlKHZhbCkge1xuICAgICAgZGVsZXRlIGdldEh1Yih2YWwpPy5bdmFsXTtcbiAgICB9LFxuICAgIGhhczogdmFsID0+IGdldEh1Yih2YWwpPy5bdmFsXSxcbiAgICB0b0FycmF5OiAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBvYmplY3RWYWx1ZXMoaHVicyk7XG4gICAgICB2YWx1ZXM6OmZvckVhY2goKHZhbCwgaSkgPT4geyB2YWx1ZXNbaV0gPSBvYmplY3RLZXlzKHZhbCk7IH0pO1xuICAgICAgcmV0dXJuIHNhZmVDb25jYXQoW10sIHZhbHVlcyk7XG4gICAgfSxcbiAgfTtcbiAgZnVuY3Rpb24gZ2V0SHViKHZhbCwgYXV0b0NyZWF0ZSkge1xuICAgIGNvbnN0IGdyb3VwID0gdmFsLmxlbmd0aCA/IHZhbFswXSA6ICcnOyAvLyBsZW5ndGggaXMgdW5mb3JnZWFibGUsIGluZGV4IGdldHRlcnMgYXJlbid0XG4gICAgY29uc3QgaHViID0gaHVic1tncm91cF0gfHwgKFxuICAgICAgYXV0b0NyZWF0ZSA/IChodWJzW2dyb3VwXSA9IGNyZWF0ZU51bGxPYmooKSlcbiAgICAgICAgOiBudWxsXG4gICAgKTtcbiAgICByZXR1cm4gaHViO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZGluZyB0aGUgcG9seWZpbGxzIGluIENocm9tZSAoYWx3YXlzIGFzIGl0IGRvZXNuJ3QgcHJvdmlkZSB0aGVtKVxuICogYW5kIGluIEZpcmVmb3ggcGFnZSBtb2RlICh3aGlsZSBwcmVzZXJ2aW5nIHRoZSBuYXRpdmUgb25lcyBpbiBjb250ZW50IG1vZGUpXG4gKiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG1hbnkgW29sZF0gc2NyaXB0cyB0aGF0IHVzZSB0aGVzZSB1dGlscyBibGluZGx5XG4gKi9cbmV4cG9ydCBjb25zdCBtYWtlQ29tcG9uZW50VXRpbHMgPSAoKSA9PiB7XG4gIGNvbnN0IENMT05FX0lOVE8gPSAnY2xvbmVJbnRvJztcbiAgY29uc3QgQ1JFQVRFX09CSkVDVF9JTiA9ICdjcmVhdGVPYmplY3RJbic7XG4gIGNvbnN0IEVYUE9SVF9GVU5DVElPTiA9ICdleHBvcnRGdW5jdGlvbic7XG4gIGNvbnN0IHNyYyA9IElTX0ZJUkVGT1ggJiYgYnJpZGdlLm1vZGUgPT09IElOSkVDVF9DT05URU5UICYmIGdsb2JhbDtcbiAgY29uc3QgZGVmaW5lSW4gPSAhc3JjICYmICgodGFyZ2V0LCBhcywgdmFsKSA9PiB7XG4gICAgaWYgKGFzICYmIChhcyA9IGdldE93blByb3AoYXMsICdkZWZpbmVBcycpKSkge1xuICAgICAgc2V0T3duUHJvcCh0YXJnZXQsIGFzLCB2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBbQ0xPTkVfSU5UT106IHNyYyAmJiBzcmNbQ0xPTkVfSU5UT10gfHwgKFxuICAgICAgb2JqID0+IG9ialxuICAgICksXG4gICAgW0NSRUFURV9PQkpFQ1RfSU5dOiBzcmMgJiYgc3JjW0NSRUFURV9PQkpFQ1RfSU5dIHx8IChcbiAgICAgICh0YXJnZXQsIGFzKSA9PiBkZWZpbmVJbih0YXJnZXQsIGFzLCB7fSlcbiAgICApLFxuICAgIFtFWFBPUlRfRlVOQ1RJT05dOiBzcmMgJiYgc3JjW0VYUE9SVF9GVU5DVElPTl0gfHwgKFxuICAgICAgKGZ1bmMsIHRhcmdldCwgYXMpID0+IGRlZmluZUluKHRhcmdldCwgYXMsIGZ1bmMpXG4gICAgKSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9