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
      const newId = "Violentmonkey:vuaHiC62kVk=";

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
    value: `"${"Violentmonkey:vuaHiC62kVk="}"=${blobUrl.split('/').pop()}; SameSite=Lax`
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

const isDownloadReq = opts => {
  return opts.overrideMimeType === 'application/octet-stream' && opts.responseType === 'blob' && opts.fileName;
};

if (chrome) {
  chrome.downloads.onChanged.addListener(evt => {
    var _evt$state;

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
      delete downloads[evt.id];
      delete requests[req.id];
    }
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
    } = opts; // handle download

    if (chrome && isDownloadReq(opts)) {
      // console.info(opts);
      return chrome.downloads.download({
        url: opts.url,
        // "saveAs" : true,
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
    } // console.log("HttpRequest", opts, src);


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
    }

    console.info('downloadUpdate', id, updateURL);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL25vZGVfbW9kdWxlcy9wdW55Y29kZS9wdW55Y29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cmwvdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cmwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3BsdWdpbi9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvcGx1Z2luL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3N5bmMvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9zeW5jL2Ryb3Bib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvc3luYy9nb29nbGVkcml2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9zeW5jL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3N5bmMvb25lZHJpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvc3luYy93ZWJkYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2RiLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9ob3RrZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9wYXRjaC1kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9wb3B1cC10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3ByZWluamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3N0b3JhZ2UtZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy90ZW1wbGF0ZS1ob29rLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3Rlc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdGxkLmpzIl0sIm5hbWVzIjpbImhvb2tPcHRpb25zIiwiY2hhbmdlcyIsImF1dG9VcGRhdGUiLCJTQ1JJUFRfVEVNUExBVEUiLCJyZXNldFNjcmlwdFRlbXBsYXRlIiwic2VuZENtZCIsIk9iamVjdCIsImFzc2lnbiIsImNvbW1hbmRzIiwiR2V0RGF0YSIsImlkcyIsImRhdGEiLCJnZXREYXRhIiwic3luYyIsIkdldEluamVjdGVkIiwidXJsIiwiZm9yY2VDb250ZW50Iiwic3JjIiwiZnJhbWVJZCIsInRhYiIsInRhYklkIiwiaWQiLCJyZXNldFZhbHVlT3BlbmVyIiwiY2xlYXJSZXF1ZXN0c0J5VGFiSWQiLCJyZXMiLCJnZXRJbmplY3RlZFNjcmlwdHMiLCJmZWVkYmFjayIsImluamVjdCIsInZhbE9wSWRzIiwiaXNQb3B1cFNob3duIiwicG9wdXBUYWJzIiwibGVuZ3RoIiwic2V0VGltZW91dCIsIkluamVjdGlvbkZlZWRiYWNrIiwiYWRkVmFsdWVPcGVuZXIiLCJHZXRUYWJEb21haW4iLCJnZXRBY3RpdmVUYWIiLCJwZW5kaW5nVXJsIiwiaG9zdCIsIm1hdGNoIiwiZG9tYWluIiwidGxkIiwiU2V0VGltZW91dCIsIm1zIiwibWFrZVBhdXNlIiwiY29tbWFuZHNUb1N5bmMiLCJjb21tYW5kc1RvU3luY0lmVHJ1dGh5IiwiaGFuZGxlQ29tbWFuZE1lc3NhZ2UiLCJyZXEiLCJjbWQiLCJpbmNsdWRlcyIsImludGVydmFsIiwiSVNfREVWIiwiZ2V0T3B0aW9uIiwiVElNRU9VVF8yNEhPVVJTIiwiZWxhcHNlZCIsIkRhdGUiLCJub3ciLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsIk1hdGgiLCJtaW4iLCJUSU1FT1VUX01BWCIsImluaXRCdWlsZGluIiwicmVxdWVzdCIsIkJVSUxEX0lOX1NDUklQVF9TUkMiLCJjYWNoZSIsImhlYWRlcnMiLCJBY2NlcHQiLCJQYXJzZVNjcmlwdCIsImNvZGUiLCJjdXN0b20iLCJidWlsZEluIiwid2hlcmUiLCJpbml0aWFsaXplIiwiZ2xvYmFsIiwiZGVlcENvcHkiLCJicm93c2VyIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwiSVNfRklSRUZPWCIsImFyZ3MiLCJjYXRjaCIsImUiLCJQcm9taXNlIiwicmVqZWN0IiwiRXJyb3IiLCJjb25zb2xlIiwiaW5mbyIsImNoZWNrUmVtb3ZlIiwic2V0SW50ZXJ2YWwiLCJhcGkiLCJjaHJvbWUiLCJkZWNsYXJhdGl2ZUNvbnRlbnQiLCJvblBhZ2VDaGFuZ2VkIiwiZ2V0UnVsZXMiLCJydWxlIiwibmV3SWQiLCJwcm9jZXNzIiwicmVtb3ZlUnVsZXMiLCJhZGRSdWxlcyIsImNvbmRpdGlvbnMiLCJQYWdlU3RhdGVNYXRjaGVyIiwicGFnZVVybCIsInVybENvbnRhaW5zIiwiYWN0aW9ucyIsIlJlcXVlc3RDb250ZW50U2NyaXB0IiwianMiLCJnZXRNYW5pZmVzdCIsImNvbnRlbnRfc2NyaXB0cyIsIkV2ZW50RW1pdHRlciIsInNjcmlwdCIsInVwZGF0ZSIsImxpc3QiLCJnZXRTY3JpcHRzIiwiZ2V0IiwiR2V0U2NyaXB0Q29kZSIsInJlbW92ZSIsIk1hcmtSZW1vdmVkIiwicmVtb3ZlZCIsInNlcnZpY2VOYW1lcyIsInNlcnZpY2VDbGFzc2VzIiwic2VydmljZXMiLCJhdXRvU3luYyIsImRlYm91bmNlIiwiVElNRU9VVF9IT1VSIiwid29ya2luZyIsInJlc29sdmUiLCJzeW5jQ29uZmlnIiwiZ2V0SXRlbUZpbGVuYW1lIiwibmFtZSIsInVyaSIsImlzU2NyaXB0RmlsZSIsInRlc3QiLCJnZXRVUkkiLCJpIiwiaW5kZXhPZiIsInZlcnNpb24iLCJzbGljZSIsInNwbGl0IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXJyIiwiaW5pdENvbmZpZyIsImtleSIsImRlZiIsImtleXMiLCJub3JtYWxpemVLZXlzIiwidW5zaGlmdCIsInNldCIsInZhbHVlIiwic2V0T3B0aW9uIiwiaW5pdCIsImNvbmZpZyIsInNlcnZpY2VDb25maWciLCJnZXRLZXlzIiwidmFsIiwiZm9yRWFjaEVudHJ5IiwiayIsInYiLCJjbGVhciIsInNlcnZpY2VTdGF0ZSIsInZhbGlkU3RhdGVzIiwiaW5pdGlhbFN0YXRlIiwib25DaGFuZ2UiLCJzdGF0ZSIsIm5ld1N0YXRlIiwid2FybiIsImlzIiwic3RhdGVzIiwiZW5zdXJlQXJyYXkiLCJnZXRTdGF0ZXMiLCJtYXAiLCJzZXJ2aWNlIiwiZGlzcGxheU5hbWUiLCJhdXRoU3RhdGUiLCJzeW5jU3RhdGUiLCJsYXN0U3luYyIsInByb2dyZXNzIiwicHJvcGVydGllcyIsInVzZXJDb25maWciLCJnZXRVc2VyQ29uZmlnIiwiZ2V0U2NyaXB0RGF0YSIsInN5bmNWZXJzaW9uIiwiZXh0cmEiLCJwcm9wcyIsIm9iamVjdFBpY2siLCJtb3JlIiwiZW5hYmxlZCIsInNob3VsZFVwZGF0ZSIsImxhc3RVcGRhdGVkIiwicGFyc2VTY3JpcHREYXRhIiwicmF3Iiwib2JqIiwiSlNPTiIsInBhcnNlIiwib2JqZWN0UHVyaWZ5IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInNlcnZpY2VGYWN0b3J5IiwiYmFzZSIsIlNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImV4dGVuZCIsImV4dGVuZFNlcnZpY2UiLCJvcHRpb25zIiwiY3JlYXRlIiwib25TdGF0ZUNoYW5nZSIsIkJhc2VTZXJ2aWNlIiwiZGVsYXlUaW1lIiwidXJsUHJlZml4IiwibWV0YUZpbGUiLCJhdXRoVHlwZSIsIm5vb3AiLCJzZXRVc2VyQ29uZmlnIiwiZmluaXNoZWQiLCJ0b3RhbCIsImxhc3RGZXRjaCIsInN0YXJ0U3luYyIsInN5bmNGYWN0b3J5IiwiZXZlbnRzIiwiZ2V0RXZlbnRFbWl0dGVyIiwibG9nIiwicHJvbWlzZSIsImRlYm91bmNlZFJlc29sdmUiLCJzaG91bGRTeW5jIiwiZ2V0Q3VycmVudCIsImdldFJlYWR5IiwidGhlbiIsImVycm9yIiwicHJlcGFyZUhlYWRlcnMiLCJwcmVwYXJlIiwiaW5pdFRva2VuIiwidXNlciIsInR5cGUiLCJjaGVja1N5bmMiLCJhY3F1aXJlTG9jayIsInJlbGVhc2VMb2NrIiwiaGFuZGxlTWV0YUVycm9yIiwiZ2V0TWV0YSIsInRva2VuIiwiQXV0aG9yaXphdGlvbiIsImxvYWREYXRhIiwiZGVsYXkiLCJ0cyIsInN0YXJ0c1dpdGgiLCJwcmVmaXgiLCJnZXRMb2NhbERhdGEiLCJwbHVnaW5TY3JpcHQiLCJnZXRTeW5jRGF0YSIsInJlbW90ZU1ldGEiLCJhbGwiLCJyZW1vdGVEYXRhIiwibG9jYWxEYXRhIiwicmVtb3RlTWV0YURhdGEiLCJyZW1vdGVNZXRhSW5mbyIsInJlbW90ZVRpbWVzdGFtcCIsInRpbWVzdGFtcCIsInJlbW90ZUNoYW5nZWQiLCJnbG9iYWxMYXN0TW9kaWZpZWQiLCJyZW1vdGVJdGVtTWFwIiwibG9jYWxNZXRhIiwiZmlyc3RTeW5jIiwib3V0ZGF0ZWQiLCJwdXRMb2NhbCIsInB1dFJlbW90ZSIsImRlbFJlbW90ZSIsImRlbExvY2FsIiwidXBkYXRlTG9jYWwiLCJyZWR1Y2UiLCJpdGVtIiwiaXRlbUluZm8iLCJtb2RpZmllZCIsInBvc2l0aW9uIiwibGFzdE1vZGlmaWVkIiwicmVtb3RlSW5mbyIsInJlbW90ZUl0ZW0iLCJwdXNoIiwibG9jYWwiLCJyZW1vdGUiLCJwcm9taXNlUXVldWUiLCJvYmplY3RTZXQiLCJwdXQiLCJzdHJpbmdpZnkiLCJ1cGRhdGVzIiwidXBkYXRlU2NyaXB0SW5mbyIsInNvcnRTY3JpcHRzIiwiY2hhbmdlZCIsInNjcmlwdHMiLCJwcm9taXNlcyIsImVycm9ycyIsImZpbHRlciIsIkJvb2xlYW4iLCJyZWdpc3RlciIsIkZhY3RvcnkiLCJnZXRTZXJ2aWNlIiwic3luY09uZSIsImF1dGhvcml6ZSIsInJldm9rZSIsInNldENvbmZpZyIsIm9wZW5BdXRoUGFnZSIsInJlZGlyZWN0VXJpIiwidW5yZWdpc3RlcldlYlJlcXVlc3QiLCJ3ZWJSZXF1ZXN0Iiwib25CZWZvcmVSZXF1ZXN0IiwidXJscyIsInR5cGVzIiwidGFicyIsImNoZWNrQXV0aCIsImNhbmNlbCIsInJlbW92ZUxpc3RlbmVyIiwiY2xpZW50X2lkIiwicmVkaXJlY3RfdXJpIiwiZXNjUkUiLCJlc2NGdW5jIiwibSIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsImpzb25TdHJpbmdpZnlTYWZlIiwic3RyaW5nIiwicmVwbGFjZSIsIkRyb3Bib3giLCJtZXRob2QiLCJzdGF0dXMiLCJib2R5IiwicGF0aCIsInJlc3BvbnNlVHlwZSIsImVudHJpZXMiLCJub3JtYWxpemUiLCJtb2RlIiwicGFyYW1zIiwicmVzcG9uc2VfdHlwZSIsImR1bXBRdWVyeSIsImF1dGhvcml6ZWQiLCJsb2FkUXVlcnkiLCJhY2Nlc3NfdG9rZW4iLCJ1aWQiLCJzaXplIiwiY2xpZW50X3NlY3JldCIsInNjb3BlIiwiVU5BVVRIT1JJWkVEIiwiR29vZ2xlRHJpdmUiLCJyZWZyZXNoVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwiZ3JhbnRfdHlwZSIsInJlcXVlc3RVc2VyIiwiYWNjZXNzX3R5cGUiLCJub3RpZnkiLCJ0aXRsZSIsIm9iamVjdEdldCIsInNwYWNlcyIsImZpZWxkcyIsImZpbGVzIiwibWV0YUl0ZW0iLCJnb3RNZXRhIiwicHJvbXB0IiwiYm91bmRhcnkiLCJnZXRVbmlxSWQiLCJtZXRhZGF0YSIsInBhcmVudHMiLCJqb2luIiwiU3luY0F1dGhvcml6ZSIsIlN5bmNSZXZva2UiLCJTeW5jU3RhcnQiLCJTeW5jU2V0Q29uZmlnIiwiT25lRHJpdmUiLCJoZWFkZXIiLCJmaWxlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidXNlcl9pZCIsIktFWV9DSElMRFJFTiIsIlN5bWJvbCIsIlhOb2RlIiwibm9kZSIsIm5zTWFwIiwicGFyc2VBdHRycyIsInBhcnNlTmFtZSIsImZyb21YTUwiLCJ4bWwiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJhdHRyIiwiJCIsIm5vZGVUeXBlIiwidGFnTmFtZSIsIm5zIiwidGV4dCIsInRleHRDb250ZW50IiwidHJpbSIsImNoaWxkcmVuIiwiY2hpbGQiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiZmluZCIsIkRFRkFVTFRfQ09ORklHIiwic2VydmVyVXJsIiwiYW5vbnltb3VzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIldlYkRBViIsImVuZHNXaXRoIiwiVVJMIiwiYXV0aCIsIndpbmRvdyIsImJ0b2EiLCJjYWxsIiwiY3JlZGVudGlhbHMiLCJta2RpciIsInJlYWRkaXIiLCJkZXB0aCIsIml0ZW1zIiwicHJvcCIsImRpc3BsYXlOYW1lTm9kZSIsInVuZGVmaW5lZCIsImhyZWYiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImxvY2siLCJJZiIsImluaXRDYWNoZSIsImxpZmV0aW1lIiwiQ2FjaGVMb2FkIiwiQ2FjaGVIaXQiLCJoaXQiLCJDYWNoZVBvcCIsInBvcCIsInRleHRhcmVhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xpcGJvYXJkRGF0YSIsIlNldENsaXBib2FyZCIsImZvY3VzIiwicmV0IiwiZXhlY0NvbW1hbmQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInNldERhdGEiLCJzdG9yZSIsInN0b3JhZ2UiLCJzZXREYXRhQ2FjaGUiLCJkYXRhQ2FjaGUiLCJvbkR1bXAiLCJzY3JpcHRNYXAiLCJDaGVja1Bvc2l0aW9uIiwiQ2hlY2tSZW1vdmUiLCJHZXRTY3JpcHQiLCJnZXRTY3JpcHQiLCJFeHBvcnRaaXAiLCJ2YWx1ZXMiLCJnZXRQcm9wc0lkIiwiY29kZU1hcCIsImdldE11bHRpIiwiZ2V0T25lIiwiR2V0U2NyaXB0VmVyIiwib3B0cyIsIm1ldGEiLCJNb3ZlIiwib2Zmc2V0IiwiZ2V0U2NyaXB0QnlJZCIsImluZGV4Iiwic3BsaWNlIiwibm9ybWFsaXplUG9zaXRpb24iLCJSZW1vdmVTY3JpcHQiLCJQYXJzZU1ldGEiLCJwYXJzZU1ldGEiLCJwYXJzZVNjcmlwdCIsIlVwZGF0ZVNjcmlwdEluZm8iLCJWYWN1dW0iLCJ2YWN1dW0iLCJwcmVJbml0aWFsaXplIiwibGFzdFZlcnNpb24iLCJwYXRjaERCIiwic3RvcmVJbmZvIiwiaWRNYXAiLCJ1cmlNYXAiLCJtb2RzIiwicmVzVXJscyIsInJlbWVtYmVyVXJsIiwiXyIsImdldEludCIsImdldE5hbWVVUkkiLCJnZXREZWZhdWx0Q3VzdG9tIiwibWF4IiwicGF0aE1hcCIsImdyYW50IiwiU2V0IiwicmVxdWlyZSIsInJlc291cmNlcyIsImljb24iLCJtb2QiLCJyZW1vdmVNdWx0aSIsImRlZmF1bHRJbmplY3RJbnRvIiwiSU5KRUNUX1BBR0UiLCJjb21wYXJlVmVyc2lvbiIsIklOSkVDVF9BVVRPIiwidXBkYXRlTGFzdE1vZGlmaWVkIiwiZHVtcCIsInNvcnQiLCJhIiwiYiIsImdldFZhbHVlU3RvcmVzQnlJZHMiLCJkdW1wVmFsdWVTdG9yZXMiLCJ2YWx1ZURpY3QiLCJFTlZfQ0FDSEVfS0VZUyIsIkVOVl9SRVFfS0VZUyIsIkVOVl9WQUxVRV9JRFMiLCJHTVZBTFVFU19SRSIsIlJVTl9BVF9SRSIsImdldFNjcmlwdHNCeVVSTCIsImlzVG9wIiwiYWxsU2NyaXB0cyIsInRlc3RCbGFja2xpc3QiLCJub2ZyYW1lcyIsInRlc3RTY3JpcHQiLCJkaXNhYmxlZElkcyIsImVudlN0YXJ0IiwiZW52RGVsYXllZCIsImJ1aWxkUGF0aE1hcCIsInJ1bkF0IiwiZW52Iiwic29tZSIsInJlYWRFbnZpcm9ubWVudERhdGEiLCJTVE9SQUdFX1JPVVRFUyIsInJldHJpZWRTdG9yYWdlS2V5cyIsImlzUmV0cnkiLCJhcmVhIiwic3JjSWRzIiwiZ2V0S2V5IiwiZXJyMiIsImdldEljb25DYWNoZSIsImljb25VcmxzIiwiaXNSZW1vdGUiLCJtYWtlRGF0YVVyaSIsImZvcmNlIiwidG9SZW1vdmUiLCJUSU1FT1VUX1dFRUsiLCJnZXRVVUlEIiwicm5kIiwiVWludDE2QXJyYXkiLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJzYXZlU2NyaXB0Iiwib2xkU2NyaXB0IiwidXVpZCIsInJhbmRvbVVVSUQiLCJpMThuIiwiQ01EX1NDUklQVF9VUERBVEUiLCJyZXN1bHQiLCJtZXNzYWdlIiwiaXNOZXciLCJuZXdTY3JpcHQiLCJDTURfU0NSSVBUX0FERCIsImhvbWVwYWdlVVJMIiwiZnJvbSIsImxhc3RJbnN0YWxsVVJMIiwiZmV0Y2hSZXNvdXJjZXMiLCJwbHVnaW5FdmVudHMiLCJlbWl0IiwiYmFzZVVybCIsImZ1bGxVcmwiLCJnZXRGdWxsVXJsIiwicmVzb3VyY2VDYWNoZSIsInJlcU9wdGlvbnMiLCJzbmF0Y2giLCJ2YWxpZGF0b3IiLCJjb250ZW50cyIsImZldGNoIiwidmFsaWRhdGVJbWFnZSIsImlnbm9yZURlcHNFcnJvcnMiLCJ0cnVlSm9pbiIsImZvcm1hdEh0dHBFcnJvciIsImJ1ZiIsImJsb2JVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwib25Eb25lIiwicmV2b2tlT2JqZWN0VVJMIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJfdmFjdXVtaW5nIiwibnVtRml4ZXMiLCJyZXNvbHZlU2VsZiIsInIiLCJ0b0ZldGNoIiwia2V5c1RvUmVtb3ZlIiwidmFsdWVLZXlzIiwiY2FjaGVLZXlzIiwicmVxdWlyZUtleXMiLCJjb2RlS2V5cyIsIm1hcHBpbmdzIiwiZm9yRWFjaEtleSIsInN1YnN0b3JlIiwidG91Y2giLCJzY3JpcHRJZCIsImZvckVhY2hWYWx1ZSIsImdldFNjcmlwdE5hbWUiLCJmaXhlcyIsIm9uIiwib2ZmIiwiZmlyZSIsImZ1bmMiLCJwb3N0SW5pdGlhbGl6ZSIsIm9uQ29tbWFuZCIsIk9wZW5FZGl0b3IiLCJyb3V0ZSIsIlRhYk9wZW4iLCJDQUNIRV9EVVJBVElPTiIsIkdldEltYWdlRGF0YSIsImxvYWRJbWFnZURhdGEiLCJiYXNlNjQiLCJTZXRCYWRnZSIsInNldEJhZGdlIiwiYnJvd3NlckFjdGlvbiIsImlnbm9yZUVycm9ycyIsImxhc3RFcnJvciIsIm1ha2VNZXRob2QiLCJmbiIsImJhZGdlcyIsIktFWV9JU19BUFBMSUVEIiwiS0VZX1NIT1dfQkFER0UiLCJLRVlfQkFER0VfQ09MT1IiLCJLRVlfQkFER0VfQ09MT1JfQkxPQ0tFRCIsImlzQXBwbGllZCIsInNob3dCYWRnZSIsImJhZGdlQ29sb3IiLCJiYWRnZUNvbG9yQmxvY2tlZCIsInRpdGxlQmxhY2tsaXN0ZWQiLCJ0aXRsZU5vbmluamVjdGFibGUiLCJpY29uQ2FjaGUiLCJqb2JzIiwic2V0SWNvbiIsInVwZGF0ZUJhZGdlIiwidXBkYXRlQmFkZ2VDb2xvciIsInVwZGF0ZVN0YXRlIiwiZm9yRWFjaFRhYiIsIm9uUmVtb3ZlZCIsIm9uVXBkYXRlZCIsImZhdkljb25VcmwiLCJ1bmlxdWUiLCJzZXRCYWRnZVRleHQiLCJzZXRCYWRnZUJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYmxvY2tlZCIsImluamVjdGFibGUiLCJJTkpFQ1RBQkxFX1RBQl9VUkxfUkUiLCJibGFja2xpc3RlZCIsInNldFRpdGxlIiwiaWNvbkRhdGEiLCJuIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwidG9EYXRhVVJMIiwiZ2V0SW1hZ2VEYXRhIiwiZXh0ZW5zaW9uUm9vdCIsImdldFVSTCIsIm1haW4iLCJydW4iLCJub3RpZmljYXRpb25zIiwiaWNvblVybCIsImRlZmF1bHRJbWFnZSIsImlzQ2xpY2thYmxlIiwiYnJvYWRjYXN0Iiwic2VuZE1lc3NhZ2UiLCJzZW5kTWVzc2FnZU9ySWdub3JlIiwicXVlcnkiLCJvcGVuZXJzIiwiTm90aWZpY2F0aW9uIiwiYmdFeHRyYXMiLCJub3RpZmljYXRpb25JZCIsIm9uQ2xpY2siLCJSZW1vdmVOb3RpZmljYXRpb24iLCJvbkNsaWNrZWQiLCJvcGVuZXJJZCIsInNlbmRUYWJDbWQiLCJvbkNsb3NlZCIsIkdldEFsbE9wdGlvbnMiLCJHZXRPcHRpb25zIiwiZGVmYXVsdHMiLCJtYXBFbnRyeSIsIlNldE9wdGlvbnMiLCJob29rcyIsImluaXRIb29rcyIsImNhbGxIb29rc0xhdGVyIiwiY2FsbEhvb2tzIiwiaW5pdFBlbmRpbmciLCJmaXJlQ2hhbmdlIiwibWFpbktleSIsImdldERlZmF1bHRPcHRpb24iLCJvcHRpb25LZXkiLCJvcHRpb25WYWx1ZSIsImhvb2siLCJpbmRleGVkREIiLCJvcGVuIiwib25zdWNjZXNzIiwidHJhbnNmb3JtIiwib251cGdyYWRlbmVlZGVkIiwiZGIiLCJ0eCIsInRyYW5zYWN0aW9uIiwicHJvY2Vzc2luZyIsImRvbmUiLCJnZXRBbGwiLCJzdG9yZU5hbWUiLCJvYmplY3RTdG9yZSIsInRyYW5zZm9ybVNjcmlwdCIsImFsbFZhbHVlcyIsImFsbENhY2hlIiwiYWxsUmVxdWlyZSIsIm9yaWdJbmNsdWRlIiwib3JpZ0V4Y2x1ZGUiLCJvcmlnTWF0Y2giLCJvcmlnRXhjbHVkZU1hdGNoIiwib25Db25uZWN0Iiwib25Qb3B1cE9wZW5lZCIsInByZWZldGNoU2V0UG9wdXAiLCJicm93c2VyX2FjdGlvbiIsImRlZmF1bHRfcG9wdXAiLCJwb3J0Iiwib25EaXNjb25uZWN0Iiwib25Qb3B1cENsb3NlZCIsIlNldFBvcHVwIiwiQVBJX0NPTkZJRyIsIlRJTUVfQUZURVJfU0VORCIsIlRJTUVfQUZURVJfUkVDRUlWRSIsIlRJTUVfS0VFUF9EQVRBIiwiY2FjaGVDb2RlIiwib25EaXNwb3NlIiwicmNzIiwicmNzUHJvbWlzZSIsInVucmVnaXN0ZXIiLCJJTkpFQ1RfSU5UTyIsIktFWV9FWFBPU0UiLCJLRVlfREVGX0lOSkVDVF9JTlRPIiwiS0VZX1hIUl9JTkpFQ1QiLCJleHBvc2UiLCJpbmplY3RJbnRvIiwieGhySW5qZWN0Iiwib25PcHRpb25DaGFuZ2VkIiwiZmVlZElkIiwicHJvY2Vzc0ZlZWRiYWNrIiwiZGVsIiwiY2FjaGVLZXkiLCJlbnZLZXkiLCJwcmVwYXJlU2NyaXB0IiwibmVlZHNJbmplY3Rpb24iLCJleGVjdXRlU2NyaXB0IiwicHJvcHNUb0NsZWFyIiwib25DaGFuZ2VkIiwiZGJLZXlzIiwiY2FjaGVWYWx1ZXMiLCJnZXRWYWx1ZXMiLCJkaXJ0eSIsImRlc3Ryb3kiLCJub3JtYWxpemVSZWFsbSIsImhhc093blByb3BlcnR5IiwiSU5KRUNUX01BUFBJTkciLCJ0b2dnbGVYaHJJbmplY3QiLCJ0b2dnbGVQcmVpbmplY3QiLCJzaXRlIiwiaXNFeHBvc2VkIiwiZW5hYmxlIiwib25PZmYiLCJvblNlbmRIZWFkZXJzIiwib25IZWFkZXJzUmVjZWl2ZWQiLCJPbkhlYWRlcnNSZWNlaXZlZE9wdGlvbnMiLCJFWFRSQV9IRUFERVJTIiwiaGFzIiwicHJlcGFyZVhockJsb2IiLCJyZXNwb25zZUhlYWRlcnMiLCJkZXRlY3RTdHJpY3RDc3AiLCJmb3JjZUNvbnRlbnRJbmplY3Rpb24iLCJwcmVwYXJlU2NyaXB0cyIsImlzTGF0ZSIsImhhc01vcmUiLCJldmVyeSIsInNjciIsImlzQ29udGVudFJlYWxtIiwidWEiLCJyZWdpc3RlclNjcmlwdERhdGFGRiIsImRhdGFLZXkiLCJyZXBsYWNlV2l0aEZ1bGxXaWR0aEZvcm0iLCJpc0NvbnRlbnQiLCJyZXFzIiwicmVxc1NsaWNlcyIsImNvbmNhdCIsImhhc1JlcXMiLCJpbmplY3RlZENvZGUiLCJtZXRhU3RyIiwiTUVUQUJMT0NLX1JFIiwicyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInJlc29sdmVEYXRhQ29kZVN0ciIsInZtUmVzb2x2ZSIsInZtRGF0YSIsImFsbEZyYW1lcyIsImNvbnRlbnRTY3JpcHRzIiwibWF0Y2hlcyIsInJlYWxtIiwiSU5KRUNUX0NPTlRFTlQiLCJWTV9WRVJJRlkiLCJDT05GSVJNX1VSTF9CQVNFIiwicmVxdWVzdHMiLCJkb3dubG9hZHMiLCJ2ZXJpZnkiLCJ0YWJSZXF1ZXN0cyIsImVuY29kZXIiLCJpc0Rvd25sb2FkUmVxIiwib3ZlcnJpZGVNaW1lVHlwZSIsImZpbGVOYW1lIiwiZXZ0IiwiY3VycmVudCIsImRvd25sb2FkSWQiLCJDb25maXJtSW5zdGFsbCIsImNvbmZpcm1JbnN0YWxsIiwiQ2hlY2tJbnN0YWxsZXJUYWIiLCJIdHRwUmVxdWVzdCIsImV2ZW50c1RvTm90aWZ5IiwiZG93bmxvYWQiLCJmaWxlbmFtZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiaHR0cFJlcXVlc3QiLCJBYm9ydFJlcXVlc3QiLCJhYm9ydCIsImNsZWFyUmVxdWVzdCIsIlJldm9rZUJsb2IiLCJzcGVjaWFsSGVhZGVycyIsIkhlYWRlckluamVjdG9yIiwiYXBpRmlsdGVyIiwiT25CZWZvcmVTZW5kSGVhZGVyc09wdGlvbnMiLCJoZWFkZXJzVG9JbmplY3QiLCJpc1ZtVmVyaWZ5IiwiaXNOb3RDb29raWUiLCJpc1NlbmRhYmxlIiwiaXNTZW5kYWJsZUFub24iLCJSRV9TRVRfQ09PS0lFIiwiUkVfU0VUX0NPT0tJRV9WQUxVRSIsIlJFX1NFVF9DT09LSUVfQVRUUiIsIlNBTUVfU0lURV9NQVAiLCJzdHJpY3QiLCJsYXgiLCJub25lIiwic2V0Q29va2llSW5TdG9yZSIsImhlYWRlclZhbHVlIiwiZXhlYyIsIm9wdFN0ciIsIm9wdCIsImlzSG9zdCIsImxhc3RJbmRleCIsInRvTG93ZXJDYXNlIiwic2FtZVNpdGUiLCJjb29raWVzIiwiZXhwaXJhdGlvbkRhdGUiLCJleHBpcmVzIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJzdG9yZUlkIiwiYXBpRXZlbnRzIiwib25CZWZvcmVTZW5kSGVhZGVycyIsImxpc3RlbmVyIiwicmVxdWVzdEhlYWRlcnMiLCJyZXF1ZXN0SWQiLCJyZXFJZCIsImNvcmVJZCIsIm5vTmF0aXZlQ29va2llIiwiaCIsImVuY29kZVdlYlJlcXVlc3RIZWFkZXIiLCJhZGQiLCJpc0VtcHR5IiwiQ0hVTktfU0laRSIsImJsb2IyY2h1bmsiLCJyZXNwb25zZSIsImJsb2IyYmFzZTY0IiwiYmxvYjJvYmplY3RVcmwiLCJ4aHJDYWxsYmFja1dyYXBwZXIiLCJsYXN0UHJvbWlzZSIsImNvbnRlbnRUeXBlIiwiZGF0YVNpemUiLCJudW1DaHVua3MiLCJyZXNwb25zZVRleHQiLCJzZW50IiwiYmxvYmJlZCIsImNodW5rZWQiLCJnZXRDaHVuayIsImdldFJlc3BvbnNlSGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsImdldFJlc3BvbnNlSGVhZGVyIiwiY2VpbCIsInNob3VsZE5vdGlmeSIsInNob3VsZFNlbmRSZXNwb25zZSIsInJlYWR5U3RhdGUiLCJjYiIsImZpbmFsVXJsIiwicmVzcG9uc2VVUkwiLCJjaHVuayIsInBvcyIsImxhc3QiLCJpc1NwZWNpYWxIZWFkZXIiLCJsb3dlckhlYWRlciIsImluY29nbml0byIsInhoclR5cGUiLCJ2bUhlYWRlcnMiLCJkZWNvZGVCb2R5Iiwic2hvdWxkU2VuZENvb2tpZXMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwibG93ZXJOYW1lIiwidGltZW91dCIsImdldEFsbENvb2tpZVN0b3JlcyIsInRhYklkcyIsImZpcmVmb3giLCJmaXJzdFBhcnR5RG9tYWluIiwiYyIsInNlc3Npb24iLCJvbmxvYWRlbmQiLCJzZW5kIiwid2FzQmxvYiIsInN0cmluZzJ1aW50OGFycmF5IiwiYXRvYiIsInAxIiwiaXNVc2VyU2NyaXB0IiwiY29uZmlybUtleSIsImFjdGl2ZSIsImNhblJlcGxhY2VDdXJUYWIiLCJmZiIsImNvbmZpcm1VcmwiLCJ3aW5kb3dJZCIsIndpbmRvd3MiLCJmb2N1c2VkIiwid2hpdGVsaXN0UmUiLCJSZWdFeHAiLCJibGFja2xpc3RSZSIsInJlc29sdmVWaXJ0dWFsVXJsIiwidmlydHVhbFVybFJlIiwibWF5YmVSZWRpcmVjdFZpcnR1YWxVcmxGRiIsImFwaUV2ZW50IiwiYmluZCIsIm9uQ3JlYXRlZCIsInJlZGlyZWN0VXJsIiwibWF5YmVJbnN0YWxsVXNlckpzIiwiYmluYXJ5VmFsdWUiLCJzdHJpbmcyYnl0ZVN0cmluZyIsImJ1ZmZlcjJzdHJpbmciLCJzdHIiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsIkNhY2hlTmV3U2NyaXB0IiwiTmV3U2NyaXB0IiwiYXJyYXlUeXBlIiwiZGVmYXVsdCIsImRlZmF1bHRUeXBlIiwibWV0YVR5cGVzIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJleGNsdWRlTWF0Y2giLCJyZXNvdXJjZSIsInBhaXIiLCJtZXRhT3B0aW9uYWxUeXBlcyIsImFudGlmZWF0dXJlIiwiY29tcGF0aWJsZSIsImNvbm5lY3QiLCJtZXRhQm9keSIsIl9tYXRjaCIsInJhd0tleSIsInJhd1ZhbHVlIiwia2V5TmFtZSIsImxvY2FsZSIsImNhbWVsS2V5IiwiZyIsInRvVXBwZXJDYXNlIiwibWV0YVR5cGUiLCJvbGRWYWx1ZSIsImhvbWVwYWdlIiwiZGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwibmFtZXNwYWNlIiwibmFtZVVSSSIsImVuY29kZUZpbGVuYW1lIiwicGllY2UiLCJkaWN0Iiwia2V5VmFsIiwiY2FjaGVPckZldGNoIiwiY2hlY2siLCJtYWtlUmF3IiwiaGFuZGxlcnMiLCJjYWNoZU9yRmV0Y2hIYW5kbGVyIiwiZG9GZXRjaCIsImlzTW9kaWZpZWQiLCJwYXRoSWQiLCJ2aWV3IiwiZXh0ZW5zaW9uIiwiZ2V0Vmlld3MiLCJsb2NhdGlvbiIsIm1heWJlSW5XaW5kb3ciLCJjb250YWluZXIiLCJpbnNlcnQiLCJwaW5uZWQiLCJzcmNUYWIiLCJzcmNVcmwiLCJpc0ludGVybmFsIiwiY29va2llU3RvcmVJZCIsImdldENvbnRhaW5lcklkIiwiY2FuT3BlbkluY29nbml0byIsIm5ld1RhYiIsInduZE9wdHMiLCJoYXNQb3MiLCJ3bmQiLCJvcGVuZXJUYWJJZFN1cHBvcnRlZCIsIm9wZW5lclRhYklkIiwiVGFiQ2xvc2UiLCJUYWJGb2N1cyIsInJlYWR5IiwiZGVmaW5lUHJvcGVydGllcyIsIm9zIiwiU0NSSVBUX1RFTVBMQVRFX0VESVRFRCIsIklOSVRJQUxfVEVNUExBVEUiLCJlZGl0ZWQiLCJ0ZW1wbGF0ZSIsImRlZmF1bHRUZW1wbGF0ZSIsIlRlc3RCbGFja2xpc3QiLCJyZXNldEJsYWNrbGlzdCIsIlJFX01BVENIX1BBUlRTIiwiYmxhY2tsaXN0UnVsZXMiLCJibGFja2xpc3QiLCJSRV9IVFRQX09SX0hUVFBTIiwiTUFYX0JMX0NBQ0hFX0xFTkdUSCIsImJsQ2FjaGUiLCJibENhY2hlU2l6ZSIsInRlc3RSdWxlcyIsInJ1bGVzIiwicnVsZUJ1aWxkZXIiLCJtYXRjaGVyIiwidGVzdEdsb2IiLCJhdXRvUmVnIiwidGVzdE1hdGNoIiwibWF0Y2hUZXN0ZXIiLCJiYXRjaCIsIm1hdCIsIm1lcmdlTGlzdHMiLCJpbmMiLCJleGMiLCJleGNNYXQiLCJvayIsInN0cjJSRSIsInJlIiwiYmluZFJFIiwicmVTdHIiLCJyZVRsZFN0ciIsInRzdHIiLCJzdWZmaXgiLCJtYXRjaFNjaGVtZSIsIlJFX1NUUl9BTlkiLCJSRV9TVFJfVExEIiwiaG9zdE1hdGNoZXIiLCJydWxlTEMiLCJ0bGRTdHIiLCJ0bGRTdWZmaXgiLCJwYXRoTWF0Y2hlciIsImlIYXNoIiwiaVF1ZXJ5Iiwic3RyUmUiLCJydWxlUGFydHMiLCJtYXRjaEhvc3QiLCJtYXRjaFBhdGgiLCJwYXJ0cyIsInVwZGF0ZUJsYWNrbGlzdENhY2hlIiwiQ2hlY2tVcGRhdGUiLCJyZXN1bHRzIiwiY2hlY2tBbGxBbmROb3RpZnkiLCJDaGVja1VwZGF0ZUFsbCIsInRvVXBkYXRlIiwibm90ZXMiLCJjaGVja1VwZGF0ZSIsIm9wZW5PcHRpb25zUGFnZSIsInByb2Nlc3NlcyIsImRvQ2hlY2tVcGRhdGUiLCJtc2dPayIsIm1zZ0VyciIsInJlc291cmNlT3B0cyIsImRvd25sb2FkVXBkYXRlIiwiY2hlY2tpbmciLCJjYW5Ob3RpZnkiLCJkb3dubG9hZFVSTCIsInVwZGF0ZVVSTCIsImRldiIsImVycm9yTWVzc2FnZSIsImFubm91bmNlIiwiYWxsb3dlZCIsIm5vdGlmeVVwZGF0ZXMiLCJ1cGRhdGVTY2hlZHVsZWQiLCJHZXRWYWx1ZVN0b3JlIiwic3RvcmVzIiwiU2V0VmFsdWVTdG9yZXMiLCJicm9hZGNhc3RWYWx1ZVN0b3JlcyIsImdyb3VwU3RvcmVzQnlGcmFtZSIsIlVwZGF0ZVZhbHVlIiwidXBkYXRlTGF0ZXIiLCJvblJlcGxhY2VkIiwiYWRkZWRJZCIsInJlbW92ZWRJZCIsIm9wZW5lclRhYnMiLCJzY3JpcHRJZHMiLCJjdXJyZW50Q2FjaGUiLCJkb1VwZGF0ZSIsInZhbHVlU3RvcmVzIiwiZ3JvdXBDYWNoZUJ5RnJhbWUiLCJwYXJ0aWFsIiwidGFiRnJhbWVEYXRhIiwidGFza3MiLCJmcmFtZXMiLCJmcmFtZURhdGEiLCJjYWNoZURhdGEiLCJ0b1NlbmQiLCJzY3JpcHREYXRhIiwiZGF0YUVudHJpZXMiLCJoaXN0b3J5IiwiY2hlY2tUeXBlIiwiaGFuZGxlIiwiZGVmYXVsdFByZXZlbnRlZCIsImluaXRUTEQiLCJleHBvcnRNZXRob2QiLCJ0bGRqcyIsImlzUmVhZHkiLCJnZXREb21haW4iLCJnZXRTdWJkb21haW4iLCJnZXRQdWJsaWNTdWZmaXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztR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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLE1BQU07QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzN0QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNB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QUFDLENBQUNELDRDQUFUO0FBQ0Q7QUFFTSxNQUFNRSxTQUFTLEdBQUdILFlBQVksQ0FBQyxXQUFELENBQTlCO0FBQ0EsTUFBTUksWUFBWSxHQUFHSixZQUFZLENBQUMsY0FBRCxDQUFqQztBQUNBLE1BQU1LLGVBQWUsR0FBR0wsWUFBWSxDQUFDLGlCQUFELENBQXBDLEMiLCJmaWxlIjoiYmFja2dyb3VuZC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJiYWNrZ3JvdW5kL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvYmFja2dyb3VuZC9pbmRleC5qc1wiLFwicHVibGljL2xpYi90bGRqc1wiLFwiY29tbW9uXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyohIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZSB2MS40LjEgYnkgQG1hdGhpYXMgKi9cbjsoZnVuY3Rpb24ocm9vdCkge1xuXG5cdC8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZXMgKi9cblx0dmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJlxuXHRcdCFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cdHZhciBmcmVlTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiZcblx0XHQhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblx0dmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcblx0aWYgKFxuXHRcdGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8XG5cdFx0ZnJlZUdsb2JhbC53aW5kb3cgPT09IGZyZWVHbG9iYWwgfHxcblx0XHRmcmVlR2xvYmFsLnNlbGYgPT09IGZyZWVHbG9iYWxcblx0KSB7XG5cdFx0cm9vdCA9IGZyZWVHbG9iYWw7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGBwdW55Y29kZWAgb2JqZWN0LlxuXHQgKiBAbmFtZSBwdW55Y29kZVxuXHQgKiBAdHlwZSBPYmplY3Rcblx0ICovXG5cdHZhciBwdW55Y29kZSxcblxuXHQvKiogSGlnaGVzdCBwb3NpdGl2ZSBzaWduZWQgMzItYml0IGZsb2F0IHZhbHVlICovXG5cdG1heEludCA9IDIxNDc0ODM2NDcsIC8vIGFrYS4gMHg3RkZGRkZGRiBvciAyXjMxLTFcblxuXHQvKiogQm9vdHN0cmluZyBwYXJhbWV0ZXJzICovXG5cdGJhc2UgPSAzNixcblx0dE1pbiA9IDEsXG5cdHRNYXggPSAyNixcblx0c2tldyA9IDM4LFxuXHRkYW1wID0gNzAwLFxuXHRpbml0aWFsQmlhcyA9IDcyLFxuXHRpbml0aWFsTiA9IDEyOCwgLy8gMHg4MFxuXHRkZWxpbWl0ZXIgPSAnLScsIC8vICdcXHgyRCdcblxuXHQvKiogUmVndWxhciBleHByZXNzaW9ucyAqL1xuXHRyZWdleFB1bnljb2RlID0gL154bi0tLyxcblx0cmVnZXhOb25BU0NJSSA9IC9bXlxceDIwLVxceDdFXS8sIC8vIHVucHJpbnRhYmxlIEFTQ0lJIGNoYXJzICsgbm9uLUFTQ0lJIGNoYXJzXG5cdHJlZ2V4U2VwYXJhdG9ycyA9IC9bXFx4MkVcXHUzMDAyXFx1RkYwRVxcdUZGNjFdL2csIC8vIFJGQyAzNDkwIHNlcGFyYXRvcnNcblxuXHQvKiogRXJyb3IgbWVzc2FnZXMgKi9cblx0ZXJyb3JzID0ge1xuXHRcdCdvdmVyZmxvdyc6ICdPdmVyZmxvdzogaW5wdXQgbmVlZHMgd2lkZXIgaW50ZWdlcnMgdG8gcHJvY2VzcycsXG5cdFx0J25vdC1iYXNpYyc6ICdJbGxlZ2FsIGlucHV0ID49IDB4ODAgKG5vdCBhIGJhc2ljIGNvZGUgcG9pbnQpJyxcblx0XHQnaW52YWxpZC1pbnB1dCc6ICdJbnZhbGlkIGlucHV0J1xuXHR9LFxuXG5cdC8qKiBDb252ZW5pZW5jZSBzaG9ydGN1dHMgKi9cblx0YmFzZU1pbnVzVE1pbiA9IGJhc2UgLSB0TWluLFxuXHRmbG9vciA9IE1hdGguZmxvb3IsXG5cdHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUsXG5cblx0LyoqIFRlbXBvcmFyeSB2YXJpYWJsZSAqL1xuXHRrZXk7XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBlcnJvciB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgZXJyb3IgdHlwZS5cblx0ICogQHJldHVybnMge0Vycm9yfSBUaHJvd3MgYSBgUmFuZ2VFcnJvcmAgd2l0aCB0aGUgYXBwbGljYWJsZSBlcnJvciBtZXNzYWdlLlxuXHQgKi9cblx0ZnVuY3Rpb24gZXJyb3IodHlwZSkge1xuXHRcdHRocm93IG5ldyBSYW5nZUVycm9yKGVycm9yc1t0eXBlXSk7XG5cdH1cblxuXHQvKipcblx0ICogQSBnZW5lcmljIGBBcnJheSNtYXBgIHV0aWxpdHkgZnVuY3Rpb24uXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeSBhcnJheVxuXHQgKiBpdGVtLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IGFycmF5IG9mIHZhbHVlcyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBtYXAoYXJyYXksIGZuKSB7XG5cdFx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0d2hpbGUgKGxlbmd0aC0tKSB7XG5cdFx0XHRyZXN1bHRbbGVuZ3RoXSA9IGZuKGFycmF5W2xlbmd0aF0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgc2ltcGxlIGBBcnJheSNtYXBgLWxpa2Ugd3JhcHBlciB0byB3b3JrIHdpdGggZG9tYWluIG5hbWUgc3RyaW5ncyBvciBlbWFpbFxuXHQgKiBhZGRyZXNzZXMuXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkb21haW4gVGhlIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeVxuXHQgKiBjaGFyYWN0ZXIuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBuZXcgc3RyaW5nIG9mIGNoYXJhY3RlcnMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrXG5cdCAqIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwRG9tYWluKHN0cmluZywgZm4pIHtcblx0XHR2YXIgcGFydHMgPSBzdHJpbmcuc3BsaXQoJ0AnKTtcblx0XHR2YXIgcmVzdWx0ID0gJyc7XG5cdFx0aWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdC8vIEluIGVtYWlsIGFkZHJlc3Nlcywgb25seSB0aGUgZG9tYWluIG5hbWUgc2hvdWxkIGJlIHB1bnljb2RlZC4gTGVhdmVcblx0XHRcdC8vIHRoZSBsb2NhbCBwYXJ0IChpLmUuIGV2ZXJ5dGhpbmcgdXAgdG8gYEBgKSBpbnRhY3QuXG5cdFx0XHRyZXN1bHQgPSBwYXJ0c1swXSArICdAJztcblx0XHRcdHN0cmluZyA9IHBhcnRzWzFdO1xuXHRcdH1cblx0XHQvLyBBdm9pZCBgc3BsaXQocmVnZXgpYCBmb3IgSUU4IGNvbXBhdGliaWxpdHkuIFNlZSAjMTcuXG5cdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocmVnZXhTZXBhcmF0b3JzLCAnXFx4MkUnKTtcblx0XHR2YXIgbGFiZWxzID0gc3RyaW5nLnNwbGl0KCcuJyk7XG5cdFx0dmFyIGVuY29kZWQgPSBtYXAobGFiZWxzLCBmbikuam9pbignLicpO1xuXHRcdHJldHVybiByZXN1bHQgKyBlbmNvZGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgbnVtZXJpYyBjb2RlIHBvaW50cyBvZiBlYWNoIFVuaWNvZGVcblx0ICogY2hhcmFjdGVyIGluIHRoZSBzdHJpbmcuIFdoaWxlIEphdmFTY3JpcHQgdXNlcyBVQ1MtMiBpbnRlcm5hbGx5LFxuXHQgKiB0aGlzIGZ1bmN0aW9uIHdpbGwgY29udmVydCBhIHBhaXIgb2Ygc3Vycm9nYXRlIGhhbHZlcyAoZWFjaCBvZiB3aGljaFxuXHQgKiBVQ1MtMiBleHBvc2VzIGFzIHNlcGFyYXRlIGNoYXJhY3RlcnMpIGludG8gYSBzaW5nbGUgY29kZSBwb2ludCxcblx0ICogbWF0Y2hpbmcgVVRGLTE2LlxuXHQgKiBAc2VlIGBwdW55Y29kZS51Y3MyLmVuY29kZWBcblx0ICogQHNlZSA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmc+XG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGRlY29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBVbmljb2RlIGlucHV0IHN0cmluZyAoVUNTLTIpLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBuZXcgYXJyYXkgb2YgY29kZSBwb2ludHMuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgY291bnRlciA9IDAsXG5cdFx0ICAgIGxlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG5cdFx0ICAgIHZhbHVlLFxuXHRcdCAgICBleHRyYTtcblx0XHR3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0dmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0aWYgKHZhbHVlID49IDB4RDgwMCAmJiB2YWx1ZSA8PSAweERCRkYgJiYgY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0XHQvLyBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXJcblx0XHRcdFx0ZXh0cmEgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0XHRpZiAoKGV4dHJhICYgMHhGQzAwKSA9PSAweERDMDApIHsgLy8gbG93IHN1cnJvZ2F0ZVxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKCgodmFsdWUgJiAweDNGRikgPDwgMTApICsgKGV4dHJhICYgMHgzRkYpICsgMHgxMDAwMCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gdW5tYXRjaGVkIHN1cnJvZ2F0ZTsgb25seSBhcHBlbmQgdGhpcyBjb2RlIHVuaXQsIGluIGNhc2UgdGhlIG5leHRcblx0XHRcdFx0XHQvLyBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXJcblx0XHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0Y291bnRlci0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHN0cmluZyBiYXNlZCBvbiBhbiBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAc2VlIGBwdW55Y29kZS51Y3MyLmRlY29kZWBcblx0ICogQG1lbWJlck9mIHB1bnljb2RlLnVjczJcblx0ICogQG5hbWUgZW5jb2RlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGNvZGVQb2ludHMgVGhlIGFycmF5IG9mIG51bWVyaWMgY29kZSBwb2ludHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBuZXcgVW5pY29kZSBzdHJpbmcgKFVDUy0yKS5cblx0ICovXG5cdGZ1bmN0aW9uIHVjczJlbmNvZGUoYXJyYXkpIHtcblx0XHRyZXR1cm4gbWFwKGFycmF5LCBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdFx0aWYgKHZhbHVlID4gMHhGRkZGKSB7XG5cdFx0XHRcdHZhbHVlIC09IDB4MTAwMDA7XG5cdFx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuXHRcdFx0XHR2YWx1ZSA9IDB4REMwMCB8IHZhbHVlICYgMHgzRkY7XG5cdFx0XHR9XG5cdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlKTtcblx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBiYXNpYyBjb2RlIHBvaW50IGludG8gYSBkaWdpdC9pbnRlZ2VyLlxuXHQgKiBAc2VlIGBkaWdpdFRvQmFzaWMoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGNvZGVQb2ludCBUaGUgYmFzaWMgbnVtZXJpYyBjb2RlIHBvaW50IHZhbHVlLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQgKGZvciB1c2UgaW5cblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpbiB0aGUgcmFuZ2UgYDBgIHRvIGBiYXNlIC0gMWAsIG9yIGBiYXNlYCBpZlxuXHQgKiB0aGUgY29kZSBwb2ludCBkb2VzIG5vdCByZXByZXNlbnQgYSB2YWx1ZS5cblx0ICovXG5cdGZ1bmN0aW9uIGJhc2ljVG9EaWdpdChjb2RlUG9pbnQpIHtcblx0XHRpZiAoY29kZVBvaW50IC0gNDggPCAxMCkge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDIyO1xuXHRcdH1cblx0XHRpZiAoY29kZVBvaW50IC0gNjUgPCAyNikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDY1O1xuXHRcdH1cblx0XHRpZiAoY29kZVBvaW50IC0gOTcgPCAyNikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDk3O1xuXHRcdH1cblx0XHRyZXR1cm4gYmFzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIGRpZ2l0L2ludGVnZXIgaW50byBhIGJhc2ljIGNvZGUgcG9pbnQuXG5cdCAqIEBzZWUgYGJhc2ljVG9EaWdpdCgpYFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gZGlnaXQgVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYmFzaWMgY29kZSBwb2ludCB3aG9zZSB2YWx1ZSAod2hlbiB1c2VkIGZvclxuXHQgKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGlzIGBkaWdpdGAsIHdoaWNoIG5lZWRzIHRvIGJlIGluIHRoZSByYW5nZVxuXHQgKiBgMGAgdG8gYGJhc2UgLSAxYC4gSWYgYGZsYWdgIGlzIG5vbi16ZXJvLCB0aGUgdXBwZXJjYXNlIGZvcm0gaXNcblx0ICogdXNlZDsgZWxzZSwgdGhlIGxvd2VyY2FzZSBmb3JtIGlzIHVzZWQuIFRoZSBiZWhhdmlvciBpcyB1bmRlZmluZWRcblx0ICogaWYgYGZsYWdgIGlzIG5vbi16ZXJvIGFuZCBgZGlnaXRgIGhhcyBubyB1cHBlcmNhc2UgZm9ybS5cblx0ICovXG5cdGZ1bmN0aW9uIGRpZ2l0VG9CYXNpYyhkaWdpdCwgZmxhZykge1xuXHRcdC8vICAwLi4yNSBtYXAgdG8gQVNDSUkgYS4ueiBvciBBLi5aXG5cdFx0Ly8gMjYuLjM1IG1hcCB0byBBU0NJSSAwLi45XG5cdFx0cmV0dXJuIGRpZ2l0ICsgMjIgKyA3NSAqIChkaWdpdCA8IDI2KSAtICgoZmxhZyAhPSAwKSA8PCA1KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCaWFzIGFkYXB0YXRpb24gZnVuY3Rpb24gYXMgcGVyIHNlY3Rpb24gMy40IG9mIFJGQyAzNDkyLlxuXHQgKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzQ5MiNzZWN0aW9uLTMuNFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gYWRhcHQoZGVsdGEsIG51bVBvaW50cywgZmlyc3RUaW1lKSB7XG5cdFx0dmFyIGsgPSAwO1xuXHRcdGRlbHRhID0gZmlyc3RUaW1lID8gZmxvb3IoZGVsdGEgLyBkYW1wKSA6IGRlbHRhID4+IDE7XG5cdFx0ZGVsdGEgKz0gZmxvb3IoZGVsdGEgLyBudW1Qb2ludHMpO1xuXHRcdGZvciAoLyogbm8gaW5pdGlhbGl6YXRpb24gKi87IGRlbHRhID4gYmFzZU1pbnVzVE1pbiAqIHRNYXggPj4gMTsgayArPSBiYXNlKSB7XG5cdFx0XHRkZWx0YSA9IGZsb29yKGRlbHRhIC8gYmFzZU1pbnVzVE1pbik7XG5cdFx0fVxuXHRcdHJldHVybiBmbG9vcihrICsgKGJhc2VNaW51c1RNaW4gKyAxKSAqIGRlbHRhIC8gKGRlbHRhICsgc2tldykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scyB0byBhIHN0cmluZyBvZiBVbmljb2RlXG5cdCAqIHN5bWJvbHMuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICovXG5cdGZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHRcdC8vIERvbid0IHVzZSBVQ1MtMlxuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGgsXG5cdFx0ICAgIG91dCxcblx0XHQgICAgaSA9IDAsXG5cdFx0ICAgIG4gPSBpbml0aWFsTixcblx0XHQgICAgYmlhcyA9IGluaXRpYWxCaWFzLFxuXHRcdCAgICBiYXNpYyxcblx0XHQgICAgaixcblx0XHQgICAgaW5kZXgsXG5cdFx0ICAgIG9sZGksXG5cdFx0ICAgIHcsXG5cdFx0ICAgIGssXG5cdFx0ICAgIGRpZ2l0LFxuXHRcdCAgICB0LFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgYmFzZU1pbnVzVDtcblxuXHRcdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHM6IGxldCBgYmFzaWNgIGJlIHRoZSBudW1iZXIgb2YgaW5wdXQgY29kZVxuXHRcdC8vIHBvaW50cyBiZWZvcmUgdGhlIGxhc3QgZGVsaW1pdGVyLCBvciBgMGAgaWYgdGhlcmUgaXMgbm9uZSwgdGhlbiBjb3B5XG5cdFx0Ly8gdGhlIGZpcnN0IGJhc2ljIGNvZGUgcG9pbnRzIHRvIHRoZSBvdXRwdXQuXG5cblx0XHRiYXNpYyA9IGlucHV0Lmxhc3RJbmRleE9mKGRlbGltaXRlcik7XG5cdFx0aWYgKGJhc2ljIDwgMCkge1xuXHRcdFx0YmFzaWMgPSAwO1xuXHRcdH1cblxuXHRcdGZvciAoaiA9IDA7IGogPCBiYXNpYzsgKytqKSB7XG5cdFx0XHQvLyBpZiBpdCdzIG5vdCBhIGJhc2ljIGNvZGUgcG9pbnRcblx0XHRcdGlmIChpbnB1dC5jaGFyQ29kZUF0KGopID49IDB4ODApIHtcblx0XHRcdFx0ZXJyb3IoJ25vdC1iYXNpYycpO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0LnB1c2goaW5wdXQuY2hhckNvZGVBdChqKSk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFpbiBkZWNvZGluZyBsb29wOiBzdGFydCBqdXN0IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlciBpZiBhbnkgYmFzaWMgY29kZVxuXHRcdC8vIHBvaW50cyB3ZXJlIGNvcGllZDsgc3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvdGhlcndpc2UuXG5cblx0XHRmb3IgKGluZGV4ID0gYmFzaWMgPiAwID8gYmFzaWMgKyAxIDogMDsgaW5kZXggPCBpbnB1dExlbmd0aDsgLyogbm8gZmluYWwgZXhwcmVzc2lvbiAqLykge1xuXG5cdFx0XHQvLyBgaW5kZXhgIGlzIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gYmUgY29uc3VtZWQuXG5cdFx0XHQvLyBEZWNvZGUgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlciBpbnRvIGBkZWx0YWAsXG5cdFx0XHQvLyB3aGljaCBnZXRzIGFkZGVkIHRvIGBpYC4gVGhlIG92ZXJmbG93IGNoZWNraW5nIGlzIGVhc2llclxuXHRcdFx0Ly8gaWYgd2UgaW5jcmVhc2UgYGlgIGFzIHdlIGdvLCB0aGVuIHN1YnRyYWN0IG9mZiBpdHMgc3RhcnRpbmdcblx0XHRcdC8vIHZhbHVlIGF0IHRoZSBlbmQgdG8gb2J0YWluIGBkZWx0YWAuXG5cdFx0XHRmb3IgKG9sZGkgPSBpLCB3ID0gMSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cblx0XHRcdFx0aWYgKGluZGV4ID49IGlucHV0TGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ2ludmFsaWQtaW5wdXQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRpZ2l0ID0gYmFzaWNUb0RpZ2l0KGlucHV0LmNoYXJDb2RlQXQoaW5kZXgrKykpO1xuXG5cdFx0XHRcdGlmIChkaWdpdCA+PSBiYXNlIHx8IGRpZ2l0ID4gZmxvb3IoKG1heEludCAtIGkpIC8gdykpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgKz0gZGlnaXQgKiB3O1xuXHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPCB0KSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdGlmICh3ID4gZmxvb3IobWF4SW50IC8gYmFzZU1pbnVzVCkpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHcgKj0gYmFzZU1pbnVzVDtcblxuXHRcdFx0fVxuXG5cdFx0XHRvdXQgPSBvdXRwdXQubGVuZ3RoICsgMTtcblx0XHRcdGJpYXMgPSBhZGFwdChpIC0gb2xkaSwgb3V0LCBvbGRpID09IDApO1xuXG5cdFx0XHQvLyBgaWAgd2FzIHN1cHBvc2VkIHRvIHdyYXAgYXJvdW5kIGZyb20gYG91dGAgdG8gYDBgLFxuXHRcdFx0Ly8gaW5jcmVtZW50aW5nIGBuYCBlYWNoIHRpbWUsIHNvIHdlJ2xsIGZpeCB0aGF0IG5vdzpcblx0XHRcdGlmIChmbG9vcihpIC8gb3V0KSA+IG1heEludCAtIG4pIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdG4gKz0gZmxvb3IoaSAvIG91dCk7XG5cdFx0XHRpICU9IG91dDtcblxuXHRcdFx0Ly8gSW5zZXJ0IGBuYCBhdCBwb3NpdGlvbiBgaWAgb2YgdGhlIG91dHB1dFxuXHRcdFx0b3V0cHV0LnNwbGljZShpKyssIDAsIG4pO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVjczJlbmNvZGUob3V0cHV0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMgKGUuZy4gYSBkb21haW4gbmFtZSBsYWJlbCkgdG8gYVxuXHQgKiBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBlbmNvZGUoaW5wdXQpIHtcblx0XHR2YXIgbixcblx0XHQgICAgZGVsdGEsXG5cdFx0ICAgIGhhbmRsZWRDUENvdW50LFxuXHRcdCAgICBiYXNpY0xlbmd0aCxcblx0XHQgICAgYmlhcyxcblx0XHQgICAgaixcblx0XHQgICAgbSxcblx0XHQgICAgcSxcblx0XHQgICAgayxcblx0XHQgICAgdCxcblx0XHQgICAgY3VycmVudFZhbHVlLFxuXHRcdCAgICBvdXRwdXQgPSBbXSxcblx0XHQgICAgLyoqIGBpbnB1dExlbmd0aGAgd2lsbCBob2xkIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgaW4gYGlucHV0YC4gKi9cblx0XHQgICAgaW5wdXRMZW5ndGgsXG5cdFx0ICAgIC8qKiBDYWNoZWQgY2FsY3VsYXRpb24gcmVzdWx0cyAqL1xuXHRcdCAgICBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsXG5cdFx0ICAgIGJhc2VNaW51c1QsXG5cdFx0ICAgIHFNaW51c1Q7XG5cblx0XHQvLyBDb252ZXJ0IHRoZSBpbnB1dCBpbiBVQ1MtMiB0byBVbmljb2RlXG5cdFx0aW5wdXQgPSB1Y3MyZGVjb2RlKGlucHV0KTtcblxuXHRcdC8vIENhY2hlIHRoZSBsZW5ndGhcblx0XHRpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuXHRcdC8vIEluaXRpYWxpemUgdGhlIHN0YXRlXG5cdFx0biA9IGluaXRpYWxOO1xuXHRcdGRlbHRhID0gMDtcblx0XHRiaWFzID0gaW5pdGlhbEJpYXM7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzXG5cdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IDB4ODApIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGN1cnJlbnRWYWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGhhbmRsZWRDUENvdW50ID0gYmFzaWNMZW5ndGggPSBvdXRwdXQubGVuZ3RoO1xuXG5cdFx0Ly8gYGhhbmRsZWRDUENvdW50YCBpcyB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIGhhbmRsZWQ7XG5cdFx0Ly8gYGJhc2ljTGVuZ3RoYCBpcyB0aGUgbnVtYmVyIG9mIGJhc2ljIGNvZGUgcG9pbnRzLlxuXG5cdFx0Ly8gRmluaXNoIHRoZSBiYXNpYyBzdHJpbmcgLSBpZiBpdCBpcyBub3QgZW1wdHkgLSB3aXRoIGEgZGVsaW1pdGVyXG5cdFx0aWYgKGJhc2ljTGVuZ3RoKSB7XG5cdFx0XHRvdXRwdXQucHVzaChkZWxpbWl0ZXIpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZW5jb2RpbmcgbG9vcDpcblx0XHR3aGlsZSAoaGFuZGxlZENQQ291bnQgPCBpbnB1dExlbmd0aCkge1xuXG5cdFx0XHQvLyBBbGwgbm9uLWJhc2ljIGNvZGUgcG9pbnRzIDwgbiBoYXZlIGJlZW4gaGFuZGxlZCBhbHJlYWR5LiBGaW5kIHRoZSBuZXh0XG5cdFx0XHQvLyBsYXJnZXIgb25lOlxuXHRcdFx0Zm9yIChtID0gbWF4SW50LCBqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPj0gbiAmJiBjdXJyZW50VmFsdWUgPCBtKSB7XG5cdFx0XHRcdFx0bSA9IGN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbmNyZWFzZSBgZGVsdGFgIGVub3VnaCB0byBhZHZhbmNlIHRoZSBkZWNvZGVyJ3MgPG4saT4gc3RhdGUgdG8gPG0sMD4sXG5cdFx0XHQvLyBidXQgZ3VhcmQgYWdhaW5zdCBvdmVyZmxvd1xuXHRcdFx0aGFuZGxlZENQQ291bnRQbHVzT25lID0gaGFuZGxlZENQQ291bnQgKyAxO1xuXHRcdFx0aWYgKG0gLSBuID4gZmxvb3IoKG1heEludCAtIGRlbHRhKSAvIGhhbmRsZWRDUENvdW50UGx1c09uZSkpIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGRlbHRhICs9IChtIC0gbikgKiBoYW5kbGVkQ1BDb3VudFBsdXNPbmU7XG5cdFx0XHRuID0gbTtcblxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IG4gJiYgKytkZWx0YSA+IG1heEludCkge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PSBuKSB7XG5cdFx0XHRcdFx0Ly8gUmVwcmVzZW50IGRlbHRhIGFzIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXJcblx0XHRcdFx0XHRmb3IgKHEgPSBkZWx0YSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cdFx0XHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblx0XHRcdFx0XHRcdGlmIChxIDwgdCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHFNaW51c1QgPSBxIC0gdDtcblx0XHRcdFx0XHRcdGJhc2VNaW51c1QgPSBiYXNlIC0gdDtcblx0XHRcdFx0XHRcdG91dHB1dC5wdXNoKFxuXHRcdFx0XHRcdFx0XHRzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHQgKyBxTWludXNUICUgYmFzZU1pbnVzVCwgMCkpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cSA9IGZsb29yKHFNaW51c1QgLyBiYXNlTWludXNUKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHEsIDApKSk7XG5cdFx0XHRcdFx0YmlhcyA9IGFkYXB0KGRlbHRhLCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsIGhhbmRsZWRDUENvdW50ID09IGJhc2ljTGVuZ3RoKTtcblx0XHRcdFx0XHRkZWx0YSA9IDA7XG5cdFx0XHRcdFx0KytoYW5kbGVkQ1BDb3VudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQrK2RlbHRhO1xuXHRcdFx0KytuO1xuXG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzc1xuXHQgKiB0byBVbmljb2RlLiBPbmx5IHRoZSBQdW55Y29kZWQgcGFydHMgb2YgdGhlIGlucHV0IHdpbGwgYmUgY29udmVydGVkLCBpLmUuXG5cdCAqIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IG9uIGEgc3RyaW5nIHRoYXQgaGFzIGFscmVhZHkgYmVlblxuXHQgKiBjb252ZXJ0ZWQgdG8gVW5pY29kZS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGVkIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogY29udmVydCB0byBVbmljb2RlLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgVW5pY29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gUHVueWNvZGVcblx0ICogc3RyaW5nLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9Vbmljb2RlKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhQdW55Y29kZS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyBkZWNvZGUoc3RyaW5nLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgVW5pY29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzcyB0b1xuXHQgKiBQdW55Y29kZS4gT25seSB0aGUgbm9uLUFTQ0lJIHBhcnRzIG9mIHRoZSBkb21haW4gbmFtZSB3aWxsIGJlIGNvbnZlcnRlZCxcblx0ICogaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQncyBhbHJlYWR5IGluXG5cdCAqIEFTQ0lJLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvIGNvbnZlcnQsIGFzIGFcblx0ICogVW5pY29kZSBzdHJpbmcuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBQdW55Y29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gZG9tYWluIG5hbWUgb3Jcblx0ICogZW1haWwgYWRkcmVzcy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvQVNDSUkoaW5wdXQpIHtcblx0XHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdHJldHVybiByZWdleE5vbkFTQ0lJLnRlc3Qoc3RyaW5nKVxuXHRcdFx0XHQ/ICd4bi0tJyArIGVuY29kZShzdHJpbmcpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqIERlZmluZSB0aGUgcHVibGljIEFQSSAqL1xuXHRwdW55Y29kZSA9IHtcblx0XHQvKipcblx0XHQgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgUHVueWNvZGUuanMgdmVyc2lvbiBudW1iZXIuXG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0J3ZlcnNpb24nOiAnMS40LjEnLFxuXHRcdC8qKlxuXHRcdCAqIEFuIG9iamVjdCBvZiBtZXRob2RzIHRvIGNvbnZlcnQgZnJvbSBKYXZhU2NyaXB0J3MgaW50ZXJuYWwgY2hhcmFjdGVyXG5cdFx0ICogcmVwcmVzZW50YXRpb24gKFVDUy0yKSB0byBVbmljb2RlIGNvZGUgcG9pbnRzLCBhbmQgYmFjay5cblx0XHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0XHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0XHQgKiBAdHlwZSBPYmplY3Rcblx0XHQgKi9cblx0XHQndWNzMic6IHtcblx0XHRcdCdkZWNvZGUnOiB1Y3MyZGVjb2RlLFxuXHRcdFx0J2VuY29kZSc6IHVjczJlbmNvZGVcblx0XHR9LFxuXHRcdCdkZWNvZGUnOiBkZWNvZGUsXG5cdFx0J2VuY29kZSc6IGVuY29kZSxcblx0XHQndG9BU0NJSSc6IHRvQVNDSUksXG5cdFx0J3RvVW5pY29kZSc6IHRvVW5pY29kZVxuXHR9O1xuXG5cdC8qKiBFeHBvc2UgYHB1bnljb2RlYCAqL1xuXHQvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBzcGVjaWZpYyBjb25kaXRpb24gcGF0dGVybnNcblx0Ly8gbGlrZSB0aGUgZm9sbG93aW5nOlxuXHRpZiAoXG5cdFx0dHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiZcblx0XHRkZWZpbmUuYW1kXG5cdCkge1xuXHRcdGRlZmluZSgncHVueWNvZGUnLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBwdW55Y29kZTtcblx0XHR9KTtcblx0fSBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlKSB7XG5cdFx0aWYgKG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzKSB7XG5cdFx0XHQvLyBpbiBOb2RlLmpzLCBpby5qcywgb3IgUmluZ29KUyB2MC44LjArXG5cdFx0XHRmcmVlTW9kdWxlLmV4cG9ydHMgPSBwdW55Y29kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cblx0XHRcdGZvciAoa2V5IGluIHB1bnljb2RlKSB7XG5cdFx0XHRcdHB1bnljb2RlLmhhc093blByb3BlcnR5KGtleSkgJiYgKGZyZWVFeHBvcnRzW2tleV0gPSBwdW55Y29kZVtrZXldKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW4gUmhpbm8gb3IgYSB3ZWIgYnJvd3NlclxuXHRcdHJvb3QucHVueWNvZGUgPSBwdW55Y29kZTtcblx0fVxuXG59KHRoaXMpKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIElmIG9iai5oYXNPd25Qcm9wZXJ0eSBoYXMgYmVlbiBvdmVycmlkZGVuLCB0aGVuIGNhbGxpbmdcbi8vIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSB3aWxsIGJyZWFrLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MDdcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocXMsIHNlcCwgZXEsIG9wdGlvbnMpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIHZhciBvYmogPSB7fTtcblxuICBpZiAodHlwZW9mIHFzICE9PSAnc3RyaW5nJyB8fCBxcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IC9cXCsvZztcbiAgcXMgPSBxcy5zcGxpdChzZXApO1xuXG4gIHZhciBtYXhLZXlzID0gMTAwMDtcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubWF4S2V5cyA9PT0gJ251bWJlcicpIHtcbiAgICBtYXhLZXlzID0gb3B0aW9ucy5tYXhLZXlzO1xuICB9XG5cbiAgdmFyIGxlbiA9IHFzLmxlbmd0aDtcbiAgLy8gbWF4S2V5cyA8PSAwIG1lYW5zIHRoYXQgd2Ugc2hvdWxkIG5vdCBsaW1pdCBrZXlzIGNvdW50XG4gIGlmIChtYXhLZXlzID4gMCAmJiBsZW4gPiBtYXhLZXlzKSB7XG4gICAgbGVuID0gbWF4S2V5cztcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgeCA9IHFzW2ldLnJlcGxhY2UocmVnZXhwLCAnJTIwJyksXG4gICAgICAgIGlkeCA9IHguaW5kZXhPZihlcSksXG4gICAgICAgIGtzdHIsIHZzdHIsIGssIHY7XG5cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGtzdHIgPSB4LnN1YnN0cigwLCBpZHgpO1xuICAgICAgdnN0ciA9IHguc3Vic3RyKGlkeCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrc3RyID0geDtcbiAgICAgIHZzdHIgPSAnJztcbiAgICB9XG5cbiAgICBrID0gZGVjb2RlVVJJQ29tcG9uZW50KGtzdHIpO1xuICAgIHYgPSBkZWNvZGVVUklDb21wb25lbnQodnN0cik7XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5KG9iaiwgaykpIHtcbiAgICAgIG9ialtrXSA9IHY7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgIG9ialtrXS5wdXNoKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba10gPSBbb2JqW2tdLCB2XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5UHJpbWl0aXZlID0gZnVuY3Rpb24odikge1xuICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2O1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdiA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIGlzRmluaXRlKHYpID8gdiA6ICcnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHNlcCwgZXEsIG5hbWUpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICBvYmogPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbWFwKG9iamVjdEtleXMob2JqKSwgZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrKSkgKyBlcTtcbiAgICAgIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAgcmV0dXJuIG1hcChvYmpba10sIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKHYpKTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmpba10pKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG5cbiAgfVxuXG4gIGlmICghbmFtZSkgcmV0dXJuICcnO1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShuYW1lKSkgKyBlcSArXG4gICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9iaikpO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbmZ1bmN0aW9uIG1hcCAoeHMsIGYpIHtcbiAgaWYgKHhzLm1hcCkgcmV0dXJuIHhzLm1hcChmKTtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzLnB1c2goZih4c1tpXSwgaSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgcmVzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5kZWNvZGUgPSBleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHB1bnljb2RlID0gcmVxdWlyZSgncHVueWNvZGUnKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmV4cG9ydHMucGFyc2UgPSB1cmxQYXJzZTtcbmV4cG9ydHMucmVzb2x2ZSA9IHVybFJlc29sdmU7XG5leHBvcnRzLnJlc29sdmVPYmplY3QgPSB1cmxSZXNvbHZlT2JqZWN0O1xuZXhwb3J0cy5mb3JtYXQgPSB1cmxGb3JtYXQ7XG5cbmV4cG9ydHMuVXJsID0gVXJsO1xuXG5mdW5jdGlvbiBVcmwoKSB7XG4gIHRoaXMucHJvdG9jb2wgPSBudWxsO1xuICB0aGlzLnNsYXNoZXMgPSBudWxsO1xuICB0aGlzLmF1dGggPSBudWxsO1xuICB0aGlzLmhvc3QgPSBudWxsO1xuICB0aGlzLnBvcnQgPSBudWxsO1xuICB0aGlzLmhvc3RuYW1lID0gbnVsbDtcbiAgdGhpcy5oYXNoID0gbnVsbDtcbiAgdGhpcy5zZWFyY2ggPSBudWxsO1xuICB0aGlzLnF1ZXJ5ID0gbnVsbDtcbiAgdGhpcy5wYXRobmFtZSA9IG51bGw7XG4gIHRoaXMucGF0aCA9IG51bGw7XG4gIHRoaXMuaHJlZiA9IG51bGw7XG59XG5cbi8vIFJlZmVyZW5jZTogUkZDIDM5ODYsIFJGQyAxODA4LCBSRkMgMjM5NlxuXG4vLyBkZWZpbmUgdGhlc2UgaGVyZSBzbyBhdCBsZWFzdCB0aGV5IG9ubHkgaGF2ZSB0byBiZVxuLy8gY29tcGlsZWQgb25jZSBvbiB0aGUgZmlyc3QgbW9kdWxlIGxvYWQuXG52YXIgcHJvdG9jb2xQYXR0ZXJuID0gL14oW2EtejAtOS4rLV0rOikvaSxcbiAgICBwb3J0UGF0dGVybiA9IC86WzAtOV0qJC8sXG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIGEgc2ltcGxlIHBhdGggVVJMXG4gICAgc2ltcGxlUGF0aFBhdHRlcm4gPSAvXihcXC9cXC8/KD8hXFwvKVteXFw/XFxzXSopKFxcP1teXFxzXSopPyQvLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgcmVzZXJ2ZWQgZm9yIGRlbGltaXRpbmcgVVJMcy5cbiAgICAvLyBXZSBhY3R1YWxseSBqdXN0IGF1dG8tZXNjYXBlIHRoZXNlLlxuICAgIGRlbGltcyA9IFsnPCcsICc+JywgJ1wiJywgJ2AnLCAnICcsICdcXHInLCAnXFxuJywgJ1xcdCddLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgZm9yIHZhcmlvdXMgcmVhc29ucy5cbiAgICB1bndpc2UgPSBbJ3snLCAnfScsICd8JywgJ1xcXFwnLCAnXicsICdgJ10uY29uY2F0KGRlbGltcyksXG5cbiAgICAvLyBBbGxvd2VkIGJ5IFJGQ3MsIGJ1dCBjYXVzZSBvZiBYU1MgYXR0YWNrcy4gIEFsd2F5cyBlc2NhcGUgdGhlc2UuXG4gICAgYXV0b0VzY2FwZSA9IFsnXFwnJ10uY29uY2F0KHVud2lzZSksXG4gICAgLy8gQ2hhcmFjdGVycyB0aGF0IGFyZSBuZXZlciBldmVyIGFsbG93ZWQgaW4gYSBob3N0bmFtZS5cbiAgICAvLyBOb3RlIHRoYXQgYW55IGludmFsaWQgY2hhcnMgYXJlIGFsc28gaGFuZGxlZCwgYnV0IHRoZXNlXG4gICAgLy8gYXJlIHRoZSBvbmVzIHRoYXQgYXJlICpleHBlY3RlZCogdG8gYmUgc2Vlbiwgc28gd2UgZmFzdC1wYXRoXG4gICAgLy8gdGhlbS5cbiAgICBub25Ib3N0Q2hhcnMgPSBbJyUnLCAnLycsICc/JywgJzsnLCAnIyddLmNvbmNhdChhdXRvRXNjYXBlKSxcbiAgICBob3N0RW5kaW5nQ2hhcnMgPSBbJy8nLCAnPycsICcjJ10sXG4gICAgaG9zdG5hbWVNYXhMZW4gPSAyNTUsXG4gICAgaG9zdG5hbWVQYXJ0UGF0dGVybiA9IC9eWythLXowLTlBLVpfLV17MCw2M30kLyxcbiAgICBob3N0bmFtZVBhcnRTdGFydCA9IC9eKFsrYS16MC05QS1aXy1dezAsNjN9KSguKikkLyxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBjYW4gYWxsb3cgXCJ1bnNhZmVcIiBhbmQgXCJ1bndpc2VcIiBjaGFycy5cbiAgICB1bnNhZmVQcm90b2NvbCA9IHtcbiAgICAgICdqYXZhc2NyaXB0JzogdHJ1ZSxcbiAgICAgICdqYXZhc2NyaXB0Oic6IHRydWVcbiAgICB9LFxuICAgIC8vIHByb3RvY29scyB0aGF0IG5ldmVyIGhhdmUgYSBob3N0bmFtZS5cbiAgICBob3N0bGVzc1Byb3RvY29sID0ge1xuICAgICAgJ2phdmFzY3JpcHQnOiB0cnVlLFxuICAgICAgJ2phdmFzY3JpcHQ6JzogdHJ1ZVxuICAgIH0sXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgYWx3YXlzIGNvbnRhaW4gYSAvLyBiaXQuXG4gICAgc2xhc2hlZFByb3RvY29sID0ge1xuICAgICAgJ2h0dHAnOiB0cnVlLFxuICAgICAgJ2h0dHBzJzogdHJ1ZSxcbiAgICAgICdmdHAnOiB0cnVlLFxuICAgICAgJ2dvcGhlcic6IHRydWUsXG4gICAgICAnZmlsZSc6IHRydWUsXG4gICAgICAnaHR0cDonOiB0cnVlLFxuICAgICAgJ2h0dHBzOic6IHRydWUsXG4gICAgICAnZnRwOic6IHRydWUsXG4gICAgICAnZ29waGVyOic6IHRydWUsXG4gICAgICAnZmlsZTonOiB0cnVlXG4gICAgfSxcbiAgICBxdWVyeXN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG5cbmZ1bmN0aW9uIHVybFBhcnNlKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgaWYgKHVybCAmJiB1dGlsLmlzT2JqZWN0KHVybCkgJiYgdXJsIGluc3RhbmNlb2YgVXJsKSByZXR1cm4gdXJsO1xuXG4gIHZhciB1ID0gbmV3IFVybDtcbiAgdS5wYXJzZSh1cmwsIHBhcnNlUXVlcnlTdHJpbmcsIHNsYXNoZXNEZW5vdGVIb3N0KTtcbiAgcmV0dXJuIHU7XG59XG5cblVybC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbih1cmwsIHBhcnNlUXVlcnlTdHJpbmcsIHNsYXNoZXNEZW5vdGVIb3N0KSB7XG4gIGlmICghdXRpbC5pc1N0cmluZyh1cmwpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhcmFtZXRlciAndXJsJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgdXJsKTtcbiAgfVxuXG4gIC8vIENvcHkgY2hyb21lLCBJRSwgb3BlcmEgYmFja3NsYXNoLWhhbmRsaW5nIGJlaGF2aW9yLlxuICAvLyBCYWNrIHNsYXNoZXMgYmVmb3JlIHRoZSBxdWVyeSBzdHJpbmcgZ2V0IGNvbnZlcnRlZCB0byBmb3J3YXJkIHNsYXNoZXNcbiAgLy8gU2VlOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MjU5MTZcbiAgdmFyIHF1ZXJ5SW5kZXggPSB1cmwuaW5kZXhPZignPycpLFxuICAgICAgc3BsaXR0ZXIgPVxuICAgICAgICAgIChxdWVyeUluZGV4ICE9PSAtMSAmJiBxdWVyeUluZGV4IDwgdXJsLmluZGV4T2YoJyMnKSkgPyAnPycgOiAnIycsXG4gICAgICB1U3BsaXQgPSB1cmwuc3BsaXQoc3BsaXR0ZXIpLFxuICAgICAgc2xhc2hSZWdleCA9IC9cXFxcL2c7XG4gIHVTcGxpdFswXSA9IHVTcGxpdFswXS5yZXBsYWNlKHNsYXNoUmVnZXgsICcvJyk7XG4gIHVybCA9IHVTcGxpdC5qb2luKHNwbGl0dGVyKTtcblxuICB2YXIgcmVzdCA9IHVybDtcblxuICAvLyB0cmltIGJlZm9yZSBwcm9jZWVkaW5nLlxuICAvLyBUaGlzIGlzIHRvIHN1cHBvcnQgcGFyc2Ugc3R1ZmYgbGlrZSBcIiAgaHR0cDovL2Zvby5jb20gIFxcblwiXG4gIHJlc3QgPSByZXN0LnRyaW0oKTtcblxuICBpZiAoIXNsYXNoZXNEZW5vdGVIb3N0ICYmIHVybC5zcGxpdCgnIycpLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIFRyeSBmYXN0IHBhdGggcmVnZXhwXG4gICAgdmFyIHNpbXBsZVBhdGggPSBzaW1wbGVQYXRoUGF0dGVybi5leGVjKHJlc3QpO1xuICAgIGlmIChzaW1wbGVQYXRoKSB7XG4gICAgICB0aGlzLnBhdGggPSByZXN0O1xuICAgICAgdGhpcy5ocmVmID0gcmVzdDtcbiAgICAgIHRoaXMucGF0aG5hbWUgPSBzaW1wbGVQYXRoWzFdO1xuICAgICAgaWYgKHNpbXBsZVBhdGhbMl0pIHtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzaW1wbGVQYXRoWzJdO1xuICAgICAgICBpZiAocGFyc2VRdWVyeVN0cmluZykge1xuICAgICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeXN0cmluZy5wYXJzZSh0aGlzLnNlYXJjaC5zdWJzdHIoMSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnNlYXJjaC5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyc2VRdWVyeVN0cmluZykge1xuICAgICAgICB0aGlzLnNlYXJjaCA9ICcnO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvdG8gPSBwcm90b2NvbFBhdHRlcm4uZXhlYyhyZXN0KTtcbiAgaWYgKHByb3RvKSB7XG4gICAgcHJvdG8gPSBwcm90b1swXTtcbiAgICB2YXIgbG93ZXJQcm90byA9IHByb3RvLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5wcm90b2NvbCA9IGxvd2VyUHJvdG87XG4gICAgcmVzdCA9IHJlc3Quc3Vic3RyKHByb3RvLmxlbmd0aCk7XG4gIH1cblxuICAvLyBmaWd1cmUgb3V0IGlmIGl0J3MgZ290IGEgaG9zdFxuICAvLyB1c2VyQHNlcnZlciBpcyAqYWx3YXlzKiBpbnRlcnByZXRlZCBhcyBhIGhvc3RuYW1lLCBhbmQgdXJsXG4gIC8vIHJlc29sdXRpb24gd2lsbCB0cmVhdCAvL2Zvby9iYXIgYXMgaG9zdD1mb28scGF0aD1iYXIgYmVjYXVzZSB0aGF0J3NcbiAgLy8gaG93IHRoZSBicm93c2VyIHJlc29sdmVzIHJlbGF0aXZlIFVSTHMuXG4gIGlmIChzbGFzaGVzRGVub3RlSG9zdCB8fCBwcm90byB8fCByZXN0Lm1hdGNoKC9eXFwvXFwvW15AXFwvXStAW15AXFwvXSsvKSkge1xuICAgIHZhciBzbGFzaGVzID0gcmVzdC5zdWJzdHIoMCwgMikgPT09ICcvLyc7XG4gICAgaWYgKHNsYXNoZXMgJiYgIShwcm90byAmJiBob3N0bGVzc1Byb3RvY29sW3Byb3RvXSkpIHtcbiAgICAgIHJlc3QgPSByZXN0LnN1YnN0cigyKTtcbiAgICAgIHRoaXMuc2xhc2hlcyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFob3N0bGVzc1Byb3RvY29sW3Byb3RvXSAmJlxuICAgICAgKHNsYXNoZXMgfHwgKHByb3RvICYmICFzbGFzaGVkUHJvdG9jb2xbcHJvdG9dKSkpIHtcblxuICAgIC8vIHRoZXJlJ3MgYSBob3N0bmFtZS5cbiAgICAvLyB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgLywgPywgOywgb3IgIyBlbmRzIHRoZSBob3N0LlxuICAgIC8vXG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gQCBpbiB0aGUgaG9zdG5hbWUsIHRoZW4gbm9uLWhvc3QgY2hhcnMgKmFyZSogYWxsb3dlZFxuICAgIC8vIHRvIHRoZSBsZWZ0IG9mIHRoZSBsYXN0IEAgc2lnbiwgdW5sZXNzIHNvbWUgaG9zdC1lbmRpbmcgY2hhcmFjdGVyXG4gICAgLy8gY29tZXMgKmJlZm9yZSogdGhlIEAtc2lnbi5cbiAgICAvLyBVUkxzIGFyZSBvYm5veGlvdXMuXG4gICAgLy9cbiAgICAvLyBleDpcbiAgICAvLyBodHRwOi8vYUBiQGMvID0+IHVzZXI6YUBiIGhvc3Q6Y1xuICAgIC8vIGh0dHA6Ly9hQGI/QGMgPT4gdXNlcjphIGhvc3Q6YyBwYXRoOi8/QGNcblxuICAgIC8vIHYwLjEyIFRPRE8oaXNhYWNzKTogVGhpcyBpcyBub3QgcXVpdGUgaG93IENocm9tZSBkb2VzIHRoaW5ncy5cbiAgICAvLyBSZXZpZXcgb3VyIHRlc3QgY2FzZSBhZ2FpbnN0IGJyb3dzZXJzIG1vcmUgY29tcHJlaGVuc2l2ZWx5LlxuXG4gICAgLy8gZmluZCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgYW55IGhvc3RFbmRpbmdDaGFyc1xuICAgIHZhciBob3N0RW5kID0gLTE7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob3N0RW5kaW5nQ2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBoZWMgPSByZXN0LmluZGV4T2YoaG9zdEVuZGluZ0NoYXJzW2ldKTtcbiAgICAgIGlmIChoZWMgIT09IC0xICYmIChob3N0RW5kID09PSAtMSB8fCBoZWMgPCBob3N0RW5kKSlcbiAgICAgICAgaG9zdEVuZCA9IGhlYztcbiAgICB9XG5cbiAgICAvLyBhdCB0aGlzIHBvaW50LCBlaXRoZXIgd2UgaGF2ZSBhbiBleHBsaWNpdCBwb2ludCB3aGVyZSB0aGVcbiAgICAvLyBhdXRoIHBvcnRpb24gY2Fubm90IGdvIHBhc3QsIG9yIHRoZSBsYXN0IEAgY2hhciBpcyB0aGUgZGVjaWRlci5cbiAgICB2YXIgYXV0aCwgYXRTaWduO1xuICAgIGlmIChob3N0RW5kID09PSAtMSkge1xuICAgICAgLy8gYXRTaWduIGNhbiBiZSBhbnl3aGVyZS5cbiAgICAgIGF0U2lnbiA9IHJlc3QubGFzdEluZGV4T2YoJ0AnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYXRTaWduIG11c3QgYmUgaW4gYXV0aCBwb3J0aW9uLlxuICAgICAgLy8gaHR0cDovL2FAYi9jQGQgPT4gaG9zdDpiIGF1dGg6YSBwYXRoOi9jQGRcbiAgICAgIGF0U2lnbiA9IHJlc3QubGFzdEluZGV4T2YoJ0AnLCBob3N0RW5kKTtcbiAgICB9XG5cbiAgICAvLyBOb3cgd2UgaGF2ZSBhIHBvcnRpb24gd2hpY2ggaXMgZGVmaW5pdGVseSB0aGUgYXV0aC5cbiAgICAvLyBQdWxsIHRoYXQgb2ZmLlxuICAgIGlmIChhdFNpZ24gIT09IC0xKSB7XG4gICAgICBhdXRoID0gcmVzdC5zbGljZSgwLCBhdFNpZ24pO1xuICAgICAgcmVzdCA9IHJlc3Quc2xpY2UoYXRTaWduICsgMSk7XG4gICAgICB0aGlzLmF1dGggPSBkZWNvZGVVUklDb21wb25lbnQoYXV0aCk7XG4gICAgfVxuXG4gICAgLy8gdGhlIGhvc3QgaXMgdGhlIHJlbWFpbmluZyB0byB0aGUgbGVmdCBvZiB0aGUgZmlyc3Qgbm9uLWhvc3QgY2hhclxuICAgIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vbkhvc3RDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhlYyA9IHJlc3QuaW5kZXhPZihub25Ib3N0Q2hhcnNbaV0pO1xuICAgICAgaWYgKGhlYyAhPT0gLTEgJiYgKGhvc3RFbmQgPT09IC0xIHx8IGhlYyA8IGhvc3RFbmQpKVxuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgIH1cbiAgICAvLyBpZiB3ZSBzdGlsbCBoYXZlIG5vdCBoaXQgaXQsIHRoZW4gdGhlIGVudGlyZSB0aGluZyBpcyBhIGhvc3QuXG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKVxuICAgICAgaG9zdEVuZCA9IHJlc3QubGVuZ3RoO1xuXG4gICAgdGhpcy5ob3N0ID0gcmVzdC5zbGljZSgwLCBob3N0RW5kKTtcbiAgICByZXN0ID0gcmVzdC5zbGljZShob3N0RW5kKTtcblxuICAgIC8vIHB1bGwgb3V0IHBvcnQuXG4gICAgdGhpcy5wYXJzZUhvc3QoKTtcblxuICAgIC8vIHdlJ3ZlIGluZGljYXRlZCB0aGF0IHRoZXJlIGlzIGEgaG9zdG5hbWUsXG4gICAgLy8gc28gZXZlbiBpZiBpdCdzIGVtcHR5LCBpdCBoYXMgdG8gYmUgcHJlc2VudC5cbiAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZSB8fCAnJztcblxuICAgIC8vIGlmIGhvc3RuYW1lIGJlZ2lucyB3aXRoIFsgYW5kIGVuZHMgd2l0aCBdXG4gICAgLy8gYXNzdW1lIHRoYXQgaXQncyBhbiBJUHY2IGFkZHJlc3MuXG4gICAgdmFyIGlwdjZIb3N0bmFtZSA9IHRoaXMuaG9zdG5hbWVbMF0gPT09ICdbJyAmJlxuICAgICAgICB0aGlzLmhvc3RuYW1lW3RoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMV0gPT09ICddJztcblxuICAgIC8vIHZhbGlkYXRlIGEgbGl0dGxlLlxuICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG4gICAgICB2YXIgaG9zdHBhcnRzID0gdGhpcy5ob3N0bmFtZS5zcGxpdCgvXFwuLyk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGhvc3RwYXJ0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIHBhcnQgPSBob3N0cGFydHNbaV07XG4gICAgICAgIGlmICghcGFydCkgY29udGludWU7XG4gICAgICAgIGlmICghcGFydC5tYXRjaChob3N0bmFtZVBhcnRQYXR0ZXJuKSkge1xuICAgICAgICAgIHZhciBuZXdwYXJ0ID0gJyc7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGsgPSBwYXJ0Lmxlbmd0aDsgaiA8IGs7IGorKykge1xuICAgICAgICAgICAgaWYgKHBhcnQuY2hhckNvZGVBdChqKSA+IDEyNykge1xuICAgICAgICAgICAgICAvLyB3ZSByZXBsYWNlIG5vbi1BU0NJSSBjaGFyIHdpdGggYSB0ZW1wb3JhcnkgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0aGlzIHRvIG1ha2Ugc3VyZSBzaXplIG9mIGhvc3RuYW1lIGlzIG5vdFxuICAgICAgICAgICAgICAvLyBicm9rZW4gYnkgcmVwbGFjaW5nIG5vbi1BU0NJSSBieSBub3RoaW5nXG4gICAgICAgICAgICAgIG5ld3BhcnQgKz0gJ3gnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3cGFydCArPSBwYXJ0W2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB3ZSB0ZXN0IGFnYWluIHdpdGggQVNDSUkgY2hhciBvbmx5XG4gICAgICAgICAgaWYgKCFuZXdwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFBhdHRlcm4pKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRQYXJ0cyA9IGhvc3RwYXJ0cy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIHZhciBub3RIb3N0ID0gaG9zdHBhcnRzLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgICAgIHZhciBiaXQgPSBwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChiaXQpIHtcbiAgICAgICAgICAgICAgdmFsaWRQYXJ0cy5wdXNoKGJpdFsxXSk7XG4gICAgICAgICAgICAgIG5vdEhvc3QudW5zaGlmdChiaXRbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vdEhvc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJlc3QgPSAnLycgKyBub3RIb3N0LmpvaW4oJy4nKSArIHJlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhvc3RuYW1lID0gdmFsaWRQYXJ0cy5qb2luKCcuJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5ob3N0bmFtZS5sZW5ndGggPiBob3N0bmFtZU1heExlbikge1xuICAgICAgdGhpcy5ob3N0bmFtZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBob3N0bmFtZXMgYXJlIGFsd2F5cyBsb3dlciBjYXNlLlxuICAgICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoIWlwdjZIb3N0bmFtZSkge1xuICAgICAgLy8gSUROQSBTdXBwb3J0OiBSZXR1cm5zIGEgcHVueWNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIFwiZG9tYWluXCIuXG4gICAgICAvLyBJdCBvbmx5IGNvbnZlcnRzIHBhcnRzIG9mIHRoZSBkb21haW4gbmFtZSB0aGF0XG4gICAgICAvLyBoYXZlIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLCBpLmUuIGl0IGRvZXNuJ3QgbWF0dGVyIGlmXG4gICAgICAvLyB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQgYWxyZWFkeSBpcyBBU0NJSS1vbmx5LlxuICAgICAgdGhpcy5ob3N0bmFtZSA9IHB1bnljb2RlLnRvQVNDSUkodGhpcy5ob3N0bmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIHAgPSB0aGlzLnBvcnQgPyAnOicgKyB0aGlzLnBvcnQgOiAnJztcbiAgICB2YXIgaCA9IHRoaXMuaG9zdG5hbWUgfHwgJyc7XG4gICAgdGhpcy5ob3N0ID0gaCArIHA7XG4gICAgdGhpcy5ocmVmICs9IHRoaXMuaG9zdDtcblxuICAgIC8vIHN0cmlwIFsgYW5kIF0gZnJvbSB0aGUgaG9zdG5hbWVcbiAgICAvLyB0aGUgaG9zdCBmaWVsZCBzdGlsbCByZXRhaW5zIHRoZW0sIHRob3VnaFxuICAgIGlmIChpcHY2SG9zdG5hbWUpIHtcbiAgICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lLnN1YnN0cigxLCB0aGlzLmhvc3RuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgaWYgKHJlc3RbMF0gIT09ICcvJykge1xuICAgICAgICByZXN0ID0gJy8nICsgcmVzdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBub3cgcmVzdCBpcyBzZXQgdG8gdGhlIHBvc3QtaG9zdCBzdHVmZi5cbiAgLy8gY2hvcCBvZmYgYW55IGRlbGltIGNoYXJzLlxuICBpZiAoIXVuc2FmZVByb3RvY29sW2xvd2VyUHJvdG9dKSB7XG5cbiAgICAvLyBGaXJzdCwgbWFrZSAxMDAlIHN1cmUgdGhhdCBhbnkgXCJhdXRvRXNjYXBlXCIgY2hhcnMgZ2V0XG4gICAgLy8gZXNjYXBlZCwgZXZlbiBpZiBlbmNvZGVVUklDb21wb25lbnQgZG9lc24ndCB0aGluayB0aGV5XG4gICAgLy8gbmVlZCB0byBiZS5cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGF1dG9Fc2NhcGUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgYWUgPSBhdXRvRXNjYXBlW2ldO1xuICAgICAgaWYgKHJlc3QuaW5kZXhPZihhZSkgPT09IC0xKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIHZhciBlc2MgPSBlbmNvZGVVUklDb21wb25lbnQoYWUpO1xuICAgICAgaWYgKGVzYyA9PT0gYWUpIHtcbiAgICAgICAgZXNjID0gZXNjYXBlKGFlKTtcbiAgICAgIH1cbiAgICAgIHJlc3QgPSByZXN0LnNwbGl0KGFlKS5qb2luKGVzYyk7XG4gICAgfVxuICB9XG5cblxuICAvLyBjaG9wIG9mZiBmcm9tIHRoZSB0YWlsIGZpcnN0LlxuICB2YXIgaGFzaCA9IHJlc3QuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaCAhPT0gLTEpIHtcbiAgICAvLyBnb3QgYSBmcmFnbWVudCBzdHJpbmcuXG4gICAgdGhpcy5oYXNoID0gcmVzdC5zdWJzdHIoaGFzaCk7XG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoMCwgaGFzaCk7XG4gIH1cbiAgdmFyIHFtID0gcmVzdC5pbmRleE9mKCc/Jyk7XG4gIGlmIChxbSAhPT0gLTEpIHtcbiAgICB0aGlzLnNlYXJjaCA9IHJlc3Quc3Vic3RyKHFtKTtcbiAgICB0aGlzLnF1ZXJ5ID0gcmVzdC5zdWJzdHIocW0gKyAxKTtcbiAgICBpZiAocGFyc2VRdWVyeVN0cmluZykge1xuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5c3RyaW5nLnBhcnNlKHRoaXMucXVlcnkpO1xuICAgIH1cbiAgICByZXN0ID0gcmVzdC5zbGljZSgwLCBxbSk7XG4gIH0gZWxzZSBpZiAocGFyc2VRdWVyeVN0cmluZykge1xuICAgIC8vIG5vIHF1ZXJ5IHN0cmluZywgYnV0IHBhcnNlUXVlcnlTdHJpbmcgc3RpbGwgcmVxdWVzdGVkXG4gICAgdGhpcy5zZWFyY2ggPSAnJztcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gIH1cbiAgaWYgKHJlc3QpIHRoaXMucGF0aG5hbWUgPSByZXN0O1xuICBpZiAoc2xhc2hlZFByb3RvY29sW2xvd2VyUHJvdG9dICYmXG4gICAgICB0aGlzLmhvc3RuYW1lICYmICF0aGlzLnBhdGhuYW1lKSB7XG4gICAgdGhpcy5wYXRobmFtZSA9ICcvJztcbiAgfVxuXG4gIC8vdG8gc3VwcG9ydCBodHRwLnJlcXVlc3RcbiAgaWYgKHRoaXMucGF0aG5hbWUgfHwgdGhpcy5zZWFyY2gpIHtcbiAgICB2YXIgcCA9IHRoaXMucGF0aG5hbWUgfHwgJyc7XG4gICAgdmFyIHMgPSB0aGlzLnNlYXJjaCB8fCAnJztcbiAgICB0aGlzLnBhdGggPSBwICsgcztcbiAgfVxuXG4gIC8vIGZpbmFsbHksIHJlY29uc3RydWN0IHRoZSBocmVmIGJhc2VkIG9uIHdoYXQgaGFzIGJlZW4gdmFsaWRhdGVkLlxuICB0aGlzLmhyZWYgPSB0aGlzLmZvcm1hdCgpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGZvcm1hdCBhIHBhcnNlZCBvYmplY3QgaW50byBhIHVybCBzdHJpbmdcbmZ1bmN0aW9uIHVybEZvcm1hdChvYmopIHtcbiAgLy8gZW5zdXJlIGl0J3MgYW4gb2JqZWN0LCBhbmQgbm90IGEgc3RyaW5nIHVybC5cbiAgLy8gSWYgaXQncyBhbiBvYmosIHRoaXMgaXMgYSBuby1vcC5cbiAgLy8gdGhpcyB3YXksIHlvdSBjYW4gY2FsbCB1cmxfZm9ybWF0KCkgb24gc3RyaW5nc1xuICAvLyB0byBjbGVhbiB1cCBwb3RlbnRpYWxseSB3b25reSB1cmxzLlxuICBpZiAodXRpbC5pc1N0cmluZyhvYmopKSBvYmogPSB1cmxQYXJzZShvYmopO1xuICBpZiAoIShvYmogaW5zdGFuY2VvZiBVcmwpKSByZXR1cm4gVXJsLnByb3RvdHlwZS5mb3JtYXQuY2FsbChvYmopO1xuICByZXR1cm4gb2JqLmZvcm1hdCgpO1xufVxuXG5VcmwucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYXV0aCA9IHRoaXMuYXV0aCB8fCAnJztcbiAgaWYgKGF1dGgpIHtcbiAgICBhdXRoID0gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpO1xuICAgIGF1dGggPSBhdXRoLnJlcGxhY2UoLyUzQS9pLCAnOicpO1xuICAgIGF1dGggKz0gJ0AnO1xuICB9XG5cbiAgdmFyIHByb3RvY29sID0gdGhpcy5wcm90b2NvbCB8fCAnJyxcbiAgICAgIHBhdGhuYW1lID0gdGhpcy5wYXRobmFtZSB8fCAnJyxcbiAgICAgIGhhc2ggPSB0aGlzLmhhc2ggfHwgJycsXG4gICAgICBob3N0ID0gZmFsc2UsXG4gICAgICBxdWVyeSA9ICcnO1xuXG4gIGlmICh0aGlzLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHRoaXMuaG9zdDtcbiAgfSBlbHNlIGlmICh0aGlzLmhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAodGhpcy5ob3N0bmFtZS5pbmRleE9mKCc6JykgPT09IC0xID9cbiAgICAgICAgdGhpcy5ob3N0bmFtZSA6XG4gICAgICAgICdbJyArIHRoaXMuaG9zdG5hbWUgKyAnXScpO1xuICAgIGlmICh0aGlzLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdGhpcy5wb3J0O1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLnF1ZXJ5ICYmXG4gICAgICB1dGlsLmlzT2JqZWN0KHRoaXMucXVlcnkpICYmXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXJ5KS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9IHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeSh0aGlzLnF1ZXJ5KTtcbiAgfVxuXG4gIHZhciBzZWFyY2ggPSB0aGlzLnNlYXJjaCB8fCAocXVlcnkgJiYgKCc/JyArIHF1ZXJ5KSkgfHwgJyc7XG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonO1xuXG4gIC8vIG9ubHkgdGhlIHNsYXNoZWRQcm90b2NvbHMgZ2V0IHRoZSAvLy4gIE5vdCBtYWlsdG86LCB4bXBwOiwgZXRjLlxuICAvLyB1bmxlc3MgdGhleSBoYWQgdGhlbSB0byBiZWdpbiB3aXRoLlxuICBpZiAodGhpcy5zbGFzaGVzIHx8XG4gICAgICAoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbFtwcm90b2NvbF0pICYmIGhvc3QgIT09IGZhbHNlKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJyk7XG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lO1xuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnO1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaC5jaGFyQXQoMCkgIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2g7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoLmNoYXJBdCgwKSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2g7XG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChtYXRjaCk7XG4gIH0pO1xuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKTtcblxuICByZXR1cm4gcHJvdG9jb2wgKyBob3N0ICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xufTtcblxuZnVuY3Rpb24gdXJsUmVzb2x2ZShzb3VyY2UsIHJlbGF0aXZlKSB7XG4gIHJldHVybiB1cmxQYXJzZShzb3VyY2UsIGZhbHNlLCB0cnVlKS5yZXNvbHZlKHJlbGF0aXZlKTtcbn1cblxuVXJsLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgcmV0dXJuIHRoaXMucmVzb2x2ZU9iamVjdCh1cmxQYXJzZShyZWxhdGl2ZSwgZmFsc2UsIHRydWUpKS5mb3JtYXQoKTtcbn07XG5cbmZ1bmN0aW9uIHVybFJlc29sdmVPYmplY3Qoc291cmNlLCByZWxhdGl2ZSkge1xuICBpZiAoIXNvdXJjZSkgcmV0dXJuIHJlbGF0aXZlO1xuICByZXR1cm4gdXJsUGFyc2Uoc291cmNlLCBmYWxzZSwgdHJ1ZSkucmVzb2x2ZU9iamVjdChyZWxhdGl2ZSk7XG59XG5cblVybC5wcm90b3R5cGUucmVzb2x2ZU9iamVjdCA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG4gIGlmICh1dGlsLmlzU3RyaW5nKHJlbGF0aXZlKSkge1xuICAgIHZhciByZWwgPSBuZXcgVXJsKCk7XG4gICAgcmVsLnBhcnNlKHJlbGF0aXZlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgcmVsYXRpdmUgPSByZWw7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gbmV3IFVybCgpO1xuICB2YXIgdGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgZm9yICh2YXIgdGsgPSAwOyB0ayA8IHRrZXlzLmxlbmd0aDsgdGsrKykge1xuICAgIHZhciB0a2V5ID0gdGtleXNbdGtdO1xuICAgIHJlc3VsdFt0a2V5XSA9IHRoaXNbdGtleV07XG4gIH1cblxuICAvLyBoYXNoIGlzIGFsd2F5cyBvdmVycmlkZGVuLCBubyBtYXR0ZXIgd2hhdC5cbiAgLy8gZXZlbiBocmVmPVwiXCIgd2lsbCByZW1vdmUgaXQuXG4gIHJlc3VsdC5oYXNoID0gcmVsYXRpdmUuaGFzaDtcblxuICAvLyBpZiB0aGUgcmVsYXRpdmUgdXJsIGlzIGVtcHR5LCB0aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIGRvIGhlcmUuXG4gIGlmIChyZWxhdGl2ZS5ocmVmID09PSAnJykge1xuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBocmVmcyBsaWtlIC8vZm9vL2JhciBhbHdheXMgY3V0IHRvIHRoZSBwcm90b2NvbC5cbiAgaWYgKHJlbGF0aXZlLnNsYXNoZXMgJiYgIXJlbGF0aXZlLnByb3RvY29sKSB7XG4gICAgLy8gdGFrZSBldmVyeXRoaW5nIGV4Y2VwdCB0aGUgcHJvdG9jb2wgZnJvbSByZWxhdGl2ZVxuICAgIHZhciBya2V5cyA9IE9iamVjdC5rZXlzKHJlbGF0aXZlKTtcbiAgICBmb3IgKHZhciByayA9IDA7IHJrIDwgcmtleXMubGVuZ3RoOyByaysrKSB7XG4gICAgICB2YXIgcmtleSA9IHJrZXlzW3JrXTtcbiAgICAgIGlmIChya2V5ICE9PSAncHJvdG9jb2wnKVxuICAgICAgICByZXN1bHRbcmtleV0gPSByZWxhdGl2ZVtya2V5XTtcbiAgICB9XG5cbiAgICAvL3VybFBhcnNlIGFwcGVuZHMgdHJhaWxpbmcgLyB0byB1cmxzIGxpa2UgaHR0cDovL3d3dy5leGFtcGxlLmNvbVxuICAgIGlmIChzbGFzaGVkUHJvdG9jb2xbcmVzdWx0LnByb3RvY29sXSAmJlxuICAgICAgICByZXN1bHQuaG9zdG5hbWUgJiYgIXJlc3VsdC5wYXRobmFtZSkge1xuICAgICAgcmVzdWx0LnBhdGggPSByZXN1bHQucGF0aG5hbWUgPSAnLyc7XG4gICAgfVxuXG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmIChyZWxhdGl2ZS5wcm90b2NvbCAmJiByZWxhdGl2ZS5wcm90b2NvbCAhPT0gcmVzdWx0LnByb3RvY29sKSB7XG4gICAgLy8gaWYgaXQncyBhIGtub3duIHVybCBwcm90b2NvbCwgdGhlbiBjaGFuZ2luZ1xuICAgIC8vIHRoZSBwcm90b2NvbCBkb2VzIHdlaXJkIHRoaW5nc1xuICAgIC8vIGZpcnN0LCBpZiBpdCdzIG5vdCBmaWxlOiwgdGhlbiB3ZSBNVVNUIGhhdmUgYSBob3N0LFxuICAgIC8vIGFuZCBpZiB0aGVyZSB3YXMgYSBwYXRoXG4gICAgLy8gdG8gYmVnaW4gd2l0aCwgdGhlbiB3ZSBNVVNUIGhhdmUgYSBwYXRoLlxuICAgIC8vIGlmIGl0IGlzIGZpbGU6LCB0aGVuIHRoZSBob3N0IGlzIGRyb3BwZWQsXG4gICAgLy8gYmVjYXVzZSB0aGF0J3Mga25vd24gdG8gYmUgaG9zdGxlc3MuXG4gICAgLy8gYW55dGhpbmcgZWxzZSBpcyBhc3N1bWVkIHRvIGJlIGFic29sdXRlLlxuICAgIGlmICghc2xhc2hlZFByb3RvY29sW3JlbGF0aXZlLnByb3RvY29sXSkge1xuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhyZWxhdGl2ZSk7XG4gICAgICBmb3IgKHZhciB2ID0gMDsgdiA8IGtleXMubGVuZ3RoOyB2KyspIHtcbiAgICAgICAgdmFyIGsgPSBrZXlzW3ZdO1xuICAgICAgICByZXN1bHRba10gPSByZWxhdGl2ZVtrXTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXN1bHQucHJvdG9jb2wgPSByZWxhdGl2ZS5wcm90b2NvbDtcbiAgICBpZiAoIXJlbGF0aXZlLmhvc3QgJiYgIWhvc3RsZXNzUHJvdG9jb2xbcmVsYXRpdmUucHJvdG9jb2xdKSB7XG4gICAgICB2YXIgcmVsUGF0aCA9IChyZWxhdGl2ZS5wYXRobmFtZSB8fCAnJykuc3BsaXQoJy8nKTtcbiAgICAgIHdoaWxlIChyZWxQYXRoLmxlbmd0aCAmJiAhKHJlbGF0aXZlLmhvc3QgPSByZWxQYXRoLnNoaWZ0KCkpKTtcbiAgICAgIGlmICghcmVsYXRpdmUuaG9zdCkgcmVsYXRpdmUuaG9zdCA9ICcnO1xuICAgICAgaWYgKCFyZWxhdGl2ZS5ob3N0bmFtZSkgcmVsYXRpdmUuaG9zdG5hbWUgPSAnJztcbiAgICAgIGlmIChyZWxQYXRoWzBdICE9PSAnJykgcmVsUGF0aC51bnNoaWZ0KCcnKTtcbiAgICAgIGlmIChyZWxQYXRoLmxlbmd0aCA8IDIpIHJlbFBhdGgudW5zaGlmdCgnJyk7XG4gICAgICByZXN1bHQucGF0aG5hbWUgPSByZWxQYXRoLmpvaW4oJy8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnBhdGhuYW1lID0gcmVsYXRpdmUucGF0aG5hbWU7XG4gICAgfVxuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgcmVzdWx0Lmhvc3QgPSByZWxhdGl2ZS5ob3N0IHx8ICcnO1xuICAgIHJlc3VsdC5hdXRoID0gcmVsYXRpdmUuYXV0aDtcbiAgICByZXN1bHQuaG9zdG5hbWUgPSByZWxhdGl2ZS5ob3N0bmFtZSB8fCByZWxhdGl2ZS5ob3N0O1xuICAgIHJlc3VsdC5wb3J0ID0gcmVsYXRpdmUucG9ydDtcbiAgICAvLyB0byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmIChyZXN1bHQucGF0aG5hbWUgfHwgcmVzdWx0LnNlYXJjaCkge1xuICAgICAgdmFyIHAgPSByZXN1bHQucGF0aG5hbWUgfHwgJyc7XG4gICAgICB2YXIgcyA9IHJlc3VsdC5zZWFyY2ggfHwgJyc7XG4gICAgICByZXN1bHQucGF0aCA9IHAgKyBzO1xuICAgIH1cbiAgICByZXN1bHQuc2xhc2hlcyA9IHJlc3VsdC5zbGFzaGVzIHx8IHJlbGF0aXZlLnNsYXNoZXM7XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHZhciBpc1NvdXJjZUFicyA9IChyZXN1bHQucGF0aG5hbWUgJiYgcmVzdWx0LnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSxcbiAgICAgIGlzUmVsQWJzID0gKFxuICAgICAgICAgIHJlbGF0aXZlLmhvc3QgfHxcbiAgICAgICAgICByZWxhdGl2ZS5wYXRobmFtZSAmJiByZWxhdGl2ZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJ1xuICAgICAgKSxcbiAgICAgIG11c3RFbmRBYnMgPSAoaXNSZWxBYnMgfHwgaXNTb3VyY2VBYnMgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdC5ob3N0ICYmIHJlbGF0aXZlLnBhdGhuYW1lKSksXG4gICAgICByZW1vdmVBbGxEb3RzID0gbXVzdEVuZEFicyxcbiAgICAgIHNyY1BhdGggPSByZXN1bHQucGF0aG5hbWUgJiYgcmVzdWx0LnBhdGhuYW1lLnNwbGl0KCcvJykgfHwgW10sXG4gICAgICByZWxQYXRoID0gcmVsYXRpdmUucGF0aG5hbWUgJiYgcmVsYXRpdmUucGF0aG5hbWUuc3BsaXQoJy8nKSB8fCBbXSxcbiAgICAgIHBzeWNob3RpYyA9IHJlc3VsdC5wcm90b2NvbCAmJiAhc2xhc2hlZFByb3RvY29sW3Jlc3VsdC5wcm90b2NvbF07XG5cbiAgLy8gaWYgdGhlIHVybCBpcyBhIG5vbi1zbGFzaGVkIHVybCwgdGhlbiByZWxhdGl2ZVxuICAvLyBsaW5rcyBsaWtlIC4uLy4uIHNob3VsZCBiZSBhYmxlXG4gIC8vIHRvIGNyYXdsIHVwIHRvIHRoZSBob3N0bmFtZSwgYXMgd2VsbC4gIFRoaXMgaXMgc3RyYW5nZS5cbiAgLy8gcmVzdWx0LnByb3RvY29sIGhhcyBhbHJlYWR5IGJlZW4gc2V0IGJ5IG5vdy5cbiAgLy8gTGF0ZXIgb24sIHB1dCB0aGUgZmlyc3QgcGF0aCBwYXJ0IGludG8gdGhlIGhvc3QgZmllbGQuXG4gIGlmIChwc3ljaG90aWMpIHtcbiAgICByZXN1bHQuaG9zdG5hbWUgPSAnJztcbiAgICByZXN1bHQucG9ydCA9IG51bGw7XG4gICAgaWYgKHJlc3VsdC5ob3N0KSB7XG4gICAgICBpZiAoc3JjUGF0aFswXSA9PT0gJycpIHNyY1BhdGhbMF0gPSByZXN1bHQuaG9zdDtcbiAgICAgIGVsc2Ugc3JjUGF0aC51bnNoaWZ0KHJlc3VsdC5ob3N0KTtcbiAgICB9XG4gICAgcmVzdWx0Lmhvc3QgPSAnJztcbiAgICBpZiAocmVsYXRpdmUucHJvdG9jb2wpIHtcbiAgICAgIHJlbGF0aXZlLmhvc3RuYW1lID0gbnVsbDtcbiAgICAgIHJlbGF0aXZlLnBvcnQgPSBudWxsO1xuICAgICAgaWYgKHJlbGF0aXZlLmhvc3QpIHtcbiAgICAgICAgaWYgKHJlbFBhdGhbMF0gPT09ICcnKSByZWxQYXRoWzBdID0gcmVsYXRpdmUuaG9zdDtcbiAgICAgICAgZWxzZSByZWxQYXRoLnVuc2hpZnQocmVsYXRpdmUuaG9zdCk7XG4gICAgICB9XG4gICAgICByZWxhdGl2ZS5ob3N0ID0gbnVsbDtcbiAgICB9XG4gICAgbXVzdEVuZEFicyA9IG11c3RFbmRBYnMgJiYgKHJlbFBhdGhbMF0gPT09ICcnIHx8IHNyY1BhdGhbMF0gPT09ICcnKTtcbiAgfVxuXG4gIGlmIChpc1JlbEFicykge1xuICAgIC8vIGl0J3MgYWJzb2x1dGUuXG4gICAgcmVzdWx0Lmhvc3QgPSAocmVsYXRpdmUuaG9zdCB8fCByZWxhdGl2ZS5ob3N0ID09PSAnJykgP1xuICAgICAgICAgICAgICAgICAgcmVsYXRpdmUuaG9zdCA6IHJlc3VsdC5ob3N0O1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9IChyZWxhdGl2ZS5ob3N0bmFtZSB8fCByZWxhdGl2ZS5ob3N0bmFtZSA9PT0gJycpID9cbiAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZS5ob3N0bmFtZSA6IHJlc3VsdC5ob3N0bmFtZTtcbiAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuICAgIHJlc3VsdC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICAgIHNyY1BhdGggPSByZWxQYXRoO1xuICAgIC8vIGZhbGwgdGhyb3VnaCB0byB0aGUgZG90LWhhbmRsaW5nIGJlbG93LlxuICB9IGVsc2UgaWYgKHJlbFBhdGgubGVuZ3RoKSB7XG4gICAgLy8gaXQncyByZWxhdGl2ZVxuICAgIC8vIHRocm93IGF3YXkgdGhlIGV4aXN0aW5nIGZpbGUsIGFuZCB0YWtlIHRoZSBuZXcgcGF0aCBpbnN0ZWFkLlxuICAgIGlmICghc3JjUGF0aCkgc3JjUGF0aCA9IFtdO1xuICAgIHNyY1BhdGgucG9wKCk7XG4gICAgc3JjUGF0aCA9IHNyY1BhdGguY29uY2F0KHJlbFBhdGgpO1xuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gIH0gZWxzZSBpZiAoIXV0aWwuaXNOdWxsT3JVbmRlZmluZWQocmVsYXRpdmUuc2VhcmNoKSkge1xuICAgIC8vIGp1c3QgcHVsbCBvdXQgdGhlIHNlYXJjaC5cbiAgICAvLyBsaWtlIGhyZWY9Jz9mb28nLlxuICAgIC8vIFB1dCB0aGlzIGFmdGVyIHRoZSBvdGhlciB0d28gY2FzZXMgYmVjYXVzZSBpdCBzaW1wbGlmaWVzIHRoZSBib29sZWFuc1xuICAgIGlmIChwc3ljaG90aWMpIHtcbiAgICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlc3VsdC5ob3N0ID0gc3JjUGF0aC5zaGlmdCgpO1xuICAgICAgLy9vY2NhdGlvbmFseSB0aGUgYXV0aCBjYW4gZ2V0IHN0dWNrIG9ubHkgaW4gaG9zdFxuICAgICAgLy90aGlzIGVzcGVjaWFsbHkgaGFwcGVucyBpbiBjYXNlcyBsaWtlXG4gICAgICAvL3VybC5yZXNvbHZlT2JqZWN0KCdtYWlsdG86bG9jYWwxQGRvbWFpbjEnLCAnbG9jYWwyQGRvbWFpbjInKVxuICAgICAgdmFyIGF1dGhJbkhvc3QgPSByZXN1bHQuaG9zdCAmJiByZXN1bHQuaG9zdC5pbmRleE9mKCdAJykgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lmhvc3Quc3BsaXQoJ0AnKSA6IGZhbHNlO1xuICAgICAgaWYgKGF1dGhJbkhvc3QpIHtcbiAgICAgICAgcmVzdWx0LmF1dGggPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgICAgIHJlc3VsdC5ob3N0ID0gcmVzdWx0Lmhvc3RuYW1lID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuICAgIHJlc3VsdC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICAgIC8vdG8gc3VwcG9ydCBodHRwLnJlcXVlc3RcbiAgICBpZiAoIXV0aWwuaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIXV0aWwuaXNOdWxsKHJlc3VsdC5zZWFyY2gpKSB7XG4gICAgICByZXN1bHQucGF0aCA9IChyZXN1bHQucGF0aG5hbWUgPyByZXN1bHQucGF0aG5hbWUgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAocmVzdWx0LnNlYXJjaCA/IHJlc3VsdC5zZWFyY2ggOiAnJyk7XG4gICAgfVxuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAoIXNyY1BhdGgubGVuZ3RoKSB7XG4gICAgLy8gbm8gcGF0aCBhdCBhbGwuICBlYXN5LlxuICAgIC8vIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgb3RoZXIgc3R1ZmYgYWJvdmUuXG4gICAgcmVzdWx0LnBhdGhuYW1lID0gbnVsbDtcbiAgICAvL3RvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gICAgaWYgKHJlc3VsdC5zZWFyY2gpIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gJy8nICsgcmVzdWx0LnNlYXJjaDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnBhdGggPSBudWxsO1xuICAgIH1cbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gaWYgYSB1cmwgRU5EcyBpbiAuIG9yIC4uLCB0aGVuIGl0IG11c3QgZ2V0IGEgdHJhaWxpbmcgc2xhc2guXG4gIC8vIGhvd2V2ZXIsIGlmIGl0IGVuZHMgaW4gYW55dGhpbmcgZWxzZSBub24tc2xhc2h5LFxuICAvLyB0aGVuIGl0IG11c3QgTk9UIGdldCBhIHRyYWlsaW5nIHNsYXNoLlxuICB2YXIgbGFzdCA9IHNyY1BhdGguc2xpY2UoLTEpWzBdO1xuICB2YXIgaGFzVHJhaWxpbmdTbGFzaCA9IChcbiAgICAgIChyZXN1bHQuaG9zdCB8fCByZWxhdGl2ZS5ob3N0IHx8IHNyY1BhdGgubGVuZ3RoID4gMSkgJiZcbiAgICAgIChsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJykgfHwgbGFzdCA9PT0gJycpO1xuXG4gIC8vIHN0cmlwIHNpbmdsZSBkb3RzLCByZXNvbHZlIGRvdWJsZSBkb3RzIHRvIHBhcmVudCBkaXJcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHNyY1BhdGgubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIGxhc3QgPSBzcmNQYXRoW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHNyY1BhdGguc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHNyY1BhdGguc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmICghbXVzdEVuZEFicyAmJiAhcmVtb3ZlQWxsRG90cykge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgc3JjUGF0aC51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtdXN0RW5kQWJzICYmIHNyY1BhdGhbMF0gIT09ICcnICYmXG4gICAgICAoIXNyY1BhdGhbMF0gfHwgc3JjUGF0aFswXS5jaGFyQXQoMCkgIT09ICcvJykpIHtcbiAgICBzcmNQYXRoLnVuc2hpZnQoJycpO1xuICB9XG5cbiAgaWYgKGhhc1RyYWlsaW5nU2xhc2ggJiYgKHNyY1BhdGguam9pbignLycpLnN1YnN0cigtMSkgIT09ICcvJykpIHtcbiAgICBzcmNQYXRoLnB1c2goJycpO1xuICB9XG5cbiAgdmFyIGlzQWJzb2x1dGUgPSBzcmNQYXRoWzBdID09PSAnJyB8fFxuICAgICAgKHNyY1BhdGhbMF0gJiYgc3JjUGF0aFswXS5jaGFyQXQoMCkgPT09ICcvJyk7XG5cbiAgLy8gcHV0IHRoZSBob3N0IGJhY2tcbiAgaWYgKHBzeWNob3RpYykge1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlc3VsdC5ob3N0ID0gaXNBYnNvbHV0ZSA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1BhdGgubGVuZ3RoID8gc3JjUGF0aC5zaGlmdCgpIDogJyc7XG4gICAgLy9vY2NhdGlvbmFseSB0aGUgYXV0aCBjYW4gZ2V0IHN0dWNrIG9ubHkgaW4gaG9zdFxuICAgIC8vdGhpcyBlc3BlY2lhbGx5IGhhcHBlbnMgaW4gY2FzZXMgbGlrZVxuICAgIC8vdXJsLnJlc29sdmVPYmplY3QoJ21haWx0bzpsb2NhbDFAZG9tYWluMScsICdsb2NhbDJAZG9tYWluMicpXG4gICAgdmFyIGF1dGhJbkhvc3QgPSByZXN1bHQuaG9zdCAmJiByZXN1bHQuaG9zdC5pbmRleE9mKCdAJykgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ob3N0LnNwbGl0KCdAJykgOiBmYWxzZTtcbiAgICBpZiAoYXV0aEluSG9zdCkge1xuICAgICAgcmVzdWx0LmF1dGggPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgICByZXN1bHQuaG9zdCA9IHJlc3VsdC5ob3N0bmFtZSA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICB9XG4gIH1cblxuICBtdXN0RW5kQWJzID0gbXVzdEVuZEFicyB8fCAocmVzdWx0Lmhvc3QgJiYgc3JjUGF0aC5sZW5ndGgpO1xuXG4gIGlmIChtdXN0RW5kQWJzICYmICFpc0Fic29sdXRlKSB7XG4gICAgc3JjUGF0aC51bnNoaWZ0KCcnKTtcbiAgfVxuXG4gIGlmICghc3JjUGF0aC5sZW5ndGgpIHtcbiAgICByZXN1bHQucGF0aG5hbWUgPSBudWxsO1xuICAgIHJlc3VsdC5wYXRoID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQucGF0aG5hbWUgPSBzcmNQYXRoLmpvaW4oJy8nKTtcbiAgfVxuXG4gIC8vdG8gc3VwcG9ydCByZXF1ZXN0Lmh0dHBcbiAgaWYgKCF1dGlsLmlzTnVsbChyZXN1bHQucGF0aG5hbWUpIHx8ICF1dGlsLmlzTnVsbChyZXN1bHQuc2VhcmNoKSkge1xuICAgIHJlc3VsdC5wYXRoID0gKHJlc3VsdC5wYXRobmFtZSA/IHJlc3VsdC5wYXRobmFtZSA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocmVzdWx0LnNlYXJjaCA/IHJlc3VsdC5zZWFyY2ggOiAnJyk7XG4gIH1cbiAgcmVzdWx0LmF1dGggPSByZWxhdGl2ZS5hdXRoIHx8IHJlc3VsdC5hdXRoO1xuICByZXN1bHQuc2xhc2hlcyA9IHJlc3VsdC5zbGFzaGVzIHx8IHJlbGF0aXZlLnNsYXNoZXM7XG4gIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuVXJsLnByb3RvdHlwZS5wYXJzZUhvc3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGhvc3QgPSB0aGlzLmhvc3Q7XG4gIHZhciBwb3J0ID0gcG9ydFBhdHRlcm4uZXhlYyhob3N0KTtcbiAgaWYgKHBvcnQpIHtcbiAgICBwb3J0ID0gcG9ydFswXTtcbiAgICBpZiAocG9ydCAhPT0gJzonKSB7XG4gICAgICB0aGlzLnBvcnQgPSBwb3J0LnN1YnN0cigxKTtcbiAgICB9XG4gICAgaG9zdCA9IGhvc3Quc3Vic3RyKDAsIGhvc3QubGVuZ3RoIC0gcG9ydC5sZW5ndGgpO1xuICB9XG4gIGlmIChob3N0KSB0aGlzLmhvc3RuYW1lID0gaG9zdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1N0cmluZzogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZihhcmcpID09PSAnc3RyaW5nJztcbiAgfSxcbiAgaXNPYmplY3Q6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YoYXJnKSA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xuICB9LFxuICBpc051bGw6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBhcmcgPT09IG51bGw7XG4gIH0sXG4gIGlzTnVsbE9yVW5kZWZpbmVkOiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gYXJnID09IG51bGw7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgJyMvY29tbW9uL2Jyb3dzZXInO1xuaW1wb3J0IHsgZ2V0QWN0aXZlVGFiLCBtYWtlUGF1c2UsIHNlbmRDbWQsIHJlcXVlc3QgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBCVUlMRF9JTl9TQ1JJUFRfU1JDLCBUSU1FT1VUXzI0SE9VUlMsIFRJTUVPVVRfTUFYLCBJU19ERVYgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0ICogYXMgdGxkIGZyb20gJyMvY29tbW9uL3RsZCc7XG5pbXBvcnQgKiBhcyBzeW5jIGZyb20gJy4vc3luYyc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgY2hlY2tSZW1vdmUgfSBmcm9tICcuL3V0aWxzL2RiJztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuL3V0aWxzL2luaXQnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uLCBob29rT3B0aW9ucyB9IGZyb20gJy4vdXRpbHMvb3B0aW9ucyc7XG5pbXBvcnQgeyBwb3B1cFRhYnMgfSBmcm9tICcuL3V0aWxzL3BvcHVwLXRyYWNrZXInO1xuaW1wb3J0IHsgZ2V0SW5qZWN0ZWRTY3JpcHRzIH0gZnJvbSAnLi91dGlscy9wcmVpbmplY3QnO1xuaW1wb3J0IHsgU0NSSVBUX1RFTVBMQVRFLCByZXNldFNjcmlwdFRlbXBsYXRlIH0gZnJvbSAnLi91dGlscy90ZW1wbGF0ZS1ob29rJztcbmltcG9ydCB7IHJlc2V0VmFsdWVPcGVuZXIsIGFkZFZhbHVlT3BlbmVyIH0gZnJvbSAnLi91dGlscy92YWx1ZXMnO1xuaW1wb3J0IHsgY2xlYXJSZXF1ZXN0c0J5VGFiSWQgfSBmcm9tICcuL3V0aWxzL3JlcXVlc3RzJztcbmltcG9ydCAnLi91dGlscy9jbGlwYm9hcmQnO1xuaW1wb3J0ICcuL3V0aWxzL2hvdGtleXMnO1xuaW1wb3J0ICcuL3V0aWxzL2ljb24nO1xuaW1wb3J0ICcuL3V0aWxzL25vdGlmaWNhdGlvbnMnO1xuaW1wb3J0ICcuL3V0aWxzL3NjcmlwdCc7XG5pbXBvcnQgJy4vdXRpbHMvdGFicyc7XG5pbXBvcnQgJy4vdXRpbHMvdGVzdGVyJztcbmltcG9ydCAnLi91dGlscy91cGRhdGUnO1xuXG5ob29rT3B0aW9ucygoY2hhbmdlcykgPT4ge1xuICBpZiAoJ2F1dG9VcGRhdGUnIGluIGNoYW5nZXMpIHtcbiAgICBhdXRvVXBkYXRlKCk7XG4gIH1cbiAgaWYgKFNDUklQVF9URU1QTEFURSBpbiBjaGFuZ2VzKSB7XG4gICAgcmVzZXRTY3JpcHRUZW1wbGF0ZShjaGFuZ2VzKTtcbiAgfVxuICBzZW5kQ21kKCdVcGRhdGVPcHRpb25zJywgY2hhbmdlcyk7XG59KTtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICAvKiogQHJldHVybiB7UHJvbWlzZTx7IHNjcmlwdHM6IFZNU2NyaXB0W10sIGNhY2hlOiBPYmplY3QsIHN5bmM6IE9iamVjdCB9Pn0gKi9cbiAgYXN5bmMgR2V0RGF0YShpZHMpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YShpZHMpO1xuICAgIGRhdGEuc3luYyA9IHN5bmMuZ2V0U3RhdGVzKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59ICovXG4gIGFzeW5jIEdldEluamVjdGVkKHsgdXJsLCBmb3JjZUNvbnRlbnQgfSwgc3JjKSB7XG4gICAgY29uc3QgeyBmcmFtZUlkLCB0YWIgfSA9IHNyYztcbiAgICBjb25zdCB0YWJJZCA9IHRhYi5pZDtcbiAgICBpZiAoIXVybCkgdXJsID0gc3JjLnVybCB8fCB0YWIudXJsO1xuICAgIGlmICghZnJhbWVJZCkge1xuICAgICAgcmVzZXRWYWx1ZU9wZW5lcih0YWJJZCk7XG4gICAgICBjbGVhclJlcXVlc3RzQnlUYWJJZCh0YWJJZCk7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEluamVjdGVkU2NyaXB0cyh1cmwsIHRhYklkLCBmcmFtZUlkLCBmb3JjZUNvbnRlbnQpO1xuICAgIGNvbnN0IHsgZmVlZGJhY2ssIGluamVjdCwgdmFsT3BJZHMgfSA9IHJlcztcbiAgICBpbmplY3QuaXNQb3B1cFNob3duID0gcG9wdXBUYWJzW3RhYklkXTtcbiAgICAvLyBJbmplY3Rpbmcga25vd24gY29udGVudCBzY3JpcHRzIHdpdGhvdXQgd2FpdGluZyBmb3IgSW5qZWN0aW9uRmVlZGJhY2sgbWVzc2FnZS5cbiAgICAvLyBSdW5uaW5nIGluIGEgc2VwYXJhdGUgdGFzayBiZWNhdXNlIGl0IG1heSB0YWtlIGEgbG9uZyB0aW1lIHRvIHNlcmlhbGl6ZSBkYXRhLlxuICAgIGlmIChmZWVkYmFjay5sZW5ndGgpIHtcbiAgICAgIHNldFRpbWVvdXQoY29tbWFuZHMuSW5qZWN0aW9uRmVlZGJhY2ssIDAsIHsgZmVlZGJhY2sgfSwgc3JjKTtcbiAgICB9XG4gICAgYWRkVmFsdWVPcGVuZXIodGFiSWQsIGZyYW1lSWQsIHZhbE9wSWRzKTtcbiAgICByZXR1cm4gaW5qZWN0O1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fSAqL1xuICBhc3luYyBHZXRUYWJEb21haW4oKSB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgZ2V0QWN0aXZlVGFiKCkgfHwge307XG4gICAgY29uc3QgdXJsID0gdGFiLnBlbmRpbmdVcmwgfHwgdGFiLnVybCB8fCAnJztcbiAgICBjb25zdCBob3N0ID0gdXJsLm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXi9dKyl8JC8pWzFdO1xuICAgIHJldHVybiB7XG4gICAgICB0YWIsXG4gICAgICBkb21haW46IGhvc3QgJiYgdGxkLmdldERvbWFpbihob3N0KSB8fCBob3N0LFxuICAgIH07XG4gIH0sXG4gIC8qKlxuICAgKiBUaW1lcnMgaW4gY29udGVudCBzY3JpcHRzIGFyZSBzaGFyZWQgd2l0aCB0aGUgd2ViIHBhZ2Ugc28gaXQgY2FuIGNsZWFyIHRoZW0uXG4gICAqIGF3YWl0IHNlbmRDbWQoJ1NldFRpbWVvdXQnLCAxMDApIGluIGluamVjdGVkL2NvbnRlbnRcbiAgICogYXdhaXQgYnJpZGdlLnNlbmQoJ1NldFRpbWVvdXQnLCAxMDApIGluIGluamVjdGVkL3dlYlxuICAgKi9cbiAgU2V0VGltZW91dChtcykge1xuICAgIHJldHVybiBtcyA+IDAgJiYgbWFrZVBhdXNlKG1zKTtcbiAgfSxcbn0pO1xuXG4vLyBjb21tYW5kcyB0byBzeW5jIHVuY29uZGl0aW9uYWxseSByZWdhcmRsZXNzIG9mIHRoZSByZXR1cm5lZCB2YWx1ZSBmcm9tIHRoZSBoYW5kbGVyXG5jb25zdCBjb21tYW5kc1RvU3luYyA9IFtcbiAgJ01hcmtSZW1vdmVkJyxcbiAgJ01vdmUnLFxuICAnUGFyc2VTY3JpcHQnLFxuICAnUmVtb3ZlU2NyaXB0JyxcbiAgJ1VwZGF0ZVNjcmlwdEluZm8nLFxuXTtcbi8vIGNvbW1hbmRzIHRvIHN5bmMgb25seSBpZiB0aGUgaGFuZGxlciByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlXG5jb25zdCBjb21tYW5kc1RvU3luY0lmVHJ1dGh5ID0gW1xuICAnQ2hlY2tSZW1vdmUnLFxuICAnQ2hlY2tVcGRhdGUnLFxuICAnQ2hlY2tVcGRhdGVBbGwnLFxuXTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ29tbWFuZE1lc3NhZ2UocmVxLCBzcmMpIHtcbiAgY29uc3QgeyBjbWQgfSA9IHJlcTtcbiAgY29uc3QgcmVzID0gYXdhaXQgY29tbWFuZHNbY21kXT8uKHJlcS5kYXRhLCBzcmMpO1xuICBpZiAoY29tbWFuZHNUb1N5bmMuaW5jbHVkZXMoY21kKVxuICB8fCByZXMgJiYgY29tbWFuZHNUb1N5bmNJZlRydXRoeS5pbmNsdWRlcyhjbWQpKSB7XG4gICAgc3luYy5zeW5jKCk7XG4gIH1cbiAgLy8gYHVuZGVmaW5lZGAgaXMgbm90IHRyYW5zZmVyYWJsZSwgYnV0IGBudWxsYCBpc1xuICByZXR1cm4gcmVzID8/IG51bGw7XG59XG5cbmZ1bmN0aW9uIGF1dG9VcGRhdGUoKSB7XG4gIGNvbnN0IGludGVydmFsID0gSVNfREVWID8gMTAwMCA6ICgrZ2V0T3B0aW9uKCdhdXRvVXBkYXRlJykgfHwgMCkgKiBUSU1FT1VUXzI0SE9VUlM7XG4gIGlmICghaW50ZXJ2YWwpIHJldHVybjtcbiAgbGV0IGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gZ2V0T3B0aW9uKCdsYXN0VXBkYXRlJyk7XG4gIGlmIChlbGFwc2VkID49IGludGVydmFsKSB7XG4gICAgaGFuZGxlQ29tbWFuZE1lc3NhZ2UoeyBjbWQ6ICdDaGVja1VwZGF0ZUFsbCcgfSk7XG4gICAgZWxhcHNlZCA9IDA7XG4gIH1cbiAgY2xlYXJUaW1lb3V0KGF1dG9VcGRhdGUudGltZXIpO1xuICBhdXRvVXBkYXRlLnRpbWVyID0gc2V0VGltZW91dChhdXRvVXBkYXRlLCBNYXRoLm1pbihUSU1FT1VUX01BWCwgaW50ZXJ2YWwgLSBlbGFwc2VkKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRCdWlsZGluKCkge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcXVlc3QoQlVJTERfSU5fU0NSSVBUX1NSQywge1xuICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgIGhlYWRlcnM6IHsgQWNjZXB0OiAndGV4dC94LXVzZXJzY3JpcHQtbWV0YSwqLyonIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNvbW1hbmRzLlBhcnNlU2NyaXB0KHtcbiAgICB1cmw6IEJVSUxEX0lOX1NDUklQVF9TUkMsXG4gICAgY29kZTogZGF0YSxcbiAgICBjdXN0b206IHsgYnVpbGRJbjogdHJ1ZSB9LFxuICB9KTtcbiAgc3luYy5zeW5jKCk7XG5cbiAgaWYgKHJlcy53aGVyZS5pZCAhPT0gMSkge1xuICAgIHRocm93IGB3cm9uZyBpZDogJHtyZXMud2hlcmUuaWR9YDtcbiAgfVxufVxuXG5pbml0aWFsaXplKCgpID0+IHtcbiAgZ2xvYmFsLmhhbmRsZUNvbW1hbmRNZXNzYWdlID0gaGFuZGxlQ29tbWFuZE1lc3NhZ2U7XG4gIGdsb2JhbC5kZWVwQ29weSA9IGRlZXBDb3B5O1xuICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKFxuICAgIElTX0ZJUkVGT1ggLy8gaW4gRkYgYSByZWplY3RlZCBQcm9taXNlIHZhbHVlIGlzIHRyYW5zZmVycmVkIG9ubHkgaWYgaXQncyBhbiBFcnJvciBvYmplY3RcbiAgICAgID8gKC4uLmFyZ3MpID0+IGhhbmRsZUNvbW1hbmRNZXNzYWdlKC4uLmFyZ3MpLmNhdGNoKGUgPT4gKFxuICAgICAgICBQcm9taXNlLnJlamVjdChlIGluc3RhbmNlb2YgRXJyb3IgPyBlIDogbmV3IEVycm9yKGUpKVxuICAgICAgKSkgLy8gRGlkbid0IHVzZSBgdGhyb3dgIHRvIGF2b2lkIGludGVycnVwdGlvbiBpbiBkZXZ0b29scyB3aXRoIHBhdXNlLW9uLWV4Y2VwdGlvbiBlbmFibGVkLlxuICAgICAgOiBoYW5kbGVDb21tYW5kTWVzc2FnZSxcbiAgKTtcblxuICAvLyBjaGVjayBhbmQgaW5zdGFsbCB0aGUgYnVpbGQtaW4gc2NyaXB0XG4gIGluaXRCdWlsZGluKCk7XG4gIGNvbnNvbGUuaW5mbygnaW5pdEJ1aWxkaW4uLi4nKTtcbiAgc2V0VGltZW91dChhdXRvVXBkYXRlLCBJU19ERVYgPyAxIDogMmU0KTtcbiAgc3luYy5pbml0aWFsaXplKCk7XG4gIGNoZWNrUmVtb3ZlKCk7XG4gIHNldEludGVydmFsKGNoZWNrUmVtb3ZlLCBUSU1FT1VUXzI0SE9VUlMpO1xuICBjb25zdCBhcGkgPSBnbG9iYWwuY2hyb21lLmRlY2xhcmF0aXZlQ29udGVudDtcbiAgaWYgKGFwaSkge1xuICAgIC8vIFVzaW5nIGRlY2xhcmF0aXZlQ29udGVudCB0byBydW4gY29udGVudCBzY3JpcHRzIGVhcmxpZXIgdGhhbiBkb2N1bWVudF9zdGFydFxuICAgIGFwaS5vblBhZ2VDaGFuZ2VkLmdldFJ1bGVzKGFzeW5jIChbcnVsZV0pID0+IHtcbiAgICAgIGNvbnN0IGlkID0gcnVsZT8uaWQ7XG4gICAgICBjb25zdCBuZXdJZCA9IHByb2Nlc3MuZW52LklOSVRfRlVOQ19OQU1FO1xuICAgICAgaWYgKGlkID09PSBuZXdJZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgYXdhaXQgYnJvd3Nlci5kZWNsYXJhdGl2ZUNvbnRlbnQub25QYWdlQ2hhbmdlZC5yZW1vdmVSdWxlcyhbaWRdKTtcbiAgICAgIH1cbiAgICAgIGFwaS5vblBhZ2VDaGFuZ2VkLmFkZFJ1bGVzKFt7XG4gICAgICAgIGlkOiBuZXdJZCxcbiAgICAgICAgY29uZGl0aW9uczogW1xuICAgICAgICAgIG5ldyBhcGkuUGFnZVN0YXRlTWF0Y2hlcih7XG4gICAgICAgICAgICBwYWdlVXJsOiB7IHVybENvbnRhaW5zOiAnOi8vJyB9LCAvLyBlc3NlbnRpYWxseSBsaWtlIDxhbGxfdXJscz5cbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgIG5ldyBhcGkuUmVxdWVzdENvbnRlbnRTY3JpcHQoe1xuICAgICAgICAgICAganM6IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLmNvbnRlbnRfc2NyaXB0c1swXS5qcyxcbiAgICAgICAgICAgIC8vIE5vdCB1c2luZyBgYWxsRnJhbWVzOnRydWVgIGFzIHRoZXJlJ3Mgbm8gaW1wcm92ZW1lbnQgaW4gZnJhbWVzXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9XSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcjL2NvbW1vbi9ldmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRXZlbnRFbWl0dGVyKFtcbiAgJ3NjcmlwdEVkaXQnLFxuICAnc2NyaXB0Q2hhbmdlZCcsXG5dKTtcbiIsImltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZSc7XG5pbXBvcnQgeyBnZXRTY3JpcHRzIH0gZnJvbSAnLi4vdXRpbHMvZGInO1xuXG5leHBvcnQgY29uc3Qgc2NyaXB0ID0ge1xuICAvKipcbiAgICogVXBkYXRlIGFuIGV4aXN0aW5nIHNjcmlwdCBpZGVudGlmaWVkIGJ5IHRoZSBwcm92aWRlZCBpZFxuICAgKiBAcGFyYW0ge3sgaWQsIGNvZGUsIG1lc3NhZ2UsIGlzTmV3LCBjb25maWcsIGN1c3RvbSwgcHJvcHMsIHVwZGF0ZSB9fSBkYXRhXG4gICAqIEByZXR1cm4ge1Byb21pc2U8eyBpc05ldz8sIHVwZGF0ZSwgd2hlcmUgfT59XG4gICAqL1xuICB1cGRhdGU6IGNvbW1hbmRzLlBhcnNlU2NyaXB0LFxuICAvKipcbiAgICogTGlzdCBhbGwgYXZhaWxhYmxlIHNjcmlwdHMsIHdpdGhvdXQgc2NyaXB0IGNvZGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxWTVNjcmlwdFtdPn1cbiAgICovXG4gIGxpc3Q6IGFzeW5jICgpID0+IGdldFNjcmlwdHMoKSxcbiAgLyoqXG4gICAqIEdldCBzY3JpcHQgY29kZSBvZiBhbiBleGlzdGluZyBzY3JpcHRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIGdldDogY29tbWFuZHMuR2V0U2NyaXB0Q29kZSxcbiAgLyoqXG4gICAqIFJlbW92ZSBzY3JpcHRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICByZW1vdmU6IGlkID0+IGNvbW1hbmRzLk1hcmtSZW1vdmVkKHsgaWQsIHJlbW92ZWQ6IHRydWUgfSksXG59O1xuIiwiaW1wb3J0IHtcbiAgZGVib3VuY2UsIG5vcm1hbGl6ZUtleXMsIHJlcXVlc3QsIG5vb3AsIG1ha2VQYXVzZSwgZW5zdXJlQXJyYXksIHNlbmRDbWQsXG59IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IFRJTUVPVVRfSE9VUiB9IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQge1xuICBmb3JFYWNoRW50cnksIG9iamVjdFNldCwgb2JqZWN0UGljayxcbn0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCB7XG4gIGdldEV2ZW50RW1pdHRlciwgZ2V0T3B0aW9uLCBzZXRPcHRpb24sIGhvb2tPcHRpb25zLFxufSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge1xuICBzb3J0U2NyaXB0cyxcbiAgdXBkYXRlU2NyaXB0SW5mbyxcbn0gZnJvbSAnLi4vdXRpbHMvZGInO1xuaW1wb3J0IHsgc2NyaXB0IGFzIHBsdWdpblNjcmlwdCB9IGZyb20gJy4uL3BsdWdpbic7XG5cbmNvbnN0IHNlcnZpY2VOYW1lcyA9IFtdO1xuY29uc3Qgc2VydmljZUNsYXNzZXMgPSBbXTtcbmNvbnN0IHNlcnZpY2VzID0ge307XG5jb25zdCBhdXRvU3luYyA9IGRlYm91bmNlKHN5bmMsIFRJTUVPVVRfSE9VUik7XG5sZXQgd29ya2luZyA9IFByb21pc2UucmVzb2x2ZSgpO1xubGV0IHN5bmNDb25maWc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtRmlsZW5hbWUoeyBuYW1lLCB1cmkgfSkge1xuICAvLyBXaGVuIGdldCBvciByZW1vdmUsIGN1cnJlbnQgbmFtZSBzaG91bGQgYmUgcHJlZmVyZWRcbiAgaWYgKG5hbWUpIHJldHVybiBuYW1lO1xuICAvLyBvdGhlcndpc2UgdXJpIGRlcml2ZWQgbmFtZSBzaG91bGQgYmUgcHJlZmVyZWRcbiAgLy8gdXJpIGlzIGFscmVhZHkgZW5jb2RlZCBieSBgZW5jb2RlRmlsZW5hbWVgXG4gIHJldHVybiBgdm1AMi0ke3VyaX1gO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU2NyaXB0RmlsZShuYW1lKSB7XG4gIHJldHVybiAvXnZtKD86QFxcZCspPy0vLnRlc3QobmFtZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJJKG5hbWUpIHtcbiAgY29uc3QgaSA9IG5hbWUuaW5kZXhPZignLScpO1xuICBjb25zdCBbLCB2ZXJzaW9uXSA9IG5hbWUuc2xpY2UoMCwgaSkuc3BsaXQoJ0AnKTtcbiAgaWYgKHZlcnNpb24gPT09ICcyJykge1xuICAgIC8vIHVyaSBpcyBlbmNvZGVkIGJ5IGBlbmNvZGVkRmlsZW5hbWVgLCBzbyB3ZSBzaG91bGQgbm90IGRlY29kZSBpdCBoZXJlXG4gICAgcmV0dXJuIG5hbWUuc2xpY2UoaSArIDEpO1xuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChuYW1lLnNsaWNlKDMpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5hbWUuc2xpY2UoMyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdENvbmZpZygpIHtcbiAgZnVuY3Rpb24gZ2V0KGtleSwgZGVmKSB7XG4gICAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5KTtcbiAgICBrZXlzLnVuc2hpZnQoJ3N5bmMnKTtcbiAgICByZXR1cm4gZ2V0T3B0aW9uKGtleXMsIGRlZik7XG4gIH1cbiAgZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBrZXlzID0gbm9ybWFsaXplS2V5cyhrZXkpO1xuICAgIGtleXMudW5zaGlmdCgnc3luYycpO1xuICAgIHNldE9wdGlvbihrZXlzLCB2YWx1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBsZXQgY29uZmlnID0gZ2V0T3B0aW9uKCdzeW5jJyk7XG4gICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zZXJ2aWNlcykge1xuICAgICAgY29uZmlnID0ge1xuICAgICAgICBzZXJ2aWNlczoge30sXG4gICAgICB9O1xuICAgICAgc2V0KFtdLCBjb25maWcpO1xuICAgIH1cbiAgfVxuICBpbml0KCk7XG4gIHJldHVybiB7IGdldCwgc2V0IH07XG59XG5mdW5jdGlvbiBzZXJ2aWNlQ29uZmlnKG5hbWUpIHtcbiAgZnVuY3Rpb24gZ2V0S2V5cyhrZXkpIHtcbiAgICBjb25zdCBrZXlzID0gbm9ybWFsaXplS2V5cyhrZXkpO1xuICAgIGtleXMudW5zaGlmdCgnc2VydmljZXMnLCBuYW1lKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfVxuICBmdW5jdGlvbiBnZXQoa2V5LCBkZWYpIHtcbiAgICByZXR1cm4gc3luY0NvbmZpZy5nZXQoZ2V0S2V5cyhrZXkpLCBkZWYpO1xuICB9XG4gIGZ1bmN0aW9uIHNldChrZXksIHZhbCkge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jykge1xuICAgICAga2V5Ojpmb3JFYWNoRW50cnkoKFtrLCB2XSkgPT4ge1xuICAgICAgICBzeW5jQ29uZmlnLnNldChnZXRLZXlzKGspLCB2KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzeW5jQ29uZmlnLnNldChnZXRLZXlzKGtleSksIHZhbCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHN5bmNDb25maWcuc2V0KGdldEtleXMoKSwge30pO1xuICB9XG4gIHJldHVybiB7IGdldCwgc2V0LCBjbGVhciB9O1xufVxuZnVuY3Rpb24gc2VydmljZVN0YXRlKHZhbGlkU3RhdGVzLCBpbml0aWFsU3RhdGUsIG9uQ2hhbmdlKSB7XG4gIGxldCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSB8fCB2YWxpZFN0YXRlc1swXTtcbiAgZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBmdW5jdGlvbiBzZXQobmV3U3RhdGUpIHtcbiAgICBpZiAodmFsaWRTdGF0ZXMuaW5jbHVkZXMobmV3U3RhdGUpKSB7XG4gICAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgaWYgKG9uQ2hhbmdlKSBvbkNoYW5nZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgc3RhdGU6JywgbmV3U3RhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0KCk7XG4gIH1cbiAgZnVuY3Rpb24gaXMoc3RhdGVzKSB7XG4gICAgcmV0dXJuIGVuc3VyZUFycmF5KHN0YXRlcykuaW5jbHVkZXMoc3RhdGUpO1xuICB9XG4gIHJldHVybiB7IGdldCwgc2V0LCBpcyB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlcygpIHtcbiAgcmV0dXJuIHNlcnZpY2VOYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gc2VydmljZXNbbmFtZV07XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHNlcnZpY2UubmFtZSxcbiAgICAgIGRpc3BsYXlOYW1lOiBzZXJ2aWNlLmRpc3BsYXlOYW1lLFxuICAgICAgYXV0aFN0YXRlOiBzZXJ2aWNlLmF1dGhTdGF0ZS5nZXQoKSxcbiAgICAgIHN5bmNTdGF0ZTogc2VydmljZS5zeW5jU3RhdGUuZ2V0KCksXG4gICAgICBsYXN0U3luYzogc2VydmljZS5jb25maWcuZ2V0KCdtZXRhJywge30pLmxhc3RTeW5jLFxuICAgICAgcHJvZ3Jlc3M6IHNlcnZpY2UucHJvZ3Jlc3MsXG4gICAgICBwcm9wZXJ0aWVzOiBzZXJ2aWNlLnByb3BlcnRpZXMsXG4gICAgICB1c2VyQ29uZmlnOiBzZXJ2aWNlLmdldFVzZXJDb25maWcoKSxcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2NyaXB0RGF0YShzY3JpcHQsIHN5bmNWZXJzaW9uLCBleHRyYSkge1xuICBsZXQgZGF0YTtcbiAgaWYgKHN5bmNWZXJzaW9uID09PSAyKSB7XG4gICAgZGF0YSA9IHtcbiAgICAgIHZlcnNpb246IHN5bmNWZXJzaW9uLFxuICAgICAgY3VzdG9tOiBzY3JpcHQuY3VzdG9tLFxuICAgICAgY29uZmlnOiBzY3JpcHQuY29uZmlnLFxuICAgICAgcHJvcHM6IG9iamVjdFBpY2soc2NyaXB0LnByb3BzLCBbJ2xhc3RVcGRhdGVkJ10pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAoc3luY1ZlcnNpb24gPT09IDEpIHtcbiAgICBkYXRhID0ge1xuICAgICAgdmVyc2lvbjogc3luY1ZlcnNpb24sXG4gICAgICBtb3JlOiB7XG4gICAgICAgIGN1c3RvbTogc2NyaXB0LmN1c3RvbSxcbiAgICAgICAgZW5hYmxlZDogc2NyaXB0LmNvbmZpZy5lbmFibGVkLFxuICAgICAgICB1cGRhdGU6IHNjcmlwdC5jb25maWcuc2hvdWxkVXBkYXRlLFxuICAgICAgICBsYXN0VXBkYXRlZDogc2NyaXB0LnByb3BzLmxhc3RVcGRhdGVkLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKGRhdGEsIGV4dHJhKTtcbn1cbmZ1bmN0aW9uIHBhcnNlU2NyaXB0RGF0YShyYXcpIHtcbiAgY29uc3QgZGF0YSA9IHt9O1xuICB0cnkge1xuICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UocmF3KTtcbiAgICBkYXRhLmNvZGUgPSBvYmouY29kZTtcbiAgICBpZiAob2JqLnZlcnNpb24gPT09IDIpIHtcbiAgICAgIGRhdGEuY29uZmlnID0gb2JqLmNvbmZpZztcbiAgICAgIGRhdGEuY3VzdG9tID0gb2JqLmN1c3RvbTtcbiAgICAgIGRhdGEucHJvcHMgPSBvYmoucHJvcHM7XG4gICAgfSBlbHNlIGlmIChvYmoudmVyc2lvbiA9PT0gMSkge1xuICAgICAgaWYgKG9iai5tb3JlKSB7XG4gICAgICAgIGRhdGEuY3VzdG9tID0gb2JqLm1vcmUuY3VzdG9tO1xuICAgICAgICBkYXRhLmNvbmZpZyA9IG9iamVjdFB1cmlmeSh7XG4gICAgICAgICAgZW5hYmxlZDogb2JqLm1vcmUuZW5hYmxlZCxcbiAgICAgICAgICBzaG91bGRVcGRhdGU6IG9iai5tb3JlLnVwZGF0ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRhdGEucHJvcHMgPSBvYmplY3RQdXJpZnkoe1xuICAgICAgICAgIGxhc3RVcGRhdGVkOiBvYmoubW9yZS5sYXN0VXBkYXRlZCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgZGF0YS5jb2RlID0gcmF3O1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBvYmplY3RQdXJpZnkob2JqKSB7XG4gIC8vIFJlbW92ZSBrZXlzIHdpdGggdW5kZWZpbmVkIHZhbHVlc1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgb2JqLmZvckVhY2gob2JqZWN0UHVyaWZ5KTtcbiAgfSBlbHNlIGlmIChvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICBvYmo6OmZvckVhY2hFbnRyeSgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykgZGVsZXRlIG9ialtrZXldO1xuICAgICAgZWxzZSBvYmplY3RQdXJpZnkodmFsdWUpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHNlcnZpY2VGYWN0b3J5KGJhc2UpIHtcbiAgY29uc3QgU2VydmljZSA9IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9O1xuICBTZXJ2aWNlLnByb3RvdHlwZSA9IGJhc2U7XG4gIFNlcnZpY2UuZXh0ZW5kID0gZXh0ZW5kU2VydmljZTtcbiAgcmV0dXJuIFNlcnZpY2U7XG59XG5mdW5jdGlvbiBleHRlbmRTZXJ2aWNlKG9wdGlvbnMpIHtcbiAgcmV0dXJuIHNlcnZpY2VGYWN0b3J5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZSh0aGlzLnByb3RvdHlwZSksIG9wdGlvbnMpKTtcbn1cblxuY29uc3Qgb25TdGF0ZUNoYW5nZSA9IGRlYm91bmNlKCgpID0+IHtcbiAgc2VuZENtZCgnVXBkYXRlU3luYycsIGdldFN0YXRlcygpKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgQmFzZVNlcnZpY2UgPSBzZXJ2aWNlRmFjdG9yeSh7XG4gIG5hbWU6ICdiYXNlJyxcbiAgZGlzcGxheU5hbWU6ICdCYXNlU2VydmljZScsXG4gIGRlbGF5VGltZTogMTAwMCxcbiAgdXJsUHJlZml4OiAnJyxcbiAgbWV0YUZpbGU6ICdWaW9sZW50bW9ua2V5JyxcbiAgcHJvcGVydGllczoge1xuICAgIGF1dGhUeXBlOiAnb2F1dGgnLFxuICB9LFxuICBnZXRVc2VyQ29uZmlnOiBub29wLFxuICBzZXRVc2VyQ29uZmlnOiBub29wLFxuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSB7XG4gICAgICBmaW5pc2hlZDogMCxcbiAgICAgIHRvdGFsOiAwLFxuICAgIH07XG4gICAgdGhpcy5jb25maWcgPSBzZXJ2aWNlQ29uZmlnKHRoaXMubmFtZSk7XG4gICAgdGhpcy5hdXRoU3RhdGUgPSBzZXJ2aWNlU3RhdGUoW1xuICAgICAgJ2lkbGUnLFxuICAgICAgJ25vLWF1dGgnLFxuICAgICAgJ2luaXRpYWxpemluZycsXG4gICAgICAnYXV0aG9yaXppbmcnLCAvLyBpbiBjYXNlIHNvbWUgc2VydmljZXMgcmVxdWlyZSBhc3luY2hyb25vdXMgcmVxdWVzdHMgdG8gZ2V0IGFjY2Vzc190b2tlbnNcbiAgICAgICdhdXRob3JpemVkJyxcbiAgICAgICd1bmF1dGhvcml6ZWQnLFxuICAgICAgJ2Vycm9yJyxcbiAgICBdLCBudWxsLCBvblN0YXRlQ2hhbmdlKTtcbiAgICB0aGlzLnN5bmNTdGF0ZSA9IHNlcnZpY2VTdGF0ZShbXG4gICAgICAnaWRsZScsXG4gICAgICAncmVhZHknLFxuICAgICAgJ3N5bmNpbmcnLFxuICAgICAgJ2Vycm9yJyxcbiAgICBdLCBudWxsLCBvblN0YXRlQ2hhbmdlKTtcbiAgICB0aGlzLmxhc3RGZXRjaCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRoaXMuc3RhcnRTeW5jID0gdGhpcy5zeW5jRmFjdG9yeSgpO1xuICAgIGNvbnN0IGV2ZW50cyA9IGdldEV2ZW50RW1pdHRlcigpO1xuICAgIFsnb24nLCAnb2ZmJywgJ2ZpcmUnXVxuICAgIC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHRoaXNba2V5XSA9ICguLi5hcmdzKSA9PiB7IGV2ZW50c1trZXldKC4uLmFyZ3MpOyB9O1xuICAgIH0pO1xuICB9LFxuICBsb2coLi4uYXJncykge1xuICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgfSxcbiAgc3luY0ZhY3RvcnkoKSB7XG4gICAgbGV0IHByb21pc2U7XG4gICAgbGV0IGRlYm91bmNlZFJlc29sdmU7XG4gICAgY29uc3Qgc2hvdWxkU3luYyA9ICgpID0+IHRoaXMuYXV0aFN0YXRlLmlzKCdhdXRob3JpemVkJykgJiYgZ2V0Q3VycmVudCgpID09PSB0aGlzLm5hbWU7XG4gICAgY29uc3QgZ2V0UmVhZHkgPSAoKSA9PiB7XG4gICAgICBpZiAoIXNob3VsZFN5bmMoKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgdGhpcy5sb2coJ1JlYWR5IHRvIHN5bmM6JywgdGhpcy5kaXNwbGF5TmFtZSk7XG4gICAgICB0aGlzLnN5bmNTdGF0ZS5zZXQoJ3JlYWR5Jyk7XG4gICAgICB3b3JraW5nID0gd29ya2luZy50aGVuKCgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGRlYm91bmNlZFJlc29sdmUgPSBkZWJvdW5jZShyZXNvbHZlLCAxMCAqIDEwMDApO1xuICAgICAgICBkZWJvdW5jZWRSZXNvbHZlKCk7XG4gICAgICB9KSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZFN5bmMoKSkgcmV0dXJuIHRoaXMuc3luYygpO1xuICAgICAgICB0aGlzLnN5bmNTdGF0ZS5zZXQoJ2lkbGUnKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4geyBjb25zb2xlLmVycm9yKGVycik7IH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgICAgICBkZWJvdW5jZWRSZXNvbHZlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgICAgcHJvbWlzZSA9IHdvcmtpbmc7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBzdGFydFN5bmMoKSB7XG4gICAgICBpZiAoIXByb21pc2UpIGdldFJlYWR5KCk7XG4gICAgICBpZiAoZGVib3VuY2VkUmVzb2x2ZSkgZGVib3VuY2VkUmVzb2x2ZSgpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiBzdGFydFN5bmM7XG4gIH0sXG4gIHByZXBhcmVIZWFkZXJzKCkge1xuICAgIHRoaXMuaGVhZGVycyA9IHt9O1xuICB9LFxuICBwcmVwYXJlKCkge1xuICAgIHRoaXMuYXV0aFN0YXRlLnNldCgnaW5pdGlhbGl6aW5nJyk7XG4gICAgcmV0dXJuICh0aGlzLmluaXRUb2tlbigpID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMudXNlcigpKSA6IFByb21pc2UucmVqZWN0KHtcbiAgICAgIHR5cGU6ICduby1hdXRoJyxcbiAgICB9KSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmF1dGhTdGF0ZS5zZXQoJ2F1dGhvcml6ZWQnKTtcbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICBpZiAoWyduby1hdXRoJywgJ3VuYXV0aG9yaXplZCddLmluY2x1ZGVzKGVycj8udHlwZSkpIHtcbiAgICAgICAgdGhpcy5hdXRoU3RhdGUuc2V0KGVyci50eXBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgdGhpcy5hdXRoU3RhdGUuc2V0KCdlcnJvcicpO1xuICAgICAgfVxuICAgICAgdGhpcy5zeW5jU3RhdGUuc2V0KCdpZGxlJyk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH0sXG4gIGNoZWNrU3luYygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlKClcbiAgICAudGhlbigoKSA9PiB0aGlzLnN0YXJ0U3luYygpKTtcbiAgfSxcbiAgdXNlcjogbm9vcCxcbiAgYWNxdWlyZUxvY2s6IG5vb3AsXG4gIHJlbGVhc2VMb2NrOiBub29wLFxuICBoYW5kbGVNZXRhRXJyb3IoZXJyKSB7XG4gICAgdGhyb3cgZXJyO1xuICB9LFxuICBnZXRNZXRhKCkge1xuICAgIHJldHVybiB0aGlzLmdldCh7IG5hbWU6IHRoaXMubWV0YUZpbGUgfSlcbiAgICAudGhlbihkYXRhID0+IEpTT04ucGFyc2UoZGF0YSkpXG4gICAgLmNhdGNoKGVyciA9PiB0aGlzLmhhbmRsZU1ldGFFcnJvcihlcnIpKVxuICAgIC50aGVuKGRhdGEgPT4gKHtcbiAgICAgIG5hbWU6IHRoaXMubWV0YUZpbGUsXG4gICAgICBkYXRhLFxuICAgIH0pKTtcbiAgfSxcbiAgaW5pdFRva2VuKCkge1xuICAgIHRoaXMucHJlcGFyZUhlYWRlcnMoKTtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuY29uZmlnLmdldCgndG9rZW4nKTtcbiAgICB0aGlzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiBudWxsO1xuICAgIHJldHVybiAhIXRva2VuO1xuICB9LFxuICBsb2FkRGF0YShvcHRpb25zKSB7XG4gICAgY29uc3QgeyBwcm9ncmVzcyB9ID0gdGhpcztcbiAgICBjb25zdCB7IGRlbGF5ID0gdGhpcy5kZWxheVRpbWUgfSA9IG9wdGlvbnM7XG4gICAgbGV0IGxhc3RGZXRjaCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGlmIChkZWxheSkge1xuICAgICAgbGFzdEZldGNoID0gdGhpcy5sYXN0RmV0Y2hcbiAgICAgIC50aGVuKHRzID0+IG1ha2VQYXVzZShkZWxheSAtIChEYXRlLm5vdygpIC0gdHMpKSlcbiAgICAgIC50aGVuKCgpID0+IERhdGUubm93KCkpO1xuICAgICAgdGhpcy5sYXN0RmV0Y2ggPSBsYXN0RmV0Y2g7XG4gICAgfVxuICAgIHByb2dyZXNzLnRvdGFsICs9IDE7XG4gICAgb25TdGF0ZUNoYW5nZSgpO1xuICAgIHJldHVybiBsYXN0RmV0Y2gudGhlbigoKSA9PiB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmhlYWRlcnMsIG9wdGlvbnMuaGVhZGVycyk7XG4gICAgICBsZXQgeyB1cmwgfSA9IG9wdGlvbnM7XG4gICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgdXJsID0gKG9wdGlvbnMucHJlZml4ID8/IHRoaXMudXJsUHJlZml4KSArIHVybDtcbiAgICAgIHJldHVybiByZXF1ZXN0KHVybCwgb3B0aW9ucyk7XG4gICAgfSlcbiAgICAudGhlbigoeyBkYXRhIH0pID0+ICh7IGRhdGEgfSksIGVycm9yID0+ICh7IGVycm9yIH0pKVxuICAgIC50aGVuKCh7IGRhdGEsIGVycm9yIH0pID0+IHtcbiAgICAgIHByb2dyZXNzLmZpbmlzaGVkICs9IDE7XG4gICAgICBvblN0YXRlQ2hhbmdlKCk7XG4gICAgICBpZiAoZXJyb3IpIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0TG9jYWxEYXRhKCkge1xuICAgIHJldHVybiBwbHVnaW5TY3JpcHQubGlzdCgpO1xuICB9LFxuICBnZXRTeW5jRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNZXRhKClcbiAgICAudGhlbihyZW1vdGVNZXRhID0+IFByb21pc2UuYWxsKFtcbiAgICAgIHJlbW90ZU1ldGEsXG4gICAgICB0aGlzLmxpc3QoKSxcbiAgICAgIHRoaXMuZ2V0TG9jYWxEYXRhKCksXG4gICAgXSkpO1xuICB9LFxuICBzeW5jKCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSB7XG4gICAgICBmaW5pc2hlZDogMCxcbiAgICAgIHRvdGFsOiAwLFxuICAgIH07XG4gICAgdGhpcy5zeW5jU3RhdGUuc2V0KCdzeW5jaW5nJyk7XG4gICAgLy8gQXZvaWQgc2ltdWx0YW5lb3VzIHJlcXVlc3RzXG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZSgpXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5nZXRTeW5jRGF0YSgpKVxuICAgIC50aGVuKGRhdGEgPT4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuYWNxdWlyZUxvY2soKSkudGhlbigoKSA9PiBkYXRhKSlcbiAgICAudGhlbigoW3JlbW90ZU1ldGEsIHJlbW90ZURhdGEsIGxvY2FsRGF0YV0pID0+IHtcbiAgICAgIGNvbnN0IHJlbW90ZU1ldGFEYXRhID0gcmVtb3RlTWV0YS5kYXRhIHx8IHt9O1xuICAgICAgY29uc3QgcmVtb3RlTWV0YUluZm8gPSByZW1vdGVNZXRhRGF0YS5pbmZvIHx8IHt9O1xuICAgICAgY29uc3QgcmVtb3RlVGltZXN0YW1wID0gcmVtb3RlTWV0YURhdGEudGltZXN0YW1wIHx8IDA7XG4gICAgICBsZXQgcmVtb3RlQ2hhbmdlZCA9ICFyZW1vdGVUaW1lc3RhbXBcbiAgICAgICAgfHwgT2JqZWN0LmtleXMocmVtb3RlTWV0YUluZm8pLmxlbmd0aCAhPT0gcmVtb3RlRGF0YS5sZW5ndGg7XG4gICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgZ2xvYmFsTGFzdE1vZGlmaWVkID0gZ2V0T3B0aW9uKCdsYXN0TW9kaWZpZWQnKTtcbiAgICAgIGNvbnN0IHJlbW90ZUl0ZW1NYXAgPSB7fTtcbiAgICAgIGNvbnN0IGxvY2FsTWV0YSA9IHRoaXMuY29uZmlnLmdldCgnbWV0YScsIHt9KTtcbiAgICAgIGNvbnN0IGZpcnN0U3luYyA9ICFsb2NhbE1ldGEudGltZXN0YW1wO1xuICAgICAgY29uc3Qgb3V0ZGF0ZWQgPSBmaXJzdFN5bmMgfHwgcmVtb3RlVGltZXN0YW1wID4gbG9jYWxNZXRhLnRpbWVzdGFtcDtcbiAgICAgIHRoaXMubG9nKCdGaXJzdCBzeW5jOicsIGZpcnN0U3luYyk7XG4gICAgICB0aGlzLmxvZygnT3V0ZGF0ZWQ6Jywgb3V0ZGF0ZWQsICcoJywgJ2xvY2FsOicsIGxvY2FsTWV0YS50aW1lc3RhbXAsICdyZW1vdGU6JywgcmVtb3RlVGltZXN0YW1wLCAnKScpO1xuICAgICAgY29uc3QgcHV0TG9jYWwgPSBbXTtcbiAgICAgIGNvbnN0IHB1dFJlbW90ZSA9IFtdO1xuICAgICAgY29uc3QgZGVsUmVtb3RlID0gW107XG4gICAgICBjb25zdCBkZWxMb2NhbCA9IFtdO1xuICAgICAgY29uc3QgdXBkYXRlTG9jYWwgPSBbXTtcbiAgICAgIHJlbW90ZU1ldGFEYXRhLmluZm8gPSByZW1vdGVEYXRhLnJlZHVjZSgoaW5mbywgaXRlbSkgPT4ge1xuICAgICAgICByZW1vdGVJdGVtTWFwW2l0ZW0udXJpXSA9IGl0ZW07XG4gICAgICAgIGxldCBpdGVtSW5mbyA9IHJlbW90ZU1ldGFJbmZvW2l0ZW0udXJpXTtcbiAgICAgICAgaWYgKCFpdGVtSW5mbykge1xuICAgICAgICAgIGl0ZW1JbmZvID0ge307XG4gICAgICAgICAgcmVtb3RlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mb1tpdGVtLnVyaV0gPSBpdGVtSW5mbztcbiAgICAgICAgaWYgKCFpdGVtSW5mby5tb2RpZmllZCkge1xuICAgICAgICAgIGl0ZW1JbmZvLm1vZGlmaWVkID0gbm93O1xuICAgICAgICAgIHJlbW90ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgfSwge30pO1xuICAgICAgbG9jYWxEYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgeyBwcm9wczogeyB1cmksIHBvc2l0aW9uLCBsYXN0TW9kaWZpZWQgfSB9ID0gaXRlbTtcbiAgICAgICAgY29uc3QgcmVtb3RlSW5mbyA9IHJlbW90ZU1ldGFEYXRhLmluZm9bdXJpXTtcbiAgICAgICAgY29uc3QgcmVtb3RlSXRlbSA9IHJlbW90ZUl0ZW1NYXBbdXJpXTtcbiAgICAgICAgaWYgKHJlbW90ZUluZm8gJiYgcmVtb3RlSXRlbSkge1xuICAgICAgICAgIGlmIChmaXJzdFN5bmMgfHwgIWxhc3RNb2RpZmllZCB8fCByZW1vdGVJbmZvLm1vZGlmaWVkID4gbGFzdE1vZGlmaWVkKSB7XG4gICAgICAgICAgICBwdXRMb2NhbC5wdXNoKHsgbG9jYWw6IGl0ZW0sIHJlbW90ZTogcmVtb3RlSXRlbSwgaW5mbzogcmVtb3RlSW5mbyB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlbW90ZUluZm8ubW9kaWZpZWQgPCBsYXN0TW9kaWZpZWQpIHtcbiAgICAgICAgICAgICAgcHV0UmVtb3RlLnB1c2goeyBsb2NhbDogaXRlbSwgcmVtb3RlOiByZW1vdGVJdGVtIH0pO1xuICAgICAgICAgICAgICByZW1vdGVJbmZvLm1vZGlmaWVkID0gbGFzdE1vZGlmaWVkO1xuICAgICAgICAgICAgICByZW1vdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW1vdGVJbmZvLnBvc2l0aW9uICE9PSBwb3NpdGlvbikge1xuICAgICAgICAgICAgICBpZiAocmVtb3RlSW5mby5wb3NpdGlvbiAmJiBnbG9iYWxMYXN0TW9kaWZpZWQgPD0gcmVtb3RlVGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTG9jYWwucHVzaCh7IGxvY2FsOiBpdGVtLCByZW1vdGU6IHJlbW90ZUl0ZW0sIGluZm86IHJlbW90ZUluZm8gfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3RlSW5mby5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHJlbW90ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSByZW1vdGVJdGVtTWFwW3VyaV07XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RTeW5jIHx8ICFvdXRkYXRlZCB8fCBsYXN0TW9kaWZpZWQgPiByZW1vdGVUaW1lc3RhbXApIHtcbiAgICAgICAgICBwdXRSZW1vdGUucHVzaCh7IGxvY2FsOiBpdGVtIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbExvY2FsLnB1c2goeyBsb2NhbDogaXRlbSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZW1vdGVJdGVtTWFwOjpmb3JFYWNoRW50cnkoKFt1cmksIGl0ZW1dKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZm8gPSByZW1vdGVNZXRhRGF0YS5pbmZvW3VyaV07XG4gICAgICAgIGlmIChvdXRkYXRlZCkge1xuICAgICAgICAgIHB1dExvY2FsLnB1c2goeyByZW1vdGU6IGl0ZW0sIGluZm8gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsUmVtb3RlLnB1c2goeyByZW1vdGU6IGl0ZW0gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcHJvbWlzZVF1ZXVlID0gW1xuICAgICAgICAuLi5wdXRMb2NhbC5tYXAoKHsgcmVtb3RlLCBpbmZvIH0pID0+IHtcbiAgICAgICAgICB0aGlzLmxvZygnRG93bmxvYWQgc2NyaXB0OicsIHJlbW90ZS51cmkpO1xuICAgICAgICAgIHJldHVybiB0aGlzLmdldChyZW1vdGUpXG4gICAgICAgICAgLnRoZW4oKHJhdykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHBhcnNlU2NyaXB0RGF0YShyYXcpO1xuICAgICAgICAgICAgLy8gSW52YWxpZCBkYXRhXG4gICAgICAgICAgICBpZiAoIWRhdGEuY29kZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGluZm8ubW9kaWZpZWQpIG9iamVjdFNldChkYXRhLCAncHJvcHMubGFzdE1vZGlmaWVkJywgaW5mby5tb2RpZmllZCk7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICtpbmZvLnBvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uKSBkYXRhLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgICAgICBpZiAoIWdldE9wdGlvbignc3luY1NjcmlwdFN0YXR1cycpICYmIGRhdGEuY29uZmlnKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBkYXRhLmNvbmZpZy5lbmFibGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBsdWdpblNjcmlwdC51cGRhdGUoZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICAuLi5wdXRSZW1vdGUubWFwKCh7IGxvY2FsLCByZW1vdGUgfSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nKCdVcGxvYWQgc2NyaXB0OicsIGxvY2FsLnByb3BzLnVyaSk7XG4gICAgICAgICAgcmV0dXJuIHBsdWdpblNjcmlwdC5nZXQobG9jYWwucHJvcHMuaWQpXG4gICAgICAgICAgLnRoZW4oKGNvZGUpID0+IHtcbiAgICAgICAgICAgIC8vIFhYWCB1c2UgdmVyc2lvbiAxIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBWaW9sZW50bW9ua2V5IG9uIG90aGVyIHBsYXRmb3Jtc1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGdldFNjcmlwdERhdGEobG9jYWwsIDEsIHsgY29kZSB9KTtcbiAgICAgICAgICAgIHJlbW90ZU1ldGFEYXRhLmluZm9bbG9jYWwucHJvcHMudXJpXSA9IHtcbiAgICAgICAgICAgICAgbW9kaWZpZWQ6IGxvY2FsLnByb3BzLmxhc3RNb2RpZmllZCxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGxvY2FsLnByb3BzLnBvc2l0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlbW90ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHV0KFxuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCByZW1vdGUsIHtcbiAgICAgICAgICAgICAgICB1cmk6IGxvY2FsLnByb3BzLnVyaSxcbiAgICAgICAgICAgICAgICBuYW1lOiBudWxsLCAvLyBwcmVmZXIgdXNpbmcgdXJpIG9uIFBVVFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgLi4uZGVsUmVtb3RlLm1hcCgoeyByZW1vdGUgfSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nKCdSZW1vdmUgcmVtb3RlIHNjcmlwdDonLCByZW1vdGUudXJpKTtcbiAgICAgICAgICBkZWxldGUgcmVtb3RlTWV0YURhdGEuaW5mb1tyZW1vdGUudXJpXTtcbiAgICAgICAgICByZW1vdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUocmVtb3RlKTtcbiAgICAgICAgfSksXG4gICAgICAgIC4uLmRlbExvY2FsLm1hcCgoeyBsb2NhbCB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2coJ1JlbW92ZSBsb2NhbCBzY3JpcHQ6JywgbG9jYWwucHJvcHMudXJpKTtcbiAgICAgICAgICByZXR1cm4gcGx1Z2luU2NyaXB0LnJlbW92ZShsb2NhbC5wcm9wcy5pZCk7XG4gICAgICAgIH0pLFxuICAgICAgICAuLi51cGRhdGVMb2NhbC5tYXAoKHsgbG9jYWwsIGluZm8gfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHVwZGF0ZXMgPSB7fTtcbiAgICAgICAgICBpZiAoaW5mby5wb3NpdGlvbikge1xuICAgICAgICAgICAgdXBkYXRlcy5wcm9wcyA9IHsgcG9zaXRpb246IGluZm8ucG9zaXRpb24gfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHVwZGF0ZVNjcmlwdEluZm8obG9jYWwucHJvcHMuaWQsIHVwZGF0ZXMpO1xuICAgICAgICB9KSxcbiAgICAgIF07XG4gICAgICBwcm9taXNlUXVldWUucHVzaChQcm9taXNlLmFsbChwcm9taXNlUXVldWUpLnRoZW4oKCkgPT4gc29ydFNjcmlwdHMoKSkudGhlbigoY2hhbmdlZCkgPT4ge1xuICAgICAgICBpZiAoIWNoYW5nZWQpIHJldHVybjtcbiAgICAgICAgcmVtb3RlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBwbHVnaW5TY3JpcHQubGlzdCgpXG4gICAgICAgIC50aGVuKChzY3JpcHRzKSA9PiB7XG4gICAgICAgICAgc2NyaXB0cy5mb3JFYWNoKChzY3JpcHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlbW90ZUluZm8gPSByZW1vdGVNZXRhRGF0YS5pbmZvW3NjcmlwdC5wcm9wcy51cmldO1xuICAgICAgICAgICAgaWYgKHJlbW90ZUluZm8pIHJlbW90ZUluZm8ucG9zaXRpb24gPSBzY3JpcHQucHJvcHMucG9zaXRpb247XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSkpO1xuICAgICAgcHJvbWlzZVF1ZXVlLnB1c2goUHJvbWlzZS5hbGwocHJvbWlzZVF1ZXVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgaWYgKHJlbW90ZUNoYW5nZWQpIHtcbiAgICAgICAgICByZW1vdGVNZXRhRGF0YS50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5wdXQocmVtb3RlTWV0YSwgSlNPTi5zdHJpbmdpZnkocmVtb3RlTWV0YURhdGEpKSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxNZXRhLnRpbWVzdGFtcCA9IHJlbW90ZU1ldGFEYXRhLnRpbWVzdGFtcDtcbiAgICAgICAgbG9jYWxNZXRhLmxhc3RTeW5jID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5jb25maWcuc2V0KCdtZXRhJywgbG9jYWxNZXRhKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgIH0pKTtcbiAgICAgIC8vIGlnbm9yZSBlcnJvcnMgdG8gZW5zdXJlIGFsbCBwcm9taXNlcyBhcmUgZnVsZmlsbGVkXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZVF1ZXVlLm1hcChwcm9taXNlID0+IHByb21pc2UudGhlbihub29wLCBlcnIgPT4gZXJyIHx8IHRydWUpKSlcbiAgICAgIC50aGVuKGVycm9ycyA9PiBlcnJvcnMuZmlsdGVyKEJvb2xlYW4pKVxuICAgICAgLnRoZW4oKGVycm9ycykgPT4geyBpZiAoZXJyb3JzLmxlbmd0aCkgdGhyb3cgZXJyb3JzOyB9KTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc3luY1N0YXRlLnNldCgnaWRsZScpO1xuICAgICAgdGhpcy5sb2coJ1N5bmMgZmluaXNoZWQ6JywgdGhpcy5kaXNwbGF5TmFtZSk7XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgdGhpcy5zeW5jU3RhdGUuc2V0KCdlcnJvcicpO1xuICAgICAgdGhpcy5sb2coJ0ZhaWxlZCBzeW5jaW5nOicsIHRoaXMuZGlzcGxheU5hbWUpO1xuICAgICAgdGhpcy5sb2coZXJyKTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IFByb21pc2UucmVzb2x2ZSh0aGlzLnJlbGVhc2VMb2NrKCkpLmNhdGNoKG5vb3ApKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIoRmFjdG9yeSkge1xuICBzZXJ2aWNlQ2xhc3Nlcy5wdXNoKEZhY3RvcnkpO1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudCgpIHtcbiAgcmV0dXJuIHN5bmNDb25maWcuZ2V0KCdjdXJyZW50Jyk7XG59XG5mdW5jdGlvbiBnZXRTZXJ2aWNlKG5hbWUpIHtcbiAgcmV0dXJuIHNlcnZpY2VzW25hbWUgfHwgZ2V0Q3VycmVudCgpXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICBpZiAoIXN5bmNDb25maWcpIHtcbiAgICBzeW5jQ29uZmlnID0gaW5pdENvbmZpZygpO1xuICAgIHNlcnZpY2VDbGFzc2VzLmZvckVhY2goKEZhY3RvcnkpID0+IHtcbiAgICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgRmFjdG9yeSgpO1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBzZXJ2aWNlO1xuICAgICAgc2VydmljZU5hbWVzLnB1c2gobmFtZSk7XG4gICAgICBzZXJ2aWNlc1tuYW1lXSA9IHNlcnZpY2U7XG4gICAgfSk7XG4gIH1cbiAgc3luYygpO1xufVxuXG5mdW5jdGlvbiBzeW5jT25lKHNlcnZpY2UpIHtcbiAgaWYgKHNlcnZpY2Uuc3luY1N0YXRlLmlzKFsncmVhZHknLCAnc3luY2luZyddKSkgcmV0dXJuO1xuICBpZiAoc2VydmljZS5hdXRoU3RhdGUuaXMoWydpZGxlJywgJ2Vycm9yJ10pKSByZXR1cm4gc2VydmljZS5jaGVja1N5bmMoKTtcbiAgaWYgKHNlcnZpY2UuYXV0aFN0YXRlLmlzKCdhdXRob3JpemVkJykpIHJldHVybiBzZXJ2aWNlLnN0YXJ0U3luYygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3luYygpIHtcbiAgY29uc3Qgc2VydmljZSA9IGdldFNlcnZpY2UoKTtcbiAgcmV0dXJuIHNlcnZpY2UgJiYgUHJvbWlzZS5yZXNvbHZlKHN5bmNPbmUoc2VydmljZSkpLnRoZW4oYXV0b1N5bmMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aG9yaXplKCkge1xuICBjb25zdCBzZXJ2aWNlID0gZ2V0U2VydmljZSgpO1xuICBpZiAoc2VydmljZSkgc2VydmljZS5hdXRob3JpemUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldm9rZSgpIHtcbiAgY29uc3Qgc2VydmljZSA9IGdldFNlcnZpY2UoKTtcbiAgaWYgKHNlcnZpY2UpIHNlcnZpY2UucmV2b2tlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb25maWcoY29uZmlnKSB7XG4gIGNvbnN0IHNlcnZpY2UgPSBnZXRTZXJ2aWNlKCk7XG4gIGlmIChzZXJ2aWNlKSB7XG4gICAgc2VydmljZS5zZXRVc2VyQ29uZmlnKGNvbmZpZyk7XG4gICAgcmV0dXJuIHNlcnZpY2UuY2hlY2tTeW5jKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5BdXRoUGFnZSh1cmwsIHJlZGlyZWN0VXJpKSB7XG4gIHVucmVnaXN0ZXJXZWJSZXF1ZXN0KCk7IC8vIG90aGVyd2lzZSBvdXIgbmV3IHRhYklkIHdpbGwgYmUgaWdub3JlZFxuICBicm93c2VyLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKG9uQmVmb3JlUmVxdWVzdCwge1xuICAgIHVybHM6IFtgJHtyZWRpcmVjdFVyaX0qYF0sXG4gICAgdHlwZXM6IFsnbWFpbl9mcmFtZSddLFxuICAgIHRhYklkOiAoYXdhaXQgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybCB9KSkuaWQsXG4gIH0sIFsnYmxvY2tpbmcnXSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXNwb25zZURldGFpbHN9IGluZm9cbiAqIEByZXR1cm5zIHtjaHJvbWUud2ViUmVxdWVzdC5CbG9ja2luZ1Jlc3BvbnNlfVxuICovXG5mdW5jdGlvbiBvbkJlZm9yZVJlcXVlc3QoaW5mbykge1xuICBpZiAoZ2V0U2VydmljZSgpLmNoZWNrQXV0aD8uKGluZm8udXJsKSkge1xuICAgIGJyb3dzZXIudGFicy5yZW1vdmUoaW5mby50YWJJZCk7XG4gICAgLy8gSWYgd2UgdW5yZWdpc3RlciB3aXRob3V0IHNldFRpbWVvdXQsIEFQSSB3aWxsIGlnbm9yZSB7IGNhbmNlbDogdHJ1ZSB9XG4gICAgc2V0VGltZW91dCh1bnJlZ2lzdGVyV2ViUmVxdWVzdCwgMCk7XG4gICAgcmV0dXJuIHsgY2FuY2VsOiB0cnVlIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5yZWdpc3RlcldlYlJlcXVlc3QoKSB7XG4gIGJyb3dzZXIud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QucmVtb3ZlTGlzdGVuZXIob25CZWZvcmVSZXF1ZXN0KTtcbn1cblxuaG9va09wdGlvbnMoKGRhdGEpID0+IHtcbiAgY29uc3QgdmFsdWUgPSBkYXRhPy5bJ3N5bmMuY3VycmVudCddO1xuICBpZiAodmFsdWUpIGluaXRpYWxpemUoKTtcbn0pO1xuIiwiaW1wb3J0IHsgbG9hZFF1ZXJ5LCBkdW1wUXVlcnkgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge1xuICBnZXRVUkksIGdldEl0ZW1GaWxlbmFtZSwgQmFzZVNlcnZpY2UsIGlzU2NyaXB0RmlsZSwgcmVnaXN0ZXIsXG4gIG9wZW5BdXRoUGFnZSxcbn0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgY29uZmlnID0ge1xuICBjbGllbnRfaWQ6ICdmMHExMnp1cDJ1eXM1dzgnLFxuICByZWRpcmVjdF91cmk6ICdodHRwczovL3Zpb2xlbnRtb25rZXkuZ2l0aHViLmlvL2F1dGhfZHJvcGJveC5odG1sJyxcbn07XG5cbmNvbnN0IGVzY1JFID0gL1tcXHUwMDdmLVxcdWZmZmZdL2c7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29udHJvbC1yZWdleFxuY29uc3QgZXNjRnVuYyA9IG0gPT4gYFxcXFx1JHsobS5jaGFyQ29kZUF0KDApICsgMHgxMDAwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpfWA7XG5cbmZ1bmN0aW9uIGpzb25TdHJpbmdpZnlTYWZlKG9iaikge1xuICBjb25zdCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoZXNjUkUsIGVzY0Z1bmMpO1xufVxuXG5jb25zdCBEcm9wYm94ID0gQmFzZVNlcnZpY2UuZXh0ZW5kKHtcbiAgbmFtZTogJ2Ryb3Bib3gnLFxuICBkaXNwbGF5TmFtZTogJ0Ryb3Bib3gnLFxuICB1c2VyKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZHJvcGJveGFwaS5jb20vMi91c2Vycy9nZXRfY3VycmVudF9hY2NvdW50JyxcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgdHlwZTogJ3VuYXV0aG9yaXplZCcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgZGF0YTogZXJyLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGhhbmRsZU1ldGFFcnJvcihyZXMpIHtcbiAgICBpZiAocmVzLnN0YXR1cyAhPT0gNDA5KSB0aHJvdyByZXM7XG4gIH0sXG4gIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICdodHRwczovL2FwaS5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL2xpc3RfZm9sZGVyJyxcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICB9LFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbihkYXRhID0+IChcbiAgICAgIGRhdGEuZW50cmllcy5maWx0ZXIoaXRlbSA9PiBpdGVtWycudGFnJ10gPT09ICdmaWxlJyAmJiBpc1NjcmlwdEZpbGUoaXRlbS5uYW1lKSkubWFwKG5vcm1hbGl6ZSlcbiAgICApKTtcbiAgfSxcbiAgZ2V0KGl0ZW0pIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9jb250ZW50LmRyb3Bib3hhcGkuY29tLzIvZmlsZXMvZG93bmxvYWQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnRHJvcGJveC1BUEktQXJnJzoganNvblN0cmluZ2lmeVNhZmUoe1xuICAgICAgICAgIHBhdGg6IGAvJHtuYW1lfWAsXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgcHV0KGl0ZW0sIGRhdGEpIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9jb250ZW50LmRyb3Bib3hhcGkuY29tLzIvZmlsZXMvdXBsb2FkJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0Ryb3Bib3gtQVBJLUFyZyc6IGpzb25TdHJpbmdpZnlTYWZlKHtcbiAgICAgICAgICBwYXRoOiBgLyR7bmFtZX1gLFxuICAgICAgICAgIG1vZGU6ICdvdmVyd3JpdGUnLFxuICAgICAgICB9KSxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGRhdGEsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKG5vcm1hbGl6ZSk7XG4gIH0sXG4gIHJlbW92ZShpdGVtKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmRyb3Bib3hhcGkuY29tLzIvZmlsZXMvZGVsZXRlJyxcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgcGF0aDogYC8ke25hbWV9YCxcbiAgICAgIH0sXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKG5vcm1hbGl6ZSk7XG4gIH0sXG4gIGF1dGhvcml6ZSgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICByZXNwb25zZV90eXBlOiAndG9rZW4nLFxuICAgICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50X2lkLFxuICAgICAgcmVkaXJlY3RfdXJpOiBjb25maWcucmVkaXJlY3RfdXJpLFxuICAgIH07XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vd3d3LmRyb3Bib3guY29tL29hdXRoMi9hdXRob3JpemU/JHtkdW1wUXVlcnkocGFyYW1zKX1gO1xuICAgIG9wZW5BdXRoUGFnZSh1cmwsIGNvbmZpZy5yZWRpcmVjdF91cmkpO1xuICB9LFxuICBhdXRob3JpemVkKHJhdykge1xuICAgIGNvbnN0IGRhdGEgPSBsb2FkUXVlcnkocmF3KTtcbiAgICBpZiAoZGF0YS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHRoaXMuY29uZmlnLnNldCh7XG4gICAgICAgIHVpZDogZGF0YS51aWQsXG4gICAgICAgIHRva2VuOiBkYXRhLmFjY2Vzc190b2tlbixcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY2hlY2tBdXRoKHVybCkge1xuICAgIGNvbnN0IHJlZGlyZWN0VXJpID0gYCR7Y29uZmlnLnJlZGlyZWN0X3VyaX0jYDtcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgocmVkaXJlY3RVcmkpKSB7XG4gICAgICB0aGlzLmF1dGhvcml6ZWQodXJsLnNsaWNlKHJlZGlyZWN0VXJpLmxlbmd0aCkpO1xuICAgICAgdGhpcy5jaGVja1N5bmMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcbiAgcmV2b2tlKCkge1xuICAgIHRoaXMuY29uZmlnLnNldCh7XG4gICAgICB1aWQ6IG51bGwsXG4gICAgICB0b2tlbjogbnVsbCxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlKCk7XG4gIH0sXG59KTtcbnJlZ2lzdGVyKERyb3Bib3gpO1xuXG5mdW5jdGlvbiBub3JtYWxpemUoaXRlbSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICBzaXplOiBpdGVtLnNpemUsXG4gICAgdXJpOiBnZXRVUkkoaXRlbS5uYW1lKSxcbiAgICAvLyBtb2RpZmllZDogbmV3IERhdGUoaXRlbS5zZXJ2ZXJfbW9kaWZpZWQpLmdldFRpbWUoKSxcbiAgICAvLyBpc0RlbGV0ZWQ6IGl0ZW0uaXNfZGVsZXRlZCxcbiAgfTtcbn1cbiIsIi8vIFJlZmVyZW5jZTpcbi8vIC0gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vZHJpdmUvdjMvcmVmZXJlbmNlL2ZpbGVzXG4vLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvZ29vZ2xlLWFwaS1ub2RlanMtY2xpZW50XG5pbXBvcnQgeyBnZXRVbmlxSWQsIG5vb3AgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBvYmplY3RHZXQgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHsgZHVtcFF1ZXJ5LCBub3RpZnkgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge1xuICBnZXRVUkksIGdldEl0ZW1GaWxlbmFtZSwgQmFzZVNlcnZpY2UsIHJlZ2lzdGVyLCBpc1NjcmlwdEZpbGUsXG4gIG9wZW5BdXRoUGFnZSxcbn0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgY29uZmlnID0ge1xuICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52LlNZTkNfR09PR0xFX0NMSUVOVF9JRCxcbiAgY2xpZW50X3NlY3JldDogcHJvY2Vzcy5lbnYuU1lOQ19HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgcmVkaXJlY3RfdXJpOiAnaHR0cHM6Ly92aW9sZW50bW9ua2V5LmdpdGh1Yi5pby9hdXRoX2dvb2dsZWRyaXZlLmh0bWwnLFxuICBzY29wZTogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZHJpdmUuYXBwZGF0YScsXG59O1xuY29uc3QgVU5BVVRIT1JJWkVEID0geyBzdGF0dXM6ICdVTkFVVEhPUklaRUQnIH07XG5cbmNvbnN0IEdvb2dsZURyaXZlID0gQmFzZVNlcnZpY2UuZXh0ZW5kKHtcbiAgbmFtZTogJ2dvb2dsZWRyaXZlJyxcbiAgZGlzcGxheU5hbWU6ICdHb29nbGUgRHJpdmUnLFxuICB1cmxQcmVmaXg6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kcml2ZS92MycsXG4gIHJlZnJlc2hUb2tlbigpIHtcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSB0aGlzLmNvbmZpZy5nZXQoJ3JlZnJlc2hfdG9rZW4nKTtcbiAgICBpZiAoIXJlZnJlc2hUb2tlbikgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgdHlwZTogJ3VuYXV0aG9yaXplZCcgfSk7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXplZCh7XG4gICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4sXG4gICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB0aGlzLnByZXBhcmUoKSk7XG4gIH0sXG4gIHVzZXIoKSB7XG4gICAgY29uc3QgcmVxdWVzdFVzZXIgPSAoKSA9PiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92My90b2tlbmluZm8/JHtkdW1wUXVlcnkoe1xuICAgICAgICBhY2Nlc3NfdG9rZW46IHRoaXMuY29uZmlnLmdldCgndG9rZW4nKSxcbiAgICAgIH0pfWAsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVxdWVzdFVzZXIoKVxuICAgIC50aGVuKChpbmZvKSA9PiB7XG4gICAgICAvLyBJZiBhY2Nlc3Mgd2FzIGdyYW50ZWQgd2l0aCBhY2Nlc3NfdHlwZT1vbmxpbmUsIHJldm9rZSBpdC5cbiAgICAgIGlmIChpbmZvLmFjY2Vzc190eXBlID09PSAnb25saW5lJykge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgdXJsOiBgaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3Jldm9rZT90b2tlbj0ke3RoaXMuY29uZmlnLmdldCgndG9rZW4nKX1gLFxuICAgICAgICAgIHByZWZpeDogJycsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBub3RpZnkoe1xuICAgICAgICAgICAgdGl0bGU6ICdTeW5jIFVwZ3JhZGVkJyxcbiAgICAgICAgICAgIGJvZHk6ICdQbGVhc2UgcmVhdXRob3JpemUgYWNjZXNzIHRvIHlvdXIgR29vZ2xlIERyaXZlIHRvIGNvbXBsZXRlIHRoZSB1cGdyYWRhdGlvbi4nLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnT25saW5lIGFjY2VzcyByZXZva2VkLicpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmZvLnNjb3BlICE9PSBjb25maWcuc2NvcGUpIHJldHVybiBQcm9taXNlLnJlamVjdChVTkFVVEhPUklaRUQpO1xuICAgIH0pXG4gICAgLmNhdGNoKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMgPT09IFVOQVVUSE9SSVpFRCB8fCByZXMuc3RhdHVzID09PSA0MDAgJiYgb2JqZWN0R2V0KHJlcywgJ2RhdGEuZXJyb3JfZGVzY3JpcHRpb24nKSA9PT0gJ0ludmFsaWQgVmFsdWUnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hUb2tlbigpLnRoZW4ocmVxdWVzdFVzZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgZGF0YTogcmVzLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGdldFN5bmNEYXRhKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIHNwYWNlczogJ2FwcERhdGFGb2xkZXInLFxuICAgICAgZmllbGRzOiAnZmlsZXMoaWQsbmFtZSxzaXplKScsXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6IGAvZmlsZXM/JHtkdW1wUXVlcnkocGFyYW1zKX1gLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbigoeyBmaWxlcyB9KSA9PiB7XG4gICAgICBsZXQgbWV0YUZpbGU7XG4gICAgICBjb25zdCByZW1vdGVEYXRhID0gZmlsZXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpc1NjcmlwdEZpbGUoaXRlbS5uYW1lKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICghbWV0YUZpbGUgJiYgaXRlbS5uYW1lID09PSB0aGlzLm1ldGFGaWxlKSB7XG4gICAgICAgICAgbWV0YUZpbGUgPSBpdGVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAubWFwKG5vcm1hbGl6ZSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFpdGVtLnNpemUpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShpdGVtKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG1ldGFJdGVtID0gbWV0YUZpbGUgPyBub3JtYWxpemUobWV0YUZpbGUpIDoge307XG4gICAgICBjb25zdCBnb3RNZXRhID0gdGhpcy5nZXQobWV0YUl0ZW0pXG4gICAgICAudGhlbihkYXRhID0+IEpTT04ucGFyc2UoZGF0YSkpXG4gICAgICAuY2F0Y2goZXJyID0+IHRoaXMuaGFuZGxlTWV0YUVycm9yKGVycikpXG4gICAgICAudGhlbihkYXRhID0+IE9iamVjdC5hc3NpZ24oe30sIG1ldGFJdGVtLCB7XG4gICAgICAgIG5hbWU6IHRoaXMubWV0YUZpbGUsXG4gICAgICAgIHVyaTogbnVsbCxcbiAgICAgICAgZGF0YSxcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChbZ290TWV0YSwgcmVtb3RlRGF0YSwgdGhpcy5nZXRMb2NhbERhdGEoKV0pO1xuICAgIH0pO1xuICB9LFxuICBhdXRob3JpemUoKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgcmVzcG9uc2VfdHlwZTogJ2NvZGUnLFxuICAgICAgYWNjZXNzX3R5cGU6ICdvZmZsaW5lJyxcbiAgICAgIGNsaWVudF9pZDogY29uZmlnLmNsaWVudF9pZCxcbiAgICAgIHJlZGlyZWN0X3VyaTogY29uZmlnLnJlZGlyZWN0X3VyaSxcbiAgICAgIHNjb3BlOiBjb25maWcuc2NvcGUsXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmdldCgncmVmcmVzaF90b2tlbicpKSBwYXJhbXMucHJvbXB0ID0gJ2NvbnNlbnQnO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aD8ke2R1bXBRdWVyeShwYXJhbXMpfWA7XG4gICAgb3BlbkF1dGhQYWdlKHVybCwgY29uZmlnLnJlZGlyZWN0X3VyaSk7XG4gIH0sXG4gIGNoZWNrQXV0aCh1cmwpIHtcbiAgICBjb25zdCByZWRpcmVjdFVyaSA9IGAke2NvbmZpZy5yZWRpcmVjdF91cml9P2NvZGU9YDtcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgocmVkaXJlY3RVcmkpKSB7XG4gICAgICB0aGlzLmF1dGhTdGF0ZS5zZXQoJ2F1dGhvcml6aW5nJyk7XG4gICAgICB0aGlzLmF1dGhvcml6ZWQoe1xuICAgICAgICBjb2RlOiBkZWNvZGVVUklDb21wb25lbnQodXJsLnNwbGl0KCcjJylbMF0uc2xpY2UocmVkaXJlY3RVcmkubGVuZ3RoKSksXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5jaGVja1N5bmMoKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHJldm9rZSgpIHtcbiAgICB0aGlzLmNvbmZpZy5zZXQoe1xuICAgICAgdG9rZW46IG51bGwsXG4gICAgICByZWZyZXNoX3Rva2VuOiBudWxsLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnByZXBhcmUoKTtcbiAgfSxcbiAgYXV0aG9yaXplZChwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92NC90b2tlbicsXG4gICAgICBwcmVmaXg6ICcnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICB9LFxuICAgICAgYm9keTogZHVtcFF1ZXJ5KE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50X2lkLFxuICAgICAgICBjbGllbnRfc2VjcmV0OiBjb25maWcuY2xpZW50X3NlY3JldCxcbiAgICAgICAgcmVkaXJlY3RfdXJpOiBjb25maWcucmVkaXJlY3RfdXJpLFxuICAgICAgICBncmFudF90eXBlOiAnYXV0aG9yaXphdGlvbl9jb2RlJyxcbiAgICAgIH0sIHBhcmFtcykpLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgICB0b2tlbjogZGF0YS5hY2Nlc3NfdG9rZW4sXG4gICAgICAgIH07XG4gICAgICAgIGlmIChkYXRhLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICB1cGRhdGUucmVmcmVzaF90b2tlbiA9IGRhdGEucmVmcmVzaF90b2tlbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZy5zZXQodXBkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGRhdGE7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGhhbmRsZU1ldGFFcnJvcjogbm9vcCxcbiAgbGlzdCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBzdXBwb3J0ZWQnKTtcbiAgfSxcbiAgZ2V0KHsgaWQgfSkge1xuICAgIGlmICghaWQpIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybDogYC9maWxlcy8ke2lkfT9hbHQ9bWVkaWFgLFxuICAgIH0pO1xuICB9LFxuICBwdXQoaXRlbSwgZGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgY29uc3QgeyBpZCB9ID0gaXRlbTtcbiAgICBjb25zdCBib3VuZGFyeSA9IGdldFVuaXFJZCgndmlvbGVudG1vbmtleS1pcy1ncmVhdC0nKTtcbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6IGBtdWx0aXBhcnQvcmVsYXRlZDsgYm91bmRhcnk9JHtib3VuZGFyeX1gLFxuICAgIH07XG4gICAgY29uc3QgbWV0YWRhdGEgPSBpZCA/IHtcbiAgICAgIG5hbWUsXG4gICAgfSA6IHtcbiAgICAgIG5hbWUsXG4gICAgICBwYXJlbnRzOiBbJ2FwcERhdGFGb2xkZXInXSxcbiAgICB9O1xuICAgIGNvbnN0IGJvZHkgPSBbXG4gICAgICBgLS0ke2JvdW5kYXJ5fWAsXG4gICAgICAnQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICcnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkobWV0YWRhdGEpLFxuICAgICAgYC0tJHtib3VuZGFyeX1gLFxuICAgICAgJ0NvbnRlbnQtVHlwZTogdGV4dC9wbGFpbicsXG4gICAgICAnJyxcbiAgICAgIGRhdGEsXG4gICAgICBgLS0ke2JvdW5kYXJ5fS0tYCxcbiAgICAgICcnLFxuICAgIF0uam9pbignXFxyXFxuJyk7XG4gICAgY29uc3QgdXJsID0gaWRcbiAgICAgID8gYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3VwbG9hZC9kcml2ZS92My9maWxlcy8ke2lkfT91cGxvYWRUeXBlPW11bHRpcGFydGBcbiAgICAgIDogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3VwbG9hZC9kcml2ZS92My9maWxlcz91cGxvYWRUeXBlPW11bHRpcGFydCc7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsLFxuICAgICAgYm9keSxcbiAgICAgIGhlYWRlcnMsXG4gICAgICBtZXRob2Q6IGlkID8gJ1BBVENIJyA6ICdQT1NUJyxcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlKHsgaWQgfSkge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICB1cmw6IGAvZmlsZXMvJHtpZH1gLFxuICAgIH0pO1xuICB9LFxufSk7XG5yZWdpc3RlcihHb29nbGVEcml2ZSk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShpdGVtKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGl0ZW0uaWQsXG4gICAgbmFtZTogaXRlbS5uYW1lLFxuICAgIHNpemU6ICtpdGVtLnNpemUsXG4gICAgdXJpOiBnZXRVUkkoaXRlbS5uYW1lKSxcbiAgfTtcbn1cbiIsImltcG9ydCB7XG4gIGluaXRpYWxpemUsXG4gIHN5bmMsXG4gIGdldFN0YXRlcyxcbiAgYXV0aG9yaXplLFxuICByZXZva2UsXG4gIHNldENvbmZpZyxcbn0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCAnLi9kcm9wYm94JztcbmltcG9ydCAnLi9vbmVkcml2ZSc7XG5pbXBvcnQgJy4vZ29vZ2xlZHJpdmUnO1xuaW1wb3J0ICcuL3dlYmRhdic7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2UnO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIFN5bmNBdXRob3JpemU6IGF1dGhvcml6ZSxcbiAgU3luY1Jldm9rZTogcmV2b2tlLFxuICBTeW5jU3RhcnQ6IHN5bmMsXG4gIFN5bmNTZXRDb25maWc6IHNldENvbmZpZyxcbn0pO1xuXG5leHBvcnQge1xuICBpbml0aWFsaXplLFxuICBzeW5jLFxuICBnZXRTdGF0ZXMsXG4gIGF1dGhvcml6ZSxcbiAgcmV2b2tlLFxufTtcbiIsIi8vIFJlZmVyZW5jZTogaHR0cHM6Ly9kZXYub25lZHJpdmUuY29tL1JFQURNRS5odG1cbmltcG9ydCB7IG5vb3AgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBvYmplY3RHZXQgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHsgZHVtcFF1ZXJ5IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgZ2V0VVJJLCBnZXRJdGVtRmlsZW5hbWUsIEJhc2VTZXJ2aWNlLCBpc1NjcmlwdEZpbGUsIHJlZ2lzdGVyLFxuICBvcGVuQXV0aFBhZ2UsXG59IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5TWU5DX09ORURSSVZFX0NMSUVOVF9JRCxcbiAgY2xpZW50X3NlY3JldDogcHJvY2Vzcy5lbnYuU1lOQ19PTkVEUklWRV9DTElFTlRfU0VDUkVULFxuICByZWRpcmVjdF91cmk6ICdodHRwczovL3Zpb2xlbnRtb25rZXkuZ2l0aHViLmlvL2F1dGhfb25lZHJpdmUuaHRtbCcsXG59O1xuXG5jb25zdCBPbmVEcml2ZSA9IEJhc2VTZXJ2aWNlLmV4dGVuZCh7XG4gIG5hbWU6ICdvbmVkcml2ZScsXG4gIGRpc3BsYXlOYW1lOiAnT25lRHJpdmUnLFxuICB1cmxQcmVmaXg6ICdodHRwczovL2FwaS5vbmVkcml2ZS5jb20vdjEuMCcsXG4gIHJlZnJlc2hUb2tlbigpIHtcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSB0aGlzLmNvbmZpZy5nZXQoJ3JlZnJlc2hfdG9rZW4nKTtcbiAgICByZXR1cm4gdGhpcy5hdXRob3JpemVkKHtcbiAgICAgIHJlZnJlc2hfdG9rZW46IHJlZnJlc2hUb2tlbixcbiAgICAgIGdyYW50X3R5cGU6ICdyZWZyZXNoX3Rva2VuJyxcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHRoaXMucHJlcGFyZSgpKTtcbiAgfSxcbiAgdXNlcigpIHtcbiAgICBjb25zdCByZXF1ZXN0VXNlciA9ICgpID0+IHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsOiAnL2RyaXZlJyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pO1xuICAgIHJldHVybiByZXF1ZXN0VXNlcigpXG4gICAgLmNhdGNoKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaFRva2VuKCkudGhlbihyZXF1ZXN0VXNlcik7XG4gICAgICB9XG4gICAgICB0aHJvdyByZXM7XG4gICAgfSlcbiAgICAuY2F0Y2goKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMCAmJiBvYmplY3RHZXQocmVzLCAnZGF0YS5lcnJvcicpID09PSAnaW52YWxpZF9ncmFudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgICB0eXBlOiAndW5hdXRob3JpemVkJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICBkYXRhOiByZXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlTWV0YUVycm9yKHJlcykge1xuICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IHJlcy5oZWFkZXJzLmdldCgnV1dXLUF1dGhlbnRpY2F0ZScpPy5bMF0gfHwgJyc7XG4gICAgICBpZiAoL15CZWFyZXIgcmVhbG09XCJPbmVEcml2ZUFQSVwiLy50ZXN0KGhlYWRlcikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaFRva2VuKCkudGhlbigoKSA9PiB0aGlzLmdldE1ldGEoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRocm93IHJlcztcbiAgfSxcbiAgbGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6ICcvZHJpdmUvc3BlY2lhbC9hcHByb290L2NoaWxkcmVuJyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhLnZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0uZmlsZSAmJiBpc1NjcmlwdEZpbGUoaXRlbS5uYW1lKSkubWFwKG5vcm1hbGl6ZSkpO1xuICB9LFxuICBnZXQoaXRlbSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsOiBgL2RyaXZlL3NwZWNpYWwvYXBwcm9vdDovJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybDogZGF0YVsnQGNvbnRlbnQuZG93bmxvYWRVcmwnXSxcbiAgICAgIGRlbGF5OiBmYWxzZSxcbiAgICB9KSk7XG4gIH0sXG4gIHB1dChpdGVtLCBkYXRhKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgdXJsOiBgL2RyaXZlL3NwZWNpYWwvYXBwcm9vdDovJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9Oi9jb250ZW50YCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGRhdGEsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKG5vcm1hbGl6ZSk7XG4gIH0sXG4gIHJlbW92ZShpdGVtKSB7XG4gICAgLy8gcmV0dXJuIDIwNFxuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIHVybDogYC9kcml2ZS9zcGVjaWFsL2FwcHJvb3Q6LyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWAsXG4gICAgfSlcbiAgICAuY2F0Y2gobm9vcCk7XG4gIH0sXG4gIGF1dGhvcml6ZSgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBjbGllbnRfaWQ6IGNvbmZpZy5jbGllbnRfaWQsXG4gICAgICBzY29wZTogJ29uZWRyaXZlLmFwcGZvbGRlciB3bC5vZmZsaW5lX2FjY2VzcycsXG4gICAgICByZXNwb25zZV90eXBlOiAnY29kZScsXG4gICAgICByZWRpcmVjdF91cmk6IGNvbmZpZy5yZWRpcmVjdF91cmksXG4gICAgfTtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9sb2dpbi5saXZlLmNvbS9vYXV0aDIwX2F1dGhvcml6ZS5zcmY/JHtkdW1wUXVlcnkocGFyYW1zKX1gO1xuICAgIG9wZW5BdXRoUGFnZSh1cmwsIGNvbmZpZy5yZWRpcmVjdF91cmkpO1xuICB9LFxuICBjaGVja0F1dGgodXJsKSB7XG4gICAgY29uc3QgcmVkaXJlY3RVcmkgPSBgJHtjb25maWcucmVkaXJlY3RfdXJpfT9jb2RlPWA7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKHJlZGlyZWN0VXJpKSkge1xuICAgICAgdGhpcy5hdXRoU3RhdGUuc2V0KCdhdXRob3JpemluZycpO1xuICAgICAgdGhpcy5hdXRob3JpemVkKHtcbiAgICAgICAgY29kZTogdXJsLnNsaWNlKHJlZGlyZWN0VXJpLmxlbmd0aCksXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5jaGVja1N5bmMoKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHJldm9rZSgpIHtcbiAgICB0aGlzLmNvbmZpZy5zZXQoe1xuICAgICAgdWlkOiBudWxsLFxuICAgICAgdG9rZW46IG51bGwsXG4gICAgICByZWZyZXNoX3Rva2VuOiBudWxsLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnByZXBhcmUoKTtcbiAgfSxcbiAgYXV0aG9yaXplZChwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vbG9naW4ubGl2ZS5jb20vb2F1dGgyMF90b2tlbi5zcmYnLFxuICAgICAgcHJlZml4OiAnJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGR1bXBRdWVyeShPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIGNsaWVudF9pZDogY29uZmlnLmNsaWVudF9pZCxcbiAgICAgICAgY2xpZW50X3NlY3JldDogY29uZmlnLmNsaWVudF9zZWNyZXQsXG4gICAgICAgIHJlZGlyZWN0X3VyaTogY29uZmlnLnJlZGlyZWN0X3VyaSxcbiAgICAgICAgZ3JhbnRfdHlwZTogJ2F1dGhvcml6YXRpb25fY29kZScsXG4gICAgICB9LCBwYXJhbXMpKSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICB0aGlzLmNvbmZpZy5zZXQoe1xuICAgICAgICAgIHVpZDogZGF0YS51c2VyX2lkLFxuICAgICAgICAgIHRva2VuOiBkYXRhLmFjY2Vzc190b2tlbixcbiAgICAgICAgICByZWZyZXNoX3Rva2VuOiBkYXRhLnJlZnJlc2hfdG9rZW4sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZGF0YTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbn0pO1xucmVnaXN0ZXIoT25lRHJpdmUpO1xuXG5mdW5jdGlvbiBub3JtYWxpemUoaXRlbSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICBzaXplOiBpdGVtLnNpemUsXG4gICAgdXJpOiBnZXRVUkkoaXRlbS5uYW1lKSxcbiAgICAvLyBtb2RpZmllZDogbmV3IERhdGUoaXRlbS5sYXN0TW9kaWZpZWREYXRlVGltZSkuZ2V0VGltZSgpLFxuICB9O1xufVxuIiwiaW1wb3J0IHtcbiAgZ2V0VVJJLCBnZXRJdGVtRmlsZW5hbWUsIEJhc2VTZXJ2aWNlLCBpc1NjcmlwdEZpbGUsIHJlZ2lzdGVyLFxufSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBLRVlfQ0hJTERSRU4gPSBTeW1ib2woJ2NoaWxkcmVuJyk7XG5cbmNsYXNzIFhOb2RlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbnNNYXApIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubnNNYXAgPSB7IC4uLm5zTWFwIH07XG4gICAgdGhpcy5wYXJzZUF0dHJzKCk7XG4gICAgdGhpcy5wYXJzZU5hbWUoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tWE1MKHhtbCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbCwgJ2FwcGxpY2F0aW9uL3htbCcpO1xuICAgIHJldHVybiBuZXcgWE5vZGUoZG9jKTtcbiAgfVxuXG4gIHBhcnNlQXR0cnMoKSB7XG4gICAgY29uc3QgeyBub2RlLCBuc01hcCB9ID0gdGhpcztcbiAgICBjb25zdCBhdHRycyA9IHt9O1xuICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gbm9kZTtcbiAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgZm9yIChjb25zdCBhdHRyIG9mIG5vZGUuYXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBhdHRyO1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3htbG5zJykgbnNNYXAuJCA9IHZhbHVlO1xuICAgICAgICBlbHNlIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ3htbG5zOicpKSBuc01hcFtuYW1lLnNsaWNlKDYpXSA9IHZhbHVlO1xuICAgICAgICBhdHRyc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmF0dHJzID0gYXR0cnM7XG4gIH1cblxuICBwYXJzZU5hbWUoKSB7XG4gICAgY29uc3QgeyBub2RlLCBuc01hcCB9ID0gdGhpcztcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgbGV0IG5hbWUgPSBub2RlLnRhZ05hbWU7XG4gICAgICBsZXQgbnMgPSBuc01hcC4kO1xuICAgICAgaWYgKG5hbWUuaW5jbHVkZXMoJzonKSkge1xuICAgICAgICBsZXQgcHJlZml4O1xuICAgICAgICBbcHJlZml4LCBuYW1lXSA9IG5hbWUuc3BsaXQoJzonKTtcbiAgICAgICAgbnMgPSBuc01hcFtwcmVmaXhdO1xuICAgICAgICBpZiAoIW5zKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbmFtZXNwYWNlOiAke3ByZWZpeH1gKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubmFtZSA9IG5zICsgbmFtZTtcbiAgICB9XG4gIH1cblxuICB0ZXh0KCkge1xuICAgIGNvbnN0IHsgbm9kZSB9ID0gdGhpcztcbiAgICBpZiAobm9kZSkgcmV0dXJuIChub2RlLnRleHRDb250ZW50IHx8ICcnKS50cmltKCk7XG4gIH1cblxuICBjaGlsZHJlbigpIHtcbiAgICBpZiAoIXRoaXNbS0VZX0NISUxEUkVOXSkge1xuICAgICAgY29uc3QgeyBub2RlLCBuc01hcCB9ID0gdGhpcztcbiAgICAgIHRoaXNbS0VZX0NISUxEUkVOXSA9IFsuLi5ub2RlLmNoaWxkcmVuXVxuICAgICAgLm1hcChjaGlsZCA9PiBuZXcgWE5vZGUoY2hpbGQsIG5zTWFwKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzW0tFWV9DSElMRFJFTl07XG4gIH1cblxuICBtYXAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbigpLm1hcChjYWxsYmFjayk7XG4gIH1cblxuICBnZXRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gKHRhZ05hbWUgPT4gbm9kZSA9PiBub2RlLm5hbWUgPT09IHRhZ05hbWUpKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGxiYWNrO1xuICB9XG5cbiAgZmlsdGVyKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4oKS5maWx0ZXIodGhpcy5nZXRDYWxsYmFjayhjYWxsYmFjaykpO1xuICB9XG5cbiAgZmluZChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuKCkuZmluZCh0aGlzLmdldENhbGxiYWNrKGNhbGxiYWNrKSk7XG4gIH1cblxuICBhdHRyKGtleSkge1xuICAgIHJldHVybiB0aGlzLmF0dHJzW2tleV07XG4gIH1cbn1cblxuY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIHNlcnZlclVybDogJycsXG4gIGFub255bW91czogZmFsc2UsXG4gIHVzZXJuYW1lOiAnJyxcbiAgcGFzc3dvcmQ6ICcnLFxufTtcblxuY29uc3QgV2ViREFWID0gQmFzZVNlcnZpY2UuZXh0ZW5kKHtcbiAgbmFtZTogJ3dlYmRhdicsXG4gIGRpc3BsYXlOYW1lOiAnV2ViREFWJyxcbiAgcHJvcGVydGllczoge1xuICAgIGF1dGhUeXBlOiAncGFzc3dvcmQnLFxuICAgIHNlcnZlclVybDogbnVsbCxcbiAgfSxcbiAgZ2V0VXNlckNvbmZpZygpIHtcbiAgICBpZiAoIXRoaXMudXNlckNvbmZpZykge1xuICAgICAgdGhpcy51c2VyQ29uZmlnID0ge1xuICAgICAgICAuLi5ERUZBVUxUX0NPTkZJRyxcbiAgICAgICAgLi4udGhpcy5jb25maWcuZ2V0KCd1c2VyQ29uZmlnJyksXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51c2VyQ29uZmlnO1xuICB9LFxuICBzZXRVc2VyQ29uZmlnKGNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyQ29uZmlnLCBjb25maWcpO1xuICAgIHRoaXMuY29uZmlnLnNldCgndXNlckNvbmZpZycsIHRoaXMudXNlckNvbmZpZyk7XG4gIH0sXG4gIGluaXRUb2tlbigpIHtcbiAgICB0aGlzLnByZXBhcmVIZWFkZXJzKCk7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRVc2VyQ29uZmlnKCk7XG4gICAgbGV0IHVybCA9IGNvbmZpZy5zZXJ2ZXJVcmw/LnRyaW0oKSB8fCAnJztcbiAgICBpZiAoIXVybC5pbmNsdWRlcygnOi8vJykpIHVybCA9IGBodHRwOi8vJHt1cmx9YDtcbiAgICBpZiAoIXVybC5lbmRzV2l0aCgnLycpKSB1cmwgKz0gJy8nO1xuICAgIHRyeSB7XG4gICAgICBuZXcgVVJMKHVybCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzLnNlcnZlclVybCA9IG51bGw7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMucHJvcGVydGllcy5zZXJ2ZXJVcmwgPSBgJHt1cmx9VmlvbGVudG1vbmtleS9gO1xuICAgIGNvbnN0IHsgYW5vbnltb3VzLCB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGNvbmZpZztcbiAgICBpZiAoYW5vbnltb3VzKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGF1dGggPSB3aW5kb3cuYnRvYShgJHt1c2VybmFtZX06JHtwYXNzd29yZH1gKTtcbiAgICB0aGlzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCYXNpYyAke2F1dGh9YDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgbG9hZERhdGEob3B0aW9ucykge1xuICAgIC8vIEJ5cGFzc2luZyBsb2dpbiBDU1JGIHByb3RlY3Rpb24gaW4gTmV4dGNsb3VkIC8gT3duY2xvdWQgYnkgbm90IHNlbmRpbmcgY29va2llcy5cbiAgICAvLyBXZSBhcmUgbm90IHVzaW5nIHdlYiBVSSBhbmQgY29va2llIGF1dGhlbnRpY2F0aW9uLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IHRoYXQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92aW9sZW50bW9ua2V5L3Zpb2xlbnRtb25rZXkvaXNzdWVzLzk3NlxuICAgIHJldHVybiBCYXNlU2VydmljZS5wcm90b3R5cGUubG9hZERhdGEuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNyZWRlbnRpYWxzOiAnb21pdCcsXG4gICAgfSwgb3B0aW9ucykpO1xuICB9LFxuICBoYW5kbGVNZXRhRXJyb3IocmVzKSB7XG4gICAgaWYgKCFbXG4gICAgICA0MDQsIC8vIEZpbGUgbm90IGV4aXN0c1xuICAgICAgNDA5LCAvLyBEaXJlY3Rvcnkgbm90IGV4aXN0c1xuICAgIF0uaW5jbHVkZXMocmVzLnN0YXR1cykpIHRocm93IHJlcztcbiAgfSxcbiAgLy8gU29tZSBXZWJEQVYgc2VydmVycyBkbyBub3QgYWxsb3cgTE9DSyAvIFVOTE9DS1xuICAvKlxuICBhY3F1aXJlTG9jaygpIHtcbiAgICBjb25zdCB7IHNlcnZlclVybCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgIGNvbnN0IGNyZWF0ZUxvY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmxvZygnQWNxdWlyZSBsb2NrLi4uJyk7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICAgIG1ldGhvZDogJ0xPQ0snLFxuICAgICAgICB1cmw6IHNlcnZlclVybCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFRpbWVvdXQ6IGBTZWNvbmQtJHszMCAqIDYwfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGBcXFxuPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLThcIiA/PlxuPEQ6bG9ja2luZm8geG1sbnM6RD0nREFWOic+XG4gIDxEOmxvY2tzY29wZT48RDpleGNsdXNpdmUvPjwvRDpsb2Nrc2NvcGU+XG4gIDxEOmxvY2t0eXBlPjxEOndyaXRlLz48L0Q6bG9ja3R5cGU+XG48L0Q6bG9ja2luZm8+YCxcbiAgICAgIH0pXG4gICAgICAudGhlbih4bWwgPT4ge1xuICAgICAgICBjb25zdCBkb2MgPSBYTm9kZS5mcm9tWE1MKHhtbCk7XG4gICAgICAgIGNvbnN0IGxvY2sgPSBkb2MuZmluZCgnREFWOnByb3AnKVxuICAgICAgICAuZmluZCgnREFWOmxvY2tkaXNjb3ZlcnknKVxuICAgICAgICAuZmluZCgnREFWOmFjdGl2ZWxvY2snKVxuICAgICAgICAuZmluZCgnREFWOmxvY2t0b2tlbicpXG4gICAgICAgIC5maW5kKCdEQVY6aHJlZicpXG4gICAgICAgIC50ZXh0KCk7XG4gICAgICAgIHRoaXMubG9nKCdBY3F1aXJlZCBsb2NrOicsIGxvY2spO1xuICAgICAgICB0aGlzLmNvbmZpZy5zZXQoe1xuICAgICAgICAgIGxvY2ssXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBsb2NrID0gdGhpcy5jb25maWcuZ2V0KCdsb2NrJyk7XG4gICAgaWYgKGxvY2spIHtcbiAgICAgIHRoaXMubG9nKCdSZWZyZXNoIGxvY2s6JywgbG9jayk7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICAgIG1ldGhvZDogJ0xPQ0snLFxuICAgICAgICB1cmw6IHNlcnZlclVybCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIElmOiBgKDwke2xvY2t9PilgLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2coJ1JlZnJlc2hlZCBsb2NrOicsIGxvY2spO1xuICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQxMikge1xuICAgICAgICAgIHRoaXMubG9nKCdSZWZyZXNoIGxvY2sgZXJyb3InKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5zZXQoeyBsb2NrOiBudWxsIH0pO1xuICAgICAgICAgIC8vIFByZWNvbmRpdGlvbiBGYWlsZWRcbiAgICAgICAgICByZXR1cm4gY3JlYXRlTG9jaygpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlTG9jaygpO1xuICB9LFxuICByZWxlYXNlTG9jaygpIHtcbiAgICBjb25zdCBsb2NrID0gdGhpcy5jb25maWcuZ2V0KCdsb2NrJyk7XG4gICAgaWYgKGxvY2spIHtcbiAgICAgIGNvbnN0IHsgc2VydmVyVXJsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICB0aGlzLmxvZygnUmVsZWFzZSBsb2NrOicsIGxvY2spO1xuICAgICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgICBtZXRob2Q6ICdVTkxPQ0snLFxuICAgICAgICB1cmw6IHNlcnZlclVybCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdMb2NrLVRva2VuJzogYDwke2xvY2t9PmAsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZygnUmVsZWFzZWQgbG9jaycpO1xuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZygnUmVsZWFzZSBsb2NrIGVycm9yJyk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5zZXQoeyBsb2NrOiBudWxsIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAqL1xuICBsaXN0KCkge1xuICAgIGNvbnN0IHsgc2VydmVyVXJsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgY29uc3QgbWtkaXIgPSAoKSA9PiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ01LQ09MJyxcbiAgICAgIHVybDogc2VydmVyVXJsLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlYWRkaXIgPSAoKSA9PiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BST1BGSU5EJyxcbiAgICAgIHVybDogc2VydmVyVXJsLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBkZXB0aDogJzEnLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKCh4bWwpID0+IHtcbiAgICAgIGNvbnN0IGRvYyA9IFhOb2RlLmZyb21YTUwoeG1sKTtcbiAgICAgIGNvbnN0IGl0ZW1zID0gZG9jLmNoaWxkcmVuKClbMF1cbiAgICAgIC5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcCA9IG5vZGUuZmluZCgnREFWOnByb3BzdGF0JykuZmluZCgnREFWOnByb3AnKTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHByb3AuZmluZCgnREFWOnJlc291cmNldHlwZScpLmZpbmQoJ0RBVjpjb2xsZWN0aW9uJykgPyAnZGlyZWN0b3J5JyA6ICdmaWxlJztcbiAgICAgICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgIGxldCBkaXNwbGF5TmFtZTtcbiAgICAgICAgICBjb25zdCBkaXNwbGF5TmFtZU5vZGUgPSBwcm9wLmZpbmQoJ0RBVjpkaXNwbGF5bmFtZScpO1xuXG4gICAgICAgICAgaWYgKGRpc3BsYXlOYW1lTm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lTm9kZS50ZXh0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBub2RlLmZpbmQoJ0RBVjpocmVmJykudGV4dCgpO1xuICAgICAgICAgICAgZGlzcGxheU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoaHJlZi5zdWJzdHJpbmcoaHJlZi5sYXN0SW5kZXhPZignLycpICsgMSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc1NjcmlwdEZpbGUoZGlzcGxheU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gcHJvcC5maW5kKCdEQVY6Z2V0Y29udGVudGxlbmd0aCcpO1xuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZSh7XG4gICAgICAgICAgICAgIG5hbWU6IGRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICBzaXplOiBzaXplID8gK3NpemUudGV4dCgpIDogMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH0pO1xuICAgIHJldHVybiByZWFkZGlyKClcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gbWtkaXIoKS50aGVuKHJlYWRkaXIpO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9LFxuICBnZXQoaXRlbSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgY29uc3QgeyBzZXJ2ZXJVcmwgfSA9IHRoaXMucHJvcGVydGllcztcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6IHNlcnZlclVybCArIG5hbWUsXG4gICAgfSk7XG4gIH0sXG4gIHB1dChpdGVtLCBkYXRhKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJyxcbiAgICB9O1xuICAgIGNvbnN0IGxvY2sgPSB0aGlzLmNvbmZpZy5nZXQoJ2xvY2snKTtcbiAgICBpZiAobG9jaykgaGVhZGVycy5JZiA9IGAoPCR7bG9ja30+KWA7XG4gICAgY29uc3QgeyBzZXJ2ZXJVcmwgfSA9IHRoaXMucHJvcGVydGllcztcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgdXJsOiBzZXJ2ZXJVcmwgKyBuYW1lLFxuICAgICAgYm9keTogZGF0YSxcbiAgICAgIGhlYWRlcnMsXG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZShpdGVtKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG4gICAgY29uc3QgbG9jayA9IHRoaXMuY29uZmlnLmdldCgnbG9jaycpO1xuICAgIGlmIChsb2NrKSBoZWFkZXJzLklmID0gYCg8JHtsb2NrfT4pYDtcbiAgICBjb25zdCB7IHNlcnZlclVybCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICB1cmw6IHNlcnZlclVybCArIG5hbWUsXG4gICAgICBoZWFkZXJzLFxuICAgIH0pO1xuICB9LFxufSk7XG5yZWdpc3RlcihXZWJEQVYpO1xuXG5mdW5jdGlvbiBub3JtYWxpemUoaXRlbSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICBzaXplOiBpdGVtLnNpemUsXG4gICAgdXJpOiBnZXRVUkkoaXRlbS5uYW1lKSxcbiAgfTtcbn1cbiIsImltcG9ydCBpbml0Q2FjaGUgZnJvbSAnIy9jb21tb24vY2FjaGUnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5jb25zdCBjYWNoZSA9IGluaXRDYWNoZSh7XG4gIC8qIEtlZXBpbmcgdGhlIGRhdGEgZm9yIG9uZSBob3VyIHNpbmNlIGNocm9tZS5zdG9yYWdlLmxvY2FsIGlzIGluc2FuZWx5IHNsb3cgaW4gQ2hyb21lLFxuICAgICBpdCBjYW4gdGFrZXMgc2Vjb25kcyB0byByZWFkIGl0IHdoZW4gaW5qZWN0aW5nIHRhYnMgd2l0aCBhIGJpZyBzY3JpcHQvdmFsdWUsIHdoaWNoIGRlbGF5c1xuICAgICBhbGwgb3RoZXIgc2NyaXB0cyBpbiB0aGlzIHRhYiBhbmQgdGhleSB3aWxsIG5ldmVyIGJlIGFibGUgdG8gcnVuIGF0IGRvY3VtZW50LXN0YXJ0LiAqL1xuICBsaWZldGltZTogNjAgKiA2MCAqIDEwMDAsXG59KTtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICBDYWNoZUxvYWQoZGF0YSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQoZGF0YSkgfHwgbnVsbDtcbiAgfSxcbiAgQ2FjaGVIaXQoZGF0YSkge1xuICAgIGNhY2hlLmhpdChkYXRhLmtleSwgZGF0YS5saWZldGltZSk7XG4gIH0sXG4gIENhY2hlUG9wKGtleSkge1xuICAgIHJldHVybiBjYWNoZS5wb3Aoa2V5KSB8fCBudWxsO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNhY2hlO1xuIiwiaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5jb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5sZXQgY2xpcGJvYXJkRGF0YTtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICBTZXRDbGlwYm9hcmQoZGF0YSkge1xuICAgIGNsaXBib2FyZERhdGEgPSBkYXRhO1xuICAgIHRleHRhcmVhLmZvY3VzKCk7XG4gICAgY29uc3QgcmV0ID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknLCBmYWxzZSwgbnVsbCk7XG4gICAgaWYgKCFyZXQgJiYgcHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ29weSBmYWlsZWQhJyk7XG4gICAgfVxuICB9LFxufSk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb3B5JywgZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgeyB0eXBlLCBkYXRhIH0gPSBjbGlwYm9hcmREYXRhO1xuICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YSh0eXBlIHx8ICd0ZXh0L3BsYWluJywgZGF0YSk7XG59KTtcbiIsImltcG9ydCB7XG4gIGNvbXBhcmVWZXJzaW9uLCBpMThuLCBnZXRGdWxsVXJsLCBnZXRTY3JpcHROYW1lLCBpc1JlbW90ZSwgc2VuZENtZCwgdHJ1ZUpvaW4sXG59IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7XG4gIENNRF9TQ1JJUFRfQURELCBDTURfU0NSSVBUX1VQREFURSwgSU5KRUNUX1BBR0UsIElOSkVDVF9BVVRPLCBUSU1FT1VUX1dFRUssXG59IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQgeyBmb3JFYWNoRW50cnksIGZvckVhY2hLZXksIGZvckVhY2hWYWx1ZSB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcjL2NvbW1vbi9zdG9yYWdlJztcbmltcG9ydCBwbHVnaW5FdmVudHMgZnJvbSAnLi4vcGx1Z2luL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXROYW1lVVJJLCBwYXJzZU1ldGEsIG5ld1NjcmlwdCwgZ2V0RGVmYXVsdEN1c3RvbSB9IGZyb20gJy4vc2NyaXB0JztcbmltcG9ydCB7IHRlc3RTY3JpcHQsIHRlc3RCbGFja2xpc3QgfSBmcm9tICcuL3Rlc3Rlcic7XG5pbXBvcnQgeyBwcmVJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzLCBub3RpZnkgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHBhdGNoREIgZnJvbSAnLi9wYXRjaC1kYic7XG5pbXBvcnQgeyBzZXRPcHRpb24gfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0ICcuL3N0b3JhZ2UtZmV0Y2gnO1xuaW1wb3J0IGRhdGFDYWNoZSBmcm9tICcuL2NhY2hlJztcblxuY29uc3Qgc3RvcmUgPSB7fTtcbnN0b3JhZ2UuYmFzZS5zZXREYXRhQ2FjaGUoZGF0YUNhY2hlKTtcbnN0b3JhZ2Uuc2NyaXB0Lm9uRHVtcCA9IChpdGVtKSA9PiB7XG4gIHN0b3JlLnNjcmlwdE1hcFtpdGVtLnByb3BzLmlkXSA9IGl0ZW07XG59O1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIENoZWNrUG9zaXRpb246IHNvcnRTY3JpcHRzLFxuICBDaGVja1JlbW92ZTogY2hlY2tSZW1vdmUsXG4gIC8qKiBAcmV0dXJuIHtWTVNjcmlwdH0gKi9cbiAgR2V0U2NyaXB0OiBnZXRTY3JpcHQsXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHsgaXRlbXM6IFZNU2NyaXB0W10sIHZhbHVlcz8gfT59ICovXG4gIGFzeW5jIEV4cG9ydFppcCh7IHZhbHVlcyB9KSB7XG4gICAgY29uc3Qgc2NyaXB0cyA9IGdldFNjcmlwdHMoKTtcbiAgICBjb25zdCBpZHMgPSBzY3JpcHRzLm1hcChnZXRQcm9wc0lkKTtcbiAgICBjb25zdCBjb2RlTWFwID0gYXdhaXQgc3RvcmFnZS5jb2RlLmdldE11bHRpKGlkcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBzY3JpcHRzLm1hcChzY3JpcHQgPT4gKHsgc2NyaXB0LCBjb2RlOiBjb2RlTWFwW3NjcmlwdC5wcm9wcy5pZF0gfSkpLFxuICAgICAgdmFsdWVzOiB2YWx1ZXMgPyBhd2FpdCBzdG9yYWdlLnZhbHVlLmdldE11bHRpKGlkcykgOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gKi9cbiAgR2V0U2NyaXB0Q29kZShpZCkge1xuICAgIHJldHVybiBzdG9yYWdlLmNvZGUuZ2V0T25lKGlkKTtcbiAgfSxcbiAgR2V0U2NyaXB0VmVyKG9wdHMpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBnZXRTY3JpcHQob3B0cyk7XG4gICAgcmV0dXJuIHNjcmlwdCAmJiAhc2NyaXB0LmNvbmZpZy5yZW1vdmVkXG4gICAgICA/IHNjcmlwdC5tZXRhLnZlcnNpb25cbiAgICAgIDogbnVsbDtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59ICovXG4gIE1hcmtSZW1vdmVkKHsgaWQsIHJlbW92ZWQgfSkge1xuICAgIHJldHVybiB1cGRhdGVTY3JpcHRJbmZvKGlkLCB7XG4gICAgICBjb25maWc6IHsgcmVtb3ZlZDogcmVtb3ZlZCA/IDEgOiAwIH0sXG4gICAgICBwcm9wczogeyBsYXN0TW9kaWZpZWQ6IERhdGUubm93KCkgfSxcbiAgICB9KTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn0gKi9cbiAgTW92ZSh7IGlkLCBvZmZzZXQgfSkge1xuICAgIGNvbnN0IHNjcmlwdCA9IGdldFNjcmlwdEJ5SWQoaWQpO1xuICAgIGNvbnN0IGluZGV4ID0gc3RvcmUuc2NyaXB0cy5pbmRleE9mKHNjcmlwdCk7XG4gICAgc3RvcmUuc2NyaXB0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHN0b3JlLnNjcmlwdHMuc3BsaWNlKGluZGV4ICsgb2Zmc2V0LCAwLCBzY3JpcHQpO1xuICAgIHJldHVybiBub3JtYWxpemVQb3NpdGlvbigpO1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gKi9cbiAgYXN5bmMgUmVtb3ZlU2NyaXB0KGlkKSB7XG4gICAgY29uc3QgaSA9IHN0b3JlLnNjcmlwdHMuaW5kZXhPZihnZXRTY3JpcHRCeUlkKGlkKSk7XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgc3RvcmUuc2NyaXB0cy5zcGxpY2UoaSwgMSk7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHN0b3JhZ2Uuc2NyaXB0LnJlbW92ZShpZCksXG4gICAgICAgIHN0b3JhZ2UuY29kZS5yZW1vdmUoaWQpLFxuICAgICAgICBzdG9yYWdlLnZhbHVlLnJlbW92ZShpZCksXG4gICAgICBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbmRDbWQoJ1JlbW92ZVNjcmlwdCcsIGlkKTtcbiAgfSxcbiAgUGFyc2VNZXRhOiBwYXJzZU1ldGEsXG4gIFBhcnNlU2NyaXB0OiBwYXJzZVNjcmlwdCxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59ICovXG4gIFVwZGF0ZVNjcmlwdEluZm8oeyBpZCwgY29uZmlnLCBjdXN0b20gfSkge1xuICAgIHJldHVybiB1cGRhdGVTY3JpcHRJbmZvKGlkLCB7XG4gICAgICBjb25maWcsXG4gICAgICBjdXN0b20sXG4gICAgICBwcm9wczogeyBsYXN0TW9kaWZpZWQ6IERhdGUubm93KCkgfSxcbiAgICB9KTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn0gKi9cbiAgVmFjdXVtOiB2YWN1dW0sXG59KTtcblxucHJlSW5pdGlhbGl6ZS5wdXNoKGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyB2ZXJzaW9uOiBsYXN0VmVyc2lvbiB9ID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgndmVyc2lvbicpO1xuICBjb25zdCB2ZXJzaW9uID0gcHJvY2Vzcy5lbnYuVk1fVkVSO1xuICBpZiAoIWxhc3RWZXJzaW9uKSBhd2FpdCBwYXRjaERCKCk7XG4gIGlmICh2ZXJzaW9uICE9PSBsYXN0VmVyc2lvbikgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHZlcnNpb24gfSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XG4gIGNvbnN0IHNjcmlwdHMgPSBbXTtcbiAgY29uc3Qgc3RvcmVJbmZvID0ge1xuICAgIGlkOiAwLFxuICAgIHBvc2l0aW9uOiAwLFxuICB9O1xuICBjb25zdCBpZE1hcCA9IHt9O1xuICBjb25zdCB1cmlNYXAgPSB7fTtcbiAgY29uc3QgbW9kcyA9IFtdO1xuICBjb25zdCByZXNVcmxzID0gW107XG4gIC8qKiBAdGhpcyBWTVNjcmlwdEN1c3RvbS5wYXRoTWFwICovXG4gIGNvbnN0IHJlbWVtYmVyVXJsID0gZnVuY3Rpb24gXyh1cmwpIHsgcmVzVXJscy5wdXNoKHRoaXNbdXJsXSB8fCB1cmwpOyB9O1xuICBkYXRhOjpmb3JFYWNoRW50cnkoKFtrZXksIHNjcmlwdF0pID0+IHtcbiAgICBkYXRhQ2FjaGUucHV0KGtleSwgc2NyaXB0KTtcbiAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoc3RvcmFnZS5zY3JpcHQucHJlZml4KSkge1xuICAgICAgLy8ge1xuICAgICAgLy8gICBtZXRhLFxuICAgICAgLy8gICBjdXN0b20sXG4gICAgICAvLyAgIHByb3BzOiB7IGlkLCBwb3NpdGlvbiwgdXJpIH0sXG4gICAgICAvLyAgIGNvbmZpZzogeyBlbmFibGVkLCBzaG91bGRVcGRhdGUgfSxcbiAgICAgIC8vIH1cbiAgICAgIGNvbnN0IGlkID0gZ2V0SW50KGtleS5zbGljZShzdG9yYWdlLnNjcmlwdC5wcmVmaXgubGVuZ3RoKSk7XG4gICAgICBpZiAoIWlkIHx8IGlkTWFwW2lkXSkge1xuICAgICAgICAvLyBJRCBjb25mbGljdHMhXG4gICAgICAgIC8vIFNob3VsZCBub3QgaGFwcGVuLCBkaXNjYXJkIGR1cGxpY2F0ZXMuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlkTWFwW2lkXSA9IHNjcmlwdDtcbiAgICAgIGNvbnN0IHVyaSA9IGdldE5hbWVVUkkoc2NyaXB0KTtcbiAgICAgIGlmICh1cmlNYXBbdXJpXSkge1xuICAgICAgICAvLyBOYW1lc3BhY2UgY29uZmxpY3RzIVxuICAgICAgICAvLyBTaG91bGQgbm90IGhhcHBlbiwgZGlzY2FyZCBkdXBsaWNhdGVzLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB1cmlNYXBbdXJpXSA9IHNjcmlwdDtcbiAgICAgIHNjcmlwdC5wcm9wcyA9IHtcbiAgICAgICAgLi4uc2NyaXB0LnByb3BzLFxuICAgICAgICBpZCxcbiAgICAgICAgdXJpLFxuICAgICAgfTtcbiAgICAgIHNjcmlwdC5jdXN0b20gPSB7XG4gICAgICAgIC4uLmdldERlZmF1bHRDdXN0b20oKSxcbiAgICAgICAgLi4uc2NyaXB0LmN1c3RvbSxcbiAgICAgIH07XG4gICAgICBzdG9yZUluZm8uaWQgPSBNYXRoLm1heChzdG9yZUluZm8uaWQsIGlkKTtcbiAgICAgIHN0b3JlSW5mby5wb3NpdGlvbiA9IE1hdGgubWF4KHN0b3JlSW5mby5wb3NpdGlvbiwgZ2V0SW50KHNjcmlwdC5wcm9wcy5wb3NpdGlvbikpO1xuICAgICAgc2NyaXB0cy5wdXNoKHNjcmlwdCk7XG4gICAgICAvLyBsaXN0aW5nIGFsbCBrbm93biByZXNvdXJjZSB1cmxzIGluIG9yZGVyIHRvIHJlbW92ZSB1bnVzZWQgbW9kIGtleXNcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3VzdG9tOiB7IHBhdGhNYXAgPSB7fSB9ID0ge30sXG4gICAgICAgIG1ldGEgPSBzY3JpcHQubWV0YSA9IHt9LFxuICAgICAgfSA9IHNjcmlwdDtcbiAgICAgIG1ldGEuZ3JhbnQgPSBbLi4ubmV3IFNldChtZXRhLmdyYW50IHx8IFtdKV07IC8vIGRlZHVwbGljYXRlXG4gICAgICBtZXRhLnJlcXVpcmU/LmZvckVhY2gocmVtZW1iZXJVcmwsIHBhdGhNYXApO1xuICAgICAgT2JqZWN0LnZhbHVlcyhtZXRhLnJlc291cmNlcyB8fCB7fSkuZm9yRWFjaChyZW1lbWJlclVybCwgcGF0aE1hcCk7XG4gICAgICBwYXRoTWFwOjpyZW1lbWJlclVybChtZXRhLmljb24pO1xuICAgIH0gZWxzZSBpZiAoa2V5LnN0YXJ0c1dpdGgoc3RvcmFnZS5tb2QucHJlZml4KSkge1xuICAgICAgbW9kcy5wdXNoKGtleS5zbGljZShzdG9yYWdlLm1vZC5wcmVmaXgubGVuZ3RoKSk7XG4gICAgfVxuICB9KTtcbiAgc3RvcmFnZS5tb2QucmVtb3ZlTXVsdGkobW9kcy5maWx0ZXIodXJsID0+ICFyZXNVcmxzLmluY2x1ZGVzKHVybCkpKTtcbiAgT2JqZWN0LmFzc2lnbihzdG9yZSwge1xuICAgIHNjcmlwdHMsXG4gICAgc3RvcmVJbmZvLFxuICAgIHNjcmlwdE1hcDogc2NyaXB0cy5yZWR1Y2UoKG1hcCwgaXRlbSkgPT4ge1xuICAgICAgbWFwW2l0ZW0ucHJvcHMuaWRdID0gaXRlbTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pLFxuICB9KTtcbiAgLy8gU3dpdGNoIGRlZmF1bHRJbmplY3RJbnRvIGZyb20gYHBhZ2VgIHRvIGBhdXRvYCB3aGVuIHVwZ3JhZGluZyBWTTIuMTIuNyBvciBvbGRlclxuICBpZiAodmVyc2lvbiAhPT0gbGFzdFZlcnNpb25cbiAgJiYgSVNfRklSRUZPWFxuICAmJiBkYXRhLm9wdGlvbnM/LmRlZmF1bHRJbmplY3RJbnRvID09PSBJTkpFQ1RfUEFHRVxuICAmJiBjb21wYXJlVmVyc2lvbihsYXN0VmVyc2lvbiwgJzIuMTIuNycpIDw9IDApIHtcbiAgICBzZXRPcHRpb24oJ2RlZmF1bHRJbmplY3RJbnRvJywgSU5KRUNUX0FVVE8pO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgIGNvbnNvbGUubG9nKCdzdG9yZTonLCBzdG9yZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICB9XG4gIHZhY3V1bShkYXRhKTtcbiAgcmV0dXJuIHNvcnRTY3JpcHRzKCk7XG59KTtcblxuLyoqIEByZXR1cm4ge251bWJlcn0gKi9cbmZ1bmN0aW9uIGdldEludCh2YWwpIHtcbiAgcmV0dXJuICt2YWwgfHwgMDtcbn1cblxuLyoqIEByZXR1cm4gez9udW1iZXJ9ICovXG5mdW5jdGlvbiBnZXRQcm9wc0lkKHNjcmlwdCkge1xuICByZXR1cm4gc2NyaXB0Py5wcm9wcy5pZDtcbn1cblxuLyoqIEByZXR1cm4ge3ZvaWR9ICovXG5mdW5jdGlvbiB1cGRhdGVMYXN0TW9kaWZpZWQoKSB7XG4gIHNldE9wdGlvbignbGFzdE1vZGlmaWVkJywgRGF0ZS5ub3coKSk7XG59XG5cbi8qKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59ICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbm9ybWFsaXplUG9zaXRpb24oKSB7XG4gIGNvbnN0IHVwZGF0ZXMgPSBzdG9yZS5zY3JpcHRzLmZpbHRlcigoeyBwcm9wcyB9LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gaW5kZXggKyAxO1xuICAgIGNvbnN0IHJlcyA9IHByb3BzLnBvc2l0aW9uICE9PSBwb3NpdGlvbjtcbiAgICBpZiAocmVzKSBwcm9wcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHJldHVybiByZXM7XG4gIH0pO1xuICBzdG9yZS5zdG9yZUluZm8ucG9zaXRpb24gPSBzdG9yZS5zY3JpcHRzLmxlbmd0aDtcbiAgaWYgKHVwZGF0ZXMubGVuZ3RoKSB7XG4gICAgYXdhaXQgc3RvcmFnZS5zY3JpcHQuZHVtcCh1cGRhdGVzKTtcbiAgICB1cGRhdGVMYXN0TW9kaWZpZWQoKTtcbiAgfVxuICByZXR1cm4gdXBkYXRlcy5sZW5ndGg7XG59XG5cbi8qKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59ICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc29ydFNjcmlwdHMoKSB7XG4gIHN0b3JlLnNjcmlwdHMuc29ydCgoYSwgYikgPT4gZ2V0SW50KGEucHJvcHMucG9zaXRpb24pIC0gZ2V0SW50KGIucHJvcHMucG9zaXRpb24pKTtcbiAgY29uc3QgY2hhbmdlZCA9IGF3YWl0IG5vcm1hbGl6ZVBvc2l0aW9uKCk7XG4gIHNlbmRDbWQoJ1NjcmlwdHNVcGRhdGVkJywgbnVsbCk7XG4gIHJldHVybiBjaGFuZ2VkO1xufVxuXG4vKiogQHJldHVybiB7P1ZNU2NyaXB0fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmlwdEJ5SWQoaWQpIHtcbiAgcmV0dXJuIHN0b3JlLnNjcmlwdE1hcFtpZF07XG59XG5cbi8qKiBAcmV0dXJuIHs/Vk1TY3JpcHR9ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyaXB0KHsgaWQsIHVyaSwgbWV0YSB9KSB7XG4gIGxldCBzY3JpcHQ7XG4gIGlmIChpZCkge1xuICAgIHNjcmlwdCA9IGdldFNjcmlwdEJ5SWQoaWQpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdXJpKSB1cmkgPSBnZXROYW1lVVJJKHsgbWV0YSwgaWQ6ICdAQHNob3VsZC1oYXZlLW5hbWUnIH0pO1xuICAgIHNjcmlwdCA9IHN0b3JlLnNjcmlwdHMuZmluZCgoeyBwcm9wcyB9KSA9PiB1cmkgPT09IHByb3BzLnVyaSk7XG4gIH1cbiAgcmV0dXJuIHNjcmlwdDtcbn1cblxuLyoqIEByZXR1cm4ge1ZNU2NyaXB0W119ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyaXB0cygpIHtcbiAgcmV0dXJuIHN0b3JlLnNjcmlwdHMuZmlsdGVyKHNjcmlwdCA9PiAhc2NyaXB0LmNvbmZpZy5yZW1vdmVkKTtcbn1cblxuLyoqXG4gKiBAZGVzYyBMb2FkIHZhbHVlcyBmb3IgYmF0Y2ggdXBkYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyW119IGlkc1xuICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVTdG9yZXNCeUlkcyhpZHMpIHtcbiAgcmV0dXJuIHN0b3JhZ2UudmFsdWUuZ2V0TXVsdGkoaWRzKTtcbn1cblxuLyoqXG4gKiBAZGVzYyBEdW1wIHZhbHVlcyBmb3IgYmF0Y2ggdXBkYXRlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZURpY3QgeyBpZDE6IHZhbHVlMSwgaWQyOiB2YWx1ZTIsIC4uLiB9XG4gKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkdW1wVmFsdWVTdG9yZXModmFsdWVEaWN0KSB7XG4gIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5pbmZvKCdVcGRhdGUgdmFsdWUgc3RvcmVzJywgdmFsdWVEaWN0KTtcbiAgYXdhaXQgc3RvcmFnZS52YWx1ZS5kdW1wKHZhbHVlRGljdCk7XG4gIHJldHVybiB2YWx1ZURpY3Q7XG59XG5cbmV4cG9ydCBjb25zdCBFTlZfQ0FDSEVfS0VZUyA9ICdjYWNoZUtleXMnO1xuZXhwb3J0IGNvbnN0IEVOVl9SRVFfS0VZUyA9ICdyZXFLZXlzJztcbmV4cG9ydCBjb25zdCBFTlZfVkFMVUVfSURTID0gJ3ZhbHVlSWRzJztcbmNvbnN0IEdNVkFMVUVTX1JFID0gL15HTVtfLl0obGlzdFZhbHVlc3woW2dzXWV0fGRlbGV0ZSlWYWx1ZSkkLztcbmNvbnN0IFJVTl9BVF9SRSA9IC9eZG9jdW1lbnQtKHN0YXJ0fGJvZHl8ZW5kfGlkbGUpJC87XG4vKipcbiAqIEBkZXNjIEdldCBzY3JpcHRzIHRvIGJlIGluamVjdGVkIHRvIHBhZ2Ugd2l0aCBzcGVjaWZpYyBVUkwuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTY3JpcHRzQnlVUkwodXJsLCBpc1RvcCkge1xuICBjb25zdCBhbGxTY3JpcHRzID0gdGVzdEJsYWNrbGlzdCh1cmwpXG4gICAgPyBbXVxuICAgIDogc3RvcmUuc2NyaXB0cy5maWx0ZXIoc2NyaXB0ID0+IChcbiAgICAgICFzY3JpcHQuY29uZmlnLnJlbW92ZWRcbiAgICAgICYmIChpc1RvcCB8fCAhKHNjcmlwdC5jdXN0b20ubm9mcmFtZXMgPz8gc2NyaXB0Lm1ldGEubm9mcmFtZXMpKVxuICAgICAgJiYgdGVzdFNjcmlwdCh1cmwsIHNjcmlwdClcbiAgICApKTtcbiAgY29uc3QgZGlzYWJsZWRJZHMgPSBbXTtcbiAgLyoqIEBuYW1lc3BhY2UgVk1TY3JpcHRCeVVybERhdGEgKi9cbiAgY29uc3QgW2VudlN0YXJ0LCBlbnZEZWxheWVkXSA9IFswLCAxXS5tYXAoKCkgPT4gKHtcbiAgICBpZHM6IFtdLFxuICAgIC8qKiBAdHlwZSB7KFZNU2NyaXB0ICYgVk1JbmplY3RlZFNjcmlwdClbXX0gKi9cbiAgICBzY3JpcHRzOiBbXSxcbiAgICBbRU5WX0NBQ0hFX0tFWVNdOiBbXSxcbiAgICBbRU5WX1JFUV9LRVlTXTogW10sXG4gICAgW0VOVl9WQUxVRV9JRFNdOiBbXSxcbiAgfSkpO1xuICBhbGxTY3JpcHRzLmZvckVhY2goKHNjcmlwdCkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHNjcmlwdC5wcm9wcztcbiAgICBpZiAoIXNjcmlwdC5jb25maWcuZW5hYmxlZCkge1xuICAgICAgZGlzYWJsZWRJZHMucHVzaChpZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgbWV0YSwgY3VzdG9tIH0gPSBzY3JpcHQ7XG4gICAgY29uc3QgeyBwYXRoTWFwID0gYnVpbGRQYXRoTWFwKHNjcmlwdCkgfSA9IGN1c3RvbTtcbiAgICBjb25zdCBydW5BdCA9IGAke2N1c3RvbS5ydW5BdCB8fCBtZXRhLnJ1bkF0IHx8ICcnfWAubWF0Y2goUlVOX0FUX1JFKT8uWzFdIHx8ICdlbmQnO1xuICAgIGNvbnN0IGVudiA9IHJ1bkF0ID09PSAnc3RhcnQnIHx8IHJ1bkF0ID09PSAnYm9keScgPyBlbnZTdGFydCA6IGVudkRlbGF5ZWQ7XG4gICAgZW52Lmlkcy5wdXNoKGlkKTtcbiAgICBpZiAobWV0YS5ncmFudC5zb21lKEdNVkFMVUVTX1JFLnRlc3QsIEdNVkFMVUVTX1JFKSkge1xuICAgICAgZW52W0VOVl9WQUxVRV9JRFNdLnB1c2goaWQpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtsaXN0LCBuYW1lXSBvZiBbXG4gICAgICBbbWV0YS5yZXF1aXJlLCBFTlZfUkVRX0tFWVNdLFxuICAgICAgW09iamVjdC52YWx1ZXMobWV0YS5yZXNvdXJjZXMpLCBFTlZfQ0FDSEVfS0VZU10sXG4gICAgXSkge1xuICAgICAgbGlzdC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGtleSA9IHBhdGhNYXBba2V5XSB8fCBrZXk7XG4gICAgICAgIGlmICghZW52U3RhcnRbbmFtZV0uaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGVudltuYW1lXS5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogQG5hbWVzcGFjZSBWTUluamVjdGVkU2NyaXB0ICovXG4gICAgZW52LnNjcmlwdHMucHVzaCh7IC4uLnNjcmlwdCwgcnVuQXQgfSk7XG4gIH0pO1xuICBpZiAoZW52RGVsYXllZC5pZHMubGVuZ3RoKSB7XG4gICAgZW52RGVsYXllZC5wcm9taXNlID0gcmVhZEVudmlyb25tZW50RGF0YShlbnZEZWxheWVkKTtcbiAgfVxuICAvKiogQG5hbWVzcGFjZSBWTVNjcmlwdEJ5VXJsRGF0YSAqL1xuICByZXR1cm4ge1xuICAgIC4uLmVudlN0YXJ0LFxuICAgIC4uLmF3YWl0IHJlYWRFbnZpcm9ubWVudERhdGEoZW52U3RhcnQpLFxuICAgIGRpc2FibGVkSWRzLFxuICAgIGVudkRlbGF5ZWQsXG4gIH07XG59XG5cbi8qKlxuICogT2JqZWN0IGtleXMgPT0gYXJlYXMgaW4gYHN0b3JhZ2VgIG1vZHVsZS5cbiAqIEBuYW1lc3BhY2UgVk1TY3JpcHRCeVVybERhdGFcbiAqL1xuY29uc3QgU1RPUkFHRV9ST1VURVMgPSBPYmplY3QuZW50cmllcyh7XG4gIGNhY2hlOiBFTlZfQ0FDSEVfS0VZUyxcbiAgY29kZTogJ2lkcycsXG4gIHJlcXVpcmU6IEVOVl9SRVFfS0VZUyxcbiAgdmFsdWU6IEVOVl9WQUxVRV9JRFMsXG59KTtcbmNvbnN0IHJldHJpZWRTdG9yYWdlS2V5cyA9IHt9O1xuXG5hc3luYyBmdW5jdGlvbiByZWFkRW52aXJvbm1lbnREYXRhKGVudiwgaXNSZXRyeSkge1xuICBjb25zdCBrZXlzID0gW107XG4gIFNUT1JBR0VfUk9VVEVTLmZvckVhY2goKFthcmVhLCBzcmNJZHNdKSA9PiB7XG4gICAgZW52W3NyY0lkc10uZm9yRWFjaChpZCA9PiB7XG4gICAgICBrZXlzLnB1c2goc3RvcmFnZVthcmVhXS5nZXRLZXkoaWQpKTtcbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBzdG9yYWdlLmJhc2UuZ2V0TXVsdGkoa2V5cyk7XG4gIGZvciAoY29uc3QgW2FyZWEsIHNyY0lkc10gb2YgU1RPUkFHRV9ST1VURVMpIHtcbiAgICBlbnZbYXJlYV0gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIGVudltzcmNJZHNdKSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3N0b3JhZ2VbYXJlYV0uZ2V0S2V5KGlkKV07XG4gICAgICBlbnZbYXJlYV1baWRdID0gdmFsO1xuICAgICAgaWYgKHZhbCA9PSBudWxsICYmIGFyZWEgIT09ICd2YWx1ZScgJiYgcmV0cmllZFN0b3JhZ2VLZXlzW2FyZWEgKyBpZF0gIT09IDIpIHtcbiAgICAgICAgY29uc3QgZXJyID0gYFRoZSBcIiR7YXJlYX1cIiBzdG9yYWdlIGlzIG1pc3NpbmcgXCIke2lkfVwiIWA7XG4gICAgICAgIGNvbnN0IGVycjIgPSAnVmFjdXVtaW5nIGRpZCBub3QgaGVscC4gUGxlYXNlIHJlaW5zdGFsbCB0aGUgYWZmZWN0ZWQgc2NyaXB0cy4nO1xuICAgICAgICByZXRyaWVkU3RvcmFnZUtleXNbYXJlYSArIGlkXSA9IGlzUmV0cnkgPyAyIDogMTtcbiAgICAgICAgaWYgKCFpc1JldHJ5KSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGVyciwgJ1ZhY3V1bWluZy4uLicpO1xuICAgICAgICAgIGlmIChhd2FpdCB2YWN1dW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRFbnZpcm9ubWVudERhdGEoZW52LCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIsIGVycjIpO1xuICAgICAgICBub3RpZnkoeyB0aXRsZTogZXJyLCBib2R5OiBlcnIyIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZW52O1xufVxuXG4vKipcbiAqIEBkZXNjIEdldCBkYXRhIGZvciBkYXNoYm9hcmQuXG4gKiBAcmV0dXJuIHtQcm9taXNlPHsgc2NyaXB0czogVk1TY3JpcHRbXSwgY2FjaGU6IE9iamVjdCB9Pn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoaWRzKSB7XG4gIGNvbnN0IHNjcmlwdHMgPSBpZHMgPyBpZHMubWFwKGdldFNjcmlwdEJ5SWQpIDogc3RvcmUuc2NyaXB0cztcbiAgcmV0dXJuIHtcbiAgICBzY3JpcHRzLFxuICAgIGNhY2hlOiBhd2FpdCBnZXRJY29uQ2FjaGUoc2NyaXB0cyksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEljb25DYWNoZShzY3JpcHRzKSB7XG4gIGNvbnN0IGljb25VcmxzID0gW107XG4gIHNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgY29uc3QgeyBpY29uIH0gPSBzY3JpcHQubWV0YTtcbiAgICBpZiAoaXNSZW1vdGUoaWNvbikpIHtcbiAgICAgIGljb25VcmxzLnB1c2goc2NyaXB0LmN1c3RvbS5wYXRoTWFwPy5baWNvbl0gfHwgaWNvbik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGljb25VcmxzLmxlbmd0aFxuICAgID8gc3RvcmFnZS5jYWNoZS5nZXRNdWx0aShpY29uVXJscywgdW5kZWZpbmVkLCBzdG9yYWdlLmNhY2hlLm1ha2VEYXRhVXJpKVxuICAgIDoge307XG59XG5cbi8qKiBAcmV0dXJuIHtudW1iZXJ9ICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZW1vdmUoeyBmb3JjZSB9ID0ge30pIHtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgdG9SZW1vdmUgPSBzdG9yZS5zY3JpcHRzLmZpbHRlcihzY3JpcHQgPT4gc2NyaXB0LmNvbmZpZy5yZW1vdmVkICYmIChcbiAgICBmb3JjZSB8fCBub3cgLSBnZXRJbnQoc2NyaXB0LnByb3BzLmxhc3RNb2RpZmllZCkgPiBUSU1FT1VUX1dFRUtcbiAgKSk7XG4gIGlmICh0b1JlbW92ZS5sZW5ndGgpIHtcbiAgICBzdG9yZS5zY3JpcHRzID0gc3RvcmUuc2NyaXB0cy5maWx0ZXIoc2NyaXB0ID0+ICFzY3JpcHQuY29uZmlnLnJlbW92ZWQpO1xuICAgIGNvbnN0IGlkcyA9IHRvUmVtb3ZlLm1hcChnZXRQcm9wc0lkKTtcbiAgICBzdG9yYWdlLnNjcmlwdC5yZW1vdmVNdWx0aShpZHMpO1xuICAgIHN0b3JhZ2UuY29kZS5yZW1vdmVNdWx0aShpZHMpO1xuICAgIHN0b3JhZ2UudmFsdWUucmVtb3ZlTXVsdGkoaWRzKTtcbiAgfVxuICByZXR1cm4gdG9SZW1vdmUubGVuZ3RoO1xufVxuXG4vKiogQHJldHVybiB7c3RyaW5nfSAqL1xuZnVuY3Rpb24gZ2V0VVVJRCgpIHtcbiAgY29uc3Qgcm5kID0gbmV3IFVpbnQxNkFycmF5KDgpO1xuICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhybmQpO1xuICAvLyB4eHh4eHh4eC14eHh4LU14eHgtTnh4eC14eHh4eHh4eHh4eHhcbiAgLy8gV2UncmUgdXNpbmcgVVVJRHY0IHZhcmlhbnQgMSBzbyBOPTQgYW5kIE09OFxuICAvLyBTZWUgZm9ybWF0X3V1aWRfdjNvcjUgaW4gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9yZmMvcmZjNDEyMi50eHRcbiAgcm5kWzNdID0gcm5kWzNdICYgMHgwRkZGIHwgMHg0MDAwOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWJpdHdpc2VcbiAgcm5kWzRdID0gcm5kWzRdICYgMHgzRkZGIHwgMHg4MDAwOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWJpdHdpc2VcbiAgcmV0dXJuICcwMS0yLTMtNC01NjcnLnJlcGxhY2UoL1xcZC9nLCBpID0+IChybmRbaV0gKyAweDFfMDAwMCkudG9TdHJpbmcoMTYpLnNsaWNlKC00KSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTVNjcmlwdH0gc2NyaXB0XG4gKiBAcGFyYW0ge3N0cmluZ30gY29kZVxuICogQHJldHVybiB7UHJvbWlzZTxWTVNjcmlwdFtdPn1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2F2ZVNjcmlwdChzY3JpcHQsIGNvZGUpIHtcbiAgY29uc3QgY29uZmlnID0gc2NyaXB0LmNvbmZpZyB8fCB7fTtcbiAgY29uZmlnLmVuYWJsZWQgPSBnZXRJbnQoY29uZmlnLmVuYWJsZWQpO1xuICBjb25maWcuc2hvdWxkVXBkYXRlID0gZ2V0SW50KGNvbmZpZy5zaG91bGRVcGRhdGUpO1xuICBjb25zdCBwcm9wcyA9IHNjcmlwdC5wcm9wcyB8fCB7fTtcbiAgbGV0IG9sZFNjcmlwdDtcbiAgaWYgKCFwcm9wcy5pZCkge1xuICAgIHN0b3JlLnN0b3JlSW5mby5pZCArPSAxO1xuICAgIHByb3BzLmlkID0gc3RvcmUuc3RvcmVJbmZvLmlkO1xuICB9IGVsc2Uge1xuICAgIG9sZFNjcmlwdCA9IHN0b3JlLnNjcmlwdE1hcFtwcm9wcy5pZF07XG4gIH1cbiAgcHJvcHMudXJpID0gZ2V0TmFtZVVSSShzY3JpcHQpO1xuICBwcm9wcy51dWlkID0gcHJvcHMudXVpZCB8fCBjcnlwdG8ucmFuZG9tVVVJRD8uKCkgfHwgZ2V0VVVJRCgpO1xuICAvLyBEbyBub3QgYWxsb3cgc2NyaXB0IHdpdGggc2FtZSBuYW1lIGFuZCBuYW1lc3BhY2VcbiAgaWYgKHN0b3JlLnNjcmlwdHMuc29tZSgoeyBwcm9wczogeyBpZCwgdXJpIH0gPSB7fSB9KSA9PiBwcm9wcy5pZCAhPT0gaWQgJiYgcHJvcHMudXJpID09PSB1cmkpKSB7XG4gICAgdGhyb3cgaTE4bignbXNnTmFtZXNwYWNlQ29uZmxpY3QnKTtcbiAgfVxuICBpZiAob2xkU2NyaXB0KSB7XG4gICAgc2NyaXB0LmNvbmZpZyA9IHsgLi4ub2xkU2NyaXB0LmNvbmZpZywgLi4uY29uZmlnIH07XG4gICAgc2NyaXB0LnByb3BzID0geyAuLi5vbGRTY3JpcHQucHJvcHMsIC4uLnByb3BzIH07XG4gICAgY29uc3QgaW5kZXggPSBzdG9yZS5zY3JpcHRzLmluZGV4T2Yob2xkU2NyaXB0KTtcbiAgICBzdG9yZS5zY3JpcHRzW2luZGV4XSA9IHNjcmlwdDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXByb3BzLnBvc2l0aW9uKSB7XG4gICAgICBzdG9yZS5zdG9yZUluZm8ucG9zaXRpb24gKz0gMTtcbiAgICAgIHByb3BzLnBvc2l0aW9uID0gc3RvcmUuc3RvcmVJbmZvLnBvc2l0aW9uO1xuICAgIH0gZWxzZSBpZiAoc3RvcmUuc3RvcmVJbmZvLnBvc2l0aW9uIDwgcHJvcHMucG9zaXRpb24pIHtcbiAgICAgIHN0b3JlLnN0b3JlSW5mby5wb3NpdGlvbiA9IHByb3BzLnBvc2l0aW9uO1xuICAgIH1cbiAgICBzY3JpcHQuY29uZmlnID0gY29uZmlnO1xuICAgIHNjcmlwdC5wcm9wcyA9IHByb3BzO1xuICAgIHN0b3JlLnNjcmlwdHMucHVzaChzY3JpcHQpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgc3RvcmFnZS5zY3JpcHQuZHVtcChzY3JpcHQpLFxuICAgIHN0b3JhZ2UuY29kZS5zZXQocHJvcHMuaWQsIGNvZGUpLFxuICBdKTtcbn1cblxuLyoqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59ICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2NyaXB0SW5mbyhpZCwgZGF0YSkge1xuICBjb25zdCBzY3JpcHQgPSBzdG9yZS5zY3JpcHRNYXBbaWRdO1xuICBpZiAoIXNjcmlwdCkgdGhyb3cgbnVsbDtcbiAgc2NyaXB0LnByb3BzID0geyAuLi5zY3JpcHQucHJvcHMsIC4uLmRhdGEucHJvcHMgfTtcbiAgc2NyaXB0LmNvbmZpZyA9IHsgLi4uc2NyaXB0LmNvbmZpZywgLi4uZGF0YS5jb25maWcgfTtcbiAgc2NyaXB0LmN1c3RvbSA9IHsgLi4uc2NyaXB0LmN1c3RvbSwgLi4uZGF0YS5jdXN0b20gfTtcbiAgYXdhaXQgc3RvcmFnZS5zY3JpcHQuZHVtcChzY3JpcHQpO1xuICByZXR1cm4gc2VuZENtZChDTURfU0NSSVBUX1VQREFURSwgeyB3aGVyZTogeyBpZCB9LCB1cGRhdGU6IHNjcmlwdCB9KTtcbn1cblxuLyoqIEByZXR1cm4ge1Byb21pc2U8eyBpc05ldz8sIHVwZGF0ZSwgd2hlcmUgfT59ICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VTY3JpcHQoc3JjKSB7XG4gIGNvbnN0IG1ldGEgPSBwYXJzZU1ldGEoc3JjLmNvZGUpO1xuICBpZiAoIW1ldGEubmFtZSkgdGhyb3cgYCR7aTE4bignbXNnSW52YWxpZFNjcmlwdCcpfVxcbiR7aTE4bignbGFiZWxOb05hbWUnKX1gO1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgdXBkYXRlOiB7XG4gICAgICBtZXNzYWdlOiBzcmMubWVzc2FnZSA9PSBudWxsID8gaTE4bignbXNnVXBkYXRlZCcpIDogc3JjLm1lc3NhZ2UgfHwgJycsXG4gICAgfSxcbiAgfTtcbiAgbGV0IGNtZCA9IENNRF9TQ1JJUFRfVVBEQVRFO1xuICBsZXQgc2NyaXB0O1xuICBjb25zdCBvbGRTY3JpcHQgPSBhd2FpdCBnZXRTY3JpcHQoeyBpZDogc3JjLmlkLCBtZXRhIH0pO1xuICBpZiAob2xkU2NyaXB0KSB7XG4gICAgaWYgKHNyYy5pc05ldykgdGhyb3cgaTE4bignbXNnTmFtZXNwYWNlQ29uZmxpY3QnKTtcbiAgICBzY3JpcHQgPSB7IC4uLm9sZFNjcmlwdCB9O1xuICB9IGVsc2Uge1xuICAgICh7IHNjcmlwdCB9ID0gbmV3U2NyaXB0KCkpO1xuICAgIGNtZCA9IENNRF9TQ1JJUFRfQUREO1xuICAgIHJlc3VsdC5pc05ldyA9IHRydWU7XG4gICAgcmVzdWx0LnVwZGF0ZS5tZXNzYWdlID0gaTE4bignbXNnSW5zdGFsbGVkJyk7XG4gIH1cbiAgc2NyaXB0LmNvbmZpZyA9IHtcbiAgICAuLi5zY3JpcHQuY29uZmlnLFxuICAgIC4uLnNyYy5jb25maWcsXG4gICAgcmVtb3ZlZDogMCwgLy8gZm9yY2UgcmVzZXQgYHJlbW92ZWRgIHNpbmNlIHRoaXMgaXMgYW4gaW5zdGFsbGF0aW9uXG4gIH07XG4gIHNjcmlwdC5jdXN0b20gPSB7XG4gICAgLi4uc2NyaXB0LmN1c3RvbSxcbiAgICAuLi5zcmMuY3VzdG9tLFxuICB9O1xuICBzY3JpcHQucHJvcHMgPSB7XG4gICAgLi4uc2NyaXB0LnByb3BzLFxuICAgIGxhc3RNb2RpZmllZDogRGF0ZS5ub3coKSxcbiAgICBsYXN0VXBkYXRlZDogRGF0ZS5ub3coKSxcbiAgICAuLi5zcmMucHJvcHMsXG4gIH07XG4gIHNjcmlwdC5tZXRhID0gbWV0YTtcbiAgaWYgKCFtZXRhLmhvbWVwYWdlVVJMICYmICFzY3JpcHQuY3VzdG9tLmhvbWVwYWdlVVJMICYmIGlzUmVtb3RlKHNyYy5mcm9tKSkge1xuICAgIHNjcmlwdC5jdXN0b20uaG9tZXBhZ2VVUkwgPSBzcmMuZnJvbTtcbiAgfVxuICBpZiAoaXNSZW1vdGUoc3JjLnVybCkpIHNjcmlwdC5jdXN0b20ubGFzdEluc3RhbGxVUkwgPSBzcmMudXJsO1xuICBpZiAoc3JjLnBvc2l0aW9uKSBzY3JpcHQucHJvcHMucG9zaXRpb24gPSArc3JjLnBvc2l0aW9uO1xuICBidWlsZFBhdGhNYXAoc2NyaXB0LCBzcmMudXJsKTtcbiAgYXdhaXQgc2F2ZVNjcmlwdChzY3JpcHQsIHNyYy5jb2RlKTtcbiAgZmV0Y2hSZXNvdXJjZXMoc2NyaXB0LCBzcmMpO1xuICBPYmplY3QuYXNzaWduKHJlc3VsdC51cGRhdGUsIHNjcmlwdCwgc3JjLnVwZGF0ZSk7XG4gIHJlc3VsdC53aGVyZSA9IHsgaWQ6IHNjcmlwdC5wcm9wcy5pZCB9O1xuICBzZW5kQ21kKGNtZCwgcmVzdWx0KTtcbiAgcGx1Z2luRXZlbnRzLmVtaXQoJ3NjcmlwdENoYW5nZWQnLCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogQHJldHVybiB7T2JqZWN0fSAqL1xuZnVuY3Rpb24gYnVpbGRQYXRoTWFwKHNjcmlwdCwgYmFzZSkge1xuICBjb25zdCB7IG1ldGEgfSA9IHNjcmlwdDtcbiAgY29uc3QgYmFzZVVybCA9IGJhc2UgfHwgc2NyaXB0LmN1c3RvbS5sYXN0SW5zdGFsbFVSTDtcbiAgY29uc3QgcGF0aE1hcCA9IGJhc2VVcmwgPyBbXG4gICAgLi4ubWV0YS5yZXF1aXJlLFxuICAgIC4uLk9iamVjdC52YWx1ZXMobWV0YS5yZXNvdXJjZXMpLFxuICAgIG1ldGEuaWNvbixcbiAgXS5yZWR1Y2UoKG1hcCwga2V5KSA9PiB7XG4gICAgaWYgKGtleSkge1xuICAgICAgY29uc3QgZnVsbFVybCA9IGdldEZ1bGxVcmwoa2V5LCBiYXNlVXJsKTtcbiAgICAgIGlmIChmdWxsVXJsICE9PSBrZXkpIG1hcFtrZXldID0gZnVsbFVybDtcbiAgICB9XG4gICAgcmV0dXJuIG1hcDtcbiAgfSwge30pIDoge307XG4gIHNjcmlwdC5jdXN0b20ucGF0aE1hcCA9IHBhdGhNYXA7XG4gIHJldHVybiBwYXRoTWFwO1xufVxuXG4vKiogQHJldHVybiB7UHJvbWlzZTw/c3RyaW5nPn0gcmVzb2x2ZXMgdG8gZXJyb3IgdGV4dCBpZiBgcmVzb3VyY2VDYWNoZWAgaXMgYWJzZW50ICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXNvdXJjZXMoc2NyaXB0LCByZXNvdXJjZUNhY2hlLCByZXFPcHRpb25zKSB7XG4gIGNvbnN0IHsgY3VzdG9tOiB7IHBhdGhNYXAgfSwgbWV0YSB9ID0gc2NyaXB0O1xuICBjb25zdCBzbmF0Y2ggPSAodXJsLCB0eXBlLCB2YWxpZGF0b3IpID0+IHtcbiAgICB1cmwgPSBwYXRoTWFwW3VybF0gfHwgdXJsO1xuICAgIGNvbnN0IGNvbnRlbnRzID0gcmVzb3VyY2VDYWNoZT8uW3R5cGVdPy5bdXJsXTtcbiAgICByZXR1cm4gY29udGVudHMgIT0gbnVsbCAmJiAhdmFsaWRhdG9yXG4gICAgICA/IHN0b3JhZ2VbdHlwZV0uc2V0KHVybCwgY29udGVudHMpICYmIG51bGxcbiAgICAgIDogc3RvcmFnZVt0eXBlXS5mZXRjaCh1cmwsIHJlcU9wdGlvbnMsIHZhbGlkYXRvcikuY2F0Y2goZXJyID0+IGVycik7XG4gIH07XG4gIGNvbnN0IGVycm9ycyA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAuLi5tZXRhLnJlcXVpcmUubWFwKHVybCA9PiBzbmF0Y2godXJsLCAncmVxdWlyZScpKSxcbiAgICAuLi5PYmplY3QudmFsdWVzKG1ldGEucmVzb3VyY2VzKS5tYXAodXJsID0+IHNuYXRjaCh1cmwsICdjYWNoZScpKSxcbiAgICBpc1JlbW90ZShtZXRhLmljb24pICYmIHNuYXRjaChtZXRhLmljb24sICdjYWNoZScsIHZhbGlkYXRlSW1hZ2UpLFxuICBdKTtcbiAgaWYgKCFyZXNvdXJjZUNhY2hlPy5pZ25vcmVEZXBzRXJyb3JzKSB7XG4gICAgY29uc3QgZXJyb3IgPSBlcnJvcnMubWFwKGZvcm1hdEh0dHBFcnJvcik6OnRydWVKb2luKCdcXG4nKTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBpMThuKCdtc2dFcnJvckZldGNoaW5nUmVzb3VyY2UnKTtcbiAgICAgIHNlbmRDbWQoQ01EX1NDUklQVF9VUERBVEUsIHtcbiAgICAgICAgdXBkYXRlOiB7IGVycm9yLCBtZXNzYWdlIH0sXG4gICAgICAgIHdoZXJlOiB7IGlkOiBzY3JpcHQucHJvcHMuaWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGAke21lc3NhZ2V9XFxuJHtlcnJvcn1gO1xuICAgIH1cbiAgfVxufVxuXG4vKiogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gcmVzb2x2ZXMgb24gc3VjY2VzcywgcmVqZWN0cyBvbiBlcnJvciAqL1xuZnVuY3Rpb24gdmFsaWRhdGVJbWFnZSh1cmwsIGJ1ZiwgdHlwZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGJsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtidWZdLCB7IHR5cGUgfSkpO1xuICAgIGNvbnN0IG9uRG9uZSA9IChlKSA9PiB7XG4gICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGJsb2JVcmwpO1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ2xvYWQnKSByZXNvbHZlKCk7XG4gICAgICBlbHNlIHJlamVjdChgSU1BR0VfRVJST1I6ICR7dXJsfWApO1xuICAgIH07XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5vbmxvYWQgPSBvbkRvbmU7XG4gICAgaW1hZ2Uub25lcnJvciA9IG9uRG9uZTtcbiAgICBpbWFnZS5zcmMgPSBibG9iVXJsO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0SHR0cEVycm9yKGUpIHtcbiAgcmV0dXJuIGUgJiYgW2Uuc3RhdHVzICYmIGBIVFRQJHtlLnN0YXR1c31gLCBlLnVybF06OnRydWVKb2luKCcgJykgfHwgZTtcbn1cblxubGV0IF92YWN1dW1pbmc7XG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cbiAqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhY3V1bShkYXRhKSB7XG4gIGlmIChfdmFjdXVtaW5nKSByZXR1cm4gX3ZhY3V1bWluZztcbiAgbGV0IG51bUZpeGVzID0gMDtcbiAgbGV0IHJlc29sdmVTZWxmO1xuICBfdmFjdXVtaW5nID0gbmV3IFByb21pc2UociA9PiB7IHJlc29sdmVTZWxmID0gcjsgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBjb25zdCB0b0ZldGNoID0gW107XG4gIGNvbnN0IGtleXNUb1JlbW92ZSA9IFtdO1xuICBjb25zdCB2YWx1ZUtleXMgPSB7fTtcbiAgY29uc3QgY2FjaGVLZXlzID0ge307XG4gIGNvbnN0IHJlcXVpcmVLZXlzID0ge307XG4gIGNvbnN0IGNvZGVLZXlzID0ge307XG4gIGNvbnN0IG1hcHBpbmdzID0gW1xuICAgIFtzdG9yYWdlLnZhbHVlLCB2YWx1ZUtleXNdLFxuICAgIFtzdG9yYWdlLmNhY2hlLCBjYWNoZUtleXNdLFxuICAgIFtzdG9yYWdlLnJlcXVpcmUsIHJlcXVpcmVLZXlzXSxcbiAgICBbc3RvcmFnZS5jb2RlLCBjb2RlS2V5c10sXG4gIF07XG4gIGlmICghZGF0YSkgZGF0YSA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcbiAgZGF0YTo6Zm9yRWFjaEtleSgoa2V5KSA9PiB7XG4gICAgbWFwcGluZ3Muc29tZSgoW3N1YnN0b3JlLCBtYXBdKSA9PiB7XG4gICAgICBjb25zdCB7IHByZWZpeCB9ID0gc3Vic3RvcmU7XG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgocHJlZml4KSkge1xuICAgICAgICAvLyAtMSBmb3IgdW50b3VjaGVkLCAxIGZvciB0b3VjaGVkLCAyIGZvciBtaXNzaW5nXG4gICAgICAgIG1hcFtrZXkuc2xpY2UocHJlZml4Lmxlbmd0aCldID0gLTE7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgdG91Y2ggPSAob2JqLCBrZXksIHNjcmlwdElkKSA9PiB7XG4gICAgaWYgKG9ialtrZXldIDwgMCkge1xuICAgICAgb2JqW2tleV0gPSAxO1xuICAgIH0gZWxzZSBpZiAoIW9ialtrZXldKSB7XG4gICAgICBvYmpba2V5XSA9IDIgKyBzY3JpcHRJZDtcbiAgICB9XG4gIH07XG4gIHN0b3JlLnNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gc2NyaXB0LnByb3BzO1xuICAgIHRvdWNoKGNvZGVLZXlzLCBpZCwgaWQpO1xuICAgIHRvdWNoKHZhbHVlS2V5cywgaWQsIGlkKTtcbiAgICBpZiAoIXNjcmlwdC5jdXN0b20ucGF0aE1hcCkgYnVpbGRQYXRoTWFwKHNjcmlwdCk7XG4gICAgY29uc3QgeyBwYXRoTWFwIH0gPSBzY3JpcHQuY3VzdG9tO1xuICAgIHNjcmlwdC5tZXRhLnJlcXVpcmUuZm9yRWFjaCgodXJsKSA9PiB7XG4gICAgICB0b3VjaChyZXF1aXJlS2V5cywgcGF0aE1hcFt1cmxdIHx8IHVybCwgaWQpO1xuICAgIH0pO1xuICAgIHNjcmlwdC5tZXRhLnJlc291cmNlczo6Zm9yRWFjaFZhbHVlKCh1cmwpID0+IHtcbiAgICAgIHRvdWNoKGNhY2hlS2V5cywgcGF0aE1hcFt1cmxdIHx8IHVybCwgaWQpO1xuICAgIH0pO1xuICAgIGNvbnN0IHsgaWNvbiB9ID0gc2NyaXB0Lm1ldGE7XG4gICAgaWYgKGlzUmVtb3RlKGljb24pKSB7XG4gICAgICBjb25zdCBmdWxsVXJsID0gcGF0aE1hcFtpY29uXSB8fCBpY29uO1xuICAgICAgdG91Y2goY2FjaGVLZXlzLCBmdWxsVXJsLCBpZCk7XG4gICAgfVxuICB9KTtcbiAgbWFwcGluZ3MuZm9yRWFjaCgoW3N1YnN0b3JlLCBtYXBdKSA9PiB7XG4gICAgbWFwOjpmb3JFYWNoRW50cnkoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAvLyByZWR1bmRhbnQgdmFsdWVcbiAgICAgICAga2V5c1RvUmVtb3ZlLnB1c2goc3Vic3RvcmUuZ2V0S2V5KGtleSkpO1xuICAgICAgICBudW1GaXhlcyArPSAxO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+PSAyICYmIHN1YnN0b3JlLmZldGNoKSB7XG4gICAgICAgIC8vIG1pc3NpbmcgcmVzb3VyY2VcbiAgICAgICAga2V5c1RvUmVtb3ZlLnB1c2goc3RvcmFnZS5tb2QuZ2V0S2V5KGtleSkpO1xuICAgICAgICB0b0ZldGNoLnB1c2goc3Vic3RvcmUuZmV0Y2goa2V5KS5jYXRjaChlcnIgPT4gYCR7XG4gICAgICAgICAgZ2V0U2NyaXB0TmFtZShnZXRTY3JpcHRCeUlkKHZhbHVlIC0gMikpXG4gICAgICAgIH06ICR7XG4gICAgICAgICAgZm9ybWF0SHR0cEVycm9yKGVycilcbiAgICAgICAgfWApKTtcbiAgICAgICAgbnVtRml4ZXMgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGlmIChudW1GaXhlcykge1xuICAgIGF3YWl0IHN0b3JhZ2UuYmFzZS5yZW1vdmVNdWx0aShrZXlzVG9SZW1vdmUpOyAvLyBSZW1vdmluZyBgbW9kYCBiZWZvcmUgZmV0Y2hpbmdcbiAgICByZXN1bHQuZXJyb3JzID0gKGF3YWl0IFByb21pc2UuYWxsKHRvRmV0Y2gpKS5maWx0ZXIoQm9vbGVhbik7XG4gIH1cbiAgX3ZhY3V1bWluZyA9IG51bGw7XG4gIHJlc3VsdC5maXhlcyA9IG51bUZpeGVzO1xuICByZXNvbHZlU2VsZihyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogQHR5cGVkZWYgVk1TY3JpcHRcbiAqIEBwcm9wZXJ0eSB7Vk1TY3JpcHRDb25maWd9IGNvbmZpZ1xuICogQHByb3BlcnR5IHtWTVNjcmlwdEN1c3RvbX0gY3VzdG9tXG4gKiBAcHJvcGVydHkge1ZNU2NyaXB0TWV0YX0gbWV0YVxuICogQHByb3BlcnR5IHtWTVNjcmlwdFByb3BzfSBwcm9wc1xuICovXG4vKiogQHR5cGVkZWYgVk1TY3JpcHRDb25maWcgKlxuICogQHByb3BlcnR5IHtCb29sZWFufSBlbmFibGVkIC0gc3RvcmVkIGFzIDAgb3IgMVxuICogQHByb3BlcnR5IHtCb29sZWFufSByZW1vdmVkIC0gc3RvcmVkIGFzIDAgb3IgMVxuICogQHByb3BlcnR5IHtCb29sZWFufSBzaG91bGRVcGRhdGUgLSBzdG9yZWQgYXMgMCBvciAxXG4gKiBAcHJvcGVydHkge0Jvb2xlYW4gfCBudWxsfSBub3RpZnlVcGRhdGVzIC0gc3RvcmVkIGFzIDAgb3IgMSBvciBudWxsIChkZWZhdWx0KSB3aGljaCBtZWFucyBcInVzZSBnbG9iYWwgc2V0dGluZ1wiXG4gKi9cbi8qKiBAdHlwZWRlZiBWTVNjcmlwdEN1c3RvbSAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRvd25sb2FkVVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaG9tZXBhZ2VVUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYXN0SW5zdGFsbFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHVwZGF0ZVVSTFxuICogQHByb3BlcnR5IHsnYXV0bycgfCAncGFnZScgfCAnY29udGVudCd9IGluamVjdEludG9cbiAqIEBwcm9wZXJ0eSB7bnVsbCB8IDEgfCAwfSBub2ZyYW1lcyAtIG51bGwgb3IgYWJzZW5jZSA9PSBkZWZhdWx0IChzY3JpcHQncyB2YWx1ZSlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGV4Y2x1ZGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGV4Y2x1ZGVNYXRjaFxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gaW5jbHVkZVxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gbWF0Y2hcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JpZ0V4Y2x1ZGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JpZ0V4Y2x1ZGVNYXRjaFxuICogQHByb3BlcnR5IHtib29sZWFufSBvcmlnSW5jbHVkZVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcmlnTWF0Y2hcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBwYXRoTWFwXG4gKiBAcHJvcGVydHkge1ZNU2NyaXB0UnVuQXR9IHJ1bkF0XG4gKi9cbi8qKiBAdHlwZWRlZiBWTVNjcmlwdE1ldGEgKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRlc2NyaXB0aW9uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZG93bmxvYWRVUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGV4Y2x1ZGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGV4Y2x1ZGVNYXRjaFxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZ3JhbnRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBob21lcGFnZVVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGluY2x1ZGVcbiAqIEBwcm9wZXJ0eSB7J2F1dG8nIHwgJ3BhZ2UnIHwgJ2NvbnRlbnQnfSBpbmplY3RJbnRvXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtYXRjaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWVzcGFjZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbm9mcmFtZXNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IHJlcXVpcmVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSByZXNvdXJjZXNcbiAqIEBwcm9wZXJ0eSB7Vk1TY3JpcHRSdW5BdH0gcnVuQXRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdXBwb3J0VVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdmVyc2lvblxuICovXG4vKiogQHR5cGVkZWYgVk1TY3JpcHRQcm9wcyAqXG4gKiBAcHJvcGVydHkge251bWJlcn0gaWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsYXN0TW9kaWZpZWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsYXN0VXBkYXRlZFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHBvc2l0aW9uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXJpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXVpZFxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtcbiAgICdkb2N1bWVudC1zdGFydCcgfCAnZG9jdW1lbnQtYm9keScgfCAnZG9jdW1lbnQtZW5kJyB8ICdkb2N1bWVudC1pZGxlJ1xuIH0gVk1TY3JpcHRSdW5BdFxuICovXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRFdmVudEVtaXR0ZXIoKSB7XG4gIGNvbnN0IGV2ZW50cyA9IHt9O1xuICByZXR1cm4geyBvbiwgb2ZmLCBmaXJlIH07XG5cbiAgZnVuY3Rpb24gb24odHlwZSwgZnVuYykge1xuICAgIGxldCBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgIGlmICghbGlzdCkge1xuICAgICAgbGlzdCA9IFtdO1xuICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdDtcbiAgICB9XG4gICAgbGlzdC5wdXNoKGZ1bmMpO1xuICB9XG4gIGZ1bmN0aW9uIG9mZih0eXBlLCBmdW5jKSB7XG4gICAgY29uc3QgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICBpZiAobGlzdCkge1xuICAgICAgY29uc3QgaSA9IGxpc3QuaW5kZXhPZihmdW5jKTtcbiAgICAgIGlmIChpID49IDApIGxpc3Quc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBmaXJlKHR5cGUsIGRhdGEpIHtcbiAgICBjb25zdCBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgIGlmIChsaXN0KSB7XG4gICAgICBsaXN0LmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgICAgZnVuYyhkYXRhLCB0eXBlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgcG9zdEluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5wb3N0SW5pdGlhbGl6ZS5wdXNoKCgpID0+IHtcbiAgYnJvd3Nlci5jb21tYW5kcy5vbkNvbW1hbmQuYWRkTGlzdGVuZXIoKGNtZCkgPT4ge1xuICAgIGlmIChjbWQgPT09ICduZXdTY3JpcHQnKSB7XG4gICAgICBjb21tYW5kcy5PcGVuRWRpdG9yKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJvdXRlID0gY21kID09PSAnc2V0dGluZ3MnID8gYCMke2NtZH1gIDogJyc7XG4gICAgICBjb21tYW5kcy5UYWJPcGVuKHsgdXJsOiBgL29wdGlvbnMvaW5kZXguaHRtbCR7cm91dGV9YCB9KTtcbiAgICB9XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBpMThuLCBub29wIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgSU5KRUNUQUJMRV9UQUJfVVJMX1JFIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcbmltcG9ydCB7IG9iamVjdFBpY2sgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuaW1wb3J0IHsgcG9zdEluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMsIGZvckVhY2hUYWIgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uLCBob29rT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyB0ZXN0QmxhY2tsaXN0IH0gZnJvbSAnLi90ZXN0ZXInO1xuXG4vLyBzdG9yaW5nIGluIGBjYWNoZWAgb25seSBmb3IgdGhlIGR1cmF0aW9uIG9mIHBhZ2UgbG9hZCBpbiBjYXNlIHRoZXJlIGFyZSAyKyBpZGVudGljYWwgdXJsc1xuY29uc3QgQ0FDSEVfRFVSQVRJT04gPSAxMDAwO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIGFzeW5jIEdldEltYWdlRGF0YSh1cmwpIHtcbiAgICBjb25zdCBrZXkgPSBgR2V0SW1hZ2VEYXRhOiR7dXJsfWA7XG4gICAgcmV0dXJuIGNhY2hlLmdldChrZXkpXG4gICAgICB8fCBjYWNoZS5wdXQoa2V5LCBsb2FkSW1hZ2VEYXRhKHVybCwgeyBiYXNlNjQ6IHRydWUgfSkuY2F0Y2gobm9vcCksIENBQ0hFX0RVUkFUSU9OKTtcbiAgfSxcbiAgU2V0QmFkZ2U6IHNldEJhZGdlLFxufSk7XG5cbi8vIEZpcmVmb3ggQW5kcm9pZCBkb2VzIG5vdCBzdXBwb3J0IHN1Y2ggQVBJcywgdXNlIG5vb3BcblxuY29uc3QgYnJvd3NlckFjdGlvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IHsgY2hyb21lIH0gPSBnbG9iYWw7XG4gIC8vIFVzaW5nIGBjaHJvbWVgIG5hbWVzcGFjZSBpbiBvcmRlciB0byBza2lwIG91ciBicm93c2VyLmpzIHBvbHlmaWxsIGluIENocm9tZVxuICBjb25zdCBhcGkgPSBjaHJvbWUuYnJvd3NlckFjdGlvbjtcbiAgLy8gU3VwcHJlc3MgdGhlIFwibm8gdGFiIGlkXCIgZXJyb3Igd2hlbiBzZXR0aW5nIGFuIGljb24vYmFkZ2UgYXMgaXQgY2Fubm90IGJlIHJlbGlhYmx5IHByZXZlbnRlZFxuICBjb25zdCBpZ25vcmVFcnJvcnMgPSAoKSA9PiBjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XG4gIC8vIFNvbWUgbWV0aG9kcyBsaWtlIHNldEJhZGdlVGV4dCBhZGRlZCBjYWxsYmFja3Mgb25seSBpbiBDaHJvbWUgNjcrLlxuICBjb25zdCBtYWtlTWV0aG9kID0gZm4gPT4gKC4uLmFyZ3MpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXBpOjpmbiguLi5hcmdzLCBpZ25vcmVFcnJvcnMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGFwaTo6Zm4oLi4uYXJncyk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gb2JqZWN0UGljayhhcGksIFtcbiAgICAnc2V0SWNvbicsXG4gICAgJ3NldEJhZGdlVGV4dCcsXG4gICAgJ3NldEJhZGdlQmFja2dyb3VuZENvbG9yJyxcbiAgICAnc2V0VGl0bGUnLFxuICBdLCBmbiA9PiAoZm4gPyBtYWtlTWV0aG9kKGZuKSA6IG5vb3ApKTtcbn0pKCk7XG5cbmNvbnN0IGJhZGdlcyA9IHt9O1xuY29uc3QgS0VZX0lTX0FQUExJRUQgPSAnaXNBcHBsaWVkJztcbmNvbnN0IEtFWV9TSE9XX0JBREdFID0gJ3Nob3dCYWRnZSc7XG5jb25zdCBLRVlfQkFER0VfQ09MT1IgPSAnYmFkZ2VDb2xvcic7XG5jb25zdCBLRVlfQkFER0VfQ09MT1JfQkxPQ0tFRCA9ICdiYWRnZUNvbG9yQmxvY2tlZCc7XG4vKiogQHR5cGUgYm9vbGVhbiAqL1xubGV0IGlzQXBwbGllZDtcbi8qKiBAdHlwZSBWTUJhZGdlTW9kZSAqL1xubGV0IHNob3dCYWRnZTtcbi8qKiBAdHlwZSBzdHJpbmcgKi9cbmxldCBiYWRnZUNvbG9yO1xuLyoqIEB0eXBlIHN0cmluZyAqL1xubGV0IGJhZGdlQ29sb3JCbG9ja2VkO1xuLyoqIEB0eXBlIHN0cmluZyAqL1xubGV0IHRpdGxlQmxhY2tsaXN0ZWQ7XG4vKiogQHR5cGUgc3RyaW5nICovXG5sZXQgdGl0bGVOb25pbmplY3RhYmxlO1xuXG4vLyBXZSdsbCBjYWNoZSB0aGUgaWNvbiBkYXRhIGluIENocm9tZSBhcyBpdCBkb2Vzbid0IGNhY2hlIHRoZSBkYXRhIGFuZCB0YWtlcyB1cCB0byA0MG1zXG4vLyBpbiBvdXIgYmFja2dyb3VuZCBwYWdlIGNvbnRleHQgdG8gc2V0IHRoZSA0IGljb24gc2l6ZXMgZm9yIGVhY2ggbmV3IHRhYiBvcGVuZWRcbmNvbnN0IGljb25DYWNoZSA9ICFJU19GSVJFRk9YICYmIHt9O1xuXG5ob29rT3B0aW9ucygoY2hhbmdlcykgPT4ge1xuICBsZXQgdjtcbiAgY29uc3Qgam9icyA9IFtdO1xuICBpZiAoKHYgPSBjaGFuZ2VzW0tFWV9JU19BUFBMSUVEXSkgIT0gbnVsbCkge1xuICAgIGlzQXBwbGllZCA9IHY7XG4gICAgc2V0SWNvbigpOyAvLyBjaGFuZ2UgdGhlIGRlZmF1bHQgaWNvblxuICAgIGpvYnMucHVzaChzZXRJY29uKTsgLy8gY2hhbmdlIHRoZSBjdXJyZW50IHRhYnMnIGljb25zXG4gIH1cbiAgaWYgKCh2ID0gY2hhbmdlc1tLRVlfU0hPV19CQURHRV0pICE9IG51bGwpIHtcbiAgICBzaG93QmFkZ2UgPSB2O1xuICAgIGpvYnMucHVzaCh1cGRhdGVCYWRnZSk7XG4gIH1cbiAgaWYgKCh2ID0gY2hhbmdlc1tLRVlfQkFER0VfQ09MT1JdKSAmJiAoYmFkZ2VDb2xvciA9IHYpXG4gIHx8ICh2ID0gY2hhbmdlc1tLRVlfQkFER0VfQ09MT1JfQkxPQ0tFRF0pICYmIChiYWRnZUNvbG9yQmxvY2tlZCA9IHYpKSB7XG4gICAgam9icy5wdXNoKHVwZGF0ZUJhZGdlQ29sb3IpO1xuICB9XG4gIGlmICgnYmxhY2tsaXN0JyBpbiBjaGFuZ2VzKSB7XG4gICAgam9icy5wdXNoKHVwZGF0ZVN0YXRlKTtcbiAgfVxuICBpZiAoam9icy5sZW5ndGgpIHtcbiAgICBmb3JFYWNoVGFiKHRhYiA9PiBqb2JzLmZvckVhY2goZm4gPT4gZm4odGFiKSkpO1xuICB9XG59KTtcblxucG9zdEluaXRpYWxpemUucHVzaCgoKSA9PiB7XG4gIGlzQXBwbGllZCA9IGdldE9wdGlvbihLRVlfSVNfQVBQTElFRCk7XG4gIHNob3dCYWRnZSA9IGdldE9wdGlvbihLRVlfU0hPV19CQURHRSk7XG4gIGJhZGdlQ29sb3IgPSBnZXRPcHRpb24oS0VZX0JBREdFX0NPTE9SKTtcbiAgYmFkZ2VDb2xvckJsb2NrZWQgPSBnZXRPcHRpb24oS0VZX0JBREdFX0NPTE9SX0JMT0NLRUQpO1xuICB0aXRsZUJsYWNrbGlzdGVkID0gaTE4bignZmFpbHVyZVJlYXNvbkJsYWNrbGlzdGVkJyk7XG4gIHRpdGxlTm9uaW5qZWN0YWJsZSA9IGkxOG4oJ2ZhaWx1cmVSZWFzb25Ob25pbmplY3RhYmxlJyk7XG4gIGZvckVhY2hUYWIodXBkYXRlU3RhdGUpO1xuICBpZiAoIWlzQXBwbGllZCkgc2V0SWNvbigpOyAvLyBzZXRzIHRoZSBkaW1tZWQgaWNvbiBhcyBkZWZhdWx0XG59KTtcblxuYnJvd3Nlci50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigoaWQpID0+IHtcbiAgZGVsZXRlIGJhZGdlc1tpZF07XG59KTtcblxuYnJvd3Nlci50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGluZm8sIHRhYikgPT4ge1xuICBjb25zdCB7IHVybCB9ID0gaW5mbztcbiAgaWYgKGluZm8uc3RhdHVzID09PSAnbG9hZGluZydcbiAgICAgIC8vIGF0IGxlYXN0IGFib3V0Om5ld3RhYiBpbiBGaXJlZm94IG1heSBvcGVuIHdpdGhvdXQgJ2xvYWRpbmcnIHN0YXR1c1xuICAgICAgfHwgaW5mby5mYXZJY29uVXJsICYmIHRhYi51cmwuc3RhcnRzV2l0aCgnYWJvdXQ6JykpIHtcbiAgICB1cGRhdGVTdGF0ZSh0YWIsIHVybCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzZXRCYWRnZShpZHMsIHsgdGFiLCBmcmFtZUlkIH0pIHtcbiAgY29uc3QgdGFiSWQgPSB0YWIuaWQ7XG4gIGNvbnN0IGRhdGEgPSBiYWRnZXNbdGFiSWRdIHx8IHt9O1xuICBpZiAoIWRhdGEuaWRNYXAgfHwgZnJhbWVJZCA9PT0gMCkge1xuICAgIC8vIDEpIGtlZXBpbmcgZGF0YSBvYmplY3QgdG8gcHJlc2VydmUgZGF0YS5ibG9ja2VkXG4gICAgLy8gMikgJ3RvdGFsJyBhbmQgJ3VuaXF1ZScgbXVzdCBtYXRjaCBzaG93QmFkZ2UgaW4gb3B0aW9ucy1kZWZhdWx0cy5qc1xuICAgIGRhdGEudG90YWwgPSAwO1xuICAgIGRhdGEudW5pcXVlID0gMDtcbiAgICBkYXRhLmlkTWFwID0ge307XG4gICAgYmFkZ2VzW3RhYklkXSA9IGRhdGE7XG4gIH1cbiAgZGF0YS50b3RhbCArPSBpZHMubGVuZ3RoO1xuICBpZiAoaWRzKSB7XG4gICAgaWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICBkYXRhLmlkTWFwW2lkXSA9IDE7XG4gICAgfSk7XG4gICAgZGF0YS51bmlxdWUgPSBPYmplY3Qua2V5cyhkYXRhLmlkTWFwKS5sZW5ndGg7XG4gIH1cbiAgdXBkYXRlQmFkZ2VDb2xvcih0YWIsIGRhdGEpO1xuICB1cGRhdGVCYWRnZSh0YWIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVCYWRnZSh0YWIsIGRhdGEgPSBiYWRnZXNbdGFiLmlkXSkge1xuICBpZiAoZGF0YSkge1xuICAgIGJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHtcbiAgICAgIHRleHQ6IGAke2RhdGFbc2hvd0JhZGdlXSB8fCAnJ31gLFxuICAgICAgdGFiSWQ6IHRhYi5pZCxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCYWRnZUNvbG9yKHRhYiwgZGF0YSA9IGJhZGdlc1t0YWIuaWRdKSB7XG4gIGlmIChkYXRhKSB7XG4gICAgYnJvd3NlckFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7XG4gICAgICBjb2xvcjogZGF0YS5ibG9ja2VkID8gYmFkZ2VDb2xvckJsb2NrZWQgOiBiYWRnZUNvbG9yLFxuICAgICAgdGFiSWQ6IHRhYi5pZCxcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBDaHJvbWUgNzkrIHVzZXMgcGVuZGluZ1VybCB3aGlsZSB0aGUgdGFiIGNvbm5lY3RzIHRvIHRoZSBuZXdseSBuYXZpZ2F0ZWQgVVJMXG4vLyBodHRwczovL2dyb3Vwcy5nb29nbGUuY29tL2EvY2hyb21pdW0ub3JnL2ZvcnVtLyMhdG9waWMvY2hyb21pdW0tZXh0ZW5zaW9ucy81enVfUFQwYXJsc1xuZnVuY3Rpb24gdXBkYXRlU3RhdGUodGFiLCB1cmwgPSB0YWIucGVuZGluZ1VybCB8fCB0YWIudXJsKSB7XG4gIGNvbnN0IHRhYklkID0gdGFiLmlkO1xuICBjb25zdCBpbmplY3RhYmxlID0gSU5KRUNUQUJMRV9UQUJfVVJMX1JFLnRlc3QodXJsKTtcbiAgY29uc3QgYmxhY2tsaXN0ZWQgPSBpbmplY3RhYmxlID8gdGVzdEJsYWNrbGlzdCh1cmwpIDogdW5kZWZpbmVkO1xuICBjb25zdCB0aXRsZSA9IGJsYWNrbGlzdGVkICYmIHRpdGxlQmxhY2tsaXN0ZWQgfHwgIWluamVjdGFibGUgJiYgdGl0bGVOb25pbmplY3RhYmxlIHx8ICcnO1xuICAvLyBpZiB0aGUgdXNlciB1bmJsYWNrbGlzdGVkIHRoaXMgcHJldmlvdXNseSBibG9ja2VkIHRhYiBpbiBzZXR0aW5ncyxcbiAgLy8gYnV0IGRpZG4ndCByZWxvYWQgdGhlIHRhYiB5ZXQsIHdlIG5lZWQgdG8gcmVzdG9yZSB0aGUgaWNvbiBhbmQgdGhlIHRpdGxlXG4gIGlmICh0aXRsZSB8fCAoYmFkZ2VzW3RhYklkXSB8fCB7fSkuYmxvY2tlZCkge1xuICAgIGJyb3dzZXJBY3Rpb24uc2V0VGl0bGUoeyB0aXRsZSwgdGFiSWQgfSk7XG4gICAgY29uc3QgZGF0YSA9IHRpdGxlID8geyBibG9ja2VkOiB0cnVlIH0gOiB7fTtcbiAgICBiYWRnZXNbdGFiSWRdID0gZGF0YTtcbiAgICBzZXRJY29uKHRhYiwgZGF0YSk7XG4gICAgdXBkYXRlQmFkZ2UodGFiLCBkYXRhKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRJY29uKHRhYiA9IHt9LCBkYXRhID0ge30pIHtcbiAgLy8gbW9kZXJuIENocm9tZSBhbmQgRmlyZWZveCB1c2UgMTYvMzIsIG90aGVyIGJyb3dzZXJzIG1heSBzdGlsbCB1c2UgMTkvMzggKGUuZy4gVml2YWxkaSlcbiAgY29uc3QgbW9kID0gZGF0YS5ibG9ja2VkICYmICdiJyB8fCAhaXNBcHBsaWVkICYmICd3JyB8fCAnJztcbiAgY29uc3QgaWNvbkRhdGEgPSB7fTtcbiAgZm9yIChjb25zdCBuIG9mIFsxNiwgMTksIDMyLCAzOF0pIHtcbiAgICBjb25zdCBwYXRoID0gYC9wdWJsaWMvaW1hZ2VzL2ljb24ke259JHttb2R9LnBuZ2A7XG4gICAgbGV0IGljb24gPSBpY29uQ2FjaGUgPyBpY29uQ2FjaGVbcGF0aF0gOiBwYXRoO1xuICAgIGlmICghaWNvbikge1xuICAgICAgaWNvbiA9IGF3YWl0IGxvYWRJbWFnZURhdGEocGF0aCk7XG4gICAgICBpY29uQ2FjaGVbcGF0aF0gPSBpY29uO1xuICAgIH1cbiAgICBpY29uRGF0YVtuXSA9IGljb247XG4gIH1cbiAgYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcbiAgICB0YWJJZDogdGFiLmlkLFxuICAgIFtpY29uQ2FjaGUgPyAnaW1hZ2VEYXRhJyA6ICdwYXRoJ106IGljb25EYXRhLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZEltYWdlRGF0YShwYXRoLCB7IGJhc2U2NCB9ID0ge30pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gcGF0aDtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBpbWc7XG4gICAgICBpZiAoIXdpZHRoKSB7IC8vIEZGIHJlcG9ydHMgMCBmb3IgU1ZHXG4gICAgICAgIHJlc29sdmUocGF0aCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICByZXNvbHZlKGJhc2U2NCA/IGNhbnZhcy50b0RhdGFVUkwoKSA6IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCkpO1xuICAgIH07XG4gICAgaW1nLm9uZXJyb3IgPSByZWplY3Q7XG4gIH0pO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYWNoZSB9IGZyb20gJy4vY2FjaGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRFdmVudEVtaXR0ZXIgfSBmcm9tICcuL2V2ZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9vcHRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vc2VhcmNoJztcbiIsImV4cG9ydCBjb25zdCBleHRlbnNpb25Sb290ID0gYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnLycpO1xuXG5leHBvcnQgY29uc3QgcHJlSW5pdGlhbGl6ZSA9IFtdO1xuZXhwb3J0IGNvbnN0IHBvc3RJbml0aWFsaXplID0gW107XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplKG1haW4pIHtcbiAgY29uc3QgcnVuID0gaW5pdCA9PiAodHlwZW9mIGluaXQgPT09ICdmdW5jdGlvbicgPyBpbml0KCkgOiBpbml0KTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwocHJlSW5pdGlhbGl6ZS5tYXAocnVuKSk7XG4gIGF3YWl0IHJ1bihtYWluKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwocG9zdEluaXRpYWxpemUubWFwKHJ1bikpO1xuICBwcmVJbml0aWFsaXplLmxlbmd0aCA9IDA7XG4gIHBvc3RJbml0aWFsaXplLmxlbmd0aCA9IDA7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0SW1hZ2UsIGkxOG4sIG5vb3AgfSBmcm9tICcjL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBjb21tYW5kcyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5KG9wdGlvbnMpIHtcbiAgYnJvd3Nlci5ub3RpZmljYXRpb25zLmNyZWF0ZShvcHRpb25zLmlkIHx8ICdWaW9sZW50TW9ua2V5Jywge1xuICAgIHR5cGU6ICdiYXNpYycsXG4gICAgaWNvblVybDogZGVmYXVsdEltYWdlLFxuICAgIHRpdGxlOiBgJHtvcHRpb25zLnRpdGxlfSAtICR7aTE4bignZXh0TmFtZScpfWAsXG4gICAgbWVzc2FnZTogb3B0aW9ucy5ib2R5LFxuICAgIGlzQ2xpY2thYmxlOiBvcHRpb25zLmlzQ2xpY2thYmxlLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyb2FkY2FzdChkYXRhKSB7XG4gIGZvckVhY2hUYWIoKHRhYikgPT4ge1xuICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIGRhdGEpXG4gICAgLmNhdGNoKG5vb3ApO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlT3JJZ25vcmUoLi4uYXJncykge1xuICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKC4uLmFyZ3MpLmNhdGNoKG5vb3ApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZm9yRWFjaFRhYihjYWxsYmFjaykge1xuICBjb25zdCB0YWJzID0gYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHt9KTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XG4gICAgY2FsbGJhY2sodGFiKTtcbiAgICBpICs9IDE7XG4gICAgLy8gd2UnbGwgcnVuIGF0IG1vc3QgdGhpcyBtYW55IHRhYnMgaW4gb25lIGV2ZW50IGxvb3AgY3ljbGVcbiAgICAvLyBiZWNhdXNlIGh1bmRyZWRzIG9mIHRhYnMgd291bGQgbWFrZSBvdXIgZXh0ZW5zaW9uIHByb2Nlc3MgdW5yZXNwb25zaXZlLFxuICAgIC8vIHRoZSBzYW1lIHByb2Nlc3MgdXNlZCBieSBvdXIgb3duIHBhZ2VzIGxpa2UgdGhlIGJhY2tncm91bmQgcGFnZSwgZGFzaGJvYXJkLCBvciBwb3B1cHNcbiAgICBpZiAoaSAlIDIwID09PSAwKSBhd2FpdCBuZXcgUHJvbWlzZShzZXRUaW1lb3V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaTE4biwgZGVmYXVsdEltYWdlLCBzZW5kVGFiQ21kIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5jb25zdCBvcGVuZXJzID0ge307XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gKi9cbiAgYXN5bmMgTm90aWZpY2F0aW9uKGRhdGEsIHNyYywgYmdFeHRyYXMpIHtcbiAgICBjb25zdCBub3RpZmljYXRpb25JZCA9IGF3YWl0IGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoe1xuICAgICAgdHlwZTogJ2Jhc2ljJyxcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlIHx8IChJU19GSVJFRk9YID8gaTE4bignZXh0TmFtZScpIDogJycpLCAvLyBDaHJvbWUgYWxyZWFkeSBzaG93cyB0aGUgbmFtZVxuICAgICAgbWVzc2FnZTogZGF0YS50ZXh0LFxuICAgICAgaWNvblVybDogZGF0YS5pbWFnZSB8fCBkZWZhdWx0SW1hZ2UsXG4gICAgfSk7XG4gICAgb3BlbmVyc1tub3RpZmljYXRpb25JZF0gPSBiZ0V4dHJhcz8ub25DbGljayB8fCBzcmMudGFiLmlkO1xuICAgIHJldHVybiBub3RpZmljYXRpb25JZDtcbiAgfSxcbiAgUmVtb3ZlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbklkKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jbGVhcihub3RpZmljYXRpb25JZCk7XG4gIH0sXG59KTtcblxuYnJvd3Nlci5ub3RpZmljYXRpb25zLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcigoaWQpID0+IHtcbiAgY29uc3Qgb3BlbmVySWQgPSBvcGVuZXJzW2lkXTtcbiAgaWYgKG9wZW5lcklkID49IDApIHtcbiAgICBzZW5kVGFiQ21kKG9wZW5lcklkLCAnTm90aWZpY2F0aW9uQ2xpY2snLCBpZCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBvcGVuZXJJZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wZW5lcklkKCk7XG4gIH1cbn0pO1xuXG5icm93c2VyLm5vdGlmaWNhdGlvbnMub25DbG9zZWQuYWRkTGlzdGVuZXIoKGlkKSA9PiB7XG4gIGNvbnN0IG9wZW5lcklkID0gb3BlbmVyc1tpZF07XG4gIGRlbGV0ZSBvcGVuZXJzW2lkXTtcbiAgaWYgKG9wZW5lcklkID49IDApIHtcbiAgICBzZW5kVGFiQ21kKG9wZW5lcklkLCAnTm90aWZpY2F0aW9uQ2xvc2UnLCBpZCk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IHtcbiAgZGVib3VuY2UsIGVuc3VyZUFycmF5LCBpbml0SG9va3MsIG5vcm1hbGl6ZUtleXMsXG59IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IG1hcEVudHJ5LCBvYmplY3RHZXQsIG9iamVjdFNldCB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnIy9jb21tb24vb3B0aW9ucy1kZWZhdWx0cyc7XG5pbXBvcnQgeyBwcmVJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICAvKiogQHJldHVybiB7T2JqZWN0fSAqL1xuICBHZXRBbGxPcHRpb25zKCkge1xuICAgIHJldHVybiBjb21tYW5kcy5HZXRPcHRpb25zKGRlZmF1bHRzKTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge09iamVjdH0gKi9cbiAgR2V0T3B0aW9ucyhkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE6Om1hcEVudHJ5KChba2V5XSkgPT4gZ2V0T3B0aW9uKGtleSkpO1xuICB9LFxuICAvKiogQHJldHVybiB7dm9pZH0gKi9cbiAgU2V0T3B0aW9ucyhkYXRhKSB7XG4gICAgZW5zdXJlQXJyYXkoZGF0YSkuZm9yRWFjaChpdGVtID0+IHNldE9wdGlvbihpdGVtLmtleSwgaXRlbS52YWx1ZSkpO1xuICB9LFxufSk7XG5cbmxldCBjaGFuZ2VzID0ge307XG5jb25zdCBob29rcyA9IGluaXRIb29rcygpO1xuY29uc3QgY2FsbEhvb2tzTGF0ZXIgPSBkZWJvdW5jZShjYWxsSG9va3MsIDEwMCk7XG5cbmxldCBvcHRpb25zID0ge307XG5sZXQgaW5pdFBlbmRpbmcgPSBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCdvcHRpb25zJylcbi50aGVuKCh7IG9wdGlvbnM6IGRhdGEgfSkgPT4ge1xuICBpZiAoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIG9wdGlvbnMgPSBkYXRhO1xuICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICBjb25zb2xlLmxvZygnb3B0aW9uczonLCBvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH1cbiAgaWYgKCFvYmplY3RHZXQob3B0aW9ucywgJ3ZlcnNpb24nKSkge1xuICAgIHNldE9wdGlvbigndmVyc2lvbicsIDEpO1xuICB9XG4gIGluaXRQZW5kaW5nID0gbnVsbDtcbn0pO1xucHJlSW5pdGlhbGl6ZS5wdXNoKGluaXRQZW5kaW5nKTtcblxuZnVuY3Rpb24gZmlyZUNoYW5nZShrZXlzLCB2YWx1ZSkge1xuICAvLyBGbGF0dGVuaW5nIGtleSBwYXRoIHNvIHRoZSBzdWJzY3JpYmVycyBjYW4gdXBkYXRlIG5lc3RlZCB2YWx1ZXMgd2l0aG91dCBvdmVyd3JpdGluZyB0aGUgcGFyZW50XG4gIGNvbnN0IGtleSA9IGtleXMuam9pbignLicpO1xuICAvLyBFbnN1cmluZyB0aGUgY29ycmVjdCBvcmRlciB3aGVuIHVwZGF0ZXMgd2VyZSBtaXhlZCBsaWtlIHRoaXM6IGZvby5iYXI9MTsgZm9vPXtiYXI6Mn07IGZvby5iYXI9M1xuICBkZWxldGUgY2hhbmdlc1trZXldO1xuICBjaGFuZ2VzW2tleV0gPSB2YWx1ZTtcbiAgY2FsbEhvb2tzTGF0ZXIoKTtcbn1cblxuZnVuY3Rpb24gY2FsbEhvb2tzKCkge1xuICBob29rcy5maXJlKGNoYW5nZXMpO1xuICBjaGFuZ2VzID0ge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcHRpb24oa2V5LCBkZWYpIHtcbiAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5KTtcbiAgY29uc3QgbWFpbktleSA9IGtleXNbMF07XG4gIGxldCB2YWx1ZSA9IG9wdGlvbnNbbWFpbktleV07XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB2YWx1ZSA9IGRlZmF1bHRzW21haW5LZXldO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgdmFsdWUgPSBkZWY7XG4gIHJldHVybiBrZXlzLmxlbmd0aCA+IDEgPyBvYmplY3RHZXQodmFsdWUsIGtleXMuc2xpY2UoMSksIGRlZikgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb24oa2V5KSB7XG4gIHJldHVybiBvYmplY3RHZXQoZGVmYXVsdHMsIGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPcHRpb24oa2V5LCB2YWx1ZSkge1xuICBpZiAoaW5pdFBlbmRpbmcpIHtcbiAgICBpbml0UGVuZGluZy50aGVuKCgpID0+IHtcbiAgICAgIHNldE9wdGlvbihrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5KTtcbiAgY29uc3Qgb3B0aW9uS2V5ID0ga2V5cy5qb2luKCcuJyk7XG4gIGxldCBvcHRpb25WYWx1ZSA9IHZhbHVlO1xuICBjb25zdCBtYWluS2V5ID0ga2V5c1swXTtcbiAgaWYgKG1haW5LZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICBvcHRpb25WYWx1ZSA9IG9iamVjdFNldChnZXRPcHRpb24obWFpbktleSksIGtleXMuc2xpY2UoMSksIHZhbHVlKTtcbiAgICB9XG4gICAgb3B0aW9uc1ttYWluS2V5XSA9IG9wdGlvblZhbHVlO1xuICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBvcHRpb25zIH0pO1xuICAgIGZpcmVDaGFuZ2Uoa2V5cywgdmFsdWUpO1xuICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgY29uc29sZS5sb2coJ09wdGlvbnMgdXBkYXRlZDonLCBvcHRpb25LZXksIHZhbHVlLCBvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBob29rT3B0aW9ucyA9IGhvb2tzLmhvb2s7XG4iLCJpbXBvcnQgeyBwYXJzZU1ldGEgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcjL2NvbW1vbi9zdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBjb25zb2xlLmluZm8oJ1VwZ3JhZGUgZGF0YWJhc2UuLi4nKTtcbiAgaW5pdCgpO1xuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IHJlcSA9IGluZGV4ZWREQi5vcGVuKCdWaW9sZW50bW9ua2V5JywgMSk7XG4gICAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRyYW5zZm9ybShyZXEucmVzdWx0KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgZGlkIGhhcHBlbiBpbiBGaXJlZm94LlxuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJlcS5vbmVycm9yID0gcmVqZWN0O1xuICAgIHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG4gICAgICAvLyBObyBhdmFpbGFibGUgdXBncmFkYXRpb25cbiAgICAgIHJlamVjdCgpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtKGRiKSB7XG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihbJ3NjcmlwdHMnLCAncmVxdWlyZScsICdjYWNoZScsICd2YWx1ZXMnXSk7XG4gICAgY29uc3QgdXBkYXRlcyA9IHt9O1xuICAgIGxldCBwcm9jZXNzaW5nID0gMztcbiAgICBjb25zdCBkb25lID0gKCkgPT4ge1xuICAgICAgcHJvY2Vzc2luZyAtPSAxO1xuICAgICAgaWYgKCFwcm9jZXNzaW5nKSByZXNvbHZlKGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQodXBkYXRlcykpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0QWxsID0gKHN0b3JlTmFtZSwgY2FsbGJhY2spID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IHR4Lm9iamVjdFN0b3JlKHN0b3JlTmFtZSkuZ2V0QWxsKCk7XG4gICAgICByZXEub25zdWNjZXNzID0gKCkgPT4gY2FsbGJhY2socmVxLnJlc3VsdCk7XG4gICAgICByZXEub25lcnJvciA9IHJlamVjdDtcbiAgICB9O1xuICAgIGdldEFsbCgnc2NyaXB0cycsIChhbGxTY3JpcHRzKSA9PiB7XG4gICAgICBjb25zdCB1cmlNYXAgPSB7fTtcbiAgICAgIGFsbFNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29kZSwgaWQsIHVyaSB9ID0gc2NyaXB0O1xuICAgICAgICB1cGRhdGVzW2Ake3N0b3JhZ2Uuc2NyaXB0LnByZWZpeH0ke2lkfWBdID0gdHJhbnNmb3JtU2NyaXB0KHNjcmlwdCk7XG4gICAgICAgIHVwZGF0ZXNbYCR7c3RvcmFnZS5jb2RlLnByZWZpeH0ke2lkfWBdID0gY29kZTtcbiAgICAgICAgdXJpTWFwW3VyaV0gPSBpZDtcbiAgICAgIH0pO1xuICAgICAgZ2V0QWxsKCd2YWx1ZXMnLCAoYWxsVmFsdWVzKSA9PiB7XG4gICAgICAgIGFsbFZhbHVlcy5mb3JFYWNoKCh7IHVyaSwgdmFsdWVzIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpZCA9IHVyaU1hcFt1cmldO1xuICAgICAgICAgIGlmIChpZCkgdXBkYXRlc1tgJHtzdG9yYWdlLnZhbHVlLnByZWZpeH0ke2lkfWBdID0gdmFsdWVzO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZ2V0QWxsKCdjYWNoZScsIChhbGxDYWNoZSkgPT4ge1xuICAgICAgYWxsQ2FjaGUuZm9yRWFjaCgoeyB1cmksIGRhdGEgfSkgPT4ge1xuICAgICAgICB1cGRhdGVzW2Ake3N0b3JhZ2UuY2FjaGUucHJlZml4fSR7dXJpfWBdID0gZGF0YTtcbiAgICAgIH0pO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIGdldEFsbCgncmVxdWlyZScsIChhbGxSZXF1aXJlKSA9PiB7XG4gICAgICBhbGxSZXF1aXJlLmZvckVhY2goKHsgdXJpLCBjb2RlIH0pID0+IHtcbiAgICAgICAgdXBkYXRlc1tgJHtzdG9yYWdlLnJlcXVpcmUucHJlZml4fSR7dXJpfWBdID0gY29kZTtcbiAgICAgIH0pO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybVNjcmlwdChzY3JpcHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWV0YTogcGFyc2VNZXRhKHNjcmlwdC5jb2RlKSxcbiAgICAgIGN1c3RvbTogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG9yaWdJbmNsdWRlOiB0cnVlLFxuICAgICAgICBvcmlnRXhjbHVkZTogdHJ1ZSxcbiAgICAgICAgb3JpZ01hdGNoOiB0cnVlLFxuICAgICAgICBvcmlnRXhjbHVkZU1hdGNoOiB0cnVlLFxuICAgICAgfSwgc2NyaXB0LmN1c3RvbSksXG4gICAgICBwcm9wczoge1xuICAgICAgICBpZDogc2NyaXB0LmlkLFxuICAgICAgICB1cmk6IHNjcmlwdC51cmksXG4gICAgICAgIHBvc2l0aW9uOiBzY3JpcHQucG9zaXRpb24sXG4gICAgICB9LFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGVuYWJsZWQ6IHNjcmlwdC5lbmFibGVkLFxuICAgICAgICBzaG91bGRVcGRhdGU6IHNjcmlwdC51cGRhdGUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn0pXG4vLyBJZ25vcmUgZXJyb3Jcbi5jYXRjaCgoKSA9PiB7fSk7XG4iLCJpbXBvcnQgeyBnZXRBY3RpdmVUYWIsIHNlbmRUYWJDbWQgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZSc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgeyBwb3N0SW5pdGlhbGl6ZSB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbmV4cG9ydCBjb25zdCBwb3B1cFRhYnMgPSB7fTsgLy8geyB0YWJJZDogMSB9XG5cbnBvc3RJbml0aWFsaXplLnB1c2goKCkgPT4ge1xuICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKG9uUG9wdXBPcGVuZWQpO1xuICBicm93c2VyLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKHByZWZldGNoU2V0UG9wdXAsIHtcbiAgICB1cmxzOiBbYnJvd3Nlci5ydW50aW1lLmdldFVSTChicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5icm93c2VyX2FjdGlvbi5kZWZhdWx0X3BvcHVwKV0sXG4gICAgdHlwZXM6IFsnbWFpbl9mcmFtZSddLFxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBvblBvcHVwT3BlbmVkKHBvcnQpIHtcbiAgY29uc3QgdGFiSWQgPSArcG9ydC5uYW1lO1xuICBwb3B1cFRhYnNbdGFiSWRdID0gMTtcbiAgc2VuZFRhYkNtZCh0YWJJZCwgJ1BvcHVwU2hvd24nLCB0cnVlKTtcbiAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIob25Qb3B1cENsb3NlZCk7XG4gIGRlbGV0ZSBjb21tYW5kcy5TZXRQb3B1cDtcbn1cblxuZnVuY3Rpb24gb25Qb3B1cENsb3NlZCh7IG5hbWUgfSkge1xuICBkZWxldGUgcG9wdXBUYWJzW25hbWVdO1xuICBzZW5kVGFiQ21kKCtuYW1lLCAnUG9wdXBTaG93bicsIGZhbHNlKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJlZmV0Y2hTZXRQb3B1cCgpIHtcbiAgY29uc3QgdGFiSWQgPSAoYXdhaXQgZ2V0QWN0aXZlVGFiKCkpLmlkO1xuICBzZW5kVGFiQ21kKHRhYklkLCAnUG9wdXBTaG93bicsIHRydWUpO1xuICBjb21tYW5kcy5TZXRQb3B1cCA9IGFzeW5jIChkYXRhLCBzcmMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKGRhdGEsIGF3YWl0IGdldERhdGEoZGF0YS5pZHMpKTtcbiAgICBjYWNoZS5wdXQoJ1NldFBvcHVwJywgT2JqZWN0LmFzc2lnbih7IFtzcmMuZnJhbWVJZF06IFtkYXRhLCBzcmNdIH0sIGNhY2hlLmdldCgnU2V0UG9wdXAnKSkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZ2V0U2NyaXB0TmFtZSwgZ2V0VW5pcUlkIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHtcbiAgSU5KRUNUX0FVVE8sIElOSkVDVF9DT05URU5ULCBJTkpFQ1RfTUFQUElORyxcbiAgSU5KRUNUQUJMRV9UQUJfVVJMX1JFLCBNRVRBQkxPQ0tfUkUsXG59IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQgaW5pdENhY2hlIGZyb20gJyMvY29tbW9uL2NhY2hlJztcbmltcG9ydCB7IGZvckVhY2hFbnRyeSwgb2JqZWN0UGljaywgb2JqZWN0U2V0IH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCBzdG9yYWdlIGZyb20gJyMvY29tbW9uL3N0b3JhZ2UnO1xuaW1wb3J0IHVhIGZyb20gJyMvY29tbW9uL3VhJztcbmltcG9ydCB7IGdldFNjcmlwdHNCeVVSTCwgRU5WX0NBQ0hFX0tFWVMsIEVOVl9SRVFfS0VZUywgRU5WX1ZBTFVFX0lEUyB9IGZyb20gJy4vZGInO1xuaW1wb3J0IHsgZXh0ZW5zaW9uUm9vdCwgcG9zdEluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uLCBob29rT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbmNvbnN0IEFQSV9DT05GSUcgPSB7XG4gIHVybHM6IFsnKjovLyovKiddLCAvLyBgKmAgc2NoZW1lIG1hdGNoZXMgb25seSBodHRwIGFuZCBodHRwc1xuICB0eXBlczogWydtYWluX2ZyYW1lJywgJ3N1Yl9mcmFtZSddLFxufTtcbmNvbnN0IFRJTUVfQUZURVJfU0VORCA9IDEwZTM7IC8vIGxvbmdlciBhcyBlc3RhYmxpc2hpbmcgY29ubmVjdGlvbiB0byBzaXRlcyBtYXkgdGFrZSB0aW1lXG5jb25zdCBUSU1FX0FGVEVSX1JFQ0VJVkUgPSAxZTM7IC8vIHNob3J0ZXIgYXMgcmVzcG9uc2UgYm9keSB3aWxsIGJlIGNvbWluZyB2ZXJ5IHNvb25cbmNvbnN0IFRJTUVfS0VFUF9EQVRBID0gNjBlMzsgLy8gMTAwbXMgc2hvdWxkIGJlIGVub3VnaCBidXQgdGhlIHRhYiBtYXkgaGFuZyBvciBnZXQgcGF1c2VkIGluIGRlYnVnZ2VyXG5jb25zdCBjYWNoZUNvZGUgPSBpbml0Q2FjaGUoeyBsaWZldGltZTogVElNRV9LRUVQX0RBVEEgfSk7XG5jb25zdCBjYWNoZSA9IGluaXRDYWNoZSh7XG4gIGxpZmV0aW1lOiBUSU1FX0tFRVBfREFUQSxcbiAgb25EaXNwb3NlOiBhc3luYyBwcm9taXNlID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJvbWlzZTtcbiAgICBjb25zdCByY3MgPSBhd2FpdCBkYXRhPy5yY3NQcm9taXNlO1xuICAgIHJjcz8udW5yZWdpc3RlcigpO1xuICB9LFxufSk7XG5jb25zdCBJTkpFQ1RfSU5UTyA9ICdpbmplY3RJbnRvJztcbi8vIEtFWV9YWFggZm9yIGhvb2tlZCBvcHRpb25zXG5jb25zdCBLRVlfRVhQT1NFID0gJ2V4cG9zZSc7XG5jb25zdCBLRVlfREVGX0lOSkVDVF9JTlRPID0gJ2RlZmF1bHRJbmplY3RJbnRvJztcbmNvbnN0IEtFWV9JU19BUFBMSUVEID0gJ2lzQXBwbGllZCc7XG5jb25zdCBLRVlfWEhSX0lOSkVDVCA9ICd4aHJJbmplY3QnO1xuY29uc3QgZXhwb3NlID0ge307XG5sZXQgaXNBcHBsaWVkO1xubGV0IGluamVjdEludG87XG5sZXQgeGhySW5qZWN0O1xuaG9va09wdGlvbnMob25PcHRpb25DaGFuZ2VkKTtcbnBvc3RJbml0aWFsaXplLnB1c2goKCkgPT4ge1xuICBmb3IgKGNvbnN0IGtleSBvZiBbS0VZX0VYUE9TRSwgS0VZX0RFRl9JTkpFQ1RfSU5UTywgS0VZX0lTX0FQUExJRUQsIEtFWV9YSFJfSU5KRUNUXSkge1xuICAgIG9uT3B0aW9uQ2hhbmdlZCh7IFtrZXldOiBnZXRPcHRpb24oa2V5KSB9KTtcbiAgfVxufSk7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgYXN5bmMgSW5qZWN0aW9uRmVlZGJhY2soeyBmZWVkSWQsIGZlZWRiYWNrLCBmb3JjZUNvbnRlbnQgfSwgc3JjKSB7XG4gICAgZmVlZGJhY2suZm9yRWFjaChwcm9jZXNzRmVlZGJhY2ssIHNyYyk7XG4gICAgaWYgKGZlZWRJZCkge1xuICAgICAgLy8gY2FjaGUgY2xlYW51cCB3aGVuIGdldERhdGFGRiBvdXRydW5zIEdldEluamVjdGVkXG4gICAgICBjYWNoZS5kZWwoZmVlZElkLmNhY2hlS2V5KTtcbiAgICAgIC8vIGVudkRlbGF5ZWRcbiAgICAgIGNvbnN0IGVudiA9IGF3YWl0IGNhY2hlLnBvcChmZWVkSWQuZW52S2V5KTtcbiAgICAgIGlmIChlbnYpIHtcbiAgICAgICAgZW52LmZvcmNlQ29udGVudCA9IGZvcmNlQ29udGVudDtcbiAgICAgICAgZW52LnNjcmlwdHMubWFwKHByZXBhcmVTY3JpcHQsIGVudikuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2gocHJvY2Vzc0ZlZWRiYWNrLCBzcmMpO1xuICAgICAgICByZXR1cm4gb2JqZWN0UGljayhlbnYsIFsnY2FjaGUnLCAnc2NyaXB0cyddKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59KTtcblxuLyoqIEB0aGlzIHtjaHJvbWUucnVudGltZS5NZXNzYWdlU2VuZGVyfSAqL1xuZnVuY3Rpb24gcHJvY2Vzc0ZlZWRiYWNrKFtrZXksIG5lZWRzSW5qZWN0aW9uXSkge1xuICBjb25zdCBjb2RlID0gY2FjaGVDb2RlLnBvcChrZXkpO1xuICAvLyBzZWUgVElNRV9LRUVQX0RBVEEgY29tbWVudFxuICBpZiAobmVlZHNJbmplY3Rpb24gJiYgY29kZSkge1xuICAgIGJyb3dzZXIudGFicy5leGVjdXRlU2NyaXB0KHRoaXMudGFiLmlkLCB7XG4gICAgICBjb2RlLFxuICAgICAgZnJhbWVJZDogdGhpcy5mcmFtZUlkLFxuICAgICAgcnVuQXQ6ICdkb2N1bWVudF9zdGFydCcsXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgcHJvcHNUb0NsZWFyID0ge1xuICBbc3RvcmFnZS5jYWNoZS5wcmVmaXhdOiBFTlZfQ0FDSEVfS0VZUyxcbiAgW3N0b3JhZ2UuY29kZS5wcmVmaXhdOiB0cnVlLFxuICBbc3RvcmFnZS5yZXF1aXJlLnByZWZpeF06IEVOVl9SRVFfS0VZUyxcbiAgW3N0b3JhZ2Uuc2NyaXB0LnByZWZpeF06IHRydWUsXG4gIFtzdG9yYWdlLnZhbHVlLnByZWZpeF06IEVOVl9WQUxVRV9JRFMsXG59O1xuXG5icm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKGFzeW5jIGNoYW5nZXMgPT4ge1xuICBjb25zdCBkYktleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKTtcbiAgY29uc3QgY2FjaGVWYWx1ZXMgPSBhd2FpdCBQcm9taXNlLmFsbChjYWNoZS5nZXRWYWx1ZXMoKSk7XG4gIGNvbnN0IGRpcnR5ID0gY2FjaGVWYWx1ZXMuc29tZShkYXRhID0+IGRhdGEuaW5qZWN0XG4gICAgJiYgZGJLZXlzLnNvbWUoKGtleSkgPT4ge1xuICAgICAgY29uc3QgcHJlZml4ID0ga2V5LnNsaWNlKDAsIGtleS5pbmRleE9mKCc6JykgKyAxKTtcbiAgICAgIGNvbnN0IHByb3AgPSBwcm9wc1RvQ2xlYXJbcHJlZml4XTtcbiAgICAgIGtleSA9IGtleS5zbGljZShwcmVmaXgubGVuZ3RoKTtcbiAgICAgIHJldHVybiBwcm9wID09PSB0cnVlXG4gICAgICAgIHx8IGRhdGFbcHJvcF0/LmluY2x1ZGVzKHByZWZpeCA9PT0gc3RvcmFnZS52YWx1ZS5wcmVmaXggPyAra2V5IDoga2V5KTtcbiAgICB9KSk7XG4gIGlmIChkaXJ0eSkge1xuICAgIGNhY2hlLmRlc3Ryb3koKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVJlYWxtKHZhbHVlKSB7XG4gIHJldHVybiBJTkpFQ1RfTUFQUElORzo6aGFzT3duUHJvcGVydHkodmFsdWUpXG4gICAgPyB2YWx1ZVxuICAgIDogaW5qZWN0SW50byB8fCBJTkpFQ1RfQVVUTztcbn1cblxuZnVuY3Rpb24gb25PcHRpb25DaGFuZ2VkKGNoYW5nZXMpIHtcbiAgY2hhbmdlczo6Zm9yRWFjaEVudHJ5KChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgS0VZX0RFRl9JTkpFQ1RfSU5UTzpcbiAgICAgIGluamVjdEludG8gPSBub3JtYWxpemVSZWFsbSh2YWx1ZSk7XG4gICAgICBjYWNoZS5kZXN0cm95KCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEtFWV9YSFJfSU5KRUNUOlxuICAgICAgdG9nZ2xlWGhySW5qZWN0KHZhbHVlKTtcbiAgICAgIGNhY2hlLmRlc3Ryb3koKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgS0VZX0lTX0FQUExJRUQ6XG4gICAgICB0b2dnbGVQcmVpbmplY3QodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBLRVlfRVhQT1NFOlxuICAgICAgdmFsdWU6OmZvckVhY2hFbnRyeSgoW3NpdGUsIGlzRXhwb3NlZF0pID0+IHtcbiAgICAgICAgZXhwb3NlW2RlY29kZVVSSUNvbXBvbmVudChzaXRlKV0gPSBpc0V4cG9zZWQ7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoa2V5LmluY2x1ZGVzKCcuJykpIHsgLy8gdXNlZCBieSBgZXhwb3NlLnVybGBcbiAgICAgICAgb25PcHRpb25DaGFuZ2VkKG9iamVjdFNldCh7fSwga2V5LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5qZWN0ZWRTY3JpcHRzKHVybCwgdGFiSWQsIGZyYW1lSWQsIGZvcmNlQ29udGVudCkge1xuICBjb25zdCBrZXkgPSBnZXRLZXkodXJsLCAhZnJhbWVJZCk7XG4gIHJldHVybiBjYWNoZS5wb3Aoa2V5KSB8fCBwcmVwYXJlKGtleSwgdXJsLCB0YWJJZCwgZnJhbWVJZCwgZm9yY2VDb250ZW50KTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5KHVybCwgaXNUb3ApIHtcbiAgcmV0dXJuIGlzVG9wID8gdXJsIDogYC0ke3VybH1gO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVQcmVpbmplY3QoZW5hYmxlKSB7XG4gIGlzQXBwbGllZCA9IGVuYWJsZTtcbiAgLy8gVXNpbmcgb25TZW5kSGVhZGVycyBiZWNhdXNlIG9uSGVhZGVyc1JlY2VpdmVkIGluIEZpcmVmb3ggZmlyZXMgKmFmdGVyKiBjb250ZW50IHNjcmlwdHMuXG4gIC8vIEFuZCBldmVuIGluIENocm9tZSBhIHNpdGUgbWF5IGJlIHNvIGZhc3QgdGhhdCBwcmVpbmplY3Qgb24gb25IZWFkZXJzUmVjZWl2ZWQgd29uJ3QgYmUgdXNlZnVsLlxuICBjb25zdCBvbk9mZiA9IGAke2VuYWJsZSA/ICdhZGQnIDogJ3JlbW92ZSd9TGlzdGVuZXJgO1xuICBjb25zdCBjb25maWcgPSBlbmFibGUgPyBBUElfQ09ORklHIDogdW5kZWZpbmVkO1xuICBicm93c2VyLndlYlJlcXVlc3Qub25TZW5kSGVhZGVyc1tvbk9mZl0ob25TZW5kSGVhZGVycywgY29uZmlnKTtcbiAgaWYgKCFpc0FwcGxpZWQgfHwgIXhockluamVjdCkgeyAvLyB3aWxsIGJlIHJlZ2lzdGVyZWQgaW4gdG9nZ2xlWGhySW5qZWN0XG4gICAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkW29uT2ZmXShvbkhlYWRlcnNSZWNlaXZlZCwgY29uZmlnKTtcbiAgfVxuICBjYWNoZS5kZXN0cm95KCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVhockluamVjdChlbmFibGUpIHtcbiAgeGhySW5qZWN0ID0gZW5hYmxlO1xuICBicm93c2VyLndlYlJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWQucmVtb3ZlTGlzdGVuZXIob25IZWFkZXJzUmVjZWl2ZWQpO1xuICBpZiAoZW5hYmxlKSB7XG4gICAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkLmFkZExpc3RlbmVyKG9uSGVhZGVyc1JlY2VpdmVkLCBBUElfQ09ORklHLCBbXG4gICAgICAnYmxvY2tpbmcnLFxuICAgICAgJ3Jlc3BvbnNlSGVhZGVycycsXG4gICAgICBicm93c2VyLndlYlJlcXVlc3QuT25IZWFkZXJzUmVjZWl2ZWRPcHRpb25zLkVYVFJBX0hFQURFUlMsXG4gICAgXS5maWx0ZXIoQm9vbGVhbikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uU2VuZEhlYWRlcnMoeyB1cmwsIHRhYklkLCBmcmFtZUlkIH0pIHtcbiAgaWYgKCFJTkpFQ1RBQkxFX1RBQl9VUkxfUkUudGVzdCh1cmwpKSByZXR1cm47XG4gIGNvbnN0IGlzVG9wID0gIWZyYW1lSWQ7XG4gIGNvbnN0IGtleSA9IGdldEtleSh1cmwsIGlzVG9wKTtcbiAgaWYgKCFjYWNoZS5oYXMoa2V5KSkge1xuICAgIC8vIEdldEluamVjdGVkIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHNvb24gYnkgdGhlIGNvbnRlbnQgc2NyaXB0XG4gICAgLy8gYW5kIGl0IG1heSBlYXNpbHkgaGFwcGVuIHdoaWxlIGdldFNjcmlwdHNCeVVSTCBpcyBzdGlsbCB3YWl0aW5nIGZvciBicm93c2VyLnN0b3JhZ2VcbiAgICAvLyBzbyB3ZSdsbCBsZXQgR2V0SW5qZWN0ZWQgYXdhaXQgdGhpcyBwZW5kaW5nIGRhdGEgYnkgc3RvcmluZyBQcm9taXNlIGluIHRoZSBjYWNoZVxuICAgIGNhY2hlLnB1dChrZXksIHByZXBhcmUoa2V5LCB1cmwsIHRhYklkLCBmcmFtZUlkKSwgVElNRV9BRlRFUl9TRU5EKTtcbiAgfVxufVxuXG4vKiogQHBhcmFtIHtjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXNwb25zZUhlYWRlcnNEZXRhaWxzfSBpbmZvICovXG5mdW5jdGlvbiBvbkhlYWRlcnNSZWNlaXZlZChpbmZvKSB7XG4gIGNvbnN0IGtleSA9IGdldEtleShpbmZvLnVybCwgIWluZm8uZnJhbWVJZCk7XG4gIGNvbnN0IGRhdGEgPSB4aHJJbmplY3QgJiYgY2FjaGUuZ2V0KGtleSk7XG4gIGNhY2hlLmhpdChrZXksIFRJTUVfQUZURVJfUkVDRUlWRSk7XG4gIHJldHVybiBkYXRhPy5pbmplY3QgJiYgcHJlcGFyZVhockJsb2IoaW5mbywgZGF0YSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXNwb25zZUhlYWRlcnNEZXRhaWxzfSBpbmZvXG4gKiBAcGFyYW0ge1ZNR2V0SW5qZWN0ZWREYXRhQ29udGFpbmVyfSBkYXRhXG4gKi9cbmZ1bmN0aW9uIHByZXBhcmVYaHJCbG9iKHsgdXJsLCByZXNwb25zZUhlYWRlcnMgfSwgZGF0YSkge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOicpICYmIGRldGVjdFN0cmljdENzcChyZXNwb25zZUhlYWRlcnMpKSB7XG4gICAgZm9yY2VDb250ZW50SW5qZWN0aW9uKGRhdGEpO1xuICB9XG4gIGNvbnN0IGJsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtcbiAgICBKU09OLnN0cmluZ2lmeShkYXRhLmluamVjdCksXG4gIF0pKTtcbiAgcmVzcG9uc2VIZWFkZXJzLnB1c2goe1xuICAgIG5hbWU6ICdTZXQtQ29va2llJyxcbiAgICB2YWx1ZTogYFwiJHtwcm9jZXNzLmVudi5JTklUX0ZVTkNfTkFNRX1cIj0ke2Jsb2JVcmwuc3BsaXQoJy8nKS5wb3AoKX07IFNhbWVTaXRlPUxheGAsXG4gIH0pO1xuICBzZXRUaW1lb3V0KFVSTC5yZXZva2VPYmplY3RVUkwsIFRJTUVfS0VFUF9EQVRBLCBibG9iVXJsKTtcbiAgcmV0dXJuIHsgcmVzcG9uc2VIZWFkZXJzIH07XG59XG5cbmZ1bmN0aW9uIHByZXBhcmUoa2V5LCB1cmwsIHRhYklkLCBmcmFtZUlkLCBmb3JjZUNvbnRlbnQpIHtcbiAgLyoqIEBuYW1lc3BhY2UgVk1HZXRJbmplY3RlZERhdGFDb250YWluZXIgKi9cbiAgY29uc3QgcmVzID0ge1xuICAgIC8qKiBAbmFtZXNwYWNlIFZNR2V0SW5qZWN0ZWREYXRhICovXG4gICAgaW5qZWN0OiB7XG4gICAgICBleHBvc2U6ICFmcmFtZUlkXG4gICAgICAgICYmIHVybC5zdGFydHNXaXRoKCdodHRwczovLycpXG4gICAgICAgICYmIGV4cG9zZVt1cmwuc3BsaXQoJy8nLCAzKVsyXV0sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGlzQXBwbGllZFxuICAgID8gcHJlcGFyZVNjcmlwdHMocmVzLCBrZXksIHVybCwgdGFiSWQsIGZyYW1lSWQsIGZvcmNlQ29udGVudClcbiAgICA6IHJlcztcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJlcGFyZVNjcmlwdHMocmVzLCBjYWNoZUtleSwgdXJsLCB0YWJJZCwgZnJhbWVJZCwgZm9yY2VDb250ZW50KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTY3JpcHRzQnlVUkwodXJsLCAhZnJhbWVJZCk7XG4gIGNvbnN0IHsgZW52RGVsYXllZCwgc2NyaXB0cyB9ID0gZGF0YTtcbiAgY29uc3QgaXNMYXRlID0gZm9yY2VDb250ZW50ICE9IG51bGw7XG4gIGRhdGEuZm9yY2VDb250ZW50ID0gZm9yY2VDb250ZW50O1xuICBjb25zdCBmZWVkYmFjayA9IHNjcmlwdHMubWFwKHByZXBhcmVTY3JpcHQsIGRhdGEpLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgbW9yZSA9IGVudkRlbGF5ZWQucHJvbWlzZTtcbiAgY29uc3QgZW52S2V5ID0gZ2V0VW5pcUlkKGAke3RhYklkfToke2ZyYW1lSWR9OmApO1xuICBjb25zdCB7IGluamVjdCB9ID0gcmVzO1xuICAvKiogQG5hbWVzcGFjZSBWTUdldEluamVjdGVkRGF0YSAqL1xuICBPYmplY3QuYXNzaWduKGluamVjdCwge1xuICAgIHNjcmlwdHMsXG4gICAgW0lOSkVDVF9JTlRPXTogaW5qZWN0SW50byxcbiAgICBjYWNoZTogZGF0YS5jYWNoZSxcbiAgICBmZWVkSWQ6IHtcbiAgICAgIGNhY2hlS2V5LCAvLyBJbmplY3Rpb25GZWVkYmFjayBjYWNoZSBrZXkgZm9yIGNsZWFudXAgd2hlbiBnZXREYXRhRkYgb3V0cnVucyBHZXRJbmplY3RlZFxuICAgICAgZW52S2V5LCAvLyBJbmplY3Rpb25GZWVkYmFjayBjYWNoZSBrZXkgZm9yIGVudkRlbGF5ZWRcbiAgICB9LFxuICAgIGhhc01vcmU6ICEhbW9yZSwgLy8gdGVsbHMgY29udGVudCBicmlkZ2UgdG8gZXhwZWN0IGVudkRlbGF5ZWRcbiAgICBmb3JjZUNvbnRlbnQ6IGZvcmNlQ29udGVudCB8fCAoIC8vIFRyeWluZyB0byBza2lwIHBhZ2Ugc2FuZGJveCB3aGVuIHhockluamVjdCBpcyBvbjpcbiAgICAgIGZlZWRiYWNrLmxlbmd0aCA9PT0gc2NyaXB0cy5sZW5ndGggLy8gLi4ud2hlbiBhbGwgYGVudlN0YXJ0YCBzY3JpcHRzIGFyZSBgY29udGVudGAsXG4gICAgICAmJiBlbnZEZWxheWVkLnNjcmlwdHMuZXZlcnkoc2NyID0+IGlzQ29udGVudFJlYWxtKHNjciwgZm9yY2VDb250ZW50KSkgLy8gYW5kIGBlbnZEZWxheWVkYCB0b28uXG4gICAgKSxcbiAgICBpZHM6IGRhdGEuZGlzYWJsZWRJZHMsIC8vIGNvbnRlbnQgYnJpZGdlIGFkZHMgdGhlIGFjdHVhbGx5IHJ1bm5pbmcgaWRzIGFuZCBzZW5kcyB2aWEgU2V0UG9wdXBcbiAgICBpbmZvOiB7XG4gICAgICB1YSxcbiAgICB9LFxuICB9KTtcbiAgLyoqIEBuYW1lc3BhY2UgVk1HZXRJbmplY3RlZERhdGFDb250YWluZXIgKi9cbiAgT2JqZWN0LmFzc2lnbihyZXMsIHtcbiAgICBmZWVkYmFjayxcbiAgICB2YWxPcElkczogWy4uLmRhdGFbRU5WX1ZBTFVFX0lEU10sIC4uLmVudkRlbGF5ZWRbRU5WX1ZBTFVFX0lEU11dLFxuICAgIHJjc1Byb21pc2U6ICFpc0xhdGUgJiYgIXhockluamVjdCAmJiBJU19GSVJFRk9YXG4gICAgICA/IHJlZ2lzdGVyU2NyaXB0RGF0YUZGKGluamVjdCwgdXJsLCAhIWZyYW1lSWQpXG4gICAgICA6IG51bGwsXG4gIH0pO1xuICBpZiAobW9yZSkgY2FjaGUucHV0KGVudktleSwgbW9yZSk7XG4gIGNhY2hlLnB1dChjYWNoZUtleSwgcmVzKTsgLy8gbmVjZXNzYXJ5IGZvciB0aGUgc3luY2hyb25vdXMgb25IZWFkZXJzUmVjZWl2ZWRcbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqIEB0aGlzIHtWTVNjcmlwdEJ5VXJsRGF0YX0gKi9cbmZ1bmN0aW9uIHByZXBhcmVTY3JpcHQoc2NyaXB0KSB7XG4gIGNvbnN0IHsgY3VzdG9tLCBtZXRhLCBwcm9wcyB9ID0gc2NyaXB0O1xuICBjb25zdCB7IGlkIH0gPSBwcm9wcztcbiAgY29uc3QgeyBmb3JjZUNvbnRlbnQsIHJlcXVpcmUsIHZhbHVlIH0gPSB0aGlzO1xuICBjb25zdCBjb2RlID0gdGhpcy5jb2RlW2lkXTtcbiAgY29uc3QgZGF0YUtleSA9IGdldFVuaXFJZCgnVk1pbicpO1xuICBjb25zdCBkaXNwbGF5TmFtZSA9IGdldFNjcmlwdE5hbWUoc2NyaXB0KTtcbiAgY29uc3QgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChkaXNwbGF5TmFtZS5yZXBsYWNlKC9bIyYnLC86Oz9APStdL2csIHJlcGxhY2VXaXRoRnVsbFdpZHRoRm9ybSkpO1xuICBjb25zdCBpc0NvbnRlbnQgPSBpc0NvbnRlbnRSZWFsbShzY3JpcHQsIGZvcmNlQ29udGVudCk7XG4gIGNvbnN0IHBhdGhNYXAgPSBjdXN0b20ucGF0aE1hcCB8fCB7fTtcbiAgY29uc3QgcmVxcyA9IG1ldGEucmVxdWlyZT8ubWFwKGtleSA9PiByZXF1aXJlW3BhdGhNYXBba2V5XSB8fCBrZXldKS5maWx0ZXIoQm9vbGVhbik7XG4gIC8vIHRyeWluZyB0byBhdm9pZCBwcm9ncmVzc2l2ZSBzdHJpbmcgY29uY2F0ZW5hdGlvbiBvZiBwb3RlbnRpYWxseSBodWdlIGNvZGUgc2xpY2VzXG4gIC8vIGFkZGluZyBgO2Agb24gYSBuZXcgbGluZSBpbiBjYXNlIHNvbWUgcmVxdWlyZWQgc2NyaXB0IGVuZHMgd2l0aCBhIGxpbmUgY29tbWVudFxuICBjb25zdCByZXFzU2xpY2VzID0gcmVxcyA/IFtdLmNvbmNhdCguLi5yZXFzLm1hcChyZXEgPT4gW3JlcSwgJ1xcbjsnXSkpIDogW107XG4gIGNvbnN0IGhhc1JlcXMgPSByZXFzU2xpY2VzLmxlbmd0aDtcbiAgY29uc3QgaW5qZWN0ZWRDb2RlID0gW1xuICAgIC8vIGhpZGluZyBtb2R1bGUgaW50ZXJmYWNlIGZyb20gQHJlcXVpcmUnZCBzY3JpcHRzIHNvIHRoZXkgZG9uJ3QgbWlzdGFrZW5seSB1c2UgaXRcbiAgICBgd2luZG93LiR7ZGF0YUtleX09ZnVuY3Rpb24oJHtkYXRhS2V5fSl7dHJ5e3dpdGgodGhpcykoKGRlZmluZSxtb2R1bGUsZXhwb3J0cyk9PntgLFxuICAgIC4uLnJlcXNTbGljZXMsXG4gICAgLy8gYWRkaW5nIGEgbmVzdGVkIElJRkUgdG8gc3VwcG9ydCAndXNlIHN0cmljdCcgaW4gdGhlIGNvZGUgd2hlbiB0aGVyZSBhcmUgQHJlcXVpcmVzXG4gICAgaGFzUmVxcyA/ICcoKCk9PnsnIDogJycsXG4gICAgY29kZSxcbiAgICAvLyBhZGRpbmcgYSBuZXcgbGluZSBpbiBjYXNlIHRoZSBjb2RlIGVuZHMgd2l0aCBhIGxpbmUgY29tbWVudFxuICAgIGNvZGUuZW5kc1dpdGgoJ1xcbicpID8gJycgOiAnXFxuJyxcbiAgICBoYXNSZXFzID8gJ30pKCknIDogJycsXG4gICAgLy8gMCBhdCB0aGUgZW5kIHRvIHN1cHByZXNzIGVycm9ycyBhYm91dCBub24tY2xvbmVhYmxlIHJlc3VsdCBvZiBleGVjdXRlU2NyaXB0IGluIEZGXG4gICAgYH0pKCl9Y2F0Y2goZSl7JHtkYXRhS2V5fShlKX19OzBgLFxuICAgIC8vIEZpcmVmb3ggbGlzdHMgLnVzZXIuanMgYW1vbmcgb3VyIG93biBjb250ZW50IHNjcmlwdHMgc28gYSBzcGFjZSBhdCBzdGFydCB3aWxsIGdyb3VwIHRoZW1cbiAgICBgXFxuLy8jIHNvdXJjZVVSTD0ke2V4dGVuc2lvblJvb3R9JHtJU19GSVJFRk9YID8gJyUyMCcgOiAnJ30ke25hbWV9LnVzZXIuanMjJHtpZH1gLFxuICBdLmpvaW4oJycpO1xuICBjYWNoZUNvZGUucHV0KGRhdGFLZXksIGluamVjdGVkQ29kZSwgVElNRV9LRUVQX0RBVEEpO1xuICAvKiogQG5hbWVzcGFjZSBWTUluamVjdGVkU2NyaXB0ICovXG4gIE9iamVjdC5hc3NpZ24oc2NyaXB0LCB7XG4gICAgZGF0YUtleSxcbiAgICBkaXNwbGF5TmFtZSxcbiAgICAvLyBjb2RlIHdpbGwgYmUgYHRydWVgIGlmIHRoZSBkZXNpcmVkIHJlYWxtIGlzIFBBR0Ugd2hpY2ggaXMgbm90IGluamVjdGFibGVcbiAgICBjb2RlOiBpc0NvbnRlbnQgPyAnJyA6IGZvcmNlQ29udGVudCB8fCBpbmplY3RlZENvZGUsXG4gICAgbWV0YVN0cjogY29kZS5tYXRjaChNRVRBQkxPQ0tfUkUpWzFdIHx8ICcnLFxuICAgIHZhbHVlczogdmFsdWVbaWRdIHx8IG51bGwsXG4gIH0pO1xuICByZXR1cm4gaXNDb250ZW50ICYmIFtkYXRhS2V5LCB0cnVlXTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVdpdGhGdWxsV2lkdGhGb3JtKHMpIHtcbiAgLy8gZnVsbHdpZHRoIHJhbmdlIHN0YXJ0cyBhdCAweEZGMDAsIG5vcm1hbCByYW5nZSBzdGFydHMgYXQgc3BhY2UgY2hhciBjb2RlIDB4MjBcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocy5jaGFyQ29kZUF0KDApIC0gMHgyMCArIDB4RkYwMCk7XG59XG5cbmNvbnN0IHJlc29sdmVEYXRhQ29kZVN0ciA9IGAoJHtmdW5jdGlvbiBfKGRhdGEpIHtcbiAgLyogYGZ1bmN0aW9uYCBpcyByZXF1aXJlZCB0byBjb21waWxlIGB0aGlzYCwgYW5kIGB0aGlzYCBpcyByZXF1aXJlZCBiZWNhdXNlIG91ciBzYWZlLWdsb2JhbHNcbiAgICogc2hhZG93cyBgd2luZG93YCBzbyBpdHMgbmFtZSBpcyBtaW5pZmllZCBhbmQgaGVuY2UgaW5hY2Nlc3NpYmxlIGhlcmUgKi9cbiAgY29uc3QgeyB2bVJlc29sdmUgfSA9IHRoaXM7XG4gIGlmICh2bVJlc29sdmUpIHtcbiAgICB2bVJlc29sdmUoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcnVubmluZyBlYXJsaWVyIHRoYW4gdGhlIG1haW4gY29udGVudCBzY3JpcHQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHRoaXMudm1EYXRhID0gZGF0YTtcbiAgfVxufX0pYDtcblxuLy8gVE9ETzogcmV3b3JrIHRoZSB3aG9sZSB0aGluZyB0byByZWdpc3RlciBzY3JpcHRzIGluZGl2aWR1YWxseSB3aXRoIHJlYWwgYG1hdGNoZXNgXG5mdW5jdGlvbiByZWdpc3RlclNjcmlwdERhdGFGRihpbmplY3QsIHVybCwgYWxsRnJhbWVzKSB7XG4gIHJldHVybiBicm93c2VyLmNvbnRlbnRTY3JpcHRzPy5yZWdpc3Rlcih7XG4gICAgYWxsRnJhbWVzLFxuICAgIGpzOiBbe1xuICAgICAgY29kZTogYCR7cmVzb2x2ZURhdGFDb2RlU3RyfSgke0pTT04uc3RyaW5naWZ5KGluamVjdCl9KWAsXG4gICAgfV0sXG4gICAgbWF0Y2hlczogdXJsLnNwbGl0KCcjJywgMSksXG4gICAgcnVuQXQ6ICdkb2N1bWVudF9zdGFydCcsXG4gIH0pO1xufVxuXG4vKiogQHBhcmFtIHtjaHJvbWUud2ViUmVxdWVzdC5IdHRwSGVhZGVyW119IHJlc3BvbnNlSGVhZGVycyAqL1xuZnVuY3Rpb24gZGV0ZWN0U3RyaWN0Q3NwKHJlc3BvbnNlSGVhZGVycykge1xuICByZXR1cm4gcmVzcG9uc2VIZWFkZXJzLnNvbWUoKHsgbmFtZSwgdmFsdWUgfSkgPT4gKFxuICAgIC9eY29udGVudC1zZWN1cml0eS1wb2xpY3kkL2kudGVzdChuYW1lKVxuICAgICYmIC9eLig/IS4qJ3Vuc2FmZS1pbmxpbmUnKS8udGVzdCggLy8gdHJ1ZSBpZiBub3QgZW1wdHkgYW5kIHdpdGhvdXQgJ3Vuc2FmZS1pbmxpbmUnXG4gICAgICB2YWx1ZS5tYXRjaCgvKD86Xnw7KVxccypzY3JpcHQtc3JjLWVsZW1cXHNbXjtdKy8pXG4gICAgICB8fCB2YWx1ZS5tYXRjaCgvKD86Xnw7KVxccypzY3JpcHQtc3JjXFxzW147XSsvKVxuICAgICAgfHwgdmFsdWUubWF0Y2goLyg/Ol58OylcXHMqZGVmYXVsdC1zcmNcXHNbXjtdKy8pXG4gICAgICB8fCAnJyxcbiAgICApXG4gICkpO1xufVxuXG4vKiogQHBhcmFtIHtWTUdldEluamVjdGVkRGF0YUNvbnRhaW5lcn0gZGF0YSAqL1xuZnVuY3Rpb24gZm9yY2VDb250ZW50SW5qZWN0aW9uKGRhdGEpIHtcbiAgLyoqIEB0eXBlIFZNR2V0SW5qZWN0ZWREYXRhICovXG4gIGNvbnN0IGluamVjdCA9IGRhdGEuaW5qZWN0O1xuICBpbmplY3QuZm9yY2VDb250ZW50ID0gdHJ1ZTtcbiAgaW5qZWN0LnNjcmlwdHMuZm9yRWFjaChzY3IgPT4ge1xuICAgIC8vIFdoZW4gc2NyaXB0IHdhbnRzIGBwYWdlYCwgdGhlIHJlc3VsdCBiZWxvdyB3aWxsIGJlIGB0cnVlYCBzbyB0aGUgc2NyaXB0IGdvZXMgaW50byBgZmFpbGVkSWRzYFxuICAgIHNjci5jb2RlID0gIWlzQ29udGVudFJlYWxtKHNjciwgdHJ1ZSkgfHwgJyc7XG4gICAgZGF0YS5mZWVkYmFjay5wdXNoKFtzY3IuZGF0YUtleSwgdHJ1ZV0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNDb250ZW50UmVhbG0oc2NyLCBmb3JjZUNvbnRlbnQpIHtcbiAgY29uc3QgcmVhbG0gPSBzY3JbSU5KRUNUX0lOVE9dIHx8IChcbiAgICBzY3JbSU5KRUNUX0lOVE9dID0gbm9ybWFsaXplUmVhbG0oc2NyLmN1c3RvbVtJTkpFQ1RfSU5UT10gfHwgc2NyLm1ldGFbSU5KRUNUX0lOVE9dKVxuICApO1xuICByZXR1cm4gcmVhbG0gPT09IElOSkVDVF9DT05URU5UIHx8IGZvcmNlQ29udGVudCAmJiByZWFsbSA9PT0gSU5KRUNUX0FVVE87XG59XG4iLCJpbXBvcnQge1xuICBibG9iMmJhc2U2NCwgYnVmZmVyMnN0cmluZywgZ2V0VW5pcUlkLCByZXF1ZXN0LCBpMThuLCBpc0VtcHR5LCBub29wLCBzZW5kVGFiQ21kLFxuICBzdHJpbmcydWludDhhcnJheSxcbn0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgZm9yRWFjaEVudHJ5LCBvYmplY3RQaWNrIH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCB1YSBmcm9tICcjL2NvbW1vbi91YSc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZSc7XG5pbXBvcnQgeyBpc1VzZXJTY3JpcHQsIHBhcnNlTWV0YSB9IGZyb20gJy4vc2NyaXB0JztcbmltcG9ydCB7IGV4dGVuc2lvblJvb3QgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5jb25zdCBWTV9WRVJJRlkgPSAnVk0tVmVyaWZ5JztcbmNvbnN0IENPTkZJUk1fVVJMX0JBU0UgPSBgJHtleHRlbnNpb25Sb290fWNvbmZpcm0vaW5kZXguaHRtbCNgO1xuLyoqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLFZNSHR0cFJlcXVlc3Q+fSAqL1xuY29uc3QgcmVxdWVzdHMgPSB7fTtcbmNvbnN0IGRvd25sb2FkcyA9IHt9O1xuY29uc3QgdmVyaWZ5ID0ge307XG5jb25zdCB0YWJSZXF1ZXN0cyA9IHt9O1xuY29uc3QgeyBjaHJvbWUgfSA9IGdsb2JhbDtcbmxldCBlbmNvZGVyO1xuXG5jb25zdCBpc0Rvd25sb2FkUmVxID0gKG9wdHMpID0+IHtcbiAgcmV0dXJuIChvcHRzLm92ZXJyaWRlTWltZVR5cGUgPT09ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nICYmIG9wdHMucmVzcG9uc2VUeXBlID09PSAnYmxvYicgJiYgb3B0cy5maWxlTmFtZSk7XG59O1xuXG5pZiAoY2hyb21lKSB7XG4gIGNocm9tZS5kb3dubG9hZHMub25DaGFuZ2VkLmFkZExpc3RlbmVyKGV2dCA9PiB7XG4gICAgY29uc29sZS5pbmZvKCdvbkNoYW5nZWQnLCBldnQpO1xuICAgIGlmICghZG93bmxvYWRzW2V2dC5pZF0pIHJldHVybjtcbiAgICBjb25zdCB7IHJlcSwgc3JjIH0gPSBkb3dubG9hZHNbZXZ0LmlkXTtcbiAgICBjb25zdCB7IHRhYjogeyBpZDogdGFiSWQgfSwgZnJhbWVJZCB9ID0gc3JjO1xuXG4gICAgaWYgKGV2dC5zdGF0ZT8uY3VycmVudCA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgc2VuZFRhYkNtZCh0YWJJZCwgJ0h0dHBSZXF1ZXN0ZWQnLCB7XG4gICAgICAgIHR5cGU6ICdsb2FkJywgaWQ6IHJlcS5pZCwgZG93bmxvYWRJZDogZXZ0LmlkLFxuICAgICAgfSwgeyBmcmFtZUlkIH0pO1xuICAgICAgZGVsZXRlIGRvd25sb2Fkc1tldnQuaWRdO1xuICAgICAgZGVsZXRlIHJlcXVlc3RzW3JlcS5pZF07XG4gICAgfVxuICB9KTtcbn1cblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICBDb25maXJtSW5zdGFsbDogY29uZmlybUluc3RhbGwsXG4gIGFzeW5jIENoZWNrSW5zdGFsbGVyVGFiKHRhYklkLCBzcmMpIHtcbiAgICBjb25zdCB0YWIgPSBJU19GSVJFRk9YICYmIChzcmMudXJsIHx8ICcnKS5zdGFydHNXaXRoKCdmaWxlOicpXG4gICAgICAmJiBhd2FpdCBicm93c2VyLnRhYnMuZ2V0KHRhYklkKS5jYXRjaChub29wKTtcbiAgICByZXR1cm4gdGFiICYmICh0YWIucGVuZGluZ1VybCB8fCB0YWIudXJsIHx8ICcnKS5zdGFydHNXaXRoKENPTkZJUk1fVVJMX0JBU0UpO1xuICB9LFxuICAvKiogQHJldHVybiB7dm9pZH0gKi9cbiAgSHR0cFJlcXVlc3Qob3B0cywgc3JjKSB7XG4gICAgY29uc3QgeyB0YWI6IHsgaWQ6IHRhYklkIH0sIGZyYW1lSWQgfSA9IHNyYztcbiAgICBjb25zdCB7IGlkLCBldmVudHNUb05vdGlmeSB9ID0gb3B0cztcblxuICAgIC8vIGhhbmRsZSBkb3dubG9hZFxuICAgIGlmIChjaHJvbWUgJiYgaXNEb3dubG9hZFJlcShvcHRzKSkge1xuICAgICAgLy8gY29uc29sZS5pbmZvKG9wdHMpO1xuICAgICAgcmV0dXJuIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICB1cmw6IG9wdHMudXJsLFxuICAgICAgICAvLyBcInNhdmVBc1wiIDogdHJ1ZSxcbiAgICAgICAgZmlsZW5hbWU6IG9wdHMuZmlsZU5hbWUsXG4gICAgICB9LCBkb3dubG9hZElkID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5pbmZvKCdkb3dubG9hZElkJywgZG93bmxvYWRJZCk7XG4gICAgICAgIHJlcXVlc3RzW2lkXSA9IHsgaWQsIGRvd25sb2FkSWQsIHRhYklkLCBldmVudHNUb05vdGlmeSwgeGhyOiBudWxsIH07XG4gICAgICAgIGRvd25sb2Fkc1tkb3dubG9hZElkXSA9IHsgcmVxOiByZXF1ZXN0c1tpZF0sIG9wdHMsIHNyYyB9O1xuICAgICAgICBpZiAoZXZlbnRzVG9Ob3RpZnk/LmluY2x1ZGVzKCdwcm9ncmVzcycpKSB7XG4gICAgICAgICAgc2VuZFRhYkNtZCh0YWJJZCwgJ0h0dHBSZXF1ZXN0ZWQnLCB7IHR5cGU6ICdwcm9ncmVzcycsIGlkLCBkb3dubG9hZElkIH0sIHsgZnJhbWVJZCB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiSHR0cFJlcXVlc3RcIiwgb3B0cywgc3JjKTtcblxuICAgIHJlcXVlc3RzW2lkXSA9IHtcbiAgICAgIGlkLFxuICAgICAgdGFiSWQsXG4gICAgICBldmVudHNUb05vdGlmeSxcbiAgICAgIHhocjogbmV3IFhNTEh0dHBSZXF1ZXN0KCksXG4gICAgfTtcbiAgICAodGFiUmVxdWVzdHNbdGFiSWRdIHx8ICh0YWJSZXF1ZXN0c1t0YWJJZF0gPSB7fSkpW2lkXSA9IDE7XG4gICAgaHR0cFJlcXVlc3Qob3B0cywgc3JjLCByZXMgPT4gcmVxdWVzdHNbaWRdICYmIChcbiAgICAgIHNlbmRUYWJDbWQodGFiSWQsICdIdHRwUmVxdWVzdGVkJywgcmVzLCB7IGZyYW1lSWQgfSlcbiAgICApKTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge3ZvaWR9ICovXG4gIEFib3J0UmVxdWVzdChpZCkge1xuICAgIGNvbnN0IHJlcSA9IHJlcXVlc3RzW2lkXTtcbiAgICBpZiAocmVxKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGlmIChjaHJvbWUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIGNocm9tZS5kb3dubG9hZHMuY2FuY2VsKHJlcS5pZCk7XG4gICAgICAgIGRlbGV0ZSByZXF1ZXN0c1tyZXEuaWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxLnhoci5hYm9ydCgpO1xuICAgICAgICBjbGVhclJlcXVlc3QocmVxKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFJldm9rZUJsb2IodXJsKSB7XG4gICAgY29uc3QgdGltZXIgPSBjYWNoZS5wb3AoYHhockJsb2I6JHt1cmx9YCk7XG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5jb25zdCBzcGVjaWFsSGVhZGVycyA9IFtcbiAgJ3VzZXItYWdlbnQnLFxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0dsb3NzYXJ5L0ZvcmJpZGRlbl9oZWFkZXJfbmFtZVxuICAvLyBodHRwczovL2NzLmNocm9taXVtLm9yZy8/cT1maWxlOmNjK3N5bWJvbDpJc0ZvcmJpZGRlbkhlYWRlciU1Q2JcbiAgJ2FjY2VwdC1jaGFyc2V0JyxcbiAgJ2FjY2VwdC1lbmNvZGluZycsXG4gICdhY2Nlc3MtY29udHJvbC1yZXF1ZXN0LWhlYWRlcnMnLFxuICAnYWNjZXNzLWNvbnRyb2wtcmVxdWVzdC1tZXRob2QnLFxuICAnY29ubmVjdGlvbicsXG4gICdjb250ZW50LWxlbmd0aCcsXG4gICdjb29raWUnLFxuICAnY29va2llMicsXG4gICdkYXRlJyxcbiAgJ2RudCcsXG4gICdleHBlY3QnLFxuICAnaG9zdCcsXG4gICdrZWVwLWFsaXZlJyxcbiAgJ29yaWdpbicsXG4gICdyZWZlcmVyJyxcbiAgJ3RlJyxcbiAgJ3RyYWlsZXInLFxuICAndHJhbnNmZXItZW5jb2RpbmcnLFxuICAndXBncmFkZScsXG4gICd2aWEnLFxuXTtcbi8vIGNvbnN0IHRhc2tzID0ge307XG5jb25zdCBIZWFkZXJJbmplY3RvciA9ICgoKSA9PiB7XG4gIC8qKiBAdHlwZSBjaHJvbWUud2ViUmVxdWVzdC5SZXF1ZXN0RmlsdGVyICovXG4gIGNvbnN0IGFwaUZpbHRlciA9IHtcbiAgICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbiAgICB0eXBlczogWyd4bWxodHRwcmVxdWVzdCddLFxuICB9O1xuICBjb25zdCBFWFRSQV9IRUFERVJTID0gW1xuICAgIGJyb3dzZXIud2ViUmVxdWVzdC5PbkJlZm9yZVNlbmRIZWFkZXJzT3B0aW9ucy5FWFRSQV9IRUFERVJTLFxuICBdLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgaGVhZGVyc1RvSW5qZWN0ID0ge307XG4gIC8qKiBAcGFyYW0ge2Nocm9tZS53ZWJSZXF1ZXN0Lkh0dHBIZWFkZXJ9IGhlYWRlciAqL1xuICBjb25zdCBpc1ZtVmVyaWZ5ID0gaGVhZGVyID0+IGhlYWRlci5uYW1lID09PSBWTV9WRVJJRlk7XG4gIGNvbnN0IGlzTm90Q29va2llID0gaGVhZGVyID0+ICEvXmNvb2tpZTI/JC9pLnRlc3QoaGVhZGVyLm5hbWUpO1xuICBjb25zdCBpc1NlbmRhYmxlID0gaGVhZGVyID0+IGhlYWRlci5uYW1lICE9PSBWTV9WRVJJRlk7XG4gIGNvbnN0IGlzU2VuZGFibGVBbm9uID0gaGVhZGVyID0+IGlzU2VuZGFibGUoaGVhZGVyKSAmJiBpc05vdENvb2tpZShoZWFkZXIpO1xuICBjb25zdCBSRV9TRVRfQ09PS0lFID0gL15zZXQtY29va2llMj8kL2k7XG4gIGNvbnN0IFJFX1NFVF9DT09LSUVfVkFMVUUgPSAvXlxccyooPzpfXyhTZWN1cmV8SG9zdCktKT8oW149XFxzXSspXFxzKj1cXHMqKFwiKT8oWyEjLStcXC0tOjwtW1xcXS1+XSopXFwzKC4qKS87XG4gIGNvbnN0IFJFX1NFVF9DT09LSUVfQVRUUiA9IC9cXHMqOz9cXHMqKFxcdyspKD86PShcIik/KFshIy0rXFwtLTo8LVtcXF0tfl0qKVxcMik/L3k7XG4gIGNvbnN0IFNBTUVfU0lURV9NQVAgPSB7XG4gICAgc3RyaWN0OiAnc3RyaWN0JyxcbiAgICBsYXg6ICdsYXgnLFxuICAgIG5vbmU6ICdub19yZXN0cmljdGlvbicsXG4gIH07XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGVhZGVyVmFsdWVcbiAgICogQHBhcmFtIHtWTUh0dHBSZXF1ZXN0fSByZXFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgY29uc3Qgc2V0Q29va2llSW5TdG9yZSA9IChoZWFkZXJWYWx1ZSwgcmVxLCB1cmwpID0+IHtcbiAgICBsZXQgbSA9IFJFX1NFVF9DT09LSUVfVkFMVUUuZXhlYyhoZWFkZXJWYWx1ZSk7XG4gICAgaWYgKG0pIHtcbiAgICAgIGNvbnN0IFssIHByZWZpeCwgbmFtZSwgLCB2YWx1ZSwgb3B0U3RyXSA9IG07XG4gICAgICBjb25zdCBvcHQgPSB7fTtcbiAgICAgIGNvbnN0IGlzSG9zdCA9IHByZWZpeCA9PT0gJ0hvc3QnO1xuICAgICAgUkVfU0VUX0NPT0tJRV9BVFRSLmxhc3RJbmRleCA9IDA7XG4gICAgICB3aGlsZSAoKG0gPSBSRV9TRVRfQ09PS0lFX0FUVFIuZXhlYyhvcHRTdHIpKSkge1xuICAgICAgICBvcHRbbVsxXS50b0xvd2VyQ2FzZSgpXSA9IG1bM107XG4gICAgICB9XG4gICAgICBjb25zdCBzYW1lU2l0ZSA9IG9wdC5zYW1lU2l0ZT8udG9Mb3dlckNhc2UoKTtcbiAgICAgIGJyb3dzZXIuY29va2llcy5zZXQoe1xuICAgICAgICB1cmwsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBkb21haW46IGlzSG9zdCA/IHVuZGVmaW5lZCA6IG9wdC5kb21haW4sXG4gICAgICAgIGV4cGlyYXRpb25EYXRlOiBNYXRoLm1heCgwLCArbmV3IERhdGUob3B0WydtYXgtYWdlJ10gKiAxMDAwIHx8IG9wdC5leHBpcmVzKSkgfHwgdW5kZWZpbmVkLFxuICAgICAgICBodHRwT25seTogJ2h0dHBvbmx5JyBpbiBvcHQsXG4gICAgICAgIHBhdGg6IGlzSG9zdCA/ICcvJyA6IG9wdC5wYXRoLFxuICAgICAgICBzYW1lU2l0ZTogU0FNRV9TSVRFX01BUFtzYW1lU2l0ZV0sXG4gICAgICAgIHNlY3VyZTogdXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOicpICYmICghIXByZWZpeCB8fCBzYW1lU2l0ZSA9PT0gJ25vbmUnIHx8ICdzZWN1cmUnIGluIG9wdCksXG4gICAgICAgIHN0b3JlSWQ6IHJlcS5zdG9yZUlkLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhcGlFdmVudHMgPSB7XG4gICAgb25CZWZvcmVTZW5kSGVhZGVyczoge1xuICAgICAgb3B0aW9uczogWydyZXF1ZXN0SGVhZGVycycsICdibG9ja2luZycsIC4uLkVYVFJBX0hFQURFUlNdLFxuICAgICAgLyoqIEBwYXJhbSB7Y2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdEhlYWRlcnNEZXRhaWxzfSBkZXRhaWxzICovXG4gICAgICBsaXN0ZW5lcih7IHJlcXVlc3RIZWFkZXJzOiBoZWFkZXJzLCByZXF1ZXN0SWQgfSkge1xuICAgICAgICAvLyBvbmx5IHRoZSBmaXJzdCBjYWxsIGR1cmluZyBhIHJlZGlyZWN0L2F1dGggY2hhaW4gd2lsbCBoYXZlIFZNLVZlcmlmeSBoZWFkZXJcbiAgICAgICAgY29uc3QgcmVxSWQgPSBoZWFkZXJzLmZpbmQoaXNWbVZlcmlmeSk/LnZhbHVlIHx8IHZlcmlmeVtyZXF1ZXN0SWRdO1xuICAgICAgICBjb25zdCByZXEgPSByZXFJZCAmJiByZXF1ZXN0c1tyZXFJZF07XG4gICAgICAgIGlmIChyZXFJZCAmJiByZXEpIHtcbiAgICAgICAgICB2ZXJpZnlbcmVxdWVzdElkXSA9IHJlcUlkO1xuICAgICAgICAgIHJlcS5jb3JlSWQgPSByZXF1ZXN0SWQ7XG4gICAgICAgICAgaGVhZGVycyA9IChyZXEubm9OYXRpdmVDb29raWUgPyBoZWFkZXJzLmZpbHRlcihpc05vdENvb2tpZSkgOiBoZWFkZXJzKVxuICAgICAgICAgIC5jb25jYXQoaGVhZGVyc1RvSW5qZWN0W3JlcUlkXSB8fCBbXSlcbiAgICAgICAgICAuZmlsdGVyKHJlcS5hbm9ueW1vdXMgPyBpc1NlbmRhYmxlQW5vbiA6IGlzU2VuZGFibGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHJlcXVlc3RIZWFkZXJzOiBoZWFkZXJzIH07XG4gICAgICB9LFxuICAgIH0sXG4gICAgb25IZWFkZXJzUmVjZWl2ZWQ6IHtcbiAgICAgIG9wdGlvbnM6IFsncmVzcG9uc2VIZWFkZXJzJywgJ2Jsb2NraW5nJywgLi4uRVhUUkFfSEVBREVSU10sXG4gICAgICAvKiogQHBhcmFtIHtjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0SGVhZGVyc0RldGFpbHN9IGRldGFpbHMgKi9cbiAgICAgIGxpc3RlbmVyKHsgcmVzcG9uc2VIZWFkZXJzOiBoZWFkZXJzLCByZXF1ZXN0SWQsIHVybCB9KSB7XG4gICAgICAgIGNvbnN0IHJlcSA9IHJlcXVlc3RzW3ZlcmlmeVtyZXF1ZXN0SWRdXTtcbiAgICAgICAgaWYgKHJlcSkge1xuICAgICAgICAgIGlmIChyZXEuYW5vbnltb3VzIHx8IHJlcS5zdG9yZUlkKSB7XG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5maWx0ZXIoaCA9PiAoXG4gICAgICAgICAgICAgICFSRV9TRVRfQ09PS0lFLnRlc3QoaC5uYW1lKVxuICAgICAgICAgICAgICB8fCAhcmVxLnN0b3JlSWRcbiAgICAgICAgICAgICAgfHwgc2V0Q29va2llSW5TdG9yZShoLnZhbHVlLCByZXEsIHVybClcbiAgICAgICAgICAgICkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXEucmVzcG9uc2VIZWFkZXJzID0gaGVhZGVycy5tYXAoZW5jb2RlV2ViUmVxdWVzdEhlYWRlcikuam9pbignJyk7XG4gICAgICAgICAgcmV0dXJuIHsgcmVzcG9uc2VIZWFkZXJzOiBoZWFkZXJzIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgLy8gQ2hyb21lIDc0LTkxIG5lZWRzIGFuIGV4dHJhSGVhZGVycyBsaXN0ZW5lciBhdCB0YWIgbG9hZCBzdGFydCwgaHR0cHM6Ly9jcmJ1Zy5jb20vMTA3NDI4MlxuICAvLyBXZSdyZSBhdHRhY2hpbmcgYSBuby1vcCBpbiBub24tYmxvY2tpbmcgbW9kZSBzbyBpdCdzIHZlcnkgbGlnaHR3ZWlnaHQgYW5kIGZhc3QuXG4gIGlmICh1YS5jaHJvbWUgPj0gNzQgJiYgdWEuY2hyb21lIDw9IDkxKSB7XG4gICAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlU2VuZEhlYWRlcnMuYWRkTGlzdGVuZXIobm9vcCwgYXBpRmlsdGVyLCBbJ2V4dHJhSGVhZGVycyddKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFkZChyZXFJZCwgaGVhZGVycykge1xuICAgICAgLy8gbmVlZCB0byBzZXQgdGhlIGVudHJ5IGV2ZW4gaWYgaXQncyBlbXB0eSBbXSBzbyB0aGF0ICdpZicgY2hlY2sgaW4gZGVsKCkgcnVucyBvbmx5IG9uY2VcbiAgICAgIGhlYWRlcnNUb0luamVjdFtyZXFJZF0gPSBoZWFkZXJzO1xuICAgICAgLy8gbmVlZCB0aGUgbGlzdGVuZXIgdG8gZ2V0IHRoZSByZXF1ZXN0SWRcbiAgICAgIGFwaUV2ZW50czo6Zm9yRWFjaEVudHJ5KChbbmFtZSwgeyBsaXN0ZW5lciwgb3B0aW9ucyB9XSkgPT4ge1xuICAgICAgICBicm93c2VyLndlYlJlcXVlc3RbbmFtZV0uYWRkTGlzdGVuZXIobGlzdGVuZXIsIGFwaUZpbHRlciwgb3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlbChyZXFJZCkge1xuICAgICAgaWYgKHJlcUlkIGluIGhlYWRlcnNUb0luamVjdCkge1xuICAgICAgICBkZWxldGUgaGVhZGVyc1RvSW5qZWN0W3JlcUlkXTtcbiAgICAgICAgaWYgKGlzRW1wdHkoaGVhZGVyc1RvSW5qZWN0KSkge1xuICAgICAgICAgIGFwaUV2ZW50czo6Zm9yRWFjaEVudHJ5KChbbmFtZSwgeyBsaXN0ZW5lciB9XSkgPT4ge1xuICAgICAgICAgICAgYnJvd3Nlci53ZWJSZXF1ZXN0W25hbWVdLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG59KSgpO1xuXG4vKiAxTUIgdGFrZXMgfjIwbXMgdG8gZW5jb2RlL2RlY29kZSBzbyBpdCBkb2Vzbid0IGJsb2NrIHRoZSBwcm9jZXNzIG9mIHRoZSBleHRlbnNpb24gYW5kIHdlYiBwYWdlLFxuICogd2hpY2ggbGV0cyB1cyBhbmQgdGhlbSBiZSByZXNwb25zaXZlIHRvIG90aGVyIGV2ZW50cyBvciB1c2VyIGlucHV0LiAqL1xuY29uc3QgQ0hVTktfU0laRSA9IDFlNjtcblxuYXN5bmMgZnVuY3Rpb24gYmxvYjJjaHVuayhyZXNwb25zZSwgaW5kZXgpIHtcbiAgcmV0dXJuIGJsb2IyYmFzZTY0KHJlc3BvbnNlLCBpbmRleCAqIENIVU5LX1NJWkUsIENIVU5LX1NJWkUpO1xufVxuXG5mdW5jdGlvbiBibG9iMm9iamVjdFVybChyZXNwb25zZSkge1xuICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJlc3BvbnNlKTtcbiAgY2FjaGUucHV0KGB4aHJCbG9iOiR7dXJsfWAsIHNldFRpbWVvdXQoY29tbWFuZHMuUmV2b2tlQmxvYiwgNjBlMywgdXJsKSwgNjFlMyk7XG4gIHJldHVybiB1cmw7XG59XG5cbi8qKiBAcGFyYW0ge1ZNSHR0cFJlcXVlc3R9IHJlcSAqL1xuZnVuY3Rpb24geGhyQ2FsbGJhY2tXcmFwcGVyKHJlcSkge1xuICBsZXQgbGFzdFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgbGV0IGNvbnRlbnRUeXBlO1xuICBsZXQgZGF0YVNpemU7XG4gIGxldCBudW1DaHVua3M7XG4gIGxldCByZXNwb25zZTtcbiAgbGV0IHJlc3BvbnNlVGV4dDtcbiAgbGV0IHJlc3BvbnNlSGVhZGVycztcbiAgbGV0IHNlbnQgPSBmYWxzZTtcbiAgY29uc3QgeyBpZCwgYmxvYmJlZCwgY2h1bmtlZCwgeGhyIH0gPSByZXE7XG4gIC8vIENocm9tZSBlbmNvZGVzIG1lc3NhZ2VzIHRvIFVURjggc28gdGhleSBjYW4gZ3JvdyB1cCB0byA0eCBidXQgNjRNQiBpcyB0aGUgbWVzc2FnZSBzaXplIGxpbWl0XG4gIGNvbnN0IGdldENodW5rID0gYmxvYmJlZCAmJiBibG9iMm9iamVjdFVybCB8fCBjaHVua2VkICYmIGJsb2IyY2h1bms7XG4gIGNvbnN0IGdldFJlc3BvbnNlSGVhZGVycyA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gcmVxLnJlc3BvbnNlSGVhZGVycyB8fCB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7XG4gICAgaWYgKHJlc3BvbnNlSGVhZGVycyAhPT0gaGVhZGVycykge1xuICAgICAgcmVzcG9uc2VIZWFkZXJzID0gaGVhZGVycztcbiAgICAgIHJldHVybiB7IHJlc3BvbnNlSGVhZGVycyB9O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChldnQpID0+IHtcbiAgICBjb25zdCB0eXBlID0gZXZ0LnR5cGU7XG4gICAgaWYgKCFjb250ZW50VHlwZSkge1xuICAgICAgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpIHx8ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgIH1cbiAgICBpZiAoeGhyLnJlc3BvbnNlICE9PSByZXNwb25zZSkge1xuICAgICAgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2U7XG4gICAgICBzZW50ID0gZmFsc2U7XG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICBpZiAocmVzcG9uc2VUZXh0ID09PSByZXNwb25zZSkgcmVzcG9uc2VUZXh0ID0gWydzYW1lJ107XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlnbm9yZSBpZiByZXNwb25zZVRleHQgaXMgdW5yZWFjaGFibGVcbiAgICAgIH1cbiAgICAgIGlmICgoYmxvYmJlZCB8fCBjaHVua2VkKSAmJiByZXNwb25zZSkge1xuICAgICAgICBkYXRhU2l6ZSA9IHJlc3BvbnNlLnNpemU7XG4gICAgICAgIG51bUNodW5rcyA9IGNodW5rZWQgJiYgTWF0aC5jZWlsKGRhdGFTaXplIC8gQ0hVTktfU0laRSkgfHwgMTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkTm90aWZ5ID0gcmVxLmV2ZW50c1RvTm90aWZ5LmluY2x1ZGVzKHR5cGUpO1xuICAgIC8vIG9ubHkgc2VuZCByZXNwb25zZSB3aGVuIFhIUiBpcyBjb21wbGV0ZVxuICAgIGNvbnN0IHNob3VsZFNlbmRSZXNwb25zZSA9IHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHNob3VsZE5vdGlmeSAmJiAhc2VudDtcbiAgICBsYXN0UHJvbWlzZSA9IGxhc3RQcm9taXNlLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgcmVxLmNiKHtcbiAgICAgICAgYmxvYmJlZCxcbiAgICAgICAgY2h1bmtlZCxcbiAgICAgICAgY29udGVudFR5cGUsXG4gICAgICAgIGRhdGFTaXplLFxuICAgICAgICBpZCxcbiAgICAgICAgbnVtQ2h1bmtzLFxuICAgICAgICB0eXBlLFxuICAgICAgICBkYXRhOiBzaG91bGROb3RpZnkgJiYge1xuICAgICAgICAgIGZpbmFsVXJsOiB4aHIucmVzcG9uc2VVUkwsXG4gICAgICAgICAgLi4uZ2V0UmVzcG9uc2VIZWFkZXJzKCksXG4gICAgICAgICAgLi4ub2JqZWN0UGljayh4aHIsIFsncmVhZHlTdGF0ZScsICdzdGF0dXMnLCAnc3RhdHVzVGV4dCddKSxcbiAgICAgICAgICAuLi4oJ2xvYWRlZCcgaW4gZXZ0KSAmJiBvYmplY3RQaWNrKGV2dCwgWydsZW5ndGhDb21wdXRhYmxlJywgJ2xvYWRlZCcsICd0b3RhbCddKSxcbiAgICAgICAgICByZXNwb25zZTogc2hvdWxkU2VuZFJlc3BvbnNlXG4gICAgICAgICAgICA/IG51bUNodW5rcyAmJiBhd2FpdCBnZXRDaHVuayhyZXNwb25zZSwgMCkgfHwgcmVzcG9uc2VcbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICByZXNwb25zZVRleHQ6IHNob3VsZFNlbmRSZXNwb25zZVxuICAgICAgICAgICAgPyByZXNwb25zZVRleHRcbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHNob3VsZFNlbmRSZXNwb25zZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bUNodW5rczsgaSArPSAxKSB7XG4gICAgICAgICAgYXdhaXQgcmVxLmNiKHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgY2h1bms6IHtcbiAgICAgICAgICAgICAgcG9zOiBpICogQ0hVTktfU0laRSxcbiAgICAgICAgICAgICAgZGF0YTogYXdhaXQgZ2V0Q2h1bmsocmVzcG9uc2UsIGkpLFxuICAgICAgICAgICAgICBsYXN0OiBpICsgMSA9PT0gbnVtQ2h1bmtzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdsb2FkZW5kJykge1xuICAgICAgICBjbGVhclJlcXVlc3QocmVxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNTcGVjaWFsSGVhZGVyKGxvd2VySGVhZGVyKSB7XG4gIHJldHVybiBzcGVjaWFsSGVhZGVycy5pbmNsdWRlcyhsb3dlckhlYWRlcilcbiAgICB8fCBsb3dlckhlYWRlci5zdGFydHNXaXRoKCdwcm94eS0nKVxuICAgIHx8IGxvd2VySGVhZGVyLnN0YXJ0c1dpdGgoJ3NlYy0nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQHBhcmFtIHtjaHJvbWUucnVudGltZS5NZXNzYWdlU2VuZGVyIHwgYnJvd3Nlci5ydW50aW1lLk1lc3NhZ2VTZW5kZXJ9IHNyY1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2JcbiAqL1xuYXN5bmMgZnVuY3Rpb24gaHR0cFJlcXVlc3Qob3B0cywgc3JjLCBjYikge1xuICBjb25zdCB7IHRhYiB9ID0gc3JjO1xuICBjb25zdCB7IGluY29nbml0byB9ID0gdGFiO1xuICBjb25zdCB7IGFub255bW91cywgaWQsIG92ZXJyaWRlTWltZVR5cGUsIHhoclR5cGUsIHVybCB9ID0gb3B0cztcbiAgY29uc3QgcmVxID0gcmVxdWVzdHNbaWRdO1xuICBpZiAoIXJlcSB8fCByZXEuY2IpIHJldHVybjtcbiAgcmVxLmNiID0gY2I7XG4gIHJlcS5hbm9ueW1vdXMgPSBhbm9ueW1vdXM7XG4gIGNvbnN0IHsgeGhyIH0gPSByZXE7XG4gIGNvbnN0IHZtSGVhZGVycyA9IFtdO1xuICAvLyBGaXJlZm94IGNhbiBzZW5kIEJsb2IvQXJyYXlCdWZmZXIgZGlyZWN0bHlcbiAgY29uc3QgY2h1bmtlZCA9ICFJU19GSVJFRk9YICYmIGluY29nbml0bztcbiAgY29uc3QgYmxvYmJlZCA9IHhoclR5cGUgJiYgIUlTX0ZJUkVGT1ggJiYgIWluY29nbml0bztcbiAgY29uc3QgW2JvZHksIGNvbnRlbnRUeXBlXSA9IGRlY29kZUJvZHkob3B0cy5kYXRhKTtcbiAgLy8gQ2hyb21lIGNhbid0IGZldGNoIEJsb2IgVVJMIGluIGluY29nbml0byBzbyB3ZSB1c2UgY2h1bmtzXG4gIHJlcS5ibG9iYmVkID0gYmxvYmJlZDtcbiAgcmVxLmNodW5rZWQgPSBjaHVua2VkO1xuICAvLyBGaXJlZm94IGRvZXNuJ3Qgc2VuZCBjb29raWVzLCBodHRwczovL2dpdGh1Yi5jb20vdmlvbGVudG1vbmtleS92aW9sZW50bW9ua2V5L2lzc3Vlcy82MDZcbiAgLy8gQm90aCBDaHJvbWUgJiBGRiBuZWVkIGV4cGxpY2l0IHJvdXRpbmcgb2YgY29va2llcyBpbiBjb250YWluZXJzIG9yIGluY29nbml0b1xuICBsZXQgc2hvdWxkU2VuZENvb2tpZXMgPSAhYW5vbnltb3VzICYmIChpbmNvZ25pdG8gfHwgSVNfRklSRUZPWCk7XG4gIHhoci5vcGVuKG9wdHMubWV0aG9kIHx8ICdHRVQnLCB1cmwsIHRydWUsIG9wdHMudXNlciB8fCAnJywgb3B0cy5wYXNzd29yZCB8fCAnJyk7XG4gIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFZNX1ZFUklGWSwgaWQpO1xuICBpZiAoY29udGVudFR5cGUpIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG4gIG9wdHMuaGVhZGVyczo6Zm9yRWFjaEVudHJ5KChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChpc1NwZWNpYWxIZWFkZXIobG93ZXJOYW1lKSkge1xuICAgICAgdm1IZWFkZXJzLnB1c2goeyBuYW1lLCB2YWx1ZSB9KTtcbiAgICB9IGVsc2UgaWYgKCFsb3dlck5hbWUuc3RhcnRzV2l0aCgndm0tJykpIHtcbiAgICAgIC8vIGBWTS1gIGhlYWRlcnMgYXJlIHJlc2VydmVkXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIGlmIChsb3dlck5hbWUgPT09ICdjb29raWUnKSB7XG4gICAgICBzaG91bGRTZW5kQ29va2llcyA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIHhoci5yZXNwb25zZVR5cGUgPSAoY2h1bmtlZCB8fCBibG9iYmVkKSAmJiAnYmxvYicgfHwgeGhyVHlwZSB8fCAndGV4dCc7XG4gIHhoci50aW1lb3V0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMHg3RkZGX0ZGRkYsIG9wdHMudGltZW91dCkpIHx8IDA7XG4gIGlmIChvdmVycmlkZU1pbWVUeXBlKSB4aHIub3ZlcnJpZGVNaW1lVHlwZShvdmVycmlkZU1pbWVUeXBlKTtcbiAgaWYgKHNob3VsZFNlbmRDb29raWVzKSB7XG4gICAgcmVxLm5vTmF0aXZlQ29va2llID0gdHJ1ZTtcbiAgICBmb3IgKGNvbnN0IHN0b3JlIG9mIGF3YWl0IGJyb3dzZXIuY29va2llcy5nZXRBbGxDb29raWVTdG9yZXMoKSkge1xuICAgICAgaWYgKHN0b3JlLnRhYklkcy5pbmNsdWRlcyh0YWIuaWQpKSB7XG4gICAgICAgIGlmIChJU19GSVJFRk9YID8gc3RvcmUuaWQgIT09ICdmaXJlZm94LWRlZmF1bHQnIDogc3RvcmUuaWQgIT09ICcwJykge1xuICAgICAgICAgIC8qIENvb2tpZSByb3V0aW5nLiBGb3IgdGhlIG1haW4gc3RvcmUgd2UgcmVseSBvbiB0aGUgYnJvd3Nlci5cbiAgICAgICAgICAgKiBUaGUgaWRzIGFyZSBoYXJkLWNvZGVkIGFzIGBzdG9yZXNgIG1heSBvbWl0IHRoZSBtYWluIHN0b3JlIGlmIG5vIHN1Y2ggdGFicyBhcmUgb3Blbi4gKi9cbiAgICAgICAgICByZXEuc3RvcmVJZCA9IHN0b3JlLmlkO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICBjb25zdCBjb29raWVzID0gKGF3YWl0IGJyb3dzZXIuY29va2llcy5nZXRBbGwoe1xuICAgICAgdXJsLFxuICAgICAgc3RvcmVJZDogcmVxLnN0b3JlSWQsXG4gICAgICAuLi51YS5maXJlZm94ID49IDU5ICYmIHsgZmlyc3RQYXJ0eURvbWFpbjogbnVsbCB9LFxuICAgIH0pKS5maWx0ZXIoYyA9PiBjLnNlc3Npb24gfHwgYy5leHBpcmF0aW9uRGF0ZSA+IG5vdyk7IC8vIEZGIHJlcG9ydHMgZXhwaXJlZCBjb29raWVzIVxuICAgIGlmIChjb29raWVzLmxlbmd0aCkge1xuICAgICAgdm1IZWFkZXJzLnB1c2goe1xuICAgICAgICBuYW1lOiAnY29va2llJyxcbiAgICAgICAgdmFsdWU6IGNvb2tpZXMubWFwKGMgPT4gYCR7Yy5uYW1lfT0ke2MudmFsdWV9O2ApLmpvaW4oJyAnKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBIZWFkZXJJbmplY3Rvci5hZGQoaWQsIHZtSGVhZGVycyk7XG4gIGNvbnN0IGNhbGxiYWNrID0geGhyQ2FsbGJhY2tXcmFwcGVyKHJlcSk7XG4gIHJlcS5ldmVudHNUb05vdGlmeS5mb3JFYWNoKGV2dCA9PiB7IHhocltgb24ke2V2dH1gXSA9IGNhbGxiYWNrOyB9KTtcbiAgeGhyLm9ubG9hZGVuZCA9IGNhbGxiYWNrOyAvLyBhbHdheXMgc2VuZCBpdCBmb3IgdGhlIGludGVybmFsIGNsZWFudXBcbiAgeGhyLnNlbmQoYm9keSk7XG59XG5cbi8qKiBAcGFyYW0ge1ZNSHR0cFJlcXVlc3R9IHJlcSAqL1xuZnVuY3Rpb24gY2xlYXJSZXF1ZXN0KHJlcSkge1xuICBpZiAocmVxLmNvcmVJZCkgZGVsZXRlIHZlcmlmeVtyZXEuY29yZUlkXTtcbiAgZGVsZXRlIHJlcXVlc3RzW3JlcS5pZF07XG4gIGRlbGV0ZSAodGFiUmVxdWVzdHNbcmVxLnRhYklkXSB8fCB7fSlbcmVxLmlkXTtcbiAgSGVhZGVySW5qZWN0b3IuZGVsKHJlcS5pZCk7XG59XG5cbi8qKiBQb2x5ZmlsbCBmb3IgQ2hyb21lJ3MgaW5hYmlsaXR5IHRvIHNlbmQgY29tcGxleCB0eXBlcyBvdmVyIGV4dGVuc2lvbiBtZXNzYWdpbmcgKi9cbmZ1bmN0aW9uIGRlY29kZUJvZHkoW2JvZHksIHR5cGUsIHdhc0Jsb2JdKSB7XG4gIGlmICh0eXBlID09PSAncXVlcnknKSB7XG4gICAgdHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICB9IGVsc2UgaWYgKHR5cGUpIHtcbiAgICAvLyA1eCB0aW1lcyBmYXN0ZXIgdGhhbiBmZXRjaCgpIHdoaWNoIHdhc3RlcyB0aW1lIG9uIGludGVyLXByb2Nlc3MgY29tbXVuaWNhdGlvblxuICAgIGNvbnN0IHJlcyA9IHN0cmluZzJ1aW50OGFycmF5KGF0b2IoYm9keS5zbGljZShib2R5LmluZGV4T2YoJywnKSArIDEpKSk7XG4gICAgaWYgKCF3YXNCbG9iKSB7XG4gICAgICB0eXBlID0gYm9keS5tYXRjaCgvXmRhdGE6KC4rPyk7YmFzZTY0LylbMV0ucmVwbGFjZSgvKGJvdW5kYXJ5PSlbXjtdKy8sXG4gICAgICAgIC8vIHVzaW5nIGEgZnVuY3Rpb24gc28gaXQgcnVucyBvbmx5IGlmIFwiYm91bmRhcnlcIiB3YXMgZm91bmRcbiAgICAgICAgKF8sIHAxKSA9PiBwMSArIFN0cmluZy5mcm9tQ2hhckNvZGUoLi4ucmVzLnNsaWNlKDIsIHJlcy5pbmRleE9mKDEzKSkpKTtcbiAgICB9XG4gICAgYm9keSA9IHJlcztcbiAgfVxuICByZXR1cm4gW2JvZHksIHR5cGVdO1xufVxuXG4vLyBXYXRjaCBVUkwgcmVkaXJlY3RzXG4vLyBicm93c2VyLndlYlJlcXVlc3Qub25CZWZvcmVSZWRpcmVjdC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcbi8vICAgY29uc3QgcmVxSWQgPSB2ZXJpZnlbZGV0YWlscy5yZXF1ZXN0SWRdO1xuLy8gICBpZiAocmVxSWQpIHtcbi8vICAgICBjb25zdCByZXEgPSByZXF1ZXN0c1tyZXFJZF07XG4vLyAgICAgaWYgKHJlcSkgcmVxLmZpbmFsVXJsID0gZGV0YWlscy5yZWRpcmVjdFVybDtcbi8vICAgfVxuLy8gfSwge1xuLy8gICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbi8vICAgdHlwZXM6IFsneG1saHR0cHJlcXVlc3QnXSxcbi8vIH0pO1xuXG4vLyB0YXNrcyBhcmUgbm90IG5lY2Vzc2FyeSBub3csIHR1cm5lZCBvZmZcbi8vIFN0b3AgcmVkaXJlY3RzXG4vLyBicm93c2VyLndlYlJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWQuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XG4vLyAgIGNvbnN0IHRhc2sgPSB0YXNrc1tkZXRhaWxzLnJlcXVlc3RJZF07XG4vLyAgIGlmICh0YXNrKSB7XG4vLyAgICAgZGVsZXRlIHRhc2tzW2RldGFpbHMucmVxdWVzdElkXTtcbi8vICAgICBpZiAodGFzayA9PT0gJ0dldC1Mb2NhdGlvbicgJiYgWzMwMSwgMzAyLCAzMDNdLmluY2x1ZGVzKGRldGFpbHMuc3RhdHVzQ29kZSkpIHtcbi8vICAgICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZGV0YWlscy5yZXNwb25zZUhlYWRlcnMuZmluZChcbi8vICAgICAgICAgaGVhZGVyID0+IGhlYWRlci5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsb2NhdGlvbicpO1xuLy8gICAgICAgY29uc3QgYmFzZTY0ID0gbG9jYXRpb25IZWFkZXIgJiYgbG9jYXRpb25IZWFkZXIudmFsdWU7XG4vLyAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICByZWRpcmVjdFVybDogYGRhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCR7YmFzZTY0IHx8ICcnfWAsXG4vLyAgICAgICB9O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfSwge1xuLy8gICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbi8vICAgdHlwZXM6IFsneG1saHR0cHJlcXVlc3QnXSxcbi8vIH0sIFsnYmxvY2tpbmcnLCAncmVzcG9uc2VIZWFkZXJzJ10pO1xuLy8gYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQ29tcGxldGVkLmFkZExpc3RlbmVyKGRldGFpbHMgPT4ge1xuLy8gICBkZWxldGUgdGFza3NbZGV0YWlscy5yZXF1ZXN0SWRdO1xuLy8gfSwge1xuLy8gICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbi8vICAgdHlwZXM6IFsneG1saHR0cHJlcXVlc3QnXSxcbi8vIH0pO1xuLy8gYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uRXJyb3JPY2N1cnJlZC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcbi8vICAgZGVsZXRlIHRhc2tzW2RldGFpbHMucmVxdWVzdElkXTtcbi8vIH0sIHtcbi8vICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4vLyAgIHR5cGVzOiBbJ3htbGh0dHByZXF1ZXN0J10sXG4vLyB9KTtcblxuYXN5bmMgZnVuY3Rpb24gY29uZmlybUluc3RhbGwoeyBjb2RlLCBmcm9tLCB1cmwgfSwgeyB0YWIgPSB7fSB9KSB7XG4gIGlmICghY29kZSkgY29kZSA9IChhd2FpdCByZXF1ZXN0KHVybCkpLmRhdGE7XG4gIC8vIFRPRE86IGRpc3BsYXkgdGhlIGVycm9yIGluIFVJXG4gIGlmICghaXNVc2VyU2NyaXB0KGNvZGUpKSB0aHJvdyBpMThuKCdtc2dJbnZhbGlkU2NyaXB0Jyk7XG4gIGNhY2hlLnB1dCh1cmwsIGNvZGUsIDMwMDApO1xuICBjb25zdCBjb25maXJtS2V5ID0gZ2V0VW5pcUlkKCk7XG4gIGNvbnN0IHsgYWN0aXZlLCBpZDogdGFiSWQsIGluY29nbml0byB9ID0gdGFiO1xuICAvLyBOb3QgdGVzdGluZyB0YWIucGVuZGluZ1VybCBiZWNhdXNlIGl0IHdpbGwgYmUgYWx3YXlzIGVxdWFsIHRvIGB1cmxgXG4gIGNvbnN0IGNhblJlcGxhY2VDdXJUYWIgPSAoIWluY29nbml0byB8fCBJU19GSVJFRk9YKSAmJiAoXG4gICAgdXJsID09PSBmcm9tXG4gICAgfHwgY2FjaGUuaGFzKGBhdXRvY2xvc2U6JHt0YWJJZH1gKVxuICAgIHx8IC9eKGNocm9tZTpcXC9cXC8obmV3dGFifHN0YXJ0cGFnZSlcXC98YWJvdXQ6KGhvbWV8bmV3dGFiKSkkLy50ZXN0KGZyb20pKTtcbiAgLyoqIEBuYW1lc3BhY2UgVk1Db25maXJtQ2FjaGUgKi9cbiAgY2FjaGUucHV0KGBjb25maXJtLSR7Y29uZmlybUtleX1gLCB7IGluY29nbml0bywgdXJsLCBmcm9tLCB0YWJJZCwgZmY6IHVhLmZpcmVmb3ggfSk7XG4gIGNvbnN0IGNvbmZpcm1VcmwgPSBDT05GSVJNX1VSTF9CQVNFICsgY29uZmlybUtleTtcbiAgY29uc3QgeyB3aW5kb3dJZCB9ID0gY2FuUmVwbGFjZUN1clRhYlxuICAgID8gYXdhaXQgYnJvd3Nlci50YWJzLnVwZGF0ZSh0YWJJZCwgeyB1cmw6IGNvbmZpcm1VcmwgfSlcbiAgICA6IGF3YWl0IGNvbW1hbmRzLlRhYk9wZW4oeyB1cmw6IGNvbmZpcm1VcmwsIGFjdGl2ZTogISFhY3RpdmUgfSwgeyB0YWIgfSk7XG4gIGlmIChhY3RpdmUgJiYgd2luZG93SWQgIT09IHRhYi53aW5kb3dJZCkge1xuICAgIGF3YWl0IGJyb3dzZXIud2luZG93cy51cGRhdGUod2luZG93SWQsIHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgfVxufVxuXG5jb25zdCB3aGl0ZWxpc3RSZSA9IG5ldyBSZWdFeHAoYF5odHRwczovLygke1xuICBbXG4gICAgJ2dyZWFzeWZvcmtcXFxcLm9yZy9zY3JpcHRzLyUvY29kZS8nLFxuICAgICdvcGVudXNlcmpzXFxcXC5vcmcvaW5zdGFsbC8lLycsXG4gICAgJ2dpdGh1YlxcXFwuY29tLyUvJS9yYXcvJS8nLFxuICAgICdnaXRodWJcXFxcLmNvbS8lLyUvcmVsZWFzZXMvJS9kb3dubG9hZC8nLFxuICAgICdyYXdcXFxcLmdpdGh1YnVzZXJjb250ZW50XFxcXC5jb20oLyUpezN9LycsXG4gICAgJ2dpc3RcXFxcLmdpdGh1YlxcXFwuY29tLy4qPy8nLFxuICBdLmpvaW4oJ3wnKVxufSklP1xcXFwudXNlclxcXFwuanMoWz8jXXwkKWAucmVwbGFjZSgvJS9nLCAnW14vXSonKSk7XG5cbmNvbnN0IGJsYWNrbGlzdFJlID0gbmV3IFJlZ0V4cChgXmh0dHBzOi8vKCR7XG4gIFtcbiAgICAnKGdpc3RcXFxcLik/Z2l0aHViXFxcXC5jb20nLFxuICAgICdncmVhc3lmb3JrXFxcXC5vcmcnLFxuICAgICdvcGVudXNlcmpzXFxcXC5vcmcnLFxuICBdLmpvaW4oJ3wnKVxufSkvYCk7XG5cbmNvbnN0IHJlc29sdmVWaXJ0dWFsVXJsID0gdXJsID0+IChcbiAgYCR7ZXh0ZW5zaW9uUm9vdH1vcHRpb25zL2luZGV4Lmh0bWwjc2NyaXB0cy8keyt1cmwuc3BsaXQoJyMnKVsxXX1gXG4pO1xuLy8gRkYgY2FuJ3QgaW50ZXJjZXB0IHZpcnR1YWwgLnVzZXIuanMgVVJMIHZpYSB3ZWJSZXF1ZXN0LCBzbyB3ZSByZWRpcmVjdCBpdCBleHBsaWNpdGx5XG5jb25zdCB2aXJ0dWFsVXJsUmUgPSBJU19GSVJFRk9YICYmIG5ldyBSZWdFeHAoKFxuICBgXih2aWV3LXNvdXJjZTopPygke2V4dGVuc2lvblJvb3QucmVwbGFjZSgnOi8vJywgJyQmKT8nKX1bXi9dKlxcXFwudXNlclxcXFwuanMjXFxcXGQrYFxuKSk7XG5jb25zdCBtYXliZVJlZGlyZWN0VmlydHVhbFVybEZGID0gdmlydHVhbFVybFJlICYmICgodGFiSWQsIHNyYykgPT4ge1xuICBpZiAodmlydHVhbFVybFJlLnRlc3Qoc3JjKSkge1xuICAgIGJyb3dzZXIudGFicy51cGRhdGUodGFiSWQsIHsgdXJsOiByZXNvbHZlVmlydHVhbFVybChzcmMpIH0pO1xuICB9XG59KTtcbmlmICh2aXJ0dWFsVXJsUmUpIHtcbiAgY29uc3QgbGlzdGVuZXIgPSAodGFiSWQsIHsgdXJsIH0pID0+IHVybCAmJiBtYXliZVJlZGlyZWN0VmlydHVhbFVybEZGKHRhYklkLCB1cmwpO1xuICBjb25zdCBhcGlFdmVudCA9IGJyb3dzZXIudGFicy5vblVwZGF0ZWQ7XG4gIGNvbnN0IGFkZExpc3RlbmVyID0gYXBpRXZlbnQuYWRkTGlzdGVuZXIuYmluZChhcGlFdmVudCwgbGlzdGVuZXIpO1xuICB0cnkgeyBhZGRMaXN0ZW5lcih7IHByb3BlcnRpZXM6IFsndXJsJ10gfSk7IH0gY2F0Y2ggKGUpIHsgYWRkTGlzdGVuZXIoKTsgfVxufVxuXG5icm93c2VyLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcbiAgY29uc3QgeyBpZCwgdGl0bGUsIHVybCB9ID0gdGFiO1xuICAvKiBEZXRlcm1pbmluZyBpZiB0aGlzIHRhYiBjYW4gYmUgYXV0by1jbG9zZWQgKHJlcGxhY2VkLCBhY3R1YWxseSkuXG4gICAgIEZGPj02OCBhbGxvd3MgcmVhZGluZyBmaWxlOiBVUkwgb25seSBpbiB0aGUgdGFiJ3MgY29udGVudCBzY3JpcHQgc28gdGhlIHRhYiBtdXN0IHN0YXkgb3Blbi4gKi9cbiAgaWYgKCghdXJsLnN0YXJ0c1dpdGgoJ2ZpbGU6JykgfHwgdWEuZmlyZWZveCA8IDY4KVxuICAgICAgJiYgL1xcLnVzZXJcXC5qcyhbPyNdfCQpLy50ZXN0KHRhYi5wZW5kaW5nVXJsIHx8IHVybCkpIHtcbiAgICBjYWNoZS5wdXQoYGF1dG9jbG9zZToke2lkfWAsIHRydWUsIDEwZTMpO1xuICB9XG4gIGlmICh2aXJ0dWFsVXJsUmUgJiYgdXJsID09PSAnYWJvdXQ6YmxhbmsnKSB7XG4gICAgbWF5YmVSZWRpcmVjdFZpcnR1YWxVcmxGRihpZCwgdGl0bGUpO1xuICB9XG59KTtcblxuYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcigocmVxKSA9PiB7XG4gIGNvbnN0IHsgbWV0aG9kLCB0YWJJZCwgdXJsIH0gPSByZXE7XG4gIGlmIChtZXRob2QgIT09ICdHRVQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIG9wZW4gYSByZWFsIFVSTCBmb3Igc2ltcGxpZmllZCB1c2Vyc2NyaXB0IFVSTCBsaXN0ZWQgaW4gZGV2dG9vbHMgb2YgdGhlIHdlYiBwYWdlXG4gIGlmICh1cmwuc3RhcnRzV2l0aChleHRlbnNpb25Sb290KSkge1xuICAgIHJldHVybiB7IHJlZGlyZWN0VXJsOiByZXNvbHZlVmlydHVhbFVybCh1cmwpIH07XG4gIH1cbiAgaWYgKCFjYWNoZS5oYXMoYGJ5cGFzczoke3VybH1gKVxuICAmJiAoIWJsYWNrbGlzdFJlLnRlc3QodXJsKSB8fCB3aGl0ZWxpc3RSZS50ZXN0KHVybCkpKSB7XG4gICAgbWF5YmVJbnN0YWxsVXNlckpzKHRhYklkLCB1cmwpO1xuICAgIHJldHVybiB7IHJlZGlyZWN0VXJsOiAnamF2YXNjcmlwdDp2b2lkIDAnIH07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICB9XG59LCB7XG4gIHVybHM6IFtcbiAgICAvLyAxLiAqOi8vIGNvbXByaXNlcyBvbmx5IGh0dHAvaHR0cHNcbiAgICAvLyAyLiB0aGUgQVBJIGlnbm9yZXMgI2hhc2ggcGFydFxuICAgIC8vIDMuIEZpcmVmb3g6IG9uQmVmb3JlUmVxdWVzdCBkb2VzIG5vdCB3b3JrIHdpdGggZmlsZTovLyBvciBtb3otZXh0ZW5zaW9uOi8vXG4gICAgJyo6Ly8qLyoudXNlci5qcycsXG4gICAgJyo6Ly8qLyoudXNlci5qcz8qJyxcbiAgICAnZmlsZTovLyovKi51c2VyLmpzJyxcbiAgICAnZmlsZTovLyovKi51c2VyLmpzPyonLFxuICAgIGAke2V4dGVuc2lvblJvb3R9Ki51c2VyLmpzYCxcbiAgXSxcbiAgdHlwZXM6IFsnbWFpbl9mcmFtZSddLFxufSwgWydibG9ja2luZyddKTtcblxuYXN5bmMgZnVuY3Rpb24gbWF5YmVJbnN0YWxsVXNlckpzKHRhYklkLCB1cmwpIHtcbiAgY29uc3QgeyBkYXRhOiBjb2RlIH0gPSBhd2FpdCByZXF1ZXN0KHVybCkuY2F0Y2gobm9vcCkgfHwge307XG4gIGlmIChjb2RlICYmIHBhcnNlTWV0YShjb2RlKS5uYW1lKSB7XG4gICAgY29uc3QgdGFiID0gdGFiSWQgPj0gMCAmJiBhd2FpdCBicm93c2VyLnRhYnMuZ2V0KHRhYklkKSB8fCB7fTtcbiAgICBjb25maXJtSW5zdGFsbCh7IGNvZGUsIHVybCwgZnJvbTogdGFiLnVybCB9LCB7IHRhYiB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYWNoZS5wdXQoYGJ5cGFzczoke3VybH1gLCB0cnVlLCAxMGUzKTtcbiAgICBpZiAodGFiSWQgPj0gMCkgYnJvd3Nlci50YWJzLnVwZGF0ZSh0YWJJZCwgeyB1cmwgfSk7XG4gIH1cbn1cblxuLy8gSW4gRmlyZWZveCB3aXRoIHByb2R1Y3Rpb24gY29kZSBvZiBWaW9sZW50bW9ua2V5LCBzY3JpcHRzIGNhbiBiZSBpbmplY3RlZCBiZWZvcmUgYHRhYnMub25VcGRhdGVkYCBpcyBmaXJlZC5cbi8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Zpb2xlbnRtb25rZXkvdmlvbGVudG1vbmtleS9pc3N1ZXMvMTI1NVxuXG5icm93c2VyLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKCh0YWJJZCkgPT4ge1xuICBjbGVhclJlcXVlc3RzQnlUYWJJZCh0YWJJZCk7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUmVxdWVzdHNCeVRhYklkKHRhYklkKSB7XG4gIGNvbnN0IHNldCA9IHRhYlJlcXVlc3RzW3RhYklkXTtcbiAgaWYgKHNldCkge1xuICAgIGRlbGV0ZSB0YWJSZXF1ZXN0c1t0YWJJZF07XG4gICAgc2V0Ojpmb3JFYWNoRW50cnkoKFtpZF0pID0+IGNvbW1hbmRzLkFib3J0UmVxdWVzdChpZCkpO1xuICB9XG59XG5cbi8qKlxuICogSW1pdGF0aW5nIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9nZXRBbGxSZXNwb25zZUhlYWRlcnNcbiAqIFBlciB0aGUgc3BlY2lmaWNhdGlvbiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCB0aGUgaGVhZGVyIG5hbWUgaXMgd2l0aGluIEFTQ0lJLFxuICogYnV0IHdlJ2xsIHRyeSBlbmNvZGluZyBpdCwgaWYgbmVjZXNzYXJ5LCB0byBoYW5kbGUgaW52YWxpZCBzZXJ2ZXIgcmVzcG9uc2VzLlxuICovXG5mdW5jdGlvbiBlbmNvZGVXZWJSZXF1ZXN0SGVhZGVyKHsgbmFtZSwgdmFsdWUsIGJpbmFyeVZhbHVlIH0pIHtcbiAgcmV0dXJuIGAke3N0cmluZzJieXRlU3RyaW5nKG5hbWUpfTogJHtcbiAgICBiaW5hcnlWYWx1ZVxuICAgICAgPyBidWZmZXIyc3RyaW5nKGJpbmFyeVZhbHVlKVxuICAgICAgOiBzdHJpbmcyYnl0ZVN0cmluZyh2YWx1ZSlcbiAgfVxcclxcbmA7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIFVURjgtZW5jb2RlZCBiaW5hcnkgc3RyaW5nIGkuZS4gb25lIGJ5dGUgcGVyIGNoYXJhY3Rlci5cbiAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHN0cmluZyBpbiBjYXNlIGl0IHdhcyBhbHJlYWR5IHdpdGhpbiBBU0NJSS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nMmJ5dGVTdHJpbmcoc3RyKSB7XG4gIGlmICghL1tcXHUwMDgwLVxcdUZGRkZdLy50ZXN0KHN0cikpIHJldHVybiBzdHI7XG4gIGlmICghZW5jb2RlcikgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICByZXR1cm4gYnVmZmVyMnN0cmluZyhlbmNvZGVyLmVuY29kZShzdHIpKTtcbn1cblxuLyoqIEB0eXBlZGVmIHt7XG4gIGFub255bW91czogYm9vbGVhblxuICBibG9iYmVkOiBib29sZWFuXG4gIGNiOiBmdW5jdGlvbihPYmplY3QpXG4gIGNodW5rZWQ6IGJvb2xlYW5cbiAgY29yZUlkOiBudW1iZXJcbiAgZXZlbnRzVG9Ob3RpZnk6IHN0cmluZ1tdXG4gIGlkOiBudW1iZXJcbiAgbm9OYXRpdmVDb29raWU6IGJvb2xlYW5cbiAgcmVzcG9uc2VIZWFkZXJzOiBzdHJpbmdcbiAgc3RvcmVJZDogc3RyaW5nXG4gIHRhYklkOiBudW1iZXJcbiAgeGhyOiBYTUxIdHRwUmVxdWVzdFxufX0gVk1IdHRwUmVxdWVzdCAqL1xuIiwiaW1wb3J0IHsgZ2V0VW5pcUlkLCBlbmNvZGVGaWxlbmFtZSB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IE1FVEFCTE9DS19SRSB9IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQgeyBtYXBFbnRyeSB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyBnZXRPcHRpb24gfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKiBAcmV0dXJuIHtzdHJpbmd9ICovXG4gIENhY2hlTmV3U2NyaXB0KGRhdGEpIHtcbiAgICBjb25zdCBpZCA9IGdldFVuaXFJZCgpO1xuICAgIGNhY2hlLnB1dChgbmV3LSR7aWR9YCwgbmV3U2NyaXB0KGRhdGEpKTtcbiAgICByZXR1cm4gaWQ7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtWTVNjcmlwdH0gKi9cbiAgTmV3U2NyaXB0KGlkKSB7XG4gICAgcmV0dXJuIGlkICYmIGNhY2hlLmdldChgbmV3LSR7aWR9YCkgfHwgbmV3U2NyaXB0KCk7XG4gIH0sXG4gIFBhcnNlTWV0YTogcGFyc2VNZXRhLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VzZXJTY3JpcHQodGV4dCkge1xuICBpZiAoL15cXHMqPC8udGVzdCh0ZXh0KSkgcmV0dXJuIGZhbHNlOyAvLyBIVE1MXG4gIGlmICh0ZXh0LmluZGV4T2YoJy8vID09VXNlclNjcmlwdD09JykgPCAwKSByZXR1cm4gZmFsc2U7IC8vIExhY2sgb2YgbWV0YSBibG9ja1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgYXJyYXlUeXBlID0ge1xuICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgdHJhbnNmb3JtOiAocmVzLCB2YWwpID0+IHtcbiAgICByZXMucHVzaCh2YWwpO1xuICAgIHJldHVybiByZXM7XG4gIH0sXG59O1xuY29uc3QgZGVmYXVsdFR5cGUgPSB7XG4gIGRlZmF1bHQ6ICgpID0+IG51bGwsXG4gIHRyYW5zZm9ybTogKHJlcywgdmFsKSA9PiAocmVzID09IG51bGwgPyB2YWwgOiByZXMpLFxufTtcbmNvbnN0IG1ldGFUeXBlcyA9IHtcbiAgaW5jbHVkZTogYXJyYXlUeXBlLFxuICBleGNsdWRlOiBhcnJheVR5cGUsXG4gIG1hdGNoOiBhcnJheVR5cGUsXG4gIGV4Y2x1ZGVNYXRjaDogYXJyYXlUeXBlLFxuICByZXF1aXJlOiBhcnJheVR5cGUsXG4gIHJlc291cmNlOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKHt9KSxcbiAgICB0cmFuc2Zvcm06IChyZXMsIHZhbCkgPT4ge1xuICAgICAgY29uc3QgcGFpciA9IHZhbC5tYXRjaCgvXihcXHdcXFMqKVxccysoLiopLyk7XG4gICAgICBpZiAocGFpcikgcmVzW3BhaXJbMV1dID0gcGFpclsyXTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSxcbiAgfSxcbiAgZ3JhbnQ6IGFycmF5VHlwZSxcbiAgbm9mcmFtZXM6IHtcbiAgICBkZWZhdWx0OiAoKSA9PiBmYWxzZSxcbiAgICB0cmFuc2Zvcm06ICgpID0+IHRydWUsXG4gIH0sXG59O1xuY29uc3QgbWV0YU9wdGlvbmFsVHlwZXMgPSB7XG4gIGFudGlmZWF0dXJlOiBhcnJheVR5cGUsXG4gIGNvbXBhdGlibGU6IGFycmF5VHlwZSxcbiAgY29ubmVjdDogYXJyYXlUeXBlLFxufTtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1ldGEoY29kZSkge1xuICAvLyBpbml0aWFsaXplIG1ldGFcbiAgY29uc3QgbWV0YSA9IG1ldGFUeXBlczo6bWFwRW50cnkoKFssIHZhbHVlXSkgPT4gdmFsdWUuZGVmYXVsdCgpKTtcbiAgY29uc3QgbWV0YUJvZHkgPSBjb2RlLm1hdGNoKE1FVEFCTE9DS19SRSlbMV0gfHwgJyc7XG4gIG1ldGFCb2R5LnJlcGxhY2UoLyg/Ol58XFxuKVxccypcXC9cXC9cXHgyMChAXFxTKykoLiopL2csIChfbWF0Y2gsIHJhd0tleSwgcmF3VmFsdWUpID0+IHtcbiAgICBjb25zdCBba2V5TmFtZSwgbG9jYWxlXSA9IHJhd0tleS5zbGljZSgxKS5zcGxpdCgnOicpO1xuICAgIGNvbnN0IGNhbWVsS2V5ID0ga2V5TmFtZS5yZXBsYWNlKC9bLV9dKFxcdykvZywgKG0sIGcpID0+IGcudG9VcHBlckNhc2UoKSk7XG4gICAgY29uc3Qga2V5ID0gbG9jYWxlID8gYCR7Y2FtZWxLZXl9OiR7bG9jYWxlLnRvTG93ZXJDYXNlKCl9YCA6IGNhbWVsS2V5O1xuICAgIGNvbnN0IHZhbCA9IHJhd1ZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBtZXRhVHlwZSA9IG1ldGFUeXBlc1trZXldIHx8IG1ldGFPcHRpb25hbFR5cGVzW2tleV0gfHwgZGVmYXVsdFR5cGU7XG4gICAgbGV0IG9sZFZhbHVlID0gbWV0YVtrZXldO1xuICAgIGlmICh0eXBlb2Ygb2xkVmFsdWUgPT09ICd1bmRlZmluZWQnKSBvbGRWYWx1ZSA9IG1ldGFUeXBlLmRlZmF1bHQoKTtcbiAgICBtZXRhW2tleV0gPSBtZXRhVHlwZS50cmFuc2Zvcm0ob2xkVmFsdWUsIHZhbCk7XG4gIH0pO1xuICBtZXRhLnJlc291cmNlcyA9IG1ldGEucmVzb3VyY2U7XG4gIGRlbGV0ZSBtZXRhLnJlc291cmNlO1xuICAvLyBAaG9tZXBhZ2VVUkw6IGNvbXBhdGlibGUgd2l0aCBAaG9tZXBhZ2VcbiAgaWYgKCFtZXRhLmhvbWVwYWdlVVJMICYmIG1ldGEuaG9tZXBhZ2UpIG1ldGEuaG9tZXBhZ2VVUkwgPSBtZXRhLmhvbWVwYWdlO1xuICByZXR1cm4gbWV0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRDdXN0b20oKSB7XG4gIHJldHVybiB7XG4gICAgb3JpZ0luY2x1ZGU6IHRydWUsXG4gICAgb3JpZ0V4Y2x1ZGU6IHRydWUsXG4gICAgb3JpZ01hdGNoOiB0cnVlLFxuICAgIG9yaWdFeGNsdWRlTWF0Y2g6IHRydWUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdTY3JpcHQoZGF0YSkge1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICB1cmw6ICcqOi8vKi8qJyxcbiAgICBuYW1lOiAnJyxcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgLi4uZGF0YSxcbiAgfTtcbiAgY29uc3QgY29kZSA9IGdldE9wdGlvbignc2NyaXB0VGVtcGxhdGUnKVxuICAucmVwbGFjZSgve3soXFx3Kyl9fS9nLCAoc3RyLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtuYW1lXTtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHN0ciA6IHZhbHVlO1xuICB9KTtcbiAgY29uc3Qgc2NyaXB0ID0ge1xuICAgIGN1c3RvbTogZ2V0RGVmYXVsdEN1c3RvbSgpLFxuICAgIGNvbmZpZzoge1xuICAgICAgZW5hYmxlZDogMSxcbiAgICAgIHNob3VsZFVwZGF0ZTogMSxcbiAgICB9LFxuICAgIG1ldGE6IHBhcnNlTWV0YShjb2RlKSxcbiAgICBwcm9wczoge30sXG4gIH07XG4gIHJldHVybiB7IHNjcmlwdCwgY29kZSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZVVSSShzY3JpcHQpIHtcbiAgY29uc3QgbnMgPSBzY3JpcHQubWV0YS5uYW1lc3BhY2UgfHwgJyc7XG4gIGNvbnN0IG5hbWUgPSBzY3JpcHQubWV0YS5uYW1lIHx8ICcnO1xuICBsZXQgbmFtZVVSSSA9IGVuY29kZUZpbGVuYW1lKGAke25zfVxcbiR7bmFtZX1cXG5gKTtcbiAgaWYgKCFucyAmJiAhbmFtZSkgbmFtZVVSSSArPSBzY3JpcHQucHJvcHMuaWQgfHwgJyc7XG4gIHJldHVybiBuYW1lVVJJO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRRdWVyeShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJicpLnJlZHVjZSgoZGF0YSwgcGllY2UpID0+IHtcbiAgICBjb25zdCBba2V5LCB2YWxdID0gcGllY2Uuc3BsaXQoJz0nKS5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KTtcbiAgICBkYXRhW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sIHt9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGR1bXBRdWVyeShkaWN0KSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhkaWN0KVxuICAubWFwKGtleVZhbCA9PiBrZXlWYWwubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignPScpKVxuICAuam9pbignJicpO1xufVxuIiwiaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJyMvY29tbW9uL3N0b3JhZ2UnO1xuXG4vKiogQHR5cGUgeyBmdW5jdGlvbih1cmwsIG9wdGlvbnMsIGNoZWNrKTogUHJvbWlzZTx2b2lkPiB9IG9yIHRocm93cyBvbiBlcnJvciAqL1xuc3RvcmFnZS5jYWNoZS5mZXRjaCA9IGNhY2hlT3JGZXRjaCh7XG4gIGluaXQob3B0aW9ucykge1xuICAgIHJldHVybiB7IC4uLm9wdGlvbnMsIHJlc3BvbnNlVHlwZTogJ2Jsb2InIH07XG4gIH0sXG4gIGFzeW5jIHRyYW5zZm9ybShyZXNwb25zZSwgdXJsLCBvcHRpb25zLCBjaGVjaykge1xuICAgIGNvbnN0IFt0eXBlLCBib2R5XSA9IGF3YWl0IHN0b3JhZ2UuY2FjaGUubWFrZVJhdyhyZXNwb25zZSwgdHJ1ZSk7XG4gICAgYXdhaXQgY2hlY2s/Lih1cmwsIHJlc3BvbnNlLmRhdGEsIHR5cGUpO1xuICAgIHJldHVybiBgJHt0eXBlfSwke2JvZHl9YDtcbiAgfSxcbn0pO1xuXG4vKiogQHR5cGUgeyBmdW5jdGlvbih1cmwsIG9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IH0gb3IgdGhyb3dzIG9uIGVycm9yICovXG5zdG9yYWdlLnJlcXVpcmUuZmV0Y2ggPSBjYWNoZU9yRmV0Y2goe1xuICB0cmFuc2Zvcm06ICh7IGRhdGEgfSwgdXJsKSA9PiAoXG4gICAgL15cXHMqPC8udGVzdChkYXRhKVxuICAgICAgPyBQcm9taXNlLnJlamVjdChgTk9UX0pTOiAke3VybH0gXCIke2RhdGEuc2xpY2UoMCwgMTAwKS50cmltKCkucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpfVwiYClcbiAgICAgIDogZGF0YVxuICApLFxufSk7XG5cbmZ1bmN0aW9uIGNhY2hlT3JGZXRjaChoYW5kbGVycyA9IHt9KSB7XG4gIGNvbnN0IHJlcXVlc3RzID0ge307XG4gIGNvbnN0IHsgaW5pdCwgdHJhbnNmb3JtIH0gPSBoYW5kbGVycztcbiAgLyoqIEB0aGlzIFZNU3RvcmFnZUJhc2UgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlT3JGZXRjaEhhbmRsZXIoLi4uYXJncykge1xuICAgIGNvbnN0IFt1cmxdID0gYXJncztcbiAgICBjb25zdCBwcm9taXNlID0gcmVxdWVzdHNbdXJsXSB8fCAocmVxdWVzdHNbdXJsXSA9IHRoaXM6OmRvRmV0Y2goLi4uYXJncykpO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuICAvKiogQHRoaXMgVk1TdG9yYWdlQmFzZSAqL1xuICBhc3luYyBmdW5jdGlvbiBkb0ZldGNoKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBbdXJsLCBvcHRpb25zXSA9IGFyZ3M7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QodXJsLCBpbml0Py4ob3B0aW9ucykgfHwgb3B0aW9ucyk7XG4gICAgICBpZiAoYXdhaXQgaXNNb2RpZmllZChyZXMsIHVybCkpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdHJhbnNmb3JtID8gYXdhaXQgdHJhbnNmb3JtKHJlcywgLi4uYXJncykgOiByZXMuZGF0YTtcbiAgICAgICAgYXdhaXQgdGhpcy5zZXQodXJsLCByZXN1bHQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZzogJHt1cmx9YCwgZXJyKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RzW3VybF07XG4gICAgfVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGlzTW9kaWZpZWQoeyBoZWFkZXJzIH0sIHVybCkge1xuICBjb25zdCBtb2QgPSBoZWFkZXJzLmdldCgnZXRhZycpXG4gIHx8ICtuZXcgRGF0ZShoZWFkZXJzLmdldCgnbGFzdC1tb2RpZmllZCcpKVxuICB8fCArbmV3IERhdGUoaGVhZGVycy5nZXQoJ2RhdGUnKSk7XG4gIGlmICghbW9kIHx8IG1vZCAhPT0gYXdhaXQgc3RvcmFnZS5tb2QuZ2V0T25lKHVybCkpIHtcbiAgICBpZiAobW9kKSBhd2FpdCBzdG9yYWdlLm1vZC5zZXQodXJsLCBtb2QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRBY3RpdmVUYWIsIG5vb3AsIHNlbmRUYWJDbWQsIGdldEZ1bGxVcmwgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgdWEgZnJvbSAnIy9jb21tb24vdWEnO1xuaW1wb3J0IHsgZXh0ZW5zaW9uUm9vdCB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyBnZXRPcHRpb24gfSBmcm9tICcuL29wdGlvbnMnO1xuXG5jb25zdCBvcGVuZXJzID0ge307XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcGF0aElkXSAtIHBhdGggb3IgaWQgdG8gYWRkIHRvICNzY3JpcHRzIHJvdXRlIGluIGRhc2hib2FyZCxcbiAgICAgaWYgYWJzZW50IGEgbmV3IHNjcmlwdCB3aWxsIGJlIGNyZWF0ZWQgZm9yIGFjdGl2ZSB0YWIncyBVUkxcbiAgICogQHJldHVybnMge1Byb21pc2U8e2lkOiBudW1iZXJ9Pn1cbiAgICovXG4gIGFzeW5jIE9wZW5FZGl0b3IocGF0aElkKSB7XG4gICAgaWYgKCFwYXRoSWQpIHtcbiAgICAgIGNvbnN0IHsgdGFiLCBkb21haW4gfSA9IGF3YWl0IGNvbW1hbmRzLkdldFRhYkRvbWFpbigpO1xuICAgICAgY29uc3QgaWQgPSBkb21haW4gJiYgY29tbWFuZHMuQ2FjaGVOZXdTY3JpcHQoe1xuICAgICAgICB1cmw6ICh0YWIucGVuZGluZ1VybCB8fCB0YWIudXJsKS5zcGxpdCgvWyM/XS8pWzBdLFxuICAgICAgICBuYW1lOiBgJHtnZXRPcHRpb24oJ3NjcmlwdFRlbXBsYXRlRWRpdGVkJykgPyAnJyA6ICctICd9JHtkb21haW59YCxcbiAgICAgIH0pO1xuICAgICAgcGF0aElkID0gYF9uZXcke2lkID8gYC8ke2lkfWAgOiAnJ31gO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBgJHtleHRlbnNpb25Sb290fW9wdGlvbnMvaW5kZXguaHRtbCNzY3JpcHRzLyR7cGF0aElkfWA7XG4gICAgLy8gRmlyZWZveCB1bnRpbCB2NTYgZG9lc24ndCBzdXBwb3J0IG1vei1leHRlbnNpb246Ly8gcGF0dGVybiBpbiBicm93c2VyLnRhYnMucXVlcnkoKVxuICAgIGZvciAoY29uc3QgdmlldyBvZiBicm93c2VyLmV4dGVuc2lvbi5nZXRWaWV3cygpKSB7XG4gICAgICBpZiAodmlldy5sb2NhdGlvbi5ocmVmID09PSB1cmwpIHtcbiAgICAgICAgLy8gZGVlcC1jb3B5aW5nIHRvIGF2b2lkIGRlYWQgb2JqZWN0c1xuICAgICAgICBjb25zdCB0YWIgPSBkZWVwQ29weShhd2FpdCB2aWV3LmJyb3dzZXIudGFicy5nZXRDdXJyZW50KCkpO1xuICAgICAgICBicm93c2VyLnRhYnMudXBkYXRlKHRhYi5pZCwgeyBhY3RpdmU6IHRydWUgfSk7XG4gICAgICAgIGJyb3dzZXIud2luZG93cy51cGRhdGUodGFiLndpbmRvd0lkLCB7IGZvY3VzZWQ6IHRydWUgfSk7XG4gICAgICAgIHJldHVybiB0YWI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb21tYW5kcy5UYWJPcGVuKHsgdXJsLCBtYXliZUluV2luZG93OiB0cnVlIH0pO1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTx7IGlkOiBudW1iZXIgfSB8IGNocm9tZS50YWJzLlRhYj59IG5ldyB0YWIgaXMgcmV0dXJuZWQgZm9yIGludGVybmFsIGNhbGxzICovXG4gIGFzeW5jIFRhYk9wZW4oe1xuICAgIHVybCxcbiAgICBhY3RpdmUgPSB0cnVlLFxuICAgIGNvbnRhaW5lcixcbiAgICBpbnNlcnQgPSB0cnVlLFxuICAgIG1heWJlSW5XaW5kb3cgPSBmYWxzZSxcbiAgICBwaW5uZWQsXG4gIH0sIHNyYyA9IHt9KSB7XG4gICAgLy8gc3JjLnRhYiBtYXkgYmUgYWJzZW50IHdoZW4gaW52b2tlZCBmcm9tIHBvcHVwIChlLmcuIGVkaXQvY3JlYXRlIGJ1dHRvbnMpXG4gICAgY29uc3Qgc3JjVGFiID0gc3JjLnRhYiB8fCBhd2FpdCBnZXRBY3RpdmVUYWIoKSB8fCB7fTtcbiAgICAvLyBzcmMudXJsIG1heSBiZSBhYnNlbnQgd2hlbiBpbnZva2VkIGRpcmVjdGx5IGFzIGNvbW1hbmRzLlRhYk9wZW5cbiAgICBjb25zdCBzcmNVcmwgPSBzcmMudXJsO1xuICAgIGNvbnN0IGlzSW50ZXJuYWwgPSAhc3JjVXJsIHx8IHNyY1VybC5zdGFydHNXaXRoKGV4dGVuc2lvblJvb3QpO1xuICAgIC8vIG9ubHkgaW5jb2duaXRvIHN0b3JlSWQgbWF5IGJlIHNwZWNpZmllZCB3aGVuIG9wZW5pbmcgaW4gYW4gaW5jb2duaXRvIHdpbmRvd1xuICAgIGNvbnN0IHsgaW5jb2duaXRvLCB3aW5kb3dJZCB9ID0gc3JjVGFiO1xuICAgIC8vIENocm9tZSBjYW4ndCBvcGVuIGNocm9tZS14eHg6IFVSTHMgaW4gaW5jb2duaXRvIHdpbmRvd3NcbiAgICBsZXQgc3RvcmVJZCA9IHNyY1RhYi5jb29raWVTdG9yZUlkO1xuICAgIGlmIChzdG9yZUlkICYmICFpbmNvZ25pdG8pIHtcbiAgICAgIHN0b3JlSWQgPSBnZXRDb250YWluZXJJZChpc0ludGVybmFsID8gMCA6IGNvbnRhaW5lcikgfHwgc3RvcmVJZDtcbiAgICB9XG4gICAgaWYgKHN0b3JlSWQpIHN0b3JlSWQgPSB7IGNvb2tpZVN0b3JlSWQ6IHN0b3JlSWQgfTtcbiAgICAvLyBVUkwgbmVlZHMgdG8gYmUgZXhwYW5kZWQgZm9yIGBjYW5PcGVuSW5jb2duaXRvYCBiZWxvd1xuICAgIGlmICghL15bLVxcd10rOi8udGVzdCh1cmwpKSB7XG4gICAgICB1cmwgPSBpc0ludGVybmFsXG4gICAgICAgID8gYnJvd3Nlci5ydW50aW1lLmdldFVSTCh1cmwpXG4gICAgICAgIDogZ2V0RnVsbFVybCh1cmwsIHNyY1VybCk7XG4gICAgfVxuICAgIGNvbnN0IGNhbk9wZW5JbmNvZ25pdG8gPSAhaW5jb2duaXRvIHx8IElTX0ZJUkVGT1ggfHwgIS9eKGNocm9tZVstXFx3XSopOi8udGVzdCh1cmwpO1xuICAgIGxldCBuZXdUYWI7XG4gICAgaWYgKG1heWJlSW5XaW5kb3dcbiAgICAgICAgJiYgYnJvd3Nlci53aW5kb3dzXG4gICAgICAgICYmIGdldE9wdGlvbignZWRpdG9yV2luZG93JylcbiAgICAgICAgLyogY29va2llU3RvcmVJZCBpbiB3aW5kb3dzLmNyZWF0ZSgpIGlzIHN1cHBvcnRlZCBzaW5jZSBGRjY0IGh0dHBzOi8vYnVnemlsLmxhLzEzOTM1NzBcbiAgICAgICAgICogYW5kIGEgd29ya2Fyb3VuZCBpcyB0b28gY29udm9sdXRlZCB0byBhZGQgaXQgZm9yIHN1Y2ggYW4gYW5jaWVudCB2ZXJzaW9uICovXG4gICAgICAgICYmICghc3RvcmVJZCB8fCB1YS5maXJlZm94ID49IDY0KSkge1xuICAgICAgY29uc3Qgd25kT3B0cyA9IHtcbiAgICAgICAgdXJsLFxuICAgICAgICBpbmNvZ25pdG86IGNhbk9wZW5JbmNvZ25pdG8gJiYgaW5jb2duaXRvLFxuICAgICAgICAuLi5nZXRPcHRpb24oJ2VkaXRvcldpbmRvd1NpbXBsZScpICYmIHsgdHlwZTogJ3BvcHVwJyB9LFxuICAgICAgICAuLi4hSVNfRklSRUZPWCAmJiB7IGZvY3VzZWQ6ICEhYWN0aXZlIH0sIC8vIEZGIGRvZXNuJ3Qgc3VwcG9ydCB0aGlzXG4gICAgICAgIC4uLnN0b3JlSWQsXG4gICAgICB9O1xuICAgICAgY29uc3QgcG9zID0gZ2V0T3B0aW9uKCdlZGl0b3JXaW5kb3dQb3MnKTtcbiAgICAgIGNvbnN0IGhhc1BvcyA9IHBvcyAmJiAndG9wJyBpbiBwb3M7XG4gICAgICBjb25zdCB3bmQgPSBhd2FpdCBicm93c2VyLndpbmRvd3MuY3JlYXRlKHsgLi4ud25kT3B0cywgLi4ucG9zIH0pLmNhdGNoKGhhc1BvcyAmJiBub29wKVxuICAgICAgICB8fCBoYXNQb3MgJiYgYXdhaXQgYnJvd3Nlci53aW5kb3dzLmNyZWF0ZSh3bmRPcHRzKTtcbiAgICAgIG5ld1RhYiA9IHduZC50YWJzWzBdO1xuICAgIH1cbiAgICBpZiAoIW5ld1RhYikge1xuICAgICAgbmV3VGFiID0gYXdhaXQgYnJvd3Nlci50YWJzLmNyZWF0ZSh7XG4gICAgICAgIHVybCxcbiAgICAgICAgLy8gbm9ybWFsaXppbmcgYXMgYm9vbGVhbiBiZWNhdXNlIHRoZSBBUEkgcmVxdWlyZXMgc3RyaWN0IHR5cGVzXG4gICAgICAgIGFjdGl2ZTogISFhY3RpdmUsXG4gICAgICAgIHBpbm5lZDogISFwaW5uZWQsXG4gICAgICAgIC4uLnN0b3JlSWQsXG4gICAgICAgIC4uLmNhbk9wZW5JbmNvZ25pdG8gJiYge1xuICAgICAgICAgIHdpbmRvd0lkLFxuICAgICAgICAgIC4uLmluc2VydCAmJiB7IGluZGV4OiBzcmNUYWIuaW5kZXggKyAxIH0sXG4gICAgICAgICAgLi4udWEub3BlbmVyVGFiSWRTdXBwb3J0ZWQgJiYgeyBvcGVuZXJUYWJJZDogc3JjVGFiLmlkIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgeyBpZCB9ID0gbmV3VGFiO1xuICAgIGlmIChhY3RpdmUgJiYgbmV3VGFiLndpbmRvd0lkICE9PSB3aW5kb3dJZCkge1xuICAgICAgYXdhaXQgYnJvd3Nlci53aW5kb3dzLnVwZGF0ZShuZXdUYWIud2luZG93SWQsIHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgICB9XG4gICAgb3BlbmVyc1tpZF0gPSBzcmNUYWIuaWQ7XG4gICAgcmV0dXJuIGlzSW50ZXJuYWwgPyBuZXdUYWIgOiB7IGlkIH07XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHt2b2lkfSAqL1xuICBUYWJDbG9zZSh7IGlkIH0gPSB7fSwgc3JjKSB7XG4gICAgY29uc3QgdGFiSWQgPSBpZCB8fCBzcmM/LnRhYj8uaWQ7XG4gICAgaWYgKHRhYklkID49IDApIGJyb3dzZXIudGFicy5yZW1vdmUodGFiSWQpO1xuICB9LFxuICBUYWJGb2N1cyhfLCBzcmMpIHtcbiAgICBicm93c2VyLnRhYnMudXBkYXRlKHNyYy50YWIuaWQsIHsgYWN0aXZlOiB0cnVlIH0pLmNhdGNoKG5vb3ApO1xuICAgIGJyb3dzZXIud2luZG93cy51cGRhdGUoc3JjLnRhYi53aW5kb3dJZCwgeyBmb2N1c2VkOiB0cnVlIH0pLmNhdGNoKG5vb3ApO1xuICB9LFxufSk7XG5cbi8vIEZpcmVmb3ggQW5kcm9pZCBkb2VzIG5vdCBzdXBwb3J0IGBvcGVuZXJUYWJJZGAgZmllbGQsIGl0IGZhaWxzIGlmIHRoaXMgZmllbGQgaXMgcGFzc2VkXG4vLyBYWFggb3BlbmVyVGFiSWQgc2VlbXMgYnVnZ3kgb24gQ2hyb21lLCBodHRwczovL2NyYnVnLmNvbS85NjcxNTBcbi8vIEl0IHNlZW1zIHRvIGRvIG5vdGhpbmcgZXZlbiBzZXQgc3VjY2Vzc2Z1bGx5IHdpdGggYGJyb3dzZXIudGFicy51cGRhdGVgLlxudWEucmVhZHkudGhlbigoKSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHVhLCB7XG4gICAgb3BlbmVyVGFiSWRTdXBwb3J0ZWQ6IHtcbiAgICAgIHZhbHVlOiAhSVNfRklSRUZPWCB8fCB1YS5maXJlZm94ID49IDU3ICYmIHVhLm9zICE9PSAnYW5kcm9pZCcsXG4gICAgfSxcbiAgfSk7XG59KTtcblxuYnJvd3Nlci50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigoaWQpID0+IHtcbiAgY29uc3Qgb3BlbmVySWQgPSBvcGVuZXJzW2lkXTtcbiAgaWYgKG9wZW5lcklkID49IDApIHtcbiAgICBzZW5kVGFiQ21kKG9wZW5lcklkLCAnVGFiQ2xvc2VkJywgaWQpO1xuICAgIGRlbGV0ZSBvcGVuZXJzW2lkXTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5lcklkKGluZGV4KSB7XG4gIHJldHVybiBpbmRleCA9PT0gMCAmJiAnZmlyZWZveC1kZWZhdWx0J1xuICAgICAgICAgfHwgaW5kZXggPiAwICYmIGBmaXJlZm94LWNvbnRhaW5lci0ke2luZGV4fWA7XG59XG4iLCJpbXBvcnQgeyBwb3N0SW5pdGlhbGl6ZSB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9uLCBnZXRPcHRpb24sIHNldE9wdGlvbiB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBTQ1JJUFRfVEVNUExBVEUgPSAnc2NyaXB0VGVtcGxhdGUnO1xuY29uc3QgU0NSSVBUX1RFTVBMQVRFX0VESVRFRCA9IGAke1NDUklQVF9URU1QTEFURX1FZGl0ZWRgO1xuY29uc3QgSU5JVElBTF9URU1QTEFURSA9IGBcXFxuLy8gPT1Vc2VyU2NyaXB0PT1cbi8vIEBuYW1lIE5ldyBTY3JpcHRcbi8vIEBuYW1lc3BhY2UgVmlvbGVudG1vbmtleSBTY3JpcHRzXG4vLyBAbWF0Y2gge3t1cmx9fVxuLy8gQGdyYW50IG5vbmVcbi8vID09L1VzZXJTY3JpcHQ9PVxuYDtcblxucG9zdEluaXRpYWxpemUucHVzaCgoKSA9PiB7XG4gIGxldCBlZGl0ZWQgPSBnZXRPcHRpb24oU0NSSVBUX1RFTVBMQVRFX0VESVRFRCk7XG4gIC8vIFByZXNlcnZlIGFuIGVkaXRlZCB0ZW1wbGF0ZVxuICBpZiAoZWRpdGVkKSByZXR1cm47XG4gIGNvbnN0IHRlbXBsYXRlID0gZ2V0T3B0aW9uKFNDUklQVF9URU1QTEFURSk7XG4gIC8vIFdoZW4gdXBkYXRpbmcgZnJvbSBhbiBvbGQgdmVyc2lvbiwgc2V0IHRoZSBlZGl0ZWQgZmxhZyByZXRyb2FjdGl2ZWx5XG4gIGlmIChlZGl0ZWQgPT0gbnVsbCkge1xuICAgIGVkaXRlZCA9IHRlbXBsYXRlICE9PSBJTklUSUFMX1RFTVBMQVRFO1xuICAgIGlmIChlZGl0ZWQpIHNldE9wdGlvbihTQ1JJUFRfVEVNUExBVEVfRURJVEVELCB0cnVlKTtcbiAgICBlbHNlIHJlc2V0U2NyaXB0VGVtcGxhdGUoKTtcbiAgLy8gV2hlbiB1cGRhdGluZyBWTSwgdXBkYXRlIHRvIHRoZSBuZXcgZGVmYXVsdCB0ZW1wbGF0ZVxuICB9IGVsc2UgaWYgKHRlbXBsYXRlICE9PSBnZXREZWZhdWx0T3B0aW9uKFNDUklQVF9URU1QTEFURSkpIHtcbiAgICByZXNldFNjcmlwdFRlbXBsYXRlKCk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRTY3JpcHRUZW1wbGF0ZShjaGFuZ2VzID0ge30pIHtcbiAgY29uc3QgZGVmYXVsdFRlbXBsYXRlID0gZ2V0RGVmYXVsdE9wdGlvbihTQ1JJUFRfVEVNUExBVEUpO1xuICBsZXQgdGVtcGxhdGUgPSBjaGFuZ2VzW1NDUklQVF9URU1QTEFURV07XG4gIGlmICghdGVtcGxhdGUpIHtcbiAgICB0ZW1wbGF0ZSA9IGRlZmF1bHRUZW1wbGF0ZTtcbiAgICBjaGFuZ2VzW1NDUklQVF9URU1QTEFURV0gPSB0ZW1wbGF0ZTtcbiAgICBzZXRPcHRpb24oU0NSSVBUX1RFTVBMQVRFLCB0ZW1wbGF0ZSk7XG4gIH1cbiAgY29uc3QgZWRpdGVkID0gdGVtcGxhdGUgIT09IGRlZmF1bHRUZW1wbGF0ZTtcbiAgaWYgKGVkaXRlZCAhPT0gY2hhbmdlc1tTQ1JJUFRfVEVNUExBVEVfRURJVEVEXSkge1xuICAgIGNoYW5nZXNbU0NSSVBUX1RFTVBMQVRFX0VESVRFRF0gPSBlZGl0ZWQ7XG4gICAgc2V0T3B0aW9uKFNDUklQVF9URU1QTEFURV9FRElURUQsIGVkaXRlZCk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHRsZCBmcm9tICcjL2NvbW1vbi90bGQnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuaW1wb3J0IHsgcG9zdEluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uLCBob29rT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgVGVzdEJsYWNrbGlzdDogdGVzdEJsYWNrbGlzdCxcbn0pO1xuXG5wb3N0SW5pdGlhbGl6ZS5wdXNoKHJlc2V0QmxhY2tsaXN0KTtcblxudGxkLmluaXRUTEQodHJ1ZSk7XG5cbmNvbnN0IFJFX01BVENIX1BBUlRTID0gLyguKj8pOlxcL1xcLyhbXi9dKilcXC8oLiopLztcbmxldCBibGFja2xpc3RSdWxlcyA9IFtdO1xuaG9va09wdGlvbnMoKGNoYW5nZXMpID0+IHtcbiAgaWYgKCdibGFja2xpc3QnIGluIGNoYW5nZXMpIHJlc2V0QmxhY2tsaXN0KGNoYW5nZXMuYmxhY2tsaXN0IHx8ICcnKTtcbn0pO1xuY29uc3QgUkVfSFRUUF9PUl9IVFRQUyA9IC9eaHR0cHM/JC9pO1xuXG4vKlxuIFNpbXBsZSBGSUZPIHF1ZXVlIGZvciB0aGUgcmVzdWx0cyBvZiB0ZXN0QmxhY2tsaXN0LCBjYWNoZWQgc2VwYXJhdGVseSBmcm9tIHRoZSBtYWluIHxjYWNoZXxcbiBiZWNhdXNlIHRoZSBibGFja2xpc3QgaXMgdXBkYXRlZCBvbmx5IG9uY2UgaW4gYSB3aGlsZSBzbyBpdHMgZW50cmllcyB3b3VsZCBiZSBjcm93ZGluZ1xuIHRoZSBtYWluIGNhY2hlIGFuZCByZWR1Y2luZyBpdHMgcGVyZm9ybWFuY2UgKG9iamVjdHMgd2l0aCBsb3RzIG9mIGtleXMgYXJlIHNsb3cgdG8gYWNjZXNzKS5cblxuIFdlIGFsc28gZG9uJ3QgbmVlZCB0byBhdXRvLWV4cGlyZSB0aGUgZW50cmllcyBhZnRlciBhIHRpbWVvdXQuXG4gVGhlIG9ubHkgbGltaXQgd2UncmUgY29uY2VybmVkIHdpdGggaXMgdGhlIG92ZXJhbGwgbWVtb3J5IHVzZWQuXG4gVGhlIGxpbWl0IGlzIHNwZWNpZmllZCBpbiB0aGUgYW1vdW50IG9mIHVuaWNvZGUgY2hhcmFjdGVycyAoc3RyaW5nIGxlbmd0aCkgZm9yIHNpbXBsaWNpdHkuXG4gRGlzcmVnYXJkaW5nIGRlZHVwbGljYXRpb24gZHVlIHRvIGludGVybmluZywgdGhlIGFjdHVhbCBtZW1vcnkgdXNlZCBpcyBhcHByb3hpbWF0ZWx5IHR3aWNlIGFzIGJpZzpcbiAyICoga2V5TGVuZ3RoICsgb2JqZWN0U3RydWN0dXJlT3ZlcmhlYWQgKiBvYmplY3RDb3VudFxuKi9cbmNvbnN0IE1BWF9CTF9DQUNIRV9MRU5HVEggPSAxMDBlMztcbmxldCBibENhY2hlID0ge307XG5sZXQgYmxDYWNoZVNpemUgPSAwO1xuXG5mdW5jdGlvbiB0ZXN0UnVsZXModXJsLCBydWxlcywgcHJlZml4LCBydWxlQnVpbGRlcikge1xuICByZXR1cm4gcnVsZXMuc29tZShydWxlID0+IHtcbiAgICBjb25zdCBrZXkgPSBgJHtwcmVmaXh9OiR7cnVsZX1gO1xuICAgIGNvbnN0IG1hdGNoZXIgPSBjYWNoZS5nZXQoa2V5KSB8fCBjYWNoZS5wdXQoa2V5LCBydWxlQnVpbGRlcihydWxlKSk7XG4gICAgcmV0dXJuIG1hdGNoZXIudGVzdCh1cmwpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUZXN0IGdsb2IgcnVsZXMgbGlrZSBgQGluY2x1ZGVgIGFuZCBgQGV4Y2x1ZGVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVzdEdsb2IodXJsLCBydWxlcykge1xuICByZXR1cm4gdGVzdFJ1bGVzKHVybCwgcnVsZXMsICdyZScsIGF1dG9SZWcpO1xufVxuXG4vKipcbiAqIFRlc3QgbWF0Y2ggcnVsZXMgbGlrZSBgQG1hdGNoYCBhbmQgYEBleGNsdWRlX21hdGNoYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlc3RNYXRjaCh1cmwsIHJ1bGVzKSB7XG4gIHJldHVybiB0ZXN0UnVsZXModXJsLCBydWxlcywgJ21hdGNoJywgbWF0Y2hUZXN0ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdFNjcmlwdCh1cmwsIHNjcmlwdCkge1xuICBjYWNoZS5iYXRjaCh0cnVlKTtcbiAgY29uc3QgeyBjdXN0b20sIG1ldGEgfSA9IHNjcmlwdDtcbiAgY29uc3QgbWF0ID0gbWVyZ2VMaXN0cyhjdXN0b20ub3JpZ01hdGNoICYmIG1ldGEubWF0Y2gsIGN1c3RvbS5tYXRjaCk7XG4gIGNvbnN0IGluYyA9IG1lcmdlTGlzdHMoY3VzdG9tLm9yaWdJbmNsdWRlICYmIG1ldGEuaW5jbHVkZSwgY3VzdG9tLmluY2x1ZGUpO1xuICBjb25zdCBleGMgPSBtZXJnZUxpc3RzKGN1c3RvbS5vcmlnRXhjbHVkZSAmJiBtZXRhLmV4Y2x1ZGUsIGN1c3RvbS5leGNsdWRlKTtcbiAgY29uc3QgZXhjTWF0ID0gbWVyZ2VMaXN0cyhjdXN0b20ub3JpZ0V4Y2x1ZGVNYXRjaCAmJiBtZXRhLmV4Y2x1ZGVNYXRjaCwgY3VzdG9tLmV4Y2x1ZGVNYXRjaCk7XG4gIC8vIG1hdGNoIGFsbCBpZiBubyBAbWF0Y2ggb3IgQGluY2x1ZGUgcnVsZVxuICBsZXQgb2sgPSAhbWF0Lmxlbmd0aCAmJiAhaW5jLmxlbmd0aDtcbiAgLy8gQG1hdGNoXG4gIG9rID0gb2sgfHwgdGVzdE1hdGNoKHVybCwgbWF0KTtcbiAgLy8gQGluY2x1ZGVcbiAgb2sgPSBvayB8fCB0ZXN0R2xvYih1cmwsIGluYyk7XG4gIC8vIEBleGNsdWRlLW1hdGNoXG4gIG9rID0gb2sgJiYgIXRlc3RNYXRjaCh1cmwsIGV4Y01hdCk7XG4gIC8vIEBleGNsdWRlXG4gIG9rID0gb2sgJiYgIXRlc3RHbG9iKHVybCwgZXhjKTtcbiAgY2FjaGUuYmF0Y2goZmFsc2UpO1xuICByZXR1cm4gb2s7XG59XG5cbmZ1bmN0aW9uIG1lcmdlTGlzdHMoLi4uYXJncykge1xuICByZXR1cm4gYXJncy5yZWR1Y2UoKHJlcywgaXRlbSkgPT4gKGl0ZW0gPyByZXMuY29uY2F0KGl0ZW0pIDogcmVzKSwgW10pO1xufVxuXG5mdW5jdGlvbiBzdHIyUkUoc3RyKSB7XG4gIGNvbnN0IHJlID0gc3RyLnJlcGxhY2UoLyhbLj8rW1xcXXt9KCl8XiRdKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgcmV0dXJuIHJlO1xufVxuXG5mdW5jdGlvbiBiaW5kUkUocmUpIHtcbiAgcmV0dXJuIHJlLnRlc3QuYmluZChyZSk7XG59XG5cbmZ1bmN0aW9uIGF1dG9SZWcoc3RyKSB7XG4gIC8vIHJlZ2V4cCBtb2RlOiBjYXNlLWluc2Vuc2l0aXZlIHBlciBHTSBkb2N1bWVudGF0aW9uXG4gIGlmIChzdHIubGVuZ3RoID4gMSAmJiBzdHJbMF0gPT09ICcvJyAmJiBzdHJbc3RyLmxlbmd0aCAtIDFdID09PSAnLycpIHtcbiAgICBsZXQgcmU7XG4gICAgdHJ5IHsgcmUgPSBuZXcgUmVnRXhwKHN0ci5zbGljZSgxLCAtMSksICdpJyk7IH0gY2F0Y2ggKGUpIHsgLyogaWdub3JlICovIH1cbiAgICByZXR1cm4geyB0ZXN0OiByZSA/IGJpbmRSRShyZSkgOiAoKSA9PiBmYWxzZSB9O1xuICB9XG4gIC8vIGdsb2IgbW9kZTogY2FzZS1pbnNlbnNpdGl2ZSB0byBtYXRjaCBHTTQgJiBUYW1wZXJtb25rZXkgYnVnZ2VkIGJlaGF2aW9yXG4gIGNvbnN0IHJlU3RyID0gc3RyMlJFKHN0ci50b0xvd2VyQ2FzZSgpKTtcbiAgaWYgKHRsZC5pc1JlYWR5KCkgJiYgc3RyLmluY2x1ZGVzKCcudGxkLycpKSB7XG4gICAgY29uc3QgcmVUbGRTdHIgPSByZVN0ci5yZXBsYWNlKCdcXFxcLnRsZC8nLCAnKCg/OlxcXFwuWy1cXFxcd10rKSspLycpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXN0OiAodHN0cikgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gdHN0ci50b0xvd2VyQ2FzZSgpLm1hdGNoKHJlVGxkU3RyKTtcbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCBzdWZmaXggPSBtYXRjaGVzWzFdLnNsaWNlKDEpO1xuICAgICAgICAgIGlmICh0bGQuZ2V0UHVibGljU3VmZml4KHN1ZmZpeCkgPT09IHN1ZmZpeCkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgXiR7cmVTdHJ9JGAsICdpJyk7IC8vIFN0cmluZyB3aXRoIHdpbGRjYXJkc1xuICByZXR1cm4geyB0ZXN0OiBiaW5kUkUocmUpIH07XG59XG5cbmZ1bmN0aW9uIG1hdGNoU2NoZW1lKHJ1bGUsIGRhdGEpIHtcbiAgLy8gZXhhY3QgbWF0Y2hcbiAgaWYgKHJ1bGUgPT09IGRhdGEpIHJldHVybiAxO1xuICAvLyAqID0gaHR0cCB8IGh0dHBzXG4gIC8vIHN1cHBvcnQgaHR0cCpcbiAgaWYgKFtcbiAgICAnKicsXG4gICAgJ2h0dHAqJyxcbiAgXS5pbmNsdWRlcyhydWxlKSAmJiBSRV9IVFRQX09SX0hUVFBTLnRlc3QoZGF0YSkpIHJldHVybiAxO1xuICByZXR1cm4gMDtcbn1cblxuY29uc3QgUkVfU1RSX0FOWSA9ICcoPzp8Lio/XFxcXC4pJztcbmNvbnN0IFJFX1NUUl9UTEQgPSAnKCg/OlxcXFwuWy1cXFxcd10rKSspJztcbmZ1bmN0aW9uIGhvc3RNYXRjaGVyKHJ1bGUpIHtcbiAgLy8gKiBtYXRjaGVzIGFsbFxuICBpZiAocnVsZSA9PT0gJyonKSB7XG4gICAgcmV0dXJuICgpID0+IDE7XG4gIH1cbiAgLy8gKi5leGFtcGxlLmNvbVxuICAvLyB3d3cuZ29vZ2xlLipcbiAgLy8gd3d3Lmdvb2dsZS50bGRcbiAgY29uc3QgcnVsZUxDID0gcnVsZS50b0xvd2VyQ2FzZSgpOyAvLyBob3N0IG1hdGNoaW5nIGlzIGNhc2UtaW5zZW5zaXRpdmVcbiAgbGV0IHByZWZpeCA9ICcnO1xuICBsZXQgYmFzZSA9IHJ1bGVMQztcbiAgbGV0IHN1ZmZpeCA9ICcnO1xuICBpZiAocnVsZS5zdGFydHNXaXRoKCcqLicpKSB7XG4gICAgYmFzZSA9IGJhc2Uuc2xpY2UoMik7XG4gICAgcHJlZml4ID0gUkVfU1RSX0FOWTtcbiAgfVxuICBpZiAodGxkLmlzUmVhZHkoKSAmJiBydWxlLmVuZHNXaXRoKCcudGxkJykpIHtcbiAgICBiYXNlID0gYmFzZS5zbGljZSgwLCAtNCk7XG4gICAgc3VmZml4ID0gUkVfU1RSX1RMRDtcbiAgfVxuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoYF4ke3ByZWZpeH0ke3N0cjJSRShiYXNlKX0ke3N1ZmZpeH0kYCk7XG4gIHJldHVybiAoZGF0YSkgPT4ge1xuICAgIC8vIGV4YWN0IG1hdGNoLCBjYXNlLWluc2Vuc2l0aXZlXG4gICAgZGF0YSA9IGRhdGEudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAocnVsZUxDID09PSBkYXRhKSByZXR1cm4gMTtcbiAgICAvLyBmdWxsIGNoZWNrXG4gICAgY29uc3QgbWF0Y2hlcyA9IGRhdGEubWF0Y2gocmUpO1xuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBbLCB0bGRTdHJdID0gbWF0Y2hlcztcbiAgICAgIGlmICghdGxkU3RyKSByZXR1cm4gMTtcbiAgICAgIGNvbnN0IHRsZFN1ZmZpeCA9IHRsZFN0ci5zbGljZSgxKTtcbiAgICAgIHJldHVybiB0bGQuZ2V0UHVibGljU3VmZml4KHRsZFN1ZmZpeCkgPT09IHRsZFN1ZmZpeDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhdGhNYXRjaGVyKHJ1bGUpIHtcbiAgY29uc3QgaUhhc2ggPSBydWxlLmluZGV4T2YoJyMnKTtcbiAgbGV0IGlRdWVyeSA9IHJ1bGUuaW5kZXhPZignPycpO1xuICBsZXQgc3RyUmUgPSBzdHIyUkUocnVsZSk7XG4gIGlmIChpUXVlcnkgPiBpSGFzaCkgaVF1ZXJ5ID0gLTE7XG4gIGlmIChpSGFzaCA8IDApIHtcbiAgICBpZiAoaVF1ZXJ5IDwgMCkgc3RyUmUgPSBgXiR7c3RyUmV9KD86Wz8jXXwkKWA7XG4gICAgZWxzZSBzdHJSZSA9IGBeJHtzdHJSZX0oPzojfCQpYDtcbiAgfVxuICByZXR1cm4gYmluZFJFKG5ldyBSZWdFeHAoc3RyUmUpKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hUZXN0ZXIocnVsZSkge1xuICBsZXQgdGVzdDtcbiAgaWYgKHJ1bGUgPT09ICc8YWxsX3VybHM+Jykge1xuICAgIHRlc3QgPSAoKSA9PiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJ1bGVQYXJ0cyA9IHJ1bGUubWF0Y2goUkVfTUFUQ0hfUEFSVFMpO1xuICAgIGlmIChydWxlUGFydHMpIHtcbiAgICAgIGNvbnN0IG1hdGNoSG9zdCA9IGhvc3RNYXRjaGVyKHJ1bGVQYXJ0c1syXSk7XG4gICAgICBjb25zdCBtYXRjaFBhdGggPSBwYXRoTWF0Y2hlcihydWxlUGFydHNbM10pO1xuICAgICAgdGVzdCA9ICh1cmwpID0+IHtcbiAgICAgICAgY29uc3QgcGFydHMgPSB1cmwubWF0Y2goUkVfTUFUQ0hfUEFSVFMpO1xuICAgICAgICByZXR1cm4gISFydWxlUGFydHMgJiYgISFwYXJ0c1xuICAgICAgICAgICYmIG1hdGNoU2NoZW1lKHJ1bGVQYXJ0c1sxXSwgcGFydHNbMV0pXG4gICAgICAgICAgJiYgbWF0Y2hIb3N0KHBhcnRzWzJdKVxuICAgICAgICAgICYmIG1hdGNoUGF0aChwYXJ0c1szXSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZ25vcmUgaW52YWxpZCBtYXRjaCBydWxlc1xuICAgICAgdGVzdCA9ICgpID0+IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyB0ZXN0IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0QmxhY2tsaXN0KHVybCkge1xuICBsZXQgcmVzID0gYmxDYWNoZVt1cmxdO1xuICBpZiAocmVzID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBydWxlID0gYmxhY2tsaXN0UnVsZXMuZmluZCgoeyB0ZXN0IH0pID0+IHRlc3QodXJsKSk7XG4gICAgcmVzID0gcnVsZT8ucmVqZWN0ICYmIHJ1bGUudGV4dDtcbiAgICB1cGRhdGVCbGFja2xpc3RDYWNoZSh1cmwsIHJlcyB8fCBmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0QmxhY2tsaXN0KGxpc3QpIHtcbiAgY2FjaGUuYmF0Y2godHJ1ZSk7XG4gIGNvbnN0IHJ1bGVzID0gbGlzdCA9PSBudWxsID8gZ2V0T3B0aW9uKCdibGFja2xpc3QnKSA6IGxpc3Q7XG4gIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgIGNvbnNvbGUuaW5mbygnUmVzZXQgYmxhY2tsaXN0OicsIHJ1bGVzKTtcbiAgfVxuICAvLyBYWFggY29tcGF0aWJsZSB3aXRoIHtBcnJheX0gbGlzdCBpbiB2Mi42LjEtXG4gIGJsYWNrbGlzdFJ1bGVzID0gKEFycmF5LmlzQXJyYXkocnVsZXMpID8gcnVsZXMgOiAocnVsZXMgfHwgJycpLnNwbGl0KCdcXG4nKSlcbiAgLm1hcCgodGV4dCkgPT4ge1xuICAgIHRleHQgPSB0ZXh0LnRyaW0oKTtcbiAgICBpZiAoIXRleHQgfHwgdGV4dC5zdGFydHNXaXRoKCcjJykpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1vZGUgPSB0ZXh0LnN0YXJ0c1dpdGgoJ0AnKSAmJiB0ZXh0LnNwbGl0KC9cXHMvLCAxKVswXTtcbiAgICBjb25zdCBydWxlID0gbW9kZSA/IHRleHQuc2xpY2UobW9kZS5sZW5ndGggKyAxKS50cmltKCkgOiB0ZXh0O1xuICAgIGNvbnN0IHJlamVjdCA9IG1vZGUgIT09ICdAaW5jbHVkZScgJiYgbW9kZSAhPT0gJ0BtYXRjaCc7IC8vIEBpbmNsdWRlIGFuZCBAbWF0Y2ggPSB3aGl0ZWxpc3RcbiAgICBjb25zdCB7IHRlc3QgfSA9IG1vZGUgPT09ICdAaW5jbHVkZScgfHwgbW9kZSA9PT0gJ0BleGNsdWRlJyAmJiBhdXRvUmVnKHJ1bGUpXG4gICAgICB8fCAhbW9kZSAmJiAhcnVsZS5pbmNsdWRlcygnLycpICYmIG1hdGNoVGVzdGVyKGAqOi8vJHtydWxlfS8qYCkgLy8gZG9tYWluXG4gICAgICB8fCBtYXRjaFRlc3RlcihydWxlKTsgLy8gQG1hdGNoIGFuZCBAZXhjbHVkZS1tYXRjaFxuICAgIHJldHVybiB7IHJlamVjdCwgdGVzdCwgdGV4dCB9O1xuICB9KVxuICAuZmlsdGVyKEJvb2xlYW4pO1xuICBibENhY2hlID0ge307XG4gIGJsQ2FjaGVTaXplID0gMDtcbiAgY2FjaGUuYmF0Y2goZmFsc2UpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVCbGFja2xpc3RDYWNoZShrZXksIHZhbHVlKSB7XG4gIGJsQ2FjaGVba2V5XSA9IHZhbHVlO1xuICBibENhY2hlU2l6ZSArPSBrZXkubGVuZ3RoO1xuICBpZiAoYmxDYWNoZVNpemUgPiBNQVhfQkxfQ0FDSEVfTEVOR1RIKSB7XG4gICAgT2JqZWN0LmtleXMoYmxDYWNoZSlcbiAgICAuc29tZSgoaykgPT4ge1xuICAgICAgYmxDYWNoZVNpemUgLT0gay5sZW5ndGg7XG4gICAgICBkZWxldGUgYmxDYWNoZVtrXTtcbiAgICAgIC8vIHJlZHVjZSB0aGUgY2FjaGUgdG8gNzUlIHNvIHRoYXQgdGhpcyBmdW5jdGlvbiBkb2Vzbid0IHJ1biB0b28gb2Z0ZW4uXG4gICAgICByZXR1cm4gYmxDYWNoZVNpemUgPCBNQVhfQkxfQ0FDSEVfTEVOR1RIICogMyAvIDQ7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFNjcmlwdE5hbWUsIGkxOG4sIHJlcXVlc3QsIGNvbXBhcmVWZXJzaW9uLCBzZW5kQ21kLCB0cnVlSm9pbiB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IENNRF9TQ1JJUFRfVVBEQVRFLCBJU19ERVYgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgZmV0Y2hSZXNvdXJjZXMsIGdldFNjcmlwdEJ5SWQsIGdldFNjcmlwdHMsIHBhcnNlU2NyaXB0IH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgeyBwYXJzZU1ldGEgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgeyBnZXRPcHRpb24sIHNldE9wdGlvbiB9IGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8dHJ1ZT8+fSAqL1xuICBhc3luYyBDaGVja1VwZGF0ZShpZCkge1xuICAgIGNvbnN0IHNjcmlwdCA9IGdldFNjcmlwdEJ5SWQoaWQpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjaGVja0FsbEFuZE5vdGlmeShbc2NyaXB0XSk7XG4gICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSAqL1xuICBhc3luYyBDaGVja1VwZGF0ZUFsbCgpIHtcbiAgICBzZXRPcHRpb24oJ2xhc3RVcGRhdGUnLCBEYXRlLm5vdygpKTtcbiAgICBjb25zdCB0b1VwZGF0ZSA9IGdldFNjcmlwdHMoKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNvbmZpZy5zaG91bGRVcGRhdGUpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjaGVja0FsbEFuZE5vdGlmeSh0b1VwZGF0ZSk7XG4gICAgcmV0dXJuIHJlc3VsdHMuaW5jbHVkZXModHJ1ZSk7XG4gIH0sXG59KTtcblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBbGxBbmROb3RpZnkoc2NyaXB0cykge1xuICBjb25zdCBub3RlcyA9IFtdO1xuICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAoaXRlbSA9PiBjaGVja1VwZGF0ZShpdGVtLCBub3RlcykpKTtcbiAgaWYgKG5vdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIG5vdGlmeShub3Rlc1swXSk7XG4gIH0gZWxzZSBpZiAobm90ZXMubGVuZ3RoKSB7XG4gICAgbm90aWZ5KHtcbiAgICAgIC8vIEZGIGRvZXNuJ3Qgc2hvdyBub3RpZmljYXRpb25zIG9mIHR5cGU6J2xpc3QnIHNvIHdlJ2xsIHVzZSBgdGV4dGAgZXZlcnl3aGVyZVxuICAgICAgdGV4dDogbm90ZXMubWFwKG4gPT4gbi50ZXh0KS5qb2luKCdcXG4nKSxcbiAgICAgIG9uQ2xpY2s6IGJyb3dzZXIucnVudGltZS5vcGVuT3B0aW9uc1BhZ2UsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmNvbnN0IHByb2Nlc3NlcyA9IHt9O1xuXG4vLyByZXNvbHZlcyB0byB0cnVlIGlmIHN1Y2Nlc3NmdWxseSB1cGRhdGVkXG5mdW5jdGlvbiBjaGVja1VwZGF0ZShzY3JpcHQsIG5vdGVzKSB7XG4gIGNvbnN0IHsgaWQgfSA9IHNjcmlwdC5wcm9wcztcbiAgY29uc3QgcHJvbWlzZSA9IHByb2Nlc3Nlc1tpZF0gfHwgKHByb2Nlc3Nlc1tpZF0gPSBkb0NoZWNrVXBkYXRlKHNjcmlwdCwgbm90ZXMpKTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRvQ2hlY2tVcGRhdGUoc2NyaXB0LCBub3Rlcykge1xuICBjb25zdCB7IGlkIH0gPSBzY3JpcHQucHJvcHM7XG4gIGxldCBtc2dPaztcbiAgbGV0IG1zZ0VycjtcbiAgbGV0IHJlc291cmNlT3B0cztcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVwZGF0ZSB9ID0gYXdhaXQgcGFyc2VTY3JpcHQoe1xuICAgICAgaWQsXG4gICAgICBjb2RlOiBhd2FpdCBkb3dubG9hZFVwZGF0ZShzY3JpcHQpLFxuICAgICAgdXBkYXRlOiB7IGNoZWNraW5nOiBmYWxzZSB9LFxuICAgIH0pO1xuICAgIG1zZ09rID0gaTE4bignbXNnU2NyaXB0VXBkYXRlZCcsIFtnZXRTY3JpcHROYW1lKHVwZGF0ZSldKTtcbiAgICByZXNvdXJjZU9wdHMgPSB7IGNhY2hlOiAnbm8tY2FjaGUnIH07XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKHVwZGF0ZSkge1xuICAgIG1zZ0VyciA9IHVwZGF0ZS5lcnJvcjtcbiAgICAvLyBFaXRoZXIgcHJvY2VlZCB3aXRoIG5vcm1hbCBmZXRjaCBvbiBuby11cGRhdGUgb3Igc2tpcCBpdCBhbHRvZ2V0aGVyIG9uIGVycm9yXG4gICAgcmVzb3VyY2VPcHRzID0gIXVwZGF0ZS5lcnJvciAmJiAhdXBkYXRlLmNoZWNraW5nICYmIHt9O1xuICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5lcnJvcih1cGRhdGUpO1xuICB9IGZpbmFsbHkge1xuICAgIGlmIChyZXNvdXJjZU9wdHMgJiYgIUlTX0RFVikgeyAvLyBERVbnirbmgIHkuI3mm7TmlrByZXNvdXJjZVxuICAgICAgbXNnRXJyID0gYXdhaXQgZmV0Y2hSZXNvdXJjZXMoc2NyaXB0LCBudWxsLCByZXNvdXJjZU9wdHMpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHICYmIG1zZ0VycikgY29uc29sZS5lcnJvcihtc2dFcnIpO1xuICAgIH1cbiAgICBpZiAoY2FuTm90aWZ5KHNjcmlwdCkgJiYgKG1zZ09rIHx8IG1zZ0VycikpIHtcbiAgICAgIG5vdGVzLnB1c2goe1xuICAgICAgICBzY3JpcHQsXG4gICAgICAgIHRleHQ6IFttc2dPaywgbXNnRXJyXTo6dHJ1ZUpvaW4oJ1xcbicpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGRlbGV0ZSBwcm9jZXNzZXNbaWRdO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkVXBkYXRlKHsgcHJvcHM6IHsgaWQgfSwgbWV0YSwgY3VzdG9tIH0pIHtcbiAgY29uc3QgZG93bmxvYWRVUkwgPSBjdXN0b20uZG93bmxvYWRVUkwgfHwgbWV0YS5kb3dubG9hZFVSTCB8fCBjdXN0b20ubGFzdEluc3RhbGxVUkw7XG4gIGxldCB1cGRhdGVVUkwgPSBjdXN0b20udXBkYXRlVVJMIHx8IG1ldGEudXBkYXRlVVJMIHx8IGRvd25sb2FkVVJMO1xuICBpZiAoSVNfREVWICYmIHVwZGF0ZVVSTCkge1xuICAgIGlmIChtZXRhLmRldikge1xuICAgICAgY29uc3QgdXJscyA9IHVwZGF0ZVVSTC5zcGxpdCgnLycpO1xuICAgICAgdXBkYXRlVVJMID0gYGh0dHA6Ly8xMjcuMC4wLjE6JHttZXRhLmRldn0vJHt1cmxzW3VybHMubGVuZ3RoIC0gMV19YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlVVJMID0gbnVsbDtcbiAgICB9XG4gICAgY29uc29sZS5pbmZvKCdkb3dubG9hZFVwZGF0ZScsIGlkLCB1cGRhdGVVUkwpO1xuICB9XG4gIGlmICghdXBkYXRlVVJMKSB0aHJvdyBmYWxzZTtcbiAgbGV0IGVycm9yTWVzc2FnZTtcbiAgY29uc3QgdXBkYXRlID0ge307XG4gIGNvbnN0IHJlc3VsdCA9IHsgdXBkYXRlLCB3aGVyZTogeyBpZCB9IH07XG4gIGFubm91bmNlKGkxOG4oJ21zZ0NoZWNraW5nRm9yVXBkYXRlJykpO1xuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVxdWVzdCh1cGRhdGVVUkwsIHtcbiAgICAgIC8vIFRPRE86IGRvIGEgSEVBRCByZXF1ZXN0IGZpcnN0IHRvIGdldCBFVGFnIGhlYWRlciBhbmQgY29tcGFyZSB0byBzdG9yYWdlLm1vZFxuICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICBoZWFkZXJzOiB7IEFjY2VwdDogJ3RleHQveC11c2Vyc2NyaXB0LW1ldGEsKi8qJyB9LFxuICAgIH0pO1xuICAgIGlmIChJU19ERVYpIHJldHVybiBkYXRhO1xuICAgIGNvbnN0IHsgdmVyc2lvbiB9ID0gcGFyc2VNZXRhKGRhdGEpO1xuICAgIGlmIChjb21wYXJlVmVyc2lvbihtZXRhLnZlcnNpb24sIHZlcnNpb24pID49IDApIHtcbiAgICAgIGFubm91bmNlKGkxOG4oJ21zZ05vVXBkYXRlJyksIHsgY2hlY2tpbmc6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSBpZiAoIWRvd25sb2FkVVJMKSB7XG4gICAgICBhbm5vdW5jZShpMThuKCdtc2dOZXdWZXJzaW9uJyksIHsgY2hlY2tpbmc6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbm5vdW5jZShpMThuKCdtc2dVcGRhdGluZycpKTtcbiAgICAgIGVycm9yTWVzc2FnZSA9IGkxOG4oJ21zZ0Vycm9yRmV0Y2hpbmdTY3JpcHQnKTtcbiAgICAgIHJldHVybiAoYXdhaXQgcmVxdWVzdChkb3dubG9hZFVSTCwgeyBjYWNoZTogJ25vLWNhY2hlJyB9KSkuZGF0YTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICBhbm5vdW5jZShlcnJvck1lc3NhZ2UgfHwgaTE4bignbXNnRXJyb3JGZXRjaGluZ1VwZGF0ZUluZm8nKSwgeyBlcnJvciB9KTtcbiAgfVxuICB0aHJvdyB1cGRhdGU7XG4gIGZ1bmN0aW9uIGFubm91bmNlKG1lc3NhZ2UsIHsgZXJyb3IsIGNoZWNraW5nID0gIWVycm9yIH0gPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odXBkYXRlLCB7XG4gICAgICBtZXNzYWdlLFxuICAgICAgY2hlY2tpbmcsXG4gICAgICBlcnJvcjogZXJyb3IgPyBgJHtpMThuKCdnZW5lcmljRXJyb3InKX0gJHtlcnJvci5zdGF0dXN9LCAke2Vycm9yLnVybH1gIDogbnVsbCxcbiAgICAgIC8vIGBudWxsYCBpcyB0cmFuc2ZlcmFibGUgaW4gQ2hyb21lIHVubGlrZSBgdW5kZWZpbmVkYFxuICAgIH0pO1xuICAgIHNlbmRDbWQoQ01EX1NDUklQVF9VUERBVEUsIHJlc3VsdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FuTm90aWZ5KHNjcmlwdCkge1xuICBjb25zdCBhbGxvd2VkID0gZ2V0T3B0aW9uKCdub3RpZnlVcGRhdGVzJyk7XG4gIHJldHVybiBnZXRPcHRpb24oJ25vdGlmeVVwZGF0ZXNHbG9iYWwnKVxuICAgID8gYWxsb3dlZFxuICAgIDogc2NyaXB0LmNvbmZpZy5ub3RpZnlVcGRhdGVzID8/IGFsbG93ZWQ7XG59XG5cbmZ1bmN0aW9uIG5vdGlmeSh7XG4gIHNjcmlwdCxcbiAgdGV4dCxcbiAgb25DbGljayA9ICgpID0+IGNvbW1hbmRzLk9wZW5FZGl0b3Ioc2NyaXB0LnByb3BzLmlkKSxcbn0pIHtcbiAgY29tbWFuZHMuTm90aWZpY2F0aW9uKHtcbiAgICB0ZXh0LFxuICAgIC8vIEZGIGRvZXNuJ3Qgc2hvdyB0aGUgbmFtZSBvZiB0aGUgZXh0ZW5zaW9uIGluIHRoZSB0aXRsZSBvZiB0aGUgbm90aWZpY2F0aW9uXG4gICAgdGl0bGU6IElTX0ZJUkVGT1ggPyBgJHtpMThuKCd0aXRsZVNjcmlwdFVwZGF0ZWQnKX0gLSAke2kxOG4oJ2V4dE5hbWUnKX1gIDogJycsXG4gIH0sIHVuZGVmaW5lZCwge1xuICAgIG9uQ2xpY2ssXG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgaXNFbXB0eSwgc2VuZFRhYkNtZCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IGZvckVhY2hFbnRyeSwgZm9yRWFjaEtleSwgb2JqZWN0U2V0IH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCB7IGdldFNjcmlwdCwgZ2V0VmFsdWVTdG9yZXNCeUlkcywgZHVtcFZhbHVlU3RvcmVzIH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbmNvbnN0IG9wZW5lcnMgPSB7fTsgLy8geyBzY3JpcHRJZDogeyB0YWJJZDogeyBmcmFtZUlkOiAxLCAuLi4gfSwgLi4uIH0gfVxubGV0IGNhY2hlID0ge307IC8vIHsgc2NyaXB0SWQ6IHsga2V5OiB7IGxhc3Q6IHZhbHVlLCB0YWJJZDogeyBmcmFtZUlkOiB2YWx1ZSB9IH0gfSB9XG5sZXQgdXBkYXRlU2NoZWR1bGVkO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59ICovXG4gIGFzeW5jIEdldFZhbHVlU3RvcmUoaWQpIHtcbiAgICBjb25zdCBzdG9yZXMgPSBhd2FpdCBnZXRWYWx1ZVN0b3Jlc0J5SWRzKFtpZF0pO1xuICAgIHJldHVybiBzdG9yZXNbaWRdIHx8IHt9O1xuICB9LFxuICAvKiogQHBhcmFtIHt7IHdoZXJlLCBzdG9yZSB9W119IGRhdGFcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gKi9cbiAgYXN5bmMgU2V0VmFsdWVTdG9yZXMoZGF0YSkge1xuICAgIC8vIFZhbHVlIHN0b3JlIHdpbGwgYmUgcmVwbGFjZWQgc29vbi5cbiAgICBjb25zdCBzdG9yZXMgPSBkYXRhLnJlZHVjZSgocmVzLCB7IHdoZXJlLCBzdG9yZSB9KSA9PiB7XG4gICAgICBjb25zdCBpZCA9IHdoZXJlLmlkIHx8IGdldFNjcmlwdCh3aGVyZSk/LnByb3BzLmlkO1xuICAgICAgaWYgKGlkKSByZXNbaWRdID0gc3RvcmU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0sIHt9KTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBkdW1wVmFsdWVTdG9yZXMoc3RvcmVzKSxcbiAgICAgIGJyb2FkY2FzdFZhbHVlU3RvcmVzKGdyb3VwU3RvcmVzQnlGcmFtZShzdG9yZXMpKSxcbiAgICBdKTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge3ZvaWR9ICovXG4gIFVwZGF0ZVZhbHVlKHsgaWQsIGtleSwgdmFsdWUgPSBudWxsIH0sIHNyYykge1xuICAgIG9iamVjdFNldChjYWNoZSwgW2lkLCBrZXksICdsYXN0J10sIHZhbHVlKTtcbiAgICBvYmplY3RTZXQoY2FjaGUsIFtpZCwga2V5LCBzcmMudGFiLmlkLCBzcmMuZnJhbWVJZF0sIHZhbHVlKTtcbiAgICB1cGRhdGVMYXRlcigpO1xuICB9LFxufSk7XG5cbmJyb3dzZXIudGFicy5vblJlbW92ZWQuYWRkTGlzdGVuZXIocmVzZXRWYWx1ZU9wZW5lcik7XG5icm93c2VyLnRhYnMub25SZXBsYWNlZC5hZGRMaXN0ZW5lcigoYWRkZWRJZCwgcmVtb3ZlZElkKSA9PiByZXNldFZhbHVlT3BlbmVyKHJlbW92ZWRJZCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRWYWx1ZU9wZW5lcih0YWJJZCkge1xuICBvcGVuZXJzOjpmb3JFYWNoRW50cnkoKFtpZCwgb3BlbmVyVGFic10pID0+IHtcbiAgICBpZiAodGFiSWQgaW4gb3BlbmVyVGFicykge1xuICAgICAgZGVsZXRlIG9wZW5lclRhYnNbdGFiSWRdO1xuICAgICAgaWYgKGlzRW1wdHkob3BlbmVyVGFicykpIGRlbGV0ZSBvcGVuZXJzW2lkXTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVmFsdWVPcGVuZXIodGFiSWQsIGZyYW1lSWQsIHNjcmlwdElkcykge1xuICBzY3JpcHRJZHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICBvYmplY3RTZXQob3BlbmVycywgW2lkLCB0YWJJZCwgZnJhbWVJZF0sIDEpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTGF0ZXIoKSB7XG4gIHdoaWxlICghdXBkYXRlU2NoZWR1bGVkKSB7XG4gICAgdXBkYXRlU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBhd2FpdCAwO1xuICAgIGNvbnN0IGN1cnJlbnRDYWNoZSA9IGNhY2hlO1xuICAgIGNhY2hlID0ge307XG4gICAgYXdhaXQgZG9VcGRhdGUoY3VycmVudENhY2hlKTtcbiAgICB1cGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBpZiAoaXNFbXB0eShjYWNoZSkpIGJyZWFrO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRvVXBkYXRlKGN1cnJlbnRDYWNoZSkge1xuICBjb25zdCBpZHMgPSBPYmplY3Qua2V5cyhjdXJyZW50Q2FjaGUpO1xuICBjb25zdCB2YWx1ZVN0b3JlcyA9IGF3YWl0IGdldFZhbHVlU3RvcmVzQnlJZHMoaWRzKTtcbiAgaWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgY3VycmVudENhY2hlW2lkXTo6Zm9yRWFjaEVudHJ5KChba2V5LCB7IGxhc3QgfV0pID0+IHtcbiAgICAgIG9iamVjdFNldCh2YWx1ZVN0b3JlcywgW2lkLCBrZXldLCBsYXN0IHx8IHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH0pO1xuICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZHVtcFZhbHVlU3RvcmVzKHZhbHVlU3RvcmVzKSxcbiAgICBicm9hZGNhc3RWYWx1ZVN0b3Jlcyhncm91cENhY2hlQnlGcmFtZShjdXJyZW50Q2FjaGUpLCB7IHBhcnRpYWw6IHRydWUgfSksXG4gIF0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBicm9hZGNhc3RWYWx1ZVN0b3Jlcyh0YWJGcmFtZURhdGEsIHsgcGFydGlhbCB9ID0ge30pIHtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgZm9yIChjb25zdCBbdGFiSWQsIGZyYW1lc10gb2YgT2JqZWN0LmVudHJpZXModGFiRnJhbWVEYXRhKSkge1xuICAgIGZvciAoY29uc3QgW2ZyYW1lSWQsIGZyYW1lRGF0YV0gb2YgT2JqZWN0LmVudHJpZXMoZnJhbWVzKSkge1xuICAgICAgaWYgKCFpc0VtcHR5KGZyYW1lRGF0YSkpIHtcbiAgICAgICAgaWYgKHBhcnRpYWwpIGZyYW1lRGF0YS5wYXJ0aWFsID0gdHJ1ZTtcbiAgICAgICAgdGFza3MucHVzaChzZW5kVGFiQ21kKCt0YWJJZCwgJ1VwZGF0ZWRWYWx1ZXMnLCBmcmFtZURhdGEsIHsgZnJhbWVJZDogK2ZyYW1lSWQgfSkpO1xuICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAyMCkgYXdhaXQgUHJvbWlzZS5hbGwodGFza3Muc3BsaWNlKDApKTsgLy8gdGhyb3R0bGluZ1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcyk7XG59XG5cbi8vIFJldHVybnMgcGVyIHRhYi9mcmFtZSBkYXRhIHdpdGggb25seSB0aGUgY2hhbmdlZCB2YWx1ZXNcbmZ1bmN0aW9uIGdyb3VwQ2FjaGVCeUZyYW1lKGNhY2hlRGF0YSkge1xuICBjb25zdCB0b1NlbmQgPSB7fTtcbiAgY2FjaGVEYXRhOjpmb3JFYWNoRW50cnkoKFtpZCwgc2NyaXB0RGF0YV0pID0+IHtcbiAgICBjb25zdCBkYXRhRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHNjcmlwdERhdGEpO1xuICAgIG9wZW5lcnNbaWRdOjpmb3JFYWNoRW50cnkoKFt0YWJJZCwgZnJhbWVzXSkgPT4ge1xuICAgICAgZnJhbWVzOjpmb3JFYWNoS2V5KChmcmFtZUlkKSA9PiB7XG4gICAgICAgIGRhdGFFbnRyaWVzLmZvckVhY2goKFtrZXksIGhpc3RvcnldKSA9PiB7XG4gICAgICAgICAgLy8gU2tpcHBpbmcgdGhpcyBmcmFtZSBpZiBpdHMgbGFzdCByZWNvcmRlZCB2YWx1ZSBpcyBpZGVudGljYWxcbiAgICAgICAgICBpZiAoaGlzdG9yeS5sYXN0ICE9PSBoaXN0b3J5W3RhYklkXT8uW2ZyYW1lSWRdKSB7XG4gICAgICAgICAgICBvYmplY3RTZXQodG9TZW5kLCBbdGFiSWQsIGZyYW1lSWQsIGlkLCBrZXldLCBoaXN0b3J5Lmxhc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB0b1NlbmQ7XG59XG5cbi8vIFJldHVybnMgcGVyIHRhYi9mcmFtZSBkYXRhXG5mdW5jdGlvbiBncm91cFN0b3Jlc0J5RnJhbWUoc3RvcmVzKSB7XG4gIGNvbnN0IHRvU2VuZCA9IHt9O1xuICBzdG9yZXM6OmZvckVhY2hFbnRyeSgoW2lkLCBzdG9yZV0pID0+IHtcbiAgICBvcGVuZXJzW2lkXTo6Zm9yRWFjaEVudHJ5KChbdGFiSWQsIGZyYW1lc10pID0+IHtcbiAgICAgIGZyYW1lczo6Zm9yRWFjaEtleShmcmFtZUlkID0+IHtcbiAgICAgICAgb2JqZWN0U2V0KHRvU2VuZCwgW3RhYklkLCBmcmFtZUlkLCBpZF0sIHN0b3JlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHRvU2VuZDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGFsbG93ZWQpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIHRoaXMuYWxsb3dlZCA9IGFsbG93ZWQ7XG4gIH1cblxuICBjaGVja1R5cGUodHlwZSkge1xuICAgIGlmICh0aGlzLmFsbG93ZWQgJiYgIXRoaXMuYWxsb3dlZC5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGV2ZW50IHR5cGU6ICR7dHlwZX1gKTtcbiAgICB9XG4gIH1cblxuICBvbih0eXBlLCBoYW5kbGUpIHtcbiAgICB0aGlzLmNoZWNrVHlwZSh0eXBlKTtcbiAgICBjb25zdCB7IGV2ZW50cyB9ID0gdGhpcztcbiAgICBsZXQgaGFuZGxlcnMgPSBldmVudHNbdHlwZV07XG4gICAgaWYgKCFoYW5kbGVycykge1xuICAgICAgaGFuZGxlcnMgPSBbXTtcbiAgICAgIGV2ZW50c1t0eXBlXSA9IGhhbmRsZXJzO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gdGhpcy5vZmYodHlwZSwgaGFuZGxlKTtcbiAgfVxuXG4gIG9mZih0eXBlLCBoYW5kbGUpIHtcbiAgICB0aGlzLmNoZWNrVHlwZSh0eXBlKTtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuZXZlbnRzW3R5cGVdO1xuICAgIGlmIChoYW5kbGVycykge1xuICAgICAgY29uc3QgaSA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlKTtcbiAgICAgIGlmIChpID49IDApIGhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICBlbWl0KHR5cGUsIGRhdGEpIHtcbiAgICB0aGlzLmNoZWNrVHlwZSh0eXBlKTtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuZXZlbnRzW3R5cGVdO1xuICAgIGlmIChoYW5kbGVycykge1xuICAgICAgY29uc3QgZXZ0ID0ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBkYXRhLFxuICAgICAgICBkZWZhdWx0UHJldmVudGVkOiBmYWxzZSxcbiAgICAgICAgcHJldmVudERlZmF1bHQoKSB7XG4gICAgICAgICAgZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGhhbmRsZXJzLnNvbWUoKGhhbmRsZSkgPT4ge1xuICAgICAgICBoYW5kbGUoZXZ0KTtcbiAgICAgICAgcmV0dXJuIGV2dC5kZWZhdWx0UHJldmVudGVkO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdGxkanMgZnJvbSAndGxkanMnO1xuLy8gaW1wb3J0IHsgZnJvbVVzZXJTZXR0aW5ncyB9IGZyb20gJ3RsZGpzJztcbi8vIGltcG9ydCBUcmllIGZyb20gJ3RsZGpzL2xpYi9zdWZmaXgtdHJpZSc7XG4vLyBpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnIy9jb21tb24nO1xuXG4vLyBsZXQgdGxkanM7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBpbml0VExEKHJlbW90ZSkge1xuLy8gICAvLyBUTEQgcnVsZXMgYXJlIHRvbyBsYXJnZSB0byBiZSBwYWNrZWQsIGRvd25sb2FkIHRoZW0gYXQgcnVudGltZS5cbi8vICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vdmlvbGVudG1vbmtleS50b3Avc3RhdGljL3RsZC1ydWxlcy5qc29uJztcbi8vICAgY29uc3Qga2V5ID0gJ2RhdDp0bGRSdWxlcyc7XG4vLyAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoa2V5KVxuLy8gICAudGhlbigoeyBba2V5XTogdGxkUnVsZXMgfSkgPT4ge1xuLy8gICAgIGlmICh0bGRSdWxlcykgcmV0dXJuIHRsZFJ1bGVzO1xuLy8gICAgIGlmICghcmVtb3RlKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ2lnbm9yZSBUTEQnKTtcbi8vICAgICByZXR1cm4gcmVxdWVzdCh1cmwsIHsgcmVzcG9uc2VUeXBlOiAnanNvbicgfSlcbi8vICAgICAudGhlbigoeyBkYXRhOiBydWxlcyB9KSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmluZm8oJ0Rvd25sb2FkZWQgcHVibGljIHN1ZmZpeCBkYXRhJyk7XG4vLyAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IFtrZXldOiBydWxlcyB9KVxuLy8gICAgICAgLnRoZW4oKCkgPT4gcnVsZXMpO1xuLy8gICAgIH0pO1xuLy8gICB9KVxuLy8gICAudGhlbih0bGRSdWxlcyA9PiB7XG4vLyAgICAgY29uc29sZS5pbmZvKCdJbml0aWFsaXplZCBUTEQnKTtcbi8vICAgICB0bGRqcyA9IGZyb21Vc2VyU2V0dGluZ3MoeyBydWxlczogVHJpZS5mcm9tSnNvbih0bGRSdWxlcykgfSk7XG4vLyAgIH0pXG4vLyAgIC5jYXRjaChlcnIgPT4ge1xuLy8gICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5lcnJvcihlcnIpO1xuLy8gICAgIGNvbnNvbGUuaW5mbygnRmFpbGVkIGluaXRpYWxpemluZyBUTEQnKTtcbi8vICAgfSk7XG4vLyB9XG5leHBvcnQgZnVuY3Rpb24gaW5pdFRMRCgpIHt9XG5cbmZ1bmN0aW9uIGV4cG9ydE1ldGhvZChrZXkpIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB0bGRqcyAmJiB0bGRqc1trZXldKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkeSgpIHtcbiAgcmV0dXJuICEhdGxkanM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXREb21haW4gPSBleHBvcnRNZXRob2QoJ2dldERvbWFpbicpO1xuZXhwb3J0IGNvbnN0IGdldFN1YmRvbWFpbiA9IGV4cG9ydE1ldGhvZCgnZ2V0U3ViZG9tYWluJyk7XG5leHBvcnQgY29uc3QgZ2V0UHVibGljU3VmZml4ID0gZXhwb3J0TWV0aG9kKCdnZXRQdWJsaWNTdWZmaXgnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=