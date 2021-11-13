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
const IS_FIREFOX = !global.chrome.app;/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"confirm/index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/confirm/index.js","common-ui","public/lib/codemirror","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/confirm/views/app.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/confirm/views/app.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vueleton/lib/tooltip/bundle */ "./node_modules/vueleton/lib/tooltip/bundle.js");
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/ui/icon */ "./src/common/ui/icon.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/keyboard */ "./src/common/keyboard.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/options */ "./src/common/options.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/cache */ "./src/common/cache.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/common/storage */ "./src/common/storage.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_externals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/common/ui/externals */ "./src/common/ui/externals.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_check__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/common/ui/setting-check */ "./src/common/ui/setting-check.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_load_script_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/common/load-script-icon */ "./src/common/load-script-icon.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/common/router */ "./src/common/router.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/common/ua */ "./src/common/ua.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













const KEEP_INFO_DELAY = 5000;
const RETRY_DELAY = 3000;
const RETRY_COUNT = 2;
const MAX_TITLE_NAME_LEN = 100;
const CONFIRM_HOTKEY = `${/Mac/.test(navigator.platform) ? 'Cmd' : 'Ctrl'}-Enter`;
const cache = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_cache__WEBPACK_IMPORTED_MODULE_5__["default"])({
  lifetime: RETRY_DELAY * (RETRY_COUNT + 1)
});
/** @type {chrome.runtime.Port} */

let filePort;
/** @type {function()} */

let filePortResolve;
/** @type {boolean} */

