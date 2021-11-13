if (window['Violentmonkey:vuaHiC62kVk='] !== 1) { /* eslint-disable no-unused-vars */

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
/* eslint-disable no-unused-vars */

/**
 * `safeCall` is used by our modified babel-plugin-safe-bind.js.
 * `export` is stripped in the final output and is only used for our NodeJS test scripts.
 */
const {
  Blob: BlobSafe,
  CustomEvent: CustomEventSafe,
  Error,
  // for #/common e.g. in sendMessage
  MouseEvent: MouseEventSafe,
  Object,
  // for minification and guarding webpack Object(import) calls
  Promise: PromiseSafe,
  TextDecoder: TextDecoderSafe,
  Uint8Array: Uint8ArraySafe,
  atob: atobSafe,
  addEventListener: on,
  dispatchEvent: fire,
  removeEventListener: off
} = global;
const ErrorSafe = Error;
const ResponseProto = Response[PROTO];
const {
  hasOwnProperty,
  toString: objectToString
} = {};
const {
  apply,
  call
} = hasOwnProperty;
const safeCall = call.bind(call);
const {
  forEach,
  includes,
  push
} = [];
const {
  createElementNS,
  getElementsByTagName
} = document;
const {
  then
} = PromiseSafe[PROTO];
const {
  charCodeAt,
  indexOf: stringIndexOf,
  slice
} = '';
const {
  append,
  appendChild,
  attachShadow,
  remove,
  setAttribute
} = Element[PROTO];
const {
  assign,
  defineProperty,
  getOwnPropertyDescriptor: describeProperty,
  keys: objectKeys
} = Object;
const {
  random: mathRandom
} = Math;
const regexpTest = RegExp[PROTO].test;
const {
  toStringTag: toStringTagSym
} = Symbol; // used by ProtectWebpackBootstrapPlugin

const {
  decode: tdDecode
} = TextDecoderSafe[PROTO];
const {
  stopImmediatePropagation
} = Event[PROTO];
const {
  get: getHref
} = describeProperty(HTMLAnchorElement[PROTO], 'href');
const getDetail = describeProperty(CustomEventSafe[PROTO], 'detail').get;
const getRelatedTarget = describeProperty(MouseEventSafe[PROTO], 'relatedTarget').get;
const getReadyState = describeProperty(Document[PROTO], 'readyState').get;

const isDocumentLoading = () => !safeCall(regexpTest, /^(inter|compl)/, safeCall(getReadyState, document));

const logging = assign(createNullObj(), console);
const {
  chrome
} = global;
const IS_FIREFOX = !chrome.app;
const VM_UUID = chrome.runtime.getURL('');/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/injected/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/browser.js":
/*!*******************************!*\
  !*** ./src/common/browser.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _global$browser;

// Since this also runs in a content script we'll guard against implicit global variables
// for DOM elements with 'id' attribute which is a standard feature, more info:
// https://github.com/mozilla/webextension-polyfill/pull/153
// https://html.spec.whatwg.org/multipage/window-object.html#named-access-on-the-window-object
if (!IS_FIREFOX && !((_global$browser = global.browser) == null ? void 0 : _global$browser.runtime)) {
  // region Chrome
  const {
    chrome,
    Proxy: ProxySafe
  } = global;
  const {
    apply,
    bind
  } = ProxySafe;
  const MESSAGE = 'message';
  const STACK = 'stack';

  const isSyncMethodName = key => key === 'addListener' || key === 'removeListener' || key === 'hasListener' || key === 'hasListeners';
  /** API types or enums or literal constants */


  const isFunction = val => typeof val === 'function';

  const isObject = val => typeof val === 'object';

  const proxifyValue = (target, key, src, metaVal) => {
    const srcVal = src[key];
    if (srcVal === undefined) return;
    let res;

    if (isFunction(metaVal)) {
      res = metaVal(src, srcVal);
    } else if (isFunction(srcVal)) {
      res = metaVal === 0 || isSyncMethodName(key) || !safeCall(hasOwnProperty, src, key) ? safeCall(bind, srcVal, src) : wrapAsync(src, srcVal); // eslint-disable-line no-use-before-define
    } else if (isObject(srcVal) && metaVal !== 0) {
      res = proxifyGroup(srcVal, metaVal); // eslint-disable-line no-use-before-define
    } else {
      res = srcVal;
    }

    target[key] = res;
    return res;
  };

  const proxifyGroup = (src, meta) => new ProxySafe({}, {
    get: (group, key) => {
      var _group$key;

      return (_group$key = group[key]) != null ? _group$key : proxifyValue(group, key, src, meta == null ? void 0 : meta[key]);
    }
  });
  /**
   * @param {Object} thisArg - original API group
   * @param {function} func - original API function
   * @param {WrapAsyncPreprocessorFunc} [preprocessorFunc] - modifies the API callback's response
    */


  const wrapAsync = (thisArg, func, preprocessorFunc) => (...args) => {
    let resolve;
    let reject;
    /* Using resolve/reject to call API in the scope of this function, not inside Promise,
       because an API validation exception is thrown synchronously both in Chrome and FF
       so the caller can use try/catch to detect it like we've been doing in icon.js */

    const promise = new PromiseSafe((_resolve, _reject) => {
      resolve = _resolve;
      reject = _reject;
    }); // Make the error messages actually useful by capturing a real stack

    const stackInfo = new ErrorSafe(`callstack before invoking ${func.name || 'chrome API'}:`); // A single parameter `result` is fine because we don't use API that return more

    args[args.length] = result => {
      const runtimeErr = chrome.runtime.lastError;
      const err = runtimeErr || (preprocessorFunc ? preprocessorFunc(resolve, result) : resolve(result)); // Prefer `reject` over `throw` which stops debugger in 'pause on exceptions' mode

      if (err) {
        if (!runtimeErr) stackInfo[STACK] = `${err[1]}\n${stackInfo[STACK]}`;
        stackInfo[MESSAGE] = runtimeErr ? err[MESSAGE] : `${err[0]}`;
        stackInfo.isRuntime = !!runtimeErr;
        reject(stackInfo);
      }
    };

    if (true) {
      try {
        safeCall(apply, func, thisArg, args);
      } catch (e) {
        if (e[MESSAGE] === 'Extension context invalidated.') {
          console.error('Please reload the tab to restore Violentmonkey API for userscripts.');
        } else {
          throw e;
        }
      }
    } else {}

    if (false) {}
    return promise;
  }; // Both result and error must be explicitly specified to avoid prototype eavesdropping


  const wrapSuccess = result => [result, null]; // Both result and error must be explicitly specified to avoid prototype eavesdropping


  const wrapError = err =>  false || [null, err instanceof ErrorSafe ? [err[MESSAGE], err[STACK]] : [err, '']];

  const sendResponseAsync = async (result, sendResponse) => {
    try {
      result = await result;
      if (false) {}
      sendResponse(wrapSuccess(result));
    } catch (err) {
      sendResponse(wrapError(err));
    }
  };

  const onMessageListener = (listener, message, sender, sendResponse) => {
    if (false) {}

    try {
      const result = listener(message, sender);

      if (result && safeCall(objectToString, result) === '[object Promise]') {
        sendResponseAsync(result, sendResponse);
        return true;
      } // In some browsers (e.g Chrome 56, Vivaldi), the listener in
      // popup pages are not properly cleared after closed.
      // They may send `undefined` before the real response is sent.


      if (result !== undefined) {
        sendResponse(wrapSuccess(result));
      }
    } catch (err) {
      sendResponse(wrapError(err));
    }
  };
  /** @type {WrapAsyncPreprocessorFunc} */


  const unwrapResponse = (resolve, response) => !response && 'null response' || response[1] // error created in wrapError
  || resolve(response[0]) // result created in wrapSuccess
  ;

  const wrapSendMessage = (runtime, sendMessage) => wrapAsync(runtime, sendMessage, unwrapResponse);
  /**
   * 0 = non-async method or the entire group
   * function = transformer like (originalObj, originalFunc): function
   */


  global.browser = proxifyGroup(chrome, {
    extension: 0,
    // we don't use its async methods
    i18n: 0,
    // we don't use its async methods
    runtime: {
      connect: 0,
      getManifest: 0,
      getURL: 0,
      onMessage: {
        addListener: (onMessage, addListener) => listener => safeCall(addListener, onMessage, safeCall(bind, onMessageListener, null, listener))
      },
      sendMessage: wrapSendMessage
    },
    tabs: {
      connect: 0,
      sendMessage: wrapSendMessage
    }
  }); // endregion
} else if (false) {}
/**
 * @callback WrapAsyncPreprocessorFunc
 * @param {function(any)} resolve - called on success
 * @param {any} response - API callback's response
 * @returns {?string[]} - [errorMessage, errorStack] array on error
 */

/***/ }),

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

/***/ "./src/injected/content/bridge.js":
/*!****************************************!*\
  !*** ./src/injected/content/bridge.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/injected/util/index.js");
/* harmony import */ var _util_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util-content */ "./src/injected/content/util-content.js");


const allowed = createNullObj();
const dataKeyNameMap = createNullObj();
const handlers = createNullObj();
const bgHandlers = createNullObj();
const onScripts = [];

const assignHandlers = (dest, src, force) => {
  if (force) {
    assign(dest, src);
  } else {
    onScripts.push(() => assign(dest, src));
  }
};

const allowCmd = (cmd, dataKey) => {
  ensureNestedProp(allowed, cmd, dataKey, true);
};

const XHR = ['HttpRequest', 'AbortRequest'];
const ADD_ELEMENT = ['AddElement'];
const UPDATE_VALUE = ['UpdateValue'];
const TAB_CLOSE = ['TabClose'];
const GET_RESOURCE = ['GetResource'];
const GM_CMD = {
  __proto__: null,
  addElement: ADD_ELEMENT,
  addStyle: ADD_ELEMENT,
  deleteValue: UPDATE_VALUE,
  download: XHR,
  getResourceText: GET_RESOURCE,
  getResourceURL: GET_RESOURCE,
  // also allows the misspelled GM.getResourceURL for compatibility
  notification: ['Notification', 'RemoveNotification'],
  openInTab: ['TabOpen', TAB_CLOSE],
  registerMenuCommand: ['RegisterMenu'],
  setClipboard: ['SetClipboard'],
  setValue: UPDATE_VALUE,
  unregisterMenuCommand: ['UnregisterMenu']
};
const GRANT_CMD = {
  __proto__: null,
  'GM.getResourceUrl': GET_RESOURCE,
  'GM.xmlHttpRequest': XHR,
  'GM_xmlhttpRequest': XHR,
  // eslint-disable-line quote-props
  [WINDOW_CLOSE]: TAB_CLOSE,
  [WINDOW_FOCUS]: ['TabFocus']
};
const bridge = {
  __proto__: null,
  ids: [],
  // all ids including the disabled ones for SetPopup
  runningIds: [],
  // userscripts running in the content script context are messaged via invokeGuest

  /** @type Number[] */
  invokableIds: [],
  failedIds: [],
  cache: createNullObj(),
  pathMaps: createNullObj(),
  onScripts,
  allowCmd,

  /**
   * Without `force` handlers will be added only when userscripts are about to be injected.
   * @param {Object.<string, MessageFromGuestHandler>} obj
   * @param {boolean} [force]
   */
  addHandlers(obj, force) {
    assignHandlers(handlers, obj, force);
  },

  /** { CommandName: true } will relay the request via sendCmd as is.
   * Without `force` handlers will be added only when userscripts are about to be injected. */
  addBackgroundHandlers(obj, force) {
    assignHandlers(bgHandlers, obj, force);
  },

  /**
   * @param {VMInjectedScript | VMScript} script
   */
  allowScript({
    dataKey,
    meta
  }) {
    allowCmd('Run', dataKey);
    dataKeyNameMap[dataKey] = meta.name;
    safeCall(forEach, meta.grant, grant => {
      const cmds = GRANT_CMD[grant] || safeCall(regexpTest, /^GM[._]/, grant) && GM_CMD[safeCall(slice, grant, 3)];
      if (cmds) safeCall(forEach, cmds, cmd => allowCmd(cmd, dataKey));
    });
  },

  // realm is provided when called directly via invokeHost
  async onHandle({
    cmd,
    data,
    dataKey,
    node
  }, realm) {
    var _allowed$cmd;

    const handle = handlers[cmd];

    if (!handle || !((_allowed$cmd = allowed[cmd]) == null ? void 0 : _allowed$cmd[dataKey])) {
      // TODO: maybe remove this check if our VAULT is reliable
      log('info', null, `Invalid command: "${cmd}" from "${dataKeyNameMap[dataKey] || '?'}"`);
    }

    const callbackId = data && getOwnProp(data, CALLBACK_ID);

    if (callbackId) {
      data = data.data;
    }

    let res = handle === true ? Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])(cmd, data) : safeCall(handle, node, data, realm || _util__WEBPACK_IMPORTED_MODULE_0__["INJECT_PAGE"]);

    if (isPromise(res)) {
      res = await res;
    }

    if (callbackId) {
      bridge.post('Callback', {
        id: callbackId,
        data: res
      }, realm);
    }
  }

};
/* harmony default export */ __webpack_exports__["default"] = (bridge);
_util__WEBPACK_IMPORTED_MODULE_0__["browser"].runtime.onMessage.addListener(({
  cmd,
  data
}, src) => {
  const fn = bgHandlers[cmd];
  if (fn) fn(data, src);
});
/**
 * @callback MessageFromGuestHandler
 * @param {Object} [data]
 * @param {INJECT_CONTENT | INJECT_PAGE} realm -
 *   INJECT_CONTENT when the message is from the content script context,
 *   INJECT_PAGE otherwise. Make sure to specify the same realm when messaging
 *   the results back otherwise it won't reach the target script.
 */

/***/ }),

/***/ "./src/injected/content/clipboard.js":
/*!*******************************************!*\
  !*** ./src/injected/content/clipboard.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/content/bridge.js");

_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].onScripts.push(() => {
  let setClipboard;

  if (IS_FIREFOX) {
    let clipboardData; // old Firefox defines it on a different prototype so we'll just grab it from document directly

    const {
      execCommand
    } = document;
    const {
      setData
    } = DataTransfer[PROTO];
    const {
      get: getClipboardData
    } = describeProperty(ClipboardEvent[PROTO], 'clipboardData');
    const {
      preventDefault,
      stopImmediatePropagation
    } = Event[PROTO];

    const onCopy = e => {
      safeCall(stopImmediatePropagation, e);
      safeCall(preventDefault, e);
      safeCall(setData, safeCall(getClipboardData, e), clipboardData.type || 'text/plain', clipboardData.data);
    };

    setClipboard = params => {
      clipboardData = params;
      safeCall(on, document, 'copy', onCopy);

      if (!safeCall(execCommand, document, 'copy') && false) {
        log('warn', null, 'GM_setClipboard failed!');
      }

      safeCall(off, document, 'copy', onCopy);
      clipboardData = null;
    };
  }

  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
    SetClipboard: setClipboard || true
  }, true);
});

/***/ }),

/***/ "./src/injected/content/gm-api-content.js":
/*!************************************************!*\
  !*** ./src/injected/content/gm-api-content.js ***!
  \************************************************/
/*! exports provided: sendSetPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSetPopup", function() { return sendSetPopup; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/content/bridge.js");
/* harmony import */ var _util_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util-content */ "./src/injected/content/util-content.js");


const menus = createNullObj();
let setPopupThrottle;
let isPopupShown;
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].onScripts.push(injection => {
  isPopupShown = injection.isPopupShown;
});
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addBackgroundHandlers({
  PopupShown(state) {
    isPopupShown = state;
    sendSetPopup();
  }

}, true);
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  /** @this {Node} */
  AddElement({
    tag,
    attrs,
    cbId
  }, realm) {
    let el;
    let res;

    try {
      const parent = this || safeCall(regexpTest, /^(script|style|link|meta)$/i, tag) && Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["elemByTag"])('head') || Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["elemByTag"])('body') || Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["elemByTag"])('*');
      el = Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["makeElem"])(tag, attrs);
      safeCall(appendChild, parent, el);
    } catch (e) {
      // A page-mode userscript can't catch DOM errors in a content script so we pass it explicitly
      // TODO: maybe move try/catch to bridge.onHandle and use bridge.sendSync in all web commands
      res = [`${e}`, e.stack];
    }

    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('Callback', {
      id: cbId,
      data: res
    }, realm, el);
  },

  GetResource({
    id,
    isBlob,
    key
  }) {
    var _bridge$pathMaps$id;

    const path = ((_bridge$pathMaps$id = _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].pathMaps[id]) == null ? void 0 : _bridge$pathMaps$id[key]) || key;
    const raw = _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].cache[path];
    return raw ? Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["decodeResource"])(raw, isBlob) : true;
  },

  RegisterMenu({
    id,
    cap
  }) {
    if (IS_TOP) {
      ensureNestedProp(menus, id, cap, 1);
      sendSetPopup(true);
    }
  },

  UnregisterMenu({
    id,
    cap
  }) {
    if (IS_TOP) {
      var _menus$id;

      (_menus$id = menus[id]) == null ? true : delete _menus$id[cap];
      sendSetPopup(true);
    }
  }

});
async function sendSetPopup(isDelayed) {
  if (isPopupShown) {
    if (isDelayed) {
      if (setPopupThrottle) return; // Preventing flicker in popup when scripts re-register menus

      setPopupThrottle = Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('SetTimeout', 0);
      await setPopupThrottle;
      setPopupThrottle = null;
    }

    Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('SetPopup', safeCall(pickIntoThis, {
      menus,
      __proto__: null
    }, _bridge__WEBPACK_IMPORTED_MODULE_0__["default"], ['ids', 'injectInto', 'runningIds', 'failedIds']));
  }
}

/***/ }),

/***/ "./src/injected/content/index.js":
/*!***************************************!*\
  !*** ./src/injected/content/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/content/bridge.js");
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clipboard */ "./src/injected/content/clipboard.js");
/* harmony import */ var _gm_api_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gm-api-content */ "./src/injected/content/gm-api-content.js");
/* harmony import */ var _inject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inject */ "./src/injected/content/inject.js");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications */ "./src/injected/content/notifications.js");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requests */ "./src/injected/content/requests.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs */ "./src/injected/content/tabs.js");
/* harmony import */ var _util_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util-content */ "./src/injected/content/util-content.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util */ "./src/injected/util/index.js");









const {
  invokableIds,
  runningIds
} = _bridge__WEBPACK_IMPORTED_MODULE_0__["default"];
const resolvedPromise = promiseResolve();
let badgePromise;
let numBadgesSent = 0;
let bfCacheWired; // Make sure to call obj::method() in code that may run after INJECT_CONTENT userscripts

async function init() {
  const contentId = getUniqIdSafe();
  const webId = getUniqIdSafe();
  const xhrData = getXhrInjection();
  const pageInfo = !(xhrData == null ? void 0 : xhrData.forceContent) && {
    /* In FF93 sender.url is wrong: https://bugzil.la/1734984,
     * in Chrome sender.url is ok, but location.href is wrong for text selection URLs #:~:text= */
    url: IS_FIREFOX && global.location.href,
    // XML document's appearance breaks when script elements are added
    forceContent: document instanceof XMLDocument || !Object(_inject__WEBPACK_IMPORTED_MODULE_3__["injectPageSandbox"])(contentId, webId)
  };
  const dataPromise = !xhrData && Object(_util_content__WEBPACK_IMPORTED_MODULE_7__["sendCmd"])('GetInjected', pageInfo, {
    retry: true
  }); // detecting if browser.contentScripts is usable, it was added in FF59 as well as composedPath

  const data = xhrData || (IS_FIREFOX && Event[PROTO].composedPath ? await getDataFF(dataPromise) : await dataPromise);
  const {
    allowCmd
  } = _bridge__WEBPACK_IMPORTED_MODULE_0__["default"];
  allowCmd('VaultId', contentId);
  safeCall(pickIntoThis, _bridge__WEBPACK_IMPORTED_MODULE_0__["default"], data, ['ids', 'injectInto']);

  if (data.expose) {
    allowCmd('GetScriptVer', contentId);
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
      GetScriptVer: true
    }, true);
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('Expose');
  }

  if (data.scripts) {
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].onScripts.forEach(fn => fn(data));
    allowCmd('SetTimeout', contentId);
    if (IS_FIREFOX) allowCmd('InjectList', contentId);
    await Object(_inject__WEBPACK_IMPORTED_MODULE_3__["injectScripts"])(contentId, webId, data);
  }

  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].onScripts = null;
  Object(_gm_api_content__WEBPACK_IMPORTED_MODULE_2__["sendSetPopup"])();
}

_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addBackgroundHandlers({
  Command(data) {
    const realm = safeCall(includes, invokableIds, data.id) && _util__WEBPACK_IMPORTED_MODULE_8__["INJECT_CONTENT"];
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('Command', data, realm);
  },

  UpdatedValues(data) {
    const dataPage = createNullObj();
    const dataContent = createNullObj();
    safeCall(forEach, objectKeys(data), id => {
      (safeCall(includes, invokableIds, +id) ? dataContent : dataPage)[id] = data[id];
    });
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(dataPage)) _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('UpdatedValues', dataPage);
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(dataContent)) _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('UpdatedValues', dataContent, _util__WEBPACK_IMPORTED_MODULE_8__["INJECT_CONTENT"]);
  }

});
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  Run(id, realm) {
    safeCall(push, runningIds, id);
    safeCall(push, _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].ids, id);

    if (realm === _util__WEBPACK_IMPORTED_MODULE_8__["INJECT_CONTENT"]) {
      safeCall(push, invokableIds, id);
    }

    if (!badgePromise) {
      badgePromise = safeCall(then, resolvedPromise, throttledSetBadge);
    }

    if (!bfCacheWired) {
      bfCacheWired = true;
      safeCall(on, window, 'pageshow', evt => {
        // isTrusted is `unforgeable` per DOM spec so we don't need to safeguard its getter
        if (evt.isTrusted && evt.persisted) {
          Object(_util_content__WEBPACK_IMPORTED_MODULE_7__["sendCmd"])('SetBadge', runningIds);
        }
      });
    }
  },

  SetTimeout: true,
  TabFocus: true,
  UpdateValue: true
});
init().catch(IS_FIREFOX && console.error); // Firefox can't show exceptions in content scripts

function throttledSetBadge() {
  const num = runningIds.length;

  if (numBadgesSent < num) {
    numBadgesSent = num;
    return safeCall(then, Object(_util_content__WEBPACK_IMPORTED_MODULE_7__["sendCmd"])('SetBadge', runningIds), () => {
      badgePromise = throttledSetBadge();
    });
  }
}

async function getDataFF(viaMessaging) {
  // In Firefox we set data on global `this` which is not equal to `window`
  const data = global.vmData || (await PromiseSafe.race([new PromiseSafe(resolve => {
    global.vmResolve = resolve;
  }), viaMessaging]));
  delete global.vmResolve;
  delete global.vmData;
  return data;
}

function getXhrInjection() {
  try {
    const quotedKey = `"${"Violentmonkey:vuaHiC62kVk="}"`; // Accessing document.cookie may throw due to CSP sandbox

    const cookieValue = document.cookie.split(`${quotedKey}=`)[1];
    const blobId = cookieValue && cookieValue.split(';', 1)[0];

    if (blobId) {
      document.cookie = `${quotedKey}=0; max-age=0; SameSite=Lax`; // this removes our cookie

      const xhr = new XMLHttpRequest();
      const url = `blob:${VM_UUID}${blobId}`;
      xhr.open('get', url, false); // `false` = synchronous

      xhr.send();
      URL.revokeObjectURL(url);
      return JSON.parse(xhr.response);
    }
  } catch (_unused) {
    /* NOP */
  }
}

/***/ }),

/***/ "./src/injected/content/inject.js":
/*!****************************************!*\
  !*** ./src/injected/content/inject.js ***!
  \****************************************/
/*! exports provided: injectPageSandbox, injectScripts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectPageSandbox", function() { return injectPageSandbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectScripts", function() { return injectScripts; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/content/bridge.js");
/* harmony import */ var _util_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util-content */ "./src/injected/content/util-content.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/injected/util/index.js");



/* In FF, content scripts running in a same-origin frame cannot directly call parent's functions
 * so we'll use the extension's UUID, which is unique per computer in FF, for messages
 * like VAULT_WRITER to avoid interception by sites that can add listeners for all of our
 * INIT_FUNC_NAME ids even though we change it now with each release. */

const INIT_FUNC_NAME = "Violentmonkey:vuaHiC62kVk=";
const VAULT_WRITER = `${IS_FIREFOX ? VM_UUID : INIT_FUNC_NAME}VW`;
const VAULT_WRITER_ACK = `${VAULT_WRITER}+`;
let contLists;
let pgLists;
/** @type {Object<string,VMInjectionRealm>} */

let realms;
/** @type boolean */

let pageInjectable;
let frameEventWnd;
/** @type ShadowRoot */

let injectedRoot; // https://bugzil.la/1408996

let VMInitInjection = window[INIT_FUNC_NAME];
/** Avoid running repeatedly due to new `documentElement` or with declarativeContent in Chrome.
 * The prop's mode is overridden to be unforgeable by a userscript in content mode. */

defineProperty(window, INIT_FUNC_NAME, {
  __proto__: null,
  value: 1,
  configurable: false,
  enumerable: false,
  writable: false
});

if (IS_FIREFOX) {
  safeCall(on, window, VAULT_WRITER, evt => {
    safeCall(stopImmediatePropagation, evt);

    if (!frameEventWnd) {
      // setupVaultId's first event is the frame's contentWindow
      frameEventWnd = safeCall(getRelatedTarget, evt);
    } else {
      // setupVaultId's second event is the vaultId
      tellBridgeToWriteVault(safeCall(getDetail, evt), frameEventWnd);
      safeCall(fire, frameEventWnd, new CustomEventSafe(VAULT_WRITER_ACK));
      frameEventWnd = null;
    }
  }, true);
} else {
  safeDefineProperty(global, VAULT_WRITER, {
    value: tellBridgeToWriteVault
  });
}

_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  /**
   * FF bug workaround to enable processing of sourceURL in injected page scripts
   */
  InjectList: IS_FIREFOX && injectList
});
function injectPageSandbox(contentId, webId) {
  const {
    cloneInto
  } = global;
  const vaultId = getUniqIdSafe();
  const handshakeId = getUniqIdSafe();

  if (useOpener(window.opener) || useOpener(!IS_TOP && window.parent)) {
    startHandshake();
  } else {
    /* Sites can do window.open(sameOriginUrl,'iframeNameOrNewWindowName').opener=null, spoof JS
     * environment and easily hack into our communication channel before our content scripts run.
     * Content scripts will see `document.opener = null`, not the original opener, so we have
     * to use an iframe to extract the safe globals. Detection via document.referrer won't work
     * is it can be emptied by the opener page, too. */
    inject({
      code: `parent["${vaultId}"] = [this]`
    }, () => {
      // Skipping page injection in FF if our script element was blocked by site's CSP
      if (!IS_FIREFOX || window.wrappedJSObject[vaultId]) {
        startHandshake();
      }
    });
  }

  return pageInjectable;

  function useOpener(opener) {
    let ok;

    if (opener && describeProperty(opener.location, 'href').get) {
      // TODO: Use a single PointerEvent with `pointerType: vaultId` when strict_min_version >= 59
      if (IS_FIREFOX) {
        const setOk = () => {
          ok = true;
        };

        safeCall(on, window, VAULT_WRITER_ACK, setOk, true);
        safeCall(fire, opener, new MouseEventSafe(VAULT_WRITER, {
          relatedTarget: window
        }));
        safeCall(fire, opener, new CustomEventSafe(VAULT_WRITER, {
          detail: vaultId
        }));
        safeCall(off, window, VAULT_WRITER_ACK, setOk, true);
      } else {
        ok = opener[VAULT_WRITER];
        if (ok) ok(vaultId, window);
      }
    }

    return ok;
  }
  /** A page can read our script's textContent in a same-origin iframe via DOMNodeRemoved event.
   * Directly preventing it would require redefining ~20 DOM methods in the parent.
   * Instead, we'll send the ids via a temporary handshakeId event, to which the web-bridge
   * will listen only during its initial phase using vault-protected DOM methods.
   * TODO: simplify this when strict_min_version >= 63 (attachShadow in FF) */


  function startHandshake() {
    /* With `once` the listener is removed before DOMNodeInserted is dispatched by appendChild,
     * otherwise a same-origin parent page could use it to spoof the handshake. */
    safeCall(on, window, handshakeId, handshaker, {
      capture: true,
      once: true
    });
    inject({
      code: `(${VMInitInjection}(${IS_FIREFOX},'${handshakeId}','${vaultId}'))()` + `\n//# sourceURL=${VM_UUID}sandbox/injected-web.js`
    }); // Clean up in case CSP prevented the script from running

    safeCall(off, window, handshakeId, handshaker, true);
  }

  function handshaker(evt) {
    pageInjectable = true;
    safeCall(stopImmediatePropagation, evt);
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["bindEvents"])(contentId, webId, _bridge__WEBPACK_IMPORTED_MODULE_0__["default"], cloneInto);
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["fireBridgeEvent"])(handshakeId + 1, [webId, contentId], cloneInto);
  }
}
/**
 * @param {string} contentId
 * @param {string} webId
 * @param {VMGetInjectedData} data
 */

