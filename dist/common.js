{ /* eslint-disable no-unused-vars */

/**
 * This file is used by entire `src` except `injected`.
 * `global` is used instead of WebPack's polyfill which we disable in webpack.conf.js.
 * `safeCall` is used by our modified babel-plugin-safe-bind.js.
 * Standard globals are extracted for better minification and marginally improved lookup speed.
 * Not exporting NodeJS built-in globals as this file is imported in the test scripts.
 */
const global = function _() {
  return this || globalThis; // eslint-disable-line no-undef
}();

const {
  Boolean,
  Error,
  Object,
  Promise,
  document,
  window
} = global;
const PromiseSafe = Promise; // alias used by browser.js

const ErrorSafe = Error; // alias used by browser.js

const {
  hasOwnProperty,
  toString: objectToString
} = {};
const safeCall = Object.call.bind(Object.call);
const IS_FIREFOX = !global.chrome.app;(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

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

    if (undefined) {
      try {
        safeCall(apply, func, thisArg, args);
      } catch (e) {
        if (e[MESSAGE] === 'Extension context invalidated.') {
          console.error('Please reload the tab to restore Violentmonkey API for userscripts.');
        } else {
          throw e;
        }
      }
    } else {
      safeCall(apply, func, thisArg, args);
    }

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

/***/ "./src/common/cache.js":
/*!*****************************!*\
  !*** ./src/common/cache.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initCache; });
function initCache({
  lifetime: defaultLifetime = 3000,
  onDispose
} = {}) {
  let cache = Object.create(null); // setTimeout call is very expensive when done frequently,
  // 1000 calls performed for 50 scripts consume 50ms on each tab load,
  // so we'll schedule trim() just once per event loop cycle,
  // and then trim() will trim the cache and reschedule itself to the earliest expiry time.

  let timer;
  let minLifetime = -1; // same goes for the performance.now() used by hit() and put() which is why we expose batch(true)
  // to start an operation that reuses the same value of now(), and batch(false) to end it

  let batchStarted;
  let batchStartTime; // eslint-disable-next-line no-return-assign

  const getNow = () => batchStarted && batchStartTime || (batchStartTime = performance.now());
  /** @namespace VMCache */


  return {
    batch,
    get,
    getValues,
    pop,
    put,
    del,
    has,
    hit,
    destroy
  };

  function batch(enable) {
    batchStarted = enable;
    batchStartTime = 0;
  }

  function get(key, def, shouldHit = true) {
    const item = cache[key];

    if (item && shouldHit) {
      reschedule(item, item.lifetime);
    }

    return item ? item.value : def;
  }

  function getValues() {
    return Object.values(cache).map(item => item.value);
  }

  function pop(key, def) {
    const value = get(key, def);
    del(key);
    return value;
  }

  function put(key, value, lifetime) {
    reschedule(cache[key] = lifetime ? {
      value,
      lifetime
    } : {
      value
    }, lifetime);
    return value;
  }

  function del(key) {
    const data = cache[key];

    if (data) {
      delete cache[key];
      onDispose == null ? void 0 : onDispose(data.value, key);
    }
  }

  function has(key) {
    return cache[key];
  }

  function hit(key, lifetime) {
    const entry = cache[key];

    if (entry) {
      reschedule(entry, lifetime);
    }
  }

  function destroy() {
    // delete all keys to make sure onDispose is called for each value
    if (onDispose) {
      // cache inherits null so we don't need to check hasOwnProperty
      // eslint-disable-next-line guard-for-in
      for (const key in cache) {
        del(key);
      }
    } else {
      cache = Object.create(null);
    }

    clearTimeout(timer);
    timer = 0;
  }

  function reschedule(entry, lifetime = defaultLifetime) {
    entry.expiry = lifetime + getNow();

    if (timer) {
      if (lifetime >= minLifetime) return;
      clearTimeout(timer);
    }

    minLifetime = lifetime;
    timer = setTimeout(trim, lifetime);
  }

  function trim() {
    // next timer won't be able to run earlier than 10ms
    // so we'll sweep the upcoming expired entries in this run
    const now = performance.now() + 10;
    let closestExpiry = Number.MAX_SAFE_INTEGER; // eslint-disable-next-line guard-for-in

    for (const key in cache) {
      const {
        expiry
      } = cache[key];

      if (expiry < now) {
        del(key);
      } else if (expiry < closestExpiry) {
        closestExpiry = expiry;
      }
    }

    minLifetime = closestExpiry - now;
    timer = closestExpiry < Number.MAX_SAFE_INTEGER ? setTimeout(trim, minLifetime) : 0;
  }
}

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

/***/ "./src/common/handlers.js":
/*!********************************!*\
  !*** ./src/common/handlers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./src/common/options.js");

const handlers = {
  UpdateOptions(data) {
    _options__WEBPACK_IMPORTED_MODULE_0__["default"].update(data);
  }

};
browser.runtime.onMessage.addListener((res, src) => {
  const handle = handlers[res.cmd];
  if (handle) handle(res.data, src);
});
/* harmony default export */ __webpack_exports__["default"] = (handlers);

/***/ }),

/***/ "./src/common/hook-setting.js":
/*!************************************!*\
  !*** ./src/common/hook-setting.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hookSetting; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./src/common/options.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./src/common/object.js");


const hooks = {};
_options__WEBPACK_IMPORTED_MODULE_0__["default"].hook(data => {
  safeCall(_object__WEBPACK_IMPORTED_MODULE_1__["forEachEntry"], hooks, ([key, list]) => {
    if (list) {
      const value = Object(_object__WEBPACK_IMPORTED_MODULE_1__["objectGet"])(data, key);
      if (value !== undefined) list.forEach(update => update(value));
    }
  });
});
function hookSetting(key, update) {
  _options__WEBPACK_IMPORTED_MODULE_0__["default"].ready.then(() => update(_options__WEBPACK_IMPORTED_MODULE_0__["default"].get(key)));
  const list = hooks[key] || (hooks[key] = []);
  list.push(update);
  return () => {
    const i = list.indexOf(update);
    if (i >= 0) list.splice(i, 1);
  };
}

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

  if (!undefined && window === getBgPage()) {
    promise = promise.catch(_util__WEBPACK_IMPORTED_MODULE_2__["noop"]);
  }

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

/***/ "./src/common/options-defaults.js":
/*!****************************************!*\
  !*** ./src/common/options-defaults.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/common/consts.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  isApplied: true,
  autoUpdate: 1,
  // days, 0 = disable
  // ignoreGrant: false,
  lastUpdate: 0,
  lastModified: 0,

  /** @typedef {'unique' | 'total' | ''} VMBadgeMode */

  /** @type VMBadgeMode */
  showBadge: 'unique',
  badgeColor: '#880088',
  badgeColorBlocked: '#888888',
  exportValues: true,
  exportNameTemplate: '[violentmonkey]_YYYY-MM-DD_HH.mm.ss',
  expose: {
    // use percent-encoding for '.'
    'greasyfork%2Eorg': true,
    'sleazyfork%2Eorg': false
  },
  closeAfterInstall: false,
  trackLocalFile: false,
  autoReload: false,
  features: null,
  blacklist: null,
  syncScriptStatus: true,
  sync: null,
  customCSS: null,
  importScriptData: true,
  importSettings: true,
  notifyUpdates: false,
  notifyUpdatesGlobal: false,
  // `true` ignores script.config.notifyUpdates
  version: null,

  /** @type {'auto' | 'page' | 'content'} */
  defaultInjectInto: _consts__WEBPACK_IMPORTED_MODULE_0__["INJECT_AUTO"],
  xhrInject: false,
  filters: {
    /** @type {'name' | 'code' | 'all'} */
    searchScope: 'name',

    /** @type boolean */
    showOrder: false,

    /** @type {'exec' | 'alpha' | 'update'} */
    sort: 'exec',

    /** @type boolean */
    viewSingleColumn: false,

    /** @type boolean */
    viewTable: false
  },
  filtersPopup: {
    /** @type {'exec' | 'alpha'} */
    sort: 'exec',
    enabledFirst: false,

    /** @type {'' | 'hide' | 'group'} where '' = show */
    hideDisabled: ''
  },
  editor: {
    lineWrapping: false,
    indentWithTabs: false,
    indentUnit: 2,
    tabSize: 2,
    undoDepth: 200
  },
  editorTheme: '',
  editorThemeName: null,
  editorWindow: false,
  // whether popup opens editor in a new window
  editorWindowPos: {},
  // { left, top, width, height }
  editorWindowSimple: true,
  // whether to open a simplified popup or a normal browser window
  scriptTemplate: `\
// ==UserScript==
// @name        New script {{name}}
// @namespace   Violentmonkey Scripts
// @match       {{url}}
// @grant       none
// @version     1.0
// @author      -
// @description {{date}}
// ==/UserScript==
`,
  // Enables automatic updates to the default template with new versions of VM

  /** @type {?Boolean} this must be |null| for template-hook.js upgrade routine */
  scriptTemplateEdited: null,

  /** @typedef {'' | 'dark' | 'light'} VMUiTheme */

  /** @type VMUiTheme */
  uiTheme: ''
});

/***/ }),

/***/ "./src/common/options.js":
/*!*******************************!*\
  !*** ./src/common/options.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/options-defaults */ "./src/common/options-defaults.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/common/index.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object */ "./src/common/object.js");



let options = {};
const hooks = Object(___WEBPACK_IMPORTED_MODULE_1__["initHooks"])();
const ready = Object(___WEBPACK_IMPORTED_MODULE_1__["sendCmdDirectly"])('GetAllOptions', null, {
  retry: true
}).then(data => {
  options = data;
  if (data) hooks.fire(data);
});

function getOption(key) {
  var _objectGet;

  return (_objectGet = Object(_object__WEBPACK_IMPORTED_MODULE_2__["objectGet"])(options, key)) != null ? _objectGet : Object(_object__WEBPACK_IMPORTED_MODULE_2__["objectGet"])(_Users_ZhaoJun_Desktop_violentmonkey_src_common_options_defaults__WEBPACK_IMPORTED_MODULE_0__["default"], key);
}

function setOption(key, value) {
  // the updated options object will be propagated from the background script after a pause
  // so meanwhile the local code should be able to see the new value using options.get()
  Object(_object__WEBPACK_IMPORTED_MODULE_2__["objectSet"])(options, key, value);
  Object(___WEBPACK_IMPORTED_MODULE_1__["sendCmdDirectly"])('SetOptions', {
    key,
    value
  });
}

function updateOptions(data) {
  // Keys in `data` may be { flattened.like.this: 'foo' }
  const expandedData = {};
  safeCall(_object__WEBPACK_IMPORTED_MODULE_2__["forEachEntry"], data, ([key, value]) => {
    Object(_object__WEBPACK_IMPORTED_MODULE_2__["objectSet"])(options, key, value);
    Object(_object__WEBPACK_IMPORTED_MODULE_2__["objectSet"])(expandedData, key, value);
  });
  hooks.fire(expandedData);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  ready,
  get: getOption,
  set: setOption,
  update: updateOptions,
  hook: hooks.hook
});

/***/ }),

/***/ "./src/common/router.js":
/*!******************************!*\
  !*** ./src/common/router.js ***!
  \******************************/
/*! exports provided: route, lastRoute, setRoute, getUnloadSentry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastRoute", function() { return lastRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRoute", function() { return setRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnloadSentry", function() { return getUnloadSentry; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/ui */ "./src/common/ui/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/common/util.js");



function parse(hash) {
  const [pathname, search = ''] = hash.split('?');
  const query = search.split('&').reduce((res, seq) => {
    if (seq) {
      const [key, val] = seq.split('=');
      res[decodeURIComponent(key)] = decodeURIComponent(val);
    }

    return res;
  }, {});
  const paths = pathname.split('/');
  return {
    hash,
    pathname,
    paths,
    query
  };
}

const stack = [];
const route = {};
const lastRoute = () => stack[stack.length - 1] || {};
updateRoute();

function updateRoute(noConfirm) {
  const hash = window.location.hash.slice(1);

  if (noConfirm || !route.confirmChange) {
    Object.assign(route, parse(hash));
  } else if (route.hash !== hash) {
    // restore the pinned route
    setRoute(route.hash, false, true);
    route.confirmChange(hash);
  }
} // popstate should be the first to ensure hashchange listeners see the correct lastRoute


window.addEventListener('popstate', () => stack.pop());
window.addEventListener('hashchange', () => updateRoute(), false);
function setRoute(hash, replace, noConfirm) {
  let hashString = `${hash}`;
  if (hashString[0] !== '#') hashString = `#${hashString}`;

  if (replace) {
    window.history.replaceState('', null, hashString);
  } else {
    stack.push(Object.assign({}, route));
    window.history.pushState('', null, hashString);
  }

  updateRoute(noConfirm);
}
function getUnloadSentry(onConfirm, onCancel) {
  async function confirmPopState(hash) {
    try {
      // popstate cannot be prevented so we pin current `route` and display a confirmation
      await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_0__["showConfirmation"])(Object(_util__WEBPACK_IMPORTED_MODULE_1__["i18n"])('confirmNotSaved'));
      setRoute(hash, false, true);
      onConfirm == null ? void 0 : onConfirm();
    } catch (_unused) {
      onCancel == null ? void 0 : onCancel();
    }
  }

  function toggle(state) {
    const onOff = `${state ? 'add' : 'remove'}EventListener`;
    global[onOff]('beforeunload', onUnload);
    route.confirmChange = state && confirmPopState;
  }

  return toggle;
}

function onUnload(e) {
  e.preventDefault(); // modern browser show their own message text

  e.returnValue = Object(_util__WEBPACK_IMPORTED_MODULE_1__["i18n"])('confirmNotSaved');
}

/***/ }),

/***/ "./src/common/storage.js":
/*!*******************************!*\
  !*** ./src/common/storage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/common/util.js");



/** @type VMCache */

let dataCache;
const browserStorageLocal = browser.storage.local;

const onStorageChanged = changes => {
  safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["forEachEntry"], changes, ([key, {
    newValue
  }]) => {
    if (newValue == null) {
      dataCache.del(key);
    } else {
      dataCache.put(key, newValue);
    }
  });
};
/** @namespace VMStorageBase */


const base = {
  prefix: '',

  setDataCache(val) {
    dataCache = val;
    browser.storage.onChanged.addListener(onStorageChanged);
  },

  getKey(id) {
    return `${this.prefix}${id}`;
  },

  async getOne(id) {
    return (await this.getMulti([id]))[id];
  },

  /**
   * @param {string[]} ids
   * @param {?} [def]
   * @param {function(id:string, val:?):?} [transform]
   * @returns {Promise<Object>}
   */
  async getMulti(ids, def, transform) {
    const res = {};
    const data = {};
    const missingKeys = [];
    ids.forEach(id => {
      var _dataCache;

      const key = this.getKey(id);
      const cached = (_dataCache = dataCache) == null ? void 0 : _dataCache.get(key);
      res[id] = key;

      if (cached != null) {
        data[key] = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["deepCopy"])(cached);
      } else {
        missingKeys.push(key);
      }
    });

    if (missingKeys.length) {
      Object.assign(data, (await browserStorageLocal.get(missingKeys)));
    }

    safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["forEachEntry"], res, ([id, key]) => {
      var _data$key;

      res[id] = transform ? transform(id, data[key]) : (_data$key = data[key]) != null ? _data$key : Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["deepCopy"])(def);
    });
    return res;
  },

  // Must be `async` to ensure a Promise is returned when `if` doesn't match
  async set(id, value) {
    if (id) return this.dump({
      [id]: value
    });
  },

  // Must be `async` to ensure a Promise is returned when `if` doesn't match
  async remove(id) {
    if (id) return this.removeMulti([id]);
  },

  // Must be `async` to ensure a Promise is returned when `if` doesn't match
  async removeMulti(ids) {
    if (ids.length) {
      const keys = ids.map(this.getKey, this);
      if (dataCache) keys.forEach(dataCache.del);
      return browserStorageLocal.remove(keys);
    }
  },

  async dump(data) {
    const output = {};
    safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["forEachEntry"], data, ([id, value]) => {
      var _dataCache2;

      const key = this.getKey(id);
      output[key] = value;
      (_dataCache2 = dataCache) == null ? void 0 : _dataCache2.put(key, Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["deepCopy"])(value));
    });
    await browserStorageLocal.set(output);
    return data;
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  base,
  cache: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, base, {
    prefix: 'cac:',

    /**
     * @param {VMRequestResponse} response
     * @param {boolean} [noJoin]
     * @returns {string|string[]}
     */
    async makeRaw(response, noJoin) {
      const type = (response.headers.get('content-type') || '').split(';')[0] || '';
      const body = await Object(_util__WEBPACK_IMPORTED_MODULE_2__["blob2base64"])(response.data);
      return noJoin ? [type, body] : `${type},${body}`;
    },

    /**
     * @param {string} url
     * @param {string} [raw] - raw value in storage.cache
     * @returns {?string}
     */
    makeDataUri(url, raw) {
      if (url.startsWith('data:')) return url;

      if (/^(i,|image\/)/.test(raw)) {
        // workaround for bugs in old VM, see 2e135cf7
        const i = raw.lastIndexOf(',');
        const type = raw.startsWith('image/') ? raw.slice(0, i) : 'image/png';
        return `data:${type};base64,${raw.slice(i + 1)}`;
      }

      return raw;
    }

  }),
  code: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, base, {
    prefix: 'code:'
  }),
  // last-modified HTTP header value per URL
  mod: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, base, {
    prefix: 'mod:'
  }),
  require: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, base, {
    prefix: 'req:'
  }),
  script: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, base, {
    prefix: 'scr:',

    async dump(items) {
      items = Object(_util__WEBPACK_IMPORTED_MODULE_2__["ensureArray"])(items).filter(Boolean);
      if (!items.length) return;
      const data = items.reduce((res, item) => {
        res[this.getKey(item.props.id)] = item;
        if (this.onDump) this.onDump(item);
        return res;
      }, {});
      await base.dump(data);
      return items;
    }

  }),
  value: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, base, {
    prefix: 'val:'
  })
});

