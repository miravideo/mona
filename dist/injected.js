if (window['Violentmonkey:LRWVgCrw+RY='] !== 1) { /* eslint-disable no-unused-vars */

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


const setOwnProp = (obj, key, value) => obj && defineProperty(obj, key, {
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
/*! exports provided: IS_DEV, KEY_GLOBAL_ID, BUILD_IN_SCRIPT_SRC, INJECT_AUTO, INJECT_PAGE, INJECT_CONTENT, INJECT_MAPPING, CMD_SCRIPT_ADD, CMD_SCRIPT_UPDATE, METABLOCK_RE, INJECTABLE_TAB_URL_RE, browser, TIMEOUT_MAX, TIMEOUT_HOUR, TIMEOUT_24HOURS, TIMEOUT_WEEK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_DEV", function() { return IS_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_GLOBAL_ID", function() { return KEY_GLOBAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILD_IN_SCRIPT_SRC", function() { return BUILD_IN_SCRIPT_SRC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_AUTO", function() { return INJECT_AUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_PAGE", function() { return INJECT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_CONTENT", function() { return INJECT_CONTENT; });
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
const IS_DEV = false;
const KEY_GLOBAL_ID = '_GLOBAL_ID_';
const BUILD_IN_SCRIPT_SRC = 'https://mira-1255830993.cos.ap-shanghai.myqcloud.com/lab/plugin/base.user.js';
const INJECT_AUTO = 'auto';
const INJECT_PAGE = 'page';
const INJECT_CONTENT = 'content';
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
    const quotedKey = `"${"Violentmonkey:LRWVgCrw+RY="}"`; // Accessing document.cookie may throw due to CSP sandbox

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

const INIT_FUNC_NAME = "Violentmonkey:LRWVgCrw+RY=";
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
/*! exports provided: dumpScriptValue, isEmpty, IS_DEV, KEY_GLOBAL_ID, BUILD_IN_SCRIPT_SRC, INJECT_AUTO, INJECT_PAGE, INJECT_CONTENT, INJECT_MAPPING, CMD_SCRIPT_ADD, CMD_SCRIPT_UPDATE, METABLOCK_RE, INJECTABLE_TAB_URL_RE, browser, TIMEOUT_MAX, TIMEOUT_HOUR, TIMEOUT_24HOURS, TIMEOUT_WEEK, fireBridgeEvent, bindEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fireBridgeEvent", function() { return fireBridgeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindEvents", function() { return bindEvents; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dumpScriptValue", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["dumpScriptValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["isEmpty"]; });

/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IS_DEV", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["IS_DEV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_GLOBAL_ID", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["KEY_GLOBAL_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BUILD_IN_SCRIPT_SRC", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["BUILD_IN_SCRIPT_SRC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECT_AUTO", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_AUTO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECT_PAGE", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_PAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECT_CONTENT", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_CONTENT"]; });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC9jb250ZW50L2JyaWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5qZWN0ZWQvY29udGVudC9jbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvZ20tYXBpLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvaW5qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC9jb250ZW50L25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5qZWN0ZWQvY29udGVudC91dGlsLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC91dGlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIklTX0ZJUkVGT1giLCJnbG9iYWwiLCJicm93c2VyIiwicnVudGltZSIsImNocm9tZSIsIlByb3h5IiwiUHJveHlTYWZlIiwiYXBwbHkiLCJiaW5kIiwiTUVTU0FHRSIsIlNUQUNLIiwiaXNTeW5jTWV0aG9kTmFtZSIsImtleSIsImlzRnVuY3Rpb24iLCJ2YWwiLCJpc09iamVjdCIsInByb3hpZnlWYWx1ZSIsInRhcmdldCIsInNyYyIsIm1ldGFWYWwiLCJzcmNWYWwiLCJ1bmRlZmluZWQiLCJyZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIndyYXBBc3luYyIsInByb3hpZnlHcm91cCIsIm1ldGEiLCJnZXQiLCJncm91cCIsInRoaXNBcmciLCJmdW5jIiwicHJlcHJvY2Vzc29yRnVuYyIsImFyZ3MiLCJyZXNvbHZlIiwicmVqZWN0IiwicHJvbWlzZSIsIlByb21pc2VTYWZlIiwiX3Jlc29sdmUiLCJfcmVqZWN0Iiwic3RhY2tJbmZvIiwiRXJyb3JTYWZlIiwibmFtZSIsImxlbmd0aCIsInJlc3VsdCIsInJ1bnRpbWVFcnIiLCJsYXN0RXJyb3IiLCJlcnIiLCJpc1J1bnRpbWUiLCJwcm9jZXNzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIndyYXBTdWNjZXNzIiwid3JhcEVycm9yIiwic2VuZFJlc3BvbnNlQXN5bmMiLCJzZW5kUmVzcG9uc2UiLCJvbk1lc3NhZ2VMaXN0ZW5lciIsImxpc3RlbmVyIiwibWVzc2FnZSIsInNlbmRlciIsIm9iamVjdFRvU3RyaW5nIiwidW53cmFwUmVzcG9uc2UiLCJyZXNwb25zZSIsIndyYXBTZW5kTWVzc2FnZSIsInNlbmRNZXNzYWdlIiwiZXh0ZW5zaW9uIiwiaTE4biIsImNvbm5lY3QiLCJnZXRNYW5pZmVzdCIsImdldFVSTCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwidGFicyIsIklTX0RFViIsIktFWV9HTE9CQUxfSUQiLCJCVUlMRF9JTl9TQ1JJUFRfU1JDIiwiSU5KRUNUX0FVVE8iLCJJTkpFQ1RfUEFHRSIsIklOSkVDVF9DT05URU5UIiwiSU5KRUNUX01BUFBJTkciLCJfX3Byb3RvX18iLCJDTURfU0NSSVBUX0FERCIsIkNNRF9TQ1JJUFRfVVBEQVRFIiwiTUVUQUJMT0NLX1JFIiwiSU5KRUNUQUJMRV9UQUJfVVJMX1JFIiwiVElNRU9VVF9NQVgiLCJUSU1FT1VUX0hPVVIiLCJUSU1FT1VUXzI0SE9VUlMiLCJUSU1FT1VUX1dFRUsiLCJkZWZhdWx0SW1hZ2UiLCJpbml0SG9va3MiLCJob29rcyIsImZpcmUiLCJkYXRhIiwic2xpY2UiLCJmb3JFYWNoIiwiY2IiLCJob29rIiwiY2FsbGJhY2siLCJwdXNoIiwiaSIsImluZGV4T2YiLCJzcGxpY2UiLCJzZW5kQ21kIiwiY21kIiwib3B0aW9ucyIsIkNPTU1BTkRTX1dJVEhfU1JDIiwiZ2V0QmdQYWdlIiwiZ2V0QmFja2dyb3VuZFBhZ2UiLCJzZW5kQ21kRGlyZWN0bHkiLCJiZyIsImluY2x1ZGVzIiwid2luZG93IiwiZGVlcENvcHkiLCJoYW5kbGVDb21tYW5kTWVzc2FnZSIsInRoZW4iLCJzZW5kVGFiQ21kIiwidGFiSWQiLCJjYXRjaCIsIm5vb3AiLCJwYXlsb2FkIiwicmV0cnkiLCJzZW5kTWVzc2FnZVJldHJ5IiwicmV0cmllcyIsInBhdXNlRHVyYXRpb24iLCJtYWtlUGF1c2UiLCJFcnJvciIsImxlZnRwYWQiLCJpbnB1dCIsInBhZCIsIm51bSIsInRvU3RyaW5nIiwiZ2V0TG9jYWxlU3RyaW5nIiwibG9jYWxlTWV0YSIsIm5hdmlnYXRvciIsImxhbmd1YWdlcyIsIm1hcCIsImxhbmciLCJ0b0xvd2VyQ2FzZSIsImZpbmQiLCJCb29sZWFuIiwiZ2V0U2NyaXB0TmFtZSIsInNjcmlwdCIsImN1c3RvbSIsInByb3BzIiwiaWQiLCJnZXRGdWxsVXJsIiwidXJsIiwiYmFzZSIsIm9iaiIsIlVSTCIsInByb3RvY29sIiwiaHJlZiIsImVuY29kZUZpbGVuYW1lIiwicmVwbGFjZSIsIm0iLCJjb2RlIiwiY2hhckNvZGVBdCIsImRlY29kZUZpbGVuYW1lIiwiZmlsZW5hbWUiLCJfbSIsImciLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsImdldEFjdGl2ZVRhYiIsInF1ZXJ5IiwiYWN0aXZlIiwiY3VycmVudFdpbmRvdyIsIndpbmRvd0lkIiwid2luZG93cyIsImdldEN1cnJlbnQiLCJtcyIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwidHJ1ZUpvaW4iLCJzZXBhcmF0b3IiLCJmaWx0ZXIiLCJqb2luIiwibm9ybWFsaXplS2V5cyIsIkFycmF5IiwiaXNBcnJheSIsInNwbGl0Iiwib2JqZWN0R2V0IiwicmF3S2V5IiwiZGVmIiwia2V5cyIsImV2ZXJ5Iiwib2JqZWN0U2V0Iiwicm9vdCIsInN1YiIsImxhc3RLZXkiLCJwb3AiLCJvYmplY3RQaWNrIiwidHJhbnNmb3JtIiwicmVkdWNlIiwidmFsdWUiLCJtYXBFbnRyeSIsIk9iamVjdCIsImVudHJpZXMiLCJlbnRyeSIsImFsbEVudHJpZXMiLCJmb3JFYWNoRW50cnkiLCJmb3JFYWNoS2V5IiwiZm9yRWFjaFZhbHVlIiwidmFsdWVzIiwiZGVlcEVxdWFsIiwiYSIsImIiLCJpdGVtIiwia2V5c0EiLCJrZXlzQiIsImdldE1lc3NhZ2UiLCJwYXJhbSIsIm1lbW9pemUiLCJyZXNvbHZlciIsImNhY2hlTWFwIiwibWVtb2l6ZWQiLCJjYWNoZSIsImRlYm91bmNlIiwidGltZSIsInN0YXJ0VGltZSIsInRpbWVyIiwiTWF0aCIsIm1heCIsImNoZWNrVGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiY2hlY2tUaW1lciIsImRlbHRhIiwiZGVib3VuY2VkRnVuY3Rpb24iLCJ0aHJvdHRsZSIsImxhc3RUaW1lIiwidGhyb3R0bGVkRnVuY3Rpb24iLCJnZXRVbmlxSWQiLCJwcmVmaXgiLCJmbG9vciIsInJhbmRvbSIsImJ1ZmZlcjJzdHJpbmciLCJidWYiLCJvZmZzZXQiLCJzbGljZVNpemUiLCJzbGljZXMiLCJhcnJheUxlbiIsImVuZCIsIm1pbiIsImJ5dGVMZW5ndGgiLCJuZWVkc1NsaWNpbmciLCJVaW50OEFycmF5IiwiYmxvYjJiYXNlNjQiLCJibG9iIiwic2l6ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwic3RyaW5nMnVpbnQ4YXJyYXkiLCJzdHIiLCJsZW4iLCJhcnJheSIsIlZFUlNJT05fUkUiLCJESUdJVFNfUkUiLCJjb21wYXJlVmVyc2lvbiIsInZlcjEiLCJ2ZXIyIiwibWFpbjEiLCJwcmUxIiwiZXhlYyIsIm1haW4yIiwicHJlMiIsImNvbXBhcmVWZXJzaW9uQ2h1bmsiLCJpc1NlbXZlck1vZGUiLCJwYXJ0czEiLCJwYXJ0czIiLCJsZW4xIiwibGVuMiIsInRlc3QiLCJ1bml0cyIsImZvcm1hdFRpbWUiLCJkdXJhdGlvbiIsInVuaXRJbmZvIiwic3RlcCIsImZvcm1hdEJ5dGVMZW5ndGgiLCJ0b0ZpeGVkIiwiaXNFbXB0eSIsImVuc3VyZUFycmF5IiwiYmluYXJ5VHlwZXMiLCJyZXF1ZXN0TG9jYWxGaWxlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJyZXNwb25zZVR5cGUiLCJvcGVuIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiSlNPTiIsInBhcnNlIiwib25lcnJvciIsInNlbmQiLCJGT1JDRURfQUNDRVBUIiwiaXNSZW1vdGUiLCJyZXF1ZXN0Iiwic3RhcnRzV2l0aCIsImJvZHkiLCJoZWFkZXJzIiwiaXNCb2R5T2JqIiwiaG9zdG5hbWUiLCJhY2NlcHQiLCJpbml0IiwiYXNzaWduIiwic3RyaW5naWZ5IiwicmVzcCIsImZldGNoIiwibG9hZE1ldGhvZCIsImFycmF5YnVmZmVyIiwianNvbiIsIlNJTVBMRV9WQUxVRV9UWVBFIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbGVhbiIsImR1bXBTY3JpcHRWYWx1ZSIsImpzb25EdW1wIiwic2ltcGxlIiwiYWxsb3dlZCIsImNyZWF0ZU51bGxPYmoiLCJkYXRhS2V5TmFtZU1hcCIsImhhbmRsZXJzIiwiYmdIYW5kbGVycyIsIm9uU2NyaXB0cyIsImFzc2lnbkhhbmRsZXJzIiwiZGVzdCIsImZvcmNlIiwiYWxsb3dDbWQiLCJkYXRhS2V5IiwiZW5zdXJlTmVzdGVkUHJvcCIsIlhIUiIsIkFERF9FTEVNRU5UIiwiVVBEQVRFX1ZBTFVFIiwiVEFCX0NMT1NFIiwiR0VUX1JFU09VUkNFIiwiR01fQ01EIiwiYWRkRWxlbWVudCIsImFkZFN0eWxlIiwiZGVsZXRlVmFsdWUiLCJkb3dubG9hZCIsImdldFJlc291cmNlVGV4dCIsImdldFJlc291cmNlVVJMIiwibm90aWZpY2F0aW9uIiwib3BlbkluVGFiIiwicmVnaXN0ZXJNZW51Q29tbWFuZCIsInNldENsaXBib2FyZCIsInNldFZhbHVlIiwidW5yZWdpc3Rlck1lbnVDb21tYW5kIiwiR1JBTlRfQ01EIiwiV0lORE9XX0NMT1NFIiwiV0lORE9XX0ZPQ1VTIiwiYnJpZGdlIiwiaWRzIiwicnVubmluZ0lkcyIsImludm9rYWJsZUlkcyIsImZhaWxlZElkcyIsInBhdGhNYXBzIiwiYWRkSGFuZGxlcnMiLCJhZGRCYWNrZ3JvdW5kSGFuZGxlcnMiLCJhbGxvd1NjcmlwdCIsImdyYW50IiwiY21kcyIsInJlZ2V4cFRlc3QiLCJvbkhhbmRsZSIsIm5vZGUiLCJyZWFsbSIsImhhbmRsZSIsImxvZyIsImNhbGxiYWNrSWQiLCJnZXRPd25Qcm9wIiwiQ0FMTEJBQ0tfSUQiLCJpc1Byb21pc2UiLCJwb3N0IiwiZm4iLCJjbGlwYm9hcmREYXRhIiwiZXhlY0NvbW1hbmQiLCJkb2N1bWVudCIsInNldERhdGEiLCJEYXRhVHJhbnNmZXIiLCJQUk9UTyIsImdldENsaXBib2FyZERhdGEiLCJkZXNjcmliZVByb3BlcnR5IiwiQ2xpcGJvYXJkRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIkV2ZW50Iiwib25Db3B5IiwidHlwZSIsInBhcmFtcyIsIm9uIiwib2ZmIiwiU2V0Q2xpcGJvYXJkIiwibWVudXMiLCJzZXRQb3B1cFRocm90dGxlIiwiaXNQb3B1cFNob3duIiwiaW5qZWN0aW9uIiwiUG9wdXBTaG93biIsInN0YXRlIiwic2VuZFNldFBvcHVwIiwiQWRkRWxlbWVudCIsInRhZyIsImF0dHJzIiwiY2JJZCIsImVsIiwicGFyZW50IiwiZWxlbUJ5VGFnIiwibWFrZUVsZW0iLCJhcHBlbmRDaGlsZCIsInN0YWNrIiwiR2V0UmVzb3VyY2UiLCJpc0Jsb2IiLCJwYXRoIiwicmF3IiwiZGVjb2RlUmVzb3VyY2UiLCJSZWdpc3Rlck1lbnUiLCJjYXAiLCJJU19UT1AiLCJVbnJlZ2lzdGVyTWVudSIsImlzRGVsYXllZCIsInBpY2tJbnRvVGhpcyIsInJlc29sdmVkUHJvbWlzZSIsInByb21pc2VSZXNvbHZlIiwiYmFkZ2VQcm9taXNlIiwibnVtQmFkZ2VzU2VudCIsImJmQ2FjaGVXaXJlZCIsImNvbnRlbnRJZCIsImdldFVuaXFJZFNhZmUiLCJ3ZWJJZCIsInhockRhdGEiLCJnZXRYaHJJbmplY3Rpb24iLCJwYWdlSW5mbyIsImZvcmNlQ29udGVudCIsImxvY2F0aW9uIiwiWE1MRG9jdW1lbnQiLCJpbmplY3RQYWdlU2FuZGJveCIsImRhdGFQcm9taXNlIiwiY29tcG9zZWRQYXRoIiwiZ2V0RGF0YUZGIiwiZXhwb3NlIiwiR2V0U2NyaXB0VmVyIiwic2NyaXB0cyIsImluamVjdFNjcmlwdHMiLCJDb21tYW5kIiwiVXBkYXRlZFZhbHVlcyIsImRhdGFQYWdlIiwiZGF0YUNvbnRlbnQiLCJvYmplY3RLZXlzIiwiUnVuIiwidGhyb3R0bGVkU2V0QmFkZ2UiLCJldnQiLCJpc1RydXN0ZWQiLCJwZXJzaXN0ZWQiLCJTZXRUaW1lb3V0IiwiVGFiRm9jdXMiLCJVcGRhdGVWYWx1ZSIsInZpYU1lc3NhZ2luZyIsInZtRGF0YSIsInJhY2UiLCJ2bVJlc29sdmUiLCJxdW90ZWRLZXkiLCJjb29raWVWYWx1ZSIsImNvb2tpZSIsImJsb2JJZCIsIlZNX1VVSUQiLCJyZXZva2VPYmplY3RVUkwiLCJJTklUX0ZVTkNfTkFNRSIsIlZBVUxUX1dSSVRFUiIsIlZBVUxUX1dSSVRFUl9BQ0siLCJjb250TGlzdHMiLCJwZ0xpc3RzIiwicmVhbG1zIiwicGFnZUluamVjdGFibGUiLCJmcmFtZUV2ZW50V25kIiwiaW5qZWN0ZWRSb290IiwiVk1Jbml0SW5qZWN0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJnZXRSZWxhdGVkVGFyZ2V0IiwidGVsbEJyaWRnZVRvV3JpdGVWYXVsdCIsImdldERldGFpbCIsIkN1c3RvbUV2ZW50U2FmZSIsInNhZmVEZWZpbmVQcm9wZXJ0eSIsIkluamVjdExpc3QiLCJpbmplY3RMaXN0IiwiY2xvbmVJbnRvIiwidmF1bHRJZCIsImhhbmRzaGFrZUlkIiwidXNlT3BlbmVyIiwib3BlbmVyIiwic3RhcnRIYW5kc2hha2UiLCJpbmplY3QiLCJ3cmFwcGVkSlNPYmplY3QiLCJvayIsInNldE9rIiwiTW91c2VFdmVudFNhZmUiLCJyZWxhdGVkVGFyZ2V0IiwiZGV0YWlsIiwiaGFuZHNoYWtlciIsImNhcHR1cmUiLCJvbmNlIiwiYmluZEV2ZW50cyIsImZpcmVCcmlkZ2VFdmVudCIsImhhc01vcmUiLCJpbmZvIiwiaW5qZWN0YWJsZSIsImxpc3RzIiwic3RhcnQiLCJpZGxlIiwiaXMiLCJmZWVkYmFjayIsImluamVjdEludG8iLCJwYXRoTWFwIiwicmVhbG1EYXRhIiwicnVuQXQiLCJtb3JlRGF0YSIsImZlZWRJZCIsImhhc0ludm9rZXIiLCJzZXR1cENvbnRlbnRJbnZva2VyIiwib25FbGVtZW50IiwiaW5qZWN0QWxsIiwib25Cb2R5IiwiaW5qZWN0RGVsYXllZFNjcmlwdHMiLCJuZWVkc0ludm9rZXIiLCJnZXRSZWFkeVN0YXRlIiwiaWZyYW1lQ2IiLCJvbkVycm9yIiwiZGlzcGxheU5hbWUiLCJkaXYiLCJkaXZSb290IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImlmcmFtZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29udGVudERvY3VtZW50IiwicmVtb3ZlIiwiaXRlbXMiLCJsaXN0IiwiaW52b2tlQ29udGVudCIsInBvc3RWaWFCcmlkZ2UiLCJ3bmQiLCJub3RpZmljYXRpb25zIiwiTm90aWZpY2F0aW9uIiwibmlkIiwiUmVtb3ZlTm90aWZpY2F0aW9uIiwiTm90aWZpY2F0aW9uQ2xpY2siLCJuIiwiTm90aWZpY2F0aW9uQ2xvc2UiLCJmZXRjaFNhZmUiLCJhcnJheUJ1ZmZlciIsImdldEFycmF5QnVmZmVyIiwiZ2V0QmxvYiIsIlJlc3BvbnNlUHJvdG8iLCJjcmVhdGVPYmplY3RVUkwiLCJyZXF1ZXN0cyIsImRvd25sb2FkQ2hhaW4iLCJIdHRwUmVxdWVzdCIsIm1zZyIsIndhbnRzQmxvYiIsInhoclR5cGUiLCJBYm9ydFJlcXVlc3QiLCJIdHRwUmVxdWVzdGVkIiwiY2h1bmsiLCJyZXEiLCJyZWNlaXZlQ2h1bmsiLCJudW1DaHVua3MiLCJnb3RDaHVua3MiLCJibG9iYmVkIiwiY2h1bmtlZCIsImRvd25sb2FkSWQiLCJpc0xvYWRFbmQiLCJldmVudHNUb05vdGlmeSIsImltcG9ydGluZyIsImJpbiIsImltcG9ydEJsb2IiLCJyZWNlaXZlQWxsQ2h1bmtzIiwiZ290TG9hZEVuZCIsImZpbGVOYW1lIiwiZG93bmxvYWRCbG9iIiwicmV2b2tlQmxvYkFmdGVyVGltZW91dCIsImFyciIsIlVpbnQ4QXJyYXlTYWZlIiwiZGF0YVNpemUiLCJwcm9jZXNzQ2h1bmsiLCJmaW5pc2hDaHVua3MiLCJwb3MiLCJsYXN0IiwiYXRvYlNhZmUiLCJCbG9iU2FmZSIsImNvbnRlbnRUeXBlIiwiYnVmZmVyIiwidGFiSWRzIiwidGFiS2V5cyIsIlRhYk9wZW4iLCJUYWJDbG9zZSIsIlRhYkNsb3NlZCIsImFyZyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImNyZWF0ZUVsZW1lbnROUyIsIk5TX0hUTUwiLCJpc1N0cmluZyIsImFwcGVuZCIsInNldEF0dHJpYnV0ZSIsImdldEhyZWYiLCJzdHJpbmdJbmRleE9mIiwiYnl0ZXMiLCJ0ZERlY29kZSIsIlRleHREZWNvZGVyU2FmZSIsImhpc3RvcnkiLCJyZWZlcnJlciIsInRleHQiLCJnZXRUZXh0IiwiZmV0Y2hPcHRzIiwib2xkQ29kZSIsImZyb20iLCJzdG9yYWdlIiwibWFuYWdlZCIsIm9uQ29ubmVjdCIsInBvcnQiLCJwb3N0TWVzc2FnZSIsIm9uRGlzY29ubmVjdCIsInRhYiIsImNsb3NlU2VsZiIsImdvIiwiZXZlbnRJZCIsImV2dE1haW4iLCJzcmNJZCIsImRlc3RJZCIsImluY29taW5nTm9kZUV2ZW50IiwiZXZ0Tm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUFBO1FBQ0EsMEJBQTBCLG1CQUFtQiw4Q0FBOEMsa0NBQWtDLHFEQUFxRCxvREFBb0Q7O1FBRXRPO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGNBQWMsa0JBQWtCO1FBQ2hDOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxtQ0FBbUMsZ0RBQWdEO1FBQ25GO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsNkNBQTZDLGtDQUFrQztRQUMvRTtRQUNBLDBDQUEwQyw4QkFBOEI7UUFDeEU7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsYUFBYTtRQUNiO1FBQ0Esa0NBQWtDLGlEQUFpRDtRQUNuRjtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDQSxVQUFELElBQWUscUJBQUNDLE1BQU0sQ0FBQ0MsT0FBUixxQkFBQyxnQkFBZ0JDLE9BQWpCLENBQW5CLEVBQTZDO0FBQzNDO0FBQ0EsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLFNBQUssRUFBRUM7QUFBakIsTUFBK0JMLE1BQXJDO0FBQ0EsUUFBTTtBQUFFTSxTQUFGO0FBQVNDO0FBQVQsTUFBa0JGLFNBQXhCO0FBQ0EsUUFBTUcsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLE9BQWQ7O0FBQ0EsUUFBTUMsZ0JBQWdCLEdBQUdDLEdBQUcsSUFBSUEsR0FBRyxLQUFLLGFBQVIsSUFDM0JBLEdBQUcsS0FBSyxnQkFEbUIsSUFFM0JBLEdBQUcsS0FBSyxhQUZtQixJQUczQkEsR0FBRyxLQUFLLGNBSGI7QUFJQTs7O0FBQ0EsUUFBTUMsVUFBVSxHQUFHQyxHQUFHLElBQUksT0FBT0EsR0FBUCxLQUFlLFVBQXpDOztBQUNBLFFBQU1DLFFBQVEsR0FBR0QsR0FBRyxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUF2Qzs7QUFDQSxRQUFNRSxZQUFZLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTTCxHQUFULEVBQWNNLEdBQWQsRUFBbUJDLE9BQW5CLEtBQStCO0FBQ2xELFVBQU1DLE1BQU0sR0FBR0YsR0FBRyxDQUFDTixHQUFELENBQWxCO0FBQ0EsUUFBSVEsTUFBTSxLQUFLQyxTQUFmLEVBQTBCO0FBQzFCLFFBQUlDLEdBQUo7O0FBQ0EsUUFBSVQsVUFBVSxDQUFDTSxPQUFELENBQWQsRUFBeUI7QUFDdkJHLFNBQUcsR0FBR0gsT0FBTyxDQUFDRCxHQUFELEVBQU1FLE1BQU4sQ0FBYjtBQUNELEtBRkQsTUFFTyxJQUFJUCxVQUFVLENBQUNPLE1BQUQsQ0FBZCxFQUF3QjtBQUM3QkUsU0FBRyxHQUFHSCxPQUFPLEtBQUssQ0FBWixJQUFpQlIsZ0JBQWdCLENBQUNDLEdBQUQsQ0FBakMsSUFBMEMsQ0FBQyxTQUFLVyxjQUFMLEVBQUFMLEdBQUcsRUFBaUJOLEdBQWpCLENBQTlDLEdBQ0YsU0FBUUosSUFBUixFQUFBWSxNQUFNLEVBQU9GLEdBQVAsQ0FESixHQUVGTSxTQUFTLENBQUNOLEdBQUQsRUFBTUUsTUFBTixDQUZiLENBRDZCLENBR0Q7QUFDN0IsS0FKTSxNQUlBLElBQUlMLFFBQVEsQ0FBQ0ssTUFBRCxDQUFSLElBQW9CRCxPQUFPLEtBQUssQ0FBcEMsRUFBdUM7QUFDNUNHLFNBQUcsR0FBR0csWUFBWSxDQUFDTCxNQUFELEVBQVNELE9BQVQsQ0FBbEIsQ0FENEMsQ0FDUDtBQUN0QyxLQUZNLE1BRUE7QUFDTEcsU0FBRyxHQUFHRixNQUFOO0FBQ0Q7O0FBQ0RILFVBQU0sQ0FBQ0wsR0FBRCxDQUFOLEdBQWNVLEdBQWQ7QUFDQSxXQUFPQSxHQUFQO0FBQ0QsR0FqQkQ7O0FBa0JBLFFBQU1HLFlBQVksR0FBRyxDQUFDUCxHQUFELEVBQU1RLElBQU4sS0FBZSxJQUFJcEIsU0FBSixDQUFjLEVBQWQsRUFBa0I7QUFDcERxQixPQUFHLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRaEIsR0FBUjtBQUFBOztBQUFBLDJCQUFnQmdCLEtBQUssQ0FBQ2hCLEdBQUQsQ0FBckIseUJBQThCSSxZQUFZLENBQUNZLEtBQUQsRUFBUWhCLEdBQVIsRUFBYU0sR0FBYixFQUFrQlEsSUFBbEIsb0JBQWtCQSxJQUFJLENBQUdkLEdBQUgsQ0FBdEIsQ0FBMUM7QUFBQTtBQUQrQyxHQUFsQixDQUFwQztBQUdBOzs7Ozs7O0FBS0EsUUFBTVksU0FBUyxHQUFHLENBQUNLLE9BQUQsRUFBVUMsSUFBVixFQUFnQkMsZ0JBQWhCLEtBQ2hCLENBQUMsR0FBR0MsSUFBSixLQUFhO0FBQ1gsUUFBSUMsT0FBSjtBQUNBLFFBQUlDLE1BQUo7QUFDQTs7OztBQUdBLFVBQU1DLE9BQU8sR0FBRyxJQUFJQyxXQUFKLENBQWdCLENBQUNDLFFBQUQsRUFBV0MsT0FBWCxLQUF1QjtBQUNyREwsYUFBTyxHQUFHSSxRQUFWO0FBQ0FILFlBQU0sR0FBR0ksT0FBVDtBQUNELEtBSGUsQ0FBaEIsQ0FOVyxDQVVYOztBQUNBLFVBQU1DLFNBQVMsR0FBRyxJQUFJQyxTQUFKLENBQWUsNkJBQTRCVixJQUFJLENBQUNXLElBQUwsSUFBYSxZQUFhLEdBQXJFLENBQWxCLENBWFcsQ0FZWDs7QUFDQVQsUUFBSSxDQUFDQSxJQUFJLENBQUNVLE1BQU4sQ0FBSixHQUFvQkMsTUFBTSxJQUFJO0FBQzVCLFlBQU1DLFVBQVUsR0FBR3hDLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlMEMsU0FBbEM7QUFDQSxZQUFNQyxHQUFHLEdBQUdGLFVBQVUsS0FDcEJiLGdCQUFnQixHQUNaQSxnQkFBZ0IsQ0FBQ0UsT0FBRCxFQUFVVSxNQUFWLENBREosR0FFWlYsT0FBTyxDQUFDVSxNQUFELENBSFMsQ0FBdEIsQ0FGNEIsQ0FPNUI7O0FBQ0EsVUFBSUcsR0FBSixFQUFTO0FBQ1AsWUFBSSxDQUFDRixVQUFMLEVBQWlCTCxTQUFTLENBQUM3QixLQUFELENBQVQsR0FBb0IsR0FBRW9DLEdBQUcsQ0FBQyxDQUFELENBQUksS0FBSVAsU0FBUyxDQUFDN0IsS0FBRCxDQUFRLEVBQWxEO0FBQ2pCNkIsaUJBQVMsQ0FBQzlCLE9BQUQsQ0FBVCxHQUFxQm1DLFVBQVUsR0FBR0UsR0FBRyxDQUFDckMsT0FBRCxDQUFOLEdBQW1CLEdBQUVxQyxHQUFHLENBQUMsQ0FBRCxDQUFJLEVBQTNEO0FBQ0FQLGlCQUFTLENBQUNRLFNBQVYsR0FBc0IsQ0FBQyxDQUFDSCxVQUF4QjtBQUNBVixjQUFNLENBQUNLLFNBQUQsQ0FBTjtBQUNEO0FBQ0YsS0FkRDs7QUFlQSxRQUFJUyxJQUFKLEVBQTZCO0FBQzNCLFVBQUk7QUFDRixpQkFBTXpDLEtBQU4sRUFBQXVCLElBQUksRUFBUUQsT0FBUixFQUFpQkcsSUFBakIsQ0FBSjtBQUNELE9BRkQsQ0FFRSxPQUFPaUIsQ0FBUCxFQUFVO0FBQ1YsWUFBSUEsQ0FBQyxDQUFDeEMsT0FBRCxDQUFELEtBQWUsZ0NBQW5CLEVBQXFEO0FBQ25EeUMsaUJBQU8sQ0FBQ0MsS0FBUixDQUFjLHFFQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZ0JBQU1GLENBQU47QUFDRDtBQUNGO0FBQ0YsS0FWRCxNQVVPLEVBRU47O0FBQ0QsUUFBSUQsS0FBSixFQUF1QmIsRUFBQTtBQUN2QixXQUFPQSxPQUFQO0FBQ0QsR0E1Q0gsQ0F2QzJDLENBcUYzQzs7O0FBQ0EsUUFBTWlCLFdBQVcsR0FBR1QsTUFBTSxJQUFJLENBQzVCQSxNQUQ0QixFQUU1QixJQUY0QixDQUE5QixDQXRGMkMsQ0EwRjNDOzs7QUFDQSxRQUFNVSxTQUFTLEdBQUdQLEdBQUcsSUFBSUUsTUFBQSxJQUEwQyxDQUNqRSxJQURpRSxFQUVqRUYsR0FBRyxZQUFZTixTQUFmLEdBQ0ksQ0FBQ00sR0FBRyxDQUFDckMsT0FBRCxDQUFKLEVBQWVxQyxHQUFHLENBQUNwQyxLQUFELENBQWxCLENBREosR0FFSSxDQUFDb0MsR0FBRCxFQUFNLEVBQU4sQ0FKNkQsQ0FBbkU7O0FBTUEsUUFBTVEsaUJBQWlCLEdBQUcsT0FBT1gsTUFBUCxFQUFlWSxZQUFmLEtBQWdDO0FBQ3hELFFBQUk7QUFDRlosWUFBTSxHQUFHLE1BQU1BLE1BQWY7QUFDQSxVQUFJSyxLQUFKLEVBQXVCRSxFQUFBO0FBQ3ZCSyxrQkFBWSxDQUFDSCxXQUFXLENBQUNULE1BQUQsQ0FBWixDQUFaO0FBQ0QsS0FKRCxDQUlFLE9BQU9HLEdBQVAsRUFBWTtBQUNaUyxrQkFBWSxDQUFDRixTQUFTLENBQUNQLEdBQUQsQ0FBVixDQUFaO0FBQ0Q7QUFDRixHQVJEOztBQVNBLFFBQU1VLGlCQUFpQixHQUFHLENBQUNDLFFBQUQsRUFBV0MsT0FBWCxFQUFvQkMsTUFBcEIsRUFBNEJKLFlBQTVCLEtBQTZDO0FBQ3JFLFFBQUlQLEtBQUosRUFBdUJFLEVBQUE7O0FBQ3ZCLFFBQUk7QUFDRixZQUFNUCxNQUFNLEdBQUdjLFFBQVEsQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLENBQXZCOztBQUNBLFVBQUloQixNQUFNLElBQUksU0FBUWlCLGNBQVIsRUFBQWpCLE1BQU0sTUFBdUIsa0JBQTNDLEVBQStEO0FBQzdEVyx5QkFBaUIsQ0FBQ1gsTUFBRCxFQUFTWSxZQUFULENBQWpCO0FBQ0EsZUFBTyxJQUFQO0FBQ0QsT0FMQyxDQU1GO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBSVosTUFBTSxLQUFLdEIsU0FBZixFQUEwQjtBQUN4QmtDLG9CQUFZLENBQUNILFdBQVcsQ0FBQ1QsTUFBRCxDQUFaLENBQVo7QUFDRDtBQUNGLEtBWkQsQ0FZRSxPQUFPRyxHQUFQLEVBQVk7QUFDWlMsa0JBQVksQ0FBQ0YsU0FBUyxDQUFDUCxHQUFELENBQVYsQ0FBWjtBQUNEO0FBQ0YsR0FqQkQ7QUFrQkE7OztBQUNBLFFBQU1lLGNBQWMsR0FBRyxDQUFDNUIsT0FBRCxFQUFVNkIsUUFBVixLQUNyQixDQUFDQSxRQUFELElBQWEsZUFBYixJQUNHQSxRQUFRLENBQUMsQ0FBRCxDQURYLENBQ2U7QUFEZixLQUVHN0IsT0FBTyxDQUFDNkIsUUFBUSxDQUFDLENBQUQsQ0FBVCxDQUhXLENBR0c7QUFIMUI7O0FBS0EsUUFBTUMsZUFBZSxHQUFHLENBQUM1RCxPQUFELEVBQVU2RCxXQUFWLEtBQ3RCeEMsU0FBUyxDQUFDckIsT0FBRCxFQUFVNkQsV0FBVixFQUF1QkgsY0FBdkIsQ0FEWDtBQUdBOzs7Ozs7QUFJQTVELFFBQU0sQ0FBQ0MsT0FBUCxHQUFpQnVCLFlBQVksQ0FBQ3JCLE1BQUQsRUFBUztBQUNwQzZELGFBQVMsRUFBRSxDQUR5QjtBQUN0QjtBQUNkQyxRQUFJLEVBQUUsQ0FGOEI7QUFFM0I7QUFDVC9ELFdBQU8sRUFBRTtBQUNQZ0UsYUFBTyxFQUFFLENBREY7QUFFUEMsaUJBQVcsRUFBRSxDQUZOO0FBR1BDLFlBQU0sRUFBRSxDQUhEO0FBSVBDLGVBQVMsRUFBRTtBQUNUQyxtQkFBVyxFQUFFLENBQUNELFNBQUQsRUFBWUMsV0FBWixLQUNYZCxRQUFRLElBQUksU0FBV2MsV0FBWCxFQUFBRCxTQUFTLEVBQWMsU0FBbUI5RCxJQUFuQixFQUFBZ0QsaUJBQWlCLEVBQU8sSUFBUCxFQUFhQyxRQUFiLENBQS9CO0FBRmQsT0FKSjtBQVNQTyxpQkFBVyxFQUFFRDtBQVROLEtBSDJCO0FBY3BDUyxRQUFJLEVBQUU7QUFDSkwsYUFBTyxFQUFFLENBREw7QUFFSkgsaUJBQVcsRUFBRUQ7QUFGVDtBQWQ4QixHQUFULENBQTdCLENBekkyQyxDQTRKM0M7QUFDRCxDQTdKRCxNQTZKTyxJQUFJZixLQUFKLEVBQXFDLEVBZ0MzQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25NQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNPLE1BQU15QixNQUFNLEdBQUcsS0FBZjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxhQUF0QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLDhFQUE1QjtBQUVBLE1BQU1DLFdBQVcsR0FBRyxNQUFwQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxNQUFwQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxTQUF2QjtBQUVBLE1BQU1DLGNBQWMsR0FBRztBQUM1QkMsV0FBUyxFQUFFLElBRGlCO0FBRTVCO0FBQ0EsR0FBQ0osV0FBRCxHQUFlLENBQUNDLFdBQUQsRUFBY0MsY0FBZCxDQUhhO0FBSTVCO0FBQ0EsR0FBQ0QsV0FBRCxHQUFlLENBQUNBLFdBQUQsQ0FMYTtBQU01QjtBQUNBLEdBQUNDLGNBQUQsR0FBa0IsQ0FBQ0EsY0FBRDtBQVBVLENBQXZCO0FBVUEsTUFBTUcsY0FBYyxHQUFHLFdBQXZCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsY0FBMUIsQyxDQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1DLFlBQVksR0FBRyw0RUFBckI7QUFFQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUIsQyxDQUVQO0FBQ0E7O0FBQ08sTUFBTTtBQUFFbEY7QUFBRixJQUFjRCxNQUFwQixDLENBRVA7O0FBQ08sTUFBTW9GLFdBQVcsR0FBRyxVQUFwQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxLQUFLLEVBQUwsR0FBVSxJQUEvQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsSUFBdkM7QUFDQSxNQUFNQyxZQUFZLEdBQUcsSUFBSSxFQUFKLEdBQVMsRUFBVCxHQUFjLEVBQWQsR0FBbUIsSUFBeEMsQzs7Ozs7Ozs7Ozs7O0FDeENQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVPLE1BQU1DLFlBQVksR0FBRyw0QkFBckI7QUFFQSxTQUFTQyxTQUFULEdBQXFCO0FBQzFCLFFBQU1DLEtBQUssR0FBRyxFQUFkOztBQUVBLFdBQVNDLElBQVQsQ0FBY0MsSUFBZCxFQUFvQjtBQUNsQkYsU0FBSyxDQUFDRyxLQUFOLEdBQWNDLE9BQWQsQ0FBdUJDLEVBQUQsSUFBUTtBQUM1QkEsUUFBRSxDQUFDSCxJQUFELENBQUY7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsV0FBU0ksSUFBVCxDQUFjQyxRQUFkLEVBQXdCO0FBQ3RCUCxTQUFLLENBQUNRLElBQU4sQ0FBV0QsUUFBWDtBQUNBLFdBQU8sTUFBTTtBQUNYLFlBQU1FLENBQUMsR0FBR1QsS0FBSyxDQUFDVSxPQUFOLENBQWNILFFBQWQsQ0FBVjtBQUNBLFVBQUlFLENBQUMsSUFBSSxDQUFULEVBQVlULEtBQUssQ0FBQ1csTUFBTixDQUFhRixDQUFiLEVBQWdCLENBQWhCO0FBQ2IsS0FIRDtBQUlEOztBQUVELFNBQU87QUFBRUgsUUFBRjtBQUFRTDtBQUFSLEdBQVA7QUFDRDtBQUVEOzs7Ozs7OztBQU9PLFNBQVNXLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCWCxJQUF0QixFQUE0QlksT0FBNUIsRUFBcUM7QUFDMUMsU0FBT3pDLFdBQVcsQ0FBQztBQUFFd0MsT0FBRjtBQUFPWDtBQUFQLEdBQUQsRUFBZ0JZLE9BQWhCLENBQWxCO0FBQ0QsQyxDQUVEO0FBQ0E7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsQ0FDeEIsZ0JBRHdCLEVBRXhCLGNBRndCLEVBR3hCLFVBSHdCLEVBSXhCLFVBSndCLEVBS3hCLFNBTHdCLEVBTXhCO0FBQ0Y7Ozs7Ozs7O0FBUDBCLENBQTFCOztBQWdCQSxNQUFNQyxTQUFTLEdBQUcsTUFBTXpHLDhGQUFPLENBQUMrRCxTQUFSLENBQWtCMkMsaUJBQXhCLG9CQUFNMUcsOEZBQU8sQ0FBQytELFNBQVIsQ0FBa0IyQyxpQkFBbEIsRUFBeEI7QUFFQTs7Ozs7O0FBSU8sU0FBU0MsZUFBVCxDQUF5QkwsR0FBekIsRUFBOEJYLElBQTlCLEVBQW9DWSxPQUFwQyxFQUE2QztBQUNsRCxRQUFNSyxFQUFFLEdBQUcsQ0FBQ0osaUJBQWlCLENBQUNLLFFBQWxCLENBQTJCUCxHQUEzQixDQUFELElBQW9DRyxTQUFTLEVBQXhEO0FBQ0EsU0FBT0csRUFBRSxJQUFJQSxFQUFFLEtBQUtFLE1BQWIsSUFBdUJGLEVBQUUsQ0FBQ0csUUFBMUIsR0FDSEgsRUFBRSxDQUFDSSxvQkFBSCxDQUF3QkosRUFBRSxDQUFDRyxRQUFILENBQVk7QUFBRVQsT0FBRjtBQUFPWDtBQUFQLEdBQVosQ0FBeEIsRUFBb0RzQixJQUFwRCxDQUF5REYsZ0RBQXpELENBREcsR0FFSFYsT0FBTyxDQUFDQyxHQUFELEVBQU1YLElBQU4sRUFBWVksT0FBWixDQUZYO0FBR0Q7QUFFRDs7Ozs7Ozs7QUFPTyxTQUFTVyxVQUFULENBQW9CQyxLQUFwQixFQUEyQmIsR0FBM0IsRUFBZ0NYLElBQWhDLEVBQXNDWSxPQUF0QyxFQUErQztBQUNwRCxTQUFPdkcsOEZBQU8sQ0FBQ3NFLElBQVIsQ0FBYVIsV0FBYixDQUF5QnFELEtBQXpCLEVBQWdDO0FBQUViLE9BQUY7QUFBT1g7QUFBUCxHQUFoQyxFQUErQ1ksT0FBL0MsRUFBd0RhLEtBQXhELENBQThEQywwQ0FBOUQsQ0FBUDtBQUNELEMsQ0FFRDs7QUFDTyxTQUFTdkQsV0FBVCxDQUFxQndELE9BQXJCLEVBQThCO0FBQUVDO0FBQUYsSUFBWSxFQUExQyxFQUE4QztBQUNuRCxNQUFJQSxLQUFKLEVBQVcsT0FBT0MsZ0JBQWdCLENBQUNGLE9BQUQsQ0FBdkI7QUFDWCxNQUFJckYsT0FBTyxHQUFHakMsOEZBQU8sQ0FBQ0MsT0FBUixDQUFnQjZELFdBQWhCLENBQTRCd0QsT0FBNUIsQ0FBZCxDQUZtRCxDQUduRDs7QUFDQSxNQUFJLEtBQUosRUFBd0QsRUFFdkQ7O0FBQ0QsU0FBT3JGLE9BQVA7QUFDRDtBQUVEOzs7Ozs7O0FBTU8sZUFBZXVGLGdCQUFmLENBQWdDRixPQUFoQyxFQUF5Q0csT0FBTyxHQUFHLEVBQW5ELEVBQXVEO0FBQzVELE1BQUlDLGFBQWEsR0FBRyxFQUFwQjs7QUFDQSxTQUFPRCxPQUFPLEdBQUcsQ0FBakIsRUFBb0JBLE9BQU8sSUFBSSxDQUEvQixFQUFrQztBQUNoQyxRQUFJO0FBQ0YsWUFBTTlCLElBQUksR0FBRyxNQUFNN0IsV0FBVyxDQUFDd0QsT0FBRCxDQUE5QjtBQUNBLFVBQUkzQixJQUFKLEVBQVUsT0FBT0EsSUFBUDtBQUNYLEtBSEQsQ0FHRSxPQUFPNUMsQ0FBUCxFQUFVO0FBQ1YsVUFBSSxDQUFFLEdBQUVBLENBQUUsRUFBTCxDQUFPOEQsUUFBUCxDQUFnQixpQ0FBaEIsQ0FBTCxFQUF5RDtBQUN2RCxjQUFNOUQsQ0FBTjtBQUNEO0FBQ0Y7O0FBQ0QsVUFBTTRFLFNBQVMsQ0FBQ0QsYUFBRCxDQUFmO0FBQ0FBLGlCQUFhLElBQUksQ0FBakI7QUFDRDs7QUFDRCxRQUFNLElBQUlFLEtBQUosQ0FBVSxzREFBVixDQUFOO0FBQ0Q7QUFFTSxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QnRGLE1BQXhCLEVBQWdDdUYsR0FBRyxHQUFHLEdBQXRDLEVBQTJDO0FBQ2hELE1BQUlDLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxRQUFOLEVBQVY7O0FBQ0EsU0FBT0QsR0FBRyxDQUFDeEYsTUFBSixHQUFhQSxNQUFwQixFQUE0QndGLEdBQUcsR0FBSSxHQUFFRCxHQUFJLEdBQUVDLEdBQUksRUFBbkI7O0FBQzVCLFNBQU9BLEdBQVA7QUFDRDtBQUVEOzs7O0FBR08sU0FBU0UsZUFBVCxDQUF5QjFHLElBQXpCLEVBQStCZCxHQUEvQixFQUFvQztBQUN6QyxRQUFNeUgsVUFBVSxHQUFHQyxTQUFTLENBQUNDLFNBQVYsQ0FDbkI7QUFEbUIsR0FFbEJDLEdBRmtCLENBRWRDLElBQUksSUFBSS9HLElBQUksQ0FBRSxHQUFFZCxHQUFJLElBQUc2SCxJQUFLLEVBQWhCLENBQUosSUFBMEIvRyxJQUFJLENBQUUsR0FBRWQsR0FBSSxJQUFHNkgsSUFBSSxDQUFDQyxXQUFMLEVBQW1CLEVBQTlCLENBRnhCLEVBR2xCQyxJQUhrQixDQUdiQyxPQUhhLENBQW5CO0FBSUEsU0FBT1AsVUFBVSxJQUFJM0csSUFBSSxDQUFDZCxHQUFELENBQWxCLElBQTJCLEVBQWxDO0FBQ0Q7QUFFTSxTQUFTaUksYUFBVCxDQUF1QkMsTUFBdkIsRUFBK0I7QUFBQTs7QUFDcEMsU0FBT0EsTUFBTSxDQUFDQyxNQUFQLENBQWN0RyxJQUFkLElBQXNCMkYsZUFBZSxDQUFDVSxNQUFNLENBQUNwSCxJQUFSLEVBQWMsTUFBZCxDQUFyQyxJQUNELElBQUQsb0JBQUlvSCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsRUFBakIsK0JBQXVCL0Usa0RBQUksQ0FBQyxhQUFELENBQWdCLEVBRGhEO0FBRUQ7QUFFTSxTQUFTZ0YsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQ3BDLFFBQU1DLEdBQUcsR0FBRyxJQUFJQyxHQUFKLENBQVFILEdBQVIsRUFBYUMsSUFBYixDQUFaLENBRG9DLENBRXBDOztBQUNBLE1BQUksQ0FBQyxDQUNILE9BREcsRUFFSCxRQUZHLEVBR0gsTUFIRyxFQUlILE9BSkcsRUFLSHJDLFFBTEcsQ0FLTXNDLEdBQUcsQ0FBQ0UsUUFMVixDQUFMLEVBSzBCRixHQUFHLENBQUNFLFFBQUosR0FBZSxPQUFmO0FBQzFCLFNBQU9GLEdBQUcsQ0FBQ0csSUFBWDtBQUNEO0FBRU0sU0FBU0MsY0FBVCxDQUF3QmhILElBQXhCLEVBQThCO0FBQ25DO0FBQ0EsU0FBT0EsSUFBSSxDQUFDaUgsT0FBTCxDQUFhLG1CQUFiLEVBQW1DQyxDQUFELElBQU87QUFDOUMsUUFBSUMsSUFBSSxHQUFHRCxDQUFDLENBQUNFLFVBQUYsQ0FBYSxDQUFiLEVBQWdCMUIsUUFBaEIsQ0FBeUIsRUFBekIsQ0FBWDtBQUNBLFFBQUl5QixJQUFJLENBQUNsSCxNQUFMLEdBQWMsQ0FBbEIsRUFBcUJrSCxJQUFJLEdBQUksSUFBR0EsSUFBSyxFQUFoQjtBQUNyQixXQUFRLElBQUdBLElBQUssRUFBaEI7QUFDRCxHQUpNLENBQVA7QUFLRDtBQUVNLFNBQVNFLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDO0FBQ3ZDLFNBQU9BLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQixpQkFBakIsRUFBb0MsQ0FBQ00sRUFBRCxFQUFLQyxDQUFMLEtBQVdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsUUFBUSxDQUFDSCxDQUFELEVBQUksRUFBSixDQUE1QixDQUEvQyxDQUFQO0FBQ0Q7QUFFTSxlQUFlSSxZQUFmLEdBQThCO0FBQ25DLFNBQU8sQ0FDTCxNQUFNbkssOEZBQU8sQ0FBQ3NFLElBQVIsQ0FBYThGLEtBQWIsQ0FBbUI7QUFDdkJDLFVBQU0sRUFBRSxJQURlO0FBRXZCQyxpQkFBYSxFQUFFO0FBRlEsR0FBbkIsQ0FERCxFQUtMLENBTEssS0FLQyxFQUNOO0FBQ0EsUUFBTXRLLDhGQUFPLENBQUNzRSxJQUFSLENBQWE4RixLQUFiLENBQW1CO0FBQ3ZCQyxVQUFNLEVBQUUsSUFEZTtBQUV2QkUsWUFBUSxFQUFFLENBQUMsTUFBTXZLLDhGQUFPLENBQUN3SyxPQUFSLENBQWdCQyxVQUFoQixFQUFQLEVBQXFDMUI7QUFGeEIsR0FBbkIsQ0FGQSxFQU1OLENBTk0sQ0FMUjtBQVlEO0FBRU0sU0FBU3BCLFNBQVQsQ0FBbUIrQyxFQUFuQixFQUF1QjtBQUM1QixTQUFPQSxFQUFFLEdBQUcsQ0FBTCxHQUNIQyxPQUFPLENBQUM1SSxPQUFSLEVBREcsR0FFSCxJQUFJNEksT0FBSixDQUFZNUksT0FBTyxJQUFJNkksVUFBVSxDQUFDN0ksT0FBRCxFQUFVMkksRUFBVixDQUFqQyxDQUZKO0FBR0Q7QUFFTSxTQUFTRyxRQUFULENBQWtCQyxTQUFsQixFQUE2QjtBQUNsQyxTQUFPLEtBQUtDLE1BQUwsQ0FBWXJDLE9BQVosRUFBcUJzQyxJQUFyQixDQUEwQkYsU0FBMUIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQzVMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0csYUFBVCxDQUF1QnZLLEdBQXZCLEVBQTRCO0FBQ2pDLE1BQUlBLEdBQUcsSUFBSSxJQUFYLEVBQWlCLE9BQU8sRUFBUDtBQUNqQixNQUFJd0ssS0FBSyxDQUFDQyxPQUFOLENBQWN6SyxHQUFkLENBQUosRUFBd0IsT0FBT0EsR0FBUDtBQUN4QixTQUFRLEdBQUVBLEdBQUksRUFBUCxDQUFTMEssS0FBVCxDQUFlLEdBQWYsRUFBb0JMLE1BQXBCLENBQTJCckMsT0FBM0IsQ0FBUDtBQUNEO0FBRU0sU0FBUzJDLFNBQVQsQ0FBbUJsQyxHQUFuQixFQUF3Qm1DLE1BQXhCLEVBQWdDQyxHQUFoQyxFQUFxQztBQUMxQyxRQUFNQyxJQUFJLEdBQUdQLGFBQWEsQ0FBQ0ssTUFBRCxDQUExQjtBQUNBLE1BQUlsSyxHQUFHLEdBQUcrSCxHQUFWO0FBQ0FxQyxNQUFJLENBQUNDLEtBQUwsQ0FBWS9LLEdBQUQsSUFBUztBQUNsQixRQUFJVSxHQUFHLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQXRCLElBQW1DVixHQUFHLElBQUlVLEdBQTlDLEVBQW9EO0FBQ2xEQSxTQUFHLEdBQUdBLEdBQUcsQ0FBQ1YsR0FBRCxDQUFUO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7O0FBQ0RVLE9BQUcsR0FBR21LLEdBQU47QUFDQSxXQUFPLEtBQVA7QUFDRCxHQVBEO0FBUUEsU0FBT25LLEdBQVA7QUFDRDtBQUVNLFNBQVNzSyxTQUFULENBQW1CdkMsR0FBbkIsRUFBd0JtQyxNQUF4QixFQUFnQzFLLEdBQWhDLEVBQXFDO0FBQzFDLFFBQU00SyxJQUFJLEdBQUdQLGFBQWEsQ0FBQ0ssTUFBRCxDQUExQjtBQUNBLE1BQUksQ0FBQ0UsSUFBSSxDQUFDaEosTUFBVixFQUFrQixPQUFPNUIsR0FBUDtBQUNsQixRQUFNK0ssSUFBSSxHQUFHeEMsR0FBRyxJQUFJLEVBQXBCO0FBQ0EsTUFBSXlDLEdBQUcsR0FBR0QsSUFBVjtBQUNBLFFBQU1FLE9BQU8sR0FBR0wsSUFBSSxDQUFDTSxHQUFMLEVBQWhCO0FBQ0FOLE1BQUksQ0FBQzNGLE9BQUwsQ0FBY25GLEdBQUQsSUFBUztBQUNwQmtMLE9BQUcsR0FBR0EsR0FBRyxDQUFDbEwsR0FBRCxDQUFILEtBQWFrTCxHQUFHLENBQUNsTCxHQUFELENBQUgsR0FBVyxFQUF4QixDQUFOO0FBQ0QsR0FGRDs7QUFHQSxNQUFJLE9BQU9FLEdBQVAsS0FBZSxXQUFuQixFQUFnQztBQUM5QixXQUFPZ0wsR0FBRyxDQUFDQyxPQUFELENBQVY7QUFDRCxHQUZELE1BRU87QUFDTEQsT0FBRyxDQUFDQyxPQUFELENBQUgsR0FBZWpMLEdBQWY7QUFDRDs7QUFDRCxTQUFPK0ssSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7QUFNTyxTQUFTSSxVQUFULENBQW9CNUMsR0FBcEIsRUFBeUJxQyxJQUF6QixFQUErQlEsU0FBL0IsRUFBMEM7QUFDL0MsU0FBT1IsSUFBSSxDQUFDUyxNQUFMLENBQVksQ0FBQzdLLEdBQUQsRUFBTVYsR0FBTixLQUFjO0FBQy9CLFFBQUl3TCxLQUFLLEdBQUcvQyxHQUFILG9CQUFHQSxHQUFHLENBQUd6SSxHQUFILENBQWY7QUFDQSxRQUFJc0wsU0FBSixFQUFlRSxLQUFLLEdBQUdGLFNBQVMsQ0FBQ0UsS0FBRCxFQUFReEwsR0FBUixDQUFqQjtBQUNmLFFBQUl3TCxLQUFLLElBQUksSUFBYixFQUFtQjlLLEdBQUcsQ0FBQ1YsR0FBRCxDQUFILEdBQVd3TCxLQUFYO0FBQ25CLFdBQU85SyxHQUFQO0FBQ0QsR0FMTSxFQUtKLEVBTEksQ0FBUDtBQU1ELEMsQ0FFRDs7QUFDTyxTQUFTK0ssUUFBVCxDQUFrQnZLLElBQWxCLEVBQXdCO0FBQzdCLFNBQU93SyxNQUFNLENBQUNDLE9BQVAsQ0FBZSxJQUFmLEVBQXFCSixNQUFyQixDQUE0QixDQUFDN0ssR0FBRCxFQUFNa0wsS0FBTixFQUFhcEcsQ0FBYixFQUFnQnFHLFVBQWhCLEtBQStCO0FBQ2hFbkwsT0FBRyxDQUFDa0wsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFILEdBQWdCMUssSUFBSSxDQUFDMEssS0FBRCxFQUFRcEcsQ0FBUixFQUFXcUcsVUFBWCxDQUFwQjtBQUNBLFdBQU9uTCxHQUFQO0FBQ0QsR0FITSxFQUdKLEVBSEksQ0FBUDtBQUlELEMsQ0FFRDs7QUFDTyxTQUFTb0wsWUFBVCxDQUFzQjVLLElBQXRCLEVBQTRCO0FBQ2pDLE1BQUksSUFBSixFQUFVd0ssTUFBTSxDQUFDQyxPQUFQLENBQWUsSUFBZixFQUFxQnhHLE9BQXJCLENBQTZCakUsSUFBN0I7QUFDWCxDLENBRUQ7O0FBQ08sU0FBUzZLLFVBQVQsQ0FBb0I3SyxJQUFwQixFQUEwQjtBQUMvQixNQUFJLElBQUosRUFBVXdLLE1BQU0sQ0FBQ1osSUFBUCxDQUFZLElBQVosRUFBa0IzRixPQUFsQixDQUEwQmpFLElBQTFCO0FBQ1gsQyxDQUVEOztBQUNPLFNBQVM4SyxZQUFULENBQXNCOUssSUFBdEIsRUFBNEI7QUFDakMsTUFBSSxJQUFKLEVBQVV3SyxNQUFNLENBQUNPLE1BQVAsQ0FBYyxJQUFkLEVBQW9COUcsT0FBcEIsQ0FBNEJqRSxJQUE1QjtBQUNYLEMsQ0FFRDs7QUFDTyxTQUFTbUYsUUFBVCxDQUFrQi9GLEdBQWxCLEVBQXVCO0FBQzVCLFNBQU9BLEdBQUcsS0FDUmtLLEtBQUssQ0FBQ0MsT0FBTixDQUFjbkssR0FBZCxLQUFzQkEsR0FBRyxDQUFDc0gsR0FBSixDQUFRdkIsUUFBUixDQUF0QixDQUNBO0FBQ0E7QUFGQSxLQUdHLE9BQU8vRixHQUFQLEtBQWUsUUFBZixJQUEyQixTQUFLbUwsUUFBTCxFQUFBbkwsR0FBRyxFQUFXLENBQUMsR0FBR0osR0FBSCxDQUFELEtBQWFtRyxRQUFRLENBQUNuRyxHQUFELENBQWhDLENBSnpCLENBQUgsSUFLRkksR0FMTDtBQU1ELEMsQ0FFRDs7QUFDTyxTQUFTNEwsU0FBVCxDQUFtQkMsQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCO0FBQzlCLE1BQUkxTCxHQUFKOztBQUNBLE1BQUksQ0FBQ3lMLENBQUQsSUFBTSxDQUFDQyxDQUFQLElBQVksT0FBT0QsQ0FBUCxLQUFhLE9BQU9DLENBQWhDLElBQXFDLE9BQU9ELENBQVAsS0FBYSxRQUF0RCxFQUFnRTtBQUM5RHpMLE9BQUcsR0FBR3lMLENBQUMsS0FBS0MsQ0FBWjtBQUNELEdBRkQsTUFFTyxJQUFJNUIsS0FBSyxDQUFDQyxPQUFOLENBQWMwQixDQUFkLENBQUosRUFBc0I7QUFDM0J6TCxPQUFHLEdBQUd5TCxDQUFDLENBQUNySyxNQUFGLEtBQWFzSyxDQUFDLENBQUN0SyxNQUFmLElBQ0RxSyxDQUFDLENBQUNwQixLQUFGLENBQVEsQ0FBQ3NCLElBQUQsRUFBTzdHLENBQVAsS0FBYTBHLFNBQVMsQ0FBQ0csSUFBRCxFQUFPRCxDQUFDLENBQUM1RyxDQUFELENBQVIsQ0FBOUIsQ0FETDtBQUVELEdBSE0sTUFHQTtBQUNMLFVBQU04RyxLQUFLLEdBQUdaLE1BQU0sQ0FBQ1osSUFBUCxDQUFZcUIsQ0FBWixDQUFkO0FBQ0EsVUFBTUksS0FBSyxHQUFHYixNQUFNLENBQUNaLElBQVAsQ0FBWXNCLENBQVosQ0FBZDtBQUNBMUwsT0FBRyxHQUFHNEwsS0FBSyxDQUFDeEssTUFBTixLQUFpQnlLLEtBQUssQ0FBQ3pLLE1BQXZCLElBQ0R3SyxLQUFLLENBQUN2QixLQUFOLENBQVkvSyxHQUFHLElBQUl1TSxLQUFLLENBQUNwRyxRQUFOLENBQWVuRyxHQUFmLEtBQXVCa00sU0FBUyxDQUFDQyxDQUFDLENBQUNuTSxHQUFELENBQUYsRUFBU29NLENBQUMsQ0FBQ3BNLEdBQUQsQ0FBVixDQUFuRCxDQURMO0FBRUQ7O0FBQ0QsU0FBT1UsR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ3BHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRU8sU0FBUzRDLElBQVQsQ0FBY3pCLElBQWQsRUFBb0JULElBQXBCLEVBQTBCO0FBQy9CLFNBQU85Qiw4RkFBTyxDQUFDZ0UsSUFBUixDQUFha0osVUFBYixDQUF3QjNLLElBQXhCLEVBQThCVCxJQUE5QixLQUF1Q1MsSUFBOUM7QUFDRDtBQUVNLFNBQVMwRixRQUFULENBQWtCa0YsS0FBbEIsRUFBeUI7QUFDOUIsTUFBSUEsS0FBSyxJQUFJLElBQWIsRUFBbUIsT0FBTyxFQUFQO0FBQ25CLFNBQVEsR0FBRUEsS0FBTSxFQUFoQjtBQUNEO0FBRU0sU0FBU0MsT0FBVCxDQUFpQnhMLElBQWpCLEVBQXVCeUwsUUFBUSxHQUFHcEYsUUFBbEMsRUFBNEM7QUFDakQsUUFBTXFGLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxXQUFTQyxRQUFULENBQWtCLEdBQUd6TCxJQUFyQixFQUEyQjtBQUN6QjtBQUNBO0FBQ0EsVUFBTXBCLEdBQUcsR0FBRzJNLFFBQVEsQ0FBQyxHQUFHdkwsSUFBSixDQUFwQjtBQUNBLFFBQUkwTCxLQUFLLEdBQUdGLFFBQVEsQ0FBQzVNLEdBQUQsQ0FBcEI7O0FBQ0EsUUFBSSxDQUFDOE0sS0FBTCxFQUFZO0FBQ1ZBLFdBQUssR0FBRztBQUNOdEIsYUFBSyxFQUFFdEssSUFBSSxDQUFDdkIsS0FBTCxDQUFXLElBQVgsRUFBaUJ5QixJQUFqQjtBQURELE9BQVI7QUFHQXdMLGNBQVEsQ0FBQzVNLEdBQUQsQ0FBUixHQUFnQjhNLEtBQWhCO0FBQ0Q7O0FBQ0QsV0FBT0EsS0FBSyxDQUFDdEIsS0FBYjtBQUNEOztBQUNELFNBQU9xQixRQUFQO0FBQ0Q7QUFFTSxTQUFTRSxRQUFULENBQWtCN0wsSUFBbEIsRUFBd0I4TCxJQUF4QixFQUE4QjtBQUNuQyxNQUFJQyxTQUFKO0FBQ0EsTUFBSUMsS0FBSjtBQUNBLE1BQUk1SCxRQUFKO0FBQ0EwSCxNQUFJLEdBQUdHLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDSixJQUFELElBQVMsQ0FBckIsQ0FBUDs7QUFDQSxXQUFTSyxTQUFULEdBQXFCO0FBQ25CSCxTQUFLLEdBQUcsSUFBUjtBQUNBLFFBQUlJLFdBQVcsQ0FBQ0MsR0FBWixNQUFxQk4sU0FBekIsRUFBb0MzSCxRQUFRLEdBQTVDLEtBQ0trSSxVQUFVO0FBQ2hCOztBQUNELFdBQVNBLFVBQVQsR0FBc0I7QUFDcEIsUUFBSSxDQUFDTixLQUFMLEVBQVk7QUFDVixZQUFNTyxLQUFLLEdBQUdSLFNBQVMsR0FBR0ssV0FBVyxDQUFDQyxHQUFaLEVBQTFCO0FBQ0FMLFdBQUssR0FBR2hELFVBQVUsQ0FBQ21ELFNBQUQsRUFBWUksS0FBWixDQUFsQjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBU0MsaUJBQVQsQ0FBMkIsR0FBR3RNLElBQTlCLEVBQW9DO0FBQ2xDNkwsYUFBUyxHQUFHSyxXQUFXLENBQUNDLEdBQVosS0FBb0JQLElBQWhDOztBQUNBMUgsWUFBUSxHQUFHLE1BQU07QUFDZkEsY0FBUSxHQUFHLElBQVg7QUFDQXBFLFVBQUksQ0FBQ3ZCLEtBQUwsQ0FBVyxJQUFYLEVBQWlCeUIsSUFBakI7QUFDRCxLQUhEOztBQUlBb00sY0FBVTtBQUNYOztBQUNELFNBQU9FLGlCQUFQO0FBQ0Q7QUFFTSxTQUFTQyxRQUFULENBQWtCek0sSUFBbEIsRUFBd0I4TCxJQUF4QixFQUE4QjtBQUNuQyxNQUFJWSxRQUFRLEdBQUcsQ0FBZjtBQUNBWixNQUFJLEdBQUdHLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDSixJQUFELElBQVMsQ0FBckIsQ0FBUDs7QUFDQSxXQUFTYSxpQkFBVCxDQUEyQixHQUFHek0sSUFBOUIsRUFBb0M7QUFDbEMsVUFBTW1NLEdBQUcsR0FBR0QsV0FBVyxDQUFDQyxHQUFaLEVBQVo7O0FBQ0EsUUFBSUssUUFBUSxHQUFHWixJQUFYLEdBQWtCTyxHQUF0QixFQUEyQjtBQUN6QkssY0FBUSxHQUFHTCxHQUFYO0FBQ0FyTSxVQUFJLENBQUN2QixLQUFMLENBQVcsSUFBWCxFQUFpQnlCLElBQWpCO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPeU0saUJBQVA7QUFDRDtBQUVNLFNBQVNsSCxJQUFULEdBQWdCLENBQUU7QUFFbEIsU0FBU21ILFNBQVQsQ0FBbUJDLE1BQU0sR0FBRyxJQUE1QixFQUFrQztBQUN2QyxRQUFNUixHQUFHLEdBQUdELFdBQVcsQ0FBQ0MsR0FBWixFQUFaO0FBQ0EsU0FBT1EsTUFBTSxHQUNUWixJQUFJLENBQUNhLEtBQUwsQ0FBVyxDQUFDVCxHQUFHLEdBQUdKLElBQUksQ0FBQ2EsS0FBTCxDQUFXVCxHQUFYLENBQVAsSUFBMEIsSUFBckMsRUFBMkNoRyxRQUEzQyxDQUFvRCxFQUFwRCxDQURHLEdBRUg0RixJQUFJLENBQUNhLEtBQUwsQ0FBV2IsSUFBSSxDQUFDYyxNQUFMLEtBQWdCLElBQTNCLEVBQWlDMUcsUUFBakMsQ0FBMEMsRUFBMUMsQ0FGSjtBQUdEO0FBRUQ7Ozs7Ozs7QUFNTyxTQUFTMkcsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEJDLE1BQU0sR0FBRyxDQUFyQyxFQUF3Q3RNLE1BQU0sR0FBRyxJQUFqRCxFQUF1RDtBQUM1RDtBQUNBLFFBQU11TSxTQUFTLEdBQUcsSUFBbEI7QUFDQSxRQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNBLFFBQU1DLFFBQVEsR0FBR0osR0FBRyxDQUFDck0sTUFBckIsQ0FKNEQsQ0FJL0I7O0FBQzdCLFFBQU0wTSxHQUFHLEdBQUdyQixJQUFJLENBQUNzQixHQUFMLENBQVNGLFFBQVEsSUFBSUosR0FBRyxDQUFDTyxVQUF6QixFQUFxQ04sTUFBTSxHQUFHdE0sTUFBOUMsQ0FBWjtBQUNBLFFBQU02TSxZQUFZLEdBQUdKLFFBQVEsSUFBSSxJQUFaLElBQW9CSCxNQUFwQixJQUE4QkksR0FBRyxHQUFHSCxTQUF6RDs7QUFDQSxTQUFPRCxNQUFNLEdBQUdJLEdBQWhCLEVBQXFCSixNQUFNLElBQUlDLFNBQS9CLEVBQTBDO0FBQ3hDQyxVQUFNLENBQUMvSSxJQUFQLENBQVkrRCxNQUFNLENBQUNDLFlBQVAsQ0FBb0I1SixLQUFwQixDQUEwQixJQUExQixFQUNWZ1AsWUFBWSxHQUNSLElBQUlDLFVBQUosQ0FBZVQsR0FBZixFQUFvQkMsTUFBcEIsRUFBNEJqQixJQUFJLENBQUNzQixHQUFMLENBQVNKLFNBQVQsRUFBb0JHLEdBQUcsR0FBR0osTUFBMUIsQ0FBNUIsQ0FEUSxHQUVSRCxHQUhNLENBQVo7QUFJRDs7QUFDRCxTQUFPRyxNQUFNLENBQUNoRSxJQUFQLENBQVksRUFBWixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFPTyxTQUFTdUUsV0FBVCxDQUFxQkMsSUFBckIsRUFBMkJWLE1BQU0sR0FBRyxDQUFwQyxFQUF1Q3RNLE1BQU0sR0FBRyxJQUFoRCxFQUFzRDtBQUMzRCxNQUFJc00sTUFBTSxJQUFJdE0sTUFBTSxHQUFHZ04sSUFBSSxDQUFDQyxJQUE1QixFQUFrQztBQUNoQ0QsUUFBSSxHQUFHQSxJQUFJLENBQUM1SixLQUFMLENBQVdrSixNQUFYLEVBQW1CQSxNQUFNLEdBQUd0TSxNQUE1QixDQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxDQUFDZ04sSUFBSSxDQUFDQyxJQUFOLEdBQWEsRUFBYixHQUFrQixJQUFJOUUsT0FBSixDQUFZNUksT0FBTyxJQUFJO0FBQzlDLFVBQU0yTixNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0FBQ0FELFVBQU0sQ0FBQ0UsYUFBUCxDQUFxQkosSUFBckI7O0FBQ0FFLFVBQU0sQ0FBQ0csTUFBUCxHQUFnQixNQUFNO0FBQ3BCLFlBQU16TyxHQUFHLEdBQUdzTyxNQUFNLENBQUNqTixNQUFuQjtBQUNBVixhQUFPLENBQUNYLEdBQUcsQ0FBQ3dFLEtBQUosQ0FBVXhFLEdBQUcsQ0FBQytFLE9BQUosQ0FBWSxHQUFaLElBQW1CLENBQTdCLENBQUQsQ0FBUDtBQUNELEtBSEQ7QUFJRCxHQVB3QixDQUF6QjtBQVFEO0FBRU0sU0FBUzJKLGlCQUFULENBQTJCQyxHQUEzQixFQUFnQztBQUNyQyxRQUFNQyxHQUFHLEdBQUdELEdBQUcsQ0FBQ3ZOLE1BQWhCO0FBQ0EsUUFBTXlOLEtBQUssR0FBRyxJQUFJWCxVQUFKLENBQWVVLEdBQWYsQ0FBZDs7QUFDQSxPQUFLLElBQUk5SixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHOEosR0FBcEIsRUFBeUI5SixDQUFDLElBQUksQ0FBOUIsRUFBaUM7QUFDL0IrSixTQUFLLENBQUMvSixDQUFELENBQUwsR0FBVzZKLEdBQUcsQ0FBQ3BHLFVBQUosQ0FBZXpELENBQWYsQ0FBWDtBQUNEOztBQUNELFNBQU8rSixLQUFQO0FBQ0Q7QUFFRCxNQUFNQyxVQUFVLEdBQUcseUJBQW5CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLE9BQWxCLEMsQ0FBMkI7O0FBRTNCOztBQUNPLFNBQVNDLGNBQVQsQ0FBd0JDLElBQXhCLEVBQThCQyxJQUE5QixFQUFvQztBQUN6QztBQUNBO0FBQ0EsUUFBTSxHQUFHQyxLQUFLLEdBQUdGLElBQUksSUFBSSxFQUFuQixFQUF1QkcsSUFBdkIsSUFBK0JOLFVBQVUsQ0FBQ08sSUFBWCxDQUFnQkosSUFBaEIsQ0FBckMsQ0FIeUMsQ0FJekM7O0FBQ0EsUUFBTSxHQUFHSyxLQUFLLEdBQUdKLElBQUksSUFBSSxFQUFuQixFQUF1QkssSUFBdkIsSUFBK0JULFVBQVUsQ0FBQ08sSUFBWCxDQUFnQkgsSUFBaEIsQ0FBckM7QUFDQSxRQUFNbkMsS0FBSyxHQUFHeUMsbUJBQW1CLENBQUNMLEtBQUQsRUFBUUcsS0FBUixDQUFuQixJQUNULENBQUNGLElBQUQsR0FBUSxDQUFDRyxJQURBLENBQ0s7QUFETCxLQUVUSCxJQUFJLElBQUlJLG1CQUFtQixDQUFDSixJQUFELEVBQU9HLElBQVAsRUFBYSxJQUFiLENBRmhDLENBTnlDLENBUVc7O0FBQ3BELFNBQU94QyxLQUFLLEdBQUcsQ0FBUixHQUFZLENBQUMsQ0FBYixHQUFpQixDQUFDLENBQUMsQ0FBQ0EsS0FBM0I7QUFDRDs7QUFFRCxTQUFTeUMsbUJBQVQsQ0FBNkJQLElBQTdCLEVBQW1DQyxJQUFuQyxFQUF5Q08sWUFBekMsRUFBdUQ7QUFDckQsUUFBTUMsTUFBTSxHQUFHVCxJQUFJLENBQUNqRixLQUFMLENBQVcsR0FBWCxDQUFmO0FBQ0EsUUFBTTJGLE1BQU0sR0FBR1QsSUFBSSxDQUFDbEYsS0FBTCxDQUFXLEdBQVgsQ0FBZjtBQUNBLFFBQU00RixJQUFJLEdBQUdGLE1BQU0sQ0FBQ3RPLE1BQXBCO0FBQ0EsUUFBTXlPLElBQUksR0FBR0YsTUFBTSxDQUFDdk8sTUFBcEI7QUFDQSxRQUFNd04sR0FBRyxHQUFHLENBQUNhLFlBQVksR0FBR2hELElBQUksQ0FBQ3NCLEdBQVIsR0FBY3RCLElBQUksQ0FBQ0MsR0FBaEMsRUFBcUNrRCxJQUFyQyxFQUEyQ0MsSUFBM0MsQ0FBWjtBQUNBLE1BQUk5QyxLQUFKOztBQUNBLE9BQUssSUFBSWpJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUNpSSxLQUFELElBQVVqSSxDQUFDLEdBQUc4SixHQUE5QixFQUFtQzlKLENBQUMsSUFBSSxDQUF4QyxFQUEyQztBQUN6QyxVQUFNMkcsQ0FBQyxHQUFHaUUsTUFBTSxDQUFDNUssQ0FBRCxDQUFoQjtBQUNBLFVBQU00RyxDQUFDLEdBQUdpRSxNQUFNLENBQUM3SyxDQUFELENBQWhCOztBQUNBLFFBQUkySyxZQUFKLEVBQWtCO0FBQ2hCMUMsV0FBSyxHQUFHZ0MsU0FBUyxDQUFDZSxJQUFWLENBQWVyRSxDQUFmLEtBQXFCc0QsU0FBUyxDQUFDZSxJQUFWLENBQWVwRSxDQUFmLENBQXJCLEdBQ0pELENBQUMsR0FBR0MsQ0FEQSxHQUVKRCxDQUFDLEdBQUdDLENBQUosSUFBU0QsQ0FBQyxHQUFHQyxDQUFKLElBQVMsQ0FBQyxDQUZ2QjtBQUdELEtBSkQsTUFJTztBQUNMcUIsV0FBSyxHQUFHLENBQUNqRSxRQUFRLENBQUMyQyxDQUFELEVBQUksRUFBSixDQUFSLElBQW1CLENBQXBCLEtBQTBCM0MsUUFBUSxDQUFDNEMsQ0FBRCxFQUFJLEVBQUosQ0FBUixJQUFtQixDQUE3QyxDQUFSO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPcUIsS0FBSyxJQUFJMEMsWUFBWSxJQUFLRyxJQUFJLEdBQUdDLElBQXhDO0FBQ0Q7O0FBRUQsTUFBTUUsS0FBSyxHQUFHLENBQ1osQ0FBQyxLQUFELEVBQVEsRUFBUixDQURZLEVBRVosQ0FBQyxHQUFELEVBQU0sRUFBTixDQUZZLEVBR1osQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLEdBQVosQ0FIWSxFQUlaLENBQUMsR0FBRCxDQUpZLENBQWQ7QUFNTyxTQUFTQyxVQUFULENBQW9CQyxRQUFwQixFQUE4QjtBQUNuQ0EsVUFBUSxJQUFJLEtBQUssSUFBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUdILEtBQUssQ0FBQzFJLElBQU4sQ0FBWXNFLElBQUQsSUFBVTtBQUNwQyxVQUFNZSxHQUFHLEdBQUdmLElBQUksQ0FBQyxDQUFELENBQWhCO0FBQ0EsUUFBSSxDQUFDZSxHQUFELElBQVF1RCxRQUFRLEdBQUd2RCxHQUF2QixFQUE0QixPQUFPLElBQVA7QUFDNUIsVUFBTXlELElBQUksR0FBR3hFLElBQUksQ0FBQyxDQUFELENBQUosSUFBV2UsR0FBeEI7QUFDQXVELFlBQVEsSUFBSUUsSUFBWjtBQUNBLFdBQU8sS0FBUDtBQUNELEdBTmdCLENBQWpCO0FBT0EsU0FBUSxHQUFFRixRQUFRLEdBQUcsQ0FBRSxHQUFFQyxRQUFRLENBQUMsQ0FBRCxDQUFJLEVBQXJDO0FBQ0Q7QUFFTSxNQUFNRSxnQkFBZ0IsR0FBR3hCLEdBQUcsSUFDakMsQ0FBQ0EsR0FBRCxHQUFPLEVBQVAsR0FDSUEsR0FBRyxHQUFHLElBQU4sSUFBZSxHQUFFQSxHQUFJLElBQXJCLElBQ0NBLEdBQUcsR0FBRyxPQUFPLElBQWIsSUFBc0IsR0FBRUEsR0FBRyxJQUFJLEVBQUcsSUFEbkMsQ0FDdUM7QUFEdkMsR0FFRSxHQUFFLENBQUMsQ0FBQ0EsR0FBRyxJQUFJLE9BQU8sSUFBWCxDQUFKLEVBQXNCeUIsT0FBdEIsQ0FBOEIsQ0FBOUIsQ0FBaUMsSUFKVCxDQUlhO0FBSnpDLEMsQ0FPUDs7QUFDTyxTQUFTQyxPQUFULENBQWlCdkksR0FBakIsRUFBc0I7QUFDM0IsT0FBSyxNQUFNekksR0FBWCxJQUFrQnlJLEdBQWxCLEVBQXVCO0FBQ3JCLFFBQUksU0FBSzlILGNBQUwsRUFBQThILEdBQUcsRUFBaUJ6SSxHQUFqQixDQUFQLEVBQThCO0FBQzVCLGFBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxJQUFQO0FBQ0Q7QUFFTSxTQUFTaVIsV0FBVCxDQUFxQmhNLElBQXJCLEVBQTJCO0FBQ2hDLFNBQU91RixLQUFLLENBQUNDLE9BQU4sQ0FBY3hGLElBQWQsSUFBc0JBLElBQXRCLEdBQTZCLENBQUNBLElBQUQsQ0FBcEM7QUFDRDtBQUVELE1BQU1pTSxXQUFXLEdBQUcsQ0FDbEIsTUFEa0IsRUFFbEIsYUFGa0IsQ0FBcEI7QUFJTyxlQUFlQyxnQkFBZixDQUFnQzVJLEdBQWhDLEVBQXFDMUMsT0FBTyxHQUFHLEVBQS9DLEVBQW1EO0FBQ3hEO0FBQ0E7QUFDQSxTQUFPLElBQUlvRSxPQUFKLENBQVksQ0FBQzVJLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUN0QyxVQUFNUyxNQUFNLEdBQUcsRUFBZjtBQUNBLFVBQU1xUCxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFaO0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQW1CekwsT0FBekI7QUFDQXVMLE9BQUcsQ0FBQ0csSUFBSixDQUFTLEtBQVQsRUFBZ0JoSixHQUFoQixFQUFxQixJQUFyQjtBQUNBLFFBQUkySSxXQUFXLENBQUMvSyxRQUFaLENBQXFCbUwsWUFBckIsQ0FBSixFQUF3Q0YsR0FBRyxDQUFDRSxZQUFKLEdBQW1CQSxZQUFuQjs7QUFDeENGLE9BQUcsQ0FBQ2pDLE1BQUosR0FBYSxNQUFNO0FBQ2pCO0FBQ0FwTixZQUFNLENBQUN5UCxNQUFQLEdBQWdCSixHQUFHLENBQUNJLE1BQUosSUFBYyxHQUE5QjtBQUNBelAsWUFBTSxDQUFDa0QsSUFBUCxHQUFjaU0sV0FBVyxDQUFDL0ssUUFBWixDQUFxQm1MLFlBQXJCLElBQXFDRixHQUFHLENBQUNsTyxRQUF6QyxHQUFvRGtPLEdBQUcsQ0FBQ0ssWUFBdEU7O0FBQ0EsVUFBSUgsWUFBWSxLQUFLLE1BQXJCLEVBQTZCO0FBQzNCLFlBQUk7QUFDRnZQLGdCQUFNLENBQUNrRCxJQUFQLEdBQWN5TSxJQUFJLENBQUNDLEtBQUwsQ0FBVzVQLE1BQU0sQ0FBQ2tELElBQWxCLENBQWQ7QUFDRCxTQUZELENBRUUsZ0JBQU0sQ0FDTjtBQUNEO0FBQ0Y7O0FBQ0QsVUFBSWxELE1BQU0sQ0FBQ3lQLE1BQVAsR0FBZ0IsR0FBcEIsRUFBeUI7QUFDdkJsUSxjQUFNLENBQUNTLE1BQUQsQ0FBTjtBQUNELE9BRkQsTUFFTztBQUNMVixlQUFPLENBQUNVLE1BQUQsQ0FBUDtBQUNEO0FBQ0YsS0FoQkQ7O0FBaUJBcVAsT0FBRyxDQUFDUSxPQUFKLEdBQWMsTUFBTTtBQUNsQjdQLFlBQU0sQ0FBQ3lQLE1BQVAsR0FBZ0IsQ0FBQyxDQUFqQjtBQUNBbFEsWUFBTSxDQUFDUyxNQUFELENBQU47QUFDRCxLQUhEOztBQUlBcVAsT0FBRyxDQUFDUyxJQUFKO0FBQ0QsR0E1Qk0sQ0FBUDtBQTZCRDtBQUVEOzs7OztBQUlBLE1BQU1DLGFBQWEsR0FBRztBQUNwQixvQkFBa0I7QUFERSxDQUF0QjtBQUlPLE1BQU1DLFFBQVEsR0FBR3hKLEdBQUcsSUFBSUEsR0FBRyxJQUM3QixDQUFFLHlEQUF5RGlJLElBQXpELENBQThEakksR0FBOUQsQ0FEQTtBQUdQOzs7Ozs7O0FBTUE7Ozs7Ozs7QUFNTyxlQUFleUosT0FBZixDQUF1QnpKLEdBQXZCLEVBQTRCMUMsT0FBTyxHQUFHLEVBQXRDLEVBQTBDO0FBQy9DO0FBQ0EsTUFBSTBDLEdBQUcsQ0FBQzBKLFVBQUosQ0FBZSxTQUFmLENBQUosRUFBK0IsT0FBT2QsZ0JBQWdCLENBQUM1SSxHQUFELEVBQU0xQyxPQUFOLENBQXZCO0FBQy9CLFFBQU07QUFBRXFNLFFBQUY7QUFBUUMsV0FBUjtBQUFpQmI7QUFBakIsTUFBa0N6TCxPQUF4QztBQUNBLFFBQU11TSxTQUFTLEdBQUdGLElBQUksSUFBSSxTQUFPLEVBQUQsQ0FBSzNLLFFBQVgsRUFBQTJLLElBQUksTUFBc0IsaUJBQXBEO0FBQ0EsUUFBTUcsUUFBUSxHQUFHOUosR0FBRyxDQUFDbUMsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBQWpCO0FBQ0EsUUFBTTRILE1BQU0sR0FBR1IsYUFBYSxDQUFDTyxRQUFELENBQTVCLENBTitDLENBTy9DOztBQUNBLFFBQU1FLElBQUksR0FBRzdHLE1BQU0sQ0FBQzhHLE1BQVAsQ0FBYztBQUN6QjFGLFNBQUssRUFBRWlGLFFBQVEsQ0FBQ3hKLEdBQUQsQ0FBUixHQUFnQjlILFNBQWhCLEdBQTRCO0FBRFYsR0FBZCxFQUVWb0YsT0FGVSxFQUVEO0FBQ1ZxTSxRQUFJLEVBQUVFLFNBQVMsR0FBR1YsSUFBSSxDQUFDZSxTQUFMLENBQWVQLElBQWYsQ0FBSCxHQUEwQkEsSUFEL0I7QUFFVkMsV0FBTyxFQUFFQyxTQUFTLElBQUlFLE1BQWIsR0FDTDVHLE1BQU0sQ0FBQzhHLE1BQVAsQ0FBYyxFQUFkLEVBQ0FMLE9BREEsRUFFQUMsU0FBUyxJQUFJO0FBQUUsc0JBQWdCO0FBQWxCLEtBRmIsRUFHQUUsTUFBTSxJQUFJO0FBQUVBO0FBQUYsS0FIVixDQURLLEdBS0xIO0FBUE0sR0FGQyxDQUFiO0FBV0EsUUFBTXBRLE1BQU0sR0FBRztBQUFFd0csT0FBRjtBQUFPaUosVUFBTSxFQUFFLENBQUM7QUFBaEIsR0FBZjs7QUFDQSxNQUFJO0FBQ0YsVUFBTWtCLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQUNwSyxHQUFELEVBQU1nSyxJQUFOLENBQXhCO0FBQ0EsVUFBTUssVUFBVSxHQUFHO0FBQ2pCQyxpQkFBVyxFQUFFLGFBREk7QUFFakIvRCxVQUFJLEVBQUUsTUFGVztBQUdqQmdFLFVBQUksRUFBRTtBQUhXLE1BSWpCeEIsWUFKaUIsS0FJQSxNQUpuQixDQUZFLENBT0Y7O0FBQ0F2UCxVQUFNLENBQUN5UCxNQUFQLEdBQWdCa0IsSUFBSSxDQUFDbEIsTUFBTCxJQUFlLEdBQS9CO0FBQ0F6UCxVQUFNLENBQUNvUSxPQUFQLEdBQWlCTyxJQUFJLENBQUNQLE9BQXRCO0FBQ0FwUSxVQUFNLENBQUNrRCxJQUFQLEdBQWMsTUFBTXlOLElBQUksQ0FBQ0UsVUFBRCxDQUFKLEVBQXBCO0FBQ0QsR0FYRCxDQVdFLGlCQUFNO0FBQUU7QUFBVzs7QUFDckIsTUFBSTdRLE1BQU0sQ0FBQ3lQLE1BQVAsR0FBZ0IsQ0FBaEIsSUFBcUJ6UCxNQUFNLENBQUN5UCxNQUFQLEdBQWdCLEdBQXpDLEVBQThDLE1BQU16UCxNQUFOO0FBQzlDLFNBQU9BLE1BQVA7QUFDRCxDLENBRUQ7O0FBQ0EsTUFBTWdSLGlCQUFpQixHQUFHO0FBQ3hCM08sV0FBUyxFQUFFLElBRGE7QUFFeEI0TyxRQUFNLEVBQUUsR0FGZ0I7QUFHeEJDLFFBQU0sRUFBRSxHQUhnQjtBQUl4QkMsU0FBTyxFQUFFO0FBSmUsQ0FBMUIsQyxDQU9BOztBQUNPLFNBQVNDLGVBQVQsQ0FBeUIzSCxLQUF6QixFQUFnQzRILFFBQVEsR0FBRzFCLElBQUksQ0FBQ2UsU0FBaEQsRUFBMkQ7QUFDaEUsTUFBSWpILEtBQUssS0FBSy9LLFNBQWQsRUFBeUI7QUFDdkIsVUFBTTRTLE1BQU0sR0FBR04saUJBQWlCLENBQUMsT0FBT3ZILEtBQVIsQ0FBaEM7QUFDQSxXQUFRLEdBQUU2SCxNQUFNLElBQUksR0FBSSxHQUFFQSxNQUFNLEdBQUc3SCxLQUFILEdBQVc0SCxRQUFRLENBQUM1SCxLQUFELENBQVEsRUFBM0Q7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7OztBQy9URDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTThILE9BQU8sR0FBR0MsYUFBYSxFQUE3QjtBQUNBLE1BQU1DLGNBQWMsR0FBR0QsYUFBYSxFQUFwQztBQUNBLE1BQU1FLFFBQVEsR0FBR0YsYUFBYSxFQUE5QjtBQUNBLE1BQU1HLFVBQVUsR0FBR0gsYUFBYSxFQUFoQztBQUNBLE1BQU1JLFNBQVMsR0FBRyxFQUFsQjs7QUFDQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPdlQsR0FBUCxFQUFZd1QsS0FBWixLQUFzQjtBQUMzQyxNQUFJQSxLQUFKLEVBQVc7QUFDVHRCLFVBQU0sQ0FBQ3FCLElBQUQsRUFBT3ZULEdBQVAsQ0FBTjtBQUNELEdBRkQsTUFFTztBQUNMcVQsYUFBUyxDQUFDcE8sSUFBVixDQUFlLE1BQU1pTixNQUFNLENBQUNxQixJQUFELEVBQU92VCxHQUFQLENBQTNCO0FBQ0Q7QUFDRixDQU5EOztBQU9BLE1BQU15VCxRQUFRLEdBQUcsQ0FBQ25PLEdBQUQsRUFBTW9PLE9BQU4sS0FBa0I7QUFDakNDLGtCQUFnQixDQUFDWCxPQUFELEVBQVUxTixHQUFWLEVBQWVvTyxPQUFmLEVBQXdCLElBQXhCLENBQWhCO0FBQ0QsQ0FGRDs7QUFHQSxNQUFNRSxHQUFHLEdBQUcsQ0FBQyxhQUFELEVBQWdCLGNBQWhCLENBQVo7QUFDQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxZQUFELENBQXBCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLENBQUMsYUFBRCxDQUFyQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxDQUFDLFVBQUQsQ0FBbEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQyxhQUFELENBQXJCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHO0FBQ2JuUSxXQUFTLEVBQUUsSUFERTtBQUVib1EsWUFBVSxFQUFFTCxXQUZDO0FBR2JNLFVBQVEsRUFBRU4sV0FIRztBQUliTyxhQUFXLEVBQUVOLFlBSkE7QUFLYk8sVUFBUSxFQUFFVCxHQUxHO0FBTWJVLGlCQUFlLEVBQUVOLFlBTko7QUFPYk8sZ0JBQWMsRUFBRVAsWUFQSDtBQU9pQjtBQUM5QlEsY0FBWSxFQUFFLENBQUMsY0FBRCxFQUFpQixvQkFBakIsQ0FSRDtBQVNiQyxXQUFTLEVBQUUsQ0FBQyxTQUFELEVBQVlWLFNBQVosQ0FURTtBQVViVyxxQkFBbUIsRUFBRSxDQUFDLGNBQUQsQ0FWUjtBQVdiQyxjQUFZLEVBQUUsQ0FBQyxjQUFELENBWEQ7QUFZYkMsVUFBUSxFQUFFZCxZQVpHO0FBYWJlLHVCQUFxQixFQUFFLENBQUMsZ0JBQUQ7QUFiVixDQUFmO0FBZUEsTUFBTUMsU0FBUyxHQUFHO0FBQ2hCaFIsV0FBUyxFQUFFLElBREs7QUFFaEIsdUJBQXFCa1EsWUFGTDtBQUdoQix1QkFBcUJKLEdBSEw7QUFJaEIsdUJBQXFCQSxHQUpMO0FBSVU7QUFDMUIsR0FBQ21CLFlBQUQsR0FBZ0JoQixTQUxBO0FBTWhCLEdBQUNpQixZQUFELEdBQWdCLENBQUMsVUFBRDtBQU5BLENBQWxCO0FBU0EsTUFBTUMsTUFBTSxHQUFHO0FBQ2JuUixXQUFTLEVBQUUsSUFERTtBQUVib1IsS0FBRyxFQUFFLEVBRlE7QUFFSjtBQUNUQyxZQUFVLEVBQUUsRUFIQztBQUliOztBQUNBO0FBQ0FDLGNBQVksRUFBRSxFQU5EO0FBT2JDLFdBQVMsRUFBRSxFQVBFO0FBUWI3SSxPQUFLLEVBQUV5RyxhQUFhLEVBUlA7QUFTYnFDLFVBQVEsRUFBRXJDLGFBQWEsRUFUVjtBQVViSSxXQVZhO0FBV2JJLFVBWGE7O0FBWWI7Ozs7O0FBS0E4QixhQUFXLENBQUNwTixHQUFELEVBQU1xTCxLQUFOLEVBQWE7QUFDdEJGLGtCQUFjLENBQUNILFFBQUQsRUFBV2hMLEdBQVgsRUFBZ0JxTCxLQUFoQixDQUFkO0FBQ0QsR0FuQlk7O0FBb0JiOztBQUVBZ0MsdUJBQXFCLENBQUNyTixHQUFELEVBQU1xTCxLQUFOLEVBQWE7QUFDaENGLGtCQUFjLENBQUNGLFVBQUQsRUFBYWpMLEdBQWIsRUFBa0JxTCxLQUFsQixDQUFkO0FBQ0QsR0F4Qlk7O0FBeUJiOzs7QUFHQWlDLGFBQVcsQ0FBQztBQUFFL0IsV0FBRjtBQUFXbFQ7QUFBWCxHQUFELEVBQW9CO0FBQzdCaVQsWUFBUSxDQUFDLEtBQUQsRUFBUUMsT0FBUixDQUFSO0FBQ0FSLGtCQUFjLENBQUNRLE9BQUQsQ0FBZCxHQUEwQmxULElBQUksQ0FBQ2UsSUFBL0I7QUFDQSxhQUFZc0QsT0FBWixFQUFBckUsSUFBSSxDQUFDa1YsS0FBTCxFQUFvQkEsS0FBSyxJQUFJO0FBQzNCLFlBQU1DLElBQUksR0FBR2IsU0FBUyxDQUFDWSxLQUFELENBQVQsSUFDUixTQUFXRSxVQUFYLGFBQXNCRixLQUF0QixLQUFnQ3pCLE1BQU0sQ0FBQyxTQUFPclAsS0FBUCxFQUFBOFEsS0FBSyxFQUFRLENBQVIsQ0FBTixDQUQzQztBQUVBLFVBQUlDLElBQUosRUFBVSxTQUFNOVEsT0FBTixFQUFBOFEsSUFBSSxFQUFVclEsR0FBRyxJQUFJbU8sUUFBUSxDQUFDbk8sR0FBRCxFQUFNb08sT0FBTixDQUF6QixDQUFKO0FBQ1gsS0FKRDtBQUtELEdBcENZOztBQXFDYjtBQUNBLFFBQU1tQyxRQUFOLENBQWU7QUFBRXZRLE9BQUY7QUFBT1gsUUFBUDtBQUFhK08sV0FBYjtBQUFzQm9DO0FBQXRCLEdBQWYsRUFBNkNDLEtBQTdDLEVBQW9EO0FBQUE7O0FBQ2xELFVBQU1DLE1BQU0sR0FBRzdDLFFBQVEsQ0FBQzdOLEdBQUQsQ0FBdkI7O0FBQ0EsUUFBSSxDQUFDMFEsTUFBRCxJQUFXLGtCQUFDaEQsT0FBTyxDQUFDMU4sR0FBRCxDQUFSLHFCQUFDLGFBQWVvTyxPQUFmLENBQUQsQ0FBZixFQUF5QztBQUN2QztBQUNBdUMsU0FBRyxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWdCLHFCQUFvQjNRLEdBQUksV0FBVTROLGNBQWMsQ0FBQ1EsT0FBRCxDQUFkLElBQTJCLEdBQUksR0FBakYsQ0FBSDtBQUNEOztBQUNELFVBQU13QyxVQUFVLEdBQUd2UixJQUFJLElBQUl3UixVQUFVLENBQUN4UixJQUFELEVBQU95UixXQUFQLENBQXJDOztBQUNBLFFBQUlGLFVBQUosRUFBZ0I7QUFDZHZSLFVBQUksR0FBR0EsSUFBSSxDQUFDQSxJQUFaO0FBQ0Q7O0FBQ0QsUUFBSXZFLEdBQUcsR0FBRzRWLE1BQU0sS0FBSyxJQUFYLEdBQ04zUSw2REFBTyxDQUFDQyxHQUFELEVBQU1YLElBQU4sQ0FERCxHQUVOLFNBQU1xUixNQUFOLEVBQUFGLElBQUksRUFBU25SLElBQVQsRUFBZW9SLEtBQUssSUFBSXBTLGlEQUF4QixDQUZSOztBQUdBLFFBQUkwUyxTQUFTLENBQUNqVyxHQUFELENBQWIsRUFBb0I7QUFDbEJBLFNBQUcsR0FBRyxNQUFNQSxHQUFaO0FBQ0Q7O0FBQ0QsUUFBSThWLFVBQUosRUFBZ0I7QUFDZGpCLFlBQU0sQ0FBQ3FCLElBQVAsQ0FBWSxVQUFaLEVBQXdCO0FBQUV2TyxVQUFFLEVBQUVtTyxVQUFOO0FBQWtCdlIsWUFBSSxFQUFFdkU7QUFBeEIsT0FBeEIsRUFBdUQyVixLQUF2RDtBQUNEO0FBQ0Y7O0FBekRZLENBQWY7QUE0RGVkLHFFQUFmO0FBRUFqVyw2Q0FBTyxDQUFDQyxPQUFSLENBQWdCbUUsU0FBaEIsQ0FBMEJDLFdBQTFCLENBQXNDLENBQUM7QUFBRWlDLEtBQUY7QUFBT1g7QUFBUCxDQUFELEVBQWdCM0UsR0FBaEIsS0FBd0I7QUFDNUQsUUFBTXVXLEVBQUUsR0FBR25ELFVBQVUsQ0FBQzlOLEdBQUQsQ0FBckI7QUFDQSxNQUFJaVIsRUFBSixFQUFRQSxFQUFFLENBQUM1UixJQUFELEVBQU8zRSxHQUFQLENBQUY7QUFDVCxDQUhEO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFBQTtBQUFBO0FBRUFpViwrQ0FBTSxDQUFDNUIsU0FBUCxDQUFpQnBPLElBQWpCLENBQXNCLE1BQU07QUFDMUIsTUFBSTBQLFlBQUo7O0FBQ0EsTUFBSTdWLFVBQUosRUFBZ0I7QUFDZCxRQUFJMFgsYUFBSixDQURjLENBRWQ7O0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQWtCQyxRQUF4QjtBQUNBLFVBQU07QUFBRUM7QUFBRixRQUFjQyxZQUFZLENBQUNDLEtBQUQsQ0FBaEM7QUFDQSxVQUFNO0FBQUVwVyxTQUFHLEVBQUVxVztBQUFQLFFBQTRCQyxnQkFBZ0IsQ0FBQ0MsY0FBYyxDQUFDSCxLQUFELENBQWYsRUFBd0IsZUFBeEIsQ0FBbEQ7QUFDQSxVQUFNO0FBQUVJLG9CQUFGO0FBQWtCQztBQUFsQixRQUErQ0MsS0FBSyxDQUFDTixLQUFELENBQTFEOztBQUNBLFVBQU1PLE1BQU0sR0FBR3JWLENBQUMsSUFBSTtBQUNsQixlQUFHbVYsd0JBQUgsRUFBQW5WLENBQUM7QUFDRCxlQUFHa1YsY0FBSCxFQUFBbFYsQ0FBQztBQUNELGVBQXVCNFUsT0FBdkIsV0FBR0csZ0JBQUgsRUFBQS9VLENBQUMsR0FBOEJ5VSxhQUFhLENBQUNhLElBQWQsSUFBc0IsWUFBcEQsRUFBa0ViLGFBQWEsQ0FBQzdSLElBQWhGLENBQUQ7QUFDRCxLQUpEOztBQUtBZ1EsZ0JBQVksR0FBRzJDLE1BQU0sSUFBSTtBQUN2QmQsbUJBQWEsR0FBR2MsTUFBaEI7QUFDQSxlQUFVQyxFQUFWLEVBQUFiLFFBQVEsRUFBSyxNQUFMLEVBQWFVLE1BQWIsQ0FBUjs7QUFDQSxVQUFJLENBQUMsU0FBVVgsV0FBVixFQUFBQyxRQUFRLEVBQWMsTUFBZCxDQUFULElBQWtDNVUsS0FBdEMsRUFBeUQ7QUFDdkRtVSxXQUFHLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSx5QkFBZixDQUFIO0FBQ0Q7O0FBQ0QsZUFBVXVCLEdBQVYsRUFBQWQsUUFBUSxFQUFNLE1BQU4sRUFBY1UsTUFBZCxDQUFSO0FBQ0FaLG1CQUFhLEdBQUcsSUFBaEI7QUFDRCxLQVJEO0FBU0Q7O0FBQ0R2QixpREFBTSxDQUFDTSxXQUFQLENBQW1CO0FBQ2pCa0MsZ0JBQVksRUFBRTlDLFlBQVksSUFBSTtBQURiLEdBQW5CLEVBRUcsSUFGSDtBQUdELENBM0JELEU7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU0rQyxLQUFLLEdBQUd6RSxhQUFhLEVBQTNCO0FBQ0EsSUFBSTBFLGdCQUFKO0FBQ0EsSUFBSUMsWUFBSjtBQUVBM0MsK0NBQU0sQ0FBQzVCLFNBQVAsQ0FBaUJwTyxJQUFqQixDQUFzQjRTLFNBQVMsSUFBSTtBQUNqQ0QsY0FBWSxHQUFHQyxTQUFTLENBQUNELFlBQXpCO0FBQ0QsQ0FGRDtBQUlBM0MsK0NBQU0sQ0FBQ08scUJBQVAsQ0FBNkI7QUFDM0JzQyxZQUFVLENBQUNDLEtBQUQsRUFBUTtBQUNoQkgsZ0JBQVksR0FBR0csS0FBZjtBQUNBQyxnQkFBWTtBQUNiOztBQUowQixDQUE3QixFQUtHLElBTEg7QUFPQS9DLCtDQUFNLENBQUNNLFdBQVAsQ0FBbUI7QUFDakI7QUFDQTBDLFlBQVUsQ0FBQztBQUFFQyxPQUFGO0FBQU9DLFNBQVA7QUFBY0M7QUFBZCxHQUFELEVBQXVCckMsS0FBdkIsRUFBOEI7QUFDdEMsUUFBSXNDLEVBQUo7QUFDQSxRQUFJalksR0FBSjs7QUFDQSxRQUFJO0FBQ0YsWUFBTWtZLE1BQU0sR0FBRyxRQUNWLFNBQStCMUMsVUFBL0IsaUNBQTBDc0MsR0FBMUMsS0FBa0RLLCtEQUFTLENBQUMsTUFBRCxDQURqRCxJQUVWQSwrREFBUyxDQUFDLE1BQUQsQ0FGQyxJQUdWQSwrREFBUyxDQUFDLEdBQUQsQ0FIZDtBQUlBRixRQUFFLEdBQUdHLDhEQUFRLENBQUNOLEdBQUQsRUFBTUMsS0FBTixDQUFiO0FBQ0EsZUFBUU0sV0FBUixFQUFBSCxNQUFNLEVBQWNELEVBQWQsQ0FBTjtBQUNELEtBUEQsQ0FPRSxPQUFPdFcsQ0FBUCxFQUFVO0FBQ1Y7QUFDQTtBQUNBM0IsU0FBRyxHQUFHLENBQUUsR0FBRTJCLENBQUUsRUFBTixFQUFTQSxDQUFDLENBQUMyVyxLQUFYLENBQU47QUFDRDs7QUFDRHpELG1EQUFNLENBQUNxQixJQUFQLENBQVksVUFBWixFQUF3QjtBQUFFdk8sUUFBRSxFQUFFcVEsSUFBTjtBQUFZelQsVUFBSSxFQUFFdkU7QUFBbEIsS0FBeEIsRUFBaUQyVixLQUFqRCxFQUF3RHNDLEVBQXhEO0FBQ0QsR0FsQmdCOztBQW9CakJNLGFBQVcsQ0FBQztBQUFFNVEsTUFBRjtBQUFNNlEsVUFBTjtBQUFjbFo7QUFBZCxHQUFELEVBQXNCO0FBQUE7O0FBQy9CLFVBQU1tWixJQUFJLEdBQUcsd0JBQUE1RCwrQ0FBTSxDQUFDSyxRQUFQLENBQWdCdk4sRUFBaEIsMENBQXNCckksR0FBdEIsTUFBOEJBLEdBQTNDO0FBQ0EsVUFBTW9aLEdBQUcsR0FBRzdELCtDQUFNLENBQUN6SSxLQUFQLENBQWFxTSxJQUFiLENBQVo7QUFDQSxXQUFPQyxHQUFHLEdBQUdDLG9FQUFjLENBQUNELEdBQUQsRUFBTUYsTUFBTixDQUFqQixHQUFpQyxJQUEzQztBQUNELEdBeEJnQjs7QUEwQmpCSSxjQUFZLENBQUM7QUFBRWpSLE1BQUY7QUFBTWtSO0FBQU4sR0FBRCxFQUFjO0FBQ3hCLFFBQUlDLE1BQUosRUFBWTtBQUNWdkYsc0JBQWdCLENBQUMrRCxLQUFELEVBQVEzUCxFQUFSLEVBQVlrUixHQUFaLEVBQWlCLENBQWpCLENBQWhCO0FBQ0FqQixrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEO0FBQ0YsR0EvQmdCOztBQWlDakJtQixnQkFBYyxDQUFDO0FBQUVwUixNQUFGO0FBQU1rUjtBQUFOLEdBQUQsRUFBYztBQUMxQixRQUFJQyxNQUFKLEVBQVk7QUFBQTs7QUFDVixtQkFBT3hCLEtBQUssQ0FBQzNQLEVBQUQsQ0FBWiwwQkFBTyxVQUFZa1IsR0FBWixDQUFQO0FBQ0FqQixrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEO0FBQ0Y7O0FBdENnQixDQUFuQjtBQXlDTyxlQUFlQSxZQUFmLENBQTRCb0IsU0FBNUIsRUFBdUM7QUFDNUMsTUFBSXhCLFlBQUosRUFBa0I7QUFDaEIsUUFBSXdCLFNBQUosRUFBZTtBQUNiLFVBQUl6QixnQkFBSixFQUFzQixPQURULENBRWI7O0FBQ0FBLHNCQUFnQixHQUFHdFMsNkRBQU8sQ0FBQyxZQUFELEVBQWUsQ0FBZixDQUExQjtBQUNBLFlBQU1zUyxnQkFBTjtBQUNBQSxzQkFBZ0IsR0FBRyxJQUFuQjtBQUNEOztBQUNEdFMsaUVBQU8sQ0FBQyxVQUFELEVBQWEsU0FBNEJnVSxZQUE1QjtBQUFFM0IsV0FBRjtBQUFTNVQsZUFBUyxFQUFFO0FBQXBCLE9BQXlDbVIsK0NBQXpDLEVBQWlELENBQ25FLEtBRG1FLEVBRW5FLFlBRm1FLEVBR25FLFlBSG1FLEVBSW5FLFdBSm1FLENBQWpELENBQWIsQ0FBUDtBQU1EO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDM0VEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFRyxjQUFGO0FBQWdCRDtBQUFoQixJQUErQkYsK0NBQXJDO0FBQ0EsTUFBTXFFLGVBQWUsR0FBR0MsY0FBYyxFQUF0QztBQUNBLElBQUlDLFlBQUo7QUFDQSxJQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxJQUFJQyxZQUFKLEMsQ0FFQTs7QUFDQSxlQUFlekgsSUFBZixHQUFzQjtBQUNwQixRQUFNMEgsU0FBUyxHQUFHQyxhQUFhLEVBQS9CO0FBQ0EsUUFBTUMsS0FBSyxHQUFHRCxhQUFhLEVBQTNCO0FBQ0EsUUFBTUUsT0FBTyxHQUFHQyxlQUFlLEVBQS9CO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLEVBQUNGLE9BQUQsb0JBQUNBLE9BQU8sQ0FBRUcsWUFBVixLQUEwQjtBQUN6Qzs7QUFFQWhTLE9BQUcsRUFBRW5KLFVBQVUsSUFBSUMsTUFBTSxDQUFDbWIsUUFBUCxDQUFnQjVSLElBSE07QUFJekM7QUFDQTJSLGdCQUFZLEVBQUV2RCxRQUFRLFlBQVl5RCxXQUFwQixJQUNULENBQUNDLGlFQUFpQixDQUFDVCxTQUFELEVBQVlFLEtBQVo7QUFOa0IsR0FBM0M7QUFRQSxRQUFNUSxXQUFXLEdBQUcsQ0FBQ1AsT0FBRCxJQUFZelUsNkRBQU8sQ0FBQyxhQUFELEVBQWdCMlUsUUFBaEIsRUFBMEI7QUFBRXpULFNBQUssRUFBRTtBQUFULEdBQTFCLENBQXZDLENBWm9CLENBYXBCOztBQUNBLFFBQU01QixJQUFJLEdBQUdtVixPQUFPLEtBQ2xCaGIsVUFBVSxJQUFJcVksS0FBSyxDQUFDTixLQUFELENBQUwsQ0FBYXlELFlBQTNCLEdBQ0ksTUFBTUMsU0FBUyxDQUFDRixXQUFELENBRG5CLEdBRUksTUFBTUEsV0FIUSxDQUFwQjtBQUtBLFFBQU07QUFBRTVHO0FBQUYsTUFBZXdCLCtDQUFyQjtBQUNBeEIsVUFBUSxDQUFDLFNBQUQsRUFBWWtHLFNBQVosQ0FBUjtBQUNBLFdBQVFOLFlBQVIsRUFBQXBFLCtDQUFNLEVBQWV0USxJQUFmLEVBQXFCLENBQ3pCLEtBRHlCLEVBRXpCLFlBRnlCLENBQXJCLENBQU47O0FBSUEsTUFBSUEsSUFBSSxDQUFDNlYsTUFBVCxFQUFpQjtBQUNmL0csWUFBUSxDQUFDLGNBQUQsRUFBaUJrRyxTQUFqQixDQUFSO0FBQ0ExRSxtREFBTSxDQUFDTSxXQUFQLENBQW1CO0FBQUVrRixrQkFBWSxFQUFFO0FBQWhCLEtBQW5CLEVBQTJDLElBQTNDO0FBQ0F4RixtREFBTSxDQUFDcUIsSUFBUCxDQUFZLFFBQVo7QUFDRDs7QUFDRCxNQUFJM1IsSUFBSSxDQUFDK1YsT0FBVCxFQUFrQjtBQUNoQnpGLG1EQUFNLENBQUM1QixTQUFQLENBQWlCeE8sT0FBakIsQ0FBeUIwUixFQUFFLElBQUlBLEVBQUUsQ0FBQzVSLElBQUQsQ0FBakM7QUFDQThPLFlBQVEsQ0FBQyxZQUFELEVBQWVrRyxTQUFmLENBQVI7QUFDQSxRQUFJN2EsVUFBSixFQUFnQjJVLFFBQVEsQ0FBQyxZQUFELEVBQWVrRyxTQUFmLENBQVI7QUFDaEIsVUFBTWdCLDZEQUFhLENBQUNoQixTQUFELEVBQVlFLEtBQVosRUFBbUJsVixJQUFuQixDQUFuQjtBQUNEOztBQUNEc1EsaURBQU0sQ0FBQzVCLFNBQVAsR0FBbUIsSUFBbkI7QUFDQTJFLHNFQUFZO0FBQ2I7O0FBRUQvQywrQ0FBTSxDQUFDTyxxQkFBUCxDQUE2QjtBQUMzQm9GLFNBQU8sQ0FBQ2pXLElBQUQsRUFBTztBQUNaLFVBQU1vUixLQUFLLEdBQUcsU0FBY2xRLFFBQWQsRUFBQXVQLFlBQVksRUFBV3pRLElBQUksQ0FBQ29ELEVBQWhCLENBQVosSUFBbUNuRSxvREFBakQ7QUFDQXFSLG1EQUFNLENBQUNxQixJQUFQLENBQVksU0FBWixFQUF1QjNSLElBQXZCLEVBQTZCb1IsS0FBN0I7QUFDRCxHQUowQjs7QUFLM0I4RSxlQUFhLENBQUNsVyxJQUFELEVBQU87QUFDbEIsVUFBTW1XLFFBQVEsR0FBRzdILGFBQWEsRUFBOUI7QUFDQSxVQUFNOEgsV0FBVyxHQUFHOUgsYUFBYSxFQUFqQztBQUNBLGFBQWtCcE8sT0FBbEIsRUFBQW1XLFVBQVUsQ0FBQ3JXLElBQUQsQ0FBVixFQUEyQm9ELEVBQUQsSUFBUTtBQUNoQyxPQUFDLFNBQWNsQyxRQUFkLEVBQUF1UCxZQUFZLEVBQVcsQ0FBQ3JOLEVBQVosQ0FBWixHQUE4QmdULFdBQTlCLEdBQTRDRCxRQUE3QyxFQUF1RC9TLEVBQXZELElBQTZEcEQsSUFBSSxDQUFDb0QsRUFBRCxDQUFqRTtBQUNELEtBRkQ7QUFHQSxRQUFJLENBQUMySSxxREFBTyxDQUFDb0ssUUFBRCxDQUFaLEVBQXdCN0YsK0NBQU0sQ0FBQ3FCLElBQVAsQ0FBWSxlQUFaLEVBQTZCd0UsUUFBN0I7QUFDeEIsUUFBSSxDQUFDcEsscURBQU8sQ0FBQ3FLLFdBQUQsQ0FBWixFQUEyQjlGLCtDQUFNLENBQUNxQixJQUFQLENBQVksZUFBWixFQUE2QnlFLFdBQTdCLEVBQTBDblgsb0RBQTFDO0FBQzVCOztBQWIwQixDQUE3QjtBQWdCQXFSLCtDQUFNLENBQUNNLFdBQVAsQ0FBbUI7QUFDakIwRixLQUFHLENBQUNsVCxFQUFELEVBQUtnTyxLQUFMLEVBQVk7QUFDYixhQUFZOVEsSUFBWixFQUFBa1EsVUFBVSxFQUFPcE4sRUFBUCxDQUFWO0FBQ0EsYUFBWTlDLElBQVosRUFBQWdRLCtDQUFNLENBQUNDLEdBQVAsRUFBaUJuTixFQUFqQjs7QUFDQSxRQUFJZ08sS0FBSyxLQUFLblMsb0RBQWQsRUFBOEI7QUFDNUIsZUFBY3FCLElBQWQsRUFBQW1RLFlBQVksRUFBT3JOLEVBQVAsQ0FBWjtBQUNEOztBQUNELFFBQUksQ0FBQ3lSLFlBQUwsRUFBbUI7QUFDakJBLGtCQUFZLEdBQUcsU0FBaUJ2VCxJQUFqQixFQUFBcVQsZUFBZSxFQUFPNEIsaUJBQVAsQ0FBOUI7QUFDRDs7QUFDRCxRQUFJLENBQUN4QixZQUFMLEVBQW1CO0FBQ2pCQSxrQkFBWSxHQUFHLElBQWY7QUFDQSxlQUFRbkMsRUFBUixFQUFBelIsTUFBTSxFQUFLLFVBQUwsRUFBaUJxVixHQUFHLElBQUk7QUFDNUI7QUFDQSxZQUFJQSxHQUFHLENBQUNDLFNBQUosSUFBaUJELEdBQUcsQ0FBQ0UsU0FBekIsRUFBb0M7QUFDbENoVyx1RUFBTyxDQUFDLFVBQUQsRUFBYThQLFVBQWIsQ0FBUDtBQUNEO0FBQ0YsT0FMSyxDQUFOO0FBTUQ7QUFDRixHQW5CZ0I7O0FBb0JqQm1HLFlBQVUsRUFBRSxJQXBCSztBQXFCakJDLFVBQVEsRUFBRSxJQXJCTztBQXNCakJDLGFBQVcsRUFBRTtBQXRCSSxDQUFuQjtBQXlCQXZKLElBQUksR0FBRzdMLEtBQVAsQ0FBYXRILFVBQVUsSUFBSWtELE9BQU8sQ0FBQ0MsS0FBbkMsRSxDQUEyQzs7QUFFM0MsU0FBU2laLGlCQUFULEdBQTZCO0FBQzNCLFFBQU1sVSxHQUFHLEdBQUdtTyxVQUFVLENBQUMzVCxNQUF2Qjs7QUFDQSxNQUFJaVksYUFBYSxHQUFHelMsR0FBcEIsRUFBeUI7QUFDdkJ5UyxpQkFBYSxHQUFHelMsR0FBaEI7QUFDQSxXQUFPLFNBQWlDZixJQUFqQyxFQUFBWiw2REFBTyxDQUFDLFVBQUQsRUFBYThQLFVBQWIsQ0FBUCxFQUFzQyxNQUFNO0FBQ2pEcUUsa0JBQVksR0FBRzBCLGlCQUFpQixFQUFoQztBQUNELEtBRk0sQ0FBUDtBQUdEO0FBQ0Y7O0FBRUQsZUFBZVgsU0FBZixDQUF5QmtCLFlBQXpCLEVBQXVDO0FBQ3JDO0FBQ0EsUUFBTTlXLElBQUksR0FBRzVGLE1BQU0sQ0FBQzJjLE1BQVAsS0FBaUIsTUFBTXhhLFdBQVcsQ0FBQ3lhLElBQVosQ0FBaUIsQ0FDbkQsSUFBSXphLFdBQUosQ0FBZ0JILE9BQU8sSUFBSTtBQUFFaEMsVUFBTSxDQUFDNmMsU0FBUCxHQUFtQjdhLE9BQW5CO0FBQTZCLEdBQTFELENBRG1ELEVBRW5EMGEsWUFGbUQsQ0FBakIsQ0FBdkIsQ0FBYjtBQUlBLFNBQU8xYyxNQUFNLENBQUM2YyxTQUFkO0FBQ0EsU0FBTzdjLE1BQU0sQ0FBQzJjLE1BQWQ7QUFDQSxTQUFPL1csSUFBUDtBQUNEOztBQUVELFNBQVNvVixlQUFULEdBQTJCO0FBQ3pCLE1BQUk7QUFDRixVQUFNOEIsU0FBUyxHQUFJLElBQUcvWiw0QkFBMkIsR0FBakQsQ0FERSxDQUVGOztBQUNBLFVBQU1nYSxXQUFXLEdBQUdwRixRQUFRLENBQUNxRixNQUFULENBQWdCM1IsS0FBaEIsQ0FBdUIsR0FBRXlSLFNBQVUsR0FBbkMsRUFBdUMsQ0FBdkMsQ0FBcEI7QUFDQSxVQUFNRyxNQUFNLEdBQUdGLFdBQVcsSUFBSUEsV0FBVyxDQUFDMVIsS0FBWixDQUFrQixHQUFsQixFQUF1QixDQUF2QixFQUEwQixDQUExQixDQUE5Qjs7QUFDQSxRQUFJNFIsTUFBSixFQUFZO0FBQ1Z0RixjQUFRLENBQUNxRixNQUFULEdBQW1CLEdBQUVGLFNBQVUsNkJBQS9CLENBRFUsQ0FDbUQ7O0FBQzdELFlBQU0vSyxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFaO0FBQ0EsWUFBTTlJLEdBQUcsR0FBSSxRQUFPZ1UsT0FBUSxHQUFFRCxNQUFPLEVBQXJDO0FBQ0FsTCxTQUFHLENBQUNHLElBQUosQ0FBUyxLQUFULEVBQWdCaEosR0FBaEIsRUFBcUIsS0FBckIsRUFKVSxDQUltQjs7QUFDN0I2SSxTQUFHLENBQUNTLElBQUo7QUFDQW5KLFNBQUcsQ0FBQzhULGVBQUosQ0FBb0JqVSxHQUFwQjtBQUNBLGFBQU9tSixJQUFJLENBQUNDLEtBQUwsQ0FBV1AsR0FBRyxDQUFDbE8sUUFBZixDQUFQO0FBQ0Q7QUFDRixHQWRELENBY0UsZ0JBQU07QUFBRTtBQUFXO0FBQ3RCLEM7Ozs7Ozs7Ozs7OztBQ3pJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTs7Ozs7QUFJQSxNQUFNdVosY0FBYyxHQUFHcmEsNEJBQXZCO0FBQ0EsTUFBTXNhLFlBQVksR0FBSSxHQUFFdGQsVUFBVSxHQUFHbWQsT0FBSCxHQUFhRSxjQUFlLElBQTlEO0FBQ0EsTUFBTUUsZ0JBQWdCLEdBQUksR0FBRUQsWUFBYSxHQUF6QztBQUNBLElBQUlFLFNBQUo7QUFDQSxJQUFJQyxPQUFKO0FBQ0E7O0FBQ0EsSUFBSUMsTUFBSjtBQUNBOztBQUNBLElBQUlDLGNBQUo7QUFDQSxJQUFJQyxhQUFKO0FBQ0E7O0FBQ0EsSUFBSUMsWUFBSixDLENBRUE7O0FBQ0EsSUFBSUMsZUFBZSxHQUFHOVcsTUFBTSxDQUFDcVcsY0FBRCxDQUE1QjtBQUNBOzs7QUFFQVUsY0FBYyxDQUFDL1csTUFBRCxFQUFTcVcsY0FBVCxFQUF5QjtBQUNyQ3JZLFdBQVMsRUFBRSxJQUQwQjtBQUVyQ29ILE9BQUssRUFBRSxDQUY4QjtBQUdyQzRSLGNBQVksRUFBRSxLQUh1QjtBQUlyQ0MsWUFBVSxFQUFFLEtBSnlCO0FBS3JDQyxVQUFRLEVBQUU7QUFMMkIsQ0FBekIsQ0FBZDs7QUFPQSxJQUFJbGUsVUFBSixFQUFnQjtBQUNkLFdBQVF5WSxFQUFSLEVBQUF6UixNQUFNLEVBQUtzVyxZQUFMLEVBQW1CakIsR0FBRyxJQUFJO0FBQzlCLGFBQUtqRSx3QkFBTCxFQUFBaUUsR0FBRzs7QUFDSCxRQUFJLENBQUN1QixhQUFMLEVBQW9CO0FBQ2xCO0FBQ0FBLG1CQUFhLEdBQUcsU0FBS08sZ0JBQUwsRUFBQTlCLEdBQUcsQ0FBbkI7QUFDRCxLQUhELE1BR087QUFDTDtBQUNBK0IsNEJBQXNCLENBQUMsU0FBS0MsU0FBTCxFQUFBaEMsR0FBRyxDQUFKLEVBQW1CdUIsYUFBbkIsQ0FBdEI7QUFDQSxlQUFlaFksSUFBZixFQUFBZ1ksYUFBYSxFQUFPLElBQUlVLGVBQUosQ0FBb0JmLGdCQUFwQixDQUFQLENBQWI7QUFDQUssbUJBQWEsR0FBRyxJQUFoQjtBQUNEO0FBQ0YsR0FYSyxFQVdILElBWEcsQ0FBTjtBQVlELENBYkQsTUFhTztBQUNMVyxvQkFBa0IsQ0FBQ3RlLE1BQUQsRUFBU3FkLFlBQVQsRUFBdUI7QUFDdkNsUixTQUFLLEVBQUVnUztBQURnQyxHQUF2QixDQUFsQjtBQUdEOztBQUVEakksK0NBQU0sQ0FBQ00sV0FBUCxDQUFtQjtBQUNqQjs7O0FBR0ErSCxZQUFVLEVBQUV4ZSxVQUFVLElBQUl5ZTtBQUpULENBQW5CO0FBT08sU0FBU25ELGlCQUFULENBQTJCVCxTQUEzQixFQUFzQ0UsS0FBdEMsRUFBNkM7QUFDbEQsUUFBTTtBQUFFMkQ7QUFBRixNQUFnQnplLE1BQXRCO0FBQ0EsUUFBTTBlLE9BQU8sR0FBRzdELGFBQWEsRUFBN0I7QUFDQSxRQUFNOEQsV0FBVyxHQUFHOUQsYUFBYSxFQUFqQzs7QUFDQSxNQUFJK0QsU0FBUyxDQUFDN1gsTUFBTSxDQUFDOFgsTUFBUixDQUFULElBQTRCRCxTQUFTLENBQUMsQ0FBQ3pFLE1BQUQsSUFBV3BULE1BQU0sQ0FBQ3dTLE1BQW5CLENBQXpDLEVBQXFFO0FBQ25FdUYsa0JBQWM7QUFDZixHQUZELE1BRU87QUFDTDs7Ozs7QUFLQUMsVUFBTSxDQUFDO0FBQUVwVixVQUFJLEVBQUcsV0FBVStVLE9BQVE7QUFBM0IsS0FBRCxFQUE0QyxNQUFNO0FBQ3REO0FBQ0EsVUFBSSxDQUFDM2UsVUFBRCxJQUFlZ0gsTUFBTSxDQUFDaVksZUFBUCxDQUF1Qk4sT0FBdkIsQ0FBbkIsRUFBb0Q7QUFDbERJLHNCQUFjO0FBQ2Y7QUFDRixLQUxLLENBQU47QUFNRDs7QUFDRCxTQUFPcEIsY0FBUDs7QUFFQSxXQUFTa0IsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDekIsUUFBSUksRUFBSjs7QUFDQSxRQUFJSixNQUFNLElBQUk3RyxnQkFBZ0IsQ0FBQzZHLE1BQU0sQ0FBQzFELFFBQVIsRUFBa0IsTUFBbEIsQ0FBaEIsQ0FBMEN6WixHQUF4RCxFQUE2RDtBQUMzRDtBQUNBLFVBQUkzQixVQUFKLEVBQWdCO0FBQ2QsY0FBTW1mLEtBQUssR0FBRyxNQUFNO0FBQUVELFlBQUUsR0FBRyxJQUFMO0FBQVksU0FBbEM7O0FBQ0EsaUJBQVF6RyxFQUFSLEVBQUF6UixNQUFNLEVBQUt1VyxnQkFBTCxFQUF1QjRCLEtBQXZCLEVBQThCLElBQTlCLENBQU47QUFDQSxpQkFBUXZaLElBQVIsRUFBQWtaLE1BQU0sRUFBTyxJQUFJTSxjQUFKLENBQW1COUIsWUFBbkIsRUFBaUM7QUFBRStCLHVCQUFhLEVBQUVyWTtBQUFqQixTQUFqQyxDQUFQLENBQU47QUFDQSxpQkFBUXBCLElBQVIsRUFBQWtaLE1BQU0sRUFBTyxJQUFJUixlQUFKLENBQW9CaEIsWUFBcEIsRUFBa0M7QUFBRWdDLGdCQUFNLEVBQUVYO0FBQVYsU0FBbEMsQ0FBUCxDQUFOO0FBQ0EsaUJBQVFqRyxHQUFSLEVBQUExUixNQUFNLEVBQU11VyxnQkFBTixFQUF3QjRCLEtBQXhCLEVBQStCLElBQS9CLENBQU47QUFDRCxPQU5ELE1BTU87QUFDTEQsVUFBRSxHQUFHSixNQUFNLENBQUN4QixZQUFELENBQVg7QUFDQSxZQUFJNEIsRUFBSixFQUFRQSxFQUFFLENBQUNQLE9BQUQsRUFBVTNYLE1BQVYsQ0FBRjtBQUNUO0FBQ0Y7O0FBQ0QsV0FBT2tZLEVBQVA7QUFDRDtBQUNEOzs7Ozs7O0FBS0EsV0FBU0gsY0FBVCxHQUEwQjtBQUN4Qjs7QUFFQSxhQUFRdEcsRUFBUixFQUFBelIsTUFBTSxFQUFLNFgsV0FBTCxFQUFrQlcsVUFBbEIsRUFBOEI7QUFBRUMsYUFBTyxFQUFFLElBQVg7QUFBaUJDLFVBQUksRUFBRTtBQUF2QixLQUE5QixDQUFOO0FBQ0FULFVBQU0sQ0FBQztBQUNMcFYsVUFBSSxFQUFHLElBQUdrVSxlQUFnQixJQUFHOWQsVUFBVyxLQUFJNGUsV0FBWSxNQUFLRCxPQUFRLE9BQS9ELEdBQ0QsbUJBQWtCeEIsT0FBUTtBQUYxQixLQUFELENBQU4sQ0FKd0IsQ0FReEI7O0FBQ0EsYUFBUXpFLEdBQVIsRUFBQTFSLE1BQU0sRUFBTTRYLFdBQU4sRUFBbUJXLFVBQW5CLEVBQStCLElBQS9CLENBQU47QUFDRDs7QUFDRCxXQUFTQSxVQUFULENBQW9CbEQsR0FBcEIsRUFBeUI7QUFDdkJzQixrQkFBYyxHQUFHLElBQWpCO0FBQ0EsYUFBS3ZGLHdCQUFMLEVBQUFpRSxHQUFHO0FBQ0hxRCw0REFBVSxDQUFDN0UsU0FBRCxFQUFZRSxLQUFaLEVBQW1CNUUsK0NBQW5CLEVBQTJCdUksU0FBM0IsQ0FBVjtBQUNBaUIsaUVBQWUsQ0FBQ2YsV0FBVyxHQUFHNWIsQ0FBZixFQUEwQyxDQUFDK1gsS0FBRCxFQUFRRixTQUFSLENBQTFDLEVBQThENkQsU0FBOUQsQ0FBZjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7O0FBS08sZUFBZTdDLGFBQWYsQ0FBNkJoQixTQUE3QixFQUF3Q0UsS0FBeEMsRUFBK0NsVixJQUEvQyxFQUFxRDtBQUMxRCxRQUFNO0FBQUUrWixXQUFGO0FBQVdDO0FBQVgsTUFBb0JoYSxJQUExQjtBQUNBNlgsUUFBTSxHQUFHO0FBQ1AxWSxhQUFTLEVBQUUsSUFESjs7QUFFUDtBQUNBLEtBQUNGLG9EQUFELEdBQWtCO0FBQ2hCZ2IsZ0JBQVUsRUFBRSxJQURJOztBQUVoQjtBQUNBQyxXQUFLLEVBQUV2QyxTQUFTLEdBQUc7QUFBRXdDLGFBQUssRUFBRSxFQUFUO0FBQWFsTixZQUFJLEVBQUUsRUFBbkI7QUFBdUIxRCxXQUFHLEVBQUUsRUFBNUI7QUFBZ0M2USxZQUFJLEVBQUU7QUFBdEMsT0FISDtBQUloQkMsUUFBRSxFQUFFLENBSlk7QUFLaEJMO0FBTGdCLEtBSFg7QUFVUCxLQUFDaGIsaURBQUQsR0FBZTtBQUNiaWIsZ0JBQVUsRUFBRW5DLGNBREM7QUFFYm9DLFdBQUssRUFBRXRDLE9BQU8sR0FBRztBQUFFdUMsYUFBSyxFQUFFLEVBQVQ7QUFBYWxOLFlBQUksRUFBRSxFQUFuQjtBQUF1QjFELFdBQUcsRUFBRSxFQUE1QjtBQUFnQzZRLFlBQUksRUFBRTtBQUF0QyxPQUZKO0FBR2JDLFFBQUUsRUFBRSxDQUhTO0FBSWJMO0FBSmE7QUFWUixHQUFUO0FBaUJBek0sUUFBTSxDQUFDK0MsK0NBQU0sQ0FBQ3pJLEtBQVIsRUFBZTdILElBQUksQ0FBQzZILEtBQXBCLENBQU47QUFDQSxRQUFNeVMsUUFBUSxHQUFHdGEsSUFBSSxDQUFDK1YsT0FBTCxDQUFhcFQsR0FBYixDQUFrQk0sTUFBRCxJQUFZO0FBQzVDLFVBQU07QUFBRUc7QUFBRixRQUFTSCxNQUFNLENBQUNFLEtBQXRCLENBRDRDLENBRTVDOztBQUNBLFVBQU1pTyxLQUFLLEdBQUdsUyxvREFBYyxDQUFDK0QsTUFBTSxDQUFDc1gsVUFBUixDQUFkLENBQWtDelgsSUFBbEMsQ0FBdUMvSCxHQUFHO0FBQUE7O0FBQUEsNEJBQUk4YyxNQUFNLENBQUM5YyxHQUFELENBQVYscUJBQUksWUFBYWtmLFVBQWpCO0FBQUEsS0FBMUMsQ0FBZCxDQUg0QyxDQUk1Qzs7QUFDQSxRQUFJN0ksS0FBSixFQUFXO0FBQ1QsWUFBTTtBQUFFb0o7QUFBRixVQUFjdlgsTUFBTSxDQUFDQyxNQUEzQjtBQUNBLFlBQU11WCxTQUFTLEdBQUc1QyxNQUFNLENBQUN6RyxLQUFELENBQXhCO0FBQ0FxSixlQUFTLENBQUNQLEtBQVYsQ0FBZ0JqWCxNQUFNLENBQUN5WCxLQUF2QixFQUE4QnBhLElBQTlCLENBQW1DMkMsTUFBbkMsRUFIUyxDQUdtQzs7QUFDNUN3WCxlQUFTLENBQUNKLEVBQVYsR0FBZSxJQUFmO0FBQ0EsVUFBSUcsT0FBSixFQUFhbEssK0NBQU0sQ0FBQ0ssUUFBUCxDQUFnQnZOLEVBQWhCLElBQXNCb1gsT0FBdEI7QUFDYmxLLHFEQUFNLENBQUNRLFdBQVAsQ0FBbUI3TixNQUFuQjtBQUNELEtBUEQsTUFPTztBQUNMcU4scURBQU0sQ0FBQ0ksU0FBUCxDQUFpQnBRLElBQWpCLENBQXNCOEMsRUFBdEI7QUFDRDs7QUFDRCxXQUFPLENBQUNILE1BQU0sQ0FBQzhMLE9BQVIsRUFBaUJxQyxLQUFLLEtBQUtuUyxvREFBM0IsQ0FBUDtBQUNELEdBaEJnQixDQUFqQjtBQWlCQSxRQUFNMGIsUUFBUSxHQUFHamEsNkRBQU8sQ0FBQyxtQkFBRCxFQUFzQjtBQUM1QzRaLFlBRDRDO0FBRTVDTSxVQUFNLEVBQUU1YSxJQUFJLENBQUM0YSxNQUYrQjtBQUc1Q3RGLGdCQUFZLEVBQUUsQ0FBQ3dDO0FBSDZCLEdBQXRCLENBQXhCLENBckMwRCxDQTBDMUQ7O0FBQ0EsUUFBTStDLFVBQVUsR0FBR2hELE1BQU0sQ0FBQzVZLG9EQUFELENBQU4sQ0FBdUJvYixFQUExQzs7QUFDQSxNQUFJUSxVQUFKLEVBQWdCO0FBQ2RDLHVCQUFtQixDQUFDOUYsU0FBRCxFQUFZRSxLQUFaLENBQW5CO0FBQ0QsR0E5Q3lELENBK0MxRDs7O0FBQ0EsUUFBTTZGLCtEQUFTLENBQUMsR0FBRCxFQUFNLFlBQVk7QUFDL0JDLGFBQVMsQ0FBQyxPQUFELENBQVQ7QUFDQSxVQUFNQyxNQUFNLEdBQUcsQ0FBQ3JELE9BQU8sQ0FBQzNLLElBQVIsQ0FBYXBRLE1BQWIsSUFBdUI4YSxTQUFTLENBQUMxSyxJQUFWLENBQWVwUSxNQUF2QyxLQUNWa2UsK0RBQVMsQ0FBQyxNQUFELEVBQVNDLFNBQVQsRUFBb0IsTUFBcEIsQ0FEZCxDQUYrQixDQUkvQjs7QUFDQSxRQUFJakIsT0FBSixFQUFhO0FBQ1gvWixVQUFJLEdBQUcsTUFBTTJhLFFBQWI7QUFDQSxVQUFJM2EsSUFBSixFQUFVLE1BQU1rYixvQkFBb0IsQ0FBQyxDQUFDTCxVQUFELElBQWU3RixTQUFoQixFQUEyQkUsS0FBM0IsRUFBa0NsVixJQUFsQyxDQUExQjtBQUNYOztBQUNELFFBQUlpYixNQUFKLEVBQVk7QUFDVixZQUFNQSxNQUFOO0FBQ0Q7O0FBQ0RwRCxVQUFNLEdBQUcsSUFBVDtBQUNBRCxXQUFPLEdBQUcsSUFBVjtBQUNBRCxhQUFTLEdBQUcsSUFBWjtBQUNELEdBZmMsQ0FBZjtBQWdCQU0saUJBQWUsR0FBRyxJQUFsQixDQWhFMEQsQ0FnRWxDO0FBQ3pCOztBQUVELGVBQWVpRCxvQkFBZixDQUFvQ2xHLFNBQXBDLEVBQStDRSxLQUEvQyxFQUFzRDtBQUFFck4sT0FBRjtBQUFTa087QUFBVCxDQUF0RCxFQUEwRTtBQUN4RXhJLFFBQU0sQ0FBQytDLCtDQUFNLENBQUN6SSxLQUFSLEVBQWVBLEtBQWYsQ0FBTjtBQUNBLE1BQUlzVCxZQUFKO0FBQ0EsV0FBU2piLE9BQVQsRUFBQTZWLE9BQU8sRUFBVTlTLE1BQU0sSUFBSTtBQUN6QixVQUFNO0FBQUVjLFVBQUY7QUFBUTJXO0FBQVIsUUFBa0J6WCxNQUF4QjtBQUNBLFVBQU07QUFBRUc7QUFBRixRQUFTSCxNQUFNLENBQUNFLEtBQXRCOztBQUNBLFFBQUksQ0FBQ1ksSUFBTCxFQUFXO0FBQ1RvWCxrQkFBWSxHQUFHLElBQWY7QUFDQSxlQUFrQjdhLElBQWxCLEVBQUFxWCxTQUFTLENBQUMrQyxLQUFELENBQVQsRUFBdUJ6WCxNQUF2QjtBQUNELEtBSEQsTUFHTyxJQUFJNlUsY0FBSixFQUFvQjtBQUN6QixlQUFnQnhYLElBQWhCLEVBQUFzWCxPQUFPLENBQUM4QyxLQUFELENBQVAsRUFBcUJ6WCxNQUFyQjtBQUNELEtBRk0sTUFFQTtBQUNMLGVBQWtCM0MsSUFBbEIsRUFBQWdRLCtDQUFNLENBQUNJLFNBQVAsRUFBdUJ0TixFQUF2QjtBQUNBLGVBQVk5QyxJQUFaLEVBQUFnUSwrQ0FBTSxDQUFDQyxHQUFQLEVBQWlCbk4sRUFBakI7QUFDRDtBQUNGLEdBWk0sQ0FBUDs7QUFhQSxNQUFJLFNBQVVnWSxhQUFWLEVBQUFySixRQUFRLE1BQXNCLFNBQWxDLEVBQTZDO0FBQzNDLFVBQU0sSUFBSXhWLFdBQUosQ0FBZ0JILE9BQU8sSUFBSTtBQUMvQjs7QUFFQSxlQUFRd1csRUFBUixFQUFBelIsTUFBTSxFQUFLLGtCQUFMLEVBQXlCL0UsT0FBekIsRUFBa0M7QUFBRXdkLFlBQUksRUFBRTtBQUFSLE9BQWxDLENBQU47QUFDRCxLQUpLLENBQU47QUFLQSxVQUFNLENBQU4sQ0FOMkMsQ0FNbEM7QUFDVjs7QUFDRCxNQUFJdUIsWUFBWSxJQUFJbkcsU0FBcEIsRUFBK0I7QUFDN0I4Rix1QkFBbUIsQ0FBQzlGLFNBQUQsRUFBWUUsS0FBWixDQUFuQjtBQUNEOztBQUNELFdBQVNoVixPQUFULEVBQUE2VixPQUFPLEVBQVV6RiwrQ0FBTSxDQUFDUSxXQUFqQixDQUFQO0FBQ0FrSyxXQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0FBLFdBQVMsQ0FBQyxNQUFELENBQVQ7QUFDRDs7QUFFRCxTQUFTN0IsTUFBVCxDQUFnQi9SLElBQWhCLEVBQXNCaVUsUUFBdEIsRUFBZ0M7QUFDOUIsUUFBTXBZLE1BQU0sR0FBRzRRLDhEQUFRLENBQUMsUUFBRCxFQUFXek0sSUFBSSxDQUFDckQsSUFBaEIsQ0FBdkIsQ0FEOEIsQ0FFOUI7O0FBQ0EsUUFBTXVYLE9BQU8sR0FBR25oQixVQUFVLElBQUksQ0FBQ2toQixRQUFmLEtBQTRCamUsQ0FBQyxJQUFJO0FBQy9DLFVBQU07QUFBRTJXO0FBQUYsUUFBWTNXLENBQUMsQ0FBQ0UsS0FBcEI7O0FBQ0EsUUFBSSxDQUFDeVcsS0FBRCxJQUFXLEdBQUVBLEtBQU0sRUFBVCxDQUFXN1MsUUFBWCxDQUFvQm9XLE9BQXBCLENBQWQsRUFBNEM7QUFDMUNoRyxTQUFHLENBQUMsT0FBRCxFQUFVLENBQUNsSyxJQUFJLENBQUNtVSxXQUFOLENBQVYsRUFBOEJuZSxDQUFDLENBQUNFLEtBQWhDLENBQUg7QUFDQUYsT0FBQyxDQUFDa1YsY0FBRjtBQUNEO0FBQ0YsR0FOZSxDQUFoQjs7QUFPQSxRQUFNa0osR0FBRyxHQUFHM0gsOERBQVEsQ0FBQyxLQUFELENBQXBCLENBVjhCLENBVzlCOztBQUNBLFFBQU00SCxPQUFPLEdBQUd6RCxZQUFZLEtBQzFCMEQsWUFBWSxHQUNSLFNBQUtBLFlBQUwsRUFBQUYsR0FBRyxFQUFlO0FBQUVHLFFBQUksRUFBRTtBQUFSLEdBQWYsQ0FESyxHQUVSSCxHQUhzQixDQUE1QjtBQUtBLE1BQUlJLE1BQUo7O0FBQ0EsTUFBSVAsUUFBSixFQUFjO0FBQ1o7QUFBc0M7QUFDdENPLFVBQU0sR0FBRy9ILDhEQUFRLENBQUMsUUFBRCxFQUFXO0FBQUV4WSxTQUFHLEVBQUU7QUFBUCxLQUFYLENBQWpCO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDbEIsVUFBTCxFQUFpQjtBQUNmLGVBQVMyWixXQUFULEVBQUEySCxPQUFPLEVBQWNHLE1BQWQsQ0FBUDtBQUNEO0FBQ0YsR0FQRCxNQU9PO0FBQ0wsYUFBUzlILFdBQVQsRUFBQTJILE9BQU8sRUFBY3hZLE1BQWQsQ0FBUDtBQUNEOztBQUNELE1BQUlxWSxPQUFKLEVBQWE7QUFDWCxhQUFRMUksRUFBUixFQUFBelIsTUFBTSxFQUFLLE9BQUwsRUFBY21hLE9BQWQsQ0FBTjtBQUNEOztBQUNELE1BQUksQ0FBQ3RELFlBQUwsRUFBbUI7QUFDakI7QUFDQSxhQUE4QmxFLFdBQTlCLEVBQUNGLCtEQUFTLENBQUMsR0FBRCxDQUFULElBQWtCN0IsUUFBbkIsRUFBMEN5SixHQUExQztBQUNEOztBQUNELE1BQUlGLE9BQUosRUFBYTtBQUNYLGFBQVF6SSxHQUFSLEVBQUExUixNQUFNLEVBQU0sT0FBTixFQUFlbWEsT0FBZixDQUFOO0FBQ0Q7O0FBQ0QsTUFBSUQsUUFBSixFQUFjO0FBQ1pyRCxnQkFBWSxHQUFHeUQsT0FBZjtBQUNBLFFBQUl0aEIsVUFBSixFQUFnQixTQUFTMlosV0FBVCxFQUFBMkgsT0FBTyxFQUFjRyxNQUFkLENBQVA7QUFDaEIsYUFBc0Q5SCxXQUF0RCxXQUF3QitILG9CQUF4QixFQUFBRCxNQUFNLENBQUNFLGVBQVAsRUFBNkMsR0FBN0MsRUFBa0QsQ0FBbEQsR0FBa0U3WSxNQUFsRTtBQUNBb1ksWUFBUTtBQUNSLGFBQVFVLE1BQVIsRUFBQUgsTUFBTTtBQUNONUQsZ0JBQVksR0FBRyxJQUFmO0FBQ0QsR0E3QzZCLENBOEM5Qjs7O0FBQ0EsV0FBUStELE1BQVIsRUFBQTlZLE1BQU07QUFDTixXQUFLOFksTUFBTCxFQUFBUCxHQUFHO0FBQ0o7O0FBRUQsU0FBU1IsU0FBVCxDQUFtQk4sS0FBbkIsRUFBMEI7QUFDeEIsT0FBSyxNQUFNdEosS0FBWCxJQUFvQnlHLE1BQXBCLEVBQTRCO0FBQUU7QUFBbUI7QUFDL0MsVUFBTTRDLFNBQVMsR0FBRzVDLE1BQU0sQ0FBQ3pHLEtBQUQsQ0FBeEI7QUFDQSxVQUFNNEssS0FBSyxHQUFHdkIsU0FBUyxDQUFDUCxLQUFWLENBQWdCUSxLQUFoQixDQUFkO0FBQ0EsVUFBTTtBQUFFVjtBQUFGLFFBQVdTLFNBQWpCOztBQUNBLFFBQUl1QixLQUFLLENBQUNuZixNQUFWLEVBQWtCO0FBQ2hCeVQscURBQU0sQ0FBQ3FCLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQUVxSSxZQUFGO0FBQVFnQyxhQUFSO0FBQWV0QjtBQUFmLE9BQTFCLEVBQWtEdEosS0FBbEQ7O0FBQ0EsVUFBSUEsS0FBSyxLQUFLcFMsaURBQVYsSUFBeUIsQ0FBQzdFLFVBQTlCLEVBQTBDO0FBQ3hDeWUsa0JBQVUsQ0FBQzhCLEtBQUQsQ0FBVjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxNQUFJQSxLQUFLLEtBQUssT0FBVixJQUFxQi9DLFNBQVMsQ0FBQytDLEtBQUQsQ0FBVCxDQUFpQjdkLE1BQTFDLEVBQWtEO0FBQ2hEeVQsbURBQU0sQ0FBQ3FCLElBQVAsQ0FBWSxPQUFaLEVBQXFCK0ksS0FBckIsRUFBNEJ6YixvREFBNUI7QUFDRDtBQUNGOztBQUVELGVBQWUyWixVQUFmLENBQTBCOEIsS0FBMUIsRUFBaUM7QUFDL0IsUUFBTXVCLElBQUksR0FBR3JFLE9BQU8sQ0FBQzhDLEtBQUQsQ0FBcEIsQ0FEK0IsQ0FFL0I7O0FBQ0EsT0FBSyxJQUFJbmEsQ0FBQyxHQUFHLENBQVIsRUFBVzZHLElBQWhCLEVBQXVCQSxJQUFJLEdBQUc2VSxJQUFJLENBQUMxYixDQUFELENBQWxDLEVBQXdDQSxDQUFDLElBQUksQ0FBN0MsRUFBZ0Q7QUFDOUMsUUFBSTZHLElBQUksQ0FBQ3JELElBQVQsRUFBZTtBQUNiLFVBQUkyVyxLQUFLLEtBQUssTUFBZCxFQUFzQixNQUFNaGEsNkRBQU8sQ0FBQyxZQUFELEVBQWUsQ0FBZixDQUFiO0FBQ3RCLFVBQUlnYSxLQUFLLEtBQUssS0FBZCxFQUFxQixNQUFNLENBQU47QUFDckJ2QixZQUFNLENBQUMvUixJQUFELENBQU47QUFDQUEsVUFBSSxDQUFDckQsSUFBTCxHQUFZLEVBQVo7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBUytXLG1CQUFULENBQTZCOUYsU0FBN0IsRUFBd0NFLEtBQXhDLEVBQStDO0FBQzdDLFFBQU1nSCxhQUFhLEdBQUdqRSxlQUFlLENBQUM5ZCxVQUFELENBQWYsQ0FBNEIrYSxLQUE1QixFQUFtQ0YsU0FBbkMsRUFBOEMxRSwrQ0FBTSxDQUFDWSxRQUFyRCxDQUF0QjtBQUNBLFFBQU1pTCxhQUFhLEdBQUc3TCwrQ0FBTSxDQUFDcUIsSUFBN0I7O0FBQ0FyQixpREFBTSxDQUFDcUIsSUFBUCxHQUFjLENBQUNoUixHQUFELEVBQU1nUyxNQUFOLEVBQWN2QixLQUFkLEVBQXFCRCxJQUFyQixLQUE4QjtBQUMxQyxVQUFNUyxFQUFFLEdBQUdSLEtBQUssS0FBS25TLG9EQUFWLEdBQ1BpZCxhQURPLEdBRVBDLGFBRko7QUFHQXZLLE1BQUUsQ0FBQ2pSLEdBQUQsRUFBTWdTLE1BQU4sRUFBY25YLFNBQWQsRUFBeUIyVixJQUF6QixDQUFGO0FBQ0QsR0FMRDtBQU1EOztBQUVELFNBQVNvSCxzQkFBVCxDQUFnQ08sT0FBaEMsRUFBeUNzRCxHQUF6QyxFQUE4QztBQUM1QzlMLGlEQUFNLENBQUNxQixJQUFQLENBQVksWUFBWixFQUEwQm1ILE9BQTFCLEVBQW1DOVosaURBQW5DLEVBQWdEb2QsR0FBaEQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNqVUQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1DLGFBQWEsR0FBRy9OLGFBQWEsRUFBbkM7QUFFQWdDLCtDQUFNLENBQUNNLFdBQVAsQ0FBbUI7QUFDakIsUUFBTTBMLFlBQU4sQ0FBbUIxYixPQUFuQixFQUE0QndRLEtBQTVCLEVBQW1DO0FBQ2pDLFVBQU1tTCxHQUFHLEdBQUcsTUFBTTdiLDZEQUFPLENBQUMsY0FBRCxFQUFpQkUsT0FBakIsQ0FBekI7QUFDQXliLGlCQUFhLENBQUNFLEdBQUQsQ0FBYixHQUFxQjtBQUFFblosUUFBRSxFQUFFeEMsT0FBTyxDQUFDd0MsRUFBZDtBQUFrQmdPO0FBQWxCLEtBQXJCO0FBQ0QsR0FKZ0I7O0FBS2pCb0wsb0JBQWtCLENBQUNwWixFQUFELEVBQUs7QUFDckIsU0FBSyxNQUFNbVosR0FBWCxJQUFrQkYsYUFBbEIsRUFBaUM7QUFDL0IsVUFBSUEsYUFBYSxDQUFDRSxHQUFELENBQWIsQ0FBbUJuWixFQUFuQixLQUEwQkEsRUFBOUIsRUFBa0M7QUFDaEMsZUFBT2laLGFBQWEsQ0FBQ0UsR0FBRCxDQUFwQjtBQUNBLGVBQU83Yiw2REFBTyxDQUFDLG9CQUFELEVBQXVCNmIsR0FBdkIsQ0FBZDtBQUNEO0FBQ0Y7QUFDRjs7QUFaZ0IsQ0FBbkI7QUFlQWpNLCtDQUFNLENBQUNPLHFCQUFQLENBQTZCO0FBQzNCNEwsbUJBQWlCLENBQUNGLEdBQUQsRUFBTTtBQUNyQixVQUFNRyxDQUFDLEdBQUdMLGFBQWEsQ0FBQ0UsR0FBRCxDQUF2QjtBQUNBLFFBQUlHLENBQUosRUFBT3BNLCtDQUFNLENBQUNxQixJQUFQLENBQVkscUJBQVosRUFBbUMrSyxDQUFDLENBQUN0WixFQUFyQyxFQUF5Q3NaLENBQUMsQ0FBQ3RMLEtBQTNDO0FBQ1IsR0FKMEI7O0FBSzNCdUwsbUJBQWlCLENBQUNKLEdBQUQsRUFBTTtBQUNyQixVQUFNRyxDQUFDLEdBQUdMLGFBQWEsQ0FBQ0UsR0FBRCxDQUF2Qjs7QUFDQSxRQUFJRyxDQUFKLEVBQU87QUFDTHBNLHFEQUFNLENBQUNxQixJQUFQLENBQVksb0JBQVosRUFBa0MrSyxDQUFDLENBQUN0WixFQUFwQyxFQUF3Q3NaLENBQUMsQ0FBQ3RMLEtBQTFDO0FBQ0EsYUFBT2lMLGFBQWEsQ0FBQ0UsR0FBRCxDQUFwQjtBQUNEO0FBQ0Y7O0FBWDBCLENBQTdCLEU7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTTtBQUNKN08sT0FBSyxFQUFFa1A7QUFESCxJQUVGeGlCLE1BRko7QUFHQSxNQUFNO0FBQUV5aUIsYUFBVyxFQUFFQyxjQUFmO0FBQStCalQsTUFBSSxFQUFFa1Q7QUFBckMsSUFBaURDLGFBQXZEO0FBQ0EsTUFBTTtBQUFFQyxpQkFBRjtBQUFtQjFGO0FBQW5CLElBQXVDOVQsR0FBN0M7QUFFQSxNQUFNeVosUUFBUSxHQUFHNU8sYUFBYSxFQUE5QjtBQUNBLElBQUk2TyxhQUFhLEdBQUd2SSxjQUFjLEVBQWxDO0FBRUF0RSwrQ0FBTSxDQUFDTSxXQUFQLENBQW1CO0FBQ2pCd00sYUFBVyxDQUFDQyxHQUFELEVBQU1qTSxLQUFOLEVBQWE7QUFDdEI4TCxZQUFRLENBQUNHLEdBQUcsQ0FBQ2phLEVBQUwsQ0FBUixHQUFtQixTQUloQnNSLFlBSmdCO0FBQ2pCdlYsZUFBUyxFQUFFLElBRE07QUFFakJpUyxXQUZpQjtBQUdqQmtNLGVBQVMsRUFBRUQsR0FBRyxDQUFDRSxPQUFKLEtBQWdCO0FBSFYsT0FJSEYsR0FKRyxFQUlFLENBQ25CLGdCQURtQixFQUVuQixVQUZtQixDQUpGLENBQW5CO0FBUUFBLE9BQUcsQ0FBQy9aLEdBQUosR0FBVUQsZ0VBQVUsQ0FBQ2dhLEdBQUcsQ0FBQy9aLEdBQUwsQ0FBcEI7QUFDQTVDLGlFQUFPLENBQUMsYUFBRCxFQUFnQjJjLEdBQWhCLENBQVA7QUFDRCxHQVpnQjs7QUFhakJHLGNBQVksRUFBRTtBQWJHLENBQW5CO0FBZ0JBbE4sK0NBQU0sQ0FBQ08scUJBQVAsQ0FBNkI7QUFDM0IsUUFBTTRNLGFBQU4sQ0FBb0JKLEdBQXBCLEVBQXlCO0FBQ3ZCLFVBQU07QUFBRWphLFFBQUY7QUFBTXNhO0FBQU4sUUFBZ0JMLEdBQXRCO0FBQ0EsVUFBTU0sR0FBRyxHQUFHVCxRQUFRLENBQUM5WixFQUFELENBQXBCO0FBQ0EsUUFBSSxDQUFDdWEsR0FBTCxFQUFVOztBQUNWLFFBQUlELEtBQUosRUFBVztBQUNURSxrQkFBWSxDQUFDRCxHQUFELEVBQU1ELEtBQU4sQ0FBWjtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSSxDQUFDTCxHQUFHLENBQUNRLFNBQUosSUFBaUIsQ0FBbEIsTUFBeUIsQ0FBN0IsRUFBZ0M7QUFDOUJGLFNBQUcsQ0FBQ0csU0FBSixHQUFnQixJQUFoQjtBQUNEOztBQUNELFVBQU07QUFBRUMsYUFBRjtBQUFXL2QsVUFBWDtBQUFpQmdlLGFBQWpCO0FBQTBCdEwsVUFBMUI7QUFBZ0N1TDtBQUFoQyxRQUErQ1osR0FBckQ7O0FBRUEsUUFBSVksVUFBSixFQUFnQjtBQUNkO0FBQ0EzTixxREFBTSxDQUFDcUIsSUFBUCxDQUFZLGVBQVosRUFBNkIwTCxHQUE3QixFQUFrQ00sR0FBRyxDQUFDdk0sS0FBdEM7QUFDQSxVQUFJaU0sR0FBRyxDQUFDM0ssSUFBSixLQUFhLE1BQWpCLEVBQXlCLE9BQU93SyxRQUFRLENBQUM5WixFQUFELENBQWY7QUFDekI7QUFDRDs7QUFFRCxVQUFNOGEsU0FBUyxHQUFHeEwsSUFBSSxLQUFLLFNBQTNCLENBcEJ1QixDQXFCdkI7O0FBQ0EsVUFBTXpVLFFBQVEsR0FBRytCLElBQUksSUFDaEIsU0FBb0JrQixRQUFwQixFQUFBeWMsR0FBRyxDQUFDUSxjQUFKLEVBQTZCekwsSUFBN0IsQ0FEWSxJQUVaMVMsSUFBSSxDQUFDL0IsUUFGVixDQXRCdUIsQ0F5QnZCOztBQUNBLFVBQU1tZ0IsU0FBUyxHQUFHbmdCLFFBQVEsS0FBSzhmLE9BQU8sSUFBSUMsT0FBaEIsQ0FBMUI7O0FBQ0EsUUFBSUksU0FBSixFQUFlO0FBQ2JULFNBQUcsQ0FBQ1UsR0FBSixHQUFVTixPQUFPLEdBQ2JPLFVBQVUsQ0FBQ1gsR0FBRCxFQUFNMWYsUUFBTixDQURHLEdBRWJzZ0IsZ0JBQWdCLENBQUNaLEdBQUQsRUFBTU4sR0FBTixDQUZwQjtBQUdELEtBL0JzQixDQWdDdkI7OztBQUNBLFFBQUkzTCxTQUFTLENBQUNpTSxHQUFHLENBQUNVLEdBQUwsQ0FBYixFQUF3QjtBQUN0QlYsU0FBRyxDQUFDVSxHQUFKLEdBQVUsTUFBTVYsR0FBRyxDQUFDVSxHQUFwQjtBQUNELEtBbkNzQixDQW9DdkI7QUFDQTs7O0FBQ0EsUUFBSUgsU0FBSixFQUFlO0FBQ2I7QUFDQSxZQUFNLENBQU47QUFDQVAsU0FBRyxDQUFDYSxVQUFKLEdBQWlCLElBQWpCO0FBQ0Q7O0FBQ0QsUUFBSUosU0FBSixFQUFlO0FBQ2JwZSxVQUFJLENBQUMvQixRQUFMLEdBQWdCMGYsR0FBRyxDQUFDVSxHQUFwQjtBQUNEOztBQUNELFVBQU1JLFFBQVEsR0FBRy9MLElBQUksS0FBSyxNQUFULElBQW1CaUwsR0FBRyxDQUFDVSxHQUF2QixJQUE4QlYsR0FBRyxDQUFDYyxRQUFuRDs7QUFDQSxRQUFJQSxRQUFKLEVBQWM7QUFDWmQsU0FBRyxDQUFDYyxRQUFKLEdBQWUsRUFBZjtBQUNBLFlBQU1DLFlBQVksQ0FBQ2YsR0FBRyxDQUFDVSxHQUFMLEVBQVVJLFFBQVYsQ0FBbEI7QUFDRDs7QUFDRG5PLG1EQUFNLENBQUNxQixJQUFQLENBQVksZUFBWixFQUE2QjBMLEdBQTdCLEVBQWtDTSxHQUFHLENBQUN2TSxLQUF0Qzs7QUFDQSxRQUFJdU0sR0FBRyxDQUFDYSxVQUFKLElBQWtCYixHQUFHLENBQUNHLFNBQTFCLEVBQXFDO0FBQ25DLGFBQU9aLFFBQVEsQ0FBQzlaLEVBQUQsQ0FBZjtBQUNEO0FBQ0Y7O0FBeEQwQixDQUE3Qjs7QUEyREEsZUFBZWtiLFVBQWYsQ0FBMEJYLEdBQTFCLEVBQStCcmEsR0FBL0IsRUFBb0M7QUFDbEMsUUFBTXRELElBQUksR0FBRyxNQUFNLFNBQXlCMmQsR0FBRyxDQUFDTCxTQUFKLEdBQWdCUCxPQUFoQixHQUEwQkQsY0FBbkQsR0FBQyxNQUFNRixTQUFTLENBQUN0WixHQUFELENBQWhCLEVBQW5CO0FBQ0E1QywrREFBTyxDQUFDLFlBQUQsRUFBZTRDLEdBQWYsQ0FBUDtBQUNBLFNBQU90RCxJQUFQO0FBQ0Q7O0FBRUQsU0FBUzBlLFlBQVQsQ0FBc0I3VSxJQUF0QixFQUE0QjRVLFFBQTVCLEVBQXNDO0FBQ3BDLFFBQU1uYixHQUFHLEdBQUcyWixlQUFlLENBQUNwVCxJQUFELENBQTNCO0FBQ0EsUUFBTTNDLENBQUMsR0FBRzJNLDhEQUFRLENBQUMsR0FBRCxFQUFNO0FBQ3RCbFEsUUFBSSxFQUFFTCxHQURnQjtBQUV0Qm9NLFlBQVEsRUFBRStPO0FBRlksR0FBTixDQUFsQjtBQUlBLFFBQU1oakIsR0FBRyxHQUFHLFNBQWU2RixJQUFmLEVBQUE2YixhQUFhLEVBQU8sTUFBTTtBQUNwQyxhQUFHcGQsSUFBSCxFQUFBbUgsQ0FBQyxFQUFPLElBQUlxUyxjQUFKLENBQW1CLE9BQW5CLENBQVAsQ0FBRDtBQUNBb0YsMEJBQXNCLENBQUNyYixHQUFELENBQXRCO0FBQ0QsR0FId0IsQ0FBekIsQ0FOb0MsQ0FVcEM7O0FBQ0E2WixlQUFhLEdBQUcsU0FBSzdiLElBQUwsRUFBQTdGLEdBQUcsRUFBT2lGLDZEQUFPLENBQUMsWUFBRCxFQUFlLEdBQWYsQ0FBZCxDQUFuQjtBQUNBLFNBQU9qRixHQUFQO0FBQ0Q7O0FBRUQsZUFBZWtqQixzQkFBZixDQUFzQ3JiLEdBQXRDLEVBQTJDO0FBQ3pDLFFBQU01Qyw2REFBTyxDQUFDLFlBQUQsRUFBZSxJQUFmLENBQWI7QUFDQTZXLGlCQUFlLENBQUNqVSxHQUFELENBQWY7QUFDRDtBQUVEOzs7QUFDQSxTQUFTaWIsZ0JBQVQsQ0FBMEJaLEdBQTFCLEVBQStCTixHQUEvQixFQUFvQztBQUNsQyxXQUFLM0ksWUFBTCxFQUFBaUosR0FBRyxFQUFlTixHQUFmLEVBQW9CLENBQUMsVUFBRCxFQUFhLGFBQWIsQ0FBcEIsQ0FBSDtBQUNBTSxLQUFHLENBQUNpQixHQUFKLEdBQVUsSUFBSUMsY0FBSixDQUFtQmxCLEdBQUcsQ0FBQ21CLFFBQXZCLENBQVY7QUFDQUMsY0FBWSxDQUFDcEIsR0FBRCxFQUFNTixHQUFHLENBQUNyZCxJQUFKLENBQVMvQixRQUFmLEVBQXlCLENBQXpCLENBQVo7QUFDQSxTQUFPLENBQUMwZixHQUFHLENBQUNHLFNBQUwsR0FDSCxJQUFJdmhCLFdBQUosQ0FBZ0JILE9BQU8sSUFBSTtBQUFFdWhCLE9BQUcsQ0FBQ3ZoQixPQUFKLEdBQWNBLE9BQWQ7QUFBd0IsR0FBckQsQ0FERyxHQUVINGlCLFlBQVksQ0FBQ3JCLEdBQUQsQ0FGaEI7QUFHRDs7QUFFRCxTQUFTQyxZQUFULENBQXNCRCxHQUF0QixFQUEyQjtBQUFFM2QsTUFBRjtBQUFRaWYsS0FBUjtBQUFhQztBQUFiLENBQTNCLEVBQWdEO0FBQzlDSCxjQUFZLENBQUNwQixHQUFELEVBQU0zZCxJQUFOLEVBQVlpZixHQUFaLENBQVo7O0FBQ0EsTUFBSUMsSUFBSixFQUFVO0FBQ1J2QixPQUFHLENBQUNHLFNBQUosR0FBZ0IsSUFBaEI7QUFDQUgsT0FBRyxDQUFDdmhCLE9BQUosQ0FBWTRpQixZQUFZLENBQUNyQixHQUFELENBQXhCO0FBQ0EsV0FBT0EsR0FBRyxDQUFDdmhCLE9BQVg7QUFDRDtBQUNGOztBQUVELFNBQVMyaUIsWUFBVCxDQUFzQnBCLEdBQXRCLEVBQTJCM2QsSUFBM0IsRUFBaUNpZixHQUFqQyxFQUFzQztBQUNwQyxRQUFNO0FBQUVMO0FBQUYsTUFBVWpCLEdBQWhCO0FBQ0EzZCxNQUFJLEdBQUdtZixRQUFRLENBQUNuZixJQUFELENBQWY7O0FBQ0EsT0FBSyxJQUFJcUssR0FBRyxHQUFHckssSUFBSSxDQUFDbkQsTUFBZixFQUF1QjBELENBQUMsR0FBRyxDQUFoQyxFQUFtQ0EsQ0FBQyxHQUFHOEosR0FBdkMsRUFBNEM5SixDQUFDLElBQUksQ0FBTCxFQUFRMGUsR0FBRyxJQUFJLENBQTNELEVBQThEO0FBQzVETCxPQUFHLENBQUNLLEdBQUQsQ0FBSCxHQUFXLFNBQU1qYixVQUFOLEVBQUFoRSxJQUFJLEVBQWFPLENBQWIsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU3llLFlBQVQsQ0FBc0JyQixHQUF0QixFQUEyQjtBQUN6QixRQUFNO0FBQUVpQjtBQUFGLE1BQVVqQixHQUFoQjtBQUNBLFNBQU9BLEdBQUcsQ0FBQ2lCLEdBQVg7QUFDQSxTQUFPakIsR0FBRyxDQUFDTCxTQUFKLEdBQ0gsSUFBSThCLFFBQUosQ0FBYSxDQUFDUixHQUFELENBQWIsRUFBb0I7QUFBRWxNLFFBQUksRUFBRWlMLEdBQUcsQ0FBQzBCO0FBQVosR0FBcEIsQ0FERyxHQUVIVCxHQUFHLENBQUNVLE1BRlI7QUFHRCxDOzs7Ozs7Ozs7Ozs7QUNsSkQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1DLE1BQU0sR0FBR2pSLGFBQWEsRUFBNUI7QUFDQSxNQUFNa1IsT0FBTyxHQUFHbFIsYUFBYSxFQUE3QjtBQUNBLE1BQU11SixNQUFNLEdBQUd2SixhQUFhLEVBQTVCO0FBRUFnQywrQ0FBTSxDQUFDTSxXQUFQLENBQW1CO0FBQ2pCLFFBQU02TyxPQUFOLENBQWM7QUFBRTFrQixPQUFGO0FBQU9pRjtBQUFQLEdBQWQsRUFBNkJvUixLQUE3QixFQUFvQztBQUNsQyxVQUFNO0FBQUVoTztBQUFGLFFBQVMsTUFBTTFDLDZEQUFPLENBQUMsU0FBRCxFQUFZVixJQUFaLENBQTVCO0FBQ0F1ZixVQUFNLENBQUN4a0IsR0FBRCxDQUFOLEdBQWNxSSxFQUFkO0FBQ0FvYyxXQUFPLENBQUNwYyxFQUFELENBQVAsR0FBY3JJLEdBQWQ7QUFDQThjLFVBQU0sQ0FBQ3pVLEVBQUQsQ0FBTixHQUFhZ08sS0FBYjtBQUNELEdBTmdCOztBQU9qQnNPLFVBQVEsQ0FBQzNrQixHQUFELEVBQU07QUFDWixVQUFNcUksRUFBRSxHQUFHbWMsTUFBTSxDQUFDeGtCLEdBQUQsQ0FBakIsQ0FEWSxDQUVaO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDQSxHQUFELElBQVFxSSxFQUFaLEVBQWdCMUMsNkRBQU8sQ0FBQyxVQUFELEVBQWE7QUFBRTBDO0FBQUYsS0FBYixDQUFQO0FBQ2pCOztBQVpnQixDQUFuQjtBQWVBa04sK0NBQU0sQ0FBQ08scUJBQVAsQ0FBNkI7QUFDM0I4TyxXQUFTLENBQUN2YyxFQUFELEVBQUs7QUFDWixVQUFNckksR0FBRyxHQUFHeWtCLE9BQU8sQ0FBQ3BjLEVBQUQsQ0FBbkI7QUFDQSxVQUFNZ08sS0FBSyxHQUFHeUcsTUFBTSxDQUFDelUsRUFBRCxDQUFwQjtBQUNBLFdBQU95VSxNQUFNLENBQUN6VSxFQUFELENBQWI7QUFDQSxXQUFPb2MsT0FBTyxDQUFDcGMsRUFBRCxDQUFkO0FBQ0EsV0FBT21jLE1BQU0sQ0FBQ3hrQixHQUFELENBQWI7QUFDQSxRQUFJQSxHQUFKLEVBQVN1ViwrQ0FBTSxDQUFDcUIsSUFBUCxDQUFZLFdBQVosRUFBeUI1VyxHQUF6QixFQUE4QnFXLEtBQTlCO0FBQ1Y7O0FBUjBCLENBQTdCLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7QUFHTyxNQUFNd0MsU0FBUyxHQUFHLENBQUNMLEdBQUQsRUFBTWhULENBQU4sS0FBWWlSLFVBQVUsQ0FBQyxTQUFVcUssb0JBQVYsRUFBQTlKLFFBQVEsRUFBdUJ3QixHQUF2QixDQUFULEVBQXNDaFQsQ0FBQyxJQUFJLENBQTNDLENBQXhDO0FBRVA7Ozs7Ozs7QUFNTyxNQUFNd2EsU0FBUyxHQUFHLENBQUN4SCxHQUFELEVBQU1wVCxFQUFOLEVBQVV5ZixHQUFWLEtBQWtCLElBQUlyakIsV0FBSixDQUFnQkgsT0FBTyxJQUFJO0FBQ3BFLE1BQUl3WCxTQUFTLENBQUNMLEdBQUQsQ0FBYixFQUFvQjtBQUNsQm5YLFdBQU8sQ0FBQytELEVBQUUsQ0FBQ3lmLEdBQUQsQ0FBSCxDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsVUFBTUMsUUFBUSxHQUFHLElBQUlDLGdCQUFKLENBQXFCLE1BQU07QUFDMUMsVUFBSWxNLFNBQVMsQ0FBQ0wsR0FBRCxDQUFiLEVBQW9CO0FBQ2xCc00sZ0JBQVEsQ0FBQ0UsVUFBVDtBQUNBM2pCLGVBQU8sQ0FBQytELEVBQUUsQ0FBQ3lmLEdBQUQsQ0FBSCxDQUFQO0FBQ0Q7QUFDRixLQUxnQixDQUFqQixDQURLLENBT0w7O0FBQ0FDLFlBQVEsQ0FBQ0csT0FBVCxDQUFpQmpPLFFBQWpCLEVBQTJCO0FBQUVrTyxlQUFTLEVBQUUsSUFBYjtBQUFtQkMsYUFBTyxFQUFFO0FBQTVCLEtBQTNCO0FBQ0Q7QUFDRixDQWIwQyxDQUFwQztBQWVBLE1BQU1yTSxRQUFRLEdBQUcsQ0FBQ04sR0FBRCxFQUFNQyxLQUFOLEtBQWdCO0FBQ3RDLFFBQU1FLEVBQUUsR0FBRyxTQUFVeU0sZUFBVixFQUFBcE8sUUFBUSxFQUFrQnFPLE9BQWxCLEVBQTJCN00sR0FBM0IsQ0FBbkI7O0FBQ0EsTUFBSUMsS0FBSyxJQUFJNk0sUUFBUSxDQUFDN00sS0FBRCxDQUFyQixFQUE4QjtBQUM1QixhQUFJOE0sTUFBSixFQUFBNU0sRUFBRSxFQUFTRixLQUFULENBQUY7QUFDRCxHQUZELE1BRU8sSUFBSUEsS0FBSixFQUFXO0FBQ2hCLGFBQW1CdFQsT0FBbkIsRUFBQW1XLFVBQVUsQ0FBQzdDLEtBQUQsQ0FBVixFQUEyQnpZLEdBQUcsSUFBSTtBQUNoQyxVQUFJQSxHQUFHLEtBQUssYUFBWixFQUEyQixTQUFJdWxCLE1BQUosRUFBQTVNLEVBQUUsRUFBU0YsS0FBSyxDQUFDelksR0FBRCxDQUFkLENBQUYsQ0FBM0IsS0FDSyxTQUFJd2xCLFlBQUosRUFBQTdNLEVBQUUsRUFBZTNZLEdBQWYsRUFBb0J5WSxLQUFLLENBQUN6WSxHQUFELENBQXpCLENBQUY7QUFDTixLQUhEO0FBSUQ7O0FBQ0QsU0FBTzJZLEVBQVA7QUFDRCxDQVhNO0FBYUEsTUFBTXJRLFVBQVUsR0FBR0MsR0FBRyxJQUMzQixTQUE4QmtkLE9BQTlCLEVBQUEzTSxRQUFRLENBQUMsR0FBRCxFQUFNO0FBQUVsUSxNQUFJLEVBQUVMO0FBQVIsQ0FBTixDQUFSLENBREs7QUFJQSxNQUFNOFEsY0FBYyxHQUFHLENBQUNELEdBQUQsRUFBTUYsTUFBTixLQUFpQjtBQUM3QyxNQUFJeFksR0FBSjtBQUNBLFFBQU13akIsR0FBRyxHQUFHLFNBQUt3QixhQUFMLEVBQUF0TSxHQUFHLEVBQWdCLEdBQWhCLENBQWY7QUFDQSxRQUFNa0ssR0FBRyxHQUFHYyxRQUFRLENBQUNGLEdBQUcsR0FBRyxDQUFOLEdBQVU5SyxHQUFWLEdBQWdCLFNBQUtsVSxLQUFMLEVBQUFrVSxHQUFHLEVBQVE4SyxHQUFHLEdBQUcsQ0FBZCxDQUFwQixDQUFwQjs7QUFDQSxNQUFJaEwsTUFBTSxJQUFJLFNBQWVoRCxVQUFmLGlCQUEwQm9OLEdBQTFCLENBQWQsRUFBOEM7QUFDNUMsVUFBTWhVLEdBQUcsR0FBR2dVLEdBQUcsQ0FBQ3hoQixNQUFoQjtBQUNBLFVBQU02akIsS0FBSyxHQUFHLElBQUk3QixjQUFKLENBQW1CeFUsR0FBbkIsQ0FBZDs7QUFDQSxTQUFLLElBQUk5SixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHOEosR0FBcEIsRUFBeUI5SixDQUFDLElBQUksQ0FBOUIsRUFBaUM7QUFDL0JtZ0IsV0FBSyxDQUFDbmdCLENBQUQsQ0FBTCxHQUFXLFNBQUt5RCxVQUFMLEVBQUFxYSxHQUFHLEVBQWE5ZCxDQUFiLENBQWQ7QUFDRDs7QUFDRDlFLE9BQUcsR0FBR3dZLE1BQU0sR0FDUixJQUFJbUwsUUFBSixDQUFhLENBQUNzQixLQUFELENBQWIsRUFBc0I7QUFBRWhPLFVBQUksRUFBRXVNLEdBQUcsR0FBRyxDQUFOLEdBQVUsRUFBVixHQUFlLFNBQUtoZixLQUFMLEVBQUFrVSxHQUFHLEVBQVEsQ0FBUixFQUFXOEssR0FBWDtBQUExQixLQUF0QixDQURRLEdBRVIsU0FBdUIwQixRQUF2QixNQUFJQyxlQUFKLElBQWdDRixLQUFoQyxDQUZKO0FBR0QsR0FURCxNQVNPO0FBQUU7QUFDUGpsQixPQUFHLEdBQUc0aUIsR0FBTjtBQUNEOztBQUNELFNBQU81aUIsR0FBUDtBQUNELENBakJNLEM7Ozs7Ozs7Ozs7OztBQzlDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQTJCOztDQUNTOztDQUdwQzs7QUFDQSxNQUFNNkgsR0FBRyxHQUFHbkosVUFBVSxJQUFJb2EsTUFBZCxJQUF3Qm5hLE1BQU0sQ0FBQ21iLFFBQVAsQ0FBZ0I1UixJQUFwRDs7QUFDQSxJQUFJTCxHQUFHLElBQ0osU0FBVTJOLFVBQVYsWUFBcUIzTixHQUFyQixDQURDLENBQ3lCO0FBRHpCLEdBRUQsU0FBZTJOLFVBQWYsaUJBQTBCM04sR0FBMUIsQ0FGSCxFQUVtQztBQUFFO0FBQ25DLEdBQUMsWUFBWTtBQUNYLFVBQU07QUFDSmpKLGFBREk7QUFFSnFULFdBRkk7QUFHSm1ULGFBSEk7QUFJSjlPLGNBQVEsRUFBRTtBQUFFK087QUFBRjtBQUpOLFFBS0YxbUIsTUFMSjtBQU1BLFVBQU07QUFBRTJtQixVQUFJLEVBQUVDO0FBQVIsUUFBb0JoRSxhQUExQjtBQUNBLFVBQU1pRSxTQUFTLEdBQUc7QUFBRXRGLFVBQUksRUFBRTtBQUFSLEtBQWxCO0FBQ0EsVUFBTTFkLFFBQVEsR0FBRyxNQUFNeVAsS0FBSyxDQUFDcEssR0FBRCxFQUFNMmQsU0FBTixDQUE1Qjs7QUFDQSxRQUFJLENBQUMsU0FBOEJoUSxVQUE5QixnQ0FBeUNoVCxRQUFRLENBQUNpUCxPQUFULENBQWlCcFIsR0FBakIsQ0FBcUIsY0FBckIsS0FBd0MsRUFBakYsQ0FBTCxFQUEyRjtBQUN6RjtBQUNEOztBQUNELFFBQUlvbEIsT0FBSjtBQUNBLFFBQUluZCxJQUFJLEdBQUcsTUFBTSxTQUFVaWQsT0FBVixFQUFBL2lCLFFBQVEsQ0FBekI7O0FBQ0EsUUFBSSxDQUFDLFNBQW1CZ1QsVUFBbkIscUJBQThCbE4sSUFBOUIsQ0FBTCxFQUEwQztBQUN4QztBQUNEOztBQUNELFVBQU1yRCwrRkFBTyxDQUFDLGdCQUFELEVBQW1CO0FBQUVxRCxVQUFGO0FBQVFULFNBQVI7QUFBYTZkLFVBQUksRUFBRUw7QUFBbkIsS0FBbkIsQ0FBYixDQWxCVyxDQW1CWDtBQUNBOztBQUNBLFFBQUl6bUIsT0FBTyxDQUFDK21CLE9BQVIsQ0FBZ0JDLE9BQXBCLEVBQTZCO0FBQzNCO0FBQ0FobkIsYUFBTyxDQUFDQyxPQUFSLENBQWdCZ25CLFNBQWhCLENBQTBCNWlCLFdBQTFCLENBQXNDNmlCLElBQUksSUFBSTtBQUM1QyxZQUFJQSxJQUFJLENBQUMza0IsSUFBTCxLQUFjLFdBQWxCLEVBQStCO0FBQy9CMmtCLFlBQUksQ0FBQzlpQixTQUFMLENBQWVDLFdBQWYsQ0FBMkIsWUFBWTtBQUNyQ3FGLGNBQUksR0FBRyxNQUFNLFNBQStCaWQsT0FBL0IsR0FBQyxNQUFNdFQsS0FBSyxDQUFDcEssR0FBRCxFQUFNMmQsU0FBTixDQUFaLEVBQWI7O0FBQ0EsY0FBSWxkLElBQUksS0FBS21kLE9BQWIsRUFBc0I7QUFDcEJuZCxnQkFBSSxHQUFHLElBQVA7QUFDRCxXQUZELE1BRU87QUFDTG1kLG1CQUFPLEdBQUduZCxJQUFWO0FBQ0Q7O0FBQ0R3ZCxjQUFJLENBQUNDLFdBQUwsQ0FBaUJ6ZCxJQUFqQjtBQUNELFNBUkQ7QUFTQXdkLFlBQUksQ0FBQ0UsWUFBTCxDQUFrQi9pQixXQUFsQixDQUE4QixZQUFZO0FBQ3hDd2lCLGlCQUFPLEdBQUcsSUFBVixDQUR3QyxDQUV4Qzs7QUFDQSxjQUFJLEVBQUMsTUFBTXhnQiwrRkFBTyxDQUFDLG1CQUFELEVBQXNCNmdCLElBQUksQ0FBQ3pqQixNQUFMLENBQVk0akIsR0FBWixDQUFnQnRlLEVBQXRDLENBQWQsQ0FBSixFQUE2RDtBQUMzRHVlLHFCQUFTO0FBQ1Y7QUFDRixTQU5EO0FBT0QsT0FsQkQ7QUFtQkQsS0FyQkQsTUFxQk87QUFDTEEsZUFBUztBQUNWOztBQUNELGFBQVNBLFNBQVQsR0FBcUI7QUFDbkIsVUFBSWQsT0FBTyxDQUFDaGtCLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0I7QUFDdEJna0IsZUFBTyxDQUFDZSxFQUFSLENBQVcsQ0FBQyxDQUFaO0FBQ0QsT0FGRCxNQUVPO0FBQ0xsaEIsdUdBQU8sQ0FBQyxVQUFELENBQVA7QUFDRDtBQUNGO0FBQ0YsR0FwREQsSUFvREtlLEtBcERMLENBb0RXcEUsT0FBTyxDQUFDQyxLQXBEbkIsRUFEaUMsQ0FxRE47QUFDNUIsQzs7Ozs7Ozs7Ozs7O0FDOUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTs7OztBQUtBO0FBSUE7QUFFTyxNQUFNd2MsZUFBZSxHQUFHLENBQUMrSCxPQUFELEVBQVV4RSxHQUFWLEVBQWV4RSxTQUFmLEtBQTZCO0FBQzFELFFBQU1ZLE1BQU0sR0FBR1osU0FBUyxHQUFHQSxTQUFTLENBQUN3RSxHQUFELEVBQU10TCxRQUFOLENBQVosR0FBOEJzTCxHQUF0RDtBQUNBLFFBQU15RSxPQUFPLEdBQUcsSUFBSXJKLGVBQUosQ0FBb0JvSixPQUFwQixFQUE2QjtBQUFFMWlCLGFBQVMsRUFBRSxJQUFiO0FBQW1Cc2E7QUFBbkIsR0FBN0IsQ0FBaEI7QUFDQSxXQUFRMVosSUFBUixFQUFBb0IsTUFBTSxFQUFPMmdCLE9BQVAsQ0FBTjtBQUNELENBSk07QUFNQSxNQUFNakksVUFBVSxHQUFHLENBQUNrSSxLQUFELEVBQVFDLE1BQVIsRUFBZ0IxUixNQUFoQixFQUF3QnVJLFNBQXhCLEtBQXNDO0FBQzlEOztBQUVBLE1BQUlvSixpQkFBSjtBQUNBLFdBQVFyUCxFQUFSLEVBQUF6UixNQUFNLEVBQUs0Z0IsS0FBTCxFQUFZM2tCLENBQUMsSUFBSTtBQUNyQixhQUFHbVYsd0JBQUgsRUFBQW5WLENBQUM7O0FBQ0QsUUFBSUQsS0FBSixFQUF1QixFQUd0Qjs7QUFDRCxRQUFJLENBQUM4a0IsaUJBQUwsRUFBd0I7QUFDdEI7QUFDQSxZQUFNamlCLElBQUksR0FBRyxTQUFHd1ksU0FBSCxFQUFBcGIsQ0FBQyxDQUFkO0FBQ0E2a0IsdUJBQWlCLEdBQUdqaUIsSUFBSSxDQUFDbVIsSUFBTCxJQUFhblIsSUFBakM7QUFDQSxVQUFJLENBQUNpaUIsaUJBQUwsRUFBd0IzUixNQUFNLENBQUNZLFFBQVAsQ0FBZ0JsUixJQUFoQjtBQUN6QixLQUxELE1BS087QUFDTDtBQUNBaWlCLHVCQUFpQixDQUFDOVEsSUFBbEIsR0FBeUIsU0FBR21ILGdCQUFILEVBQUFsYixDQUFDLENBQTFCO0FBQ0FrVCxZQUFNLENBQUNZLFFBQVAsQ0FBZ0IrUSxpQkFBaEI7QUFDQUEsdUJBQWlCLEdBQUcsSUFBcEI7QUFDRDtBQUNGLEdBakJLLEVBaUJILElBakJHLENBQU47O0FBa0JBM1IsUUFBTSxDQUFDcUIsSUFBUCxHQUFjLENBQUNoUixHQUFELEVBQU1YLElBQU4sRUFBWTtBQUFFK087QUFBRixNQUFjdUIsTUFBMUIsRUFBa0NhLElBQWxDLEtBQTJDO0FBQ3ZEO0FBQ0EsVUFBTStRLE9BQU8sR0FBRy9RLElBQUksSUFBSSxJQUFJb0ksY0FBSixDQUFtQnlJLE1BQW5CLEVBQTJCO0FBQUU3aUIsZUFBUyxFQUFFLElBQWI7QUFBbUJxYSxtQkFBYSxFQUFFckk7QUFBbEMsS0FBM0IsQ0FBeEI7QUFDQTJJLG1CQUFlLENBQUNrSSxNQUFELEVBQVM7QUFBRXJoQixTQUFGO0FBQU9YLFVBQVA7QUFBYStPLGFBQWI7QUFBc0JvQyxVQUFJLEVBQUUsQ0FBQyxDQUFDK1E7QUFBOUIsS0FBVCxFQUFrRHJKLFNBQWxELENBQWY7QUFDQSxRQUFJcUosT0FBSixFQUFhLFNBQVFuaUIsSUFBUixFQUFBb0IsTUFBTSxFQUFPK2dCLE9BQVAsQ0FBTjtBQUNkLEdBTEQ7QUFNRCxDQTVCTSxDIiwiZmlsZSI6ImluamVjdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7IF9fcHJvdG9fXzogbnVsbCB9OyAgICAgICAgICBmb3IgKGxldCBpID0gMCwgYywgc3RyID0gXCJjZG1ub3BydFwiOyBpIDwgc3RyLmxlbmd0aCAmJiAoYyA9IHN0cltpKytdKTspICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX3JlcXVpcmVfXywgYywgeyBfX3Byb3RvX186IG51bGwsIHZhbHVlOiB1bmRlZmluZWQsIHdyaXRhYmxlOiB0cnVlIH0pO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7IF9fcHJvdG9fXzogbnVsbCB9LCBfX3Byb3RvX186IG51bGxcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0c2FmZUNhbGwobW9kdWxlc1ttb2R1bGVJZF0sIG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0ZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge19fcHJvdG9fXzogbnVsbCwgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHJ1ZSkge1xuIFx0XHRcdGRlZmluZVByb3BlcnR5KGV4cG9ydHMsIHRvU3RyaW5nVGFnU3ltLCB7X19wcm90b19fOiBudWxsLCB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0ZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7X19wcm90b19fOiBudWxsLCB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IHsgX19wcm90b19fOiBudWxsIH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdGRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHtfX3Byb3RvX186IG51bGwsIGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IoY29uc3Qga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgKCkgPT4gdmFsdWVba2V5XSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIGtleSkgPT4gc2FmZUNhbGwoaGFzT3duUHJvcGVydHksIG9iaiwga2V5KTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luamVjdGVkL2luZGV4LmpzXCIpO1xuIiwiLy8gU2luY2UgdGhpcyBhbHNvIHJ1bnMgaW4gYSBjb250ZW50IHNjcmlwdCB3ZSdsbCBndWFyZCBhZ2FpbnN0IGltcGxpY2l0IGdsb2JhbCB2YXJpYWJsZXNcbi8vIGZvciBET00gZWxlbWVudHMgd2l0aCAnaWQnIGF0dHJpYnV0ZSB3aGljaCBpcyBhIHN0YW5kYXJkIGZlYXR1cmUsIG1vcmUgaW5mbzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9wdWxsLzE1M1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvd2luZG93LW9iamVjdC5odG1sI25hbWVkLWFjY2Vzcy1vbi10aGUtd2luZG93LW9iamVjdFxuaWYgKCFJU19GSVJFRk9YICYmICFnbG9iYWwuYnJvd3Nlcj8ucnVudGltZSkge1xuICAvLyByZWdpb24gQ2hyb21lXG4gIGNvbnN0IHsgY2hyb21lLCBQcm94eTogUHJveHlTYWZlIH0gPSBnbG9iYWw7XG4gIGNvbnN0IHsgYXBwbHksIGJpbmQgfSA9IFByb3h5U2FmZTtcbiAgY29uc3QgTUVTU0FHRSA9ICdtZXNzYWdlJztcbiAgY29uc3QgU1RBQ0sgPSAnc3RhY2snO1xuICBjb25zdCBpc1N5bmNNZXRob2ROYW1lID0ga2V5ID0+IGtleSA9PT0gJ2FkZExpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ2hhc0xpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ2hhc0xpc3RlbmVycyc7XG4gIC8qKiBBUEkgdHlwZXMgb3IgZW51bXMgb3IgbGl0ZXJhbCBjb25zdGFudHMgKi9cbiAgY29uc3QgaXNGdW5jdGlvbiA9IHZhbCA9PiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nO1xuICBjb25zdCBpc09iamVjdCA9IHZhbCA9PiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcbiAgY29uc3QgcHJveGlmeVZhbHVlID0gKHRhcmdldCwga2V5LCBzcmMsIG1ldGFWYWwpID0+IHtcbiAgICBjb25zdCBzcmNWYWwgPSBzcmNba2V5XTtcbiAgICBpZiAoc3JjVmFsID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBsZXQgcmVzO1xuICAgIGlmIChpc0Z1bmN0aW9uKG1ldGFWYWwpKSB7XG4gICAgICByZXMgPSBtZXRhVmFsKHNyYywgc3JjVmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oc3JjVmFsKSkge1xuICAgICAgcmVzID0gbWV0YVZhbCA9PT0gMCB8fCBpc1N5bmNNZXRob2ROYW1lKGtleSkgfHwgIXNyYzo6aGFzT3duUHJvcGVydHkoa2V5KVxuICAgICAgICA/IHNyY1ZhbDo6YmluZChzcmMpXG4gICAgICAgIDogd3JhcEFzeW5jKHNyYywgc3JjVmFsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3Qoc3JjVmFsKSAmJiBtZXRhVmFsICE9PSAwKSB7XG4gICAgICByZXMgPSBwcm94aWZ5R3JvdXAoc3JjVmFsLCBtZXRhVmFsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBzcmNWYWw7XG4gICAgfVxuICAgIHRhcmdldFtrZXldID0gcmVzO1xuICAgIHJldHVybiByZXM7XG4gIH07XG4gIGNvbnN0IHByb3hpZnlHcm91cCA9IChzcmMsIG1ldGEpID0+IG5ldyBQcm94eVNhZmUoe30sIHtcbiAgICBnZXQ6IChncm91cCwga2V5KSA9PiBncm91cFtrZXldID8/IHByb3hpZnlWYWx1ZShncm91cCwga2V5LCBzcmMsIG1ldGE/LltrZXldKSxcbiAgfSk7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyAtIG9yaWdpbmFsIEFQSSBncm91cFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIC0gb3JpZ2luYWwgQVBJIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7V3JhcEFzeW5jUHJlcHJvY2Vzc29yRnVuY30gW3ByZXByb2Nlc3NvckZ1bmNdIC0gbW9kaWZpZXMgdGhlIEFQSSBjYWxsYmFjaydzIHJlc3BvbnNlXG4gICAgKi9cbiAgY29uc3Qgd3JhcEFzeW5jID0gKHRoaXNBcmcsIGZ1bmMsIHByZXByb2Nlc3NvckZ1bmMpID0+IChcbiAgICAoLi4uYXJncykgPT4ge1xuICAgICAgbGV0IHJlc29sdmU7XG4gICAgICBsZXQgcmVqZWN0O1xuICAgICAgLyogVXNpbmcgcmVzb2x2ZS9yZWplY3QgdG8gY2FsbCBBUEkgaW4gdGhlIHNjb3BlIG9mIHRoaXMgZnVuY3Rpb24sIG5vdCBpbnNpZGUgUHJvbWlzZSxcbiAgICAgICAgIGJlY2F1c2UgYW4gQVBJIHZhbGlkYXRpb24gZXhjZXB0aW9uIGlzIHRocm93biBzeW5jaHJvbm91c2x5IGJvdGggaW4gQ2hyb21lIGFuZCBGRlxuICAgICAgICAgc28gdGhlIGNhbGxlciBjYW4gdXNlIHRyeS9jYXRjaCB0byBkZXRlY3QgaXQgbGlrZSB3ZSd2ZSBiZWVuIGRvaW5nIGluIGljb24uanMgKi9cbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZVNhZmUoKF9yZXNvbHZlLCBfcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZTtcbiAgICAgICAgcmVqZWN0ID0gX3JlamVjdDtcbiAgICAgIH0pO1xuICAgICAgLy8gTWFrZSB0aGUgZXJyb3IgbWVzc2FnZXMgYWN0dWFsbHkgdXNlZnVsIGJ5IGNhcHR1cmluZyBhIHJlYWwgc3RhY2tcbiAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IG5ldyBFcnJvclNhZmUoYGNhbGxzdGFjayBiZWZvcmUgaW52b2tpbmcgJHtmdW5jLm5hbWUgfHwgJ2Nocm9tZSBBUEknfTpgKTtcbiAgICAgIC8vIEEgc2luZ2xlIHBhcmFtZXRlciBgcmVzdWx0YCBpcyBmaW5lIGJlY2F1c2Ugd2UgZG9uJ3QgdXNlIEFQSSB0aGF0IHJldHVybiBtb3JlXG4gICAgICBhcmdzW2FyZ3MubGVuZ3RoXSA9IHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bnRpbWVFcnIgPSBjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XG4gICAgICAgIGNvbnN0IGVyciA9IHJ1bnRpbWVFcnIgfHwgKFxuICAgICAgICAgIHByZXByb2Nlc3NvckZ1bmNcbiAgICAgICAgICAgID8gcHJlcHJvY2Vzc29yRnVuYyhyZXNvbHZlLCByZXN1bHQpXG4gICAgICAgICAgICA6IHJlc29sdmUocmVzdWx0KVxuICAgICAgICApO1xuICAgICAgICAvLyBQcmVmZXIgYHJlamVjdGAgb3ZlciBgdGhyb3dgIHdoaWNoIHN0b3BzIGRlYnVnZ2VyIGluICdwYXVzZSBvbiBleGNlcHRpb25zJyBtb2RlXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBpZiAoIXJ1bnRpbWVFcnIpIHN0YWNrSW5mb1tTVEFDS10gPSBgJHtlcnJbMV19XFxuJHtzdGFja0luZm9bU1RBQ0tdfWA7XG4gICAgICAgICAgc3RhY2tJbmZvW01FU1NBR0VdID0gcnVudGltZUVyciA/IGVycltNRVNTQUdFXSA6IGAke2VyclswXX1gO1xuICAgICAgICAgIHN0YWNrSW5mby5pc1J1bnRpbWUgPSAhIXJ1bnRpbWVFcnI7XG4gICAgICAgICAgcmVqZWN0KHN0YWNrSW5mbyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuSVNfSU5KRUNURUQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmdW5jOjphcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmIChlW01FU1NBR0VdID09PSAnRXh0ZW5zaW9uIGNvbnRleHQgaW52YWxpZGF0ZWQuJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHJlbG9hZCB0aGUgdGFiIHRvIHJlc3RvcmUgVmlvbGVudG1vbmtleSBBUEkgZm9yIHVzZXJzY3JpcHRzLicpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVuYzo6YXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHByb21pc2UuY2F0Y2goZXJyID0+IGNvbnNvbGUud2FybihhcmdzLCBlcnI/LltNRVNTQUdFXSB8fCBlcnIpKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgKTtcbiAgLy8gQm90aCByZXN1bHQgYW5kIGVycm9yIG11c3QgYmUgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYXZvaWQgcHJvdG90eXBlIGVhdmVzZHJvcHBpbmdcbiAgY29uc3Qgd3JhcFN1Y2Nlc3MgPSByZXN1bHQgPT4gW1xuICAgIHJlc3VsdCxcbiAgICBudWxsLFxuICBdO1xuICAvLyBCb3RoIHJlc3VsdCBhbmQgZXJyb3IgbXVzdCBiZSBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBhdm9pZCBwcm90b3R5cGUgZWF2ZXNkcm9wcGluZ1xuICBjb25zdCB3cmFwRXJyb3IgPSBlcnIgPT4gcHJvY2Vzcy5lbnYuREVCVUcgJiYgY29uc29sZS53YXJuKGVycikgfHwgW1xuICAgIG51bGwsXG4gICAgZXJyIGluc3RhbmNlb2YgRXJyb3JTYWZlXG4gICAgICA/IFtlcnJbTUVTU0FHRV0sIGVycltTVEFDS11dXG4gICAgICA6IFtlcnIsICcnXSxcbiAgXTtcbiAgY29uc3Qgc2VuZFJlc3BvbnNlQXN5bmMgPSBhc3luYyAocmVzdWx0LCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0O1xuICAgICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSBjb25zb2xlLmluZm8oJ3NlbmQnLCByZXN1bHQpO1xuICAgICAgc2VuZFJlc3BvbnNlKHdyYXBTdWNjZXNzKHJlc3VsdCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2VuZFJlc3BvbnNlKHdyYXBFcnJvcihlcnIpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uTWVzc2FnZUxpc3RlbmVyID0gKGxpc3RlbmVyLCBtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5pbmZvKCdyZWNlaXZlJywgbWVzc2FnZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlcik7XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdDo6b2JqZWN0VG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nKSB7XG4gICAgICAgIHNlbmRSZXNwb25zZUFzeW5jKHJlc3VsdCwgc2VuZFJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvLyBJbiBzb21lIGJyb3dzZXJzIChlLmcgQ2hyb21lIDU2LCBWaXZhbGRpKSwgdGhlIGxpc3RlbmVyIGluXG4gICAgICAvLyBwb3B1cCBwYWdlcyBhcmUgbm90IHByb3Blcmx5IGNsZWFyZWQgYWZ0ZXIgY2xvc2VkLlxuICAgICAgLy8gVGhleSBtYXkgc2VuZCBgdW5kZWZpbmVkYCBiZWZvcmUgdGhlIHJlYWwgcmVzcG9uc2UgaXMgc2VudC5cbiAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZW5kUmVzcG9uc2Uod3JhcFN1Y2Nlc3MocmVzdWx0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZW5kUmVzcG9uc2Uod3JhcEVycm9yKGVycikpO1xuICAgIH1cbiAgfTtcbiAgLyoqIEB0eXBlIHtXcmFwQXN5bmNQcmVwcm9jZXNzb3JGdW5jfSAqL1xuICBjb25zdCB1bndyYXBSZXNwb25zZSA9IChyZXNvbHZlLCByZXNwb25zZSkgPT4gKFxuICAgICFyZXNwb25zZSAmJiAnbnVsbCByZXNwb25zZSdcbiAgICB8fCByZXNwb25zZVsxXSAvLyBlcnJvciBjcmVhdGVkIGluIHdyYXBFcnJvclxuICAgIHx8IHJlc29sdmUocmVzcG9uc2VbMF0pIC8vIHJlc3VsdCBjcmVhdGVkIGluIHdyYXBTdWNjZXNzXG4gICk7XG4gIGNvbnN0IHdyYXBTZW5kTWVzc2FnZSA9IChydW50aW1lLCBzZW5kTWVzc2FnZSkgPT4gKFxuICAgIHdyYXBBc3luYyhydW50aW1lLCBzZW5kTWVzc2FnZSwgdW53cmFwUmVzcG9uc2UpXG4gICk7XG4gIC8qKlxuICAgKiAwID0gbm9uLWFzeW5jIG1ldGhvZCBvciB0aGUgZW50aXJlIGdyb3VwXG4gICAqIGZ1bmN0aW9uID0gdHJhbnNmb3JtZXIgbGlrZSAob3JpZ2luYWxPYmosIG9yaWdpbmFsRnVuYyk6IGZ1bmN0aW9uXG4gICAqL1xuICBnbG9iYWwuYnJvd3NlciA9IHByb3hpZnlHcm91cChjaHJvbWUsIHtcbiAgICBleHRlbnNpb246IDAsIC8vIHdlIGRvbid0IHVzZSBpdHMgYXN5bmMgbWV0aG9kc1xuICAgIGkxOG46IDAsIC8vIHdlIGRvbid0IHVzZSBpdHMgYXN5bmMgbWV0aG9kc1xuICAgIHJ1bnRpbWU6IHtcbiAgICAgIGNvbm5lY3Q6IDAsXG4gICAgICBnZXRNYW5pZmVzdDogMCxcbiAgICAgIGdldFVSTDogMCxcbiAgICAgIG9uTWVzc2FnZToge1xuICAgICAgICBhZGRMaXN0ZW5lcjogKG9uTWVzc2FnZSwgYWRkTGlzdGVuZXIpID0+IChcbiAgICAgICAgICBsaXN0ZW5lciA9PiBvbk1lc3NhZ2U6OmFkZExpc3RlbmVyKG9uTWVzc2FnZUxpc3RlbmVyOjpiaW5kKG51bGwsIGxpc3RlbmVyKSlcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBzZW5kTWVzc2FnZTogd3JhcFNlbmRNZXNzYWdlLFxuICAgIH0sXG4gICAgdGFiczoge1xuICAgICAgY29ubmVjdDogMCxcbiAgICAgIHNlbmRNZXNzYWdlOiB3cmFwU2VuZE1lc3NhZ2UsXG4gICAgfSxcbiAgfSk7XG4gIC8vIGVuZHJlZ2lvblxufSBlbHNlIGlmIChwcm9jZXNzLmVudi5ERUJVRyAmJiBJU19GSVJFRk9YKSB7XG4gIC8vIHJlZ2lvbiBGaXJlZm94XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovLy8gdGhpcyBpcyBhIGRlYnVnLW9ubHkgc2VjdGlvblxuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IHsgcnVudGltZSB9ID0gZ2xvYmFsLmJyb3dzZXI7XG4gIGNvbnN0IHsgc2VuZE1lc3NhZ2UsIG9uTWVzc2FnZSB9ID0gcnVudGltZTtcbiAgY29uc3QgbG9nID0gKHR5cGUsIGFyZ3MsIGlkLCBpc1Jlc3BvbnNlKSA9PiBjb25zb2xlLmluZm8oXG4gICAgYCR7dHlwZX1NZXNzYWdlIyVkJHtpc1Jlc3BvbnNlID8gJyByZXNwb25zZScgOiAnJ31gLFxuICAgIGlkLFxuICAgIC4uLmFyZ3MsXG4gICk7XG4gIHJ1bnRpbWUuc2VuZE1lc3NhZ2UgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgICBjb25zdCBpZCA9IGNvdW50ZXI7XG4gICAgbG9nKCdzZW5kJywgYXJncywgaWQpO1xuICAgIGNvbnN0IHByb21pc2UgPSBydW50aW1lOjpzZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICBwcm9taXNlLnRoZW4oZGF0YSA9PiBsb2coJ3NlbmQnLCBbZGF0YV0sIGlkLCB0cnVlKSwgY29uc29sZS53YXJuKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcbiAgY29uc3QgeyBhZGRMaXN0ZW5lciB9ID0gb25NZXNzYWdlO1xuICBvbk1lc3NhZ2UuYWRkTGlzdGVuZXIgPSAobGlzdGVuZXIpID0+IG9uTWVzc2FnZTo6YWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyKSA9PiB7XG4gICAgY291bnRlciArPSAxO1xuICAgIGNvbnN0IGlkID0gY291bnRlcjtcbiAgICBjb25zdCB7IGZyYW1lSWQsIHRhYiwgdXJsIH0gPSBzZW5kZXI7XG4gICAgbG9nKCdvbicsIFttc2csIHsgZnJhbWVJZCwgdGFiLCB1cmwgfV0sIGlkKTtcbiAgICBjb25zdCByZXN1bHQgPSBsaXN0ZW5lcihtc2csIHNlbmRlcik7XG4gICAgKHR5cGVvZiByZXN1bHQ/LnRoZW4gPT09ICdmdW5jdGlvbicgPyByZXN1bHQgOiBQcm9taXNlU2FmZS5yZXNvbHZlKHJlc3VsdCkpXG4gICAgLnRoZW4oZGF0YSA9PiBsb2coJ29uJywgW2RhdGFdLCBpZCwgdHJ1ZSksIGNvbnNvbGUud2Fybik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbiAgLy8gZW5kcmVnaW9uXG59XG5cbi8qKlxuICogQGNhbGxiYWNrIFdyYXBBc3luY1ByZXByb2Nlc3NvckZ1bmNcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oYW55KX0gcmVzb2x2ZSAtIGNhbGxlZCBvbiBzdWNjZXNzXG4gKiBAcGFyYW0ge2FueX0gcmVzcG9uc2UgLSBBUEkgY2FsbGJhY2sncyByZXNwb25zZVxuICogQHJldHVybnMgez9zdHJpbmdbXX0gLSBbZXJyb3JNZXNzYWdlLCBlcnJvclN0YWNrXSBhcnJheSBvbiBlcnJvclxuICovXG4iLCIvLyBTQUZFVFkgV0FSTklORyEgRXhwb3J0cyB1c2VkIGJ5IGBpbmplY3RlZGAgbXVzdCBtYWtlIDo6c2FmZSgpIGNhbGxzIGFuZCB1c2UgX19wcm90b19fOm51bGxcblxuLy8gZm9yIGdsb2JhbCBldmVudCBidXMgYW5kIHNhdmUgc29tZSBidWlsZCBpbiBpbmZvXG5leHBvcnQgY29uc3QgSVNfREVWID0gZmFsc2U7XG5leHBvcnQgY29uc3QgS0VZX0dMT0JBTF9JRCA9ICdfR0xPQkFMX0lEXyc7XG5leHBvcnQgY29uc3QgQlVJTERfSU5fU0NSSVBUX1NSQyA9ICdodHRwczovL21pcmEtMTI1NTgzMDk5My5jb3MuYXAtc2hhbmdoYWkubXlxY2xvdWQuY29tL2xhYi9wbHVnaW4vYmFzZS51c2VyLmpzJztcblxuZXhwb3J0IGNvbnN0IElOSkVDVF9BVVRPID0gJ2F1dG8nO1xuZXhwb3J0IGNvbnN0IElOSkVDVF9QQUdFID0gJ3BhZ2UnO1xuZXhwb3J0IGNvbnN0IElOSkVDVF9DT05URU5UID0gJ2NvbnRlbnQnO1xuXG5leHBvcnQgY29uc3QgSU5KRUNUX01BUFBJTkcgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgLy8gYGF1dG9gIHRyaWVzIHRvIHByb3ZpZGUgYHdpbmRvd2AgZnJvbSB0aGUgcmVhbCBwYWdlIGFzIGB1bnNhZmVXaW5kb3dgXG4gIFtJTkpFQ1RfQVVUT106IFtJTkpFQ1RfUEFHRSwgSU5KRUNUX0NPTlRFTlRdLFxuICAvLyBpbmplY3QgaW50byBwYWdlIGNvbnRleHRcbiAgW0lOSkVDVF9QQUdFXTogW0lOSkVDVF9QQUdFXSxcbiAgLy8gaW5qZWN0IGludG8gY29udGVudCBjb250ZXh0IG9ubHlcbiAgW0lOSkVDVF9DT05URU5UXTogW0lOSkVDVF9DT05URU5UXSxcbn07XG5cbmV4cG9ydCBjb25zdCBDTURfU0NSSVBUX0FERCA9ICdBZGRTY3JpcHQnO1xuZXhwb3J0IGNvbnN0IENNRF9TQ1JJUFRfVVBEQVRFID0gJ1VwZGF0ZVNjcmlwdCc7XG5cbi8vIEFsbG93IG1ldGFkYXRhIGxpbmVzIHRvIHN0YXJ0IHdpdGggV0hJVEVTUEFDRT8gJy8vJyBTUEFDRVxuLy8gQWxsb3cgYW55dGhpbmcgdG8gZm9sbG93IHRoZSBwcmVkZWZpbmVkIHRleHQgb2YgdGhlIG1ldGFTdGFydC9FbmRcbi8vIFRoZSBTUEFDRSBtdXN0IGJlIG9uIHRoZSBzYW1lIGxpbmUgYW5kIHNwZWNpZmljYWxseSBcXHgyMCBhcyBcXHMgd291bGQgYWxzbyBtYXRjaCBcXHJcXG5cXHRcbi8vIE5vdGU6IHdoZW4gdGhlcmUncyBubyB2YWxpZCBtZXRhYmxvY2ssIGFuIGVtcHR5IHN0cmluZyBpcyBtYXRjaGVkIGZvciBjb252ZW5pZW5jZVxuZXhwb3J0IGNvbnN0IE1FVEFCTE9DS19SRSA9IC8oPzpefFxcbilcXHMqXFwvXFwvXFx4MjA9PVVzZXJTY3JpcHQ9PShbXFxzXFxTXSo/XFxuKVxccypcXC9cXC9cXHgyMD09XFwvVXNlclNjcmlwdD09fCQvO1xuXG5leHBvcnQgY29uc3QgSU5KRUNUQUJMRV9UQUJfVVJMX1JFID0gL14oaHR0cHM/fGZpbGV8ZnRwcz8pOi87XG5cbi8vIGBicm93c2VyYCBpcyBhIGxvY2FsIHZhcmlhYmxlIHNpbmNlIHdlIHJlbW92ZSB0aGUgZ2xvYmFsIGBjaHJvbWVgIGFuZCBgYnJvd3NlcmAgaW4gaW5qZWN0ZWQqXG4vLyB0byBwcmV2ZW50IGV4cG9zaW5nIHRoZW0gdG8gdXNlcnNjcmlwdHMgd2l0aCBgQGluamVjdC1pbnRvIGNvbnRlbnRgXG5leHBvcnQgY29uc3QgeyBicm93c2VyIH0gPSBnbG9iYWw7XG5cbi8vIHNldFRpbWVvdXQgdHJ1bmNhdGVzIHRoZSBkZWxheSB0byBhIDMyLWJpdCBzaWduZWQgaW50ZWdlciBzbyB0aGUgbWF4IGRlbGF5IGlzIH4yNCBkYXlzXG5leHBvcnQgY29uc3QgVElNRU9VVF9NQVggPSAweDdGRkZfRkZGRjtcbmV4cG9ydCBjb25zdCBUSU1FT1VUX0hPVVIgPSA2MCAqIDYwICogMTAwMDtcbmV4cG9ydCBjb25zdCBUSU1FT1VUXzI0SE9VUlMgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuZXhwb3J0IGNvbnN0IFRJTUVPVVRfV0VFSyA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuIiwiLy8gU0FGRVRZIFdBUk5JTkchIEV4cG9ydHMgdXNlZCBieSBgaW5qZWN0ZWRgIG11c3QgbWFrZSA6OnNhZmUoKSBjYWxscyBhbmQgdXNlIF9fcHJvdG9fXzpudWxsXG5cbmltcG9ydCB7IGJyb3dzZXIgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICcuL29iamVjdCc7XG5pbXBvcnQgeyBpMThuLCBub29wIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IHsgbm9ybWFsaXplS2V5cyB9IGZyb20gJy4vb2JqZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0SW1hZ2UgPSAnL3B1YmxpYy9pbWFnZXMvaWNvbjEyOC5wbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEhvb2tzKCkge1xuICBjb25zdCBob29rcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGZpcmUoZGF0YSkge1xuICAgIGhvb2tzLnNsaWNlKCkuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgIGNiKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaG9vayhjYWxsYmFjaykge1xuICAgIGhvb2tzLnB1c2goY2FsbGJhY2spO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBpID0gaG9va3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaSA+PSAwKSBob29rcy5zcGxpY2UoaSwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7IGhvb2ssIGZpcmUgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGBpbmplY3RlZGBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbWRcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcGFyYW0ge3tyZXRyeT86IGJvb2xlYW4sIGlnbm9yZUVycm9yPzogYm9vbGVhbn19IFtvcHRpb25zXVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDbWQoY21kLCBkYXRhLCBvcHRpb25zKSB7XG4gIHJldHVybiBzZW5kTWVzc2FnZSh7IGNtZCwgZGF0YSB9LCBvcHRpb25zKTtcbn1cblxuLy8gVGhlc2UgbmVlZCBgc3JjYCBwYXJhbWV0ZXIgc28gd2UnbGwgdXNlIHNlbmRDbWQgZm9yIHRoZW0uIFdlIGNvdWxkIGhhdmUgZm9yZ2VkIGBzcmNgIHZpYVxuLy8gYnJvd3Nlci50YWJzLmdldEN1cnJlbnQgYnV0IHRoZXJlJ3Mgbm8gbmVlZCBhcyB0aGV5IG5vcm1hbGx5IHVzZSBvbmx5IGEgdGlueSBhbW91bnQgb2YgZGF0YS5cbmNvbnN0IENPTU1BTkRTX1dJVEhfU1JDID0gW1xuICAnQ29uZmlybUluc3RhbGwnLFxuICAnTm90aWZpY2F0aW9uJyxcbiAgJ1RhYkNsb3NlJyxcbiAgJ1RhYkZvY3VzJyxcbiAgJ1RhYk9wZW4nLFxuICAnVXBkYXRlVmFsdWUnLFxuLypcbiAgVGhlc2UgYXJlIHVzZWQgb25seSBieSBjb250ZW50IHNjcmlwdHMgd2hlcmUgc2VuZENtZERpcmVjdGx5IGNhbid0IGJlIHVzZWQgYW55d2F5XG4gICdHZXRJbmplY3RlZCcsXG4gICdHZXRSZXF1ZXN0SWQnLFxuICAnSHR0cFJlcXVlc3QnLFxuICAnSW5qZWN0aW9uRmVlZGJhY2snLFxuICAnU2V0UG9wdXAnLFxuKi9cbl07XG5jb25zdCBnZXRCZ1BhZ2UgPSAoKSA9PiBicm93c2VyLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZT8uKCk7XG5cbi8qKlxuICogU2VuZHMgdGhlIGNvbW1hbmQrZGF0YSBkaXJlY3RseSBzbyBpdCdzIHN5bmNocm9ub3VzIGFuZCBmYXN0ZXIgdGhhbiBzZW5kQ21kIHRoYW5rcyB0byBkZWVwQ29weS5cbiAqIFdBUk5JTkchIE1ha2Ugc3VyZSBgY21kYCBoYW5kbGVyIGRvZXNuJ3QgdXNlIGBzcmNgIG9yIGBjbWRgIGlzIGxpc3RlZCBpbiBDT01NQU5EU19XSVRIX1NSQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDbWREaXJlY3RseShjbWQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgY29uc3QgYmcgPSAhQ09NTUFORFNfV0lUSF9TUkMuaW5jbHVkZXMoY21kKSAmJiBnZXRCZ1BhZ2UoKTtcbiAgcmV0dXJuIGJnICYmIGJnICE9PSB3aW5kb3cgJiYgYmcuZGVlcENvcHlcbiAgICA/IGJnLmhhbmRsZUNvbW1hbmRNZXNzYWdlKGJnLmRlZXBDb3B5KHsgY21kLCBkYXRhIH0pKS50aGVuKGRlZXBDb3B5KVxuICAgIDogc2VuZENtZChjbWQsIGRhdGEsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJJZFxuICogQHBhcmFtIHtzdHJpbmd9IGNtZFxuICogQHBhcmFtIGRhdGFcbiAqIEBwYXJhbSB7e2ZyYW1lSWQ/OiBudW1iZXJ9fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kVGFiQ21kKHRhYklkLCBjbWQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgeyBjbWQsIGRhdGEgfSwgb3B0aW9ucykuY2F0Y2gobm9vcCk7XG59XG5cbi8vIFVzZWQgYnkgYGluamVjdGVkYFxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlKHBheWxvYWQsIHsgcmV0cnkgfSA9IHt9KSB7XG4gIGlmIChyZXRyeSkgcmV0dXJuIHNlbmRNZXNzYWdlUmV0cnkocGF5bG9hZCk7XG4gIGxldCBwcm9taXNlID0gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHBheWxvYWQpO1xuICAvLyBJZ25vcmluZyBlcnJvcnMgd2hlbiBzZW5kaW5nIGZyb20gdGhlIGJhY2tncm91bmQgc2NyaXB0IGJlY2F1c2UgaXQncyBhIGJyb2FkY2FzdFxuICBpZiAoIXByb2Nlc3MuZW52LklTX0lOSkVDVEVEICYmIHdpbmRvdyA9PT0gZ2V0QmdQYWdlKCkpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS5jYXRjaChub29wKTtcbiAgfVxuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGBpbmplY3RlZGBcbiAqIFRoZSBhY3RpdmUgdGFiIHBhZ2UgYW5kIGl0cyBbY29udGVudF0gc2NyaXB0cyBsb2FkIGJlZm9yZSB0aGUgZXh0ZW5zaW9uJ3NcbiAqIHBlcnNpc3RlbnQgYmFja2dyb3VuZCBzY3JpcHQgd2hlbiBDaHJvbWUgc3RhcnRzIHdpdGggYSBVUkwgdmlhIGNvbW1hbmQgbGluZVxuICogb3Igd2hlbiBjb25maWd1cmVkIHRvIHJlc3RvcmUgdGhlIHNlc3Npb24sIGh0dHBzOi8vY3JidWcuY29tLzMxNDY4NlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2VSZXRyeShwYXlsb2FkLCByZXRyaWVzID0gMTApIHtcbiAgbGV0IHBhdXNlRHVyYXRpb24gPSAxMDtcbiAgZm9yICg7IHJldHJpZXMgPiAwOyByZXRyaWVzIC09IDEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlbmRNZXNzYWdlKHBheWxvYWQpO1xuICAgICAgaWYgKGRhdGEpIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghYCR7ZX1gLmluY2x1ZGVzKCdDb3VsZCBub3QgZXN0YWJsaXNoIGNvbm5lY3Rpb24uJykpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgbWFrZVBhdXNlKHBhdXNlRHVyYXRpb24pO1xuICAgIHBhdXNlRHVyYXRpb24gKj0gMjtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ1Zpb2xlbnRtb25rZXkgY2Fubm90IGNvbm5lY3QgdG8gdGhlIGJhY2tncm91bmQgcGFnZS4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRwYWQoaW5wdXQsIGxlbmd0aCwgcGFkID0gJzAnKSB7XG4gIGxldCBudW0gPSBpbnB1dC50b1N0cmluZygpO1xuICB3aGlsZSAobnVtLmxlbmd0aCA8IGxlbmd0aCkgbnVtID0gYCR7cGFkfSR7bnVtfWA7XG4gIHJldHVybiBudW07XG59XG5cbi8qKlxuICogR2V0IGxvY2FsZSBhdHRyaWJ1dGVzIHN1Y2ggYXMgYEBuYW1lOnpoLUNOYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlU3RyaW5nKG1ldGEsIGtleSkge1xuICBjb25zdCBsb2NhbGVNZXRhID0gbmF2aWdhdG9yLmxhbmd1YWdlc1xuICAvLyBVc2UgYGxhbmcudG9Mb3dlckNhc2UoKWAgc2luY2UgdjIuNi41XG4gIC5tYXAobGFuZyA9PiBtZXRhW2Ake2tleX06JHtsYW5nfWBdIHx8IG1ldGFbYCR7a2V5fToke2xhbmcudG9Mb3dlckNhc2UoKX1gXSlcbiAgLmZpbmQoQm9vbGVhbik7XG4gIHJldHVybiBsb2NhbGVNZXRhIHx8IG1ldGFba2V5XSB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmlwdE5hbWUoc2NyaXB0KSB7XG4gIHJldHVybiBzY3JpcHQuY3VzdG9tLm5hbWUgfHwgZ2V0TG9jYWxlU3RyaW5nKHNjcmlwdC5tZXRhLCAnbmFtZScpXG4gICAgfHwgYCMke3NjcmlwdC5wcm9wcy5pZCA/PyBpMThuKCdsYWJlbE5vTmFtZScpfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdWxsVXJsKHVybCwgYmFzZSkge1xuICBjb25zdCBvYmogPSBuZXcgVVJMKHVybCwgYmFzZSk7XG4gIC8vIFVzZSBwcm90b2NvbCB3aGl0ZWxpc3QgdG8gZmlsdGVyIFVSTHNcbiAgaWYgKCFbXG4gICAgJ2h0dHA6JyxcbiAgICAnaHR0cHM6JyxcbiAgICAnZnRwOicsXG4gICAgJ2RhdGE6JyxcbiAgXS5pbmNsdWRlcyhvYmoucHJvdG9jb2wpKSBvYmoucHJvdG9jb2wgPSAnaHR0cDonO1xuICByZXR1cm4gb2JqLmhyZWY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVGaWxlbmFtZShuYW1lKSB7XG4gIC8vIGBlc2NhcGVgIGdlbmVyYXRlZCBVUkkgaGFzICUgaW4gaXRcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvWy1cXFxcLzoqP1wiPD58JVxcc10vZywgKG0pID0+IHtcbiAgICBsZXQgY29kZSA9IG0uY2hhckNvZGVBdCgwKS50b1N0cmluZygxNik7XG4gICAgaWYgKGNvZGUubGVuZ3RoIDwgMikgY29kZSA9IGAwJHtjb2RlfWA7XG4gICAgcmV0dXJuIGAtJHtjb2RlfWA7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlRmlsZW5hbWUoZmlsZW5hbWUpIHtcbiAgcmV0dXJuIGZpbGVuYW1lLnJlcGxhY2UoLy0oWzAtOWEtZl17Mn0pL2csIChfbSwgZykgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChnLCAxNikpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjdGl2ZVRhYigpIHtcbiAgcmV0dXJuIChcbiAgICBhd2FpdCBicm93c2VyLnRhYnMucXVlcnkoe1xuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgY3VycmVudFdpbmRvdzogdHJ1ZSxcbiAgICB9KVxuICApWzBdIHx8IChcbiAgICAvLyBDaHJvbWUgYnVnIHdvcmthcm91bmQgd2hlbiBhbiB1bmRvY2tlZCBkZXZ0b29scyB3aW5kb3cgaXMgZm9jdXNlZFxuICAgIGF3YWl0IGJyb3dzZXIudGFicy5xdWVyeSh7XG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICB3aW5kb3dJZDogKGF3YWl0IGJyb3dzZXIud2luZG93cy5nZXRDdXJyZW50KCkpLmlkLFxuICAgIH0pXG4gIClbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUGF1c2UobXMpIHtcbiAgcmV0dXJuIG1zIDwgMFxuICAgID8gUHJvbWlzZS5yZXNvbHZlKClcbiAgICA6IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJ1ZUpvaW4oc2VwYXJhdG9yKSB7XG4gIHJldHVybiB0aGlzLmZpbHRlcihCb29sZWFuKS5qb2luKHNlcGFyYXRvcik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplS2V5cyhrZXkpIHtcbiAgaWYgKGtleSA9PSBudWxsKSByZXR1cm4gW107XG4gIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHJldHVybiBrZXk7XG4gIHJldHVybiBgJHtrZXl9YC5zcGxpdCgnLicpLmZpbHRlcihCb29sZWFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEdldChvYmosIHJhd0tleSwgZGVmKSB7XG4gIGNvbnN0IGtleXMgPSBub3JtYWxpemVLZXlzKHJhd0tleSk7XG4gIGxldCByZXMgPSBvYmo7XG4gIGtleXMuZXZlcnkoKGtleSkgPT4ge1xuICAgIGlmIChyZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgKGtleSBpbiByZXMpKSB7XG4gICAgICByZXMgPSByZXNba2V5XTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXMgPSBkZWY7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFNldChvYmosIHJhd0tleSwgdmFsKSB7XG4gIGNvbnN0IGtleXMgPSBub3JtYWxpemVLZXlzKHJhd0tleSk7XG4gIGlmICgha2V5cy5sZW5ndGgpIHJldHVybiB2YWw7XG4gIGNvbnN0IHJvb3QgPSBvYmogfHwge307XG4gIGxldCBzdWIgPSByb290O1xuICBjb25zdCBsYXN0S2V5ID0ga2V5cy5wb3AoKTtcbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBzdWIgPSBzdWJba2V5XSB8fCAoc3ViW2tleV0gPSB7fSk7XG4gIH0pO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkZWxldGUgc3ViW2xhc3RLZXldO1xuICB9IGVsc2Uge1xuICAgIHN1YltsYXN0S2V5XSA9IHZhbDtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3t9fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7ZnVuY3Rpb24odmFsdWUsa2V5KTo/fSBbdHJhbnNmb3JtXVxuICogQHJldHVybnMge3t9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0UGljayhvYmosIGtleXMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoKHJlcywga2V5KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gb2JqPy5ba2V5XTtcbiAgICBpZiAodHJhbnNmb3JtKSB2YWx1ZSA9IHRyYW5zZm9ybSh2YWx1ZSwga2V5KTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkgcmVzW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gcmVzO1xuICB9LCB7fSk7XG59XG5cbi8vIGludm9rZWQgYXMgb2JqOjptYXBFbnRyeSgoW2tleSwgdmFsdWVdLCBpLCBhbGxFbnRyaWVzKSA9PiB0cmFuc2Zvcm1lZFZhbHVlKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcEVudHJ5KGZ1bmMpIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMpLnJlZHVjZSgocmVzLCBlbnRyeSwgaSwgYWxsRW50cmllcykgPT4ge1xuICAgIHJlc1tlbnRyeVswXV0gPSBmdW5jKGVudHJ5LCBpLCBhbGxFbnRyaWVzKTtcbiAgICByZXR1cm4gcmVzO1xuICB9LCB7fSk7XG59XG5cbi8vIGludm9rZWQgYXMgb2JqOjpmb3JFYWNoRW50cnkoKFtrZXksIHZhbHVlXSwgaSwgYWxsRW50cmllcykgPT4ge30pXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaEVudHJ5KGZ1bmMpIHtcbiAgaWYgKHRoaXMpIE9iamVjdC5lbnRyaWVzKHRoaXMpLmZvckVhY2goZnVuYyk7XG59XG5cbi8vIGludm9rZWQgYXMgb2JqOjpmb3JFYWNoS2V5KGtleSA9PiB7fSwgaSwgYWxsS2V5cylcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoS2V5KGZ1bmMpIHtcbiAgaWYgKHRoaXMpIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goZnVuYyk7XG59XG5cbi8vIGludm9rZWQgYXMgb2JqOjpmb3JFYWNoVmFsdWUodmFsdWUgPT4ge30sIGksIGFsbFZhbHVlcylcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoVmFsdWUoZnVuYykge1xuICBpZiAodGhpcykgT2JqZWN0LnZhbHVlcyh0aGlzKS5mb3JFYWNoKGZ1bmMpO1xufVxuXG4vLyBOZWVkZWQgZm9yIEZpcmVmb3gncyBicm93c2VyLnN0b3JhZ2UgQVBJIHdoaWNoIGZhaWxzIG9uIFZ1ZSBvYnNlcnZhYmxlc1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5KHNyYykge1xuICByZXR1cm4gc3JjICYmIChcbiAgICBBcnJheS5pc0FycmF5KHNyYykgJiYgc3JjLm1hcChkZWVwQ29weSlcbiAgICAvLyBVc2VkIGluIHNhZmUgY29udGV4dFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIHx8IHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIHNyYzo6bWFwRW50cnkoKFssIHZhbF0pID0+IGRlZXBDb3B5KHZhbCkpXG4gICkgfHwgc3JjO1xufVxuXG4vLyBTaW1wbGlmaWVkIGRlZXAgZXF1YWxpdHkgY2hlY2tlclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XG4gIGxldCByZXM7XG4gIGlmICghYSB8fCAhYiB8fCB0eXBlb2YgYSAhPT0gdHlwZW9mIGIgfHwgdHlwZW9mIGEgIT09ICdvYmplY3QnKSB7XG4gICAgcmVzID0gYSA9PT0gYjtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgcmVzID0gYS5sZW5ndGggPT09IGIubGVuZ3RoXG4gICAgICAmJiBhLmV2ZXJ5KChpdGVtLCBpKSA9PiBkZWVwRXF1YWwoaXRlbSwgYltpXSkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMoYSk7XG4gICAgY29uc3Qga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcbiAgICByZXMgPSBrZXlzQS5sZW5ndGggPT09IGtleXNCLmxlbmd0aFxuICAgICAgJiYga2V5c0EuZXZlcnkoa2V5ID0+IGtleXNCLmluY2x1ZGVzKGtleSkgJiYgZGVlcEVxdWFsKGFba2V5XSwgYltrZXldKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cbiIsIi8vIFNBRkVUWSBXQVJOSU5HISBFeHBvcnRzIHVzZWQgYnkgYGluamVjdGVkYCBtdXN0IG1ha2UgOjpzYWZlKCkgY2FsbHMgYW5kIHVzZSBfX3Byb3RvX186bnVsbFxuXG5pbXBvcnQgeyBicm93c2VyIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGkxOG4obmFtZSwgYXJncykge1xuICByZXR1cm4gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobmFtZSwgYXJncykgfHwgbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nKHBhcmFtKSB7XG4gIGlmIChwYXJhbSA9PSBudWxsKSByZXR1cm4gJyc7XG4gIHJldHVybiBgJHtwYXJhbX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlciA9IHRvU3RyaW5nKSB7XG4gIGNvbnN0IGNhY2hlTWFwID0ge307XG4gIGZ1bmN0aW9uIG1lbW9pemVkKC4uLmFyZ3MpIHtcbiAgICAvLyBVc2VkIGluIHNhZmUgY29udGV4dFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIGNvbnN0IGtleSA9IHJlc29sdmVyKC4uLmFyZ3MpO1xuICAgIGxldCBjYWNoZSA9IGNhY2hlTWFwW2tleV07XG4gICAgaWYgKCFjYWNoZSkge1xuICAgICAgY2FjaGUgPSB7XG4gICAgICAgIHZhbHVlOiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpLFxuICAgICAgfTtcbiAgICAgIGNhY2hlTWFwW2tleV0gPSBjYWNoZTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlLnZhbHVlO1xuICB9XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHRpbWUpIHtcbiAgbGV0IHN0YXJ0VGltZTtcbiAgbGV0IHRpbWVyO1xuICBsZXQgY2FsbGJhY2s7XG4gIHRpbWUgPSBNYXRoLm1heCgwLCArdGltZSB8fCAwKTtcbiAgZnVuY3Rpb24gY2hlY2tUaW1lKCkge1xuICAgIHRpbWVyID0gbnVsbDtcbiAgICBpZiAocGVyZm9ybWFuY2Uubm93KCkgPj0gc3RhcnRUaW1lKSBjYWxsYmFjaygpO1xuICAgIGVsc2UgY2hlY2tUaW1lcigpO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrVGltZXIoKSB7XG4gICAgaWYgKCF0aW1lcikge1xuICAgICAgY29uc3QgZGVsdGEgPSBzdGFydFRpbWUgLSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChjaGVja1RpbWUsIGRlbHRhKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVib3VuY2VkRnVuY3Rpb24oLi4uYXJncykge1xuICAgIHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpICsgdGltZTtcbiAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgICBjaGVja1RpbWVyKCk7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlZEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgdGltZSkge1xuICBsZXQgbGFzdFRpbWUgPSAwO1xuICB0aW1lID0gTWF0aC5tYXgoMCwgK3RpbWUgfHwgMCk7XG4gIGZ1bmN0aW9uIHRocm90dGxlZEZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBpZiAobGFzdFRpbWUgKyB0aW1lIDwgbm93KSB7XG4gICAgICBsYXN0VGltZSA9IG5vdztcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aHJvdHRsZWRGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcUlkKHByZWZpeCA9ICdWTScpIHtcbiAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIHJldHVybiBwcmVmaXhcbiAgICArIE1hdGguZmxvb3IoKG5vdyAtIE1hdGguZmxvb3Iobm93KSkgKiAxZTEyKS50b1N0cmluZygzNilcbiAgICArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlMTIpLnRvU3RyaW5nKDM2KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfFVpbnQ4QXJyYXl8QXJyYXl9IGJ1ZlxuICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRdXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF1cbiAqIEByZXR1cm4ge3N0cmluZ30gYSBiaW5hcnkgc3RyaW5nIGkuZS4gb25lIGJ5dGUgcGVyIGNoYXJhY3RlclxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVmZmVyMnN0cmluZyhidWYsIG9mZnNldCA9IDAsIGxlbmd0aCA9IDFlOTkpIHtcbiAgLy8gVGhlIG1heCBudW1iZXIgb2YgYXJndW1lbnRzIHZhcmllcyBiZXR3ZWVuIEpTIGVuZ2luZXMgYnV0IGl0J3MgPjMyayBzbyB3ZSdyZSBzYWZlXG4gIGNvbnN0IHNsaWNlU2l6ZSA9IDgxOTI7XG4gIGNvbnN0IHNsaWNlcyA9IFtdO1xuICBjb25zdCBhcnJheUxlbiA9IGJ1Zi5sZW5ndGg7IC8vIHByZXNlbnQgb24gVWludDhBcnJheS9BcnJheVxuICBjb25zdCBlbmQgPSBNYXRoLm1pbihhcnJheUxlbiB8fCBidWYuYnl0ZUxlbmd0aCwgb2Zmc2V0ICsgbGVuZ3RoKTtcbiAgY29uc3QgbmVlZHNTbGljaW5nID0gYXJyYXlMZW4gPT0gbnVsbCB8fCBvZmZzZXQgfHwgZW5kID4gc2xpY2VTaXplO1xuICBmb3IgKDsgb2Zmc2V0IDwgZW5kOyBvZmZzZXQgKz0gc2xpY2VTaXplKSB7XG4gICAgc2xpY2VzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLFxuICAgICAgbmVlZHNTbGljaW5nXG4gICAgICAgID8gbmV3IFVpbnQ4QXJyYXkoYnVmLCBvZmZzZXQsIE1hdGgubWluKHNsaWNlU2l6ZSwgZW5kIC0gb2Zmc2V0KSlcbiAgICAgICAgOiBidWYpKTtcbiAgfVxuICByZXR1cm4gc2xpY2VzLmpvaW4oJycpO1xufVxuXG4vKipcbiAqIEZhc3RlciB0aGFuIGJ1ZmZlcjJzdHJpbmcrYnRvYTogMnggaW4gQ2hyb21lLCAxMHggaW4gRkZcbiAqIEBwYXJhbSB7QmxvYn0gYmxvYlxuICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRdXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF1cbiAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gYmFzZTY0LWVuY29kZWQgY29udGVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJsb2IyYmFzZTY0KGJsb2IsIG9mZnNldCA9IDAsIGxlbmd0aCA9IDFlOTkpIHtcbiAgaWYgKG9mZnNldCB8fCBsZW5ndGggPCBibG9iLnNpemUpIHtcbiAgICBibG9iID0gYmxvYi5zbGljZShvZmZzZXQsIG9mZnNldCArIGxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuICFibG9iLnNpemUgPyAnJyA6IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICByZXNvbHZlKHJlcy5zbGljZShyZXMuaW5kZXhPZignLCcpICsgMSkpO1xuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nMnVpbnQ4YXJyYXkoc3RyKSB7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGFycmF5W2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5jb25zdCBWRVJTSU9OX1JFID0gL14oLio/KS0oWy0uMC05YS16XSspfCQvaTtcbmNvbnN0IERJR0lUU19SRSA9IC9eXFxkKyQvOyAvLyB1c2luZyByZWdleHAgdG8gYXZvaWQgKycxZTInIGJlaW5nIHBhcnNlZCBhcyAxMDBcblxuLyoqIEByZXR1cm4gLTEgfCAwIHwgMSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9uKHZlcjEsIHZlcjIpIHtcbiAgLy8gVXNlZCBpbiBzYWZlIGNvbnRleHRcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGNvbnN0IFssIG1haW4xID0gdmVyMSB8fCAnJywgcHJlMV0gPSBWRVJTSU9OX1JFLmV4ZWModmVyMSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICBjb25zdCBbLCBtYWluMiA9IHZlcjIgfHwgJycsIHByZTJdID0gVkVSU0lPTl9SRS5leGVjKHZlcjIpO1xuICBjb25zdCBkZWx0YSA9IGNvbXBhcmVWZXJzaW9uQ2h1bmsobWFpbjEsIG1haW4yKVxuICAgIHx8ICFwcmUxIC0gIXByZTIgLy8gMS4yLjMtcHJlLXJlbGVhc2UgaXMgbGVzcyB0aGFuIDEuMi4zXG4gICAgfHwgcHJlMSAmJiBjb21wYXJlVmVyc2lvbkNodW5rKHByZTEsIHByZTIsIHRydWUpOyAvLyBpZiBwcmUxIGlzIHByZXNlbnQsIHByZTIgaXMgdG9vXG4gIHJldHVybiBkZWx0YSA8IDAgPyAtMSA6ICshIWRlbHRhO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlVmVyc2lvbkNodW5rKHZlcjEsIHZlcjIsIGlzU2VtdmVyTW9kZSkge1xuICBjb25zdCBwYXJ0czEgPSB2ZXIxLnNwbGl0KCcuJyk7XG4gIGNvbnN0IHBhcnRzMiA9IHZlcjIuc3BsaXQoJy4nKTtcbiAgY29uc3QgbGVuMSA9IHBhcnRzMS5sZW5ndGg7XG4gIGNvbnN0IGxlbjIgPSBwYXJ0czIubGVuZ3RoO1xuICBjb25zdCBsZW4gPSAoaXNTZW12ZXJNb2RlID8gTWF0aC5taW4gOiBNYXRoLm1heCkobGVuMSwgbGVuMik7XG4gIGxldCBkZWx0YTtcbiAgZm9yIChsZXQgaSA9IDA7ICFkZWx0YSAmJiBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBjb25zdCBhID0gcGFydHMxW2ldO1xuICAgIGNvbnN0IGIgPSBwYXJ0czJbaV07XG4gICAgaWYgKGlzU2VtdmVyTW9kZSkge1xuICAgICAgZGVsdGEgPSBESUdJVFNfUkUudGVzdChhKSAmJiBESUdJVFNfUkUudGVzdChiKVxuICAgICAgICA/IGEgLSBiXG4gICAgICAgIDogYSA+IGIgfHwgYSA8IGIgJiYgLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbHRhID0gKHBhcnNlSW50KGEsIDEwKSB8fCAwKSAtIChwYXJzZUludChiLCAxMCkgfHwgMCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWx0YSB8fCBpc1NlbXZlck1vZGUgJiYgKGxlbjEgLSBsZW4yKTtcbn1cblxuY29uc3QgdW5pdHMgPSBbXG4gIFsnbWluJywgNjBdLFxuICBbJ2gnLCAyNF0sXG4gIFsnZCcsIDEwMDAsIDM2NV0sXG4gIFsneSddLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lKGR1cmF0aW9uKSB7XG4gIGR1cmF0aW9uIC89IDYwICogMTAwMDtcbiAgY29uc3QgdW5pdEluZm8gPSB1bml0cy5maW5kKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbWF4ID0gaXRlbVsxXTtcbiAgICBpZiAoIW1heCB8fCBkdXJhdGlvbiA8IG1heCkgcmV0dXJuIHRydWU7XG4gICAgY29uc3Qgc3RlcCA9IGl0ZW1bMl0gfHwgbWF4O1xuICAgIGR1cmF0aW9uIC89IHN0ZXA7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgcmV0dXJuIGAke2R1cmF0aW9uIHwgMH0ke3VuaXRJbmZvWzBdfWA7XG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRCeXRlTGVuZ3RoID0gbGVuID0+IChcbiAgIWxlbiA/ICcnXG4gICAgOiBsZW4gPCAxMDI0ICYmIGAke2xlbn0gQmBcbiAgICB8fCBsZW4gPCAxMDI0ICogMTAyNCAmJiBgJHtsZW4gPj4gMTB9IGtgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYml0d2lzZVxuICAgIHx8IGAkeysobGVuIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgxKX0gTWAgLy8gYWxsb3cgZnJhY3Rpb25zIGZvciBtZWdhYnl0ZXNcbik7XG5cbi8vIFVzZWQgYnkgYGluamVjdGVkYFxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChvYmo6Omhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVBcnJheShkYXRhKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXTtcbn1cblxuY29uc3QgYmluYXJ5VHlwZXMgPSBbXG4gICdibG9iJyxcbiAgJ2FycmF5YnVmZmVyJyxcbl07XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdExvY2FsRmlsZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAvLyBvbmx5IEdFVCBtZXRob2QgaXMgYWxsb3dlZCBmb3IgbG9jYWwgZmlsZXNcbiAgLy8gaGVhZGVycyBpcyBtZWFuaW5nbGVzc1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IHsgcmVzcG9uc2VUeXBlIH0gPSBvcHRpb25zO1xuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgIGlmIChiaW5hcnlUeXBlcy5pbmNsdWRlcyhyZXNwb25zZVR5cGUpKSB4aHIucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlO1xuICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAvLyBzdGF0dXMgZm9yIGBmaWxlOmAgcHJvdG9jb2wgd2lsbCBhbHdheXMgYmUgYDBgXG4gICAgICByZXN1bHQuc3RhdHVzID0geGhyLnN0YXR1cyB8fCAyMDA7XG4gICAgICByZXN1bHQuZGF0YSA9IGJpbmFyeVR5cGVzLmluY2x1ZGVzKHJlc3BvbnNlVHlwZSkgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgaWYgKHJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0LmRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLy8gaWdub3JlIGludmFsaWQgSlNPTlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA+IDMwMCkge1xuICAgICAgICByZWplY3QocmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgcmVzdWx0LnN0YXR1cyA9IC0xO1xuICAgICAgcmVqZWN0KHJlc3VsdCk7XG4gICAgfTtcbiAgICB4aHIuc2VuZCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBFeGNsdWRlcyBgdGV4dC9odG1sYCB0byBhdm9pZCBMSU5LIGhlYWRlciB0aGF0IENocm9tZSB1c2VzIHRvIHByZWZldGNoIGpzIGFuZCBjc3MsXG4gKiBiZWNhdXNlIEdyZWFzeUZvcmsncyA0MDQgZXJyb3IgcmVzcG9uc2UgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIGNvbnNvbGUgb2Ygb3VyIHBhZ2UuXG4gKi9cbmNvbnN0IEZPUkNFRF9BQ0NFUFQgPSB7XG4gICdncmVhc3lmb3JrLm9yZyc6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCB0ZXh0L3BsYWluLCB0ZXh0L2NzcycsXG59O1xuXG5leHBvcnQgY29uc3QgaXNSZW1vdGUgPSB1cmwgPT4gdXJsXG4gICYmICEoL14oZmlsZTp8ZGF0YTp8aHR0cHM/OlxcL1xcLyhsb2NhbGhvc3R8MTI3XFwuMFxcLjBcXC4xWzovXSkpLy50ZXN0KHVybCkpO1xuXG4vKiogQHR5cGVkZWYge3tcbiAgdXJsOiBzdHJpbmcsXG4gIHN0YXR1czogbnVtYmVyLFxuICBoZWFkZXJzOiBIZWFkZXJzLFxuICBkYXRhOiBzdHJpbmd8QXJyYXlCdWZmZXJ8QmxvYnxPYmplY3Rcbn19IFZNUmVxdWVzdFJlc3BvbnNlICovXG4vKipcbiAqIE1ha2UgYSByZXF1ZXN0LlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtSZXF1ZXN0SW5pdH0gb3B0aW9uc1xuICogQHJldHVybiBQcm9taXNlPFZNUmVxdWVzdFJlc3BvbnNlPlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAvLyBmZXRjaCBkb2VzIG5vdCBzdXBwb3J0IGxvY2FsIGZpbGVcbiAgaWYgKHVybC5zdGFydHNXaXRoKCdmaWxlOi8vJykpIHJldHVybiByZXF1ZXN0TG9jYWxGaWxlKHVybCwgb3B0aW9ucyk7XG4gIGNvbnN0IHsgYm9keSwgaGVhZGVycywgcmVzcG9uc2VUeXBlIH0gPSBvcHRpb25zO1xuICBjb25zdCBpc0JvZHlPYmogPSBib2R5ICYmIGJvZHk6Oih7fSkudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gIGNvbnN0IGhvc3RuYW1lID0gdXJsLnNwbGl0KCcvJywgMylbMl07XG4gIGNvbnN0IGFjY2VwdCA9IEZPUkNFRF9BQ0NFUFRbaG9zdG5hbWVdO1xuICAvLyBOb3QgdXNpbmcgLi4uc3ByZWFkIGJlY2F1c2UgQmFiZWwgbWlzdGFrZW5seSBhZGRzIGl0cyBwb2x5ZmlsbCB0byBpbmplY3RlZC13ZWJcbiAgY29uc3QgaW5pdCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGNhY2hlOiBpc1JlbW90ZSh1cmwpID8gdW5kZWZpbmVkIDogJ25vLWNhY2hlJyxcbiAgfSwgb3B0aW9ucywge1xuICAgIGJvZHk6IGlzQm9keU9iaiA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSxcbiAgICBoZWFkZXJzOiBpc0JvZHlPYmogfHwgYWNjZXB0XG4gICAgICA/IE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIGlzQm9keU9iaiAmJiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYWNjZXB0ICYmIHsgYWNjZXB0IH0pXG4gICAgICA6IGhlYWRlcnMsXG4gIH0pO1xuICBjb25zdCByZXN1bHQgPSB7IHVybCwgc3RhdHVzOiAtMSB9O1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgIGNvbnN0IGxvYWRNZXRob2QgPSB7XG4gICAgICBhcnJheWJ1ZmZlcjogJ2FycmF5QnVmZmVyJyxcbiAgICAgIGJsb2I6ICdibG9iJyxcbiAgICAgIGpzb246ICdqc29uJyxcbiAgICB9W3Jlc3BvbnNlVHlwZV0gfHwgJ3RleHQnO1xuICAgIC8vIHN0YXR1cyBmb3IgYGZpbGU6YCBwcm90b2NvbCB3aWxsIGFsd2F5cyBiZSBgMGBcbiAgICByZXN1bHQuc3RhdHVzID0gcmVzcC5zdGF0dXMgfHwgMjAwO1xuICAgIHJlc3VsdC5oZWFkZXJzID0gcmVzcC5oZWFkZXJzO1xuICAgIHJlc3VsdC5kYXRhID0gYXdhaXQgcmVzcFtsb2FkTWV0aG9kXSgpO1xuICB9IGNhdGNoIHsgLyogTk9QICovIH1cbiAgaWYgKHJlc3VsdC5zdGF0dXMgPCAwIHx8IHJlc3VsdC5zdGF0dXMgPiAzMDApIHRocm93IHJlc3VsdDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gVXNlZCBieSBgaW5qZWN0ZWRgXG5jb25zdCBTSU1QTEVfVkFMVUVfVFlQRSA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBzdHJpbmc6ICdzJyxcbiAgbnVtYmVyOiAnbicsXG4gIGJvb2xlYW46ICdiJyxcbn07XG5cbi8vIFVzZWQgYnkgYGluamVjdGVkYFxuZXhwb3J0IGZ1bmN0aW9uIGR1bXBTY3JpcHRWYWx1ZSh2YWx1ZSwganNvbkR1bXAgPSBKU09OLnN0cmluZ2lmeSkge1xuICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IFNJTVBMRV9WQUxVRV9UWVBFW3R5cGVvZiB2YWx1ZV07XG4gICAgcmV0dXJuIGAke3NpbXBsZSB8fCAnbyd9JHtzaW1wbGUgPyB2YWx1ZSA6IGpzb25EdW1wKHZhbHVlKX1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJTkpFQ1RfUEFHRSwgYnJvd3NlciB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgc2VuZENtZCB9IGZyb20gJy4vdXRpbC1jb250ZW50JztcblxuY29uc3QgYWxsb3dlZCA9IGNyZWF0ZU51bGxPYmooKTtcbmNvbnN0IGRhdGFLZXlOYW1lTWFwID0gY3JlYXRlTnVsbE9iaigpO1xuY29uc3QgaGFuZGxlcnMgPSBjcmVhdGVOdWxsT2JqKCk7XG5jb25zdCBiZ0hhbmRsZXJzID0gY3JlYXRlTnVsbE9iaigpO1xuY29uc3Qgb25TY3JpcHRzID0gW107XG5jb25zdCBhc3NpZ25IYW5kbGVycyA9IChkZXN0LCBzcmMsIGZvcmNlKSA9PiB7XG4gIGlmIChmb3JjZSkge1xuICAgIGFzc2lnbihkZXN0LCBzcmMpO1xuICB9IGVsc2Uge1xuICAgIG9uU2NyaXB0cy5wdXNoKCgpID0+IGFzc2lnbihkZXN0LCBzcmMpKTtcbiAgfVxufTtcbmNvbnN0IGFsbG93Q21kID0gKGNtZCwgZGF0YUtleSkgPT4ge1xuICBlbnN1cmVOZXN0ZWRQcm9wKGFsbG93ZWQsIGNtZCwgZGF0YUtleSwgdHJ1ZSk7XG59O1xuY29uc3QgWEhSID0gWydIdHRwUmVxdWVzdCcsICdBYm9ydFJlcXVlc3QnXTtcbmNvbnN0IEFERF9FTEVNRU5UID0gWydBZGRFbGVtZW50J107XG5jb25zdCBVUERBVEVfVkFMVUUgPSBbJ1VwZGF0ZVZhbHVlJ107XG5jb25zdCBUQUJfQ0xPU0UgPSBbJ1RhYkNsb3NlJ107XG5jb25zdCBHRVRfUkVTT1VSQ0UgPSBbJ0dldFJlc291cmNlJ107XG5jb25zdCBHTV9DTUQgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgYWRkRWxlbWVudDogQUREX0VMRU1FTlQsXG4gIGFkZFN0eWxlOiBBRERfRUxFTUVOVCxcbiAgZGVsZXRlVmFsdWU6IFVQREFURV9WQUxVRSxcbiAgZG93bmxvYWQ6IFhIUixcbiAgZ2V0UmVzb3VyY2VUZXh0OiBHRVRfUkVTT1VSQ0UsXG4gIGdldFJlc291cmNlVVJMOiBHRVRfUkVTT1VSQ0UsIC8vIGFsc28gYWxsb3dzIHRoZSBtaXNzcGVsbGVkIEdNLmdldFJlc291cmNlVVJMIGZvciBjb21wYXRpYmlsaXR5XG4gIG5vdGlmaWNhdGlvbjogWydOb3RpZmljYXRpb24nLCAnUmVtb3ZlTm90aWZpY2F0aW9uJ10sXG4gIG9wZW5JblRhYjogWydUYWJPcGVuJywgVEFCX0NMT1NFXSxcbiAgcmVnaXN0ZXJNZW51Q29tbWFuZDogWydSZWdpc3Rlck1lbnUnXSxcbiAgc2V0Q2xpcGJvYXJkOiBbJ1NldENsaXBib2FyZCddLFxuICBzZXRWYWx1ZTogVVBEQVRFX1ZBTFVFLFxuICB1bnJlZ2lzdGVyTWVudUNvbW1hbmQ6IFsnVW5yZWdpc3Rlck1lbnUnXSxcbn07XG5jb25zdCBHUkFOVF9DTUQgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgJ0dNLmdldFJlc291cmNlVXJsJzogR0VUX1JFU09VUkNFLFxuICAnR00ueG1sSHR0cFJlcXVlc3QnOiBYSFIsXG4gICdHTV94bWxodHRwUmVxdWVzdCc6IFhIUiwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBxdW90ZS1wcm9wc1xuICBbV0lORE9XX0NMT1NFXTogVEFCX0NMT1NFLFxuICBbV0lORE9XX0ZPQ1VTXTogWydUYWJGb2N1cyddLFxufTtcblxuY29uc3QgYnJpZGdlID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIGlkczogW10sIC8vIGFsbCBpZHMgaW5jbHVkaW5nIHRoZSBkaXNhYmxlZCBvbmVzIGZvciBTZXRQb3B1cFxuICBydW5uaW5nSWRzOiBbXSxcbiAgLy8gdXNlcnNjcmlwdHMgcnVubmluZyBpbiB0aGUgY29udGVudCBzY3JpcHQgY29udGV4dCBhcmUgbWVzc2FnZWQgdmlhIGludm9rZUd1ZXN0XG4gIC8qKiBAdHlwZSBOdW1iZXJbXSAqL1xuICBpbnZva2FibGVJZHM6IFtdLFxuICBmYWlsZWRJZHM6IFtdLFxuICBjYWNoZTogY3JlYXRlTnVsbE9iaigpLFxuICBwYXRoTWFwczogY3JlYXRlTnVsbE9iaigpLFxuICBvblNjcmlwdHMsXG4gIGFsbG93Q21kLFxuICAvKipcbiAgICogV2l0aG91dCBgZm9yY2VgIGhhbmRsZXJzIHdpbGwgYmUgYWRkZWQgb25seSB3aGVuIHVzZXJzY3JpcHRzIGFyZSBhYm91dCB0byBiZSBpbmplY3RlZC5cbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgTWVzc2FnZUZyb21HdWVzdEhhbmRsZXI+fSBvYmpcbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqL1xuICBhZGRIYW5kbGVycyhvYmosIGZvcmNlKSB7XG4gICAgYXNzaWduSGFuZGxlcnMoaGFuZGxlcnMsIG9iaiwgZm9yY2UpO1xuICB9LFxuICAvKiogeyBDb21tYW5kTmFtZTogdHJ1ZSB9IHdpbGwgcmVsYXkgdGhlIHJlcXVlc3QgdmlhIHNlbmRDbWQgYXMgaXMuXG4gICAqIFdpdGhvdXQgYGZvcmNlYCBoYW5kbGVycyB3aWxsIGJlIGFkZGVkIG9ubHkgd2hlbiB1c2Vyc2NyaXB0cyBhcmUgYWJvdXQgdG8gYmUgaW5qZWN0ZWQuICovXG4gIGFkZEJhY2tncm91bmRIYW5kbGVycyhvYmosIGZvcmNlKSB7XG4gICAgYXNzaWduSGFuZGxlcnMoYmdIYW5kbGVycywgb2JqLCBmb3JjZSk7XG4gIH0sXG4gIC8qKlxuICAgKiBAcGFyYW0ge1ZNSW5qZWN0ZWRTY3JpcHQgfCBWTVNjcmlwdH0gc2NyaXB0XG4gICAqL1xuICBhbGxvd1NjcmlwdCh7IGRhdGFLZXksIG1ldGEgfSkge1xuICAgIGFsbG93Q21kKCdSdW4nLCBkYXRhS2V5KTtcbiAgICBkYXRhS2V5TmFtZU1hcFtkYXRhS2V5XSA9IG1ldGEubmFtZTtcbiAgICBtZXRhLmdyYW50Ojpmb3JFYWNoKGdyYW50ID0+IHtcbiAgICAgIGNvbnN0IGNtZHMgPSBHUkFOVF9DTURbZ3JhbnRdXG4gICAgICAgIHx8IC9eR01bLl9dLzo6cmVnZXhwVGVzdChncmFudCkgJiYgR01fQ01EW2dyYW50OjpzbGljZSgzKV07XG4gICAgICBpZiAoY21kcykgY21kczo6Zm9yRWFjaChjbWQgPT4gYWxsb3dDbWQoY21kLCBkYXRhS2V5KSk7XG4gICAgfSk7XG4gIH0sXG4gIC8vIHJlYWxtIGlzIHByb3ZpZGVkIHdoZW4gY2FsbGVkIGRpcmVjdGx5IHZpYSBpbnZva2VIb3N0XG4gIGFzeW5jIG9uSGFuZGxlKHsgY21kLCBkYXRhLCBkYXRhS2V5LCBub2RlIH0sIHJlYWxtKSB7XG4gICAgY29uc3QgaGFuZGxlID0gaGFuZGxlcnNbY21kXTtcbiAgICBpZiAoIWhhbmRsZSB8fCAhYWxsb3dlZFtjbWRdPy5bZGF0YUtleV0pIHtcbiAgICAgIC8vIFRPRE86IG1heWJlIHJlbW92ZSB0aGlzIGNoZWNrIGlmIG91ciBWQVVMVCBpcyByZWxpYWJsZVxuICAgICAgbG9nKCdpbmZvJywgbnVsbCwgYEludmFsaWQgY29tbWFuZDogXCIke2NtZH1cIiBmcm9tIFwiJHtkYXRhS2V5TmFtZU1hcFtkYXRhS2V5XSB8fCAnPyd9XCJgKTtcbiAgICB9XG4gICAgY29uc3QgY2FsbGJhY2tJZCA9IGRhdGEgJiYgZ2V0T3duUHJvcChkYXRhLCBDQUxMQkFDS19JRCk7XG4gICAgaWYgKGNhbGxiYWNrSWQpIHtcbiAgICAgIGRhdGEgPSBkYXRhLmRhdGE7XG4gICAgfVxuICAgIGxldCByZXMgPSBoYW5kbGUgPT09IHRydWVcbiAgICAgID8gc2VuZENtZChjbWQsIGRhdGEpXG4gICAgICA6IG5vZGU6OmhhbmRsZShkYXRhLCByZWFsbSB8fCBJTkpFQ1RfUEFHRSk7XG4gICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICByZXMgPSBhd2FpdCByZXM7XG4gICAgfVxuICAgIGlmIChjYWxsYmFja0lkKSB7XG4gICAgICBicmlkZ2UucG9zdCgnQ2FsbGJhY2snLCB7IGlkOiBjYWxsYmFja0lkLCBkYXRhOiByZXMgfSwgcmVhbG0pO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJyaWRnZTtcblxuYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoeyBjbWQsIGRhdGEgfSwgc3JjKSA9PiB7XG4gIGNvbnN0IGZuID0gYmdIYW5kbGVyc1tjbWRdO1xuICBpZiAoZm4pIGZuKGRhdGEsIHNyYyk7XG59KTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVzc2FnZUZyb21HdWVzdEhhbmRsZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cbiAqIEBwYXJhbSB7SU5KRUNUX0NPTlRFTlQgfCBJTkpFQ1RfUEFHRX0gcmVhbG0gLVxuICogICBJTkpFQ1RfQ09OVEVOVCB3aGVuIHRoZSBtZXNzYWdlIGlzIGZyb20gdGhlIGNvbnRlbnQgc2NyaXB0IGNvbnRleHQsXG4gKiAgIElOSkVDVF9QQUdFIG90aGVyd2lzZS4gTWFrZSBzdXJlIHRvIHNwZWNpZnkgdGhlIHNhbWUgcmVhbG0gd2hlbiBtZXNzYWdpbmdcbiAqICAgdGhlIHJlc3VsdHMgYmFjayBvdGhlcndpc2UgaXQgd29uJ3QgcmVhY2ggdGhlIHRhcmdldCBzY3JpcHQuXG4gKi9cbiIsImltcG9ydCBicmlkZ2UgZnJvbSAnLi9icmlkZ2UnO1xuXG5icmlkZ2Uub25TY3JpcHRzLnB1c2goKCkgPT4ge1xuICBsZXQgc2V0Q2xpcGJvYXJkO1xuICBpZiAoSVNfRklSRUZPWCkge1xuICAgIGxldCBjbGlwYm9hcmREYXRhO1xuICAgIC8vIG9sZCBGaXJlZm94IGRlZmluZXMgaXQgb24gYSBkaWZmZXJlbnQgcHJvdG90eXBlIHNvIHdlJ2xsIGp1c3QgZ3JhYiBpdCBmcm9tIGRvY3VtZW50IGRpcmVjdGx5XG4gICAgY29uc3QgeyBleGVjQ29tbWFuZCB9ID0gZG9jdW1lbnQ7XG4gICAgY29uc3QgeyBzZXREYXRhIH0gPSBEYXRhVHJhbnNmZXJbUFJPVE9dO1xuICAgIGNvbnN0IHsgZ2V0OiBnZXRDbGlwYm9hcmREYXRhIH0gPSBkZXNjcmliZVByb3BlcnR5KENsaXBib2FyZEV2ZW50W1BST1RPXSwgJ2NsaXBib2FyZERhdGEnKTtcbiAgICBjb25zdCB7IHByZXZlbnREZWZhdWx0LCBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gfSA9IEV2ZW50W1BST1RPXTtcbiAgICBjb25zdCBvbkNvcHkgPSBlID0+IHtcbiAgICAgIGU6OnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgZTo6cHJldmVudERlZmF1bHQoKTtcbiAgICAgIGU6OmdldENsaXBib2FyZERhdGEoKTo6c2V0RGF0YShjbGlwYm9hcmREYXRhLnR5cGUgfHwgJ3RleHQvcGxhaW4nLCBjbGlwYm9hcmREYXRhLmRhdGEpO1xuICAgIH07XG4gICAgc2V0Q2xpcGJvYXJkID0gcGFyYW1zID0+IHtcbiAgICAgIGNsaXBib2FyZERhdGEgPSBwYXJhbXM7XG4gICAgICBkb2N1bWVudDo6b24oJ2NvcHknLCBvbkNvcHkpO1xuICAgICAgaWYgKCFkb2N1bWVudDo6ZXhlY0NvbW1hbmQoJ2NvcHknKSAmJiBwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgICBsb2coJ3dhcm4nLCBudWxsLCAnR01fc2V0Q2xpcGJvYXJkIGZhaWxlZCEnKTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50OjpvZmYoJ2NvcHknLCBvbkNvcHkpO1xuICAgICAgY2xpcGJvYXJkRGF0YSA9IG51bGw7XG4gICAgfTtcbiAgfVxuICBicmlkZ2UuYWRkSGFuZGxlcnMoe1xuICAgIFNldENsaXBib2FyZDogc2V0Q2xpcGJvYXJkIHx8IHRydWUsXG4gIH0sIHRydWUpO1xufSk7XG4iLCJpbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcbmltcG9ydCB7IGRlY29kZVJlc291cmNlLCBlbGVtQnlUYWcsIG1ha2VFbGVtLCBzZW5kQ21kIH0gZnJvbSAnLi91dGlsLWNvbnRlbnQnO1xuXG5jb25zdCBtZW51cyA9IGNyZWF0ZU51bGxPYmooKTtcbmxldCBzZXRQb3B1cFRocm90dGxlO1xubGV0IGlzUG9wdXBTaG93bjtcblxuYnJpZGdlLm9uU2NyaXB0cy5wdXNoKGluamVjdGlvbiA9PiB7XG4gIGlzUG9wdXBTaG93biA9IGluamVjdGlvbi5pc1BvcHVwU2hvd247XG59KTtcblxuYnJpZGdlLmFkZEJhY2tncm91bmRIYW5kbGVycyh7XG4gIFBvcHVwU2hvd24oc3RhdGUpIHtcbiAgICBpc1BvcHVwU2hvd24gPSBzdGF0ZTtcbiAgICBzZW5kU2V0UG9wdXAoKTtcbiAgfSxcbn0sIHRydWUpO1xuXG5icmlkZ2UuYWRkSGFuZGxlcnMoe1xuICAvKiogQHRoaXMge05vZGV9ICovXG4gIEFkZEVsZW1lbnQoeyB0YWcsIGF0dHJzLCBjYklkIH0sIHJlYWxtKSB7XG4gICAgbGV0IGVsO1xuICAgIGxldCByZXM7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXNcbiAgICAgICAgfHwgL14oc2NyaXB0fHN0eWxlfGxpbmt8bWV0YSkkL2k6OnJlZ2V4cFRlc3QodGFnKSAmJiBlbGVtQnlUYWcoJ2hlYWQnKVxuICAgICAgICB8fCBlbGVtQnlUYWcoJ2JvZHknKVxuICAgICAgICB8fCBlbGVtQnlUYWcoJyonKTtcbiAgICAgIGVsID0gbWFrZUVsZW0odGFnLCBhdHRycyk7XG4gICAgICBwYXJlbnQ6OmFwcGVuZENoaWxkKGVsKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBBIHBhZ2UtbW9kZSB1c2Vyc2NyaXB0IGNhbid0IGNhdGNoIERPTSBlcnJvcnMgaW4gYSBjb250ZW50IHNjcmlwdCBzbyB3ZSBwYXNzIGl0IGV4cGxpY2l0bHlcbiAgICAgIC8vIFRPRE86IG1heWJlIG1vdmUgdHJ5L2NhdGNoIHRvIGJyaWRnZS5vbkhhbmRsZSBhbmQgdXNlIGJyaWRnZS5zZW5kU3luYyBpbiBhbGwgd2ViIGNvbW1hbmRzXG4gICAgICByZXMgPSBbYCR7ZX1gLCBlLnN0YWNrXTtcbiAgICB9XG4gICAgYnJpZGdlLnBvc3QoJ0NhbGxiYWNrJywgeyBpZDogY2JJZCwgZGF0YTogcmVzIH0sIHJlYWxtLCBlbCk7XG4gIH0sXG5cbiAgR2V0UmVzb3VyY2UoeyBpZCwgaXNCbG9iLCBrZXkgfSkge1xuICAgIGNvbnN0IHBhdGggPSBicmlkZ2UucGF0aE1hcHNbaWRdPy5ba2V5XSB8fCBrZXk7XG4gICAgY29uc3QgcmF3ID0gYnJpZGdlLmNhY2hlW3BhdGhdO1xuICAgIHJldHVybiByYXcgPyBkZWNvZGVSZXNvdXJjZShyYXcsIGlzQmxvYikgOiB0cnVlO1xuICB9LFxuXG4gIFJlZ2lzdGVyTWVudSh7IGlkLCBjYXAgfSkge1xuICAgIGlmIChJU19UT1ApIHtcbiAgICAgIGVuc3VyZU5lc3RlZFByb3AobWVudXMsIGlkLCBjYXAsIDEpO1xuICAgICAgc2VuZFNldFBvcHVwKHRydWUpO1xuICAgIH1cbiAgfSxcblxuICBVbnJlZ2lzdGVyTWVudSh7IGlkLCBjYXAgfSkge1xuICAgIGlmIChJU19UT1ApIHtcbiAgICAgIGRlbGV0ZSBtZW51c1tpZF0/LltjYXBdO1xuICAgICAgc2VuZFNldFBvcHVwKHRydWUpO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZFNldFBvcHVwKGlzRGVsYXllZCkge1xuICBpZiAoaXNQb3B1cFNob3duKSB7XG4gICAgaWYgKGlzRGVsYXllZCkge1xuICAgICAgaWYgKHNldFBvcHVwVGhyb3R0bGUpIHJldHVybjtcbiAgICAgIC8vIFByZXZlbnRpbmcgZmxpY2tlciBpbiBwb3B1cCB3aGVuIHNjcmlwdHMgcmUtcmVnaXN0ZXIgbWVudXNcbiAgICAgIHNldFBvcHVwVGhyb3R0bGUgPSBzZW5kQ21kKCdTZXRUaW1lb3V0JywgMCk7XG4gICAgICBhd2FpdCBzZXRQb3B1cFRocm90dGxlO1xuICAgICAgc2V0UG9wdXBUaHJvdHRsZSA9IG51bGw7XG4gICAgfVxuICAgIHNlbmRDbWQoJ1NldFBvcHVwJywgeyBtZW51cywgX19wcm90b19fOiBudWxsIH06OnBpY2tJbnRvVGhpcyhicmlkZ2UsIFtcbiAgICAgICdpZHMnLFxuICAgICAgJ2luamVjdEludG8nLFxuICAgICAgJ3J1bm5pbmdJZHMnLFxuICAgICAgJ2ZhaWxlZElkcycsXG4gICAgXSkpO1xuICB9XG59XG4iLCJpbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcbmltcG9ydCAnLi9jbGlwYm9hcmQnO1xuaW1wb3J0IHsgc2VuZFNldFBvcHVwIH0gZnJvbSAnLi9nbS1hcGktY29udGVudCc7XG5pbXBvcnQgeyBpbmplY3RQYWdlU2FuZGJveCwgaW5qZWN0U2NyaXB0cyB9IGZyb20gJy4vaW5qZWN0JztcbmltcG9ydCAnLi9ub3RpZmljYXRpb25zJztcbmltcG9ydCAnLi9yZXF1ZXN0cyc7XG5pbXBvcnQgJy4vdGFicyc7XG5pbXBvcnQgeyBzZW5kQ21kIH0gZnJvbSAnLi91dGlsLWNvbnRlbnQnO1xuaW1wb3J0IHsgaXNFbXB0eSwgSU5KRUNUX0NPTlRFTlQgfSBmcm9tICcuLi91dGlsJztcblxuY29uc3QgeyBpbnZva2FibGVJZHMsIHJ1bm5pbmdJZHMgfSA9IGJyaWRnZTtcbmNvbnN0IHJlc29sdmVkUHJvbWlzZSA9IHByb21pc2VSZXNvbHZlKCk7XG5sZXQgYmFkZ2VQcm9taXNlO1xubGV0IG51bUJhZGdlc1NlbnQgPSAwO1xubGV0IGJmQ2FjaGVXaXJlZDtcblxuLy8gTWFrZSBzdXJlIHRvIGNhbGwgb2JqOjptZXRob2QoKSBpbiBjb2RlIHRoYXQgbWF5IHJ1biBhZnRlciBJTkpFQ1RfQ09OVEVOVCB1c2Vyc2NyaXB0c1xuYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgY29udGVudElkID0gZ2V0VW5pcUlkU2FmZSgpO1xuICBjb25zdCB3ZWJJZCA9IGdldFVuaXFJZFNhZmUoKTtcbiAgY29uc3QgeGhyRGF0YSA9IGdldFhockluamVjdGlvbigpO1xuICBjb25zdCBwYWdlSW5mbyA9ICF4aHJEYXRhPy5mb3JjZUNvbnRlbnQgJiYge1xuICAgIC8qIEluIEZGOTMgc2VuZGVyLnVybCBpcyB3cm9uZzogaHR0cHM6Ly9idWd6aWwubGEvMTczNDk4NCxcbiAgICAgKiBpbiBDaHJvbWUgc2VuZGVyLnVybCBpcyBvaywgYnV0IGxvY2F0aW9uLmhyZWYgaXMgd3JvbmcgZm9yIHRleHQgc2VsZWN0aW9uIFVSTHMgIzp+OnRleHQ9ICovXG4gICAgdXJsOiBJU19GSVJFRk9YICYmIGdsb2JhbC5sb2NhdGlvbi5ocmVmLFxuICAgIC8vIFhNTCBkb2N1bWVudCdzIGFwcGVhcmFuY2UgYnJlYWtzIHdoZW4gc2NyaXB0IGVsZW1lbnRzIGFyZSBhZGRlZFxuICAgIGZvcmNlQ29udGVudDogZG9jdW1lbnQgaW5zdGFuY2VvZiBYTUxEb2N1bWVudFxuICAgICAgfHwgIWluamVjdFBhZ2VTYW5kYm94KGNvbnRlbnRJZCwgd2ViSWQpLFxuICB9O1xuICBjb25zdCBkYXRhUHJvbWlzZSA9ICF4aHJEYXRhICYmIHNlbmRDbWQoJ0dldEluamVjdGVkJywgcGFnZUluZm8sIHsgcmV0cnk6IHRydWUgfSk7XG4gIC8vIGRldGVjdGluZyBpZiBicm93c2VyLmNvbnRlbnRTY3JpcHRzIGlzIHVzYWJsZSwgaXQgd2FzIGFkZGVkIGluIEZGNTkgYXMgd2VsbCBhcyBjb21wb3NlZFBhdGhcbiAgY29uc3QgZGF0YSA9IHhockRhdGEgfHwgKFxuICAgIElTX0ZJUkVGT1ggJiYgRXZlbnRbUFJPVE9dLmNvbXBvc2VkUGF0aFxuICAgICAgPyBhd2FpdCBnZXREYXRhRkYoZGF0YVByb21pc2UpXG4gICAgICA6IGF3YWl0IGRhdGFQcm9taXNlXG4gICk7XG4gIGNvbnN0IHsgYWxsb3dDbWQgfSA9IGJyaWRnZTtcbiAgYWxsb3dDbWQoJ1ZhdWx0SWQnLCBjb250ZW50SWQpO1xuICBicmlkZ2U6OnBpY2tJbnRvVGhpcyhkYXRhLCBbXG4gICAgJ2lkcycsXG4gICAgJ2luamVjdEludG8nLFxuICBdKTtcbiAgaWYgKGRhdGEuZXhwb3NlKSB7XG4gICAgYWxsb3dDbWQoJ0dldFNjcmlwdFZlcicsIGNvbnRlbnRJZCk7XG4gICAgYnJpZGdlLmFkZEhhbmRsZXJzKHsgR2V0U2NyaXB0VmVyOiB0cnVlIH0sIHRydWUpO1xuICAgIGJyaWRnZS5wb3N0KCdFeHBvc2UnKTtcbiAgfVxuICBpZiAoZGF0YS5zY3JpcHRzKSB7XG4gICAgYnJpZGdlLm9uU2NyaXB0cy5mb3JFYWNoKGZuID0+IGZuKGRhdGEpKTtcbiAgICBhbGxvd0NtZCgnU2V0VGltZW91dCcsIGNvbnRlbnRJZCk7XG4gICAgaWYgKElTX0ZJUkVGT1gpIGFsbG93Q21kKCdJbmplY3RMaXN0JywgY29udGVudElkKTtcbiAgICBhd2FpdCBpbmplY3RTY3JpcHRzKGNvbnRlbnRJZCwgd2ViSWQsIGRhdGEpO1xuICB9XG4gIGJyaWRnZS5vblNjcmlwdHMgPSBudWxsO1xuICBzZW5kU2V0UG9wdXAoKTtcbn1cblxuYnJpZGdlLmFkZEJhY2tncm91bmRIYW5kbGVycyh7XG4gIENvbW1hbmQoZGF0YSkge1xuICAgIGNvbnN0IHJlYWxtID0gaW52b2thYmxlSWRzOjppbmNsdWRlcyhkYXRhLmlkKSAmJiBJTkpFQ1RfQ09OVEVOVDtcbiAgICBicmlkZ2UucG9zdCgnQ29tbWFuZCcsIGRhdGEsIHJlYWxtKTtcbiAgfSxcbiAgVXBkYXRlZFZhbHVlcyhkYXRhKSB7XG4gICAgY29uc3QgZGF0YVBhZ2UgPSBjcmVhdGVOdWxsT2JqKCk7XG4gICAgY29uc3QgZGF0YUNvbnRlbnQgPSBjcmVhdGVOdWxsT2JqKCk7XG4gICAgb2JqZWN0S2V5cyhkYXRhKTo6Zm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIChpbnZva2FibGVJZHM6OmluY2x1ZGVzKCtpZCkgPyBkYXRhQ29udGVudCA6IGRhdGFQYWdlKVtpZF0gPSBkYXRhW2lkXTtcbiAgICB9KTtcbiAgICBpZiAoIWlzRW1wdHkoZGF0YVBhZ2UpKSBicmlkZ2UucG9zdCgnVXBkYXRlZFZhbHVlcycsIGRhdGFQYWdlKTtcbiAgICBpZiAoIWlzRW1wdHkoZGF0YUNvbnRlbnQpKSBicmlkZ2UucG9zdCgnVXBkYXRlZFZhbHVlcycsIGRhdGFDb250ZW50LCBJTkpFQ1RfQ09OVEVOVCk7XG4gIH0sXG59KTtcblxuYnJpZGdlLmFkZEhhbmRsZXJzKHtcbiAgUnVuKGlkLCByZWFsbSkge1xuICAgIHJ1bm5pbmdJZHM6OnB1c2goaWQpO1xuICAgIGJyaWRnZS5pZHM6OnB1c2goaWQpO1xuICAgIGlmIChyZWFsbSA9PT0gSU5KRUNUX0NPTlRFTlQpIHtcbiAgICAgIGludm9rYWJsZUlkczo6cHVzaChpZCk7XG4gICAgfVxuICAgIGlmICghYmFkZ2VQcm9taXNlKSB7XG4gICAgICBiYWRnZVByb21pc2UgPSByZXNvbHZlZFByb21pc2U6OnRoZW4odGhyb3R0bGVkU2V0QmFkZ2UpO1xuICAgIH1cbiAgICBpZiAoIWJmQ2FjaGVXaXJlZCkge1xuICAgICAgYmZDYWNoZVdpcmVkID0gdHJ1ZTtcbiAgICAgIHdpbmRvdzo6b24oJ3BhZ2VzaG93JywgZXZ0ID0+IHtcbiAgICAgICAgLy8gaXNUcnVzdGVkIGlzIGB1bmZvcmdlYWJsZWAgcGVyIERPTSBzcGVjIHNvIHdlIGRvbid0IG5lZWQgdG8gc2FmZWd1YXJkIGl0cyBnZXR0ZXJcbiAgICAgICAgaWYgKGV2dC5pc1RydXN0ZWQgJiYgZXZ0LnBlcnNpc3RlZCkge1xuICAgICAgICAgIHNlbmRDbWQoJ1NldEJhZGdlJywgcnVubmluZ0lkcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgU2V0VGltZW91dDogdHJ1ZSxcbiAgVGFiRm9jdXM6IHRydWUsXG4gIFVwZGF0ZVZhbHVlOiB0cnVlLFxufSk7XG5cbmluaXQoKS5jYXRjaChJU19GSVJFRk9YICYmIGNvbnNvbGUuZXJyb3IpOyAvLyBGaXJlZm94IGNhbid0IHNob3cgZXhjZXB0aW9ucyBpbiBjb250ZW50IHNjcmlwdHNcblxuZnVuY3Rpb24gdGhyb3R0bGVkU2V0QmFkZ2UoKSB7XG4gIGNvbnN0IG51bSA9IHJ1bm5pbmdJZHMubGVuZ3RoO1xuICBpZiAobnVtQmFkZ2VzU2VudCA8IG51bSkge1xuICAgIG51bUJhZGdlc1NlbnQgPSBudW07XG4gICAgcmV0dXJuIHNlbmRDbWQoJ1NldEJhZGdlJywgcnVubmluZ0lkcyk6OnRoZW4oKCkgPT4ge1xuICAgICAgYmFkZ2VQcm9taXNlID0gdGhyb3R0bGVkU2V0QmFkZ2UoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhRkYodmlhTWVzc2FnaW5nKSB7XG4gIC8vIEluIEZpcmVmb3ggd2Ugc2V0IGRhdGEgb24gZ2xvYmFsIGB0aGlzYCB3aGljaCBpcyBub3QgZXF1YWwgdG8gYHdpbmRvd2BcbiAgY29uc3QgZGF0YSA9IGdsb2JhbC52bURhdGEgfHwgYXdhaXQgUHJvbWlzZVNhZmUucmFjZShbXG4gICAgbmV3IFByb21pc2VTYWZlKHJlc29sdmUgPT4geyBnbG9iYWwudm1SZXNvbHZlID0gcmVzb2x2ZTsgfSksXG4gICAgdmlhTWVzc2FnaW5nLFxuICBdKTtcbiAgZGVsZXRlIGdsb2JhbC52bVJlc29sdmU7XG4gIGRlbGV0ZSBnbG9iYWwudm1EYXRhO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZ2V0WGhySW5qZWN0aW9uKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHF1b3RlZEtleSA9IGBcIiR7cHJvY2Vzcy5lbnYuSU5JVF9GVU5DX05BTUV9XCJgO1xuICAgIC8vIEFjY2Vzc2luZyBkb2N1bWVudC5jb29raWUgbWF5IHRocm93IGR1ZSB0byBDU1Agc2FuZGJveFxuICAgIGNvbnN0IGNvb2tpZVZhbHVlID0gZG9jdW1lbnQuY29va2llLnNwbGl0KGAke3F1b3RlZEtleX09YClbMV07XG4gICAgY29uc3QgYmxvYklkID0gY29va2llVmFsdWUgJiYgY29va2llVmFsdWUuc3BsaXQoJzsnLCAxKVswXTtcbiAgICBpZiAoYmxvYklkKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtxdW90ZWRLZXl9PTA7IG1heC1hZ2U9MDsgU2FtZVNpdGU9TGF4YDsgLy8gdGhpcyByZW1vdmVzIG91ciBjb29raWVcbiAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgY29uc3QgdXJsID0gYGJsb2I6JHtWTV9VVUlEfSR7YmxvYklkfWA7XG4gICAgICB4aHIub3BlbignZ2V0JywgdXJsLCBmYWxzZSk7IC8vIGBmYWxzZWAgPSBzeW5jaHJvbm91c1xuICAgICAgeGhyLnNlbmQoKTtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XG4gICAgfVxuICB9IGNhdGNoIHsgLyogTk9QICovIH1cbn1cbiIsImltcG9ydCBicmlkZ2UgZnJvbSAnLi9icmlkZ2UnO1xuaW1wb3J0IHsgZWxlbUJ5VGFnLCBtYWtlRWxlbSwgb25FbGVtZW50LCBzZW5kQ21kIH0gZnJvbSAnLi91dGlsLWNvbnRlbnQnO1xuaW1wb3J0IHtcbiAgYmluZEV2ZW50cywgZmlyZUJyaWRnZUV2ZW50LFxuICBJTkpFQ1RfQ09OVEVOVCwgSU5KRUNUX01BUFBJTkcsIElOSkVDVF9QQUdFLFxufSBmcm9tICcuLi91dGlsJztcblxuLyogSW4gRkYsIGNvbnRlbnQgc2NyaXB0cyBydW5uaW5nIGluIGEgc2FtZS1vcmlnaW4gZnJhbWUgY2Fubm90IGRpcmVjdGx5IGNhbGwgcGFyZW50J3MgZnVuY3Rpb25zXG4gKiBzbyB3ZSdsbCB1c2UgdGhlIGV4dGVuc2lvbidzIFVVSUQsIHdoaWNoIGlzIHVuaXF1ZSBwZXIgY29tcHV0ZXIgaW4gRkYsIGZvciBtZXNzYWdlc1xuICogbGlrZSBWQVVMVF9XUklURVIgdG8gYXZvaWQgaW50ZXJjZXB0aW9uIGJ5IHNpdGVzIHRoYXQgY2FuIGFkZCBsaXN0ZW5lcnMgZm9yIGFsbCBvZiBvdXJcbiAqIElOSVRfRlVOQ19OQU1FIGlkcyBldmVuIHRob3VnaCB3ZSBjaGFuZ2UgaXQgbm93IHdpdGggZWFjaCByZWxlYXNlLiAqL1xuY29uc3QgSU5JVF9GVU5DX05BTUUgPSBwcm9jZXNzLmVudi5JTklUX0ZVTkNfTkFNRTtcbmNvbnN0IFZBVUxUX1dSSVRFUiA9IGAke0lTX0ZJUkVGT1ggPyBWTV9VVUlEIDogSU5JVF9GVU5DX05BTUV9VldgO1xuY29uc3QgVkFVTFRfV1JJVEVSX0FDSyA9IGAke1ZBVUxUX1dSSVRFUn0rYDtcbmxldCBjb250TGlzdHM7XG5sZXQgcGdMaXN0cztcbi8qKiBAdHlwZSB7T2JqZWN0PHN0cmluZyxWTUluamVjdGlvblJlYWxtPn0gKi9cbmxldCByZWFsbXM7XG4vKiogQHR5cGUgYm9vbGVhbiAqL1xubGV0IHBhZ2VJbmplY3RhYmxlO1xubGV0IGZyYW1lRXZlbnRXbmQ7XG4vKiogQHR5cGUgU2hhZG93Um9vdCAqL1xubGV0IGluamVjdGVkUm9vdDtcblxuLy8gaHR0cHM6Ly9idWd6aWwubGEvMTQwODk5NlxubGV0IFZNSW5pdEluamVjdGlvbiA9IHdpbmRvd1tJTklUX0ZVTkNfTkFNRV07XG4vKiogQXZvaWQgcnVubmluZyByZXBlYXRlZGx5IGR1ZSB0byBuZXcgYGRvY3VtZW50RWxlbWVudGAgb3Igd2l0aCBkZWNsYXJhdGl2ZUNvbnRlbnQgaW4gQ2hyb21lLlxuICogVGhlIHByb3AncyBtb2RlIGlzIG92ZXJyaWRkZW4gdG8gYmUgdW5mb3JnZWFibGUgYnkgYSB1c2Vyc2NyaXB0IGluIGNvbnRlbnQgbW9kZS4gKi9cbmRlZmluZVByb3BlcnR5KHdpbmRvdywgSU5JVF9GVU5DX05BTUUsIHtcbiAgX19wcm90b19fOiBudWxsLFxuICB2YWx1ZTogMSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbn0pO1xuaWYgKElTX0ZJUkVGT1gpIHtcbiAgd2luZG93OjpvbihWQVVMVF9XUklURVIsIGV2dCA9PiB7XG4gICAgZXZ0OjpzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIWZyYW1lRXZlbnRXbmQpIHtcbiAgICAgIC8vIHNldHVwVmF1bHRJZCdzIGZpcnN0IGV2ZW50IGlzIHRoZSBmcmFtZSdzIGNvbnRlbnRXaW5kb3dcbiAgICAgIGZyYW1lRXZlbnRXbmQgPSBldnQ6OmdldFJlbGF0ZWRUYXJnZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2V0dXBWYXVsdElkJ3Mgc2Vjb25kIGV2ZW50IGlzIHRoZSB2YXVsdElkXG4gICAgICB0ZWxsQnJpZGdlVG9Xcml0ZVZhdWx0KGV2dDo6Z2V0RGV0YWlsKCksIGZyYW1lRXZlbnRXbmQpO1xuICAgICAgZnJhbWVFdmVudFduZDo6ZmlyZShuZXcgQ3VzdG9tRXZlbnRTYWZlKFZBVUxUX1dSSVRFUl9BQ0spKTtcbiAgICAgIGZyYW1lRXZlbnRXbmQgPSBudWxsO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG59IGVsc2Uge1xuICBzYWZlRGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBWQVVMVF9XUklURVIsIHtcbiAgICB2YWx1ZTogdGVsbEJyaWRnZVRvV3JpdGVWYXVsdCxcbiAgfSk7XG59XG5cbmJyaWRnZS5hZGRIYW5kbGVycyh7XG4gIC8qKlxuICAgKiBGRiBidWcgd29ya2Fyb3VuZCB0byBlbmFibGUgcHJvY2Vzc2luZyBvZiBzb3VyY2VVUkwgaW4gaW5qZWN0ZWQgcGFnZSBzY3JpcHRzXG4gICAqL1xuICBJbmplY3RMaXN0OiBJU19GSVJFRk9YICYmIGluamVjdExpc3QsXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdFBhZ2VTYW5kYm94KGNvbnRlbnRJZCwgd2ViSWQpIHtcbiAgY29uc3QgeyBjbG9uZUludG8gfSA9IGdsb2JhbDtcbiAgY29uc3QgdmF1bHRJZCA9IGdldFVuaXFJZFNhZmUoKTtcbiAgY29uc3QgaGFuZHNoYWtlSWQgPSBnZXRVbmlxSWRTYWZlKCk7XG4gIGlmICh1c2VPcGVuZXIod2luZG93Lm9wZW5lcikgfHwgdXNlT3BlbmVyKCFJU19UT1AgJiYgd2luZG93LnBhcmVudCkpIHtcbiAgICBzdGFydEhhbmRzaGFrZSgpO1xuICB9IGVsc2Uge1xuICAgIC8qIFNpdGVzIGNhbiBkbyB3aW5kb3cub3BlbihzYW1lT3JpZ2luVXJsLCdpZnJhbWVOYW1lT3JOZXdXaW5kb3dOYW1lJykub3BlbmVyPW51bGwsIHNwb29mIEpTXG4gICAgICogZW52aXJvbm1lbnQgYW5kIGVhc2lseSBoYWNrIGludG8gb3VyIGNvbW11bmljYXRpb24gY2hhbm5lbCBiZWZvcmUgb3VyIGNvbnRlbnQgc2NyaXB0cyBydW4uXG4gICAgICogQ29udGVudCBzY3JpcHRzIHdpbGwgc2VlIGBkb2N1bWVudC5vcGVuZXIgPSBudWxsYCwgbm90IHRoZSBvcmlnaW5hbCBvcGVuZXIsIHNvIHdlIGhhdmVcbiAgICAgKiB0byB1c2UgYW4gaWZyYW1lIHRvIGV4dHJhY3QgdGhlIHNhZmUgZ2xvYmFscy4gRGV0ZWN0aW9uIHZpYSBkb2N1bWVudC5yZWZlcnJlciB3b24ndCB3b3JrXG4gICAgICogaXMgaXQgY2FuIGJlIGVtcHRpZWQgYnkgdGhlIG9wZW5lciBwYWdlLCB0b28uICovXG4gICAgaW5qZWN0KHsgY29kZTogYHBhcmVudFtcIiR7dmF1bHRJZH1cIl0gPSBbdGhpc11gIH0sICgpID0+IHtcbiAgICAgIC8vIFNraXBwaW5nIHBhZ2UgaW5qZWN0aW9uIGluIEZGIGlmIG91ciBzY3JpcHQgZWxlbWVudCB3YXMgYmxvY2tlZCBieSBzaXRlJ3MgQ1NQXG4gICAgICBpZiAoIUlTX0ZJUkVGT1ggfHwgd2luZG93LndyYXBwZWRKU09iamVjdFt2YXVsdElkXSkge1xuICAgICAgICBzdGFydEhhbmRzaGFrZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBwYWdlSW5qZWN0YWJsZTtcblxuICBmdW5jdGlvbiB1c2VPcGVuZXIob3BlbmVyKSB7XG4gICAgbGV0IG9rO1xuICAgIGlmIChvcGVuZXIgJiYgZGVzY3JpYmVQcm9wZXJ0eShvcGVuZXIubG9jYXRpb24sICdocmVmJykuZ2V0KSB7XG4gICAgICAvLyBUT0RPOiBVc2UgYSBzaW5nbGUgUG9pbnRlckV2ZW50IHdpdGggYHBvaW50ZXJUeXBlOiB2YXVsdElkYCB3aGVuIHN0cmljdF9taW5fdmVyc2lvbiA+PSA1OVxuICAgICAgaWYgKElTX0ZJUkVGT1gpIHtcbiAgICAgICAgY29uc3Qgc2V0T2sgPSAoKSA9PiB7IG9rID0gdHJ1ZTsgfTtcbiAgICAgICAgd2luZG93OjpvbihWQVVMVF9XUklURVJfQUNLLCBzZXRPaywgdHJ1ZSk7XG4gICAgICAgIG9wZW5lcjo6ZmlyZShuZXcgTW91c2VFdmVudFNhZmUoVkFVTFRfV1JJVEVSLCB7IHJlbGF0ZWRUYXJnZXQ6IHdpbmRvdyB9KSk7XG4gICAgICAgIG9wZW5lcjo6ZmlyZShuZXcgQ3VzdG9tRXZlbnRTYWZlKFZBVUxUX1dSSVRFUiwgeyBkZXRhaWw6IHZhdWx0SWQgfSkpO1xuICAgICAgICB3aW5kb3c6Om9mZihWQVVMVF9XUklURVJfQUNLLCBzZXRPaywgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvayA9IG9wZW5lcltWQVVMVF9XUklURVJdO1xuICAgICAgICBpZiAob2spIG9rKHZhdWx0SWQsIHdpbmRvdyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvaztcbiAgfVxuICAvKiogQSBwYWdlIGNhbiByZWFkIG91ciBzY3JpcHQncyB0ZXh0Q29udGVudCBpbiBhIHNhbWUtb3JpZ2luIGlmcmFtZSB2aWEgRE9NTm9kZVJlbW92ZWQgZXZlbnQuXG4gICAqIERpcmVjdGx5IHByZXZlbnRpbmcgaXQgd291bGQgcmVxdWlyZSByZWRlZmluaW5nIH4yMCBET00gbWV0aG9kcyBpbiB0aGUgcGFyZW50LlxuICAgKiBJbnN0ZWFkLCB3ZSdsbCBzZW5kIHRoZSBpZHMgdmlhIGEgdGVtcG9yYXJ5IGhhbmRzaGFrZUlkIGV2ZW50LCB0byB3aGljaCB0aGUgd2ViLWJyaWRnZVxuICAgKiB3aWxsIGxpc3RlbiBvbmx5IGR1cmluZyBpdHMgaW5pdGlhbCBwaGFzZSB1c2luZyB2YXVsdC1wcm90ZWN0ZWQgRE9NIG1ldGhvZHMuXG4gICAqIFRPRE86IHNpbXBsaWZ5IHRoaXMgd2hlbiBzdHJpY3RfbWluX3ZlcnNpb24gPj0gNjMgKGF0dGFjaFNoYWRvdyBpbiBGRikgKi9cbiAgZnVuY3Rpb24gc3RhcnRIYW5kc2hha2UoKSB7XG4gICAgLyogV2l0aCBgb25jZWAgdGhlIGxpc3RlbmVyIGlzIHJlbW92ZWQgYmVmb3JlIERPTU5vZGVJbnNlcnRlZCBpcyBkaXNwYXRjaGVkIGJ5IGFwcGVuZENoaWxkLFxuICAgICAqIG90aGVyd2lzZSBhIHNhbWUtb3JpZ2luIHBhcmVudCBwYWdlIGNvdWxkIHVzZSBpdCB0byBzcG9vZiB0aGUgaGFuZHNoYWtlLiAqL1xuICAgIHdpbmRvdzo6b24oaGFuZHNoYWtlSWQsIGhhbmRzaGFrZXIsIHsgY2FwdHVyZTogdHJ1ZSwgb25jZTogdHJ1ZSB9KTtcbiAgICBpbmplY3Qoe1xuICAgICAgY29kZTogYCgke1ZNSW5pdEluamVjdGlvbn0oJHtJU19GSVJFRk9YfSwnJHtoYW5kc2hha2VJZH0nLCcke3ZhdWx0SWR9JykpKClgXG4gICAgICAgICsgYFxcbi8vIyBzb3VyY2VVUkw9JHtWTV9VVUlEfXNhbmRib3gvaW5qZWN0ZWQtd2ViLmpzYCxcbiAgICB9KTtcbiAgICAvLyBDbGVhbiB1cCBpbiBjYXNlIENTUCBwcmV2ZW50ZWQgdGhlIHNjcmlwdCBmcm9tIHJ1bm5pbmdcbiAgICB3aW5kb3c6Om9mZihoYW5kc2hha2VJZCwgaGFuZHNoYWtlciwgdHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZHNoYWtlcihldnQpIHtcbiAgICBwYWdlSW5qZWN0YWJsZSA9IHRydWU7XG4gICAgZXZ0OjpzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBiaW5kRXZlbnRzKGNvbnRlbnRJZCwgd2ViSWQsIGJyaWRnZSwgY2xvbmVJbnRvKTtcbiAgICBmaXJlQnJpZGdlRXZlbnQoaGFuZHNoYWtlSWQgKyBwcm9jZXNzLmVudi5IQU5EU0hBS0VfQUNLLCBbd2ViSWQsIGNvbnRlbnRJZF0sIGNsb25lSW50byk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudElkXG4gKiBAcGFyYW0ge3N0cmluZ30gd2ViSWRcbiAqIEBwYXJhbSB7Vk1HZXRJbmplY3RlZERhdGF9IGRhdGFcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluamVjdFNjcmlwdHMoY29udGVudElkLCB3ZWJJZCwgZGF0YSkge1xuICBjb25zdCB7IGhhc01vcmUsIGluZm8gfSA9IGRhdGE7XG4gIHJlYWxtcyA9IHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgLyoqIEBuYW1lc3BhY2UgVk1JbmplY3Rpb25SZWFsbSAqL1xuICAgIFtJTkpFQ1RfQ09OVEVOVF06IHtcbiAgICAgIGluamVjdGFibGU6IHRydWUsXG4gICAgICAvKiogQG5hbWVzcGFjZSBWTVJ1bkF0TGlzdHMgKi9cbiAgICAgIGxpc3RzOiBjb250TGlzdHMgPSB7IHN0YXJ0OiBbXSwgYm9keTogW10sIGVuZDogW10sIGlkbGU6IFtdIH0sXG4gICAgICBpczogMCxcbiAgICAgIGluZm8sXG4gICAgfSxcbiAgICBbSU5KRUNUX1BBR0VdOiB7XG4gICAgICBpbmplY3RhYmxlOiBwYWdlSW5qZWN0YWJsZSxcbiAgICAgIGxpc3RzOiBwZ0xpc3RzID0geyBzdGFydDogW10sIGJvZHk6IFtdLCBlbmQ6IFtdLCBpZGxlOiBbXSB9LFxuICAgICAgaXM6IDAsXG4gICAgICBpbmZvLFxuICAgIH0sXG4gIH07XG4gIGFzc2lnbihicmlkZ2UuY2FjaGUsIGRhdGEuY2FjaGUpO1xuICBjb25zdCBmZWVkYmFjayA9IGRhdGEuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHNjcmlwdC5wcm9wcztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBjb25zdCByZWFsbSA9IElOSkVDVF9NQVBQSU5HW3NjcmlwdC5pbmplY3RJbnRvXS5maW5kKGtleSA9PiByZWFsbXNba2V5XT8uaW5qZWN0YWJsZSk7XG4gICAgLy8gSWYgdGhlIHNjcmlwdCB3YW50cyB0aGlzIHNwZWNpZmljIHJlYWxtLCB3aGljaCBpcyB1bmF2YWlsYWJsZSwgd2Ugd29uJ3QgaW5qZWN0IGl0IGF0IGFsbFxuICAgIGlmIChyZWFsbSkge1xuICAgICAgY29uc3QgeyBwYXRoTWFwIH0gPSBzY3JpcHQuY3VzdG9tO1xuICAgICAgY29uc3QgcmVhbG1EYXRhID0gcmVhbG1zW3JlYWxtXTtcbiAgICAgIHJlYWxtRGF0YS5saXN0c1tzY3JpcHQucnVuQXRdLnB1c2goc2NyaXB0KTsgLy8gJ3N0YXJ0JyBvciAnYm9keScgcGVyIGdldFNjcmlwdHNCeVVSTCgpXG4gICAgICByZWFsbURhdGEuaXMgPSB0cnVlO1xuICAgICAgaWYgKHBhdGhNYXApIGJyaWRnZS5wYXRoTWFwc1tpZF0gPSBwYXRoTWFwO1xuICAgICAgYnJpZGdlLmFsbG93U2NyaXB0KHNjcmlwdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyaWRnZS5mYWlsZWRJZHMucHVzaChpZCk7XG4gICAgfVxuICAgIHJldHVybiBbc2NyaXB0LmRhdGFLZXksIHJlYWxtID09PSBJTkpFQ1RfQ09OVEVOVF07XG4gIH0pO1xuICBjb25zdCBtb3JlRGF0YSA9IHNlbmRDbWQoJ0luamVjdGlvbkZlZWRiYWNrJywge1xuICAgIGZlZWRiYWNrLFxuICAgIGZlZWRJZDogZGF0YS5mZWVkSWQsXG4gICAgZm9yY2VDb250ZW50OiAhcGFnZUluamVjdGFibGUsXG4gIH0pO1xuICAvLyBzYXZpbmcgd2hpbGUgc2FmZVxuICBjb25zdCBoYXNJbnZva2VyID0gcmVhbG1zW0lOSkVDVF9DT05URU5UXS5pcztcbiAgaWYgKGhhc0ludm9rZXIpIHtcbiAgICBzZXR1cENvbnRlbnRJbnZva2VyKGNvbnRlbnRJZCwgd2ViSWQpO1xuICB9XG4gIC8vIFVzaW5nIGEgY2FsbGJhY2sgdG8gYXZvaWQgYSBtaWNyb3Rhc2sgdGljayB3aGVuIHRoZSByb290IGVsZW1lbnQgZXhpc3RzIG9yIGFwcGVhcnMuXG4gIGF3YWl0IG9uRWxlbWVudCgnKicsIGFzeW5jICgpID0+IHtcbiAgICBpbmplY3RBbGwoJ3N0YXJ0Jyk7XG4gICAgY29uc3Qgb25Cb2R5ID0gKHBnTGlzdHMuYm9keS5sZW5ndGggfHwgY29udExpc3RzLmJvZHkubGVuZ3RoKVxuICAgICAgJiYgb25FbGVtZW50KCdib2R5JywgaW5qZWN0QWxsLCAnYm9keScpO1xuICAgIC8vIGRvY3VtZW50LWVuZCwgLWlkbGVcbiAgICBpZiAoaGFzTW9yZSkge1xuICAgICAgZGF0YSA9IGF3YWl0IG1vcmVEYXRhO1xuICAgICAgaWYgKGRhdGEpIGF3YWl0IGluamVjdERlbGF5ZWRTY3JpcHRzKCFoYXNJbnZva2VyICYmIGNvbnRlbnRJZCwgd2ViSWQsIGRhdGEpO1xuICAgIH1cbiAgICBpZiAob25Cb2R5KSB7XG4gICAgICBhd2FpdCBvbkJvZHk7XG4gICAgfVxuICAgIHJlYWxtcyA9IG51bGw7XG4gICAgcGdMaXN0cyA9IG51bGw7XG4gICAgY29udExpc3RzID0gbnVsbDtcbiAgfSk7XG4gIFZNSW5pdEluamVjdGlvbiA9IG51bGw7IC8vIHJlbGVhc2UgZm9yIEdDXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluamVjdERlbGF5ZWRTY3JpcHRzKGNvbnRlbnRJZCwgd2ViSWQsIHsgY2FjaGUsIHNjcmlwdHMgfSkge1xuICBhc3NpZ24oYnJpZGdlLmNhY2hlLCBjYWNoZSk7XG4gIGxldCBuZWVkc0ludm9rZXI7XG4gIHNjcmlwdHM6OmZvckVhY2goc2NyaXB0ID0+IHtcbiAgICBjb25zdCB7IGNvZGUsIHJ1bkF0IH0gPSBzY3JpcHQ7XG4gICAgY29uc3QgeyBpZCB9ID0gc2NyaXB0LnByb3BzO1xuICAgIGlmICghY29kZSkge1xuICAgICAgbmVlZHNJbnZva2VyID0gdHJ1ZTtcbiAgICAgIGNvbnRMaXN0c1tydW5BdF06OnB1c2goc2NyaXB0KTtcbiAgICB9IGVsc2UgaWYgKHBhZ2VJbmplY3RhYmxlKSB7XG4gICAgICBwZ0xpc3RzW3J1bkF0XTo6cHVzaChzY3JpcHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmlkZ2UuZmFpbGVkSWRzOjpwdXNoKGlkKTtcbiAgICAgIGJyaWRnZS5pZHM6OnB1c2goaWQpO1xuICAgIH1cbiAgfSk7XG4gIGlmIChkb2N1bWVudDo6Z2V0UmVhZHlTdGF0ZSgpID09PSAnbG9hZGluZycpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZVNhZmUocmVzb2x2ZSA9PiB7XG4gICAgICAvKiBTaW5jZSBtb3N0IHNpdGVzIGxpc3RlbiB0byBET01Db250ZW50TG9hZGVkIG9uIGBkb2N1bWVudGAsIHdlIGxldCB0aGVtIHJ1biBmaXJzdFxuICAgICAgICogYnkgbGlzdGVuaW5nIG9uIGB3aW5kb3dgIHdoaWNoIGZvbGxvd3MgYGRvY3VtZW50YCB3aGVuIHRoZSBldmVudCBidWJibGVzIHVwLiAqL1xuICAgICAgd2luZG93OjpvbignRE9NQ29udGVudExvYWRlZCcsIHJlc29sdmUsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgICBhd2FpdCAwOyAvLyBsZXQgdGhlIHNpdGUncyBsaXN0ZW5lcnMgb24gYHdpbmRvd2AgcnVuIGZpcnN0XG4gIH1cbiAgaWYgKG5lZWRzSW52b2tlciAmJiBjb250ZW50SWQpIHtcbiAgICBzZXR1cENvbnRlbnRJbnZva2VyKGNvbnRlbnRJZCwgd2ViSWQpO1xuICB9XG4gIHNjcmlwdHM6OmZvckVhY2goYnJpZGdlLmFsbG93U2NyaXB0KTtcbiAgaW5qZWN0QWxsKCdlbmQnKTtcbiAgaW5qZWN0QWxsKCdpZGxlJyk7XG59XG5cbmZ1bmN0aW9uIGluamVjdChpdGVtLCBpZnJhbWVDYikge1xuICBjb25zdCBzY3JpcHQgPSBtYWtlRWxlbSgnc2NyaXB0JywgaXRlbS5jb2RlKTtcbiAgLy8gRmlyZWZveCBpZ25vcmVzIHNvdXJjZVVSTCBjb21tZW50IHdoZW4gYSBzeW50YXggZXJyb3Igb2NjdXJzIHNvIHdlJ2xsIHByaW50IHRoZSBuYW1lIG1hbnVhbGx5XG4gIGNvbnN0IG9uRXJyb3IgPSBJU19GSVJFRk9YICYmICFpZnJhbWVDYiAmJiAoZSA9PiB7XG4gICAgY29uc3QgeyBzdGFjayB9ID0gZS5lcnJvcjtcbiAgICBpZiAoIXN0YWNrIHx8IGAke3N0YWNrfWAuaW5jbHVkZXMoVk1fVVVJRCkpIHtcbiAgICAgIGxvZygnZXJyb3InLCBbaXRlbS5kaXNwbGF5TmFtZV0sIGUuZXJyb3IpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGRpdiA9IG1ha2VFbGVtKCdkaXYnKTtcbiAgLy8gSGlkaW5nIHRoZSBzY3JpcHQncyBjb2RlIGZyb20gbXV0YXRpb24gZXZlbnRzIGxpa2UgRE9NTm9kZUluc2VydGVkIG9yIERPTU5vZGVSZW1vdmVkXG4gIGNvbnN0IGRpdlJvb3QgPSBpbmplY3RlZFJvb3QgfHwgKFxuICAgIGF0dGFjaFNoYWRvd1xuICAgICAgPyBkaXY6OmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdjbG9zZWQnIH0pXG4gICAgICA6IGRpdlxuICApO1xuICBsZXQgaWZyYW1lO1xuICBpZiAoaWZyYW1lQ2IpIHtcbiAgICAvKiBQcmV2ZW50aW5nIG90aGVyIGNvbnRlbnQgc2NyaXB0cyAqLy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zY3JpcHQtdXJsXG4gICAgaWZyYW1lID0gbWFrZUVsZW0oJ2lmcmFtZScsIHsgc3JjOiAnamF2YXNjcmlwdDp2b2lkIDAnIH0pO1xuICAgIC8qIEluIEZGIHRoZSBvcGVuZXIgcmVjZWl2ZXMgRE9NTm9kZUluc2VydGVkIGF0dGFjaGVkIGF0IGNyZWF0aW9uIHNvIGl0IGNhbiBzZWUgd2luZG93WzBdICovXG4gICAgaWYgKCFJU19GSVJFRk9YKSB7XG4gICAgICBkaXZSb290OjphcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkaXZSb290OjphcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG4gIGlmIChvbkVycm9yKSB7XG4gICAgd2luZG93OjpvbignZXJyb3InLCBvbkVycm9yKTtcbiAgfVxuICBpZiAoIWluamVjdGVkUm9vdCkge1xuICAgIC8vIFdoZW4gdXNpbmcgZGVjbGFyYXRpdmVDb250ZW50IHRoZXJlJ3Mgbm8gZG9jdW1lbnRFbGVtZW50IHNvIHdlJ2xsIGFwcGVuZCB0byBgZG9jdW1lbnRgXG4gICAgKGVsZW1CeVRhZygnKicpIHx8IGRvY3VtZW50KTo6YXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuICBpZiAob25FcnJvcikge1xuICAgIHdpbmRvdzo6b2ZmKCdlcnJvcicsIG9uRXJyb3IpO1xuICB9XG4gIGlmIChpZnJhbWVDYikge1xuICAgIGluamVjdGVkUm9vdCA9IGRpdlJvb3Q7XG4gICAgaWYgKElTX0ZJUkVGT1gpIGRpdlJvb3Q6OmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgaWZyYW1lLmNvbnRlbnREb2N1bWVudDo6Z2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKVswXTo6YXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICBpZnJhbWVDYigpO1xuICAgIGlmcmFtZTo6cmVtb3ZlKCk7XG4gICAgaW5qZWN0ZWRSb290ID0gbnVsbDtcbiAgfVxuICAvLyBDbGVhbiB1cCBpbiBjYXNlIHNvbWV0aGluZyBkaWRuJ3QgbG9hZFxuICBzY3JpcHQ6OnJlbW92ZSgpO1xuICBkaXY6OnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBpbmplY3RBbGwocnVuQXQpIHtcbiAgZm9yIChjb25zdCByZWFsbSBpbiByZWFsbXMpIHsgLyogcHJvdG8gaXMgbnVsbCAqLy8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ3VhcmQtZm9yLWluXG4gICAgY29uc3QgcmVhbG1EYXRhID0gcmVhbG1zW3JlYWxtXTtcbiAgICBjb25zdCBpdGVtcyA9IHJlYWxtRGF0YS5saXN0c1tydW5BdF07XG4gICAgY29uc3QgeyBpbmZvIH0gPSByZWFsbURhdGE7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xuICAgICAgYnJpZGdlLnBvc3QoJ1NjcmlwdERhdGEnLCB7IGluZm8sIGl0ZW1zLCBydW5BdCB9LCByZWFsbSk7XG4gICAgICBpZiAocmVhbG0gPT09IElOSkVDVF9QQUdFICYmICFJU19GSVJFRk9YKSB7XG4gICAgICAgIGluamVjdExpc3QocnVuQXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocnVuQXQgIT09ICdzdGFydCcgJiYgY29udExpc3RzW3J1bkF0XS5sZW5ndGgpIHtcbiAgICBicmlkZ2UucG9zdCgnUnVuQXQnLCBydW5BdCwgSU5KRUNUX0NPTlRFTlQpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluamVjdExpc3QocnVuQXQpIHtcbiAgY29uc3QgbGlzdCA9IHBnTGlzdHNbcnVuQXRdO1xuICAvLyBOb3QgdXNpbmcgZm9yLW9mIGJlY2F1c2Ugd2UgZG9uJ3Qga25vdyBpZiBAQGl0ZXJhdG9yIGlzIHNhZmUuXG4gIGZvciAobGV0IGkgPSAwLCBpdGVtOyAoaXRlbSA9IGxpc3RbaV0pOyBpICs9IDEpIHtcbiAgICBpZiAoaXRlbS5jb2RlKSB7XG4gICAgICBpZiAocnVuQXQgPT09ICdpZGxlJykgYXdhaXQgc2VuZENtZCgnU2V0VGltZW91dCcsIDApO1xuICAgICAgaWYgKHJ1bkF0ID09PSAnZW5kJykgYXdhaXQgMDtcbiAgICAgIGluamVjdChpdGVtKTtcbiAgICAgIGl0ZW0uY29kZSA9ICcnO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cENvbnRlbnRJbnZva2VyKGNvbnRlbnRJZCwgd2ViSWQpIHtcbiAgY29uc3QgaW52b2tlQ29udGVudCA9IFZNSW5pdEluamVjdGlvbihJU19GSVJFRk9YKSh3ZWJJZCwgY29udGVudElkLCBicmlkZ2Uub25IYW5kbGUpO1xuICBjb25zdCBwb3N0VmlhQnJpZGdlID0gYnJpZGdlLnBvc3Q7XG4gIGJyaWRnZS5wb3N0ID0gKGNtZCwgcGFyYW1zLCByZWFsbSwgbm9kZSkgPT4ge1xuICAgIGNvbnN0IGZuID0gcmVhbG0gPT09IElOSkVDVF9DT05URU5UXG4gICAgICA/IGludm9rZUNvbnRlbnRcbiAgICAgIDogcG9zdFZpYUJyaWRnZTtcbiAgICBmbihjbWQsIHBhcmFtcywgdW5kZWZpbmVkLCBub2RlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGVsbEJyaWRnZVRvV3JpdGVWYXVsdCh2YXVsdElkLCB3bmQpIHtcbiAgYnJpZGdlLnBvc3QoJ1dyaXRlVmF1bHQnLCB2YXVsdElkLCBJTkpFQ1RfUEFHRSwgd25kKTtcbn1cbiIsImltcG9ydCBicmlkZ2UgZnJvbSAnLi9icmlkZ2UnO1xuaW1wb3J0IHsgc2VuZENtZCB9IGZyb20gJy4vdXRpbC1jb250ZW50JztcblxuY29uc3Qgbm90aWZpY2F0aW9ucyA9IGNyZWF0ZU51bGxPYmooKTtcblxuYnJpZGdlLmFkZEhhbmRsZXJzKHtcbiAgYXN5bmMgTm90aWZpY2F0aW9uKG9wdGlvbnMsIHJlYWxtKSB7XG4gICAgY29uc3QgbmlkID0gYXdhaXQgc2VuZENtZCgnTm90aWZpY2F0aW9uJywgb3B0aW9ucyk7XG4gICAgbm90aWZpY2F0aW9uc1tuaWRdID0geyBpZDogb3B0aW9ucy5pZCwgcmVhbG0gfTtcbiAgfSxcbiAgUmVtb3ZlTm90aWZpY2F0aW9uKGlkKSB7XG4gICAgZm9yIChjb25zdCBuaWQgaW4gbm90aWZpY2F0aW9ucykge1xuICAgICAgaWYgKG5vdGlmaWNhdGlvbnNbbmlkXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgZGVsZXRlIG5vdGlmaWNhdGlvbnNbbmlkXTtcbiAgICAgICAgcmV0dXJuIHNlbmRDbWQoJ1JlbW92ZU5vdGlmaWNhdGlvbicsIG5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxufSk7XG5cbmJyaWRnZS5hZGRCYWNrZ3JvdW5kSGFuZGxlcnMoe1xuICBOb3RpZmljYXRpb25DbGljayhuaWQpIHtcbiAgICBjb25zdCBuID0gbm90aWZpY2F0aW9uc1tuaWRdO1xuICAgIGlmIChuKSBicmlkZ2UucG9zdCgnTm90aWZpY2F0aW9uQ2xpY2tlZCcsIG4uaWQsIG4ucmVhbG0pO1xuICB9LFxuICBOb3RpZmljYXRpb25DbG9zZShuaWQpIHtcbiAgICBjb25zdCBuID0gbm90aWZpY2F0aW9uc1tuaWRdO1xuICAgIGlmIChuKSB7XG4gICAgICBicmlkZ2UucG9zdCgnTm90aWZpY2F0aW9uQ2xvc2VkJywgbi5pZCwgbi5yZWFsbSk7XG4gICAgICBkZWxldGUgbm90aWZpY2F0aW9uc1tuaWRdO1xuICAgIH1cbiAgfSxcbn0pO1xuIiwiaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5pbXBvcnQgeyBnZXRGdWxsVXJsLCBtYWtlRWxlbSwgc2VuZENtZCB9IGZyb20gJy4vdXRpbC1jb250ZW50JztcblxuY29uc3Qge1xuICBmZXRjaDogZmV0Y2hTYWZlLFxufSA9IGdsb2JhbDtcbmNvbnN0IHsgYXJyYXlCdWZmZXI6IGdldEFycmF5QnVmZmVyLCBibG9iOiBnZXRCbG9iIH0gPSBSZXNwb25zZVByb3RvO1xuY29uc3QgeyBjcmVhdGVPYmplY3RVUkwsIHJldm9rZU9iamVjdFVSTCB9ID0gVVJMO1xuXG5jb25zdCByZXF1ZXN0cyA9IGNyZWF0ZU51bGxPYmooKTtcbmxldCBkb3dubG9hZENoYWluID0gcHJvbWlzZVJlc29sdmUoKTtcblxuYnJpZGdlLmFkZEhhbmRsZXJzKHtcbiAgSHR0cFJlcXVlc3QobXNnLCByZWFsbSkge1xuICAgIHJlcXVlc3RzW21zZy5pZF0gPSB7XG4gICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICByZWFsbSxcbiAgICAgIHdhbnRzQmxvYjogbXNnLnhoclR5cGUgPT09ICdibG9iJyxcbiAgICB9OjpwaWNrSW50b1RoaXMobXNnLCBbXG4gICAgICAnZXZlbnRzVG9Ob3RpZnknLFxuICAgICAgJ2ZpbGVOYW1lJyxcbiAgICBdKTtcbiAgICBtc2cudXJsID0gZ2V0RnVsbFVybChtc2cudXJsKTtcbiAgICBzZW5kQ21kKCdIdHRwUmVxdWVzdCcsIG1zZyk7XG4gIH0sXG4gIEFib3J0UmVxdWVzdDogdHJ1ZSxcbn0pO1xuXG5icmlkZ2UuYWRkQmFja2dyb3VuZEhhbmRsZXJzKHtcbiAgYXN5bmMgSHR0cFJlcXVlc3RlZChtc2cpIHtcbiAgICBjb25zdCB7IGlkLCBjaHVuayB9ID0gbXNnO1xuICAgIGNvbnN0IHJlcSA9IHJlcXVlc3RzW2lkXTtcbiAgICBpZiAoIXJlcSkgcmV0dXJuO1xuICAgIGlmIChjaHVuaykge1xuICAgICAgcmVjZWl2ZUNodW5rKHJlcSwgY2h1bmspO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKG1zZy5udW1DaHVua3MgfHwgMSkgPT09IDEpIHtcbiAgICAgIHJlcS5nb3RDaHVua3MgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB7IGJsb2JiZWQsIGRhdGEsIGNodW5rZWQsIHR5cGUsIGRvd25sb2FkSWQgfSA9IG1zZztcblxuICAgIGlmIChkb3dubG9hZElkKSB7XG4gICAgICAvLyBicm93c2VyIHdpbGwgZG93bmxvYWRcbiAgICAgIGJyaWRnZS5wb3N0KCdIdHRwUmVxdWVzdGVkJywgbXNnLCByZXEucmVhbG0pO1xuICAgICAgaWYgKG1zZy50eXBlID09PSAnbG9hZCcpIGRlbGV0ZSByZXF1ZXN0c1tpZF07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNMb2FkRW5kID0gdHlwZSA9PT0gJ2xvYWRlbmQnO1xuICAgIC8vIG9ubHkgQ09OVEVOVCByZWFsbSBjYW4gcmVhZCBibG9icyBmcm9tIGFuIGV4dGVuc2lvbjovLyBVUkxcbiAgICBjb25zdCByZXNwb25zZSA9IGRhdGFcbiAgICAgICYmIHJlcS5ldmVudHNUb05vdGlmeTo6aW5jbHVkZXModHlwZSlcbiAgICAgICYmIGRhdGEucmVzcG9uc2U7XG4gICAgLy8gbWVzc2FnZXMgd2lsbCBjb21lIHdoaWxlIGJsb2IgaXMgZmV0Y2hlZCBzbyB3ZSdsbCB0ZW1wb3JhcmlseSBzdG9yZSB0aGUgUHJvbWlzZVxuICAgIGNvbnN0IGltcG9ydGluZyA9IHJlc3BvbnNlICYmIChibG9iYmVkIHx8IGNodW5rZWQpO1xuICAgIGlmIChpbXBvcnRpbmcpIHtcbiAgICAgIHJlcS5iaW4gPSBibG9iYmVkXG4gICAgICAgID8gaW1wb3J0QmxvYihyZXEsIHJlc3BvbnNlKVxuICAgICAgICA6IHJlY2VpdmVBbGxDaHVua3MocmVxLCBtc2cpO1xuICAgIH1cbiAgICAvLyAuLi53aGljaCBjYW4gYmUgYXdhaXRlZCBpbiB0aGVzZSBzdWJzZXF1ZW50IG1lc3NhZ2VzXG4gICAgaWYgKGlzUHJvbWlzZShyZXEuYmluKSkge1xuICAgICAgcmVxLmJpbiA9IGF3YWl0IHJlcS5iaW47XG4gICAgfVxuICAgIC8vIElmIHRoZSB1c2VyIGluIGluY29nbml0byBzdXBwbGllZCBvbmx5IGBvbmxvYWRlbmRgIHRoZW4gaXQgYXJyaXZlcyBmaXJzdCwgZm9sbG93ZWQgYnkgY2h1bmtzXG4gICAgLy8gSWYgdGhlIHVzZXIgc3VwcGxpZWQgYW55IGV2ZW50IGJlZm9yZSBgbG9hZGVuZGAsIGFsbCBjaHVua3MgZmluaXNoIGJlZm9yZSBgbG9hZGVuZGAgYXJyaXZlc1xuICAgIGlmIChpc0xvYWRFbmQpIHtcbiAgICAgIC8vIGxvYWRlbmQncyBicmlkZ2UucG9zdCgpIHNob3VsZCBydW4gbGFzdFxuICAgICAgYXdhaXQgMDtcbiAgICAgIHJlcS5nb3RMb2FkRW5kID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGltcG9ydGluZykge1xuICAgICAgZGF0YS5yZXNwb25zZSA9IHJlcS5iaW47XG4gICAgfVxuICAgIGNvbnN0IGZpbGVOYW1lID0gdHlwZSA9PT0gJ2xvYWQnICYmIHJlcS5iaW4gJiYgcmVxLmZpbGVOYW1lO1xuICAgIGlmIChmaWxlTmFtZSkge1xuICAgICAgcmVxLmZpbGVOYW1lID0gJyc7XG4gICAgICBhd2FpdCBkb3dubG9hZEJsb2IocmVxLmJpbiwgZmlsZU5hbWUpO1xuICAgIH1cbiAgICBicmlkZ2UucG9zdCgnSHR0cFJlcXVlc3RlZCcsIG1zZywgcmVxLnJlYWxtKTtcbiAgICBpZiAocmVxLmdvdExvYWRFbmQgJiYgcmVxLmdvdENodW5rcykge1xuICAgICAgZGVsZXRlIHJlcXVlc3RzW2lkXTtcbiAgICB9XG4gIH0sXG59KTtcblxuYXN5bmMgZnVuY3Rpb24gaW1wb3J0QmxvYihyZXEsIHVybCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgKGF3YWl0IGZldGNoU2FmZSh1cmwpKTo6KHJlcS53YW50c0Jsb2IgPyBnZXRCbG9iIDogZ2V0QXJyYXlCdWZmZXIpKCk7XG4gIHNlbmRDbWQoJ1Jldm9rZUJsb2InLCB1cmwpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZG93bmxvYWRCbG9iKGJsb2IsIGZpbGVOYW1lKSB7XG4gIGNvbnN0IHVybCA9IGNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgY29uc3QgYSA9IG1ha2VFbGVtKCdhJywge1xuICAgIGhyZWY6IHVybCxcbiAgICBkb3dubG9hZDogZmlsZU5hbWUsXG4gIH0pO1xuICBjb25zdCByZXMgPSBkb3dubG9hZENoYWluOjp0aGVuKCgpID0+IHtcbiAgICBhOjpmaXJlKG5ldyBNb3VzZUV2ZW50U2FmZSgnY2xpY2snKSk7XG4gICAgcmV2b2tlQmxvYkFmdGVyVGltZW91dCh1cmwpO1xuICB9KTtcbiAgLy8gRnJlcXVlbnQgZG93bmxvYWRzIGFyZSBpZ25vcmVkIGluIENocm9tZSBhbmQgcG9zc2libHkgb3RoZXIgYnJvd3NlcnNcbiAgZG93bmxvYWRDaGFpbiA9IHJlczo6dGhlbihzZW5kQ21kKCdTZXRUaW1lb3V0JywgMTUwKSk7XG4gIHJldHVybiByZXM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJldm9rZUJsb2JBZnRlclRpbWVvdXQodXJsKSB7XG4gIGF3YWl0IHNlbmRDbWQoJ1NldFRpbWVvdXQnLCAzMDAwKTtcbiAgcmV2b2tlT2JqZWN0VVJMKHVybCk7XG59XG5cbi8qKiBBcnJheUJ1ZmZlci9CbG9iIGluIENocm9tZSBpbmNvZ25pdG8gaXMgdHJhbnNmZXJyZWQgaW4gc3RyaW5nIGNodW5rcyAqL1xuZnVuY3Rpb24gcmVjZWl2ZUFsbENodW5rcyhyZXEsIG1zZykge1xuICByZXE6OnBpY2tJbnRvVGhpcyhtc2csIFsnZGF0YVNpemUnLCAnY29udGVudFR5cGUnXSk7XG4gIHJlcS5hcnIgPSBuZXcgVWludDhBcnJheVNhZmUocmVxLmRhdGFTaXplKTtcbiAgcHJvY2Vzc0NodW5rKHJlcSwgbXNnLmRhdGEucmVzcG9uc2UsIDApO1xuICByZXR1cm4gIXJlcS5nb3RDaHVua3NcbiAgICA/IG5ldyBQcm9taXNlU2FmZShyZXNvbHZlID0+IHsgcmVxLnJlc29sdmUgPSByZXNvbHZlOyB9KVxuICAgIDogZmluaXNoQ2h1bmtzKHJlcSk7XG59XG5cbmZ1bmN0aW9uIHJlY2VpdmVDaHVuayhyZXEsIHsgZGF0YSwgcG9zLCBsYXN0IH0pIHtcbiAgcHJvY2Vzc0NodW5rKHJlcSwgZGF0YSwgcG9zKTtcbiAgaWYgKGxhc3QpIHtcbiAgICByZXEuZ290Q2h1bmtzID0gdHJ1ZTtcbiAgICByZXEucmVzb2x2ZShmaW5pc2hDaHVua3MocmVxKSk7XG4gICAgZGVsZXRlIHJlcS5yZXNvbHZlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NDaHVuayhyZXEsIGRhdGEsIHBvcykge1xuICBjb25zdCB7IGFyciB9ID0gcmVxO1xuICBkYXRhID0gYXRvYlNhZmUoZGF0YSk7XG4gIGZvciAobGV0IGxlbiA9IGRhdGEubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSArPSAxLCBwb3MgKz0gMSkge1xuICAgIGFycltwb3NdID0gZGF0YTo6Y2hhckNvZGVBdChpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5pc2hDaHVua3MocmVxKSB7XG4gIGNvbnN0IHsgYXJyIH0gPSByZXE7XG4gIGRlbGV0ZSByZXEuYXJyO1xuICByZXR1cm4gcmVxLndhbnRzQmxvYlxuICAgID8gbmV3IEJsb2JTYWZlKFthcnJdLCB7IHR5cGU6IHJlcS5jb250ZW50VHlwZSB9KVxuICAgIDogYXJyLmJ1ZmZlcjtcbn1cbiIsImltcG9ydCBicmlkZ2UgZnJvbSAnLi9icmlkZ2UnO1xuaW1wb3J0IHsgc2VuZENtZCB9IGZyb20gJy4vdXRpbC1jb250ZW50JztcblxuY29uc3QgdGFiSWRzID0gY3JlYXRlTnVsbE9iaigpO1xuY29uc3QgdGFiS2V5cyA9IGNyZWF0ZU51bGxPYmooKTtcbmNvbnN0IHJlYWxtcyA9IGNyZWF0ZU51bGxPYmooKTtcblxuYnJpZGdlLmFkZEhhbmRsZXJzKHtcbiAgYXN5bmMgVGFiT3Blbih7IGtleSwgZGF0YSB9LCByZWFsbSkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGF3YWl0IHNlbmRDbWQoJ1RhYk9wZW4nLCBkYXRhKTtcbiAgICB0YWJJZHNba2V5XSA9IGlkO1xuICAgIHRhYktleXNbaWRdID0ga2V5O1xuICAgIHJlYWxtc1tpZF0gPSByZWFsbTtcbiAgfSxcbiAgVGFiQ2xvc2Uoa2V5KSB7XG4gICAgY29uc3QgaWQgPSB0YWJJZHNba2V5XTtcbiAgICAvLyAha2V5ID0+IGNsb3NlIGN1cnJlbnQgdGFiXG4gICAgLy8gaWQgPT4gY2xvc2UgdGFiIGJ5IGlkXG4gICAgaWYgKCFrZXkgfHwgaWQpIHNlbmRDbWQoJ1RhYkNsb3NlJywgeyBpZCB9KTtcbiAgfSxcbn0pO1xuXG5icmlkZ2UuYWRkQmFja2dyb3VuZEhhbmRsZXJzKHtcbiAgVGFiQ2xvc2VkKGlkKSB7XG4gICAgY29uc3Qga2V5ID0gdGFiS2V5c1tpZF07XG4gICAgY29uc3QgcmVhbG0gPSByZWFsbXNbaWRdO1xuICAgIGRlbGV0ZSByZWFsbXNbaWRdO1xuICAgIGRlbGV0ZSB0YWJLZXlzW2lkXTtcbiAgICBkZWxldGUgdGFiSWRzW2tleV07XG4gICAgaWYgKGtleSkgYnJpZGdlLnBvc3QoJ1RhYkNsb3NlZCcsIGtleSwgcmVhbG0pO1xuICB9LFxufSk7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1pbXBvcnRzXG5leHBvcnQgeyBzZW5kQ21kIH0gZnJvbSAnIy9jb21tb24nO1xuXG4vKiogV2hlbiBsb29raW5nIGZvciBkb2N1bWVudEVsZW1lbnQsIHVzZSAnKicgdG8gYWxzbyBzdXBwb3J0IFhNTCBwYWdlc1xuICogTm90ZSB0aGF0IHdlIGF2b2lkIHNwb29mZWQgcHJvdG90eXBlIGdldHRlcnMgYnkgdXNpbmcgaGFzT3duUHJvcGVydHksIGFuZCBub3QgdXNpbmcgYGxlbmd0aGBcbiAqIGFzIGl0IHNlYXJjaGVzIGZvciBBTEwgbWF0Y2hpbmcgbm9kZXMgd2hlbiB0aGlzIHRhZyB3YXNuJ3QgY2FjaGVkIGludGVybmFsbHkuICovXG5leHBvcnQgY29uc3QgZWxlbUJ5VGFnID0gKHRhZywgaSkgPT4gZ2V0T3duUHJvcChkb2N1bWVudDo6Z2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKSwgaSB8fCAwKTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiAtIGNhbGxiYWNrIHJ1bnMgaW1tZWRpYXRlbHksIHVubGlrZSBhIGNoYWluZWQgdGhlbigpXG4gKiBAcGFyYW0gez99IFthcmddXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGNvbnN0IG9uRWxlbWVudCA9ICh0YWcsIGNiLCBhcmcpID0+IG5ldyBQcm9taXNlU2FmZShyZXNvbHZlID0+IHtcbiAgaWYgKGVsZW1CeVRhZyh0YWcpKSB7XG4gICAgcmVzb2x2ZShjYihhcmcpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgIGlmIChlbGVtQnlUYWcodGFnKSkge1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHJlc29sdmUoY2IoYXJnKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gZG9jdW1lbnRFbGVtZW50IG1heSBiZSByZXBsYWNlZCBzbyB3ZSdsbCBvYnNlcnZlIHRoZSBlbnRpcmUgZG9jdW1lbnRcbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBtYWtlRWxlbSA9ICh0YWcsIGF0dHJzKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQ6OmNyZWF0ZUVsZW1lbnROUyhOU19IVE1MLCB0YWcpO1xuICBpZiAoYXR0cnMgJiYgaXNTdHJpbmcoYXR0cnMpKSB7XG4gICAgZWw6OmFwcGVuZChhdHRycyk7XG4gIH0gZWxzZSBpZiAoYXR0cnMpIHtcbiAgICBvYmplY3RLZXlzKGF0dHJzKTo6Zm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ3RleHRDb250ZW50JykgZWw6OmFwcGVuZChhdHRyc1trZXldKTtcbiAgICAgIGVsc2UgZWw6OnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlbDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGdWxsVXJsID0gdXJsID0+IChcbiAgbWFrZUVsZW0oJ2EnLCB7IGhyZWY6IHVybCB9KTo6Z2V0SHJlZigpXG4pO1xuXG5leHBvcnQgY29uc3QgZGVjb2RlUmVzb3VyY2UgPSAocmF3LCBpc0Jsb2IpID0+IHtcbiAgbGV0IHJlcztcbiAgY29uc3QgcG9zID0gcmF3OjpzdHJpbmdJbmRleE9mKCcsJyk7XG4gIGNvbnN0IGJpbiA9IGF0b2JTYWZlKHBvcyA8IDAgPyByYXcgOiByYXc6OnNsaWNlKHBvcyArIDEpKTtcbiAgaWYgKGlzQmxvYiB8fCAvW1xceDgwLVxceEZGXS86OnJlZ2V4cFRlc3QoYmluKSkge1xuICAgIGNvbnN0IGxlbiA9IGJpbi5sZW5ndGg7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheVNhZmUobGVuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBieXRlc1tpXSA9IGJpbjo6Y2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmVzID0gaXNCbG9iXG4gICAgICA/IG5ldyBCbG9iU2FmZShbYnl0ZXNdLCB7IHR5cGU6IHBvcyA8IDAgPyAnJyA6IHJhdzo6c2xpY2UoMCwgcG9zKSB9KVxuICAgICAgOiBuZXcgVGV4dERlY29kZXJTYWZlKCk6OnRkRGVjb2RlKGJ5dGVzKTtcbiAgfSBlbHNlIHsgLy8gcHVyZSBBU0NJSVxuICAgIHJlcyA9IGJpbjtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcbiIsImltcG9ydCAnIy9jb21tb24vYnJvd3Nlcic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1pbXBvcnRzXG5pbXBvcnQgeyBzZW5kQ21kIH0gZnJvbSAnIy9jb21tb24nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtaW1wb3J0c1xuaW1wb3J0ICcuL2NvbnRlbnQnO1xuXG4vLyBTY3JpcHQgaW5zdGFsbGF0aW9uIGluIEZpcmVmb3ggYXMgaXQgZG9lcyBub3Qgc3VwcG9ydCBgb25CZWZvcmVSZXF1ZXN0YCBmb3IgYGZpbGU6YFxuY29uc3QgdXJsID0gSVNfRklSRUZPWCAmJiBJU19UT1AgJiYgZ2xvYmFsLmxvY2F0aW9uLmhyZWY7XG5pZiAodXJsXG4mJiAvXmZpbGU6Lzo6cmVnZXhwVGVzdCh1cmwpIC8vIEVuc3VyZSBub3QgYSBsb2NhbCBmaWxlXG4mJiAvXFwudXNlclxcLmpzJC86OnJlZ2V4cFRlc3QodXJsKSkgeyAvLyBVcmwgZW5kcyB3aXRoIHVzZXIuanMgc2hvdWxkIGJlIGEgc2NyaXB0XG4gIChhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYnJvd3NlcixcbiAgICAgIGZldGNoLFxuICAgICAgaGlzdG9yeSxcbiAgICAgIGRvY3VtZW50OiB7IHJlZmVycmVyIH0sXG4gICAgfSA9IGdsb2JhbDtcbiAgICBjb25zdCB7IHRleHQ6IGdldFRleHQgfSA9IFJlc3BvbnNlUHJvdG87XG4gICAgY29uc3QgZmV0Y2hPcHRzID0geyBtb2RlOiAnc2FtZS1vcmlnaW4nIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGZldGNoT3B0cyk7XG4gICAgaWYgKCEvamF2YXNjcmlwdHxedGV4dFxcL3BsYWlufF4kLzo6cmVnZXhwVGVzdChyZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykgfHwgJycpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBvbGRDb2RlO1xuICAgIGxldCBjb2RlID0gYXdhaXQgcmVzcG9uc2U6OmdldFRleHQoKTtcbiAgICBpZiAoIS89PXVzZXJzY3JpcHQ9PS9pOjpyZWdleHBUZXN0KGNvZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHNlbmRDbWQoJ0NvbmZpcm1JbnN0YWxsJywgeyBjb2RlLCB1cmwsIGZyb206IHJlZmVycmVyIH0pO1xuICAgIC8vIEZGNjgrIGRvZXNuJ3QgYWxsb3cgZXh0ZW5zaW9uIHBhZ2VzIHRvIGdldCBmaWxlOiBVUkxzIGFueW1vcmUgc28gd2UgbmVlZCB0byB0cmFjayBpdCBoZXJlXG4gICAgLy8gKGRldGVjdGluZyBGRjY4IGJ5IGEgZmVhdHVyZSBiZWNhdXNlIHdlIGNhbid0IHVzZSBnZXRCcm93c2VySW5mbyBoZXJlIGFuZCBVQSBtYXkgYmUgYWx0ZXJlZClcbiAgICBpZiAoYnJvd3Nlci5zdG9yYWdlLm1hbmFnZWQpIHtcbiAgICAgIC8qKiBAcGFyYW0ge2Nocm9tZS5ydW50aW1lLlBvcnR9ICovXG4gICAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xuICAgICAgICBpZiAocG9ydC5uYW1lICE9PSAnRmV0Y2hTZWxmJykgcmV0dXJuO1xuICAgICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29kZSA9IGF3YWl0IChhd2FpdCBmZXRjaCh1cmwsIGZldGNoT3B0cykpOjpnZXRUZXh0KCk7XG4gICAgICAgICAgaWYgKGNvZGUgPT09IG9sZENvZGUpIHtcbiAgICAgICAgICAgIGNvZGUgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbGRDb2RlID0gY29kZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZShjb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBvbGRDb2RlID0gbnVsbDtcbiAgICAgICAgICAvLyBUaGUgdXNlciBtYXkgaGF2ZSByZWxvYWRlZCB0aGUgQ29uZmlybSBwYWdlIHNvIGxldCdzIGNoZWNrXG4gICAgICAgICAgaWYgKCFhd2FpdCBzZW5kQ21kKCdDaGVja0luc3RhbGxlclRhYicsIHBvcnQuc2VuZGVyLnRhYi5pZCkpIHtcbiAgICAgICAgICAgIGNsb3NlU2VsZigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2VTZWxmKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb3NlU2VsZigpIHtcbiAgICAgIGlmIChoaXN0b3J5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaGlzdG9yeS5nbygtMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZW5kQ21kKCdUYWJDbG9zZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKS5jYXRjaChjb25zb2xlLmVycm9yKTsgLy8gRkYgZG9lc24ndCBzaG93IGV4Y2VwdGlvbnMgaW4gY29udGVudCBzY3JpcHRzXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWltcG9ydHMgKi9cblxuLyogV0FSTklORyFcbiAqIE1ha2Ugc3VyZSBhbGwgcmUtZXhwb3J0ZWQgZnVuY3Rpb25zIHN1cnZpdmUgaW4gYSBzcG9vZmVkL2Jyb2tlbiBlbnZpcm9ubWVudDpcbiAqIHVzZSBvbmx5IDo6c2FmZSgpIGdsb2JhbHMgdGhhdCBhcmUgaW5pdGlhbGl6ZWQgaW4gYSBjb3JyZXNwb25kaW5nIHNhZmUtZ2xvYmFscyogZmlsZSxcbiAqIHVzZSBfX3Byb3RvX186bnVsbCBvciBnZXQvc2V0IG93biBwcm9wcyBleHBsaWNpdGx5LiAqL1xuXG5leHBvcnQge1xuICBkdW1wU2NyaXB0VmFsdWUsXG4gIGlzRW1wdHksXG59IGZyb20gJyMvY29tbW9uJztcbmV4cG9ydCAqIGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5cbmV4cG9ydCBjb25zdCBmaXJlQnJpZGdlRXZlbnQgPSAoZXZlbnRJZCwgbXNnLCBjbG9uZUludG8pID0+IHtcbiAgY29uc3QgZGV0YWlsID0gY2xvbmVJbnRvID8gY2xvbmVJbnRvKG1zZywgZG9jdW1lbnQpIDogbXNnO1xuICBjb25zdCBldnRNYWluID0gbmV3IEN1c3RvbUV2ZW50U2FmZShldmVudElkLCB7IF9fcHJvdG9fXzogbnVsbCwgZGV0YWlsIH0pO1xuICB3aW5kb3c6OmZpcmUoZXZ0TWFpbik7XG59O1xuXG5leHBvcnQgY29uc3QgYmluZEV2ZW50cyA9IChzcmNJZCwgZGVzdElkLCBicmlkZ2UsIGNsb25lSW50bykgPT4ge1xuICAvKiBVc2luZyBhIHNlcGFyYXRlIGV2ZW50IGZvciBgbm9kZWAgYmVjYXVzZSBDdXN0b21FdmVudCBjYW4ndCB0cmFuc2ZlciBub2RlcyxcbiAgICogd2hlcmVhcyBNb3VzZUV2ZW50IChhbmQgc29tZSBvdGhlcnMpIGNhbid0IHRyYW5zZmVyIG9iamVjdHMgd2l0aG91dCBzdHJpbmdpZmljYXRpb24uICovXG4gIGxldCBpbmNvbWluZ05vZGVFdmVudDtcbiAgd2luZG93OjpvbihzcmNJZCwgZSA9PiB7XG4gICAgZTo6c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgICBjb25zb2xlLmluZm8oYFticmlkZ2UuJHticmlkZ2UuaWRzID8gJ2hvc3QnIDogJ2d1ZXN0LndlYid9XSByZWNlaXZlZGAsXG4gICAgICAgIGluY29taW5nTm9kZUV2ZW50ID8gZTo6Z2V0UmVsYXRlZFRhcmdldCgpIDogZTo6Z2V0RGV0YWlsKCkpO1xuICAgIH1cbiAgICBpZiAoIWluY29taW5nTm9kZUV2ZW50KSB7XG4gICAgICAvLyBDdXN0b21FdmVudCBpcyB0aGUgbWFpbiBtZXNzYWdlXG4gICAgICBjb25zdCBkYXRhID0gZTo6Z2V0RGV0YWlsKCk7XG4gICAgICBpbmNvbWluZ05vZGVFdmVudCA9IGRhdGEubm9kZSAmJiBkYXRhO1xuICAgICAgaWYgKCFpbmNvbWluZ05vZGVFdmVudCkgYnJpZGdlLm9uSGFuZGxlKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNb3VzZUV2ZW50IGlzIHRoZSBzZWNvbmQgZXZlbnQgd2hlbiB0aGUgbWFpbiBldmVudCBoYXMgYG5vZGU6IHRydWVgXG4gICAgICBpbmNvbWluZ05vZGVFdmVudC5ub2RlID0gZTo6Z2V0UmVsYXRlZFRhcmdldCgpO1xuICAgICAgYnJpZGdlLm9uSGFuZGxlKGluY29taW5nTm9kZUV2ZW50KTtcbiAgICAgIGluY29taW5nTm9kZUV2ZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sIHRydWUpO1xuICBicmlkZ2UucG9zdCA9IChjbWQsIGRhdGEsIHsgZGF0YUtleSB9ID0gYnJpZGdlLCBub2RlKSA9PiB7XG4gICAgLy8gQ29uc3RydWN0aW5nIHRoZSBldmVudCBub3cgc28gd2UgZG9uJ3Qgc2VuZCBhbnl0aGluZyBpZiBpdCB0aHJvd3Mgb24gaW52YWxpZCBgbm9kZWBcbiAgICBjb25zdCBldnROb2RlID0gbm9kZSAmJiBuZXcgTW91c2VFdmVudFNhZmUoZGVzdElkLCB7IF9fcHJvdG9fXzogbnVsbCwgcmVsYXRlZFRhcmdldDogbm9kZSB9KTtcbiAgICBmaXJlQnJpZGdlRXZlbnQoZGVzdElkLCB7IGNtZCwgZGF0YSwgZGF0YUtleSwgbm9kZTogISFldnROb2RlIH0sIGNsb25lSW50byk7XG4gICAgaWYgKGV2dE5vZGUpIHdpbmRvdzo6ZmlyZShldnROb2RlKTtcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9