async function injectScripts(contentId, webId, data) {
  const {
    hasMore,
    info
  } = data;
  realms = {
    __proto__: null,

    /** @namespace VMInjectionRealm */
    [_util__WEBPACK_IMPORTED_MODULE_2__["INJECT_CONTENT"]]: {
      injectable: true,

      /** @namespace VMRunAtLists */
      lists: contLists = {
        start: [],
        body: [],
        end: [],
        idle: []
      },
      is: 0,
      info
    },
    [_util__WEBPACK_IMPORTED_MODULE_2__["INJECT_PAGE"]]: {
      injectable: pageInjectable,
      lists: pgLists = {
        start: [],
        body: [],
        end: [],
        idle: []
      },
      is: 0,
      info
    }
  };
  assign(_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].cache, data.cache);
  const feedback = data.scripts.map(script => {
    const {
      id
    } = script.props; // eslint-disable-next-line no-restricted-syntax

    const realm = _util__WEBPACK_IMPORTED_MODULE_2__["INJECT_MAPPING"][script.injectInto].find(key => {
      var _realms$key;

      return (_realms$key = realms[key]) == null ? void 0 : _realms$key.injectable;
    }); // If the script wants this specific realm, which is unavailable, we won't inject it at all

    if (realm) {
      const {
        pathMap
      } = script.custom;
      const realmData = realms[realm];
      realmData.lists[script.runAt].push(script); // 'start' or 'body' per getScriptsByURL()

      realmData.is = true;
      if (pathMap) _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].pathMaps[id] = pathMap;
      _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].allowScript(script);
    } else {
      _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].failedIds.push(id);
    }

    return [script.dataKey, realm === _util__WEBPACK_IMPORTED_MODULE_2__["INJECT_CONTENT"]];
  });
  const moreData = Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('InjectionFeedback', {
    feedback,
    feedId: data.feedId,
    forceContent: !pageInjectable
  }); // saving while safe

  const hasInvoker = realms[_util__WEBPACK_IMPORTED_MODULE_2__["INJECT_CONTENT"]].is;

  if (hasInvoker) {
    setupContentInvoker(contentId, webId);
  } // Using a callback to avoid a microtask tick when the root element exists or appears.


  await Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["onElement"])('*', async () => {
    injectAll('start');
    const onBody = (pgLists.body.length || contLists.body.length) && Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["onElement"])('body', injectAll, 'body'); // document-end, -idle

    if (hasMore) {
      data = await moreData;
      if (data) await injectDelayedScripts(!hasInvoker && contentId, webId, data);
    }

    if (onBody) {
      await onBody;
    }

    realms = null;
    pgLists = null;
    contLists = null;
  });
  VMInitInjection = null; // release for GC
}

async function injectDelayedScripts(contentId, webId, {
  cache,
  scripts
}) {
  assign(_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].cache, cache);
  let needsInvoker;
  safeCall(forEach, scripts, script => {
    const {
      code,
      runAt
    } = script;
    const {
      id
    } = script.props;

    if (!code) {
      needsInvoker = true;
      safeCall(push, contLists[runAt], script);
    } else if (pageInjectable) {
      safeCall(push, pgLists[runAt], script);
    } else {
      safeCall(push, _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].failedIds, id);
      safeCall(push, _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].ids, id);
    }
  });

  if (safeCall(getReadyState, document) === 'loading') {
    await new PromiseSafe(resolve => {
      /* Since most sites listen to DOMContentLoaded on `document`, we let them run first
       * by listening on `window` which follows `document` when the event bubbles up. */
      safeCall(on, window, 'DOMContentLoaded', resolve, {
        once: true
      });
    });
    await 0; // let the site's listeners on `window` run first
  }

  if (needsInvoker && contentId) {
    setupContentInvoker(contentId, webId);
  }

  safeCall(forEach, scripts, _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].allowScript);
  injectAll('end');
  injectAll('idle');
}

function inject(item, iframeCb) {
  const script = Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["makeElem"])('script', item.code); // Firefox ignores sourceURL comment when a syntax error occurs so we'll print the name manually

  const onError = IS_FIREFOX && !iframeCb && (e => {
    const {
      stack
    } = e.error;

    if (!stack || `${stack}`.includes(VM_UUID)) {
      log('error', [item.displayName], e.error);
      e.preventDefault();
    }
  });

  const div = Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["makeElem"])('div'); // Hiding the script's code from mutation events like DOMNodeInserted or DOMNodeRemoved

  const divRoot = injectedRoot || (attachShadow ? safeCall(attachShadow, div, {
    mode: 'closed'
  }) : div);
  let iframe;

  if (iframeCb) {
    /* Preventing other content scripts */
    // eslint-disable-next-line no-script-url
    iframe = Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["makeElem"])('iframe', {
      src: 'javascript:void 0'
    });
    /* In FF the opener receives DOMNodeInserted attached at creation so it can see window[0] */

    if (!IS_FIREFOX) {
      safeCall(appendChild, divRoot, iframe);
    }
  } else {
    safeCall(appendChild, divRoot, script);
  }

  if (onError) {
    safeCall(on, window, 'error', onError);
  }

  if (!injectedRoot) {
    // When using declarativeContent there's no documentElement so we'll append to `document`
    safeCall(appendChild, Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["elemByTag"])('*') || document, div);
  }

  if (onError) {
    safeCall(off, window, 'error', onError);
  }

  if (iframeCb) {
    injectedRoot = divRoot;
    if (IS_FIREFOX) safeCall(appendChild, divRoot, iframe);
    safeCall(appendChild, safeCall(getElementsByTagName, iframe.contentDocument, '*')[0], script);
    iframeCb();
    safeCall(remove, iframe);
    injectedRoot = null;
  } // Clean up in case something didn't load


  safeCall(remove, script);
  safeCall(remove, div);
}

function injectAll(runAt) {
  for (const realm in realms) {
    /* proto is null */
    // eslint-disable-line guard-for-in
    const realmData = realms[realm];
    const items = realmData.lists[runAt];
    const {
      info
    } = realmData;

    if (items.length) {
      _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('ScriptData', {
        info,
        items,
        runAt
      }, realm);

      if (realm === _util__WEBPACK_IMPORTED_MODULE_2__["INJECT_PAGE"] && !IS_FIREFOX) {
        injectList(runAt);
      }
    }
  }

  if (runAt !== 'start' && contLists[runAt].length) {
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('RunAt', runAt, _util__WEBPACK_IMPORTED_MODULE_2__["INJECT_CONTENT"]);
  }
}

async function injectList(runAt) {
  const list = pgLists[runAt]; // Not using for-of because we don't know if @@iterator is safe.

  for (let i = 0, item; item = list[i]; i += 1) {
    if (item.code) {
      if (runAt === 'idle') await Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('SetTimeout', 0);
      if (runAt === 'end') await 0;
      inject(item);
      item.code = '';
    }
  }
}

function setupContentInvoker(contentId, webId) {
  const invokeContent = VMInitInjection(IS_FIREFOX)(webId, contentId, _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].onHandle);
  const postViaBridge = _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post;

  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post = (cmd, params, realm, node) => {
    const fn = realm === _util__WEBPACK_IMPORTED_MODULE_2__["INJECT_CONTENT"] ? invokeContent : postViaBridge;
    fn(cmd, params, undefined, node);
  };
}

function tellBridgeToWriteVault(vaultId, wnd) {
  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('WriteVault', vaultId, _util__WEBPACK_IMPORTED_MODULE_2__["INJECT_PAGE"], wnd);
}

/***/ }),

/***/ "./src/injected/content/notifications.js":
/*!***********************************************!*\
  !*** ./src/injected/content/notifications.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/content/bridge.js");
/* harmony import */ var _util_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util-content */ "./src/injected/content/util-content.js");


const notifications = createNullObj();
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  async Notification(options, realm) {
    const nid = await Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('Notification', options);
    notifications[nid] = {
      id: options.id,
      realm
    };
  },

  RemoveNotification(id) {
    for (const nid in notifications) {
      if (notifications[nid].id === id) {
        delete notifications[nid];
        return Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('RemoveNotification', nid);
      }
    }
  }

});
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addBackgroundHandlers({
  NotificationClick(nid) {
    const n = notifications[nid];
    if (n) _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('NotificationClicked', n.id, n.realm);
  },

  NotificationClose(nid) {
    const n = notifications[nid];

    if (n) {
      _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('NotificationClosed', n.id, n.realm);
      delete notifications[nid];
    }
  }

});

/***/ }),

/***/ "./src/injected/content/requests.js":
/*!******************************************!*\
  !*** ./src/injected/content/requests.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/content/bridge.js");
/* harmony import */ var _util_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util-content */ "./src/injected/content/util-content.js");


const {
  fetch: fetchSafe
} = global;
const {
  arrayBuffer: getArrayBuffer,
  blob: getBlob
} = ResponseProto;
const {
  createObjectURL,
  revokeObjectURL
} = URL;
const requests = createNullObj();
let downloadChain = promiseResolve();
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  HttpRequest(msg, realm) {
    requests[msg.id] = safeCall(pickIntoThis, {
      __proto__: null,
      realm,
      wantsBlob: msg.xhrType === 'blob'
    }, msg, ['eventsToNotify', 'fileName']);
    msg.url = Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["getFullUrl"])(msg.url);
    Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('HttpRequest', msg);
  },

  AbortRequest: true
});
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addBackgroundHandlers({
  async HttpRequested(msg) {
    const {
      id,
      chunk
    } = msg;
    const req = requests[id];
    if (!req) return;

    if (chunk) {
      receiveChunk(req, chunk);
      return;
    }

    if ((msg.numChunks || 1) === 1) {
      req.gotChunks = true;
    }

    const {
      blobbed,
      data,
      chunked,
      type,
      downloadId
    } = msg;

    if (downloadId) {
      // browser will download
      _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('HttpRequested', msg, req.realm);
      if (msg.type === 'load') delete requests[id];
      return;
    }

    const isLoadEnd = type === 'loadend'; // only CONTENT realm can read blobs from an extension:// URL

    const response = data && safeCall(includes, req.eventsToNotify, type) && data.response; // messages will come while blob is fetched so we'll temporarily store the Promise

    const importing = response && (blobbed || chunked);

    if (importing) {
      req.bin = blobbed ? importBlob(req, response) : receiveAllChunks(req, msg);
    } // ...which can be awaited in these subsequent messages


    if (isPromise(req.bin)) {
      req.bin = await req.bin;
    } // If the user in incognito supplied only `onloadend` then it arrives first, followed by chunks
    // If the user supplied any event before `loadend`, all chunks finish before `loadend` arrives


    if (isLoadEnd) {
      // loadend's bridge.post() should run last
      await 0;
      req.gotLoadEnd = true;
    }

    if (importing) {
      data.response = req.bin;
    }

    const fileName = type === 'load' && req.bin && req.fileName;

    if (fileName) {
      req.fileName = '';
      await downloadBlob(req.bin, fileName);
    }

    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('HttpRequested', msg, req.realm);

    if (req.gotLoadEnd && req.gotChunks) {
      delete requests[id];
    }
  }

});

async function importBlob(req, url) {
  const data = await safeCall(req.wantsBlob ? getBlob : getArrayBuffer, (await fetchSafe(url)));
  Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('RevokeBlob', url);
  return data;
}

function downloadBlob(blob, fileName) {
  const url = createObjectURL(blob);
  const a = Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["makeElem"])('a', {
    href: url,
    download: fileName
  });
  const res = safeCall(then, downloadChain, () => {
    safeCall(fire, a, new MouseEventSafe('click'));
    revokeBlobAfterTimeout(url);
  }); // Frequent downloads are ignored in Chrome and possibly other browsers

  downloadChain = safeCall(then, res, Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('SetTimeout', 150));
  return res;
}

async function revokeBlobAfterTimeout(url) {
  await Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('SetTimeout', 3000);
  revokeObjectURL(url);
}
/** ArrayBuffer/Blob in Chrome incognito is transferred in string chunks */


function receiveAllChunks(req, msg) {
  safeCall(pickIntoThis, req, msg, ['dataSize', 'contentType']);
  req.arr = new Uint8ArraySafe(req.dataSize);
  processChunk(req, msg.data.response, 0);
  return !req.gotChunks ? new PromiseSafe(resolve => {
    req.resolve = resolve;
  }) : finishChunks(req);
}

function receiveChunk(req, {
  data,
  pos,
  last
}) {
  processChunk(req, data, pos);

  if (last) {
    req.gotChunks = true;
    req.resolve(finishChunks(req));
    delete req.resolve;
  }
}

function processChunk(req, data, pos) {
  const {
    arr
  } = req;
  data = atobSafe(data);

  for (let len = data.length, i = 0; i < len; i += 1, pos += 1) {
    arr[pos] = safeCall(charCodeAt, data, i);
  }
}

function finishChunks(req) {
  const {
    arr
  } = req;
  delete req.arr;
  return req.wantsBlob ? new BlobSafe([arr], {
    type: req.contentType
  }) : arr.buffer;
}

/***/ }),

/***/ "./src/injected/content/tabs.js":
/*!**************************************!*\
  !*** ./src/injected/content/tabs.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/content/bridge.js");
/* harmony import */ var _util_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util-content */ "./src/injected/content/util-content.js");


const tabIds = createNullObj();
const tabKeys = createNullObj();
const realms = createNullObj();
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  async TabOpen({
    key,
    data
  }, realm) {
    const {
      id
    } = await Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('TabOpen', data);
    tabIds[key] = id;
    tabKeys[id] = key;
    realms[id] = realm;
  },

  TabClose(key) {
    const id = tabIds[key]; // !key => close current tab
    // id => close tab by id

    if (!key || id) Object(_util_content__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('TabClose', {
      id
    });
  }

});
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addBackgroundHandlers({
  TabClosed(id) {
    const key = tabKeys[id];
    const realm = realms[id];
    delete realms[id];
    delete tabKeys[id];
    delete tabIds[key];
    if (key) _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('TabClosed', key, realm);
  }

});

/***/ }),

/***/ "./src/injected/content/util-content.js":
/*!**********************************************!*\
  !*** ./src/injected/content/util-content.js ***!
  \**********************************************/
/*! exports provided: sendCmd, elemByTag, onElement, makeElem, getFullUrl, decodeResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemByTag", function() { return elemByTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onElement", function() { return onElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeElem", function() { return makeElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullUrl", function() { return getFullUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeResource", function() { return decodeResource; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendCmd", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["sendCmd"]; });

// eslint-disable-next-line no-restricted-imports

/** When looking for documentElement, use '*' to also support XML pages
 * Note that we avoid spoofed prototype getters by using hasOwnProperty, and not using `length`
 * as it searches for ALL matching nodes when this tag wasn't cached internally. */

const elemByTag = (tag, i) => getOwnProp(safeCall(getElementsByTagName, document, tag), i || 0);
/**
 * @param {string} tag
 * @param {function} cb - callback runs immediately, unlike a chained then()
 * @param {?} [arg]
 * @returns {Promise<void>}
 */

const onElement = (tag, cb, arg) => new PromiseSafe(resolve => {
  if (elemByTag(tag)) {
    resolve(cb(arg));
  } else {
    const observer = new MutationObserver(() => {
      if (elemByTag(tag)) {
        observer.disconnect();
        resolve(cb(arg));
      }
    }); // documentElement may be replaced so we'll observe the entire document

    observer.observe(document, {
      childList: true,
      subtree: true
    });
  }
});
const makeElem = (tag, attrs) => {
  const el = safeCall(createElementNS, document, NS_HTML, tag);

  if (attrs && isString(attrs)) {
    safeCall(append, el, attrs);
  } else if (attrs) {
    safeCall(forEach, objectKeys(attrs), key => {
      if (key === 'textContent') safeCall(append, el, attrs[key]);else safeCall(setAttribute, el, key, attrs[key]);
    });
  }

  return el;
};
const getFullUrl = url => safeCall(getHref, makeElem('a', {
  href: url
}));
const decodeResource = (raw, isBlob) => {
  let res;
  const pos = safeCall(stringIndexOf, raw, ',');
  const bin = atobSafe(pos < 0 ? raw : safeCall(slice, raw, pos + 1));

  if (isBlob || safeCall(regexpTest, /[\x80-\xFF]/, bin)) {
    const len = bin.length;
    const bytes = new Uint8ArraySafe(len);

    for (let i = 0; i < len; i += 1) {
      bytes[i] = safeCall(charCodeAt, bin, i);
    }

    res = isBlob ? new BlobSafe([bytes], {
      type: pos < 0 ? '' : safeCall(slice, raw, 0, pos)
    }) : safeCall(tdDecode, new TextDecoderSafe(), bytes);
  } else {
    // pure ASCII
    res = bin;
  }

  return res;
};

/***/ }),

/***/ "./src/injected/index.js":
/*!*******************************!*\
  !*** ./src/injected/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/browser */ "./src/common/browser.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/injected/content/index.js");
 // eslint-disable-line no-restricted-imports

 // eslint-disable-line no-restricted-imports

 // Script installation in Firefox as it does not support `onBeforeRequest` for `file:`

const url = IS_FIREFOX && IS_TOP && global.location.href;

if (url && safeCall(regexpTest, /^file:/, url) // Ensure not a local file
&& safeCall(regexpTest, /\.user\.js$/, url)) {
  // Url ends with user.js should be a script
  (async () => {
    const {
      browser,
      fetch,
      history,
      document: {
        referrer
      }
    } = global;
    const {
      text: getText
    } = ResponseProto;
    const fetchOpts = {
      mode: 'same-origin'
    };
    const response = await fetch(url, fetchOpts);

    if (!safeCall(regexpTest, /javascript|^text\/plain|^$/, response.headers.get('content-type') || '')) {
      return;
    }

    let oldCode;
    let code = await safeCall(getText, response);

    if (!safeCall(regexpTest, /==userscript==/i, code)) {
      return;
    }

    await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('ConfirmInstall', {
      code,
      url,
      from: referrer
    }); // FF68+ doesn't allow extension pages to get file: URLs anymore so we need to track it here
    // (detecting FF68 by a feature because we can't use getBrowserInfo here and UA may be altered)

    if (browser.storage.managed) {
      /** @param {chrome.runtime.Port} */
      browser.runtime.onConnect.addListener(port => {
        if (port.name !== 'FetchSelf') return;
        port.onMessage.addListener(async () => {
          code = await safeCall(getText, (await fetch(url, fetchOpts)));

          if (code === oldCode) {
            code = null;
          } else {
            oldCode = code;
          }

          port.postMessage(code);
        });
        port.onDisconnect.addListener(async () => {
          oldCode = null; // The user may have reloaded the Confirm page so let's check

          if (!(await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('CheckInstallerTab', port.sender.tab.id))) {
            closeSelf();
          }
        });
      });
    } else {
      closeSelf();
    }

    function closeSelf() {
      if (history.length > 1) {
        history.go(-1);
      } else {
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('TabClose');
      }
    }
  })().catch(console.error); // FF doesn't show exceptions in content scripts
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

/***/ })