/***/ }),

/***/ "./src/common/ua.js":
/*!**************************!*\
  !*** ./src/common/ua.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// UA can be overridden by about:config in FF or devtools in Chrome
// so we'll test for window.chrome.app which is only defined in Chrome
// and for browser.runtime.getBrowserInfo in Firefox 51+

/** @typedef UAExtras
 * @property {number|NaN} chrome - Chrome/ium version number
 * @property {number|NaN} firefox - derived from UA string initially, a real number when `ready`
 * @property {Promise<void>} ready - resolves when `browser` API returns real versions
 */

/** @typedef UAInjected
 * @property {chrome.runtime.PlatformInfo.arch} arch
 * @property {chrome.runtime.PlatformInfo.os} os
 * @property {string} browserName
 * @property {string} browserVersion
 */

/** @type {UAInjected & UAExtras} */
const ua = {};
/* harmony default export */ __webpack_exports__["default"] = (ua); // using non-enumerable properties that won't be sent to content scripts via GetInjected

Object.defineProperties(ua, {
  chrome: {
    value: matchNavUA(true)
  },
  firefox: {
    value: matchNavUA(),
    // will be replaced with the real version number in ready()
    writable: true
  },
  ready: {
    value: Promise.all([browser.runtime.getPlatformInfo(), browser.runtime.getBrowserInfo == null ? void 0 : browser.runtime.getBrowserInfo()]).then(([{
      os,
      arch
    }, {
      name,
      version
    } = {}]) => {
      Object.assign(ua, {
        arch,
        os,
        browserName: (name == null ? void 0 : name.toLowerCase()) || 'chrome',
        browserVersion: version || matchNavUA(true, true)
      });

      if (IS_FIREFOX) {
        ua.firefox = parseFloat(version) || 0;
      }
    })
  }
});

