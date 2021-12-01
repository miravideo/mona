if (window['Violentmonkey:4r8HVMY07Lk='] !== 1) { /* eslint-disable no-unused-vars */

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
const IS_DEV = true;
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
    const quotedKey = `"${"Violentmonkey:4r8HVMY07Lk="}"`; // Accessing document.cookie may throw due to CSP sandbox

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

const INIT_FUNC_NAME = "Violentmonkey:4r8HVMY07Lk=";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC9jb250ZW50L2JyaWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5qZWN0ZWQvY29udGVudC9jbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvZ20tYXBpLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvaW5qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC9jb250ZW50L25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2NvbnRlbnQvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5qZWN0ZWQvY29udGVudC91dGlsLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC91dGlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIklTX0ZJUkVGT1giLCJnbG9iYWwiLCJicm93c2VyIiwicnVudGltZSIsImNocm9tZSIsIlByb3h5IiwiUHJveHlTYWZlIiwiYXBwbHkiLCJiaW5kIiwiTUVTU0FHRSIsIlNUQUNLIiwiaXNTeW5jTWV0aG9kTmFtZSIsImtleSIsImlzRnVuY3Rpb24iLCJ2YWwiLCJpc09iamVjdCIsInByb3hpZnlWYWx1ZSIsInRhcmdldCIsInNyYyIsIm1ldGFWYWwiLCJzcmNWYWwiLCJ1bmRlZmluZWQiLCJyZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIndyYXBBc3luYyIsInByb3hpZnlHcm91cCIsIm1ldGEiLCJnZXQiLCJncm91cCIsInRoaXNBcmciLCJmdW5jIiwicHJlcHJvY2Vzc29yRnVuYyIsImFyZ3MiLCJyZXNvbHZlIiwicmVqZWN0IiwicHJvbWlzZSIsIlByb21pc2VTYWZlIiwiX3Jlc29sdmUiLCJfcmVqZWN0Iiwic3RhY2tJbmZvIiwiRXJyb3JTYWZlIiwibmFtZSIsImxlbmd0aCIsInJlc3VsdCIsInJ1bnRpbWVFcnIiLCJsYXN0RXJyb3IiLCJlcnIiLCJpc1J1bnRpbWUiLCJwcm9jZXNzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIndyYXBTdWNjZXNzIiwid3JhcEVycm9yIiwic2VuZFJlc3BvbnNlQXN5bmMiLCJzZW5kUmVzcG9uc2UiLCJvbk1lc3NhZ2VMaXN0ZW5lciIsImxpc3RlbmVyIiwibWVzc2FnZSIsInNlbmRlciIsIm9iamVjdFRvU3RyaW5nIiwidW53cmFwUmVzcG9uc2UiLCJyZXNwb25zZSIsIndyYXBTZW5kTWVzc2FnZSIsInNlbmRNZXNzYWdlIiwiZXh0ZW5zaW9uIiwiaTE4biIsImNvbm5lY3QiLCJnZXRNYW5pZmVzdCIsImdldFVSTCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwidGFicyIsIklTX0RFViIsIktFWV9HTE9CQUxfSUQiLCJCVUlMRF9JTl9TQ1JJUFRfU1JDIiwiSU5KRUNUX0FVVE8iLCJJTkpFQ1RfUEFHRSIsIklOSkVDVF9DT05URU5UIiwiSU5KRUNUX01BUFBJTkciLCJfX3Byb3RvX18iLCJDTURfU0NSSVBUX0FERCIsIkNNRF9TQ1JJUFRfVVBEQVRFIiwiTUVUQUJMT0NLX1JFIiwiSU5KRUNUQUJMRV9UQUJfVVJMX1JFIiwiVElNRU9VVF9NQVgiLCJUSU1FT1VUX0hPVVIiLCJUSU1FT1VUXzI0SE9VUlMiLCJUSU1FT1VUX1dFRUsiLCJkZWZhdWx0SW1hZ2UiLCJpbml0SG9va3MiLCJob29rcyIsImZpcmUiLCJkYXRhIiwic2xpY2UiLCJmb3JFYWNoIiwiY2IiLCJob29rIiwiY2FsbGJhY2siLCJwdXNoIiwiaSIsImluZGV4T2YiLCJzcGxpY2UiLCJzZW5kQ21kIiwiY21kIiwib3B0aW9ucyIsIkNPTU1BTkRTX1dJVEhfU1JDIiwiZ2V0QmdQYWdlIiwiZ2V0QmFja2dyb3VuZFBhZ2UiLCJzZW5kQ21kRGlyZWN0bHkiLCJiZyIsImluY2x1ZGVzIiwid2luZG93IiwiZGVlcENvcHkiLCJoYW5kbGVDb21tYW5kTWVzc2FnZSIsInRoZW4iLCJzZW5kVGFiQ21kIiwidGFiSWQiLCJjYXRjaCIsIm5vb3AiLCJwYXlsb2FkIiwicmV0cnkiLCJzZW5kTWVzc2FnZVJldHJ5IiwicmV0cmllcyIsInBhdXNlRHVyYXRpb24iLCJtYWtlUGF1c2UiLCJFcnJvciIsImxlZnRwYWQiLCJpbnB1dCIsInBhZCIsIm51bSIsInRvU3RyaW5nIiwiZ2V0TG9jYWxlU3RyaW5nIiwibG9jYWxlTWV0YSIsIm5hdmlnYXRvciIsImxhbmd1YWdlcyIsIm1hcCIsImxhbmciLCJ0b0xvd2VyQ2FzZSIsImZpbmQiLCJCb29sZWFuIiwiZ2V0U2NyaXB0TmFtZSIsInNjcmlwdCIsImN1c3RvbSIsInByb3BzIiwiaWQiLCJnZXRGdWxsVXJsIiwidXJsIiwiYmFzZSIsIm9iaiIsIlVSTCIsInByb3RvY29sIiwiaHJlZiIsImVuY29kZUZpbGVuYW1lIiwicmVwbGFjZSIsIm0iLCJjb2RlIiwiY2hhckNvZGVBdCIsImRlY29kZUZpbGVuYW1lIiwiZmlsZW5hbWUiLCJfbSIsImciLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsImdldEFjdGl2ZVRhYiIsInF1ZXJ5IiwiYWN0aXZlIiwiY3VycmVudFdpbmRvdyIsIndpbmRvd0lkIiwid2luZG93cyIsImdldEN1cnJlbnQiLCJtcyIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwidHJ1ZUpvaW4iLCJzZXBhcmF0b3IiLCJmaWx0ZXIiLCJqb2luIiwibm9ybWFsaXplS2V5cyIsIkFycmF5IiwiaXNBcnJheSIsInNwbGl0Iiwib2JqZWN0R2V0IiwicmF3S2V5IiwiZGVmIiwia2V5cyIsImV2ZXJ5Iiwib2JqZWN0U2V0Iiwicm9vdCIsInN1YiIsImxhc3RLZXkiLCJwb3AiLCJvYmplY3RQaWNrIiwidHJhbnNmb3JtIiwicmVkdWNlIiwidmFsdWUiLCJtYXBFbnRyeSIsIk9iamVjdCIsImVudHJpZXMiLCJlbnRyeSIsImFsbEVudHJpZXMiLCJmb3JFYWNoRW50cnkiLCJmb3JFYWNoS2V5IiwiZm9yRWFjaFZhbHVlIiwidmFsdWVzIiwiZGVlcEVxdWFsIiwiYSIsImIiLCJpdGVtIiwia2V5c0EiLCJrZXlzQiIsImdldE1lc3NhZ2UiLCJwYXJhbSIsIm1lbW9pemUiLCJyZXNvbHZlciIsImNhY2hlTWFwIiwibWVtb2l6ZWQiLCJjYWNoZSIsImRlYm91bmNlIiwidGltZSIsInN0YXJ0VGltZSIsInRpbWVyIiwiTWF0aCIsIm1heCIsImNoZWNrVGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiY2hlY2tUaW1lciIsImRlbHRhIiwiZGVib3VuY2VkRnVuY3Rpb24iLCJ0aHJvdHRsZSIsImxhc3RUaW1lIiwidGhyb3R0bGVkRnVuY3Rpb24iLCJnZXRVbmlxSWQiLCJwcmVmaXgiLCJmbG9vciIsInJhbmRvbSIsImJ1ZmZlcjJzdHJpbmciLCJidWYiLCJvZmZzZXQiLCJzbGljZVNpemUiLCJzbGljZXMiLCJhcnJheUxlbiIsImVuZCIsIm1pbiIsImJ5dGVMZW5ndGgiLCJuZWVkc1NsaWNpbmciLCJVaW50OEFycmF5IiwiYmxvYjJiYXNlNjQiLCJibG9iIiwic2l6ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwic3RyaW5nMnVpbnQ4YXJyYXkiLCJzdHIiLCJsZW4iLCJhcnJheSIsIlZFUlNJT05fUkUiLCJESUdJVFNfUkUiLCJjb21wYXJlVmVyc2lvbiIsInZlcjEiLCJ2ZXIyIiwibWFpbjEiLCJwcmUxIiwiZXhlYyIsIm1haW4yIiwicHJlMiIsImNvbXBhcmVWZXJzaW9uQ2h1bmsiLCJpc1NlbXZlck1vZGUiLCJwYXJ0czEiLCJwYXJ0czIiLCJsZW4xIiwibGVuMiIsInRlc3QiLCJ1bml0cyIsImZvcm1hdFRpbWUiLCJkdXJhdGlvbiIsInVuaXRJbmZvIiwic3RlcCIsImZvcm1hdEJ5dGVMZW5ndGgiLCJ0b0ZpeGVkIiwiaXNFbXB0eSIsImVuc3VyZUFycmF5IiwiYmluYXJ5VHlwZXMiLCJyZXF1ZXN0TG9jYWxGaWxlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJyZXNwb25zZVR5cGUiLCJvcGVuIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiSlNPTiIsInBhcnNlIiwib25lcnJvciIsInNlbmQiLCJGT1JDRURfQUNDRVBUIiwiaXNSZW1vdGUiLCJyZXF1ZXN0Iiwic3RhcnRzV2l0aCIsImJvZHkiLCJoZWFkZXJzIiwiaXNCb2R5T2JqIiwiaG9zdG5hbWUiLCJhY2NlcHQiLCJpbml0IiwiYXNzaWduIiwic3RyaW5naWZ5IiwicmVzcCIsImZldGNoIiwibG9hZE1ldGhvZCIsImFycmF5YnVmZmVyIiwianNvbiIsIlNJTVBMRV9WQUxVRV9UWVBFIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbGVhbiIsImR1bXBTY3JpcHRWYWx1ZSIsImpzb25EdW1wIiwic2ltcGxlIiwiYWxsb3dlZCIsImNyZWF0ZU51bGxPYmoiLCJkYXRhS2V5TmFtZU1hcCIsImhhbmRsZXJzIiwiYmdIYW5kbGVycyIsIm9uU2NyaXB0cyIsImFzc2lnbkhhbmRsZXJzIiwiZGVzdCIsImZvcmNlIiwiYWxsb3dDbWQiLCJkYXRhS2V5IiwiZW5zdXJlTmVzdGVkUHJvcCIsIlhIUiIsIkFERF9FTEVNRU5UIiwiVVBEQVRFX1ZBTFVFIiwiVEFCX0NMT1NFIiwiR0VUX1JFU09VUkNFIiwiR01fQ01EIiwiYWRkRWxlbWVudCIsImFkZFN0eWxlIiwiZGVsZXRlVmFsdWUiLCJkb3dubG9hZCIsImdldFJlc291cmNlVGV4dCIsImdldFJlc291cmNlVVJMIiwibm90aWZpY2F0aW9uIiwib3BlbkluVGFiIiwicmVnaXN0ZXJNZW51Q29tbWFuZCIsInNldENsaXBib2FyZCIsInNldFZhbHVlIiwidW5yZWdpc3Rlck1lbnVDb21tYW5kIiwiR1JBTlRfQ01EIiwiV0lORE9XX0NMT1NFIiwiV0lORE9XX0ZPQ1VTIiwiYnJpZGdlIiwiaWRzIiwicnVubmluZ0lkcyIsImludm9rYWJsZUlkcyIsImZhaWxlZElkcyIsInBhdGhNYXBzIiwiYWRkSGFuZGxlcnMiLCJhZGRCYWNrZ3JvdW5kSGFuZGxlcnMiLCJhbGxvd1NjcmlwdCIsImdyYW50IiwiY21kcyIsInJlZ2V4cFRlc3QiLCJvbkhhbmRsZSIsIm5vZGUiLCJyZWFsbSIsImhhbmRsZSIsImxvZyIsImNhbGxiYWNrSWQiLCJnZXRPd25Qcm9wIiwiQ0FMTEJBQ0tfSUQiLCJpc1Byb21pc2UiLCJwb3N0IiwiZm4iLCJjbGlwYm9hcmREYXRhIiwiZXhlY0NvbW1hbmQiLCJkb2N1bWVudCIsInNldERhdGEiLCJEYXRhVHJhbnNmZXIiLCJQUk9UTyIsImdldENsaXBib2FyZERhdGEiLCJkZXNjcmliZVByb3BlcnR5IiwiQ2xpcGJvYXJkRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIkV2ZW50Iiwib25Db3B5IiwidHlwZSIsInBhcmFtcyIsIm9uIiwib2ZmIiwiU2V0Q2xpcGJvYXJkIiwibWVudXMiLCJzZXRQb3B1cFRocm90dGxlIiwiaXNQb3B1cFNob3duIiwiaW5qZWN0aW9uIiwiUG9wdXBTaG93biIsInN0YXRlIiwic2VuZFNldFBvcHVwIiwiQWRkRWxlbWVudCIsInRhZyIsImF0dHJzIiwiY2JJZCIsImVsIiwicGFyZW50IiwiZWxlbUJ5VGFnIiwibWFrZUVsZW0iLCJhcHBlbmRDaGlsZCIsInN0YWNrIiwiR2V0UmVzb3VyY2UiLCJpc0Jsb2IiLCJwYXRoIiwicmF3IiwiZGVjb2RlUmVzb3VyY2UiLCJSZWdpc3Rlck1lbnUiLCJjYXAiLCJJU19UT1AiLCJVbnJlZ2lzdGVyTWVudSIsImlzRGVsYXllZCIsInBpY2tJbnRvVGhpcyIsInJlc29sdmVkUHJvbWlzZSIsInByb21pc2VSZXNvbHZlIiwiYmFkZ2VQcm9taXNlIiwibnVtQmFkZ2VzU2VudCIsImJmQ2FjaGVXaXJlZCIsImNvbnRlbnRJZCIsImdldFVuaXFJZFNhZmUiLCJ3ZWJJZCIsInhockRhdGEiLCJnZXRYaHJJbmplY3Rpb24iLCJwYWdlSW5mbyIsImZvcmNlQ29udGVudCIsImxvY2F0aW9uIiwiWE1MRG9jdW1lbnQiLCJpbmplY3RQYWdlU2FuZGJveCIsImRhdGFQcm9taXNlIiwiY29tcG9zZWRQYXRoIiwiZ2V0RGF0YUZGIiwiZXhwb3NlIiwiR2V0U2NyaXB0VmVyIiwic2NyaXB0cyIsImluamVjdFNjcmlwdHMiLCJDb21tYW5kIiwiVXBkYXRlZFZhbHVlcyIsImRhdGFQYWdlIiwiZGF0YUNvbnRlbnQiLCJvYmplY3RLZXlzIiwiUnVuIiwidGhyb3R0bGVkU2V0QmFkZ2UiLCJldnQiLCJpc1RydXN0ZWQiLCJwZXJzaXN0ZWQiLCJTZXRUaW1lb3V0IiwiVGFiRm9jdXMiLCJVcGRhdGVWYWx1ZSIsInZpYU1lc3NhZ2luZyIsInZtRGF0YSIsInJhY2UiLCJ2bVJlc29sdmUiLCJxdW90ZWRLZXkiLCJjb29raWVWYWx1ZSIsImNvb2tpZSIsImJsb2JJZCIsIlZNX1VVSUQiLCJyZXZva2VPYmplY3RVUkwiLCJJTklUX0ZVTkNfTkFNRSIsIlZBVUxUX1dSSVRFUiIsIlZBVUxUX1dSSVRFUl9BQ0siLCJjb250TGlzdHMiLCJwZ0xpc3RzIiwicmVhbG1zIiwicGFnZUluamVjdGFibGUiLCJmcmFtZUV2ZW50V25kIiwiaW5qZWN0ZWRSb290IiwiVk1Jbml0SW5qZWN0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJnZXRSZWxhdGVkVGFyZ2V0IiwidGVsbEJyaWRnZVRvV3JpdGVWYXVsdCIsImdldERldGFpbCIsIkN1c3RvbUV2ZW50U2FmZSIsInNhZmVEZWZpbmVQcm9wZXJ0eSIsIkluamVjdExpc3QiLCJpbmplY3RMaXN0IiwiY2xvbmVJbnRvIiwidmF1bHRJZCIsImhhbmRzaGFrZUlkIiwidXNlT3BlbmVyIiwib3BlbmVyIiwic3RhcnRIYW5kc2hha2UiLCJpbmplY3QiLCJ3cmFwcGVkSlNPYmplY3QiLCJvayIsInNldE9rIiwiTW91c2VFdmVudFNhZmUiLCJyZWxhdGVkVGFyZ2V0IiwiZGV0YWlsIiwiaGFuZHNoYWtlciIsImNhcHR1cmUiLCJvbmNlIiwiYmluZEV2ZW50cyIsImZpcmVCcmlkZ2VFdmVudCIsImhhc01vcmUiLCJpbmZvIiwiaW5qZWN0YWJsZSIsImxpc3RzIiwic3RhcnQiLCJpZGxlIiwiaXMiLCJmZWVkYmFjayIsImluamVjdEludG8iLCJwYXRoTWFwIiwicmVhbG1EYXRhIiwicnVuQXQiLCJtb3JlRGF0YSIsImZlZWRJZCIsImhhc0ludm9rZXIiLCJzZXR1cENvbnRlbnRJbnZva2VyIiwib25FbGVtZW50IiwiaW5qZWN0QWxsIiwib25Cb2R5IiwiaW5qZWN0RGVsYXllZFNjcmlwdHMiLCJuZWVkc0ludm9rZXIiLCJnZXRSZWFkeVN0YXRlIiwiaWZyYW1lQ2IiLCJvbkVycm9yIiwiZGlzcGxheU5hbWUiLCJkaXYiLCJkaXZSb290IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImlmcmFtZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29udGVudERvY3VtZW50IiwicmVtb3ZlIiwiaXRlbXMiLCJsaXN0IiwiaW52b2tlQ29udGVudCIsInBvc3RWaWFCcmlkZ2UiLCJ3bmQiLCJub3RpZmljYXRpb25zIiwiTm90aWZpY2F0aW9uIiwibmlkIiwiUmVtb3ZlTm90aWZpY2F0aW9uIiwiTm90aWZpY2F0aW9uQ2xpY2siLCJuIiwiTm90aWZpY2F0aW9uQ2xvc2UiLCJmZXRjaFNhZmUiLCJhcnJheUJ1ZmZlciIsImdldEFycmF5QnVmZmVyIiwiZ2V0QmxvYiIsIlJlc3BvbnNlUHJvdG8iLCJjcmVhdGVPYmplY3RVUkwiLCJyZXF1ZXN0cyIsImRvd25sb2FkQ2hhaW4iLCJIdHRwUmVxdWVzdCIsIm1zZyIsIndhbnRzQmxvYiIsInhoclR5cGUiLCJBYm9ydFJlcXVlc3QiLCJIdHRwUmVxdWVzdGVkIiwiY2h1bmsiLCJyZXEiLCJyZWNlaXZlQ2h1bmsiLCJudW1DaHVua3MiLCJnb3RDaHVua3MiLCJibG9iYmVkIiwiY2h1bmtlZCIsImRvd25sb2FkSWQiLCJpc0xvYWRFbmQiLCJldmVudHNUb05vdGlmeSIsImltcG9ydGluZyIsImJpbiIsImltcG9ydEJsb2IiLCJyZWNlaXZlQWxsQ2h1bmtzIiwiZ290TG9hZEVuZCIsImZpbGVOYW1lIiwiZG93bmxvYWRCbG9iIiwicmV2b2tlQmxvYkFmdGVyVGltZW91dCIsImFyciIsIlVpbnQ4QXJyYXlTYWZlIiwiZGF0YVNpemUiLCJwcm9jZXNzQ2h1bmsiLCJmaW5pc2hDaHVua3MiLCJwb3MiLCJsYXN0IiwiYXRvYlNhZmUiLCJCbG9iU2FmZSIsImNvbnRlbnRUeXBlIiwiYnVmZmVyIiwidGFiSWRzIiwidGFiS2V5cyIsIlRhYk9wZW4iLCJUYWJDbG9zZSIsIlRhYkNsb3NlZCIsImFyZyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImNyZWF0ZUVsZW1lbnROUyIsIk5TX0hUTUwiLCJpc1N0cmluZyIsImFwcGVuZCIsInNldEF0dHJpYnV0ZSIsImdldEhyZWYiLCJzdHJpbmdJbmRleE9mIiwiYnl0ZXMiLCJ0ZERlY29kZSIsIlRleHREZWNvZGVyU2FmZSIsImhpc3RvcnkiLCJyZWZlcnJlciIsInRleHQiLCJnZXRUZXh0IiwiZmV0Y2hPcHRzIiwib2xkQ29kZSIsImZyb20iLCJzdG9yYWdlIiwibWFuYWdlZCIsIm9uQ29ubmVjdCIsInBvcnQiLCJwb3N0TWVzc2FnZSIsIm9uRGlzY29ubmVjdCIsInRhYiIsImNsb3NlU2VsZiIsImdvIiwiZXZlbnRJZCIsImV2dE1haW4iLCJzcmNJ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QUFlLENBQUNrSSxNQUFELEVBQVM7QUFBRXJoQixTQUFGO0FBQU9YLFVBQVA7QUFBYStPLGFBQWI7QUFBc0JvQyxVQUFJLEVBQUUsQ0FBQyxDQUFDK1E7QUFBOUIsS0FBVCxFQUFrRHJKLFNBQWxELENBQWY7QUFDQSxRQUFJcUosT0FBSixFQUFhLFNBQVFuaUIsSUFBUixFQUFBb0IsTUFBTSxFQUFPK2dCLE9BQVAsQ0FBTjtBQUNkLEdBTEQ7QUFNRCxDQTVCTSxDIiwiZmlsZSI6ImluamVjdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7IF9fcHJvdG9fXzogbnVsbCB9OyAgICAgICAgICBmb3IgKGxldCBpID0gMCwgYywgc3RyID0gXCJjZG1ub3BydFwiOyBpIDwgc3RyLmxlbmd0aCAmJiAoYyA9IHN0cltpKytdKTspICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX3JlcXVpcmVfXywgYywgeyBfX3Byb3RvX186IG51bGwsIHZhbHVlOiB1bmRlZmluZWQsIHdyaXRhYmxlOiB0cnVlIH0pO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7IF9fcHJvdG9fXzogbnVsbCB9LCBfX3Byb3RvX186IG51bGxcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0c2FmZUNhbGwobW9kdWxlc1ttb2R1bGVJZF0sIG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0ZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge19fcHJvdG9fXzogbnVsbCwgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHJ1ZSkge1xuIFx0XHRcdGRlZmluZVByb3BlcnR5KGV4cG9ydHMsIHRvU3RyaW5nVGFnU3ltLCB7X19wcm90b19fOiBudWxsLCB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0ZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7X19wcm90b19fOiBudWxsLCB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IHsgX19wcm90b19fOiBudWxsIH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdGRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHtfX3Byb3RvX186IG51bGwsIGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IoY29uc3Qga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgKCkgPT4gdmFsdWVba2V5XSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIGtleSkgPT4gc2FmZUNhbGwoaGFzT3duUHJvcGVydHksIG9iaiwga2V5KTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luamVjdGVkL2luZGV4LmpzXCIpO1xuIiwiLy8gU2luY2UgdGhpcyBhbHNvIHJ1bnMgaW4gYSBjb250ZW50IHNjcmlwdCB3ZSdsbCBndWFyZCBhZ2FpbnN0IGltcGxpY2l0IGdsb2JhbCB2YXJpYWJsZXNcbi8vIGZvciBET00gZWxlbWVudHMgd2l0aCAnaWQnIGF0dHJpYnV0ZSB3aGljaCBpcyBhIHN0YW5kYXJkIGZlYXR1cmUsIG1vcmUgaW5mbzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9wdWxsLzE1M1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvd2luZG93LW9iamVjdC5odG1sI25hbWVkLWFjY2Vzcy1vbi10aGUtd2luZG93LW9iamVjdFxuaWYgKCFJU19GSVJFRk9YICYmICFnbG9iYWwuYnJvd3Nlcj8ucnVudGltZSkge1xuICAvLyByZWdpb24gQ2hyb21lXG4gIGNvbnN0IHsgY2hyb21lLCBQcm94eTogUHJveHlTYWZlIH0gPSBnbG9iYWw7XG4gIGNvbnN0IHsgYXBwbHksIGJpbmQgfSA9IFByb3h5U2FmZTtcbiAgY29uc3QgTUVTU0FHRSA9ICdtZXNzYWdlJztcbiAgY29uc3QgU1RBQ0sgPSAnc3RhY2snO1xuICBjb25zdCBpc1N5bmNNZXRob2ROYW1lID0ga2V5ID0+IGtleSA9PT0gJ2FkZExpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ2hhc0xpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ2hhc0xpc3RlbmVycyc7XG4gIC8qKiBBUEkgdHlwZXMgb3IgZW51bXMgb3IgbGl0ZXJhbCBjb25zdGFudHMgKi9cbiAgY29uc3QgaXNGdW5jdGlvbiA9IHZhbCA9PiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nO1xuICBjb25zdCBpc09iamVjdCA9IHZhbCA9PiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcbiAgY29uc3QgcHJveGlmeVZhbHVlID0gKHRhcmdldCwga2V5LCBzcmMsIG1ldGFWYWwpID0+IHtcbiAgICBjb25zdCBzcmNWYWwgPSBzcmNba2V5XTtcbiAgICBpZiAoc3JjVmFsID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBsZXQgcmVzO1xuICAgIGlmIChpc0Z1bmN0aW9uKG1ldGFWYWwpKSB7XG4gICAgICByZXMgPSBtZXRhVmFsKHNyYywgc3JjVmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oc3JjVmFsKSkge1xuICAgICAgcmVzID0gbWV0YVZhbCA9PT0gMCB8fCBpc1N5bmNNZXRob2ROYW1lKGtleSkgfHwgIXNyYzo6aGFzT3duUHJvcGVydHkoa2V5KVxuICAgICAgICA/IHNyY1ZhbDo6YmluZChzcmMpXG4gICAgICAgIDogd3JhcEFzeW5jKHNyYywgc3JjVmFsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3Qoc3JjVmFsKSAmJiBtZXRhVmFsICE9PSAwKSB7XG4gICAgICByZXMgPSBwcm94aWZ5R3JvdXAoc3JjVmFsLCBtZXRhVmFsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBzcmNWYWw7XG4gICAgfVxuICAgIHRhcmdldFtrZXldID0gcmVzO1xuICAgIHJldHVybiByZXM7XG4gIH07XG4gIGNvbnN0IHByb3hpZnlHcm91cCA9IChzcmMsIG1ldGEpID0+IG5ldyBQcm94eVNhZmUoe30sIHtcbiAgICBnZXQ6IChncm91cCwga2V5KSA9PiBncm91cFtrZXldID8/IHByb3hpZnlWYWx1ZShncm91cCwga2V5LCBzcmMsIG1ldGE/LltrZXldKSxcbiAgfSk7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyAtIG9yaWdpbmFsIEFQSSBncm91cFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIC0gb3JpZ2luYWwgQVBJIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7V3JhcEFzeW5jUHJlcHJvY2Vzc29yRnVuY30gW3ByZXByb2Nlc3NvckZ1bmNdIC0gbW9kaWZpZXMgdGhlIEFQSSBjYWxsYmFjaydzIHJlc3BvbnNlXG4gICAgKi9cbiAgY29uc3Qgd3JhcEFzeW5jID0gKHRoaXNBcmcsIGZ1bmMsIHByZXByb2Nlc3NvckZ1bmMpID0+IChcbiAgICAoLi4uYXJncykgPT4ge1xuICAgICAgbGV0IHJlc29sdmU7XG4gICAgICBsZXQgcmVqZWN0O1xuICAgICAgLyogVXNpbmcgcmVzb2x2ZS9yZWplY3QgdG8gY2FsbCBBUEkgaW4gdGhlIHNjb3BlIG9mIHRoaXMgZnVuY3Rpb24sIG5vdCBpbnNpZGUgUHJvbWlzZSxcbiAgICAgICAgIGJlY2F1c2UgYW4gQVBJIHZhbGlkYXRpb24gZXhjZXB0aW9uIGlzIHRocm93biBzeW5jaHJvbm91c2x5IGJvdGggaW4gQ2hyb21lIGFuZCBGRlxuICAgICAgICAgc28gdGhlIGNhbGxlciBjYW4gdXNlIHRyeS9jYXRjaCB0byBkZXRlY3QgaXQgbGlrZSB3ZSd2ZSBiZWVuIGRvaW5nIGluIGljb24uanMgKi9cbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZVNhZmUoKF9yZXNvbHZlLCBfcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZTtcbiAgICAgICAgcmVqZWN0ID0gX3JlamVjdDtcbiAgICAgIH0pO1xuICAgICAgLy8gTWFrZSB0aGUgZXJyb3IgbWVzc2FnZXMgYWN0dWFsbHkgdXNlZnVsIGJ5IGNhcHR1cmluZyBhIHJlYWwgc3RhY2tcbiAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IG5ldyBFcnJvclNhZmUoYGNhbGxzdGFjayBiZWZvcmUgaW52b2tpbmcgJHtmdW5jLm5hbWUgfHwgJ2Nocm9tZSBBUEknfTpgKTtcbiAgICAgIC8vIEEgc2luZ2xlIHBhcmFtZXRlciBgcmVzdWx0YCBpcyBmaW5lIGJlY2F1c2Ugd2UgZG9uJ3QgdXNlIEFQSSB0aGF0IHJldHVybiBtb3JlXG4gICAgICBhcmdzW2FyZ3MubGVuZ3RoXSA9IHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bnRpbWVFcnIgPSBjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XG4gICAgICAgIGNvbnN0IGVyciA9IHJ1bnRpbWVFcnIgfHwgKFxuICAgICAgICAgIHByZXByb2Nlc3NvckZ1bmNcbiAgICAgICAgICAgID8gcHJlcHJvY2Vzc29yRnVuYyhyZXNvbHZlLCByZXN1bHQpXG4gICAgICAgICAgICA6IHJlc29sdmUocmVzdWx0KVxuICAgICAgICApO1xuICAgICAgICAvLyBQcmVmZXIgYHJlamVjdGAgb3ZlciBgdGhyb3dgIHdoaWNoIHN0b3BzIGRlYnVnZ2VyIGluICdwYXVzZSBvbiBleGNlcHRpb25zJyBtb2RlXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBpZiAoIXJ1bnRpbWVFcnIpIHN0YWNrSW5mb1tTVEFDS10gPSBgJHtlcnJbMV19XFxuJHtzdGFja0luZm9bU1RBQ0tdfWA7XG4gICAgICAgICAgc3RhY2tJbmZvW01FU1NBR0VdID0gcnVudGltZUVyciA/IGVycltNRVNTQUdFXSA6IGAke2VyclswXX1gO1xuICAgICAgICAgIHN0YWNrSW5mby5pc1J1bnRpbWUgPSAhIXJ1bnRpbWVFcnI7XG4gICAgICAgICAgcmVqZWN0KHN0YWNrSW5mbyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuSVNfSU5KRUNURUQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmdW5jOjphcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmIChlW01FU1NBR0VdID09PSAnRXh0ZW5zaW9uIGNvbnRleHQgaW52YWxpZGF0ZWQuJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHJlbG9hZCB0aGUgdGFiIHRvIHJlc3RvcmUgVmlvbGVudG1vbmtleSBBUEkgZm9yIHVzZXJzY3JpcHRzLicpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVuYzo6YXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHByb21pc2UuY2F0Y2goZXJyID0+IGNvbnNvbGUud2FybihhcmdzLCBlcnI/LltNRVNTQUdFXSB8fCBlcnIpKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgKTtcbiAgLy8gQm90aCByZXN1bHQgYW5kIGVycm9yIG11c3QgYmUgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYXZvaWQgcHJvdG90eXBlIGVhdmVzZHJvcHBpbmdcbiAgY29uc3Qgd3JhcFN1Y2Nlc3MgPSByZXN1bHQgPT4gW1xuICAgIHJlc3VsdCxcbiAgICBudWxsLFxuICBdO1xuICAvLyBCb3RoIHJlc3VsdCBhbmQgZXJyb3IgbXVzdCBiZSBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBhdm9pZCBwcm90b3R5cGUgZWF2ZXNkcm9wcGluZ1xuICBjb25zdCB3cmFwRXJyb3IgPSBlcnIgPT4gcHJvY2Vzcy5lbnYuREVCVUcgJiYgY29uc29sZS53YXJuKGVycikgfHwgW1xuICAgIG51bGwsXG4gICAgZXJyIGluc3RhbmNlb2YgRXJyb3JTYWZlXG4gICAgICA/IFtlcnJbTUVTU0FHRV0sIGVycltTVEFDS11dXG4gICAgICA6IFtlcnIsICcnXSxcbiAgXTtcbiAgY29uc3Qgc2VuZFJlc3BvbnNlQXN5bmMgPSBhc3luYyAocmVzdWx0LCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0O1xuICAgICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSBjb25zb2xlLmluZm8oJ3NlbmQnLCByZXN1bHQpO1xuICAgICAgc2VuZFJlc3BvbnNlKHdyYXBTdWNjZXNzKHJlc3VsdCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2VuZFJlc3BvbnNlKHdyYXBFcnJvcihlcnIpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uTWVzc2FnZUxpc3RlbmVyID0gKGxpc3RlbmVyLCBtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5pbmZvKCdyZWNlaXZlJywgbWVzc2FnZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlcik7XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdDo6b2JqZWN0VG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nKSB7XG4gICAgICAgIHNlbmRSZXNwb25zZUFzeW5jKHJlc3VsdCwgc2VuZFJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvLyBJbiBzb21lIGJyb3dzZXJzIChlLmcgQ2hyb21lIDU2LCBWaXZhbGRpKSwgdGhlIGxpc3RlbmVyIGluXG4gICAgICAvLyBwb3B1cCBwYWdlcyBhcmUgbm90IHByb3Blcmx5IGNsZWFyZWQgYWZ0ZXIgY2xvc2VkLlxuICAgICAgLy8gVGhleSBtYXkgc2VuZCBgdW5kZWZpbmVkYCBiZWZvcmUgdGhlIHJlYWwgcmVzcG9uc2UgaXMgc2VudC5cbiAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZW5kUmVzcG9uc2Uod3JhcFN1Y2Nlc3MocmVzdWx0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZW5kUmVzcG9uc2Uod3JhcEVycm9yKGVycikpO1xuICAgIH1cbiAgfTtcbiAgLyoqIEB0eXBlIHtXcmFwQXN5bmNQcmVwcm9jZXNzb3JGdW5jfSAqL1xuICBjb25zdCB1bndyYXBSZXNwb25zZSA9IChyZXNvbHZlLCByZXNwb25zZSkgPT4gKFxuICAgICFyZXNwb25zZSAmJiAnbnVsbCByZXNwb25zZSdcbiAgICB8fCByZXNwb25zZVsxXSAvLyBlcnJvciBjcmVhdGVkIGluIHdyYXBFcnJvclxuICAgIHx8IHJlc29sdmUocmVzcG9uc2VbMF0pIC8vIHJlc3VsdCBjcmVhdGVkIGluIHdyYXBTdWNjZXNzXG4gICk7XG4gIGNvbnN0IHdyYXBTZW5kTWVzc2FnZSA9IChydW50aW1lLCBzZW5kTWVzc2FnZSkgPT4gKFxuICAgIHdyYXBBc3luYyhydW50aW1lLCBzZW5kTWVzc2FnZSwgdW53cmFwUmVzcG9uc2UpXG4gICk7XG4gIC8qKlxuICAgKiAwID0gbm9uLWFzeW5jIG1ldGhvZCBvciB0aGUgZW50aXJlIGdyb3VwXG4gICAqIGZ1bmN0aW9uID0gdHJhbnNmb3JtZXIgbGlrZSAob3JpZ2luYWxPYmosIG9yaWdpbmFsRnVuYyk6IGZ1bmN0aW9uXG4gICAqL1xuICBnbG9iYWwuYnJvd3NlciA9IHByb3hpZnlHcm91cChjaHJvbWUsIHtcbiAgICBleHRlbnNpb246IDAsIC8vIHdlIGRvbid0IHVzZSBpdHMgYXN5bmMgbWV0aG9kc1xuICAgIGkxOG46IDAsIC8vIHdlIGRvbid0IHVzZSBpdHMgYXN5bmMgbWV0aG9kc1xuICAgIHJ1bnRpbWU6IHtcbiAgICAgIGNvbm5lY3Q6IDAsXG4gICAgICBnZXRNYW5pZmVzdDogMCxcbiAgICAgIGdldFVSTDogMCxcbiAgICAgIG9uTWVzc2FnZToge1xuICAgICAgICBhZGRMaXN0ZW5lcjogKG9uTWVzc2FnZSwgYWRkTGlzdGVuZXIpID0+IChcbiAgICAgICAgICBsaXN0ZW5lciA9PiBvbk1lc3NhZ2U6OmFkZExpc3RlbmVyKG9uTWVzc2FnZUxpc3RlbmVyOjpiaW5kKG51bGwsIGxpc3RlbmVyKSlcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBzZW5kTWVzc2FnZTogd3JhcFNlbmRNZXNzYWdlLFxuICAgIH0sXG4gICAgdGFiczoge1xuICAgICAgY29ubmVjdDogMCxcbiAgICAgIHNlbmRNZXNzYWdlOiB3cmFwU2VuZE1lc3NhZ2UsXG4gICAgfSxcbiAgfSk7XG4gIC8vIGVuZHJlZ2lvblxufSBlbHNlIGlmIChwcm9jZXNzLmVudi5ERUJVRyAmJiBJU19GSVJFRk9YKSB7XG4gIC8vIHJlZ2lvbiBGaXJlZm94XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovLy8gdGhpcyBpcyBhIGRlYnVnLW9ubHkgc2VjdGlvblxuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IHsgcnVudGltZSB9ID0gZ2xvYmFsLmJyb3dzZXI7XG4gIGNvbnN0IHsgc2VuZE1lc3NhZ2UsIG9uTWVzc2FnZSB9ID0gcnVudGltZTtcbiAgY29uc3QgbG9nID0gKHR5cGUsIGFyZ3MsIGlkLCBpc1Jlc3BvbnNlKSA9PiBjb25zb2xlLmluZm8oXG4gICAgYCR7dHlwZX1NZXNzYWdlIyVkJHtpc1Jlc3BvbnNlID8gJyByZXNwb25zZScgOiAnJ31gLFxuICAgIGlkLFxuICAgIC4uLmFyZ3MsXG4gICk7XG4gIHJ1bnRpbWUuc2VuZE1lc3NhZ2UgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgICBjb25zdCBpZCA9IGNvdW50ZXI7XG4gICAgbG9nKCdzZW5kJywgYXJncywgaWQpO1xuICAgIGNvbnN0IHByb21pc2UgPSBydW50aW1lOjpzZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICBwcm9taXNlLnRoZW4oZGF0YSA9PiBsb2coJ3NlbmQnLCBbZGF0YV0sIGlkLCB0cnVlKSwgY29uc29sZS53YXJuKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcbiAgY29uc3QgeyBhZGRMaXN0ZW5lciB9ID0gb25NZXNzYWdlO1xuICBvbk1lc3NhZ2UuYWRkTGlzdGVuZXIgPSAobGlzdGVuZXIpID0+IG9uTWVzc2FnZTo6YWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyKSA9PiB7XG4gICAgY291bnRlciArPSAxO1xuICAgIGNvbnN0IGlkID0gY291bnRlcjtcbiAgICBjb25zdCB7IGZyYW1lSWQsIHRhYiwgdXJsIH0gPSBzZW5kZXI7XG4gICAgbG9nKCdvbicsIFttc2csIHsgZnJhbWVJZCwgdGFiLCB1cmwgfV0sIGlkKTtcbiAgICBjb25zdCByZXN1bHQgPSBsaXN0ZW5lcihtc2csIHNlbmRlcik7XG4gICAgKHR5cGVvZiByZXN1bHQ/LnRoZW4gPT09ICdmdW5jdGlvbicgPyByZXN1bHQgOiBQcm9taXNlU2FmZS5yZXNvbHZlKHJlc3VsdCkpXG4gICAgLnRoZW4oZGF0YSA9PiBsb2coJ29uJywgW2RhdGFdLCBpZCwgdHJ1ZSksIGNvbnNvbGUud2Fybik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbiAgLy8gZW5kcmVnaW9uXG59XG5cbi8qKlxuICogQGNhbGxiYWNrIFdyYXBBc3luY1ByZXByb2Nlc3NvckZ1bmNcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oYW55KX0gcmVzb2x2ZSAtIGNhbGxlZCBvbiBzdWNjZXNzXG4gKiBAcGFyYW0ge2FueX0gcmVzcG9uc2UgLSBBUEkgY2FsbGJhY2sncyByZXNwb25zZVxuICogQHJldHVybnMgez9zdHJpbmdbXX0gLSBbZXJyb3JNZXNzYWdlLCBlcnJvclN0YWNrXSBhcnJheSBvbiBlcnJvclxuICovXG4iLCIvLyBTQUZFVFkgV0FSTklORyEgRXhwb3J0cyB1c2VkIGJ5IGBpbmplY3RlZGAgbXVzdCBtYWtlIDo6c2FmZSgpIGNhbGxzIGFuZCB1c2UgX19wcm90b19fOm51bGxcblxuLy8gZm9yIGdsb2JhbCBldmVudCBidXMgYW5kIHNhdmUgc29tZSBidWlsZCBpbiBpbmZvXG5leHBvcnQgY29uc3QgSVNfREVWID0gdHJ1ZTtcbmV4cG9ydCBjb25zdCBLRVlfR0xPQkFMX0lEID0gJ19HTE9CQUxfSURfJztcbmV4cG9ydCBjb25zdCBCVUlMRF9JTl9TQ1JJUFRfU1JDID0gJ2h0dHBzOi8vbWlyYS0xMjU1ODMwOTkzLmNvcy5hcC1zaGFuZ2hhaS5teXFjbG91ZC5jb20vbGFiL3BsdWdpbi9iYXNlLnVzZXIuanMnO1xuXG5leHBvcnQgY29uc3QgSU5KRUNUX0FVVE8gPSAnYXV0byc7XG5leHBvcnQgY29uc3QgSU5KRUNUX1BBR0UgPSAncGFnZSc7XG5leHBvcnQgY29uc3QgSU5KRUNUX0NPTlRFTlQgPSAnY29udGVudCc7XG5cbmV4cG9ydCBjb25zdCBJTkpFQ1RfTUFQUElORyA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICAvLyBgYXV0b2AgdHJpZXMgdG8gcHJvdmlkZSBgd2luZG93YCBmcm9tIHRoZSByZWFsIHBhZ2UgYXMgYHVuc2FmZVdpbmRvd2BcbiAgW0lOSkVDVF9BVVRPXTogW0lOSkVDVF9QQUdFLCBJTkpFQ1RfQ09OVEVOVF0sXG4gIC8vIGluamVjdCBpbnRvIHBhZ2UgY29udGV4dFxuICBbSU5KRUNUX1BBR0VdOiBbSU5KRUNUX1BBR0VdLFxuICAvLyBpbmplY3QgaW50byBjb250ZW50IGNvbnRleHQgb25seVxuICBbSU5KRUNUX0NPTlRFTlRdOiBbSU5KRUNUX0NPTlRFTlRdLFxufTtcblxuZXhwb3J0IGNvbnN0IENNRF9TQ1JJUFRfQUREID0gJ0FkZFNjcmlwdCc7XG5leHBvcnQgY29uc3QgQ01EX1NDUklQVF9VUERBVEUgPSAnVXBkYXRlU2NyaXB0JztcblxuLy8gQWxsb3cgbWV0YWRhdGEgbGluZXMgdG8gc3RhcnQgd2l0aCBXSElURVNQQUNFPyAnLy8nIFNQQUNFXG4vLyBBbGxvdyBhbnl0aGluZyB0byBmb2xsb3cgdGhlIHByZWRlZmluZWQgdGV4dCBvZiB0aGUgbWV0YVN0YXJ0L0VuZFxuLy8gVGhlIFNQQUNFIG11c3QgYmUgb24gdGhlIHNhbWUgbGluZSBhbmQgc3BlY2lmaWNhbGx5IFxceDIwIGFzIFxccyB3b3VsZCBhbHNvIG1hdGNoIFxcclxcblxcdFxuLy8gTm90ZTogd2hlbiB0aGVyZSdzIG5vIHZhbGlkIG1ldGFibG9jaywgYW4gZW1wdHkgc3RyaW5nIGlzIG1hdGNoZWQgZm9yIGNvbnZlbmllbmNlXG5leHBvcnQgY29uc3QgTUVUQUJMT0NLX1JFID0gLyg/Ol58XFxuKVxccypcXC9cXC9cXHgyMD09VXNlclNjcmlwdD09KFtcXHNcXFNdKj9cXG4pXFxzKlxcL1xcL1xceDIwPT1cXC9Vc2VyU2NyaXB0PT18JC87XG5cbmV4cG9ydCBjb25zdCBJTkpFQ1RBQkxFX1RBQl9VUkxfUkUgPSAvXihodHRwcz98ZmlsZXxmdHBzPyk6LztcblxuLy8gYGJyb3dzZXJgIGlzIGEgbG9jYWwgdmFyaWFibGUgc2luY2Ugd2UgcmVtb3ZlIHRoZSBnbG9iYWwgYGNocm9tZWAgYW5kIGBicm93c2VyYCBpbiBpbmplY3RlZCpcbi8vIHRvIHByZXZlbnQgZXhwb3NpbmcgdGhlbSB0byB1c2Vyc2NyaXB0cyB3aXRoIGBAaW5qZWN0LWludG8gY29udGVudGBcbmV4cG9ydCBjb25zdCB7IGJyb3dzZXIgfSA9IGdsb2JhbDtcblxuLy8gc2V0VGltZW91dCB0cnVuY2F0ZXMgdGhlIGRlbGF5IHRvIGEgMzItYml0IHNpZ25lZCBpbnRlZ2VyIHNvIHRoZSBtYXggZGVsYXkgaXMgfjI0IGRheXNcbmV4cG9ydCBjb25zdCBUSU1FT1VUX01BWCA9IDB4N0ZGRl9GRkZGO1xuZXhwb3J0IGNvbnN0IFRJTUVPVVRfSE9VUiA9IDYwICogNjAgKiAxMDAwO1xuZXhwb3J0IGNvbnN0IFRJTUVPVVRfMjRIT1VSUyA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5leHBvcnQgY29uc3QgVElNRU9VVF9XRUVLID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4iLCIvLyBTQUZFVFkgV0FSTklORyEgRXhwb3J0cyB1c2VkIGJ5IGBpbmplY3RlZGAgbXVzdCBtYWtlIDo6c2FmZSgpIGNhbGxzIGFuZCB1c2UgX19wcm90b19fOm51bGxcblxuaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJy4vb2JqZWN0JztcbmltcG9ydCB7IGkxOG4sIG5vb3AgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgeyBub3JtYWxpemVLZXlzIH0gZnJvbSAnLi9vYmplY3QnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJbWFnZSA9ICcvcHVibGljL2ltYWdlcy9pY29uMTI4LnBuZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0SG9va3MoKSB7XG4gIGNvbnN0IGhvb2tzID0gW107XG5cbiAgZnVuY3Rpb24gZmlyZShkYXRhKSB7XG4gICAgaG9va3Muc2xpY2UoKS5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgY2IoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBob29rKGNhbGxiYWNrKSB7XG4gICAgaG9va3MucHVzaChjYWxsYmFjayk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGkgPSBob29rcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIGlmIChpID49IDApIGhvb2tzLnNwbGljZShpLCAxKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaG9vaywgZmlyZSB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYGluamVjdGVkYFxuICogQHBhcmFtIHtzdHJpbmd9IGNtZFxuICogQHBhcmFtIGRhdGFcbiAqIEBwYXJhbSB7e3JldHJ5PzogYm9vbGVhbiwgaWdub3JlRXJyb3I/OiBib29sZWFufX0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZENtZChjbWQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHNlbmRNZXNzYWdlKHsgY21kLCBkYXRhIH0sIG9wdGlvbnMpO1xufVxuXG4vLyBUaGVzZSBuZWVkIGBzcmNgIHBhcmFtZXRlciBzbyB3ZSdsbCB1c2Ugc2VuZENtZCBmb3IgdGhlbS4gV2UgY291bGQgaGF2ZSBmb3JnZWQgYHNyY2AgdmlhXG4vLyBicm93c2VyLnRhYnMuZ2V0Q3VycmVudCBidXQgdGhlcmUncyBubyBuZWVkIGFzIHRoZXkgbm9ybWFsbHkgdXNlIG9ubHkgYSB0aW55IGFtb3VudCBvZiBkYXRhLlxuY29uc3QgQ09NTUFORFNfV0lUSF9TUkMgPSBbXG4gICdDb25maXJtSW5zdGFsbCcsXG4gICdOb3RpZmljYXRpb24nLFxuICAnVGFiQ2xvc2UnLFxuICAnVGFiRm9jdXMnLFxuICAnVGFiT3BlbicsXG4gICdVcGRhdGVWYWx1ZScsXG4vKlxuICBUaGVzZSBhcmUgdXNlZCBvbmx5IGJ5IGNvbnRlbnQgc2NyaXB0cyB3aGVyZSBzZW5kQ21kRGlyZWN0bHkgY2FuJ3QgYmUgdXNlZCBhbnl3YXlcbiAgJ0dldEluamVjdGVkJyxcbiAgJ0dldFJlcXVlc3RJZCcsXG4gICdIdHRwUmVxdWVzdCcsXG4gICdJbmplY3Rpb25GZWVkYmFjaycsXG4gICdTZXRQb3B1cCcsXG4qL1xuXTtcbmNvbnN0IGdldEJnUGFnZSA9ICgpID0+IGJyb3dzZXIuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlPy4oKTtcblxuLyoqXG4gKiBTZW5kcyB0aGUgY29tbWFuZCtkYXRhIGRpcmVjdGx5IHNvIGl0J3Mgc3luY2hyb25vdXMgYW5kIGZhc3RlciB0aGFuIHNlbmRDbWQgdGhhbmtzIHRvIGRlZXBDb3B5LlxuICogV0FSTklORyEgTWFrZSBzdXJlIGBjbWRgIGhhbmRsZXIgZG9lc24ndCB1c2UgYHNyY2Agb3IgYGNtZGAgaXMgbGlzdGVkIGluIENPTU1BTkRTX1dJVEhfU1JDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZENtZERpcmVjdGx5KGNtZCwgZGF0YSwgb3B0aW9ucykge1xuICBjb25zdCBiZyA9ICFDT01NQU5EU19XSVRIX1NSQy5pbmNsdWRlcyhjbWQpICYmIGdldEJnUGFnZSgpO1xuICByZXR1cm4gYmcgJiYgYmcgIT09IHdpbmRvdyAmJiBiZy5kZWVwQ29weVxuICAgID8gYmcuaGFuZGxlQ29tbWFuZE1lc3NhZ2UoYmcuZGVlcENvcHkoeyBjbWQsIGRhdGEgfSkpLnRoZW4oZGVlcENvcHkpXG4gICAgOiBzZW5kQ21kKGNtZCwgZGF0YSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYklkXG4gKiBAcGFyYW0ge3N0cmluZ30gY21kXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIHt7ZnJhbWVJZD86IG51bWJlcn19IFtvcHRpb25zXVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRUYWJDbWQodGFiSWQsIGNtZCwgZGF0YSwgb3B0aW9ucykge1xuICByZXR1cm4gYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IGNtZCwgZGF0YSB9LCBvcHRpb25zKS5jYXRjaChub29wKTtcbn1cblxuLy8gVXNlZCBieSBgaW5qZWN0ZWRgXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2UocGF5bG9hZCwgeyByZXRyeSB9ID0ge30pIHtcbiAgaWYgKHJldHJ5KSByZXR1cm4gc2VuZE1lc3NhZ2VSZXRyeShwYXlsb2FkKTtcbiAgbGV0IHByb21pc2UgPSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UocGF5bG9hZCk7XG4gIC8vIElnbm9yaW5nIGVycm9ycyB3aGVuIHNlbmRpbmcgZnJvbSB0aGUgYmFja2dyb3VuZCBzY3JpcHQgYmVjYXVzZSBpdCdzIGEgYnJvYWRjYXN0XG4gIGlmICghcHJvY2Vzcy5lbnYuSVNfSU5KRUNURUQgJiYgd2luZG93ID09PSBnZXRCZ1BhZ2UoKSkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLmNhdGNoKG5vb3ApO1xuICB9XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYGluamVjdGVkYFxuICogVGhlIGFjdGl2ZSB0YWIgcGFnZSBhbmQgaXRzIFtjb250ZW50XSBzY3JpcHRzIGxvYWQgYmVmb3JlIHRoZSBleHRlbnNpb24nc1xuICogcGVyc2lzdGVudCBiYWNrZ3JvdW5kIHNjcmlwdCB3aGVuIENocm9tZSBzdGFydHMgd2l0aCBhIFVSTCB2aWEgY29tbWFuZCBsaW5lXG4gKiBvciB3aGVuIGNvbmZpZ3VyZWQgdG8gcmVzdG9yZSB0aGUgc2Vzc2lvbiwgaHR0cHM6Ly9jcmJ1Zy5jb20vMzE0Njg2XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZVJldHJ5KHBheWxvYWQsIHJldHJpZXMgPSAxMCkge1xuICBsZXQgcGF1c2VEdXJhdGlvbiA9IDEwO1xuICBmb3IgKDsgcmV0cmllcyA+IDA7IHJldHJpZXMgLT0gMSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VuZE1lc3NhZ2UocGF5bG9hZCk7XG4gICAgICBpZiAoZGF0YSkgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFgJHtlfWAuaW5jbHVkZXMoJ0NvdWxkIG5vdCBlc3RhYmxpc2ggY29ubmVjdGlvbi4nKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCBtYWtlUGF1c2UocGF1c2VEdXJhdGlvbik7XG4gICAgcGF1c2VEdXJhdGlvbiAqPSAyO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignVmlvbGVudG1vbmtleSBjYW5ub3QgY29ubmVjdCB0byB0aGUgYmFja2dyb3VuZCBwYWdlLicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdHBhZChpbnB1dCwgbGVuZ3RoLCBwYWQgPSAnMCcpIHtcbiAgbGV0IG51bSA9IGlucHV0LnRvU3RyaW5nKCk7XG4gIHdoaWxlIChudW0ubGVuZ3RoIDwgbGVuZ3RoKSBudW0gPSBgJHtwYWR9JHtudW19YDtcbiAgcmV0dXJuIG51bTtcbn1cblxuLyoqXG4gKiBHZXQgbG9jYWxlIGF0dHJpYnV0ZXMgc3VjaCBhcyBgQG5hbWU6emgtQ05gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVTdHJpbmcobWV0YSwga2V5KSB7XG4gIGNvbnN0IGxvY2FsZU1ldGEgPSBuYXZpZ2F0b3IubGFuZ3VhZ2VzXG4gIC8vIFVzZSBgbGFuZy50b0xvd2VyQ2FzZSgpYCBzaW5jZSB2Mi42LjVcbiAgLm1hcChsYW5nID0+IG1ldGFbYCR7a2V5fToke2xhbmd9YF0gfHwgbWV0YVtgJHtrZXl9OiR7bGFuZy50b0xvd2VyQ2FzZSgpfWBdKVxuICAuZmluZChCb29sZWFuKTtcbiAgcmV0dXJuIGxvY2FsZU1ldGEgfHwgbWV0YVtrZXldIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyaXB0TmFtZShzY3JpcHQpIHtcbiAgcmV0dXJuIHNjcmlwdC5jdXN0b20ubmFtZSB8fCBnZXRMb2NhbGVTdHJpbmcoc2NyaXB0Lm1ldGEsICduYW1lJylcbiAgICB8fCBgIyR7c2NyaXB0LnByb3BzLmlkID8/IGkxOG4oJ2xhYmVsTm9OYW1lJyl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxVcmwodXJsLCBiYXNlKSB7XG4gIGNvbnN0IG9iaiA9IG5ldyBVUkwodXJsLCBiYXNlKTtcbiAgLy8gVXNlIHByb3RvY29sIHdoaXRlbGlzdCB0byBmaWx0ZXIgVVJMc1xuICBpZiAoIVtcbiAgICAnaHR0cDonLFxuICAgICdodHRwczonLFxuICAgICdmdHA6JyxcbiAgICAnZGF0YTonLFxuICBdLmluY2x1ZGVzKG9iai5wcm90b2NvbCkpIG9iai5wcm90b2NvbCA9ICdodHRwOic7XG4gIHJldHVybiBvYmouaHJlZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUZpbGVuYW1lKG5hbWUpIHtcbiAgLy8gYGVzY2FwZWAgZ2VuZXJhdGVkIFVSSSBoYXMgJSBpbiBpdFxuICByZXR1cm4gbmFtZS5yZXBsYWNlKC9bLVxcXFwvOio/XCI8PnwlXFxzXS9nLCAobSkgPT4ge1xuICAgIGxldCBjb2RlID0gbS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KTtcbiAgICBpZiAoY29kZS5sZW5ndGggPCAyKSBjb2RlID0gYDAke2NvZGV9YDtcbiAgICByZXR1cm4gYC0ke2NvZGV9YDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVGaWxlbmFtZShmaWxlbmFtZSkge1xuICByZXR1cm4gZmlsZW5hbWUucmVwbGFjZSgvLShbMC05YS1mXXsyfSkvZywgKF9tLCBnKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGcsIDE2KSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWN0aXZlVGFiKCkge1xuICByZXR1cm4gKFxuICAgIGF3YWl0IGJyb3dzZXIudGFicy5xdWVyeSh7XG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICBjdXJyZW50V2luZG93OiB0cnVlLFxuICAgIH0pXG4gIClbMF0gfHwgKFxuICAgIC8vIENocm9tZSBidWcgd29ya2Fyb3VuZCB3aGVuIGFuIHVuZG9ja2VkIGRldnRvb2xzIHdpbmRvdyBpcyBmb2N1c2VkXG4gICAgYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHtcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIHdpbmRvd0lkOiAoYXdhaXQgYnJvd3Nlci53aW5kb3dzLmdldEN1cnJlbnQoKSkuaWQsXG4gICAgfSlcbiAgKVswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQYXVzZShtcykge1xuICByZXR1cm4gbXMgPCAwXG4gICAgPyBQcm9taXNlLnJlc29sdmUoKVxuICAgIDogbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnVlSm9pbihzZXBhcmF0b3IpIHtcbiAgcmV0dXJuIHRoaXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oc2VwYXJhdG9yKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVLZXlzKGtleSkge1xuICBpZiAoa2V5ID09IG51bGwpIHJldHVybiBbXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkgcmV0dXJuIGtleTtcbiAgcmV0dXJuIGAke2tleX1gLnNwbGl0KCcuJykuZmlsdGVyKEJvb2xlYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0R2V0KG9iaiwgcmF3S2V5LCBkZWYpIHtcbiAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMocmF3S2V5KTtcbiAgbGV0IHJlcyA9IG9iajtcbiAga2V5cy5ldmVyeSgoa2V5KSA9PiB7XG4gICAgaWYgKHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAoa2V5IGluIHJlcykpIHtcbiAgICAgIHJlcyA9IHJlc1trZXldO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlcyA9IGRlZjtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0U2V0KG9iaiwgcmF3S2V5LCB2YWwpIHtcbiAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMocmF3S2V5KTtcbiAgaWYgKCFrZXlzLmxlbmd0aCkgcmV0dXJuIHZhbDtcbiAgY29uc3Qgcm9vdCA9IG9iaiB8fCB7fTtcbiAgbGV0IHN1YiA9IHJvb3Q7XG4gIGNvbnN0IGxhc3RLZXkgPSBrZXlzLnBvcCgpO1xuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHN1YiA9IHN1YltrZXldIHx8IChzdWJba2V5XSA9IHt9KTtcbiAgfSk7XG4gIGlmICh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgIGRlbGV0ZSBzdWJbbGFzdEtleV07XG4gIH0gZWxzZSB7XG4gICAgc3ViW2xhc3RLZXldID0gdmFsO1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7e319IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZSxrZXkpOj99IFt0cmFuc2Zvcm1dXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RQaWNrKG9iaiwga2V5cywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBvYmo/LltrZXldO1xuICAgIGlmICh0cmFuc2Zvcm0pIHZhbHVlID0gdHJhbnNmb3JtKHZhbHVlLCBrZXkpO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSByZXNba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiByZXM7XG4gIH0sIHt9KTtcbn1cblxuLy8gaW52b2tlZCBhcyBvYmo6Om1hcEVudHJ5KChba2V5LCB2YWx1ZV0sIGksIGFsbEVudHJpZXMpID0+IHRyYW5zZm9ybWVkVmFsdWUpXG5leHBvcnQgZnVuY3Rpb24gbWFwRW50cnkoZnVuYykge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcykucmVkdWNlKChyZXMsIGVudHJ5LCBpLCBhbGxFbnRyaWVzKSA9PiB7XG4gICAgcmVzW2VudHJ5WzBdXSA9IGZ1bmMoZW50cnksIGksIGFsbEVudHJpZXMpO1xuICAgIHJldHVybiByZXM7XG4gIH0sIHt9KTtcbn1cblxuLy8gaW52b2tlZCBhcyBvYmo6OmZvckVhY2hFbnRyeSgoW2tleSwgdmFsdWVdLCBpLCBhbGxFbnRyaWVzKSA9PiB7fSlcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoRW50cnkoZnVuYykge1xuICBpZiAodGhpcykgT2JqZWN0LmVudHJpZXModGhpcykuZm9yRWFjaChmdW5jKTtcbn1cblxuLy8gaW52b2tlZCBhcyBvYmo6OmZvckVhY2hLZXkoa2V5ID0+IHt9LCBpLCBhbGxLZXlzKVxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hLZXkoZnVuYykge1xuICBpZiAodGhpcykgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChmdW5jKTtcbn1cblxuLy8gaW52b2tlZCBhcyBvYmo6OmZvckVhY2hWYWx1ZSh2YWx1ZSA9PiB7fSwgaSwgYWxsVmFsdWVzKVxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hWYWx1ZShmdW5jKSB7XG4gIGlmICh0aGlzKSBPYmplY3QudmFsdWVzKHRoaXMpLmZvckVhY2goZnVuYyk7XG59XG5cbi8vIE5lZWRlZCBmb3IgRmlyZWZveCdzIGJyb3dzZXIuc3RvcmFnZSBBUEkgd2hpY2ggZmFpbHMgb24gVnVlIG9ic2VydmFibGVzXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkoc3JjKSB7XG4gIHJldHVybiBzcmMgJiYgKFxuICAgIEFycmF5LmlzQXJyYXkoc3JjKSAmJiBzcmMubWFwKGRlZXBDb3B5KVxuICAgIC8vIFVzZWQgaW4gc2FmZSBjb250ZXh0XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgfHwgdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgc3JjOjptYXBFbnRyeSgoWywgdmFsXSkgPT4gZGVlcENvcHkodmFsKSlcbiAgKSB8fCBzcmM7XG59XG5cbi8vIFNpbXBsaWZpZWQgZGVlcCBlcXVhbGl0eSBjaGVja2VyXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxdWFsKGEsIGIpIHtcbiAgbGV0IHJlcztcbiAgaWYgKCFhIHx8ICFiIHx8IHR5cGVvZiBhICE9PSB0eXBlb2YgYiB8fCB0eXBlb2YgYSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXMgPSBhID09PSBiO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICByZXMgPSBhLmxlbmd0aCA9PT0gYi5sZW5ndGhcbiAgICAgICYmIGEuZXZlcnkoKGl0ZW0sIGkpID0+IGRlZXBFcXVhbChpdGVtLCBiW2ldKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qga2V5c0EgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBjb25zdCBrZXlzQiA9IE9iamVjdC5rZXlzKGIpO1xuICAgIHJlcyA9IGtleXNBLmxlbmd0aCA9PT0ga2V5c0IubGVuZ3RoXG4gICAgICAmJiBrZXlzQS5ldmVyeShrZXkgPT4ga2V5c0IuaW5jbHVkZXMoa2V5KSAmJiBkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuIiwiLy8gU0FGRVRZIFdBUk5JTkchIEV4cG9ydHMgdXNlZCBieSBgaW5qZWN0ZWRgIG11c3QgbWFrZSA6OnNhZmUoKSBjYWxscyBhbmQgdXNlIF9fcHJvdG9fXzpudWxsXG5cbmltcG9ydCB7IGJyb3dzZXIgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaTE4bihuYW1lLCBhcmdzKSB7XG4gIHJldHVybiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShuYW1lLCBhcmdzKSB8fCBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcocGFyYW0pIHtcbiAgaWYgKHBhcmFtID09IG51bGwpIHJldHVybiAnJztcbiAgcmV0dXJuIGAke3BhcmFtfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyID0gdG9TdHJpbmcpIHtcbiAgY29uc3QgY2FjaGVNYXAgPSB7fTtcbiAgZnVuY3Rpb24gbWVtb2l6ZWQoLi4uYXJncykge1xuICAgIC8vIFVzZWQgaW4gc2FmZSBjb250ZXh0XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgY29uc3Qga2V5ID0gcmVzb2x2ZXIoLi4uYXJncyk7XG4gICAgbGV0IGNhY2hlID0gY2FjaGVNYXBba2V5XTtcbiAgICBpZiAoIWNhY2hlKSB7XG4gICAgICBjYWNoZSA9IHtcbiAgICAgICAgdmFsdWU6IGZ1bmMuYXBwbHkodGhpcywgYXJncyksXG4gICAgICB9O1xuICAgICAgY2FjaGVNYXBba2V5XSA9IGNhY2hlO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGUudmFsdWU7XG4gIH1cbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgdGltZSkge1xuICBsZXQgc3RhcnRUaW1lO1xuICBsZXQgdGltZXI7XG4gIGxldCBjYWxsYmFjaztcbiAgdGltZSA9IE1hdGgubWF4KDAsICt0aW1lIHx8IDApO1xuICBmdW5jdGlvbiBjaGVja1RpbWUoKSB7XG4gICAgdGltZXIgPSBudWxsO1xuICAgIGlmIChwZXJmb3JtYW5jZS5ub3coKSA+PSBzdGFydFRpbWUpIGNhbGxiYWNrKCk7XG4gICAgZWxzZSBjaGVja1RpbWVyKCk7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tUaW1lcigpIHtcbiAgICBpZiAoIXRpbWVyKSB7XG4gICAgICBjb25zdCBkZWx0YSA9IHN0YXJ0VGltZSAtIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGNoZWNrVGltZSwgZGVsdGEpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkZWJvdW5jZWRGdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgKyB0aW1lO1xuICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgY2FsbGJhY2sgPSBudWxsO1xuICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICAgIGNoZWNrVGltZXIoKTtcbiAgfVxuICByZXR1cm4gZGVib3VuY2VkRnVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB0aW1lKSB7XG4gIGxldCBsYXN0VGltZSA9IDA7XG4gIHRpbWUgPSBNYXRoLm1heCgwLCArdGltZSB8fCAwKTtcbiAgZnVuY3Rpb24gdGhyb3R0bGVkRnVuY3Rpb24oLi4uYXJncykge1xuICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGlmIChsYXN0VGltZSArIHRpbWUgPCBub3cpIHtcbiAgICAgIGxhc3RUaW1lID0gbm93O1xuICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRocm90dGxlZEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmlxSWQocHJlZml4ID0gJ1ZNJykge1xuICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgcmV0dXJuIHByZWZpeFxuICAgICsgTWF0aC5mbG9vcigobm93IC0gTWF0aC5mbG9vcihub3cpKSAqIDFlMTIpLnRvU3RyaW5nKDM2KVxuICAgICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWUxMikudG9TdHJpbmcoMzYpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ8VWludDhBcnJheXxBcnJheX0gYnVmXG4gKiBAcGFyYW0ge251bWJlcn0gW29mZnNldF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXVxuICogQHJldHVybiB7c3RyaW5nfSBhIGJpbmFyeSBzdHJpbmcgaS5lLiBvbmUgYnl0ZSBwZXIgY2hhcmFjdGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWZmZXIyc3RyaW5nKGJ1Ziwgb2Zmc2V0ID0gMCwgbGVuZ3RoID0gMWU5OSkge1xuICAvLyBUaGUgbWF4IG51bWJlciBvZiBhcmd1bWVudHMgdmFyaWVzIGJldHdlZW4gSlMgZW5naW5lcyBidXQgaXQncyA+MzJrIHNvIHdlJ3JlIHNhZmVcbiAgY29uc3Qgc2xpY2VTaXplID0gODE5MjtcbiAgY29uc3Qgc2xpY2VzID0gW107XG4gIGNvbnN0IGFycmF5TGVuID0gYnVmLmxlbmd0aDsgLy8gcHJlc2VudCBvbiBVaW50OEFycmF5L0FycmF5XG4gIGNvbnN0IGVuZCA9IE1hdGgubWluKGFycmF5TGVuIHx8IGJ1Zi5ieXRlTGVuZ3RoLCBvZmZzZXQgKyBsZW5ndGgpO1xuICBjb25zdCBuZWVkc1NsaWNpbmcgPSBhcnJheUxlbiA9PSBudWxsIHx8IG9mZnNldCB8fCBlbmQgPiBzbGljZVNpemU7XG4gIGZvciAoOyBvZmZzZXQgPCBlbmQ7IG9mZnNldCArPSBzbGljZVNpemUpIHtcbiAgICBzbGljZXMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsXG4gICAgICBuZWVkc1NsaWNpbmdcbiAgICAgICAgPyBuZXcgVWludDhBcnJheShidWYsIG9mZnNldCwgTWF0aC5taW4oc2xpY2VTaXplLCBlbmQgLSBvZmZzZXQpKVxuICAgICAgICA6IGJ1ZikpO1xuICB9XG4gIHJldHVybiBzbGljZXMuam9pbignJyk7XG59XG5cbi8qKlxuICogRmFzdGVyIHRoYW4gYnVmZmVyMnN0cmluZytidG9hOiAyeCBpbiBDaHJvbWUsIDEweCBpbiBGRlxuICogQHBhcmFtIHtCbG9ifSBibG9iXG4gKiBAcGFyYW0ge251bWJlcn0gW29mZnNldF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXVxuICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBiYXNlNjQtZW5jb2RlZCBjb250ZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gYmxvYjJiYXNlNjQoYmxvYiwgb2Zmc2V0ID0gMCwgbGVuZ3RoID0gMWU5OSkge1xuICBpZiAob2Zmc2V0IHx8IGxlbmd0aCA8IGJsb2Iuc2l6ZSkge1xuICAgIGJsb2IgPSBibG9iLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgbGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gIWJsb2Iuc2l6ZSA/ICcnIDogbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgIHJlc29sdmUocmVzLnNsaWNlKHJlcy5pbmRleE9mKCcsJykgKyAxKSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmcydWludDhhcnJheShzdHIpIHtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgY29uc3QgYXJyYXkgPSBuZXcgVWludDhBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgYXJyYXlbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmNvbnN0IFZFUlNJT05fUkUgPSAvXiguKj8pLShbLS4wLTlhLXpdKyl8JC9pO1xuY29uc3QgRElHSVRTX1JFID0gL15cXGQrJC87IC8vIHVzaW5nIHJlZ2V4cCB0byBhdm9pZCArJzFlMicgYmVpbmcgcGFyc2VkIGFzIDEwMFxuXG4vKiogQHJldHVybiAtMSB8IDAgfCAxICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVZlcnNpb24odmVyMSwgdmVyMikge1xuICAvLyBVc2VkIGluIHNhZmUgY29udGV4dFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgY29uc3QgWywgbWFpbjEgPSB2ZXIxIHx8ICcnLCBwcmUxXSA9IFZFUlNJT05fUkUuZXhlYyh2ZXIxKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGNvbnN0IFssIG1haW4yID0gdmVyMiB8fCAnJywgcHJlMl0gPSBWRVJTSU9OX1JFLmV4ZWModmVyMik7XG4gIGNvbnN0IGRlbHRhID0gY29tcGFyZVZlcnNpb25DaHVuayhtYWluMSwgbWFpbjIpXG4gICAgfHwgIXByZTEgLSAhcHJlMiAvLyAxLjIuMy1wcmUtcmVsZWFzZSBpcyBsZXNzIHRoYW4gMS4yLjNcbiAgICB8fCBwcmUxICYmIGNvbXBhcmVWZXJzaW9uQ2h1bmsocHJlMSwgcHJlMiwgdHJ1ZSk7IC8vIGlmIHByZTEgaXMgcHJlc2VudCwgcHJlMiBpcyB0b29cbiAgcmV0dXJuIGRlbHRhIDwgMCA/IC0xIDogKyEhZGVsdGE7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9uQ2h1bmsodmVyMSwgdmVyMiwgaXNTZW12ZXJNb2RlKSB7XG4gIGNvbnN0IHBhcnRzMSA9IHZlcjEuc3BsaXQoJy4nKTtcbiAgY29uc3QgcGFydHMyID0gdmVyMi5zcGxpdCgnLicpO1xuICBjb25zdCBsZW4xID0gcGFydHMxLmxlbmd0aDtcbiAgY29uc3QgbGVuMiA9IHBhcnRzMi5sZW5ndGg7XG4gIGNvbnN0IGxlbiA9IChpc1NlbXZlck1vZGUgPyBNYXRoLm1pbiA6IE1hdGgubWF4KShsZW4xLCBsZW4yKTtcbiAgbGV0IGRlbHRhO1xuICBmb3IgKGxldCBpID0gMDsgIWRlbHRhICYmIGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGNvbnN0IGEgPSBwYXJ0czFbaV07XG4gICAgY29uc3QgYiA9IHBhcnRzMltpXTtcbiAgICBpZiAoaXNTZW12ZXJNb2RlKSB7XG4gICAgICBkZWx0YSA9IERJR0lUU19SRS50ZXN0KGEpICYmIERJR0lUU19SRS50ZXN0KGIpXG4gICAgICAgID8gYSAtIGJcbiAgICAgICAgOiBhID4gYiB8fCBhIDwgYiAmJiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsdGEgPSAocGFyc2VJbnQoYSwgMTApIHx8IDApIC0gKHBhcnNlSW50KGIsIDEwKSB8fCAwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlbHRhIHx8IGlzU2VtdmVyTW9kZSAmJiAobGVuMSAtIGxlbjIpO1xufVxuXG5jb25zdCB1bml0cyA9IFtcbiAgWydtaW4nLCA2MF0sXG4gIFsnaCcsIDI0XSxcbiAgWydkJywgMTAwMCwgMzY1XSxcbiAgWyd5J10sXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWUoZHVyYXRpb24pIHtcbiAgZHVyYXRpb24gLz0gNjAgKiAxMDAwO1xuICBjb25zdCB1bml0SW5mbyA9IHVuaXRzLmZpbmQoKGl0ZW0pID0+IHtcbiAgICBjb25zdCBtYXggPSBpdGVtWzFdO1xuICAgIGlmICghbWF4IHx8IGR1cmF0aW9uIDwgbWF4KSByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCBzdGVwID0gaXRlbVsyXSB8fCBtYXg7XG4gICAgZHVyYXRpb24gLz0gc3RlcDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gYCR7ZHVyYXRpb24gfCAwfSR7dW5pdEluZm9bMF19YDtcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdEJ5dGVMZW5ndGggPSBsZW4gPT4gKFxuICAhbGVuID8gJydcbiAgICA6IGxlbiA8IDEwMjQgJiYgYCR7bGVufSBCYFxuICAgIHx8IGxlbiA8IDEwMjQgKiAxMDI0ICYmIGAke2xlbiA+PiAxMH0ga2AgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1iaXR3aXNlXG4gICAgfHwgYCR7KyhsZW4gLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDEpfSBNYCAvLyBhbGxvdyBmcmFjdGlvbnMgZm9yIG1lZ2FieXRlc1xuKTtcblxuLy8gVXNlZCBieSBgaW5qZWN0ZWRgXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShvYmopIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9iajo6aGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZUFycmF5KGRhdGEpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdO1xufVxuXG5jb25zdCBiaW5hcnlUeXBlcyA9IFtcbiAgJ2Jsb2InLFxuICAnYXJyYXlidWZmZXInLFxuXTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0TG9jYWxGaWxlKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gIC8vIG9ubHkgR0VUIG1ldGhvZCBpcyBhbGxvd2VkIGZvciBsb2NhbCBmaWxlc1xuICAvLyBoZWFkZXJzIGlzIG1lYW5pbmdsZXNzXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3QgeyByZXNwb25zZVR5cGUgfSA9IG9wdGlvbnM7XG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgaWYgKGJpbmFyeVR5cGVzLmluY2x1ZGVzKHJlc3BvbnNlVHlwZSkpIHhoci5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGU7XG4gICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIHN0YXR1cyBmb3IgYGZpbGU6YCBwcm90b2NvbCB3aWxsIGFsd2F5cyBiZSBgMGBcbiAgICAgIHJlc3VsdC5zdGF0dXMgPSB4aHIuc3RhdHVzIHx8IDIwMDtcbiAgICAgIHJlc3VsdC5kYXRhID0gYmluYXJ5VHlwZXMuaW5jbHVkZXMocmVzcG9uc2VUeXBlKSA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICBpZiAocmVzcG9uc2VUeXBlID09PSAnanNvbicpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQuZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0LmRhdGEpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBpZ25vcmUgaW52YWxpZCBKU09OXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID4gMzAwKSB7XG4gICAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfVxuICAgIH07XG4gICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICByZXN1bHQuc3RhdHVzID0gLTE7XG4gICAgICByZWplY3QocmVzdWx0KTtcbiAgICB9O1xuICAgIHhoci5zZW5kKCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEV4Y2x1ZGVzIGB0ZXh0L2h0bWxgIHRvIGF2b2lkIExJTksgaGVhZGVyIHRoYXQgQ2hyb21lIHVzZXMgdG8gcHJlZmV0Y2gganMgYW5kIGNzcyxcbiAqIGJlY2F1c2UgR3JlYXN5Rm9yaydzIDQwNCBlcnJvciByZXNwb25zZSBjYXVzZXMgQ1NQIHZpb2xhdGlvbnMgaW4gY29uc29sZSBvZiBvdXIgcGFnZS5cbiAqL1xuY29uc3QgRk9SQ0VEX0FDQ0VQVCA9IHtcbiAgJ2dyZWFzeWZvcmsub3JnJzogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQsIHRleHQvcGxhaW4sIHRleHQvY3NzJyxcbn07XG5cbmV4cG9ydCBjb25zdCBpc1JlbW90ZSA9IHVybCA9PiB1cmxcbiAgJiYgISgvXihmaWxlOnxkYXRhOnxodHRwcz86XFwvXFwvKGxvY2FsaG9zdHwxMjdcXC4wXFwuMFxcLjFbOi9dKSkvLnRlc3QodXJsKSk7XG5cbi8qKiBAdHlwZWRlZiB7e1xuICB1cmw6IHN0cmluZyxcbiAgc3RhdHVzOiBudW1iZXIsXG4gIGhlYWRlcnM6IEhlYWRlcnMsXG4gIGRhdGE6IHN0cmluZ3xBcnJheUJ1ZmZlcnxCbG9ifE9iamVjdFxufX0gVk1SZXF1ZXN0UmVzcG9uc2UgKi9cbi8qKlxuICogTWFrZSBhIHJlcXVlc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge1JlcXVlc3RJbml0fSBvcHRpb25zXG4gKiBAcmV0dXJuIFByb21pc2U8Vk1SZXF1ZXN0UmVzcG9uc2U+XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gIC8vIGZldGNoIGRvZXMgbm90IHN1cHBvcnQgbG9jYWwgZmlsZVxuICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2ZpbGU6Ly8nKSkgcmV0dXJuIHJlcXVlc3RMb2NhbEZpbGUodXJsLCBvcHRpb25zKTtcbiAgY29uc3QgeyBib2R5LCBoZWFkZXJzLCByZXNwb25zZVR5cGUgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzQm9keU9iaiA9IGJvZHkgJiYgYm9keTo6KHt9KS50b1N0cmluZygpID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgY29uc3QgaG9zdG5hbWUgPSB1cmwuc3BsaXQoJy8nLCAzKVsyXTtcbiAgY29uc3QgYWNjZXB0ID0gRk9SQ0VEX0FDQ0VQVFtob3N0bmFtZV07XG4gIC8vIE5vdCB1c2luZyAuLi5zcHJlYWQgYmVjYXVzZSBCYWJlbCBtaXN0YWtlbmx5IGFkZHMgaXRzIHBvbHlmaWxsIHRvIGluamVjdGVkLXdlYlxuICBjb25zdCBpbml0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgY2FjaGU6IGlzUmVtb3RlKHVybCkgPyB1bmRlZmluZWQgOiAnbm8tY2FjaGUnLFxuICB9LCBvcHRpb25zLCB7XG4gICAgYm9keTogaXNCb2R5T2JqID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5LFxuICAgIGhlYWRlcnM6IGlzQm9keU9iaiB8fCBhY2NlcHRcbiAgICAgID8gT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgaXNCb2R5T2JqICYmIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBhY2NlcHQgJiYgeyBhY2NlcHQgfSlcbiAgICAgIDogaGVhZGVycyxcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IHsgdXJsLCBzdGF0dXM6IC0xIH07XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XG4gICAgY29uc3QgbG9hZE1ldGhvZCA9IHtcbiAgICAgIGFycmF5YnVmZmVyOiAnYXJyYXlCdWZmZXInLFxuICAgICAgYmxvYjogJ2Jsb2InLFxuICAgICAganNvbjogJ2pzb24nLFxuICAgIH1bcmVzcG9uc2VUeXBlXSB8fCAndGV4dCc7XG4gICAgLy8gc3RhdHVzIGZvciBgZmlsZTpgIHByb3RvY29sIHdpbGwgYWx3YXlzIGJlIGAwYFxuICAgIHJlc3VsdC5zdGF0dXMgPSByZXNwLnN0YXR1cyB8fCAyMDA7XG4gICAgcmVzdWx0LmhlYWRlcnMgPSByZXNwLmhlYWRlcnM7XG4gICAgcmVzdWx0LmRhdGEgPSBhd2FpdCByZXNwW2xvYWRNZXRob2RdKCk7XG4gIH0gY2F0Y2ggeyAvKiBOT1AgKi8gfVxuICBpZiAocmVzdWx0LnN0YXR1cyA8IDAgfHwgcmVzdWx0LnN0YXR1cyA+IDMwMCkgdGhyb3cgcmVzdWx0O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBVc2VkIGJ5IGBpbmplY3RlZGBcbmNvbnN0IFNJTVBMRV9WQUxVRV9UWVBFID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIHN0cmluZzogJ3MnLFxuICBudW1iZXI6ICduJyxcbiAgYm9vbGVhbjogJ2InLFxufTtcblxuLy8gVXNlZCBieSBgaW5qZWN0ZWRgXG5leHBvcnQgZnVuY3Rpb24gZHVtcFNjcmlwdFZhbHVlKHZhbHVlLCBqc29uRHVtcCA9IEpTT04uc3RyaW5naWZ5KSB7XG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gU0lNUExFX1ZBTFVFX1RZUEVbdHlwZW9mIHZhbHVlXTtcbiAgICByZXR1cm4gYCR7c2ltcGxlIHx8ICdvJ30ke3NpbXBsZSA/IHZhbHVlIDoganNvbkR1bXAodmFsdWUpfWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IElOSkVDVF9QQUdFLCBicm93c2VyIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBzZW5kQ21kIH0gZnJvbSAnLi91dGlsLWNvbnRlbnQnO1xuXG5jb25zdCBhbGxvd2VkID0gY3JlYXRlTnVsbE9iaigpO1xuY29uc3QgZGF0YUtleU5hbWVNYXAgPSBjcmVhdGVOdWxsT2JqKCk7XG5jb25zdCBoYW5kbGVycyA9IGNyZWF0ZU51bGxPYmooKTtcbmNvbnN0IGJnSGFuZGxlcnMgPSBjcmVhdGVOdWxsT2JqKCk7XG5jb25zdCBvblNjcmlwdHMgPSBbXTtcbmNvbnN0IGFzc2lnbkhhbmRsZXJzID0gKGRlc3QsIHNyYywgZm9yY2UpID0+IHtcbiAgaWYgKGZvcmNlKSB7XG4gICAgYXNzaWduKGRlc3QsIHNyYyk7XG4gIH0gZWxzZSB7XG4gICAgb25TY3JpcHRzLnB1c2goKCkgPT4gYXNzaWduKGRlc3QsIHNyYykpO1xuICB9XG59O1xuY29uc3QgYWxsb3dDbWQgPSAoY21kLCBkYXRhS2V5KSA9PiB7XG4gIGVuc3VyZU5lc3RlZFByb3AoYWxsb3dlZCwgY21kLCBkYXRhS2V5LCB0cnVlKTtcbn07XG5jb25zdCBYSFIgPSBbJ0h0dHBSZXF1ZXN0JywgJ0Fib3J0UmVxdWVzdCddO1xuY29uc3QgQUREX0VMRU1FTlQgPSBbJ0FkZEVsZW1lbnQnXTtcbmNvbnN0IFVQREFURV9WQUxVRSA9IFsnVXBkYXRlVmFsdWUnXTtcbmNvbnN0IFRBQl9DTE9TRSA9IFsnVGFiQ2xvc2UnXTtcbmNvbnN0IEdFVF9SRVNPVVJDRSA9IFsnR2V0UmVzb3VyY2UnXTtcbmNvbnN0IEdNX0NNRCA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBhZGRFbGVtZW50OiBBRERfRUxFTUVOVCxcbiAgYWRkU3R5bGU6IEFERF9FTEVNRU5ULFxuICBkZWxldGVWYWx1ZTogVVBEQVRFX1ZBTFVFLFxuICBkb3dubG9hZDogWEhSLFxuICBnZXRSZXNvdXJjZVRleHQ6IEdFVF9SRVNPVVJDRSxcbiAgZ2V0UmVzb3VyY2VVUkw6IEdFVF9SRVNPVVJDRSwgLy8gYWxzbyBhbGxvd3MgdGhlIG1pc3NwZWxsZWQgR00uZ2V0UmVzb3VyY2VVUkwgZm9yIGNvbXBhdGliaWxpdHlcbiAgbm90aWZpY2F0aW9uOiBbJ05vdGlmaWNhdGlvbicsICdSZW1vdmVOb3RpZmljYXRpb24nXSxcbiAgb3BlbkluVGFiOiBbJ1RhYk9wZW4nLCBUQUJfQ0xPU0VdLFxuICByZWdpc3Rlck1lbnVDb21tYW5kOiBbJ1JlZ2lzdGVyTWVudSddLFxuICBzZXRDbGlwYm9hcmQ6IFsnU2V0Q2xpcGJvYXJkJ10sXG4gIHNldFZhbHVlOiBVUERBVEVfVkFMVUUsXG4gIHVucmVnaXN0ZXJNZW51Q29tbWFuZDogWydVbnJlZ2lzdGVyTWVudSddLFxufTtcbmNvbnN0IEdSQU5UX0NNRCA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICAnR00uZ2V0UmVzb3VyY2VVcmwnOiBHRVRfUkVTT1VSQ0UsXG4gICdHTS54bWxIdHRwUmVxdWVzdCc6IFhIUixcbiAgJ0dNX3htbGh0dHBSZXF1ZXN0JzogWEhSLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHF1b3RlLXByb3BzXG4gIFtXSU5ET1dfQ0xPU0VdOiBUQUJfQ0xPU0UsXG4gIFtXSU5ET1dfRk9DVVNdOiBbJ1RhYkZvY3VzJ10sXG59O1xuXG5jb25zdCBicmlkZ2UgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgaWRzOiBbXSwgLy8gYWxsIGlkcyBpbmNsdWRpbmcgdGhlIGRpc2FibGVkIG9uZXMgZm9yIFNldFBvcHVwXG4gIHJ1bm5pbmdJZHM6IFtdLFxuICAvLyB1c2Vyc2NyaXB0cyBydW5uaW5nIGluIHRoZSBjb250ZW50IHNjcmlwdCBjb250ZXh0IGFyZSBtZXNzYWdlZCB2aWEgaW52b2tlR3Vlc3RcbiAgLyoqIEB0eXBlIE51bWJlcltdICovXG4gIGludm9rYWJsZUlkczogW10sXG4gIGZhaWxlZElkczogW10sXG4gIGNhY2hlOiBjcmVhdGVOdWxsT2JqKCksXG4gIHBhdGhNYXBzOiBjcmVhdGVOdWxsT2JqKCksXG4gIG9uU2NyaXB0cyxcbiAgYWxsb3dDbWQsXG4gIC8qKlxuICAgKiBXaXRob3V0IGBmb3JjZWAgaGFuZGxlcnMgd2lsbCBiZSBhZGRlZCBvbmx5IHdoZW4gdXNlcnNjcmlwdHMgYXJlIGFib3V0IHRvIGJlIGluamVjdGVkLlxuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBNZXNzYWdlRnJvbUd1ZXN0SGFuZGxlcj59IG9ialxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICovXG4gIGFkZEhhbmRsZXJzKG9iaiwgZm9yY2UpIHtcbiAgICBhc3NpZ25IYW5kbGVycyhoYW5kbGVycywgb2JqLCBmb3JjZSk7XG4gIH0sXG4gIC8qKiB7IENvbW1hbmROYW1lOiB0cnVlIH0gd2lsbCByZWxheSB0aGUgcmVxdWVzdCB2aWEgc2VuZENtZCBhcyBpcy5cbiAgICogV2l0aG91dCBgZm9yY2VgIGhhbmRsZXJzIHdpbGwgYmUgYWRkZWQgb25seSB3aGVuIHVzZXJzY3JpcHRzIGFyZSBhYm91dCB0byBiZSBpbmplY3RlZC4gKi9cbiAgYWRkQmFja2dyb3VuZEhhbmRsZXJzKG9iaiwgZm9yY2UpIHtcbiAgICBhc3NpZ25IYW5kbGVycyhiZ0hhbmRsZXJzLCBvYmosIGZvcmNlKTtcbiAgfSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7Vk1JbmplY3RlZFNjcmlwdCB8IFZNU2NyaXB0fSBzY3JpcHRcbiAgICovXG4gIGFsbG93U2NyaXB0KHsgZGF0YUtleSwgbWV0YSB9KSB7XG4gICAgYWxsb3dDbWQoJ1J1bicsIGRhdGFLZXkpO1xuICAgIGRhdGFLZXlOYW1lTWFwW2RhdGFLZXldID0gbWV0YS5uYW1lO1xuICAgIG1ldGEuZ3JhbnQ6OmZvckVhY2goZ3JhbnQgPT4ge1xuICAgICAgY29uc3QgY21kcyA9IEdSQU5UX0NNRFtncmFudF1cbiAgICAgICAgfHwgL15HTVsuX10vOjpyZWdleHBUZXN0KGdyYW50KSAmJiBHTV9DTURbZ3JhbnQ6OnNsaWNlKDMpXTtcbiAgICAgIGlmIChjbWRzKSBjbWRzOjpmb3JFYWNoKGNtZCA9PiBhbGxvd0NtZChjbWQsIGRhdGFLZXkpKTtcbiAgICB9KTtcbiAgfSxcbiAgLy8gcmVhbG0gaXMgcHJvdmlkZWQgd2hlbiBjYWxsZWQgZGlyZWN0bHkgdmlhIGludm9rZUhvc3RcbiAgYXN5bmMgb25IYW5kbGUoeyBjbWQsIGRhdGEsIGRhdGFLZXksIG5vZGUgfSwgcmVhbG0pIHtcbiAgICBjb25zdCBoYW5kbGUgPSBoYW5kbGVyc1tjbWRdO1xuICAgIGlmICghaGFuZGxlIHx8ICFhbGxvd2VkW2NtZF0/LltkYXRhS2V5XSkge1xuICAgICAgLy8gVE9ETzogbWF5YmUgcmVtb3ZlIHRoaXMgY2hlY2sgaWYgb3VyIFZBVUxUIGlzIHJlbGlhYmxlXG4gICAgICBsb2coJ2luZm8nLCBudWxsLCBgSW52YWxpZCBjb21tYW5kOiBcIiR7Y21kfVwiIGZyb20gXCIke2RhdGFLZXlOYW1lTWFwW2RhdGFLZXldIHx8ICc/J31cImApO1xuICAgIH1cbiAgICBjb25zdCBjYWxsYmFja0lkID0gZGF0YSAmJiBnZXRPd25Qcm9wKGRhdGEsIENBTExCQUNLX0lEKTtcbiAgICBpZiAoY2FsbGJhY2tJZCkge1xuICAgICAgZGF0YSA9IGRhdGEuZGF0YTtcbiAgICB9XG4gICAgbGV0IHJlcyA9IGhhbmRsZSA9PT0gdHJ1ZVxuICAgICAgPyBzZW5kQ21kKGNtZCwgZGF0YSlcbiAgICAgIDogbm9kZTo6aGFuZGxlKGRhdGEsIHJlYWxtIHx8IElOSkVDVF9QQUdFKTtcbiAgICBpZiAoaXNQcm9taXNlKHJlcykpIHtcbiAgICAgIHJlcyA9IGF3YWl0IHJlcztcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrSWQpIHtcbiAgICAgIGJyaWRnZS5wb3N0KCdDYWxsYmFjaycsIHsgaWQ6IGNhbGxiYWNrSWQsIGRhdGE6IHJlcyB9LCByZWFsbSk7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnJpZGdlO1xuXG5icm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKCh7IGNtZCwgZGF0YSB9LCBzcmMpID0+IHtcbiAgY29uc3QgZm4gPSBiZ0hhbmRsZXJzW2NtZF07XG4gIGlmIChmbikgZm4oZGF0YSwgc3JjKTtcbn0pO1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXNzYWdlRnJvbUd1ZXN0SGFuZGxlclxuICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuICogQHBhcmFtIHtJTkpFQ1RfQ09OVEVOVCB8IElOSkVDVF9QQUdFfSByZWFsbSAtXG4gKiAgIElOSkVDVF9DT05URU5UIHdoZW4gdGhlIG1lc3NhZ2UgaXMgZnJvbSB0aGUgY29udGVudCBzY3JpcHQgY29udGV4dCxcbiAqICAgSU5KRUNUX1BBR0Ugb3RoZXJ3aXNlLiBNYWtlIHN1cmUgdG8gc3BlY2lmeSB0aGUgc2FtZSByZWFsbSB3aGVuIG1lc3NhZ2luZ1xuICogICB0aGUgcmVzdWx0cyBiYWNrIG90aGVyd2lzZSBpdCB3b24ndCByZWFjaCB0aGUgdGFyZ2V0IHNjcmlwdC5cbiAqL1xuIiwiaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5cbmJyaWRnZS5vblNjcmlwdHMucHVzaCgoKSA9PiB7XG4gIGxldCBzZXRDbGlwYm9hcmQ7XG4gIGlmIChJU19GSVJFRk9YKSB7XG4gICAgbGV0IGNsaXBib2FyZERhdGE7XG4gICAgLy8gb2xkIEZpcmVmb3ggZGVmaW5lcyBpdCBvbiBhIGRpZmZlcmVudCBwcm90b3R5cGUgc28gd2UnbGwganVzdCBncmFiIGl0IGZyb20gZG9jdW1lbnQgZGlyZWN0bHlcbiAgICBjb25zdCB7IGV4ZWNDb21tYW5kIH0gPSBkb2N1bWVudDtcbiAgICBjb25zdCB7IHNldERhdGEgfSA9IERhdGFUcmFuc2ZlcltQUk9UT107XG4gICAgY29uc3QgeyBnZXQ6IGdldENsaXBib2FyZERhdGEgfSA9IGRlc2NyaWJlUHJvcGVydHkoQ2xpcGJvYXJkRXZlbnRbUFJPVE9dLCAnY2xpcGJvYXJkRGF0YScpO1xuICAgIGNvbnN0IHsgcHJldmVudERlZmF1bHQsIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiB9ID0gRXZlbnRbUFJPVE9dO1xuICAgIGNvbnN0IG9uQ29weSA9IGUgPT4ge1xuICAgICAgZTo6c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBlOjpwcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZTo6Z2V0Q2xpcGJvYXJkRGF0YSgpOjpzZXREYXRhKGNsaXBib2FyZERhdGEudHlwZSB8fCAndGV4dC9wbGFpbicsIGNsaXBib2FyZERhdGEuZGF0YSk7XG4gICAgfTtcbiAgICBzZXRDbGlwYm9hcmQgPSBwYXJhbXMgPT4ge1xuICAgICAgY2xpcGJvYXJkRGF0YSA9IHBhcmFtcztcbiAgICAgIGRvY3VtZW50OjpvbignY29weScsIG9uQ29weSk7XG4gICAgICBpZiAoIWRvY3VtZW50OjpleGVjQ29tbWFuZCgnY29weScpICYmIHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgICAgIGxvZygnd2FybicsIG51bGwsICdHTV9zZXRDbGlwYm9hcmQgZmFpbGVkIScpO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQ6Om9mZignY29weScsIG9uQ29weSk7XG4gICAgICBjbGlwYm9hcmREYXRhID0gbnVsbDtcbiAgICB9O1xuICB9XG4gIGJyaWRnZS5hZGRIYW5kbGVycyh7XG4gICAgU2V0Q2xpcGJvYXJkOiBzZXRDbGlwYm9hcmQgfHwgdHJ1ZSxcbiAgfSwgdHJ1ZSk7XG59KTtcbiIsImltcG9ydCBicmlkZ2UgZnJvbSAnLi9icmlkZ2UnO1xuaW1wb3J0IHsgZGVjb2RlUmVzb3VyY2UsIGVsZW1CeVRhZywgbWFrZUVsZW0sIHNlbmRDbWQgfSBmcm9tICcuL3V0aWwtY29udGVudCc7XG5cbmNvbnN0IG1lbnVzID0gY3JlYXRlTnVsbE9iaigpO1xubGV0IHNldFBvcHVwVGhyb3R0bGU7XG5sZXQgaXNQb3B1cFNob3duO1xuXG5icmlkZ2Uub25TY3JpcHRzLnB1c2goaW5qZWN0aW9uID0+IHtcbiAgaXNQb3B1cFNob3duID0gaW5qZWN0aW9uLmlzUG9wdXBTaG93bjtcbn0pO1xuXG5icmlkZ2UuYWRkQmFja2dyb3VuZEhhbmRsZXJzKHtcbiAgUG9wdXBTaG93bihzdGF0ZSkge1xuICAgIGlzUG9wdXBTaG93biA9IHN0YXRlO1xuICAgIHNlbmRTZXRQb3B1cCgpO1xuICB9LFxufSwgdHJ1ZSk7XG5cbmJyaWRnZS5hZGRIYW5kbGVycyh7XG4gIC8qKiBAdGhpcyB7Tm9kZX0gKi9cbiAgQWRkRWxlbWVudCh7IHRhZywgYXR0cnMsIGNiSWQgfSwgcmVhbG0pIHtcbiAgICBsZXQgZWw7XG4gICAgbGV0IHJlcztcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpc1xuICAgICAgICB8fCAvXihzY3JpcHR8c3R5bGV8bGlua3xtZXRhKSQvaTo6cmVnZXhwVGVzdCh0YWcpICYmIGVsZW1CeVRhZygnaGVhZCcpXG4gICAgICAgIHx8IGVsZW1CeVRhZygnYm9keScpXG4gICAgICAgIHx8IGVsZW1CeVRhZygnKicpO1xuICAgICAgZWwgPSBtYWtlRWxlbSh0YWcsIGF0dHJzKTtcbiAgICAgIHBhcmVudDo6YXBwZW5kQ2hpbGQoZWwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIEEgcGFnZS1tb2RlIHVzZXJzY3JpcHQgY2FuJ3QgY2F0Y2ggRE9NIGVycm9ycyBpbiBhIGNvbnRlbnQgc2NyaXB0IHNvIHdlIHBhc3MgaXQgZXhwbGljaXRseVxuICAgICAgLy8gVE9ETzogbWF5YmUgbW92ZSB0cnkvY2F0Y2ggdG8gYnJpZGdlLm9uSGFuZGxlIGFuZCB1c2UgYnJpZGdlLnNlbmRTeW5jIGluIGFsbCB3ZWIgY29tbWFuZHNcbiAgICAgIHJlcyA9IFtgJHtlfWAsIGUuc3RhY2tdO1xuICAgIH1cbiAgICBicmlkZ2UucG9zdCgnQ2FsbGJhY2snLCB7IGlkOiBjYklkLCBkYXRhOiByZXMgfSwgcmVhbG0sIGVsKTtcbiAgfSxcblxuICBHZXRSZXNvdXJjZSh7IGlkLCBpc0Jsb2IsIGtleSB9KSB7XG4gICAgY29uc3QgcGF0aCA9IGJyaWRnZS5wYXRoTWFwc1tpZF0/LltrZXldIHx8IGtleTtcbiAgICBjb25zdCByYXcgPSBicmlkZ2UuY2FjaGVbcGF0aF07XG4gICAgcmV0dXJuIHJhdyA/IGRlY29kZVJlc291cmNlKHJhdywgaXNCbG9iKSA6IHRydWU7XG4gIH0sXG5cbiAgUmVnaXN0ZXJNZW51KHsgaWQsIGNhcCB9KSB7XG4gICAgaWYgKElTX1RPUCkge1xuICAgICAgZW5zdXJlTmVzdGVkUHJvcChtZW51cywgaWQsIGNhcCwgMSk7XG4gICAgICBzZW5kU2V0UG9wdXAodHJ1ZSk7XG4gICAgfVxuICB9LFxuXG4gIFVucmVnaXN0ZXJNZW51KHsgaWQsIGNhcCB9KSB7XG4gICAgaWYgKElTX1RPUCkge1xuICAgICAgZGVsZXRlIG1lbnVzW2lkXT8uW2NhcF07XG4gICAgICBzZW5kU2V0UG9wdXAodHJ1ZSk7XG4gICAgfVxuICB9LFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kU2V0UG9wdXAoaXNEZWxheWVkKSB7XG4gIGlmIChpc1BvcHVwU2hvd24pIHtcbiAgICBpZiAoaXNEZWxheWVkKSB7XG4gICAgICBpZiAoc2V0UG9wdXBUaHJvdHRsZSkgcmV0dXJuO1xuICAgICAgLy8gUHJldmVudGluZyBmbGlja2VyIGluIHBvcHVwIHdoZW4gc2NyaXB0cyByZS1yZWdpc3RlciBtZW51c1xuICAgICAgc2V0UG9wdXBUaHJvdHRsZSA9IHNlbmRDbWQoJ1NldFRpbWVvdXQnLCAwKTtcbiAgICAgIGF3YWl0IHNldFBvcHVwVGhyb3R0bGU7XG4gICAgICBzZXRQb3B1cFRocm90dGxlID0gbnVsbDtcbiAgICB9XG4gICAgc2VuZENtZCgnU2V0UG9wdXAnLCB7IG1lbnVzLCBfX3Byb3RvX186IG51bGwgfTo6cGlja0ludG9UaGlzKGJyaWRnZSwgW1xuICAgICAgJ2lkcycsXG4gICAgICAnaW5qZWN0SW50bycsXG4gICAgICAncnVubmluZ0lkcycsXG4gICAgICAnZmFpbGVkSWRzJyxcbiAgICBdKSk7XG4gIH1cbn1cbiIsImltcG9ydCBicmlkZ2UgZnJvbSAnLi9icmlkZ2UnO1xuaW1wb3J0ICcuL2NsaXBib2FyZCc7XG5pbXBvcnQgeyBzZW5kU2V0UG9wdXAgfSBmcm9tICcuL2dtLWFwaS1jb250ZW50JztcbmltcG9ydCB7IGluamVjdFBhZ2VTYW5kYm94LCBpbmplY3RTY3JpcHRzIH0gZnJvbSAnLi9pbmplY3QnO1xuaW1wb3J0ICcuL25vdGlmaWNhdGlvbnMnO1xuaW1wb3J0ICcuL3JlcXVlc3RzJztcbmltcG9ydCAnLi90YWJzJztcbmltcG9ydCB7IHNlbmRDbWQgfSBmcm9tICcuL3V0aWwtY29udGVudCc7XG5pbXBvcnQgeyBpc0VtcHR5LCBJTkpFQ1RfQ09OVEVOVCB9IGZyb20gJy4uL3V0aWwnO1xuXG5jb25zdCB7IGludm9rYWJsZUlkcywgcnVubmluZ0lkcyB9ID0gYnJpZGdlO1xuY29uc3QgcmVzb2x2ZWRQcm9taXNlID0gcHJvbWlzZVJlc29sdmUoKTtcbmxldCBiYWRnZVByb21pc2U7XG5sZXQgbnVtQmFkZ2VzU2VudCA9IDA7XG5sZXQgYmZDYWNoZVdpcmVkO1xuXG4vLyBNYWtlIHN1cmUgdG8gY2FsbCBvYmo6Om1ldGhvZCgpIGluIGNvZGUgdGhhdCBtYXkgcnVuIGFmdGVyIElOSkVDVF9DT05URU5UIHVzZXJzY3JpcHRzXG5hc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBjb250ZW50SWQgPSBnZXRVbmlxSWRTYWZlKCk7XG4gIGNvbnN0IHdlYklkID0gZ2V0VW5pcUlkU2FmZSgpO1xuICBjb25zdCB4aHJEYXRhID0gZ2V0WGhySW5qZWN0aW9uKCk7XG4gIGNvbnN0IHBhZ2VJbmZvID0gIXhockRhdGE/LmZvcmNlQ29udGVudCAmJiB7XG4gICAgLyogSW4gRkY5MyBzZW5kZXIudXJsIGlzIHdyb25nOiBodHRwczovL2J1Z3ppbC5sYS8xNzM0OTg0LFxuICAgICAqIGluIENocm9tZSBzZW5kZXIudXJsIGlzIG9rLCBidXQgbG9jYXRpb24uaHJlZiBpcyB3cm9uZyBmb3IgdGV4dCBzZWxlY3Rpb24gVVJMcyAjOn46dGV4dD0gKi9cbiAgICB1cmw6IElTX0ZJUkVGT1ggJiYgZ2xvYmFsLmxvY2F0aW9uLmhyZWYsXG4gICAgLy8gWE1MIGRvY3VtZW50J3MgYXBwZWFyYW5jZSBicmVha3Mgd2hlbiBzY3JpcHQgZWxlbWVudHMgYXJlIGFkZGVkXG4gICAgZm9yY2VDb250ZW50OiBkb2N1bWVudCBpbnN0YW5jZW9mIFhNTERvY3VtZW50XG4gICAgICB8fCAhaW5qZWN0UGFnZVNhbmRib3goY29udGVudElkLCB3ZWJJZCksXG4gIH07XG4gIGNvbnN0IGRhdGFQcm9taXNlID0gIXhockRhdGEgJiYgc2VuZENtZCgnR2V0SW5qZWN0ZWQnLCBwYWdlSW5mbywgeyByZXRyeTogdHJ1ZSB9KTtcbiAgLy8gZGV0ZWN0aW5nIGlmIGJyb3dzZXIuY29udGVudFNjcmlwdHMgaXMgdXNhYmxlLCBpdCB3YXMgYWRkZWQgaW4gRkY1OSBhcyB3ZWxsIGFzIGNvbXBvc2VkUGF0aFxuICBjb25zdCBkYXRhID0geGhyRGF0YSB8fCAoXG4gICAgSVNfRklSRUZPWCAmJiBFdmVudFtQUk9UT10uY29tcG9zZWRQYXRoXG4gICAgICA/IGF3YWl0IGdldERhdGFGRihkYXRhUHJvbWlzZSlcbiAgICAgIDogYXdhaXQgZGF0YVByb21pc2VcbiAgKTtcbiAgY29uc3QgeyBhbGxvd0NtZCB9ID0gYnJpZGdlO1xuICBhbGxvd0NtZCgnVmF1bHRJZCcsIGNvbnRlbnRJZCk7XG4gIGJyaWRnZTo6cGlja0ludG9UaGlzKGRhdGEsIFtcbiAgICAnaWRzJyxcbiAgICAnaW5qZWN0SW50bycsXG4gIF0pO1xuICBpZiAoZGF0YS5leHBvc2UpIHtcbiAgICBhbGxvd0NtZCgnR2V0U2NyaXB0VmVyJywgY29udGVudElkKTtcbiAgICBicmlkZ2UuYWRkSGFuZGxlcnMoeyBHZXRTY3JpcHRWZXI6IHRydWUgfSwgdHJ1ZSk7XG4gICAgYnJpZGdlLnBvc3QoJ0V4cG9zZScpO1xuICB9XG4gIGlmIChkYXRhLnNjcmlwdHMpIHtcbiAgICBicmlkZ2Uub25TY3JpcHRzLmZvckVhY2goZm4gPT4gZm4oZGF0YSkpO1xuICAgIGFsbG93Q21kKCdTZXRUaW1lb3V0JywgY29udGVudElkKTtcbiAgICBpZiAoSVNfRklSRUZPWCkgYWxsb3dDbWQoJ0luamVjdExpc3QnLCBjb250ZW50SWQpO1xuICAgIGF3YWl0IGluamVjdFNjcmlwdHMoY29udGVudElkLCB3ZWJJZCwgZGF0YSk7XG4gIH1cbiAgYnJpZGdlLm9uU2NyaXB0cyA9IG51bGw7XG4gIHNlbmRTZXRQb3B1cCgpO1xufVxuXG5icmlkZ2UuYWRkQmFja2dyb3VuZEhhbmRsZXJzKHtcbiAgQ29tbWFuZChkYXRhKSB7XG4gICAgY29uc3QgcmVhbG0gPSBpbnZva2FibGVJZHM6OmluY2x1ZGVzKGRhdGEuaWQpICYmIElOSkVDVF9DT05URU5UO1xuICAgIGJyaWRnZS5wb3N0KCdDb21tYW5kJywgZGF0YSwgcmVhbG0pO1xuICB9LFxuICBVcGRhdGVkVmFsdWVzKGRhdGEpIHtcbiAgICBjb25zdCBkYXRhUGFnZSA9IGNyZWF0ZU51bGxPYmooKTtcbiAgICBjb25zdCBkYXRhQ29udGVudCA9IGNyZWF0ZU51bGxPYmooKTtcbiAgICBvYmplY3RLZXlzKGRhdGEpOjpmb3JFYWNoKChpZCkgPT4ge1xuICAgICAgKGludm9rYWJsZUlkczo6aW5jbHVkZXMoK2lkKSA/IGRhdGFDb250ZW50IDogZGF0YVBhZ2UpW2lkXSA9IGRhdGFbaWRdO1xuICAgIH0pO1xuICAgIGlmICghaXNFbXB0eShkYXRhUGFnZSkpIGJyaWRnZS5wb3N0KCdVcGRhdGVkVmFsdWVzJywgZGF0YVBhZ2UpO1xuICAgIGlmICghaXNFbXB0eShkYXRhQ29udGVudCkpIGJyaWRnZS5wb3N0KCdVcGRhdGVkVmFsdWVzJywgZGF0YUNvbnRlbnQsIElOSkVDVF9DT05URU5UKTtcbiAgfSxcbn0pO1xuXG5icmlkZ2UuYWRkSGFuZGxlcnMoe1xuICBSdW4oaWQsIHJlYWxtKSB7XG4gICAgcnVubmluZ0lkczo6cHVzaChpZCk7XG4gICAgYnJpZGdlLmlkczo6cHVzaChpZCk7XG4gICAgaWYgKHJlYWxtID09PSBJTkpFQ1RfQ09OVEVOVCkge1xuICAgICAgaW52b2thYmxlSWRzOjpwdXNoKGlkKTtcbiAgICB9XG4gICAgaWYgKCFiYWRnZVByb21pc2UpIHtcbiAgICAgIGJhZGdlUHJvbWlzZSA9IHJlc29sdmVkUHJvbWlzZTo6dGhlbih0aHJvdHRsZWRTZXRCYWRnZSk7XG4gICAgfVxuICAgIGlmICghYmZDYWNoZVdpcmVkKSB7XG4gICAgICBiZkNhY2hlV2lyZWQgPSB0cnVlO1xuICAgICAgd2luZG93OjpvbigncGFnZXNob3cnLCBldnQgPT4ge1xuICAgICAgICAvLyBpc1RydXN0ZWQgaXMgYHVuZm9yZ2VhYmxlYCBwZXIgRE9NIHNwZWMgc28gd2UgZG9uJ3QgbmVlZCB0byBzYWZlZ3VhcmQgaXRzIGdldHRlclxuICAgICAgICBpZiAoZXZ0LmlzVHJ1c3RlZCAmJiBldnQucGVyc2lzdGVkKSB7XG4gICAgICAgICAgc2VuZENtZCgnU2V0QmFkZ2UnLCBydW5uaW5nSWRzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBTZXRUaW1lb3V0OiB0cnVlLFxuICBUYWJGb2N1czogdHJ1ZSxcbiAgVXBkYXRlVmFsdWU6IHRydWUsXG59KTtcblxuaW5pdCgpLmNhdGNoKElTX0ZJUkVGT1ggJiYgY29uc29sZS5lcnJvcik7IC8vIEZpcmVmb3ggY2FuJ3Qgc2hvdyBleGNlcHRpb25zIGluIGNvbnRlbnQgc2NyaXB0c1xuXG5mdW5jdGlvbiB0aHJvdHRsZWRTZXRCYWRnZSgpIHtcbiAgY29uc3QgbnVtID0gcnVubmluZ0lkcy5sZW5ndGg7XG4gIGlmIChudW1CYWRnZXNTZW50IDwgbnVtKSB7XG4gICAgbnVtQmFkZ2VzU2VudCA9IG51bTtcbiAgICByZXR1cm4gc2VuZENtZCgnU2V0QmFkZ2UnLCBydW5uaW5nSWRzKTo6dGhlbigoKSA9PiB7XG4gICAgICBiYWRnZVByb21pc2UgPSB0aHJvdHRsZWRTZXRCYWRnZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGFGRih2aWFNZXNzYWdpbmcpIHtcbiAgLy8gSW4gRmlyZWZveCB3ZSBzZXQgZGF0YSBvbiBnbG9iYWwgYHRoaXNgIHdoaWNoIGlzIG5vdCBlcXVhbCB0byBgd2luZG93YFxuICBjb25zdCBkYXRhID0gZ2xvYmFsLnZtRGF0YSB8fCBhd2FpdCBQcm9taXNlU2FmZS5yYWNlKFtcbiAgICBuZXcgUHJvbWlzZVNhZmUocmVzb2x2ZSA9PiB7IGdsb2JhbC52bVJlc29sdmUgPSByZXNvbHZlOyB9KSxcbiAgICB2aWFNZXNzYWdpbmcsXG4gIF0pO1xuICBkZWxldGUgZ2xvYmFsLnZtUmVzb2x2ZTtcbiAgZGVsZXRlIGdsb2JhbC52bURhdGE7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBnZXRYaHJJbmplY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcXVvdGVkS2V5ID0gYFwiJHtwcm9jZXNzLmVudi5JTklUX0ZVTkNfTkFNRX1cImA7XG4gICAgLy8gQWNjZXNzaW5nIGRvY3VtZW50LmNvb2tpZSBtYXkgdGhyb3cgZHVlIHRvIENTUCBzYW5kYm94XG4gICAgY29uc3QgY29va2llVmFsdWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoYCR7cXVvdGVkS2V5fT1gKVsxXTtcbiAgICBjb25zdCBibG9iSWQgPSBjb29raWVWYWx1ZSAmJiBjb29raWVWYWx1ZS5zcGxpdCgnOycsIDEpWzBdO1xuICAgIGlmIChibG9iSWQpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke3F1b3RlZEtleX09MDsgbWF4LWFnZT0wOyBTYW1lU2l0ZT1MYXhgOyAvLyB0aGlzIHJlbW92ZXMgb3VyIGNvb2tpZVxuICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBjb25zdCB1cmwgPSBgYmxvYjoke1ZNX1VVSUR9JHtibG9iSWR9YDtcbiAgICAgIHhoci5vcGVuKCdnZXQnLCB1cmwsIGZhbHNlKTsgLy8gYGZhbHNlYCA9IHN5bmNocm9ub3VzXG4gICAgICB4aHIuc2VuZCgpO1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggeyAvKiBOT1AgKi8gfVxufVxuIiwiaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5pbXBvcnQgeyBlbGVtQnlUYWcsIG1ha2VFbGVtLCBvbkVsZW1lbnQsIHNlbmRDbWQgfSBmcm9tICcuL3V0aWwtY29udGVudCc7XG5pbXBvcnQge1xuICBiaW5kRXZlbnRzLCBmaXJlQnJpZGdlRXZlbnQsXG4gIElOSkVDVF9DT05URU5ULCBJTkpFQ1RfTUFQUElORywgSU5KRUNUX1BBR0UsXG59IGZyb20gJy4uL3V0aWwnO1xuXG4vKiBJbiBGRiwgY29udGVudCBzY3JpcHRzIHJ1bm5pbmcgaW4gYSBzYW1lLW9yaWdpbiBmcmFtZSBjYW5ub3QgZGlyZWN0bHkgY2FsbCBwYXJlbnQncyBmdW5jdGlvbnNcbiAqIHNvIHdlJ2xsIHVzZSB0aGUgZXh0ZW5zaW9uJ3MgVVVJRCwgd2hpY2ggaXMgdW5pcXVlIHBlciBjb21wdXRlciBpbiBGRiwgZm9yIG1lc3NhZ2VzXG4gKiBsaWtlIFZBVUxUX1dSSVRFUiB0byBhdm9pZCBpbnRlcmNlcHRpb24gYnkgc2l0ZXMgdGhhdCBjYW4gYWRkIGxpc3RlbmVycyBmb3IgYWxsIG9mIG91clxuICogSU5JVF9GVU5DX05BTUUgaWRzIGV2ZW4gdGhvdWdoIHdlIGNoYW5nZSBpdCBub3cgd2l0aCBlYWNoIHJlbGVhc2UuICovXG5jb25zdCBJTklUX0ZVTkNfTkFNRSA9IHByb2Nlc3MuZW52LklOSVRfRlVOQ19OQU1FO1xuY29uc3QgVkFVTFRfV1JJVEVSID0gYCR7SVNfRklSRUZPWCA/IFZNX1VVSUQgOiBJTklUX0ZVTkNfTkFNRX1WV2A7XG5jb25zdCBWQVVMVF9XUklURVJfQUNLID0gYCR7VkFVTFRfV1JJVEVSfStgO1xubGV0IGNvbnRMaXN0cztcbmxldCBwZ0xpc3RzO1xuLyoqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLFZNSW5qZWN0aW9uUmVhbG0+fSAqL1xubGV0IHJlYWxtcztcbi8qKiBAdHlwZSBib29sZWFuICovXG5sZXQgcGFnZUluamVjdGFibGU7XG5sZXQgZnJhbWVFdmVudFduZDtcbi8qKiBAdHlwZSBTaGFkb3dSb290ICovXG5sZXQgaW5qZWN0ZWRSb290O1xuXG4vLyBodHRwczovL2J1Z3ppbC5sYS8xNDA4OTk2XG5sZXQgVk1Jbml0SW5qZWN0aW9uID0gd2luZG93W0lOSVRfRlVOQ19OQU1FXTtcbi8qKiBBdm9pZCBydW5uaW5nIHJlcGVhdGVkbHkgZHVlIHRvIG5ldyBgZG9jdW1lbnRFbGVtZW50YCBvciB3aXRoIGRlY2xhcmF0aXZlQ29udGVudCBpbiBDaHJvbWUuXG4gKiBUaGUgcHJvcCdzIG1vZGUgaXMgb3ZlcnJpZGRlbiB0byBiZSB1bmZvcmdlYWJsZSBieSBhIHVzZXJzY3JpcHQgaW4gY29udGVudCBtb2RlLiAqL1xuZGVmaW5lUHJvcGVydHkod2luZG93LCBJTklUX0ZVTkNfTkFNRSwge1xuICBfX3Byb3RvX186IG51bGwsXG4gIHZhbHVlOiAxLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxufSk7XG5pZiAoSVNfRklSRUZPWCkge1xuICB3aW5kb3c6Om9uKFZBVUxUX1dSSVRFUiwgZXZ0ID0+IHtcbiAgICBldnQ6OnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmICghZnJhbWVFdmVudFduZCkge1xuICAgICAgLy8gc2V0dXBWYXVsdElkJ3MgZmlyc3QgZXZlbnQgaXMgdGhlIGZyYW1lJ3MgY29udGVudFdpbmRvd1xuICAgICAgZnJhbWVFdmVudFduZCA9IGV2dDo6Z2V0UmVsYXRlZFRhcmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXR1cFZhdWx0SWQncyBzZWNvbmQgZXZlbnQgaXMgdGhlIHZhdWx0SWRcbiAgICAgIHRlbGxCcmlkZ2VUb1dyaXRlVmF1bHQoZXZ0OjpnZXREZXRhaWwoKSwgZnJhbWVFdmVudFduZCk7XG4gICAgICBmcmFtZUV2ZW50V25kOjpmaXJlKG5ldyBDdXN0b21FdmVudFNhZmUoVkFVTFRfV1JJVEVSX0FDSykpO1xuICAgICAgZnJhbWVFdmVudFduZCA9IG51bGw7XG4gICAgfVxuICB9LCB0cnVlKTtcbn0gZWxzZSB7XG4gIHNhZmVEZWZpbmVQcm9wZXJ0eShnbG9iYWwsIFZBVUxUX1dSSVRFUiwge1xuICAgIHZhbHVlOiB0ZWxsQnJpZGdlVG9Xcml0ZVZhdWx0LFxuICB9KTtcbn1cblxuYnJpZGdlLmFkZEhhbmRsZXJzKHtcbiAgLyoqXG4gICAqIEZGIGJ1ZyB3b3JrYXJvdW5kIHRvIGVuYWJsZSBwcm9jZXNzaW5nIG9mIHNvdXJjZVVSTCBpbiBpbmplY3RlZCBwYWdlIHNjcmlwdHNcbiAgICovXG4gIEluamVjdExpc3Q6IElTX0ZJUkVGT1ggJiYgaW5qZWN0TGlzdCxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0UGFnZVNhbmRib3goY29udGVudElkLCB3ZWJJZCkge1xuICBjb25zdCB7IGNsb25lSW50byB9ID0gZ2xvYmFsO1xuICBjb25zdCB2YXVsdElkID0gZ2V0VW5pcUlkU2FmZSgpO1xuICBjb25zdCBoYW5kc2hha2VJZCA9IGdldFVuaXFJZFNhZmUoKTtcbiAgaWYgKHVzZU9wZW5lcih3aW5kb3cub3BlbmVyKSB8fCB1c2VPcGVuZXIoIUlTX1RPUCAmJiB3aW5kb3cucGFyZW50KSkge1xuICAgIHN0YXJ0SGFuZHNoYWtlKCk7XG4gIH0gZWxzZSB7XG4gICAgLyogU2l0ZXMgY2FuIGRvIHdpbmRvdy5vcGVuKHNhbWVPcmlnaW5VcmwsJ2lmcmFtZU5hbWVPck5ld1dpbmRvd05hbWUnKS5vcGVuZXI9bnVsbCwgc3Bvb2YgSlNcbiAgICAgKiBlbnZpcm9ubWVudCBhbmQgZWFzaWx5IGhhY2sgaW50byBvdXIgY29tbXVuaWNhdGlvbiBjaGFubmVsIGJlZm9yZSBvdXIgY29udGVudCBzY3JpcHRzIHJ1bi5cbiAgICAgKiBDb250ZW50IHNjcmlwdHMgd2lsbCBzZWUgYGRvY3VtZW50Lm9wZW5lciA9IG51bGxgLCBub3QgdGhlIG9yaWdpbmFsIG9wZW5lciwgc28gd2UgaGF2ZVxuICAgICAqIHRvIHVzZSBhbiBpZnJhbWUgdG8gZXh0cmFjdCB0aGUgc2FmZSBnbG9iYWxzLiBEZXRlY3Rpb24gdmlhIGRvY3VtZW50LnJlZmVycmVyIHdvbid0IHdvcmtcbiAgICAgKiBpcyBpdCBjYW4gYmUgZW1wdGllZCBieSB0aGUgb3BlbmVyIHBhZ2UsIHRvby4gKi9cbiAgICBpbmplY3QoeyBjb2RlOiBgcGFyZW50W1wiJHt2YXVsdElkfVwiXSA9IFt0aGlzXWAgfSwgKCkgPT4ge1xuICAgICAgLy8gU2tpcHBpbmcgcGFnZSBpbmplY3Rpb24gaW4gRkYgaWYgb3VyIHNjcmlwdCBlbGVtZW50IHdhcyBibG9ja2VkIGJ5IHNpdGUncyBDU1BcbiAgICAgIGlmICghSVNfRklSRUZPWCB8fCB3aW5kb3cud3JhcHBlZEpTT2JqZWN0W3ZhdWx0SWRdKSB7XG4gICAgICAgIHN0YXJ0SGFuZHNoYWtlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhZ2VJbmplY3RhYmxlO1xuXG4gIGZ1bmN0aW9uIHVzZU9wZW5lcihvcGVuZXIpIHtcbiAgICBsZXQgb2s7XG4gICAgaWYgKG9wZW5lciAmJiBkZXNjcmliZVByb3BlcnR5KG9wZW5lci5sb2NhdGlvbiwgJ2hyZWYnKS5nZXQpIHtcbiAgICAgIC8vIFRPRE86IFVzZSBhIHNpbmdsZSBQb2ludGVyRXZlbnQgd2l0aCBgcG9pbnRlclR5cGU6IHZhdWx0SWRgIHdoZW4gc3RyaWN0X21pbl92ZXJzaW9uID49IDU5XG4gICAgICBpZiAoSVNfRklSRUZPWCkge1xuICAgICAgICBjb25zdCBzZXRPayA9ICgpID0+IHsgb2sgPSB0cnVlOyB9O1xuICAgICAgICB3aW5kb3c6Om9uKFZBVUxUX1dSSVRFUl9BQ0ssIHNldE9rLCB0cnVlKTtcbiAgICAgICAgb3BlbmVyOjpmaXJlKG5ldyBNb3VzZUV2ZW50U2FmZShWQVVMVF9XUklURVIsIHsgcmVsYXRlZFRhcmdldDogd2luZG93IH0pKTtcbiAgICAgICAgb3BlbmVyOjpmaXJlKG5ldyBDdXN0b21FdmVudFNhZmUoVkFVTFRfV1JJVEVSLCB7IGRldGFpbDogdmF1bHRJZCB9KSk7XG4gICAgICAgIHdpbmRvdzo6b2ZmKFZBVUxUX1dSSVRFUl9BQ0ssIHNldE9rLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9rID0gb3BlbmVyW1ZBVUxUX1dSSVRFUl07XG4gICAgICAgIGlmIChvaykgb2sodmF1bHRJZCwgd2luZG93KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9rO1xuICB9XG4gIC8qKiBBIHBhZ2UgY2FuIHJlYWQgb3VyIHNjcmlwdCdzIHRleHRDb250ZW50IGluIGEgc2FtZS1vcmlnaW4gaWZyYW1lIHZpYSBET01Ob2RlUmVtb3ZlZCBldmVudC5cbiAgICogRGlyZWN0bHkgcHJldmVudGluZyBpdCB3b3VsZCByZXF1aXJlIHJlZGVmaW5pbmcgfjIwIERPTSBtZXRob2RzIGluIHRoZSBwYXJlbnQuXG4gICAqIEluc3RlYWQsIHdlJ2xsIHNlbmQgdGhlIGlkcyB2aWEgYSB0ZW1wb3JhcnkgaGFuZHNoYWtlSWQgZXZlbnQsIHRvIHdoaWNoIHRoZSB3ZWItYnJpZGdlXG4gICAqIHdpbGwgbGlzdGVuIG9ubHkgZHVyaW5nIGl0cyBpbml0aWFsIHBoYXNlIHVzaW5nIHZhdWx0LXByb3RlY3RlZCBET00gbWV0aG9kcy5cbiAgICogVE9ETzogc2ltcGxpZnkgdGhpcyB3aGVuIHN0cmljdF9taW5fdmVyc2lvbiA+PSA2MyAoYXR0YWNoU2hhZG93IGluIEZGKSAqL1xuICBmdW5jdGlvbiBzdGFydEhhbmRzaGFrZSgpIHtcbiAgICAvKiBXaXRoIGBvbmNlYCB0aGUgbGlzdGVuZXIgaXMgcmVtb3ZlZCBiZWZvcmUgRE9NTm9kZUluc2VydGVkIGlzIGRpc3BhdGNoZWQgYnkgYXBwZW5kQ2hpbGQsXG4gICAgICogb3RoZXJ3aXNlIGEgc2FtZS1vcmlnaW4gcGFyZW50IHBhZ2UgY291bGQgdXNlIGl0IHRvIHNwb29mIHRoZSBoYW5kc2hha2UuICovXG4gICAgd2luZG93OjpvbihoYW5kc2hha2VJZCwgaGFuZHNoYWtlciwgeyBjYXB0dXJlOiB0cnVlLCBvbmNlOiB0cnVlIH0pO1xuICAgIGluamVjdCh7XG4gICAgICBjb2RlOiBgKCR7Vk1Jbml0SW5qZWN0aW9ufSgke0lTX0ZJUkVGT1h9LCcke2hhbmRzaGFrZUlkfScsJyR7dmF1bHRJZH0nKSkoKWBcbiAgICAgICAgKyBgXFxuLy8jIHNvdXJjZVVSTD0ke1ZNX1VVSUR9c2FuZGJveC9pbmplY3RlZC13ZWIuanNgLFxuICAgIH0pO1xuICAgIC8vIENsZWFuIHVwIGluIGNhc2UgQ1NQIHByZXZlbnRlZCB0aGUgc2NyaXB0IGZyb20gcnVubmluZ1xuICAgIHdpbmRvdzo6b2ZmKGhhbmRzaGFrZUlkLCBoYW5kc2hha2VyLCB0cnVlKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kc2hha2VyKGV2dCkge1xuICAgIHBhZ2VJbmplY3RhYmxlID0gdHJ1ZTtcbiAgICBldnQ6OnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGJpbmRFdmVudHMoY29udGVudElkLCB3ZWJJZCwgYnJpZGdlLCBjbG9uZUludG8pO1xuICAgIGZpcmVCcmlkZ2VFdmVudChoYW5kc2hha2VJZCArIHByb2Nlc3MuZW52LkhBTkRTSEFLRV9BQ0ssIFt3ZWJJZCwgY29udGVudElkXSwgY2xvbmVJbnRvKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50SWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB3ZWJJZFxuICogQHBhcmFtIHtWTUdldEluamVjdGVkRGF0YX0gZGF0YVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5qZWN0U2NyaXB0cyhjb250ZW50SWQsIHdlYklkLCBkYXRhKSB7XG4gIGNvbnN0IHsgaGFzTW9yZSwgaW5mbyB9ID0gZGF0YTtcbiAgcmVhbG1zID0ge1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICAvKiogQG5hbWVzcGFjZSBWTUluamVjdGlvblJlYWxtICovXG4gICAgW0lOSkVDVF9DT05URU5UXToge1xuICAgICAgaW5qZWN0YWJsZTogdHJ1ZSxcbiAgICAgIC8qKiBAbmFtZXNwYWNlIFZNUnVuQXRMaXN0cyAqL1xuICAgICAgbGlzdHM6IGNvbnRMaXN0cyA9IHsgc3RhcnQ6IFtdLCBib2R5OiBbXSwgZW5kOiBbXSwgaWRsZTogW10gfSxcbiAgICAgIGlzOiAwLFxuICAgICAgaW5mbyxcbiAgICB9LFxuICAgIFtJTkpFQ1RfUEFHRV06IHtcbiAgICAgIGluamVjdGFibGU6IHBhZ2VJbmplY3RhYmxlLFxuICAgICAgbGlzdHM6IHBnTGlzdHMgPSB7IHN0YXJ0OiBbXSwgYm9keTogW10sIGVuZDogW10sIGlkbGU6IFtdIH0sXG4gICAgICBpczogMCxcbiAgICAgIGluZm8sXG4gICAgfSxcbiAgfTtcbiAgYXNzaWduKGJyaWRnZS5jYWNoZSwgZGF0YS5jYWNoZSk7XG4gIGNvbnN0IGZlZWRiYWNrID0gZGF0YS5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gc2NyaXB0LnByb3BzO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIGNvbnN0IHJlYWxtID0gSU5KRUNUX01BUFBJTkdbc2NyaXB0LmluamVjdEludG9dLmZpbmQoa2V5ID0+IHJlYWxtc1trZXldPy5pbmplY3RhYmxlKTtcbiAgICAvLyBJZiB0aGUgc2NyaXB0IHdhbnRzIHRoaXMgc3BlY2lmaWMgcmVhbG0sIHdoaWNoIGlzIHVuYXZhaWxhYmxlLCB3ZSB3b24ndCBpbmplY3QgaXQgYXQgYWxsXG4gICAgaWYgKHJlYWxtKSB7XG4gICAgICBjb25zdCB7IHBhdGhNYXAgfSA9IHNjcmlwdC5jdXN0b207XG4gICAgICBjb25zdCByZWFsbURhdGEgPSByZWFsbXNbcmVhbG1dO1xuICAgICAgcmVhbG1EYXRhLmxpc3RzW3NjcmlwdC5ydW5BdF0ucHVzaChzY3JpcHQpOyAvLyAnc3RhcnQnIG9yICdib2R5JyBwZXIgZ2V0U2NyaXB0c0J5VVJMKClcbiAgICAgIHJlYWxtRGF0YS5pcyA9IHRydWU7XG4gICAgICBpZiAocGF0aE1hcCkgYnJpZGdlLnBhdGhNYXBzW2lkXSA9IHBhdGhNYXA7XG4gICAgICBicmlkZ2UuYWxsb3dTY3JpcHQoc2NyaXB0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJpZGdlLmZhaWxlZElkcy5wdXNoKGlkKTtcbiAgICB9XG4gICAgcmV0dXJuIFtzY3JpcHQuZGF0YUtleSwgcmVhbG0gPT09IElOSkVDVF9DT05URU5UXTtcbiAgfSk7XG4gIGNvbnN0IG1vcmVEYXRhID0gc2VuZENtZCgnSW5qZWN0aW9uRmVlZGJhY2snLCB7XG4gICAgZmVlZGJhY2ssXG4gICAgZmVlZElkOiBkYXRhLmZlZWRJZCxcbiAgICBmb3JjZUNvbnRlbnQ6ICFwYWdlSW5qZWN0YWJsZSxcbiAgfSk7XG4gIC8vIHNhdmluZyB3aGlsZSBzYWZlXG4gIGNvbnN0IGhhc0ludm9rZXIgPSByZWFsbXNbSU5KRUNUX0NPTlRFTlRdLmlzO1xuICBpZiAoaGFzSW52b2tlcikge1xuICAgIHNldHVwQ29udGVudEludm9rZXIoY29udGVudElkLCB3ZWJJZCk7XG4gIH1cbiAgLy8gVXNpbmcgYSBjYWxsYmFjayB0byBhdm9pZCBhIG1pY3JvdGFzayB0aWNrIHdoZW4gdGhlIHJvb3QgZWxlbWVudCBleGlzdHMgb3IgYXBwZWFycy5cbiAgYXdhaXQgb25FbGVtZW50KCcqJywgYXN5bmMgKCkgPT4ge1xuICAgIGluamVjdEFsbCgnc3RhcnQnKTtcbiAgICBjb25zdCBvbkJvZHkgPSAocGdMaXN0cy5ib2R5Lmxlbmd0aCB8fCBjb250TGlzdHMuYm9keS5sZW5ndGgpXG4gICAgICAmJiBvbkVsZW1lbnQoJ2JvZHknLCBpbmplY3RBbGwsICdib2R5Jyk7XG4gICAgLy8gZG9jdW1lbnQtZW5kLCAtaWRsZVxuICAgIGlmIChoYXNNb3JlKSB7XG4gICAgICBkYXRhID0gYXdhaXQgbW9yZURhdGE7XG4gICAgICBpZiAoZGF0YSkgYXdhaXQgaW5qZWN0RGVsYXllZFNjcmlwdHMoIWhhc0ludm9rZXIgJiYgY29udGVudElkLCB3ZWJJZCwgZGF0YSk7XG4gICAgfVxuICAgIGlmIChvbkJvZHkpIHtcbiAgICAgIGF3YWl0IG9uQm9keTtcbiAgICB9XG4gICAgcmVhbG1zID0gbnVsbDtcbiAgICBwZ0xpc3RzID0gbnVsbDtcbiAgICBjb250TGlzdHMgPSBudWxsO1xuICB9KTtcbiAgVk1Jbml0SW5qZWN0aW9uID0gbnVsbDsgLy8gcmVsZWFzZSBmb3IgR0Ncbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5qZWN0RGVsYXllZFNjcmlwdHMoY29udGVudElkLCB3ZWJJZCwgeyBjYWNoZSwgc2NyaXB0cyB9KSB7XG4gIGFzc2lnbihicmlkZ2UuY2FjaGUsIGNhY2hlKTtcbiAgbGV0IG5lZWRzSW52b2tlcjtcbiAgc2NyaXB0czo6Zm9yRWFjaChzY3JpcHQgPT4ge1xuICAgIGNvbnN0IHsgY29kZSwgcnVuQXQgfSA9IHNjcmlwdDtcbiAgICBjb25zdCB7IGlkIH0gPSBzY3JpcHQucHJvcHM7XG4gICAgaWYgKCFjb2RlKSB7XG4gICAgICBuZWVkc0ludm9rZXIgPSB0cnVlO1xuICAgICAgY29udExpc3RzW3J1bkF0XTo6cHVzaChzY3JpcHQpO1xuICAgIH0gZWxzZSBpZiAocGFnZUluamVjdGFibGUpIHtcbiAgICAgIHBnTGlzdHNbcnVuQXRdOjpwdXNoKHNjcmlwdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyaWRnZS5mYWlsZWRJZHM6OnB1c2goaWQpO1xuICAgICAgYnJpZGdlLmlkczo6cHVzaChpZCk7XG4gICAgfVxuICB9KTtcbiAgaWYgKGRvY3VtZW50OjpnZXRSZWFkeVN0YXRlKCkgPT09ICdsb2FkaW5nJykge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlU2FmZShyZXNvbHZlID0+IHtcbiAgICAgIC8qIFNpbmNlIG1vc3Qgc2l0ZXMgbGlzdGVuIHRvIERPTUNvbnRlbnRMb2FkZWQgb24gYGRvY3VtZW50YCwgd2UgbGV0IHRoZW0gcnVuIGZpcnN0XG4gICAgICAgKiBieSBsaXN0ZW5pbmcgb24gYHdpbmRvd2Agd2hpY2ggZm9sbG93cyBgZG9jdW1lbnRgIHdoZW4gdGhlIGV2ZW50IGJ1YmJsZXMgdXAuICovXG4gICAgICB3aW5kb3c6Om9uKCdET01Db250ZW50TG9hZGVkJywgcmVzb2x2ZSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH0pO1xuICAgIGF3YWl0IDA7IC8vIGxldCB0aGUgc2l0ZSdzIGxpc3RlbmVycyBvbiBgd2luZG93YCBydW4gZmlyc3RcbiAgfVxuICBpZiAobmVlZHNJbnZva2VyICYmIGNvbnRlbnRJZCkge1xuICAgIHNldHVwQ29udGVudEludm9rZXIoY29udGVudElkLCB3ZWJJZCk7XG4gIH1cbiAgc2NyaXB0czo6Zm9yRWFjaChicmlkZ2UuYWxsb3dTY3JpcHQpO1xuICBpbmplY3RBbGwoJ2VuZCcpO1xuICBpbmplY3RBbGwoJ2lkbGUnKTtcbn1cblxuZnVuY3Rpb24gaW5qZWN0KGl0ZW0sIGlmcmFtZUNiKSB7XG4gIGNvbnN0IHNjcmlwdCA9IG1ha2VFbGVtKCdzY3JpcHQnLCBpdGVtLmNvZGUpO1xuICAvLyBGaXJlZm94IGlnbm9yZXMgc291cmNlVVJMIGNvbW1lbnQgd2hlbiBhIHN5bnRheCBlcnJvciBvY2N1cnMgc28gd2UnbGwgcHJpbnQgdGhlIG5hbWUgbWFudWFsbHlcbiAgY29uc3Qgb25FcnJvciA9IElTX0ZJUkVGT1ggJiYgIWlmcmFtZUNiICYmIChlID0+IHtcbiAgICBjb25zdCB7IHN0YWNrIH0gPSBlLmVycm9yO1xuICAgIGlmICghc3RhY2sgfHwgYCR7c3RhY2t9YC5pbmNsdWRlcyhWTV9VVUlEKSkge1xuICAgICAgbG9nKCdlcnJvcicsIFtpdGVtLmRpc3BsYXlOYW1lXSwgZS5lcnJvcik7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgZGl2ID0gbWFrZUVsZW0oJ2RpdicpO1xuICAvLyBIaWRpbmcgdGhlIHNjcmlwdCdzIGNvZGUgZnJvbSBtdXRhdGlvbiBldmVudHMgbGlrZSBET01Ob2RlSW5zZXJ0ZWQgb3IgRE9NTm9kZVJlbW92ZWRcbiAgY29uc3QgZGl2Um9vdCA9IGluamVjdGVkUm9vdCB8fCAoXG4gICAgYXR0YWNoU2hhZG93XG4gICAgICA/IGRpdjo6YXR0YWNoU2hhZG93KHsgbW9kZTogJ2Nsb3NlZCcgfSlcbiAgICAgIDogZGl2XG4gICk7XG4gIGxldCBpZnJhbWU7XG4gIGlmIChpZnJhbWVDYikge1xuICAgIC8qIFByZXZlbnRpbmcgb3RoZXIgY29udGVudCBzY3JpcHRzICovLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNjcmlwdC11cmxcbiAgICBpZnJhbWUgPSBtYWtlRWxlbSgnaWZyYW1lJywgeyBzcmM6ICdqYXZhc2NyaXB0OnZvaWQgMCcgfSk7XG4gICAgLyogSW4gRkYgdGhlIG9wZW5lciByZWNlaXZlcyBET01Ob2RlSW5zZXJ0ZWQgYXR0YWNoZWQgYXQgY3JlYXRpb24gc28gaXQgY2FuIHNlZSB3aW5kb3dbMF0gKi9cbiAgICBpZiAoIUlTX0ZJUkVGT1gpIHtcbiAgICAgIGRpdlJvb3Q6OmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRpdlJvb3Q6OmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cbiAgaWYgKG9uRXJyb3IpIHtcbiAgICB3aW5kb3c6Om9uKCdlcnJvcicsIG9uRXJyb3IpO1xuICB9XG4gIGlmICghaW5qZWN0ZWRSb290KSB7XG4gICAgLy8gV2hlbiB1c2luZyBkZWNsYXJhdGl2ZUNvbnRlbnQgdGhlcmUncyBubyBkb2N1bWVudEVsZW1lbnQgc28gd2UnbGwgYXBwZW5kIHRvIGBkb2N1bWVudGBcbiAgICAoZWxlbUJ5VGFnKCcqJykgfHwgZG9jdW1lbnQpOjphcHBlbmRDaGlsZChkaXYpO1xuICB9XG4gIGlmIChvbkVycm9yKSB7XG4gICAgd2luZG93OjpvZmYoJ2Vycm9yJywgb25FcnJvcik7XG4gIH1cbiAgaWYgKGlmcmFtZUNiKSB7XG4gICAgaW5qZWN0ZWRSb290ID0gZGl2Um9vdDtcbiAgICBpZiAoSVNfRklSRUZPWCkgZGl2Um9vdDo6YXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICBpZnJhbWUuY29udGVudERvY3VtZW50OjpnZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpWzBdOjphcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIGlmcmFtZUNiKCk7XG4gICAgaWZyYW1lOjpyZW1vdmUoKTtcbiAgICBpbmplY3RlZFJvb3QgPSBudWxsO1xuICB9XG4gIC8vIENsZWFuIHVwIGluIGNhc2Ugc29tZXRoaW5nIGRpZG4ndCBsb2FkXG4gIHNjcmlwdDo6cmVtb3ZlKCk7XG4gIGRpdjo6cmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGluamVjdEFsbChydW5BdCkge1xuICBmb3IgKGNvbnN0IHJlYWxtIGluIHJlYWxtcykgeyAvKiBwcm90byBpcyBudWxsICovLy8gZXNsaW50LWRpc2FibGUtbGluZSBndWFyZC1mb3ItaW5cbiAgICBjb25zdCByZWFsbURhdGEgPSByZWFsbXNbcmVhbG1dO1xuICAgIGNvbnN0IGl0ZW1zID0gcmVhbG1EYXRhLmxpc3RzW3J1bkF0XTtcbiAgICBjb25zdCB7IGluZm8gfSA9IHJlYWxtRGF0YTtcbiAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XG4gICAgICBicmlkZ2UucG9zdCgnU2NyaXB0RGF0YScsIHsgaW5mbywgaXRlbXMsIHJ1bkF0IH0sIHJlYWxtKTtcbiAgICAgIGlmIChyZWFsbSA9PT0gSU5KRUNUX1BBR0UgJiYgIUlTX0ZJUkVGT1gpIHtcbiAgICAgICAgaW5qZWN0TGlzdChydW5BdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChydW5BdCAhPT0gJ3N0YXJ0JyAmJiBjb250TGlzdHNbcnVuQXRdLmxlbmd0aCkge1xuICAgIGJyaWRnZS5wb3N0KCdSdW5BdCcsIHJ1bkF0LCBJTkpFQ1RfQ09OVEVOVCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5qZWN0TGlzdChydW5BdCkge1xuICBjb25zdCBsaXN0ID0gcGdMaXN0c1tydW5BdF07XG4gIC8vIE5vdCB1c2luZyBmb3Itb2YgYmVjYXVzZSB3ZSBkb24ndCBrbm93IGlmIEBAaXRlcmF0b3IgaXMgc2FmZS5cbiAgZm9yIChsZXQgaSA9IDAsIGl0ZW07IChpdGVtID0gbGlzdFtpXSk7IGkgKz0gMSkge1xuICAgIGlmIChpdGVtLmNvZGUpIHtcbiAgICAgIGlmIChydW5BdCA9PT0gJ2lkbGUnKSBhd2FpdCBzZW5kQ21kKCdTZXRUaW1lb3V0JywgMCk7XG4gICAgICBpZiAocnVuQXQgPT09ICdlbmQnKSBhd2FpdCAwO1xuICAgICAgaW5qZWN0KGl0ZW0pO1xuICAgICAgaXRlbS5jb2RlID0gJyc7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldHVwQ29udGVudEludm9rZXIoY29udGVudElkLCB3ZWJJZCkge1xuICBjb25zdCBpbnZva2VDb250ZW50ID0gVk1Jbml0SW5qZWN0aW9uKElTX0ZJUkVGT1gpKHdlYklkLCBjb250ZW50SWQsIGJyaWRnZS5vbkhhbmRsZSk7XG4gIGNvbnN0IHBvc3RWaWFCcmlkZ2UgPSBicmlkZ2UucG9zdDtcbiAgYnJpZGdlLnBvc3QgPSAoY21kLCBwYXJhbXMsIHJlYWxtLCBub2RlKSA9PiB7XG4gICAgY29uc3QgZm4gPSByZWFsbSA9PT0gSU5KRUNUX0NPTlRFTlRcbiAgICAgID8gaW52b2tlQ29udGVudFxuICAgICAgOiBwb3N0VmlhQnJpZGdlO1xuICAgIGZuKGNtZCwgcGFyYW1zLCB1bmRlZmluZWQsIG5vZGUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZWxsQnJpZGdlVG9Xcml0ZVZhdWx0KHZhdWx0SWQsIHduZCkge1xuICBicmlkZ2UucG9zdCgnV3JpdGVWYXVsdCcsIHZhdWx0SWQsIElOSkVDVF9QQUdFLCB3bmQpO1xufVxuIiwiaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5pbXBvcnQgeyBzZW5kQ21kIH0gZnJvbSAnLi91dGlsLWNvbnRlbnQnO1xuXG5jb25zdCBub3RpZmljYXRpb25zID0gY3JlYXRlTnVsbE9iaigpO1xuXG5icmlkZ2UuYWRkSGFuZGxlcnMoe1xuICBhc3luYyBOb3RpZmljYXRpb24ob3B0aW9ucywgcmVhbG0pIHtcbiAgICBjb25zdCBuaWQgPSBhd2FpdCBzZW5kQ21kKCdOb3RpZmljYXRpb24nLCBvcHRpb25zKTtcbiAgICBub3RpZmljYXRpb25zW25pZF0gPSB7IGlkOiBvcHRpb25zLmlkLCByZWFsbSB9O1xuICB9LFxuICBSZW1vdmVOb3RpZmljYXRpb24oaWQpIHtcbiAgICBmb3IgKGNvbnN0IG5pZCBpbiBub3RpZmljYXRpb25zKSB7XG4gICAgICBpZiAobm90aWZpY2F0aW9uc1tuaWRdLmlkID09PSBpZCkge1xuICAgICAgICBkZWxldGUgbm90aWZpY2F0aW9uc1tuaWRdO1xuICAgICAgICByZXR1cm4gc2VuZENtZCgnUmVtb3ZlTm90aWZpY2F0aW9uJywgbmlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59KTtcblxuYnJpZGdlLmFkZEJhY2tncm91bmRIYW5kbGVycyh7XG4gIE5vdGlmaWNhdGlvbkNsaWNrKG5pZCkge1xuICAgIGNvbnN0IG4gPSBub3RpZmljYXRpb25zW25pZF07XG4gICAgaWYgKG4pIGJyaWRnZS5wb3N0KCdOb3RpZmljYXRpb25DbGlja2VkJywgbi5pZCwgbi5yZWFsbSk7XG4gIH0sXG4gIE5vdGlmaWNhdGlvbkNsb3NlKG5pZCkge1xuICAgIGNvbnN0IG4gPSBub3RpZmljYXRpb25zW25pZF07XG4gICAgaWYgKG4pIHtcbiAgICAgIGJyaWRnZS5wb3N0KCdOb3RpZmljYXRpb25DbG9zZWQnLCBuLmlkLCBuLnJlYWxtKTtcbiAgICAgIGRlbGV0ZSBub3RpZmljYXRpb25zW25pZF07XG4gICAgfVxuICB9LFxufSk7XG4iLCJpbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcbmltcG9ydCB7IGdldEZ1bGxVcmwsIG1ha2VFbGVtLCBzZW5kQ21kIH0gZnJvbSAnLi91dGlsLWNvbnRlbnQnO1xuXG5jb25zdCB7XG4gIGZldGNoOiBmZXRjaFNhZmUsXG59ID0gZ2xvYmFsO1xuY29uc3QgeyBhcnJheUJ1ZmZlcjogZ2V0QXJyYXlCdWZmZXIsIGJsb2I6IGdldEJsb2IgfSA9IFJlc3BvbnNlUHJvdG87XG5jb25zdCB7IGNyZWF0ZU9iamVjdFVSTCwgcmV2b2tlT2JqZWN0VVJMIH0gPSBVUkw7XG5cbmNvbnN0IHJlcXVlc3RzID0gY3JlYXRlTnVsbE9iaigpO1xubGV0IGRvd25sb2FkQ2hhaW4gPSBwcm9taXNlUmVzb2x2ZSgpO1xuXG5icmlkZ2UuYWRkSGFuZGxlcnMoe1xuICBIdHRwUmVxdWVzdChtc2csIHJlYWxtKSB7XG4gICAgcmVxdWVzdHNbbXNnLmlkXSA9IHtcbiAgICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICAgIHJlYWxtLFxuICAgICAgd2FudHNCbG9iOiBtc2cueGhyVHlwZSA9PT0gJ2Jsb2InLFxuICAgIH06OnBpY2tJbnRvVGhpcyhtc2csIFtcbiAgICAgICdldmVudHNUb05vdGlmeScsXG4gICAgICAnZmlsZU5hbWUnLFxuICAgIF0pO1xuICAgIG1zZy51cmwgPSBnZXRGdWxsVXJsKG1zZy51cmwpO1xuICAgIHNlbmRDbWQoJ0h0dHBSZXF1ZXN0JywgbXNnKTtcbiAgfSxcbiAgQWJvcnRSZXF1ZXN0OiB0cnVlLFxufSk7XG5cbmJyaWRnZS5hZGRCYWNrZ3JvdW5kSGFuZGxlcnMoe1xuICBhc3luYyBIdHRwUmVxdWVzdGVkKG1zZykge1xuICAgIGNvbnN0IHsgaWQsIGNodW5rIH0gPSBtc2c7XG4gICAgY29uc3QgcmVxID0gcmVxdWVzdHNbaWRdO1xuICAgIGlmICghcmVxKSByZXR1cm47XG4gICAgaWYgKGNodW5rKSB7XG4gICAgICByZWNlaXZlQ2h1bmsocmVxLCBjaHVuayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgobXNnLm51bUNodW5rcyB8fCAxKSA9PT0gMSkge1xuICAgICAgcmVxLmdvdENodW5rcyA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHsgYmxvYmJlZCwgZGF0YSwgY2h1bmtlZCwgdHlwZSwgZG93bmxvYWRJZCB9ID0gbXNnO1xuXG4gICAgaWYgKGRvd25sb2FkSWQpIHtcbiAgICAgIC8vIGJyb3dzZXIgd2lsbCBkb3dubG9hZFxuICAgICAgYnJpZGdlLnBvc3QoJ0h0dHBSZXF1ZXN0ZWQnLCBtc2csIHJlcS5yZWFsbSk7XG4gICAgICBpZiAobXNnLnR5cGUgPT09ICdsb2FkJykgZGVsZXRlIHJlcXVlc3RzW2lkXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpc0xvYWRFbmQgPSB0eXBlID09PSAnbG9hZGVuZCc7XG4gICAgLy8gb25seSBDT05URU5UIHJlYWxtIGNhbiByZWFkIGJsb2JzIGZyb20gYW4gZXh0ZW5zaW9uOi8vIFVSTFxuICAgIGNvbnN0IHJlc3BvbnNlID0gZGF0YVxuICAgICAgJiYgcmVxLmV2ZW50c1RvTm90aWZ5OjppbmNsdWRlcyh0eXBlKVxuICAgICAgJiYgZGF0YS5yZXNwb25zZTtcbiAgICAvLyBtZXNzYWdlcyB3aWxsIGNvbWUgd2hpbGUgYmxvYiBpcyBmZXRjaGVkIHNvIHdlJ2xsIHRlbXBvcmFyaWx5IHN0b3JlIHRoZSBQcm9taXNlXG4gICAgY29uc3QgaW1wb3J0aW5nID0gcmVzcG9uc2UgJiYgKGJsb2JiZWQgfHwgY2h1bmtlZCk7XG4gICAgaWYgKGltcG9ydGluZykge1xuICAgICAgcmVxLmJpbiA9IGJsb2JiZWRcbiAgICAgICAgPyBpbXBvcnRCbG9iKHJlcSwgcmVzcG9uc2UpXG4gICAgICAgIDogcmVjZWl2ZUFsbENodW5rcyhyZXEsIG1zZyk7XG4gICAgfVxuICAgIC8vIC4uLndoaWNoIGNhbiBiZSBhd2FpdGVkIGluIHRoZXNlIHN1YnNlcXVlbnQgbWVzc2FnZXNcbiAgICBpZiAoaXNQcm9taXNlKHJlcS5iaW4pKSB7XG4gICAgICByZXEuYmluID0gYXdhaXQgcmVxLmJpbjtcbiAgICB9XG4gICAgLy8gSWYgdGhlIHVzZXIgaW4gaW5jb2duaXRvIHN1cHBsaWVkIG9ubHkgYG9ubG9hZGVuZGAgdGhlbiBpdCBhcnJpdmVzIGZpcnN0LCBmb2xsb3dlZCBieSBjaHVua3NcbiAgICAvLyBJZiB0aGUgdXNlciBzdXBwbGllZCBhbnkgZXZlbnQgYmVmb3JlIGBsb2FkZW5kYCwgYWxsIGNodW5rcyBmaW5pc2ggYmVmb3JlIGBsb2FkZW5kYCBhcnJpdmVzXG4gICAgaWYgKGlzTG9hZEVuZCkge1xuICAgICAgLy8gbG9hZGVuZCdzIGJyaWRnZS5wb3N0KCkgc2hvdWxkIHJ1biBsYXN0XG4gICAgICBhd2FpdCAwO1xuICAgICAgcmVxLmdvdExvYWRFbmQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaW1wb3J0aW5nKSB7XG4gICAgICBkYXRhLnJlc3BvbnNlID0gcmVxLmJpbjtcbiAgICB9XG4gICAgY29uc3QgZmlsZU5hbWUgPSB0eXBlID09PSAnbG9hZCcgJiYgcmVxLmJpbiAmJiByZXEuZmlsZU5hbWU7XG4gICAgaWYgKGZpbGVOYW1lKSB7XG4gICAgICByZXEuZmlsZU5hbWUgPSAnJztcbiAgICAgIGF3YWl0IGRvd25sb2FkQmxvYihyZXEuYmluLCBmaWxlTmFtZSk7XG4gICAgfVxuICAgIGJyaWRnZS5wb3N0KCdIdHRwUmVxdWVzdGVkJywgbXNnLCByZXEucmVhbG0pO1xuICAgIGlmIChyZXEuZ290TG9hZEVuZCAmJiByZXEuZ290Q2h1bmtzKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdHNbaWRdO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBpbXBvcnRCbG9iKHJlcSwgdXJsKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCAoYXdhaXQgZmV0Y2hTYWZlKHVybCkpOjoocmVxLndhbnRzQmxvYiA/IGdldEJsb2IgOiBnZXRBcnJheUJ1ZmZlcikoKTtcbiAgc2VuZENtZCgnUmV2b2tlQmxvYicsIHVybCk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBkb3dubG9hZEJsb2IoYmxvYiwgZmlsZU5hbWUpIHtcbiAgY29uc3QgdXJsID0gY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICBjb25zdCBhID0gbWFrZUVsZW0oJ2EnLCB7XG4gICAgaHJlZjogdXJsLFxuICAgIGRvd25sb2FkOiBmaWxlTmFtZSxcbiAgfSk7XG4gIGNvbnN0IHJlcyA9IGRvd25sb2FkQ2hhaW46OnRoZW4oKCkgPT4ge1xuICAgIGE6OmZpcmUobmV3IE1vdXNlRXZlbnRTYWZlKCdjbGljaycpKTtcbiAgICByZXZva2VCbG9iQWZ0ZXJUaW1lb3V0KHVybCk7XG4gIH0pO1xuICAvLyBGcmVxdWVudCBkb3dubG9hZHMgYXJlIGlnbm9yZWQgaW4gQ2hyb21lIGFuZCBwb3NzaWJseSBvdGhlciBicm93c2Vyc1xuICBkb3dubG9hZENoYWluID0gcmVzOjp0aGVuKHNlbmRDbWQoJ1NldFRpbWVvdXQnLCAxNTApKTtcbiAgcmV0dXJuIHJlcztcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmV2b2tlQmxvYkFmdGVyVGltZW91dCh1cmwpIHtcbiAgYXdhaXQgc2VuZENtZCgnU2V0VGltZW91dCcsIDMwMDApO1xuICByZXZva2VPYmplY3RVUkwodXJsKTtcbn1cblxuLyoqIEFycmF5QnVmZmVyL0Jsb2IgaW4gQ2hyb21lIGluY29nbml0byBpcyB0cmFuc2ZlcnJlZCBpbiBzdHJpbmcgY2h1bmtzICovXG5mdW5jdGlvbiByZWNlaXZlQWxsQ2h1bmtzKHJlcSwgbXNnKSB7XG4gIHJlcTo6cGlja0ludG9UaGlzKG1zZywgWydkYXRhU2l6ZScsICdjb250ZW50VHlwZSddKTtcbiAgcmVxLmFyciA9IG5ldyBVaW50OEFycmF5U2FmZShyZXEuZGF0YVNpemUpO1xuICBwcm9jZXNzQ2h1bmsocmVxLCBtc2cuZGF0YS5yZXNwb25zZSwgMCk7XG4gIHJldHVybiAhcmVxLmdvdENodW5rc1xuICAgID8gbmV3IFByb21pc2VTYWZlKHJlc29sdmUgPT4geyByZXEucmVzb2x2ZSA9IHJlc29sdmU7IH0pXG4gICAgOiBmaW5pc2hDaHVua3MocmVxKTtcbn1cblxuZnVuY3Rpb24gcmVjZWl2ZUNodW5rKHJlcSwgeyBkYXRhLCBwb3MsIGxhc3QgfSkge1xuICBwcm9jZXNzQ2h1bmsocmVxLCBkYXRhLCBwb3MpO1xuICBpZiAobGFzdCkge1xuICAgIHJlcS5nb3RDaHVua3MgPSB0cnVlO1xuICAgIHJlcS5yZXNvbHZlKGZpbmlzaENodW5rcyhyZXEpKTtcbiAgICBkZWxldGUgcmVxLnJlc29sdmU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0NodW5rKHJlcSwgZGF0YSwgcG9zKSB7XG4gIGNvbnN0IHsgYXJyIH0gPSByZXE7XG4gIGRhdGEgPSBhdG9iU2FmZShkYXRhKTtcbiAgZm9yIChsZXQgbGVuID0gZGF0YS5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEsIHBvcyArPSAxKSB7XG4gICAgYXJyW3Bvc10gPSBkYXRhOjpjaGFyQ29kZUF0KGkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmlzaENodW5rcyhyZXEpIHtcbiAgY29uc3QgeyBhcnIgfSA9IHJlcTtcbiAgZGVsZXRlIHJlcS5hcnI7XG4gIHJldHVybiByZXEud2FudHNCbG9iXG4gICAgPyBuZXcgQmxvYlNhZmUoW2Fycl0sIHsgdHlwZTogcmVxLmNvbnRlbnRUeXBlIH0pXG4gICAgOiBhcnIuYnVmZmVyO1xufVxuIiwiaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5pbXBvcnQgeyBzZW5kQ21kIH0gZnJvbSAnLi91dGlsLWNvbnRlbnQnO1xuXG5jb25zdCB0YWJJZHMgPSBjcmVhdGVOdWxsT2JqKCk7XG5jb25zdCB0YWJLZXlzID0gY3JlYXRlTnVsbE9iaigpO1xuY29uc3QgcmVhbG1zID0gY3JlYXRlTnVsbE9iaigpO1xuXG5icmlkZ2UuYWRkSGFuZGxlcnMoe1xuICBhc3luYyBUYWJPcGVuKHsga2V5LCBkYXRhIH0sIHJlYWxtKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gYXdhaXQgc2VuZENtZCgnVGFiT3BlbicsIGRhdGEpO1xuICAgIHRhYklkc1trZXldID0gaWQ7XG4gICAgdGFiS2V5c1tpZF0gPSBrZXk7XG4gICAgcmVhbG1zW2lkXSA9IHJlYWxtO1xuICB9LFxuICBUYWJDbG9zZShrZXkpIHtcbiAgICBjb25zdCBpZCA9IHRhYklkc1trZXldO1xuICAgIC8vICFrZXkgPT4gY2xvc2UgY3VycmVudCB0YWJcbiAgICAvLyBpZCA9PiBjbG9zZSB0YWIgYnkgaWRcbiAgICBpZiAoIWtleSB8fCBpZCkgc2VuZENtZCgnVGFiQ2xvc2UnLCB7IGlkIH0pO1xuICB9LFxufSk7XG5cbmJyaWRnZS5hZGRCYWNrZ3JvdW5kSGFuZGxlcnMoe1xuICBUYWJDbG9zZWQoaWQpIHtcbiAgICBjb25zdCBrZXkgPSB0YWJLZXlzW2lkXTtcbiAgICBjb25zdCByZWFsbSA9IHJlYWxtc1tpZF07XG4gICAgZGVsZXRlIHJlYWxtc1tpZF07XG4gICAgZGVsZXRlIHRhYktleXNbaWRdO1xuICAgIGRlbGV0ZSB0YWJJZHNba2V5XTtcbiAgICBpZiAoa2V5KSBicmlkZ2UucG9zdCgnVGFiQ2xvc2VkJywga2V5LCByZWFsbSk7XG4gIH0sXG59KTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWltcG9ydHNcbmV4cG9ydCB7IHNlbmRDbWQgfSBmcm9tICcjL2NvbW1vbic7XG5cbi8qKiBXaGVuIGxvb2tpbmcgZm9yIGRvY3VtZW50RWxlbWVudCwgdXNlICcqJyB0byBhbHNvIHN1cHBvcnQgWE1MIHBhZ2VzXG4gKiBOb3RlIHRoYXQgd2UgYXZvaWQgc3Bvb2ZlZCBwcm90b3R5cGUgZ2V0dGVycyBieSB1c2luZyBoYXNPd25Qcm9wZXJ0eSwgYW5kIG5vdCB1c2luZyBgbGVuZ3RoYFxuICogYXMgaXQgc2VhcmNoZXMgZm9yIEFMTCBtYXRjaGluZyBub2RlcyB3aGVuIHRoaXMgdGFnIHdhc24ndCBjYWNoZWQgaW50ZXJuYWxseS4gKi9cbmV4cG9ydCBjb25zdCBlbGVtQnlUYWcgPSAodGFnLCBpKSA9PiBnZXRPd25Qcm9wKGRvY3VtZW50OjpnZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpLCBpIHx8IDApO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIC0gY2FsbGJhY2sgcnVucyBpbW1lZGlhdGVseSwgdW5saWtlIGEgY2hhaW5lZCB0aGVuKClcbiAqIEBwYXJhbSB7P30gW2FyZ11cbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5leHBvcnQgY29uc3Qgb25FbGVtZW50ID0gKHRhZywgY2IsIGFyZykgPT4gbmV3IFByb21pc2VTYWZlKHJlc29sdmUgPT4ge1xuICBpZiAoZWxlbUJ5VGFnKHRhZykpIHtcbiAgICByZXNvbHZlKGNiKGFyZykpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgaWYgKGVsZW1CeVRhZyh0YWcpKSB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgcmVzb2x2ZShjYihhcmcpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBkb2N1bWVudEVsZW1lbnQgbWF5IGJlIHJlcGxhY2VkIHNvIHdlJ2xsIG9ic2VydmUgdGhlIGVudGlyZSBkb2N1bWVudFxuICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IG1ha2VFbGVtID0gKHRhZywgYXR0cnMpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudDo6Y3JlYXRlRWxlbWVudE5TKE5TX0hUTUwsIHRhZyk7XG4gIGlmIChhdHRycyAmJiBpc1N0cmluZyhhdHRycykpIHtcbiAgICBlbDo6YXBwZW5kKGF0dHJzKTtcbiAgfSBlbHNlIGlmIChhdHRycykge1xuICAgIG9iamVjdEtleXMoYXR0cnMpOjpmb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAndGV4dENvbnRlbnQnKSBlbDo6YXBwZW5kKGF0dHJzW2tleV0pO1xuICAgICAgZWxzZSBlbDo6c2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEZ1bGxVcmwgPSB1cmwgPT4gKFxuICBtYWtlRWxlbSgnYScsIHsgaHJlZjogdXJsIH0pOjpnZXRIcmVmKClcbik7XG5cbmV4cG9ydCBjb25zdCBkZWNvZGVSZXNvdXJjZSA9IChyYXcsIGlzQmxvYikgPT4ge1xuICBsZXQgcmVzO1xuICBjb25zdCBwb3MgPSByYXc6OnN0cmluZ0luZGV4T2YoJywnKTtcbiAgY29uc3QgYmluID0gYXRvYlNhZmUocG9zIDwgMCA/IHJhdyA6IHJhdzo6c2xpY2UocG9zICsgMSkpO1xuICBpZiAoaXNCbG9iIHx8IC9bXFx4ODAtXFx4RkZdLzo6cmVnZXhwVGVzdChiaW4pKSB7XG4gICAgY29uc3QgbGVuID0gYmluLmxlbmd0aDtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5U2FmZShsZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGJ5dGVzW2ldID0gYmluOjpjaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXMgPSBpc0Jsb2JcbiAgICAgID8gbmV3IEJsb2JTYWZlKFtieXRlc10sIHsgdHlwZTogcG9zIDwgMCA/ICcnIDogcmF3OjpzbGljZSgwLCBwb3MpIH0pXG4gICAgICA6IG5ldyBUZXh0RGVjb2RlclNhZmUoKTo6dGREZWNvZGUoYnl0ZXMpO1xuICB9IGVsc2UgeyAvLyBwdXJlIEFTQ0lJXG4gICAgcmVzID0gYmluO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuIiwiaW1wb3J0ICcjL2NvbW1vbi9icm93c2VyJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLWltcG9ydHNcbmltcG9ydCB7IHNlbmRDbWQgfSBmcm9tICcjL2NvbW1vbic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1pbXBvcnRzXG5pbXBvcnQgJy4vY29udGVudCc7XG5cbi8vIFNjcmlwdCBpbnN0YWxsYXRpb24gaW4gRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBzdXBwb3J0IGBvbkJlZm9yZVJlcXVlc3RgIGZvciBgZmlsZTpgXG5jb25zdCB1cmwgPSBJU19GSVJFRk9YICYmIElTX1RPUCAmJiBnbG9iYWwubG9jYXRpb24uaHJlZjtcbmlmICh1cmxcbiYmIC9eZmlsZTovOjpyZWdleHBUZXN0KHVybCkgLy8gRW5zdXJlIG5vdCBhIGxvY2FsIGZpbGVcbiYmIC9cXC51c2VyXFwuanMkLzo6cmVnZXhwVGVzdCh1cmwpKSB7IC8vIFVybCBlbmRzIHdpdGggdXNlci5qcyBzaG91bGQgYmUgYSBzY3JpcHRcbiAgKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBicm93c2VyLFxuICAgICAgZmV0Y2gsXG4gICAgICBoaXN0b3J5LFxuICAgICAgZG9jdW1lbnQ6IHsgcmVmZXJyZXIgfSxcbiAgICB9ID0gZ2xvYmFsO1xuICAgIGNvbnN0IHsgdGV4dDogZ2V0VGV4dCB9ID0gUmVzcG9uc2VQcm90bztcbiAgICBjb25zdCBmZXRjaE9wdHMgPSB7IG1vZGU6ICdzYW1lLW9yaWdpbicgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgZmV0Y2hPcHRzKTtcbiAgICBpZiAoIS9qYXZhc2NyaXB0fF50ZXh0XFwvcGxhaW58XiQvOjpyZWdleHBUZXN0KHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSB8fCAnJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG9sZENvZGU7XG4gICAgbGV0IGNvZGUgPSBhd2FpdCByZXNwb25zZTo6Z2V0VGV4dCgpO1xuICAgIGlmICghLz09dXNlcnNjcmlwdD09L2k6OnJlZ2V4cFRlc3QoY29kZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgc2VuZENtZCgnQ29uZmlybUluc3RhbGwnLCB7IGNvZGUsIHVybCwgZnJvbTogcmVmZXJyZXIgfSk7XG4gICAgLy8gRkY2OCsgZG9lc24ndCBhbGxvdyBleHRlbnNpb24gcGFnZXMgdG8gZ2V0IGZpbGU6IFVSTHMgYW55bW9yZSBzbyB3ZSBuZWVkIHRvIHRyYWNrIGl0IGhlcmVcbiAgICAvLyAoZGV0ZWN0aW5nIEZGNjggYnkgYSBmZWF0dXJlIGJlY2F1c2Ugd2UgY2FuJ3QgdXNlIGdldEJyb3dzZXJJbmZvIGhlcmUgYW5kIFVBIG1heSBiZSBhbHRlcmVkKVxuICAgIGlmIChicm93c2VyLnN0b3JhZ2UubWFuYWdlZCkge1xuICAgICAgLyoqIEBwYXJhbSB7Y2hyb21lLnJ1bnRpbWUuUG9ydH0gKi9cbiAgICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XG4gICAgICAgIGlmIChwb3J0Lm5hbWUgIT09ICdGZXRjaFNlbGYnKSByZXR1cm47XG4gICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb2RlID0gYXdhaXQgKGF3YWl0IGZldGNoKHVybCwgZmV0Y2hPcHRzKSk6OmdldFRleHQoKTtcbiAgICAgICAgICBpZiAoY29kZSA9PT0gb2xkQ29kZSkge1xuICAgICAgICAgICAgY29kZSA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9sZENvZGUgPSBjb2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKGNvZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIG9sZENvZGUgPSBudWxsO1xuICAgICAgICAgIC8vIFRoZSB1c2VyIG1heSBoYXZlIHJlbG9hZGVkIHRoZSBDb25maXJtIHBhZ2Ugc28gbGV0J3MgY2hlY2tcbiAgICAgICAgICBpZiAoIWF3YWl0IHNlbmRDbWQoJ0NoZWNrSW5zdGFsbGVyVGFiJywgcG9ydC5zZW5kZXIudGFiLmlkKSkge1xuICAgICAgICAgICAgY2xvc2VTZWxmKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZVNlbGYoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xvc2VTZWxmKCkge1xuICAgICAgaWYgKGhpc3RvcnkubGVuZ3RoID4gMSkge1xuICAgICAgICBoaXN0b3J5LmdvKC0xKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbmRDbWQoJ1RhYkNsb3NlJyk7XG4gICAgICB9XG4gICAgfVxuICB9KSgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpOyAvLyBGRiBkb2Vzbid0IHNob3cgZXhjZXB0aW9ucyBpbiBjb250ZW50IHNjcmlwdHNcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtaW1wb3J0cyAqL1xuXG4vKiBXQVJOSU5HIVxuICogTWFrZSBzdXJlIGFsbCByZS1leHBvcnRlZCBmdW5jdGlvbnMgc3Vydml2ZSBpbiBhIHNwb29mZWQvYnJva2VuIGVudmlyb25tZW50OlxuICogdXNlIG9ubHkgOjpzYWZlKCkgZ2xvYmFscyB0aGF0IGFyZSBpbml0aWFsaXplZCBpbiBhIGNvcnJlc3BvbmRpbmcgc2FmZS1nbG9iYWxzKiBmaWxlLFxuICogdXNlIF9fcHJvdG9fXzpudWxsIG9yIGdldC9zZXQgb3duIHByb3BzIGV4cGxpY2l0bHkuICovXG5cbmV4cG9ydCB7XG4gIGR1bXBTY3JpcHRWYWx1ZSxcbiAgaXNFbXB0eSxcbn0gZnJvbSAnIy9jb21tb24nO1xuZXhwb3J0ICogZnJvbSAnIy9jb21tb24vY29uc3RzJztcblxuZXhwb3J0IGNvbnN0IGZpcmVCcmlkZ2VFdmVudCA9IChldmVudElkLCBtc2csIGNsb25lSW50bykgPT4ge1xuICBjb25zdCBkZXRhaWwgPSBjbG9uZUludG8gPyBjbG9uZUludG8obXNnLCBkb2N1bWVudCkgOiBtc2c7XG4gIGNvbnN0IGV2dE1haW4gPSBuZXcgQ3VzdG9tRXZlbnRTYWZlKGV2ZW50SWQsIHsgX19wcm90b19fOiBudWxsLCBkZXRhaWwgfSk7XG4gIHdpbmRvdzo6ZmlyZShldnRNYWluKTtcbn07XG5cbmV4cG9ydCBjb25zdCBiaW5kRXZlbnRzID0gKHNyY0lkLCBkZXN0SWQsIGJyaWRnZSwgY2xvbmVJbnRvKSA9PiB7XG4gIC8qIFVzaW5nIGEgc2VwYXJhdGUgZXZlbnQgZm9yIGBub2RlYCBiZWNhdXNlIEN1c3RvbUV2ZW50IGNhbid0IHRyYW5zZmVyIG5vZGVzLFxuICAgKiB3aGVyZWFzIE1vdXNlRXZlbnQgKGFuZCBzb21lIG90aGVycykgY2FuJ3QgdHJhbnNmZXIgb2JqZWN0cyB3aXRob3V0IHN0cmluZ2lmaWNhdGlvbi4gKi9cbiAgbGV0IGluY29taW5nTm9kZUV2ZW50O1xuICB3aW5kb3c6Om9uKHNyY0lkLCBlID0+IHtcbiAgICBlOjpzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgW2JyaWRnZS4ke2JyaWRnZS5pZHMgPyAnaG9zdCcgOiAnZ3Vlc3Qud2ViJ31dIHJlY2VpdmVkYCxcbiAgICAgICAgaW5jb21pbmdOb2RlRXZlbnQgPyBlOjpnZXRSZWxhdGVkVGFyZ2V0KCkgOiBlOjpnZXREZXRhaWwoKSk7XG4gICAgfVxuICAgIGlmICghaW5jb21pbmdOb2RlRXZlbnQpIHtcbiAgICAgIC8vIEN1c3RvbUV2ZW50IGlzIHRoZSBtYWluIG1lc3NhZ2VcbiAgICAgIGNvbnN0IGRhdGEgPSBlOjpnZXREZXRhaWwoKTtcbiAgICAgIGluY29taW5nTm9kZUV2ZW50ID0gZGF0YS5ub2RlICYmIGRhdGE7XG4gICAgICBpZiAoIWluY29taW5nTm9kZUV2ZW50KSBicmlkZ2Uub25IYW5kbGUoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1vdXNlRXZlbnQgaXMgdGhlIHNlY29uZCBldmVudCB3aGVuIHRoZSBtYWluIGV2ZW50IGhhcyBgbm9kZTogdHJ1ZWBcbiAgICAgIGluY29taW5nTm9kZUV2ZW50Lm5vZGUgPSBlOjpnZXRSZWxhdGVkVGFyZ2V0KCk7XG4gICAgICBicmlkZ2Uub25IYW5kbGUoaW5jb21pbmdOb2RlRXZlbnQpO1xuICAgICAgaW5jb21pbmdOb2RlRXZlbnQgPSBudWxsO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG4gIGJyaWRnZS5wb3N0ID0gKGNtZCwgZGF0YSwgeyBkYXRhS2V5IH0gPSBicmlkZ2UsIG5vZGUpID0+IHtcbiAgICAvLyBDb25zdHJ1Y3RpbmcgdGhlIGV2ZW50IG5vdyBzbyB3ZSBkb24ndCBzZW5kIGFueXRoaW5nIGlmIGl0IHRocm93cyBvbiBpbnZhbGlkIGBub2RlYFxuICAgIGNvbnN0IGV2dE5vZGUgPSBub2RlICYmIG5ldyBNb3VzZUV2ZW50U2FmZShkZXN0SWQsIHsgX19wcm90b19fOiBudWxsLCByZWxhdGVkVGFyZ2V0OiBub2RlIH0pO1xuICAgIGZpcmVCcmlkZ2VFdmVudChkZXN0SWQsIHsgY21kLCBkYXRhLCBkYXRhS2V5LCBub2RlOiAhIWV2dE5vZGUgfSwgY2xvbmVJbnRvKTtcbiAgICBpZiAoZXZ0Tm9kZSkgd2luZG93OjpmaXJlKGV2dE5vZGUpO1xuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=