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
/******/ 		"background/index": 0
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
/******/ 	deferredModules.push(["./src/background/index.js","public/lib/tldjs","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ffmpeg/ffmpeg/package.json":
/*!**************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/package.json ***!
  \**************************************************/
/*! exports provided: name, version, description, main, types, directories, scripts, browser, repository, keywords, author, license, bugs, engines, homepage, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@ffmpeg/ffmpeg\",\"version\":\"0.10.1\",\"description\":\"FFmpeg WebAssembly version\",\"main\":\"src/index.js\",\"types\":\"src/index.d.ts\",\"directories\":{\"example\":\"examples\"},\"scripts\":{\"start\":\"node scripts/server.js\",\"build\":\"rimraf dist && webpack --config scripts/webpack.config.prod.js\",\"prepublishOnly\":\"npm run build\",\"lint\":\"eslint src\",\"wait\":\"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js\",\"test\":\"npm-run-all -p -r start test:all\",\"test:all\":\"npm-run-all wait test:browser:ffmpeg test:node:all\",\"test:node\":\"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js\",\"test:node:all\":\"npm run test:node -- ./tests/*.test.js\",\"test:browser\":\"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000\",\"test:browser:ffmpeg\":\"npm run test:browser -- -f ./tests/ffmpeg.test.html\"},\"browser\":{\"./src/node/index.js\":\"./src/browser/index.js\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git\"},\"keywords\":[\"ffmpeg\",\"WebAssembly\",\"video\"],\"author\":\"Jerome Wu <jeromewus@gmail.com>\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/ffmpegwasm/ffmpeg.wasm/issues\"},\"engines\":{\"node\":\">=12.16.1\"},\"homepage\":\"https://github.com/ffmpegwasm/ffmpeg.wasm#readme\",\"dependencies\":{\"is-url\":\"^1.2.4\",\"node-fetch\":\"^2.6.1\",\"regenerator-runtime\":\"^0.13.7\",\"resolve-url\":\"^0.2.1\"},\"devDependencies\":{\"@babel/core\":\"^7.12.3\",\"@babel/preset-env\":\"^7.12.1\",\"@ffmpeg/core\":\"^0.10.0\",\"@types/emscripten\":\"^1.39.4\",\"babel-loader\":\"^8.1.0\",\"chai\":\"^4.2.0\",\"cors\":\"^2.8.5\",\"eslint\":\"^7.12.1\",\"eslint-config-airbnb-base\":\"^14.1.0\",\"eslint-plugin-import\":\"^2.22.1\",\"express\":\"^4.17.1\",\"mocha\":\"^8.2.1\",\"mocha-headless-chrome\":\"^2.0.3\",\"npm-run-all\":\"^4.1.5\",\"wait-on\":\"^5.3.0\",\"webpack\":\"^5.3.2\",\"webpack-cli\":\"^4.1.0\",\"webpack-dev-middleware\":\"^4.0.0\"}}");

/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/browser/defaultOptions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/browser/defaultOptions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const resolveURL = __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js");
const { devDependencies } = __webpack_require__(/*! ../../package.json */ "./node_modules/@ffmpeg/ffmpeg/package.json");

/*
 * Default options for browser environment
 */
module.exports = {
  corePath:  true
    ? resolveURL('/node_modules/@ffmpeg/core/dist/ffmpeg-core.js')
    : undefined,
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/browser/fetchFile.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/browser/fetchFile.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const resolveURL = __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js");

const readFromBlobOrFile = (blob) => (
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = ({ target: { error: { code } } }) => {
      reject(Error(`File could not be read! Code=${code}`));
    };
    fileReader.readAsArrayBuffer(blob);
  })
);

module.exports = async (_data) => {
  let data = _data;
  if (typeof _data === 'undefined') {
    return new Uint8Array();
  }

  if (typeof _data === 'string') {
    /* From base64 format */
    if (/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(_data)) {
      data = atob(_data.split(',')[1])
        .split('')
        .map((c) => c.charCodeAt(0));
    /* From remote server/URL */
    } else {
      const res = await fetch(resolveURL(_data));
      data = await res.arrayBuffer();
    }
  /* From Blob or File */
  } else if (_data instanceof File || _data instanceof Blob) {
    data = await readFromBlobOrFile(_data);
  }

  return new Uint8Array(data);
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-undef */
const resolveURL = __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js");
const { log } = __webpack_require__(/*! ../utils/log */ "./node_modules/@ffmpeg/ffmpeg/src/utils/log.js");

/*
 * Fetch data from remote URL and convert to blob URL
 * to avoid CORS issue
 */
const toBlobURL = async (url, mimeType) => {
  log('info', `fetch ${url}`);
  const buf = await (await fetch(url)).arrayBuffer();
  log('info', `${url} file size = ${buf.byteLength} bytes`);
  const blob = new Blob([buf], { type: mimeType });
  const blobURL = URL.createObjectURL(blob);
  log('info', `${url} blob URL = ${blobURL}`);
  return blobURL;
};

module.exports = async ({ corePath: _corePath }) => {
  if (typeof _corePath !== 'string') {
    throw Error('corePath should be a string!');
  }
  const coreRemotePath = resolveURL(_corePath);
  const corePath = await toBlobURL(
    coreRemotePath,
    'application/javascript',
  );
  const wasmPath = await toBlobURL(
    coreRemotePath.replace('ffmpeg-core.js', 'ffmpeg-core.wasm'),
    'application/wasm',
  );
  const workerPath = await toBlobURL(
    coreRemotePath.replace('ffmpeg-core.js', 'ffmpeg-core.worker.js'),
    'application/javascript',
  );
  if (typeof createFFmpegCore === 'undefined') {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      const eventHandler = () => {
        script.removeEventListener('load', eventHandler);
        log('info', 'ffmpeg-core.js script loaded');
        resolve({
          createFFmpegCore,
          corePath,
          wasmPath,
          workerPath,
        });
      };
      script.src = corePath;
      script.type = 'text/javascript';
      script.addEventListener('load', eventHandler);
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }
  log('info', 'ffmpeg-core.js script is loaded already');
  return Promise.resolve({
    createFFmpegCore,
    corePath,
    wasmPath,
    workerPath,
  });
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/browser/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const defaultOptions = __webpack_require__(/*! ./defaultOptions */ "./node_modules/@ffmpeg/ffmpeg/src/browser/defaultOptions.js");
const getCreateFFmpegCore = __webpack_require__(/*! ./getCreateFFmpegCore */ "./node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js");
const fetchFile = __webpack_require__(/*! ./fetchFile */ "./node_modules/@ffmpeg/ffmpeg/src/browser/fetchFile.js");

module.exports = {
  defaultOptions,
  getCreateFFmpegCore,
  fetchFile,
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/config.js":
/*!***************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/config.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  defaultArgs: [
    /* args[0] is always the binary path */
    './ffmpeg',
    /* Disable interaction mode */
    '-nostdin',
    /* Force to override output file */
    '-y',
  ],
  baseOptions: {
    /* Flag to turn on/off log messages in console */
    log: false,
    /*
     * Custom logger to get ffmpeg.wasm output messages.
     * a sample logger looks like this:
     *
     * ```
     * logger = ({ type, message }) => {
     *   console.log(type, message);
     * }
     * ```
     *
     * type can be one of following:
     *
     * info: internal workflow debug messages
     * fferr: ffmpeg native stderr output
     * ffout: ffmpeg native stdout output
     */
    logger: () => {},
    /*
     * Progress handler to get current progress of ffmpeg command.
     * a sample progress handler looks like this:
     *
     * ```
     * progress = ({ ratio }) => {
     *   console.log(ratio);
     * }
     * ```
     *
     * ratio is a float number between 0 to 1.
     */
    progress: () => {},
    /*
     * Path to find/download ffmpeg.wasm-core,
     * this value should be overwriten by `defaultOptions` in
     * each environment.
     */
    corePath: '',
  },
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/createFFmpeg.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/createFFmpeg.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { defaultArgs, baseOptions } = __webpack_require__(/*! ./config */ "./node_modules/@ffmpeg/ffmpeg/src/config.js");
const { setLogging, setCustomLogger, log } = __webpack_require__(/*! ./utils/log */ "./node_modules/@ffmpeg/ffmpeg/src/utils/log.js");
const parseProgress = __webpack_require__(/*! ./utils/parseProgress */ "./node_modules/@ffmpeg/ffmpeg/src/utils/parseProgress.js");
const parseArgs = __webpack_require__(/*! ./utils/parseArgs */ "./node_modules/@ffmpeg/ffmpeg/src/utils/parseArgs.js");
const { defaultOptions, getCreateFFmpegCore } = __webpack_require__(/*! ./node */ "./node_modules/@ffmpeg/ffmpeg/src/browser/index.js");
const { version } = __webpack_require__(/*! ../package.json */ "./node_modules/@ffmpeg/ffmpeg/package.json");

const NO_LOAD = Error('ffmpeg.wasm is not ready, make sure you have completed load().');

module.exports = (_options = {}) => {
  const {
    log: logging,
    logger,
    progress: optProgress,
    ...options
  } = {
    ...baseOptions,
    ...defaultOptions,
    ..._options,
  };
  let Core = null;
  let ffmpeg = null;
  let runResolve = null;
  let running = false;
  let progress = optProgress;
  const detectCompletion = (message) => {
    if (message === 'FFMPEG_END' && runResolve !== null) {
      runResolve();
      runResolve = null;
      running = false;
    }
  };
  const parseMessage = ({ type, message }) => {
    log(type, message);
    parseProgress(message, progress);
    detectCompletion(message);
  };

  /*
   * Load ffmpeg.wasm-core script.
   * In browser environment, the ffmpeg.wasm-core script is fetch from
   * CDN and can be assign to a local path by assigning `corePath`.
   * In node environment, we use dynamic require and the default `corePath`
   * is `$ffmpeg/core`.
   *
   * Typically the load() func might take few seconds to minutes to complete,
   * better to do it as early as possible.
   *
   */
  const load = async () => {
    log('info', 'load ffmpeg-core');
    if (Core === null) {
      log('info', 'loading ffmpeg-core');
      /*
       * In node environment, all paths are undefined as there
       * is no need to set them.
       */
      const {
        createFFmpegCore,
        corePath,
        workerPath,
        wasmPath,
      } = await getCreateFFmpegCore(options);
      Core = await createFFmpegCore({
        /*
         * Assign mainScriptUrlOrBlob fixes chrome extension web worker issue
         * as there is no document.currentScript in the context of content_scripts
         */
        mainScriptUrlOrBlob: corePath,
        printErr: (message) => parseMessage({ type: 'fferr', message }),
        print: (message) => parseMessage({ type: 'ffout', message }),
        /*
         * locateFile overrides paths of files that is loaded by main script (ffmpeg-core.js).
         * It is critical for browser environment and we override both wasm and worker paths
         * as we are using blob URL instead of original URL to avoid cross origin issues.
         */
        locateFile: (path, prefix) => {
          if (typeof window !== 'undefined') {
            if (typeof wasmPath !== 'undefined'
              && path.endsWith('ffmpeg-core.wasm')) {
              return wasmPath;
            }
            if (typeof workerPath !== 'undefined'
              && path.endsWith('ffmpeg-core.worker.js')) {
              return workerPath;
            }
          }
          return prefix + path;
        },
      });
      ffmpeg = Core.cwrap('proxy_main', 'number', ['number', 'number']);
      log('info', 'ffmpeg-core loaded');
    } else {
      throw Error('ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.');
    }
  };

  /*
   * Determine whether the Core is loaded.
   */
  const isLoaded = () => Core !== null;

  /*
   * Run ffmpeg command.
   * This is the major function in ffmpeg.wasm, you can just imagine it
   * as ffmpeg native cli and what you need to pass is the same.
   *
   * For example, you can convert native command below:
   *
   * ```
   * $ ffmpeg -i video.avi -c:v libx264 video.mp4
   * ```
   *
   * To
   *
   * ```
   * await ffmpeg.run('-i', 'video.avi', '-c:v', 'libx264', 'video.mp4');
   * ```
   *
   */
  const run = (..._args) => {
    log('info', `run ffmpeg command: ${_args.join(' ')}`);
    if (Core === null) {
      throw NO_LOAD;
    } else if (running) {
      throw Error('ffmpeg.wasm can only run one command at a time');
    } else {
      running = true;
      return new Promise((resolve) => {
        const args = [...defaultArgs, ..._args].filter((s) => s.length !== 0);
        runResolve = resolve;
        ffmpeg(...parseArgs(Core, args));
      });
    }
  };

  /*
   * Run FS operations.
   * For input/output file of ffmpeg.wasm, it is required to save them to MEMFS
   * first so that ffmpeg.wasm is able to consume them. Here we rely on the FS
   * methods provided by Emscripten.
   *
   * Common methods to use are:
   * ffmpeg.FS('writeFile', 'video.avi', new Uint8Array(...)): writeFile writes
   * data to MEMFS. You need to use Uint8Array for binary data.
   * ffmpeg.FS('readFile', 'video.mp4'): readFile from MEMFS.
   * ffmpeg.FS('unlink', 'video.map'): delete file from MEMFS.
   *
   * For more info, check https://emscripten.org/docs/api_reference/Filesystem-API.html
   *
   */
  const FS = (method, ...args) => {
    log('info', `run FS.${method} ${args.map((arg) => (typeof arg === 'string' ? arg : `<${arg.length} bytes binary file>`)).join(' ')}`);
    if (Core === null) {
      throw NO_LOAD;
    } else {
      let ret = null;
      try {
        ret = Core.FS[method](...args);
      } catch (e) {
        if (method === 'readdir') {
          throw Error(`ffmpeg.FS('readdir', '${args[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`);
        } else if (method === 'readFile') {
          throw Error(`ffmpeg.FS('readFile', '${args[0]}') error. Check if the path exists`);
        } else {
          throw Error('Oops, something went wrong in FS operation.');
        }
      }
      return ret;
    }
  };

  /**
   * forcibly terminate the ffmpeg program.
   */
  const exit = () => {
    if (Core === null) {
      throw NO_LOAD;
    } else {
      running = false;
      Core.exit(1);
      Core = null;
      ffmpeg = null;
      runResolve = null;
    }
  };

  const setProgress = (_progress) => {
    progress = _progress;
  };

  const setLogger = (_logger) => {
    setCustomLogger(_logger);
  };

  setLogging(logging);
  setCustomLogger(logger);

  log('info', `use ffmpeg.wasm v${version}`);

  return {
    setProgress,
    setLogger,
    setLogging,
    load,
    isLoaded,
    run,
    exit,
    FS,
  };
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
const createFFmpeg = __webpack_require__(/*! ./createFFmpeg */ "./node_modules/@ffmpeg/ffmpeg/src/createFFmpeg.js");
const { fetchFile } = __webpack_require__(/*! ./node */ "./node_modules/@ffmpeg/ffmpeg/src/browser/index.js");

module.exports = {
  /*
   * Create ffmpeg instance.
   * Each ffmpeg instance owns an isolated MEMFS and works
   * independently.
   *
   * For example:
   *
   * ```
   * const ffmpeg = createFFmpeg({
   *  log: true,
   *  logger: () => {},
   *  progress: () => {},
   *  corePath: '',
   * })
   * ```
   *
   * For the usage of these four arguments, check config.js
   *
   */
  createFFmpeg,
  /*
   * Helper function for fetching files from various resource.
   * Sometimes the video/audio file you want to process may located
   * in a remote URL and somewhere in your local file system.
   *
   * This helper function helps you to fetch to file and return an
   * Uint8Array variable for ffmpeg.wasm to consume.
   *
   */
  fetchFile,
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/utils/log.js":
/*!******************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/utils/log.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let logging = false;
let customLogger = () => {};

const setLogging = (_logging) => {
  logging = _logging;
};

const setCustomLogger = (logger) => {
  customLogger = logger;
};

const log = (type, message) => {
  customLogger({ type, message });
  if (logging) {
    console.log(`[${type}] ${message}`);
  }
};

module.exports = {
  logging,
  setLogging,
  setCustomLogger,
  log,
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/utils/parseArgs.js":
/*!************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/utils/parseArgs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (Core, args) => {
  const argsPtr = Core._malloc(args.length * Uint32Array.BYTES_PER_ELEMENT);
  args.forEach((s, idx) => {
    const buf = Core._malloc(s.length + 1);
    Core.writeAsciiToMemory(s, buf);
    Core.setValue(argsPtr + (Uint32Array.BYTES_PER_ELEMENT * idx), buf, 'i32');
  });
  return [args.length, argsPtr];
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/utils/parseProgress.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/utils/parseProgress.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let duration = 0;
let ratio = 0;

const ts2sec = (ts) => {
  const [h, m, s] = ts.split(':');
  return (parseFloat(h) * 60 * 60) + (parseFloat(m) * 60) + parseFloat(s);
};

module.exports = (message, progress) => {
  if (typeof message === 'string') {
    if (message.startsWith('  Duration')) {
      const ts = message.split(', ')[0].split(': ')[1];
      const d = ts2sec(ts);
      progress({ duration: d, ratio });
      if (duration === 0 || duration > d) {
        duration = d;
      }
    } else if (message.startsWith('frame') || message.startsWith('size')) {
      const ts = message.split('time=')[1].split(' ')[0];
      const t = ts2sec(ts);
      ratio = t / duration;
      progress({ ratio, time: t });
    } else if (message.startsWith('video:')) {
      progress({ ratio: 1 });
      duration = 0;
    }
  }
};


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/punycode/punycode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/resolve-url/resolve-url.js":
/*!*************************************************!*\
  !*** ./node_modules/resolve-url/resolve-url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

void (function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
}(this, function() {

  function resolveUrl(/* ...urls */) {
    var numUrls = arguments.length

    if (numUrls === 0) {
      throw new Error("resolveUrl requires at least one argument; got none.")
    }

    var base = document.createElement("base")
    base.href = arguments[0]

    if (numUrls === 1) {
      return base.href
    }

    var head = document.getElementsByTagName("head")[0]
    head.insertBefore(base, head.firstChild)

    var a = document.createElement("a")
    var resolved

    for (var index = 1; index < numUrls; index++) {
      a.href = arguments[index]
      resolved = a.href
      base.href = resolved
    }

    head.removeChild(base)

    return resolved
  }

  return resolveUrl

}));


/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/background/index.js":
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/browser */ "./src/common/browser.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_tld__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/tld */ "./src/common/tld.js");
/* harmony import */ var _sync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sync */ "./src/background/sync/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/background/utils/index.js");
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/db */ "./src/background/utils/db.js");
/* harmony import */ var _utils_init__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/init */ "./src/background/utils/init.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/options */ "./src/background/utils/options.js");
/* harmony import */ var _utils_popup_tracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/popup-tracker */ "./src/background/utils/popup-tracker.js");
/* harmony import */ var _utils_preinject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/preinject */ "./src/background/utils/preinject.js");
/* harmony import */ var _utils_template_hook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/template-hook */ "./src/background/utils/template-hook.js");
/* harmony import */ var _utils_values__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/values */ "./src/background/utils/values.js");
/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/requests */ "./src/background/utils/requests.js");
/* harmony import */ var _utils_clipboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/clipboard */ "./src/background/utils/clipboard.js");
/* harmony import */ var _utils_hotkeys__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/hotkeys */ "./src/background/utils/hotkeys.js");
/* harmony import */ var _utils_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/icon */ "./src/background/utils/icon.js");
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/notifications */ "./src/background/utils/notifications.js");
/* harmony import */ var _utils_script__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/script */ "./src/background/utils/script.js");
/* harmony import */ var _utils_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/tabs */ "./src/background/utils/tabs.js");
/* harmony import */ var _utils_tester__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/tester */ "./src/background/utils/tester.js");
/* harmony import */ var _utils_update__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils/update */ "./src/background/utils/update.js");























Object(_utils_options__WEBPACK_IMPORTED_MODULE_9__["hookOptions"])(changes => {
  if ('autoUpdate' in changes) {
    autoUpdate();
  }

  if (_utils_template_hook__WEBPACK_IMPORTED_MODULE_12__["SCRIPT_TEMPLATE"] in changes) {
    Object(_utils_template_hook__WEBPACK_IMPORTED_MODULE_12__["resetScriptTemplate"])(changes);
  }

  Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('UpdateOptions', changes);
});
Object.assign(_utils__WEBPACK_IMPORTED_MODULE_6__["commands"], {
  /** @return {Promise<{ scripts: VMScript[], cache: Object, sync: Object }>} */
  async GetData(ids) {
    const data = await Object(_utils_db__WEBPACK_IMPORTED_MODULE_7__["getData"])(ids);
    data.sync = _sync__WEBPACK_IMPORTED_MODULE_5__["getStates"]();
    return data;
  },

  /** @return {Promise<Object>} */
  async GetInjected({
    url,
    forceContent
  }, src) {
    const {
      frameId,
      tab
    } = src;
    const tabId = tab.id;
    if (!url) url = src.url || tab.url;

    if (!frameId) {
      Object(_utils_values__WEBPACK_IMPORTED_MODULE_13__["resetValueOpener"])(tabId);
      Object(_utils_requests__WEBPACK_IMPORTED_MODULE_14__["clearRequestsByTabId"])(tabId);
    }

    const res = await Object(_utils_preinject__WEBPACK_IMPORTED_MODULE_11__["getInjectedScripts"])(url, tabId, frameId, forceContent);
    const {
      feedback,
      inject,
      valOpIds
    } = res;
    inject.isPopupShown = _utils_popup_tracker__WEBPACK_IMPORTED_MODULE_10__["popupTabs"][tabId]; // Injecting known content scripts without waiting for InjectionFeedback message.
    // Running in a separate task because it may take a long time to serialize data.

    if (feedback.length) {
      setTimeout(_utils__WEBPACK_IMPORTED_MODULE_6__["commands"].InjectionFeedback, 0, {
        feedback
      }, src);
    }

    Object(_utils_values__WEBPACK_IMPORTED_MODULE_13__["addValueOpener"])(tabId, frameId, valOpIds);
    return inject;
  },

  /** @return {Promise<Object>} */
  async GetTabDomain() {
    const tab = (await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["getActiveTab"])()) || {};
    const url = tab.pendingUrl || tab.url || '';
    const host = url.match(/^https?:\/\/([^/]+)|$/)[1];
    return {
      tab,
      domain: host && _Users_ZhaoJun_Desktop_violentmonkey_src_common_tld__WEBPACK_IMPORTED_MODULE_4__["getDomain"](host) || host
    };
  },

  /**
   * Timers in content scripts are shared with the web page so it can clear them.
   * await sendCmd('SetTimeout', 100) in injected/content
   * await bridge.send('SetTimeout', 100) in injected/web
   */
  SetTimeout(ms) {
    return ms > 0 && Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["makePause"])(ms);
  }

}); // commands to sync unconditionally regardless of the returned value from the handler

const commandsToSync = ['MarkRemoved', 'Move', 'ParseScript', 'RemoveScript', 'UpdateScriptInfo']; // commands to sync only if the handler returns a truthy value

const commandsToSyncIfTruthy = ['CheckRemove', 'CheckUpdate', 'CheckUpdateAll'];

async function handleCommandMessage(req, src) {
  var _commands$cmd;

  const {
    cmd
  } = req;
  const res = await ((_commands$cmd = _utils__WEBPACK_IMPORTED_MODULE_6__["commands"][cmd]) == null ? void 0 : _commands$cmd.call(_utils__WEBPACK_IMPORTED_MODULE_6__["commands"], req.data, src));

  if (commandsToSync.includes(cmd) || res && commandsToSyncIfTruthy.includes(cmd)) {
    _sync__WEBPACK_IMPORTED_MODULE_5__["sync"]();
  } // `undefined` is not transferable, but `null` is


  return res != null ? res : null;
}

function autoUpdate() {
  const interval = _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["IS_DEV"] ? 1000 : (+Object(_utils_options__WEBPACK_IMPORTED_MODULE_9__["getOption"])('autoUpdate') || 0) * _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["TIMEOUT_24HOURS"];
  if (!interval) return;
  let elapsed = Date.now() - Object(_utils_options__WEBPACK_IMPORTED_MODULE_9__["getOption"])('lastUpdate');

  if (elapsed >= interval) {
    handleCommandMessage({
      cmd: 'CheckUpdateAll'
    });
    elapsed = 0;
  }

  clearTimeout(autoUpdate.timer);
  autoUpdate.timer = setTimeout(autoUpdate, Math.min(_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["TIMEOUT_MAX"], interval - elapsed));
}

async function initBuildin() {
  const {
    data
  } = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["request"])(_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["BUILD_IN_SCRIPT_SRC"], {
    cache: 'no-cache',
    headers: {
      Accept: 'text/x-userscript-meta,*/*'
    }
  });
  const res = await _utils__WEBPACK_IMPORTED_MODULE_6__["commands"].ParseScript({
    url: _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["BUILD_IN_SCRIPT_SRC"],
    code: data,
    custom: {
      buildIn: true
    }
  });
  _sync__WEBPACK_IMPORTED_MODULE_5__["sync"]();

  if (res.where.id !== 1) {
    throw `wrong id: ${res.where.id}`;
  }
}

Object(_utils_init__WEBPACK_IMPORTED_MODULE_8__["initialize"])(() => {
  global.handleCommandMessage = handleCommandMessage;
  global.deepCopy = _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__["deepCopy"];
  browser.runtime.onMessage.addListener(IS_FIREFOX // in FF a rejected Promise value is transferred only if it's an Error object
  ? (...args) => handleCommandMessage(...args).catch(e => Promise.reject(e instanceof Error ? e : new Error(e))) // Didn't use `throw` to avoid interruption in devtools with pause-on-exception enabled.
  : handleCommandMessage); // check and install the build-in script
  // initBuildin();
  // console.info('initBuildin...');

  setTimeout(autoUpdate, _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["IS_DEV"] ? 1 : 2e4);
  _sync__WEBPACK_IMPORTED_MODULE_5__["initialize"]();
  Object(_utils_db__WEBPACK_IMPORTED_MODULE_7__["checkRemove"])();
  setInterval(_utils_db__WEBPACK_IMPORTED_MODULE_7__["checkRemove"], _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["TIMEOUT_24HOURS"]);
  const api = global.chrome.declarativeContent;

  if (api) {
    // Using declarativeContent to run content scripts earlier than document_start
    api.onPageChanged.getRules(async ([rule]) => {
      const id = rule == null ? void 0 : rule.id;
      const newId = "Violentmonkey:ZMvBNCNAdC4=";

      if (id === newId) {
        return;
      }

      if (id) {
        await browser.declarativeContent.onPageChanged.removeRules([id]);
      }

      api.onPageChanged.addRules([{
        id: newId,
        conditions: [new api.PageStateMatcher({
          pageUrl: {
            urlContains: '://'
          } // essentially like <all_urls>

        })],
        actions: [new api.RequestContentScript({
          js: browser.runtime.getManifest().content_scripts[0].js // Not using `allFrames:true` as there's no improvement in frames

        })]
      }]);
    });
  }
});

/***/ }),

/***/ "./src/background/plugin/events.js":
/*!*****************************************!*\
  !*** ./src/background/plugin/events.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/events */ "./src/common/events.js");

/* harmony default export */ __webpack_exports__["default"] = (new _Users_ZhaoJun_Desktop_violentmonkey_src_common_events__WEBPACK_IMPORTED_MODULE_0__["default"](['scriptEdit', 'scriptChanged']));

/***/ }),

/***/ "./src/background/plugin/index.js":
/*!****************************************!*\
  !*** ./src/background/plugin/index.js ***!
  \****************************************/
/*! exports provided: script */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "script", function() { return script; });
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/message */ "./src/background/utils/message.js");
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/db */ "./src/background/utils/db.js");


const script = {
  /**
   * Update an existing script identified by the provided id
   * @param {{ id, code, message, isNew, config, custom, props, update }} data
   * @return {Promise<{ isNew?, update, where }>}
   */
  update: _utils_message__WEBPACK_IMPORTED_MODULE_0__["commands"].ParseScript,

  /**
   * List all available scripts, without script code
   * @return {Promise<VMScript[]>}
   */
  list: async () => Object(_utils_db__WEBPACK_IMPORTED_MODULE_1__["getScripts"])(),

  /**
   * Get script code of an existing script
   * @param {number} id
   * @return {Promise<string>}
   */
  get: _utils_message__WEBPACK_IMPORTED_MODULE_0__["commands"].GetScriptCode,

  /**
   * Remove script
   * @param {number} id
   * @return {Promise<void>}
   */
  remove: id => _utils_message__WEBPACK_IMPORTED_MODULE_0__["commands"].MarkRemoved({
    id,
    removed: true
  })
};

/***/ }),

/***/ "./src/background/sync/base.js":
/*!*************************************!*\
  !*** ./src/background/sync/base.js ***!
  \*************************************/
/*! exports provided: getItemFilename, isScriptFile, getURI, getStates, BaseService, register, initialize, sync, authorize, revoke, setConfig, openAuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemFilename", function() { return getItemFilename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScriptFile", function() { return isScriptFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getURI", function() { return getURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStates", function() { return getStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sync", function() { return sync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return authorize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revoke", function() { return revoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConfig", function() { return setConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAuthPage", function() { return openAuthPage; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/background/utils/index.js");
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/db */ "./src/background/utils/db.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plugin */ "./src/background/plugin/index.js");






const serviceNames = [];
const serviceClasses = [];
const services = {};
const autoSync = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["debounce"])(sync, _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_HOUR"]);
let working = Promise.resolve();
let syncConfig;
function getItemFilename({
  name,
  uri
}) {
  // When get or remove, current name should be prefered
  if (name) return name; // otherwise uri derived name should be prefered
  // uri is already encoded by `encodeFilename`

  return `vm@2-${uri}`;
}
function isScriptFile(name) {
  return /^vm(?:@\d+)?-/.test(name);
}
function getURI(name) {
  const i = name.indexOf('-');
  const [, version] = name.slice(0, i).split('@');

  if (version === '2') {
    // uri is encoded by `encodedFilename`, so we should not decode it here
    return name.slice(i + 1);
  }

  try {
    return decodeURIComponent(name.slice(3));
  } catch (err) {
    return name.slice(3);
  }
}

function initConfig() {
  function get(key, def) {
    const keys = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["normalizeKeys"])(key);
    keys.unshift('sync');
    return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getOption"])(keys, def);
  }

  function set(key, value) {
    const keys = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["normalizeKeys"])(key);
    keys.unshift('sync');
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setOption"])(keys, value);
  }

  function init() {
    let config = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getOption"])('sync');

    if (!config || !config.services) {
      config = {
        services: {}
      };
      set([], config);
    }
  }

  init();
  return {
    get,
    set
  };
}

function serviceConfig(name) {
  function getKeys(key) {
    const keys = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["normalizeKeys"])(key);
    keys.unshift('services', name);
    return keys;
  }

  function get(key, def) {
    return syncConfig.get(getKeys(key), def);
  }

  function set(key, val) {
    if (typeof key === 'object') {
      safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["forEachEntry"], key, ([k, v]) => {
        syncConfig.set(getKeys(k), v);
      });
    } else {
      syncConfig.set(getKeys(key), val);
    }
  }

  function clear() {
    syncConfig.set(getKeys(), {});
  }

  return {
    get,
    set,
    clear
  };
}

function serviceState(validStates, initialState, onChange) {
  let state = initialState || validStates[0];

  function get() {
    return state;
  }

  function set(newState) {
    if (validStates.includes(newState)) {
      state = newState;
      if (onChange) onChange();
    } else {
      console.warn('Invalid state:', newState);
    }

    return get();
  }

  function is(states) {
    return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["ensureArray"])(states).includes(state);
  }

  return {
    get,
    set,
    is
  };
}

function getStates() {
  return serviceNames.map(name => {
    const service = services[name];
    return {
      name: service.name,
      displayName: service.displayName,
      authState: service.authState.get(),
      syncState: service.syncState.get(),
      lastSync: service.config.get('meta', {}).lastSync,
      progress: service.progress,
      properties: service.properties,
      userConfig: service.getUserConfig()
    };
  });
}

function getScriptData(script, syncVersion, extra) {
  let data;

  if (syncVersion === 2) {
    data = {
      version: syncVersion,
      custom: script.custom,
      config: script.config,
      props: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["objectPick"])(script.props, ['lastUpdated'])
    };
  } else if (syncVersion === 1) {
    data = {
      version: syncVersion,
      more: {
        custom: script.custom,
        enabled: script.config.enabled,
        update: script.config.shouldUpdate,
        lastUpdated: script.props.lastUpdated
      }
    };
  }

  return Object.assign(data, extra);
}

function parseScriptData(raw) {
  const data = {};

  try {
    const obj = JSON.parse(raw);
    data.code = obj.code;

    if (obj.version === 2) {
      data.config = obj.config;
      data.custom = obj.custom;
      data.props = obj.props;
    } else if (obj.version === 1) {
      if (obj.more) {
        data.custom = obj.more.custom;
        data.config = objectPurify({
          enabled: obj.more.enabled,
          shouldUpdate: obj.more.update
        });
        data.props = objectPurify({
          lastUpdated: obj.more.lastUpdated
        });
      }
    }
  } catch (e) {
    data.code = raw;
  }

  return data;
}

function objectPurify(obj) {
  // Remove keys with undefined values
  if (Array.isArray(obj)) {
    obj.forEach(objectPurify);
  } else if (obj && typeof obj === 'object') {
    safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["forEachEntry"], obj, ([key, value]) => {
      if (typeof value === 'undefined') delete obj[key];else objectPurify(value);
    });
  }

  return obj;
}

function serviceFactory(base) {
  const Service = function constructor() {
    this.initialize();
  };

  Service.prototype = base;
  Service.extend = extendService;
  return Service;
}

function extendService(options) {
  return serviceFactory(Object.assign(Object.create(this.prototype), options));
}

const onStateChange = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["debounce"])(() => {
  Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["sendCmd"])('UpdateSync', getStates());
});
const BaseService = serviceFactory({
  name: 'base',
  displayName: 'BaseService',
  delayTime: 1000,
  urlPrefix: '',
  metaFile: 'Violentmonkey',
  properties: {
    authType: 'oauth'
  },
  getUserConfig: _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["noop"],
  setUserConfig: _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["noop"],

  initialize() {
    this.progress = {
      finished: 0,
      total: 0
    };
    this.config = serviceConfig(this.name);
    this.authState = serviceState(['idle', 'no-auth', 'initializing', 'authorizing', // in case some services require asynchronous requests to get access_tokens
    'authorized', 'unauthorized', 'error'], null, onStateChange);
    this.syncState = serviceState(['idle', 'ready', 'syncing', 'error'], null, onStateChange);
    this.lastFetch = Promise.resolve();
    this.startSync = this.syncFactory();
    const events = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getEventEmitter"])();
    ['on', 'off', 'fire'].forEach(key => {
      this[key] = (...args) => {
        events[key](...args);
      };
    });
  },

  log(...args) {
    console.log(...args); // eslint-disable-line no-console
  },

  syncFactory() {
    let promise;
    let debouncedResolve;

    const shouldSync = () => this.authState.is('authorized') && getCurrent() === this.name;

    const getReady = () => {
      if (!shouldSync()) return Promise.resolve();
      this.log('Ready to sync:', this.displayName);
      this.syncState.set('ready');
      working = working.then(() => new Promise(resolve => {
        debouncedResolve = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["debounce"])(resolve, 10 * 1000);
        debouncedResolve();
      })).then(() => {
        if (shouldSync()) return this.sync();
        this.syncState.set('idle');
      }).catch(err => {
        console.error(err);
      }).then(() => {
        promise = null;
        debouncedResolve = null;
      });
      promise = working;
    };

    function startSync() {
      if (!promise) getReady();
      if (debouncedResolve) debouncedResolve();
      return promise;
    }

    return startSync;
  },

  prepareHeaders() {
    this.headers = {};
  },

  prepare() {
    this.authState.set('initializing');
    return (this.initToken() ? Promise.resolve(this.user()) : Promise.reject({
      type: 'no-auth'
    })).then(() => {
      this.authState.set('authorized');
    }, err => {
      if (['no-auth', 'unauthorized'].includes(err == null ? void 0 : err.type)) {
        this.authState.set(err.type);
      } else {
        console.error(err);
        this.authState.set('error');
      }

      this.syncState.set('idle');
      throw err;
    });
  },

  checkSync() {
    return this.prepare().then(() => this.startSync());
  },

  user: _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["noop"],
  acquireLock: _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["noop"],
  releaseLock: _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["noop"],

  handleMetaError(err) {
    throw err;
  },

  getMeta() {
    return this.get({
      name: this.metaFile
    }).then(data => JSON.parse(data)).catch(err => this.handleMetaError(err)).then(data => ({
      name: this.metaFile,
      data
    }));
  },

  initToken() {
    this.prepareHeaders();
    const token = this.config.get('token');
    this.headers.Authorization = token ? `Bearer ${token}` : null;
    return !!token;
  },

  loadData(options) {
    const {
      progress
    } = this;
    const {
      delay = this.delayTime
    } = options;
    let lastFetch = Promise.resolve();

    if (delay) {
      lastFetch = this.lastFetch.then(ts => Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["makePause"])(delay - (Date.now() - ts))).then(() => Date.now());
      this.lastFetch = lastFetch;
    }

    progress.total += 1;
    onStateChange();
    return lastFetch.then(() => {
      var _options$prefix;

      options = Object.assign({}, options);
      options.headers = Object.assign({}, this.headers, options.headers);
      let {
        url
      } = options;
      if (url.startsWith('/')) url = ((_options$prefix = options.prefix) != null ? _options$prefix : this.urlPrefix) + url;
      return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["request"])(url, options);
    }).then(({
      data
    }) => ({
      data
    }), error => ({
      error
    })).then(({
      data,
      error
    }) => {
      progress.finished += 1;
      onStateChange();
      if (error) return Promise.reject(error);
      return data;
    });
  },

  getLocalData() {
    return _plugin__WEBPACK_IMPORTED_MODULE_5__["script"].list();
  },

  getSyncData() {
    return this.getMeta().then(remoteMeta => Promise.all([remoteMeta, this.list(), this.getLocalData()]));
  },

  sync() {
    this.progress = {
      finished: 0,
      total: 0
    };
    this.syncState.set('syncing'); // Avoid simultaneous requests

    return this.prepare().then(() => this.getSyncData()).then(data => Promise.resolve(this.acquireLock()).then(() => data)).then(([remoteMeta, remoteData, localData]) => {
      const remoteMetaData = remoteMeta.data || {};
      const remoteMetaInfo = remoteMetaData.info || {};
      const remoteTimestamp = remoteMetaData.timestamp || 0;
      let remoteChanged = !remoteTimestamp || Object.keys(remoteMetaInfo).length !== remoteData.length;
      const now = Date.now();
      const globalLastModified = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getOption"])('lastModified');
      const remoteItemMap = {};
      const localMeta = this.config.get('meta', {});
      const firstSync = !localMeta.timestamp;
      const outdated = firstSync || remoteTimestamp > localMeta.timestamp;
      this.log('First sync:', firstSync);
      this.log('Outdated:', outdated, '(', 'local:', localMeta.timestamp, 'remote:', remoteTimestamp, ')');
      const putLocal = [];
      const putRemote = [];
      const delRemote = [];
      const delLocal = [];
      const updateLocal = [];
      remoteMetaData.info = remoteData.reduce((info, item) => {
        remoteItemMap[item.uri] = item;
        let itemInfo = remoteMetaInfo[item.uri];

        if (!itemInfo) {
          itemInfo = {};
          remoteChanged = true;
        }

        info[item.uri] = itemInfo;

        if (!itemInfo.modified) {
          itemInfo.modified = now;
          remoteChanged = true;
        }

        return info;
      }, {});
      localData.forEach(item => {
        const {
          props: {
            uri,
            position,
            lastModified
          }
        } = item;
        const remoteInfo = remoteMetaData.info[uri];
        const remoteItem = remoteItemMap[uri];

        if (remoteInfo && remoteItem) {
          if (firstSync || !lastModified || remoteInfo.modified > lastModified) {
            putLocal.push({
              local: item,
              remote: remoteItem,
              info: remoteInfo
            });
          } else {
            if (remoteInfo.modified < lastModified) {
              putRemote.push({
                local: item,
                remote: remoteItem
              });
              remoteInfo.modified = lastModified;
              remoteChanged = true;
            }

            if (remoteInfo.position !== position) {
              if (remoteInfo.position && globalLastModified <= remoteTimestamp) {
                updateLocal.push({
                  local: item,
                  remote: remoteItem,
                  info: remoteInfo
                });
              } else {
                remoteInfo.position = position;
                remoteChanged = true;
              }
            }
          }

          delete remoteItemMap[uri];
        } else if (firstSync || !outdated || lastModified > remoteTimestamp) {
          putRemote.push({
            local: item
          });
        } else {
          delLocal.push({
            local: item
          });
        }
      });
      safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["forEachEntry"], remoteItemMap, ([uri, item]) => {
        const info = remoteMetaData.info[uri];

        if (outdated) {
          putLocal.push({
            remote: item,
            info
          });
        } else {
          delRemote.push({
            remote: item
          });
        }
      });
      const promiseQueue = [...putLocal.map(({
        remote,
        info
      }) => {
        this.log('Download script:', remote.uri);
        return this.get(remote).then(raw => {
          const data = parseScriptData(raw); // Invalid data

          if (!data.code) return;
          if (info.modified) Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["objectSet"])(data, 'props.lastModified', info.modified);
          const position = +info.position;
          if (position) data.position = position;

          if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getOption"])('syncScriptStatus') && data.config) {
            delete data.config.enabled;
          }

          return _plugin__WEBPACK_IMPORTED_MODULE_5__["script"].update(data);
        });
      }), ...putRemote.map(({
        local,
        remote
      }) => {
        this.log('Upload script:', local.props.uri);
        return _plugin__WEBPACK_IMPORTED_MODULE_5__["script"].get(local.props.id).then(code => {
          // XXX use version 1 to be compatible with Violentmonkey on other platforms
          const data = getScriptData(local, 1, {
            code
          });
          remoteMetaData.info[local.props.uri] = {
            modified: local.props.lastModified,
            position: local.props.position
          };
          remoteChanged = true;
          return this.put(Object.assign({}, remote, {
            uri: local.props.uri,
            name: null // prefer using uri on PUT

          }), JSON.stringify(data));
        });
      }), ...delRemote.map(({
        remote
      }) => {
        this.log('Remove remote script:', remote.uri);
        delete remoteMetaData.info[remote.uri];
        remoteChanged = true;
        return this.remove(remote);
      }), ...delLocal.map(({
        local
      }) => {
        this.log('Remove local script:', local.props.uri);
        return _plugin__WEBPACK_IMPORTED_MODULE_5__["script"].remove(local.props.id);
      }), ...updateLocal.map(({
        local,
        info
      }) => {
        const updates = {};

        if (info.position) {
          updates.props = {
            position: info.position
          };
        }

        return Object(_utils_db__WEBPACK_IMPORTED_MODULE_4__["updateScriptInfo"])(local.props.id, updates);
      })];
      promiseQueue.push(Promise.all(promiseQueue).then(() => Object(_utils_db__WEBPACK_IMPORTED_MODULE_4__["sortScripts"])()).then(changed => {
        if (!changed) return;
        remoteChanged = true;
        return _plugin__WEBPACK_IMPORTED_MODULE_5__["script"].list().then(scripts => {
          scripts.forEach(script => {
            const remoteInfo = remoteMetaData.info[script.props.uri];
            if (remoteInfo) remoteInfo.position = script.props.position;
          });
        });
      }));
      promiseQueue.push(Promise.all(promiseQueue).then(() => {
        const promises = [];

        if (remoteChanged) {
          remoteMetaData.timestamp = Date.now();
          promises.push(this.put(remoteMeta, JSON.stringify(remoteMetaData)));
        }

        localMeta.timestamp = remoteMetaData.timestamp;
        localMeta.lastSync = Date.now();
        this.config.set('meta', localMeta);
        return Promise.all(promises);
      })); // ignore errors to ensure all promises are fulfilled

      return Promise.all(promiseQueue.map(promise => promise.then(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["noop"], err => err || true))).then(errors => errors.filter(Boolean)).then(errors => {
        if (errors.length) throw errors;
      });
    }).then(() => {
      this.syncState.set('idle');
      this.log('Sync finished:', this.displayName);
    }, err => {
      this.syncState.set('error');
      this.log('Failed syncing:', this.displayName);
      this.log(err);
    }).then(() => Promise.resolve(this.releaseLock()).catch(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["noop"]));
  }

});
function register(Factory) {
  serviceClasses.push(Factory);
}

function getCurrent() {
  return syncConfig.get('current');
}

function getService(name) {
  return services[name || getCurrent()];
}

function initialize() {
  if (!syncConfig) {
    syncConfig = initConfig();
    serviceClasses.forEach(Factory => {
      const service = new Factory();
      const {
        name
      } = service;
      serviceNames.push(name);
      services[name] = service;
    });
  }

  sync();
}

function syncOne(service) {
  if (service.syncState.is(['ready', 'syncing'])) return;
  if (service.authState.is(['idle', 'error'])) return service.checkSync();
  if (service.authState.is('authorized')) return service.startSync();
}

function sync() {
  const service = getService();
  return service && Promise.resolve(syncOne(service)).then(autoSync);
}
function authorize() {
  const service = getService();
  if (service) service.authorize();
}
function revoke() {
  const service = getService();
  if (service) service.revoke();
}
function setConfig(config) {
  const service = getService();

  if (service) {
    service.setUserConfig(config);
    return service.checkSync();
  }
}
async function openAuthPage(url, redirectUri) {
  unregisterWebRequest(); // otherwise our new tabId will be ignored

  browser.webRequest.onBeforeRequest.addListener(onBeforeRequest, {
    urls: [`${redirectUri}*`],
    types: ['main_frame'],
    tabId: (await browser.tabs.create({
      url
    })).id
  }, ['blocking']);
}
/**
 * @param {chrome.webRequest.WebResponseDetails} info
 * @returns {chrome.webRequest.BlockingResponse}
 */

function onBeforeRequest(info) {
  var _getService$checkAuth, _getService;

  if ((_getService$checkAuth = (_getService = getService()).checkAuth) == null ? void 0 : _getService$checkAuth.call(_getService, info.url)) {
    browser.tabs.remove(info.tabId); // If we unregister without setTimeout, API will ignore { cancel: true }

    setTimeout(unregisterWebRequest, 0);
    return {
      cancel: true
    };
  }
}

function unregisterWebRequest() {
  browser.webRequest.onBeforeRequest.removeListener(onBeforeRequest);
}

Object(_utils__WEBPACK_IMPORTED_MODULE_3__["hookOptions"])(data => {
  const value = data == null ? void 0 : data['sync.current'];
  if (value) initialize();
});

/***/ }),

/***/ "./src/background/sync/dropbox.js":
/*!****************************************!*\
  !*** ./src/background/sync/dropbox.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/background/utils/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/background/sync/base.js");


const config = {
  client_id: 'f0q12zup2uys5w8',
  redirect_uri: 'https://violentmonkey.github.io/auth_dropbox.html'
};
const escRE = /[\u007f-\uffff]/g; // eslint-disable-line no-control-regex

const escFunc = m => `\\u${(m.charCodeAt(0) + 0x10000).toString(16).slice(1)}`;

function jsonStringifySafe(obj) {
  const string = JSON.stringify(obj);
  return string.replace(escRE, escFunc);
}

const Dropbox = _base__WEBPACK_IMPORTED_MODULE_1__["BaseService"].extend({
  name: 'dropbox',
  displayName: 'Dropbox',

  user() {
    return this.loadData({
      method: 'POST',
      url: 'https://api.dropboxapi.com/2/users/get_current_account'
    }).catch(err => {
      if (err.status === 401) {
        return Promise.reject({
          type: 'unauthorized'
        });
      }

      return Promise.reject({
        type: 'error',
        data: err
      });
    });
  },

  handleMetaError(res) {
    if (res.status !== 409) throw res;
  },

  list() {
    return this.loadData({
      method: 'POST',
      url: 'https://api.dropboxapi.com/2/files/list_folder',
      body: {
        path: ''
      },
      responseType: 'json'
    }).then(data => data.entries.filter(item => item['.tag'] === 'file' && Object(_base__WEBPACK_IMPORTED_MODULE_1__["isScriptFile"])(item.name)).map(normalize));
  },

  get(item) {
    const name = Object(_base__WEBPACK_IMPORTED_MODULE_1__["getItemFilename"])(item);
    return this.loadData({
      method: 'POST',
      url: 'https://content.dropboxapi.com/2/files/download',
      headers: {
        'Dropbox-API-Arg': jsonStringifySafe({
          path: `/${name}`
        })
      }
    });
  },

  put(item, data) {
    const name = Object(_base__WEBPACK_IMPORTED_MODULE_1__["getItemFilename"])(item);
    return this.loadData({
      method: 'POST',
      url: 'https://content.dropboxapi.com/2/files/upload',
      headers: {
        'Dropbox-API-Arg': jsonStringifySafe({
          path: `/${name}`,
          mode: 'overwrite'
        }),
        'Content-Type': 'application/octet-stream'
      },
      body: data,
      responseType: 'json'
    }).then(normalize);
  },

  remove(item) {
    const name = Object(_base__WEBPACK_IMPORTED_MODULE_1__["getItemFilename"])(item);
    return this.loadData({
      method: 'POST',
      url: 'https://api.dropboxapi.com/2/files/delete',
      body: {
        path: `/${name}`
      },
      responseType: 'json'
    }).then(normalize);
  },

  authorize() {
    const params = {
      response_type: 'token',
      client_id: config.client_id,
      redirect_uri: config.redirect_uri
    };
    const url = `https://www.dropbox.com/oauth2/authorize?${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["dumpQuery"])(params)}`;
    Object(_base__WEBPACK_IMPORTED_MODULE_1__["openAuthPage"])(url, config.redirect_uri);
  },

  authorized(raw) {
    const data = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["loadQuery"])(raw);

    if (data.access_token) {
      this.config.set({
        uid: data.uid,
        token: data.access_token
      });
    }
  },

  checkAuth(url) {
    const redirectUri = `${config.redirect_uri}#`;

    if (url.startsWith(redirectUri)) {
      this.authorized(url.slice(redirectUri.length));
      this.checkSync();
      return true;
    }
  },

  revoke() {
    this.config.set({
      uid: null,
      token: null
    });
    return this.prepare();
  }

});
Object(_base__WEBPACK_IMPORTED_MODULE_1__["register"])(Dropbox);

function normalize(item) {
  return {
    name: item.name,
    size: item.size,
    uri: Object(_base__WEBPACK_IMPORTED_MODULE_1__["getURI"])(item.name) // modified: new Date(item.server_modified).getTime(),
    // isDeleted: item.is_deleted,

  };
}

/***/ }),

/***/ "./src/background/sync/googledrive.js":
/*!********************************************!*\
  !*** ./src/background/sync/googledrive.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/background/utils/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./src/background/sync/base.js");
// Reference:
// - https://developers.google.com/drive/v3/reference/files
// - https://github.com/google/google-api-nodejs-client




const config = {
  client_id: undefined,
  client_secret: undefined,
  redirect_uri: 'https://violentmonkey.github.io/auth_googledrive.html',
  scope: 'https://www.googleapis.com/auth/drive.appdata'
};
const UNAUTHORIZED = {
  status: 'UNAUTHORIZED'
};
const GoogleDrive = _base__WEBPACK_IMPORTED_MODULE_3__["BaseService"].extend({
  name: 'googledrive',
  displayName: 'Google Drive',
  urlPrefix: 'https://www.googleapis.com/drive/v3',

  refreshToken() {
    const refreshToken = this.config.get('refresh_token');
    if (!refreshToken) return Promise.reject({
      type: 'unauthorized'
    });
    return this.authorized({
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    }).then(() => this.prepare());
  },

  user() {
    const requestUser = () => this.loadData({
      url: `https://www.googleapis.com/oauth2/v3/tokeninfo?${Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dumpQuery"])({
        access_token: this.config.get('token')
      })}`,
      responseType: 'json'
    });

    return requestUser().then(info => {
      // If access was granted with access_type=online, revoke it.
      if (info.access_type === 'online') {
        return this.loadData({
          method: 'POST',
          url: `https://accounts.google.com/o/oauth2/revoke?token=${this.config.get('token')}`,
          prefix: '',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(() => {
          Object(_utils__WEBPACK_IMPORTED_MODULE_2__["notify"])({
            title: 'Sync Upgraded',
            body: 'Please reauthorize access to your Google Drive to complete the upgradation.'
          });
          return Promise.reject('Online access revoked.');
        });
      }

      if (info.scope !== config.scope) return Promise.reject(UNAUTHORIZED);
    }).catch(res => {
      if (res === UNAUTHORIZED || res.status === 400 && Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectGet"])(res, 'data.error_description') === 'Invalid Value') {
        return this.refreshToken().then(requestUser);
      }

      return Promise.reject({
        type: 'error',
        data: res
      });
    });
  },

  getSyncData() {
    const params = {
      spaces: 'appDataFolder',
      fields: 'files(id,name,size)'
    };
    return this.loadData({
      url: `/files?${Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dumpQuery"])(params)}`,
      responseType: 'json'
    }).then(({
      files
    }) => {
      let metaFile;
      const remoteData = files.filter(item => {
        if (Object(_base__WEBPACK_IMPORTED_MODULE_3__["isScriptFile"])(item.name)) return true;

        if (!metaFile && item.name === this.metaFile) {
          metaFile = item;
        } else {
          this.remove(item);
        }

        return false;
      }).map(normalize).filter(item => {
        if (!item.size) {
          this.remove(item);
          return false;
        }

        return true;
      });
      const metaItem = metaFile ? normalize(metaFile) : {};
      const gotMeta = this.get(metaItem).then(data => JSON.parse(data)).catch(err => this.handleMetaError(err)).then(data => Object.assign({}, metaItem, {
        name: this.metaFile,
        uri: null,
        data
      }));
      return Promise.all([gotMeta, remoteData, this.getLocalData()]);
    });
  },

  authorize() {
    const params = {
      response_type: 'code',
      access_type: 'offline',
      client_id: config.client_id,
      redirect_uri: config.redirect_uri,
      scope: config.scope
    };
    if (!this.config.get('refresh_token')) params.prompt = 'consent';
    const url = `https://accounts.google.com/o/oauth2/v2/auth?${Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dumpQuery"])(params)}`;
    Object(_base__WEBPACK_IMPORTED_MODULE_3__["openAuthPage"])(url, config.redirect_uri);
  },

  checkAuth(url) {
    const redirectUri = `${config.redirect_uri}?code=`;

    if (url.startsWith(redirectUri)) {
      this.authState.set('authorizing');
      this.authorized({
        code: decodeURIComponent(url.split('#')[0].slice(redirectUri.length))
      }).then(() => this.checkSync());
      return true;
    }
  },

  revoke() {
    this.config.set({
      token: null,
      refresh_token: null
    });
    return this.prepare();
  },

  authorized(params) {
    return this.loadData({
      method: 'POST',
      url: 'https://www.googleapis.com/oauth2/v4/token',
      prefix: '',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dumpQuery"])(Object.assign({}, {
        client_id: config.client_id,
        client_secret: config.client_secret,
        redirect_uri: config.redirect_uri,
        grant_type: 'authorization_code'
      }, params)),
      responseType: 'json'
    }).then(data => {
      if (data.access_token) {
        const update = {
          token: data.access_token
        };

        if (data.refresh_token) {
          update.refresh_token = data.refresh_token;
        }

        this.config.set(update);
      } else {
        throw data;
      }
    });
  },

  handleMetaError: _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["noop"],

  list() {
    throw new Error('Not supported');
  },

  get({
    id
  }) {
    if (!id) return Promise.reject();
    return this.loadData({
      url: `/files/${id}?alt=media`
    });
  },

  put(item, data) {
    const name = Object(_base__WEBPACK_IMPORTED_MODULE_3__["getItemFilename"])(item);
    const {
      id
    } = item;
    const boundary = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["getUniqId"])('violentmonkey-is-great-');
    const headers = {
      'Content-Type': `multipart/related; boundary=${boundary}`
    };
    const metadata = id ? {
      name
    } : {
      name,
      parents: ['appDataFolder']
    };
    const body = [`--${boundary}`, 'Content-Type: application/json; charset=UTF-8', '', JSON.stringify(metadata), `--${boundary}`, 'Content-Type: text/plain', '', data, `--${boundary}--`, ''].join('\r\n');
    const url = id ? `https://www.googleapis.com/upload/drive/v3/files/${id}?uploadType=multipart` : 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
    return this.loadData({
      url,
      body,
      headers,
      method: id ? 'PATCH' : 'POST'
    });
  },

  remove({
    id
  }) {
    return this.loadData({
      method: 'DELETE',
      url: `/files/${id}`
    });
  }

});
Object(_base__WEBPACK_IMPORTED_MODULE_3__["register"])(GoogleDrive);

function normalize(item) {
  return {
    id: item.id,
    name: item.name,
    size: +item.size,
    uri: Object(_base__WEBPACK_IMPORTED_MODULE_3__["getURI"])(item.name)
  };
}

/***/ }),

/***/ "./src/background/sync/index.js":
/*!**************************************!*\
  !*** ./src/background/sync/index.js ***!
  \**************************************/
/*! exports provided: initialize, sync, getStates, authorize, revoke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/background/sync/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["initialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sync", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["sync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStates", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["getStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["authorize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revoke", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["revoke"]; });

/* harmony import */ var _dropbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropbox */ "./src/background/sync/dropbox.js");
/* harmony import */ var _onedrive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onedrive */ "./src/background/sync/onedrive.js");
/* harmony import */ var _googledrive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./googledrive */ "./src/background/sync/googledrive.js");
/* harmony import */ var _webdav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webdav */ "./src/background/sync/webdav.js");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/message */ "./src/background/utils/message.js");






Object.assign(_utils_message__WEBPACK_IMPORTED_MODULE_5__["commands"], {
  SyncAuthorize: _base__WEBPACK_IMPORTED_MODULE_0__["authorize"],
  SyncRevoke: _base__WEBPACK_IMPORTED_MODULE_0__["revoke"],
  SyncStart: _base__WEBPACK_IMPORTED_MODULE_0__["sync"],
  SyncSetConfig: _base__WEBPACK_IMPORTED_MODULE_0__["setConfig"]
});


/***/ }),

/***/ "./src/background/sync/onedrive.js":
/*!*****************************************!*\
  !*** ./src/background/sync/onedrive.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/background/utils/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./src/background/sync/base.js");
// Reference: https://dev.onedrive.com/README.htm




const config = {
  client_id: undefined,
  client_secret: undefined,
  redirect_uri: 'https://violentmonkey.github.io/auth_onedrive.html'
};
const OneDrive = _base__WEBPACK_IMPORTED_MODULE_3__["BaseService"].extend({
  name: 'onedrive',
  displayName: 'OneDrive',
  urlPrefix: 'https://api.onedrive.com/v1.0',

  refreshToken() {
    const refreshToken = this.config.get('refresh_token');
    return this.authorized({
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    }).then(() => this.prepare());
  },

  user() {
    const requestUser = () => this.loadData({
      url: '/drive',
      responseType: 'json'
    });

    return requestUser().catch(res => {
      if (res.status === 401) {
        return this.refreshToken().then(requestUser);
      }

      throw res;
    }).catch(res => {
      if (res.status === 400 && Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectGet"])(res, 'data.error') === 'invalid_grant') {
        return Promise.reject({
          type: 'unauthorized'
        });
      }

      return Promise.reject({
        type: 'error',
        data: res
      });
    });
  },

  handleMetaError(res) {
    if (res.status === 404) {
      var _res$headers$get;

      const header = ((_res$headers$get = res.headers.get('WWW-Authenticate')) == null ? void 0 : _res$headers$get[0]) || '';

      if (/^Bearer realm="OneDriveAPI"/.test(header)) {
        return this.refreshToken().then(() => this.getMeta());
      }

      return;
    }

    throw res;
  },

  list() {
    return this.loadData({
      url: '/drive/special/approot/children',
      responseType: 'json'
    }).then(data => data.value.filter(item => item.file && Object(_base__WEBPACK_IMPORTED_MODULE_3__["isScriptFile"])(item.name)).map(normalize));
  },

  get(item) {
    const name = Object(_base__WEBPACK_IMPORTED_MODULE_3__["getItemFilename"])(item);
    return this.loadData({
      url: `/drive/special/approot:/${encodeURIComponent(name)}`,
      responseType: 'json'
    }).then(data => this.loadData({
      url: data['@content.downloadUrl'],
      delay: false
    }));
  },

  put(item, data) {
    const name = Object(_base__WEBPACK_IMPORTED_MODULE_3__["getItemFilename"])(item);
    return this.loadData({
      method: 'PUT',
      url: `/drive/special/approot:/${encodeURIComponent(name)}:/content`,
      headers: {
        'Content-Type': 'application/octet-stream'
      },
      body: data,
      responseType: 'json'
    }).then(normalize);
  },

  remove(item) {
    // return 204
    const name = Object(_base__WEBPACK_IMPORTED_MODULE_3__["getItemFilename"])(item);
    return this.loadData({
      method: 'DELETE',
      url: `/drive/special/approot:/${encodeURIComponent(name)}`
    }).catch(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
  },

  authorize() {
    const params = {
      client_id: config.client_id,
      scope: 'onedrive.appfolder wl.offline_access',
      response_type: 'code',
      redirect_uri: config.redirect_uri
    };
    const url = `https://login.live.com/oauth20_authorize.srf?${Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dumpQuery"])(params)}`;
    Object(_base__WEBPACK_IMPORTED_MODULE_3__["openAuthPage"])(url, config.redirect_uri);
  },

  checkAuth(url) {
    const redirectUri = `${config.redirect_uri}?code=`;

    if (url.startsWith(redirectUri)) {
      this.authState.set('authorizing');
      this.authorized({
        code: url.slice(redirectUri.length)
      }).then(() => this.checkSync());
      return true;
    }
  },

  revoke() {
    this.config.set({
      uid: null,
      token: null,
      refresh_token: null
    });
    return this.prepare();
  },

  authorized(params) {
    return this.loadData({
      method: 'POST',
      url: 'https://login.live.com/oauth20_token.srf',
      prefix: '',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dumpQuery"])(Object.assign({}, {
        client_id: config.client_id,
        client_secret: config.client_secret,
        redirect_uri: config.redirect_uri,
        grant_type: 'authorization_code'
      }, params)),
      responseType: 'json'
    }).then(data => {
      if (data.access_token) {
        this.config.set({
          uid: data.user_id,
          token: data.access_token,
          refresh_token: data.refresh_token
        });
      } else {
        throw data;
      }
    });
  }

});
Object(_base__WEBPACK_IMPORTED_MODULE_3__["register"])(OneDrive);

function normalize(item) {
  return {
    name: item.name,
    size: item.size,
    uri: Object(_base__WEBPACK_IMPORTED_MODULE_3__["getURI"])(item.name) // modified: new Date(item.lastModifiedDateTime).getTime(),

  };
}

/***/ }),

/***/ "./src/background/sync/webdav.js":
/*!***************************************!*\
  !*** ./src/background/sync/webdav.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/background/sync/base.js");


const KEY_CHILDREN = Symbol('children');

class XNode {
  constructor(node, nsMap) {
    this.node = node;
    this.nsMap = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, nsMap);
    this.parseAttrs();
    this.parseName();
  }

  static fromXML(xml) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'application/xml');
    return new XNode(doc);
  }

  parseAttrs() {
    const {
      node,
      nsMap
    } = this;
    const attrs = {};
    const {
      attributes
    } = node;

    if (attributes) {
      for (const attr of node.attributes) {
        const {
          name,
          value
        } = attr;
        if (name === 'xmlns') nsMap.$ = value;else if (name.startsWith('xmlns:')) nsMap[name.slice(6)] = value;
        attrs[name] = value;
      }
    }

    this.attrs = attrs;
  }

  parseName() {
    const {
      node,
      nsMap
    } = this;

    if (node.nodeType === 1) {
      let name = node.tagName;
      let ns = nsMap.$;

      if (name.includes(':')) {
        let prefix;
        [prefix, name] = name.split(':');
        ns = nsMap[prefix];
        if (!ns) throw new Error(`Unknown namespace: ${prefix}`);
      }

      this.name = ns + name;
    }
  }

  text() {
    const {
      node
    } = this;
    if (node) return (node.textContent || '').trim();
  }

  children() {
    if (!this[KEY_CHILDREN]) {
      const {
        node,
        nsMap
      } = this;
      this[KEY_CHILDREN] = [...node.children].map(child => new XNode(child, nsMap));
    }

    return this[KEY_CHILDREN];
  }

  map(callback) {
    return this.children().map(callback);
  }

  getCallback(callback) {
    if (typeof callback === 'string') {
      return (tagName => node => node.name === tagName)(callback);
    }

    return callback;
  }

  filter(callback) {
    return this.children().filter(this.getCallback(callback));
  }

  find(callback) {
    return this.children().find(this.getCallback(callback));
  }

  attr(key) {
    return this.attrs[key];
  }

}

const DEFAULT_CONFIG = {
  serverUrl: '',
  anonymous: false,
  username: '',
  password: ''
};
const WebDAV = _base__WEBPACK_IMPORTED_MODULE_1__["BaseService"].extend({
  name: 'webdav',
  displayName: 'WebDAV',
  properties: {
    authType: 'password',
    serverUrl: null
  },

  getUserConfig() {
    if (!this.userConfig) {
      this.userConfig = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, DEFAULT_CONFIG, {}, this.config.get('userConfig'));
    }

    return this.userConfig;
  },

  setUserConfig(config) {
    Object.assign(this.userConfig, config);
    this.config.set('userConfig', this.userConfig);
  },

  initToken() {
    var _config$serverUrl;

    this.prepareHeaders();
    const config = this.getUserConfig();
    let url = ((_config$serverUrl = config.serverUrl) == null ? void 0 : _config$serverUrl.trim()) || '';
    if (!url.includes('://')) url = `http://${url}`;
    if (!url.endsWith('/')) url += '/';

    try {
      new URL(url); // eslint-disable-line no-new
    } catch (e) {
      this.properties.serverUrl = null;
      return false;
    }

    this.properties.serverUrl = `${url}Violentmonkey/`;
    const {
      anonymous,
      username,
      password
    } = config;
    if (anonymous) return true;
    if (!username || !password) return false;
    const auth = window.btoa(`${username}:${password}`);
    this.headers.Authorization = `Basic ${auth}`;
    return true;
  },

  loadData(options) {
    // Bypassing login CSRF protection in Nextcloud / Owncloud by not sending cookies.
    // We are not using web UI and cookie authentication, so we don't have to worry about that.
    // See https://github.com/violentmonkey/violentmonkey/issues/976
    return _base__WEBPACK_IMPORTED_MODULE_1__["BaseService"].prototype.loadData.call(this, Object.assign({
      credentials: 'omit'
    }, options));
  },

  handleMetaError(res) {
    if (![404, // File not exists
    409 // Directory not exists
    ].includes(res.status)) throw res;
  },

  // Some WebDAV servers do not allow LOCK / UNLOCK

  /*
  acquireLock() {
    const { serverUrl } = this.properties;
    const createLock = () => {
      this.log('Acquire lock...');
      return this.loadData({
        method: 'LOCK',
        url: serverUrl,
        headers: {
          Timeout: `Second-${30 * 60}`,
        },
        body: `\
  <?xml version="1.0" encoding="utf-8" ?>
  <D:lockinfo xmlns:D='DAV:'>
  <D:lockscope><D:exclusive/></D:lockscope>
  <D:locktype><D:write/></D:locktype>
  </D:lockinfo>`,
      })
      .then(xml => {
        const doc = XNode.fromXML(xml);
        const lock = doc.find('DAV:prop')
        .find('DAV:lockdiscovery')
        .find('DAV:activelock')
        .find('DAV:locktoken')
        .find('DAV:href')
        .text();
        this.log('Acquired lock:', lock);
        this.config.set({
          lock,
        });
      });
    };
    const lock = this.config.get('lock');
    if (lock) {
      this.log('Refresh lock:', lock);
      return this.loadData({
        method: 'LOCK',
        url: serverUrl,
        headers: {
          If: `(<${lock}>)`,
        },
      })
      .then(() => {
        this.log('Refreshed lock:', lock);
      }, err => {
        if (err.status === 412) {
          this.log('Refresh lock error');
          this.config.set({ lock: null });
          // Precondition Failed
          return createLock();
        }
        throw err;
      });
    }
    return createLock();
  },
  releaseLock() {
    const lock = this.config.get('lock');
    if (lock) {
      const { serverUrl } = this.properties;
      this.log('Release lock:', lock);
      return this.loadData({
        method: 'UNLOCK',
        url: serverUrl,
        headers: {
          'Lock-Token': `<${lock}>`,
        },
      })
      .then(() => {
        this.log('Released lock');
      }, () => {
        this.log('Release lock error');
      })
      .then(() => {
        this.config.set({ lock: null });
      });
    }
  },
  */
  list() {
    const {
      serverUrl
    } = this.properties;

    const mkdir = () => this.loadData({
      method: 'MKCOL',
      url: serverUrl
    });

    const readdir = () => this.loadData({
      method: 'PROPFIND',
      url: serverUrl,
      headers: {
        depth: '1'
      }
    }).then(xml => {
      const doc = XNode.fromXML(xml);
      const items = doc.children()[0].map(node => {
        const prop = node.find('DAV:propstat').find('DAV:prop');
        const type = prop.find('DAV:resourcetype').find('DAV:collection') ? 'directory' : 'file';

        if (type === 'file') {
          let displayName;
          const displayNameNode = prop.find('DAV:displayname');

          if (displayNameNode !== undefined) {
            displayName = displayNameNode.text();
          } else {
            const href = node.find('DAV:href').text();
            displayName = decodeURIComponent(href.substring(href.lastIndexOf('/') + 1));
          }

          if (Object(_base__WEBPACK_IMPORTED_MODULE_1__["isScriptFile"])(displayName)) {
            const size = prop.find('DAV:getcontentlength');
            return normalize({
              name: displayName,
              size: size ? +size.text() : 0
            });
          }
        }

        return null;
      }).filter(Boolean);
      return items;
    });

    return readdir().catch(err => {
      if (err.status === 404) {
        return mkdir().then(readdir);
      }

      throw err;
    });
  },

  get(item) {
    const name = Object(_base__WEBPACK_IMPORTED_MODULE_1__["getItemFilename"])(item);
    const {
      serverUrl
    } = this.properties;
    return this.loadData({
      url: serverUrl + name
    });
  },

  put(item, data) {
    const name = Object(_base__WEBPACK_IMPORTED_MODULE_1__["getItemFilename"])(item);
    const headers = {
      'Content-Type': 'text/plain'
    };
    const lock = this.config.get('lock');
    if (lock) headers.If = `(<${lock}>)`;
    const {
      serverUrl
    } = this.properties;
    return this.loadData({
      method: 'PUT',
      url: serverUrl + name,
      body: data,
      headers
    });
  },

  remove(item) {
    const name = Object(_base__WEBPACK_IMPORTED_MODULE_1__["getItemFilename"])(item);
    const headers = {};
    const lock = this.config.get('lock');
    if (lock) headers.If = `(<${lock}>)`;
    const {
      serverUrl
    } = this.properties;
    return this.loadData({
      method: 'DELETE',
      url: serverUrl + name,
      headers
    });
  }

});
Object(_base__WEBPACK_IMPORTED_MODULE_1__["register"])(WebDAV);

function normalize(item) {
  return {
    name: item.name,
    size: item.size,
    uri: Object(_base__WEBPACK_IMPORTED_MODULE_1__["getURI"])(item.name)
  };
}

/***/ }),

/***/ "./src/background/utils/cache.js":
/*!***************************************!*\
  !*** ./src/background/utils/cache.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/cache */ "./src/common/cache.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");


const cache = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_cache__WEBPACK_IMPORTED_MODULE_0__["default"])({
  /* Keeping the data for one hour since chrome.storage.local is insanely slow in Chrome,
     it can takes seconds to read it when injecting tabs with a big script/value, which delays
     all other scripts in this tab and they will never be able to run at document-start. */
  lifetime: 60 * 60 * 1000
});
Object.assign(_message__WEBPACK_IMPORTED_MODULE_1__["commands"], {
  CacheLoad(data) {
    return cache.get(data) || null;
  },

  CacheHit(data) {
    cache.hit(data.key, data.lifetime);
  },

  CachePop(key) {
    return cache.pop(key) || null;
  }

});
/* harmony default export */ __webpack_exports__["default"] = (cache);

/***/ }),

/***/ "./src/background/utils/clipboard.js":
/*!*******************************************!*\
  !*** ./src/background/utils/clipboard.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");

const textarea = document.createElement('textarea');
let clipboardData;
Object.assign(_message__WEBPACK_IMPORTED_MODULE_0__["commands"], {
  SetClipboard(data) {
    clipboardData = data;
    textarea.focus();
    const ret = document.execCommand('copy', false, null);

    if (!ret && false) {
      console.warn('Copy failed!');
    }
  }

});
document.body.appendChild(textarea);
document.addEventListener('copy', e => {
  e.preventDefault();
  const {
    type,
    data
  } = clipboardData;
  e.clipboardData.setData(type || 'text/plain', data);
});

/***/ }),

/***/ "./src/background/utils/db.js":
/*!************************************!*\
  !*** ./src/background/utils/db.js ***!
  \************************************/
/*! exports provided: normalizePosition, sortScripts, getScriptById, getScript, getScripts, getValueStoresByIds, dumpValueStores, ENV_CACHE_KEYS, ENV_REQ_KEYS, ENV_VALUE_IDS, getScriptsByURL, getData, checkRemove, updateScriptInfo, parseScript, fetchResources, vacuum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePosition", function() { return normalizePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortScripts", function() { return sortScripts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScriptById", function() { return getScriptById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScript", function() { return getScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScripts", function() { return getScripts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueStoresByIds", function() { return getValueStoresByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dumpValueStores", function() { return dumpValueStores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV_CACHE_KEYS", function() { return ENV_CACHE_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV_REQ_KEYS", function() { return ENV_REQ_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV_VALUE_IDS", function() { return ENV_VALUE_IDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScriptsByURL", function() { return getScriptsByURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRemove", function() { return checkRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScriptInfo", function() { return updateScriptInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseScript", function() { return parseScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchResources", function() { return fetchResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vacuum", function() { return vacuum; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/storage */ "./src/common/storage.js");
/* harmony import */ var _plugin_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plugin/events */ "./src/background/plugin/events.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./script */ "./src/background/utils/script.js");
/* harmony import */ var _tester__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tester */ "./src/background/utils/tester.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./init */ "./src/background/utils/init.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");
/* harmony import */ var _patch_db__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patch-db */ "./src/background/utils/patch-db.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./options */ "./src/background/utils/options.js");
/* harmony import */ var _storage_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./storage-fetch */ "./src/background/utils/storage-fetch.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cache */ "./src/background/utils/cache.js");














const store = {};
_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].base.setDataCache(_cache__WEBPACK_IMPORTED_MODULE_13__["default"]);

_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].script.onDump = item => {
  store.scriptMap[item.props.id] = item;
};

Object.assign(_message__WEBPACK_IMPORTED_MODULE_9__["commands"], {
  CheckPosition: sortScripts,
  CheckRemove: checkRemove,

  /** @return {VMScript} */
  GetScript: getScript,

  /** @return {Promise<{ items: VMScript[], values? }>} */
  async ExportZip({
    values
  }) {
    const scripts = getScripts();
    const ids = scripts.map(getPropsId);
    const codeMap = await _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].code.getMulti(ids);
    return {
      items: scripts.map(script => ({
        script,
        code: codeMap[script.props.id]
      })),
      values: values ? await _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].value.getMulti(ids) : undefined
    };
  },

  /** @return {Promise<string>} */
  GetScriptCode(id) {
    return _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].code.getOne(id);
  },

  GetScriptVer(opts) {
    const script = getScript(opts);
    return script && !script.config.removed ? script.meta.version : null;
  },

  /** @return {Promise<void>} */
  MarkRemoved({
    id,
    removed
  }) {
    return updateScriptInfo(id, {
      config: {
        removed: removed ? 1 : 0
      },
      props: {
        lastModified: Date.now()
      }
    });
  },

  /** @return {Promise<number>} */
  Move({
    id,
    offset
  }) {
    const script = getScriptById(id);
    const index = store.scripts.indexOf(script);
    store.scripts.splice(index, 1);
    store.scripts.splice(index + offset, 0, script);
    return normalizePosition();
  },

  /** @return {Promise<void>} */
  async RemoveScript(id) {
    const i = store.scripts.indexOf(getScriptById(id));

    if (i >= 0) {
      store.scripts.splice(i, 1);
      await Promise.all([_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].script.remove(id), _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].code.remove(id), _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].value.remove(id)]);
    }

    return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('RemoveScript', id);
  },

  ParseMeta: _script__WEBPACK_IMPORTED_MODULE_6__["parseMeta"],
  ParseScript: parseScript,

  /** @return {Promise<void>} */
  UpdateScriptInfo({
    id,
    config,
    custom
  }) {
    return updateScriptInfo(id, {
      config,
      custom,
      props: {
        lastModified: Date.now()
      }
    });
  },

  /** @return {Promise<number>} */
  Vacuum: vacuum
});
_init__WEBPACK_IMPORTED_MODULE_8__["preInitialize"].push(async () => {
  var _data$options;

  const {
    version: lastVersion
  } = await browser.storage.local.get('version');
  const version = "2.13.0.12";
  if (!lastVersion) await Object(_patch_db__WEBPACK_IMPORTED_MODULE_10__["default"])();
  if (version !== lastVersion) browser.storage.local.set({
    version
  });
  const data = await browser.storage.local.get();
  const scripts = [];
  const storeInfo = {
    id: 0,
    position: 0
  };
  const idMap = {};
  const uriMap = {};
  const mods = [];
  const resUrls = [];
  /** @this VMScriptCustom.pathMap */

  const rememberUrl = function _(url) {
    resUrls.push(this[url] || url);
  };

  safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__["forEachEntry"], data, ([key, script]) => {
    _cache__WEBPACK_IMPORTED_MODULE_13__["default"].put(key, script);

    if (key.startsWith(_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].script.prefix)) {
      var _meta$require;

      // {
      //   meta,
      //   custom,
      //   props: { id, position, uri },
      //   config: { enabled, shouldUpdate },
      // }
      const id = getInt(key.slice(_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].script.prefix.length));

      if (!id || idMap[id]) {
        // ID conflicts!
        // Should not happen, discard duplicates.
        return;
      }

      idMap[id] = script;
      const uri = Object(_script__WEBPACK_IMPORTED_MODULE_6__["getNameURI"])(script);

      if (uriMap[uri]) {
        // Namespace conflicts!
        // Should not happen, discard duplicates.
        return;
      }

      uriMap[uri] = script;
      script.props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, script.props, {
        id,
        uri
      });
      script.custom = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_script__WEBPACK_IMPORTED_MODULE_6__["getDefaultCustom"])(), {}, script.custom);
      storeInfo.id = Math.max(storeInfo.id, id);
      storeInfo.position = Math.max(storeInfo.position, getInt(script.props.position));
      scripts.push(script); // listing all known resource urls in order to remove unused mod keys

      const {
        custom: {
          pathMap = {}
        } = {},
        meta = script.meta = {}
      } = script;
      meta.grant = [...new Set(meta.grant || [])]; // deduplicate

      (_meta$require = meta.require) == null ? void 0 : _meta$require.forEach(rememberUrl, pathMap);
      Object.values(meta.resources || {}).forEach(rememberUrl, pathMap);
      safeCall(rememberUrl, pathMap, meta.icon);
    } else if (key.startsWith(_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].mod.prefix)) {
      mods.push(key.slice(_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].mod.prefix.length));
    }
  });
  _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].mod.removeMulti(mods.filter(url => !resUrls.includes(url)));
  Object.assign(store, {
    scripts,
    storeInfo,
    scriptMap: scripts.reduce((map, item) => {
      map[item.props.id] = item;
      return map;
    }, {})
  }); // Switch defaultInjectInto from `page` to `auto` when upgrading VM2.12.7 or older

  if (version !== lastVersion && IS_FIREFOX && ((_data$options = data.options) == null ? void 0 : _data$options.defaultInjectInto) === _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["INJECT_PAGE"] && Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["compareVersion"])(lastVersion, '2.12.7') <= 0) {
    Object(_options__WEBPACK_IMPORTED_MODULE_11__["setOption"])('defaultInjectInto', _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["INJECT_AUTO"]);
  }

  if (false) {}

  vacuum(data);
  return sortScripts();
});
/** @return {number} */

function getInt(val) {
  return +val || 0;
}
/** @return {?number} */


function getPropsId(script) {
  return script == null ? void 0 : script.props.id;
}
/** @return {void} */


function updateLastModified() {
  Object(_options__WEBPACK_IMPORTED_MODULE_11__["setOption"])('lastModified', Date.now());
}
/** @return {Promise<number>} */


async function normalizePosition() {
  const updates = store.scripts.filter(({
    props
  }, index) => {
    const position = index + 1;
    const res = props.position !== position;
    if (res) props.position = position;
    return res;
  });
  store.storeInfo.position = store.scripts.length;

  if (updates.length) {
    await _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].script.dump(updates);
    updateLastModified();
  }

  return updates.length;
}
/** @return {Promise<number>} */

async function sortScripts() {
  store.scripts.sort((a, b) => getInt(a.props.position) - getInt(b.props.position));
  const changed = await normalizePosition();
  Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('ScriptsUpdated', null);
  return changed;
}
/** @return {?VMScript} */

function getScriptById(id) {
  return store.scriptMap[id];
}
/** @return {?VMScript} */

function getScript({
  id,
  uri,
  meta
}) {
  let script;

  if (id) {
    script = getScriptById(id);
  } else {
    if (!uri) uri = Object(_script__WEBPACK_IMPORTED_MODULE_6__["getNameURI"])({
      meta,
      id: '@@should-have-name'
    });
    script = store.scripts.find(({
      props
    }) => uri === props.uri);
  }

  return script;
}
/** @return {VMScript[]} */

function getScripts() {
  return store.scripts.filter(script => !script.config.removed);
}
/**
 * @desc Load values for batch updates.
 * @param {number[]} ids
 * @return {Promise<Object>}
 */

function getValueStoresByIds(ids) {
  return _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].value.getMulti(ids);
}
/**
 * @desc Dump values for batch updates.
 * @param {Object} valueDict { id1: value1, id2: value2, ... }
 * @return {Promise<Object>}
 */

async function dumpValueStores(valueDict) {
  if (false) {}
  await _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].value.dump(valueDict);
  return valueDict;
}
const ENV_CACHE_KEYS = 'cacheKeys';
const ENV_REQ_KEYS = 'reqKeys';
const ENV_VALUE_IDS = 'valueIds';
const GMVALUES_RE = /^GM[_.](listValues|([gs]et|delete)Value)$/;
const RUN_AT_RE = /^document-(start|body|end|idle)$/;
/**
 * @desc Get scripts to be injected to page with specific URL.
 */

async function getScriptsByURL(url, isTop) {
  const allScripts = Object(_tester__WEBPACK_IMPORTED_MODULE_7__["testBlacklist"])(url) ? [] : store.scripts.filter(script => {
    var _script$custom$nofram;

    return !script.config.removed && (isTop || !((_script$custom$nofram = script.custom.noframes) != null ? _script$custom$nofram : script.meta.noframes)) && Object(_tester__WEBPACK_IMPORTED_MODULE_7__["testScript"])(url, script);
  });
  const disabledIds = [];
  /** @namespace VMScriptByUrlData */

  const [envStart, envDelayed] = [0, 1].map(() => ({
    ids: [],

    /** @type {(VMScript & VMInjectedScript)[]} */
    scripts: [],
    [ENV_CACHE_KEYS]: [],
    [ENV_REQ_KEYS]: [],
    [ENV_VALUE_IDS]: []
  }));
  allScripts.forEach(script => {
    var _$match;

    const {
      id
    } = script.props;

    if (!script.config.enabled) {
      disabledIds.push(id);
      return;
    }

    const {
      meta,
      custom
    } = script;
    const {
      pathMap = buildPathMap(script)
    } = custom;
    const runAt = ((_$match = `${custom.runAt || meta.runAt || ''}`.match(RUN_AT_RE)) == null ? void 0 : _$match[1]) || 'end';
    const env = runAt === 'start' || runAt === 'body' ? envStart : envDelayed;
    env.ids.push(id);

    if (meta.grant.some(GMVALUES_RE.test, GMVALUES_RE)) {
      env[ENV_VALUE_IDS].push(id);
    }

    for (const [list, name] of [[meta.require, ENV_REQ_KEYS], [Object.values(meta.resources), ENV_CACHE_KEYS]]) {
      list.forEach(key => {
        key = pathMap[key] || key;

        if (!envStart[name].includes(key)) {
          env[name].push(key);
        }
      });
    }
    /** @namespace VMInjectedScript */


    env.scripts.push(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, script, {
      runAt
    }));
  });

  if (envDelayed.ids.length) {
    envDelayed.promise = readEnvironmentData(envDelayed);
  }
  /** @namespace VMScriptByUrlData */


  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, envStart, {}, (await readEnvironmentData(envStart)), {
    disabledIds,
    envDelayed
  });
}
/**
 * Object keys == areas in `storage` module.
 * @namespace VMScriptByUrlData
 */

const STORAGE_ROUTES = Object.entries({
  cache: ENV_CACHE_KEYS,
  code: 'ids',
  require: ENV_REQ_KEYS,
  value: ENV_VALUE_IDS
});
const retriedStorageKeys = {};

async function readEnvironmentData(env, isRetry) {
  const keys = [];
  STORAGE_ROUTES.forEach(([area, srcIds]) => {
    env[srcIds].forEach(id => {
      keys.push(_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"][area].getKey(id));
    });
  });
  const data = await _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].base.getMulti(keys);

  for (const [area, srcIds] of STORAGE_ROUTES) {
    env[area] = {};

    for (const id of env[srcIds]) {
      const val = data[_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"][area].getKey(id)];
      env[area][id] = val;

      if (val == null && area !== 'value' && retriedStorageKeys[area + id] !== 2) {
        const err = `The "${area}" storage is missing "${id}"!`;
        const err2 = 'Vacuuming did not help. Please reinstall the affected scripts.';
        retriedStorageKeys[area + id] = isRetry ? 2 : 1;

        if (!isRetry) {
          console.warn(err, 'Vacuuming...');

          if (await vacuum()) {
            return readEnvironmentData(env, true);
          }
        }

        console.error(err, err2);
        Object(_message__WEBPACK_IMPORTED_MODULE_9__["notify"])({
          title: err,
          body: err2
        });
      }
    }
  }

  return env;
}
/**
 * @desc Get data for dashboard.
 * @return {Promise<{ scripts: VMScript[], cache: Object }>}
 */


async function getData(ids) {
  const scripts = ids ? ids.map(getScriptById) : store.scripts;
  return {
    scripts,
    cache: await getIconCache(scripts)
  };
}

function getIconCache(scripts) {
  const iconUrls = [];
  scripts.forEach(script => {
    const {
      icon
    } = script.meta;

    if (Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["isRemote"])(icon)) {
      var _script$custom$pathMa;

      iconUrls.push(((_script$custom$pathMa = script.custom.pathMap) == null ? void 0 : _script$custom$pathMa[icon]) || icon);
    }
  });
  return iconUrls.length ? _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].cache.getMulti(iconUrls, undefined, _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].cache.makeDataUri) : {};
}
/** @return {number} */


function checkRemove({
  force
} = {}) {
  const now = Date.now();
  const toRemove = store.scripts.filter(script => script.config.removed && (force || now - getInt(script.props.lastModified) > _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["TIMEOUT_WEEK"]));

  if (toRemove.length) {
    store.scripts = store.scripts.filter(script => !script.config.removed);
    const ids = toRemove.map(getPropsId);
    _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].script.removeMulti(ids);
    _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].code.removeMulti(ids);
    _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].value.removeMulti(ids);
  }

  return toRemove.length;
}
/** @return {string} */

function getUUID() {
  const rnd = new Uint16Array(8);
  window.crypto.getRandomValues(rnd); // xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx
  // We're using UUIDv4 variant 1 so N=4 and M=8
  // See format_uuid_v3or5 in https://tools.ietf.org/rfc/rfc4122.txt

  rnd[3] = rnd[3] & 0x0FFF | 0x4000; // eslint-disable-line no-bitwise

  rnd[4] = rnd[4] & 0x3FFF | 0x8000; // eslint-disable-line no-bitwise

  return '01-2-3-4-567'.replace(/\d/g, i => (rnd[i] + 0x10000).toString(16).slice(-4));
}
/**
 * @param {VMScript} script
 * @param {string} code
 * @return {Promise<VMScript[]>}
 */


async function saveScript(script, code) {
  const config = script.config || {};
  config.enabled = getInt(config.enabled);
  config.shouldUpdate = getInt(config.shouldUpdate);
  const props = script.props || {};
  let oldScript;

  if (!props.id) {
    store.storeInfo.id += 1;
    props.id = store.storeInfo.id;
  } else {
    oldScript = store.scriptMap[props.id];
  }

  props.uri = Object(_script__WEBPACK_IMPORTED_MODULE_6__["getNameURI"])(script);
  props.uuid = props.uuid || (crypto.randomUUID == null ? void 0 : crypto.randomUUID()) || getUUID(); // Do not allow script with same name and namespace

  if (store.scripts.some(({
    props: {
      id,
      uri
    } = {}
  }) => props.id !== id && props.uri === uri)) {
    throw Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["i18n"])('msgNamespaceConflict');
  }

  if (oldScript) {
    script.config = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, oldScript.config, {}, config);
    script.props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, oldScript.props, {}, props);
    const index = store.scripts.indexOf(oldScript);
    store.scripts[index] = script;
  } else {
    if (!props.position) {
      store.storeInfo.position += 1;
      props.position = store.storeInfo.position;
    } else if (store.storeInfo.position < props.position) {
      store.storeInfo.position = props.position;
    }

    script.config = config;
    script.props = props;
    store.scripts.push(script);
  }

  return Promise.all([_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].script.dump(script), _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].code.set(props.id, code)]);
}
/** @return {Promise<void>} */


async function updateScriptInfo(id, data) {
  const script = store.scriptMap[id];
  if (!script) throw null;
  script.props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, script.props, {}, data.props);
  script.config = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, script.config, {}, data.config);
  script.custom = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, script.custom, {}, data.custom);
  await _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].script.dump(script);
  return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])(_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["CMD_SCRIPT_UPDATE"], {
    where: {
      id
    },
    update: script
  });
}
/** @return {Promise<{ isNew?, update, where }>} */

async function parseScript(src) {
  const meta = Object(_script__WEBPACK_IMPORTED_MODULE_6__["parseMeta"])(src.code);
  if (!meta.name) throw `${Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["i18n"])('msgInvalidScript')}\n${Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["i18n"])('labelNoName')}`;
  const result = {
    update: {
      message: src.message == null ? Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["i18n"])('msgUpdated') : src.message || ''
    }
  };
  let cmd = _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["CMD_SCRIPT_UPDATE"];
  let script;
  const oldScript = await getScript({
    id: src.id,
    meta
  });

  if (oldScript) {
    if (src.isNew) throw Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["i18n"])('msgNamespaceConflict');
    script = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, oldScript);
  } else {
    ({
      script
    } = Object(_script__WEBPACK_IMPORTED_MODULE_6__["newScript"])());
    cmd = _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["CMD_SCRIPT_ADD"];
    result.isNew = true;
    result.update.message = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["i18n"])('msgInstalled');
  }

  script.config = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, script.config, {}, src.config, {
    removed: 0 // force reset `removed` since this is an installation

  });
  script.custom = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, script.custom, {}, src.custom);
  script.props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, script.props, {
    lastModified: Date.now(),
    lastUpdated: Date.now()
  }, src.props);
  script.meta = meta;

  if (!meta.homepageURL && !script.custom.homepageURL && Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["isRemote"])(src.from)) {
    script.custom.homepageURL = src.from;
  }

  if (Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["isRemote"])(src.url)) script.custom.lastInstallURL = src.url;
  if (src.position) script.props.position = +src.position;
  buildPathMap(script, src.url);
  await saveScript(script, src.code);
  fetchResources(script, src);
  Object.assign(result.update, script, src.update);
  result.where = {
    id: script.props.id
  };
  Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])(cmd, result);
  _plugin_events__WEBPACK_IMPORTED_MODULE_5__["default"].emit('scriptChanged', result);
  return result;
}
/** @return {Object} */

function buildPathMap(script, base) {
  const {
    meta
  } = script;
  const baseUrl = base || script.custom.lastInstallURL;
  const pathMap = baseUrl ? [...meta.require, ...Object.values(meta.resources), meta.icon].reduce((map, key) => {
    if (key) {
      const fullUrl = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["getFullUrl"])(key, baseUrl);
      if (fullUrl !== key) map[key] = fullUrl;
    }

    return map;
  }, {}) : {};
  script.custom.pathMap = pathMap;
  return pathMap;
}
/** @return {Promise<?string>} resolves to error text if `resourceCache` is absent */


async function fetchResources(script, resourceCache, reqOptions) {
  const {
    custom: {
      pathMap
    },
    meta
  } = script;

  const snatch = (url, type, validator) => {
    var _resourceCache$type;

    url = pathMap[url] || url;
    const contents = resourceCache == null ? void 0 : (_resourceCache$type = resourceCache[type]) == null ? void 0 : _resourceCache$type[url];
    return contents != null && !validator ? _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"][type].set(url, contents) && null : _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"][type].fetch(url, reqOptions, validator).catch(err => err);
  };

  const errors = await Promise.all([...meta.require.map(url => snatch(url, 'require')), ...Object.values(meta.resources).map(url => snatch(url, 'cache')), Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["isRemote"])(meta.icon) && snatch(meta.icon, 'cache', validateImage)]);

  if (!(resourceCache == null ? void 0 : resourceCache.ignoreDepsErrors)) {
    const error = safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["trueJoin"], errors.map(formatHttpError), '\n');

    if (error) {
      const message = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["i18n"])('msgErrorFetchingResource');
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])(_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["CMD_SCRIPT_UPDATE"], {
        update: {
          error,
          message
        },
        where: {
          id: script.props.id
        }
      });
      return `${message}\n${error}`;
    }
  }
}
/** @return {Promise<void>} resolves on success, rejects on error */

function validateImage(url, buf, type) {
  return new Promise((resolve, reject) => {
    const blobUrl = URL.createObjectURL(new Blob([buf], {
      type
    }));

    const onDone = e => {
      URL.revokeObjectURL(blobUrl);
      if (e.type === 'load') resolve();else reject(`IMAGE_ERROR: ${url}`);
    };

    const image = new Image();
    image.onload = onDone;
    image.onerror = onDone;
    image.src = blobUrl;
  });
}

function formatHttpError(e) {
  return e && safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["trueJoin"], [e.status && `HTTP${e.status}`, e.url], ' ') || e;
}

let _vacuuming;
/**
 * @param {Object} [data]
 * @return {Promise<number>}
 */


async function vacuum(data) {
  if (_vacuuming) return _vacuuming;
  let numFixes = 0;
  let resolveSelf;
  _vacuuming = new Promise(r => {
    resolveSelf = r;
  });
  const result = {};
  const toFetch = [];
  const keysToRemove = [];
  const valueKeys = {};
  const cacheKeys = {};
  const requireKeys = {};
  const codeKeys = {};
  const mappings = [[_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].value, valueKeys], [_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].cache, cacheKeys], [_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].require, requireKeys], [_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].code, codeKeys]];
  if (!data) data = await browser.storage.local.get();
  safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__["forEachKey"], data, key => {
    mappings.some(([substore, map]) => {
      const {
        prefix
      } = substore;

      if (key.startsWith(prefix)) {
        // -1 for untouched, 1 for touched, 2 for missing
        map[key.slice(prefix.length)] = -1;
        return true;
      }

      return false;
    });
  });

  const touch = (obj, key, scriptId) => {
    if (obj[key] < 0) {
      obj[key] = 1;
    } else if (!obj[key]) {
      obj[key] = 2 + scriptId;
    }
  };

  store.scripts.forEach(script => {
    const {
      id
    } = script.props;
    touch(codeKeys, id, id);
    touch(valueKeys, id, id);
    if (!script.custom.pathMap) buildPathMap(script);
    const {
      pathMap
    } = script.custom;

    script.meta.require.forEach(url => {
      touch(requireKeys, pathMap[url] || url, id);
    });

    safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__["forEachValue"], script.meta.resources, url => {
      touch(cacheKeys, pathMap[url] || url, id);
    });
    const {
      icon
    } = script.meta;

    if (Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["isRemote"])(icon)) {
      const fullUrl = pathMap[icon] || icon;
      touch(cacheKeys, fullUrl, id);
    }
  });
  mappings.forEach(([substore, map]) => {
    safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__["forEachEntry"], map, ([key, value]) => {
      if (value < 0) {
        // redundant value
        keysToRemove.push(substore.getKey(key));
        numFixes += 1;
      } else if (value >= 2 && substore.fetch) {
        // missing resource
        keysToRemove.push(_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].mod.getKey(key));
        toFetch.push(substore.fetch(key).catch(err => `${Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["getScriptName"])(getScriptById(value - 2))}: ${formatHttpError(err)}`));
        numFixes += 1;
      }
    });
  });

  if (numFixes) {
    await _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].base.removeMulti(keysToRemove); // Removing `mod` before fetching

    result.errors = (await Promise.all(toFetch)).filter(Boolean);
  }

  _vacuuming = null;
  result.fixes = numFixes;
  resolveSelf(result);
  return result;
}
/** @typedef VMScript
 * @property {VMScriptConfig} config
 * @property {VMScriptCustom} custom
 * @property {VMScriptMeta} meta
 * @property {VMScriptProps} props
 */

/** @typedef VMScriptConfig *
 * @property {Boolean} enabled - stored as 0 or 1
 * @property {Boolean} removed - stored as 0 or 1
 * @property {Boolean} shouldUpdate - stored as 0 or 1
 * @property {Boolean | null} notifyUpdates - stored as 0 or 1 or null (default) which means "use global setting"
 */

/** @typedef VMScriptCustom *
 * @property {string} name
 * @property {string} downloadURL
 * @property {string} homepageURL
 * @property {string} lastInstallURL
 * @property {string} updateURL
 * @property {'auto' | 'page' | 'content'} injectInto
 * @property {null | 1 | 0} noframes - null or absence == default (script's value)
 * @property {string[]} exclude
 * @property {string[]} excludeMatch
 * @property {string[]} include
 * @property {string[]} match
 * @property {boolean} origExclude
 * @property {boolean} origExcludeMatch
 * @property {boolean} origInclude
 * @property {boolean} origMatch
 * @property {Object} pathMap
 * @property {VMScriptRunAt} runAt
 */

/** @typedef VMScriptMeta *
 * @property {string} description
 * @property {string} downloadURL
 * @property {string[]} exclude
 * @property {string[]} excludeMatch
 * @property {string[]} grant
 * @property {string} homepageURL
 * @property {string} icon
 * @property {string[]} include
 * @property {'auto' | 'page' | 'content'} injectInto
 * @property {string[]} match
 * @property {string} namespace
 * @property {string} name
 * @property {boolean} noframes
 * @property {string[]} require
 * @property {Object} resources
 * @property {VMScriptRunAt} runAt
 * @property {string} supportURL
 * @property {string} version
 */

/** @typedef VMScriptProps *
 * @property {number} id
 * @property {number} lastModified
 * @property {number} lastUpdated
 * @property {number} position
 * @property {string} uri
 * @property {string} uuid
 */

/**
 * @typedef {
   'document-start' | 'document-body' | 'document-end' | 'document-idle'
 } VMScriptRunAt
 */

/***/ }),

/***/ "./src/background/utils/events.js":
/*!****************************************!*\
  !*** ./src/background/utils/events.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getEventEmitter; });
function getEventEmitter() {
  const events = {};
  return {
    on,
    off,
    fire
  };

  function on(type, func) {
    let list = events[type];

    if (!list) {
      list = [];
      events[type] = list;
    }

    list.push(func);
  }

  function off(type, func) {
    const list = events[type];

    if (list) {
      const i = list.indexOf(func);
      if (i >= 0) list.splice(i, 1);
    }
  }

  function fire(type, data) {
    const list = events[type];

    if (list) {
      list.forEach(func => {
        func(data, type);
      });
    }
  }
}

/***/ }),

/***/ "./src/background/utils/hotkeys.js":
/*!*****************************************!*\
  !*** ./src/background/utils/hotkeys.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/background/utils/init.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");


_init__WEBPACK_IMPORTED_MODULE_0__["postInitialize"].push(() => {
  browser.commands.onCommand.addListener(cmd => {
    if (cmd === 'newScript') {
      _message__WEBPACK_IMPORTED_MODULE_1__["commands"].OpenEditor();
    } else {
      const route = cmd === 'settings' ? `#${cmd}` : '';
      _message__WEBPACK_IMPORTED_MODULE_1__["commands"].TabOpen({
        url: `/options/index.html${route}`
      });
    }
  });
});

/***/ }),

/***/ "./src/background/utils/icon.js":
/*!**************************************!*\
  !*** ./src/background/utils/icon.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache */ "./src/background/utils/cache.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init */ "./src/background/utils/init.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options */ "./src/background/utils/options.js");
/* harmony import */ var _tester__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tester */ "./src/background/utils/tester.js");







 // storing in `cache` only for the duration of page load in case there are 2+ identical urls

const CACHE_DURATION = 1000;
Object.assign(_message__WEBPACK_IMPORTED_MODULE_5__["commands"], {
  async GetImageData(url) {
    const key = `GetImageData:${url}`;
    return _cache__WEBPACK_IMPORTED_MODULE_3__["default"].get(key) || _cache__WEBPACK_IMPORTED_MODULE_3__["default"].put(key, loadImageData(url, {
      base64: true
    }).catch(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["noop"]), CACHE_DURATION);
  },

  SetBadge: setBadge
}); // Firefox Android does not support such APIs, use noop

const browserAction = (() => {
  const {
    chrome
  } = global; // Using `chrome` namespace in order to skip our browser.js polyfill in Chrome

  const api = chrome.browserAction; // Suppress the "no tab id" error when setting an icon/badge as it cannot be reliably prevented

  const ignoreErrors = () => chrome.runtime.lastError; // Some methods like setBadgeText added callbacks only in Chrome 67+.


  const makeMethod = fn => (...args) => {
    try {
      safeCall(fn, api, ...args, ignoreErrors);
    } catch (e) {
      safeCall(fn, api, ...args);
    }
  };

  return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["objectPick"])(api, ['setIcon', 'setBadgeText', 'setBadgeBackgroundColor', 'setTitle'], fn => fn ? makeMethod(fn) : _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
})();

const badges = {};
const KEY_IS_APPLIED = 'isApplied';
const KEY_SHOW_BADGE = 'showBadge';
const KEY_BADGE_COLOR = 'badgeColor';
const KEY_BADGE_COLOR_BLOCKED = 'badgeColorBlocked';
/** @type boolean */

let isApplied;
/** @type VMBadgeMode */

let showBadge;
/** @type string */

let badgeColor;
/** @type string */

let badgeColorBlocked;
/** @type string */

let titleBlacklisted;
/** @type string */

let titleNoninjectable; // We'll cache the icon data in Chrome as it doesn't cache the data and takes up to 40ms
// in our background page context to set the 4 icon sizes for each new tab opened

const iconCache = !IS_FIREFOX && {};
Object(_options__WEBPACK_IMPORTED_MODULE_6__["hookOptions"])(changes => {
  let v;
  const jobs = [];

  if ((v = changes[KEY_IS_APPLIED]) != null) {
    isApplied = v;
    setIcon(); // change the default icon

    jobs.push(setIcon); // change the current tabs' icons
  }

  if ((v = changes[KEY_SHOW_BADGE]) != null) {
    showBadge = v;
    jobs.push(updateBadge);
  }

  if ((v = changes[KEY_BADGE_COLOR]) && (badgeColor = v) || (v = changes[KEY_BADGE_COLOR_BLOCKED]) && (badgeColorBlocked = v)) {
    jobs.push(updateBadgeColor);
  }

  if ('blacklist' in changes) {
    jobs.push(updateState);
  }

  if (jobs.length) {
    Object(_message__WEBPACK_IMPORTED_MODULE_5__["forEachTab"])(tab => jobs.forEach(fn => fn(tab)));
  }
});
_init__WEBPACK_IMPORTED_MODULE_4__["postInitialize"].push(() => {
  isApplied = Object(_options__WEBPACK_IMPORTED_MODULE_6__["getOption"])(KEY_IS_APPLIED);
  showBadge = Object(_options__WEBPACK_IMPORTED_MODULE_6__["getOption"])(KEY_SHOW_BADGE);
  badgeColor = Object(_options__WEBPACK_IMPORTED_MODULE_6__["getOption"])(KEY_BADGE_COLOR);
  badgeColorBlocked = Object(_options__WEBPACK_IMPORTED_MODULE_6__["getOption"])(KEY_BADGE_COLOR_BLOCKED);
  titleBlacklisted = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('failureReasonBlacklisted');
  titleNoninjectable = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('failureReasonNoninjectable');
  Object(_message__WEBPACK_IMPORTED_MODULE_5__["forEachTab"])(updateState);
  if (!isApplied) setIcon(); // sets the dimmed icon as default
});
browser.tabs.onRemoved.addListener(id => {
  delete badges[id];
});
browser.tabs.onUpdated.addListener((tabId, info, tab) => {
  const {
    url
  } = info;

  if (info.status === 'loading' // at least about:newtab in Firefox may open without 'loading' status
  || info.favIconUrl && tab.url.startsWith('about:')) {
    updateState(tab, url);
  }
});

function setBadge(ids, {
  tab,
  frameId
}) {
  const tabId = tab.id;
  const data = badges[tabId] || {};

  if (!data.idMap || frameId === 0) {
    // 1) keeping data object to preserve data.blocked
    // 2) 'total' and 'unique' must match showBadge in options-defaults.js
    data.total = 0;
    data.unique = 0;
    data.idMap = {};
    badges[tabId] = data;
  }

  data.total += ids.length;

  if (ids) {
    ids.forEach(id => {
      data.idMap[id] = 1;
    });
    data.unique = Object.keys(data.idMap).length;
  }

  updateBadgeColor(tab, data);
  updateBadge(tab, data);
}

function updateBadge(tab, data = badges[tab.id]) {
  if (data) {
    browserAction.setBadgeText({
      text: `${data[showBadge] || ''}`,
      tabId: tab.id
    });
  }
}

function updateBadgeColor(tab, data = badges[tab.id]) {
  if (data) {
    browserAction.setBadgeBackgroundColor({
      color: data.blocked ? badgeColorBlocked : badgeColor,
      tabId: tab.id
    });
  }
} // Chrome 79+ uses pendingUrl while the tab connects to the newly navigated URL
// https://groups.google.com/a/chromium.org/forum/#!topic/chromium-extensions/5zu_PT0arls


function updateState(tab, url = tab.pendingUrl || tab.url) {
  const tabId = tab.id;
  const injectable = _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECTABLE_TAB_URL_RE"].test(url);
  const blacklisted = injectable ? Object(_tester__WEBPACK_IMPORTED_MODULE_7__["testBlacklist"])(url) : undefined;
  const title = blacklisted && titleBlacklisted || !injectable && titleNoninjectable || ''; // if the user unblacklisted this previously blocked tab in settings,
  // but didn't reload the tab yet, we need to restore the icon and the title

  if (title || (badges[tabId] || {}).blocked) {
    browserAction.setTitle({
      title,
      tabId
    });
    const data = title ? {
      blocked: true
    } : {};
    badges[tabId] = data;
    setIcon(tab, data);
    updateBadge(tab, data);
  }
}

async function setIcon(tab = {}, data = {}) {
  // modern Chrome and Firefox use 16/32, other browsers may still use 19/38 (e.g. Vivaldi)
  const mod = data.blocked && 'b' || !isApplied && 'w' || '';
  const iconData = {};

  for (const n of [16, 19, 32, 38]) {
    const path = `/public/images/icon${n}${mod}.png`;
    let icon = iconCache ? iconCache[path] : path;

    if (!icon) {
      icon = await loadImageData(path);
      iconCache[path] = icon;
    }

    iconData[n] = icon;
  }

  browserAction.setIcon({
    tabId: tab.id,
    [iconCache ? 'imageData' : 'path']: iconData
  });
}

function loadImageData(path, {
  base64
} = {}) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = path;

    img.onload = () => {
      const {
        width,
        height
      } = img;

      if (!width) {
        // FF reports 0 for SVG
        resolve(path);
        return;
      }

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      resolve(base64 ? canvas.toDataURL() : ctx.getImageData(0, 0, width, height));
    };

    img.onerror = reject;
  });
}

/***/ }),

/***/ "./src/background/utils/index.js":
/*!***************************************!*\
  !*** ./src/background/utils/index.js ***!
  \***************************************/
/*! exports provided: cache, getEventEmitter, commands, notify, broadcast, sendMessageOrIgnore, forEachTab, getOption, getDefaultOption, setOption, hookOptions, loadQuery, dumpQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache */ "./src/background/utils/cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _cache__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/background/utils/events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEventEmitter", function() { return _events__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commands", function() { return _message__WEBPACK_IMPORTED_MODULE_2__["commands"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notify", function() { return _message__WEBPACK_IMPORTED_MODULE_2__["notify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "broadcast", function() { return _message__WEBPACK_IMPORTED_MODULE_2__["broadcast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendMessageOrIgnore", function() { return _message__WEBPACK_IMPORTED_MODULE_2__["sendMessageOrIgnore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEachTab", function() { return _message__WEBPACK_IMPORTED_MODULE_2__["forEachTab"]; });

/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options */ "./src/background/utils/options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOption", function() { return _options__WEBPACK_IMPORTED_MODULE_3__["getOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultOption", function() { return _options__WEBPACK_IMPORTED_MODULE_3__["getDefaultOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setOption", function() { return _options__WEBPACK_IMPORTED_MODULE_3__["setOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hookOptions", function() { return _options__WEBPACK_IMPORTED_MODULE_3__["hookOptions"]; });

/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ "./src/background/utils/search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadQuery", function() { return _search__WEBPACK_IMPORTED_MODULE_4__["loadQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dumpQuery", function() { return _search__WEBPACK_IMPORTED_MODULE_4__["dumpQuery"]; });







/***/ }),

/***/ "./src/background/utils/init.js":
/*!**************************************!*\
  !*** ./src/background/utils/init.js ***!
  \**************************************/
/*! exports provided: extensionRoot, preInitialize, postInitialize, initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensionRoot", function() { return extensionRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preInitialize", function() { return preInitialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postInitialize", function() { return postInitialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
const extensionRoot = browser.runtime.getURL('/');
const preInitialize = [];
const postInitialize = [];
async function initialize(main) {
  const run = init => typeof init === 'function' ? init() : init;

  await Promise.all(preInitialize.map(run));
  await run(main);
  await Promise.all(postInitialize.map(run));
  preInitialize.length = 0;
  postInitialize.length = 0;
}

/***/ }),

/***/ "./src/background/utils/merge-video.js":
/*!*********************************************!*\
  !*** ./src/background/utils/merge-video.js ***!
  \*********************************************/
/*! exports provided: mergeM3u8, mergeVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeM3u8", function() { return mergeM3u8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeVideo", function() { return mergeVideo; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");


const {
  createFFmpeg,
  fetchFile
} = __webpack_require__(/*! @ffmpeg/ffmpeg */ "./node_modules/@ffmpeg/ffmpeg/src/index.js");

const {
  chrome
} = global;
let ffmpeg;

async function load() {
  if (ffmpeg) return ffmpeg;
  ffmpeg = createFFmpeg({
    corePath: '/public/lib/ffmpeg-core.js',
    log: false
  });
  await ffmpeg.load();
  console.info('ff loaded', {
    ffmpeg
  });
  return ffmpeg;
}

const merge = async (video, audio) => {
  // console.info({ video, audio });
  ffmpeg.FS('writeFile', 'video.mp4', (await fetchFile(video)));
  ffmpeg.FS('writeFile', 'audio.mp3', (await fetchFile(audio)));
  await ffmpeg.run('-i', 'video.mp4', '-i', 'audio.mp3', '-c', 'copy', 'out.mp4');
  return ffmpeg.FS('readFile', 'out.mp4');
};

async function get(opts, httpRequest, progress) {
  return new Promise((resolve, reject) => {
    opts.requests[opts.id] = {
      id: opts.id,
      tabId: opts.src.tab.id,
      eventsToNotify: ['error', 'load', 'progress'],
      xhr: new XMLHttpRequest()
    };
    opts.type = 'download';
    opts.fileName = null;
    opts.data = [];
    httpRequest(opts, opts.src, res => {
      // console.info('httpRequest', res);
      if (res.type === 'progress') {
        var _res$data, _res$data2;

        // console.info('httpRequest', res.data?.loaded, res.data?.total);
        progress((_res$data = res.data) == null ? void 0 : _res$data.loaded, (_res$data2 = res.data) == null ? void 0 : _res$data2.total);
      } else if (res.type === 'load') {
        resolve(res.data);
      } else if (res.type === 'loadend') {
        reject();
      }
    });
  });
}

function tsUrl(tsUri, baseURL) {
  if (tsUri.startsWith('http')) return tsUri;

  if (tsUri[0] === '/') {
    const domain = baseURL.split('/');
    return `${domain[0]}//${domain[2]}${tsUri}`;
  }

  const domain = baseURL.split('/');
  domain.pop();
  return `${domain.join('/')}/${tsUri}`;
}

async function mergeM3u8(opts, httpRequest) {
  const progress = [];
  const preloads = [];
  preloads.push(load());

  const onprogress = (pp, loaded, total) => {
    if (loaded || total) Object.assign(pp, {
      loaded: loaded || 0,
      total: total || 0
    });

    const _loaded = progress.map(p => p.loaded).reduce((a, b) => a + Number(b), 0);

    const _total = progress.map(p => p.total).reduce((a, b) => a + Number(b), 0); // 可能在ts文件很多的时候，total有部分为0，就需要计算这部分占比，估算进度


    const r = progress.filter(p => p.total > 0).length / progress.length;
    if (_loaded && _total) opts.onprogress(_loaded, _total / Math.max(0.001, r));
  };

  const baseUrl = opts.url;
  const m3u8 = opts.data[0];
  let i = 0;
  m3u8.split('\n').forEach(line => {
    if (line.toLowerCase().includes('.ts')) {
      // 不一定是ts结尾，可能后面还有query
      i += 1; // if (i > 5) return; // for debug

      const tsOpts = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_0__["deepCopy"])(opts);
      tsOpts.url = tsUrl(line, baseUrl);
      tsOpts.requests = opts.requests;
      tsOpts.id = `${opts.id}.${i}`;
      const pp = {
        loaded: 0,
        total: 0
      };
      progress.push(pp);
      preloads.push(get(tsOpts, httpRequest, (loaded, total) => {
        onprogress(pp, loaded, total);
      }));
    }
  });
  const vals = await Promise.all(preloads);
  vals.shift();
  if (!vals.length) return opts.onerror();
  ffmpeg.FS('writeFile', 'src.ts', (await fetchFile(new Blob(vals, {
    type: 'video/mp2t'
  }))));
  await ffmpeg.run('-i', 'src.ts', '-c', 'copy', 'out.mp4');
  const out = ffmpeg.FS('readFile', 'out.mp4');
  const blob = new Blob([out], {
    type: 'video/mp4'
  });
  console.info('res', {
    blob
  }); // return as blob

  if (!opts.fileName) return opts.onload(blob);
  const url = URL.createObjectURL(blob); // console.info('res', { url, filename: opts.fileName });

  chrome.downloads.download({
    url,
    filename: opts.fileName
  }, downloadId => {
    // console.info(downloadId);
    opts.onload(downloadId);
    URL.revokeObjectURL(url);
  });
}
async function mergeVideo(opts, httpRequest) {
  // console.info('mergeVideo', opts);
  const progress = {
    video: {
      loaded: 0,
      total: 0
    },
    audio: {
      loaded: 0,
      total: 0
    }
  };

  const onprogress = (pp, loaded, total) => {
    if (loaded && total) Object.assign(pp, {
      loaded,
      total
    });

    const _loaded = progress.video.loaded + progress.audio.loaded;

    const _total = progress.video.total + progress.audio.total;

    if (_loaded && _total) opts.onprogress(_loaded, _total + 1);
  };

  const preloads = [];
  preloads.push(load());
  const videoOpts = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_0__["deepCopy"])(opts);
  videoOpts.requests = opts.requests;
  videoOpts.id = `${opts.id}.video`;
  preloads.push(get(videoOpts, httpRequest, (loaded, total) => {
    onprogress(progress.video, loaded, total);
  }));
  const audioOpts = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_0__["deepCopy"])(opts);
  audioOpts.requests = opts.requests;
  audioOpts.url = opts.data[0];
  audioOpts.id = `${opts.id}.audio`;
  preloads.push(get(audioOpts, httpRequest, (loaded, total) => {
    onprogress(progress.audio, loaded, total);
  }));
  const vals = await Promise.all(preloads);

  if (!vals[1] || !vals[2]) {
    // fail
    opts.onerror();
    return;
  } // console.info({ vals });


  const out = await merge(vals[1], vals[2]); // console.info('out', { out });

  const url = URL.createObjectURL(new Blob([out], {
    type: 'video/mp4'
  })); // console.info('res', { url, filename: opts.fileName });

  chrome.downloads.download({
    url,
    filename: opts.fileName
  }, downloadId => {
    // console.info(downloadId);
    opts.onload(downloadId);
    URL.revokeObjectURL(url);
  });
}

/***/ }),

/***/ "./src/background/utils/message.js":
/*!*****************************************!*\
  !*** ./src/background/utils/message.js ***!
  \*****************************************/
/*! exports provided: commands, notify, broadcast, sendMessageOrIgnore, forEachTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commands", function() { return commands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notify", function() { return notify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "broadcast", function() { return broadcast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageOrIgnore", function() { return sendMessageOrIgnore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEachTab", function() { return forEachTab; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");

const commands = {};
function notify(options) {
  browser.notifications.create(options.id || 'ViolentMonkey', {
    type: 'basic',
    iconUrl: _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["defaultImage"],
    title: `${options.title} - ${Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('extName')}`,
    message: options.body,
    isClickable: options.isClickable
  });
}
function broadcast(data) {
  forEachTab(tab => {
    browser.tabs.sendMessage(tab.id, data).catch(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
  });
}
function sendMessageOrIgnore(...args) {
  return browser.runtime.sendMessage(...args).catch(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
}
async function forEachTab(callback) {
  const tabs = await browser.tabs.query({});
  let i = 0;

  for (const tab of tabs) {
    callback(tab);
    i += 1; // we'll run at most this many tabs in one event loop cycle
    // because hundreds of tabs would make our extension process unresponsive,
    // the same process used by our own pages like the background page, dashboard, or popups

    if (i % 20 === 0) await new Promise(setTimeout);
  }
}

/***/ }),

/***/ "./src/background/utils/notifications.js":
/*!***********************************************!*\
  !*** ./src/background/utils/notifications.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");


const openers = {};
Object.assign(_message__WEBPACK_IMPORTED_MODULE_1__["commands"], {
  /** @return {Promise<string>} */
  async Notification(data, src, bgExtras) {
    const notificationId = await browser.notifications.create({
      type: 'basic',
      title: data.title || (IS_FIREFOX ? Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('extName') : ''),
      // Chrome already shows the name
      message: data.text,
      iconUrl: data.image || _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["defaultImage"]
    });
    openers[notificationId] = (bgExtras == null ? void 0 : bgExtras.onClick) || src.tab.id;
    return notificationId;
  },

  RemoveNotification(notificationId) {
    return browser.notifications.clear(notificationId);
  }

});
browser.notifications.onClicked.addListener(id => {
  const openerId = openers[id];

  if (openerId >= 0) {
    Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["sendTabCmd"])(openerId, 'NotificationClick', id);
  }

  if (typeof openerId === 'function') {
    openerId();
  }
});
browser.notifications.onClosed.addListener(id => {
  const openerId = openers[id];
  delete openers[id];

  if (openerId >= 0) {
    Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["sendTabCmd"])(openerId, 'NotificationClose', id);
  }
});

/***/ }),

/***/ "./src/background/utils/options.js":
/*!*****************************************!*\
  !*** ./src/background/utils/options.js ***!
  \*****************************************/
/*! exports provided: getOption, getDefaultOption, setOption, hookOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOption", function() { return getOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOption", function() { return getDefaultOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOption", function() { return setOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hookOptions", function() { return hookOptions; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/options-defaults */ "./src/common/options-defaults.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ "./src/background/utils/init.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");





Object.assign(_message__WEBPACK_IMPORTED_MODULE_4__["commands"], {
  /** @return {Object} */
  GetAllOptions() {
    return _message__WEBPACK_IMPORTED_MODULE_4__["commands"].GetOptions(_Users_ZhaoJun_Desktop_violentmonkey_src_common_options_defaults__WEBPACK_IMPORTED_MODULE_2__["default"]);
  },

  /** @return {Object} */
  GetOptions(data) {
    return safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["mapEntry"], data, ([key]) => getOption(key));
  },

  /** @return {void} */
  SetOptions(data) {
    Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["ensureArray"])(data).forEach(item => setOption(item.key, item.value));
  }

});
let changes = {};
const hooks = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["initHooks"])();
const callHooksLater = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["debounce"])(callHooks, 100);
let options = {};
let initPending = browser.storage.local.get('options').then(({
  options: data
}) => {
  if (data && typeof data === 'object') options = data;

  if (false) {}

  if (!Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectGet"])(options, 'version')) {
    setOption('version', 1);
  }

  initPending = null;
});
_init__WEBPACK_IMPORTED_MODULE_3__["preInitialize"].push(initPending);

function fireChange(keys, value) {
  // Flattening key path so the subscribers can update nested values without overwriting the parent
  const key = keys.join('.'); // Ensuring the correct order when updates were mixed like this: foo.bar=1; foo={bar:2}; foo.bar=3

  delete changes[key];
  changes[key] = value;
  callHooksLater();
}

function callHooks() {
  hooks.fire(changes);
  changes = {};
}

function getOption(key, def) {
  const keys = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["normalizeKeys"])(key);
  const mainKey = keys[0];
  let value = options[mainKey];
  if (value == null) value = _Users_ZhaoJun_Desktop_violentmonkey_src_common_options_defaults__WEBPACK_IMPORTED_MODULE_2__["default"][mainKey];
  if (value == null) value = def;
  return keys.length > 1 ? Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectGet"])(value, keys.slice(1), def) : value;
}
function getDefaultOption(key) {
  return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectGet"])(_Users_ZhaoJun_Desktop_violentmonkey_src_common_options_defaults__WEBPACK_IMPORTED_MODULE_2__["default"], key);
}
function setOption(key, value) {
  if (initPending) {
    initPending.then(() => {
      setOption(key, value);
    });
    return;
  }

  const keys = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["normalizeKeys"])(key);
  const optionKey = keys.join('.');
  let optionValue = value;
  const mainKey = keys[0];

  if (mainKey in _Users_ZhaoJun_Desktop_violentmonkey_src_common_options_defaults__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    if (keys.length > 1) {
      optionValue = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectSet"])(getOption(mainKey), keys.slice(1), value);
    }

    options[mainKey] = optionValue;
    browser.storage.local.set({
      options
    });
    fireChange(keys, value);

    if (false) {}
  }
}
const hookOptions = hooks.hook;

/***/ }),

/***/ "./src/background/utils/patch-db.js":
/*!******************************************!*\
  !*** ./src/background/utils/patch-db.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/background/utils/script.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/storage */ "./src/common/storage.js");


/* harmony default export */ __webpack_exports__["default"] = (() => new Promise((resolve, reject) => {
  console.info('Upgrade database...');
  init();

  function init() {
    const req = indexedDB.open('Violentmonkey', 1);

    req.onsuccess = () => {
      try {
        transform(req.result);
      } catch (err) {
        // This should not happen, but did happen in Firefox.
        reject(err);
      }
    };

    req.onerror = reject;

    req.onupgradeneeded = () => {
      // No available upgradation
      reject();
    };
  }

  function transform(db) {
    const tx = db.transaction(['scripts', 'require', 'cache', 'values']);
    const updates = {};
    let processing = 3;

    const done = () => {
      processing -= 1;
      if (!processing) resolve(browser.storage.local.set(updates));
    };

    const getAll = (storeName, callback) => {
      const req = tx.objectStore(storeName).getAll();

      req.onsuccess = () => callback(req.result);

      req.onerror = reject;
    };

    getAll('scripts', allScripts => {
      const uriMap = {};
      allScripts.forEach(script => {
        const {
          code,
          id,
          uri
        } = script;
        updates[`${_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_1__["default"].script.prefix}${id}`] = transformScript(script);
        updates[`${_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_1__["default"].code.prefix}${id}`] = code;
        uriMap[uri] = id;
      });
      getAll('values', allValues => {
        allValues.forEach(({
          uri,
          values
        }) => {
          const id = uriMap[uri];
          if (id) updates[`${_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_1__["default"].value.prefix}${id}`] = values;
        });
        done();
      });
    });
    getAll('cache', allCache => {
      allCache.forEach(({
        uri,
        data
      }) => {
        updates[`${_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_1__["default"].cache.prefix}${uri}`] = data;
      });
      done();
    });
    getAll('require', allRequire => {
      allRequire.forEach(({
        uri,
        code
      }) => {
        updates[`${_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_1__["default"].require.prefix}${uri}`] = code;
      });
      done();
    });
  }

  function transformScript(script) {
    return {
      meta: Object(_script__WEBPACK_IMPORTED_MODULE_0__["parseMeta"])(script.code),
      custom: Object.assign({
        origInclude: true,
        origExclude: true,
        origMatch: true,
        origExcludeMatch: true
      }, script.custom),
      props: {
        id: script.id,
        uri: script.uri,
        position: script.position
      },
      config: {
        enabled: script.enabled,
        shouldUpdate: script.update
      }
    };
  }
}) // Ignore error
.catch(() => {}));

/***/ }),

/***/ "./src/background/utils/popup-tracker.js":
/*!***********************************************!*\
  !*** ./src/background/utils/popup-tracker.js ***!
  \***********************************************/
/*! exports provided: popupTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupTabs", function() { return popupTabs; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ "./src/background/utils/cache.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ "./src/background/utils/db.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ "./src/background/utils/init.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");





const popupTabs = {}; // { tabId: 1 }

_init__WEBPACK_IMPORTED_MODULE_3__["postInitialize"].push(() => {
  browser.runtime.onConnect.addListener(onPopupOpened);
  browser.webRequest.onBeforeRequest.addListener(prefetchSetPopup, {
    urls: [browser.runtime.getURL(browser.runtime.getManifest().browser_action.default_popup)],
    types: ['main_frame']
  });
});

function onPopupOpened(port) {
  const tabId = +port.name;
  popupTabs[tabId] = 1;
  Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["sendTabCmd"])(tabId, 'PopupShown', true);
  port.onDisconnect.addListener(onPopupClosed);
  delete _message__WEBPACK_IMPORTED_MODULE_4__["commands"].SetPopup;
}

function onPopupClosed({
  name
}) {
  delete popupTabs[name];
  Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["sendTabCmd"])(+name, 'PopupShown', false);
}

async function prefetchSetPopup() {
  const tabId = (await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["getActiveTab"])()).id;
  Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["sendTabCmd"])(tabId, 'PopupShown', true);

  _message__WEBPACK_IMPORTED_MODULE_4__["commands"].SetPopup = async (data, src) => {
    Object.assign(data, (await Object(_db__WEBPACK_IMPORTED_MODULE_2__["getData"])(data.ids)));
    _cache__WEBPACK_IMPORTED_MODULE_1__["default"].put('SetPopup', Object.assign({
      [src.frameId]: [data, src]
    }, _cache__WEBPACK_IMPORTED_MODULE_1__["default"].get('SetPopup')));
  };
}

/***/ }),

/***/ "./src/background/utils/preinject.js":
/*!*******************************************!*\
  !*** ./src/background/utils/preinject.js ***!
  \*******************************************/
/*! exports provided: getInjectedScripts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjectedScripts", function() { return getInjectedScripts; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/cache */ "./src/common/cache.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/storage */ "./src/common/storage.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/ua */ "./src/common/ua.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./db */ "./src/background/utils/db.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./init */ "./src/background/utils/init.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./options */ "./src/background/utils/options.js");










const API_CONFIG = {
  urls: ['*://*/*'],
  // `*` scheme matches only http and https
  types: ['main_frame', 'sub_frame']
};
const TIME_AFTER_SEND = 10e3; // longer as establishing connection to sites may take time

const TIME_AFTER_RECEIVE = 1e3; // shorter as response body will be coming very soon

const TIME_KEEP_DATA = 60e3; // 100ms should be enough but the tab may hang or get paused in debugger

const cacheCode = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_cache__WEBPACK_IMPORTED_MODULE_2__["default"])({
  lifetime: TIME_KEEP_DATA
});
const cache = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_cache__WEBPACK_IMPORTED_MODULE_2__["default"])({
  lifetime: TIME_KEEP_DATA,
  onDispose: async promise => {
    const data = await promise;
    const rcs = await (data == null ? void 0 : data.rcsPromise);
    rcs == null ? void 0 : rcs.unregister();
  }
});
const INJECT_INTO = 'injectInto'; // KEY_XXX for hooked options

const KEY_EXPOSE = 'expose';
const KEY_DEF_INJECT_INTO = 'defaultInjectInto';
const KEY_IS_APPLIED = 'isApplied';
const KEY_XHR_INJECT = 'xhrInject';
const expose = {};
let isApplied;
let injectInto;
let xhrInject;
Object(_options__WEBPACK_IMPORTED_MODULE_9__["hookOptions"])(onOptionChanged);
_init__WEBPACK_IMPORTED_MODULE_7__["postInitialize"].push(() => {
  for (const key of [KEY_EXPOSE, KEY_DEF_INJECT_INTO, KEY_IS_APPLIED, KEY_XHR_INJECT]) {
    onOptionChanged({
      [key]: Object(_options__WEBPACK_IMPORTED_MODULE_9__["getOption"])(key)
    });
  }
});
Object.assign(_message__WEBPACK_IMPORTED_MODULE_8__["commands"], {
  async InjectionFeedback({
    feedId,
    feedback,
    forceContent
  }, src) {
    feedback.forEach(processFeedback, src);

    if (feedId) {
      // cache cleanup when getDataFF outruns GetInjected
      cache.del(feedId.cacheKey); // envDelayed

      const env = await cache.pop(feedId.envKey);

      if (env) {
        env.forceContent = forceContent;
        env.scripts.map(prepareScript, env).filter(Boolean).forEach(processFeedback, src);
        return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__["objectPick"])(env, ['cache', 'scripts']);
      }
    }
  }

});
/** @this {chrome.runtime.MessageSender} */

function processFeedback([key, needsInjection]) {
  const code = cacheCode.pop(key); // see TIME_KEEP_DATA comment

  if (needsInjection && code) {
    browser.tabs.executeScript(this.tab.id, {
      code,
      frameId: this.frameId,
      runAt: 'document_start'
    });
  }
}

const propsToClear = {
  [_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].cache.prefix]: _db__WEBPACK_IMPORTED_MODULE_6__["ENV_CACHE_KEYS"],
  [_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].code.prefix]: true,
  [_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].require.prefix]: _db__WEBPACK_IMPORTED_MODULE_6__["ENV_REQ_KEYS"],
  [_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].script.prefix]: true,
  [_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].value.prefix]: _db__WEBPACK_IMPORTED_MODULE_6__["ENV_VALUE_IDS"]
};
browser.storage.onChanged.addListener(async changes => {
  const dbKeys = Object.keys(changes);
  const cacheValues = await Promise.all(cache.getValues());
  const dirty = cacheValues.some(data => data.inject && dbKeys.some(key => {
    var _data$prop;

    const prefix = key.slice(0, key.indexOf(':') + 1);
    const prop = propsToClear[prefix];
    key = key.slice(prefix.length);
    return prop === true || ((_data$prop = data[prop]) == null ? void 0 : _data$prop.includes(prefix === _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].value.prefix ? +key : key));
  }));

  if (dirty) {
    cache.destroy();
  }
});

function normalizeRealm(value) {
  return safeCall(hasOwnProperty, _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_MAPPING"], value) ? value : injectInto || _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_AUTO"];
}

function onOptionChanged(changes) {
  safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__["forEachEntry"], changes, ([key, value]) => {
    switch (key) {
      case KEY_DEF_INJECT_INTO:
        injectInto = normalizeRealm(value);
        cache.destroy();
        break;

      case KEY_XHR_INJECT:
        toggleXhrInject(value);
        cache.destroy();
        break;

      case KEY_IS_APPLIED:
        togglePreinject(value);
        break;

      case KEY_EXPOSE:
        safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__["forEachEntry"], value, ([site, isExposed]) => {
          expose[decodeURIComponent(site)] = isExposed;
        });
        break;

      default:
        if (key.includes('.')) {
          // used by `expose.url`
          onOptionChanged(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__["objectSet"])({}, key, value));
        }

    }
  });
}
/** @return {Promise<Object>} */


function getInjectedScripts(url, tabId, frameId, forceContent) {
  const key = getKey(url, !frameId);
  return cache.pop(key) || prepare(key, url, tabId, frameId, forceContent);
}

function getKey(url, isTop) {
  return isTop ? url : `-${url}`;
}

function togglePreinject(enable) {
  isApplied = enable; // Using onSendHeaders because onHeadersReceived in Firefox fires *after* content scripts.
  // And even in Chrome a site may be so fast that preinject on onHeadersReceived won't be useful.

  const onOff = `${enable ? 'add' : 'remove'}Listener`;
  const config = enable ? API_CONFIG : undefined;
  browser.webRequest.onSendHeaders[onOff](onSendHeaders, config);

  if (!isApplied || !xhrInject) {
    // will be registered in toggleXhrInject
    browser.webRequest.onHeadersReceived[onOff](onHeadersReceived, config);
  }

  cache.destroy();
}

function toggleXhrInject(enable) {
  xhrInject = enable;
  browser.webRequest.onHeadersReceived.removeListener(onHeadersReceived);

  if (enable) {
    browser.webRequest.onHeadersReceived.addListener(onHeadersReceived, API_CONFIG, ['blocking', 'responseHeaders', browser.webRequest.OnHeadersReceivedOptions.EXTRA_HEADERS].filter(Boolean));
  }
}

function onSendHeaders({
  url,
  tabId,
  frameId
}) {
  if (!_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECTABLE_TAB_URL_RE"].test(url)) return;
  const isTop = !frameId;
  const key = getKey(url, isTop);

  if (!cache.has(key)) {
    // GetInjected message will be sent soon by the content script
    // and it may easily happen while getScriptsByURL is still waiting for browser.storage
    // so we'll let GetInjected await this pending data by storing Promise in the cache
    cache.put(key, prepare(key, url, tabId, frameId), TIME_AFTER_SEND);
  }
}
/** @param {chrome.webRequest.WebResponseHeadersDetails} info */


function onHeadersReceived(info) {
  const key = getKey(info.url, !info.frameId);
  const data = xhrInject && cache.get(key);
  cache.hit(key, TIME_AFTER_RECEIVE);
  return (data == null ? void 0 : data.inject) && prepareXhrBlob(info, data);
}
/**
 * @param {chrome.webRequest.WebResponseHeadersDetails} info
 * @param {VMGetInjectedDataContainer} data
 */


function prepareXhrBlob({
  url,
  responseHeaders
}, data) {
  if (url.startsWith('https:') && detectStrictCsp(responseHeaders)) {
    forceContentInjection(data);
  }

  const blobUrl = URL.createObjectURL(new Blob([JSON.stringify(data.inject)]));
  responseHeaders.push({
    name: 'Set-Cookie',
    value: `"${"Violentmonkey:ZMvBNCNAdC4="}"=${blobUrl.split('/').pop()}; SameSite=Lax`
  });
  setTimeout(URL.revokeObjectURL, TIME_KEEP_DATA, blobUrl);
  return {
    responseHeaders
  };
}

function prepare(key, url, tabId, frameId, forceContent) {
  /** @namespace VMGetInjectedDataContainer */
  const res = {
    /** @namespace VMGetInjectedData */
    inject: {
      expose: !frameId && url.startsWith('https://') && expose[url.split('/', 3)[2]]
    }
  };
  return isApplied ? prepareScripts(res, key, url, tabId, frameId, forceContent) : res;
}

async function prepareScripts(res, cacheKey, url, tabId, frameId, forceContent) {
  const data = await Object(_db__WEBPACK_IMPORTED_MODULE_6__["getScriptsByURL"])(url, !frameId);
  const {
    envDelayed,
    scripts
  } = data;
  const isLate = forceContent != null;
  data.forceContent = forceContent;
  const feedback = scripts.map(prepareScript, data).filter(Boolean);
  const more = envDelayed.promise;
  const envKey = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["getUniqId"])(`${tabId}:${frameId}:`);
  const {
    inject
  } = res;
  /** @namespace VMGetInjectedData */

  Object.assign(inject, {
    scripts,
    [INJECT_INTO]: injectInto,
    cache: data.cache,
    feedId: {
      cacheKey,
      // InjectionFeedback cache key for cleanup when getDataFF outruns GetInjected
      envKey // InjectionFeedback cache key for envDelayed

    },
    hasMore: !!more,
    // tells content bridge to expect envDelayed
    forceContent: forceContent || // Trying to skip page sandbox when xhrInject is on:
    feedback.length === scripts.length // ...when all `envStart` scripts are `content`,
    && envDelayed.scripts.every(scr => isContentRealm(scr, forceContent)) // and `envDelayed` too.
    ,
    ids: data.disabledIds,
    // content bridge adds the actually running ids and sends via SetPopup
    info: {
      ua: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_5__["default"]
    }
  });
  /** @namespace VMGetInjectedDataContainer */

  Object.assign(res, {
    feedback,
    valOpIds: [...data[_db__WEBPACK_IMPORTED_MODULE_6__["ENV_VALUE_IDS"]], ...envDelayed[_db__WEBPACK_IMPORTED_MODULE_6__["ENV_VALUE_IDS"]]],
    rcsPromise: !isLate && !xhrInject && IS_FIREFOX ? registerScriptDataFF(inject, url, !!frameId) : null
  });
  if (more) cache.put(envKey, more);
  cache.put(cacheKey, res); // necessary for the synchronous onHeadersReceived

  return res;
}
/** @this {VMScriptByUrlData} */


function prepareScript(script) {
  var _meta$require;

  const {
    custom,
    meta,
    props
  } = script;
  const {
    id
  } = props;
  const {
    forceContent,
    require,
    value
  } = this;
  const code = this.code[id];
  const dataKey = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["getUniqId"])('VMin');
  const displayName = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["getScriptName"])(script);
  const name = encodeURIComponent(displayName.replace(/[#&',/:;?@=+]/g, replaceWithFullWidthForm));
  const isContent = isContentRealm(script, forceContent);
  const pathMap = custom.pathMap || {};
  const reqs = (_meta$require = meta.require) == null ? void 0 : _meta$require.map(key => require[pathMap[key] || key]).filter(Boolean); // trying to avoid progressive string concatenation of potentially huge code slices
  // adding `;` on a new line in case some required script ends with a line comment

  const reqsSlices = reqs ? [].concat(...reqs.map(req => [req, '\n;'])) : [];
  const hasReqs = reqsSlices.length;
  const injectedCode = [// hiding module interface from @require'd scripts so they don't mistakenly use it
  `window.${dataKey}=function(${dataKey}){try{with(this)((define,module,exports)=>{`, ...reqsSlices, // adding a nested IIFE to support 'use strict' in the code when there are @requires
  hasReqs ? '(()=>{' : '', code, // adding a new line in case the code ends with a line comment
  code.endsWith('\n') ? '' : '\n', hasReqs ? '})()' : '', // 0 at the end to suppress errors about non-cloneable result of executeScript in FF
  `})()}catch(e){${dataKey}(e)}};0`, // Firefox lists .user.js among our own content scripts so a space at start will group them
  `\n//# sourceURL=${_init__WEBPACK_IMPORTED_MODULE_7__["extensionRoot"]}${IS_FIREFOX ? '%20' : ''}${name}.user.js#${id}`].join('');
  cacheCode.put(dataKey, injectedCode, TIME_KEEP_DATA);
  /** @namespace VMInjectedScript */

  Object.assign(script, {
    dataKey,
    displayName,
    // code will be `true` if the desired realm is PAGE which is not injectable
    code: isContent ? '' : forceContent || injectedCode,
    metaStr: code.match(_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["METABLOCK_RE"])[1] || '',
    values: value[id] || null
  });
  return isContent && [dataKey, true];
}

function replaceWithFullWidthForm(s) {
  // fullwidth range starts at 0xFF00, normal range starts at space char code 0x20
  return String.fromCharCode(s.charCodeAt(0) - 0x20 + 0xFF00);
}

const resolveDataCodeStr = `(${function _(data) {
  /* `function` is required to compile `this`, and `this` is required because our safe-globals
   * shadows `window` so its name is minified and hence inaccessible here */
  const {
    vmResolve
  } = this;

  if (vmResolve) {
    vmResolve(data);
  } else {
    // running earlier than the main content script for whatever reason
    this.vmData = data;
  }
}})`; // TODO: rework the whole thing to register scripts individually with real `matches`

function registerScriptDataFF(inject, url, allFrames) {
  var _browser$contentScrip;

  return (_browser$contentScrip = browser.contentScripts) == null ? void 0 : _browser$contentScrip.register({
    allFrames,
    js: [{
      code: `${resolveDataCodeStr}(${JSON.stringify(inject)})`
    }],
    matches: url.split('#', 1),
    runAt: 'document_start'
  });
}
/** @param {chrome.webRequest.HttpHeader[]} responseHeaders */


function detectStrictCsp(responseHeaders) {
  return responseHeaders.some(({
    name,
    value
  }) => /^content-security-policy$/i.test(name) && /^.(?!.*'unsafe-inline')/.test( // true if not empty and without 'unsafe-inline'
  value.match(/(?:^|;)\s*script-src-elem\s[^;]+/) || value.match(/(?:^|;)\s*script-src\s[^;]+/) || value.match(/(?:^|;)\s*default-src\s[^;]+/) || ''));
}
/** @param {VMGetInjectedDataContainer} data */


function forceContentInjection(data) {
  /** @type VMGetInjectedData */
  const inject = data.inject;
  inject.forceContent = true;
  inject.scripts.forEach(scr => {
    // When script wants `page`, the result below will be `true` so the script goes into `failedIds`
    scr.code = !isContentRealm(scr, true) || '';
    data.feedback.push([scr.dataKey, true]);
  });
}

function isContentRealm(scr, forceContent) {
  const realm = scr[INJECT_INTO] || (scr[INJECT_INTO] = normalizeRealm(scr.custom[INJECT_INTO] || scr.meta[INJECT_INTO]));
  return realm === _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_CONTENT"] || forceContent && realm === _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_AUTO"];
}

/***/ }),

/***/ "./src/background/utils/requests.js":
/*!******************************************!*\
  !*** ./src/background/utils/requests.js ***!
  \******************************************/
/*! exports provided: clearRequestsByTabId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearRequestsByTabId", function() { return clearRequestsByTabId; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/ua */ "./src/common/ua.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cache */ "./src/background/utils/cache.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script */ "./src/background/utils/script.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./init */ "./src/background/utils/init.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");
/* harmony import */ var _merge_video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./merge-video */ "./src/background/utils/merge-video.js");







 // import { downloadM3u8 } from './m3u8';


const reqHandler = {
  m3u8: _merge_video__WEBPACK_IMPORTED_MODULE_8__["mergeM3u8"],
  merge: _merge_video__WEBPACK_IMPORTED_MODULE_8__["mergeVideo"]
};
const VM_VERIFY = 'VM-Verify';
const CONFIRM_URL_BASE = `${_init__WEBPACK_IMPORTED_MODULE_6__["extensionRoot"]}confirm/index.html#`;
/** @type {Object<string,VMHttpRequest>} */

const requests = {};
const downloads = {};
const verify = {};
const tabRequests = {};
const {
  chrome
} = global;
let encoder;

if (chrome) {
  chrome.downloads.onChanged.addListener(evt => {
    var _evt$state, _evt$state2;

    // console.info('downloads onChanged', evt);
    if (!downloads[evt.id]) return;
    const {
      req,
      src
    } = downloads[evt.id];
    const {
      tab: {
        id: tabId
      },
      frameId
    } = src;

    if (((_evt$state = evt.state) == null ? void 0 : _evt$state.current) === 'complete') {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendTabCmd"])(tabId, 'HttpRequested', {
        type: 'load',
        id: req.id,
        downloadId: evt.id
      }, {
        frameId
      });
    } else if (((_evt$state2 = evt.state) == null ? void 0 : _evt$state2.current) === 'interrupted') {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendTabCmd"])(tabId, 'HttpRequested', {
        type: 'error',
        id: req.id,
        downloadId: evt.id
      }, {
        frameId
      });
    } else {
      return;
    }

    delete downloads[evt.id];
    delete requests[req.id];
  });
}

Object.assign(_message__WEBPACK_IMPORTED_MODULE_7__["commands"], {
  ConfirmInstall: confirmInstall,

  async CheckInstallerTab(tabId, src) {
    const tab = IS_FIREFOX && (src.url || '').startsWith('file:') && (await browser.tabs.get(tabId).catch(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["noop"]));
    return tab && (tab.pendingUrl || tab.url || '').startsWith(CONFIRM_URL_BASE);
  },

  /** @return {void} */
  HttpRequest(opts, src) {
    const {
      tab: {
        id: tabId
      },
      frameId
    } = src;
    const {
      id,
      eventsToNotify
    } = opts;
    console.info('req opts', opts);

    if (reqHandler[opts.type]) {
      const downloadId = id; // fake downloadId for inject.js

      opts.src = src;
      opts.requests = requests; // needed to append req in mergeVideo

      opts.onprogress = (loaded, total) => {
        if (eventsToNotify == null ? void 0 : eventsToNotify.includes('progress')) {
          // console.info('onprogress', {loaded, total});
          Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendTabCmd"])(tabId, 'HttpRequested', {
            type: 'progress',
            id,
            downloadId,
            loaded,
            total
          }, {
            frameId
          });
        }
      };

      opts.onload = data => {
        const res = {
          type: 'load',
          downloadId,
          data,
          id
        };

        if (data instanceof Blob) {
          res.blobbed = true;
          res.chunked = false;
          res.contentType = 'application/octet-stream';
          res.data = {
            response: blob2objectUrl(data),
            status: '200'
          };
          delete res.downloadId;
        }

        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendTabCmd"])(tabId, 'HttpRequested', res, {
          frameId
        });
      };

      opts.onerror = error => {
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendTabCmd"])(tabId, 'HttpRequested', {
          type: 'error',
          downloadId,
          id,
          error
        }, {
          frameId
        });
      };

      return reqHandler[opts.type](opts, httpRequest);
    }

    requests[id] = {
      id,
      tabId,
      eventsToNotify,
      xhr: new XMLHttpRequest()
    };
    (tabRequests[tabId] || (tabRequests[tabId] = {}))[id] = 1;
    httpRequest(opts, src, res => {
      // console.info({ res, req: requests[id] });
      if (requests[id]) {
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendTabCmd"])(tabId, 'HttpRequested', res, {
          frameId
        });
      }
    });
  },

  /** @return {void} */
  AbortRequest(id) {
    const req = requests[id];

    if (req) {
      // eslint-disable-next-line no-undef
      if (chrome) {
        // eslint-disable-next-line no-undef
        chrome.downloads.cancel(req.id);
        delete requests[req.id];
      } else {
        req.xhr.abort();
        clearRequest(req);
      }
    }
  },

  RevokeBlob(url) {
    const timer = _cache__WEBPACK_IMPORTED_MODULE_4__["default"].pop(`xhrBlob:${url}`);

    if (timer) {
      clearTimeout(timer);
      URL.revokeObjectURL(url);
    }
  }

});
const specialHeaders = ['user-agent', // https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name
// https://cs.chromium.org/?q=file:cc+symbol:IsForbiddenHeader%5Cb
'accept-charset', 'accept-encoding', 'access-control-request-headers', 'access-control-request-method', 'connection', 'content-length', 'cookie', 'cookie2', 'date', 'dnt', 'expect', 'host', 'keep-alive', 'origin', 'referer', 'te', 'trailer', 'transfer-encoding', 'upgrade', 'via']; // const tasks = {};

const HeaderInjector = (() => {
  /** @type chrome.webRequest.RequestFilter */
  const apiFilter = {
    urls: ['<all_urls>'],
    types: ['xmlhttprequest']
  };
  const EXTRA_HEADERS = [browser.webRequest.OnBeforeSendHeadersOptions.EXTRA_HEADERS].filter(Boolean);
  const headersToInject = {};
  /** @param {chrome.webRequest.HttpHeader} header */

  const isVmVerify = header => header.name === VM_VERIFY;

  const isNotCookie = header => !/^cookie2?$/i.test(header.name);

  const isSendable = header => header.name !== VM_VERIFY;

  const isSendableAnon = header => isSendable(header) && isNotCookie(header);

  const RE_SET_COOKIE = /^set-cookie2?$/i;
  const RE_SET_COOKIE_VALUE = /^\s*(?:__(Secure|Host)-)?([^=\s]+)\s*=\s*(")?([!#-+\--:<-[\]-~]*)\3(.*)/;
  const RE_SET_COOKIE_ATTR = /\s*;?\s*(\w+)(?:=(")?([!#-+\--:<-[\]-~]*)\2)?/y;
  const SAME_SITE_MAP = {
    strict: 'strict',
    lax: 'lax',
    none: 'no_restriction'
  };
  /**
   * @param {string} headerValue
   * @param {VMHttpRequest} req
   * @param {string} url
   */

  const setCookieInStore = (headerValue, req, url) => {
    let m = RE_SET_COOKIE_VALUE.exec(headerValue);

    if (m) {
      var _opt$sameSite;

      const [, prefix, name,, value, optStr] = m;
      const opt = {};
      const isHost = prefix === 'Host';
      RE_SET_COOKIE_ATTR.lastIndex = 0;

      while (m = RE_SET_COOKIE_ATTR.exec(optStr)) {
        opt[m[1].toLowerCase()] = m[3];
      }

      const sameSite = (_opt$sameSite = opt.sameSite) == null ? void 0 : _opt$sameSite.toLowerCase();
      browser.cookies.set({
        url,
        name,
        value,
        domain: isHost ? undefined : opt.domain,
        expirationDate: Math.max(0, +new Date(opt['max-age'] * 1000 || opt.expires)) || undefined,
        httpOnly: 'httponly' in opt,
        path: isHost ? '/' : opt.path,
        sameSite: SAME_SITE_MAP[sameSite],
        secure: url.startsWith('https:') && (!!prefix || sameSite === 'none' || 'secure' in opt),
        storeId: req.storeId
      });
    }
  };

  const apiEvents = {
    onBeforeSendHeaders: {
      options: ['requestHeaders', 'blocking', ...EXTRA_HEADERS],

      /** @param {chrome.webRequest.WebRequestHeadersDetails} details */
      listener({
        requestHeaders: headers,
        requestId
      }) {
        var _headers$find;

        // only the first call during a redirect/auth chain will have VM-Verify header
        const reqId = ((_headers$find = headers.find(isVmVerify)) == null ? void 0 : _headers$find.value) || verify[requestId];
        const req = reqId && requests[reqId];

        if (reqId && req) {
          verify[requestId] = reqId;
          req.coreId = requestId;
          headers = (req.noNativeCookie ? headers.filter(isNotCookie) : headers).concat(headersToInject[reqId] || []).filter(req.anonymous ? isSendableAnon : isSendable);
        }

        return {
          requestHeaders: headers
        };
      }

    },
    onHeadersReceived: {
      options: ['responseHeaders', 'blocking', ...EXTRA_HEADERS],

      /** @param {chrome.webRequest.WebRequestHeadersDetails} details */
      listener({
        responseHeaders: headers,
        requestId,
        url
      }) {
        const req = requests[verify[requestId]];

        if (req) {
          if (req.anonymous || req.storeId) {
            headers = headers.filter(h => !RE_SET_COOKIE.test(h.name) || !req.storeId || setCookieInStore(h.value, req, url));
          }

          req.responseHeaders = headers.map(encodeWebRequestHeader).join('');
          return {
            responseHeaders: headers
          };
        }
      }

    }
  }; // Chrome 74-91 needs an extraHeaders listener at tab load start, https://crbug.com/1074282
  // We're attaching a no-op in non-blocking mode so it's very lightweight and fast.

  if (_Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_3__["default"].chrome >= 74 && _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_3__["default"].chrome <= 91) {
    browser.webRequest.onBeforeSendHeaders.addListener(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["noop"], apiFilter, ['extraHeaders']);
  }

  return {
    add(reqId, headers) {
      // need to set the entry even if it's empty [] so that 'if' check in del() runs only once
      headersToInject[reqId] = headers; // need the listener to get the requestId

      safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["forEachEntry"], apiEvents, ([name, {
        listener,
        options
      }]) => {
        browser.webRequest[name].addListener(listener, apiFilter, options);
      });
    },

    del(reqId) {
      if (reqId in headersToInject) {
        delete headersToInject[reqId];

        if (Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(headersToInject)) {
          safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["forEachEntry"], apiEvents, ([name, {
            listener
          }]) => {
            browser.webRequest[name].removeListener(listener);
          });
        }
      }
    }

  };
})();
/* 1MB takes ~20ms to encode/decode so it doesn't block the process of the extension and web page,
 * which lets us and them be responsive to other events or user input. */


const CHUNK_SIZE = 1e6;

async function blob2chunk(response, index) {
  return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["blob2base64"])(response, index * CHUNK_SIZE, CHUNK_SIZE);
}

function blob2objectUrl(response) {
  const url = URL.createObjectURL(response);
  _cache__WEBPACK_IMPORTED_MODULE_4__["default"].put(`xhrBlob:${url}`, setTimeout(_message__WEBPACK_IMPORTED_MODULE_7__["commands"].RevokeBlob, 60e3, url), 61e3);
  return url;
}
/** @param {VMHttpRequest} req */


function xhrCallbackWrapper(req) {
  let lastPromise = Promise.resolve();
  let contentType;
  let dataSize;
  let numChunks;
  let response;
  let responseText;
  let responseHeaders; // let sent = false;

  const {
    id,
    blobbed,
    chunked,
    xhr
  } = req; // Chrome encodes messages to UTF8 so they can grow up to 4x but 64MB is the message size limit

  const getChunk = blobbed && blob2objectUrl || chunked && blob2chunk;

  const getResponseHeaders = () => {
    const headers = req.responseHeaders || xhr.getAllResponseHeaders();

    if (responseHeaders !== headers) {
      responseHeaders = headers;
      return {
        responseHeaders
      };
    }
  };

  return evt => {
    const type = evt.type;

    if (!contentType) {
      contentType = xhr.getResponseHeader('Content-Type') || 'application/octet-stream';
    }

    if (xhr.response !== response) {
      response = xhr.response; // sent = false;

      try {
        responseText = xhr.responseText;
        if (responseText === response) responseText = ['same'];
      } catch (e) {// ignore if responseText is unreachable
      }

      if ((blobbed || chunked) && response) {
        dataSize = response.size;
        numChunks = chunked && Math.ceil(dataSize / CHUNK_SIZE) || 1;
      }
    }

    const shouldNotify = req.eventsToNotify.includes(type); // only send response when XHR is complete

    const shouldSendResponse = xhr.readyState === 4 && shouldNotify;
    lastPromise = lastPromise.then(async () => {
      if (shouldSendResponse && blobbed && req.type === 'download') {
        if (req.fileName && chrome) {
          const blobUrl = URL.createObjectURL(response);
          return chrome.downloads.download({
            url: blobUrl,
            filename: req.fileName
          }, downloadId => {
            req.cb({
              blobbed,
              chunked,
              contentType,
              dataSize,
              id,
              type,
              data: {
                finalUrl: xhr.responseURL,
                response: '',
                responseText: downloadId
              }
            });
            URL.revokeObjectURL(blobUrl);
          });
        }

        return req.cb({
          blobbed,
          chunked,
          contentType,
          dataSize,
          id,
          type,
          data: response
        });
      } // console.info({ evt });


      await req.cb({
        blobbed,
        chunked,
        contentType,
        dataSize,
        id,
        numChunks,
        type,
        data: shouldNotify && _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          finalUrl: xhr.responseURL
        }, getResponseHeaders(), {}, Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["objectPick"])(xhr, ['readyState', 'status', 'statusText']), {}, 'loaded' in evt && Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["objectPick"])(evt, ['lengthComputable', 'loaded', 'total']), {
          response: shouldSendResponse ? numChunks && (await getChunk(response, 0)) || response : null,
          responseText: shouldSendResponse ? responseText : null
        })
      });

      if (shouldSendResponse) {
        for (let i = 1; i < numChunks; i += 1) {
          await req.cb({
            id,
            chunk: {
              pos: i * CHUNK_SIZE,
              data: await getChunk(response, i),
              last: i + 1 === numChunks
            }
          });
        }
      }

      if (type === 'loadend') {
        clearRequest(req);
      }
    });
  };
}

function isSpecialHeader(lowerHeader) {
  return specialHeaders.includes(lowerHeader) || lowerHeader.startsWith('proxy-') || lowerHeader.startsWith('sec-');
}
/**
 * @param {Object} opts
 * @param {chrome.runtime.MessageSender | browser.runtime.MessageSender} src
 * @param {function} cb
 */


async function httpRequest(opts, src, cb) {
  const {
    tab
  } = src;
  const {
    incognito
  } = tab;
  const {
    anonymous,
    id,
    overrideMimeType,
    xhrType,
    url
  } = opts;
  const req = requests[id];
  if (!req || req.cb) return;
  req.cb = cb;
  req.type = opts.type;
  req.fileName = opts.fileName;
  req.anonymous = anonymous;
  const {
    xhr
  } = req;
  const vmHeaders = []; // Firefox can send Blob/ArrayBuffer directly

  const chunked = !IS_FIREFOX && incognito;
  const blobbed = xhrType && !IS_FIREFOX && !incognito;
  const [body, contentType] = decodeBody(opts.data); // Chrome can't fetch Blob URL in incognito so we use chunks

  req.blobbed = blobbed;
  req.chunked = chunked; // Firefox doesn't send cookies, https://github.com/violentmonkey/violentmonkey/issues/606
  // Both Chrome & FF need explicit routing of cookies in containers or incognito

  let shouldSendCookies = !anonymous && (incognito || IS_FIREFOX);
  xhr.open(opts.method || 'GET', url, true, opts.user || '', opts.password || '');
  xhr.setRequestHeader(VM_VERIFY, id);
  if (contentType) xhr.setRequestHeader('Content-Type', contentType);
  safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["forEachEntry"], opts.headers, ([name, value]) => {
    const lowerName = name.toLowerCase();

    if (isSpecialHeader(lowerName)) {
      vmHeaders.push({
        name,
        value
      });
    } else if (!lowerName.startsWith('vm-')) {
      // `VM-` headers are reserved
      xhr.setRequestHeader(name, value);
    }

    if (lowerName === 'cookie') {
      shouldSendCookies = false;
    }
  });
  xhr.responseType = (chunked || blobbed) && 'blob' || xhrType || 'text';
  xhr.timeout = Math.max(0, Math.min(0x7FFFFFFF, opts.timeout)) || 0;
  if (overrideMimeType) xhr.overrideMimeType(overrideMimeType);

  if (shouldSendCookies) {
    req.noNativeCookie = true;

    for (const store of await browser.cookies.getAllCookieStores()) {
      if (store.tabIds.includes(tab.id)) {
        if (IS_FIREFOX ? store.id !== 'firefox-default' : store.id !== '0') {
          /* Cookie routing. For the main store we rely on the browser.
           * The ids are hard-coded as `stores` may omit the main store if no such tabs are open. */
          req.storeId = store.id;
        }

        break;
      }
    }

    const now = Date.now() / 1000;
    const cookies = (await browser.cookies.getAll(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      url,
      storeId: req.storeId
    }, _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_3__["default"].firefox >= 59 && {
      firstPartyDomain: null
    }))).filter(c => c.session || c.expirationDate > now); // FF reports expired cookies!

    if (cookies.length) {
      vmHeaders.push({
        name: 'cookie',
        value: cookies.map(c => `${c.name}=${c.value};`).join(' ')
      });
    }
  }

  HeaderInjector.add(id, vmHeaders);
  const callback = xhrCallbackWrapper(req);
  req.eventsToNotify.forEach(evt => {
    xhr[`on${evt}`] = callback;
  });
  xhr.onloadend = callback; // always send it for the internal cleanup

  xhr.send(body);
}
/** @param {VMHttpRequest} req */


function clearRequest(req) {
  if (req.coreId) delete verify[req.coreId];
  delete requests[req.id];
  delete (tabRequests[req.tabId] || {})[req.id];
  HeaderInjector.del(req.id);
}
/** Polyfill for Chrome's inability to send complex types over extension messaging */


function decodeBody([body, type, wasBlob]) {
  if (type === 'query') {
    type = 'application/x-www-form-urlencoded';
  } else if (type) {
    // 5x times faster than fetch() which wastes time on inter-process communication
    const res = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["string2uint8array"])(atob(body.slice(body.indexOf(',') + 1)));

    if (!wasBlob) {
      type = body.match(/^data:(.+?);base64/)[1].replace(/(boundary=)[^;]+/, // using a function so it runs only if "boundary" was found
      (_, p1) => p1 + String.fromCharCode(...res.slice(2, res.indexOf(13))));
    }

    body = res;
  }

  return [body, type];
} // Watch URL redirects
// browser.webRequest.onBeforeRedirect.addListener(details => {
//   const reqId = verify[details.requestId];
//   if (reqId) {
//     const req = requests[reqId];
//     if (req) req.finalUrl = details.redirectUrl;
//   }
// }, {
//   urls: ['<all_urls>'],
//   types: ['xmlhttprequest'],
// });
// tasks are not necessary now, turned off
// Stop redirects
// browser.webRequest.onHeadersReceived.addListener(details => {
//   const task = tasks[details.requestId];
//   if (task) {
//     delete tasks[details.requestId];
//     if (task === 'Get-Location' && [301, 302, 303].includes(details.statusCode)) {
//       const locationHeader = details.responseHeaders.find(
//         header => header.name.toLowerCase() === 'location');
//       const base64 = locationHeader && locationHeader.value;
//       return {
//         redirectUrl: `data:text/plain;charset=utf-8,${base64 || ''}`,
//       };
//     }
//   }
// }, {
//   urls: ['<all_urls>'],
//   types: ['xmlhttprequest'],
// }, ['blocking', 'responseHeaders']);
// browser.webRequest.onCompleted.addListener(details => {
//   delete tasks[details.requestId];
// }, {
//   urls: ['<all_urls>'],
//   types: ['xmlhttprequest'],
// });
// browser.webRequest.onErrorOccurred.addListener(details => {
//   delete tasks[details.requestId];
// }, {
//   urls: ['<all_urls>'],
//   types: ['xmlhttprequest'],
// });


async function confirmInstall({
  code,
  from,
  url
}, {
  tab = {}
}) {
  if (!code) code = (await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["request"])(url)).data; // TODO: display the error in UI

  if (!Object(_script__WEBPACK_IMPORTED_MODULE_5__["isUserScript"])(code)) throw Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["i18n"])('msgInvalidScript');
  _cache__WEBPACK_IMPORTED_MODULE_4__["default"].put(url, code, 3000);
  const confirmKey = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["getUniqId"])();
  const {
    active,
    id: tabId,
    incognito
  } = tab; // Not testing tab.pendingUrl because it will be always equal to `url`

  const canReplaceCurTab = (!incognito || IS_FIREFOX) && (url === from || _cache__WEBPACK_IMPORTED_MODULE_4__["default"].has(`autoclose:${tabId}`) || /^(chrome:\/\/(newtab|startpage)\/|about:(home|newtab))$/.test(from));
  /** @namespace VMConfirmCache */

  _cache__WEBPACK_IMPORTED_MODULE_4__["default"].put(`confirm-${confirmKey}`, {
    incognito,
    url,
    from,
    tabId,
    ff: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_3__["default"].firefox
  });
  const confirmUrl = CONFIRM_URL_BASE + confirmKey;
  const {
    windowId
  } = canReplaceCurTab ? await browser.tabs.update(tabId, {
    url: confirmUrl
  }) : await _message__WEBPACK_IMPORTED_MODULE_7__["commands"].TabOpen({
    url: confirmUrl,
    active: !!active
  }, {
    tab
  });

  if (active && windowId !== tab.windowId) {
    await browser.windows.update(windowId, {
      focused: true
    });
  }
}

const whitelistRe = new RegExp(`^https://(${['greasyfork\\.org/scripts/%/code/', 'openuserjs\\.org/install/%/', 'github\\.com/%/%/raw/%/', 'github\\.com/%/%/releases/%/download/', 'raw\\.githubusercontent\\.com(/%){3}/', 'gist\\.github\\.com/.*?/'].join('|')})%?\\.user\\.js([?#]|$)`.replace(/%/g, '[^/]*'));
const blacklistRe = new RegExp(`^https://(${['(gist\\.)?github\\.com', 'greasyfork\\.org', 'openuserjs\\.org'].join('|')})/`);

const resolveVirtualUrl = url => `${_init__WEBPACK_IMPORTED_MODULE_6__["extensionRoot"]}options/index.html#scripts/${+url.split('#')[1]}`; // FF can't intercept virtual .user.js URL via webRequest, so we redirect it explicitly


const virtualUrlRe = IS_FIREFOX && new RegExp(`^(view-source:)?(${_init__WEBPACK_IMPORTED_MODULE_6__["extensionRoot"].replace('://', '$&)?')}[^/]*\\.user\\.js#\\d+`);

const maybeRedirectVirtualUrlFF = virtualUrlRe && ((tabId, src) => {
  if (virtualUrlRe.test(src)) {
    browser.tabs.update(tabId, {
      url: resolveVirtualUrl(src)
    });
  }
});

if (virtualUrlRe) {
  const listener = (tabId, {
    url
  }) => url && maybeRedirectVirtualUrlFF(tabId, url);

  const apiEvent = browser.tabs.onUpdated;
  const addListener = apiEvent.addListener.bind(apiEvent, listener);

  try {
    addListener({
      properties: ['url']
    });
  } catch (e) {
    addListener();
  }
}

browser.tabs.onCreated.addListener(tab => {
  const {
    id,
    title,
    url
  } = tab;
  /* Determining if this tab can be auto-closed (replaced, actually).
     FF>=68 allows reading file: URL only in the tab's content script so the tab must stay open. */

  if ((!url.startsWith('file:') || _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_3__["default"].firefox < 68) && /\.user\.js([?#]|$)/.test(tab.pendingUrl || url)) {
    _cache__WEBPACK_IMPORTED_MODULE_4__["default"].put(`autoclose:${id}`, true, 10e3);
  }

  if (virtualUrlRe && url === 'about:blank') {
    maybeRedirectVirtualUrlFF(id, title);
  }
});
browser.webRequest.onBeforeRequest.addListener(req => {
  const {
    method,
    tabId,
    url
  } = req;

  if (method !== 'GET') {
    return;
  } // open a real URL for simplified userscript URL listed in devtools of the web page


  if (url.startsWith(_init__WEBPACK_IMPORTED_MODULE_6__["extensionRoot"])) {
    return {
      redirectUrl: resolveVirtualUrl(url)
    };
  }

  if (!_cache__WEBPACK_IMPORTED_MODULE_4__["default"].has(`bypass:${url}`) && (!blacklistRe.test(url) || whitelistRe.test(url))) {
    maybeInstallUserJs(tabId, url);
    return {
      redirectUrl: 'javascript:void 0'
    }; // eslint-disable-line no-script-url
  }
}, {
  urls: [// 1. *:// comprises only http/https
  // 2. the API ignores #hash part
  // 3. Firefox: onBeforeRequest does not work with file:// or moz-extension://
  '*://*/*.user.js', '*://*/*.user.js?*', 'file://*/*.user.js', 'file://*/*.user.js?*', `${_init__WEBPACK_IMPORTED_MODULE_6__["extensionRoot"]}*.user.js`],
  types: ['main_frame']
}, ['blocking']);

async function maybeInstallUserJs(tabId, url) {
  const {
    data: code
  } = (await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["request"])(url).catch(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["noop"])) || {};

  if (code && Object(_script__WEBPACK_IMPORTED_MODULE_5__["parseMeta"])(code).name) {
    const tab = tabId >= 0 && (await browser.tabs.get(tabId)) || {};
    confirmInstall({
      code,
      url,
      from: tab.url
    }, {
      tab
    });
  } else {
    _cache__WEBPACK_IMPORTED_MODULE_4__["default"].put(`bypass:${url}`, true, 10e3);
    if (tabId >= 0) browser.tabs.update(tabId, {
      url
    });
  }
} // In Firefox with production code of Violentmonkey, scripts can be injected before `tabs.onUpdated` is fired.
// Ref: https://github.com/violentmonkey/violentmonkey/issues/1255


browser.tabs.onRemoved.addListener(tabId => {
  clearRequestsByTabId(tabId);
});
function clearRequestsByTabId(tabId) {
  const set = tabRequests[tabId];

  if (set) {
    delete tabRequests[tabId];
    safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["forEachEntry"], set, ([id]) => _message__WEBPACK_IMPORTED_MODULE_7__["commands"].AbortRequest(id));
  }
}
/**
 * Imitating https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
 * Per the specification https://tools.ietf.org/html/rfc7230 the header name is within ASCII,
 * but we'll try encoding it, if necessary, to handle invalid server responses.
 */

function encodeWebRequestHeader({
  name,
  value,
  binaryValue
}) {
  return `${string2byteString(name)}: ${binaryValue ? Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["buffer2string"])(binaryValue) : string2byteString(value)}\r\n`;
}
/**
 * Returns a UTF8-encoded binary string i.e. one byte per character.
 * Returns the original string in case it was already within ASCII.
 */


function string2byteString(str) {
  if (!/[\u0080-\uFFFF]/.test(str)) return str;
  if (!encoder) encoder = new TextEncoder();
  return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["buffer2string"])(encoder.encode(str));
}
/** @typedef {{
  anonymous: boolean
  blobbed: boolean
  cb: function(Object)
  chunked: boolean
  coreId: number
  eventsToNotify: string[]
  id: number
  noNativeCookie: boolean
  responseHeaders: string
  storeId: string
  tabId: number
  xhr: XMLHttpRequest
}} VMHttpRequest */

/***/ }),

/***/ "./src/background/utils/script.js":
/*!****************************************!*\
  !*** ./src/background/utils/script.js ***!
  \****************************************/
/*! exports provided: isUserScript, parseMeta, getDefaultCustom, newScript, getNameURI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUserScript", function() { return isUserScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMeta", function() { return parseMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultCustom", function() { return getDefaultCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newScript", function() { return newScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNameURI", function() { return getNameURI; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options */ "./src/background/utils/options.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cache */ "./src/background/utils/cache.js");







Object.assign(_message__WEBPACK_IMPORTED_MODULE_4__["commands"], {
  /** @return {string} */
  CacheNewScript(data) {
    const id = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["getUniqId"])();
    _cache__WEBPACK_IMPORTED_MODULE_6__["default"].put(`new-${id}`, newScript(data));
    return id;
  },

  /** @return {VMScript} */
  NewScript(id) {
    return id && _cache__WEBPACK_IMPORTED_MODULE_6__["default"].get(`new-${id}`) || newScript();
  },

  ParseMeta: parseMeta
});
function isUserScript(text) {
  if (/^\s*</.test(text)) return false; // HTML

  if (text.indexOf('// ==UserScript==') < 0) return false; // Lack of meta block

  return true;
}
const arrayType = {
  default: () => [],
  transform: (res, val) => {
    res.push(val);
    return res;
  }
};
const defaultType = {
  default: () => null,
  transform: (res, val) => res == null ? val : res
};
const metaTypes = {
  include: arrayType,
  exclude: arrayType,
  match: arrayType,
  excludeMatch: arrayType,
  require: arrayType,
  resource: {
    default: () => ({}),
    transform: (res, val) => {
      const pair = val.match(/^(\w\S*)\s+(.*)/);
      if (pair) res[pair[1]] = pair[2];
      return res;
    }
  },
  grant: arrayType,
  noframes: {
    default: () => false,
    transform: () => true
  }
};
const metaOptionalTypes = {
  antifeature: arrayType,
  compatible: arrayType,
  connect: arrayType
};
function parseMeta(code) {
  // initialize meta
  const meta = safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_3__["mapEntry"], metaTypes, ([, value]) => value.default());
  const metaBody = code.match(_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["METABLOCK_RE"])[1] || '';
  metaBody.replace(/(?:^|\n)\s*\/\/\x20(@\S+)(.*)/g, (_match, rawKey, rawValue) => {
    const [keyName, locale] = rawKey.slice(1).split(':');
    const camelKey = keyName.replace(/[-_](\w)/g, (m, g) => g.toUpperCase());
    const key = locale ? `${camelKey}:${locale.toLowerCase()}` : camelKey;
    const val = rawValue.trim();
    const metaType = metaTypes[key] || metaOptionalTypes[key] || defaultType;
    let oldValue = meta[key];
    if (typeof oldValue === 'undefined') oldValue = metaType.default();
    meta[key] = metaType.transform(oldValue, val);
  });
  meta.resources = meta.resource;
  delete meta.resource; // @homepageURL: compatible with @homepage

  if (!meta.homepageURL && meta.homepage) meta.homepageURL = meta.homepage;
  return meta;
}
function getDefaultCustom() {
  return {
    origInclude: true,
    origExclude: true,
    origMatch: true,
    origExcludeMatch: true
  };
}
function newScript(data) {
  const state = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    url: '*://*/*',
    name: '',
    date: new Date().toLocaleString()
  }, data);

  const code = Object(_options__WEBPACK_IMPORTED_MODULE_5__["getOption"])('scriptTemplate').replace(/{{(\w+)}}/g, (str, name) => {
    const value = state[name];
    return value == null ? str : value;
  });
  const script = {
    custom: getDefaultCustom(),
    config: {
      enabled: 1,
      shouldUpdate: 1
    },
    meta: parseMeta(code),
    props: {}
  };
  return {
    script,
    code
  };
}
function getNameURI(script) {
  const ns = script.meta.namespace || '';
  const name = script.meta.name || '';
  let nameURI = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["encodeFilename"])(`${ns}\n${name}\n`);
  if (!ns && !name) nameURI += script.props.id || '';
  return nameURI;
}

/***/ }),

/***/ "./src/background/utils/search.js":
/*!****************************************!*\
  !*** ./src/background/utils/search.js ***!
  \****************************************/
/*! exports provided: loadQuery, dumpQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadQuery", function() { return loadQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dumpQuery", function() { return dumpQuery; });
function loadQuery(string) {
  return string.split('&').reduce((data, piece) => {
    const [key, val] = piece.split('=').map(decodeURIComponent);
    data[key] = val;
    return data;
  }, {});
}
function dumpQuery(dict) {
  return Object.entries(dict).map(keyVal => keyVal.map(encodeURIComponent).join('=')).join('&');
}

/***/ }),

/***/ "./src/background/utils/storage-fetch.js":
/*!***********************************************!*\
  !*** ./src/background/utils/storage-fetch.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/storage */ "./src/common/storage.js");



/** @type { function(url, options, check): Promise<void> } or throws on error */

_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_2__["default"].cache.fetch = cacheOrFetch({
  init(options) {
    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, options, {
      responseType: 'blob'
    });
  },

  async transform(response, url, options, check) {
    const [type, body] = await _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_2__["default"].cache.makeRaw(response, true);
    await (check == null ? void 0 : check(url, response.data, type));
    return `${type},${body}`;
  }

});
/** @type { function(url, options): Promise<void> } or throws on error */

_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_2__["default"].require.fetch = cacheOrFetch({
  transform: ({
    data
  }, url) => /^\s*</.test(data) ? Promise.reject(`NOT_JS: ${url} "${data.slice(0, 100).trim().replace(/\s{2,}/g, ' ')}"`) : data
});

function cacheOrFetch(handlers = {}) {
  const requests = {};
  const {
    init,
    transform
  } = handlers;
  /** @this VMStorageBase */

  return function cacheOrFetchHandler(...args) {
    const [url] = args;
    const promise = requests[url] || (requests[url] = safeCall(doFetch, this, ...args));
    return promise;
  };
  /** @this VMStorageBase */

  async function doFetch(...args) {
    const [url, options] = args;

    try {
      const res = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["request"])(url, (init == null ? void 0 : init(options)) || options);

      if (await isModified(res, url)) {
        const result = transform ? await transform(res, ...args) : res.data;
        await this.set(url, result);
      }
    } catch (err) {
      if (false) {}
      throw err;
    } finally {
      delete requests[url];
    }
  }
}

async function isModified({
  headers
}, url) {
  const mod = headers.get('etag') || +new Date(headers.get('last-modified')) || +new Date(headers.get('date'));

  if (!mod || mod !== (await _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_2__["default"].mod.getOne(url))) {
    if (mod) await _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_2__["default"].mod.set(url, mod);
    return true;
  }
}

/***/ }),

/***/ "./src/background/utils/tabs.js":
/*!**************************************!*\
  !*** ./src/background/utils/tabs.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/ua */ "./src/common/ua.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init */ "./src/background/utils/init.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options */ "./src/background/utils/options.js");







const openers = {};
Object.assign(_message__WEBPACK_IMPORTED_MODULE_5__["commands"], {
  /**
   * @param {string} [pathId] - path or id to add to #scripts route in dashboard,
     if absent a new script will be created for active tab's URL
   * @returns {Promise<{id: number}>}
   */
  async OpenEditor(pathId) {
    if (!pathId) {
      const {
        tab,
        domain
      } = await _message__WEBPACK_IMPORTED_MODULE_5__["commands"].GetTabDomain();
      const id = domain && _message__WEBPACK_IMPORTED_MODULE_5__["commands"].CacheNewScript({
        url: (tab.pendingUrl || tab.url).split(/[#?]/)[0],
        name: `${Object(_options__WEBPACK_IMPORTED_MODULE_6__["getOption"])('scriptTemplateEdited') ? '' : '- '}${domain}`
      });
      pathId = `_new${id ? `/${id}` : ''}`;
    }

    const url = `${_init__WEBPACK_IMPORTED_MODULE_4__["extensionRoot"]}options/index.html#scripts/${pathId}`; // Firefox until v56 doesn't support moz-extension:// pattern in browser.tabs.query()

    for (const view of browser.extension.getViews()) {
      if (view.location.href === url) {
        // deep-copying to avoid dead objects
        const tab = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["deepCopy"])((await view.browser.tabs.getCurrent()));
        browser.tabs.update(tab.id, {
          active: true
        });
        browser.windows.update(tab.windowId, {
          focused: true
        });
        return tab;
      }
    }

    return _message__WEBPACK_IMPORTED_MODULE_5__["commands"].TabOpen({
      url,
      maybeInWindow: true
    });
  },

  /** @return {Promise<{ id: number } | chrome.tabs.Tab>} new tab is returned for internal calls */
  async TabOpen({
    url,
    active = true,
    container,
    insert = true,
    maybeInWindow = false,
    pinned
  }, src = {}) {
    // src.tab may be absent when invoked from popup (e.g. edit/create buttons)
    const srcTab = src.tab || (await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["getActiveTab"])()) || {}; // src.url may be absent when invoked directly as commands.TabOpen

    const srcUrl = src.url;
    const isInternal = !srcUrl || srcUrl.startsWith(_init__WEBPACK_IMPORTED_MODULE_4__["extensionRoot"]); // only incognito storeId may be specified when opening in an incognito window

    const {
      incognito,
      windowId
    } = srcTab; // Chrome can't open chrome-xxx: URLs in incognito windows

    let storeId = srcTab.cookieStoreId;

    if (storeId && !incognito) {
      storeId = getContainerId(isInternal ? 0 : container) || storeId;
    }

    if (storeId) storeId = {
      cookieStoreId: storeId
    }; // URL needs to be expanded for `canOpenIncognito` below

    if (!/^[-\w]+:/.test(url)) {
      url = isInternal ? browser.runtime.getURL(url) : Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["getFullUrl"])(url, srcUrl);
    }

    const canOpenIncognito = !incognito || IS_FIREFOX || !/^(chrome[-\w]*):/.test(url);
    let newTab;

    if (maybeInWindow && browser.windows && Object(_options__WEBPACK_IMPORTED_MODULE_6__["getOption"])('editorWindow')
    /* cookieStoreId in windows.create() is supported since FF64 https://bugzil.la/1393570
     * and a workaround is too convoluted to add it for such an ancient version */
    && (!storeId || _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_3__["default"].firefox >= 64)) {
      const wndOpts = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        url,
        incognito: canOpenIncognito && incognito
      }, Object(_options__WEBPACK_IMPORTED_MODULE_6__["getOption"])('editorWindowSimple') && {
        type: 'popup'
      }, {}, !IS_FIREFOX && {
        focused: !!active
      }, {}, storeId);

      const pos = Object(_options__WEBPACK_IMPORTED_MODULE_6__["getOption"])('editorWindowPos');
      const hasPos = pos && 'top' in pos;
      const wnd = (await browser.windows.create(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, wndOpts, {}, pos)).catch(hasPos && _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["noop"])) || hasPos && (await browser.windows.create(wndOpts));
      newTab = wnd.tabs[0];
    }

    if (!newTab) {
      newTab = await browser.tabs.create(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        url,
        // normalizing as boolean because the API requires strict types
        active: !!active,
        pinned: !!pinned
      }, storeId, {}, canOpenIncognito && _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        windowId
      }, insert && {
        index: srcTab.index + 1
      }, {}, _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_3__["default"].openerTabIdSupported && {
        openerTabId: srcTab.id
      })));
    }

    const {
      id
    } = newTab;

    if (active && newTab.windowId !== windowId) {
      await browser.windows.update(newTab.windowId, {
        focused: true
      });
    }

    openers[id] = srcTab.id;
    return isInternal ? newTab : {
      id
    };
  },

  /** @return {void} */
  TabClose({
    id
  } = {}, src) {
    var _src$tab;

    const tabId = id || (src == null ? void 0 : (_src$tab = src.tab) == null ? void 0 : _src$tab.id);
    if (tabId >= 0) browser.tabs.remove(tabId);
  },

  TabFocus(_, src) {
    browser.tabs.update(src.tab.id, {
      active: true
    }).catch(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["noop"]);
    browser.windows.update(src.tab.windowId, {
      focused: true
    }).catch(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["noop"]);
  }

}); // Firefox Android does not support `openerTabId` field, it fails if this field is passed
// XXX openerTabId seems buggy on Chrome, https://crbug.com/967150
// It seems to do nothing even set successfully with `browser.tabs.update`.

_Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_3__["default"].ready.then(() => {
  Object.defineProperties(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_3__["default"], {
    openerTabIdSupported: {
      value: !IS_FIREFOX || _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_3__["default"].firefox >= 57 && _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_3__["default"].os !== 'android'
    }
  });
});
browser.tabs.onRemoved.addListener(id => {
  const openerId = openers[id];

  if (openerId >= 0) {
    Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendTabCmd"])(openerId, 'TabClosed', id);
    delete openers[id];
  }
});

function getContainerId(index) {
  return index === 0 && 'firefox-default' || index > 0 && `firefox-container-${index}`;
}

/***/ }),

/***/ "./src/background/utils/template-hook.js":
/*!***********************************************!*\
  !*** ./src/background/utils/template-hook.js ***!
  \***********************************************/
/*! exports provided: SCRIPT_TEMPLATE, resetScriptTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCRIPT_TEMPLATE", function() { return SCRIPT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetScriptTemplate", function() { return resetScriptTemplate; });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/background/utils/init.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./src/background/utils/options.js");


const SCRIPT_TEMPLATE = 'scriptTemplate';
const SCRIPT_TEMPLATE_EDITED = `${SCRIPT_TEMPLATE}Edited`;
const INITIAL_TEMPLATE = `\
// ==UserScript==
// @name New Script
// @namespace Violentmonkey Scripts
// @match {{url}}
// @grant none
// ==/UserScript==
`;
_init__WEBPACK_IMPORTED_MODULE_0__["postInitialize"].push(() => {
  let edited = Object(_options__WEBPACK_IMPORTED_MODULE_1__["getOption"])(SCRIPT_TEMPLATE_EDITED); // Preserve an edited template

  if (edited) return;
  const template = Object(_options__WEBPACK_IMPORTED_MODULE_1__["getOption"])(SCRIPT_TEMPLATE); // When updating from an old version, set the edited flag retroactively

  if (edited == null) {
    edited = template !== INITIAL_TEMPLATE;
    if (edited) Object(_options__WEBPACK_IMPORTED_MODULE_1__["setOption"])(SCRIPT_TEMPLATE_EDITED, true);else resetScriptTemplate(); // When updating VM, update to the new default template
  } else if (template !== Object(_options__WEBPACK_IMPORTED_MODULE_1__["getDefaultOption"])(SCRIPT_TEMPLATE)) {
    resetScriptTemplate();
  }
});
function resetScriptTemplate(changes = {}) {
  const defaultTemplate = Object(_options__WEBPACK_IMPORTED_MODULE_1__["getDefaultOption"])(SCRIPT_TEMPLATE);
  let template = changes[SCRIPT_TEMPLATE];

  if (!template) {
    template = defaultTemplate;
    changes[SCRIPT_TEMPLATE] = template;
    Object(_options__WEBPACK_IMPORTED_MODULE_1__["setOption"])(SCRIPT_TEMPLATE, template);
  }

  const edited = template !== defaultTemplate;

  if (edited !== changes[SCRIPT_TEMPLATE_EDITED]) {
    changes[SCRIPT_TEMPLATE_EDITED] = edited;
    Object(_options__WEBPACK_IMPORTED_MODULE_1__["setOption"])(SCRIPT_TEMPLATE_EDITED, edited);
  }
}

/***/ }),

/***/ "./src/background/utils/tester.js":
/*!****************************************!*\
  !*** ./src/background/utils/tester.js ***!
  \****************************************/
/*! exports provided: testGlob, testMatch, testScript, testBlacklist, resetBlacklist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testGlob", function() { return testGlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testMatch", function() { return testMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testScript", function() { return testScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testBlacklist", function() { return testBlacklist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetBlacklist", function() { return resetBlacklist; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_tld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/tld */ "./src/common/tld.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ "./src/background/utils/cache.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./src/background/utils/init.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options */ "./src/background/utils/options.js");





Object.assign(_message__WEBPACK_IMPORTED_MODULE_3__["commands"], {
  TestBlacklist: testBlacklist
});
_init__WEBPACK_IMPORTED_MODULE_2__["postInitialize"].push(resetBlacklist);
_Users_ZhaoJun_Desktop_violentmonkey_src_common_tld__WEBPACK_IMPORTED_MODULE_0__["initTLD"](true);
const RE_MATCH_PARTS = /(.*?):\/\/([^/]*)\/(.*)/;
let blacklistRules = [];
Object(_options__WEBPACK_IMPORTED_MODULE_4__["hookOptions"])(changes => {
  if ('blacklist' in changes) resetBlacklist(changes.blacklist || '');
});
const RE_HTTP_OR_HTTPS = /^https?$/i;
/*
 Simple FIFO queue for the results of testBlacklist, cached separately from the main |cache|
 because the blacklist is updated only once in a while so its entries would be crowding
 the main cache and reducing its performance (objects with lots of keys are slow to access).

 We also don't need to auto-expire the entries after a timeout.
 The only limit we're concerned with is the overall memory used.
 The limit is specified in the amount of unicode characters (string length) for simplicity.
 Disregarding deduplication due to interning, the actual memory used is approximately twice as big:
 2 * keyLength + objectStructureOverhead * objectCount
*/

const MAX_BL_CACHE_LENGTH = 100e3;
let blCache = {};
let blCacheSize = 0;

function testRules(url, rules, prefix, ruleBuilder) {
  return rules.some(rule => {
    const key = `${prefix}:${rule}`;
    const matcher = _cache__WEBPACK_IMPORTED_MODULE_1__["default"].get(key) || _cache__WEBPACK_IMPORTED_MODULE_1__["default"].put(key, ruleBuilder(rule));
    return matcher.test(url);
  });
}
/**
 * Test glob rules like `@include` and `@exclude`.
 */


function testGlob(url, rules) {
  return testRules(url, rules, 're', autoReg);
}
/**
 * Test match rules like `@match` and `@exclude_match`.
 */

function testMatch(url, rules) {
  return testRules(url, rules, 'match', matchTester);
}
function testScript(url, script) {
  _cache__WEBPACK_IMPORTED_MODULE_1__["default"].batch(true);
  const {
    custom,
    meta
  } = script;
  const mat = mergeLists(custom.origMatch && meta.match, custom.match);
  const inc = mergeLists(custom.origInclude && meta.include, custom.include);
  const exc = mergeLists(custom.origExclude && meta.exclude, custom.exclude);
  const excMat = mergeLists(custom.origExcludeMatch && meta.excludeMatch, custom.excludeMatch); // match all if no @match or @include rule

  let ok = !mat.length && !inc.length; // @match

  ok = ok || testMatch(url, mat); // @include

  ok = ok || testGlob(url, inc); // @exclude-match

  ok = ok && !testMatch(url, excMat); // @exclude

  ok = ok && !testGlob(url, exc);
  _cache__WEBPACK_IMPORTED_MODULE_1__["default"].batch(false);
  return ok;
}

function mergeLists(...args) {
  return args.reduce((res, item) => item ? res.concat(item) : res, []);
}

function str2RE(str) {
  const re = str.replace(/([.?+[\]{}()|^$])/g, '\\$1').replace(/\*/g, '.*?');
  return re;
}

function bindRE(re) {
  return re.test.bind(re);
}

function autoReg(str) {
  // regexp mode: case-insensitive per GM documentation
  if (str.length > 1 && str[0] === '/' && str[str.length - 1] === '/') {
    let re;

    try {
      re = new RegExp(str.slice(1, -1), 'i');
    } catch (e) {
      /* ignore */
    }

    return {
      test: re ? bindRE(re) : () => false
    };
  } // glob mode: case-insensitive to match GM4 & Tampermonkey bugged behavior


  const reStr = str2RE(str.toLowerCase());

  if (_Users_ZhaoJun_Desktop_violentmonkey_src_common_tld__WEBPACK_IMPORTED_MODULE_0__["isReady"]() && str.includes('.tld/')) {
    const reTldStr = reStr.replace('\\.tld/', '((?:\\.[-\\w]+)+)/');
    return {
      test: tstr => {
        const matches = tstr.toLowerCase().match(reTldStr);

        if (matches) {
          const suffix = matches[1].slice(1);
          if (_Users_ZhaoJun_Desktop_violentmonkey_src_common_tld__WEBPACK_IMPORTED_MODULE_0__["getPublicSuffix"](suffix) === suffix) return true;
        }

        return false;
      }
    };
  }

  const re = new RegExp(`^${reStr}$`, 'i'); // String with wildcards

  return {
    test: bindRE(re)
  };
}

function matchScheme(rule, data) {
  // exact match
  if (rule === data) return 1; // * = http | https
  // support http*

  if (['*', 'http*'].includes(rule) && RE_HTTP_OR_HTTPS.test(data)) return 1;
  return 0;
}

const RE_STR_ANY = '(?:|.*?\\.)';
const RE_STR_TLD = '((?:\\.[-\\w]+)+)';

function hostMatcher(rule) {
  // * matches all
  if (rule === '*') {
    return () => 1;
  } // *.example.com
  // www.google.*
  // www.google.tld


  const ruleLC = rule.toLowerCase(); // host matching is case-insensitive

  let prefix = '';
  let base = ruleLC;
  let suffix = '';

  if (rule.startsWith('*.')) {
    base = base.slice(2);
    prefix = RE_STR_ANY;
  }

  if (_Users_ZhaoJun_Desktop_violentmonkey_src_common_tld__WEBPACK_IMPORTED_MODULE_0__["isReady"]() && rule.endsWith('.tld')) {
    base = base.slice(0, -4);
    suffix = RE_STR_TLD;
  }

  const re = new RegExp(`^${prefix}${str2RE(base)}${suffix}$`);
  return data => {
    // exact match, case-insensitive
    data = data.toLowerCase();
    if (ruleLC === data) return 1; // full check

    const matches = data.match(re);

    if (matches) {
      const [, tldStr] = matches;
      if (!tldStr) return 1;
      const tldSuffix = tldStr.slice(1);
      return _Users_ZhaoJun_Desktop_violentmonkey_src_common_tld__WEBPACK_IMPORTED_MODULE_0__["getPublicSuffix"](tldSuffix) === tldSuffix;
    }

    return 0;
  };
}

function pathMatcher(rule) {
  const iHash = rule.indexOf('#');
  let iQuery = rule.indexOf('?');
  let strRe = str2RE(rule);
  if (iQuery > iHash) iQuery = -1;

  if (iHash < 0) {
    if (iQuery < 0) strRe = `^${strRe}(?:[?#]|$)`;else strRe = `^${strRe}(?:#|$)`;
  }

  return bindRE(new RegExp(strRe));
}

function matchTester(rule) {
  let test;

  if (rule === '<all_urls>') {
    test = () => true;
  } else {
    const ruleParts = rule.match(RE_MATCH_PARTS);

    if (ruleParts) {
      const matchHost = hostMatcher(ruleParts[2]);
      const matchPath = pathMatcher(ruleParts[3]);

      test = url => {
        const parts = url.match(RE_MATCH_PARTS);
        return !!ruleParts && !!parts && matchScheme(ruleParts[1], parts[1]) && matchHost(parts[2]) && matchPath(parts[3]);
      };
    } else {
      // Ignore invalid match rules
      test = () => false;
    }
  }

  return {
    test
  };
}

function testBlacklist(url) {
  let res = blCache[url];

  if (res === undefined) {
    const rule = blacklistRules.find(({
      test
    }) => test(url));
    res = (rule == null ? void 0 : rule.reject) && rule.text;
    updateBlacklistCache(url, res || false);
  }

  return res;
}
function resetBlacklist(list) {
  _cache__WEBPACK_IMPORTED_MODULE_1__["default"].batch(true);
  const rules = list == null ? Object(_options__WEBPACK_IMPORTED_MODULE_4__["getOption"])('blacklist') : list;

  if (false) {} // XXX compatible with {Array} list in v2.6.1-


  blacklistRules = (Array.isArray(rules) ? rules : (rules || '').split('\n')).map(text => {
    text = text.trim();
    if (!text || text.startsWith('#')) return null;
    const mode = text.startsWith('@') && text.split(/\s/, 1)[0];
    const rule = mode ? text.slice(mode.length + 1).trim() : text;
    const reject = mode !== '@include' && mode !== '@match'; // @include and @match = whitelist

    const {
      test
    } = mode === '@include' || mode === '@exclude' && autoReg(rule) || !mode && !rule.includes('/') && matchTester(`*://${rule}/*`) // domain
    || matchTester(rule); // @match and @exclude-match

    return {
      reject,
      test,
      text
    };
  }).filter(Boolean);
  blCache = {};
  blCacheSize = 0;
  _cache__WEBPACK_IMPORTED_MODULE_1__["default"].batch(false);
}

function updateBlacklistCache(key, value) {
  blCache[key] = value;
  blCacheSize += key.length;

  if (blCacheSize > MAX_BL_CACHE_LENGTH) {
    Object.keys(blCache).some(k => {
      blCacheSize -= k.length;
      delete blCache[k]; // reduce the cache to 75% so that this function doesn't run too often.

      return blCacheSize < MAX_BL_CACHE_LENGTH * 3 / 4;
    });
  }
}

/***/ }),

/***/ "./src/background/utils/update.js":
/*!****************************************!*\
  !*** ./src/background/utils/update.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ "./src/background/utils/db.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script */ "./src/background/utils/script.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options */ "./src/background/utils/options.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");






Object.assign(_message__WEBPACK_IMPORTED_MODULE_5__["commands"], {
  /** @return {Promise<true?>} */
  async CheckUpdate(id) {
    const script = Object(_db__WEBPACK_IMPORTED_MODULE_2__["getScriptById"])(id);
    const results = await checkAllAndNotify([script]);
    return results[0];
  },

  /** @return {Promise<boolean>} */
  async CheckUpdateAll() {
    Object(_options__WEBPACK_IMPORTED_MODULE_4__["setOption"])('lastUpdate', Date.now());
    const toUpdate = Object(_db__WEBPACK_IMPORTED_MODULE_2__["getScripts"])().filter(item => item.config.shouldUpdate);
    const results = await checkAllAndNotify(toUpdate);
    return results.includes(true);
  }

});

async function checkAllAndNotify(scripts) {
  const notes = [];
  const results = await Promise.all(scripts.map(item => checkUpdate(item, notes)));

  if (notes.length === 1) {
    notify(notes[0]);
  } else if (notes.length) {
    notify({
      // FF doesn't show notifications of type:'list' so we'll use `text` everywhere
      text: notes.map(n => n.text).join('\n'),
      onClick: browser.runtime.openOptionsPage
    });
  }

  return results;
}

const processes = {}; // resolves to true if successfully updated

function checkUpdate(script, notes) {
  const {
    id
  } = script.props;
  const promise = processes[id] || (processes[id] = doCheckUpdate(script, notes));
  return promise;
}

async function doCheckUpdate(script, notes) {
  const {
    id
  } = script.props;
  let msgOk;
  let msgErr;
  let resourceOpts;

  try {
    const {
      update
    } = await Object(_db__WEBPACK_IMPORTED_MODULE_2__["parseScript"])({
      id,
      code: await downloadUpdate(script),
      update: {
        checking: false
      }
    });
    msgOk = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('msgScriptUpdated', [Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["getScriptName"])(update)]);
    resourceOpts = {
      cache: 'no-cache'
    };
    return true;
  } catch (update) {
    msgErr = update.error; // Either proceed with normal fetch on no-update or skip it altogether on error

    resourceOpts = !update.error && !update.checking && {};
    if (false) {}
  } finally {
    if (resourceOpts && !_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["IS_DEV"]) {
      // DEV状态不更新resource
      msgErr = await Object(_db__WEBPACK_IMPORTED_MODULE_2__["fetchResources"])(script, null, resourceOpts);
      if (false) {}
    }

    if (canNotify(script) && (msgOk || msgErr)) {
      notes.push({
        script,
        text: safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["trueJoin"], [msgOk, msgErr], '\n')
      });
    }

    delete processes[id];
  }
}

async function downloadUpdate({
  props: {
    id
  },
  meta,
  custom
}) {
  const downloadURL = custom.downloadURL || meta.downloadURL || custom.lastInstallURL;
  let updateURL = custom.updateURL || meta.updateURL || downloadURL;

  if (_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["IS_DEV"] && updateURL) {
    if (meta.dev) {
      const urls = updateURL.split('/');
      updateURL = `http://127.0.0.1:${meta.dev}/${urls[urls.length - 1]}`;
    } else {
      updateURL = null;
    } // console.info('downloadUpdate', id, updateURL);

  }

  if (!updateURL) throw false;
  let errorMessage;
  const update = {};
  const result = {
    update,
    where: {
      id
    }
  };
  announce(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('msgCheckingForUpdate'));

  try {
    const {
      data
    } = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["request"])(updateURL, {
      // TODO: do a HEAD request first to get ETag header and compare to storage.mod
      cache: 'no-cache',
      headers: {
        Accept: 'text/x-userscript-meta,*/*'
      }
    });
    const {
      version
    } = Object(_script__WEBPACK_IMPORTED_MODULE_3__["parseMeta"])(data);

    if (_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["IS_DEV"]) {
      if (meta.version === version) throw false;
      console.info('update', meta.name, version, Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["compareVersion"])(meta.version, version));
      return data;
    }

    if (Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["compareVersion"])(meta.version, version) >= 0) {
      announce(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('msgNoUpdate'), {
        checking: false
      });
    } else if (!downloadURL) {
      announce(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('msgNewVersion'), {
        checking: false
      });
    } else {
      announce(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('msgUpdating'));
      errorMessage = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('msgErrorFetchingScript');
      return (await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["request"])(downloadURL, {
        cache: 'no-cache'
      })).data;
    }
  } catch (error) {
    if (false) {}
    announce(errorMessage || Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('msgErrorFetchingUpdateInfo'), {
      error
    });
  }

  throw update;

  function announce(message, {
    error,
    checking = !error
  } = {}) {
    Object.assign(update, {
      message,
      checking,
      error: error ? `${Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('genericError')} ${error.status}, ${error.url}` : null // `null` is transferable in Chrome unlike `undefined`

    });
    Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["sendCmd"])(_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["CMD_SCRIPT_UPDATE"], result);
  }
}

function canNotify(script) {
  var _script$config$notify;

  const allowed = Object(_options__WEBPACK_IMPORTED_MODULE_4__["getOption"])('notifyUpdates');
  return Object(_options__WEBPACK_IMPORTED_MODULE_4__["getOption"])('notifyUpdatesGlobal') ? allowed : (_script$config$notify = script.config.notifyUpdates) != null ? _script$config$notify : allowed;
}

function notify({
  script,
  text,
  onClick = () => _message__WEBPACK_IMPORTED_MODULE_5__["commands"].OpenEditor(script.props.id)
}) {
  _message__WEBPACK_IMPORTED_MODULE_5__["commands"].Notification({
    text,
    // FF doesn't show the name of the extension in the title of the notification
    title: IS_FIREFOX ? `${Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('titleScriptUpdated')} - ${Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('extName')}` : ''
  }, undefined, {
    onClick
  });
}

/***/ }),

/***/ "./src/background/utils/values.js":
/*!****************************************!*\
  !*** ./src/background/utils/values.js ***!
  \****************************************/
/*! exports provided: resetValueOpener, addValueOpener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetValueOpener", function() { return resetValueOpener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addValueOpener", function() { return addValueOpener; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ "./src/background/utils/db.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message */ "./src/background/utils/message.js");




const openers = {}; // { scriptId: { tabId: { frameId: 1, ... }, ... } }

let cache = {}; // { scriptId: { key: { last: value, tabId: { frameId: value } } } }

let updateScheduled;
Object.assign(_message__WEBPACK_IMPORTED_MODULE_3__["commands"], {
  /** @return {Promise<Object>} */
  async GetValueStore(id) {
    const stores = await Object(_db__WEBPACK_IMPORTED_MODULE_2__["getValueStoresByIds"])([id]);
    return stores[id] || {};
  },

  /** @param {{ where, store }[]} data
   * @return {Promise<void>} */
  async SetValueStores(data) {
    // Value store will be replaced soon.
    const stores = data.reduce((res, {
      where,
      store
    }) => {
      var _getScript;

      const id = where.id || ((_getScript = Object(_db__WEBPACK_IMPORTED_MODULE_2__["getScript"])(where)) == null ? void 0 : _getScript.props.id);
      if (id) res[id] = store;
      return res;
    }, {});
    await Promise.all([Object(_db__WEBPACK_IMPORTED_MODULE_2__["dumpValueStores"])(stores), broadcastValueStores(groupStoresByFrame(stores))]);
  },

  /** @return {void} */
  UpdateValue({
    id,
    key,
    value = null
  }, src) {
    Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectSet"])(cache, [id, key, 'last'], value);
    Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectSet"])(cache, [id, key, src.tab.id, src.frameId], value);
    updateLater();
  }

});
browser.tabs.onRemoved.addListener(resetValueOpener);
browser.tabs.onReplaced.addListener((addedId, removedId) => resetValueOpener(removedId));
function resetValueOpener(tabId) {
  safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["forEachEntry"], openers, ([id, openerTabs]) => {
    if (tabId in openerTabs) {
      delete openerTabs[tabId];
      if (Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(openerTabs)) delete openers[id];
    }
  });
}
function addValueOpener(tabId, frameId, scriptIds) {
  scriptIds.forEach(id => {
    Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectSet"])(openers, [id, tabId, frameId], 1);
  });
}

async function updateLater() {
  while (!updateScheduled) {
    updateScheduled = true;
    await 0;
    const currentCache = cache;
    cache = {};
    await doUpdate(currentCache);
    updateScheduled = false;
    if (Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(cache)) break;
  }
}

async function doUpdate(currentCache) {
  const ids = Object.keys(currentCache);
  const valueStores = await Object(_db__WEBPACK_IMPORTED_MODULE_2__["getValueStoresByIds"])(ids);
  ids.forEach(id => {
    safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["forEachEntry"], currentCache[id], ([key, {
      last
    }]) => {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectSet"])(valueStores, [id, key], last || undefined);
    });
  });
  await Promise.all([Object(_db__WEBPACK_IMPORTED_MODULE_2__["dumpValueStores"])(valueStores), broadcastValueStores(groupCacheByFrame(currentCache), {
    partial: true
  })]);
}

async function broadcastValueStores(tabFrameData, {
  partial
} = {}) {
  const tasks = [];

  for (const [tabId, frames] of Object.entries(tabFrameData)) {
    for (const [frameId, frameData] of Object.entries(frames)) {
      if (!Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(frameData)) {
        if (partial) frameData.partial = true;
        tasks.push(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["sendTabCmd"])(+tabId, 'UpdatedValues', frameData, {
          frameId: +frameId
        }));
        if (tasks.length === 20) await Promise.all(tasks.splice(0)); // throttling
      }
    }
  }

  await Promise.all(tasks);
} // Returns per tab/frame data with only the changed values


function groupCacheByFrame(cacheData) {
  const toSend = {};
  safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["forEachEntry"], cacheData, ([id, scriptData]) => {
    const dataEntries = Object.entries(scriptData);
    safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["forEachEntry"], openers[id], ([tabId, frames]) => {
      safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["forEachKey"], frames, frameId => {
        dataEntries.forEach(([key, history]) => {
          var _history$tabId;

          // Skipping this frame if its last recorded value is identical
          if (history.last !== ((_history$tabId = history[tabId]) == null ? void 0 : _history$tabId[frameId])) {
            Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectSet"])(toSend, [tabId, frameId, id, key], history.last);
          }
        });
      });
    });
  });
  return toSend;
} // Returns per tab/frame data


function groupStoresByFrame(stores) {
  const toSend = {};
  safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["forEachEntry"], stores, ([id, store]) => {
    safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["forEachEntry"], openers[id], ([tabId, frames]) => {
      safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["forEachKey"], frames, frameId => {
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectSet"])(toSend, [tabId, frameId, id], store);
      });
    });
  });
  return toSend;
}

/***/ }),

/***/ "./src/common/events.js":
/*!******************************!*\
  !*** ./src/common/events.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventEmitter; });
class EventEmitter {
  constructor(allowed) {
    this.events = {};
    this.allowed = allowed;
  }

  checkType(type) {
    if (this.allowed && !this.allowed.includes(type)) {
      throw new Error(`Unknown event type: ${type}`);
    }
  }

  on(type, handle) {
    this.checkType(type);
    const {
      events
    } = this;
    let handlers = events[type];

    if (!handlers) {
      handlers = [];
      events[type] = handlers;
    }

    return () => this.off(type, handle);
  }

  off(type, handle) {
    this.checkType(type);
    const handlers = this.events[type];

    if (handlers) {
      const i = handlers.indexOf(handle);
      if (i >= 0) handlers.splice(i, 1);
    }
  }

  emit(type, data) {
    this.checkType(type);
    const handlers = this.events[type];

    if (handlers) {
      const evt = {
        type,
        data,
        defaultPrevented: false,

        preventDefault() {
          evt.defaultPrevented = true;
        }

      };
      handlers.some(handle => {
        handle(evt);
        return evt.defaultPrevented;
      });
    }
  }

}

/***/ }),

/***/ "./src/common/tld.js":
/*!***************************!*\
  !*** ./src/common/tld.js ***!
  \***************************/
/*! exports provided: initTLD, isReady, getDomain, getSubdomain, getPublicSuffix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTLD", function() { return initTLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReady", function() { return isReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomain", function() { return getDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubdomain", function() { return getSubdomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPublicSuffix", function() { return getPublicSuffix; });
/* harmony import */ var tldjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tldjs */ "./node_modules/tldjs/index.js");
/* harmony import */ var tldjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tldjs__WEBPACK_IMPORTED_MODULE_0__);
 // import { fromUserSettings } from 'tldjs';
// import Trie from 'tldjs/lib/suffix-trie';
// import { request } from '#/common';
// let tldjs;
// export function initTLD(remote) {
//   // TLD rules are too large to be packed, download them at runtime.
//   const url = 'https://violentmonkey.top/static/tld-rules.json';
//   const key = 'dat:tldRules';
//   browser.storage.local.get(key)
//   .then(({ [key]: tldRules }) => {
//     if (tldRules) return tldRules;
//     if (!remote) return Promise.reject('ignore TLD');
//     return request(url, { responseType: 'json' })
//     .then(({ data: rules }) => {
//       console.info('Downloaded public suffix data');
//       return browser.storage.local.set({ [key]: rules })
//       .then(() => rules);
//     });
//   })
//   .then(tldRules => {
//     console.info('Initialized TLD');
//     tldjs = fromUserSettings({ rules: Trie.fromJson(tldRules) });
//   })
//   .catch(err => {
//     if (process.env.DEBUG) console.error(err);
//     console.info('Failed initializing TLD');
//   });
// }

function initTLD() {}

function exportMethod(key) {
  return (...args) => tldjs__WEBPACK_IMPORTED_MODULE_0___default.a && tldjs__WEBPACK_IMPORTED_MODULE_0___default.a[key](...args);
}

function isReady() {
  return !!tldjs__WEBPACK_IMPORTED_MODULE_0___default.a;
}
const getDomain = exportMethod('getDomain');
const getSubdomain = exportMethod('getSubdomain');
const getPublicSuffix = exportMethod('getPublicSuffix');

/***/ })

/******/ });}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmZm1wZWcvZmZtcGVnL3NyYy9icm93c2VyL2RlZmF1bHRPcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmZtcGVnL2ZmbXBlZy9zcmMvYnJvd3Nlci9mZXRjaEZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmZm1wZWcvZmZtcGVnL3NyYy9icm93c2VyL2dldENyZWF0ZUZGbXBlZ0NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmZm1wZWcvZmZtcGVnL3NyYy9icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmZtcGVnL2ZmbXBlZy9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmZtcGVnL2ZmbXBlZy9zcmMvY3JlYXRlRkZtcGVnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmZtcGVnL2ZmbXBlZy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmZm1wZWcvZmZtcGVnL3NyYy91dGlscy9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmZm1wZWcvZmZtcGVnL3NyYy91dGlscy9wYXJzZUFyZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmZm1wZWcvZmZtcGVnL3NyYy91dGlscy9wYXJzZVByb2dyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9ub2RlX21vZHVsZXMvcHVueWNvZGUvcHVueWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC9yZXNvbHZlLXVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXJsL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXJsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9wbHVnaW4vZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3BsdWdpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9zeW5jL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvc3luYy9kcm9wYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3N5bmMvZ29vZ2xlZHJpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9zeW5jL29uZWRyaXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3N5bmMvd2ViZGF2LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2NhY2hlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2NsaXBib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvaG90a2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9pY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvbWVyZ2UtdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9ub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvcGF0Y2gtZGIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvcG9wdXAtdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9wcmVpbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9zdG9yYWdlLWZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvdGVtcGxhdGUtaG9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy90ZXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvdXBkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3RsZC5qcyJdLCJuYW1lcyI6WyJob29rT3B0aW9ucyIsImNoYW5nZXMiLCJhdXRvVXBkYXRlIiwiU0NSSVBUX1RFTVBMQVRFIiwicmVzZXRTY3JpcHRUZW1wbGF0ZSIsInNlbmRDbWQiLCJPYmplY3QiLCJhc3NpZ24iLCJjb21tYW5kcyIsIkdldERhdGEiLCJpZHMiLCJkYXRhIiwiZ2V0RGF0YSIsInN5bmMiLCJHZXRJbmplY3RlZCIsInVybCIsImZvcmNlQ29udGVudCIsInNyYyIsImZyYW1lSWQiLCJ0YWIiLCJ0YWJJZCIsImlkIiwicmVzZXRWYWx1ZU9wZW5lciIsImNsZWFyUmVxdWVzdHNCeVRhYklkIiwicmVzIiwiZ2V0SW5qZWN0ZWRTY3JpcHRzIiwiZmVlZGJhY2siLCJpbmplY3QiLCJ2YWxPcElkcyIsImlzUG9wdXBTaG93biIsInBvcHVwVGFicyIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJJbmplY3Rpb25GZWVkYmFjayIsImFkZFZhbHVlT3BlbmVyIiwiR2V0VGFiRG9tYWluIiwiZ2V0QWN0aXZlVGFiIiwicGVuZGluZ1VybCIsImhvc3QiLCJtYXRjaCIsImRvbWFpbiIsInRsZCIsIlNldFRpbWVvdXQiLCJtcyIsIm1ha2VQYXVzZSIsImNvbW1hbmRzVG9TeW5jIiwiY29tbWFuZHNUb1N5bmNJZlRydXRoeSIsImhhbmRsZUNvbW1hbmRNZXNzYWdlIiwicmVxIiwiY21kIiwiaW5jbHVkZXMiLCJpbnRlcnZhbCIsIklTX0RFViIsImdldE9wdGlvbiIsIlRJTUVPVVRfMjRIT1VSUyIsImVsYXBzZWQiLCJEYXRlIiwibm93IiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJNYXRoIiwibWluIiwiVElNRU9VVF9NQVgiLCJpbml0QnVpbGRpbiIsInJlcXVlc3QiLCJCVUlMRF9JTl9TQ1JJUFRfU1JDIiwiY2FjaGUiLCJoZWFkZXJzIiwiQWNjZXB0IiwiUGFyc2VTY3JpcHQiLCJjb2RlIiwiY3VzdG9tIiwiYnVpbGRJbiIsIndoZXJlIiwiaW5pdGlhbGl6ZSIsImdsb2JhbCIsImRlZXBDb3B5IiwiYnJvd3NlciIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIklTX0ZJUkVGT1giLCJhcmdzIiwiY2F0Y2giLCJlIiwiUHJvbWlzZSIsInJlamVjdCIsIkVycm9yIiwiY2hlY2tSZW1vdmUiLCJzZXRJbnRlcnZhbCIsImFwaSIsImNocm9tZSIsImRlY2xhcmF0aXZlQ29udGVudCIsIm9uUGFnZUNoYW5nZWQiLCJnZXRSdWxlcyIsInJ1bGUiLCJuZXdJZCIsInByb2Nlc3MiLCJyZW1vdmVSdWxlcyIsImFkZFJ1bGVzIiwiY29uZGl0aW9ucyIsIlBhZ2VTdGF0ZU1hdGNoZXIiLCJwYWdlVXJsIiwidXJsQ29udGFpbnMiLCJhY3Rpb25zIiwiUmVxdWVzdENvbnRlbnRTY3JpcHQiLCJqcyIsImdldE1hbmlmZXN0IiwiY29udGVudF9zY3JpcHRzIiwiRXZlbnRFbWl0dGVyIiwic2NyaXB0IiwidXBkYXRlIiwibGlzdCIsImdldFNjcmlwdHMiLCJnZXQiLCJHZXRTY3JpcHRDb2RlIiwicmVtb3ZlIiwiTWFya1JlbW92ZWQiLCJyZW1vdmVkIiwic2VydmljZU5hbWVzIiwic2VydmljZUNsYXNzZXMiLCJzZXJ2aWNlcyIsImF1dG9TeW5jIiwiZGVib3VuY2UiLCJUSU1FT1VUX0hPVVIiLCJ3b3JraW5nIiwicmVzb2x2ZSIsInN5bmNDb25maWciLCJnZXRJdGVtRmlsZW5hbWUiLCJuYW1lIiwidXJpIiwiaXNTY3JpcHRGaWxlIiwidGVzdCIsImdldFVSSSIsImkiLCJpbmRleE9mIiwidmVyc2lvbiIsInNsaWNlIiwic3BsaXQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlcnIiLCJpbml0Q29uZmlnIiwia2V5IiwiZGVmIiwia2V5cyIsIm5vcm1hbGl6ZUtleXMiLCJ1bnNoaWZ0Iiwic2V0IiwidmFsdWUiLCJzZXRPcHRpb24iLCJpbml0IiwiY29uZmlnIiwic2VydmljZUNvbmZpZyIsImdldEtleXMiLCJ2YWwiLCJmb3JFYWNoRW50cnkiLCJrIiwidiIsImNsZWFyIiwic2VydmljZVN0YXRlIiwidmFsaWRTdGF0ZXMiLCJpbml0aWFsU3RhdGUiLCJvbkNoYW5nZSIsInN0YXRlIiwibmV3U3RhdGUiLCJjb25zb2xlIiwid2FybiIsImlzIiwic3RhdGVzIiwiZW5zdXJlQXJyYXkiLCJnZXRTdGF0ZXMiLCJtYXAiLCJzZXJ2aWNlIiwiZGlzcGxheU5hbWUiLCJhdXRoU3RhdGUiLCJzeW5jU3RhdGUiLCJsYXN0U3luYyIsInByb2dyZXNzIiwicHJvcGVydGllcyIsInVzZXJDb25maWciLCJnZXRVc2VyQ29uZmlnIiwiZ2V0U2NyaXB0RGF0YSIsInN5bmNWZXJzaW9uIiwiZXh0cmEiLCJwcm9wcyIsIm9iamVjdFBpY2siLCJtb3JlIiwiZW5hYmxlZCIsInNob3VsZFVwZGF0ZSIsImxhc3RVcGRhdGVkIiwicGFyc2VTY3JpcHREYXRhIiwicmF3Iiwib2JqIiwiSlNPTiIsInBhcnNlIiwib2JqZWN0UHVyaWZ5IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInNlcnZpY2VGYWN0b3J5IiwiYmFzZSIsIlNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImV4dGVuZCIsImV4dGVuZFNlcnZpY2UiLCJvcHRpb25zIiwiY3JlYXRlIiwib25TdGF0ZUNoYW5nZSIsIkJhc2VTZXJ2aWNlIiwiZGVsYXlUaW1lIiwidXJsUHJlZml4IiwibWV0YUZpbGUiLCJhdXRoVHlwZSIsIm5vb3AiLCJzZXRVc2VyQ29uZmlnIiwiZmluaXNoZWQiLCJ0b3RhbCIsImxhc3RGZXRjaCIsInN0YXJ0U3luYyIsInN5bmNGYWN0b3J5IiwiZXZlbnRzIiwiZ2V0RXZlbnRFbWl0dGVyIiwibG9nIiwicHJvbWlzZSIsImRlYm91bmNlZFJlc29sdmUiLCJzaG91bGRTeW5jIiwiZ2V0Q3VycmVudCIsImdldFJlYWR5IiwidGhlbiIsImVycm9yIiwicHJlcGFyZUhlYWRlcnMiLCJwcmVwYXJlIiwiaW5pdFRva2VuIiwidXNlciIsInR5cGUiLCJjaGVja1N5bmMiLCJhY3F1aXJlTG9jayIsInJlbGVhc2VMb2NrIiwiaGFuZGxlTWV0YUVycm9yIiwiZ2V0TWV0YSIsInRva2VuIiwiQXV0aG9yaXphdGlvbiIsImxvYWREYXRhIiwiZGVsYXkiLCJ0cyIsInN0YXJ0c1dpdGgiLCJwcmVmaXgiLCJnZXRMb2NhbERhdGEiLCJwbHVnaW5TY3JpcHQiLCJnZXRTeW5jRGF0YSIsInJlbW90ZU1ldGEiLCJhbGwiLCJyZW1vdGVEYXRhIiwibG9jYWxEYXRhIiwicmVtb3RlTWV0YURhdGEiLCJyZW1vdGVNZXRhSW5mbyIsImluZm8iLCJyZW1vdGVUaW1lc3RhbXAiLCJ0aW1lc3RhbXAiLCJyZW1vdGVDaGFuZ2VkIiwiZ2xvYmFsTGFzdE1vZGlmaWVkIiwicmVtb3RlSXRlbU1hcCIsImxvY2FsTWV0YSIsImZpcnN0U3luYyIsIm91dGRhdGVkIiwicHV0TG9jYWwiLCJwdXRSZW1vdGUiLCJkZWxSZW1vdGUiLCJkZWxMb2NhbCIsInVwZGF0ZUxvY2FsIiwicmVkdWNlIiwiaXRlbSIsIml0ZW1JbmZvIiwibW9kaWZpZWQiLCJwb3NpdGlvbiIsImxhc3RNb2RpZmllZCIsInJlbW90ZUluZm8iLCJyZW1vdGVJdGVtIiwicHVzaCIsImxvY2FsIiwicmVtb3RlIiwicHJvbWlzZVF1ZXVlIiwib2JqZWN0U2V0IiwicHV0Iiwic3RyaW5naWZ5IiwidXBkYXRlcyIsInVwZGF0ZVNjcmlwdEluZm8iLCJzb3J0U2NyaXB0cyIsImNoYW5nZWQiLCJzY3JpcHRzIiwicHJvbWlzZXMiLCJlcnJvcnMiLCJmaWx0ZXIiLCJCb29sZWFuIiwicmVnaXN0ZXIiLCJGYWN0b3J5IiwiZ2V0U2VydmljZSIsInN5bmNPbmUiLCJhdXRob3JpemUiLCJyZXZva2UiLCJzZXRDb25maWciLCJvcGVuQXV0aFBhZ2UiLCJyZWRpcmVjdFVyaSIsInVucmVnaXN0ZXJXZWJSZXF1ZXN0Iiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsInVybHMiLCJ0eXBlcyIsInRhYnMiLCJjaGVja0F1dGgiLCJjYW5jZWwiLCJyZW1vdmVMaXN0ZW5lciIsImNsaWVudF9pZCIsInJlZGlyZWN0X3VyaSIsImVzY1JFIiwiZXNjRnVuYyIsIm0iLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJqc29uU3RyaW5naWZ5U2FmZSIsInN0cmluZyIsInJlcGxhY2UiLCJEcm9wYm94IiwibWV0aG9kIiwic3RhdHVzIiwiYm9keSIsInBhdGgiLCJyZXNwb25zZVR5cGUiLCJlbnRyaWVzIiwibm9ybWFsaXplIiwibW9kZSIsInBhcmFtcyIsInJlc3BvbnNlX3R5cGUiLCJkdW1wUXVlcnkiLCJhdXRob3JpemVkIiwibG9hZFF1ZXJ5IiwiYWNjZXNzX3Rva2VuIiwidWlkIiwic2l6ZSIsImNsaWVudF9zZWNyZXQiLCJzY29wZSIsIlVOQVVUSE9SSVpFRCIsIkdvb2dsZURyaXZlIiwicmVmcmVzaFRva2VuIiwicmVmcmVzaF90b2tlbiIsImdyYW50X3R5cGUiLCJyZXF1ZXN0VXNlciIsImFjY2Vzc190eXBlIiwibm90aWZ5IiwidGl0bGUiLCJvYmplY3RHZXQiLCJzcGFjZXMiLCJmaWVsZHMiLCJmaWxlcyIsIm1ldGFJdGVtIiwiZ290TWV0YSIsInByb21wdCIsImJvdW5kYXJ5IiwiZ2V0VW5pcUlkIiwibWV0YWRhdGEiLCJwYXJlbnRzIiwiam9pbiIsIlN5bmNBdXRob3JpemUiLCJTeW5jUmV2b2tlIiwiU3luY1N0YXJ0IiwiU3luY1NldENvbmZpZyIsIk9uZURyaXZlIiwiaGVhZGVyIiwiZmlsZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInVzZXJfaWQiLCJLRVlfQ0hJTERSRU4iLCJTeW1ib2wiLCJYTm9kZSIsIm5vZGUiLCJuc01hcCIsInBhcnNlQXR0cnMiLCJwYXJzZU5hbWUiLCJmcm9tWE1MIiwieG1sIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwiYXR0cnMiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsIiQiLCJub2RlVHlwZSIsInRhZ05hbWUiLCJucyIsInRleHQiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJjaGlsZHJlbiIsImNoaWxkIiwiY2FsbGJhY2siLCJnZXRDYWxsYmFjayIsImZpbmQiLCJERUZBVUxUX0NPTkZJRyIsInNlcnZlclVybCIsImFub255bW91cyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJXZWJEQVYiLCJlbmRzV2l0aCIsIlVSTCIsImF1dGgiLCJ3aW5kb3ciLCJidG9hIiwiY2FsbCIsImNyZWRlbnRpYWxzIiwibWtkaXIiLCJyZWFkZGlyIiwiZGVwdGgiLCJpdGVtcyIsInByb3AiLCJkaXNwbGF5TmFtZU5vZGUiLCJ1bmRlZmluZWQiLCJocmVmIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJsb2NrIiwiSWYiLCJpbml0Q2FjaGUiLCJsaWZldGltZSIsIkNhY2hlTG9hZCIsIkNhY2hlSGl0IiwiaGl0IiwiQ2FjaGVQb3AiLCJwb3AiLCJ0ZXh0YXJlYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsaXBib2FyZERhdGEiLCJTZXRDbGlwYm9hcmQiLCJmb2N1cyIsInJldCIsImV4ZWNDb21tYW5kIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJzZXREYXRhIiwic3RvcmUiLCJzdG9yYWdlIiwic2V0RGF0YUNhY2hlIiwiZGF0YUNhY2hlIiwib25EdW1wIiwic2NyaXB0TWFwIiwiQ2hlY2tQb3NpdGlvbiIsIkNoZWNrUmVtb3ZlIiwiR2V0U2NyaXB0IiwiZ2V0U2NyaXB0IiwiRXhwb3J0WmlwIiwidmFsdWVzIiwiZ2V0UHJvcHNJZCIsImNvZGVNYXAiLCJnZXRNdWx0aSIsImdldE9uZSIsIkdldFNjcmlwdFZlciIsIm9wdHMiLCJtZXRhIiwiTW92ZSIsIm9mZnNldCIsImdldFNjcmlwdEJ5SWQiLCJpbmRleCIsInNwbGljZSIsIm5vcm1hbGl6ZVBvc2l0aW9uIiwiUmVtb3ZlU2NyaXB0IiwiUGFyc2VNZXRhIiwicGFyc2VNZXRhIiwicGFyc2VTY3JpcHQiLCJVcGRhdGVTY3JpcHRJbmZvIiwiVmFjdXVtIiwidmFjdXVtIiwicHJlSW5pdGlhbGl6ZSIsImxhc3RWZXJzaW9uIiwicGF0Y2hEQiIsInN0b3JlSW5mbyIsImlkTWFwIiwidXJpTWFwIiwibW9kcyIsInJlc1VybHMiLCJyZW1lbWJlclVybCIsIl8iLCJnZXRJbnQiLCJnZXROYW1lVVJJIiwiZ2V0RGVmYXVsdEN1c3RvbSIsIm1heCIsInBhdGhNYXAiLCJncmFudCIsIlNldCIsInJlcXVpcmUiLCJyZXNvdXJjZXMiLCJpY29uIiwibW9kIiwicmVtb3ZlTXVsdGkiLCJkZWZhdWx0SW5qZWN0SW50byIsIklOSkVDVF9QQUdFIiwiY29tcGFyZVZlcnNpb24iLCJJTkpFQ1RfQVVUTyIsInVwZGF0ZUxhc3RNb2RpZmllZCIsImR1bXAiLCJzb3J0IiwiYSIsImIiLCJnZXRWYWx1ZVN0b3Jlc0J5SWRzIiwiZHVtcFZhbHVlU3RvcmVzIiwidmFsdWVEaWN0IiwiRU5WX0NBQ0hFX0tFWVMiLCJFTlZfUkVRX0tFWVMiLCJFTlZfVkFMVUVfSURTIiwiR01WQUxVRVNfUkUiLCJSVU5fQVRfUkUiLCJnZXRTY3JpcHRzQnlVUkwiLCJpc1RvcCIsImFsbFNjcmlwdHMiLCJ0ZXN0QmxhY2tsaXN0Iiwibm9mcmFtZXMiLCJ0ZXN0U2NyaXB0IiwiZGlzYWJsZWRJZHMiLCJlbnZTdGFydCIsImVudkRlbGF5ZWQiLCJidWlsZFBhdGhNYXAiLCJydW5BdCIsImVudiIsInNvbWUiLCJyZWFkRW52aXJvbm1lbnREYXRhIiwiU1RPUkFHRV9ST1VURVMiLCJyZXRyaWVkU3RvcmFnZUtleXMiLCJpc1JldHJ5IiwiYXJlYSIsInNyY0lkcyIsImdldEtleSIsImVycjIiLCJnZXRJY29uQ2FjaGUiLCJpY29uVXJscyIsImlzUmVtb3RlIiwibWFrZURhdGFVcmkiLCJmb3JjZSIsInRvUmVtb3ZlIiwiVElNRU9VVF9XRUVLIiwiZ2V0VVVJRCIsInJuZCIsIlVpbnQxNkFycmF5IiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwic2F2ZVNjcmlwdCIsIm9sZFNjcmlwdCIsInV1aWQiLCJyYW5kb21VVUlEIiwiaTE4biIsIkNNRF9TQ1JJUFRfVVBEQVRFIiwicmVzdWx0IiwibWVzc2FnZSIsImlzTmV3IiwibmV3U2NyaXB0IiwiQ01EX1NDUklQVF9BREQiLCJob21lcGFnZVVSTCIsImZyb20iLCJsYXN0SW5zdGFsbFVSTCIsImZldGNoUmVzb3VyY2VzIiwicGx1Z2luRXZlbnRzIiwiZW1pdCIsImJhc2VVcmwiLCJmdWxsVXJsIiwiZ2V0RnVsbFVybCIsInJlc291cmNlQ2FjaGUiLCJyZXFPcHRpb25zIiwic25hdGNoIiwidmFsaWRhdG9yIiwiY29udGVudHMiLCJmZXRjaCIsInZhbGlkYXRlSW1hZ2UiLCJpZ25vcmVEZXBzRXJyb3JzIiwidHJ1ZUpvaW4iLCJmb3JtYXRIdHRwRXJyb3IiLCJidWYiLCJibG9iVXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwiQmxvYiIsIm9uRG9uZSIsInJldm9rZU9iamVjdFVSTCIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJvbmVycm9yIiwiX3ZhY3V1bWluZyIsIm51bUZpeGVzIiwicmVzb2x2ZVNlbGYiLCJyIiwidG9GZXRjaCIsImtleXNUb1JlbW92ZSIsInZhbHVlS2V5cyIsImNhY2hlS2V5cyIsInJlcXVpcmVLZXlzIiwiY29kZUtleXMiLCJtYXBwaW5ncyIsImZvckVhY2hLZXkiLCJzdWJzdG9yZSIsInRvdWNoIiwic2NyaXB0SWQiLCJmb3JFYWNoVmFsdWUiLCJnZXRTY3JpcHROYW1lIiwiZml4ZXMiLCJvbiIsIm9mZiIsImZpcmUiLCJmdW5jIiwicG9zdEluaXRpYWxpemUiLCJvbkNvbW1hbmQiLCJPcGVuRWRpdG9yIiwicm91dGUiLCJUYWJPcGVuIiwiQ0FDSEVfRFVSQVRJT04iLCJHZXRJbWFnZURhdGEiLCJsb2FkSW1hZ2VEYXRhIiwiYmFzZTY0IiwiU2V0QmFkZ2UiLCJzZXRCYWRnZSIsImJyb3dzZXJBY3Rpb24iLCJpZ25vcmVFcnJvcnMiLCJsYXN0RXJyb3IiLCJtYWtlTWV0aG9kIiwiZm4iLCJiYWRnZXMiLCJLRVlfSVNfQVBQTElFRCIsIktFWV9TSE9XX0JBREdFIiwiS0VZX0JBREdFX0NPTE9SIiwiS0VZX0JBREdFX0NPTE9SX0JMT0NLRUQiLCJpc0FwcGxpZWQiLCJzaG93QmFkZ2UiLCJiYWRnZUNvbG9yIiwiYmFkZ2VDb2xvckJsb2NrZWQiLCJ0aXRsZUJsYWNrbGlzdGVkIiwidGl0bGVOb25pbmplY3RhYmxlIiwiaWNvbkNhY2hlIiwiam9icyIsInNldEljb24iLCJ1cGRhdGVCYWRnZSIsInVwZGF0ZUJhZGdlQ29sb3IiLCJ1cGRhdGVTdGF0ZSIsImZvckVhY2hUYWIiLCJvblJlbW92ZWQiLCJvblVwZGF0ZWQiLCJmYXZJY29uVXJsIiwidW5pcXVlIiwic2V0QmFkZ2VUZXh0Iiwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJsb2NrZWQiLCJpbmplY3RhYmxlIiwiSU5KRUNUQUJMRV9UQUJfVVJMX1JFIiwiYmxhY2tsaXN0ZWQiLCJzZXRUaXRsZSIsImljb25EYXRhIiwibiIsImltZyIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsInRvRGF0YVVSTCIsImdldEltYWdlRGF0YSIsImV4dGVuc2lvblJvb3QiLCJnZXRVUkwiLCJtYWluIiwicnVuIiwiY3JlYXRlRkZtcGVnIiwiZmV0Y2hGaWxlIiwiZmZtcGVnIiwibG9hZCIsImNvcmVQYXRoIiwibWVyZ2UiLCJ2aWRlbyIsImF1ZGlvIiwiRlMiLCJodHRwUmVxdWVzdCIsInJlcXVlc3RzIiwiZXZlbnRzVG9Ob3RpZnkiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImZpbGVOYW1lIiwibG9hZGVkIiwidHNVcmwiLCJ0c1VyaSIsImJhc2VVUkwiLCJtZXJnZU0zdTgiLCJwcmVsb2FkcyIsIm9ucHJvZ3Jlc3MiLCJwcCIsIl9sb2FkZWQiLCJwIiwiTnVtYmVyIiwiX3RvdGFsIiwibTN1OCIsImxpbmUiLCJ0b0xvd2VyQ2FzZSIsInRzT3B0cyIsInZhbHMiLCJzaGlmdCIsIm91dCIsImJsb2IiLCJkb3dubG9hZHMiLCJkb3dubG9hZCIsImZpbGVuYW1lIiwiZG93bmxvYWRJZCIsIm1lcmdlVmlkZW8iLCJ2aWRlb09wdHMiLCJhdWRpb09wdHMiLCJub3RpZmljYXRpb25zIiwiaWNvblVybCIsImRlZmF1bHRJbWFnZSIsImlzQ2xpY2thYmxlIiwiYnJvYWRjYXN0Iiwic2VuZE1lc3NhZ2UiLCJzZW5kTWVzc2FnZU9ySWdub3JlIiwicXVlcnkiLCJvcGVuZXJzIiwiTm90aWZpY2F0aW9uIiwiYmdFeHRyYXMiLCJub3RpZmljYXRpb25JZCIsIm9uQ2xpY2siLCJSZW1vdmVOb3RpZmljYXRpb24iLCJvbkNsaWNrZWQiLCJvcGVuZXJJZCIsInNlbmRUYWJDbWQiLCJvbkNsb3NlZCIsIkdldEFsbE9wdGlvbnMiLCJHZXRPcHRpb25zIiwiZGVmYXVsdHMiLCJtYXBFbnRyeSIsIlNldE9wdGlvbnMiLCJob29rcyIsImluaXRIb29rcyIsImNhbGxIb29rc0xhdGVyIiwiY2FsbEhvb2tzIiwiaW5pdFBlbmRpbmciLCJmaXJlQ2hhbmdlIiwibWFpbktleSIsImdldERlZmF1bHRPcHRpb24iLCJvcHRpb25LZXkiLCJvcHRpb25WYWx1ZSIsImhvb2siLCJpbmRleGVkREIiLCJvcGVuIiwib25zdWNjZXNzIiwidHJhbnNmb3JtIiwib251cGdyYWRlbmVlZGVkIiwiZGIiLCJ0eCIsInRyYW5zYWN0aW9uIiwicHJvY2Vzc2luZyIsImRvbmUiLCJnZXRBbGwiLCJzdG9yZU5hbWUiLCJvYmplY3RTdG9yZSIsInRyYW5zZm9ybVNjcmlwdCIsImFsbFZhbHVlcyIsImFsbENhY2hlIiwiYWxsUmVxdWlyZSIsIm9yaWdJbmNsdWRlIiwib3JpZ0V4Y2x1ZGUiLCJvcmlnTWF0Y2giLCJvcmlnRXhjbHVkZU1hdGNoIiwib25Db25uZWN0Iiwib25Qb3B1cE9wZW5lZCIsInByZWZldGNoU2V0UG9wdXAiLCJicm93c2VyX2FjdGlvbiIsImRlZmF1bHRfcG9wdXAiLCJwb3J0Iiwib25EaXNjb25uZWN0Iiwib25Qb3B1cENsb3NlZCIsIlNldFBvcHVwIiwiQVBJX0NPTkZJRyIsIlRJTUVfQUZURVJfU0VORCIsIlRJTUVfQUZURVJfUkVDRUlWRSIsIlRJTUVfS0VFUF9EQVRBIiwiY2FjaGVDb2RlIiwib25EaXNwb3NlIiwicmNzIiwicmNzUHJvbWlzZSIsInVucmVnaXN0ZXIiLCJJTkpFQ1RfSU5UTyIsIktFWV9FWFBPU0UiLCJLRVlfREVGX0lOSkVDVF9JTlRPIiwiS0VZX1hIUl9JTkpFQ1QiLCJleHBvc2UiLCJpbmplY3RJbnRvIiwieGhySW5qZWN0Iiwib25PcHRpb25DaGFuZ2VkIiwiZmVlZElkIiwicHJvY2Vzc0ZlZWRiYWNrIiwiZGVsIiwiY2FjaGVLZXkiLCJlbnZLZXkiLCJwcmVwYXJlU2NyaXB0IiwibmVlZHNJbmplY3Rpb24iLCJleGVjdXRlU2NyaXB0IiwicHJvcHNUb0NsZWFyIiwib25DaGFuZ2VkIiwiZGJLZXlzIiwiY2FjaGVWYWx1ZXMiLCJnZXRWYWx1ZXMiLCJkaXJ0eSIsImRlc3Ryb3kiLCJub3JtYWxpemVSZWFsbSIsImhhc093blByb3BlcnR5IiwiSU5KRUNUX01BUFBJTkciLCJ0b2dnbGVYaHJJbmplY3QiLCJ0b2dnbGVQcmVpbmplY3QiLCJzaXRlIiwiaXNFeHBvc2VkIiwiZW5hYmxlIiwib25PZmYiLCJvblNlbmRIZWFkZXJzIiwib25IZWFkZXJzUmVjZWl2ZWQiLCJPbkhlYWRlcnNSZWNlaXZlZE9wdGlvbnMiLCJFWFRSQV9IRUFERVJTIiwiaGFzIiwicHJlcGFyZVhockJsb2IiLCJyZXNwb25zZUhlYWRlcnMiLCJkZXRlY3RTdHJpY3RDc3AiLCJmb3JjZUNvbnRlbnRJbmplY3Rpb24iLCJwcmVwYXJlU2NyaXB0cyIsImlzTGF0ZSIsImhhc01vcmUiLCJldmVyeSIsInNjciIsImlzQ29udGVudFJlYWxtIiwidWEiLCJyZWdpc3RlclNjcmlwdERhdGFGRiIsImRhdGFLZXkiLCJyZXBsYWNlV2l0aEZ1bGxXaWR0aEZvcm0iLCJpc0NvbnRlbnQiLCJyZXFzIiwicmVxc1NsaWNlcyIsImNvbmNhdCIsImhhc1JlcXMiLCJpbmplY3RlZENvZGUiLCJtZXRhU3RyIiwiTUVUQUJMT0NLX1JFIiwicyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInJlc29sdmVEYXRhQ29kZVN0ciIsInZtUmVzb2x2ZSIsInZtRGF0YSIsImFsbEZyYW1lcyIsImNvbnRlbnRTY3JpcHRzIiwibWF0Y2hlcyIsInJlYWxtIiwiSU5KRUNUX0NPTlRFTlQiLCJyZXFIYW5kbGVyIiwiVk1fVkVSSUZZIiwiQ09ORklSTV9VUkxfQkFTRSIsInZlcmlmeSIsInRhYlJlcXVlc3RzIiwiZW5jb2RlciIsImV2dCIsImN1cnJlbnQiLCJDb25maXJtSW5zdGFsbCIsImNvbmZpcm1JbnN0YWxsIiwiQ2hlY2tJbnN0YWxsZXJUYWIiLCJIdHRwUmVxdWVzdCIsImJsb2JiZWQiLCJjaHVua2VkIiwiY29udGVudFR5cGUiLCJyZXNwb25zZSIsImJsb2Iyb2JqZWN0VXJsIiwiQWJvcnRSZXF1ZXN0IiwiYWJvcnQiLCJjbGVhclJlcXVlc3QiLCJSZXZva2VCbG9iIiwic3BlY2lhbEhlYWRlcnMiLCJIZWFkZXJJbmplY3RvciIsImFwaUZpbHRlciIsIk9uQmVmb3JlU2VuZEhlYWRlcnNPcHRpb25zIiwiaGVhZGVyc1RvSW5qZWN0IiwiaXNWbVZlcmlmeSIsImlzTm90Q29va2llIiwiaXNTZW5kYWJsZSIsImlzU2VuZGFibGVBbm9uIiwiUkVfU0VUX0NPT0tJRSIsIlJFX1NFVF9DT09LSUVfVkFMVUUiLCJSRV9TRVRfQ09PS0lFX0FUVFIiLCJTQU1FX1NJVEVfTUFQIiwic3RyaWN0IiwibGF4Iiwibm9uZSIsInNldENvb2tpZUluU3RvcmUiLCJoZWFkZXJWYWx1ZSIsImV4ZWMiLCJvcHRTdHIiLCJvcHQiLCJpc0hvc3QiLCJsYXN0SW5kZXgiLCJzYW1lU2l0ZSIsImNvb2tpZXMiLCJleHBpcmF0aW9uRGF0ZSIsImV4cGlyZXMiLCJodHRwT25seSIsInNlY3VyZSIsInN0b3JlSWQiLCJhcGlFdmVudHMiLCJvbkJlZm9yZVNlbmRIZWFkZXJzIiwibGlzdGVuZXIiLCJyZXF1ZXN0SGVhZGVycyIsInJlcXVlc3RJZCIsInJlcUlkIiwiY29yZUlkIiwibm9OYXRpdmVDb29raWUiLCJoIiwiZW5jb2RlV2ViUmVxdWVzdEhlYWRlciIsImFkZCIsImlzRW1wdHkiLCJDSFVOS19TSVpFIiwiYmxvYjJjaHVuayIsImJsb2IyYmFzZTY0IiwieGhyQ2FsbGJhY2tXcmFwcGVyIiwibGFzdFByb21pc2UiLCJkYXRhU2l6ZSIsIm51bUNodW5rcyIsInJlc3BvbnNlVGV4dCIsImdldENodW5rIiwiZ2V0UmVzcG9uc2VIZWFkZXJzIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJjZWlsIiwic2hvdWxkTm90aWZ5Iiwic2hvdWxkU2VuZFJlc3BvbnNlIiwicmVhZHlTdGF0ZSIsImNiIiwiZmluYWxVcmwiLCJyZXNwb25zZVVSTCIsImNodW5rIiwicG9zIiwibGFzdCIsImlzU3BlY2lhbEhlYWRlciIsImxvd2VySGVhZGVyIiwiaW5jb2duaXRvIiwib3ZlcnJpZGVNaW1lVHlwZSIsInhoclR5cGUiLCJ2bUhlYWRlcnMiLCJkZWNvZGVCb2R5Iiwic2hvdWxkU2VuZENvb2tpZXMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwibG93ZXJOYW1lIiwidGltZW91dCIsImdldEFsbENvb2tpZVN0b3JlcyIsInRhYklkcyIsImZpcmVmb3giLCJmaXJzdFBhcnR5RG9tYWluIiwiYyIsInNlc3Npb24iLCJvbmxvYWRlbmQiLCJzZW5kIiwid2FzQmxvYiIsInN0cmluZzJ1aW50OGFycmF5IiwiYXRvYiIsInAxIiwiaXNVc2VyU2NyaXB0IiwiY29uZmlybUtleSIsImFjdGl2ZSIsImNhblJlcGxhY2VDdXJUYWIiLCJmZiIsImNvbmZpcm1VcmwiLCJ3aW5kb3dJZCIsIndpbmRvd3MiLCJmb2N1c2VkIiwid2hpdGVsaXN0UmUiLCJSZWdFeHAiLCJibGFja2xpc3RSZSIsInJlc29sdmVWaXJ0dWFsVXJsIiwidmlydHVhbFVybFJlIiwibWF5YmVSZWRpcmVjdFZpcnR1YWxVcmxGRiIsImFwaUV2ZW50IiwiYmluZCIsIm9uQ3JlYXRlZCIsInJlZGlyZWN0VXJsIiwibWF5YmVJbnN0YWxsVXNlckpzIiwiYmluYXJ5VmFsdWUiLCJzdHJpbmcyYnl0ZVN0cmluZyIsImJ1ZmZlcjJzdHJpbmciLCJzdHIiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsIkNhY2hlTmV3U2NyaXB0IiwiTmV3U2NyaXB0IiwiYXJyYXlUeXBlIiwiZGVmYXVsdCIsImRlZmF1bHRUeXBlIiwibWV0YVR5cGVzIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJleGNsdWRlTWF0Y2giLCJyZXNvdXJjZSIsInBhaXIiLCJtZXRhT3B0aW9uYWxUeXBlcyIsImFudGlmZWF0dXJlIiwiY29tcGF0aWJsZSIsImNvbm5lY3QiLCJtZXRhQm9keSIsIl9tYXRjaCIsInJhd0tleSIsInJhd1ZhbHVlIiwia2V5TmFtZSIsImxvY2FsZSIsImNhbWVsS2V5IiwiZyIsInRvVXBwZXJDYXNlIiwibWV0YVR5cGUiLCJvbGRWYWx1ZSIsImhvbWVwYWdlIiwiZGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwibmFtZXNwYWNlIiwibmFtZVVSSSIsImVuY29kZUZpbGVuYW1lIiwicGllY2UiLCJkaWN0Iiwia2V5VmFsIiwiY2FjaGVPckZldGNoIiwiY2hlY2siLCJtYWtlUmF3IiwiaGFuZGxlcnMiLCJjYWNoZU9yRmV0Y2hIYW5kbGVyIiwiZG9GZXRjaCIsImlzTW9kaWZpZWQiLCJwYXRoSWQiLCJ2aWV3IiwiZXh0ZW5zaW9uIiwiZ2V0Vmlld3MiLCJsb2NhdGlvbiIsIm1heWJlSW5XaW5kb3ciLCJjb250YWluZXIiLCJpbnNlcnQiLCJwaW5uZWQiLCJzcmNUYWIiLCJzcmNVcmwiLCJpc0ludGVybmFsIiwiY29va2llU3RvcmVJZCIsImdldENvbnRhaW5lcklkIiwiY2FuT3BlbkluY29nbml0byIsIm5ld1RhYiIsInduZE9wdHMiLCJoYXNQb3MiLCJ3bmQiLCJvcGVuZXJUYWJJZFN1cHBvcnRlZCIsIm9wZW5lclRhYklkIiwiVGFiQ2xvc2UiLCJUYWJGb2N1cyIsInJlYWR5IiwiZGVmaW5lUHJvcGVydGllcyIsIm9zIiwiU0NSSVBUX1RFTVBMQVRFX0VESVRFRCIsIklOSVRJQUxfVEVNUExBVEUiLCJlZGl0ZWQiLCJ0ZW1wbGF0ZSIsImRlZmF1bHRUZW1wbGF0ZSIsIlRlc3RCbGFja2xpc3QiLCJyZXNldEJsYWNrbGlzdCIsIlJFX01BVENIX1BBUlRTIiwiYmxhY2tsaXN0UnVsZXMiLCJibGFja2xpc3QiLCJSRV9IVFRQX09SX0hUVFBTIiwiTUFYX0JMX0NBQ0hFX0xFTkdUSCIsImJsQ2FjaGUiLCJibENhY2hlU2l6ZSIsInRlc3RSdWxlcyIsInJ1bGVzIiwicnVsZUJ1aWxkZXIiLCJtYXRjaGVyIiwidGVzdEdsb2IiLCJhdXRvUmVnIiwidGVzdE1hdGNoIiwibWF0Y2hUZXN0ZXIiLCJiYXRjaCIsIm1hdCIsIm1lcmdlTGlzdHMiLCJpbmMiLCJleGMiLCJleGNNYXQiLCJvayIsInN0cjJSRSIsInJlIiwiYmluZFJFIiwicmVTdHIiLCJyZVRsZFN0ciIsInRzdHIiLCJzdWZmaXgiLCJtYXRjaFNjaGVtZSIsIlJFX1NUUl9BTlkiLCJSRV9TVFJfVExEIiwiaG9zdE1hdGNoZXIiLCJydWxlTEMiLCJ0bGRTdHIiLCJ0bGRTdWZmaXgiLCJwYXRoTWF0Y2hlciIsImlIYXNoIiwiaVF1ZXJ5Iiwic3RyUmUiLCJydWxlUGFydHMiLCJtYXRjaEhvc3QiLCJtYXRjaFBhdGgiLCJwYXJ0cyIsInVwZGF0ZUJsYWNrbGlzdENhY2hlIiwiQ2hlY2tVcGRhdGUiLCJyZXN1bHRzIiwiY2hlY2tBbGxBbmROb3RpZnkiLCJDaGVja1VwZGF0ZUFsbCIsInRvVXBkYXRlIiwibm90ZXMiLCJjaGVja1VwZGF0ZSIsIm9wZW5PcHRpb25zUGFnZSIsInByb2Nlc3NlcyIsImRvQ2hlY2tVcGRhdGUiLCJtc2dPayIsIm1zZ0VyciIsInJlc291cmNlT3B0cyIsImRvd25sb2FkVXBkYXRlIiwiY2hlY2tpbmciLCJjYW5Ob3RpZnkiLCJkb3dubG9hZFVSTCIsInVwZGF0ZVVSTCIsImRldiIsImVycm9yTWVzc2FnZSIsImFubm91bmNlIiwiYWxsb3dlZCIsIm5vdGlmeVVwZGF0ZXMiLCJ1cGRhdGVTY2hlZHVsZWQiLCJHZXRWYWx1ZVN0b3JlIiwic3RvcmVzIiwiU2V0VmFsdWVTdG9yZXMiLCJicm9hZGNhc3RWYWx1ZVN0b3JlcyIsImdyb3VwU3RvcmVzQnlGcmFtZSIsIlVwZGF0ZVZhbHVlIiwidXBkYXRlTGF0ZXIiLCJvblJlcGxhY2VkIiwiYWRkZWRJZCIsInJlbW92ZWRJZCIsIm9wZW5lclRhYnMiLCJzY3JpcHRJZHMiLCJjdXJyZW50Q2FjaGUiLCJkb1VwZGF0ZSIsInZhbHVlU3RvcmVzIiwiZ3JvdXBDYWNoZUJ5RnJhbWUiLCJwYXJ0aWFsIiwidGFiRnJhbWVEYXRhIiwidGFza3MiLCJmcmFtZXMiLCJmcmFtZURhdGEiLCJjYWNoZURhdGEiLCJ0b1NlbmQiLCJzY3JpcHREYXRhIiwiZGF0YUVudHJpZXMiLCJoaXN0b3J5IiwiY2hlY2tUeXBlIiwiaGFuZGxlIiwiZGVmYXVsdFByZXZlbnRlZCIsImluaXRUTEQiLCJleHBvcnRNZXRob2QiLCJ0bGRqcyIsImlzUmVhZHkiLCJnZXREb21haW4iLCJnZXRTdWJkb21haW4iLCJnZXRQdWJsaWNTdWZmaXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKQSxtQkFBbUIsbUJBQU8sQ0FBQyw4REFBYTtBQUN4QyxPQUFPLGtCQUFrQixHQUFHLG1CQUFPLENBQUMsc0VBQW9COztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBc0M7QUFDbEQ7QUFDQSxNQUFNLFNBQW9HO0FBQzFHOzs7Ozs7Ozs7Ozs7QUNWQSxtQkFBbUIsbUJBQU8sQ0FBQyw4REFBYTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFVBQVUsU0FBUyxPQUFPLEVBQUUsRUFBRTtBQUN6RCxtREFBbUQsS0FBSztBQUN4RDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLDhEQUFhO0FBQ3hDLE9BQU8sTUFBTSxHQUFHLG1CQUFPLENBQUMsb0VBQWM7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSTtBQUMzQjtBQUNBLGlCQUFpQixJQUFJLGVBQWUsZUFBZTtBQUNuRCxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0EsaUJBQWlCLElBQUksY0FBYyxRQUFRO0FBQzNDO0FBQ0E7O0FBRUEseUJBQXlCLHNCQUFzQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDN0RBLHVCQUF1QixtQkFBTyxDQUFDLHFGQUFrQjtBQUNqRCw0QkFBNEIsbUJBQU8sQ0FBQywrRkFBdUI7QUFDM0Qsa0JBQWtCLG1CQUFPLENBQUMsMkVBQWE7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNqREEsT0FBTywyQkFBMkIsR0FBRyxtQkFBTyxDQUFDLDZEQUFVO0FBQ3ZELE9BQU8sbUNBQW1DLEdBQUcsbUJBQU8sQ0FBQyxtRUFBYTtBQUNsRSxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBdUI7QUFDckQsa0JBQWtCLG1CQUFPLENBQUMsK0VBQW1CO0FBQzdDLE9BQU8sc0NBQXNDLEdBQUcsbUJBQU8sQ0FBQyxrRUFBUTtBQUNoRSxPQUFPLFVBQVUsR0FBRyxtQkFBTyxDQUFDLG1FQUFpQjs7QUFFN0M7O0FBRUEsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMseUJBQXlCO0FBQ3RFLDBDQUEwQyx5QkFBeUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU8sR0FBRyx1REFBdUQsV0FBVyxpQ0FBaUM7QUFDdkk7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RCxTQUFTO0FBQ1QsZ0RBQWdELFFBQVE7QUFDeEQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtDQUFrQyxRQUFROztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsTkEsbUJBQU8sQ0FBQyxrRkFBNkI7QUFDckMscUJBQXFCLG1CQUFPLENBQUMseUVBQWdCO0FBQzdDLE9BQU8sWUFBWSxHQUFHLG1CQUFPLENBQUMsa0VBQVE7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0Esb0JBQW9CLEtBQUssSUFBSSxRQUFRO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakMsS0FBSztBQUNMLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQSxDQUFDOztBQUVEO0FBQ0EsbUJBQW1CLEtBQTBCO0FBQzdDO0FBQ0Esa0JBQWtCLEtBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixZQUFZLFNBQVM7QUFDckI7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksU0FBUztBQUNyQjtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxLQUFLO0FBQ0wsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4Qix5Q0FBeUMscUJBQXFCOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9CQUFvQjs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxjQUFjLGlCQUFpQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixvQkFBb0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFFVTtBQUNaO0FBQ0EsRUFBRSxtQ0FBbUI7QUFDckI7QUFDQSxHQUFHO0FBQUEsb0dBQUM7QUFDSixFQUFFLE1BQU0sRUFhTjs7QUFFRixDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3BoQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BGYTs7QUFFYixpQ0FBaUMsbUJBQU8sQ0FBQywwREFBVTtBQUNuRCxxQ0FBcUMsbUJBQU8sQ0FBQywwREFBVTs7Ozs7Ozs7Ozs7O0FDSHZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVI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QUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsTUFBTTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUQsQ0FBTjtBQUNBLGVBQU9BLEdBQUcsQ0FBQzRTLGdCQUFYO0FBQ0QsT0FIRDtBQUlEO0FBQ0Y7O0FBakQrQixDOzs7Ozs7Ozs7Ozs7QUNBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNDLE9BQVQsR0FBbUIsQ0FBRTs7QUFFNUIsU0FBU0MsWUFBVCxDQUFzQjkvQixHQUF0QixFQUEyQjtBQUN6QixTQUFPLENBQUMsR0FBRzVELElBQUosS0FBYTJqQyw0Q0FBSyxJQUFJQSw0Q0FBSyxDQUFDLy9CLEdBQUQsQ0FBTCxDQUFXLEdBQUc1RCxJQUFkLENBQTdCO0FBQ0Q7O0FBRU0sU0FBUzRqQyxPQUFULEdBQW1CO0FBQ3hCLFNBQU8sQ0FBQyxDQUFDRCw0Q0FBVDtBQUNEO0FBRU0sTUFBTUUsU0FBUyxHQUFHSCxZQUFZLENBQUMsV0FBRCxDQUE5QjtBQUNBLE1BQU1JLFlBQVksR0FBR0osWUFBWSxDQUFDLGNBQUQsQ0FBakM7QUFDQSxNQUFNSyxlQUFlLEdBQUdMLFlBQVksQ0FBQyxpQkFBRCxDQUFwQyxDIiwiZmlsZSI6ImJhY2tncm91bmQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYmFja2dyb3VuZC9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2JhY2tncm91bmQvaW5kZXguanNcIixcInB1YmxpYy9saWIvdGxkanNcIixcImNvbW1vblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImNvbnN0IHJlc29sdmVVUkwgPSByZXF1aXJlKCdyZXNvbHZlLXVybCcpO1xuY29uc3QgeyBkZXZEZXBlbmRlbmNpZXMgfSA9IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpO1xuXG4vKlxuICogRGVmYXVsdCBvcHRpb25zIGZvciBicm93c2VyIGVudmlyb25tZW50XG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb3JlUGF0aDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcbiAgICA/IHJlc29sdmVVUkwoJy9ub2RlX21vZHVsZXMvQGZmbXBlZy9jb3JlL2Rpc3QvZmZtcGVnLWNvcmUuanMnKVxuICAgIDogYGh0dHBzOi8vdW5wa2cuY29tL0BmZm1wZWcvY29yZUAke2RldkRlcGVuZGVuY2llc1snQGZmbXBlZy9jb3JlJ10uc3Vic3RyaW5nKDEpfS9kaXN0L2ZmbXBlZy1jb3JlLmpzYCxcbn07XG4iLCJjb25zdCByZXNvbHZlVVJMID0gcmVxdWlyZSgncmVzb2x2ZS11cmwnKTtcblxuY29uc3QgcmVhZEZyb21CbG9iT3JGaWxlID0gKGJsb2IpID0+IChcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShmaWxlUmVhZGVyLnJlc3VsdCk7XG4gICAgfTtcbiAgICBmaWxlUmVhZGVyLm9uZXJyb3IgPSAoeyB0YXJnZXQ6IHsgZXJyb3I6IHsgY29kZSB9IH0gfSkgPT4ge1xuICAgICAgcmVqZWN0KEVycm9yKGBGaWxlIGNvdWxkIG5vdCBiZSByZWFkISBDb2RlPSR7Y29kZX1gKSk7XG4gICAgfTtcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICB9KVxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3luYyAoX2RhdGEpID0+IHtcbiAgbGV0IGRhdGEgPSBfZGF0YTtcbiAgaWYgKHR5cGVvZiBfZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgX2RhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgLyogRnJvbSBiYXNlNjQgZm9ybWF0ICovXG4gICAgaWYgKC9kYXRhOl9kYXRhXFwvKFthLXpBLVpdKik7YmFzZTY0LChbXlwiXSopLy50ZXN0KF9kYXRhKSkge1xuICAgICAgZGF0YSA9IGF0b2IoX2RhdGEuc3BsaXQoJywnKVsxXSlcbiAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAubWFwKChjKSA9PiBjLmNoYXJDb2RlQXQoMCkpO1xuICAgIC8qIEZyb20gcmVtb3RlIHNlcnZlci9VUkwgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocmVzb2x2ZVVSTChfZGF0YSkpO1xuICAgICAgZGF0YSA9IGF3YWl0IHJlcy5hcnJheUJ1ZmZlcigpO1xuICAgIH1cbiAgLyogRnJvbSBCbG9iIG9yIEZpbGUgKi9cbiAgfSBlbHNlIGlmIChfZGF0YSBpbnN0YW5jZW9mIEZpbGUgfHwgX2RhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgZGF0YSA9IGF3YWl0IHJlYWRGcm9tQmxvYk9yRmlsZShfZGF0YSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmNvbnN0IHJlc29sdmVVUkwgPSByZXF1aXJlKCdyZXNvbHZlLXVybCcpO1xuY29uc3QgeyBsb2cgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2xvZycpO1xuXG4vKlxuICogRmV0Y2ggZGF0YSBmcm9tIHJlbW90ZSBVUkwgYW5kIGNvbnZlcnQgdG8gYmxvYiBVUkxcbiAqIHRvIGF2b2lkIENPUlMgaXNzdWVcbiAqL1xuY29uc3QgdG9CbG9iVVJMID0gYXN5bmMgKHVybCwgbWltZVR5cGUpID0+IHtcbiAgbG9nKCdpbmZvJywgYGZldGNoICR7dXJsfWApO1xuICBjb25zdCBidWYgPSBhd2FpdCAoYXdhaXQgZmV0Y2godXJsKSkuYXJyYXlCdWZmZXIoKTtcbiAgbG9nKCdpbmZvJywgYCR7dXJsfSBmaWxlIHNpemUgPSAke2J1Zi5ieXRlTGVuZ3RofSBieXRlc2ApO1xuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2J1Zl0sIHsgdHlwZTogbWltZVR5cGUgfSk7XG4gIGNvbnN0IGJsb2JVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICBsb2coJ2luZm8nLCBgJHt1cmx9IGJsb2IgVVJMID0gJHtibG9iVVJMfWApO1xuICByZXR1cm4gYmxvYlVSTDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXN5bmMgKHsgY29yZVBhdGg6IF9jb3JlUGF0aCB9KSA9PiB7XG4gIGlmICh0eXBlb2YgX2NvcmVQYXRoICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IEVycm9yKCdjb3JlUGF0aCBzaG91bGQgYmUgYSBzdHJpbmchJyk7XG4gIH1cbiAgY29uc3QgY29yZVJlbW90ZVBhdGggPSByZXNvbHZlVVJMKF9jb3JlUGF0aCk7XG4gIGNvbnN0IGNvcmVQYXRoID0gYXdhaXQgdG9CbG9iVVJMKFxuICAgIGNvcmVSZW1vdGVQYXRoLFxuICAgICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgKTtcbiAgY29uc3Qgd2FzbVBhdGggPSBhd2FpdCB0b0Jsb2JVUkwoXG4gICAgY29yZVJlbW90ZVBhdGgucmVwbGFjZSgnZmZtcGVnLWNvcmUuanMnLCAnZmZtcGVnLWNvcmUud2FzbScpLFxuICAgICdhcHBsaWNhdGlvbi93YXNtJyxcbiAgKTtcbiAgY29uc3Qgd29ya2VyUGF0aCA9IGF3YWl0IHRvQmxvYlVSTChcbiAgICBjb3JlUmVtb3RlUGF0aC5yZXBsYWNlKCdmZm1wZWctY29yZS5qcycsICdmZm1wZWctY29yZS53b3JrZXIuanMnKSxcbiAgICAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICk7XG4gIGlmICh0eXBlb2YgY3JlYXRlRkZtcGVnQ29yZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgY29uc3QgZXZlbnRIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIGxvZygnaW5mbycsICdmZm1wZWctY29yZS5qcyBzY3JpcHQgbG9hZGVkJyk7XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIGNyZWF0ZUZGbXBlZ0NvcmUsXG4gICAgICAgICAgY29yZVBhdGgsXG4gICAgICAgICAgd2FzbVBhdGgsXG4gICAgICAgICAgd29ya2VyUGF0aCxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgc2NyaXB0LnNyYyA9IGNvcmVQYXRoO1xuICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZXZlbnRIYW5kbGVyKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbiAgfVxuICBsb2coJ2luZm8nLCAnZmZtcGVnLWNvcmUuanMgc2NyaXB0IGlzIGxvYWRlZCBhbHJlYWR5Jyk7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgIGNyZWF0ZUZGbXBlZ0NvcmUsXG4gICAgY29yZVBhdGgsXG4gICAgd2FzbVBhdGgsXG4gICAgd29ya2VyUGF0aCxcbiAgfSk7XG59O1xuIiwiY29uc3QgZGVmYXVsdE9wdGlvbnMgPSByZXF1aXJlKCcuL2RlZmF1bHRPcHRpb25zJyk7XG5jb25zdCBnZXRDcmVhdGVGRm1wZWdDb3JlID0gcmVxdWlyZSgnLi9nZXRDcmVhdGVGRm1wZWdDb3JlJyk7XG5jb25zdCBmZXRjaEZpbGUgPSByZXF1aXJlKCcuL2ZldGNoRmlsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVmYXVsdE9wdGlvbnMsXG4gIGdldENyZWF0ZUZGbXBlZ0NvcmUsXG4gIGZldGNoRmlsZSxcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVmYXVsdEFyZ3M6IFtcbiAgICAvKiBhcmdzWzBdIGlzIGFsd2F5cyB0aGUgYmluYXJ5IHBhdGggKi9cbiAgICAnLi9mZm1wZWcnLFxuICAgIC8qIERpc2FibGUgaW50ZXJhY3Rpb24gbW9kZSAqL1xuICAgICctbm9zdGRpbicsXG4gICAgLyogRm9yY2UgdG8gb3ZlcnJpZGUgb3V0cHV0IGZpbGUgKi9cbiAgICAnLXknLFxuICBdLFxuICBiYXNlT3B0aW9uczoge1xuICAgIC8qIEZsYWcgdG8gdHVybiBvbi9vZmYgbG9nIG1lc3NhZ2VzIGluIGNvbnNvbGUgKi9cbiAgICBsb2c6IGZhbHNlLFxuICAgIC8qXG4gICAgICogQ3VzdG9tIGxvZ2dlciB0byBnZXQgZmZtcGVnLndhc20gb3V0cHV0IG1lc3NhZ2VzLlxuICAgICAqIGEgc2FtcGxlIGxvZ2dlciBsb29rcyBsaWtlIHRoaXM6XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBsb2dnZXIgPSAoeyB0eXBlLCBtZXNzYWdlIH0pID0+IHtcbiAgICAgKiAgIGNvbnNvbGUubG9nKHR5cGUsIG1lc3NhZ2UpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIHR5cGUgY2FuIGJlIG9uZSBvZiBmb2xsb3dpbmc6XG4gICAgICpcbiAgICAgKiBpbmZvOiBpbnRlcm5hbCB3b3JrZmxvdyBkZWJ1ZyBtZXNzYWdlc1xuICAgICAqIGZmZXJyOiBmZm1wZWcgbmF0aXZlIHN0ZGVyciBvdXRwdXRcbiAgICAgKiBmZm91dDogZmZtcGVnIG5hdGl2ZSBzdGRvdXQgb3V0cHV0XG4gICAgICovXG4gICAgbG9nZ2VyOiAoKSA9PiB7fSxcbiAgICAvKlxuICAgICAqIFByb2dyZXNzIGhhbmRsZXIgdG8gZ2V0IGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgZmZtcGVnIGNvbW1hbmQuXG4gICAgICogYSBzYW1wbGUgcHJvZ3Jlc3MgaGFuZGxlciBsb29rcyBsaWtlIHRoaXM6XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBwcm9ncmVzcyA9ICh7IHJhdGlvIH0pID0+IHtcbiAgICAgKiAgIGNvbnNvbGUubG9nKHJhdGlvKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiByYXRpbyBpcyBhIGZsb2F0IG51bWJlciBiZXR3ZWVuIDAgdG8gMS5cbiAgICAgKi9cbiAgICBwcm9ncmVzczogKCkgPT4ge30sXG4gICAgLypcbiAgICAgKiBQYXRoIHRvIGZpbmQvZG93bmxvYWQgZmZtcGVnLndhc20tY29yZSxcbiAgICAgKiB0aGlzIHZhbHVlIHNob3VsZCBiZSBvdmVyd3JpdGVuIGJ5IGBkZWZhdWx0T3B0aW9uc2AgaW5cbiAgICAgKiBlYWNoIGVudmlyb25tZW50LlxuICAgICAqL1xuICAgIGNvcmVQYXRoOiAnJyxcbiAgfSxcbn07XG4iLCJjb25zdCB7IGRlZmF1bHRBcmdzLCBiYXNlT3B0aW9ucyB9ID0gcmVxdWlyZSgnLi9jb25maWcnKTtcbmNvbnN0IHsgc2V0TG9nZ2luZywgc2V0Q3VzdG9tTG9nZ2VyLCBsb2cgfSA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nJyk7XG5jb25zdCBwYXJzZVByb2dyZXNzID0gcmVxdWlyZSgnLi91dGlscy9wYXJzZVByb2dyZXNzJyk7XG5jb25zdCBwYXJzZUFyZ3MgPSByZXF1aXJlKCcuL3V0aWxzL3BhcnNlQXJncycpO1xuY29uc3QgeyBkZWZhdWx0T3B0aW9ucywgZ2V0Q3JlYXRlRkZtcGVnQ29yZSB9ID0gcmVxdWlyZSgnLi9ub2RlJyk7XG5jb25zdCB7IHZlcnNpb24gfSA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xuXG5jb25zdCBOT19MT0FEID0gRXJyb3IoJ2ZmbXBlZy53YXNtIGlzIG5vdCByZWFkeSwgbWFrZSBzdXJlIHlvdSBoYXZlIGNvbXBsZXRlZCBsb2FkKCkuJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKF9vcHRpb25zID0ge30pID0+IHtcbiAgY29uc3Qge1xuICAgIGxvZzogbG9nZ2luZyxcbiAgICBsb2dnZXIsXG4gICAgcHJvZ3Jlc3M6IG9wdFByb2dyZXNzLFxuICAgIC4uLm9wdGlvbnNcbiAgfSA9IHtcbiAgICAuLi5iYXNlT3B0aW9ucyxcbiAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAuLi5fb3B0aW9ucyxcbiAgfTtcbiAgbGV0IENvcmUgPSBudWxsO1xuICBsZXQgZmZtcGVnID0gbnVsbDtcbiAgbGV0IHJ1blJlc29sdmUgPSBudWxsO1xuICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICBsZXQgcHJvZ3Jlc3MgPSBvcHRQcm9ncmVzcztcbiAgY29uc3QgZGV0ZWN0Q29tcGxldGlvbiA9IChtZXNzYWdlKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UgPT09ICdGRk1QRUdfRU5EJyAmJiBydW5SZXNvbHZlICE9PSBudWxsKSB7XG4gICAgICBydW5SZXNvbHZlKCk7XG4gICAgICBydW5SZXNvbHZlID0gbnVsbDtcbiAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBhcnNlTWVzc2FnZSA9ICh7IHR5cGUsIG1lc3NhZ2UgfSkgPT4ge1xuICAgIGxvZyh0eXBlLCBtZXNzYWdlKTtcbiAgICBwYXJzZVByb2dyZXNzKG1lc3NhZ2UsIHByb2dyZXNzKTtcbiAgICBkZXRlY3RDb21wbGV0aW9uKG1lc3NhZ2UpO1xuICB9O1xuXG4gIC8qXG4gICAqIExvYWQgZmZtcGVnLndhc20tY29yZSBzY3JpcHQuXG4gICAqIEluIGJyb3dzZXIgZW52aXJvbm1lbnQsIHRoZSBmZm1wZWcud2FzbS1jb3JlIHNjcmlwdCBpcyBmZXRjaCBmcm9tXG4gICAqIENETiBhbmQgY2FuIGJlIGFzc2lnbiB0byBhIGxvY2FsIHBhdGggYnkgYXNzaWduaW5nIGBjb3JlUGF0aGAuXG4gICAqIEluIG5vZGUgZW52aXJvbm1lbnQsIHdlIHVzZSBkeW5hbWljIHJlcXVpcmUgYW5kIHRoZSBkZWZhdWx0IGBjb3JlUGF0aGBcbiAgICogaXMgYCRmZm1wZWcvY29yZWAuXG4gICAqXG4gICAqIFR5cGljYWxseSB0aGUgbG9hZCgpIGZ1bmMgbWlnaHQgdGFrZSBmZXcgc2Vjb25kcyB0byBtaW51dGVzIHRvIGNvbXBsZXRlLFxuICAgKiBiZXR0ZXIgdG8gZG8gaXQgYXMgZWFybHkgYXMgcG9zc2libGUuXG4gICAqXG4gICAqL1xuICBjb25zdCBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgIGxvZygnaW5mbycsICdsb2FkIGZmbXBlZy1jb3JlJyk7XG4gICAgaWYgKENvcmUgPT09IG51bGwpIHtcbiAgICAgIGxvZygnaW5mbycsICdsb2FkaW5nIGZmbXBlZy1jb3JlJyk7XG4gICAgICAvKlxuICAgICAgICogSW4gbm9kZSBlbnZpcm9ubWVudCwgYWxsIHBhdGhzIGFyZSB1bmRlZmluZWQgYXMgdGhlcmVcbiAgICAgICAqIGlzIG5vIG5lZWQgdG8gc2V0IHRoZW0uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3JlYXRlRkZtcGVnQ29yZSxcbiAgICAgICAgY29yZVBhdGgsXG4gICAgICAgIHdvcmtlclBhdGgsXG4gICAgICAgIHdhc21QYXRoLFxuICAgICAgfSA9IGF3YWl0IGdldENyZWF0ZUZGbXBlZ0NvcmUob3B0aW9ucyk7XG4gICAgICBDb3JlID0gYXdhaXQgY3JlYXRlRkZtcGVnQ29yZSh7XG4gICAgICAgIC8qXG4gICAgICAgICAqIEFzc2lnbiBtYWluU2NyaXB0VXJsT3JCbG9iIGZpeGVzIGNocm9tZSBleHRlbnNpb24gd2ViIHdvcmtlciBpc3N1ZVxuICAgICAgICAgKiBhcyB0aGVyZSBpcyBubyBkb2N1bWVudC5jdXJyZW50U2NyaXB0IGluIHRoZSBjb250ZXh0IG9mIGNvbnRlbnRfc2NyaXB0c1xuICAgICAgICAgKi9cbiAgICAgICAgbWFpblNjcmlwdFVybE9yQmxvYjogY29yZVBhdGgsXG4gICAgICAgIHByaW50RXJyOiAobWVzc2FnZSkgPT4gcGFyc2VNZXNzYWdlKHsgdHlwZTogJ2ZmZXJyJywgbWVzc2FnZSB9KSxcbiAgICAgICAgcHJpbnQ6IChtZXNzYWdlKSA9PiBwYXJzZU1lc3NhZ2UoeyB0eXBlOiAnZmZvdXQnLCBtZXNzYWdlIH0pLFxuICAgICAgICAvKlxuICAgICAgICAgKiBsb2NhdGVGaWxlIG92ZXJyaWRlcyBwYXRocyBvZiBmaWxlcyB0aGF0IGlzIGxvYWRlZCBieSBtYWluIHNjcmlwdCAoZmZtcGVnLWNvcmUuanMpLlxuICAgICAgICAgKiBJdCBpcyBjcml0aWNhbCBmb3IgYnJvd3NlciBlbnZpcm9ubWVudCBhbmQgd2Ugb3ZlcnJpZGUgYm90aCB3YXNtIGFuZCB3b3JrZXIgcGF0aHNcbiAgICAgICAgICogYXMgd2UgYXJlIHVzaW5nIGJsb2IgVVJMIGluc3RlYWQgb2Ygb3JpZ2luYWwgVVJMIHRvIGF2b2lkIGNyb3NzIG9yaWdpbiBpc3N1ZXMuXG4gICAgICAgICAqL1xuICAgICAgICBsb2NhdGVGaWxlOiAocGF0aCwgcHJlZml4KSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdhc21QYXRoICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAmJiBwYXRoLmVuZHNXaXRoKCdmZm1wZWctY29yZS53YXNtJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHdhc21QYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3b3JrZXJQYXRoICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAmJiBwYXRoLmVuZHNXaXRoKCdmZm1wZWctY29yZS53b3JrZXIuanMnKSkge1xuICAgICAgICAgICAgICByZXR1cm4gd29ya2VyUGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHByZWZpeCArIHBhdGg7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGZmbXBlZyA9IENvcmUuY3dyYXAoJ3Byb3h5X21haW4nLCAnbnVtYmVyJywgWydudW1iZXInLCAnbnVtYmVyJ10pO1xuICAgICAgbG9nKCdpbmZvJywgJ2ZmbXBlZy1jb3JlIGxvYWRlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcignZmZtcGVnLndhc20gd2FzIGxvYWRlZCwgeW91IHNob3VsZCBub3QgbG9hZCBpdCBhZ2FpbiwgdXNlIGZmbXBlZy5pc0xvYWRlZCgpIHRvIGNoZWNrIG5leHQgdGltZS4nKTtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIENvcmUgaXMgbG9hZGVkLlxuICAgKi9cbiAgY29uc3QgaXNMb2FkZWQgPSAoKSA9PiBDb3JlICE9PSBudWxsO1xuXG4gIC8qXG4gICAqIFJ1biBmZm1wZWcgY29tbWFuZC5cbiAgICogVGhpcyBpcyB0aGUgbWFqb3IgZnVuY3Rpb24gaW4gZmZtcGVnLndhc20sIHlvdSBjYW4ganVzdCBpbWFnaW5lIGl0XG4gICAqIGFzIGZmbXBlZyBuYXRpdmUgY2xpIGFuZCB3aGF0IHlvdSBuZWVkIHRvIHBhc3MgaXMgdGhlIHNhbWUuXG4gICAqXG4gICAqIEZvciBleGFtcGxlLCB5b3UgY2FuIGNvbnZlcnQgbmF0aXZlIGNvbW1hbmQgYmVsb3c6XG4gICAqXG4gICAqIGBgYFxuICAgKiAkIGZmbXBlZyAtaSB2aWRlby5hdmkgLWM6diBsaWJ4MjY0IHZpZGVvLm1wNFxuICAgKiBgYGBcbiAgICpcbiAgICogVG9cbiAgICpcbiAgICogYGBgXG4gICAqIGF3YWl0IGZmbXBlZy5ydW4oJy1pJywgJ3ZpZGVvLmF2aScsICctYzp2JywgJ2xpYngyNjQnLCAndmlkZW8ubXA0Jyk7XG4gICAqIGBgYFxuICAgKlxuICAgKi9cbiAgY29uc3QgcnVuID0gKC4uLl9hcmdzKSA9PiB7XG4gICAgbG9nKCdpbmZvJywgYHJ1biBmZm1wZWcgY29tbWFuZDogJHtfYXJncy5qb2luKCcgJyl9YCk7XG4gICAgaWYgKENvcmUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IE5PX0xPQUQ7XG4gICAgfSBlbHNlIGlmIChydW5uaW5nKSB7XG4gICAgICB0aHJvdyBFcnJvcignZmZtcGVnLndhc20gY2FuIG9ubHkgcnVuIG9uZSBjb21tYW5kIGF0IGEgdGltZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBhcmdzID0gWy4uLmRlZmF1bHRBcmdzLCAuLi5fYXJnc10uZmlsdGVyKChzKSA9PiBzLmxlbmd0aCAhPT0gMCk7XG4gICAgICAgIHJ1blJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICBmZm1wZWcoLi4ucGFyc2VBcmdzKENvcmUsIGFyZ3MpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKlxuICAgKiBSdW4gRlMgb3BlcmF0aW9ucy5cbiAgICogRm9yIGlucHV0L291dHB1dCBmaWxlIG9mIGZmbXBlZy53YXNtLCBpdCBpcyByZXF1aXJlZCB0byBzYXZlIHRoZW0gdG8gTUVNRlNcbiAgICogZmlyc3Qgc28gdGhhdCBmZm1wZWcud2FzbSBpcyBhYmxlIHRvIGNvbnN1bWUgdGhlbS4gSGVyZSB3ZSByZWx5IG9uIHRoZSBGU1xuICAgKiBtZXRob2RzIHByb3ZpZGVkIGJ5IEVtc2NyaXB0ZW4uXG4gICAqXG4gICAqIENvbW1vbiBtZXRob2RzIHRvIHVzZSBhcmU6XG4gICAqIGZmbXBlZy5GUygnd3JpdGVGaWxlJywgJ3ZpZGVvLmF2aScsIG5ldyBVaW50OEFycmF5KC4uLikpOiB3cml0ZUZpbGUgd3JpdGVzXG4gICAqIGRhdGEgdG8gTUVNRlMuIFlvdSBuZWVkIHRvIHVzZSBVaW50OEFycmF5IGZvciBiaW5hcnkgZGF0YS5cbiAgICogZmZtcGVnLkZTKCdyZWFkRmlsZScsICd2aWRlby5tcDQnKTogcmVhZEZpbGUgZnJvbSBNRU1GUy5cbiAgICogZmZtcGVnLkZTKCd1bmxpbmsnLCAndmlkZW8ubWFwJyk6IGRlbGV0ZSBmaWxlIGZyb20gTUVNRlMuXG4gICAqXG4gICAqIEZvciBtb3JlIGluZm8sIGNoZWNrIGh0dHBzOi8vZW1zY3JpcHRlbi5vcmcvZG9jcy9hcGlfcmVmZXJlbmNlL0ZpbGVzeXN0ZW0tQVBJLmh0bWxcbiAgICpcbiAgICovXG4gIGNvbnN0IEZTID0gKG1ldGhvZCwgLi4uYXJncykgPT4ge1xuICAgIGxvZygnaW5mbycsIGBydW4gRlMuJHttZXRob2R9ICR7YXJncy5tYXAoKGFyZykgPT4gKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnID8gYXJnIDogYDwke2FyZy5sZW5ndGh9IGJ5dGVzIGJpbmFyeSBmaWxlPmApKS5qb2luKCcgJyl9YCk7XG4gICAgaWYgKENvcmUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IE5PX0xPQUQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXQgPSBudWxsO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0ID0gQ29yZS5GU1ttZXRob2RdKC4uLmFyZ3MpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAobWV0aG9kID09PSAncmVhZGRpcicpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihgZmZtcGVnLkZTKCdyZWFkZGlyJywgJyR7YXJnc1swXX0nKSBlcnJvci4gQ2hlY2sgaWYgdGhlIHBhdGggZXhpc3RzLCBleDogZmZtcGVnLkZTKCdyZWFkZGlyJywgJy8nKWApO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ3JlYWRGaWxlJykge1xuICAgICAgICAgIHRocm93IEVycm9yKGBmZm1wZWcuRlMoJ3JlYWRGaWxlJywgJyR7YXJnc1swXX0nKSBlcnJvci4gQ2hlY2sgaWYgdGhlIHBhdGggZXhpc3RzYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIGluIEZTIG9wZXJhdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIGZvcmNpYmx5IHRlcm1pbmF0ZSB0aGUgZmZtcGVnIHByb2dyYW0uXG4gICAqL1xuICBjb25zdCBleGl0ID0gKCkgPT4ge1xuICAgIGlmIChDb3JlID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBOT19MT0FEO1xuICAgIH0gZWxzZSB7XG4gICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICBDb3JlLmV4aXQoMSk7XG4gICAgICBDb3JlID0gbnVsbDtcbiAgICAgIGZmbXBlZyA9IG51bGw7XG4gICAgICBydW5SZXNvbHZlID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJvZ3Jlc3MgPSAoX3Byb2dyZXNzKSA9PiB7XG4gICAgcHJvZ3Jlc3MgPSBfcHJvZ3Jlc3M7XG4gIH07XG5cbiAgY29uc3Qgc2V0TG9nZ2VyID0gKF9sb2dnZXIpID0+IHtcbiAgICBzZXRDdXN0b21Mb2dnZXIoX2xvZ2dlcik7XG4gIH07XG5cbiAgc2V0TG9nZ2luZyhsb2dnaW5nKTtcbiAgc2V0Q3VzdG9tTG9nZ2VyKGxvZ2dlcik7XG5cbiAgbG9nKCdpbmZvJywgYHVzZSBmZm1wZWcud2FzbSB2JHt2ZXJzaW9ufWApO1xuXG4gIHJldHVybiB7XG4gICAgc2V0UHJvZ3Jlc3MsXG4gICAgc2V0TG9nZ2VyLFxuICAgIHNldExvZ2dpbmcsXG4gICAgbG9hZCxcbiAgICBpc0xvYWRlZCxcbiAgICBydW4sXG4gICAgZXhpdCxcbiAgICBGUyxcbiAgfTtcbn07XG4iLCJyZXF1aXJlKCdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnKTtcbmNvbnN0IGNyZWF0ZUZGbXBlZyA9IHJlcXVpcmUoJy4vY3JlYXRlRkZtcGVnJyk7XG5jb25zdCB7IGZldGNoRmlsZSB9ID0gcmVxdWlyZSgnLi9ub2RlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKlxuICAgKiBDcmVhdGUgZmZtcGVnIGluc3RhbmNlLlxuICAgKiBFYWNoIGZmbXBlZyBpbnN0YW5jZSBvd25zIGFuIGlzb2xhdGVkIE1FTUZTIGFuZCB3b3Jrc1xuICAgKiBpbmRlcGVuZGVudGx5LlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogYGBgXG4gICAqIGNvbnN0IGZmbXBlZyA9IGNyZWF0ZUZGbXBlZyh7XG4gICAqICBsb2c6IHRydWUsXG4gICAqICBsb2dnZXI6ICgpID0+IHt9LFxuICAgKiAgcHJvZ3Jlc3M6ICgpID0+IHt9LFxuICAgKiAgY29yZVBhdGg6ICcnLFxuICAgKiB9KVxuICAgKiBgYGBcbiAgICpcbiAgICogRm9yIHRoZSB1c2FnZSBvZiB0aGVzZSBmb3VyIGFyZ3VtZW50cywgY2hlY2sgY29uZmlnLmpzXG4gICAqXG4gICAqL1xuICBjcmVhdGVGRm1wZWcsXG4gIC8qXG4gICAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZmV0Y2hpbmcgZmlsZXMgZnJvbSB2YXJpb3VzIHJlc291cmNlLlxuICAgKiBTb21ldGltZXMgdGhlIHZpZGVvL2F1ZGlvIGZpbGUgeW91IHdhbnQgdG8gcHJvY2VzcyBtYXkgbG9jYXRlZFxuICAgKiBpbiBhIHJlbW90ZSBVUkwgYW5kIHNvbWV3aGVyZSBpbiB5b3VyIGxvY2FsIGZpbGUgc3lzdGVtLlxuICAgKlxuICAgKiBUaGlzIGhlbHBlciBmdW5jdGlvbiBoZWxwcyB5b3UgdG8gZmV0Y2ggdG8gZmlsZSBhbmQgcmV0dXJuIGFuXG4gICAqIFVpbnQ4QXJyYXkgdmFyaWFibGUgZm9yIGZmbXBlZy53YXNtIHRvIGNvbnN1bWUuXG4gICAqXG4gICAqL1xuICBmZXRjaEZpbGUsXG59O1xuIiwibGV0IGxvZ2dpbmcgPSBmYWxzZTtcbmxldCBjdXN0b21Mb2dnZXIgPSAoKSA9PiB7fTtcblxuY29uc3Qgc2V0TG9nZ2luZyA9IChfbG9nZ2luZykgPT4ge1xuICBsb2dnaW5nID0gX2xvZ2dpbmc7XG59O1xuXG5jb25zdCBzZXRDdXN0b21Mb2dnZXIgPSAobG9nZ2VyKSA9PiB7XG4gIGN1c3RvbUxvZ2dlciA9IGxvZ2dlcjtcbn07XG5cbmNvbnN0IGxvZyA9ICh0eXBlLCBtZXNzYWdlKSA9PiB7XG4gIGN1c3RvbUxvZ2dlcih7IHR5cGUsIG1lc3NhZ2UgfSk7XG4gIGlmIChsb2dnaW5nKSB7XG4gICAgY29uc29sZS5sb2coYFske3R5cGV9XSAke21lc3NhZ2V9YCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsb2dnaW5nLFxuICBzZXRMb2dnaW5nLFxuICBzZXRDdXN0b21Mb2dnZXIsXG4gIGxvZyxcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChDb3JlLCBhcmdzKSA9PiB7XG4gIGNvbnN0IGFyZ3NQdHIgPSBDb3JlLl9tYWxsb2MoYXJncy5sZW5ndGggKiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7XG4gIGFyZ3MuZm9yRWFjaCgocywgaWR4KSA9PiB7XG4gICAgY29uc3QgYnVmID0gQ29yZS5fbWFsbG9jKHMubGVuZ3RoICsgMSk7XG4gICAgQ29yZS53cml0ZUFzY2lpVG9NZW1vcnkocywgYnVmKTtcbiAgICBDb3JlLnNldFZhbHVlKGFyZ3NQdHIgKyAoVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQgKiBpZHgpLCBidWYsICdpMzInKTtcbiAgfSk7XG4gIHJldHVybiBbYXJncy5sZW5ndGgsIGFyZ3NQdHJdO1xufTtcbiIsImxldCBkdXJhdGlvbiA9IDA7XG5sZXQgcmF0aW8gPSAwO1xuXG5jb25zdCB0czJzZWMgPSAodHMpID0+IHtcbiAgY29uc3QgW2gsIG0sIHNdID0gdHMuc3BsaXQoJzonKTtcbiAgcmV0dXJuIChwYXJzZUZsb2F0KGgpICogNjAgKiA2MCkgKyAocGFyc2VGbG9hdChtKSAqIDYwKSArIHBhcnNlRmxvYXQocyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IChtZXNzYWdlLCBwcm9ncmVzcykgPT4ge1xuICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKG1lc3NhZ2Uuc3RhcnRzV2l0aCgnICBEdXJhdGlvbicpKSB7XG4gICAgICBjb25zdCB0cyA9IG1lc3NhZ2Uuc3BsaXQoJywgJylbMF0uc3BsaXQoJzogJylbMV07XG4gICAgICBjb25zdCBkID0gdHMyc2VjKHRzKTtcbiAgICAgIHByb2dyZXNzKHsgZHVyYXRpb246IGQsIHJhdGlvIH0pO1xuICAgICAgaWYgKGR1cmF0aW9uID09PSAwIHx8IGR1cmF0aW9uID4gZCkge1xuICAgICAgICBkdXJhdGlvbiA9IGQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnN0YXJ0c1dpdGgoJ2ZyYW1lJykgfHwgbWVzc2FnZS5zdGFydHNXaXRoKCdzaXplJykpIHtcbiAgICAgIGNvbnN0IHRzID0gbWVzc2FnZS5zcGxpdCgndGltZT0nKVsxXS5zcGxpdCgnICcpWzBdO1xuICAgICAgY29uc3QgdCA9IHRzMnNlYyh0cyk7XG4gICAgICByYXRpbyA9IHQgLyBkdXJhdGlvbjtcbiAgICAgIHByb2dyZXNzKHsgcmF0aW8sIHRpbWU6IHQgfSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnN0YXJ0c1dpdGgoJ3ZpZGVvOicpKSB7XG4gICAgICBwcm9ncmVzcyh7IHJhdGlvOiAxIH0pO1xuICAgICAgZHVyYXRpb24gPSAwO1xuICAgIH1cbiAgfVxufTtcbiIsIi8qISBodHRwczovL210aHMuYmUvcHVueWNvZGUgdjEuNC4xIGJ5IEBtYXRoaWFzICovXG47KGZ1bmN0aW9uKHJvb3QpIHtcblxuXHQvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGVzICovXG5cdHZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiZcblx0XHQhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXHR2YXIgZnJlZU1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmXG5cdFx0IW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cdHZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWw7XG5cdGlmIChcblx0XHRmcmVlR2xvYmFsLmdsb2JhbCA9PT0gZnJlZUdsb2JhbCB8fFxuXHRcdGZyZWVHbG9iYWwud2luZG93ID09PSBmcmVlR2xvYmFsIHx8XG5cdFx0ZnJlZUdsb2JhbC5zZWxmID09PSBmcmVlR2xvYmFsXG5cdCkge1xuXHRcdHJvb3QgPSBmcmVlR2xvYmFsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBgcHVueWNvZGVgIG9iamVjdC5cblx0ICogQG5hbWUgcHVueWNvZGVcblx0ICogQHR5cGUgT2JqZWN0XG5cdCAqL1xuXHR2YXIgcHVueWNvZGUsXG5cblx0LyoqIEhpZ2hlc3QgcG9zaXRpdmUgc2lnbmVkIDMyLWJpdCBmbG9hdCB2YWx1ZSAqL1xuXHRtYXhJbnQgPSAyMTQ3NDgzNjQ3LCAvLyBha2EuIDB4N0ZGRkZGRkYgb3IgMl4zMS0xXG5cblx0LyoqIEJvb3RzdHJpbmcgcGFyYW1ldGVycyAqL1xuXHRiYXNlID0gMzYsXG5cdHRNaW4gPSAxLFxuXHR0TWF4ID0gMjYsXG5cdHNrZXcgPSAzOCxcblx0ZGFtcCA9IDcwMCxcblx0aW5pdGlhbEJpYXMgPSA3Mixcblx0aW5pdGlhbE4gPSAxMjgsIC8vIDB4ODBcblx0ZGVsaW1pdGVyID0gJy0nLCAvLyAnXFx4MkQnXG5cblx0LyoqIFJlZ3VsYXIgZXhwcmVzc2lvbnMgKi9cblx0cmVnZXhQdW55Y29kZSA9IC9eeG4tLS8sXG5cdHJlZ2V4Tm9uQVNDSUkgPSAvW15cXHgyMC1cXHg3RV0vLCAvLyB1bnByaW50YWJsZSBBU0NJSSBjaGFycyArIG5vbi1BU0NJSSBjaGFyc1xuXHRyZWdleFNlcGFyYXRvcnMgPSAvW1xceDJFXFx1MzAwMlxcdUZGMEVcXHVGRjYxXS9nLCAvLyBSRkMgMzQ5MCBzZXBhcmF0b3JzXG5cblx0LyoqIEVycm9yIG1lc3NhZ2VzICovXG5cdGVycm9ycyA9IHtcblx0XHQnb3ZlcmZsb3cnOiAnT3ZlcmZsb3c6IGlucHV0IG5lZWRzIHdpZGVyIGludGVnZXJzIHRvIHByb2Nlc3MnLFxuXHRcdCdub3QtYmFzaWMnOiAnSWxsZWdhbCBpbnB1dCA+PSAweDgwIChub3QgYSBiYXNpYyBjb2RlIHBvaW50KScsXG5cdFx0J2ludmFsaWQtaW5wdXQnOiAnSW52YWxpZCBpbnB1dCdcblx0fSxcblxuXHQvKiogQ29udmVuaWVuY2Ugc2hvcnRjdXRzICovXG5cdGJhc2VNaW51c1RNaW4gPSBiYXNlIC0gdE1pbixcblx0Zmxvb3IgPSBNYXRoLmZsb29yLFxuXHRzdHJpbmdGcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLFxuXG5cdC8qKiBUZW1wb3JhcnkgdmFyaWFibGUgKi9cblx0a2V5O1xuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdC8qKlxuXHQgKiBBIGdlbmVyaWMgZXJyb3IgdXRpbGl0eSBmdW5jdGlvbi5cblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIGVycm9yIHR5cGUuXG5cdCAqIEByZXR1cm5zIHtFcnJvcn0gVGhyb3dzIGEgYFJhbmdlRXJyb3JgIHdpdGggdGhlIGFwcGxpY2FibGUgZXJyb3IgbWVzc2FnZS5cblx0ICovXG5cdGZ1bmN0aW9uIGVycm9yKHR5cGUpIHtcblx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcihlcnJvcnNbdHlwZV0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBgQXJyYXkjbWFwYCB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnkgYXJyYXlcblx0ICogaXRlbS5cblx0ICogQHJldHVybnMge0FycmF5fSBBIG5ldyBhcnJheSBvZiB2YWx1ZXMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwKGFycmF5LCBmbikge1xuXHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdHdoaWxlIChsZW5ndGgtLSkge1xuXHRcdFx0cmVzdWx0W2xlbmd0aF0gPSBmbihhcnJheVtsZW5ndGhdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIHNpbXBsZSBgQXJyYXkjbWFwYC1saWtlIHdyYXBwZXIgdG8gd29yayB3aXRoIGRvbWFpbiBuYW1lIHN0cmluZ3Mgb3IgZW1haWxcblx0ICogYWRkcmVzc2VzLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnlcblx0ICogY2hhcmFjdGVyLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IHN0cmluZyBvZiBjaGFyYWN0ZXJzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFja1xuXHQgKiBmdW5jdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIG1hcERvbWFpbihzdHJpbmcsIGZuKSB7XG5cdFx0dmFyIHBhcnRzID0gc3RyaW5nLnNwbGl0KCdAJyk7XG5cdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHQvLyBJbiBlbWFpbCBhZGRyZXNzZXMsIG9ubHkgdGhlIGRvbWFpbiBuYW1lIHNob3VsZCBiZSBwdW55Y29kZWQuIExlYXZlXG5cdFx0XHQvLyB0aGUgbG9jYWwgcGFydCAoaS5lLiBldmVyeXRoaW5nIHVwIHRvIGBAYCkgaW50YWN0LlxuXHRcdFx0cmVzdWx0ID0gcGFydHNbMF0gKyAnQCc7XG5cdFx0XHRzdHJpbmcgPSBwYXJ0c1sxXTtcblx0XHR9XG5cdFx0Ly8gQXZvaWQgYHNwbGl0KHJlZ2V4KWAgZm9yIElFOCBjb21wYXRpYmlsaXR5LiBTZWUgIzE3LlxuXHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJlZ2V4U2VwYXJhdG9ycywgJ1xceDJFJyk7XG5cdFx0dmFyIGxhYmVscyA9IHN0cmluZy5zcGxpdCgnLicpO1xuXHRcdHZhciBlbmNvZGVkID0gbWFwKGxhYmVscywgZm4pLmpvaW4oJy4nKTtcblx0XHRyZXR1cm4gcmVzdWx0ICsgZW5jb2RlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG51bWVyaWMgY29kZSBwb2ludHMgb2YgZWFjaCBVbmljb2RlXG5cdCAqIGNoYXJhY3RlciBpbiB0aGUgc3RyaW5nLiBXaGlsZSBKYXZhU2NyaXB0IHVzZXMgVUNTLTIgaW50ZXJuYWxseSxcblx0ICogdGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYSBwYWlyIG9mIHN1cnJvZ2F0ZSBoYWx2ZXMgKGVhY2ggb2Ygd2hpY2hcblx0ICogVUNTLTIgZXhwb3NlcyBhcyBzZXBhcmF0ZSBjaGFyYWN0ZXJzKSBpbnRvIGEgc2luZ2xlIGNvZGUgcG9pbnQsXG5cdCAqIG1hdGNoaW5nIFVURi0xNi5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5lbmNvZGVgXG5cdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuXHQgKiBAbmFtZSBkZWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgVW5pY29kZSBpbnB1dCBzdHJpbmcgKFVDUy0yKS5cblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgbmV3IGFycmF5IG9mIGNvZGUgcG9pbnRzLlxuXHQgKi9cblx0ZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGNvdW50ZXIgPSAwLFxuXHRcdCAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuXHRcdCAgICB2YWx1ZSxcblx0XHQgICAgZXh0cmE7XG5cdFx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdFx0Ly8gaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyXG5cdFx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdFx0aWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7IC8vIGxvdyBzdXJyb2dhdGVcblx0XHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHVubWF0Y2hlZCBzdXJyb2dhdGU7IG9ubHkgYXBwZW5kIHRoaXMgY29kZSB1bml0LCBpbiBjYXNlIHRoZSBuZXh0XG5cdFx0XHRcdFx0Ly8gY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBzdHJpbmcgYmFzZWQgb24gYW4gYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5kZWNvZGVgXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGVuY29kZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBjb2RlUG9pbnRzIFRoZSBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbmV3IFVuaWNvZGUgc3RyaW5nIChVQ1MtMikuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZW5jb2RlKGFycmF5KSB7XG5cdFx0cmV0dXJuIG1hcChhcnJheSwgZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHRcdGlmICh2YWx1ZSA+IDB4RkZGRikge1xuXHRcdFx0XHR2YWx1ZSAtPSAweDEwMDAwO1xuXHRcdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRcdFx0dmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgYmFzaWMgY29kZSBwb2ludCBpbnRvIGEgZGlnaXQvaW50ZWdlci5cblx0ICogQHNlZSBgZGlnaXRUb0Jhc2ljKClgXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlUG9pbnQgVGhlIGJhc2ljIG51bWVyaWMgY29kZSBwb2ludCB2YWx1ZS5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50IChmb3IgdXNlIGluXG5cdCAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaW4gdGhlIHJhbmdlIGAwYCB0byBgYmFzZSAtIDFgLCBvciBgYmFzZWAgaWZcblx0ICogdGhlIGNvZGUgcG9pbnQgZG9lcyBub3QgcmVwcmVzZW50IGEgdmFsdWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNpY1RvRGlnaXQoY29kZVBvaW50KSB7XG5cdFx0aWYgKGNvZGVQb2ludCAtIDQ4IDwgMTApIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSAyMjtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDY1IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA2NTtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDk3IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA5Nztcblx0XHR9XG5cdFx0cmV0dXJuIGJhc2U7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBkaWdpdC9pbnRlZ2VyIGludG8gYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAc2VlIGBiYXNpY1RvRGlnaXQoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRpZ2l0IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludC5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIGJhc2ljIGNvZGUgcG9pbnQgd2hvc2UgdmFsdWUgKHdoZW4gdXNlZCBmb3Jcblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpcyBgZGlnaXRgLCB3aGljaCBuZWVkcyB0byBiZSBpbiB0aGUgcmFuZ2Vcblx0ICogYDBgIHRvIGBiYXNlIC0gMWAuIElmIGBmbGFnYCBpcyBub24temVybywgdGhlIHVwcGVyY2FzZSBmb3JtIGlzXG5cdCAqIHVzZWQ7IGVsc2UsIHRoZSBsb3dlcmNhc2UgZm9ybSBpcyB1c2VkLiBUaGUgYmVoYXZpb3IgaXMgdW5kZWZpbmVkXG5cdCAqIGlmIGBmbGFnYCBpcyBub24temVybyBhbmQgYGRpZ2l0YCBoYXMgbm8gdXBwZXJjYXNlIGZvcm0uXG5cdCAqL1xuXHRmdW5jdGlvbiBkaWdpdFRvQmFzaWMoZGlnaXQsIGZsYWcpIHtcblx0XHQvLyAgMC4uMjUgbWFwIHRvIEFTQ0lJIGEuLnogb3IgQS4uWlxuXHRcdC8vIDI2Li4zNSBtYXAgdG8gQVNDSUkgMC4uOVxuXHRcdHJldHVybiBkaWdpdCArIDIyICsgNzUgKiAoZGlnaXQgPCAyNikgLSAoKGZsYWcgIT0gMCkgPDwgNSk7XG5cdH1cblxuXHQvKipcblx0ICogQmlhcyBhZGFwdGF0aW9uIGZ1bmN0aW9uIGFzIHBlciBzZWN0aW9uIDMuNCBvZiBSRkMgMzQ5Mi5cblx0ICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM0OTIjc2VjdGlvbi0zLjRcblx0ICogQHByaXZhdGVcblx0ICovXG5cdGZ1bmN0aW9uIGFkYXB0KGRlbHRhLCBudW1Qb2ludHMsIGZpcnN0VGltZSkge1xuXHRcdHZhciBrID0gMDtcblx0XHRkZWx0YSA9IGZpcnN0VGltZSA/IGZsb29yKGRlbHRhIC8gZGFtcCkgOiBkZWx0YSA+PiAxO1xuXHRcdGRlbHRhICs9IGZsb29yKGRlbHRhIC8gbnVtUG9pbnRzKTtcblx0XHRmb3IgKC8qIG5vIGluaXRpYWxpemF0aW9uICovOyBkZWx0YSA+IGJhc2VNaW51c1RNaW4gKiB0TWF4ID4+IDE7IGsgKz0gYmFzZSkge1xuXHRcdFx0ZGVsdGEgPSBmbG9vcihkZWx0YSAvIGJhc2VNaW51c1RNaW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gZmxvb3IoayArIChiYXNlTWludXNUTWluICsgMSkgKiBkZWx0YSAvIChkZWx0YSArIHNrZXcpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMgdG8gYSBzdHJpbmcgb2YgVW5pY29kZVxuXHQgKiBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcblx0XHQvLyBEb24ndCB1c2UgVUNTLTJcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuXHRcdCAgICBvdXQsXG5cdFx0ICAgIGkgPSAwLFxuXHRcdCAgICBuID0gaW5pdGlhbE4sXG5cdFx0ICAgIGJpYXMgPSBpbml0aWFsQmlhcyxcblx0XHQgICAgYmFzaWMsXG5cdFx0ICAgIGosXG5cdFx0ICAgIGluZGV4LFxuXHRcdCAgICBvbGRpLFxuXHRcdCAgICB3LFxuXHRcdCAgICBrLFxuXHRcdCAgICBkaWdpdCxcblx0XHQgICAgdCxcblx0XHQgICAgLyoqIENhY2hlZCBjYWxjdWxhdGlvbiByZXN1bHRzICovXG5cdFx0ICAgIGJhc2VNaW51c1Q7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzOiBsZXQgYGJhc2ljYCBiZSB0aGUgbnVtYmVyIG9mIGlucHV0IGNvZGVcblx0XHQvLyBwb2ludHMgYmVmb3JlIHRoZSBsYXN0IGRlbGltaXRlciwgb3IgYDBgIGlmIHRoZXJlIGlzIG5vbmUsIHRoZW4gY29weVxuXHRcdC8vIHRoZSBmaXJzdCBiYXNpYyBjb2RlIHBvaW50cyB0byB0aGUgb3V0cHV0LlxuXG5cdFx0YmFzaWMgPSBpbnB1dC5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xuXHRcdGlmIChiYXNpYyA8IDApIHtcblx0XHRcdGJhc2ljID0gMDtcblx0XHR9XG5cblx0XHRmb3IgKGogPSAwOyBqIDwgYmFzaWM7ICsraikge1xuXHRcdFx0Ly8gaWYgaXQncyBub3QgYSBiYXNpYyBjb2RlIHBvaW50XG5cdFx0XHRpZiAoaW5wdXQuY2hhckNvZGVBdChqKSA+PSAweDgwKSB7XG5cdFx0XHRcdGVycm9yKCdub3QtYmFzaWMnKTtcblx0XHRcdH1cblx0XHRcdG91dHB1dC5wdXNoKGlucHV0LmNoYXJDb2RlQXQoaikpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZGVjb2RpbmcgbG9vcDogc3RhcnQganVzdCBhZnRlciB0aGUgbGFzdCBkZWxpbWl0ZXIgaWYgYW55IGJhc2ljIGNvZGVcblx0XHQvLyBwb2ludHMgd2VyZSBjb3BpZWQ7IHN0YXJ0IGF0IHRoZSBiZWdpbm5pbmcgb3RoZXJ3aXNlLlxuXG5cdFx0Zm9yIChpbmRleCA9IGJhc2ljID4gMCA/IGJhc2ljICsgMSA6IDA7IGluZGV4IDwgaW5wdXRMZW5ndGg7IC8qIG5vIGZpbmFsIGV4cHJlc3Npb24gKi8pIHtcblxuXHRcdFx0Ly8gYGluZGV4YCBpcyB0aGUgaW5kZXggb2YgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGJlIGNvbnN1bWVkLlxuXHRcdFx0Ly8gRGVjb2RlIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIgaW50byBgZGVsdGFgLFxuXHRcdFx0Ly8gd2hpY2ggZ2V0cyBhZGRlZCB0byBgaWAuIFRoZSBvdmVyZmxvdyBjaGVja2luZyBpcyBlYXNpZXJcblx0XHRcdC8vIGlmIHdlIGluY3JlYXNlIGBpYCBhcyB3ZSBnbywgdGhlbiBzdWJ0cmFjdCBvZmYgaXRzIHN0YXJ0aW5nXG5cdFx0XHQvLyB2YWx1ZSBhdCB0aGUgZW5kIHRvIG9idGFpbiBgZGVsdGFgLlxuXHRcdFx0Zm9yIChvbGRpID0gaSwgdyA9IDEsIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXG5cdFx0XHRcdGlmIChpbmRleCA+PSBpbnB1dExlbmd0aCkge1xuXHRcdFx0XHRcdGVycm9yKCdpbnZhbGlkLWlucHV0Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkaWdpdCA9IGJhc2ljVG9EaWdpdChpbnB1dC5jaGFyQ29kZUF0KGluZGV4KyspKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPj0gYmFzZSB8fCBkaWdpdCA+IGZsb29yKChtYXhJbnQgLSBpKSAvIHcpKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpICs9IGRpZ2l0ICogdztcblx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cblx0XHRcdFx0aWYgKGRpZ2l0IDwgdCkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0XHRpZiAodyA+IGZsb29yKG1heEludCAvIGJhc2VNaW51c1QpKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3ICo9IGJhc2VNaW51c1Q7XG5cblx0XHRcdH1cblxuXHRcdFx0b3V0ID0gb3V0cHV0Lmxlbmd0aCArIDE7XG5cdFx0XHRiaWFzID0gYWRhcHQoaSAtIG9sZGksIG91dCwgb2xkaSA9PSAwKTtcblxuXHRcdFx0Ly8gYGlgIHdhcyBzdXBwb3NlZCB0byB3cmFwIGFyb3VuZCBmcm9tIGBvdXRgIHRvIGAwYCxcblx0XHRcdC8vIGluY3JlbWVudGluZyBgbmAgZWFjaCB0aW1lLCBzbyB3ZSdsbCBmaXggdGhhdCBub3c6XG5cdFx0XHRpZiAoZmxvb3IoaSAvIG91dCkgPiBtYXhJbnQgLSBuKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRuICs9IGZsb29yKGkgLyBvdXQpO1xuXHRcdFx0aSAlPSBvdXQ7XG5cblx0XHRcdC8vIEluc2VydCBgbmAgYXQgcG9zaXRpb24gYGlgIG9mIHRoZSBvdXRwdXRcblx0XHRcdG91dHB1dC5zcGxpY2UoaSsrLCAwLCBuKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB1Y3MyZW5jb2RlKG91dHB1dCk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzIChlLmcuIGEgZG9tYWluIG5hbWUgbGFiZWwpIHRvIGFcblx0ICogUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlc3VsdGluZyBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKi9cblx0ZnVuY3Rpb24gZW5jb2RlKGlucHV0KSB7XG5cdFx0dmFyIG4sXG5cdFx0ICAgIGRlbHRhLFxuXHRcdCAgICBoYW5kbGVkQ1BDb3VudCxcblx0XHQgICAgYmFzaWNMZW5ndGgsXG5cdFx0ICAgIGJpYXMsXG5cdFx0ICAgIGosXG5cdFx0ICAgIG0sXG5cdFx0ICAgIHEsXG5cdFx0ICAgIGssXG5cdFx0ICAgIHQsXG5cdFx0ICAgIGN1cnJlbnRWYWx1ZSxcblx0XHQgICAgb3V0cHV0ID0gW10sXG5cdFx0ICAgIC8qKiBgaW5wdXRMZW5ndGhgIHdpbGwgaG9sZCB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIGluIGBpbnB1dGAuICovXG5cdFx0ICAgIGlucHV0TGVuZ3RoLFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgaGFuZGxlZENQQ291bnRQbHVzT25lLFxuXHRcdCAgICBiYXNlTWludXNULFxuXHRcdCAgICBxTWludXNUO1xuXG5cdFx0Ly8gQ29udmVydCB0aGUgaW5wdXQgaW4gVUNTLTIgdG8gVW5pY29kZVxuXHRcdGlucHV0ID0gdWNzMmRlY29kZShpbnB1dCk7XG5cblx0XHQvLyBDYWNoZSB0aGUgbGVuZ3RoXG5cdFx0aW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cblx0XHQvLyBJbml0aWFsaXplIHRoZSBzdGF0ZVxuXHRcdG4gPSBpbml0aWFsTjtcblx0XHRkZWx0YSA9IDA7XG5cdFx0YmlhcyA9IGluaXRpYWxCaWFzO1xuXG5cdFx0Ly8gSGFuZGxlIHRoZSBiYXNpYyBjb2RlIHBvaW50c1xuXHRcdGZvciAoaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRjdXJyZW50VmFsdWUgPSBpbnB1dFtqXTtcblx0XHRcdGlmIChjdXJyZW50VmFsdWUgPCAweDgwKSB7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHN0cmluZ0Zyb21DaGFyQ29kZShjdXJyZW50VmFsdWUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRoYW5kbGVkQ1BDb3VudCA9IGJhc2ljTGVuZ3RoID0gb3V0cHV0Lmxlbmd0aDtcblxuXHRcdC8vIGBoYW5kbGVkQ1BDb3VudGAgaXMgdGhlIG51bWJlciBvZiBjb2RlIHBvaW50cyB0aGF0IGhhdmUgYmVlbiBoYW5kbGVkO1xuXHRcdC8vIGBiYXNpY0xlbmd0aGAgaXMgdGhlIG51bWJlciBvZiBiYXNpYyBjb2RlIHBvaW50cy5cblxuXHRcdC8vIEZpbmlzaCB0aGUgYmFzaWMgc3RyaW5nIC0gaWYgaXQgaXMgbm90IGVtcHR5IC0gd2l0aCBhIGRlbGltaXRlclxuXHRcdGlmIChiYXNpY0xlbmd0aCkge1xuXHRcdFx0b3V0cHV0LnB1c2goZGVsaW1pdGVyKTtcblx0XHR9XG5cblx0XHQvLyBNYWluIGVuY29kaW5nIGxvb3A6XG5cdFx0d2hpbGUgKGhhbmRsZWRDUENvdW50IDwgaW5wdXRMZW5ndGgpIHtcblxuXHRcdFx0Ly8gQWxsIG5vbi1iYXNpYyBjb2RlIHBvaW50cyA8IG4gaGF2ZSBiZWVuIGhhbmRsZWQgYWxyZWFkeS4gRmluZCB0aGUgbmV4dFxuXHRcdFx0Ly8gbGFyZ2VyIG9uZTpcblx0XHRcdGZvciAobSA9IG1heEludCwgaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID49IG4gJiYgY3VycmVudFZhbHVlIDwgbSkge1xuXHRcdFx0XHRcdG0gPSBjdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSW5jcmVhc2UgYGRlbHRhYCBlbm91Z2ggdG8gYWR2YW5jZSB0aGUgZGVjb2RlcidzIDxuLGk+IHN0YXRlIHRvIDxtLDA+LFxuXHRcdFx0Ly8gYnV0IGd1YXJkIGFnYWluc3Qgb3ZlcmZsb3dcblx0XHRcdGhhbmRsZWRDUENvdW50UGx1c09uZSA9IGhhbmRsZWRDUENvdW50ICsgMTtcblx0XHRcdGlmIChtIC0gbiA+IGZsb29yKChtYXhJbnQgLSBkZWx0YSkgLyBoYW5kbGVkQ1BDb3VudFBsdXNPbmUpKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWx0YSArPSAobSAtIG4pICogaGFuZGxlZENQQ291bnRQbHVzT25lO1xuXHRcdFx0biA9IG07XG5cblx0XHRcdGZvciAoaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPCBuICYmICsrZGVsdGEgPiBtYXhJbnQpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT0gbikge1xuXHRcdFx0XHRcdC8vIFJlcHJlc2VudCBkZWx0YSBhcyBhIGdlbmVyYWxpemVkIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyXG5cdFx0XHRcdFx0Zm9yIChxID0gZGVsdGEsIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXHRcdFx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cdFx0XHRcdFx0XHRpZiAocSA8IHQpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRxTWludXNUID0gcSAtIHQ7XG5cdFx0XHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdFx0XHRvdXRwdXQucHVzaChcblx0XHRcdFx0XHRcdFx0c3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyh0ICsgcU1pbnVzVCAlIGJhc2VNaW51c1QsIDApKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHEgPSBmbG9vcihxTWludXNUIC8gYmFzZU1pbnVzVCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyhxLCAwKSkpO1xuXHRcdFx0XHRcdGJpYXMgPSBhZGFwdChkZWx0YSwgaGFuZGxlZENQQ291bnRQbHVzT25lLCBoYW5kbGVkQ1BDb3VudCA9PSBiYXNpY0xlbmd0aCk7XG5cdFx0XHRcdFx0ZGVsdGEgPSAwO1xuXHRcdFx0XHRcdCsraGFuZGxlZENQQ291bnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0KytkZWx0YTtcblx0XHRcdCsrbjtcblxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3Ncblx0ICogdG8gVW5pY29kZS4gT25seSB0aGUgUHVueWNvZGVkIHBhcnRzIG9mIHRoZSBpbnB1dCB3aWxsIGJlIGNvbnZlcnRlZCwgaS5lLlxuXHQgKiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCBvbiBhIHN0cmluZyB0aGF0IGhhcyBhbHJlYWR5IGJlZW5cblx0ICogY29udmVydGVkIHRvIFVuaWNvZGUuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlZCBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvXG5cdCAqIGNvbnZlcnQgdG8gVW5pY29kZS5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIFVuaWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIFB1bnljb2RlXG5cdCAqIHN0cmluZy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvVW5pY29kZShpbnB1dCkge1xuXHRcdHJldHVybiBtYXBEb21haW4oaW5wdXQsIGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHJlZ2V4UHVueWNvZGUudGVzdChzdHJpbmcpXG5cdFx0XHRcdD8gZGVjb2RlKHN0cmluZy5zbGljZSg0KS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0XHQ6IHN0cmluZztcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFVuaWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogUHVueWNvZGUuIE9ubHkgdGhlIG5vbi1BU0NJSSBwYXJ0cyBvZiB0aGUgZG9tYWluIG5hbWUgd2lsbCBiZSBjb252ZXJ0ZWQsXG5cdCAqIGkuZS4gaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0J3MgYWxyZWFkeSBpblxuXHQgKiBBU0NJSS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcyB0byBjb252ZXJ0LCBhcyBhXG5cdCAqIFVuaWNvZGUgc3RyaW5nLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgUHVueWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIGRvbWFpbiBuYW1lIG9yXG5cdCAqIGVtYWlsIGFkZHJlc3MuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b0FTQ0lJKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhOb25BU0NJSS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyAneG4tLScgKyBlbmNvZGUoc3RyaW5nKVxuXHRcdFx0XHQ6IHN0cmluZztcblx0XHR9KTtcblx0fVxuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdC8qKiBEZWZpbmUgdGhlIHB1YmxpYyBBUEkgKi9cblx0cHVueWNvZGUgPSB7XG5cdFx0LyoqXG5cdFx0ICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IFB1bnljb2RlLmpzIHZlcnNpb24gbnVtYmVyLlxuXHRcdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdCAqL1xuXHRcdCd2ZXJzaW9uJzogJzEuNC4xJyxcblx0XHQvKipcblx0XHQgKiBBbiBvYmplY3Qgb2YgbWV0aG9kcyB0byBjb252ZXJ0IGZyb20gSmF2YVNjcmlwdCdzIGludGVybmFsIGNoYXJhY3RlclxuXHRcdCAqIHJlcHJlc2VudGF0aW9uIChVQ1MtMikgdG8gVW5pY29kZSBjb2RlIHBvaW50cywgYW5kIGJhY2suXG5cdFx0ICogQHNlZSA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmc+XG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgT2JqZWN0XG5cdFx0ICovXG5cdFx0J3VjczInOiB7XG5cdFx0XHQnZGVjb2RlJzogdWNzMmRlY29kZSxcblx0XHRcdCdlbmNvZGUnOiB1Y3MyZW5jb2RlXG5cdFx0fSxcblx0XHQnZGVjb2RlJzogZGVjb2RlLFxuXHRcdCdlbmNvZGUnOiBlbmNvZGUsXG5cdFx0J3RvQVNDSUknOiB0b0FTQ0lJLFxuXHRcdCd0b1VuaWNvZGUnOiB0b1VuaWNvZGVcblx0fTtcblxuXHQvKiogRXhwb3NlIGBwdW55Y29kZWAgKi9cblx0Ly8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3Igc3BlY2lmaWMgY29uZGl0aW9uIHBhdHRlcm5zXG5cdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0aWYgKFxuXHRcdHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmXG5cdFx0ZGVmaW5lLmFtZFxuXHQpIHtcblx0XHRkZWZpbmUoJ3B1bnljb2RlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gcHVueWNvZGU7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSkge1xuXHRcdGlmIChtb2R1bGUuZXhwb3J0cyA9PSBmcmVlRXhwb3J0cykge1xuXHRcdFx0Ly8gaW4gTm9kZS5qcywgaW8uanMsIG9yIFJpbmdvSlMgdjAuOC4wK1xuXHRcdFx0ZnJlZU1vZHVsZS5leHBvcnRzID0gcHVueWNvZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGluIE5hcndoYWwgb3IgUmluZ29KUyB2MC43LjAtXG5cdFx0XHRmb3IgKGtleSBpbiBwdW55Y29kZSkge1xuXHRcdFx0XHRwdW55Y29kZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChmcmVlRXhwb3J0c1trZXldID0gcHVueWNvZGVba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIGluIFJoaW5vIG9yIGEgd2ViIGJyb3dzZXJcblx0XHRyb290LnB1bnljb2RlID0gcHVueWNvZGU7XG5cdH1cblxufSh0aGlzKSk7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG1hcChvYmplY3RLZXlzKG9iaiksIGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBtYXAob2JqW2tdLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5mdW5jdGlvbiBtYXAgKHhzLCBmKSB7XG4gIGlmICh4cy5tYXApIHJldHVybiB4cy5tYXAoZik7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgIHJlcy5wdXNoKGYoeHNbaV0sIGkpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHJlcy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAyMDE0IFNpbW9uIEx5ZGVsbFxyXG4vLyBYMTEgKOKAnE1JVOKAnSkgTGljZW5zZWQuIChTZWUgTElDRU5TRS4pXHJcblxyXG52b2lkIChmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICBkZWZpbmUoZmFjdG9yeSlcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByb290LnJlc29sdmVVcmwgPSBmYWN0b3J5KClcclxuICB9XHJcbn0odGhpcywgZnVuY3Rpb24oKSB7XHJcblxyXG4gIGZ1bmN0aW9uIHJlc29sdmVVcmwoLyogLi4udXJscyAqLykge1xyXG4gICAgdmFyIG51bVVybHMgPSBhcmd1bWVudHMubGVuZ3RoXHJcblxyXG4gICAgaWYgKG51bVVybHMgPT09IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVzb2x2ZVVybCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQ7IGdvdCBub25lLlwiKVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBiYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJhc2VcIilcclxuICAgIGJhc2UuaHJlZiA9IGFyZ3VtZW50c1swXVxyXG5cclxuICAgIGlmIChudW1VcmxzID09PSAxKSB7XHJcbiAgICAgIHJldHVybiBiYXNlLmhyZWZcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXVxyXG4gICAgaGVhZC5pbnNlcnRCZWZvcmUoYmFzZSwgaGVhZC5maXJzdENoaWxkKVxyXG5cclxuICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcclxuICAgIHZhciByZXNvbHZlZFxyXG5cclxuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBudW1VcmxzOyBpbmRleCsrKSB7XHJcbiAgICAgIGEuaHJlZiA9IGFyZ3VtZW50c1tpbmRleF1cclxuICAgICAgcmVzb2x2ZWQgPSBhLmhyZWZcclxuICAgICAgYmFzZS5ocmVmID0gcmVzb2x2ZWRcclxuICAgIH1cclxuXHJcbiAgICBoZWFkLnJlbW92ZUNoaWxkKGJhc2UpXHJcblxyXG4gICAgcmV0dXJuIHJlc29sdmVkXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzb2x2ZVVybFxyXG5cclxufSkpO1xyXG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVueWNvZGUgPSByZXF1aXJlKCdwdW55Y29kZScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuZXhwb3J0cy5wYXJzZSA9IHVybFBhcnNlO1xuZXhwb3J0cy5yZXNvbHZlID0gdXJsUmVzb2x2ZTtcbmV4cG9ydHMucmVzb2x2ZU9iamVjdCA9IHVybFJlc29sdmVPYmplY3Q7XG5leHBvcnRzLmZvcm1hdCA9IHVybEZvcm1hdDtcblxuZXhwb3J0cy5VcmwgPSBVcmw7XG5cbmZ1bmN0aW9uIFVybCgpIHtcbiAgdGhpcy5wcm90b2NvbCA9IG51bGw7XG4gIHRoaXMuc2xhc2hlcyA9IG51bGw7XG4gIHRoaXMuYXV0aCA9IG51bGw7XG4gIHRoaXMuaG9zdCA9IG51bGw7XG4gIHRoaXMucG9ydCA9IG51bGw7XG4gIHRoaXMuaG9zdG5hbWUgPSBudWxsO1xuICB0aGlzLmhhc2ggPSBudWxsO1xuICB0aGlzLnNlYXJjaCA9IG51bGw7XG4gIHRoaXMucXVlcnkgPSBudWxsO1xuICB0aGlzLnBhdGhuYW1lID0gbnVsbDtcbiAgdGhpcy5wYXRoID0gbnVsbDtcbiAgdGhpcy5ocmVmID0gbnVsbDtcbn1cblxuLy8gUmVmZXJlbmNlOiBSRkMgMzk4NiwgUkZDIDE4MDgsIFJGQyAyMzk2XG5cbi8vIGRlZmluZSB0aGVzZSBoZXJlIHNvIGF0IGxlYXN0IHRoZXkgb25seSBoYXZlIHRvIGJlXG4vLyBjb21waWxlZCBvbmNlIG9uIHRoZSBmaXJzdCBtb2R1bGUgbG9hZC5cbnZhciBwcm90b2NvbFBhdHRlcm4gPSAvXihbYS16MC05ListXSs6KS9pLFxuICAgIHBvcnRQYXR0ZXJuID0gLzpbMC05XSokLyxcblxuICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgYSBzaW1wbGUgcGF0aCBVUkxcbiAgICBzaW1wbGVQYXRoUGF0dGVybiA9IC9eKFxcL1xcLz8oPyFcXC8pW15cXD9cXHNdKikoXFw/W15cXHNdKik/JC8sXG5cbiAgICAvLyBSRkMgMjM5NjogY2hhcmFjdGVycyByZXNlcnZlZCBmb3IgZGVsaW1pdGluZyBVUkxzLlxuICAgIC8vIFdlIGFjdHVhbGx5IGp1c3QgYXV0by1lc2NhcGUgdGhlc2UuXG4gICAgZGVsaW1zID0gWyc8JywgJz4nLCAnXCInLCAnYCcsICcgJywgJ1xccicsICdcXG4nLCAnXFx0J10sXG5cbiAgICAvLyBSRkMgMjM5NjogY2hhcmFjdGVycyBub3QgYWxsb3dlZCBmb3IgdmFyaW91cyByZWFzb25zLlxuICAgIHVud2lzZSA9IFsneycsICd9JywgJ3wnLCAnXFxcXCcsICdeJywgJ2AnXS5jb25jYXQoZGVsaW1zKSxcblxuICAgIC8vIEFsbG93ZWQgYnkgUkZDcywgYnV0IGNhdXNlIG9mIFhTUyBhdHRhY2tzLiAgQWx3YXlzIGVzY2FwZSB0aGVzZS5cbiAgICBhdXRvRXNjYXBlID0gWydcXCcnXS5jb25jYXQodW53aXNlKSxcbiAgICAvLyBDaGFyYWN0ZXJzIHRoYXQgYXJlIG5ldmVyIGV2ZXIgYWxsb3dlZCBpbiBhIGhvc3RuYW1lLlxuICAgIC8vIE5vdGUgdGhhdCBhbnkgaW52YWxpZCBjaGFycyBhcmUgYWxzbyBoYW5kbGVkLCBidXQgdGhlc2VcbiAgICAvLyBhcmUgdGhlIG9uZXMgdGhhdCBhcmUgKmV4cGVjdGVkKiB0byBiZSBzZWVuLCBzbyB3ZSBmYXN0LXBhdGhcbiAgICAvLyB0aGVtLlxuICAgIG5vbkhvc3RDaGFycyA9IFsnJScsICcvJywgJz8nLCAnOycsICcjJ10uY29uY2F0KGF1dG9Fc2NhcGUpLFxuICAgIGhvc3RFbmRpbmdDaGFycyA9IFsnLycsICc/JywgJyMnXSxcbiAgICBob3N0bmFtZU1heExlbiA9IDI1NSxcbiAgICBob3N0bmFtZVBhcnRQYXR0ZXJuID0gL15bK2EtejAtOUEtWl8tXXswLDYzfSQvLFxuICAgIGhvc3RuYW1lUGFydFN0YXJ0ID0gL14oWythLXowLTlBLVpfLV17MCw2M30pKC4qKSQvLFxuICAgIC8vIHByb3RvY29scyB0aGF0IGNhbiBhbGxvdyBcInVuc2FmZVwiIGFuZCBcInVud2lzZVwiIGNoYXJzLlxuICAgIHVuc2FmZVByb3RvY29sID0ge1xuICAgICAgJ2phdmFzY3JpcHQnOiB0cnVlLFxuICAgICAgJ2phdmFzY3JpcHQ6JzogdHJ1ZVxuICAgIH0sXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgbmV2ZXIgaGF2ZSBhIGhvc3RuYW1lLlxuICAgIGhvc3RsZXNzUHJvdG9jb2wgPSB7XG4gICAgICAnamF2YXNjcmlwdCc6IHRydWUsXG4gICAgICAnamF2YXNjcmlwdDonOiB0cnVlXG4gICAgfSxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBhbHdheXMgY29udGFpbiBhIC8vIGJpdC5cbiAgICBzbGFzaGVkUHJvdG9jb2wgPSB7XG4gICAgICAnaHR0cCc6IHRydWUsXG4gICAgICAnaHR0cHMnOiB0cnVlLFxuICAgICAgJ2Z0cCc6IHRydWUsXG4gICAgICAnZ29waGVyJzogdHJ1ZSxcbiAgICAgICdmaWxlJzogdHJ1ZSxcbiAgICAgICdodHRwOic6IHRydWUsXG4gICAgICAnaHR0cHM6JzogdHJ1ZSxcbiAgICAgICdmdHA6JzogdHJ1ZSxcbiAgICAgICdnb3BoZXI6JzogdHJ1ZSxcbiAgICAgICdmaWxlOic6IHRydWVcbiAgICB9LFxuICAgIHF1ZXJ5c3RyaW5nID0gcmVxdWlyZSgncXVlcnlzdHJpbmcnKTtcblxuZnVuY3Rpb24gdXJsUGFyc2UodXJsLCBwYXJzZVF1ZXJ5U3RyaW5nLCBzbGFzaGVzRGVub3RlSG9zdCkge1xuICBpZiAodXJsICYmIHV0aWwuaXNPYmplY3QodXJsKSAmJiB1cmwgaW5zdGFuY2VvZiBVcmwpIHJldHVybiB1cmw7XG5cbiAgdmFyIHUgPSBuZXcgVXJsO1xuICB1LnBhcnNlKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpO1xuICByZXR1cm4gdTtcbn1cblxuVXJsLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHVybCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGFyYW1ldGVyICd1cmwnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiB1cmwpO1xuICB9XG5cbiAgLy8gQ29weSBjaHJvbWUsIElFLCBvcGVyYSBiYWNrc2xhc2gtaGFuZGxpbmcgYmVoYXZpb3IuXG4gIC8vIEJhY2sgc2xhc2hlcyBiZWZvcmUgdGhlIHF1ZXJ5IHN0cmluZyBnZXQgY29udmVydGVkIHRvIGZvcndhcmQgc2xhc2hlc1xuICAvLyBTZWU6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yNTkxNlxuICB2YXIgcXVlcnlJbmRleCA9IHVybC5pbmRleE9mKCc/JyksXG4gICAgICBzcGxpdHRlciA9XG4gICAgICAgICAgKHF1ZXJ5SW5kZXggIT09IC0xICYmIHF1ZXJ5SW5kZXggPCB1cmwuaW5kZXhPZignIycpKSA/ICc/JyA6ICcjJyxcbiAgICAgIHVTcGxpdCA9IHVybC5zcGxpdChzcGxpdHRlciksXG4gICAgICBzbGFzaFJlZ2V4ID0gL1xcXFwvZztcbiAgdVNwbGl0WzBdID0gdVNwbGl0WzBdLnJlcGxhY2Uoc2xhc2hSZWdleCwgJy8nKTtcbiAgdXJsID0gdVNwbGl0LmpvaW4oc3BsaXR0ZXIpO1xuXG4gIHZhciByZXN0ID0gdXJsO1xuXG4gIC8vIHRyaW0gYmVmb3JlIHByb2NlZWRpbmcuXG4gIC8vIFRoaXMgaXMgdG8gc3VwcG9ydCBwYXJzZSBzdHVmZiBsaWtlIFwiICBodHRwOi8vZm9vLmNvbSAgXFxuXCJcbiAgcmVzdCA9IHJlc3QudHJpbSgpO1xuXG4gIGlmICghc2xhc2hlc0Rlbm90ZUhvc3QgJiYgdXJsLnNwbGl0KCcjJykubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gVHJ5IGZhc3QgcGF0aCByZWdleHBcbiAgICB2YXIgc2ltcGxlUGF0aCA9IHNpbXBsZVBhdGhQYXR0ZXJuLmV4ZWMocmVzdCk7XG4gICAgaWYgKHNpbXBsZVBhdGgpIHtcbiAgICAgIHRoaXMucGF0aCA9IHJlc3Q7XG4gICAgICB0aGlzLmhyZWYgPSByZXN0O1xuICAgICAgdGhpcy5wYXRobmFtZSA9IHNpbXBsZVBhdGhbMV07XG4gICAgICBpZiAoc2ltcGxlUGF0aFsyXSkge1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNpbXBsZVBhdGhbMl07XG4gICAgICAgIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5c3RyaW5nLnBhcnNlKHRoaXMuc2VhcmNoLnN1YnN0cigxKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMuc2VhcmNoLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gJyc7XG4gICAgICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm90byA9IHByb3RvY29sUGF0dGVybi5leGVjKHJlc3QpO1xuICBpZiAocHJvdG8pIHtcbiAgICBwcm90byA9IHByb3RvWzBdO1xuICAgIHZhciBsb3dlclByb3RvID0gcHJvdG8udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnByb3RvY29sID0gbG93ZXJQcm90bztcbiAgICByZXN0ID0gcmVzdC5zdWJzdHIocHJvdG8ubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIGZpZ3VyZSBvdXQgaWYgaXQncyBnb3QgYSBob3N0XG4gIC8vIHVzZXJAc2VydmVyIGlzICphbHdheXMqIGludGVycHJldGVkIGFzIGEgaG9zdG5hbWUsIGFuZCB1cmxcbiAgLy8gcmVzb2x1dGlvbiB3aWxsIHRyZWF0IC8vZm9vL2JhciBhcyBob3N0PWZvbyxwYXRoPWJhciBiZWNhdXNlIHRoYXQnc1xuICAvLyBob3cgdGhlIGJyb3dzZXIgcmVzb2x2ZXMgcmVsYXRpdmUgVVJMcy5cbiAgaWYgKHNsYXNoZXNEZW5vdGVIb3N0IHx8IHByb3RvIHx8IHJlc3QubWF0Y2goL15cXC9cXC9bXkBcXC9dK0BbXkBcXC9dKy8pKSB7XG4gICAgdmFyIHNsYXNoZXMgPSByZXN0LnN1YnN0cigwLCAyKSA9PT0gJy8vJztcbiAgICBpZiAoc2xhc2hlcyAmJiAhKHByb3RvICYmIGhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dKSkge1xuICAgICAgcmVzdCA9IHJlc3Quc3Vic3RyKDIpO1xuICAgICAgdGhpcy5zbGFzaGVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dICYmXG4gICAgICAoc2xhc2hlcyB8fCAocHJvdG8gJiYgIXNsYXNoZWRQcm90b2NvbFtwcm90b10pKSkge1xuXG4gICAgLy8gdGhlcmUncyBhIGhvc3RuYW1lLlxuICAgIC8vIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiAvLCA/LCA7LCBvciAjIGVuZHMgdGhlIGhvc3QuXG4gICAgLy9cbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBAIGluIHRoZSBob3N0bmFtZSwgdGhlbiBub24taG9zdCBjaGFycyAqYXJlKiBhbGxvd2VkXG4gICAgLy8gdG8gdGhlIGxlZnQgb2YgdGhlIGxhc3QgQCBzaWduLCB1bmxlc3Mgc29tZSBob3N0LWVuZGluZyBjaGFyYWN0ZXJcbiAgICAvLyBjb21lcyAqYmVmb3JlKiB0aGUgQC1zaWduLlxuICAgIC8vIFVSTHMgYXJlIG9ibm94aW91cy5cbiAgICAvL1xuICAgIC8vIGV4OlxuICAgIC8vIGh0dHA6Ly9hQGJAYy8gPT4gdXNlcjphQGIgaG9zdDpjXG4gICAgLy8gaHR0cDovL2FAYj9AYyA9PiB1c2VyOmEgaG9zdDpjIHBhdGg6Lz9AY1xuXG4gICAgLy8gdjAuMTIgVE9ETyhpc2FhY3MpOiBUaGlzIGlzIG5vdCBxdWl0ZSBob3cgQ2hyb21lIGRvZXMgdGhpbmdzLlxuICAgIC8vIFJldmlldyBvdXIgdGVzdCBjYXNlIGFnYWluc3QgYnJvd3NlcnMgbW9yZSBjb21wcmVoZW5zaXZlbHkuXG5cbiAgICAvLyBmaW5kIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiBhbnkgaG9zdEVuZGluZ0NoYXJzXG4gICAgdmFyIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvc3RFbmRpbmdDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhlYyA9IHJlc3QuaW5kZXhPZihob3N0RW5kaW5nQ2hhcnNbaV0pO1xuICAgICAgaWYgKGhlYyAhPT0gLTEgJiYgKGhvc3RFbmQgPT09IC0xIHx8IGhlYyA8IGhvc3RFbmQpKVxuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgIH1cblxuICAgIC8vIGF0IHRoaXMgcG9pbnQsIGVpdGhlciB3ZSBoYXZlIGFuIGV4cGxpY2l0IHBvaW50IHdoZXJlIHRoZVxuICAgIC8vIGF1dGggcG9ydGlvbiBjYW5ub3QgZ28gcGFzdCwgb3IgdGhlIGxhc3QgQCBjaGFyIGlzIHRoZSBkZWNpZGVyLlxuICAgIHZhciBhdXRoLCBhdFNpZ247XG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKSB7XG4gICAgICAvLyBhdFNpZ24gY2FuIGJlIGFueXdoZXJlLlxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhdFNpZ24gbXVzdCBiZSBpbiBhdXRoIHBvcnRpb24uXG4gICAgICAvLyBodHRwOi8vYUBiL2NAZCA9PiBob3N0OmIgYXV0aDphIHBhdGg6L2NAZFxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcsIGhvc3RFbmQpO1xuICAgIH1cblxuICAgIC8vIE5vdyB3ZSBoYXZlIGEgcG9ydGlvbiB3aGljaCBpcyBkZWZpbml0ZWx5IHRoZSBhdXRoLlxuICAgIC8vIFB1bGwgdGhhdCBvZmYuXG4gICAgaWYgKGF0U2lnbiAhPT0gLTEpIHtcbiAgICAgIGF1dGggPSByZXN0LnNsaWNlKDAsIGF0U2lnbik7XG4gICAgICByZXN0ID0gcmVzdC5zbGljZShhdFNpZ24gKyAxKTtcbiAgICAgIHRoaXMuYXV0aCA9IGRlY29kZVVSSUNvbXBvbmVudChhdXRoKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgaG9zdCBpcyB0aGUgcmVtYWluaW5nIHRvIHRoZSBsZWZ0IG9mIHRoZSBmaXJzdCBub24taG9zdCBjaGFyXG4gICAgaG9zdEVuZCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9uSG9zdENoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaGVjID0gcmVzdC5pbmRleE9mKG5vbkhvc3RDaGFyc1tpXSk7XG4gICAgICBpZiAoaGVjICE9PSAtMSAmJiAoaG9zdEVuZCA9PT0gLTEgfHwgaGVjIDwgaG9zdEVuZCkpXG4gICAgICAgIGhvc3RFbmQgPSBoZWM7XG4gICAgfVxuICAgIC8vIGlmIHdlIHN0aWxsIGhhdmUgbm90IGhpdCBpdCwgdGhlbiB0aGUgZW50aXJlIHRoaW5nIGlzIGEgaG9zdC5cbiAgICBpZiAoaG9zdEVuZCA9PT0gLTEpXG4gICAgICBob3N0RW5kID0gcmVzdC5sZW5ndGg7XG5cbiAgICB0aGlzLmhvc3QgPSByZXN0LnNsaWNlKDAsIGhvc3RFbmQpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKGhvc3RFbmQpO1xuXG4gICAgLy8gcHVsbCBvdXQgcG9ydC5cbiAgICB0aGlzLnBhcnNlSG9zdCgpO1xuXG4gICAgLy8gd2UndmUgaW5kaWNhdGVkIHRoYXQgdGhlcmUgaXMgYSBob3N0bmFtZSxcbiAgICAvLyBzbyBldmVuIGlmIGl0J3MgZW1wdHksIGl0IGhhcyB0byBiZSBwcmVzZW50LlxuICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lIHx8ICcnO1xuXG4gICAgLy8gaWYgaG9zdG5hbWUgYmVnaW5zIHdpdGggWyBhbmQgZW5kcyB3aXRoIF1cbiAgICAvLyBhc3N1bWUgdGhhdCBpdCdzIGFuIElQdjYgYWRkcmVzcy5cbiAgICB2YXIgaXB2Nkhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZVswXSA9PT0gJ1snICYmXG4gICAgICAgIHRoaXMuaG9zdG5hbWVbdGhpcy5ob3N0bmFtZS5sZW5ndGggLSAxXSA9PT0gJ10nO1xuXG4gICAgLy8gdmFsaWRhdGUgYSBsaXR0bGUuXG4gICAgaWYgKCFpcHY2SG9zdG5hbWUpIHtcbiAgICAgIHZhciBob3N0cGFydHMgPSB0aGlzLmhvc3RuYW1lLnNwbGl0KC9cXC4vKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaG9zdHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IGhvc3RwYXJ0c1tpXTtcbiAgICAgICAgaWYgKCFwYXJ0KSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFBhdHRlcm4pKSB7XG4gICAgICAgICAgdmFyIG5ld3BhcnQgPSAnJztcbiAgICAgICAgICBmb3IgKHZhciBqID0gMCwgayA9IHBhcnQubGVuZ3RoOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgICBpZiAocGFydC5jaGFyQ29kZUF0KGopID4gMTI3KSB7XG4gICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2Ugbm9uLUFTQ0lJIGNoYXIgd2l0aCBhIHRlbXBvcmFyeSBwbGFjZWhvbGRlclxuICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRoaXMgdG8gbWFrZSBzdXJlIHNpemUgb2YgaG9zdG5hbWUgaXMgbm90XG4gICAgICAgICAgICAgIC8vIGJyb2tlbiBieSByZXBsYWNpbmcgbm9uLUFTQ0lJIGJ5IG5vdGhpbmdcbiAgICAgICAgICAgICAgbmV3cGFydCArPSAneCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdwYXJ0ICs9IHBhcnRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHdlIHRlc3QgYWdhaW4gd2l0aCBBU0NJSSBjaGFyIG9ubHlcbiAgICAgICAgICBpZiAoIW5ld3BhcnQubWF0Y2goaG9zdG5hbWVQYXJ0UGF0dGVybikpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZFBhcnRzID0gaG9zdHBhcnRzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgdmFyIG5vdEhvc3QgPSBob3N0cGFydHMuc2xpY2UoaSArIDEpO1xuICAgICAgICAgICAgdmFyIGJpdCA9IHBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0U3RhcnQpO1xuICAgICAgICAgICAgaWYgKGJpdCkge1xuICAgICAgICAgICAgICB2YWxpZFBhcnRzLnB1c2goYml0WzFdKTtcbiAgICAgICAgICAgICAgbm90SG9zdC51bnNoaWZ0KGJpdFsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90SG9zdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmVzdCA9ICcvJyArIG5vdEhvc3Quam9pbignLicpICsgcmVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaG9zdG5hbWUgPSB2YWxpZFBhcnRzLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvc3RuYW1lLmxlbmd0aCA+IGhvc3RuYW1lTWF4TGVuKSB7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhvc3RuYW1lcyBhcmUgYWx3YXlzIGxvd2VyIGNhc2UuXG4gICAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG4gICAgICAvLyBJRE5BIFN1cHBvcnQ6IFJldHVybnMgYSBwdW55Y29kZWQgcmVwcmVzZW50YXRpb24gb2YgXCJkb21haW5cIi5cbiAgICAgIC8vIEl0IG9ubHkgY29udmVydHMgcGFydHMgb2YgdGhlIGRvbWFpbiBuYW1lIHRoYXRcbiAgICAgIC8vIGhhdmUgbm9uLUFTQ0lJIGNoYXJhY3RlcnMsIGkuZS4gaXQgZG9lc24ndCBtYXR0ZXIgaWZcbiAgICAgIC8vIHlvdSBjYWxsIGl0IHdpdGggYSBkb21haW4gdGhhdCBhbHJlYWR5IGlzIEFTQ0lJLW9ubHkuXG4gICAgICB0aGlzLmhvc3RuYW1lID0gcHVueWNvZGUudG9BU0NJSSh0aGlzLmhvc3RuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgcCA9IHRoaXMucG9ydCA/ICc6JyArIHRoaXMucG9ydCA6ICcnO1xuICAgIHZhciBoID0gdGhpcy5ob3N0bmFtZSB8fCAnJztcbiAgICB0aGlzLmhvc3QgPSBoICsgcDtcbiAgICB0aGlzLmhyZWYgKz0gdGhpcy5ob3N0O1xuXG4gICAgLy8gc3RyaXAgWyBhbmQgXSBmcm9tIHRoZSBob3N0bmFtZVxuICAgIC8vIHRoZSBob3N0IGZpZWxkIHN0aWxsIHJldGFpbnMgdGhlbSwgdGhvdWdoXG4gICAgaWYgKGlwdjZIb3N0bmFtZSkge1xuICAgICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUuc3Vic3RyKDEsIHRoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBpZiAocmVzdFswXSAhPT0gJy8nKSB7XG4gICAgICAgIHJlc3QgPSAnLycgKyByZXN0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG5vdyByZXN0IGlzIHNldCB0byB0aGUgcG9zdC1ob3N0IHN0dWZmLlxuICAvLyBjaG9wIG9mZiBhbnkgZGVsaW0gY2hhcnMuXG4gIGlmICghdW5zYWZlUHJvdG9jb2xbbG93ZXJQcm90b10pIHtcblxuICAgIC8vIEZpcnN0LCBtYWtlIDEwMCUgc3VyZSB0aGF0IGFueSBcImF1dG9Fc2NhcGVcIiBjaGFycyBnZXRcbiAgICAvLyBlc2NhcGVkLCBldmVuIGlmIGVuY29kZVVSSUNvbXBvbmVudCBkb2Vzbid0IHRoaW5rIHRoZXlcbiAgICAvLyBuZWVkIHRvIGJlLlxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXV0b0VzY2FwZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBhZSA9IGF1dG9Fc2NhcGVbaV07XG4gICAgICBpZiAocmVzdC5pbmRleE9mKGFlKSA9PT0gLTEpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgdmFyIGVzYyA9IGVuY29kZVVSSUNvbXBvbmVudChhZSk7XG4gICAgICBpZiAoZXNjID09PSBhZSkge1xuICAgICAgICBlc2MgPSBlc2NhcGUoYWUpO1xuICAgICAgfVxuICAgICAgcmVzdCA9IHJlc3Quc3BsaXQoYWUpLmpvaW4oZXNjKTtcbiAgICB9XG4gIH1cblxuXG4gIC8vIGNob3Agb2ZmIGZyb20gdGhlIHRhaWwgZmlyc3QuXG4gIHZhciBoYXNoID0gcmVzdC5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoICE9PSAtMSkge1xuICAgIC8vIGdvdCBhIGZyYWdtZW50IHN0cmluZy5cbiAgICB0aGlzLmhhc2ggPSByZXN0LnN1YnN0cihoYXNoKTtcbiAgICByZXN0ID0gcmVzdC5zbGljZSgwLCBoYXNoKTtcbiAgfVxuICB2YXIgcW0gPSByZXN0LmluZGV4T2YoJz8nKTtcbiAgaWYgKHFtICE9PSAtMSkge1xuICAgIHRoaXMuc2VhcmNoID0gcmVzdC5zdWJzdHIocW0pO1xuICAgIHRoaXMucXVlcnkgPSByZXN0LnN1YnN0cihxbSArIDEpO1xuICAgIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlzdHJpbmcucGFyc2UodGhpcy5xdWVyeSk7XG4gICAgfVxuICAgIHJlc3QgPSByZXN0LnNsaWNlKDAsIHFtKTtcbiAgfSBlbHNlIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgLy8gbm8gcXVlcnkgc3RyaW5nLCBidXQgcGFyc2VRdWVyeVN0cmluZyBzdGlsbCByZXF1ZXN0ZWRcbiAgICB0aGlzLnNlYXJjaCA9ICcnO1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgfVxuICBpZiAocmVzdCkgdGhpcy5wYXRobmFtZSA9IHJlc3Q7XG4gIGlmIChzbGFzaGVkUHJvdG9jb2xbbG93ZXJQcm90b10gJiZcbiAgICAgIHRoaXMuaG9zdG5hbWUgJiYgIXRoaXMucGF0aG5hbWUpIHtcbiAgICB0aGlzLnBhdGhuYW1lID0gJy8nO1xuICB9XG5cbiAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICBpZiAodGhpcy5wYXRobmFtZSB8fCB0aGlzLnNlYXJjaCkge1xuICAgIHZhciBwID0gdGhpcy5wYXRobmFtZSB8fCAnJztcbiAgICB2YXIgcyA9IHRoaXMuc2VhcmNoIHx8ICcnO1xuICAgIHRoaXMucGF0aCA9IHAgKyBzO1xuICB9XG5cbiAgLy8gZmluYWxseSwgcmVjb25zdHJ1Y3QgdGhlIGhyZWYgYmFzZWQgb24gd2hhdCBoYXMgYmVlbiB2YWxpZGF0ZWQuXG4gIHRoaXMuaHJlZiA9IHRoaXMuZm9ybWF0KCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZm9ybWF0IGEgcGFyc2VkIG9iamVjdCBpbnRvIGEgdXJsIHN0cmluZ1xuZnVuY3Rpb24gdXJsRm9ybWF0KG9iaikge1xuICAvLyBlbnN1cmUgaXQncyBhbiBvYmplY3QsIGFuZCBub3QgYSBzdHJpbmcgdXJsLlxuICAvLyBJZiBpdCdzIGFuIG9iaiwgdGhpcyBpcyBhIG5vLW9wLlxuICAvLyB0aGlzIHdheSwgeW91IGNhbiBjYWxsIHVybF9mb3JtYXQoKSBvbiBzdHJpbmdzXG4gIC8vIHRvIGNsZWFuIHVwIHBvdGVudGlhbGx5IHdvbmt5IHVybHMuXG4gIGlmICh1dGlsLmlzU3RyaW5nKG9iaikpIG9iaiA9IHVybFBhcnNlKG9iaik7XG4gIGlmICghKG9iaiBpbnN0YW5jZW9mIFVybCkpIHJldHVybiBVcmwucHJvdG90eXBlLmZvcm1hdC5jYWxsKG9iaik7XG4gIHJldHVybiBvYmouZm9ybWF0KCk7XG59XG5cblVybC5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhdXRoID0gdGhpcy5hdXRoIHx8ICcnO1xuICBpZiAoYXV0aCkge1xuICAgIGF1dGggPSBlbmNvZGVVUklDb21wb25lbnQoYXV0aCk7XG4gICAgYXV0aCA9IGF1dGgucmVwbGFjZSgvJTNBL2ksICc6Jyk7XG4gICAgYXV0aCArPSAnQCc7XG4gIH1cblxuICB2YXIgcHJvdG9jb2wgPSB0aGlzLnByb3RvY29sIHx8ICcnLFxuICAgICAgcGF0aG5hbWUgPSB0aGlzLnBhdGhuYW1lIHx8ICcnLFxuICAgICAgaGFzaCA9IHRoaXMuaGFzaCB8fCAnJyxcbiAgICAgIGhvc3QgPSBmYWxzZSxcbiAgICAgIHF1ZXJ5ID0gJyc7XG5cbiAgaWYgKHRoaXMuaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdGhpcy5ob3N0O1xuICB9IGVsc2UgaWYgKHRoaXMuaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSA9PT0gLTEgP1xuICAgICAgICB0aGlzLmhvc3RuYW1lIDpcbiAgICAgICAgJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyk7XG4gICAgaWYgKHRoaXMucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB0aGlzLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMucXVlcnkgJiZcbiAgICAgIHV0aWwuaXNPYmplY3QodGhpcy5xdWVyeSkgJiZcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMucXVlcnkpLmxlbmd0aCkge1xuICAgIHF1ZXJ5ID0gcXVlcnlzdHJpbmcuc3RyaW5naWZ5KHRoaXMucXVlcnkpO1xuICB9XG5cbiAgdmFyIHNlYXJjaCA9IHRoaXMuc2VhcmNoIHx8IChxdWVyeSAmJiAoJz8nICsgcXVlcnkpKSB8fCAnJztcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOic7XG5cbiAgLy8gb25seSB0aGUgc2xhc2hlZFByb3RvY29scyBnZXQgdGhlIC8vLiAgTm90IG1haWx0bzosIHhtcHA6LCBldGMuXG4gIC8vIHVubGVzcyB0aGV5IGhhZCB0aGVtIHRvIGJlZ2luIHdpdGguXG4gIGlmICh0aGlzLnNsYXNoZXMgfHxcbiAgICAgICghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29sW3Byb3RvY29sXSkgJiYgaG9zdCAhPT0gZmFsc2UpIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKTtcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWUuY2hhckF0KDApICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWU7XG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJyc7XG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaDtcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2guY2hhckF0KDApICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaDtcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KG1hdGNoKTtcbiAgfSk7XG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpO1xuXG4gIHJldHVybiBwcm90b2NvbCArIGhvc3QgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG59O1xuXG5mdW5jdGlvbiB1cmxSZXNvbHZlKHNvdXJjZSwgcmVsYXRpdmUpIHtcbiAgcmV0dXJuIHVybFBhcnNlKHNvdXJjZSwgZmFsc2UsIHRydWUpLnJlc29sdmUocmVsYXRpdmUpO1xufVxuXG5VcmwucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuICByZXR1cm4gdGhpcy5yZXNvbHZlT2JqZWN0KHVybFBhcnNlKHJlbGF0aXZlLCBmYWxzZSwgdHJ1ZSkpLmZvcm1hdCgpO1xufTtcblxuZnVuY3Rpb24gdXJsUmVzb2x2ZU9iamVjdChzb3VyY2UsIHJlbGF0aXZlKSB7XG4gIGlmICghc291cmNlKSByZXR1cm4gcmVsYXRpdmU7XG4gIHJldHVybiB1cmxQYXJzZShzb3VyY2UsIGZhbHNlLCB0cnVlKS5yZXNvbHZlT2JqZWN0KHJlbGF0aXZlKTtcbn1cblxuVXJsLnByb3RvdHlwZS5yZXNvbHZlT2JqZWN0ID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgaWYgKHV0aWwuaXNTdHJpbmcocmVsYXRpdmUpKSB7XG4gICAgdmFyIHJlbCA9IG5ldyBVcmwoKTtcbiAgICByZWwucGFyc2UocmVsYXRpdmUsIGZhbHNlLCB0cnVlKTtcbiAgICByZWxhdGl2ZSA9IHJlbDtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBuZXcgVXJsKCk7XG4gIHZhciB0a2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICBmb3IgKHZhciB0ayA9IDA7IHRrIDwgdGtleXMubGVuZ3RoOyB0aysrKSB7XG4gICAgdmFyIHRrZXkgPSB0a2V5c1t0a107XG4gICAgcmVzdWx0W3RrZXldID0gdGhpc1t0a2V5XTtcbiAgfVxuXG4gIC8vIGhhc2ggaXMgYWx3YXlzIG92ZXJyaWRkZW4sIG5vIG1hdHRlciB3aGF0LlxuICAvLyBldmVuIGhyZWY9XCJcIiB3aWxsIHJlbW92ZSBpdC5cbiAgcmVzdWx0Lmhhc2ggPSByZWxhdGl2ZS5oYXNoO1xuXG4gIC8vIGlmIHRoZSByZWxhdGl2ZSB1cmwgaXMgZW1wdHksIHRoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gZG8gaGVyZS5cbiAgaWYgKHJlbGF0aXZlLmhyZWYgPT09ICcnKSB7XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGhyZWZzIGxpa2UgLy9mb28vYmFyIGFsd2F5cyBjdXQgdG8gdGhlIHByb3RvY29sLlxuICBpZiAocmVsYXRpdmUuc2xhc2hlcyAmJiAhcmVsYXRpdmUucHJvdG9jb2wpIHtcbiAgICAvLyB0YWtlIGV2ZXJ5dGhpbmcgZXhjZXB0IHRoZSBwcm90b2NvbCBmcm9tIHJlbGF0aXZlXG4gICAgdmFyIHJrZXlzID0gT2JqZWN0LmtleXMocmVsYXRpdmUpO1xuICAgIGZvciAodmFyIHJrID0gMDsgcmsgPCBya2V5cy5sZW5ndGg7IHJrKyspIHtcbiAgICAgIHZhciBya2V5ID0gcmtleXNbcmtdO1xuICAgICAgaWYgKHJrZXkgIT09ICdwcm90b2NvbCcpXG4gICAgICAgIHJlc3VsdFtya2V5XSA9IHJlbGF0aXZlW3JrZXldO1xuICAgIH1cblxuICAgIC8vdXJsUGFyc2UgYXBwZW5kcyB0cmFpbGluZyAvIHRvIHVybHMgbGlrZSBodHRwOi8vd3d3LmV4YW1wbGUuY29tXG4gICAgaWYgKHNsYXNoZWRQcm90b2NvbFtyZXN1bHQucHJvdG9jb2xdICYmXG4gICAgICAgIHJlc3VsdC5ob3N0bmFtZSAmJiAhcmVzdWx0LnBhdGhuYW1lKSB7XG4gICAgICByZXN1bHQucGF0aCA9IHJlc3VsdC5wYXRobmFtZSA9ICcvJztcbiAgICB9XG5cbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKHJlbGF0aXZlLnByb3RvY29sICYmIHJlbGF0aXZlLnByb3RvY29sICE9PSByZXN1bHQucHJvdG9jb2wpIHtcbiAgICAvLyBpZiBpdCdzIGEga25vd24gdXJsIHByb3RvY29sLCB0aGVuIGNoYW5naW5nXG4gICAgLy8gdGhlIHByb3RvY29sIGRvZXMgd2VpcmQgdGhpbmdzXG4gICAgLy8gZmlyc3QsIGlmIGl0J3Mgbm90IGZpbGU6LCB0aGVuIHdlIE1VU1QgaGF2ZSBhIGhvc3QsXG4gICAgLy8gYW5kIGlmIHRoZXJlIHdhcyBhIHBhdGhcbiAgICAvLyB0byBiZWdpbiB3aXRoLCB0aGVuIHdlIE1VU1QgaGF2ZSBhIHBhdGguXG4gICAgLy8gaWYgaXQgaXMgZmlsZTosIHRoZW4gdGhlIGhvc3QgaXMgZHJvcHBlZCxcbiAgICAvLyBiZWNhdXNlIHRoYXQncyBrbm93biB0byBiZSBob3N0bGVzcy5cbiAgICAvLyBhbnl0aGluZyBlbHNlIGlzIGFzc3VtZWQgdG8gYmUgYWJzb2x1dGUuXG4gICAgaWYgKCFzbGFzaGVkUHJvdG9jb2xbcmVsYXRpdmUucHJvdG9jb2xdKSB7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJlbGF0aXZlKTtcbiAgICAgIGZvciAodmFyIHYgPSAwOyB2IDwga2V5cy5sZW5ndGg7IHYrKykge1xuICAgICAgICB2YXIgayA9IGtleXNbdl07XG4gICAgICAgIHJlc3VsdFtrXSA9IHJlbGF0aXZlW2tdO1xuICAgICAgfVxuICAgICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlc3VsdC5wcm90b2NvbCA9IHJlbGF0aXZlLnByb3RvY29sO1xuICAgIGlmICghcmVsYXRpdmUuaG9zdCAmJiAhaG9zdGxlc3NQcm90b2NvbFtyZWxhdGl2ZS5wcm90b2NvbF0pIHtcbiAgICAgIHZhciByZWxQYXRoID0gKHJlbGF0aXZlLnBhdGhuYW1lIHx8ICcnKS5zcGxpdCgnLycpO1xuICAgICAgd2hpbGUgKHJlbFBhdGgubGVuZ3RoICYmICEocmVsYXRpdmUuaG9zdCA9IHJlbFBhdGguc2hpZnQoKSkpO1xuICAgICAgaWYgKCFyZWxhdGl2ZS5ob3N0KSByZWxhdGl2ZS5ob3N0ID0gJyc7XG4gICAgICBpZiAoIXJlbGF0aXZlLmhvc3RuYW1lKSByZWxhdGl2ZS5ob3N0bmFtZSA9ICcnO1xuICAgICAgaWYgKHJlbFBhdGhbMF0gIT09ICcnKSByZWxQYXRoLnVuc2hpZnQoJycpO1xuICAgICAgaWYgKHJlbFBhdGgubGVuZ3RoIDwgMikgcmVsUGF0aC51bnNoaWZ0KCcnKTtcbiAgICAgIHJlc3VsdC5wYXRobmFtZSA9IHJlbFBhdGguam9pbignLycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucGF0aG5hbWUgPSByZWxhdGl2ZS5wYXRobmFtZTtcbiAgICB9XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICByZXN1bHQuaG9zdCA9IHJlbGF0aXZlLmhvc3QgfHwgJyc7XG4gICAgcmVzdWx0LmF1dGggPSByZWxhdGl2ZS5hdXRoO1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3Q7XG4gICAgcmVzdWx0LnBvcnQgPSByZWxhdGl2ZS5wb3J0O1xuICAgIC8vIHRvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gICAgaWYgKHJlc3VsdC5wYXRobmFtZSB8fCByZXN1bHQuc2VhcmNoKSB7XG4gICAgICB2YXIgcCA9IHJlc3VsdC5wYXRobmFtZSB8fCAnJztcbiAgICAgIHZhciBzID0gcmVzdWx0LnNlYXJjaCB8fCAnJztcbiAgICAgIHJlc3VsdC5wYXRoID0gcCArIHM7XG4gICAgfVxuICAgIHJlc3VsdC5zbGFzaGVzID0gcmVzdWx0LnNsYXNoZXMgfHwgcmVsYXRpdmUuc2xhc2hlcztcbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdmFyIGlzU291cmNlQWJzID0gKHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpLFxuICAgICAgaXNSZWxBYnMgPSAoXG4gICAgICAgICAgcmVsYXRpdmUuaG9zdCB8fFxuICAgICAgICAgIHJlbGF0aXZlLnBhdGhuYW1lICYmIHJlbGF0aXZlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nXG4gICAgICApLFxuICAgICAgbXVzdEVuZEFicyA9IChpc1JlbEFicyB8fCBpc1NvdXJjZUFicyB8fFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0Lmhvc3QgJiYgcmVsYXRpdmUucGF0aG5hbWUpKSxcbiAgICAgIHJlbW92ZUFsbERvdHMgPSBtdXN0RW5kQWJzLFxuICAgICAgc3JjUGF0aCA9IHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuc3BsaXQoJy8nKSB8fCBbXSxcbiAgICAgIHJlbFBhdGggPSByZWxhdGl2ZS5wYXRobmFtZSAmJiByZWxhdGl2ZS5wYXRobmFtZS5zcGxpdCgnLycpIHx8IFtdLFxuICAgICAgcHN5Y2hvdGljID0gcmVzdWx0LnByb3RvY29sICYmICFzbGFzaGVkUHJvdG9jb2xbcmVzdWx0LnByb3RvY29sXTtcblxuICAvLyBpZiB0aGUgdXJsIGlzIGEgbm9uLXNsYXNoZWQgdXJsLCB0aGVuIHJlbGF0aXZlXG4gIC8vIGxpbmtzIGxpa2UgLi4vLi4gc2hvdWxkIGJlIGFibGVcbiAgLy8gdG8gY3Jhd2wgdXAgdG8gdGhlIGhvc3RuYW1lLCBhcyB3ZWxsLiAgVGhpcyBpcyBzdHJhbmdlLlxuICAvLyByZXN1bHQucHJvdG9jb2wgaGFzIGFscmVhZHkgYmVlbiBzZXQgYnkgbm93LlxuICAvLyBMYXRlciBvbiwgcHV0IHRoZSBmaXJzdCBwYXRoIHBhcnQgaW50byB0aGUgaG9zdCBmaWVsZC5cbiAgaWYgKHBzeWNob3RpYykge1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9ICcnO1xuICAgIHJlc3VsdC5wb3J0ID0gbnVsbDtcbiAgICBpZiAocmVzdWx0Lmhvc3QpIHtcbiAgICAgIGlmIChzcmNQYXRoWzBdID09PSAnJykgc3JjUGF0aFswXSA9IHJlc3VsdC5ob3N0O1xuICAgICAgZWxzZSBzcmNQYXRoLnVuc2hpZnQocmVzdWx0Lmhvc3QpO1xuICAgIH1cbiAgICByZXN1bHQuaG9zdCA9ICcnO1xuICAgIGlmIChyZWxhdGl2ZS5wcm90b2NvbCkge1xuICAgICAgcmVsYXRpdmUuaG9zdG5hbWUgPSBudWxsO1xuICAgICAgcmVsYXRpdmUucG9ydCA9IG51bGw7XG4gICAgICBpZiAocmVsYXRpdmUuaG9zdCkge1xuICAgICAgICBpZiAocmVsUGF0aFswXSA9PT0gJycpIHJlbFBhdGhbMF0gPSByZWxhdGl2ZS5ob3N0O1xuICAgICAgICBlbHNlIHJlbFBhdGgudW5zaGlmdChyZWxhdGl2ZS5ob3N0KTtcbiAgICAgIH1cbiAgICAgIHJlbGF0aXZlLmhvc3QgPSBudWxsO1xuICAgIH1cbiAgICBtdXN0RW5kQWJzID0gbXVzdEVuZEFicyAmJiAocmVsUGF0aFswXSA9PT0gJycgfHwgc3JjUGF0aFswXSA9PT0gJycpO1xuICB9XG5cbiAgaWYgKGlzUmVsQWJzKSB7XG4gICAgLy8gaXQncyBhYnNvbHV0ZS5cbiAgICByZXN1bHQuaG9zdCA9IChyZWxhdGl2ZS5ob3N0IHx8IHJlbGF0aXZlLmhvc3QgPT09ICcnKSA/XG4gICAgICAgICAgICAgICAgICByZWxhdGl2ZS5ob3N0IDogcmVzdWx0Lmhvc3Q7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gKHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3RuYW1lID09PSAnJykgP1xuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlLmhvc3RuYW1lIDogcmVzdWx0Lmhvc3RuYW1lO1xuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgc3JjUGF0aCA9IHJlbFBhdGg7XG4gICAgLy8gZmFsbCB0aHJvdWdoIHRvIHRoZSBkb3QtaGFuZGxpbmcgYmVsb3cuXG4gIH0gZWxzZSBpZiAocmVsUGF0aC5sZW5ndGgpIHtcbiAgICAvLyBpdCdzIHJlbGF0aXZlXG4gICAgLy8gdGhyb3cgYXdheSB0aGUgZXhpc3RpbmcgZmlsZSwgYW5kIHRha2UgdGhlIG5ldyBwYXRoIGluc3RlYWQuXG4gICAgaWYgKCFzcmNQYXRoKSBzcmNQYXRoID0gW107XG4gICAgc3JjUGF0aC5wb3AoKTtcbiAgICBzcmNQYXRoID0gc3JjUGF0aC5jb25jYXQocmVsUGF0aCk7XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgfSBlbHNlIGlmICghdXRpbC5pc051bGxPclVuZGVmaW5lZChyZWxhdGl2ZS5zZWFyY2gpKSB7XG4gICAgLy8ganVzdCBwdWxsIG91dCB0aGUgc2VhcmNoLlxuICAgIC8vIGxpa2UgaHJlZj0nP2ZvbycuXG4gICAgLy8gUHV0IHRoaXMgYWZ0ZXIgdGhlIG90aGVyIHR3byBjYXNlcyBiZWNhdXNlIGl0IHNpbXBsaWZpZXMgdGhlIGJvb2xlYW5zXG4gICAgaWYgKHBzeWNob3RpYykge1xuICAgICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVzdWx0Lmhvc3QgPSBzcmNQYXRoLnNoaWZ0KCk7XG4gICAgICAvL29jY2F0aW9uYWx5IHRoZSBhdXRoIGNhbiBnZXQgc3R1Y2sgb25seSBpbiBob3N0XG4gICAgICAvL3RoaXMgZXNwZWNpYWxseSBoYXBwZW5zIGluIGNhc2VzIGxpa2VcbiAgICAgIC8vdXJsLnJlc29sdmVPYmplY3QoJ21haWx0bzpsb2NhbDFAZG9tYWluMScsICdsb2NhbDJAZG9tYWluMicpXG4gICAgICB2YXIgYXV0aEluSG9zdCA9IHJlc3VsdC5ob3N0ICYmIHJlc3VsdC5ob3N0LmluZGV4T2YoJ0AnKSA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG4gICAgICBpZiAoYXV0aEluSG9zdCkge1xuICAgICAgICByZXN1bHQuYXV0aCA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmICghdXRpbC5pc051bGwocmVzdWx0LnBhdGhuYW1lKSB8fCAhdXRpbC5pc051bGwocmVzdWx0LnNlYXJjaCkpIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gKHJlc3VsdC5wYXRobmFtZSA/IHJlc3VsdC5wYXRobmFtZSA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQuc2VhcmNoID8gcmVzdWx0LnNlYXJjaCA6ICcnKTtcbiAgICB9XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmICghc3JjUGF0aC5sZW5ndGgpIHtcbiAgICAvLyBubyBwYXRoIGF0IGFsbC4gIGVhc3kuXG4gICAgLy8gd2UndmUgYWxyZWFkeSBoYW5kbGVkIHRoZSBvdGhlciBzdHVmZiBhYm92ZS5cbiAgICByZXN1bHQucGF0aG5hbWUgPSBudWxsO1xuICAgIC8vdG8gc3VwcG9ydCBodHRwLnJlcXVlc3RcbiAgICBpZiAocmVzdWx0LnNlYXJjaCkge1xuICAgICAgcmVzdWx0LnBhdGggPSAnLycgKyByZXN1bHQuc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucGF0aCA9IG51bGw7XG4gICAgfVxuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBpZiBhIHVybCBFTkRzIGluIC4gb3IgLi4sIHRoZW4gaXQgbXVzdCBnZXQgYSB0cmFpbGluZyBzbGFzaC5cbiAgLy8gaG93ZXZlciwgaWYgaXQgZW5kcyBpbiBhbnl0aGluZyBlbHNlIG5vbi1zbGFzaHksXG4gIC8vIHRoZW4gaXQgbXVzdCBOT1QgZ2V0IGEgdHJhaWxpbmcgc2xhc2guXG4gIHZhciBsYXN0ID0gc3JjUGF0aC5zbGljZSgtMSlbMF07XG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoID0gKFxuICAgICAgKHJlc3VsdC5ob3N0IHx8IHJlbGF0aXZlLmhvc3QgfHwgc3JjUGF0aC5sZW5ndGggPiAxKSAmJlxuICAgICAgKGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nKSB8fCBsYXN0ID09PSAnJyk7XG5cbiAgLy8gc3RyaXAgc2luZ2xlIGRvdHMsIHJlc29sdmUgZG91YmxlIGRvdHMgdG8gcGFyZW50IGRpclxuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gc3JjUGF0aC5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGFzdCA9IHNyY1BhdGhbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKCFtdXN0RW5kQWJzICYmICFyZW1vdmVBbGxEb3RzKSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBzcmNQYXRoLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG11c3RFbmRBYnMgJiYgc3JjUGF0aFswXSAhPT0gJycgJiZcbiAgICAgICghc3JjUGF0aFswXSB8fCBzcmNQYXRoWzBdLmNoYXJBdCgwKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG4gIH1cblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiAoc3JjUGF0aC5qb2luKCcvJykuc3Vic3RyKC0xKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgucHVzaCgnJyk7XG4gIH1cblxuICB2YXIgaXNBYnNvbHV0ZSA9IHNyY1BhdGhbMF0gPT09ICcnIHx8XG4gICAgICAoc3JjUGF0aFswXSAmJiBzcmNQYXRoWzBdLmNoYXJBdCgwKSA9PT0gJy8nKTtcblxuICAvLyBwdXQgdGhlIGhvc3QgYmFja1xuICBpZiAocHN5Y2hvdGljKSB7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVzdWx0Lmhvc3QgPSBpc0Fic29sdXRlID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjUGF0aC5sZW5ndGggPyBzcmNQYXRoLnNoaWZ0KCkgOiAnJztcbiAgICAvL29jY2F0aW9uYWx5IHRoZSBhdXRoIGNhbiBnZXQgc3R1Y2sgb25seSBpbiBob3N0XG4gICAgLy90aGlzIGVzcGVjaWFsbHkgaGFwcGVucyBpbiBjYXNlcyBsaWtlXG4gICAgLy91cmwucmVzb2x2ZU9iamVjdCgnbWFpbHRvOmxvY2FsMUBkb21haW4xJywgJ2xvY2FsMkBkb21haW4yJylcbiAgICB2YXIgYXV0aEluSG9zdCA9IHJlc3VsdC5ob3N0ICYmIHJlc3VsdC5ob3N0LmluZGV4T2YoJ0AnKSA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lmhvc3Quc3BsaXQoJ0AnKSA6IGZhbHNlO1xuICAgIGlmIChhdXRoSW5Ib3N0KSB7XG4gICAgICByZXN1bHQuYXV0aCA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgIHJlc3VsdC5ob3N0ID0gcmVzdWx0Lmhvc3RuYW1lID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIG11c3RFbmRBYnMgPSBtdXN0RW5kQWJzIHx8IChyZXN1bHQuaG9zdCAmJiBzcmNQYXRoLmxlbmd0aCk7XG5cbiAgaWYgKG11c3RFbmRBYnMgJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBzcmNQYXRoLnVuc2hpZnQoJycpO1xuICB9XG5cbiAgaWYgKCFzcmNQYXRoLmxlbmd0aCkge1xuICAgIHJlc3VsdC5wYXRobmFtZSA9IG51bGw7XG4gICAgcmVzdWx0LnBhdGggPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdC5wYXRobmFtZSA9IHNyY1BhdGguam9pbignLycpO1xuICB9XG5cbiAgLy90byBzdXBwb3J0IHJlcXVlc3QuaHR0cFxuICBpZiAoIXV0aWwuaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIXV0aWwuaXNOdWxsKHJlc3VsdC5zZWFyY2gpKSB7XG4gICAgcmVzdWx0LnBhdGggPSAocmVzdWx0LnBhdGhuYW1lID8gcmVzdWx0LnBhdGhuYW1lIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyZXN1bHQuc2VhcmNoID8gcmVzdWx0LnNlYXJjaCA6ICcnKTtcbiAgfVxuICByZXN1bHQuYXV0aCA9IHJlbGF0aXZlLmF1dGggfHwgcmVzdWx0LmF1dGg7XG4gIHJlc3VsdC5zbGFzaGVzID0gcmVzdWx0LnNsYXNoZXMgfHwgcmVsYXRpdmUuc2xhc2hlcztcbiAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5VcmwucHJvdG90eXBlLnBhcnNlSG9zdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaG9zdCA9IHRoaXMuaG9zdDtcbiAgdmFyIHBvcnQgPSBwb3J0UGF0dGVybi5leGVjKGhvc3QpO1xuICBpZiAocG9ydCkge1xuICAgIHBvcnQgPSBwb3J0WzBdO1xuICAgIGlmIChwb3J0ICE9PSAnOicpIHtcbiAgICAgIHRoaXMucG9ydCA9IHBvcnQuc3Vic3RyKDEpO1xuICAgIH1cbiAgICBob3N0ID0gaG9zdC5zdWJzdHIoMCwgaG9zdC5sZW5ndGggLSBwb3J0Lmxlbmd0aCk7XG4gIH1cbiAgaWYgKGhvc3QpIHRoaXMuaG9zdG5hbWUgPSBob3N0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzU3RyaW5nOiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gdHlwZW9mKGFyZykgPT09ICdzdHJpbmcnO1xuICB9LFxuICBpc09iamVjdDogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZihhcmcpID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG4gIH0sXG4gIGlzTnVsbDogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbiAgfSxcbiAgaXNOdWxsT3JVbmRlZmluZWQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBhcmcgPT0gbnVsbDtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCAnIy9jb21tb24vYnJvd3Nlcic7XG5pbXBvcnQgeyBnZXRBY3RpdmVUYWIsIG1ha2VQYXVzZSwgc2VuZENtZCwgcmVxdWVzdCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IEJVSUxEX0lOX1NDUklQVF9TUkMsIFRJTUVPVVRfMjRIT1VSUywgVElNRU9VVF9NQVgsIElTX0RFViB9IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgKiBhcyB0bGQgZnJvbSAnIy9jb21tb24vdGxkJztcbmltcG9ydCAqIGFzIHN5bmMgZnJvbSAnLi9zeW5jJztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBnZXREYXRhLCBjaGVja1JlbW92ZSB9IGZyb20gJy4vdXRpbHMvZGInO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4vdXRpbHMvaW5pdCc7XG5pbXBvcnQgeyBnZXRPcHRpb24sIGhvb2tPcHRpb25zIH0gZnJvbSAnLi91dGlscy9vcHRpb25zJztcbmltcG9ydCB7IHBvcHVwVGFicyB9IGZyb20gJy4vdXRpbHMvcG9wdXAtdHJhY2tlcic7XG5pbXBvcnQgeyBnZXRJbmplY3RlZFNjcmlwdHMgfSBmcm9tICcuL3V0aWxzL3ByZWluamVjdCc7XG5pbXBvcnQgeyBTQ1JJUFRfVEVNUExBVEUsIHJlc2V0U2NyaXB0VGVtcGxhdGUgfSBmcm9tICcuL3V0aWxzL3RlbXBsYXRlLWhvb2snO1xuaW1wb3J0IHsgcmVzZXRWYWx1ZU9wZW5lciwgYWRkVmFsdWVPcGVuZXIgfSBmcm9tICcuL3V0aWxzL3ZhbHVlcyc7XG5pbXBvcnQgeyBjbGVhclJlcXVlc3RzQnlUYWJJZCB9IGZyb20gJy4vdXRpbHMvcmVxdWVzdHMnO1xuaW1wb3J0ICcuL3V0aWxzL2NsaXBib2FyZCc7XG5pbXBvcnQgJy4vdXRpbHMvaG90a2V5cyc7XG5pbXBvcnQgJy4vdXRpbHMvaWNvbic7XG5pbXBvcnQgJy4vdXRpbHMvbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgJy4vdXRpbHMvc2NyaXB0JztcbmltcG9ydCAnLi91dGlscy90YWJzJztcbmltcG9ydCAnLi91dGlscy90ZXN0ZXInO1xuaW1wb3J0ICcuL3V0aWxzL3VwZGF0ZSc7XG5cbmhvb2tPcHRpb25zKChjaGFuZ2VzKSA9PiB7XG4gIGlmICgnYXV0b1VwZGF0ZScgaW4gY2hhbmdlcykge1xuICAgIGF1dG9VcGRhdGUoKTtcbiAgfVxuICBpZiAoU0NSSVBUX1RFTVBMQVRFIGluIGNoYW5nZXMpIHtcbiAgICByZXNldFNjcmlwdFRlbXBsYXRlKGNoYW5nZXMpO1xuICB9XG4gIHNlbmRDbWQoJ1VwZGF0ZU9wdGlvbnMnLCBjaGFuZ2VzKTtcbn0pO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHsgc2NyaXB0czogVk1TY3JpcHRbXSwgY2FjaGU6IE9iamVjdCwgc3luYzogT2JqZWN0IH0+fSAqL1xuICBhc3luYyBHZXREYXRhKGlkcykge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKGlkcyk7XG4gICAgZGF0YS5zeW5jID0gc3luYy5nZXRTdGF0ZXMoKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn0gKi9cbiAgYXN5bmMgR2V0SW5qZWN0ZWQoeyB1cmwsIGZvcmNlQ29udGVudCB9LCBzcmMpIHtcbiAgICBjb25zdCB7IGZyYW1lSWQsIHRhYiB9ID0gc3JjO1xuICAgIGNvbnN0IHRhYklkID0gdGFiLmlkO1xuICAgIGlmICghdXJsKSB1cmwgPSBzcmMudXJsIHx8IHRhYi51cmw7XG4gICAgaWYgKCFmcmFtZUlkKSB7XG4gICAgICByZXNldFZhbHVlT3BlbmVyKHRhYklkKTtcbiAgICAgIGNsZWFyUmVxdWVzdHNCeVRhYklkKHRhYklkKTtcbiAgICB9XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0SW5qZWN0ZWRTY3JpcHRzKHVybCwgdGFiSWQsIGZyYW1lSWQsIGZvcmNlQ29udGVudCk7XG4gICAgY29uc3QgeyBmZWVkYmFjaywgaW5qZWN0LCB2YWxPcElkcyB9ID0gcmVzO1xuICAgIGluamVjdC5pc1BvcHVwU2hvd24gPSBwb3B1cFRhYnNbdGFiSWRdO1xuICAgIC8vIEluamVjdGluZyBrbm93biBjb250ZW50IHNjcmlwdHMgd2l0aG91dCB3YWl0aW5nIGZvciBJbmplY3Rpb25GZWVkYmFjayBtZXNzYWdlLlxuICAgIC8vIFJ1bm5pbmcgaW4gYSBzZXBhcmF0ZSB0YXNrIGJlY2F1c2UgaXQgbWF5IHRha2UgYSBsb25nIHRpbWUgdG8gc2VyaWFsaXplIGRhdGEuXG4gICAgaWYgKGZlZWRiYWNrLmxlbmd0aCkge1xuICAgICAgc2V0VGltZW91dChjb21tYW5kcy5JbmplY3Rpb25GZWVkYmFjaywgMCwgeyBmZWVkYmFjayB9LCBzcmMpO1xuICAgIH1cbiAgICBhZGRWYWx1ZU9wZW5lcih0YWJJZCwgZnJhbWVJZCwgdmFsT3BJZHMpO1xuICAgIHJldHVybiBpbmplY3Q7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59ICovXG4gIGFzeW5jIEdldFRhYkRvbWFpbigpIHtcbiAgICBjb25zdCB0YWIgPSBhd2FpdCBnZXRBY3RpdmVUYWIoKSB8fCB7fTtcbiAgICBjb25zdCB1cmwgPSB0YWIucGVuZGluZ1VybCB8fCB0YWIudXJsIHx8ICcnO1xuICAgIGNvbnN0IGhvc3QgPSB1cmwubWF0Y2goL15odHRwcz86XFwvXFwvKFteL10rKXwkLylbMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYixcbiAgICAgIGRvbWFpbjogaG9zdCAmJiB0bGQuZ2V0RG9tYWluKGhvc3QpIHx8IGhvc3QsXG4gICAgfTtcbiAgfSxcbiAgLyoqXG4gICAqIFRpbWVycyBpbiBjb250ZW50IHNjcmlwdHMgYXJlIHNoYXJlZCB3aXRoIHRoZSB3ZWIgcGFnZSBzbyBpdCBjYW4gY2xlYXIgdGhlbS5cbiAgICogYXdhaXQgc2VuZENtZCgnU2V0VGltZW91dCcsIDEwMCkgaW4gaW5qZWN0ZWQvY29udGVudFxuICAgKiBhd2FpdCBicmlkZ2Uuc2VuZCgnU2V0VGltZW91dCcsIDEwMCkgaW4gaW5qZWN0ZWQvd2ViXG4gICAqL1xuICBTZXRUaW1lb3V0KG1zKSB7XG4gICAgcmV0dXJuIG1zID4gMCAmJiBtYWtlUGF1c2UobXMpO1xuICB9LFxufSk7XG5cbi8vIGNvbW1hbmRzIHRvIHN5bmMgdW5jb25kaXRpb25hbGx5IHJlZ2FyZGxlc3Mgb2YgdGhlIHJldHVybmVkIHZhbHVlIGZyb20gdGhlIGhhbmRsZXJcbmNvbnN0IGNvbW1hbmRzVG9TeW5jID0gW1xuICAnTWFya1JlbW92ZWQnLFxuICAnTW92ZScsXG4gICdQYXJzZVNjcmlwdCcsXG4gICdSZW1vdmVTY3JpcHQnLFxuICAnVXBkYXRlU2NyaXB0SW5mbycsXG5dO1xuLy8gY29tbWFuZHMgdG8gc3luYyBvbmx5IGlmIHRoZSBoYW5kbGVyIHJldHVybnMgYSB0cnV0aHkgdmFsdWVcbmNvbnN0IGNvbW1hbmRzVG9TeW5jSWZUcnV0aHkgPSBbXG4gICdDaGVja1JlbW92ZScsXG4gICdDaGVja1VwZGF0ZScsXG4gICdDaGVja1VwZGF0ZUFsbCcsXG5dO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVDb21tYW5kTWVzc2FnZShyZXEsIHNyYykge1xuICBjb25zdCB7IGNtZCB9ID0gcmVxO1xuICBjb25zdCByZXMgPSBhd2FpdCBjb21tYW5kc1tjbWRdPy4ocmVxLmRhdGEsIHNyYyk7XG4gIGlmIChjb21tYW5kc1RvU3luYy5pbmNsdWRlcyhjbWQpXG4gIHx8IHJlcyAmJiBjb21tYW5kc1RvU3luY0lmVHJ1dGh5LmluY2x1ZGVzKGNtZCkpIHtcbiAgICBzeW5jLnN5bmMoKTtcbiAgfVxuICAvLyBgdW5kZWZpbmVkYCBpcyBub3QgdHJhbnNmZXJhYmxlLCBidXQgYG51bGxgIGlzXG4gIHJldHVybiByZXMgPz8gbnVsbDtcbn1cblxuZnVuY3Rpb24gYXV0b1VwZGF0ZSgpIHtcbiAgY29uc3QgaW50ZXJ2YWwgPSBJU19ERVYgPyAxMDAwIDogKCtnZXRPcHRpb24oJ2F1dG9VcGRhdGUnKSB8fCAwKSAqIFRJTUVPVVRfMjRIT1VSUztcbiAgaWYgKCFpbnRlcnZhbCkgcmV0dXJuO1xuICBsZXQgZWxhcHNlZCA9IERhdGUubm93KCkgLSBnZXRPcHRpb24oJ2xhc3RVcGRhdGUnKTtcbiAgaWYgKGVsYXBzZWQgPj0gaW50ZXJ2YWwpIHtcbiAgICBoYW5kbGVDb21tYW5kTWVzc2FnZSh7IGNtZDogJ0NoZWNrVXBkYXRlQWxsJyB9KTtcbiAgICBlbGFwc2VkID0gMDtcbiAgfVxuICBjbGVhclRpbWVvdXQoYXV0b1VwZGF0ZS50aW1lcik7XG4gIGF1dG9VcGRhdGUudGltZXIgPSBzZXRUaW1lb3V0KGF1dG9VcGRhdGUsIE1hdGgubWluKFRJTUVPVVRfTUFYLCBpbnRlcnZhbCAtIGVsYXBzZWQpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdEJ1aWxkaW4oKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVxdWVzdChCVUlMRF9JTl9TQ1JJUFRfU1JDLCB7XG4gICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgaGVhZGVyczogeyBBY2NlcHQ6ICd0ZXh0L3gtdXNlcnNjcmlwdC1tZXRhLCovKicgfSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgY29tbWFuZHMuUGFyc2VTY3JpcHQoe1xuICAgIHVybDogQlVJTERfSU5fU0NSSVBUX1NSQyxcbiAgICBjb2RlOiBkYXRhLFxuICAgIGN1c3RvbTogeyBidWlsZEluOiB0cnVlIH0sXG4gIH0pO1xuICBzeW5jLnN5bmMoKTtcblxuICBpZiAocmVzLndoZXJlLmlkICE9PSAxKSB7XG4gICAgdGhyb3cgYHdyb25nIGlkOiAke3Jlcy53aGVyZS5pZH1gO1xuICB9XG59XG5cbmluaXRpYWxpemUoKCkgPT4ge1xuICBnbG9iYWwuaGFuZGxlQ29tbWFuZE1lc3NhZ2UgPSBoYW5kbGVDb21tYW5kTWVzc2FnZTtcbiAgZ2xvYmFsLmRlZXBDb3B5ID0gZGVlcENvcHk7XG4gIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoXG4gICAgSVNfRklSRUZPWCAvLyBpbiBGRiBhIHJlamVjdGVkIFByb21pc2UgdmFsdWUgaXMgdHJhbnNmZXJyZWQgb25seSBpZiBpdCdzIGFuIEVycm9yIG9iamVjdFxuICAgICAgPyAoLi4uYXJncykgPT4gaGFuZGxlQ29tbWFuZE1lc3NhZ2UoLi4uYXJncykuY2F0Y2goZSA9PiAoXG4gICAgICAgIFByb21pc2UucmVqZWN0KGUgaW5zdGFuY2VvZiBFcnJvciA/IGUgOiBuZXcgRXJyb3IoZSkpXG4gICAgICApKSAvLyBEaWRuJ3QgdXNlIGB0aHJvd2AgdG8gYXZvaWQgaW50ZXJydXB0aW9uIGluIGRldnRvb2xzIHdpdGggcGF1c2Utb24tZXhjZXB0aW9uIGVuYWJsZWQuXG4gICAgICA6IGhhbmRsZUNvbW1hbmRNZXNzYWdlLFxuICApO1xuXG4gIC8vIGNoZWNrIGFuZCBpbnN0YWxsIHRoZSBidWlsZC1pbiBzY3JpcHRcbiAgLy8gaW5pdEJ1aWxkaW4oKTtcbiAgLy8gY29uc29sZS5pbmZvKCdpbml0QnVpbGRpbi4uLicpO1xuICBzZXRUaW1lb3V0KGF1dG9VcGRhdGUsIElTX0RFViA/IDEgOiAyZTQpO1xuICBzeW5jLmluaXRpYWxpemUoKTtcbiAgY2hlY2tSZW1vdmUoKTtcbiAgc2V0SW50ZXJ2YWwoY2hlY2tSZW1vdmUsIFRJTUVPVVRfMjRIT1VSUyk7XG4gIGNvbnN0IGFwaSA9IGdsb2JhbC5jaHJvbWUuZGVjbGFyYXRpdmVDb250ZW50O1xuICBpZiAoYXBpKSB7XG4gICAgLy8gVXNpbmcgZGVjbGFyYXRpdmVDb250ZW50IHRvIHJ1biBjb250ZW50IHNjcmlwdHMgZWFybGllciB0aGFuIGRvY3VtZW50X3N0YXJ0XG4gICAgYXBpLm9uUGFnZUNoYW5nZWQuZ2V0UnVsZXMoYXN5bmMgKFtydWxlXSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBydWxlPy5pZDtcbiAgICAgIGNvbnN0IG5ld0lkID0gcHJvY2Vzcy5lbnYuSU5JVF9GVU5DX05BTUU7XG4gICAgICBpZiAoaWQgPT09IG5ld0lkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpZCkge1xuICAgICAgICBhd2FpdCBicm93c2VyLmRlY2xhcmF0aXZlQ29udGVudC5vblBhZ2VDaGFuZ2VkLnJlbW92ZVJ1bGVzKFtpZF0pO1xuICAgICAgfVxuICAgICAgYXBpLm9uUGFnZUNoYW5nZWQuYWRkUnVsZXMoW3tcbiAgICAgICAgaWQ6IG5ld0lkLFxuICAgICAgICBjb25kaXRpb25zOiBbXG4gICAgICAgICAgbmV3IGFwaS5QYWdlU3RhdGVNYXRjaGVyKHtcbiAgICAgICAgICAgIHBhZ2VVcmw6IHsgdXJsQ29udGFpbnM6ICc6Ly8nIH0sIC8vIGVzc2VudGlhbGx5IGxpa2UgPGFsbF91cmxzPlxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgbmV3IGFwaS5SZXF1ZXN0Q29udGVudFNjcmlwdCh7XG4gICAgICAgICAgICBqczogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkuY29udGVudF9zY3JpcHRzWzBdLmpzLFxuICAgICAgICAgICAgLy8gTm90IHVzaW5nIGBhbGxGcmFtZXM6dHJ1ZWAgYXMgdGhlcmUncyBubyBpbXByb3ZlbWVudCBpbiBmcmFtZXNcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH1dKTtcbiAgICB9KTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJyMvY29tbW9uL2V2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFdmVudEVtaXR0ZXIoW1xuICAnc2NyaXB0RWRpdCcsXG4gICdzY3JpcHRDaGFuZ2VkJyxcbl0pO1xuIiwiaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuLi91dGlscy9tZXNzYWdlJztcbmltcG9ydCB7IGdldFNjcmlwdHMgfSBmcm9tICcuLi91dGlscy9kYic7XG5cbmV4cG9ydCBjb25zdCBzY3JpcHQgPSB7XG4gIC8qKlxuICAgKiBVcGRhdGUgYW4gZXhpc3Rpbmcgc2NyaXB0IGlkZW50aWZpZWQgYnkgdGhlIHByb3ZpZGVkIGlkXG4gICAqIEBwYXJhbSB7eyBpZCwgY29kZSwgbWVzc2FnZSwgaXNOZXcsIGNvbmZpZywgY3VzdG9tLCBwcm9wcywgdXBkYXRlIH19IGRhdGFcbiAgICogQHJldHVybiB7UHJvbWlzZTx7IGlzTmV3PywgdXBkYXRlLCB3aGVyZSB9Pn1cbiAgICovXG4gIHVwZGF0ZTogY29tbWFuZHMuUGFyc2VTY3JpcHQsXG4gIC8qKlxuICAgKiBMaXN0IGFsbCBhdmFpbGFibGUgc2NyaXB0cywgd2l0aG91dCBzY3JpcHQgY29kZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFZNU2NyaXB0W10+fVxuICAgKi9cbiAgbGlzdDogYXN5bmMgKCkgPT4gZ2V0U2NyaXB0cygpLFxuICAvKipcbiAgICogR2V0IHNjcmlwdCBjb2RlIG9mIGFuIGV4aXN0aW5nIHNjcmlwdFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWRcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgZ2V0OiBjb21tYW5kcy5HZXRTY3JpcHRDb2RlLFxuICAvKipcbiAgICogUmVtb3ZlIHNjcmlwdFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWRcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIHJlbW92ZTogaWQgPT4gY29tbWFuZHMuTWFya1JlbW92ZWQoeyBpZCwgcmVtb3ZlZDogdHJ1ZSB9KSxcbn07XG4iLCJpbXBvcnQge1xuICBkZWJvdW5jZSwgbm9ybWFsaXplS2V5cywgcmVxdWVzdCwgbm9vcCwgbWFrZVBhdXNlLCBlbnN1cmVBcnJheSwgc2VuZENtZCxcbn0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgVElNRU9VVF9IT1VSIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcbmltcG9ydCB7XG4gIGZvckVhY2hFbnRyeSwgb2JqZWN0U2V0LCBvYmplY3RQaWNrLFxufSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHtcbiAgZ2V0RXZlbnRFbWl0dGVyLCBnZXRPcHRpb24sIHNldE9wdGlvbiwgaG9va09wdGlvbnMsXG59IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7XG4gIHNvcnRTY3JpcHRzLFxuICB1cGRhdGVTY3JpcHRJbmZvLFxufSBmcm9tICcuLi91dGlscy9kYic7XG5pbXBvcnQgeyBzY3JpcHQgYXMgcGx1Z2luU2NyaXB0IH0gZnJvbSAnLi4vcGx1Z2luJztcblxuY29uc3Qgc2VydmljZU5hbWVzID0gW107XG5jb25zdCBzZXJ2aWNlQ2xhc3NlcyA9IFtdO1xuY29uc3Qgc2VydmljZXMgPSB7fTtcbmNvbnN0IGF1dG9TeW5jID0gZGVib3VuY2Uoc3luYywgVElNRU9VVF9IT1VSKTtcbmxldCB3b3JraW5nID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5sZXQgc3luY0NvbmZpZztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1GaWxlbmFtZSh7IG5hbWUsIHVyaSB9KSB7XG4gIC8vIFdoZW4gZ2V0IG9yIHJlbW92ZSwgY3VycmVudCBuYW1lIHNob3VsZCBiZSBwcmVmZXJlZFxuICBpZiAobmFtZSkgcmV0dXJuIG5hbWU7XG4gIC8vIG90aGVyd2lzZSB1cmkgZGVyaXZlZCBuYW1lIHNob3VsZCBiZSBwcmVmZXJlZFxuICAvLyB1cmkgaXMgYWxyZWFkeSBlbmNvZGVkIGJ5IGBlbmNvZGVGaWxlbmFtZWBcbiAgcmV0dXJuIGB2bUAyLSR7dXJpfWA7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTY3JpcHRGaWxlKG5hbWUpIHtcbiAgcmV0dXJuIC9edm0oPzpAXFxkKyk/LS8udGVzdChuYW1lKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkkobmFtZSkge1xuICBjb25zdCBpID0gbmFtZS5pbmRleE9mKCctJyk7XG4gIGNvbnN0IFssIHZlcnNpb25dID0gbmFtZS5zbGljZSgwLCBpKS5zcGxpdCgnQCcpO1xuICBpZiAodmVyc2lvbiA9PT0gJzInKSB7XG4gICAgLy8gdXJpIGlzIGVuY29kZWQgYnkgYGVuY29kZWRGaWxlbmFtZWAsIHNvIHdlIHNob3VsZCBub3QgZGVjb2RlIGl0IGhlcmVcbiAgICByZXR1cm4gbmFtZS5zbGljZShpICsgMSk7XG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUuc2xpY2UoMykpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbmFtZS5zbGljZSgzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0Q29uZmlnKCkge1xuICBmdW5jdGlvbiBnZXQoa2V5LCBkZWYpIHtcbiAgICBjb25zdCBrZXlzID0gbm9ybWFsaXplS2V5cyhrZXkpO1xuICAgIGtleXMudW5zaGlmdCgnc3luYycpO1xuICAgIHJldHVybiBnZXRPcHRpb24oa2V5cywgZGVmKTtcbiAgfVxuICBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IGtleXMgPSBub3JtYWxpemVLZXlzKGtleSk7XG4gICAga2V5cy51bnNoaWZ0KCdzeW5jJyk7XG4gICAgc2V0T3B0aW9uKGtleXMsIHZhbHVlKTtcbiAgfVxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGxldCBjb25maWcgPSBnZXRPcHRpb24oJ3N5bmMnKTtcbiAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNlcnZpY2VzKSB7XG4gICAgICBjb25maWcgPSB7XG4gICAgICAgIHNlcnZpY2VzOiB7fSxcbiAgICAgIH07XG4gICAgICBzZXQoW10sIGNvbmZpZyk7XG4gICAgfVxuICB9XG4gIGluaXQoKTtcbiAgcmV0dXJuIHsgZ2V0LCBzZXQgfTtcbn1cbmZ1bmN0aW9uIHNlcnZpY2VDb25maWcobmFtZSkge1xuICBmdW5jdGlvbiBnZXRLZXlzKGtleSkge1xuICAgIGNvbnN0IGtleXMgPSBub3JtYWxpemVLZXlzKGtleSk7XG4gICAga2V5cy51bnNoaWZ0KCdzZXJ2aWNlcycsIG5hbWUpO1xuICAgIHJldHVybiBrZXlzO1xuICB9XG4gIGZ1bmN0aW9uIGdldChrZXksIGRlZikge1xuICAgIHJldHVybiBzeW5jQ29uZmlnLmdldChnZXRLZXlzKGtleSksIGRlZik7XG4gIH1cbiAgZnVuY3Rpb24gc2V0KGtleSwgdmFsKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICBrZXk6OmZvckVhY2hFbnRyeSgoW2ssIHZdKSA9PiB7XG4gICAgICAgIHN5bmNDb25maWcuc2V0KGdldEtleXMoayksIHYpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN5bmNDb25maWcuc2V0KGdldEtleXMoa2V5KSwgdmFsKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgc3luY0NvbmZpZy5zZXQoZ2V0S2V5cygpLCB7fSk7XG4gIH1cbiAgcmV0dXJuIHsgZ2V0LCBzZXQsIGNsZWFyIH07XG59XG5mdW5jdGlvbiBzZXJ2aWNlU3RhdGUodmFsaWRTdGF0ZXMsIGluaXRpYWxTdGF0ZSwgb25DaGFuZ2UpIHtcbiAgbGV0IHN0YXRlID0gaW5pdGlhbFN0YXRlIHx8IHZhbGlkU3RhdGVzWzBdO1xuICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGZ1bmN0aW9uIHNldChuZXdTdGF0ZSkge1xuICAgIGlmICh2YWxpZFN0YXRlcy5pbmNsdWRlcyhuZXdTdGF0ZSkpIHtcbiAgICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gICAgICBpZiAob25DaGFuZ2UpIG9uQ2hhbmdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBzdGF0ZTonLCBuZXdTdGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBnZXQoKTtcbiAgfVxuICBmdW5jdGlvbiBpcyhzdGF0ZXMpIHtcbiAgICByZXR1cm4gZW5zdXJlQXJyYXkoc3RhdGVzKS5pbmNsdWRlcyhzdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHsgZ2V0LCBzZXQsIGlzIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xuICByZXR1cm4gc2VydmljZU5hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBzZXJ2aWNlc1tuYW1lXTtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogc2VydmljZS5uYW1lLFxuICAgICAgZGlzcGxheU5hbWU6IHNlcnZpY2UuZGlzcGxheU5hbWUsXG4gICAgICBhdXRoU3RhdGU6IHNlcnZpY2UuYXV0aFN0YXRlLmdldCgpLFxuICAgICAgc3luY1N0YXRlOiBzZXJ2aWNlLnN5bmNTdGF0ZS5nZXQoKSxcbiAgICAgIGxhc3RTeW5jOiBzZXJ2aWNlLmNvbmZpZy5nZXQoJ21ldGEnLCB7fSkubGFzdFN5bmMsXG4gICAgICBwcm9ncmVzczogc2VydmljZS5wcm9ncmVzcyxcbiAgICAgIHByb3BlcnRpZXM6IHNlcnZpY2UucHJvcGVydGllcyxcbiAgICAgIHVzZXJDb25maWc6IHNlcnZpY2UuZ2V0VXNlckNvbmZpZygpLFxuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JpcHREYXRhKHNjcmlwdCwgc3luY1ZlcnNpb24sIGV4dHJhKSB7XG4gIGxldCBkYXRhO1xuICBpZiAoc3luY1ZlcnNpb24gPT09IDIpIHtcbiAgICBkYXRhID0ge1xuICAgICAgdmVyc2lvbjogc3luY1ZlcnNpb24sXG4gICAgICBjdXN0b206IHNjcmlwdC5jdXN0b20sXG4gICAgICBjb25maWc6IHNjcmlwdC5jb25maWcsXG4gICAgICBwcm9wczogb2JqZWN0UGljayhzY3JpcHQucHJvcHMsIFsnbGFzdFVwZGF0ZWQnXSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChzeW5jVmVyc2lvbiA9PT0gMSkge1xuICAgIGRhdGEgPSB7XG4gICAgICB2ZXJzaW9uOiBzeW5jVmVyc2lvbixcbiAgICAgIG1vcmU6IHtcbiAgICAgICAgY3VzdG9tOiBzY3JpcHQuY3VzdG9tLFxuICAgICAgICBlbmFibGVkOiBzY3JpcHQuY29uZmlnLmVuYWJsZWQsXG4gICAgICAgIHVwZGF0ZTogc2NyaXB0LmNvbmZpZy5zaG91bGRVcGRhdGUsXG4gICAgICAgIGxhc3RVcGRhdGVkOiBzY3JpcHQucHJvcHMubGFzdFVwZGF0ZWQsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGF0YSwgZXh0cmEpO1xufVxuZnVuY3Rpb24gcGFyc2VTY3JpcHREYXRhKHJhdykge1xuICBjb25zdCBkYXRhID0ge307XG4gIHRyeSB7XG4gICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZShyYXcpO1xuICAgIGRhdGEuY29kZSA9IG9iai5jb2RlO1xuICAgIGlmIChvYmoudmVyc2lvbiA9PT0gMikge1xuICAgICAgZGF0YS5jb25maWcgPSBvYmouY29uZmlnO1xuICAgICAgZGF0YS5jdXN0b20gPSBvYmouY3VzdG9tO1xuICAgICAgZGF0YS5wcm9wcyA9IG9iai5wcm9wcztcbiAgICB9IGVsc2UgaWYgKG9iai52ZXJzaW9uID09PSAxKSB7XG4gICAgICBpZiAob2JqLm1vcmUpIHtcbiAgICAgICAgZGF0YS5jdXN0b20gPSBvYmoubW9yZS5jdXN0b207XG4gICAgICAgIGRhdGEuY29uZmlnID0gb2JqZWN0UHVyaWZ5KHtcbiAgICAgICAgICBlbmFibGVkOiBvYmoubW9yZS5lbmFibGVkLFxuICAgICAgICAgIHNob3VsZFVwZGF0ZTogb2JqLm1vcmUudXBkYXRlLFxuICAgICAgICB9KTtcbiAgICAgICAgZGF0YS5wcm9wcyA9IG9iamVjdFB1cmlmeSh7XG4gICAgICAgICAgbGFzdFVwZGF0ZWQ6IG9iai5tb3JlLmxhc3RVcGRhdGVkLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBkYXRhLmNvZGUgPSByYXc7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIG9iamVjdFB1cmlmeShvYmopIHtcbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBvYmouZm9yRWFjaChvYmplY3RQdXJpZnkpO1xuICB9IGVsc2UgaWYgKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIG9iajo6Zm9yRWFjaEVudHJ5KChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSBkZWxldGUgb2JqW2tleV07XG4gICAgICBlbHNlIG9iamVjdFB1cmlmeSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gc2VydmljZUZhY3RvcnkoYmFzZSkge1xuICBjb25zdCBTZXJ2aWNlID0gZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH07XG4gIFNlcnZpY2UucHJvdG90eXBlID0gYmFzZTtcbiAgU2VydmljZS5leHRlbmQgPSBleHRlbmRTZXJ2aWNlO1xuICByZXR1cm4gU2VydmljZTtcbn1cbmZ1bmN0aW9uIGV4dGVuZFNlcnZpY2Uob3B0aW9ucykge1xuICByZXR1cm4gc2VydmljZUZhY3RvcnkoT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHRoaXMucHJvdG90eXBlKSwgb3B0aW9ucykpO1xufVxuXG5jb25zdCBvblN0YXRlQ2hhbmdlID0gZGVib3VuY2UoKCkgPT4ge1xuICBzZW5kQ21kKCdVcGRhdGVTeW5jJywgZ2V0U3RhdGVzKCkpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBCYXNlU2VydmljZSA9IHNlcnZpY2VGYWN0b3J5KHtcbiAgbmFtZTogJ2Jhc2UnLFxuICBkaXNwbGF5TmFtZTogJ0Jhc2VTZXJ2aWNlJyxcbiAgZGVsYXlUaW1lOiAxMDAwLFxuICB1cmxQcmVmaXg6ICcnLFxuICBtZXRhRmlsZTogJ1Zpb2xlbnRtb25rZXknLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgYXV0aFR5cGU6ICdvYXV0aCcsXG4gIH0sXG4gIGdldFVzZXJDb25maWc6IG5vb3AsXG4gIHNldFVzZXJDb25maWc6IG5vb3AsXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5wcm9ncmVzcyA9IHtcbiAgICAgIGZpbmlzaGVkOiAwLFxuICAgICAgdG90YWw6IDAsXG4gICAgfTtcbiAgICB0aGlzLmNvbmZpZyA9IHNlcnZpY2VDb25maWcodGhpcy5uYW1lKTtcbiAgICB0aGlzLmF1dGhTdGF0ZSA9IHNlcnZpY2VTdGF0ZShbXG4gICAgICAnaWRsZScsXG4gICAgICAnbm8tYXV0aCcsXG4gICAgICAnaW5pdGlhbGl6aW5nJyxcbiAgICAgICdhdXRob3JpemluZycsIC8vIGluIGNhc2Ugc29tZSBzZXJ2aWNlcyByZXF1aXJlIGFzeW5jaHJvbm91cyByZXF1ZXN0cyB0byBnZXQgYWNjZXNzX3Rva2Vuc1xuICAgICAgJ2F1dGhvcml6ZWQnLFxuICAgICAgJ3VuYXV0aG9yaXplZCcsXG4gICAgICAnZXJyb3InLFxuICAgIF0sIG51bGwsIG9uU3RhdGVDaGFuZ2UpO1xuICAgIHRoaXMuc3luY1N0YXRlID0gc2VydmljZVN0YXRlKFtcbiAgICAgICdpZGxlJyxcbiAgICAgICdyZWFkeScsXG4gICAgICAnc3luY2luZycsXG4gICAgICAnZXJyb3InLFxuICAgIF0sIG51bGwsIG9uU3RhdGVDaGFuZ2UpO1xuICAgIHRoaXMubGFzdEZldGNoID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdGhpcy5zdGFydFN5bmMgPSB0aGlzLnN5bmNGYWN0b3J5KCk7XG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RXZlbnRFbWl0dGVyKCk7XG4gICAgWydvbicsICdvZmYnLCAnZmlyZSddXG4gICAgLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpc1trZXldID0gKC4uLmFyZ3MpID0+IHsgZXZlbnRzW2tleV0oLi4uYXJncyk7IH07XG4gICAgfSk7XG4gIH0sXG4gIGxvZyguLi5hcmdzKSB7XG4gICAgY29uc29sZS5sb2coLi4uYXJncyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICB9LFxuICBzeW5jRmFjdG9yeSgpIHtcbiAgICBsZXQgcHJvbWlzZTtcbiAgICBsZXQgZGVib3VuY2VkUmVzb2x2ZTtcbiAgICBjb25zdCBzaG91bGRTeW5jID0gKCkgPT4gdGhpcy5hdXRoU3RhdGUuaXMoJ2F1dGhvcml6ZWQnKSAmJiBnZXRDdXJyZW50KCkgPT09IHRoaXMubmFtZTtcbiAgICBjb25zdCBnZXRSZWFkeSA9ICgpID0+IHtcbiAgICAgIGlmICghc2hvdWxkU3luYygpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB0aGlzLmxvZygnUmVhZHkgdG8gc3luYzonLCB0aGlzLmRpc3BsYXlOYW1lKTtcbiAgICAgIHRoaXMuc3luY1N0YXRlLnNldCgncmVhZHknKTtcbiAgICAgIHdvcmtpbmcgPSB3b3JraW5nLnRoZW4oKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgZGVib3VuY2VkUmVzb2x2ZSA9IGRlYm91bmNlKHJlc29sdmUsIDEwICogMTAwMCk7XG4gICAgICAgIGRlYm91bmNlZFJlc29sdmUoKTtcbiAgICAgIH0pKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAoc2hvdWxkU3luYygpKSByZXR1cm4gdGhpcy5zeW5jKCk7XG4gICAgICAgIHRoaXMuc3luY1N0YXRlLnNldCgnaWRsZScpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIGRlYm91bmNlZFJlc29sdmUgPSBudWxsO1xuICAgICAgfSk7XG4gICAgICBwcm9taXNlID0gd29ya2luZztcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHN0YXJ0U3luYygpIHtcbiAgICAgIGlmICghcHJvbWlzZSkgZ2V0UmVhZHkoKTtcbiAgICAgIGlmIChkZWJvdW5jZWRSZXNvbHZlKSBkZWJvdW5jZWRSZXNvbHZlKCk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0U3luYztcbiAgfSxcbiAgcHJlcGFyZUhlYWRlcnMoKSB7XG4gICAgdGhpcy5oZWFkZXJzID0ge307XG4gIH0sXG4gIHByZXBhcmUoKSB7XG4gICAgdGhpcy5hdXRoU3RhdGUuc2V0KCdpbml0aWFsaXppbmcnKTtcbiAgICByZXR1cm4gKHRoaXMuaW5pdFRva2VuKCkgPyBQcm9taXNlLnJlc29sdmUodGhpcy51c2VyKCkpIDogUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgdHlwZTogJ25vLWF1dGgnLFxuICAgIH0pKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuYXV0aFN0YXRlLnNldCgnYXV0aG9yaXplZCcpO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIGlmIChbJ25vLWF1dGgnLCAndW5hdXRob3JpemVkJ10uaW5jbHVkZXMoZXJyPy50eXBlKSkge1xuICAgICAgICB0aGlzLmF1dGhTdGF0ZS5zZXQoZXJyLnR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB0aGlzLmF1dGhTdGF0ZS5zZXQoJ2Vycm9yJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnN5bmNTdGF0ZS5zZXQoJ2lkbGUnKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfSxcbiAgY2hlY2tTeW5jKCkge1xuICAgIHJldHVybiB0aGlzLnByZXBhcmUoKVxuICAgIC50aGVuKCgpID0+IHRoaXMuc3RhcnRTeW5jKCkpO1xuICB9LFxuICB1c2VyOiBub29wLFxuICBhY3F1aXJlTG9jazogbm9vcCxcbiAgcmVsZWFzZUxvY2s6IG5vb3AsXG4gIGhhbmRsZU1ldGFFcnJvcihlcnIpIHtcbiAgICB0aHJvdyBlcnI7XG4gIH0sXG4gIGdldE1ldGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHsgbmFtZTogdGhpcy5tZXRhRmlsZSB9KVxuICAgIC50aGVuKGRhdGEgPT4gSlNPTi5wYXJzZShkYXRhKSlcbiAgICAuY2F0Y2goZXJyID0+IHRoaXMuaGFuZGxlTWV0YUVycm9yKGVycikpXG4gICAgLnRoZW4oZGF0YSA9PiAoe1xuICAgICAgbmFtZTogdGhpcy5tZXRhRmlsZSxcbiAgICAgIGRhdGEsXG4gICAgfSkpO1xuICB9LFxuICBpbml0VG9rZW4oKSB7XG4gICAgdGhpcy5wcmVwYXJlSGVhZGVycygpO1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5jb25maWcuZ2V0KCd0b2tlbicpO1xuICAgIHRoaXMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6IG51bGw7XG4gICAgcmV0dXJuICEhdG9rZW47XG4gIH0sXG4gIGxvYWREYXRhKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHByb2dyZXNzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgZGVsYXkgPSB0aGlzLmRlbGF5VGltZSB9ID0gb3B0aW9ucztcbiAgICBsZXQgbGFzdEZldGNoID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBsYXN0RmV0Y2ggPSB0aGlzLmxhc3RGZXRjaFxuICAgICAgLnRoZW4odHMgPT4gbWFrZVBhdXNlKGRlbGF5IC0gKERhdGUubm93KCkgLSB0cykpKVxuICAgICAgLnRoZW4oKCkgPT4gRGF0ZS5ub3coKSk7XG4gICAgICB0aGlzLmxhc3RGZXRjaCA9IGxhc3RGZXRjaDtcbiAgICB9XG4gICAgcHJvZ3Jlc3MudG90YWwgKz0gMTtcbiAgICBvblN0YXRlQ2hhbmdlKCk7XG4gICAgcmV0dXJuIGxhc3RGZXRjaC50aGVuKCgpID0+IHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaGVhZGVycywgb3B0aW9ucy5oZWFkZXJzKTtcbiAgICAgIGxldCB7IHVybCB9ID0gb3B0aW9ucztcbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSB1cmwgPSAob3B0aW9ucy5wcmVmaXggPz8gdGhpcy51cmxQcmVmaXgpICsgdXJsO1xuICAgICAgcmV0dXJuIHJlcXVlc3QodXJsLCBvcHRpb25zKTtcbiAgICB9KVxuICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gKHsgZGF0YSB9KSwgZXJyb3IgPT4gKHsgZXJyb3IgfSkpXG4gICAgLnRoZW4oKHsgZGF0YSwgZXJyb3IgfSkgPT4ge1xuICAgICAgcHJvZ3Jlc3MuZmluaXNoZWQgKz0gMTtcbiAgICAgIG9uU3RhdGVDaGFuZ2UoKTtcbiAgICAgIGlmIChlcnJvcikgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9LFxuICBnZXRMb2NhbERhdGEoKSB7XG4gICAgcmV0dXJuIHBsdWdpblNjcmlwdC5saXN0KCk7XG4gIH0sXG4gIGdldFN5bmNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmdldE1ldGEoKVxuICAgIC50aGVuKHJlbW90ZU1ldGEgPT4gUHJvbWlzZS5hbGwoW1xuICAgICAgcmVtb3RlTWV0YSxcbiAgICAgIHRoaXMubGlzdCgpLFxuICAgICAgdGhpcy5nZXRMb2NhbERhdGEoKSxcbiAgICBdKSk7XG4gIH0sXG4gIHN5bmMoKSB7XG4gICAgdGhpcy5wcm9ncmVzcyA9IHtcbiAgICAgIGZpbmlzaGVkOiAwLFxuICAgICAgdG90YWw6IDAsXG4gICAgfTtcbiAgICB0aGlzLnN5bmNTdGF0ZS5zZXQoJ3N5bmNpbmcnKTtcbiAgICAvLyBBdm9pZCBzaW11bHRhbmVvdXMgcmVxdWVzdHNcbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlKClcbiAgICAudGhlbigoKSA9PiB0aGlzLmdldFN5bmNEYXRhKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBQcm9taXNlLnJlc29sdmUodGhpcy5hY3F1aXJlTG9jaygpKS50aGVuKCgpID0+IGRhdGEpKVxuICAgIC50aGVuKChbcmVtb3RlTWV0YSwgcmVtb3RlRGF0YSwgbG9jYWxEYXRhXSkgPT4ge1xuICAgICAgY29uc3QgcmVtb3RlTWV0YURhdGEgPSByZW1vdGVNZXRhLmRhdGEgfHwge307XG4gICAgICBjb25zdCByZW1vdGVNZXRhSW5mbyA9IHJlbW90ZU1ldGFEYXRhLmluZm8gfHwge307XG4gICAgICBjb25zdCByZW1vdGVUaW1lc3RhbXAgPSByZW1vdGVNZXRhRGF0YS50aW1lc3RhbXAgfHwgMDtcbiAgICAgIGxldCByZW1vdGVDaGFuZ2VkID0gIXJlbW90ZVRpbWVzdGFtcFxuICAgICAgICB8fCBPYmplY3Qua2V5cyhyZW1vdGVNZXRhSW5mbykubGVuZ3RoICE9PSByZW1vdGVEYXRhLmxlbmd0aDtcbiAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICBjb25zdCBnbG9iYWxMYXN0TW9kaWZpZWQgPSBnZXRPcHRpb24oJ2xhc3RNb2RpZmllZCcpO1xuICAgICAgY29uc3QgcmVtb3RlSXRlbU1hcCA9IHt9O1xuICAgICAgY29uc3QgbG9jYWxNZXRhID0gdGhpcy5jb25maWcuZ2V0KCdtZXRhJywge30pO1xuICAgICAgY29uc3QgZmlyc3RTeW5jID0gIWxvY2FsTWV0YS50aW1lc3RhbXA7XG4gICAgICBjb25zdCBvdXRkYXRlZCA9IGZpcnN0U3luYyB8fCByZW1vdGVUaW1lc3RhbXAgPiBsb2NhbE1ldGEudGltZXN0YW1wO1xuICAgICAgdGhpcy5sb2coJ0ZpcnN0IHN5bmM6JywgZmlyc3RTeW5jKTtcbiAgICAgIHRoaXMubG9nKCdPdXRkYXRlZDonLCBvdXRkYXRlZCwgJygnLCAnbG9jYWw6JywgbG9jYWxNZXRhLnRpbWVzdGFtcCwgJ3JlbW90ZTonLCByZW1vdGVUaW1lc3RhbXAsICcpJyk7XG4gICAgICBjb25zdCBwdXRMb2NhbCA9IFtdO1xuICAgICAgY29uc3QgcHV0UmVtb3RlID0gW107XG4gICAgICBjb25zdCBkZWxSZW1vdGUgPSBbXTtcbiAgICAgIGNvbnN0IGRlbExvY2FsID0gW107XG4gICAgICBjb25zdCB1cGRhdGVMb2NhbCA9IFtdO1xuICAgICAgcmVtb3RlTWV0YURhdGEuaW5mbyA9IHJlbW90ZURhdGEucmVkdWNlKChpbmZvLCBpdGVtKSA9PiB7XG4gICAgICAgIHJlbW90ZUl0ZW1NYXBbaXRlbS51cmldID0gaXRlbTtcbiAgICAgICAgbGV0IGl0ZW1JbmZvID0gcmVtb3RlTWV0YUluZm9baXRlbS51cmldO1xuICAgICAgICBpZiAoIWl0ZW1JbmZvKSB7XG4gICAgICAgICAgaXRlbUluZm8gPSB7fTtcbiAgICAgICAgICByZW1vdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvW2l0ZW0udXJpXSA9IGl0ZW1JbmZvO1xuICAgICAgICBpZiAoIWl0ZW1JbmZvLm1vZGlmaWVkKSB7XG4gICAgICAgICAgaXRlbUluZm8ubW9kaWZpZWQgPSBub3c7XG4gICAgICAgICAgcmVtb3RlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICB9LCB7fSk7XG4gICAgICBsb2NhbERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB7IHByb3BzOiB7IHVyaSwgcG9zaXRpb24sIGxhc3RNb2RpZmllZCB9IH0gPSBpdGVtO1xuICAgICAgICBjb25zdCByZW1vdGVJbmZvID0gcmVtb3RlTWV0YURhdGEuaW5mb1t1cmldO1xuICAgICAgICBjb25zdCByZW1vdGVJdGVtID0gcmVtb3RlSXRlbU1hcFt1cmldO1xuICAgICAgICBpZiAocmVtb3RlSW5mbyAmJiByZW1vdGVJdGVtKSB7XG4gICAgICAgICAgaWYgKGZpcnN0U3luYyB8fCAhbGFzdE1vZGlmaWVkIHx8IHJlbW90ZUluZm8ubW9kaWZpZWQgPiBsYXN0TW9kaWZpZWQpIHtcbiAgICAgICAgICAgIHB1dExvY2FsLnB1c2goeyBsb2NhbDogaXRlbSwgcmVtb3RlOiByZW1vdGVJdGVtLCBpbmZvOiByZW1vdGVJbmZvIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocmVtb3RlSW5mby5tb2RpZmllZCA8IGxhc3RNb2RpZmllZCkge1xuICAgICAgICAgICAgICBwdXRSZW1vdGUucHVzaCh7IGxvY2FsOiBpdGVtLCByZW1vdGU6IHJlbW90ZUl0ZW0gfSk7XG4gICAgICAgICAgICAgIHJlbW90ZUluZm8ubW9kaWZpZWQgPSBsYXN0TW9kaWZpZWQ7XG4gICAgICAgICAgICAgIHJlbW90ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlbW90ZUluZm8ucG9zaXRpb24gIT09IHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgIGlmIChyZW1vdGVJbmZvLnBvc2l0aW9uICYmIGdsb2JhbExhc3RNb2RpZmllZCA8PSByZW1vdGVUaW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMb2NhbC5wdXNoKHsgbG9jYWw6IGl0ZW0sIHJlbW90ZTogcmVtb3RlSXRlbSwgaW5mbzogcmVtb3RlSW5mbyB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdGVJbmZvLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgICAgICAgICAgcmVtb3RlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIHJlbW90ZUl0ZW1NYXBbdXJpXTtcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdFN5bmMgfHwgIW91dGRhdGVkIHx8IGxhc3RNb2RpZmllZCA+IHJlbW90ZVRpbWVzdGFtcCkge1xuICAgICAgICAgIHB1dFJlbW90ZS5wdXNoKHsgbG9jYWw6IGl0ZW0gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsTG9jYWwucHVzaCh7IGxvY2FsOiBpdGVtIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlbW90ZUl0ZW1NYXA6OmZvckVhY2hFbnRyeSgoW3VyaSwgaXRlbV0pID0+IHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHJlbW90ZU1ldGFEYXRhLmluZm9bdXJpXTtcbiAgICAgICAgaWYgKG91dGRhdGVkKSB7XG4gICAgICAgICAgcHV0TG9jYWwucHVzaCh7IHJlbW90ZTogaXRlbSwgaW5mbyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxSZW1vdGUucHVzaCh7IHJlbW90ZTogaXRlbSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBwcm9taXNlUXVldWUgPSBbXG4gICAgICAgIC4uLnB1dExvY2FsLm1hcCgoeyByZW1vdGUsIGluZm8gfSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nKCdEb3dubG9hZCBzY3JpcHQ6JywgcmVtb3RlLnVyaSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJlbW90ZSlcbiAgICAgICAgICAudGhlbigocmF3KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcGFyc2VTY3JpcHREYXRhKHJhdyk7XG4gICAgICAgICAgICAvLyBJbnZhbGlkIGRhdGFcbiAgICAgICAgICAgIGlmICghZGF0YS5jb2RlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoaW5mby5tb2RpZmllZCkgb2JqZWN0U2V0KGRhdGEsICdwcm9wcy5sYXN0TW9kaWZpZWQnLCBpbmZvLm1vZGlmaWVkKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gK2luZm8ucG9zaXRpb247XG4gICAgICAgICAgICBpZiAocG9zaXRpb24pIGRhdGEucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIGlmICghZ2V0T3B0aW9uKCdzeW5jU2NyaXB0U3RhdHVzJykgJiYgZGF0YS5jb25maWcpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGRhdGEuY29uZmlnLmVuYWJsZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGx1Z2luU2NyaXB0LnVwZGF0ZShkYXRhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIC4uLnB1dFJlbW90ZS5tYXAoKHsgbG9jYWwsIHJlbW90ZSB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2coJ1VwbG9hZCBzY3JpcHQ6JywgbG9jYWwucHJvcHMudXJpKTtcbiAgICAgICAgICByZXR1cm4gcGx1Z2luU2NyaXB0LmdldChsb2NhbC5wcm9wcy5pZClcbiAgICAgICAgICAudGhlbigoY29kZSkgPT4ge1xuICAgICAgICAgICAgLy8gWFhYIHVzZSB2ZXJzaW9uIDEgdG8gYmUgY29tcGF0aWJsZSB3aXRoIFZpb2xlbnRtb25rZXkgb24gb3RoZXIgcGxhdGZvcm1zXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZ2V0U2NyaXB0RGF0YShsb2NhbCwgMSwgeyBjb2RlIH0pO1xuICAgICAgICAgICAgcmVtb3RlTWV0YURhdGEuaW5mb1tsb2NhbC5wcm9wcy51cmldID0ge1xuICAgICAgICAgICAgICBtb2RpZmllZDogbG9jYWwucHJvcHMubGFzdE1vZGlmaWVkLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogbG9jYWwucHJvcHMucG9zaXRpb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVtb3RlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXQoXG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHJlbW90ZSwge1xuICAgICAgICAgICAgICAgIHVyaTogbG9jYWwucHJvcHMudXJpLFxuICAgICAgICAgICAgICAgIG5hbWU6IG51bGwsIC8vIHByZWZlciB1c2luZyB1cmkgb24gUFVUXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICAuLi5kZWxSZW1vdGUubWFwKCh7IHJlbW90ZSB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2coJ1JlbW92ZSByZW1vdGUgc2NyaXB0OicsIHJlbW90ZS51cmkpO1xuICAgICAgICAgIGRlbGV0ZSByZW1vdGVNZXRhRGF0YS5pbmZvW3JlbW90ZS51cmldO1xuICAgICAgICAgIHJlbW90ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShyZW1vdGUpO1xuICAgICAgICB9KSxcbiAgICAgICAgLi4uZGVsTG9jYWwubWFwKCh7IGxvY2FsIH0pID0+IHtcbiAgICAgICAgICB0aGlzLmxvZygnUmVtb3ZlIGxvY2FsIHNjcmlwdDonLCBsb2NhbC5wcm9wcy51cmkpO1xuICAgICAgICAgIHJldHVybiBwbHVnaW5TY3JpcHQucmVtb3ZlKGxvY2FsLnByb3BzLmlkKTtcbiAgICAgICAgfSksXG4gICAgICAgIC4uLnVwZGF0ZUxvY2FsLm1hcCgoeyBsb2NhbCwgaW5mbyB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlcyA9IHt9O1xuICAgICAgICAgIGlmIChpbmZvLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICB1cGRhdGVzLnByb3BzID0geyBwb3NpdGlvbjogaW5mby5wb3NpdGlvbiB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdXBkYXRlU2NyaXB0SW5mbyhsb2NhbC5wcm9wcy5pZCwgdXBkYXRlcyk7XG4gICAgICAgIH0pLFxuICAgICAgXTtcbiAgICAgIHByb21pc2VRdWV1ZS5wdXNoKFByb21pc2UuYWxsKHByb21pc2VRdWV1ZSkudGhlbigoKSA9PiBzb3J0U2NyaXB0cygpKS50aGVuKChjaGFuZ2VkKSA9PiB7XG4gICAgICAgIGlmICghY2hhbmdlZCkgcmV0dXJuO1xuICAgICAgICByZW1vdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHBsdWdpblNjcmlwdC5saXN0KClcbiAgICAgICAgLnRoZW4oKHNjcmlwdHMpID0+IHtcbiAgICAgICAgICBzY3JpcHRzLmZvckVhY2goKHNjcmlwdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVtb3RlSW5mbyA9IHJlbW90ZU1ldGFEYXRhLmluZm9bc2NyaXB0LnByb3BzLnVyaV07XG4gICAgICAgICAgICBpZiAocmVtb3RlSW5mbykgcmVtb3RlSW5mby5wb3NpdGlvbiA9IHNjcmlwdC5wcm9wcy5wb3NpdGlvbjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KSk7XG4gICAgICBwcm9taXNlUXVldWUucHVzaChQcm9taXNlLmFsbChwcm9taXNlUXVldWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBpZiAocmVtb3RlQ2hhbmdlZCkge1xuICAgICAgICAgIHJlbW90ZU1ldGFEYXRhLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLnB1dChyZW1vdGVNZXRhLCBKU09OLnN0cmluZ2lmeShyZW1vdGVNZXRhRGF0YSkpKTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbE1ldGEudGltZXN0YW1wID0gcmVtb3RlTWV0YURhdGEudGltZXN0YW1wO1xuICAgICAgICBsb2NhbE1ldGEubGFzdFN5bmMgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmNvbmZpZy5zZXQoJ21ldGEnLCBsb2NhbE1ldGEpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgfSkpO1xuICAgICAgLy8gaWdub3JlIGVycm9ycyB0byBlbnN1cmUgYWxsIHByb21pc2VzIGFyZSBmdWxmaWxsZWRcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlUXVldWUubWFwKHByb21pc2UgPT4gcHJvbWlzZS50aGVuKG5vb3AsIGVyciA9PiBlcnIgfHwgdHJ1ZSkpKVxuICAgICAgLnRoZW4oZXJyb3JzID0+IGVycm9ycy5maWx0ZXIoQm9vbGVhbikpXG4gICAgICAudGhlbigoZXJyb3JzKSA9PiB7IGlmIChlcnJvcnMubGVuZ3RoKSB0aHJvdyBlcnJvcnM7IH0pO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zeW5jU3RhdGUuc2V0KCdpZGxlJyk7XG4gICAgICB0aGlzLmxvZygnU3luYyBmaW5pc2hlZDonLCB0aGlzLmRpc3BsYXlOYW1lKTtcbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICB0aGlzLnN5bmNTdGF0ZS5zZXQoJ2Vycm9yJyk7XG4gICAgICB0aGlzLmxvZygnRmFpbGVkIHN5bmNpbmc6JywgdGhpcy5kaXNwbGF5TmFtZSk7XG4gICAgICB0aGlzLmxvZyhlcnIpO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVsZWFzZUxvY2soKSkuY2F0Y2gobm9vcCkpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlcihGYWN0b3J5KSB7XG4gIHNlcnZpY2VDbGFzc2VzLnB1c2goRmFjdG9yeSk7XG59XG5mdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICByZXR1cm4gc3luY0NvbmZpZy5nZXQoJ2N1cnJlbnQnKTtcbn1cbmZ1bmN0aW9uIGdldFNlcnZpY2UobmFtZSkge1xuICByZXR1cm4gc2VydmljZXNbbmFtZSB8fCBnZXRDdXJyZW50KCldO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gIGlmICghc3luY0NvbmZpZykge1xuICAgIHN5bmNDb25maWcgPSBpbml0Q29uZmlnKCk7XG4gICAgc2VydmljZUNsYXNzZXMuZm9yRWFjaCgoRmFjdG9yeSkgPT4ge1xuICAgICAgY29uc3Qgc2VydmljZSA9IG5ldyBGYWN0b3J5KCk7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IHNlcnZpY2U7XG4gICAgICBzZXJ2aWNlTmFtZXMucHVzaChuYW1lKTtcbiAgICAgIHNlcnZpY2VzW25hbWVdID0gc2VydmljZTtcbiAgICB9KTtcbiAgfVxuICBzeW5jKCk7XG59XG5cbmZ1bmN0aW9uIHN5bmNPbmUoc2VydmljZSkge1xuICBpZiAoc2VydmljZS5zeW5jU3RhdGUuaXMoWydyZWFkeScsICdzeW5jaW5nJ10pKSByZXR1cm47XG4gIGlmIChzZXJ2aWNlLmF1dGhTdGF0ZS5pcyhbJ2lkbGUnLCAnZXJyb3InXSkpIHJldHVybiBzZXJ2aWNlLmNoZWNrU3luYygpO1xuICBpZiAoc2VydmljZS5hdXRoU3RhdGUuaXMoJ2F1dGhvcml6ZWQnKSkgcmV0dXJuIHNlcnZpY2Uuc3RhcnRTeW5jKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW5jKCkge1xuICBjb25zdCBzZXJ2aWNlID0gZ2V0U2VydmljZSgpO1xuICByZXR1cm4gc2VydmljZSAmJiBQcm9taXNlLnJlc29sdmUoc3luY09uZShzZXJ2aWNlKSkudGhlbihhdXRvU3luYyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRob3JpemUoKSB7XG4gIGNvbnN0IHNlcnZpY2UgPSBnZXRTZXJ2aWNlKCk7XG4gIGlmIChzZXJ2aWNlKSBzZXJ2aWNlLmF1dGhvcml6ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2b2tlKCkge1xuICBjb25zdCBzZXJ2aWNlID0gZ2V0U2VydmljZSgpO1xuICBpZiAoc2VydmljZSkgc2VydmljZS5yZXZva2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbmZpZyhjb25maWcpIHtcbiAgY29uc3Qgc2VydmljZSA9IGdldFNlcnZpY2UoKTtcbiAgaWYgKHNlcnZpY2UpIHtcbiAgICBzZXJ2aWNlLnNldFVzZXJDb25maWcoY29uZmlnKTtcbiAgICByZXR1cm4gc2VydmljZS5jaGVja1N5bmMoKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3BlbkF1dGhQYWdlKHVybCwgcmVkaXJlY3RVcmkpIHtcbiAgdW5yZWdpc3RlcldlYlJlcXVlc3QoKTsgLy8gb3RoZXJ3aXNlIG91ciBuZXcgdGFiSWQgd2lsbCBiZSBpZ25vcmVkXG4gIGJyb3dzZXIud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIob25CZWZvcmVSZXF1ZXN0LCB7XG4gICAgdXJsczogW2Ake3JlZGlyZWN0VXJpfSpgXSxcbiAgICB0eXBlczogWydtYWluX2ZyYW1lJ10sXG4gICAgdGFiSWQ6IChhd2FpdCBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsIH0pKS5pZCxcbiAgfSwgWydibG9ja2luZyddKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2Nocm9tZS53ZWJSZXF1ZXN0LldlYlJlc3BvbnNlRGV0YWlsc30gaW5mb1xuICogQHJldHVybnMge2Nocm9tZS53ZWJSZXF1ZXN0LkJsb2NraW5nUmVzcG9uc2V9XG4gKi9cbmZ1bmN0aW9uIG9uQmVmb3JlUmVxdWVzdChpbmZvKSB7XG4gIGlmIChnZXRTZXJ2aWNlKCkuY2hlY2tBdXRoPy4oaW5mby51cmwpKSB7XG4gICAgYnJvd3Nlci50YWJzLnJlbW92ZShpbmZvLnRhYklkKTtcbiAgICAvLyBJZiB3ZSB1bnJlZ2lzdGVyIHdpdGhvdXQgc2V0VGltZW91dCwgQVBJIHdpbGwgaWdub3JlIHsgY2FuY2VsOiB0cnVlIH1cbiAgICBzZXRUaW1lb3V0KHVucmVnaXN0ZXJXZWJSZXF1ZXN0LCAwKTtcbiAgICByZXR1cm4geyBjYW5jZWw6IHRydWUgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyV2ViUmVxdWVzdCgpIHtcbiAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5yZW1vdmVMaXN0ZW5lcihvbkJlZm9yZVJlcXVlc3QpO1xufVxuXG5ob29rT3B0aW9ucygoZGF0YSkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IGRhdGE/Llsnc3luYy5jdXJyZW50J107XG4gIGlmICh2YWx1ZSkgaW5pdGlhbGl6ZSgpO1xufSk7XG4iLCJpbXBvcnQgeyBsb2FkUXVlcnksIGR1bXBRdWVyeSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7XG4gIGdldFVSSSwgZ2V0SXRlbUZpbGVuYW1lLCBCYXNlU2VydmljZSwgaXNTY3JpcHRGaWxlLCByZWdpc3RlcixcbiAgb3BlbkF1dGhQYWdlLFxufSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGNsaWVudF9pZDogJ2YwcTEyenVwMnV5czV3OCcsXG4gIHJlZGlyZWN0X3VyaTogJ2h0dHBzOi8vdmlvbGVudG1vbmtleS5naXRodWIuaW8vYXV0aF9kcm9wYm94Lmh0bWwnLFxufTtcblxuY29uc3QgZXNjUkUgPSAvW1xcdTAwN2YtXFx1ZmZmZl0vZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG5jb25zdCBlc2NGdW5jID0gbSA9PiBgXFxcXHUkeyhtLmNoYXJDb2RlQXQoMCkgKyAweDEwMDAwKS50b1N0cmluZygxNikuc2xpY2UoMSl9YDtcblxuZnVuY3Rpb24ganNvblN0cmluZ2lmeVNhZmUob2JqKSB7XG4gIGNvbnN0IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShlc2NSRSwgZXNjRnVuYyk7XG59XG5cbmNvbnN0IERyb3Bib3ggPSBCYXNlU2VydmljZS5leHRlbmQoe1xuICBuYW1lOiAnZHJvcGJveCcsXG4gIGRpc3BsYXlOYW1lOiAnRHJvcGJveCcsXG4gIHVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICdodHRwczovL2FwaS5kcm9wYm94YXBpLmNvbS8yL3VzZXJzL2dldF9jdXJyZW50X2FjY291bnQnLFxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgICB0eXBlOiAndW5hdXRob3JpemVkJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICBkYXRhOiBlcnIsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlTWV0YUVycm9yKHJlcykge1xuICAgIGlmIChyZXMuc3RhdHVzICE9PSA0MDkpIHRocm93IHJlcztcbiAgfSxcbiAgbGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmRyb3Bib3hhcGkuY29tLzIvZmlsZXMvbGlzdF9mb2xkZXInLFxuICAgICAgYm9keToge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgIH0sXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKGRhdGEgPT4gKFxuICAgICAgZGF0YS5lbnRyaWVzLmZpbHRlcihpdGVtID0+IGl0ZW1bJy50YWcnXSA9PT0gJ2ZpbGUnICYmIGlzU2NyaXB0RmlsZShpdGVtLm5hbWUpKS5tYXAobm9ybWFsaXplKVxuICAgICkpO1xuICB9LFxuICBnZXQoaXRlbSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICdodHRwczovL2NvbnRlbnQuZHJvcGJveGFwaS5jb20vMi9maWxlcy9kb3dubG9hZCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdEcm9wYm94LUFQSS1BcmcnOiBqc29uU3RyaW5naWZ5U2FmZSh7XG4gICAgICAgICAgcGF0aDogYC8ke25hbWV9YCxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICBwdXQoaXRlbSwgZGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICdodHRwczovL2NvbnRlbnQuZHJvcGJveGFwaS5jb20vMi9maWxlcy91cGxvYWQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnRHJvcGJveC1BUEktQXJnJzoganNvblN0cmluZ2lmeVNhZmUoe1xuICAgICAgICAgIHBhdGg6IGAvJHtuYW1lfWAsXG4gICAgICAgICAgbW9kZTogJ292ZXJ3cml0ZScsXG4gICAgICAgIH0pLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgICB9LFxuICAgICAgYm9keTogZGF0YSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4obm9ybWFsaXplKTtcbiAgfSxcbiAgcmVtb3ZlKGl0ZW0pIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZHJvcGJveGFwaS5jb20vMi9maWxlcy9kZWxldGUnLFxuICAgICAgYm9keToge1xuICAgICAgICBwYXRoOiBgLyR7bmFtZX1gLFxuICAgICAgfSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4obm9ybWFsaXplKTtcbiAgfSxcbiAgYXV0aG9yaXplKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIHJlc3BvbnNlX3R5cGU6ICd0b2tlbicsXG4gICAgICBjbGllbnRfaWQ6IGNvbmZpZy5jbGllbnRfaWQsXG4gICAgICByZWRpcmVjdF91cmk6IGNvbmZpZy5yZWRpcmVjdF91cmksXG4gICAgfTtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly93d3cuZHJvcGJveC5jb20vb2F1dGgyL2F1dGhvcml6ZT8ke2R1bXBRdWVyeShwYXJhbXMpfWA7XG4gICAgb3BlbkF1dGhQYWdlKHVybCwgY29uZmlnLnJlZGlyZWN0X3VyaSk7XG4gIH0sXG4gIGF1dGhvcml6ZWQocmF3KSB7XG4gICAgY29uc3QgZGF0YSA9IGxvYWRRdWVyeShyYXcpO1xuICAgIGlmIChkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgdGhpcy5jb25maWcuc2V0KHtcbiAgICAgICAgdWlkOiBkYXRhLnVpZCxcbiAgICAgICAgdG9rZW46IGRhdGEuYWNjZXNzX3Rva2VuLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBjaGVja0F1dGgodXJsKSB7XG4gICAgY29uc3QgcmVkaXJlY3RVcmkgPSBgJHtjb25maWcucmVkaXJlY3RfdXJpfSNgO1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aChyZWRpcmVjdFVyaSkpIHtcbiAgICAgIHRoaXMuYXV0aG9yaXplZCh1cmwuc2xpY2UocmVkaXJlY3RVcmkubGVuZ3RoKSk7XG4gICAgICB0aGlzLmNoZWNrU3luYygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuICByZXZva2UoKSB7XG4gICAgdGhpcy5jb25maWcuc2V0KHtcbiAgICAgIHVpZDogbnVsbCxcbiAgICAgIHRva2VuOiBudWxsLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnByZXBhcmUoKTtcbiAgfSxcbn0pO1xucmVnaXN0ZXIoRHJvcGJveCk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShpdGVtKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogaXRlbS5uYW1lLFxuICAgIHNpemU6IGl0ZW0uc2l6ZSxcbiAgICB1cmk6IGdldFVSSShpdGVtLm5hbWUpLFxuICAgIC8vIG1vZGlmaWVkOiBuZXcgRGF0ZShpdGVtLnNlcnZlcl9tb2RpZmllZCkuZ2V0VGltZSgpLFxuICAgIC8vIGlzRGVsZXRlZDogaXRlbS5pc19kZWxldGVkLFxuICB9O1xufVxuIiwiLy8gUmVmZXJlbmNlOlxuLy8gLSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9kcml2ZS92My9yZWZlcmVuY2UvZmlsZXNcbi8vIC0gaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9nb29nbGUtYXBpLW5vZGVqcy1jbGllbnRcbmltcG9ydCB7IGdldFVuaXFJZCwgbm9vcCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IG9iamVjdEdldCB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgeyBkdW1wUXVlcnksIG5vdGlmeSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7XG4gIGdldFVSSSwgZ2V0SXRlbUZpbGVuYW1lLCBCYXNlU2VydmljZSwgcmVnaXN0ZXIsIGlzU2NyaXB0RmlsZSxcbiAgb3BlbkF1dGhQYWdlLFxufSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuU1lOQ19HT09HTEVfQ0xJRU5UX0lELFxuICBjbGllbnRfc2VjcmV0OiBwcm9jZXNzLmVudi5TWU5DX0dPT0dMRV9DTElFTlRfU0VDUkVULFxuICByZWRpcmVjdF91cmk6ICdodHRwczovL3Zpb2xlbnRtb25rZXkuZ2l0aHViLmlvL2F1dGhfZ29vZ2xlZHJpdmUuaHRtbCcsXG4gIHNjb3BlOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kcml2ZS5hcHBkYXRhJyxcbn07XG5jb25zdCBVTkFVVEhPUklaRUQgPSB7IHN0YXR1czogJ1VOQVVUSE9SSVpFRCcgfTtcblxuY29uc3QgR29vZ2xlRHJpdmUgPSBCYXNlU2VydmljZS5leHRlbmQoe1xuICBuYW1lOiAnZ29vZ2xlZHJpdmUnLFxuICBkaXNwbGF5TmFtZTogJ0dvb2dsZSBEcml2ZScsXG4gIHVybFByZWZpeDogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2RyaXZlL3YzJyxcbiAgcmVmcmVzaFRva2VuKCkge1xuICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IHRoaXMuY29uZmlnLmdldCgncmVmcmVzaF90b2tlbicpO1xuICAgIGlmICghcmVmcmVzaFRva2VuKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoeyB0eXBlOiAndW5hdXRob3JpemVkJyB9KTtcbiAgICByZXR1cm4gdGhpcy5hdXRob3JpemVkKHtcbiAgICAgIHJlZnJlc2hfdG9rZW46IHJlZnJlc2hUb2tlbixcbiAgICAgIGdyYW50X3R5cGU6ICdyZWZyZXNoX3Rva2VuJyxcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHRoaXMucHJlcGFyZSgpKTtcbiAgfSxcbiAgdXNlcigpIHtcbiAgICBjb25zdCByZXF1ZXN0VXNlciA9ICgpID0+IHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YzL3Rva2VuaW5mbz8ke2R1bXBRdWVyeSh7XG4gICAgICAgIGFjY2Vzc190b2tlbjogdGhpcy5jb25maWcuZ2V0KCd0b2tlbicpLFxuICAgICAgfSl9YCxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pO1xuICAgIHJldHVybiByZXF1ZXN0VXNlcigpXG4gICAgLnRoZW4oKGluZm8pID0+IHtcbiAgICAgIC8vIElmIGFjY2VzcyB3YXMgZ3JhbnRlZCB3aXRoIGFjY2Vzc190eXBlPW9ubGluZSwgcmV2b2tlIGl0LlxuICAgICAgaWYgKGluZm8uYWNjZXNzX3R5cGUgPT09ICdvbmxpbmUnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICB1cmw6IGBodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvcmV2b2tlP3Rva2VuPSR7dGhpcy5jb25maWcuZ2V0KCd0b2tlbicpfWAsXG4gICAgICAgICAgcHJlZml4OiAnJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIG5vdGlmeSh7XG4gICAgICAgICAgICB0aXRsZTogJ1N5bmMgVXBncmFkZWQnLFxuICAgICAgICAgICAgYm9keTogJ1BsZWFzZSByZWF1dGhvcml6ZSBhY2Nlc3MgdG8geW91ciBHb29nbGUgRHJpdmUgdG8gY29tcGxldGUgdGhlIHVwZ3JhZGF0aW9uLicsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdPbmxpbmUgYWNjZXNzIHJldm9rZWQuJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGluZm8uc2NvcGUgIT09IGNvbmZpZy5zY29wZSkgcmV0dXJuIFByb21pc2UucmVqZWN0KFVOQVVUSE9SSVpFRCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcyA9PT0gVU5BVVRIT1JJWkVEIHx8IHJlcy5zdGF0dXMgPT09IDQwMCAmJiBvYmplY3RHZXQocmVzLCAnZGF0YS5lcnJvcl9kZXNjcmlwdGlvbicpID09PSAnSW52YWxpZCBWYWx1ZScpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaFRva2VuKCkudGhlbihyZXF1ZXN0VXNlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICBkYXRhOiByZXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0U3luY0RhdGEoKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgc3BhY2VzOiAnYXBwRGF0YUZvbGRlcicsXG4gICAgICBmaWVsZHM6ICdmaWxlcyhpZCxuYW1lLHNpemUpJyxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybDogYC9maWxlcz8ke2R1bXBRdWVyeShwYXJhbXMpfWAsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKCh7IGZpbGVzIH0pID0+IHtcbiAgICAgIGxldCBtZXRhRmlsZTtcbiAgICAgIGNvbnN0IHJlbW90ZURhdGEgPSBmaWxlcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGlzU2NyaXB0RmlsZShpdGVtLm5hbWUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKCFtZXRhRmlsZSAmJiBpdGVtLm5hbWUgPT09IHRoaXMubWV0YUZpbGUpIHtcbiAgICAgICAgICBtZXRhRmlsZSA9IGl0ZW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5tYXAobm9ybWFsaXplKVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIWl0ZW0uc2l6ZSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKGl0ZW0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbWV0YUl0ZW0gPSBtZXRhRmlsZSA/IG5vcm1hbGl6ZShtZXRhRmlsZSkgOiB7fTtcbiAgICAgIGNvbnN0IGdvdE1ldGEgPSB0aGlzLmdldChtZXRhSXRlbSlcbiAgICAgIC50aGVuKGRhdGEgPT4gSlNPTi5wYXJzZShkYXRhKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5oYW5kbGVNZXRhRXJyb3IoZXJyKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gT2JqZWN0LmFzc2lnbih7fSwgbWV0YUl0ZW0sIHtcbiAgICAgICAgbmFtZTogdGhpcy5tZXRhRmlsZSxcbiAgICAgICAgdXJpOiBudWxsLFxuICAgICAgICBkYXRhLFxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtnb3RNZXRhLCByZW1vdGVEYXRhLCB0aGlzLmdldExvY2FsRGF0YSgpXSk7XG4gICAgfSk7XG4gIH0sXG4gIGF1dGhvcml6ZSgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICByZXNwb25zZV90eXBlOiAnY29kZScsXG4gICAgICBhY2Nlc3NfdHlwZTogJ29mZmxpbmUnLFxuICAgICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50X2lkLFxuICAgICAgcmVkaXJlY3RfdXJpOiBjb25maWcucmVkaXJlY3RfdXJpLFxuICAgICAgc2NvcGU6IGNvbmZpZy5zY29wZSxcbiAgICB9O1xuICAgIGlmICghdGhpcy5jb25maWcuZ2V0KCdyZWZyZXNoX3Rva2VuJykpIHBhcmFtcy5wcm9tcHQgPSAnY29uc2VudCc7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi92Mi9hdXRoPyR7ZHVtcFF1ZXJ5KHBhcmFtcyl9YDtcbiAgICBvcGVuQXV0aFBhZ2UodXJsLCBjb25maWcucmVkaXJlY3RfdXJpKTtcbiAgfSxcbiAgY2hlY2tBdXRoKHVybCkge1xuICAgIGNvbnN0IHJlZGlyZWN0VXJpID0gYCR7Y29uZmlnLnJlZGlyZWN0X3VyaX0/Y29kZT1gO1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aChyZWRpcmVjdFVyaSkpIHtcbiAgICAgIHRoaXMuYXV0aFN0YXRlLnNldCgnYXV0aG9yaXppbmcnKTtcbiAgICAgIHRoaXMuYXV0aG9yaXplZCh7XG4gICAgICAgIGNvZGU6IGRlY29kZVVSSUNvbXBvbmVudCh1cmwuc3BsaXQoJyMnKVswXS5zbGljZShyZWRpcmVjdFVyaS5sZW5ndGgpKSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmNoZWNrU3luYygpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcbiAgcmV2b2tlKCkge1xuICAgIHRoaXMuY29uZmlnLnNldCh7XG4gICAgICB0b2tlbjogbnVsbCxcbiAgICAgIHJlZnJlc2hfdG9rZW46IG51bGwsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZSgpO1xuICB9LFxuICBhdXRob3JpemVkKHBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3Y0L3Rva2VuJyxcbiAgICAgIHByZWZpeDogJycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBkdW1wUXVlcnkoT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICBjbGllbnRfaWQ6IGNvbmZpZy5jbGllbnRfaWQsXG4gICAgICAgIGNsaWVudF9zZWNyZXQ6IGNvbmZpZy5jbGllbnRfc2VjcmV0LFxuICAgICAgICByZWRpcmVjdF91cmk6IGNvbmZpZy5yZWRpcmVjdF91cmksXG4gICAgICAgIGdyYW50X3R5cGU6ICdhdXRob3JpemF0aW9uX2NvZGUnLFxuICAgICAgfSwgcGFyYW1zKSksXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgY29uc3QgdXBkYXRlID0ge1xuICAgICAgICAgIHRva2VuOiBkYXRhLmFjY2Vzc190b2tlbixcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRhdGEucmVmcmVzaF90b2tlbikge1xuICAgICAgICAgIHVwZGF0ZS5yZWZyZXNoX3Rva2VuID0gZGF0YS5yZWZyZXNoX3Rva2VuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlnLnNldCh1cGRhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZGF0YTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlTWV0YUVycm9yOiBub29wLFxuICBsaXN0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IHN1cHBvcnRlZCcpO1xuICB9LFxuICBnZXQoeyBpZCB9KSB7XG4gICAgaWYgKCFpZCkgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsOiBgL2ZpbGVzLyR7aWR9P2FsdD1tZWRpYWAsXG4gICAgfSk7XG4gIH0sXG4gIHB1dChpdGVtLCBkYXRhKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICBjb25zdCB7IGlkIH0gPSBpdGVtO1xuICAgIGNvbnN0IGJvdW5kYXJ5ID0gZ2V0VW5pcUlkKCd2aW9sZW50bW9ua2V5LWlzLWdyZWF0LScpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogYG11bHRpcGFydC9yZWxhdGVkOyBib3VuZGFyeT0ke2JvdW5kYXJ5fWAsXG4gICAgfTtcbiAgICBjb25zdCBtZXRhZGF0YSA9IGlkID8ge1xuICAgICAgbmFtZSxcbiAgICB9IDoge1xuICAgICAgbmFtZSxcbiAgICAgIHBhcmVudHM6IFsnYXBwRGF0YUZvbGRlciddLFxuICAgIH07XG4gICAgY29uc3QgYm9keSA9IFtcbiAgICAgIGAtLSR7Ym91bmRhcnl9YCxcbiAgICAgICdDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgJycsXG4gICAgICBKU09OLnN0cmluZ2lmeShtZXRhZGF0YSksXG4gICAgICBgLS0ke2JvdW5kYXJ5fWAsXG4gICAgICAnQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluJyxcbiAgICAgICcnLFxuICAgICAgZGF0YSxcbiAgICAgIGAtLSR7Ym91bmRhcnl9LS1gLFxuICAgICAgJycsXG4gICAgXS5qb2luKCdcXHJcXG4nKTtcbiAgICBjb25zdCB1cmwgPSBpZFxuICAgICAgPyBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vdXBsb2FkL2RyaXZlL3YzL2ZpbGVzLyR7aWR9P3VwbG9hZFR5cGU9bXVsdGlwYXJ0YFxuICAgICAgOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vdXBsb2FkL2RyaXZlL3YzL2ZpbGVzP3VwbG9hZFR5cGU9bXVsdGlwYXJ0JztcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmwsXG4gICAgICBib2R5LFxuICAgICAgaGVhZGVycyxcbiAgICAgIG1ldGhvZDogaWQgPyAnUEFUQ0gnIDogJ1BPU1QnLFxuICAgIH0pO1xuICB9LFxuICByZW1vdmUoeyBpZCB9KSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIHVybDogYC9maWxlcy8ke2lkfWAsXG4gICAgfSk7XG4gIH0sXG59KTtcbnJlZ2lzdGVyKEdvb2dsZURyaXZlKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplKGl0ZW0pIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogaXRlbS5pZCxcbiAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgc2l6ZTogK2l0ZW0uc2l6ZSxcbiAgICB1cmk6IGdldFVSSShpdGVtLm5hbWUpLFxuICB9O1xufVxuIiwiaW1wb3J0IHtcbiAgaW5pdGlhbGl6ZSxcbiAgc3luYyxcbiAgZ2V0U3RhdGVzLFxuICBhdXRob3JpemUsXG4gIHJldm9rZSxcbiAgc2V0Q29uZmlnLFxufSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0ICcuL2Ryb3Bib3gnO1xuaW1wb3J0ICcuL29uZWRyaXZlJztcbmltcG9ydCAnLi9nb29nbGVkcml2ZSc7XG5pbXBvcnQgJy4vd2ViZGF2JztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZSc7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgU3luY0F1dGhvcml6ZTogYXV0aG9yaXplLFxuICBTeW5jUmV2b2tlOiByZXZva2UsXG4gIFN5bmNTdGFydDogc3luYyxcbiAgU3luY1NldENvbmZpZzogc2V0Q29uZmlnLFxufSk7XG5cbmV4cG9ydCB7XG4gIGluaXRpYWxpemUsXG4gIHN5bmMsXG4gIGdldFN0YXRlcyxcbiAgYXV0aG9yaXplLFxuICByZXZva2UsXG59O1xuIiwiLy8gUmVmZXJlbmNlOiBodHRwczovL2Rldi5vbmVkcml2ZS5jb20vUkVBRE1FLmh0bVxuaW1wb3J0IHsgbm9vcCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IG9iamVjdEdldCB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgeyBkdW1wUXVlcnkgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge1xuICBnZXRVUkksIGdldEl0ZW1GaWxlbmFtZSwgQmFzZVNlcnZpY2UsIGlzU2NyaXB0RmlsZSwgcmVnaXN0ZXIsXG4gIG9wZW5BdXRoUGFnZSxcbn0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgY29uZmlnID0ge1xuICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52LlNZTkNfT05FRFJJVkVfQ0xJRU5UX0lELFxuICBjbGllbnRfc2VjcmV0OiBwcm9jZXNzLmVudi5TWU5DX09ORURSSVZFX0NMSUVOVF9TRUNSRVQsXG4gIHJlZGlyZWN0X3VyaTogJ2h0dHBzOi8vdmlvbGVudG1vbmtleS5naXRodWIuaW8vYXV0aF9vbmVkcml2ZS5odG1sJyxcbn07XG5cbmNvbnN0IE9uZURyaXZlID0gQmFzZVNlcnZpY2UuZXh0ZW5kKHtcbiAgbmFtZTogJ29uZWRyaXZlJyxcbiAgZGlzcGxheU5hbWU6ICdPbmVEcml2ZScsXG4gIHVybFByZWZpeDogJ2h0dHBzOi8vYXBpLm9uZWRyaXZlLmNvbS92MS4wJyxcbiAgcmVmcmVzaFRva2VuKCkge1xuICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IHRoaXMuY29uZmlnLmdldCgncmVmcmVzaF90b2tlbicpO1xuICAgIHJldHVybiB0aGlzLmF1dGhvcml6ZWQoe1xuICAgICAgcmVmcmVzaF90b2tlbjogcmVmcmVzaFRva2VuLFxuICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5wcmVwYXJlKCkpO1xuICB9LFxuICB1c2VyKCkge1xuICAgIGNvbnN0IHJlcXVlc3RVc2VyID0gKCkgPT4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6ICcvZHJpdmUnLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcXVlc3RVc2VyKClcbiAgICAuY2F0Y2goKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZyZXNoVG9rZW4oKS50aGVuKHJlcXVlc3RVc2VyKTtcbiAgICAgIH1cbiAgICAgIHRocm93IHJlcztcbiAgICB9KVxuICAgIC5jYXRjaCgocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAwICYmIG9iamVjdEdldChyZXMsICdkYXRhLmVycm9yJykgPT09ICdpbnZhbGlkX2dyYW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgIHR5cGU6ICd1bmF1dGhvcml6ZWQnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIGRhdGE6IHJlcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBoYW5kbGVNZXRhRXJyb3IocmVzKSB7XG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgY29uc3QgaGVhZGVyID0gcmVzLmhlYWRlcnMuZ2V0KCdXV1ctQXV0aGVudGljYXRlJyk/LlswXSB8fCAnJztcbiAgICAgIGlmICgvXkJlYXJlciByZWFsbT1cIk9uZURyaXZlQVBJXCIvLnRlc3QoaGVhZGVyKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZyZXNoVG9rZW4oKS50aGVuKCgpID0+IHRoaXMuZ2V0TWV0YSgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhyb3cgcmVzO1xuICB9LFxuICBsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybDogJy9kcml2ZS9zcGVjaWFsL2FwcHJvb3QvY2hpbGRyZW4nLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbihkYXRhID0+IGRhdGEudmFsdWUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5maWxlICYmIGlzU2NyaXB0RmlsZShpdGVtLm5hbWUpKS5tYXAobm9ybWFsaXplKSk7XG4gIH0sXG4gIGdldChpdGVtKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6IGAvZHJpdmUvc3BlY2lhbC9hcHByb290Oi8ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbihkYXRhID0+IHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsOiBkYXRhWydAY29udGVudC5kb3dubG9hZFVybCddLFxuICAgICAgZGVsYXk6IGZhbHNlLFxuICAgIH0pKTtcbiAgfSxcbiAgcHV0KGl0ZW0sIGRhdGEpIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICB1cmw6IGAvZHJpdmUvc3BlY2lhbC9hcHByb290Oi8ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX06L2NvbnRlbnRgLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgICB9LFxuICAgICAgYm9keTogZGF0YSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4obm9ybWFsaXplKTtcbiAgfSxcbiAgcmVtb3ZlKGl0ZW0pIHtcbiAgICAvLyByZXR1cm4gMjA0XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgdXJsOiBgL2RyaXZlL3NwZWNpYWwvYXBwcm9vdDovJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCxcbiAgICB9KVxuICAgIC5jYXRjaChub29wKTtcbiAgfSxcbiAgYXV0aG9yaXplKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGNsaWVudF9pZDogY29uZmlnLmNsaWVudF9pZCxcbiAgICAgIHNjb3BlOiAnb25lZHJpdmUuYXBwZm9sZGVyIHdsLm9mZmxpbmVfYWNjZXNzJyxcbiAgICAgIHJlc3BvbnNlX3R5cGU6ICdjb2RlJyxcbiAgICAgIHJlZGlyZWN0X3VyaTogY29uZmlnLnJlZGlyZWN0X3VyaSxcbiAgICB9O1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2xvZ2luLmxpdmUuY29tL29hdXRoMjBfYXV0aG9yaXplLnNyZj8ke2R1bXBRdWVyeShwYXJhbXMpfWA7XG4gICAgb3BlbkF1dGhQYWdlKHVybCwgY29uZmlnLnJlZGlyZWN0X3VyaSk7XG4gIH0sXG4gIGNoZWNrQXV0aCh1cmwpIHtcbiAgICBjb25zdCByZWRpcmVjdFVyaSA9IGAke2NvbmZpZy5yZWRpcmVjdF91cml9P2NvZGU9YDtcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgocmVkaXJlY3RVcmkpKSB7XG4gICAgICB0aGlzLmF1dGhTdGF0ZS5zZXQoJ2F1dGhvcml6aW5nJyk7XG4gICAgICB0aGlzLmF1dGhvcml6ZWQoe1xuICAgICAgICBjb2RlOiB1cmwuc2xpY2UocmVkaXJlY3RVcmkubGVuZ3RoKSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmNoZWNrU3luYygpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcbiAgcmV2b2tlKCkge1xuICAgIHRoaXMuY29uZmlnLnNldCh7XG4gICAgICB1aWQ6IG51bGwsXG4gICAgICB0b2tlbjogbnVsbCxcbiAgICAgIHJlZnJlc2hfdG9rZW46IG51bGwsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZSgpO1xuICB9LFxuICBhdXRob3JpemVkKHBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9sb2dpbi5saXZlLmNvbS9vYXV0aDIwX3Rva2VuLnNyZicsXG4gICAgICBwcmVmaXg6ICcnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICB9LFxuICAgICAgYm9keTogZHVtcFF1ZXJ5KE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50X2lkLFxuICAgICAgICBjbGllbnRfc2VjcmV0OiBjb25maWcuY2xpZW50X3NlY3JldCxcbiAgICAgICAgcmVkaXJlY3RfdXJpOiBjb25maWcucmVkaXJlY3RfdXJpLFxuICAgICAgICBncmFudF90eXBlOiAnYXV0aG9yaXphdGlvbl9jb2RlJyxcbiAgICAgIH0sIHBhcmFtcykpLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnNldCh7XG4gICAgICAgICAgdWlkOiBkYXRhLnVzZXJfaWQsXG4gICAgICAgICAgdG9rZW46IGRhdGEuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgIHJlZnJlc2hfdG9rZW46IGRhdGEucmVmcmVzaF90b2tlbixcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBkYXRhO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxufSk7XG5yZWdpc3RlcihPbmVEcml2ZSk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShpdGVtKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogaXRlbS5uYW1lLFxuICAgIHNpemU6IGl0ZW0uc2l6ZSxcbiAgICB1cmk6IGdldFVSSShpdGVtLm5hbWUpLFxuICAgIC8vIG1vZGlmaWVkOiBuZXcgRGF0ZShpdGVtLmxhc3RNb2RpZmllZERhdGVUaW1lKS5nZXRUaW1lKCksXG4gIH07XG59XG4iLCJpbXBvcnQge1xuICBnZXRVUkksIGdldEl0ZW1GaWxlbmFtZSwgQmFzZVNlcnZpY2UsIGlzU2NyaXB0RmlsZSwgcmVnaXN0ZXIsXG59IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IEtFWV9DSElMRFJFTiA9IFN5bWJvbCgnY2hpbGRyZW4nKTtcblxuY2xhc3MgWE5vZGUge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBuc01hcCkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uc01hcCA9IHsgLi4ubnNNYXAgfTtcbiAgICB0aGlzLnBhcnNlQXR0cnMoKTtcbiAgICB0aGlzLnBhcnNlTmFtZSgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21YTUwoeG1sKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sLCAnYXBwbGljYXRpb24veG1sJyk7XG4gICAgcmV0dXJuIG5ldyBYTm9kZShkb2MpO1xuICB9XG5cbiAgcGFyc2VBdHRycygpIHtcbiAgICBjb25zdCB7IG5vZGUsIG5zTWFwIH0gPSB0aGlzO1xuICAgIGNvbnN0IGF0dHJzID0ge307XG4gICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSBub2RlO1xuICAgIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgb2Ygbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGF0dHI7XG4gICAgICAgIGlmIChuYW1lID09PSAneG1sbnMnKSBuc01hcC4kID0gdmFsdWU7XG4gICAgICAgIGVsc2UgaWYgKG5hbWUuc3RhcnRzV2l0aCgneG1sbnM6JykpIG5zTWFwW25hbWUuc2xpY2UoNildID0gdmFsdWU7XG4gICAgICAgIGF0dHJzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYXR0cnMgPSBhdHRycztcbiAgfVxuXG4gIHBhcnNlTmFtZSgpIHtcbiAgICBjb25zdCB7IG5vZGUsIG5zTWFwIH0gPSB0aGlzO1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBsZXQgbmFtZSA9IG5vZGUudGFnTmFtZTtcbiAgICAgIGxldCBucyA9IG5zTWFwLiQ7XG4gICAgICBpZiAobmFtZS5pbmNsdWRlcygnOicpKSB7XG4gICAgICAgIGxldCBwcmVmaXg7XG4gICAgICAgIFtwcmVmaXgsIG5hbWVdID0gbmFtZS5zcGxpdCgnOicpO1xuICAgICAgICBucyA9IG5zTWFwW3ByZWZpeF07XG4gICAgICAgIGlmICghbnMpIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBuYW1lc3BhY2U6ICR7cHJlZml4fWApO1xuICAgICAgfVxuICAgICAgdGhpcy5uYW1lID0gbnMgKyBuYW1lO1xuICAgIH1cbiAgfVxuXG4gIHRleHQoKSB7XG4gICAgY29uc3QgeyBub2RlIH0gPSB0aGlzO1xuICAgIGlmIChub2RlKSByZXR1cm4gKG5vZGUudGV4dENvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgfVxuXG4gIGNoaWxkcmVuKCkge1xuICAgIGlmICghdGhpc1tLRVlfQ0hJTERSRU5dKSB7XG4gICAgICBjb25zdCB7IG5vZGUsIG5zTWFwIH0gPSB0aGlzO1xuICAgICAgdGhpc1tLRVlfQ0hJTERSRU5dID0gWy4uLm5vZGUuY2hpbGRyZW5dXG4gICAgICAubWFwKGNoaWxkID0+IG5ldyBYTm9kZShjaGlsZCwgbnNNYXApKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNbS0VZX0NISUxEUkVOXTtcbiAgfVxuXG4gIG1hcChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuKCkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGdldENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAodGFnTmFtZSA9PiBub2RlID0+IG5vZGUubmFtZSA9PT0gdGFnTmFtZSkoY2FsbGJhY2spO1xuICAgIH1cbiAgICByZXR1cm4gY2FsbGJhY2s7XG4gIH1cblxuICBmaWx0ZXIoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbigpLmZpbHRlcih0aGlzLmdldENhbGxiYWNrKGNhbGxiYWNrKSk7XG4gIH1cblxuICBmaW5kKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4oKS5maW5kKHRoaXMuZ2V0Q2FsbGJhY2soY2FsbGJhY2spKTtcbiAgfVxuXG4gIGF0dHIoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cnNba2V5XTtcbiAgfVxufVxuXG5jb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAgc2VydmVyVXJsOiAnJyxcbiAgYW5vbnltb3VzOiBmYWxzZSxcbiAgdXNlcm5hbWU6ICcnLFxuICBwYXNzd29yZDogJycsXG59O1xuXG5jb25zdCBXZWJEQVYgPSBCYXNlU2VydmljZS5leHRlbmQoe1xuICBuYW1lOiAnd2ViZGF2JyxcbiAgZGlzcGxheU5hbWU6ICdXZWJEQVYnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgYXV0aFR5cGU6ICdwYXNzd29yZCcsXG4gICAgc2VydmVyVXJsOiBudWxsLFxuICB9LFxuICBnZXRVc2VyQ29uZmlnKCkge1xuICAgIGlmICghdGhpcy51c2VyQ29uZmlnKSB7XG4gICAgICB0aGlzLnVzZXJDb25maWcgPSB7XG4gICAgICAgIC4uLkRFRkFVTFRfQ09ORklHLFxuICAgICAgICAuLi50aGlzLmNvbmZpZy5nZXQoJ3VzZXJDb25maWcnKSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVzZXJDb25maWc7XG4gIH0sXG4gIHNldFVzZXJDb25maWcoY29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnVzZXJDb25maWcsIGNvbmZpZyk7XG4gICAgdGhpcy5jb25maWcuc2V0KCd1c2VyQ29uZmlnJywgdGhpcy51c2VyQ29uZmlnKTtcbiAgfSxcbiAgaW5pdFRva2VuKCkge1xuICAgIHRoaXMucHJlcGFyZUhlYWRlcnMoKTtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldFVzZXJDb25maWcoKTtcbiAgICBsZXQgdXJsID0gY29uZmlnLnNlcnZlclVybD8udHJpbSgpIHx8ICcnO1xuICAgIGlmICghdXJsLmluY2x1ZGVzKCc6Ly8nKSkgdXJsID0gYGh0dHA6Ly8ke3VybH1gO1xuICAgIGlmICghdXJsLmVuZHNXaXRoKCcvJykpIHVybCArPSAnLyc7XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBVUkwodXJsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnByb3BlcnRpZXMuc2VydmVyVXJsID0gbnVsbDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5wcm9wZXJ0aWVzLnNlcnZlclVybCA9IGAke3VybH1WaW9sZW50bW9ua2V5L2A7XG4gICAgY29uc3QgeyBhbm9ueW1vdXMsIHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gY29uZmlnO1xuICAgIGlmIChhbm9ueW1vdXMpIHJldHVybiB0cnVlO1xuICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgYXV0aCA9IHdpbmRvdy5idG9hKGAke3VzZXJuYW1lfToke3Bhc3N3b3JkfWApO1xuICAgIHRoaXMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJhc2ljICR7YXV0aH1gO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBsb2FkRGF0YShvcHRpb25zKSB7XG4gICAgLy8gQnlwYXNzaW5nIGxvZ2luIENTUkYgcHJvdGVjdGlvbiBpbiBOZXh0Y2xvdWQgLyBPd25jbG91ZCBieSBub3Qgc2VuZGluZyBjb29raWVzLlxuICAgIC8vIFdlIGFyZSBub3QgdXNpbmcgd2ViIFVJIGFuZCBjb29raWUgYXV0aGVudGljYXRpb24sIHNvIHdlIGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgdGhhdC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3Zpb2xlbnRtb25rZXkvdmlvbGVudG1vbmtleS9pc3N1ZXMvOTc2XG4gICAgcmV0dXJuIEJhc2VTZXJ2aWNlLnByb3RvdHlwZS5sb2FkRGF0YS5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY3JlZGVudGlhbHM6ICdvbWl0JyxcbiAgICB9LCBvcHRpb25zKSk7XG4gIH0sXG4gIGhhbmRsZU1ldGFFcnJvcihyZXMpIHtcbiAgICBpZiAoIVtcbiAgICAgIDQwNCwgLy8gRmlsZSBub3QgZXhpc3RzXG4gICAgICA0MDksIC8vIERpcmVjdG9yeSBub3QgZXhpc3RzXG4gICAgXS5pbmNsdWRlcyhyZXMuc3RhdHVzKSkgdGhyb3cgcmVzO1xuICB9LFxuICAvLyBTb21lIFdlYkRBViBzZXJ2ZXJzIGRvIG5vdCBhbGxvdyBMT0NLIC8gVU5MT0NLXG4gIC8qXG4gIGFjcXVpcmVMb2NrKCkge1xuICAgIGNvbnN0IHsgc2VydmVyVXJsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgY29uc3QgY3JlYXRlTG9jayA9ICgpID0+IHtcbiAgICAgIHRoaXMubG9nKCdBY3F1aXJlIGxvY2suLi4nKTtcbiAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgICAgbWV0aG9kOiAnTE9DSycsXG4gICAgICAgIHVybDogc2VydmVyVXJsLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgVGltZW91dDogYFNlY29uZC0kezMwICogNjB9YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogYFxcXG48P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJ1dGYtOFwiID8+XG48RDpsb2NraW5mbyB4bWxuczpEPSdEQVY6Jz5cbiAgPEQ6bG9ja3Njb3BlPjxEOmV4Y2x1c2l2ZS8+PC9EOmxvY2tzY29wZT5cbiAgPEQ6bG9ja3R5cGU+PEQ6d3JpdGUvPjwvRDpsb2NrdHlwZT5cbjwvRDpsb2NraW5mbz5gLFxuICAgICAgfSlcbiAgICAgIC50aGVuKHhtbCA9PiB7XG4gICAgICAgIGNvbnN0IGRvYyA9IFhOb2RlLmZyb21YTUwoeG1sKTtcbiAgICAgICAgY29uc3QgbG9jayA9IGRvYy5maW5kKCdEQVY6cHJvcCcpXG4gICAgICAgIC5maW5kKCdEQVY6bG9ja2Rpc2NvdmVyeScpXG4gICAgICAgIC5maW5kKCdEQVY6YWN0aXZlbG9jaycpXG4gICAgICAgIC5maW5kKCdEQVY6bG9ja3Rva2VuJylcbiAgICAgICAgLmZpbmQoJ0RBVjpocmVmJylcbiAgICAgICAgLnRleHQoKTtcbiAgICAgICAgdGhpcy5sb2coJ0FjcXVpcmVkIGxvY2s6JywgbG9jayk7XG4gICAgICAgIHRoaXMuY29uZmlnLnNldCh7XG4gICAgICAgICAgbG9jayxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGxvY2sgPSB0aGlzLmNvbmZpZy5nZXQoJ2xvY2snKTtcbiAgICBpZiAobG9jaykge1xuICAgICAgdGhpcy5sb2coJ1JlZnJlc2ggbG9jazonLCBsb2NrKTtcbiAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgICAgbWV0aG9kOiAnTE9DSycsXG4gICAgICAgIHVybDogc2VydmVyVXJsLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgSWY6IGAoPCR7bG9ja30+KWAsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZygnUmVmcmVzaGVkIGxvY2s6JywgbG9jayk7XG4gICAgICB9LCBlcnIgPT4ge1xuICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDEyKSB7XG4gICAgICAgICAgdGhpcy5sb2coJ1JlZnJlc2ggbG9jayBlcnJvcicpO1xuICAgICAgICAgIHRoaXMuY29uZmlnLnNldCh7IGxvY2s6IG51bGwgfSk7XG4gICAgICAgICAgLy8gUHJlY29uZGl0aW9uIEZhaWxlZFxuICAgICAgICAgIHJldHVybiBjcmVhdGVMb2NrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVMb2NrKCk7XG4gIH0sXG4gIHJlbGVhc2VMb2NrKCkge1xuICAgIGNvbnN0IGxvY2sgPSB0aGlzLmNvbmZpZy5nZXQoJ2xvY2snKTtcbiAgICBpZiAobG9jaykge1xuICAgICAgY29uc3QgeyBzZXJ2ZXJVcmwgfSA9IHRoaXMucHJvcGVydGllcztcbiAgICAgIHRoaXMubG9nKCdSZWxlYXNlIGxvY2s6JywgbG9jayk7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICAgIG1ldGhvZDogJ1VOTE9DSycsXG4gICAgICAgIHVybDogc2VydmVyVXJsLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0xvY2stVG9rZW4nOiBgPCR7bG9ja30+YCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9nKCdSZWxlYXNlZCBsb2NrJyk7XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMubG9nKCdSZWxlYXNlIGxvY2sgZXJyb3InKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLnNldCh7IGxvY2s6IG51bGwgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gICovXG4gIGxpc3QoKSB7XG4gICAgY29uc3QgeyBzZXJ2ZXJVcmwgfSA9IHRoaXMucHJvcGVydGllcztcbiAgICBjb25zdCBta2RpciA9ICgpID0+IHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnTUtDT0wnLFxuICAgICAgdXJsOiBzZXJ2ZXJVcmwsXG4gICAgfSk7XG4gICAgY29uc3QgcmVhZGRpciA9ICgpID0+IHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUFJPUEZJTkQnLFxuICAgICAgdXJsOiBzZXJ2ZXJVcmwsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIGRlcHRoOiAnMScsXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oKHhtbCkgPT4ge1xuICAgICAgY29uc3QgZG9jID0gWE5vZGUuZnJvbVhNTCh4bWwpO1xuICAgICAgY29uc3QgaXRlbXMgPSBkb2MuY2hpbGRyZW4oKVswXVxuICAgICAgLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wID0gbm9kZS5maW5kKCdEQVY6cHJvcHN0YXQnKS5maW5kKCdEQVY6cHJvcCcpO1xuICAgICAgICBjb25zdCB0eXBlID0gcHJvcC5maW5kKCdEQVY6cmVzb3VyY2V0eXBlJykuZmluZCgnREFWOmNvbGxlY3Rpb24nKSA/ICdkaXJlY3RvcnknIDogJ2ZpbGUnO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgbGV0IGRpc3BsYXlOYW1lO1xuICAgICAgICAgIGNvbnN0IGRpc3BsYXlOYW1lTm9kZSA9IHByb3AuZmluZCgnREFWOmRpc3BsYXluYW1lJyk7XG5cbiAgICAgICAgICBpZiAoZGlzcGxheU5hbWVOb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWVOb2RlLnRleHQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IG5vZGUuZmluZCgnREFWOmhyZWYnKS50ZXh0KCk7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChocmVmLnN1YnN0cmluZyhocmVmLmxhc3RJbmRleE9mKCcvJykgKyAxKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzU2NyaXB0RmlsZShkaXNwbGF5TmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSBwcm9wLmZpbmQoJ0RBVjpnZXRjb250ZW50bGVuZ3RoJyk7XG4gICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplKHtcbiAgICAgICAgICAgICAgbmFtZTogZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgIHNpemU6IHNpemUgPyArc2l6ZS50ZXh0KCkgOiAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgICByZXR1cm4gaXRlbXM7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlYWRkaXIoKVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiBta2RpcigpLnRoZW4ocmVhZGRpcik7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH0sXG4gIGdldChpdGVtKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICBjb25zdCB7IHNlcnZlclVybCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybDogc2VydmVyVXJsICsgbmFtZSxcbiAgICB9KTtcbiAgfSxcbiAgcHV0KGl0ZW0sIGRhdGEpIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nLFxuICAgIH07XG4gICAgY29uc3QgbG9jayA9IHRoaXMuY29uZmlnLmdldCgnbG9jaycpO1xuICAgIGlmIChsb2NrKSBoZWFkZXJzLklmID0gYCg8JHtsb2NrfT4pYDtcbiAgICBjb25zdCB7IHNlcnZlclVybCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICB1cmw6IHNlcnZlclVybCArIG5hbWUsXG4gICAgICBib2R5OiBkYXRhLFxuICAgICAgaGVhZGVycyxcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlKGl0ZW0pIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgICBjb25zdCBsb2NrID0gdGhpcy5jb25maWcuZ2V0KCdsb2NrJyk7XG4gICAgaWYgKGxvY2spIGhlYWRlcnMuSWYgPSBgKDwke2xvY2t9PilgO1xuICAgIGNvbnN0IHsgc2VydmVyVXJsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIHVybDogc2VydmVyVXJsICsgbmFtZSxcbiAgICAgIGhlYWRlcnMsXG4gICAgfSk7XG4gIH0sXG59KTtcbnJlZ2lzdGVyKFdlYkRBVik7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShpdGVtKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogaXRlbS5uYW1lLFxuICAgIHNpemU6IGl0ZW0uc2l6ZSxcbiAgICB1cmk6IGdldFVSSShpdGVtLm5hbWUpLFxuICB9O1xufVxuIiwiaW1wb3J0IGluaXRDYWNoZSBmcm9tICcjL2NvbW1vbi9jYWNoZSc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbmNvbnN0IGNhY2hlID0gaW5pdENhY2hlKHtcbiAgLyogS2VlcGluZyB0aGUgZGF0YSBmb3Igb25lIGhvdXIgc2luY2UgY2hyb21lLnN0b3JhZ2UubG9jYWwgaXMgaW5zYW5lbHkgc2xvdyBpbiBDaHJvbWUsXG4gICAgIGl0IGNhbiB0YWtlcyBzZWNvbmRzIHRvIHJlYWQgaXQgd2hlbiBpbmplY3RpbmcgdGFicyB3aXRoIGEgYmlnIHNjcmlwdC92YWx1ZSwgd2hpY2ggZGVsYXlzXG4gICAgIGFsbCBvdGhlciBzY3JpcHRzIGluIHRoaXMgdGFiIGFuZCB0aGV5IHdpbGwgbmV2ZXIgYmUgYWJsZSB0byBydW4gYXQgZG9jdW1lbnQtc3RhcnQuICovXG4gIGxpZmV0aW1lOiA2MCAqIDYwICogMTAwMCxcbn0pO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIENhY2hlTG9hZChkYXRhKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChkYXRhKSB8fCBudWxsO1xuICB9LFxuICBDYWNoZUhpdChkYXRhKSB7XG4gICAgY2FjaGUuaGl0KGRhdGEua2V5LCBkYXRhLmxpZmV0aW1lKTtcbiAgfSxcbiAgQ2FjaGVQb3Aoa2V5KSB7XG4gICAgcmV0dXJuIGNhY2hlLnBvcChrZXkpIHx8IG51bGw7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2FjaGU7XG4iLCJpbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbmNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbmxldCBjbGlwYm9hcmREYXRhO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIFNldENsaXBib2FyZChkYXRhKSB7XG4gICAgY2xpcGJvYXJkRGF0YSA9IGRhdGE7XG4gICAgdGV4dGFyZWEuZm9jdXMoKTtcbiAgICBjb25zdCByZXQgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScsIGZhbHNlLCBudWxsKTtcbiAgICBpZiAoIXJldCAmJiBwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgY29uc29sZS53YXJuKCdDb3B5IGZhaWxlZCEnKTtcbiAgICB9XG4gIH0sXG59KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvcHknLCBlID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB7IHR5cGUsIGRhdGEgfSA9IGNsaXBib2FyZERhdGE7XG4gIGUuY2xpcGJvYXJkRGF0YS5zZXREYXRhKHR5cGUgfHwgJ3RleHQvcGxhaW4nLCBkYXRhKTtcbn0pO1xuIiwiaW1wb3J0IHtcbiAgY29tcGFyZVZlcnNpb24sIGkxOG4sIGdldEZ1bGxVcmwsIGdldFNjcmlwdE5hbWUsIGlzUmVtb3RlLCBzZW5kQ21kLCB0cnVlSm9pbixcbn0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ01EX1NDUklQVF9BREQsIENNRF9TQ1JJUFRfVVBEQVRFLCBJTkpFQ1RfUEFHRSwgSU5KRUNUX0FVVE8sIFRJTUVPVVRfV0VFSyxcbn0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcbmltcG9ydCB7IGZvckVhY2hFbnRyeSwgZm9yRWFjaEtleSwgZm9yRWFjaFZhbHVlIH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCBzdG9yYWdlIGZyb20gJyMvY29tbW9uL3N0b3JhZ2UnO1xuaW1wb3J0IHBsdWdpbkV2ZW50cyBmcm9tICcuLi9wbHVnaW4vZXZlbnRzJztcbmltcG9ydCB7IGdldE5hbWVVUkksIHBhcnNlTWV0YSwgbmV3U2NyaXB0LCBnZXREZWZhdWx0Q3VzdG9tIH0gZnJvbSAnLi9zY3JpcHQnO1xuaW1wb3J0IHsgdGVzdFNjcmlwdCwgdGVzdEJsYWNrbGlzdCB9IGZyb20gJy4vdGVzdGVyJztcbmltcG9ydCB7IHByZUluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMsIG5vdGlmeSB9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgcGF0Y2hEQiBmcm9tICcuL3BhdGNoLWRiJztcbmltcG9ydCB7IHNldE9wdGlvbiB9IGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgJy4vc3RvcmFnZS1mZXRjaCc7XG5pbXBvcnQgZGF0YUNhY2hlIGZyb20gJy4vY2FjaGUnO1xuXG5jb25zdCBzdG9yZSA9IHt9O1xuc3RvcmFnZS5iYXNlLnNldERhdGFDYWNoZShkYXRhQ2FjaGUpO1xuc3RvcmFnZS5zY3JpcHQub25EdW1wID0gKGl0ZW0pID0+IHtcbiAgc3RvcmUuc2NyaXB0TWFwW2l0ZW0ucHJvcHMuaWRdID0gaXRlbTtcbn07XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgQ2hlY2tQb3NpdGlvbjogc29ydFNjcmlwdHMsXG4gIENoZWNrUmVtb3ZlOiBjaGVja1JlbW92ZSxcbiAgLyoqIEByZXR1cm4ge1ZNU2NyaXB0fSAqL1xuICBHZXRTY3JpcHQ6IGdldFNjcmlwdCxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8eyBpdGVtczogVk1TY3JpcHRbXSwgdmFsdWVzPyB9Pn0gKi9cbiAgYXN5bmMgRXhwb3J0WmlwKHsgdmFsdWVzIH0pIHtcbiAgICBjb25zdCBzY3JpcHRzID0gZ2V0U2NyaXB0cygpO1xuICAgIGNvbnN0IGlkcyA9IHNjcmlwdHMubWFwKGdldFByb3BzSWQpO1xuICAgIGNvbnN0IGNvZGVNYXAgPSBhd2FpdCBzdG9yYWdlLmNvZGUuZ2V0TXVsdGkoaWRzKTtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHNjcmlwdHMubWFwKHNjcmlwdCA9PiAoeyBzY3JpcHQsIGNvZGU6IGNvZGVNYXBbc2NyaXB0LnByb3BzLmlkXSB9KSksXG4gICAgICB2YWx1ZXM6IHZhbHVlcyA/IGF3YWl0IHN0b3JhZ2UudmFsdWUuZ2V0TXVsdGkoaWRzKSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSAqL1xuICBHZXRTY3JpcHRDb2RlKGlkKSB7XG4gICAgcmV0dXJuIHN0b3JhZ2UuY29kZS5nZXRPbmUoaWQpO1xuICB9LFxuICBHZXRTY3JpcHRWZXIob3B0cykge1xuICAgIGNvbnN0IHNjcmlwdCA9IGdldFNjcmlwdChvcHRzKTtcbiAgICByZXR1cm4gc2NyaXB0ICYmICFzY3JpcHQuY29uZmlnLnJlbW92ZWRcbiAgICAgID8gc2NyaXB0Lm1ldGEudmVyc2lvblxuICAgICAgOiBudWxsO1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gKi9cbiAgTWFya1JlbW92ZWQoeyBpZCwgcmVtb3ZlZCB9KSB7XG4gICAgcmV0dXJuIHVwZGF0ZVNjcmlwdEluZm8oaWQsIHtcbiAgICAgIGNvbmZpZzogeyByZW1vdmVkOiByZW1vdmVkID8gMSA6IDAgfSxcbiAgICAgIHByb3BzOiB7IGxhc3RNb2RpZmllZDogRGF0ZS5ub3coKSB9LFxuICAgIH0pO1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fSAqL1xuICBNb3ZlKHsgaWQsIG9mZnNldCB9KSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZ2V0U2NyaXB0QnlJZChpZCk7XG4gICAgY29uc3QgaW5kZXggPSBzdG9yZS5zY3JpcHRzLmluZGV4T2Yoc2NyaXB0KTtcbiAgICBzdG9yZS5zY3JpcHRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc3RvcmUuc2NyaXB0cy5zcGxpY2UoaW5kZXggKyBvZmZzZXQsIDAsIHNjcmlwdCk7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVBvc2l0aW9uKCk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSAqL1xuICBhc3luYyBSZW1vdmVTY3JpcHQoaWQpIHtcbiAgICBjb25zdCBpID0gc3RvcmUuc2NyaXB0cy5pbmRleE9mKGdldFNjcmlwdEJ5SWQoaWQpKTtcbiAgICBpZiAoaSA+PSAwKSB7XG4gICAgICBzdG9yZS5zY3JpcHRzLnNwbGljZShpLCAxKTtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgc3RvcmFnZS5zY3JpcHQucmVtb3ZlKGlkKSxcbiAgICAgICAgc3RvcmFnZS5jb2RlLnJlbW92ZShpZCksXG4gICAgICAgIHN0b3JhZ2UudmFsdWUucmVtb3ZlKGlkKSxcbiAgICAgIF0pO1xuICAgIH1cbiAgICByZXR1cm4gc2VuZENtZCgnUmVtb3ZlU2NyaXB0JywgaWQpO1xuICB9LFxuICBQYXJzZU1ldGE6IHBhcnNlTWV0YSxcbiAgUGFyc2VTY3JpcHQ6IHBhcnNlU2NyaXB0LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gKi9cbiAgVXBkYXRlU2NyaXB0SW5mbyh7IGlkLCBjb25maWcsIGN1c3RvbSB9KSB7XG4gICAgcmV0dXJuIHVwZGF0ZVNjcmlwdEluZm8oaWQsIHtcbiAgICAgIGNvbmZpZyxcbiAgICAgIGN1c3RvbSxcbiAgICAgIHByb3BzOiB7IGxhc3RNb2RpZmllZDogRGF0ZS5ub3coKSB9LFxuICAgIH0pO1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fSAqL1xuICBWYWN1dW06IHZhY3V1bSxcbn0pO1xuXG5wcmVJbml0aWFsaXplLnB1c2goYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IHZlcnNpb246IGxhc3RWZXJzaW9uIH0gPSBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCd2ZXJzaW9uJyk7XG4gIGNvbnN0IHZlcnNpb24gPSBwcm9jZXNzLmVudi5WTV9WRVI7XG4gIGlmICghbGFzdFZlcnNpb24pIGF3YWl0IHBhdGNoREIoKTtcbiAgaWYgKHZlcnNpb24gIT09IGxhc3RWZXJzaW9uKSBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgdmVyc2lvbiB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcbiAgY29uc3Qgc2NyaXB0cyA9IFtdO1xuICBjb25zdCBzdG9yZUluZm8gPSB7XG4gICAgaWQ6IDAsXG4gICAgcG9zaXRpb246IDAsXG4gIH07XG4gIGNvbnN0IGlkTWFwID0ge307XG4gIGNvbnN0IHVyaU1hcCA9IHt9O1xuICBjb25zdCBtb2RzID0gW107XG4gIGNvbnN0IHJlc1VybHMgPSBbXTtcbiAgLyoqIEB0aGlzIFZNU2NyaXB0Q3VzdG9tLnBhdGhNYXAgKi9cbiAgY29uc3QgcmVtZW1iZXJVcmwgPSBmdW5jdGlvbiBfKHVybCkgeyByZXNVcmxzLnB1c2godGhpc1t1cmxdIHx8IHVybCk7IH07XG4gIGRhdGE6OmZvckVhY2hFbnRyeSgoW2tleSwgc2NyaXB0XSkgPT4ge1xuICAgIGRhdGFDYWNoZS5wdXQoa2V5LCBzY3JpcHQpO1xuICAgIGlmIChrZXkuc3RhcnRzV2l0aChzdG9yYWdlLnNjcmlwdC5wcmVmaXgpKSB7XG4gICAgICAvLyB7XG4gICAgICAvLyAgIG1ldGEsXG4gICAgICAvLyAgIGN1c3RvbSxcbiAgICAgIC8vICAgcHJvcHM6IHsgaWQsIHBvc2l0aW9uLCB1cmkgfSxcbiAgICAgIC8vICAgY29uZmlnOiB7IGVuYWJsZWQsIHNob3VsZFVwZGF0ZSB9LFxuICAgICAgLy8gfVxuICAgICAgY29uc3QgaWQgPSBnZXRJbnQoa2V5LnNsaWNlKHN0b3JhZ2Uuc2NyaXB0LnByZWZpeC5sZW5ndGgpKTtcbiAgICAgIGlmICghaWQgfHwgaWRNYXBbaWRdKSB7XG4gICAgICAgIC8vIElEIGNvbmZsaWN0cyFcbiAgICAgICAgLy8gU2hvdWxkIG5vdCBoYXBwZW4sIGRpc2NhcmQgZHVwbGljYXRlcy5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWRNYXBbaWRdID0gc2NyaXB0O1xuICAgICAgY29uc3QgdXJpID0gZ2V0TmFtZVVSSShzY3JpcHQpO1xuICAgICAgaWYgKHVyaU1hcFt1cmldKSB7XG4gICAgICAgIC8vIE5hbWVzcGFjZSBjb25mbGljdHMhXG4gICAgICAgIC8vIFNob3VsZCBub3QgaGFwcGVuLCBkaXNjYXJkIGR1cGxpY2F0ZXMuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHVyaU1hcFt1cmldID0gc2NyaXB0O1xuICAgICAgc2NyaXB0LnByb3BzID0ge1xuICAgICAgICAuLi5zY3JpcHQucHJvcHMsXG4gICAgICAgIGlkLFxuICAgICAgICB1cmksXG4gICAgICB9O1xuICAgICAgc2NyaXB0LmN1c3RvbSA9IHtcbiAgICAgICAgLi4uZ2V0RGVmYXVsdEN1c3RvbSgpLFxuICAgICAgICAuLi5zY3JpcHQuY3VzdG9tLFxuICAgICAgfTtcbiAgICAgIHN0b3JlSW5mby5pZCA9IE1hdGgubWF4KHN0b3JlSW5mby5pZCwgaWQpO1xuICAgICAgc3RvcmVJbmZvLnBvc2l0aW9uID0gTWF0aC5tYXgoc3RvcmVJbmZvLnBvc2l0aW9uLCBnZXRJbnQoc2NyaXB0LnByb3BzLnBvc2l0aW9uKSk7XG4gICAgICBzY3JpcHRzLnB1c2goc2NyaXB0KTtcbiAgICAgIC8vIGxpc3RpbmcgYWxsIGtub3duIHJlc291cmNlIHVybHMgaW4gb3JkZXIgdG8gcmVtb3ZlIHVudXNlZCBtb2Qga2V5c1xuICAgICAgY29uc3Qge1xuICAgICAgICBjdXN0b206IHsgcGF0aE1hcCA9IHt9IH0gPSB7fSxcbiAgICAgICAgbWV0YSA9IHNjcmlwdC5tZXRhID0ge30sXG4gICAgICB9ID0gc2NyaXB0O1xuICAgICAgbWV0YS5ncmFudCA9IFsuLi5uZXcgU2V0KG1ldGEuZ3JhbnQgfHwgW10pXTsgLy8gZGVkdXBsaWNhdGVcbiAgICAgIG1ldGEucmVxdWlyZT8uZm9yRWFjaChyZW1lbWJlclVybCwgcGF0aE1hcCk7XG4gICAgICBPYmplY3QudmFsdWVzKG1ldGEucmVzb3VyY2VzIHx8IHt9KS5mb3JFYWNoKHJlbWVtYmVyVXJsLCBwYXRoTWFwKTtcbiAgICAgIHBhdGhNYXA6OnJlbWVtYmVyVXJsKG1ldGEuaWNvbik7XG4gICAgfSBlbHNlIGlmIChrZXkuc3RhcnRzV2l0aChzdG9yYWdlLm1vZC5wcmVmaXgpKSB7XG4gICAgICBtb2RzLnB1c2goa2V5LnNsaWNlKHN0b3JhZ2UubW9kLnByZWZpeC5sZW5ndGgpKTtcbiAgICB9XG4gIH0pO1xuICBzdG9yYWdlLm1vZC5yZW1vdmVNdWx0aShtb2RzLmZpbHRlcih1cmwgPT4gIXJlc1VybHMuaW5jbHVkZXModXJsKSkpO1xuICBPYmplY3QuYXNzaWduKHN0b3JlLCB7XG4gICAgc2NyaXB0cyxcbiAgICBzdG9yZUluZm8sXG4gICAgc2NyaXB0TWFwOiBzY3JpcHRzLnJlZHVjZSgobWFwLCBpdGVtKSA9PiB7XG4gICAgICBtYXBbaXRlbS5wcm9wcy5pZF0gPSBpdGVtO1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCB7fSksXG4gIH0pO1xuICAvLyBTd2l0Y2ggZGVmYXVsdEluamVjdEludG8gZnJvbSBgcGFnZWAgdG8gYGF1dG9gIHdoZW4gdXBncmFkaW5nIFZNMi4xMi43IG9yIG9sZGVyXG4gIGlmICh2ZXJzaW9uICE9PSBsYXN0VmVyc2lvblxuICAmJiBJU19GSVJFRk9YXG4gICYmIGRhdGEub3B0aW9ucz8uZGVmYXVsdEluamVjdEludG8gPT09IElOSkVDVF9QQUdFXG4gICYmIGNvbXBhcmVWZXJzaW9uKGxhc3RWZXJzaW9uLCAnMi4xMi43JykgPD0gMCkge1xuICAgIHNldE9wdGlvbignZGVmYXVsdEluamVjdEludG8nLCBJTkpFQ1RfQVVUTyk7XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgY29uc29sZS5sb2coJ3N0b3JlOicsIHN0b3JlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH1cbiAgdmFjdXVtKGRhdGEpO1xuICByZXR1cm4gc29ydFNjcmlwdHMoKTtcbn0pO1xuXG4vKiogQHJldHVybiB7bnVtYmVyfSAqL1xuZnVuY3Rpb24gZ2V0SW50KHZhbCkge1xuICByZXR1cm4gK3ZhbCB8fCAwO1xufVxuXG4vKiogQHJldHVybiB7P251bWJlcn0gKi9cbmZ1bmN0aW9uIGdldFByb3BzSWQoc2NyaXB0KSB7XG4gIHJldHVybiBzY3JpcHQ/LnByb3BzLmlkO1xufVxuXG4vKiogQHJldHVybiB7dm9pZH0gKi9cbmZ1bmN0aW9uIHVwZGF0ZUxhc3RNb2RpZmllZCgpIHtcbiAgc2V0T3B0aW9uKCdsYXN0TW9kaWZpZWQnLCBEYXRlLm5vdygpKTtcbn1cblxuLyoqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn0gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBub3JtYWxpemVQb3NpdGlvbigpIHtcbiAgY29uc3QgdXBkYXRlcyA9IHN0b3JlLnNjcmlwdHMuZmlsdGVyKCh7IHByb3BzIH0sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBpbmRleCArIDE7XG4gICAgY29uc3QgcmVzID0gcHJvcHMucG9zaXRpb24gIT09IHBvc2l0aW9uO1xuICAgIGlmIChyZXMpIHByb3BzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgcmV0dXJuIHJlcztcbiAgfSk7XG4gIHN0b3JlLnN0b3JlSW5mby5wb3NpdGlvbiA9IHN0b3JlLnNjcmlwdHMubGVuZ3RoO1xuICBpZiAodXBkYXRlcy5sZW5ndGgpIHtcbiAgICBhd2FpdCBzdG9yYWdlLnNjcmlwdC5kdW1wKHVwZGF0ZXMpO1xuICAgIHVwZGF0ZUxhc3RNb2RpZmllZCgpO1xuICB9XG4gIHJldHVybiB1cGRhdGVzLmxlbmd0aDtcbn1cblxuLyoqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn0gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzb3J0U2NyaXB0cygpIHtcbiAgc3RvcmUuc2NyaXB0cy5zb3J0KChhLCBiKSA9PiBnZXRJbnQoYS5wcm9wcy5wb3NpdGlvbikgLSBnZXRJbnQoYi5wcm9wcy5wb3NpdGlvbikpO1xuICBjb25zdCBjaGFuZ2VkID0gYXdhaXQgbm9ybWFsaXplUG9zaXRpb24oKTtcbiAgc2VuZENtZCgnU2NyaXB0c1VwZGF0ZWQnLCBudWxsKTtcbiAgcmV0dXJuIGNoYW5nZWQ7XG59XG5cbi8qKiBAcmV0dXJuIHs/Vk1TY3JpcHR9ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyaXB0QnlJZChpZCkge1xuICByZXR1cm4gc3RvcmUuc2NyaXB0TWFwW2lkXTtcbn1cblxuLyoqIEByZXR1cm4gez9WTVNjcmlwdH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHQoeyBpZCwgdXJpLCBtZXRhIH0pIHtcbiAgbGV0IHNjcmlwdDtcbiAgaWYgKGlkKSB7XG4gICAgc2NyaXB0ID0gZ2V0U2NyaXB0QnlJZChpZCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCF1cmkpIHVyaSA9IGdldE5hbWVVUkkoeyBtZXRhLCBpZDogJ0BAc2hvdWxkLWhhdmUtbmFtZScgfSk7XG4gICAgc2NyaXB0ID0gc3RvcmUuc2NyaXB0cy5maW5kKCh7IHByb3BzIH0pID0+IHVyaSA9PT0gcHJvcHMudXJpKTtcbiAgfVxuICByZXR1cm4gc2NyaXB0O1xufVxuXG4vKiogQHJldHVybiB7Vk1TY3JpcHRbXX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHRzKCkge1xuICByZXR1cm4gc3RvcmUuc2NyaXB0cy5maWx0ZXIoc2NyaXB0ID0+ICFzY3JpcHQuY29uZmlnLnJlbW92ZWQpO1xufVxuXG4vKipcbiAqIEBkZXNjIExvYWQgdmFsdWVzIGZvciBiYXRjaCB1cGRhdGVzLlxuICogQHBhcmFtIHtudW1iZXJbXX0gaWRzXG4gKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZVN0b3Jlc0J5SWRzKGlkcykge1xuICByZXR1cm4gc3RvcmFnZS52YWx1ZS5nZXRNdWx0aShpZHMpO1xufVxuXG4vKipcbiAqIEBkZXNjIER1bXAgdmFsdWVzIGZvciBiYXRjaCB1cGRhdGVzLlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlRGljdCB7IGlkMTogdmFsdWUxLCBpZDI6IHZhbHVlMiwgLi4uIH1cbiAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGR1bXBWYWx1ZVN0b3Jlcyh2YWx1ZURpY3QpIHtcbiAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSBjb25zb2xlLmluZm8oJ1VwZGF0ZSB2YWx1ZSBzdG9yZXMnLCB2YWx1ZURpY3QpO1xuICBhd2FpdCBzdG9yYWdlLnZhbHVlLmR1bXAodmFsdWVEaWN0KTtcbiAgcmV0dXJuIHZhbHVlRGljdDtcbn1cblxuZXhwb3J0IGNvbnN0IEVOVl9DQUNIRV9LRVlTID0gJ2NhY2hlS2V5cyc7XG5leHBvcnQgY29uc3QgRU5WX1JFUV9LRVlTID0gJ3JlcUtleXMnO1xuZXhwb3J0IGNvbnN0IEVOVl9WQUxVRV9JRFMgPSAndmFsdWVJZHMnO1xuY29uc3QgR01WQUxVRVNfUkUgPSAvXkdNW18uXShsaXN0VmFsdWVzfChbZ3NdZXR8ZGVsZXRlKVZhbHVlKSQvO1xuY29uc3QgUlVOX0FUX1JFID0gL15kb2N1bWVudC0oc3RhcnR8Ym9keXxlbmR8aWRsZSkkLztcbi8qKlxuICogQGRlc2MgR2V0IHNjcmlwdHMgdG8gYmUgaW5qZWN0ZWQgdG8gcGFnZSB3aXRoIHNwZWNpZmljIFVSTC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNjcmlwdHNCeVVSTCh1cmwsIGlzVG9wKSB7XG4gIGNvbnN0IGFsbFNjcmlwdHMgPSB0ZXN0QmxhY2tsaXN0KHVybClcbiAgICA/IFtdXG4gICAgOiBzdG9yZS5zY3JpcHRzLmZpbHRlcihzY3JpcHQgPT4gKFxuICAgICAgIXNjcmlwdC5jb25maWcucmVtb3ZlZFxuICAgICAgJiYgKGlzVG9wIHx8ICEoc2NyaXB0LmN1c3RvbS5ub2ZyYW1lcyA/PyBzY3JpcHQubWV0YS5ub2ZyYW1lcykpXG4gICAgICAmJiB0ZXN0U2NyaXB0KHVybCwgc2NyaXB0KVxuICAgICkpO1xuICBjb25zdCBkaXNhYmxlZElkcyA9IFtdO1xuICAvKiogQG5hbWVzcGFjZSBWTVNjcmlwdEJ5VXJsRGF0YSAqL1xuICBjb25zdCBbZW52U3RhcnQsIGVudkRlbGF5ZWRdID0gWzAsIDFdLm1hcCgoKSA9PiAoe1xuICAgIGlkczogW10sXG4gICAgLyoqIEB0eXBlIHsoVk1TY3JpcHQgJiBWTUluamVjdGVkU2NyaXB0KVtdfSAqL1xuICAgIHNjcmlwdHM6IFtdLFxuICAgIFtFTlZfQ0FDSEVfS0VZU106IFtdLFxuICAgIFtFTlZfUkVRX0tFWVNdOiBbXSxcbiAgICBbRU5WX1ZBTFVFX0lEU106IFtdLFxuICB9KSk7XG4gIGFsbFNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gc2NyaXB0LnByb3BzO1xuICAgIGlmICghc2NyaXB0LmNvbmZpZy5lbmFibGVkKSB7XG4gICAgICBkaXNhYmxlZElkcy5wdXNoKGlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBtZXRhLCBjdXN0b20gfSA9IHNjcmlwdDtcbiAgICBjb25zdCB7IHBhdGhNYXAgPSBidWlsZFBhdGhNYXAoc2NyaXB0KSB9ID0gY3VzdG9tO1xuICAgIGNvbnN0IHJ1bkF0ID0gYCR7Y3VzdG9tLnJ1bkF0IHx8IG1ldGEucnVuQXQgfHwgJyd9YC5tYXRjaChSVU5fQVRfUkUpPy5bMV0gfHwgJ2VuZCc7XG4gICAgY29uc3QgZW52ID0gcnVuQXQgPT09ICdzdGFydCcgfHwgcnVuQXQgPT09ICdib2R5JyA/IGVudlN0YXJ0IDogZW52RGVsYXllZDtcbiAgICBlbnYuaWRzLnB1c2goaWQpO1xuICAgIGlmIChtZXRhLmdyYW50LnNvbWUoR01WQUxVRVNfUkUudGVzdCwgR01WQUxVRVNfUkUpKSB7XG4gICAgICBlbnZbRU5WX1ZBTFVFX0lEU10ucHVzaChpZCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgW2xpc3QsIG5hbWVdIG9mIFtcbiAgICAgIFttZXRhLnJlcXVpcmUsIEVOVl9SRVFfS0VZU10sXG4gICAgICBbT2JqZWN0LnZhbHVlcyhtZXRhLnJlc291cmNlcyksIEVOVl9DQUNIRV9LRVlTXSxcbiAgICBdKSB7XG4gICAgICBsaXN0LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAga2V5ID0gcGF0aE1hcFtrZXldIHx8IGtleTtcbiAgICAgICAgaWYgKCFlbnZTdGFydFtuYW1lXS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgZW52W25hbWVdLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiBAbmFtZXNwYWNlIFZNSW5qZWN0ZWRTY3JpcHQgKi9cbiAgICBlbnYuc2NyaXB0cy5wdXNoKHsgLi4uc2NyaXB0LCBydW5BdCB9KTtcbiAgfSk7XG4gIGlmIChlbnZEZWxheWVkLmlkcy5sZW5ndGgpIHtcbiAgICBlbnZEZWxheWVkLnByb21pc2UgPSByZWFkRW52aXJvbm1lbnREYXRhKGVudkRlbGF5ZWQpO1xuICB9XG4gIC8qKiBAbmFtZXNwYWNlIFZNU2NyaXB0QnlVcmxEYXRhICovXG4gIHJldHVybiB7XG4gICAgLi4uZW52U3RhcnQsXG4gICAgLi4uYXdhaXQgcmVhZEVudmlyb25tZW50RGF0YShlbnZTdGFydCksXG4gICAgZGlzYWJsZWRJZHMsXG4gICAgZW52RGVsYXllZCxcbiAgfTtcbn1cblxuLyoqXG4gKiBPYmplY3Qga2V5cyA9PSBhcmVhcyBpbiBgc3RvcmFnZWAgbW9kdWxlLlxuICogQG5hbWVzcGFjZSBWTVNjcmlwdEJ5VXJsRGF0YVxuICovXG5jb25zdCBTVE9SQUdFX1JPVVRFUyA9IE9iamVjdC5lbnRyaWVzKHtcbiAgY2FjaGU6IEVOVl9DQUNIRV9LRVlTLFxuICBjb2RlOiAnaWRzJyxcbiAgcmVxdWlyZTogRU5WX1JFUV9LRVlTLFxuICB2YWx1ZTogRU5WX1ZBTFVFX0lEUyxcbn0pO1xuY29uc3QgcmV0cmllZFN0b3JhZ2VLZXlzID0ge307XG5cbmFzeW5jIGZ1bmN0aW9uIHJlYWRFbnZpcm9ubWVudERhdGEoZW52LCBpc1JldHJ5KSB7XG4gIGNvbnN0IGtleXMgPSBbXTtcbiAgU1RPUkFHRV9ST1VURVMuZm9yRWFjaCgoW2FyZWEsIHNyY0lkc10pID0+IHtcbiAgICBlbnZbc3JjSWRzXS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGtleXMucHVzaChzdG9yYWdlW2FyZWFdLmdldEtleShpZCkpO1xuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHN0b3JhZ2UuYmFzZS5nZXRNdWx0aShrZXlzKTtcbiAgZm9yIChjb25zdCBbYXJlYSwgc3JjSWRzXSBvZiBTVE9SQUdFX1JPVVRFUykge1xuICAgIGVudlthcmVhXSA9IHt9O1xuICAgIGZvciAoY29uc3QgaWQgb2YgZW52W3NyY0lkc10pIHtcbiAgICAgIGNvbnN0IHZhbCA9IGRhdGFbc3RvcmFnZVthcmVhXS5nZXRLZXkoaWQpXTtcbiAgICAgIGVudlthcmVhXVtpZF0gPSB2YWw7XG4gICAgICBpZiAodmFsID09IG51bGwgJiYgYXJlYSAhPT0gJ3ZhbHVlJyAmJiByZXRyaWVkU3RvcmFnZUtleXNbYXJlYSArIGlkXSAhPT0gMikge1xuICAgICAgICBjb25zdCBlcnIgPSBgVGhlIFwiJHthcmVhfVwiIHN0b3JhZ2UgaXMgbWlzc2luZyBcIiR7aWR9XCIhYDtcbiAgICAgICAgY29uc3QgZXJyMiA9ICdWYWN1dW1pbmcgZGlkIG5vdCBoZWxwLiBQbGVhc2UgcmVpbnN0YWxsIHRoZSBhZmZlY3RlZCBzY3JpcHRzLic7XG4gICAgICAgIHJldHJpZWRTdG9yYWdlS2V5c1thcmVhICsgaWRdID0gaXNSZXRyeSA/IDIgOiAxO1xuICAgICAgICBpZiAoIWlzUmV0cnkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZXJyLCAnVmFjdXVtaW5nLi4uJyk7XG4gICAgICAgICAgaWYgKGF3YWl0IHZhY3V1bSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhZEVudmlyb25tZW50RGF0YShlbnYsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmVycm9yKGVyciwgZXJyMik7XG4gICAgICAgIG5vdGlmeSh7IHRpdGxlOiBlcnIsIGJvZHk6IGVycjIgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBlbnY7XG59XG5cbi8qKlxuICogQGRlc2MgR2V0IGRhdGEgZm9yIGRhc2hib2FyZC5cbiAqIEByZXR1cm4ge1Byb21pc2U8eyBzY3JpcHRzOiBWTVNjcmlwdFtdLCBjYWNoZTogT2JqZWN0IH0+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShpZHMpIHtcbiAgY29uc3Qgc2NyaXB0cyA9IGlkcyA/IGlkcy5tYXAoZ2V0U2NyaXB0QnlJZCkgOiBzdG9yZS5zY3JpcHRzO1xuICByZXR1cm4ge1xuICAgIHNjcmlwdHMsXG4gICAgY2FjaGU6IGF3YWl0IGdldEljb25DYWNoZShzY3JpcHRzKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0SWNvbkNhY2hlKHNjcmlwdHMpIHtcbiAgY29uc3QgaWNvblVybHMgPSBbXTtcbiAgc2NyaXB0cy5mb3JFYWNoKChzY3JpcHQpID0+IHtcbiAgICBjb25zdCB7IGljb24gfSA9IHNjcmlwdC5tZXRhO1xuICAgIGlmIChpc1JlbW90ZShpY29uKSkge1xuICAgICAgaWNvblVybHMucHVzaChzY3JpcHQuY3VzdG9tLnBhdGhNYXA/LltpY29uXSB8fCBpY29uKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaWNvblVybHMubGVuZ3RoXG4gICAgPyBzdG9yYWdlLmNhY2hlLmdldE11bHRpKGljb25VcmxzLCB1bmRlZmluZWQsIHN0b3JhZ2UuY2FjaGUubWFrZURhdGFVcmkpXG4gICAgOiB7fTtcbn1cblxuLyoqIEByZXR1cm4ge251bWJlcn0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JlbW92ZSh7IGZvcmNlIH0gPSB7fSkge1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICBjb25zdCB0b1JlbW92ZSA9IHN0b3JlLnNjcmlwdHMuZmlsdGVyKHNjcmlwdCA9PiBzY3JpcHQuY29uZmlnLnJlbW92ZWQgJiYgKFxuICAgIGZvcmNlIHx8IG5vdyAtIGdldEludChzY3JpcHQucHJvcHMubGFzdE1vZGlmaWVkKSA+IFRJTUVPVVRfV0VFS1xuICApKTtcbiAgaWYgKHRvUmVtb3ZlLmxlbmd0aCkge1xuICAgIHN0b3JlLnNjcmlwdHMgPSBzdG9yZS5zY3JpcHRzLmZpbHRlcihzY3JpcHQgPT4gIXNjcmlwdC5jb25maWcucmVtb3ZlZCk7XG4gICAgY29uc3QgaWRzID0gdG9SZW1vdmUubWFwKGdldFByb3BzSWQpO1xuICAgIHN0b3JhZ2Uuc2NyaXB0LnJlbW92ZU11bHRpKGlkcyk7XG4gICAgc3RvcmFnZS5jb2RlLnJlbW92ZU11bHRpKGlkcyk7XG4gICAgc3RvcmFnZS52YWx1ZS5yZW1vdmVNdWx0aShpZHMpO1xuICB9XG4gIHJldHVybiB0b1JlbW92ZS5sZW5ndGg7XG59XG5cbi8qKiBAcmV0dXJuIHtzdHJpbmd9ICovXG5mdW5jdGlvbiBnZXRVVUlEKCkge1xuICBjb25zdCBybmQgPSBuZXcgVWludDE2QXJyYXkoOCk7XG4gIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJuZCk7XG4gIC8vIHh4eHh4eHh4LXh4eHgtTXh4eC1OeHh4LXh4eHh4eHh4eHh4eFxuICAvLyBXZSdyZSB1c2luZyBVVUlEdjQgdmFyaWFudCAxIHNvIE49NCBhbmQgTT04XG4gIC8vIFNlZSBmb3JtYXRfdXVpZF92M29yNSBpbiBodHRwczovL3Rvb2xzLmlldGYub3JnL3JmYy9yZmM0MTIyLnR4dFxuICBybmRbM10gPSBybmRbM10gJiAweDBGRkYgfCAweDQwMDA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYml0d2lzZVxuICBybmRbNF0gPSBybmRbNF0gJiAweDNGRkYgfCAweDgwMDA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYml0d2lzZVxuICByZXR1cm4gJzAxLTItMy00LTU2NycucmVwbGFjZSgvXFxkL2csIGkgPT4gKHJuZFtpXSArIDB4MV8wMDAwKS50b1N0cmluZygxNikuc2xpY2UoLTQpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZNU2NyaXB0fSBzY3JpcHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlXG4gKiBAcmV0dXJuIHtQcm9taXNlPFZNU2NyaXB0W10+fVxuICovXG5hc3luYyBmdW5jdGlvbiBzYXZlU2NyaXB0KHNjcmlwdCwgY29kZSkge1xuICBjb25zdCBjb25maWcgPSBzY3JpcHQuY29uZmlnIHx8IHt9O1xuICBjb25maWcuZW5hYmxlZCA9IGdldEludChjb25maWcuZW5hYmxlZCk7XG4gIGNvbmZpZy5zaG91bGRVcGRhdGUgPSBnZXRJbnQoY29uZmlnLnNob3VsZFVwZGF0ZSk7XG4gIGNvbnN0IHByb3BzID0gc2NyaXB0LnByb3BzIHx8IHt9O1xuICBsZXQgb2xkU2NyaXB0O1xuICBpZiAoIXByb3BzLmlkKSB7XG4gICAgc3RvcmUuc3RvcmVJbmZvLmlkICs9IDE7XG4gICAgcHJvcHMuaWQgPSBzdG9yZS5zdG9yZUluZm8uaWQ7XG4gIH0gZWxzZSB7XG4gICAgb2xkU2NyaXB0ID0gc3RvcmUuc2NyaXB0TWFwW3Byb3BzLmlkXTtcbiAgfVxuICBwcm9wcy51cmkgPSBnZXROYW1lVVJJKHNjcmlwdCk7XG4gIHByb3BzLnV1aWQgPSBwcm9wcy51dWlkIHx8IGNyeXB0by5yYW5kb21VVUlEPy4oKSB8fCBnZXRVVUlEKCk7XG4gIC8vIERvIG5vdCBhbGxvdyBzY3JpcHQgd2l0aCBzYW1lIG5hbWUgYW5kIG5hbWVzcGFjZVxuICBpZiAoc3RvcmUuc2NyaXB0cy5zb21lKCh7IHByb3BzOiB7IGlkLCB1cmkgfSA9IHt9IH0pID0+IHByb3BzLmlkICE9PSBpZCAmJiBwcm9wcy51cmkgPT09IHVyaSkpIHtcbiAgICB0aHJvdyBpMThuKCdtc2dOYW1lc3BhY2VDb25mbGljdCcpO1xuICB9XG4gIGlmIChvbGRTY3JpcHQpIHtcbiAgICBzY3JpcHQuY29uZmlnID0geyAuLi5vbGRTY3JpcHQuY29uZmlnLCAuLi5jb25maWcgfTtcbiAgICBzY3JpcHQucHJvcHMgPSB7IC4uLm9sZFNjcmlwdC5wcm9wcywgLi4ucHJvcHMgfTtcbiAgICBjb25zdCBpbmRleCA9IHN0b3JlLnNjcmlwdHMuaW5kZXhPZihvbGRTY3JpcHQpO1xuICAgIHN0b3JlLnNjcmlwdHNbaW5kZXhdID0gc2NyaXB0O1xuICB9IGVsc2Uge1xuICAgIGlmICghcHJvcHMucG9zaXRpb24pIHtcbiAgICAgIHN0b3JlLnN0b3JlSW5mby5wb3NpdGlvbiArPSAxO1xuICAgICAgcHJvcHMucG9zaXRpb24gPSBzdG9yZS5zdG9yZUluZm8ucG9zaXRpb247XG4gICAgfSBlbHNlIGlmIChzdG9yZS5zdG9yZUluZm8ucG9zaXRpb24gPCBwcm9wcy5wb3NpdGlvbikge1xuICAgICAgc3RvcmUuc3RvcmVJbmZvLnBvc2l0aW9uID0gcHJvcHMucG9zaXRpb247XG4gICAgfVxuICAgIHNjcmlwdC5jb25maWcgPSBjb25maWc7XG4gICAgc2NyaXB0LnByb3BzID0gcHJvcHM7XG4gICAgc3RvcmUuc2NyaXB0cy5wdXNoKHNjcmlwdCk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICBzdG9yYWdlLnNjcmlwdC5kdW1wKHNjcmlwdCksXG4gICAgc3RvcmFnZS5jb2RlLnNldChwcm9wcy5pZCwgY29kZSksXG4gIF0pO1xufVxuXG4vKiogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTY3JpcHRJbmZvKGlkLCBkYXRhKSB7XG4gIGNvbnN0IHNjcmlwdCA9IHN0b3JlLnNjcmlwdE1hcFtpZF07XG4gIGlmICghc2NyaXB0KSB0aHJvdyBudWxsO1xuICBzY3JpcHQucHJvcHMgPSB7IC4uLnNjcmlwdC5wcm9wcywgLi4uZGF0YS5wcm9wcyB9O1xuICBzY3JpcHQuY29uZmlnID0geyAuLi5zY3JpcHQuY29uZmlnLCAuLi5kYXRhLmNvbmZpZyB9O1xuICBzY3JpcHQuY3VzdG9tID0geyAuLi5zY3JpcHQuY3VzdG9tLCAuLi5kYXRhLmN1c3RvbSB9O1xuICBhd2FpdCBzdG9yYWdlLnNjcmlwdC5kdW1wKHNjcmlwdCk7XG4gIHJldHVybiBzZW5kQ21kKENNRF9TQ1JJUFRfVVBEQVRFLCB7IHdoZXJlOiB7IGlkIH0sIHVwZGF0ZTogc2NyaXB0IH0pO1xufVxuXG4vKiogQHJldHVybiB7UHJvbWlzZTx7IGlzTmV3PywgdXBkYXRlLCB3aGVyZSB9Pn0gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJzZVNjcmlwdChzcmMpIHtcbiAgY29uc3QgbWV0YSA9IHBhcnNlTWV0YShzcmMuY29kZSk7XG4gIGlmICghbWV0YS5uYW1lKSB0aHJvdyBgJHtpMThuKCdtc2dJbnZhbGlkU2NyaXB0Jyl9XFxuJHtpMThuKCdsYWJlbE5vTmFtZScpfWA7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICB1cGRhdGU6IHtcbiAgICAgIG1lc3NhZ2U6IHNyYy5tZXNzYWdlID09IG51bGwgPyBpMThuKCdtc2dVcGRhdGVkJykgOiBzcmMubWVzc2FnZSB8fCAnJyxcbiAgICB9LFxuICB9O1xuICBsZXQgY21kID0gQ01EX1NDUklQVF9VUERBVEU7XG4gIGxldCBzY3JpcHQ7XG4gIGNvbnN0IG9sZFNjcmlwdCA9IGF3YWl0IGdldFNjcmlwdCh7IGlkOiBzcmMuaWQsIG1ldGEgfSk7XG4gIGlmIChvbGRTY3JpcHQpIHtcbiAgICBpZiAoc3JjLmlzTmV3KSB0aHJvdyBpMThuKCdtc2dOYW1lc3BhY2VDb25mbGljdCcpO1xuICAgIHNjcmlwdCA9IHsgLi4ub2xkU2NyaXB0IH07XG4gIH0gZWxzZSB7XG4gICAgKHsgc2NyaXB0IH0gPSBuZXdTY3JpcHQoKSk7XG4gICAgY21kID0gQ01EX1NDUklQVF9BREQ7XG4gICAgcmVzdWx0LmlzTmV3ID0gdHJ1ZTtcbiAgICByZXN1bHQudXBkYXRlLm1lc3NhZ2UgPSBpMThuKCdtc2dJbnN0YWxsZWQnKTtcbiAgfVxuICBzY3JpcHQuY29uZmlnID0ge1xuICAgIC4uLnNjcmlwdC5jb25maWcsXG4gICAgLi4uc3JjLmNvbmZpZyxcbiAgICByZW1vdmVkOiAwLCAvLyBmb3JjZSByZXNldCBgcmVtb3ZlZGAgc2luY2UgdGhpcyBpcyBhbiBpbnN0YWxsYXRpb25cbiAgfTtcbiAgc2NyaXB0LmN1c3RvbSA9IHtcbiAgICAuLi5zY3JpcHQuY3VzdG9tLFxuICAgIC4uLnNyYy5jdXN0b20sXG4gIH07XG4gIHNjcmlwdC5wcm9wcyA9IHtcbiAgICAuLi5zY3JpcHQucHJvcHMsXG4gICAgbGFzdE1vZGlmaWVkOiBEYXRlLm5vdygpLFxuICAgIGxhc3RVcGRhdGVkOiBEYXRlLm5vdygpLFxuICAgIC4uLnNyYy5wcm9wcyxcbiAgfTtcbiAgc2NyaXB0Lm1ldGEgPSBtZXRhO1xuICBpZiAoIW1ldGEuaG9tZXBhZ2VVUkwgJiYgIXNjcmlwdC5jdXN0b20uaG9tZXBhZ2VVUkwgJiYgaXNSZW1vdGUoc3JjLmZyb20pKSB7XG4gICAgc2NyaXB0LmN1c3RvbS5ob21lcGFnZVVSTCA9IHNyYy5mcm9tO1xuICB9XG4gIGlmIChpc1JlbW90ZShzcmMudXJsKSkgc2NyaXB0LmN1c3RvbS5sYXN0SW5zdGFsbFVSTCA9IHNyYy51cmw7XG4gIGlmIChzcmMucG9zaXRpb24pIHNjcmlwdC5wcm9wcy5wb3NpdGlvbiA9ICtzcmMucG9zaXRpb247XG4gIGJ1aWxkUGF0aE1hcChzY3JpcHQsIHNyYy51cmwpO1xuICBhd2FpdCBzYXZlU2NyaXB0KHNjcmlwdCwgc3JjLmNvZGUpO1xuICBmZXRjaFJlc291cmNlcyhzY3JpcHQsIHNyYyk7XG4gIE9iamVjdC5hc3NpZ24ocmVzdWx0LnVwZGF0ZSwgc2NyaXB0LCBzcmMudXBkYXRlKTtcbiAgcmVzdWx0LndoZXJlID0geyBpZDogc2NyaXB0LnByb3BzLmlkIH07XG4gIHNlbmRDbWQoY21kLCByZXN1bHQpO1xuICBwbHVnaW5FdmVudHMuZW1pdCgnc2NyaXB0Q2hhbmdlZCcsIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBAcmV0dXJuIHtPYmplY3R9ICovXG5mdW5jdGlvbiBidWlsZFBhdGhNYXAoc2NyaXB0LCBiYXNlKSB7XG4gIGNvbnN0IHsgbWV0YSB9ID0gc2NyaXB0O1xuICBjb25zdCBiYXNlVXJsID0gYmFzZSB8fCBzY3JpcHQuY3VzdG9tLmxhc3RJbnN0YWxsVVJMO1xuICBjb25zdCBwYXRoTWFwID0gYmFzZVVybCA/IFtcbiAgICAuLi5tZXRhLnJlcXVpcmUsXG4gICAgLi4uT2JqZWN0LnZhbHVlcyhtZXRhLnJlc291cmNlcyksXG4gICAgbWV0YS5pY29uLFxuICBdLnJlZHVjZSgobWFwLCBrZXkpID0+IHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBjb25zdCBmdWxsVXJsID0gZ2V0RnVsbFVybChrZXksIGJhc2VVcmwpO1xuICAgICAgaWYgKGZ1bGxVcmwgIT09IGtleSkgbWFwW2tleV0gPSBmdWxsVXJsO1xuICAgIH1cbiAgICByZXR1cm4gbWFwO1xuICB9LCB7fSkgOiB7fTtcbiAgc2NyaXB0LmN1c3RvbS5wYXRoTWFwID0gcGF0aE1hcDtcbiAgcmV0dXJuIHBhdGhNYXA7XG59XG5cbi8qKiBAcmV0dXJuIHtQcm9taXNlPD9zdHJpbmc+fSByZXNvbHZlcyB0byBlcnJvciB0ZXh0IGlmIGByZXNvdXJjZUNhY2hlYCBpcyBhYnNlbnQgKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFJlc291cmNlcyhzY3JpcHQsIHJlc291cmNlQ2FjaGUsIHJlcU9wdGlvbnMpIHtcbiAgY29uc3QgeyBjdXN0b206IHsgcGF0aE1hcCB9LCBtZXRhIH0gPSBzY3JpcHQ7XG4gIGNvbnN0IHNuYXRjaCA9ICh1cmwsIHR5cGUsIHZhbGlkYXRvcikgPT4ge1xuICAgIHVybCA9IHBhdGhNYXBbdXJsXSB8fCB1cmw7XG4gICAgY29uc3QgY29udGVudHMgPSByZXNvdXJjZUNhY2hlPy5bdHlwZV0/Llt1cmxdO1xuICAgIHJldHVybiBjb250ZW50cyAhPSBudWxsICYmICF2YWxpZGF0b3JcbiAgICAgID8gc3RvcmFnZVt0eXBlXS5zZXQodXJsLCBjb250ZW50cykgJiYgbnVsbFxuICAgICAgOiBzdG9yYWdlW3R5cGVdLmZldGNoKHVybCwgcmVxT3B0aW9ucywgdmFsaWRhdG9yKS5jYXRjaChlcnIgPT4gZXJyKTtcbiAgfTtcbiAgY29uc3QgZXJyb3JzID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIC4uLm1ldGEucmVxdWlyZS5tYXAodXJsID0+IHNuYXRjaCh1cmwsICdyZXF1aXJlJykpLFxuICAgIC4uLk9iamVjdC52YWx1ZXMobWV0YS5yZXNvdXJjZXMpLm1hcCh1cmwgPT4gc25hdGNoKHVybCwgJ2NhY2hlJykpLFxuICAgIGlzUmVtb3RlKG1ldGEuaWNvbikgJiYgc25hdGNoKG1ldGEuaWNvbiwgJ2NhY2hlJywgdmFsaWRhdGVJbWFnZSksXG4gIF0pO1xuICBpZiAoIXJlc291cmNlQ2FjaGU/Lmlnbm9yZURlcHNFcnJvcnMpIHtcbiAgICBjb25zdCBlcnJvciA9IGVycm9ycy5tYXAoZm9ybWF0SHR0cEVycm9yKTo6dHJ1ZUpvaW4oJ1xcbicpO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGkxOG4oJ21zZ0Vycm9yRmV0Y2hpbmdSZXNvdXJjZScpO1xuICAgICAgc2VuZENtZChDTURfU0NSSVBUX1VQREFURSwge1xuICAgICAgICB1cGRhdGU6IHsgZXJyb3IsIG1lc3NhZ2UgfSxcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNjcmlwdC5wcm9wcy5pZCB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYCR7bWVzc2FnZX1cXG4ke2Vycm9yfWA7XG4gICAgfVxuICB9XG59XG5cbi8qKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSByZXNvbHZlcyBvbiBzdWNjZXNzLCByZWplY3RzIG9uIGVycm9yICovXG5mdW5jdGlvbiB2YWxpZGF0ZUltYWdlKHVybCwgYnVmLCB0eXBlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgYmxvYlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2J1Zl0sIHsgdHlwZSB9KSk7XG4gICAgY29uc3Qgb25Eb25lID0gKGUpID0+IHtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoYmxvYlVybCk7XG4gICAgICBpZiAoZS50eXBlID09PSAnbG9hZCcpIHJlc29sdmUoKTtcbiAgICAgIGVsc2UgcmVqZWN0KGBJTUFHRV9FUlJPUjogJHt1cmx9YCk7XG4gICAgfTtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9IG9uRG9uZTtcbiAgICBpbWFnZS5vbmVycm9yID0gb25Eb25lO1xuICAgIGltYWdlLnNyYyA9IGJsb2JVcmw7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRIdHRwRXJyb3IoZSkge1xuICByZXR1cm4gZSAmJiBbZS5zdGF0dXMgJiYgYEhUVFAke2Uuc3RhdHVzfWAsIGUudXJsXTo6dHJ1ZUpvaW4oJyAnKSB8fCBlO1xufVxuXG5sZXQgX3ZhY3V1bWluZztcbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuICogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFjdXVtKGRhdGEpIHtcbiAgaWYgKF92YWN1dW1pbmcpIHJldHVybiBfdmFjdXVtaW5nO1xuICBsZXQgbnVtRml4ZXMgPSAwO1xuICBsZXQgcmVzb2x2ZVNlbGY7XG4gIF92YWN1dW1pbmcgPSBuZXcgUHJvbWlzZShyID0+IHsgcmVzb2x2ZVNlbGYgPSByOyB9KTtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGNvbnN0IHRvRmV0Y2ggPSBbXTtcbiAgY29uc3Qga2V5c1RvUmVtb3ZlID0gW107XG4gIGNvbnN0IHZhbHVlS2V5cyA9IHt9O1xuICBjb25zdCBjYWNoZUtleXMgPSB7fTtcbiAgY29uc3QgcmVxdWlyZUtleXMgPSB7fTtcbiAgY29uc3QgY29kZUtleXMgPSB7fTtcbiAgY29uc3QgbWFwcGluZ3MgPSBbXG4gICAgW3N0b3JhZ2UudmFsdWUsIHZhbHVlS2V5c10sXG4gICAgW3N0b3JhZ2UuY2FjaGUsIGNhY2hlS2V5c10sXG4gICAgW3N0b3JhZ2UucmVxdWlyZSwgcmVxdWlyZUtleXNdLFxuICAgIFtzdG9yYWdlLmNvZGUsIGNvZGVLZXlzXSxcbiAgXTtcbiAgaWYgKCFkYXRhKSBkYXRhID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xuICBkYXRhOjpmb3JFYWNoS2V5KChrZXkpID0+IHtcbiAgICBtYXBwaW5ncy5zb21lKChbc3Vic3RvcmUsIG1hcF0pID0+IHtcbiAgICAgIGNvbnN0IHsgcHJlZml4IH0gPSBzdWJzdG9yZTtcbiAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChwcmVmaXgpKSB7XG4gICAgICAgIC8vIC0xIGZvciB1bnRvdWNoZWQsIDEgZm9yIHRvdWNoZWQsIDIgZm9yIG1pc3NpbmdcbiAgICAgICAgbWFwW2tleS5zbGljZShwcmVmaXgubGVuZ3RoKV0gPSAtMTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCB0b3VjaCA9IChvYmosIGtleSwgc2NyaXB0SWQpID0+IHtcbiAgICBpZiAob2JqW2tleV0gPCAwKSB7XG4gICAgICBvYmpba2V5XSA9IDE7XG4gICAgfSBlbHNlIGlmICghb2JqW2tleV0pIHtcbiAgICAgIG9ialtrZXldID0gMiArIHNjcmlwdElkO1xuICAgIH1cbiAgfTtcbiAgc3RvcmUuc2NyaXB0cy5mb3JFYWNoKChzY3JpcHQpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBzY3JpcHQucHJvcHM7XG4gICAgdG91Y2goY29kZUtleXMsIGlkLCBpZCk7XG4gICAgdG91Y2godmFsdWVLZXlzLCBpZCwgaWQpO1xuICAgIGlmICghc2NyaXB0LmN1c3RvbS5wYXRoTWFwKSBidWlsZFBhdGhNYXAoc2NyaXB0KTtcbiAgICBjb25zdCB7IHBhdGhNYXAgfSA9IHNjcmlwdC5jdXN0b207XG4gICAgc2NyaXB0Lm1ldGEucmVxdWlyZS5mb3JFYWNoKCh1cmwpID0+IHtcbiAgICAgIHRvdWNoKHJlcXVpcmVLZXlzLCBwYXRoTWFwW3VybF0gfHwgdXJsLCBpZCk7XG4gICAgfSk7XG4gICAgc2NyaXB0Lm1ldGEucmVzb3VyY2VzOjpmb3JFYWNoVmFsdWUoKHVybCkgPT4ge1xuICAgICAgdG91Y2goY2FjaGVLZXlzLCBwYXRoTWFwW3VybF0gfHwgdXJsLCBpZCk7XG4gICAgfSk7XG4gICAgY29uc3QgeyBpY29uIH0gPSBzY3JpcHQubWV0YTtcbiAgICBpZiAoaXNSZW1vdGUoaWNvbikpIHtcbiAgICAgIGNvbnN0IGZ1bGxVcmwgPSBwYXRoTWFwW2ljb25dIHx8IGljb247XG4gICAgICB0b3VjaChjYWNoZUtleXMsIGZ1bGxVcmwsIGlkKTtcbiAgICB9XG4gIH0pO1xuICBtYXBwaW5ncy5mb3JFYWNoKChbc3Vic3RvcmUsIG1hcF0pID0+IHtcbiAgICBtYXA6OmZvckVhY2hFbnRyeSgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICAgIC8vIHJlZHVuZGFudCB2YWx1ZVxuICAgICAgICBrZXlzVG9SZW1vdmUucHVzaChzdWJzdG9yZS5nZXRLZXkoa2V5KSk7XG4gICAgICAgIG51bUZpeGVzICs9IDE7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID49IDIgJiYgc3Vic3RvcmUuZmV0Y2gpIHtcbiAgICAgICAgLy8gbWlzc2luZyByZXNvdXJjZVxuICAgICAgICBrZXlzVG9SZW1vdmUucHVzaChzdG9yYWdlLm1vZC5nZXRLZXkoa2V5KSk7XG4gICAgICAgIHRvRmV0Y2gucHVzaChzdWJzdG9yZS5mZXRjaChrZXkpLmNhdGNoKGVyciA9PiBgJHtcbiAgICAgICAgICBnZXRTY3JpcHROYW1lKGdldFNjcmlwdEJ5SWQodmFsdWUgLSAyKSlcbiAgICAgICAgfTogJHtcbiAgICAgICAgICBmb3JtYXRIdHRwRXJyb3IoZXJyKVxuICAgICAgICB9YCkpO1xuICAgICAgICBudW1GaXhlcyArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgaWYgKG51bUZpeGVzKSB7XG4gICAgYXdhaXQgc3RvcmFnZS5iYXNlLnJlbW92ZU11bHRpKGtleXNUb1JlbW92ZSk7IC8vIFJlbW92aW5nIGBtb2RgIGJlZm9yZSBmZXRjaGluZ1xuICAgIHJlc3VsdC5lcnJvcnMgPSAoYXdhaXQgUHJvbWlzZS5hbGwodG9GZXRjaCkpLmZpbHRlcihCb29sZWFuKTtcbiAgfVxuICBfdmFjdXVtaW5nID0gbnVsbDtcbiAgcmVzdWx0LmZpeGVzID0gbnVtRml4ZXM7XG4gIHJlc29sdmVTZWxmKHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBAdHlwZWRlZiBWTVNjcmlwdFxuICogQHByb3BlcnR5IHtWTVNjcmlwdENvbmZpZ30gY29uZmlnXG4gKiBAcHJvcGVydHkge1ZNU2NyaXB0Q3VzdG9tfSBjdXN0b21cbiAqIEBwcm9wZXJ0eSB7Vk1TY3JpcHRNZXRhfSBtZXRhXG4gKiBAcHJvcGVydHkge1ZNU2NyaXB0UHJvcHN9IHByb3BzXG4gKi9cbi8qKiBAdHlwZWRlZiBWTVNjcmlwdENvbmZpZyAqXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGVuYWJsZWQgLSBzdG9yZWQgYXMgMCBvciAxXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IHJlbW92ZWQgLSBzdG9yZWQgYXMgMCBvciAxXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IHNob3VsZFVwZGF0ZSAtIHN0b3JlZCBhcyAwIG9yIDFcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbiB8IG51bGx9IG5vdGlmeVVwZGF0ZXMgLSBzdG9yZWQgYXMgMCBvciAxIG9yIG51bGwgKGRlZmF1bHQpIHdoaWNoIG1lYW5zIFwidXNlIGdsb2JhbCBzZXR0aW5nXCJcbiAqL1xuLyoqIEB0eXBlZGVmIFZNU2NyaXB0Q3VzdG9tICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZG93bmxvYWRVUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBob21lcGFnZVVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhc3RJbnN0YWxsVVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXBkYXRlVVJMXG4gKiBAcHJvcGVydHkgeydhdXRvJyB8ICdwYWdlJyB8ICdjb250ZW50J30gaW5qZWN0SW50b1xuICogQHByb3BlcnR5IHtudWxsIHwgMSB8IDB9IG5vZnJhbWVzIC0gbnVsbCBvciBhYnNlbmNlID09IGRlZmF1bHQgKHNjcmlwdCdzIHZhbHVlKVxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZXhjbHVkZVxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZXhjbHVkZU1hdGNoXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBpbmNsdWRlXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtYXRjaFxuICogQHByb3BlcnR5IHtib29sZWFufSBvcmlnRXhjbHVkZVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcmlnRXhjbHVkZU1hdGNoXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9yaWdJbmNsdWRlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9yaWdNYXRjaFxuICogQHByb3BlcnR5IHtPYmplY3R9IHBhdGhNYXBcbiAqIEBwcm9wZXJ0eSB7Vk1TY3JpcHRSdW5BdH0gcnVuQXRcbiAqL1xuLyoqIEB0eXBlZGVmIFZNU2NyaXB0TWV0YSAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZGVzY3JpcHRpb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkb3dubG9hZFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZXhjbHVkZVxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZXhjbHVkZU1hdGNoXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBncmFudFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGhvbWVwYWdlVVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaWNvblxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gaW5jbHVkZVxuICogQHByb3BlcnR5IHsnYXV0bycgfCAncGFnZScgfCAnY29udGVudCd9IGluamVjdEludG9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IG1hdGNoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZVxuICogQHByb3BlcnR5IHtib29sZWFufSBub2ZyYW1lc1xuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gcmVxdWlyZVxuICogQHByb3BlcnR5IHtPYmplY3R9IHJlc291cmNlc1xuICogQHByb3BlcnR5IHtWTVNjcmlwdFJ1bkF0fSBydW5BdFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHN1cHBvcnRVUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB2ZXJzaW9uXG4gKi9cbi8qKiBAdHlwZWRlZiBWTVNjcmlwdFByb3BzICpcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpZFxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxhc3RNb2RpZmllZFxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxhc3RVcGRhdGVkXG4gKiBAcHJvcGVydHkge251bWJlcn0gcG9zaXRpb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cmlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1dWlkXG4gKi9cbi8qKlxuICogQHR5cGVkZWYge1xuICAgJ2RvY3VtZW50LXN0YXJ0JyB8ICdkb2N1bWVudC1ib2R5JyB8ICdkb2N1bWVudC1lbmQnIHwgJ2RvY3VtZW50LWlkbGUnXG4gfSBWTVNjcmlwdFJ1bkF0XG4gKi9cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEV2ZW50RW1pdHRlcigpIHtcbiAgY29uc3QgZXZlbnRzID0ge307XG4gIHJldHVybiB7IG9uLCBvZmYsIGZpcmUgfTtcblxuICBmdW5jdGlvbiBvbih0eXBlLCBmdW5jKSB7XG4gICAgbGV0IGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgaWYgKCFsaXN0KSB7XG4gICAgICBsaXN0ID0gW107XG4gICAgICBldmVudHNbdHlwZV0gPSBsaXN0O1xuICAgIH1cbiAgICBsaXN0LnB1c2goZnVuYyk7XG4gIH1cbiAgZnVuY3Rpb24gb2ZmKHR5cGUsIGZ1bmMpIHtcbiAgICBjb25zdCBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgIGlmIChsaXN0KSB7XG4gICAgICBjb25zdCBpID0gbGlzdC5pbmRleE9mKGZ1bmMpO1xuICAgICAgaWYgKGkgPj0gMCkgbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGZpcmUodHlwZSwgZGF0YSkge1xuICAgIGNvbnN0IGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgaWYgKGxpc3QpIHtcbiAgICAgIGxpc3QuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgICAgICBmdW5jKGRhdGEsIHR5cGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBwb3N0SW5pdGlhbGl6ZSB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbnBvc3RJbml0aWFsaXplLnB1c2goKCkgPT4ge1xuICBicm93c2VyLmNvbW1hbmRzLm9uQ29tbWFuZC5hZGRMaXN0ZW5lcigoY21kKSA9PiB7XG4gICAgaWYgKGNtZCA9PT0gJ25ld1NjcmlwdCcpIHtcbiAgICAgIGNvbW1hbmRzLk9wZW5FZGl0b3IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgcm91dGUgPSBjbWQgPT09ICdzZXR0aW5ncycgPyBgIyR7Y21kfWAgOiAnJztcbiAgICAgIGNvbW1hbmRzLlRhYk9wZW4oeyB1cmw6IGAvb3B0aW9ucy9pbmRleC5odG1sJHtyb3V0ZX1gIH0pO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsImltcG9ydCB7IGkxOG4sIG5vb3AgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBJTkpFQ1RBQkxFX1RBQl9VUkxfUkUgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgb2JqZWN0UGljayB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZSc7XG5pbXBvcnQgeyBwb3N0SW5pdGlhbGl6ZSB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBjb21tYW5kcywgZm9yRWFjaFRhYiB9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyBnZXRPcHRpb24sIGhvb2tPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IHRlc3RCbGFja2xpc3QgfSBmcm9tICcuL3Rlc3Rlcic7XG5cbi8vIHN0b3JpbmcgaW4gYGNhY2hlYCBvbmx5IGZvciB0aGUgZHVyYXRpb24gb2YgcGFnZSBsb2FkIGluIGNhc2UgdGhlcmUgYXJlIDIrIGlkZW50aWNhbCB1cmxzXG5jb25zdCBDQUNIRV9EVVJBVElPTiA9IDEwMDA7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgYXN5bmMgR2V0SW1hZ2VEYXRhKHVybCkge1xuICAgIGNvbnN0IGtleSA9IGBHZXRJbWFnZURhdGE6JHt1cmx9YDtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSlcbiAgICAgIHx8IGNhY2hlLnB1dChrZXksIGxvYWRJbWFnZURhdGEodXJsLCB7IGJhc2U2NDogdHJ1ZSB9KS5jYXRjaChub29wKSwgQ0FDSEVfRFVSQVRJT04pO1xuICB9LFxuICBTZXRCYWRnZTogc2V0QmFkZ2UsXG59KTtcblxuLy8gRmlyZWZveCBBbmRyb2lkIGRvZXMgbm90IHN1cHBvcnQgc3VjaCBBUElzLCB1c2Ugbm9vcFxuXG5jb25zdCBicm93c2VyQWN0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgeyBjaHJvbWUgfSA9IGdsb2JhbDtcbiAgLy8gVXNpbmcgYGNocm9tZWAgbmFtZXNwYWNlIGluIG9yZGVyIHRvIHNraXAgb3VyIGJyb3dzZXIuanMgcG9seWZpbGwgaW4gQ2hyb21lXG4gIGNvbnN0IGFwaSA9IGNocm9tZS5icm93c2VyQWN0aW9uO1xuICAvLyBTdXBwcmVzcyB0aGUgXCJubyB0YWIgaWRcIiBlcnJvciB3aGVuIHNldHRpbmcgYW4gaWNvbi9iYWRnZSBhcyBpdCBjYW5ub3QgYmUgcmVsaWFibHkgcHJldmVudGVkXG4gIGNvbnN0IGlnbm9yZUVycm9ycyA9ICgpID0+IGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcjtcbiAgLy8gU29tZSBtZXRob2RzIGxpa2Ugc2V0QmFkZ2VUZXh0IGFkZGVkIGNhbGxiYWNrcyBvbmx5IGluIENocm9tZSA2NysuXG4gIGNvbnN0IG1ha2VNZXRob2QgPSBmbiA9PiAoLi4uYXJncykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhcGk6OmZuKC4uLmFyZ3MsIGlnbm9yZUVycm9ycyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYXBpOjpmbiguLi5hcmdzKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBvYmplY3RQaWNrKGFwaSwgW1xuICAgICdzZXRJY29uJyxcbiAgICAnc2V0QmFkZ2VUZXh0JyxcbiAgICAnc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3InLFxuICAgICdzZXRUaXRsZScsXG4gIF0sIGZuID0+IChmbiA/IG1ha2VNZXRob2QoZm4pIDogbm9vcCkpO1xufSkoKTtcblxuY29uc3QgYmFkZ2VzID0ge307XG5jb25zdCBLRVlfSVNfQVBQTElFRCA9ICdpc0FwcGxpZWQnO1xuY29uc3QgS0VZX1NIT1dfQkFER0UgPSAnc2hvd0JhZGdlJztcbmNvbnN0IEtFWV9CQURHRV9DT0xPUiA9ICdiYWRnZUNvbG9yJztcbmNvbnN0IEtFWV9CQURHRV9DT0xPUl9CTE9DS0VEID0gJ2JhZGdlQ29sb3JCbG9ja2VkJztcbi8qKiBAdHlwZSBib29sZWFuICovXG5sZXQgaXNBcHBsaWVkO1xuLyoqIEB0eXBlIFZNQmFkZ2VNb2RlICovXG5sZXQgc2hvd0JhZGdlO1xuLyoqIEB0eXBlIHN0cmluZyAqL1xubGV0IGJhZGdlQ29sb3I7XG4vKiogQHR5cGUgc3RyaW5nICovXG5sZXQgYmFkZ2VDb2xvckJsb2NrZWQ7XG4vKiogQHR5cGUgc3RyaW5nICovXG5sZXQgdGl0bGVCbGFja2xpc3RlZDtcbi8qKiBAdHlwZSBzdHJpbmcgKi9cbmxldCB0aXRsZU5vbmluamVjdGFibGU7XG5cbi8vIFdlJ2xsIGNhY2hlIHRoZSBpY29uIGRhdGEgaW4gQ2hyb21lIGFzIGl0IGRvZXNuJ3QgY2FjaGUgdGhlIGRhdGEgYW5kIHRha2VzIHVwIHRvIDQwbXNcbi8vIGluIG91ciBiYWNrZ3JvdW5kIHBhZ2UgY29udGV4dCB0byBzZXQgdGhlIDQgaWNvbiBzaXplcyBmb3IgZWFjaCBuZXcgdGFiIG9wZW5lZFxuY29uc3QgaWNvbkNhY2hlID0gIUlTX0ZJUkVGT1ggJiYge307XG5cbmhvb2tPcHRpb25zKChjaGFuZ2VzKSA9PiB7XG4gIGxldCB2O1xuICBjb25zdCBqb2JzID0gW107XG4gIGlmICgodiA9IGNoYW5nZXNbS0VZX0lTX0FQUExJRURdKSAhPSBudWxsKSB7XG4gICAgaXNBcHBsaWVkID0gdjtcbiAgICBzZXRJY29uKCk7IC8vIGNoYW5nZSB0aGUgZGVmYXVsdCBpY29uXG4gICAgam9icy5wdXNoKHNldEljb24pOyAvLyBjaGFuZ2UgdGhlIGN1cnJlbnQgdGFicycgaWNvbnNcbiAgfVxuICBpZiAoKHYgPSBjaGFuZ2VzW0tFWV9TSE9XX0JBREdFXSkgIT0gbnVsbCkge1xuICAgIHNob3dCYWRnZSA9IHY7XG4gICAgam9icy5wdXNoKHVwZGF0ZUJhZGdlKTtcbiAgfVxuICBpZiAoKHYgPSBjaGFuZ2VzW0tFWV9CQURHRV9DT0xPUl0pICYmIChiYWRnZUNvbG9yID0gdilcbiAgfHwgKHYgPSBjaGFuZ2VzW0tFWV9CQURHRV9DT0xPUl9CTE9DS0VEXSkgJiYgKGJhZGdlQ29sb3JCbG9ja2VkID0gdikpIHtcbiAgICBqb2JzLnB1c2godXBkYXRlQmFkZ2VDb2xvcik7XG4gIH1cbiAgaWYgKCdibGFja2xpc3QnIGluIGNoYW5nZXMpIHtcbiAgICBqb2JzLnB1c2godXBkYXRlU3RhdGUpO1xuICB9XG4gIGlmIChqb2JzLmxlbmd0aCkge1xuICAgIGZvckVhY2hUYWIodGFiID0+IGpvYnMuZm9yRWFjaChmbiA9PiBmbih0YWIpKSk7XG4gIH1cbn0pO1xuXG5wb3N0SW5pdGlhbGl6ZS5wdXNoKCgpID0+IHtcbiAgaXNBcHBsaWVkID0gZ2V0T3B0aW9uKEtFWV9JU19BUFBMSUVEKTtcbiAgc2hvd0JhZGdlID0gZ2V0T3B0aW9uKEtFWV9TSE9XX0JBREdFKTtcbiAgYmFkZ2VDb2xvciA9IGdldE9wdGlvbihLRVlfQkFER0VfQ09MT1IpO1xuICBiYWRnZUNvbG9yQmxvY2tlZCA9IGdldE9wdGlvbihLRVlfQkFER0VfQ09MT1JfQkxPQ0tFRCk7XG4gIHRpdGxlQmxhY2tsaXN0ZWQgPSBpMThuKCdmYWlsdXJlUmVhc29uQmxhY2tsaXN0ZWQnKTtcbiAgdGl0bGVOb25pbmplY3RhYmxlID0gaTE4bignZmFpbHVyZVJlYXNvbk5vbmluamVjdGFibGUnKTtcbiAgZm9yRWFjaFRhYih1cGRhdGVTdGF0ZSk7XG4gIGlmICghaXNBcHBsaWVkKSBzZXRJY29uKCk7IC8vIHNldHMgdGhlIGRpbW1lZCBpY29uIGFzIGRlZmF1bHRcbn0pO1xuXG5icm93c2VyLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKChpZCkgPT4ge1xuICBkZWxldGUgYmFkZ2VzW2lkXTtcbn0pO1xuXG5icm93c2VyLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgaW5mbywgdGFiKSA9PiB7XG4gIGNvbnN0IHsgdXJsIH0gPSBpbmZvO1xuICBpZiAoaW5mby5zdGF0dXMgPT09ICdsb2FkaW5nJ1xuICAgICAgLy8gYXQgbGVhc3QgYWJvdXQ6bmV3dGFiIGluIEZpcmVmb3ggbWF5IG9wZW4gd2l0aG91dCAnbG9hZGluZycgc3RhdHVzXG4gICAgICB8fCBpbmZvLmZhdkljb25VcmwgJiYgdGFiLnVybC5zdGFydHNXaXRoKCdhYm91dDonKSkge1xuICAgIHVwZGF0ZVN0YXRlKHRhYiwgdXJsKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHNldEJhZGdlKGlkcywgeyB0YWIsIGZyYW1lSWQgfSkge1xuICBjb25zdCB0YWJJZCA9IHRhYi5pZDtcbiAgY29uc3QgZGF0YSA9IGJhZGdlc1t0YWJJZF0gfHwge307XG4gIGlmICghZGF0YS5pZE1hcCB8fCBmcmFtZUlkID09PSAwKSB7XG4gICAgLy8gMSkga2VlcGluZyBkYXRhIG9iamVjdCB0byBwcmVzZXJ2ZSBkYXRhLmJsb2NrZWRcbiAgICAvLyAyKSAndG90YWwnIGFuZCAndW5pcXVlJyBtdXN0IG1hdGNoIHNob3dCYWRnZSBpbiBvcHRpb25zLWRlZmF1bHRzLmpzXG4gICAgZGF0YS50b3RhbCA9IDA7XG4gICAgZGF0YS51bmlxdWUgPSAwO1xuICAgIGRhdGEuaWRNYXAgPSB7fTtcbiAgICBiYWRnZXNbdGFiSWRdID0gZGF0YTtcbiAgfVxuICBkYXRhLnRvdGFsICs9IGlkcy5sZW5ndGg7XG4gIGlmIChpZHMpIHtcbiAgICBpZHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIGRhdGEuaWRNYXBbaWRdID0gMTtcbiAgICB9KTtcbiAgICBkYXRhLnVuaXF1ZSA9IE9iamVjdC5rZXlzKGRhdGEuaWRNYXApLmxlbmd0aDtcbiAgfVxuICB1cGRhdGVCYWRnZUNvbG9yKHRhYiwgZGF0YSk7XG4gIHVwZGF0ZUJhZGdlKHRhYiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJhZGdlKHRhYiwgZGF0YSA9IGJhZGdlc1t0YWIuaWRdKSB7XG4gIGlmIChkYXRhKSB7XG4gICAgYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoe1xuICAgICAgdGV4dDogYCR7ZGF0YVtzaG93QmFkZ2VdIHx8ICcnfWAsXG4gICAgICB0YWJJZDogdGFiLmlkLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJhZGdlQ29sb3IodGFiLCBkYXRhID0gYmFkZ2VzW3RhYi5pZF0pIHtcbiAgaWYgKGRhdGEpIHtcbiAgICBicm93c2VyQWN0aW9uLnNldEJhZGdlQmFja2dyb3VuZENvbG9yKHtcbiAgICAgIGNvbG9yOiBkYXRhLmJsb2NrZWQgPyBiYWRnZUNvbG9yQmxvY2tlZCA6IGJhZGdlQ29sb3IsXG4gICAgICB0YWJJZDogdGFiLmlkLFxuICAgIH0pO1xuICB9XG59XG5cbi8vIENocm9tZSA3OSsgdXNlcyBwZW5kaW5nVXJsIHdoaWxlIHRoZSB0YWIgY29ubmVjdHMgdG8gdGhlIG5ld2x5IG5hdmlnYXRlZCBVUkxcbi8vIGh0dHBzOi8vZ3JvdXBzLmdvb2dsZS5jb20vYS9jaHJvbWl1bS5vcmcvZm9ydW0vIyF0b3BpYy9jaHJvbWl1bS1leHRlbnNpb25zLzV6dV9QVDBhcmxzXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZSh0YWIsIHVybCA9IHRhYi5wZW5kaW5nVXJsIHx8IHRhYi51cmwpIHtcbiAgY29uc3QgdGFiSWQgPSB0YWIuaWQ7XG4gIGNvbnN0IGluamVjdGFibGUgPSBJTkpFQ1RBQkxFX1RBQl9VUkxfUkUudGVzdCh1cmwpO1xuICBjb25zdCBibGFja2xpc3RlZCA9IGluamVjdGFibGUgPyB0ZXN0QmxhY2tsaXN0KHVybCkgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IHRpdGxlID0gYmxhY2tsaXN0ZWQgJiYgdGl0bGVCbGFja2xpc3RlZCB8fCAhaW5qZWN0YWJsZSAmJiB0aXRsZU5vbmluamVjdGFibGUgfHwgJyc7XG4gIC8vIGlmIHRoZSB1c2VyIHVuYmxhY2tsaXN0ZWQgdGhpcyBwcmV2aW91c2x5IGJsb2NrZWQgdGFiIGluIHNldHRpbmdzLFxuICAvLyBidXQgZGlkbid0IHJlbG9hZCB0aGUgdGFiIHlldCwgd2UgbmVlZCB0byByZXN0b3JlIHRoZSBpY29uIGFuZCB0aGUgdGl0bGVcbiAgaWYgKHRpdGxlIHx8IChiYWRnZXNbdGFiSWRdIHx8IHt9KS5ibG9ja2VkKSB7XG4gICAgYnJvd3NlckFjdGlvbi5zZXRUaXRsZSh7IHRpdGxlLCB0YWJJZCB9KTtcbiAgICBjb25zdCBkYXRhID0gdGl0bGUgPyB7IGJsb2NrZWQ6IHRydWUgfSA6IHt9O1xuICAgIGJhZGdlc1t0YWJJZF0gPSBkYXRhO1xuICAgIHNldEljb24odGFiLCBkYXRhKTtcbiAgICB1cGRhdGVCYWRnZSh0YWIsIGRhdGEpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEljb24odGFiID0ge30sIGRhdGEgPSB7fSkge1xuICAvLyBtb2Rlcm4gQ2hyb21lIGFuZCBGaXJlZm94IHVzZSAxNi8zMiwgb3RoZXIgYnJvd3NlcnMgbWF5IHN0aWxsIHVzZSAxOS8zOCAoZS5nLiBWaXZhbGRpKVxuICBjb25zdCBtb2QgPSBkYXRhLmJsb2NrZWQgJiYgJ2InIHx8ICFpc0FwcGxpZWQgJiYgJ3cnIHx8ICcnO1xuICBjb25zdCBpY29uRGF0YSA9IHt9O1xuICBmb3IgKGNvbnN0IG4gb2YgWzE2LCAxOSwgMzIsIDM4XSkge1xuICAgIGNvbnN0IHBhdGggPSBgL3B1YmxpYy9pbWFnZXMvaWNvbiR7bn0ke21vZH0ucG5nYDtcbiAgICBsZXQgaWNvbiA9IGljb25DYWNoZSA/IGljb25DYWNoZVtwYXRoXSA6IHBhdGg7XG4gICAgaWYgKCFpY29uKSB7XG4gICAgICBpY29uID0gYXdhaXQgbG9hZEltYWdlRGF0YShwYXRoKTtcbiAgICAgIGljb25DYWNoZVtwYXRoXSA9IGljb247XG4gICAgfVxuICAgIGljb25EYXRhW25dID0gaWNvbjtcbiAgfVxuICBicm93c2VyQWN0aW9uLnNldEljb24oe1xuICAgIHRhYklkOiB0YWIuaWQsXG4gICAgW2ljb25DYWNoZSA/ICdpbWFnZURhdGEnIDogJ3BhdGgnXTogaWNvbkRhdGEsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkSW1hZ2VEYXRhKHBhdGgsIHsgYmFzZTY0IH0gPSB7fSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBwYXRoO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGltZztcbiAgICAgIGlmICghd2lkdGgpIHsgLy8gRkYgcmVwb3J0cyAwIGZvciBTVkdcbiAgICAgICAgcmVzb2x2ZShwYXRoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIHJlc29sdmUoYmFzZTY0ID8gY2FudmFzLnRvRGF0YVVSTCgpIDogY3R4LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KSk7XG4gICAgfTtcbiAgICBpbWcub25lcnJvciA9IHJlamVjdDtcbiAgfSk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhY2hlIH0gZnJvbSAnLi9jYWNoZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldEV2ZW50RW1pdHRlciB9IGZyb20gJy4vZXZlbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL29wdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9zZWFyY2gnO1xuIiwiZXhwb3J0IGNvbnN0IGV4dGVuc2lvblJvb3QgPSBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCcvJyk7XG5cbmV4cG9ydCBjb25zdCBwcmVJbml0aWFsaXplID0gW107XG5leHBvcnQgY29uc3QgcG9zdEluaXRpYWxpemUgPSBbXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUobWFpbikge1xuICBjb25zdCBydW4gPSBpbml0ID0+ICh0eXBlb2YgaW5pdCA9PT0gJ2Z1bmN0aW9uJyA/IGluaXQoKSA6IGluaXQpO1xuICBhd2FpdCBQcm9taXNlLmFsbChwcmVJbml0aWFsaXplLm1hcChydW4pKTtcbiAgYXdhaXQgcnVuKG1haW4pO1xuICBhd2FpdCBQcm9taXNlLmFsbChwb3N0SW5pdGlhbGl6ZS5tYXAocnVuKSk7XG4gIHByZUluaXRpYWxpemUubGVuZ3RoID0gMDtcbiAgcG9zdEluaXRpYWxpemUubGVuZ3RoID0gMDtcbn1cbiIsImltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmNvbnN0IHsgY3JlYXRlRkZtcGVnLCBmZXRjaEZpbGUgfSA9IHJlcXVpcmUoJ0BmZm1wZWcvZmZtcGVnJyk7XG5jb25zdCB7IGNocm9tZSB9ID0gZ2xvYmFsO1xuXG5sZXQgZmZtcGVnO1xuYXN5bmMgZnVuY3Rpb24gbG9hZCgpIHtcbiAgaWYgKGZmbXBlZykgcmV0dXJuIGZmbXBlZztcbiAgZmZtcGVnID0gY3JlYXRlRkZtcGVnKHtcbiAgICBjb3JlUGF0aDogJy9wdWJsaWMvbGliL2ZmbXBlZy1jb3JlLmpzJyxcbiAgICBsb2c6IGZhbHNlLFxuICB9KTtcbiAgYXdhaXQgZmZtcGVnLmxvYWQoKTtcbiAgY29uc29sZS5pbmZvKCdmZiBsb2FkZWQnLCB7IGZmbXBlZyB9KTtcbiAgcmV0dXJuIGZmbXBlZztcbn1cblxuY29uc3QgbWVyZ2UgPSBhc3luYyAodmlkZW8sIGF1ZGlvKSA9PiB7XG4gIC8vIGNvbnNvbGUuaW5mbyh7IHZpZGVvLCBhdWRpbyB9KTtcbiAgZmZtcGVnLkZTKCd3cml0ZUZpbGUnLCAndmlkZW8ubXA0JywgYXdhaXQgZmV0Y2hGaWxlKHZpZGVvKSk7XG4gIGZmbXBlZy5GUygnd3JpdGVGaWxlJywgJ2F1ZGlvLm1wMycsIGF3YWl0IGZldGNoRmlsZShhdWRpbykpO1xuICBhd2FpdCBmZm1wZWcucnVuKCctaScsICd2aWRlby5tcDQnLCAnLWknLCAnYXVkaW8ubXAzJywgJy1jJywgJ2NvcHknLCAnb3V0Lm1wNCcpO1xuICByZXR1cm4gZmZtcGVnLkZTKCdyZWFkRmlsZScsICdvdXQubXA0Jyk7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBnZXQob3B0cywgaHR0cFJlcXVlc3QsIHByb2dyZXNzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgb3B0cy5yZXF1ZXN0c1tvcHRzLmlkXSA9IHtcbiAgICAgIGlkOiBvcHRzLmlkLFxuICAgICAgdGFiSWQ6IG9wdHMuc3JjLnRhYi5pZCxcbiAgICAgIGV2ZW50c1RvTm90aWZ5OiBbJ2Vycm9yJywgJ2xvYWQnLCAncHJvZ3Jlc3MnXSxcbiAgICAgIHhocjogbmV3IFhNTEh0dHBSZXF1ZXN0KCksXG4gICAgfTtcbiAgICBvcHRzLnR5cGUgPSAnZG93bmxvYWQnO1xuICAgIG9wdHMuZmlsZU5hbWUgPSBudWxsO1xuICAgIG9wdHMuZGF0YSA9IFtdO1xuICAgIGh0dHBSZXF1ZXN0KG9wdHMsIG9wdHMuc3JjLCByZXMgPT4ge1xuICAgICAgLy8gY29uc29sZS5pbmZvKCdodHRwUmVxdWVzdCcsIHJlcyk7XG4gICAgICBpZiAocmVzLnR5cGUgPT09ICdwcm9ncmVzcycpIHtcbiAgICAgICAgLy8gY29uc29sZS5pbmZvKCdodHRwUmVxdWVzdCcsIHJlcy5kYXRhPy5sb2FkZWQsIHJlcy5kYXRhPy50b3RhbCk7XG4gICAgICAgIHByb2dyZXNzKHJlcy5kYXRhPy5sb2FkZWQsIHJlcy5kYXRhPy50b3RhbCk7XG4gICAgICB9IGVsc2UgaWYgKHJlcy50eXBlID09PSAnbG9hZCcpIHtcbiAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XG4gICAgICB9IGVsc2UgaWYgKHJlcy50eXBlID09PSAnbG9hZGVuZCcpIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0c1VybCh0c1VyaSwgYmFzZVVSTCkge1xuICBpZiAodHNVcmkuc3RhcnRzV2l0aCgnaHR0cCcpKSByZXR1cm4gdHNVcmk7XG4gIGlmICh0c1VyaVswXSA9PT0gJy8nKSB7XG4gICAgY29uc3QgZG9tYWluID0gYmFzZVVSTC5zcGxpdCgnLycpO1xuICAgIHJldHVybiBgJHtkb21haW5bMF19Ly8ke2RvbWFpblsyXX0ke3RzVXJpfWA7XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBiYXNlVVJMLnNwbGl0KCcvJyk7XG4gIGRvbWFpbi5wb3AoKTtcbiAgcmV0dXJuIGAke2RvbWFpbi5qb2luKCcvJyl9LyR7dHNVcml9YDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1lcmdlTTN1OChvcHRzLCBodHRwUmVxdWVzdCkge1xuICBjb25zdCBwcm9ncmVzcyA9IFtdO1xuICBjb25zdCBwcmVsb2FkcyA9IFtdO1xuICBwcmVsb2Fkcy5wdXNoKGxvYWQoKSk7XG5cbiAgY29uc3Qgb25wcm9ncmVzcyA9IChwcCwgbG9hZGVkLCB0b3RhbCkgPT4ge1xuICAgIGlmIChsb2FkZWQgfHwgdG90YWwpIE9iamVjdC5hc3NpZ24ocHAsIHsgbG9hZGVkOiBsb2FkZWQgfHwgMCwgdG90YWw6IHRvdGFsIHx8IDAgfSk7XG4gICAgY29uc3QgX2xvYWRlZCA9IHByb2dyZXNzLm1hcChwID0+IHAubG9hZGVkKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBOdW1iZXIoYiksIDApO1xuICAgIGNvbnN0IF90b3RhbCA9IHByb2dyZXNzLm1hcChwID0+IHAudG90YWwpLnJlZHVjZSgoYSwgYikgPT4gYSArIE51bWJlcihiKSwgMCk7XG4gICAgLy8g5Y+v6IO95ZyodHPmlofku7blvojlpJrnmoTml7blgJnvvIx0b3RhbOaciemDqOWIhuS4ujDvvIzlsLHpnIDopoHorqHnrpfov5npg6jliIbljaDmr5TvvIzkvLDnrpfov5vluqZcbiAgICBjb25zdCByID0gcHJvZ3Jlc3MuZmlsdGVyKHAgPT4gcC50b3RhbCA+IDApLmxlbmd0aCAvIHByb2dyZXNzLmxlbmd0aDtcbiAgICBpZiAoX2xvYWRlZCAmJiBfdG90YWwpIG9wdHMub25wcm9ncmVzcyhfbG9hZGVkLCBfdG90YWwgLyBNYXRoLm1heCgwLjAwMSwgcikpO1xuICB9O1xuXG4gIGNvbnN0IGJhc2VVcmwgPSBvcHRzLnVybDtcbiAgY29uc3QgbTN1OCA9IG9wdHMuZGF0YVswXTtcbiAgbGV0IGkgPSAwO1xuXG4gIG0zdTguc3BsaXQoJ1xcbicpLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBpZiAobGluZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCcudHMnKSkgeyAvLyDkuI3kuIDlrprmmK90c+e7k+Wwvu+8jOWPr+iDveWQjumdoui/mOaciXF1ZXJ5XG4gICAgICBpICs9IDE7XG4gICAgICAvLyBpZiAoaSA+IDUpIHJldHVybjsgLy8gZm9yIGRlYnVnXG4gICAgICBjb25zdCB0c09wdHMgPSBkZWVwQ29weShvcHRzKTtcbiAgICAgIHRzT3B0cy51cmwgPSB0c1VybChsaW5lLCBiYXNlVXJsKTtcbiAgICAgIHRzT3B0cy5yZXF1ZXN0cyA9IG9wdHMucmVxdWVzdHM7XG4gICAgICB0c09wdHMuaWQgPSBgJHtvcHRzLmlkfS4ke2l9YDtcbiAgICAgIGNvbnN0IHBwID0geyBsb2FkZWQ6IDAsIHRvdGFsOiAwIH07XG4gICAgICBwcm9ncmVzcy5wdXNoKHBwKTtcbiAgICAgIHByZWxvYWRzLnB1c2goZ2V0KHRzT3B0cywgaHR0cFJlcXVlc3QsIChsb2FkZWQsIHRvdGFsKSA9PiB7XG4gICAgICAgIG9ucHJvZ3Jlc3MocHAsIGxvYWRlZCwgdG90YWwpO1xuICAgICAgfSkpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdmFscyA9IGF3YWl0IFByb21pc2UuYWxsKHByZWxvYWRzKTtcbiAgdmFscy5zaGlmdCgpO1xuICBpZiAoIXZhbHMubGVuZ3RoKSByZXR1cm4gb3B0cy5vbmVycm9yKCk7XG5cbiAgZmZtcGVnLkZTKCd3cml0ZUZpbGUnLCAnc3JjLnRzJywgYXdhaXQgZmV0Y2hGaWxlKG5ldyBCbG9iKHZhbHMsIHsgdHlwZTogJ3ZpZGVvL21wMnQnIH0pKSk7XG4gIGF3YWl0IGZmbXBlZy5ydW4oJy1pJywgJ3NyYy50cycsICctYycsICdjb3B5JywgJ291dC5tcDQnKTtcbiAgY29uc3Qgb3V0ID0gZmZtcGVnLkZTKCdyZWFkRmlsZScsICdvdXQubXA0Jyk7XG4gIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbb3V0XSwgeyB0eXBlOiAndmlkZW8vbXA0JyB9KTtcbiAgY29uc29sZS5pbmZvKCdyZXMnLCB7IGJsb2IgfSk7XG5cbiAgLy8gcmV0dXJuIGFzIGJsb2JcbiAgaWYgKCFvcHRzLmZpbGVOYW1lKSByZXR1cm4gb3B0cy5vbmxvYWQoYmxvYik7XG4gIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gIC8vIGNvbnNvbGUuaW5mbygncmVzJywgeyB1cmwsIGZpbGVuYW1lOiBvcHRzLmZpbGVOYW1lIH0pO1xuICBjaHJvbWUuZG93bmxvYWRzLmRvd25sb2FkKHtcbiAgICB1cmwsXG4gICAgZmlsZW5hbWU6IG9wdHMuZmlsZU5hbWUsXG4gIH0sIGRvd25sb2FkSWQgPT4ge1xuICAgIC8vIGNvbnNvbGUuaW5mbyhkb3dubG9hZElkKTtcbiAgICBvcHRzLm9ubG9hZChkb3dubG9hZElkKTtcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWVyZ2VWaWRlbyhvcHRzLCBodHRwUmVxdWVzdCkge1xuICAvLyBjb25zb2xlLmluZm8oJ21lcmdlVmlkZW8nLCBvcHRzKTtcbiAgY29uc3QgcHJvZ3Jlc3MgPSB7XG4gICAgdmlkZW86IHsgbG9hZGVkOiAwLCB0b3RhbDogMCB9LFxuICAgIGF1ZGlvOiB7IGxvYWRlZDogMCwgdG90YWw6IDAgfSxcbiAgfTtcblxuICBjb25zdCBvbnByb2dyZXNzID0gKHBwLCBsb2FkZWQsIHRvdGFsKSA9PiB7XG4gICAgaWYgKGxvYWRlZCAmJiB0b3RhbCkgT2JqZWN0LmFzc2lnbihwcCwgeyBsb2FkZWQsIHRvdGFsIH0pO1xuICAgIGNvbnN0IF9sb2FkZWQgPSBwcm9ncmVzcy52aWRlby5sb2FkZWQgKyBwcm9ncmVzcy5hdWRpby5sb2FkZWQ7XG4gICAgY29uc3QgX3RvdGFsID0gcHJvZ3Jlc3MudmlkZW8udG90YWwgKyBwcm9ncmVzcy5hdWRpby50b3RhbDtcbiAgICBpZiAoX2xvYWRlZCAmJiBfdG90YWwpIG9wdHMub25wcm9ncmVzcyhfbG9hZGVkLCBfdG90YWwgKyAxKTtcbiAgfTtcblxuICBjb25zdCBwcmVsb2FkcyA9IFtdO1xuICBwcmVsb2Fkcy5wdXNoKGxvYWQoKSk7XG5cbiAgY29uc3QgdmlkZW9PcHRzID0gZGVlcENvcHkob3B0cyk7XG4gIHZpZGVvT3B0cy5yZXF1ZXN0cyA9IG9wdHMucmVxdWVzdHM7XG4gIHZpZGVvT3B0cy5pZCA9IGAke29wdHMuaWR9LnZpZGVvYDtcbiAgcHJlbG9hZHMucHVzaChnZXQodmlkZW9PcHRzLCBodHRwUmVxdWVzdCwgKGxvYWRlZCwgdG90YWwpID0+IHtcbiAgICBvbnByb2dyZXNzKHByb2dyZXNzLnZpZGVvLCBsb2FkZWQsIHRvdGFsKTtcbiAgfSkpO1xuXG4gIGNvbnN0IGF1ZGlvT3B0cyA9IGRlZXBDb3B5KG9wdHMpO1xuICBhdWRpb09wdHMucmVxdWVzdHMgPSBvcHRzLnJlcXVlc3RzO1xuICBhdWRpb09wdHMudXJsID0gb3B0cy5kYXRhWzBdO1xuICBhdWRpb09wdHMuaWQgPSBgJHtvcHRzLmlkfS5hdWRpb2A7XG4gIHByZWxvYWRzLnB1c2goZ2V0KGF1ZGlvT3B0cywgaHR0cFJlcXVlc3QsIChsb2FkZWQsIHRvdGFsKSA9PiB7XG4gICAgb25wcm9ncmVzcyhwcm9ncmVzcy5hdWRpbywgbG9hZGVkLCB0b3RhbCk7XG4gIH0pKTtcblxuICBjb25zdCB2YWxzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJlbG9hZHMpO1xuICBpZiAoIXZhbHNbMV0gfHwgIXZhbHNbMl0pIHtcbiAgICAvLyBmYWlsXG4gICAgb3B0cy5vbmVycm9yKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gY29uc29sZS5pbmZvKHsgdmFscyB9KTtcbiAgY29uc3Qgb3V0ID0gYXdhaXQgbWVyZ2UodmFsc1sxXSwgdmFsc1syXSk7XG4gIC8vIGNvbnNvbGUuaW5mbygnb3V0JywgeyBvdXQgfSk7XG4gIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW291dF0sIHsgdHlwZTogJ3ZpZGVvL21wNCcgfSkpO1xuICAvLyBjb25zb2xlLmluZm8oJ3JlcycsIHsgdXJsLCBmaWxlbmFtZTogb3B0cy5maWxlTmFtZSB9KTtcbiAgY2hyb21lLmRvd25sb2Fkcy5kb3dubG9hZCh7XG4gICAgdXJsLFxuICAgIGZpbGVuYW1lOiBvcHRzLmZpbGVOYW1lLFxuICB9LCBkb3dubG9hZElkID0+IHtcbiAgICAvLyBjb25zb2xlLmluZm8oZG93bmxvYWRJZCk7XG4gICAgb3B0cy5vbmxvYWQoZG93bmxvYWRJZCk7XG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGRlZmF1bHRJbWFnZSwgaTE4biwgbm9vcCB9IGZyb20gJyMvY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IGNvbW1hbmRzID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBub3RpZnkob3B0aW9ucykge1xuICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKG9wdGlvbnMuaWQgfHwgJ1Zpb2xlbnRNb25rZXknLCB7XG4gICAgdHlwZTogJ2Jhc2ljJyxcbiAgICBpY29uVXJsOiBkZWZhdWx0SW1hZ2UsXG4gICAgdGl0bGU6IGAke29wdGlvbnMudGl0bGV9IC0gJHtpMThuKCdleHROYW1lJyl9YCxcbiAgICBtZXNzYWdlOiBvcHRpb25zLmJvZHksXG4gICAgaXNDbGlja2FibGU6IG9wdGlvbnMuaXNDbGlja2FibGUsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJvYWRjYXN0KGRhdGEpIHtcbiAgZm9yRWFjaFRhYigodGFiKSA9PiB7XG4gICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgZGF0YSlcbiAgICAuY2F0Y2gobm9vcCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2VPcklnbm9yZSguLi5hcmdzKSB7XG4gIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoLi4uYXJncykuY2F0Y2gobm9vcCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmb3JFYWNoVGFiKGNhbGxiYWNrKSB7XG4gIGNvbnN0IHRhYnMgPSBhd2FpdCBicm93c2VyLnRhYnMucXVlcnkoe30pO1xuICBsZXQgaSA9IDA7XG4gIGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcbiAgICBjYWxsYmFjayh0YWIpO1xuICAgIGkgKz0gMTtcbiAgICAvLyB3ZSdsbCBydW4gYXQgbW9zdCB0aGlzIG1hbnkgdGFicyBpbiBvbmUgZXZlbnQgbG9vcCBjeWNsZVxuICAgIC8vIGJlY2F1c2UgaHVuZHJlZHMgb2YgdGFicyB3b3VsZCBtYWtlIG91ciBleHRlbnNpb24gcHJvY2VzcyB1bnJlc3BvbnNpdmUsXG4gICAgLy8gdGhlIHNhbWUgcHJvY2VzcyB1c2VkIGJ5IG91ciBvd24gcGFnZXMgbGlrZSB0aGUgYmFja2dyb3VuZCBwYWdlLCBkYXNoYm9hcmQsIG9yIHBvcHVwc1xuICAgIGlmIChpICUgMjAgPT09IDApIGF3YWl0IG5ldyBQcm9taXNlKHNldFRpbWVvdXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpMThuLCBkZWZhdWx0SW1hZ2UsIHNlbmRUYWJDbWQgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbmNvbnN0IG9wZW5lcnMgPSB7fTtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICAvKiogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSAqL1xuICBhc3luYyBOb3RpZmljYXRpb24oZGF0YSwgc3JjLCBiZ0V4dHJhcykge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbklkID0gYXdhaXQgYnJvd3Nlci5ub3RpZmljYXRpb25zLmNyZWF0ZSh7XG4gICAgICB0eXBlOiAnYmFzaWMnLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUgfHwgKElTX0ZJUkVGT1ggPyBpMThuKCdleHROYW1lJykgOiAnJyksIC8vIENocm9tZSBhbHJlYWR5IHNob3dzIHRoZSBuYW1lXG4gICAgICBtZXNzYWdlOiBkYXRhLnRleHQsXG4gICAgICBpY29uVXJsOiBkYXRhLmltYWdlIHx8IGRlZmF1bHRJbWFnZSxcbiAgICB9KTtcbiAgICBvcGVuZXJzW25vdGlmaWNhdGlvbklkXSA9IGJnRXh0cmFzPy5vbkNsaWNrIHx8IHNyYy50YWIuaWQ7XG4gICAgcmV0dXJuIG5vdGlmaWNhdGlvbklkO1xuICB9LFxuICBSZW1vdmVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWQpIHtcbiAgICByZXR1cm4gYnJvd3Nlci5ub3RpZmljYXRpb25zLmNsZWFyKG5vdGlmaWNhdGlvbklkKTtcbiAgfSxcbn0pO1xuXG5icm93c2VyLm5vdGlmaWNhdGlvbnMub25DbGlja2VkLmFkZExpc3RlbmVyKChpZCkgPT4ge1xuICBjb25zdCBvcGVuZXJJZCA9IG9wZW5lcnNbaWRdO1xuICBpZiAob3BlbmVySWQgPj0gMCkge1xuICAgIHNlbmRUYWJDbWQob3BlbmVySWQsICdOb3RpZmljYXRpb25DbGljaycsIGlkKTtcbiAgfVxuICBpZiAodHlwZW9mIG9wZW5lcklkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3BlbmVySWQoKTtcbiAgfVxufSk7XG5cbmJyb3dzZXIubm90aWZpY2F0aW9ucy5vbkNsb3NlZC5hZGRMaXN0ZW5lcigoaWQpID0+IHtcbiAgY29uc3Qgb3BlbmVySWQgPSBvcGVuZXJzW2lkXTtcbiAgZGVsZXRlIG9wZW5lcnNbaWRdO1xuICBpZiAob3BlbmVySWQgPj0gMCkge1xuICAgIHNlbmRUYWJDbWQob3BlbmVySWQsICdOb3RpZmljYXRpb25DbG9zZScsIGlkKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQge1xuICBkZWJvdW5jZSwgZW5zdXJlQXJyYXksIGluaXRIb29rcywgbm9ybWFsaXplS2V5cyxcbn0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgbWFwRW50cnksIG9iamVjdEdldCwgb2JqZWN0U2V0IH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcjL2NvbW1vbi9vcHRpb25zLWRlZmF1bHRzJztcbmltcG9ydCB7IHByZUluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKiBAcmV0dXJuIHtPYmplY3R9ICovXG4gIEdldEFsbE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIGNvbW1hbmRzLkdldE9wdGlvbnMoZGVmYXVsdHMpO1xuICB9LFxuICAvKiogQHJldHVybiB7T2JqZWN0fSAqL1xuICBHZXRPcHRpb25zKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YTo6bWFwRW50cnkoKFtrZXldKSA9PiBnZXRPcHRpb24oa2V5KSk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHt2b2lkfSAqL1xuICBTZXRPcHRpb25zKGRhdGEpIHtcbiAgICBlbnN1cmVBcnJheShkYXRhKS5mb3JFYWNoKGl0ZW0gPT4gc2V0T3B0aW9uKGl0ZW0ua2V5LCBpdGVtLnZhbHVlKSk7XG4gIH0sXG59KTtcblxubGV0IGNoYW5nZXMgPSB7fTtcbmNvbnN0IGhvb2tzID0gaW5pdEhvb2tzKCk7XG5jb25zdCBjYWxsSG9va3NMYXRlciA9IGRlYm91bmNlKGNhbGxIb29rcywgMTAwKTtcblxubGV0IG9wdGlvbnMgPSB7fTtcbmxldCBpbml0UGVuZGluZyA9IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoJ29wdGlvbnMnKVxuLnRoZW4oKHsgb3B0aW9uczogZGF0YSB9KSA9PiB7XG4gIGlmIChkYXRhICYmIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykgb3B0aW9ucyA9IGRhdGE7XG4gIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgIGNvbnNvbGUubG9nKCdvcHRpb25zOicsIG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgfVxuICBpZiAoIW9iamVjdEdldChvcHRpb25zLCAndmVyc2lvbicpKSB7XG4gICAgc2V0T3B0aW9uKCd2ZXJzaW9uJywgMSk7XG4gIH1cbiAgaW5pdFBlbmRpbmcgPSBudWxsO1xufSk7XG5wcmVJbml0aWFsaXplLnB1c2goaW5pdFBlbmRpbmcpO1xuXG5mdW5jdGlvbiBmaXJlQ2hhbmdlKGtleXMsIHZhbHVlKSB7XG4gIC8vIEZsYXR0ZW5pbmcga2V5IHBhdGggc28gdGhlIHN1YnNjcmliZXJzIGNhbiB1cGRhdGUgbmVzdGVkIHZhbHVlcyB3aXRob3V0IG92ZXJ3cml0aW5nIHRoZSBwYXJlbnRcbiAgY29uc3Qga2V5ID0ga2V5cy5qb2luKCcuJyk7XG4gIC8vIEVuc3VyaW5nIHRoZSBjb3JyZWN0IG9yZGVyIHdoZW4gdXBkYXRlcyB3ZXJlIG1peGVkIGxpa2UgdGhpczogZm9vLmJhcj0xOyBmb289e2JhcjoyfTsgZm9vLmJhcj0zXG4gIGRlbGV0ZSBjaGFuZ2VzW2tleV07XG4gIGNoYW5nZXNba2V5XSA9IHZhbHVlO1xuICBjYWxsSG9va3NMYXRlcigpO1xufVxuXG5mdW5jdGlvbiBjYWxsSG9va3MoKSB7XG4gIGhvb2tzLmZpcmUoY2hhbmdlcyk7XG4gIGNoYW5nZXMgPSB7fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9wdGlvbihrZXksIGRlZikge1xuICBjb25zdCBrZXlzID0gbm9ybWFsaXplS2V5cyhrZXkpO1xuICBjb25zdCBtYWluS2V5ID0ga2V5c1swXTtcbiAgbGV0IHZhbHVlID0gb3B0aW9uc1ttYWluS2V5XTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHZhbHVlID0gZGVmYXVsdHNbbWFpbktleV07XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB2YWx1ZSA9IGRlZjtcbiAgcmV0dXJuIGtleXMubGVuZ3RoID4gMSA/IG9iamVjdEdldCh2YWx1ZSwga2V5cy5zbGljZSgxKSwgZGVmKSA6IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbihrZXkpIHtcbiAgcmV0dXJuIG9iamVjdEdldChkZWZhdWx0cywga2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9wdGlvbihrZXksIHZhbHVlKSB7XG4gIGlmIChpbml0UGVuZGluZykge1xuICAgIGluaXRQZW5kaW5nLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0T3B0aW9uKGtleSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBrZXlzID0gbm9ybWFsaXplS2V5cyhrZXkpO1xuICBjb25zdCBvcHRpb25LZXkgPSBrZXlzLmpvaW4oJy4nKTtcbiAgbGV0IG9wdGlvblZhbHVlID0gdmFsdWU7XG4gIGNvbnN0IG1haW5LZXkgPSBrZXlzWzBdO1xuICBpZiAobWFpbktleSBpbiBkZWZhdWx0cykge1xuICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgIG9wdGlvblZhbHVlID0gb2JqZWN0U2V0KGdldE9wdGlvbihtYWluS2V5KSwga2V5cy5zbGljZSgxKSwgdmFsdWUpO1xuICAgIH1cbiAgICBvcHRpb25zW21haW5LZXldID0gb3B0aW9uVmFsdWU7XG4gICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IG9wdGlvbnMgfSk7XG4gICAgZmlyZUNoYW5nZShrZXlzLCB2YWx1ZSk7XG4gICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgICBjb25zb2xlLmxvZygnT3B0aW9ucyB1cGRhdGVkOicsIG9wdGlvbktleSwgdmFsdWUsIG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhvb2tPcHRpb25zID0gaG9va3MuaG9vaztcbiIsImltcG9ydCB7IHBhcnNlTWV0YSB9IGZyb20gJy4vc2NyaXB0JztcbmltcG9ydCBzdG9yYWdlIGZyb20gJyMvY29tbW9uL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGNvbnNvbGUuaW5mbygnVXBncmFkZSBkYXRhYmFzZS4uLicpO1xuICBpbml0KCk7XG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgcmVxID0gaW5kZXhlZERCLm9wZW4oJ1Zpb2xlbnRtb25rZXknLCAxKTtcbiAgICByZXEub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdHJhbnNmb3JtKHJlcS5yZXN1bHQpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4sIGJ1dCBkaWQgaGFwcGVuIGluIEZpcmVmb3guXG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVxLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgcmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgIC8vIE5vIGF2YWlsYWJsZSB1cGdyYWRhdGlvblxuICAgICAgcmVqZWN0KCk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm0oZGIpIHtcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKFsnc2NyaXB0cycsICdyZXF1aXJlJywgJ2NhY2hlJywgJ3ZhbHVlcyddKTtcbiAgICBjb25zdCB1cGRhdGVzID0ge307XG4gICAgbGV0IHByb2Nlc3NpbmcgPSAzO1xuICAgIGNvbnN0IGRvbmUgPSAoKSA9PiB7XG4gICAgICBwcm9jZXNzaW5nIC09IDE7XG4gICAgICBpZiAoIXByb2Nlc3NpbmcpIHJlc29sdmUoYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh1cGRhdGVzKSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRBbGwgPSAoc3RvcmVOYW1lLCBjYWxsYmFjaykgPT4ge1xuICAgICAgY29uc3QgcmVxID0gdHgub2JqZWN0U3RvcmUoc3RvcmVOYW1lKS5nZXRBbGwoKTtcbiAgICAgIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiBjYWxsYmFjayhyZXEucmVzdWx0KTtcbiAgICAgIHJlcS5vbmVycm9yID0gcmVqZWN0O1xuICAgIH07XG4gICAgZ2V0QWxsKCdzY3JpcHRzJywgKGFsbFNjcmlwdHMpID0+IHtcbiAgICAgIGNvbnN0IHVyaU1hcCA9IHt9O1xuICAgICAgYWxsU2NyaXB0cy5mb3JFYWNoKChzY3JpcHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb2RlLCBpZCwgdXJpIH0gPSBzY3JpcHQ7XG4gICAgICAgIHVwZGF0ZXNbYCR7c3RvcmFnZS5zY3JpcHQucHJlZml4fSR7aWR9YF0gPSB0cmFuc2Zvcm1TY3JpcHQoc2NyaXB0KTtcbiAgICAgICAgdXBkYXRlc1tgJHtzdG9yYWdlLmNvZGUucHJlZml4fSR7aWR9YF0gPSBjb2RlO1xuICAgICAgICB1cmlNYXBbdXJpXSA9IGlkO1xuICAgICAgfSk7XG4gICAgICBnZXRBbGwoJ3ZhbHVlcycsIChhbGxWYWx1ZXMpID0+IHtcbiAgICAgICAgYWxsVmFsdWVzLmZvckVhY2goKHsgdXJpLCB2YWx1ZXMgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkID0gdXJpTWFwW3VyaV07XG4gICAgICAgICAgaWYgKGlkKSB1cGRhdGVzW2Ake3N0b3JhZ2UudmFsdWUucHJlZml4fSR7aWR9YF0gPSB2YWx1ZXM7XG4gICAgICAgIH0pO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBnZXRBbGwoJ2NhY2hlJywgKGFsbENhY2hlKSA9PiB7XG4gICAgICBhbGxDYWNoZS5mb3JFYWNoKCh7IHVyaSwgZGF0YSB9KSA9PiB7XG4gICAgICAgIHVwZGF0ZXNbYCR7c3RvcmFnZS5jYWNoZS5wcmVmaXh9JHt1cml9YF0gPSBkYXRhO1xuICAgICAgfSk7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gICAgZ2V0QWxsKCdyZXF1aXJlJywgKGFsbFJlcXVpcmUpID0+IHtcbiAgICAgIGFsbFJlcXVpcmUuZm9yRWFjaCgoeyB1cmksIGNvZGUgfSkgPT4ge1xuICAgICAgICB1cGRhdGVzW2Ake3N0b3JhZ2UucmVxdWlyZS5wcmVmaXh9JHt1cml9YF0gPSBjb2RlO1xuICAgICAgfSk7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtU2NyaXB0KHNjcmlwdCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXRhOiBwYXJzZU1ldGEoc2NyaXB0LmNvZGUpLFxuICAgICAgY3VzdG9tOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgb3JpZ0luY2x1ZGU6IHRydWUsXG4gICAgICAgIG9yaWdFeGNsdWRlOiB0cnVlLFxuICAgICAgICBvcmlnTWF0Y2g6IHRydWUsXG4gICAgICAgIG9yaWdFeGNsdWRlTWF0Y2g6IHRydWUsXG4gICAgICB9LCBzY3JpcHQuY3VzdG9tKSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGlkOiBzY3JpcHQuaWQsXG4gICAgICAgIHVyaTogc2NyaXB0LnVyaSxcbiAgICAgICAgcG9zaXRpb246IHNjcmlwdC5wb3NpdGlvbixcbiAgICAgIH0sXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZW5hYmxlZDogc2NyaXB0LmVuYWJsZWQsXG4gICAgICAgIHNob3VsZFVwZGF0ZTogc2NyaXB0LnVwZGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufSlcbi8vIElnbm9yZSBlcnJvclxuLmNhdGNoKCgpID0+IHt9KTtcbiIsImltcG9ydCB7IGdldEFjdGl2ZVRhYiwgc2VuZFRhYkNtZCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuL2RiJztcbmltcG9ydCB7IHBvc3RJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuZXhwb3J0IGNvbnN0IHBvcHVwVGFicyA9IHt9OyAvLyB7IHRhYklkOiAxIH1cblxucG9zdEluaXRpYWxpemUucHVzaCgoKSA9PiB7XG4gIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIob25Qb3B1cE9wZW5lZCk7XG4gIGJyb3dzZXIud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIocHJlZmV0Y2hTZXRQb3B1cCwge1xuICAgIHVybHM6IFticm93c2VyLnJ1bnRpbWUuZ2V0VVJMKGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLmJyb3dzZXJfYWN0aW9uLmRlZmF1bHRfcG9wdXApXSxcbiAgICB0eXBlczogWydtYWluX2ZyYW1lJ10sXG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIG9uUG9wdXBPcGVuZWQocG9ydCkge1xuICBjb25zdCB0YWJJZCA9ICtwb3J0Lm5hbWU7XG4gIHBvcHVwVGFic1t0YWJJZF0gPSAxO1xuICBzZW5kVGFiQ21kKHRhYklkLCAnUG9wdXBTaG93bicsIHRydWUpO1xuICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcihvblBvcHVwQ2xvc2VkKTtcbiAgZGVsZXRlIGNvbW1hbmRzLlNldFBvcHVwO1xufVxuXG5mdW5jdGlvbiBvblBvcHVwQ2xvc2VkKHsgbmFtZSB9KSB7XG4gIGRlbGV0ZSBwb3B1cFRhYnNbbmFtZV07XG4gIHNlbmRUYWJDbWQoK25hbWUsICdQb3B1cFNob3duJywgZmFsc2UpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcmVmZXRjaFNldFBvcHVwKCkge1xuICBjb25zdCB0YWJJZCA9IChhd2FpdCBnZXRBY3RpdmVUYWIoKSkuaWQ7XG4gIHNlbmRUYWJDbWQodGFiSWQsICdQb3B1cFNob3duJywgdHJ1ZSk7XG4gIGNvbW1hbmRzLlNldFBvcHVwID0gYXN5bmMgKGRhdGEsIHNyYykgPT4ge1xuICAgIE9iamVjdC5hc3NpZ24oZGF0YSwgYXdhaXQgZ2V0RGF0YShkYXRhLmlkcykpO1xuICAgIGNhY2hlLnB1dCgnU2V0UG9wdXAnLCBPYmplY3QuYXNzaWduKHsgW3NyYy5mcmFtZUlkXTogW2RhdGEsIHNyY10gfSwgY2FjaGUuZ2V0KCdTZXRQb3B1cCcpKSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBnZXRTY3JpcHROYW1lLCBnZXRVbmlxSWQgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQge1xuICBJTkpFQ1RfQVVUTywgSU5KRUNUX0NPTlRFTlQsIElOSkVDVF9NQVBQSU5HLFxuICBJTkpFQ1RBQkxFX1RBQl9VUkxfUkUsIE1FVEFCTE9DS19SRSxcbn0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcbmltcG9ydCBpbml0Q2FjaGUgZnJvbSAnIy9jb21tb24vY2FjaGUnO1xuaW1wb3J0IHsgZm9yRWFjaEVudHJ5LCBvYmplY3RQaWNrLCBvYmplY3RTZXQgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnIy9jb21tb24vc3RvcmFnZSc7XG5pbXBvcnQgdWEgZnJvbSAnIy9jb21tb24vdWEnO1xuaW1wb3J0IHsgZ2V0U2NyaXB0c0J5VVJMLCBFTlZfQ0FDSEVfS0VZUywgRU5WX1JFUV9LRVlTLCBFTlZfVkFMVUVfSURTIH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgeyBleHRlbnNpb25Sb290LCBwb3N0SW5pdGlhbGl6ZSB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyBnZXRPcHRpb24sIGhvb2tPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJztcblxuY29uc3QgQVBJX0NPTkZJRyA9IHtcbiAgdXJsczogWycqOi8vKi8qJ10sIC8vIGAqYCBzY2hlbWUgbWF0Y2hlcyBvbmx5IGh0dHAgYW5kIGh0dHBzXG4gIHR5cGVzOiBbJ21haW5fZnJhbWUnLCAnc3ViX2ZyYW1lJ10sXG59O1xuY29uc3QgVElNRV9BRlRFUl9TRU5EID0gMTBlMzsgLy8gbG9uZ2VyIGFzIGVzdGFibGlzaGluZyBjb25uZWN0aW9uIHRvIHNpdGVzIG1heSB0YWtlIHRpbWVcbmNvbnN0IFRJTUVfQUZURVJfUkVDRUlWRSA9IDFlMzsgLy8gc2hvcnRlciBhcyByZXNwb25zZSBib2R5IHdpbGwgYmUgY29taW5nIHZlcnkgc29vblxuY29uc3QgVElNRV9LRUVQX0RBVEEgPSA2MGUzOyAvLyAxMDBtcyBzaG91bGQgYmUgZW5vdWdoIGJ1dCB0aGUgdGFiIG1heSBoYW5nIG9yIGdldCBwYXVzZWQgaW4gZGVidWdnZXJcbmNvbnN0IGNhY2hlQ29kZSA9IGluaXRDYWNoZSh7IGxpZmV0aW1lOiBUSU1FX0tFRVBfREFUQSB9KTtcbmNvbnN0IGNhY2hlID0gaW5pdENhY2hlKHtcbiAgbGlmZXRpbWU6IFRJTUVfS0VFUF9EQVRBLFxuICBvbkRpc3Bvc2U6IGFzeW5jIHByb21pc2UgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcm9taXNlO1xuICAgIGNvbnN0IHJjcyA9IGF3YWl0IGRhdGE/LnJjc1Byb21pc2U7XG4gICAgcmNzPy51bnJlZ2lzdGVyKCk7XG4gIH0sXG59KTtcbmNvbnN0IElOSkVDVF9JTlRPID0gJ2luamVjdEludG8nO1xuLy8gS0VZX1hYWCBmb3IgaG9va2VkIG9wdGlvbnNcbmNvbnN0IEtFWV9FWFBPU0UgPSAnZXhwb3NlJztcbmNvbnN0IEtFWV9ERUZfSU5KRUNUX0lOVE8gPSAnZGVmYXVsdEluamVjdEludG8nO1xuY29uc3QgS0VZX0lTX0FQUExJRUQgPSAnaXNBcHBsaWVkJztcbmNvbnN0IEtFWV9YSFJfSU5KRUNUID0gJ3hockluamVjdCc7XG5jb25zdCBleHBvc2UgPSB7fTtcbmxldCBpc0FwcGxpZWQ7XG5sZXQgaW5qZWN0SW50bztcbmxldCB4aHJJbmplY3Q7XG5ob29rT3B0aW9ucyhvbk9wdGlvbkNoYW5nZWQpO1xucG9zdEluaXRpYWxpemUucHVzaCgoKSA9PiB7XG4gIGZvciAoY29uc3Qga2V5IG9mIFtLRVlfRVhQT1NFLCBLRVlfREVGX0lOSkVDVF9JTlRPLCBLRVlfSVNfQVBQTElFRCwgS0VZX1hIUl9JTkpFQ1RdKSB7XG4gICAgb25PcHRpb25DaGFuZ2VkKHsgW2tleV06IGdldE9wdGlvbihrZXkpIH0pO1xuICB9XG59KTtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICBhc3luYyBJbmplY3Rpb25GZWVkYmFjayh7IGZlZWRJZCwgZmVlZGJhY2ssIGZvcmNlQ29udGVudCB9LCBzcmMpIHtcbiAgICBmZWVkYmFjay5mb3JFYWNoKHByb2Nlc3NGZWVkYmFjaywgc3JjKTtcbiAgICBpZiAoZmVlZElkKSB7XG4gICAgICAvLyBjYWNoZSBjbGVhbnVwIHdoZW4gZ2V0RGF0YUZGIG91dHJ1bnMgR2V0SW5qZWN0ZWRcbiAgICAgIGNhY2hlLmRlbChmZWVkSWQuY2FjaGVLZXkpO1xuICAgICAgLy8gZW52RGVsYXllZFxuICAgICAgY29uc3QgZW52ID0gYXdhaXQgY2FjaGUucG9wKGZlZWRJZC5lbnZLZXkpO1xuICAgICAgaWYgKGVudikge1xuICAgICAgICBlbnYuZm9yY2VDb250ZW50ID0gZm9yY2VDb250ZW50O1xuICAgICAgICBlbnYuc2NyaXB0cy5tYXAocHJlcGFyZVNjcmlwdCwgZW52KS5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChwcm9jZXNzRmVlZGJhY2ssIHNyYyk7XG4gICAgICAgIHJldHVybiBvYmplY3RQaWNrKGVudiwgWydjYWNoZScsICdzY3JpcHRzJ10pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn0pO1xuXG4vKiogQHRoaXMge2Nocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXJ9ICovXG5mdW5jdGlvbiBwcm9jZXNzRmVlZGJhY2soW2tleSwgbmVlZHNJbmplY3Rpb25dKSB7XG4gIGNvbnN0IGNvZGUgPSBjYWNoZUNvZGUucG9wKGtleSk7XG4gIC8vIHNlZSBUSU1FX0tFRVBfREFUQSBjb21tZW50XG4gIGlmIChuZWVkc0luamVjdGlvbiAmJiBjb2RlKSB7XG4gICAgYnJvd3Nlci50YWJzLmV4ZWN1dGVTY3JpcHQodGhpcy50YWIuaWQsIHtcbiAgICAgIGNvZGUsXG4gICAgICBmcmFtZUlkOiB0aGlzLmZyYW1lSWQsXG4gICAgICBydW5BdDogJ2RvY3VtZW50X3N0YXJ0JyxcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBwcm9wc1RvQ2xlYXIgPSB7XG4gIFtzdG9yYWdlLmNhY2hlLnByZWZpeF06IEVOVl9DQUNIRV9LRVlTLFxuICBbc3RvcmFnZS5jb2RlLnByZWZpeF06IHRydWUsXG4gIFtzdG9yYWdlLnJlcXVpcmUucHJlZml4XTogRU5WX1JFUV9LRVlTLFxuICBbc3RvcmFnZS5zY3JpcHQucHJlZml4XTogdHJ1ZSxcbiAgW3N0b3JhZ2UudmFsdWUucHJlZml4XTogRU5WX1ZBTFVFX0lEUyxcbn07XG5cbmJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoYXN5bmMgY2hhbmdlcyA9PiB7XG4gIGNvbnN0IGRiS2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpO1xuICBjb25zdCBjYWNoZVZhbHVlcyA9IGF3YWl0IFByb21pc2UuYWxsKGNhY2hlLmdldFZhbHVlcygpKTtcbiAgY29uc3QgZGlydHkgPSBjYWNoZVZhbHVlcy5zb21lKGRhdGEgPT4gZGF0YS5pbmplY3RcbiAgICAmJiBkYktleXMuc29tZSgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBwcmVmaXggPSBrZXkuc2xpY2UoMCwga2V5LmluZGV4T2YoJzonKSArIDEpO1xuICAgICAgY29uc3QgcHJvcCA9IHByb3BzVG9DbGVhcltwcmVmaXhdO1xuICAgICAga2V5ID0ga2V5LnNsaWNlKHByZWZpeC5sZW5ndGgpO1xuICAgICAgcmV0dXJuIHByb3AgPT09IHRydWVcbiAgICAgICAgfHwgZGF0YVtwcm9wXT8uaW5jbHVkZXMocHJlZml4ID09PSBzdG9yYWdlLnZhbHVlLnByZWZpeCA/ICtrZXkgOiBrZXkpO1xuICAgIH0pKTtcbiAgaWYgKGRpcnR5KSB7XG4gICAgY2FjaGUuZGVzdHJveSgpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbm9ybWFsaXplUmVhbG0odmFsdWUpIHtcbiAgcmV0dXJuIElOSkVDVF9NQVBQSU5HOjpoYXNPd25Qcm9wZXJ0eSh2YWx1ZSlcbiAgICA/IHZhbHVlXG4gICAgOiBpbmplY3RJbnRvIHx8IElOSkVDVF9BVVRPO1xufVxuXG5mdW5jdGlvbiBvbk9wdGlvbkNoYW5nZWQoY2hhbmdlcykge1xuICBjaGFuZ2VzOjpmb3JFYWNoRW50cnkoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBLRVlfREVGX0lOSkVDVF9JTlRPOlxuICAgICAgaW5qZWN0SW50byA9IG5vcm1hbGl6ZVJlYWxtKHZhbHVlKTtcbiAgICAgIGNhY2hlLmRlc3Ryb3koKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgS0VZX1hIUl9JTkpFQ1Q6XG4gICAgICB0b2dnbGVYaHJJbmplY3QodmFsdWUpO1xuICAgICAgY2FjaGUuZGVzdHJveSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBLRVlfSVNfQVBQTElFRDpcbiAgICAgIHRvZ2dsZVByZWluamVjdCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEtFWV9FWFBPU0U6XG4gICAgICB2YWx1ZTo6Zm9yRWFjaEVudHJ5KChbc2l0ZSwgaXNFeHBvc2VkXSkgPT4ge1xuICAgICAgICBleHBvc2VbZGVjb2RlVVJJQ29tcG9uZW50KHNpdGUpXSA9IGlzRXhwb3NlZDtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChrZXkuaW5jbHVkZXMoJy4nKSkgeyAvLyB1c2VkIGJ5IGBleHBvc2UudXJsYFxuICAgICAgICBvbk9wdGlvbkNoYW5nZWQob2JqZWN0U2V0KHt9LCBrZXksIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn0gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmplY3RlZFNjcmlwdHModXJsLCB0YWJJZCwgZnJhbWVJZCwgZm9yY2VDb250ZW50KSB7XG4gIGNvbnN0IGtleSA9IGdldEtleSh1cmwsICFmcmFtZUlkKTtcbiAgcmV0dXJuIGNhY2hlLnBvcChrZXkpIHx8IHByZXBhcmUoa2V5LCB1cmwsIHRhYklkLCBmcmFtZUlkLCBmb3JjZUNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBnZXRLZXkodXJsLCBpc1RvcCkge1xuICByZXR1cm4gaXNUb3AgPyB1cmwgOiBgLSR7dXJsfWA7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVByZWluamVjdChlbmFibGUpIHtcbiAgaXNBcHBsaWVkID0gZW5hYmxlO1xuICAvLyBVc2luZyBvblNlbmRIZWFkZXJzIGJlY2F1c2Ugb25IZWFkZXJzUmVjZWl2ZWQgaW4gRmlyZWZveCBmaXJlcyAqYWZ0ZXIqIGNvbnRlbnQgc2NyaXB0cy5cbiAgLy8gQW5kIGV2ZW4gaW4gQ2hyb21lIGEgc2l0ZSBtYXkgYmUgc28gZmFzdCB0aGF0IHByZWluamVjdCBvbiBvbkhlYWRlcnNSZWNlaXZlZCB3b24ndCBiZSB1c2VmdWwuXG4gIGNvbnN0IG9uT2ZmID0gYCR7ZW5hYmxlID8gJ2FkZCcgOiAncmVtb3ZlJ31MaXN0ZW5lcmA7XG4gIGNvbnN0IGNvbmZpZyA9IGVuYWJsZSA/IEFQSV9DT05GSUcgOiB1bmRlZmluZWQ7XG4gIGJyb3dzZXIud2ViUmVxdWVzdC5vblNlbmRIZWFkZXJzW29uT2ZmXShvblNlbmRIZWFkZXJzLCBjb25maWcpO1xuICBpZiAoIWlzQXBwbGllZCB8fCAheGhySW5qZWN0KSB7IC8vIHdpbGwgYmUgcmVnaXN0ZXJlZCBpbiB0b2dnbGVYaHJJbmplY3RcbiAgICBicm93c2VyLndlYlJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWRbb25PZmZdKG9uSGVhZGVyc1JlY2VpdmVkLCBjb25maWcpO1xuICB9XG4gIGNhY2hlLmRlc3Ryb3koKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlWGhySW5qZWN0KGVuYWJsZSkge1xuICB4aHJJbmplY3QgPSBlbmFibGU7XG4gIGJyb3dzZXIud2ViUmVxdWVzdC5vbkhlYWRlcnNSZWNlaXZlZC5yZW1vdmVMaXN0ZW5lcihvbkhlYWRlcnNSZWNlaXZlZCk7XG4gIGlmIChlbmFibGUpIHtcbiAgICBicm93c2VyLndlYlJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWQuYWRkTGlzdGVuZXIob25IZWFkZXJzUmVjZWl2ZWQsIEFQSV9DT05GSUcsIFtcbiAgICAgICdibG9ja2luZycsXG4gICAgICAncmVzcG9uc2VIZWFkZXJzJyxcbiAgICAgIGJyb3dzZXIud2ViUmVxdWVzdC5PbkhlYWRlcnNSZWNlaXZlZE9wdGlvbnMuRVhUUkFfSEVBREVSUyxcbiAgICBdLmZpbHRlcihCb29sZWFuKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25TZW5kSGVhZGVycyh7IHVybCwgdGFiSWQsIGZyYW1lSWQgfSkge1xuICBpZiAoIUlOSkVDVEFCTEVfVEFCX1VSTF9SRS50ZXN0KHVybCkpIHJldHVybjtcbiAgY29uc3QgaXNUb3AgPSAhZnJhbWVJZDtcbiAgY29uc3Qga2V5ID0gZ2V0S2V5KHVybCwgaXNUb3ApO1xuICBpZiAoIWNhY2hlLmhhcyhrZXkpKSB7XG4gICAgLy8gR2V0SW5qZWN0ZWQgbWVzc2FnZSB3aWxsIGJlIHNlbnQgc29vbiBieSB0aGUgY29udGVudCBzY3JpcHRcbiAgICAvLyBhbmQgaXQgbWF5IGVhc2lseSBoYXBwZW4gd2hpbGUgZ2V0U2NyaXB0c0J5VVJMIGlzIHN0aWxsIHdhaXRpbmcgZm9yIGJyb3dzZXIuc3RvcmFnZVxuICAgIC8vIHNvIHdlJ2xsIGxldCBHZXRJbmplY3RlZCBhd2FpdCB0aGlzIHBlbmRpbmcgZGF0YSBieSBzdG9yaW5nIFByb21pc2UgaW4gdGhlIGNhY2hlXG4gICAgY2FjaGUucHV0KGtleSwgcHJlcGFyZShrZXksIHVybCwgdGFiSWQsIGZyYW1lSWQpLCBUSU1FX0FGVEVSX1NFTkQpO1xuICB9XG59XG5cbi8qKiBAcGFyYW0ge2Nocm9tZS53ZWJSZXF1ZXN0LldlYlJlc3BvbnNlSGVhZGVyc0RldGFpbHN9IGluZm8gKi9cbmZ1bmN0aW9uIG9uSGVhZGVyc1JlY2VpdmVkKGluZm8pIHtcbiAgY29uc3Qga2V5ID0gZ2V0S2V5KGluZm8udXJsLCAhaW5mby5mcmFtZUlkKTtcbiAgY29uc3QgZGF0YSA9IHhockluamVjdCAmJiBjYWNoZS5nZXQoa2V5KTtcbiAgY2FjaGUuaGl0KGtleSwgVElNRV9BRlRFUl9SRUNFSVZFKTtcbiAgcmV0dXJuIGRhdGE/LmluamVjdCAmJiBwcmVwYXJlWGhyQmxvYihpbmZvLCBkYXRhKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2Nocm9tZS53ZWJSZXF1ZXN0LldlYlJlc3BvbnNlSGVhZGVyc0RldGFpbHN9IGluZm9cbiAqIEBwYXJhbSB7Vk1HZXRJbmplY3RlZERhdGFDb250YWluZXJ9IGRhdGFcbiAqL1xuZnVuY3Rpb24gcHJlcGFyZVhockJsb2IoeyB1cmwsIHJlc3BvbnNlSGVhZGVycyB9LCBkYXRhKSB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnaHR0cHM6JykgJiYgZGV0ZWN0U3RyaWN0Q3NwKHJlc3BvbnNlSGVhZGVycykpIHtcbiAgICBmb3JjZUNvbnRlbnRJbmplY3Rpb24oZGF0YSk7XG4gIH1cbiAgY29uc3QgYmxvYlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW1xuICAgIEpTT04uc3RyaW5naWZ5KGRhdGEuaW5qZWN0KSxcbiAgXSkpO1xuICByZXNwb25zZUhlYWRlcnMucHVzaCh7XG4gICAgbmFtZTogJ1NldC1Db29raWUnLFxuICAgIHZhbHVlOiBgXCIke3Byb2Nlc3MuZW52LklOSVRfRlVOQ19OQU1FfVwiPSR7YmxvYlVybC5zcGxpdCgnLycpLnBvcCgpfTsgU2FtZVNpdGU9TGF4YCxcbiAgfSk7XG4gIHNldFRpbWVvdXQoVVJMLnJldm9rZU9iamVjdFVSTCwgVElNRV9LRUVQX0RBVEEsIGJsb2JVcmwpO1xuICByZXR1cm4geyByZXNwb25zZUhlYWRlcnMgfTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZShrZXksIHVybCwgdGFiSWQsIGZyYW1lSWQsIGZvcmNlQ29udGVudCkge1xuICAvKiogQG5hbWVzcGFjZSBWTUdldEluamVjdGVkRGF0YUNvbnRhaW5lciAqL1xuICBjb25zdCByZXMgPSB7XG4gICAgLyoqIEBuYW1lc3BhY2UgVk1HZXRJbmplY3RlZERhdGEgKi9cbiAgICBpbmplY3Q6IHtcbiAgICAgIGV4cG9zZTogIWZyYW1lSWRcbiAgICAgICAgJiYgdXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJylcbiAgICAgICAgJiYgZXhwb3NlW3VybC5zcGxpdCgnLycsIDMpWzJdXSxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gaXNBcHBsaWVkXG4gICAgPyBwcmVwYXJlU2NyaXB0cyhyZXMsIGtleSwgdXJsLCB0YWJJZCwgZnJhbWVJZCwgZm9yY2VDb250ZW50KVxuICAgIDogcmVzO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcmVwYXJlU2NyaXB0cyhyZXMsIGNhY2hlS2V5LCB1cmwsIHRhYklkLCBmcmFtZUlkLCBmb3JjZUNvbnRlbnQpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFNjcmlwdHNCeVVSTCh1cmwsICFmcmFtZUlkKTtcbiAgY29uc3QgeyBlbnZEZWxheWVkLCBzY3JpcHRzIH0gPSBkYXRhO1xuICBjb25zdCBpc0xhdGUgPSBmb3JjZUNvbnRlbnQgIT0gbnVsbDtcbiAgZGF0YS5mb3JjZUNvbnRlbnQgPSBmb3JjZUNvbnRlbnQ7XG4gIGNvbnN0IGZlZWRiYWNrID0gc2NyaXB0cy5tYXAocHJlcGFyZVNjcmlwdCwgZGF0YSkuZmlsdGVyKEJvb2xlYW4pO1xuICBjb25zdCBtb3JlID0gZW52RGVsYXllZC5wcm9taXNlO1xuICBjb25zdCBlbnZLZXkgPSBnZXRVbmlxSWQoYCR7dGFiSWR9OiR7ZnJhbWVJZH06YCk7XG4gIGNvbnN0IHsgaW5qZWN0IH0gPSByZXM7XG4gIC8qKiBAbmFtZXNwYWNlIFZNR2V0SW5qZWN0ZWREYXRhICovXG4gIE9iamVjdC5hc3NpZ24oaW5qZWN0LCB7XG4gICAgc2NyaXB0cyxcbiAgICBbSU5KRUNUX0lOVE9dOiBpbmplY3RJbnRvLFxuICAgIGNhY2hlOiBkYXRhLmNhY2hlLFxuICAgIGZlZWRJZDoge1xuICAgICAgY2FjaGVLZXksIC8vIEluamVjdGlvbkZlZWRiYWNrIGNhY2hlIGtleSBmb3IgY2xlYW51cCB3aGVuIGdldERhdGFGRiBvdXRydW5zIEdldEluamVjdGVkXG4gICAgICBlbnZLZXksIC8vIEluamVjdGlvbkZlZWRiYWNrIGNhY2hlIGtleSBmb3IgZW52RGVsYXllZFxuICAgIH0sXG4gICAgaGFzTW9yZTogISFtb3JlLCAvLyB0ZWxscyBjb250ZW50IGJyaWRnZSB0byBleHBlY3QgZW52RGVsYXllZFxuICAgIGZvcmNlQ29udGVudDogZm9yY2VDb250ZW50IHx8ICggLy8gVHJ5aW5nIHRvIHNraXAgcGFnZSBzYW5kYm94IHdoZW4geGhySW5qZWN0IGlzIG9uOlxuICAgICAgZmVlZGJhY2subGVuZ3RoID09PSBzY3JpcHRzLmxlbmd0aCAvLyAuLi53aGVuIGFsbCBgZW52U3RhcnRgIHNjcmlwdHMgYXJlIGBjb250ZW50YCxcbiAgICAgICYmIGVudkRlbGF5ZWQuc2NyaXB0cy5ldmVyeShzY3IgPT4gaXNDb250ZW50UmVhbG0oc2NyLCBmb3JjZUNvbnRlbnQpKSAvLyBhbmQgYGVudkRlbGF5ZWRgIHRvby5cbiAgICApLFxuICAgIGlkczogZGF0YS5kaXNhYmxlZElkcywgLy8gY29udGVudCBicmlkZ2UgYWRkcyB0aGUgYWN0dWFsbHkgcnVubmluZyBpZHMgYW5kIHNlbmRzIHZpYSBTZXRQb3B1cFxuICAgIGluZm86IHtcbiAgICAgIHVhLFxuICAgIH0sXG4gIH0pO1xuICAvKiogQG5hbWVzcGFjZSBWTUdldEluamVjdGVkRGF0YUNvbnRhaW5lciAqL1xuICBPYmplY3QuYXNzaWduKHJlcywge1xuICAgIGZlZWRiYWNrLFxuICAgIHZhbE9wSWRzOiBbLi4uZGF0YVtFTlZfVkFMVUVfSURTXSwgLi4uZW52RGVsYXllZFtFTlZfVkFMVUVfSURTXV0sXG4gICAgcmNzUHJvbWlzZTogIWlzTGF0ZSAmJiAheGhySW5qZWN0ICYmIElTX0ZJUkVGT1hcbiAgICAgID8gcmVnaXN0ZXJTY3JpcHREYXRhRkYoaW5qZWN0LCB1cmwsICEhZnJhbWVJZClcbiAgICAgIDogbnVsbCxcbiAgfSk7XG4gIGlmIChtb3JlKSBjYWNoZS5wdXQoZW52S2V5LCBtb3JlKTtcbiAgY2FjaGUucHV0KGNhY2hlS2V5LCByZXMpOyAvLyBuZWNlc3NhcnkgZm9yIHRoZSBzeW5jaHJvbm91cyBvbkhlYWRlcnNSZWNlaXZlZFxuICByZXR1cm4gcmVzO1xufVxuXG4vKiogQHRoaXMge1ZNU2NyaXB0QnlVcmxEYXRhfSAqL1xuZnVuY3Rpb24gcHJlcGFyZVNjcmlwdChzY3JpcHQpIHtcbiAgY29uc3QgeyBjdXN0b20sIG1ldGEsIHByb3BzIH0gPSBzY3JpcHQ7XG4gIGNvbnN0IHsgaWQgfSA9IHByb3BzO1xuICBjb25zdCB7IGZvcmNlQ29udGVudCwgcmVxdWlyZSwgdmFsdWUgfSA9IHRoaXM7XG4gIGNvbnN0IGNvZGUgPSB0aGlzLmNvZGVbaWRdO1xuICBjb25zdCBkYXRhS2V5ID0gZ2V0VW5pcUlkKCdWTWluJyk7XG4gIGNvbnN0IGRpc3BsYXlOYW1lID0gZ2V0U2NyaXB0TmFtZShzY3JpcHQpO1xuICBjb25zdCBuYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KGRpc3BsYXlOYW1lLnJlcGxhY2UoL1sjJicsLzo7P0A9K10vZywgcmVwbGFjZVdpdGhGdWxsV2lkdGhGb3JtKSk7XG4gIGNvbnN0IGlzQ29udGVudCA9IGlzQ29udGVudFJlYWxtKHNjcmlwdCwgZm9yY2VDb250ZW50KTtcbiAgY29uc3QgcGF0aE1hcCA9IGN1c3RvbS5wYXRoTWFwIHx8IHt9O1xuICBjb25zdCByZXFzID0gbWV0YS5yZXF1aXJlPy5tYXAoa2V5ID0+IHJlcXVpcmVbcGF0aE1hcFtrZXldIHx8IGtleV0pLmZpbHRlcihCb29sZWFuKTtcbiAgLy8gdHJ5aW5nIHRvIGF2b2lkIHByb2dyZXNzaXZlIHN0cmluZyBjb25jYXRlbmF0aW9uIG9mIHBvdGVudGlhbGx5IGh1Z2UgY29kZSBzbGljZXNcbiAgLy8gYWRkaW5nIGA7YCBvbiBhIG5ldyBsaW5lIGluIGNhc2Ugc29tZSByZXF1aXJlZCBzY3JpcHQgZW5kcyB3aXRoIGEgbGluZSBjb21tZW50XG4gIGNvbnN0IHJlcXNTbGljZXMgPSByZXFzID8gW10uY29uY2F0KC4uLnJlcXMubWFwKHJlcSA9PiBbcmVxLCAnXFxuOyddKSkgOiBbXTtcbiAgY29uc3QgaGFzUmVxcyA9IHJlcXNTbGljZXMubGVuZ3RoO1xuICBjb25zdCBpbmplY3RlZENvZGUgPSBbXG4gICAgLy8gaGlkaW5nIG1vZHVsZSBpbnRlcmZhY2UgZnJvbSBAcmVxdWlyZSdkIHNjcmlwdHMgc28gdGhleSBkb24ndCBtaXN0YWtlbmx5IHVzZSBpdFxuICAgIGB3aW5kb3cuJHtkYXRhS2V5fT1mdW5jdGlvbigke2RhdGFLZXl9KXt0cnl7d2l0aCh0aGlzKSgoZGVmaW5lLG1vZHVsZSxleHBvcnRzKT0+e2AsXG4gICAgLi4ucmVxc1NsaWNlcyxcbiAgICAvLyBhZGRpbmcgYSBuZXN0ZWQgSUlGRSB0byBzdXBwb3J0ICd1c2Ugc3RyaWN0JyBpbiB0aGUgY29kZSB3aGVuIHRoZXJlIGFyZSBAcmVxdWlyZXNcbiAgICBoYXNSZXFzID8gJygoKT0+eycgOiAnJyxcbiAgICBjb2RlLFxuICAgIC8vIGFkZGluZyBhIG5ldyBsaW5lIGluIGNhc2UgdGhlIGNvZGUgZW5kcyB3aXRoIGEgbGluZSBjb21tZW50XG4gICAgY29kZS5lbmRzV2l0aCgnXFxuJykgPyAnJyA6ICdcXG4nLFxuICAgIGhhc1JlcXMgPyAnfSkoKScgOiAnJyxcbiAgICAvLyAwIGF0IHRoZSBlbmQgdG8gc3VwcHJlc3MgZXJyb3JzIGFib3V0IG5vbi1jbG9uZWFibGUgcmVzdWx0IG9mIGV4ZWN1dGVTY3JpcHQgaW4gRkZcbiAgICBgfSkoKX1jYXRjaChlKXske2RhdGFLZXl9KGUpfX07MGAsXG4gICAgLy8gRmlyZWZveCBsaXN0cyAudXNlci5qcyBhbW9uZyBvdXIgb3duIGNvbnRlbnQgc2NyaXB0cyBzbyBhIHNwYWNlIGF0IHN0YXJ0IHdpbGwgZ3JvdXAgdGhlbVxuICAgIGBcXG4vLyMgc291cmNlVVJMPSR7ZXh0ZW5zaW9uUm9vdH0ke0lTX0ZJUkVGT1ggPyAnJTIwJyA6ICcnfSR7bmFtZX0udXNlci5qcyMke2lkfWAsXG4gIF0uam9pbignJyk7XG4gIGNhY2hlQ29kZS5wdXQoZGF0YUtleSwgaW5qZWN0ZWRDb2RlLCBUSU1FX0tFRVBfREFUQSk7XG4gIC8qKiBAbmFtZXNwYWNlIFZNSW5qZWN0ZWRTY3JpcHQgKi9cbiAgT2JqZWN0LmFzc2lnbihzY3JpcHQsIHtcbiAgICBkYXRhS2V5LFxuICAgIGRpc3BsYXlOYW1lLFxuICAgIC8vIGNvZGUgd2lsbCBiZSBgdHJ1ZWAgaWYgdGhlIGRlc2lyZWQgcmVhbG0gaXMgUEFHRSB3aGljaCBpcyBub3QgaW5qZWN0YWJsZVxuICAgIGNvZGU6IGlzQ29udGVudCA/ICcnIDogZm9yY2VDb250ZW50IHx8IGluamVjdGVkQ29kZSxcbiAgICBtZXRhU3RyOiBjb2RlLm1hdGNoKE1FVEFCTE9DS19SRSlbMV0gfHwgJycsXG4gICAgdmFsdWVzOiB2YWx1ZVtpZF0gfHwgbnVsbCxcbiAgfSk7XG4gIHJldHVybiBpc0NvbnRlbnQgJiYgW2RhdGFLZXksIHRydWVdO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlV2l0aEZ1bGxXaWR0aEZvcm0ocykge1xuICAvLyBmdWxsd2lkdGggcmFuZ2Ugc3RhcnRzIGF0IDB4RkYwMCwgbm9ybWFsIHJhbmdlIHN0YXJ0cyBhdCBzcGFjZSBjaGFyIGNvZGUgMHgyMFxuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShzLmNoYXJDb2RlQXQoMCkgLSAweDIwICsgMHhGRjAwKTtcbn1cblxuY29uc3QgcmVzb2x2ZURhdGFDb2RlU3RyID0gYCgke2Z1bmN0aW9uIF8oZGF0YSkge1xuICAvKiBgZnVuY3Rpb25gIGlzIHJlcXVpcmVkIHRvIGNvbXBpbGUgYHRoaXNgLCBhbmQgYHRoaXNgIGlzIHJlcXVpcmVkIGJlY2F1c2Ugb3VyIHNhZmUtZ2xvYmFsc1xuICAgKiBzaGFkb3dzIGB3aW5kb3dgIHNvIGl0cyBuYW1lIGlzIG1pbmlmaWVkIGFuZCBoZW5jZSBpbmFjY2Vzc2libGUgaGVyZSAqL1xuICBjb25zdCB7IHZtUmVzb2x2ZSB9ID0gdGhpcztcbiAgaWYgKHZtUmVzb2x2ZSkge1xuICAgIHZtUmVzb2x2ZShkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBydW5uaW5nIGVhcmxpZXIgdGhhbiB0aGUgbWFpbiBjb250ZW50IHNjcmlwdCBmb3Igd2hhdGV2ZXIgcmVhc29uXG4gICAgdGhpcy52bURhdGEgPSBkYXRhO1xuICB9XG59fSlgO1xuXG4vLyBUT0RPOiByZXdvcmsgdGhlIHdob2xlIHRoaW5nIHRvIHJlZ2lzdGVyIHNjcmlwdHMgaW5kaXZpZHVhbGx5IHdpdGggcmVhbCBgbWF0Y2hlc2BcbmZ1bmN0aW9uIHJlZ2lzdGVyU2NyaXB0RGF0YUZGKGluamVjdCwgdXJsLCBhbGxGcmFtZXMpIHtcbiAgcmV0dXJuIGJyb3dzZXIuY29udGVudFNjcmlwdHM/LnJlZ2lzdGVyKHtcbiAgICBhbGxGcmFtZXMsXG4gICAganM6IFt7XG4gICAgICBjb2RlOiBgJHtyZXNvbHZlRGF0YUNvZGVTdHJ9KCR7SlNPTi5zdHJpbmdpZnkoaW5qZWN0KX0pYCxcbiAgICB9XSxcbiAgICBtYXRjaGVzOiB1cmwuc3BsaXQoJyMnLCAxKSxcbiAgICBydW5BdDogJ2RvY3VtZW50X3N0YXJ0JyxcbiAgfSk7XG59XG5cbi8qKiBAcGFyYW0ge2Nocm9tZS53ZWJSZXF1ZXN0Lkh0dHBIZWFkZXJbXX0gcmVzcG9uc2VIZWFkZXJzICovXG5mdW5jdGlvbiBkZXRlY3RTdHJpY3RDc3AocmVzcG9uc2VIZWFkZXJzKSB7XG4gIHJldHVybiByZXNwb25zZUhlYWRlcnMuc29tZSgoeyBuYW1lLCB2YWx1ZSB9KSA9PiAoXG4gICAgL15jb250ZW50LXNlY3VyaXR5LXBvbGljeSQvaS50ZXN0KG5hbWUpXG4gICAgJiYgL14uKD8hLiondW5zYWZlLWlubGluZScpLy50ZXN0KCAvLyB0cnVlIGlmIG5vdCBlbXB0eSBhbmQgd2l0aG91dCAndW5zYWZlLWlubGluZSdcbiAgICAgIHZhbHVlLm1hdGNoKC8oPzpefDspXFxzKnNjcmlwdC1zcmMtZWxlbVxcc1teO10rLylcbiAgICAgIHx8IHZhbHVlLm1hdGNoKC8oPzpefDspXFxzKnNjcmlwdC1zcmNcXHNbXjtdKy8pXG4gICAgICB8fCB2YWx1ZS5tYXRjaCgvKD86Xnw7KVxccypkZWZhdWx0LXNyY1xcc1teO10rLylcbiAgICAgIHx8ICcnLFxuICAgIClcbiAgKSk7XG59XG5cbi8qKiBAcGFyYW0ge1ZNR2V0SW5qZWN0ZWREYXRhQ29udGFpbmVyfSBkYXRhICovXG5mdW5jdGlvbiBmb3JjZUNvbnRlbnRJbmplY3Rpb24oZGF0YSkge1xuICAvKiogQHR5cGUgVk1HZXRJbmplY3RlZERhdGEgKi9cbiAgY29uc3QgaW5qZWN0ID0gZGF0YS5pbmplY3Q7XG4gIGluamVjdC5mb3JjZUNvbnRlbnQgPSB0cnVlO1xuICBpbmplY3Quc2NyaXB0cy5mb3JFYWNoKHNjciA9PiB7XG4gICAgLy8gV2hlbiBzY3JpcHQgd2FudHMgYHBhZ2VgLCB0aGUgcmVzdWx0IGJlbG93IHdpbGwgYmUgYHRydWVgIHNvIHRoZSBzY3JpcHQgZ29lcyBpbnRvIGBmYWlsZWRJZHNgXG4gICAgc2NyLmNvZGUgPSAhaXNDb250ZW50UmVhbG0oc2NyLCB0cnVlKSB8fCAnJztcbiAgICBkYXRhLmZlZWRiYWNrLnB1c2goW3Njci5kYXRhS2V5LCB0cnVlXSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc0NvbnRlbnRSZWFsbShzY3IsIGZvcmNlQ29udGVudCkge1xuICBjb25zdCByZWFsbSA9IHNjcltJTkpFQ1RfSU5UT10gfHwgKFxuICAgIHNjcltJTkpFQ1RfSU5UT10gPSBub3JtYWxpemVSZWFsbShzY3IuY3VzdG9tW0lOSkVDVF9JTlRPXSB8fCBzY3IubWV0YVtJTkpFQ1RfSU5UT10pXG4gICk7XG4gIHJldHVybiByZWFsbSA9PT0gSU5KRUNUX0NPTlRFTlQgfHwgZm9yY2VDb250ZW50ICYmIHJlYWxtID09PSBJTkpFQ1RfQVVUTztcbn1cbiIsImltcG9ydCB7XG4gIGJsb2IyYmFzZTY0LCBidWZmZXIyc3RyaW5nLCBnZXRVbmlxSWQsIHJlcXVlc3QsIGkxOG4sIGlzRW1wdHksIG5vb3AsIHNlbmRUYWJDbWQsXG4gIHN0cmluZzJ1aW50OGFycmF5LFxufSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBmb3JFYWNoRW50cnksIG9iamVjdFBpY2sgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHVhIGZyb20gJyMvY29tbW9uL3VhJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcbmltcG9ydCB7IGlzVXNlclNjcmlwdCwgcGFyc2VNZXRhIH0gZnJvbSAnLi9zY3JpcHQnO1xuaW1wb3J0IHsgZXh0ZW5zaW9uUm9vdCB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG4vLyBpbXBvcnQgeyBkb3dubG9hZE0zdTggfSBmcm9tICcuL20zdTgnO1xuaW1wb3J0IHsgbWVyZ2VWaWRlbywgbWVyZ2VNM3U4IH0gZnJvbSAnLi9tZXJnZS12aWRlbyc7XG5cbmNvbnN0IHJlcUhhbmRsZXIgPSB7XG4gIG0zdTg6IG1lcmdlTTN1OCxcbiAgbWVyZ2U6IG1lcmdlVmlkZW8sXG59O1xuXG5jb25zdCBWTV9WRVJJRlkgPSAnVk0tVmVyaWZ5JztcbmNvbnN0IENPTkZJUk1fVVJMX0JBU0UgPSBgJHtleHRlbnNpb25Sb290fWNvbmZpcm0vaW5kZXguaHRtbCNgO1xuLyoqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLFZNSHR0cFJlcXVlc3Q+fSAqL1xuY29uc3QgcmVxdWVzdHMgPSB7fTtcbmNvbnN0IGRvd25sb2FkcyA9IHt9O1xuY29uc3QgdmVyaWZ5ID0ge307XG5jb25zdCB0YWJSZXF1ZXN0cyA9IHt9O1xuY29uc3QgeyBjaHJvbWUgfSA9IGdsb2JhbDtcbmxldCBlbmNvZGVyO1xuXG5pZiAoY2hyb21lKSB7XG4gIGNocm9tZS5kb3dubG9hZHMub25DaGFuZ2VkLmFkZExpc3RlbmVyKGV2dCA9PiB7XG4gICAgLy8gY29uc29sZS5pbmZvKCdkb3dubG9hZHMgb25DaGFuZ2VkJywgZXZ0KTtcbiAgICBpZiAoIWRvd25sb2Fkc1tldnQuaWRdKSByZXR1cm47XG4gICAgY29uc3QgeyByZXEsIHNyYyB9ID0gZG93bmxvYWRzW2V2dC5pZF07XG4gICAgY29uc3QgeyB0YWI6IHsgaWQ6IHRhYklkIH0sIGZyYW1lSWQgfSA9IHNyYztcblxuICAgIGlmIChldnQuc3RhdGU/LmN1cnJlbnQgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIHNlbmRUYWJDbWQodGFiSWQsICdIdHRwUmVxdWVzdGVkJywge1xuICAgICAgICB0eXBlOiAnbG9hZCcsIGlkOiByZXEuaWQsIGRvd25sb2FkSWQ6IGV2dC5pZCxcbiAgICAgIH0sIHsgZnJhbWVJZCB9KTtcbiAgICB9IGVsc2UgaWYgKGV2dC5zdGF0ZT8uY3VycmVudCA9PT0gJ2ludGVycnVwdGVkJykge1xuICAgICAgc2VuZFRhYkNtZCh0YWJJZCwgJ0h0dHBSZXF1ZXN0ZWQnLCB7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsIGlkOiByZXEuaWQsIGRvd25sb2FkSWQ6IGV2dC5pZCxcbiAgICAgIH0sIHsgZnJhbWVJZCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkZWxldGUgZG93bmxvYWRzW2V2dC5pZF07XG4gICAgZGVsZXRlIHJlcXVlc3RzW3JlcS5pZF07XG4gIH0pO1xufVxuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIENvbmZpcm1JbnN0YWxsOiBjb25maXJtSW5zdGFsbCxcbiAgYXN5bmMgQ2hlY2tJbnN0YWxsZXJUYWIodGFiSWQsIHNyYykge1xuICAgIGNvbnN0IHRhYiA9IElTX0ZJUkVGT1ggJiYgKHNyYy51cmwgfHwgJycpLnN0YXJ0c1dpdGgoJ2ZpbGU6JylcbiAgICAgICYmIGF3YWl0IGJyb3dzZXIudGFicy5nZXQodGFiSWQpLmNhdGNoKG5vb3ApO1xuICAgIHJldHVybiB0YWIgJiYgKHRhYi5wZW5kaW5nVXJsIHx8IHRhYi51cmwgfHwgJycpLnN0YXJ0c1dpdGgoQ09ORklSTV9VUkxfQkFTRSk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHt2b2lkfSAqL1xuICBIdHRwUmVxdWVzdChvcHRzLCBzcmMpIHtcbiAgICBjb25zdCB7IHRhYjogeyBpZDogdGFiSWQgfSwgZnJhbWVJZCB9ID0gc3JjO1xuICAgIGNvbnN0IHsgaWQsIGV2ZW50c1RvTm90aWZ5IH0gPSBvcHRzO1xuXG4gICAgY29uc29sZS5pbmZvKCdyZXEgb3B0cycsIG9wdHMpO1xuXG4gICAgaWYgKHJlcUhhbmRsZXJbb3B0cy50eXBlXSkge1xuICAgICAgY29uc3QgZG93bmxvYWRJZCA9IGlkOyAvLyBmYWtlIGRvd25sb2FkSWQgZm9yIGluamVjdC5qc1xuICAgICAgb3B0cy5zcmMgPSBzcmM7XG4gICAgICBvcHRzLnJlcXVlc3RzID0gcmVxdWVzdHM7IC8vIG5lZWRlZCB0byBhcHBlbmQgcmVxIGluIG1lcmdlVmlkZW9cbiAgICAgIG9wdHMub25wcm9ncmVzcyA9IChsb2FkZWQsIHRvdGFsKSA9PiB7XG4gICAgICAgIGlmIChldmVudHNUb05vdGlmeT8uaW5jbHVkZXMoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmluZm8oJ29ucHJvZ3Jlc3MnLCB7bG9hZGVkLCB0b3RhbH0pO1xuICAgICAgICAgIHNlbmRUYWJDbWQodGFiSWQsICdIdHRwUmVxdWVzdGVkJywge1xuICAgICAgICAgICAgdHlwZTogJ3Byb2dyZXNzJywgaWQsIGRvd25sb2FkSWQsIGxvYWRlZCwgdG90YWwsXG4gICAgICAgICAgfSwgeyBmcmFtZUlkIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgb3B0cy5vbmxvYWQgPSAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSB7IHR5cGU6ICdsb2FkJywgZG93bmxvYWRJZCwgZGF0YSwgaWQgfTtcbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgICAgcmVzLmJsb2JiZWQgPSB0cnVlO1xuICAgICAgICAgIHJlcy5jaHVua2VkID0gZmFsc2U7XG4gICAgICAgICAgcmVzLmNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgICAgICAgcmVzLmRhdGEgPSB7IHJlc3BvbnNlOiBibG9iMm9iamVjdFVybChkYXRhKSwgc3RhdHVzOiAnMjAwJyB9O1xuICAgICAgICAgIGRlbGV0ZSByZXMuZG93bmxvYWRJZDtcbiAgICAgICAgfVxuICAgICAgICBzZW5kVGFiQ21kKHRhYklkLCAnSHR0cFJlcXVlc3RlZCcsIHJlcywgeyBmcmFtZUlkIH0pO1xuICAgICAgfTtcbiAgICAgIG9wdHMub25lcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICBzZW5kVGFiQ21kKHRhYklkLCAnSHR0cFJlcXVlc3RlZCcsIHsgdHlwZTogJ2Vycm9yJywgZG93bmxvYWRJZCwgaWQsIGVycm9yIH0sIHsgZnJhbWVJZCB9KTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVxSGFuZGxlcltvcHRzLnR5cGVdKG9wdHMsIGh0dHBSZXF1ZXN0KTtcbiAgICB9XG5cbiAgICByZXF1ZXN0c1tpZF0gPSB7XG4gICAgICBpZCxcbiAgICAgIHRhYklkLFxuICAgICAgZXZlbnRzVG9Ob3RpZnksXG4gICAgICB4aHI6IG5ldyBYTUxIdHRwUmVxdWVzdCgpLFxuICAgIH07XG4gICAgKHRhYlJlcXVlc3RzW3RhYklkXSB8fCAodGFiUmVxdWVzdHNbdGFiSWRdID0ge30pKVtpZF0gPSAxO1xuICAgIGh0dHBSZXF1ZXN0KG9wdHMsIHNyYywgcmVzID0+IHtcbiAgICAgIC8vIGNvbnNvbGUuaW5mbyh7IHJlcywgcmVxOiByZXF1ZXN0c1tpZF0gfSk7XG4gICAgICBpZiAocmVxdWVzdHNbaWRdKSB7XG4gICAgICAgIHNlbmRUYWJDbWQodGFiSWQsICdIdHRwUmVxdWVzdGVkJywgcmVzLCB7IGZyYW1lSWQgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHt2b2lkfSAqL1xuICBBYm9ydFJlcXVlc3QoaWQpIHtcbiAgICBjb25zdCByZXEgPSByZXF1ZXN0c1tpZF07XG4gICAgaWYgKHJlcSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpZiAoY2hyb21lKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBjaHJvbWUuZG93bmxvYWRzLmNhbmNlbChyZXEuaWQpO1xuICAgICAgICBkZWxldGUgcmVxdWVzdHNbcmVxLmlkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcS54aHIuYWJvcnQoKTtcbiAgICAgICAgY2xlYXJSZXF1ZXN0KHJlcSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBSZXZva2VCbG9iKHVybCkge1xuICAgIGNvbnN0IHRpbWVyID0gY2FjaGUucG9wKGB4aHJCbG9iOiR7dXJsfWApO1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICB9XG4gIH0sXG59KTtcblxuY29uc3Qgc3BlY2lhbEhlYWRlcnMgPSBbXG4gICd1c2VyLWFnZW50JyxcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9HbG9zc2FyeS9Gb3JiaWRkZW5faGVhZGVyX25hbWVcbiAgLy8gaHR0cHM6Ly9jcy5jaHJvbWl1bS5vcmcvP3E9ZmlsZTpjYytzeW1ib2w6SXNGb3JiaWRkZW5IZWFkZXIlNUNiXG4gICdhY2NlcHQtY2hhcnNldCcsXG4gICdhY2NlcHQtZW5jb2RpbmcnLFxuICAnYWNjZXNzLWNvbnRyb2wtcmVxdWVzdC1oZWFkZXJzJyxcbiAgJ2FjY2Vzcy1jb250cm9sLXJlcXVlc3QtbWV0aG9kJyxcbiAgJ2Nvbm5lY3Rpb24nLFxuICAnY29udGVudC1sZW5ndGgnLFxuICAnY29va2llJyxcbiAgJ2Nvb2tpZTInLFxuICAnZGF0ZScsXG4gICdkbnQnLFxuICAnZXhwZWN0JyxcbiAgJ2hvc3QnLFxuICAna2VlcC1hbGl2ZScsXG4gICdvcmlnaW4nLFxuICAncmVmZXJlcicsXG4gICd0ZScsXG4gICd0cmFpbGVyJyxcbiAgJ3RyYW5zZmVyLWVuY29kaW5nJyxcbiAgJ3VwZ3JhZGUnLFxuICAndmlhJyxcbl07XG4vLyBjb25zdCB0YXNrcyA9IHt9O1xuY29uc3QgSGVhZGVySW5qZWN0b3IgPSAoKCkgPT4ge1xuICAvKiogQHR5cGUgY2hyb21lLndlYlJlcXVlc3QuUmVxdWVzdEZpbHRlciAqL1xuICBjb25zdCBhcGlGaWx0ZXIgPSB7XG4gICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4gICAgdHlwZXM6IFsneG1saHR0cHJlcXVlc3QnXSxcbiAgfTtcbiAgY29uc3QgRVhUUkFfSEVBREVSUyA9IFtcbiAgICBicm93c2VyLndlYlJlcXVlc3QuT25CZWZvcmVTZW5kSGVhZGVyc09wdGlvbnMuRVhUUkFfSEVBREVSUyxcbiAgXS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IGhlYWRlcnNUb0luamVjdCA9IHt9O1xuICAvKiogQHBhcmFtIHtjaHJvbWUud2ViUmVxdWVzdC5IdHRwSGVhZGVyfSBoZWFkZXIgKi9cbiAgY29uc3QgaXNWbVZlcmlmeSA9IGhlYWRlciA9PiBoZWFkZXIubmFtZSA9PT0gVk1fVkVSSUZZO1xuICBjb25zdCBpc05vdENvb2tpZSA9IGhlYWRlciA9PiAhL15jb29raWUyPyQvaS50ZXN0KGhlYWRlci5uYW1lKTtcbiAgY29uc3QgaXNTZW5kYWJsZSA9IGhlYWRlciA9PiBoZWFkZXIubmFtZSAhPT0gVk1fVkVSSUZZO1xuICBjb25zdCBpc1NlbmRhYmxlQW5vbiA9IGhlYWRlciA9PiBpc1NlbmRhYmxlKGhlYWRlcikgJiYgaXNOb3RDb29raWUoaGVhZGVyKTtcbiAgY29uc3QgUkVfU0VUX0NPT0tJRSA9IC9ec2V0LWNvb2tpZTI/JC9pO1xuICBjb25zdCBSRV9TRVRfQ09PS0lFX1ZBTFVFID0gL15cXHMqKD86X18oU2VjdXJlfEhvc3QpLSk/KFtePVxcc10rKVxccyo9XFxzKihcIik/KFshIy0rXFwtLTo8LVtcXF0tfl0qKVxcMyguKikvO1xuICBjb25zdCBSRV9TRVRfQ09PS0lFX0FUVFIgPSAvXFxzKjs/XFxzKihcXHcrKSg/Oj0oXCIpPyhbISMtK1xcLS06PC1bXFxdLX5dKilcXDIpPy95O1xuICBjb25zdCBTQU1FX1NJVEVfTUFQID0ge1xuICAgIHN0cmljdDogJ3N0cmljdCcsXG4gICAgbGF4OiAnbGF4JyxcbiAgICBub25lOiAnbm9fcmVzdHJpY3Rpb24nLFxuICB9O1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhlYWRlclZhbHVlXG4gICAqIEBwYXJhbSB7Vk1IdHRwUmVxdWVzdH0gcmVxXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIGNvbnN0IHNldENvb2tpZUluU3RvcmUgPSAoaGVhZGVyVmFsdWUsIHJlcSwgdXJsKSA9PiB7XG4gICAgbGV0IG0gPSBSRV9TRVRfQ09PS0lFX1ZBTFVFLmV4ZWMoaGVhZGVyVmFsdWUpO1xuICAgIGlmIChtKSB7XG4gICAgICBjb25zdCBbLCBwcmVmaXgsIG5hbWUsICwgdmFsdWUsIG9wdFN0cl0gPSBtO1xuICAgICAgY29uc3Qgb3B0ID0ge307XG4gICAgICBjb25zdCBpc0hvc3QgPSBwcmVmaXggPT09ICdIb3N0JztcbiAgICAgIFJFX1NFVF9DT09LSUVfQVRUUi5sYXN0SW5kZXggPSAwO1xuICAgICAgd2hpbGUgKChtID0gUkVfU0VUX0NPT0tJRV9BVFRSLmV4ZWMob3B0U3RyKSkpIHtcbiAgICAgICAgb3B0W21bMV0udG9Mb3dlckNhc2UoKV0gPSBtWzNdO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2FtZVNpdGUgPSBvcHQuc2FtZVNpdGU/LnRvTG93ZXJDYXNlKCk7XG4gICAgICBicm93c2VyLmNvb2tpZXMuc2V0KHtcbiAgICAgICAgdXJsLFxuICAgICAgICBuYW1lLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgZG9tYWluOiBpc0hvc3QgPyB1bmRlZmluZWQgOiBvcHQuZG9tYWluLFxuICAgICAgICBleHBpcmF0aW9uRGF0ZTogTWF0aC5tYXgoMCwgK25ldyBEYXRlKG9wdFsnbWF4LWFnZSddICogMTAwMCB8fCBvcHQuZXhwaXJlcykpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgaHR0cE9ubHk6ICdodHRwb25seScgaW4gb3B0LFxuICAgICAgICBwYXRoOiBpc0hvc3QgPyAnLycgOiBvcHQucGF0aCxcbiAgICAgICAgc2FtZVNpdGU6IFNBTUVfU0lURV9NQVBbc2FtZVNpdGVdLFxuICAgICAgICBzZWN1cmU6IHVybC5zdGFydHNXaXRoKCdodHRwczonKSAmJiAoISFwcmVmaXggfHwgc2FtZVNpdGUgPT09ICdub25lJyB8fCAnc2VjdXJlJyBpbiBvcHQpLFxuICAgICAgICBzdG9yZUlkOiByZXEuc3RvcmVJZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYXBpRXZlbnRzID0ge1xuICAgIG9uQmVmb3JlU2VuZEhlYWRlcnM6IHtcbiAgICAgIG9wdGlvbnM6IFsncmVxdWVzdEhlYWRlcnMnLCAnYmxvY2tpbmcnLCAuLi5FWFRSQV9IRUFERVJTXSxcbiAgICAgIC8qKiBAcGFyYW0ge2Nocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RIZWFkZXJzRGV0YWlsc30gZGV0YWlscyAqL1xuICAgICAgbGlzdGVuZXIoeyByZXF1ZXN0SGVhZGVyczogaGVhZGVycywgcmVxdWVzdElkIH0pIHtcbiAgICAgICAgLy8gb25seSB0aGUgZmlyc3QgY2FsbCBkdXJpbmcgYSByZWRpcmVjdC9hdXRoIGNoYWluIHdpbGwgaGF2ZSBWTS1WZXJpZnkgaGVhZGVyXG4gICAgICAgIGNvbnN0IHJlcUlkID0gaGVhZGVycy5maW5kKGlzVm1WZXJpZnkpPy52YWx1ZSB8fCB2ZXJpZnlbcmVxdWVzdElkXTtcbiAgICAgICAgY29uc3QgcmVxID0gcmVxSWQgJiYgcmVxdWVzdHNbcmVxSWRdO1xuICAgICAgICBpZiAocmVxSWQgJiYgcmVxKSB7XG4gICAgICAgICAgdmVyaWZ5W3JlcXVlc3RJZF0gPSByZXFJZDtcbiAgICAgICAgICByZXEuY29yZUlkID0gcmVxdWVzdElkO1xuICAgICAgICAgIGhlYWRlcnMgPSAocmVxLm5vTmF0aXZlQ29va2llID8gaGVhZGVycy5maWx0ZXIoaXNOb3RDb29raWUpIDogaGVhZGVycylcbiAgICAgICAgICAuY29uY2F0KGhlYWRlcnNUb0luamVjdFtyZXFJZF0gfHwgW10pXG4gICAgICAgICAgLmZpbHRlcihyZXEuYW5vbnltb3VzID8gaXNTZW5kYWJsZUFub24gOiBpc1NlbmRhYmxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyByZXF1ZXN0SGVhZGVyczogaGVhZGVycyB9O1xuICAgICAgfSxcbiAgICB9LFxuICAgIG9uSGVhZGVyc1JlY2VpdmVkOiB7XG4gICAgICBvcHRpb25zOiBbJ3Jlc3BvbnNlSGVhZGVycycsICdibG9ja2luZycsIC4uLkVYVFJBX0hFQURFUlNdLFxuICAgICAgLyoqIEBwYXJhbSB7Y2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdEhlYWRlcnNEZXRhaWxzfSBkZXRhaWxzICovXG4gICAgICBsaXN0ZW5lcih7IHJlc3BvbnNlSGVhZGVyczogaGVhZGVycywgcmVxdWVzdElkLCB1cmwgfSkge1xuICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0c1t2ZXJpZnlbcmVxdWVzdElkXV07XG4gICAgICAgIGlmIChyZXEpIHtcbiAgICAgICAgICBpZiAocmVxLmFub255bW91cyB8fCByZXEuc3RvcmVJZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuZmlsdGVyKGggPT4gKFxuICAgICAgICAgICAgICAhUkVfU0VUX0NPT0tJRS50ZXN0KGgubmFtZSlcbiAgICAgICAgICAgICAgfHwgIXJlcS5zdG9yZUlkXG4gICAgICAgICAgICAgIHx8IHNldENvb2tpZUluU3RvcmUoaC52YWx1ZSwgcmVxLCB1cmwpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVxLnJlc3BvbnNlSGVhZGVycyA9IGhlYWRlcnMubWFwKGVuY29kZVdlYlJlcXVlc3RIZWFkZXIpLmpvaW4oJycpO1xuICAgICAgICAgIHJldHVybiB7IHJlc3BvbnNlSGVhZGVyczogaGVhZGVycyB9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIC8vIENocm9tZSA3NC05MSBuZWVkcyBhbiBleHRyYUhlYWRlcnMgbGlzdGVuZXIgYXQgdGFiIGxvYWQgc3RhcnQsIGh0dHBzOi8vY3JidWcuY29tLzEwNzQyODJcbiAgLy8gV2UncmUgYXR0YWNoaW5nIGEgbm8tb3AgaW4gbm9uLWJsb2NraW5nIG1vZGUgc28gaXQncyB2ZXJ5IGxpZ2h0d2VpZ2h0IGFuZCBmYXN0LlxuICBpZiAodWEuY2hyb21lID49IDc0ICYmIHVhLmNocm9tZSA8PSA5MSkge1xuICAgIGJyb3dzZXIud2ViUmVxdWVzdC5vbkJlZm9yZVNlbmRIZWFkZXJzLmFkZExpc3RlbmVyKG5vb3AsIGFwaUZpbHRlciwgWydleHRyYUhlYWRlcnMnXSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhZGQocmVxSWQsIGhlYWRlcnMpIHtcbiAgICAgIC8vIG5lZWQgdG8gc2V0IHRoZSBlbnRyeSBldmVuIGlmIGl0J3MgZW1wdHkgW10gc28gdGhhdCAnaWYnIGNoZWNrIGluIGRlbCgpIHJ1bnMgb25seSBvbmNlXG4gICAgICBoZWFkZXJzVG9JbmplY3RbcmVxSWRdID0gaGVhZGVycztcbiAgICAgIC8vIG5lZWQgdGhlIGxpc3RlbmVyIHRvIGdldCB0aGUgcmVxdWVzdElkXG4gICAgICBhcGlFdmVudHM6OmZvckVhY2hFbnRyeSgoW25hbWUsIHsgbGlzdGVuZXIsIG9wdGlvbnMgfV0pID0+IHtcbiAgICAgICAgYnJvd3Nlci53ZWJSZXF1ZXN0W25hbWVdLmFkZExpc3RlbmVyKGxpc3RlbmVyLCBhcGlGaWx0ZXIsIG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBkZWwocmVxSWQpIHtcbiAgICAgIGlmIChyZXFJZCBpbiBoZWFkZXJzVG9JbmplY3QpIHtcbiAgICAgICAgZGVsZXRlIGhlYWRlcnNUb0luamVjdFtyZXFJZF07XG4gICAgICAgIGlmIChpc0VtcHR5KGhlYWRlcnNUb0luamVjdCkpIHtcbiAgICAgICAgICBhcGlFdmVudHM6OmZvckVhY2hFbnRyeSgoW25hbWUsIHsgbGlzdGVuZXIgfV0pID0+IHtcbiAgICAgICAgICAgIGJyb3dzZXIud2ViUmVxdWVzdFtuYW1lXS5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufSkoKTtcblxuLyogMU1CIHRha2VzIH4yMG1zIHRvIGVuY29kZS9kZWNvZGUgc28gaXQgZG9lc24ndCBibG9jayB0aGUgcHJvY2VzcyBvZiB0aGUgZXh0ZW5zaW9uIGFuZCB3ZWIgcGFnZSxcbiAqIHdoaWNoIGxldHMgdXMgYW5kIHRoZW0gYmUgcmVzcG9uc2l2ZSB0byBvdGhlciBldmVudHMgb3IgdXNlciBpbnB1dC4gKi9cbmNvbnN0IENIVU5LX1NJWkUgPSAxZTY7XG5cbmFzeW5jIGZ1bmN0aW9uIGJsb2IyY2h1bmsocmVzcG9uc2UsIGluZGV4KSB7XG4gIHJldHVybiBibG9iMmJhc2U2NChyZXNwb25zZSwgaW5kZXggKiBDSFVOS19TSVpFLCBDSFVOS19TSVpFKTtcbn1cblxuZnVuY3Rpb24gYmxvYjJvYmplY3RVcmwocmVzcG9uc2UpIHtcbiAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZXNwb25zZSk7XG4gIGNhY2hlLnB1dChgeGhyQmxvYjoke3VybH1gLCBzZXRUaW1lb3V0KGNvbW1hbmRzLlJldm9rZUJsb2IsIDYwZTMsIHVybCksIDYxZTMpO1xuICByZXR1cm4gdXJsO1xufVxuXG4vKiogQHBhcmFtIHtWTUh0dHBSZXF1ZXN0fSByZXEgKi9cbmZ1bmN0aW9uIHhockNhbGxiYWNrV3JhcHBlcihyZXEpIHtcbiAgbGV0IGxhc3RQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIGxldCBjb250ZW50VHlwZTtcbiAgbGV0IGRhdGFTaXplO1xuICBsZXQgbnVtQ2h1bmtzO1xuICBsZXQgcmVzcG9uc2U7XG4gIGxldCByZXNwb25zZVRleHQ7XG4gIGxldCByZXNwb25zZUhlYWRlcnM7XG4gIC8vIGxldCBzZW50ID0gZmFsc2U7XG4gIGNvbnN0IHsgaWQsIGJsb2JiZWQsIGNodW5rZWQsIHhociB9ID0gcmVxO1xuICAvLyBDaHJvbWUgZW5jb2RlcyBtZXNzYWdlcyB0byBVVEY4IHNvIHRoZXkgY2FuIGdyb3cgdXAgdG8gNHggYnV0IDY0TUIgaXMgdGhlIG1lc3NhZ2Ugc2l6ZSBsaW1pdFxuICBjb25zdCBnZXRDaHVuayA9IGJsb2JiZWQgJiYgYmxvYjJvYmplY3RVcmwgfHwgY2h1bmtlZCAmJiBibG9iMmNodW5rO1xuICBjb25zdCBnZXRSZXNwb25zZUhlYWRlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IHJlcS5yZXNwb25zZUhlYWRlcnMgfHwgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuICAgIGlmIChyZXNwb25zZUhlYWRlcnMgIT09IGhlYWRlcnMpIHtcbiAgICAgIHJlc3BvbnNlSGVhZGVycyA9IGhlYWRlcnM7XG4gICAgICByZXR1cm4geyByZXNwb25zZUhlYWRlcnMgfTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoZXZ0KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGV2dC50eXBlO1xuICAgIGlmICghY29udGVudFR5cGUpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICB9XG4gICAgaWYgKHhoci5yZXNwb25zZSAhPT0gcmVzcG9uc2UpIHtcbiAgICAgIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlO1xuICAgICAgLy8gc2VudCA9IGZhbHNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgaWYgKHJlc3BvbnNlVGV4dCA9PT0gcmVzcG9uc2UpIHJlc3BvbnNlVGV4dCA9IFsnc2FtZSddO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmUgaWYgcmVzcG9uc2VUZXh0IGlzIHVucmVhY2hhYmxlXG4gICAgICB9XG4gICAgICBpZiAoKGJsb2JiZWQgfHwgY2h1bmtlZCkgJiYgcmVzcG9uc2UpIHtcbiAgICAgICAgZGF0YVNpemUgPSByZXNwb25zZS5zaXplO1xuICAgICAgICBudW1DaHVua3MgPSBjaHVua2VkICYmIE1hdGguY2VpbChkYXRhU2l6ZSAvIENIVU5LX1NJWkUpIHx8IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNob3VsZE5vdGlmeSA9IHJlcS5ldmVudHNUb05vdGlmeS5pbmNsdWRlcyh0eXBlKTtcbiAgICAvLyBvbmx5IHNlbmQgcmVzcG9uc2Ugd2hlbiBYSFIgaXMgY29tcGxldGVcbiAgICBjb25zdCBzaG91bGRTZW5kUmVzcG9uc2UgPSB4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiBzaG91bGROb3RpZnk7XG4gICAgbGFzdFByb21pc2UgPSBsYXN0UHJvbWlzZS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChzaG91bGRTZW5kUmVzcG9uc2UgJiYgYmxvYmJlZCAmJiByZXEudHlwZSA9PT0gJ2Rvd25sb2FkJykge1xuICAgICAgICBpZiAocmVxLmZpbGVOYW1lICYmIGNocm9tZSkge1xuICAgICAgICAgIGNvbnN0IGJsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm4gY2hyb21lLmRvd25sb2Fkcy5kb3dubG9hZCh7XG4gICAgICAgICAgICB1cmw6IGJsb2JVcmwsXG4gICAgICAgICAgICBmaWxlbmFtZTogcmVxLmZpbGVOYW1lLFxuICAgICAgICAgIH0sIGRvd25sb2FkSWQgPT4ge1xuICAgICAgICAgICAgcmVxLmNiKHtcbiAgICAgICAgICAgICAgYmxvYmJlZCxcbiAgICAgICAgICAgICAgY2h1bmtlZCxcbiAgICAgICAgICAgICAgY29udGVudFR5cGUsXG4gICAgICAgICAgICAgIGRhdGFTaXplLFxuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgZGF0YTogeyBmaW5hbFVybDogeGhyLnJlc3BvbnNlVVJMLCByZXNwb25zZTogJycsIHJlc3BvbnNlVGV4dDogZG93bmxvYWRJZCB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGJsb2JVcmwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXEuY2Ioe1xuICAgICAgICAgIGJsb2JiZWQsXG4gICAgICAgICAgY2h1bmtlZCxcbiAgICAgICAgICBjb250ZW50VHlwZSxcbiAgICAgICAgICBkYXRhU2l6ZSxcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5pbmZvKHsgZXZ0IH0pO1xuICAgICAgYXdhaXQgcmVxLmNiKHtcbiAgICAgICAgYmxvYmJlZCxcbiAgICAgICAgY2h1bmtlZCxcbiAgICAgICAgY29udGVudFR5cGUsXG4gICAgICAgIGRhdGFTaXplLFxuICAgICAgICBpZCxcbiAgICAgICAgbnVtQ2h1bmtzLFxuICAgICAgICB0eXBlLFxuICAgICAgICBkYXRhOiBzaG91bGROb3RpZnkgJiYge1xuICAgICAgICAgIGZpbmFsVXJsOiB4aHIucmVzcG9uc2VVUkwsXG4gICAgICAgICAgLi4uZ2V0UmVzcG9uc2VIZWFkZXJzKCksXG4gICAgICAgICAgLi4ub2JqZWN0UGljayh4aHIsIFsncmVhZHlTdGF0ZScsICdzdGF0dXMnLCAnc3RhdHVzVGV4dCddKSxcbiAgICAgICAgICAuLi4oJ2xvYWRlZCcgaW4gZXZ0KSAmJiBvYmplY3RQaWNrKGV2dCwgWydsZW5ndGhDb21wdXRhYmxlJywgJ2xvYWRlZCcsICd0b3RhbCddKSxcbiAgICAgICAgICByZXNwb25zZTogc2hvdWxkU2VuZFJlc3BvbnNlXG4gICAgICAgICAgICA/IG51bUNodW5rcyAmJiBhd2FpdCBnZXRDaHVuayhyZXNwb25zZSwgMCkgfHwgcmVzcG9uc2VcbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICByZXNwb25zZVRleHQ6IHNob3VsZFNlbmRSZXNwb25zZVxuICAgICAgICAgICAgPyByZXNwb25zZVRleHRcbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHNob3VsZFNlbmRSZXNwb25zZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bUNodW5rczsgaSArPSAxKSB7XG4gICAgICAgICAgYXdhaXQgcmVxLmNiKHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgY2h1bms6IHtcbiAgICAgICAgICAgICAgcG9zOiBpICogQ0hVTktfU0laRSxcbiAgICAgICAgICAgICAgZGF0YTogYXdhaXQgZ2V0Q2h1bmsocmVzcG9uc2UsIGkpLFxuICAgICAgICAgICAgICBsYXN0OiBpICsgMSA9PT0gbnVtQ2h1bmtzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdsb2FkZW5kJykge1xuICAgICAgICBjbGVhclJlcXVlc3QocmVxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNTcGVjaWFsSGVhZGVyKGxvd2VySGVhZGVyKSB7XG4gIHJldHVybiBzcGVjaWFsSGVhZGVycy5pbmNsdWRlcyhsb3dlckhlYWRlcilcbiAgICB8fCBsb3dlckhlYWRlci5zdGFydHNXaXRoKCdwcm94eS0nKVxuICAgIHx8IGxvd2VySGVhZGVyLnN0YXJ0c1dpdGgoJ3NlYy0nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQHBhcmFtIHtjaHJvbWUucnVudGltZS5NZXNzYWdlU2VuZGVyIHwgYnJvd3Nlci5ydW50aW1lLk1lc3NhZ2VTZW5kZXJ9IHNyY1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2JcbiAqL1xuYXN5bmMgZnVuY3Rpb24gaHR0cFJlcXVlc3Qob3B0cywgc3JjLCBjYikge1xuICBjb25zdCB7IHRhYiB9ID0gc3JjO1xuICBjb25zdCB7IGluY29nbml0byB9ID0gdGFiO1xuICBjb25zdCB7IGFub255bW91cywgaWQsIG92ZXJyaWRlTWltZVR5cGUsIHhoclR5cGUsIHVybCB9ID0gb3B0cztcbiAgY29uc3QgcmVxID0gcmVxdWVzdHNbaWRdO1xuICBpZiAoIXJlcSB8fCByZXEuY2IpIHJldHVybjtcbiAgcmVxLmNiID0gY2I7XG4gIHJlcS50eXBlID0gb3B0cy50eXBlO1xuICByZXEuZmlsZU5hbWUgPSBvcHRzLmZpbGVOYW1lO1xuICByZXEuYW5vbnltb3VzID0gYW5vbnltb3VzO1xuICBjb25zdCB7IHhociB9ID0gcmVxO1xuICBjb25zdCB2bUhlYWRlcnMgPSBbXTtcbiAgLy8gRmlyZWZveCBjYW4gc2VuZCBCbG9iL0FycmF5QnVmZmVyIGRpcmVjdGx5XG4gIGNvbnN0IGNodW5rZWQgPSAhSVNfRklSRUZPWCAmJiBpbmNvZ25pdG87XG4gIGNvbnN0IGJsb2JiZWQgPSB4aHJUeXBlICYmICFJU19GSVJFRk9YICYmICFpbmNvZ25pdG87XG4gIGNvbnN0IFtib2R5LCBjb250ZW50VHlwZV0gPSBkZWNvZGVCb2R5KG9wdHMuZGF0YSk7XG4gIC8vIENocm9tZSBjYW4ndCBmZXRjaCBCbG9iIFVSTCBpbiBpbmNvZ25pdG8gc28gd2UgdXNlIGNodW5rc1xuICByZXEuYmxvYmJlZCA9IGJsb2JiZWQ7XG4gIHJlcS5jaHVua2VkID0gY2h1bmtlZDtcbiAgLy8gRmlyZWZveCBkb2Vzbid0IHNlbmQgY29va2llcywgaHR0cHM6Ly9naXRodWIuY29tL3Zpb2xlbnRtb25rZXkvdmlvbGVudG1vbmtleS9pc3N1ZXMvNjA2XG4gIC8vIEJvdGggQ2hyb21lICYgRkYgbmVlZCBleHBsaWNpdCByb3V0aW5nIG9mIGNvb2tpZXMgaW4gY29udGFpbmVycyBvciBpbmNvZ25pdG9cbiAgbGV0IHNob3VsZFNlbmRDb29raWVzID0gIWFub255bW91cyAmJiAoaW5jb2duaXRvIHx8IElTX0ZJUkVGT1gpO1xuICB4aHIub3BlbihvcHRzLm1ldGhvZCB8fCAnR0VUJywgdXJsLCB0cnVlLCBvcHRzLnVzZXIgfHwgJycsIG9wdHMucGFzc3dvcmQgfHwgJycpO1xuICB4aHIuc2V0UmVxdWVzdEhlYWRlcihWTV9WRVJJRlksIGlkKTtcbiAgaWYgKGNvbnRlbnRUeXBlKSB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuICBvcHRzLmhlYWRlcnM6OmZvckVhY2hFbnRyeSgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoaXNTcGVjaWFsSGVhZGVyKGxvd2VyTmFtZSkpIHtcbiAgICAgIHZtSGVhZGVycy5wdXNoKHsgbmFtZSwgdmFsdWUgfSk7XG4gICAgfSBlbHNlIGlmICghbG93ZXJOYW1lLnN0YXJ0c1dpdGgoJ3ZtLScpKSB7XG4gICAgICAvLyBgVk0tYCBoZWFkZXJzIGFyZSByZXNlcnZlZFxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICBpZiAobG93ZXJOYW1lID09PSAnY29va2llJykge1xuICAgICAgc2hvdWxkU2VuZENvb2tpZXMgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICB4aHIucmVzcG9uc2VUeXBlID0gKGNodW5rZWQgfHwgYmxvYmJlZCkgJiYgJ2Jsb2InIHx8IHhoclR5cGUgfHwgJ3RleHQnO1xuICB4aHIudGltZW91dCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDB4N0ZGRl9GRkZGLCBvcHRzLnRpbWVvdXQpKSB8fCAwO1xuICBpZiAob3ZlcnJpZGVNaW1lVHlwZSkgeGhyLm92ZXJyaWRlTWltZVR5cGUob3ZlcnJpZGVNaW1lVHlwZSk7XG4gIGlmIChzaG91bGRTZW5kQ29va2llcykge1xuICAgIHJlcS5ub05hdGl2ZUNvb2tpZSA9IHRydWU7XG4gICAgZm9yIChjb25zdCBzdG9yZSBvZiBhd2FpdCBicm93c2VyLmNvb2tpZXMuZ2V0QWxsQ29va2llU3RvcmVzKCkpIHtcbiAgICAgIGlmIChzdG9yZS50YWJJZHMuaW5jbHVkZXModGFiLmlkKSkge1xuICAgICAgICBpZiAoSVNfRklSRUZPWCA/IHN0b3JlLmlkICE9PSAnZmlyZWZveC1kZWZhdWx0JyA6IHN0b3JlLmlkICE9PSAnMCcpIHtcbiAgICAgICAgICAvKiBDb29raWUgcm91dGluZy4gRm9yIHRoZSBtYWluIHN0b3JlIHdlIHJlbHkgb24gdGhlIGJyb3dzZXIuXG4gICAgICAgICAgICogVGhlIGlkcyBhcmUgaGFyZC1jb2RlZCBhcyBgc3RvcmVzYCBtYXkgb21pdCB0aGUgbWFpbiBzdG9yZSBpZiBubyBzdWNoIHRhYnMgYXJlIG9wZW4uICovXG4gICAgICAgICAgcmVxLnN0b3JlSWQgPSBzdG9yZS5pZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgY29uc3QgY29va2llcyA9IChhd2FpdCBicm93c2VyLmNvb2tpZXMuZ2V0QWxsKHtcbiAgICAgIHVybCxcbiAgICAgIHN0b3JlSWQ6IHJlcS5zdG9yZUlkLFxuICAgICAgLi4udWEuZmlyZWZveCA+PSA1OSAmJiB7IGZpcnN0UGFydHlEb21haW46IG51bGwgfSxcbiAgICB9KSkuZmlsdGVyKGMgPT4gYy5zZXNzaW9uIHx8IGMuZXhwaXJhdGlvbkRhdGUgPiBub3cpOyAvLyBGRiByZXBvcnRzIGV4cGlyZWQgY29va2llcyFcbiAgICBpZiAoY29va2llcy5sZW5ndGgpIHtcbiAgICAgIHZtSGVhZGVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2Nvb2tpZScsXG4gICAgICAgIHZhbHVlOiBjb29raWVzLm1hcChjID0+IGAke2MubmFtZX09JHtjLnZhbHVlfTtgKS5qb2luKCcgJyksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgSGVhZGVySW5qZWN0b3IuYWRkKGlkLCB2bUhlYWRlcnMpO1xuICBjb25zdCBjYWxsYmFjayA9IHhockNhbGxiYWNrV3JhcHBlcihyZXEpO1xuICByZXEuZXZlbnRzVG9Ob3RpZnkuZm9yRWFjaChldnQgPT4geyB4aHJbYG9uJHtldnR9YF0gPSBjYWxsYmFjazsgfSk7XG4gIHhoci5vbmxvYWRlbmQgPSBjYWxsYmFjazsgLy8gYWx3YXlzIHNlbmQgaXQgZm9yIHRoZSBpbnRlcm5hbCBjbGVhbnVwXG4gIHhoci5zZW5kKGJvZHkpO1xufVxuXG4vKiogQHBhcmFtIHtWTUh0dHBSZXF1ZXN0fSByZXEgKi9cbmZ1bmN0aW9uIGNsZWFyUmVxdWVzdChyZXEpIHtcbiAgaWYgKHJlcS5jb3JlSWQpIGRlbGV0ZSB2ZXJpZnlbcmVxLmNvcmVJZF07XG4gIGRlbGV0ZSByZXF1ZXN0c1tyZXEuaWRdO1xuICBkZWxldGUgKHRhYlJlcXVlc3RzW3JlcS50YWJJZF0gfHwge30pW3JlcS5pZF07XG4gIEhlYWRlckluamVjdG9yLmRlbChyZXEuaWQpO1xufVxuXG4vKiogUG9seWZpbGwgZm9yIENocm9tZSdzIGluYWJpbGl0eSB0byBzZW5kIGNvbXBsZXggdHlwZXMgb3ZlciBleHRlbnNpb24gbWVzc2FnaW5nICovXG5mdW5jdGlvbiBkZWNvZGVCb2R5KFtib2R5LCB0eXBlLCB3YXNCbG9iXSkge1xuICBpZiAodHlwZSA9PT0gJ3F1ZXJ5Jykge1xuICAgIHR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgfSBlbHNlIGlmICh0eXBlKSB7XG4gICAgLy8gNXggdGltZXMgZmFzdGVyIHRoYW4gZmV0Y2goKSB3aGljaCB3YXN0ZXMgdGltZSBvbiBpbnRlci1wcm9jZXNzIGNvbW11bmljYXRpb25cbiAgICBjb25zdCByZXMgPSBzdHJpbmcydWludDhhcnJheShhdG9iKGJvZHkuc2xpY2UoYm9keS5pbmRleE9mKCcsJykgKyAxKSkpO1xuICAgIGlmICghd2FzQmxvYikge1xuICAgICAgdHlwZSA9IGJvZHkubWF0Y2goL15kYXRhOiguKz8pO2Jhc2U2NC8pWzFdLnJlcGxhY2UoLyhib3VuZGFyeT0pW147XSsvLFxuICAgICAgICAvLyB1c2luZyBhIGZ1bmN0aW9uIHNvIGl0IHJ1bnMgb25seSBpZiBcImJvdW5kYXJ5XCIgd2FzIGZvdW5kXG4gICAgICAgIChfLCBwMSkgPT4gcDEgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLnJlcy5zbGljZSgyLCByZXMuaW5kZXhPZigxMykpKSk7XG4gICAgfVxuICAgIGJvZHkgPSByZXM7XG4gIH1cbiAgcmV0dXJuIFtib2R5LCB0eXBlXTtcbn1cblxuLy8gV2F0Y2ggVVJMIHJlZGlyZWN0c1xuLy8gYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVkaXJlY3QuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XG4vLyAgIGNvbnN0IHJlcUlkID0gdmVyaWZ5W2RldGFpbHMucmVxdWVzdElkXTtcbi8vICAgaWYgKHJlcUlkKSB7XG4vLyAgICAgY29uc3QgcmVxID0gcmVxdWVzdHNbcmVxSWRdO1xuLy8gICAgIGlmIChyZXEpIHJlcS5maW5hbFVybCA9IGRldGFpbHMucmVkaXJlY3RVcmw7XG4vLyAgIH1cbi8vIH0sIHtcbi8vICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4vLyAgIHR5cGVzOiBbJ3htbGh0dHByZXF1ZXN0J10sXG4vLyB9KTtcblxuLy8gdGFza3MgYXJlIG5vdCBuZWNlc3Nhcnkgbm93LCB0dXJuZWQgb2ZmXG4vLyBTdG9wIHJlZGlyZWN0c1xuLy8gYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkLmFkZExpc3RlbmVyKGRldGFpbHMgPT4ge1xuLy8gICBjb25zdCB0YXNrID0gdGFza3NbZGV0YWlscy5yZXF1ZXN0SWRdO1xuLy8gICBpZiAodGFzaykge1xuLy8gICAgIGRlbGV0ZSB0YXNrc1tkZXRhaWxzLnJlcXVlc3RJZF07XG4vLyAgICAgaWYgKHRhc2sgPT09ICdHZXQtTG9jYXRpb24nICYmIFszMDEsIDMwMiwgMzAzXS5pbmNsdWRlcyhkZXRhaWxzLnN0YXR1c0NvZGUpKSB7XG4vLyAgICAgICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRldGFpbHMucmVzcG9uc2VIZWFkZXJzLmZpbmQoXG4vLyAgICAgICAgIGhlYWRlciA9PiBoZWFkZXIubmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbG9jYXRpb24nKTtcbi8vICAgICAgIGNvbnN0IGJhc2U2NCA9IGxvY2F0aW9uSGVhZGVyICYmIGxvY2F0aW9uSGVhZGVyLnZhbHVlO1xuLy8gICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcmVkaXJlY3RVcmw6IGBkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwke2Jhc2U2NCB8fCAnJ31gLFxuLy8gICAgICAgfTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH0sIHtcbi8vICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4vLyAgIHR5cGVzOiBbJ3htbGh0dHByZXF1ZXN0J10sXG4vLyB9LCBbJ2Jsb2NraW5nJywgJ3Jlc3BvbnNlSGVhZGVycyddKTtcbi8vIGJyb3dzZXIud2ViUmVxdWVzdC5vbkNvbXBsZXRlZC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcbi8vICAgZGVsZXRlIHRhc2tzW2RldGFpbHMucmVxdWVzdElkXTtcbi8vIH0sIHtcbi8vICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4vLyAgIHR5cGVzOiBbJ3htbGh0dHByZXF1ZXN0J10sXG4vLyB9KTtcbi8vIGJyb3dzZXIud2ViUmVxdWVzdC5vbkVycm9yT2NjdXJyZWQuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XG4vLyAgIGRlbGV0ZSB0YXNrc1tkZXRhaWxzLnJlcXVlc3RJZF07XG4vLyB9LCB7XG4vLyAgIHVybHM6IFsnPGFsbF91cmxzPiddLFxuLy8gICB0eXBlczogWyd4bWxodHRwcmVxdWVzdCddLFxuLy8gfSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbmZpcm1JbnN0YWxsKHsgY29kZSwgZnJvbSwgdXJsIH0sIHsgdGFiID0ge30gfSkge1xuICBpZiAoIWNvZGUpIGNvZGUgPSAoYXdhaXQgcmVxdWVzdCh1cmwpKS5kYXRhO1xuICAvLyBUT0RPOiBkaXNwbGF5IHRoZSBlcnJvciBpbiBVSVxuICBpZiAoIWlzVXNlclNjcmlwdChjb2RlKSkgdGhyb3cgaTE4bignbXNnSW52YWxpZFNjcmlwdCcpO1xuICBjYWNoZS5wdXQodXJsLCBjb2RlLCAzMDAwKTtcbiAgY29uc3QgY29uZmlybUtleSA9IGdldFVuaXFJZCgpO1xuICBjb25zdCB7IGFjdGl2ZSwgaWQ6IHRhYklkLCBpbmNvZ25pdG8gfSA9IHRhYjtcbiAgLy8gTm90IHRlc3RpbmcgdGFiLnBlbmRpbmdVcmwgYmVjYXVzZSBpdCB3aWxsIGJlIGFsd2F5cyBlcXVhbCB0byBgdXJsYFxuICBjb25zdCBjYW5SZXBsYWNlQ3VyVGFiID0gKCFpbmNvZ25pdG8gfHwgSVNfRklSRUZPWCkgJiYgKFxuICAgIHVybCA9PT0gZnJvbVxuICAgIHx8IGNhY2hlLmhhcyhgYXV0b2Nsb3NlOiR7dGFiSWR9YClcbiAgICB8fCAvXihjaHJvbWU6XFwvXFwvKG5ld3RhYnxzdGFydHBhZ2UpXFwvfGFib3V0Oihob21lfG5ld3RhYikpJC8udGVzdChmcm9tKSk7XG4gIC8qKiBAbmFtZXNwYWNlIFZNQ29uZmlybUNhY2hlICovXG4gIGNhY2hlLnB1dChgY29uZmlybS0ke2NvbmZpcm1LZXl9YCwgeyBpbmNvZ25pdG8sIHVybCwgZnJvbSwgdGFiSWQsIGZmOiB1YS5maXJlZm94IH0pO1xuICBjb25zdCBjb25maXJtVXJsID0gQ09ORklSTV9VUkxfQkFTRSArIGNvbmZpcm1LZXk7XG4gIGNvbnN0IHsgd2luZG93SWQgfSA9IGNhblJlcGxhY2VDdXJUYWJcbiAgICA/IGF3YWl0IGJyb3dzZXIudGFicy51cGRhdGUodGFiSWQsIHsgdXJsOiBjb25maXJtVXJsIH0pXG4gICAgOiBhd2FpdCBjb21tYW5kcy5UYWJPcGVuKHsgdXJsOiBjb25maXJtVXJsLCBhY3RpdmU6ICEhYWN0aXZlIH0sIHsgdGFiIH0pO1xuICBpZiAoYWN0aXZlICYmIHdpbmRvd0lkICE9PSB0YWIud2luZG93SWQpIHtcbiAgICBhd2FpdCBicm93c2VyLndpbmRvd3MudXBkYXRlKHdpbmRvd0lkLCB7IGZvY3VzZWQ6IHRydWUgfSk7XG4gIH1cbn1cblxuY29uc3Qgd2hpdGVsaXN0UmUgPSBuZXcgUmVnRXhwKGBeaHR0cHM6Ly8oJHtcbiAgW1xuICAgICdncmVhc3lmb3JrXFxcXC5vcmcvc2NyaXB0cy8lL2NvZGUvJyxcbiAgICAnb3BlbnVzZXJqc1xcXFwub3JnL2luc3RhbGwvJS8nLFxuICAgICdnaXRodWJcXFxcLmNvbS8lLyUvcmF3LyUvJyxcbiAgICAnZ2l0aHViXFxcXC5jb20vJS8lL3JlbGVhc2VzLyUvZG93bmxvYWQvJyxcbiAgICAncmF3XFxcXC5naXRodWJ1c2VyY29udGVudFxcXFwuY29tKC8lKXszfS8nLFxuICAgICdnaXN0XFxcXC5naXRodWJcXFxcLmNvbS8uKj8vJyxcbiAgXS5qb2luKCd8Jylcbn0pJT9cXFxcLnVzZXJcXFxcLmpzKFs/I118JClgLnJlcGxhY2UoLyUvZywgJ1teL10qJykpO1xuXG5jb25zdCBibGFja2xpc3RSZSA9IG5ldyBSZWdFeHAoYF5odHRwczovLygke1xuICBbXG4gICAgJyhnaXN0XFxcXC4pP2dpdGh1YlxcXFwuY29tJyxcbiAgICAnZ3JlYXN5Zm9ya1xcXFwub3JnJyxcbiAgICAnb3BlbnVzZXJqc1xcXFwub3JnJyxcbiAgXS5qb2luKCd8Jylcbn0pL2ApO1xuXG5jb25zdCByZXNvbHZlVmlydHVhbFVybCA9IHVybCA9PiAoXG4gIGAke2V4dGVuc2lvblJvb3R9b3B0aW9ucy9pbmRleC5odG1sI3NjcmlwdHMvJHsrdXJsLnNwbGl0KCcjJylbMV19YFxuKTtcbi8vIEZGIGNhbid0IGludGVyY2VwdCB2aXJ0dWFsIC51c2VyLmpzIFVSTCB2aWEgd2ViUmVxdWVzdCwgc28gd2UgcmVkaXJlY3QgaXQgZXhwbGljaXRseVxuY29uc3QgdmlydHVhbFVybFJlID0gSVNfRklSRUZPWCAmJiBuZXcgUmVnRXhwKChcbiAgYF4odmlldy1zb3VyY2U6KT8oJHtleHRlbnNpb25Sb290LnJlcGxhY2UoJzovLycsICckJik/Jyl9W14vXSpcXFxcLnVzZXJcXFxcLmpzI1xcXFxkK2BcbikpO1xuY29uc3QgbWF5YmVSZWRpcmVjdFZpcnR1YWxVcmxGRiA9IHZpcnR1YWxVcmxSZSAmJiAoKHRhYklkLCBzcmMpID0+IHtcbiAgaWYgKHZpcnR1YWxVcmxSZS50ZXN0KHNyYykpIHtcbiAgICBicm93c2VyLnRhYnMudXBkYXRlKHRhYklkLCB7IHVybDogcmVzb2x2ZVZpcnR1YWxVcmwoc3JjKSB9KTtcbiAgfVxufSk7XG5pZiAodmlydHVhbFVybFJlKSB7XG4gIGNvbnN0IGxpc3RlbmVyID0gKHRhYklkLCB7IHVybCB9KSA9PiB1cmwgJiYgbWF5YmVSZWRpcmVjdFZpcnR1YWxVcmxGRih0YWJJZCwgdXJsKTtcbiAgY29uc3QgYXBpRXZlbnQgPSBicm93c2VyLnRhYnMub25VcGRhdGVkO1xuICBjb25zdCBhZGRMaXN0ZW5lciA9IGFwaUV2ZW50LmFkZExpc3RlbmVyLmJpbmQoYXBpRXZlbnQsIGxpc3RlbmVyKTtcbiAgdHJ5IHsgYWRkTGlzdGVuZXIoeyBwcm9wZXJ0aWVzOiBbJ3VybCddIH0pOyB9IGNhdGNoIChlKSB7IGFkZExpc3RlbmVyKCk7IH1cbn1cblxuYnJvd3Nlci50YWJzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB1cmwgfSA9IHRhYjtcbiAgLyogRGV0ZXJtaW5pbmcgaWYgdGhpcyB0YWIgY2FuIGJlIGF1dG8tY2xvc2VkIChyZXBsYWNlZCwgYWN0dWFsbHkpLlxuICAgICBGRj49NjggYWxsb3dzIHJlYWRpbmcgZmlsZTogVVJMIG9ubHkgaW4gdGhlIHRhYidzIGNvbnRlbnQgc2NyaXB0IHNvIHRoZSB0YWIgbXVzdCBzdGF5IG9wZW4uICovXG4gIGlmICgoIXVybC5zdGFydHNXaXRoKCdmaWxlOicpIHx8IHVhLmZpcmVmb3ggPCA2OClcbiAgICAgICYmIC9cXC51c2VyXFwuanMoWz8jXXwkKS8udGVzdCh0YWIucGVuZGluZ1VybCB8fCB1cmwpKSB7XG4gICAgY2FjaGUucHV0KGBhdXRvY2xvc2U6JHtpZH1gLCB0cnVlLCAxMGUzKTtcbiAgfVxuICBpZiAodmlydHVhbFVybFJlICYmIHVybCA9PT0gJ2Fib3V0OmJsYW5rJykge1xuICAgIG1heWJlUmVkaXJlY3RWaXJ0dWFsVXJsRkYoaWQsIHRpdGxlKTtcbiAgfVxufSk7XG5cbmJyb3dzZXIud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoKHJlcSkgPT4ge1xuICBjb25zdCB7IG1ldGhvZCwgdGFiSWQsIHVybCB9ID0gcmVxO1xuICBpZiAobWV0aG9kICE9PSAnR0VUJykge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBvcGVuIGEgcmVhbCBVUkwgZm9yIHNpbXBsaWZpZWQgdXNlcnNjcmlwdCBVUkwgbGlzdGVkIGluIGRldnRvb2xzIG9mIHRoZSB3ZWIgcGFnZVxuICBpZiAodXJsLnN0YXJ0c1dpdGgoZXh0ZW5zaW9uUm9vdCkpIHtcbiAgICByZXR1cm4geyByZWRpcmVjdFVybDogcmVzb2x2ZVZpcnR1YWxVcmwodXJsKSB9O1xuICB9XG4gIGlmICghY2FjaGUuaGFzKGBieXBhc3M6JHt1cmx9YClcbiAgJiYgKCFibGFja2xpc3RSZS50ZXN0KHVybCkgfHwgd2hpdGVsaXN0UmUudGVzdCh1cmwpKSkge1xuICAgIG1heWJlSW5zdGFsbFVzZXJKcyh0YWJJZCwgdXJsKTtcbiAgICByZXR1cm4geyByZWRpcmVjdFVybDogJ2phdmFzY3JpcHQ6dm9pZCAwJyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgfVxufSwge1xuICB1cmxzOiBbXG4gICAgLy8gMS4gKjovLyBjb21wcmlzZXMgb25seSBodHRwL2h0dHBzXG4gICAgLy8gMi4gdGhlIEFQSSBpZ25vcmVzICNoYXNoIHBhcnRcbiAgICAvLyAzLiBGaXJlZm94OiBvbkJlZm9yZVJlcXVlc3QgZG9lcyBub3Qgd29yayB3aXRoIGZpbGU6Ly8gb3IgbW96LWV4dGVuc2lvbjovL1xuICAgICcqOi8vKi8qLnVzZXIuanMnLFxuICAgICcqOi8vKi8qLnVzZXIuanM/KicsXG4gICAgJ2ZpbGU6Ly8qLyoudXNlci5qcycsXG4gICAgJ2ZpbGU6Ly8qLyoudXNlci5qcz8qJyxcbiAgICBgJHtleHRlbnNpb25Sb290fSoudXNlci5qc2AsXG4gIF0sXG4gIHR5cGVzOiBbJ21haW5fZnJhbWUnXSxcbn0sIFsnYmxvY2tpbmcnXSk7XG5cbmFzeW5jIGZ1bmN0aW9uIG1heWJlSW5zdGFsbFVzZXJKcyh0YWJJZCwgdXJsKSB7XG4gIGNvbnN0IHsgZGF0YTogY29kZSB9ID0gYXdhaXQgcmVxdWVzdCh1cmwpLmNhdGNoKG5vb3ApIHx8IHt9O1xuICBpZiAoY29kZSAmJiBwYXJzZU1ldGEoY29kZSkubmFtZSkge1xuICAgIGNvbnN0IHRhYiA9IHRhYklkID49IDAgJiYgYXdhaXQgYnJvd3Nlci50YWJzLmdldCh0YWJJZCkgfHwge307XG4gICAgY29uZmlybUluc3RhbGwoeyBjb2RlLCB1cmwsIGZyb206IHRhYi51cmwgfSwgeyB0YWIgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FjaGUucHV0KGBieXBhc3M6JHt1cmx9YCwgdHJ1ZSwgMTBlMyk7XG4gICAgaWYgKHRhYklkID49IDApIGJyb3dzZXIudGFicy51cGRhdGUodGFiSWQsIHsgdXJsIH0pO1xuICB9XG59XG5cbi8vIEluIEZpcmVmb3ggd2l0aCBwcm9kdWN0aW9uIGNvZGUgb2YgVmlvbGVudG1vbmtleSwgc2NyaXB0cyBjYW4gYmUgaW5qZWN0ZWQgYmVmb3JlIGB0YWJzLm9uVXBkYXRlZGAgaXMgZmlyZWQuXG4vLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS92aW9sZW50bW9ua2V5L3Zpb2xlbnRtb25rZXkvaXNzdWVzLzEyNTVcblxuYnJvd3Nlci50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigodGFiSWQpID0+IHtcbiAgY2xlYXJSZXF1ZXN0c0J5VGFiSWQodGFiSWQpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclJlcXVlc3RzQnlUYWJJZCh0YWJJZCkge1xuICBjb25zdCBzZXQgPSB0YWJSZXF1ZXN0c1t0YWJJZF07XG4gIGlmIChzZXQpIHtcbiAgICBkZWxldGUgdGFiUmVxdWVzdHNbdGFiSWRdO1xuICAgIHNldDo6Zm9yRWFjaEVudHJ5KChbaWRdKSA9PiBjb21tYW5kcy5BYm9ydFJlcXVlc3QoaWQpKTtcbiAgfVxufVxuXG4vKipcbiAqIEltaXRhdGluZyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzXG4gKiBQZXIgdGhlIHNwZWNpZmljYXRpb24gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAgdGhlIGhlYWRlciBuYW1lIGlzIHdpdGhpbiBBU0NJSSxcbiAqIGJ1dCB3ZSdsbCB0cnkgZW5jb2RpbmcgaXQsIGlmIG5lY2Vzc2FyeSwgdG8gaGFuZGxlIGludmFsaWQgc2VydmVyIHJlc3BvbnNlcy5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlV2ViUmVxdWVzdEhlYWRlcih7IG5hbWUsIHZhbHVlLCBiaW5hcnlWYWx1ZSB9KSB7XG4gIHJldHVybiBgJHtzdHJpbmcyYnl0ZVN0cmluZyhuYW1lKX06ICR7XG4gICAgYmluYXJ5VmFsdWVcbiAgICAgID8gYnVmZmVyMnN0cmluZyhiaW5hcnlWYWx1ZSlcbiAgICAgIDogc3RyaW5nMmJ5dGVTdHJpbmcodmFsdWUpXG4gIH1cXHJcXG5gO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBVVEY4LWVuY29kZWQgYmluYXJ5IHN0cmluZyBpLmUuIG9uZSBieXRlIHBlciBjaGFyYWN0ZXIuXG4gKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzdHJpbmcgaW4gY2FzZSBpdCB3YXMgYWxyZWFkeSB3aXRoaW4gQVNDSUkuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZzJieXRlU3RyaW5nKHN0cikge1xuICBpZiAoIS9bXFx1MDA4MC1cXHVGRkZGXS8udGVzdChzdHIpKSByZXR1cm4gc3RyO1xuICBpZiAoIWVuY29kZXIpIGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgcmV0dXJuIGJ1ZmZlcjJzdHJpbmcoZW5jb2Rlci5lbmNvZGUoc3RyKSk7XG59XG5cbi8qKiBAdHlwZWRlZiB7e1xuICBhbm9ueW1vdXM6IGJvb2xlYW5cbiAgYmxvYmJlZDogYm9vbGVhblxuICBjYjogZnVuY3Rpb24oT2JqZWN0KVxuICBjaHVua2VkOiBib29sZWFuXG4gIGNvcmVJZDogbnVtYmVyXG4gIGV2ZW50c1RvTm90aWZ5OiBzdHJpbmdbXVxuICBpZDogbnVtYmVyXG4gIG5vTmF0aXZlQ29va2llOiBib29sZWFuXG4gIHJlc3BvbnNlSGVhZGVyczogc3RyaW5nXG4gIHN0b3JlSWQ6IHN0cmluZ1xuICB0YWJJZDogbnVtYmVyXG4gIHhocjogWE1MSHR0cFJlcXVlc3Rcbn19IFZNSHR0cFJlcXVlc3QgKi9cbiIsImltcG9ydCB7IGdldFVuaXFJZCwgZW5jb2RlRmlsZW5hbWUgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBNRVRBQkxPQ0tfUkUgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgbWFwRW50cnkgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uIH0gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICAvKiogQHJldHVybiB7c3RyaW5nfSAqL1xuICBDYWNoZU5ld1NjcmlwdChkYXRhKSB7XG4gICAgY29uc3QgaWQgPSBnZXRVbmlxSWQoKTtcbiAgICBjYWNoZS5wdXQoYG5ldy0ke2lkfWAsIG5ld1NjcmlwdChkYXRhKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9LFxuICAvKiogQHJldHVybiB7Vk1TY3JpcHR9ICovXG4gIE5ld1NjcmlwdChpZCkge1xuICAgIHJldHVybiBpZCAmJiBjYWNoZS5nZXQoYG5ldy0ke2lkfWApIHx8IG5ld1NjcmlwdCgpO1xuICB9LFxuICBQYXJzZU1ldGE6IHBhcnNlTWV0YSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VyU2NyaXB0KHRleHQpIHtcbiAgaWYgKC9eXFxzKjwvLnRlc3QodGV4dCkpIHJldHVybiBmYWxzZTsgLy8gSFRNTFxuICBpZiAodGV4dC5pbmRleE9mKCcvLyA9PVVzZXJTY3JpcHQ9PScpIDwgMCkgcmV0dXJuIGZhbHNlOyAvLyBMYWNrIG9mIG1ldGEgYmxvY2tcbiAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IGFycmF5VHlwZSA9IHtcbiAgZGVmYXVsdDogKCkgPT4gW10sXG4gIHRyYW5zZm9ybTogKHJlcywgdmFsKSA9PiB7XG4gICAgcmVzLnB1c2godmFsKTtcbiAgICByZXR1cm4gcmVzO1xuICB9LFxufTtcbmNvbnN0IGRlZmF1bHRUeXBlID0ge1xuICBkZWZhdWx0OiAoKSA9PiBudWxsLFxuICB0cmFuc2Zvcm06IChyZXMsIHZhbCkgPT4gKHJlcyA9PSBudWxsID8gdmFsIDogcmVzKSxcbn07XG5jb25zdCBtZXRhVHlwZXMgPSB7XG4gIGluY2x1ZGU6IGFycmF5VHlwZSxcbiAgZXhjbHVkZTogYXJyYXlUeXBlLFxuICBtYXRjaDogYXJyYXlUeXBlLFxuICBleGNsdWRlTWF0Y2g6IGFycmF5VHlwZSxcbiAgcmVxdWlyZTogYXJyYXlUeXBlLFxuICByZXNvdXJjZToge1xuICAgIGRlZmF1bHQ6ICgpID0+ICh7fSksXG4gICAgdHJhbnNmb3JtOiAocmVzLCB2YWwpID0+IHtcbiAgICAgIGNvbnN0IHBhaXIgPSB2YWwubWF0Y2goL14oXFx3XFxTKilcXHMrKC4qKS8pO1xuICAgICAgaWYgKHBhaXIpIHJlc1twYWlyWzFdXSA9IHBhaXJbMl07XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0sXG4gIH0sXG4gIGdyYW50OiBhcnJheVR5cGUsXG4gIG5vZnJhbWVzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gZmFsc2UsXG4gICAgdHJhbnNmb3JtOiAoKSA9PiB0cnVlLFxuICB9LFxufTtcbmNvbnN0IG1ldGFPcHRpb25hbFR5cGVzID0ge1xuICBhbnRpZmVhdHVyZTogYXJyYXlUeXBlLFxuICBjb21wYXRpYmxlOiBhcnJheVR5cGUsXG4gIGNvbm5lY3Q6IGFycmF5VHlwZSxcbn07XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNZXRhKGNvZGUpIHtcbiAgLy8gaW5pdGlhbGl6ZSBtZXRhXG4gIGNvbnN0IG1ldGEgPSBtZXRhVHlwZXM6Om1hcEVudHJ5KChbLCB2YWx1ZV0pID0+IHZhbHVlLmRlZmF1bHQoKSk7XG4gIGNvbnN0IG1ldGFCb2R5ID0gY29kZS5tYXRjaChNRVRBQkxPQ0tfUkUpWzFdIHx8ICcnO1xuICBtZXRhQm9keS5yZXBsYWNlKC8oPzpefFxcbilcXHMqXFwvXFwvXFx4MjAoQFxcUyspKC4qKS9nLCAoX21hdGNoLCByYXdLZXksIHJhd1ZhbHVlKSA9PiB7XG4gICAgY29uc3QgW2tleU5hbWUsIGxvY2FsZV0gPSByYXdLZXkuc2xpY2UoMSkuc3BsaXQoJzonKTtcbiAgICBjb25zdCBjYW1lbEtleSA9IGtleU5hbWUucmVwbGFjZSgvWy1fXShcXHcpL2csIChtLCBnKSA9PiBnLnRvVXBwZXJDYXNlKCkpO1xuICAgIGNvbnN0IGtleSA9IGxvY2FsZSA/IGAke2NhbWVsS2V5fToke2xvY2FsZS50b0xvd2VyQ2FzZSgpfWAgOiBjYW1lbEtleTtcbiAgICBjb25zdCB2YWwgPSByYXdWYWx1ZS50cmltKCk7XG4gICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhVHlwZXNba2V5XSB8fCBtZXRhT3B0aW9uYWxUeXBlc1trZXldIHx8IGRlZmF1bHRUeXBlO1xuICAgIGxldCBvbGRWYWx1ZSA9IG1ldGFba2V5XTtcbiAgICBpZiAodHlwZW9mIG9sZFZhbHVlID09PSAndW5kZWZpbmVkJykgb2xkVmFsdWUgPSBtZXRhVHlwZS5kZWZhdWx0KCk7XG4gICAgbWV0YVtrZXldID0gbWV0YVR5cGUudHJhbnNmb3JtKG9sZFZhbHVlLCB2YWwpO1xuICB9KTtcbiAgbWV0YS5yZXNvdXJjZXMgPSBtZXRhLnJlc291cmNlO1xuICBkZWxldGUgbWV0YS5yZXNvdXJjZTtcbiAgLy8gQGhvbWVwYWdlVVJMOiBjb21wYXRpYmxlIHdpdGggQGhvbWVwYWdlXG4gIGlmICghbWV0YS5ob21lcGFnZVVSTCAmJiBtZXRhLmhvbWVwYWdlKSBtZXRhLmhvbWVwYWdlVVJMID0gbWV0YS5ob21lcGFnZTtcbiAgcmV0dXJuIG1ldGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q3VzdG9tKCkge1xuICByZXR1cm4ge1xuICAgIG9yaWdJbmNsdWRlOiB0cnVlLFxuICAgIG9yaWdFeGNsdWRlOiB0cnVlLFxuICAgIG9yaWdNYXRjaDogdHJ1ZSxcbiAgICBvcmlnRXhjbHVkZU1hdGNoOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3U2NyaXB0KGRhdGEpIHtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgdXJsOiAnKjovLyovKicsXG4gICAgbmFtZTogJycsXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxuICAgIC4uLmRhdGEsXG4gIH07XG4gIGNvbnN0IGNvZGUgPSBnZXRPcHRpb24oJ3NjcmlwdFRlbXBsYXRlJylcbiAgLnJlcGxhY2UoL3t7KFxcdyspfX0vZywgKHN0ciwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gc3RhdGVbbmFtZV07XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBzdHIgOiB2YWx1ZTtcbiAgfSk7XG4gIGNvbnN0IHNjcmlwdCA9IHtcbiAgICBjdXN0b206IGdldERlZmF1bHRDdXN0b20oKSxcbiAgICBjb25maWc6IHtcbiAgICAgIGVuYWJsZWQ6IDEsXG4gICAgICBzaG91bGRVcGRhdGU6IDEsXG4gICAgfSxcbiAgICBtZXRhOiBwYXJzZU1ldGEoY29kZSksXG4gICAgcHJvcHM6IHt9LFxuICB9O1xuICByZXR1cm4geyBzY3JpcHQsIGNvZGUgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVVUkkoc2NyaXB0KSB7XG4gIGNvbnN0IG5zID0gc2NyaXB0Lm1ldGEubmFtZXNwYWNlIHx8ICcnO1xuICBjb25zdCBuYW1lID0gc2NyaXB0Lm1ldGEubmFtZSB8fCAnJztcbiAgbGV0IG5hbWVVUkkgPSBlbmNvZGVGaWxlbmFtZShgJHtuc31cXG4ke25hbWV9XFxuYCk7XG4gIGlmICghbnMgJiYgIW5hbWUpIG5hbWVVUkkgKz0gc2NyaXB0LnByb3BzLmlkIHx8ICcnO1xuICByZXR1cm4gbmFtZVVSSTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkUXVlcnkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJyYnKS5yZWR1Y2UoKGRhdGEsIHBpZWNlKSA9PiB7XG4gICAgY29uc3QgW2tleSwgdmFsXSA9IHBpZWNlLnNwbGl0KCc9JykubWFwKGRlY29kZVVSSUNvbXBvbmVudCk7XG4gICAgZGF0YVtrZXldID0gdmFsO1xuICAgIHJldHVybiBkYXRhO1xuICB9LCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkdW1wUXVlcnkoZGljdCkge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoZGljdClcbiAgLm1hcChrZXlWYWwgPT4ga2V5VmFsLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJz0nKSlcbiAgLmpvaW4oJyYnKTtcbn1cbiIsImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcjL2NvbW1vbi9zdG9yYWdlJztcblxuLyoqIEB0eXBlIHsgZnVuY3Rpb24odXJsLCBvcHRpb25zLCBjaGVjayk6IFByb21pc2U8dm9pZD4gfSBvciB0aHJvd3Mgb24gZXJyb3IgKi9cbnN0b3JhZ2UuY2FjaGUuZmV0Y2ggPSBjYWNoZU9yRmV0Y2goe1xuICBpbml0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4geyAuLi5vcHRpb25zLCByZXNwb25zZVR5cGU6ICdibG9iJyB9O1xuICB9LFxuICBhc3luYyB0cmFuc2Zvcm0ocmVzcG9uc2UsIHVybCwgb3B0aW9ucywgY2hlY2spIHtcbiAgICBjb25zdCBbdHlwZSwgYm9keV0gPSBhd2FpdCBzdG9yYWdlLmNhY2hlLm1ha2VSYXcocmVzcG9uc2UsIHRydWUpO1xuICAgIGF3YWl0IGNoZWNrPy4odXJsLCByZXNwb25zZS5kYXRhLCB0eXBlKTtcbiAgICByZXR1cm4gYCR7dHlwZX0sJHtib2R5fWA7XG4gIH0sXG59KTtcblxuLyoqIEB0eXBlIHsgZnVuY3Rpb24odXJsLCBvcHRpb25zKTogUHJvbWlzZTx2b2lkPiB9IG9yIHRocm93cyBvbiBlcnJvciAqL1xuc3RvcmFnZS5yZXF1aXJlLmZldGNoID0gY2FjaGVPckZldGNoKHtcbiAgdHJhbnNmb3JtOiAoeyBkYXRhIH0sIHVybCkgPT4gKFxuICAgIC9eXFxzKjwvLnRlc3QoZGF0YSlcbiAgICAgID8gUHJvbWlzZS5yZWplY3QoYE5PVF9KUzogJHt1cmx9IFwiJHtkYXRhLnNsaWNlKDAsIDEwMCkudHJpbSgpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKX1cImApXG4gICAgICA6IGRhdGFcbiAgKSxcbn0pO1xuXG5mdW5jdGlvbiBjYWNoZU9yRmV0Y2goaGFuZGxlcnMgPSB7fSkge1xuICBjb25zdCByZXF1ZXN0cyA9IHt9O1xuICBjb25zdCB7IGluaXQsIHRyYW5zZm9ybSB9ID0gaGFuZGxlcnM7XG4gIC8qKiBAdGhpcyBWTVN0b3JhZ2VCYXNlICovXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZU9yRmV0Y2hIYW5kbGVyKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBbdXJsXSA9IGFyZ3M7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlcXVlc3RzW3VybF0gfHwgKHJlcXVlc3RzW3VybF0gPSB0aGlzOjpkb0ZldGNoKC4uLmFyZ3MpKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcbiAgLyoqIEB0aGlzIFZNU3RvcmFnZUJhc2UgKi9cbiAgYXN5bmMgZnVuY3Rpb24gZG9GZXRjaCguLi5hcmdzKSB7XG4gICAgY29uc3QgW3VybCwgb3B0aW9uc10gPSBhcmdzO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KHVybCwgaW5pdD8uKG9wdGlvbnMpIHx8IG9wdGlvbnMpO1xuICAgICAgaWYgKGF3YWl0IGlzTW9kaWZpZWQocmVzLCB1cmwpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRyYW5zZm9ybSA/IGF3YWl0IHRyYW5zZm9ybShyZXMsIC4uLmFyZ3MpIDogcmVzLmRhdGE7XG4gICAgICAgIGF3YWl0IHRoaXMuc2V0KHVybCwgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5lcnJvcihgRXJyb3IgZmV0Y2hpbmc6ICR7dXJsfWAsIGVycik7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0c1t1cmxdO1xuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBpc01vZGlmaWVkKHsgaGVhZGVycyB9LCB1cmwpIHtcbiAgY29uc3QgbW9kID0gaGVhZGVycy5nZXQoJ2V0YWcnKVxuICB8fCArbmV3IERhdGUoaGVhZGVycy5nZXQoJ2xhc3QtbW9kaWZpZWQnKSlcbiAgfHwgK25ldyBEYXRlKGhlYWRlcnMuZ2V0KCdkYXRlJykpO1xuICBpZiAoIW1vZCB8fCBtb2QgIT09IGF3YWl0IHN0b3JhZ2UubW9kLmdldE9uZSh1cmwpKSB7XG4gICAgaWYgKG1vZCkgYXdhaXQgc3RvcmFnZS5tb2Quc2V0KHVybCwgbW9kKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0QWN0aXZlVGFiLCBub29wLCBzZW5kVGFiQ21kLCBnZXRGdWxsVXJsIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHVhIGZyb20gJyMvY29tbW9uL3VhJztcbmltcG9ydCB7IGV4dGVuc2lvblJvb3QgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uIH0gZnJvbSAnLi9vcHRpb25zJztcblxuY29uc3Qgb3BlbmVycyA9IHt9O1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3BhdGhJZF0gLSBwYXRoIG9yIGlkIHRvIGFkZCB0byAjc2NyaXB0cyByb3V0ZSBpbiBkYXNoYm9hcmQsXG4gICAgIGlmIGFic2VudCBhIG5ldyBzY3JpcHQgd2lsbCBiZSBjcmVhdGVkIGZvciBhY3RpdmUgdGFiJ3MgVVJMXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHtpZDogbnVtYmVyfT59XG4gICAqL1xuICBhc3luYyBPcGVuRWRpdG9yKHBhdGhJZCkge1xuICAgIGlmICghcGF0aElkKSB7XG4gICAgICBjb25zdCB7IHRhYiwgZG9tYWluIH0gPSBhd2FpdCBjb21tYW5kcy5HZXRUYWJEb21haW4oKTtcbiAgICAgIGNvbnN0IGlkID0gZG9tYWluICYmIGNvbW1hbmRzLkNhY2hlTmV3U2NyaXB0KHtcbiAgICAgICAgdXJsOiAodGFiLnBlbmRpbmdVcmwgfHwgdGFiLnVybCkuc3BsaXQoL1sjP10vKVswXSxcbiAgICAgICAgbmFtZTogYCR7Z2V0T3B0aW9uKCdzY3JpcHRUZW1wbGF0ZUVkaXRlZCcpID8gJycgOiAnLSAnfSR7ZG9tYWlufWAsXG4gICAgICB9KTtcbiAgICAgIHBhdGhJZCA9IGBfbmV3JHtpZCA/IGAvJHtpZH1gIDogJyd9YDtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gYCR7ZXh0ZW5zaW9uUm9vdH1vcHRpb25zL2luZGV4Lmh0bWwjc2NyaXB0cy8ke3BhdGhJZH1gO1xuICAgIC8vIEZpcmVmb3ggdW50aWwgdjU2IGRvZXNuJ3Qgc3VwcG9ydCBtb3otZXh0ZW5zaW9uOi8vIHBhdHRlcm4gaW4gYnJvd3Nlci50YWJzLnF1ZXJ5KClcbiAgICBmb3IgKGNvbnN0IHZpZXcgb2YgYnJvd3Nlci5leHRlbnNpb24uZ2V0Vmlld3MoKSkge1xuICAgICAgaWYgKHZpZXcubG9jYXRpb24uaHJlZiA9PT0gdXJsKSB7XG4gICAgICAgIC8vIGRlZXAtY29weWluZyB0byBhdm9pZCBkZWFkIG9iamVjdHNcbiAgICAgICAgY29uc3QgdGFiID0gZGVlcENvcHkoYXdhaXQgdmlldy5icm93c2VyLnRhYnMuZ2V0Q3VycmVudCgpKTtcbiAgICAgICAgYnJvd3Nlci50YWJzLnVwZGF0ZSh0YWIuaWQsIHsgYWN0aXZlOiB0cnVlIH0pO1xuICAgICAgICBicm93c2VyLndpbmRvd3MudXBkYXRlKHRhYi53aW5kb3dJZCwgeyBmb2N1c2VkOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4gdGFiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tbWFuZHMuVGFiT3Blbih7IHVybCwgbWF5YmVJbldpbmRvdzogdHJ1ZSB9KTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8eyBpZDogbnVtYmVyIH0gfCBjaHJvbWUudGFicy5UYWI+fSBuZXcgdGFiIGlzIHJldHVybmVkIGZvciBpbnRlcm5hbCBjYWxscyAqL1xuICBhc3luYyBUYWJPcGVuKHtcbiAgICB1cmwsXG4gICAgYWN0aXZlID0gdHJ1ZSxcbiAgICBjb250YWluZXIsXG4gICAgaW5zZXJ0ID0gdHJ1ZSxcbiAgICBtYXliZUluV2luZG93ID0gZmFsc2UsXG4gICAgcGlubmVkLFxuICB9LCBzcmMgPSB7fSkge1xuICAgIC8vIHNyYy50YWIgbWF5IGJlIGFic2VudCB3aGVuIGludm9rZWQgZnJvbSBwb3B1cCAoZS5nLiBlZGl0L2NyZWF0ZSBidXR0b25zKVxuICAgIGNvbnN0IHNyY1RhYiA9IHNyYy50YWIgfHwgYXdhaXQgZ2V0QWN0aXZlVGFiKCkgfHwge307XG4gICAgLy8gc3JjLnVybCBtYXkgYmUgYWJzZW50IHdoZW4gaW52b2tlZCBkaXJlY3RseSBhcyBjb21tYW5kcy5UYWJPcGVuXG4gICAgY29uc3Qgc3JjVXJsID0gc3JjLnVybDtcbiAgICBjb25zdCBpc0ludGVybmFsID0gIXNyY1VybCB8fCBzcmNVcmwuc3RhcnRzV2l0aChleHRlbnNpb25Sb290KTtcbiAgICAvLyBvbmx5IGluY29nbml0byBzdG9yZUlkIG1heSBiZSBzcGVjaWZpZWQgd2hlbiBvcGVuaW5nIGluIGFuIGluY29nbml0byB3aW5kb3dcbiAgICBjb25zdCB7IGluY29nbml0bywgd2luZG93SWQgfSA9IHNyY1RhYjtcbiAgICAvLyBDaHJvbWUgY2FuJ3Qgb3BlbiBjaHJvbWUteHh4OiBVUkxzIGluIGluY29nbml0byB3aW5kb3dzXG4gICAgbGV0IHN0b3JlSWQgPSBzcmNUYWIuY29va2llU3RvcmVJZDtcbiAgICBpZiAoc3RvcmVJZCAmJiAhaW5jb2duaXRvKSB7XG4gICAgICBzdG9yZUlkID0gZ2V0Q29udGFpbmVySWQoaXNJbnRlcm5hbCA/IDAgOiBjb250YWluZXIpIHx8IHN0b3JlSWQ7XG4gICAgfVxuICAgIGlmIChzdG9yZUlkKSBzdG9yZUlkID0geyBjb29raWVTdG9yZUlkOiBzdG9yZUlkIH07XG4gICAgLy8gVVJMIG5lZWRzIHRvIGJlIGV4cGFuZGVkIGZvciBgY2FuT3BlbkluY29nbml0b2AgYmVsb3dcbiAgICBpZiAoIS9eWy1cXHddKzovLnRlc3QodXJsKSkge1xuICAgICAgdXJsID0gaXNJbnRlcm5hbFxuICAgICAgICA/IGJyb3dzZXIucnVudGltZS5nZXRVUkwodXJsKVxuICAgICAgICA6IGdldEZ1bGxVcmwodXJsLCBzcmNVcmwpO1xuICAgIH1cbiAgICBjb25zdCBjYW5PcGVuSW5jb2duaXRvID0gIWluY29nbml0byB8fCBJU19GSVJFRk9YIHx8ICEvXihjaHJvbWVbLVxcd10qKTovLnRlc3QodXJsKTtcbiAgICBsZXQgbmV3VGFiO1xuICAgIGlmIChtYXliZUluV2luZG93XG4gICAgICAgICYmIGJyb3dzZXIud2luZG93c1xuICAgICAgICAmJiBnZXRPcHRpb24oJ2VkaXRvcldpbmRvdycpXG4gICAgICAgIC8qIGNvb2tpZVN0b3JlSWQgaW4gd2luZG93cy5jcmVhdGUoKSBpcyBzdXBwb3J0ZWQgc2luY2UgRkY2NCBodHRwczovL2J1Z3ppbC5sYS8xMzkzNTcwXG4gICAgICAgICAqIGFuZCBhIHdvcmthcm91bmQgaXMgdG9vIGNvbnZvbHV0ZWQgdG8gYWRkIGl0IGZvciBzdWNoIGFuIGFuY2llbnQgdmVyc2lvbiAqL1xuICAgICAgICAmJiAoIXN0b3JlSWQgfHwgdWEuZmlyZWZveCA+PSA2NCkpIHtcbiAgICAgIGNvbnN0IHduZE9wdHMgPSB7XG4gICAgICAgIHVybCxcbiAgICAgICAgaW5jb2duaXRvOiBjYW5PcGVuSW5jb2duaXRvICYmIGluY29nbml0byxcbiAgICAgICAgLi4uZ2V0T3B0aW9uKCdlZGl0b3JXaW5kb3dTaW1wbGUnKSAmJiB7IHR5cGU6ICdwb3B1cCcgfSxcbiAgICAgICAgLi4uIUlTX0ZJUkVGT1ggJiYgeyBmb2N1c2VkOiAhIWFjdGl2ZSB9LCAvLyBGRiBkb2Vzbid0IHN1cHBvcnQgdGhpc1xuICAgICAgICAuLi5zdG9yZUlkLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHBvcyA9IGdldE9wdGlvbignZWRpdG9yV2luZG93UG9zJyk7XG4gICAgICBjb25zdCBoYXNQb3MgPSBwb3MgJiYgJ3RvcCcgaW4gcG9zO1xuICAgICAgY29uc3Qgd25kID0gYXdhaXQgYnJvd3Nlci53aW5kb3dzLmNyZWF0ZSh7IC4uLnduZE9wdHMsIC4uLnBvcyB9KS5jYXRjaChoYXNQb3MgJiYgbm9vcClcbiAgICAgICAgfHwgaGFzUG9zICYmIGF3YWl0IGJyb3dzZXIud2luZG93cy5jcmVhdGUod25kT3B0cyk7XG4gICAgICBuZXdUYWIgPSB3bmQudGFic1swXTtcbiAgICB9XG4gICAgaWYgKCFuZXdUYWIpIHtcbiAgICAgIG5ld1RhYiA9IGF3YWl0IGJyb3dzZXIudGFicy5jcmVhdGUoe1xuICAgICAgICB1cmwsXG4gICAgICAgIC8vIG5vcm1hbGl6aW5nIGFzIGJvb2xlYW4gYmVjYXVzZSB0aGUgQVBJIHJlcXVpcmVzIHN0cmljdCB0eXBlc1xuICAgICAgICBhY3RpdmU6ICEhYWN0aXZlLFxuICAgICAgICBwaW5uZWQ6ICEhcGlubmVkLFxuICAgICAgICAuLi5zdG9yZUlkLFxuICAgICAgICAuLi5jYW5PcGVuSW5jb2duaXRvICYmIHtcbiAgICAgICAgICB3aW5kb3dJZCxcbiAgICAgICAgICAuLi5pbnNlcnQgJiYgeyBpbmRleDogc3JjVGFiLmluZGV4ICsgMSB9LFxuICAgICAgICAgIC4uLnVhLm9wZW5lclRhYklkU3VwcG9ydGVkICYmIHsgb3BlbmVyVGFiSWQ6IHNyY1RhYi5pZCB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHsgaWQgfSA9IG5ld1RhYjtcbiAgICBpZiAoYWN0aXZlICYmIG5ld1RhYi53aW5kb3dJZCAhPT0gd2luZG93SWQpIHtcbiAgICAgIGF3YWl0IGJyb3dzZXIud2luZG93cy51cGRhdGUobmV3VGFiLndpbmRvd0lkLCB7IGZvY3VzZWQ6IHRydWUgfSk7XG4gICAgfVxuICAgIG9wZW5lcnNbaWRdID0gc3JjVGFiLmlkO1xuICAgIHJldHVybiBpc0ludGVybmFsID8gbmV3VGFiIDogeyBpZCB9O1xuICB9LFxuICAvKiogQHJldHVybiB7dm9pZH0gKi9cbiAgVGFiQ2xvc2UoeyBpZCB9ID0ge30sIHNyYykge1xuICAgIGNvbnN0IHRhYklkID0gaWQgfHwgc3JjPy50YWI/LmlkO1xuICAgIGlmICh0YWJJZCA+PSAwKSBicm93c2VyLnRhYnMucmVtb3ZlKHRhYklkKTtcbiAgfSxcbiAgVGFiRm9jdXMoXywgc3JjKSB7XG4gICAgYnJvd3Nlci50YWJzLnVwZGF0ZShzcmMudGFiLmlkLCB7IGFjdGl2ZTogdHJ1ZSB9KS5jYXRjaChub29wKTtcbiAgICBicm93c2VyLndpbmRvd3MudXBkYXRlKHNyYy50YWIud2luZG93SWQsIHsgZm9jdXNlZDogdHJ1ZSB9KS5jYXRjaChub29wKTtcbiAgfSxcbn0pO1xuXG4vLyBGaXJlZm94IEFuZHJvaWQgZG9lcyBub3Qgc3VwcG9ydCBgb3BlbmVyVGFiSWRgIGZpZWxkLCBpdCBmYWlscyBpZiB0aGlzIGZpZWxkIGlzIHBhc3NlZFxuLy8gWFhYIG9wZW5lclRhYklkIHNlZW1zIGJ1Z2d5IG9uIENocm9tZSwgaHR0cHM6Ly9jcmJ1Zy5jb20vOTY3MTUwXG4vLyBJdCBzZWVtcyB0byBkbyBub3RoaW5nIGV2ZW4gc2V0IHN1Y2Nlc3NmdWxseSB3aXRoIGBicm93c2VyLnRhYnMudXBkYXRlYC5cbnVhLnJlYWR5LnRoZW4oKCkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh1YSwge1xuICAgIG9wZW5lclRhYklkU3VwcG9ydGVkOiB7XG4gICAgICB2YWx1ZTogIUlTX0ZJUkVGT1ggfHwgdWEuZmlyZWZveCA+PSA1NyAmJiB1YS5vcyAhPT0gJ2FuZHJvaWQnLFxuICAgIH0sXG4gIH0pO1xufSk7XG5cbmJyb3dzZXIudGFicy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoKGlkKSA9PiB7XG4gIGNvbnN0IG9wZW5lcklkID0gb3BlbmVyc1tpZF07XG4gIGlmIChvcGVuZXJJZCA+PSAwKSB7XG4gICAgc2VuZFRhYkNtZChvcGVuZXJJZCwgJ1RhYkNsb3NlZCcsIGlkKTtcbiAgICBkZWxldGUgb3BlbmVyc1tpZF07XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRDb250YWluZXJJZChpbmRleCkge1xuICByZXR1cm4gaW5kZXggPT09IDAgJiYgJ2ZpcmVmb3gtZGVmYXVsdCdcbiAgICAgICAgIHx8IGluZGV4ID4gMCAmJiBgZmlyZWZveC1jb250YWluZXItJHtpbmRleH1gO1xufVxuIiwiaW1wb3J0IHsgcG9zdEluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbiwgZ2V0T3B0aW9uLCBzZXRPcHRpb24gfSBmcm9tICcuL29wdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgU0NSSVBUX1RFTVBMQVRFID0gJ3NjcmlwdFRlbXBsYXRlJztcbmNvbnN0IFNDUklQVF9URU1QTEFURV9FRElURUQgPSBgJHtTQ1JJUFRfVEVNUExBVEV9RWRpdGVkYDtcbmNvbnN0IElOSVRJQUxfVEVNUExBVEUgPSBgXFxcbi8vID09VXNlclNjcmlwdD09XG4vLyBAbmFtZSBOZXcgU2NyaXB0XG4vLyBAbmFtZXNwYWNlIFZpb2xlbnRtb25rZXkgU2NyaXB0c1xuLy8gQG1hdGNoIHt7dXJsfX1cbi8vIEBncmFudCBub25lXG4vLyA9PS9Vc2VyU2NyaXB0PT1cbmA7XG5cbnBvc3RJbml0aWFsaXplLnB1c2goKCkgPT4ge1xuICBsZXQgZWRpdGVkID0gZ2V0T3B0aW9uKFNDUklQVF9URU1QTEFURV9FRElURUQpO1xuICAvLyBQcmVzZXJ2ZSBhbiBlZGl0ZWQgdGVtcGxhdGVcbiAgaWYgKGVkaXRlZCkgcmV0dXJuO1xuICBjb25zdCB0ZW1wbGF0ZSA9IGdldE9wdGlvbihTQ1JJUFRfVEVNUExBVEUpO1xuICAvLyBXaGVuIHVwZGF0aW5nIGZyb20gYW4gb2xkIHZlcnNpb24sIHNldCB0aGUgZWRpdGVkIGZsYWcgcmV0cm9hY3RpdmVseVxuICBpZiAoZWRpdGVkID09IG51bGwpIHtcbiAgICBlZGl0ZWQgPSB0ZW1wbGF0ZSAhPT0gSU5JVElBTF9URU1QTEFURTtcbiAgICBpZiAoZWRpdGVkKSBzZXRPcHRpb24oU0NSSVBUX1RFTVBMQVRFX0VESVRFRCwgdHJ1ZSk7XG4gICAgZWxzZSByZXNldFNjcmlwdFRlbXBsYXRlKCk7XG4gIC8vIFdoZW4gdXBkYXRpbmcgVk0sIHVwZGF0ZSB0byB0aGUgbmV3IGRlZmF1bHQgdGVtcGxhdGVcbiAgfSBlbHNlIGlmICh0ZW1wbGF0ZSAhPT0gZ2V0RGVmYXVsdE9wdGlvbihTQ1JJUFRfVEVNUExBVEUpKSB7XG4gICAgcmVzZXRTY3JpcHRUZW1wbGF0ZSgpO1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0U2NyaXB0VGVtcGxhdGUoY2hhbmdlcyA9IHt9KSB7XG4gIGNvbnN0IGRlZmF1bHRUZW1wbGF0ZSA9IGdldERlZmF1bHRPcHRpb24oU0NSSVBUX1RFTVBMQVRFKTtcbiAgbGV0IHRlbXBsYXRlID0gY2hhbmdlc1tTQ1JJUFRfVEVNUExBVEVdO1xuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgdGVtcGxhdGUgPSBkZWZhdWx0VGVtcGxhdGU7XG4gICAgY2hhbmdlc1tTQ1JJUFRfVEVNUExBVEVdID0gdGVtcGxhdGU7XG4gICAgc2V0T3B0aW9uKFNDUklQVF9URU1QTEFURSwgdGVtcGxhdGUpO1xuICB9XG4gIGNvbnN0IGVkaXRlZCA9IHRlbXBsYXRlICE9PSBkZWZhdWx0VGVtcGxhdGU7XG4gIGlmIChlZGl0ZWQgIT09IGNoYW5nZXNbU0NSSVBUX1RFTVBMQVRFX0VESVRFRF0pIHtcbiAgICBjaGFuZ2VzW1NDUklQVF9URU1QTEFURV9FRElURURdID0gZWRpdGVkO1xuICAgIHNldE9wdGlvbihTQ1JJUFRfVEVNUExBVEVfRURJVEVELCBlZGl0ZWQpO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyB0bGQgZnJvbSAnIy9jb21tb24vdGxkJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcbmltcG9ydCB7IHBvc3RJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IGdldE9wdGlvbiwgaG9va09wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIFRlc3RCbGFja2xpc3Q6IHRlc3RCbGFja2xpc3QsXG59KTtcblxucG9zdEluaXRpYWxpemUucHVzaChyZXNldEJsYWNrbGlzdCk7XG5cbnRsZC5pbml0VExEKHRydWUpO1xuXG5jb25zdCBSRV9NQVRDSF9QQVJUUyA9IC8oLio/KTpcXC9cXC8oW14vXSopXFwvKC4qKS87XG5sZXQgYmxhY2tsaXN0UnVsZXMgPSBbXTtcbmhvb2tPcHRpb25zKChjaGFuZ2VzKSA9PiB7XG4gIGlmICgnYmxhY2tsaXN0JyBpbiBjaGFuZ2VzKSByZXNldEJsYWNrbGlzdChjaGFuZ2VzLmJsYWNrbGlzdCB8fCAnJyk7XG59KTtcbmNvbnN0IFJFX0hUVFBfT1JfSFRUUFMgPSAvXmh0dHBzPyQvaTtcblxuLypcbiBTaW1wbGUgRklGTyBxdWV1ZSBmb3IgdGhlIHJlc3VsdHMgb2YgdGVzdEJsYWNrbGlzdCwgY2FjaGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgbWFpbiB8Y2FjaGV8XG4gYmVjYXVzZSB0aGUgYmxhY2tsaXN0IGlzIHVwZGF0ZWQgb25seSBvbmNlIGluIGEgd2hpbGUgc28gaXRzIGVudHJpZXMgd291bGQgYmUgY3Jvd2RpbmdcbiB0aGUgbWFpbiBjYWNoZSBhbmQgcmVkdWNpbmcgaXRzIHBlcmZvcm1hbmNlIChvYmplY3RzIHdpdGggbG90cyBvZiBrZXlzIGFyZSBzbG93IHRvIGFjY2VzcykuXG5cbiBXZSBhbHNvIGRvbid0IG5lZWQgdG8gYXV0by1leHBpcmUgdGhlIGVudHJpZXMgYWZ0ZXIgYSB0aW1lb3V0LlxuIFRoZSBvbmx5IGxpbWl0IHdlJ3JlIGNvbmNlcm5lZCB3aXRoIGlzIHRoZSBvdmVyYWxsIG1lbW9yeSB1c2VkLlxuIFRoZSBsaW1pdCBpcyBzcGVjaWZpZWQgaW4gdGhlIGFtb3VudCBvZiB1bmljb2RlIGNoYXJhY3RlcnMgKHN0cmluZyBsZW5ndGgpIGZvciBzaW1wbGljaXR5LlxuIERpc3JlZ2FyZGluZyBkZWR1cGxpY2F0aW9uIGR1ZSB0byBpbnRlcm5pbmcsIHRoZSBhY3R1YWwgbWVtb3J5IHVzZWQgaXMgYXBwcm94aW1hdGVseSB0d2ljZSBhcyBiaWc6XG4gMiAqIGtleUxlbmd0aCArIG9iamVjdFN0cnVjdHVyZU92ZXJoZWFkICogb2JqZWN0Q291bnRcbiovXG5jb25zdCBNQVhfQkxfQ0FDSEVfTEVOR1RIID0gMTAwZTM7XG5sZXQgYmxDYWNoZSA9IHt9O1xubGV0IGJsQ2FjaGVTaXplID0gMDtcblxuZnVuY3Rpb24gdGVzdFJ1bGVzKHVybCwgcnVsZXMsIHByZWZpeCwgcnVsZUJ1aWxkZXIpIHtcbiAgcmV0dXJuIHJ1bGVzLnNvbWUocnVsZSA9PiB7XG4gICAgY29uc3Qga2V5ID0gYCR7cHJlZml4fToke3J1bGV9YDtcbiAgICBjb25zdCBtYXRjaGVyID0gY2FjaGUuZ2V0KGtleSkgfHwgY2FjaGUucHV0KGtleSwgcnVsZUJ1aWxkZXIocnVsZSkpO1xuICAgIHJldHVybiBtYXRjaGVyLnRlc3QodXJsKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGVzdCBnbG9iIHJ1bGVzIGxpa2UgYEBpbmNsdWRlYCBhbmQgYEBleGNsdWRlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlc3RHbG9iKHVybCwgcnVsZXMpIHtcbiAgcmV0dXJuIHRlc3RSdWxlcyh1cmwsIHJ1bGVzLCAncmUnLCBhdXRvUmVnKTtcbn1cblxuLyoqXG4gKiBUZXN0IG1hdGNoIHJ1bGVzIGxpa2UgYEBtYXRjaGAgYW5kIGBAZXhjbHVkZV9tYXRjaGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0TWF0Y2godXJsLCBydWxlcykge1xuICByZXR1cm4gdGVzdFJ1bGVzKHVybCwgcnVsZXMsICdtYXRjaCcsIG1hdGNoVGVzdGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RTY3JpcHQodXJsLCBzY3JpcHQpIHtcbiAgY2FjaGUuYmF0Y2godHJ1ZSk7XG4gIGNvbnN0IHsgY3VzdG9tLCBtZXRhIH0gPSBzY3JpcHQ7XG4gIGNvbnN0IG1hdCA9IG1lcmdlTGlzdHMoY3VzdG9tLm9yaWdNYXRjaCAmJiBtZXRhLm1hdGNoLCBjdXN0b20ubWF0Y2gpO1xuICBjb25zdCBpbmMgPSBtZXJnZUxpc3RzKGN1c3RvbS5vcmlnSW5jbHVkZSAmJiBtZXRhLmluY2x1ZGUsIGN1c3RvbS5pbmNsdWRlKTtcbiAgY29uc3QgZXhjID0gbWVyZ2VMaXN0cyhjdXN0b20ub3JpZ0V4Y2x1ZGUgJiYgbWV0YS5leGNsdWRlLCBjdXN0b20uZXhjbHVkZSk7XG4gIGNvbnN0IGV4Y01hdCA9IG1lcmdlTGlzdHMoY3VzdG9tLm9yaWdFeGNsdWRlTWF0Y2ggJiYgbWV0YS5leGNsdWRlTWF0Y2gsIGN1c3RvbS5leGNsdWRlTWF0Y2gpO1xuICAvLyBtYXRjaCBhbGwgaWYgbm8gQG1hdGNoIG9yIEBpbmNsdWRlIHJ1bGVcbiAgbGV0IG9rID0gIW1hdC5sZW5ndGggJiYgIWluYy5sZW5ndGg7XG4gIC8vIEBtYXRjaFxuICBvayA9IG9rIHx8IHRlc3RNYXRjaCh1cmwsIG1hdCk7XG4gIC8vIEBpbmNsdWRlXG4gIG9rID0gb2sgfHwgdGVzdEdsb2IodXJsLCBpbmMpO1xuICAvLyBAZXhjbHVkZS1tYXRjaFxuICBvayA9IG9rICYmICF0ZXN0TWF0Y2godXJsLCBleGNNYXQpO1xuICAvLyBAZXhjbHVkZVxuICBvayA9IG9rICYmICF0ZXN0R2xvYih1cmwsIGV4Yyk7XG4gIGNhY2hlLmJhdGNoKGZhbHNlKTtcbiAgcmV0dXJuIG9rO1xufVxuXG5mdW5jdGlvbiBtZXJnZUxpc3RzKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGFyZ3MucmVkdWNlKChyZXMsIGl0ZW0pID0+IChpdGVtID8gcmVzLmNvbmNhdChpdGVtKSA6IHJlcyksIFtdKTtcbn1cblxuZnVuY3Rpb24gc3RyMlJFKHN0cikge1xuICBjb25zdCByZSA9IHN0ci5yZXBsYWNlKC8oWy4/K1tcXF17fSgpfF4kXSkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gIHJldHVybiByZTtcbn1cblxuZnVuY3Rpb24gYmluZFJFKHJlKSB7XG4gIHJldHVybiByZS50ZXN0LmJpbmQocmUpO1xufVxuXG5mdW5jdGlvbiBhdXRvUmVnKHN0cikge1xuICAvLyByZWdleHAgbW9kZTogY2FzZS1pbnNlbnNpdGl2ZSBwZXIgR00gZG9jdW1lbnRhdGlvblxuICBpZiAoc3RyLmxlbmd0aCA+IDEgJiYgc3RyWzBdID09PSAnLycgJiYgc3RyW3N0ci5sZW5ndGggLSAxXSA9PT0gJy8nKSB7XG4gICAgbGV0IHJlO1xuICAgIHRyeSB7IHJlID0gbmV3IFJlZ0V4cChzdHIuc2xpY2UoMSwgLTEpLCAnaScpOyB9IGNhdGNoIChlKSB7IC8qIGlnbm9yZSAqLyB9XG4gICAgcmV0dXJuIHsgdGVzdDogcmUgPyBiaW5kUkUocmUpIDogKCkgPT4gZmFsc2UgfTtcbiAgfVxuICAvLyBnbG9iIG1vZGU6IGNhc2UtaW5zZW5zaXRpdmUgdG8gbWF0Y2ggR000ICYgVGFtcGVybW9ua2V5IGJ1Z2dlZCBiZWhhdmlvclxuICBjb25zdCByZVN0ciA9IHN0cjJSRShzdHIudG9Mb3dlckNhc2UoKSk7XG4gIGlmICh0bGQuaXNSZWFkeSgpICYmIHN0ci5pbmNsdWRlcygnLnRsZC8nKSkge1xuICAgIGNvbnN0IHJlVGxkU3RyID0gcmVTdHIucmVwbGFjZSgnXFxcXC50bGQvJywgJygoPzpcXFxcLlstXFxcXHddKykrKS8nKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGVzdDogKHRzdHIpID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRzdHIudG9Mb3dlckNhc2UoKS5tYXRjaChyZVRsZFN0cik7XG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3Qgc3VmZml4ID0gbWF0Y2hlc1sxXS5zbGljZSgxKTtcbiAgICAgICAgICBpZiAodGxkLmdldFB1YmxpY1N1ZmZpeChzdWZmaXgpID09PSBzdWZmaXgpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoYF4ke3JlU3RyfSRgLCAnaScpOyAvLyBTdHJpbmcgd2l0aCB3aWxkY2FyZHNcbiAgcmV0dXJuIHsgdGVzdDogYmluZFJFKHJlKSB9O1xufVxuXG5mdW5jdGlvbiBtYXRjaFNjaGVtZShydWxlLCBkYXRhKSB7XG4gIC8vIGV4YWN0IG1hdGNoXG4gIGlmIChydWxlID09PSBkYXRhKSByZXR1cm4gMTtcbiAgLy8gKiA9IGh0dHAgfCBodHRwc1xuICAvLyBzdXBwb3J0IGh0dHAqXG4gIGlmIChbXG4gICAgJyonLFxuICAgICdodHRwKicsXG4gIF0uaW5jbHVkZXMocnVsZSkgJiYgUkVfSFRUUF9PUl9IVFRQUy50ZXN0KGRhdGEpKSByZXR1cm4gMTtcbiAgcmV0dXJuIDA7XG59XG5cbmNvbnN0IFJFX1NUUl9BTlkgPSAnKD86fC4qP1xcXFwuKSc7XG5jb25zdCBSRV9TVFJfVExEID0gJygoPzpcXFxcLlstXFxcXHddKykrKSc7XG5mdW5jdGlvbiBob3N0TWF0Y2hlcihydWxlKSB7XG4gIC8vICogbWF0Y2hlcyBhbGxcbiAgaWYgKHJ1bGUgPT09ICcqJykge1xuICAgIHJldHVybiAoKSA9PiAxO1xuICB9XG4gIC8vICouZXhhbXBsZS5jb21cbiAgLy8gd3d3Lmdvb2dsZS4qXG4gIC8vIHd3dy5nb29nbGUudGxkXG4gIGNvbnN0IHJ1bGVMQyA9IHJ1bGUudG9Mb3dlckNhc2UoKTsgLy8gaG9zdCBtYXRjaGluZyBpcyBjYXNlLWluc2Vuc2l0aXZlXG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IGJhc2UgPSBydWxlTEM7XG4gIGxldCBzdWZmaXggPSAnJztcbiAgaWYgKHJ1bGUuc3RhcnRzV2l0aCgnKi4nKSkge1xuICAgIGJhc2UgPSBiYXNlLnNsaWNlKDIpO1xuICAgIHByZWZpeCA9IFJFX1NUUl9BTlk7XG4gIH1cbiAgaWYgKHRsZC5pc1JlYWR5KCkgJiYgcnVsZS5lbmRzV2l0aCgnLnRsZCcpKSB7XG4gICAgYmFzZSA9IGJhc2Uuc2xpY2UoMCwgLTQpO1xuICAgIHN1ZmZpeCA9IFJFX1NUUl9UTEQ7XG4gIH1cbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGBeJHtwcmVmaXh9JHtzdHIyUkUoYmFzZSl9JHtzdWZmaXh9JGApO1xuICByZXR1cm4gKGRhdGEpID0+IHtcbiAgICAvLyBleGFjdCBtYXRjaCwgY2FzZS1pbnNlbnNpdGl2ZVxuICAgIGRhdGEgPSBkYXRhLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHJ1bGVMQyA9PT0gZGF0YSkgcmV0dXJuIDE7XG4gICAgLy8gZnVsbCBjaGVja1xuICAgIGNvbnN0IG1hdGNoZXMgPSBkYXRhLm1hdGNoKHJlKTtcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgWywgdGxkU3RyXSA9IG1hdGNoZXM7XG4gICAgICBpZiAoIXRsZFN0cikgcmV0dXJuIDE7XG4gICAgICBjb25zdCB0bGRTdWZmaXggPSB0bGRTdHIuc2xpY2UoMSk7XG4gICAgICByZXR1cm4gdGxkLmdldFB1YmxpY1N1ZmZpeCh0bGRTdWZmaXgpID09PSB0bGRTdWZmaXg7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwYXRoTWF0Y2hlcihydWxlKSB7XG4gIGNvbnN0IGlIYXNoID0gcnVsZS5pbmRleE9mKCcjJyk7XG4gIGxldCBpUXVlcnkgPSBydWxlLmluZGV4T2YoJz8nKTtcbiAgbGV0IHN0clJlID0gc3RyMlJFKHJ1bGUpO1xuICBpZiAoaVF1ZXJ5ID4gaUhhc2gpIGlRdWVyeSA9IC0xO1xuICBpZiAoaUhhc2ggPCAwKSB7XG4gICAgaWYgKGlRdWVyeSA8IDApIHN0clJlID0gYF4ke3N0clJlfSg/Ols/I118JClgO1xuICAgIGVsc2Ugc3RyUmUgPSBgXiR7c3RyUmV9KD86I3wkKWA7XG4gIH1cbiAgcmV0dXJuIGJpbmRSRShuZXcgUmVnRXhwKHN0clJlKSk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoVGVzdGVyKHJ1bGUpIHtcbiAgbGV0IHRlc3Q7XG4gIGlmIChydWxlID09PSAnPGFsbF91cmxzPicpIHtcbiAgICB0ZXN0ID0gKCkgPT4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBydWxlUGFydHMgPSBydWxlLm1hdGNoKFJFX01BVENIX1BBUlRTKTtcbiAgICBpZiAocnVsZVBhcnRzKSB7XG4gICAgICBjb25zdCBtYXRjaEhvc3QgPSBob3N0TWF0Y2hlcihydWxlUGFydHNbMl0pO1xuICAgICAgY29uc3QgbWF0Y2hQYXRoID0gcGF0aE1hdGNoZXIocnVsZVBhcnRzWzNdKTtcbiAgICAgIHRlc3QgPSAodXJsKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdXJsLm1hdGNoKFJFX01BVENIX1BBUlRTKTtcbiAgICAgICAgcmV0dXJuICEhcnVsZVBhcnRzICYmICEhcGFydHNcbiAgICAgICAgICAmJiBtYXRjaFNjaGVtZShydWxlUGFydHNbMV0sIHBhcnRzWzFdKVxuICAgICAgICAgICYmIG1hdGNoSG9zdChwYXJ0c1syXSlcbiAgICAgICAgICAmJiBtYXRjaFBhdGgocGFydHNbM10pO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWdub3JlIGludmFsaWQgbWF0Y2ggcnVsZXNcbiAgICAgIHRlc3QgPSAoKSA9PiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgdGVzdCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdEJsYWNrbGlzdCh1cmwpIHtcbiAgbGV0IHJlcyA9IGJsQ2FjaGVbdXJsXTtcbiAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgcnVsZSA9IGJsYWNrbGlzdFJ1bGVzLmZpbmQoKHsgdGVzdCB9KSA9PiB0ZXN0KHVybCkpO1xuICAgIHJlcyA9IHJ1bGU/LnJlamVjdCAmJiBydWxlLnRleHQ7XG4gICAgdXBkYXRlQmxhY2tsaXN0Q2FjaGUodXJsLCByZXMgfHwgZmFsc2UpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEJsYWNrbGlzdChsaXN0KSB7XG4gIGNhY2hlLmJhdGNoKHRydWUpO1xuICBjb25zdCBydWxlcyA9IGxpc3QgPT0gbnVsbCA/IGdldE9wdGlvbignYmxhY2tsaXN0JykgOiBsaXN0O1xuICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICBjb25zb2xlLmluZm8oJ1Jlc2V0IGJsYWNrbGlzdDonLCBydWxlcyk7XG4gIH1cbiAgLy8gWFhYIGNvbXBhdGlibGUgd2l0aCB7QXJyYXl9IGxpc3QgaW4gdjIuNi4xLVxuICBibGFja2xpc3RSdWxlcyA9IChBcnJheS5pc0FycmF5KHJ1bGVzKSA/IHJ1bGVzIDogKHJ1bGVzIHx8ICcnKS5zcGxpdCgnXFxuJykpXG4gIC5tYXAoKHRleHQpID0+IHtcbiAgICB0ZXh0ID0gdGV4dC50cmltKCk7XG4gICAgaWYgKCF0ZXh0IHx8IHRleHQuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtb2RlID0gdGV4dC5zdGFydHNXaXRoKCdAJykgJiYgdGV4dC5zcGxpdCgvXFxzLywgMSlbMF07XG4gICAgY29uc3QgcnVsZSA9IG1vZGUgPyB0ZXh0LnNsaWNlKG1vZGUubGVuZ3RoICsgMSkudHJpbSgpIDogdGV4dDtcbiAgICBjb25zdCByZWplY3QgPSBtb2RlICE9PSAnQGluY2x1ZGUnICYmIG1vZGUgIT09ICdAbWF0Y2gnOyAvLyBAaW5jbHVkZSBhbmQgQG1hdGNoID0gd2hpdGVsaXN0XG4gICAgY29uc3QgeyB0ZXN0IH0gPSBtb2RlID09PSAnQGluY2x1ZGUnIHx8IG1vZGUgPT09ICdAZXhjbHVkZScgJiYgYXV0b1JlZyhydWxlKVxuICAgICAgfHwgIW1vZGUgJiYgIXJ1bGUuaW5jbHVkZXMoJy8nKSAmJiBtYXRjaFRlc3RlcihgKjovLyR7cnVsZX0vKmApIC8vIGRvbWFpblxuICAgICAgfHwgbWF0Y2hUZXN0ZXIocnVsZSk7IC8vIEBtYXRjaCBhbmQgQGV4Y2x1ZGUtbWF0Y2hcbiAgICByZXR1cm4geyByZWplY3QsIHRlc3QsIHRleHQgfTtcbiAgfSlcbiAgLmZpbHRlcihCb29sZWFuKTtcbiAgYmxDYWNoZSA9IHt9O1xuICBibENhY2hlU2l6ZSA9IDA7XG4gIGNhY2hlLmJhdGNoKGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQmxhY2tsaXN0Q2FjaGUoa2V5LCB2YWx1ZSkge1xuICBibENhY2hlW2tleV0gPSB2YWx1ZTtcbiAgYmxDYWNoZVNpemUgKz0ga2V5Lmxlbmd0aDtcbiAgaWYgKGJsQ2FjaGVTaXplID4gTUFYX0JMX0NBQ0hFX0xFTkdUSCkge1xuICAgIE9iamVjdC5rZXlzKGJsQ2FjaGUpXG4gICAgLnNvbWUoKGspID0+IHtcbiAgICAgIGJsQ2FjaGVTaXplIC09IGsubGVuZ3RoO1xuICAgICAgZGVsZXRlIGJsQ2FjaGVba107XG4gICAgICAvLyByZWR1Y2UgdGhlIGNhY2hlIHRvIDc1JSBzbyB0aGF0IHRoaXMgZnVuY3Rpb24gZG9lc24ndCBydW4gdG9vIG9mdGVuLlxuICAgICAgcmV0dXJuIGJsQ2FjaGVTaXplIDwgTUFYX0JMX0NBQ0hFX0xFTkdUSCAqIDMgLyA0O1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRTY3JpcHROYW1lLCBpMThuLCByZXF1ZXN0LCBjb21wYXJlVmVyc2lvbiwgc2VuZENtZCwgdHJ1ZUpvaW4gfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBDTURfU0NSSVBUX1VQREFURSwgSVNfREVWIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcbmltcG9ydCB7IGZldGNoUmVzb3VyY2VzLCBnZXRTY3JpcHRCeUlkLCBnZXRTY3JpcHRzLCBwYXJzZVNjcmlwdCB9IGZyb20gJy4vZGInO1xuaW1wb3J0IHsgcGFyc2VNZXRhIH0gZnJvbSAnLi9zY3JpcHQnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uLCBzZXRPcHRpb24gfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHRydWU/Pn0gKi9cbiAgYXN5bmMgQ2hlY2tVcGRhdGUoaWQpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBnZXRTY3JpcHRCeUlkKGlkKTtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2hlY2tBbGxBbmROb3RpZnkoW3NjcmlwdF0pO1xuICAgIHJldHVybiByZXN1bHRzWzBdO1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gKi9cbiAgYXN5bmMgQ2hlY2tVcGRhdGVBbGwoKSB7XG4gICAgc2V0T3B0aW9uKCdsYXN0VXBkYXRlJywgRGF0ZS5ub3coKSk7XG4gICAgY29uc3QgdG9VcGRhdGUgPSBnZXRTY3JpcHRzKCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb25maWcuc2hvdWxkVXBkYXRlKTtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2hlY2tBbGxBbmROb3RpZnkodG9VcGRhdGUpO1xuICAgIHJldHVybiByZXN1bHRzLmluY2x1ZGVzKHRydWUpO1xuICB9LFxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrQWxsQW5kTm90aWZ5KHNjcmlwdHMpIHtcbiAgY29uc3Qgbm90ZXMgPSBbXTtcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKGl0ZW0gPT4gY2hlY2tVcGRhdGUoaXRlbSwgbm90ZXMpKSk7XG4gIGlmIChub3Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICBub3RpZnkobm90ZXNbMF0pO1xuICB9IGVsc2UgaWYgKG5vdGVzLmxlbmd0aCkge1xuICAgIG5vdGlmeSh7XG4gICAgICAvLyBGRiBkb2Vzbid0IHNob3cgbm90aWZpY2F0aW9ucyBvZiB0eXBlOidsaXN0JyBzbyB3ZSdsbCB1c2UgYHRleHRgIGV2ZXJ5d2hlcmVcbiAgICAgIHRleHQ6IG5vdGVzLm1hcChuID0+IG4udGV4dCkuam9pbignXFxuJyksXG4gICAgICBvbkNsaWNrOiBicm93c2VyLnJ1bnRpbWUub3Blbk9wdGlvbnNQYWdlLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufVxuXG5jb25zdCBwcm9jZXNzZXMgPSB7fTtcblxuLy8gcmVzb2x2ZXMgdG8gdHJ1ZSBpZiBzdWNjZXNzZnVsbHkgdXBkYXRlZFxuZnVuY3Rpb24gY2hlY2tVcGRhdGUoc2NyaXB0LCBub3Rlcykge1xuICBjb25zdCB7IGlkIH0gPSBzY3JpcHQucHJvcHM7XG4gIGNvbnN0IHByb21pc2UgPSBwcm9jZXNzZXNbaWRdIHx8IChwcm9jZXNzZXNbaWRdID0gZG9DaGVja1VwZGF0ZShzY3JpcHQsIG5vdGVzKSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkb0NoZWNrVXBkYXRlKHNjcmlwdCwgbm90ZXMpIHtcbiAgY29uc3QgeyBpZCB9ID0gc2NyaXB0LnByb3BzO1xuICBsZXQgbXNnT2s7XG4gIGxldCBtc2dFcnI7XG4gIGxldCByZXNvdXJjZU9wdHM7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1cGRhdGUgfSA9IGF3YWl0IHBhcnNlU2NyaXB0KHtcbiAgICAgIGlkLFxuICAgICAgY29kZTogYXdhaXQgZG93bmxvYWRVcGRhdGUoc2NyaXB0KSxcbiAgICAgIHVwZGF0ZTogeyBjaGVja2luZzogZmFsc2UgfSxcbiAgICB9KTtcbiAgICBtc2dPayA9IGkxOG4oJ21zZ1NjcmlwdFVwZGF0ZWQnLCBbZ2V0U2NyaXB0TmFtZSh1cGRhdGUpXSk7XG4gICAgcmVzb3VyY2VPcHRzID0geyBjYWNoZTogJ25vLWNhY2hlJyB9O1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoICh1cGRhdGUpIHtcbiAgICBtc2dFcnIgPSB1cGRhdGUuZXJyb3I7XG4gICAgLy8gRWl0aGVyIHByb2NlZWQgd2l0aCBub3JtYWwgZmV0Y2ggb24gbm8tdXBkYXRlIG9yIHNraXAgaXQgYWx0b2dldGhlciBvbiBlcnJvclxuICAgIHJlc291cmNlT3B0cyA9ICF1cGRhdGUuZXJyb3IgJiYgIXVwZGF0ZS5jaGVja2luZyAmJiB7fTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIGNvbnNvbGUuZXJyb3IodXBkYXRlKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAocmVzb3VyY2VPcHRzICYmICFJU19ERVYpIHsgLy8gREVW54q25oCB5LiN5pu05pawcmVzb3VyY2VcbiAgICAgIG1zZ0VyciA9IGF3YWl0IGZldGNoUmVzb3VyY2VzKHNjcmlwdCwgbnVsbCwgcmVzb3VyY2VPcHRzKTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRyAmJiBtc2dFcnIpIGNvbnNvbGUuZXJyb3IobXNnRXJyKTtcbiAgICB9XG4gICAgaWYgKGNhbk5vdGlmeShzY3JpcHQpICYmIChtc2dPayB8fCBtc2dFcnIpKSB7XG4gICAgICBub3Rlcy5wdXNoKHtcbiAgICAgICAgc2NyaXB0LFxuICAgICAgICB0ZXh0OiBbbXNnT2ssIG1zZ0Vycl06OnRydWVKb2luKCdcXG4nKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkZWxldGUgcHJvY2Vzc2VzW2lkXTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBkb3dubG9hZFVwZGF0ZSh7IHByb3BzOiB7IGlkIH0sIG1ldGEsIGN1c3RvbSB9KSB7XG4gIGNvbnN0IGRvd25sb2FkVVJMID0gY3VzdG9tLmRvd25sb2FkVVJMIHx8IG1ldGEuZG93bmxvYWRVUkwgfHwgY3VzdG9tLmxhc3RJbnN0YWxsVVJMO1xuICBsZXQgdXBkYXRlVVJMID0gY3VzdG9tLnVwZGF0ZVVSTCB8fCBtZXRhLnVwZGF0ZVVSTCB8fCBkb3dubG9hZFVSTDtcbiAgaWYgKElTX0RFViAmJiB1cGRhdGVVUkwpIHtcbiAgICBpZiAobWV0YS5kZXYpIHtcbiAgICAgIGNvbnN0IHVybHMgPSB1cGRhdGVVUkwuc3BsaXQoJy8nKTtcbiAgICAgIHVwZGF0ZVVSTCA9IGBodHRwOi8vMTI3LjAuMC4xOiR7bWV0YS5kZXZ9LyR7dXJsc1t1cmxzLmxlbmd0aCAtIDFdfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZVVSTCA9IG51bGw7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUuaW5mbygnZG93bmxvYWRVcGRhdGUnLCBpZCwgdXBkYXRlVVJMKTtcbiAgfVxuICBpZiAoIXVwZGF0ZVVSTCkgdGhyb3cgZmFsc2U7XG4gIGxldCBlcnJvck1lc3NhZ2U7XG4gIGNvbnN0IHVwZGF0ZSA9IHt9O1xuICBjb25zdCByZXN1bHQgPSB7IHVwZGF0ZSwgd2hlcmU6IHsgaWQgfSB9O1xuICBhbm5vdW5jZShpMThuKCdtc2dDaGVja2luZ0ZvclVwZGF0ZScpKTtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcXVlc3QodXBkYXRlVVJMLCB7XG4gICAgICAvLyBUT0RPOiBkbyBhIEhFQUQgcmVxdWVzdCBmaXJzdCB0byBnZXQgRVRhZyBoZWFkZXIgYW5kIGNvbXBhcmUgdG8gc3RvcmFnZS5tb2RcbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgaGVhZGVyczogeyBBY2NlcHQ6ICd0ZXh0L3gtdXNlcnNjcmlwdC1tZXRhLCovKicgfSxcbiAgICB9KTtcbiAgICBjb25zdCB7IHZlcnNpb24gfSA9IHBhcnNlTWV0YShkYXRhKTtcbiAgICBpZiAoSVNfREVWKSB7XG4gICAgICBpZiAobWV0YS52ZXJzaW9uID09PSB2ZXJzaW9uKSB0aHJvdyBmYWxzZTtcbiAgICAgIGNvbnNvbGUuaW5mbygndXBkYXRlJywgbWV0YS5uYW1lLCB2ZXJzaW9uLCBjb21wYXJlVmVyc2lvbihtZXRhLnZlcnNpb24sIHZlcnNpb24pKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZVZlcnNpb24obWV0YS52ZXJzaW9uLCB2ZXJzaW9uKSA+PSAwKSB7XG4gICAgICBhbm5vdW5jZShpMThuKCdtc2dOb1VwZGF0ZScpLCB7IGNoZWNraW5nOiBmYWxzZSB9KTtcbiAgICB9IGVsc2UgaWYgKCFkb3dubG9hZFVSTCkge1xuICAgICAgYW5ub3VuY2UoaTE4bignbXNnTmV3VmVyc2lvbicpLCB7IGNoZWNraW5nOiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYW5ub3VuY2UoaTE4bignbXNnVXBkYXRpbmcnKSk7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBpMThuKCdtc2dFcnJvckZldGNoaW5nU2NyaXB0Jyk7XG4gICAgICByZXR1cm4gKGF3YWl0IHJlcXVlc3QoZG93bmxvYWRVUkwsIHsgY2FjaGU6ICduby1jYWNoZScgfSkpLmRhdGE7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgYW5ub3VuY2UoZXJyb3JNZXNzYWdlIHx8IGkxOG4oJ21zZ0Vycm9yRmV0Y2hpbmdVcGRhdGVJbmZvJyksIHsgZXJyb3IgfSk7XG4gIH1cbiAgdGhyb3cgdXBkYXRlO1xuICBmdW5jdGlvbiBhbm5vdW5jZShtZXNzYWdlLCB7IGVycm9yLCBjaGVja2luZyA9ICFlcnJvciB9ID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHVwZGF0ZSwge1xuICAgICAgbWVzc2FnZSxcbiAgICAgIGNoZWNraW5nLFxuICAgICAgZXJyb3I6IGVycm9yID8gYCR7aTE4bignZ2VuZXJpY0Vycm9yJyl9ICR7ZXJyb3Iuc3RhdHVzfSwgJHtlcnJvci51cmx9YCA6IG51bGwsXG4gICAgICAvLyBgbnVsbGAgaXMgdHJhbnNmZXJhYmxlIGluIENocm9tZSB1bmxpa2UgYHVuZGVmaW5lZGBcbiAgICB9KTtcbiAgICBzZW5kQ21kKENNRF9TQ1JJUFRfVVBEQVRFLCByZXN1bHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbk5vdGlmeShzY3JpcHQpIHtcbiAgY29uc3QgYWxsb3dlZCA9IGdldE9wdGlvbignbm90aWZ5VXBkYXRlcycpO1xuICByZXR1cm4gZ2V0T3B0aW9uKCdub3RpZnlVcGRhdGVzR2xvYmFsJylcbiAgICA/IGFsbG93ZWRcbiAgICA6IHNjcmlwdC5jb25maWcubm90aWZ5VXBkYXRlcyA/PyBhbGxvd2VkO1xufVxuXG5mdW5jdGlvbiBub3RpZnkoe1xuICBzY3JpcHQsXG4gIHRleHQsXG4gIG9uQ2xpY2sgPSAoKSA9PiBjb21tYW5kcy5PcGVuRWRpdG9yKHNjcmlwdC5wcm9wcy5pZCksXG59KSB7XG4gIGNvbW1hbmRzLk5vdGlmaWNhdGlvbih7XG4gICAgdGV4dCxcbiAgICAvLyBGRiBkb2Vzbid0IHNob3cgdGhlIG5hbWUgb2YgdGhlIGV4dGVuc2lvbiBpbiB0aGUgdGl0bGUgb2YgdGhlIG5vdGlmaWNhdGlvblxuICAgIHRpdGxlOiBJU19GSVJFRk9YID8gYCR7aTE4bigndGl0bGVTY3JpcHRVcGRhdGVkJyl9IC0gJHtpMThuKCdleHROYW1lJyl9YCA6ICcnLFxuICB9LCB1bmRlZmluZWQsIHtcbiAgICBvbkNsaWNrLFxuICB9KTtcbn1cbiIsImltcG9ydCB7IGlzRW1wdHksIHNlbmRUYWJDbWQgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBmb3JFYWNoRW50cnksIGZvckVhY2hLZXksIG9iamVjdFNldCB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgeyBnZXRTY3JpcHQsIGdldFZhbHVlU3RvcmVzQnlJZHMsIGR1bXBWYWx1ZVN0b3JlcyB9IGZyb20gJy4vZGInO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5jb25zdCBvcGVuZXJzID0ge307IC8vIHsgc2NyaXB0SWQ6IHsgdGFiSWQ6IHsgZnJhbWVJZDogMSwgLi4uIH0sIC4uLiB9IH1cbmxldCBjYWNoZSA9IHt9OyAvLyB7IHNjcmlwdElkOiB7IGtleTogeyBsYXN0OiB2YWx1ZSwgdGFiSWQ6IHsgZnJhbWVJZDogdmFsdWUgfSB9IH0gfVxubGV0IHVwZGF0ZVNjaGVkdWxlZDtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICAvKiogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fSAqL1xuICBhc3luYyBHZXRWYWx1ZVN0b3JlKGlkKSB7XG4gICAgY29uc3Qgc3RvcmVzID0gYXdhaXQgZ2V0VmFsdWVTdG9yZXNCeUlkcyhbaWRdKTtcbiAgICByZXR1cm4gc3RvcmVzW2lkXSB8fCB7fTtcbiAgfSxcbiAgLyoqIEBwYXJhbSB7eyB3aGVyZSwgc3RvcmUgfVtdfSBkYXRhXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59ICovXG4gIGFzeW5jIFNldFZhbHVlU3RvcmVzKGRhdGEpIHtcbiAgICAvLyBWYWx1ZSBzdG9yZSB3aWxsIGJlIHJlcGxhY2VkIHNvb24uXG4gICAgY29uc3Qgc3RvcmVzID0gZGF0YS5yZWR1Y2UoKHJlcywgeyB3aGVyZSwgc3RvcmUgfSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSB3aGVyZS5pZCB8fCBnZXRTY3JpcHQod2hlcmUpPy5wcm9wcy5pZDtcbiAgICAgIGlmIChpZCkgcmVzW2lkXSA9IHN0b3JlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZHVtcFZhbHVlU3RvcmVzKHN0b3JlcyksXG4gICAgICBicm9hZGNhc3RWYWx1ZVN0b3Jlcyhncm91cFN0b3Jlc0J5RnJhbWUoc3RvcmVzKSksXG4gICAgXSk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHt2b2lkfSAqL1xuICBVcGRhdGVWYWx1ZSh7IGlkLCBrZXksIHZhbHVlID0gbnVsbCB9LCBzcmMpIHtcbiAgICBvYmplY3RTZXQoY2FjaGUsIFtpZCwga2V5LCAnbGFzdCddLCB2YWx1ZSk7XG4gICAgb2JqZWN0U2V0KGNhY2hlLCBbaWQsIGtleSwgc3JjLnRhYi5pZCwgc3JjLmZyYW1lSWRdLCB2YWx1ZSk7XG4gICAgdXBkYXRlTGF0ZXIoKTtcbiAgfSxcbn0pO1xuXG5icm93c2VyLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKHJlc2V0VmFsdWVPcGVuZXIpO1xuYnJvd3Nlci50YWJzLm9uUmVwbGFjZWQuYWRkTGlzdGVuZXIoKGFkZGVkSWQsIHJlbW92ZWRJZCkgPT4gcmVzZXRWYWx1ZU9wZW5lcihyZW1vdmVkSWQpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VmFsdWVPcGVuZXIodGFiSWQpIHtcbiAgb3BlbmVyczo6Zm9yRWFjaEVudHJ5KChbaWQsIG9wZW5lclRhYnNdKSA9PiB7XG4gICAgaWYgKHRhYklkIGluIG9wZW5lclRhYnMpIHtcbiAgICAgIGRlbGV0ZSBvcGVuZXJUYWJzW3RhYklkXTtcbiAgICAgIGlmIChpc0VtcHR5KG9wZW5lclRhYnMpKSBkZWxldGUgb3BlbmVyc1tpZF07XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFZhbHVlT3BlbmVyKHRhYklkLCBmcmFtZUlkLCBzY3JpcHRJZHMpIHtcbiAgc2NyaXB0SWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgb2JqZWN0U2V0KG9wZW5lcnMsIFtpZCwgdGFiSWQsIGZyYW1lSWRdLCAxKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUxhdGVyKCkge1xuICB3aGlsZSAoIXVwZGF0ZVNjaGVkdWxlZCkge1xuICAgIHVwZGF0ZVNjaGVkdWxlZCA9IHRydWU7XG4gICAgYXdhaXQgMDtcbiAgICBjb25zdCBjdXJyZW50Q2FjaGUgPSBjYWNoZTtcbiAgICBjYWNoZSA9IHt9O1xuICAgIGF3YWl0IGRvVXBkYXRlKGN1cnJlbnRDYWNoZSk7XG4gICAgdXBkYXRlU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgaWYgKGlzRW1wdHkoY2FjaGUpKSBicmVhaztcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBkb1VwZGF0ZShjdXJyZW50Q2FjaGUpIHtcbiAgY29uc3QgaWRzID0gT2JqZWN0LmtleXMoY3VycmVudENhY2hlKTtcbiAgY29uc3QgdmFsdWVTdG9yZXMgPSBhd2FpdCBnZXRWYWx1ZVN0b3Jlc0J5SWRzKGlkcyk7XG4gIGlkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgIGN1cnJlbnRDYWNoZVtpZF06OmZvckVhY2hFbnRyeSgoW2tleSwgeyBsYXN0IH1dKSA9PiB7XG4gICAgICBvYmplY3RTZXQodmFsdWVTdG9yZXMsIFtpZCwga2V5XSwgbGFzdCB8fCB1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9KTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGR1bXBWYWx1ZVN0b3Jlcyh2YWx1ZVN0b3JlcyksXG4gICAgYnJvYWRjYXN0VmFsdWVTdG9yZXMoZ3JvdXBDYWNoZUJ5RnJhbWUoY3VycmVudENhY2hlKSwgeyBwYXJ0aWFsOiB0cnVlIH0pLFxuICBdKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYnJvYWRjYXN0VmFsdWVTdG9yZXModGFiRnJhbWVEYXRhLCB7IHBhcnRpYWwgfSA9IHt9KSB7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIGZvciAoY29uc3QgW3RhYklkLCBmcmFtZXNdIG9mIE9iamVjdC5lbnRyaWVzKHRhYkZyYW1lRGF0YSkpIHtcbiAgICBmb3IgKGNvbnN0IFtmcmFtZUlkLCBmcmFtZURhdGFdIG9mIE9iamVjdC5lbnRyaWVzKGZyYW1lcykpIHtcbiAgICAgIGlmICghaXNFbXB0eShmcmFtZURhdGEpKSB7XG4gICAgICAgIGlmIChwYXJ0aWFsKSBmcmFtZURhdGEucGFydGlhbCA9IHRydWU7XG4gICAgICAgIHRhc2tzLnB1c2goc2VuZFRhYkNtZCgrdGFiSWQsICdVcGRhdGVkVmFsdWVzJywgZnJhbWVEYXRhLCB7IGZyYW1lSWQ6ICtmcmFtZUlkIH0pKTtcbiAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMjApIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzLnNwbGljZSgwKSk7IC8vIHRocm90dGxpbmdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXdhaXQgUHJvbWlzZS5hbGwodGFza3MpO1xufVxuXG4vLyBSZXR1cm5zIHBlciB0YWIvZnJhbWUgZGF0YSB3aXRoIG9ubHkgdGhlIGNoYW5nZWQgdmFsdWVzXG5mdW5jdGlvbiBncm91cENhY2hlQnlGcmFtZShjYWNoZURhdGEpIHtcbiAgY29uc3QgdG9TZW5kID0ge307XG4gIGNhY2hlRGF0YTo6Zm9yRWFjaEVudHJ5KChbaWQsIHNjcmlwdERhdGFdKSA9PiB7XG4gICAgY29uc3QgZGF0YUVudHJpZXMgPSBPYmplY3QuZW50cmllcyhzY3JpcHREYXRhKTtcbiAgICBvcGVuZXJzW2lkXTo6Zm9yRWFjaEVudHJ5KChbdGFiSWQsIGZyYW1lc10pID0+IHtcbiAgICAgIGZyYW1lczo6Zm9yRWFjaEtleSgoZnJhbWVJZCkgPT4ge1xuICAgICAgICBkYXRhRW50cmllcy5mb3JFYWNoKChba2V5LCBoaXN0b3J5XSkgPT4ge1xuICAgICAgICAgIC8vIFNraXBwaW5nIHRoaXMgZnJhbWUgaWYgaXRzIGxhc3QgcmVjb3JkZWQgdmFsdWUgaXMgaWRlbnRpY2FsXG4gICAgICAgICAgaWYgKGhpc3RvcnkubGFzdCAhPT0gaGlzdG9yeVt0YWJJZF0/LltmcmFtZUlkXSkge1xuICAgICAgICAgICAgb2JqZWN0U2V0KHRvU2VuZCwgW3RhYklkLCBmcmFtZUlkLCBpZCwga2V5XSwgaGlzdG9yeS5sYXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gdG9TZW5kO1xufVxuXG4vLyBSZXR1cm5zIHBlciB0YWIvZnJhbWUgZGF0YVxuZnVuY3Rpb24gZ3JvdXBTdG9yZXNCeUZyYW1lKHN0b3Jlcykge1xuICBjb25zdCB0b1NlbmQgPSB7fTtcbiAgc3RvcmVzOjpmb3JFYWNoRW50cnkoKFtpZCwgc3RvcmVdKSA9PiB7XG4gICAgb3BlbmVyc1tpZF06OmZvckVhY2hFbnRyeSgoW3RhYklkLCBmcmFtZXNdKSA9PiB7XG4gICAgICBmcmFtZXM6OmZvckVhY2hLZXkoZnJhbWVJZCA9PiB7XG4gICAgICAgIG9iamVjdFNldCh0b1NlbmQsIFt0YWJJZCwgZnJhbWVJZCwgaWRdLCBzdG9yZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB0b1NlbmQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihhbGxvd2VkKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB0aGlzLmFsbG93ZWQgPSBhbGxvd2VkO1xuICB9XG5cbiAgY2hlY2tUeXBlKHR5cGUpIHtcbiAgICBpZiAodGhpcy5hbGxvd2VkICYmICF0aGlzLmFsbG93ZWQuaW5jbHVkZXModHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBldmVudCB0eXBlOiAke3R5cGV9YCk7XG4gICAgfVxuICB9XG5cbiAgb24odHlwZSwgaGFuZGxlKSB7XG4gICAgdGhpcy5jaGVja1R5cGUodHlwZSk7XG4gICAgY29uc3QgeyBldmVudHMgfSA9IHRoaXM7XG4gICAgbGV0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVdO1xuICAgIGlmICghaGFuZGxlcnMpIHtcbiAgICAgIGhhbmRsZXJzID0gW107XG4gICAgICBldmVudHNbdHlwZV0gPSBoYW5kbGVycztcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHRoaXMub2ZmKHR5cGUsIGhhbmRsZSk7XG4gIH1cblxuICBvZmYodHlwZSwgaGFuZGxlKSB7XG4gICAgdGhpcy5jaGVja1R5cGUodHlwZSk7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmV2ZW50c1t0eXBlXTtcbiAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgIGNvbnN0IGkgPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZSk7XG4gICAgICBpZiAoaSA+PSAwKSBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG5cbiAgZW1pdCh0eXBlLCBkYXRhKSB7XG4gICAgdGhpcy5jaGVja1R5cGUodHlwZSk7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmV2ZW50c1t0eXBlXTtcbiAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgIGNvbnN0IGV2dCA9IHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZGVmYXVsdFByZXZlbnRlZDogZmFsc2UsXG4gICAgICAgIHByZXZlbnREZWZhdWx0KCkge1xuICAgICAgICAgIGV2dC5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBoYW5kbGVycy5zb21lKChoYW5kbGUpID0+IHtcbiAgICAgICAgaGFuZGxlKGV2dCk7XG4gICAgICAgIHJldHVybiBldnQuZGVmYXVsdFByZXZlbnRlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHRsZGpzIGZyb20gJ3RsZGpzJztcbi8vIGltcG9ydCB7IGZyb21Vc2VyU2V0dGluZ3MgfSBmcm9tICd0bGRqcyc7XG4vLyBpbXBvcnQgVHJpZSBmcm9tICd0bGRqcy9saWIvc3VmZml4LXRyaWUnO1xuLy8gaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJyMvY29tbW9uJztcblxuLy8gbGV0IHRsZGpzO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gaW5pdFRMRChyZW1vdGUpIHtcbi8vICAgLy8gVExEIHJ1bGVzIGFyZSB0b28gbGFyZ2UgdG8gYmUgcGFja2VkLCBkb3dubG9hZCB0aGVtIGF0IHJ1bnRpbWUuXG4vLyAgIGNvbnN0IHVybCA9ICdodHRwczovL3Zpb2xlbnRtb25rZXkudG9wL3N0YXRpYy90bGQtcnVsZXMuanNvbic7XG4vLyAgIGNvbnN0IGtleSA9ICdkYXQ6dGxkUnVsZXMnO1xuLy8gICBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KGtleSlcbi8vICAgLnRoZW4oKHsgW2tleV06IHRsZFJ1bGVzIH0pID0+IHtcbi8vICAgICBpZiAodGxkUnVsZXMpIHJldHVybiB0bGRSdWxlcztcbi8vICAgICBpZiAoIXJlbW90ZSkgcmV0dXJuIFByb21pc2UucmVqZWN0KCdpZ25vcmUgVExEJyk7XG4vLyAgICAgcmV0dXJuIHJlcXVlc3QodXJsLCB7IHJlc3BvbnNlVHlwZTogJ2pzb24nIH0pXG4vLyAgICAgLnRoZW4oKHsgZGF0YTogcnVsZXMgfSkgPT4ge1xuLy8gICAgICAgY29uc29sZS5pbmZvKCdEb3dubG9hZGVkIHB1YmxpYyBzdWZmaXggZGF0YScpO1xuLy8gICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBba2V5XTogcnVsZXMgfSlcbi8vICAgICAgIC50aGVuKCgpID0+IHJ1bGVzKTtcbi8vICAgICB9KTtcbi8vICAgfSlcbi8vICAgLnRoZW4odGxkUnVsZXMgPT4ge1xuLy8gICAgIGNvbnNvbGUuaW5mbygnSW5pdGlhbGl6ZWQgVExEJyk7XG4vLyAgICAgdGxkanMgPSBmcm9tVXNlclNldHRpbmdzKHsgcnVsZXM6IFRyaWUuZnJvbUpzb24odGxkUnVsZXMpIH0pO1xuLy8gICB9KVxuLy8gICAuY2F0Y2goZXJyID0+IHtcbi8vICAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIGNvbnNvbGUuZXJyb3IoZXJyKTtcbi8vICAgICBjb25zb2xlLmluZm8oJ0ZhaWxlZCBpbml0aWFsaXppbmcgVExEJyk7XG4vLyAgIH0pO1xuLy8gfVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUTEQoKSB7fVxuXG5mdW5jdGlvbiBleHBvcnRNZXRob2Qoa2V5KSB7XG4gIHJldHVybiAoLi4uYXJncykgPT4gdGxkanMgJiYgdGxkanNba2V5XSguLi5hcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhZHkoKSB7XG4gIHJldHVybiAhIXRsZGpzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RG9tYWluID0gZXhwb3J0TWV0aG9kKCdnZXREb21haW4nKTtcbmV4cG9ydCBjb25zdCBnZXRTdWJkb21haW4gPSBleHBvcnRNZXRob2QoJ2dldFN1YmRvbWFpbicpO1xuZXhwb3J0IGNvbnN0IGdldFB1YmxpY1N1ZmZpeCA9IGV4cG9ydE1ldGhvZCgnZ2V0UHVibGljU3VmZml4Jyk7XG4iXSwic291cmNlUm9vdCI6IiJ9