/******/ });}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC9jb250ZW50L2JyaWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5qZWN0ZWQvY29udGVudC9jbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvZ20tYXBpLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvaW5qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC9jb250ZW50L25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5qZWN0ZWQvY29udGVudC91dGlsLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC91dGlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIklTX0ZJUkVGT1giLCJnbG9iYWwiLCJicm93c2VyIiwicnVudGltZSIsImNocm9tZSIsIlByb3h5IiwiUHJveHlTYWZlIiwiYXBwbHkiLCJiaW5kIiwiTUVTU0FHRSIsIlNUQUNLIiwiaXNTeW5jTWV0aG9kTmFtZSIsImtleSIsImlzRnVuY3Rpb24iLCJ2YWwiLCJpc09iamVjdCIsInByb3hpZnlWYWx1ZSIsInRhcmdldCIsInNyYyIsIm1ldGFWYWwiLCJzcmNWYWwiLCJ1bmRlZmluZWQiLCJyZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIndyYXBBc3luYyIsInByb3hpZnlHcm91cCIsIm1ldGEiLCJnZXQiLCJncm91cCIsInRoaXNBcmciLCJmdW5jIiwicHJlcHJvY2Vzc29yRnVuYyIsImFyZ3MiLCJyZXNvbHZlIiwicmVqZWN0IiwicHJvbWlzZSIsIlByb21pc2VTYWZlIiwiX3Jlc29sdmUiLCJfcmVqZWN0Iiwic3RhY2tJbmZvIiwiRXJyb3JTYWZlIiwibmFtZSIsImxlbmd0aCIsInJlc3VsdCIsInJ1bnRpbWVFcnIiLCJsYXN0RXJyb3IiLCJlcnIiLCJpc1J1bnRpbWUiLCJwcm9jZXNzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIndyYXBTdWNjZXNzIiwid3JhcEVycm9yIiwic2VuZFJlc3BvbnNlQXN5bmMiLCJzZW5kUmVzcG9uc2UiLCJvbk1lc3NhZ2VMaXN0ZW5lciIsImxpc3RlbmVyIiwibWVzc2FnZSIsInNlbmRlciIsIm9iamVjdFRvU3RyaW5nIiwidW53cmFwUmVzcG9uc2UiLCJyZXNwb25zZSIsIndyYXBTZW5kTWVzc2FnZSIsInNlbmRNZXNzYWdlIiwiZXh0ZW5zaW9uIiwiaTE4biIsImNvbm5lY3QiLCJnZXRNYW5pZmVzdCIsImdldFVSTCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwidGFicyIsIktFWV9HTE9CQUxfSUQiLCJCVUlMRF9JTl9TQ1JJUFRfU1JDIiwiSU5KRUNUX0FVVE8iLCJJTkpFQ1RfUEFHRSIsIklOSkVDVF9DT05URU5UIiwiSVNfREVWIiwiSU5KRUNUX01BUFBJTkciLCJfX3Byb3RvX18iLCJDTURfU0NSSVBUX0FERCIsIkNNRF9TQ1JJUFRfVVBEQVRFIiwiTUVUQUJMT0NLX1JFIiwiSU5KRUNUQUJMRV9UQUJfVVJMX1JFIiwiVElNRU9VVF9NQVgiLCJUSU1FT1VUX0hPVVIiLCJUSU1FT1VUXzI0SE9VUlMiLCJUSU1FT1VUX1dFRUsiLCJkZWZhdWx0SW1hZ2UiLCJpbml0SG9va3MiLCJob29rcyIsImZpcmUiLCJkYXRhIiwic2xpY2UiLCJmb3JFYWNoIiwiY2IiLCJob29rIiwiY2FsbGJhY2siLCJwdXNoIiwiaSIsImluZGV4T2YiLCJzcGxpY2UiLCJzZW5kQ21kIiwiY21kIiwib3B0aW9ucyIsIkNPTU1BTkRTX1dJVEhfU1JDIiwiZ2V0QmdQYWdlIiwiZ2V0QmFja2dyb3VuZFBhZ2UiLCJzZW5kQ21kRGlyZWN0bHkiLCJiZyIsImluY2x1ZGVzIiwid2luZG93IiwiZGVlcENvcHkiLCJoYW5kbGVDb21tYW5kTWVzc2FnZSIsInRoZW4iLCJzZW5kVGFiQ21kIiwidGFiSWQiLCJjYXRjaCIsIm5vb3AiLCJwYXlsb2FkIiwicmV0cnkiLCJzZW5kTWVzc2FnZVJldHJ5IiwicmV0cmllcyIsInBhdXNlRHVyYXRpb24iLCJtYWtlUGF1c2UiLCJFcnJvciIsImxlZnRwYWQiLCJpbnB1dCIsInBhZCIsIm51bSIsInRvU3RyaW5nIiwiZ2V0TG9jYWxlU3RyaW5nIiwibG9jYWxlTWV0YSIsIm5hdmlnYXRvciIsImxhbmd1YWdlcyIsIm1hcCIsImxhbmciLCJ0b0xvd2VyQ2FzZSIsImZpbmQiLCJCb29sZWFuIiwiZ2V0U2NyaXB0TmFtZSIsInNjcmlwdCIsImN1c3RvbSIsInByb3BzIiwiaWQiLCJnZXRGdWxsVXJsIiwidXJsIiwiYmFzZSIsIm9iaiIsIlVSTCIsInByb3RvY29sIiwiaHJlZiIsImVuY29kZUZpbGVuYW1lIiwicmVwbGFjZSIsIm0iLCJjb2RlIiwiY2hhckNvZGVBdCIsImRlY29kZUZpbGVuYW1lIiwiZmlsZW5hbWUiLCJfbSIsImciLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsImdldEFjdGl2ZVRhYiIsInF1ZXJ5IiwiYWN0aXZlIiwiY3VycmVudFdpbmRvdyIsIndpbmRvd0lkIiwid2luZG93cyIsImdldEN1cnJlbnQiLCJtcyIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwidHJ1ZUpvaW4iLCJzZXBhcmF0b3IiLCJmaWx0ZXIiLCJqb2luIiwibm9ybWFsaXplS2V5cyIsIkFycmF5IiwiaXNBcnJheSIsInNwbGl0Iiwib2JqZWN0R2V0IiwicmF3S2V5IiwiZGVmIiwia2V5cyIsImV2ZXJ5Iiwib2JqZWN0U2V0Iiwicm9vdCIsInN1YiIsImxhc3RLZXkiLCJwb3AiLCJvYmplY3RQaWNrIiwidHJhbnNmb3JtIiwicmVkdWNlIiwidmFsdWUiLCJtYXBFbnRyeSIsIk9iamVjdCIsImVudHJpZXMiLCJlbnRyeSIsImFsbEVudHJpZXMiLCJmb3JFYWNoRW50cnkiLCJmb3JFYWNoS2V5IiwiZm9yRWFjaFZhbHVlIiwidmFsdWVzIiwiZGVlcEVxdWFsIiwiYSIsImIiLCJpdGVtIiwia2V5c0EiLCJrZXlzQiIsImdldE1lc3NhZ2UiLCJwYXJhbSIsIm1lbW9pemUiLCJyZXNvbHZlciIsImNhY2hlTWFwIiwibWVtb2l6ZWQiLCJjYWNoZSIsImRlYm91bmNlIiwidGltZSIsInN0YXJ0VGltZSIsInRpbWVyIiwiTWF0aCIsIm1heCIsImNoZWNrVGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiY2hlY2tUaW1lciIsImRlbHRhIiwiZGVib3VuY2VkRnVuY3Rpb24iLCJ0aHJvdHRsZSIsImxhc3RUaW1lIiwidGhyb3R0bGVkRnVuY3Rpb24iLCJnZXRVbmlxSWQiLCJwcmVmaXgiLCJmbG9vciIsInJhbmRvbSIsImJ1ZmZlcjJzdHJpbmciLCJidWYiLCJvZmZzZXQiLCJzbGljZVNpemUiLCJzbGljZXMiLCJhcnJheUxlbiIsImVuZCIsIm1pbiIsImJ5dGVMZW5ndGgiLCJuZWVkc1NsaWNpbmciLCJVaW50OEFycmF5IiwiYmxvYjJiYXNlNjQiLCJibG9iIiwic2l6ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwic3RyaW5nMnVpbnQ4YXJyYXkiLCJzdHIiLCJsZW4iLCJhcnJheSIsIlZFUlNJT05fUkUiLCJESUdJVFNfUkUiLCJjb21wYXJlVmVyc2lvbiIsInZlcjEiLCJ2ZXIyIiwibWFpbjEiLCJwcmUxIiwiZXhlYyIsIm1haW4yIiwicHJlMiIsImNvbXBhcmVWZXJzaW9uQ2h1bmsiLCJpc1NlbXZlck1vZGUiLCJwYXJ0czEiLCJwYXJ0czIiLCJsZW4xIiwibGVuMiIsInRlc3QiLCJ1bml0cyIsImZvcm1hdFRpbWUiLCJkdXJhdGlvbiIsInVuaXRJbmZvIiwic3RlcCIsImZvcm1hdEJ5dGVMZW5ndGgiLCJ0b0ZpeGVkIiwiaXNFbXB0eSIsImVuc3VyZUFycmF5IiwiYmluYXJ5VHlwZXMiLCJyZXF1ZXN0TG9jYWxGaWxlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJyZXNwb25zZVR5cGUiLCJvcGVuIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiSlNPTiIsInBhcnNlIiwib25lcnJvciIsInNlbmQiLCJGT1JDRURfQUNDRVBUIiwiaXNSZW1vdGUiLCJyZXF1ZXN0Iiwic3RhcnRzV2l0aCIsImJvZHkiLCJoZWFkZXJzIiwiaXNCb2R5T2JqIiwiaG9zdG5hbWUiLCJhY2NlcHQiLCJpbml0IiwiYXNzaWduIiwic3RyaW5naWZ5IiwicmVzcCIsImZldGNoIiwibG9hZE1ldGhvZCIsImFycmF5YnVmZmVyIiwianNvbiIsIlNJTVBMRV9WQUxVRV9UWVBFIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbGVhbiIsImR1bXBTY3JpcHRWYWx1ZSIsImpzb25EdW1wIiwic2ltcGxlIiwiYWxsb3dlZCIsImNyZWF0ZU51bGxPYmoiLCJkYXRhS2V5TmFtZU1hcCIsImhhbmRsZXJzIiwiYmdIYW5kbGVycyIsIm9uU2NyaXB0cyIsImFzc2lnbkhhbmRsZXJzIiwiZGVzdCIsImZvcmNlIiwiYWxsb3dDbWQiLCJkYXRhS2V5IiwiZW5zdXJlTmVzdGVkUHJvcCIsIlhIUiIsIkFERF9FTEVNRU5UIiwiVVBEQVRFX1ZBTFVFIiwiVEFCX0NMT1NFIiwiR0VUX1JFU09VUkNFIiwiR01fQ01EIiwiYWRkRWxlbWVudCIsImFkZFN0eWxlIiwiZGVsZXRlVmFsdWUiLCJkb3dubG9hZCIsImdldFJlc291cmNlVGV4dCIsImdldFJlc291cmNlVVJMIiwibm90aWZpY2F0aW9uIiwib3BlbkluVGFiIiwicmVnaXN0ZXJNZW51Q29tbWFuZCIsInNldENsaXBib2FyZCIsInNldFZhbHVlIiwidW5yZWdpc3Rlck1lbnVDb21tYW5kIiwiR1JBTlRfQ01EIiwiV0lORE9XX0NMT1NFIiwiV0lORE9XX0ZPQ1VTIiwiYnJpZGdlIiwiaWRzIiwicnVubmluZ0lkcyIsImludm9rYWJsZUlkcyIsImZhaWxlZElkcyIsInBhdGhNYXBzIiwiYWRkSGFuZGxlcnMiLCJhZGRCYWNrZ3JvdW5kSGFuZGxlcnMiLCJhbGxvd1NjcmlwdCIsImdyYW50IiwiY21kcyIsInJlZ2V4cFRlc3QiLCJvbkhhbmRsZSIsIm5vZGUiLCJyZWFsbSIsImhhbmRsZSIsImxvZyIsImNhbGxiYWNrSWQiLCJnZXRPd25Qcm9wIiwiQ0FMTEJBQ0tfSUQiLCJpc1Byb21pc2UiLCJwb3N0IiwiZm4iLCJjbGlwYm9hcmREYXRhIiwiZXhlY0NvbW1hbmQiLCJkb2N1bWVudCIsInNldERhdGEiLCJEYXRhVHJhbnNmZXIiLCJQUk9UTyIsImdldENsaXBib2FyZERhdGEiLCJkZXNjcmliZVByb3BlcnR5IiwiQ2xpcGJvYXJkRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIkV2ZW50Iiwib25Db3B5IiwidHlwZSIsInBhcmFtcyIsIm9uIiwib2ZmIiwiU2V0Q2xpcGJvYXJkIiwibWVudXMiLCJzZXRQb3B1cFRocm90dGxlIiwiaXNQb3B1cFNob3duIiwiaW5qZWN0aW9uIiwiUG9wdXBTaG93biIsInN0YXRlIiwic2VuZFNldFBvcHVwIiwiQWRkRWxlbWVudCIsInRhZyIsImF0dHJzIiwiY2JJZCIsImVsIiwicGFyZW50IiwiZWxlbUJ5VGFnIiwibWFrZUVsZW0iLCJhcHBlbmRDaGlsZCIsInN0YWNrIiwiR2V0UmVzb3VyY2UiLCJpc0Jsb2IiLCJwYXRoIiwicmF3IiwiZGVjb2RlUmVzb3VyY2UiLCJSZWdpc3Rlck1lbnUiLCJjYXAiLCJJU19UT1AiLCJVbnJlZ2lzdGVyTWVudSIsImlzRGVsYXllZCIsInBpY2tJbnRvVGhpcyIsInJlc29sdmVkUHJvbWlzZSIsInByb21pc2VSZXNvbHZlIiwiYmFkZ2VQcm9taXNlIiwibnVtQmFkZ2VzU2VudCIsImJmQ2FjaGVXaXJlZCIsImNvbnRlbnRJZCIsImdldFVuaXFJZFNhZmUiLCJ3ZWJJZCIsInhockRhdGEiLCJnZXRYaHJJbmplY3Rpb24iLCJwYWdlSW5mbyIsImZvcmNlQ29udGVudCIsImxvY2F0aW9uIiwiWE1MRG9jdW1lbnQiLCJpbmplY3RQYWdlU2FuZGJveCIsImRhdGFQcm9taXNlIiwiY29tcG9zZWRQYXRoIiwiZ2V0RGF0YUZGIiwiZXhwb3NlIiwiR2V0U2NyaXB0VmVyIiwic2NyaXB0cyIsImluamVjdFNjcmlwdHMiLCJDb21tYW5kIiwiVXBkYXRlZFZhbHVlcyIsImRhdGFQYWdlIiwiZGF0YUNvbnRlbnQiLCJvYmplY3RLZXlzIiwiUnVuIiwidGhyb3R0bGVkU2V0QmFkZ2UiLCJldnQiLCJpc1RydXN0ZWQiLCJwZXJzaXN0ZWQiLCJTZXRUaW1lb3V0IiwiVGFiRm9jdXMiLCJVcGRhdGVWYWx1ZSIsInZpYU1lc3NhZ2luZyIsInZtRGF0YSIsInJhY2UiLCJ2bVJlc29sdmUiLCJxdW90ZWRLZXkiLCJjb29raWVWYWx1ZSIsImNvb2tpZSIsImJsb2JJZCIsIlZNX1VVSUQiLCJyZXZva2VPYmplY3RVUkwiLCJJTklUX0ZVTkNfTkFNRSIsIlZBVUxUX1dSSVRFUiIsIlZBVUxUX1dSSVRFUl9BQ0siLCJjb250TGlzdHMiLCJwZ0xpc3RzIiwicmVhbG1zIiwicGFnZUluamVjdGFibGUiLCJmcmFtZUV2ZW50V25kIiwiaW5qZWN0ZWRSb290IiwiVk1Jbml0SW5qZWN0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJnZXRSZWxhdGVkVGFyZ2V0IiwidGVsbEJyaWRnZVRvV3JpdGVWYXVsdCIsImdldERldGFpbCIsIkN1c3RvbUV2ZW50U2FmZSIsInNhZmVEZWZpbmVQcm9wZXJ0eSIsIkluamVjdExpc3QiLCJpbmplY3RMaXN0IiwiY2xvbmVJbnRvIiwidmF1bHRJZCIsImhhbmRzaGFrZUlkIiwidXNlT3BlbmVyIiwib3BlbmVyIiwic3RhcnRIYW5kc2hha2UiLCJpbmplY3QiLCJ3cmFwcGVkSlNPYmplY3QiLCJvayIsInNldE9rIiwiTW91c2VFdmVudFNhZmUiLCJyZWxhdGVkVGFyZ2V0IiwiZGV0YWlsIiwiaGFuZHNoYWtlciIsImNhcHR1cmUiLCJvbmNlIiwiYmluZEV2ZW50cyIsImZpcmVCcmlkZ2VFdmVudCIsImhhc01vcmUiLCJpbmZvIiwiaW5qZWN0YWJsZSIsImxpc3RzIiwic3RhcnQiLCJpZGxlIiwiaXMiLCJmZWVkYmFjayIsImluamVjdEludG8iLCJwYXRoTWFwIiwicmVhbG1EYXRhIiwicnVuQXQiLCJtb3JlRGF0YSIsImZlZWRJZCIsImhhc0ludm9rZXIiLCJzZXR1cENvbnRlbnRJbnZva2VyIiwib25FbGVtZW50IiwiaW5qZWN0QWxsIiwib25Cb2R5IiwiaW5qZWN0RGVsYXllZFNjcmlwdHMiLCJuZWVkc0ludm9rZXIiLCJnZXRSZWFkeVN0YXRlIiwiaWZyYW1lQ2IiLCJvbkVycm9yIiwiZGlzcGxheU5hbWUiLCJkaXYiLCJkaXZSb290IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImlmcmFtZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29udGVudERvY3VtZW50IiwicmVtb3ZlIiwiaXRlbXMiLCJsaXN0IiwiaW52b2tlQ29udGVudCIsInBvc3RWaWFCcmlkZ2UiLCJ3bmQiLCJub3RpZmljYXRpb25zIiwiTm90aWZpY2F0aW9uIiwibmlkIiwiUmVtb3ZlTm90aWZpY2F0aW9uIiwiTm90aWZpY2F0aW9uQ2xpY2siLCJuIiwiTm90aWZpY2F0aW9uQ2xvc2UiLCJmZXRjaFNhZmUiLCJhcnJheUJ1ZmZlciIsImdldEFycmF5QnVmZmVyIiwiZ2V0QmxvYiIsIlJlc3BvbnNlUHJvdG8iLCJjcmVhdGVPYmplY3RVUkwiLCJyZXF1ZXN0cyIsImRvd25sb2FkQ2hhaW4iLCJIdHRwUmVxdWVzdCIsIm1zZyIsIndhbnRzQmxvYiIsInhoclR5cGUiLCJBYm9ydFJlcXVlc3QiLCJIdHRwUmVxdWVzdGVkIiwiY2h1bmsiLCJyZXEiLCJyZWNlaXZlQ2h1bmsiLCJudW1DaHVua3MiLCJnb3RDaHVua3MiLCJibG9iYmVkIiwiY2h1bmtlZCIsImRvd25sb2FkSWQiLCJpc0xvYWRFbmQiLCJldmVudHNUb05vdGlmeSIsImltcG9ydGluZyIsImJpbiIsImltcG9ydEJsb2IiLCJyZWNlaXZlQWxsQ2h1bmtzIiwiZ290TG9hZEVuZCIsImZpbGVOYW1lIiwiZG93bmxvYWRCbG9iIiwicmV2b2tlQmxvYkFmdGVyVGltZW91dCIsImFyciIsIlVpbnQ4QXJyYXlTYWZlIiwiZGF0YVNpemUiLCJwcm9jZXNzQ2h1bmsiLCJmaW5pc2hDaHVua3MiLCJwb3MiLCJsYXN0IiwiYXRvYlNhZmUiLCJCbG9iU2FmZSIsImNvbnRlbnRUeXBlIiwiYnVmZmVyIiwidGFiSWRzIiwidGFiS2V5cyIsIlRhYk9wZW4iLCJUYWJDbG9zZSIsIlRhYkNsb3NlZCIsImFyZyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImNyZWF0ZUVsZW1lbnROUyIsIk5TX0hUTUwiLCJpc1N0cmluZyIsImFwcGVuZCIsInNldEF0dHJpYnV0ZSIsImdldEhyZWYiLCJzdHJpbmdJbmRleE9mIiwiYnl0ZXMiLCJ0ZERlY29kZSIsIlRleHREZWNvZGVyU2FmZSIsImhpc3RvcnkiLCJyZWZlcnJlciIsInRleHQiLCJnZXRUZXh0IiwiZmV0Y2hPcHRzIiwib2xkQ29kZSIsImZyb20iLCJzdG9yYWdlIiwibWFuYWdlZCIsIm9uQ29ubmVjdCIsInBvcnQiLCJwb3N0TWVzc2FnZSIsIm9uRGlzY29ubmVjdCIsInRhYiIsImNsb3NlU2VsZiIsImdvIiwiZXZlbnRJZCIsImV2dE1haW4iLCJzcmNJ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QUFlLENBQUNrSSxNQUFELEVBQVM7QUFBRXJoQixTQUFGO0FBQU9YLFVBQVA7QUFBYStPLGFBQWI7QUFBc0JvQyxVQUFJLEVBQUUsQ0FBQyxDQUFDK1E7QUFBOUIsS0FBVCxFQUFrRHJKLFNBQWxELENBQWY7QUFDQSxRQUFJcUosT0FBSixFQUFhLFNBQVFuaUIsSUFBUixFQUFBb0IsTUFBTSxFQUFPK2dCLE9BQVAsQ0FBTjtBQUNkLEdBTEQ7QUFNRCxDQTVCTSxDIiwiZmlsZSI6ImluamVjdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7IF9fcHJvdG9fXzogbnVsbCB9OyAgICAgICAgICBmb3IgKGxldCBpID0gMCwgYywgc3RyID0gXCJjZG1ub3BydFwiOyBpIDwgc3RyLmxlbmd0aCAmJiAoYyA9IHN0cltpKytdKTspICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX3JlcXVpcmVfXywgYywgeyBfX3Byb3RvX186IG51bGwsIHZhbHVlOiB1bmRlZmluZWQsIHdyaXRhYmxlOiB0cnVlIH0pO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7IF9fcHJvdG9fXzogbnVsbCB9LCBfX3Byb3RvX186IG51bGxcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0c2FmZUNhbGwobW9kdWxlc1ttb2R1bGVJZF0sIG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0ZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge19fcHJvdG9fXzogbnVsbCwgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHJ1ZSkge1xuIFx0XHRcdGRlZmluZVByb3BlcnR5KGV4cG9ydHMsIHRvU3RyaW5nVGFnU3ltLCB7X19wcm90b19fOiBudWxsLCB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0ZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7X19wcm90b19fOiBudWxsLCB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IHsgX19wcm90b19fOiBudWxsIH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdGRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHtfX3Byb3RvX186IG51bGwsIGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IoY29uc3Qga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgKCkgPT4gdmFsdWVba2V5XSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIGtleSkgPT4gc2FmZUNhbGwoaGFzT3duUHJvcGVydHksIG9iaiwga2V5KTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luamVjdGVkL2luZGV4LmpzXCIpO1xuIiwiLy8gU2luY2UgdGhpcyBhbHNvIHJ1bnMgaW4gYSBjb250ZW50IHNjcmlwdCB3ZSdsbCBndWFyZCBhZ2FpbnN0IGltcGxpY2l0IGdsb2JhbCB2YXJpYWJsZXNcbi8vIGZvciBET00gZWxlbWVudHMgd2l0aCAnaWQnIGF0dHJpYnV0ZSB3aGljaCBpcyBhIHN0YW5kYXJkIGZlYXR1cmUsIG1vcmUgaW5mbzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9wdWxsLzE1M1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvd2luZG93LW9iamVjdC5odG1sI25hbWVkLWFjY2Vzcy1vbi10aGUtd2luZG93LW9iamVjdFxuaWYgKCFJU19GSVJFRk9YICYmICFnbG9iYWwuYnJvd3Nlcj8ucnVudGltZSkge1xuICAvLyByZWdpb24gQ2hyb21lXG4gIGNvbnN0IHsgY2hyb21lLCBQcm94eTogUHJveHlTYWZlIH0gPSBnbG9iYWw7XG4gIGNvbnN0IHsgYXBwbHksIGJpbmQgfSA9IFByb3h5U2FmZTtcbiAgY29uc3QgTUVTU0FHRSA9ICdtZXNzYWdlJztcbiAgY29uc3QgU1RBQ0sgPSAnc3RhY2snO1xuICBjb25zdCBpc1N5bmNNZXRob2ROYW1lID0ga2V5ID0+IGtleSA9PT0gJ2FkZExpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ2hhc0xpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ2hhc0xpc3RlbmVycyc7XG4gIC8qKiBBUEkgdHlwZXMgb3IgZW51bXMgb3IgbGl0ZXJhbCBjb25zdGFudHMgKi9cbiAgY29uc3QgaXNGdW5jdGlvbiA9IHZhbCA9PiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nO1xuICBjb25zdCBpc09iamVjdCA9IHZhbCA9PiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcbiAgY29uc3QgcHJveGlmeVZhbHVlID0gKHRhcmdldCwga2V5LCBzcmMsIG1ldGFWYWwpID0+IHtcbiAgICBjb25zdCBzcmNWYWwgPSBzcmNba2V5XTtcbiAgICBpZiAoc3JjVmFsID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBsZXQgcmVzO1xuICAgIGlmIChpc0Z1bmN0aW9uKG1ldGFWYWwpKSB7XG4gICAgICByZXMgPSBtZXRhVmFsKHNyYywgc3JjVmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oc3JjVmFsKSkge1xuICAgICAgcmVzID0gbWV0YVZhbCA9PT0gMCB8fCBpc1N5bmNNZXRob2ROYW1lKGtleSkgfHwgIXNyYzo6aGFzT3duUHJvcGVydHkoa2V5KVxuICAgICAgICA/IHNyY1ZhbDo6YmluZChzcmMpXG4gICAgICAgIDogd3JhcEFzeW5jKHNyYywgc3JjVmFsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3Qoc3JjVmFsKSAmJiBtZXRhVmFsICE9PSAwKSB7XG4gICAgICByZXMgPSBwcm94aWZ5R3JvdXAoc3JjVmFsLCBtZXRhVmFsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBzcmNWYWw7XG4gICAgfVxuICAgIHRhcmdldFtrZXldID0gcmVzO1xuICAgIHJldHVybiByZXM7XG4gIH07XG4gIGNvbnN0IHByb3hpZnlHcm91cCA9IChzcmMsIG1ldGEpID0+IG5ldyBQcm94eVNhZmUoe30sIHtcbiAgICBnZXQ6IChncm91cCwga2V5KSA9PiBncm91cFtrZXldID8/IHByb3hpZnlWYWx1ZShncm91cCwga2V5LCBzcmMsIG1ldGE/LltrZXldKSxcbiAgfSk7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyAtIG9yaWdpbmFsIEFQSSBncm91cFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIC0gb3JpZ2luYWwgQVBJIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7V3JhcEFzeW5jUHJlcHJvY2Vzc29yRnVuY30gW3ByZXByb2Nlc3NvckZ1bmNdIC0gbW9kaWZpZXMgdGhlIEFQSSBjYWxsYmFjaydzIHJlc3BvbnNlXG4gICAgKi9cbiAgY29uc3Qgd3JhcEFzeW5jID0gKHRoaXNBcmcsIGZ1bmMsIHByZXByb2Nlc3NvckZ1bmMpID0+IChcbiAgICAoLi4uYXJncykgPT4ge1xuICAgICAgbGV0IHJlc29sdmU7XG4gICAgICBsZXQgcmVqZWN0O1xuICAgICAgLyogVXNpbmcgcmVzb2x2ZS9yZWplY3QgdG8gY2FsbCBBUEkgaW4gdGhlIHNjb3BlIG9mIHRoaXMgZnVuY3Rpb24sIG5vdCBpbnNpZGUgUHJvbWlzZSxcbiAgICAgICAgIGJlY2F1c2UgYW4gQVBJIHZhbGlkYXRpb24gZXhjZXB0aW9uIGlzIHRocm93biBzeW5jaHJvbm91c2x5IGJvdGggaW4gQ2hyb21lIGFuZCBGRlxuICAgICAgICAgc28gdGhlIGNhbGxlciBjYW4gdXNlIHRyeS9jYXRjaCB0byBkZXRlY3QgaXQgbGlrZSB3ZSd2ZSBiZWVuIGRvaW5nIGluIGljb24uanMgKi9cbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZVNhZmUoKF9yZXNvbHZlLCBfcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZTtcbiAgICAgICAgcmVqZWN0ID0gX3JlamVjdDtcbiAgICAgIH0pO1xuICAgICAgLy8gTWFrZSB0aGUgZXJyb3IgbWVzc2FnZXMgYWN0dWFsbHkgdXNlZnVsIGJ5IGNhcHR1cmluZyBhIHJlYWwgc3RhY2tcbiAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IG5ldyBFcnJvclNhZmUoYGNhbGxzdGFjayBiZWZvcmUgaW52b2tpbmcgJHtmdW5jLm5hbWUgfHwgJ2Nocm9tZSBBUEknfTpgKTtcbiAgICAgIC8vIEEgc2luZ2xlIHBhcmFtZXRlciBgcmVzdWx0YCBpcyBmaW5lIGJlY2F1c2Ugd2UgZG9uJ3QgdXNlIEFQSSB0aGF0IHJldHVybiBtb3JlXG4gICAgICBhcmdzW2FyZ3MubGVuZ3RoXSA9IHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bnRpbWVFcnIgPSBjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XG4gICAgICAgIGNvbnN0IGVyciA9IHJ1bnRpbWVFcnIgfHwgKFxuICAgICAgICAgIHByZXByb2Nlc3NvckZ1bmNcbiAgICAgICAgICAgID8gcHJlcHJvY2Vzc29yRnVuYyhyZXNvbHZlLCByZXN1bHQpXG4gICAgICAgICAgICA6IHJlc29sdmUocmVzdWx0KVxuICAgICAgICApO1xuICAgICAgICAvLyBQcmVmZXIgYHJlamVjdGAgb3ZlciBgdGhyb3dgIHdoaWNoIHN0b3BzIGRlYnVnZ2VyIGluICdwYXVzZSBvbiBleGNlcHRpb25zJyBtb2RlXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBpZiAoIXJ1bnRpbWVFcnIpIHN0YWNrSW5mb1tTVEFDS10gPSBgJHtlcnJbMV19XFxuJHtzdGFja0luZm9bU1RBQ0tdfWA7XG4gICAgICAgICAgc3RhY2tJbmZvW01FU1NBR0VdID0gcnVudGltZUVyciA/IGVycltNRVNTQUdFXSA6IGAke2VyclswXX1gO1xuICAgICAgICAgIHN0YWNrSW5mby5pc1J1bnRpbWUgPSAhIXJ1bnRpbWVFcnI7XG4gICAgICAgICAgcmVqZWN0KHN0YWNrSW5mbyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuSVNfSU5KRUNURUQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmdW5jOjphcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmIChlW01FU1NBR0VdID09PSAnRXh0ZW5zaW9uIGNvbnRleHQgaW52YWxpZGF0ZWQuJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHJlbG9hZCB0aGUgdGFiIHRvIHJlc3RvcmUgVmlvbGVudG1vbmtleSBBUEkgZm9yIHVzZXJzY3JpcHRzLicpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVuYzo6YXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHByb21pc2UuY2F0Y2goZXJyID0+IGNvbnNvbGUud2FybihhcmdzLCBlcnI/LltNRVNTQUdFXSB8fCBlcnIpKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgKTtcbiAgLy8gQm90aCByZXN1bHQgYW5kIGVycm9yIG11c3QgYmUgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYXZvaWQgcHJvdG90eXBlIGVhdmVzZHJvcHBpbmdcbiAgY29uc3Qgd3JhcFN1Y2Nlc3MgPSByZXN1bHQgPT4gW1xuICAgIHJlc3VsdCxcbiAgICBudWxsLFxuICBdO1xuICAvLyBCb3RoIHJlc3VsdCBhbmQgZXJyb3IgbXVzdCBiZSBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBhdm9pZCBwcm90b3R5cGUgZWF2ZXNkcm9wcGluZ1xuICBjb25zdCB3cmFwRXJyb3IgPSBlcnIgPT4gcHJvY2Vzcy5lbnYuREVCVUcgJiYgY29uc29sZS53YXJuKGVycikgfHwgW1xuICAgIG51bGwsXG4gICAgZXJyIGluc3RhbmNlb2YgRXJyb3JTYWZlXG4gICAgICA/IFtlcnJbTUVTU0FHRV0sIGVycltTVEFDS11dXG4gICAgICA6IFtlcnIsICcnXSxcbiAgXTtcbiAgY29uc3Qgc2VuZFJlc3BvbnNlQXN5bmMgPSBhc3luYyAocmVzdWx0LCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0O1xuICAgICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSBjb25zb2xlLmluZm8oJ3NlbmQnLCByZXN1bHQpO1xuICAgICAgc2VuZFJlc3BvbnNlKHdyYXBTdWNjZXNzKHJlc3VsdCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2VuZFJlc3BvbnNlKHdyYXBFcnJvcihlcnIpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uTWVzc2FnZUxpc3RlbmVyID0gKGxpc3RlbmVyLCBtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5pbmZvKCdyZWNlaXZlJywgbWVzc2FnZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlcik7XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdDo6b2JqZWN0VG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nKSB7XG4gICAgICAgIHNlbmRSZXNwb25zZUFzeW5jKHJlc3VsdCwgc2VuZFJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvLyBJbiBzb21lIGJyb3dzZXJzIChlLmcgQ2hyb21lIDU2LCBWaXZhbGRpKSwgdGhlIGxpc3RlbmVyIGluXG4gICAgICAvLyBwb3B1cCBwYWdlcyBhcmUgbm90IHByb3Blcmx5IGNsZWFyZWQgYWZ0ZXIgY2xvc2VkLlxuICAgICAgLy8gVGhleSBtYXkgc2VuZCBgdW5kZWZpbmVkYCBiZWZvcmUgdGhlIHJlYWwgcmVzcG9uc2UgaXMgc2VudC5cbiAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZW5kUmVzcG9uc2Uod3JhcFN1Y2Nlc3MocmVzdWx0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZW5kUmVzcG9uc2Uod3JhcEVycm9yKGVycikpO1xuICAgIH1cbiAgfTtcbiAgLyoqIEB0eXBlIHtXcmFwQXN5bmNQcmVwcm9jZXNzb3JGdW5jfSAqL1xuICBjb25zdCB1bndyYXBSZXNwb25zZSA9IChyZXNvbHZlLCByZXNwb25zZSkgPT4gKFxuICAgICFyZXNwb25zZSAmJiAnbnVsbCByZXNwb25zZSdcbiAgICB8fCByZXNwb25zZVsxXSAvLyBlcnJvciBjcmVhdGVkIGluIHdyYXBFcnJvclxuICAgIHx8IHJlc29sdmUocmVzcG9uc2VbMF0pIC8vIHJlc3VsdCBjcmVhdGVkIGluIHdyYXBTdWNjZXNzXG4gICk7XG4gIGNvbnN0IHdyYXBTZW5kTWVzc2FnZSA9IChydW50aW1lLCBzZW5kTWVzc2FnZSkgPT4gKFxuICAgIHdyYXBBc3luYyhydW50aW1lLCBzZW5kTWVzc2FnZSwgdW53cmFwUmVzcG9uc2UpXG4gICk7XG4gIC8qKlxuICAgKiAwID0gbm9uLWFzeW5jIG1ldGhvZCBvciB0aGUgZW50aXJlIGdyb3VwXG4gICAqIGZ1bmN0aW9uID0gdHJhbnNmb3JtZXIgbGlrZSAob3JpZ2luYWxPYmosIG9yaWdpbmFsRnVuYyk6IGZ1bmN0aW9uXG4gICAqL1xuICBnbG9iYWwuYnJvd3NlciA9IHByb3hpZnlHcm91cChjaHJvbWUsIHtcbiAgICBleHRlbnNpb246IDAsIC8vIHdlIGRvbid0IHVzZSBpdHMgYXN5bmMgbWV0aG9kc1xuICAgIGkxOG46IDAsIC8vIHdlIGRvbid0IHVzZSBpdHMgYXN5bmMgbWV0aG9kc1xuICAgIHJ1bnRpbWU6IHtcbiAgICAgIGNvbm5lY3Q6IDAsXG4gICAgICBnZXRNYW5pZmVzdDogMCxcbiAgICAgIGdldFVSTDogMCxcbiAgICAgIG9uTWVzc2FnZToge1xuICAgICAgICBhZGRMaXN0ZW5lcjogKG9uTWVzc2FnZSwgYWRkTGlzdGVuZXIpID0+IChcbiAgICAgICAgICBsaXN0ZW5lciA9PiBvbk1lc3NhZ2U6OmFkZExpc3RlbmVyKG9uTWVzc2FnZUxpc3RlbmVyOjpiaW5kKG51bGwsIGxpc3RlbmVyKSlcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBzZW5kTWVzc2FnZTogd3JhcFNlbmRNZXNzYWdlLFxuICAgIH0sXG4gICAgdGFiczoge1xuICAgICAgY29ubmVjdDogMCxcbiAgICAgIHNlbmRNZXNzYWdlOiB3cmFwU2VuZE1lc3NhZ2UsXG4gICAgfSxcbiAgfSk7XG4gIC8vIGVuZHJlZ2lvblxufSBlbHNlIGlmIChwcm9jZXNzLmVudi5ERUJVRyAmJiBJU19GSVJFRk9YKSB7XG4gIC8vIHJlZ2lvbiBGaXJlZm94XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovLy8gdGhpcyBpcyBhIGRlYnVnLW9ubHkgc2VjdGlvblxuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IHsgcnVudGltZSB9ID0gZ2xvYmFsLmJyb3dzZXI7XG4gIGNvbnN0IHsgc2VuZE1lc3NhZ2UsIG9uTWVzc2FnZSB9ID0gcnVudGltZTtcbiAgY29uc3QgbG9nID0gKHR5cGUsIGFyZ3MsIGlkLCBpc1Jlc3BvbnNlKSA9PiBjb25zb2xlLmluZm8oXG4gICAgYCR7dHlwZX1NZXNzYWdlIyVkJHtpc1Jlc3BvbnNlID8gJyByZXNwb25zZScgOiAnJ31gLFxuICAgIGlkLFxuICAgIC4uLmFyZ3MsXG4gICk7XG4gIHJ1bnRpbWUuc2VuZE1lc3NhZ2UgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgICBjb25zdCBpZCA9IGNvdW50ZXI7XG4gICAgbG9nKCdzZW5kJywgYXJncywgaWQpO1xuICAgIGNvbnN0IHByb21pc2UgPSBydW50aW1lOjpzZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICBwcm9taXNlLnRoZW4oZGF0YSA9PiBsb2coJ3NlbmQnLCBbZGF0YV0sIGlkLCB0cnVlKSwgY29uc29sZS53YXJuKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcbiAgY29uc3QgeyBhZGRMaXN0ZW5lciB9ID0gb25NZXNzYWdlO1xuICBvbk1lc3NhZ2UuYWRkTGlzdGVuZXIgPSAobGlzdGVuZXIpID0+IG9uTWVzc2FnZTo6YWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyKSA9PiB7XG4gICAgY291bnRlciArPSAxO1xuICAgIGNvbnN0IGlkID0gY291bnRlcjtcbiAgICBjb25zdCB7IGZyYW1lSWQsIHRhYiwgdXJsIH0gPSBzZW5kZXI7XG4gICAgbG9nKCdvbicsIFttc2csIHsgZnJhbWVJZCwgdGFiLCB1cmwgfV0sIGlkKTtcbiAgICBjb25zdCByZXN1bHQgPSBsaXN0ZW5lcihtc2csIHNlbmRlcik7XG4gICAgKHR5cGVvZiByZXN1bHQ/LnRoZW4gPT09ICdmdW5jdGlvbicgPyByZXN1bHQgOiBQcm9taXNlU2FmZS5yZXNvbHZlKHJlc3VsdCkpXG4gICAgLnRoZW4oZGF0YSA9PiBsb2coJ29uJywgW2RhdGFdLCBpZCwgdHJ1ZSksIGNvbnNvbGUud2Fybik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbiAgLy8gZW5kcmVnaW9uXG59XG5cbi8qKlxuICogQGNhbGxiYWNrIFdyYXBBc3luY1ByZXByb2Nlc3NvckZ1bmNcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oYW55KX0gcmVzb2x2ZSAtIGNhbGxlZCBvbiBzdWNjZXNzXG4gKiBAcGFyYW0ge2FueX0gcmVzcG9uc2UgLSBBUEkgY2FsbGJhY2sncyByZXNwb25zZVxuICogQHJldHVybnMgez9zdHJpbmdbXX0gLSBbZXJyb3JNZXNzYWdlLCBlcnJvclN0YWNrXSBhcnJheSBvbiBlcnJvclxuICovXG4iLCIvLyBTQUZFVFkgV0FSTklORyEgRXhwb3J0cyB1c2VkIGJ5IGBpbmplY3RlZGAgbXVzdCBtYWtlIDo6c2FmZSgpIGNhbGxzIGFuZCB1c2UgX19wcm90b19fOm51bGxcblxuLy8gZm9yIGdsb2JhbCBldmVudCBidXMgYW5kIHNhdmUgc29tZSBidWlsZCBpbiBpbmZvXG5leHBvcnQgY29uc3QgS0VZX0dMT0JBTF9JRCA9ICdfR0xPQkFMX0lEXyc7XG5leHBvcnQgY29uc3QgQlVJTERfSU5fU0NSSVBUX1NSQyA9ICdodHRwczovL21pcmEtMTI1NTgzMDk5My5jb3MuYXAtc2hhbmdoYWkubXlxY2xvdWQuY29tL2xhYi9wbHVnaW4vYmFzZS51c2VyLmpzJztcblxuZXhwb3J0IGNvbnN0IElOSkVDVF9BVVRPID0gJ2F1dG8nO1xuZXhwb3J0IGNvbnN0IElOSkVDVF9QQUdFID0gJ3BhZ2UnO1xuZXhwb3J0IGNvbnN0IElOSkVDVF9DT05URU5UID0gJ2NvbnRlbnQnO1xuXG5leHBvcnQgY29uc3QgSVNfREVWID0gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IElOSkVDVF9NQVBQSU5HID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIC8vIGBhdXRvYCB0cmllcyB0byBwcm92aWRlIGB3aW5kb3dgIGZyb20gdGhlIHJlYWwgcGFnZSBhcyBgdW5zYWZlV2luZG93YFxuICBbSU5KRUNUX0FVVE9dOiBbSU5KRUNUX1BBR0UsIElOSkVDVF9DT05URU5UXSxcbiAgLy8gaW5qZWN0IGludG8gcGFnZSBjb250ZXh0XG4gIFtJTkpFQ1RfUEFHRV06IFtJTkpFQ1RfUEFHRV0sXG4gIC8vIGluamVjdCBpbnRvIGNvbnRlbnQgY29udGV4dCBvbmx5XG4gIFtJTkpFQ1RfQ09OVEVOVF06IFtJTkpFQ1RfQ09OVEVOVF0sXG59O1xuXG5leHBvcnQgY29uc3QgQ01EX1NDUklQVF9BREQgPSAnQWRkU2NyaXB0JztcbmV4cG9ydCBjb25zdCBDTURfU0NSSVBUX1VQREFURSA9ICdVcGRhdGVTY3JpcHQnO1xuXG4vLyBBbGxvdyBtZXRhZGF0YSBsaW5lcyB0byBzdGFydCB3aXRoIFdISVRFU1BBQ0U/ICcvLycgU1BBQ0Vcbi8vIEFsbG93IGFueXRoaW5nIHRvIGZvbGxvdyB0aGUgcHJlZGVmaW5lZCB0ZXh0IG9mIHRoZSBtZXRhU3RhcnQvRW5kXG4vLyBUaGUgU1BBQ0UgbXVzdCBiZSBvbiB0aGUgc2FtZSBsaW5lIGFuZCBzcGVjaWZpY2FsbHkgXFx4MjAgYXMgXFxzIHdvdWxkIGFsc28gbWF0Y2ggXFxyXFxuXFx0XG4vLyBOb3RlOiB3aGVuIHRoZXJlJ3Mgbm8gdmFsaWQgbWV0YWJsb2NrLCBhbiBlbXB0eSBzdHJpbmcgaXMgbWF0Y2hlZCBmb3IgY29udmVuaWVuY2VcbmV4cG9ydCBjb25zdCBNRVRBQkxPQ0tfUkUgPSAvKD86XnxcXG4pXFxzKlxcL1xcL1xceDIwPT1Vc2VyU2NyaXB0PT0oW1xcc1xcU10qP1xcbilcXHMqXFwvXFwvXFx4MjA9PVxcL1VzZXJTY3JpcHQ9PXwkLztcblxuZXhwb3J0IGNvbnN0IElOSkVDVEFCTEVfVEFCX1VSTF9SRSA9IC9eKGh0dHBzP3xmaWxlfGZ0cHM/KTovO1xuXG4vLyBgYnJvd3NlcmAgaXMgYSBsb2NhbCB2YXJpYWJsZSBzaW5jZSB3ZSByZW1vdmUgdGhlIGdsb2JhbCBgY2hyb21lYCBhbmQgYGJyb3dzZXJgIGluIGluamVjdGVkKlxuLy8gdG8gcHJldmVudCBleHBvc2luZyB0aGVtIHRvIHVzZXJzY3JpcHRzIHdpdGggYEBpbmplY3QtaW50byBjb250ZW50YFxuZXhwb3J0IGNvbnN0IHsgYnJvd3NlciB9ID0gZ2xvYmFsO1xuXG4vLyBzZXRUaW1lb3V0IHRydW5jYXRlcyB0aGUgZGVsYXkgdG8gYSAzMi1iaXQgc2lnbmVkIGludGVnZXIgc28gdGhlIG1heCBkZWxheSBpcyB+MjQgZGF5c1xuZXhwb3J0IGNvbnN0IFRJTUVPVVRfTUFYID0gMHg3RkZGX0ZGRkY7XG5leHBvcnQgY29uc3QgVElNRU9VVF9IT1VSID0gNjAgKiA2MCAqIDEwMDA7XG5leHBvcnQgY29uc3QgVElNRU9VVF8yNEhPVVJTID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbmV4cG9ydCBjb25zdCBUSU1FT1VUX1dFRUsgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcbiIsIi8vIFNBRkVUWSBXQVJOSU5HISBFeHBvcnRzIHVzZWQgYnkgYGluamVjdGVkYCBtdXN0IG1ha2UgOjpzYWZlKCkgY2FsbHMgYW5kIHVzZSBfX3Byb3RvX186bnVsbFxuXG5pbXBvcnQgeyBicm93c2VyIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnLi9vYmplY3QnO1xuaW1wb3J0IHsgaTE4biwgbm9vcCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCB7IG5vcm1hbGl6ZUtleXMgfSBmcm9tICcuL29iamVjdCc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEltYWdlID0gJy9wdWJsaWMvaW1hZ2VzL2ljb24xMjgucG5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIb29rcygpIHtcbiAgY29uc3QgaG9va3MgPSBbXTtcblxuICBmdW5jdGlvbiBmaXJlKGRhdGEpIHtcbiAgICBob29rcy5zbGljZSgpLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICBjYihkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhvb2soY2FsbGJhY2spIHtcbiAgICBob29rcy5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgaSA9IGhvb2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGkgPj0gMCkgaG9va3Muc3BsaWNlKGksIDEpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4geyBob29rLCBmaXJlIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBgaW5qZWN0ZWRgXG4gKiBAcGFyYW0ge3N0cmluZ30gY21kXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIHt7cmV0cnk/OiBib29sZWFuLCBpZ25vcmVFcnJvcj86IGJvb2xlYW59fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kQ21kKGNtZCwgZGF0YSwgb3B0aW9ucykge1xuICByZXR1cm4gc2VuZE1lc3NhZ2UoeyBjbWQsIGRhdGEgfSwgb3B0aW9ucyk7XG59XG5cbi8vIFRoZXNlIG5lZWQgYHNyY2AgcGFyYW1ldGVyIHNvIHdlJ2xsIHVzZSBzZW5kQ21kIGZvciB0aGVtLiBXZSBjb3VsZCBoYXZlIGZvcmdlZCBgc3JjYCB2aWFcbi8vIGJyb3dzZXIudGFicy5nZXRDdXJyZW50IGJ1dCB0aGVyZSdzIG5vIG5lZWQgYXMgdGhleSBub3JtYWxseSB1c2Ugb25seSBhIHRpbnkgYW1vdW50IG9mIGRhdGEuXG5jb25zdCBDT01NQU5EU19XSVRIX1NSQyA9IFtcbiAgJ0NvbmZpcm1JbnN0YWxsJyxcbiAgJ05vdGlmaWNhdGlvbicsXG4gICdUYWJDbG9zZScsXG4gICdUYWJGb2N1cycsXG4gICdUYWJPcGVuJyxcbiAgJ1VwZGF0ZVZhbHVlJyxcbi8qXG4gIFRoZXNlIGFyZSB1c2VkIG9ubHkgYnkgY29udGVudCBzY3JpcHRzIHdoZXJlIHNlbmRDbWREaXJlY3RseSBjYW4ndCBiZSB1c2VkIGFueXdheVxuICAnR2V0SW5qZWN0ZWQnLFxuICAnR2V0UmVxdWVzdElkJyxcbiAgJ0h0dHBSZXF1ZXN0JyxcbiAgJ0luamVjdGlvbkZlZWRiYWNrJyxcbiAgJ1NldFBvcHVwJyxcbiovXG5dO1xuY29uc3QgZ2V0QmdQYWdlID0gKCkgPT4gYnJvd3Nlci5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2U/LigpO1xuXG4vKipcbiAqIFNlbmRzIHRoZSBjb21tYW5kK2RhdGEgZGlyZWN0bHkgc28gaXQncyBzeW5jaHJvbm91cyBhbmQgZmFzdGVyIHRoYW4gc2VuZENtZCB0aGFua3MgdG8gZGVlcENvcHkuXG4gKiBXQVJOSU5HISBNYWtlIHN1cmUgYGNtZGAgaGFuZGxlciBkb2Vzbid0IHVzZSBgc3JjYCBvciBgY21kYCBpcyBsaXN0ZWQgaW4gQ09NTUFORFNfV0lUSF9TUkMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kQ21kRGlyZWN0bHkoY21kLCBkYXRhLCBvcHRpb25zKSB7XG4gIGNvbnN0IGJnID0gIUNPTU1BTkRTX1dJVEhfU1JDLmluY2x1ZGVzKGNtZCkgJiYgZ2V0QmdQYWdlKCk7XG4gIHJldHVybiBiZyAmJiBiZyAhPT0gd2luZG93ICYmIGJnLmRlZXBDb3B5XG4gICAgPyBiZy5oYW5kbGVDb21tYW5kTWVzc2FnZShiZy5kZWVwQ29weSh7IGNtZCwgZGF0YSB9KSkudGhlbihkZWVwQ29weSlcbiAgICA6IHNlbmRDbWQoY21kLCBkYXRhLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiSWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbWRcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcGFyYW0ge3tmcmFtZUlkPzogbnVtYmVyfX0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZFRhYkNtZCh0YWJJZCwgY21kLCBkYXRhLCBvcHRpb25zKSB7XG4gIHJldHVybiBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgY21kLCBkYXRhIH0sIG9wdGlvbnMpLmNhdGNoKG5vb3ApO1xufVxuXG4vLyBVc2VkIGJ5IGBpbmplY3RlZGBcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZShwYXlsb2FkLCB7IHJldHJ5IH0gPSB7fSkge1xuICBpZiAocmV0cnkpIHJldHVybiBzZW5kTWVzc2FnZVJldHJ5KHBheWxvYWQpO1xuICBsZXQgcHJvbWlzZSA9IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShwYXlsb2FkKTtcbiAgLy8gSWdub3JpbmcgZXJyb3JzIHdoZW4gc2VuZGluZyBmcm9tIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdCBiZWNhdXNlIGl0J3MgYSBicm9hZGNhc3RcbiAgaWYgKCFwcm9jZXNzLmVudi5JU19JTkpFQ1RFRCAmJiB3aW5kb3cgPT09IGdldEJnUGFnZSgpKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UuY2F0Y2gobm9vcCk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8qKlxuICogVXNlZCBieSBgaW5qZWN0ZWRgXG4gKiBUaGUgYWN0aXZlIHRhYiBwYWdlIGFuZCBpdHMgW2NvbnRlbnRdIHNjcmlwdHMgbG9hZCBiZWZvcmUgdGhlIGV4dGVuc2lvbidzXG4gKiBwZXJzaXN0ZW50IGJhY2tncm91bmQgc2NyaXB0IHdoZW4gQ2hyb21lIHN0YXJ0cyB3aXRoIGEgVVJMIHZpYSBjb21tYW5kIGxpbmVcbiAqIG9yIHdoZW4gY29uZmlndXJlZCB0byByZXN0b3JlIHRoZSBzZXNzaW9uLCBodHRwczovL2NyYnVnLmNvbS8zMTQ2ODZcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlUmV0cnkocGF5bG9hZCwgcmV0cmllcyA9IDEwKSB7XG4gIGxldCBwYXVzZUR1cmF0aW9uID0gMTA7XG4gIGZvciAoOyByZXRyaWVzID4gMDsgcmV0cmllcyAtPSAxKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZW5kTWVzc2FnZShwYXlsb2FkKTtcbiAgICAgIGlmIChkYXRhKSByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIWAke2V9YC5pbmNsdWRlcygnQ291bGQgbm90IGVzdGFibGlzaCBjb25uZWN0aW9uLicpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IG1ha2VQYXVzZShwYXVzZUR1cmF0aW9uKTtcbiAgICBwYXVzZUR1cmF0aW9uICo9IDI7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdWaW9sZW50bW9ua2V5IGNhbm5vdCBjb25uZWN0IHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UuJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0cGFkKGlucHV0LCBsZW5ndGgsIHBhZCA9ICcwJykge1xuICBsZXQgbnVtID0gaW5wdXQudG9TdHJpbmcoKTtcbiAgd2hpbGUgKG51bS5sZW5ndGggPCBsZW5ndGgpIG51bSA9IGAke3BhZH0ke251bX1gO1xuICByZXR1cm4gbnVtO1xufVxuXG4vKipcbiAqIEdldCBsb2NhbGUgYXR0cmlidXRlcyBzdWNoIGFzIGBAbmFtZTp6aC1DTmBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZVN0cmluZyhtZXRhLCBrZXkpIHtcbiAgY29uc3QgbG9jYWxlTWV0YSA9IG5hdmlnYXRvci5sYW5ndWFnZXNcbiAgLy8gVXNlIGBsYW5nLnRvTG93ZXJDYXNlKClgIHNpbmNlIHYyLjYuNVxuICAubWFwKGxhbmcgPT4gbWV0YVtgJHtrZXl9OiR7bGFuZ31gXSB8fCBtZXRhW2Ake2tleX06JHtsYW5nLnRvTG93ZXJDYXNlKCl9YF0pXG4gIC5maW5kKEJvb2xlYW4pO1xuICByZXR1cm4gbG9jYWxlTWV0YSB8fCBtZXRhW2tleV0gfHwgJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHROYW1lKHNjcmlwdCkge1xuICByZXR1cm4gc2NyaXB0LmN1c3RvbS5uYW1lIHx8IGdldExvY2FsZVN0cmluZyhzY3JpcHQubWV0YSwgJ25hbWUnKVxuICAgIHx8IGAjJHtzY3JpcHQucHJvcHMuaWQgPz8gaTE4bignbGFiZWxOb05hbWUnKX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVsbFVybCh1cmwsIGJhc2UpIHtcbiAgY29uc3Qgb2JqID0gbmV3IFVSTCh1cmwsIGJhc2UpO1xuICAvLyBVc2UgcHJvdG9jb2wgd2hpdGVsaXN0IHRvIGZpbHRlciBVUkxzXG4gIGlmICghW1xuICAgICdodHRwOicsXG4gICAgJ2h0dHBzOicsXG4gICAgJ2Z0cDonLFxuICAgICdkYXRhOicsXG4gIF0uaW5jbHVkZXMob2JqLnByb3RvY29sKSkgb2JqLnByb3RvY29sID0gJ2h0dHA6JztcbiAgcmV0dXJuIG9iai5ocmVmO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlRmlsZW5hbWUobmFtZSkge1xuICAvLyBgZXNjYXBlYCBnZW5lcmF0ZWQgVVJJIGhhcyAlIGluIGl0XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1stXFxcXC86Kj9cIjw+fCVcXHNdL2csIChtKSA9PiB7XG4gICAgbGV0IGNvZGUgPSBtLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpO1xuICAgIGlmIChjb2RlLmxlbmd0aCA8IDIpIGNvZGUgPSBgMCR7Y29kZX1gO1xuICAgIHJldHVybiBgLSR7Y29kZX1gO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUZpbGVuYW1lKGZpbGVuYW1lKSB7XG4gIHJldHVybiBmaWxlbmFtZS5yZXBsYWNlKC8tKFswLTlhLWZdezJ9KS9nLCAoX20sIGcpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZywgMTYpKSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBY3RpdmVUYWIoKSB7XG4gIHJldHVybiAoXG4gICAgYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHtcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIGN1cnJlbnRXaW5kb3c6IHRydWUsXG4gICAgfSlcbiAgKVswXSB8fCAoXG4gICAgLy8gQ2hyb21lIGJ1ZyB3b3JrYXJvdW5kIHdoZW4gYW4gdW5kb2NrZWQgZGV2dG9vbHMgd2luZG93IGlzIGZvY3VzZWRcbiAgICBhd2FpdCBicm93c2VyLnRhYnMucXVlcnkoe1xuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgd2luZG93SWQ6IChhd2FpdCBicm93c2VyLndpbmRvd3MuZ2V0Q3VycmVudCgpKS5pZCxcbiAgICB9KVxuICApWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBhdXNlKG1zKSB7XG4gIHJldHVybiBtcyA8IDBcbiAgICA/IFByb21pc2UucmVzb2x2ZSgpXG4gICAgOiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRydWVKb2luKHNlcGFyYXRvcikge1xuICByZXR1cm4gdGhpcy5maWx0ZXIoQm9vbGVhbikuam9pbihzZXBhcmF0b3IpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUtleXMoa2V5KSB7XG4gIGlmIChrZXkgPT0gbnVsbCkgcmV0dXJuIFtdO1xuICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSByZXR1cm4ga2V5O1xuICByZXR1cm4gYCR7a2V5fWAuc3BsaXQoJy4nKS5maWx0ZXIoQm9vbGVhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RHZXQob2JqLCByYXdLZXksIGRlZikge1xuICBjb25zdCBrZXlzID0gbm9ybWFsaXplS2V5cyhyYXdLZXkpO1xuICBsZXQgcmVzID0gb2JqO1xuICBrZXlzLmV2ZXJ5KChrZXkpID0+IHtcbiAgICBpZiAocmVzICYmIHR5cGVvZiByZXMgPT09ICdvYmplY3QnICYmIChrZXkgaW4gcmVzKSkge1xuICAgICAgcmVzID0gcmVzW2tleV07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmVzID0gZGVmO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RTZXQob2JqLCByYXdLZXksIHZhbCkge1xuICBjb25zdCBrZXlzID0gbm9ybWFsaXplS2V5cyhyYXdLZXkpO1xuICBpZiAoIWtleXMubGVuZ3RoKSByZXR1cm4gdmFsO1xuICBjb25zdCByb290ID0gb2JqIHx8IHt9O1xuICBsZXQgc3ViID0gcm9vdDtcbiAgY29uc3QgbGFzdEtleSA9IGtleXMucG9wKCk7XG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgc3ViID0gc3ViW2tleV0gfHwgKHN1YltrZXldID0ge30pO1xuICB9KTtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGVsZXRlIHN1YltsYXN0S2V5XTtcbiAgfSBlbHNlIHtcbiAgICBzdWJbbGFzdEtleV0gPSB2YWw7XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qKlxuICogQHBhcmFtIHt7fX0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHZhbHVlLGtleSk6P30gW3RyYW5zZm9ybV1cbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFBpY2sob2JqLCBrZXlzLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKChyZXMsIGtleSkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IG9iaj8uW2tleV07XG4gICAgaWYgKHRyYW5zZm9ybSkgdmFsdWUgPSB0cmFuc2Zvcm0odmFsdWUsIGtleSk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHJlc1trZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIHJlcztcbiAgfSwge30pO1xufVxuXG4vLyBpbnZva2VkIGFzIG9iajo6bWFwRW50cnkoKFtrZXksIHZhbHVlXSwgaSwgYWxsRW50cmllcykgPT4gdHJhbnNmb3JtZWRWYWx1ZSlcbmV4cG9ydCBmdW5jdGlvbiBtYXBFbnRyeShmdW5jKSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzKS5yZWR1Y2UoKHJlcywgZW50cnksIGksIGFsbEVudHJpZXMpID0+IHtcbiAgICByZXNbZW50cnlbMF1dID0gZnVuYyhlbnRyeSwgaSwgYWxsRW50cmllcyk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSwge30pO1xufVxuXG4vLyBpbnZva2VkIGFzIG9iajo6Zm9yRWFjaEVudHJ5KChba2V5LCB2YWx1ZV0sIGksIGFsbEVudHJpZXMpID0+IHt9KVxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hFbnRyeShmdW5jKSB7XG4gIGlmICh0aGlzKSBPYmplY3QuZW50cmllcyh0aGlzKS5mb3JFYWNoKGZ1bmMpO1xufVxuXG4vLyBpbnZva2VkIGFzIG9iajo6Zm9yRWFjaEtleShrZXkgPT4ge30sIGksIGFsbEtleXMpXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaEtleShmdW5jKSB7XG4gIGlmICh0aGlzKSBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKGZ1bmMpO1xufVxuXG4vLyBpbnZva2VkIGFzIG9iajo6Zm9yRWFjaFZhbHVlKHZhbHVlID0+IHt9LCBpLCBhbGxWYWx1ZXMpXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaFZhbHVlKGZ1bmMpIHtcbiAgaWYgKHRoaXMpIE9iamVjdC52YWx1ZXModGhpcykuZm9yRWFjaChmdW5jKTtcbn1cblxuLy8gTmVlZGVkIGZvciBGaXJlZm94J3MgYnJvd3Nlci5zdG9yYWdlIEFQSSB3aGljaCBmYWlscyBvbiBWdWUgb2JzZXJ2YWJsZXNcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weShzcmMpIHtcbiAgcmV0dXJuIHNyYyAmJiAoXG4gICAgQXJyYXkuaXNBcnJheShzcmMpICYmIHNyYy5tYXAoZGVlcENvcHkpXG4gICAgLy8gVXNlZCBpbiBzYWZlIGNvbnRleHRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICB8fCB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiBzcmM6Om1hcEVudHJ5KChbLCB2YWxdKSA9PiBkZWVwQ29weSh2YWwpKVxuICApIHx8IHNyYztcbn1cblxuLy8gU2ltcGxpZmllZCBkZWVwIGVxdWFsaXR5IGNoZWNrZXJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwRXF1YWwoYSwgYikge1xuICBsZXQgcmVzO1xuICBpZiAoIWEgfHwgIWIgfHwgdHlwZW9mIGEgIT09IHR5cGVvZiBiIHx8IHR5cGVvZiBhICE9PSAnb2JqZWN0Jykge1xuICAgIHJlcyA9IGEgPT09IGI7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJlcyA9IGEubGVuZ3RoID09PSBiLmxlbmd0aFxuICAgICAgJiYgYS5ldmVyeSgoaXRlbSwgaSkgPT4gZGVlcEVxdWFsKGl0ZW0sIGJbaV0pKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMoYik7XG4gICAgcmVzID0ga2V5c0EubGVuZ3RoID09PSBrZXlzQi5sZW5ndGhcbiAgICAgICYmIGtleXNBLmV2ZXJ5KGtleSA9PiBrZXlzQi5pbmNsdWRlcyhrZXkpICYmIGRlZXBFcXVhbChhW2tleV0sIGJba2V5XSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG4iLCIvLyBTQUZFVFkgV0FSTklORyEgRXhwb3J0cyB1c2VkIGJ5IGBpbmplY3RlZGAgbXVzdCBtYWtlIDo6c2FmZSgpIGNhbGxzIGFuZCB1c2UgX19wcm90b19fOm51bGxcblxuaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpMThuKG5hbWUsIGFyZ3MpIHtcbiAgcmV0dXJuIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKG5hbWUsIGFyZ3MpIHx8IG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZyhwYXJhbSkge1xuICBpZiAocGFyYW0gPT0gbnVsbCkgcmV0dXJuICcnO1xuICByZXR1cm4gYCR7cGFyYW19YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIgPSB0b1N0cmluZykge1xuICBjb25zdCBjYWNoZU1hcCA9IHt9O1xuICBmdW5jdGlvbiBtZW1vaXplZCguLi5hcmdzKSB7XG4gICAgLy8gVXNlZCBpbiBzYWZlIGNvbnRleHRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBjb25zdCBrZXkgPSByZXNvbHZlciguLi5hcmdzKTtcbiAgICBsZXQgY2FjaGUgPSBjYWNoZU1hcFtrZXldO1xuICAgIGlmICghY2FjaGUpIHtcbiAgICAgIGNhY2hlID0ge1xuICAgICAgICB2YWx1ZTogZnVuYy5hcHBseSh0aGlzLCBhcmdzKSxcbiAgICAgIH07XG4gICAgICBjYWNoZU1hcFtrZXldID0gY2FjaGU7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZS52YWx1ZTtcbiAgfVxuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB0aW1lKSB7XG4gIGxldCBzdGFydFRpbWU7XG4gIGxldCB0aW1lcjtcbiAgbGV0IGNhbGxiYWNrO1xuICB0aW1lID0gTWF0aC5tYXgoMCwgK3RpbWUgfHwgMCk7XG4gIGZ1bmN0aW9uIGNoZWNrVGltZSgpIHtcbiAgICB0aW1lciA9IG51bGw7XG4gICAgaWYgKHBlcmZvcm1hbmNlLm5vdygpID49IHN0YXJ0VGltZSkgY2FsbGJhY2soKTtcbiAgICBlbHNlIGNoZWNrVGltZXIoKTtcbiAgfVxuICBmdW5jdGlvbiBjaGVja1RpbWVyKCkge1xuICAgIGlmICghdGltZXIpIHtcbiAgICAgIGNvbnN0IGRlbHRhID0gc3RhcnRUaW1lIC0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoY2hlY2tUaW1lLCBkZWx0YSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGRlYm91bmNlZEZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSArIHRpbWU7XG4gICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBjYWxsYmFjayA9IG51bGw7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgY2hlY2tUaW1lcigpO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZWRGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHRpbWUpIHtcbiAgbGV0IGxhc3RUaW1lID0gMDtcbiAgdGltZSA9IE1hdGgubWF4KDAsICt0aW1lIHx8IDApO1xuICBmdW5jdGlvbiB0aHJvdHRsZWRGdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgaWYgKGxhc3RUaW1lICsgdGltZSA8IG5vdykge1xuICAgICAgbGFzdFRpbWUgPSBub3c7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhyb3R0bGVkRnVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXFJZChwcmVmaXggPSAnVk0nKSB7XG4gIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICByZXR1cm4gcHJlZml4XG4gICAgKyBNYXRoLmZsb29yKChub3cgLSBNYXRoLmZsb29yKG5vdykpICogMWUxMikudG9TdHJpbmcoMzYpXG4gICAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTEyKS50b1N0cmluZygzNik7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcnxVaW50OEFycmF5fEFycmF5fSBidWZcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0XVxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGEgYmluYXJ5IHN0cmluZyBpLmUuIG9uZSBieXRlIHBlciBjaGFyYWN0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1ZmZlcjJzdHJpbmcoYnVmLCBvZmZzZXQgPSAwLCBsZW5ndGggPSAxZTk5KSB7XG4gIC8vIFRoZSBtYXggbnVtYmVyIG9mIGFyZ3VtZW50cyB2YXJpZXMgYmV0d2VlbiBKUyBlbmdpbmVzIGJ1dCBpdCdzID4zMmsgc28gd2UncmUgc2FmZVxuICBjb25zdCBzbGljZVNpemUgPSA4MTkyO1xuICBjb25zdCBzbGljZXMgPSBbXTtcbiAgY29uc3QgYXJyYXlMZW4gPSBidWYubGVuZ3RoOyAvLyBwcmVzZW50IG9uIFVpbnQ4QXJyYXkvQXJyYXlcbiAgY29uc3QgZW5kID0gTWF0aC5taW4oYXJyYXlMZW4gfHwgYnVmLmJ5dGVMZW5ndGgsIG9mZnNldCArIGxlbmd0aCk7XG4gIGNvbnN0IG5lZWRzU2xpY2luZyA9IGFycmF5TGVuID09IG51bGwgfHwgb2Zmc2V0IHx8IGVuZCA+IHNsaWNlU2l6ZTtcbiAgZm9yICg7IG9mZnNldCA8IGVuZDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xuICAgIHNsaWNlcy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxcbiAgICAgIG5lZWRzU2xpY2luZ1xuICAgICAgICA/IG5ldyBVaW50OEFycmF5KGJ1Ziwgb2Zmc2V0LCBNYXRoLm1pbihzbGljZVNpemUsIGVuZCAtIG9mZnNldCkpXG4gICAgICAgIDogYnVmKSk7XG4gIH1cbiAgcmV0dXJuIHNsaWNlcy5qb2luKCcnKTtcbn1cblxuLyoqXG4gKiBGYXN0ZXIgdGhhbiBidWZmZXIyc3RyaW5nK2J0b2E6IDJ4IGluIENocm9tZSwgMTB4IGluIEZGXG4gKiBAcGFyYW0ge0Jsb2J9IGJsb2JcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0XVxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdXG4gKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IGJhc2U2NC1lbmNvZGVkIGNvbnRlbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBibG9iMmJhc2U2NChibG9iLCBvZmZzZXQgPSAwLCBsZW5ndGggPSAxZTk5KSB7XG4gIGlmIChvZmZzZXQgfHwgbGVuZ3RoIDwgYmxvYi5zaXplKSB7XG4gICAgYmxvYiA9IGJsb2Iuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBsZW5ndGgpO1xuICB9XG4gIHJldHVybiAhYmxvYi5zaXplID8gJycgOiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSByZWFkZXIucmVzdWx0O1xuICAgICAgcmVzb2x2ZShyZXMuc2xpY2UocmVzLmluZGV4T2YoJywnKSArIDEpKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZzJ1aW50OGFycmF5KHN0cikge1xuICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuICBjb25zdCBhcnJheSA9IG5ldyBVaW50OEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBhcnJheVtpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuY29uc3QgVkVSU0lPTl9SRSA9IC9eKC4qPyktKFstLjAtOWEtel0rKXwkL2k7XG5jb25zdCBESUdJVFNfUkUgPSAvXlxcZCskLzsgLy8gdXNpbmcgcmVnZXhwIHRvIGF2b2lkICsnMWUyJyBiZWluZyBwYXJzZWQgYXMgMTAwXG5cbi8qKiBAcmV0dXJuIC0xIHwgMCB8IDEgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlVmVyc2lvbih2ZXIxLCB2ZXIyKSB7XG4gIC8vIFVzZWQgaW4gc2FmZSBjb250ZXh0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICBjb25zdCBbLCBtYWluMSA9IHZlcjEgfHwgJycsIHByZTFdID0gVkVSU0lPTl9SRS5leGVjKHZlcjEpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgY29uc3QgWywgbWFpbjIgPSB2ZXIyIHx8ICcnLCBwcmUyXSA9IFZFUlNJT05fUkUuZXhlYyh2ZXIyKTtcbiAgY29uc3QgZGVsdGEgPSBjb21wYXJlVmVyc2lvbkNodW5rKG1haW4xLCBtYWluMilcbiAgICB8fCAhcHJlMSAtICFwcmUyIC8vIDEuMi4zLXByZS1yZWxlYXNlIGlzIGxlc3MgdGhhbiAxLjIuM1xuICAgIHx8IHByZTEgJiYgY29tcGFyZVZlcnNpb25DaHVuayhwcmUxLCBwcmUyLCB0cnVlKTsgLy8gaWYgcHJlMSBpcyBwcmVzZW50LCBwcmUyIGlzIHRvb1xuICByZXR1cm4gZGVsdGEgPCAwID8gLTEgOiArISFkZWx0YTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZVZlcnNpb25DaHVuayh2ZXIxLCB2ZXIyLCBpc1NlbXZlck1vZGUpIHtcbiAgY29uc3QgcGFydHMxID0gdmVyMS5zcGxpdCgnLicpO1xuICBjb25zdCBwYXJ0czIgPSB2ZXIyLnNwbGl0KCcuJyk7XG4gIGNvbnN0IGxlbjEgPSBwYXJ0czEubGVuZ3RoO1xuICBjb25zdCBsZW4yID0gcGFydHMyLmxlbmd0aDtcbiAgY29uc3QgbGVuID0gKGlzU2VtdmVyTW9kZSA/IE1hdGgubWluIDogTWF0aC5tYXgpKGxlbjEsIGxlbjIpO1xuICBsZXQgZGVsdGE7XG4gIGZvciAobGV0IGkgPSAwOyAhZGVsdGEgJiYgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgY29uc3QgYSA9IHBhcnRzMVtpXTtcbiAgICBjb25zdCBiID0gcGFydHMyW2ldO1xuICAgIGlmIChpc1NlbXZlck1vZGUpIHtcbiAgICAgIGRlbHRhID0gRElHSVRTX1JFLnRlc3QoYSkgJiYgRElHSVRTX1JFLnRlc3QoYilcbiAgICAgICAgPyBhIC0gYlxuICAgICAgICA6IGEgPiBiIHx8IGEgPCBiICYmIC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWx0YSA9IChwYXJzZUludChhLCAxMCkgfHwgMCkgLSAocGFyc2VJbnQoYiwgMTApIHx8IDApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVsdGEgfHwgaXNTZW12ZXJNb2RlICYmIChsZW4xIC0gbGVuMik7XG59XG5cbmNvbnN0IHVuaXRzID0gW1xuICBbJ21pbicsIDYwXSxcbiAgWydoJywgMjRdLFxuICBbJ2QnLCAxMDAwLCAzNjVdLFxuICBbJ3knXSxcbl07XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZShkdXJhdGlvbikge1xuICBkdXJhdGlvbiAvPSA2MCAqIDEwMDA7XG4gIGNvbnN0IHVuaXRJbmZvID0gdW5pdHMuZmluZCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1heCA9IGl0ZW1bMV07XG4gICAgaWYgKCFtYXggfHwgZHVyYXRpb24gPCBtYXgpIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IHN0ZXAgPSBpdGVtWzJdIHx8IG1heDtcbiAgICBkdXJhdGlvbiAvPSBzdGVwO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiBgJHtkdXJhdGlvbiB8IDB9JHt1bml0SW5mb1swXX1gO1xufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0Qnl0ZUxlbmd0aCA9IGxlbiA9PiAoXG4gICFsZW4gPyAnJ1xuICAgIDogbGVuIDwgMTAyNCAmJiBgJHtsZW59IEJgXG4gICAgfHwgbGVuIDwgMTAyNCAqIDEwMjQgJiYgYCR7bGVuID4+IDEwfSBrYCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWJpdHdpc2VcbiAgICB8fCBgJHsrKGxlbiAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMSl9IE1gIC8vIGFsbG93IGZyYWN0aW9ucyBmb3IgbWVnYWJ5dGVzXG4pO1xuXG4vLyBVc2VkIGJ5IGBpbmplY3RlZGBcbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iaikge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqOjpoYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlQXJyYXkoZGF0YSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV07XG59XG5cbmNvbnN0IGJpbmFyeVR5cGVzID0gW1xuICAnYmxvYicsXG4gICdhcnJheWJ1ZmZlcicsXG5dO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RMb2NhbEZpbGUodXJsLCBvcHRpb25zID0ge30pIHtcbiAgLy8gb25seSBHRVQgbWV0aG9kIGlzIGFsbG93ZWQgZm9yIGxvY2FsIGZpbGVzXG4gIC8vIGhlYWRlcnMgaXMgbWVhbmluZ2xlc3NcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCB7IHJlc3BvbnNlVHlwZSB9ID0gb3B0aW9ucztcbiAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICBpZiAoYmluYXJ5VHlwZXMuaW5jbHVkZXMocmVzcG9uc2VUeXBlKSkgeGhyLnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZTtcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgLy8gc3RhdHVzIGZvciBgZmlsZTpgIHByb3RvY29sIHdpbGwgYWx3YXlzIGJlIGAwYFxuICAgICAgcmVzdWx0LnN0YXR1cyA9IHhoci5zdGF0dXMgfHwgMjAwO1xuICAgICAgcmVzdWx0LmRhdGEgPSBiaW5hcnlUeXBlcy5pbmNsdWRlcyhyZXNwb25zZVR5cGUpID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgIGlmIChyZXNwb25zZVR5cGUgPT09ICdqc29uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdC5kYXRhID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIGlnbm9yZSBpbnZhbGlkIEpTT05cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPiAzMDApIHtcbiAgICAgICAgcmVqZWN0KHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB4aHIub25lcnJvciA9ICgpID0+IHtcbiAgICAgIHJlc3VsdC5zdGF0dXMgPSAtMTtcbiAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgIH07XG4gICAgeGhyLnNlbmQoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogRXhjbHVkZXMgYHRleHQvaHRtbGAgdG8gYXZvaWQgTElOSyBoZWFkZXIgdGhhdCBDaHJvbWUgdXNlcyB0byBwcmVmZXRjaCBqcyBhbmQgY3NzLFxuICogYmVjYXVzZSBHcmVhc3lGb3JrJ3MgNDA0IGVycm9yIHJlc3BvbnNlIGNhdXNlcyBDU1AgdmlvbGF0aW9ucyBpbiBjb25zb2xlIG9mIG91ciBwYWdlLlxuICovXG5jb25zdCBGT1JDRURfQUNDRVBUID0ge1xuICAnZ3JlYXN5Zm9yay5vcmcnOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCwgdGV4dC9wbGFpbiwgdGV4dC9jc3MnLFxufTtcblxuZXhwb3J0IGNvbnN0IGlzUmVtb3RlID0gdXJsID0+IHVybFxuICAmJiAhKC9eKGZpbGU6fGRhdGE6fGh0dHBzPzpcXC9cXC8obG9jYWxob3N0fDEyN1xcLjBcXC4wXFwuMVs6L10pKS8udGVzdCh1cmwpKTtcblxuLyoqIEB0eXBlZGVmIHt7XG4gIHVybDogc3RyaW5nLFxuICBzdGF0dXM6IG51bWJlcixcbiAgaGVhZGVyczogSGVhZGVycyxcbiAgZGF0YTogc3RyaW5nfEFycmF5QnVmZmVyfEJsb2J8T2JqZWN0XG59fSBWTVJlcXVlc3RSZXNwb25zZSAqL1xuLyoqXG4gKiBNYWtlIGEgcmVxdWVzdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7UmVxdWVzdEluaXR9IG9wdGlvbnNcbiAqIEByZXR1cm4gUHJvbWlzZTxWTVJlcXVlc3RSZXNwb25zZT5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgLy8gZmV0Y2ggZG9lcyBub3Qgc3VwcG9ydCBsb2NhbCBmaWxlXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnZmlsZTovLycpKSByZXR1cm4gcmVxdWVzdExvY2FsRmlsZSh1cmwsIG9wdGlvbnMpO1xuICBjb25zdCB7IGJvZHksIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSB9ID0gb3B0aW9ucztcbiAgY29uc3QgaXNCb2R5T2JqID0gYm9keSAmJiBib2R5Ojooe30pLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICBjb25zdCBob3N0bmFtZSA9IHVybC5zcGxpdCgnLycsIDMpWzJdO1xuICBjb25zdCBhY2NlcHQgPSBGT1JDRURfQUNDRVBUW2hvc3RuYW1lXTtcbiAgLy8gTm90IHVzaW5nIC4uLnNwcmVhZCBiZWNhdXNlIEJhYmVsIG1pc3Rha2VubHkgYWRkcyBpdHMgcG9seWZpbGwgdG8gaW5qZWN0ZWQtd2ViXG4gIGNvbnN0IGluaXQgPSBPYmplY3QuYXNzaWduKHtcbiAgICBjYWNoZTogaXNSZW1vdGUodXJsKSA/IHVuZGVmaW5lZCA6ICduby1jYWNoZScsXG4gIH0sIG9wdGlvbnMsIHtcbiAgICBib2R5OiBpc0JvZHlPYmogPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHksXG4gICAgaGVhZGVyczogaXNCb2R5T2JqIHx8IGFjY2VwdFxuICAgICAgPyBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICBpc0JvZHlPYmogJiYgeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGFjY2VwdCAmJiB7IGFjY2VwdCB9KVxuICAgICAgOiBoZWFkZXJzLFxuICB9KTtcbiAgY29uc3QgcmVzdWx0ID0geyB1cmwsIHN0YXR1czogLTEgfTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcbiAgICBjb25zdCBsb2FkTWV0aG9kID0ge1xuICAgICAgYXJyYXlidWZmZXI6ICdhcnJheUJ1ZmZlcicsXG4gICAgICBibG9iOiAnYmxvYicsXG4gICAgICBqc29uOiAnanNvbicsXG4gICAgfVtyZXNwb25zZVR5cGVdIHx8ICd0ZXh0JztcbiAgICAvLyBzdGF0dXMgZm9yIGBmaWxlOmAgcHJvdG9jb2wgd2lsbCBhbHdheXMgYmUgYDBgXG4gICAgcmVzdWx0LnN0YXR1cyA9IHJlc3Auc3RhdHVzIHx8IDIwMDtcbiAgICByZXN1bHQuaGVhZGVycyA9IHJlc3AuaGVhZGVycztcbiAgICByZXN1bHQuZGF0YSA9IGF3YWl0IHJlc3BbbG9hZE1ldGhvZF0oKTtcbiAgfSBjYXRjaCB7IC8qIE5PUCAqLyB9XG4gIGlmIChyZXN1bHQuc3RhdHVzIDwgMCB8fCByZXN1bHQuc3RhdHVzID4gMzAwKSB0aHJvdyByZXN1bHQ7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIFVzZWQgYnkgYGluamVjdGVkYFxuY29uc3QgU0lNUExFX1ZBTFVFX1RZUEUgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgc3RyaW5nOiAncycsXG4gIG51bWJlcjogJ24nLFxuICBib29sZWFuOiAnYicsXG59O1xuXG4vLyBVc2VkIGJ5IGBpbmplY3RlZGBcbmV4cG9ydCBmdW5jdGlvbiBkdW1wU2NyaXB0VmFsdWUodmFsdWUsIGpzb25EdW1wID0gSlNPTi5zdHJpbmdpZnkpIHtcbiAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBzaW1wbGUgPSBTSU1QTEVfVkFMVUVfVFlQRVt0eXBlb2YgdmFsdWVdO1xuICAgIHJldHVybiBgJHtzaW1wbGUgfHwgJ28nfSR7c2ltcGxlID8gdmFsdWUgOiBqc29uRHVtcCh2YWx1ZSl9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSU5KRUNUX1BBR0UsIGJyb3dzZXIgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IHNlbmRDbWQgfSBmcm9tICcuL3V0aWwtY29udGVudCc7XG5cbmNvbnN0IGFsbG93ZWQgPSBjcmVhdGVOdWxsT2JqKCk7XG5jb25zdCBkYXRhS2V5TmFtZU1hcCA9IGNyZWF0ZU51bGxPYmooKTtcbmNvbnN0IGhhbmRsZXJzID0gY3JlYXRlTnVsbE9iaigpO1xuY29uc3QgYmdIYW5kbGVycyA9IGNyZWF0ZU51bGxPYmooKTtcbmNvbnN0IG9uU2NyaXB0cyA9IFtdO1xuY29uc3QgYXNzaWduSGFuZGxlcnMgPSAoZGVzdCwgc3JjLCBmb3JjZSkgPT4ge1xuICBpZiAoZm9yY2UpIHtcbiAgICBhc3NpZ24oZGVzdCwgc3JjKTtcbiAgfSBlbHNlIHtcbiAgICBvblNjcmlwdHMucHVzaCgoKSA9PiBhc3NpZ24oZGVzdCwgc3JjKSk7XG4gIH1cbn07XG5jb25zdCBhbGxvd0NtZCA9IChjbWQsIGRhdGFLZXkpID0+IHtcbiAgZW5zdXJlTmVzdGVkUHJvcChhbGxvd2VkLCBjbWQsIGRhdGFLZXksIHRydWUpO1xufTtcbmNvbnN0IFhIUiA9IFsnSHR0cFJlcXVlc3QnLCAnQWJvcnRSZXF1ZXN0J107XG5jb25zdCBBRERfRUxFTUVOVCA9IFsnQWRkRWxlbWVudCddO1xuY29uc3QgVVBEQVRFX1ZBTFVFID0gWydVcGRhdGVWYWx1ZSddO1xuY29uc3QgVEFCX0NMT1NFID0gWydUYWJDbG9zZSddO1xuY29uc3QgR0VUX1JFU09VUkNFID0gWydHZXRSZXNvdXJjZSddO1xuY29uc3QgR01fQ01EID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIGFkZEVsZW1lbnQ6IEFERF9FTEVNRU5ULFxuICBhZGRTdHlsZTogQUREX0VMRU1FTlQsXG4gIGRlbGV0ZVZhbHVlOiBVUERBVEVfVkFMVUUsXG4gIGRvd25sb2FkOiBYSFIsXG4gIGdldFJlc291cmNlVGV4dDogR0VUX1JFU09VUkNFLFxuICBnZXRSZXNvdXJjZVVSTDogR0VUX1JFU09VUkNFLCAvLyBhbHNvIGFsbG93cyB0aGUgbWlzc3BlbGxlZCBHTS5nZXRSZXNvdXJjZVVSTCBmb3IgY29tcGF0aWJpbGl0eVxuICBub3RpZmljYXRpb246IFsnTm90aWZpY2F0aW9uJywgJ1JlbW92ZU5vdGlmaWNhdGlvbiddLFxuICBvcGVuSW5UYWI6IFsnVGFiT3BlbicsIFRBQl9DTE9TRV0sXG4gIHJlZ2lzdGVyTWVudUNvbW1hbmQ6IFsnUmVnaXN0ZXJNZW51J10sXG4gIHNldENsaXBib2FyZDogWydTZXRDbGlwYm9hcmQnXSxcbiAgc2V0VmFsdWU6IFVQREFURV9WQUxVRSxcbiAgdW5yZWdpc3Rlck1lbnVDb21tYW5kOiBbJ1VucmVnaXN0ZXJNZW51J10sXG59O1xuY29uc3QgR1JBTlRfQ01EID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gICdHTS5nZXRSZXNvdXJjZVVybCc6IEdFVF9SRVNPVVJDRSxcbiAgJ0dNLnhtbEh0dHBSZXF1ZXN0JzogWEhSLFxuICAnR01feG1saHR0cFJlcXVlc3QnOiBYSFIsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcXVvdGUtcHJvcHNcbiAgW1dJTkRPV19DTE9TRV06IFRBQl9DTE9TRSxcbiAgW1dJTkRPV19GT0NVU106IFsnVGFiRm9jdXMnXSxcbn07XG5cbmNvbnN0IGJyaWRnZSA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBpZHM6IFtdLCAvLyBhbGwgaWRzIGluY2x1ZGluZyB0aGUgZGlzYWJsZWQgb25lcyBmb3IgU2V0UG9wdXBcbiAgcnVubmluZ0lkczogW10sXG4gIC8vIHVzZXJzY3JpcHRzIHJ1bm5pbmcgaW4gdGhlIGNvbnRlbnQgc2NyaXB0IGNvbnRleHQgYXJlIG1lc3NhZ2VkIHZpYSBpbnZva2VHdWVzdFxuICAvKiogQHR5cGUgTnVtYmVyW10gKi9cbiAgaW52b2thYmxlSWRzOiBbXSxcbiAgZmFpbGVkSWRzOiBbXSxcbiAgY2FjaGU6IGNyZWF0ZU51bGxPYmooKSxcbiAgcGF0aE1hcHM6IGNyZWF0ZU51bGxPYmooKSxcbiAgb25TY3JpcHRzLFxuICBhbGxvd0NtZCxcbiAgLyoqXG4gICAqIFdpdGhvdXQgYGZvcmNlYCBoYW5kbGVycyB3aWxsIGJlIGFkZGVkIG9ubHkgd2hlbiB1c2Vyc2NyaXB0cyBhcmUgYWJvdXQgdG8gYmUgaW5qZWN0ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIE1lc3NhZ2VGcm9tR3Vlc3RIYW5kbGVyPn0gb2JqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKi9cbiAgYWRkSGFuZGxlcnMob2JqLCBmb3JjZSkge1xuICAgIGFzc2lnbkhhbmRsZXJzKGhhbmRsZXJzLCBvYmosIGZvcmNlKTtcbiAgfSxcbiAgLyoqIHsgQ29tbWFuZE5hbWU6IHRydWUgfSB3aWxsIHJlbGF5IHRoZSByZXF1ZXN0IHZpYSBzZW5kQ21kIGFzIGlzLlxuICAgKiBXaXRob3V0IGBmb3JjZWAgaGFuZGxlcnMgd2lsbCBiZSBhZGRlZCBvbmx5IHdoZW4gdXNlcnNjcmlwdHMgYXJlIGFib3V0IHRvIGJlIGluamVjdGVkLiAqL1xuICBhZGRCYWNrZ3JvdW5kSGFuZGxlcnMob2JqLCBmb3JjZSkge1xuICAgIGFzc2lnbkhhbmRsZXJzKGJnSGFuZGxlcnMsIG9iaiwgZm9yY2UpO1xuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtWTUluamVjdGVkU2NyaXB0IHwgVk1TY3JpcHR9IHNjcmlwdFxuICAgKi9cbiAgYWxsb3dTY3JpcHQoeyBkYXRhS2V5LCBtZXRhIH0pIHtcbiAgICBhbGxvd0NtZCgnUnVuJywgZGF0YUtleSk7XG4gICAgZGF0YUtleU5hbWVNYXBbZGF0YUtleV0gPSBtZXRhLm5hbWU7XG4gICAgbWV0YS5ncmFudDo6Zm9yRWFjaChncmFudCA9PiB7XG4gICAgICBjb25zdCBjbWRzID0gR1JBTlRfQ01EW2dyYW50XVxuICAgICAgICB8fCAvXkdNWy5fXS86OnJlZ2V4cFRlc3QoZ3JhbnQpICYmIEdNX0NNRFtncmFudDo6c2xpY2UoMyldO1xuICAgICAgaWYgKGNtZHMpIGNtZHM6OmZvckVhY2goY21kID0+IGFsbG93Q21kKGNtZCwgZGF0YUtleSkpO1xuICAgIH0pO1xuICB9LFxuICAvLyByZWFsbSBpcyBwcm92aWRlZCB3aGVuIGNhbGxlZCBkaXJlY3RseSB2aWEgaW52b2tlSG9zdFxuICBhc3luYyBvbkhhbmRsZSh7IGNtZCwgZGF0YSwgZGF0YUtleSwgbm9kZSB9LCByZWFsbSkge1xuICAgIGNvbnN0IGhhbmRsZSA9IGhhbmRsZXJzW2NtZF07XG4gICAgaWYgKCFoYW5kbGUgfHwgIWFsbG93ZWRbY21kXT8uW2RhdGFLZXldKSB7XG4gICAgICAvLyBUT0RPOiBtYXliZSByZW1vdmUgdGhpcyBjaGVjayBpZiBvdXIgVkFVTFQgaXMgcmVsaWFibGVcbiAgICAgIGxvZygnaW5mbycsIG51bGwsIGBJbnZhbGlkIGNvbW1hbmQ6IFwiJHtjbWR9XCIgZnJvbSBcIiR7ZGF0YUtleU5hbWVNYXBbZGF0YUtleV0gfHwgJz8nfVwiYCk7XG4gICAgfVxuICAgIGNvbnN0IGNhbGxiYWNrSWQgPSBkYXRhICYmIGdldE93blByb3AoZGF0YSwgQ0FMTEJBQ0tfSUQpO1xuICAgIGlmIChjYWxsYmFja0lkKSB7XG4gICAgICBkYXRhID0gZGF0YS5kYXRhO1xuICAgIH1cbiAgICBsZXQgcmVzID0gaGFuZGxlID09PSB0cnVlXG4gICAgICA/IHNlbmRDbWQoY21kLCBkYXRhKVxuICAgICAgOiBub2RlOjpoYW5kbGUoZGF0YSwgcmVhbG0gfHwgSU5KRUNUX1BBR0UpO1xuICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xuICAgICAgcmVzID0gYXdhaXQgcmVzO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2tJZCkge1xuICAgICAgYnJpZGdlLnBvc3QoJ0NhbGxiYWNrJywgeyBpZDogY2FsbGJhY2tJZCwgZGF0YTogcmVzIH0sIHJlYWxtKTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBicmlkZ2U7XG5cbmJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHsgY21kLCBkYXRhIH0sIHNyYykgPT4ge1xuICBjb25zdCBmbiA9IGJnSGFuZGxlcnNbY21kXTtcbiAgaWYgKGZuKSBmbihkYXRhLCBzcmMpO1xufSk7XG5cbi8qKlxuICogQGNhbGxiYWNrIE1lc3NhZ2VGcm9tR3Vlc3RIYW5kbGVyXG4gKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gKiBAcGFyYW0ge0lOSkVDVF9DT05URU5UIHwgSU5KRUNUX1BBR0V9IHJlYWxtIC1cbiAqICAgSU5KRUNUX0NPTlRFTlQgd2hlbiB0aGUgbWVzc2FnZSBpcyBmcm9tIHRoZSBjb250ZW50IHNjcmlwdCBjb250ZXh0LFxuICogICBJTkpFQ1RfUEFHRSBvdGhlcndpc2UuIE1ha2Ugc3VyZSB0byBzcGVjaWZ5IHRoZSBzYW1lIHJlYWxtIHdoZW4gbWVzc2FnaW5nXG4gKiAgIHRoZSByZXN1bHRzIGJhY2sgb3RoZXJ3aXNlIGl0IHdvbid0IHJlYWNoIHRoZSB0YXJnZXQgc2NyaXB0LlxuICovXG4iLCJpbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcblxuYnJpZGdlLm9uU2NyaXB0cy5wdXNoKCgpID0+IHtcbiAgbGV0IHNldENsaXBib2FyZDtcbiAgaWYgKElTX0ZJUkVGT1gpIHtcbiAgICBsZXQgY2xpcGJvYXJkRGF0YTtcbiAgICAvLyBvbGQgRmlyZWZveCBkZWZpbmVzIGl0IG9uIGEgZGlmZmVyZW50IHByb3RvdHlwZSBzbyB3ZSdsbCBqdXN0IGdyYWIgaXQgZnJvbSBkb2N1bWVudCBkaXJlY3RseVxuICAgIGNvbnN0IHsgZXhlY0NvbW1hbmQgfSA9IGRvY3VtZW50O1xuICAgIGNvbnN0IHsgc2V0RGF0YSB9ID0gRGF0YVRyYW5zZmVyW1BST1RPXTtcbiAgICBjb25zdCB7IGdldDogZ2V0Q2xpcGJvYXJkRGF0YSB9ID0gZGVzY3JpYmVQcm9wZXJ0eShDbGlwYm9hcmRFdmVudFtQUk9UT10sICdjbGlwYm9hcmREYXRhJyk7XG4gICAgY29uc3QgeyBwcmV2ZW50RGVmYXVsdCwgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIH0gPSBFdmVudFtQUk9UT107XG4gICAgY29uc3Qgb25Db3B5ID0gZSA9PiB7XG4gICAgICBlOjpzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIGU6OnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlOjpnZXRDbGlwYm9hcmREYXRhKCk6OnNldERhdGEoY2xpcGJvYXJkRGF0YS50eXBlIHx8ICd0ZXh0L3BsYWluJywgY2xpcGJvYXJkRGF0YS5kYXRhKTtcbiAgICB9O1xuICAgIHNldENsaXBib2FyZCA9IHBhcmFtcyA9PiB7XG4gICAgICBjbGlwYm9hcmREYXRhID0gcGFyYW1zO1xuICAgICAgZG9jdW1lbnQ6Om9uKCdjb3B5Jywgb25Db3B5KTtcbiAgICAgIGlmICghZG9jdW1lbnQ6OmV4ZWNDb21tYW5kKCdjb3B5JykgJiYgcHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgICAgbG9nKCd3YXJuJywgbnVsbCwgJ0dNX3NldENsaXBib2FyZCBmYWlsZWQhJyk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudDo6b2ZmKCdjb3B5Jywgb25Db3B5KTtcbiAgICAgIGNsaXBib2FyZERhdGEgPSBudWxsO1xuICAgIH07XG4gIH1cbiAgYnJpZGdlLmFkZEhhbmRsZXJzKHtcbiAgICBTZXRDbGlwYm9hcmQ6IHNldENsaXBib2FyZCB8fCB0cnVlLFxuICB9LCB0cnVlKTtcbn0pO1xuIiwiaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5pbXBvcnQgeyBkZWNvZGVSZXNvdXJjZSwgZWxlbUJ5VGFnLCBtYWtlRWxlbSwgc2VuZENtZCB9IGZyb20gJy4vdXRpbC1jb250ZW50JztcblxuY29uc3QgbWVudXMgPSBjcmVhdGVOdWxsT2JqKCk7XG5sZXQgc2V0UG9wdXBUaHJvdHRsZTtcbmxldCBpc1BvcHVwU2hvd247XG5cbmJyaWRnZS5vblNjcmlwdHMucHVzaChpbmplY3Rpb24gPT4ge1xuICBpc1BvcHVwU2hvd24gPSBpbmplY3Rpb24uaXNQb3B1cFNob3duO1xufSk7XG5cbmJyaWRnZS5hZGRCYWNrZ3JvdW5kSGFuZGxlcnMoe1xuICBQb3B1cFNob3duKHN0YXRlKSB7XG4gICAgaXNQb3B1cFNob3duID0gc3RhdGU7XG4gICAgc2VuZFNldFBvcHVwKCk7XG4gIH0sXG59LCB0cnVlKTtcblxuYnJpZGdlLmFkZEhhbmRsZXJzKHtcbiAgLyoqIEB0aGlzIHtOb2RlfSAqL1xuICBBZGRFbGVtZW50KHsgdGFnLCBhdHRycywgY2JJZCB9LCByZWFsbSkge1xuICAgIGxldCBlbDtcbiAgICBsZXQgcmVzO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzXG4gICAgICAgIHx8IC9eKHNjcmlwdHxzdHlsZXxsaW5rfG1ldGEpJC9pOjpyZWdleHBUZXN0KHRhZykgJiYgZWxlbUJ5VGFnKCdoZWFkJylcbiAgICAgICAgfHwgZWxlbUJ5VGFnKCdib2R5JylcbiAgICAgICAgfHwgZWxlbUJ5VGFnKCcqJyk7XG4gICAgICBlbCA9IG1ha2VFbGVtKHRhZywgYXR0cnMpO1xuICAgICAgcGFyZW50OjphcHBlbmRDaGlsZChlbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gQSBwYWdlLW1vZGUgdXNlcnNjcmlwdCBjYW4ndCBjYXRjaCBET00gZXJyb3JzIGluIGEgY29udGVudCBzY3JpcHQgc28gd2UgcGFzcyBpdCBleHBsaWNpdGx5XG4gICAgICAvLyBUT0RPOiBtYXliZSBtb3ZlIHRyeS9jYXRjaCB0byBicmlkZ2Uub25IYW5kbGUgYW5kIHVzZSBicmlkZ2Uuc2VuZFN5bmMgaW4gYWxsIHdlYiBjb21tYW5kc1xuICAgICAgcmVzID0gW2Ake2V9YCwgZS5zdGFja107XG4gICAgfVxuICAgIGJyaWRnZS5wb3N0KCdDYWxsYmFjaycsIHsgaWQ6IGNiSWQsIGRhdGE6IHJlcyB9LCByZWFsbSwgZWwpO1xuICB9LFxuXG4gIEdldFJlc291cmNlKHsgaWQsIGlzQmxvYiwga2V5IH0pIHtcbiAgICBjb25zdCBwYXRoID0gYnJpZGdlLnBhdGhNYXBzW2lkXT8uW2tleV0gfHwga2V5O1xuICAgIGNvbnN0IHJhdyA9IGJyaWRnZS5jYWNoZVtwYXRoXTtcbiAgICByZXR1cm4gcmF3ID8gZGVjb2RlUmVzb3VyY2UocmF3LCBpc0Jsb2IpIDogdHJ1ZTtcbiAgfSxcblxuICBSZWdpc3Rlck1lbnUoeyBpZCwgY2FwIH0pIHtcbiAgICBpZiAoSVNfVE9QKSB7XG4gICAgICBlbnN1cmVOZXN0ZWRQcm9wKG1lbnVzLCBpZCwgY2FwLCAxKTtcbiAgICAgIHNlbmRTZXRQb3B1cCh0cnVlKTtcbiAgICB9XG4gIH0sXG5cbiAgVW5yZWdpc3Rlck1lbnUoeyBpZCwgY2FwIH0pIHtcbiAgICBpZiAoSVNfVE9QKSB7XG4gICAgICBkZWxldGUgbWVudXNbaWRdPy5bY2FwXTtcbiAgICAgIHNlbmRTZXRQb3B1cCh0cnVlKTtcbiAgICB9XG4gIH0sXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRTZXRQb3B1cChpc0RlbGF5ZWQpIHtcbiAgaWYgKGlzUG9wdXBTaG93bikge1xuICAgIGlmIChpc0RlbGF5ZWQpIHtcbiAgICAgIGlmIChzZXRQb3B1cFRocm90dGxlKSByZXR1cm47XG4gICAgICAvLyBQcmV2ZW50aW5nIGZsaWNrZXIgaW4gcG9wdXAgd2hlbiBzY3JpcHRzIHJlLXJlZ2lzdGVyIG1lbnVzXG4gICAgICBzZXRQb3B1cFRocm90dGxlID0gc2VuZENtZCgnU2V0VGltZW91dCcsIDApO1xuICAgICAgYXdhaXQgc2V0UG9wdXBUaHJvdHRsZTtcbiAgICAgIHNldFBvcHVwVGhyb3R0bGUgPSBudWxsO1xuICAgIH1cbiAgICBzZW5kQ21kKCdTZXRQb3B1cCcsIHsgbWVudXMsIF9fcHJvdG9fXzogbnVsbCB9OjpwaWNrSW50b1RoaXMoYnJpZGdlLCBbXG4gICAgICAnaWRzJyxcbiAgICAgICdpbmplY3RJbnRvJyxcbiAgICAgICdydW5uaW5nSWRzJyxcbiAgICAgICdmYWlsZWRJZHMnLFxuICAgIF0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5pbXBvcnQgJy4vY2xpcGJvYXJkJztcbmltcG9ydCB7IHNlbmRTZXRQb3B1cCB9IGZyb20gJy4vZ20tYXBpLWNvbnRlbnQnO1xuaW1wb3J0IHsgaW5qZWN0UGFnZVNhbmRib3gsIGluamVjdFNjcmlwdHMgfSBmcm9tICcuL2luamVjdCc7XG5pbXBvcnQgJy4vbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgJy4vcmVxdWVzdHMnO1xuaW1wb3J0ICcuL3RhYnMnO1xuaW1wb3J0IHsgc2VuZENtZCB9IGZyb20gJy4vdXRpbC1jb250ZW50JztcbmltcG9ydCB7IGlzRW1wdHksIElOSkVDVF9DT05URU5UIH0gZnJvbSAnLi4vdXRpbCc7XG5cbmNvbnN0IHsgaW52b2thYmxlSWRzLCBydW5uaW5nSWRzIH0gPSBicmlkZ2U7XG5jb25zdCByZXNvbHZlZFByb21pc2UgPSBwcm9taXNlUmVzb2x2ZSgpO1xubGV0IGJhZGdlUHJvbWlzZTtcbmxldCBudW1CYWRnZXNTZW50ID0gMDtcbmxldCBiZkNhY2hlV2lyZWQ7XG5cbi8vIE1ha2Ugc3VyZSB0byBjYWxsIG9iajo6bWV0aG9kKCkgaW4gY29kZSB0aGF0IG1heSBydW4gYWZ0ZXIgSU5KRUNUX0NPTlRFTlQgdXNlcnNjcmlwdHNcbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGNvbnRlbnRJZCA9IGdldFVuaXFJZFNhZmUoKTtcbiAgY29uc3Qgd2ViSWQgPSBnZXRVbmlxSWRTYWZlKCk7XG4gIGNvbnN0IHhockRhdGEgPSBnZXRYaHJJbmplY3Rpb24oKTtcbiAgY29uc3QgcGFnZUluZm8gPSAheGhyRGF0YT8uZm9yY2VDb250ZW50ICYmIHtcbiAgICAvKiBJbiBGRjkzIHNlbmRlci51cmwgaXMgd3Jvbmc6IGh0dHBzOi8vYnVnemlsLmxhLzE3MzQ5ODQsXG4gICAgICogaW4gQ2hyb21lIHNlbmRlci51cmwgaXMgb2ssIGJ1dCBsb2NhdGlvbi5ocmVmIGlzIHdyb25nIGZvciB0ZXh0IHNlbGVjdGlvbiBVUkxzICM6fjp0ZXh0PSAqL1xuICAgIHVybDogSVNfRklSRUZPWCAmJiBnbG9iYWwubG9jYXRpb24uaHJlZixcbiAgICAvLyBYTUwgZG9jdW1lbnQncyBhcHBlYXJhbmNlIGJyZWFrcyB3aGVuIHNjcmlwdCBlbGVtZW50cyBhcmUgYWRkZWRcbiAgICBmb3JjZUNvbnRlbnQ6IGRvY3VtZW50IGluc3RhbmNlb2YgWE1MRG9jdW1lbnRcbiAgICAgIHx8ICFpbmplY3RQYWdlU2FuZGJveChjb250ZW50SWQsIHdlYklkKSxcbiAgfTtcbiAgY29uc3QgZGF0YVByb21pc2UgPSAheGhyRGF0YSAmJiBzZW5kQ21kKCdHZXRJbmplY3RlZCcsIHBhZ2VJbmZvLCB7IHJldHJ5OiB0cnVlIH0pO1xuICAvLyBkZXRlY3RpbmcgaWYgYnJvd3Nlci5jb250ZW50U2NyaXB0cyBpcyB1c2FibGUsIGl0IHdhcyBhZGRlZCBpbiBGRjU5IGFzIHdlbGwgYXMgY29tcG9zZWRQYXRoXG4gIGNvbnN0IGRhdGEgPSB4aHJEYXRhIHx8IChcbiAgICBJU19GSVJFRk9YICYmIEV2ZW50W1BST1RPXS5jb21wb3NlZFBhdGhcbiAgICAgID8gYXdhaXQgZ2V0RGF0YUZGKGRhdGFQcm9taXNlKVxuICAgICAgOiBhd2FpdCBkYXRhUHJvbWlzZVxuICApO1xuICBjb25zdCB7IGFsbG93Q21kIH0gPSBicmlkZ2U7XG4gIGFsbG93Q21kKCdWYXVsdElkJywgY29udGVudElkKTtcbiAgYnJpZGdlOjpwaWNrSW50b1RoaXMoZGF0YSwgW1xuICAgICdpZHMnLFxuICAgICdpbmplY3RJbnRvJyxcbiAgXSk7XG4gIGlmIChkYXRhLmV4cG9zZSkge1xuICAgIGFsbG93Q21kKCdHZXRTY3JpcHRWZXInLCBjb250ZW50SWQpO1xuICAgIGJyaWRnZS5hZGRIYW5kbGVycyh7IEdldFNjcmlwdFZlcjogdHJ1ZSB9LCB0cnVlKTtcbiAgICBicmlkZ2UucG9zdCgnRXhwb3NlJyk7XG4gIH1cbiAgaWYgKGRhdGEuc2NyaXB0cykge1xuICAgIGJyaWRnZS5vblNjcmlwdHMuZm9yRWFjaChmbiA9PiBmbihkYXRhKSk7XG4gICAgYWxsb3dDbWQoJ1NldFRpbWVvdXQnLCBjb250ZW50SWQpO1xuICAgIGlmIChJU19GSVJFRk9YKSBhbGxvd0NtZCgnSW5qZWN0TGlzdCcsIGNvbnRlbnRJZCk7XG4gICAgYXdhaXQgaW5qZWN0U2NyaXB0cyhjb250ZW50SWQsIHdlYklkLCBkYXRhKTtcbiAgfVxuICBicmlkZ2Uub25TY3JpcHRzID0gbnVsbDtcbiAgc2VuZFNldFBvcHVwKCk7XG59XG5cbmJyaWRnZS5hZGRCYWNrZ3JvdW5kSGFuZGxlcnMoe1xuICBDb21tYW5kKGRhdGEpIHtcbiAgICBjb25zdCByZWFsbSA9IGludm9rYWJsZUlkczo6aW5jbHVkZXMoZGF0YS5pZCkgJiYgSU5KRUNUX0NPTlRFTlQ7XG4gICAgYnJpZGdlLnBvc3QoJ0NvbW1hbmQnLCBkYXRhLCByZWFsbSk7XG4gIH0sXG4gIFVwZGF0ZWRWYWx1ZXMoZGF0YSkge1xuICAgIGNvbnN0IGRhdGFQYWdlID0gY3JlYXRlTnVsbE9iaigpO1xuICAgIGNvbnN0IGRhdGFDb250ZW50ID0gY3JlYXRlTnVsbE9iaigpO1xuICAgIG9iamVjdEtleXMoZGF0YSk6OmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAoaW52b2thYmxlSWRzOjppbmNsdWRlcygraWQpID8gZGF0YUNvbnRlbnQgOiBkYXRhUGFnZSlbaWRdID0gZGF0YVtpZF07XG4gICAgfSk7XG4gICAgaWYgKCFpc0VtcHR5KGRhdGFQYWdlKSkgYnJpZGdlLnBvc3QoJ1VwZGF0ZWRWYWx1ZXMnLCBkYXRhUGFnZSk7XG4gICAgaWYgKCFpc0VtcHR5KGRhdGFDb250ZW50KSkgYnJpZGdlLnBvc3QoJ1VwZGF0ZWRWYWx1ZXMnLCBkYXRhQ29udGVudCwgSU5KRUNUX0NPTlRFTlQpO1xuICB9LFxufSk7XG5cbmJyaWRnZS5hZGRIYW5kbGVycyh7XG4gIFJ1bihpZCwgcmVhbG0pIHtcbiAgICBydW5uaW5nSWRzOjpwdXNoKGlkKTtcbiAgICBicmlkZ2UuaWRzOjpwdXNoKGlkKTtcbiAgICBpZiAocmVhbG0gPT09IElOSkVDVF9DT05URU5UKSB7XG4gICAgICBpbnZva2FibGVJZHM6OnB1c2goaWQpO1xuICAgIH1cbiAgICBpZiAoIWJhZGdlUHJvbWlzZSkge1xuICAgICAgYmFkZ2VQcm9taXNlID0gcmVzb2x2ZWRQcm9taXNlOjp0aGVuKHRocm90dGxlZFNldEJhZGdlKTtcbiAgICB9XG4gICAgaWYgKCFiZkNhY2hlV2lyZWQpIHtcbiAgICAgIGJmQ2FjaGVXaXJlZCA9IHRydWU7XG4gICAgICB3aW5kb3c6Om9uKCdwYWdlc2hvdycsIGV2dCA9PiB7XG4gICAgICAgIC8vIGlzVHJ1c3RlZCBpcyBgdW5mb3JnZWFibGVgIHBlciBET00gc3BlYyBzbyB3ZSBkb24ndCBuZWVkIHRvIHNhZmVndWFyZCBpdHMgZ2V0dGVyXG4gICAgICAgIGlmIChldnQuaXNUcnVzdGVkICYmIGV2dC5wZXJzaXN0ZWQpIHtcbiAgICAgICAgICBzZW5kQ21kKCdTZXRCYWRnZScsIHJ1bm5pbmdJZHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIFNldFRpbWVvdXQ6IHRydWUsXG4gIFRhYkZvY3VzOiB0cnVlLFxuICBVcGRhdGVWYWx1ZTogdHJ1ZSxcbn0pO1xuXG5pbml0KCkuY2F0Y2goSVNfRklSRUZPWCAmJiBjb25zb2xlLmVycm9yKTsgLy8gRmlyZWZveCBjYW4ndCBzaG93IGV4Y2VwdGlvbnMgaW4gY29udGVudCBzY3JpcHRzXG5cbmZ1bmN0aW9uIHRocm90dGxlZFNldEJhZGdlKCkge1xuICBjb25zdCBudW0gPSBydW5uaW5nSWRzLmxlbmd0aDtcbiAgaWYgKG51bUJhZGdlc1NlbnQgPCBudW0pIHtcbiAgICBudW1CYWRnZXNTZW50ID0gbnVtO1xuICAgIHJldHVybiBzZW5kQ21kKCdTZXRCYWRnZScsIHJ1bm5pbmdJZHMpOjp0aGVuKCgpID0+IHtcbiAgICAgIGJhZGdlUHJvbWlzZSA9IHRocm90dGxlZFNldEJhZGdlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YUZGKHZpYU1lc3NhZ2luZykge1xuICAvLyBJbiBGaXJlZm94IHdlIHNldCBkYXRhIG9uIGdsb2JhbCBgdGhpc2Agd2hpY2ggaXMgbm90IGVxdWFsIHRvIGB3aW5kb3dgXG4gIGNvbnN0IGRhdGEgPSBnbG9iYWwudm1EYXRhIHx8IGF3YWl0IFByb21pc2VTYWZlLnJhY2UoW1xuICAgIG5ldyBQcm9taXNlU2FmZShyZXNvbHZlID0+IHsgZ2xvYmFsLnZtUmVzb2x2ZSA9IHJlc29sdmU7IH0pLFxuICAgIHZpYU1lc3NhZ2luZyxcbiAgXSk7XG4gIGRlbGV0ZSBnbG9iYWwudm1SZXNvbHZlO1xuICBkZWxldGUgZ2xvYmFsLnZtRGF0YTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGdldFhockluamVjdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBxdW90ZWRLZXkgPSBgXCIke3Byb2Nlc3MuZW52LklOSVRfRlVOQ19OQU1FfVwiYDtcbiAgICAvLyBBY2Nlc3NpbmcgZG9jdW1lbnQuY29va2llIG1heSB0aHJvdyBkdWUgdG8gQ1NQIHNhbmRib3hcbiAgICBjb25zdCBjb29raWVWYWx1ZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChgJHtxdW90ZWRLZXl9PWApWzFdO1xuICAgIGNvbnN0IGJsb2JJZCA9IGNvb2tpZVZhbHVlICYmIGNvb2tpZVZhbHVlLnNwbGl0KCc7JywgMSlbMF07XG4gICAgaWYgKGJsb2JJZCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7cXVvdGVkS2V5fT0wOyBtYXgtYWdlPTA7IFNhbWVTaXRlPUxheGA7IC8vIHRoaXMgcmVtb3ZlcyBvdXIgY29va2llXG4gICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIGNvbnN0IHVybCA9IGBibG9iOiR7Vk1fVVVJRH0ke2Jsb2JJZH1gO1xuICAgICAgeGhyLm9wZW4oJ2dldCcsIHVybCwgZmFsc2UpOyAvLyBgZmFsc2VgID0gc3luY2hyb25vdXNcbiAgICAgIHhoci5zZW5kKCk7XG4gICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xuICAgIH1cbiAgfSBjYXRjaCB7IC8qIE5PUCAqLyB9XG59XG4iLCJpbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcbmltcG9ydCB7IGVsZW1CeVRhZywgbWFrZUVsZW0sIG9uRWxlbWVudCwgc2VuZENtZCB9IGZyb20gJy4vdXRpbC1jb250ZW50JztcbmltcG9ydCB7XG4gIGJpbmRFdmVudHMsIGZpcmVCcmlkZ2VFdmVudCxcbiAgSU5KRUNUX0NPTlRFTlQsIElOSkVDVF9NQVBQSU5HLCBJTkpFQ1RfUEFHRSxcbn0gZnJvbSAnLi4vdXRpbCc7XG5cbi8qIEluIEZGLCBjb250ZW50IHNjcmlwdHMgcnVubmluZyBpbiBhIHNhbWUtb3JpZ2luIGZyYW1lIGNhbm5vdCBkaXJlY3RseSBjYWxsIHBhcmVudCdzIGZ1bmN0aW9uc1xuICogc28gd2UnbGwgdXNlIHRoZSBleHRlbnNpb24ncyBVVUlELCB3aGljaCBpcyB1bmlxdWUgcGVyIGNvbXB1dGVyIGluIEZGLCBmb3IgbWVzc2FnZXNcbiAqIGxpa2UgVkFVTFRfV1JJVEVSIHRvIGF2b2lkIGludGVyY2VwdGlvbiBieSBzaXRlcyB0aGF0IGNhbiBhZGQgbGlzdGVuZXJzIGZvciBhbGwgb2Ygb3VyXG4gKiBJTklUX0ZVTkNfTkFNRSBpZHMgZXZlbiB0aG91Z2ggd2UgY2hhbmdlIGl0IG5vdyB3aXRoIGVhY2ggcmVsZWFzZS4gKi9cbmNvbnN0IElOSVRfRlVOQ19OQU1FID0gcHJvY2Vzcy5lbnYuSU5JVF9GVU5DX05BTUU7XG5jb25zdCBWQVVMVF9XUklURVIgPSBgJHtJU19GSVJFRk9YID8gVk1fVVVJRCA6IElOSVRfRlVOQ19OQU1FfVZXYDtcbmNvbnN0IFZBVUxUX1dSSVRFUl9BQ0sgPSBgJHtWQVVMVF9XUklURVJ9K2A7XG5sZXQgY29udExpc3RzO1xubGV0IHBnTGlzdHM7XG4vKiogQHR5cGUge09iamVjdDxzdHJpbmcsVk1JbmplY3Rpb25SZWFsbT59ICovXG5sZXQgcmVhbG1zO1xuLyoqIEB0eXBlIGJvb2xlYW4gKi9cbmxldCBwYWdlSW5qZWN0YWJsZTtcbmxldCBmcmFtZUV2ZW50V25kO1xuLyoqIEB0eXBlIFNoYWRvd1Jvb3QgKi9cbmxldCBpbmplY3RlZFJvb3Q7XG5cbi8vIGh0dHBzOi8vYnVnemlsLmxhLzE0MDg5OTZcbmxldCBWTUluaXRJbmplY3Rpb24gPSB3aW5kb3dbSU5JVF9GVU5DX05BTUVdO1xuLyoqIEF2b2lkIHJ1bm5pbmcgcmVwZWF0ZWRseSBkdWUgdG8gbmV3IGBkb2N1bWVudEVsZW1lbnRgIG9yIHdpdGggZGVjbGFyYXRpdmVDb250ZW50IGluIENocm9tZS5cbiAqIFRoZSBwcm9wJ3MgbW9kZSBpcyBvdmVycmlkZGVuIHRvIGJlIHVuZm9yZ2VhYmxlIGJ5IGEgdXNlcnNjcmlwdCBpbiBjb250ZW50IG1vZGUuICovXG5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csIElOSVRfRlVOQ19OQU1FLCB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgdmFsdWU6IDEsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG59KTtcbmlmIChJU19GSVJFRk9YKSB7XG4gIHdpbmRvdzo6b24oVkFVTFRfV1JJVEVSLCBldnQgPT4ge1xuICAgIGV2dDo6c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCFmcmFtZUV2ZW50V25kKSB7XG4gICAgICAvLyBzZXR1cFZhdWx0SWQncyBmaXJzdCBldmVudCBpcyB0aGUgZnJhbWUncyBjb250ZW50V2luZG93XG4gICAgICBmcmFtZUV2ZW50V25kID0gZXZ0OjpnZXRSZWxhdGVkVGFyZ2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNldHVwVmF1bHRJZCdzIHNlY29uZCBldmVudCBpcyB0aGUgdmF1bHRJZFxuICAgICAgdGVsbEJyaWRnZVRvV3JpdGVWYXVsdChldnQ6OmdldERldGFpbCgpLCBmcmFtZUV2ZW50V25kKTtcbiAgICAgIGZyYW1lRXZlbnRXbmQ6OmZpcmUobmV3IEN1c3RvbUV2ZW50U2FmZShWQVVMVF9XUklURVJfQUNLKSk7XG4gICAgICBmcmFtZUV2ZW50V25kID0gbnVsbDtcbiAgICB9XG4gIH0sIHRydWUpO1xufSBlbHNlIHtcbiAgc2FmZURlZmluZVByb3BlcnR5KGdsb2JhbCwgVkFVTFRfV1JJVEVSLCB7XG4gICAgdmFsdWU6IHRlbGxCcmlkZ2VUb1dyaXRlVmF1bHQsXG4gIH0pO1xufVxuXG5icmlkZ2UuYWRkSGFuZGxlcnMoe1xuICAvKipcbiAgICogRkYgYnVnIHdvcmthcm91bmQgdG8gZW5hYmxlIHByb2Nlc3Npbmcgb2Ygc291cmNlVVJMIGluIGluamVjdGVkIHBhZ2Ugc2NyaXB0c1xuICAgKi9cbiAgSW5qZWN0TGlzdDogSVNfRklSRUZPWCAmJiBpbmplY3RMaXN0LFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RQYWdlU2FuZGJveChjb250ZW50SWQsIHdlYklkKSB7XG4gIGNvbnN0IHsgY2xvbmVJbnRvIH0gPSBnbG9iYWw7XG4gIGNvbnN0IHZhdWx0SWQgPSBnZXRVbmlxSWRTYWZlKCk7XG4gIGNvbnN0IGhhbmRzaGFrZUlkID0gZ2V0VW5pcUlkU2FmZSgpO1xuICBpZiAodXNlT3BlbmVyKHdpbmRvdy5vcGVuZXIpIHx8IHVzZU9wZW5lcighSVNfVE9QICYmIHdpbmRvdy5wYXJlbnQpKSB7XG4gICAgc3RhcnRIYW5kc2hha2UoKTtcbiAgfSBlbHNlIHtcbiAgICAvKiBTaXRlcyBjYW4gZG8gd2luZG93Lm9wZW4oc2FtZU9yaWdpblVybCwnaWZyYW1lTmFtZU9yTmV3V2luZG93TmFtZScpLm9wZW5lcj1udWxsLCBzcG9vZiBKU1xuICAgICAqIGVudmlyb25tZW50IGFuZCBlYXNpbHkgaGFjayBpbnRvIG91ciBjb21tdW5pY2F0aW9uIGNoYW5uZWwgYmVmb3JlIG91ciBjb250ZW50IHNjcmlwdHMgcnVuLlxuICAgICAqIENvbnRlbnQgc2NyaXB0cyB3aWxsIHNlZSBgZG9jdW1lbnQub3BlbmVyID0gbnVsbGAsIG5vdCB0aGUgb3JpZ2luYWwgb3BlbmVyLCBzbyB3ZSBoYXZlXG4gICAgICogdG8gdXNlIGFuIGlmcmFtZSB0byBleHRyYWN0IHRoZSBzYWZlIGdsb2JhbHMuIERldGVjdGlvbiB2aWEgZG9jdW1lbnQucmVmZXJyZXIgd29uJ3Qgd29ya1xuICAgICAqIGlzIGl0IGNhbiBiZSBlbXB0aWVkIGJ5IHRoZSBvcGVuZXIgcGFnZSwgdG9vLiAqL1xuICAgIGluamVjdCh7IGNvZGU6IGBwYXJlbnRbXCIke3ZhdWx0SWR9XCJdID0gW3RoaXNdYCB9LCAoKSA9PiB7XG4gICAgICAvLyBTa2lwcGluZyBwYWdlIGluamVjdGlvbiBpbiBGRiBpZiBvdXIgc2NyaXB0IGVsZW1lbnQgd2FzIGJsb2NrZWQgYnkgc2l0ZSdzIENTUFxuICAgICAgaWYgKCFJU19GSVJFRk9YIHx8IHdpbmRvdy53cmFwcGVkSlNPYmplY3RbdmF1bHRJZF0pIHtcbiAgICAgICAgc3RhcnRIYW5kc2hha2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcGFnZUluamVjdGFibGU7XG5cbiAgZnVuY3Rpb24gdXNlT3BlbmVyKG9wZW5lcikge1xuICAgIGxldCBvaztcbiAgICBpZiAob3BlbmVyICYmIGRlc2NyaWJlUHJvcGVydHkob3BlbmVyLmxvY2F0aW9uLCAnaHJlZicpLmdldCkge1xuICAgICAgLy8gVE9ETzogVXNlIGEgc2luZ2xlIFBvaW50ZXJFdmVudCB3aXRoIGBwb2ludGVyVHlwZTogdmF1bHRJZGAgd2hlbiBzdHJpY3RfbWluX3ZlcnNpb24gPj0gNTlcbiAgICAgIGlmIChJU19GSVJFRk9YKSB7XG4gICAgICAgIGNvbnN0IHNldE9rID0gKCkgPT4geyBvayA9IHRydWU7IH07XG4gICAgICAgIHdpbmRvdzo6b24oVkFVTFRfV1JJVEVSX0FDSywgc2V0T2ssIHRydWUpO1xuICAgICAgICBvcGVuZXI6OmZpcmUobmV3IE1vdXNlRXZlbnRTYWZlKFZBVUxUX1dSSVRFUiwgeyByZWxhdGVkVGFyZ2V0OiB3aW5kb3cgfSkpO1xuICAgICAgICBvcGVuZXI6OmZpcmUobmV3IEN1c3RvbUV2ZW50U2FmZShWQVVMVF9XUklURVIsIHsgZGV0YWlsOiB2YXVsdElkIH0pKTtcbiAgICAgICAgd2luZG93OjpvZmYoVkFVTFRfV1JJVEVSX0FDSywgc2V0T2ssIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2sgPSBvcGVuZXJbVkFVTFRfV1JJVEVSXTtcbiAgICAgICAgaWYgKG9rKSBvayh2YXVsdElkLCB3aW5kb3cpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2s7XG4gIH1cbiAgLyoqIEEgcGFnZSBjYW4gcmVhZCBvdXIgc2NyaXB0J3MgdGV4dENvbnRlbnQgaW4gYSBzYW1lLW9yaWdpbiBpZnJhbWUgdmlhIERPTU5vZGVSZW1vdmVkIGV2ZW50LlxuICAgKiBEaXJlY3RseSBwcmV2ZW50aW5nIGl0IHdvdWxkIHJlcXVpcmUgcmVkZWZpbmluZyB+MjAgRE9NIG1ldGhvZHMgaW4gdGhlIHBhcmVudC5cbiAgICogSW5zdGVhZCwgd2UnbGwgc2VuZCB0aGUgaWRzIHZpYSBhIHRlbXBvcmFyeSBoYW5kc2hha2VJZCBldmVudCwgdG8gd2hpY2ggdGhlIHdlYi1icmlkZ2VcbiAgICogd2lsbCBsaXN0ZW4gb25seSBkdXJpbmcgaXRzIGluaXRpYWwgcGhhc2UgdXNpbmcgdmF1bHQtcHJvdGVjdGVkIERPTSBtZXRob2RzLlxuICAgKiBUT0RPOiBzaW1wbGlmeSB0aGlzIHdoZW4gc3RyaWN0X21pbl92ZXJzaW9uID49IDYzIChhdHRhY2hTaGFkb3cgaW4gRkYpICovXG4gIGZ1bmN0aW9uIHN0YXJ0SGFuZHNoYWtlKCkge1xuICAgIC8qIFdpdGggYG9uY2VgIHRoZSBsaXN0ZW5lciBpcyByZW1vdmVkIGJlZm9yZSBET01Ob2RlSW5zZXJ0ZWQgaXMgZGlzcGF0Y2hlZCBieSBhcHBlbmRDaGlsZCxcbiAgICAgKiBvdGhlcndpc2UgYSBzYW1lLW9yaWdpbiBwYXJlbnQgcGFnZSBjb3VsZCB1c2UgaXQgdG8gc3Bvb2YgdGhlIGhhbmRzaGFrZS4gKi9cbiAgICB3aW5kb3c6Om9uKGhhbmRzaGFrZUlkLCBoYW5kc2hha2VyLCB7IGNhcHR1cmU6IHRydWUsIG9uY2U6IHRydWUgfSk7XG4gICAgaW5qZWN0KHtcbiAgICAgIGNvZGU6IGAoJHtWTUluaXRJbmplY3Rpb259KCR7SVNfRklSRUZPWH0sJyR7aGFuZHNoYWtlSWR9JywnJHt2YXVsdElkfScpKSgpYFxuICAgICAgICArIGBcXG4vLyMgc291cmNlVVJMPSR7Vk1fVVVJRH1zYW5kYm94L2luamVjdGVkLXdlYi5qc2AsXG4gICAgfSk7XG4gICAgLy8gQ2xlYW4gdXAgaW4gY2FzZSBDU1AgcHJldmVudGVkIHRoZSBzY3JpcHQgZnJvbSBydW5uaW5nXG4gICAgd2luZG93OjpvZmYoaGFuZHNoYWtlSWQsIGhhbmRzaGFrZXIsIHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRzaGFrZXIoZXZ0KSB7XG4gICAgcGFnZUluamVjdGFibGUgPSB0cnVlO1xuICAgIGV2dDo6c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgYmluZEV2ZW50cyhjb250ZW50SWQsIHdlYklkLCBicmlkZ2UsIGNsb25lSW50byk7XG4gICAgZmlyZUJyaWRnZUV2ZW50KGhhbmRzaGFrZUlkICsgcHJvY2Vzcy5lbnYuSEFORFNIQUtFX0FDSywgW3dlYklkLCBjb250ZW50SWRdLCBjbG9uZUludG8pO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRJZFxuICogQHBhcmFtIHtzdHJpbmd9IHdlYklkXG4gKiBAcGFyYW0ge1ZNR2V0SW5qZWN0ZWREYXRhfSBkYXRhXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmplY3RTY3JpcHRzKGNvbnRlbnRJZCwgd2ViSWQsIGRhdGEpIHtcbiAgY29uc3QgeyBoYXNNb3JlLCBpbmZvIH0gPSBkYXRhO1xuICByZWFsbXMgPSB7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIC8qKiBAbmFtZXNwYWNlIFZNSW5qZWN0aW9uUmVhbG0gKi9cbiAgICBbSU5KRUNUX0NPTlRFTlRdOiB7XG4gICAgICBpbmplY3RhYmxlOiB0cnVlLFxuICAgICAgLyoqIEBuYW1lc3BhY2UgVk1SdW5BdExpc3RzICovXG4gICAgICBsaXN0czogY29udExpc3RzID0geyBzdGFydDogW10sIGJvZHk6IFtdLCBlbmQ6IFtdLCBpZGxlOiBbXSB9LFxuICAgICAgaXM6IDAsXG4gICAgICBpbmZvLFxuICAgIH0sXG4gICAgW0lOSkVDVF9QQUdFXToge1xuICAgICAgaW5qZWN0YWJsZTogcGFnZUluamVjdGFibGUsXG4gICAgICBsaXN0czogcGdMaXN0cyA9IHsgc3RhcnQ6IFtdLCBib2R5OiBbXSwgZW5kOiBbXSwgaWRsZTogW10gfSxcbiAgICAgIGlzOiAwLFxuICAgICAgaW5mbyxcbiAgICB9LFxuICB9O1xuICBhc3NpZ24oYnJpZGdlLmNhY2hlLCBkYXRhLmNhY2hlKTtcbiAgY29uc3QgZmVlZGJhY2sgPSBkYXRhLnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBzY3JpcHQucHJvcHM7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgY29uc3QgcmVhbG0gPSBJTkpFQ1RfTUFQUElOR1tzY3JpcHQuaW5qZWN0SW50b10uZmluZChrZXkgPT4gcmVhbG1zW2tleV0/LmluamVjdGFibGUpO1xuICAgIC8vIElmIHRoZSBzY3JpcHQgd2FudHMgdGhpcyBzcGVjaWZpYyByZWFsbSwgd2hpY2ggaXMgdW5hdmFpbGFibGUsIHdlIHdvbid0IGluamVjdCBpdCBhdCBhbGxcbiAgICBpZiAocmVhbG0pIHtcbiAgICAgIGNvbnN0IHsgcGF0aE1hcCB9ID0gc2NyaXB0LmN1c3RvbTtcbiAgICAgIGNvbnN0IHJlYWxtRGF0YSA9IHJlYWxtc1tyZWFsbV07XG4gICAgICByZWFsbURhdGEubGlzdHNbc2NyaXB0LnJ1bkF0XS5wdXNoKHNjcmlwdCk7IC8vICdzdGFydCcgb3IgJ2JvZHknIHBlciBnZXRTY3JpcHRzQnlVUkwoKVxuICAgICAgcmVhbG1EYXRhLmlzID0gdHJ1ZTtcbiAgICAgIGlmIChwYXRoTWFwKSBicmlkZ2UucGF0aE1hcHNbaWRdID0gcGF0aE1hcDtcbiAgICAgIGJyaWRnZS5hbGxvd1NjcmlwdChzY3JpcHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmlkZ2UuZmFpbGVkSWRzLnB1c2goaWQpO1xuICAgIH1cbiAgICByZXR1cm4gW3NjcmlwdC5kYXRhS2V5LCByZWFsbSA9PT0gSU5KRUNUX0NPTlRFTlRdO1xuICB9KTtcbiAgY29uc3QgbW9yZURhdGEgPSBzZW5kQ21kKCdJbmplY3Rpb25GZWVkYmFjaycsIHtcbiAgICBmZWVkYmFjayxcbiAgICBmZWVkSWQ6IGRhdGEuZmVlZElkLFxuICAgIGZvcmNlQ29udGVudDogIXBhZ2VJbmplY3RhYmxlLFxuICB9KTtcbiAgLy8gc2F2aW5nIHdoaWxlIHNhZmVcbiAgY29uc3QgaGFzSW52b2tlciA9IHJlYWxtc1tJTkpFQ1RfQ09OVEVOVF0uaXM7XG4gIGlmIChoYXNJbnZva2VyKSB7XG4gICAgc2V0dXBDb250ZW50SW52b2tlcihjb250ZW50SWQsIHdlYklkKTtcbiAgfVxuICAvLyBVc2luZyBhIGNhbGxiYWNrIHRvIGF2b2lkIGEgbWljcm90YXNrIHRpY2sgd2hlbiB0aGUgcm9vdCBlbGVtZW50IGV4aXN0cyBvciBhcHBlYXJzLlxuICBhd2FpdCBvbkVsZW1lbnQoJyonLCBhc3luYyAoKSA9PiB7XG4gICAgaW5qZWN0QWxsKCdzdGFydCcpO1xuICAgIGNvbnN0IG9uQm9keSA9IChwZ0xpc3RzLmJvZHkubGVuZ3RoIHx8IGNvbnRMaXN0cy5ib2R5Lmxlbmd0aClcbiAgICAgICYmIG9uRWxlbWVudCgnYm9keScsIGluamVjdEFsbCwgJ2JvZHknKTtcbiAgICAvLyBkb2N1bWVudC1lbmQsIC1pZGxlXG4gICAgaWYgKGhhc01vcmUpIHtcbiAgICAgIGRhdGEgPSBhd2FpdCBtb3JlRGF0YTtcbiAgICAgIGlmIChkYXRhKSBhd2FpdCBpbmplY3REZWxheWVkU2NyaXB0cyghaGFzSW52b2tlciAmJiBjb250ZW50SWQsIHdlYklkLCBkYXRhKTtcbiAgICB9XG4gICAgaWYgKG9uQm9keSkge1xuICAgICAgYXdhaXQgb25Cb2R5O1xuICAgIH1cbiAgICByZWFsbXMgPSBudWxsO1xuICAgIHBnTGlzdHMgPSBudWxsO1xuICAgIGNvbnRMaXN0cyA9IG51bGw7XG4gIH0pO1xuICBWTUluaXRJbmplY3Rpb24gPSBudWxsOyAvLyByZWxlYXNlIGZvciBHQ1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbmplY3REZWxheWVkU2NyaXB0cyhjb250ZW50SWQsIHdlYklkLCB7IGNhY2hlLCBzY3JpcHRzIH0pIHtcbiAgYXNzaWduKGJyaWRnZS5jYWNoZSwgY2FjaGUpO1xuICBsZXQgbmVlZHNJbnZva2VyO1xuICBzY3JpcHRzOjpmb3JFYWNoKHNjcmlwdCA9PiB7XG4gICAgY29uc3QgeyBjb2RlLCBydW5BdCB9ID0gc2NyaXB0O1xuICAgIGNvbnN0IHsgaWQgfSA9IHNjcmlwdC5wcm9wcztcbiAgICBpZiAoIWNvZGUpIHtcbiAgICAgIG5lZWRzSW52b2tlciA9IHRydWU7XG4gICAgICBjb250TGlzdHNbcnVuQXRdOjpwdXNoKHNjcmlwdCk7XG4gICAgfSBlbHNlIGlmIChwYWdlSW5qZWN0YWJsZSkge1xuICAgICAgcGdMaXN0c1tydW5BdF06OnB1c2goc2NyaXB0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJpZGdlLmZhaWxlZElkczo6cHVzaChpZCk7XG4gICAgICBicmlkZ2UuaWRzOjpwdXNoKGlkKTtcbiAgICB9XG4gIH0pO1xuICBpZiAoZG9jdW1lbnQ6OmdldFJlYWR5U3RhdGUoKSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2VTYWZlKHJlc29sdmUgPT4ge1xuICAgICAgLyogU2luY2UgbW9zdCBzaXRlcyBsaXN0ZW4gdG8gRE9NQ29udGVudExvYWRlZCBvbiBgZG9jdW1lbnRgLCB3ZSBsZXQgdGhlbSBydW4gZmlyc3RcbiAgICAgICAqIGJ5IGxpc3RlbmluZyBvbiBgd2luZG93YCB3aGljaCBmb2xsb3dzIGBkb2N1bWVudGAgd2hlbiB0aGUgZXZlbnQgYnViYmxlcyB1cC4gKi9cbiAgICAgIHdpbmRvdzo6b24oJ0RPTUNvbnRlbnRMb2FkZWQnLCByZXNvbHZlLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfSk7XG4gICAgYXdhaXQgMDsgLy8gbGV0IHRoZSBzaXRlJ3MgbGlzdGVuZXJzIG9uIGB3aW5kb3dgIHJ1biBmaXJzdFxuICB9XG4gIGlmIChuZWVkc0ludm9rZXIgJiYgY29udGVudElkKSB7XG4gICAgc2V0dXBDb250ZW50SW52b2tlcihjb250ZW50SWQsIHdlYklkKTtcbiAgfVxuICBzY3JpcHRzOjpmb3JFYWNoKGJyaWRnZS5hbGxvd1NjcmlwdCk7XG4gIGluamVjdEFsbCgnZW5kJyk7XG4gIGluamVjdEFsbCgnaWRsZScpO1xufVxuXG5mdW5jdGlvbiBpbmplY3QoaXRlbSwgaWZyYW1lQ2IpIHtcbiAgY29uc3Qgc2NyaXB0ID0gbWFrZUVsZW0oJ3NjcmlwdCcsIGl0ZW0uY29kZSk7XG4gIC8vIEZpcmVmb3ggaWdub3JlcyBzb3VyY2VVUkwgY29tbWVudCB3aGVuIGEgc3ludGF4IGVycm9yIG9jY3VycyBzbyB3ZSdsbCBwcmludCB0aGUgbmFtZSBtYW51YWxseVxuICBjb25zdCBvbkVycm9yID0gSVNfRklSRUZPWCAmJiAhaWZyYW1lQ2IgJiYgKGUgPT4ge1xuICAgIGNvbnN0IHsgc3RhY2sgfSA9IGUuZXJyb3I7XG4gICAgaWYgKCFzdGFjayB8fCBgJHtzdGFja31gLmluY2x1ZGVzKFZNX1VVSUQpKSB7XG4gICAgICBsb2coJ2Vycm9yJywgW2l0ZW0uZGlzcGxheU5hbWVdLCBlLmVycm9yKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBkaXYgPSBtYWtlRWxlbSgnZGl2Jyk7XG4gIC8vIEhpZGluZyB0aGUgc2NyaXB0J3MgY29kZSBmcm9tIG11dGF0aW9uIGV2ZW50cyBsaWtlIERPTU5vZGVJbnNlcnRlZCBvciBET01Ob2RlUmVtb3ZlZFxuICBjb25zdCBkaXZSb290ID0gaW5qZWN0ZWRSb290IHx8IChcbiAgICBhdHRhY2hTaGFkb3dcbiAgICAgID8gZGl2OjphdHRhY2hTaGFkb3coeyBtb2RlOiAnY2xvc2VkJyB9KVxuICAgICAgOiBkaXZcbiAgKTtcbiAgbGV0IGlmcmFtZTtcbiAgaWYgKGlmcmFtZUNiKSB7XG4gICAgLyogUHJldmVudGluZyBvdGhlciBjb250ZW50IHNjcmlwdHMgKi8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2NyaXB0LXVybFxuICAgIGlmcmFtZSA9IG1ha2VFbGVtKCdpZnJhbWUnLCB7IHNyYzogJ2phdmFzY3JpcHQ6dm9pZCAwJyB9KTtcbiAgICAvKiBJbiBGRiB0aGUgb3BlbmVyIHJlY2VpdmVzIERPTU5vZGVJbnNlcnRlZCBhdHRhY2hlZCBhdCBjcmVhdGlvbiBzbyBpdCBjYW4gc2VlIHdpbmRvd1swXSAqL1xuICAgIGlmICghSVNfRklSRUZPWCkge1xuICAgICAgZGl2Um9vdDo6YXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGl2Um9vdDo6YXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuICBpZiAob25FcnJvcikge1xuICAgIHdpbmRvdzo6b24oJ2Vycm9yJywgb25FcnJvcik7XG4gIH1cbiAgaWYgKCFpbmplY3RlZFJvb3QpIHtcbiAgICAvLyBXaGVuIHVzaW5nIGRlY2xhcmF0aXZlQ29udGVudCB0aGVyZSdzIG5vIGRvY3VtZW50RWxlbWVudCBzbyB3ZSdsbCBhcHBlbmQgdG8gYGRvY3VtZW50YFxuICAgIChlbGVtQnlUYWcoJyonKSB8fCBkb2N1bWVudCk6OmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbiAgaWYgKG9uRXJyb3IpIHtcbiAgICB3aW5kb3c6Om9mZignZXJyb3InLCBvbkVycm9yKTtcbiAgfVxuICBpZiAoaWZyYW1lQ2IpIHtcbiAgICBpbmplY3RlZFJvb3QgPSBkaXZSb290O1xuICAgIGlmIChJU19GSVJFRk9YKSBkaXZSb290OjphcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgIGlmcmFtZS5jb250ZW50RG9jdW1lbnQ6OmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJylbMF06OmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgaWZyYW1lQ2IoKTtcbiAgICBpZnJhbWU6OnJlbW92ZSgpO1xuICAgIGluamVjdGVkUm9vdCA9IG51bGw7XG4gIH1cbiAgLy8gQ2xlYW4gdXAgaW4gY2FzZSBzb21ldGhpbmcgZGlkbid0IGxvYWRcbiAgc2NyaXB0OjpyZW1vdmUoKTtcbiAgZGl2OjpyZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gaW5qZWN0QWxsKHJ1bkF0KSB7XG4gIGZvciAoY29uc3QgcmVhbG0gaW4gcmVhbG1zKSB7IC8qIHByb3RvIGlzIG51bGwgKi8vLyBlc2xpbnQtZGlzYWJsZS1saW5lIGd1YXJkLWZvci1pblxuICAgIGNvbnN0IHJlYWxtRGF0YSA9IHJlYWxtc1tyZWFsbV07XG4gICAgY29uc3QgaXRlbXMgPSByZWFsbURhdGEubGlzdHNbcnVuQXRdO1xuICAgIGNvbnN0IHsgaW5mbyB9ID0gcmVhbG1EYXRhO1xuICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcbiAgICAgIGJyaWRnZS5wb3N0KCdTY3JpcHREYXRhJywgeyBpbmZvLCBpdGVtcywgcnVuQXQgfSwgcmVhbG0pO1xuICAgICAgaWYgKHJlYWxtID09PSBJTkpFQ1RfUEFHRSAmJiAhSVNfRklSRUZPWCkge1xuICAgICAgICBpbmplY3RMaXN0KHJ1bkF0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHJ1bkF0ICE9PSAnc3RhcnQnICYmIGNvbnRMaXN0c1tydW5BdF0ubGVuZ3RoKSB7XG4gICAgYnJpZGdlLnBvc3QoJ1J1bkF0JywgcnVuQXQsIElOSkVDVF9DT05URU5UKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBpbmplY3RMaXN0KHJ1bkF0KSB7XG4gIGNvbnN0IGxpc3QgPSBwZ0xpc3RzW3J1bkF0XTtcbiAgLy8gTm90IHVzaW5nIGZvci1vZiBiZWNhdXNlIHdlIGRvbid0IGtub3cgaWYgQEBpdGVyYXRvciBpcyBzYWZlLlxuICBmb3IgKGxldCBpID0gMCwgaXRlbTsgKGl0ZW0gPSBsaXN0W2ldKTsgaSArPSAxKSB7XG4gICAgaWYgKGl0ZW0uY29kZSkge1xuICAgICAgaWYgKHJ1bkF0ID09PSAnaWRsZScpIGF3YWl0IHNlbmRDbWQoJ1NldFRpbWVvdXQnLCAwKTtcbiAgICAgIGlmIChydW5BdCA9PT0gJ2VuZCcpIGF3YWl0IDA7XG4gICAgICBpbmplY3QoaXRlbSk7XG4gICAgICBpdGVtLmNvZGUgPSAnJztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBDb250ZW50SW52b2tlcihjb250ZW50SWQsIHdlYklkKSB7XG4gIGNvbnN0IGludm9rZUNvbnRlbnQgPSBWTUluaXRJbmplY3Rpb24oSVNfRklSRUZPWCkod2ViSWQsIGNvbnRlbnRJZCwgYnJpZGdlLm9uSGFuZGxlKTtcbiAgY29uc3QgcG9zdFZpYUJyaWRnZSA9IGJyaWRnZS5wb3N0O1xuICBicmlkZ2UucG9zdCA9IChjbWQsIHBhcmFtcywgcmVhbG0sIG5vZGUpID0+IHtcbiAgICBjb25zdCBmbiA9IHJlYWxtID09PSBJTkpFQ1RfQ09OVEVOVFxuICAgICAgPyBpbnZva2VDb250ZW50XG4gICAgICA6IHBvc3RWaWFCcmlkZ2U7XG4gICAgZm4oY21kLCBwYXJhbXMsIHVuZGVmaW5lZCwgbm9kZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRlbGxCcmlkZ2VUb1dyaXRlVmF1bHQodmF1bHRJZCwgd25kKSB7XG4gIGJyaWRnZS5wb3N0KCdXcml0ZVZhdWx0JywgdmF1bHRJZCwgSU5KRUNUX1BBR0UsIHduZCk7XG59XG4iLCJpbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcbmltcG9ydCB7IHNlbmRDbWQgfSBmcm9tICcuL3V0aWwtY29udGVudCc7XG5cbmNvbnN0IG5vdGlmaWNhdGlvbnMgPSBjcmVhdGVOdWxsT2JqKCk7XG5cbmJyaWRnZS5hZGRIYW5kbGVycyh7XG4gIGFzeW5jIE5vdGlmaWNhdGlvbihvcHRpb25zLCByZWFsbSkge1xuICAgIGNvbnN0IG5pZCA9IGF3YWl0IHNlbmRDbWQoJ05vdGlmaWNhdGlvbicsIG9wdGlvbnMpO1xuICAgIG5vdGlmaWNhdGlvbnNbbmlkXSA9IHsgaWQ6IG9wdGlvbnMuaWQsIHJlYWxtIH07XG4gIH0sXG4gIFJlbW92ZU5vdGlmaWNhdGlvbihpZCkge1xuICAgIGZvciAoY29uc3QgbmlkIGluIG5vdGlmaWNhdGlvbnMpIHtcbiAgICAgIGlmIChub3RpZmljYXRpb25zW25pZF0uaWQgPT09IGlkKSB7XG4gICAgICAgIGRlbGV0ZSBub3RpZmljYXRpb25zW25pZF07XG4gICAgICAgIHJldHVybiBzZW5kQ21kKCdSZW1vdmVOb3RpZmljYXRpb24nLCBuaWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn0pO1xuXG5icmlkZ2UuYWRkQmFja2dyb3VuZEhhbmRsZXJzKHtcbiAgTm90aWZpY2F0aW9uQ2xpY2sobmlkKSB7XG4gICAgY29uc3QgbiA9IG5vdGlmaWNhdGlvbnNbbmlkXTtcbiAgICBpZiAobikgYnJpZGdlLnBvc3QoJ05vdGlmaWNhdGlvbkNsaWNrZWQnLCBuLmlkLCBuLnJlYWxtKTtcbiAgfSxcbiAgTm90aWZpY2F0aW9uQ2xvc2UobmlkKSB7XG4gICAgY29uc3QgbiA9IG5vdGlmaWNhdGlvbnNbbmlkXTtcbiAgICBpZiAobikge1xuICAgICAgYnJpZGdlLnBvc3QoJ05vdGlmaWNhdGlvbkNsb3NlZCcsIG4uaWQsIG4ucmVhbG0pO1xuICAgICAgZGVsZXRlIG5vdGlmaWNhdGlvbnNbbmlkXTtcbiAgICB9XG4gIH0sXG59KTtcbiIsImltcG9ydCBicmlkZ2UgZnJvbSAnLi9icmlkZ2UnO1xuaW1wb3J0IHsgZ2V0RnVsbFVybCwgbWFrZUVsZW0sIHNlbmRDbWQgfSBmcm9tICcuL3V0aWwtY29udGVudCc7XG5cbmNvbnN0IHtcbiAgZmV0Y2g6IGZldGNoU2FmZSxcbn0gPSBnbG9iYWw7XG5jb25zdCB7IGFycmF5QnVmZmVyOiBnZXRBcnJheUJ1ZmZlciwgYmxvYjogZ2V0QmxvYiB9ID0gUmVzcG9uc2VQcm90bztcbmNvbnN0IHsgY3JlYXRlT2JqZWN0VVJMLCByZXZva2VPYmplY3RVUkwgfSA9IFVSTDtcblxuY29uc3QgcmVxdWVzdHMgPSBjcmVhdGVOdWxsT2JqKCk7XG5sZXQgZG93bmxvYWRDaGFpbiA9IHByb21pc2VSZXNvbHZlKCk7XG5cbmJyaWRnZS5hZGRIYW5kbGVycyh7XG4gIEh0dHBSZXF1ZXN0KG1zZywgcmVhbG0pIHtcbiAgICByZXF1ZXN0c1ttc2cuaWRdID0ge1xuICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgcmVhbG0sXG4gICAgICB3YW50c0Jsb2I6IG1zZy54aHJUeXBlID09PSAnYmxvYicsXG4gICAgfTo6cGlja0ludG9UaGlzKG1zZywgW1xuICAgICAgJ2V2ZW50c1RvTm90aWZ5JyxcbiAgICAgICdmaWxlTmFtZScsXG4gICAgXSk7XG4gICAgbXNnLnVybCA9IGdldEZ1bGxVcmwobXNnLnVybCk7XG4gICAgc2VuZENtZCgnSHR0cFJlcXVlc3QnLCBtc2cpO1xuICB9LFxuICBBYm9ydFJlcXVlc3Q6IHRydWUsXG59KTtcblxuYnJpZGdlLmFkZEJhY2tncm91bmRIYW5kbGVycyh7XG4gIGFzeW5jIEh0dHBSZXF1ZXN0ZWQobXNnKSB7XG4gICAgY29uc3QgeyBpZCwgY2h1bmsgfSA9IG1zZztcbiAgICBjb25zdCByZXEgPSByZXF1ZXN0c1tpZF07XG4gICAgaWYgKCFyZXEpIHJldHVybjtcbiAgICBpZiAoY2h1bmspIHtcbiAgICAgIHJlY2VpdmVDaHVuayhyZXEsIGNodW5rKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKChtc2cubnVtQ2h1bmtzIHx8IDEpID09PSAxKSB7XG4gICAgICByZXEuZ290Q2h1bmtzID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgeyBibG9iYmVkLCBkYXRhLCBjaHVua2VkLCB0eXBlLCBkb3dubG9hZElkIH0gPSBtc2c7XG5cbiAgICBpZiAoZG93bmxvYWRJZCkge1xuICAgICAgLy8gYnJvd3NlciB3aWxsIGRvd25sb2FkXG4gICAgICBicmlkZ2UucG9zdCgnSHR0cFJlcXVlc3RlZCcsIG1zZywgcmVxLnJlYWxtKTtcbiAgICAgIGlmIChtc2cudHlwZSA9PT0gJ2xvYWQnKSBkZWxldGUgcmVxdWVzdHNbaWRdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTG9hZEVuZCA9IHR5cGUgPT09ICdsb2FkZW5kJztcbiAgICAvLyBvbmx5IENPTlRFTlQgcmVhbG0gY2FuIHJlYWQgYmxvYnMgZnJvbSBhbiBleHRlbnNpb246Ly8gVVJMXG4gICAgY29uc3QgcmVzcG9uc2UgPSBkYXRhXG4gICAgICAmJiByZXEuZXZlbnRzVG9Ob3RpZnk6OmluY2x1ZGVzKHR5cGUpXG4gICAgICAmJiBkYXRhLnJlc3BvbnNlO1xuICAgIC8vIG1lc3NhZ2VzIHdpbGwgY29tZSB3aGlsZSBibG9iIGlzIGZldGNoZWQgc28gd2UnbGwgdGVtcG9yYXJpbHkgc3RvcmUgdGhlIFByb21pc2VcbiAgICBjb25zdCBpbXBvcnRpbmcgPSByZXNwb25zZSAmJiAoYmxvYmJlZCB8fCBjaHVua2VkKTtcbiAgICBpZiAoaW1wb3J0aW5nKSB7XG4gICAgICByZXEuYmluID0gYmxvYmJlZFxuICAgICAgICA/IGltcG9ydEJsb2IocmVxLCByZXNwb25zZSlcbiAgICAgICAgOiByZWNlaXZlQWxsQ2h1bmtzKHJlcSwgbXNnKTtcbiAgICB9XG4gICAgLy8gLi4ud2hpY2ggY2FuIGJlIGF3YWl0ZWQgaW4gdGhlc2Ugc3Vic2VxdWVudCBtZXNzYWdlc1xuICAgIGlmIChpc1Byb21pc2UocmVxLmJpbikpIHtcbiAgICAgIHJlcS5iaW4gPSBhd2FpdCByZXEuYmluO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgdXNlciBpbiBpbmNvZ25pdG8gc3VwcGxpZWQgb25seSBgb25sb2FkZW5kYCB0aGVuIGl0IGFycml2ZXMgZmlyc3QsIGZvbGxvd2VkIGJ5IGNodW5rc1xuICAgIC8vIElmIHRoZSB1c2VyIHN1cHBsaWVkIGFueSBldmVudCBiZWZvcmUgYGxvYWRlbmRgLCBhbGwgY2h1bmtzIGZpbmlzaCBiZWZvcmUgYGxvYWRlbmRgIGFycml2ZXNcbiAgICBpZiAoaXNMb2FkRW5kKSB7XG4gICAgICAvLyBsb2FkZW5kJ3MgYnJpZGdlLnBvc3QoKSBzaG91bGQgcnVuIGxhc3RcbiAgICAgIGF3YWl0IDA7XG4gICAgICByZXEuZ290TG9hZEVuZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpbXBvcnRpbmcpIHtcbiAgICAgIGRhdGEucmVzcG9uc2UgPSByZXEuYmluO1xuICAgIH1cbiAgICBjb25zdCBmaWxlTmFtZSA9IHR5cGUgPT09ICdsb2FkJyAmJiByZXEuYmluICYmIHJlcS5maWxlTmFtZTtcbiAgICBpZiAoZmlsZU5hbWUpIHtcbiAgICAgIHJlcS5maWxlTmFtZSA9ICcnO1xuICAgICAgYXdhaXQgZG93bmxvYWRCbG9iKHJlcS5iaW4sIGZpbGVOYW1lKTtcbiAgICB9XG4gICAgYnJpZGdlLnBvc3QoJ0h0dHBSZXF1ZXN0ZWQnLCBtc2csIHJlcS5yZWFsbSk7XG4gICAgaWYgKHJlcS5nb3RMb2FkRW5kICYmIHJlcS5nb3RDaHVua3MpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0c1tpZF07XG4gICAgfVxuICB9LFxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGltcG9ydEJsb2IocmVxLCB1cmwpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IChhd2FpdCBmZXRjaFNhZmUodXJsKSk6OihyZXEud2FudHNCbG9iID8gZ2V0QmxvYiA6IGdldEFycmF5QnVmZmVyKSgpO1xuICBzZW5kQ21kKCdSZXZva2VCbG9iJywgdXJsKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGRvd25sb2FkQmxvYihibG9iLCBmaWxlTmFtZSkge1xuICBjb25zdCB1cmwgPSBjcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gIGNvbnN0IGEgPSBtYWtlRWxlbSgnYScsIHtcbiAgICBocmVmOiB1cmwsXG4gICAgZG93bmxvYWQ6IGZpbGVOYW1lLFxuICB9KTtcbiAgY29uc3QgcmVzID0gZG93bmxvYWRDaGFpbjo6dGhlbigoKSA9PiB7XG4gICAgYTo6ZmlyZShuZXcgTW91c2VFdmVudFNhZmUoJ2NsaWNrJykpO1xuICAgIHJldm9rZUJsb2JBZnRlclRpbWVvdXQodXJsKTtcbiAgfSk7XG4gIC8vIEZyZXF1ZW50IGRvd25sb2FkcyBhcmUgaWdub3JlZCBpbiBDaHJvbWUgYW5kIHBvc3NpYmx5IG90aGVyIGJyb3dzZXJzXG4gIGRvd25sb2FkQ2hhaW4gPSByZXM6OnRoZW4oc2VuZENtZCgnU2V0VGltZW91dCcsIDE1MCkpO1xuICByZXR1cm4gcmVzO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZXZva2VCbG9iQWZ0ZXJUaW1lb3V0KHVybCkge1xuICBhd2FpdCBzZW5kQ21kKCdTZXRUaW1lb3V0JywgMzAwMCk7XG4gIHJldm9rZU9iamVjdFVSTCh1cmwpO1xufVxuXG4vKiogQXJyYXlCdWZmZXIvQmxvYiBpbiBDaHJvbWUgaW5jb2duaXRvIGlzIHRyYW5zZmVycmVkIGluIHN0cmluZyBjaHVua3MgKi9cbmZ1bmN0aW9uIHJlY2VpdmVBbGxDaHVua3MocmVxLCBtc2cpIHtcbiAgcmVxOjpwaWNrSW50b1RoaXMobXNnLCBbJ2RhdGFTaXplJywgJ2NvbnRlbnRUeXBlJ10pO1xuICByZXEuYXJyID0gbmV3IFVpbnQ4QXJyYXlTYWZlKHJlcS5kYXRhU2l6ZSk7XG4gIHByb2Nlc3NDaHVuayhyZXEsIG1zZy5kYXRhLnJlc3BvbnNlLCAwKTtcbiAgcmV0dXJuICFyZXEuZ290Q2h1bmtzXG4gICAgPyBuZXcgUHJvbWlzZVNhZmUocmVzb2x2ZSA9PiB7IHJlcS5yZXNvbHZlID0gcmVzb2x2ZTsgfSlcbiAgICA6IGZpbmlzaENodW5rcyhyZXEpO1xufVxuXG5mdW5jdGlvbiByZWNlaXZlQ2h1bmsocmVxLCB7IGRhdGEsIHBvcywgbGFzdCB9KSB7XG4gIHByb2Nlc3NDaHVuayhyZXEsIGRhdGEsIHBvcyk7XG4gIGlmIChsYXN0KSB7XG4gICAgcmVxLmdvdENodW5rcyA9IHRydWU7XG4gICAgcmVxLnJlc29sdmUoZmluaXNoQ2h1bmtzKHJlcSkpO1xuICAgIGRlbGV0ZSByZXEucmVzb2x2ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzQ2h1bmsocmVxLCBkYXRhLCBwb3MpIHtcbiAgY29uc3QgeyBhcnIgfSA9IHJlcTtcbiAgZGF0YSA9IGF0b2JTYWZlKGRhdGEpO1xuICBmb3IgKGxldCBsZW4gPSBkYXRhLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSwgcG9zICs9IDEpIHtcbiAgICBhcnJbcG9zXSA9IGRhdGE6OmNoYXJDb2RlQXQoaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluaXNoQ2h1bmtzKHJlcSkge1xuICBjb25zdCB7IGFyciB9ID0gcmVxO1xuICBkZWxldGUgcmVxLmFycjtcbiAgcmV0dXJuIHJlcS53YW50c0Jsb2JcbiAgICA/IG5ldyBCbG9iU2FmZShbYXJyXSwgeyB0eXBlOiByZXEuY29udGVudFR5cGUgfSlcbiAgICA6IGFyci5idWZmZXI7XG59XG4iLCJpbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcbmltcG9ydCB7IHNlbmRDbWQgfSBmcm9tICcuL3V0aWwtY29udGVudCc7XG5cbmNvbnN0IHRhYklkcyA9IGNyZWF0ZU51bGxPYmooKTtcbmNvbnN0IHRhYktleXMgPSBjcmVhdGVOdWxsT2JqKCk7XG5jb25zdCByZWFsbXMgPSBjcmVhdGVOdWxsT2JqKCk7XG5cbmJyaWRnZS5hZGRIYW5kbGVycyh7XG4gIGFzeW5jIFRhYk9wZW4oeyBrZXksIGRhdGEgfSwgcmVhbG0pIHtcbiAgICBjb25zdCB7IGlkIH0gPSBhd2FpdCBzZW5kQ21kKCdUYWJPcGVuJywgZGF0YSk7XG4gICAgdGFiSWRzW2tleV0gPSBpZDtcbiAgICB0YWJLZXlzW2lkXSA9IGtleTtcbiAgICByZWFsbXNbaWRdID0gcmVhbG07XG4gIH0sXG4gIFRhYkNsb3NlKGtleSkge1xuICAgIGNvbnN0IGlkID0gdGFiSWRzW2tleV07XG4gICAgLy8gIWtleSA9PiBjbG9zZSBjdXJyZW50IHRhYlxuICAgIC8vIGlkID0+IGNsb3NlIHRhYiBieSBpZFxuICAgIGlmICgha2V5IHx8IGlkKSBzZW5kQ21kKCdUYWJDbG9zZScsIHsgaWQgfSk7XG4gIH0sXG59KTtcblxuYnJpZGdlLmFkZEJhY2tncm91bmRIYW5kbGVycyh7XG4gIFRhYkNsb3NlZChpZCkge1xuICAgIGNvbnN0IGtleSA9IHRhYktleXNbaWRdO1xuICAgIGNvbnN0IHJlYWxtID0gcmVhbG1zW2lkXTtcbiAgICBkZWxldGUgcmVhbG1zW2lkXTtcbiAgICBkZWxldGUgdGFiS2V5c1tpZF07XG4gICAgZGVsZXRlIHRhYklkc1trZXldO1xuICAgIGlmIChrZXkpIGJyaWRnZS5wb3N0KCdUYWJDbG9zZWQnLCBrZXksIHJlYWxtKTtcbiAgfSxcbn0pO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtaW1wb3J0c1xuZXhwb3J0IHsgc2VuZENtZCB9IGZyb20gJyMvY29tbW9uJztcblxuLyoqIFdoZW4gbG9va2luZyBmb3IgZG9jdW1lbnRFbGVtZW50LCB1c2UgJyonIHRvIGFsc28gc3VwcG9ydCBYTUwgcGFnZXNcbiAqIE5vdGUgdGhhdCB3ZSBhdm9pZCBzcG9vZmVkIHByb3RvdHlwZSBnZXR0ZXJzIGJ5IHVzaW5nIGhhc093blByb3BlcnR5LCBhbmQgbm90IHVzaW5nIGBsZW5ndGhgXG4gKiBhcyBpdCBzZWFyY2hlcyBmb3IgQUxMIG1hdGNoaW5nIG5vZGVzIHdoZW4gdGhpcyB0YWcgd2Fzbid0IGNhY2hlZCBpbnRlcm5hbGx5LiAqL1xuZXhwb3J0IGNvbnN0IGVsZW1CeVRhZyA9ICh0YWcsIGkpID0+IGdldE93blByb3AoZG9jdW1lbnQ6OmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZyksIGkgfHwgMCk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgLSBjYWxsYmFjayBydW5zIGltbWVkaWF0ZWx5LCB1bmxpa2UgYSBjaGFpbmVkIHRoZW4oKVxuICogQHBhcmFtIHs/fSBbYXJnXVxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cbmV4cG9ydCBjb25zdCBvbkVsZW1lbnQgPSAodGFnLCBjYiwgYXJnKSA9PiBuZXcgUHJvbWlzZVNhZmUocmVzb2x2ZSA9PiB7XG4gIGlmIChlbGVtQnlUYWcodGFnKSkge1xuICAgIHJlc29sdmUoY2IoYXJnKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICBpZiAoZWxlbUJ5VGFnKHRhZykpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICByZXNvbHZlKGNiKGFyZykpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGRvY3VtZW50RWxlbWVudCBtYXkgYmUgcmVwbGFjZWQgc28gd2UnbGwgb2JzZXJ2ZSB0aGUgZW50aXJlIGRvY3VtZW50XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgbWFrZUVsZW0gPSAodGFnLCBhdHRycykgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50OjpjcmVhdGVFbGVtZW50TlMoTlNfSFRNTCwgdGFnKTtcbiAgaWYgKGF0dHJzICYmIGlzU3RyaW5nKGF0dHJzKSkge1xuICAgIGVsOjphcHBlbmQoYXR0cnMpO1xuICB9IGVsc2UgaWYgKGF0dHJzKSB7XG4gICAgb2JqZWN0S2V5cyhhdHRycyk6OmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICd0ZXh0Q29udGVudCcpIGVsOjphcHBlbmQoYXR0cnNba2V5XSk7XG4gICAgICBlbHNlIGVsOjpzZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZWw7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RnVsbFVybCA9IHVybCA9PiAoXG4gIG1ha2VFbGVtKCdhJywgeyBocmVmOiB1cmwgfSk6OmdldEhyZWYoKVxuKTtcblxuZXhwb3J0IGNvbnN0IGRlY29kZVJlc291cmNlID0gKHJhdywgaXNCbG9iKSA9PiB7XG4gIGxldCByZXM7XG4gIGNvbnN0IHBvcyA9IHJhdzo6c3RyaW5nSW5kZXhPZignLCcpO1xuICBjb25zdCBiaW4gPSBhdG9iU2FmZShwb3MgPCAwID8gcmF3IDogcmF3OjpzbGljZShwb3MgKyAxKSk7XG4gIGlmIChpc0Jsb2IgfHwgL1tcXHg4MC1cXHhGRl0vOjpyZWdleHBUZXN0KGJpbikpIHtcbiAgICBjb25zdCBsZW4gPSBiaW4ubGVuZ3RoO1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXlTYWZlKGxlbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgYnl0ZXNbaV0gPSBiaW46OmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJlcyA9IGlzQmxvYlxuICAgICAgPyBuZXcgQmxvYlNhZmUoW2J5dGVzXSwgeyB0eXBlOiBwb3MgPCAwID8gJycgOiByYXc6OnNsaWNlKDAsIHBvcykgfSlcbiAgICAgIDogbmV3IFRleHREZWNvZGVyU2FmZSgpOjp0ZERlY29kZShieXRlcyk7XG4gIH0gZWxzZSB7IC8vIHB1cmUgQVNDSUlcbiAgICByZXMgPSBiaW47XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG4iLCJpbXBvcnQgJyMvY29tbW9uL2Jyb3dzZXInOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtaW1wb3J0c1xuaW1wb3J0IHsgc2VuZENtZCB9IGZyb20gJyMvY29tbW9uJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLWltcG9ydHNcbmltcG9ydCAnLi9jb250ZW50JztcblxuLy8gU2NyaXB0IGluc3RhbGxhdGlvbiBpbiBGaXJlZm94IGFzIGl0IGRvZXMgbm90IHN1cHBvcnQgYG9uQmVmb3JlUmVxdWVzdGAgZm9yIGBmaWxlOmBcbmNvbnN0IHVybCA9IElTX0ZJUkVGT1ggJiYgSVNfVE9QICYmIGdsb2JhbC5sb2NhdGlvbi5ocmVmO1xuaWYgKHVybFxuJiYgL15maWxlOi86OnJlZ2V4cFRlc3QodXJsKSAvLyBFbnN1cmUgbm90IGEgbG9jYWwgZmlsZVxuJiYgL1xcLnVzZXJcXC5qcyQvOjpyZWdleHBUZXN0KHVybCkpIHsgLy8gVXJsIGVuZHMgd2l0aCB1c2VyLmpzIHNob3VsZCBiZSBhIHNjcmlwdFxuICAoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGJyb3dzZXIsXG4gICAgICBmZXRjaCxcbiAgICAgIGhpc3RvcnksXG4gICAgICBkb2N1bWVudDogeyByZWZlcnJlciB9LFxuICAgIH0gPSBnbG9iYWw7XG4gICAgY29uc3QgeyB0ZXh0OiBnZXRUZXh0IH0gPSBSZXNwb25zZVByb3RvO1xuICAgIGNvbnN0IGZldGNoT3B0cyA9IHsgbW9kZTogJ3NhbWUtb3JpZ2luJyB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBmZXRjaE9wdHMpO1xuICAgIGlmICghL2phdmFzY3JpcHR8XnRleHRcXC9wbGFpbnxeJC86OnJlZ2V4cFRlc3QocmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpIHx8ICcnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgb2xkQ29kZTtcbiAgICBsZXQgY29kZSA9IGF3YWl0IHJlc3BvbnNlOjpnZXRUZXh0KCk7XG4gICAgaWYgKCEvPT11c2Vyc2NyaXB0PT0vaTo6cmVnZXhwVGVzdChjb2RlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCBzZW5kQ21kKCdDb25maXJtSW5zdGFsbCcsIHsgY29kZSwgdXJsLCBmcm9tOiByZWZlcnJlciB9KTtcbiAgICAvLyBGRjY4KyBkb2Vzbid0IGFsbG93IGV4dGVuc2lvbiBwYWdlcyB0byBnZXQgZmlsZTogVVJMcyBhbnltb3JlIHNvIHdlIG5lZWQgdG8gdHJhY2sgaXQgaGVyZVxuICAgIC8vIChkZXRlY3RpbmcgRkY2OCBieSBhIGZlYXR1cmUgYmVjYXVzZSB3ZSBjYW4ndCB1c2UgZ2V0QnJvd3NlckluZm8gaGVyZSBhbmQgVUEgbWF5IGJlIGFsdGVyZWQpXG4gICAgaWYgKGJyb3dzZXIuc3RvcmFnZS5tYW5hZ2VkKSB7XG4gICAgICAvKiogQHBhcmFtIHtjaHJvbWUucnVudGltZS5Qb3J0fSAqL1xuICAgICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcbiAgICAgICAgaWYgKHBvcnQubmFtZSAhPT0gJ0ZldGNoU2VsZicpIHJldHVybjtcbiAgICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvZGUgPSBhd2FpdCAoYXdhaXQgZmV0Y2godXJsLCBmZXRjaE9wdHMpKTo6Z2V0VGV4dCgpO1xuICAgICAgICAgIGlmIChjb2RlID09PSBvbGRDb2RlKSB7XG4gICAgICAgICAgICBjb2RlID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2xkQ29kZSA9IGNvZGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2UoY29kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgb2xkQ29kZSA9IG51bGw7XG4gICAgICAgICAgLy8gVGhlIHVzZXIgbWF5IGhhdmUgcmVsb2FkZWQgdGhlIENvbmZpcm0gcGFnZSBzbyBsZXQncyBjaGVja1xuICAgICAgICAgIGlmICghYXdhaXQgc2VuZENtZCgnQ2hlY2tJbnN0YWxsZXJUYWInLCBwb3J0LnNlbmRlci50YWIuaWQpKSB7XG4gICAgICAgICAgICBjbG9zZVNlbGYoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlU2VsZigpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZVNlbGYoKSB7XG4gICAgICBpZiAoaGlzdG9yeS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGhpc3RvcnkuZ28oLTEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VuZENtZCgnVGFiQ2xvc2UnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCkuY2F0Y2goY29uc29sZS5lcnJvcik7IC8vIEZGIGRvZXNuJ3Qgc2hvdyBleGNlcHRpb25zIGluIGNvbnRlbnQgc2NyaXB0c1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1pbXBvcnRzICovXG5cbi8qIFdBUk5JTkchXG4gKiBNYWtlIHN1cmUgYWxsIHJlLWV4cG9ydGVkIGZ1bmN0aW9ucyBzdXJ2aXZlIGluIGEgc3Bvb2ZlZC9icm9rZW4gZW52aXJvbm1lbnQ6XG4gKiB1c2Ugb25seSA6OnNhZmUoKSBnbG9iYWxzIHRoYXQgYXJlIGluaXRpYWxpemVkIGluIGEgY29ycmVzcG9uZGluZyBzYWZlLWdsb2JhbHMqIGZpbGUsXG4gKiB1c2UgX19wcm90b19fOm51bGwgb3IgZ2V0L3NldCBvd24gcHJvcHMgZXhwbGljaXRseS4gKi9cblxuZXhwb3J0IHtcbiAgZHVtcFNjcmlwdFZhbHVlLFxuICBpc0VtcHR5LFxufSBmcm9tICcjL2NvbW1vbic7XG5leHBvcnQgKiBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuXG5leHBvcnQgY29uc3QgZmlyZUJyaWRnZUV2ZW50ID0gKGV2ZW50SWQsIG1zZywgY2xvbmVJbnRvKSA9PiB7XG4gIGNvbnN0IGRldGFpbCA9IGNsb25lSW50byA/IGNsb25lSW50byhtc2csIGRvY3VtZW50KSA6IG1zZztcbiAgY29uc3QgZXZ0TWFpbiA9IG5ldyBDdXN0b21FdmVudFNhZmUoZXZlbnRJZCwgeyBfX3Byb3RvX186IG51bGwsIGRldGFpbCB9KTtcbiAgd2luZG93OjpmaXJlKGV2dE1haW4pO1xufTtcblxuZXhwb3J0IGNvbnN0IGJpbmRFdmVudHMgPSAoc3JjSWQsIGRlc3RJZCwgYnJpZGdlLCBjbG9uZUludG8pID0+IHtcbiAgLyogVXNpbmcgYSBzZXBhcmF0ZSBldmVudCBmb3IgYG5vZGVgIGJlY2F1c2UgQ3VzdG9tRXZlbnQgY2FuJ3QgdHJhbnNmZXIgbm9kZXMsXG4gICAqIHdoZXJlYXMgTW91c2VFdmVudCAoYW5kIHNvbWUgb3RoZXJzKSBjYW4ndCB0cmFuc2ZlciBvYmplY3RzIHdpdGhvdXQgc3RyaW5naWZpY2F0aW9uLiAqL1xuICBsZXQgaW5jb21pbmdOb2RlRXZlbnQ7XG4gIHdpbmRvdzo6b24oc3JjSWQsIGUgPT4ge1xuICAgIGU6OnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgY29uc29sZS5pbmZvKGBbYnJpZGdlLiR7YnJpZGdlLmlkcyA/ICdob3N0JyA6ICdndWVzdC53ZWInfV0gcmVjZWl2ZWRgLFxuICAgICAgICBpbmNvbWluZ05vZGVFdmVudCA/IGU6OmdldFJlbGF0ZWRUYXJnZXQoKSA6IGU6OmdldERldGFpbCgpKTtcbiAgICB9XG4gICAgaWYgKCFpbmNvbWluZ05vZGVFdmVudCkge1xuICAgICAgLy8gQ3VzdG9tRXZlbnQgaXMgdGhlIG1haW4gbWVzc2FnZVxuICAgICAgY29uc3QgZGF0YSA9IGU6OmdldERldGFpbCgpO1xuICAgICAgaW5jb21pbmdOb2RlRXZlbnQgPSBkYXRhLm5vZGUgJiYgZGF0YTtcbiAgICAgIGlmICghaW5jb21pbmdOb2RlRXZlbnQpIGJyaWRnZS5vbkhhbmRsZShkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTW91c2VFdmVudCBpcyB0aGUgc2Vjb25kIGV2ZW50IHdoZW4gdGhlIG1haW4gZXZlbnQgaGFzIGBub2RlOiB0cnVlYFxuICAgICAgaW5jb21pbmdOb2RlRXZlbnQubm9kZSA9IGU6OmdldFJlbGF0ZWRUYXJnZXQoKTtcbiAgICAgIGJyaWRnZS5vbkhhbmRsZShpbmNvbWluZ05vZGVFdmVudCk7XG4gICAgICBpbmNvbWluZ05vZGVFdmVudCA9IG51bGw7XG4gICAgfVxuICB9LCB0cnVlKTtcbiAgYnJpZGdlLnBvc3QgPSAoY21kLCBkYXRhLCB7IGRhdGFLZXkgfSA9IGJyaWRnZSwgbm9kZSkgPT4ge1xuICAgIC8vIENvbnN0cnVjdGluZyB0aGUgZXZlbnQgbm93IHNvIHdlIGRvbid0IHNlbmQgYW55dGhpbmcgaWYgaXQgdGhyb3dzIG9uIGludmFsaWQgYG5vZGVgXG4gICAgY29uc3QgZXZ0Tm9kZSA9IG5vZGUgJiYgbmV3IE1vdXNlRXZlbnRTYWZlKGRlc3RJZCwgeyBfX3Byb3RvX186IG51bGwsIHJlbGF0ZWRUYXJnZXQ6IG5vZGUgfSk7XG4gICAgZmlyZUJyaWRnZUV2ZW50KGRlc3RJZCwgeyBjbWQsIGRhdGEsIGRhdGFLZXksIG5vZGU6ICEhZXZ0Tm9kZSB9LCBjbG9uZUludG8pO1xuICAgIGlmIChldnROb2RlKSB3aW5kb3c6OmZpcmUoZXZ0Tm9kZSk7XG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==