function matchNavUA(asChrome, asString) {
  const re = new RegExp(`\\s${asChrome ? 'Chrom(e|ium)' : 'Firefox'}/(\\d+[.0-9]*)|$`, 'i');
  const ver = navigator.userAgent.match(re).pop();
  return asString ? ver : parseFloat(ver);
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

/***/ "./src/resources/svg sync \\.svg$":
/*!****************************************************!*\
  !*** ./src/resources/svg sync nonrecursive \.svg$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrow.svg": "./src/resources/svg/arrow.svg",
	"./author.svg": "./src/resources/svg/author.svg",
	"./code.svg": "./src/resources/svg/code.svg",
	"./cog.svg": "./src/resources/svg/cog.svg",
	"./command.svg": "./src/resources/svg/command.svg",
	"./filter.svg": "./src/resources/svg/filter.svg",
	"./home.svg": "./src/resources/svg/home.svg",
	"./info.svg": "./src/resources/svg/info.svg",
	"./more.svg": "./src/resources/svg/more.svg",
	"./plus.svg": "./src/resources/svg/plus.svg",
	"./question.svg": "./src/resources/svg/question.svg",
	"./refresh.svg": "./src/resources/svg/refresh.svg",
	"./search.svg": "./src/resources/svg/search.svg",
	"./toggle-off.svg": "./src/resources/svg/toggle-off.svg",
	"./toggle-on.svg": "./src/resources/svg/toggle-on.svg",
	"./trash.svg": "./src/resources/svg/trash.svg",
	"./undo.svg": "./src/resources/svg/undo.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/resources/svg sync \\.svg$";

/***/ })

}]);}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2hvb2stc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vb3B0aW9ucy1kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvc3ZnIHN5bmMgbm9ucmVjdXJzaXZlIFxcLnN2ZyQiXSwibmFtZXMiOlsiSVNfRklSRUZPWCIsImdsb2JhbCIsImJyb3dzZXIiLCJydW50aW1lIiwiY2hyb21lIiwiUHJveHkiLCJQcm94eVNhZmUiLCJhcHBseSIsImJpbmQiLCJNRVNTQUdFIiwiU1RBQ0siLCJpc1N5bmNNZXRob2ROYW1lIiwia2V5IiwiaXNGdW5jdGlvbiIsInZhbCIsImlzT2JqZWN0IiwicHJveGlmeVZhbHVlIiwidGFyZ2V0Iiwic3JjIiwibWV0YVZhbCIsInNyY1ZhbCIsInVuZGVmaW5lZCIsInJlcyIsImhhc093blByb3BlcnR5Iiwid3JhcEFzeW5jIiwicHJveGlmeUdyb3VwIiwibWV0YSIsImdldCIsImdyb3VwIiwidGhpc0FyZyIsImZ1bmMiLCJwcmVwcm9jZXNzb3JGdW5jIiwiYXJncyIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9taXNlIiwiUHJvbWlzZVNhZmUiLCJfcmVzb2x2ZSIsIl9yZWplY3QiLCJzdGFja0luZm8iLCJFcnJvclNhZmUiLCJuYW1lIiwibGVuZ3RoIiwicmVzdWx0IiwicnVudGltZUVyciIsImxhc3RFcnJvciIsImVyciIsImlzUnVudGltZSIsInByb2Nlc3MiLCJlIiwiY29uc29sZSIsImVycm9yIiwid3JhcFN1Y2Nlc3MiLCJ3cmFwRXJyb3IiLCJzZW5kUmVzcG9uc2VBc3luYyIsInNlbmRSZXNwb25zZSIsIm9uTWVzc2FnZUxpc3RlbmVyIiwibGlzdGVuZXIiLCJtZXNzYWdlIiwic2VuZGVyIiwib2JqZWN0VG9TdHJpbmciLCJ1bndyYXBSZXNwb25zZSIsInJlc3BvbnNlIiwid3JhcFNlbmRNZXNzYWdlIiwic2VuZE1lc3NhZ2UiLCJleHRlbnNpb24iLCJpMThuIiwiY29ubmVjdCIsImdldE1hbmlmZXN0IiwiZ2V0VVJMIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJ0YWJzIiwiaW5pdENhY2hlIiwibGlmZXRpbWUiLCJkZWZhdWx0TGlmZXRpbWUiLCJvbkRpc3Bvc2UiLCJjYWNoZSIsIk9iamVjdCIsImNyZWF0ZSIsInRpbWVyIiwibWluTGlmZXRpbWUiLCJiYXRjaFN0YXJ0ZWQiLCJiYXRjaFN0YXJ0VGltZSIsImdldE5vdyIsInBlcmZvcm1hbmNlIiwibm93IiwiYmF0Y2giLCJnZXRWYWx1ZXMiLCJwb3AiLCJwdXQiLCJkZWwiLCJoYXMiLCJoaXQiLCJkZXN0cm95IiwiZW5hYmxlIiwiZGVmIiwic2hvdWxkSGl0IiwiaXRlbSIsInJlc2NoZWR1bGUiLCJ2YWx1ZSIsInZhbHVlcyIsIm1hcCIsImRhdGEiLCJlbnRyeSIsImNsZWFyVGltZW91dCIsImV4cGlyeSIsInNldFRpbWVvdXQiLCJ0cmltIiwiY2xvc2VzdEV4cGlyeSIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJJU19ERVYiLCJLRVlfR0xPQkFMX0lEIiwiQlVJTERfSU5fU0NSSVBUX1NSQyIsIklOSkVDVF9BVVRPIiwiSU5KRUNUX1BBR0UiLCJJTkpFQ1RfQ09OVEVOVCIsIklOSkVDVF9NQVBQSU5HIiwiX19wcm90b19fIiwiQ01EX1NDUklQVF9BREQiLCJDTURfU0NSSVBUX1VQREFURSIsIk1FVEFCTE9DS19SRSIsIklOSkVDVEFCTEVfVEFCX1VSTF9SRSIsIlRJTUVPVVRfTUFYIiwiVElNRU9VVF9IT1VSIiwiVElNRU9VVF8yNEhPVVJTIiwiVElNRU9VVF9XRUVLIiwiaGFuZGxlcnMiLCJVcGRhdGVPcHRpb25zIiwib3B0aW9ucyIsInVwZGF0ZSIsImhhbmRsZSIsImNtZCIsImhvb2tzIiwiaG9vayIsImZvckVhY2hFbnRyeSIsImxpc3QiLCJvYmplY3RHZXQiLCJmb3JFYWNoIiwiaG9va1NldHRpbmciLCJyZWFkeSIsInRoZW4iLCJwdXNoIiwiaSIsImluZGV4T2YiLCJzcGxpY2UiLCJkZWZhdWx0SW1hZ2UiLCJpbml0SG9va3MiLCJmaXJlIiwic2xpY2UiLCJjYiIsImNhbGxiYWNrIiwic2VuZENtZCIsIkNPTU1BTkRTX1dJVEhfU1JDIiwiZ2V0QmdQYWdlIiwiZ2V0QmFja2dyb3VuZFBhZ2UiLCJzZW5kQ21kRGlyZWN0bHkiLCJiZyIsImluY2x1ZGVzIiwid2luZG93IiwiZGVlcENvcHkiLCJoYW5kbGVDb21tYW5kTWVzc2FnZSIsInNlbmRUYWJDbWQiLCJ0YWJJZCIsImNhdGNoIiwibm9vcCIsInBheWxvYWQiLCJyZXRyeSIsInNlbmRNZXNzYWdlUmV0cnkiLCJyZXRyaWVzIiwicGF1c2VEdXJhdGlvbiIsIm1ha2VQYXVzZSIsIkVycm9yIiwibGVmdHBhZCIsImlucHV0IiwicGFkIiwibnVtIiwidG9TdHJpbmciLCJnZXRMb2NhbGVTdHJpbmciLCJsb2NhbGVNZXRhIiwibmF2aWdhdG9yIiwibGFuZ3VhZ2VzIiwibGFuZyIsInRvTG93ZXJDYXNlIiwiZmluZCIsIkJvb2xlYW4iLCJnZXRTY3JpcHROYW1lIiwic2NyaXB0IiwiY3VzdG9tIiwicHJvcHMiLCJpZCIsImdldEZ1bGxVcmwiLCJ1cmwiLCJiYXNlIiwib2JqIiwiVVJMIiwicHJvdG9jb2wiLCJocmVmIiwiZW5jb2RlRmlsZW5hbWUiLCJyZXBsYWNlIiwibSIsImNvZGUiLCJjaGFyQ29kZUF0IiwiZGVjb2RlRmlsZW5hbWUiLCJmaWxlbmFtZSIsIl9tIiwiZyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwiZ2V0QWN0aXZlVGFiIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93Iiwid2luZG93SWQiLCJ3aW5kb3dzIiwiZ2V0Q3VycmVudCIsIm1zIiwiUHJvbWlzZSIsInRydWVKb2luIiwic2VwYXJhdG9yIiwiZmlsdGVyIiwiam9pbiIsIm5vcm1hbGl6ZUtleXMiLCJBcnJheSIsImlzQXJyYXkiLCJzcGxpdCIsInJhd0tleSIsImtleXMiLCJldmVyeSIsIm9iamVjdFNldCIsInJvb3QiLCJzdWIiLCJsYXN0S2V5Iiwib2JqZWN0UGljayIsInRyYW5zZm9ybSIsInJlZHVjZSIsIm1hcEVudHJ5IiwiZW50cmllcyIsImFsbEVudHJpZXMiLCJmb3JFYWNoS2V5IiwiZm9yRWFjaFZhbHVlIiwiZGVlcEVxdWFsIiwiYSIsImIiLCJrZXlzQSIsImtleXNCIiwiaXNBcHBsaWVkIiwiYXV0b1VwZGF0ZSIsImxhc3RVcGRhdGUiLCJsYXN0TW9kaWZpZWQiLCJzaG93QmFkZ2UiLCJiYWRnZUNvbG9yIiwiYmFkZ2VDb2xvckJsb2NrZWQiLCJleHBvcnRWYWx1ZXMiLCJleHBvcnROYW1lVGVtcGxhdGUiLCJleHBvc2UiLCJjbG9zZUFmdGVySW5zdGFsbCIsInRyYWNrTG9jYWxGaWxlIiwiYXV0b1JlbG9hZCIsImZlYXR1cmVzIiwiYmxhY2tsaXN0Iiwic3luY1NjcmlwdFN0YXR1cyIsInN5bmMiLCJjdXN0b21DU1MiLCJpbXBvcnRTY3JpcHREYXRhIiwiaW1wb3J0U2V0dGluZ3MiLCJub3RpZnlVcGRhdGVzIiwibm90aWZ5VXBkYXRlc0dsb2JhbCIsInZlcnNpb24iLCJkZWZhdWx0SW5qZWN0SW50byIsInhockluamVjdCIsImZpbHRlcnMiLCJzZWFyY2hTY29wZSIsInNob3dPcmRlciIsInNvcnQiLCJ2aWV3U2luZ2xlQ29sdW1uIiwidmlld1RhYmxlIiwiZmlsdGVyc1BvcHVwIiwiZW5hYmxlZEZpcnN0IiwiaGlkZURpc2FibGVkIiwiZWRpdG9yIiwibGluZVdyYXBwaW5nIiwiaW5kZW50V2l0aFRhYnMiLCJpbmRlbnRVbml0IiwidGFiU2l6ZSIsInVuZG9EZXB0aCIsImVkaXRvclRoZW1lIiwiZWRpdG9yVGhlbWVOYW1lIiwiZWRpdG9yV2luZG93IiwiZWRpdG9yV2luZG93UG9zIiwiZWRpdG9yV2luZG93U2ltcGxlIiwic2NyaXB0VGVtcGxhdGUiLCJzY3JpcHRUZW1wbGF0ZUVkaXRlZCIsInVpVGhlbWUiLCJnZXRPcHRpb24iLCJkZWZhdWx0cyIsInNldE9wdGlvbiIsInVwZGF0ZU9wdGlvbnMiLCJleHBhbmRlZERhdGEiLCJzZXQiLCJwYXJzZSIsImhhc2giLCJwYXRobmFtZSIsInNlYXJjaCIsInNlcSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhdGhzIiwic3RhY2siLCJyb3V0ZSIsImxhc3RSb3V0ZSIsInVwZGF0ZVJvdXRlIiwibm9Db25maXJtIiwibG9jYXRpb24iLCJjb25maXJtQ2hhbmdlIiwiYXNzaWduIiwic2V0Um91dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFzaFN0cmluZyIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJwdXNoU3RhdGUiLCJnZXRVbmxvYWRTZW50cnkiLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsImNvbmZpcm1Qb3BTdGF0ZSIsInNob3dDb25maXJtYXRpb24iLCJ0b2dnbGUiLCJzdGF0ZSIsIm9uT2ZmIiwib25VbmxvYWQiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwiZGF0YUNhY2hlIiwiYnJvd3NlclN0b3JhZ2VMb2NhbCIsInN0b3JhZ2UiLCJsb2NhbCIsIm9uU3RvcmFnZUNoYW5nZWQiLCJjaGFuZ2VzIiwibmV3VmFsdWUiLCJwcmVmaXgiLCJzZXREYXRhQ2FjaGUiLCJvbkNoYW5nZWQiLCJnZXRLZXkiLCJnZXRPbmUiLCJnZXRNdWx0aSIsImlkcyIsIm1pc3NpbmdLZXlzIiwiY2FjaGVkIiwiZHVtcCIsInJlbW92ZSIsInJlbW92ZU11bHRpIiwib3V0cHV0IiwibWFrZVJhdyIsIm5vSm9pbiIsInR5cGUiLCJoZWFkZXJzIiwiYm9keSIsImJsb2IyYmFzZTY0IiwibWFrZURhdGFVcmkiLCJyYXciLCJzdGFydHNXaXRoIiwidGVzdCIsImxhc3RJbmRleE9mIiwibW9kIiwicmVxdWlyZSIsIml0ZW1zIiwiZW5zdXJlQXJyYXkiLCJvbkR1bXAiLCJ1YSIsImRlZmluZVByb3BlcnRpZXMiLCJtYXRjaE5hdlVBIiwiZmlyZWZveCIsIndyaXRhYmxlIiwiYWxsIiwiZ2V0UGxhdGZvcm1JbmZvIiwiZ2V0QnJvd3NlckluZm8iLCJvcyIsImFyY2giLCJicm93c2VyTmFtZSIsImJyb3dzZXJWZXJzaW9uIiwicGFyc2VGbG9hdCIsImFzQ2hyb21lIiwiYXNTdHJpbmciLCJyZSIsIlJlZ0V4cCIsInZlciIsInVzZXJBZ2VudCIsIm1hdGNoIiwiZ2V0TWVzc2FnZSIsInBhcmFtIiwibWVtb2l6ZSIsInJlc29sdmVyIiwiY2FjaGVNYXAiLCJtZW1vaXplZCIsImRlYm91bmNlIiwidGltZSIsInN0YXJ0VGltZSIsIk1hdGgiLCJtYXgiLCJjaGVja1RpbWUiLCJjaGVja1RpbWVyIiwiZGVsdGEiLCJkZWJvdW5jZWRGdW5jdGlvbiIsInRocm90dGxlIiwibGFzdFRpbWUiLCJ0aHJvdHRsZWRGdW5jdGlvbiIsImdldFVuaXFJZCIsImZsb29yIiwicmFuZG9tIiwiYnVmZmVyMnN0cmluZyIsImJ1ZiIsIm9mZnNldCIsInNsaWNlU2l6ZSIsInNsaWNlcyIsImFycmF5TGVuIiwiZW5kIiwibWluIiwiYnl0ZUxlbmd0aCIsIm5lZWRzU2xpY2luZyIsIlVpbnQ4QXJyYXkiLCJibG9iIiwic2l6ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwic3RyaW5nMnVpbnQ4YXJyYXkiLCJzdHIiLCJsZW4iLCJhcnJheSIsIlZFUlNJT05fUkUiLCJESUdJVFNfUkUiLCJjb21wYXJlVmVyc2lvbiIsInZlcjEiLCJ2ZXIyIiwibWFpbjEiLCJwcmUxIiwiZXhlYyIsIm1haW4yIiwicHJlMiIsImNvbXBhcmVWZXJzaW9uQ2h1bmsiLCJpc1NlbXZlck1vZGUiLCJwYXJ0czEiLCJwYXJ0czIiLCJsZW4xIiwibGVuMiIsInVuaXRzIiwiZm9ybWF0VGltZSIsImR1cmF0aW9uIiwidW5pdEluZm8iLCJzdGVwIiwiZm9ybWF0Qnl0ZUxlbmd0aCIsInRvRml4ZWQiLCJpc0VtcHR5IiwiYmluYXJ5VHlwZXMiLCJyZXF1ZXN0TG9jYWxGaWxlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJyZXNwb25zZVR5cGUiLCJvcGVuIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiSlNPTiIsIm9uZXJyb3IiLCJzZW5kIiwiRk9SQ0VEX0FDQ0VQVCIsImlzUmVtb3RlIiwicmVxdWVzdCIsImlzQm9keU9iaiIsImhvc3RuYW1lIiwiYWNjZXB0IiwiaW5pdCIsInN0cmluZ2lmeSIsInJlc3AiLCJmZXRjaCIsImxvYWRNZXRob2QiLCJhcnJheWJ1ZmZlciIsImpzb24iLCJTSU1QTEVfVkFMVUVfVFlQRSIsInN0cmluZyIsIm51bWJlciIsImJvb2xlYW4iLCJkdW1wU2NyaXB0VmFsdWUiLCJqc29uRHVtcCIsInNpbXBsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUQiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLy8gU2luY2UgdGhpcyBhbHNvIHJ1bnMgaW4gYSBjb250ZW50IHNjcmlwdCB3ZSdsbCBndWFyZCBhZ2FpbnN0IGltcGxpY2l0IGdsb2JhbCB2YXJpYWJsZXNcbi8vIGZvciBET00gZWxlbWVudHMgd2l0aCAnaWQnIGF0dHJpYnV0ZSB3aGljaCBpcyBhIHN0YW5kYXJkIGZlYXR1cmUsIG1vcmUgaW5mbzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9wdWxsLzE1M1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvd2luZG93LW9iamVjdC5odG1sI25hbWVkLWFjY2Vzcy1vbi10aGUtd2luZG93LW9iamVjdFxuaWYgKCFJU19GSVJFRk9YICYmICFnbG9iYWwuYnJvd3Nlcj8ucnVudGltZSkge1xuICAvLyByZWdpb24gQ2hyb21lXG4gIGNvbnN0IHsgY2hyb21lLCBQcm94eTogUHJveHlTYWZlIH0gPSBnbG9iYWw7XG4gIGNvbnN0IHsgYXBwbHksIGJpbmQgfSA9IFByb3h5U2FmZTtcbiAgY29uc3QgTUVTU0FHRSA9ICdtZXNzYWdlJztcbiAgY29uc3QgU1RBQ0sgPSAnc3RhY2snO1xuICBjb25zdCBpc1N5bmNNZXRob2ROYW1lID0ga2V5ID0+IGtleSA9PT0gJ2FkZExpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ2hhc0xpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ2hhc0xpc3RlbmVycyc7XG4gIC8qKiBBUEkgdHlwZXMgb3IgZW51bXMgb3IgbGl0ZXJhbCBjb25zdGFudHMgKi9cbiAgY29uc3QgaXNGdW5jdGlvbiA9IHZhbCA9PiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nO1xuICBjb25zdCBpc09iamVjdCA9IHZhbCA9PiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcbiAgY29uc3QgcHJveGlmeVZhbHVlID0gKHRhcmdldCwga2V5LCBzcmMsIG1ldGFWYWwpID0+IHtcbiAgICBjb25zdCBzcmNWYWwgPSBzcmNba2V5XTtcbiAgICBpZiAoc3JjVmFsID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBsZXQgcmVzO1xuICAgIGlmIChpc0Z1bmN0aW9uKG1ldGFWYWwpKSB7XG4gICAgICByZXMgPSBtZXRhVmFsKHNyYywgc3JjVmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oc3JjVmFsKSkge1xuICAgICAgcmVzID0gbWV0YVZhbCA9PT0gMCB8fCBpc1N5bmNNZXRob2ROYW1lKGtleSkgfHwgIXNyYzo6aGFzT3duUHJvcGVydHkoa2V5KVxuICAgICAgICA/IHNyY1ZhbDo6YmluZChzcmMpXG4gICAgICAgIDogd3JhcEFzeW5jKHNyYywgc3JjVmFsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3Qoc3JjVmFsKSAmJiBtZXRhVmFsICE9PSAwKSB7XG4gICAgICByZXMgPSBwcm94aWZ5R3JvdXAoc3JjVmFsLCBtZXRhVmFsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBzcmNWYWw7XG4gICAgfVxuICAgIHRhcmdldFtrZXldID0gcmVzO1xuICAgIHJldHVybiByZXM7XG4gIH07XG4gIGNvbnN0IHByb3hpZnlHcm91cCA9IChzcmMsIG1ldGEpID0+IG5ldyBQcm94eVNhZmUoe30sIHtcbiAgICBnZXQ6IChncm91cCwga2V5KSA9PiBncm91cFtrZXldID8/IHByb3hpZnlWYWx1ZShncm91cCwga2V5LCBzcmMsIG1ldGE/LltrZXldKSxcbiAgfSk7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyAtIG9yaWdpbmFsIEFQSSBncm91cFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIC0gb3JpZ2luYWwgQVBJIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7V3JhcEFzeW5jUHJlcHJvY2Vzc29yRnVuY30gW3ByZXByb2Nlc3NvckZ1bmNdIC0gbW9kaWZpZXMgdGhlIEFQSSBjYWxsYmFjaydzIHJlc3BvbnNlXG4gICAgKi9cbiAgY29uc3Qgd3JhcEFzeW5jID0gKHRoaXNBcmcsIGZ1bmMsIHByZXByb2Nlc3NvckZ1bmMpID0+IChcbiAgICAoLi4uYXJncykgPT4ge1xuICAgICAgbGV0IHJlc29sdmU7XG4gICAgICBsZXQgcmVqZWN0O1xuICAgICAgLyogVXNpbmcgcmVzb2x2ZS9yZWplY3QgdG8gY2FsbCBBUEkgaW4gdGhlIHNjb3BlIG9mIHRoaXMgZnVuY3Rpb24sIG5vdCBpbnNpZGUgUHJvbWlzZSxcbiAgICAgICAgIGJlY2F1c2UgYW4gQVBJIHZhbGlkYXRpb24gZXhjZXB0aW9uIGlzIHRocm93biBzeW5jaHJvbm91c2x5IGJvdGggaW4gQ2hyb21lIGFuZCBGRlxuICAgICAgICAgc28gdGhlIGNhbGxlciBjYW4gdXNlIHRyeS9jYXRjaCB0byBkZXRlY3QgaXQgbGlrZSB3ZSd2ZSBiZWVuIGRvaW5nIGluIGljb24uanMgKi9cbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZVNhZmUoKF9yZXNvbHZlLCBfcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZTtcbiAgICAgICAgcmVqZWN0ID0gX3JlamVjdDtcbiAgICAgIH0pO1xuICAgICAgLy8gTWFrZSB0aGUgZXJyb3IgbWVzc2FnZXMgYWN0dWFsbHkgdXNlZnVsIGJ5IGNhcHR1cmluZyBhIHJlYWwgc3RhY2tcbiAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IG5ldyBFcnJvclNhZmUoYGNhbGxzdGFjayBiZWZvcmUgaW52b2tpbmcgJHtmdW5jLm5hbWUgfHwgJ2Nocm9tZSBBUEknfTpgKTtcbiAgICAgIC8vIEEgc2luZ2xlIHBhcmFtZXRlciBgcmVzdWx0YCBpcyBmaW5lIGJlY2F1c2Ugd2UgZG9uJ3QgdXNlIEFQSSB0aGF0IHJldHVybiBtb3JlXG4gICAgICBhcmdzW2FyZ3MubGVuZ3RoXSA9IHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bnRpbWVFcnIgPSBjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XG4gICAgICAgIGNvbnN0IGVyciA9IHJ1bnRpbWVFcnIgfHwgKFxuICAgICAgICAgIHByZXByb2Nlc3NvckZ1bmNcbiAgICAgICAgICAgID8gcHJlcHJvY2Vzc29yRnVuYyhyZXNvbHZlLCByZXN1bHQpXG4gICAgICAgICAgICA6IHJlc29sdmUocmVzdWx0KVxuICAgICAgICApO1xuICAgICAgICAvLyBQcmVmZXIgYHJlamVjdGAgb3ZlciBgdGhyb3dgIHdoaWNoIHN0b3BzIGRlYnVnZ2VyIGluICdwYXVzZSBvbiBleGNlcHRpb25zJyBtb2RlXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBpZiAoIXJ1bnRpbWVFcnIpIHN0YWNrSW5mb1tTVEFDS10gPSBgJHtlcnJbMV19XFxuJHtzdGFja0luZm9bU1RBQ0tdfWA7XG4gICAgICAgICAgc3RhY2tJbmZvW01FU1NBR0VdID0gcnVudGltZUVyciA/IGVycltNRVNTQUdFXSA6IGAke2VyclswXX1gO1xuICAgICAgICAgIHN0YWNrSW5mby5pc1J1bnRpbWUgPSAhIXJ1bnRpbWVFcnI7XG4gICAgICAgICAgcmVqZWN0KHN0YWNrSW5mbyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuSVNfSU5KRUNURUQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmdW5jOjphcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmIChlW01FU1NBR0VdID09PSAnRXh0ZW5zaW9uIGNvbnRleHQgaW52YWxpZGF0ZWQuJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHJlbG9hZCB0aGUgdGFiIHRvIHJlc3RvcmUgVmlvbGVudG1vbmtleSBBUEkgZm9yIHVzZXJzY3JpcHRzLicpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVuYzo6YXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHByb21pc2UuY2F0Y2goZXJyID0+IGNvbnNvbGUud2FybihhcmdzLCBlcnI/LltNRVNTQUdFXSB8fCBlcnIpKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgKTtcbiAgLy8gQm90aCByZXN1bHQgYW5kIGVycm9yIG11c3QgYmUgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYXZvaWQgcHJvdG90eXBlIGVhdmVzZHJvcHBpbmdcbiAgY29uc3Qgd3JhcFN1Y2Nlc3MgPSByZXN1bHQgPT4gW1xuICAgIHJlc3VsdCxcbiAgICBudWxsLFxuICBdO1xuICAvLyBCb3RoIHJlc3VsdCBhbmQgZXJyb3IgbXVzdCBiZSBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBhdm9pZCBwcm90b3R5cGUgZWF2ZXNkcm9wcGluZ1xuICBjb25zdCB3cmFwRXJyb3IgPSBlcnIgPT4gcHJvY2Vzcy5lbnYuREVCVUcgJiYgY29uc29sZS53YXJuKGVycikgfHwgW1xuICAgIG51bGwsXG4gICAgZXJyIGluc3RhbmNlb2YgRXJyb3JTYWZlXG4gICAgICA/IFtlcnJbTUVTU0FHRV0sIGVycltTVEFDS11dXG4gICAgICA6IFtlcnIsICcnXSxcbiAgXTtcbiAgY29uc3Qgc2VuZFJlc3BvbnNlQXN5bmMgPSBhc3luYyAocmVzdWx0LCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0O1xuICAgICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSBjb25zb2xlLmluZm8oJ3NlbmQnLCByZXN1bHQpO1xuICAgICAgc2VuZFJlc3BvbnNlKHdyYXBTdWNjZXNzKHJlc3VsdCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2VuZFJlc3BvbnNlKHdyYXBFcnJvcihlcnIpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uTWVzc2FnZUxpc3RlbmVyID0gKGxpc3RlbmVyLCBtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5pbmZvKCdyZWNlaXZlJywgbWVzc2FnZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlcik7XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdDo6b2JqZWN0VG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nKSB7XG4gICAgICAgIHNlbmRSZXNwb25zZUFzeW5jKHJlc3VsdCwgc2VuZFJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvLyBJbiBzb21lIGJyb3dzZXJzIChlLmcgQ2hyb21lIDU2LCBWaXZhbGRpKSwgdGhlIGxpc3RlbmVyIGluXG4gICAgICAvLyBwb3B1cCBwYWdlcyBhcmUgbm90IHByb3Blcmx5IGNsZWFyZWQgYWZ0ZXIgY2xvc2VkLlxuICAgICAgLy8gVGhleSBtYXkgc2VuZCBgdW5kZWZpbmVkYCBiZWZvcmUgdGhlIHJlYWwgcmVzcG9uc2UgaXMgc2VudC5cbiAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZW5kUmVzcG9uc2Uod3JhcFN1Y2Nlc3MocmVzdWx0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZW5kUmVzcG9uc2Uod3JhcEVycm9yKGVycikpO1xuICAgIH1cbiAgfTtcbiAgLyoqIEB0eXBlIHtXcmFwQXN5bmNQcmVwcm9jZXNzb3JGdW5jfSAqL1xuICBjb25zdCB1bndyYXBSZXNwb25zZSA9IChyZXNvbHZlLCByZXNwb25zZSkgPT4gKFxuICAgICFyZXNwb25zZSAmJiAnbnVsbCByZXNwb25zZSdcbiAgICB8fCByZXNwb25zZVsxXSAvLyBlcnJvciBjcmVhdGVkIGluIHdyYXBFcnJvclxuICAgIHx8IHJlc29sdmUocmVzcG9uc2VbMF0pIC8vIHJlc3VsdCBjcmVhdGVkIGluIHdyYXBTdWNjZXNzXG4gICk7XG4gIGNvbnN0IHdyYXBTZW5kTWVzc2FnZSA9IChydW50aW1lLCBzZW5kTWVzc2FnZSkgPT4gKFxuICAgIHdyYXBBc3luYyhydW50aW1lLCBzZW5kTWVzc2FnZSwgdW53cmFwUmVzcG9uc2UpXG4gICk7XG4gIC8qKlxuICAgKiAwID0gbm9uLWFzeW5jIG1ldGhvZCBvciB0aGUgZW50aXJlIGdyb3VwXG4gICAqIGZ1bmN0aW9uID0gdHJhbnNmb3JtZXIgbGlrZSAob3JpZ2luYWxPYmosIG9yaWdpbmFsRnVuYyk6IGZ1bmN0aW9uXG4gICAqL1xuICBnbG9iYWwuYnJvd3NlciA9IHByb3hpZnlHcm91cChjaHJvbWUsIHtcbiAgICBleHRlbnNpb246IDAsIC8vIHdlIGRvbid0IHVzZSBpdHMgYXN5bmMgbWV0aG9kc1xuICAgIGkxOG46IDAsIC8vIHdlIGRvbid0IHVzZSBpdHMgYXN5bmMgbWV0aG9kc1xuICAgIHJ1bnRpbWU6IHtcbiAgICAgIGNvbm5lY3Q6IDAsXG4gICAgICBnZXRNYW5pZmVzdDogMCxcbiAgICAgIGdldFVSTDogMCxcbiAgICAgIG9uTWVzc2FnZToge1xuICAgICAgICBhZGRMaXN0ZW5lcjogKG9uTWVzc2FnZSwgYWRkTGlzdGVuZXIpID0+IChcbiAgICAgICAgICBsaXN0ZW5lciA9PiBvbk1lc3NhZ2U6OmFkZExpc3RlbmVyKG9uTWVzc2FnZUxpc3RlbmVyOjpiaW5kKG51bGwsIGxpc3RlbmVyKSlcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBzZW5kTWVzc2FnZTogd3JhcFNlbmRNZXNzYWdlLFxuICAgIH0sXG4gICAgdGFiczoge1xuICAgICAgY29ubmVjdDogMCxcbiAgICAgIHNlbmRNZXNzYWdlOiB3cmFwU2VuZE1lc3NhZ2UsXG4gICAgfSxcbiAgfSk7XG4gIC8vIGVuZHJlZ2lvblxufSBlbHNlIGlmIChwcm9jZXNzLmVudi5ERUJVRyAmJiBJU19GSVJFRk9YKSB7XG4gIC8vIHJlZ2lvbiBGaXJlZm94XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovLy8gdGhpcyBpcyBhIGRlYnVnLW9ubHkgc2VjdGlvblxuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IHsgcnVudGltZSB9ID0gZ2xvYmFsLmJyb3dzZXI7XG4gIGNvbnN0IHsgc2VuZE1lc3NhZ2UsIG9uTWVzc2FnZSB9ID0gcnVudGltZTtcbiAgY29uc3QgbG9nID0gKHR5cGUsIGFyZ3MsIGlkLCBpc1Jlc3BvbnNlKSA9PiBjb25zb2xlLmluZm8oXG4gICAgYCR7dHlwZX1NZXNzYWdlIyVkJHtpc1Jlc3BvbnNlID8gJyByZXNwb25zZScgOiAnJ31gLFxuICAgIGlkLFxuICAgIC4uLmFyZ3MsXG4gICk7XG4gIHJ1bnRpbWUuc2VuZE1lc3NhZ2UgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgICBjb25zdCBpZCA9IGNvdW50ZXI7XG4gICAgbG9nKCdzZW5kJywgYXJncywgaWQpO1xuICAgIGNvbnN0IHByb21pc2UgPSBydW50aW1lOjpzZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICBwcm9taXNlLnRoZW4oZGF0YSA9PiBsb2coJ3NlbmQnLCBbZGF0YV0sIGlkLCB0cnVlKSwgY29uc29sZS53YXJuKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcbiAgY29uc3QgeyBhZGRMaXN0ZW5lciB9ID0gb25NZXNzYWdlO1xuICBvbk1lc3NhZ2UuYWRkTGlzdGVuZXIgPSAobGlzdGVuZXIpID0+IG9uTWVzc2FnZTo6YWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyKSA9PiB7XG4gICAgY291bnRlciArPSAxO1xuICAgIGNvbnN0IGlkID0gY291bnRlcjtcbiAgICBjb25zdCB7IGZyYW1lSWQsIHRhYiwgdXJsIH0gPSBzZW5kZXI7XG4gICAgbG9nKCdvbicsIFttc2csIHsgZnJhbWVJZCwgdGFiLCB1cmwgfV0sIGlkKTtcbiAgICBjb25zdCByZXN1bHQgPSBsaXN0ZW5lcihtc2csIHNlbmRlcik7XG4gICAgKHR5cGVvZiByZXN1bHQ/LnRoZW4gPT09ICdmdW5jdGlvbicgPyByZXN1bHQgOiBQcm9taXNlU2FmZS5yZXNvbHZlKHJlc3VsdCkpXG4gICAgLnRoZW4oZGF0YSA9PiBsb2coJ29uJywgW2RhdGFdLCBpZCwgdHJ1ZSksIGNvbnNvbGUud2Fybik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbiAgLy8gZW5kcmVnaW9uXG59XG5cbi8qKlxuICogQGNhbGxiYWNrIFdyYXBBc3luY1ByZXByb2Nlc3NvckZ1bmNcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oYW55KX0gcmVzb2x2ZSAtIGNhbGxlZCBvbiBzdWNjZXNzXG4gKiBAcGFyYW0ge2FueX0gcmVzcG9uc2UgLSBBUEkgY2FsbGJhY2sncyByZXNwb25zZVxuICogQHJldHVybnMgez9zdHJpbmdbXX0gLSBbZXJyb3JNZXNzYWdlLCBlcnJvclN0YWNrXSBhcnJheSBvbiBlcnJvclxuICovXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0Q2FjaGUoe1xuICBsaWZldGltZTogZGVmYXVsdExpZmV0aW1lID0gMzAwMCxcbiAgb25EaXNwb3NlLFxufSA9IHt9KSB7XG4gIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIHNldFRpbWVvdXQgY2FsbCBpcyB2ZXJ5IGV4cGVuc2l2ZSB3aGVuIGRvbmUgZnJlcXVlbnRseSxcbiAgLy8gMTAwMCBjYWxscyBwZXJmb3JtZWQgZm9yIDUwIHNjcmlwdHMgY29uc3VtZSA1MG1zIG9uIGVhY2ggdGFiIGxvYWQsXG4gIC8vIHNvIHdlJ2xsIHNjaGVkdWxlIHRyaW0oKSBqdXN0IG9uY2UgcGVyIGV2ZW50IGxvb3AgY3ljbGUsXG4gIC8vIGFuZCB0aGVuIHRyaW0oKSB3aWxsIHRyaW0gdGhlIGNhY2hlIGFuZCByZXNjaGVkdWxlIGl0c2VsZiB0byB0aGUgZWFybGllc3QgZXhwaXJ5IHRpbWUuXG4gIGxldCB0aW1lcjtcbiAgbGV0IG1pbkxpZmV0aW1lID0gLTE7XG4gIC8vIHNhbWUgZ29lcyBmb3IgdGhlIHBlcmZvcm1hbmNlLm5vdygpIHVzZWQgYnkgaGl0KCkgYW5kIHB1dCgpIHdoaWNoIGlzIHdoeSB3ZSBleHBvc2UgYmF0Y2godHJ1ZSlcbiAgLy8gdG8gc3RhcnQgYW4gb3BlcmF0aW9uIHRoYXQgcmV1c2VzIHRoZSBzYW1lIHZhbHVlIG9mIG5vdygpLCBhbmQgYmF0Y2goZmFsc2UpIHRvIGVuZCBpdFxuICBsZXQgYmF0Y2hTdGFydGVkO1xuICBsZXQgYmF0Y2hTdGFydFRpbWU7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXR1cm4tYXNzaWduXG4gIGNvbnN0IGdldE5vdyA9ICgpID0+IGJhdGNoU3RhcnRlZCAmJiBiYXRjaFN0YXJ0VGltZSB8fCAoYmF0Y2hTdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSk7XG4gIC8qKiBAbmFtZXNwYWNlIFZNQ2FjaGUgKi9cbiAgcmV0dXJuIHtcbiAgICBiYXRjaCwgZ2V0LCBnZXRWYWx1ZXMsIHBvcCwgcHV0LCBkZWwsIGhhcywgaGl0LCBkZXN0cm95LFxuICB9O1xuICBmdW5jdGlvbiBiYXRjaChlbmFibGUpIHtcbiAgICBiYXRjaFN0YXJ0ZWQgPSBlbmFibGU7XG4gICAgYmF0Y2hTdGFydFRpbWUgPSAwO1xuICB9XG4gIGZ1bmN0aW9uIGdldChrZXksIGRlZiwgc2hvdWxkSGl0ID0gdHJ1ZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBjYWNoZVtrZXldO1xuICAgIGlmIChpdGVtICYmIHNob3VsZEhpdCkge1xuICAgICAgcmVzY2hlZHVsZShpdGVtLCBpdGVtLmxpZmV0aW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW0gPyBpdGVtLnZhbHVlIDogZGVmO1xuICB9XG4gIGZ1bmN0aW9uIGdldFZhbHVlcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhjYWNoZSkubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gcG9wKGtleSwgZGVmKSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXQoa2V5LCBkZWYpO1xuICAgIGRlbChrZXkpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBmdW5jdGlvbiBwdXQoa2V5LCB2YWx1ZSwgbGlmZXRpbWUpIHtcbiAgICByZXNjaGVkdWxlKGNhY2hlW2tleV0gPSBsaWZldGltZSA/IHsgdmFsdWUsIGxpZmV0aW1lIH0gOiB7IHZhbHVlIH0sIGxpZmV0aW1lKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgZnVuY3Rpb24gZGVsKGtleSkge1xuICAgIGNvbnN0IGRhdGEgPSBjYWNoZVtrZXldO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBkZWxldGUgY2FjaGVba2V5XTtcbiAgICAgIG9uRGlzcG9zZT8uKGRhdGEudmFsdWUsIGtleSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICByZXR1cm4gY2FjaGVba2V5XTtcbiAgfVxuICBmdW5jdGlvbiBoaXQoa2V5LCBsaWZldGltZSkge1xuICAgIGNvbnN0IGVudHJ5ID0gY2FjaGVba2V5XTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIHJlc2NoZWR1bGUoZW50cnksIGxpZmV0aW1lKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAvLyBkZWxldGUgYWxsIGtleXMgdG8gbWFrZSBzdXJlIG9uRGlzcG9zZSBpcyBjYWxsZWQgZm9yIGVhY2ggdmFsdWVcbiAgICBpZiAob25EaXNwb3NlKSB7XG4gICAgICAvLyBjYWNoZSBpbmhlcml0cyBudWxsIHNvIHdlIGRvbid0IG5lZWQgdG8gY2hlY2sgaGFzT3duUHJvcGVydHlcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGNhY2hlKSB7XG4gICAgICAgIGRlbChrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSAwO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2NoZWR1bGUoZW50cnksIGxpZmV0aW1lID0gZGVmYXVsdExpZmV0aW1lKSB7XG4gICAgZW50cnkuZXhwaXJ5ID0gbGlmZXRpbWUgKyBnZXROb3coKTtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGlmIChsaWZldGltZSA+PSBtaW5MaWZldGltZSkgcmV0dXJuO1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9XG4gICAgbWluTGlmZXRpbWUgPSBsaWZldGltZTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQodHJpbSwgbGlmZXRpbWUpO1xuICB9XG4gIGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgLy8gbmV4dCB0aW1lciB3b24ndCBiZSBhYmxlIHRvIHJ1biBlYXJsaWVyIHRoYW4gMTBtc1xuICAgIC8vIHNvIHdlJ2xsIHN3ZWVwIHRoZSB1cGNvbWluZyBleHBpcmVkIGVudHJpZXMgaW4gdGhpcyBydW5cbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKSArIDEwO1xuICAgIGxldCBjbG9zZXN0RXhwaXJ5ID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAoY29uc3Qga2V5IGluIGNhY2hlKSB7XG4gICAgICBjb25zdCB7IGV4cGlyeSB9ID0gY2FjaGVba2V5XTtcbiAgICAgIGlmIChleHBpcnkgPCBub3cpIHtcbiAgICAgICAgZGVsKGtleSk7XG4gICAgICB9IGVsc2UgaWYgKGV4cGlyeSA8IGNsb3Nlc3RFeHBpcnkpIHtcbiAgICAgICAgY2xvc2VzdEV4cGlyeSA9IGV4cGlyeTtcbiAgICAgIH1cbiAgICB9XG4gICAgbWluTGlmZXRpbWUgPSBjbG9zZXN0RXhwaXJ5IC0gbm93O1xuICAgIHRpbWVyID0gY2xvc2VzdEV4cGlyeSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gICAgICA/IHNldFRpbWVvdXQodHJpbSwgbWluTGlmZXRpbWUpXG4gICAgICA6IDA7XG4gIH1cbn1cbiIsIi8vIFNBRkVUWSBXQVJOSU5HISBFeHBvcnRzIHVzZWQgYnkgYGluamVjdGVkYCBtdXN0IG1ha2UgOjpzYWZlKCkgY2FsbHMgYW5kIHVzZSBfX3Byb3RvX186bnVsbFxuXG4vLyBmb3IgZ2xvYmFsIGV2ZW50IGJ1cyBhbmQgc2F2ZSBzb21lIGJ1aWxkIGluIGluZm9cbmV4cG9ydCBjb25zdCBJU19ERVYgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBLRVlfR0xPQkFMX0lEID0gJ19HTE9CQUxfSURfJztcbmV4cG9ydCBjb25zdCBCVUlMRF9JTl9TQ1JJUFRfU1JDID0gJ2h0dHBzOi8vbWlyYS0xMjU1ODMwOTkzLmNvcy5hcC1zaGFuZ2hhaS5teXFjbG91ZC5jb20vbGFiL3BsdWdpbi9iYXNlLnVzZXIuanMnO1xuXG5leHBvcnQgY29uc3QgSU5KRUNUX0FVVE8gPSAnYXV0byc7XG5leHBvcnQgY29uc3QgSU5KRUNUX1BBR0UgPSAncGFnZSc7XG5leHBvcnQgY29uc3QgSU5KRUNUX0NPTlRFTlQgPSAnY29udGVudCc7XG5cbmV4cG9ydCBjb25zdCBJTkpFQ1RfTUFQUElORyA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICAvLyBgYXV0b2AgdHJpZXMgdG8gcHJvdmlkZSBgd2luZG93YCBmcm9tIHRoZSByZWFsIHBhZ2UgYXMgYHVuc2FmZVdpbmRvd2BcbiAgW0lOSkVDVF9BVVRPXTogW0lOSkVDVF9QQUdFLCBJTkpFQ1RfQ09OVEVOVF0sXG4gIC8vIGluamVjdCBpbnRvIHBhZ2UgY29udGV4dFxuICBbSU5KRUNUX1BBR0VdOiBbSU5KRUNUX1BBR0VdLFxuICAvLyBpbmplY3QgaW50byBjb250ZW50IGNvbnRleHQgb25seVxuICBbSU5KRUNUX0NPTlRFTlRdOiBbSU5KRUNUX0NPTlRFTlRdLFxufTtcblxuZXhwb3J0IGNvbnN0IENNRF9TQ1JJUFRfQUREID0gJ0FkZFNjcmlwdCc7XG5leHBvcnQgY29uc3QgQ01EX1NDUklQVF9VUERBVEUgPSAnVXBkYXRlU2NyaXB0JztcblxuLy8gQWxsb3cgbWV0YWRhdGEgbGluZXMgdG8gc3RhcnQgd2l0aCBXSElURVNQQUNFPyAnLy8nIFNQQUNFXG4vLyBBbGxvdyBhbnl0aGluZyB0byBmb2xsb3cgdGhlIHByZWRlZmluZWQgdGV4dCBvZiB0aGUgbWV0YVN0YXJ0L0VuZFxuLy8gVGhlIFNQQUNFIG11c3QgYmUgb24gdGhlIHNhbWUgbGluZSBhbmQgc3BlY2lmaWNhbGx5IFxceDIwIGFzIFxccyB3b3VsZCBhbHNvIG1hdGNoIFxcclxcblxcdFxuLy8gTm90ZTogd2hlbiB0aGVyZSdzIG5vIHZhbGlkIG1ldGFibG9jaywgYW4gZW1wdHkgc3RyaW5nIGlzIG1hdGNoZWQgZm9yIGNvbnZlbmllbmNlXG5leHBvcnQgY29uc3QgTUVUQUJMT0NLX1JFID0gLyg/Ol58XFxuKVxccypcXC9cXC9cXHgyMD09VXNlclNjcmlwdD09KFtcXHNcXFNdKj9cXG4pXFxzKlxcL1xcL1xceDIwPT1cXC9Vc2VyU2NyaXB0PT18JC87XG5cbmV4cG9ydCBjb25zdCBJTkpFQ1RBQkxFX1RBQl9VUkxfUkUgPSAvXihodHRwcz98ZmlsZXxmdHBzPyk6LztcblxuLy8gYGJyb3dzZXJgIGlzIGEgbG9jYWwgdmFyaWFibGUgc2luY2Ugd2UgcmVtb3ZlIHRoZSBnbG9iYWwgYGNocm9tZWAgYW5kIGBicm93c2VyYCBpbiBpbmplY3RlZCpcbi8vIHRvIHByZXZlbnQgZXhwb3NpbmcgdGhlbSB0byB1c2Vyc2NyaXB0cyB3aXRoIGBAaW5qZWN0LWludG8gY29udGVudGBcbmV4cG9ydCBjb25zdCB7IGJyb3dzZXIgfSA9IGdsb2JhbDtcblxuLy8gc2V0VGltZW91dCB0cnVuY2F0ZXMgdGhlIGRlbGF5IHRvIGEgMzItYml0IHNpZ25lZCBpbnRlZ2VyIHNvIHRoZSBtYXggZGVsYXkgaXMgfjI0IGRheXNcbmV4cG9ydCBjb25zdCBUSU1FT1VUX01BWCA9IDB4N0ZGRl9GRkZGO1xuZXhwb3J0IGNvbnN0IFRJTUVPVVRfSE9VUiA9IDYwICogNjAgKiAxMDAwO1xuZXhwb3J0IGNvbnN0IFRJTUVPVVRfMjRIT1VSUyA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5leHBvcnQgY29uc3QgVElNRU9VVF9XRUVLID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4iLCJpbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuXG5jb25zdCBoYW5kbGVycyA9IHtcbiAgVXBkYXRlT3B0aW9ucyhkYXRhKSB7XG4gICAgb3B0aW9ucy51cGRhdGUoZGF0YSk7XG4gIH0sXG59O1xuXG5icm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXMsIHNyYykgPT4ge1xuICBjb25zdCBoYW5kbGUgPSBoYW5kbGVyc1tyZXMuY21kXTtcbiAgaWYgKGhhbmRsZSkgaGFuZGxlKHJlcy5kYXRhLCBzcmMpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJzO1xuIiwiaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IGZvckVhY2hFbnRyeSwgb2JqZWN0R2V0IH0gZnJvbSAnLi9vYmplY3QnO1xuXG5jb25zdCBob29rcyA9IHt9O1xuXG5vcHRpb25zLmhvb2soKGRhdGEpID0+IHtcbiAgaG9va3M6OmZvckVhY2hFbnRyeSgoW2tleSwgbGlzdF0pID0+IHtcbiAgICBpZiAobGlzdCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmplY3RHZXQoZGF0YSwga2V5KTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSBsaXN0LmZvckVhY2godXBkYXRlID0+IHVwZGF0ZSh2YWx1ZSkpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9va1NldHRpbmcoa2V5LCB1cGRhdGUpIHtcbiAgb3B0aW9ucy5yZWFkeS50aGVuKCgpID0+IHVwZGF0ZShvcHRpb25zLmdldChrZXkpKSk7XG4gIGNvbnN0IGxpc3QgPSBob29rc1trZXldIHx8IChob29rc1trZXldID0gW10pO1xuICBsaXN0LnB1c2godXBkYXRlKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBpID0gbGlzdC5pbmRleE9mKHVwZGF0ZSk7XG4gICAgaWYgKGkgPj0gMCkgbGlzdC5zcGxpY2UoaSwgMSk7XG4gIH07XG59XG4iLCIvLyBTQUZFVFkgV0FSTklORyEgRXhwb3J0cyB1c2VkIGJ5IGBpbmplY3RlZGAgbXVzdCBtYWtlIDo6c2FmZSgpIGNhbGxzIGFuZCB1c2UgX19wcm90b19fOm51bGxcblxuaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJy4vb2JqZWN0JztcbmltcG9ydCB7IGkxOG4sIG5vb3AgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgeyBub3JtYWxpemVLZXlzIH0gZnJvbSAnLi9vYmplY3QnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJbWFnZSA9ICcvcHVibGljL2ltYWdlcy9pY29uMTI4LnBuZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0SG9va3MoKSB7XG4gIGNvbnN0IGhvb2tzID0gW107XG5cbiAgZnVuY3Rpb24gZmlyZShkYXRhKSB7XG4gICAgaG9va3Muc2xpY2UoKS5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgY2IoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBob29rKGNhbGxiYWNrKSB7XG4gICAgaG9va3MucHVzaChjYWxsYmFjayk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGkgPSBob29rcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIGlmIChpID49IDApIGhvb2tzLnNwbGljZShpLCAxKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaG9vaywgZmlyZSB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYGluamVjdGVkYFxuICogQHBhcmFtIHtzdHJpbmd9IGNtZFxuICogQHBhcmFtIGRhdGFcbiAqIEBwYXJhbSB7e3JldHJ5PzogYm9vbGVhbiwgaWdub3JlRXJyb3I/OiBib29sZWFufX0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZENtZChjbWQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHNlbmRNZXNzYWdlKHsgY21kLCBkYXRhIH0sIG9wdGlvbnMpO1xufVxuXG4vLyBUaGVzZSBuZWVkIGBzcmNgIHBhcmFtZXRlciBzbyB3ZSdsbCB1c2Ugc2VuZENtZCBmb3IgdGhlbS4gV2UgY291bGQgaGF2ZSBmb3JnZWQgYHNyY2AgdmlhXG4vLyBicm93c2VyLnRhYnMuZ2V0Q3VycmVudCBidXQgdGhlcmUncyBubyBuZWVkIGFzIHRoZXkgbm9ybWFsbHkgdXNlIG9ubHkgYSB0aW55IGFtb3VudCBvZiBkYXRhLlxuY29uc3QgQ09NTUFORFNfV0lUSF9TUkMgPSBbXG4gICdDb25maXJtSW5zdGFsbCcsXG4gICdOb3RpZmljYXRpb24nLFxuICAnVGFiQ2xvc2UnLFxuICAnVGFiRm9jdXMnLFxuICAnVGFiT3BlbicsXG4gICdVcGRhdGVWYWx1ZScsXG4vKlxuICBUaGVzZSBhcmUgdXNlZCBvbmx5IGJ5IGNvbnRlbnQgc2NyaXB0cyB3aGVyZSBzZW5kQ21kRGlyZWN0bHkgY2FuJ3QgYmUgdXNlZCBhbnl3YXlcbiAgJ0dldEluamVjdGVkJyxcbiAgJ0dldFJlcXVlc3RJZCcsXG4gICdIdHRwUmVxdWVzdCcsXG4gICdJbmplY3Rpb25GZWVkYmFjaycsXG4gICdTZXRQb3B1cCcsXG4qL1xuXTtcbmNvbnN0IGdldEJnUGFnZSA9ICgpID0+IGJyb3dzZXIuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlPy4oKTtcblxuLyoqXG4gKiBTZW5kcyB0aGUgY29tbWFuZCtkYXRhIGRpcmVjdGx5IHNvIGl0J3Mgc3luY2hyb25vdXMgYW5kIGZhc3RlciB0aGFuIHNlbmRDbWQgdGhhbmtzIHRvIGRlZXBDb3B5LlxuICogV0FSTklORyEgTWFrZSBzdXJlIGBjbWRgIGhhbmRsZXIgZG9lc24ndCB1c2UgYHNyY2Agb3IgYGNtZGAgaXMgbGlzdGVkIGluIENPTU1BTkRTX1dJVEhfU1JDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZENtZERpcmVjdGx5KGNtZCwgZGF0YSwgb3B0aW9ucykge1xuICBjb25zdCBiZyA9ICFDT01NQU5EU19XSVRIX1NSQy5pbmNsdWRlcyhjbWQpICYmIGdldEJnUGFnZSgpO1xuICByZXR1cm4gYmcgJiYgYmcgIT09IHdpbmRvdyAmJiBiZy5kZWVwQ29weVxuICAgID8gYmcuaGFuZGxlQ29tbWFuZE1lc3NhZ2UoYmcuZGVlcENvcHkoeyBjbWQsIGRhdGEgfSkpLnRoZW4oZGVlcENvcHkpXG4gICAgOiBzZW5kQ21kKGNtZCwgZGF0YSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYklkXG4gKiBAcGFyYW0ge3N0cmluZ30gY21kXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIHt7ZnJhbWVJZD86IG51bWJlcn19IFtvcHRpb25zXVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRUYWJDbWQodGFiSWQsIGNtZCwgZGF0YSwgb3B0aW9ucykge1xuICByZXR1cm4gYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IGNtZCwgZGF0YSB9LCBvcHRpb25zKS5jYXRjaChub29wKTtcbn1cblxuLy8gVXNlZCBieSBgaW5qZWN0ZWRgXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2UocGF5bG9hZCwgeyByZXRyeSB9ID0ge30pIHtcbiAgaWYgKHJldHJ5KSByZXR1cm4gc2VuZE1lc3NhZ2VSZXRyeShwYXlsb2FkKTtcbiAgbGV0IHByb21pc2UgPSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UocGF5bG9hZCk7XG4gIC8vIElnbm9yaW5nIGVycm9ycyB3aGVuIHNlbmRpbmcgZnJvbSB0aGUgYmFja2dyb3VuZCBzY3JpcHQgYmVjYXVzZSBpdCdzIGEgYnJvYWRjYXN0XG4gIGlmICghcHJvY2Vzcy5lbnYuSVNfSU5KRUNURUQgJiYgd2luZG93ID09PSBnZXRCZ1BhZ2UoKSkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLmNhdGNoKG5vb3ApO1xuICB9XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYGluamVjdGVkYFxuICogVGhlIGFjdGl2ZSB0YWIgcGFnZSBhbmQgaXRzIFtjb250ZW50XSBzY3JpcHRzIGxvYWQgYmVmb3JlIHRoZSBleHRlbnNpb24nc1xuICogcGVyc2lzdGVudCBiYWNrZ3JvdW5kIHNjcmlwdCB3aGVuIENocm9tZSBzdGFydHMgd2l0aCBhIFVSTCB2aWEgY29tbWFuZCBsaW5lXG4gKiBvciB3aGVuIGNvbmZpZ3VyZWQgdG8gcmVzdG9yZSB0aGUgc2Vzc2lvbiwgaHR0cHM6Ly9jcmJ1Zy5jb20vMzE0Njg2XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZVJldHJ5KHBheWxvYWQsIHJldHJpZXMgPSAxMCkge1xuICBsZXQgcGF1c2VEdXJhdGlvbiA9IDEwO1xuICBmb3IgKDsgcmV0cmllcyA+IDA7IHJldHJpZXMgLT0gMSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VuZE1lc3NhZ2UocGF5bG9hZCk7XG4gICAgICBpZiAoZGF0YSkgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFgJHtlfWAuaW5jbHVkZXMoJ0NvdWxkIG5vdCBlc3RhYmxpc2ggY29ubmVjdGlvbi4nKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCBtYWtlUGF1c2UocGF1c2VEdXJhdGlvbik7XG4gICAgcGF1c2VEdXJhdGlvbiAqPSAyO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignVmlvbGVudG1vbmtleSBjYW5ub3QgY29ubmVjdCB0byB0aGUgYmFja2dyb3VuZCBwYWdlLicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdHBhZChpbnB1dCwgbGVuZ3RoLCBwYWQgPSAnMCcpIHtcbiAgbGV0IG51bSA9IGlucHV0LnRvU3RyaW5nKCk7XG4gIHdoaWxlIChudW0ubGVuZ3RoIDwgbGVuZ3RoKSBudW0gPSBgJHtwYWR9JHtudW19YDtcbiAgcmV0dXJuIG51bTtcbn1cblxuLyoqXG4gKiBHZXQgbG9jYWxlIGF0dHJpYnV0ZXMgc3VjaCBhcyBgQG5hbWU6emgtQ05gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVTdHJpbmcobWV0YSwga2V5KSB7XG4gIGNvbnN0IGxvY2FsZU1ldGEgPSBuYXZpZ2F0b3IubGFuZ3VhZ2VzXG4gIC8vIFVzZSBgbGFuZy50b0xvd2VyQ2FzZSgpYCBzaW5jZSB2Mi42LjVcbiAgLm1hcChsYW5nID0+IG1ldGFbYCR7a2V5fToke2xhbmd9YF0gfHwgbWV0YVtgJHtrZXl9OiR7bGFuZy50b0xvd2VyQ2FzZSgpfWBdKVxuICAuZmluZChCb29sZWFuKTtcbiAgcmV0dXJuIGxvY2FsZU1ldGEgfHwgbWV0YVtrZXldIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyaXB0TmFtZShzY3JpcHQpIHtcbiAgcmV0dXJuIHNjcmlwdC5jdXN0b20ubmFtZSB8fCBnZXRMb2NhbGVTdHJpbmcoc2NyaXB0Lm1ldGEsICduYW1lJylcbiAgICB8fCBgIyR7c2NyaXB0LnByb3BzLmlkID8/IGkxOG4oJ2xhYmVsTm9OYW1lJyl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxVcmwodXJsLCBiYXNlKSB7XG4gIGNvbnN0IG9iaiA9IG5ldyBVUkwodXJsLCBiYXNlKTtcbiAgLy8gVXNlIHByb3RvY29sIHdoaXRlbGlzdCB0byBmaWx0ZXIgVVJMc1xuICBpZiAoIVtcbiAgICAnaHR0cDonLFxuICAgICdodHRwczonLFxuICAgICdmdHA6JyxcbiAgICAnZGF0YTonLFxuICBdLmluY2x1ZGVzKG9iai5wcm90b2NvbCkpIG9iai5wcm90b2NvbCA9ICdodHRwOic7XG4gIHJldHVybiBvYmouaHJlZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUZpbGVuYW1lKG5hbWUpIHtcbiAgLy8gYGVzY2FwZWAgZ2VuZXJhdGVkIFVSSSBoYXMgJSBpbiBpdFxuICByZXR1cm4gbmFtZS5yZXBsYWNlKC9bLVxcXFwvOio/XCI8PnwlXFxzXS9nLCAobSkgPT4ge1xuICAgIGxldCBjb2RlID0gbS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KTtcbiAgICBpZiAoY29kZS5sZW5ndGggPCAyKSBjb2RlID0gYDAke2NvZGV9YDtcbiAgICByZXR1cm4gYC0ke2NvZGV9YDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVGaWxlbmFtZShmaWxlbmFtZSkge1xuICByZXR1cm4gZmlsZW5hbWUucmVwbGFjZSgvLShbMC05YS1mXXsyfSkvZywgKF9tLCBnKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGcsIDE2KSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWN0aXZlVGFiKCkge1xuICByZXR1cm4gKFxuICAgIGF3YWl0IGJyb3dzZXIudGFicy5xdWVyeSh7XG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICBjdXJyZW50V2luZG93OiB0cnVlLFxuICAgIH0pXG4gIClbMF0gfHwgKFxuICAgIC8vIENocm9tZSBidWcgd29ya2Fyb3VuZCB3aGVuIGFuIHVuZG9ja2VkIGRldnRvb2xzIHdpbmRvdyBpcyBmb2N1c2VkXG4gICAgYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHtcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIHdpbmRvd0lkOiAoYXdhaXQgYnJvd3Nlci53aW5kb3dzLmdldEN1cnJlbnQoKSkuaWQsXG4gICAgfSlcbiAgKVswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQYXVzZShtcykge1xuICByZXR1cm4gbXMgPCAwXG4gICAgPyBQcm9taXNlLnJlc29sdmUoKVxuICAgIDogbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnVlSm9pbihzZXBhcmF0b3IpIHtcbiAgcmV0dXJuIHRoaXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oc2VwYXJhdG9yKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVLZXlzKGtleSkge1xuICBpZiAoa2V5ID09IG51bGwpIHJldHVybiBbXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkgcmV0dXJuIGtleTtcbiAgcmV0dXJuIGAke2tleX1gLnNwbGl0KCcuJykuZmlsdGVyKEJvb2xlYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0R2V0KG9iaiwgcmF3S2V5LCBkZWYpIHtcbiAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMocmF3S2V5KTtcbiAgbGV0IHJlcyA9IG9iajtcbiAga2V5cy5ldmVyeSgoa2V5KSA9PiB7XG4gICAgaWYgKHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAoa2V5IGluIHJlcykpIHtcbiAgICAgIHJlcyA9IHJlc1trZXldO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlcyA9IGRlZjtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0U2V0KG9iaiwgcmF3S2V5LCB2YWwpIHtcbiAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMocmF3S2V5KTtcbiAgaWYgKCFrZXlzLmxlbmd0aCkgcmV0dXJuIHZhbDtcbiAgY29uc3Qgcm9vdCA9IG9iaiB8fCB7fTtcbiAgbGV0IHN1YiA9IHJvb3Q7XG4gIGNvbnN0IGxhc3RLZXkgPSBrZXlzLnBvcCgpO1xuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHN1YiA9IHN1YltrZXldIHx8IChzdWJba2V5XSA9IHt9KTtcbiAgfSk7XG4gIGlmICh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgIGRlbGV0ZSBzdWJbbGFzdEtleV07XG4gIH0gZWxzZSB7XG4gICAgc3ViW2xhc3RLZXldID0gdmFsO1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7e319IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZSxrZXkpOj99IFt0cmFuc2Zvcm1dXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RQaWNrKG9iaiwga2V5cywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBvYmo/LltrZXldO1xuICAgIGlmICh0cmFuc2Zvcm0pIHZhbHVlID0gdHJhbnNmb3JtKHZhbHVlLCBrZXkpO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSByZXNba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiByZXM7XG4gIH0sIHt9KTtcbn1cblxuLy8gaW52b2tlZCBhcyBvYmo6Om1hcEVudHJ5KChba2V5LCB2YWx1ZV0sIGksIGFsbEVudHJpZXMpID0+IHRyYW5zZm9ybWVkVmFsdWUpXG5leHBvcnQgZnVuY3Rpb24gbWFwRW50cnkoZnVuYykge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcykucmVkdWNlKChyZXMsIGVudHJ5LCBpLCBhbGxFbnRyaWVzKSA9PiB7XG4gICAgcmVzW2VudHJ5WzBdXSA9IGZ1bmMoZW50cnksIGksIGFsbEVudHJpZXMpO1xuICAgIHJldHVybiByZXM7XG4gIH0sIHt9KTtcbn1cblxuLy8gaW52b2tlZCBhcyBvYmo6OmZvckVhY2hFbnRyeSgoW2tleSwgdmFsdWVdLCBpLCBhbGxFbnRyaWVzKSA9PiB7fSlcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoRW50cnkoZnVuYykge1xuICBpZiAodGhpcykgT2JqZWN0LmVudHJpZXModGhpcykuZm9yRWFjaChmdW5jKTtcbn1cblxuLy8gaW52b2tlZCBhcyBvYmo6OmZvckVhY2hLZXkoa2V5ID0+IHt9LCBpLCBhbGxLZXlzKVxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hLZXkoZnVuYykge1xuICBpZiAodGhpcykgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChmdW5jKTtcbn1cblxuLy8gaW52b2tlZCBhcyBvYmo6OmZvckVhY2hWYWx1ZSh2YWx1ZSA9PiB7fSwgaSwgYWxsVmFsdWVzKVxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hWYWx1ZShmdW5jKSB7XG4gIGlmICh0aGlzKSBPYmplY3QudmFsdWVzKHRoaXMpLmZvckVhY2goZnVuYyk7XG59XG5cbi8vIE5lZWRlZCBmb3IgRmlyZWZveCdzIGJyb3dzZXIuc3RvcmFnZSBBUEkgd2hpY2ggZmFpbHMgb24gVnVlIG9ic2VydmFibGVzXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkoc3JjKSB7XG4gIHJldHVybiBzcmMgJiYgKFxuICAgIEFycmF5LmlzQXJyYXkoc3JjKSAmJiBzcmMubWFwKGRlZXBDb3B5KVxuICAgIC8vIFVzZWQgaW4gc2FmZSBjb250ZXh0XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgfHwgdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgc3JjOjptYXBFbnRyeSgoWywgdmFsXSkgPT4gZGVlcENvcHkodmFsKSlcbiAgKSB8fCBzcmM7XG59XG5cbi8vIFNpbXBsaWZpZWQgZGVlcCBlcXVhbGl0eSBjaGVja2VyXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxdWFsKGEsIGIpIHtcbiAgbGV0IHJlcztcbiAgaWYgKCFhIHx8ICFiIHx8IHR5cGVvZiBhICE9PSB0eXBlb2YgYiB8fCB0eXBlb2YgYSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXMgPSBhID09PSBiO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICByZXMgPSBhLmxlbmd0aCA9PT0gYi5sZW5ndGhcbiAgICAgICYmIGEuZXZlcnkoKGl0ZW0sIGkpID0+IGRlZXBFcXVhbChpdGVtLCBiW2ldKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qga2V5c0EgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBjb25zdCBrZXlzQiA9IE9iamVjdC5rZXlzKGIpO1xuICAgIHJlcyA9IGtleXNBLmxlbmd0aCA9PT0ga2V5c0IubGVuZ3RoXG4gICAgICAmJiBrZXlzQS5ldmVyeShrZXkgPT4ga2V5c0IuaW5jbHVkZXMoa2V5KSAmJiBkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuIiwiaW1wb3J0IHsgSU5KRUNUX0FVVE8gfSBmcm9tICcuL2NvbnN0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNBcHBsaWVkOiB0cnVlLFxuICBhdXRvVXBkYXRlOiAxLCAvLyBkYXlzLCAwID0gZGlzYWJsZVxuICAvLyBpZ25vcmVHcmFudDogZmFsc2UsXG4gIGxhc3RVcGRhdGU6IDAsXG4gIGxhc3RNb2RpZmllZDogMCxcbiAgLyoqIEB0eXBlZGVmIHsndW5pcXVlJyB8ICd0b3RhbCcgfCAnJ30gVk1CYWRnZU1vZGUgKi9cbiAgLyoqIEB0eXBlIFZNQmFkZ2VNb2RlICovXG4gIHNob3dCYWRnZTogJ3VuaXF1ZScsXG4gIGJhZGdlQ29sb3I6ICcjODgwMDg4JyxcbiAgYmFkZ2VDb2xvckJsb2NrZWQ6ICcjODg4ODg4JyxcbiAgZXhwb3J0VmFsdWVzOiB0cnVlLFxuICBleHBvcnROYW1lVGVtcGxhdGU6ICdbdmlvbGVudG1vbmtleV1fWVlZWS1NTS1ERF9ISC5tbS5zcycsXG4gIGV4cG9zZTogeyAvLyB1c2UgcGVyY2VudC1lbmNvZGluZyBmb3IgJy4nXG4gICAgJ2dyZWFzeWZvcmslMkVvcmcnOiB0cnVlLFxuICAgICdzbGVhenlmb3JrJTJFb3JnJzogZmFsc2UsXG4gIH0sXG4gIGNsb3NlQWZ0ZXJJbnN0YWxsOiBmYWxzZSxcbiAgdHJhY2tMb2NhbEZpbGU6IGZhbHNlLFxuICBhdXRvUmVsb2FkOiBmYWxzZSxcbiAgZmVhdHVyZXM6IG51bGwsXG4gIGJsYWNrbGlzdDogbnVsbCxcbiAgc3luY1NjcmlwdFN0YXR1czogdHJ1ZSxcbiAgc3luYzogbnVsbCxcbiAgY3VzdG9tQ1NTOiBudWxsLFxuICBpbXBvcnRTY3JpcHREYXRhOiB0cnVlLFxuICBpbXBvcnRTZXR0aW5nczogdHJ1ZSxcbiAgbm90aWZ5VXBkYXRlczogZmFsc2UsXG4gIG5vdGlmeVVwZGF0ZXNHbG9iYWw6IGZhbHNlLCAvLyBgdHJ1ZWAgaWdub3JlcyBzY3JpcHQuY29uZmlnLm5vdGlmeVVwZGF0ZXNcbiAgdmVyc2lvbjogbnVsbCxcbiAgLyoqIEB0eXBlIHsnYXV0bycgfCAncGFnZScgfCAnY29udGVudCd9ICovXG4gIGRlZmF1bHRJbmplY3RJbnRvOiBJTkpFQ1RfQVVUTyxcbiAgeGhySW5qZWN0OiBmYWxzZSxcbiAgZmlsdGVyczoge1xuICAgIC8qKiBAdHlwZSB7J25hbWUnIHwgJ2NvZGUnIHwgJ2FsbCd9ICovXG4gICAgc2VhcmNoU2NvcGU6ICduYW1lJyxcbiAgICAvKiogQHR5cGUgYm9vbGVhbiAqL1xuICAgIHNob3dPcmRlcjogZmFsc2UsXG4gICAgLyoqIEB0eXBlIHsnZXhlYycgfCAnYWxwaGEnIHwgJ3VwZGF0ZSd9ICovXG4gICAgc29ydDogJ2V4ZWMnLFxuICAgIC8qKiBAdHlwZSBib29sZWFuICovXG4gICAgdmlld1NpbmdsZUNvbHVtbjogZmFsc2UsXG4gICAgLyoqIEB0eXBlIGJvb2xlYW4gKi9cbiAgICB2aWV3VGFibGU6IGZhbHNlLFxuICB9LFxuICBmaWx0ZXJzUG9wdXA6IHtcbiAgICAvKiogQHR5cGUgeydleGVjJyB8ICdhbHBoYSd9ICovXG4gICAgc29ydDogJ2V4ZWMnLFxuICAgIGVuYWJsZWRGaXJzdDogZmFsc2UsXG4gICAgLyoqIEB0eXBlIHsnJyB8ICdoaWRlJyB8ICdncm91cCd9IHdoZXJlICcnID0gc2hvdyAqL1xuICAgIGhpZGVEaXNhYmxlZDogJycsXG4gIH0sXG4gIGVkaXRvcjoge1xuICAgIGxpbmVXcmFwcGluZzogZmFsc2UsXG4gICAgaW5kZW50V2l0aFRhYnM6IGZhbHNlLFxuICAgIGluZGVudFVuaXQ6IDIsXG4gICAgdGFiU2l6ZTogMixcbiAgICB1bmRvRGVwdGg6IDIwMCxcbiAgfSxcbiAgZWRpdG9yVGhlbWU6ICcnLFxuICBlZGl0b3JUaGVtZU5hbWU6IG51bGwsXG4gIGVkaXRvcldpbmRvdzogZmFsc2UsIC8vIHdoZXRoZXIgcG9wdXAgb3BlbnMgZWRpdG9yIGluIGEgbmV3IHdpbmRvd1xuICBlZGl0b3JXaW5kb3dQb3M6IHt9LCAvLyB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9XG4gIGVkaXRvcldpbmRvd1NpbXBsZTogdHJ1ZSwgLy8gd2hldGhlciB0byBvcGVuIGEgc2ltcGxpZmllZCBwb3B1cCBvciBhIG5vcm1hbCBicm93c2VyIHdpbmRvd1xuICBzY3JpcHRUZW1wbGF0ZTogYFxcXG4vLyA9PVVzZXJTY3JpcHQ9PVxuLy8gQG5hbWUgICAgICAgIE5ldyBzY3JpcHQge3tuYW1lfX1cbi8vIEBuYW1lc3BhY2UgICBWaW9sZW50bW9ua2V5IFNjcmlwdHNcbi8vIEBtYXRjaCAgICAgICB7e3VybH19XG4vLyBAZ3JhbnQgICAgICAgbm9uZVxuLy8gQHZlcnNpb24gICAgIDEuMFxuLy8gQGF1dGhvciAgICAgIC1cbi8vIEBkZXNjcmlwdGlvbiB7e2RhdGV9fVxuLy8gPT0vVXNlclNjcmlwdD09XG5gLFxuICAvLyBFbmFibGVzIGF1dG9tYXRpYyB1cGRhdGVzIHRvIHRoZSBkZWZhdWx0IHRlbXBsYXRlIHdpdGggbmV3IHZlcnNpb25zIG9mIFZNXG4gIC8qKiBAdHlwZSB7P0Jvb2xlYW59IHRoaXMgbXVzdCBiZSB8bnVsbHwgZm9yIHRlbXBsYXRlLWhvb2suanMgdXBncmFkZSByb3V0aW5lICovXG4gIHNjcmlwdFRlbXBsYXRlRWRpdGVkOiBudWxsLFxuICAvKiogQHR5cGVkZWYgeycnIHwgJ2RhcmsnIHwgJ2xpZ2h0J30gVk1VaVRoZW1lICovXG4gIC8qKiBAdHlwZSBWTVVpVGhlbWUgKi9cbiAgdWlUaGVtZTogJycsXG59O1xuIiwiaW1wb3J0IGRlZmF1bHRzIGZyb20gJyMvY29tbW9uL29wdGlvbnMtZGVmYXVsdHMnO1xuaW1wb3J0IHsgaW5pdEhvb2tzLCBzZW5kQ21kRGlyZWN0bHkgfSBmcm9tICcuJztcbmltcG9ydCB7IGZvckVhY2hFbnRyeSwgb2JqZWN0R2V0LCBvYmplY3RTZXQgfSBmcm9tICcuL29iamVjdCc7XG5cbmxldCBvcHRpb25zID0ge307XG5jb25zdCBob29rcyA9IGluaXRIb29rcygpO1xuY29uc3QgcmVhZHkgPSBzZW5kQ21kRGlyZWN0bHkoJ0dldEFsbE9wdGlvbnMnLCBudWxsLCB7IHJldHJ5OiB0cnVlIH0pXG4udGhlbigoZGF0YSkgPT4ge1xuICBvcHRpb25zID0gZGF0YTtcbiAgaWYgKGRhdGEpIGhvb2tzLmZpcmUoZGF0YSk7XG59KTtcblxuZnVuY3Rpb24gZ2V0T3B0aW9uKGtleSkge1xuICByZXR1cm4gb2JqZWN0R2V0KG9wdGlvbnMsIGtleSkgPz8gb2JqZWN0R2V0KGRlZmF1bHRzLCBrZXkpO1xufVxuXG5mdW5jdGlvbiBzZXRPcHRpb24oa2V5LCB2YWx1ZSkge1xuICAvLyB0aGUgdXBkYXRlZCBvcHRpb25zIG9iamVjdCB3aWxsIGJlIHByb3BhZ2F0ZWQgZnJvbSB0aGUgYmFja2dyb3VuZCBzY3JpcHQgYWZ0ZXIgYSBwYXVzZVxuICAvLyBzbyBtZWFud2hpbGUgdGhlIGxvY2FsIGNvZGUgc2hvdWxkIGJlIGFibGUgdG8gc2VlIHRoZSBuZXcgdmFsdWUgdXNpbmcgb3B0aW9ucy5nZXQoKVxuICBvYmplY3RTZXQob3B0aW9ucywga2V5LCB2YWx1ZSk7XG4gIHNlbmRDbWREaXJlY3RseSgnU2V0T3B0aW9ucycsIHsga2V5LCB2YWx1ZSB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhkYXRhKSB7XG4gIC8vIEtleXMgaW4gYGRhdGFgIG1heSBiZSB7IGZsYXR0ZW5lZC5saWtlLnRoaXM6ICdmb28nIH1cbiAgY29uc3QgZXhwYW5kZWREYXRhID0ge307XG4gIGRhdGE6OmZvckVhY2hFbnRyeSgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgb2JqZWN0U2V0KG9wdGlvbnMsIGtleSwgdmFsdWUpO1xuICAgIG9iamVjdFNldChleHBhbmRlZERhdGEsIGtleSwgdmFsdWUpO1xuICB9KTtcbiAgaG9va3MuZmlyZShleHBhbmRlZERhdGEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlYWR5LFxuICBnZXQ6IGdldE9wdGlvbixcbiAgc2V0OiBzZXRPcHRpb24sXG4gIHVwZGF0ZTogdXBkYXRlT3B0aW9ucyxcbiAgaG9vazogaG9va3MuaG9vayxcbn07XG4iLCJpbXBvcnQgeyBzaG93Q29uZmlybWF0aW9uIH0gZnJvbSAnIy9jb21tb24vdWknO1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4vdXRpbCc7XG5cbmZ1bmN0aW9uIHBhcnNlKGhhc2gpIHtcbiAgY29uc3QgW3BhdGhuYW1lLCBzZWFyY2ggPSAnJ10gPSBoYXNoLnNwbGl0KCc/Jyk7XG4gIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoLnNwbGl0KCcmJykucmVkdWNlKChyZXMsIHNlcSkgPT4ge1xuICAgIGlmIChzZXEpIHtcbiAgICAgIGNvbnN0IFtrZXksIHZhbF0gPSBzZXEuc3BsaXQoJz0nKTtcbiAgICAgIHJlc1tkZWNvZGVVUklDb21wb25lbnQoa2V5KV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfSwge30pO1xuICBjb25zdCBwYXRocyA9IHBhdGhuYW1lLnNwbGl0KCcvJyk7XG4gIHJldHVybiB7XG4gICAgaGFzaCwgcGF0aG5hbWUsIHBhdGhzLCBxdWVyeSxcbiAgfTtcbn1cblxuY29uc3Qgc3RhY2sgPSBbXTtcbmV4cG9ydCBjb25zdCByb3V0ZSA9IHt9O1xuZXhwb3J0IGNvbnN0IGxhc3RSb3V0ZSA9ICgpID0+IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdIHx8IHt9O1xuXG51cGRhdGVSb3V0ZSgpO1xuXG5mdW5jdGlvbiB1cGRhdGVSb3V0ZShub0NvbmZpcm0pIHtcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xuICBpZiAobm9Db25maXJtIHx8ICFyb3V0ZS5jb25maXJtQ2hhbmdlKSB7XG4gICAgT2JqZWN0LmFzc2lnbihyb3V0ZSwgcGFyc2UoaGFzaCkpO1xuICB9IGVsc2UgaWYgKHJvdXRlLmhhc2ggIT09IGhhc2gpIHtcbiAgICAvLyByZXN0b3JlIHRoZSBwaW5uZWQgcm91dGVcbiAgICBzZXRSb3V0ZShyb3V0ZS5oYXNoLCBmYWxzZSwgdHJ1ZSk7XG4gICAgcm91dGUuY29uZmlybUNoYW5nZShoYXNoKTtcbiAgfVxufVxuXG4vLyBwb3BzdGF0ZSBzaG91bGQgYmUgdGhlIGZpcnN0IHRvIGVuc3VyZSBoYXNoY2hhbmdlIGxpc3RlbmVycyBzZWUgdGhlIGNvcnJlY3QgbGFzdFJvdXRlXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiBzdGFjay5wb3AoKSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHVwZGF0ZVJvdXRlKCksIGZhbHNlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFJvdXRlKGhhc2gsIHJlcGxhY2UsIG5vQ29uZmlybSkge1xuICBsZXQgaGFzaFN0cmluZyA9IGAke2hhc2h9YDtcbiAgaWYgKGhhc2hTdHJpbmdbMF0gIT09ICcjJykgaGFzaFN0cmluZyA9IGAjJHtoYXNoU3RyaW5nfWA7XG4gIGlmIChyZXBsYWNlKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKCcnLCBudWxsLCBoYXNoU3RyaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBzdGFjay5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHJvdXRlKSk7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCcnLCBudWxsLCBoYXNoU3RyaW5nKTtcbiAgfVxuICB1cGRhdGVSb3V0ZShub0NvbmZpcm0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5sb2FkU2VudHJ5KG9uQ29uZmlybSwgb25DYW5jZWwpIHtcbiAgYXN5bmMgZnVuY3Rpb24gY29uZmlybVBvcFN0YXRlKGhhc2gpIHtcbiAgICB0cnkge1xuICAgICAgLy8gcG9wc3RhdGUgY2Fubm90IGJlIHByZXZlbnRlZCBzbyB3ZSBwaW4gY3VycmVudCBgcm91dGVgIGFuZCBkaXNwbGF5IGEgY29uZmlybWF0aW9uXG4gICAgICBhd2FpdCBzaG93Q29uZmlybWF0aW9uKGkxOG4oJ2NvbmZpcm1Ob3RTYXZlZCcpKTtcbiAgICAgIHNldFJvdXRlKGhhc2gsIGZhbHNlLCB0cnVlKTtcbiAgICAgIG9uQ29uZmlybT8uKCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBvbkNhbmNlbD8uKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZShzdGF0ZSkge1xuICAgIGNvbnN0IG9uT2ZmID0gYCR7c3RhdGUgPyAnYWRkJyA6ICdyZW1vdmUnfUV2ZW50TGlzdGVuZXJgO1xuICAgIGdsb2JhbFtvbk9mZl0oJ2JlZm9yZXVubG9hZCcsIG9uVW5sb2FkKTtcbiAgICByb3V0ZS5jb25maXJtQ2hhbmdlID0gc3RhdGUgJiYgY29uZmlybVBvcFN0YXRlO1xuICB9XG4gIHJldHVybiB0b2dnbGU7XG59XG5cbmZ1bmN0aW9uIG9uVW5sb2FkKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyBtb2Rlcm4gYnJvd3NlciBzaG93IHRoZWlyIG93biBtZXNzYWdlIHRleHRcbiAgZS5yZXR1cm5WYWx1ZSA9IGkxOG4oJ2NvbmZpcm1Ob3RTYXZlZCcpO1xufVxuIiwiaW1wb3J0IHsgZGVlcENvcHksIGZvckVhY2hFbnRyeSB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgeyBibG9iMmJhc2U2NCwgZW5zdXJlQXJyYXkgfSBmcm9tICcuL3V0aWwnO1xuXG4vKiogQHR5cGUgVk1DYWNoZSAqL1xubGV0IGRhdGFDYWNoZTtcbmNvbnN0IGJyb3dzZXJTdG9yYWdlTG9jYWwgPSBicm93c2VyLnN0b3JhZ2UubG9jYWw7XG5jb25zdCBvblN0b3JhZ2VDaGFuZ2VkID0gY2hhbmdlcyA9PiB7XG4gIGNoYW5nZXM6OmZvckVhY2hFbnRyeSgoW2tleSwgeyBuZXdWYWx1ZSB9XSkgPT4ge1xuICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsKSB7XG4gICAgICBkYXRhQ2FjaGUuZGVsKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFDYWNoZS5wdXQoa2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKiBAbmFtZXNwYWNlIFZNU3RvcmFnZUJhc2UgKi9cbmNvbnN0IGJhc2UgPSB7XG4gIHByZWZpeDogJycsXG4gIHNldERhdGFDYWNoZSh2YWwpIHtcbiAgICBkYXRhQ2FjaGUgPSB2YWw7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihvblN0b3JhZ2VDaGFuZ2VkKTtcbiAgfSxcbiAgZ2V0S2V5KGlkKSB7XG4gICAgcmV0dXJuIGAke3RoaXMucHJlZml4fSR7aWR9YDtcbiAgfSxcbiAgYXN5bmMgZ2V0T25lKGlkKSB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLmdldE11bHRpKFtpZF0pKVtpZF07XG4gIH0sXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBpZHNcbiAgICogQHBhcmFtIHs/fSBbZGVmXVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGlkOnN0cmluZywgdmFsOj8pOj99IFt0cmFuc2Zvcm1dXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59XG4gICAqL1xuICBhc3luYyBnZXRNdWx0aShpZHMsIGRlZiwgdHJhbnNmb3JtKSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGNvbnN0IG1pc3NpbmdLZXlzID0gW107XG4gICAgaWRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5nZXRLZXkoaWQpO1xuICAgICAgY29uc3QgY2FjaGVkID0gZGF0YUNhY2hlPy5nZXQoa2V5KTtcbiAgICAgIHJlc1tpZF0gPSBrZXk7XG4gICAgICBpZiAoY2FjaGVkICE9IG51bGwpIHtcbiAgICAgICAgZGF0YVtrZXldID0gZGVlcENvcHkoY2FjaGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pc3NpbmdLZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAobWlzc2luZ0tleXMubGVuZ3RoKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGEsIGF3YWl0IGJyb3dzZXJTdG9yYWdlTG9jYWwuZ2V0KG1pc3NpbmdLZXlzKSk7XG4gICAgfVxuICAgIHJlczo6Zm9yRWFjaEVudHJ5KChbaWQsIGtleV0pID0+IHtcbiAgICAgIHJlc1tpZF0gPSB0cmFuc2Zvcm1cbiAgICAgICAgPyB0cmFuc2Zvcm0oaWQsIGRhdGFba2V5XSlcbiAgICAgICAgOiBkYXRhW2tleV0gPz8gZGVlcENvcHkoZGVmKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9LFxuICAvLyBNdXN0IGJlIGBhc3luY2AgdG8gZW5zdXJlIGEgUHJvbWlzZSBpcyByZXR1cm5lZCB3aGVuIGBpZmAgZG9lc24ndCBtYXRjaFxuICBhc3luYyBzZXQoaWQsIHZhbHVlKSB7XG4gICAgaWYgKGlkKSByZXR1cm4gdGhpcy5kdW1wKHsgW2lkXTogdmFsdWUgfSk7XG4gIH0sXG4gIC8vIE11c3QgYmUgYGFzeW5jYCB0byBlbnN1cmUgYSBQcm9taXNlIGlzIHJldHVybmVkIHdoZW4gYGlmYCBkb2Vzbid0IG1hdGNoXG4gIGFzeW5jIHJlbW92ZShpZCkge1xuICAgIGlmIChpZCkgcmV0dXJuIHRoaXMucmVtb3ZlTXVsdGkoW2lkXSk7XG4gIH0sXG4gIC8vIE11c3QgYmUgYGFzeW5jYCB0byBlbnN1cmUgYSBQcm9taXNlIGlzIHJldHVybmVkIHdoZW4gYGlmYCBkb2Vzbid0IG1hdGNoXG4gIGFzeW5jIHJlbW92ZU11bHRpKGlkcykge1xuICAgIGlmIChpZHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBrZXlzID0gaWRzLm1hcCh0aGlzLmdldEtleSwgdGhpcyk7XG4gICAgICBpZiAoZGF0YUNhY2hlKSBrZXlzLmZvckVhY2goZGF0YUNhY2hlLmRlbCk7XG4gICAgICByZXR1cm4gYnJvd3NlclN0b3JhZ2VMb2NhbC5yZW1vdmUoa2V5cyk7XG4gICAgfVxuICB9LFxuICBhc3luYyBkdW1wKGRhdGEpIHtcbiAgICBjb25zdCBvdXRwdXQgPSB7fTtcbiAgICBkYXRhOjpmb3JFYWNoRW50cnkoKFtpZCwgdmFsdWVdKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleShpZCk7XG4gICAgICBvdXRwdXRba2V5XSA9IHZhbHVlO1xuICAgICAgZGF0YUNhY2hlPy5wdXQoa2V5LCBkZWVwQ29weSh2YWx1ZSkpO1xuICAgIH0pO1xuICAgIGF3YWl0IGJyb3dzZXJTdG9yYWdlTG9jYWwuc2V0KG91dHB1dCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgYmFzZSxcblxuICBjYWNoZToge1xuICAgIC4uLmJhc2UsXG4gICAgcHJlZml4OiAnY2FjOicsXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtWTVJlcXVlc3RSZXNwb25zZX0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtub0pvaW5dXG4gICAgICogQHJldHVybnMge3N0cmluZ3xzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBhc3luYyBtYWtlUmF3KHJlc3BvbnNlLCBub0pvaW4pIHtcbiAgICAgIGNvbnN0IHR5cGUgPSAocmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpIHx8ICcnKS5zcGxpdCgnOycpWzBdIHx8ICcnO1xuICAgICAgY29uc3QgYm9keSA9IGF3YWl0IGJsb2IyYmFzZTY0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgcmV0dXJuIG5vSm9pbiA/IFt0eXBlLCBib2R5XSA6IGAke3R5cGV9LCR7Ym9keX1gO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcmF3XSAtIHJhdyB2YWx1ZSBpbiBzdG9yYWdlLmNhY2hlXG4gICAgICogQHJldHVybnMgez9zdHJpbmd9XG4gICAgICovXG4gICAgbWFrZURhdGFVcmkodXJsLCByYXcpIHtcbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnZGF0YTonKSkgcmV0dXJuIHVybDtcbiAgICAgIGlmICgvXihpLHxpbWFnZVxcLykvLnRlc3QocmF3KSkgeyAvLyB3b3JrYXJvdW5kIGZvciBidWdzIGluIG9sZCBWTSwgc2VlIDJlMTM1Y2Y3XG4gICAgICAgIGNvbnN0IGkgPSByYXcubGFzdEluZGV4T2YoJywnKTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHJhdy5zdGFydHNXaXRoKCdpbWFnZS8nKSA/IHJhdy5zbGljZSgwLCBpKSA6ICdpbWFnZS9wbmcnO1xuICAgICAgICByZXR1cm4gYGRhdGE6JHt0eXBlfTtiYXNlNjQsJHtyYXcuc2xpY2UoaSArIDEpfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmF3O1xuICAgIH0sXG4gIH0sXG5cbiAgY29kZToge1xuICAgIC4uLmJhc2UsXG4gICAgcHJlZml4OiAnY29kZTonLFxuICB9LFxuXG4gIC8vIGxhc3QtbW9kaWZpZWQgSFRUUCBoZWFkZXIgdmFsdWUgcGVyIFVSTFxuICBtb2Q6IHtcbiAgICAuLi5iYXNlLFxuICAgIHByZWZpeDogJ21vZDonLFxuICB9LFxuXG4gIHJlcXVpcmU6IHtcbiAgICAuLi5iYXNlLFxuICAgIHByZWZpeDogJ3JlcTonLFxuICB9LFxuXG4gIHNjcmlwdDoge1xuICAgIC4uLmJhc2UsXG4gICAgcHJlZml4OiAnc2NyOicsXG4gICAgYXN5bmMgZHVtcChpdGVtcykge1xuICAgICAgaXRlbXMgPSBlbnN1cmVBcnJheShpdGVtcykuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgaWYgKCFpdGVtcy5sZW5ndGgpIHJldHVybjtcbiAgICAgIGNvbnN0IGRhdGEgPSBpdGVtcy5yZWR1Y2UoKHJlcywgaXRlbSkgPT4ge1xuICAgICAgICByZXNbdGhpcy5nZXRLZXkoaXRlbS5wcm9wcy5pZCldID0gaXRlbTtcbiAgICAgICAgaWYgKHRoaXMub25EdW1wKSB0aGlzLm9uRHVtcChpdGVtKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sIHt9KTtcbiAgICAgIGF3YWl0IGJhc2UuZHVtcChkYXRhKTtcbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9LFxuICB9LFxuXG4gIHZhbHVlOiB7XG4gICAgLi4uYmFzZSxcbiAgICBwcmVmaXg6ICd2YWw6JyxcbiAgfSxcbn07XG4iLCIvLyBVQSBjYW4gYmUgb3ZlcnJpZGRlbiBieSBhYm91dDpjb25maWcgaW4gRkYgb3IgZGV2dG9vbHMgaW4gQ2hyb21lXG4vLyBzbyB3ZSdsbCB0ZXN0IGZvciB3aW5kb3cuY2hyb21lLmFwcCB3aGljaCBpcyBvbmx5IGRlZmluZWQgaW4gQ2hyb21lXG4vLyBhbmQgZm9yIGJyb3dzZXIucnVudGltZS5nZXRCcm93c2VySW5mbyBpbiBGaXJlZm94IDUxK1xuXG4vKiogQHR5cGVkZWYgVUFFeHRyYXNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfE5hTn0gY2hyb21lIC0gQ2hyb21lL2l1bSB2ZXJzaW9uIG51bWJlclxuICogQHByb3BlcnR5IHtudW1iZXJ8TmFOfSBmaXJlZm94IC0gZGVyaXZlZCBmcm9tIFVBIHN0cmluZyBpbml0aWFsbHksIGEgcmVhbCBudW1iZXIgd2hlbiBgcmVhZHlgXG4gKiBAcHJvcGVydHkge1Byb21pc2U8dm9pZD59IHJlYWR5IC0gcmVzb2x2ZXMgd2hlbiBgYnJvd3NlcmAgQVBJIHJldHVybnMgcmVhbCB2ZXJzaW9uc1xuICovXG4vKiogQHR5cGVkZWYgVUFJbmplY3RlZFxuICogQHByb3BlcnR5IHtjaHJvbWUucnVudGltZS5QbGF0Zm9ybUluZm8uYXJjaH0gYXJjaFxuICogQHByb3BlcnR5IHtjaHJvbWUucnVudGltZS5QbGF0Zm9ybUluZm8ub3N9IG9zXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYnJvd3Nlck5hbWVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBicm93c2VyVmVyc2lvblxuICovXG4vKiogQHR5cGUge1VBSW5qZWN0ZWQgJiBVQUV4dHJhc30gKi9cbmNvbnN0IHVhID0ge307XG5leHBvcnQgZGVmYXVsdCB1YTtcblxuLy8gdXNpbmcgbm9uLWVudW1lcmFibGUgcHJvcGVydGllcyB0aGF0IHdvbid0IGJlIHNlbnQgdG8gY29udGVudCBzY3JpcHRzIHZpYSBHZXRJbmplY3RlZFxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXModWEsIHtcbiAgY2hyb21lOiB7XG4gICAgdmFsdWU6IG1hdGNoTmF2VUEodHJ1ZSksXG4gIH0sXG4gIGZpcmVmb3g6IHtcbiAgICB2YWx1ZTogbWF0Y2hOYXZVQSgpLCAvLyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIHJlYWwgdmVyc2lvbiBudW1iZXIgaW4gcmVhZHkoKVxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICB9LFxuICByZWFkeToge1xuICAgIHZhbHVlOiBQcm9taXNlLmFsbChbXG4gICAgICBicm93c2VyLnJ1bnRpbWUuZ2V0UGxhdGZvcm1JbmZvKCksXG4gICAgICBicm93c2VyLnJ1bnRpbWUuZ2V0QnJvd3NlckluZm8/LigpLFxuICAgIF0pLnRoZW4oKFt7IG9zLCBhcmNoIH0sIHsgbmFtZSwgdmVyc2lvbiB9ID0ge31dKSA9PiB7XG4gICAgICBPYmplY3QuYXNzaWduKHVhLCB7XG4gICAgICAgIGFyY2gsXG4gICAgICAgIG9zLFxuICAgICAgICBicm93c2VyTmFtZTogbmFtZT8udG9Mb3dlckNhc2UoKSB8fCAnY2hyb21lJyxcbiAgICAgICAgYnJvd3NlclZlcnNpb246IHZlcnNpb24gfHwgbWF0Y2hOYXZVQSh0cnVlLCB0cnVlKSxcbiAgICAgIH0pO1xuICAgICAgaWYgKElTX0ZJUkVGT1gpIHtcbiAgICAgICAgdWEuZmlyZWZveCA9IHBhcnNlRmxvYXQodmVyc2lvbikgfHwgMDtcbiAgICAgIH1cbiAgICB9KSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBtYXRjaE5hdlVBKGFzQ2hyb21lLCBhc1N0cmluZykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoYFxcXFxzJHthc0Nocm9tZSA/ICdDaHJvbShlfGl1bSknIDogJ0ZpcmVmb3gnfS8oXFxcXGQrWy4wLTldKil8JGAsICdpJyk7XG4gIGNvbnN0IHZlciA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gocmUpLnBvcCgpO1xuICByZXR1cm4gYXNTdHJpbmcgPyB2ZXIgOiBwYXJzZUZsb2F0KHZlcik7XG59XG4iLCIvLyBTQUZFVFkgV0FSTklORyEgRXhwb3J0cyB1c2VkIGJ5IGBpbmplY3RlZGAgbXVzdCBtYWtlIDo6c2FmZSgpIGNhbGxzIGFuZCB1c2UgX19wcm90b19fOm51bGxcblxuaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpMThuKG5hbWUsIGFyZ3MpIHtcbiAgcmV0dXJuIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKG5hbWUsIGFyZ3MpIHx8IG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZyhwYXJhbSkge1xuICBpZiAocGFyYW0gPT0gbnVsbCkgcmV0dXJuICcnO1xuICByZXR1cm4gYCR7cGFyYW19YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIgPSB0b1N0cmluZykge1xuICBjb25zdCBjYWNoZU1hcCA9IHt9O1xuICBmdW5jdGlvbiBtZW1vaXplZCguLi5hcmdzKSB7XG4gICAgLy8gVXNlZCBpbiBzYWZlIGNvbnRleHRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBjb25zdCBrZXkgPSByZXNvbHZlciguLi5hcmdzKTtcbiAgICBsZXQgY2FjaGUgPSBjYWNoZU1hcFtrZXldO1xuICAgIGlmICghY2FjaGUpIHtcbiAgICAgIGNhY2hlID0ge1xuICAgICAgICB2YWx1ZTogZnVuYy5hcHBseSh0aGlzLCBhcmdzKSxcbiAgICAgIH07XG4gICAgICBjYWNoZU1hcFtrZXldID0gY2FjaGU7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZS52YWx1ZTtcbiAgfVxuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB0aW1lKSB7XG4gIGxldCBzdGFydFRpbWU7XG4gIGxldCB0aW1lcjtcbiAgbGV0IGNhbGxiYWNrO1xuICB0aW1lID0gTWF0aC5tYXgoMCwgK3RpbWUgfHwgMCk7XG4gIGZ1bmN0aW9uIGNoZWNrVGltZSgpIHtcbiAgICB0aW1lciA9IG51bGw7XG4gICAgaWYgKHBlcmZvcm1hbmNlLm5vdygpID49IHN0YXJ0VGltZSkgY2FsbGJhY2soKTtcbiAgICBlbHNlIGNoZWNrVGltZXIoKTtcbiAgfVxuICBmdW5jdGlvbiBjaGVja1RpbWVyKCkge1xuICAgIGlmICghdGltZXIpIHtcbiAgICAgIGNvbnN0IGRlbHRhID0gc3RhcnRUaW1lIC0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoY2hlY2tUaW1lLCBkZWx0YSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGRlYm91bmNlZEZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSArIHRpbWU7XG4gICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBjYWxsYmFjayA9IG51bGw7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgY2hlY2tUaW1lcigpO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZWRGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHRpbWUpIHtcbiAgbGV0IGxhc3RUaW1lID0gMDtcbiAgdGltZSA9IE1hdGgubWF4KDAsICt0aW1lIHx8IDApO1xuICBmdW5jdGlvbiB0aHJvdHRsZWRGdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgaWYgKGxhc3RUaW1lICsgdGltZSA8IG5vdykge1xuICAgICAgbGFzdFRpbWUgPSBub3c7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhyb3R0bGVkRnVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXFJZChwcmVmaXggPSAnVk0nKSB7XG4gIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICByZXR1cm4gcHJlZml4XG4gICAgKyBNYXRoLmZsb29yKChub3cgLSBNYXRoLmZsb29yKG5vdykpICogMWUxMikudG9TdHJpbmcoMzYpXG4gICAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTEyKS50b1N0cmluZygzNik7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcnxVaW50OEFycmF5fEFycmF5fSBidWZcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0XVxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGEgYmluYXJ5IHN0cmluZyBpLmUuIG9uZSBieXRlIHBlciBjaGFyYWN0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1ZmZlcjJzdHJpbmcoYnVmLCBvZmZzZXQgPSAwLCBsZW5ndGggPSAxZTk5KSB7XG4gIC8vIFRoZSBtYXggbnVtYmVyIG9mIGFyZ3VtZW50cyB2YXJpZXMgYmV0d2VlbiBKUyBlbmdpbmVzIGJ1dCBpdCdzID4zMmsgc28gd2UncmUgc2FmZVxuICBjb25zdCBzbGljZVNpemUgPSA4MTkyO1xuICBjb25zdCBzbGljZXMgPSBbXTtcbiAgY29uc3QgYXJyYXlMZW4gPSBidWYubGVuZ3RoOyAvLyBwcmVzZW50IG9uIFVpbnQ4QXJyYXkvQXJyYXlcbiAgY29uc3QgZW5kID0gTWF0aC5taW4oYXJyYXlMZW4gfHwgYnVmLmJ5dGVMZW5ndGgsIG9mZnNldCArIGxlbmd0aCk7XG4gIGNvbnN0IG5lZWRzU2xpY2luZyA9IGFycmF5TGVuID09IG51bGwgfHwgb2Zmc2V0IHx8IGVuZCA+IHNsaWNlU2l6ZTtcbiAgZm9yICg7IG9mZnNldCA8IGVuZDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xuICAgIHNsaWNlcy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxcbiAgICAgIG5lZWRzU2xpY2luZ1xuICAgICAgICA/IG5ldyBVaW50OEFycmF5KGJ1Ziwgb2Zmc2V0LCBNYXRoLm1pbihzbGljZVNpemUsIGVuZCAtIG9mZnNldCkpXG4gICAgICAgIDogYnVmKSk7XG4gIH1cbiAgcmV0dXJuIHNsaWNlcy5qb2luKCcnKTtcbn1cblxuLyoqXG4gKiBGYXN0ZXIgdGhhbiBidWZmZXIyc3RyaW5nK2J0b2E6IDJ4IGluIENocm9tZSwgMTB4IGluIEZGXG4gKiBAcGFyYW0ge0Jsb2J9IGJsb2JcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0XVxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdXG4gKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IGJhc2U2NC1lbmNvZGVkIGNvbnRlbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBibG9iMmJhc2U2NChibG9iLCBvZmZzZXQgPSAwLCBsZW5ndGggPSAxZTk5KSB7XG4gIGlmIChvZmZzZXQgfHwgbGVuZ3RoIDwgYmxvYi5zaXplKSB7XG4gICAgYmxvYiA9IGJsb2Iuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBsZW5ndGgpO1xuICB9XG4gIHJldHVybiAhYmxvYi5zaXplID8gJycgOiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSByZWFkZXIucmVzdWx0O1xuICAgICAgcmVzb2x2ZShyZXMuc2xpY2UocmVzLmluZGV4T2YoJywnKSArIDEpKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZzJ1aW50OGFycmF5KHN0cikge1xuICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuICBjb25zdCBhcnJheSA9IG5ldyBVaW50OEFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBhcnJheVtpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuY29uc3QgVkVSU0lPTl9SRSA9IC9eKC4qPyktKFstLjAtOWEtel0rKXwkL2k7XG5jb25zdCBESUdJVFNfUkUgPSAvXlxcZCskLzsgLy8gdXNpbmcgcmVnZXhwIHRvIGF2b2lkICsnMWUyJyBiZWluZyBwYXJzZWQgYXMgMTAwXG5cbi8qKiBAcmV0dXJuIC0xIHwgMCB8IDEgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlVmVyc2lvbih2ZXIxLCB2ZXIyKSB7XG4gIC8vIFVzZWQgaW4gc2FmZSBjb250ZXh0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICBjb25zdCBbLCBtYWluMSA9IHZlcjEgfHwgJycsIHByZTFdID0gVkVSU0lPTl9SRS5leGVjKHZlcjEpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgY29uc3QgWywgbWFpbjIgPSB2ZXIyIHx8ICcnLCBwcmUyXSA9IFZFUlNJT05fUkUuZXhlYyh2ZXIyKTtcbiAgY29uc3QgZGVsdGEgPSBjb21wYXJlVmVyc2lvbkNodW5rKG1haW4xLCBtYWluMilcbiAgICB8fCAhcHJlMSAtICFwcmUyIC8vIDEuMi4zLXByZS1yZWxlYXNlIGlzIGxlc3MgdGhhbiAxLjIuM1xuICAgIHx8IHByZTEgJiYgY29tcGFyZVZlcnNpb25DaHVuayhwcmUxLCBwcmUyLCB0cnVlKTsgLy8gaWYgcHJlMSBpcyBwcmVzZW50LCBwcmUyIGlzIHRvb1xuICByZXR1cm4gZGVsdGEgPCAwID8gLTEgOiArISFkZWx0YTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZVZlcnNpb25DaHVuayh2ZXIxLCB2ZXIyLCBpc1NlbXZlck1vZGUpIHtcbiAgY29uc3QgcGFydHMxID0gdmVyMS5zcGxpdCgnLicpO1xuICBjb25zdCBwYXJ0czIgPSB2ZXIyLnNwbGl0KCcuJyk7XG4gIGNvbnN0IGxlbjEgPSBwYXJ0czEubGVuZ3RoO1xuICBjb25zdCBsZW4yID0gcGFydHMyLmxlbmd0aDtcbiAgY29uc3QgbGVuID0gKGlzU2VtdmVyTW9kZSA/IE1hdGgubWluIDogTWF0aC5tYXgpKGxlbjEsIGxlbjIpO1xuICBsZXQgZGVsdGE7XG4gIGZvciAobGV0IGkgPSAwOyAhZGVsdGEgJiYgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgY29uc3QgYSA9IHBhcnRzMVtpXTtcbiAgICBjb25zdCBiID0gcGFydHMyW2ldO1xuICAgIGlmIChpc1NlbXZlck1vZGUpIHtcbiAgICAgIGRlbHRhID0gRElHSVRTX1JFLnRlc3QoYSkgJiYgRElHSVRTX1JFLnRlc3QoYilcbiAgICAgICAgPyBhIC0gYlxuICAgICAgICA6IGEgPiBiIHx8IGEgPCBiICYmIC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWx0YSA9IChwYXJzZUludChhLCAxMCkgfHwgMCkgLSAocGFyc2VJbnQoYiwgMTApIHx8IDApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVsdGEgfHwgaXNTZW12ZXJNb2RlICYmIChsZW4xIC0gbGVuMik7XG59XG5cbmNvbnN0IHVuaXRzID0gW1xuICBbJ21pbicsIDYwXSxcbiAgWydoJywgMjRdLFxuICBbJ2QnLCAxMDAwLCAzNjVdLFxuICBbJ3knXSxcbl07XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZShkdXJhdGlvbikge1xuICBkdXJhdGlvbiAvPSA2MCAqIDEwMDA7XG4gIGNvbnN0IHVuaXRJbmZvID0gdW5pdHMuZmluZCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1heCA9IGl0ZW1bMV07XG4gICAgaWYgKCFtYXggfHwgZHVyYXRpb24gPCBtYXgpIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IHN0ZXAgPSBpdGVtWzJdIHx8IG1heDtcbiAgICBkdXJhdGlvbiAvPSBzdGVwO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiBgJHtkdXJhdGlvbiB8IDB9JHt1bml0SW5mb1swXX1gO1xufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0Qnl0ZUxlbmd0aCA9IGxlbiA9PiAoXG4gICFsZW4gPyAnJ1xuICAgIDogbGVuIDwgMTAyNCAmJiBgJHtsZW59IEJgXG4gICAgfHwgbGVuIDwgMTAyNCAqIDEwMjQgJiYgYCR7bGVuID4+IDEwfSBrYCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWJpdHdpc2VcbiAgICB8fCBgJHsrKGxlbiAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMSl9IE1gIC8vIGFsbG93IGZyYWN0aW9ucyBmb3IgbWVnYWJ5dGVzXG4pO1xuXG4vLyBVc2VkIGJ5IGBpbmplY3RlZGBcbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iaikge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqOjpoYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlQXJyYXkoZGF0YSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV07XG59XG5cbmNvbnN0IGJpbmFyeVR5cGVzID0gW1xuICAnYmxvYicsXG4gICdhcnJheWJ1ZmZlcicsXG5dO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RMb2NhbEZpbGUodXJsLCBvcHRpb25zID0ge30pIHtcbiAgLy8gb25seSBHRVQgbWV0aG9kIGlzIGFsbG93ZWQgZm9yIGxvY2FsIGZpbGVzXG4gIC8vIGhlYWRlcnMgaXMgbWVhbmluZ2xlc3NcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCB7IHJlc3BvbnNlVHlwZSB9ID0gb3B0aW9ucztcbiAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICBpZiAoYmluYXJ5VHlwZXMuaW5jbHVkZXMocmVzcG9uc2VUeXBlKSkgeGhyLnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZTtcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgLy8gc3RhdHVzIGZvciBgZmlsZTpgIHByb3RvY29sIHdpbGwgYWx3YXlzIGJlIGAwYFxuICAgICAgcmVzdWx0LnN0YXR1cyA9IHhoci5zdGF0dXMgfHwgMjAwO1xuICAgICAgcmVzdWx0LmRhdGEgPSBiaW5hcnlUeXBlcy5pbmNsdWRlcyhyZXNwb25zZVR5cGUpID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgIGlmIChyZXNwb25zZVR5cGUgPT09ICdqc29uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdC5kYXRhID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIGlnbm9yZSBpbnZhbGlkIEpTT05cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPiAzMDApIHtcbiAgICAgICAgcmVqZWN0KHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB4aHIub25lcnJvciA9ICgpID0+IHtcbiAgICAgIHJlc3VsdC5zdGF0dXMgPSAtMTtcbiAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgIH07XG4gICAgeGhyLnNlbmQoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogRXhjbHVkZXMgYHRleHQvaHRtbGAgdG8gYXZvaWQgTElOSyBoZWFkZXIgdGhhdCBDaHJvbWUgdXNlcyB0byBwcmVmZXRjaCBqcyBhbmQgY3NzLFxuICogYmVjYXVzZSBHcmVhc3lGb3JrJ3MgNDA0IGVycm9yIHJlc3BvbnNlIGNhdXNlcyBDU1AgdmlvbGF0aW9ucyBpbiBjb25zb2xlIG9mIG91ciBwYWdlLlxuICovXG5jb25zdCBGT1JDRURfQUNDRVBUID0ge1xuICAnZ3JlYXN5Zm9yay5vcmcnOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCwgdGV4dC9wbGFpbiwgdGV4dC9jc3MnLFxufTtcblxuZXhwb3J0IGNvbnN0IGlzUmVtb3RlID0gdXJsID0+IHVybFxuICAmJiAhKC9eKGZpbGU6fGRhdGE6fGh0dHBzPzpcXC9cXC8obG9jYWxob3N0fDEyN1xcLjBcXC4wXFwuMVs6L10pKS8udGVzdCh1cmwpKTtcblxuLyoqIEB0eXBlZGVmIHt7XG4gIHVybDogc3RyaW5nLFxuICBzdGF0dXM6IG51bWJlcixcbiAgaGVhZGVyczogSGVhZGVycyxcbiAgZGF0YTogc3RyaW5nfEFycmF5QnVmZmVyfEJsb2J8T2JqZWN0XG59fSBWTVJlcXVlc3RSZXNwb25zZSAqL1xuLyoqXG4gKiBNYWtlIGEgcmVxdWVzdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7UmVxdWVzdEluaXR9IG9wdGlvbnNcbiAqIEByZXR1cm4gUHJvbWlzZTxWTVJlcXVlc3RSZXNwb25zZT5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgLy8gZmV0Y2ggZG9lcyBub3Qgc3VwcG9ydCBsb2NhbCBmaWxlXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnZmlsZTovLycpKSByZXR1cm4gcmVxdWVzdExvY2FsRmlsZSh1cmwsIG9wdGlvbnMpO1xuICBjb25zdCB7IGJvZHksIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSB9ID0gb3B0aW9ucztcbiAgY29uc3QgaXNCb2R5T2JqID0gYm9keSAmJiBib2R5Ojooe30pLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICBjb25zdCBob3N0bmFtZSA9IHVybC5zcGxpdCgnLycsIDMpWzJdO1xuICBjb25zdCBhY2NlcHQgPSBGT1JDRURfQUNDRVBUW2hvc3RuYW1lXTtcbiAgLy8gTm90IHVzaW5nIC4uLnNwcmVhZCBiZWNhdXNlIEJhYmVsIG1pc3Rha2VubHkgYWRkcyBpdHMgcG9seWZpbGwgdG8gaW5qZWN0ZWQtd2ViXG4gIGNvbnN0IGluaXQgPSBPYmplY3QuYXNzaWduKHtcbiAgICBjYWNoZTogaXNSZW1vdGUodXJsKSA/IHVuZGVmaW5lZCA6ICduby1jYWNoZScsXG4gIH0sIG9wdGlvbnMsIHtcbiAgICBib2R5OiBpc0JvZHlPYmogPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHksXG4gICAgaGVhZGVyczogaXNCb2R5T2JqIHx8IGFjY2VwdFxuICAgICAgPyBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICBpc0JvZHlPYmogJiYgeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGFjY2VwdCAmJiB7IGFjY2VwdCB9KVxuICAgICAgOiBoZWFkZXJzLFxuICB9KTtcbiAgY29uc3QgcmVzdWx0ID0geyB1cmwsIHN0YXR1czogLTEgfTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcbiAgICBjb25zdCBsb2FkTWV0aG9kID0ge1xuICAgICAgYXJyYXlidWZmZXI6ICdhcnJheUJ1ZmZlcicsXG4gICAgICBibG9iOiAnYmxvYicsXG4gICAgICBqc29uOiAnanNvbicsXG4gICAgfVtyZXNwb25zZVR5cGVdIHx8ICd0ZXh0JztcbiAgICAvLyBzdGF0dXMgZm9yIGBmaWxlOmAgcHJvdG9jb2wgd2lsbCBhbHdheXMgYmUgYDBgXG4gICAgcmVzdWx0LnN0YXR1cyA9IHJlc3Auc3RhdHVzIHx8IDIwMDtcbiAgICByZXN1bHQuaGVhZGVycyA9IHJlc3AuaGVhZGVycztcbiAgICByZXN1bHQuZGF0YSA9IGF3YWl0IHJlc3BbbG9hZE1ldGhvZF0oKTtcbiAgfSBjYXRjaCB7IC8qIE5PUCAqLyB9XG4gIGlmIChyZXN1bHQuc3RhdHVzIDwgMCB8fCByZXN1bHQuc3RhdHVzID4gMzAwKSB0aHJvdyByZXN1bHQ7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIFVzZWQgYnkgYGluamVjdGVkYFxuY29uc3QgU0lNUExFX1ZBTFVFX1RZUEUgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgc3RyaW5nOiAncycsXG4gIG51bWJlcjogJ24nLFxuICBib29sZWFuOiAnYicsXG59O1xuXG4vLyBVc2VkIGJ5IGBpbmplY3RlZGBcbmV4cG9ydCBmdW5jdGlvbiBkdW1wU2NyaXB0VmFsdWUodmFsdWUsIGpzb25EdW1wID0gSlNPTi5zdHJpbmdpZnkpIHtcbiAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBzaW1wbGUgPSBTSU1QTEVfVkFMVUVfVFlQRVt0eXBlb2YgdmFsdWVdO1xuICAgIHJldHVybiBgJHtzaW1wbGUgfHwgJ28nfSR7c2ltcGxlID8gdmFsdWUgOiBqc29uRHVtcCh2YWx1ZSl9YDtcbiAgfVxufVxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2Fycm93LnN2Z1wiOiBcIi4vc3JjL3Jlc291cmNlcy9zdmcvYXJyb3cuc3ZnXCIsXG5cdFwiLi9hdXRob3Iuc3ZnXCI6IFwiLi9zcmMvcmVzb3VyY2VzL3N2Zy9hdXRob3Iuc3ZnXCIsXG5cdFwiLi9jb2RlLnN2Z1wiOiBcIi4vc3JjL3Jlc291cmNlcy9zdmcvY29kZS5zdmdcIixcblx0XCIuL2NvZy5zdmdcIjogXCIuL3NyYy9yZXNvdXJjZXMvc3ZnL2NvZy5zdmdcIixcblx0XCIuL2NvbW1hbmQuc3ZnXCI6IFwiLi9zcmMvcmVzb3VyY2VzL3N2Zy9jb21tYW5kLnN2Z1wiLFxuXHRcIi4vZmlsdGVyLnN2Z1wiOiBcIi4vc3JjL3Jlc291cmNlcy9zdmcvZmlsdGVyLnN2Z1wiLFxuXHRcIi4vaG9tZS5zdmdcIjogXCIuL3NyYy9yZXNvdXJjZXMvc3ZnL2hvbWUuc3ZnXCIsXG5cdFwiLi9pbmZvLnN2Z1wiOiBcIi4vc3JjL3Jlc291cmNlcy9zdmcvaW5mby5zdmdcIixcblx0XCIuL21vcmUuc3ZnXCI6IFwiLi9zcmMvcmVzb3VyY2VzL3N2Zy9tb3JlLnN2Z1wiLFxuXHRcIi4vcGx1cy5zdmdcIjogXCIuL3NyYy9yZXNvdXJjZXMvc3ZnL3BsdXMuc3ZnXCIsXG5cdFwiLi9xdWVzdGlvbi5zdmdcIjogXCIuL3NyYy9yZXNvdXJjZXMvc3ZnL3F1ZXN0aW9uLnN2Z1wiLFxuXHRcIi4vcmVmcmVzaC5zdmdcIjogXCIuL3NyYy9yZXNvdXJjZXMvc3ZnL3JlZnJlc2guc3ZnXCIsXG5cdFwiLi9zZWFyY2guc3ZnXCI6IFwiLi9zcmMvcmVzb3VyY2VzL3N2Zy9zZWFyY2guc3ZnXCIsXG5cdFwiLi90b2dnbGUtb2ZmLnN2Z1wiOiBcIi4vc3JjL3Jlc291cmNlcy9zdmcvdG9nZ2xlLW9mZi5zdmdcIixcblx0XCIuL3RvZ2dsZS1vbi5zdmdcIjogXCIuL3NyYy9yZXNvdXJjZXMvc3ZnL3RvZ2dsZS1vbi5zdmdcIixcblx0XCIuL3RyYXNoLnN2Z1wiOiBcIi4vc3JjL3Jlc291cmNlcy9zdmcvdHJhc2guc3ZnXCIsXG5cdFwiLi91bmRvLnN2Z1wiOiBcIi4vc3JjL3Jlc291cmNlcy9zdmcvdW5kby5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvcmVzb3VyY2VzL3N2ZyBzeW5jIFxcXFwuc3ZnJFwiOyJdLCJzb3VyY2VSb290IjoiIn0=