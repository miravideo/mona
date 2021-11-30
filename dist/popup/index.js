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
/******/ 		"popup/index": 0
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
/******/ 	deferredModules.push(["./src/popup/index.js","common-ui","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/popup/views/app.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/popup/views/app.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vueleton/lib/tooltip/bundle */ "./node_modules/vueleton/lib/tooltip/bundle.js");
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/options */ "./src/common/options.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/common/ui */ "./src/common/ui/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/common/ui/icon */ "./src/common/ui/icon.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/common/keyboard */ "./src/common/keyboard.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/popup/utils/index.js");

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









const manifest = browser.runtime.getManifest();
const NAME = `${manifest.name} ${manifest.version}`;
const SCRIPT_CLS = '.script';
let mousedownElement;
const optionsData = {
  isApplied: _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_3__["default"].get('isApplied'),
  filtersPopup: _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_3__["default"].get('filtersPopup') || {}
};
_Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_3__["default"].hook(changes => {
  if ('isApplied' in changes) {
    optionsData.isApplied = changes.isApplied;
  }

  if ('filtersPopup' in changes) {
    optionsData.filtersPopup = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, optionsData.filtersPopup, {}, changes.filtersPopup);
  }
});

function compareBy(...keys) {
  return (a, b) => {
    for (const key of keys) {
      const ka = key(a);
      const kb = key(b);
      if (ka < kb) return -1;
      if (ka > kb) return 1;
    }

    return 0;
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Icon: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_7__["default"],
    Tooltip: (vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1___default())
  },

  data() {
    return {
      IS_DEV: _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["IS_DEV"],
      store: _utils__WEBPACK_IMPORTED_MODULE_9__["store"],
      options: optionsData,
      activeMenu: 'scripts',
      activeExtras: null,
      message: null,
      focusedItem: null,
      name: NAME
    };
  },

  computed: {
    injectionScopes() {
      const {
        sort,
        enabledFirst,
        hideDisabled
      } = this.options.filtersPopup;
      const isSorted = sort === 'alpha' || enabledFirst;
      const {
        injectable
      } = _utils__WEBPACK_IMPORTED_MODULE_9__["store"];
      const groupDisabled = hideDisabled === 'group';
      return [injectable && ['scripts', Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["i18n"])('menuMatchedScripts'), groupDisabled || null], injectable && groupDisabled && ['disabled', Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["i18n"])('menuMatchedDisabledScripts'), false], ['frameScripts', Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["i18n"])('menuMatchedFrameScripts')]].filter(Boolean).map(([name, title, groupByEnabled]) => {
        let list = _utils__WEBPACK_IMPORTED_MODULE_9__["store"][name] || _utils__WEBPACK_IMPORTED_MODULE_9__["store"].scripts;

        if (groupByEnabled != null) {
          list = list.filter(script => !script.config.enabled === !groupByEnabled);
        }

        const numTotal = list.length;
        const numEnabled = groupByEnabled == null ? list.reduce((num, script) => num + script.config.enabled, 0) : numTotal;

        if (hideDisabled === 'hide' || hideDisabled === true) {
          list = list.filter(script => script.config.enabled);
        }

        list = list.map((script, i) => {
          const {
            config,
            custom,
            meta
          } = script;
          const scriptName = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["getScriptName"])(script);
          return {
            id: `${name}/${script.props.id}`,
            name: scriptName,
            data: script,
            home: custom.homepageURL || meta.homepageURL || meta.homepage,
            key: isSorted && `${enabledFirst && +!config.enabled}${sort === 'alpha' ? scriptName.toLowerCase() : `${1e6 + i}`.slice(1)}`,
            excludesValue: null
          };
        });

        if (isSorted) {
          list.sort((a, b) => a.key < b.key ? -1 : a.key > b.key);
        }

        return numTotal && {
          name,
          title,
          list,
          totals: numEnabled < numTotal ? `${numEnabled} / ${numTotal}` : `${numTotal}`
        };
      }).filter(Boolean);
    },

    failureReason() {
      return [!_utils__WEBPACK_IMPORTED_MODULE_9__["store"].injectable && 'noninjectable', _utils__WEBPACK_IMPORTED_MODULE_9__["store"].blacklisted && 'blacklisted', // undefined means the data isn't ready yet
      optionsData.isApplied === false && 'scripts-disabled'].filter(Boolean).join(' ');
    },

    failureReasonText() {
      return !_utils__WEBPACK_IMPORTED_MODULE_9__["store"].injectable && Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["i18n"])('failureReasonNoninjectable') || _utils__WEBPACK_IMPORTED_MODULE_9__["store"].blacklisted && Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["i18n"])('failureReasonBlacklisted') || optionsData.isApplied === false && Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["i18n"])('menuScriptDisabled') || '';
    },

    findUrls() {
      const query = encodeURIComponent(_utils__WEBPACK_IMPORTED_MODULE_9__["store"].domain);
      return {
        [`${Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["i18n"])('menuFindScripts')} (GF)`]: `https://greasyfork.org/scripts/by-site/${query}`,
        OUJS: `https://openuserjs.org/?q=${query}`
      };
    },

    tabIndex() {
      return this.activeExtras ? -1 : 0;
    }

  },
  methods: {
    toggleMenu(name) {
      this.activeMenu = this.activeMenu === name ? null : name;
    },

    toggleExtras(item, evt) {
      this.activeExtras = this.activeExtras === item ? null : item;
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_8__["keyboardService"].setContext('activeExtras', this.activeExtras);

      if (this.activeExtras) {
        item.el = evt.target.closest(SCRIPT_CLS);
        this.$nextTick(() => {
          const {
            extrasMenu
          } = this.$refs;
          extrasMenu.style.top = `${Math.min(window.innerHeight - extrasMenu.getBoundingClientRect().height, (evt.currentTarget || evt.target).getBoundingClientRect().top + 16)}px`;
        });
      }
    },

    getSymbolCheck(bool) {
      return `toggle-${bool ? 'on' : 'off'}`;
    },

    onToggle() {
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_3__["default"].set('isApplied', optionsData.isApplied = !optionsData.isApplied);
      this.checkReload();
    },

    onManage() {
      browser.runtime.openOptionsPage();
      window.close();
    },

    onVisitWebsite() {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["sendCmd"])('TabOpen', {
        url: 'https://violentmonkey.github.io/'
      });
      window.close();
    },

    onEditScript(item) {
      if (!_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["IS_DEV"] && item.data.custom.buildIn) return;
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["sendCmd"])('OpenEditor', item.data.props.id);
      window.close();
    },

    onCommand(evt) {
      const {
        type,
        currentTarget: el
      } = evt;

      if (type === 'mousedown') {
        mousedownElement = el;
        evt.preventDefault();
      } else if (type === 'keydown' || mousedownElement === el) {
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["sendTabCmd"])(_utils__WEBPACK_IMPORTED_MODULE_9__["store"].currentTab.id, 'Command', _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, el.CMD, {
          evt: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_5__["objectPick"])(evt, ['type', 'button', 'shiftKey', 'altKey', 'ctrlKey', 'metaKey', 'key', 'keyCode', 'code'])
        }));
        window.close();
      }
    },

    onToggleScript(item) {
      if (item.data.custom.buildIn) return;
      const {
        data
      } = item;
      const enabled = !data.config.enabled;
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["sendCmd"])('UpdateScriptInfo', {
        id: data.props.id,
        config: {
          enabled
        }
      }).then(() => {
        data.config.enabled = enabled;
        this.checkReload();
      });
    },

    checkReload() {
      if (_Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_3__["default"].get('autoReload')) {
        browser.tabs.reload(_utils__WEBPACK_IMPORTED_MODULE_9__["store"].currentTab.id);
        _utils__WEBPACK_IMPORTED_MODULE_9__["store"].scriptIds.length = 0;
        _utils__WEBPACK_IMPORTED_MODULE_9__["store"].scripts.length = 0;
        _utils__WEBPACK_IMPORTED_MODULE_9__["store"].frameScripts.length = 0;
        _utils__WEBPACK_IMPORTED_MODULE_9__["mutex"].init();
      }
    },

    async onCreateScript() {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["sendCmd"])('OpenEditor');
      window.close();
    },

    async onInjectionFailureFix() {
      // TODO: promisify options.set, resolve on storage write, await it instead of makePause
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_3__["default"].set('defaultInjectInto', _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["INJECT_AUTO"]);
      await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["makePause"])(100);
      await browser.tabs.reload();
      window.close();
    },

    onRemoveScript({
      data: {
        config,
        props: {
          id
        }
      }
    }) {
      const removed = +!config.removed;
      config.removed = removed;
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["sendCmd"])('MarkRemoved', {
        id,
        removed
      });
    },

    onExclude() {
      const item = this.activeExtras;
      item.excludesValue = [...(item.data.custom.excludeMatch || []), `${_utils__WEBPACK_IMPORTED_MODULE_9__["store"].currentTab.url.split('#')[0]}*`].join('\n');
      this.$nextTick(() => {
        // not using $refs because multiple items may show textareas
        const area = item.el.querySelector('textarea');
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_6__["autofitElementsHeight"])([area]);
        area.focus();
      });
    },

    onExcludeClose(item) {
      item.excludesValue = null;
      this.focus(item);
    },

    async onExcludeSave(item) {
      await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_4__["sendCmd"])('UpdateScriptInfo', {
        id: item.data.props.id,
        custom: {
          excludeMatch: item.excludesValue.split('\n').map(line => line.trim()).filter(Boolean)
        }
      });
      this.onExcludeClose(item);
      this.checkReload();
    },

    navigate(dir) {
      var _items$index;

      const {
        activeElement
      } = document;
      const items = Array.from(this.$el.querySelectorAll('[tabindex="0"]')).map(el => ({
        el,
        rect: el.getBoundingClientRect()
      })).filter(({
        rect
      }) => rect.width && rect.height);
      items.sort(compareBy(item => item.rect.top, item => item.rect.left));
      let index = items.findIndex(({
        el
      }) => el === activeElement);

      const findItemIndex = (step, test) => {
        for (let i = index + step; i >= 0 && i < items.length; i += step) {
          if (test(items[index], items[i])) return i;
        }
      };

      if (index < 0) {
        index = 0;
      } else if (dir === 'u' || dir === 'd') {
        const step = dir === 'u' ? -1 : 1;
        index = findItemIndex(step, (a, b) => (a.rect.top - b.rect.top) * step < 0);

        if (dir === 'u') {
          while (index > 0 && items[index - 1].rect.top === items[index].rect.top) index -= 1;
        }
      } else {
        const step = dir === 'l' ? -1 : 1;
        index = findItemIndex(step, (a, b) => (a.rect.left - b.rect.left) * step < 0);
      }

      (_items$index = items[index]) == null ? void 0 : _items$index.el.focus();
    },

    focus(item) {
      var _item$el, _item$el$querySelecto;

      item == null ? void 0 : (_item$el = item.el) == null ? void 0 : (_item$el$querySelecto = _item$el.querySelector('.menu-area')) == null ? void 0 : _item$el$querySelecto.focus();
    },

    delegateMouseEnter(e) {
      const {
        target
      } = e;
      if (target.tabIndex >= 0) target.focus();
    },

    delegateMouseLeave(e) {
      const {
        target
      } = e;
      if (target === document.activeElement && !Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_8__["isInput"])(target)) target.blur();
    },

    updateMessage() {
      var _document$activeEleme;

      this.message = ((_document$activeEleme = document.activeElement) == null ? void 0 : _document$activeEleme.dataset.message) || '';
    }

  },

  mounted() {
    _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_8__["keyboardService"].enable();
    this.disposeList = [_Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_8__["keyboardService"].register('escape', () => {
      var _document$activeEleme2;

      const item = this.activeExtras;

      if (item) {
        this.toggleExtras(null);
        this.focus(item);
      } else if ((_document$activeEleme2 = document.activeElement) == null ? void 0 : _document$activeEleme2.value) {
        document.activeElement.blur();
      } else {
        window.close();
      }
    }), ...['up', 'down', 'left', 'right'].map(key => _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_8__["keyboardService"].register(key, this.navigate.bind(this, key[0]), {
      condition: '!inputFocus'
    })), _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_8__["keyboardService"].register('e', () => {
      this.onEditScript(this.focusedItem);
    }, {
      condition: '!inputFocus'
    })];
  },

  beforeDestroy() {
    var _this$disposeList;

    _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_8__["keyboardService"].disable();
    (_this$disposeList = this.disposeList) == null ? void 0 : _this$disposeList.forEach(dispose => {
      dispose();
    });
  }

});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/popup/style.css?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./src/popup/style.css?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  width: 320px;\n  max-width: 100%;\n  /* Latest Chrome renders an extra blank for a nonexistent scrollbar */\n  overflow: hidden;\n  background: var(--fill-0-5);\n  font-weight: normal\n}\n@media (min-width: 360px) {\nbody {\n    width: 100%\n}\n}\na,\n  a:focus {\n    color: inherit;\n}\n.page-popup {\n  /* hardcoded popup height in Chrome */\n  max-height: 600px;\n  overflow: hidden;\n}\n.page-popup .incognito {\n    padding: 8px 8px 0 46px;\n}\nfooter {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  font-size: 12px;\n  color: var(--fill-6);\n}\n.logo {\n  text-align: center;\n  margin: 0 7px;\n}\n.logo img {\n    width: 32px;\n}\n.logo.disabled > img {\n    opacity: .5;\n}\n.menu-area {\n  cursor: pointer\n}\n.menu-area:hover,\n  .menu-area:focus {\n    background: cornflowerblue;\n    color: var(--bg)\n}\n@media (prefers-color-scheme: dark) {\n.menu-area:hover,\n  .menu-area:focus {\n      background: #404c5c;\n      color: var(--fill-15)\n}\n}\n.script:not(.disabled):not(.runs) .menu-area .script-name,\n  .disabled:not(.runs) > .menu-area {\n    color: var(--fill-8)\n}\n.script:not(.disabled):not(.runs) .menu-area .script-name:hover,\n    .script:not(.disabled):not(.runs) .menu-area .script-name:focus,\n    .disabled:not(.runs) > .menu-area:hover,\n    .disabled:not(.runs) > .menu-area:focus {\n      color: var(--fill-2);\n}\n.ext-name.disabled {\n    color: var(--fill-8);\n}\n.script-icon:not([src]) {\n    display: none;\n}\n.script-icon {\n  max-width: 18px;\n  max-height: 18px;\n  margin-left: 2px;\n  position: absolute\n}\n.script-icon + .icon {\n    margin-left: 22px;\n    margin-right: 10px;\n}\n.menu-buttons {\n  align-items: center;\n  padding: 8px 8px 8px 0;\n  background: var(--bg);\n}\n.menu-buttons > .menu-area {\n    padding: 8px;\n}\n.menu-buttons .icon {\n    display: block;\n    width: 20px;\n    height: 20px;\n}\n.menu {\n  background: var(--bg)\n}\n.menu, .menu:not(.expand) + footer {\n    border-top: 1px solid var(--fill-4);\n}\n.menu-item {\n    position: relative;\n    display: flex;\n    align-items: center;\n    min-height: 2rem;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: left;\n    white-space: nowrap;\n}\n.submenu .menu-item {\n      text-align: left;\n}\n.menu-item .icon {\n      flex: 0 0 14px\n}\n.menu-item .icon.icon-collapse {\n        flex: 0 0 16px;\n        width: 16px;\n        height: 16px;\n}\n.menu-item > .icon:first-child {\n      margin-right: 10px;\n}\n.menu-item > .flex-auto {\n      display: flex;\n      align-self: stretch;\n      align-items: center\n}\n.menu-item > .flex-auto:last-child {\n        padding-right: 14px;\n}\n.menu-item > .flex-1 {\n      padding-right: 2rem;\n}\n.failed .menu-item {\n      -webkit-text-decoration: line-through red;\n              text-decoration: line-through red;\n}\n.removed .menu-item {\n      text-decoration: line-through;\n}\n.menu-find {\n    padding-left: 0;\n    cursor: default;\n}\n.menu-find a {\n      display: flex;\n      align-items: center;\n      align-self: stretch;\n}\n.menu-find .icon {\n      flex-basis: 16px;\n      width: 16px;\n      height: 16px;\n      margin: 0 10px 0 20px;\n}\n.menu-group {\n    padding-left: 20px;\n    color: #4a7792\n}\n@media (prefers-color-scheme: dark) {\n.menu-group {\n      color: #eee\n}\n}\n.menu-group [data-totals]::after {\n      content: \": \" attr(data-totals);\n}\n.menu.expand {\n    background: var(--fill-1);\n}\n.menu.expand > .submenu {\n      display: block;\n      border-color: var(--fill-4);\n}\n.menu.expand .icon-collapse {\n      transform: rotateZ(90deg);\n}\n.submenu {\n  display: none;\n  min-height: 4rem;\n  max-height: 30rem;\n  overflow-y: auto;\n  background: var(--bg);\n  border-top: 1px dashed var(--fill-3);\n}\n.submenu > * {\n    position: relative;\n}\n.submenu > * .menu-item {\n      padding-left: 0;\n}\n.submenu-buttons {\n    display: flex;\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n.submenu-button {\n    padding: .5rem;\n    background: var(--bg);\n    cursor: pointer\n}\n.submenu-button:focus {\n      color: var(--bg);\n      background: cornflowerblue;\n}\n.menu-item:hover + .submenu-buttons .submenu-button:not(:focus) {\n      background: #a0c1fd\n}\n@media (prefers-color-scheme: dark) {\n.menu-item:hover + .submenu-buttons .submenu-button:not(:focus) {\n        background: #5b6979\n}\n}\n.submenu-button .icon {\n      display: block;\n}\n.submenu-commands {\n    font-size: .8rem;\n    color: var(--fill-12);\n}\n.submenu-commands > .menu-item {\n      padding-left: 46px;\n}\n.submenu-commands > .menu-item > .icon {\n        margin-right: .5rem;\n}\n.message {\n  position: absolute;\n  max-width: 100%;\n  left: 0;\n  bottom: 0;\n  padding: 4px 8px;\n  word-wrap: break-word;\n  font-size: 12px;\n  line-height: 1.2; /* lower values cut descender in \"g\" */\n  background: var(--fill-0-5);\n  border: 1px solid var(--fill-2);\n}\n.message > div {\n    max-height: 40px;\n    overflow: hidden;\n}\n.failure-reason {\n  padding: .75rem 14px .75rem 46px;\n}\n.failure-reason code {\n    max-width: 100%;\n}\n.reload-hint .icon {\n    position: absolute;\n    left: 20px;\n    width: 16px;\n    height: 16px;\n}\n.extras-menu {\n  position: fixed;\n  right: 1rem;\n  box-shadow: 1px 1px 10px rgba(0,0,0,0.53333);\n  z-index: 100;\n  background: var(--bg);\n  color: var(--fg);\n  border: 1px solid var(--fill-6)\n}\n.extras-menu > * {\n    cursor: pointer;\n    display: block;\n    padding: .25rem 1rem;\n    text-decoration: none\n}\n.extras-menu > *:first-child {\n      padding-top: .75rem;\n}\n.extras-menu > *:last-child {\n      padding-bottom: .75rem;\n}\n.extras-menu > *:focus {\n      color: var(--bg);\n      background: cornflowerblue;\n}\n.excludes-menu {\n  padding: .25rem .5rem .25rem 46px;\n}\n.excludes-menu button {\n    margin: .5rem .5rem 0 0;\n}\n.excludes-menu details summary {\n      list-style-type: none;\n}\n.excludes-menu details[open] {\n      padding-top: .25rem;\n}\n.excludes-menu details[open] summary {\n        position: absolute;\n        left: 18px;\n}\n.excludes-menu details:not([open]) {\n      display: inline;\n}\n.excludes-menu .icon {\n    cursor: pointer;\n    width: 18px;\n    height: 18px;\n}\n.extras-shown .script-name {\n  text-decoration: underline;\n}\n.block-scroll {\n  pointer-events: none;\n  -moz-user-select: none;\n       user-select: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/popup/views/app.vue?vue&type=template&id=6f2db414&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/popup/views/app.vue?vue&type=template&id=6f2db414& ***!
  \**********************************************************************************************************************************************************************************************/
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
      staticClass: "page-popup",
      attrs: { "data-failure-reason": _vm.failureReason },
      on: {
        click: function($event) {
          _vm.activeExtras && _vm.toggleExtras(null)
        },
        contextmenu: function($event) {
          _vm.activeExtras && (_vm.toggleExtras(null), $event.preventDefault())
        },
        "!mouseenter": function($event) {
          return _vm.delegateMouseEnter.apply(null, arguments)
        },
        "!mouseleave": function($event) {
          return _vm.delegateMouseLeave.apply(null, arguments)
        },
        "!focus": function($event) {
          return _vm.updateMessage.apply(null, arguments)
        }
      }
    },
    [
      _c("div", { staticClass: "flex menu-buttons" }, [
        _c(
          "div",
          { staticClass: "logo", class: { disabled: !_vm.options.isApplied } },
          [_c("img", { attrs: { src: "/public/images/icon128.png" } })]
        ),
        _c("div", {
          staticClass: "flex-1 ext-name",
          class: { disabled: !_vm.options.isApplied },
          domProps: { textContent: _vm._s(_vm.name) }
        }),
        _c(
          "span",
          {
            staticClass: "menu-area",
            class: { disabled: !_vm.options.isApplied },
            attrs: {
              "data-message": _vm.options.isApplied
                ? _vm.i18n("menuScriptEnabled")
                : _vm.i18n("menuScriptDisabled"),
              tabIndex: _vm.tabIndex
            },
            on: { click: _vm.onToggle }
          },
          [
            _c("icon", {
              attrs: { name: _vm.getSymbolCheck(_vm.options.isApplied) }
            })
          ],
          1
        ),
        _c(
          "span",
          {
            staticClass: "menu-area",
            attrs: {
              "data-message": _vm.i18n("menuDashboard"),
              tabIndex: _vm.tabIndex
            },
            on: { click: _vm.onManage }
          },
          [_c("icon", { attrs: { name: "cog" } })],
          1
        ),
        _c(
          "span",
          {
            staticClass: "menu-area",
            attrs: {
              "data-message": _vm.i18n("menuNewScript"),
              tabIndex: _vm.tabIndex
            },
            on: { click: _vm.onCreateScript }
          },
          [_c("icon", { attrs: { name: "plus" } })],
          1
        )
      ]),
      _vm.store.injectable
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.store.domain,
                  expression: "store.domain"
                }
              ],
              staticClass: "menu"
            },
            [
              _c(
                "div",
                {
                  staticClass: "menu-item menu-area menu-find",
                  attrs: { tabIndex: _vm.tabIndex }
                },
                [
                  _vm._l(_vm.findUrls, function(url, text, i) {
                    return [
                      _c(
                        "a",
                        {
                          key: url,
                          class: { ellipsis: !i, "mr-1": !i, "ml-1": i },
                          attrs: {
                            target: "_blank",
                            href: url,
                            "data-message": url.split("://")[1]
                          }
                        },
                        [
                          !i
                            ? _c("icon", { attrs: { name: "search" } })
                            : _vm._e(),
                          _vm._v(_vm._s(text) + " ")
                        ],
                        1
                      ),
                      !i ? [_vm._v("/")] : _vm._e()
                    ]
                  })
                ],
                2
              )
            ]
          )
        : _vm._e(),
      _vm.failureReasonText
        ? _c(
            "div",
            { staticClass: "failure-reason" },
            [
              _vm.injectionScopes[0] && !_vm.options.isApplied
                ? _c(
                    "tooltip",
                    {
                      staticClass: "reload-hint",
                      attrs: {
                        content: _vm.i18n("labelAutoReloadCurrentTabDisabled"),
                        align: "start",
                        placement: "bottom"
                      }
                    },
                    [_c("icon", { attrs: { name: "info" } })],
                    1
                  )
                : _vm._e(),
              _c("span", {
                domProps: { textContent: _vm._s(_vm.failureReasonText) }
              }),
              _vm.store.blacklisted
                ? _c("code", {
                    staticClass: "ellipsis inline-block",
                    domProps: { textContent: _vm._s(_vm.store.blacklisted) }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._l(_vm.injectionScopes, function(scope) {
        return _c(
          "div",
          {
            key: scope.name,
            staticClass: "menu menu-scripts",
            class: {
              expand: _vm.activeMenu === scope.name,
              "block-scroll": _vm.activeExtras
            },
            attrs: { "data-type": scope.name }
          },
          [
            _c(
              "div",
              {
                staticClass: "menu-item menu-area menu-group",
                attrs: { tabIndex: _vm.tabIndex },
                on: {
                  click: function($event) {
                    return _vm.toggleMenu(scope.name)
                  }
                }
              },
              [
                _c("icon", {
                  staticClass: "icon-collapse",
                  attrs: { name: "arrow" }
                }),
                _c("div", {
                  staticClass: "flex-auto",
                  attrs: { "data-totals": scope.totals },
                  domProps: { textContent: _vm._s(scope.title) }
                })
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "submenu" },
              _vm._l(scope.list, function(item, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass: "script",
                    class: {
                      disabled: !item.data.config.enabled,
                      failed: item.data.failed,
                      removed: item.data.config.removed,
                      runs: item.data.runs,
                      "extras-shown": _vm.activeExtras === item,
                      "excludes-shown": item.excludesValue
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "menu-item menu-area",
                        attrs: {
                          tabIndex: _vm.tabIndex,
                          "data-message": item.name
                        },
                        on: {
                          focus: function($event) {
                            _vm.focusedItem = item
                          },
                          keydown: [
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              if (
                                $event.ctrlKey ||
                                $event.shiftKey ||
                                $event.altKey ||
                                $event.metaKey
                              ) {
                                return null
                              }
                              $event.stopPropagation()
                              return _vm.onEditScript(item)
                            },
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "space",
                                  32,
                                  $event.key,
                                  [" ", "Spacebar"]
                                )
                              ) {
                                return null
                              }
                              if (
                                $event.ctrlKey ||
                                $event.shiftKey ||
                                $event.altKey ||
                                $event.metaKey
                              ) {
                                return null
                              }
                              $event.stopPropagation()
                              return _vm.onToggleScript(item)
                            }
                          ],
                          click: function($event) {
                            return _vm.onToggleScript(item)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "script-icon",
                          attrs: { src: item.data.safeIcon }
                        }),
                        _c("icon", {
                          attrs: {
                            name: _vm.getSymbolCheck(item.data.config.enabled)
                          }
                        }),
                        _c("div", {
                          staticClass: "script-name flex-auto ellipsis",
                          domProps: { textContent: _vm._s(item.name) },
                          on: {
                            click: function($event) {
                              if (!$event.ctrlKey) {
                                return null
                              }
                              if (
                                $event.shiftKey ||
                                $event.altKey ||
                                $event.metaKey
                              ) {
                                return null
                              }
                              $event.stopPropagation()
                              return _vm.onEditScript(item)
                            },
                            contextmenu: function($event) {
                              if (
                                $event.ctrlKey ||
                                $event.shiftKey ||
                                $event.altKey ||
                                $event.metaKey
                              ) {
                                return null
                              }
                              $event.stopPropagation()
                              return _vm.onEditScript(item)
                            },
                            mousedown: function($event) {
                              if ("button" in $event && $event.button !== 1) {
                                return null
                              }
                              if (
                                $event.ctrlKey ||
                                $event.shiftKey ||
                                $event.altKey ||
                                $event.metaKey
                              ) {
                                return null
                              }
                              $event.stopPropagation()
                              return _vm.onEditScript(item)
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              (_vm.IS_DEV || !item.data.custom.buildIn) &&
                              (_vm.activeExtras === item ||
                                _vm.focusedItem === item),
                            expression:
                              "(IS_DEV || !item.data.custom.buildIn)\n           && (activeExtras === item || focusedItem === item)"
                          }
                        ],
                        staticClass: "submenu-buttons"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "submenu-button",
                            attrs: {
                              tabIndex: _vm.tabIndex,
                              title: _vm.i18n("buttonEditClickHint")
                            },
                            on: {
                              click: function($event) {
                                return _vm.onEditScript(item)
                              }
                            }
                          },
                          [_c("icon", { attrs: { name: "code" } })],
                          1
                        ),
                        _c(
                          "div",
                          {
                            staticClass: "submenu-button",
                            attrs: { tabIndex: _vm.tabIndex },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.toggleExtras(item, $event)
                              }
                            }
                          },
                          [_c("icon", { attrs: { name: "more" } })],
                          1
                        )
                      ]
                    ),
                    item.excludesValue != null
                      ? _c(
                          "div",
                          { staticClass: "excludes-menu flex flex-col" },
                          [
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.excludesValue,
                                  expression: "item.excludesValue"
                                }
                              ],
                              attrs: { spellcheck: "false" },
                              domProps: { value: item.excludesValue },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "excludesValue",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", [
                              _c("button", {
                                domProps: {
                                  textContent: _vm._s(_vm.i18n("buttonOK"))
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.onExcludeSave(item)
                                  }
                                }
                              }),
                              _c("button", {
                                domProps: {
                                  textContent: _vm._s(_vm.i18n("buttonCancel"))
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.onExcludeClose(item)
                                  }
                                }
                              }),
                              _c("details", [
                                _c(
                                  "summary",
                                  [_c("icon", { attrs: { name: "info" } })],
                                  1
                                ),
                                _c("small", [
                                  _c("span", {
                                    domProps: {
                                      textContent: _vm._s(
                                        _vm.i18n("menuExcludeHint")
                                      )
                                    }
                                  }),
                                  _vm._m(0, true)
                                ])
                              ])
                            ])
                          ]
                        )
                      : _vm._e(),
                    _c(
                      "div",
                      { staticClass: "submenu-commands" },
                      _vm._l(_vm.store.commands[item.data.props.id], function(
                        cap,
                        i
                      ) {
                        return _c(
                          "div",
                          {
                            key: i,
                            staticClass: "menu-item menu-area",
                            attrs: {
                              tabIndex: _vm.tabIndex,
                              "data-message": cap
                            },
                            domProps: {
                              CMD: { id: item.data.props.id, cap: cap }
                            },
                            on: {
                              mousedown: _vm.onCommand,
                              mouseup: _vm.onCommand,
                              keydown: [
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.onCommand.apply(null, arguments)
                                },
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "space",
                                      32,
                                      $event.key,
                                      [" ", "Spacebar"]
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.onCommand.apply(null, arguments)
                                }
                              ]
                            }
                          },
                          [
                            _c("icon", { attrs: { name: "command" } }),
                            _c("div", {
                              staticClass: "flex-auto ellipsis",
                              domProps: { textContent: _vm._s(cap) }
                            })
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ]
                )
              }),
              0
            )
          ]
        )
      }),
      _vm.store.injectionFailure
        ? _c("div", { staticClass: "failure-reason" }, [
            _c("div", {
              domProps: { textContent: _vm._s(_vm.i18n("menuInjectionFailed")) }
            }),
            _vm.store.injectionFailure.fixable
              ? _c("a", {
                  attrs: { href: "#" },
                  domProps: {
                    textContent: _vm._s(_vm.i18n("menuInjectionFailedFix"))
                  },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.onInjectionFailureFix.apply(null, arguments)
                    }
                  }
                })
              : _vm._e()
          ])
        : _vm._e(),
      _vm.store.currentTab && _vm.store.currentTab.incognito
        ? _c("div", {
            staticClass: "incognito",
            domProps: { textContent: _vm._s(_vm.i18n("msgIncognitoChanges")) }
          })
        : _vm._e(),
      _c("footer", [
        _c("a", {
          attrs: { href: "https://mirav.cn/", tabIndex: _vm.tabIndex },
          domProps: { textContent: _vm._s(_vm.i18n("visitWebsite")) },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.onVisitWebsite.apply(null, arguments)
            }
          }
        })
      ]),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.message,
              expression: "message"
            }
          ],
          staticClass: "message"
        },
        [_c("div", { domProps: { textContent: _vm._s(_vm.message) } })]
      ),
      _vm.activeExtras
        ? _c("div", { ref: "extrasMenu", staticClass: "extras-menu" }, [
            _vm.activeExtras.home
              ? _c("a", {
                  attrs: {
                    tabindex: "0",
                    href: _vm.activeExtras.home,
                    rel: "noopener noreferrer",
                    target: "_blank"
                  },
                  domProps: { textContent: _vm._s(_vm.i18n("buttonHome")) }
                })
              : _vm._e(),
            _c("div", {
              attrs: { tabindex: "0" },
              domProps: { textContent: _vm._s(_vm.i18n("menuExclude")) },
              on: { click: _vm.onExclude }
            }),
            _c("div", {
              attrs: { tabindex: "0" },
              domProps: {
                textContent: _vm._s(
                  _vm.activeExtras.data.config.removed
                    ? _vm.i18n("buttonRestore")
                    : _vm.i18n("buttonRemove")
                )
              },
              on: {
                click: function($event) {
                  return _vm.onRemoveScript(_vm.activeExtras)
                }
              }
            })
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "monospace-font mt-1" }, [
      _c("li", [_vm._v("https://www.foo.com/path/*bar*")]),
      _c("li", [_vm._v("*://www.foo.com/*")]),
      _c("li", [_vm._v("*://*.foo.com/*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/popup/style.css?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./src/popup/style.css?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!./style.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/popup/style.css?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("79bb1cdb", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/popup/index.js":
/*!****************************!*\
  !*** ./src/popup/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/browser */ "./src/common/browser.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/handlers */ "./src/common/handlers.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_load_script_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/load-script-icon */ "./src/common/load-script-icon.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/common/ui/style */ "./src/common/ui/style/index.js");
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/app */ "./src/popup/views/app.vue");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/popup/utils/index.js");










_utils__WEBPACK_IMPORTED_MODULE_9__["mutex"].init();
vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.i18n = _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"];
const vm = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  render: h => h(_views_app__WEBPACK_IMPORTED_MODULE_8__["default"])
}).$mount();
document.body.append(vm.$el);
Object.assign(_Users_ZhaoJun_Desktop_violentmonkey_src_common_handlers__WEBPACK_IMPORTED_MODULE_4__["default"], {
  async SetPopup(data, src) {
    if (_utils__WEBPACK_IMPORTED_MODULE_9__["store"].currentTab && _utils__WEBPACK_IMPORTED_MODULE_9__["store"].currentTab.id !== src.tab.id) return;
    /* SetPopup from a sub-frame may come first so we need to wait for the main page
     * because we only show the iframe menu for unique scripts that don't run in the main page */

    const isTop = src.frameId === 0;
    if (!isTop) await _utils__WEBPACK_IMPORTED_MODULE_9__["mutex"].ready;
    const ids = data.ids.filter(id => !_utils__WEBPACK_IMPORTED_MODULE_9__["store"].scriptIds.includes(id));
    _utils__WEBPACK_IMPORTED_MODULE_9__["store"].scriptIds.push(...ids);

    if (isTop) {
      _utils__WEBPACK_IMPORTED_MODULE_9__["mutex"].resolve();
      _utils__WEBPACK_IMPORTED_MODULE_9__["store"].commands = safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_6__["mapEntry"], data.menus, ([, value]) => Object.keys(value).sort()); // executeScript may(?) fail in a discarded or lazy-loaded tab, which is actually injectable

      _utils__WEBPACK_IMPORTED_MODULE_9__["store"].injectable = true;
    }

    if (ids.length) {
      var _data$scripts;

      // frameScripts may be appended multiple times if iframes have unique scripts
      const scope = _utils__WEBPACK_IMPORTED_MODULE_9__["store"][isTop ? 'scripts' : 'frameScripts'];
      const metas = ((_data$scripts = data.scripts) == null ? void 0 : _data$scripts.filter(({
        props: {
          id
        }
      }) => ids.includes(id))) || Object.assign(data, (await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('GetData', ids))).scripts;
      metas.forEach(script => {
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_load_script_icon__WEBPACK_IMPORTED_MODULE_5__["loadScriptIcon"])(script, data.cache);
        const {
          id
        } = script.props;
        script.runs = data.runningIds.includes(id);

        if (data.failedIds.includes(id)) {
          script.failed = true;

          if (!_utils__WEBPACK_IMPORTED_MODULE_9__["store"].injectionFailure) {
            _utils__WEBPACK_IMPORTED_MODULE_9__["store"].injectionFailure = {
              fixable: data.injectInto === _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_3__["INJECT_PAGE"]
            };
          }
        }
      });
      scope.push(...metas);
    }
  }

});
Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('CachePop', 'SetPopup').then(data => {
  safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_6__["forEachValue"], data, val => _Users_ZhaoJun_Desktop_violentmonkey_src_common_handlers__WEBPACK_IMPORTED_MODULE_4__["default"].SetPopup(...val));
});
/* Since new Chrome prints a warning when ::-webkit-details-marker is used,
 * we add it only for old Chrome, which is detected via feature added in 89. */