let filePortNeeded;
let basicTitle;
let cachedCodePromise;
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Icon: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_1__["default"],
    VmExternals: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_externals__WEBPACK_IMPORTED_MODULE_7__["default"],
    SettingCheck: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_check__WEBPACK_IMPORTED_MODULE_8__["default"],
    Tooltip: (vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_0___default())
  },

  data() {
    return {
      installable: false,
      installed: false,
      closeAfterInstall: _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_4__["default"].get('closeAfterInstall'),
      message: '',
      cmOptions: {
        lineWrapping: true
      },
      code: '',
      commands: {
        close: this.close
      },
      confirmHotkey: CONFIRM_HOTKEY,

      /** @type VMConfirmCache */
      info: {},
      deps: {},
      // combines `this.require` and `this.resources` = all actually loaded deps
      descr: '',
      error: null,
      heading: this.i18n('msgLoadingData'),
      lists: null,
      listsShown: true,
      name: '...',
      reinstall: false,
      safeIcon: null,
      sameCode: false,
      script: null
    };
  },

  computed: {
    trackTooltip() {
      return _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_12__["default"].firefox >= 68 ? this.i18n('installOptionTrackTooltip') : null;
    },

    isLocal() {
      return !Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["isRemote"])(this.info.url);
    },

    icons() {
      var _this$script;

      const {
        homepageURL,
        supportURL
      } = ((_this$script = this.script) == null ? void 0 : _this$script.meta) || {};
      return [homepageURL && [homepageURL, 'home', this.i18n('labelHomepage')], supportURL && [supportURL, 'question', this.i18n('buttonSupport')]].filter(Boolean);
    }

  },

  async mounted() {
    const id = _Users_ZhaoJun_Desktop_violentmonkey_src_common_router__WEBPACK_IMPORTED_MODULE_11__["route"].paths[0];
    const key = `confirm-${id}`;
    const info = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('CacheLoad', key);
    this.info = info;

    if (!info) {
      this.close();
      return;
    }
    /* sendCmdDirectly makes the page load so fast that the local `ua` is still unverified,
       so we use the background `ua` to check for FF68 that disallows file: scheme in fetch() */


    filePortNeeded = info.ff >= 68 && info.url.startsWith('file:');
    cachedCodePromise = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('CachePop', info.url);
    this.guard = setInterval(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"], KEEP_INFO_DELAY, 'CacheHit', {
      key
    });
    await this.loadData();
    await this.parseMeta();
    await Promise.all([this.checkSameCode(), (async () => {
      let retries = RETRY_COUNT;

      while (!(await this.loadDeps()) && retries) {
        await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["makePause"])(RETRY_DELAY);
        retries -= 1;
      }
    })()]);

    if (this.installable) {
      this.heading = this.reinstall ? this.i18n('labelReinstall') : this.i18n('labelInstall');
    }

    this.disposeList = [_Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_3__["keyboardService"].register(CONFIRM_HOTKEY, () => this.$refs.confirm.click())];
    _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_3__["keyboardService"].enable();
  },

  beforeDestroy() {
    var _this$disposeList;

    if (this.guard) {
      clearInterval(this.guard);
      this.guard = null;
    }

    (_this$disposeList = this.disposeList) == null ? void 0 : _this$disposeList.forEach(dispose => dispose());
  },

  methods: {
    async loadData(changedOnly) {
      this.installable = false;
      const code = filePortNeeded ? await new Promise(this.pingFilePort) : await this.getScript(this.info.url);
      if (code == null || changedOnly && this.code === code) throw 0;
      this.setCode(code);
    },

    setCode(code) {
      var _this$$refs$externals, _this$$refs$externals2;

      const lines = code.split(/\r?\n/);
      const cm = (_this$$refs$externals = this.$refs.externals) == null ? void 0 : (_this$$refs$externals2 = _this$$refs$externals.$refs.code) == null ? void 0 : _this$$refs$externals2.cm;
      let i = -1;
      let isDiff;

      if (cm) {
        cm.eachLine(({
          text
        }) => {
          isDiff = text !== lines[i += 1];
          return isDiff;
        });
      }

      this.code = code;

      if (isDiff || cm && i < lines.length - 1) {
        this.$nextTick(() => {
          cm.setCursor(i);
          cm.scrollIntoView(null, cm.display.lastWrapHeight / 3);
        });
      }
    },

    async parseMeta() {
      /** @type {VMScriptMeta} */
      const meta = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('ParseMeta', this.code);
      const name = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["getLocaleString"])(meta, 'name');
      document.title = `${name.slice(0, MAX_TITLE_NAME_LEN)}${name.length > MAX_TITLE_NAME_LEN ? '...' : ''} - ${basicTitle || (basicTitle = document.title)}`;
      this.name = safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["trueJoin"], [name, meta.version], ', ');
      this.descr = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["getLocaleString"])(meta, 'description');
      this.lists = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_10__["objectPick"])(meta, ['antifeature', 'grant', 'match', 'include', 'exclude', 'excludeMatch', 'compatible', 'connect'], list => (list == null ? void 0 : list.map(s => [s.replace(/^\W+/, '') || s, s]).sort(([a], [b]) => a < b ? -1 : a > b).map(([, s]) => s).join('\n')) || '');
      this.script = {
        meta,
        custom: {},
        props: {}
      };
      this.allDeps = [[...new Set(meta.require)], [...new Set(Object.values(meta.resources))]];
    },

    async loadDeps() {
      const {
        script,
        allDeps: [require, resource]
      } = this;

      if (!this.safeIcon) {
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_load_script_icon__WEBPACK_IMPORTED_MODULE_9__["loadScriptIcon"])(script).then(url => {
          this.safeIcon = url;
        });
      }

      if (this.require && Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_10__["deepEqual"])(require.slice().sort(), Object.keys(this.require).sort()) && Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_10__["deepEqual"])(resource.slice().sort(), Object.keys(this.resources).sort())) {
        return;
      }

      this.require = {};
      this.resources = {};
      const length = require.length + resource.length;
      let finished = 0; // All resources may finish quickly so we delay the status to avoid flicker

      const STATUS_DELAY = 500;
      const startTime = performance.now();

      const updateStatus = () => {
        if (performance.now() - startTime > STATUS_DELAY) {
          this.message = this.i18n('msgLoadingDependency', [finished, length]);
        }
      };
      /** @returns {string|undefined} URL in case of error or `undefined` on success */


      const download = async (url, target, isBlob) => {
        const fullUrl = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["getFullUrl"])(url, this.info.url);
        const depsUrl = `${+isBlob}${url}`; // the same URL may be listed in both categories

        try {
          const file = await this.getFile(fullUrl, {
            isBlob,
            useCache: true
          });
          target[fullUrl] = file;
          this.deps[depsUrl] = file;
          finished += 1;
          updateStatus();
        } catch (e) {
          this.deps[depsUrl] = false;
          return url;
        }
      };

      const delayedStatus = setTimeout(updateStatus, STATUS_DELAY);
      const promises = [...require.map(url => download(url, this.require, false)), ...resource.map(url => download(url, this.resources, true))];
      const error = safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["trueJoin"], (await Promise.all(promises)), '\n');
      clearTimeout(delayedStatus);

      if (error) {
        this.message = this.i18n('msgErrorLoadingDependency');
        this.error = error;
      } else {
        this.error = null;
        this.installable = true;
        this.message = null;
        return true;
      }
    },

    close() {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('TabClose');
    },

    async getFile(url, {
      isBlob,
      useCache
    } = {}) {
      const cacheKey = isBlob ? `blob+${url}` : `text+${url}`;

      if (useCache && cache.has(cacheKey)) {
        return cache.get(cacheKey);
      }

      const response = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["request"])(url, {
        responseType: isBlob ? 'blob' : null
      });
      const data = isBlob ? await _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_6__["default"].cache.makeRaw(response) : response.data;
      if (useCache) cache.put(cacheKey, data);
      return data;
    },

    async getScript(url) {
      try {
        return cachedCodePromise && (await cachedCodePromise) || (await this.getFile(url));
      } catch (e) {
        this.message = this.i18n('msgErrorLoadingData');
        throw url;
      } finally {
        cachedCodePromise = null;
      }
    },

    async installScript() {
      this.installable = false;

      try {
        const {
          update
        } = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('ParseScript', {
          code: this.code,
          url: this.info.url,
          from: this.info.from,
          require: this.require,
          cache: this.resources
        });
        const time = new Date().toLocaleTimeString(['fr']);
        const time0 = this.confirmedTime || (this.confirmedTime = time);
        this.message = `${update.message} ${time0}${time0 === time ? '' : ` --> ${time}`}`;

        if (this.closeAfterInstall) {
          this.close();
        } else {
          this.installed = true;
          this.trackLocalFile();
        }
      } catch (err) {
        this.message = `${err}`;
        this.installable = true;
      }
    },

    async trackLocalFile() {
      if (this.tracking || !this.isLocal || !this.installed) {
        return;
      }

      cachedCodePromise = null; // always re-read because the file may have changed since then

      this.tracking = true;

      while (_Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_4__["default"].get('trackLocalFile') && this.tracking !== 'stop') {
        await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["makePause"])(500);

        try {
          await this.loadData(true);
          await this.parseMeta();
          await this.loadDeps();
          await this.installScript();
          this.sameCode = false;
        } catch (e) {
          /* NOP */
        }
      }

      this.tracking = false;
    },

    checkClose(value) {
      this.closeAfterInstall = value;
      if (value) _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_4__["default"].set('trackLocalFile', false);
    },

    async checkSameCode() {
      const {
        name,
        namespace
      } = this.script.meta || {};
      const old = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('GetScript', {
        meta: {
          name,
          namespace
        }
      });
      this.reinstall = !!old;
      this.sameCode = old && this.code === (await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('GetScriptCode', old.props.id));
    },

    createFilePort() {
      filePort = browser.tabs.connect(this.info.tabId, {
        name: 'FetchSelf'
      });
      filePort.onMessage.addListener(code => {
        filePortResolve(code);
      });
      filePort.onDisconnect.addListener(() => {
        this.tracking = 'stop';
      });
    },

    pingFilePort(resolve) {
      if (!filePort) this.createFilePort();
      filePortResolve = resolve;
      filePort.postMessage(null);
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/confirm/style.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./src/confirm/style.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html,\nbody {\n  height: 100%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/confirm/views/app.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/confirm/views/app.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.page-confirm h1 {\n    line-height: 1.3;\n    margin: .25rem 0;\n}\n.page-confirm a:not(:hover) {\n    color: unset;\n    text-decoration: none;\n}\n.page-confirm p {\n    margin-top: 1rem;\n}\n.page-confirm .self-start {\n    align-self: flex-start;\n}\n.page-confirm .image {\n    flex: 0 0 48px;\n    align-items: center;\n    justify-content: center;\n    height: 48px; /* reserve the height so it doesn't shift when the icon loads*/\n    padding: 0 14px 0 .25rem;\n    box-sizing: content-box;\n}\n.page-confirm .image img {\n      max-width: 100%;\n      max-height: 100%;\n}\n.page-confirm .info {\n    overflow: hidden;\n}\n.page-confirm .info .descr {\n      max-height: 4rem;\n      overflow-y: auto;\n}\n.page-confirm .info .abs-center {\n      position: absolute;\n      margin-left: -47px;\n      cursor: pointer;\n}\n.page-confirm .icon {\n    width: 18px;\n    height: 18px;\n}\n.page-confirm .lists {\n    margin-top: 1rem;\n}\n.page-confirm .lists dl {\n      margin: 0 1rem 1rem 0\n}\n.page-confirm .lists dl[data-type=\"antifeature\"] dd {\n        border: 1px solid rgba(255, 0, 0, .5);\n        background: rgba(255, 0, 0, .05);\n        padding: 2px 6px;\n        max-width: 25em;\n}\n.page-confirm .lists dt {\n      font-weight: bold;\n}\n.page-confirm .lists dd {\n      white-space: pre-wrap;\n      min-width: 5rem;\n      max-height: 10vh;\n      min-height: 1.5rem;\n      overflow-y: auto;\n}\n.page-confirm [data-collapsed] dd {\n      display: none;\n}\n.page-confirm [data-collapsed] dl:focus dd {\n      display: flex;\n      position: absolute;\n      max-height: 50vh;\n      z-index: 100;\n      background: var(--fill-0-5);\n      box-shadow: 1px 3px 9px rgba(128, 128, 128, .5);\n      padding: .5rem;\n}\n.page-confirm [data-collapsed] dt {\n      cursor: pointer;\n}\n.page-confirm [data-collapsed] .toggle {\n      opacity: .3;\n}\n.page-confirm .actions {\n    align-items: center;\n}\n.page-confirm .actions label {\n      align-items: center;\n}\n.page-confirm .actions .status {\n      border-left: 5px solid darkorange;\n      padding: .5em;\n      color: #d33a00;\n      animation: fade-in .5s 1 both;\n}\n.page-confirm .incognito {\n    padding: .25em 0;\n    color: red;\n}\n.page-confirm #confirm {\n    font-weight: bold;\n    background: #d4e2d4;\n    border-color: #75a775;\n    color: darkgreen\n}\n.page-confirm #confirm:hover {\n      border-color: #488148;\n}\n.page-confirm #confirm::after {\n      content: \" (\" attr(data-hotkey) \")\";\n      opacity: .75;\n      font-weight: normal;\n}\n.page-confirm.reinstall #confirm {\n    background: #d1e0ea;\n    border-color: #6699ce;\n    color: #004fc5\n}\n.page-confirm.reinstall #confirm:hover {\n      border-color: #35699f;\n}\n@media (prefers-color-scheme: dark) {\n.page-confirm .incognito {\n      color: orange;\n}\n.page-confirm #confirm {\n      background: #3a5d3a;\n      border-color: #598059;\n      color: #9cd89c\n}\n.page-confirm #confirm:hover {\n        border-color: #80a980;\n}\n.page-confirm.reinstall #confirm {\n      background: #224a73;\n      border-color: #3d6996;\n      color: #9fcdfd\n}\n.page-confirm.reinstall #confirm:hover {\n        border-color: #608cb8;\n}\n}\n.page-confirm .edit-externals .select {\n    resize: vertical\n}\n.page-confirm .edit-externals .select[style] {\n      max-height: 80%;\n}\n@media (max-width: 1599px) {\n.page-confirm >:first-child {\n      min-height: 5em;\n      max-height: 80vh;\n      width: auto !important; /* resetting the inline style attribute if the user resized it*/\n      resize: vertical;\n      overflow-y: auto;\n}\n}\n@media (min-width: 1600px) {\n.page-confirm {\n    flex-direction: row;\n}\n.page-confirm >:first-child {\n      min-width: 30em;\n      max-width: 80%;\n      width: 40%;\n      height: auto !important; /* resetting the inline style attribute if the user resized it*/\n      resize: horizontal;\n      overflow: hidden;\n}\n.page-confirm .info .descr {\n      max-height: 20vh;\n}\n.page-confirm .lists {\n      overflow-y: auto;\n      max-height: 75vh;\n}\n.page-confirm .lists dd {\n      max-height: 30vh;\n}\n.page-confirm .edit-externals {\n      border-top: none;\n      border-left: var(--border);\n}\n}\n.confirm-options label {\n    display: block;\n}\n.confirm-options .vl-dropdown-menu {\n    width: 13rem;\n}\n.vl-tooltip-bottom > i {\n    margin-left: 10px;\n}\n.vl-tooltip-bottom.vl-tooltip-align-left {\n    margin-left: -13px;\n}\n@keyframes fade-in {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/confirm/views/app.vue?vue&type=template&id=74f0cb68&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/confirm/views/app.vue?vue&type=template&id=74f0cb68& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "page-confirm frame flex flex-col h-100",
      class: { reinstall: _vm.reinstall }
    },
    [
      _c("div", { staticClass: "frame-block" }, [
        _c("div", { staticClass: "flex" }, [
          _vm._m(0),
          _c(
            "div",
            { staticClass: "info" },
            [
              _c("h1", [
                _c("div", [
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.heading) }
                  }),
                  _vm.sameCode
                    ? _c("span", {
                        staticStyle: { "font-weight": "normal" },
                        domProps: {
                          textContent: _vm._s(_vm.i18n("msgSameCode"))
                        }
                      })
                    : _vm._e()
                ]),
                _c("div", {
                  staticClass: "ellipsis",
                  domProps: { textContent: _vm._s(_vm.name) }
                })
              ]),
              _c(
                "div",
                { staticClass: "flex" },
                [
                  _c(
                    "tooltip",
                    {
                      staticClass: "abs-center",
                      attrs: {
                        content: _vm.i18n("editNavCode"),
                        placement: "right"
                      }
                    },
                    [_c("icon", { attrs: { name: "code" } })],
                    1
                  ),
                  _c("span", {
                    staticClass: "ellipsis",
                    domProps: {
                      textContent: _vm._s(
                        _vm.info.url ? decodeURIComponent(_vm.info.url) : "..."
                      )
                    }
                  })
                ],
                1
              ),
              _vm._l(_vm.icons, function(ref) {
                var url = ref[0]
                var icon = ref[1]
                var title = ref[2]
                return _c(
                  "a",
                  {
                    key: icon,
                    staticClass: "flex",
                    attrs: { target: "_blank", href: url }
                  },
                  [
                    _c(
                      "tooltip",
                      {
                        staticClass: "abs-center",
                        attrs: { content: title, placement: "right" }
                      },
                      [_c("icon", { attrs: { name: icon } })],
                      1
                    ),
                    _c("span", {
                      staticClass: "ellipsis",
                      domProps: { textContent: _vm._s(decodeURIComponent(url)) }
                    })
                  ],
                  1
                )
              }),
              _c("p", {
                staticClass: "descr",
                domProps: { textContent: _vm._s(_vm.descr) }
              }),
              _c(
                "div",
                {
                  staticClass: "lists flex flex-wrap",
                  attrs: { "data-collapsed": !_vm.listsShown }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "toggle abs-center",
                      on: {
                        click: function($event) {
                          _vm.listsShown = !_vm.listsShown
                        }
                      }
                    },
                    [
                      _vm.lists
                        ? _c(
                            "tooltip",
                            {
                              attrs: {
                                content: _vm.i18n("msgShowHide"),
                                placement: "bottom",
                                align: "left"
                              }
                            },
                            [_c("icon", { attrs: { name: "info" } })],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._l(_vm.lists, function(list, name) {
                    return _c(
                      "dl",
                      {
                        key: name,
                        attrs: {
                          "data-type": name,
                          hidden: !list.length,
                          tabindex: "0"
                        }
                      },
                      [
                        _c("dt", {
                          domProps: { textContent: _vm._s("@" + name) }
                        }),
                        _c("dd", {
                          staticClass: "ellipsis",
                          domProps: { textContent: _vm._s(list) }
                        })
                      ]
                    )
                  })
                ],
                2
              )
            ],
            2
          )
        ]),
        _c("div", { staticClass: "flex" }, [
          _c("div", { staticClass: "image flex" }, [
            _c("img", { attrs: { src: _vm.safeIcon } })
          ]),
          _c("div", { staticClass: "actions flex flex-wrap mr-2c" }, [
            _c("button", {
              ref: "confirm",
              attrs: {
                id: "confirm",
                "data-hotkey": _vm.confirmHotkey,
                disabled: !_vm.installable
              },
              domProps: {
                textContent: _vm._s(
                  _vm.reinstall
                    ? _vm.i18n("buttonConfirmReinstallation")
                    : _vm.i18n("buttonConfirmInstallation")
                )
              },
              on: { click: _vm.installScript }
            }),
            _c("button", {
              domProps: { textContent: _vm._s(_vm.i18n("buttonClose")) },
              on: { click: _vm.close }
            }),
            _c(
              "div",
              { staticClass: "flex flex-col my-1" },
              [
                _c("setting-check", {
                  attrs: {
                    name: "closeAfterInstall",
                    label: _vm.i18n("installOptionClose")
                  },
                  on: { change: _vm.checkClose }
                }),
                _c(
                  "setting-check",
                  {
                    attrs: {
                      name: "trackLocalFile",
                      disabled: _vm.closeAfterInstall || !_vm.isLocal
                    },
                    on: { change: _vm.trackLocalFile }
                  },
                  [
                    _c(
                      "tooltip",
                      {
                        attrs: {
                          content: _vm.trackTooltip,
                          disabled: !_vm.trackTooltip
                        }
                      },
                      [
                        _c("span", {
                          domProps: {
                            textContent: _vm._s(_vm.i18n("installOptionTrack"))
                          }
                        })
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm.message
              ? _c("div", {
                  staticClass: "status",
                  attrs: { title: _vm.error },
                  domProps: { textContent: _vm._s(_vm.message) }
                })
              : _vm._e()
          ])
        ]),
        _vm.info.incognito
          ? _c("div", {
              staticClass: "incognito",
              domProps: { textContent: _vm._s(_vm.i18n("msgIncognitoChanges")) }
            })
          : _vm._e()
      ]),
      _c(
        "div",
        { staticClass: "frame-block flex-1 pos-rel" },
        [
          _vm.script
            ? _c("vm-externals", {
                ref: "externals",
                staticClass: "abs-full",
                attrs: {
                  "cm-options": _vm.cmOptions,
                  commands: _vm.commands,
                  install: { code: _vm.code, deps: _vm.deps, url: _vm.info.url }
                },
                model: {
                  value: _vm.script,
                  callback: function($$v) {
                    _vm.script = $$v
                  },
                  expression: "script"
                }
              })
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image" }, [
      _c("img", { attrs: { src: "/public/images/icon128.png" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/confirm/views/app.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/confirm/views/app.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/confirm/views/app.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("40e33a8e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/confirm/index.js":
/*!******************************!*\
  !*** ./src/confirm/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/browser */ "./src/common/browser.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/handlers */ "./src/common/handlers.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/options */ "./src/common/options.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_favicon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/ui/favicon */ "./src/common/ui/favicon.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/common/ui/style */ "./src/common/ui/style/index.js");
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/app */ "./src/confirm/views/app.vue");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./src/confirm/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);









vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.i18n = _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"];
document.title = `${Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('labelInstall')} - ${Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('extName')}`;
_Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_4__["default"].ready.then(() => {
  const el = document.createElement('div');
  document.body.appendChild(el);
  new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
    render: h => h(_views_app__WEBPACK_IMPORTED_MODULE_7__["default"])
  }).$mount(el);
});

/***/ }),

/***/ "./src/confirm/style.css":
/*!*******************************!*\
  !*** ./src/confirm/style.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/confirm/style.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3c0d2f12", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/confirm/views/app.vue":
/*!***********************************!*\
  !*** ./src/confirm/views/app.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_74f0cb68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=74f0cb68& */ "./src/confirm/views/app.vue?vue&type=template&id=74f0cb68&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./src/confirm/views/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&lang=css& */ "./src/confirm/views/app.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_74f0cb68___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_74f0cb68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/confirm/views/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/confirm/views/app.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/confirm/views/app.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/confirm/views/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/confirm/views/app.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************!*\
  !*** ./src/confirm/views/app.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/confirm/views/app.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/confirm/views/app.vue?vue&type=template&id=74f0cb68&":
/*!******************************************************************!*\
  !*** ./src/confirm/views/app.vue?vue&type=template&id=74f0cb68& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_74f0cb68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=74f0cb68& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/confirm/views/app.vue?vue&type=template&id=74f0cb68&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_74f0cb68___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_74f0cb68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3NyYy9jb25maXJtL3ZpZXdzL2FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpcm0vc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb25maXJtL3ZpZXdzL2FwcC52dWU/YWE2ZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlybS92aWV3cy9hcHAudnVlPzdhNzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpcm0vdmlld3MvYXBwLnZ1ZT9jMTJiIiwid2VicGFjazovLy8uL3NyYy9jb25maXJtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maXJtL3N0eWxlLmNzcz9jYjQzIiwid2VicGFjazovLy8uL3NyYy9jb25maXJtL3ZpZXdzL2FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpcm0vdmlld3MvYXBwLnZ1ZT8xNTIxIiwid2VicGFjazovLy8uL3NyYy9jb25maXJtL3ZpZXdzL2FwcC52dWU/MmVkNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlybS92aWV3cy9hcHAudnVlPzY0YTciXSwibmFtZXMiOlsiVnVlIiwicHJvdG90eXBlIiwiaTE4biIsImRvY3VtZW50IiwidGl0bGUiLCJvcHRpb25zIiwicmVhZHkiLCJ0aGVuIiwiZWwiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVuZGVyIiwiaCIsIkFwcCIsIiRtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImNvbmZpcm0vaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9jb25maXJtL2luZGV4LmpzXCIsXCJjb21tb24tdWlcIixcInB1YmxpYy9saWIvY29kZW1pcnJvclwiLFwiY29tbW9uXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZS1jb25maXJtIGZyYW1lIGZsZXggZmxleC1jb2wgaC0xMDBcIiA6Y2xhc3M9XCJ7IHJlaW5zdGFsbCB9XCI+XG4gICAgPGRpdiBjbGFzcz1cImZyYW1lLWJsb2NrXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9wdWJsaWMvaW1hZ2VzL2ljb24xMjgucG5nXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIHYtdGV4dD1cImhlYWRpbmdcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIHYtdGV4dD1cImkxOG4oJ21zZ1NhbWVDb2RlJylcIiBzdHlsZT1cImZvbnQtd2VpZ2h0Om5vcm1hbFwiIHYtaWY9XCJzYW1lQ29kZVwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsbGlwc2lzXCIgdi10ZXh0PVwibmFtZVwiLz5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICA8dG9vbHRpcCA6Y29udGVudD1cImkxOG4oJ2VkaXROYXZDb2RlJylcIiBjbGFzcz1cImFicy1jZW50ZXJcIiBwbGFjZW1lbnQ9XCJyaWdodFwiPlxuICAgICAgICAgICAgICA8aWNvbiBuYW1lPVwiY29kZVwiLz5cbiAgICAgICAgICAgIDwvdG9vbHRpcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZWxsaXBzaXNcIiB2LXRleHQ9XCJpbmZvLnVybCA/IGRlY29kZVVSSUNvbXBvbmVudChpbmZvLnVybCkgOiAnLi4uJ1wiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YSB2LWZvcj1cIihbdXJsLCBpY29uLCB0aXRsZV0pIGluIGljb25zXCIgOmtleT1cImljb25cIlxuICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiIHRhcmdldD1cIl9ibGFua1wiIDpocmVmPVwidXJsXCI+XG4gICAgICAgICAgICA8dG9vbHRpcCA6Y29udGVudD1cInRpdGxlXCIgY2xhc3M9XCJhYnMtY2VudGVyXCIgcGxhY2VtZW50PVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgPGljb24gOm5hbWU9XCJpY29uXCIvPlxuICAgICAgICAgICAgPC90b29sdGlwPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlbGxpcHNpc1wiIHYtdGV4dD1cImRlY29kZVVSSUNvbXBvbmVudCh1cmwpXCIvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyXCIgdi10ZXh0PVwiZGVzY3JcIi8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RzIGZsZXggZmxleC13cmFwXCIgOmRhdGEtY29sbGFwc2VkPVwiIWxpc3RzU2hvd25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2dnbGUgYWJzLWNlbnRlclwiIEBjbGljaz1cImxpc3RzU2hvd24gPSAhbGlzdHNTaG93blwiPlxuICAgICAgICAgICAgICA8dG9vbHRpcCA6Y29udGVudD1cImkxOG4oJ21zZ1Nob3dIaWRlJylcIiBwbGFjZW1lbnQ9XCJib3R0b21cIiBhbGlnbj1cImxlZnRcIiB2LWlmPVwibGlzdHNcIj5cbiAgICAgICAgICAgICAgICA8aWNvbiBuYW1lPVwiaW5mb1wiLz5cbiAgICAgICAgICAgICAgPC90b29sdGlwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGwgdi1mb3I9XCIobGlzdCwgbmFtZSkgaW4gbGlzdHNcIiA6a2V5PVwibmFtZVwiXG4gICAgICAgICAgICAgICAgOmRhdGEtdHlwZT1cIm5hbWVcIiA6aGlkZGVuPVwiIWxpc3QubGVuZ3RoXCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICAgICAgICAgIDxkdCB2LXRleHQ9XCJgQCR7bmFtZX1gXCIvPlxuICAgICAgICAgICAgICA8ZGQgdi10ZXh0PVwibGlzdFwiIGNsYXNzPVwiZWxsaXBzaXNcIi8+XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlIGZsZXhcIj5cbiAgICAgICAgICA8aW1nIDpzcmM9XCJzYWZlSWNvblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnMgZmxleCBmbGV4LXdyYXAgbXItMmNcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBpZD1cImNvbmZpcm1cIlxuICAgICAgICAgICAgcmVmPVwiY29uZmlybVwiXG4gICAgICAgICAgICB2LXRleHQ9XCJyZWluc3RhbGxcbiAgICAgICAgICAgICAgPyBpMThuKCdidXR0b25Db25maXJtUmVpbnN0YWxsYXRpb24nKVxuICAgICAgICAgICAgICA6IGkxOG4oJ2J1dHRvbkNvbmZpcm1JbnN0YWxsYXRpb24nKVwiXG4gICAgICAgICAgICA6ZGF0YS1ob3RrZXk9XCJjb25maXJtSG90a2V5XCJcbiAgICAgICAgICAgIEBjbGljaz1cImluc3RhbGxTY3JpcHRcIiA6ZGlzYWJsZWQ9XCIhaW5zdGFsbGFibGVcIi8+XG4gICAgICAgICAgPGJ1dHRvbiB2LXRleHQ9XCJpMThuKCdidXR0b25DbG9zZScpXCIgQGNsaWNrPVwiY2xvc2VcIi8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgbXktMVwiPlxuICAgICAgICAgICAgPHNldHRpbmctY2hlY2sgbmFtZT1cImNsb3NlQWZ0ZXJJbnN0YWxsXCIgOmxhYmVsPVwiaTE4bignaW5zdGFsbE9wdGlvbkNsb3NlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cImNoZWNrQ2xvc2VcIiAvPlxuICAgICAgICAgICAgPHNldHRpbmctY2hlY2sgbmFtZT1cInRyYWNrTG9jYWxGaWxlXCIgQGNoYW5nZT1cInRyYWNrTG9jYWxGaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImNsb3NlQWZ0ZXJJbnN0YWxsIHx8ICFpc0xvY2FsXCI+XG4gICAgICAgICAgICAgIDx0b29sdGlwIDpjb250ZW50PVwidHJhY2tUb29sdGlwXCIgOmRpc2FibGVkPVwiIXRyYWNrVG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtdGV4dD1cImkxOG4oJ2luc3RhbGxPcHRpb25UcmFjaycpXCIvPlxuICAgICAgICAgICAgICA8L3Rvb2x0aXA+XG4gICAgICAgICAgICA8L3NldHRpbmctY2hlY2s+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiB2LXRleHQ9XCJtZXNzYWdlXCIgdi1pZj1cIm1lc3NhZ2VcIiA6dGl0bGU9XCJlcnJvclwiIGNsYXNzPVwic3RhdHVzXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImluY29nbml0b1wiIHYtaWY9XCJpbmZvLmluY29nbml0b1wiIHYtdGV4dD1cImkxOG4oJ21zZ0luY29nbml0b0NoYW5nZXMnKVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWUtYmxvY2sgZmxleC0xIHBvcy1yZWxcIj5cbiAgICAgIDx2bS1leHRlcm5hbHNcbiAgICAgICAgcmVmPVwiZXh0ZXJuYWxzXCJcbiAgICAgICAgdi1pZj1cInNjcmlwdFwiXG4gICAgICAgIHYtbW9kZWw9XCJzY3JpcHRcIlxuICAgICAgICBjbGFzcz1cImFicy1mdWxsXCJcbiAgICAgICAgOmNtLW9wdGlvbnM9XCJjbU9wdGlvbnNcIlxuICAgICAgICA6Y29tbWFuZHM9XCJjb21tYW5kc1wiXG4gICAgICAgIDppbnN0YWxsPVwieyBjb2RlLCBkZXBzLCB1cmw6IGluZm8udXJsIH1cIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRvb2x0aXAgZnJvbSAndnVlbGV0b24vbGliL3Rvb2x0aXAvYnVuZGxlJztcbmltcG9ydCBJY29uIGZyb20gJyMvY29tbW9uL3VpL2ljb24nO1xuaW1wb3J0IHtcbiAgc2VuZENtZERpcmVjdGx5LCByZXF1ZXN0LCBpc1JlbW90ZSwgZ2V0RnVsbFVybCwgbWFrZVBhdXNlLFxuICBnZXRMb2NhbGVTdHJpbmcsIHRydWVKb2luLFxufSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBrZXlib2FyZFNlcnZpY2UgfSBmcm9tICcjL2NvbW1vbi9rZXlib2FyZCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcjL2NvbW1vbi9vcHRpb25zJztcbmltcG9ydCBpbml0Q2FjaGUgZnJvbSAnIy9jb21tb24vY2FjaGUnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnIy9jb21tb24vc3RvcmFnZSc7XG5pbXBvcnQgVm1FeHRlcm5hbHMgZnJvbSAnIy9jb21tb24vdWkvZXh0ZXJuYWxzJztcbmltcG9ydCBTZXR0aW5nQ2hlY2sgZnJvbSAnIy9jb21tb24vdWkvc2V0dGluZy1jaGVjayc7XG5pbXBvcnQgeyBsb2FkU2NyaXB0SWNvbiB9IGZyb20gJyMvY29tbW9uL2xvYWQtc2NyaXB0LWljb24nO1xuaW1wb3J0IHsgZGVlcEVxdWFsLCBvYmplY3RQaWNrIH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSAnIy9jb21tb24vcm91dGVyJztcbmltcG9ydCB1YSBmcm9tICcjL2NvbW1vbi91YSc7XG5cbmNvbnN0IEtFRVBfSU5GT19ERUxBWSA9IDUwMDA7XG5jb25zdCBSRVRSWV9ERUxBWSA9IDMwMDA7XG5jb25zdCBSRVRSWV9DT1VOVCA9IDI7XG5jb25zdCBNQVhfVElUTEVfTkFNRV9MRU4gPSAxMDA7XG5jb25zdCBDT05GSVJNX0hPVEtFWSA9IGAkey9NYWMvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSA/ICdDbWQnIDogJ0N0cmwnfS1FbnRlcmA7XG5jb25zdCBjYWNoZSA9IGluaXRDYWNoZSh7IGxpZmV0aW1lOiBSRVRSWV9ERUxBWSAqIChSRVRSWV9DT1VOVCArIDEpIH0pO1xuLyoqIEB0eXBlIHtjaHJvbWUucnVudGltZS5Qb3J0fSAqL1xubGV0IGZpbGVQb3J0O1xuLyoqIEB0eXBlIHtmdW5jdGlvbigpfSAqL1xubGV0IGZpbGVQb3J0UmVzb2x2ZTtcbi8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbmxldCBmaWxlUG9ydE5lZWRlZDtcbmxldCBiYXNpY1RpdGxlO1xubGV0IGNhY2hlZENvZGVQcm9taXNlO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBJY29uLFxuICAgIFZtRXh0ZXJuYWxzLFxuICAgIFNldHRpbmdDaGVjayxcbiAgICBUb29sdGlwLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnN0YWxsYWJsZTogZmFsc2UsXG4gICAgICBpbnN0YWxsZWQ6IGZhbHNlLFxuICAgICAgY2xvc2VBZnRlckluc3RhbGw6IG9wdGlvbnMuZ2V0KCdjbG9zZUFmdGVySW5zdGFsbCcpLFxuICAgICAgbWVzc2FnZTogJycsXG4gICAgICBjbU9wdGlvbnM6IHtcbiAgICAgICAgbGluZVdyYXBwaW5nOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNvZGU6ICcnLFxuICAgICAgY29tbWFuZHM6IHtcbiAgICAgICAgY2xvc2U6IHRoaXMuY2xvc2UsXG4gICAgICB9LFxuICAgICAgY29uZmlybUhvdGtleTogQ09ORklSTV9IT1RLRVksXG4gICAgICAvKiogQHR5cGUgVk1Db25maXJtQ2FjaGUgKi9cbiAgICAgIGluZm86IHt9LFxuICAgICAgZGVwczoge30sIC8vIGNvbWJpbmVzIGB0aGlzLnJlcXVpcmVgIGFuZCBgdGhpcy5yZXNvdXJjZXNgID0gYWxsIGFjdHVhbGx5IGxvYWRlZCBkZXBzXG4gICAgICBkZXNjcjogJycsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIGhlYWRpbmc6IHRoaXMuaTE4bignbXNnTG9hZGluZ0RhdGEnKSxcbiAgICAgIGxpc3RzOiBudWxsLFxuICAgICAgbGlzdHNTaG93bjogdHJ1ZSxcbiAgICAgIG5hbWU6ICcuLi4nLFxuICAgICAgcmVpbnN0YWxsOiBmYWxzZSxcbiAgICAgIHNhZmVJY29uOiBudWxsLFxuICAgICAgc2FtZUNvZGU6IGZhbHNlLFxuICAgICAgc2NyaXB0OiBudWxsLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdHJhY2tUb29sdGlwKCkge1xuICAgICAgcmV0dXJuIHVhLmZpcmVmb3ggPj0gNjggPyB0aGlzLmkxOG4oJ2luc3RhbGxPcHRpb25UcmFja1Rvb2x0aXAnKSA6IG51bGw7XG4gICAgfSxcbiAgICBpc0xvY2FsKCkge1xuICAgICAgcmV0dXJuICFpc1JlbW90ZSh0aGlzLmluZm8udXJsKTtcbiAgICB9LFxuICAgIGljb25zKCkge1xuICAgICAgY29uc3QgeyBob21lcGFnZVVSTCwgc3VwcG9ydFVSTCB9ID0gdGhpcy5zY3JpcHQ/Lm1ldGEgfHwge307XG4gICAgICByZXR1cm4gW1xuICAgICAgICBob21lcGFnZVVSTCAmJiBbaG9tZXBhZ2VVUkwsICdob21lJywgdGhpcy5pMThuKCdsYWJlbEhvbWVwYWdlJyldLFxuICAgICAgICBzdXBwb3J0VVJMICYmIFtzdXBwb3J0VVJMLCAncXVlc3Rpb24nLCB0aGlzLmkxOG4oJ2J1dHRvblN1cHBvcnQnKV0sXG4gICAgICBdLmZpbHRlcihCb29sZWFuKTtcbiAgICB9LFxuICB9LFxuICBhc3luYyBtb3VudGVkKCkge1xuICAgIGNvbnN0IGlkID0gcm91dGUucGF0aHNbMF07XG4gICAgY29uc3Qga2V5ID0gYGNvbmZpcm0tJHtpZH1gO1xuICAgIGNvbnN0IGluZm8gPSBhd2FpdCBzZW5kQ21kRGlyZWN0bHkoJ0NhY2hlTG9hZCcsIGtleSk7XG4gICAgdGhpcy5pbmZvID0gaW5mbztcbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyogc2VuZENtZERpcmVjdGx5IG1ha2VzIHRoZSBwYWdlIGxvYWQgc28gZmFzdCB0aGF0IHRoZSBsb2NhbCBgdWFgIGlzIHN0aWxsIHVudmVyaWZpZWQsXG4gICAgICAgc28gd2UgdXNlIHRoZSBiYWNrZ3JvdW5kIGB1YWAgdG8gY2hlY2sgZm9yIEZGNjggdGhhdCBkaXNhbGxvd3MgZmlsZTogc2NoZW1lIGluIGZldGNoKCkgKi9cbiAgICBmaWxlUG9ydE5lZWRlZCA9IGluZm8uZmYgPj0gNjggJiYgaW5mby51cmwuc3RhcnRzV2l0aCgnZmlsZTonKTtcbiAgICBjYWNoZWRDb2RlUHJvbWlzZSA9IHNlbmRDbWREaXJlY3RseSgnQ2FjaGVQb3AnLCBpbmZvLnVybCk7XG4gICAgdGhpcy5ndWFyZCA9IHNldEludGVydmFsKHNlbmRDbWREaXJlY3RseSwgS0VFUF9JTkZPX0RFTEFZLCAnQ2FjaGVIaXQnLCB7IGtleSB9KTtcbiAgICBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgYXdhaXQgdGhpcy5wYXJzZU1ldGEoKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLmNoZWNrU2FtZUNvZGUoKSxcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCByZXRyaWVzID0gUkVUUllfQ09VTlQ7XG4gICAgICAgIHdoaWxlICghYXdhaXQgdGhpcy5sb2FkRGVwcygpICYmIHJldHJpZXMpIHtcbiAgICAgICAgICBhd2FpdCBtYWtlUGF1c2UoUkVUUllfREVMQVkpO1xuICAgICAgICAgIHJldHJpZXMgLT0gMTtcbiAgICAgICAgfVxuICAgICAgfSkoKSxcbiAgICBdKTtcbiAgICBpZiAodGhpcy5pbnN0YWxsYWJsZSkge1xuICAgICAgdGhpcy5oZWFkaW5nID0gdGhpcy5yZWluc3RhbGwgPyB0aGlzLmkxOG4oJ2xhYmVsUmVpbnN0YWxsJykgOiB0aGlzLmkxOG4oJ2xhYmVsSW5zdGFsbCcpO1xuICAgIH1cbiAgICB0aGlzLmRpc3Bvc2VMaXN0ID0gW1xuICAgICAga2V5Ym9hcmRTZXJ2aWNlLnJlZ2lzdGVyKENPTkZJUk1fSE9US0VZLCAoKSA9PiB0aGlzLiRyZWZzLmNvbmZpcm0uY2xpY2soKSksXG4gICAgXTtcbiAgICBrZXlib2FyZFNlcnZpY2UuZW5hYmxlKCk7XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZ3VhcmQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ndWFyZCk7XG4gICAgICB0aGlzLmd1YXJkID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5kaXNwb3NlTGlzdD8uZm9yRWFjaChkaXNwb3NlID0+IGRpc3Bvc2UoKSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBsb2FkRGF0YShjaGFuZ2VkT25seSkge1xuICAgICAgdGhpcy5pbnN0YWxsYWJsZSA9IGZhbHNlO1xuICAgICAgY29uc3QgY29kZSA9IGZpbGVQb3J0TmVlZGVkXG4gICAgICAgID8gYXdhaXQgbmV3IFByb21pc2UodGhpcy5waW5nRmlsZVBvcnQpXG4gICAgICAgIDogYXdhaXQgdGhpcy5nZXRTY3JpcHQodGhpcy5pbmZvLnVybCk7XG4gICAgICBpZiAoY29kZSA9PSBudWxsIHx8IGNoYW5nZWRPbmx5ICYmIHRoaXMuY29kZSA9PT0gY29kZSkgdGhyb3cgMDtcbiAgICAgIHRoaXMuc2V0Q29kZShjb2RlKTtcbiAgICB9LFxuICAgIHNldENvZGUoY29kZSkge1xuICAgICAgY29uc3QgbGluZXMgPSBjb2RlLnNwbGl0KC9cXHI/XFxuLyk7XG4gICAgICBjb25zdCBjbSA9IHRoaXMuJHJlZnMuZXh0ZXJuYWxzPy4kcmVmcy5jb2RlPy5jbTtcbiAgICAgIGxldCBpID0gLTE7XG4gICAgICBsZXQgaXNEaWZmO1xuICAgICAgaWYgKGNtKSB7XG4gICAgICAgIGNtLmVhY2hMaW5lKCh7IHRleHQgfSkgPT4ge1xuICAgICAgICAgIGlzRGlmZiA9IHRleHQgIT09IGxpbmVzW2kgKz0gMV07XG4gICAgICAgICAgcmV0dXJuIGlzRGlmZjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgaWYgKGlzRGlmZiB8fCBjbSAmJiBpIDwgbGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgY20uc2V0Q3Vyc29yKGkpO1xuICAgICAgICAgIGNtLnNjcm9sbEludG9WaWV3KG51bGwsIGNtLmRpc3BsYXkubGFzdFdyYXBIZWlnaHQgLyAzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBwYXJzZU1ldGEoKSB7XG4gICAgICAvKiogQHR5cGUge1ZNU2NyaXB0TWV0YX0gKi9cbiAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBzZW5kQ21kRGlyZWN0bHkoJ1BhcnNlTWV0YScsIHRoaXMuY29kZSk7XG4gICAgICBjb25zdCBuYW1lID0gZ2V0TG9jYWxlU3RyaW5nKG1ldGEsICduYW1lJyk7XG4gICAgICBkb2N1bWVudC50aXRsZSA9IGAke25hbWUuc2xpY2UoMCwgTUFYX1RJVExFX05BTUVfTEVOKX0ke25hbWUubGVuZ3RoID4gTUFYX1RJVExFX05BTUVfTEVOID8gJy4uLicgOiAnJ30gLSAke1xuICAgICAgICBiYXNpY1RpdGxlIHx8IChiYXNpY1RpdGxlID0gZG9jdW1lbnQudGl0bGUpXG4gICAgICB9YDtcbiAgICAgIHRoaXMubmFtZSA9IFtuYW1lLCBtZXRhLnZlcnNpb25dOjp0cnVlSm9pbignLCAnKTtcbiAgICAgIHRoaXMuZGVzY3IgPSBnZXRMb2NhbGVTdHJpbmcobWV0YSwgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICB0aGlzLmxpc3RzID0gb2JqZWN0UGljayhtZXRhLCBbXG4gICAgICAgICdhbnRpZmVhdHVyZScsXG4gICAgICAgICdncmFudCcsXG4gICAgICAgICdtYXRjaCcsXG4gICAgICAgICdpbmNsdWRlJyxcbiAgICAgICAgJ2V4Y2x1ZGUnLFxuICAgICAgICAnZXhjbHVkZU1hdGNoJyxcbiAgICAgICAgJ2NvbXBhdGlibGUnLFxuICAgICAgICAnY29ubmVjdCcsXG4gICAgICBdLCBsaXN0ID0+IChcbiAgICAgICAgbGlzdFxuICAgICAgICA/Lm1hcChzID0+IFtzLnJlcGxhY2UoL15cXFcrLywgJycpIHx8IHMsIHNdKVxuICAgICAgICAuc29ydCgoW2FdLCBbYl0pID0+IChhIDwgYiA/IC0xIDogYSA+IGIpKVxuICAgICAgICAubWFwKChbLCBzXSkgPT4gcylcbiAgICAgICAgLmpvaW4oJ1xcbicpXG4gICAgICAgIHx8ICcnXG4gICAgICApKTtcbiAgICAgIHRoaXMuc2NyaXB0ID0geyBtZXRhLCBjdXN0b206IHt9LCBwcm9wczoge30gfTtcbiAgICAgIHRoaXMuYWxsRGVwcyA9IFtcbiAgICAgICAgWy4uLm5ldyBTZXQobWV0YS5yZXF1aXJlKV0sXG4gICAgICAgIFsuLi5uZXcgU2V0KE9iamVjdC52YWx1ZXMobWV0YS5yZXNvdXJjZXMpKV0sXG4gICAgICBdO1xuICAgIH0sXG4gICAgYXN5bmMgbG9hZERlcHMoKSB7XG4gICAgICBjb25zdCB7IHNjcmlwdCwgYWxsRGVwczogW3JlcXVpcmUsIHJlc291cmNlXSB9ID0gdGhpcztcbiAgICAgIGlmICghdGhpcy5zYWZlSWNvbikge1xuICAgICAgICBsb2FkU2NyaXB0SWNvbihzY3JpcHQpLnRoZW4odXJsID0+IHsgdGhpcy5zYWZlSWNvbiA9IHVybDsgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXF1aXJlXG4gICAgICAgICAgJiYgZGVlcEVxdWFsKHJlcXVpcmUuc2xpY2UoKS5zb3J0KCksIE9iamVjdC5rZXlzKHRoaXMucmVxdWlyZSkuc29ydCgpKVxuICAgICAgICAgICYmIGRlZXBFcXVhbChyZXNvdXJjZS5zbGljZSgpLnNvcnQoKSwgT2JqZWN0LmtleXModGhpcy5yZXNvdXJjZXMpLnNvcnQoKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXF1aXJlID0ge307XG4gICAgICB0aGlzLnJlc291cmNlcyA9IHt9O1xuICAgICAgY29uc3QgbGVuZ3RoID0gcmVxdWlyZS5sZW5ndGggKyByZXNvdXJjZS5sZW5ndGg7XG4gICAgICBsZXQgZmluaXNoZWQgPSAwO1xuICAgICAgLy8gQWxsIHJlc291cmNlcyBtYXkgZmluaXNoIHF1aWNrbHkgc28gd2UgZGVsYXkgdGhlIHN0YXR1cyB0byBhdm9pZCBmbGlja2VyXG4gICAgICBjb25zdCBTVEFUVVNfREVMQVkgPSA1MDA7XG4gICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGNvbnN0IHVwZGF0ZVN0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lID4gU1RBVFVTX0RFTEFZKSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5pMThuKCdtc2dMb2FkaW5nRGVwZW5kZW5jeScsIFtmaW5pc2hlZCwgbGVuZ3RoXSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvKiogQHJldHVybnMge3N0cmluZ3x1bmRlZmluZWR9IFVSTCBpbiBjYXNlIG9mIGVycm9yIG9yIGB1bmRlZmluZWRgIG9uIHN1Y2Nlc3MgKi9cbiAgICAgIGNvbnN0IGRvd25sb2FkID0gYXN5bmMgKHVybCwgdGFyZ2V0LCBpc0Jsb2IpID0+IHtcbiAgICAgICAgY29uc3QgZnVsbFVybCA9IGdldEZ1bGxVcmwodXJsLCB0aGlzLmluZm8udXJsKTtcbiAgICAgICAgY29uc3QgZGVwc1VybCA9IGAkeytpc0Jsb2J9JHt1cmx9YDsgLy8gdGhlIHNhbWUgVVJMIG1heSBiZSBsaXN0ZWQgaW4gYm90aCBjYXRlZ29yaWVzXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IHRoaXMuZ2V0RmlsZShmdWxsVXJsLCB7IGlzQmxvYiwgdXNlQ2FjaGU6IHRydWUgfSk7XG4gICAgICAgICAgdGFyZ2V0W2Z1bGxVcmxdID0gZmlsZTtcbiAgICAgICAgICB0aGlzLmRlcHNbZGVwc1VybF0gPSBmaWxlO1xuICAgICAgICAgIGZpbmlzaGVkICs9IDE7XG4gICAgICAgICAgdXBkYXRlU3RhdHVzKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aGlzLmRlcHNbZGVwc1VybF0gPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgZGVsYXllZFN0YXR1cyA9IHNldFRpbWVvdXQodXBkYXRlU3RhdHVzLCBTVEFUVVNfREVMQVkpO1xuICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXG4gICAgICAgIC4uLnJlcXVpcmUubWFwKHVybCA9PiBkb3dubG9hZCh1cmwsIHRoaXMucmVxdWlyZSwgZmFsc2UpKSxcbiAgICAgICAgLi4ucmVzb3VyY2UubWFwKHVybCA9PiBkb3dubG9hZCh1cmwsIHRoaXMucmVzb3VyY2VzLCB0cnVlKSksXG4gICAgICBdO1xuICAgICAgY29uc3QgZXJyb3IgPSAoYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpKTo6dHJ1ZUpvaW4oJ1xcbicpO1xuICAgICAgY2xlYXJUaW1lb3V0KGRlbGF5ZWRTdGF0dXMpO1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuaTE4bignbXNnRXJyb3JMb2FkaW5nRGVwZW5kZW5jeScpO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbnN0YWxsYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2UoKSB7XG4gICAgICBzZW5kQ21kRGlyZWN0bHkoJ1RhYkNsb3NlJyk7XG4gICAgfSxcbiAgICBhc3luYyBnZXRGaWxlKHVybCwgeyBpc0Jsb2IsIHVzZUNhY2hlIH0gPSB7fSkge1xuICAgICAgY29uc3QgY2FjaGVLZXkgPSBpc0Jsb2IgPyBgYmxvYiske3VybH1gIDogYHRleHQrJHt1cmx9YDtcbiAgICAgIGlmICh1c2VDYWNoZSAmJiBjYWNoZS5oYXMoY2FjaGVLZXkpKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQoY2FjaGVLZXkpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KHVybCwge1xuICAgICAgICByZXNwb25zZVR5cGU6IGlzQmxvYiA/ICdibG9iJyA6IG51bGwsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBpc0Jsb2JcbiAgICAgICAgPyBhd2FpdCBzdG9yYWdlLmNhY2hlLm1ha2VSYXcocmVzcG9uc2UpXG4gICAgICAgIDogcmVzcG9uc2UuZGF0YTtcbiAgICAgIGlmICh1c2VDYWNoZSkgY2FjaGUucHV0KGNhY2hlS2V5LCBkYXRhKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gICAgYXN5bmMgZ2V0U2NyaXB0KHVybCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZENvZGVQcm9taXNlICYmIGF3YWl0IGNhY2hlZENvZGVQcm9taXNlIHx8IGF3YWl0IHRoaXMuZ2V0RmlsZSh1cmwpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmkxOG4oJ21zZ0Vycm9yTG9hZGluZ0RhdGEnKTtcbiAgICAgICAgdGhyb3cgdXJsO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY2FjaGVkQ29kZVByb21pc2UgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgaW5zdGFsbFNjcmlwdCgpIHtcbiAgICAgIHRoaXMuaW5zdGFsbGFibGUgPSBmYWxzZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgdXBkYXRlIH0gPSBhd2FpdCBzZW5kQ21kRGlyZWN0bHkoJ1BhcnNlU2NyaXB0Jywge1xuICAgICAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgICAgICB1cmw6IHRoaXMuaW5mby51cmwsXG4gICAgICAgICAgZnJvbTogdGhpcy5pbmZvLmZyb20sXG4gICAgICAgICAgcmVxdWlyZTogdGhpcy5yZXF1aXJlLFxuICAgICAgICAgIGNhY2hlOiB0aGlzLnJlc291cmNlcyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhbJ2ZyJ10pO1xuICAgICAgICBjb25zdCB0aW1lMCA9IHRoaXMuY29uZmlybWVkVGltZSB8fCAodGhpcy5jb25maXJtZWRUaW1lID0gdGltZSk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGAke3VwZGF0ZS5tZXNzYWdlfSAke3RpbWUwfSR7dGltZTAgPT09IHRpbWUgPyAnJyA6IGAgLS0+ICR7dGltZX1gfWA7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlQWZ0ZXJJbnN0YWxsKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW5zdGFsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnRyYWNrTG9jYWxGaWxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBgJHtlcnJ9YDtcbiAgICAgICAgdGhpcy5pbnN0YWxsYWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyB0cmFja0xvY2FsRmlsZSgpIHtcbiAgICAgIGlmICh0aGlzLnRyYWNraW5nIHx8ICF0aGlzLmlzTG9jYWwgfHwgIXRoaXMuaW5zdGFsbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhY2hlZENvZGVQcm9taXNlID0gbnVsbDsgLy8gYWx3YXlzIHJlLXJlYWQgYmVjYXVzZSB0aGUgZmlsZSBtYXkgaGF2ZSBjaGFuZ2VkIHNpbmNlIHRoZW5cbiAgICAgIHRoaXMudHJhY2tpbmcgPSB0cnVlO1xuICAgICAgd2hpbGUgKG9wdGlvbnMuZ2V0KCd0cmFja0xvY2FsRmlsZScpICYmIHRoaXMudHJhY2tpbmcgIT09ICdzdG9wJykge1xuICAgICAgICBhd2FpdCBtYWtlUGF1c2UoNTAwKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKHRydWUpO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGFyc2VNZXRhKCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5sb2FkRGVwcygpO1xuICAgICAgICAgIGF3YWl0IHRoaXMuaW5zdGFsbFNjcmlwdCgpO1xuICAgICAgICAgIHRoaXMuc2FtZUNvZGUgPSBmYWxzZTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyAvKiBOT1AgKi8gfVxuICAgICAgfVxuICAgICAgdGhpcy50cmFja2luZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgY2hlY2tDbG9zZSh2YWx1ZSkge1xuICAgICAgdGhpcy5jbG9zZUFmdGVySW5zdGFsbCA9IHZhbHVlO1xuICAgICAgaWYgKHZhbHVlKSBvcHRpb25zLnNldCgndHJhY2tMb2NhbEZpbGUnLCBmYWxzZSk7XG4gICAgfSxcbiAgICBhc3luYyBjaGVja1NhbWVDb2RlKCkge1xuICAgICAgY29uc3QgeyBuYW1lLCBuYW1lc3BhY2UgfSA9IHRoaXMuc2NyaXB0Lm1ldGEgfHwge307XG4gICAgICBjb25zdCBvbGQgPSBhd2FpdCBzZW5kQ21kRGlyZWN0bHkoJ0dldFNjcmlwdCcsIHsgbWV0YTogeyBuYW1lLCBuYW1lc3BhY2UgfSB9KTtcbiAgICAgIHRoaXMucmVpbnN0YWxsID0gISFvbGQ7XG4gICAgICB0aGlzLnNhbWVDb2RlID0gb2xkICYmIHRoaXMuY29kZSA9PT0gYXdhaXQgc2VuZENtZERpcmVjdGx5KCdHZXRTY3JpcHRDb2RlJywgb2xkLnByb3BzLmlkKTtcbiAgICB9LFxuICAgIGNyZWF0ZUZpbGVQb3J0KCkge1xuICAgICAgZmlsZVBvcnQgPSBicm93c2VyLnRhYnMuY29ubmVjdCh0aGlzLmluZm8udGFiSWQsIHsgbmFtZTogJ0ZldGNoU2VsZicgfSk7XG4gICAgICBmaWxlUG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoY29kZSA9PiB7IGZpbGVQb3J0UmVzb2x2ZShjb2RlKTsgfSk7XG4gICAgICBmaWxlUG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4geyB0aGlzLnRyYWNraW5nID0gJ3N0b3AnOyB9KTtcbiAgICB9LFxuICAgIHBpbmdGaWxlUG9ydChyZXNvbHZlKSB7XG4gICAgICBpZiAoIWZpbGVQb3J0KSB0aGlzLmNyZWF0ZUZpbGVQb3J0KCk7XG4gICAgICBmaWxlUG9ydFJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgZmlsZVBvcnQucG9zdE1lc3NhZ2UobnVsbCk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuJGltZ1NpemU6IDQ4cHg7XG4kaW1nR2FwUjogMTRweDtcbiRpbmZvSWNvblNpemU6IDE4cHg7XG5cbi5wYWdlLWNvbmZpcm0ge1xuICBoMSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBtYXJnaW46IC4yNXJlbSAwO1xuICB9XG4gIGE6bm90KDpob3Zlcikge1xuICAgIGNvbG9yOiB1bnNldDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuICAuc2VsZi1zdGFydCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgfVxuICAuaW1hZ2Uge1xuICAgIGZsZXg6IDAgMCAkaW1nU2l6ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogJGltZ1NpemU7IC8vIHJlc2VydmUgdGhlIGhlaWdodCBzbyBpdCBkb2Vzbid0IHNoaWZ0IHdoZW4gdGhlIGljb24gbG9hZHNcbiAgICBwYWRkaW5nOiAwICRpbWdHYXBSIDAgLjI1cmVtO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuICAuaW5mbyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAuZGVzY3Ige1xuICAgICAgbWF4LWhlaWdodDogNHJlbTtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuICAgIC5hYnMtY2VudGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogJGltZ1NpemUgLyAyIC0gJGluZm9JY29uU2l6ZSAvIDIgLSAkaW1nR2FwUik7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG4gIC5pY29uIHtcbiAgICB3aWR0aDogJGluZm9JY29uU2l6ZTtcbiAgICBoZWlnaHQ6ICRpbmZvSWNvblNpemU7XG4gIH1cbiAgLmxpc3RzIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGRsIHtcbiAgICAgIG1hcmdpbjogMCAxcmVtIDFyZW0gMDtcbiAgICAgICZbZGF0YS10eXBlPVwiYW50aWZlYXR1cmVcIl0gZGQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMCwgMCwgLjUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgLjA1KTtcbiAgICAgICAgcGFkZGluZzogMnB4IDZweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyNWVtO1xuICAgICAgfVxuICAgIH1cbiAgICBkdCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgZGQge1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgbWluLXdpZHRoOiA1cmVtO1xuICAgICAgbWF4LWhlaWdodDogMTB2aDtcbiAgICAgIG1pbi1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuICB9XG4gIFtkYXRhLWNvbGxhcHNlZF0ge1xuICAgIGRkIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGRsOmZvY3VzIGRkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICAgICAgei1pbmRleDogMTAwO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZmlsbC0wLTUpO1xuICAgICAgYm94LXNoYWRvdzogMXB4IDNweCA5cHggcmdiYSgxMjgsIDEyOCwgMTI4LCAuNSk7XG4gICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICB9XG4gICAgZHQge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAudG9nZ2xlIHtcbiAgICAgIG9wYWNpdHk6IC4zO1xuICAgIH1cbiAgfVxuICAuYWN0aW9ucyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsYWJlbCB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuc3RhdHVzIHtcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcbiAgICAgIHBhZGRpbmc6IC41ZW07XG4gICAgICBjb2xvcjogI2QzM2EwMDtcbiAgICAgIGFuaW1hdGlvbjogZmFkZS1pbiAuNXMgMSBib3RoO1xuICAgIH1cbiAgfVxuICAuaW5jb2duaXRvIHtcbiAgICBwYWRkaW5nOiAuMjVlbSAwO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgI2NvbmZpcm0ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6ICNkNGUyZDQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjNzVhNzc1O1xuICAgIGNvbG9yOiBkYXJrZ3JlZW47XG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICM0ODgxNDg7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiIChcIiBhdHRyKGRhdGEtaG90a2V5KSBcIilcIjtcbiAgICAgIG9wYWNpdHk6IC43NTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuICB9XG4gICYucmVpbnN0YWxsICNjb25maXJtIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDFlMGVhO1xuICAgIGJvcmRlci1jb2xvcjogIzY2OTljZTtcbiAgICBjb2xvcjogIzAwNGZjNTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzM1Njk5ZjtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIC5pbmNvZ25pdG8ge1xuICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICB9XG4gICAgI2NvbmZpcm0ge1xuICAgICAgYmFja2dyb3VuZDogIzNhNWQzYTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzU5ODA1OTtcbiAgICAgIGNvbG9yOiAjOWNkODljO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzgwYTk4MDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5yZWluc3RhbGwgI2NvbmZpcm0ge1xuICAgICAgYmFja2dyb3VuZDogIzIyNGE3MztcbiAgICAgIGJvcmRlci1jb2xvcjogIzNkNjk5NjtcbiAgICAgIGNvbG9yOiAjOWZjZGZkO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzYwOGNiODtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmVkaXQtZXh0ZXJuYWxzIC5zZWxlY3Qge1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgJltzdHlsZV0ge1xuICAgICAgbWF4LWhlaWdodDogODAlO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTU5OXB4KSB7XG4gICAgPjpmaXJzdC1jaGlsZCB7XG4gICAgICBtaW4taGVpZ2h0OiA1ZW07XG4gICAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDsgLy8gcmVzZXR0aW5nIHRoZSBpbmxpbmUgc3R5bGUgYXR0cmlidXRlIGlmIHRoZSB1c2VyIHJlc2l6ZWQgaXRcbiAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICA+OmZpcnN0LWNoaWxkIHtcbiAgICAgIG1pbi13aWR0aDogMzBlbTtcbiAgICAgIG1heC13aWR0aDogODAlO1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyAvLyByZXNldHRpbmcgdGhlIGlubGluZSBzdHlsZSBhdHRyaWJ1dGUgaWYgdGhlIHVzZXIgcmVzaXplZCBpdFxuICAgICAgcmVzaXplOiBob3Jpem9udGFsO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgLmluZm8gLmRlc2NyIHtcbiAgICAgIG1heC1oZWlnaHQ6IDIwdmg7XG4gICAgfVxuICAgIC5saXN0cyB7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgbWF4LWhlaWdodDogNzV2aDtcbiAgICB9XG4gICAgLmxpc3RzIGRkIHtcbiAgICAgIG1heC1oZWlnaHQ6IDMwdmg7XG4gICAgfVxuICAgIC5lZGl0LWV4dGVybmFscyB7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgYm9yZGVyLWxlZnQ6IHZhcigtLWJvcmRlcik7XG4gICAgfVxuICB9XG59XG4uY29uZmlybS1vcHRpb25zIHtcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC52bC1kcm9wZG93bi1tZW51IHtcbiAgICB3aWR0aDogMTNyZW07XG4gIH1cbn1cbi52bC10b29sdGlwLWJvdHRvbSB7XG4gID4gaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgJi52bC10b29sdGlwLWFsaWduLWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTNweDtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5wYWdlLWNvbmZpcm0gaDEge1xcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcbiAgICBtYXJnaW46IC4yNXJlbSAwO1xcbn1cXG4ucGFnZS1jb25maXJtIGE6bm90KDpob3Zlcikge1xcbiAgICBjb2xvcjogdW5zZXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLnBhZ2UtY29uZmlybSBwIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLnBhZ2UtY29uZmlybSAuc2VsZi1zdGFydCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcbi5wYWdlLWNvbmZpcm0gLmltYWdlIHtcXG4gICAgZmxleDogMCAwIDQ4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQ4cHg7IC8qIHJlc2VydmUgdGhlIGhlaWdodCBzbyBpdCBkb2Vzbid0IHNoaWZ0IHdoZW4gdGhlIGljb24gbG9hZHMqL1xcbiAgICBwYWRkaW5nOiAwIDE0cHggMCAuMjVyZW07XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG4ucGFnZS1jb25maXJtIC5pbWFnZSBpbWcge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucGFnZS1jb25maXJtIC5pbmZvIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnBhZ2UtY29uZmlybSAuaW5mbyAuZGVzY3Ige1xcbiAgICAgIG1heC1oZWlnaHQ6IDRyZW07XFxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLnBhZ2UtY29uZmlybSAuaW5mbyAuYWJzLWNlbnRlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNDdweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wYWdlLWNvbmZpcm0gLmljb24ge1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4ucGFnZS1jb25maXJtIC5saXN0cyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi5wYWdlLWNvbmZpcm0gLmxpc3RzIGRsIHtcXG4gICAgICBtYXJnaW46IDAgMXJlbSAxcmVtIDBcXG59XFxuLnBhZ2UtY29uZmlybSAubGlzdHMgZGxbZGF0YS10eXBlPVxcXCJhbnRpZmVhdHVyZVxcXCJdIGRkIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAuNSk7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgLjA1KTtcXG4gICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XFxuICAgICAgICBtYXgtd2lkdGg6IDI1ZW07XFxufVxcbi5wYWdlLWNvbmZpcm0gLmxpc3RzIGR0IHtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnBhZ2UtY29uZmlybSAubGlzdHMgZGQge1xcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgICBtaW4td2lkdGg6IDVyZW07XFxuICAgICAgbWF4LWhlaWdodDogMTB2aDtcXG4gICAgICBtaW4taGVpZ2h0OiAxLjVyZW07XFxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLnBhZ2UtY29uZmlybSBbZGF0YS1jb2xsYXBzZWRdIGRkIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucGFnZS1jb25maXJtIFtkYXRhLWNvbGxhcHNlZF0gZGw6Zm9jdXMgZGQge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDUwdmg7XFxuICAgICAgei1pbmRleDogMTAwO1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWZpbGwtMC01KTtcXG4gICAgICBib3gtc2hhZG93OiAxcHggM3B4IDlweCByZ2JhKDEyOCwgMTI4LCAxMjgsIC41KTtcXG4gICAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuLnBhZ2UtY29uZmlybSBbZGF0YS1jb2xsYXBzZWRdIGR0IHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wYWdlLWNvbmZpcm0gW2RhdGEtY29sbGFwc2VkXSAudG9nZ2xlIHtcXG4gICAgICBvcGFjaXR5OiAuMztcXG59XFxuLnBhZ2UtY29uZmlybSAuYWN0aW9ucyB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wYWdlLWNvbmZpcm0gLmFjdGlvbnMgbGFiZWwge1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wYWdlLWNvbmZpcm0gLmFjdGlvbnMgLnN0YXR1cyB7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xcbiAgICAgIHBhZGRpbmc6IC41ZW07XFxuICAgICAgY29sb3I6ICNkMzNhMDA7XFxuICAgICAgYW5pbWF0aW9uOiBmYWRlLWluIC41cyAxIGJvdGg7XFxufVxcbi5wYWdlLWNvbmZpcm0gLmluY29nbml0byB7XFxuICAgIHBhZGRpbmc6IC4yNWVtIDA7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcbi5wYWdlLWNvbmZpcm0gI2NvbmZpcm0ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZDogI2Q0ZTJkNDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNzVhNzc1O1xcbiAgICBjb2xvcjogZGFya2dyZWVuXFxufVxcbi5wYWdlLWNvbmZpcm0gI2NvbmZpcm06aG92ZXIge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzQ4ODE0ODtcXG59XFxuLnBhZ2UtY29uZmlybSAjY29uZmlybTo6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCIgKFxcXCIgYXR0cihkYXRhLWhvdGtleSkgXFxcIilcXFwiO1xcbiAgICAgIG9wYWNpdHk6IC43NTtcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4ucGFnZS1jb25maXJtLnJlaW5zdGFsbCAjY29uZmlybSB7XFxuICAgIGJhY2tncm91bmQ6ICNkMWUwZWE7XFxuICAgIGJvcmRlci1jb2xvcjogIzY2OTljZTtcXG4gICAgY29sb3I6ICMwMDRmYzVcXG59XFxuLnBhZ2UtY29uZmlybS5yZWluc3RhbGwgI2NvbmZpcm06aG92ZXIge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzM1Njk5ZjtcXG59XFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbi5wYWdlLWNvbmZpcm0gLmluY29nbml0byB7XFxuICAgICAgY29sb3I6IG9yYW5nZTtcXG59XFxuLnBhZ2UtY29uZmlybSAjY29uZmlybSB7XFxuICAgICAgYmFja2dyb3VuZDogIzNhNWQzYTtcXG4gICAgICBib3JkZXItY29sb3I6ICM1OTgwNTk7XFxuICAgICAgY29sb3I6ICM5Y2Q4OWNcXG59XFxuLnBhZ2UtY29uZmlybSAjY29uZmlybTpob3ZlciB7XFxuICAgICAgICBib3JkZXItY29sb3I6ICM4MGE5ODA7XFxufVxcbi5wYWdlLWNvbmZpcm0ucmVpbnN0YWxsICNjb25maXJtIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMjI0YTczO1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzNkNjk5NjtcXG4gICAgICBjb2xvcjogIzlmY2RmZFxcbn1cXG4ucGFnZS1jb25maXJtLnJlaW5zdGFsbCAjY29uZmlybTpob3ZlciB7XFxuICAgICAgICBib3JkZXItY29sb3I6ICM2MDhjYjg7XFxufVxcbn1cXG4ucGFnZS1jb25maXJtIC5lZGl0LWV4dGVybmFscyAuc2VsZWN0IHtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbFxcbn1cXG4ucGFnZS1jb25maXJtIC5lZGl0LWV4dGVybmFscyAuc2VsZWN0W3N0eWxlXSB7XFxuICAgICAgbWF4LWhlaWdodDogODAlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTU5OXB4KSB7XFxuLnBhZ2UtY29uZmlybSA+OmZpcnN0LWNoaWxkIHtcXG4gICAgICBtaW4taGVpZ2h0OiA1ZW07XFxuICAgICAgbWF4LWhlaWdodDogODB2aDtcXG4gICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50OyAvKiByZXNldHRpbmcgdGhlIGlubGluZSBzdHlsZSBhdHRyaWJ1dGUgaWYgdGhlIHVzZXIgcmVzaXplZCBpdCovXFxuICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xcbi5wYWdlLWNvbmZpcm0ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ucGFnZS1jb25maXJtID46Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMzBlbTtcXG4gICAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgICB3aWR0aDogNDAlO1xcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyAvKiByZXNldHRpbmcgdGhlIGlubGluZSBzdHlsZSBhdHRyaWJ1dGUgaWYgdGhlIHVzZXIgcmVzaXplZCBpdCovXFxuICAgICAgcmVzaXplOiBob3Jpem9udGFsO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wYWdlLWNvbmZpcm0gLmluZm8gLmRlc2NyIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAyMHZoO1xcbn1cXG4ucGFnZS1jb25maXJtIC5saXN0cyB7XFxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICBtYXgtaGVpZ2h0OiA3NXZoO1xcbn1cXG4ucGFnZS1jb25maXJtIC5saXN0cyBkZCB7XFxuICAgICAgbWF4LWhlaWdodDogMzB2aDtcXG59XFxuLnBhZ2UtY29uZmlybSAuZWRpdC1leHRlcm5hbHMge1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IHZhcigtLWJvcmRlcik7XFxufVxcbn1cXG4uY29uZmlybS1vcHRpb25zIGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb25maXJtLW9wdGlvbnMgLnZsLWRyb3Bkb3duLW1lbnUge1xcbiAgICB3aWR0aDogMTNyZW07XFxufVxcbi52bC10b29sdGlwLWJvdHRvbSA+IGkge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLnZsLXRvb2x0aXAtYm90dG9tLnZsLXRvb2x0aXAtYWxpZ24tbGVmdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTNweDtcXG59XFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG5mcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxudG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwYWdlLWNvbmZpcm0gZnJhbWUgZmxleCBmbGV4LWNvbCBoLTEwMFwiLFxuICAgICAgY2xhc3M6IHsgcmVpbnN0YWxsOiBfdm0ucmVpbnN0YWxsIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnJhbWUtYmxvY2tcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleFwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoMVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uaGVhZGluZykgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uc2FtZUNvZGVcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXdlaWdodFwiOiBcIm5vcm1hbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5pMThuKFwibXNnU2FtZUNvZGVcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsbGlwc2lzXCIsXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5uYW1lKSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhYnMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IF92bS5pMThuKFwiZWRpdE5hdkNvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiaWNvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiY29kZVwiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWxsaXBzaXNcIixcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmluZm8udXJsID8gZGVjb2RlVVJJQ29tcG9uZW50KF92bS5pbmZvLnVybCkgOiBcIi4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmljb25zLCBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gcmVmWzBdXG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSByZWZbMV1cbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSByZWZbMl1cbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpY29uLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhcmdldDogXCJfYmxhbmtcIiwgaHJlZjogdXJsIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFicy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbnRlbnQ6IHRpdGxlLCBwbGFjZW1lbnQ6IFwicmlnaHRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogaWNvbiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWxsaXBzaXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGRlY29kZVVSSUNvbXBvbmVudCh1cmwpKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JcIixcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5kZXNjcikgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0cyBmbGV4IGZsZXgtd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWNvbGxhcHNlZFwiOiAhX3ZtLmxpc3RzU2hvd24gfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b2dnbGUgYWJzLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5saXN0c1Nob3duID0gIV92bS5saXN0c1Nob3duXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IF92bS5pMThuKFwibXNnU2hvd0hpZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJpbmZvXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmxpc3RzLCBmdW5jdGlvbihsaXN0LCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXR5cGVcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiAhbGlzdC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoXCJAXCIgKyBuYW1lKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGxpcHNpc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGxpc3QpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlIGZsZXhcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLnNhZmVJY29uIH0gfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbnMgZmxleCBmbGV4LXdyYXAgbXItMmNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIHJlZjogXCJjb25maXJtXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiY29uZmlybVwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1ob3RrZXlcIjogX3ZtLmNvbmZpcm1Ib3RrZXksXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uaW5zdGFsbGFibGVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgX3ZtLnJlaW5zdGFsbFxuICAgICAgICAgICAgICAgICAgICA/IF92bS5pMThuKFwiYnV0dG9uQ29uZmlybVJlaW5zdGFsbGF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLmkxOG4oXCJidXR0b25Db25maXJtSW5zdGFsbGF0aW9uXCIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmluc3RhbGxTY3JpcHQgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfYyhcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmkxOG4oXCJidXR0b25DbG9zZVwiKSkgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1jb2wgbXktMVwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInNldHRpbmctY2hlY2tcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjbG9zZUFmdGVySW5zdGFsbFwiLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLmkxOG4oXCJpbnN0YWxsT3B0aW9uQ2xvc2VcIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5jaGVja0Nsb3NlIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic2V0dGluZy1jaGVja1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidHJhY2tMb2NhbEZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmNsb3NlQWZ0ZXJJbnN0YWxsIHx8ICFfdm0uaXNMb2NhbFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS50cmFja0xvY2FsRmlsZSB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBfdm0udHJhY2tUb29sdGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS50cmFja1Rvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uaTE4bihcImluc3RhbGxPcHRpb25UcmFja1wiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLm1lc3NhZ2VcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0uZXJyb3IgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLm1lc3NhZ2UpIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5pbmZvLmluY29nbml0b1xuICAgICAgICAgID8gX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbmNvZ25pdG9cIixcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uaTE4bihcIm1zZ0luY29nbml0b0NoYW5nZXNcIikpIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmcmFtZS1ibG9jayBmbGV4LTEgcG9zLXJlbFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uc2NyaXB0XG4gICAgICAgICAgICA/IF9jKFwidm0tZXh0ZXJuYWxzXCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwiZXh0ZXJuYWxzXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWJzLWZ1bGxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJjbS1vcHRpb25zXCI6IF92bS5jbU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICBjb21tYW5kczogX3ZtLmNvbW1hbmRzLFxuICAgICAgICAgICAgICAgICAgaW5zdGFsbDogeyBjb2RlOiBfdm0uY29kZSwgZGVwczogX3ZtLmRlcHMsIHVybDogX3ZtLmluZm8udXJsIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNjcmlwdCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNjcmlwdCA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2NyaXB0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvcHVibGljL2ltYWdlcy9pY29uMTI4LnBuZ1wiIH0gfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLW9uZU9mLTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0zLW9uZU9mLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDBlMzNhOGVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTMtb25lT2YtMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLW9uZU9mLTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0zLW9uZU9mLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCAnIy9jb21tb24vYnJvd3Nlcic7XG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0ICcjL2NvbW1vbi9oYW5kbGVycyc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcjL2NvbW1vbi9vcHRpb25zJztcbmltcG9ydCAnIy9jb21tb24vdWkvZmF2aWNvbic7XG5pbXBvcnQgJyMvY29tbW9uL3VpL3N0eWxlJztcbmltcG9ydCBBcHAgZnJvbSAnLi92aWV3cy9hcHAnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblZ1ZS5wcm90b3R5cGUuaTE4biA9IGkxOG47XG5kb2N1bWVudC50aXRsZSA9IGAke2kxOG4oJ2xhYmVsSW5zdGFsbCcpfSAtICR7aTE4bignZXh0TmFtZScpfWA7XG5cbm9wdGlvbnMucmVhZHkudGhlbigoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICBuZXcgVnVlKHtcbiAgICByZW5kZXI6IGggPT4gaChBcHApLFxuICB9KVxuICAuJG1vdW50KGVsKTtcbn0pO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMy1vbmVPZi0yLTIhLi9zdHlsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2MwZDJmMTJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMy1vbmVPZi0yLTIhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0zLW9uZU9mLTItMiEuL3N0eWxlLmNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0ZjBjYjY4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvWmhhb0p1bi9EZXNrdG9wL3Zpb2xlbnRtb25rZXkvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzRmMGNiNjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzRmMGNiNjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzRmMGNiNjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzRmMGNiNjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzRmMGNiNjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb25maXJtL3ZpZXdzL2FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTMtb25lT2YtMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTMtb25lT2YtMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzRmMGNiNjgmXCIiXSwic291cmNlUm9vdCI6IiJ9