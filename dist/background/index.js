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

  initBuildin();
  console.info('initBuildin...');
  setTimeout(autoUpdate, _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["IS_DEV"] ? 1 : 2e4);
  _sync__WEBPACK_IMPORTED_MODULE_5__["initialize"]();
  Object(_utils_db__WEBPACK_IMPORTED_MODULE_7__["checkRemove"])();
  setInterval(_utils_db__WEBPACK_IMPORTED_MODULE_7__["checkRemove"], _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["TIMEOUT_24HOURS"]);
  const api = global.chrome.declarativeContent;

  if (api) {
    // Using declarativeContent to run content scripts earlier than document_start
    api.onPageChanged.getRules(async ([rule]) => {
      const id = rule == null ? void 0 : rule.id;
      const newId = "Violentmonkey:dOWFGfeH9Ys=";

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
    value: `"${"Violentmonkey:dOWFGfeH9Ys="}"=${blobUrl.split('/').pop()}; SameSite=Lax`
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

    console.info('onChanged', evt);
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
    console.info('req opts', opts); // handle download

    if (chrome && opts.native) {
      // console.info(opts);
      let headers = [];

      if (opts.headers) {
        headers = Object.keys(opts.headers).map(name => ({
          name,
          value: opts.headers[name]
        }));
      }

      return chrome.downloads.download({
        url: opts.url,
        headers,
        filename: opts.fileName
      }, downloadId => {
        // console.info('downloadId', downloadId);
        requests[id] = {
          id,
          downloadId,
          tabId,
          eventsToNotify,
          xhr: null
        };
        downloads[downloadId] = {
          req: requests[id],
          opts,
          src
        };

        if (eventsToNotify == null ? void 0 : eventsToNotify.includes('progress')) {
          Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendTabCmd"])(tabId, 'HttpRequested', {
            type: 'progress',
            id,
            downloadId
          }, {
            frameId
          });
        }
      });
    }

    requests[id] = {
      id,
      tabId,
      eventsToNotify,
      xhr: new XMLHttpRequest()
    };
    (tabRequests[tabId] || (tabRequests[tabId] = {}))[id] = 1;
    httpRequest(opts, src, res => requests[id] && Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendTabCmd"])(tabId, 'HttpRequested', res, {
      frameId
    }));
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
  let responseHeaders;
  let sent = false;
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
      response = xhr.response;
      sent = false;

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

    const shouldSendResponse = xhr.readyState === 4 && shouldNotify && !sent;
    lastPromise = lastPromise.then(async () => {
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
    if (_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["IS_DEV"]) return data;
    const {
      version
    } = Object(_script__WEBPACK_IMPORTED_MODULE_3__["parseMeta"])(data);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL25vZGVfbW9kdWxlcy9wdW55Y29kZS9wdW55Y29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cmwvdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cmwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3BsdWdpbi9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvcGx1Z2luL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3N5bmMvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9zeW5jL2Ryb3Bib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvc3luYy9nb29nbGVkcml2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9zeW5jL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3N5bmMvb25lZHJpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvc3luYy93ZWJkYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2RiLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9ob3RrZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9wYXRjaC1kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9wb3B1cC10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3ByZWluamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3N0b3JhZ2UtZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy90ZW1wbGF0ZS1ob29rLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3Rlc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdGxkLmpzIl0sIm5hbWVzIjpbImhvb2tPcHRpb25zIiwiY2hhbmdlcyIsImF1dG9VcGRhdGUiLCJTQ1JJUFRfVEVNUExBVEUiLCJyZXNldFNjcmlwdFRlbXBsYXRlIiwic2VuZENtZCIsIk9iamVjdCIsImFzc2lnbiIsImNvbW1hbmRzIiwiR2V0RGF0YSIsImlkcyIsImRhdGEiLCJnZXREYXRhIiwic3luYyIsIkdldEluamVjdGVkIiwidXJsIiwiZm9yY2VDb250ZW50Iiwic3JjIiwiZnJhbWVJZCIsInRhYiIsInRhYklkIiwiaWQiLCJyZXNldFZhbHVlT3BlbmVyIiwiY2xlYXJSZXF1ZXN0c0J5VGFiSWQiLCJyZXMiLCJnZXRJbmplY3RlZFNjcmlwdHMiLCJmZWVkYmFjayIsImluamVjdCIsInZhbE9wSWRzIiwiaXNQb3B1cFNob3duIiwicG9wdXBUYWJzIiwibGVuZ3RoIiwic2V0VGltZW91dCIsIkluamVjdGlvbkZlZWRiYWNrIiwiYWRkVmFsdWVPcGVuZXIiLCJHZXRUYWJEb21haW4iLCJnZXRBY3RpdmVUYWIiLCJwZW5kaW5nVXJsIiwiaG9zdCIsIm1hdGNoIiwiZG9tYWluIiwidGxkIiwiU2V0VGltZW91dCIsIm1zIiwibWFrZVBhdXNlIiwiY29tbWFuZHNUb1N5bmMiLCJjb21tYW5kc1RvU3luY0lmVHJ1dGh5IiwiaGFuZGxlQ29tbWFuZE1lc3NhZ2UiLCJyZXEiLCJjbWQiLCJpbmNsdWRlcyIsImludGVydmFsIiwiSVNfREVWIiwiZ2V0T3B0aW9uIiwiVElNRU9VVF8yNEhPVVJTIiwiZWxhcHNlZCIsIkRhdGUiLCJub3ciLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsIk1hdGgiLCJtaW4iLCJUSU1FT1VUX01BWCIsImluaXRCdWlsZGluIiwicmVxdWVzdCIsIkJVSUxEX0lOX1NDUklQVF9TUkMiLCJjYWNoZSIsImhlYWRlcnMiLCJBY2NlcHQiLCJQYXJzZVNjcmlwdCIsImNvZGUiLCJjdXN0b20iLCJidWlsZEluIiwid2hlcmUiLCJpbml0aWFsaXplIiwiZ2xvYmFsIiwiZGVlcENvcHkiLCJicm93c2VyIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwiSVNfRklSRUZPWCIsImFyZ3MiLCJjYXRjaCIsImUiLCJQcm9taXNlIiwicmVqZWN0IiwiRXJyb3IiLCJjb25zb2xlIiwiaW5mbyIsImNoZWNrUmVtb3ZlIiwic2V0SW50ZXJ2YWwiLCJhcGkiLCJjaHJvbWUiLCJkZWNsYXJhdGl2ZUNvbnRlbnQiLCJvblBhZ2VDaGFuZ2VkIiwiZ2V0UnVsZXMiLCJydWxlIiwibmV3SWQiLCJwcm9jZXNzIiwicmVtb3ZlUnVsZXMiLCJhZGRSdWxlcyIsImNvbmRpdGlvbnMiLCJQYWdlU3RhdGVNYXRjaGVyIiwicGFnZVVybCIsInVybENvbnRhaW5zIiwiYWN0aW9ucyIsIlJlcXVlc3RDb250ZW50U2NyaXB0IiwianMiLCJnZXRNYW5pZmVzdCIsImNvbnRlbnRfc2NyaXB0cyIsIkV2ZW50RW1pdHRlciIsInNjcmlwdCIsInVwZGF0ZSIsImxpc3QiLCJnZXRTY3JpcHRzIiwiZ2V0IiwiR2V0U2NyaXB0Q29kZSIsInJlbW92ZSIsIk1hcmtSZW1vdmVkIiwicmVtb3ZlZCIsInNlcnZpY2VOYW1lcyIsInNlcnZpY2VDbGFzc2VzIiwic2VydmljZXMiLCJhdXRvU3luYyIsImRlYm91bmNlIiwiVElNRU9VVF9IT1VSIiwid29ya2luZyIsInJlc29sdmUiLCJzeW5jQ29uZmlnIiwiZ2V0SXRlbUZpbGVuYW1lIiwibmFtZSIsInVyaSIsImlzU2NyaXB0RmlsZSIsInRlc3QiLCJnZXRVUkkiLCJpIiwiaW5kZXhPZiIsInZlcnNpb24iLCJzbGljZSIsInNwbGl0IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXJyIiwiaW5pdENvbmZpZyIsImtleSIsImRlZiIsImtleXMiLCJub3JtYWxpemVLZXlzIiwidW5zaGlmdCIsInNldCIsInZhbHVlIiwic2V0T3B0aW9uIiwiaW5pdCIsImNvbmZpZyIsInNlcnZpY2VDb25maWciLCJnZXRLZXlzIiwidmFsIiwiZm9yRWFjaEVudHJ5IiwiayIsInYiLCJjbGVhciIsInNlcnZpY2VTdGF0ZSIsInZhbGlkU3RhdGVzIiwiaW5pdGlhbFN0YXRlIiwib25DaGFuZ2UiLCJzdGF0ZSIsIm5ld1N0YXRlIiwid2FybiIsImlzIiwic3RhdGVzIiwiZW5zdXJlQXJyYXkiLCJnZXRTdGF0ZXMiLCJtYXAiLCJzZXJ2aWNlIiwiZGlzcGxheU5hbWUiLCJhdXRoU3RhdGUiLCJzeW5jU3RhdGUiLCJsYXN0U3luYyIsInByb2dyZXNzIiwicHJvcGVydGllcyIsInVzZXJDb25maWciLCJnZXRVc2VyQ29uZmlnIiwiZ2V0U2NyaXB0RGF0YSIsInN5bmNWZXJzaW9uIiwiZXh0cmEiLCJwcm9wcyIsIm9iamVjdFBpY2siLCJtb3JlIiwiZW5hYmxlZCIsInNob3VsZFVwZGF0ZSIsImxhc3RVcGRhdGVkIiwicGFyc2VTY3JpcHREYXRhIiwicmF3Iiwib2JqIiwiSlNPTiIsInBhcnNlIiwib2JqZWN0UHVyaWZ5IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInNlcnZpY2VGYWN0b3J5IiwiYmFzZSIsIlNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImV4dGVuZCIsImV4dGVuZFNlcnZpY2UiLCJvcHRpb25zIiwiY3JlYXRlIiwib25TdGF0ZUNoYW5nZSIsIkJhc2VTZXJ2aWNlIiwiZGVsYXlUaW1lIiwidXJsUHJlZml4IiwibWV0YUZpbGUiLCJhdXRoVHlwZSIsIm5vb3AiLCJzZXRVc2VyQ29uZmlnIiwiZmluaXNoZWQiLCJ0b3RhbCIsImxhc3RGZXRjaCIsInN0YXJ0U3luYyIsInN5bmNGYWN0b3J5IiwiZXZlbnRzIiwiZ2V0RXZlbnRFbWl0dGVyIiwibG9nIiwicHJvbWlzZSIsImRlYm91bmNlZFJlc29sdmUiLCJzaG91bGRTeW5jIiwiZ2V0Q3VycmVudCIsImdldFJlYWR5IiwidGhlbiIsImVycm9yIiwicHJlcGFyZUhlYWRlcnMiLCJwcmVwYXJlIiwiaW5pdFRva2VuIiwidXNlciIsInR5cGUiLCJjaGVja1N5bmMiLCJhY3F1aXJlTG9jayIsInJlbGVhc2VMb2NrIiwiaGFuZGxlTWV0YUVycm9yIiwiZ2V0TWV0YSIsInRva2VuIiwiQXV0aG9yaXphdGlvbiIsImxvYWREYXRhIiwiZGVsYXkiLCJ0cyIsInN0YXJ0c1dpdGgiLCJwcmVmaXgiLCJnZXRMb2NhbERhdGEiLCJwbHVnaW5TY3JpcHQiLCJnZXRTeW5jRGF0YSIsInJlbW90ZU1ldGEiLCJhbGwiLCJyZW1vdGVEYXRhIiwibG9jYWxEYXRhIiwicmVtb3RlTWV0YURhdGEiLCJyZW1vdGVNZXRhSW5mbyIsInJlbW90ZVRpbWVzdGFtcCIsInRpbWVzdGFtcCIsInJlbW90ZUNoYW5nZWQiLCJnbG9iYWxMYXN0TW9kaWZpZWQiLCJyZW1vdGVJdGVtTWFwIiwibG9jYWxNZXRhIiwiZmlyc3RTeW5jIiwib3V0ZGF0ZWQiLCJwdXRMb2NhbCIsInB1dFJlbW90ZSIsImRlbFJlbW90ZSIsImRlbExvY2FsIiwidXBkYXRlTG9jYWwiLCJyZWR1Y2UiLCJpdGVtIiwiaXRlbUluZm8iLCJtb2RpZmllZCIsInBvc2l0aW9uIiwibGFzdE1vZGlmaWVkIiwicmVtb3RlSW5mbyIsInJlbW90ZUl0ZW0iLCJwdXNoIiwibG9jYWwiLCJyZW1vdGUiLCJwcm9taXNlUXVldWUiLCJvYmplY3RTZXQiLCJwdXQiLCJzdHJpbmdpZnkiLCJ1cGRhdGVzIiwidXBkYXRlU2NyaXB0SW5mbyIsInNvcnRTY3JpcHRzIiwiY2hhbmdlZCIsInNjcmlwdHMiLCJwcm9taXNlcyIsImVycm9ycyIsImZpbHRlciIsIkJvb2xlYW4iLCJyZWdpc3RlciIsIkZhY3RvcnkiLCJnZXRTZXJ2aWNlIiwic3luY09uZSIsImF1dGhvcml6ZSIsInJldm9rZSIsInNldENvbmZpZyIsIm9wZW5BdXRoUGFnZSIsInJlZGlyZWN0VXJpIiwidW5yZWdpc3RlcldlYlJlcXVlc3QiLCJ3ZWJSZXF1ZXN0Iiwib25CZWZvcmVSZXF1ZXN0IiwidXJscyIsInR5cGVzIiwidGFicyIsImNoZWNrQXV0aCIsImNhbmNlbCIsInJlbW92ZUxpc3RlbmVyIiwiY2xpZW50X2lkIiwicmVkaXJlY3RfdXJpIiwiZXNjUkUiLCJlc2NGdW5jIiwibSIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsImpzb25TdHJpbmdpZnlTYWZlIiwic3RyaW5nIiwicmVwbGFjZSIsIkRyb3Bib3giLCJtZXRob2QiLCJzdGF0dXMiLCJib2R5IiwicGF0aCIsInJlc3BvbnNlVHlwZSIsImVudHJpZXMiLCJub3JtYWxpemUiLCJtb2RlIiwicGFyYW1zIiwicmVzcG9uc2VfdHlwZSIsImR1bXBRdWVyeSIsImF1dGhvcml6ZWQiLCJsb2FkUXVlcnkiLCJhY2Nlc3NfdG9rZW4iLCJ1aWQiLCJzaXplIiwiY2xpZW50X3NlY3JldCIsInNjb3BlIiwiVU5BVVRIT1JJWkVEIiwiR29vZ2xlRHJpdmUiLCJyZWZyZXNoVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwiZ3JhbnRfdHlwZSIsInJlcXVlc3RVc2VyIiwiYWNjZXNzX3R5cGUiLCJub3RpZnkiLCJ0aXRsZSIsIm9iamVjdEdldCIsInNwYWNlcyIsImZpZWxkcyIsImZpbGVzIiwibWV0YUl0ZW0iLCJnb3RNZXRhIiwicHJvbXB0IiwiYm91bmRhcnkiLCJnZXRVbmlxSWQiLCJtZXRhZGF0YSIsInBhcmVudHMiLCJqb2luIiwiU3luY0F1dGhvcml6ZSIsIlN5bmNSZXZva2UiLCJTeW5jU3RhcnQiLCJTeW5jU2V0Q29uZmlnIiwiT25lRHJpdmUiLCJoZWFkZXIiLCJmaWxlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidXNlcl9pZCIsIktFWV9DSElMRFJFTiIsIlN5bWJvbCIsIlhOb2RlIiwibm9kZSIsIm5zTWFwIiwicGFyc2VBdHRycyIsInBhcnNlTmFtZSIsImZyb21YTUwiLCJ4bWwiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJhdHRyIiwiJCIsIm5vZGVUeXBlIiwidGFnTmFtZSIsIm5zIiwidGV4dCIsInRleHRDb250ZW50IiwidHJpbSIsImNoaWxkcmVuIiwiY2hpbGQiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiZmluZCIsIkRFRkFVTFRfQ09ORklHIiwic2VydmVyVXJsIiwiYW5vbnltb3VzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIldlYkRBViIsImVuZHNXaXRoIiwiVVJMIiwiYXV0aCIsIndpbmRvdyIsImJ0b2EiLCJjYWxsIiwiY3JlZGVudGlhbHMiLCJta2RpciIsInJlYWRkaXIiLCJkZXB0aCIsIml0ZW1zIiwicHJvcCIsImRpc3BsYXlOYW1lTm9kZSIsInVuZGVmaW5lZCIsImhyZWYiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImxvY2siLCJJZiIsImluaXRDYWNoZSIsImxpZmV0aW1lIiwiQ2FjaGVMb2FkIiwiQ2FjaGVIaXQiLCJoaXQiLCJDYWNoZVBvcCIsInBvcCIsInRleHRhcmVhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xpcGJvYXJkRGF0YSIsIlNldENsaXBib2FyZCIsImZvY3VzIiwicmV0IiwiZXhlY0NvbW1hbmQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInNldERhdGEiLCJzdG9yZSIsInN0b3JhZ2UiLCJzZXREYXRhQ2FjaGUiLCJkYXRhQ2FjaGUiLCJvbkR1bXAiLCJzY3JpcHRNYXAiLCJDaGVja1Bvc2l0aW9uIiwiQ2hlY2tSZW1vdmUiLCJHZXRTY3JpcHQiLCJnZXRTY3JpcHQiLCJFeHBvcnRaaXAiLCJ2YWx1ZXMiLCJnZXRQcm9wc0lkIiwiY29kZU1hcCIsImdldE11bHRpIiwiZ2V0T25lIiwiR2V0U2NyaXB0VmVyIiwib3B0cyIsIm1ldGEiLCJNb3ZlIiwib2Zmc2V0IiwiZ2V0U2NyaXB0QnlJZCIsImluZGV4Iiwic3BsaWNlIiwibm9ybWFsaXplUG9zaXRpb24iLCJSZW1vdmVTY3JpcHQiLCJQYXJzZU1ldGEiLCJwYXJzZU1ldGEiLCJwYXJzZVNjcmlwdCIsIlVwZGF0ZVNjcmlwdEluZm8iLCJWYWN1dW0iLCJ2YWN1dW0iLCJwcmVJbml0aWFsaXplIiwibGFzdFZlcnNpb24iLCJwYXRjaERCIiwic3RvcmVJbmZvIiwiaWRNYXAiLCJ1cmlNYXAiLCJtb2RzIiwicmVzVXJscyIsInJlbWVtYmVyVXJsIiwiXyIsImdldEludCIsImdldE5hbWVVUkkiLCJnZXREZWZhdWx0Q3VzdG9tIiwibWF4IiwicGF0aE1hcCIsImdyYW50IiwiU2V0IiwicmVxdWlyZSIsInJlc291cmNlcyIsImljb24iLCJtb2QiLCJyZW1vdmVNdWx0aSIsImRlZmF1bHRJbmplY3RJbnRvIiwiSU5KRUNUX1BBR0UiLCJjb21wYXJlVmVyc2lvbiIsIklOSkVDVF9BVVRPIiwidXBkYXRlTGFzdE1vZGlmaWVkIiwiZHVtcCIsInNvcnQiLCJhIiwiYiIsImdldFZhbHVlU3RvcmVzQnlJZHMiLCJkdW1wVmFsdWVTdG9yZXMiLCJ2YWx1ZURpY3QiLCJFTlZfQ0FDSEVfS0VZUyIsIkVOVl9SRVFfS0VZUyIsIkVOVl9WQUxVRV9JRFMiLCJHTVZBTFVFU19SRSIsIlJVTl9BVF9SRSIsImdldFNjcmlwdHNCeVVSTCIsImlzVG9wIiwiYWxsU2NyaXB0cyIsInRlc3RCbGFja2xpc3QiLCJub2ZyYW1lcyIsInRlc3RTY3JpcHQiLCJkaXNhYmxlZElkcyIsImVudlN0YXJ0IiwiZW52RGVsYXllZCIsImJ1aWxkUGF0aE1hcCIsInJ1bkF0IiwiZW52Iiwic29tZSIsInJlYWRFbnZpcm9ubWVudERhdGEiLCJTVE9SQUdFX1JPVVRFUyIsInJldHJpZWRTdG9yYWdlS2V5cyIsImlzUmV0cnkiLCJhcmVhIiwic3JjSWRzIiwiZ2V0S2V5IiwiZXJyMiIsImdldEljb25DYWNoZSIsImljb25VcmxzIiwiaXNSZW1vdGUiLCJtYWtlRGF0YVVyaSIsImZvcmNlIiwidG9SZW1vdmUiLCJUSU1FT1VUX1dFRUsiLCJnZXRVVUlEIiwicm5kIiwiVWludDE2QXJyYXkiLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJzYXZlU2NyaXB0Iiwib2xkU2NyaXB0IiwidXVpZCIsInJhbmRvbVVVSUQiLCJpMThuIiwiQ01EX1NDUklQVF9VUERBVEUiLCJyZXN1bHQiLCJtZXNzYWdlIiwiaXNOZXciLCJuZXdTY3JpcHQiLCJDTURfU0NSSVBUX0FERCIsImhvbWVwYWdlVVJMIiwiZnJvbSIsImxhc3RJbnN0YWxsVVJMIiwiZmV0Y2hSZXNvdXJjZXMiLCJwbHVnaW5FdmVudHMiLCJlbWl0IiwiYmFzZVVybCIsImZ1bGxVcmwiLCJnZXRGdWxsVXJsIiwicmVzb3VyY2VDYWNoZSIsInJlcU9wdGlvbnMiLCJzbmF0Y2giLCJ2YWxpZGF0b3IiLCJjb250ZW50cyIsImZldGNoIiwidmFsaWRhdGVJbWFnZSIsImlnbm9yZURlcHNFcnJvcnMiLCJ0cnVlSm9pbiIsImZvcm1hdEh0dHBFcnJvciIsImJ1ZiIsImJsb2JVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwib25Eb25lIiwicmV2b2tlT2JqZWN0VVJMIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJfdmFjdXVtaW5nIiwibnVtRml4ZXMiLCJyZXNvbHZlU2VsZiIsInIiLCJ0b0ZldGNoIiwia2V5c1RvUmVtb3ZlIiwidmFsdWVLZXlzIiwiY2FjaGVLZXlzIiwicmVxdWlyZUtleXMiLCJjb2RlS2V5cyIsIm1hcHBpbmdzIiwiZm9yRWFjaEtleSIsInN1YnN0b3JlIiwidG91Y2giLCJzY3JpcHRJZCIsImZvckVhY2hWYWx1ZSIsImdldFNjcmlwdE5hbWUiLCJmaXhlcyIsIm9uIiwib2ZmIiwiZmlyZSIsImZ1bmMiLCJwb3N0SW5pdGlhbGl6ZSIsIm9uQ29tbWFuZCIsIk9wZW5FZGl0b3IiLCJyb3V0ZSIsIlRhYk9wZW4iLCJDQUNIRV9EVVJBVElPTiIsIkdldEltYWdlRGF0YSIsImxvYWRJbWFnZURhdGEiLCJiYXNlNjQiLCJTZXRCYWRnZSIsInNldEJhZGdlIiwiYnJvd3NlckFjdGlvbiIsImlnbm9yZUVycm9ycyIsImxhc3RFcnJvciIsIm1ha2VNZXRob2QiLCJmbiIsImJhZGdlcyIsIktFWV9JU19BUFBMSUVEIiwiS0VZX1NIT1dfQkFER0UiLCJLRVlfQkFER0VfQ09MT1IiLCJLRVlfQkFER0VfQ09MT1JfQkxPQ0tFRCIsImlzQXBwbGllZCIsInNob3dCYWRnZSIsImJhZGdlQ29sb3IiLCJiYWRnZUNvbG9yQmxvY2tlZCIsInRpdGxlQmxhY2tsaXN0ZWQiLCJ0aXRsZU5vbmluamVjdGFibGUiLCJpY29uQ2FjaGUiLCJqb2JzIiwic2V0SWNvbiIsInVwZGF0ZUJhZGdlIiwidXBkYXRlQmFkZ2VDb2xvciIsInVwZGF0ZVN0YXRlIiwiZm9yRWFjaFRhYiIsIm9uUmVtb3ZlZCIsIm9uVXBkYXRlZCIsImZhdkljb25VcmwiLCJ1bmlxdWUiLCJzZXRCYWRnZVRleHQiLCJzZXRCYWRnZUJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYmxvY2tlZCIsImluamVjdGFibGUiLCJJTkpFQ1RBQkxFX1RBQl9VUkxfUkUiLCJibGFja2xpc3RlZCIsInNldFRpdGxlIiwiaWNvbkRhdGEiLCJuIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwidG9EYXRhVVJMIiwiZ2V0SW1hZ2VEYXRhIiwiZXh0ZW5zaW9uUm9vdCIsImdldFVSTCIsIm1haW4iLCJydW4iLCJub3RpZmljYXRpb25zIiwiaWNvblVybCIsImRlZmF1bHRJbWFnZSIsImlzQ2xpY2thYmxlIiwiYnJvYWRjYXN0Iiwic2VuZE1lc3NhZ2UiLCJzZW5kTWVzc2FnZU9ySWdub3JlIiwicXVlcnkiLCJvcGVuZXJzIiwiTm90aWZpY2F0aW9uIiwiYmdFeHRyYXMiLCJub3RpZmljYXRpb25JZCIsIm9uQ2xpY2siLCJSZW1vdmVOb3RpZmljYXRpb24iLCJvbkNsaWNrZWQiLCJvcGVuZXJJZCIsInNlbmRUYWJDbWQiLCJvbkNsb3NlZCIsIkdldEFsbE9wdGlvbnMiLCJHZXRPcHRpb25zIiwiZGVmYXVsdHMiLCJtYXBFbnRyeSIsIlNldE9wdGlvbnMiLCJob29rcyIsImluaXRIb29rcyIsImNhbGxIb29rc0xhdGVyIiwiY2FsbEhvb2tzIiwiaW5pdFBlbmRpbmciLCJmaXJlQ2hhbmdlIiwibWFpbktleSIsImdldERlZmF1bHRPcHRpb24iLCJvcHRpb25LZXkiLCJvcHRpb25WYWx1ZSIsImhvb2siLCJpbmRleGVkREIiLCJvcGVuIiwib25zdWNjZXNzIiwidHJhbnNmb3JtIiwib251cGdyYWRlbmVlZGVkIiwiZGIiLCJ0eCIsInRyYW5zYWN0aW9uIiwicHJvY2Vzc2luZyIsImRvbmUiLCJnZXRBbGwiLCJzdG9yZU5hbWUiLCJvYmplY3RTdG9yZSIsInRyYW5zZm9ybVNjcmlwdCIsImFsbFZhbHVlcyIsImFsbENhY2hlIiwiYWxsUmVxdWlyZSIsIm9yaWdJbmNsdWRlIiwib3JpZ0V4Y2x1ZGUiLCJvcmlnTWF0Y2giLCJvcmlnRXhjbHVkZU1hdGNoIiwib25Db25uZWN0Iiwib25Qb3B1cE9wZW5lZCIsInByZWZldGNoU2V0UG9wdXAiLCJicm93c2VyX2FjdGlvbiIsImRlZmF1bHRfcG9wdXAiLCJwb3J0Iiwib25EaXNjb25uZWN0Iiwib25Qb3B1cENsb3NlZCIsIlNldFBvcHVwIiwiQVBJX0NPTkZJRyIsIlRJTUVfQUZURVJfU0VORCIsIlRJTUVfQUZURVJfUkVDRUlWRSIsIlRJTUVfS0VFUF9EQVRBIiwiY2FjaGVDb2RlIiwib25EaXNwb3NlIiwicmNzIiwicmNzUHJvbWlzZSIsInVucmVnaXN0ZXIiLCJJTkpFQ1RfSU5UTyIsIktFWV9FWFBPU0UiLCJLRVlfREVGX0lOSkVDVF9JTlRPIiwiS0VZX1hIUl9JTkpFQ1QiLCJleHBvc2UiLCJpbmplY3RJbnRvIiwieGhySW5qZWN0Iiwib25PcHRpb25DaGFuZ2VkIiwiZmVlZElkIiwicHJvY2Vzc0ZlZWRiYWNrIiwiZGVsIiwiY2FjaGVLZXkiLCJlbnZLZXkiLCJwcmVwYXJlU2NyaXB0IiwibmVlZHNJbmplY3Rpb24iLCJleGVjdXRlU2NyaXB0IiwicHJvcHNUb0NsZWFyIiwib25DaGFuZ2VkIiwiZGJLZXlzIiwiY2FjaGVWYWx1ZXMiLCJnZXRWYWx1ZXMiLCJkaXJ0eSIsImRlc3Ryb3kiLCJub3JtYWxpemVSZWFsbSIsImhhc093blByb3BlcnR5IiwiSU5KRUNUX01BUFBJTkciLCJ0b2dnbGVYaHJJbmplY3QiLCJ0b2dnbGVQcmVpbmplY3QiLCJzaXRlIiwiaXNFeHBvc2VkIiwiZW5hYmxlIiwib25PZmYiLCJvblNlbmRIZWFkZXJzIiwib25IZWFkZXJzUmVjZWl2ZWQiLCJPbkhlYWRlcnNSZWNlaXZlZE9wdGlvbnMiLCJFWFRSQV9IRUFERVJTIiwiaGFzIiwicHJlcGFyZVhockJsb2IiLCJyZXNwb25zZUhlYWRlcnMiLCJkZXRlY3RTdHJpY3RDc3AiLCJmb3JjZUNvbnRlbnRJbmplY3Rpb24iLCJwcmVwYXJlU2NyaXB0cyIsImlzTGF0ZSIsImhhc01vcmUiLCJldmVyeSIsInNjciIsImlzQ29udGVudFJlYWxtIiwidWEiLCJyZWdpc3RlclNjcmlwdERhdGFGRiIsImRhdGFLZXkiLCJyZXBsYWNlV2l0aEZ1bGxXaWR0aEZvcm0iLCJpc0NvbnRlbnQiLCJyZXFzIiwicmVxc1NsaWNlcyIsImNvbmNhdCIsImhhc1JlcXMiLCJpbmplY3RlZENvZGUiLCJtZXRhU3RyIiwiTUVUQUJMT0NLX1JFIiwicyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInJlc29sdmVEYXRhQ29kZVN0ciIsInZtUmVzb2x2ZSIsInZtRGF0YSIsImFsbEZyYW1lcyIsImNvbnRlbnRTY3JpcHRzIiwibWF0Y2hlcyIsInJlYWxtIiwiSU5KRUNUX0NPTlRFTlQiLCJWTV9WRVJJRlkiLCJDT05GSVJNX1VSTF9CQVNFIiwicmVxdWVzdHMiLCJkb3dubG9hZHMiLCJ2ZXJpZnkiLCJ0YWJSZXF1ZXN0cyIsImVuY29kZXIiLCJldnQiLCJjdXJyZW50IiwiZG93bmxvYWRJZCIsIkNvbmZpcm1JbnN0YWxsIiwiY29uZmlybUluc3RhbGwiLCJDaGVja0luc3RhbGxlclRhYiIsIkh0dHBSZXF1ZXN0IiwiZXZlbnRzVG9Ob3RpZnkiLCJuYXRpdmUiLCJkb3dubG9hZCIsImZpbGVuYW1lIiwiZmlsZU5hbWUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImh0dHBSZXF1ZXN0IiwiQWJvcnRSZXF1ZXN0IiwiYWJvcnQiLCJjbGVhclJlcXVlc3QiLCJSZXZva2VCbG9iIiwic3BlY2lhbEhlYWRlcnMiLCJIZWFkZXJJbmplY3RvciIsImFwaUZpbHRlciIsIk9uQmVmb3JlU2VuZEhlYWRlcnNPcHRpb25zIiwiaGVhZGVyc1RvSW5qZWN0IiwiaXNWbVZlcmlmeSIsImlzTm90Q29va2llIiwiaXNTZW5kYWJsZSIsImlzU2VuZGFibGVBbm9uIiwiUkVfU0VUX0NPT0tJRSIsIlJFX1NFVF9DT09LSUVfVkFMVUUiLCJSRV9TRVRfQ09PS0lFX0FUVFIiLCJTQU1FX1NJVEVfTUFQIiwic3RyaWN0IiwibGF4Iiwibm9uZSIsInNldENvb2tpZUluU3RvcmUiLCJoZWFkZXJWYWx1ZSIsImV4ZWMiLCJvcHRTdHIiLCJvcHQiLCJpc0hvc3QiLCJsYXN0SW5kZXgiLCJ0b0xvd2VyQ2FzZSIsInNhbWVTaXRlIiwiY29va2llcyIsImV4cGlyYXRpb25EYXRlIiwiZXhwaXJlcyIsImh0dHBPbmx5Iiwic2VjdXJlIiwic3RvcmVJZCIsImFwaUV2ZW50cyIsIm9uQmVmb3JlU2VuZEhlYWRlcnMiLCJsaXN0ZW5lciIsInJlcXVlc3RIZWFkZXJzIiwicmVxdWVzdElkIiwicmVxSWQiLCJjb3JlSWQiLCJub05hdGl2ZUNvb2tpZSIsImgiLCJlbmNvZGVXZWJSZXF1ZXN0SGVhZGVyIiwiYWRkIiwiaXNFbXB0eSIsIkNIVU5LX1NJWkUiLCJibG9iMmNodW5rIiwicmVzcG9uc2UiLCJibG9iMmJhc2U2NCIsImJsb2Iyb2JqZWN0VXJsIiwieGhyQ2FsbGJhY2tXcmFwcGVyIiwibGFzdFByb21pc2UiLCJjb250ZW50VHlwZSIsImRhdGFTaXplIiwibnVtQ2h1bmtzIiwicmVzcG9uc2VUZXh0Iiwic2VudCIsImJsb2JiZWQiLCJjaHVua2VkIiwiZ2V0Q2h1bmsiLCJnZXRSZXNwb25zZUhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJnZXRSZXNwb25zZUhlYWRlciIsImNlaWwiLCJzaG91bGROb3RpZnkiLCJzaG91bGRTZW5kUmVzcG9uc2UiLCJyZWFkeVN0YXRlIiwiY2IiLCJmaW5hbFVybCIsInJlc3BvbnNlVVJMIiwiY2h1bmsiLCJwb3MiLCJsYXN0IiwiaXNTcGVjaWFsSGVhZGVyIiwibG93ZXJIZWFkZXIiLCJpbmNvZ25pdG8iLCJvdmVycmlkZU1pbWVUeXBlIiwieGhyVHlwZSIsInZtSGVhZGVycyIsImRlY29kZUJvZHkiLCJzaG91bGRTZW5kQ29va2llcyIsInNldFJlcXVlc3RIZWFkZXIiLCJsb3dlck5hbWUiLCJ0aW1lb3V0IiwiZ2V0QWxsQ29va2llU3RvcmVzIiwidGFiSWRzIiwiZmlyZWZveCIsImZpcnN0UGFydHlEb21haW4iLCJjIiwic2Vzc2lvbiIsIm9ubG9hZGVuZCIsInNlbmQiLCJ3YXNCbG9iIiwic3RyaW5nMnVpbnQ4YXJyYXkiLCJhdG9iIiwicDEiLCJpc1VzZXJTY3JpcHQiLCJjb25maXJtS2V5IiwiYWN0aXZlIiwiY2FuUmVwbGFjZUN1clRhYiIsImZmIiwiY29uZmlybVVybCIsIndpbmRvd0lkIiwid2luZG93cyIsImZvY3VzZWQiLCJ3aGl0ZWxpc3RSZSIsIlJlZ0V4cCIsImJsYWNrbGlzdFJlIiwicmVzb2x2ZVZpcnR1YWxVcmwiLCJ2aXJ0dWFsVXJsUmUiLCJtYXliZVJlZGlyZWN0VmlydHVhbFVybEZGIiwiYXBpRXZlbnQiLCJiaW5kIiwib25DcmVhdGVkIiwicmVkaXJlY3RVcmwiLCJtYXliZUluc3RhbGxVc2VySnMiLCJiaW5hcnlWYWx1ZSIsInN0cmluZzJieXRlU3RyaW5nIiwiYnVmZmVyMnN0cmluZyIsInN0ciIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiQ2FjaGVOZXdTY3JpcHQiLCJOZXdTY3JpcHQiLCJhcnJheVR5cGUiLCJkZWZhdWx0IiwiZGVmYXVsdFR5cGUiLCJtZXRhVHlwZXMiLCJpbmNsdWRlIiwiZXhjbHVkZSIsImV4Y2x1ZGVNYXRjaCIsInJlc291cmNlIiwicGFpciIsIm1ldGFPcHRpb25hbFR5cGVzIiwiYW50aWZlYXR1cmUiLCJjb21wYXRpYmxlIiwiY29ubmVjdCIsIm1ldGFCb2R5IiwiX21hdGNoIiwicmF3S2V5IiwicmF3VmFsdWUiLCJrZXlOYW1lIiwibG9jYWxlIiwiY2FtZWxLZXkiLCJnIiwidG9VcHBlckNhc2UiLCJtZXRhVHlwZSIsIm9sZFZhbHVlIiwiaG9tZXBhZ2UiLCJkYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJuYW1lc3BhY2UiLCJuYW1lVVJJIiwiZW5jb2RlRmlsZW5hbWUiLCJwaWVjZSIsImRpY3QiLCJrZXlWYWwiLCJjYWNoZU9yRmV0Y2giLCJjaGVjayIsIm1ha2VSYXciLCJoYW5kbGVycyIsImNhY2hlT3JGZXRjaEhhbmRsZXIiLCJkb0ZldGNoIiwiaXNNb2RpZmllZCIsInBhdGhJZCIsInZpZXciLCJleHRlbnNpb24iLCJnZXRWaWV3cyIsImxvY2F0aW9uIiwibWF5YmVJbldpbmRvdyIsImNvbnRhaW5lciIsImluc2VydCIsInBpbm5lZCIsInNyY1RhYiIsInNyY1VybCIsImlzSW50ZXJuYWwiLCJjb29raWVTdG9yZUlkIiwiZ2V0Q29udGFpbmVySWQiLCJjYW5PcGVuSW5jb2duaXRvIiwibmV3VGFiIiwid25kT3B0cyIsImhhc1BvcyIsInduZCIsIm9wZW5lclRhYklkU3VwcG9ydGVkIiwib3BlbmVyVGFiSWQiLCJUYWJDbG9zZSIsIlRhYkZvY3VzIiwicmVhZHkiLCJkZWZpbmVQcm9wZXJ0aWVzIiwib3MiLCJTQ1JJUFRfVEVNUExBVEVfRURJVEVEIiwiSU5JVElBTF9URU1QTEFURSIsImVkaXRlZCIsInRlbXBsYXRlIiwiZGVmYXVsdFRlbXBsYXRlIiwiVGVzdEJsYWNrbGlzdCIsInJlc2V0QmxhY2tsaXN0IiwiUkVfTUFUQ0hfUEFSVFMiLCJibGFja2xpc3RSdWxlcyIsImJsYWNrbGlzdCIsIlJFX0hUVFBfT1JfSFRUUFMiLCJNQVhfQkxfQ0FDSEVfTEVOR1RIIiwiYmxDYWNoZSIsImJsQ2FjaGVTaXplIiwidGVzdFJ1bGVzIiwicnVsZXMiLCJydWxlQnVpbGRlciIsIm1hdGNoZXIiLCJ0ZXN0R2xvYiIsImF1dG9SZWciLCJ0ZXN0TWF0Y2giLCJtYXRjaFRlc3RlciIsImJhdGNoIiwibWF0IiwibWVyZ2VMaXN0cyIsImluYyIsImV4YyIsImV4Y01hdCIsIm9rIiwic3RyMlJFIiwicmUiLCJiaW5kUkUiLCJyZVN0ciIsInJlVGxkU3RyIiwidHN0ciIsInN1ZmZpeCIsIm1hdGNoU2NoZW1lIiwiUkVfU1RSX0FOWSIsIlJFX1NUUl9UTEQiLCJob3N0TWF0Y2hlciIsInJ1bGVMQyIsInRsZFN0ciIsInRsZFN1ZmZpeCIsInBhdGhNYXRjaGVyIiwiaUhhc2giLCJpUXVlcnkiLCJzdHJSZSIsInJ1bGVQYXJ0cyIsIm1hdGNoSG9zdCIsIm1hdGNoUGF0aCIsInBhcnRzIiwidXBkYXRlQmxhY2tsaXN0Q2FjaGUiLCJDaGVja1VwZGF0ZSIsInJlc3VsdHMiLCJjaGVja0FsbEFuZE5vdGlmeSIsIkNoZWNrVXBkYXRlQWxsIiwidG9VcGRhdGUiLCJub3RlcyIsImNoZWNrVXBkYXRlIiwib3Blbk9wdGlvbnNQYWdlIiwicHJvY2Vzc2VzIiwiZG9DaGVja1VwZGF0ZSIsIm1zZ09rIiwibXNnRXJyIiwicmVzb3VyY2VPcHRzIiwiZG93bmxvYWRVcGRhdGUiLCJjaGVja2luZyIsImNhbk5vdGlmeSIsImRvd25sb2FkVVJMIiwidXBkYXRlVVJMIiwiZGV2IiwiZXJyb3JNZXNzYWdlIiwiYW5ub3VuY2UiLCJhbGxvd2VkIiwibm90aWZ5VXBkYXRlcyIsInVwZGF0ZVNjaGVkdWxlZCIsIkdldFZhbHVlU3RvcmUiLCJzdG9yZXMiLCJTZXRWYWx1ZVN0b3JlcyIsImJyb2FkY2FzdFZhbHVlU3RvcmVzIiwiZ3JvdXBTdG9yZXNCeUZyYW1lIiwiVXBkYXRlVmFsdWUiLCJ1cGRhdGVMYXRlciIsIm9uUmVwbGFjZWQiLCJhZGRlZElkIiwicmVtb3ZlZElkIiwib3BlbmVyVGFicyIsInNjcmlwdElkcyIsImN1cnJlbnRDYWNoZSIsImRvVXBkYXRlIiwidmFsdWVTdG9yZXMiLCJncm91cENhY2hlQnlGcmFtZSIsInBhcnRpYWwiLCJ0YWJGcmFtZURhdGEiLCJ0YXNrcyIsImZyYW1lcyIsImZyYW1lRGF0YSIsImNhY2hlRGF0YSIsInRvU2VuZCIsInNjcmlwdERhdGEiLCJkYXRhRW50cmllcyIsImhpc3RvcnkiLCJjaGVja1R5cGUiLCJoYW5kbGUiLCJkZWZhdWx0UHJldmVudGVkIiwiaW5pdFRMRCIsImV4cG9ydE1ldGhvZCIsInRsZGpzIiwiaXNSZWFkeSIsImdldERvbWFpbiIsImdldFN1YmRvbWFpbiIsImdldFB1YmxpY1N1ZmZpeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FB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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsTUFBTTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM3RCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7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Q0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsT0FBVCxHQUFtQixDQUFFOztBQUU1QixTQUFTQyxZQUFULENBQXNCOTlCLEdBQXRCLEVBQTJCO0FBQ3pCLFNBQU8sQ0FBQyxHQUFHOUQsSUFBSixLQUFhNmhDLDRDQUFLLElBQUlBLDRDQUFLLENBQUMvOUIsR0FBRCxDQUFMLENBQVcsR0FBRzlELElBQWQsQ0FBN0I7QUFDRDs7QUFFTSxTQUFTOGhDLE9BQVQsR0FBbUI7QUFDeEIsU0FBTyxDQUFDLENBQUNELDRDQUFUO0FBQ0Q7QUFFTSxNQUFNRSxTQUFTLEdBQUdILFlBQVksQ0FBQyxXQUFELENBQTlCO0FBQ0EsTUFBTUksWUFBWSxHQUFHSixZQUFZLENBQUMsY0FBRCxDQUFqQztBQUNBLE1BQU1LLGVBQWUsR0FBR0wsWUFBWSxDQUFDLGlCQUFELENBQXBDLEMiLCJmaWxlIjoiYmFja2dyb3VuZC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJiYWNrZ3JvdW5kL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvYmFja2dyb3VuZC9pbmRleC5qc1wiLFwicHVibGljL2xpYi90bGRqc1wiLFwiY29tbW9uXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyohIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZSB2MS40LjEgYnkgQG1hdGhpYXMgKi9cbjsoZnVuY3Rpb24ocm9vdCkge1xuXG5cdC8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZXMgKi9cblx0dmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJlxuXHRcdCFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cdHZhciBmcmVlTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiZcblx0XHQhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblx0dmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcblx0aWYgKFxuXHRcdGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8XG5cdFx0ZnJlZUdsb2JhbC53aW5kb3cgPT09IGZyZWVHbG9iYWwgfHxcblx0XHRmcmVlR2xvYmFsLnNlbGYgPT09IGZyZWVHbG9iYWxcblx0KSB7XG5cdFx0cm9vdCA9IGZyZWVHbG9iYWw7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGBwdW55Y29kZWAgb2JqZWN0LlxuXHQgKiBAbmFtZSBwdW55Y29kZVxuXHQgKiBAdHlwZSBPYmplY3Rcblx0ICovXG5cdHZhciBwdW55Y29kZSxcblxuXHQvKiogSGlnaGVzdCBwb3NpdGl2ZSBzaWduZWQgMzItYml0IGZsb2F0IHZhbHVlICovXG5cdG1heEludCA9IDIxNDc0ODM2NDcsIC8vIGFrYS4gMHg3RkZGRkZGRiBvciAyXjMxLTFcblxuXHQvKiogQm9vdHN0cmluZyBwYXJhbWV0ZXJzICovXG5cdGJhc2UgPSAzNixcblx0dE1pbiA9IDEsXG5cdHRNYXggPSAyNixcblx0c2tldyA9IDM4LFxuXHRkYW1wID0gNzAwLFxuXHRpbml0aWFsQmlhcyA9IDcyLFxuXHRpbml0aWFsTiA9IDEyOCwgLy8gMHg4MFxuXHRkZWxpbWl0ZXIgPSAnLScsIC8vICdcXHgyRCdcblxuXHQvKiogUmVndWxhciBleHByZXNzaW9ucyAqL1xuXHRyZWdleFB1bnljb2RlID0gL154bi0tLyxcblx0cmVnZXhOb25BU0NJSSA9IC9bXlxceDIwLVxceDdFXS8sIC8vIHVucHJpbnRhYmxlIEFTQ0lJIGNoYXJzICsgbm9uLUFTQ0lJIGNoYXJzXG5cdHJlZ2V4U2VwYXJhdG9ycyA9IC9bXFx4MkVcXHUzMDAyXFx1RkYwRVxcdUZGNjFdL2csIC8vIFJGQyAzNDkwIHNlcGFyYXRvcnNcblxuXHQvKiogRXJyb3IgbWVzc2FnZXMgKi9cblx0ZXJyb3JzID0ge1xuXHRcdCdvdmVyZmxvdyc6ICdPdmVyZmxvdzogaW5wdXQgbmVlZHMgd2lkZXIgaW50ZWdlcnMgdG8gcHJvY2VzcycsXG5cdFx0J25vdC1iYXNpYyc6ICdJbGxlZ2FsIGlucHV0ID49IDB4ODAgKG5vdCBhIGJhc2ljIGNvZGUgcG9pbnQpJyxcblx0XHQnaW52YWxpZC1pbnB1dCc6ICdJbnZhbGlkIGlucHV0J1xuXHR9LFxuXG5cdC8qKiBDb252ZW5pZW5jZSBzaG9ydGN1dHMgKi9cblx0YmFzZU1pbnVzVE1pbiA9IGJhc2UgLSB0TWluLFxuXHRmbG9vciA9IE1hdGguZmxvb3IsXG5cdHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUsXG5cblx0LyoqIFRlbXBvcmFyeSB2YXJpYWJsZSAqL1xuXHRrZXk7XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBlcnJvciB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgZXJyb3IgdHlwZS5cblx0ICogQHJldHVybnMge0Vycm9yfSBUaHJvd3MgYSBgUmFuZ2VFcnJvcmAgd2l0aCB0aGUgYXBwbGljYWJsZSBlcnJvciBtZXNzYWdlLlxuXHQgKi9cblx0ZnVuY3Rpb24gZXJyb3IodHlwZSkge1xuXHRcdHRocm93IG5ldyBSYW5nZUVycm9yKGVycm9yc1t0eXBlXSk7XG5cdH1cblxuXHQvKipcblx0ICogQSBnZW5lcmljIGBBcnJheSNtYXBgIHV0aWxpdHkgZnVuY3Rpb24uXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeSBhcnJheVxuXHQgKiBpdGVtLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IGFycmF5IG9mIHZhbHVlcyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBtYXAoYXJyYXksIGZuKSB7XG5cdFx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0d2hpbGUgKGxlbmd0aC0tKSB7XG5cdFx0XHRyZXN1bHRbbGVuZ3RoXSA9IGZuKGFycmF5W2xlbmd0aF0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgc2ltcGxlIGBBcnJheSNtYXBgLWxpa2Ugd3JhcHBlciB0byB3b3JrIHdpdGggZG9tYWluIG5hbWUgc3RyaW5ncyBvciBlbWFpbFxuXHQgKiBhZGRyZXNzZXMuXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkb21haW4gVGhlIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeVxuXHQgKiBjaGFyYWN0ZXIuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBuZXcgc3RyaW5nIG9mIGNoYXJhY3RlcnMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrXG5cdCAqIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwRG9tYWluKHN0cmluZywgZm4pIHtcblx0XHR2YXIgcGFydHMgPSBzdHJpbmcuc3BsaXQoJ0AnKTtcblx0XHR2YXIgcmVzdWx0ID0gJyc7XG5cdFx0aWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdC8vIEluIGVtYWlsIGFkZHJlc3Nlcywgb25seSB0aGUgZG9tYWluIG5hbWUgc2hvdWxkIGJlIHB1bnljb2RlZC4gTGVhdmVcblx0XHRcdC8vIHRoZSBsb2NhbCBwYXJ0IChpLmUuIGV2ZXJ5dGhpbmcgdXAgdG8gYEBgKSBpbnRhY3QuXG5cdFx0XHRyZXN1bHQgPSBwYXJ0c1swXSArICdAJztcblx0XHRcdHN0cmluZyA9IHBhcnRzWzFdO1xuXHRcdH1cblx0XHQvLyBBdm9pZCBgc3BsaXQocmVnZXgpYCBmb3IgSUU4IGNvbXBhdGliaWxpdHkuIFNlZSAjMTcuXG5cdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocmVnZXhTZXBhcmF0b3JzLCAnXFx4MkUnKTtcblx0XHR2YXIgbGFiZWxzID0gc3RyaW5nLnNwbGl0KCcuJyk7XG5cdFx0dmFyIGVuY29kZWQgPSBtYXAobGFiZWxzLCBmbikuam9pbignLicpO1xuXHRcdHJldHVybiByZXN1bHQgKyBlbmNvZGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgbnVtZXJpYyBjb2RlIHBvaW50cyBvZiBlYWNoIFVuaWNvZGVcblx0ICogY2hhcmFjdGVyIGluIHRoZSBzdHJpbmcuIFdoaWxlIEphdmFTY3JpcHQgdXNlcyBVQ1MtMiBpbnRlcm5hbGx5LFxuXHQgKiB0aGlzIGZ1bmN0aW9uIHdpbGwgY29udmVydCBhIHBhaXIgb2Ygc3Vycm9nYXRlIGhhbHZlcyAoZWFjaCBvZiB3aGljaFxuXHQgKiBVQ1MtMiBleHBvc2VzIGFzIHNlcGFyYXRlIGNoYXJhY3RlcnMpIGludG8gYSBzaW5nbGUgY29kZSBwb2ludCxcblx0ICogbWF0Y2hpbmcgVVRGLTE2LlxuXHQgKiBAc2VlIGBwdW55Y29kZS51Y3MyLmVuY29kZWBcblx0ICogQHNlZSA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmc+XG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGRlY29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBVbmljb2RlIGlucHV0IHN0cmluZyAoVUNTLTIpLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBuZXcgYXJyYXkgb2YgY29kZSBwb2ludHMuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgY291bnRlciA9IDAsXG5cdFx0ICAgIGxlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG5cdFx0ICAgIHZhbHVlLFxuXHRcdCAgICBleHRyYTtcblx0XHR3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0dmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0aWYgKHZhbHVlID49IDB4RDgwMCAmJiB2YWx1ZSA8PSAweERCRkYgJiYgY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0XHQvLyBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXJcblx0XHRcdFx0ZXh0cmEgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0XHRpZiAoKGV4dHJhICYgMHhGQzAwKSA9PSAweERDMDApIHsgLy8gbG93IHN1cnJvZ2F0ZVxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKCgodmFsdWUgJiAweDNGRikgPDwgMTApICsgKGV4dHJhICYgMHgzRkYpICsgMHgxMDAwMCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gdW5tYXRjaGVkIHN1cnJvZ2F0ZTsgb25seSBhcHBlbmQgdGhpcyBjb2RlIHVuaXQsIGluIGNhc2UgdGhlIG5leHRcblx0XHRcdFx0XHQvLyBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXJcblx0XHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0Y291bnRlci0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHN0cmluZyBiYXNlZCBvbiBhbiBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAc2VlIGBwdW55Y29kZS51Y3MyLmRlY29kZWBcblx0ICogQG1lbWJlck9mIHB1bnljb2RlLnVjczJcblx0ICogQG5hbWUgZW5jb2RlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGNvZGVQb2ludHMgVGhlIGFycmF5IG9mIG51bWVyaWMgY29kZSBwb2ludHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBuZXcgVW5pY29kZSBzdHJpbmcgKFVDUy0yKS5cblx0ICovXG5cdGZ1bmN0aW9uIHVjczJlbmNvZGUoYXJyYXkpIHtcblx0XHRyZXR1cm4gbWFwKGFycmF5LCBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdFx0aWYgKHZhbHVlID4gMHhGRkZGKSB7XG5cdFx0XHRcdHZhbHVlIC09IDB4MTAwMDA7XG5cdFx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuXHRcdFx0XHR2YWx1ZSA9IDB4REMwMCB8IHZhbHVlICYgMHgzRkY7XG5cdFx0XHR9XG5cdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlKTtcblx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBiYXNpYyBjb2RlIHBvaW50IGludG8gYSBkaWdpdC9pbnRlZ2VyLlxuXHQgKiBAc2VlIGBkaWdpdFRvQmFzaWMoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGNvZGVQb2ludCBUaGUgYmFzaWMgbnVtZXJpYyBjb2RlIHBvaW50IHZhbHVlLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQgKGZvciB1c2UgaW5cblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpbiB0aGUgcmFuZ2UgYDBgIHRvIGBiYXNlIC0gMWAsIG9yIGBiYXNlYCBpZlxuXHQgKiB0aGUgY29kZSBwb2ludCBkb2VzIG5vdCByZXByZXNlbnQgYSB2YWx1ZS5cblx0ICovXG5cdGZ1bmN0aW9uIGJhc2ljVG9EaWdpdChjb2RlUG9pbnQpIHtcblx0XHRpZiAoY29kZVBvaW50IC0gNDggPCAxMCkge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDIyO1xuXHRcdH1cblx0XHRpZiAoY29kZVBvaW50IC0gNjUgPCAyNikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDY1O1xuXHRcdH1cblx0XHRpZiAoY29kZVBvaW50IC0gOTcgPCAyNikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDk3O1xuXHRcdH1cblx0XHRyZXR1cm4gYmFzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIGRpZ2l0L2ludGVnZXIgaW50byBhIGJhc2ljIGNvZGUgcG9pbnQuXG5cdCAqIEBzZWUgYGJhc2ljVG9EaWdpdCgpYFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gZGlnaXQgVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYmFzaWMgY29kZSBwb2ludCB3aG9zZSB2YWx1ZSAod2hlbiB1c2VkIGZvclxuXHQgKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGlzIGBkaWdpdGAsIHdoaWNoIG5lZWRzIHRvIGJlIGluIHRoZSByYW5nZVxuXHQgKiBgMGAgdG8gYGJhc2UgLSAxYC4gSWYgYGZsYWdgIGlzIG5vbi16ZXJvLCB0aGUgdXBwZXJjYXNlIGZvcm0gaXNcblx0ICogdXNlZDsgZWxzZSwgdGhlIGxvd2VyY2FzZSBmb3JtIGlzIHVzZWQuIFRoZSBiZWhhdmlvciBpcyB1bmRlZmluZWRcblx0ICogaWYgYGZsYWdgIGlzIG5vbi16ZXJvIGFuZCBgZGlnaXRgIGhhcyBubyB1cHBlcmNhc2UgZm9ybS5cblx0ICovXG5cdGZ1bmN0aW9uIGRpZ2l0VG9CYXNpYyhkaWdpdCwgZmxhZykge1xuXHRcdC8vICAwLi4yNSBtYXAgdG8gQVNDSUkgYS4ueiBvciBBLi5aXG5cdFx0Ly8gMjYuLjM1IG1hcCB0byBBU0NJSSAwLi45XG5cdFx0cmV0dXJuIGRpZ2l0ICsgMjIgKyA3NSAqIChkaWdpdCA8IDI2KSAtICgoZmxhZyAhPSAwKSA8PCA1KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCaWFzIGFkYXB0YXRpb24gZnVuY3Rpb24gYXMgcGVyIHNlY3Rpb24gMy40IG9mIFJGQyAzNDkyLlxuXHQgKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzQ5MiNzZWN0aW9uLTMuNFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gYWRhcHQoZGVsdGEsIG51bVBvaW50cywgZmlyc3RUaW1lKSB7XG5cdFx0dmFyIGsgPSAwO1xuXHRcdGRlbHRhID0gZmlyc3RUaW1lID8gZmxvb3IoZGVsdGEgLyBkYW1wKSA6IGRlbHRhID4+IDE7XG5cdFx0ZGVsdGEgKz0gZmxvb3IoZGVsdGEgLyBudW1Qb2ludHMpO1xuXHRcdGZvciAoLyogbm8gaW5pdGlhbGl6YXRpb24gKi87IGRlbHRhID4gYmFzZU1pbnVzVE1pbiAqIHRNYXggPj4gMTsgayArPSBiYXNlKSB7XG5cdFx0XHRkZWx0YSA9IGZsb29yKGRlbHRhIC8gYmFzZU1pbnVzVE1pbik7XG5cdFx0fVxuXHRcdHJldHVybiBmbG9vcihrICsgKGJhc2VNaW51c1RNaW4gKyAxKSAqIGRlbHRhIC8gKGRlbHRhICsgc2tldykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scyB0byBhIHN0cmluZyBvZiBVbmljb2RlXG5cdCAqIHN5bWJvbHMuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICovXG5cdGZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHRcdC8vIERvbid0IHVzZSBVQ1MtMlxuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGgsXG5cdFx0ICAgIG91dCxcblx0XHQgICAgaSA9IDAsXG5cdFx0ICAgIG4gPSBpbml0aWFsTixcblx0XHQgICAgYmlhcyA9IGluaXRpYWxCaWFzLFxuXHRcdCAgICBiYXNpYyxcblx0XHQgICAgaixcblx0XHQgICAgaW5kZXgsXG5cdFx0ICAgIG9sZGksXG5cdFx0ICAgIHcsXG5cdFx0ICAgIGssXG5cdFx0ICAgIGRpZ2l0LFxuXHRcdCAgICB0LFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgYmFzZU1pbnVzVDtcblxuXHRcdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHM6IGxldCBgYmFzaWNgIGJlIHRoZSBudW1iZXIgb2YgaW5wdXQgY29kZVxuXHRcdC8vIHBvaW50cyBiZWZvcmUgdGhlIGxhc3QgZGVsaW1pdGVyLCBvciBgMGAgaWYgdGhlcmUgaXMgbm9uZSwgdGhlbiBjb3B5XG5cdFx0Ly8gdGhlIGZpcnN0IGJhc2ljIGNvZGUgcG9pbnRzIHRvIHRoZSBvdXRwdXQuXG5cblx0XHRiYXNpYyA9IGlucHV0Lmxhc3RJbmRleE9mKGRlbGltaXRlcik7XG5cdFx0aWYgKGJhc2ljIDwgMCkge1xuXHRcdFx0YmFzaWMgPSAwO1xuXHRcdH1cblxuXHRcdGZvciAoaiA9IDA7IGogPCBiYXNpYzsgKytqKSB7XG5cdFx0XHQvLyBpZiBpdCdzIG5vdCBhIGJhc2ljIGNvZGUgcG9pbnRcblx0XHRcdGlmIChpbnB1dC5jaGFyQ29kZUF0KGopID49IDB4ODApIHtcblx0XHRcdFx0ZXJyb3IoJ25vdC1iYXNpYycpO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0LnB1c2goaW5wdXQuY2hhckNvZGVBdChqKSk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFpbiBkZWNvZGluZyBsb29wOiBzdGFydCBqdXN0IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlciBpZiBhbnkgYmFzaWMgY29kZVxuXHRcdC8vIHBvaW50cyB3ZXJlIGNvcGllZDsgc3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvdGhlcndpc2UuXG5cblx0XHRmb3IgKGluZGV4ID0gYmFzaWMgPiAwID8gYmFzaWMgKyAxIDogMDsgaW5kZXggPCBpbnB1dExlbmd0aDsgLyogbm8gZmluYWwgZXhwcmVzc2lvbiAqLykge1xuXG5cdFx0XHQvLyBgaW5kZXhgIGlzIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gYmUgY29uc3VtZWQuXG5cdFx0XHQvLyBEZWNvZGUgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlciBpbnRvIGBkZWx0YWAsXG5cdFx0XHQvLyB3aGljaCBnZXRzIGFkZGVkIHRvIGBpYC4gVGhlIG92ZXJmbG93IGNoZWNraW5nIGlzIGVhc2llclxuXHRcdFx0Ly8gaWYgd2UgaW5jcmVhc2UgYGlgIGFzIHdlIGdvLCB0aGVuIHN1YnRyYWN0IG9mZiBpdHMgc3RhcnRpbmdcblx0XHRcdC8vIHZhbHVlIGF0IHRoZSBlbmQgdG8gb2J0YWluIGBkZWx0YWAuXG5cdFx0XHRmb3IgKG9sZGkgPSBpLCB3ID0gMSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cblx0XHRcdFx0aWYgKGluZGV4ID49IGlucHV0TGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ2ludmFsaWQtaW5wdXQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRpZ2l0ID0gYmFzaWNUb0RpZ2l0KGlucHV0LmNoYXJDb2RlQXQoaW5kZXgrKykpO1xuXG5cdFx0XHRcdGlmIChkaWdpdCA+PSBiYXNlIHx8IGRpZ2l0ID4gZmxvb3IoKG1heEludCAtIGkpIC8gdykpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgKz0gZGlnaXQgKiB3O1xuXHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPCB0KSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdGlmICh3ID4gZmxvb3IobWF4SW50IC8gYmFzZU1pbnVzVCkpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHcgKj0gYmFzZU1pbnVzVDtcblxuXHRcdFx0fVxuXG5cdFx0XHRvdXQgPSBvdXRwdXQubGVuZ3RoICsgMTtcblx0XHRcdGJpYXMgPSBhZGFwdChpIC0gb2xkaSwgb3V0LCBvbGRpID09IDApO1xuXG5cdFx0XHQvLyBgaWAgd2FzIHN1cHBvc2VkIHRvIHdyYXAgYXJvdW5kIGZyb20gYG91dGAgdG8gYDBgLFxuXHRcdFx0Ly8gaW5jcmVtZW50aW5nIGBuYCBlYWNoIHRpbWUsIHNvIHdlJ2xsIGZpeCB0aGF0IG5vdzpcblx0XHRcdGlmIChmbG9vcihpIC8gb3V0KSA+IG1heEludCAtIG4pIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdG4gKz0gZmxvb3IoaSAvIG91dCk7XG5cdFx0XHRpICU9IG91dDtcblxuXHRcdFx0Ly8gSW5zZXJ0IGBuYCBhdCBwb3NpdGlvbiBgaWAgb2YgdGhlIG91dHB1dFxuXHRcdFx0b3V0cHV0LnNwbGljZShpKyssIDAsIG4pO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVjczJlbmNvZGUob3V0cHV0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMgKGUuZy4gYSBkb21haW4gbmFtZSBsYWJlbCkgdG8gYVxuXHQgKiBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBlbmNvZGUoaW5wdXQpIHtcblx0XHR2YXIgbixcblx0XHQgICAgZGVsdGEsXG5cdFx0ICAgIGhhbmRsZWRDUENvdW50LFxuXHRcdCAgICBiYXNpY0xlbmd0aCxcblx0XHQgICAgYmlhcyxcblx0XHQgICAgaixcblx0XHQgICAgbSxcblx0XHQgICAgcSxcblx0XHQgICAgayxcblx0XHQgICAgdCxcblx0XHQgICAgY3VycmVudFZhbHVlLFxuXHRcdCAgICBvdXRwdXQgPSBbXSxcblx0XHQgICAgLyoqIGBpbnB1dExlbmd0aGAgd2lsbCBob2xkIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgaW4gYGlucHV0YC4gKi9cblx0XHQgICAgaW5wdXRMZW5ndGgsXG5cdFx0ICAgIC8qKiBDYWNoZWQgY2FsY3VsYXRpb24gcmVzdWx0cyAqL1xuXHRcdCAgICBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsXG5cdFx0ICAgIGJhc2VNaW51c1QsXG5cdFx0ICAgIHFNaW51c1Q7XG5cblx0XHQvLyBDb252ZXJ0IHRoZSBpbnB1dCBpbiBVQ1MtMiB0byBVbmljb2RlXG5cdFx0aW5wdXQgPSB1Y3MyZGVjb2RlKGlucHV0KTtcblxuXHRcdC8vIENhY2hlIHRoZSBsZW5ndGhcblx0XHRpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuXHRcdC8vIEluaXRpYWxpemUgdGhlIHN0YXRlXG5cdFx0biA9IGluaXRpYWxOO1xuXHRcdGRlbHRhID0gMDtcblx0XHRiaWFzID0gaW5pdGlhbEJpYXM7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzXG5cdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IDB4ODApIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGN1cnJlbnRWYWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGhhbmRsZWRDUENvdW50ID0gYmFzaWNMZW5ndGggPSBvdXRwdXQubGVuZ3RoO1xuXG5cdFx0Ly8gYGhhbmRsZWRDUENvdW50YCBpcyB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIGhhbmRsZWQ7XG5cdFx0Ly8gYGJhc2ljTGVuZ3RoYCBpcyB0aGUgbnVtYmVyIG9mIGJhc2ljIGNvZGUgcG9pbnRzLlxuXG5cdFx0Ly8gRmluaXNoIHRoZSBiYXNpYyBzdHJpbmcgLSBpZiBpdCBpcyBub3QgZW1wdHkgLSB3aXRoIGEgZGVsaW1pdGVyXG5cdFx0aWYgKGJhc2ljTGVuZ3RoKSB7XG5cdFx0XHRvdXRwdXQucHVzaChkZWxpbWl0ZXIpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZW5jb2RpbmcgbG9vcDpcblx0XHR3aGlsZSAoaGFuZGxlZENQQ291bnQgPCBpbnB1dExlbmd0aCkge1xuXG5cdFx0XHQvLyBBbGwgbm9uLWJhc2ljIGNvZGUgcG9pbnRzIDwgbiBoYXZlIGJlZW4gaGFuZGxlZCBhbHJlYWR5LiBGaW5kIHRoZSBuZXh0XG5cdFx0XHQvLyBsYXJnZXIgb25lOlxuXHRcdFx0Zm9yIChtID0gbWF4SW50LCBqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPj0gbiAmJiBjdXJyZW50VmFsdWUgPCBtKSB7XG5cdFx0XHRcdFx0bSA9IGN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbmNyZWFzZSBgZGVsdGFgIGVub3VnaCB0byBhZHZhbmNlIHRoZSBkZWNvZGVyJ3MgPG4saT4gc3RhdGUgdG8gPG0sMD4sXG5cdFx0XHQvLyBidXQgZ3VhcmQgYWdhaW5zdCBvdmVyZmxvd1xuXHRcdFx0aGFuZGxlZENQQ291bnRQbHVzT25lID0gaGFuZGxlZENQQ291bnQgKyAxO1xuXHRcdFx0aWYgKG0gLSBuID4gZmxvb3IoKG1heEludCAtIGRlbHRhKSAvIGhhbmRsZWRDUENvdW50UGx1c09uZSkpIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGRlbHRhICs9IChtIC0gbikgKiBoYW5kbGVkQ1BDb3VudFBsdXNPbmU7XG5cdFx0XHRuID0gbTtcblxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IG4gJiYgKytkZWx0YSA+IG1heEludCkge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PSBuKSB7XG5cdFx0XHRcdFx0Ly8gUmVwcmVzZW50IGRlbHRhIGFzIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXJcblx0XHRcdFx0XHRmb3IgKHEgPSBkZWx0YSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cdFx0XHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblx0XHRcdFx0XHRcdGlmIChxIDwgdCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHFNaW51c1QgPSBxIC0gdDtcblx0XHRcdFx0XHRcdGJhc2VNaW51c1QgPSBiYXNlIC0gdDtcblx0XHRcdFx0XHRcdG91dHB1dC5wdXNoKFxuXHRcdFx0XHRcdFx0XHRzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHQgKyBxTWludXNUICUgYmFzZU1pbnVzVCwgMCkpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cSA9IGZsb29yKHFNaW51c1QgLyBiYXNlTWludXNUKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHEsIDApKSk7XG5cdFx0XHRcdFx0YmlhcyA9IGFkYXB0KGRlbHRhLCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsIGhhbmRsZWRDUENvdW50ID09IGJhc2ljTGVuZ3RoKTtcblx0XHRcdFx0XHRkZWx0YSA9IDA7XG5cdFx0XHRcdFx0KytoYW5kbGVkQ1BDb3VudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQrK2RlbHRhO1xuXHRcdFx0KytuO1xuXG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzc1xuXHQgKiB0byBVbmljb2RlLiBPbmx5IHRoZSBQdW55Y29kZWQgcGFydHMgb2YgdGhlIGlucHV0IHdpbGwgYmUgY29udmVydGVkLCBpLmUuXG5cdCAqIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IG9uIGEgc3RyaW5nIHRoYXQgaGFzIGFscmVhZHkgYmVlblxuXHQgKiBjb252ZXJ0ZWQgdG8gVW5pY29kZS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGVkIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogY29udmVydCB0byBVbmljb2RlLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgVW5pY29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gUHVueWNvZGVcblx0ICogc3RyaW5nLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9Vbmljb2RlKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhQdW55Y29kZS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyBkZWNvZGUoc3RyaW5nLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgVW5pY29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzcyB0b1xuXHQgKiBQdW55Y29kZS4gT25seSB0aGUgbm9uLUFTQ0lJIHBhcnRzIG9mIHRoZSBkb21haW4gbmFtZSB3aWxsIGJlIGNvbnZlcnRlZCxcblx0ICogaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQncyBhbHJlYWR5IGluXG5cdCAqIEFTQ0lJLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvIGNvbnZlcnQsIGFzIGFcblx0ICogVW5pY29kZSBzdHJpbmcuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBQdW55Y29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gZG9tYWluIG5hbWUgb3Jcblx0ICogZW1haWwgYWRkcmVzcy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvQVNDSUkoaW5wdXQpIHtcblx0XHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdHJldHVybiByZWdleE5vbkFTQ0lJLnRlc3Qoc3RyaW5nKVxuXHRcdFx0XHQ/ICd4bi0tJyArIGVuY29kZShzdHJpbmcpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqIERlZmluZSB0aGUgcHVibGljIEFQSSAqL1xuXHRwdW55Y29kZSA9IHtcblx0XHQvKipcblx0XHQgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgUHVueWNvZGUuanMgdmVyc2lvbiBudW1iZXIuXG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0J3ZlcnNpb24nOiAnMS40LjEnLFxuXHRcdC8qKlxuXHRcdCAqIEFuIG9iamVjdCBvZiBtZXRob2RzIHRvIGNvbnZlcnQgZnJvbSBKYXZhU2NyaXB0J3MgaW50ZXJuYWwgY2hhcmFjdGVyXG5cdFx0ICogcmVwcmVzZW50YXRpb24gKFVDUy0yKSB0byBVbmljb2RlIGNvZGUgcG9pbnRzLCBhbmQgYmFjay5cblx0XHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0XHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0XHQgKiBAdHlwZSBPYmplY3Rcblx0XHQgKi9cblx0XHQndWNzMic6IHtcblx0XHRcdCdkZWNvZGUnOiB1Y3MyZGVjb2RlLFxuXHRcdFx0J2VuY29kZSc6IHVjczJlbmNvZGVcblx0XHR9LFxuXHRcdCdkZWNvZGUnOiBkZWNvZGUsXG5cdFx0J2VuY29kZSc6IGVuY29kZSxcblx0XHQndG9BU0NJSSc6IHRvQVNDSUksXG5cdFx0J3RvVW5pY29kZSc6IHRvVW5pY29kZVxuXHR9O1xuXG5cdC8qKiBFeHBvc2UgYHB1bnljb2RlYCAqL1xuXHQvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBzcGVjaWZpYyBjb25kaXRpb24gcGF0dGVybnNcblx0Ly8gbGlrZSB0aGUgZm9sbG93aW5nOlxuXHRpZiAoXG5cdFx0dHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiZcblx0XHRkZWZpbmUuYW1kXG5cdCkge1xuXHRcdGRlZmluZSgncHVueWNvZGUnLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBwdW55Y29kZTtcblx0XHR9KTtcblx0fSBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlKSB7XG5cdFx0aWYgKG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzKSB7XG5cdFx0XHQvLyBpbiBOb2RlLmpzLCBpby5qcywgb3IgUmluZ29KUyB2MC44LjArXG5cdFx0XHRmcmVlTW9kdWxlLmV4cG9ydHMgPSBwdW55Y29kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cblx0XHRcdGZvciAoa2V5IGluIHB1bnljb2RlKSB7XG5cdFx0XHRcdHB1bnljb2RlLmhhc093blByb3BlcnR5KGtleSkgJiYgKGZyZWVFeHBvcnRzW2tleV0gPSBwdW55Y29kZVtrZXldKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW4gUmhpbm8gb3IgYSB3ZWIgYnJvd3NlclxuXHRcdHJvb3QucHVueWNvZGUgPSBwdW55Y29kZTtcblx0fVxuXG59KHRoaXMpKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIElmIG9iai5oYXNPd25Qcm9wZXJ0eSBoYXMgYmVlbiBvdmVycmlkZGVuLCB0aGVuIGNhbGxpbmdcbi8vIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSB3aWxsIGJyZWFrLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MDdcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocXMsIHNlcCwgZXEsIG9wdGlvbnMpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIHZhciBvYmogPSB7fTtcblxuICBpZiAodHlwZW9mIHFzICE9PSAnc3RyaW5nJyB8fCBxcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IC9cXCsvZztcbiAgcXMgPSBxcy5zcGxpdChzZXApO1xuXG4gIHZhciBtYXhLZXlzID0gMTAwMDtcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubWF4S2V5cyA9PT0gJ251bWJlcicpIHtcbiAgICBtYXhLZXlzID0gb3B0aW9ucy5tYXhLZXlzO1xuICB9XG5cbiAgdmFyIGxlbiA9IHFzLmxlbmd0aDtcbiAgLy8gbWF4S2V5cyA8PSAwIG1lYW5zIHRoYXQgd2Ugc2hvdWxkIG5vdCBsaW1pdCBrZXlzIGNvdW50XG4gIGlmIChtYXhLZXlzID4gMCAmJiBsZW4gPiBtYXhLZXlzKSB7XG4gICAgbGVuID0gbWF4S2V5cztcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgeCA9IHFzW2ldLnJlcGxhY2UocmVnZXhwLCAnJTIwJyksXG4gICAgICAgIGlkeCA9IHguaW5kZXhPZihlcSksXG4gICAgICAgIGtzdHIsIHZzdHIsIGssIHY7XG5cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGtzdHIgPSB4LnN1YnN0cigwLCBpZHgpO1xuICAgICAgdnN0ciA9IHguc3Vic3RyKGlkeCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrc3RyID0geDtcbiAgICAgIHZzdHIgPSAnJztcbiAgICB9XG5cbiAgICBrID0gZGVjb2RlVVJJQ29tcG9uZW50KGtzdHIpO1xuICAgIHYgPSBkZWNvZGVVUklDb21wb25lbnQodnN0cik7XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5KG9iaiwgaykpIHtcbiAgICAgIG9ialtrXSA9IHY7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgIG9ialtrXS5wdXNoKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba10gPSBbb2JqW2tdLCB2XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5UHJpbWl0aXZlID0gZnVuY3Rpb24odikge1xuICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2O1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdiA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIGlzRmluaXRlKHYpID8gdiA6ICcnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHNlcCwgZXEsIG5hbWUpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICBvYmogPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbWFwKG9iamVjdEtleXMob2JqKSwgZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrKSkgKyBlcTtcbiAgICAgIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAgcmV0dXJuIG1hcChvYmpba10sIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKHYpKTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmpba10pKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG5cbiAgfVxuXG4gIGlmICghbmFtZSkgcmV0dXJuICcnO1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShuYW1lKSkgKyBlcSArXG4gICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9iaikpO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbmZ1bmN0aW9uIG1hcCAoeHMsIGYpIHtcbiAgaWYgKHhzLm1hcCkgcmV0dXJuIHhzLm1hcChmKTtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzLnB1c2goZih4c1tpXSwgaSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgcmVzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5kZWNvZGUgPSBleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHB1bnljb2RlID0gcmVxdWlyZSgncHVueWNvZGUnKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmV4cG9ydHMucGFyc2UgPSB1cmxQYXJzZTtcbmV4cG9ydHMucmVzb2x2ZSA9IHVybFJlc29sdmU7XG5leHBvcnRzLnJlc29sdmVPYmplY3QgPSB1cmxSZXNvbHZlT2JqZWN0O1xuZXhwb3J0cy5mb3JtYXQgPSB1cmxGb3JtYXQ7XG5cbmV4cG9ydHMuVXJsID0gVXJsO1xuXG5mdW5jdGlvbiBVcmwoKSB7XG4gIHRoaXMucHJvdG9jb2wgPSBudWxsO1xuICB0aGlzLnNsYXNoZXMgPSBudWxsO1xuICB0aGlzLmF1dGggPSBudWxsO1xuICB0aGlzLmhvc3QgPSBudWxsO1xuICB0aGlzLnBvcnQgPSBudWxsO1xuICB0aGlzLmhvc3RuYW1lID0gbnVsbDtcbiAgdGhpcy5oYXNoID0gbnVsbDtcbiAgdGhpcy5zZWFyY2ggPSBudWxsO1xuICB0aGlzLnF1ZXJ5ID0gbnVsbDtcbiAgdGhpcy5wYXRobmFtZSA9IG51bGw7XG4gIHRoaXMucGF0aCA9IG51bGw7XG4gIHRoaXMuaHJlZiA9IG51bGw7XG59XG5cbi8vIFJlZmVyZW5jZTogUkZDIDM5ODYsIFJGQyAxODA4LCBSRkMgMjM5NlxuXG4vLyBkZWZpbmUgdGhlc2UgaGVyZSBzbyBhdCBsZWFzdCB0aGV5IG9ubHkgaGF2ZSB0byBiZVxuLy8gY29tcGlsZWQgb25jZSBvbiB0aGUgZmlyc3QgbW9kdWxlIGxvYWQuXG52YXIgcHJvdG9jb2xQYXR0ZXJuID0gL14oW2EtejAtOS4rLV0rOikvaSxcbiAgICBwb3J0UGF0dGVybiA9IC86WzAtOV0qJC8sXG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIGEgc2ltcGxlIHBhdGggVVJMXG4gICAgc2ltcGxlUGF0aFBhdHRlcm4gPSAvXihcXC9cXC8/KD8hXFwvKVteXFw/XFxzXSopKFxcP1teXFxzXSopPyQvLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgcmVzZXJ2ZWQgZm9yIGRlbGltaXRpbmcgVVJMcy5cbiAgICAvLyBXZSBhY3R1YWxseSBqdXN0IGF1dG8tZXNjYXBlIHRoZXNlLlxuICAgIGRlbGltcyA9IFsnPCcsICc+JywgJ1wiJywgJ2AnLCAnICcsICdcXHInLCAnXFxuJywgJ1xcdCddLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgZm9yIHZhcmlvdXMgcmVhc29ucy5cbiAgICB1bndpc2UgPSBbJ3snLCAnfScsICd8JywgJ1xcXFwnLCAnXicsICdgJ10uY29uY2F0KGRlbGltcyksXG5cbiAgICAvLyBBbGxvd2VkIGJ5IFJGQ3MsIGJ1dCBjYXVzZSBvZiBYU1MgYXR0YWNrcy4gIEFsd2F5cyBlc2NhcGUgdGhlc2UuXG4gICAgYXV0b0VzY2FwZSA9IFsnXFwnJ10uY29uY2F0KHVud2lzZSksXG4gICAgLy8gQ2hhcmFjdGVycyB0aGF0IGFyZSBuZXZlciBldmVyIGFsbG93ZWQgaW4gYSBob3N0bmFtZS5cbiAgICAvLyBOb3RlIHRoYXQgYW55IGludmFsaWQgY2hhcnMgYXJlIGFsc28gaGFuZGxlZCwgYnV0IHRoZXNlXG4gICAgLy8gYXJlIHRoZSBvbmVzIHRoYXQgYXJlICpleHBlY3RlZCogdG8gYmUgc2Vlbiwgc28gd2UgZmFzdC1wYXRoXG4gICAgLy8gdGhlbS5cbiAgICBub25Ib3N0Q2hhcnMgPSBbJyUnLCAnLycsICc/JywgJzsnLCAnIyddLmNvbmNhdChhdXRvRXNjYXBlKSxcbiAgICBob3N0RW5kaW5nQ2hhcnMgPSBbJy8nLCAnPycsICcjJ10sXG4gICAgaG9zdG5hbWVNYXhMZW4gPSAyNTUsXG4gICAgaG9zdG5hbWVQYXJ0UGF0dGVybiA9IC9eWythLXowLTlBLVpfLV17MCw2M30kLyxcbiAgICBob3N0bmFtZVBhcnRTdGFydCA9IC9eKFsrYS16MC05QS1aXy1dezAsNjN9KSguKikkLyxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBjYW4gYWxsb3cgXCJ1bnNhZmVcIiBhbmQgXCJ1bndpc2VcIiBjaGFycy5cbiAgICB1bnNhZmVQcm90b2NvbCA9IHtcbiAgICAgICdqYXZhc2NyaXB0JzogdHJ1ZSxcbiAgICAgICdqYXZhc2NyaXB0Oic6IHRydWVcbiAgICB9LFxuICAgIC8vIHByb3RvY29scyB0aGF0IG5ldmVyIGhhdmUgYSBob3N0bmFtZS5cbiAgICBob3N0bGVzc1Byb3RvY29sID0ge1xuICAgICAgJ2phdmFzY3JpcHQnOiB0cnVlLFxuICAgICAgJ2phdmFzY3JpcHQ6JzogdHJ1ZVxuICAgIH0sXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgYWx3YXlzIGNvbnRhaW4gYSAvLyBiaXQuXG4gICAgc2xhc2hlZFByb3RvY29sID0ge1xuICAgICAgJ2h0dHAnOiB0cnVlLFxuICAgICAgJ2h0dHBzJzogdHJ1ZSxcbiAgICAgICdmdHAnOiB0cnVlLFxuICAgICAgJ2dvcGhlcic6IHRydWUsXG4gICAgICAnZmlsZSc6IHRydWUsXG4gICAgICAnaHR0cDonOiB0cnVlLFxuICAgICAgJ2h0dHBzOic6IHRydWUsXG4gICAgICAnZnRwOic6IHRydWUsXG4gICAgICAnZ29waGVyOic6IHRydWUsXG4gICAgICAnZmlsZTonOiB0cnVlXG4gICAgfSxcbiAgICBxdWVyeXN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG5cbmZ1bmN0aW9uIHVybFBhcnNlKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgaWYgKHVybCAmJiB1dGlsLmlzT2JqZWN0KHVybCkgJiYgdXJsIGluc3RhbmNlb2YgVXJsKSByZXR1cm4gdXJsO1xuXG4gIHZhciB1ID0gbmV3IFVybDtcbiAgdS5wYXJzZSh1cmwsIHBhcnNlUXVlcnlTdHJpbmcsIHNsYXNoZXNEZW5vdGVIb3N0KTtcbiAgcmV0dXJuIHU7XG59XG5cblVybC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbih1cmwsIHBhcnNlUXVlcnlTdHJpbmcsIHNsYXNoZXNEZW5vdGVIb3N0KSB7XG4gIGlmICghdXRpbC5pc1N0cmluZyh1cmwpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhcmFtZXRlciAndXJsJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgdXJsKTtcbiAgfVxuXG4gIC8vIENvcHkgY2hyb21lLCBJRSwgb3BlcmEgYmFja3NsYXNoLWhhbmRsaW5nIGJlaGF2aW9yLlxuICAvLyBCYWNrIHNsYXNoZXMgYmVmb3JlIHRoZSBxdWVyeSBzdHJpbmcgZ2V0IGNvbnZlcnRlZCB0byBmb3J3YXJkIHNsYXNoZXNcbiAgLy8gU2VlOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MjU5MTZcbiAgdmFyIHF1ZXJ5SW5kZXggPSB1cmwuaW5kZXhPZignPycpLFxuICAgICAgc3BsaXR0ZXIgPVxuICAgICAgICAgIChxdWVyeUluZGV4ICE9PSAtMSAmJiBxdWVyeUluZGV4IDwgdXJsLmluZGV4T2YoJyMnKSkgPyAnPycgOiAnIycsXG4gICAgICB1U3BsaXQgPSB1cmwuc3BsaXQoc3BsaXR0ZXIpLFxuICAgICAgc2xhc2hSZWdleCA9IC9cXFxcL2c7XG4gIHVTcGxpdFswXSA9IHVTcGxpdFswXS5yZXBsYWNlKHNsYXNoUmVnZXgsICcvJyk7XG4gIHVybCA9IHVTcGxpdC5qb2luKHNwbGl0dGVyKTtcblxuICB2YXIgcmVzdCA9IHVybDtcblxuICAvLyB0cmltIGJlZm9yZSBwcm9jZWVkaW5nLlxuICAvLyBUaGlzIGlzIHRvIHN1cHBvcnQgcGFyc2Ugc3R1ZmYgbGlrZSBcIiAgaHR0cDovL2Zvby5jb20gIFxcblwiXG4gIHJlc3QgPSByZXN0LnRyaW0oKTtcblxuICBpZiAoIXNsYXNoZXNEZW5vdGVIb3N0ICYmIHVybC5zcGxpdCgnIycpLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIFRyeSBmYXN0IHBhdGggcmVnZXhwXG4gICAgdmFyIHNpbXBsZVBhdGggPSBzaW1wbGVQYXRoUGF0dGVybi5leGVjKHJlc3QpO1xuICAgIGlmIChzaW1wbGVQYXRoKSB7XG4gICAgICB0aGlzLnBhdGggPSByZXN0O1xuICAgICAgdGhpcy5ocmVmID0gcmVzdDtcbiAgICAgIHRoaXMucGF0aG5hbWUgPSBzaW1wbGVQYXRoWzFdO1xuICAgICAgaWYgKHNpbXBsZVBhdGhbMl0pIHtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzaW1wbGVQYXRoWzJdO1xuICAgICAgICBpZiAocGFyc2VRdWVyeVN0cmluZykge1xuICAgICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeXN0cmluZy5wYXJzZSh0aGlzLnNlYXJjaC5zdWJzdHIoMSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnNlYXJjaC5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyc2VRdWVyeVN0cmluZykge1xuICAgICAgICB0aGlzLnNlYXJjaCA9ICcnO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvdG8gPSBwcm90b2NvbFBhdHRlcm4uZXhlYyhyZXN0KTtcbiAgaWYgKHByb3RvKSB7XG4gICAgcHJvdG8gPSBwcm90b1swXTtcbiAgICB2YXIgbG93ZXJQcm90byA9IHByb3RvLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5wcm90b2NvbCA9IGxvd2VyUHJvdG87XG4gICAgcmVzdCA9IHJlc3Quc3Vic3RyKHByb3RvLmxlbmd0aCk7XG4gIH1cblxuICAvLyBmaWd1cmUgb3V0IGlmIGl0J3MgZ290IGEgaG9zdFxuICAvLyB1c2VyQHNlcnZlciBpcyAqYWx3YXlzKiBpbnRlcnByZXRlZCBhcyBhIGhvc3RuYW1lLCBhbmQgdXJsXG4gIC8vIHJlc29sdXRpb24gd2lsbCB0cmVhdCAvL2Zvby9iYXIgYXMgaG9zdD1mb28scGF0aD1iYXIgYmVjYXVzZSB0aGF0J3NcbiAgLy8gaG93IHRoZSBicm93c2VyIHJlc29sdmVzIHJlbGF0aXZlIFVSTHMuXG4gIGlmIChzbGFzaGVzRGVub3RlSG9zdCB8fCBwcm90byB8fCByZXN0Lm1hdGNoKC9eXFwvXFwvW15AXFwvXStAW15AXFwvXSsvKSkge1xuICAgIHZhciBzbGFzaGVzID0gcmVzdC5zdWJzdHIoMCwgMikgPT09ICcvLyc7XG4gICAgaWYgKHNsYXNoZXMgJiYgIShwcm90byAmJiBob3N0bGVzc1Byb3RvY29sW3Byb3RvXSkpIHtcbiAgICAgIHJlc3QgPSByZXN0LnN1YnN0cigyKTtcbiAgICAgIHRoaXMuc2xhc2hlcyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFob3N0bGVzc1Byb3RvY29sW3Byb3RvXSAmJlxuICAgICAgKHNsYXNoZXMgfHwgKHByb3RvICYmICFzbGFzaGVkUHJvdG9jb2xbcHJvdG9dKSkpIHtcblxuICAgIC8vIHRoZXJlJ3MgYSBob3N0bmFtZS5cbiAgICAvLyB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgLywgPywgOywgb3IgIyBlbmRzIHRoZSBob3N0LlxuICAgIC8vXG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gQCBpbiB0aGUgaG9zdG5hbWUsIHRoZW4gbm9uLWhvc3QgY2hhcnMgKmFyZSogYWxsb3dlZFxuICAgIC8vIHRvIHRoZSBsZWZ0IG9mIHRoZSBsYXN0IEAgc2lnbiwgdW5sZXNzIHNvbWUgaG9zdC1lbmRpbmcgY2hhcmFjdGVyXG4gICAgLy8gY29tZXMgKmJlZm9yZSogdGhlIEAtc2lnbi5cbiAgICAvLyBVUkxzIGFyZSBvYm5veGlvdXMuXG4gICAgLy9cbiAgICAvLyBleDpcbiAgICAvLyBodHRwOi8vYUBiQGMvID0+IHVzZXI6YUBiIGhvc3Q6Y1xuICAgIC8vIGh0dHA6Ly9hQGI/QGMgPT4gdXNlcjphIGhvc3Q6YyBwYXRoOi8/QGNcblxuICAgIC8vIHYwLjEyIFRPRE8oaXNhYWNzKTogVGhpcyBpcyBub3QgcXVpdGUgaG93IENocm9tZSBkb2VzIHRoaW5ncy5cbiAgICAvLyBSZXZpZXcgb3VyIHRlc3QgY2FzZSBhZ2FpbnN0IGJyb3dzZXJzIG1vcmUgY29tcHJlaGVuc2l2ZWx5LlxuXG4gICAgLy8gZmluZCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgYW55IGhvc3RFbmRpbmdDaGFyc1xuICAgIHZhciBob3N0RW5kID0gLTE7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob3N0RW5kaW5nQ2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBoZWMgPSByZXN0LmluZGV4T2YoaG9zdEVuZGluZ0NoYXJzW2ldKTtcbiAgICAgIGlmIChoZWMgIT09IC0xICYmIChob3N0RW5kID09PSAtMSB8fCBoZWMgPCBob3N0RW5kKSlcbiAgICAgICAgaG9zdEVuZCA9IGhlYztcbiAgICB9XG5cbiAgICAvLyBhdCB0aGlzIHBvaW50LCBlaXRoZXIgd2UgaGF2ZSBhbiBleHBsaWNpdCBwb2ludCB3aGVyZSB0aGVcbiAgICAvLyBhdXRoIHBvcnRpb24gY2Fubm90IGdvIHBhc3QsIG9yIHRoZSBsYXN0IEAgY2hhciBpcyB0aGUgZGVjaWRlci5cbiAgICB2YXIgYXV0aCwgYXRTaWduO1xuICAgIGlmIChob3N0RW5kID09PSAtMSkge1xuICAgICAgLy8gYXRTaWduIGNhbiBiZSBhbnl3aGVyZS5cbiAgICAgIGF0U2lnbiA9IHJlc3QubGFzdEluZGV4T2YoJ0AnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYXRTaWduIG11c3QgYmUgaW4gYXV0aCBwb3J0aW9uLlxuICAgICAgLy8gaHR0cDovL2FAYi9jQGQgPT4gaG9zdDpiIGF1dGg6YSBwYXRoOi9jQGRcbiAgICAgIGF0U2lnbiA9IHJlc3QubGFzdEluZGV4T2YoJ0AnLCBob3N0RW5kKTtcbiAgICB9XG5cbiAgICAvLyBOb3cgd2UgaGF2ZSBhIHBvcnRpb24gd2hpY2ggaXMgZGVmaW5pdGVseSB0aGUgYXV0aC5cbiAgICAvLyBQdWxsIHRoYXQgb2ZmLlxuICAgIGlmIChhdFNpZ24gIT09IC0xKSB7XG4gICAgICBhdXRoID0gcmVzdC5zbGljZSgwLCBhdFNpZ24pO1xuICAgICAgcmVzdCA9IHJlc3Quc2xpY2UoYXRTaWduICsgMSk7XG4gICAgICB0aGlzLmF1dGggPSBkZWNvZGVVUklDb21wb25lbnQoYXV0aCk7XG4gICAgfVxuXG4gICAgLy8gdGhlIGhvc3QgaXMgdGhlIHJlbWFpbmluZyB0byB0aGUgbGVmdCBvZiB0aGUgZmlyc3Qgbm9uLWhvc3QgY2hhclxuICAgIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vbkhvc3RDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhlYyA9IHJlc3QuaW5kZXhPZihub25Ib3N0Q2hhcnNbaV0pO1xuICAgICAgaWYgKGhlYyAhPT0gLTEgJiYgKGhvc3RFbmQgPT09IC0xIHx8IGhlYyA8IGhvc3RFbmQpKVxuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgIH1cbiAgICAvLyBpZiB3ZSBzdGlsbCBoYXZlIG5vdCBoaXQgaXQsIHRoZW4gdGhlIGVudGlyZSB0aGluZyBpcyBhIGhvc3QuXG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKVxuICAgICAgaG9zdEVuZCA9IHJlc3QubGVuZ3RoO1xuXG4gICAgdGhpcy5ob3N0ID0gcmVzdC5zbGljZSgwLCBob3N0RW5kKTtcbiAgICByZXN0ID0gcmVzdC5zbGljZShob3N0RW5kKTtcblxuICAgIC8vIHB1bGwgb3V0IHBvcnQuXG4gICAgdGhpcy5wYXJzZUhvc3QoKTtcblxuICAgIC8vIHdlJ3ZlIGluZGljYXRlZCB0aGF0IHRoZXJlIGlzIGEgaG9zdG5hbWUsXG4gICAgLy8gc28gZXZlbiBpZiBpdCdzIGVtcHR5LCBpdCBoYXMgdG8gYmUgcHJlc2VudC5cbiAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZSB8fCAnJztcblxuICAgIC8vIGlmIGhvc3RuYW1lIGJlZ2lucyB3aXRoIFsgYW5kIGVuZHMgd2l0aCBdXG4gICAgLy8gYXNzdW1lIHRoYXQgaXQncyBhbiBJUHY2IGFkZHJlc3MuXG4gICAgdmFyIGlwdjZIb3N0bmFtZSA9IHRoaXMuaG9zdG5hbWVbMF0gPT09ICdbJyAmJlxuICAgICAgICB0aGlzLmhvc3RuYW1lW3RoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMV0gPT09ICddJztcblxuICAgIC8vIHZhbGlkYXRlIGEgbGl0dGxlLlxuICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG4gICAgICB2YXIgaG9zdHBhcnRzID0gdGhpcy5ob3N0bmFtZS5zcGxpdCgvXFwuLyk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGhvc3RwYXJ0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIHBhcnQgPSBob3N0cGFydHNbaV07XG4gICAgICAgIGlmICghcGFydCkgY29udGludWU7XG4gICAgICAgIGlmICghcGFydC5tYXRjaChob3N0bmFtZVBhcnRQYXR0ZXJuKSkge1xuICAgICAgICAgIHZhciBuZXdwYXJ0ID0gJyc7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGsgPSBwYXJ0Lmxlbmd0aDsgaiA8IGs7IGorKykge1xuICAgICAgICAgICAgaWYgKHBhcnQuY2hhckNvZGVBdChqKSA+IDEyNykge1xuICAgICAgICAgICAgICAvLyB3ZSByZXBsYWNlIG5vbi1BU0NJSSBjaGFyIHdpdGggYSB0ZW1wb3JhcnkgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0aGlzIHRvIG1ha2Ugc3VyZSBzaXplIG9mIGhvc3RuYW1lIGlzIG5vdFxuICAgICAgICAgICAgICAvLyBicm9rZW4gYnkgcmVwbGFjaW5nIG5vbi1BU0NJSSBieSBub3RoaW5nXG4gICAgICAgICAgICAgIG5ld3BhcnQgKz0gJ3gnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3cGFydCArPSBwYXJ0W2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB3ZSB0ZXN0IGFnYWluIHdpdGggQVNDSUkgY2hhciBvbmx5XG4gICAgICAgICAgaWYgKCFuZXdwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFBhdHRlcm4pKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRQYXJ0cyA9IGhvc3RwYXJ0cy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIHZhciBub3RIb3N0ID0gaG9zdHBhcnRzLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgICAgIHZhciBiaXQgPSBwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChiaXQpIHtcbiAgICAgICAgICAgICAgdmFsaWRQYXJ0cy5wdXNoKGJpdFsxXSk7XG4gICAgICAgICAgICAgIG5vdEhvc3QudW5zaGlmdChiaXRbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vdEhvc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJlc3QgPSAnLycgKyBub3RIb3N0LmpvaW4oJy4nKSArIHJlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhvc3RuYW1lID0gdmFsaWRQYXJ0cy5qb2luKCcuJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5ob3N0bmFtZS5sZW5ndGggPiBob3N0bmFtZU1heExlbikge1xuICAgICAgdGhpcy5ob3N0bmFtZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBob3N0bmFtZXMgYXJlIGFsd2F5cyBsb3dlciBjYXNlLlxuICAgICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoIWlwdjZIb3N0bmFtZSkge1xuICAgICAgLy8gSUROQSBTdXBwb3J0OiBSZXR1cm5zIGEgcHVueWNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIFwiZG9tYWluXCIuXG4gICAgICAvLyBJdCBvbmx5IGNvbnZlcnRzIHBhcnRzIG9mIHRoZSBkb21haW4gbmFtZSB0aGF0XG4gICAgICAvLyBoYXZlIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLCBpLmUuIGl0IGRvZXNuJ3QgbWF0dGVyIGlmXG4gICAgICAvLyB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQgYWxyZWFkeSBpcyBBU0NJSS1vbmx5LlxuICAgICAgdGhpcy5ob3N0bmFtZSA9IHB1bnljb2RlLnRvQVNDSUkodGhpcy5ob3N0bmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIHAgPSB0aGlzLnBvcnQgPyAnOicgKyB0aGlzLnBvcnQgOiAnJztcbiAgICB2YXIgaCA9IHRoaXMuaG9zdG5hbWUgfHwgJyc7XG4gICAgdGhpcy5ob3N0ID0gaCArIHA7XG4gICAgdGhpcy5ocmVmICs9IHRoaXMuaG9zdDtcblxuICAgIC8vIHN0cmlwIFsgYW5kIF0gZnJvbSB0aGUgaG9zdG5hbWVcbiAgICAvLyB0aGUgaG9zdCBmaWVsZCBzdGlsbCByZXRhaW5zIHRoZW0sIHRob3VnaFxuICAgIGlmIChpcHY2SG9zdG5hbWUpIHtcbiAgICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lLnN1YnN0cigxLCB0aGlzLmhvc3RuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgaWYgKHJlc3RbMF0gIT09ICcvJykge1xuICAgICAgICByZXN0ID0gJy8nICsgcmVzdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBub3cgcmVzdCBpcyBzZXQgdG8gdGhlIHBvc3QtaG9zdCBzdHVmZi5cbiAgLy8gY2hvcCBvZmYgYW55IGRlbGltIGNoYXJzLlxuICBpZiAoIXVuc2FmZVByb3RvY29sW2xvd2VyUHJvdG9dKSB7XG5cbiAgICAvLyBGaXJzdCwgbWFrZSAxMDAlIHN1cmUgdGhhdCBhbnkgXCJhdXRvRXNjYXBlXCIgY2hhcnMgZ2V0XG4gICAgLy8gZXNjYXBlZCwgZXZlbiBpZiBlbmNvZGVVUklDb21wb25lbnQgZG9lc24ndCB0aGluayB0aGV5XG4gICAgLy8gbmVlZCB0byBiZS5cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGF1dG9Fc2NhcGUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgYWUgPSBhdXRvRXNjYXBlW2ldO1xuICAgICAgaWYgKHJlc3QuaW5kZXhPZihhZSkgPT09IC0xKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIHZhciBlc2MgPSBlbmNvZGVVUklDb21wb25lbnQoYWUpO1xuICAgICAgaWYgKGVzYyA9PT0gYWUpIHtcbiAgICAgICAgZXNjID0gZXNjYXBlKGFlKTtcbiAgICAgIH1cbiAgICAgIHJlc3QgPSByZXN0LnNwbGl0KGFlKS5qb2luKGVzYyk7XG4gICAgfVxuICB9XG5cblxuICAvLyBjaG9wIG9mZiBmcm9tIHRoZSB0YWlsIGZpcnN0LlxuICB2YXIgaGFzaCA9IHJlc3QuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaCAhPT0gLTEpIHtcbiAgICAvLyBnb3QgYSBmcmFnbWVudCBzdHJpbmcuXG4gICAgdGhpcy5oYXNoID0gcmVzdC5zdWJzdHIoaGFzaCk7XG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoMCwgaGFzaCk7XG4gIH1cbiAgdmFyIHFtID0gcmVzdC5pbmRleE9mKCc/Jyk7XG4gIGlmIChxbSAhPT0gLTEpIHtcbiAgICB0aGlzLnNlYXJjaCA9IHJlc3Quc3Vic3RyKHFtKTtcbiAgICB0aGlzLnF1ZXJ5ID0gcmVzdC5zdWJzdHIocW0gKyAxKTtcbiAgICBpZiAocGFyc2VRdWVyeVN0cmluZykge1xuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5c3RyaW5nLnBhcnNlKHRoaXMucXVlcnkpO1xuICAgIH1cbiAgICByZXN0ID0gcmVzdC5zbGljZSgwLCBxbSk7XG4gIH0gZWxzZSBpZiAocGFyc2VRdWVyeVN0cmluZykge1xuICAgIC8vIG5vIHF1ZXJ5IHN0cmluZywgYnV0IHBhcnNlUXVlcnlTdHJpbmcgc3RpbGwgcmVxdWVzdGVkXG4gICAgdGhpcy5zZWFyY2ggPSAnJztcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gIH1cbiAgaWYgKHJlc3QpIHRoaXMucGF0aG5hbWUgPSByZXN0O1xuICBpZiAoc2xhc2hlZFByb3RvY29sW2xvd2VyUHJvdG9dICYmXG4gICAgICB0aGlzLmhvc3RuYW1lICYmICF0aGlzLnBhdGhuYW1lKSB7XG4gICAgdGhpcy5wYXRobmFtZSA9ICcvJztcbiAgfVxuXG4gIC8vdG8gc3VwcG9ydCBodHRwLnJlcXVlc3RcbiAgaWYgKHRoaXMucGF0aG5hbWUgfHwgdGhpcy5zZWFyY2gpIHtcbiAgICB2YXIgcCA9IHRoaXMucGF0aG5hbWUgfHwgJyc7XG4gICAgdmFyIHMgPSB0aGlzLnNlYXJjaCB8fCAnJztcbiAgICB0aGlzLnBhdGggPSBwICsgcztcbiAgfVxuXG4gIC8vIGZpbmFsbHksIHJlY29uc3RydWN0IHRoZSBocmVmIGJhc2VkIG9uIHdoYXQgaGFzIGJlZW4gdmFsaWRhdGVkLlxuICB0aGlzLmhyZWYgPSB0aGlzLmZvcm1hdCgpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGZvcm1hdCBhIHBhcnNlZCBvYmplY3QgaW50byBhIHVybCBzdHJpbmdcbmZ1bmN0aW9uIHVybEZvcm1hdChvYmopIHtcbiAgLy8gZW5zdXJlIGl0J3MgYW4gb2JqZWN0LCBhbmQgbm90IGEgc3RyaW5nIHVybC5cbiAgLy8gSWYgaXQncyBhbiBvYmosIHRoaXMgaXMgYSBuby1vcC5cbiAgLy8gdGhpcyB3YXksIHlvdSBjYW4gY2FsbCB1cmxfZm9ybWF0KCkgb24gc3RyaW5nc1xuICAvLyB0byBjbGVhbiB1cCBwb3RlbnRpYWxseSB3b25reSB1cmxzLlxuICBpZiAodXRpbC5pc1N0cmluZyhvYmopKSBvYmogPSB1cmxQYXJzZShvYmopO1xuICBpZiAoIShvYmogaW5zdGFuY2VvZiBVcmwpKSByZXR1cm4gVXJsLnByb3RvdHlwZS5mb3JtYXQuY2FsbChvYmopO1xuICByZXR1cm4gb2JqLmZvcm1hdCgpO1xufVxuXG5VcmwucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYXV0aCA9IHRoaXMuYXV0aCB8fCAnJztcbiAgaWYgKGF1dGgpIHtcbiAgICBhdXRoID0gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpO1xuICAgIGF1dGggPSBhdXRoLnJlcGxhY2UoLyUzQS9pLCAnOicpO1xuICAgIGF1dGggKz0gJ0AnO1xuICB9XG5cbiAgdmFyIHByb3RvY29sID0gdGhpcy5wcm90b2NvbCB8fCAnJyxcbiAgICAgIHBhdGhuYW1lID0gdGhpcy5wYXRobmFtZSB8fCAnJyxcbiAgICAgIGhhc2ggPSB0aGlzLmhhc2ggfHwgJycsXG4gICAgICBob3N0ID0gZmFsc2UsXG4gICAgICBxdWVyeSA9ICcnO1xuXG4gIGlmICh0aGlzLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHRoaXMuaG9zdDtcbiAgfSBlbHNlIGlmICh0aGlzLmhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAodGhpcy5ob3N0bmFtZS5pbmRleE9mKCc6JykgPT09IC0xID9cbiAgICAgICAgdGhpcy5ob3N0bmFtZSA6XG4gICAgICAgICdbJyArIHRoaXMuaG9zdG5hbWUgKyAnXScpO1xuICAgIGlmICh0aGlzLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdGhpcy5wb3J0O1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLnF1ZXJ5ICYmXG4gICAgICB1dGlsLmlzT2JqZWN0KHRoaXMucXVlcnkpICYmXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXJ5KS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9IHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeSh0aGlzLnF1ZXJ5KTtcbiAgfVxuXG4gIHZhciBzZWFyY2ggPSB0aGlzLnNlYXJjaCB8fCAocXVlcnkgJiYgKCc/JyArIHF1ZXJ5KSkgfHwgJyc7XG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonO1xuXG4gIC8vIG9ubHkgdGhlIHNsYXNoZWRQcm90b2NvbHMgZ2V0IHRoZSAvLy4gIE5vdCBtYWlsdG86LCB4bXBwOiwgZXRjLlxuICAvLyB1bmxlc3MgdGhleSBoYWQgdGhlbSB0byBiZWdpbiB3aXRoLlxuICBpZiAodGhpcy5zbGFzaGVzIHx8XG4gICAgICAoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbFtwcm90b2NvbF0pICYmIGhvc3QgIT09IGZhbHNlKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJyk7XG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lO1xuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnO1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaC5jaGFyQXQoMCkgIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2g7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoLmNoYXJBdCgwKSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2g7XG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChtYXRjaCk7XG4gIH0pO1xuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKTtcblxuICByZXR1cm4gcHJvdG9jb2wgKyBob3N0ICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xufTtcblxuZnVuY3Rpb24gdXJsUmVzb2x2ZShzb3VyY2UsIHJlbGF0aXZlKSB7XG4gIHJldHVybiB1cmxQYXJzZShzb3VyY2UsIGZhbHNlLCB0cnVlKS5yZXNvbHZlKHJlbGF0aXZlKTtcbn1cblxuVXJsLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgcmV0dXJuIHRoaXMucmVzb2x2ZU9iamVjdCh1cmxQYXJzZShyZWxhdGl2ZSwgZmFsc2UsIHRydWUpKS5mb3JtYXQoKTtcbn07XG5cbmZ1bmN0aW9uIHVybFJlc29sdmVPYmplY3Qoc291cmNlLCByZWxhdGl2ZSkge1xuICBpZiAoIXNvdXJjZSkgcmV0dXJuIHJlbGF0aXZlO1xuICByZXR1cm4gdXJsUGFyc2Uoc291cmNlLCBmYWxzZSwgdHJ1ZSkucmVzb2x2ZU9iamVjdChyZWxhdGl2ZSk7XG59XG5cblVybC5wcm90b3R5cGUucmVzb2x2ZU9iamVjdCA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG4gIGlmICh1dGlsLmlzU3RyaW5nKHJlbGF0aXZlKSkge1xuICAgIHZhciByZWwgPSBuZXcgVXJsKCk7XG4gICAgcmVsLnBhcnNlKHJlbGF0aXZlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgcmVsYXRpdmUgPSByZWw7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gbmV3IFVybCgpO1xuICB2YXIgdGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgZm9yICh2YXIgdGsgPSAwOyB0ayA8IHRrZXlzLmxlbmd0aDsgdGsrKykge1xuICAgIHZhciB0a2V5ID0gdGtleXNbdGtdO1xuICAgIHJlc3VsdFt0a2V5XSA9IHRoaXNbdGtleV07XG4gIH1cblxuICAvLyBoYXNoIGlzIGFsd2F5cyBvdmVycmlkZGVuLCBubyBtYXR0ZXIgd2hhdC5cbiAgLy8gZXZlbiBocmVmPVwiXCIgd2lsbCByZW1vdmUgaXQuXG4gIHJlc3VsdC5oYXNoID0gcmVsYXRpdmUuaGFzaDtcblxuICAvLyBpZiB0aGUgcmVsYXRpdmUgdXJsIGlzIGVtcHR5LCB0aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIGRvIGhlcmUuXG4gIGlmIChyZWxhdGl2ZS5ocmVmID09PSAnJykge1xuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBocmVmcyBsaWtlIC8vZm9vL2JhciBhbHdheXMgY3V0IHRvIHRoZSBwcm90b2NvbC5cbiAgaWYgKHJlbGF0aXZlLnNsYXNoZXMgJiYgIXJlbGF0aXZlLnByb3RvY29sKSB7XG4gICAgLy8gdGFrZSBldmVyeXRoaW5nIGV4Y2VwdCB0aGUgcHJvdG9jb2wgZnJvbSByZWxhdGl2ZVxuICAgIHZhciBya2V5cyA9IE9iamVjdC5rZXlzKHJlbGF0aXZlKTtcbiAgICBmb3IgKHZhciByayA9IDA7IHJrIDwgcmtleXMubGVuZ3RoOyByaysrKSB7XG4gICAgICB2YXIgcmtleSA9IHJrZXlzW3JrXTtcbiAgICAgIGlmIChya2V5ICE9PSAncHJvdG9jb2wnKVxuICAgICAgICByZXN1bHRbcmtleV0gPSByZWxhdGl2ZVtya2V5XTtcbiAgICB9XG5cbiAgICAvL3VybFBhcnNlIGFwcGVuZHMgdHJhaWxpbmcgLyB0byB1cmxzIGxpa2UgaHR0cDovL3d3dy5leGFtcGxlLmNvbVxuICAgIGlmIChzbGFzaGVkUHJvdG9jb2xbcmVzdWx0LnByb3RvY29sXSAmJlxuICAgICAgICByZXN1bHQuaG9zdG5hbWUgJiYgIXJlc3VsdC5wYXRobmFtZSkge1xuICAgICAgcmVzdWx0LnBhdGggPSByZXN1bHQucGF0aG5hbWUgPSAnLyc7XG4gICAgfVxuXG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmIChyZWxhdGl2ZS5wcm90b2NvbCAmJiByZWxhdGl2ZS5wcm90b2NvbCAhPT0gcmVzdWx0LnByb3RvY29sKSB7XG4gICAgLy8gaWYgaXQncyBhIGtub3duIHVybCBwcm90b2NvbCwgdGhlbiBjaGFuZ2luZ1xuICAgIC8vIHRoZSBwcm90b2NvbCBkb2VzIHdlaXJkIHRoaW5nc1xuICAgIC8vIGZpcnN0LCBpZiBpdCdzIG5vdCBmaWxlOiwgdGhlbiB3ZSBNVVNUIGhhdmUgYSBob3N0LFxuICAgIC8vIGFuZCBpZiB0aGVyZSB3YXMgYSBwYXRoXG4gICAgLy8gdG8gYmVnaW4gd2l0aCwgdGhlbiB3ZSBNVVNUIGhhdmUgYSBwYXRoLlxuICAgIC8vIGlmIGl0IGlzIGZpbGU6LCB0aGVuIHRoZSBob3N0IGlzIGRyb3BwZWQsXG4gICAgLy8gYmVjYXVzZSB0aGF0J3Mga25vd24gdG8gYmUgaG9zdGxlc3MuXG4gICAgLy8gYW55dGhpbmcgZWxzZSBpcyBhc3N1bWVkIHRvIGJlIGFic29sdXRlLlxuICAgIGlmICghc2xhc2hlZFByb3RvY29sW3JlbGF0aXZlLnByb3RvY29sXSkge1xuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhyZWxhdGl2ZSk7XG4gICAgICBmb3IgKHZhciB2ID0gMDsgdiA8IGtleXMubGVuZ3RoOyB2KyspIHtcbiAgICAgICAgdmFyIGsgPSBrZXlzW3ZdO1xuICAgICAgICByZXN1bHRba10gPSByZWxhdGl2ZVtrXTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXN1bHQucHJvdG9jb2wgPSByZWxhdGl2ZS5wcm90b2NvbDtcbiAgICBpZiAoIXJlbGF0aXZlLmhvc3QgJiYgIWhvc3RsZXNzUHJvdG9jb2xbcmVsYXRpdmUucHJvdG9jb2xdKSB7XG4gICAgICB2YXIgcmVsUGF0aCA9IChyZWxhdGl2ZS5wYXRobmFtZSB8fCAnJykuc3BsaXQoJy8nKTtcbiAgICAgIHdoaWxlIChyZWxQYXRoLmxlbmd0aCAmJiAhKHJlbGF0aXZlLmhvc3QgPSByZWxQYXRoLnNoaWZ0KCkpKTtcbiAgICAgIGlmICghcmVsYXRpdmUuaG9zdCkgcmVsYXRpdmUuaG9zdCA9ICcnO1xuICAgICAgaWYgKCFyZWxhdGl2ZS5ob3N0bmFtZSkgcmVsYXRpdmUuaG9zdG5hbWUgPSAnJztcbiAgICAgIGlmIChyZWxQYXRoWzBdICE9PSAnJykgcmVsUGF0aC51bnNoaWZ0KCcnKTtcbiAgICAgIGlmIChyZWxQYXRoLmxlbmd0aCA8IDIpIHJlbFBhdGgudW5zaGlmdCgnJyk7XG4gICAgICByZXN1bHQucGF0aG5hbWUgPSByZWxQYXRoLmpvaW4oJy8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnBhdGhuYW1lID0gcmVsYXRpdmUucGF0aG5hbWU7XG4gICAgfVxuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgcmVzdWx0Lmhvc3QgPSByZWxhdGl2ZS5ob3N0IHx8ICcnO1xuICAgIHJlc3VsdC5hdXRoID0gcmVsYXRpdmUuYXV0aDtcbiAgICByZXN1bHQuaG9zdG5hbWUgPSByZWxhdGl2ZS5ob3N0bmFtZSB8fCByZWxhdGl2ZS5ob3N0O1xuICAgIHJlc3VsdC5wb3J0ID0gcmVsYXRpdmUucG9ydDtcbiAgICAvLyB0byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmIChyZXN1bHQucGF0aG5hbWUgfHwgcmVzdWx0LnNlYXJjaCkge1xuICAgICAgdmFyIHAgPSByZXN1bHQucGF0aG5hbWUgfHwgJyc7XG4gICAgICB2YXIgcyA9IHJlc3VsdC5zZWFyY2ggfHwgJyc7XG4gICAgICByZXN1bHQucGF0aCA9IHAgKyBzO1xuICAgIH1cbiAgICByZXN1bHQuc2xhc2hlcyA9IHJlc3VsdC5zbGFzaGVzIHx8IHJlbGF0aXZlLnNsYXNoZXM7XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHZhciBpc1NvdXJjZUFicyA9IChyZXN1bHQucGF0aG5hbWUgJiYgcmVzdWx0LnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSxcbiAgICAgIGlzUmVsQWJzID0gKFxuICAgICAgICAgIHJlbGF0aXZlLmhvc3QgfHxcbiAgICAgICAgICByZWxhdGl2ZS5wYXRobmFtZSAmJiByZWxhdGl2ZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJ1xuICAgICAgKSxcbiAgICAgIG11c3RFbmRBYnMgPSAoaXNSZWxBYnMgfHwgaXNTb3VyY2VBYnMgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdC5ob3N0ICYmIHJlbGF0aXZlLnBhdGhuYW1lKSksXG4gICAgICByZW1vdmVBbGxEb3RzID0gbXVzdEVuZEFicyxcbiAgICAgIHNyY1BhdGggPSByZXN1bHQucGF0aG5hbWUgJiYgcmVzdWx0LnBhdGhuYW1lLnNwbGl0KCcvJykgfHwgW10sXG4gICAgICByZWxQYXRoID0gcmVsYXRpdmUucGF0aG5hbWUgJiYgcmVsYXRpdmUucGF0aG5hbWUuc3BsaXQoJy8nKSB8fCBbXSxcbiAgICAgIHBzeWNob3RpYyA9IHJlc3VsdC5wcm90b2NvbCAmJiAhc2xhc2hlZFByb3RvY29sW3Jlc3VsdC5wcm90b2NvbF07XG5cbiAgLy8gaWYgdGhlIHVybCBpcyBhIG5vbi1zbGFzaGVkIHVybCwgdGhlbiByZWxhdGl2ZVxuICAvLyBsaW5rcyBsaWtlIC4uLy4uIHNob3VsZCBiZSBhYmxlXG4gIC8vIHRvIGNyYXdsIHVwIHRvIHRoZSBob3N0bmFtZSwgYXMgd2VsbC4gIFRoaXMgaXMgc3RyYW5nZS5cbiAgLy8gcmVzdWx0LnByb3RvY29sIGhhcyBhbHJlYWR5IGJlZW4gc2V0IGJ5IG5vdy5cbiAgLy8gTGF0ZXIgb24sIHB1dCB0aGUgZmlyc3QgcGF0aCBwYXJ0IGludG8gdGhlIGhvc3QgZmllbGQuXG4gIGlmIChwc3ljaG90aWMpIHtcbiAgICByZXN1bHQuaG9zdG5hbWUgPSAnJztcbiAgICByZXN1bHQucG9ydCA9IG51bGw7XG4gICAgaWYgKHJlc3VsdC5ob3N0KSB7XG4gICAgICBpZiAoc3JjUGF0aFswXSA9PT0gJycpIHNyY1BhdGhbMF0gPSByZXN1bHQuaG9zdDtcbiAgICAgIGVsc2Ugc3JjUGF0aC51bnNoaWZ0KHJlc3VsdC5ob3N0KTtcbiAgICB9XG4gICAgcmVzdWx0Lmhvc3QgPSAnJztcbiAgICBpZiAocmVsYXRpdmUucHJvdG9jb2wpIHtcbiAgICAgIHJlbGF0aXZlLmhvc3RuYW1lID0gbnVsbDtcbiAgICAgIHJlbGF0aXZlLnBvcnQgPSBudWxsO1xuICAgICAgaWYgKHJlbGF0aXZlLmhvc3QpIHtcbiAgICAgICAgaWYgKHJlbFBhdGhbMF0gPT09ICcnKSByZWxQYXRoWzBdID0gcmVsYXRpdmUuaG9zdDtcbiAgICAgICAgZWxzZSByZWxQYXRoLnVuc2hpZnQocmVsYXRpdmUuaG9zdCk7XG4gICAgICB9XG4gICAgICByZWxhdGl2ZS5ob3N0ID0gbnVsbDtcbiAgICB9XG4gICAgbXVzdEVuZEFicyA9IG11c3RFbmRBYnMgJiYgKHJlbFBhdGhbMF0gPT09ICcnIHx8IHNyY1BhdGhbMF0gPT09ICcnKTtcbiAgfVxuXG4gIGlmIChpc1JlbEFicykge1xuICAgIC8vIGl0J3MgYWJzb2x1dGUuXG4gICAgcmVzdWx0Lmhvc3QgPSAocmVsYXRpdmUuaG9zdCB8fCByZWxhdGl2ZS5ob3N0ID09PSAnJykgP1xuICAgICAgICAgICAgICAgICAgcmVsYXRpdmUuaG9zdCA6IHJlc3VsdC5ob3N0O1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9IChyZWxhdGl2ZS5ob3N0bmFtZSB8fCByZWxhdGl2ZS5ob3N0bmFtZSA9PT0gJycpID9cbiAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZS5ob3N0bmFtZSA6IHJlc3VsdC5ob3N0bmFtZTtcbiAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuICAgIHJlc3VsdC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICAgIHNyY1BhdGggPSByZWxQYXRoO1xuICAgIC8vIGZhbGwgdGhyb3VnaCB0byB0aGUgZG90LWhhbmRsaW5nIGJlbG93LlxuICB9IGVsc2UgaWYgKHJlbFBhdGgubGVuZ3RoKSB7XG4gICAgLy8gaXQncyByZWxhdGl2ZVxuICAgIC8vIHRocm93IGF3YXkgdGhlIGV4aXN0aW5nIGZpbGUsIGFuZCB0YWtlIHRoZSBuZXcgcGF0aCBpbnN0ZWFkLlxuICAgIGlmICghc3JjUGF0aCkgc3JjUGF0aCA9IFtdO1xuICAgIHNyY1BhdGgucG9wKCk7XG4gICAgc3JjUGF0aCA9IHNyY1BhdGguY29uY2F0KHJlbFBhdGgpO1xuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gIH0gZWxzZSBpZiAoIXV0aWwuaXNOdWxsT3JVbmRlZmluZWQocmVsYXRpdmUuc2VhcmNoKSkge1xuICAgIC8vIGp1c3QgcHVsbCBvdXQgdGhlIHNlYXJjaC5cbiAgICAvLyBsaWtlIGhyZWY9Jz9mb28nLlxuICAgIC8vIFB1dCB0aGlzIGFmdGVyIHRoZSBvdGhlciB0d28gY2FzZXMgYmVjYXVzZSBpdCBzaW1wbGlmaWVzIHRoZSBib29sZWFuc1xuICAgIGlmIChwc3ljaG90aWMpIHtcbiAgICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlc3VsdC5ob3N0ID0gc3JjUGF0aC5zaGlmdCgpO1xuICAgICAgLy9vY2NhdGlvbmFseSB0aGUgYXV0aCBjYW4gZ2V0IHN0dWNrIG9ubHkgaW4gaG9zdFxuICAgICAgLy90aGlzIGVzcGVjaWFsbHkgaGFwcGVucyBpbiBjYXNlcyBsaWtlXG4gICAgICAvL3VybC5yZXNvbHZlT2JqZWN0KCdtYWlsdG86bG9jYWwxQGRvbWFpbjEnLCAnbG9jYWwyQGRvbWFpbjInKVxuICAgICAgdmFyIGF1dGhJbkhvc3QgPSByZXN1bHQuaG9zdCAmJiByZXN1bHQuaG9zdC5pbmRleE9mKCdAJykgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lmhvc3Quc3BsaXQoJ0AnKSA6IGZhbHNlO1xuICAgICAgaWYgKGF1dGhJbkhvc3QpIHtcbiAgICAgICAgcmVzdWx0LmF1dGggPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgICAgIHJlc3VsdC5ob3N0ID0gcmVzdWx0Lmhvc3RuYW1lID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuICAgIHJlc3VsdC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICAgIC8vdG8gc3VwcG9ydCBodHRwLnJlcXVlc3RcbiAgICBpZiAoIXV0aWwuaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIXV0aWwuaXNOdWxsKHJlc3VsdC5zZWFyY2gpKSB7XG4gICAgICByZXN1bHQucGF0aCA9IChyZXN1bHQucGF0aG5hbWUgPyByZXN1bHQucGF0aG5hbWUgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAocmVzdWx0LnNlYXJjaCA/IHJlc3VsdC5zZWFyY2ggOiAnJyk7XG4gICAgfVxuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAoIXNyY1BhdGgubGVuZ3RoKSB7XG4gICAgLy8gbm8gcGF0aCBhdCBhbGwuICBlYXN5LlxuICAgIC8vIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgb3RoZXIgc3R1ZmYgYWJvdmUuXG4gICAgcmVzdWx0LnBhdGhuYW1lID0gbnVsbDtcbiAgICAvL3RvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gICAgaWYgKHJlc3VsdC5zZWFyY2gpIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gJy8nICsgcmVzdWx0LnNlYXJjaDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnBhdGggPSBudWxsO1xuICAgIH1cbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gaWYgYSB1cmwgRU5EcyBpbiAuIG9yIC4uLCB0aGVuIGl0IG11c3QgZ2V0IGEgdHJhaWxpbmcgc2xhc2guXG4gIC8vIGhvd2V2ZXIsIGlmIGl0IGVuZHMgaW4gYW55dGhpbmcgZWxzZSBub24tc2xhc2h5LFxuICAvLyB0aGVuIGl0IG11c3QgTk9UIGdldCBhIHRyYWlsaW5nIHNsYXNoLlxuICB2YXIgbGFzdCA9IHNyY1BhdGguc2xpY2UoLTEpWzBdO1xuICB2YXIgaGFzVHJhaWxpbmdTbGFzaCA9IChcbiAgICAgIChyZXN1bHQuaG9zdCB8fCByZWxhdGl2ZS5ob3N0IHx8IHNyY1BhdGgubGVuZ3RoID4gMSkgJiZcbiAgICAgIChsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJykgfHwgbGFzdCA9PT0gJycpO1xuXG4gIC8vIHN0cmlwIHNpbmdsZSBkb3RzLCByZXNvbHZlIGRvdWJsZSBkb3RzIHRvIHBhcmVudCBkaXJcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHNyY1BhdGgubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIGxhc3QgPSBzcmNQYXRoW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHNyY1BhdGguc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHNyY1BhdGguc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmICghbXVzdEVuZEFicyAmJiAhcmVtb3ZlQWxsRG90cykge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgc3JjUGF0aC51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtdXN0RW5kQWJzICYmIHNyY1BhdGhbMF0gIT09ICcnICYmXG4gICAgICAoIXNyY1BhdGhbMF0gfHwgc3JjUGF0aFswXS5jaGFyQXQoMCkgIT09ICcvJykpIHtcbiAgICBzcmNQYXRoLnVuc2hpZnQoJycpO1xuICB9XG5cbiAgaWYgKGhhc1RyYWlsaW5nU2xhc2ggJiYgKHNyY1BhdGguam9pbignLycpLnN1YnN0cigtMSkgIT09ICcvJykpIHtcbiAgICBzcmNQYXRoLnB1c2goJycpO1xuICB9XG5cbiAgdmFyIGlzQWJzb2x1dGUgPSBzcmNQYXRoWzBdID09PSAnJyB8fFxuICAgICAgKHNyY1BhdGhbMF0gJiYgc3JjUGF0aFswXS5jaGFyQXQoMCkgPT09ICcvJyk7XG5cbiAgLy8gcHV0IHRoZSBob3N0IGJhY2tcbiAgaWYgKHBzeWNob3RpYykge1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlc3VsdC5ob3N0ID0gaXNBYnNvbHV0ZSA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1BhdGgubGVuZ3RoID8gc3JjUGF0aC5zaGlmdCgpIDogJyc7XG4gICAgLy9vY2NhdGlvbmFseSB0aGUgYXV0aCBjYW4gZ2V0IHN0dWNrIG9ubHkgaW4gaG9zdFxuICAgIC8vdGhpcyBlc3BlY2lhbGx5IGhhcHBlbnMgaW4gY2FzZXMgbGlrZVxuICAgIC8vdXJsLnJlc29sdmVPYmplY3QoJ21haWx0bzpsb2NhbDFAZG9tYWluMScsICdsb2NhbDJAZG9tYWluMicpXG4gICAgdmFyIGF1dGhJbkhvc3QgPSByZXN1bHQuaG9zdCAmJiByZXN1bHQuaG9zdC5pbmRleE9mKCdAJykgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ob3N0LnNwbGl0KCdAJykgOiBmYWxzZTtcbiAgICBpZiAoYXV0aEluSG9zdCkge1xuICAgICAgcmVzdWx0LmF1dGggPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgICByZXN1bHQuaG9zdCA9IHJlc3VsdC5ob3N0bmFtZSA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICB9XG4gIH1cblxuICBtdXN0RW5kQWJzID0gbXVzdEVuZEFicyB8fCAocmVzdWx0Lmhvc3QgJiYgc3JjUGF0aC5sZW5ndGgpO1xuXG4gIGlmIChtdXN0RW5kQWJzICYmICFpc0Fic29sdXRlKSB7XG4gICAgc3JjUGF0aC51bnNoaWZ0KCcnKTtcbiAgfVxuXG4gIGlmICghc3JjUGF0aC5sZW5ndGgpIHtcbiAgICByZXN1bHQucGF0aG5hbWUgPSBudWxsO1xuICAgIHJlc3VsdC5wYXRoID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQucGF0aG5hbWUgPSBzcmNQYXRoLmpvaW4oJy8nKTtcbiAgfVxuXG4gIC8vdG8gc3VwcG9ydCByZXF1ZXN0Lmh0dHBcbiAgaWYgKCF1dGlsLmlzTnVsbChyZXN1bHQucGF0aG5hbWUpIHx8ICF1dGlsLmlzTnVsbChyZXN1bHQuc2VhcmNoKSkge1xuICAgIHJlc3VsdC5wYXRoID0gKHJlc3VsdC5wYXRobmFtZSA/IHJlc3VsdC5wYXRobmFtZSA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocmVzdWx0LnNlYXJjaCA/IHJlc3VsdC5zZWFyY2ggOiAnJyk7XG4gIH1cbiAgcmVzdWx0LmF1dGggPSByZWxhdGl2ZS5hdXRoIHx8IHJlc3VsdC5hdXRoO1xuICByZXN1bHQuc2xhc2hlcyA9IHJlc3VsdC5zbGFzaGVzIHx8IHJlbGF0aXZlLnNsYXNoZXM7XG4gIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuVXJsLnByb3RvdHlwZS5wYXJzZUhvc3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGhvc3QgPSB0aGlzLmhvc3Q7XG4gIHZhciBwb3J0ID0gcG9ydFBhdHRlcm4uZXhlYyhob3N0KTtcbiAgaWYgKHBvcnQpIHtcbiAgICBwb3J0ID0gcG9ydFswXTtcbiAgICBpZiAocG9ydCAhPT0gJzonKSB7XG4gICAgICB0aGlzLnBvcnQgPSBwb3J0LnN1YnN0cigxKTtcbiAgICB9XG4gICAgaG9zdCA9IGhvc3Quc3Vic3RyKDAsIGhvc3QubGVuZ3RoIC0gcG9ydC5sZW5ndGgpO1xuICB9XG4gIGlmIChob3N0KSB0aGlzLmhvc3RuYW1lID0gaG9zdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1N0cmluZzogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZihhcmcpID09PSAnc3RyaW5nJztcbiAgfSxcbiAgaXNPYmplY3Q6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YoYXJnKSA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xuICB9LFxuICBpc051bGw6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBhcmcgPT09IG51bGw7XG4gIH0sXG4gIGlzTnVsbE9yVW5kZWZpbmVkOiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gYXJnID09IG51bGw7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgJyMvY29tbW9uL2Jyb3dzZXInO1xuaW1wb3J0IHsgZ2V0QWN0aXZlVGFiLCBtYWtlUGF1c2UsIHNlbmRDbWQsIHJlcXVlc3QgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBCVUlMRF9JTl9TQ1JJUFRfU1JDLCBUSU1FT1VUXzI0SE9VUlMsIFRJTUVPVVRfTUFYLCBJU19ERVYgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0ICogYXMgdGxkIGZyb20gJyMvY29tbW9uL3RsZCc7XG5pbXBvcnQgKiBhcyBzeW5jIGZyb20gJy4vc3luYyc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgY2hlY2tSZW1vdmUgfSBmcm9tICcuL3V0aWxzL2RiJztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuL3V0aWxzL2luaXQnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uLCBob29rT3B0aW9ucyB9IGZyb20gJy4vdXRpbHMvb3B0aW9ucyc7XG5pbXBvcnQgeyBwb3B1cFRhYnMgfSBmcm9tICcuL3V0aWxzL3BvcHVwLXRyYWNrZXInO1xuaW1wb3J0IHsgZ2V0SW5qZWN0ZWRTY3JpcHRzIH0gZnJvbSAnLi91dGlscy9wcmVpbmplY3QnO1xuaW1wb3J0IHsgU0NSSVBUX1RFTVBMQVRFLCByZXNldFNjcmlwdFRlbXBsYXRlIH0gZnJvbSAnLi91dGlscy90ZW1wbGF0ZS1ob29rJztcbmltcG9ydCB7IHJlc2V0VmFsdWVPcGVuZXIsIGFkZFZhbHVlT3BlbmVyIH0gZnJvbSAnLi91dGlscy92YWx1ZXMnO1xuaW1wb3J0IHsgY2xlYXJSZXF1ZXN0c0J5VGFiSWQgfSBmcm9tICcuL3V0aWxzL3JlcXVlc3RzJztcbmltcG9ydCAnLi91dGlscy9jbGlwYm9hcmQnO1xuaW1wb3J0ICcuL3V0aWxzL2hvdGtleXMnO1xuaW1wb3J0ICcuL3V0aWxzL2ljb24nO1xuaW1wb3J0ICcuL3V0aWxzL25vdGlmaWNhdGlvbnMnO1xuaW1wb3J0ICcuL3V0aWxzL3NjcmlwdCc7XG5pbXBvcnQgJy4vdXRpbHMvdGFicyc7XG5pbXBvcnQgJy4vdXRpbHMvdGVzdGVyJztcbmltcG9ydCAnLi91dGlscy91cGRhdGUnO1xuXG5ob29rT3B0aW9ucygoY2hhbmdlcykgPT4ge1xuICBpZiAoJ2F1dG9VcGRhdGUnIGluIGNoYW5nZXMpIHtcbiAgICBhdXRvVXBkYXRlKCk7XG4gIH1cbiAgaWYgKFNDUklQVF9URU1QTEFURSBpbiBjaGFuZ2VzKSB7XG4gICAgcmVzZXRTY3JpcHRUZW1wbGF0ZShjaGFuZ2VzKTtcbiAgfVxuICBzZW5kQ21kKCdVcGRhdGVPcHRpb25zJywgY2hhbmdlcyk7XG59KTtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICAvKiogQHJldHVybiB7UHJvbWlzZTx7IHNjcmlwdHM6IFZNU2NyaXB0W10sIGNhY2hlOiBPYmplY3QsIHN5bmM6IE9iamVjdCB9Pn0gKi9cbiAgYXN5bmMgR2V0RGF0YShpZHMpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YShpZHMpO1xuICAgIGRhdGEuc3luYyA9IHN5bmMuZ2V0U3RhdGVzKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59ICovXG4gIGFzeW5jIEdldEluamVjdGVkKHsgdXJsLCBmb3JjZUNvbnRlbnQgfSwgc3JjKSB7XG4gICAgY29uc3QgeyBmcmFtZUlkLCB0YWIgfSA9IHNyYztcbiAgICBjb25zdCB0YWJJZCA9IHRhYi5pZDtcbiAgICBpZiAoIXVybCkgdXJsID0gc3JjLnVybCB8fCB0YWIudXJsO1xuICAgIGlmICghZnJhbWVJZCkge1xuICAgICAgcmVzZXRWYWx1ZU9wZW5lcih0YWJJZCk7XG4gICAgICBjbGVhclJlcXVlc3RzQnlUYWJJZCh0YWJJZCk7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEluamVjdGVkU2NyaXB0cyh1cmwsIHRhYklkLCBmcmFtZUlkLCBmb3JjZUNvbnRlbnQpO1xuICAgIGNvbnN0IHsgZmVlZGJhY2ssIGluamVjdCwgdmFsT3BJZHMgfSA9IHJlcztcbiAgICBpbmplY3QuaXNQb3B1cFNob3duID0gcG9wdXBUYWJzW3RhYklkXTtcbiAgICAvLyBJbmplY3Rpbmcga25vd24gY29udGVudCBzY3JpcHRzIHdpdGhvdXQgd2FpdGluZyBmb3IgSW5qZWN0aW9uRmVlZGJhY2sgbWVzc2FnZS5cbiAgICAvLyBSdW5uaW5nIGluIGEgc2VwYXJhdGUgdGFzayBiZWNhdXNlIGl0IG1heSB0YWtlIGEgbG9uZyB0aW1lIHRvIHNlcmlhbGl6ZSBkYXRhLlxuICAgIGlmIChmZWVkYmFjay5sZW5ndGgpIHtcbiAgICAgIHNldFRpbWVvdXQoY29tbWFuZHMuSW5qZWN0aW9uRmVlZGJhY2ssIDAsIHsgZmVlZGJhY2sgfSwgc3JjKTtcbiAgICB9XG4gICAgYWRkVmFsdWVPcGVuZXIodGFiSWQsIGZyYW1lSWQsIHZhbE9wSWRzKTtcbiAgICByZXR1cm4gaW5qZWN0O1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fSAqL1xuICBhc3luYyBHZXRUYWJEb21haW4oKSB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgZ2V0QWN0aXZlVGFiKCkgfHwge307XG4gICAgY29uc3QgdXJsID0gdGFiLnBlbmRpbmdVcmwgfHwgdGFiLnVybCB8fCAnJztcbiAgICBjb25zdCBob3N0ID0gdXJsLm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXi9dKyl8JC8pWzFdO1xuICAgIHJldHVybiB7XG4gICAgICB0YWIsXG4gICAgICBkb21haW46IGhvc3QgJiYgdGxkLmdldERvbWFpbihob3N0KSB8fCBob3N0LFxuICAgIH07XG4gIH0sXG4gIC8qKlxuICAgKiBUaW1lcnMgaW4gY29udGVudCBzY3JpcHRzIGFyZSBzaGFyZWQgd2l0aCB0aGUgd2ViIHBhZ2Ugc28gaXQgY2FuIGNsZWFyIHRoZW0uXG4gICAqIGF3YWl0IHNlbmRDbWQoJ1NldFRpbWVvdXQnLCAxMDApIGluIGluamVjdGVkL2NvbnRlbnRcbiAgICogYXdhaXQgYnJpZGdlLnNlbmQoJ1NldFRpbWVvdXQnLCAxMDApIGluIGluamVjdGVkL3dlYlxuICAgKi9cbiAgU2V0VGltZW91dChtcykge1xuICAgIHJldHVybiBtcyA+IDAgJiYgbWFrZVBhdXNlKG1zKTtcbiAgfSxcbn0pO1xuXG4vLyBjb21tYW5kcyB0byBzeW5jIHVuY29uZGl0aW9uYWxseSByZWdhcmRsZXNzIG9mIHRoZSByZXR1cm5lZCB2YWx1ZSBmcm9tIHRoZSBoYW5kbGVyXG5jb25zdCBjb21tYW5kc1RvU3luYyA9IFtcbiAgJ01hcmtSZW1vdmVkJyxcbiAgJ01vdmUnLFxuICAnUGFyc2VTY3JpcHQnLFxuICAnUmVtb3ZlU2NyaXB0JyxcbiAgJ1VwZGF0ZVNjcmlwdEluZm8nLFxuXTtcbi8vIGNvbW1hbmRzIHRvIHN5bmMgb25seSBpZiB0aGUgaGFuZGxlciByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlXG5jb25zdCBjb21tYW5kc1RvU3luY0lmVHJ1dGh5ID0gW1xuICAnQ2hlY2tSZW1vdmUnLFxuICAnQ2hlY2tVcGRhdGUnLFxuICAnQ2hlY2tVcGRhdGVBbGwnLFxuXTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ29tbWFuZE1lc3NhZ2UocmVxLCBzcmMpIHtcbiAgY29uc3QgeyBjbWQgfSA9IHJlcTtcbiAgY29uc3QgcmVzID0gYXdhaXQgY29tbWFuZHNbY21kXT8uKHJlcS5kYXRhLCBzcmMpO1xuICBpZiAoY29tbWFuZHNUb1N5bmMuaW5jbHVkZXMoY21kKVxuICB8fCByZXMgJiYgY29tbWFuZHNUb1N5bmNJZlRydXRoeS5pbmNsdWRlcyhjbWQpKSB7XG4gICAgc3luYy5zeW5jKCk7XG4gIH1cbiAgLy8gYHVuZGVmaW5lZGAgaXMgbm90IHRyYW5zZmVyYWJsZSwgYnV0IGBudWxsYCBpc1xuICByZXR1cm4gcmVzID8/IG51bGw7XG59XG5cbmZ1bmN0aW9uIGF1dG9VcGRhdGUoKSB7XG4gIGNvbnN0IGludGVydmFsID0gSVNfREVWID8gMTAwMCA6ICgrZ2V0T3B0aW9uKCdhdXRvVXBkYXRlJykgfHwgMCkgKiBUSU1FT1VUXzI0SE9VUlM7XG4gIGlmICghaW50ZXJ2YWwpIHJldHVybjtcbiAgbGV0IGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gZ2V0T3B0aW9uKCdsYXN0VXBkYXRlJyk7XG4gIGlmIChlbGFwc2VkID49IGludGVydmFsKSB7XG4gICAgaGFuZGxlQ29tbWFuZE1lc3NhZ2UoeyBjbWQ6ICdDaGVja1VwZGF0ZUFsbCcgfSk7XG4gICAgZWxhcHNlZCA9IDA7XG4gIH1cbiAgY2xlYXJUaW1lb3V0KGF1dG9VcGRhdGUudGltZXIpO1xuICBhdXRvVXBkYXRlLnRpbWVyID0gc2V0VGltZW91dChhdXRvVXBkYXRlLCBNYXRoLm1pbihUSU1FT1VUX01BWCwgaW50ZXJ2YWwgLSBlbGFwc2VkKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRCdWlsZGluKCkge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcXVlc3QoQlVJTERfSU5fU0NSSVBUX1NSQywge1xuICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgIGhlYWRlcnM6IHsgQWNjZXB0OiAndGV4dC94LXVzZXJzY3JpcHQtbWV0YSwqLyonIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNvbW1hbmRzLlBhcnNlU2NyaXB0KHtcbiAgICB1cmw6IEJVSUxEX0lOX1NDUklQVF9TUkMsXG4gICAgY29kZTogZGF0YSxcbiAgICBjdXN0b206IHsgYnVpbGRJbjogdHJ1ZSB9LFxuICB9KTtcbiAgc3luYy5zeW5jKCk7XG5cbiAgaWYgKHJlcy53aGVyZS5pZCAhPT0gMSkge1xuICAgIHRocm93IGB3cm9uZyBpZDogJHtyZXMud2hlcmUuaWR9YDtcbiAgfVxufVxuXG5pbml0aWFsaXplKCgpID0+IHtcbiAgZ2xvYmFsLmhhbmRsZUNvbW1hbmRNZXNzYWdlID0gaGFuZGxlQ29tbWFuZE1lc3NhZ2U7XG4gIGdsb2JhbC5kZWVwQ29weSA9IGRlZXBDb3B5O1xuICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKFxuICAgIElTX0ZJUkVGT1ggLy8gaW4gRkYgYSByZWplY3RlZCBQcm9taXNlIHZhbHVlIGlzIHRyYW5zZmVycmVkIG9ubHkgaWYgaXQncyBhbiBFcnJvciBvYmplY3RcbiAgICAgID8gKC4uLmFyZ3MpID0+IGhhbmRsZUNvbW1hbmRNZXNzYWdlKC4uLmFyZ3MpLmNhdGNoKGUgPT4gKFxuICAgICAgICBQcm9taXNlLnJlamVjdChlIGluc3RhbmNlb2YgRXJyb3IgPyBlIDogbmV3IEVycm9yKGUpKVxuICAgICAgKSkgLy8gRGlkbid0IHVzZSBgdGhyb3dgIHRvIGF2b2lkIGludGVycnVwdGlvbiBpbiBkZXZ0b29scyB3aXRoIHBhdXNlLW9uLWV4Y2VwdGlvbiBlbmFibGVkLlxuICAgICAgOiBoYW5kbGVDb21tYW5kTWVzc2FnZSxcbiAgKTtcblxuICAvLyBjaGVjayBhbmQgaW5zdGFsbCB0aGUgYnVpbGQtaW4gc2NyaXB0XG4gIGluaXRCdWlsZGluKCk7XG4gIGNvbnNvbGUuaW5mbygnaW5pdEJ1aWxkaW4uLi4nKTtcbiAgc2V0VGltZW91dChhdXRvVXBkYXRlLCBJU19ERVYgPyAxIDogMmU0KTtcbiAgc3luYy5pbml0aWFsaXplKCk7XG4gIGNoZWNrUmVtb3ZlKCk7XG4gIHNldEludGVydmFsKGNoZWNrUmVtb3ZlLCBUSU1FT1VUXzI0SE9VUlMpO1xuICBjb25zdCBhcGkgPSBnbG9iYWwuY2hyb21lLmRlY2xhcmF0aXZlQ29udGVudDtcbiAgaWYgKGFwaSkge1xuICAgIC8vIFVzaW5nIGRlY2xhcmF0aXZlQ29udGVudCB0byBydW4gY29udGVudCBzY3JpcHRzIGVhcmxpZXIgdGhhbiBkb2N1bWVudF9zdGFydFxuICAgIGFwaS5vblBhZ2VDaGFuZ2VkLmdldFJ1bGVzKGFzeW5jIChbcnVsZV0pID0+IHtcbiAgICAgIGNvbnN0IGlkID0gcnVsZT8uaWQ7XG4gICAgICBjb25zdCBuZXdJZCA9IHByb2Nlc3MuZW52LklOSVRfRlVOQ19OQU1FO1xuICAgICAgaWYgKGlkID09PSBuZXdJZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgYXdhaXQgYnJvd3Nlci5kZWNsYXJhdGl2ZUNvbnRlbnQub25QYWdlQ2hhbmdlZC5yZW1vdmVSdWxlcyhbaWRdKTtcbiAgICAgIH1cbiAgICAgIGFwaS5vblBhZ2VDaGFuZ2VkLmFkZFJ1bGVzKFt7XG4gICAgICAgIGlkOiBuZXdJZCxcbiAgICAgICAgY29uZGl0aW9uczogW1xuICAgICAgICAgIG5ldyBhcGkuUGFnZVN0YXRlTWF0Y2hlcih7XG4gICAgICAgICAgICBwYWdlVXJsOiB7IHVybENvbnRhaW5zOiAnOi8vJyB9LCAvLyBlc3NlbnRpYWxseSBsaWtlIDxhbGxfdXJscz5cbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgIG5ldyBhcGkuUmVxdWVzdENvbnRlbnRTY3JpcHQoe1xuICAgICAgICAgICAganM6IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLmNvbnRlbnRfc2NyaXB0c1swXS5qcyxcbiAgICAgICAgICAgIC8vIE5vdCB1c2luZyBgYWxsRnJhbWVzOnRydWVgIGFzIHRoZXJlJ3Mgbm8gaW1wcm92ZW1lbnQgaW4gZnJhbWVzXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9XSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcjL2NvbW1vbi9ldmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRXZlbnRFbWl0dGVyKFtcbiAgJ3NjcmlwdEVkaXQnLFxuICAnc2NyaXB0Q2hhbmdlZCcsXG5dKTtcbiIsImltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZSc7XG5pbXBvcnQgeyBnZXRTY3JpcHRzIH0gZnJvbSAnLi4vdXRpbHMvZGInO1xuXG5leHBvcnQgY29uc3Qgc2NyaXB0ID0ge1xuICAvKipcbiAgICogVXBkYXRlIGFuIGV4aXN0aW5nIHNjcmlwdCBpZGVudGlmaWVkIGJ5IHRoZSBwcm92aWRlZCBpZFxuICAgKiBAcGFyYW0ge3sgaWQsIGNvZGUsIG1lc3NhZ2UsIGlzTmV3LCBjb25maWcsIGN1c3RvbSwgcHJvcHMsIHVwZGF0ZSB9fSBkYXRhXG4gICAqIEByZXR1cm4ge1Byb21pc2U8eyBpc05ldz8sIHVwZGF0ZSwgd2hlcmUgfT59XG4gICAqL1xuICB1cGRhdGU6IGNvbW1hbmRzLlBhcnNlU2NyaXB0LFxuICAvKipcbiAgICogTGlzdCBhbGwgYXZhaWxhYmxlIHNjcmlwdHMsIHdpdGhvdXQgc2NyaXB0IGNvZGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxWTVNjcmlwdFtdPn1cbiAgICovXG4gIGxpc3Q6IGFzeW5jICgpID0+IGdldFNjcmlwdHMoKSxcbiAgLyoqXG4gICAqIEdldCBzY3JpcHQgY29kZSBvZiBhbiBleGlzdGluZyBzY3JpcHRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIGdldDogY29tbWFuZHMuR2V0U2NyaXB0Q29kZSxcbiAgLyoqXG4gICAqIFJlbW92ZSBzY3JpcHRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICByZW1vdmU6IGlkID0+IGNvbW1hbmRzLk1hcmtSZW1vdmVkKHsgaWQsIHJlbW92ZWQ6IHRydWUgfSksXG59O1xuIiwiaW1wb3J0IHtcbiAgZGVib3VuY2UsIG5vcm1hbGl6ZUtleXMsIHJlcXVlc3QsIG5vb3AsIG1ha2VQYXVzZSwgZW5zdXJlQXJyYXksIHNlbmRDbWQsXG59IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IFRJTUVPVVRfSE9VUiB9IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQge1xuICBmb3JFYWNoRW50cnksIG9iamVjdFNldCwgb2JqZWN0UGljayxcbn0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCB7XG4gIGdldEV2ZW50RW1pdHRlciwgZ2V0T3B0aW9uLCBzZXRPcHRpb24sIGhvb2tPcHRpb25zLFxufSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge1xuICBzb3J0U2NyaXB0cyxcbiAgdXBkYXRlU2NyaXB0SW5mbyxcbn0gZnJvbSAnLi4vdXRpbHMvZGInO1xuaW1wb3J0IHsgc2NyaXB0IGFzIHBsdWdpblNjcmlwdCB9IGZyb20gJy4uL3BsdWdpbic7XG5cbmNvbnN0IHNlcnZpY2VOYW1lcyA9IFtdO1xuY29uc3Qgc2VydmljZUNsYXNzZXMgPSBbXTtcbmNvbnN0IHNlcnZpY2VzID0ge307XG5jb25zdCBhdXRvU3luYyA9IGRlYm91bmNlKHN5bmMsIFRJTUVPVVRfSE9VUik7XG5sZXQgd29ya2luZyA9IFByb21pc2UucmVzb2x2ZSgpO1xubGV0IHN5bmNDb25maWc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtRmlsZW5hbWUoeyBuYW1lLCB1cmkgfSkge1xuICAvLyBXaGVuIGdldCBvciByZW1vdmUsIGN1cnJlbnQgbmFtZSBzaG91bGQgYmUgcHJlZmVyZWRcbiAgaWYgKG5hbWUpIHJldHVybiBuYW1lO1xuICAvLyBvdGhlcndpc2UgdXJpIGRlcml2ZWQgbmFtZSBzaG91bGQgYmUgcHJlZmVyZWRcbiAgLy8gdXJpIGlzIGFscmVhZHkgZW5jb2RlZCBieSBgZW5jb2RlRmlsZW5hbWVgXG4gIHJldHVybiBgdm1AMi0ke3VyaX1gO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU2NyaXB0RmlsZShuYW1lKSB7XG4gIHJldHVybiAvXnZtKD86QFxcZCspPy0vLnRlc3QobmFtZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJJKG5hbWUpIHtcbiAgY29uc3QgaSA9IG5hbWUuaW5kZXhPZignLScpO1xuICBjb25zdCBbLCB2ZXJzaW9uXSA9IG5hbWUuc2xpY2UoMCwgaSkuc3BsaXQoJ0AnKTtcbiAgaWYgKHZlcnNpb24gPT09ICcyJykge1xuICAgIC8vIHVyaSBpcyBlbmNvZGVkIGJ5IGBlbmNvZGVkRmlsZW5hbWVgLCBzbyB3ZSBzaG91bGQgbm90IGRlY29kZSBpdCBoZXJlXG4gICAgcmV0dXJuIG5hbWUuc2xpY2UoaSArIDEpO1xuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChuYW1lLnNsaWNlKDMpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5hbWUuc2xpY2UoMyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdENvbmZpZygpIHtcbiAgZnVuY3Rpb24gZ2V0KGtleSwgZGVmKSB7XG4gICAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5KTtcbiAgICBrZXlzLnVuc2hpZnQoJ3N5bmMnKTtcbiAgICByZXR1cm4gZ2V0T3B0aW9uKGtleXMsIGRlZik7XG4gIH1cbiAgZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBrZXlzID0gbm9ybWFsaXplS2V5cyhrZXkpO1xuICAgIGtleXMudW5zaGlmdCgnc3luYycpO1xuICAgIHNldE9wdGlvbihrZXlzLCB2YWx1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBsZXQgY29uZmlnID0gZ2V0T3B0aW9uKCdzeW5jJyk7XG4gICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zZXJ2aWNlcykge1xuICAgICAgY29uZmlnID0ge1xuICAgICAgICBzZXJ2aWNlczoge30sXG4gICAgICB9O1xuICAgICAgc2V0KFtdLCBjb25maWcpO1xuICAgIH1cbiAgfVxuICBpbml0KCk7XG4gIHJldHVybiB7IGdldCwgc2V0IH07XG59XG5mdW5jdGlvbiBzZXJ2aWNlQ29uZmlnKG5hbWUpIHtcbiAgZnVuY3Rpb24gZ2V0S2V5cyhrZXkpIHtcbiAgICBjb25zdCBrZXlzID0gbm9ybWFsaXplS2V5cyhrZXkpO1xuICAgIGtleXMudW5zaGlmdCgnc2VydmljZXMnLCBuYW1lKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfVxuICBmdW5jdGlvbiBnZXQoa2V5LCBkZWYpIHtcbiAgICByZXR1cm4gc3luY0NvbmZpZy5nZXQoZ2V0S2V5cyhrZXkpLCBkZWYpO1xuICB9XG4gIGZ1bmN0aW9uIHNldChrZXksIHZhbCkge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jykge1xuICAgICAga2V5Ojpmb3JFYWNoRW50cnkoKFtrLCB2XSkgPT4ge1xuICAgICAgICBzeW5jQ29uZmlnLnNldChnZXRLZXlzKGspLCB2KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzeW5jQ29uZmlnLnNldChnZXRLZXlzKGtleSksIHZhbCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHN5bmNDb25maWcuc2V0KGdldEtleXMoKSwge30pO1xuICB9XG4gIHJldHVybiB7IGdldCwgc2V0LCBjbGVhciB9O1xufVxuZnVuY3Rpb24gc2VydmljZVN0YXRlKHZhbGlkU3RhdGVzLCBpbml0aWFsU3RhdGUsIG9uQ2hhbmdlKSB7XG4gIGxldCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSB8fCB2YWxpZFN0YXRlc1swXTtcbiAgZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBmdW5jdGlvbiBzZXQobmV3U3RhdGUpIHtcbiAgICBpZiAodmFsaWRTdGF0ZXMuaW5jbHVkZXMobmV3U3RhdGUpKSB7XG4gICAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgaWYgKG9uQ2hhbmdlKSBvbkNoYW5nZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgc3RhdGU6JywgbmV3U3RhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0KCk7XG4gIH1cbiAgZnVuY3Rpb24gaXMoc3RhdGVzKSB7XG4gICAgcmV0dXJuIGVuc3VyZUFycmF5KHN0YXRlcykuaW5jbHVkZXMoc3RhdGUpO1xuICB9XG4gIHJldHVybiB7IGdldCwgc2V0LCBpcyB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlcygpIHtcbiAgcmV0dXJuIHNlcnZpY2VOYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gc2VydmljZXNbbmFtZV07XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHNlcnZpY2UubmFtZSxcbiAgICAgIGRpc3BsYXlOYW1lOiBzZXJ2aWNlLmRpc3BsYXlOYW1lLFxuICAgICAgYXV0aFN0YXRlOiBzZXJ2aWNlLmF1dGhTdGF0ZS5nZXQoKSxcbiAgICAgIHN5bmNTdGF0ZTogc2VydmljZS5zeW5jU3RhdGUuZ2V0KCksXG4gICAgICBsYXN0U3luYzogc2VydmljZS5jb25maWcuZ2V0KCdtZXRhJywge30pLmxhc3RTeW5jLFxuICAgICAgcHJvZ3Jlc3M6IHNlcnZpY2UucHJvZ3Jlc3MsXG4gICAgICBwcm9wZXJ0aWVzOiBzZXJ2aWNlLnByb3BlcnRpZXMsXG4gICAgICB1c2VyQ29uZmlnOiBzZXJ2aWNlLmdldFVzZXJDb25maWcoKSxcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2NyaXB0RGF0YShzY3JpcHQsIHN5bmNWZXJzaW9uLCBleHRyYSkge1xuICBsZXQgZGF0YTtcbiAgaWYgKHN5bmNWZXJzaW9uID09PSAyKSB7XG4gICAgZGF0YSA9IHtcbiAgICAgIHZlcnNpb246IHN5bmNWZXJzaW9uLFxuICAgICAgY3VzdG9tOiBzY3JpcHQuY3VzdG9tLFxuICAgICAgY29uZmlnOiBzY3JpcHQuY29uZmlnLFxuICAgICAgcHJvcHM6IG9iamVjdFBpY2soc2NyaXB0LnByb3BzLCBbJ2xhc3RVcGRhdGVkJ10pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAoc3luY1ZlcnNpb24gPT09IDEpIHtcbiAgICBkYXRhID0ge1xuICAgICAgdmVyc2lvbjogc3luY1ZlcnNpb24sXG4gICAgICBtb3JlOiB7XG4gICAgICAgIGN1c3RvbTogc2NyaXB0LmN1c3RvbSxcbiAgICAgICAgZW5hYmxlZDogc2NyaXB0LmNvbmZpZy5lbmFibGVkLFxuICAgICAgICB1cGRhdGU6IHNjcmlwdC5jb25maWcuc2hvdWxkVXBkYXRlLFxuICAgICAgICBsYXN0VXBkYXRlZDogc2NyaXB0LnByb3BzLmxhc3RVcGRhdGVkLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKGRhdGEsIGV4dHJhKTtcbn1cbmZ1bmN0aW9uIHBhcnNlU2NyaXB0RGF0YShyYXcpIHtcbiAgY29uc3QgZGF0YSA9IHt9O1xuICB0cnkge1xuICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UocmF3KTtcbiAgICBkYXRhLmNvZGUgPSBvYmouY29kZTtcbiAgICBpZiAob2JqLnZlcnNpb24gPT09IDIpIHtcbiAgICAgIGRhdGEuY29uZmlnID0gb2JqLmNvbmZpZztcbiAgICAgIGRhdGEuY3VzdG9tID0gb2JqLmN1c3RvbTtcbiAgICAgIGRhdGEucHJvcHMgPSBvYmoucHJvcHM7XG4gICAgfSBlbHNlIGlmIChvYmoudmVyc2lvbiA9PT0gMSkge1xuICAgICAgaWYgKG9iai5tb3JlKSB7XG4gICAgICAgIGRhdGEuY3VzdG9tID0gb2JqLm1vcmUuY3VzdG9tO1xuICAgICAgICBkYXRhLmNvbmZpZyA9IG9iamVjdFB1cmlmeSh7XG4gICAgICAgICAgZW5hYmxlZDogb2JqLm1vcmUuZW5hYmxlZCxcbiAgICAgICAgICBzaG91bGRVcGRhdGU6IG9iai5tb3JlLnVwZGF0ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRhdGEucHJvcHMgPSBvYmplY3RQdXJpZnkoe1xuICAgICAgICAgIGxhc3RVcGRhdGVkOiBvYmoubW9yZS5sYXN0VXBkYXRlZCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgZGF0YS5jb2RlID0gcmF3O1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBvYmplY3RQdXJpZnkob2JqKSB7XG4gIC8vIFJlbW92ZSBrZXlzIHdpdGggdW5kZWZpbmVkIHZhbHVlc1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgb2JqLmZvckVhY2gob2JqZWN0UHVyaWZ5KTtcbiAgfSBlbHNlIGlmIChvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICBvYmo6OmZvckVhY2hFbnRyeSgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykgZGVsZXRlIG9ialtrZXldO1xuICAgICAgZWxzZSBvYmplY3RQdXJpZnkodmFsdWUpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHNlcnZpY2VGYWN0b3J5KGJhc2UpIHtcbiAgY29uc3QgU2VydmljZSA9IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9O1xuICBTZXJ2aWNlLnByb3RvdHlwZSA9IGJhc2U7XG4gIFNlcnZpY2UuZXh0ZW5kID0gZXh0ZW5kU2VydmljZTtcbiAgcmV0dXJuIFNlcnZpY2U7XG59XG5mdW5jdGlvbiBleHRlbmRTZXJ2aWNlKG9wdGlvbnMpIHtcbiAgcmV0dXJuIHNlcnZpY2VGYWN0b3J5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZSh0aGlzLnByb3RvdHlwZSksIG9wdGlvbnMpKTtcbn1cblxuY29uc3Qgb25TdGF0ZUNoYW5nZSA9IGRlYm91bmNlKCgpID0+IHtcbiAgc2VuZENtZCgnVXBkYXRlU3luYycsIGdldFN0YXRlcygpKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgQmFzZVNlcnZpY2UgPSBzZXJ2aWNlRmFjdG9yeSh7XG4gIG5hbWU6ICdiYXNlJyxcbiAgZGlzcGxheU5hbWU6ICdCYXNlU2VydmljZScsXG4gIGRlbGF5VGltZTogMTAwMCxcbiAgdXJsUHJlZml4OiAnJyxcbiAgbWV0YUZpbGU6ICdWaW9sZW50bW9ua2V5JyxcbiAgcHJvcGVydGllczoge1xuICAgIGF1dGhUeXBlOiAnb2F1dGgnLFxuICB9LFxuICBnZXRVc2VyQ29uZmlnOiBub29wLFxuICBzZXRVc2VyQ29uZmlnOiBub29wLFxuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSB7XG4gICAgICBmaW5pc2hlZDogMCxcbiAgICAgIHRvdGFsOiAwLFxuICAgIH07XG4gICAgdGhpcy5jb25maWcgPSBzZXJ2aWNlQ29uZmlnKHRoaXMubmFtZSk7XG4gICAgdGhpcy5hdXRoU3RhdGUgPSBzZXJ2aWNlU3RhdGUoW1xuICAgICAgJ2lkbGUnLFxuICAgICAgJ25vLWF1dGgnLFxuICAgICAgJ2luaXRpYWxpemluZycsXG4gICAgICAnYXV0aG9yaXppbmcnLCAvLyBpbiBjYXNlIHNvbWUgc2VydmljZXMgcmVxdWlyZSBhc3luY2hyb25vdXMgcmVxdWVzdHMgdG8gZ2V0IGFjY2Vzc190b2tlbnNcbiAgICAgICdhdXRob3JpemVkJyxcbiAgICAgICd1bmF1dGhvcml6ZWQnLFxuICAgICAgJ2Vycm9yJyxcbiAgICBdLCBudWxsLCBvblN0YXRlQ2hhbmdlKTtcbiAgICB0aGlzLnN5bmNTdGF0ZSA9IHNlcnZpY2VTdGF0ZShbXG4gICAgICAnaWRsZScsXG4gICAgICAncmVhZHknLFxuICAgICAgJ3N5bmNpbmcnLFxuICAgICAgJ2Vycm9yJyxcbiAgICBdLCBudWxsLCBvblN0YXRlQ2hhbmdlKTtcbiAgICB0aGlzLmxhc3RGZXRjaCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRoaXMuc3RhcnRTeW5jID0gdGhpcy5zeW5jRmFjdG9yeSgpO1xuICAgIGNvbnN0IGV2ZW50cyA9IGdldEV2ZW50RW1pdHRlcigpO1xuICAgIFsnb24nLCAnb2ZmJywgJ2ZpcmUnXVxuICAgIC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHRoaXNba2V5XSA9ICguLi5hcmdzKSA9PiB7IGV2ZW50c1trZXldKC4uLmFyZ3MpOyB9O1xuICAgIH0pO1xuICB9LFxuICBsb2coLi4uYXJncykge1xuICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgfSxcbiAgc3luY0ZhY3RvcnkoKSB7XG4gICAgbGV0IHByb21pc2U7XG4gICAgbGV0IGRlYm91bmNlZFJlc29sdmU7XG4gICAgY29uc3Qgc2hvdWxkU3luYyA9ICgpID0+IHRoaXMuYXV0aFN0YXRlLmlzKCdhdXRob3JpemVkJykgJiYgZ2V0Q3VycmVudCgpID09PSB0aGlzLm5hbWU7XG4gICAgY29uc3QgZ2V0UmVhZHkgPSAoKSA9PiB7XG4gICAgICBpZiAoIXNob3VsZFN5bmMoKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgdGhpcy5sb2coJ1JlYWR5IHRvIHN5bmM6JywgdGhpcy5kaXNwbGF5TmFtZSk7XG4gICAgICB0aGlzLnN5bmNTdGF0ZS5zZXQoJ3JlYWR5Jyk7XG4gICAgICB3b3JraW5nID0gd29ya2luZy50aGVuKCgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGRlYm91bmNlZFJlc29sdmUgPSBkZWJvdW5jZShyZXNvbHZlLCAxMCAqIDEwMDApO1xuICAgICAgICBkZWJvdW5jZWRSZXNvbHZlKCk7XG4gICAgICB9KSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZFN5bmMoKSkgcmV0dXJuIHRoaXMuc3luYygpO1xuICAgICAgICB0aGlzLnN5bmNTdGF0ZS5zZXQoJ2lkbGUnKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4geyBjb25zb2xlLmVycm9yKGVycik7IH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgICAgICBkZWJvdW5jZWRSZXNvbHZlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgICAgcHJvbWlzZSA9IHdvcmtpbmc7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBzdGFydFN5bmMoKSB7XG4gICAgICBpZiAoIXByb21pc2UpIGdldFJlYWR5KCk7XG4gICAgICBpZiAoZGVib3VuY2VkUmVzb2x2ZSkgZGVib3VuY2VkUmVzb2x2ZSgpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiBzdGFydFN5bmM7XG4gIH0sXG4gIHByZXBhcmVIZWFkZXJzKCkge1xuICAgIHRoaXMuaGVhZGVycyA9IHt9O1xuICB9LFxuICBwcmVwYXJlKCkge1xuICAgIHRoaXMuYXV0aFN0YXRlLnNldCgnaW5pdGlhbGl6aW5nJyk7XG4gICAgcmV0dXJuICh0aGlzLmluaXRUb2tlbigpID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMudXNlcigpKSA6IFByb21pc2UucmVqZWN0KHtcbiAgICAgIHR5cGU6ICduby1hdXRoJyxcbiAgICB9KSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmF1dGhTdGF0ZS5zZXQoJ2F1dGhvcml6ZWQnKTtcbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICBpZiAoWyduby1hdXRoJywgJ3VuYXV0aG9yaXplZCddLmluY2x1ZGVzKGVycj8udHlwZSkpIHtcbiAgICAgICAgdGhpcy5hdXRoU3RhdGUuc2V0KGVyci50eXBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgdGhpcy5hdXRoU3RhdGUuc2V0KCdlcnJvcicpO1xuICAgICAgfVxuICAgICAgdGhpcy5zeW5jU3RhdGUuc2V0KCdpZGxlJyk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH0sXG4gIGNoZWNrU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlKClcbiAgICAudGhlbigoKSA9PiB0aGlzLnN0YXJ0U3luYygpKTtcbiAgfSxcbiAgdXNlcjogbm9vcCxcbiAgYWNxdWlyZUxvY2s6IG5vb3AsXG4gIHJlbGVhc2VMb2NrOiBub29wLFxuICBoYW5kbGVNZXRhRXJyb3IoZXJyKSB7XG4gICAgdGhyb3cgZXJyO1xuICB9LFxuICBnZXRNZXRhKCkge1xuICAgIHJldHVybiB0aGlzLmdldCh7IG5hbWU6IHRoaXMubWV0YUZpbGUgfSlcbiAgICAudGhlbihkYXRhID0+IEpTT04ucGFyc2UoZGF0YSkpXG4gICAgLmNhdGNoKGVyciA9PiB0aGlzLmhhbmRsZU1ldGFFcnJvcihlcnIpKVxuICAgIC50aGVuKGRhdGEgPT4gKHtcbiAgICAgIG5hbWU6IHRoaXMubWV0YUZpbGUsXG4gICAgICBkYXRhLFxuICAgIH0pKTtcbiAgfSxcbiAgaW5pdFRva2VuKCkge1xuICAgIHRoaXMucHJlcGFyZUhlYWRlcnMoKTtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuY29uZmlnLmdldCgndG9rZW4nKTtcbiAgICB0aGlzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiBudWxsO1xuICAgIHJldHVybiAhIXRva2VuO1xuICB9LFxuICBsb2FkRGF0YShvcHRpb25zKSB7XG4gICAgY29uc3QgeyBwcm9ncmVzcyB9ID0gdGhpcztcbiAgICBjb25zdCB7IGRlbGF5ID0gdGhpcy5kZWxheVRpbWUgfSA9IG9wdGlvbnM7XG4gICAgbGV0IGxhc3RGZXRjaCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGlmIChkZWxheSkge1xuICAgICAgbGFzdEZldGNoID0gdGhpcy5sYXN0RmV0Y2hcbiAgICAgIC50aGVuKHRzID0+IG1ha2VQYXVzZShkZWxheSAtIChEYXRlLm5vdygpIC0gdHMpKSlcbiAgICAgIC50aGVuKCgpID0+IERhdGUubm93KCkpO1xuICAgICAgdGhpcy5sYXN0RmV0Y2ggPSBsYXN0RmV0Y2g7XG4gICAgfVxuICAgIHByb2dyZXNzLnRvdGFsICs9IDE7XG4gICAgb25TdGF0ZUNoYW5nZSgpO1xuICAgIHJldHVybiBsYXN0RmV0Y2gudGhlbigoKSA9PiB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmhlYWRlcnMsIG9wdGlvbnMuaGVhZGVycyk7XG4gICAgICBsZXQgeyB1cmwgfSA9IG9wdGlvbnM7XG4gICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgdXJsID0gKG9wdGlvbnMucHJlZml4ID8/IHRoaXMudXJsUHJlZml4KSArIHVybDtcbiAgICAgIHJldHVybiByZXF1ZXN0KHVybCwgb3B0aW9ucyk7XG4gICAgfSlcbiAgICAudGhlbigoeyBkYXRhIH0pID0+ICh7IGRhdGEgfSksIGVycm9yID0+ICh7IGVycm9yIH0pKVxuICAgIC50aGVuKCh7IGRhdGEsIGVycm9yIH0pID0+IHtcbiAgICAgIHByb2dyZXNzLmZpbmlzaGVkICs9IDE7XG4gICAgICBvblN0YXRlQ2hhbmdlKCk7XG4gICAgICBpZiAoZXJyb3IpIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0TG9jYWxEYXRhKCkge1xuICAgIHJldHVybiBwbHVnaW5TY3JpcHQubGlzdCgpO1xuICB9LFxuICBnZXRTeW5jRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNZXRhKClcbiAgICAudGhlbihyZW1vdGVNZXRhID0+IFByb21pc2UuYWxsKFtcbiAgICAgIHJlbW90ZU1ldGEsXG4gICAgICB0aGlzLmxpc3QoKSxcbiAgICAgIHRoaXMuZ2V0TG9jYWxEYXRhKCksXG4gICAgXSkpO1xuICB9LFxuICBzeW5jKCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSB7XG4gICAgICBmaW5pc2hlZDogMCxcbiAgICAgIHRvdGFsOiAwLFxuICAgIH07XG4gICAgdGhpcy5zeW5jU3RhdGUuc2V0KCdzeW5jaW5nJyk7XG4gICAgLy8gQXZvaWQgc2ltdWx0YW5lb3VzIHJlcXVlc3RzXG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZSgpXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5nZXRTeW5jRGF0YSgpKVxuICAgIC50aGVuKGRhdGEgPT4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuYWNxdWlyZUxvY2soKSkudGhlbigoKSA9PiBkYXRhKSlcbiAgICAudGhlbigoW3JlbW90ZU1ldGEsIHJlbW90ZURhdGEsIGxvY2FsRGF0YV0pID0+IHtcbiAgICAgIGNvbnN0IHJlbW90ZU1ldGFEYXRhID0gcmVtb3RlTWV0YS5kYXRhIHx8IHt9O1xuICAgICAgY29uc3QgcmVtb3RlTWV0YUluZm8gPSByZW1vdGVNZXRhRGF0YS5pbmZvIHx8IHt9O1xuICAgICAgY29uc3QgcmVtb3RlVGltZXN0YW1wID0gcmVtb3RlTWV0YURhdGEudGltZXN0YW1wIHx8IDA7XG4gICAgICBsZXQgcmVtb3RlQ2hhbmdlZCA9ICFyZW1vdGVUaW1lc3RhbXBcbiAgICAgICAgfHwgT2JqZWN0LmtleXMocmVtb3RlTWV0YUluZm8pLmxlbmd0aCAhPT0gcmVtb3RlRGF0YS5sZW5ndGg7XG4gICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgZ2xvYmFsTGFzdE1vZGlmaWVkID0gZ2V0T3B0aW9uKCdsYXN0TW9kaWZpZWQnKTtcbiAgICAgIGNvbnN0IHJlbW90ZUl0ZW1NYXAgPSB7fTtcbiAgICAgIGNvbnN0IGxvY2FsTWV0YSA9IHRoaXMuY29uZmlnLmdldCgnbWV0YScsIHt9KTtcbiAgICAgIGNvbnN0IGZpcnN0U3luYyA9ICFsb2NhbE1ldGEudGltZXN0YW1wO1xuICAgICAgY29uc3Qgb3V0ZGF0ZWQgPSBmaXJzdFN5bmMgfHwgcmVtb3RlVGltZXN0YW1wID4gbG9jYWxNZXRhLnRpbWVzdGFtcDtcbiAgICAgIHRoaXMubG9nKCdGaXJzdCBzeW5jOicsIGZpcnN0U3luYyk7XG4gICAgICB0aGlzLmxvZygnT3V0ZGF0ZWQ6Jywgb3V0ZGF0ZWQsICcoJywgJ2xvY2FsOicsIGxvY2FsTWV0YS50aW1lc3RhbXAsICdyZW1vdGU6JywgcmVtb3RlVGltZXN0YW1wLCAnKScpO1xuICAgICAgY29uc3QgcHV0TG9jYWwgPSBbXTtcbiAgICAgIGNvbnN0IHB1dFJlbW90ZSA9IFtdO1xuICAgICAgY29uc3QgZGVsUmVtb3RlID0gW107XG4gICAgICBjb25zdCBkZWxMb2NhbCA9IFtdO1xuICAgICAgY29uc3QgdXBkYXRlTG9jYWwgPSBbXTtcbiAgICAgIHJlbW90ZU1ldGFEYXRhLmluZm8gPSByZW1vdGVEYXRhLnJlZHVjZSgoaW5mbywgaXRlbSkgPT4ge1xuICAgICAgICByZW1vdGVJdGVtTWFwW2l0ZW0udXJpXSA9IGl0ZW07XG4gICAgICAgIGxldCBpdGVtSW5mbyA9IHJlbW90ZU1ldGFJbmZvW2l0ZW0udXJpXTtcbiAgICAgICAgaWYgKCFpdGVtSW5mbykge1xuICAgICAgICAgIGl0ZW1JbmZvID0ge307XG4gICAgICAgICAgcmVtb3RlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mb1tpdGVtLnVyaV0gPSBpdGVtSW5mbztcbiAgICAgICAgaWYgKCFpdGVtSW5mby5tb2RpZmllZCkge1xuICAgICAgICAgIGl0ZW1JbmZvLm1vZGlmaWVkID0gbm93O1xuICAgICAgICAgIHJlbW90ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgfSwge30pO1xuICAgICAgbG9jYWxEYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgeyBwcm9wczogeyB1cmksIHBvc2l0aW9uLCBsYXN0TW9kaWZpZWQgfSB9ID0gaXRlbTtcbiAgICAgICAgY29uc3QgcmVtb3RlSW5mbyA9IHJlbW90ZU1ldGFEYXRhLmluZm9bdXJpXTtcbiAgICAgICAgY29uc3QgcmVtb3RlSXRlbSA9IHJlbW90ZUl0ZW1NYXBbdXJpXTtcbiAgICAgICAgaWYgKHJlbW90ZUluZm8gJiYgcmVtb3RlSXRlbSkge1xuICAgICAgICAgIGlmIChmaXJzdFN5bmMgfHwgIWxhc3RNb2RpZmllZCB8fCByZW1vdGVJbmZvLm1vZGlmaWVkID4gbGFzdE1vZGlmaWVkKSB7XG4gICAgICAgICAgICBwdXRMb2NhbC5wdXNoKHsgbG9jYWw6IGl0ZW0sIHJlbW90ZTogcmVtb3RlSXRlbSwgaW5mbzogcmVtb3RlSW5mbyB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlbW90ZUluZm8ubW9kaWZpZWQgPCBsYXN0TW9kaWZpZWQpIHtcbiAgICAgICAgICAgICAgcHV0UmVtb3RlLnB1c2goeyBsb2NhbDogaXRlbSwgcmVtb3RlOiByZW1vdGVJdGVtIH0pO1xuICAgICAgICAgICAgICByZW1vdGVJbmZvLm1vZGlmaWVkID0gbGFzdE1vZGlmaWVkO1xuICAgICAgICAgICAgICByZW1vdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW1vdGVJbmZvLnBvc2l0aW9uICE9PSBwb3NpdGlvbikge1xuICAgICAgICAgICAgICBpZiAocmVtb3RlSW5mby5wb3NpdGlvbiAmJiBnbG9iYWxMYXN0TW9kaWZpZWQgPD0gcmVtb3RlVGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTG9jYWwucHVzaCh7IGxvY2FsOiBpdGVtLCByZW1vdGU6IHJlbW90ZUl0ZW0sIGluZm86IHJlbW90ZUluZm8gfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3RlSW5mby5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHJlbW90ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSByZW1vdGVJdGVtTWFwW3VyaV07XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RTeW5jIHx8ICFvdXRkYXRlZCB8fCBsYXN0TW9kaWZpZWQgPiByZW1vdGVUaW1lc3RhbXApIHtcbiAgICAgICAgICBwdXRSZW1vdGUucHVzaCh7IGxvY2FsOiBpdGVtIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbExvY2FsLnB1c2goeyBsb2NhbDogaXRlbSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZW1vdGVJdGVtTWFwOjpmb3JFYWNoRW50cnkoKFt1cmksIGl0ZW1dKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZm8gPSByZW1vdGVNZXRhRGF0YS5pbmZvW3VyaV07XG4gICAgICAgIGlmIChvdXRkYXRlZCkge1xuICAgICAgICAgIHB1dExvY2FsLnB1c2goeyByZW1vdGU6IGl0ZW0sIGluZm8gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsUmVtb3RlLnB1c2goeyByZW1vdGU6IGl0ZW0gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcHJvbWlzZVF1ZXVlID0gW1xuICAgICAgICAuLi5wdXRMb2NhbC5tYXAoKHsgcmVtb3RlLCBpbmZvIH0pID0+IHtcbiAgICAgICAgICB0aGlzLmxvZygnRG93bmxvYWQgc2NyaXB0OicsIHJlbW90ZS51cmkpO1xuICAgICAgICAgIHJldHVybiB0aGlzLmdldChyZW1vdGUpXG4gICAgICAgICAgLnRoZW4oKHJhdykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHBhcnNlU2NyaXB0RGF0YShyYXcpO1xuICAgICAgICAgICAgLy8gSW52YWxpZCBkYXRhXG4gICAgICAgICAgICBpZiAoIWRhdGEuY29kZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGluZm8ubW9kaWZpZWQpIG9iamVjdFNldChkYXRhLCAncHJvcHMubGFzdE1vZGlmaWVkJywgaW5mby5tb2RpZmllZCk7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICtpbmZvLnBvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uKSBkYXRhLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgICAgICBpZiAoIWdldE9wdGlvbignc3luY1NjcmlwdFN0YXR1cycpICYmIGRhdGEuY29uZmlnKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBkYXRhLmNvbmZpZy5lbmFibGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBsdWdpblNjcmlwdC51cGRhdGUoZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICAuLi5wdXRSZW1vdGUubWFwKCh7IGxvY2FsLCByZW1vdGUgfSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nKCdVcGxvYWQgc2NyaXB0OicsIGxvY2FsLnByb3BzLnVyaSk7XG4gICAgICAgICAgcmV0dXJuIHBsdWdpblNjcmlwdC5nZXQobG9jYWwucHJvcHMuaWQpXG4gICAgICAgICAgLnRoZW4oKGNvZGUpID0+IHtcbiAgICAgICAgICAgIC8vIFhYWCB1c2UgdmVyc2lvbiAxIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBWaW9sZW50bW9ua2V5IG9uIG90aGVyIHBsYXRmb3Jtc1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGdldFNjcmlwdERhdGEobG9jYWwsIDEsIHsgY29kZSB9KTtcbiAgICAgICAgICAgIHJlbW90ZU1ldGFEYXRhLmluZm9bbG9jYWwucHJvcHMudXJpXSA9IHtcbiAgICAgICAgICAgICAgbW9kaWZpZWQ6IGxvY2FsLnByb3BzLmxhc3RNb2RpZmllZCxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGxvY2FsLnByb3BzLnBvc2l0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlbW90ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHV0KFxuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCByZW1vdGUsIHtcbiAgICAgICAgICAgICAgICB1cmk6IGxvY2FsLnByb3BzLnVyaSxcbiAgICAgICAgICAgICAgICBuYW1lOiBudWxsLCAvLyBwcmVmZXIgdXNpbmcgdXJpIG9uIFBVVFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgLi4uZGVsUmVtb3RlLm1hcCgoeyByZW1vdGUgfSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nKCdSZW1vdmUgcmVtb3RlIHNjcmlwdDonLCByZW1vdGUudXJpKTtcbiAgICAgICAgICBkZWxldGUgcmVtb3RlTWV0YURhdGEuaW5mb1tyZW1vdGUudXJpXTtcbiAgICAgICAgICByZW1vdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUocmVtb3RlKTtcbiAgICAgICAgfSksXG4gICAgICAgIC4uLmRlbExvY2FsLm1hcCgoeyBsb2NhbCB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2coJ1JlbW92ZSBsb2NhbCBzY3JpcHQ6JywgbG9jYWwucHJvcHMudXJpKTtcbiAgICAgICAgICByZXR1cm4gcGx1Z2luU2NyaXB0LnJlbW92ZShsb2NhbC5wcm9wcy5pZCk7XG4gICAgICAgIH0pLFxuICAgICAgICAuLi51cGRhdGVMb2NhbC5tYXAoKHsgbG9jYWwsIGluZm8gfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHVwZGF0ZXMgPSB7fTtcbiAgICAgICAgICBpZiAoaW5mby5wb3NpdGlvbikge1xuICAgICAgICAgICAgdXBkYXRlcy5wcm9wcyA9IHsgcG9zaXRpb246IGluZm8ucG9zaXRpb24gfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHVwZGF0ZVNjcmlwdEluZm8obG9jYWwucHJvcHMuaWQsIHVwZGF0ZXMpO1xuICAgICAgICB9KSxcbiAgICAgIF07XG4gICAgICBwcm9taXNlUXVldWUucHVzaChQcm9taXNlLmFsbChwcm9taXNlUXVldWUpLnRoZW4oKCkgPT4gc29ydFNjcmlwdHMoKSkudGhlbigoY2hhbmdlZCkgPT4ge1xuICAgICAgICBpZiAoIWNoYW5nZWQpIHJldHVybjtcbiAgICAgICAgcmVtb3RlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBwbHVnaW5TY3JpcHQubGlzdCgpXG4gICAgICAgIC50aGVuKChzY3JpcHRzKSA9PiB7XG4gICAgICAgICAgc2NyaXB0cy5mb3JFYWNoKChzY3JpcHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlbW90ZUluZm8gPSByZW1vdGVNZXRhRGF0YS5pbmZvW3NjcmlwdC5wcm9wcy51cmldO1xuICAgICAgICAgICAgaWYgKHJlbW90ZUluZm8pIHJlbW90ZUluZm8ucG9zaXRpb24gPSBzY3JpcHQucHJvcHMucG9zaXRpb247XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSkpO1xuICAgICAgcHJvbWlzZVF1ZXVlLnB1c2goUHJvbWlzZS5hbGwocHJvbWlzZVF1ZXVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgaWYgKHJlbW90ZUNoYW5nZWQpIHtcbiAgICAgICAgICByZW1vdGVNZXRhRGF0YS50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5wdXQocmVtb3RlTWV0YSwgSlNPTi5zdHJpbmdpZnkocmVtb3RlTWV0YURhdGEpKSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxNZXRhLnRpbWVzdGFtcCA9IHJlbW90ZU1ldGFEYXRhLnRpbWVzdGFtcDtcbiAgICAgICAgbG9jYWxNZXRhLmxhc3RTeW5jID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5jb25maWcuc2V0KCdtZXRhJywgbG9jYWxNZXRhKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgIH0pKTtcbiAgICAgIC8vIGlnbm9yZSBlcnJvcnMgdG8gZW5zdXJlIGFsbCBwcm9taXNlcyBhcmUgZnVsZmlsbGVkXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZVF1ZXVlLm1hcChwcm9taXNlID0+IHByb21pc2UudGhlbihub29wLCBlcnIgPT4gZXJyIHx8IHRydWUpKSlcbiAgICAgIC50aGVuKGVycm9ycyA9PiBlcnJvcnMuZmlsdGVyKEJvb2xlYW4pKVxuICAgICAgLnRoZW4oKGVycm9ycykgPT4geyBpZiAoZXJyb3JzLmxlbmd0aCkgdGhyb3cgZXJyb3JzOyB9KTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc3luY1N0YXRlLnNldCgnaWRsZScpO1xuICAgICAgdGhpcy5sb2coJ1N5bmMgZmluaXNoZWQ6JywgdGhpcy5kaXNwbGF5TmFtZSk7XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgdGhpcy5zeW5jU3RhdGUuc2V0KCdlcnJvcicpO1xuICAgICAgdGhpcy5sb2coJ0ZhaWxlZCBzeW5jaW5nOicsIHRoaXMuZGlzcGxheU5hbWUpO1xuICAgICAgdGhpcy5sb2coZXJyKTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IFByb21pc2UucmVzb2x2ZSh0aGlzLnJlbGVhc2VMb2NrKCkpLmNhdGNoKG5vb3ApKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIoRmFjdG9yeSkge1xuICBzZXJ2aWNlQ2xhc3Nlcy5wdXNoKEZhY3RvcnkpO1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudCgpIHtcbiAgcmV0dXJuIHN5bmNDb25maWcuZ2V0KCdjdXJyZW50Jyk7XG59XG5mdW5jdGlvbiBnZXRTZXJ2aWNlKG5hbWUpIHtcbiAgcmV0dXJuIHNlcnZpY2VzW25hbWUgfHwgZ2V0Q3VycmVudCgpXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICBpZiAoIXN5bmNDb25maWcpIHtcbiAgICBzeW5jQ29uZmlnID0gaW5pdENvbmZpZygpO1xuICAgIHNlcnZpY2VDbGFzc2VzLmZvckVhY2goKEZhY3RvcnkpID0+IHtcbiAgICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgRmFjdG9yeSgpO1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBzZXJ2aWNlO1xuICAgICAgc2VydmljZU5hbWVzLnB1c2gobmFtZSk7XG4gICAgICBzZXJ2aWNlc1tuYW1lXSA9IHNlcnZpY2U7XG4gICAgfSk7XG4gIH1cbiAgc3luYygpO1xufVxuXG5mdW5jdGlvbiBzeW5jT25lKHNlcnZpY2UpIHtcbiAgaWYgKHNlcnZpY2Uuc3luY1N0YXRlLmlzKFsncmVhZHknLCAnc3luY2luZyddKSkgcmV0dXJuO1xuICBpZiAoc2VydmljZS5hdXRoU3RhdGUuaXMoWydpZGxlJywgJ2Vycm9yJ10pKSByZXR1cm4gc2VydmljZS5jaGVja1N5bmMoKTtcbiAgaWYgKHNlcnZpY2UuYXV0aFN0YXRlLmlzKCdhdXRob3JpemVkJykpIHJldHVybiBzZXJ2aWNlLnN0YXJ0U3luYygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3luYygpIHtcbiAgY29uc3Qgc2VydmljZSA9IGdldFNlcnZpY2UoKTtcbiAgcmV0dXJuIHNlcnZpY2UgJiYgUHJvbWlzZS5yZXNvbHZlKHN5bmNPbmUoc2VydmljZSkpLnRoZW4oYXV0b1N5bmMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aG9yaXplKCkge1xuICBjb25zdCBzZXJ2aWNlID0gZ2V0U2VydmljZSgpO1xuICBpZiAoc2VydmljZSkgc2VydmljZS5hdXRob3JpemUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldm9rZSgpIHtcbiAgY29uc3Qgc2VydmljZSA9IGdldFNlcnZpY2UoKTtcbiAgaWYgKHNlcnZpY2UpIHNlcnZpY2UucmV2b2tlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb25maWcoY29uZmlnKSB7XG4gIGNvbnN0IHNlcnZpY2UgPSBnZXRTZXJ2aWNlKCk7XG4gIGlmIChzZXJ2aWNlKSB7XG4gICAgc2VydmljZS5zZXRVc2VyQ29uZmlnKGNvbmZpZyk7XG4gICAgcmV0dXJuIHNlcnZpY2UuY2hlY2tTeW5jKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5BdXRoUGFnZSh1cmwsIHJlZGlyZWN0VXJpKSB7XG4gIHVucmVnaXN0ZXJXZWJSZXF1ZXN0KCk7IC8vIG90aGVyd2lzZSBvdXIgbmV3IHRhYklkIHdpbGwgYmUgaWdub3JlZFxuICBicm93c2VyLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKG9uQmVmb3JlUmVxdWVzdCwge1xuICAgIHVybHM6IFtgJHtyZWRpcmVjdFVyaX0qYF0sXG4gICAgdHlwZXM6IFsnbWFpbl9mcmFtZSddLFxuICAgIHRhYklkOiAoYXdhaXQgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybCB9KSkuaWQsXG4gIH0sIFsnYmxvY2tpbmcnXSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXNwb25zZURldGFpbHN9IGluZm9cbiAqIEByZXR1cm5zIHtjaHJvbWUud2ViUmVxdWVzdC5CbG9ja2luZ1Jlc3BvbnNlfVxuICovXG5mdW5jdGlvbiBvbkJlZm9yZVJlcXVlc3QoaW5mbykge1xuICBpZiAoZ2V0U2VydmljZSgpLmNoZWNrQXV0aD8uKGluZm8udXJsKSkge1xuICAgIGJyb3dzZXIudGFicy5yZW1vdmUoaW5mby50YWJJZCk7XG4gICAgLy8gSWYgd2UgdW5yZWdpc3RlciB3aXRob3V0IHNldFRpbWVvdXQsIEFQSSB3aWxsIGlnbm9yZSB7IGNhbmNlbDogdHJ1ZSB9XG4gICAgc2V0VGltZW91dCh1bnJlZ2lzdGVyV2ViUmVxdWVzdCwgMCk7XG4gICAgcmV0dXJuIHsgY2FuY2VsOiB0cnVlIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5yZWdpc3RlcldlYlJlcXVlc3QoKSB7XG4gIGJyb3dzZXIud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QucmVtb3ZlTGlzdGVuZXIob25CZWZvcmVSZXF1ZXN0KTtcbn1cblxuaG9va09wdGlvbnMoKGRhdGEpID0+IHtcbiAgY29uc3QgdmFsdWUgPSBkYXRhPy5bJ3N5bmMuY3VycmVudCddO1xuICBpZiAodmFsdWUpIGluaXRpYWxpemUoKTtcbn0pO1xuIiwiaW1wb3J0IHsgbG9hZFF1ZXJ5LCBkdW1wUXVlcnkgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge1xuICBnZXRVUkksIGdldEl0ZW1GaWxlbmFtZSwgQmFzZVNlcnZpY2UsIGlzU2NyaXB0RmlsZSwgcmVnaXN0ZXIsXG4gIG9wZW5BdXRoUGFnZSxcbn0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgY29uZmlnID0ge1xuICBjbGllbnRfaWQ6ICdmMHExMnp1cDJ1eXM1dzgnLFxuICByZWRpcmVjdF91cmk6ICdodHRwczovL3Zpb2xlbnRtb25rZXkuZ2l0aHViLmlvL2F1dGhfZHJvcGJveC5odG1sJyxcbn07XG5cbmNvbnN0IGVzY1JFID0gL1tcXHUwMDdmLVxcdWZmZmZdL2c7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29udHJvbC1yZWdleFxuY29uc3QgZXNjRnVuYyA9IG0gPT4gYFxcXFx1JHsobS5jaGFyQ29kZUF0KDApICsgMHgxMDAwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpfWA7XG5cbmZ1bmN0aW9uIGpzb25TdHJpbmdpZnlTYWZlKG9iaikge1xuICBjb25zdCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoZXNjUkUsIGVzY0Z1bmMpO1xufVxuXG5jb25zdCBEcm9wYm94ID0gQmFzZVNlcnZpY2UuZXh0ZW5kKHtcbiAgbmFtZTogJ2Ryb3Bib3gnLFxuICBkaXNwbGF5TmFtZTogJ0Ryb3Bib3gnLFxuICB1c2VyKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZHJvcGJveGFwaS5jb20vMi91c2Vycy9nZXRfY3VycmVudF9hY2NvdW50JyxcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgdHlwZTogJ3VuYXV0aG9yaXplZCcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgZGF0YTogZXJyLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGhhbmRsZU1ldGFFcnJvcihyZXMpIHtcbiAgICBpZiAocmVzLnN0YXR1cyAhPT0gNDA5KSB0aHJvdyByZXM7XG4gIH0sXG4gIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICdodHRwczovL2FwaS5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL2xpc3RfZm9sZGVyJyxcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICB9LFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbihkYXRhID0+IChcbiAgICAgIGRhdGEuZW50cmllcy5maWx0ZXIoaXRlbSA9PiBpdGVtWycudGFnJ10gPT09ICdmaWxlJyAmJiBpc1NjcmlwdEZpbGUoaXRlbS5uYW1lKSkubWFwKG5vcm1hbGl6ZSlcbiAgICApKTtcbiAgfSxcbiAgZ2V0KGl0ZW0pIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9jb250ZW50LmRyb3Bib3hhcGkuY29tLzIvZmlsZXMvZG93bmxvYWQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnRHJvcGJveC1BUEktQXJnJzoganNvblN0cmluZ2lmeVNhZmUoe1xuICAgICAgICAgIHBhdGg6IGAvJHtuYW1lfWAsXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgcHV0KGl0ZW0sIGRhdGEpIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9jb250ZW50LmRyb3Bib3hhcGkuY29tLzIvZmlsZXMvdXBsb2FkJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0Ryb3Bib3gtQVBJLUFyZyc6IGpzb25TdHJpbmdpZnlTYWZlKHtcbiAgICAgICAgICBwYXRoOiBgLyR7bmFtZX1gLFxuICAgICAgICAgIG1vZGU6ICdvdmVyd3JpdGUnLFxuICAgICAgICB9KSxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGRhdGEsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKG5vcm1hbGl6ZSk7XG4gIH0sXG4gIHJlbW92ZShpdGVtKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmRyb3Bib3hhcGkuY29tLzIvZmlsZXMvZGVsZXRlJyxcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgcGF0aDogYC8ke25hbWV9YCxcbiAgICAgIH0sXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKG5vcm1hbGl6ZSk7XG4gIH0sXG4gIGF1dGhvcml6ZSgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICByZXNwb25zZV90eXBlOiAndG9rZW4nLFxuICAgICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50X2lkLFxuICAgICAgcmVkaXJlY3RfdXJpOiBjb25maWcucmVkaXJlY3RfdXJpLFxuICAgIH07XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vd3d3LmRyb3Bib3guY29tL29hdXRoMi9hdXRob3JpemU/JHtkdW1wUXVlcnkocGFyYW1zKX1gO1xuICAgIG9wZW5BdXRoUGFnZSh1cmwsIGNvbmZpZy5yZWRpcmVjdF91cmkpO1xuICB9LFxuICBhdXRob3JpemVkKHJhdykge1xuICAgIGNvbnN0IGRhdGEgPSBsb2FkUXVlcnkocmF3KTtcbiAgICBpZiAoZGF0YS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHRoaXMuY29uZmlnLnNldCh7XG4gICAgICAgIHVpZDogZGF0YS51aWQsXG4gICAgICAgIHRva2VuOiBkYXRhLmFjY2Vzc190b2tlbixcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY2hlY2tBdXRoKHVybCkge1xuICAgIGNvbnN0IHJlZGlyZWN0VXJpID0gYCR7Y29uZmlnLnJlZGlyZWN0X3VyaX0jYDtcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgocmVkaXJlY3RVcmkpKSB7XG4gICAgICB0aGlzLmF1dGhvcml6ZWQodXJsLnNsaWNlKHJlZGlyZWN0VXJpLmxlbmd0aCkpO1xuICAgICAgdGhpcy5jaGVja1N5bmMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcbiAgcmV2b2tlKCkge1xuICAgIHRoaXMuY29uZmlnLnNldCh7XG4gICAgICB1aWQ6IG51bGwsXG4gICAgICB0b2tlbjogbnVsbCxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlKCk7XG4gIH0sXG59KTtcbnJlZ2lzdGVyKERyb3Bib3gpO1xuXG5mdW5jdGlvbiBub3JtYWxpemUoaXRlbSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICBzaXplOiBpdGVtLnNpemUsXG4gICAgdXJpOiBnZXRVUkkoaXRlbS5uYW1lKSxcbiAgICAvLyBtb2RpZmllZDogbmV3IERhdGUoaXRlbS5zZXJ2ZXJfbW9kaWZpZWQpLmdldFRpbWUoKSxcbiAgICAvLyBpc0RlbGV0ZWQ6IGl0ZW0uaXNfZGVsZXRlZCxcbiAgfTtcbn1cbiIsIi8vIFJlZmVyZW5jZTpcbi8vIC0gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vZHJpdmUvdjMvcmVmZXJlbmNlL2ZpbGVzXG4vLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvZ29vZ2xlLWFwaS1ub2RlanMtY2xpZW50XG5pbXBvcnQgeyBnZXRVbmlxSWQsIG5vb3AgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBvYmplY3RHZXQgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHsgZHVtcFF1ZXJ5LCBub3RpZnkgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge1xuICBnZXRVUkksIGdldEl0ZW1GaWxlbmFtZSwgQmFzZVNlcnZpY2UsIHJlZ2lzdGVyLCBpc1NjcmlwdEZpbGUsXG4gIG9wZW5BdXRoUGFnZSxcbn0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgY29uZmlnID0ge1xuICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52LlNZTkNfR09PR0xFX0NMSUVOVF9JRCxcbiAgY2xpZW50X3NlY3JldDogcHJvY2Vzcy5lbnYuU1lOQ19HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgcmVkaXJlY3RfdXJpOiAnaHR0cHM6Ly92aW9sZW50bW9ua2V5LmdpdGh1Yi5pby9hdXRoX2dvb2dsZWRyaXZlLmh0bWwnLFxuICBzY29wZTogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZHJpdmUuYXBwZGF0YScsXG59O1xuY29uc3QgVU5BVVRIT1JJWkVEID0geyBzdGF0dXM6ICdVTkFVVEhPUklaRUQnIH07XG5cbmNvbnN0IEdvb2dsZURyaXZlID0gQmFzZVNlcnZpY2UuZXh0ZW5kKHtcbiAgbmFtZTogJ2dvb2dsZWRyaXZlJyxcbiAgZGlzcGxheU5hbWU6ICdHb29nbGUgRHJpdmUnLFxuICB1cmxQcmVmaXg6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kcml2ZS92MycsXG4gIHJlZnJlc2hUb2tlbigpIHtcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSB0aGlzLmNvbmZpZy5nZXQoJ3JlZnJlc2hfdG9rZW4nKTtcbiAgICBpZiAoIXJlZnJlc2hUb2tlbikgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgdHlwZTogJ3VuYXV0aG9yaXplZCcgfSk7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXplZCh7XG4gICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4sXG4gICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB0aGlzLnByZXBhcmUoKSk7XG4gIH0sXG4gIHVzZXIoKSB7XG4gICAgY29uc3QgcmVxdWVzdFVzZXIgPSAoKSA9PiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92My90b2tlbmluZm8/JHtkdW1wUXVlcnkoe1xuICAgICAgICBhY2Nlc3NfdG9rZW46IHRoaXMuY29uZmlnLmdldCgndG9rZW4nKSxcbiAgICAgIH0pfWAsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVxdWVzdFVzZXIoKVxuICAgIC50aGVuKChpbmZvKSA9PiB7XG4gICAgICAvLyBJZiBhY2Nlc3Mgd2FzIGdyYW50ZWQgd2l0aCBhY2Nlc3NfdHlwZT1vbmxpbmUsIHJldm9rZSBpdC5cbiAgICAgIGlmIChpbmZvLmFjY2Vzc190eXBlID09PSAnb25saW5lJykge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgdXJsOiBgaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3Jldm9rZT90b2tlbj0ke3RoaXMuY29uZmlnLmdldCgndG9rZW4nKX1gLFxuICAgICAgICAgIHByZWZpeDogJycsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBub3RpZnkoe1xuICAgICAgICAgICAgdGl0bGU6ICdTeW5jIFVwZ3JhZGVkJyxcbiAgICAgICAgICAgIGJvZHk6ICdQbGVhc2UgcmVhdXRob3JpemUgYWNjZXNzIHRvIHlvdXIgR29vZ2xlIERyaXZlIHRvIGNvbXBsZXRlIHRoZSB1cGdyYWRhdGlvbi4nLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnT25saW5lIGFjY2VzcyByZXZva2VkLicpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmZvLnNjb3BlICE9PSBjb25maWcuc2NvcGUpIHJldHVybiBQcm9taXNlLnJlamVjdChVTkFVVEhPUklaRUQpO1xuICAgIH0pXG4gICAgLmNhdGNoKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMgPT09IFVOQVVUSE9SSVpFRCB8fCByZXMuc3RhdHVzID09PSA0MDAgJiYgb2JqZWN0R2V0KHJlcywgJ2RhdGEuZXJyb3JfZGVzY3JpcHRpb24nKSA9PT0gJ0ludmFsaWQgVmFsdWUnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hUb2tlbigpLnRoZW4ocmVxdWVzdFVzZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgZGF0YTogcmVzLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGdldFN5bmNEYXRhKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIHNwYWNlczogJ2FwcERhdGFGb2xkZXInLFxuICAgICAgZmllbGRzOiAnZmlsZXMoaWQsbmFtZSxzaXplKScsXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6IGAvZmlsZXM/JHtkdW1wUXVlcnkocGFyYW1zKX1gLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbigoeyBmaWxlcyB9KSA9PiB7XG4gICAgICBsZXQgbWV0YUZpbGU7XG4gICAgICBjb25zdCByZW1vdGVEYXRhID0gZmlsZXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpc1NjcmlwdEZpbGUoaXRlbS5uYW1lKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICghbWV0YUZpbGUgJiYgaXRlbS5uYW1lID09PSB0aGlzLm1ldGFGaWxlKSB7XG4gICAgICAgICAgbWV0YUZpbGUgPSBpdGVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAubWFwKG5vcm1hbGl6ZSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFpdGVtLnNpemUpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShpdGVtKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG1ldGFJdGVtID0gbWV0YUZpbGUgPyBub3JtYWxpemUobWV0YUZpbGUpIDoge307XG4gICAgICBjb25zdCBnb3RNZXRhID0gdGhpcy5nZXQobWV0YUl0ZW0pXG4gICAgICAudGhlbihkYXRhID0+IEpTT04ucGFyc2UoZGF0YSkpXG4gICAgICAuY2F0Y2goZXJyID0+IHRoaXMuaGFuZGxlTWV0YUVycm9yKGVycikpXG4gICAgICAudGhlbihkYXRhID0+IE9iamVjdC5hc3NpZ24oe30sIG1ldGFJdGVtLCB7XG4gICAgICAgIG5hbWU6IHRoaXMubWV0YUZpbGUsXG4gICAgICAgIHVyaTogbnVsbCxcbiAgICAgICAgZGF0YSxcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChbZ290TWV0YSwgcmVtb3RlRGF0YSwgdGhpcy5nZXRMb2NhbERhdGEoKV0pO1xuICAgIH0pO1xuICB9LFxuICBhdXRob3JpemUoKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgcmVzcG9uc2VfdHlwZTogJ2NvZGUnLFxuICAgICAgYWNjZXNzX3R5cGU6ICdvZmZsaW5lJyxcbiAgICAgIGNsaWVudF9pZDogY29uZmlnLmNsaWVudF9pZCxcbiAgICAgIHJlZGlyZWN0X3VyaTogY29uZmlnLnJlZGlyZWN0X3VyaSxcbiAgICAgIHNjb3BlOiBjb25maWcuc2NvcGUsXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmdldCgncmVmcmVzaF90b2tlbicpKSBwYXJhbXMucHJvbXB0ID0gJ2NvbnNlbnQnO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aD8ke2R1bXBRdWVyeShwYXJhbXMpfWA7XG4gICAgb3BlbkF1dGhQYWdlKHVybCwgY29uZmlnLnJlZGlyZWN0X3VyaSk7XG4gIH0sXG4gIGNoZWNrQXV0aCh1cmwpIHtcbiAgICBjb25zdCByZWRpcmVjdFVyaSA9IGAke2NvbmZpZy5yZWRpcmVjdF91cml9P2NvZGU9YDtcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgocmVkaXJlY3RVcmkpKSB7XG4gICAgICB0aGlzLmF1dGhTdGF0ZS5zZXQoJ2F1dGhvcml6aW5nJyk7XG4gICAgICB0aGlzLmF1dGhvcml6ZWQoe1xuICAgICAgICBjb2RlOiBkZWNvZGVVUklDb21wb25lbnQodXJsLnNwbGl0KCcjJylbMF0uc2xpY2UocmVkaXJlY3RVcmkubGVuZ3RoKSksXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5jaGVja1N5bmMoKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHJldm9rZSgpIHtcbiAgICB0aGlzLmNvbmZpZy5zZXQoe1xuICAgICAgdG9rZW46IG51bGwsXG4gICAgICByZWZyZXNoX3Rva2VuOiBudWxsLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnByZXBhcmUoKTtcbiAgfSxcbiAgYXV0aG9yaXplZChwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92NC90b2tlbicsXG4gICAgICBwcmVmaXg6ICcnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICB9LFxuICAgICAgYm9keTogZHVtcFF1ZXJ5KE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50X2lkLFxuICAgICAgICBjbGllbnRfc2VjcmV0OiBjb25maWcuY2xpZW50X3NlY3JldCxcbiAgICAgICAgcmVkaXJlY3RfdXJpOiBjb25maWcucmVkaXJlY3RfdXJpLFxuICAgICAgICBncmFudF90eXBlOiAnYXV0aG9yaXphdGlvbl9jb2RlJyxcbiAgICAgIH0sIHBhcmFtcykpLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgICB0b2tlbjogZGF0YS5hY2Nlc3NfdG9rZW4sXG4gICAgICAgIH07XG4gICAgICAgIGlmIChkYXRhLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICB1cGRhdGUucmVmcmVzaF90b2tlbiA9IGRhdGEucmVmcmVzaF90b2tlbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZy5zZXQodXBkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGRhdGE7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGhhbmRsZU1ldGFFcnJvcjogbm9vcCxcbiAgbGlzdCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBzdXBwb3J0ZWQnKTtcbiAgfSxcbiAgZ2V0KHsgaWQgfSkge1xuICAgIGlmICghaWQpIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybDogYC9maWxlcy8ke2lkfT9hbHQ9bWVkaWFgLFxuICAgIH0pO1xuICB9LFxuICBwdXQoaXRlbSwgZGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgY29uc3QgeyBpZCB9ID0gaXRlbTtcbiAgICBjb25zdCBib3VuZGFyeSA9IGdldFVuaXFJZCgndmlvbGVudG1vbmtleS1pcy1ncmVhdC0nKTtcbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6IGBtdWx0aXBhcnQvcmVsYXRlZDsgYm91bmRhcnk9JHtib3VuZGFyeX1gLFxuICAgIH07XG4gICAgY29uc3QgbWV0YWRhdGEgPSBpZCA/IHtcbiAgICAgIG5hbWUsXG4gICAgfSA6IHtcbiAgICAgIG5hbWUsXG4gICAgICBwYXJlbnRzOiBbJ2FwcERhdGFGb2xkZXInXSxcbiAgICB9O1xuICAgIGNvbnN0IGJvZHkgPSBbXG4gICAgICBgLS0ke2JvdW5kYXJ5fWAsXG4gICAgICAnQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICcnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkobWV0YWRhdGEpLFxuICAgICAgYC0tJHtib3VuZGFyeX1gLFxuICAgICAgJ0NvbnRlbnQtVHlwZTogdGV4dC9wbGFpbicsXG4gICAgICAnJyxcbiAgICAgIGRhdGEsXG4gICAgICBgLS0ke2JvdW5kYXJ5fS0tYCxcbiAgICAgICcnLFxuICAgIF0uam9pbignXFxyXFxuJyk7XG4gICAgY29uc3QgdXJsID0gaWRcbiAgICAgID8gYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3VwbG9hZC9kcml2ZS92My9maWxlcy8ke2lkfT91cGxvYWRUeXBlPW11bHRpcGFydGBcbiAgICAgIDogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3VwbG9hZC9kcml2ZS92My9maWxlcz91cGxvYWRUeXBlPW11bHRpcGFydCc7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsLFxuICAgICAgYm9keSxcbiAgICAgIGhlYWRlcnMsXG4gICAgICBtZXRob2Q6IGlkID8gJ1BBVENIJyA6ICdQT1NUJyxcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlKHsgaWQgfSkge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICB1cmw6IGAvZmlsZXMvJHtpZH1gLFxuICAgIH0pO1xuICB9LFxufSk7XG5yZWdpc3RlcihHb29nbGVEcml2ZSk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShpdGVtKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGl0ZW0uaWQsXG4gICAgbmFtZTogaXRlbS5uYW1lLFxuICAgIHNpemU6ICtpdGVtLnNpemUsXG4gICAgdXJpOiBnZXRVUkkoaXRlbS5uYW1lKSxcbiAgfTtcbn1cbiIsImltcG9ydCB7XG4gIGluaXRpYWxpemUsXG4gIHN5bmMsXG4gIGdldFN0YXRlcyxcbiAgYXV0aG9yaXplLFxuICByZXZva2UsXG4gIHNldENvbmZpZyxcbn0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCAnLi9kcm9wYm94JztcbmltcG9ydCAnLi9vbmVkcml2ZSc7XG5pbXBvcnQgJy4vZ29vZ2xlZHJpdmUnO1xuaW1wb3J0ICcuL3dlYmRhdic7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2UnO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIFN5bmNBdXRob3JpemU6IGF1dGhvcml6ZSxcbiAgU3luY1Jldm9rZTogcmV2b2tlLFxuICBTeW5jU3RhcnQ6IHN5bmMsXG4gIFN5bmNTZXRDb25maWc6IHNldENvbmZpZyxcbn0pO1xuXG5leHBvcnQge1xuICBpbml0aWFsaXplLFxuICBzeW5jLFxuICBnZXRTdGF0ZXMsXG4gIGF1dGhvcml6ZSxcbiAgcmV2b2tlLFxufTtcbiIsIi8vIFJlZmVyZW5jZTogaHR0cHM6Ly9kZXYub25lZHJpdmUuY29tL1JFQURNRS5odG1cbmltcG9ydCB7IG5vb3AgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBvYmplY3RHZXQgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHsgZHVtcFF1ZXJ5IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgZ2V0VVJJLCBnZXRJdGVtRmlsZW5hbWUsIEJhc2VTZXJ2aWNlLCBpc1NjcmlwdEZpbGUsIHJlZ2lzdGVyLFxuICBvcGVuQXV0aFBhZ2UsXG59IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5TWU5DX09ORURSSVZFX0NMSUVOVF9JRCxcbiAgY2xpZW50X3NlY3JldDogcHJvY2Vzcy5lbnYuU1lOQ19PTkVEUklWRV9DTElFTlRfU0VDUkVULFxuICByZWRpcmVjdF91cmk6ICdodHRwczovL3Zpb2xlbnRtb25rZXkuZ2l0aHViLmlvL2F1dGhfb25lZHJpdmUuaHRtbCcsXG59O1xuXG5jb25zdCBPbmVEcml2ZSA9IEJhc2VTZXJ2aWNlLmV4dGVuZCh7XG4gIG5hbWU6ICdvbmVkcml2ZScsXG4gIGRpc3BsYXlOYW1lOiAnT25lRHJpdmUnLFxuICB1cmxQcmVmaXg6ICdodHRwczovL2FwaS5vbmVkcml2ZS5jb20vdjEuMCcsXG4gIHJlZnJlc2hUb2tlbigpIHtcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSB0aGlzLmNvbmZpZy5nZXQoJ3JlZnJlc2hfdG9rZW4nKTtcbiAgICByZXR1cm4gdGhpcy5hdXRob3JpemVkKHtcbiAgICAgIHJlZnJlc2hfdG9rZW46IHJlZnJlc2hUb2tlbixcbiAgICAgIGdyYW50X3R5cGU6ICdyZWZyZXNoX3Rva2VuJyxcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHRoaXMucHJlcGFyZSgpKTtcbiAgfSxcbiAgdXNlcigpIHtcbiAgICBjb25zdCByZXF1ZXN0VXNlciA9ICgpID0+IHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsOiAnL2RyaXZlJyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pO1xuICAgIHJldHVybiByZXF1ZXN0VXNlcigpXG4gICAgLmNhdGNoKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaFRva2VuKCkudGhlbihyZXF1ZXN0VXNlcik7XG4gICAgICB9XG4gICAgICB0aHJvdyByZXM7XG4gICAgfSlcbiAgICAuY2F0Y2goKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMCAmJiBvYmplY3RHZXQocmVzLCAnZGF0YS5lcnJvcicpID09PSAnaW52YWxpZF9ncmFudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgICB0eXBlOiAndW5hdXRob3JpemVkJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICBkYXRhOiByZXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlTWV0YUVycm9yKHJlcykge1xuICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IHJlcy5oZWFkZXJzLmdldCgnV1dXLUF1dGhlbnRpY2F0ZScpPy5bMF0gfHwgJyc7XG4gICAgICBpZiAoL15CZWFyZXIgcmVhbG09XCJPbmVEcml2ZUFQSVwiLy50ZXN0KGhlYWRlcikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaFRva2VuKCkudGhlbigoKSA9PiB0aGlzLmdldE1ldGEoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRocm93IHJlcztcbiAgfSxcbiAgbGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6ICcvZHJpdmUvc3BlY2lhbC9hcHByb290L2NoaWxkcmVuJyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhLnZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0uZmlsZSAmJiBpc1NjcmlwdEZpbGUoaXRlbS5uYW1lKSkubWFwKG5vcm1hbGl6ZSkpO1xuICB9LFxuICBnZXQoaXRlbSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsOiBgL2RyaXZlL3NwZWNpYWwvYXBwcm9vdDovJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybDogZGF0YVsnQGNvbnRlbnQuZG93bmxvYWRVcmwnXSxcbiAgICAgIGRlbGF5OiBmYWxzZSxcbiAgICB9KSk7XG4gIH0sXG4gIHB1dChpdGVtLCBkYXRhKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgdXJsOiBgL2RyaXZlL3NwZWNpYWwvYXBwcm9vdDovJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9Oi9jb250ZW50YCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGRhdGEsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKG5vcm1hbGl6ZSk7XG4gIH0sXG4gIHJlbW92ZShpdGVtKSB7XG4gICAgLy8gcmV0dXJuIDIwNFxuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIHVybDogYC9kcml2ZS9zcGVjaWFsL2FwcHJvb3Q6LyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWAsXG4gICAgfSlcbiAgICAuY2F0Y2gobm9vcCk7XG4gIH0sXG4gIGF1dGhvcml6ZSgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBjbGllbnRfaWQ6IGNvbmZpZy5jbGllbnRfaWQsXG4gICAgICBzY29wZTogJ29uZWRyaXZlLmFwcGZvbGRlciB3bC5vZmZsaW5lX2FjY2VzcycsXG4gICAgICByZXNwb25zZV90eXBlOiAnY29kZScsXG4gICAgICByZWRpcmVjdF91cmk6IGNvbmZpZy5yZWRpcmVjdF91cmksXG4gICAgfTtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9sb2dpbi5saXZlLmNvbS9vYXV0aDIwX2F1dGhvcml6ZS5zcmY/JHtkdW1wUXVlcnkocGFyYW1zKX1gO1xuICAgIG9wZW5BdXRoUGFnZSh1cmwsIGNvbmZpZy5yZWRpcmVjdF91cmkpO1xuICB9LFxuICBjaGVja0F1dGgodXJsKSB7XG4gICAgY29uc3QgcmVkaXJlY3RVcmkgPSBgJHtjb25maWcucmVkaXJlY3RfdXJpfT9jb2RlPWA7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKHJlZGlyZWN0VXJpKSkge1xuICAgICAgdGhpcy5hdXRoU3RhdGUuc2V0KCdhdXRob3JpemluZycpO1xuICAgICAgdGhpcy5hdXRob3JpemVkKHtcbiAgICAgICAgY29kZTogdXJsLnNsaWNlKHJlZGlyZWN0VXJpLmxlbmd0aCksXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5jaGVja1N5bmMoKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHJldm9rZSgpIHtcbiAgICB0aGlzLmNvbmZpZy5zZXQoe1xuICAgICAgdWlkOiBudWxsLFxuICAgICAgdG9rZW46IG51bGwsXG4gICAgICByZWZyZXNoX3Rva2VuOiBudWxsLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnByZXBhcmUoKTtcbiAgfSxcbiAgYXV0aG9yaXplZChwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vbG9naW4ubGl2ZS5jb20vb2F1dGgyMF90b2tlbi5zcmYnLFxuICAgICAgcHJlZml4OiAnJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGR1bXBRdWVyeShPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIGNsaWVudF9pZDogY29uZmlnLmNsaWVudF9pZCxcbiAgICAgICAgY2xpZW50X3NlY3JldDogY29uZmlnLmNsaWVudF9zZWNyZXQsXG4gICAgICAgIHJlZGlyZWN0X3VyaTogY29uZmlnLnJlZGlyZWN0X3VyaSxcbiAgICAgICAgZ3JhbnRfdHlwZTogJ2F1dGhvcml6YXRpb25fY29kZScsXG4gICAgICB9LCBwYXJhbXMpKSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICB0aGlzLmNvbmZpZy5zZXQoe1xuICAgICAgICAgIHVpZDogZGF0YS51c2VyX2lkLFxuICAgICAgICAgIHRva2VuOiBkYXRhLmFjY2Vzc190b2tlbixcbiAgICAgICAgICByZWZyZXNoX3Rva2VuOiBkYXRhLnJlZnJlc2hfdG9rZW4sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZGF0YTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbn0pO1xucmVnaXN0ZXIoT25lRHJpdmUpO1xuXG5mdW5jdGlvbiBub3JtYWxpemUoaXRlbSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICBzaXplOiBpdGVtLnNpemUsXG4gICAgdXJpOiBnZXRVUkkoaXRlbS5uYW1lKSxcbiAgICAvLyBtb2RpZmllZDogbmV3IERhdGUoaXRlbS5sYXN0TW9kaWZpZWREYXRlVGltZSkuZ2V0VGltZSgpLFxuICB9O1xufVxuIiwiaW1wb3J0IHtcbiAgZ2V0VVJJLCBnZXRJdGVtRmlsZW5hbWUsIEJhc2VTZXJ2aWNlLCBpc1NjcmlwdEZpbGUsIHJlZ2lzdGVyLFxufSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBLRVlfQ0hJTERSRU4gPSBTeW1ib2woJ2NoaWxkcmVuJyk7XG5cbmNsYXNzIFhOb2RlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbnNNYXApIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubnNNYXAgPSB7IC4uLm5zTWFwIH07XG4gICAgdGhpcy5wYXJzZUF0dHJzKCk7XG4gICAgdGhpcy5wYXJzZU5hbWUoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tWE1MKHhtbCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbCwgJ2FwcGxpY2F0aW9uL3htbCcpO1xuICAgIHJldHVybiBuZXcgWE5vZGUoZG9jKTtcbiAgfVxuXG4gIHBhcnNlQXR0cnMoKSB7XG4gICAgY29uc3QgeyBub2RlLCBuc01hcCB9ID0gdGhpcztcbiAgICBjb25zdCBhdHRycyA9IHt9O1xuICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gbm9kZTtcbiAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgZm9yIChjb25zdCBhdHRyIG9mIG5vZGUuYXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBhdHRyO1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3htbG5zJykgbnNNYXAuJCA9IHZhbHVlO1xuICAgICAgICBlbHNlIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ3htbG5zOicpKSBuc01hcFtuYW1lLnNsaWNlKDYpXSA9IHZhbHVlO1xuICAgICAgICBhdHRyc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmF0dHJzID0gYXR0cnM7XG4gIH1cblxuICBwYXJzZU5hbWUoKSB7XG4gICAgY29uc3QgeyBub2RlLCBuc01hcCB9ID0gdGhpcztcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgbGV0IG5hbWUgPSBub2RlLnRhZ05hbWU7XG4gICAgICBsZXQgbnMgPSBuc01hcC4kO1xuICAgICAgaWYgKG5hbWUuaW5jbHVkZXMoJzonKSkge1xuICAgICAgICBsZXQgcHJlZml4O1xuICAgICAgICBbcHJlZml4LCBuYW1lXSA9IG5hbWUuc3BsaXQoJzonKTtcbiAgICAgICAgbnMgPSBuc01hcFtwcmVmaXhdO1xuICAgICAgICBpZiAoIW5zKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbmFtZXNwYWNlOiAke3ByZWZpeH1gKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubmFtZSA9IG5zICsgbmFtZTtcbiAgICB9XG4gIH1cblxuICB0ZXh0KCkge1xuICAgIGNvbnN0IHsgbm9kZSB9ID0gdGhpcztcbiAgICBpZiAobm9kZSkgcmV0dXJuIChub2RlLnRleHRDb250ZW50IHx8ICcnKS50cmltKCk7XG4gIH1cblxuICBjaGlsZHJlbigpIHtcbiAgICBpZiAoIXRoaXNbS0VZX0NISUxEUkVOXSkge1xuICAgICAgY29uc3QgeyBub2RlLCBuc01hcCB9ID0gdGhpcztcbiAgICAgIHRoaXNbS0VZX0NISUxEUkVOXSA9IFsuLi5ub2RlLmNoaWxkcmVuXVxuICAgICAgLm1hcChjaGlsZCA9PiBuZXcgWE5vZGUoY2hpbGQsIG5zTWFwKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzW0tFWV9DSElMRFJFTl07XG4gIH1cblxuICBtYXAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbigpLm1hcChjYWxsYmFjayk7XG4gIH1cblxuICBnZXRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gKHRhZ05hbWUgPT4gbm9kZSA9PiBub2RlLm5hbWUgPT09IHRhZ05hbWUpKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGxiYWNrO1xuICB9XG5cbiAgZmlsdGVyKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4oKS5maWx0ZXIodGhpcy5nZXRDYWxsYmFjayhjYWxsYmFjaykpO1xuICB9XG5cbiAgZmluZChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuKCkuZmluZCh0aGlzLmdldENhbGxiYWNrKGNhbGxiYWNrKSk7XG4gIH1cblxuICBhdHRyKGtleSkge1xuICAgIHJldHVybiB0aGlzLmF0dHJzW2tleV07XG4gIH1cbn1cblxuY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIHNlcnZlclVybDogJycsXG4gIGFub255bW91czogZmFsc2UsXG4gIHVzZXJuYW1lOiAnJyxcbiAgcGFzc3dvcmQ6ICcnLFxufTtcblxuY29uc3QgV2ViREFWID0gQmFzZVNlcnZpY2UuZXh0ZW5kKHtcbiAgbmFtZTogJ3dlYmRhdicsXG4gIGRpc3BsYXlOYW1lOiAnV2ViREFWJyxcbiAgcHJvcGVydGllczoge1xuICAgIGF1dGhUeXBlOiAncGFzc3dvcmQnLFxuICAgIHNlcnZlclVybDogbnVsbCxcbiAgfSxcbiAgZ2V0VXNlckNvbmZpZygpIHtcbiAgICBpZiAoIXRoaXMudXNlckNvbmZpZykge1xuICAgICAgdGhpcy51c2VyQ29uZmlnID0ge1xuICAgICAgICAuLi5ERUZBVUxUX0NPTkZJRyxcbiAgICAgICAgLi4udGhpcy5jb25maWcuZ2V0KCd1c2VyQ29uZmlnJyksXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51c2VyQ29uZmlnO1xuICB9LFxuICBzZXRVc2VyQ29uZmlnKGNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyQ29uZmlnLCBjb25maWcpO1xuICAgIHRoaXMuY29uZmlnLnNldCgndXNlckNvbmZpZycsIHRoaXMudXNlckNvbmZpZyk7XG4gIH0sXG4gIGluaXRUb2tlbigpIHtcbiAgICB0aGlzLnByZXBhcmVIZWFkZXJzKCk7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRVc2VyQ29uZmlnKCk7XG4gICAgbGV0IHVybCA9IGNvbmZpZy5zZXJ2ZXJVcmw/LnRyaW0oKSB8fCAnJztcbiAgICBpZiAoIXVybC5pbmNsdWRlcygnOi8vJykpIHVybCA9IGBodHRwOi8vJHt1cmx9YDtcbiAgICBpZiAoIXVybC5lbmRzV2l0aCgnLycpKSB1cmwgKz0gJy8nO1xuICAgIHRyeSB7XG4gICAgICBuZXcgVVJMKHVybCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzLnNlcnZlclVybCA9IG51bGw7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMucHJvcGVydGllcy5zZXJ2ZXJVcmwgPSBgJHt1cmx9VmlvbGVudG1vbmtleS9gO1xuICAgIGNvbnN0IHsgYW5vbnltb3VzLCB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGNvbmZpZztcbiAgICBpZiAoYW5vbnltb3VzKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGF1dGggPSB3aW5kb3cuYnRvYShgJHt1c2VybmFtZX06JHtwYXNzd29yZH1gKTtcbiAgICB0aGlzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCYXNpYyAke2F1dGh9YDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgbG9hZERhdGEob3B0aW9ucykge1xuICAgIC8vIEJ5cGFzc2luZyBsb2dpbiBDU1JGIHByb3RlY3Rpb24gaW4gTmV4dGNsb3VkIC8gT3duY2xvdWQgYnkgbm90IHNlbmRpbmcgY29va2llcy5cbiAgICAvLyBXZSBhcmUgbm90IHVzaW5nIHdlYiBVSSBhbmQgY29va2llIGF1dGhlbnRpY2F0aW9uLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IHRoYXQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92aW9sZW50bW9ua2V5L3Zpb2xlbnRtb25rZXkvaXNzdWVzLzk3NlxuICAgIHJldHVybiBCYXNlU2VydmljZS5wcm90b3R5cGUubG9hZERhdGEuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNyZWRlbnRpYWxzOiAnb21pdCcsXG4gICAgfSwgb3B0aW9ucykpO1xuICB9LFxuICBoYW5kbGVNZXRhRXJyb3IocmVzKSB7XG4gICAgaWYgKCFbXG4gICAgICA0MDQsIC8vIEZpbGUgbm90IGV4aXN0c1xuICAgICAgNDA5LCAvLyBEaXJlY3Rvcnkgbm90IGV4aXN0c1xuICAgIF0uaW5jbHVkZXMocmVzLnN0YXR1cykpIHRocm93IHJlcztcbiAgfSxcbiAgLy8gU29tZSBXZWJEQVYgc2VydmVycyBkbyBub3QgYWxsb3cgTE9DSyAvIFVOTE9DS1xuICAvKlxuICBhY3F1aXJlTG9jaygpIHtcbiAgICBjb25zdCB7IHNlcnZlclVybCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgIGNvbnN0IGNyZWF0ZUxvY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmxvZygnQWNxdWlyZSBsb2NrLi4uJyk7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICAgIG1ldGhvZDogJ0xPQ0snLFxuICAgICAgICB1cmw6IHNlcnZlclVybCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFRpbWVvdXQ6IGBTZWNvbmQtJHszMCAqIDYwfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGBcXFxuPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLThcIiA/PlxuPEQ6bG9ja2luZm8geG1sbnM6RD0nREFWOic+XG4gIDxEOmxvY2tzY29wZT48RDpleGNsdXNpdmUvPjwvRDpsb2Nrc2NvcGU+XG4gIDxEOmxvY2t0eXBlPjxEOndyaXRlLz48L0Q6bG9ja3R5cGU+XG48L0Q6bG9ja2luZm8+YCxcbiAgICAgIH0pXG4gICAgICAudGhlbih4bWwgPT4ge1xuICAgICAgICBjb25zdCBkb2MgPSBYTm9kZS5mcm9tWE1MKHhtbCk7XG4gICAgICAgIGNvbnN0IGxvY2sgPSBkb2MuZmluZCgnREFWOnByb3AnKVxuICAgICAgICAuZmluZCgnREFWOmxvY2tkaXNjb3ZlcnknKVxuICAgICAgICAuZmluZCgnREFWOmFjdGl2ZWxvY2snKVxuICAgICAgICAuZmluZCgnREFWOmxvY2t0b2tlbicpXG4gICAgICAgIC5maW5kKCdEQVY6aHJlZicpXG4gICAgICAgIC50ZXh0KCk7XG4gICAgICAgIHRoaXMubG9nKCdBY3F1aXJlZCBsb2NrOicsIGxvY2spO1xuICAgICAgICB0aGlzLmNvbmZpZy5zZXQoe1xuICAgICAgICAgIGxvY2ssXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBsb2NrID0gdGhpcy5jb25maWcuZ2V0KCdsb2NrJyk7XG4gICAgaWYgKGxvY2spIHtcbiAgICAgIHRoaXMubG9nKCdSZWZyZXNoIGxvY2s6JywgbG9jayk7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICAgIG1ldGhvZDogJ0xPQ0snLFxuICAgICAgICB1cmw6IHNlcnZlclVybCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIElmOiBgKDwke2xvY2t9PilgLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2coJ1JlZnJlc2hlZCBsb2NrOicsIGxvY2spO1xuICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQxMikge1xuICAgICAgICAgIHRoaXMubG9nKCdSZWZyZXNoIGxvY2sgZXJyb3InKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5zZXQoeyBsb2NrOiBudWxsIH0pO1xuICAgICAgICAgIC8vIFByZWNvbmRpdGlvbiBGYWlsZWRcbiAgICAgICAgICByZXR1cm4gY3JlYXRlTG9jaygpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlTG9jaygpO1xuICB9LFxuICByZWxlYXNlTG9jaygpIHtcbiAgICBjb25zdCBsb2NrID0gdGhpcy5jb25maWcuZ2V0KCdsb2NrJyk7XG4gICAgaWYgKGxvY2spIHtcbiAgICAgIGNvbnN0IHsgc2VydmVyVXJsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICB0aGlzLmxvZygnUmVsZWFzZSBsb2NrOicsIGxvY2spO1xuICAgICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgICBtZXRob2Q6ICdVTkxPQ0snLFxuICAgICAgICB1cmw6IHNlcnZlclVybCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdMb2NrLVRva2VuJzogYDwke2xvY2t9PmAsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZygnUmVsZWFzZWQgbG9jaycpO1xuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZygnUmVsZWFzZSBsb2NrIGVycm9yJyk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5zZXQoeyBsb2NrOiBudWxsIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAqL1xuICBsaXN0KCkge1xuICAgIGNvbnN0IHsgc2VydmVyVXJsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgY29uc3QgbWtkaXIgPSAoKSA9PiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ01LQ09MJyxcbiAgICAgIHVybDogc2VydmVyVXJsLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlYWRkaXIgPSAoKSA9PiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BST1BGSU5EJyxcbiAgICAgIHVybDogc2VydmVyVXJsLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBkZXB0aDogJzEnLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKCh4bWwpID0+IHtcbiAgICAgIGNvbnN0IGRvYyA9IFhOb2RlLmZyb21YTUwoeG1sKTtcbiAgICAgIGNvbnN0IGl0ZW1zID0gZG9jLmNoaWxkcmVuKClbMF1cbiAgICAgIC5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcCA9IG5vZGUuZmluZCgnREFWOnByb3BzdGF0JykuZmluZCgnREFWOnByb3AnKTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHByb3AuZmluZCgnREFWOnJlc291cmNldHlwZScpLmZpbmQoJ0RBVjpjb2xsZWN0aW9uJykgPyAnZGlyZWN0b3J5JyA6ICdmaWxlJztcbiAgICAgICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgIGxldCBkaXNwbGF5TmFtZTtcbiAgICAgICAgICBjb25zdCBkaXNwbGF5TmFtZU5vZGUgPSBwcm9wLmZpbmQoJ0RBVjpkaXNwbGF5bmFtZScpO1xuXG4gICAgICAgICAgaWYgKGRpc3BsYXlOYW1lTm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lTm9kZS50ZXh0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBub2RlLmZpbmQoJ0RBVjpocmVmJykudGV4dCgpO1xuICAgICAgICAgICAgZGlzcGxheU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoaHJlZi5zdWJzdHJpbmcoaHJlZi5sYXN0SW5kZXhPZignLycpICsgMSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc1NjcmlwdEZpbGUoZGlzcGxheU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gcHJvcC5maW5kKCdEQVY6Z2V0Y29udGVudGxlbmd0aCcpO1xuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZSh7XG4gICAgICAgICAgICAgIG5hbWU6IGRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICBzaXplOiBzaXplID8gK3NpemUudGV4dCgpIDogMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH0pO1xuICAgIHJldHVybiByZWFkZGlyKClcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gbWtkaXIoKS50aGVuKHJlYWRkaXIpO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9LFxuICBnZXQoaXRlbSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgY29uc3QgeyBzZXJ2ZXJVcmwgfSA9IHRoaXMucHJvcGVydGllcztcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6IHNlcnZlclVybCArIG5hbWUsXG4gICAgfSk7XG4gIH0sXG4gIHB1dChpdGVtLCBkYXRhKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJyxcbiAgICB9O1xuICAgIGNvbnN0IGxvY2sgPSB0aGlzLmNvbmZpZy5nZXQoJ2xvY2snKTtcbiAgICBpZiAobG9jaykgaGVhZGVycy5JZiA9IGAoPCR7bG9ja30+KWA7XG4gICAgY29uc3QgeyBzZXJ2ZXJVcmwgfSA9IHRoaXMucHJvcGVydGllcztcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgdXJsOiBzZXJ2ZXJVcmwgKyBuYW1lLFxuICAgICAgYm9keTogZGF0YSxcbiAgICAgIGhlYWRlcnMsXG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZShpdGVtKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG4gICAgY29uc3QgbG9jayA9IHRoaXMuY29uZmlnLmdldCgnbG9jaycpO1xuICAgIGlmIChsb2NrKSBoZWFkZXJzLklmID0gYCg8JHtsb2NrfT4pYDtcbiAgICBjb25zdCB7IHNlcnZlclVybCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICB1cmw6IHNlcnZlclVybCArIG5hbWUsXG4gICAgICBoZWFkZXJzLFxuICAgIH0pO1xuICB9LFxufSk7XG5yZWdpc3RlcihXZWJEQVYpO1xuXG5mdW5jdGlvbiBub3JtYWxpemUoaXRlbSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICBzaXplOiBpdGVtLnNpemUsXG4gICAgdXJpOiBnZXRVUkkoaXRlbS5uYW1lKSxcbiAgfTtcbn1cbiIsImltcG9ydCBpbml0Q2FjaGUgZnJvbSAnIy9jb21tb24vY2FjaGUnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5jb25zdCBjYWNoZSA9IGluaXRDYWNoZSh7XG4gIC8qIEtlZXBpbmcgdGhlIGRhdGEgZm9yIG9uZSBob3VyIHNpbmNlIGNocm9tZS5zdG9yYWdlLmxvY2FsIGlzIGluc2FuZWx5IHNsb3cgaW4gQ2hyb21lLFxuICAgICBpdCBjYW4gdGFrZXMgc2Vjb25kcyB0byByZWFkIGl0IHdoZW4gaW5qZWN0aW5nIHRhYnMgd2l0aCBhIGJpZyBzY3JpcHQvdmFsdWUsIHdoaWNoIGRlbGF5c1xuICAgICBhbGwgb3RoZXIgc2NyaXB0cyBpbiB0aGlzIHRhYiBhbmQgdGhleSB3aWxsIG5ldmVyIGJlIGFibGUgdG8gcnVuIGF0IGRvY3VtZW50LXN0YXJ0LiAqL1xuICBsaWZldGltZTogNjAgKiA2MCAqIDEwMDAsXG59KTtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICBDYWNoZUxvYWQoZGF0YSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQoZGF0YSkgfHwgbnVsbDtcbiAgfSxcbiAgQ2FjaGVIaXQoZGF0YSkge1xuICAgIGNhY2hlLmhpdChkYXRhLmtleSwgZGF0YS5saWZldGltZSk7XG4gIH0sXG4gIENhY2hlUG9wKGtleSkge1xuICAgIHJldHVybiBjYWNoZS5wb3Aoa2V5KSB8fCBudWxsO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNhY2hlO1xuIiwiaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5jb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5sZXQgY2xpcGJvYXJkRGF0YTtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICBTZXRDbGlwYm9hcmQoZGF0YSkge1xuICAgIGNsaXBib2FyZERhdGEgPSBkYXRhO1xuICAgIHRleHRhcmVhLmZvY3VzKCk7XG4gICAgY29uc3QgcmV0ID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknLCBmYWxzZSwgbnVsbCk7XG4gICAgaWYgKCFyZXQgJiYgcHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ29weSBmYWlsZWQhJyk7XG4gICAgfVxuICB9LFxufSk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb3B5JywgZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgeyB0eXBlLCBkYXRhIH0gPSBjbGlwYm9hcmREYXRhO1xuICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YSh0eXBlIHx8ICd0ZXh0L3BsYWluJywgZGF0YSk7XG59KTtcbiIsImltcG9ydCB7XG4gIGNvbXBhcmVWZXJzaW9uLCBpMThuLCBnZXRGdWxsVXJsLCBnZXRTY3JpcHROYW1lLCBpc1JlbW90ZSwgc2VuZENtZCwgdHJ1ZUpvaW4sXG59IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7XG4gIENNRF9TQ1JJUFRfQURELCBDTURfU0NSSVBUX1VQREFURSwgSU5KRUNUX1BBR0UsIElOSkVDVF9BVVRPLCBUSU1FT1VUX1dFRUssXG59IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQgeyBmb3JFYWNoRW50cnksIGZvckVhY2hLZXksIGZvckVhY2hWYWx1ZSB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcjL2NvbW1vbi9zdG9yYWdlJztcbmltcG9ydCBwbHVnaW5FdmVudHMgZnJvbSAnLi4vcGx1Z2luL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXROYW1lVVJJLCBwYXJzZU1ldGEsIG5ld1NjcmlwdCwgZ2V0RGVmYXVsdEN1c3RvbSB9IGZyb20gJy4vc2NyaXB0JztcbmltcG9ydCB7IHRlc3RTY3JpcHQsIHRlc3RCbGFja2xpc3QgfSBmcm9tICcuL3Rlc3Rlcic7XG5pbXBvcnQgeyBwcmVJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzLCBub3RpZnkgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHBhdGNoREIgZnJvbSAnLi9wYXRjaC1kYic7XG5pbXBvcnQgeyBzZXRPcHRpb24gfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0ICcuL3N0b3JhZ2UtZmV0Y2gnO1xuaW1wb3J0IGRhdGFDYWNoZSBmcm9tICcuL2NhY2hlJztcblxuY29uc3Qgc3RvcmUgPSB7fTtcbnN0b3JhZ2UuYmFzZS5zZXREYXRhQ2FjaGUoZGF0YUNhY2hlKTtcbnN0b3JhZ2Uuc2NyaXB0Lm9uRHVtcCA9IChpdGVtKSA9PiB7XG4gIHN0b3JlLnNjcmlwdE1hcFtpdGVtLnByb3BzLmlkXSA9IGl0ZW07XG59O1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIENoZWNrUG9zaXRpb246IHNvcnRTY3JpcHRzLFxuICBDaGVja1JlbW92ZTogY2hlY2tSZW1vdmUsXG4gIC8qKiBAcmV0dXJuIHtWTVNjcmlwdH0gKi9cbiAgR2V0U2NyaXB0OiBnZXRTY3JpcHQsXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHsgaXRlbXM6IFZNU2NyaXB0W10sIHZhbHVlcz8gfT59ICovXG4gIGFzeW5jIEV4cG9ydFppcCh7IHZhbHVlcyB9KSB7XG4gICAgY29uc3Qgc2NyaXB0cyA9IGdldFNjcmlwdHMoKTtcbiAgICBjb25zdCBpZHMgPSBzY3JpcHRzLm1hcChnZXRQcm9wc0lkKTtcbiAgICBjb25zdCBjb2RlTWFwID0gYXdhaXQgc3RvcmFnZS5jb2RlLmdldE11bHRpKGlkcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBzY3JpcHRzLm1hcChzY3JpcHQgPT4gKHsgc2NyaXB0LCBjb2RlOiBjb2RlTWFwW3NjcmlwdC5wcm9wcy5pZF0gfSkpLFxuICAgICAgdmFsdWVzOiB2YWx1ZXMgPyBhd2FpdCBzdG9yYWdlLnZhbHVlLmdldE11bHRpKGlkcykgOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gKi9cbiAgR2V0U2NyaXB0Q29kZShpZCkge1xuICAgIHJldHVybiBzdG9yYWdlLmNvZGUuZ2V0T25lKGlkKTtcbiAgfSxcbiAgR2V0U2NyaXB0VmVyKG9wdHMpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBnZXRTY3JpcHQob3B0cyk7XG4gICAgcmV0dXJuIHNjcmlwdCAmJiAhc2NyaXB0LmNvbmZpZy5yZW1vdmVkXG4gICAgICA/IHNjcmlwdC5tZXRhLnZlcnNpb25cbiAgICAgIDogbnVsbDtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59ICovXG4gIE1hcmtSZW1vdmVkKHsgaWQsIHJlbW92ZWQgfSkge1xuICAgIHJldHVybiB1cGRhdGVTY3JpcHRJbmZvKGlkLCB7XG4gICAgICBjb25maWc6IHsgcmVtb3ZlZDogcmVtb3ZlZCA/IDEgOiAwIH0sXG4gICAgICBwcm9wczogeyBsYXN0TW9kaWZpZWQ6IERhdGUubm93KCkgfSxcbiAgICB9KTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn0gKi9cbiAgTW92ZSh7IGlkLCBvZmZzZXQgfSkge1xuICAgIGNvbnN0IHNjcmlwdCA9IGdldFNjcmlwdEJ5SWQoaWQpO1xuICAgIGNvbnN0IGluZGV4ID0gc3RvcmUuc2NyaXB0cy5pbmRleE9mKHNjcmlwdCk7XG4gICAgc3RvcmUuc2NyaXB0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHN0b3JlLnNjcmlwdHMuc3BsaWNlKGluZGV4ICsgb2Zmc2V0LCAwLCBzY3JpcHQpO1xuICAgIHJldHVybiBub3JtYWxpemVQb3NpdGlvbigpO1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gKi9cbiAgYXN5bmMgUmVtb3ZlU2NyaXB0KGlkKSB7XG4gICAgY29uc3QgaSA9IHN0b3JlLnNjcmlwdHMuaW5kZXhPZihnZXRTY3JpcHRCeUlkKGlkKSk7XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgc3RvcmUuc2NyaXB0cy5zcGxpY2UoaSwgMSk7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHN0b3JhZ2Uuc2NyaXB0LnJlbW92ZShpZCksXG4gICAgICAgIHN0b3JhZ2UuY29kZS5yZW1vdmUoaWQpLFxuICAgICAgICBzdG9yYWdlLnZhbHVlLnJlbW92ZShpZCksXG4gICAgICBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbmRDbWQoJ1JlbW92ZVNjcmlwdCcsIGlkKTtcbiAgfSxcbiAgUGFyc2VNZXRhOiBwYXJzZU1ldGEsXG4gIFBhcnNlU2NyaXB0OiBwYXJzZVNjcmlwdCxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59ICovXG4gIFVwZGF0ZVNjcmlwdEluZm8oeyBpZCwgY29uZmlnLCBjdXN0b20gfSkge1xuICAgIHJldHVybiB1cGRhdGVTY3JpcHRJbmZvKGlkLCB7XG4gICAgICBjb25maWcsXG4gICAgICBjdXN0b20sXG4gICAgICBwcm9wczogeyBsYXN0TW9kaWZpZWQ6IERhdGUubm93KCkgfSxcbiAgICB9KTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn0gKi9cbiAgVmFjdXVtOiB2YWN1dW0sXG59KTtcblxucHJlSW5pdGlhbGl6ZS5wdXNoKGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyB2ZXJzaW9uOiBsYXN0VmVyc2lvbiB9ID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgndmVyc2lvbicpO1xuICBjb25zdCB2ZXJzaW9uID0gcHJvY2Vzcy5lbnYuVk1fVkVSO1xuICBpZiAoIWxhc3RWZXJzaW9uKSBhd2FpdCBwYXRjaERCKCk7XG4gIGlmICh2ZXJzaW9uICE9PSBsYXN0VmVyc2lvbikgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHZlcnNpb24gfSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XG4gIGNvbnN0IHNjcmlwdHMgPSBbXTtcbiAgY29uc3Qgc3RvcmVJbmZvID0ge1xuICAgIGlkOiAwLFxuICAgIHBvc2l0aW9uOiAwLFxuICB9O1xuICBjb25zdCBpZE1hcCA9IHt9O1xuICBjb25zdCB1cmlNYXAgPSB7fTtcbiAgY29uc3QgbW9kcyA9IFtdO1xuICBjb25zdCByZXNVcmxzID0gW107XG4gIC8qKiBAdGhpcyBWTVNjcmlwdEN1c3RvbS5wYXRoTWFwICovXG4gIGNvbnN0IHJlbWVtYmVyVXJsID0gZnVuY3Rpb24gXyh1cmwpIHsgcmVzVXJscy5wdXNoKHRoaXNbdXJsXSB8fCB1cmwpOyB9O1xuICBkYXRhOjpmb3JFYWNoRW50cnkoKFtrZXksIHNjcmlwdF0pID0+IHtcbiAgICBkYXRhQ2FjaGUucHV0KGtleSwgc2NyaXB0KTtcbiAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoc3RvcmFnZS5zY3JpcHQucHJlZml4KSkge1xuICAgICAgLy8ge1xuICAgICAgLy8gICBtZXRhLFxuICAgICAgLy8gICBjdXN0b20sXG4gICAgICAvLyAgIHByb3BzOiB7IGlkLCBwb3NpdGlvbiwgdXJpIH0sXG4gICAgICAvLyAgIGNvbmZpZzogeyBlbmFibGVkLCBzaG91bGRVcGRhdGUgfSxcbiAgICAgIC8vIH1cbiAgICAgIGNvbnN0IGlkID0gZ2V0SW50KGtleS5zbGljZShzdG9yYWdlLnNjcmlwdC5wcmVmaXgubGVuZ3RoKSk7XG4gICAgICBpZiAoIWlkIHx8IGlkTWFwW2lkXSkge1xuICAgICAgICAvLyBJRCBjb25mbGljdHMhXG4gICAgICAgIC8vIFNob3VsZCBub3QgaGFwcGVuLCBkaXNjYXJkIGR1cGxpY2F0ZXMuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlkTWFwW2lkXSA9IHNjcmlwdDtcbiAgICAgIGNvbnN0IHVyaSA9IGdldE5hbWVVUkkoc2NyaXB0KTtcbiAgICAgIGlmICh1cmlNYXBbdXJpXSkge1xuICAgICAgICAvLyBOYW1lc3BhY2UgY29uZmxpY3RzIVxuICAgICAgICAvLyBTaG91bGQgbm90IGhhcHBlbiwgZGlzY2FyZCBkdXBsaWNhdGVzLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB1cmlNYXBbdXJpXSA9IHNjcmlwdDtcbiAgICAgIHNjcmlwdC5wcm9wcyA9IHtcbiAgICAgICAgLi4uc2NyaXB0LnByb3BzLFxuICAgICAgICBpZCxcbiAgICAgICAgdXJpLFxuICAgICAgfTtcbiAgICAgIHNjcmlwdC5jdXN0b20gPSB7XG4gICAgICAgIC4uLmdldERlZmF1bHRDdXN0b20oKSxcbiAgICAgICAgLi4uc2NyaXB0LmN1c3RvbSxcbiAgICAgIH07XG4gICAgICBzdG9yZUluZm8uaWQgPSBNYXRoLm1heChzdG9yZUluZm8uaWQsIGlkKTtcbiAgICAgIHN0b3JlSW5mby5wb3NpdGlvbiA9IE1hdGgubWF4KHN0b3JlSW5mby5wb3NpdGlvbiwgZ2V0SW50KHNjcmlwdC5wcm9wcy5wb3NpdGlvbikpO1xuICAgICAgc2NyaXB0cy5wdXNoKHNjcmlwdCk7XG4gICAgICAvLyBsaXN0aW5nIGFsbCBrbm93biByZXNvdXJjZSB1cmxzIGluIG9yZGVyIHRvIHJlbW92ZSB1bnVzZWQgbW9kIGtleXNcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3VzdG9tOiB7IHBhdGhNYXAgPSB7fSB9ID0ge30sXG4gICAgICAgIG1ldGEgPSBzY3JpcHQubWV0YSA9IHt9LFxuICAgICAgfSA9IHNjcmlwdDtcbiAgICAgIG1ldGEuZ3JhbnQgPSBbLi4ubmV3IFNldChtZXRhLmdyYW50IHx8IFtdKV07IC8vIGRlZHVwbGljYXRlXG4gICAgICBtZXRhLnJlcXVpcmU/LmZvckVhY2gocmVtZW1iZXJVcmwsIHBhdGhNYXApO1xuICAgICAgT2JqZWN0LnZhbHVlcyhtZXRhLnJlc291cmNlcyB8fCB7fSkuZm9yRWFjaChyZW1lbWJlclVybCwgcGF0aE1hcCk7XG4gICAgICBwYXRoTWFwOjpyZW1lbWJlclVybChtZXRhLmljb24pO1xuICAgIH0gZWxzZSBpZiAoa2V5LnN0YXJ0c1dpdGgoc3RvcmFnZS5tb2QucHJlZml4KSkge1xuICAgICAgbW9kcy5wdXNoKGtleS5zbGljZShzdG9yYWdlLm1vZC5wcmVmaXgubGVuZ3RoKSk7XG4gICAgfVxuICB9KTtcbiAgc3RvcmFnZS5tb2QucmVtb3ZlTXVsdGkobW9kcy5maWx0ZXIodXJsID0+ICFyZXNVcmxzLmluY2x1ZGVzKHVybCkpKTtcbiAgT2JqZWN0LmFzc2lnbihzdG9yZSwge1xuICAgIHNjcmlwdHMsXG4gICAgc3RvcmVJbmZvLFxuICAgIHNjcmlwdE1hcDogc2NyaXB0cy5yZWR1Y2UoKG1hcCwgaXRlbSkgPT4ge1xuICAgICAgbWFwW2l0ZW0ucHJvcHMuaWRdID0gaXRlbTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pLFxuICB9KTtcbiAgLy8gU3dpdGNoIGRlZmF1bHRJbmplY3RJbnRvIGZyb20gYHBhZ2VgIHRvIGBhdXRvYCB3aGVuIHVwZ3JhZGluZyBWTTIuMTIuNyBvciBvbGRlclxuICBpZiAodmVyc2lvbiAhPT0gbGFzdFZlcnNpb25cbiAgJiYgSVNfRklSRUZPWFxuICAmJiBkYXRhLm9wdGlvbnM/LmRlZmF1bHRJbmplY3RJbnRvID09PSBJTkpFQ1RfUEFHRVxuICAmJiBjb21wYXJlVmVyc2lvbihsYXN0VmVyc2lvbiwgJzIuMTIuNycpIDw9IDApIHtcbiAgICBzZXRPcHRpb24oJ2RlZmF1bHRJbmplY3RJbnRvJywgSU5KRUNUX0FVVE8pO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgIGNvbnNvbGUubG9nKCdzdG9yZTonLCBzdG9yZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICB9XG4gIHZhY3V1bShkYXRhKTtcbiAgcmV0dXJuIHNvcnRTY3JpcHRzKCk7XG59KTtcblxuLyoqIEByZXR1cm4ge251bWJlcn0gKi9cbmZ1bmN0aW9uIGdldEludCh2YWwpIHtcbiAgcmV0dXJuICt2YWwgfHwgMDtcbn1cblxuLyoqIEByZXR1cm4gez9udW1iZXJ9ICovXG5mdW5jdGlvbiBnZXRQcm9wc0lkKHNjcmlwdCkge1xuICByZXR1cm4gc2NyaXB0Py5wcm9wcy5pZDtcbn1cblxuLyoqIEByZXR1cm4ge3ZvaWR9ICovXG5mdW5jdGlvbiB1cGRhdGVMYXN0TW9kaWZpZWQoKSB7XG4gIHNldE9wdGlvbignbGFzdE1vZGlmaWVkJywgRGF0ZS5ub3coKSk7XG59XG5cbi8qKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59ICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbm9ybWFsaXplUG9zaXRpb24oKSB7XG4gIGNvbnN0IHVwZGF0ZXMgPSBzdG9yZS5zY3JpcHRzLmZpbHRlcigoeyBwcm9wcyB9LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gaW5kZXggKyAxO1xuICAgIGNvbnN0IHJlcyA9IHByb3BzLnBvc2l0aW9uICE9PSBwb3NpdGlvbjtcbiAgICBpZiAocmVzKSBwcm9wcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHJldHVybiByZXM7XG4gIH0pO1xuICBzdG9yZS5zdG9yZUluZm8ucG9zaXRpb24gPSBzdG9yZS5zY3JpcHRzLmxlbmd0aDtcbiAgaWYgKHVwZGF0ZXMubGVuZ3RoKSB7XG4gICAgYXdhaXQgc3RvcmFnZS5zY3JpcHQuZHVtcCh1cGRhdGVzKTtcbiAgICB1cGRhdGVMYXN0TW9kaWZpZWQoKTtcbiAgfVxuICByZXR1cm4gdXBkYXRlcy5sZW5ndGg7XG59XG5cbi8qKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59ICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc29ydFNjcmlwdHMoKSB7XG4gIHN0b3JlLnNjcmlwdHMuc29ydCgoYSwgYikgPT4gZ2V0SW50KGEucHJvcHMucG9zaXRpb24pIC0gZ2V0SW50KGIucHJvcHMucG9zaXRpb24pKTtcbiAgY29uc3QgY2hhbmdlZCA9IGF3YWl0IG5vcm1hbGl6ZVBvc2l0aW9uKCk7XG4gIHNlbmRDbWQoJ1NjcmlwdHNVcGRhdGVkJywgbnVsbCk7XG4gIHJldHVybiBjaGFuZ2VkO1xufVxuXG4vKiogQHJldHVybiB7P1ZNU2NyaXB0fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmlwdEJ5SWQoaWQpIHtcbiAgcmV0dXJuIHN0b3JlLnNjcmlwdE1hcFtpZF07XG59XG5cbi8qKiBAcmV0dXJuIHs/Vk1TY3JpcHR9ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyaXB0KHsgaWQsIHVyaSwgbWV0YSB9KSB7XG4gIGxldCBzY3JpcHQ7XG4gIGlmIChpZCkge1xuICAgIHNjcmlwdCA9IGdldFNjcmlwdEJ5SWQoaWQpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdXJpKSB1cmkgPSBnZXROYW1lVVJJKHsgbWV0YSwgaWQ6ICdAQHNob3VsZC1oYXZlLW5hbWUnIH0pO1xuICAgIHNjcmlwdCA9IHN0b3JlLnNjcmlwdHMuZmluZCgoeyBwcm9wcyB9KSA9PiB1cmkgPT09IHByb3BzLnVyaSk7XG4gIH1cbiAgcmV0dXJuIHNjcmlwdDtcbn1cblxuLyoqIEByZXR1cm4ge1ZNU2NyaXB0W119ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyaXB0cygpIHtcbiAgcmV0dXJuIHN0b3JlLnNjcmlwdHMuZmlsdGVyKHNjcmlwdCA9PiAhc2NyaXB0LmNvbmZpZy5yZW1vdmVkKTtcbn1cblxuLyoqXG4gKiBAZGVzYyBMb2FkIHZhbHVlcyBmb3IgYmF0Y2ggdXBkYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyW119IGlkc1xuICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVTdG9yZXNCeUlkcyhpZHMpIHtcbiAgcmV0dXJuIHN0b3JhZ2UudmFsdWUuZ2V0TXVsdGkoaWRzKTtcbn1cblxuLyoqXG4gKiBAZGVzYyBEdW1wIHZhbHVlcyBmb3IgYmF0Y2ggdXBkYXRlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZURpY3QgeyBpZDE6IHZhbHVlMSwgaWQyOiB2YWx1ZTIsIC4uLiB9XG4gKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkdW1wVmFsdWVTdG9yZXModmFsdWVEaWN0KSB7XG4gIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5pbmZvKCdVcGRhdGUgdmFsdWUgc3RvcmVzJywgdmFsdWVEaWN0KTtcbiAgYXdhaXQgc3RvcmFnZS52YWx1ZS5kdW1wKHZhbHVlRGljdCk7XG4gIHJldHVybiB2YWx1ZURpY3Q7XG59XG5cbmV4cG9ydCBjb25zdCBFTlZfQ0FDSEVfS0VZUyA9ICdjYWNoZUtleXMnO1xuZXhwb3J0IGNvbnN0IEVOVl9SRVFfS0VZUyA9ICdyZXFLZXlzJztcbmV4cG9ydCBjb25zdCBFTlZfVkFMVUVfSURTID0gJ3ZhbHVlSWRzJztcbmNvbnN0IEdNVkFMVUVTX1JFID0gL15HTVtfLl0obGlzdFZhbHVlc3woW2dzXWV0fGRlbGV0ZSlWYWx1ZSkkLztcbmNvbnN0IFJVTl9BVF9SRSA9IC9eZG9jdW1lbnQtKHN0YXJ0fGJvZHl8ZW5kfGlkbGUpJC87XG4vKipcbiAqIEBkZXNjIEdldCBzY3JpcHRzIHRvIGJlIGluamVjdGVkIHRvIHBhZ2Ugd2l0aCBzcGVjaWZpYyBVUkwuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTY3JpcHRzQnlVUkwodXJsLCBpc1RvcCkge1xuICBjb25zdCBhbGxTY3JpcHRzID0gdGVzdEJsYWNrbGlzdCh1cmwpXG4gICAgPyBbXVxuICAgIDogc3RvcmUuc2NyaXB0cy5maWx0ZXIoc2NyaXB0ID0+IChcbiAgICAgICFzY3JpcHQuY29uZmlnLnJlbW92ZWRcbiAgICAgICYmIChpc1RvcCB8fCAhKHNjcmlwdC5jdXN0b20ubm9mcmFtZXMgPz8gc2NyaXB0Lm1ldGEubm9mcmFtZXMpKVxuICAgICAgJiYgdGVzdFNjcmlwdCh1cmwsIHNjcmlwdClcbiAgICApKTtcbiAgY29uc3QgZGlzYWJsZWRJZHMgPSBbXTtcbiAgLyoqIEBuYW1lc3BhY2UgVk1TY3JpcHRCeVVybERhdGEgKi9cbiAgY29uc3QgW2VudlN0YXJ0LCBlbnZEZWxheWVkXSA9IFswLCAxXS5tYXAoKCkgPT4gKHtcbiAgICBpZHM6IFtdLFxuICAgIC8qKiBAdHlwZSB7KFZNU2NyaXB0ICYgVk1JbmplY3RlZFNjcmlwdClbXX0gKi9cbiAgICBzY3JpcHRzOiBbXSxcbiAgICBbRU5WX0NBQ0hFX0tFWVNdOiBbXSxcbiAgICBbRU5WX1JFUV9LRVlTXTogW10sXG4gICAgW0VOVl9WQUxVRV9JRFNdOiBbXSxcbiAgfSkpO1xuICBhbGxTY3JpcHRzLmZvckVhY2goKHNjcmlwdCkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHNjcmlwdC5wcm9wcztcbiAgICBpZiAoIXNjcmlwdC5jb25maWcuZW5hYmxlZCkge1xuICAgICAgZGlzYWJsZWRJZHMucHVzaChpZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgbWV0YSwgY3VzdG9tIH0gPSBzY3JpcHQ7XG4gICAgY29uc3QgeyBwYXRoTWFwID0gYnVpbGRQYXRoTWFwKHNjcmlwdCkgfSA9IGN1c3RvbTtcbiAgICBjb25zdCBydW5BdCA9IGAke2N1c3RvbS5ydW5BdCB8fCBtZXRhLnJ1bkF0IHx8ICcnfWAubWF0Y2goUlVOX0FUX1JFKT8uWzFdIHx8ICdlbmQnO1xuICAgIGNvbnN0IGVudiA9IHJ1bkF0ID09PSAnc3RhcnQnIHx8IHJ1bkF0ID09PSAnYm9keScgPyBlbnZTdGFydCA6IGVudkRlbGF5ZWQ7XG4gICAgZW52Lmlkcy5wdXNoKGlkKTtcbiAgICBpZiAobWV0YS5ncmFudC5zb21lKEdNVkFMVUVTX1JFLnRlc3QsIEdNVkFMVUVTX1JFKSkge1xuICAgICAgZW52W0VOVl9WQUxVRV9JRFNdLnB1c2goaWQpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtsaXN0LCBuYW1lXSBvZiBbXG4gICAgICBbbWV0YS5yZXF1aXJlLCBFTlZfUkVRX0tFWVNdLFxuICAgICAgW09iamVjdC52YWx1ZXMobWV0YS5yZXNvdXJjZXMpLCBFTlZfQ0FDSEVfS0VZU10sXG4gICAgXSkge1xuICAgICAgbGlzdC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGtleSA9IHBhdGhNYXBba2V5XSB8fCBrZXk7XG4gICAgICAgIGlmICghZW52U3RhcnRbbmFtZV0uaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGVudltuYW1lXS5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogQG5hbWVzcGFjZSBWTUluamVjdGVkU2NyaXB0ICovXG4gICAgZW52LnNjcmlwdHMucHVzaCh7IC4uLnNjcmlwdCwgcnVuQXQgfSk7XG4gIH0pO1xuICBpZiAoZW52RGVsYXllZC5pZHMubGVuZ3RoKSB7XG4gICAgZW52RGVsYXllZC5wcm9taXNlID0gcmVhZEVudmlyb25tZW50RGF0YShlbnZEZWxheWVkKTtcbiAgfVxuICAvKiogQG5hbWVzcGFjZSBWTVNjcmlwdEJ5VXJsRGF0YSAqL1xuICByZXR1cm4ge1xuICAgIC4uLmVudlN0YXJ0LFxuICAgIC4uLmF3YWl0IHJlYWRFbnZpcm9ubWVudERhdGEoZW52U3RhcnQpLFxuICAgIGRpc2FibGVkSWRzLFxuICAgIGVudkRlbGF5ZWQsXG4gIH07XG59XG5cbi8qKlxuICogT2JqZWN0IGtleXMgPT0gYXJlYXMgaW4gYHN0b3JhZ2VgIG1vZHVsZS5cbiAqIEBuYW1lc3BhY2UgVk1TY3JpcHRCeVVybERhdGFcbiAqL1xuY29uc3QgU1RPUkFHRV9ST1VURVMgPSBPYmplY3QuZW50cmllcyh7XG4gIGNhY2hlOiBFTlZfQ0FDSEVfS0VZUyxcbiAgY29kZTogJ2lkcycsXG4gIHJlcXVpcmU6IEVOVl9SRVFfS0VZUyxcbiAgdmFsdWU6IEVOVl9WQUxVRV9JRFMsXG59KTtcbmNvbnN0IHJldHJpZWRTdG9yYWdlS2V5cyA9IHt9O1xuXG5hc3luYyBmdW5jdGlvbiByZWFkRW52aXJvbm1lbnREYXRhKGVudiwgaXNSZXRyeSkge1xuICBjb25zdCBrZXlzID0gW107XG4gIFNUT1JBR0VfUk9VVEVTLmZvckVhY2goKFthcmVhLCBzcmNJZHNdKSA9PiB7XG4gICAgZW52W3NyY0lkc10uZm9yRWFjaChpZCA9PiB7XG4gICAgICBrZXlzLnB1c2goc3RvcmFnZVthcmVhXS5nZXRLZXkoaWQpKTtcbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBzdG9yYWdlLmJhc2UuZ2V0TXVsdGkoa2V5cyk7XG4gIGZvciAoY29uc3QgW2FyZWEsIHNyY0lkc10gb2YgU1RPUkFHRV9ST1VURVMpIHtcbiAgICBlbnZbYXJlYV0gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIGVudltzcmNJZHNdKSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3N0b3JhZ2VbYXJlYV0uZ2V0S2V5KGlkKV07XG4gICAgICBlbnZbYXJlYV1baWRdID0gdmFsO1xuICAgICAgaWYgKHZhbCA9PSBudWxsICYmIGFyZWEgIT09ICd2YWx1ZScgJiYgcmV0cmllZFN0b3JhZ2VLZXlzW2FyZWEgKyBpZF0gIT09IDIpIHtcbiAgICAgICAgY29uc3QgZXJyID0gYFRoZSBcIiR7YXJlYX1cIiBzdG9yYWdlIGlzIG1pc3NpbmcgXCIke2lkfVwiIWA7XG4gICAgICAgIGNvbnN0IGVycjIgPSAnVmFjdXVtaW5nIGRpZCBub3QgaGVscC4gUGxlYXNlIHJlaW5zdGFsbCB0aGUgYWZmZWN0ZWQgc2NyaXB0cy4nO1xuICAgICAgICByZXRyaWVkU3RvcmFnZUtleXNbYXJlYSArIGlkXSA9IGlzUmV0cnkgPyAyIDogMTtcbiAgICAgICAgaWYgKCFpc1JldHJ5KSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGVyciwgJ1ZhY3V1bWluZy4uLicpO1xuICAgICAgICAgIGlmIChhd2FpdCB2YWN1dW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRFbnZpcm9ubWVudERhdGEoZW52LCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIsIGVycjIpO1xuICAgICAgICBub3RpZnkoeyB0aXRsZTogZXJyLCBib2R5OiBlcnIyIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZW52O1xufVxuXG4vKipcbiAqIEBkZXNjIEdldCBkYXRhIGZvciBkYXNoYm9hcmQuXG4gKiBAcmV0dXJuIHtQcm9taXNlPHsgc2NyaXB0czogVk1TY3JpcHRbXSwgY2FjaGU6IE9iamVjdCB9Pn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoaWRzKSB7XG4gIGNvbnN0IHNjcmlwdHMgPSBpZHMgPyBpZHMubWFwKGdldFNjcmlwdEJ5SWQpIDogc3RvcmUuc2NyaXB0cztcbiAgcmV0dXJuIHtcbiAgICBzY3JpcHRzLFxuICAgIGNhY2hlOiBhd2FpdCBnZXRJY29uQ2FjaGUoc2NyaXB0cyksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEljb25DYWNoZShzY3JpcHRzKSB7XG4gIGNvbnN0IGljb25VcmxzID0gW107XG4gIHNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgY29uc3QgeyBpY29uIH0gPSBzY3JpcHQubWV0YTtcbiAgICBpZiAoaXNSZW1vdGUoaWNvbikpIHtcbiAgICAgIGljb25VcmxzLnB1c2goc2NyaXB0LmN1c3RvbS5wYXRoTWFwPy5baWNvbl0gfHwgaWNvbik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGljb25VcmxzLmxlbmd0aFxuICAgID8gc3RvcmFnZS5jYWNoZS5nZXRNdWx0aShpY29uVXJscywgdW5kZWZpbmVkLCBzdG9yYWdlLmNhY2hlLm1ha2VEYXRhVXJpKVxuICAgIDoge307XG59XG5cbi8qKiBAcmV0dXJuIHtudW1iZXJ9ICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZW1vdmUoeyBmb3JjZSB9ID0ge30pIHtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgdG9SZW1vdmUgPSBzdG9yZS5zY3JpcHRzLmZpbHRlcihzY3JpcHQgPT4gc2NyaXB0LmNvbmZpZy5yZW1vdmVkICYmIChcbiAgICBmb3JjZSB8fCBub3cgLSBnZXRJbnQoc2NyaXB0LnByb3BzLmxhc3RNb2RpZmllZCkgPiBUSU1FT1VUX1dFRUtcbiAgKSk7XG4gIGlmICh0b1JlbW92ZS5sZW5ndGgpIHtcbiAgICBzdG9yZS5zY3JpcHRzID0gc3RvcmUuc2NyaXB0cy5maWx0ZXIoc2NyaXB0ID0+ICFzY3JpcHQuY29uZmlnLnJlbW92ZWQpO1xuICAgIGNvbnN0IGlkcyA9IHRvUmVtb3ZlLm1hcChnZXRQcm9wc0lkKTtcbiAgICBzdG9yYWdlLnNjcmlwdC5yZW1vdmVNdWx0aShpZHMpO1xuICAgIHN0b3JhZ2UuY29kZS5yZW1vdmVNdWx0aShpZHMpO1xuICAgIHN0b3JhZ2UudmFsdWUucmVtb3ZlTXVsdGkoaWRzKTtcbiAgfVxuICByZXR1cm4gdG9SZW1vdmUubGVuZ3RoO1xufVxuXG4vKiogQHJldHVybiB7c3RyaW5nfSAqL1xuZnVuY3Rpb24gZ2V0VVVJRCgpIHtcbiAgY29uc3Qgcm5kID0gbmV3IFVpbnQxNkFycmF5KDgpO1xuICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhybmQpO1xuICAvLyB4eHh4eHh4eC14eHh4LU14eHgtTnh4eC14eHh4eHh4eHh4eHhcbiAgLy8gV2UncmUgdXNpbmcgVVVJRHY0IHZhcmlhbnQgMSBzbyBOPTQgYW5kIE09OFxuICAvLyBTZWUgZm9ybWF0X3V1aWRfdjNvcjUgaW4gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9yZmMvcmZjNDEyMi50eHRcbiAgcm5kWzNdID0gcm5kWzNdICYgMHgwRkZGIHwgMHg0MDAwOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWJpdHdpc2VcbiAgcm5kWzRdID0gcm5kWzRdICYgMHgzRkZGIHwgMHg4MDAwOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWJpdHdpc2VcbiAgcmV0dXJuICcwMS0yLTMtNC01NjcnLnJlcGxhY2UoL1xcZC9nLCBpID0+IChybmRbaV0gKyAweDFfMDAwMCkudG9TdHJpbmcoMTYpLnNsaWNlKC00KSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTVNjcmlwdH0gc2NyaXB0XG4gKiBAcGFyYW0ge3N0cmluZ30gY29kZVxuICogQHJldHVybiB7UHJvbWlzZTxWTVNjcmlwdFtdPn1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2F2ZVNjcmlwdChzY3JpcHQsIGNvZGUpIHtcbiAgY29uc3QgY29uZmlnID0gc2NyaXB0LmNvbmZpZyB8fCB7fTtcbiAgY29uZmlnLmVuYWJsZWQgPSBnZXRJbnQoY29uZmlnLmVuYWJsZWQpO1xuICBjb25maWcuc2hvdWxkVXBkYXRlID0gZ2V0SW50KGNvbmZpZy5zaG91bGRVcGRhdGUpO1xuICBjb25zdCBwcm9wcyA9IHNjcmlwdC5wcm9wcyB8fCB7fTtcbiAgbGV0IG9sZFNjcmlwdDtcbiAgaWYgKCFwcm9wcy5pZCkge1xuICAgIHN0b3JlLnN0b3JlSW5mby5pZCArPSAxO1xuICAgIHByb3BzLmlkID0gc3RvcmUuc3RvcmVJbmZvLmlkO1xuICB9IGVsc2Uge1xuICAgIG9sZFNjcmlwdCA9IHN0b3JlLnNjcmlwdE1hcFtwcm9wcy5pZF07XG4gIH1cbiAgcHJvcHMudXJpID0gZ2V0TmFtZVVSSShzY3JpcHQpO1xuICBwcm9wcy51dWlkID0gcHJvcHMudXVpZCB8fCBjcnlwdG8ucmFuZG9tVVVJRD8uKCkgfHwgZ2V0VVVJRCgpO1xuICAvLyBEbyBub3QgYWxsb3cgc2NyaXB0IHdpdGggc2FtZSBuYW1lIGFuZCBuYW1lc3BhY2VcbiAgaWYgKHN0b3JlLnNjcmlwdHMuc29tZSgoeyBwcm9wczogeyBpZCwgdXJpIH0gPSB7fSB9KSA9PiBwcm9wcy5pZCAhPT0gaWQgJiYgcHJvcHMudXJpID09PSB1cmkpKSB7XG4gICAgdGhyb3cgaTE4bignbXNnTmFtZXNwYWNlQ29uZmxpY3QnKTtcbiAgfVxuICBpZiAob2xkU2NyaXB0KSB7XG4gICAgc2NyaXB0LmNvbmZpZyA9IHsgLi4ub2xkU2NyaXB0LmNvbmZpZywgLi4uY29uZmlnIH07XG4gICAgc2NyaXB0LnByb3BzID0geyAuLi5vbGRTY3JpcHQucHJvcHMsIC4uLnByb3BzIH07XG4gICAgY29uc3QgaW5kZXggPSBzdG9yZS5zY3JpcHRzLmluZGV4T2Yob2xkU2NyaXB0KTtcbiAgICBzdG9yZS5zY3JpcHRzW2luZGV4XSA9IHNjcmlwdDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXByb3BzLnBvc2l0aW9uKSB7XG4gICAgICBzdG9yZS5zdG9yZUluZm8ucG9zaXRpb24gKz0gMTtcbiAgICAgIHByb3BzLnBvc2l0aW9uID0gc3RvcmUuc3RvcmVJbmZvLnBvc2l0aW9uO1xuICAgIH0gZWxzZSBpZiAoc3RvcmUuc3RvcmVJbmZvLnBvc2l0aW9uIDwgcHJvcHMucG9zaXRpb24pIHtcbiAgICAgIHN0b3JlLnN0b3JlSW5mby5wb3NpdGlvbiA9IHByb3BzLnBvc2l0aW9uO1xuICAgIH1cbiAgICBzY3JpcHQuY29uZmlnID0gY29uZmlnO1xuICAgIHNjcmlwdC5wcm9wcyA9IHByb3BzO1xuICAgIHN0b3JlLnNjcmlwdHMucHVzaChzY3JpcHQpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgc3RvcmFnZS5zY3JpcHQuZHVtcChzY3JpcHQpLFxuICAgIHN0b3JhZ2UuY29kZS5zZXQocHJvcHMuaWQsIGNvZGUpLFxuICBdKTtcbn1cblxuLyoqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59ICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2NyaXB0SW5mbyhpZCwgZGF0YSkge1xuICBjb25zdCBzY3JpcHQgPSBzdG9yZS5zY3JpcHRNYXBbaWRdO1xuICBpZiAoIXNjcmlwdCkgdGhyb3cgbnVsbDtcbiAgc2NyaXB0LnByb3BzID0geyAuLi5zY3JpcHQucHJvcHMsIC4uLmRhdGEucHJvcHMgfTtcbiAgc2NyaXB0LmNvbmZpZyA9IHsgLi4uc2NyaXB0LmNvbmZpZywgLi4uZGF0YS5jb25maWcgfTtcbiAgc2NyaXB0LmN1c3RvbSA9IHsgLi4uc2NyaXB0LmN1c3RvbSwgLi4uZGF0YS5jdXN0b20gfTtcbiAgYXdhaXQgc3RvcmFnZS5zY3JpcHQuZHVtcChzY3JpcHQpO1xuICByZXR1cm4gc2VuZENtZChDTURfU0NSSVBUX1VQREFURSwgeyB3aGVyZTogeyBpZCB9LCB1cGRhdGU6IHNjcmlwdCB9KTtcbn1cblxuLyoqIEByZXR1cm4ge1Byb21pc2U8eyBpc05ldz8sIHVwZGF0ZSwgd2hlcmUgfT59ICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VTY3JpcHQoc3JjKSB7XG4gIGNvbnN0IG1ldGEgPSBwYXJzZU1ldGEoc3JjLmNvZGUpO1xuICBpZiAoIW1ldGEubmFtZSkgdGhyb3cgYCR7aTE4bignbXNnSW52YWxpZFNjcmlwdCcpfVxcbiR7aTE4bignbGFiZWxOb05hbWUnKX1gO1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgdXBkYXRlOiB7XG4gICAgICBtZXNzYWdlOiBzcmMubWVzc2FnZSA9PSBudWxsID8gaTE4bignbXNnVXBkYXRlZCcpIDogc3JjLm1lc3NhZ2UgfHwgJycsXG4gICAgfSxcbiAgfTtcbiAgbGV0IGNtZCA9IENNRF9TQ1JJUFRfVVBEQVRFO1xuICBsZXQgc2NyaXB0O1xuICBjb25zdCBvbGRTY3JpcHQgPSBhd2FpdCBnZXRTY3JpcHQoeyBpZDogc3JjLmlkLCBtZXRhIH0pO1xuICBpZiAob2xkU2NyaXB0KSB7XG4gICAgaWYgKHNyYy5pc05ldykgdGhyb3cgaTE4bignbXNnTmFtZXNwYWNlQ29uZmxpY3QnKTtcbiAgICBzY3JpcHQgPSB7IC4uLm9sZFNjcmlwdCB9O1xuICB9IGVsc2Uge1xuICAgICh7IHNjcmlwdCB9ID0gbmV3U2NyaXB0KCkpO1xuICAgIGNtZCA9IENNRF9TQ1JJUFRfQUREO1xuICAgIHJlc3VsdC5pc05ldyA9IHRydWU7XG4gICAgcmVzdWx0LnVwZGF0ZS5tZXNzYWdlID0gaTE4bignbXNnSW5zdGFsbGVkJyk7XG4gIH1cbiAgc2NyaXB0LmNvbmZpZyA9IHtcbiAgICAuLi5zY3JpcHQuY29uZmlnLFxuICAgIC4uLnNyYy5jb25maWcsXG4gICAgcmVtb3ZlZDogMCwgLy8gZm9yY2UgcmVzZXQgYHJlbW92ZWRgIHNpbmNlIHRoaXMgaXMgYW4gaW5zdGFsbGF0aW9uXG4gIH07XG4gIHNjcmlwdC5jdXN0b20gPSB7XG4gICAgLi4uc2NyaXB0LmN1c3RvbSxcbiAgICAuLi5zcmMuY3VzdG9tLFxuICB9O1xuICBzY3JpcHQucHJvcHMgPSB7XG4gICAgLi4uc2NyaXB0LnByb3BzLFxuICAgIGxhc3RNb2RpZmllZDogRGF0ZS5ub3coKSxcbiAgICBsYXN0VXBkYXRlZDogRGF0ZS5ub3coKSxcbiAgICAuLi5zcmMucHJvcHMsXG4gIH07XG4gIHNjcmlwdC5tZXRhID0gbWV0YTtcbiAgaWYgKCFtZXRhLmhvbWVwYWdlVVJMICYmICFzY3JpcHQuY3VzdG9tLmhvbWVwYWdlVVJMICYmIGlzUmVtb3RlKHNyYy5mcm9tKSkge1xuICAgIHNjcmlwdC5jdXN0b20uaG9tZXBhZ2VVUkwgPSBzcmMuZnJvbTtcbiAgfVxuICBpZiAoaXNSZW1vdGUoc3JjLnVybCkpIHNjcmlwdC5jdXN0b20ubGFzdEluc3RhbGxVUkwgPSBzcmMudXJsO1xuICBpZiAoc3JjLnBvc2l0aW9uKSBzY3JpcHQucHJvcHMucG9zaXRpb24gPSArc3JjLnBvc2l0aW9uO1xuICBidWlsZFBhdGhNYXAoc2NyaXB0LCBzcmMudXJsKTtcbiAgYXdhaXQgc2F2ZVNjcmlwdChzY3JpcHQsIHNyYy5jb2RlKTtcbiAgZmV0Y2hSZXNvdXJjZXMoc2NyaXB0LCBzcmMpO1xuICBPYmplY3QuYXNzaWduKHJlc3VsdC51cGRhdGUsIHNjcmlwdCwgc3JjLnVwZGF0ZSk7XG4gIHJlc3VsdC53aGVyZSA9IHsgaWQ6IHNjcmlwdC5wcm9wcy5pZCB9O1xuICBzZW5kQ21kKGNtZCwgcmVzdWx0KTtcbiAgcGx1Z2luRXZlbnRzLmVtaXQoJ3NjcmlwdENoYW5nZWQnLCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogQHJldHVybiB7T2JqZWN0fSAqL1xuZnVuY3Rpb24gYnVpbGRQYXRoTWFwKHNjcmlwdCwgYmFzZSkge1xuICBjb25zdCB7IG1ldGEgfSA9IHNjcmlwdDtcbiAgY29uc3QgYmFzZVVybCA9IGJhc2UgfHwgc2NyaXB0LmN1c3RvbS5sYXN0SW5zdGFsbFVSTDtcbiAgY29uc3QgcGF0aE1hcCA9IGJhc2VVcmwgPyBbXG4gICAgLi4ubWV0YS5yZXF1aXJlLFxuICAgIC4uLk9iamVjdC52YWx1ZXMobWV0YS5yZXNvdXJjZXMpLFxuICAgIG1ldGEuaWNvbixcbiAgXS5yZWR1Y2UoKG1hcCwga2V5KSA9PiB7XG4gICAgaWYgKGtleSkge1xuICAgICAgY29uc3QgZnVsbFVybCA9IGdldEZ1bGxVcmwoa2V5LCBiYXNlVXJsKTtcbiAgICAgIGlmIChmdWxsVXJsICE9PSBrZXkpIG1hcFtrZXldID0gZnVsbFVybDtcbiAgICB9XG4gICAgcmV0dXJuIG1hcDtcbiAgfSwge30pIDoge307XG4gIHNjcmlwdC5jdXN0b20ucGF0aE1hcCA9IHBhdGhNYXA7XG4gIHJldHVybiBwYXRoTWFwO1xufVxuXG4vKiogQHJldHVybiB7UHJvbWlzZTw/c3RyaW5nPn0gcmVzb2x2ZXMgdG8gZXJyb3IgdGV4dCBpZiBgcmVzb3VyY2VDYWNoZWAgaXMgYWJzZW50ICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXNvdXJjZXMoc2NyaXB0LCByZXNvdXJjZUNhY2hlLCByZXFPcHRpb25zKSB7XG4gIGNvbnN0IHsgY3VzdG9tOiB7IHBhdGhNYXAgfSwgbWV0YSB9ID0gc2NyaXB0O1xuICBjb25zdCBzbmF0Y2ggPSAodXJsLCB0eXBlLCB2YWxpZGF0b3IpID0+IHtcbiAgICB1cmwgPSBwYXRoTWFwW3VybF0gfHwgdXJsO1xuICAgIGNvbnN0IGNvbnRlbnRzID0gcmVzb3VyY2VDYWNoZT8uW3R5cGVdPy5bdXJsXTtcbiAgICByZXR1cm4gY29udGVudHMgIT0gbnVsbCAmJiAhdmFsaWRhdG9yXG4gICAgICA/IHN0b3JhZ2VbdHlwZV0uc2V0KHVybCwgY29udGVudHMpICYmIG51bGxcbiAgICAgIDogc3RvcmFnZVt0eXBlXS5mZXRjaCh1cmwsIHJlcU9wdGlvbnMsIHZhbGlkYXRvcikuY2F0Y2goZXJyID0+IGVycik7XG4gIH07XG4gIGNvbnN0IGVycm9ycyA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAuLi5tZXRhLnJlcXVpcmUubWFwKHVybCA9PiBzbmF0Y2godXJsLCAncmVxdWlyZScpKSxcbiAgICAuLi5PYmplY3QudmFsdWVzKG1ldGEucmVzb3VyY2VzKS5tYXAodXJsID0+IHNuYXRjaCh1cmwsICdjYWNoZScpKSxcbiAgICBpc1JlbW90ZShtZXRhLmljb24pICYmIHNuYXRjaChtZXRhLmljb24sICdjYWNoZScsIHZhbGlkYXRlSW1hZ2UpLFxuICBdKTtcbiAgaWYgKCFyZXNvdXJjZUNhY2hlPy5pZ25vcmVEZXBzRXJyb3JzKSB7XG4gICAgY29uc3QgZXJyb3IgPSBlcnJvcnMubWFwKGZvcm1hdEh0dHBFcnJvcik6OnRydWVKb2luKCdcXG4nKTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBpMThuKCdtc2dFcnJvckZldGNoaW5nUmVzb3VyY2UnKTtcbiAgICAgIHNlbmRDbWQoQ01EX1NDUklQVF9VUERBVEUsIHtcbiAgICAgICAgdXBkYXRlOiB7IGVycm9yLCBtZXNzYWdlIH0sXG4gICAgICAgIHdoZXJlOiB7IGlkOiBzY3JpcHQucHJvcHMuaWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGAke21lc3NhZ2V9XFxuJHtlcnJvcn1gO1xuICAgIH1cbiAgfVxufVxuXG4vKiogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gcmVzb2x2ZXMgb24gc3VjY2VzcywgcmVqZWN0cyBvbiBlcnJvciAqL1xuZnVuY3Rpb24gdmFsaWRhdGVJbWFnZSh1cmwsIGJ1ZiwgdHlwZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGJsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtidWZdLCB7IHR5cGUgfSkpO1xuICAgIGNvbnN0IG9uRG9uZSA9IChlKSA9PiB7XG4gICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGJsb2JVcmwpO1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ2xvYWQnKSByZXNvbHZlKCk7XG4gICAgICBlbHNlIHJlamVjdChgSU1BR0VfRVJST1I6ICR7dXJsfWApO1xuICAgIH07XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5vbmxvYWQgPSBvbkRvbmU7XG4gICAgaW1hZ2Uub25lcnJvciA9IG9uRG9uZTtcbiAgICBpbWFnZS5zcmMgPSBibG9iVXJsO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0SHR0cEVycm9yKGUpIHtcbiAgcmV0dXJuIGUgJiYgW2Uuc3RhdHVzICYmIGBIVFRQJHtlLnN0YXR1c31gLCBlLnVybF06OnRydWVKb2luKCcgJykgfHwgZTtcbn1cblxubGV0IF92YWN1dW1pbmc7XG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cbiAqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhY3V1bShkYXRhKSB7XG4gIGlmIChfdmFjdXVtaW5nKSByZXR1cm4gX3ZhY3V1bWluZztcbiAgbGV0IG51bUZpeGVzID0gMDtcbiAgbGV0IHJlc29sdmVTZWxmO1xuICBfdmFjdXVtaW5nID0gbmV3IFByb21pc2UociA9PiB7IHJlc29sdmVTZWxmID0gcjsgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBjb25zdCB0b0ZldGNoID0gW107XG4gIGNvbnN0IGtleXNUb1JlbW92ZSA9IFtdO1xuICBjb25zdCB2YWx1ZUtleXMgPSB7fTtcbiAgY29uc3QgY2FjaGVLZXlzID0ge307XG4gIGNvbnN0IHJlcXVpcmVLZXlzID0ge307XG4gIGNvbnN0IGNvZGVLZXlzID0ge307XG4gIGNvbnN0IG1hcHBpbmdzID0gW1xuICAgIFtzdG9yYWdlLnZhbHVlLCB2YWx1ZUtleXNdLFxuICAgIFtzdG9yYWdlLmNhY2hlLCBjYWNoZUtleXNdLFxuICAgIFtzdG9yYWdlLnJlcXVpcmUsIHJlcXVpcmVLZXlzXSxcbiAgICBbc3RvcmFnZS5jb2RlLCBjb2RlS2V5c10sXG4gIF07XG4gIGlmICghZGF0YSkgZGF0YSA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcbiAgZGF0YTo6Zm9yRWFjaEtleSgoa2V5KSA9PiB7XG4gICAgbWFwcGluZ3Muc29tZSgoW3N1YnN0b3JlLCBtYXBdKSA9PiB7XG4gICAgICBjb25zdCB7IHByZWZpeCB9ID0gc3Vic3RvcmU7XG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgocHJlZml4KSkge1xuICAgICAgICAvLyAtMSBmb3IgdW50b3VjaGVkLCAxIGZvciB0b3VjaGVkLCAyIGZvciBtaXNzaW5nXG4gICAgICAgIG1hcFtrZXkuc2xpY2UocHJlZml4Lmxlbmd0aCldID0gLTE7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgdG91Y2ggPSAob2JqLCBrZXksIHNjcmlwdElkKSA9PiB7XG4gICAgaWYgKG9ialtrZXldIDwgMCkge1xuICAgICAgb2JqW2tleV0gPSAxO1xuICAgIH0gZWxzZSBpZiAoIW9ialtrZXldKSB7XG4gICAgICBvYmpba2V5XSA9IDIgKyBzY3JpcHRJZDtcbiAgICB9XG4gIH07XG4gIHN0b3JlLnNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gc2NyaXB0LnByb3BzO1xuICAgIHRvdWNoKGNvZGVLZXlzLCBpZCwgaWQpO1xuICAgIHRvdWNoKHZhbHVlS2V5cywgaWQsIGlkKTtcbiAgICBpZiAoIXNjcmlwdC5jdXN0b20ucGF0aE1hcCkgYnVpbGRQYXRoTWFwKHNjcmlwdCk7XG4gICAgY29uc3QgeyBwYXRoTWFwIH0gPSBzY3JpcHQuY3VzdG9tO1xuICAgIHNjcmlwdC5tZXRhLnJlcXVpcmUuZm9yRWFjaCgodXJsKSA9PiB7XG4gICAgICB0b3VjaChyZXF1aXJlS2V5cywgcGF0aE1hcFt1cmxdIHx8IHVybCwgaWQpO1xuICAgIH0pO1xuICAgIHNjcmlwdC5tZXRhLnJlc291cmNlczo6Zm9yRWFjaFZhbHVlKCh1cmwpID0+IHtcbiAgICAgIHRvdWNoKGNhY2hlS2V5cywgcGF0aE1hcFt1cmxdIHx8IHVybCwgaWQpO1xuICAgIH0pO1xuICAgIGNvbnN0IHsgaWNvbiB9ID0gc2NyaXB0Lm1ldGE7XG4gICAgaWYgKGlzUmVtb3RlKGljb24pKSB7XG4gICAgICBjb25zdCBmdWxsVXJsID0gcGF0aE1hcFtpY29uXSB8fCBpY29uO1xuICAgICAgdG91Y2goY2FjaGVLZXlzLCBmdWxsVXJsLCBpZCk7XG4gICAgfVxuICB9KTtcbiAgbWFwcGluZ3MuZm9yRWFjaCgoW3N1YnN0b3JlLCBtYXBdKSA9PiB7XG4gICAgbWFwOjpmb3JFYWNoRW50cnkoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAvLyByZWR1bmRhbnQgdmFsdWVcbiAgICAgICAga2V5c1RvUmVtb3ZlLnB1c2goc3Vic3RvcmUuZ2V0S2V5KGtleSkpO1xuICAgICAgICBudW1GaXhlcyArPSAxO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+PSAyICYmIHN1YnN0b3JlLmZldGNoKSB7XG4gICAgICAgIC8vIG1pc3NpbmcgcmVzb3VyY2VcbiAgICAgICAga2V5c1RvUmVtb3ZlLnB1c2goc3RvcmFnZS5tb2QuZ2V0S2V5KGtleSkpO1xuICAgICAgICB0b0ZldGNoLnB1c2goc3Vic3RvcmUuZmV0Y2goa2V5KS5jYXRjaChlcnIgPT4gYCR7XG4gICAgICAgICAgZ2V0U2NyaXB0TmFtZShnZXRTY3JpcHRCeUlkKHZhbHVlIC0gMikpXG4gICAgICAgIH06ICR7XG4gICAgICAgICAgZm9ybWF0SHR0cEVycm9yKGVycilcbiAgICAgICAgfWApKTtcbiAgICAgICAgbnVtRml4ZXMgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGlmIChudW1GaXhlcykge1xuICAgIGF3YWl0IHN0b3JhZ2UuYmFzZS5yZW1vdmVNdWx0aShrZXlzVG9SZW1vdmUpOyAvLyBSZW1vdmluZyBgbW9kYCBiZWZvcmUgZmV0Y2hpbmdcbiAgICByZXN1bHQuZXJyb3JzID0gKGF3YWl0IFByb21pc2UuYWxsKHRvRmV0Y2gpKS5maWx0ZXIoQm9vbGVhbik7XG4gIH1cbiAgX3ZhY3V1bWluZyA9IG51bGw7XG4gIHJlc3VsdC5maXhlcyA9IG51bUZpeGVzO1xuICByZXNvbHZlU2VsZihyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogQHR5cGVkZWYgVk1TY3JpcHRcbiAqIEBwcm9wZXJ0eSB7Vk1TY3JpcHRDb25maWd9IGNvbmZpZ1xuICogQHByb3BlcnR5IHtWTVNjcmlwdEN1c3RvbX0gY3VzdG9tXG4gKiBAcHJvcGVydHkge1ZNU2NyaXB0TWV0YX0gbWV0YVxuICogQHByb3BlcnR5IHtWTVNjcmlwdFByb3BzfSBwcm9wc1xuICovXG4vKiogQHR5cGVkZWYgVk1TY3JpcHRDb25maWcgKlxuICogQHByb3BlcnR5IHtCb29sZWFufSBlbmFibGVkIC0gc3RvcmVkIGFzIDAgb3IgMVxuICogQHByb3BlcnR5IHtCb29sZWFufSByZW1vdmVkIC0gc3RvcmVkIGFzIDAgb3IgMVxuICogQHByb3BlcnR5IHtCb29sZWFufSBzaG91bGRVcGRhdGUgLSBzdG9yZWQgYXMgMCBvciAxXG4gKiBAcHJvcGVydHkge0Jvb2xlYW4gfCBudWxsfSBub3RpZnlVcGRhdGVzIC0gc3RvcmVkIGFzIDAgb3IgMSBvciBudWxsIChkZWZhdWx0KSB3aGljaCBtZWFucyBcInVzZSBnbG9iYWwgc2V0dGluZ1wiXG4gKi9cbi8qKiBAdHlwZWRlZiBWTVNjcmlwdEN1c3RvbSAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRvd25sb2FkVVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaG9tZXBhZ2VVUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYXN0SW5zdGFsbFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHVwZGF0ZVVSTFxuICogQHByb3BlcnR5IHsnYXV0bycgfCAncGFnZScgfCAnY29udGVudCd9IGluamVjdEludG9cbiAqIEBwcm9wZXJ0eSB7bnVsbCB8IDEgfCAwfSBub2ZyYW1lcyAtIG51bGwgb3IgYWJzZW5jZSA9PSBkZWZhdWx0IChzY3JpcHQncyB2YWx1ZSlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGV4Y2x1ZGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGV4Y2x1ZGVNYXRjaFxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gaW5jbHVkZVxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gbWF0Y2hcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JpZ0V4Y2x1ZGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JpZ0V4Y2x1ZGVNYXRjaFxuICogQHByb3BlcnR5IHtib29sZWFufSBvcmlnSW5jbHVkZVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcmlnTWF0Y2hcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBwYXRoTWFwXG4gKiBAcHJvcGVydHkge1ZNU2NyaXB0UnVuQXR9IHJ1bkF0XG4gKi9cbi8qKiBAdHlwZWRlZiBWTVNjcmlwdE1ldGEgKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRlc2NyaXB0aW9uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZG93bmxvYWRVUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGV4Y2x1ZGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGV4Y2x1ZGVNYXRjaFxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZ3JhbnRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBob21lcGFnZVVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGluY2x1ZGVcbiAqIEBwcm9wZXJ0eSB7J2F1dG8nIHwgJ3BhZ2UnIHwgJ2NvbnRlbnQnfSBpbmplY3RJbnRvXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtYXRjaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWVzcGFjZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbm9mcmFtZXNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IHJlcXVpcmVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSByZXNvdXJjZXNcbiAqIEBwcm9wZXJ0eSB7Vk1TY3JpcHRSdW5BdH0gcnVuQXRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdXBwb3J0VVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdmVyc2lvblxuICovXG4vKiogQHR5cGVkZWYgVk1TY3JpcHRQcm9wcyAqXG4gKiBAcHJvcGVydHkge251bWJlcn0gaWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsYXN0TW9kaWZpZWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsYXN0VXBkYXRlZFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHBvc2l0aW9uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXJpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXVpZFxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtcbiAgICdkb2N1bWVudC1zdGFydCcgfCAnZG9jdW1lbnQtYm9keScgfCAnZG9jdW1lbnQtZW5kJyB8ICdkb2N1bWVudC1pZGxlJ1xuIH0gVk1TY3JpcHRSdW5BdFxuICovXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRFdmVudEVtaXR0ZXIoKSB7XG4gIGNvbnN0IGV2ZW50cyA9IHt9O1xuICByZXR1cm4geyBvbiwgb2ZmLCBmaXJlIH07XG5cbiAgZnVuY3Rpb24gb24odHlwZSwgZnVuYykge1xuICAgIGxldCBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgIGlmICghbGlzdCkge1xuICAgICAgbGlzdCA9IFtdO1xuICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdDtcbiAgICB9XG4gICAgbGlzdC5wdXNoKGZ1bmMpO1xuICB9XG4gIGZ1bmN0aW9uIG9mZih0eXBlLCBmdW5jKSB7XG4gICAgY29uc3QgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICBpZiAobGlzdCkge1xuICAgICAgY29uc3QgaSA9IGxpc3QuaW5kZXhPZihmdW5jKTtcbiAgICAgIGlmIChpID49IDApIGxpc3Quc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBmaXJlKHR5cGUsIGRhdGEpIHtcbiAgICBjb25zdCBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgIGlmIChsaXN0KSB7XG4gICAgICBsaXN0LmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgICAgZnVuYyhkYXRhLCB0eXBlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgcG9zdEluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5wb3N0SW5pdGlhbGl6ZS5wdXNoKCgpID0+IHtcbiAgYnJvd3Nlci5jb21tYW5kcy5vbkNvbW1hbmQuYWRkTGlzdGVuZXIoKGNtZCkgPT4ge1xuICAgIGlmIChjbWQgPT09ICduZXdTY3JpcHQnKSB7XG4gICAgICBjb21tYW5kcy5PcGVuRWRpdG9yKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJvdXRlID0gY21kID09PSAnc2V0dGluZ3MnID8gYCMke2NtZH1gIDogJyc7XG4gICAgICBjb21tYW5kcy5UYWJPcGVuKHsgdXJsOiBgL29wdGlvbnMvaW5kZXguaHRtbCR7cm91dGV9YCB9KTtcbiAgICB9XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBpMThuLCBub29wIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgSU5KRUNUQUJMRV9UQUJfVVJMX1JFIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcbmltcG9ydCB7IG9iamVjdFBpY2sgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuaW1wb3J0IHsgcG9zdEluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMsIGZvckVhY2hUYWIgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uLCBob29rT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyB0ZXN0QmxhY2tsaXN0IH0gZnJvbSAnLi90ZXN0ZXInO1xuXG4vLyBzdG9yaW5nIGluIGBjYWNoZWAgb25seSBmb3IgdGhlIGR1cmF0aW9uIG9mIHBhZ2UgbG9hZCBpbiBjYXNlIHRoZXJlIGFyZSAyKyBpZGVudGljYWwgdXJsc1xuY29uc3QgQ0FDSEVfRFVSQVRJT04gPSAxMDAwO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIGFzeW5jIEdldEltYWdlRGF0YSh1cmwpIHtcbiAgICBjb25zdCBrZXkgPSBgR2V0SW1hZ2VEYXRhOiR7dXJsfWA7XG4gICAgcmV0dXJuIGNhY2hlLmdldChrZXkpXG4gICAgICB8fCBjYWNoZS5wdXQoa2V5LCBsb2FkSW1hZ2VEYXRhKHVybCwgeyBiYXNlNjQ6IHRydWUgfSkuY2F0Y2gobm9vcCksIENBQ0hFX0RVUkFUSU9OKTtcbiAgfSxcbiAgU2V0QmFkZ2U6IHNldEJhZGdlLFxufSk7XG5cbi8vIEZpcmVmb3ggQW5kcm9pZCBkb2VzIG5vdCBzdXBwb3J0IHN1Y2ggQVBJcywgdXNlIG5vb3BcblxuY29uc3QgYnJvd3NlckFjdGlvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IHsgY2hyb21lIH0gPSBnbG9iYWw7XG4gIC8vIFVzaW5nIGBjaHJvbWVgIG5hbWVzcGFjZSBpbiBvcmRlciB0byBza2lwIG91ciBicm93c2VyLmpzIHBvbHlmaWxsIGluIENocm9tZVxuICBjb25zdCBhcGkgPSBjaHJvbWUuYnJvd3NlckFjdGlvbjtcbiAgLy8gU3VwcHJlc3MgdGhlIFwibm8gdGFiIGlkXCIgZXJyb3Igd2hlbiBzZXR0aW5nIGFuIGljb24vYmFkZ2UgYXMgaXQgY2Fubm90IGJlIHJlbGlhYmx5IHByZXZlbnRlZFxuICBjb25zdCBpZ25vcmVFcnJvcnMgPSAoKSA9PiBjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XG4gIC8vIFNvbWUgbWV0aG9kcyBsaWtlIHNldEJhZGdlVGV4dCBhZGRlZCBjYWxsYmFja3Mgb25seSBpbiBDaHJvbWUgNjcrLlxuICBjb25zdCBtYWtlTWV0aG9kID0gZm4gPT4gKC4uLmFyZ3MpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXBpOjpmbiguLi5hcmdzLCBpZ25vcmVFcnJvcnMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGFwaTo6Zm4oLi4uYXJncyk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gb2JqZWN0UGljayhhcGksIFtcbiAgICAnc2V0SWNvbicsXG4gICAgJ3NldEJhZGdlVGV4dCcsXG4gICAgJ3NldEJhZGdlQmFja2dyb3VuZENvbG9yJyxcbiAgICAnc2V0VGl0bGUnLFxuICBdLCBmbiA9PiAoZm4gPyBtYWtlTWV0aG9kKGZuKSA6IG5vb3ApKTtcbn0pKCk7XG5cbmNvbnN0IGJhZGdlcyA9IHt9O1xuY29uc3QgS0VZX0lTX0FQUExJRUQgPSAnaXNBcHBsaWVkJztcbmNvbnN0IEtFWV9TSE9XX0JBREdFID0gJ3Nob3dCYWRnZSc7XG5jb25zdCBLRVlfQkFER0VfQ09MT1IgPSAnYmFkZ2VDb2xvcic7XG5jb25zdCBLRVlfQkFER0VfQ09MT1JfQkxPQ0tFRCA9ICdiYWRnZUNvbG9yQmxvY2tlZCc7XG4vKiogQHR5cGUgYm9vbGVhbiAqL1xubGV0IGlzQXBwbGllZDtcbi8qKiBAdHlwZSBWTUJhZGdlTW9kZSAqL1xubGV0IHNob3dCYWRnZTtcbi8qKiBAdHlwZSBzdHJpbmcgKi9cbmxldCBiYWRnZUNvbG9yO1xuLyoqIEB0eXBlIHN0cmluZyAqL1xubGV0IGJhZGdlQ29sb3JCbG9ja2VkO1xuLyoqIEB0eXBlIHN0cmluZyAqL1xubGV0IHRpdGxlQmxhY2tsaXN0ZWQ7XG4vKiogQHR5cGUgc3RyaW5nICovXG5sZXQgdGl0bGVOb25pbmplY3RhYmxlO1xuXG4vLyBXZSdsbCBjYWNoZSB0aGUgaWNvbiBkYXRhIGluIENocm9tZSBhcyBpdCBkb2Vzbid0IGNhY2hlIHRoZSBkYXRhIGFuZCB0YWtlcyB1cCB0byA0MG1zXG4vLyBpbiBvdXIgYmFja2dyb3VuZCBwYWdlIGNvbnRleHQgdG8gc2V0IHRoZSA0IGljb24gc2l6ZXMgZm9yIGVhY2ggbmV3IHRhYiBvcGVuZWRcbmNvbnN0IGljb25DYWNoZSA9ICFJU19GSVJFRk9YICYmIHt9O1xuXG5ob29rT3B0aW9ucygoY2hhbmdlcykgPT4ge1xuICBsZXQgdjtcbiAgY29uc3Qgam9icyA9IFtdO1xuICBpZiAoKHYgPSBjaGFuZ2VzW0tFWV9JU19BUFBMSUVEXSkgIT0gbnVsbCkge1xuICAgIGlzQXBwbGllZCA9IHY7XG4gICAgc2V0SWNvbigpOyAvLyBjaGFuZ2UgdGhlIGRlZmF1bHQgaWNvblxuICAgIGpvYnMucHVzaChzZXRJY29uKTsgLy8gY2hhbmdlIHRoZSBjdXJyZW50IHRhYnMnIGljb25zXG4gIH1cbiAgaWYgKCh2ID0gY2hhbmdlc1tLRVlfU0hPV19CQURHRV0pICE9IG51bGwpIHtcbiAgICBzaG93QmFkZ2UgPSB2O1xuICAgIGpvYnMucHVzaCh1cGRhdGVCYWRnZSk7XG4gIH1cbiAgaWYgKCh2ID0gY2hhbmdlc1tLRVlfQkFER0VfQ09MT1JdKSAmJiAoYmFkZ2VDb2xvciA9IHYpXG4gIHx8ICh2ID0gY2hhbmdlc1tLRVlfQkFER0VfQ09MT1JfQkxPQ0tFRF0pICYmIChiYWRnZUNvbG9yQmxvY2tlZCA9IHYpKSB7XG4gICAgam9icy5wdXNoKHVwZGF0ZUJhZGdlQ29sb3IpO1xuICB9XG4gIGlmICgnYmxhY2tsaXN0JyBpbiBjaGFuZ2VzKSB7XG4gICAgam9icy5wdXNoKHVwZGF0ZVN0YXRlKTtcbiAgfVxuICBpZiAoam9icy5sZW5ndGgpIHtcbiAgICBmb3JFYWNoVGFiKHRhYiA9PiBqb2JzLmZvckVhY2goZm4gPT4gZm4odGFiKSkpO1xuICB9XG59KTtcblxucG9zdEluaXRpYWxpemUucHVzaCgoKSA9PiB7XG4gIGlzQXBwbGllZCA9IGdldE9wdGlvbihLRVlfSVNfQVBQTElFRCk7XG4gIHNob3dCYWRnZSA9IGdldE9wdGlvbihLRVlfU0hPV19CQURHRSk7XG4gIGJhZGdlQ29sb3IgPSBnZXRPcHRpb24oS0VZX0JBREdFX0NPTE9SKTtcbiAgYmFkZ2VDb2xvckJsb2NrZWQgPSBnZXRPcHRpb24oS0VZX0JBREdFX0NPTE9SX0JMT0NLRUQpO1xuICB0aXRsZUJsYWNrbGlzdGVkID0gaTE4bignZmFpbHVyZVJlYXNvbkJsYWNrbGlzdGVkJyk7XG4gIHRpdGxlTm9uaW5qZWN0YWJsZSA9IGkxOG4oJ2ZhaWx1cmVSZWFzb25Ob25pbmplY3RhYmxlJyk7XG4gIGZvckVhY2hUYWIodXBkYXRlU3RhdGUpO1xuICBpZiAoIWlzQXBwbGllZCkgc2V0SWNvbigpOyAvLyBzZXRzIHRoZSBkaW1tZWQgaWNvbiBhcyBkZWZhdWx0XG59KTtcblxuYnJvd3Nlci50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigoaWQpID0+IHtcbiAgZGVsZXRlIGJhZGdlc1tpZF07XG59KTtcblxuYnJvd3Nlci50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGluZm8sIHRhYikgPT4ge1xuICBjb25zdCB7IHVybCB9ID0gaW5mbztcbiAgaWYgKGluZm8uc3RhdHVzID09PSAnbG9hZGluZydcbiAgICAgIC8vIGF0IGxlYXN0IGFib3V0Om5ld3RhYiBpbiBGaXJlZm94IG1heSBvcGVuIHdpdGhvdXQgJ2xvYWRpbmcnIHN0YXR1c1xuICAgICAgfHwgaW5mby5mYXZJY29uVXJsICYmIHRhYi51cmwuc3RhcnRzV2l0aCgnYWJvdXQ6JykpIHtcbiAgICB1cGRhdGVTdGF0ZSh0YWIsIHVybCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzZXRCYWRnZShpZHMsIHsgdGFiLCBmcmFtZUlkIH0pIHtcbiAgY29uc3QgdGFiSWQgPSB0YWIuaWQ7XG4gIGNvbnN0IGRhdGEgPSBiYWRnZXNbdGFiSWRdIHx8IHt9O1xuICBpZiAoIWRhdGEuaWRNYXAgfHwgZnJhbWVJZCA9PT0gMCkge1xuICAgIC8vIDEpIGtlZXBpbmcgZGF0YSBvYmplY3QgdG8gcHJlc2VydmUgZGF0YS5ibG9ja2VkXG4gICAgLy8gMikgJ3RvdGFsJyBhbmQgJ3VuaXF1ZScgbXVzdCBtYXRjaCBzaG93QmFkZ2UgaW4gb3B0aW9ucy1kZWZhdWx0cy5qc1xuICAgIGRhdGEudG90YWwgPSAwO1xuICAgIGRhdGEudW5pcXVlID0gMDtcbiAgICBkYXRhLmlkTWFwID0ge307XG4gICAgYmFkZ2VzW3RhYklkXSA9IGRhdGE7XG4gIH1cbiAgZGF0YS50b3RhbCArPSBpZHMubGVuZ3RoO1xuICBpZiAoaWRzKSB7XG4gICAgaWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICBkYXRhLmlkTWFwW2lkXSA9IDE7XG4gICAgfSk7XG4gICAgZGF0YS51bmlxdWUgPSBPYmplY3Qua2V5cyhkYXRhLmlkTWFwKS5sZW5ndGg7XG4gIH1cbiAgdXBkYXRlQmFkZ2VDb2xvcih0YWIsIGRhdGEpO1xuICB1cGRhdGVCYWRnZSh0YWIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVCYWRnZSh0YWIsIGRhdGEgPSBiYWRnZXNbdGFiLmlkXSkge1xuICBpZiAoZGF0YSkge1xuICAgIGJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHtcbiAgICAgIHRleHQ6IGAke2RhdGFbc2hvd0JhZGdlXSB8fCAnJ31gLFxuICAgICAgdGFiSWQ6IHRhYi5pZCxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCYWRnZUNvbG9yKHRhYiwgZGF0YSA9IGJhZGdlc1t0YWIuaWRdKSB7XG4gIGlmIChkYXRhKSB7XG4gICAgYnJvd3NlckFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7XG4gICAgICBjb2xvcjogZGF0YS5ibG9ja2VkID8gYmFkZ2VDb2xvckJsb2NrZWQgOiBiYWRnZUNvbG9yLFxuICAgICAgdGFiSWQ6IHRhYi5pZCxcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBDaHJvbWUgNzkrIHVzZXMgcGVuZGluZ1VybCB3aGlsZSB0aGUgdGFiIGNvbm5lY3RzIHRvIHRoZSBuZXdseSBuYXZpZ2F0ZWQgVVJMXG4vLyBodHRwczovL2dyb3Vwcy5nb29nbGUuY29tL2EvY2hyb21pdW0ub3JnL2ZvcnVtLyMhdG9waWMvY2hyb21pdW0tZXh0ZW5zaW9ucy81enVfUFQwYXJsc1xuZnVuY3Rpb24gdXBkYXRlU3RhdGUodGFiLCB1cmwgPSB0YWIucGVuZGluZ1VybCB8fCB0YWIudXJsKSB7XG4gIGNvbnN0IHRhYklkID0gdGFiLmlkO1xuICBjb25zdCBpbmplY3RhYmxlID0gSU5KRUNUQUJMRV9UQUJfVVJMX1JFLnRlc3QodXJsKTtcbiAgY29uc3QgYmxhY2tsaXN0ZWQgPSBpbmplY3RhYmxlID8gdGVzdEJsYWNrbGlzdCh1cmwpIDogdW5kZWZpbmVkO1xuICBjb25zdCB0aXRsZSA9IGJsYWNrbGlzdGVkICYmIHRpdGxlQmxhY2tsaXN0ZWQgfHwgIWluamVjdGFibGUgJiYgdGl0bGVOb25pbmplY3RhYmxlIHx8ICcnO1xuICAvLyBpZiB0aGUgdXNlciB1bmJsYWNrbGlzdGVkIHRoaXMgcHJldmlvdXNseSBibG9ja2VkIHRhYiBpbiBzZXR0aW5ncyxcbiAgLy8gYnV0IGRpZG4ndCByZWxvYWQgdGhlIHRhYiB5ZXQsIHdlIG5lZWQgdG8gcmVzdG9yZSB0aGUgaWNvbiBhbmQgdGhlIHRpdGxlXG4gIGlmICh0aXRsZSB8fCAoYmFkZ2VzW3RhYklkXSB8fCB7fSkuYmxvY2tlZCkge1xuICAgIGJyb3dzZXJBY3Rpb24uc2V0VGl0bGUoeyB0aXRsZSwgdGFiSWQgfSk7XG4gICAgY29uc3QgZGF0YSA9IHRpdGxlID8geyBibG9ja2VkOiB0cnVlIH0gOiB7fTtcbiAgICBiYWRnZXNbdGFiSWRdID0gZGF0YTtcbiAgICBzZXRJY29uKHRhYiwgZGF0YSk7XG4gICAgdXBkYXRlQmFkZ2UodGFiLCBkYXRhKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRJY29uKHRhYiA9IHt9LCBkYXRhID0ge30pIHtcbiAgLy8gbW9kZXJuIENocm9tZSBhbmQgRmlyZWZveCB1c2UgMTYvMzIsIG90aGVyIGJyb3dzZXJzIG1heSBzdGlsbCB1c2UgMTkvMzggKGUuZy4gVml2YWxkaSlcbiAgY29uc3QgbW9kID0gZGF0YS5ibG9ja2VkICYmICdiJyB8fCAhaXNBcHBsaWVkICYmICd3JyB8fCAnJztcbiAgY29uc3QgaWNvbkRhdGEgPSB7fTtcbiAgZm9yIChjb25zdCBuIG9mIFsxNiwgMTksIDMyLCAzOF0pIHtcbiAgICBjb25zdCBwYXRoID0gYC9wdWJsaWMvaW1hZ2VzL2ljb24ke259JHttb2R9LnBuZ2A7XG4gICAgbGV0IGljb24gPSBpY29uQ2FjaGUgPyBpY29uQ2FjaGVbcGF0aF0gOiBwYXRoO1xuICAgIGlmICghaWNvbikge1xuICAgICAgaWNvbiA9IGF3YWl0IGxvYWRJbWFnZURhdGEocGF0aCk7XG4gICAgICBpY29uQ2FjaGVbcGF0aF0gPSBpY29uO1xuICAgIH1cbiAgICBpY29uRGF0YVtuXSA9IGljb247XG4gIH1cbiAgYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcbiAgICB0YWJJZDogdGFiLmlkLFxuICAgIFtpY29uQ2FjaGUgPyAnaW1hZ2VEYXRhJyA6ICdwYXRoJ106IGljb25EYXRhLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZEltYWdlRGF0YShwYXRoLCB7IGJhc2U2NCB9ID0ge30pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gcGF0aDtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBpbWc7XG4gICAgICBpZiAoIXdpZHRoKSB7IC8vIEZGIHJlcG9ydHMgMCBmb3IgU1ZHXG4gICAgICAgIHJlc29sdmUocGF0aCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICByZXNvbHZlKGJhc2U2NCA/IGNhbnZhcy50b0RhdGFVUkwoKSA6IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCkpO1xuICAgIH07XG4gICAgaW1nLm9uZXJyb3IgPSByZWplY3Q7XG4gIH0pO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYWNoZSB9IGZyb20gJy4vY2FjaGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRFdmVudEVtaXR0ZXIgfSBmcm9tICcuL2V2ZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9vcHRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vc2VhcmNoJztcbiIsImV4cG9ydCBjb25zdCBleHRlbnNpb25Sb290ID0gYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnLycpO1xuXG5leHBvcnQgY29uc3QgcHJlSW5pdGlhbGl6ZSA9IFtdO1xuZXhwb3J0IGNvbnN0IHBvc3RJbml0aWFsaXplID0gW107XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplKG1haW4pIHtcbiAgY29uc3QgcnVuID0gaW5pdCA9PiAodHlwZW9mIGluaXQgPT09ICdmdW5jdGlvbicgPyBpbml0KCkgOiBpbml0KTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwocHJlSW5pdGlhbGl6ZS5tYXAocnVuKSk7XG4gIGF3YWl0IHJ1bihtYWluKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwocG9zdEluaXRpYWxpemUubWFwKHJ1bikpO1xuICBwcmVJbml0aWFsaXplLmxlbmd0aCA9IDA7XG4gIHBvc3RJbml0aWFsaXplLmxlbmd0aCA9IDA7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0SW1hZ2UsIGkxOG4sIG5vb3AgfSBmcm9tICcjL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBjb21tYW5kcyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5KG9wdGlvbnMpIHtcbiAgYnJvd3Nlci5ub3RpZmljYXRpb25zLmNyZWF0ZShvcHRpb25zLmlkIHx8ICdWaW9sZW50TW9ua2V5Jywge1xuICAgIHR5cGU6ICdiYXNpYycsXG4gICAgaWNvblVybDogZGVmYXVsdEltYWdlLFxuICAgIHRpdGxlOiBgJHtvcHRpb25zLnRpdGxlfSAtICR7aTE4bignZXh0TmFtZScpfWAsXG4gICAgbWVzc2FnZTogb3B0aW9ucy5ib2R5LFxuICAgIGlzQ2xpY2thYmxlOiBvcHRpb25zLmlzQ2xpY2thYmxlLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyb2FkY2FzdChkYXRhKSB7XG4gIGZvckVhY2hUYWIoKHRhYikgPT4ge1xuICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIGRhdGEpXG4gICAgLmNhdGNoKG5vb3ApO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlT3JJZ25vcmUoLi4uYXJncykge1xuICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKC4uLmFyZ3MpLmNhdGNoKG5vb3ApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZm9yRWFjaFRhYihjYWxsYmFjaykge1xuICBjb25zdCB0YWJzID0gYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHt9KTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XG4gICAgY2FsbGJhY2sodGFiKTtcbiAgICBpICs9IDE7XG4gICAgLy8gd2UnbGwgcnVuIGF0IG1vc3QgdGhpcyBtYW55IHRhYnMgaW4gb25lIGV2ZW50IGxvb3AgY3ljbGVcbiAgICAvLyBiZWNhdXNlIGh1bmRyZWRzIG9mIHRhYnMgd291bGQgbWFrZSBvdXIgZXh0ZW5zaW9uIHByb2Nlc3MgdW5yZXNwb25zaXZlLFxuICAgIC8vIHRoZSBzYW1lIHByb2Nlc3MgdXNlZCBieSBvdXIgb3duIHBhZ2VzIGxpa2UgdGhlIGJhY2tncm91bmQgcGFnZSwgZGFzaGJvYXJkLCBvciBwb3B1cHNcbiAgICBpZiAoaSAlIDIwID09PSAwKSBhd2FpdCBuZXcgUHJvbWlzZShzZXRUaW1lb3V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaTE4biwgZGVmYXVsdEltYWdlLCBzZW5kVGFiQ21kIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5jb25zdCBvcGVuZXJzID0ge307XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gKi9cbiAgYXN5bmMgTm90aWZpY2F0aW9uKGRhdGEsIHNyYywgYmdFeHRyYXMpIHtcbiAgICBjb25zdCBub3RpZmljYXRpb25JZCA9IGF3YWl0IGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoe1xuICAgICAgdHlwZTogJ2Jhc2ljJyxcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlIHx8IChJU19GSVJFRk9YID8gaTE4bignZXh0TmFtZScpIDogJycpLCAvLyBDaHJvbWUgYWxyZWFkeSBzaG93cyB0aGUgbmFtZVxuICAgICAgbWVzc2FnZTogZGF0YS50ZXh0LFxuICAgICAgaWNvblVybDogZGF0YS5pbWFnZSB8fCBkZWZhdWx0SW1hZ2UsXG4gICAgfSk7XG4gICAgb3BlbmVyc1tub3RpZmljYXRpb25JZF0gPSBiZ0V4dHJhcz8ub25DbGljayB8fCBzcmMudGFiLmlkO1xuICAgIHJldHVybiBub3RpZmljYXRpb25JZDtcbiAgfSxcbiAgUmVtb3ZlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbklkKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jbGVhcihub3RpZmljYXRpb25JZCk7XG4gIH0sXG59KTtcblxuYnJvd3Nlci5ub3RpZmljYXRpb25zLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcigoaWQpID0+IHtcbiAgY29uc3Qgb3BlbmVySWQgPSBvcGVuZXJzW2lkXTtcbiAgaWYgKG9wZW5lcklkID49IDApIHtcbiAgICBzZW5kVGFiQ21kKG9wZW5lcklkLCAnTm90aWZpY2F0aW9uQ2xpY2snLCBpZCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBvcGVuZXJJZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wZW5lcklkKCk7XG4gIH1cbn0pO1xuXG5icm93c2VyLm5vdGlmaWNhdGlvbnMub25DbG9zZWQuYWRkTGlzdGVuZXIoKGlkKSA9PiB7XG4gIGNvbnN0IG9wZW5lcklkID0gb3BlbmVyc1tpZF07XG4gIGRlbGV0ZSBvcGVuZXJzW2lkXTtcbiAgaWYgKG9wZW5lcklkID49IDApIHtcbiAgICBzZW5kVGFiQ21kKG9wZW5lcklkLCAnTm90aWZpY2F0aW9uQ2xvc2UnLCBpZCk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IHtcbiAgZGVib3VuY2UsIGVuc3VyZUFycmF5LCBpbml0SG9va3MsIG5vcm1hbGl6ZUtleXMsXG59IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IG1hcEVudHJ5LCBvYmplY3RHZXQsIG9iamVjdFNldCB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnIy9jb21tb24vb3B0aW9ucy1kZWZhdWx0cyc7XG5pbXBvcnQgeyBwcmVJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICAvKiogQHJldHVybiB7T2JqZWN0fSAqL1xuICBHZXRBbGxPcHRpb25zKCkge1xuICAgIHJldHVybiBjb21tYW5kcy5HZXRPcHRpb25zKGRlZmF1bHRzKTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge09iamVjdH0gKi9cbiAgR2V0T3B0aW9ucyhkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE6Om1hcEVudHJ5KChba2V5XSkgPT4gZ2V0T3B0aW9uKGtleSkpO1xuICB9LFxuICAvKiogQHJldHVybiB7dm9pZH0gKi9cbiAgU2V0T3B0aW9ucyhkYXRhKSB7XG4gICAgZW5zdXJlQXJyYXkoZGF0YSkuZm9yRWFjaChpdGVtID0+IHNldE9wdGlvbihpdGVtLmtleSwgaXRlbS52YWx1ZSkpO1xuICB9LFxufSk7XG5cbmxldCBjaGFuZ2VzID0ge307XG5jb25zdCBob29rcyA9IGluaXRIb29rcygpO1xuY29uc3QgY2FsbEhvb2tzTGF0ZXIgPSBkZWJvdW5jZShjYWxsSG9va3MsIDEwMCk7XG5cbmxldCBvcHRpb25zID0ge307XG5sZXQgaW5pdFBlbmRpbmcgPSBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCdvcHRpb25zJylcbi50aGVuKCh7IG9wdGlvbnM6IGRhdGEgfSkgPT4ge1xuICBpZiAoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIG9wdGlvbnMgPSBkYXRhO1xuICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICBjb25zb2xlLmxvZygnb3B0aW9uczonLCBvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH1cbiAgaWYgKCFvYmplY3RHZXQob3B0aW9ucywgJ3ZlcnNpb24nKSkge1xuICAgIHNldE9wdGlvbigndmVyc2lvbicsIDEpO1xuICB9XG4gIGluaXRQZW5kaW5nID0gbnVsbDtcbn0pO1xucHJlSW5pdGlhbGl6ZS5wdXNoKGluaXRQZW5kaW5nKTtcblxuZnVuY3Rpb24gZmlyZUNoYW5nZShrZXlzLCB2YWx1ZSkge1xuICAvLyBGbGF0dGVuaW5nIGtleSBwYXRoIHNvIHRoZSBzdWJzY3JpYmVycyBjYW4gdXBkYXRlIG5lc3RlZCB2YWx1ZXMgd2l0aG91dCBvdmVyd3JpdGluZyB0aGUgcGFyZW50XG4gIGNvbnN0IGtleSA9IGtleXMuam9pbignLicpO1xuICAvLyBFbnN1cmluZyB0aGUgY29ycmVjdCBvcmRlciB3aGVuIHVwZGF0ZXMgd2VyZSBtaXhlZCBsaWtlIHRoaXM6IGZvby5iYXI9MTsgZm9vPXtiYXI6Mn07IGZvby5iYXI9M1xuICBkZWxldGUgY2hhbmdlc1trZXldO1xuICBjaGFuZ2VzW2tleV0gPSB2YWx1ZTtcbiAgY2FsbEhvb2tzTGF0ZXIoKTtcbn1cblxuZnVuY3Rpb24gY2FsbEhvb2tzKCkge1xuICBob29rcy5maXJlKGNoYW5nZXMpO1xuICBjaGFuZ2VzID0ge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcHRpb24oa2V5LCBkZWYpIHtcbiAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5KTtcbiAgY29uc3QgbWFpbktleSA9IGtleXNbMF07XG4gIGxldCB2YWx1ZSA9IG9wdGlvbnNbbWFpbktleV07XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB2YWx1ZSA9IGRlZmF1bHRzW21haW5LZXldO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgdmFsdWUgPSBkZWY7XG4gIHJldHVybiBrZXlzLmxlbmd0aCA+IDEgPyBvYmplY3RHZXQodmFsdWUsIGtleXMuc2xpY2UoMSksIGRlZikgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb24oa2V5KSB7XG4gIHJldHVybiBvYmplY3RHZXQoZGVmYXVsdHMsIGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPcHRpb24oa2V5LCB2YWx1ZSkge1xuICBpZiAoaW5pdFBlbmRpbmcpIHtcbiAgICBpbml0UGVuZGluZy50aGVuKCgpID0+IHtcbiAgICAgIHNldE9wdGlvbihrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5KTtcbiAgY29uc3Qgb3B0aW9uS2V5ID0ga2V5cy5qb2luKCcuJyk7XG4gIGxldCBvcHRpb25WYWx1ZSA9IHZhbHVlO1xuICBjb25zdCBtYWluS2V5ID0ga2V5c1swXTtcbiAgaWYgKG1haW5LZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICBvcHRpb25WYWx1ZSA9IG9iamVjdFNldChnZXRPcHRpb24obWFpbktleSksIGtleXMuc2xpY2UoMSksIHZhbHVlKTtcbiAgICB9XG4gICAgb3B0aW9uc1ttYWluS2V5XSA9IG9wdGlvblZhbHVlO1xuICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBvcHRpb25zIH0pO1xuICAgIGZpcmVDaGFuZ2Uoa2V5cywgdmFsdWUpO1xuICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgY29uc29sZS5sb2coJ09wdGlvbnMgdXBkYXRlZDonLCBvcHRpb25LZXksIHZhbHVlLCBvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBob29rT3B0aW9ucyA9IGhvb2tzLmhvb2s7XG4iLCJpbXBvcnQgeyBwYXJzZU1ldGEgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcjL2NvbW1vbi9zdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBjb25zb2xlLmluZm8oJ1VwZ3JhZGUgZGF0YWJhc2UuLi4nKTtcbiAgaW5pdCgpO1xuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IHJlcSA9IGluZGV4ZWREQi5vcGVuKCdWaW9sZW50bW9ua2V5JywgMSk7XG4gICAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRyYW5zZm9ybShyZXEucmVzdWx0KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgZGlkIGhhcHBlbiBpbiBGaXJlZm94LlxuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJlcS5vbmVycm9yID0gcmVqZWN0O1xuICAgIHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG4gICAgICAvLyBObyBhdmFpbGFibGUgdXBncmFkYXRpb25cbiAgICAgIHJlamVjdCgpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtKGRiKSB7XG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihbJ3NjcmlwdHMnLCAncmVxdWlyZScsICdjYWNoZScsICd2YWx1ZXMnXSk7XG4gICAgY29uc3QgdXBkYXRlcyA9IHt9O1xuICAgIGxldCBwcm9jZXNzaW5nID0gMztcbiAgICBjb25zdCBkb25lID0gKCkgPT4ge1xuICAgICAgcHJvY2Vzc2luZyAtPSAxO1xuICAgICAgaWYgKCFwcm9jZXNzaW5nKSByZXNvbHZlKGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQodXBkYXRlcykpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWxsID0gKHN0b3JlTmFtZSwgY2FsbGJhY2spID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IHR4Lm9iamVjdFN0b3JlKHN0b3JlTmFtZSkuZ2V0QWxsKCk7XG4gICAgICByZXEub25zdWNjZXNzID0gKCkgPT4gY2FsbGJhY2socmVxLnJlc3VsdCk7XG4gICAgICByZXEub25lcnJvciA9IHJlamVjdDtcbiAgICB9O1xuICAgIGdldEFsbCgnc2NyaXB0cycsIChhbGxTY3JpcHRzKSA9PiB7XG4gICAgICBjb25zdCB1cmlNYXAgPSB7fTtcbiAgICAgIGFsbFNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29kZSwgaWQsIHVyaSB9ID0gc2NyaXB0O1xuICAgICAgICB1cGRhdGVzW2Ake3N0b3JhZ2Uuc2NyaXB0LnByZWZpeH0ke2lkfWBdID0gdHJhbnNmb3JtU2NyaXB0KHNjcmlwdCk7XG4gICAgICAgIHVwZGF0ZXNbYCR7c3RvcmFnZS5jb2RlLnByZWZpeH0ke2lkfWBdID0gY29kZTtcbiAgICAgICAgdXJpTWFwW3VyaV0gPSBpZDtcbiAgICAgIH0pO1xuICAgICAgZ2V0QWxsKCd2YWx1ZXMnLCAoYWxsVmFsdWVzKSA9PiB7XG4gICAgICAgIGFsbFZhbHVlcy5mb3JFYWNoKCh7IHVyaSwgdmFsdWVzIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpZCA9IHVyaU1hcFt1cmldO1xuICAgICAgICAgIGlmIChpZCkgdXBkYXRlc1tgJHtzdG9yYWdlLnZhbHVlLnByZWZpeH0ke2lkfWBdID0gdmFsdWVzO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZ2V0QWxsKCdjYWNoZScsIChhbGxDYWNoZSkgPT4ge1xuICAgICAgYWxsQ2FjaGUuZm9yRWFjaCgoeyB1cmksIGRhdGEgfSkgPT4ge1xuICAgICAgICB1cGRhdGVzW2Ake3N0b3JhZ2UuY2FjaGUucHJlZml4fSR7dXJpfWBdID0gZGF0YTtcbiAgICAgIH0pO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIGdldEFsbCgncmVxdWlyZScsIChhbGxSZXF1aXJlKSA9PiB7XG4gICAgICBhbGxSZXF1aXJlLmZvckVhY2goKHsgdXJpLCBjb2RlIH0pID0+IHtcbiAgICAgICAgdXBkYXRlc1tgJHtzdG9yYWdlLnJlcXVpcmUucHJlZml4fSR7dXJpfWBdID0gY29kZTtcbiAgICAgIH0pO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybVNjcmlwdChzY3JpcHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWV0YTogcGFyc2VNZXRhKHNjcmlwdC5jb2RlKSxcbiAgICAgIGN1c3RvbTogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG9yaWdJbmNsdWRlOiB0cnVlLFxuICAgICAgICBvcmlnRXhjbHVkZTogdHJ1ZSxcbiAgICAgICAgb3JpZ01hdGNoOiB0cnVlLFxuICAgICAgICBvcmlnRXhjbHVkZU1hdGNoOiB0cnVlLFxuICAgICAgfSwgc2NyaXB0LmN1c3RvbSksXG4gICAgICBwcm9wczoge1xuICAgICAgICBpZDogc2NyaXB0LmlkLFxuICAgICAgICB1cmk6IHNjcmlwdC51cmksXG4gICAgICAgIHBvc2l0aW9uOiBzY3JpcHQucG9zaXRpb24sXG4gICAgICB9LFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGVuYWJsZWQ6IHNjcmlwdC5lbmFibGVkLFxuICAgICAgICBzaG91bGRVcGRhdGU6IHNjcmlwdC51cGRhdGUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn0pXG4vLyBJZ25vcmUgZXJyb3Jcbi5jYXRjaCgoKSA9PiB7fSk7XG4iLCJpbXBvcnQgeyBnZXRBY3RpdmVUYWIsIHNlbmRUYWJDbWQgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZSc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgeyBwb3N0SW5pdGlhbGl6ZSB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbmV4cG9ydCBjb25zdCBwb3B1cFRhYnMgPSB7fTsgLy8geyB0YWJJZDogMSB9XG5cbnBvc3RJbml0aWFsaXplLnB1c2goKCkgPT4ge1xuICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKG9uUG9wdXBPcGVuZWQpO1xuICBicm93c2VyLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKHByZWZldGNoU2V0UG9wdXAsIHtcbiAgICB1cmxzOiBbYnJvd3Nlci5ydW50aW1lLmdldFVSTChicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5icm93c2VyX2FjdGlvbi5kZWZhdWx0X3BvcHVwKV0sXG4gICAgdHlwZXM6IFsnbWFpbl9mcmFtZSddLFxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBvblBvcHVwT3BlbmVkKHBvcnQpIHtcbiAgY29uc3QgdGFiSWQgPSArcG9ydC5uYW1lO1xuICBwb3B1cFRhYnNbdGFiSWRdID0gMTtcbiAgc2VuZFRhYkNtZCh0YWJJZCwgJ1BvcHVwU2hvd24nLCB0cnVlKTtcbiAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIob25Qb3B1cENsb3NlZCk7XG4gIGRlbGV0ZSBjb21tYW5kcy5TZXRQb3B1cDtcbn1cblxuZnVuY3Rpb24gb25Qb3B1cENsb3NlZCh7IG5hbWUgfSkge1xuICBkZWxldGUgcG9wdXBUYWJzW25hbWVdO1xuICBzZW5kVGFiQ21kKCtuYW1lLCAnUG9wdXBTaG93bicsIGZhbHNlKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJlZmV0Y2hTZXRQb3B1cCgpIHtcbiAgY29uc3QgdGFiSWQgPSAoYXdhaXQgZ2V0QWN0aXZlVGFiKCkpLmlkO1xuICBzZW5kVGFiQ21kKHRhYklkLCAnUG9wdXBTaG93bicsIHRydWUpO1xuICBjb21tYW5kcy5TZXRQb3B1cCA9IGFzeW5jIChkYXRhLCBzcmMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKGRhdGEsIGF3YWl0IGdldERhdGEoZGF0YS5pZHMpKTtcbiAgICBjYWNoZS5wdXQoJ1NldFBvcHVwJywgT2JqZWN0LmFzc2lnbih7IFtzcmMuZnJhbWVJZF06IFtkYXRhLCBzcmNdIH0sIGNhY2hlLmdldCgnU2V0UG9wdXAnKSkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZ2V0U2NyaXB0TmFtZSwgZ2V0VW5pcUlkIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHtcbiAgSU5KRUNUX0FVVE8sIElOSkVDVF9DT05URU5ULCBJTkpFQ1RfTUFQUElORyxcbiAgSU5KRUNUQUJMRV9UQUJfVVJMX1JFLCBNRVRBQkxPQ0tfUkUsXG59IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQgaW5pdENhY2hlIGZyb20gJyMvY29tbW9uL2NhY2hlJztcbmltcG9ydCB7IGZvckVhY2hFbnRyeSwgb2JqZWN0UGljaywgb2JqZWN0U2V0IH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCBzdG9yYWdlIGZyb20gJyMvY29tbW9uL3N0b3JhZ2UnO1xuaW1wb3J0IHVhIGZyb20gJyMvY29tbW9uL3VhJztcbmltcG9ydCB7IGdldFNjcmlwdHNCeVVSTCwgRU5WX0NBQ0hFX0tFWVMsIEVOVl9SRVFfS0VZUywgRU5WX1ZBTFVFX0lEUyB9IGZyb20gJy4vZGInO1xuaW1wb3J0IHsgZXh0ZW5zaW9uUm9vdCwgcG9zdEluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uLCBob29rT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbmNvbnN0IEFQSV9DT05GSUcgPSB7XG4gIHVybHM6IFsnKjovLyovKiddLCAvLyBgKmAgc2NoZW1lIG1hdGNoZXMgb25seSBodHRwIGFuZCBodHRwc1xuICB0eXBlczogWydtYWluX2ZyYW1lJywgJ3N1Yl9mcmFtZSddLFxufTtcbmNvbnN0IFRJTUVfQUZURVJfU0VORCA9IDEwZTM7IC8vIGxvbmdlciBhcyBlc3RhYmxpc2hpbmcgY29ubmVjdGlvbiB0byBzaXRlcyBtYXkgdGFrZSB0aW1lXG5jb25zdCBUSU1FX0FGVEVSX1JFQ0VJVkUgPSAxZTM7IC8vIHNob3J0ZXIgYXMgcmVzcG9uc2UgYm9keSB3aWxsIGJlIGNvbWluZyB2ZXJ5IHNvb25cbmNvbnN0IFRJTUVfS0VFUF9EQVRBID0gNjBlMzsgLy8gMTAwbXMgc2hvdWxkIGJlIGVub3VnaCBidXQgdGhlIHRhYiBtYXkgaGFuZyBvciBnZXQgcGF1c2VkIGluIGRlYnVnZ2VyXG5jb25zdCBjYWNoZUNvZGUgPSBpbml0Q2FjaGUoeyBsaWZldGltZTogVElNRV9LRUVQX0RBVEEgfSk7XG5jb25zdCBjYWNoZSA9IGluaXRDYWNoZSh7XG4gIGxpZmV0aW1lOiBUSU1FX0tFRVBfREFUQSxcbiAgb25EaXNwb3NlOiBhc3luYyBwcm9taXNlID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJvbWlzZTtcbiAgICBjb25zdCByY3MgPSBhd2FpdCBkYXRhPy5yY3NQcm9taXNlO1xuICAgIHJjcz8udW5yZWdpc3RlcigpO1xuICB9LFxufSk7XG5jb25zdCBJTkpFQ1RfSU5UTyA9ICdpbmplY3RJbnRvJztcbi8vIEtFWV9YWFggZm9yIGhvb2tlZCBvcHRpb25zXG5jb25zdCBLRVlfRVhQT1NFID0gJ2V4cG9zZSc7XG5jb25zdCBLRVlfREVGX0lOSkVDVF9JTlRPID0gJ2RlZmF1bHRJbmplY3RJbnRvJztcbmNvbnN0IEtFWV9JU19BUFBMSUVEID0gJ2lzQXBwbGllZCc7XG5jb25zdCBLRVlfWEhSX0lOSkVDVCA9ICd4aHJJbmplY3QnO1xuY29uc3QgZXhwb3NlID0ge307XG5sZXQgaXNBcHBsaWVkO1xubGV0IGluamVjdEludG87XG5sZXQgeGhySW5qZWN0O1xuaG9va09wdGlvbnMob25PcHRpb25DaGFuZ2VkKTtcbnBvc3RJbml0aWFsaXplLnB1c2goKCkgPT4ge1xuICBmb3IgKGNvbnN0IGtleSBvZiBbS0VZX0VYUE9TRSwgS0VZX0RFRl9JTkpFQ1RfSU5UTywgS0VZX0lTX0FQUExJRUQsIEtFWV9YSFJfSU5KRUNUXSkge1xuICAgIG9uT3B0aW9uQ2hhbmdlZCh7IFtrZXldOiBnZXRPcHRpb24oa2V5KSB9KTtcbiAgfVxufSk7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgYXN5bmMgSW5qZWN0aW9uRmVlZGJhY2soeyBmZWVkSWQsIGZlZWRiYWNrLCBmb3JjZUNvbnRlbnQgfSwgc3JjKSB7XG4gICAgZmVlZGJhY2suZm9yRWFjaChwcm9jZXNzRmVlZGJhY2ssIHNyYyk7XG4gICAgaWYgKGZlZWRJZCkge1xuICAgICAgLy8gY2FjaGUgY2xlYW51cCB3aGVuIGdldERhdGFGRiBvdXRydW5zIEdldEluamVjdGVkXG4gICAgICBjYWNoZS5kZWwoZmVlZElkLmNhY2hlS2V5KTtcbiAgICAgIC8vIGVudkRlbGF5ZWRcbiAgICAgIGNvbnN0IGVudiA9IGF3YWl0IGNhY2hlLnBvcChmZWVkSWQuZW52S2V5KTtcbiAgICAgIGlmIChlbnYpIHtcbiAgICAgICAgZW52LmZvcmNlQ29udGVudCA9IGZvcmNlQ29udGVudDtcbiAgICAgICAgZW52LnNjcmlwdHMubWFwKHByZXBhcmVTY3JpcHQsIGVudikuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2gocHJvY2Vzc0ZlZWRiYWNrLCBzcmMpO1xuICAgICAgICByZXR1cm4gb2JqZWN0UGljayhlbnYsIFsnY2FjaGUnLCAnc2NyaXB0cyddKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59KTtcblxuLyoqIEB0aGlzIHtjaHJvbWUucnVudGltZS5NZXNzYWdlU2VuZGVyfSAqL1xuZnVuY3Rpb24gcHJvY2Vzc0ZlZWRiYWNrKFtrZXksIG5lZWRzSW5qZWN0aW9uXSkge1xuICBjb25zdCBjb2RlID0gY2FjaGVDb2RlLnBvcChrZXkpO1xuICAvLyBzZWUgVElNRV9LRUVQX0RBVEEgY29tbWVudFxuICBpZiAobmVlZHNJbmplY3Rpb24gJiYgY29kZSkge1xuICAgIGJyb3dzZXIudGFicy5leGVjdXRlU2NyaXB0KHRoaXMudGFiLmlkLCB7XG4gICAgICBjb2RlLFxuICAgICAgZnJhbWVJZDogdGhpcy5mcmFtZUlkLFxuICAgICAgcnVuQXQ6ICdkb2N1bWVudF9zdGFydCcsXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgcHJvcHNUb0NsZWFyID0ge1xuICBbc3RvcmFnZS5jYWNoZS5wcmVmaXhdOiBFTlZfQ0FDSEVfS0VZUyxcbiAgW3N0b3JhZ2UuY29kZS5wcmVmaXhdOiB0cnVlLFxuICBbc3RvcmFnZS5yZXF1aXJlLnByZWZpeF06IEVOVl9SRVFfS0VZUyxcbiAgW3N0b3JhZ2Uuc2NyaXB0LnByZWZpeF06IHRydWUsXG4gIFtzdG9yYWdlLnZhbHVlLnByZWZpeF06IEVOVl9WQUxVRV9JRFMsXG59O1xuXG5icm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKGFzeW5jIGNoYW5nZXMgPT4ge1xuICBjb25zdCBkYktleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKTtcbiAgY29uc3QgY2FjaGVWYWx1ZXMgPSBhd2FpdCBQcm9taXNlLmFsbChjYWNoZS5nZXRWYWx1ZXMoKSk7XG4gIGNvbnN0IGRpcnR5ID0gY2FjaGVWYWx1ZXMuc29tZShkYXRhID0+IGRhdGEuaW5qZWN0XG4gICAgJiYgZGJLZXlzLnNvbWUoKGtleSkgPT4ge1xuICAgICAgY29uc3QgcHJlZml4ID0ga2V5LnNsaWNlKDAsIGtleS5pbmRleE9mKCc6JykgKyAxKTtcbiAgICAgIGNvbnN0IHByb3AgPSBwcm9wc1RvQ2xlYXJbcHJlZml4XTtcbiAgICAgIGtleSA9IGtleS5zbGljZShwcmVmaXgubGVuZ3RoKTtcbiAgICAgIHJldHVybiBwcm9wID09PSB0cnVlXG4gICAgICAgIHx8IGRhdGFbcHJvcF0/LmluY2x1ZGVzKHByZWZpeCA9PT0gc3RvcmFnZS52YWx1ZS5wcmVmaXggPyAra2V5IDoga2V5KTtcbiAgICB9KSk7XG4gIGlmIChkaXJ0eSkge1xuICAgIGNhY2hlLmRlc3Ryb3koKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVJlYWxtKHZhbHVlKSB7XG4gIHJldHVybiBJTkpFQ1RfTUFQUElORzo6aGFzT3duUHJvcGVydHkodmFsdWUpXG4gICAgPyB2YWx1ZVxuICAgIDogaW5qZWN0SW50byB8fCBJTkpFQ1RfQVVUTztcbn1cblxuZnVuY3Rpb24gb25PcHRpb25DaGFuZ2VkKGNoYW5nZXMpIHtcbiAgY2hhbmdlczo6Zm9yRWFjaEVudHJ5KChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgS0VZX0RFRl9JTkpFQ1RfSU5UTzpcbiAgICAgIGluamVjdEludG8gPSBub3JtYWxpemVSZWFsbSh2YWx1ZSk7XG4gICAgICBjYWNoZS5kZXN0cm95KCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEtFWV9YSFJfSU5KRUNUOlxuICAgICAgdG9nZ2xlWGhySW5qZWN0KHZhbHVlKTtcbiAgICAgIGNhY2hlLmRlc3Ryb3koKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgS0VZX0lTX0FQUExJRUQ6XG4gICAgICB0b2dnbGVQcmVpbmplY3QodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBLRVlfRVhQT1NFOlxuICAgICAgdmFsdWU6OmZvckVhY2hFbnRyeSgoW3NpdGUsIGlzRXhwb3NlZF0pID0+IHtcbiAgICAgICAgZXhwb3NlW2RlY29kZVVSSUNvbXBvbmVudChzaXRlKV0gPSBpc0V4cG9zZWQ7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoa2V5LmluY2x1ZGVzKCcuJykpIHsgLy8gdXNlZCBieSBgZXhwb3NlLnVybGBcbiAgICAgICAgb25PcHRpb25DaGFuZ2VkKG9iamVjdFNldCh7fSwga2V5LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5qZWN0ZWRTY3JpcHRzKHVybCwgdGFiSWQsIGZyYW1lSWQsIGZvcmNlQ29udGVudCkge1xuICBjb25zdCBrZXkgPSBnZXRLZXkodXJsLCAhZnJhbWVJZCk7XG4gIHJldHVybiBjYWNoZS5wb3Aoa2V5KSB8fCBwcmVwYXJlKGtleSwgdXJsLCB0YWJJZCwgZnJhbWVJZCwgZm9yY2VDb250ZW50KTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5KHVybCwgaXNUb3ApIHtcbiAgcmV0dXJuIGlzVG9wID8gdXJsIDogYC0ke3VybH1gO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVQcmVpbmplY3QoZW5hYmxlKSB7XG4gIGlzQXBwbGllZCA9IGVuYWJsZTtcbiAgLy8gVXNpbmcgb25TZW5kSGVhZGVycyBiZWNhdXNlIG9uSGVhZGVyc1JlY2VpdmVkIGluIEZpcmVmb3ggZmlyZXMgKmFmdGVyKiBjb250ZW50IHNjcmlwdHMuXG4gIC8vIEFuZCBldmVuIGluIENocm9tZSBhIHNpdGUgbWF5IGJlIHNvIGZhc3QgdGhhdCBwcmVpbmplY3Qgb24gb25IZWFkZXJzUmVjZWl2ZWQgd29uJ3QgYmUgdXNlZnVsLlxuICBjb25zdCBvbk9mZiA9IGAke2VuYWJsZSA/ICdhZGQnIDogJ3JlbW92ZSd9TGlzdGVuZXJgO1xuICBjb25zdCBjb25maWcgPSBlbmFibGUgPyBBUElfQ09ORklHIDogdW5kZWZpbmVkO1xuICBicm93c2VyLndlYlJlcXVlc3Qub25TZW5kSGVhZGVyc1tvbk9mZl0ob25TZW5kSGVhZGVycywgY29uZmlnKTtcbiAgaWYgKCFpc0FwcGxpZWQgfHwgIXhockluamVjdCkgeyAvLyB3aWxsIGJlIHJlZ2lzdGVyZWQgaW4gdG9nZ2xlWGhySW5qZWN0XG4gICAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkW29uT2ZmXShvbkhlYWRlcnNSZWNlaXZlZCwgY29uZmlnKTtcbiAgfVxuICBjYWNoZS5kZXN0cm95KCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVhockluamVjdChlbmFibGUpIHtcbiAgeGhySW5qZWN0ID0gZW5hYmxlO1xuICBicm93c2VyLndlYlJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWQucmVtb3ZlTGlzdGVuZXIob25IZWFkZXJzUmVjZWl2ZWQpO1xuICBpZiAoZW5hYmxlKSB7XG4gICAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkLmFkZExpc3RlbmVyKG9uSGVhZGVyc1JlY2VpdmVkLCBBUElfQ09ORklHLCBbXG4gICAgICAnYmxvY2tpbmcnLFxuICAgICAgJ3Jlc3BvbnNlSGVhZGVycycsXG4gICAgICBicm93c2VyLndlYlJlcXVlc3QuT25IZWFkZXJzUmVjZWl2ZWRPcHRpb25zLkVYVFJBX0hFQURFUlMsXG4gICAgXS5maWx0ZXIoQm9vbGVhbikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uU2VuZEhlYWRlcnMoeyB1cmwsIHRhYklkLCBmcmFtZUlkIH0pIHtcbiAgaWYgKCFJTkpFQ1RBQkxFX1RBQl9VUkxfUkUudGVzdCh1cmwpKSByZXR1cm47XG4gIGNvbnN0IGlzVG9wID0gIWZyYW1lSWQ7XG4gIGNvbnN0IGtleSA9IGdldEtleSh1cmwsIGlzVG9wKTtcbiAgaWYgKCFjYWNoZS5oYXMoa2V5KSkge1xuICAgIC8vIEdldEluamVjdGVkIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHNvb24gYnkgdGhlIGNvbnRlbnQgc2NyaXB0XG4gICAgLy8gYW5kIGl0IG1heSBlYXNpbHkgaGFwcGVuIHdoaWxlIGdldFNjcmlwdHNCeVVSTCBpcyBzdGlsbCB3YWl0aW5nIGZvciBicm93c2VyLnN0b3JhZ2VcbiAgICAvLyBzbyB3ZSdsbCBsZXQgR2V0SW5qZWN0ZWQgYXdhaXQgdGhpcyBwZW5kaW5nIGRhdGEgYnkgc3RvcmluZyBQcm9taXNlIGluIHRoZSBjYWNoZVxuICAgIGNhY2hlLnB1dChrZXksIHByZXBhcmUoa2V5LCB1cmwsIHRhYklkLCBmcmFtZUlkKSwgVElNRV9BRlRFUl9TRU5EKTtcbiAgfVxufVxuXG4vKiogQHBhcmFtIHtjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXNwb25zZUhlYWRlcnNEZXRhaWxzfSBpbmZvICovXG5mdW5jdGlvbiBvbkhlYWRlcnNSZWNlaXZlZChpbmZvKSB7XG4gIGNvbnN0IGtleSA9IGdldEtleShpbmZvLnVybCwgIWluZm8uZnJhbWVJZCk7XG4gIGNvbnN0IGRhdGEgPSB4aHJJbmplY3QgJiYgY2FjaGUuZ2V0KGtleSk7XG4gIGNhY2hlLmhpdChrZXksIFRJTUVfQUZURVJfUkVDRUlWRSk7XG4gIHJldHVybiBkYXRhPy5pbmplY3QgJiYgcHJlcGFyZVhockJsb2IoaW5mbywgZGF0YSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXNwb25zZUhlYWRlcnNEZXRhaWxzfSBpbmZvXG4gKiBAcGFyYW0ge1ZNR2V0SW5qZWN0ZWREYXRhQ29udGFpbmVyfSBkYXRhXG4gKi9cbmZ1bmN0aW9uIHByZXBhcmVYaHJCbG9iKHsgdXJsLCByZXNwb25zZUhlYWRlcnMgfSwgZGF0YSkge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOicpICYmIGRldGVjdFN0cmljdENzcChyZXNwb25zZUhlYWRlcnMpKSB7XG4gICAgZm9yY2VDb250ZW50SW5qZWN0aW9uKGRhdGEpO1xuICB9XG4gIGNvbnN0IGJsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtcbiAgICBKU09OLnN0cmluZ2lmeShkYXRhLmluamVjdCksXG4gIF0pKTtcbiAgcmVzcG9uc2VIZWFkZXJzLnB1c2goe1xuICAgIG5hbWU6ICdTZXQtQ29va2llJyxcbiAgICB2YWx1ZTogYFwiJHtwcm9jZXNzLmVudi5JTklUX0ZVTkNfTkFNRX1cIj0ke2Jsb2JVcmwuc3BsaXQoJy8nKS5wb3AoKX07IFNhbWVTaXRlPUxheGAsXG4gIH0pO1xuICBzZXRUaW1lb3V0KFVSTC5yZXZva2VPYmplY3RVUkwsIFRJTUVfS0VFUF9EQVRBLCBibG9iVXJsKTtcbiAgcmV0dXJuIHsgcmVzcG9uc2VIZWFkZXJzIH07XG59XG5cbmZ1bmN0aW9uIHByZXBhcmUoa2V5LCB1cmwsIHRhYklkLCBmcmFtZUlkLCBmb3JjZUNvbnRlbnQpIHtcbiAgLyoqIEBuYW1lc3BhY2UgVk1HZXRJbmplY3RlZERhdGFDb250YWluZXIgKi9cbiAgY29uc3QgcmVzID0ge1xuICAgIC8qKiBAbmFtZXNwYWNlIFZNR2V0SW5qZWN0ZWREYXRhICovXG4gICAgaW5qZWN0OiB7XG4gICAgICBleHBvc2U6ICFmcmFtZUlkXG4gICAgICAgICYmIHVybC5zdGFydHNXaXRoKCdodHRwczovLycpXG4gICAgICAgICYmIGV4cG9zZVt1cmwuc3BsaXQoJy8nLCAzKVsyXV0sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGlzQXBwbGllZFxuICAgID8gcHJlcGFyZVNjcmlwdHMocmVzLCBrZXksIHVybCwgdGFiSWQsIGZyYW1lSWQsIGZvcmNlQ29udGVudClcbiAgICA6IHJlcztcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJlcGFyZVNjcmlwdHMocmVzLCBjYWNoZUtleSwgdXJsLCB0YWJJZCwgZnJhbWVJZCwgZm9yY2VDb250ZW50KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTY3JpcHRzQnlVUkwodXJsLCAhZnJhbWVJZCk7XG4gIGNvbnN0IHsgZW52RGVsYXllZCwgc2NyaXB0cyB9ID0gZGF0YTtcbiAgY29uc3QgaXNMYXRlID0gZm9yY2VDb250ZW50ICE9IG51bGw7XG4gIGRhdGEuZm9yY2VDb250ZW50ID0gZm9yY2VDb250ZW50O1xuICBjb25zdCBmZWVkYmFjayA9IHNjcmlwdHMubWFwKHByZXBhcmVTY3JpcHQsIGRhdGEpLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgbW9yZSA9IGVudkRlbGF5ZWQucHJvbWlzZTtcbiAgY29uc3QgZW52S2V5ID0gZ2V0VW5pcUlkKGAke3RhYklkfToke2ZyYW1lSWR9OmApO1xuICBjb25zdCB7IGluamVjdCB9ID0gcmVzO1xuICAvKiogQG5hbWVzcGFjZSBWTUdldEluamVjdGVkRGF0YSAqL1xuICBPYmplY3QuYXNzaWduKGluamVjdCwge1xuICAgIHNjcmlwdHMsXG4gICAgW0lOSkVDVF9JTlRPXTogaW5qZWN0SW50byxcbiAgICBjYWNoZTogZGF0YS5jYWNoZSxcbiAgICBmZWVkSWQ6IHtcbiAgICAgIGNhY2hlS2V5LCAvLyBJbmplY3Rpb25GZWVkYmFjayBjYWNoZSBrZXkgZm9yIGNsZWFudXAgd2hlbiBnZXREYXRhRkYgb3V0cnVucyBHZXRJbmplY3RlZFxuICAgICAgZW52S2V5LCAvLyBJbmplY3Rpb25GZWVkYmFjayBjYWNoZSBrZXkgZm9yIGVudkRlbGF5ZWRcbiAgICB9LFxuICAgIGhhc01vcmU6ICEhbW9yZSwgLy8gdGVsbHMgY29udGVudCBicmlkZ2UgdG8gZXhwZWN0IGVudkRlbGF5ZWRcbiAgICBmb3JjZUNvbnRlbnQ6IGZvcmNlQ29udGVudCB8fCAoIC8vIFRyeWluZyB0byBza2lwIHBhZ2Ugc2FuZGJveCB3aGVuIHhockluamVjdCBpcyBvbjpcbiAgICAgIGZlZWRiYWNrLmxlbmd0aCA9PT0gc2NyaXB0cy5sZW5ndGggLy8gLi4ud2hlbiBhbGwgYGVudlN0YXJ0YCBzY3JpcHRzIGFyZSBgY29udGVudGAsXG4gICAgICAmJiBlbnZEZWxheWVkLnNjcmlwdHMuZXZlcnkoc2NyID0+IGlzQ29udGVudFJlYWxtKHNjciwgZm9yY2VDb250ZW50KSkgLy8gYW5kIGBlbnZEZWxheWVkYCB0b28uXG4gICAgKSxcbiAgICBpZHM6IGRhdGEuZGlzYWJsZWRJZHMsIC8vIGNvbnRlbnQgYnJpZGdlIGFkZHMgdGhlIGFjdHVhbGx5IHJ1bm5pbmcgaWRzIGFuZCBzZW5kcyB2aWEgU2V0UG9wdXBcbiAgICBpbmZvOiB7XG4gICAgICB1YSxcbiAgICB9LFxuICB9KTtcbiAgLyoqIEBuYW1lc3BhY2UgVk1HZXRJbmplY3RlZERhdGFDb250YWluZXIgKi9cbiAgT2JqZWN0LmFzc2lnbihyZXMsIHtcbiAgICBmZWVkYmFjayxcbiAgICB2YWxPcElkczogWy4uLmRhdGFbRU5WX1ZBTFVFX0lEU10sIC4uLmVudkRlbGF5ZWRbRU5WX1ZBTFVFX0lEU11dLFxuICAgIHJjc1Byb21pc2U6ICFpc0xhdGUgJiYgIXhockluamVjdCAmJiBJU19GSVJFRk9YXG4gICAgICA/IHJlZ2lzdGVyU2NyaXB0RGF0YUZGKGluamVjdCwgdXJsLCAhIWZyYW1lSWQpXG4gICAgICA6IG51bGwsXG4gIH0pO1xuICBpZiAobW9yZSkgY2FjaGUucHV0KGVudktleSwgbW9yZSk7XG4gIGNhY2hlLnB1dChjYWNoZUtleSwgcmVzKTsgLy8gbmVjZXNzYXJ5IGZvciB0aGUgc3luY2hyb25vdXMgb25IZWFkZXJzUmVjZWl2ZWRcbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqIEB0aGlzIHtWTVNjcmlwdEJ5VXJsRGF0YX0gKi9cbmZ1bmN0aW9uIHByZXBhcmVTY3JpcHQoc2NyaXB0KSB7XG4gIGNvbnN0IHsgY3VzdG9tLCBtZXRhLCBwcm9wcyB9ID0gc2NyaXB0O1xuICBjb25zdCB7IGlkIH0gPSBwcm9wcztcbiAgY29uc3QgeyBmb3JjZUNvbnRlbnQsIHJlcXVpcmUsIHZhbHVlIH0gPSB0aGlzO1xuICBjb25zdCBjb2RlID0gdGhpcy5jb2RlW2lkXTtcbiAgY29uc3QgZGF0YUtleSA9IGdldFVuaXFJZCgnVk1pbicpO1xuICBjb25zdCBkaXNwbGF5TmFtZSA9IGdldFNjcmlwdE5hbWUoc2NyaXB0KTtcbiAgY29uc3QgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChkaXNwbGF5TmFtZS5yZXBsYWNlKC9bIyYnLC86Oz9APStdL2csIHJlcGxhY2VXaXRoRnVsbFdpZHRoRm9ybSkpO1xuICBjb25zdCBpc0NvbnRlbnQgPSBpc0NvbnRlbnRSZWFsbShzY3JpcHQsIGZvcmNlQ29udGVudCk7XG4gIGNvbnN0IHBhdGhNYXAgPSBjdXN0b20ucGF0aE1hcCB8fCB7fTtcbiAgY29uc3QgcmVxcyA9IG1ldGEucmVxdWlyZT8ubWFwKGtleSA9PiByZXF1aXJlW3BhdGhNYXBba2V5XSB8fCBrZXldKS5maWx0ZXIoQm9vbGVhbik7XG4gIC8vIHRyeWluZyB0byBhdm9pZCBwcm9ncmVzc2l2ZSBzdHJpbmcgY29uY2F0ZW5hdGlvbiBvZiBwb3RlbnRpYWxseSBodWdlIGNvZGUgc2xpY2VzXG4gIC8vIGFkZGluZyBgO2Agb24gYSBuZXcgbGluZSBpbiBjYXNlIHNvbWUgcmVxdWlyZWQgc2NyaXB0IGVuZHMgd2l0aCBhIGxpbmUgY29tbWVudFxuICBjb25zdCByZXFzU2xpY2VzID0gcmVxcyA/IFtdLmNvbmNhdCguLi5yZXFzLm1hcChyZXEgPT4gW3JlcSwgJ1xcbjsnXSkpIDogW107XG4gIGNvbnN0IGhhc1JlcXMgPSByZXFzU2xpY2VzLmxlbmd0aDtcbiAgY29uc3QgaW5qZWN0ZWRDb2RlID0gW1xuICAgIC8vIGhpZGluZyBtb2R1bGUgaW50ZXJmYWNlIGZyb20gQHJlcXVpcmUnZCBzY3JpcHRzIHNvIHRoZXkgZG9uJ3QgbWlzdGFrZW5seSB1c2UgaXRcbiAgICBgd2luZG93LiR7ZGF0YUtleX09ZnVuY3Rpb24oJHtkYXRhS2V5fSl7dHJ5e3dpdGgodGhpcykoKGRlZmluZSxtb2R1bGUsZXhwb3J0cyk9PntgLFxuICAgIC4uLnJlcXNTbGljZXMsXG4gICAgLy8gYWRkaW5nIGEgbmVzdGVkIElJRkUgdG8gc3VwcG9ydCAndXNlIHN0cmljdCcgaW4gdGhlIGNvZGUgd2hlbiB0aGVyZSBhcmUgQHJlcXVpcmVzXG4gICAgaGFzUmVxcyA/ICcoKCk9PnsnIDogJycsXG4gICAgY29kZSxcbiAgICAvLyBhZGRpbmcgYSBuZXcgbGluZSBpbiBjYXNlIHRoZSBjb2RlIGVuZHMgd2l0aCBhIGxpbmUgY29tbWVudFxuICAgIGNvZGUuZW5kc1dpdGgoJ1xcbicpID8gJycgOiAnXFxuJyxcbiAgICBoYXNSZXFzID8gJ30pKCknIDogJycsXG4gICAgLy8gMCBhdCB0aGUgZW5kIHRvIHN1cHByZXNzIGVycm9ycyBhYm91dCBub24tY2xvbmVhYmxlIHJlc3VsdCBvZiBleGVjdXRlU2NyaXB0IGluIEZGXG4gICAgYH0pKCl9Y2F0Y2goZSl7JHtkYXRhS2V5fShlKX19OzBgLFxuICAgIC8vIEZpcmVmb3ggbGlzdHMgLnVzZXIuanMgYW1vbmcgb3VyIG93biBjb250ZW50IHNjcmlwdHMgc28gYSBzcGFjZSBhdCBzdGFydCB3aWxsIGdyb3VwIHRoZW1cbiAgICBgXFxuLy8jIHNvdXJjZVVSTD0ke2V4dGVuc2lvblJvb3R9JHtJU19GSVJFRk9YID8gJyUyMCcgOiAnJ30ke25hbWV9LnVzZXIuanMjJHtpZH1gLFxuICBdLmpvaW4oJycpO1xuICBjYWNoZUNvZGUucHV0KGRhdGFLZXksIGluamVjdGVkQ29kZSwgVElNRV9LRUVQX0RBVEEpO1xuICAvKiogQG5hbWVzcGFjZSBWTUluamVjdGVkU2NyaXB0ICovXG4gIE9iamVjdC5hc3NpZ24oc2NyaXB0LCB7XG4gICAgZGF0YUtleSxcbiAgICBkaXNwbGF5TmFtZSxcbiAgICAvLyBjb2RlIHdpbGwgYmUgYHRydWVgIGlmIHRoZSBkZXNpcmVkIHJlYWxtIGlzIFBBR0Ugd2hpY2ggaXMgbm90IGluamVjdGFibGVcbiAgICBjb2RlOiBpc0NvbnRlbnQgPyAnJyA6IGZvcmNlQ29udGVudCB8fCBpbmplY3RlZENvZGUsXG4gICAgbWV0YVN0cjogY29kZS5tYXRjaChNRVRBQkxPQ0tfUkUpWzFdIHx8ICcnLFxuICAgIHZhbHVlczogdmFsdWVbaWRdIHx8IG51bGwsXG4gIH0pO1xuICByZXR1cm4gaXNDb250ZW50ICYmIFtkYXRhS2V5LCB0cnVlXTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVdpdGhGdWxsV2lkdGhGb3JtKHMpIHtcbiAgLy8gZnVsbHdpZHRoIHJhbmdlIHN0YXJ0cyBhdCAweEZGMDAsIG5vcm1hbCByYW5nZSBzdGFydHMgYXQgc3BhY2UgY2hhciBjb2RlIDB4MjBcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocy5jaGFyQ29kZUF0KDApIC0gMHgyMCArIDB4RkYwMCk7XG59XG5cbmNvbnN0IHJlc29sdmVEYXRhQ29kZVN0ciA9IGAoJHtmdW5jdGlvbiBfKGRhdGEpIHtcbiAgLyogYGZ1bmN0aW9uYCBpcyByZXF1aXJlZCB0byBjb21waWxlIGB0aGlzYCwgYW5kIGB0aGlzYCBpcyByZXF1aXJlZCBiZWNhdXNlIG91ciBzYWZlLWdsb2JhbHNcbiAgICogc2hhZG93cyBgd2luZG93YCBzbyBpdHMgbmFtZSBpcyBtaW5pZmllZCBhbmQgaGVuY2UgaW5hY2Nlc3NpYmxlIGhlcmUgKi9cbiAgY29uc3QgeyB2bVJlc29sdmUgfSA9IHRoaXM7XG4gIGlmICh2bVJlc29sdmUpIHtcbiAgICB2bVJlc29sdmUoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcnVubmluZyBlYXJsaWVyIHRoYW4gdGhlIG1haW4gY29udGVudCBzY3JpcHQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHRoaXMudm1EYXRhID0gZGF0YTtcbiAgfVxufX0pYDtcblxuLy8gVE9ETzogcmV3b3JrIHRoZSB3aG9sZSB0aGluZyB0byByZWdpc3RlciBzY3JpcHRzIGluZGl2aWR1YWxseSB3aXRoIHJlYWwgYG1hdGNoZXNgXG5mdW5jdGlvbiByZWdpc3RlclNjcmlwdERhdGFGRihpbmplY3QsIHVybCwgYWxsRnJhbWVzKSB7XG4gIHJldHVybiBicm93c2VyLmNvbnRlbnRTY3JpcHRzPy5yZWdpc3Rlcih7XG4gICAgYWxsRnJhbWVzLFxuICAgIGpzOiBbe1xuICAgICAgY29kZTogYCR7cmVzb2x2ZURhdGFDb2RlU3RyfSgke0pTT04uc3RyaW5naWZ5KGluamVjdCl9KWAsXG4gICAgfV0sXG4gICAgbWF0Y2hlczogdXJsLnNwbGl0KCcjJywgMSksXG4gICAgcnVuQXQ6ICdkb2N1bWVudF9zdGFydCcsXG4gIH0pO1xufVxuXG4vKiogQHBhcmFtIHtjaHJvbWUud2ViUmVxdWVzdC5IdHRwSGVhZGVyW119IHJlc3BvbnNlSGVhZGVycyAqL1xuZnVuY3Rpb24gZGV0ZWN0U3RyaWN0Q3NwKHJlc3BvbnNlSGVhZGVycykge1xuICByZXR1cm4gcmVzcG9uc2VIZWFkZXJzLnNvbWUoKHsgbmFtZSwgdmFsdWUgfSkgPT4gKFxuICAgIC9eY29udGVudC1zZWN1cml0eS1wb2xpY3kkL2kudGVzdChuYW1lKVxuICAgICYmIC9eLig/IS4qJ3Vuc2FmZS1pbmxpbmUnKS8udGVzdCggLy8gdHJ1ZSBpZiBub3QgZW1wdHkgYW5kIHdpdGhvdXQgJ3Vuc2FmZS1pbmxpbmUnXG4gICAgICB2YWx1ZS5tYXRjaCgvKD86Xnw7KVxccypzY3JpcHQtc3JjLWVsZW1cXHNbXjtdKy8pXG4gICAgICB8fCB2YWx1ZS5tYXRjaCgvKD86Xnw7KVxccypzY3JpcHQtc3JjXFxzW147XSsvKVxuICAgICAgfHwgdmFsdWUubWF0Y2goLyg/Ol58OylcXHMqZGVmYXVsdC1zcmNcXHNbXjtdKy8pXG4gICAgICB8fCAnJyxcbiAgICApXG4gICkpO1xufVxuXG4vKiogQHBhcmFtIHtWTUdldEluamVjdGVkRGF0YUNvbnRhaW5lcn0gZGF0YSAqL1xuZnVuY3Rpb24gZm9yY2VDb250ZW50SW5qZWN0aW9uKGRhdGEpIHtcbiAgLyoqIEB0eXBlIFZNR2V0SW5qZWN0ZWREYXRhICovXG4gIGNvbnN0IGluamVjdCA9IGRhdGEuaW5qZWN0O1xuICBpbmplY3QuZm9yY2VDb250ZW50ID0gdHJ1ZTtcbiAgaW5qZWN0LnNjcmlwdHMuZm9yRWFjaChzY3IgPT4ge1xuICAgIC8vIFdoZW4gc2NyaXB0IHdhbnRzIGBwYWdlYCwgdGhlIHJlc3VsdCBiZWxvdyB3aWxsIGJlIGB0cnVlYCBzbyB0aGUgc2NyaXB0IGdvZXMgaW50byBgZmFpbGVkSWRzYFxuICAgIHNjci5jb2RlID0gIWlzQ29udGVudFJlYWxtKHNjciwgdHJ1ZSkgfHwgJyc7XG4gICAgZGF0YS5mZWVkYmFjay5wdXNoKFtzY3IuZGF0YUtleSwgdHJ1ZV0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNDb250ZW50UmVhbG0oc2NyLCBmb3JjZUNvbnRlbnQpIHtcbiAgY29uc3QgcmVhbG0gPSBzY3JbSU5KRUNUX0lOVE9dIHx8IChcbiAgICBzY3JbSU5KRUNUX0lOVE9dID0gbm9ybWFsaXplUmVhbG0oc2NyLmN1c3RvbVtJTkpFQ1RfSU5UT10gfHwgc2NyLm1ldGFbSU5KRUNUX0lOVE9dKVxuICApO1xuICByZXR1cm4gcmVhbG0gPT09IElOSkVDVF9DT05URU5UIHx8IGZvcmNlQ29udGVudCAmJiByZWFsbSA9PT0gSU5KRUNUX0FVVE87XG59XG4iLCJpbXBvcnQge1xuICBibG9iMmJhc2U2NCwgYnVmZmVyMnN0cmluZywgZ2V0VW5pcUlkLCByZXF1ZXN0LCBpMThuLCBpc0VtcHR5LCBub29wLCBzZW5kVGFiQ21kLFxuICBzdHJpbmcydWludDhhcnJheSxcbn0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgZm9yRWFjaEVudHJ5LCBvYmplY3RQaWNrIH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCB1YSBmcm9tICcjL2NvbW1vbi91YSc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZSc7XG5pbXBvcnQgeyBpc1VzZXJTY3JpcHQsIHBhcnNlTWV0YSB9IGZyb20gJy4vc2NyaXB0JztcbmltcG9ydCB7IGV4dGVuc2lvblJvb3QgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5jb25zdCBWTV9WRVJJRlkgPSAnVk0tVmVyaWZ5JztcbmNvbnN0IENPTkZJUk1fVVJMX0JBU0UgPSBgJHtleHRlbnNpb25Sb290fWNvbmZpcm0vaW5kZXguaHRtbCNgO1xuLyoqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLFZNSHR0cFJlcXVlc3Q+fSAqL1xuY29uc3QgcmVxdWVzdHMgPSB7fTtcbmNvbnN0IGRvd25sb2FkcyA9IHt9O1xuY29uc3QgdmVyaWZ5ID0ge307XG5jb25zdCB0YWJSZXF1ZXN0cyA9IHt9O1xuY29uc3QgeyBjaHJvbWUgfSA9IGdsb2JhbDtcbmxldCBlbmNvZGVyO1xuXG5pZiAoY2hyb21lKSB7XG4gIGNocm9tZS5kb3dubG9hZHMub25DaGFuZ2VkLmFkZExpc3RlbmVyKGV2dCA9PiB7XG4gICAgY29uc29sZS5pbmZvKCdvbkNoYW5nZWQnLCBldnQpO1xuICAgIGlmICghZG93bmxvYWRzW2V2dC5pZF0pIHJldHVybjtcbiAgICBjb25zdCB7IHJlcSwgc3JjIH0gPSBkb3dubG9hZHNbZXZ0LmlkXTtcbiAgICBjb25zdCB7IHRhYjogeyBpZDogdGFiSWQgfSwgZnJhbWVJZCB9ID0gc3JjO1xuXG4gICAgaWYgKGV2dC5zdGF0ZT8uY3VycmVudCA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgc2VuZFRhYkNtZCh0YWJJZCwgJ0h0dHBSZXF1ZXN0ZWQnLCB7XG4gICAgICAgIHR5cGU6ICdsb2FkJywgaWQ6IHJlcS5pZCwgZG93bmxvYWRJZDogZXZ0LmlkLFxuICAgICAgfSwgeyBmcmFtZUlkIH0pO1xuICAgIH0gZWxzZSBpZiAoZXZ0LnN0YXRlPy5jdXJyZW50ID09PSAnaW50ZXJydXB0ZWQnKSB7XG4gICAgICBzZW5kVGFiQ21kKHRhYklkLCAnSHR0cFJlcXVlc3RlZCcsIHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJywgaWQ6IHJlcS5pZCwgZG93bmxvYWRJZDogZXZ0LmlkLFxuICAgICAgfSwgeyBmcmFtZUlkIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRlbGV0ZSBkb3dubG9hZHNbZXZ0LmlkXTtcbiAgICBkZWxldGUgcmVxdWVzdHNbcmVxLmlkXTtcbiAgfSk7XG59XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgQ29uZmlybUluc3RhbGw6IGNvbmZpcm1JbnN0YWxsLFxuICBhc3luYyBDaGVja0luc3RhbGxlclRhYih0YWJJZCwgc3JjKSB7XG4gICAgY29uc3QgdGFiID0gSVNfRklSRUZPWCAmJiAoc3JjLnVybCB8fCAnJykuc3RhcnRzV2l0aCgnZmlsZTonKVxuICAgICAgJiYgYXdhaXQgYnJvd3Nlci50YWJzLmdldCh0YWJJZCkuY2F0Y2gobm9vcCk7XG4gICAgcmV0dXJuIHRhYiAmJiAodGFiLnBlbmRpbmdVcmwgfHwgdGFiLnVybCB8fCAnJykuc3RhcnRzV2l0aChDT05GSVJNX1VSTF9CQVNFKTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge3ZvaWR9ICovXG4gIEh0dHBSZXF1ZXN0KG9wdHMsIHNyYykge1xuICAgIGNvbnN0IHsgdGFiOiB7IGlkOiB0YWJJZCB9LCBmcmFtZUlkIH0gPSBzcmM7XG4gICAgY29uc3QgeyBpZCwgZXZlbnRzVG9Ob3RpZnkgfSA9IG9wdHM7XG5cbiAgICBjb25zb2xlLmluZm8oJ3JlcSBvcHRzJywgb3B0cyk7XG5cbiAgICAvLyBoYW5kbGUgZG93bmxvYWRcbiAgICBpZiAoY2hyb21lICYmIG9wdHMubmF0aXZlKSB7XG4gICAgICAvLyBjb25zb2xlLmluZm8ob3B0cyk7XG4gICAgICBsZXQgaGVhZGVycyA9IFtdO1xuICAgICAgaWYgKG9wdHMuaGVhZGVycykge1xuICAgICAgICBoZWFkZXJzID0gT2JqZWN0LmtleXMob3B0cy5oZWFkZXJzKS5tYXAobmFtZSA9PiAoeyBuYW1lLCB2YWx1ZTogb3B0cy5oZWFkZXJzW25hbWVdIH0pKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICB1cmw6IG9wdHMudXJsLFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICBmaWxlbmFtZTogb3B0cy5maWxlTmFtZSxcbiAgICAgIH0sIGRvd25sb2FkSWQgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmluZm8oJ2Rvd25sb2FkSWQnLCBkb3dubG9hZElkKTtcbiAgICAgICAgcmVxdWVzdHNbaWRdID0geyBpZCwgZG93bmxvYWRJZCwgdGFiSWQsIGV2ZW50c1RvTm90aWZ5LCB4aHI6IG51bGwgfTtcbiAgICAgICAgZG93bmxvYWRzW2Rvd25sb2FkSWRdID0geyByZXE6IHJlcXVlc3RzW2lkXSwgb3B0cywgc3JjIH07XG4gICAgICAgIGlmIChldmVudHNUb05vdGlmeT8uaW5jbHVkZXMoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgICBzZW5kVGFiQ21kKHRhYklkLCAnSHR0cFJlcXVlc3RlZCcsIHsgdHlwZTogJ3Byb2dyZXNzJywgaWQsIGRvd25sb2FkSWQgfSwgeyBmcmFtZUlkIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXF1ZXN0c1tpZF0gPSB7XG4gICAgICBpZCxcbiAgICAgIHRhYklkLFxuICAgICAgZXZlbnRzVG9Ob3RpZnksXG4gICAgICB4aHI6IG5ldyBYTUxIdHRwUmVxdWVzdCgpLFxuICAgIH07XG4gICAgKHRhYlJlcXVlc3RzW3RhYklkXSB8fCAodGFiUmVxdWVzdHNbdGFiSWRdID0ge30pKVtpZF0gPSAxO1xuICAgIGh0dHBSZXF1ZXN0KG9wdHMsIHNyYywgcmVzID0+IHJlcXVlc3RzW2lkXSAmJiAoXG4gICAgICBzZW5kVGFiQ21kKHRhYklkLCAnSHR0cFJlcXVlc3RlZCcsIHJlcywgeyBmcmFtZUlkIH0pXG4gICAgKSk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHt2b2lkfSAqL1xuICBBYm9ydFJlcXVlc3QoaWQpIHtcbiAgICBjb25zdCByZXEgPSByZXF1ZXN0c1tpZF07XG4gICAgaWYgKHJlcSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpZiAoY2hyb21lKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBjaHJvbWUuZG93bmxvYWRzLmNhbmNlbChyZXEuaWQpO1xuICAgICAgICBkZWxldGUgcmVxdWVzdHNbcmVxLmlkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcS54aHIuYWJvcnQoKTtcbiAgICAgICAgY2xlYXJSZXF1ZXN0KHJlcSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBSZXZva2VCbG9iKHVybCkge1xuICAgIGNvbnN0IHRpbWVyID0gY2FjaGUucG9wKGB4aHJCbG9iOiR7dXJsfWApO1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICB9XG4gIH0sXG59KTtcblxuY29uc3Qgc3BlY2lhbEhlYWRlcnMgPSBbXG4gICd1c2VyLWFnZW50JyxcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9HbG9zc2FyeS9Gb3JiaWRkZW5faGVhZGVyX25hbWVcbiAgLy8gaHR0cHM6Ly9jcy5jaHJvbWl1bS5vcmcvP3E9ZmlsZTpjYytzeW1ib2w6SXNGb3JiaWRkZW5IZWFkZXIlNUNiXG4gICdhY2NlcHQtY2hhcnNldCcsXG4gICdhY2NlcHQtZW5jb2RpbmcnLFxuICAnYWNjZXNzLWNvbnRyb2wtcmVxdWVzdC1oZWFkZXJzJyxcbiAgJ2FjY2Vzcy1jb250cm9sLXJlcXVlc3QtbWV0aG9kJyxcbiAgJ2Nvbm5lY3Rpb24nLFxuICAnY29udGVudC1sZW5ndGgnLFxuICAnY29va2llJyxcbiAgJ2Nvb2tpZTInLFxuICAnZGF0ZScsXG4gICdkbnQnLFxuICAnZXhwZWN0JyxcbiAgJ2hvc3QnLFxuICAna2VlcC1hbGl2ZScsXG4gICdvcmlnaW4nLFxuICAncmVmZXJlcicsXG4gICd0ZScsXG4gICd0cmFpbGVyJyxcbiAgJ3RyYW5zZmVyLWVuY29kaW5nJyxcbiAgJ3VwZ3JhZGUnLFxuICAndmlhJyxcbl07XG4vLyBjb25zdCB0YXNrcyA9IHt9O1xuY29uc3QgSGVhZGVySW5qZWN0b3IgPSAoKCkgPT4ge1xuICAvKiogQHR5cGUgY2hyb21lLndlYlJlcXVlc3QuUmVxdWVzdEZpbHRlciAqL1xuICBjb25zdCBhcGlGaWx0ZXIgPSB7XG4gICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4gICAgdHlwZXM6IFsneG1saHR0cHJlcXVlc3QnXSxcbiAgfTtcbiAgY29uc3QgRVhUUkFfSEVBREVSUyA9IFtcbiAgICBicm93c2VyLndlYlJlcXVlc3QuT25CZWZvcmVTZW5kSGVhZGVyc09wdGlvbnMuRVhUUkFfSEVBREVSUyxcbiAgXS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IGhlYWRlcnNUb0luamVjdCA9IHt9O1xuICAvKiogQHBhcmFtIHtjaHJvbWUud2ViUmVxdWVzdC5IdHRwSGVhZGVyfSBoZWFkZXIgKi9cbiAgY29uc3QgaXNWbVZlcmlmeSA9IGhlYWRlciA9PiBoZWFkZXIubmFtZSA9PT0gVk1fVkVSSUZZO1xuICBjb25zdCBpc05vdENvb2tpZSA9IGhlYWRlciA9PiAhL15jb29raWUyPyQvaS50ZXN0KGhlYWRlci5uYW1lKTtcbiAgY29uc3QgaXNTZW5kYWJsZSA9IGhlYWRlciA9PiBoZWFkZXIubmFtZSAhPT0gVk1fVkVSSUZZO1xuICBjb25zdCBpc1NlbmRhYmxlQW5vbiA9IGhlYWRlciA9PiBpc1NlbmRhYmxlKGhlYWRlcikgJiYgaXNOb3RDb29raWUoaGVhZGVyKTtcbiAgY29uc3QgUkVfU0VUX0NPT0tJRSA9IC9ec2V0LWNvb2tpZTI/JC9pO1xuICBjb25zdCBSRV9TRVRfQ09PS0lFX1ZBTFVFID0gL15cXHMqKD86X18oU2VjdXJlfEhvc3QpLSk/KFtePVxcc10rKVxccyo9XFxzKihcIik/KFshIy0rXFwtLTo8LVtcXF0tfl0qKVxcMyguKikvO1xuICBjb25zdCBSRV9TRVRfQ09PS0lFX0FUVFIgPSAvXFxzKjs/XFxzKihcXHcrKSg/Oj0oXCIpPyhbISMtK1xcLS06PC1bXFxdLX5dKilcXDIpPy95O1xuICBjb25zdCBTQU1FX1NJVEVfTUFQID0ge1xuICAgIHN0cmljdDogJ3N0cmljdCcsXG4gICAgbGF4OiAnbGF4JyxcbiAgICBub25lOiAnbm9fcmVzdHJpY3Rpb24nLFxuICB9O1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhlYWRlclZhbHVlXG4gICAqIEBwYXJhbSB7Vk1IdHRwUmVxdWVzdH0gcmVxXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIGNvbnN0IHNldENvb2tpZUluU3RvcmUgPSAoaGVhZGVyVmFsdWUsIHJlcSwgdXJsKSA9PiB7XG4gICAgbGV0IG0gPSBSRV9TRVRfQ09PS0lFX1ZBTFVFLmV4ZWMoaGVhZGVyVmFsdWUpO1xuICAgIGlmIChtKSB7XG4gICAgICBjb25zdCBbLCBwcmVmaXgsIG5hbWUsICwgdmFsdWUsIG9wdFN0cl0gPSBtO1xuICAgICAgY29uc3Qgb3B0ID0ge307XG4gICAgICBjb25zdCBpc0hvc3QgPSBwcmVmaXggPT09ICdIb3N0JztcbiAgICAgIFJFX1NFVF9DT09LSUVfQVRUUi5sYXN0SW5kZXggPSAwO1xuICAgICAgd2hpbGUgKChtID0gUkVfU0VUX0NPT0tJRV9BVFRSLmV4ZWMob3B0U3RyKSkpIHtcbiAgICAgICAgb3B0W21bMV0udG9Mb3dlckNhc2UoKV0gPSBtWzNdO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2FtZVNpdGUgPSBvcHQuc2FtZVNpdGU/LnRvTG93ZXJDYXNlKCk7XG4gICAgICBicm93c2VyLmNvb2tpZXMuc2V0KHtcbiAgICAgICAgdXJsLFxuICAgICAgICBuYW1lLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgZG9tYWluOiBpc0hvc3QgPyB1bmRlZmluZWQgOiBvcHQuZG9tYWluLFxuICAgICAgICBleHBpcmF0aW9uRGF0ZTogTWF0aC5tYXgoMCwgK25ldyBEYXRlKG9wdFsnbWF4LWFnZSddICogMTAwMCB8fCBvcHQuZXhwaXJlcykpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgaHR0cE9ubHk6ICdodHRwb25seScgaW4gb3B0LFxuICAgICAgICBwYXRoOiBpc0hvc3QgPyAnLycgOiBvcHQucGF0aCxcbiAgICAgICAgc2FtZVNpdGU6IFNBTUVfU0lURV9NQVBbc2FtZVNpdGVdLFxuICAgICAgICBzZWN1cmU6IHVybC5zdGFydHNXaXRoKCdodHRwczonKSAmJiAoISFwcmVmaXggfHwgc2FtZVNpdGUgPT09ICdub25lJyB8fCAnc2VjdXJlJyBpbiBvcHQpLFxuICAgICAgICBzdG9yZUlkOiByZXEuc3RvcmVJZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYXBpRXZlbnRzID0ge1xuICAgIG9uQmVmb3JlU2VuZEhlYWRlcnM6IHtcbiAgICAgIG9wdGlvbnM6IFsncmVxdWVzdEhlYWRlcnMnLCAnYmxvY2tpbmcnLCAuLi5FWFRSQV9IRUFERVJTXSxcbiAgICAgIC8qKiBAcGFyYW0ge2Nocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RIZWFkZXJzRGV0YWlsc30gZGV0YWlscyAqL1xuICAgICAgbGlzdGVuZXIoeyByZXF1ZXN0SGVhZGVyczogaGVhZGVycywgcmVxdWVzdElkIH0pIHtcbiAgICAgICAgLy8gb25seSB0aGUgZmlyc3QgY2FsbCBkdXJpbmcgYSByZWRpcmVjdC9hdXRoIGNoYWluIHdpbGwgaGF2ZSBWTS1WZXJpZnkgaGVhZGVyXG4gICAgICAgIGNvbnN0IHJlcUlkID0gaGVhZGVycy5maW5kKGlzVm1WZXJpZnkpPy52YWx1ZSB8fCB2ZXJpZnlbcmVxdWVzdElkXTtcbiAgICAgICAgY29uc3QgcmVxID0gcmVxSWQgJiYgcmVxdWVzdHNbcmVxSWRdO1xuICAgICAgICBpZiAocmVxSWQgJiYgcmVxKSB7XG4gICAgICAgICAgdmVyaWZ5W3JlcXVlc3RJZF0gPSByZXFJZDtcbiAgICAgICAgICByZXEuY29yZUlkID0gcmVxdWVzdElkO1xuICAgICAgICAgIGhlYWRlcnMgPSAocmVxLm5vTmF0aXZlQ29va2llID8gaGVhZGVycy5maWx0ZXIoaXNOb3RDb29raWUpIDogaGVhZGVycylcbiAgICAgICAgICAuY29uY2F0KGhlYWRlcnNUb0luamVjdFtyZXFJZF0gfHwgW10pXG4gICAgICAgICAgLmZpbHRlcihyZXEuYW5vbnltb3VzID8gaXNTZW5kYWJsZUFub24gOiBpc1NlbmRhYmxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyByZXF1ZXN0SGVhZGVyczogaGVhZGVycyB9O1xuICAgICAgfSxcbiAgICB9LFxuICAgIG9uSGVhZGVyc1JlY2VpdmVkOiB7XG4gICAgICBvcHRpb25zOiBbJ3Jlc3BvbnNlSGVhZGVycycsICdibG9ja2luZycsIC4uLkVYVFJBX0hFQURFUlNdLFxuICAgICAgLyoqIEBwYXJhbSB7Y2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdEhlYWRlcnNEZXRhaWxzfSBkZXRhaWxzICovXG4gICAgICBsaXN0ZW5lcih7IHJlc3BvbnNlSGVhZGVyczogaGVhZGVycywgcmVxdWVzdElkLCB1cmwgfSkge1xuICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0c1t2ZXJpZnlbcmVxdWVzdElkXV07XG4gICAgICAgIGlmIChyZXEpIHtcbiAgICAgICAgICBpZiAocmVxLmFub255bW91cyB8fCByZXEuc3RvcmVJZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuZmlsdGVyKGggPT4gKFxuICAgICAgICAgICAgICAhUkVfU0VUX0NPT0tJRS50ZXN0KGgubmFtZSlcbiAgICAgICAgICAgICAgfHwgIXJlcS5zdG9yZUlkXG4gICAgICAgICAgICAgIHx8IHNldENvb2tpZUluU3RvcmUoaC52YWx1ZSwgcmVxLCB1cmwpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVxLnJlc3BvbnNlSGVhZGVycyA9IGhlYWRlcnMubWFwKGVuY29kZVdlYlJlcXVlc3RIZWFkZXIpLmpvaW4oJycpO1xuICAgICAgICAgIHJldHVybiB7IHJlc3BvbnNlSGVhZGVyczogaGVhZGVycyB9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIC8vIENocm9tZSA3NC05MSBuZWVkcyBhbiBleHRyYUhlYWRlcnMgbGlzdGVuZXIgYXQgdGFiIGxvYWQgc3RhcnQsIGh0dHBzOi8vY3JidWcuY29tLzEwNzQyODJcbiAgLy8gV2UncmUgYXR0YWNoaW5nIGEgbm8tb3AgaW4gbm9uLWJsb2NraW5nIG1vZGUgc28gaXQncyB2ZXJ5IGxpZ2h0d2VpZ2h0IGFuZCBmYXN0LlxuICBpZiAodWEuY2hyb21lID49IDc0ICYmIHVhLmNocm9tZSA8PSA5MSkge1xuICAgIGJyb3dzZXIud2ViUmVxdWVzdC5vbkJlZm9yZVNlbmRIZWFkZXJzLmFkZExpc3RlbmVyKG5vb3AsIGFwaUZpbHRlciwgWydleHRyYUhlYWRlcnMnXSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhZGQocmVxSWQsIGhlYWRlcnMpIHtcbiAgICAgIC8vIG5lZWQgdG8gc2V0IHRoZSBlbnRyeSBldmVuIGlmIGl0J3MgZW1wdHkgW10gc28gdGhhdCAnaWYnIGNoZWNrIGluIGRlbCgpIHJ1bnMgb25seSBvbmNlXG4gICAgICBoZWFkZXJzVG9JbmplY3RbcmVxSWRdID0gaGVhZGVycztcbiAgICAgIC8vIG5lZWQgdGhlIGxpc3RlbmVyIHRvIGdldCB0aGUgcmVxdWVzdElkXG4gICAgICBhcGlFdmVudHM6OmZvckVhY2hFbnRyeSgoW25hbWUsIHsgbGlzdGVuZXIsIG9wdGlvbnMgfV0pID0+IHtcbiAgICAgICAgYnJvd3Nlci53ZWJSZXF1ZXN0W25hbWVdLmFkZExpc3RlbmVyKGxpc3RlbmVyLCBhcGlGaWx0ZXIsIG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBkZWwocmVxSWQpIHtcbiAgICAgIGlmIChyZXFJZCBpbiBoZWFkZXJzVG9JbmplY3QpIHtcbiAgICAgICAgZGVsZXRlIGhlYWRlcnNUb0luamVjdFtyZXFJZF07XG4gICAgICAgIGlmIChpc0VtcHR5KGhlYWRlcnNUb0luamVjdCkpIHtcbiAgICAgICAgICBhcGlFdmVudHM6OmZvckVhY2hFbnRyeSgoW25hbWUsIHsgbGlzdGVuZXIgfV0pID0+IHtcbiAgICAgICAgICAgIGJyb3dzZXIud2ViUmVxdWVzdFtuYW1lXS5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufSkoKTtcblxuLyogMU1CIHRha2VzIH4yMG1zIHRvIGVuY29kZS9kZWNvZGUgc28gaXQgZG9lc24ndCBibG9jayB0aGUgcHJvY2VzcyBvZiB0aGUgZXh0ZW5zaW9uIGFuZCB3ZWIgcGFnZSxcbiAqIHdoaWNoIGxldHMgdXMgYW5kIHRoZW0gYmUgcmVzcG9uc2l2ZSB0byBvdGhlciBldmVudHMgb3IgdXNlciBpbnB1dC4gKi9cbmNvbnN0IENIVU5LX1NJWkUgPSAxZTY7XG5cbmFzeW5jIGZ1bmN0aW9uIGJsb2IyY2h1bmsocmVzcG9uc2UsIGluZGV4KSB7XG4gIHJldHVybiBibG9iMmJhc2U2NChyZXNwb25zZSwgaW5kZXggKiBDSFVOS19TSVpFLCBDSFVOS19TSVpFKTtcbn1cblxuZnVuY3Rpb24gYmxvYjJvYmplY3RVcmwocmVzcG9uc2UpIHtcbiAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZXNwb25zZSk7XG4gIGNhY2hlLnB1dChgeGhyQmxvYjoke3VybH1gLCBzZXRUaW1lb3V0KGNvbW1hbmRzLlJldm9rZUJsb2IsIDYwZTMsIHVybCksIDYxZTMpO1xuICByZXR1cm4gdXJsO1xufVxuXG4vKiogQHBhcmFtIHtWTUh0dHBSZXF1ZXN0fSByZXEgKi9cbmZ1bmN0aW9uIHhockNhbGxiYWNrV3JhcHBlcihyZXEpIHtcbiAgbGV0IGxhc3RQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIGxldCBjb250ZW50VHlwZTtcbiAgbGV0IGRhdGFTaXplO1xuICBsZXQgbnVtQ2h1bmtzO1xuICBsZXQgcmVzcG9uc2U7XG4gIGxldCByZXNwb25zZVRleHQ7XG4gIGxldCByZXNwb25zZUhlYWRlcnM7XG4gIGxldCBzZW50ID0gZmFsc2U7XG4gIGNvbnN0IHsgaWQsIGJsb2JiZWQsIGNodW5rZWQsIHhociB9ID0gcmVxO1xuICAvLyBDaHJvbWUgZW5jb2RlcyBtZXNzYWdlcyB0byBVVEY4IHNvIHRoZXkgY2FuIGdyb3cgdXAgdG8gNHggYnV0IDY0TUIgaXMgdGhlIG1lc3NhZ2Ugc2l6ZSBsaW1pdFxuICBjb25zdCBnZXRDaHVuayA9IGJsb2JiZWQgJiYgYmxvYjJvYmplY3RVcmwgfHwgY2h1bmtlZCAmJiBibG9iMmNodW5rO1xuICBjb25zdCBnZXRSZXNwb25zZUhlYWRlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IHJlcS5yZXNwb25zZUhlYWRlcnMgfHwgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuICAgIGlmIChyZXNwb25zZUhlYWRlcnMgIT09IGhlYWRlcnMpIHtcbiAgICAgIHJlc3BvbnNlSGVhZGVycyA9IGhlYWRlcnM7XG4gICAgICByZXR1cm4geyByZXNwb25zZUhlYWRlcnMgfTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoZXZ0KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGV2dC50eXBlO1xuICAgIGlmICghY29udGVudFR5cGUpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICB9XG4gICAgaWYgKHhoci5yZXNwb25zZSAhPT0gcmVzcG9uc2UpIHtcbiAgICAgIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlO1xuICAgICAgc2VudCA9IGZhbHNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgaWYgKHJlc3BvbnNlVGV4dCA9PT0gcmVzcG9uc2UpIHJlc3BvbnNlVGV4dCA9IFsnc2FtZSddO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmUgaWYgcmVzcG9uc2VUZXh0IGlzIHVucmVhY2hhYmxlXG4gICAgICB9XG4gICAgICBpZiAoKGJsb2JiZWQgfHwgY2h1bmtlZCkgJiYgcmVzcG9uc2UpIHtcbiAgICAgICAgZGF0YVNpemUgPSByZXNwb25zZS5zaXplO1xuICAgICAgICBudW1DaHVua3MgPSBjaHVua2VkICYmIE1hdGguY2VpbChkYXRhU2l6ZSAvIENIVU5LX1NJWkUpIHx8IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNob3VsZE5vdGlmeSA9IHJlcS5ldmVudHNUb05vdGlmeS5pbmNsdWRlcyh0eXBlKTtcbiAgICAvLyBvbmx5IHNlbmQgcmVzcG9uc2Ugd2hlbiBYSFIgaXMgY29tcGxldGVcbiAgICBjb25zdCBzaG91bGRTZW5kUmVzcG9uc2UgPSB4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiBzaG91bGROb3RpZnkgJiYgIXNlbnQ7XG4gICAgbGFzdFByb21pc2UgPSBsYXN0UHJvbWlzZS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHJlcS5jYih7XG4gICAgICAgIGJsb2JiZWQsXG4gICAgICAgIGNodW5rZWQsXG4gICAgICAgIGNvbnRlbnRUeXBlLFxuICAgICAgICBkYXRhU2l6ZSxcbiAgICAgICAgaWQsXG4gICAgICAgIG51bUNodW5rcyxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgZGF0YTogc2hvdWxkTm90aWZ5ICYmIHtcbiAgICAgICAgICBmaW5hbFVybDogeGhyLnJlc3BvbnNlVVJMLFxuICAgICAgICAgIC4uLmdldFJlc3BvbnNlSGVhZGVycygpLFxuICAgICAgICAgIC4uLm9iamVjdFBpY2soeGhyLCBbJ3JlYWR5U3RhdGUnLCAnc3RhdHVzJywgJ3N0YXR1c1RleHQnXSksXG4gICAgICAgICAgLi4uKCdsb2FkZWQnIGluIGV2dCkgJiYgb2JqZWN0UGljayhldnQsIFsnbGVuZ3RoQ29tcHV0YWJsZScsICdsb2FkZWQnLCAndG90YWwnXSksXG4gICAgICAgICAgcmVzcG9uc2U6IHNob3VsZFNlbmRSZXNwb25zZVxuICAgICAgICAgICAgPyBudW1DaHVua3MgJiYgYXdhaXQgZ2V0Q2h1bmsocmVzcG9uc2UsIDApIHx8IHJlc3BvbnNlXG4gICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgcmVzcG9uc2VUZXh0OiBzaG91bGRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAgID8gcmVzcG9uc2VUZXh0XG4gICAgICAgICAgICA6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGlmIChzaG91bGRTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1DaHVua3M7IGkgKz0gMSkge1xuICAgICAgICAgIGF3YWl0IHJlcS5jYih7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGNodW5rOiB7XG4gICAgICAgICAgICAgIHBvczogaSAqIENIVU5LX1NJWkUsXG4gICAgICAgICAgICAgIGRhdGE6IGF3YWl0IGdldENodW5rKHJlc3BvbnNlLCBpKSxcbiAgICAgICAgICAgICAgbGFzdDogaSArIDEgPT09IG51bUNodW5rcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnbG9hZGVuZCcpIHtcbiAgICAgICAgY2xlYXJSZXF1ZXN0KHJlcSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lhbEhlYWRlcihsb3dlckhlYWRlcikge1xuICByZXR1cm4gc3BlY2lhbEhlYWRlcnMuaW5jbHVkZXMobG93ZXJIZWFkZXIpXG4gICAgfHwgbG93ZXJIZWFkZXIuc3RhcnRzV2l0aCgncHJveHktJylcbiAgICB8fCBsb3dlckhlYWRlci5zdGFydHNXaXRoKCdzZWMtJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBwYXJhbSB7Y2hyb21lLnJ1bnRpbWUuTWVzc2FnZVNlbmRlciB8IGJyb3dzZXIucnVudGltZS5NZXNzYWdlU2VuZGVyfSBzcmNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGh0dHBSZXF1ZXN0KG9wdHMsIHNyYywgY2IpIHtcbiAgY29uc3QgeyB0YWIgfSA9IHNyYztcbiAgY29uc3QgeyBpbmNvZ25pdG8gfSA9IHRhYjtcbiAgY29uc3QgeyBhbm9ueW1vdXMsIGlkLCBvdmVycmlkZU1pbWVUeXBlLCB4aHJUeXBlLCB1cmwgfSA9IG9wdHM7XG4gIGNvbnN0IHJlcSA9IHJlcXVlc3RzW2lkXTtcbiAgaWYgKCFyZXEgfHwgcmVxLmNiKSByZXR1cm47XG4gIHJlcS5jYiA9IGNiO1xuICByZXEuYW5vbnltb3VzID0gYW5vbnltb3VzO1xuICBjb25zdCB7IHhociB9ID0gcmVxO1xuICBjb25zdCB2bUhlYWRlcnMgPSBbXTtcbiAgLy8gRmlyZWZveCBjYW4gc2VuZCBCbG9iL0FycmF5QnVmZmVyIGRpcmVjdGx5XG4gIGNvbnN0IGNodW5rZWQgPSAhSVNfRklSRUZPWCAmJiBpbmNvZ25pdG87XG4gIGNvbnN0IGJsb2JiZWQgPSB4aHJUeXBlICYmICFJU19GSVJFRk9YICYmICFpbmNvZ25pdG87XG4gIGNvbnN0IFtib2R5LCBjb250ZW50VHlwZV0gPSBkZWNvZGVCb2R5KG9wdHMuZGF0YSk7XG4gIC8vIENocm9tZSBjYW4ndCBmZXRjaCBCbG9iIFVSTCBpbiBpbmNvZ25pdG8gc28gd2UgdXNlIGNodW5rc1xuICByZXEuYmxvYmJlZCA9IGJsb2JiZWQ7XG4gIHJlcS5jaHVua2VkID0gY2h1bmtlZDtcbiAgLy8gRmlyZWZveCBkb2Vzbid0IHNlbmQgY29va2llcywgaHR0cHM6Ly9naXRodWIuY29tL3Zpb2xlbnRtb25rZXkvdmlvbGVudG1vbmtleS9pc3N1ZXMvNjA2XG4gIC8vIEJvdGggQ2hyb21lICYgRkYgbmVlZCBleHBsaWNpdCByb3V0aW5nIG9mIGNvb2tpZXMgaW4gY29udGFpbmVycyBvciBpbmNvZ25pdG9cbiAgbGV0IHNob3VsZFNlbmRDb29raWVzID0gIWFub255bW91cyAmJiAoaW5jb2duaXRvIHx8IElTX0ZJUkVGT1gpO1xuICB4aHIub3BlbihvcHRzLm1ldGhvZCB8fCAnR0VUJywgdXJsLCB0cnVlLCBvcHRzLnVzZXIgfHwgJycsIG9wdHMucGFzc3dvcmQgfHwgJycpO1xuICB4aHIuc2V0UmVxdWVzdEhlYWRlcihWTV9WRVJJRlksIGlkKTtcbiAgaWYgKGNvbnRlbnRUeXBlKSB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuICBvcHRzLmhlYWRlcnM6OmZvckVhY2hFbnRyeSgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoaXNTcGVjaWFsSGVhZGVyKGxvd2VyTmFtZSkpIHtcbiAgICAgIHZtSGVhZGVycy5wdXNoKHsgbmFtZSwgdmFsdWUgfSk7XG4gICAgfSBlbHNlIGlmICghbG93ZXJOYW1lLnN0YXJ0c1dpdGgoJ3ZtLScpKSB7XG4gICAgICAvLyBgVk0tYCBoZWFkZXJzIGFyZSByZXNlcnZlZFxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICBpZiAobG93ZXJOYW1lID09PSAnY29va2llJykge1xuICAgICAgc2hvdWxkU2VuZENvb2tpZXMgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICB4aHIucmVzcG9uc2VUeXBlID0gKGNodW5rZWQgfHwgYmxvYmJlZCkgJiYgJ2Jsb2InIHx8IHhoclR5cGUgfHwgJ3RleHQnO1xuICB4aHIudGltZW91dCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDB4N0ZGRl9GRkZGLCBvcHRzLnRpbWVvdXQpKSB8fCAwO1xuICBpZiAob3ZlcnJpZGVNaW1lVHlwZSkgeGhyLm92ZXJyaWRlTWltZVR5cGUob3ZlcnJpZGVNaW1lVHlwZSk7XG4gIGlmIChzaG91bGRTZW5kQ29va2llcykge1xuICAgIHJlcS5ub05hdGl2ZUNvb2tpZSA9IHRydWU7XG4gICAgZm9yIChjb25zdCBzdG9yZSBvZiBhd2FpdCBicm93c2VyLmNvb2tpZXMuZ2V0QWxsQ29va2llU3RvcmVzKCkpIHtcbiAgICAgIGlmIChzdG9yZS50YWJJZHMuaW5jbHVkZXModGFiLmlkKSkge1xuICAgICAgICBpZiAoSVNfRklSRUZPWCA/IHN0b3JlLmlkICE9PSAnZmlyZWZveC1kZWZhdWx0JyA6IHN0b3JlLmlkICE9PSAnMCcpIHtcbiAgICAgICAgICAvKiBDb29raWUgcm91dGluZy4gRm9yIHRoZSBtYWluIHN0b3JlIHdlIHJlbHkgb24gdGhlIGJyb3dzZXIuXG4gICAgICAgICAgICogVGhlIGlkcyBhcmUgaGFyZC1jb2RlZCBhcyBgc3RvcmVzYCBtYXkgb21pdCB0aGUgbWFpbiBzdG9yZSBpZiBubyBzdWNoIHRhYnMgYXJlIG9wZW4uICovXG4gICAgICAgICAgcmVxLnN0b3JlSWQgPSBzdG9yZS5pZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgY29uc3QgY29va2llcyA9IChhd2FpdCBicm93c2VyLmNvb2tpZXMuZ2V0QWxsKHtcbiAgICAgIHVybCxcbiAgICAgIHN0b3JlSWQ6IHJlcS5zdG9yZUlkLFxuICAgICAgLi4udWEuZmlyZWZveCA+PSA1OSAmJiB7IGZpcnN0UGFydHlEb21haW46IG51bGwgfSxcbiAgICB9KSkuZmlsdGVyKGMgPT4gYy5zZXNzaW9uIHx8IGMuZXhwaXJhdGlvbkRhdGUgPiBub3cpOyAvLyBGRiByZXBvcnRzIGV4cGlyZWQgY29va2llcyFcbiAgICBpZiAoY29va2llcy5sZW5ndGgpIHtcbiAgICAgIHZtSGVhZGVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2Nvb2tpZScsXG4gICAgICAgIHZhbHVlOiBjb29raWVzLm1hcChjID0+IGAke2MubmFtZX09JHtjLnZhbHVlfTtgKS5qb2luKCcgJyksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgSGVhZGVySW5qZWN0b3IuYWRkKGlkLCB2bUhlYWRlcnMpO1xuICBjb25zdCBjYWxsYmFjayA9IHhockNhbGxiYWNrV3JhcHBlcihyZXEpO1xuICByZXEuZXZlbnRzVG9Ob3RpZnkuZm9yRWFjaChldnQgPT4geyB4aHJbYG9uJHtldnR9YF0gPSBjYWxsYmFjazsgfSk7XG4gIHhoci5vbmxvYWRlbmQgPSBjYWxsYmFjazsgLy8gYWx3YXlzIHNlbmQgaXQgZm9yIHRoZSBpbnRlcm5hbCBjbGVhbnVwXG4gIHhoci5zZW5kKGJvZHkpO1xufVxuXG4vKiogQHBhcmFtIHtWTUh0dHBSZXF1ZXN0fSByZXEgKi9cbmZ1bmN0aW9uIGNsZWFyUmVxdWVzdChyZXEpIHtcbiAgaWYgKHJlcS5jb3JlSWQpIGRlbGV0ZSB2ZXJpZnlbcmVxLmNvcmVJZF07XG4gIGRlbGV0ZSByZXF1ZXN0c1tyZXEuaWRdO1xuICBkZWxldGUgKHRhYlJlcXVlc3RzW3JlcS50YWJJZF0gfHwge30pW3JlcS5pZF07XG4gIEhlYWRlckluamVjdG9yLmRlbChyZXEuaWQpO1xufVxuXG4vKiogUG9seWZpbGwgZm9yIENocm9tZSdzIGluYWJpbGl0eSB0byBzZW5kIGNvbXBsZXggdHlwZXMgb3ZlciBleHRlbnNpb24gbWVzc2FnaW5nICovXG5mdW5jdGlvbiBkZWNvZGVCb2R5KFtib2R5LCB0eXBlLCB3YXNCbG9iXSkge1xuICBpZiAodHlwZSA9PT0gJ3F1ZXJ5Jykge1xuICAgIHR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgfSBlbHNlIGlmICh0eXBlKSB7XG4gICAgLy8gNXggdGltZXMgZmFzdGVyIHRoYW4gZmV0Y2goKSB3aGljaCB3YXN0ZXMgdGltZSBvbiBpbnRlci1wcm9jZXNzIGNvbW11bmljYXRpb25cbiAgICBjb25zdCByZXMgPSBzdHJpbmcydWludDhhcnJheShhdG9iKGJvZHkuc2xpY2UoYm9keS5pbmRleE9mKCcsJykgKyAxKSkpO1xuICAgIGlmICghd2FzQmxvYikge1xuICAgICAgdHlwZSA9IGJvZHkubWF0Y2goL15kYXRhOiguKz8pO2Jhc2U2NC8pWzFdLnJlcGxhY2UoLyhib3VuZGFyeT0pW147XSsvLFxuICAgICAgICAvLyB1c2luZyBhIGZ1bmN0aW9uIHNvIGl0IHJ1bnMgb25seSBpZiBcImJvdW5kYXJ5XCIgd2FzIGZvdW5kXG4gICAgICAgIChfLCBwMSkgPT4gcDEgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLnJlcy5zbGljZSgyLCByZXMuaW5kZXhPZigxMykpKSk7XG4gICAgfVxuICAgIGJvZHkgPSByZXM7XG4gIH1cbiAgcmV0dXJuIFtib2R5LCB0eXBlXTtcbn1cblxuLy8gV2F0Y2ggVVJMIHJlZGlyZWN0c1xuLy8gYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVkaXJlY3QuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XG4vLyAgIGNvbnN0IHJlcUlkID0gdmVyaWZ5W2RldGFpbHMucmVxdWVzdElkXTtcbi8vICAgaWYgKHJlcUlkKSB7XG4vLyAgICAgY29uc3QgcmVxID0gcmVxdWVzdHNbcmVxSWRdO1xuLy8gICAgIGlmIChyZXEpIHJlcS5maW5hbFVybCA9IGRldGFpbHMucmVkaXJlY3RVcmw7XG4vLyAgIH1cbi8vIH0sIHtcbi8vICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4vLyAgIHR5cGVzOiBbJ3htbGh0dHByZXF1ZXN0J10sXG4vLyB9KTtcblxuLy8gdGFza3MgYXJlIG5vdCBuZWNlc3Nhcnkgbm93LCB0dXJuZWQgb2ZmXG4vLyBTdG9wIHJlZGlyZWN0c1xuLy8gYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkLmFkZExpc3RlbmVyKGRldGFpbHMgPT4ge1xuLy8gICBjb25zdCB0YXNrID0gdGFza3NbZGV0YWlscy5yZXF1ZXN0SWRdO1xuLy8gICBpZiAodGFzaykge1xuLy8gICAgIGRlbGV0ZSB0YXNrc1tkZXRhaWxzLnJlcXVlc3RJZF07XG4vLyAgICAgaWYgKHRhc2sgPT09ICdHZXQtTG9jYXRpb24nICYmIFszMDEsIDMwMiwgMzAzXS5pbmNsdWRlcyhkZXRhaWxzLnN0YXR1c0NvZGUpKSB7XG4vLyAgICAgICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRldGFpbHMucmVzcG9uc2VIZWFkZXJzLmZpbmQoXG4vLyAgICAgICAgIGhlYWRlciA9PiBoZWFkZXIubmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbG9jYXRpb24nKTtcbi8vICAgICAgIGNvbnN0IGJhc2U2NCA9IGxvY2F0aW9uSGVhZGVyICYmIGxvY2F0aW9uSGVhZGVyLnZhbHVlO1xuLy8gICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcmVkaXJlY3RVcmw6IGBkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwke2Jhc2U2NCB8fCAnJ31gLFxuLy8gICAgICAgfTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH0sIHtcbi8vICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4vLyAgIHR5cGVzOiBbJ3htbGh0dHByZXF1ZXN0J10sXG4vLyB9LCBbJ2Jsb2NraW5nJywgJ3Jlc3BvbnNlSGVhZGVycyddKTtcbi8vIGJyb3dzZXIud2ViUmVxdWVzdC5vbkNvbXBsZXRlZC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcbi8vICAgZGVsZXRlIHRhc2tzW2RldGFpbHMucmVxdWVzdElkXTtcbi8vIH0sIHtcbi8vICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4vLyAgIHR5cGVzOiBbJ3htbGh0dHByZXF1ZXN0J10sXG4vLyB9KTtcbi8vIGJyb3dzZXIud2ViUmVxdWVzdC5vbkVycm9yT2NjdXJyZWQuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XG4vLyAgIGRlbGV0ZSB0YXNrc1tkZXRhaWxzLnJlcXVlc3RJZF07XG4vLyB9LCB7XG4vLyAgIHVybHM6IFsnPGFsbF91cmxzPiddLFxuLy8gICB0eXBlczogWyd4bWxodHRwcmVxdWVzdCddLFxuLy8gfSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbmZpcm1JbnN0YWxsKHsgY29kZSwgZnJvbSwgdXJsIH0sIHsgdGFiID0ge30gfSkge1xuICBpZiAoIWNvZGUpIGNvZGUgPSAoYXdhaXQgcmVxdWVzdCh1cmwpKS5kYXRhO1xuICAvLyBUT0RPOiBkaXNwbGF5IHRoZSBlcnJvciBpbiBVSVxuICBpZiAoIWlzVXNlclNjcmlwdChjb2RlKSkgdGhyb3cgaTE4bignbXNnSW52YWxpZFNjcmlwdCcpO1xuICBjYWNoZS5wdXQodXJsLCBjb2RlLCAzMDAwKTtcbiAgY29uc3QgY29uZmlybUtleSA9IGdldFVuaXFJZCgpO1xuICBjb25zdCB7IGFjdGl2ZSwgaWQ6IHRhYklkLCBpbmNvZ25pdG8gfSA9IHRhYjtcbiAgLy8gTm90IHRlc3RpbmcgdGFiLnBlbmRpbmdVcmwgYmVjYXVzZSBpdCB3aWxsIGJlIGFsd2F5cyBlcXVhbCB0byBgdXJsYFxuICBjb25zdCBjYW5SZXBsYWNlQ3VyVGFiID0gKCFpbmNvZ25pdG8gfHwgSVNfRklSRUZPWCkgJiYgKFxuICAgIHVybCA9PT0gZnJvbVxuICAgIHx8IGNhY2hlLmhhcyhgYXV0b2Nsb3NlOiR7dGFiSWR9YClcbiAgICB8fCAvXihjaHJvbWU6XFwvXFwvKG5ld3RhYnxzdGFydHBhZ2UpXFwvfGFib3V0Oihob21lfG5ld3RhYikpJC8udGVzdChmcm9tKSk7XG4gIC8qKiBAbmFtZXNwYWNlIFZNQ29uZmlybUNhY2hlICovXG4gIGNhY2hlLnB1dChgY29uZmlybS0ke2NvbmZpcm1LZXl9YCwgeyBpbmNvZ25pdG8sIHVybCwgZnJvbSwgdGFiSWQsIGZmOiB1YS5maXJlZm94IH0pO1xuICBjb25zdCBjb25maXJtVXJsID0gQ09ORklSTV9VUkxfQkFTRSArIGNvbmZpcm1LZXk7XG4gIGNvbnN0IHsgd2luZG93SWQgfSA9IGNhblJlcGxhY2VDdXJUYWJcbiAgICA/IGF3YWl0IGJyb3dzZXIudGFicy51cGRhdGUodGFiSWQsIHsgdXJsOiBjb25maXJtVXJsIH0pXG4gICAgOiBhd2FpdCBjb21tYW5kcy5UYWJPcGVuKHsgdXJsOiBjb25maXJtVXJsLCBhY3RpdmU6ICEhYWN0aXZlIH0sIHsgdGFiIH0pO1xuICBpZiAoYWN0aXZlICYmIHdpbmRvd0lkICE9PSB0YWIud2luZG93SWQpIHtcbiAgICBhd2FpdCBicm93c2VyLndpbmRvd3MudXBkYXRlKHdpbmRvd0lkLCB7IGZvY3VzZWQ6IHRydWUgfSk7XG4gIH1cbn1cblxuY29uc3Qgd2hpdGVsaXN0UmUgPSBuZXcgUmVnRXhwKGBeaHR0cHM6Ly8oJHtcbiAgW1xuICAgICdncmVhc3lmb3JrXFxcXC5vcmcvc2NyaXB0cy8lL2NvZGUvJyxcbiAgICAnb3BlbnVzZXJqc1xcXFwub3JnL2luc3RhbGwvJS8nLFxuICAgICdnaXRodWJcXFxcLmNvbS8lLyUvcmF3LyUvJyxcbiAgICAnZ2l0aHViXFxcXC5jb20vJS8lL3JlbGVhc2VzLyUvZG93bmxvYWQvJyxcbiAgICAncmF3XFxcXC5naXRodWJ1c2VyY29udGVudFxcXFwuY29tKC8lKXszfS8nLFxuICAgICdnaXN0XFxcXC5naXRodWJcXFxcLmNvbS8uKj8vJyxcbiAgXS5qb2luKCd8Jylcbn0pJT9cXFxcLnVzZXJcXFxcLmpzKFs/I118JClgLnJlcGxhY2UoLyUvZywgJ1teL10qJykpO1xuXG5jb25zdCBibGFja2xpc3RSZSA9IG5ldyBSZWdFeHAoYF5odHRwczovLygke1xuICBbXG4gICAgJyhnaXN0XFxcXC4pP2dpdGh1YlxcXFwuY29tJyxcbiAgICAnZ3JlYXN5Zm9ya1xcXFwub3JnJyxcbiAgICAnb3BlbnVzZXJqc1xcXFwub3JnJyxcbiAgXS5qb2luKCd8Jylcbn0pL2ApO1xuXG5jb25zdCByZXNvbHZlVmlydHVhbFVybCA9IHVybCA9PiAoXG4gIGAke2V4dGVuc2lvblJvb3R9b3B0aW9ucy9pbmRleC5odG1sI3NjcmlwdHMvJHsrdXJsLnNwbGl0KCcjJylbMV19YFxuKTtcbi8vIEZGIGNhbid0IGludGVyY2VwdCB2aXJ0dWFsIC51c2VyLmpzIFVSTCB2aWEgd2ViUmVxdWVzdCwgc28gd2UgcmVkaXJlY3QgaXQgZXhwbGljaXRseVxuY29uc3QgdmlydHVhbFVybFJlID0gSVNfRklSRUZPWCAmJiBuZXcgUmVnRXhwKChcbiAgYF4odmlldy1zb3VyY2U6KT8oJHtleHRlbnNpb25Sb290LnJlcGxhY2UoJzovLycsICckJik/Jyl9W14vXSpcXFxcLnVzZXJcXFxcLmpzI1xcXFxkK2BcbikpO1xuY29uc3QgbWF5YmVSZWRpcmVjdFZpcnR1YWxVcmxGRiA9IHZpcnR1YWxVcmxSZSAmJiAoKHRhYklkLCBzcmMpID0+IHtcbiAgaWYgKHZpcnR1YWxVcmxSZS50ZXN0KHNyYykpIHtcbiAgICBicm93c2VyLnRhYnMudXBkYXRlKHRhYklkLCB7IHVybDogcmVzb2x2ZVZpcnR1YWxVcmwoc3JjKSB9KTtcbiAgfVxufSk7XG5pZiAodmlydHVhbFVybFJlKSB7XG4gIGNvbnN0IGxpc3RlbmVyID0gKHRhYklkLCB7IHVybCB9KSA9PiB1cmwgJiYgbWF5YmVSZWRpcmVjdFZpcnR1YWxVcmxGRih0YWJJZCwgdXJsKTtcbiAgY29uc3QgYXBpRXZlbnQgPSBicm93c2VyLnRhYnMub25VcGRhdGVkO1xuICBjb25zdCBhZGRMaXN0ZW5lciA9IGFwaUV2ZW50LmFkZExpc3RlbmVyLmJpbmQoYXBpRXZlbnQsIGxpc3RlbmVyKTtcbiAgdHJ5IHsgYWRkTGlzdGVuZXIoeyBwcm9wZXJ0aWVzOiBbJ3VybCddIH0pOyB9IGNhdGNoIChlKSB7IGFkZExpc3RlbmVyKCk7IH1cbn1cblxuYnJvd3Nlci50YWJzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB1cmwgfSA9IHRhYjtcbiAgLyogRGV0ZXJtaW5pbmcgaWYgdGhpcyB0YWIgY2FuIGJlIGF1dG8tY2xvc2VkIChyZXBsYWNlZCwgYWN0dWFsbHkpLlxuICAgICBGRj49NjggYWxsb3dzIHJlYWRpbmcgZmlsZTogVVJMIG9ubHkgaW4gdGhlIHRhYidzIGNvbnRlbnQgc2NyaXB0IHNvIHRoZSB0YWIgbXVzdCBzdGF5IG9wZW4uICovXG4gIGlmICgoIXVybC5zdGFydHNXaXRoKCdmaWxlOicpIHx8IHVhLmZpcmVmb3ggPCA2OClcbiAgICAgICYmIC9cXC51c2VyXFwuanMoWz8jXXwkKS8udGVzdCh0YWIucGVuZGluZ1VybCB8fCB1cmwpKSB7XG4gICAgY2FjaGUucHV0KGBhdXRvY2xvc2U6JHtpZH1gLCB0cnVlLCAxMGUzKTtcbiAgfVxuICBpZiAodmlydHVhbFVybFJlICYmIHVybCA9PT0gJ2Fib3V0OmJsYW5rJykge1xuICAgIG1heWJlUmVkaXJlY3RWaXJ0dWFsVXJsRkYoaWQsIHRpdGxlKTtcbiAgfVxufSk7XG5cbmJyb3dzZXIud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoKHJlcSkgPT4ge1xuICBjb25zdCB7IG1ldGhvZCwgdGFiSWQsIHVybCB9ID0gcmVxO1xuICBpZiAobWV0aG9kICE9PSAnR0VUJykge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBvcGVuIGEgcmVhbCBVUkwgZm9yIHNpbXBsaWZpZWQgdXNlcnNjcmlwdCBVUkwgbGlzdGVkIGluIGRldnRvb2xzIG9mIHRoZSB3ZWIgcGFnZVxuICBpZiAodXJsLnN0YXJ0c1dpdGgoZXh0ZW5zaW9uUm9vdCkpIHtcbiAgICByZXR1cm4geyByZWRpcmVjdFVybDogcmVzb2x2ZVZpcnR1YWxVcmwodXJsKSB9O1xuICB9XG4gIGlmICghY2FjaGUuaGFzKGBieXBhc3M6JHt1cmx9YClcbiAgJiYgKCFibGFja2xpc3RSZS50ZXN0KHVybCkgfHwgd2hpdGVsaXN0UmUudGVzdCh1cmwpKSkge1xuICAgIG1heWJlSW5zdGFsbFVzZXJKcyh0YWJJZCwgdXJsKTtcbiAgICByZXR1cm4geyByZWRpcmVjdFVybDogJ2phdmFzY3JpcHQ6dm9pZCAwJyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgfVxufSwge1xuICB1cmxzOiBbXG4gICAgLy8gMS4gKjovLyBjb21wcmlzZXMgb25seSBodHRwL2h0dHBzXG4gICAgLy8gMi4gdGhlIEFQSSBpZ25vcmVzICNoYXNoIHBhcnRcbiAgICAvLyAzLiBGaXJlZm94OiBvbkJlZm9yZVJlcXVlc3QgZG9lcyBub3Qgd29yayB3aXRoIGZpbGU6Ly8gb3IgbW96LWV4dGVuc2lvbjovL1xuICAgICcqOi8vKi8qLnVzZXIuanMnLFxuICAgICcqOi8vKi8qLnVzZXIuanM/KicsXG4gICAgJ2ZpbGU6Ly8qLyoudXNlci5qcycsXG4gICAgJ2ZpbGU6Ly8qLyoudXNlci5qcz8qJyxcbiAgICBgJHtleHRlbnNpb25Sb290fSoudXNlci5qc2AsXG4gIF0sXG4gIHR5cGVzOiBbJ21haW5fZnJhbWUnXSxcbn0sIFsnYmxvY2tpbmcnXSk7XG5cbmFzeW5jIGZ1bmN0aW9uIG1heWJlSW5zdGFsbFVzZXJKcyh0YWJJZCwgdXJsKSB7XG4gIGNvbnN0IHsgZGF0YTogY29kZSB9ID0gYXdhaXQgcmVxdWVzdCh1cmwpLmNhdGNoKG5vb3ApIHx8IHt9O1xuICBpZiAoY29kZSAmJiBwYXJzZU1ldGEoY29kZSkubmFtZSkge1xuICAgIGNvbnN0IHRhYiA9IHRhYklkID49IDAgJiYgYXdhaXQgYnJvd3Nlci50YWJzLmdldCh0YWJJZCkgfHwge307XG4gICAgY29uZmlybUluc3RhbGwoeyBjb2RlLCB1cmwsIGZyb206IHRhYi51cmwgfSwgeyB0YWIgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FjaGUucHV0KGBieXBhc3M6JHt1cmx9YCwgdHJ1ZSwgMTBlMyk7XG4gICAgaWYgKHRhYklkID49IDApIGJyb3dzZXIudGFicy51cGRhdGUodGFiSWQsIHsgdXJsIH0pO1xuICB9XG59XG5cbi8vIEluIEZpcmVmb3ggd2l0aCBwcm9kdWN0aW9uIGNvZGUgb2YgVmlvbGVudG1vbmtleSwgc2NyaXB0cyBjYW4gYmUgaW5qZWN0ZWQgYmVmb3JlIGB0YWJzLm9uVXBkYXRlZGAgaXMgZmlyZWQuXG4vLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS92aW9sZW50bW9ua2V5L3Zpb2xlbnRtb25rZXkvaXNzdWVzLzEyNTVcblxuYnJvd3Nlci50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigodGFiSWQpID0+IHtcbiAgY2xlYXJSZXF1ZXN0c0J5VGFiSWQodGFiSWQpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclJlcXVlc3RzQnlUYWJJZCh0YWJJZCkge1xuICBjb25zdCBzZXQgPSB0YWJSZXF1ZXN0c1t0YWJJZF07XG4gIGlmIChzZXQpIHtcbiAgICBkZWxldGUgdGFiUmVxdWVzdHNbdGFiSWRdO1xuICAgIHNldDo6Zm9yRWFjaEVudHJ5KChbaWRdKSA9PiBjb21tYW5kcy5BYm9ydFJlcXVlc3QoaWQpKTtcbiAgfVxufVxuXG4vKipcbiAqIEltaXRhdGluZyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzXG4gKiBQZXIgdGhlIHNwZWNpZmljYXRpb24gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAgdGhlIGhlYWRlciBuYW1lIGlzIHdpdGhpbiBBU0NJSSxcbiAqIGJ1dCB3ZSdsbCB0cnkgZW5jb2RpbmcgaXQsIGlmIG5lY2Vzc2FyeSwgdG8gaGFuZGxlIGludmFsaWQgc2VydmVyIHJlc3BvbnNlcy5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlV2ViUmVxdWVzdEhlYWRlcih7IG5hbWUsIHZhbHVlLCBiaW5hcnlWYWx1ZSB9KSB7XG4gIHJldHVybiBgJHtzdHJpbmcyYnl0ZVN0cmluZyhuYW1lKX06ICR7XG4gICAgYmluYXJ5VmFsdWVcbiAgICAgID8gYnVmZmVyMnN0cmluZyhiaW5hcnlWYWx1ZSlcbiAgICAgIDogc3RyaW5nMmJ5dGVTdHJpbmcodmFsdWUpXG4gIH1cXHJcXG5gO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBVVEY4LWVuY29kZWQgYmluYXJ5IHN0cmluZyBpLmUuIG9uZSBieXRlIHBlciBjaGFyYWN0ZXIuXG4gKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzdHJpbmcgaW4gY2FzZSBpdCB3YXMgYWxyZWFkeSB3aXRoaW4gQVNDSUkuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZzJieXRlU3RyaW5nKHN0cikge1xuICBpZiAoIS9bXFx1MDA4MC1cXHVGRkZGXS8udGVzdChzdHIpKSByZXR1cm4gc3RyO1xuICBpZiAoIWVuY29kZXIpIGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgcmV0dXJuIGJ1ZmZlcjJzdHJpbmcoZW5jb2Rlci5lbmNvZGUoc3RyKSk7XG59XG5cbi8qKiBAdHlwZWRlZiB7e1xuICBhbm9ueW1vdXM6IGJvb2xlYW5cbiAgYmxvYmJlZDogYm9vbGVhblxuICBjYjogZnVuY3Rpb24oT2JqZWN0KVxuICBjaHVua2VkOiBib29sZWFuXG4gIGNvcmVJZDogbnVtYmVyXG4gIGV2ZW50c1RvTm90aWZ5OiBzdHJpbmdbXVxuICBpZDogbnVtYmVyXG4gIG5vTmF0aXZlQ29va2llOiBib29sZWFuXG4gIHJlc3BvbnNlSGVhZGVyczogc3RyaW5nXG4gIHN0b3JlSWQ6IHN0cmluZ1xuICB0YWJJZDogbnVtYmVyXG4gIHhocjogWE1MSHR0cFJlcXVlc3Rcbn19IFZNSHR0cFJlcXVlc3QgKi9cbiIsImltcG9ydCB7IGdldFVuaXFJZCwgZW5jb2RlRmlsZW5hbWUgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBNRVRBQkxPQ0tfUkUgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgbWFwRW50cnkgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uIH0gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICAvKiogQHJldHVybiB7c3RyaW5nfSAqL1xuICBDYWNoZU5ld1NjcmlwdChkYXRhKSB7XG4gICAgY29uc3QgaWQgPSBnZXRVbmlxSWQoKTtcbiAgICBjYWNoZS5wdXQoYG5ldy0ke2lkfWAsIG5ld1NjcmlwdChkYXRhKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9LFxuICAvKiogQHJldHVybiB7Vk1TY3JpcHR9ICovXG4gIE5ld1NjcmlwdChpZCkge1xuICAgIHJldHVybiBpZCAmJiBjYWNoZS5nZXQoYG5ldy0ke2lkfWApIHx8IG5ld1NjcmlwdCgpO1xuICB9LFxuICBQYXJzZU1ldGE6IHBhcnNlTWV0YSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VyU2NyaXB0KHRleHQpIHtcbiAgaWYgKC9eXFxzKjwvLnRlc3QodGV4dCkpIHJldHVybiBmYWxzZTsgLy8gSFRNTFxuICBpZiAodGV4dC5pbmRleE9mKCcvLyA9PVVzZXJTY3JpcHQ9PScpIDwgMCkgcmV0dXJuIGZhbHNlOyAvLyBMYWNrIG9mIG1ldGEgYmxvY2tcbiAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IGFycmF5VHlwZSA9IHtcbiAgZGVmYXVsdDogKCkgPT4gW10sXG4gIHRyYW5zZm9ybTogKHJlcywgdmFsKSA9PiB7XG4gICAgcmVzLnB1c2godmFsKTtcbiAgICByZXR1cm4gcmVzO1xuICB9LFxufTtcbmNvbnN0IGRlZmF1bHRUeXBlID0ge1xuICBkZWZhdWx0OiAoKSA9PiBudWxsLFxuICB0cmFuc2Zvcm06IChyZXMsIHZhbCkgPT4gKHJlcyA9PSBudWxsID8gdmFsIDogcmVzKSxcbn07XG5jb25zdCBtZXRhVHlwZXMgPSB7XG4gIGluY2x1ZGU6IGFycmF5VHlwZSxcbiAgZXhjbHVkZTogYXJyYXlUeXBlLFxuICBtYXRjaDogYXJyYXlUeXBlLFxuICBleGNsdWRlTWF0Y2g6IGFycmF5VHlwZSxcbiAgcmVxdWlyZTogYXJyYXlUeXBlLFxuICByZXNvdXJjZToge1xuICAgIGRlZmF1bHQ6ICgpID0+ICh7fSksXG4gICAgdHJhbnNmb3JtOiAocmVzLCB2YWwpID0+IHtcbiAgICAgIGNvbnN0IHBhaXIgPSB2YWwubWF0Y2goL14oXFx3XFxTKilcXHMrKC4qKS8pO1xuICAgICAgaWYgKHBhaXIpIHJlc1twYWlyWzFdXSA9IHBhaXJbMl07XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0sXG4gIH0sXG4gIGdyYW50OiBhcnJheVR5cGUsXG4gIG5vZnJhbWVzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gZmFsc2UsXG4gICAgdHJhbnNmb3JtOiAoKSA9PiB0cnVlLFxuICB9LFxufTtcbmNvbnN0IG1ldGFPcHRpb25hbFR5cGVzID0ge1xuICBhbnRpZmVhdHVyZTogYXJyYXlUeXBlLFxuICBjb21wYXRpYmxlOiBhcnJheVR5cGUsXG4gIGNvbm5lY3Q6IGFycmF5VHlwZSxcbn07XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNZXRhKGNvZGUpIHtcbiAgLy8gaW5pdGlhbGl6ZSBtZXRhXG4gIGNvbnN0IG1ldGEgPSBtZXRhVHlwZXM6Om1hcEVudHJ5KChbLCB2YWx1ZV0pID0+IHZhbHVlLmRlZmF1bHQoKSk7XG4gIGNvbnN0IG1ldGFCb2R5ID0gY29kZS5tYXRjaChNRVRBQkxPQ0tfUkUpWzFdIHx8ICcnO1xuICBtZXRhQm9keS5yZXBsYWNlKC8oPzpefFxcbilcXHMqXFwvXFwvXFx4MjAoQFxcUyspKC4qKS9nLCAoX21hdGNoLCByYXdLZXksIHJhd1ZhbHVlKSA9PiB7XG4gICAgY29uc3QgW2tleU5hbWUsIGxvY2FsZV0gPSByYXdLZXkuc2xpY2UoMSkuc3BsaXQoJzonKTtcbiAgICBjb25zdCBjYW1lbEtleSA9IGtleU5hbWUucmVwbGFjZSgvWy1fXShcXHcpL2csIChtLCBnKSA9PiBnLnRvVXBwZXJDYXNlKCkpO1xuICAgIGNvbnN0IGtleSA9IGxvY2FsZSA/IGAke2NhbWVsS2V5fToke2xvY2FsZS50b0xvd2VyQ2FzZSgpfWAgOiBjYW1lbEtleTtcbiAgICBjb25zdCB2YWwgPSByYXdWYWx1ZS50cmltKCk7XG4gICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhVHlwZXNba2V5XSB8fCBtZXRhT3B0aW9uYWxUeXBlc1trZXldIHx8IGRlZmF1bHRUeXBlO1xuICAgIGxldCBvbGRWYWx1ZSA9IG1ldGFba2V5XTtcbiAgICBpZiAodHlwZW9mIG9sZFZhbHVlID09PSAndW5kZWZpbmVkJykgb2xkVmFsdWUgPSBtZXRhVHlwZS5kZWZhdWx0KCk7XG4gICAgbWV0YVtrZXldID0gbWV0YVR5cGUudHJhbnNmb3JtKG9sZFZhbHVlLCB2YWwpO1xuICB9KTtcbiAgbWV0YS5yZXNvdXJjZXMgPSBtZXRhLnJlc291cmNlO1xuICBkZWxldGUgbWV0YS5yZXNvdXJjZTtcbiAgLy8gQGhvbWVwYWdlVVJMOiBjb21wYXRpYmxlIHdpdGggQGhvbWVwYWdlXG4gIGlmICghbWV0YS5ob21lcGFnZVVSTCAmJiBtZXRhLmhvbWVwYWdlKSBtZXRhLmhvbWVwYWdlVVJMID0gbWV0YS5ob21lcGFnZTtcbiAgcmV0dXJuIG1ldGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q3VzdG9tKCkge1xuICByZXR1cm4ge1xuICAgIG9yaWdJbmNsdWRlOiB0cnVlLFxuICAgIG9yaWdFeGNsdWRlOiB0cnVlLFxuICAgIG9yaWdNYXRjaDogdHJ1ZSxcbiAgICBvcmlnRXhjbHVkZU1hdGNoOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3U2NyaXB0KGRhdGEpIHtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgdXJsOiAnKjovLyovKicsXG4gICAgbmFtZTogJycsXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxuICAgIC4uLmRhdGEsXG4gIH07XG4gIGNvbnN0IGNvZGUgPSBnZXRPcHRpb24oJ3NjcmlwdFRlbXBsYXRlJylcbiAgLnJlcGxhY2UoL3t7KFxcdyspfX0vZywgKHN0ciwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gc3RhdGVbbmFtZV07XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBzdHIgOiB2YWx1ZTtcbiAgfSk7XG4gIGNvbnN0IHNjcmlwdCA9IHtcbiAgICBjdXN0b206IGdldERlZmF1bHRDdXN0b20oKSxcbiAgICBjb25maWc6IHtcbiAgICAgIGVuYWJsZWQ6IDEsXG4gICAgICBzaG91bGRVcGRhdGU6IDEsXG4gICAgfSxcbiAgICBtZXRhOiBwYXJzZU1ldGEoY29kZSksXG4gICAgcHJvcHM6IHt9LFxuICB9O1xuICByZXR1cm4geyBzY3JpcHQsIGNvZGUgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVVUkkoc2NyaXB0KSB7XG4gIGNvbnN0IG5zID0gc2NyaXB0Lm1ldGEubmFtZXNwYWNlIHx8ICcnO1xuICBjb25zdCBuYW1lID0gc2NyaXB0Lm1ldGEubmFtZSB8fCAnJztcbiAgbGV0IG5hbWVVUkkgPSBlbmNvZGVGaWxlbmFtZShgJHtuc31cXG4ke25hbWV9XFxuYCk7XG4gIGlmICghbnMgJiYgIW5hbWUpIG5hbWVVUkkgKz0gc2NyaXB0LnByb3BzLmlkIHx8ICcnO1xuICByZXR1cm4gbmFtZVVSSTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkUXVlcnkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJyYnKS5yZWR1Y2UoKGRhdGEsIHBpZWNlKSA9PiB7XG4gICAgY29uc3QgW2tleSwgdmFsXSA9IHBpZWNlLnNwbGl0KCc9JykubWFwKGRlY29kZVVSSUNvbXBvbmVudCk7XG4gICAgZGF0YVtrZXldID0gdmFsO1xuICAgIHJldHVybiBkYXRhO1xuICB9LCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkdW1wUXVlcnkoZGljdCkge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoZGljdClcbiAgLm1hcChrZXlWYWwgPT4ga2V5VmFsLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJz0nKSlcbiAgLmpvaW4oJyYnKTtcbn1cbiIsImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcjL2NvbW1vbi9zdG9yYWdlJztcblxuLyoqIEB0eXBlIHsgZnVuY3Rpb24odXJsLCBvcHRpb25zLCBjaGVjayk6IFByb21pc2U8dm9pZD4gfSBvciB0aHJvd3Mgb24gZXJyb3IgKi9cbnN0b3JhZ2UuY2FjaGUuZmV0Y2ggPSBjYWNoZU9yRmV0Y2goe1xuICBpbml0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4geyAuLi5vcHRpb25zLCByZXNwb25zZVR5cGU6ICdibG9iJyB9O1xuICB9LFxuICBhc3luYyB0cmFuc2Zvcm0ocmVzcG9uc2UsIHVybCwgb3B0aW9ucywgY2hlY2spIHtcbiAgICBjb25zdCBbdHlwZSwgYm9keV0gPSBhd2FpdCBzdG9yYWdlLmNhY2hlLm1ha2VSYXcocmVzcG9uc2UsIHRydWUpO1xuICAgIGF3YWl0IGNoZWNrPy4odXJsLCByZXNwb25zZS5kYXRhLCB0eXBlKTtcbiAgICByZXR1cm4gYCR7dHlwZX0sJHtib2R5fWA7XG4gIH0sXG59KTtcblxuLyoqIEB0eXBlIHsgZnVuY3Rpb24odXJsLCBvcHRpb25zKTogUHJvbWlzZTx2b2lkPiB9IG9yIHRocm93cyBvbiBlcnJvciAqL1xuc3RvcmFnZS5yZXF1aXJlLmZldGNoID0gY2FjaGVPckZldGNoKHtcbiAgdHJhbnNmb3JtOiAoeyBkYXRhIH0sIHVybCkgPT4gKFxuICAgIC9eXFxzKjwvLnRlc3QoZGF0YSlcbiAgICAgID8gUHJvbWlzZS5yZWplY3QoYE5PVF9KUzogJHt1cmx9IFwiJHtkYXRhLnNsaWNlKDAsIDEwMCkudHJpbSgpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKX1cImApXG4gICAgICA6IGRhdGFcbiAgKSxcbn0pO1xuXG5mdW5jdGlvbiBjYWNoZU9yRmV0Y2goaGFuZGxlcnMgPSB7fSkge1xuICBjb25zdCByZXF1ZXN0cyA9IHt9O1xuICBjb25zdCB7IGluaXQsIHRyYW5zZm9ybSB9ID0gaGFuZGxlcnM7XG4gIC8qKiBAdGhpcyBWTVN0b3JhZ2VCYXNlICovXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZU9yRmV0Y2hIYW5kbGVyKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBbdXJsXSA9IGFyZ3M7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlcXVlc3RzW3VybF0gfHwgKHJlcXVlc3RzW3VybF0gPSB0aGlzOjpkb0ZldGNoKC4uLmFyZ3MpKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcbiAgLyoqIEB0aGlzIFZNU3RvcmFnZUJhc2UgKi9cbiAgYXN5bmMgZnVuY3Rpb24gZG9GZXRjaCguLi5hcmdzKSB7XG4gICAgY29uc3QgW3VybCwgb3B0aW9uc10gPSBhcmdzO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KHVybCwgaW5pdD8uKG9wdGlvbnMpIHx8IG9wdGlvbnMpO1xuICAgICAgaWYgKGF3YWl0IGlzTW9kaWZpZWQocmVzLCB1cmwpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRyYW5zZm9ybSA/IGF3YWl0IHRyYW5zZm9ybShyZXMsIC4uLmFyZ3MpIDogcmVzLmRhdGE7XG4gICAgICAgIGF3YWl0IHRoaXMuc2V0KHVybCwgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5lcnJvcihgRXJyb3IgZmV0Y2hpbmc6ICR7dXJsfWAsIGVycik7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0c1t1cmxdO1xuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBpc01vZGlmaWVkKHsgaGVhZGVycyB9LCB1cmwpIHtcbiAgY29uc3QgbW9kID0gaGVhZGVycy5nZXQoJ2V0YWcnKVxuICB8fCArbmV3IERhdGUoaGVhZGVycy5nZXQoJ2xhc3QtbW9kaWZpZWQnKSlcbiAgfHwgK25ldyBEYXRlKGhlYWRlcnMuZ2V0KCdkYXRlJykpO1xuICBpZiAoIW1vZCB8fCBtb2QgIT09IGF3YWl0IHN0b3JhZ2UubW9kLmdldE9uZSh1cmwpKSB7XG4gICAgaWYgKG1vZCkgYXdhaXQgc3RvcmFnZS5tb2Quc2V0KHVybCwgbW9kKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0QWN0aXZlVGFiLCBub29wLCBzZW5kVGFiQ21kLCBnZXRGdWxsVXJsIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHVhIGZyb20gJyMvY29tbW9uL3VhJztcbmltcG9ydCB7IGV4dGVuc2lvblJvb3QgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uIH0gZnJvbSAnLi9vcHRpb25zJztcblxuY29uc3Qgb3BlbmVycyA9IHt9O1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3BhdGhJZF0gLSBwYXRoIG9yIGlkIHRvIGFkZCB0byAjc2NyaXB0cyByb3V0ZSBpbiBkYXNoYm9hcmQsXG4gICAgIGlmIGFic2VudCBhIG5ldyBzY3JpcHQgd2lsbCBiZSBjcmVhdGVkIGZvciBhY3RpdmUgdGFiJ3MgVVJMXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHtpZDogbnVtYmVyfT59XG4gICAqL1xuICBhc3luYyBPcGVuRWRpdG9yKHBhdGhJZCkge1xuICAgIGlmICghcGF0aElkKSB7XG4gICAgICBjb25zdCB7IHRhYiwgZG9tYWluIH0gPSBhd2FpdCBjb21tYW5kcy5HZXRUYWJEb21haW4oKTtcbiAgICAgIGNvbnN0IGlkID0gZG9tYWluICYmIGNvbW1hbmRzLkNhY2hlTmV3U2NyaXB0KHtcbiAgICAgICAgdXJsOiAodGFiLnBlbmRpbmdVcmwgfHwgdGFiLnVybCkuc3BsaXQoL1sjP10vKVswXSxcbiAgICAgICAgbmFtZTogYCR7Z2V0T3B0aW9uKCdzY3JpcHRUZW1wbGF0ZUVkaXRlZCcpID8gJycgOiAnLSAnfSR7ZG9tYWlufWAsXG4gICAgICB9KTtcbiAgICAgIHBhdGhJZCA9IGBfbmV3JHtpZCA/IGAvJHtpZH1gIDogJyd9YDtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gYCR7ZXh0ZW5zaW9uUm9vdH1vcHRpb25zL2luZGV4Lmh0bWwjc2NyaXB0cy8ke3BhdGhJZH1gO1xuICAgIC8vIEZpcmVmb3ggdW50aWwgdjU2IGRvZXNuJ3Qgc3VwcG9ydCBtb3otZXh0ZW5zaW9uOi8vIHBhdHRlcm4gaW4gYnJvd3Nlci50YWJzLnF1ZXJ5KClcbiAgICBmb3IgKGNvbnN0IHZpZXcgb2YgYnJvd3Nlci5leHRlbnNpb24uZ2V0Vmlld3MoKSkge1xuICAgICAgaWYgKHZpZXcubG9jYXRpb24uaHJlZiA9PT0gdXJsKSB7XG4gICAgICAgIC8vIGRlZXAtY29weWluZyB0byBhdm9pZCBkZWFkIG9iamVjdHNcbiAgICAgICAgY29uc3QgdGFiID0gZGVlcENvcHkoYXdhaXQgdmlldy5icm93c2VyLnRhYnMuZ2V0Q3VycmVudCgpKTtcbiAgICAgICAgYnJvd3Nlci50YWJzLnVwZGF0ZSh0YWIuaWQsIHsgYWN0aXZlOiB0cnVlIH0pO1xuICAgICAgICBicm93c2VyLndpbmRvd3MudXBkYXRlKHRhYi53aW5kb3dJZCwgeyBmb2N1c2VkOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4gdGFiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tbWFuZHMuVGFiT3Blbih7IHVybCwgbWF5YmVJbldpbmRvdzogdHJ1ZSB9KTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8eyBpZDogbnVtYmVyIH0gfCBjaHJvbWUudGFicy5UYWI+fSBuZXcgdGFiIGlzIHJldHVybmVkIGZvciBpbnRlcm5hbCBjYWxscyAqL1xuICBhc3luYyBUYWJPcGVuKHtcbiAgICB1cmwsXG4gICAgYWN0aXZlID0gdHJ1ZSxcbiAgICBjb250YWluZXIsXG4gICAgaW5zZXJ0ID0gdHJ1ZSxcbiAgICBtYXliZUluV2luZG93ID0gZmFsc2UsXG4gICAgcGlubmVkLFxuICB9LCBzcmMgPSB7fSkge1xuICAgIC8vIHNyYy50YWIgbWF5IGJlIGFic2VudCB3aGVuIGludm9rZWQgZnJvbSBwb3B1cCAoZS5nLiBlZGl0L2NyZWF0ZSBidXR0b25zKVxuICAgIGNvbnN0IHNyY1RhYiA9IHNyYy50YWIgfHwgYXdhaXQgZ2V0QWN0aXZlVGFiKCkgfHwge307XG4gICAgLy8gc3JjLnVybCBtYXkgYmUgYWJzZW50IHdoZW4gaW52b2tlZCBkaXJlY3RseSBhcyBjb21tYW5kcy5UYWJPcGVuXG4gICAgY29uc3Qgc3JjVXJsID0gc3JjLnVybDtcbiAgICBjb25zdCBpc0ludGVybmFsID0gIXNyY1VybCB8fCBzcmNVcmwuc3RhcnRzV2l0aChleHRlbnNpb25Sb290KTtcbiAgICAvLyBvbmx5IGluY29nbml0byBzdG9yZUlkIG1heSBiZSBzcGVjaWZpZWQgd2hlbiBvcGVuaW5nIGluIGFuIGluY29nbml0byB3aW5kb3dcbiAgICBjb25zdCB7IGluY29nbml0bywgd2luZG93SWQgfSA9IHNyY1RhYjtcbiAgICAvLyBDaHJvbWUgY2FuJ3Qgb3BlbiBjaHJvbWUteHh4OiBVUkxzIGluIGluY29nbml0byB3aW5kb3dzXG4gICAgbGV0IHN0b3JlSWQgPSBzcmNUYWIuY29va2llU3RvcmVJZDtcbiAgICBpZiAoc3RvcmVJZCAmJiAhaW5jb2duaXRvKSB7XG4gICAgICBzdG9yZUlkID0gZ2V0Q29udGFpbmVySWQoaXNJbnRlcm5hbCA/IDAgOiBjb250YWluZXIpIHx8IHN0b3JlSWQ7XG4gICAgfVxuICAgIGlmIChzdG9yZUlkKSBzdG9yZUlkID0geyBjb29raWVTdG9yZUlkOiBzdG9yZUlkIH07XG4gICAgLy8gVVJMIG5lZWRzIHRvIGJlIGV4cGFuZGVkIGZvciBgY2FuT3BlbkluY29nbml0b2AgYmVsb3dcbiAgICBpZiAoIS9eWy1cXHddKzovLnRlc3QodXJsKSkge1xuICAgICAgdXJsID0gaXNJbnRlcm5hbFxuICAgICAgICA/IGJyb3dzZXIucnVudGltZS5nZXRVUkwodXJsKVxuICAgICAgICA6IGdldEZ1bGxVcmwodXJsLCBzcmNVcmwpO1xuICAgIH1cbiAgICBjb25zdCBjYW5PcGVuSW5jb2duaXRvID0gIWluY29nbml0byB8fCBJU19GSVJFRk9YIHx8ICEvXihjaHJvbWVbLVxcd10qKTovLnRlc3QodXJsKTtcbiAgICBsZXQgbmV3VGFiO1xuICAgIGlmIChtYXliZUluV2luZG93XG4gICAgICAgICYmIGJyb3dzZXIud2luZG93c1xuICAgICAgICAmJiBnZXRPcHRpb24oJ2VkaXRvcldpbmRvdycpXG4gICAgICAgIC8qIGNvb2tpZVN0b3JlSWQgaW4gd2luZG93cy5jcmVhdGUoKSBpcyBzdXBwb3J0ZWQgc2luY2UgRkY2NCBodHRwczovL2J1Z3ppbC5sYS8xMzkzNTcwXG4gICAgICAgICAqIGFuZCBhIHdvcmthcm91bmQgaXMgdG9vIGNvbnZvbHV0ZWQgdG8gYWRkIGl0IGZvciBzdWNoIGFuIGFuY2llbnQgdmVyc2lvbiAqL1xuICAgICAgICAmJiAoIXN0b3JlSWQgfHwgdWEuZmlyZWZveCA+PSA2NCkpIHtcbiAgICAgIGNvbnN0IHduZE9wdHMgPSB7XG4gICAgICAgIHVybCxcbiAgICAgICAgaW5jb2duaXRvOiBjYW5PcGVuSW5jb2duaXRvICYmIGluY29nbml0byxcbiAgICAgICAgLi4uZ2V0T3B0aW9uKCdlZGl0b3JXaW5kb3dTaW1wbGUnKSAmJiB7IHR5cGU6ICdwb3B1cCcgfSxcbiAgICAgICAgLi4uIUlTX0ZJUkVGT1ggJiYgeyBmb2N1c2VkOiAhIWFjdGl2ZSB9LCAvLyBGRiBkb2Vzbid0IHN1cHBvcnQgdGhpc1xuICAgICAgICAuLi5zdG9yZUlkLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHBvcyA9IGdldE9wdGlvbignZWRpdG9yV2luZG93UG9zJyk7XG4gICAgICBjb25zdCBoYXNQb3MgPSBwb3MgJiYgJ3RvcCcgaW4gcG9zO1xuICAgICAgY29uc3Qgd25kID0gYXdhaXQgYnJvd3Nlci53aW5kb3dzLmNyZWF0ZSh7IC4uLnduZE9wdHMsIC4uLnBvcyB9KS5jYXRjaChoYXNQb3MgJiYgbm9vcClcbiAgICAgICAgfHwgaGFzUG9zICYmIGF3YWl0IGJyb3dzZXIud2luZG93cy5jcmVhdGUod25kT3B0cyk7XG4gICAgICBuZXdUYWIgPSB3bmQudGFic1swXTtcbiAgICB9XG4gICAgaWYgKCFuZXdUYWIpIHtcbiAgICAgIG5ld1RhYiA9IGF3YWl0IGJyb3dzZXIudGFicy5jcmVhdGUoe1xuICAgICAgICB1cmwsXG4gICAgICAgIC8vIG5vcm1hbGl6aW5nIGFzIGJvb2xlYW4gYmVjYXVzZSB0aGUgQVBJIHJlcXVpcmVzIHN0cmljdCB0eXBlc1xuICAgICAgICBhY3RpdmU6ICEhYWN0aXZlLFxuICAgICAgICBwaW5uZWQ6ICEhcGlubmVkLFxuICAgICAgICAuLi5zdG9yZUlkLFxuICAgICAgICAuLi5jYW5PcGVuSW5jb2duaXRvICYmIHtcbiAgICAgICAgICB3aW5kb3dJZCxcbiAgICAgICAgICAuLi5pbnNlcnQgJiYgeyBpbmRleDogc3JjVGFiLmluZGV4ICsgMSB9LFxuICAgICAgICAgIC4uLnVhLm9wZW5lclRhYklkU3VwcG9ydGVkICYmIHsgb3BlbmVyVGFiSWQ6IHNyY1RhYi5pZCB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHsgaWQgfSA9IG5ld1RhYjtcbiAgICBpZiAoYWN0aXZlICYmIG5ld1RhYi53aW5kb3dJZCAhPT0gd2luZG93SWQpIHtcbiAgICAgIGF3YWl0IGJyb3dzZXIud2luZG93cy51cGRhdGUobmV3VGFiLndpbmRvd0lkLCB7IGZvY3VzZWQ6IHRydWUgfSk7XG4gICAgfVxuICAgIG9wZW5lcnNbaWRdID0gc3JjVGFiLmlkO1xuICAgIHJldHVybiBpc0ludGVybmFsID8gbmV3VGFiIDogeyBpZCB9O1xuICB9LFxuICAvKiogQHJldHVybiB7dm9pZH0gKi9cbiAgVGFiQ2xvc2UoeyBpZCB9ID0ge30sIHNyYykge1xuICAgIGNvbnN0IHRhYklkID0gaWQgfHwgc3JjPy50YWI/LmlkO1xuICAgIGlmICh0YWJJZCA+PSAwKSBicm93c2VyLnRhYnMucmVtb3ZlKHRhYklkKTtcbiAgfSxcbiAgVGFiRm9jdXMoXywgc3JjKSB7XG4gICAgYnJvd3Nlci50YWJzLnVwZGF0ZShzcmMudGFiLmlkLCB7IGFjdGl2ZTogdHJ1ZSB9KS5jYXRjaChub29wKTtcbiAgICBicm93c2VyLndpbmRvd3MudXBkYXRlKHNyYy50YWIud2luZG93SWQsIHsgZm9jdXNlZDogdHJ1ZSB9KS5jYXRjaChub29wKTtcbiAgfSxcbn0pO1xuXG4vLyBGaXJlZm94IEFuZHJvaWQgZG9lcyBub3Qgc3VwcG9ydCBgb3BlbmVyVGFiSWRgIGZpZWxkLCBpdCBmYWlscyBpZiB0aGlzIGZpZWxkIGlzIHBhc3NlZFxuLy8gWFhYIG9wZW5lclRhYklkIHNlZW1zIGJ1Z2d5IG9uIENocm9tZSwgaHR0cHM6Ly9jcmJ1Zy5jb20vOTY3MTUwXG4vLyBJdCBzZWVtcyB0byBkbyBub3RoaW5nIGV2ZW4gc2V0IHN1Y2Nlc3NmdWxseSB3aXRoIGBicm93c2VyLnRhYnMudXBkYXRlYC5cbnVhLnJlYWR5LnRoZW4oKCkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh1YSwge1xuICAgIG9wZW5lclRhYklkU3VwcG9ydGVkOiB7XG4gICAgICB2YWx1ZTogIUlTX0ZJUkVGT1ggfHwgdWEuZmlyZWZveCA+PSA1NyAmJiB1YS5vcyAhPT0gJ2FuZHJvaWQnLFxuICAgIH0sXG4gIH0pO1xufSk7XG5cbmJyb3dzZXIudGFicy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoKGlkKSA9PiB7XG4gIGNvbnN0IG9wZW5lcklkID0gb3BlbmVyc1tpZF07XG4gIGlmIChvcGVuZXJJZCA+PSAwKSB7XG4gICAgc2VuZFRhYkNtZChvcGVuZXJJZCwgJ1RhYkNsb3NlZCcsIGlkKTtcbiAgICBkZWxldGUgb3BlbmVyc1tpZF07XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRDb250YWluZXJJZChpbmRleCkge1xuICByZXR1cm4gaW5kZXggPT09IDAgJiYgJ2ZpcmVmb3gtZGVmYXVsdCdcbiAgICAgICAgIHx8IGluZGV4ID4gMCAmJiBgZmlyZWZveC1jb250YWluZXItJHtpbmRleH1gO1xufVxuIiwiaW1wb3J0IHsgcG9zdEluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbiwgZ2V0T3B0aW9uLCBzZXRPcHRpb24gfSBmcm9tICcuL29wdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgU0NSSVBUX1RFTVBMQVRFID0gJ3NjcmlwdFRlbXBsYXRlJztcbmNvbnN0IFNDUklQVF9URU1QTEFURV9FRElURUQgPSBgJHtTQ1JJUFRfVEVNUExBVEV9RWRpdGVkYDtcbmNvbnN0IElOSVRJQUxfVEVNUExBVEUgPSBgXFxcbi8vID09VXNlclNjcmlwdD09XG4vLyBAbmFtZSBOZXcgU2NyaXB0XG4vLyBAbmFtZXNwYWNlIFZpb2xlbnRtb25rZXkgU2NyaXB0c1xuLy8gQG1hdGNoIHt7dXJsfX1cbi8vIEBncmFudCBub25lXG4vLyA9PS9Vc2VyU2NyaXB0PT1cbmA7XG5cbnBvc3RJbml0aWFsaXplLnB1c2goKCkgPT4ge1xuICBsZXQgZWRpdGVkID0gZ2V0T3B0aW9uKFNDUklQVF9URU1QTEFURV9FRElURUQpO1xuICAvLyBQcmVzZXJ2ZSBhbiBlZGl0ZWQgdGVtcGxhdGVcbiAgaWYgKGVkaXRlZCkgcmV0dXJuO1xuICBjb25zdCB0ZW1wbGF0ZSA9IGdldE9wdGlvbihTQ1JJUFRfVEVNUExBVEUpO1xuICAvLyBXaGVuIHVwZGF0aW5nIGZyb20gYW4gb2xkIHZlcnNpb24sIHNldCB0aGUgZWRpdGVkIGZsYWcgcmV0cm9hY3RpdmVseVxuICBpZiAoZWRpdGVkID09IG51bGwpIHtcbiAgICBlZGl0ZWQgPSB0ZW1wbGF0ZSAhPT0gSU5JVElBTF9URU1QTEFURTtcbiAgICBpZiAoZWRpdGVkKSBzZXRPcHRpb24oU0NSSVBUX1RFTVBMQVRFX0VESVRFRCwgdHJ1ZSk7XG4gICAgZWxzZSByZXNldFNjcmlwdFRlbXBsYXRlKCk7XG4gIC8vIFdoZW4gdXBkYXRpbmcgVk0sIHVwZGF0ZSB0byB0aGUgbmV3IGRlZmF1bHQgdGVtcGxhdGVcbiAgfSBlbHNlIGlmICh0ZW1wbGF0ZSAhPT0gZ2V0RGVmYXVsdE9wdGlvbihTQ1JJUFRfVEVNUExBVEUpKSB7XG4gICAgcmVzZXRTY3JpcHRUZW1wbGF0ZSgpO1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0U2NyaXB0VGVtcGxhdGUoY2hhbmdlcyA9IHt9KSB7XG4gIGNvbnN0IGRlZmF1bHRUZW1wbGF0ZSA9IGdldERlZmF1bHRPcHRpb24oU0NSSVBUX1RFTVBMQVRFKTtcbiAgbGV0IHRlbXBsYXRlID0gY2hhbmdlc1tTQ1JJUFRfVEVNUExBVEVdO1xuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgdGVtcGxhdGUgPSBkZWZhdWx0VGVtcGxhdGU7XG4gICAgY2hhbmdlc1tTQ1JJUFRfVEVNUExBVEVdID0gdGVtcGxhdGU7XG4gICAgc2V0T3B0aW9uKFNDUklQVF9URU1QTEFURSwgdGVtcGxhdGUpO1xuICB9XG4gIGNvbnN0IGVkaXRlZCA9IHRlbXBsYXRlICE9PSBkZWZhdWx0VGVtcGxhdGU7XG4gIGlmIChlZGl0ZWQgIT09IGNoYW5nZXNbU0NSSVBUX1RFTVBMQVRFX0VESVRFRF0pIHtcbiAgICBjaGFuZ2VzW1NDUklQVF9URU1QTEFURV9FRElURURdID0gZWRpdGVkO1xuICAgIHNldE9wdGlvbihTQ1JJUFRfVEVNUExBVEVfRURJVEVELCBlZGl0ZWQpO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyB0bGQgZnJvbSAnIy9jb21tb24vdGxkJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcbmltcG9ydCB7IHBvc3RJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IGdldE9wdGlvbiwgaG9va09wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIFRlc3RCbGFja2xpc3Q6IHRlc3RCbGFja2xpc3QsXG59KTtcblxucG9zdEluaXRpYWxpemUucHVzaChyZXNldEJsYWNrbGlzdCk7XG5cbnRsZC5pbml0VExEKHRydWUpO1xuXG5jb25zdCBSRV9NQVRDSF9QQVJUUyA9IC8oLio/KTpcXC9cXC8oW14vXSopXFwvKC4qKS87XG5sZXQgYmxhY2tsaXN0UnVsZXMgPSBbXTtcbmhvb2tPcHRpb25zKChjaGFuZ2VzKSA9PiB7XG4gIGlmICgnYmxhY2tsaXN0JyBpbiBjaGFuZ2VzKSByZXNldEJsYWNrbGlzdChjaGFuZ2VzLmJsYWNrbGlzdCB8fCAnJyk7XG59KTtcbmNvbnN0IFJFX0hUVFBfT1JfSFRUUFMgPSAvXmh0dHBzPyQvaTtcblxuLypcbiBTaW1wbGUgRklGTyBxdWV1ZSBmb3IgdGhlIHJlc3VsdHMgb2YgdGVzdEJsYWNrbGlzdCwgY2FjaGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgbWFpbiB8Y2FjaGV8XG4gYmVjYXVzZSB0aGUgYmxhY2tsaXN0IGlzIHVwZGF0ZWQgb25seSBvbmNlIGluIGEgd2hpbGUgc28gaXRzIGVudHJpZXMgd291bGQgYmUgY3Jvd2RpbmdcbiB0aGUgbWFpbiBjYWNoZSBhbmQgcmVkdWNpbmcgaXRzIHBlcmZvcm1hbmNlIChvYmplY3RzIHdpdGggbG90cyBvZiBrZXlzIGFyZSBzbG93IHRvIGFjY2VzcykuXG5cbiBXZSBhbHNvIGRvbid0IG5lZWQgdG8gYXV0by1leHBpcmUgdGhlIGVudHJpZXMgYWZ0ZXIgYSB0aW1lb3V0LlxuIFRoZSBvbmx5IGxpbWl0IHdlJ3JlIGNvbmNlcm5lZCB3aXRoIGlzIHRoZSBvdmVyYWxsIG1lbW9yeSB1c2VkLlxuIFRoZSBsaW1pdCBpcyBzcGVjaWZpZWQgaW4gdGhlIGFtb3VudCBvZiB1bmljb2RlIGNoYXJhY3RlcnMgKHN0cmluZyBsZW5ndGgpIGZvciBzaW1wbGljaXR5LlxuIERpc3JlZ2FyZGluZyBkZWR1cGxpY2F0aW9uIGR1ZSB0byBpbnRlcm5pbmcsIHRoZSBhY3R1YWwgbWVtb3J5IHVzZWQgaXMgYXBwcm94aW1hdGVseSB0d2ljZSBhcyBiaWc6XG4gMiAqIGtleUxlbmd0aCArIG9iamVjdFN0cnVjdHVyZU92ZXJoZWFkICogb2JqZWN0Q291bnRcbiovXG5jb25zdCBNQVhfQkxfQ0FDSEVfTEVOR1RIID0gMTAwZTM7XG5sZXQgYmxDYWNoZSA9IHt9O1xubGV0IGJsQ2FjaGVTaXplID0gMDtcblxuZnVuY3Rpb24gdGVzdFJ1bGVzKHVybCwgcnVsZXMsIHByZWZpeCwgcnVsZUJ1aWxkZXIpIHtcbiAgcmV0dXJuIHJ1bGVzLnNvbWUocnVsZSA9PiB7XG4gICAgY29uc3Qga2V5ID0gYCR7cHJlZml4fToke3J1bGV9YDtcbiAgICBjb25zdCBtYXRjaGVyID0gY2FjaGUuZ2V0KGtleSkgfHwgY2FjaGUucHV0KGtleSwgcnVsZUJ1aWxkZXIocnVsZSkpO1xuICAgIHJldHVybiBtYXRjaGVyLnRlc3QodXJsKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGVzdCBnbG9iIHJ1bGVzIGxpa2UgYEBpbmNsdWRlYCBhbmQgYEBleGNsdWRlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlc3RHbG9iKHVybCwgcnVsZXMpIHtcbiAgcmV0dXJuIHRlc3RSdWxlcyh1cmwsIHJ1bGVzLCAncmUnLCBhdXRvUmVnKTtcbn1cblxuLyoqXG4gKiBUZXN0IG1hdGNoIHJ1bGVzIGxpa2UgYEBtYXRjaGAgYW5kIGBAZXhjbHVkZV9tYXRjaGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0TWF0Y2godXJsLCBydWxlcykge1xuICByZXR1cm4gdGVzdFJ1bGVzKHVybCwgcnVsZXMsICdtYXRjaCcsIG1hdGNoVGVzdGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RTY3JpcHQodXJsLCBzY3JpcHQpIHtcbiAgY2FjaGUuYmF0Y2godHJ1ZSk7XG4gIGNvbnN0IHsgY3VzdG9tLCBtZXRhIH0gPSBzY3JpcHQ7XG4gIGNvbnN0IG1hdCA9IG1lcmdlTGlzdHMoY3VzdG9tLm9yaWdNYXRjaCAmJiBtZXRhLm1hdGNoLCBjdXN0b20ubWF0Y2gpO1xuICBjb25zdCBpbmMgPSBtZXJnZUxpc3RzKGN1c3RvbS5vcmlnSW5jbHVkZSAmJiBtZXRhLmluY2x1ZGUsIGN1c3RvbS5pbmNsdWRlKTtcbiAgY29uc3QgZXhjID0gbWVyZ2VMaXN0cyhjdXN0b20ub3JpZ0V4Y2x1ZGUgJiYgbWV0YS5leGNsdWRlLCBjdXN0b20uZXhjbHVkZSk7XG4gIGNvbnN0IGV4Y01hdCA9IG1lcmdlTGlzdHMoY3VzdG9tLm9yaWdFeGNsdWRlTWF0Y2ggJiYgbWV0YS5leGNsdWRlTWF0Y2gsIGN1c3RvbS5leGNsdWRlTWF0Y2gpO1xuICAvLyBtYXRjaCBhbGwgaWYgbm8gQG1hdGNoIG9yIEBpbmNsdWRlIHJ1bGVcbiAgbGV0IG9rID0gIW1hdC5sZW5ndGggJiYgIWluYy5sZW5ndGg7XG4gIC8vIEBtYXRjaFxuICBvayA9IG9rIHx8IHRlc3RNYXRjaCh1cmwsIG1hdCk7XG4gIC8vIEBpbmNsdWRlXG4gIG9rID0gb2sgfHwgdGVzdEdsb2IodXJsLCBpbmMpO1xuICAvLyBAZXhjbHVkZS1tYXRjaFxuICBvayA9IG9rICYmICF0ZXN0TWF0Y2godXJsLCBleGNNYXQpO1xuICAvLyBAZXhjbHVkZVxuICBvayA9IG9rICYmICF0ZXN0R2xvYih1cmwsIGV4Yyk7XG4gIGNhY2hlLmJhdGNoKGZhbHNlKTtcbiAgcmV0dXJuIG9rO1xufVxuXG5mdW5jdGlvbiBtZXJnZUxpc3RzKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGFyZ3MucmVkdWNlKChyZXMsIGl0ZW0pID0+IChpdGVtID8gcmVzLmNvbmNhdChpdGVtKSA6IHJlcyksIFtdKTtcbn1cblxuZnVuY3Rpb24gc3RyMlJFKHN0cikge1xuICBjb25zdCByZSA9IHN0ci5yZXBsYWNlKC8oWy4/K1tcXF17fSgpfF4kXSkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gIHJldHVybiByZTtcbn1cblxuZnVuY3Rpb24gYmluZFJFKHJlKSB7XG4gIHJldHVybiByZS50ZXN0LmJpbmQocmUpO1xufVxuXG5mdW5jdGlvbiBhdXRvUmVnKHN0cikge1xuICAvLyByZWdleHAgbW9kZTogY2FzZS1pbnNlbnNpdGl2ZSBwZXIgR00gZG9jdW1lbnRhdGlvblxuICBpZiAoc3RyLmxlbmd0aCA+IDEgJiYgc3RyWzBdID09PSAnLycgJiYgc3RyW3N0ci5sZW5ndGggLSAxXSA9PT0gJy8nKSB7XG4gICAgbGV0IHJlO1xuICAgIHRyeSB7IHJlID0gbmV3IFJlZ0V4cChzdHIuc2xpY2UoMSwgLTEpLCAnaScpOyB9IGNhdGNoIChlKSB7IC8qIGlnbm9yZSAqLyB9XG4gICAgcmV0dXJuIHsgdGVzdDogcmUgPyBiaW5kUkUocmUpIDogKCkgPT4gZmFsc2UgfTtcbiAgfVxuICAvLyBnbG9iIG1vZGU6IGNhc2UtaW5zZW5zaXRpdmUgdG8gbWF0Y2ggR000ICYgVGFtcGVybW9ua2V5IGJ1Z2dlZCBiZWhhdmlvclxuICBjb25zdCByZVN0ciA9IHN0cjJSRShzdHIudG9Mb3dlckNhc2UoKSk7XG4gIGlmICh0bGQuaXNSZWFkeSgpICYmIHN0ci5pbmNsdWRlcygnLnRsZC8nKSkge1xuICAgIGNvbnN0IHJlVGxkU3RyID0gcmVTdHIucmVwbGFjZSgnXFxcXC50bGQvJywgJygoPzpcXFxcLlstXFxcXHddKykrKS8nKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGVzdDogKHRzdHIpID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRzdHIudG9Mb3dlckNhc2UoKS5tYXRjaChyZVRsZFN0cik7XG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3Qgc3VmZml4ID0gbWF0Y2hlc1sxXS5zbGljZSgxKTtcbiAgICAgICAgICBpZiAodGxkLmdldFB1YmxpY1N1ZmZpeChzdWZmaXgpID09PSBzdWZmaXgpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoYF4ke3JlU3RyfSRgLCAnaScpOyAvLyBTdHJpbmcgd2l0aCB3aWxkY2FyZHNcbiAgcmV0dXJuIHsgdGVzdDogYmluZFJFKHJlKSB9O1xufVxuXG5mdW5jdGlvbiBtYXRjaFNjaGVtZShydWxlLCBkYXRhKSB7XG4gIC8vIGV4YWN0IG1hdGNoXG4gIGlmIChydWxlID09PSBkYXRhKSByZXR1cm4gMTtcbiAgLy8gKiA9IGh0dHAgfCBodHRwc1xuICAvLyBzdXBwb3J0IGh0dHAqXG4gIGlmIChbXG4gICAgJyonLFxuICAgICdodHRwKicsXG4gIF0uaW5jbHVkZXMocnVsZSkgJiYgUkVfSFRUUF9PUl9IVFRQUy50ZXN0KGRhdGEpKSByZXR1cm4gMTtcbiAgcmV0dXJuIDA7XG59XG5cbmNvbnN0IFJFX1NUUl9BTlkgPSAnKD86fC4qP1xcXFwuKSc7XG5jb25zdCBSRV9TVFJfVExEID0gJygoPzpcXFxcLlstXFxcXHddKykrKSc7XG5mdW5jdGlvbiBob3N0TWF0Y2hlcihydWxlKSB7XG4gIC8vICogbWF0Y2hlcyBhbGxcbiAgaWYgKHJ1bGUgPT09ICcqJykge1xuICAgIHJldHVybiAoKSA9PiAxO1xuICB9XG4gIC8vICouZXhhbXBsZS5jb21cbiAgLy8gd3d3Lmdvb2dsZS4qXG4gIC8vIHd3dy5nb29nbGUudGxkXG4gIGNvbnN0IHJ1bGVMQyA9IHJ1bGUudG9Mb3dlckNhc2UoKTsgLy8gaG9zdCBtYXRjaGluZyBpcyBjYXNlLWluc2Vuc2l0aXZlXG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IGJhc2UgPSBydWxlTEM7XG4gIGxldCBzdWZmaXggPSAnJztcbiAgaWYgKHJ1bGUuc3RhcnRzV2l0aCgnKi4nKSkge1xuICAgIGJhc2UgPSBiYXNlLnNsaWNlKDIpO1xuICAgIHByZWZpeCA9IFJFX1NUUl9BTlk7XG4gIH1cbiAgaWYgKHRsZC5pc1JlYWR5KCkgJiYgcnVsZS5lbmRzV2l0aCgnLnRsZCcpKSB7XG4gICAgYmFzZSA9IGJhc2Uuc2xpY2UoMCwgLTQpO1xuICAgIHN1ZmZpeCA9IFJFX1NUUl9UTEQ7XG4gIH1cbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGBeJHtwcmVmaXh9JHtzdHIyUkUoYmFzZSl9JHtzdWZmaXh9JGApO1xuICByZXR1cm4gKGRhdGEpID0+IHtcbiAgICAvLyBleGFjdCBtYXRjaCwgY2FzZS1pbnNlbnNpdGl2ZVxuICAgIGRhdGEgPSBkYXRhLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHJ1bGVMQyA9PT0gZGF0YSkgcmV0dXJuIDE7XG4gICAgLy8gZnVsbCBjaGVja1xuICAgIGNvbnN0IG1hdGNoZXMgPSBkYXRhLm1hdGNoKHJlKTtcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgWywgdGxkU3RyXSA9IG1hdGNoZXM7XG4gICAgICBpZiAoIXRsZFN0cikgcmV0dXJuIDE7XG4gICAgICBjb25zdCB0bGRTdWZmaXggPSB0bGRTdHIuc2xpY2UoMSk7XG4gICAgICByZXR1cm4gdGxkLmdldFB1YmxpY1N1ZmZpeCh0bGRTdWZmaXgpID09PSB0bGRTdWZmaXg7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwYXRoTWF0Y2hlcihydWxlKSB7XG4gIGNvbnN0IGlIYXNoID0gcnVsZS5pbmRleE9mKCcjJyk7XG4gIGxldCBpUXVlcnkgPSBydWxlLmluZGV4T2YoJz8nKTtcbiAgbGV0IHN0clJlID0gc3RyMlJFKHJ1bGUpO1xuICBpZiAoaVF1ZXJ5ID4gaUhhc2gpIGlRdWVyeSA9IC0xO1xuICBpZiAoaUhhc2ggPCAwKSB7XG4gICAgaWYgKGlRdWVyeSA8IDApIHN0clJlID0gYF4ke3N0clJlfSg/Ols/I118JClgO1xuICAgIGVsc2Ugc3RyUmUgPSBgXiR7c3RyUmV9KD86I3wkKWA7XG4gIH1cbiAgcmV0dXJuIGJpbmRSRShuZXcgUmVnRXhwKHN0clJlKSk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoVGVzdGVyKHJ1bGUpIHtcbiAgbGV0IHRlc3Q7XG4gIGlmIChydWxlID09PSAnPGFsbF91cmxzPicpIHtcbiAgICB0ZXN0ID0gKCkgPT4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBydWxlUGFydHMgPSBydWxlLm1hdGNoKFJFX01BVENIX1BBUlRTKTtcbiAgICBpZiAocnVsZVBhcnRzKSB7XG4gICAgICBjb25zdCBtYXRjaEhvc3QgPSBob3N0TWF0Y2hlcihydWxlUGFydHNbMl0pO1xuICAgICAgY29uc3QgbWF0Y2hQYXRoID0gcGF0aE1hdGNoZXIocnVsZVBhcnRzWzNdKTtcbiAgICAgIHRlc3QgPSAodXJsKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdXJsLm1hdGNoKFJFX01BVENIX1BBUlRTKTtcbiAgICAgICAgcmV0dXJuICEhcnVsZVBhcnRzICYmICEhcGFydHNcbiAgICAgICAgICAmJiBtYXRjaFNjaGVtZShydWxlUGFydHNbMV0sIHBhcnRzWzFdKVxuICAgICAgICAgICYmIG1hdGNoSG9zdChwYXJ0c1syXSlcbiAgICAgICAgICAmJiBtYXRjaFBhdGgocGFydHNbM10pO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWdub3JlIGludmFsaWQgbWF0Y2ggcnVsZXNcbiAgICAgIHRlc3QgPSAoKSA9PiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgdGVzdCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdEJsYWNrbGlzdCh1cmwpIHtcbiAgbGV0IHJlcyA9IGJsQ2FjaGVbdXJsXTtcbiAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgcnVsZSA9IGJsYWNrbGlzdFJ1bGVzLmZpbmQoKHsgdGVzdCB9KSA9PiB0ZXN0KHVybCkpO1xuICAgIHJlcyA9IHJ1bGU/LnJlamVjdCAmJiBydWxlLnRleHQ7XG4gICAgdXBkYXRlQmxhY2tsaXN0Q2FjaGUodXJsLCByZXMgfHwgZmFsc2UpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEJsYWNrbGlzdChsaXN0KSB7XG4gIGNhY2hlLmJhdGNoKHRydWUpO1xuICBjb25zdCBydWxlcyA9IGxpc3QgPT0gbnVsbCA/IGdldE9wdGlvbignYmxhY2tsaXN0JykgOiBsaXN0O1xuICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICBjb25zb2xlLmluZm8oJ1Jlc2V0IGJsYWNrbGlzdDonLCBydWxlcyk7XG4gIH1cbiAgLy8gWFhYIGNvbXBhdGlibGUgd2l0aCB7QXJyYXl9IGxpc3QgaW4gdjIuNi4xLVxuICBibGFja2xpc3RSdWxlcyA9IChBcnJheS5pc0FycmF5KHJ1bGVzKSA/IHJ1bGVzIDogKHJ1bGVzIHx8ICcnKS5zcGxpdCgnXFxuJykpXG4gIC5tYXAoKHRleHQpID0+IHtcbiAgICB0ZXh0ID0gdGV4dC50cmltKCk7XG4gICAgaWYgKCF0ZXh0IHx8IHRleHQuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtb2RlID0gdGV4dC5zdGFydHNXaXRoKCdAJykgJiYgdGV4dC5zcGxpdCgvXFxzLywgMSlbMF07XG4gICAgY29uc3QgcnVsZSA9IG1vZGUgPyB0ZXh0LnNsaWNlKG1vZGUubGVuZ3RoICsgMSkudHJpbSgpIDogdGV4dDtcbiAgICBjb25zdCByZWplY3QgPSBtb2RlICE9PSAnQGluY2x1ZGUnICYmIG1vZGUgIT09ICdAbWF0Y2gnOyAvLyBAaW5jbHVkZSBhbmQgQG1hdGNoID0gd2hpdGVsaXN0XG4gICAgY29uc3QgeyB0ZXN0IH0gPSBtb2RlID09PSAnQGluY2x1ZGUnIHx8IG1vZGUgPT09ICdAZXhjbHVkZScgJiYgYXV0b1JlZyhydWxlKVxuICAgICAgfHwgIW1vZGUgJiYgIXJ1bGUuaW5jbHVkZXMoJy8nKSAmJiBtYXRjaFRlc3RlcihgKjovLyR7cnVsZX0vKmApIC8vIGRvbWFpblxuICAgICAgfHwgbWF0Y2hUZXN0ZXIocnVsZSk7IC8vIEBtYXRjaCBhbmQgQGV4Y2x1ZGUtbWF0Y2hcbiAgICByZXR1cm4geyByZWplY3QsIHRlc3QsIHRleHQgfTtcbiAgfSlcbiAgLmZpbHRlcihCb29sZWFuKTtcbiAgYmxDYWNoZSA9IHt9O1xuICBibENhY2hlU2l6ZSA9IDA7XG4gIGNhY2hlLmJhdGNoKGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQmxhY2tsaXN0Q2FjaGUoa2V5LCB2YWx1ZSkge1xuICBibENhY2hlW2tleV0gPSB2YWx1ZTtcbiAgYmxDYWNoZVNpemUgKz0ga2V5Lmxlbmd0aDtcbiAgaWYgKGJsQ2FjaGVTaXplID4gTUFYX0JMX0NBQ0hFX0xFTkdUSCkge1xuICAgIE9iamVjdC5rZXlzKGJsQ2FjaGUpXG4gICAgLnNvbWUoKGspID0+IHtcbiAgICAgIGJsQ2FjaGVTaXplIC09IGsubGVuZ3RoO1xuICAgICAgZGVsZXRlIGJsQ2FjaGVba107XG4gICAgICAvLyByZWR1Y2UgdGhlIGNhY2hlIHRvIDc1JSBzbyB0aGF0IHRoaXMgZnVuY3Rpb24gZG9lc24ndCBydW4gdG9vIG9mdGVuLlxuICAgICAgcmV0dXJuIGJsQ2FjaGVTaXplIDwgTUFYX0JMX0NBQ0hFX0xFTkdUSCAqIDMgLyA0O1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRTY3JpcHROYW1lLCBpMThuLCByZXF1ZXN0LCBjb21wYXJlVmVyc2lvbiwgc2VuZENtZCwgdHJ1ZUpvaW4gfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBDTURfU0NSSVBUX1VQREFURSwgSVNfREVWIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcbmltcG9ydCB7IGZldGNoUmVzb3VyY2VzLCBnZXRTY3JpcHRCeUlkLCBnZXRTY3JpcHRzLCBwYXJzZVNjcmlwdCB9IGZyb20gJy4vZGInO1xuaW1wb3J0IHsgcGFyc2VNZXRhIH0gZnJvbSAnLi9zY3JpcHQnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uLCBzZXRPcHRpb24gfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHRydWU/Pn0gKi9cbiAgYXN5bmMgQ2hlY2tVcGRhdGUoaWQpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBnZXRTY3JpcHRCeUlkKGlkKTtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2hlY2tBbGxBbmROb3RpZnkoW3NjcmlwdF0pO1xuICAgIHJldHVybiByZXN1bHRzWzBdO1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gKi9cbiAgYXN5bmMgQ2hlY2tVcGRhdGVBbGwoKSB7XG4gICAgc2V0T3B0aW9uKCdsYXN0VXBkYXRlJywgRGF0ZS5ub3coKSk7XG4gICAgY29uc3QgdG9VcGRhdGUgPSBnZXRTY3JpcHRzKCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb25maWcuc2hvdWxkVXBkYXRlKTtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2hlY2tBbGxBbmROb3RpZnkodG9VcGRhdGUpO1xuICAgIHJldHVybiByZXN1bHRzLmluY2x1ZGVzKHRydWUpO1xuICB9LFxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrQWxsQW5kTm90aWZ5KHNjcmlwdHMpIHtcbiAgY29uc3Qgbm90ZXMgPSBbXTtcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKGl0ZW0gPT4gY2hlY2tVcGRhdGUoaXRlbSwgbm90ZXMpKSk7XG4gIGlmIChub3Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICBub3RpZnkobm90ZXNbMF0pO1xuICB9IGVsc2UgaWYgKG5vdGVzLmxlbmd0aCkge1xuICAgIG5vdGlmeSh7XG4gICAgICAvLyBGRiBkb2Vzbid0IHNob3cgbm90aWZpY2F0aW9ucyBvZiB0eXBlOidsaXN0JyBzbyB3ZSdsbCB1c2UgYHRleHRgIGV2ZXJ5d2hlcmVcbiAgICAgIHRleHQ6IG5vdGVzLm1hcChuID0+IG4udGV4dCkuam9pbignXFxuJyksXG4gICAgICBvbkNsaWNrOiBicm93c2VyLnJ1bnRpbWUub3Blbk9wdGlvbnNQYWdlLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufVxuXG5jb25zdCBwcm9jZXNzZXMgPSB7fTtcblxuLy8gcmVzb2x2ZXMgdG8gdHJ1ZSBpZiBzdWNjZXNzZnVsbHkgdXBkYXRlZFxuZnVuY3Rpb24gY2hlY2tVcGRhdGUoc2NyaXB0LCBub3Rlcykge1xuICBjb25zdCB7IGlkIH0gPSBzY3JpcHQucHJvcHM7XG4gIGNvbnN0IHByb21pc2UgPSBwcm9jZXNzZXNbaWRdIHx8IChwcm9jZXNzZXNbaWRdID0gZG9DaGVja1VwZGF0ZShzY3JpcHQsIG5vdGVzKSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkb0NoZWNrVXBkYXRlKHNjcmlwdCwgbm90ZXMpIHtcbiAgY29uc3QgeyBpZCB9ID0gc2NyaXB0LnByb3BzO1xuICBsZXQgbXNnT2s7XG4gIGxldCBtc2dFcnI7XG4gIGxldCByZXNvdXJjZU9wdHM7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1cGRhdGUgfSA9IGF3YWl0IHBhcnNlU2NyaXB0KHtcbiAgICAgIGlkLFxuICAgICAgY29kZTogYXdhaXQgZG93bmxvYWRVcGRhdGUoc2NyaXB0KSxcbiAgICAgIHVwZGF0ZTogeyBjaGVja2luZzogZmFsc2UgfSxcbiAgICB9KTtcbiAgICBtc2dPayA9IGkxOG4oJ21zZ1NjcmlwdFVwZGF0ZWQnLCBbZ2V0U2NyaXB0TmFtZSh1cGRhdGUpXSk7XG4gICAgcmVzb3VyY2VPcHRzID0geyBjYWNoZTogJ25vLWNhY2hlJyB9O1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoICh1cGRhdGUpIHtcbiAgICBtc2dFcnIgPSB1cGRhdGUuZXJyb3I7XG4gICAgLy8gRWl0aGVyIHByb2NlZWQgd2l0aCBub3JtYWwgZmV0Y2ggb24gbm8tdXBkYXRlIG9yIHNraXAgaXQgYWx0b2dldGhlciBvbiBlcnJvclxuICAgIHJlc291cmNlT3B0cyA9ICF1cGRhdGUuZXJyb3IgJiYgIXVwZGF0ZS5jaGVja2luZyAmJiB7fTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIGNvbnNvbGUuZXJyb3IodXBkYXRlKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAocmVzb3VyY2VPcHRzICYmICFJU19ERVYpIHsgLy8gREVW54q25oCB5LiN5pu05pawcmVzb3VyY2VcbiAgICAgIG1zZ0VyciA9IGF3YWl0IGZldGNoUmVzb3VyY2VzKHNjcmlwdCwgbnVsbCwgcmVzb3VyY2VPcHRzKTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRyAmJiBtc2dFcnIpIGNvbnNvbGUuZXJyb3IobXNnRXJyKTtcbiAgICB9XG4gICAgaWYgKGNhbk5vdGlmeShzY3JpcHQpICYmIChtc2dPayB8fCBtc2dFcnIpKSB7XG4gICAgICBub3Rlcy5wdXNoKHtcbiAgICAgICAgc2NyaXB0LFxuICAgICAgICB0ZXh0OiBbbXNnT2ssIG1zZ0Vycl06OnRydWVKb2luKCdcXG4nKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkZWxldGUgcHJvY2Vzc2VzW2lkXTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBkb3dubG9hZFVwZGF0ZSh7IHByb3BzOiB7IGlkIH0sIG1ldGEsIGN1c3RvbSB9KSB7XG4gIGNvbnN0IGRvd25sb2FkVVJMID0gY3VzdG9tLmRvd25sb2FkVVJMIHx8IG1ldGEuZG93bmxvYWRVUkwgfHwgY3VzdG9tLmxhc3RJbnN0YWxsVVJMO1xuICBsZXQgdXBkYXRlVVJMID0gY3VzdG9tLnVwZGF0ZVVSTCB8fCBtZXRhLnVwZGF0ZVVSTCB8fCBkb3dubG9hZFVSTDtcbiAgaWYgKElTX0RFViAmJiB1cGRhdGVVUkwpIHtcbiAgICBpZiAobWV0YS5kZXYpIHtcbiAgICAgIGNvbnN0IHVybHMgPSB1cGRhdGVVUkwuc3BsaXQoJy8nKTtcbiAgICAgIHVwZGF0ZVVSTCA9IGBodHRwOi8vMTI3LjAuMC4xOiR7bWV0YS5kZXZ9LyR7dXJsc1t1cmxzLmxlbmd0aCAtIDFdfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZVVSTCA9IG51bGw7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUuaW5mbygnZG93bmxvYWRVcGRhdGUnLCBpZCwgdXBkYXRlVVJMKTtcbiAgfVxuICBpZiAoIXVwZGF0ZVVSTCkgdGhyb3cgZmFsc2U7XG4gIGxldCBlcnJvck1lc3NhZ2U7XG4gIGNvbnN0IHVwZGF0ZSA9IHt9O1xuICBjb25zdCByZXN1bHQgPSB7IHVwZGF0ZSwgd2hlcmU6IHsgaWQgfSB9O1xuICBhbm5vdW5jZShpMThuKCdtc2dDaGVja2luZ0ZvclVwZGF0ZScpKTtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcXVlc3QodXBkYXRlVVJMLCB7XG4gICAgICAvLyBUT0RPOiBkbyBhIEhFQUQgcmVxdWVzdCBmaXJzdCB0byBnZXQgRVRhZyBoZWFkZXIgYW5kIGNvbXBhcmUgdG8gc3RvcmFnZS5tb2RcbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgaGVhZGVyczogeyBBY2NlcHQ6ICd0ZXh0L3gtdXNlcnNjcmlwdC1tZXRhLCovKicgfSxcbiAgICB9KTtcbiAgICBpZiAoSVNfREVWKSByZXR1cm4gZGF0YTtcbiAgICBjb25zdCB7IHZlcnNpb24gfSA9IHBhcnNlTWV0YShkYXRhKTtcbiAgICBpZiAoY29tcGFyZVZlcnNpb24obWV0YS52ZXJzaW9uLCB2ZXJzaW9uKSA+PSAwKSB7XG4gICAgICBhbm5vdW5jZShpMThuKCdtc2dOb1VwZGF0ZScpLCB7IGNoZWNraW5nOiBmYWxzZSB9KTtcbiAgICB9IGVsc2UgaWYgKCFkb3dubG9hZFVSTCkge1xuICAgICAgYW5ub3VuY2UoaTE4bignbXNnTmV3VmVyc2lvbicpLCB7IGNoZWNraW5nOiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYW5ub3VuY2UoaTE4bignbXNnVXBkYXRpbmcnKSk7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBpMThuKCdtc2dFcnJvckZldGNoaW5nU2NyaXB0Jyk7XG4gICAgICByZXR1cm4gKGF3YWl0IHJlcXVlc3QoZG93bmxvYWRVUkwsIHsgY2FjaGU6ICduby1jYWNoZScgfSkpLmRhdGE7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgYW5ub3VuY2UoZXJyb3JNZXNzYWdlIHx8IGkxOG4oJ21zZ0Vycm9yRmV0Y2hpbmdVcGRhdGVJbmZvJyksIHsgZXJyb3IgfSk7XG4gIH1cbiAgdGhyb3cgdXBkYXRlO1xuICBmdW5jdGlvbiBhbm5vdW5jZShtZXNzYWdlLCB7IGVycm9yLCBjaGVja2luZyA9ICFlcnJvciB9ID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHVwZGF0ZSwge1xuICAgICAgbWVzc2FnZSxcbiAgICAgIGNoZWNraW5nLFxuICAgICAgZXJyb3I6IGVycm9yID8gYCR7aTE4bignZ2VuZXJpY0Vycm9yJyl9ICR7ZXJyb3Iuc3RhdHVzfSwgJHtlcnJvci51cmx9YCA6IG51bGwsXG4gICAgICAvLyBgbnVsbGAgaXMgdHJhbnNmZXJhYmxlIGluIENocm9tZSB1bmxpa2UgYHVuZGVmaW5lZGBcbiAgICB9KTtcbiAgICBzZW5kQ21kKENNRF9TQ1JJUFRfVVBEQVRFLCByZXN1bHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbk5vdGlmeShzY3JpcHQpIHtcbiAgY29uc3QgYWxsb3dlZCA9IGdldE9wdGlvbignbm90aWZ5VXBkYXRlcycpO1xuICByZXR1cm4gZ2V0T3B0aW9uKCdub3RpZnlVcGRhdGVzR2xvYmFsJylcbiAgICA/IGFsbG93ZWRcbiAgICA6IHNjcmlwdC5jb25maWcubm90aWZ5VXBkYXRlcyA/PyBhbGxvd2VkO1xufVxuXG5mdW5jdGlvbiBub3RpZnkoe1xuICBzY3JpcHQsXG4gIHRleHQsXG4gIG9uQ2xpY2sgPSAoKSA9PiBjb21tYW5kcy5PcGVuRWRpdG9yKHNjcmlwdC5wcm9wcy5pZCksXG59KSB7XG4gIGNvbW1hbmRzLk5vdGlmaWNhdGlvbih7XG4gICAgdGV4dCxcbiAgICAvLyBGRiBkb2Vzbid0IHNob3cgdGhlIG5hbWUgb2YgdGhlIGV4dGVuc2lvbiBpbiB0aGUgdGl0bGUgb2YgdGhlIG5vdGlmaWNhdGlvblxuICAgIHRpdGxlOiBJU19GSVJFRk9YID8gYCR7aTE4bigndGl0bGVTY3JpcHRVcGRhdGVkJyl9IC0gJHtpMThuKCdleHROYW1lJyl9YCA6ICcnLFxuICB9LCB1bmRlZmluZWQsIHtcbiAgICBvbkNsaWNrLFxuICB9KTtcbn1cbiIsImltcG9ydCB7IGlzRW1wdHksIHNlbmRUYWJDbWQgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBmb3JFYWNoRW50cnksIGZvckVhY2hLZXksIG9iamVjdFNldCB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgeyBnZXRTY3JpcHQsIGdldFZhbHVlU3RvcmVzQnlJZHMsIGR1bXBWYWx1ZVN0b3JlcyB9IGZyb20gJy4vZGInO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5jb25zdCBvcGVuZXJzID0ge307IC8vIHsgc2NyaXB0SWQ6IHsgdGFiSWQ6IHsgZnJhbWVJZDogMSwgLi4uIH0sIC4uLiB9IH1cbmxldCBjYWNoZSA9IHt9OyAvLyB7IHNjcmlwdElkOiB7IGtleTogeyBsYXN0OiB2YWx1ZSwgdGFiSWQ6IHsgZnJhbWVJZDogdmFsdWUgfSB9IH0gfVxubGV0IHVwZGF0ZVNjaGVkdWxlZDtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICAvKiogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fSAqL1xuICBhc3luYyBHZXRWYWx1ZVN0b3JlKGlkKSB7XG4gICAgY29uc3Qgc3RvcmVzID0gYXdhaXQgZ2V0VmFsdWVTdG9yZXNCeUlkcyhbaWRdKTtcbiAgICByZXR1cm4gc3RvcmVzW2lkXSB8fCB7fTtcbiAgfSxcbiAgLyoqIEBwYXJhbSB7eyB3aGVyZSwgc3RvcmUgfVtdfSBkYXRhXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59ICovXG4gIGFzeW5jIFNldFZhbHVlU3RvcmVzKGRhdGEpIHtcbiAgICAvLyBWYWx1ZSBzdG9yZSB3aWxsIGJlIHJlcGxhY2VkIHNvb24uXG4gICAgY29uc3Qgc3RvcmVzID0gZGF0YS5yZWR1Y2UoKHJlcywgeyB3aGVyZSwgc3RvcmUgfSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSB3aGVyZS5pZCB8fCBnZXRTY3JpcHQod2hlcmUpPy5wcm9wcy5pZDtcbiAgICAgIGlmIChpZCkgcmVzW2lkXSA9IHN0b3JlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZHVtcFZhbHVlU3RvcmVzKHN0b3JlcyksXG4gICAgICBicm9hZGNhc3RWYWx1ZVN0b3Jlcyhncm91cFN0b3Jlc0J5RnJhbWUoc3RvcmVzKSksXG4gICAgXSk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHt2b2lkfSAqL1xuICBVcGRhdGVWYWx1ZSh7IGlkLCBrZXksIHZhbHVlID0gbnVsbCB9LCBzcmMpIHtcbiAgICBvYmplY3RTZXQoY2FjaGUsIFtpZCwga2V5LCAnbGFzdCddLCB2YWx1ZSk7XG4gICAgb2JqZWN0U2V0KGNhY2hlLCBbaWQsIGtleSwgc3JjLnRhYi5pZCwgc3JjLmZyYW1lSWRdLCB2YWx1ZSk7XG4gICAgdXBkYXRlTGF0ZXIoKTtcbiAgfSxcbn0pO1xuXG5icm93c2VyLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKHJlc2V0VmFsdWVPcGVuZXIpO1xuYnJvd3Nlci50YWJzLm9uUmVwbGFjZWQuYWRkTGlzdGVuZXIoKGFkZGVkSWQsIHJlbW92ZWRJZCkgPT4gcmVzZXRWYWx1ZU9wZW5lcihyZW1vdmVkSWQpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VmFsdWVPcGVuZXIodGFiSWQpIHtcbiAgb3BlbmVyczo6Zm9yRWFjaEVudHJ5KChbaWQsIG9wZW5lclRhYnNdKSA9PiB7XG4gICAgaWYgKHRhYklkIGluIG9wZW5lclRhYnMpIHtcbiAgICAgIGRlbGV0ZSBvcGVuZXJUYWJzW3RhYklkXTtcbiAgICAgIGlmIChpc0VtcHR5KG9wZW5lclRhYnMpKSBkZWxldGUgb3BlbmVyc1tpZF07XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFZhbHVlT3BlbmVyKHRhYklkLCBmcmFtZUlkLCBzY3JpcHRJZHMpIHtcbiAgc2NyaXB0SWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgb2JqZWN0U2V0KG9wZW5lcnMsIFtpZCwgdGFiSWQsIGZyYW1lSWRdLCAxKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUxhdGVyKCkge1xuICB3aGlsZSAoIXVwZGF0ZVNjaGVkdWxlZCkge1xuICAgIHVwZGF0ZVNjaGVkdWxlZCA9IHRydWU7XG4gICAgYXdhaXQgMDtcbiAgICBjb25zdCBjdXJyZW50Q2FjaGUgPSBjYWNoZTtcbiAgICBjYWNoZSA9IHt9O1xuICAgIGF3YWl0IGRvVXBkYXRlKGN1cnJlbnRDYWNoZSk7XG4gICAgdXBkYXRlU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgaWYgKGlzRW1wdHkoY2FjaGUpKSBicmVhaztcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBkb1VwZGF0ZShjdXJyZW50Q2FjaGUpIHtcbiAgY29uc3QgaWRzID0gT2JqZWN0LmtleXMoY3VycmVudENhY2hlKTtcbiAgY29uc3QgdmFsdWVTdG9yZXMgPSBhd2FpdCBnZXRWYWx1ZVN0b3Jlc0J5SWRzKGlkcyk7XG4gIGlkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgIGN1cnJlbnRDYWNoZVtpZF06OmZvckVhY2hFbnRyeSgoW2tleSwgeyBsYXN0IH1dKSA9PiB7XG4gICAgICBvYmplY3RTZXQodmFsdWVTdG9yZXMsIFtpZCwga2V5XSwgbGFzdCB8fCB1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9KTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGR1bXBWYWx1ZVN0b3Jlcyh2YWx1ZVN0b3JlcyksXG4gICAgYnJvYWRjYXN0VmFsdWVTdG9yZXMoZ3JvdXBDYWNoZUJ5RnJhbWUoY3VycmVudENhY2hlKSwgeyBwYXJ0aWFsOiB0cnVlIH0pLFxuICBdKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYnJvYWRjYXN0VmFsdWVTdG9yZXModGFiRnJhbWVEYXRhLCB7IHBhcnRpYWwgfSA9IHt9KSB7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIGZvciAoY29uc3QgW3RhYklkLCBmcmFtZXNdIG9mIE9iamVjdC5lbnRyaWVzKHRhYkZyYW1lRGF0YSkpIHtcbiAgICBmb3IgKGNvbnN0IFtmcmFtZUlkLCBmcmFtZURhdGFdIG9mIE9iamVjdC5lbnRyaWVzKGZyYW1lcykpIHtcbiAgICAgIGlmICghaXNFbXB0eShmcmFtZURhdGEpKSB7XG4gICAgICAgIGlmIChwYXJ0aWFsKSBmcmFtZURhdGEucGFydGlhbCA9IHRydWU7XG4gICAgICAgIHRhc2tzLnB1c2goc2VuZFRhYkNtZCgrdGFiSWQsICdVcGRhdGVkVmFsdWVzJywgZnJhbWVEYXRhLCB7IGZyYW1lSWQ6ICtmcmFtZUlkIH0pKTtcbiAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMjApIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzLnNwbGljZSgwKSk7IC8vIHRocm90dGxpbmdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXdhaXQgUHJvbWlzZS5hbGwodGFza3MpO1xufVxuXG4vLyBSZXR1cm5zIHBlciB0YWIvZnJhbWUgZGF0YSB3aXRoIG9ubHkgdGhlIGNoYW5nZWQgdmFsdWVzXG5mdW5jdGlvbiBncm91cENhY2hlQnlGcmFtZShjYWNoZURhdGEpIHtcbiAgY29uc3QgdG9TZW5kID0ge307XG4gIGNhY2hlRGF0YTo6Zm9yRWFjaEVudHJ5KChbaWQsIHNjcmlwdERhdGFdKSA9PiB7XG4gICAgY29uc3QgZGF0YUVudHJpZXMgPSBPYmplY3QuZW50cmllcyhzY3JpcHREYXRhKTtcbiAgICBvcGVuZXJzW2lkXTo6Zm9yRWFjaEVudHJ5KChbdGFiSWQsIGZyYW1lc10pID0+IHtcbiAgICAgIGZyYW1lczo6Zm9yRWFjaEtleSgoZnJhbWVJZCkgPT4ge1xuICAgICAgICBkYXRhRW50cmllcy5mb3JFYWNoKChba2V5LCBoaXN0b3J5XSkgPT4ge1xuICAgICAgICAgIC8vIFNraXBwaW5nIHRoaXMgZnJhbWUgaWYgaXRzIGxhc3QgcmVjb3JkZWQgdmFsdWUgaXMgaWRlbnRpY2FsXG4gICAgICAgICAgaWYgKGhpc3RvcnkubGFzdCAhPT0gaGlzdG9yeVt0YWJJZF0/LltmcmFtZUlkXSkge1xuICAgICAgICAgICAgb2JqZWN0U2V0KHRvU2VuZCwgW3RhYklkLCBmcmFtZUlkLCBpZCwga2V5XSwgaGlzdG9yeS5sYXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gdG9TZW5kO1xufVxuXG4vLyBSZXR1cm5zIHBlciB0YWIvZnJhbWUgZGF0YVxuZnVuY3Rpb24gZ3JvdXBTdG9yZXNCeUZyYW1lKHN0b3Jlcykge1xuICBjb25zdCB0b1NlbmQgPSB7fTtcbiAgc3RvcmVzOjpmb3JFYWNoRW50cnkoKFtpZCwgc3RvcmVdKSA9PiB7XG4gICAgb3BlbmVyc1tpZF06OmZvckVhY2hFbnRyeSgoW3RhYklkLCBmcmFtZXNdKSA9PiB7XG4gICAgICBmcmFtZXM6OmZvckVhY2hLZXkoZnJhbWVJZCA9PiB7XG4gICAgICAgIG9iamVjdFNldCh0b1NlbmQsIFt0YWJJZCwgZnJhbWVJZCwgaWRdLCBzdG9yZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB0b1NlbmQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihhbGxvd2VkKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB0aGlzLmFsbG93ZWQgPSBhbGxvd2VkO1xuICB9XG5cbiAgY2hlY2tUeXBlKHR5cGUpIHtcbiAgICBpZiAodGhpcy5hbGxvd2VkICYmICF0aGlzLmFsbG93ZWQuaW5jbHVkZXModHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBldmVudCB0eXBlOiAke3R5cGV9YCk7XG4gICAgfVxuICB9XG5cbiAgb24odHlwZSwgaGFuZGxlKSB7XG4gICAgdGhpcy5jaGVja1R5cGUodHlwZSk7XG4gICAgY29uc3QgeyBldmVudHMgfSA9IHRoaXM7XG4gICAgbGV0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVdO1xuICAgIGlmICghaGFuZGxlcnMpIHtcbiAgICAgIGhhbmRsZXJzID0gW107XG4gICAgICBldmVudHNbdHlwZV0gPSBoYW5kbGVycztcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHRoaXMub2ZmKHR5cGUsIGhhbmRsZSk7XG4gIH1cblxuICBvZmYodHlwZSwgaGFuZGxlKSB7XG4gICAgdGhpcy5jaGVja1R5cGUodHlwZSk7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmV2ZW50c1t0eXBlXTtcbiAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgIGNvbnN0IGkgPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZSk7XG4gICAgICBpZiAoaSA+PSAwKSBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG5cbiAgZW1pdCh0eXBlLCBkYXRhKSB7XG4gICAgdGhpcy5jaGVja1R5cGUodHlwZSk7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmV2ZW50c1t0eXBlXTtcbiAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgIGNvbnN0IGV2dCA9IHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZGVmYXVsdFByZXZlbnRlZDogZmFsc2UsXG4gICAgICAgIHByZXZlbnREZWZhdWx0KCkge1xuICAgICAgICAgIGV2dC5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBoYW5kbGVycy5zb21lKChoYW5kbGUpID0+IHtcbiAgICAgICAgaGFuZGxlKGV2dCk7XG4gICAgICAgIHJldHVybiBldnQuZGVmYXVsdFByZXZlbnRlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHRsZGpzIGZyb20gJ3RsZGpzJztcbi8vIGltcG9ydCB7IGZyb21Vc2VyU2V0dGluZ3MgfSBmcm9tICd0bGRqcyc7XG4vLyBpbXBvcnQgVHJpZSBmcm9tICd0bGRqcy9saWIvc3VmZml4LXRyaWUnO1xuLy8gaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJyMvY29tbW9uJztcblxuLy8gbGV0IHRsZGpzO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gaW5pdFRMRChyZW1vdGUpIHtcbi8vICAgLy8gVExEIHJ1bGVzIGFyZSB0b28gbGFyZ2UgdG8gYmUgcGFja2VkLCBkb3dubG9hZCB0aGVtIGF0IHJ1bnRpbWUuXG4vLyAgIGNvbnN0IHVybCA9ICdodHRwczovL3Zpb2xlbnRtb25rZXkudG9wL3N0YXRpYy90bGQtcnVsZXMuanNvbic7XG4vLyAgIGNvbnN0IGtleSA9ICdkYXQ6dGxkUnVsZXMnO1xuLy8gICBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KGtleSlcbi8vICAgLnRoZW4oKHsgW2tleV06IHRsZFJ1bGVzIH0pID0+IHtcbi8vICAgICBpZiAodGxkUnVsZXMpIHJldHVybiB0bGRSdWxlcztcbi8vICAgICBpZiAoIXJlbW90ZSkgcmV0dXJuIFByb21pc2UucmVqZWN0KCdpZ25vcmUgVExEJyk7XG4vLyAgICAgcmV0dXJuIHJlcXVlc3QodXJsLCB7IHJlc3BvbnNlVHlwZTogJ2pzb24nIH0pXG4vLyAgICAgLnRoZW4oKHsgZGF0YTogcnVsZXMgfSkgPT4ge1xuLy8gICAgICAgY29uc29sZS5pbmZvKCdEb3dubG9hZGVkIHB1YmxpYyBzdWZmaXggZGF0YScpO1xuLy8gICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBba2V5XTogcnVsZXMgfSlcbi8vICAgICAgIC50aGVuKCgpID0+IHJ1bGVzKTtcbi8vICAgICB9KTtcbi8vICAgfSlcbi8vICAgLnRoZW4odGxkUnVsZXMgPT4ge1xuLy8gICAgIGNvbnNvbGUuaW5mbygnSW5pdGlhbGl6ZWQgVExEJyk7XG4vLyAgICAgdGxkanMgPSBmcm9tVXNlclNldHRpbmdzKHsgcnVsZXM6IFRyaWUuZnJvbUpzb24odGxkUnVsZXMpIH0pO1xuLy8gICB9KVxuLy8gICAuY2F0Y2goZXJyID0+IHtcbi8vICAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIGNvbnNvbGUuZXJyb3IoZXJyKTtcbi8vICAgICBjb25zb2xlLmluZm8oJ0ZhaWxlZCBpbml0aWFsaXppbmcgVExEJyk7XG4vLyAgIH0pO1xuLy8gfVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUTEQoKSB7fVxuXG5mdW5jdGlvbiBleHBvcnRNZXRob2Qoa2V5KSB7XG4gIHJldHVybiAoLi4uYXJncykgPT4gdGxkanMgJiYgdGxkanNba2V5XSguLi5hcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhZHkoKSB7XG4gIHJldHVybiAhIXRsZGpzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RG9tYWluID0gZXhwb3J0TWV0aG9kKCdnZXREb21haW4nKTtcbmV4cG9ydCBjb25zdCBnZXRTdWJkb21haW4gPSBleHBvcnRNZXRob2QoJ2dldFN1YmRvbWFpbicpO1xuZXhwb3J0IGNvbnN0IGdldFB1YmxpY1N1ZmZpeCA9IGV4cG9ydE1ldGhvZCgnZ2V0UHVibGljU3VmZml4Jyk7XG4iXSwic291cmNlUm9vdCI6IiJ9