if (!(CSS.supports == null ? void 0 : CSS.supports('list-style-type', 'disclosure-open'))) {
  document.styleSheets[0].insertRule('.excludes-menu ::-webkit-details-marker {display:none}');
}

Promise.all([Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('GetTabDomain'), browser.tabs.executeScript({
  code: '1',
  runAt: 'document_start'
}).catch(() => [])]).then(async ([{
  tab,
  domain
}, [injectable]]) => {
  _utils__WEBPACK_IMPORTED_MODULE_9__["store"].currentTab = tab;
  _utils__WEBPACK_IMPORTED_MODULE_9__["store"].domain = domain;
  browser.runtime.connect({
    name: `${tab.id}`
  });

  if (!injectable) {
    _utils__WEBPACK_IMPORTED_MODULE_9__["store"].injectable = false;
  } else {
    _utils__WEBPACK_IMPORTED_MODULE_9__["store"].blacklisted = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('TestBlacklist', tab.url);
  }
});

/***/ }),

/***/ "./src/popup/style.css?vue&type=style&index=0&lang=css&":
/*!**************************************************************!*\
  !*** ./src/popup/style.css?vue&type=style&index=0&lang=css& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!./style.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/popup/style.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/popup/utils/index.js":
/*!**********************************!*\
  !*** ./src/popup/utils/index.js ***!
  \**********************************/
