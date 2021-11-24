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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2hvb2stc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vb3B0aW9ucy1kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvc3ZnIHN5bmMgbm9ucmVjdXJzaXZlIFxcLnN2ZyQiXSwibmFtZXMiOlsiSVNfRklSRUZPWCIsImdsb2JhbCIsImJyb3dzZXIiLCJydW50aW1lIiwiY2hyb21lIiwiUHJveHkiLCJQcm94eVNhZmUiLCJhcHBseSIsImJpbmQiLCJNRVNTQUdFIiwiU1RBQ0siLCJpc1N5bmNNZXRob2ROYW1lIiwia2V5IiwiaXNGdW5jdGlvbiIsInZhbCIsImlzT2JqZWN0IiwicHJveGlmeVZhbHVlIiwidGFyZ2V0Iiwic3JjIiwibWV0YVZhbCIsInNyY1ZhbCIsInVuZGVmaW5lZCIsInJlcyIsImhhc093blByb3BlcnR5Iiwid3JhcEFzeW5jIiwicHJveGlmeUdyb3VwIiwibWV0YSIsImdldCIsImdyb3VwIiwidGhpc0FyZyIsImZ1bmMiLCJwcmVwcm9jZXNzb3JGdW5jIiwiYXJncyIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9taXNlIiwiUHJvbWlzZVNhZmUiLCJfcmVzb2x2ZSIsIl9yZWplY3QiLCJzdGFja0luZm8iLCJFcnJvclNhZmUiLCJuYW1lIiwibGVuZ3RoIiwicmVzdWx0IiwicnVudGltZUVyciIsImxhc3RFcnJvciIsImVyciIsImlzUnVudGltZSIsInByb2Nlc3MiLCJlIiwiY29uc29sZSIsImVycm9yIiwid3JhcFN1Y2Nlc3MiLCJ3cmFwRXJyb3IiLCJzZW5kUmVzcG9uc2VBc3luYyIsInNlbmRSZXNwb25zZSIsIm9uTWVzc2FnZUxpc3RlbmVyIiwibGlzdGVuZXIiLCJtZXNzYWdlIiwic2VuZGVyIiwib2JqZWN0VG9TdHJpbmciLCJ1bndyYXBSZXNwb25zZSIsInJlc3BvbnNlIiwid3JhcFNlbmRNZXNzYWdlIiwic2VuZE1lc3NhZ2UiLCJleHRlbnNpb24iLCJpMThuIiwiY29ubmVjdCIsImdldE1hbmlmZXN0IiwiZ2V0VVJMIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJ0YWJzIiwiaW5pdENhY2hlIiwibGlmZXRpbWUiLCJkZWZhdWx0TGlmZXRpbWUiLCJvbkRpc3Bvc2UiLCJjYWNoZSIsIk9iamVjdCIsImNyZWF0ZSIsInRpbWVyIiwibWluTGlmZXRpbWUiLCJiYXRjaFN0YXJ0ZWQiLCJiYXRjaFN0YXJ0VGltZSIsImdldE5vdyIsInBlcmZvcm1hbmNlIiwibm93IiwiYmF0Y2giLCJnZXRWYWx1ZXMiLCJwb3AiLCJwdXQiLCJkZWwiLCJoYXMiLCJoaXQiLCJkZXN0cm95IiwiZW5hYmxlIiwiZGVmIiwic2hvdWxkSGl0IiwiaXRlbSIsInJlc2NoZWR1bGUiLCJ2YWx1ZSIsInZhbHVlcyIsIm1hcCIsImRhdGEiLCJlbnRyeSIsImNsZWFyVGltZW91dCIsImV4cGlyeSIsInNldFRpbWVvdXQiLCJ0cmltIiwiY2xvc2VzdEV4cGlyeSIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJJU19ERVYiLCJLRVlfR0xPQkFMX0lEIiwiQlVJTERfSU5fU0NSSVBUX1NSQyIsIklOSkVDVF9BVVRPIiwiSU5KRUNUX1BBR0UiLCJJTkpFQ1RfQ09OVEVOVCIsIklOSkVDVF9NQVBQSU5HIiwiX19wcm90b19fIiwiQ01EX1NDUklQVF9BREQiLCJDTURfU0NSSVBUX1VQREFURSIsIk1FVEFCTE9DS19SRSIsIklOSkVDVEFCTEVfVEFCX1VSTF9SRSIsIlRJTUVPVVRfTUFYIiwiVElNRU9VVF9IT1VSIiwiVElNRU9VVF8yNEhPVVJTIiwiVElNRU9VVF9XRUVLIiwiaGFuZGxlcnMiLCJVcGRhdGVPcHRpb25zIiwib3B0aW9ucyIsInVwZGF0ZSIsImhhbmRsZSIsImNtZCIsImhvb2tzIiwiaG9vayIsImZvckVhY2hFbnRyeSIsImxpc3QiLCJvYmplY3RHZXQiLCJmb3JFYWNoIiwiaG9va1NldHRpbmciLCJyZWFkeSIsInRoZW4iLCJwdXNoIiwiaSIsImluZGV4T2YiLCJzcGxpY2UiLCJkZWZhdWx0SW1hZ2UiLCJpbml0SG9va3MiLCJmaXJlIiwic2xpY2UiLCJjYiIsImNhbGxiYWNrIiwic2VuZENtZCIsIkNPTU1BTkRTX1dJVEhfU1JDIiwiZ2V0QmdQYWdlIiwiZ2V0QmFja2dyb3VuZFBhZ2UiLCJzZW5kQ21kRGlyZWN0bHkiLCJiZyIsImluY2x1ZGVzIiwid2luZG93IiwiZGVlcENvcHkiLCJoYW5kbGVDb21tYW5kTWVzc2FnZSIsInNlbmRUYWJDbWQiLCJ0YWJJZCIsImNhdGNoIiwibm9vcCIsInBheWxvYWQiLCJyZXRyeSIsInNlbmRNZXNzYWdlUmV0cnkiLCJyZXRyaWVzIiwicGF1c2VEdXJhdGlvbiIsIm1ha2VQYXVzZSIsIkVycm9yIiwibGVmdHBhZCIsImlucHV0IiwicGFkIiwibnVtIiwidG9TdHJpbmciLCJnZXRMb2NhbGVTdHJpbmciLCJsb2NhbGVNZXRhIiwibmF2aWdhdG9yIiwibGFuZ3VhZ2VzIiwibGFuZyIsInRvTG93ZXJDYXNlIiwiZmluZCIsIkJvb2xlYW4iLCJnZXRTY3JpcHROYW1lIiwic2NyaXB0IiwiY3VzdG9tIiwicHJvcHMiLCJpZCIsImdldEZ1bGxVcmwiLCJ1cmwiLCJiYXNlIiwib2JqIiwiVVJMIiwicHJvdG9jb2wiLCJocmVmIiwiZW5jb2RlRmlsZW5hbWUiLCJyZXBsYWNlIiwibSIsImNvZGUiLCJjaGFyQ29kZUF0IiwiZGVjb2RlRmlsZW5hbWUiLCJmaWxlbmFtZSIsIl9tIiwiZyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwiZ2V0QWN0aXZlVGFiIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93Iiwid2luZG93SWQiLCJ3aW5kb3dzIiwiZ2V0Q3VycmVudCIsIm1zIiwiUHJvbWlzZSIsInRydWVKb2luIiwic2VwYXJhdG9yIiwiZmlsdGVyIiwiam9pbiIsIm5vcm1hbGl6ZUtleXMiLCJBcnJheSIsImlzQXJyYXkiLCJzcGxpdCIsInJhd0tleSIsImtleXMiLCJldmVyeSIsIm9iamVjdFNldCIsInJvb3QiLCJzdWIiLCJsYXN0S2V5Iiwib2JqZWN0UGljayIsInRyYW5zZm9ybSIsInJlZHVjZSIsIm1hcEVudHJ5IiwiZW50cmllcyIsImFsbEVudHJpZXMiLCJmb3JFYWNoS2V5IiwiZm9yRWFjaFZhbHVlIiwiZGVlcEVxdWFsIiwiYSIsImIiLCJrZXlzQSIsImtleXNCIiwiaXNBcHBsaWVkIiwiYXV0b1VwZGF0ZSIsImxhc3RVcGRhdGUiLCJsYXN0TW9kaWZpZWQiLCJzaG93QmFkZ2UiLCJiYWRnZUNvbG9yIiwiYmFkZ2VDb2xvckJsb2NrZWQiLCJleHBvcnRWYWx1ZXMiLCJleHBvcnROYW1lVGVtcGxhdGUiLCJleHBvc2UiLCJjbG9zZUFmdGVySW5zdGFsbCIsInRyYWNrTG9jYWxGaWxlIiwiYXV0b1JlbG9hZCIsImZlYXR1cmVzIiwiYmxhY2tsaXN0Iiwic3luY1NjcmlwdFN0YXR1cyIsInN5bmMiLCJjdXN0b21DU1MiLCJpbXBvcnRTY3JpcHREYXRhIiwiaW1wb3J0U2V0dGluZ3MiLCJub3RpZnlVcGRhdGVzIiwibm90aWZ5VXBkYXRlc0dsb2JhbCIsInZlcnNpb24iLCJkZWZhdWx0SW5qZWN0SW50byIsInhockluamVjdCIsImZpbHRlcnMiLCJzZWFyY2hTY29wZSIsInNob3dPcmRlciIsInNvcnQiLCJ2aWV3U2luZ2xlQ29sdW1uIiwidmlld1RhYmxlIiwiZmlsdGVyc1BvcHVwIiwiZW5hYmxlZEZpcnN0IiwiaGlkZURpc2FibGVkIiwiZWRpdG9yIiwibGluZVdyYXBwaW5nIiwiaW5kZW50V2l0aFRhYnMiLCJpbmRlbnRVbml0IiwidGFiU2l6ZSIsInVuZG9EZXB0aCIsImVkaXRvclRoZW1lIiwiZWRpdG9yVGhlbWVOYW1lIiwiZWRpdG9yV2luZG93IiwiZWRpdG9yV2luZG93UG9zIiwiZWRpdG9yV2luZG93U2ltcGxlIiwic2NyaXB0VGVtcGxhdGUiLCJzY3JpcHRUZW1wbGF0ZUVkaXRlZCIsInVpVGhlbWUiLCJnZXRPcHRpb24iLCJkZWZhdWx0cyIsInNldE9wdGlvbiIsInVwZGF0ZU9wdGlvbnMiLCJleHBhbmRlZERhdGEiLCJzZXQiLCJwYXJzZSIsImhhc2giLCJwYXRobmFtZSIsInNlYXJjaCIsInNlcSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhdGhzIiwic3RhY2siLCJyb3V0ZSIsImxhc3RSb3V0ZSIsInVwZGF0ZVJvdXRlIiwibm9Db25maXJtIiwibG9jYXRpb24iLCJjb25maXJtQ2hhbmdlIiwiYXNzaWduIiwic2V0Um91dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFzaFN0cmluZyIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJwdXNoU3RhdGUiLCJnZXRVbmxvYWRTZW50cnkiLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsImNvbmZpcm1Qb3BTdGF0ZSIsInNob3dDb25maXJtYXRpb24iLCJ0b2dnbGUiLCJzdGF0ZSIsIm9uT2ZmIiwib25VbmxvYWQiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwiZGF0YUNhY2hlIiwiYnJvd3NlclN0b3JhZ2VMb2NhbCIsInN0b3JhZ2UiLCJsb2NhbCIsIm9uU3RvcmFnZUNoYW5nZWQiLCJjaGFuZ2VzIiwibmV3VmFsdWUiLCJwcmVmaXgiLCJzZXREYXRhQ2FjaGUiLCJvbkNoYW5nZWQiLCJnZXRLZXkiLCJnZXRPbmUiLCJnZXRNdWx0aSIsImlkcyIsIm1pc3NpbmdLZXlzIiwiY2FjaGVkIiwiZHVtcCIsInJlbW92ZSIsInJlbW92ZU11bHRpIiwib3V0cHV0IiwibWFrZVJhdyIsIm5vSm9pbiIsInR5cGUiLCJoZWFkZXJzIiwiYm9keSIsImJsb2IyYmFzZTY0IiwibWFrZURhdGFVcmkiLCJyYXciLCJzdGFydHNXaXRoIiwidGVzdCIsImxhc3RJbmRleE9mIiwibW9kIiwicmVxdWlyZSIsIml0ZW1zIiwiZW5zdXJlQXJyYXkiLCJvbkR1bXAiLCJ1YSIsImRlZmluZVByb3BlcnRpZXMiLCJtYXRjaE5hdlVBIiwiZmlyZWZveCIsIndyaXRhYmxlIiwiYWxsIiwiZ2V0UGxhdGZvcm1JbmZvIiwiZ2V0QnJvd3NlckluZm8iLCJvcyIsImFyY2giLCJicm93c2VyTmFtZSIsImJyb3dzZXJWZXJzaW9uIiwicGFyc2VGbG9hdCIsImFzQ2hyb21lIiwiYXNTdHJpbmciLCJyZSIsIlJlZ0V4cCIsInZlciIsInVzZXJBZ2VudCIsIm1hdGNoIiwiZ2V0TWVzc2FnZSIsInBhcmFtIiwibWVtb2l6ZSIsInJlc29sdmVyIiwiY2FjaGVNYXAiLCJtZW1vaXplZCIsImRlYm91bmNlIiwidGltZSIsInN0YXJ0VGltZSIsIk1hdGgiLCJtYXgiLCJjaGVja1RpbWUiLCJjaGVja1RpbWVyIiwiZGVsdGEiLCJkZWJvdW5jZWRGdW5jdGlvbiIsInRocm90dGxlIiwibGFzdFRpbWUiLCJ0aHJvdHRsZWRGdW5jdGlvbiIsImdldFVuaXFJZCIsImZsb29yIiwicmFuZG9tIiwiYnVmZmVyMnN0cmluZyIsImJ1ZiIsIm9mZnNldCIsInNsaWNlU2l6ZSIsInNsaWNlcyIsImFycmF5TGVuIiwiZW5kIiwibWluIiwiYnl0ZUxlbmd0aCIsIm5lZWRzU2xpY2luZyIsIlVpbnQ4QXJyYXkiLCJibG9iIiwic2l6ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwic3RyaW5nMnVpbnQ4YXJyYXkiLCJzdHIiLCJsZW4iLCJhcnJheSIsIlZFUlNJT05fUkUiLCJESUdJVFNfUkUiLCJjb21wYXJlVmVyc2lvbiIsInZlcjEiLCJ2ZXIyIiwibWFpbjEiLCJwcmUxIiwiZXhlYyIsIm1haW4yIiwicHJlMiIsImNvbXBhcmVWZXJzaW9uQ2h1bmsiLCJpc1NlbXZlck1vZGUiLCJwYXJ0czEiLCJwYXJ0czIiLCJsZW4xIiwibGVuMiIsInVuaXRzIiwiZm9ybWF0VGltZSIsImR1cmF0aW9uIiwidW5pdEluZm8iLCJzdGVwIiwiZm9ybWF0Qnl0ZUxlbmd0aCIsInRvRml4ZWQiLCJpc0VtcHR5IiwiYmluYXJ5VHlwZXMiLCJyZXF1ZXN0TG9jYWxGaWxlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJyZXNwb25zZVR5cGUiLCJvcGVuIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiSlNPTiIsIm9uZXJyb3IiLCJzZW5kIiwiRk9SQ0VEX0FDQ0VQVCIsImlzUmVtb3RlIiwicmVxdWVzdCIsImlzQm9keU9iaiIsImhvc3RuYW1lIiwiYWNjZXB0IiwiaW5pdCIsInN0cmluZ2lmeSIsInJlc3AiLCJmZXRjaCIsImxvYWRNZXRob2QiLCJhcnJheWJ1ZmZlciIsImpzb24iLCJTSU1QTEVfVkFMVUVfVFlQRSIsInN0cmluZyIsIm51bWJlciIsImJvb2xlYW4iLCJkdW1wU2NyaXB0VmFsdWUiLCJqc29uRHVtcCIsInNpbXBsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUQiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLy8gU2luY2UgdGhpcyBhbHNvIHJ1bnMgaW4gYSBjb250ZW50IHNjcmlwdCB3ZSdsbCBndWFyZCBhZ2FpbnN0IGltcGxpY2l0IGdsb2JhbCB2YXJpYWJsZXNcbi8vIGZvciBET00gZWxlbWVudHMgd2l0aCAnaWQnIGF0dHJpYnV0ZSB3aGljaCBpcyBhIHN0YW5kYXJkIGZlYXR1cmUsIG1vcmUgaW5mbzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9wdWxsLzE1M1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvd2luZG93LW9iamVjdC5odG1sI25hbWVkLWFjY2Vzcy1vbi10aGUtd2luZG93LW9iamVjdFxuaWYgKCFJU19GSVJFRk9YICYmICFnbG9iYWwuYnJvd3Nlcj8ucnVudGltZSkge1xuICAvLyByZWdpb24gQ2hyb21lXG4gIGNvbnN0IHsgY2hyb21lLCBQcm94eTogUHJveHlTYWZlIH0gPSBnbG9iYWw7XG4gIGNvbnN0IHsgYXBwbHksIGJpbmQgfSA9IFByb3h5U2FmZTtcbiAgY29uc3QgTUVTU0FHRSA9ICdtZXNzYWdlJztcbiAgY29uc3QgU1RBQ0sgPSAnc3RhY2snO1xuICBjb25zdCBpc1N5bmNNZXRob2ROYW1lID0ga2V5ID0+IGtleSA9PT0gJ2FkZExpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ2hhc0xpc3RlbmVyJ1xuICAgIHx8IGtleSA9PT0gJ2hhc0xpc3RlbmVycyc7XG4gIC8qKiBBUEkgdHlwZXMgb3IgZW51bXMgb3IgbGl0ZXJhbCBjb25zdGFudHMgKi9cbiAgY29uc3QgaXNGdW5jdGlvbiA9IHZhbCA9PiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nO1xuICBjb25zdCBpc09iamVjdCA9IHZhbCA9PiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcbiAgY29uc3QgcHJveGlmeVZhbHVlID0gKHRhcmdldCwga2V5LCBzcmMsIG1ldGFWYWwpID0+IHtcbiAgICBjb25zdCBzcmNWYWwgPSBzcmNba2V5XTtcbiAgICBpZiAoc3JjVmFsID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBsZXQgcmVzO1xuICAgIGlmIChpc0Z1bmN0aW9uKG1ldGFWYWwpKSB7XG4gICAgICByZXMgPSBtZXRhVmFsKHNyYywgc3JjVmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oc3JjVmFsKSkge1xuICAgICAgcmVzID0gbWV0YVZhbCA9PT0gMCB8fCBpc1N5bmNNZXRob2ROYW1lKGtleSkgfHwgIXNyYzo6aGFzT3duUHJvcGVydHkoa2V5KVxuICAgICAgICA/IHNyY1ZhbDo6YmluZChzcmMpXG4gICAgICAgIDogd3JhcEFzeW5jKHNyYywgc3JjVmFsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3Qoc3JjVmFsKSAmJiBtZXRhVmFsICE9PSAwKSB7XG4gICAgICByZXMgPSBwcm94aWZ5R3JvdXAoc3JjVmFsLCBtZXRhVmFsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBzcmNWYWw7XG4gICAgfVxuICAgIHRhcmdldFtrZXldID0gcmVzO1xuICAgIHJldHVybiByZXM7XG4gIH07XG4gIGNvbnN0IHByb3hpZnlHcm91cCA9IChzcmMsIG1ldGEpID0+IG5ldyBQcm94eVNhZmUoe30sIHtcbiAgICBnZXQ6IChncm91cCwga2V5KSA9PiBncm91cFtrZXldID8/IHByb3hpZnlWYWx1ZShncm91cCwga2V5LCBzcmMsIG1ldGE/LltrZXldKSxcbiAgfSk7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyAtIG9yaWdpbmFsIEFQSSBncm91cFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIC0gb3JpZ2luYWwgQVBJIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7V3JhcEFzeW5jUHJlcHJvY2Vzc29yRnVuY30gW3ByZXByb2Nlc3NvckZ1bmNdIC0gbW9kaWZpZXMgdGhlIEFQSSBjYWxsYmFjaydzIHJlc3BvbnNlXG4gICAgKi9cbiAgY29uc3Qgd3JhcEFzeW5jID0gKHRoaXNBcmcsIGZ1bmMsIHByZXByb2Nlc3NvckZ1bmMpID0+IChcbiAgICAoLi4uYXJncykgPT4ge1xuICAgICAgbGV0IHJlc29sdmU7XG4gICAgICBsZXQgcmVqZWN0O1xuICAgICAgLyogVXNpbmcgcmVzb2x2ZS9yZWplY3QgdG8gY2FsbCBBUEkgaW4gdGhlIHNjb3BlIG9mIHRoaXMgZnVuY3Rpb24sIG5vdCBpbnNpZGUgUHJvbWlzZSxcbiAgICAgICAgIGJlY2F1c2UgYW4gQVBJIHZhbGlkYXRpb24gZXhjZXB0aW9uIGlzIHRocm93biBzeW5jaHJvbm91c2x5IGJvdGggaW4gQ2hyb21lIGFuZCBGRlxuICAgICAgICAgc28gdGhlIGNhbGxlciBjYW4gdXNlIHRyeS9jYXRjaCB0byBkZXRlY3QgaXQgbGlrZSB3ZSd2ZSBiZWVuIGRvaW5nIGluIGljb24uanMgKi9cbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZVNhZmUoKF9yZXNvbHZlLCBfcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZTtcbiAgICAgICAgcmVqZWN0ID0gX3JlamVjdDtcbiAgICAgIH0pO1xuICAgICAgLy8gTWFrZSB0aGUgZXJyb3IgbWVzc2FnZXMgYWN0dWFsbHkgdXNlZnVsIGJ5IGNhcHR1cmluZyBhIHJlYWwgc3RhY2tcbiAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IG5ldyBFcnJvclNhZmUoYGNhbGxzdGFjayBiZWZvcmUgaW52b2tpbmcgJHtmdW5jLm5hbWUgfHwgJ2Nocm9tZSBBUEknfTpgKTtcbiAgICAgIC8vIEEgc2luZ2xlIHBhcmFtZXRlciBgcmVzdWx0YCBpcyBmaW5lIGJlY2F1c2Ugd2UgZG9uJ3QgdXNlIEFQSSB0aGF0IHJldHVybiBtb3JlXG4gICAgICBhcmdzW2FyZ3MubGVuZ3RoXSA9IHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bnRpbWVFcnIgPSBjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XG4gICAgICAgIGNvbnN0IGVyciA9IHJ1bnRpbWVFcnIgfHwgKFxuICAgICAgICAgIHByZXByb2Nlc3NvckZ1bmNcbiAgICAgICAgICAgID8gcHJlcHJvY2Vzc29yRnVuYyhyZXNvbHZlLCByZXN1bHQpXG4gICAgICAgICAgICA6IHJlc29sdmUocmVzdWx0KVxuICAgICAgICApO1xuICAgICAgICAvLyBQcmVmZXIgYHJlamVjdGAgb3ZlciBgdGhyb3dgIHdoaWNoIHN0b3BzIGRlYnVnZ2VyIGluICdwYXVzZSBvbiBleGNlcHRpb25zJyBtb2RlXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBpZiAoIXJ1bnRpbWVFcnIpIHN0YWNrSW5mb1tTVEFDS10gPSBgJHtlcnJbMV19XFxuJHtzdGFja0luZm9bU1RBQ0tdfWA7XG4gICAgICAgICAgc3RhY2tJbmZvW01FU1NBR0VdID0gcnVudGltZUVyciA/IGVycltNRVNTQUdFXSA6IGAke2VyclswXX1gO1xuICAgICAgICAgIHN0YWNrSW5mby5pc1J1bnRpbWUgPSAhIXJ1bnRpbWVFcnI7XG4gICAgICAgICAgcmVqZWN0KHN0YWNrSW5mbyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuSVNfSU5KRUNURUQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmdW5jOjphcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmIChlW01FU1NBR0VdID09PSAnRXh0ZW5zaW9uIGNvbnRleHQgaW52YWxpZGF0ZWQuJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHJlbG9hZCB0aGUgdGFiIHRvIHJlc3RvcmUgVmlvbGVudG1vbmtleSBBUEkgZm9yIHVzZXJzY3JpcHRzLicpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVuYzo6YXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHByb21pc2UuY2F0Y2goZXJyID0+IGNvbnNvbGUud2FybihhcmdzLCBlcnI/LltNRVNTQUdFXSB8fCBlcnIpKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgKTtcbiAgLy8gQm90aCByZXN1bHQgYW5kIGVycm9yIG11c3QgYmUgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYXZvaWQgcHJvdG90eXBlIGVhdmVzZHJvcHBpbmdcbiAgY29uc3Qgd3JhcFN1Y2Nlc3MgPSByZXN1bHQgPT4gW1xuICAgIHJlc3VsdCxcbiAgICBudWxsLFxuICBdO1xuICAvLyBCb3RoIHJlc3VsdCBhbmQgZXJyb3IgbXVzdCBiZSBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBhdm9pZCBwcm90b3R5cGUgZWF2ZXNkcm9wcGluZ1xuICBjb25zdCB3cmFwRXJyb3IgPSBlcnIgPT4gcHJvY2Vzcy5lbnYuREVCVUcgJiYgY29uc29sZS53YXJuKGVycikgfHwgW1xuICAgIG51bGwsXG4gICAgZXJyIGluc3RhbmNlb2YgRXJyb3JTYWZlXG4gICAgICA/IFtlcnJbTUVTU0FHRV0sIGVycltTVEFDS11dXG4gICAgICA6IFtlcnIsICcnXSxcbiAgXTtcbiAgY29uc3Qgc2VuZFJlc3BvbnNlQXN5bmMgPSBhc3luYyAocmVzdWx0LCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0O1xuICAgICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSBjb25zb2xlLmluZm8oJ3NlbmQnLCByZXN1bHQpO1xuICAgICAgc2VuZFJlc3BvbnNlKHdyYXBTdWNjZXNzKHJlc3VsdCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2VuZFJlc3BvbnNlKHdyYXBFcnJvcihlcnIpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uTWVzc2FnZUxpc3RlbmVyID0gKGxpc3RlbmVyLCBtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5pbmZvKCdyZWNlaXZlJywgbWVzc2FnZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlcik7XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdDo6b2JqZWN0VG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nKSB7XG4gICAgICAgIHNlbmRSZXNwb25zZUFzeW5jKHJlc3VsdCwgc2VuZFJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvLyBJbiBzb21lIGJyb3dzZXJzIChlLmcgQ2hyb21lIDU2LCBWaXZhbGRpKSwgdGhlIGxpc3RlbmVyIGluXG4gICAgICAvLyBwb3B1cCBwYWdlcyBhcmUgbm90IHByb3Blcmx5IGNsZWFyZWQgYWZ0ZXIgY2xvc2VkLlxuICAgICAgLy8gVGhleSBtYXkgc2VuZCBgdW5kZWZpbmVkYCBiZWZvcmUgdGhlIHJlYWwgcmVzcG9uc2UgaXMgc2VudC5cbiAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZW5kUmVzcG9uc2Uod3JhcFN1Y2Nlc3MocmVzdWx0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZW5kUmVzcG9uc2Uod3JhcEVycm9yKGVycikpO1xuICAgIH1cbiAgfTtcbiAgLyoqIEB0eXBlIHtXcmFwQXN5bmNQcmVwcm9jZXNzb3JGdW5jfSAqL1xuICBjb25zdCB1bndyYXBSZXNwb25zZSA9IChyZXNvbHZlLCByZXNwb25zZSkgPT4gKFxuICAgICFyZXNwb25zZSAmJiAnbnVsbCByZXNwb25zZSdcbiAgICB8fCByZXNwb25zZVsxXSAvLyBlcnJvciBjcmVhdGVkIGluIHdyYXBFcnJvclxuICAgIHx8IHJlc29sdmUocmVzcG9uc2VbMF0pIC8vIHJlc3VsdCBjcmVhdGVkIGluIHdyYXBTdWNjZXNzXG4gICk7XG4gIGNvbnN0IHdyYXBTZW5kTWVzc2FnZSA9IChydW50aW1lLCBzZW5kTWVzc2FnZSkgPT4gKFxuICAgIHdyYXBBc3luYyhydW50aW1lLCBzZW5kTWVzc2FnZSwgdW53cmFwUmVzcG9uc2UpXG4gICk7XG4gIC8qKlxuICAgKiAwID0gbm9uLWFzeW5jIG1ldGhvZCBvciB0aGUgZW50aXJlIGdyb3VwXG4gICAqIGZ1bmN0aW9uID0gdHJhbnNmb3JtZXIgbGlrZSAob3JpZ2luYWxPYmosIG9yaWdpbmFsRnVuYyk6IGZ1bmN0aW9uXG4gICAqL1xuICBnbG9iYWwuYnJvd3NlciA9IHByb3hpZnlHcm91cChjaHJvbWUsIHtcbiAgICBleHRlbnNpb246IDAsIC8vIHdlIGRvbid0IHVzZSBpdHMgYXN5bmMgbWV0aG9kc1xuICAgIGkxOG46IDAsIC8vIHdlIGRvbid0IHVzZSBpdHMgYXN5bmMgbWV0aG9kc1xuICAgIHJ1bnRpbWU6IHtcbiAgICAgIGNvbm5lY3Q6IDAsXG4gICAgICBnZXRNYW5pZmVzdDogMCxcbiAgICAgIGdldFVSTDogMCxcbiAgICAgIG9uTWVzc2FnZToge1xuICAgICAgICBhZGRMaXN0ZW5lcjogKG9uTWVzc2FnZSwgYWRkTGlzdGVuZXIpID0+IChcbiAgICAgICAgICBsaXN0ZW5lciA9PiBvbk1lc3NhZ2U6OmFkZExpc3RlbmVyKG9uTWVzc2FnZUxpc3RlbmVyOjpiaW5kKG51bGwsIGxpc3RlbmVyKSlcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBzZW5kTWVzc2FnZTogd3JhcFNlbmRNZXNzYWdlLFxuICAgIH0sXG4gICAgdGFiczoge1xuICAgICAgY29ubmVjdDogMCxcbiAgICAgIHNlbmRNZXNzYWdlOiB3cmFwU2VuZE1lc3NhZ2UsXG4gICAgfSxcbiAgfSk7XG4gIC8vIGVuZHJlZ2lvblxufSBlbHNlIGlmIChwcm9jZXNzLmVudi5ERUJVRyAmJiBJU19GSVJFRk9YKSB7XG4gIC8vIHJlZ2lvbiBGaXJlZm94XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovLy8gdGhpcyBpcyBhIGRlYnVnLW9ubHkgc2VjdGlvblxuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IHsgcnVudGltZSB9ID0gZ2xvYmFsLmJyb3dzZXI7XG4gIGNvbnN0IHsgc2VuZE1lc3NhZ2UsIG9uTWVzc2FnZSB9ID0gcnVudGltZTtcbiAgY29uc3QgbG9nID0gKHR5cGUsIGFyZ3MsIGlkLCBpc1Jlc3BvbnNlKSA9PiBjb25zb2xlLmluZm8oXG4gICAgYCR7dHlwZX1NZXNzYWdlIyVkJHtpc1Jlc3BvbnNlID8gJyByZXNwb25zZScgOiAnJ31gLFxuICAgIGlkLFxuICAgIC4uLmFyZ3MsXG4gICk7XG4gIHJ1bnRpbWUuc2VuZE1lc3NhZ2UgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgICBjb25zdCBpZCA9IGNvdW50ZXI7XG4gICAgbG9nKCdzZW5kJywgYXJncywgaWQpO1xuICAgIGNvbnN0IHByb21pc2UgPSBydW50aW1lOjpzZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICBwcm9taXNlLnRoZW4oZGF0YSA9PiBsb2coJ3NlbmQnLCBbZGF0YV0sIGlkLCB0cnVlKSwgY29uc29sZS53YXJuKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcbiAgY29uc3QgeyBhZGRMaXN0ZW5lciB9ID0gb25NZXNzYWdlO1xuICBvbk1lc3NhZ2UuYWRkTGlzdGVuZXIgPSAobGlzdGVuZXIpID0+IG9uTWVzc2FnZTo6YWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyKSA9PiB7XG4gICAgY291bnRlciArPSAxO1xuICAgIGNvbnN0IGlkID0gY291bnRlcjtcbiAgICBjb25zdCB7IGZyYW1lSWQsIHRhYiwgdXJsIH0gPSBzZW5kZXI7XG4gICAgbG9nKCdvbicsIFttc2csIHsgZnJhbWVJZCwgdGFiLCB1cmwgfV0sIGlkKTtcbiAgICBjb25zdCByZXN1bHQgPSBsaXN0ZW5lcihtc2csIHNlbmRlcik7XG4gICAgKHR5cGVvZiByZXN1bHQ/LnRoZW4gPT09ICdmdW5jdGlvbicgPyByZXN1bHQgOiBQcm9taXNlU2FmZS5yZXNvbHZlKHJlc3VsdCkpXG4gICAgLnRoZW4oZGF0YSA9PiBsb2coJ29uJywgW2RhdGFdLCBpZCwgdHJ1ZSksIGNvbnNvbGUud2Fybik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbiAgLy8gZW5kcmVnaW9uXG59XG5cbi8qKlxuICogQGNhbGxiYWNrIFdyYXBBc3luY1ByZXByb2Nlc3NvckZ1bmNcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oYW55KX0gcmVzb2x2ZSAtIGNhbGxlZCBvbiBzdWNjZXNzXG4gKiBAcGFyYW0ge2FueX0gcmVzcG9uc2UgLSBBUEkgY2FsbGJhY2sncyByZXNwb25zZVxuICogQHJldHVybnMgez9zdHJpbmdbXX0gLSBbZXJyb3JNZXNzYWdlLCBlcnJvclN0YWNrXSBhcnJheSBvbiBlcnJvclxuICovXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0Q2FjaGUoe1xuICBsaWZldGltZTogZGVmYXVsdExpZmV0aW1lID0gMzAwMCxcbiAgb25EaXNwb3NlLFxufSA9IHt9KSB7XG4gIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIHNldFRpbWVvdXQgY2FsbCBpcyB2ZXJ5IGV4cGVuc2l2ZSB3aGVuIGRvbmUgZnJlcXVlbnRseSxcbiAgLy8gMTAwMCBjYWxscyBwZXJmb3JtZWQgZm9yIDUwIHNjcmlwdHMgY29uc3VtZSA1MG1zIG9uIGVhY2ggdGFiIGxvYWQsXG4gIC8vIHNvIHdlJ2xsIHNjaGVkdWxlIHRyaW0oKSBqdXN0IG9uY2UgcGVyIGV2ZW50IGxvb3AgY3ljbGUsXG4gIC8vIGFuZCB0aGVuIHRyaW0oKSB3aWxsIHRyaW0gdGhlIGNhY2hlIGFuZCByZXNjaGVkdWxlIGl0c2VsZiB0byB0aGUgZWFybGllc3QgZXhwaXJ5IHRpbWUuXG4gIGxldCB0aW1lcjtcbiAgbGV0IG1pbkxpZmV0aW1lID0gLTE7XG4gIC8vIHNhbWUgZ29lcyBmb3IgdGhlIHBlcmZvcm1hbmNlLm5vdygpIHVzZWQgYnkgaGl0KCkgYW5kIHB1dCgpIHdoaWNoIGlzIHdoeSB3ZSBleHBvc2UgYmF0Y2godHJ1ZSlcbiAgLy8gdG8gc3RhcnQgYW4gb3BlcmF0aW9uIHRoYXQgcmV1c2VzIHRoZSBzYW1lIHZhbHVlIG9mIG5vdygpLCBhbmQgYmF0Y2goZmFsc2UpIHRvIGVuZCBpdFxuICBsZXQgYmF0Y2hTdGFydGVkO1xuICBsZXQgYmF0Y2hTdGFydFRpbWU7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXR1cm4tYXNzaWduXG4gIGNvbnN0IGdldE5vdyA9ICgpID0+IGJhdGNoU3RhcnRlZCAmJiBiYXRjaFN0YXJ0VGltZSB8fCAoYmF0Y2hTdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSk7XG4gIC8qKiBAbmFtZXNwYWNlIFZNQ2FjaGUgKi9cbiAgcmV0dXJuIHtcbiAgICBiYXRjaCwgZ2V0LCBnZXRWYWx1ZXMsIHBvcCwgcHV0LCBkZWwsIGhhcywgaGl0LCBkZXN0cm95LFxuICB9O1xuICBmdW5jdGlvbiBiYXRjaChlbmFibGUpIHtcbiAgICBiYXRjaFN0YXJ0ZWQgPSBlbmFibGU7XG4gICAgYmF0Y2hTdGFydFRpbWUgPSAwO1xuICB9XG4gIGZ1bmN0aW9uIGdldChrZXksIGRlZiwgc2hvdWxkSGl0ID0gdHJ1ZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBjYWNoZVtrZXldO1xuICAgIGlmIChpdGVtICYmIHNob3VsZEhpdCkge1xuICAgICAgcmVzY2hlZHVsZShpdGVtLCBpdGVtLmxpZmV0aW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW0gPyBpdGVtLnZhbHVlIDogZGVmO1xuICB9XG4gIGZ1bmN0aW9uIGdldFZhbHVlcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhjYWNoZSkubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gcG9wKGtleSwgZGVmKSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXQoa2V5LCBkZWYpO1xuICAgIGRlbChrZXkpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBmdW5jdGlvbiBwdXQoa2V5LCB2YWx1ZSwgbGlmZXRpbWUpIHtcbiAgICByZXNjaGVkdWxlKGNhY2hlW2tleV0gPSBsaWZldGltZSA/IHsgdmFsdWUsIGxpZmV0aW1lIH0gOiB7IHZhbHVlIH0sIGxpZmV0aW1lKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgZnVuY3Rpb24gZGVsKGtleSkge1xuICAgIGNvbnN0IGRhdGEgPSBjYWNoZVtrZXldO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBkZWxldGUgY2FjaGVba2V5XTtcbiAgICAgIG9uRGlzcG9zZT8uKGRhdGEudmFsdWUsIGtleSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICByZXR1cm4gY2FjaGVba2V5XTtcbiAgfVxuICBmdW5jdGlvbiBoaXQoa2V5LCBsaWZldGltZSkge1xuICAgIGNvbnN0IGVudHJ5ID0gY2FjaGVba2V5XTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIHJlc2NoZWR1bGUoZW50cnksIGxpZmV0aW1lKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAvLyBkZWxldGUgYWxsIGtleXMgdG8gbWFrZSBzdXJlIG9uRGlzcG9zZSBpcyBjYWxsZWQgZm9yIGVhY2ggdmFsdWVcbiAgICBpZiAob25EaXNwb3NlKSB7XG4gICAgICAvLyBjYWNoZSBpbmhlcml0cyBudWxsIHNvIHdlIGRvbid0IG5lZWQgdG8gY2hlY2sgaGFzT3duUHJvcGVydHlcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGNhY2hlKSB7XG4gICAgICAgIGRlbChrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSAwO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2NoZWR1bGUoZW50cnksIGxpZmV0aW1lID0gZGVmYXVsdExpZmV0aW1lKSB7XG4gICAgZW50cnkuZXhwaXJ5ID0gbGlmZXRpbWUgKyBnZXROb3coKTtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGlmIChsaWZldGltZSA+PSBtaW5MaWZldGltZSkgcmV0dXJuO1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9XG4gICAgbWluTGlmZXRpbWUgPSBsaWZldGltZTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQodHJpbSwgbGlmZXRpbWUpO1xuICB9XG4gIGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgLy8gbmV4dCB0aW1lciB3b24ndCBiZSBhYmxlIHRvIHJ1biBlYXJsaWVyIHRoYW4gMTBtc1xuICAgIC8vIHNvIHdlJ2xsIHN3ZWVwIHRoZSB1cGNvbWluZyBleHBpcmVkIGVudHJpZXMgaW4gdGhpcyBydW5cbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKSArIDEwO1xuICAgIGxldCBjbG9zZXN0RXhwaXJ5ID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAoY29uc3Qga2V5IGluIGNhY2hlKSB7XG4gICAgICBjb25zdCB7IGV4cGlyeSB9ID0gY2FjaGVba2V5XTtcbiAgICAgIGlmIChleHBpcnkgPCBub3cpIHtcbiAgICAgICAgZGVsKGtleSk7XG4gICAgICB9IGVsc2UgaWYgKGV4cGlyeSA8IGNsb3Nlc3RFeHBpcnkpIHtcbiAgICAgICAgY2xvc2VzdEV4cGlyeSA9IGV4cGlyeTtcbiAgICAgIH1cbiAgICB9XG4gICAgbWluTGlmZXRpbWUgPSBjbG9zZXN0RXhwaXJ5IC0gbm93O1xuICAgIHRpbWVyID0gY2xvc2VzdEV4cGlyeSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gICAgICA/IHNldFRpbWVvdXQodHJpbSwgbWluTGlmZXRpbWUpXG4gICAgICA6IDA7XG4gIH1cbn1cbiIsIi8vIFNBRkVUWSBXQVJOSU5HISBFeHBvcnRzIHVzZWQgYnkgYGluamVjdGVkYCBtdXN0IG1ha2UgOjpzYWZlKCkgY2FsbHMgYW5kIHVzZSBfX3Byb3RvX186bnVsbFxuXG4vLyBmb3IgZ2xvYmFsIGV2ZW50IGJ1cyBhbmQgc2F2ZSBzb21lIGJ1aWxkIGluIGluZm9cbmV4cG9ydCBjb25zdCBJU19ERVYgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IEtFWV9HTE9CQUxfSUQgPSAnX0dMT0JBTF9JRF8nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX0lOX1NDUklQVF9TUkMgPSAnaHR0cHM6Ly9taXJhLTEyNTU4MzA5OTMuY29zLmFwLXNoYW5naGFpLm15cWNsb3VkLmNvbS9sYWIvcGx1Z2luL2Jhc2UudXNlci5qcyc7XG5cbmV4cG9ydCBjb25zdCBJTkpFQ1RfQVVUTyA9ICdhdXRvJztcbmV4cG9ydCBjb25zdCBJTkpFQ1RfUEFHRSA9ICdwYWdlJztcbmV4cG9ydCBjb25zdCBJTkpFQ1RfQ09OVEVOVCA9ICdjb250ZW50JztcblxuZXhwb3J0IGNvbnN0IElOSkVDVF9NQVBQSU5HID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIC8vIGBhdXRvYCB0cmllcyB0byBwcm92aWRlIGB3aW5kb3dgIGZyb20gdGhlIHJlYWwgcGFnZSBhcyBgdW5zYWZlV2luZG93YFxuICBbSU5KRUNUX0FVVE9dOiBbSU5KRUNUX1BBR0UsIElOSkVDVF9DT05URU5UXSxcbiAgLy8gaW5qZWN0IGludG8gcGFnZSBjb250ZXh0XG4gIFtJTkpFQ1RfUEFHRV06IFtJTkpFQ1RfUEFHRV0sXG4gIC8vIGluamVjdCBpbnRvIGNvbnRlbnQgY29udGV4dCBvbmx5XG4gIFtJTkpFQ1RfQ09OVEVOVF06IFtJTkpFQ1RfQ09OVEVOVF0sXG59O1xuXG5leHBvcnQgY29uc3QgQ01EX1NDUklQVF9BREQgPSAnQWRkU2NyaXB0JztcbmV4cG9ydCBjb25zdCBDTURfU0NSSVBUX1VQREFURSA9ICdVcGRhdGVTY3JpcHQnO1xuXG4vLyBBbGxvdyBtZXRhZGF0YSBsaW5lcyB0byBzdGFydCB3aXRoIFdISVRFU1BBQ0U/ICcvLycgU1BBQ0Vcbi8vIEFsbG93IGFueXRoaW5nIHRvIGZvbGxvdyB0aGUgcHJlZGVmaW5lZCB0ZXh0IG9mIHRoZSBtZXRhU3RhcnQvRW5kXG4vLyBUaGUgU1BBQ0UgbXVzdCBiZSBvbiB0aGUgc2FtZSBsaW5lIGFuZCBzcGVjaWZpY2FsbHkgXFx4MjAgYXMgXFxzIHdvdWxkIGFsc28gbWF0Y2ggXFxyXFxuXFx0XG4vLyBOb3RlOiB3aGVuIHRoZXJlJ3Mgbm8gdmFsaWQgbWV0YWJsb2NrLCBhbiBlbXB0eSBzdHJpbmcgaXMgbWF0Y2hlZCBmb3IgY29udmVuaWVuY2VcbmV4cG9ydCBjb25zdCBNRVRBQkxPQ0tfUkUgPSAvKD86XnxcXG4pXFxzKlxcL1xcL1xceDIwPT1Vc2VyU2NyaXB0PT0oW1xcc1xcU10qP1xcbilcXHMqXFwvXFwvXFx4MjA9PVxcL1VzZXJTY3JpcHQ9PXwkLztcblxuZXhwb3J0IGNvbnN0IElOSkVDVEFCTEVfVEFCX1VSTF9SRSA9IC9eKGh0dHBzP3xmaWxlfGZ0cHM/KTovO1xuXG4vLyBgYnJvd3NlcmAgaXMgYSBsb2NhbCB2YXJpYWJsZSBzaW5jZSB3ZSByZW1vdmUgdGhlIGdsb2JhbCBgY2hyb21lYCBhbmQgYGJyb3dzZXJgIGluIGluamVjdGVkKlxuLy8gdG8gcHJldmVudCBleHBvc2luZyB0aGVtIHRvIHVzZXJzY3JpcHRzIHdpdGggYEBpbmplY3QtaW50byBjb250ZW50YFxuZXhwb3J0IGNvbnN0IHsgYnJvd3NlciB9ID0gZ2xvYmFsO1xuXG4vLyBzZXRUaW1lb3V0IHRydW5jYXRlcyB0aGUgZGVsYXkgdG8gYSAzMi1iaXQgc2lnbmVkIGludGVnZXIgc28gdGhlIG1heCBkZWxheSBpcyB+MjQgZGF5c1xuZXhwb3J0IGNvbnN0IFRJTUVPVVRfTUFYID0gMHg3RkZGX0ZGRkY7XG5leHBvcnQgY29uc3QgVElNRU9VVF9IT1VSID0gNjAgKiA2MCAqIDEwMDA7XG5leHBvcnQgY29uc3QgVElNRU9VVF8yNEhPVVJTID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbmV4cG9ydCBjb25zdCBUSU1FT1VUX1dFRUsgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcbiIsImltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5cbmNvbnN0IGhhbmRsZXJzID0ge1xuICBVcGRhdGVPcHRpb25zKGRhdGEpIHtcbiAgICBvcHRpb25zLnVwZGF0ZShkYXRhKTtcbiAgfSxcbn07XG5cbmJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcywgc3JjKSA9PiB7XG4gIGNvbnN0IGhhbmRsZSA9IGhhbmRsZXJzW3Jlcy5jbWRdO1xuICBpZiAoaGFuZGxlKSBoYW5kbGUocmVzLmRhdGEsIHNyYyk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcnM7XG4iLCJpbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgZm9yRWFjaEVudHJ5LCBvYmplY3RHZXQgfSBmcm9tICcuL29iamVjdCc7XG5cbmNvbnN0IGhvb2tzID0ge307XG5cbm9wdGlvbnMuaG9vaygoZGF0YSkgPT4ge1xuICBob29rczo6Zm9yRWFjaEVudHJ5KChba2V5LCBsaXN0XSkgPT4ge1xuICAgIGlmIChsaXN0KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9iamVjdEdldChkYXRhLCBrZXkpO1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIGxpc3QuZm9yRWFjaCh1cGRhdGUgPT4gdXBkYXRlKHZhbHVlKSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob29rU2V0dGluZyhrZXksIHVwZGF0ZSkge1xuICBvcHRpb25zLnJlYWR5LnRoZW4oKCkgPT4gdXBkYXRlKG9wdGlvbnMuZ2V0KGtleSkpKTtcbiAgY29uc3QgbGlzdCA9IGhvb2tzW2tleV0gfHwgKGhvb2tzW2tleV0gPSBbXSk7XG4gIGxpc3QucHVzaCh1cGRhdGUpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGkgPSBsaXN0LmluZGV4T2YodXBkYXRlKTtcbiAgICBpZiAoaSA+PSAwKSBsaXN0LnNwbGljZShpLCAxKTtcbiAgfTtcbn1cbiIsIi8vIFNBRkVUWSBXQVJOSU5HISBFeHBvcnRzIHVzZWQgYnkgYGluamVjdGVkYCBtdXN0IG1ha2UgOjpzYWZlKCkgY2FsbHMgYW5kIHVzZSBfX3Byb3RvX186bnVsbFxuXG5pbXBvcnQgeyBicm93c2VyIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnLi9vYmplY3QnO1xuaW1wb3J0IHsgaTE4biwgbm9vcCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCB7IG5vcm1hbGl6ZUtleXMgfSBmcm9tICcuL29iamVjdCc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEltYWdlID0gJy9wdWJsaWMvaW1hZ2VzL2ljb24xMjgucG5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIb29rcygpIHtcbiAgY29uc3QgaG9va3MgPSBbXTtcblxuICBmdW5jdGlvbiBmaXJlKGRhdGEpIHtcbiAgICBob29rcy5zbGljZSgpLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICBjYihkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhvb2soY2FsbGJhY2spIHtcbiAgICBob29rcy5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgaSA9IGhvb2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGkgPj0gMCkgaG9va3Muc3BsaWNlKGksIDEpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4geyBob29rLCBmaXJlIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBgaW5qZWN0ZWRgXG4gKiBAcGFyYW0ge3N0cmluZ30gY21kXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIHt7cmV0cnk/OiBib29sZWFuLCBpZ25vcmVFcnJvcj86IGJvb2xlYW59fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kQ21kKGNtZCwgZGF0YSwgb3B0aW9ucykge1xuICByZXR1cm4gc2VuZE1lc3NhZ2UoeyBjbWQsIGRhdGEgfSwgb3B0aW9ucyk7XG59XG5cbi8vIFRoZXNlIG5lZWQgYHNyY2AgcGFyYW1ldGVyIHNvIHdlJ2xsIHVzZSBzZW5kQ21kIGZvciB0aGVtLiBXZSBjb3VsZCBoYXZlIGZvcmdlZCBgc3JjYCB2aWFcbi8vIGJyb3dzZXIudGFicy5nZXRDdXJyZW50IGJ1dCB0aGVyZSdzIG5vIG5lZWQgYXMgdGhleSBub3JtYWxseSB1c2Ugb25seSBhIHRpbnkgYW1vdW50IG9mIGRhdGEuXG5jb25zdCBDT01NQU5EU19XSVRIX1NSQyA9IFtcbiAgJ0NvbmZpcm1JbnN0YWxsJyxcbiAgJ05vdGlmaWNhdGlvbicsXG4gICdUYWJDbG9zZScsXG4gICdUYWJGb2N1cycsXG4gICdUYWJPcGVuJyxcbiAgJ1VwZGF0ZVZhbHVlJyxcbi8qXG4gIFRoZXNlIGFyZSB1c2VkIG9ubHkgYnkgY29udGVudCBzY3JpcHRzIHdoZXJlIHNlbmRDbWREaXJlY3RseSBjYW4ndCBiZSB1c2VkIGFueXdheVxuICAnR2V0SW5qZWN0ZWQnLFxuICAnR2V0UmVxdWVzdElkJyxcbiAgJ0h0dHBSZXF1ZXN0JyxcbiAgJ0luamVjdGlvbkZlZWRiYWNrJyxcbiAgJ1NldFBvcHVwJyxcbiovXG5dO1xuY29uc3QgZ2V0QmdQYWdlID0gKCkgPT4gYnJvd3Nlci5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2U/LigpO1xuXG4vKipcbiAqIFNlbmRzIHRoZSBjb21tYW5kK2RhdGEgZGlyZWN0bHkgc28gaXQncyBzeW5jaHJvbm91cyBhbmQgZmFzdGVyIHRoYW4gc2VuZENtZCB0aGFua3MgdG8gZGVlcENvcHkuXG4gKiBXQVJOSU5HISBNYWtlIHN1cmUgYGNtZGAgaGFuZGxlciBkb2Vzbid0IHVzZSBgc3JjYCBvciBgY21kYCBpcyBsaXN0ZWQgaW4gQ09NTUFORFNfV0lUSF9TUkMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kQ21kRGlyZWN0bHkoY21kLCBkYXRhLCBvcHRpb25zKSB7XG4gIGNvbnN0IGJnID0gIUNPTU1BTkRTX1dJVEhfU1JDLmluY2x1ZGVzKGNtZCkgJiYgZ2V0QmdQYWdlKCk7XG4gIHJldHVybiBiZyAmJiBiZyAhPT0gd2luZG93ICYmIGJnLmRlZXBDb3B5XG4gICAgPyBiZy5oYW5kbGVDb21tYW5kTWVzc2FnZShiZy5kZWVwQ29weSh7IGNtZCwgZGF0YSB9KSkudGhlbihkZWVwQ29weSlcbiAgICA6IHNlbmRDbWQoY21kLCBkYXRhLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiSWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbWRcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcGFyYW0ge3tmcmFtZUlkPzogbnVtYmVyfX0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZFRhYkNtZCh0YWJJZCwgY21kLCBkYXRhLCBvcHRpb25zKSB7XG4gIHJldHVybiBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgY21kLCBkYXRhIH0sIG9wdGlvbnMpLmNhdGNoKG5vb3ApO1xufVxuXG4vLyBVc2VkIGJ5IGBpbmplY3RlZGBcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZShwYXlsb2FkLCB7IHJldHJ5IH0gPSB7fSkge1xuICBpZiAocmV0cnkpIHJldHVybiBzZW5kTWVzc2FnZVJldHJ5KHBheWxvYWQpO1xuICBsZXQgcHJvbWlzZSA9IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShwYXlsb2FkKTtcbiAgLy8gSWdub3JpbmcgZXJyb3JzIHdoZW4gc2VuZGluZyBmcm9tIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdCBiZWNhdXNlIGl0J3MgYSBicm9hZGNhc3RcbiAgaWYgKCFwcm9jZXNzLmVudi5JU19JTkpFQ1RFRCAmJiB3aW5kb3cgPT09IGdldEJnUGFnZSgpKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UuY2F0Y2gobm9vcCk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8qKlxuICogVXNlZCBieSBgaW5qZWN0ZWRgXG4gKiBUaGUgYWN0aXZlIHRhYiBwYWdlIGFuZCBpdHMgW2NvbnRlbnRdIHNjcmlwdHMgbG9hZCBiZWZvcmUgdGhlIGV4dGVuc2lvbidzXG4gKiBwZXJzaXN0ZW50IGJhY2tncm91bmQgc2NyaXB0IHdoZW4gQ2hyb21lIHN0YXJ0cyB3aXRoIGEgVVJMIHZpYSBjb21tYW5kIGxpbmVcbiAqIG9yIHdoZW4gY29uZmlndXJlZCB0byByZXN0b3JlIHRoZSBzZXNzaW9uLCBodHRwczovL2NyYnVnLmNvbS8zMTQ2ODZcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlUmV0cnkocGF5bG9hZCwgcmV0cmllcyA9IDEwKSB7XG4gIGxldCBwYXVzZUR1cmF0aW9uID0gMTA7XG4gIGZvciAoOyByZXRyaWVzID4gMDsgcmV0cmllcyAtPSAxKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZW5kTWVzc2FnZShwYXlsb2FkKTtcbiAgICAgIGlmIChkYXRhKSByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIWAke2V9YC5pbmNsdWRlcygnQ291bGQgbm90IGVzdGFibGlzaCBjb25uZWN0aW9uLicpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IG1ha2VQYXVzZShwYXVzZUR1cmF0aW9uKTtcbiAgICBwYXVzZUR1cmF0aW9uICo9IDI7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdWaW9sZW50bW9ua2V5IGNhbm5vdCBjb25uZWN0IHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UuJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0cGFkKGlucHV0LCBsZW5ndGgsIHBhZCA9ICcwJykge1xuICBsZXQgbnVtID0gaW5wdXQudG9TdHJpbmcoKTtcbiAgd2hpbGUgKG51bS5sZW5ndGggPCBsZW5ndGgpIG51bSA9IGAke3BhZH0ke251bX1gO1xuICByZXR1cm4gbnVtO1xufVxuXG4vKipcbiAqIEdldCBsb2NhbGUgYXR0cmlidXRlcyBzdWNoIGFzIGBAbmFtZTp6aC1DTmBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZVN0cmluZyhtZXRhLCBrZXkpIHtcbiAgY29uc3QgbG9jYWxlTWV0YSA9IG5hdmlnYXRvci5sYW5ndWFnZXNcbiAgLy8gVXNlIGBsYW5nLnRvTG93ZXJDYXNlKClgIHNpbmNlIHYyLjYuNVxuICAubWFwKGxhbmcgPT4gbWV0YVtgJHtrZXl9OiR7bGFuZ31gXSB8fCBtZXRhW2Ake2tleX06JHtsYW5nLnRvTG93ZXJDYXNlKCl9YF0pXG4gIC5maW5kKEJvb2xlYW4pO1xuICByZXR1cm4gbG9jYWxlTWV0YSB8fCBtZXRhW2tleV0gfHwgJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHROYW1lKHNjcmlwdCkge1xuICByZXR1cm4gc2NyaXB0LmN1c3RvbS5uYW1lIHx8IGdldExvY2FsZVN0cmluZyhzY3JpcHQubWV0YSwgJ25hbWUnKVxuICAgIHx8IGAjJHtzY3JpcHQucHJvcHMuaWQgPz8gaTE4bignbGFiZWxOb05hbWUnKX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVsbFVybCh1cmwsIGJhc2UpIHtcbiAgY29uc3Qgb2JqID0gbmV3IFVSTCh1cmwsIGJhc2UpO1xuICAvLyBVc2UgcHJvdG9jb2wgd2hpdGVsaXN0IHRvIGZpbHRlciBVUkxzXG4gIGlmICghW1xuICAgICdodHRwOicsXG4gICAgJ2h0dHBzOicsXG4gICAgJ2Z0cDonLFxuICAgICdkYXRhOicsXG4gIF0uaW5jbHVkZXMob2JqLnByb3RvY29sKSkgb2JqLnByb3RvY29sID0gJ2h0dHA6JztcbiAgcmV0dXJuIG9iai5ocmVmO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlRmlsZW5hbWUobmFtZSkge1xuICAvLyBgZXNjYXBlYCBnZW5lcmF0ZWQgVVJJIGhhcyAlIGluIGl0XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1stXFxcXC86Kj9cIjw+fCVcXHNdL2csIChtKSA9PiB7XG4gICAgbGV0IGNvZGUgPSBtLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpO1xuICAgIGlmIChjb2RlLmxlbmd0aCA8IDIpIGNvZGUgPSBgMCR7Y29kZX1gO1xuICAgIHJldHVybiBgLSR7Y29kZX1gO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUZpbGVuYW1lKGZpbGVuYW1lKSB7XG4gIHJldHVybiBmaWxlbmFtZS5yZXBsYWNlKC8tKFswLTlhLWZdezJ9KS9nLCAoX20sIGcpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZywgMTYpKSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBY3RpdmVUYWIoKSB7XG4gIHJldHVybiAoXG4gICAgYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHtcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIGN1cnJlbnRXaW5kb3c6IHRydWUsXG4gICAgfSlcbiAgKVswXSB8fCAoXG4gICAgLy8gQ2hyb21lIGJ1ZyB3b3JrYXJvdW5kIHdoZW4gYW4gdW5kb2NrZWQgZGV2dG9vbHMgd2luZG93IGlzIGZvY3VzZWRcbiAgICBhd2FpdCBicm93c2VyLnRhYnMucXVlcnkoe1xuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgd2luZG93SWQ6IChhd2FpdCBicm93c2VyLndpbmRvd3MuZ2V0Q3VycmVudCgpKS5pZCxcbiAgICB9KVxuICApWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBhdXNlKG1zKSB7XG4gIHJldHVybiBtcyA8IDBcbiAgICA/IFByb21pc2UucmVzb2x2ZSgpXG4gICAgOiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRydWVKb2luKHNlcGFyYXRvcikge1xuICByZXR1cm4gdGhpcy5maWx0ZXIoQm9vbGVhbikuam9pbihzZXBhcmF0b3IpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUtleXMoa2V5KSB7XG4gIGlmIChrZXkgPT0gbnVsbCkgcmV0dXJuIFtdO1xuICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSByZXR1cm4ga2V5O1xuICByZXR1cm4gYCR7a2V5fWAuc3BsaXQoJy4nKS5maWx0ZXIoQm9vbGVhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RHZXQob2JqLCByYXdLZXksIGRlZikge1xuICBjb25zdCBrZXlzID0gbm9ybWFsaXplS2V5cyhyYXdLZXkpO1xuICBsZXQgcmVzID0gb2JqO1xuICBrZXlzLmV2ZXJ5KChrZXkpID0+IHtcbiAgICBpZiAocmVzICYmIHR5cGVvZiByZXMgPT09ICdvYmplY3QnICYmIChrZXkgaW4gcmVzKSkge1xuICAgICAgcmVzID0gcmVzW2tleV07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmVzID0gZGVmO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RTZXQob2JqLCByYXdLZXksIHZhbCkge1xuICBjb25zdCBrZXlzID0gbm9ybWFsaXplS2V5cyhyYXdLZXkpO1xuICBpZiAoIWtleXMubGVuZ3RoKSByZXR1cm4gdmFsO1xuICBjb25zdCByb290ID0gb2JqIHx8IHt9O1xuICBsZXQgc3ViID0gcm9vdDtcbiAgY29uc3QgbGFzdEtleSA9IGtleXMucG9wKCk7XG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgc3ViID0gc3ViW2tleV0gfHwgKHN1YltrZXldID0ge30pO1xuICB9KTtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGVsZXRlIHN1YltsYXN0S2V5XTtcbiAgfSBlbHNlIHtcbiAgICBzdWJbbGFzdEtleV0gPSB2YWw7XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qKlxuICogQHBhcmFtIHt7fX0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHZhbHVlLGtleSk6P30gW3RyYW5zZm9ybV1cbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFBpY2sob2JqLCBrZXlzLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKChyZXMsIGtleSkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IG9iaj8uW2tleV07XG4gICAgaWYgKHRyYW5zZm9ybSkgdmFsdWUgPSB0cmFuc2Zvcm0odmFsdWUsIGtleSk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHJlc1trZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIHJlcztcbiAgfSwge30pO1xufVxuXG4vLyBpbnZva2VkIGFzIG9iajo6bWFwRW50cnkoKFtrZXksIHZhbHVlXSwgaSwgYWxsRW50cmllcykgPT4gdHJhbnNmb3JtZWRWYWx1ZSlcbmV4cG9ydCBmdW5jdGlvbiBtYXBFbnRyeShmdW5jKSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzKS5yZWR1Y2UoKHJlcywgZW50cnksIGksIGFsbEVudHJpZXMpID0+IHtcbiAgICByZXNbZW50cnlbMF1dID0gZnVuYyhlbnRyeSwgaSwgYWxsRW50cmllcyk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSwge30pO1xufVxuXG4vLyBpbnZva2VkIGFzIG9iajo6Zm9yRWFjaEVudHJ5KChba2V5LCB2YWx1ZV0sIGksIGFsbEVudHJpZXMpID0+IHt9KVxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hFbnRyeShmdW5jKSB7XG4gIGlmICh0aGlzKSBPYmplY3QuZW50cmllcyh0aGlzKS5mb3JFYWNoKGZ1bmMpO1xufVxuXG4vLyBpbnZva2VkIGFzIG9iajo6Zm9yRWFjaEtleShrZXkgPT4ge30sIGksIGFsbEtleXMpXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaEtleShmdW5jKSB7XG4gIGlmICh0aGlzKSBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKGZ1bmMpO1xufVxuXG4vLyBpbnZva2VkIGFzIG9iajo6Zm9yRWFjaFZhbHVlKHZhbHVlID0+IHt9LCBpLCBhbGxWYWx1ZXMpXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaFZhbHVlKGZ1bmMpIHtcbiAgaWYgKHRoaXMpIE9iamVjdC52YWx1ZXModGhpcykuZm9yRWFjaChmdW5jKTtcbn1cblxuLy8gTmVlZGVkIGZvciBGaXJlZm94J3MgYnJvd3Nlci5zdG9yYWdlIEFQSSB3aGljaCBmYWlscyBvbiBWdWUgb2JzZXJ2YWJsZXNcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weShzcmMpIHtcbiAgcmV0dXJuIHNyYyAmJiAoXG4gICAgQXJyYXkuaXNBcnJheShzcmMpICYmIHNyYy5tYXAoZGVlcENvcHkpXG4gICAgLy8gVXNlZCBpbiBzYWZlIGNvbnRleHRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICB8fCB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiBzcmM6Om1hcEVudHJ5KChbLCB2YWxdKSA9PiBkZWVwQ29weSh2YWwpKVxuICApIHx8IHNyYztcbn1cblxuLy8gU2ltcGxpZmllZCBkZWVwIGVxdWFsaXR5IGNoZWNrZXJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwRXF1YWwoYSwgYikge1xuICBsZXQgcmVzO1xuICBpZiAoIWEgfHwgIWIgfHwgdHlwZW9mIGEgIT09IHR5cGVvZiBiIHx8IHR5cGVvZiBhICE9PSAnb2JqZWN0Jykge1xuICAgIHJlcyA9IGEgPT09IGI7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJlcyA9IGEubGVuZ3RoID09PSBiLmxlbmd0aFxuICAgICAgJiYgYS5ldmVyeSgoaXRlbSwgaSkgPT4gZGVlcEVxdWFsKGl0ZW0sIGJbaV0pKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMoYik7XG4gICAgcmVzID0ga2V5c0EubGVuZ3RoID09PSBrZXlzQi5sZW5ndGhcbiAgICAgICYmIGtleXNBLmV2ZXJ5KGtleSA9PiBrZXlzQi5pbmNsdWRlcyhrZXkpICYmIGRlZXBFcXVhbChhW2tleV0sIGJba2V5XSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG4iLCJpbXBvcnQgeyBJTkpFQ1RfQVVUTyB9IGZyb20gJy4vY29uc3RzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0FwcGxpZWQ6IHRydWUsXG4gIGF1dG9VcGRhdGU6IDEsIC8vIGRheXMsIDAgPSBkaXNhYmxlXG4gIC8vIGlnbm9yZUdyYW50OiBmYWxzZSxcbiAgbGFzdFVwZGF0ZTogMCxcbiAgbGFzdE1vZGlmaWVkOiAwLFxuICAvKiogQHR5cGVkZWYgeyd1bmlxdWUnIHwgJ3RvdGFsJyB8ICcnfSBWTUJhZGdlTW9kZSAqL1xuICAvKiogQHR5cGUgVk1CYWRnZU1vZGUgKi9cbiAgc2hvd0JhZGdlOiAndW5pcXVlJyxcbiAgYmFkZ2VDb2xvcjogJyM4ODAwODgnLFxuICBiYWRnZUNvbG9yQmxvY2tlZDogJyM4ODg4ODgnLFxuICBleHBvcnRWYWx1ZXM6IHRydWUsXG4gIGV4cG9ydE5hbWVUZW1wbGF0ZTogJ1t2aW9sZW50bW9ua2V5XV9ZWVlZLU1NLUREX0hILm1tLnNzJyxcbiAgZXhwb3NlOiB7IC8vIHVzZSBwZXJjZW50LWVuY29kaW5nIGZvciAnLidcbiAgICAnZ3JlYXN5Zm9yayUyRW9yZyc6IHRydWUsXG4gICAgJ3NsZWF6eWZvcmslMkVvcmcnOiBmYWxzZSxcbiAgfSxcbiAgY2xvc2VBZnRlckluc3RhbGw6IGZhbHNlLFxuICB0cmFja0xvY2FsRmlsZTogZmFsc2UsXG4gIGF1dG9SZWxvYWQ6IGZhbHNlLFxuICBmZWF0dXJlczogbnVsbCxcbiAgYmxhY2tsaXN0OiBudWxsLFxuICBzeW5jU2NyaXB0U3RhdHVzOiB0cnVlLFxuICBzeW5jOiBudWxsLFxuICBjdXN0b21DU1M6IG51bGwsXG4gIGltcG9ydFNjcmlwdERhdGE6IHRydWUsXG4gIGltcG9ydFNldHRpbmdzOiB0cnVlLFxuICBub3RpZnlVcGRhdGVzOiBmYWxzZSxcbiAgbm90aWZ5VXBkYXRlc0dsb2JhbDogZmFsc2UsIC8vIGB0cnVlYCBpZ25vcmVzIHNjcmlwdC5jb25maWcubm90aWZ5VXBkYXRlc1xuICB2ZXJzaW9uOiBudWxsLFxuICAvKiogQHR5cGUgeydhdXRvJyB8ICdwYWdlJyB8ICdjb250ZW50J30gKi9cbiAgZGVmYXVsdEluamVjdEludG86IElOSkVDVF9BVVRPLFxuICB4aHJJbmplY3Q6IGZhbHNlLFxuICBmaWx0ZXJzOiB7XG4gICAgLyoqIEB0eXBlIHsnbmFtZScgfCAnY29kZScgfCAnYWxsJ30gKi9cbiAgICBzZWFyY2hTY29wZTogJ25hbWUnLFxuICAgIC8qKiBAdHlwZSBib29sZWFuICovXG4gICAgc2hvd09yZGVyOiBmYWxzZSxcbiAgICAvKiogQHR5cGUgeydleGVjJyB8ICdhbHBoYScgfCAndXBkYXRlJ30gKi9cbiAgICBzb3J0OiAnZXhlYycsXG4gICAgLyoqIEB0eXBlIGJvb2xlYW4gKi9cbiAgICB2aWV3U2luZ2xlQ29sdW1uOiBmYWxzZSxcbiAgICAvKiogQHR5cGUgYm9vbGVhbiAqL1xuICAgIHZpZXdUYWJsZTogZmFsc2UsXG4gIH0sXG4gIGZpbHRlcnNQb3B1cDoge1xuICAgIC8qKiBAdHlwZSB7J2V4ZWMnIHwgJ2FscGhhJ30gKi9cbiAgICBzb3J0OiAnZXhlYycsXG4gICAgZW5hYmxlZEZpcnN0OiBmYWxzZSxcbiAgICAvKiogQHR5cGUgeycnIHwgJ2hpZGUnIHwgJ2dyb3VwJ30gd2hlcmUgJycgPSBzaG93ICovXG4gICAgaGlkZURpc2FibGVkOiAnJyxcbiAgfSxcbiAgZWRpdG9yOiB7XG4gICAgbGluZVdyYXBwaW5nOiBmYWxzZSxcbiAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXG4gICAgaW5kZW50VW5pdDogMixcbiAgICB0YWJTaXplOiAyLFxuICAgIHVuZG9EZXB0aDogMjAwLFxuICB9LFxuICBlZGl0b3JUaGVtZTogJycsXG4gIGVkaXRvclRoZW1lTmFtZTogbnVsbCxcbiAgZWRpdG9yV2luZG93OiBmYWxzZSwgLy8gd2hldGhlciBwb3B1cCBvcGVucyBlZGl0b3IgaW4gYSBuZXcgd2luZG93XG4gIGVkaXRvcldpbmRvd1Bvczoge30sIC8vIHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH1cbiAgZWRpdG9yV2luZG93U2ltcGxlOiB0cnVlLCAvLyB3aGV0aGVyIHRvIG9wZW4gYSBzaW1wbGlmaWVkIHBvcHVwIG9yIGEgbm9ybWFsIGJyb3dzZXIgd2luZG93XG4gIHNjcmlwdFRlbXBsYXRlOiBgXFxcbi8vID09VXNlclNjcmlwdD09XG4vLyBAbmFtZSAgICAgICAgTmV3IHNjcmlwdCB7e25hbWV9fVxuLy8gQG5hbWVzcGFjZSAgIFZpb2xlbnRtb25rZXkgU2NyaXB0c1xuLy8gQG1hdGNoICAgICAgIHt7dXJsfX1cbi8vIEBncmFudCAgICAgICBub25lXG4vLyBAdmVyc2lvbiAgICAgMS4wXG4vLyBAYXV0aG9yICAgICAgLVxuLy8gQGRlc2NyaXB0aW9uIHt7ZGF0ZX19XG4vLyA9PS9Vc2VyU2NyaXB0PT1cbmAsXG4gIC8vIEVuYWJsZXMgYXV0b21hdGljIHVwZGF0ZXMgdG8gdGhlIGRlZmF1bHQgdGVtcGxhdGUgd2l0aCBuZXcgdmVyc2lvbnMgb2YgVk1cbiAgLyoqIEB0eXBlIHs/Qm9vbGVhbn0gdGhpcyBtdXN0IGJlIHxudWxsfCBmb3IgdGVtcGxhdGUtaG9vay5qcyB1cGdyYWRlIHJvdXRpbmUgKi9cbiAgc2NyaXB0VGVtcGxhdGVFZGl0ZWQ6IG51bGwsXG4gIC8qKiBAdHlwZWRlZiB7JycgfCAnZGFyaycgfCAnbGlnaHQnfSBWTVVpVGhlbWUgKi9cbiAgLyoqIEB0eXBlIFZNVWlUaGVtZSAqL1xuICB1aVRoZW1lOiAnJyxcbn07XG4iLCJpbXBvcnQgZGVmYXVsdHMgZnJvbSAnIy9jb21tb24vb3B0aW9ucy1kZWZhdWx0cyc7XG5pbXBvcnQgeyBpbml0SG9va3MsIHNlbmRDbWREaXJlY3RseSB9IGZyb20gJy4nO1xuaW1wb3J0IHsgZm9yRWFjaEVudHJ5LCBvYmplY3RHZXQsIG9iamVjdFNldCB9IGZyb20gJy4vb2JqZWN0JztcblxubGV0IG9wdGlvbnMgPSB7fTtcbmNvbnN0IGhvb2tzID0gaW5pdEhvb2tzKCk7XG5jb25zdCByZWFkeSA9IHNlbmRDbWREaXJlY3RseSgnR2V0QWxsT3B0aW9ucycsIG51bGwsIHsgcmV0cnk6IHRydWUgfSlcbi50aGVuKChkYXRhKSA9PiB7XG4gIG9wdGlvbnMgPSBkYXRhO1xuICBpZiAoZGF0YSkgaG9va3MuZmlyZShkYXRhKTtcbn0pO1xuXG5mdW5jdGlvbiBnZXRPcHRpb24oa2V5KSB7XG4gIHJldHVybiBvYmplY3RHZXQob3B0aW9ucywga2V5KSA/PyBvYmplY3RHZXQoZGVmYXVsdHMsIGtleSk7XG59XG5cbmZ1bmN0aW9uIHNldE9wdGlvbihrZXksIHZhbHVlKSB7XG4gIC8vIHRoZSB1cGRhdGVkIG9wdGlvbnMgb2JqZWN0IHdpbGwgYmUgcHJvcGFnYXRlZCBmcm9tIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdCBhZnRlciBhIHBhdXNlXG4gIC8vIHNvIG1lYW53aGlsZSB0aGUgbG9jYWwgY29kZSBzaG91bGQgYmUgYWJsZSB0byBzZWUgdGhlIG5ldyB2YWx1ZSB1c2luZyBvcHRpb25zLmdldCgpXG4gIG9iamVjdFNldChvcHRpb25zLCBrZXksIHZhbHVlKTtcbiAgc2VuZENtZERpcmVjdGx5KCdTZXRPcHRpb25zJywgeyBrZXksIHZhbHVlIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVPcHRpb25zKGRhdGEpIHtcbiAgLy8gS2V5cyBpbiBgZGF0YWAgbWF5IGJlIHsgZmxhdHRlbmVkLmxpa2UudGhpczogJ2ZvbycgfVxuICBjb25zdCBleHBhbmRlZERhdGEgPSB7fTtcbiAgZGF0YTo6Zm9yRWFjaEVudHJ5KChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBvYmplY3RTZXQob3B0aW9ucywga2V5LCB2YWx1ZSk7XG4gICAgb2JqZWN0U2V0KGV4cGFuZGVkRGF0YSwga2V5LCB2YWx1ZSk7XG4gIH0pO1xuICBob29rcy5maXJlKGV4cGFuZGVkRGF0YSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVhZHksXG4gIGdldDogZ2V0T3B0aW9uLFxuICBzZXQ6IHNldE9wdGlvbixcbiAgdXBkYXRlOiB1cGRhdGVPcHRpb25zLFxuICBob29rOiBob29rcy5ob29rLFxufTtcbiIsImltcG9ydCB7IHNob3dDb25maXJtYXRpb24gfSBmcm9tICcjL2NvbW1vbi91aSc7XG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi91dGlsJztcblxuZnVuY3Rpb24gcGFyc2UoaGFzaCkge1xuICBjb25zdCBbcGF0aG5hbWUsIHNlYXJjaCA9ICcnXSA9IGhhc2guc3BsaXQoJz8nKTtcbiAgY29uc3QgcXVlcnkgPSBzZWFyY2guc3BsaXQoJyYnKS5yZWR1Y2UoKHJlcywgc2VxKSA9PiB7XG4gICAgaWYgKHNlcSkge1xuICAgICAgY29uc3QgW2tleSwgdmFsXSA9IHNlcS5zcGxpdCgnPScpO1xuICAgICAgcmVzW2RlY29kZVVSSUNvbXBvbmVudChrZXkpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9LCB7fSk7XG4gIGNvbnN0IHBhdGhzID0gcGF0aG5hbWUuc3BsaXQoJy8nKTtcbiAgcmV0dXJuIHtcbiAgICBoYXNoLCBwYXRobmFtZSwgcGF0aHMsIHF1ZXJ5LFxuICB9O1xufVxuXG5jb25zdCBzdGFjayA9IFtdO1xuZXhwb3J0IGNvbnN0IHJvdXRlID0ge307XG5leHBvcnQgY29uc3QgbGFzdFJvdXRlID0gKCkgPT4gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gfHwge307XG5cbnVwZGF0ZVJvdXRlKCk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVJvdXRlKG5vQ29uZmlybSkge1xuICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gIGlmIChub0NvbmZpcm0gfHwgIXJvdXRlLmNvbmZpcm1DaGFuZ2UpIHtcbiAgICBPYmplY3QuYXNzaWduKHJvdXRlLCBwYXJzZShoYXNoKSk7XG4gIH0gZWxzZSBpZiAocm91dGUuaGFzaCAhPT0gaGFzaCkge1xuICAgIC8vIHJlc3RvcmUgdGhlIHBpbm5lZCByb3V0ZVxuICAgIHNldFJvdXRlKHJvdXRlLmhhc2gsIGZhbHNlLCB0cnVlKTtcbiAgICByb3V0ZS5jb25maXJtQ2hhbmdlKGhhc2gpO1xuICB9XG59XG5cbi8vIHBvcHN0YXRlIHNob3VsZCBiZSB0aGUgZmlyc3QgdG8gZW5zdXJlIGhhc2hjaGFuZ2UgbGlzdGVuZXJzIHNlZSB0aGUgY29ycmVjdCBsYXN0Um91dGVcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHN0YWNrLnBvcCgpKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4gdXBkYXRlUm91dGUoKSwgZmFsc2UpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0Um91dGUoaGFzaCwgcmVwbGFjZSwgbm9Db25maXJtKSB7XG4gIGxldCBoYXNoU3RyaW5nID0gYCR7aGFzaH1gO1xuICBpZiAoaGFzaFN0cmluZ1swXSAhPT0gJyMnKSBoYXNoU3RyaW5nID0gYCMke2hhc2hTdHJpbmd9YDtcbiAgaWYgKHJlcGxhY2UpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoJycsIG51bGwsIGhhc2hTdHJpbmcpO1xuICB9IGVsc2Uge1xuICAgIHN0YWNrLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgcm91dGUpKTtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoJycsIG51bGwsIGhhc2hTdHJpbmcpO1xuICB9XG4gIHVwZGF0ZVJvdXRlKG5vQ29uZmlybSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmxvYWRTZW50cnkob25Db25maXJtLCBvbkNhbmNlbCkge1xuICBhc3luYyBmdW5jdGlvbiBjb25maXJtUG9wU3RhdGUoaGFzaCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBwb3BzdGF0ZSBjYW5ub3QgYmUgcHJldmVudGVkIHNvIHdlIHBpbiBjdXJyZW50IGByb3V0ZWAgYW5kIGRpc3BsYXkgYSBjb25maXJtYXRpb25cbiAgICAgIGF3YWl0IHNob3dDb25maXJtYXRpb24oaTE4bignY29uZmlybU5vdFNhdmVkJykpO1xuICAgICAgc2V0Um91dGUoaGFzaCwgZmFsc2UsIHRydWUpO1xuICAgICAgb25Db25maXJtPy4oKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIG9uQ2FuY2VsPy4oKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlKHN0YXRlKSB7XG4gICAgY29uc3Qgb25PZmYgPSBgJHtzdGF0ZSA/ICdhZGQnIDogJ3JlbW92ZSd9RXZlbnRMaXN0ZW5lcmA7XG4gICAgZ2xvYmFsW29uT2ZmXSgnYmVmb3JldW5sb2FkJywgb25VbmxvYWQpO1xuICAgIHJvdXRlLmNvbmZpcm1DaGFuZ2UgPSBzdGF0ZSAmJiBjb25maXJtUG9wU3RhdGU7XG4gIH1cbiAgcmV0dXJuIHRvZ2dsZTtcbn1cblxuZnVuY3Rpb24gb25VbmxvYWQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIG1vZGVybiBicm93c2VyIHNob3cgdGhlaXIgb3duIG1lc3NhZ2UgdGV4dFxuICBlLnJldHVyblZhbHVlID0gaTE4bignY29uZmlybU5vdFNhdmVkJyk7XG59XG4iLCJpbXBvcnQgeyBkZWVwQ29weSwgZm9yRWFjaEVudHJ5IH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCB7IGJsb2IyYmFzZTY0LCBlbnN1cmVBcnJheSB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKiBAdHlwZSBWTUNhY2hlICovXG5sZXQgZGF0YUNhY2hlO1xuY29uc3QgYnJvd3NlclN0b3JhZ2VMb2NhbCA9IGJyb3dzZXIuc3RvcmFnZS5sb2NhbDtcbmNvbnN0IG9uU3RvcmFnZUNoYW5nZWQgPSBjaGFuZ2VzID0+IHtcbiAgY2hhbmdlczo6Zm9yRWFjaEVudHJ5KChba2V5LCB7IG5ld1ZhbHVlIH1dKSA9PiB7XG4gICAgaWYgKG5ld1ZhbHVlID09IG51bGwpIHtcbiAgICAgIGRhdGFDYWNoZS5kZWwoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YUNhY2hlLnB1dChrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqIEBuYW1lc3BhY2UgVk1TdG9yYWdlQmFzZSAqL1xuY29uc3QgYmFzZSA9IHtcbiAgcHJlZml4OiAnJyxcbiAgc2V0RGF0YUNhY2hlKHZhbCkge1xuICAgIGRhdGFDYWNoZSA9IHZhbDtcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKG9uU3RvcmFnZUNoYW5nZWQpO1xuICB9LFxuICBnZXRLZXkoaWQpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5wcmVmaXh9JHtpZH1gO1xuICB9LFxuICBhc3luYyBnZXRPbmUoaWQpIHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuZ2V0TXVsdGkoW2lkXSkpW2lkXTtcbiAgfSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGlkc1xuICAgKiBAcGFyYW0gez99IFtkZWZdXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oaWQ6c3RyaW5nLCB2YWw6Pyk6P30gW3RyYW5zZm9ybV1cbiAgICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn1cbiAgICovXG4gIGFzeW5jIGdldE11bHRpKGlkcywgZGVmLCB0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgY29uc3QgbWlzc2luZ0tleXMgPSBbXTtcbiAgICBpZHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleShpZCk7XG4gICAgICBjb25zdCBjYWNoZWQgPSBkYXRhQ2FjaGU/LmdldChrZXkpO1xuICAgICAgcmVzW2lkXSA9IGtleTtcbiAgICAgIGlmIChjYWNoZWQgIT0gbnVsbCkge1xuICAgICAgICBkYXRhW2tleV0gPSBkZWVwQ29weShjYWNoZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWlzc2luZ0tleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChtaXNzaW5nS2V5cy5sZW5ndGgpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwgYXdhaXQgYnJvd3NlclN0b3JhZ2VMb2NhbC5nZXQobWlzc2luZ0tleXMpKTtcbiAgICB9XG4gICAgcmVzOjpmb3JFYWNoRW50cnkoKFtpZCwga2V5XSkgPT4ge1xuICAgICAgcmVzW2lkXSA9IHRyYW5zZm9ybVxuICAgICAgICA/IHRyYW5zZm9ybShpZCwgZGF0YVtrZXldKVxuICAgICAgICA6IGRhdGFba2V5XSA/PyBkZWVwQ29weShkZWYpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0sXG4gIC8vIE11c3QgYmUgYGFzeW5jYCB0byBlbnN1cmUgYSBQcm9taXNlIGlzIHJldHVybmVkIHdoZW4gYGlmYCBkb2Vzbid0IG1hdGNoXG4gIGFzeW5jIHNldChpZCwgdmFsdWUpIHtcbiAgICBpZiAoaWQpIHJldHVybiB0aGlzLmR1bXAoeyBbaWRdOiB2YWx1ZSB9KTtcbiAgfSxcbiAgLy8gTXVzdCBiZSBgYXN5bmNgIHRvIGVuc3VyZSBhIFByb21pc2UgaXMgcmV0dXJuZWQgd2hlbiBgaWZgIGRvZXNuJ3QgbWF0Y2hcbiAgYXN5bmMgcmVtb3ZlKGlkKSB7XG4gICAgaWYgKGlkKSByZXR1cm4gdGhpcy5yZW1vdmVNdWx0aShbaWRdKTtcbiAgfSxcbiAgLy8gTXVzdCBiZSBgYXN5bmNgIHRvIGVuc3VyZSBhIFByb21pc2UgaXMgcmV0dXJuZWQgd2hlbiBgaWZgIGRvZXNuJ3QgbWF0Y2hcbiAgYXN5bmMgcmVtb3ZlTXVsdGkoaWRzKSB7XG4gICAgaWYgKGlkcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBpZHMubWFwKHRoaXMuZ2V0S2V5LCB0aGlzKTtcbiAgICAgIGlmIChkYXRhQ2FjaGUpIGtleXMuZm9yRWFjaChkYXRhQ2FjaGUuZGVsKTtcbiAgICAgIHJldHVybiBicm93c2VyU3RvcmFnZUxvY2FsLnJlbW92ZShrZXlzKTtcbiAgICB9XG4gIH0sXG4gIGFzeW5jIGR1bXAoZGF0YSkge1xuICAgIGNvbnN0IG91dHB1dCA9IHt9O1xuICAgIGRhdGE6OmZvckVhY2hFbnRyeSgoW2lkLCB2YWx1ZV0pID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0S2V5KGlkKTtcbiAgICAgIG91dHB1dFtrZXldID0gdmFsdWU7XG4gICAgICBkYXRhQ2FjaGU/LnB1dChrZXksIGRlZXBDb3B5KHZhbHVlKSk7XG4gICAgfSk7XG4gICAgYXdhaXQgYnJvd3NlclN0b3JhZ2VMb2NhbC5zZXQob3V0cHV0KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICBiYXNlLFxuXG4gIGNhY2hlOiB7XG4gICAgLi4uYmFzZSxcbiAgICBwcmVmaXg6ICdjYWM6JyxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1ZNUmVxdWVzdFJlc3BvbnNlfSByZXNwb25zZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vSm9pbl1cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfHN0cmluZ1tdfVxuICAgICAqL1xuICAgIGFzeW5jIG1ha2VSYXcocmVzcG9uc2UsIG5vSm9pbikge1xuICAgICAgY29uc3QgdHlwZSA9IChyZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykgfHwgJycpLnNwbGl0KCc7JylbMF0gfHwgJyc7XG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgYmxvYjJiYXNlNjQocmVzcG9uc2UuZGF0YSk7XG4gICAgICByZXR1cm4gbm9Kb2luID8gW3R5cGUsIGJvZHldIDogYCR7dHlwZX0sJHtib2R5fWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtyYXddIC0gcmF3IHZhbHVlIGluIHN0b3JhZ2UuY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7P3N0cmluZ31cbiAgICAgKi9cbiAgICBtYWtlRGF0YVVyaSh1cmwsIHJhdykge1xuICAgICAgaWYgKHVybC5zdGFydHNXaXRoKCdkYXRhOicpKSByZXR1cm4gdXJsO1xuICAgICAgaWYgKC9eKGksfGltYWdlXFwvKS8udGVzdChyYXcpKSB7IC8vIHdvcmthcm91bmQgZm9yIGJ1Z3MgaW4gb2xkIFZNLCBzZWUgMmUxMzVjZjdcbiAgICAgICAgY29uc3QgaSA9IHJhdy5sYXN0SW5kZXhPZignLCcpO1xuICAgICAgICBjb25zdCB0eXBlID0gcmF3LnN0YXJ0c1dpdGgoJ2ltYWdlLycpID8gcmF3LnNsaWNlKDAsIGkpIDogJ2ltYWdlL3BuZyc7XG4gICAgICAgIHJldHVybiBgZGF0YToke3R5cGV9O2Jhc2U2NCwke3Jhdy5zbGljZShpICsgMSl9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByYXc7XG4gICAgfSxcbiAgfSxcblxuICBjb2RlOiB7XG4gICAgLi4uYmFzZSxcbiAgICBwcmVmaXg6ICdjb2RlOicsXG4gIH0sXG5cbiAgLy8gbGFzdC1tb2RpZmllZCBIVFRQIGhlYWRlciB2YWx1ZSBwZXIgVVJMXG4gIG1vZDoge1xuICAgIC4uLmJhc2UsXG4gICAgcHJlZml4OiAnbW9kOicsXG4gIH0sXG5cbiAgcmVxdWlyZToge1xuICAgIC4uLmJhc2UsXG4gICAgcHJlZml4OiAncmVxOicsXG4gIH0sXG5cbiAgc2NyaXB0OiB7XG4gICAgLi4uYmFzZSxcbiAgICBwcmVmaXg6ICdzY3I6JyxcbiAgICBhc3luYyBkdW1wKGl0ZW1zKSB7XG4gICAgICBpdGVtcyA9IGVuc3VyZUFycmF5KGl0ZW1zKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICBpZiAoIWl0ZW1zLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgY29uc3QgZGF0YSA9IGl0ZW1zLnJlZHVjZSgocmVzLCBpdGVtKSA9PiB7XG4gICAgICAgIHJlc1t0aGlzLmdldEtleShpdGVtLnByb3BzLmlkKV0gPSBpdGVtO1xuICAgICAgICBpZiAodGhpcy5vbkR1bXApIHRoaXMub25EdW1wKGl0ZW0pO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSwge30pO1xuICAgICAgYXdhaXQgYmFzZS5kdW1wKGRhdGEpO1xuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH0sXG4gIH0sXG5cbiAgdmFsdWU6IHtcbiAgICAuLi5iYXNlLFxuICAgIHByZWZpeDogJ3ZhbDonLFxuICB9LFxufTtcbiIsIi8vIFVBIGNhbiBiZSBvdmVycmlkZGVuIGJ5IGFib3V0OmNvbmZpZyBpbiBGRiBvciBkZXZ0b29scyBpbiBDaHJvbWVcbi8vIHNvIHdlJ2xsIHRlc3QgZm9yIHdpbmRvdy5jaHJvbWUuYXBwIHdoaWNoIGlzIG9ubHkgZGVmaW5lZCBpbiBDaHJvbWVcbi8vIGFuZCBmb3IgYnJvd3Nlci5ydW50aW1lLmdldEJyb3dzZXJJbmZvIGluIEZpcmVmb3ggNTErXG5cbi8qKiBAdHlwZWRlZiBVQUV4dHJhc1xuICogQHByb3BlcnR5IHtudW1iZXJ8TmFOfSBjaHJvbWUgLSBDaHJvbWUvaXVtIHZlcnNpb24gbnVtYmVyXG4gKiBAcHJvcGVydHkge251bWJlcnxOYU59IGZpcmVmb3ggLSBkZXJpdmVkIGZyb20gVUEgc3RyaW5nIGluaXRpYWxseSwgYSByZWFsIG51bWJlciB3aGVuIGByZWFkeWBcbiAqIEBwcm9wZXJ0eSB7UHJvbWlzZTx2b2lkPn0gcmVhZHkgLSByZXNvbHZlcyB3aGVuIGBicm93c2VyYCBBUEkgcmV0dXJucyByZWFsIHZlcnNpb25zXG4gKi9cbi8qKiBAdHlwZWRlZiBVQUluamVjdGVkXG4gKiBAcHJvcGVydHkge2Nocm9tZS5ydW50aW1lLlBsYXRmb3JtSW5mby5hcmNofSBhcmNoXG4gKiBAcHJvcGVydHkge2Nocm9tZS5ydW50aW1lLlBsYXRmb3JtSW5mby5vc30gb3NcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBicm93c2VyTmFtZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGJyb3dzZXJWZXJzaW9uXG4gKi9cbi8qKiBAdHlwZSB7VUFJbmplY3RlZCAmIFVBRXh0cmFzfSAqL1xuY29uc3QgdWEgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IHVhO1xuXG4vLyB1c2luZyBub24tZW51bWVyYWJsZSBwcm9wZXJ0aWVzIHRoYXQgd29uJ3QgYmUgc2VudCB0byBjb250ZW50IHNjcmlwdHMgdmlhIEdldEluamVjdGVkXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyh1YSwge1xuICBjaHJvbWU6IHtcbiAgICB2YWx1ZTogbWF0Y2hOYXZVQSh0cnVlKSxcbiAgfSxcbiAgZmlyZWZveDoge1xuICAgIHZhbHVlOiBtYXRjaE5hdlVBKCksIC8vIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgcmVhbCB2ZXJzaW9uIG51bWJlciBpbiByZWFkeSgpXG4gICAgd3JpdGFibGU6IHRydWUsXG4gIH0sXG4gIHJlYWR5OiB7XG4gICAgdmFsdWU6IFByb21pc2UuYWxsKFtcbiAgICAgIGJyb3dzZXIucnVudGltZS5nZXRQbGF0Zm9ybUluZm8oKSxcbiAgICAgIGJyb3dzZXIucnVudGltZS5nZXRCcm93c2VySW5mbz8uKCksXG4gICAgXSkudGhlbigoW3sgb3MsIGFyY2ggfSwgeyBuYW1lLCB2ZXJzaW9uIH0gPSB7fV0pID0+IHtcbiAgICAgIE9iamVjdC5hc3NpZ24odWEsIHtcbiAgICAgICAgYXJjaCxcbiAgICAgICAgb3MsXG4gICAgICAgIGJyb3dzZXJOYW1lOiBuYW1lPy50b0xvd2VyQ2FzZSgpIHx8ICdjaHJvbWUnLFxuICAgICAgICBicm93c2VyVmVyc2lvbjogdmVyc2lvbiB8fCBtYXRjaE5hdlVBKHRydWUsIHRydWUpLFxuICAgICAgfSk7XG4gICAgICBpZiAoSVNfRklSRUZPWCkge1xuICAgICAgICB1YS5maXJlZm94ID0gcGFyc2VGbG9hdCh2ZXJzaW9uKSB8fCAwO1xuICAgICAgfVxuICAgIH0pLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIG1hdGNoTmF2VUEoYXNDaHJvbWUsIGFzU3RyaW5nKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgXFxcXHMke2FzQ2hyb21lID8gJ0Nocm9tKGV8aXVtKScgOiAnRmlyZWZveCd9LyhcXFxcZCtbLjAtOV0qKXwkYCwgJ2knKTtcbiAgY29uc3QgdmVyID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChyZSkucG9wKCk7XG4gIHJldHVybiBhc1N0cmluZyA/IHZlciA6IHBhcnNlRmxvYXQodmVyKTtcbn1cbiIsIi8vIFNBRkVUWSBXQVJOSU5HISBFeHBvcnRzIHVzZWQgYnkgYGluamVjdGVkYCBtdXN0IG1ha2UgOjpzYWZlKCkgY2FsbHMgYW5kIHVzZSBfX3Byb3RvX186bnVsbFxuXG5pbXBvcnQgeyBicm93c2VyIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGkxOG4obmFtZSwgYXJncykge1xuICByZXR1cm4gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobmFtZSwgYXJncykgfHwgbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nKHBhcmFtKSB7XG4gIGlmIChwYXJhbSA9PSBudWxsKSByZXR1cm4gJyc7XG4gIHJldHVybiBgJHtwYXJhbX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlciA9IHRvU3RyaW5nKSB7XG4gIGNvbnN0IGNhY2hlTWFwID0ge307XG4gIGZ1bmN0aW9uIG1lbW9pemVkKC4uLmFyZ3MpIHtcbiAgICAvLyBVc2VkIGluIHNhZmUgY29udGV4dFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIGNvbnN0IGtleSA9IHJlc29sdmVyKC4uLmFyZ3MpO1xuICAgIGxldCBjYWNoZSA9IGNhY2hlTWFwW2tleV07XG4gICAgaWYgKCFjYWNoZSkge1xuICAgICAgY2FjaGUgPSB7XG4gICAgICAgIHZhbHVlOiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpLFxuICAgICAgfTtcbiAgICAgIGNhY2hlTWFwW2tleV0gPSBjYWNoZTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlLnZhbHVlO1xuICB9XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHRpbWUpIHtcbiAgbGV0IHN0YXJ0VGltZTtcbiAgbGV0IHRpbWVyO1xuICBsZXQgY2FsbGJhY2s7XG4gIHRpbWUgPSBNYXRoLm1heCgwLCArdGltZSB8fCAwKTtcbiAgZnVuY3Rpb24gY2hlY2tUaW1lKCkge1xuICAgIHRpbWVyID0gbnVsbDtcbiAgICBpZiAocGVyZm9ybWFuY2Uubm93KCkgPj0gc3RhcnRUaW1lKSBjYWxsYmFjaygpO1xuICAgIGVsc2UgY2hlY2tUaW1lcigpO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrVGltZXIoKSB7XG4gICAgaWYgKCF0aW1lcikge1xuICAgICAgY29uc3QgZGVsdGEgPSBzdGFydFRpbWUgLSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChjaGVja1RpbWUsIGRlbHRhKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVib3VuY2VkRnVuY3Rpb24oLi4uYXJncykge1xuICAgIHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpICsgdGltZTtcbiAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgICBjaGVja1RpbWVyKCk7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlZEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgdGltZSkge1xuICBsZXQgbGFzdFRpbWUgPSAwO1xuICB0aW1lID0gTWF0aC5tYXgoMCwgK3RpbWUgfHwgMCk7XG4gIGZ1bmN0aW9uIHRocm90dGxlZEZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBpZiAobGFzdFRpbWUgKyB0aW1lIDwgbm93KSB7XG4gICAgICBsYXN0VGltZSA9IG5vdztcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aHJvdHRsZWRGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcUlkKHByZWZpeCA9ICdWTScpIHtcbiAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIHJldHVybiBwcmVmaXhcbiAgICArIE1hdGguZmxvb3IoKG5vdyAtIE1hdGguZmxvb3Iobm93KSkgKiAxZTEyKS50b1N0cmluZygzNilcbiAgICArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlMTIpLnRvU3RyaW5nKDM2KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfFVpbnQ4QXJyYXl8QXJyYXl9IGJ1ZlxuICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRdXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF1cbiAqIEByZXR1cm4ge3N0cmluZ30gYSBiaW5hcnkgc3RyaW5nIGkuZS4gb25lIGJ5dGUgcGVyIGNoYXJhY3RlclxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVmZmVyMnN0cmluZyhidWYsIG9mZnNldCA9IDAsIGxlbmd0aCA9IDFlOTkpIHtcbiAgLy8gVGhlIG1heCBudW1iZXIgb2YgYXJndW1lbnRzIHZhcmllcyBiZXR3ZWVuIEpTIGVuZ2luZXMgYnV0IGl0J3MgPjMyayBzbyB3ZSdyZSBzYWZlXG4gIGNvbnN0IHNsaWNlU2l6ZSA9IDgxOTI7XG4gIGNvbnN0IHNsaWNlcyA9IFtdO1xuICBjb25zdCBhcnJheUxlbiA9IGJ1Zi5sZW5ndGg7IC8vIHByZXNlbnQgb24gVWludDhBcnJheS9BcnJheVxuICBjb25zdCBlbmQgPSBNYXRoLm1pbihhcnJheUxlbiB8fCBidWYuYnl0ZUxlbmd0aCwgb2Zmc2V0ICsgbGVuZ3RoKTtcbiAgY29uc3QgbmVlZHNTbGljaW5nID0gYXJyYXlMZW4gPT0gbnVsbCB8fCBvZmZzZXQgfHwgZW5kID4gc2xpY2VTaXplO1xuICBmb3IgKDsgb2Zmc2V0IDwgZW5kOyBvZmZzZXQgKz0gc2xpY2VTaXplKSB7XG4gICAgc2xpY2VzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLFxuICAgICAgbmVlZHNTbGljaW5nXG4gICAgICAgID8gbmV3IFVpbnQ4QXJyYXkoYnVmLCBvZmZzZXQsIE1hdGgubWluKHNsaWNlU2l6ZSwgZW5kIC0gb2Zmc2V0KSlcbiAgICAgICAgOiBidWYpKTtcbiAgfVxuICByZXR1cm4gc2xpY2VzLmpvaW4oJycpO1xufVxuXG4vKipcbiAqIEZhc3RlciB0aGFuIGJ1ZmZlcjJzdHJpbmcrYnRvYTogMnggaW4gQ2hyb21lLCAxMHggaW4gRkZcbiAqIEBwYXJhbSB7QmxvYn0gYmxvYlxuICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRdXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF1cbiAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gYmFzZTY0LWVuY29kZWQgY29udGVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJsb2IyYmFzZTY0KGJsb2IsIG9mZnNldCA9IDAsIGxlbmd0aCA9IDFlOTkpIHtcbiAgaWYgKG9mZnNldCB8fCBsZW5ndGggPCBibG9iLnNpemUpIHtcbiAgICBibG9iID0gYmxvYi5zbGljZShvZmZzZXQsIG9mZnNldCArIGxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuICFibG9iLnNpemUgPyAnJyA6IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICByZXNvbHZlKHJlcy5zbGljZShyZXMuaW5kZXhPZignLCcpICsgMSkpO1xuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nMnVpbnQ4YXJyYXkoc3RyKSB7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGFycmF5W2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5jb25zdCBWRVJTSU9OX1JFID0gL14oLio/KS0oWy0uMC05YS16XSspfCQvaTtcbmNvbnN0IERJR0lUU19SRSA9IC9eXFxkKyQvOyAvLyB1c2luZyByZWdleHAgdG8gYXZvaWQgKycxZTInIGJlaW5nIHBhcnNlZCBhcyAxMDBcblxuLyoqIEByZXR1cm4gLTEgfCAwIHwgMSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9uKHZlcjEsIHZlcjIpIHtcbiAgLy8gVXNlZCBpbiBzYWZlIGNvbnRleHRcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGNvbnN0IFssIG1haW4xID0gdmVyMSB8fCAnJywgcHJlMV0gPSBWRVJTSU9OX1JFLmV4ZWModmVyMSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICBjb25zdCBbLCBtYWluMiA9IHZlcjIgfHwgJycsIHByZTJdID0gVkVSU0lPTl9SRS5leGVjKHZlcjIpO1xuICBjb25zdCBkZWx0YSA9IGNvbXBhcmVWZXJzaW9uQ2h1bmsobWFpbjEsIG1haW4yKVxuICAgIHx8ICFwcmUxIC0gIXByZTIgLy8gMS4yLjMtcHJlLXJlbGVhc2UgaXMgbGVzcyB0aGFuIDEuMi4zXG4gICAgfHwgcHJlMSAmJiBjb21wYXJlVmVyc2lvbkNodW5rKHByZTEsIHByZTIsIHRydWUpOyAvLyBpZiBwcmUxIGlzIHByZXNlbnQsIHByZTIgaXMgdG9vXG4gIHJldHVybiBkZWx0YSA8IDAgPyAtMSA6ICshIWRlbHRhO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlVmVyc2lvbkNodW5rKHZlcjEsIHZlcjIsIGlzU2VtdmVyTW9kZSkge1xuICBjb25zdCBwYXJ0czEgPSB2ZXIxLnNwbGl0KCcuJyk7XG4gIGNvbnN0IHBhcnRzMiA9IHZlcjIuc3BsaXQoJy4nKTtcbiAgY29uc3QgbGVuMSA9IHBhcnRzMS5sZW5ndGg7XG4gIGNvbnN0IGxlbjIgPSBwYXJ0czIubGVuZ3RoO1xuICBjb25zdCBsZW4gPSAoaXNTZW12ZXJNb2RlID8gTWF0aC5taW4gOiBNYXRoLm1heCkobGVuMSwgbGVuMik7XG4gIGxldCBkZWx0YTtcbiAgZm9yIChsZXQgaSA9IDA7ICFkZWx0YSAmJiBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBjb25zdCBhID0gcGFydHMxW2ldO1xuICAgIGNvbnN0IGIgPSBwYXJ0czJbaV07XG4gICAgaWYgKGlzU2VtdmVyTW9kZSkge1xuICAgICAgZGVsdGEgPSBESUdJVFNfUkUudGVzdChhKSAmJiBESUdJVFNfUkUudGVzdChiKVxuICAgICAgICA/IGEgLSBiXG4gICAgICAgIDogYSA+IGIgfHwgYSA8IGIgJiYgLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbHRhID0gKHBhcnNlSW50KGEsIDEwKSB8fCAwKSAtIChwYXJzZUludChiLCAxMCkgfHwgMCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWx0YSB8fCBpc1NlbXZlck1vZGUgJiYgKGxlbjEgLSBsZW4yKTtcbn1cblxuY29uc3QgdW5pdHMgPSBbXG4gIFsnbWluJywgNjBdLFxuICBbJ2gnLCAyNF0sXG4gIFsnZCcsIDEwMDAsIDM2NV0sXG4gIFsneSddLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lKGR1cmF0aW9uKSB7XG4gIGR1cmF0aW9uIC89IDYwICogMTAwMDtcbiAgY29uc3QgdW5pdEluZm8gPSB1bml0cy5maW5kKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbWF4ID0gaXRlbVsxXTtcbiAgICBpZiAoIW1heCB8fCBkdXJhdGlvbiA8IG1heCkgcmV0dXJuIHRydWU7XG4gICAgY29uc3Qgc3RlcCA9IGl0ZW1bMl0gfHwgbWF4O1xuICAgIGR1cmF0aW9uIC89IHN0ZXA7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgcmV0dXJuIGAke2R1cmF0aW9uIHwgMH0ke3VuaXRJbmZvWzBdfWA7XG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRCeXRlTGVuZ3RoID0gbGVuID0+IChcbiAgIWxlbiA/ICcnXG4gICAgOiBsZW4gPCAxMDI0ICYmIGAke2xlbn0gQmBcbiAgICB8fCBsZW4gPCAxMDI0ICogMTAyNCAmJiBgJHtsZW4gPj4gMTB9IGtgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYml0d2lzZVxuICAgIHx8IGAkeysobGVuIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgxKX0gTWAgLy8gYWxsb3cgZnJhY3Rpb25zIGZvciBtZWdhYnl0ZXNcbik7XG5cbi8vIFVzZWQgYnkgYGluamVjdGVkYFxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChvYmo6Omhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVBcnJheShkYXRhKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXTtcbn1cblxuY29uc3QgYmluYXJ5VHlwZXMgPSBbXG4gICdibG9iJyxcbiAgJ2FycmF5YnVmZmVyJyxcbl07XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdExvY2FsRmlsZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAvLyBvbmx5IEdFVCBtZXRob2QgaXMgYWxsb3dlZCBmb3IgbG9jYWwgZmlsZXNcbiAgLy8gaGVhZGVycyBpcyBtZWFuaW5nbGVzc1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IHsgcmVzcG9uc2VUeXBlIH0gPSBvcHRpb25zO1xuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgIGlmIChiaW5hcnlUeXBlcy5pbmNsdWRlcyhyZXNwb25zZVR5cGUpKSB4aHIucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlO1xuICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAvLyBzdGF0dXMgZm9yIGBmaWxlOmAgcHJvdG9jb2wgd2lsbCBhbHdheXMgYmUgYDBgXG4gICAgICByZXN1bHQuc3RhdHVzID0geGhyLnN0YXR1cyB8fCAyMDA7XG4gICAgICByZXN1bHQuZGF0YSA9IGJpbmFyeVR5cGVzLmluY2x1ZGVzKHJlc3BvbnNlVHlwZSkgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgaWYgKHJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0LmRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLy8gaWdub3JlIGludmFsaWQgSlNPTlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA+IDMwMCkge1xuICAgICAgICByZWplY3QocmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgcmVzdWx0LnN0YXR1cyA9IC0xO1xuICAgICAgcmVqZWN0KHJlc3VsdCk7XG4gICAgfTtcbiAgICB4aHIuc2VuZCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBFeGNsdWRlcyBgdGV4dC9odG1sYCB0byBhdm9pZCBMSU5LIGhlYWRlciB0aGF0IENocm9tZSB1c2VzIHRvIHByZWZldGNoIGpzIGFuZCBjc3MsXG4gKiBiZWNhdXNlIEdyZWFzeUZvcmsncyA0MDQgZXJyb3IgcmVzcG9uc2UgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIGNvbnNvbGUgb2Ygb3VyIHBhZ2UuXG4gKi9cbmNvbnN0IEZPUkNFRF9BQ0NFUFQgPSB7XG4gICdncmVhc3lmb3JrLm9yZyc6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCB0ZXh0L3BsYWluLCB0ZXh0L2NzcycsXG59O1xuXG5leHBvcnQgY29uc3QgaXNSZW1vdGUgPSB1cmwgPT4gdXJsXG4gICYmICEoL14oZmlsZTp8ZGF0YTp8aHR0cHM/OlxcL1xcLyhsb2NhbGhvc3R8MTI3XFwuMFxcLjBcXC4xWzovXSkpLy50ZXN0KHVybCkpO1xuXG4vKiogQHR5cGVkZWYge3tcbiAgdXJsOiBzdHJpbmcsXG4gIHN0YXR1czogbnVtYmVyLFxuICBoZWFkZXJzOiBIZWFkZXJzLFxuICBkYXRhOiBzdHJpbmd8QXJyYXlCdWZmZXJ8QmxvYnxPYmplY3Rcbn19IFZNUmVxdWVzdFJlc3BvbnNlICovXG4vKipcbiAqIE1ha2UgYSByZXF1ZXN0LlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtSZXF1ZXN0SW5pdH0gb3B0aW9uc1xuICogQHJldHVybiBQcm9taXNlPFZNUmVxdWVzdFJlc3BvbnNlPlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAvLyBmZXRjaCBkb2VzIG5vdCBzdXBwb3J0IGxvY2FsIGZpbGVcbiAgaWYgKHVybC5zdGFydHNXaXRoKCdmaWxlOi8vJykpIHJldHVybiByZXF1ZXN0TG9jYWxGaWxlKHVybCwgb3B0aW9ucyk7XG4gIGNvbnN0IHsgYm9keSwgaGVhZGVycywgcmVzcG9uc2VUeXBlIH0gPSBvcHRpb25zO1xuICBjb25zdCBpc0JvZHlPYmogPSBib2R5ICYmIGJvZHk6Oih7fSkudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gIGNvbnN0IGhvc3RuYW1lID0gdXJsLnNwbGl0KCcvJywgMylbMl07XG4gIGNvbnN0IGFjY2VwdCA9IEZPUkNFRF9BQ0NFUFRbaG9zdG5hbWVdO1xuICAvLyBOb3QgdXNpbmcgLi4uc3ByZWFkIGJlY2F1c2UgQmFiZWwgbWlzdGFrZW5seSBhZGRzIGl0cyBwb2x5ZmlsbCB0byBpbmplY3RlZC13ZWJcbiAgY29uc3QgaW5pdCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGNhY2hlOiBpc1JlbW90ZSh1cmwpID8gdW5kZWZpbmVkIDogJ25vLWNhY2hlJyxcbiAgfSwgb3B0aW9ucywge1xuICAgIGJvZHk6IGlzQm9keU9iaiA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSxcbiAgICBoZWFkZXJzOiBpc0JvZHlPYmogfHwgYWNjZXB0XG4gICAgICA/IE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIGlzQm9keU9iaiAmJiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYWNjZXB0ICYmIHsgYWNjZXB0IH0pXG4gICAgICA6IGhlYWRlcnMsXG4gIH0pO1xuICBjb25zdCByZXN1bHQgPSB7IHVybCwgc3RhdHVzOiAtMSB9O1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgIGNvbnN0IGxvYWRNZXRob2QgPSB7XG4gICAgICBhcnJheWJ1ZmZlcjogJ2FycmF5QnVmZmVyJyxcbiAgICAgIGJsb2I6ICdibG9iJyxcbiAgICAgIGpzb246ICdqc29uJyxcbiAgICB9W3Jlc3BvbnNlVHlwZV0gfHwgJ3RleHQnO1xuICAgIC8vIHN0YXR1cyBmb3IgYGZpbGU6YCBwcm90b2NvbCB3aWxsIGFsd2F5cyBiZSBgMGBcbiAgICByZXN1bHQuc3RhdHVzID0gcmVzcC5zdGF0dXMgfHwgMjAwO1xuICAgIHJlc3VsdC5oZWFkZXJzID0gcmVzcC5oZWFkZXJzO1xuICAgIHJlc3VsdC5kYXRhID0gYXdhaXQgcmVzcFtsb2FkTWV0aG9kXSgpO1xuICB9IGNhdGNoIHsgLyogTk9QICovIH1cbiAgaWYgKHJlc3VsdC5zdGF0dXMgPCAwIHx8IHJlc3VsdC5zdGF0dXMgPiAzMDApIHRocm93IHJlc3VsdDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gVXNlZCBieSBgaW5qZWN0ZWRgXG5jb25zdCBTSU1QTEVfVkFMVUVfVFlQRSA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBzdHJpbmc6ICdzJyxcbiAgbnVtYmVyOiAnbicsXG4gIGJvb2xlYW46ICdiJyxcbn07XG5cbi8vIFVzZWQgYnkgYGluamVjdGVkYFxuZXhwb3J0IGZ1bmN0aW9uIGR1bXBTY3JpcHRWYWx1ZSh2YWx1ZSwganNvbkR1bXAgPSBKU09OLnN0cmluZ2lmeSkge1xuICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IFNJTVBMRV9WQUxVRV9UWVBFW3R5cGVvZiB2YWx1ZV07XG4gICAgcmV0dXJuIGAke3NpbXBsZSB8fCAnbyd9JHtzaW1wbGUgPyB2YWx1ZSA6IGpzb25EdW1wKHZhbHVlKX1gO1xuICB9XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXJyb3cuc3ZnXCI6IFwiLi9zcmMvcmVzb3VyY2VzL3N2Zy9hcnJvdy5zdmdcIixcblx0XCIuL2F1dGhvci5zdmdcIjogXCIuL3NyYy9yZXNvdXJjZXMvc3ZnL2F1dGhvci5zdmdcIixcblx0XCIuL2NvZGUuc3ZnXCI6IFwiLi9zcmMvcmVzb3VyY2VzL3N2Zy9jb2RlLnN2Z1wiLFxuXHRcIi4vY29nLnN2Z1wiOiBcIi4vc3JjL3Jlc291cmNlcy9zdmcvY29nLnN2Z1wiLFxuXHRcIi4vY29tbWFuZC5zdmdcIjogXCIuL3NyYy9yZXNvdXJjZXMvc3ZnL2NvbW1hbmQuc3ZnXCIsXG5cdFwiLi9maWx0ZXIuc3ZnXCI6IFwiLi9zcmMvcmVzb3VyY2VzL3N2Zy9maWx0ZXIuc3ZnXCIsXG5cdFwiLi9ob21lLnN2Z1wiOiBcIi4vc3JjL3Jlc291cmNlcy9zdmcvaG9tZS5zdmdcIixcblx0XCIuL2luZm8uc3ZnXCI6IFwiLi9zcmMvcmVzb3VyY2VzL3N2Zy9pbmZvLnN2Z1wiLFxuXHRcIi4vbW9yZS5zdmdcIjogXCIuL3NyYy9yZXNvdXJjZXMvc3ZnL21vcmUuc3ZnXCIsXG5cdFwiLi9wbHVzLnN2Z1wiOiBcIi4vc3JjL3Jlc291cmNlcy9zdmcvcGx1cy5zdmdcIixcblx0XCIuL3F1ZXN0aW9uLnN2Z1wiOiBcIi4vc3JjL3Jlc291cmNlcy9zdmcvcXVlc3Rpb24uc3ZnXCIsXG5cdFwiLi9yZWZyZXNoLnN2Z1wiOiBcIi4vc3JjL3Jlc291cmNlcy9zdmcvcmVmcmVzaC5zdmdcIixcblx0XCIuL3NlYXJjaC5zdmdcIjogXCIuL3NyYy9yZXNvdXJjZXMvc3ZnL3NlYXJjaC5zdmdcIixcblx0XCIuL3RvZ2dsZS1vZmYuc3ZnXCI6IFwiLi9zcmMvcmVzb3VyY2VzL3N2Zy90b2dnbGUtb2ZmLnN2Z1wiLFxuXHRcIi4vdG9nZ2xlLW9uLnN2Z1wiOiBcIi4vc3JjL3Jlc291cmNlcy9zdmcvdG9nZ2xlLW9uLnN2Z1wiLFxuXHRcIi4vdHJhc2guc3ZnXCI6IFwiLi9zcmMvcmVzb3VyY2VzL3N2Zy90cmFzaC5zdmdcIixcblx0XCIuL3VuZG8uc3ZnXCI6IFwiLi9zcmMvcmVzb3VyY2VzL3N2Zy91bmRvLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9yZXNvdXJjZXMvc3ZnIHN5bmMgXFxcXC5zdmckXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==