/*! exports provided: store, mutex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutex", function() { return mutex; });
const store = {
  scripts: [],
  frameScripts: [],
  scriptIds: [],
  commands: [],
  domain: '',
  injectionFailure: null,
  injectable: true,
  blacklisted: false
};
const mutex = {
  init(delay = 100) {
    this.ready = new Promise(resolve => {
      this.resolve = resolve; // pages like Chrome Web Store may forbid injection in main page so we need a timeout

      setTimeout(resolve, delay);
    });
  }

};

/***/ }),

/***/ "./src/popup/views/app.vue":
/*!*********************************!*\
  !*** ./src/popup/views/app.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_6f2db414___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=6f2db414& */ "./src/popup/views/app.vue?vue&type=template&id=6f2db414&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./src/popup/views/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css?vue&type=style&index=0&lang=css& */ "./src/popup/style.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_6f2db414___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_6f2db414___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/popup/views/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/popup/views/app.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/popup/views/app.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/popup/views/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/popup/views/app.vue?vue&type=template&id=6f2db414&":
/*!****************************************************************!*\
  !*** ./src/popup/views/app.vue?vue&type=template&id=6f2db414& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_6f2db414___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=6f2db414& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/popup/views/app.vue?vue&type=template&id=6f2db414&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_6f2db414___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_6f2db414___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3NyYy9wb3B1cC92aWV3cy9hcHAudnVlIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwL3ZpZXdzL2FwcC52dWU/OTg1MiIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvc3R5bGUuY3NzPzBkN2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC9zdHlsZS5jc3M/OGQ4OSIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwL3ZpZXdzL2FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwL3ZpZXdzL2FwcC52dWU/MjE5NSIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvdmlld3MvYXBwLnZ1ZT9hODVkIl0sIm5hbWVzIjpbIm11dGV4IiwiaW5pdCIsIlZ1ZSIsInByb3RvdHlwZSIsImkxOG4iLCJ2bSIsInJlbmRlciIsImgiLCJBcHAiLCIkbW91bnQiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmQiLCIkZWwiLCJPYmplY3QiLCJhc3NpZ24iLCJoYW5kbGVycyIsIlNldFBvcHVwIiwiZGF0YSIsInNyYyIsInN0b3JlIiwiY3VycmVudFRhYiIsImlkIiwidGFiIiwiaXNUb3AiLCJmcmFtZUlkIiwicmVhZHkiLCJpZHMiLCJmaWx0ZXIiLCJzY3JpcHRJZHMiLCJpbmNsdWRlcyIsInB1c2giLCJyZXNvbHZlIiwiY29tbWFuZHMiLCJtYXBFbnRyeSIsIm1lbnVzIiwidmFsdWUiLCJrZXlzIiwic29ydCIsImluamVjdGFibGUiLCJsZW5ndGgiLCJzY29wZSIsIm1ldGFzIiwic2NyaXB0cyIsInByb3BzIiwic2VuZENtZERpcmVjdGx5IiwiZm9yRWFjaCIsInNjcmlwdCIsImxvYWRTY3JpcHRJY29uIiwiY2FjaGUiLCJydW5zIiwicnVubmluZ0lkcyIsImZhaWxlZElkcyIsImZhaWxlZCIsImluamVjdGlvbkZhaWx1cmUiLCJmaXhhYmxlIiwiaW5qZWN0SW50byIsIklOSkVDVF9QQUdFIiwidGhlbiIsImZvckVhY2hWYWx1ZSIsInZhbCIsIkNTUyIsInN1cHBvcnRzIiwic3R5bGVTaGVldHMiLCJpbnNlcnRSdWxlIiwiUHJvbWlzZSIsImFsbCIsImJyb3dzZXIiLCJ0YWJzIiwiZXhlY3V0ZVNjcmlwdCIsImNvZGUiLCJydW5BdCIsImNhdGNoIiwiZG9tYWluIiwicnVudGltZSIsImNvbm5lY3QiLCJuYW1lIiwiYmxhY2tsaXN0ZWQiLCJ1cmwiLCJmcmFtZVNjcmlwdHMiLCJkZWxheSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxr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O0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUF5SyxDQUFnQix1T0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoicG9wdXAvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicG9wdXAvaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wb3B1cC9pbmRleC5qc1wiLFwiY29tbW9uLXVpXCIsXCJjb21tb25cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cInBhZ2UtcG9wdXBcIlxuICAgIEBjbGljaz1cImFjdGl2ZUV4dHJhcyAmJiB0b2dnbGVFeHRyYXMobnVsbClcIlxuICAgIEBjb250ZXh0bWVudT1cImFjdGl2ZUV4dHJhcyAmJiAodG9nZ2xlRXh0cmFzKG51bGwpLCAkZXZlbnQucHJldmVudERlZmF1bHQoKSlcIlxuICAgIEBtb3VzZWVudGVyLmNhcHR1cmU9XCJkZWxlZ2F0ZU1vdXNlRW50ZXJcIlxuICAgIEBtb3VzZWxlYXZlLmNhcHR1cmU9XCJkZWxlZ2F0ZU1vdXNlTGVhdmVcIlxuICAgIEBmb2N1cy5jYXB0dXJlPVwidXBkYXRlTWVzc2FnZVwiXG4gICAgOmRhdGEtZmFpbHVyZS1yZWFzb249XCJmYWlsdXJlUmVhc29uXCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggbWVudS1idXR0b25zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiIDpjbGFzcz1cIntkaXNhYmxlZDohb3B0aW9ucy5pc0FwcGxpZWR9XCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3B1YmxpYy9pbWFnZXMvaWNvbjEyOC5wbmdcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImZsZXgtMSBleHQtbmFtZVwiXG4gICAgICAgIDpjbGFzcz1cIntkaXNhYmxlZDohb3B0aW9ucy5pc0FwcGxpZWR9XCJcbiAgICAgICAgdi10ZXh0PVwibmFtZVwiXG4gICAgICAvPlxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3M9XCJtZW51LWFyZWFcIlxuICAgICAgICA6Y2xhc3M9XCJ7ZGlzYWJsZWQ6IW9wdGlvbnMuaXNBcHBsaWVkfVwiXG4gICAgICAgIDpkYXRhLW1lc3NhZ2U9XCJvcHRpb25zLmlzQXBwbGllZCA/IGkxOG4oJ21lbnVTY3JpcHRFbmFibGVkJykgOiBpMThuKCdtZW51U2NyaXB0RGlzYWJsZWQnKVwiXG4gICAgICAgIDp0YWJJbmRleD1cInRhYkluZGV4XCJcbiAgICAgICAgQGNsaWNrPVwib25Ub2dnbGVcIj5cbiAgICAgICAgPGljb24gOm5hbWU9XCJnZXRTeW1ib2xDaGVjayhvcHRpb25zLmlzQXBwbGllZClcIj48L2ljb24+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cIm1lbnUtYXJlYVwiXG4gICAgICAgIDpkYXRhLW1lc3NhZ2U9XCJpMThuKCdtZW51RGFzaGJvYXJkJylcIlxuICAgICAgICA6dGFiSW5kZXg9XCJ0YWJJbmRleFwiXG4gICAgICAgIEBjbGljaz1cIm9uTWFuYWdlXCI+XG4gICAgICAgIDxpY29uIG5hbWU9XCJjb2dcIj48L2ljb24+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cIm1lbnUtYXJlYVwiXG4gICAgICAgIDpkYXRhLW1lc3NhZ2U9XCJpMThuKCdtZW51TmV3U2NyaXB0JylcIlxuICAgICAgICA6dGFiSW5kZXg9XCJ0YWJJbmRleFwiXG4gICAgICAgIEBjbGljaz1cIm9uQ3JlYXRlU2NyaXB0XCI+XG4gICAgICAgIDxpY29uIG5hbWU9XCJwbHVzXCI+PC9pY29uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZW51XCIgdi1pZj1cInN0b3JlLmluamVjdGFibGVcIiB2LXNob3c9XCJzdG9yZS5kb21haW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0gbWVudS1hcmVhIG1lbnUtZmluZFwiIDp0YWJJbmRleD1cInRhYkluZGV4XCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIih1cmwsIHRleHQsIGkpIGluIGZpbmRVcmxzXCI+XG4gICAgICAgICAgPGEgOmtleT1cInVybFwiIHRhcmdldD1cIl9ibGFua1wiIDpjbGFzcz1cInsgZWxsaXBzaXM6ICFpLCAnbXItMSc6ICFpLCAnbWwtMSc6IGkgfVwiXG4gICAgICAgICAgICAgOmhyZWY9XCJ1cmxcIiA6ZGF0YS1tZXNzYWdlPVwidXJsLnNwbGl0KCc6Ly8nKVsxXVwiPlxuICAgICAgICAgICAgPGljb24gbmFtZT1cInNlYXJjaFwiIHYtaWY9XCIhaVwiLz57e3RleHR9fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiFpXCI+LzwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmFpbHVyZS1yZWFzb25cIiB2LWlmPVwiZmFpbHVyZVJlYXNvblRleHRcIj5cbiAgICAgIDx0b29sdGlwIHYtaWY9XCJpbmplY3Rpb25TY29wZXNbMF0gJiYgIW9wdGlvbnMuaXNBcHBsaWVkXCJcbiAgICAgICAgICAgIDpjb250ZW50PVwiaTE4bignbGFiZWxBdXRvUmVsb2FkQ3VycmVudFRhYkRpc2FibGVkJylcIlxuICAgICAgICAgICAgY2xhc3M9XCJyZWxvYWQtaGludFwiIGFsaWduPVwic3RhcnRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cbiAgICAgICAgPGljb24gbmFtZT1cImluZm9cIi8+XG4gICAgICA8L3Rvb2x0aXA+XG4gICAgICA8c3BhbiB2LXRleHQ9XCJmYWlsdXJlUmVhc29uVGV4dFwiLz5cbiAgICAgIDxjb2RlIHYtdGV4dD1cInN0b3JlLmJsYWNrbGlzdGVkXCIgdi1pZj1cInN0b3JlLmJsYWNrbGlzdGVkXCIgY2xhc3M9XCJlbGxpcHNpcyBpbmxpbmUtYmxvY2tcIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgdi1mb3I9XCJzY29wZSBpbiBpbmplY3Rpb25TY29wZXNcIlxuICAgICAgY2xhc3M9XCJtZW51IG1lbnUtc2NyaXB0c1wiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgIGV4cGFuZDogYWN0aXZlTWVudSA9PT0gc2NvcGUubmFtZSxcbiAgICAgICAgJ2Jsb2NrLXNjcm9sbCc6IGFjdGl2ZUV4dHJhcyxcbiAgICAgIH1cIlxuICAgICAgOmRhdGEtdHlwZT1cInNjb3BlLm5hbWVcIlxuICAgICAgOmtleT1cInNjb3BlLm5hbWVcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJtZW51LWl0ZW0gbWVudS1hcmVhIG1lbnUtZ3JvdXBcIlxuICAgICAgICA6dGFiSW5kZXg9XCJ0YWJJbmRleFwiXG4gICAgICAgIEBjbGljaz1cInRvZ2dsZU1lbnUoc2NvcGUubmFtZSlcIj5cbiAgICAgICAgPGljb24gbmFtZT1cImFycm93XCIgY2xhc3M9XCJpY29uLWNvbGxhcHNlXCI+PC9pY29uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1hdXRvXCIgdi10ZXh0PVwic2NvcGUudGl0bGVcIiA6ZGF0YS10b3RhbHM9XCJzY29wZS50b3RhbHNcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3VibWVudVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHNjb3BlLmxpc3RcIlxuICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgZGlzYWJsZWQ6ICFpdGVtLmRhdGEuY29uZmlnLmVuYWJsZWQsXG4gICAgICAgICAgICBmYWlsZWQ6IGl0ZW0uZGF0YS5mYWlsZWQsXG4gICAgICAgICAgICByZW1vdmVkOiBpdGVtLmRhdGEuY29uZmlnLnJlbW92ZWQsXG4gICAgICAgICAgICBydW5zOiBpdGVtLmRhdGEucnVucyxcbiAgICAgICAgICAgICdleHRyYXMtc2hvd24nOiBhY3RpdmVFeHRyYXMgPT09IGl0ZW0sXG4gICAgICAgICAgICAnZXhjbHVkZXMtc2hvd24nOiBpdGVtLmV4Y2x1ZGVzVmFsdWUsXG4gICAgICAgICAgfVwiXG4gICAgICAgICAgY2xhc3M9XCJzY3JpcHRcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cIm1lbnUtaXRlbSBtZW51LWFyZWFcIlxuICAgICAgICAgICAgOnRhYkluZGV4PVwidGFiSW5kZXhcIlxuICAgICAgICAgICAgOmRhdGEtbWVzc2FnZT1cIml0ZW0ubmFtZVwiXG4gICAgICAgICAgICBAZm9jdXM9XCJmb2N1c2VkSXRlbSA9IGl0ZW1cIlxuICAgICAgICAgICAgQGtleWRvd24uZW50ZXIuZXhhY3Quc3RvcD1cIm9uRWRpdFNjcmlwdChpdGVtKVwiXG4gICAgICAgICAgICBAa2V5ZG93bi5zcGFjZS5leGFjdC5zdG9wPVwib25Ub2dnbGVTY3JpcHQoaXRlbSlcIlxuICAgICAgICAgICAgQGNsaWNrPVwib25Ub2dnbGVTY3JpcHQoaXRlbSlcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJzY3JpcHQtaWNvblwiIDpzcmM9XCJpdGVtLmRhdGEuc2FmZUljb25cIj5cbiAgICAgICAgICAgIDxpY29uIDpuYW1lPVwiZ2V0U3ltYm9sQ2hlY2soaXRlbS5kYXRhLmNvbmZpZy5lbmFibGVkKVwiPjwvaWNvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY3JpcHQtbmFtZSBmbGV4LWF1dG8gZWxsaXBzaXNcIiB2LXRleHQ9XCJpdGVtLm5hbWVcIlxuICAgICAgICAgICAgICAgICBAY2xpY2suY3RybC5leGFjdC5zdG9wPVwib25FZGl0U2NyaXB0KGl0ZW0pXCJcbiAgICAgICAgICAgICAgICAgQGNvbnRleHRtZW51LmV4YWN0LnN0b3A9XCJvbkVkaXRTY3JpcHQoaXRlbSlcIlxuICAgICAgICAgICAgICAgICBAbW91c2Vkb3duLm1pZGRsZS5leGFjdC5zdG9wPVwib25FZGl0U2NyaXB0KGl0ZW0pXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tICFpdGVtLmRhdGEuY3VzdG9tLmJ1aWxkSW4gJiYgLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1lbnUtYnV0dG9uc1wiIHYtc2hvdz1cIihJU19ERVYgfHwgIWl0ZW0uZGF0YS5jdXN0b20uYnVpbGRJbilcbiAgICAgICAgICAgICAmJiAoYWN0aXZlRXh0cmFzID09PSBpdGVtIHx8IGZvY3VzZWRJdGVtID09PSBpdGVtKVwiPlxuICAgICAgICAgICAgPCEtLSBVc2luZyBhIHN0YW5kYXJkIHRvb2x0aXAgdGhhdCdzIHNob3duIGFmdGVyIGEgZGVsYXkgdG8gYXZvaWQgbmFnZ2luZyB0aGUgdXNlciAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtZW51LWJ1dHRvblwiIDp0YWJJbmRleD1cInRhYkluZGV4XCIgQGNsaWNrPVwib25FZGl0U2NyaXB0KGl0ZW0pXCJcbiAgICAgICAgICAgICAgICAgOnRpdGxlPVwiaTE4bignYnV0dG9uRWRpdENsaWNrSGludCcpXCI+XG4gICAgICAgICAgICAgIDxpY29uIG5hbWU9XCJjb2RlXCI+PC9pY29uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwic3VibWVudS1idXR0b25cIlxuICAgICAgICAgICAgICA6dGFiSW5kZXg9XCJ0YWJJbmRleFwiXG4gICAgICAgICAgICAgIEBjbGljay5zdG9wPVwidG9nZ2xlRXh0cmFzKGl0ZW0sICRldmVudClcIj5cbiAgICAgICAgICAgICAgPGljb24gbmFtZT1cIm1vcmVcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHYtaWY9XCJpdGVtLmV4Y2x1ZGVzVmFsdWUgIT0gbnVsbFwiIGNsYXNzPVwiZXhjbHVkZXMtbWVudSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cIml0ZW0uZXhjbHVkZXNWYWx1ZVwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdi10ZXh0PVwiaTE4bignYnV0dG9uT0snKVwiIEBjbGljaz1cIm9uRXhjbHVkZVNhdmUoaXRlbSlcIi8+XG4gICAgICAgICAgICAgIDxidXR0b24gdi10ZXh0PVwiaTE4bignYnV0dG9uQ2FuY2VsJylcIiBAY2xpY2s9XCJvbkV4Y2x1ZGVDbG9zZShpdGVtKVwiLz5cbiAgICAgICAgICAgICAgPCEtLSBub3QgdXNpbmcgdG9vbHRpcCB0byBwcmVzZXJ2ZSBsaW5lIGJyZWFrcyAtLT5cbiAgICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgICAgPHN1bW1hcnk+PGljb24gbmFtZT1cImluZm9cIi8+PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHYtdGV4dD1cImkxOG4oJ21lbnVFeGNsdWRlSGludCcpXCIvPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibW9ub3NwYWNlLWZvbnQgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+aHR0cHM6Ly93d3cuZm9vLmNvbS9wYXRoLypiYXIqPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPio6Ly93d3cuZm9vLmNvbS8qPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPio6Ly8qLmZvby5jb20vKjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtZW51LWNvbW1hbmRzXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwibWVudS1pdGVtIG1lbnUtYXJlYVwiXG4gICAgICAgICAgICAgIHYtZm9yPVwiKGNhcCwgaSkgaW4gc3RvcmUuY29tbWFuZHNbaXRlbS5kYXRhLnByb3BzLmlkXVwiXG4gICAgICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgOnRhYkluZGV4PVwidGFiSW5kZXhcIlxuICAgICAgICAgICAgICA6Q01ELnByb3A9XCJ7IGlkOiBpdGVtLmRhdGEucHJvcHMuaWQsIGNhcCB9XCJcbiAgICAgICAgICAgICAgOmRhdGEtbWVzc2FnZT1cImNhcFwiXG4gICAgICAgICAgICAgIEBtb3VzZWRvd249XCJvbkNvbW1hbmRcIlxuICAgICAgICAgICAgICBAbW91c2V1cD1cIm9uQ29tbWFuZFwiXG4gICAgICAgICAgICAgIEBrZXlkb3duLmVudGVyPVwib25Db21tYW5kXCJcbiAgICAgICAgICAgICAgQGtleWRvd24uc3BhY2U9XCJvbkNvbW1hbmRcIj5cbiAgICAgICAgICAgICAgPGljb24gbmFtZT1cImNvbW1hbmRcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1hdXRvIGVsbGlwc2lzXCIgdi10ZXh0PVwiY2FwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmYWlsdXJlLXJlYXNvblwiIHYtaWY9XCJzdG9yZS5pbmplY3Rpb25GYWlsdXJlXCI+XG4gICAgICA8ZGl2IHYtdGV4dD1cImkxOG4oJ21lbnVJbmplY3Rpb25GYWlsZWQnKVwiLz5cbiAgICAgIDxhIHYtdGV4dD1cImkxOG4oJ21lbnVJbmplY3Rpb25GYWlsZWRGaXgnKVwiIGhyZWY9XCIjXCJcbiAgICAgICAgIHYtaWY9XCJzdG9yZS5pbmplY3Rpb25GYWlsdXJlLmZpeGFibGVcIlxuICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJvbkluamVjdGlvbkZhaWx1cmVGaXhcIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluY29nbml0b1wiXG4gICAgICAgdi1pZj1cInN0b3JlLmN1cnJlbnRUYWIgJiYgc3RvcmUuY3VycmVudFRhYi5pbmNvZ25pdG9cIlxuICAgICAgIHYtdGV4dD1cImkxOG4oJ21zZ0luY29nbml0b0NoYW5nZXMnKVwiLz5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWlyYXYuY24vXCIgOnRhYkluZGV4PVwidGFiSW5kZXhcIiBAY2xpY2sucHJldmVudD1cIm9uVmlzaXRXZWJzaXRlXCIgdi10ZXh0PVwiaTE4bigndmlzaXRXZWJzaXRlJylcIiAvPlxuICAgIDwvZm9vdGVyPlxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCIgdi1zaG93PVwibWVzc2FnZVwiPlxuICAgICAgPGRpdiB2LXRleHQ9XCJtZXNzYWdlXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LWlmPVwiYWN0aXZlRXh0cmFzXCIgY2xhc3M9XCJleHRyYXMtbWVudVwiIHJlZj1cImV4dHJhc01lbnVcIj5cbiAgICAgIDxhIHYtaWY9XCJhY3RpdmVFeHRyYXMuaG9tZVwiIHRhYmluZGV4PVwiMFwiIDpocmVmPVwiYWN0aXZlRXh0cmFzLmhvbWVcIiB2LXRleHQ9XCJpMThuKCdidXR0b25Ib21lJylcIlxuICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgIDxkaXYgdi10ZXh0PVwiaTE4bignbWVudUV4Y2x1ZGUnKVwiIHRhYmluZGV4PVwiMFwiIEBjbGljaz1cIm9uRXhjbHVkZVwiLz5cbiAgICAgIDxkaXYgdi10ZXh0PVwiYWN0aXZlRXh0cmFzLmRhdGEuY29uZmlnLnJlbW92ZWQgPyBpMThuKCdidXR0b25SZXN0b3JlJykgOiBpMThuKCdidXR0b25SZW1vdmUnKVwiXG4gICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgIEBjbGljaz1cIm9uUmVtb3ZlU2NyaXB0KGFjdGl2ZUV4dHJhcylcIi8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBUb29sdGlwIGZyb20gJ3Z1ZWxldG9uL2xpYi90b29sdGlwL2J1bmRsZSc7XG5pbXBvcnQgeyBJTkpFQ1RfQVVUTywgSVNfREVWIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcbmltcG9ydCBvcHRpb25zIGZyb20gJyMvY29tbW9uL29wdGlvbnMnO1xuaW1wb3J0IHsgZ2V0U2NyaXB0TmFtZSwgaTE4biwgbWFrZVBhdXNlLCBzZW5kQ21kLCBzZW5kVGFiQ21kIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgb2JqZWN0UGljayB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgeyBhdXRvZml0RWxlbWVudHNIZWlnaHQgfSBmcm9tICcjL2NvbW1vbi91aSc7XG5pbXBvcnQgSWNvbiBmcm9tICcjL2NvbW1vbi91aS9pY29uJztcbmltcG9ydCB7IGtleWJvYXJkU2VydmljZSwgaXNJbnB1dCB9IGZyb20gJyMvY29tbW9uL2tleWJvYXJkJztcbmltcG9ydCB7IG11dGV4LCBzdG9yZSB9IGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgbWFuaWZlc3QgPSBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKTtcbmNvbnN0IE5BTUUgPSBgJHttYW5pZmVzdC5uYW1lfSAke21hbmlmZXN0LnZlcnNpb259YDtcbmNvbnN0IFNDUklQVF9DTFMgPSAnLnNjcmlwdCc7XG5sZXQgbW91c2Vkb3duRWxlbWVudDtcblxuY29uc3Qgb3B0aW9uc0RhdGEgPSB7XG4gIGlzQXBwbGllZDogb3B0aW9ucy5nZXQoJ2lzQXBwbGllZCcpLFxuICBmaWx0ZXJzUG9wdXA6IG9wdGlvbnMuZ2V0KCdmaWx0ZXJzUG9wdXAnKSB8fCB7fSxcbn07XG5vcHRpb25zLmhvb2soKGNoYW5nZXMpID0+IHtcbiAgaWYgKCdpc0FwcGxpZWQnIGluIGNoYW5nZXMpIHtcbiAgICBvcHRpb25zRGF0YS5pc0FwcGxpZWQgPSBjaGFuZ2VzLmlzQXBwbGllZDtcbiAgfVxuICBpZiAoJ2ZpbHRlcnNQb3B1cCcgaW4gY2hhbmdlcykge1xuICAgIG9wdGlvbnNEYXRhLmZpbHRlcnNQb3B1cCA9IHtcbiAgICAgIC4uLm9wdGlvbnNEYXRhLmZpbHRlcnNQb3B1cCxcbiAgICAgIC4uLmNoYW5nZXMuZmlsdGVyc1BvcHVwLFxuICAgIH07XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjb21wYXJlQnkoLi4ua2V5cykge1xuICByZXR1cm4gKGEsIGIpID0+IHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICBjb25zdCBrYSA9IGtleShhKTtcbiAgICAgIGNvbnN0IGtiID0ga2V5KGIpO1xuICAgICAgaWYgKGthIDwga2IpIHJldHVybiAtMTtcbiAgICAgIGlmIChrYSA+IGtiKSByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIEljb24sXG4gICAgVG9vbHRpcCxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgSVNfREVWLFxuICAgICAgc3RvcmUsXG4gICAgICBvcHRpb25zOiBvcHRpb25zRGF0YSxcbiAgICAgIGFjdGl2ZU1lbnU6ICdzY3JpcHRzJyxcbiAgICAgIGFjdGl2ZUV4dHJhczogbnVsbCxcbiAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICBmb2N1c2VkSXRlbTogbnVsbCxcbiAgICAgIG5hbWU6IE5BTUUsXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpbmplY3Rpb25TY29wZXMoKSB7XG4gICAgICBjb25zdCB7IHNvcnQsIGVuYWJsZWRGaXJzdCwgaGlkZURpc2FibGVkIH0gPSB0aGlzLm9wdGlvbnMuZmlsdGVyc1BvcHVwO1xuICAgICAgY29uc3QgaXNTb3J0ZWQgPSBzb3J0ID09PSAnYWxwaGEnIHx8IGVuYWJsZWRGaXJzdDtcbiAgICAgIGNvbnN0IHsgaW5qZWN0YWJsZSB9ID0gc3RvcmU7XG4gICAgICBjb25zdCBncm91cERpc2FibGVkID0gaGlkZURpc2FibGVkID09PSAnZ3JvdXAnO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaW5qZWN0YWJsZSAmJiBbJ3NjcmlwdHMnLCBpMThuKCdtZW51TWF0Y2hlZFNjcmlwdHMnKSwgZ3JvdXBEaXNhYmxlZCB8fCBudWxsXSxcbiAgICAgICAgaW5qZWN0YWJsZSAmJiBncm91cERpc2FibGVkICYmIFsnZGlzYWJsZWQnLCBpMThuKCdtZW51TWF0Y2hlZERpc2FibGVkU2NyaXB0cycpLCBmYWxzZV0sXG4gICAgICAgIFsnZnJhbWVTY3JpcHRzJywgaTE4bignbWVudU1hdGNoZWRGcmFtZVNjcmlwdHMnKV0sXG4gICAgICBdXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAubWFwKChbbmFtZSwgdGl0bGUsIGdyb3VwQnlFbmFibGVkXSkgPT4ge1xuICAgICAgICBsZXQgbGlzdCA9IHN0b3JlW25hbWVdIHx8IHN0b3JlLnNjcmlwdHM7XG4gICAgICAgIGlmIChncm91cEJ5RW5hYmxlZCAhPSBudWxsKSB7XG4gICAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKHNjcmlwdCA9PiAhc2NyaXB0LmNvbmZpZy5lbmFibGVkID09PSAhZ3JvdXBCeUVuYWJsZWQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG51bVRvdGFsID0gbGlzdC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG51bUVuYWJsZWQgPSBncm91cEJ5RW5hYmxlZCA9PSBudWxsXG4gICAgICAgICAgPyBsaXN0LnJlZHVjZSgobnVtLCBzY3JpcHQpID0+IG51bSArIHNjcmlwdC5jb25maWcuZW5hYmxlZCwgMClcbiAgICAgICAgICA6IG51bVRvdGFsO1xuICAgICAgICBpZiAoaGlkZURpc2FibGVkID09PSAnaGlkZScgfHwgaGlkZURpc2FibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKHNjcmlwdCA9PiBzY3JpcHQuY29uZmlnLmVuYWJsZWQpO1xuICAgICAgICB9XG4gICAgICAgIGxpc3QgPSBsaXN0Lm1hcCgoc2NyaXB0LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBjb25maWcsIGN1c3RvbSwgbWV0YSB9ID0gc2NyaXB0O1xuICAgICAgICAgIGNvbnN0IHNjcmlwdE5hbWUgPSBnZXRTY3JpcHROYW1lKHNjcmlwdCk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBgJHtuYW1lfS8ke3NjcmlwdC5wcm9wcy5pZH1gLFxuICAgICAgICAgICAgbmFtZTogc2NyaXB0TmFtZSxcbiAgICAgICAgICAgIGRhdGE6IHNjcmlwdCxcbiAgICAgICAgICAgIGhvbWU6IGN1c3RvbS5ob21lcGFnZVVSTCB8fCBtZXRhLmhvbWVwYWdlVVJMIHx8IG1ldGEuaG9tZXBhZ2UsXG4gICAgICAgICAgICBrZXk6IGlzU29ydGVkICYmIGAke1xuICAgICAgICAgICAgICBlbmFibGVkRmlyc3QgJiYgKyFjb25maWcuZW5hYmxlZFxuICAgICAgICAgICAgfSR7XG4gICAgICAgICAgICAgIHNvcnQgPT09ICdhbHBoYScgPyBzY3JpcHROYW1lLnRvTG93ZXJDYXNlKCkgOiBgJHsxZTYgKyBpfWAuc2xpY2UoMSlcbiAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgZXhjbHVkZXNWYWx1ZTogbnVsbCxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzU29ydGVkKSB7XG4gICAgICAgICAgbGlzdC5zb3J0KChhLCBiKSA9PiAoYS5rZXkgPCBiLmtleSA/IC0xIDogYS5rZXkgPiBiLmtleSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1Ub3RhbCAmJiB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBsaXN0LFxuICAgICAgICAgIHRvdGFsczogbnVtRW5hYmxlZCA8IG51bVRvdGFsXG4gICAgICAgICAgICA/IGAke251bUVuYWJsZWR9IC8gJHtudW1Ub3RhbH1gXG4gICAgICAgICAgICA6IGAke251bVRvdGFsfWAsXG4gICAgICAgIH07XG4gICAgICB9KS5maWx0ZXIoQm9vbGVhbik7XG4gICAgfSxcbiAgICBmYWlsdXJlUmVhc29uKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgIXN0b3JlLmluamVjdGFibGUgJiYgJ25vbmluamVjdGFibGUnLFxuICAgICAgICBzdG9yZS5ibGFja2xpc3RlZCAmJiAnYmxhY2tsaXN0ZWQnLFxuICAgICAgICAvLyB1bmRlZmluZWQgbWVhbnMgdGhlIGRhdGEgaXNuJ3QgcmVhZHkgeWV0XG4gICAgICAgIG9wdGlvbnNEYXRhLmlzQXBwbGllZCA9PT0gZmFsc2UgJiYgJ3NjcmlwdHMtZGlzYWJsZWQnLFxuICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICAgIH0sXG4gICAgZmFpbHVyZVJlYXNvblRleHQoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAhc3RvcmUuaW5qZWN0YWJsZSAmJiBpMThuKCdmYWlsdXJlUmVhc29uTm9uaW5qZWN0YWJsZScpXG4gICAgICAgIHx8IHN0b3JlLmJsYWNrbGlzdGVkICYmIGkxOG4oJ2ZhaWx1cmVSZWFzb25CbGFja2xpc3RlZCcpXG4gICAgICAgIHx8IG9wdGlvbnNEYXRhLmlzQXBwbGllZCA9PT0gZmFsc2UgJiYgaTE4bignbWVudVNjcmlwdERpc2FibGVkJylcbiAgICAgICAgfHwgJydcbiAgICAgICk7XG4gICAgfSxcbiAgICBmaW5kVXJscygpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0b3JlLmRvbWFpbik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbYCR7aTE4bignbWVudUZpbmRTY3JpcHRzJyl9IChHRilgXTogYGh0dHBzOi8vZ3JlYXN5Zm9yay5vcmcvc2NyaXB0cy9ieS1zaXRlLyR7cXVlcnl9YCxcbiAgICAgICAgT1VKUzogYGh0dHBzOi8vb3BlbnVzZXJqcy5vcmcvP3E9JHtxdWVyeX1gLFxuICAgICAgfTtcbiAgICB9LFxuICAgIHRhYkluZGV4KCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlRXh0cmFzID8gLTEgOiAwO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVNZW51KG5hbWUpIHtcbiAgICAgIHRoaXMuYWN0aXZlTWVudSA9IHRoaXMuYWN0aXZlTWVudSA9PT0gbmFtZSA/IG51bGwgOiBuYW1lO1xuICAgIH0sXG4gICAgdG9nZ2xlRXh0cmFzKGl0ZW0sIGV2dCkge1xuICAgICAgdGhpcy5hY3RpdmVFeHRyYXMgPSB0aGlzLmFjdGl2ZUV4dHJhcyA9PT0gaXRlbSA/IG51bGwgOiBpdGVtO1xuICAgICAga2V5Ym9hcmRTZXJ2aWNlLnNldENvbnRleHQoJ2FjdGl2ZUV4dHJhcycsIHRoaXMuYWN0aXZlRXh0cmFzKTtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUV4dHJhcykge1xuICAgICAgICBpdGVtLmVsID0gZXZ0LnRhcmdldC5jbG9zZXN0KFNDUklQVF9DTFMpO1xuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBleHRyYXNNZW51IH0gPSB0aGlzLiRyZWZzO1xuICAgICAgICAgIGV4dHJhc01lbnUuc3R5bGUudG9wID0gYCR7XG4gICAgICAgICAgICBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQgLSBleHRyYXNNZW51LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxcbiAgICAgICAgICAgICAgKGV2dC5jdXJyZW50VGFyZ2V0IHx8IGV2dC50YXJnZXQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIDE2KVxuICAgICAgICAgIH1weGA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0U3ltYm9sQ2hlY2soYm9vbCkge1xuICAgICAgcmV0dXJuIGB0b2dnbGUtJHtib29sID8gJ29uJyA6ICdvZmYnfWA7XG4gICAgfSxcbiAgICBvblRvZ2dsZSgpIHtcbiAgICAgIG9wdGlvbnMuc2V0KCdpc0FwcGxpZWQnLCBvcHRpb25zRGF0YS5pc0FwcGxpZWQgPSAhb3B0aW9uc0RhdGEuaXNBcHBsaWVkKTtcbiAgICAgIHRoaXMuY2hlY2tSZWxvYWQoKTtcbiAgICB9LFxuICAgIG9uTWFuYWdlKCkge1xuICAgICAgYnJvd3Nlci5ydW50aW1lLm9wZW5PcHRpb25zUGFnZSgpO1xuICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgfSxcbiAgICBvblZpc2l0V2Vic2l0ZSgpIHtcbiAgICAgIHNlbmRDbWQoJ1RhYk9wZW4nLCB7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vdmlvbGVudG1vbmtleS5naXRodWIuaW8vJyxcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgfSxcbiAgICBvbkVkaXRTY3JpcHQoaXRlbSkge1xuICAgICAgaWYgKCFJU19ERVYgJiYgaXRlbS5kYXRhLmN1c3RvbS5idWlsZEluKSByZXR1cm47XG4gICAgICBzZW5kQ21kKCdPcGVuRWRpdG9yJywgaXRlbS5kYXRhLnByb3BzLmlkKTtcbiAgICAgIHdpbmRvdy5jbG9zZSgpO1xuICAgIH0sXG4gICAgb25Db21tYW5kKGV2dCkge1xuICAgICAgY29uc3QgeyB0eXBlLCBjdXJyZW50VGFyZ2V0OiBlbCB9ID0gZXZ0O1xuICAgICAgaWYgKHR5cGUgPT09ICdtb3VzZWRvd24nKSB7XG4gICAgICAgIG1vdXNlZG93bkVsZW1lbnQgPSBlbDtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdrZXlkb3duJyB8fCBtb3VzZWRvd25FbGVtZW50ID09PSBlbCkge1xuICAgICAgICBzZW5kVGFiQ21kKHN0b3JlLmN1cnJlbnRUYWIuaWQsICdDb21tYW5kJywge1xuICAgICAgICAgIC4uLmVsLkNNRCxcbiAgICAgICAgICBldnQ6IG9iamVjdFBpY2soZXZ0LCBbJ3R5cGUnLCAnYnV0dG9uJywgJ3NoaWZ0S2V5JywgJ2FsdEtleScsICdjdHJsS2V5JywgJ21ldGFLZXknLFxuICAgICAgICAgICAgJ2tleScsICdrZXlDb2RlJywgJ2NvZGUnXSksXG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uVG9nZ2xlU2NyaXB0KGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLmRhdGEuY3VzdG9tLmJ1aWxkSW4pIHJldHVybjtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gaXRlbTtcbiAgICAgIGNvbnN0IGVuYWJsZWQgPSAhZGF0YS5jb25maWcuZW5hYmxlZDtcbiAgICAgIHNlbmRDbWQoJ1VwZGF0ZVNjcmlwdEluZm8nLCB7XG4gICAgICAgIGlkOiBkYXRhLnByb3BzLmlkLFxuICAgICAgICBjb25maWc6IHsgZW5hYmxlZCB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZGF0YS5jb25maWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgICAgIHRoaXMuY2hlY2tSZWxvYWQoKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2hlY2tSZWxvYWQoKSB7XG4gICAgICBpZiAob3B0aW9ucy5nZXQoJ2F1dG9SZWxvYWQnKSkge1xuICAgICAgICBicm93c2VyLnRhYnMucmVsb2FkKHN0b3JlLmN1cnJlbnRUYWIuaWQpO1xuICAgICAgICBzdG9yZS5zY3JpcHRJZHMubGVuZ3RoID0gMDtcbiAgICAgICAgc3RvcmUuc2NyaXB0cy5sZW5ndGggPSAwO1xuICAgICAgICBzdG9yZS5mcmFtZVNjcmlwdHMubGVuZ3RoID0gMDtcbiAgICAgICAgbXV0ZXguaW5pdCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgb25DcmVhdGVTY3JpcHQoKSB7XG4gICAgICBzZW5kQ21kKCdPcGVuRWRpdG9yJyk7XG4gICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICB9LFxuICAgIGFzeW5jIG9uSW5qZWN0aW9uRmFpbHVyZUZpeCgpIHtcbiAgICAgIC8vIFRPRE86IHByb21pc2lmeSBvcHRpb25zLnNldCwgcmVzb2x2ZSBvbiBzdG9yYWdlIHdyaXRlLCBhd2FpdCBpdCBpbnN0ZWFkIG9mIG1ha2VQYXVzZVxuICAgICAgb3B0aW9ucy5zZXQoJ2RlZmF1bHRJbmplY3RJbnRvJywgSU5KRUNUX0FVVE8pO1xuICAgICAgYXdhaXQgbWFrZVBhdXNlKDEwMCk7XG4gICAgICBhd2FpdCBicm93c2VyLnRhYnMucmVsb2FkKCk7XG4gICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICB9LFxuICAgIG9uUmVtb3ZlU2NyaXB0KHsgZGF0YTogeyBjb25maWcsIHByb3BzOiB7IGlkIH0gfSB9KSB7XG4gICAgICBjb25zdCByZW1vdmVkID0gKyFjb25maWcucmVtb3ZlZDtcbiAgICAgIGNvbmZpZy5yZW1vdmVkID0gcmVtb3ZlZDtcbiAgICAgIHNlbmRDbWQoJ01hcmtSZW1vdmVkJywgeyBpZCwgcmVtb3ZlZCB9KTtcbiAgICB9LFxuICAgIG9uRXhjbHVkZSgpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmFjdGl2ZUV4dHJhcztcbiAgICAgIGl0ZW0uZXhjbHVkZXNWYWx1ZSA9IFtcbiAgICAgICAgLi4uaXRlbS5kYXRhLmN1c3RvbS5leGNsdWRlTWF0Y2ggfHwgW10sXG4gICAgICAgIGAke3N0b3JlLmN1cnJlbnRUYWIudXJsLnNwbGl0KCcjJylbMF19KmAsXG4gICAgICBdLmpvaW4oJ1xcbicpO1xuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAvLyBub3QgdXNpbmcgJHJlZnMgYmVjYXVzZSBtdWx0aXBsZSBpdGVtcyBtYXkgc2hvdyB0ZXh0YXJlYXNcbiAgICAgICAgY29uc3QgYXJlYSA9IGl0ZW0uZWwucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICAgICAgYXV0b2ZpdEVsZW1lbnRzSGVpZ2h0KFthcmVhXSk7XG4gICAgICAgIGFyZWEuZm9jdXMoKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb25FeGNsdWRlQ2xvc2UoaXRlbSkge1xuICAgICAgaXRlbS5leGNsdWRlc1ZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMuZm9jdXMoaXRlbSk7XG4gICAgfSxcbiAgICBhc3luYyBvbkV4Y2x1ZGVTYXZlKGl0ZW0pIHtcbiAgICAgIGF3YWl0IHNlbmRDbWQoJ1VwZGF0ZVNjcmlwdEluZm8nLCB7XG4gICAgICAgIGlkOiBpdGVtLmRhdGEucHJvcHMuaWQsXG4gICAgICAgIGN1c3RvbToge1xuICAgICAgICAgIGV4Y2x1ZGVNYXRjaDogaXRlbS5leGNsdWRlc1ZhbHVlLnNwbGl0KCdcXG4nKS5tYXAobGluZSA9PiBsaW5lLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uRXhjbHVkZUNsb3NlKGl0ZW0pO1xuICAgICAgdGhpcy5jaGVja1JlbG9hZCgpO1xuICAgIH0sXG4gICAgbmF2aWdhdGUoZGlyKSB7XG4gICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleD1cIjBcIl0nKSlcbiAgICAgIC5tYXAoZWwgPT4gKHtcbiAgICAgICAgZWwsXG4gICAgICAgIHJlY3Q6IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgfSkpXG4gICAgICAuZmlsdGVyKCh7IHJlY3QgfSkgPT4gcmVjdC53aWR0aCAmJiByZWN0LmhlaWdodCk7XG4gICAgICBpdGVtcy5zb3J0KGNvbXBhcmVCeShpdGVtID0+IGl0ZW0ucmVjdC50b3AsIGl0ZW0gPT4gaXRlbS5yZWN0LmxlZnQpKTtcbiAgICAgIGxldCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoeyBlbCB9KSA9PiBlbCA9PT0gYWN0aXZlRWxlbWVudCk7XG4gICAgICBjb25zdCBmaW5kSXRlbUluZGV4ID0gKHN0ZXAsIHRlc3QpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4ICsgc3RlcDsgaSA+PSAwICYmIGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gc3RlcCkge1xuICAgICAgICAgIGlmICh0ZXN0KGl0ZW1zW2luZGV4XSwgaXRlbXNbaV0pKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgICAgfSBlbHNlIGlmIChkaXIgPT09ICd1JyB8fCBkaXIgPT09ICdkJykge1xuICAgICAgICBjb25zdCBzdGVwID0gZGlyID09PSAndScgPyAtMSA6IDE7XG4gICAgICAgIGluZGV4ID0gZmluZEl0ZW1JbmRleChzdGVwLCAoYSwgYikgPT4gKGEucmVjdC50b3AgLSBiLnJlY3QudG9wKSAqIHN0ZXAgPCAwKTtcbiAgICAgICAgaWYgKGRpciA9PT0gJ3UnKSB7XG4gICAgICAgICAgd2hpbGUgKGluZGV4ID4gMCAmJiBpdGVtc1tpbmRleCAtIDFdLnJlY3QudG9wID09PSBpdGVtc1tpbmRleF0ucmVjdC50b3ApIGluZGV4IC09IDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBkaXIgPT09ICdsJyA/IC0xIDogMTtcbiAgICAgICAgaW5kZXggPSBmaW5kSXRlbUluZGV4KHN0ZXAsIChhLCBiKSA9PiAoYS5yZWN0LmxlZnQgLSBiLnJlY3QubGVmdCkgKiBzdGVwIDwgMCk7XG4gICAgICB9XG4gICAgICBpdGVtc1tpbmRleF0/LmVsLmZvY3VzKCk7XG4gICAgfSxcbiAgICBmb2N1cyhpdGVtKSB7XG4gICAgICBpdGVtPy5lbD8ucXVlcnlTZWxlY3RvcignLm1lbnUtYXJlYScpPy5mb2N1cygpO1xuICAgIH0sXG4gICAgZGVsZWdhdGVNb3VzZUVudGVyKGUpIHtcbiAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICAgICAgaWYgKHRhcmdldC50YWJJbmRleCA+PSAwKSB0YXJnZXQuZm9jdXMoKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlTW91c2VMZWF2ZShlKSB7XG4gICAgICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgICAgIGlmICh0YXJnZXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgIWlzSW5wdXQodGFyZ2V0KSkgdGFyZ2V0LmJsdXIoKTtcbiAgICB9LFxuICAgIHVwZGF0ZU1lc3NhZ2UoKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50Py5kYXRhc2V0Lm1lc3NhZ2UgfHwgJyc7XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBrZXlib2FyZFNlcnZpY2UuZW5hYmxlKCk7XG4gICAgdGhpcy5kaXNwb3NlTGlzdCA9IFtcbiAgICAgIGtleWJvYXJkU2VydmljZS5yZWdpc3RlcignZXNjYXBlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5hY3RpdmVFeHRyYXM7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVFeHRyYXMobnVsbCk7XG4gICAgICAgICAgdGhpcy5mb2N1cyhpdGVtKTtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50Py52YWx1ZSkge1xuICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIC4uLlsndXAnLCAnZG93bicsICdsZWZ0JywgJ3JpZ2h0J10ubWFwKGtleSA9PiAoXG4gICAgICAgIGtleWJvYXJkU2VydmljZS5yZWdpc3RlcihrZXksXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0ZS5iaW5kKHRoaXMsIGtleVswXSksXG4gICAgICAgICAgeyBjb25kaXRpb246ICchaW5wdXRGb2N1cycgfSlcbiAgICAgICkpLFxuICAgICAga2V5Ym9hcmRTZXJ2aWNlLnJlZ2lzdGVyKCdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRWRpdFNjcmlwdCh0aGlzLmZvY3VzZWRJdGVtKTtcbiAgICAgIH0sIHtcbiAgICAgICAgY29uZGl0aW9uOiAnIWlucHV0Rm9jdXMnLFxuICAgICAgfSksXG4gICAgXTtcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICBrZXlib2FyZFNlcnZpY2UuZGlzYWJsZSgpO1xuICAgIHRoaXMuZGlzcG9zZUxpc3Q/LmZvckVhY2goZGlzcG9zZSA9PiB7IGRpc3Bvc2UoKTsgfSk7XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzcmM9XCIuLi9zdHlsZS5jc3NcIj48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgLyogTGF0ZXN0IENocm9tZSByZW5kZXJzIGFuIGV4dHJhIGJsYW5rIGZvciBhIG5vbmV4aXN0ZW50IHNjcm9sbGJhciAqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWZpbGwtMC01KTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWxcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSB7XFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlXFxufVxcbn1cXG5hLFxcbiAgYTpmb2N1cyB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4ucGFnZS1wb3B1cCB7XFxuICAvKiBoYXJkY29kZWQgcG9wdXAgaGVpZ2h0IGluIENocm9tZSAqL1xcbiAgbWF4LWhlaWdodDogNjAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucGFnZS1wb3B1cCAuaW5jb2duaXRvIHtcXG4gICAgcGFkZGluZzogOHB4IDhweCAwIDQ2cHg7XFxufVxcbmZvb3RlciB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS1maWxsLTYpO1xcbn1cXG4ubG9nbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgN3B4O1xcbn1cXG4ubG9nbyBpbWcge1xcbiAgICB3aWR0aDogMzJweDtcXG59XFxuLmxvZ28uZGlzYWJsZWQgPiBpbWcge1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuLm1lbnUtYXJlYSB7XFxuICBjdXJzb3I6IHBvaW50ZXJcXG59XFxuLm1lbnUtYXJlYTpob3ZlcixcXG4gIC5tZW51LWFyZWE6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kOiBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgY29sb3I6IHZhcigtLWJnKVxcbn1cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuLm1lbnUtYXJlYTpob3ZlcixcXG4gIC5tZW51LWFyZWE6Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQ6ICM0MDRjNWM7XFxuICAgICAgY29sb3I6IHZhcigtLWZpbGwtMTUpXFxufVxcbn1cXG4uc2NyaXB0Om5vdCguZGlzYWJsZWQpOm5vdCgucnVucykgLm1lbnUtYXJlYSAuc2NyaXB0LW5hbWUsXFxuICAuZGlzYWJsZWQ6bm90KC5ydW5zKSA+IC5tZW51LWFyZWEge1xcbiAgICBjb2xvcjogdmFyKC0tZmlsbC04KVxcbn1cXG4uc2NyaXB0Om5vdCguZGlzYWJsZWQpOm5vdCgucnVucykgLm1lbnUtYXJlYSAuc2NyaXB0LW5hbWU6aG92ZXIsXFxuICAgIC5zY3JpcHQ6bm90KC5kaXNhYmxlZCk6bm90KC5ydW5zKSAubWVudS1hcmVhIC5zY3JpcHQtbmFtZTpmb2N1cyxcXG4gICAgLmRpc2FibGVkOm5vdCgucnVucykgPiAubWVudS1hcmVhOmhvdmVyLFxcbiAgICAuZGlzYWJsZWQ6bm90KC5ydW5zKSA+IC5tZW51LWFyZWE6Zm9jdXMge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1maWxsLTIpO1xcbn1cXG4uZXh0LW5hbWUuZGlzYWJsZWQge1xcbiAgICBjb2xvcjogdmFyKC0tZmlsbC04KTtcXG59XFxuLnNjcmlwdC1pY29uOm5vdChbc3JjXSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2NyaXB0LWljb24ge1xcbiAgbWF4LXdpZHRoOiAxOHB4O1xcbiAgbWF4LWhlaWdodDogMThweDtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGVcXG59XFxuLnNjcmlwdC1pY29uICsgLmljb24ge1xcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4ubWVudS1idXR0b25zIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbn1cXG4ubWVudS1idXR0b25zID4gLm1lbnUtYXJlYSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuLm1lbnUtYnV0dG9ucyAuaWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4ubWVudSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZylcXG59XFxuLm1lbnUsIC5tZW51Om5vdCguZXhwYW5kKSArIGZvb3RlciB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1maWxsLTQpO1xcbn1cXG4ubWVudS1pdGVtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5zdWJtZW51IC5tZW51LWl0ZW0ge1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5tZW51LWl0ZW0gLmljb24ge1xcbiAgICAgIGZsZXg6IDAgMCAxNHB4XFxufVxcbi5tZW51LWl0ZW0gLmljb24uaWNvbi1jb2xsYXBzZSB7XFxuICAgICAgICBmbGV4OiAwIDAgMTZweDtcXG4gICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xcbn1cXG4ubWVudS1pdGVtID4gLmljb246Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLm1lbnUtaXRlbSA+IC5mbGV4LWF1dG8ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyXFxufVxcbi5tZW51LWl0ZW0gPiAuZmxleC1hdXRvOmxhc3QtY2hpbGQge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTRweDtcXG59XFxuLm1lbnUtaXRlbSA+IC5mbGV4LTEge1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcbi5mYWlsZWQgLm1lbnUtaXRlbSB7XFxuICAgICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCByZWQ7XFxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCByZWQ7XFxufVxcbi5yZW1vdmVkIC5tZW51LWl0ZW0ge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4ubWVudS1maW5kIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5tZW51LWZpbmQgYSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcbi5tZW51LWZpbmQgLmljb24ge1xcbiAgICAgIGZsZXgtYmFzaXM6IDE2cHg7XFxuICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgIG1hcmdpbjogMCAxMHB4IDAgMjBweDtcXG59XFxuLm1lbnUtZ3JvdXAge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGNvbG9yOiAjNGE3NzkyXFxufVxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4ubWVudS1ncm91cCB7XFxuICAgICAgY29sb3I6ICNlZWVcXG59XFxufVxcbi5tZW51LWdyb3VwIFtkYXRhLXRvdGFsc106OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiOiBcXFwiIGF0dHIoZGF0YS10b3RhbHMpO1xcbn1cXG4ubWVudS5leHBhbmQge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1maWxsLTEpO1xcbn1cXG4ubWVudS5leHBhbmQgPiAuc3VibWVudSB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWxsLTQpO1xcbn1cXG4ubWVudS5leHBhbmQgLmljb24tY29sbGFwc2Uge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7XFxufVxcbi5zdWJtZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtaW4taGVpZ2h0OiA0cmVtO1xcbiAgbWF4LWhlaWdodDogMzByZW07XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCB2YXIoLS1maWxsLTMpO1xcbn1cXG4uc3VibWVudSA+ICoge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zdWJtZW51ID4gKiAubWVudS1pdGVtIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcbi5zdWJtZW51LWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxufVxcbi5zdWJtZW51LWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XFxuICAgIGN1cnNvcjogcG9pbnRlclxcbn1cXG4uc3VibWVudS1idXR0b246Zm9jdXMge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1iZyk7XFxuICAgICAgYmFja2dyb3VuZDogY29ybmZsb3dlcmJsdWU7XFxufVxcbi5tZW51LWl0ZW06aG92ZXIgKyAuc3VibWVudS1idXR0b25zIC5zdWJtZW51LWJ1dHRvbjpub3QoOmZvY3VzKSB7XFxuICAgICAgYmFja2dyb3VuZDogI2EwYzFmZFxcbn1cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuLm1lbnUtaXRlbTpob3ZlciArIC5zdWJtZW51LWJ1dHRvbnMgLnN1Ym1lbnUtYnV0dG9uOm5vdCg6Zm9jdXMpIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICM1YjY5NzlcXG59XFxufVxcbi5zdWJtZW51LWJ1dHRvbiAuaWNvbiB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5zdWJtZW51LWNvbW1hbmRzIHtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgY29sb3I6IHZhcigtLWZpbGwtMTIpO1xcbn1cXG4uc3VibWVudS1jb21tYW5kcyA+IC5tZW51LWl0ZW0ge1xcbiAgICAgIHBhZGRpbmctbGVmdDogNDZweDtcXG59XFxuLnN1Ym1lbnUtY29tbWFuZHMgPiAubWVudS1pdGVtID4gLmljb24ge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcXG59XFxuLm1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMS4yOyAvKiBsb3dlciB2YWx1ZXMgY3V0IGRlc2NlbmRlciBpbiBcXFwiZ1xcXCIgKi9cXG4gIGJhY2tncm91bmQ6IHZhcigtLWZpbGwtMC01KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZpbGwtMik7XFxufVxcbi5tZXNzYWdlID4gZGl2IHtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmZhaWx1cmUtcmVhc29uIHtcXG4gIHBhZGRpbmc6IC43NXJlbSAxNHB4IC43NXJlbSA0NnB4O1xcbn1cXG4uZmFpbHVyZS1yZWFzb24gY29kZSB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuLnJlbG9hZC1oaW50IC5pY29uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyMHB4O1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbn1cXG4uZXh0cmFzLW1lbnUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjUzMzMzKTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1mZyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWxsLTYpXFxufVxcbi5leHRyYXMtbWVudSA+ICoge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXFxufVxcbi5leHRyYXMtbWVudSA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICAgIHBhZGRpbmctdG9wOiAuNzVyZW07XFxufVxcbi5leHRyYXMtbWVudSA+ICo6bGFzdC1jaGlsZCB7XFxuICAgICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcXG59XFxuLmV4dHJhcy1tZW51ID4gKjpmb2N1cyB7XFxuICAgICAgY29sb3I6IHZhcigtLWJnKTtcXG4gICAgICBiYWNrZ3JvdW5kOiBjb3JuZmxvd2VyYmx1ZTtcXG59XFxuLmV4Y2x1ZGVzLW1lbnUge1xcbiAgcGFkZGluZzogLjI1cmVtIC41cmVtIC4yNXJlbSA0NnB4O1xcbn1cXG4uZXhjbHVkZXMtbWVudSBidXR0b24ge1xcbiAgICBtYXJnaW46IC41cmVtIC41cmVtIDAgMDtcXG59XFxuLmV4Y2x1ZGVzLW1lbnUgZGV0YWlscyBzdW1tYXJ5IHtcXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi5leGNsdWRlcy1tZW51IGRldGFpbHNbb3Blbl0ge1xcbiAgICAgIHBhZGRpbmctdG9wOiAuMjVyZW07XFxufVxcbi5leGNsdWRlcy1tZW51IGRldGFpbHNbb3Blbl0gc3VtbWFyeSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAxOHB4O1xcbn1cXG4uZXhjbHVkZXMtbWVudSBkZXRhaWxzOm5vdChbb3Blbl0pIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5leGNsdWRlcy1tZW51IC5pY29uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4uZXh0cmFzLXNob3duIC5zY3JpcHQtbmFtZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmJsb2NrLXNjcm9sbCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtcG9wdXBcIixcbiAgICAgIGF0dHJzOiB7IFwiZGF0YS1mYWlsdXJlLXJlYXNvblwiOiBfdm0uZmFpbHVyZVJlYXNvbiB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5hY3RpdmVFeHRyYXMgJiYgX3ZtLnRvZ2dsZUV4dHJhcyhudWxsKVxuICAgICAgICB9LFxuICAgICAgICBjb250ZXh0bWVudTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmFjdGl2ZUV4dHJhcyAmJiAoX3ZtLnRvZ2dsZUV4dHJhcyhudWxsKSwgJGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgICAgIH0sXG4gICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF92bS5kZWxlZ2F0ZU1vdXNlRW50ZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICB9LFxuICAgICAgICBcIiFtb3VzZWxlYXZlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdm0uZGVsZWdhdGVNb3VzZUxlYXZlLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgfSxcbiAgICAgICAgXCIhZm9jdXNcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVNZXNzYWdlLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IG1lbnUtYnV0dG9uc1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxvZ29cIiwgY2xhc3M6IHsgZGlzYWJsZWQ6ICFfdm0ub3B0aW9ucy5pc0FwcGxpZWQgfSB9LFxuICAgICAgICAgIFtfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvcHVibGljL2ltYWdlcy9pY29uMTI4LnBuZ1wiIH0gfSldXG4gICAgICAgICksXG4gICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4LTEgZXh0LW5hbWVcIixcbiAgICAgICAgICBjbGFzczogeyBkaXNhYmxlZDogIV92bS5vcHRpb25zLmlzQXBwbGllZCB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLm5hbWUpIH1cbiAgICAgICAgfSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnUtYXJlYVwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgZGlzYWJsZWQ6ICFfdm0ub3B0aW9ucy5pc0FwcGxpZWQgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwiZGF0YS1tZXNzYWdlXCI6IF92bS5vcHRpb25zLmlzQXBwbGllZFxuICAgICAgICAgICAgICAgID8gX3ZtLmkxOG4oXCJtZW51U2NyaXB0RW5hYmxlZFwiKVxuICAgICAgICAgICAgICAgIDogX3ZtLmkxOG4oXCJtZW51U2NyaXB0RGlzYWJsZWRcIiksXG4gICAgICAgICAgICAgIHRhYkluZGV4OiBfdm0udGFiSW5kZXhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uVG9nZ2xlIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaWNvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IF92bS5nZXRTeW1ib2xDaGVjayhfdm0ub3B0aW9ucy5pc0FwcGxpZWQpIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnUtYXJlYVwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJkYXRhLW1lc3NhZ2VcIjogX3ZtLmkxOG4oXCJtZW51RGFzaGJvYXJkXCIpLFxuICAgICAgICAgICAgICB0YWJJbmRleDogX3ZtLnRhYkluZGV4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbk1hbmFnZSB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJjb2dcIiB9IH0pXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnUtYXJlYVwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJkYXRhLW1lc3NhZ2VcIjogX3ZtLmkxOG4oXCJtZW51TmV3U2NyaXB0XCIpLFxuICAgICAgICAgICAgICB0YWJJbmRleDogX3ZtLnRhYkluZGV4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkNyZWF0ZVNjcmlwdCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJwbHVzXCIgfSB9KV0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5zdG9yZS5pbmplY3RhYmxlXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdG9yZS5kb21haW4sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0b3JlLmRvbWFpblwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudS1pdGVtIG1lbnUtYXJlYSBtZW51LWZpbmRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhYkluZGV4OiBfdm0udGFiSW5kZXggfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5maW5kVXJscywgZnVuY3Rpb24odXJsLCB0ZXh0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGVsbGlwc2lzOiAhaSwgXCJtci0xXCI6ICFpLCBcIm1sLTFcIjogaSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLW1lc3NhZ2VcIjogdXJsLnNwbGl0KFwiOi8vXCIpWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcInNlYXJjaFwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRleHQpICsgXCIgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgIWkgPyBbX3ZtLl92KFwiL1wiKV0gOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLmZhaWx1cmVSZWFzb25UZXh0XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmYWlsdXJlLXJlYXNvblwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5pbmplY3Rpb25TY29wZXNbMF0gJiYgIV92bS5vcHRpb25zLmlzQXBwbGllZFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVsb2FkLWhpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogX3ZtLmkxOG4oXCJsYWJlbEF1dG9SZWxvYWRDdXJyZW50VGFiRGlzYWJsZWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJzdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiBcImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJpY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJpbmZvXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmZhaWx1cmVSZWFzb25UZXh0KSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uc3RvcmUuYmxhY2tsaXN0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFwiY29kZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsbGlwc2lzIGlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5zdG9yZS5ibGFja2xpc3RlZCkgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fbChfdm0uaW5qZWN0aW9uU2NvcGVzLCBmdW5jdGlvbihzY29wZSkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IHNjb3BlLm5hbWUsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51IG1lbnUtc2NyaXB0c1wiLFxuICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgZXhwYW5kOiBfdm0uYWN0aXZlTWVudSA9PT0gc2NvcGUubmFtZSxcbiAgICAgICAgICAgICAgXCJibG9jay1zY3JvbGxcIjogX3ZtLmFjdGl2ZUV4dHJhc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS10eXBlXCI6IHNjb3BlLm5hbWUgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51LWl0ZW0gbWVudS1hcmVhIG1lbnUtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0YWJJbmRleDogX3ZtLnRhYkluZGV4IH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVNZW51KHNjb3BlLm5hbWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiYXJyb3dcIiB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleC1hdXRvXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdG90YWxzXCI6IHNjb3BlLnRvdGFscyB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhzY29wZS50aXRsZSkgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzdWJtZW51XCIgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKHNjb3BlLmxpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFpdGVtLmRhdGEuY29uZmlnLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgZmFpbGVkOiBpdGVtLmRhdGEuZmFpbGVkLFxuICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQ6IGl0ZW0uZGF0YS5jb25maWcucmVtb3ZlZCxcbiAgICAgICAgICAgICAgICAgICAgICBydW5zOiBpdGVtLmRhdGEucnVucyxcbiAgICAgICAgICAgICAgICAgICAgICBcImV4dHJhcy1zaG93blwiOiBfdm0uYWN0aXZlRXh0cmFzID09PSBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXhjbHVkZXMtc2hvd25cIjogaXRlbS5leGNsdWRlc1ZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudS1pdGVtIG1lbnUtYXJlYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IF92bS50YWJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLW1lc3NhZ2VcIjogaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb2N1c2VkSXRlbSA9IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ZG93bjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuY3RybEtleSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc2hpZnRLZXkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmFsdEtleSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQubWV0YUtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25FZGl0U2NyaXB0KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIiBcIiwgXCJTcGFjZWJhclwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmN0cmxLZXkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5hbHRLZXkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50Lm1ldGFLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uVG9nZ2xlU2NyaXB0KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblRvZ2dsZVNjcmlwdChpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNjcmlwdC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5kYXRhLnNhZmVJY29uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBfdm0uZ2V0U3ltYm9sQ2hlY2soaXRlbS5kYXRhLmNvbmZpZy5lbmFibGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2NyaXB0LW5hbWUgZmxleC1hdXRvIGVsbGlwc2lzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoaXRlbS5uYW1lKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5hbHRLZXkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50Lm1ldGFLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uRWRpdFNjcmlwdChpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dG1lbnU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuY3RybEtleSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc2hpZnRLZXkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmFsdEtleSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQubWV0YUtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25FZGl0U2NyaXB0KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiYnV0dG9uXCIgaW4gJGV2ZW50ICYmICRldmVudC5idXR0b24gIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmN0cmxLZXkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5hbHRLZXkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50Lm1ldGFLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uRWRpdFNjcmlwdChpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5JU19ERVYgfHwgIWl0ZW0uZGF0YS5jdXN0b20uYnVpbGRJbikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uYWN0aXZlRXh0cmFzID09PSBpdGVtIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb2N1c2VkSXRlbSA9PT0gaXRlbSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKElTX0RFViB8fCAhaXRlbS5kYXRhLmN1c3RvbS5idWlsZEluKVxcbiAgICAgICAgICAgJiYgKGFjdGl2ZUV4dHJhcyA9PT0gaXRlbSB8fCBmb2N1c2VkSXRlbSA9PT0gaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3VibWVudS1idXR0b25zXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3VibWVudS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IF92bS50YWJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0uaTE4bihcImJ1dHRvbkVkaXRDbGlja0hpbnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25FZGl0U2NyaXB0KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJjb2RlXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1Ym1lbnUtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFiSW5kZXg6IF92bS50YWJJbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZUV4dHJhcyhpdGVtLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJtb3JlXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZXhjbHVkZXNWYWx1ZSAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJleGNsdWRlcy1tZW51IGZsZXggZmxleC1jb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uZXhjbHVkZXNWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uZXhjbHVkZXNWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcGVsbGNoZWNrOiBcImZhbHNlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBpdGVtLmV4Y2x1ZGVzVmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2x1ZGVzVmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5pMThuKFwiYnV0dG9uT0tcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkV4Y2x1ZGVTYXZlKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5pMThuKFwiYnV0dG9uQ2FuY2VsXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25FeGNsdWRlQ2xvc2UoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkZXRhaWxzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdW1tYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaWNvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiaW5mb1wiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzbWFsbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmkxOG4oXCJtZW51RXhjbHVkZUhpbnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInN1Ym1lbnUtY29tbWFuZHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc3RvcmUuY29tbWFuZHNbaXRlbS5kYXRhLnByb3BzLmlkXSwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudS1pdGVtIG1lbnUtYXJlYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleDogX3ZtLnRhYkluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLW1lc3NhZ2VcIjogY2FwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ01EOiB7IGlkOiBpdGVtLmRhdGEucHJvcHMuaWQsIGNhcDogY2FwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IF92bS5vbkNvbW1hbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZXVwOiBfdm0ub25Db21tYW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ZG93bjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ29tbWFuZC5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCIgXCIsIFwiU3BhY2ViYXJcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25Db21tYW5kLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaWNvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiY29tbWFuZFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleC1hdXRvIGVsbGlwc2lzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGNhcCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIF92bS5zdG9yZS5pbmplY3Rpb25GYWlsdXJlXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmYWlsdXJlLXJlYXNvblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uaTE4bihcIm1lbnVJbmplY3Rpb25GYWlsZWRcIikpIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLnN0b3JlLmluamVjdGlvbkZhaWx1cmUuZml4YWJsZVxuICAgICAgICAgICAgICA/IF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uaTE4bihcIm1lbnVJbmplY3Rpb25GYWlsZWRGaXhcIikpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkluamVjdGlvbkZhaWx1cmVGaXguYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uc3RvcmUuY3VycmVudFRhYiAmJiBfdm0uc3RvcmUuY3VycmVudFRhYi5pbmNvZ25pdG9cbiAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbmNvZ25pdG9cIixcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmkxOG4oXCJtc2dJbmNvZ25pdG9DaGFuZ2VzXCIpKSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFwiZm9vdGVyXCIsIFtcbiAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vbWlyYXYuY24vXCIsIHRhYkluZGV4OiBfdm0udGFiSW5kZXggfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5pMThuKFwidmlzaXRXZWJzaXRlXCIpKSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0ub25WaXNpdFdlYnNpdGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWVzc2FnZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZXNzYWdlXCJcbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ubWVzc2FnZSkgfSB9KV1cbiAgICAgICksXG4gICAgICBfdm0uYWN0aXZlRXh0cmFzXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyByZWY6IFwiZXh0cmFzTWVudVwiLCBzdGF0aWNDbGFzczogXCJleHRyYXMtbWVudVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5hY3RpdmVFeHRyYXMuaG9tZVxuICAgICAgICAgICAgICA/IF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5hY3RpdmVFeHRyYXMuaG9tZSxcbiAgICAgICAgICAgICAgICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uaTE4bihcImJ1dHRvbkhvbWVcIikpIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCIwXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uaTE4bihcIm1lbnVFeGNsdWRlXCIpKSB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uRXhjbHVkZSB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdGFiaW5kZXg6IFwiMFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmVFeHRyYXMuZGF0YS5jb25maWcucmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICA/IF92bS5pMThuKFwiYnV0dG9uUmVzdG9yZVwiKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5pMThuKFwiYnV0dG9uUmVtb3ZlXCIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25SZW1vdmVTY3JpcHQoX3ZtLmFjdGl2ZUV4dHJhcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9ub3NwYWNlLWZvbnQgbXQtMVwiIH0sIFtcbiAgICAgIF9jKFwibGlcIiwgW192bS5fdihcImh0dHBzOi8vd3d3LmZvby5jb20vcGF0aC8qYmFyKlwiKV0pLFxuICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiKjovL3d3dy5mb28uY29tLypcIildKSxcbiAgICAgIF9jKFwibGlcIiwgW192bS5fdihcIio6Ly8qLmZvby5jb20vKlwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMy1vbmVPZi0yLTIhLi9zdHlsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzliYjFjZGJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTMtb25lT2YtMi0yIS4vc3R5bGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTMtb25lT2YtMi0yIS4vc3R5bGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgJyMvY29tbW9uL2Jyb3dzZXInO1xuaW1wb3J0IHsgaTE4biwgc2VuZENtZERpcmVjdGx5IH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgSU5KRUNUX1BBR0UgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IGhhbmRsZXJzIGZyb20gJyMvY29tbW9uL2hhbmRsZXJzJztcbmltcG9ydCB7IGxvYWRTY3JpcHRJY29uIH0gZnJvbSAnIy9jb21tb24vbG9hZC1zY3JpcHQtaWNvbic7XG5pbXBvcnQgeyBmb3JFYWNoVmFsdWUsIG1hcEVudHJ5IH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCAnIy9jb21tb24vdWkvc3R5bGUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL3ZpZXdzL2FwcCc7XG5pbXBvcnQgeyBtdXRleCwgc3RvcmUgfSBmcm9tICcuL3V0aWxzJztcblxubXV0ZXguaW5pdCgpO1xuVnVlLnByb3RvdHlwZS5pMThuID0gaTE4bjtcblxuY29uc3Qgdm0gPSBuZXcgVnVlKHtcbiAgcmVuZGVyOiBoID0+IGgoQXBwKSxcbn0pXG4uJG1vdW50KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZCh2bS4kZWwpO1xuXG5PYmplY3QuYXNzaWduKGhhbmRsZXJzLCB7XG4gIGFzeW5jIFNldFBvcHVwKGRhdGEsIHNyYykge1xuICAgIGlmIChzdG9yZS5jdXJyZW50VGFiICYmIHN0b3JlLmN1cnJlbnRUYWIuaWQgIT09IHNyYy50YWIuaWQpIHJldHVybjtcbiAgICAvKiBTZXRQb3B1cCBmcm9tIGEgc3ViLWZyYW1lIG1heSBjb21lIGZpcnN0IHNvIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIG1haW4gcGFnZVxuICAgICAqIGJlY2F1c2Ugd2Ugb25seSBzaG93IHRoZSBpZnJhbWUgbWVudSBmb3IgdW5pcXVlIHNjcmlwdHMgdGhhdCBkb24ndCBydW4gaW4gdGhlIG1haW4gcGFnZSAqL1xuICAgIGNvbnN0IGlzVG9wID0gc3JjLmZyYW1lSWQgPT09IDA7XG4gICAgaWYgKCFpc1RvcCkgYXdhaXQgbXV0ZXgucmVhZHk7XG4gICAgY29uc3QgaWRzID0gZGF0YS5pZHMuZmlsdGVyKGlkID0+ICFzdG9yZS5zY3JpcHRJZHMuaW5jbHVkZXMoaWQpKTtcbiAgICBzdG9yZS5zY3JpcHRJZHMucHVzaCguLi5pZHMpO1xuICAgIGlmIChpc1RvcCkge1xuICAgICAgbXV0ZXgucmVzb2x2ZSgpO1xuICAgICAgc3RvcmUuY29tbWFuZHMgPSBkYXRhLm1lbnVzOjptYXBFbnRyeSgoWywgdmFsdWVdKSA9PiBPYmplY3Qua2V5cyh2YWx1ZSkuc29ydCgpKTtcbiAgICAgIC8vIGV4ZWN1dGVTY3JpcHQgbWF5KD8pIGZhaWwgaW4gYSBkaXNjYXJkZWQgb3IgbGF6eS1sb2FkZWQgdGFiLCB3aGljaCBpcyBhY3R1YWxseSBpbmplY3RhYmxlXG4gICAgICBzdG9yZS5pbmplY3RhYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlkcy5sZW5ndGgpIHtcbiAgICAgIC8vIGZyYW1lU2NyaXB0cyBtYXkgYmUgYXBwZW5kZWQgbXVsdGlwbGUgdGltZXMgaWYgaWZyYW1lcyBoYXZlIHVuaXF1ZSBzY3JpcHRzXG4gICAgICBjb25zdCBzY29wZSA9IHN0b3JlW2lzVG9wID8gJ3NjcmlwdHMnIDogJ2ZyYW1lU2NyaXB0cyddO1xuICAgICAgY29uc3QgbWV0YXMgPSBkYXRhLnNjcmlwdHM/LmZpbHRlcigoeyBwcm9wczogeyBpZCB9IH0pID0+IGlkcy5pbmNsdWRlcyhpZCkpXG4gICAgICAgIHx8IChPYmplY3QuYXNzaWduKGRhdGEsIGF3YWl0IHNlbmRDbWREaXJlY3RseSgnR2V0RGF0YScsIGlkcykpKS5zY3JpcHRzO1xuICAgICAgbWV0YXMuZm9yRWFjaChzY3JpcHQgPT4ge1xuICAgICAgICBsb2FkU2NyaXB0SWNvbihzY3JpcHQsIGRhdGEuY2FjaGUpO1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBzY3JpcHQucHJvcHM7XG4gICAgICAgIHNjcmlwdC5ydW5zID0gZGF0YS5ydW5uaW5nSWRzLmluY2x1ZGVzKGlkKTtcbiAgICAgICAgaWYgKGRhdGEuZmFpbGVkSWRzLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgIHNjcmlwdC5mYWlsZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICghc3RvcmUuaW5qZWN0aW9uRmFpbHVyZSkge1xuICAgICAgICAgICAgc3RvcmUuaW5qZWN0aW9uRmFpbHVyZSA9IHsgZml4YWJsZTogZGF0YS5pbmplY3RJbnRvID09PSBJTkpFQ1RfUEFHRSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzY29wZS5wdXNoKC4uLm1ldGFzKTtcbiAgICB9XG4gIH0sXG59KTtcblxuc2VuZENtZERpcmVjdGx5KCdDYWNoZVBvcCcsICdTZXRQb3B1cCcpLnRoZW4oKGRhdGEpID0+IHtcbiAgZGF0YTo6Zm9yRWFjaFZhbHVlKHZhbCA9PiBoYW5kbGVycy5TZXRQb3B1cCguLi52YWwpKTtcbn0pO1xuXG4vKiBTaW5jZSBuZXcgQ2hyb21lIHByaW50cyBhIHdhcm5pbmcgd2hlbiA6Oi13ZWJraXQtZGV0YWlscy1tYXJrZXIgaXMgdXNlZCxcbiAqIHdlIGFkZCBpdCBvbmx5IGZvciBvbGQgQ2hyb21lLCB3aGljaCBpcyBkZXRlY3RlZCB2aWEgZmVhdHVyZSBhZGRlZCBpbiA4OS4gKi9cbmlmICghQ1NTLnN1cHBvcnRzPy4oJ2xpc3Qtc3R5bGUtdHlwZScsICdkaXNjbG9zdXJlLW9wZW4nKSkge1xuICBkb2N1bWVudC5zdHlsZVNoZWV0c1swXS5pbnNlcnRSdWxlKCcuZXhjbHVkZXMtbWVudSA6Oi13ZWJraXQtZGV0YWlscy1tYXJrZXIge2Rpc3BsYXk6bm9uZX0nKTtcbn1cblxuUHJvbWlzZS5hbGwoW1xuICBzZW5kQ21kRGlyZWN0bHkoJ0dldFRhYkRvbWFpbicpLFxuICBicm93c2VyLnRhYnMuZXhlY3V0ZVNjcmlwdCh7IGNvZGU6ICcxJywgcnVuQXQ6ICdkb2N1bWVudF9zdGFydCcgfSkuY2F0Y2goKCkgPT4gW10pLFxuXSlcbi50aGVuKGFzeW5jIChbXG4gIHsgdGFiLCBkb21haW4gfSxcbiAgW2luamVjdGFibGVdLFxuXSkgPT4ge1xuICBzdG9yZS5jdXJyZW50VGFiID0gdGFiO1xuICBzdG9yZS5kb21haW4gPSBkb21haW47XG4gIGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogYCR7dGFiLmlkfWAgfSk7XG4gIGlmICghaW5qZWN0YWJsZSkge1xuICAgIHN0b3JlLmluamVjdGFibGUgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBzdG9yZS5ibGFja2xpc3RlZCA9IGF3YWl0IHNlbmRDbWREaXJlY3RseSgnVGVzdEJsYWNrbGlzdCcsIHRhYi51cmwpO1xuICB9XG59KTtcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMy1vbmVPZi0yLTIhLi9zdHlsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0zLW9uZU9mLTItMiEuL3N0eWxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0IGNvbnN0IHN0b3JlID0ge1xuICBzY3JpcHRzOiBbXSxcbiAgZnJhbWVTY3JpcHRzOiBbXSxcbiAgc2NyaXB0SWRzOiBbXSxcbiAgY29tbWFuZHM6IFtdLFxuICBkb21haW46ICcnLFxuICBpbmplY3Rpb25GYWlsdXJlOiBudWxsLFxuICBpbmplY3RhYmxlOiB0cnVlLFxuICBibGFja2xpc3RlZDogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgbXV0ZXggPSB7XG4gIGluaXQoZGVsYXkgPSAxMDApIHtcbiAgICB0aGlzLnJlYWR5ID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgLy8gcGFnZXMgbGlrZSBDaHJvbWUgV2ViIFN0b3JlIG1heSBmb3JiaWQgaW5qZWN0aW9uIGluIG1haW4gcGFnZSBzbyB3ZSBuZWVkIGEgdGltZW91dFxuICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSk7XG4gICAgfSk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZmMmRiNDE0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4uL3N0eWxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvWmhhb0p1bi9EZXNrdG9wL3Zpb2xlbnRtb25rZXkvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmYyZGI0MTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmYyZGI0MTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmYyZGI0MTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmYyZGI0MTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmYyZGI0MTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9wb3B1cC92aWV3cy9hcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmYyZGI0MTQmXCIiXSwic291cmNlUm9vdCI6IiJ9