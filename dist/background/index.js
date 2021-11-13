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
  const interval = _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["IS_DEV"] ? 10000 : (+Object(_utils_options__WEBPACK_IMPORTED_MODULE_9__["getOption"])('autoUpdate') || 0) * _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_2__["TIMEOUT_24HOURS"];
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
    if (resourceOpts) {
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
  const updateURL = custom.updateURL || meta.updateURL || downloadURL; // if (IS_DEV && updateURL) {
  //   // new URL(updateURL);
  //   console.info('downloadUpdate', id, meta, updateURL);
  //   updateURL = null;
  // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL25vZGVfbW9kdWxlcy9wdW55Y29kZS9wdW55Y29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cmwvdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cmwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3BsdWdpbi9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvcGx1Z2luL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3N5bmMvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9zeW5jL2Ryb3Bib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvc3luYy9nb29nbGVkcml2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9zeW5jL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3N5bmMvb25lZHJpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvc3luYy93ZWJkYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2RiLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9ob3RrZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9wYXRjaC1kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9wb3B1cC10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3ByZWluamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3N0b3JhZ2UtZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy90ZW1wbGF0ZS1ob29rLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3Rlc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdGxkLmpzIl0sIm5hbWVzIjpbImhvb2tPcHRpb25zIiwiY2hhbmdlcyIsImF1dG9VcGRhdGUiLCJTQ1JJUFRfVEVNUExBVEUiLCJyZXNldFNjcmlwdFRlbXBsYXRlIiwic2VuZENtZCIsIk9iamVjdCIsImFzc2lnbiIsImNvbW1hbmRzIiwiR2V0RGF0YSIsImlkcyIsImRhdGEiLCJnZXREYXRhIiwic3luYyIsIkdldEluamVjdGVkIiwidXJsIiwiZm9yY2VDb250ZW50Iiwic3JjIiwiZnJhbWVJZCIsInRhYiIsInRhYklkIiwiaWQiLCJyZXNldFZhbHVlT3BlbmVyIiwiY2xlYXJSZXF1ZXN0c0J5VGFiSWQiLCJyZXMiLCJnZXRJbmplY3RlZFNjcmlwdHMiLCJmZWVkYmFjayIsImluamVjdCIsInZhbE9wSWRzIiwiaXNQb3B1cFNob3duIiwicG9wdXBUYWJzIiwibGVuZ3RoIiwic2V0VGltZW91dCIsIkluamVjdGlvbkZlZWRiYWNrIiwiYWRkVmFsdWVPcGVuZXIiLCJHZXRUYWJEb21haW4iLCJnZXRBY3RpdmVUYWIiLCJwZW5kaW5nVXJsIiwiaG9zdCIsIm1hdGNoIiwiZG9tYWluIiwidGxkIiwiU2V0VGltZW91dCIsIm1zIiwibWFrZVBhdXNlIiwiY29tbWFuZHNUb1N5bmMiLCJjb21tYW5kc1RvU3luY0lmVHJ1dGh5IiwiaGFuZGxlQ29tbWFuZE1lc3NhZ2UiLCJyZXEiLCJjbWQiLCJpbmNsdWRlcyIsImludGVydmFsIiwiSVNfREVWIiwiZ2V0T3B0aW9uIiwiVElNRU9VVF8yNEhPVVJTIiwiZWxhcHNlZCIsIkRhdGUiLCJub3ciLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsIk1hdGgiLCJtaW4iLCJUSU1FT1VUX01BWCIsImluaXRCdWlsZGluIiwicmVxdWVzdCIsIkJVSUxEX0lOX1NDUklQVF9TUkMiLCJjYWNoZSIsImhlYWRlcnMiLCJBY2NlcHQiLCJQYXJzZVNjcmlwdCIsImNvZGUiLCJjdXN0b20iLCJidWlsZEluIiwid2hlcmUiLCJpbml0aWFsaXplIiwiZ2xvYmFsIiwiZGVlcENvcHkiLCJicm93c2VyIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwiSVNfRklSRUZPWCIsImFyZ3MiLCJjYXRjaCIsImUiLCJQcm9taXNlIiwicmVqZWN0IiwiRXJyb3IiLCJjb25zb2xlIiwiaW5mbyIsImNoZWNrUmVtb3ZlIiwic2V0SW50ZXJ2YWwiLCJhcGkiLCJjaHJvbWUiLCJkZWNsYXJhdGl2ZUNvbnRlbnQiLCJvblBhZ2VDaGFuZ2VkIiwiZ2V0UnVsZXMiLCJydWxlIiwibmV3SWQiLCJwcm9jZXNzIiwicmVtb3ZlUnVsZXMiLCJhZGRSdWxlcyIsImNvbmRpdGlvbnMiLCJQYWdlU3RhdGVNYXRjaGVyIiwicGFnZVVybCIsInVybENvbnRhaW5zIiwiYWN0aW9ucyIsIlJlcXVlc3RDb250ZW50U2NyaXB0IiwianMiLCJnZXRNYW5pZmVzdCIsImNvbnRlbnRfc2NyaXB0cyIsIkV2ZW50RW1pdHRlciIsInNjcmlwdCIsInVwZGF0ZSIsImxpc3QiLCJnZXRTY3JpcHRzIiwiZ2V0IiwiR2V0U2NyaXB0Q29kZSIsInJlbW92ZSIsIk1hcmtSZW1vdmVkIiwicmVtb3ZlZCIsInNlcnZpY2VOYW1lcyIsInNlcnZpY2VDbGFzc2VzIiwic2VydmljZXMiLCJhdXRvU3luYyIsImRlYm91bmNlIiwiVElNRU9VVF9IT1VSIiwid29ya2luZyIsInJlc29sdmUiLCJzeW5jQ29uZmlnIiwiZ2V0SXRlbUZpbGVuYW1lIiwibmFtZSIsInVyaSIsImlzU2NyaXB0RmlsZSIsInRlc3QiLCJnZXRVUkkiLCJpIiwiaW5kZXhPZiIsInZlcnNpb24iLCJzbGljZSIsInNwbGl0IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXJyIiwiaW5pdENvbmZpZyIsImtleSIsImRlZiIsImtleXMiLCJub3JtYWxpemVLZXlzIiwidW5zaGlmdCIsInNldCIsInZhbHVlIiwic2V0T3B0aW9uIiwiaW5pdCIsImNvbmZpZyIsInNlcnZpY2VDb25maWciLCJnZXRLZXlzIiwidmFsIiwiZm9yRWFjaEVudHJ5IiwiayIsInYiLCJjbGVhciIsInNlcnZpY2VTdGF0ZSIsInZhbGlkU3RhdGVzIiwiaW5pdGlhbFN0YXRlIiwib25DaGFuZ2UiLCJzdGF0ZSIsIm5ld1N0YXRlIiwid2FybiIsImlzIiwic3RhdGVzIiwiZW5zdXJlQXJyYXkiLCJnZXRTdGF0ZXMiLCJtYXAiLCJzZXJ2aWNlIiwiZGlzcGxheU5hbWUiLCJhdXRoU3RhdGUiLCJzeW5jU3RhdGUiLCJsYXN0U3luYyIsInByb2dyZXNzIiwicHJvcGVydGllcyIsInVzZXJDb25maWciLCJnZXRVc2VyQ29uZmlnIiwiZ2V0U2NyaXB0RGF0YSIsInN5bmNWZXJzaW9uIiwiZXh0cmEiLCJwcm9wcyIsIm9iamVjdFBpY2siLCJtb3JlIiwiZW5hYmxlZCIsInNob3VsZFVwZGF0ZSIsImxhc3RVcGRhdGVkIiwicGFyc2VTY3JpcHREYXRhIiwicmF3Iiwib2JqIiwiSlNPTiIsInBhcnNlIiwib2JqZWN0UHVyaWZ5IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInNlcnZpY2VGYWN0b3J5IiwiYmFzZSIsIlNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImV4dGVuZCIsImV4dGVuZFNlcnZpY2UiLCJvcHRpb25zIiwiY3JlYXRlIiwib25TdGF0ZUNoYW5nZSIsIkJhc2VTZXJ2aWNlIiwiZGVsYXlUaW1lIiwidXJsUHJlZml4IiwibWV0YUZpbGUiLCJhdXRoVHlwZSIsIm5vb3AiLCJzZXRVc2VyQ29uZmlnIiwiZmluaXNoZWQiLCJ0b3RhbCIsImxhc3RGZXRjaCIsInN0YXJ0U3luYyIsInN5bmNGYWN0b3J5IiwiZXZlbnRzIiwiZ2V0RXZlbnRFbWl0dGVyIiwibG9nIiwicHJvbWlzZSIsImRlYm91bmNlZFJlc29sdmUiLCJzaG91bGRTeW5jIiwiZ2V0Q3VycmVudCIsImdldFJlYWR5IiwidGhlbiIsImVycm9yIiwicHJlcGFyZUhlYWRlcnMiLCJwcmVwYXJlIiwiaW5pdFRva2VuIiwidXNlciIsInR5cGUiLCJjaGVja1N5bmMiLCJhY3F1aXJlTG9jayIsInJlbGVhc2VMb2NrIiwiaGFuZGxlTWV0YUVycm9yIiwiZ2V0TWV0YSIsInRva2VuIiwiQXV0aG9yaXphdGlvbiIsImxvYWREYXRhIiwiZGVsYXkiLCJ0cyIsInN0YXJ0c1dpdGgiLCJwcmVmaXgiLCJnZXRMb2NhbERhdGEiLCJwbHVnaW5TY3JpcHQiLCJnZXRTeW5jRGF0YSIsInJlbW90ZU1ldGEiLCJhbGwiLCJyZW1vdGVEYXRhIiwibG9jYWxEYXRhIiwicmVtb3RlTWV0YURhdGEiLCJyZW1vdGVNZXRhSW5mbyIsInJlbW90ZVRpbWVzdGFtcCIsInRpbWVzdGFtcCIsInJlbW90ZUNoYW5nZWQiLCJnbG9iYWxMYXN0TW9kaWZpZWQiLCJyZW1vdGVJdGVtTWFwIiwibG9jYWxNZXRhIiwiZmlyc3RTeW5jIiwib3V0ZGF0ZWQiLCJwdXRMb2NhbCIsInB1dFJlbW90ZSIsImRlbFJlbW90ZSIsImRlbExvY2FsIiwidXBkYXRlTG9jYWwiLCJyZWR1Y2UiLCJpdGVtIiwiaXRlbUluZm8iLCJtb2RpZmllZCIsInBvc2l0aW9uIiwibGFzdE1vZGlmaWVkIiwicmVtb3RlSW5mbyIsInJlbW90ZUl0ZW0iLCJwdXNoIiwibG9jYWwiLCJyZW1vdGUiLCJwcm9taXNlUXVldWUiLCJvYmplY3RTZXQiLCJwdXQiLCJzdHJpbmdpZnkiLCJ1cGRhdGVzIiwidXBkYXRlU2NyaXB0SW5mbyIsInNvcnRTY3JpcHRzIiwiY2hhbmdlZCIsInNjcmlwdHMiLCJwcm9taXNlcyIsImVycm9ycyIsImZpbHRlciIsIkJvb2xlYW4iLCJyZWdpc3RlciIsIkZhY3RvcnkiLCJnZXRTZXJ2aWNlIiwic3luY09uZSIsImF1dGhvcml6ZSIsInJldm9rZSIsInNldENvbmZpZyIsIm9wZW5BdXRoUGFnZSIsInJlZGlyZWN0VXJpIiwidW5yZWdpc3RlcldlYlJlcXVlc3QiLCJ3ZWJSZXF1ZXN0Iiwib25CZWZvcmVSZXF1ZXN0IiwidXJscyIsInR5cGVzIiwidGFicyIsImNoZWNrQXV0aCIsImNhbmNlbCIsInJlbW92ZUxpc3RlbmVyIiwiY2xpZW50X2lkIiwicmVkaXJlY3RfdXJpIiwiZXNjUkUiLCJlc2NGdW5jIiwibSIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsImpzb25TdHJpbmdpZnlTYWZlIiwic3RyaW5nIiwicmVwbGFjZSIsIkRyb3Bib3giLCJtZXRob2QiLCJzdGF0dXMiLCJib2R5IiwicGF0aCIsInJlc3BvbnNlVHlwZSIsImVudHJpZXMiLCJub3JtYWxpemUiLCJtb2RlIiwicGFyYW1zIiwicmVzcG9uc2VfdHlwZSIsImR1bXBRdWVyeSIsImF1dGhvcml6ZWQiLCJsb2FkUXVlcnkiLCJhY2Nlc3NfdG9rZW4iLCJ1aWQiLCJzaXplIiwiY2xpZW50X3NlY3JldCIsInNjb3BlIiwiVU5BVVRIT1JJWkVEIiwiR29vZ2xlRHJpdmUiLCJyZWZyZXNoVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwiZ3JhbnRfdHlwZSIsInJlcXVlc3RVc2VyIiwiYWNjZXNzX3R5cGUiLCJub3RpZnkiLCJ0aXRsZSIsIm9iamVjdEdldCIsInNwYWNlcyIsImZpZWxkcyIsImZpbGVzIiwibWV0YUl0ZW0iLCJnb3RNZXRhIiwicHJvbXB0IiwiYm91bmRhcnkiLCJnZXRVbmlxSWQiLCJtZXRhZGF0YSIsInBhcmVudHMiLCJqb2luIiwiU3luY0F1dGhvcml6ZSIsIlN5bmNSZXZva2UiLCJTeW5jU3RhcnQiLCJTeW5jU2V0Q29uZmlnIiwiT25lRHJpdmUiLCJoZWFkZXIiLCJmaWxlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidXNlcl9pZCIsIktFWV9DSElMRFJFTiIsIlN5bWJvbCIsIlhOb2RlIiwibm9kZSIsIm5zTWFwIiwicGFyc2VBdHRycyIsInBhcnNlTmFtZSIsImZyb21YTUwiLCJ4bWwiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJhdHRyIiwiJCIsIm5vZGVUeXBlIiwidGFnTmFtZSIsIm5zIiwidGV4dCIsInRleHRDb250ZW50IiwidHJpbSIsImNoaWxkcmVuIiwiY2hpbGQiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiZmluZCIsIkRFRkFVTFRfQ09ORklHIiwic2VydmVyVXJsIiwiYW5vbnltb3VzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIldlYkRBViIsImVuZHNXaXRoIiwiVVJMIiwiYXV0aCIsIndpbmRvdyIsImJ0b2EiLCJjYWxsIiwiY3JlZGVudGlhbHMiLCJta2RpciIsInJlYWRkaXIiLCJkZXB0aCIsIml0ZW1zIiwicHJvcCIsImRpc3BsYXlOYW1lTm9kZSIsInVuZGVmaW5lZCIsImhyZWYiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImxvY2siLCJJZiIsImluaXRDYWNoZSIsImxpZmV0aW1lIiwiQ2FjaGVMb2FkIiwiQ2FjaGVIaXQiLCJoaXQiLCJDYWNoZVBvcCIsInBvcCIsInRleHRhcmVhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xpcGJvYXJkRGF0YSIsIlNldENsaXBib2FyZCIsImZvY3VzIiwicmV0IiwiZXhlY0NvbW1hbmQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInNldERhdGEiLCJzdG9yZSIsInN0b3JhZ2UiLCJzZXREYXRhQ2FjaGUiLCJkYXRhQ2FjaGUiLCJvbkR1bXAiLCJzY3JpcHRNYXAiLCJDaGVja1Bvc2l0aW9uIiwiQ2hlY2tSZW1vdmUiLCJHZXRTY3JpcHQiLCJnZXRTY3JpcHQiLCJFeHBvcnRaaXAiLCJ2YWx1ZXMiLCJnZXRQcm9wc0lkIiwiY29kZU1hcCIsImdldE11bHRpIiwiZ2V0T25lIiwiR2V0U2NyaXB0VmVyIiwib3B0cyIsIm1ldGEiLCJNb3ZlIiwib2Zmc2V0IiwiZ2V0U2NyaXB0QnlJZCIsImluZGV4Iiwic3BsaWNlIiwibm9ybWFsaXplUG9zaXRpb24iLCJSZW1vdmVTY3JpcHQiLCJQYXJzZU1ldGEiLCJwYXJzZU1ldGEiLCJwYXJzZVNjcmlwdCIsIlVwZGF0ZVNjcmlwdEluZm8iLCJWYWN1dW0iLCJ2YWN1dW0iLCJwcmVJbml0aWFsaXplIiwibGFzdFZlcnNpb24iLCJwYXRjaERCIiwic3RvcmVJbmZvIiwiaWRNYXAiLCJ1cmlNYXAiLCJtb2RzIiwicmVzVXJscyIsInJlbWVtYmVyVXJsIiwiXyIsImdldEludCIsImdldE5hbWVVUkkiLCJnZXREZWZhdWx0Q3VzdG9tIiwibWF4IiwicGF0aE1hcCIsImdyYW50IiwiU2V0IiwicmVxdWlyZSIsInJlc291cmNlcyIsImljb24iLCJtb2QiLCJyZW1vdmVNdWx0aSIsImRlZmF1bHRJbmplY3RJbnRvIiwiSU5KRUNUX1BBR0UiLCJjb21wYXJlVmVyc2lvbiIsIklOSkVDVF9BVVRPIiwidXBkYXRlTGFzdE1vZGlmaWVkIiwiZHVtcCIsInNvcnQiLCJhIiwiYiIsImdldFZhbHVlU3RvcmVzQnlJZHMiLCJkdW1wVmFsdWVTdG9yZXMiLCJ2YWx1ZURpY3QiLCJFTlZfQ0FDSEVfS0VZUyIsIkVOVl9SRVFfS0VZUyIsIkVOVl9WQUxVRV9JRFMiLCJHTVZBTFVFU19SRSIsIlJVTl9BVF9SRSIsImdldFNjcmlwdHNCeVVSTCIsImlzVG9wIiwiYWxsU2NyaXB0cyIsInRlc3RCbGFja2xpc3QiLCJub2ZyYW1lcyIsInRlc3RTY3JpcHQiLCJkaXNhYmxlZElkcyIsImVudlN0YXJ0IiwiZW52RGVsYXllZCIsImJ1aWxkUGF0aE1hcCIsInJ1bkF0IiwiZW52Iiwic29tZSIsInJlYWRFbnZpcm9ubWVudERhdGEiLCJTVE9SQUdFX1JPVVRFUyIsInJldHJpZWRTdG9yYWdlS2V5cyIsImlzUmV0cnkiLCJhcmVhIiwic3JjSWRzIiwiZ2V0S2V5IiwiZXJyMiIsImdldEljb25DYWNoZSIsImljb25VcmxzIiwiaXNSZW1vdGUiLCJtYWtlRGF0YVVyaSIsImZvcmNlIiwidG9SZW1vdmUiLCJUSU1FT1VUX1dFRUsiLCJnZXRVVUlEIiwicm5kIiwiVWludDE2QXJyYXkiLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJzYXZlU2NyaXB0Iiwib2xkU2NyaXB0IiwidXVpZCIsInJhbmRvbVVVSUQiLCJpMThuIiwiQ01EX1NDUklQVF9VUERBVEUiLCJyZXN1bHQiLCJtZXNzYWdlIiwiaXNOZXciLCJuZXdTY3JpcHQiLCJDTURfU0NSSVBUX0FERCIsImhvbWVwYWdlVVJMIiwiZnJvbSIsImxhc3RJbnN0YWxsVVJMIiwiZmV0Y2hSZXNvdXJjZXMiLCJwbHVnaW5FdmVudHMiLCJlbWl0IiwiYmFzZVVybCIsImZ1bGxVcmwiLCJnZXRGdWxsVXJsIiwicmVzb3VyY2VDYWNoZSIsInJlcU9wdGlvbnMiLCJzbmF0Y2giLCJ2YWxpZGF0b3IiLCJjb250ZW50cyIsImZldGNoIiwidmFsaWRhdGVJbWFnZSIsImlnbm9yZURlcHNFcnJvcnMiLCJ0cnVlSm9pbiIsImZvcm1hdEh0dHBFcnJvciIsImJ1ZiIsImJsb2JVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwib25Eb25lIiwicmV2b2tlT2JqZWN0VVJMIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJfdmFjdXVtaW5nIiwibnVtRml4ZXMiLCJyZXNvbHZlU2VsZiIsInIiLCJ0b0ZldGNoIiwia2V5c1RvUmVtb3ZlIiwidmFsdWVLZXlzIiwiY2FjaGVLZXlzIiwicmVxdWlyZUtleXMiLCJjb2RlS2V5cyIsIm1hcHBpbmdzIiwiZm9yRWFjaEtleSIsInN1YnN0b3JlIiwidG91Y2giLCJzY3JpcHRJZCIsImZvckVhY2hWYWx1ZSIsImdldFNjcmlwdE5hbWUiLCJmaXhlcyIsIm9uIiwib2ZmIiwiZmlyZSIsImZ1bmMiLCJwb3N0SW5pdGlhbGl6ZSIsIm9uQ29tbWFuZCIsIk9wZW5FZGl0b3IiLCJyb3V0ZSIsIlRhYk9wZW4iLCJDQUNIRV9EVVJBVElPTiIsIkdldEltYWdlRGF0YSIsImxvYWRJbWFnZURhdGEiLCJiYXNlNjQiLCJTZXRCYWRnZSIsInNldEJhZGdlIiwiYnJvd3NlckFjdGlvbiIsImlnbm9yZUVycm9ycyIsImxhc3RFcnJvciIsIm1ha2VNZXRob2QiLCJmbiIsImJhZGdlcyIsIktFWV9JU19BUFBMSUVEIiwiS0VZX1NIT1dfQkFER0UiLCJLRVlfQkFER0VfQ09MT1IiLCJLRVlfQkFER0VfQ09MT1JfQkxPQ0tFRCIsImlzQXBwbGllZCIsInNob3dCYWRnZSIsImJhZGdlQ29sb3IiLCJiYWRnZUNvbG9yQmxvY2tlZCIsInRpdGxlQmxhY2tsaXN0ZWQiLCJ0aXRsZU5vbmluamVjdGFibGUiLCJpY29uQ2FjaGUiLCJqb2JzIiwic2V0SWNvbiIsInVwZGF0ZUJhZGdlIiwidXBkYXRlQmFkZ2VDb2xvciIsInVwZGF0ZVN0YXRlIiwiZm9yRWFjaFRhYiIsIm9uUmVtb3ZlZCIsIm9uVXBkYXRlZCIsImZhdkljb25VcmwiLCJ1bmlxdWUiLCJzZXRCYWRnZVRleHQiLCJzZXRCYWRnZUJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYmxvY2tlZCIsImluamVjdGFibGUiLCJJTkpFQ1RBQkxFX1RBQl9VUkxfUkUiLCJibGFja2xpc3RlZCIsInNldFRpdGxlIiwiaWNvbkRhdGEiLCJuIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwidG9EYXRhVVJMIiwiZ2V0SW1hZ2VEYXRhIiwiZXh0ZW5zaW9uUm9vdCIsImdldFVSTCIsIm1haW4iLCJydW4iLCJub3RpZmljYXRpb25zIiwiaWNvblVybCIsImRlZmF1bHRJbWFnZSIsImlzQ2xpY2thYmxlIiwiYnJvYWRjYXN0Iiwic2VuZE1lc3NhZ2UiLCJzZW5kTWVzc2FnZU9ySWdub3JlIiwicXVlcnkiLCJvcGVuZXJzIiwiTm90aWZpY2F0aW9uIiwiYmdFeHRyYXMiLCJub3RpZmljYXRpb25JZCIsIm9uQ2xpY2siLCJSZW1vdmVOb3RpZmljYXRpb24iLCJvbkNsaWNrZWQiLCJvcGVuZXJJZCIsInNlbmRUYWJDbWQiLCJvbkNsb3NlZCIsIkdldEFsbE9wdGlvbnMiLCJHZXRPcHRpb25zIiwiZGVmYXVsdHMiLCJtYXBFbnRyeSIsIlNldE9wdGlvbnMiLCJob29rcyIsImluaXRIb29rcyIsImNhbGxIb29rc0xhdGVyIiwiY2FsbEhvb2tzIiwiaW5pdFBlbmRpbmciLCJmaXJlQ2hhbmdlIiwibWFpbktleSIsImdldERlZmF1bHRPcHRpb24iLCJvcHRpb25LZXkiLCJvcHRpb25WYWx1ZSIsImhvb2siLCJpbmRleGVkREIiLCJvcGVuIiwib25zdWNjZXNzIiwidHJhbnNmb3JtIiwib251cGdyYWRlbmVlZGVkIiwiZGIiLCJ0eCIsInRyYW5zYWN0aW9uIiwicHJvY2Vzc2luZyIsImRvbmUiLCJnZXRBbGwiLCJzdG9yZU5hbWUiLCJvYmplY3RTdG9yZSIsInRyYW5zZm9ybVNjcmlwdCIsImFsbFZhbHVlcyIsImFsbENhY2hlIiwiYWxsUmVxdWlyZSIsIm9yaWdJbmNsdWRlIiwib3JpZ0V4Y2x1ZGUiLCJvcmlnTWF0Y2giLCJvcmlnRXhjbHVkZU1hdGNoIiwib25Db25uZWN0Iiwib25Qb3B1cE9wZW5lZCIsInByZWZldGNoU2V0UG9wdXAiLCJicm93c2VyX2FjdGlvbiIsImRlZmF1bHRfcG9wdXAiLCJwb3J0Iiwib25EaXNjb25uZWN0Iiwib25Qb3B1cENsb3NlZCIsIlNldFBvcHVwIiwiQVBJX0NPTkZJRyIsIlRJTUVfQUZURVJfU0VORCIsIlRJTUVfQUZURVJfUkVDRUlWRSIsIlRJTUVfS0VFUF9EQVRBIiwiY2FjaGVDb2RlIiwib25EaXNwb3NlIiwicmNzIiwicmNzUHJvbWlzZSIsInVucmVnaXN0ZXIiLCJJTkpFQ1RfSU5UTyIsIktFWV9FWFBPU0UiLCJLRVlfREVGX0lOSkVDVF9JTlRPIiwiS0VZX1hIUl9JTkpFQ1QiLCJleHBvc2UiLCJpbmplY3RJbnRvIiwieGhySW5qZWN0Iiwib25PcHRpb25DaGFuZ2VkIiwiZmVlZElkIiwicHJvY2Vzc0ZlZWRiYWNrIiwiZGVsIiwiY2FjaGVLZXkiLCJlbnZLZXkiLCJwcmVwYXJlU2NyaXB0IiwibmVlZHNJbmplY3Rpb24iLCJleGVjdXRlU2NyaXB0IiwicHJvcHNUb0NsZWFyIiwib25DaGFuZ2VkIiwiZGJLZXlzIiwiY2FjaGVWYWx1ZXMiLCJnZXRWYWx1ZXMiLCJkaXJ0eSIsImRlc3Ryb3kiLCJub3JtYWxpemVSZWFsbSIsImhhc093blByb3BlcnR5IiwiSU5KRUNUX01BUFBJTkciLCJ0b2dnbGVYaHJJbmplY3QiLCJ0b2dnbGVQcmVpbmplY3QiLCJzaXRlIiwiaXNFeHBvc2VkIiwiZW5hYmxlIiwib25PZmYiLCJvblNlbmRIZWFkZXJzIiwib25IZWFkZXJzUmVjZWl2ZWQiLCJPbkhlYWRlcnNSZWNlaXZlZE9wdGlvbnMiLCJFWFRSQV9IRUFERVJTIiwiaGFzIiwicHJlcGFyZVhockJsb2IiLCJyZXNwb25zZUhlYWRlcnMiLCJkZXRlY3RTdHJpY3RDc3AiLCJmb3JjZUNvbnRlbnRJbmplY3Rpb24iLCJwcmVwYXJlU2NyaXB0cyIsImlzTGF0ZSIsImhhc01vcmUiLCJldmVyeSIsInNjciIsImlzQ29udGVudFJlYWxtIiwidWEiLCJyZWdpc3RlclNjcmlwdERhdGFGRiIsImRhdGFLZXkiLCJyZXBsYWNlV2l0aEZ1bGxXaWR0aEZvcm0iLCJpc0NvbnRlbnQiLCJyZXFzIiwicmVxc1NsaWNlcyIsImNvbmNhdCIsImhhc1JlcXMiLCJpbmplY3RlZENvZGUiLCJtZXRhU3RyIiwiTUVUQUJMT0NLX1JFIiwicyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInJlc29sdmVEYXRhQ29kZVN0ciIsInZtUmVzb2x2ZSIsInZtRGF0YSIsImFsbEZyYW1lcyIsImNvbnRlbnRTY3JpcHRzIiwibWF0Y2hlcyIsInJlYWxtIiwiSU5KRUNUX0NPTlRFTlQiLCJWTV9WRVJJRlkiLCJDT05GSVJNX1VSTF9CQVNFIiwicmVxdWVzdHMiLCJkb3dubG9hZHMiLCJ2ZXJpZnkiLCJ0YWJSZXF1ZXN0cyIsImVuY29kZXIiLCJpc0Rvd25sb2FkUmVxIiwib3ZlcnJpZGVNaW1lVHlwZSIsImZpbGVOYW1lIiwiZXZ0IiwiY3VycmVudCIsImRvd25sb2FkSWQiLCJDb25maXJtSW5zdGFsbCIsImNvbmZpcm1JbnN0YWxsIiwiQ2hlY2tJbnN0YWxsZXJUYWIiLCJIdHRwUmVxdWVzdCIsImV2ZW50c1RvTm90aWZ5IiwiZG93bmxvYWQiLCJmaWxlbmFtZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiaHR0cFJlcXVlc3QiLCJBYm9ydFJlcXVlc3QiLCJhYm9ydCIsImNsZWFyUmVxdWVzdCIsIlJldm9rZUJsb2IiLCJzcGVjaWFsSGVhZGVycyIsIkhlYWRlckluamVjdG9yIiwiYXBpRmlsdGVyIiwiT25CZWZvcmVTZW5kSGVhZGVyc09wdGlvbnMiLCJoZWFkZXJzVG9JbmplY3QiLCJpc1ZtVmVyaWZ5IiwiaXNOb3RDb29raWUiLCJpc1NlbmRhYmxlIiwiaXNTZW5kYWJsZUFub24iLCJSRV9TRVRfQ09PS0lFIiwiUkVfU0VUX0NPT0tJRV9WQUxVRSIsIlJFX1NFVF9DT09LSUVfQVRUUiIsIlNBTUVfU0lURV9NQVAiLCJzdHJpY3QiLCJsYXgiLCJub25lIiwic2V0Q29va2llSW5TdG9yZSIsImhlYWRlclZhbHVlIiwiZXhlYyIsIm9wdFN0ciIsIm9wdCIsImlzSG9zdCIsImxhc3RJbmRleCIsInRvTG93ZXJDYXNlIiwic2FtZVNpdGUiLCJjb29raWVzIiwiZXhwaXJhdGlvbkRhdGUiLCJleHBpcmVzIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJzdG9yZUlkIiwiYXBpRXZlbnRzIiwib25CZWZvcmVTZW5kSGVhZGVycyIsImxpc3RlbmVyIiwicmVxdWVzdEhlYWRlcnMiLCJyZXF1ZXN0SWQiLCJyZXFJZCIsImNvcmVJZCIsIm5vTmF0aXZlQ29va2llIiwiaCIsImVuY29kZVdlYlJlcXVlc3RIZWFkZXIiLCJhZGQiLCJpc0VtcHR5IiwiQ0hVTktfU0laRSIsImJsb2IyY2h1bmsiLCJyZXNwb25zZSIsImJsb2IyYmFzZTY0IiwiYmxvYjJvYmplY3RVcmwiLCJ4aHJDYWxsYmFja1dyYXBwZXIiLCJsYXN0UHJvbWlzZSIsImNvbnRlbnRUeXBlIiwiZGF0YVNpemUiLCJudW1DaHVua3MiLCJyZXNwb25zZVRleHQiLCJzZW50IiwiYmxvYmJlZCIsImNodW5rZWQiLCJnZXRDaHVuayIsImdldFJlc3BvbnNlSGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsImdldFJlc3BvbnNlSGVhZGVyIiwiY2VpbCIsInNob3VsZE5vdGlmeSIsInNob3VsZFNlbmRSZXNwb25zZSIsInJlYWR5U3RhdGUiLCJjYiIsImZpbmFsVXJsIiwicmVzcG9uc2VVUkwiLCJjaHVuayIsInBvcyIsImxhc3QiLCJpc1NwZWNpYWxIZWFkZXIiLCJsb3dlckhlYWRlciIsImluY29nbml0byIsInhoclR5cGUiLCJ2bUhlYWRlcnMiLCJkZWNvZGVCb2R5Iiwic2hvdWxkU2VuZENvb2tpZXMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwibG93ZXJOYW1lIiwidGltZW91dCIsImdldEFsbENvb2tpZVN0b3JlcyIsInRhYklkcyIsImZpcmVmb3giLCJmaXJzdFBhcnR5RG9tYWluIiwiYyIsInNlc3Npb24iLCJvbmxvYWRlbmQiLCJzZW5kIiwid2FzQmxvYiIsInN0cmluZzJ1aW50OGFycmF5IiwiYXRvYiIsInAxIiwiaXNVc2VyU2NyaXB0IiwiY29uZmlybUtleSIsImFjdGl2ZSIsImNhblJlcGxhY2VDdXJUYWIiLCJmZiIsImNvbmZpcm1VcmwiLCJ3aW5kb3dJZCIsIndpbmRvd3MiLCJmb2N1c2VkIiwid2hpdGVsaXN0UmUiLCJSZWdFeHAiLCJibGFja2xpc3RSZSIsInJlc29sdmVWaXJ0dWFsVXJsIiwidmlydHVhbFVybFJlIiwibWF5YmVSZWRpcmVjdFZpcnR1YWxVcmxGRiIsImFwaUV2ZW50IiwiYmluZCIsIm9uQ3JlYXRlZCIsInJlZGlyZWN0VXJsIiwibWF5YmVJbnN0YWxsVXNlckpzIiwiYmluYXJ5VmFsdWUiLCJzdHJpbmcyYnl0ZVN0cmluZyIsImJ1ZmZlcjJzdHJpbmciLCJzdHIiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsIkNhY2hlTmV3U2NyaXB0IiwiTmV3U2NyaXB0IiwiYXJyYXlUeXBlIiwiZGVmYXVsdCIsImRlZmF1bHRUeXBlIiwibWV0YVR5cGVzIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJleGNsdWRlTWF0Y2giLCJyZXNvdXJjZSIsInBhaXIiLCJtZXRhT3B0aW9uYWxUeXBlcyIsImFudGlmZWF0dXJlIiwiY29tcGF0aWJsZSIsImNvbm5lY3QiLCJtZXRhQm9keSIsIl9tYXRjaCIsInJhd0tleSIsInJhd1ZhbHVlIiwia2V5TmFtZSIsImxvY2FsZSIsImNhbWVsS2V5IiwiZyIsInRvVXBwZXJDYXNlIiwibWV0YVR5cGUiLCJvbGRWYWx1ZSIsImhvbWVwYWdlIiwiZGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwibmFtZXNwYWNlIiwibmFtZVVSSSIsImVuY29kZUZpbGVuYW1lIiwicGllY2UiLCJkaWN0Iiwia2V5VmFsIiwiY2FjaGVPckZldGNoIiwiY2hlY2siLCJtYWtlUmF3IiwiaGFuZGxlcnMiLCJjYWNoZU9yRmV0Y2hIYW5kbGVyIiwiZG9GZXRjaCIsImlzTW9kaWZpZWQiLCJwYXRoSWQiLCJ2aWV3IiwiZXh0ZW5zaW9uIiwiZ2V0Vmlld3MiLCJsb2NhdGlvbiIsIm1heWJlSW5XaW5kb3ciLCJjb250YWluZXIiLCJpbnNlcnQiLCJwaW5uZWQiLCJzcmNUYWIiLCJzcmNVcmwiLCJpc0ludGVybmFsIiwiY29va2llU3RvcmVJZCIsImdldENvbnRhaW5lcklkIiwiY2FuT3BlbkluY29nbml0byIsIm5ld1RhYiIsInduZE9wdHMiLCJoYXNQb3MiLCJ3bmQiLCJvcGVuZXJUYWJJZFN1cHBvcnRlZCIsIm9wZW5lclRhYklkIiwiVGFiQ2xvc2UiLCJUYWJGb2N1cyIsInJlYWR5IiwiZGVmaW5lUHJvcGVydGllcyIsIm9zIiwiU0NSSVBUX1RFTVBMQVRFX0VESVRFRCIsIklOSVRJQUxfVEVNUExBVEUiLCJlZGl0ZWQiLCJ0ZW1wbGF0ZSIsImRlZmF1bHRUZW1wbGF0ZSIsIlRlc3RCbGFja2xpc3QiLCJyZXNldEJsYWNrbGlzdCIsIlJFX01BVENIX1BBUlRTIiwiYmxhY2tsaXN0UnVsZXMiLCJibGFja2xpc3QiLCJSRV9IVFRQX09SX0hUVFBTIiwiTUFYX0JMX0NBQ0hFX0xFTkdUSCIsImJsQ2FjaGUiLCJibENhY2hlU2l6ZSIsInRlc3RSdWxlcyIsInJ1bGVzIiwicnVsZUJ1aWxkZXIiLCJtYXRjaGVyIiwidGVzdEdsb2IiLCJhdXRvUmVnIiwidGVzdE1hdGNoIiwibWF0Y2hUZXN0ZXIiLCJiYXRjaCIsIm1hdCIsIm1lcmdlTGlzdHMiLCJpbmMiLCJleGMiLCJleGNNYXQiLCJvayIsInN0cjJSRSIsInJlIiwiYmluZFJFIiwicmVTdHIiLCJyZVRsZFN0ciIsInRzdHIiLCJzdWZmaXgiLCJtYXRjaFNjaGVtZSIsIlJFX1NUUl9BTlkiLCJSRV9TVFJfVExEIiwiaG9zdE1hdGNoZXIiLCJydWxlTEMiLCJ0bGRTdHIiLCJ0bGRTdWZmaXgiLCJwYXRoTWF0Y2hlciIsImlIYXNoIiwiaVF1ZXJ5Iiwic3RyUmUiLCJydWxlUGFydHMiLCJtYXRjaEhvc3QiLCJtYXRjaFBhdGgiLCJwYXJ0cyIsInVwZGF0ZUJsYWNrbGlzdENhY2hlIiwiQ2hlY2tVcGRhdGUiLCJyZXN1bHRzIiwiY2hlY2tBbGxBbmROb3RpZnkiLCJDaGVja1VwZGF0ZUFsbCIsInRvVXBkYXRlIiwibm90ZXMiLCJjaGVja1VwZGF0ZSIsIm9wZW5PcHRpb25zUGFnZSIsInByb2Nlc3NlcyIsImRvQ2hlY2tVcGRhdGUiLCJtc2dPayIsIm1zZ0VyciIsInJlc291cmNlT3B0cyIsImRvd25sb2FkVXBkYXRlIiwiY2hlY2tpbmciLCJjYW5Ob3RpZnkiLCJkb3dubG9hZFVSTCIsInVwZGF0ZVVSTCIsImVycm9yTWVzc2FnZSIsImFubm91bmNlIiwiYWxsb3dlZCIsIm5vdGlmeVVwZGF0ZXMiLCJ1cGRhdGVTY2hlZHVsZWQiLCJHZXRWYWx1ZVN0b3JlIiwic3RvcmVzIiwiU2V0VmFsdWVTdG9yZXMiLCJicm9hZGNhc3RWYWx1ZVN0b3JlcyIsImdyb3VwU3RvcmVzQnlGcmFtZSIsIlVwZGF0ZVZhbHVlIiwidXBkYXRlTGF0ZXIiLCJvblJlcGxhY2VkIiwiYWRkZWRJZCIsInJlbW92ZWRJZCIsIm9wZW5lclRhYnMiLCJzY3JpcHRJZHMiLCJjdXJyZW50Q2FjaGUiLCJkb1VwZGF0ZSIsInZhbHVlU3RvcmVzIiwiZ3JvdXBDYWNoZUJ5RnJhbWUiLCJwYXJ0aWFsIiwidGFiRnJhbWVEYXRhIiwidGFza3MiLCJmcmFtZXMiLCJmcmFtZURhdGEiLCJjYWNoZURhdGEiLCJ0b1NlbmQiLCJzY3JpcHREYXRhIiwiZGF0YUVudHJpZXMiLCJoaXN0b3J5IiwiY2hlY2tUeXBlIiwiaGFuZGxlIiwiZGVmYXVsdFByZXZlbnRlZCIsImluaXRUTEQiLCJleHBvcnRNZXRob2QiLCJ0bGRqcyIsImlzUmVhZHkiLCJnZXREb21haW4iLCJnZXRTdWJkb21haW4iLCJnZXRQdWJsaWNTdWZmaXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtR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QUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLE1BQU07QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzN0QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxrRUFBVyxDQUFFQyxPQUFELElBQWE7QUFDdkIsTUFBSSxnQkFBZ0JBLE9BQXBCLEVBQTZCO0FBQzNCQyxjQUFVO0FBQ1g7O0FBQ0QsTUFBSUMscUVBQWUsSUFBSUYsT0FBdkIsRUFBZ0M7QUFDOUJHLHFGQUFtQixDQUFDSCxPQUFELENBQW5CO0FBQ0Q7O0FBQ0RJLGlHQUFPLENBQUMsZUFBRCxFQUFrQkosT0FBbEIsQ0FBUDtBQUNELENBUlUsQ0FBWDtBQVVBSyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsK0NBQWQsRUFBd0I7QUFDdEI7QUFDQSxRQUFNQyxPQUFOLENBQWNDLEdBQWQsRUFBbUI7QUFDakIsVUFBTUMsSUFBSSxHQUFHLE1BQU1DLHlEQUFPLENBQUNGLEdBQUQsQ0FBMUI7QUFDQUMsUUFBSSxDQUFDRSxJQUFMLEdBQVlBLCtDQUFBLEVBQVo7QUFDQSxXQUFPRixJQUFQO0FBQ0QsR0FOcUI7O0FBT3RCO0FBQ0EsUUFBTUcsV0FBTixDQUFrQjtBQUFFQyxPQUFGO0FBQU9DO0FBQVAsR0FBbEIsRUFBeUNDLEdBQXpDLEVBQThDO0FBQzVDLFVBQU07QUFBRUMsYUFBRjtBQUFXQztBQUFYLFFBQW1CRixHQUF6QjtBQUNBLFVBQU1HLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxFQUFsQjtBQUNBLFFBQUksQ0FBQ04sR0FBTCxFQUFVQSxHQUFHLEdBQUdFLEdBQUcsQ0FBQ0YsR0FBSixJQUFXSSxHQUFHLENBQUNKLEdBQXJCOztBQUNWLFFBQUksQ0FBQ0csT0FBTCxFQUFjO0FBQ1pJLDZFQUFnQixDQUFDRixLQUFELENBQWhCO0FBQ0FHLG1GQUFvQixDQUFDSCxLQUFELENBQXBCO0FBQ0Q7O0FBQ0QsVUFBTUksR0FBRyxHQUFHLE1BQU1DLDRFQUFrQixDQUFDVixHQUFELEVBQU1LLEtBQU4sRUFBYUYsT0FBYixFQUFzQkYsWUFBdEIsQ0FBcEM7QUFDQSxVQUFNO0FBQUVVLGNBQUY7QUFBWUMsWUFBWjtBQUFvQkM7QUFBcEIsUUFBaUNKLEdBQXZDO0FBQ0FHLFVBQU0sQ0FBQ0UsWUFBUCxHQUFzQkMsK0RBQVMsQ0FBQ1YsS0FBRCxDQUEvQixDQVY0QyxDQVc1QztBQUNBOztBQUNBLFFBQUlNLFFBQVEsQ0FBQ0ssTUFBYixFQUFxQjtBQUNuQkMsZ0JBQVUsQ0FBQ3hCLCtDQUFRLENBQUN5QixpQkFBVixFQUE2QixDQUE3QixFQUFnQztBQUFFUDtBQUFGLE9BQWhDLEVBQThDVCxHQUE5QyxDQUFWO0FBQ0Q7O0FBQ0RpQix5RUFBYyxDQUFDZCxLQUFELEVBQVFGLE9BQVIsRUFBaUJVLFFBQWpCLENBQWQ7QUFDQSxXQUFPRCxNQUFQO0FBQ0QsR0ExQnFCOztBQTJCdEI7QUFDQSxRQUFNUSxZQUFOLEdBQXFCO0FBQ25CLFVBQU1oQixHQUFHLEdBQUcsT0FBTWlCLG9HQUFZLEVBQWxCLEtBQXdCLEVBQXBDO0FBQ0EsVUFBTXJCLEdBQUcsR0FBR0ksR0FBRyxDQUFDa0IsVUFBSixJQUFrQmxCLEdBQUcsQ0FBQ0osR0FBdEIsSUFBNkIsRUFBekM7QUFDQSxVQUFNdUIsSUFBSSxHQUFHdkIsR0FBRyxDQUFDd0IsS0FBSixDQUFVLHVCQUFWLEVBQW1DLENBQW5DLENBQWI7QUFDQSxXQUFPO0FBQ0xwQixTQURLO0FBRUxxQixZQUFNLEVBQUVGLElBQUksSUFBSUcsNkZBQUEsQ0FBY0gsSUFBZCxDQUFSLElBQStCQTtBQUZsQyxLQUFQO0FBSUQsR0FwQ3FCOztBQXFDdEI7Ozs7O0FBS0FJLFlBQVUsQ0FBQ0MsRUFBRCxFQUFLO0FBQ2IsV0FBT0EsRUFBRSxHQUFHLENBQUwsSUFBVUMsaUdBQVMsQ0FBQ0QsRUFBRCxDQUExQjtBQUNEOztBQTVDcUIsQ0FBeEIsRSxDQStDQTs7QUFDQSxNQUFNRSxjQUFjLEdBQUcsQ0FDckIsYUFEcUIsRUFFckIsTUFGcUIsRUFHckIsYUFIcUIsRUFJckIsY0FKcUIsRUFLckIsa0JBTHFCLENBQXZCLEMsQ0FPQTs7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyxDQUM3QixhQUQ2QixFQUU3QixhQUY2QixFQUc3QixnQkFINkIsQ0FBL0I7O0FBTUEsZUFBZUMsb0JBQWYsQ0FBb0NDLEdBQXBDLEVBQXlDL0IsR0FBekMsRUFBOEM7QUFBQTs7QUFDNUMsUUFBTTtBQUFFZ0M7QUFBRixNQUFVRCxHQUFoQjtBQUNBLFFBQU14QixHQUFHLEdBQUcsd0JBQU1oQiwrQ0FBUSxDQUFDeUMsR0FBRCxDQUFkLHFCQUFNLG1CQUFBekMsK0NBQVEsRUFBUXdDLEdBQUcsQ0FBQ3JDLElBQVosRUFBa0JNLEdBQWxCLENBQWQsQ0FBWjs7QUFDQSxNQUFJNEIsY0FBYyxDQUFDSyxRQUFmLENBQXdCRCxHQUF4QixLQUNEekIsR0FBRyxJQUFJc0Isc0JBQXNCLENBQUNJLFFBQXZCLENBQWdDRCxHQUFoQyxDQURWLEVBQ2dEO0FBQzlDcEMsOENBQUE7QUFDRCxHQU4yQyxDQU81Qzs7O0FBQ0EsU0FBT1csR0FBUCxXQUFPQSxHQUFQLEdBQWMsSUFBZDtBQUNEOztBQUVELFNBQVN0QixVQUFULEdBQXNCO0FBQ3BCLFFBQU1pRCxRQUFRLEdBQUdDLDZGQUFNLEdBQUcsS0FBSCxHQUFXLENBQUMsQ0FBQ0MsZ0VBQVMsQ0FBQyxZQUFELENBQVYsSUFBNEIsQ0FBN0IsSUFBa0NDLHNHQUFwRTtBQUNBLE1BQUksQ0FBQ0gsUUFBTCxFQUFlO0FBQ2YsTUFBSUksT0FBTyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsS0FBYUosZ0VBQVMsQ0FBQyxZQUFELENBQXBDOztBQUNBLE1BQUlFLE9BQU8sSUFBSUosUUFBZixFQUF5QjtBQUN2Qkosd0JBQW9CLENBQUM7QUFBRUUsU0FBRyxFQUFFO0FBQVAsS0FBRCxDQUFwQjtBQUNBTSxXQUFPLEdBQUcsQ0FBVjtBQUNEOztBQUNERyxjQUFZLENBQUN4RCxVQUFVLENBQUN5RCxLQUFaLENBQVo7QUFDQXpELFlBQVUsQ0FBQ3lELEtBQVgsR0FBbUIzQixVQUFVLENBQUM5QixVQUFELEVBQWEwRCxJQUFJLENBQUNDLEdBQUwsQ0FBU0Msa0dBQVQsRUFBc0JYLFFBQVEsR0FBR0ksT0FBakMsQ0FBYixDQUE3QjtBQUNEOztBQUVELGVBQWVRLFdBQWYsR0FBNkI7QUFDM0IsUUFBTTtBQUFFcEQ7QUFBRixNQUFXLE1BQU1xRCwrRkFBTyxDQUFDQywwR0FBRCxFQUFzQjtBQUNsREMsU0FBSyxFQUFFLFVBRDJDO0FBRWxEQyxXQUFPLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVY7QUFGeUMsR0FBdEIsQ0FBOUI7QUFLQSxRQUFNNUMsR0FBRyxHQUFHLE1BQU1oQiwrQ0FBUSxDQUFDNkQsV0FBVCxDQUFxQjtBQUNyQ3RELE9BQUcsRUFBRWtELDBHQURnQztBQUVyQ0ssUUFBSSxFQUFFM0QsSUFGK0I7QUFHckM0RCxVQUFNLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVg7QUFINkIsR0FBckIsQ0FBbEI7QUFLQTNELDRDQUFBOztBQUVBLE1BQUlXLEdBQUcsQ0FBQ2lELEtBQUosQ0FBVXBELEVBQVYsS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsVUFBTyxhQUFZRyxHQUFHLENBQUNpRCxLQUFKLENBQVVwRCxFQUFHLEVBQWhDO0FBQ0Q7QUFDRjs7QUFFRHFELDhEQUFVLENBQUMsTUFBTTtBQUNmQyxRQUFNLENBQUM1QixvQkFBUCxHQUE4QkEsb0JBQTlCO0FBQ0E0QixRQUFNLENBQUNDLFFBQVAsR0FBa0JBLCtGQUFsQjtBQUNBQyxTQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLFNBQWhCLENBQTBCQyxXQUExQixDQUNFQyxVQUFVLENBQUM7QUFBRCxJQUNOLENBQUMsR0FBR0MsSUFBSixLQUFhbkMsb0JBQW9CLENBQUMsR0FBR21DLElBQUosQ0FBcEIsQ0FBOEJDLEtBQTlCLENBQW9DQyxDQUFDLElBQ2xEQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUYsQ0FBQyxZQUFZRyxLQUFiLEdBQXFCSCxDQUFyQixHQUF5QixJQUFJRyxLQUFKLENBQVVILENBQVYsQ0FBeEMsQ0FEYSxDQURQLENBR0w7QUFISyxJQUlOckMsb0JBTE4sRUFIZSxDQVdmOztBQUNBZ0IsYUFBVztBQUNYeUIsU0FBTyxDQUFDQyxJQUFSLENBQWEsZ0JBQWI7QUFDQXpELFlBQVUsQ0FBQzlCLFVBQUQsRUFBYWtELDZGQUFNLEdBQUcsQ0FBSCxHQUFPLEdBQTFCLENBQVY7QUFDQXZDLGtEQUFBO0FBQ0E2RSwrREFBVztBQUNYQyxhQUFXLENBQUNELHFEQUFELEVBQWNwQyxzR0FBZCxDQUFYO0FBQ0EsUUFBTXNDLEdBQUcsR0FBR2pCLE1BQU0sQ0FBQ2tCLE1BQVAsQ0FBY0Msa0JBQTFCOztBQUNBLE1BQUlGLEdBQUosRUFBUztBQUNQO0FBQ0FBLE9BQUcsQ0FBQ0csYUFBSixDQUFrQkMsUUFBbEIsQ0FBMkIsT0FBTyxDQUFDQyxJQUFELENBQVAsS0FBa0I7QUFDM0MsWUFBTTVFLEVBQUUsR0FBRzRFLElBQUgsb0JBQUdBLElBQUksQ0FBRTVFLEVBQWpCO0FBQ0EsWUFBTTZFLEtBQUssR0FBR0MsNEJBQWQ7O0FBQ0EsVUFBSTlFLEVBQUUsS0FBSzZFLEtBQVgsRUFBa0I7QUFDaEI7QUFDRDs7QUFDRCxVQUFJN0UsRUFBSixFQUFRO0FBQ04sY0FBTXdELE9BQU8sQ0FBQ2lCLGtCQUFSLENBQTJCQyxhQUEzQixDQUF5Q0ssV0FBekMsQ0FBcUQsQ0FBQy9FLEVBQUQsQ0FBckQsQ0FBTjtBQUNEOztBQUNEdUUsU0FBRyxDQUFDRyxhQUFKLENBQWtCTSxRQUFsQixDQUEyQixDQUFDO0FBQzFCaEYsVUFBRSxFQUFFNkUsS0FEc0I7QUFFMUJJLGtCQUFVLEVBQUUsQ0FDVixJQUFJVixHQUFHLENBQUNXLGdCQUFSLENBQXlCO0FBQ3ZCQyxpQkFBTyxFQUFFO0FBQUVDLHVCQUFXLEVBQUU7QUFBZixXQURjLENBQ1U7O0FBRFYsU0FBekIsQ0FEVSxDQUZjO0FBTzFCQyxlQUFPLEVBQUUsQ0FDUCxJQUFJZCxHQUFHLENBQUNlLG9CQUFSLENBQTZCO0FBQzNCQyxZQUFFLEVBQUUvQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IrQixXQUFoQixHQUE4QkMsZUFBOUIsQ0FBOEMsQ0FBOUMsRUFBaURGLEVBRDFCLENBRTNCOztBQUYyQixTQUE3QixDQURPO0FBUGlCLE9BQUQsQ0FBM0I7QUFjRCxLQXZCRDtBQXdCRDtBQUNGLENBOUNTLENBQVYsQzs7Ozs7Ozs7Ozs7O0FDeklBO0FBQUE7QUFBQTtBQUVlLG1FQUFJRyw4RkFBSixDQUFpQixDQUM5QixZQUQ4QixFQUU5QixlQUY4QixDQUFqQixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1DLE1BQU0sR0FBRztBQUNwQjs7Ozs7QUFLQUMsUUFBTSxFQUFFekcsdURBQVEsQ0FBQzZELFdBTkc7O0FBT3BCOzs7O0FBSUE2QyxNQUFJLEVBQUUsWUFBWUMsNERBQVUsRUFYUjs7QUFZcEI7Ozs7O0FBS0FDLEtBQUcsRUFBRTVHLHVEQUFRLENBQUM2RyxhQWpCTTs7QUFrQnBCOzs7OztBQUtBQyxRQUFNLEVBQUVqRyxFQUFFLElBQUliLHVEQUFRLENBQUMrRyxXQUFULENBQXFCO0FBQUVsRyxNQUFGO0FBQU1tRyxXQUFPLEVBQUU7QUFBZixHQUFyQjtBQXZCTSxDQUFmLEM7Ozs7Ozs7Ozs7OztBQ0hQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBR0E7QUFHQTtBQUlBO0FBRUEsTUFBTUMsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLEVBQXZCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxnR0FBUSxDQUFDaEgsSUFBRCxFQUFPaUgsbUdBQVAsQ0FBekI7QUFDQSxJQUFJQyxPQUFPLEdBQUcxQyxPQUFPLENBQUMyQyxPQUFSLEVBQWQ7QUFDQSxJQUFJQyxVQUFKO0FBRU8sU0FBU0MsZUFBVCxDQUF5QjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBekIsRUFBd0M7QUFDN0M7QUFDQSxNQUFJRCxJQUFKLEVBQVUsT0FBT0EsSUFBUCxDQUZtQyxDQUc3QztBQUNBOztBQUNBLFNBQVEsUUFBT0MsR0FBSSxFQUFuQjtBQUNEO0FBQ00sU0FBU0MsWUFBVCxDQUFzQkYsSUFBdEIsRUFBNEI7QUFDakMsU0FBTyxnQkFBZ0JHLElBQWhCLENBQXFCSCxJQUFyQixDQUFQO0FBQ0Q7QUFDTSxTQUFTSSxNQUFULENBQWdCSixJQUFoQixFQUFzQjtBQUMzQixRQUFNSyxDQUFDLEdBQUdMLElBQUksQ0FBQ00sT0FBTCxDQUFhLEdBQWIsQ0FBVjtBQUNBLFFBQU0sR0FBR0MsT0FBSCxJQUFjUCxJQUFJLENBQUNRLEtBQUwsQ0FBVyxDQUFYLEVBQWNILENBQWQsRUFBaUJJLEtBQWpCLENBQXVCLEdBQXZCLENBQXBCOztBQUNBLE1BQUlGLE9BQU8sS0FBSyxHQUFoQixFQUFxQjtBQUNuQjtBQUNBLFdBQU9QLElBQUksQ0FBQ1EsS0FBTCxDQUFXSCxDQUFDLEdBQUcsQ0FBZixDQUFQO0FBQ0Q7O0FBQ0QsTUFBSTtBQUNGLFdBQU9LLGtCQUFrQixDQUFDVixJQUFJLENBQUNRLEtBQUwsQ0FBVyxDQUFYLENBQUQsQ0FBekI7QUFDRCxHQUZELENBRUUsT0FBT0csR0FBUCxFQUFZO0FBQ1osV0FBT1gsSUFBSSxDQUFDUSxLQUFMLENBQVcsQ0FBWCxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTSSxVQUFULEdBQXNCO0FBQ3BCLFdBQVMzQixHQUFULENBQWE0QixHQUFiLEVBQWtCQyxHQUFsQixFQUF1QjtBQUNyQixVQUFNQyxJQUFJLEdBQUdDLHFHQUFhLENBQUNILEdBQUQsQ0FBMUI7QUFDQUUsUUFBSSxDQUFDRSxPQUFMLENBQWEsTUFBYjtBQUNBLFdBQU8vRix3REFBUyxDQUFDNkYsSUFBRCxFQUFPRCxHQUFQLENBQWhCO0FBQ0Q7O0FBQ0QsV0FBU0ksR0FBVCxDQUFhTCxHQUFiLEVBQWtCTSxLQUFsQixFQUF5QjtBQUN2QixVQUFNSixJQUFJLEdBQUdDLHFHQUFhLENBQUNILEdBQUQsQ0FBMUI7QUFDQUUsUUFBSSxDQUFDRSxPQUFMLENBQWEsTUFBYjtBQUNBRyw0REFBUyxDQUFDTCxJQUFELEVBQU9JLEtBQVAsQ0FBVDtBQUNEOztBQUNELFdBQVNFLElBQVQsR0FBZ0I7QUFDZCxRQUFJQyxNQUFNLEdBQUdwRyx3REFBUyxDQUFDLE1BQUQsQ0FBdEI7O0FBQ0EsUUFBSSxDQUFDb0csTUFBRCxJQUFXLENBQUNBLE1BQU0sQ0FBQzlCLFFBQXZCLEVBQWlDO0FBQy9COEIsWUFBTSxHQUFHO0FBQ1A5QixnQkFBUSxFQUFFO0FBREgsT0FBVDtBQUdBMEIsU0FBRyxDQUFDLEVBQUQsRUFBS0ksTUFBTCxDQUFIO0FBQ0Q7QUFDRjs7QUFDREQsTUFBSTtBQUNKLFNBQU87QUFBRXBDLE9BQUY7QUFBT2lDO0FBQVAsR0FBUDtBQUNEOztBQUNELFNBQVNLLGFBQVQsQ0FBdUJ2QixJQUF2QixFQUE2QjtBQUMzQixXQUFTd0IsT0FBVCxDQUFpQlgsR0FBakIsRUFBc0I7QUFDcEIsVUFBTUUsSUFBSSxHQUFHQyxxR0FBYSxDQUFDSCxHQUFELENBQTFCO0FBQ0FFLFFBQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQWIsRUFBeUJqQixJQUF6QjtBQUNBLFdBQU9lLElBQVA7QUFDRDs7QUFDRCxXQUFTOUIsR0FBVCxDQUFhNEIsR0FBYixFQUFrQkMsR0FBbEIsRUFBdUI7QUFDckIsV0FBT2hCLFVBQVUsQ0FBQ2IsR0FBWCxDQUFldUMsT0FBTyxDQUFDWCxHQUFELENBQXRCLEVBQTZCQyxHQUE3QixDQUFQO0FBQ0Q7O0FBQ0QsV0FBU0ksR0FBVCxDQUFhTCxHQUFiLEVBQWtCWSxHQUFsQixFQUF1QjtBQUNyQixRQUFJLE9BQU9aLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUMzQixlQUFLYSxtR0FBTCxFQUFBYixHQUFHLEVBQWUsQ0FBQyxDQUFDYyxDQUFELEVBQUlDLENBQUosQ0FBRCxLQUFZO0FBQzVCOUIsa0JBQVUsQ0FBQ29CLEdBQVgsQ0FBZU0sT0FBTyxDQUFDRyxDQUFELENBQXRCLEVBQTJCQyxDQUEzQjtBQUNELE9BRkUsQ0FBSDtBQUdELEtBSkQsTUFJTztBQUNMOUIsZ0JBQVUsQ0FBQ29CLEdBQVgsQ0FBZU0sT0FBTyxDQUFDWCxHQUFELENBQXRCLEVBQTZCWSxHQUE3QjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBU0ksS0FBVCxHQUFpQjtBQUNmL0IsY0FBVSxDQUFDb0IsR0FBWCxDQUFlTSxPQUFPLEVBQXRCLEVBQTBCLEVBQTFCO0FBQ0Q7O0FBQ0QsU0FBTztBQUFFdkMsT0FBRjtBQUFPaUMsT0FBUDtBQUFZVztBQUFaLEdBQVA7QUFDRDs7QUFDRCxTQUFTQyxZQUFULENBQXNCQyxXQUF0QixFQUFtQ0MsWUFBbkMsRUFBaURDLFFBQWpELEVBQTJEO0FBQ3pELE1BQUlDLEtBQUssR0FBR0YsWUFBWSxJQUFJRCxXQUFXLENBQUMsQ0FBRCxDQUF2Qzs7QUFDQSxXQUFTOUMsR0FBVCxHQUFlO0FBQ2IsV0FBT2lELEtBQVA7QUFDRDs7QUFDRCxXQUFTaEIsR0FBVCxDQUFhaUIsUUFBYixFQUF1QjtBQUNyQixRQUFJSixXQUFXLENBQUNoSCxRQUFaLENBQXFCb0gsUUFBckIsQ0FBSixFQUFvQztBQUNsQ0QsV0FBSyxHQUFHQyxRQUFSO0FBQ0EsVUFBSUYsUUFBSixFQUFjQSxRQUFRO0FBQ3ZCLEtBSEQsTUFHTztBQUNMNUUsYUFBTyxDQUFDK0UsSUFBUixDQUFhLGdCQUFiLEVBQStCRCxRQUEvQjtBQUNEOztBQUNELFdBQU9sRCxHQUFHLEVBQVY7QUFDRDs7QUFDRCxXQUFTb0QsRUFBVCxDQUFZQyxNQUFaLEVBQW9CO0FBQ2xCLFdBQU9DLG1HQUFXLENBQUNELE1BQUQsQ0FBWCxDQUFvQnZILFFBQXBCLENBQTZCbUgsS0FBN0IsQ0FBUDtBQUNEOztBQUNELFNBQU87QUFBRWpELE9BQUY7QUFBT2lDLE9BQVA7QUFBWW1CO0FBQVosR0FBUDtBQUNEOztBQUNNLFNBQVNHLFNBQVQsR0FBcUI7QUFDMUIsU0FBT2xELFlBQVksQ0FBQ21ELEdBQWIsQ0FBa0J6QyxJQUFELElBQVU7QUFDaEMsVUFBTTBDLE9BQU8sR0FBR2xELFFBQVEsQ0FBQ1EsSUFBRCxDQUF4QjtBQUNBLFdBQU87QUFDTEEsVUFBSSxFQUFFMEMsT0FBTyxDQUFDMUMsSUFEVDtBQUVMMkMsaUJBQVcsRUFBRUQsT0FBTyxDQUFDQyxXQUZoQjtBQUdMQyxlQUFTLEVBQUVGLE9BQU8sQ0FBQ0UsU0FBUixDQUFrQjNELEdBQWxCLEVBSE47QUFJTDRELGVBQVMsRUFBRUgsT0FBTyxDQUFDRyxTQUFSLENBQWtCNUQsR0FBbEIsRUFKTjtBQUtMNkQsY0FBUSxFQUFFSixPQUFPLENBQUNwQixNQUFSLENBQWVyQyxHQUFmLENBQW1CLE1BQW5CLEVBQTJCLEVBQTNCLEVBQStCNkQsUUFMcEM7QUFNTEMsY0FBUSxFQUFFTCxPQUFPLENBQUNLLFFBTmI7QUFPTEMsZ0JBQVUsRUFBRU4sT0FBTyxDQUFDTSxVQVBmO0FBUUxDLGdCQUFVLEVBQUVQLE9BQU8sQ0FBQ1EsYUFBUjtBQVJQLEtBQVA7QUFVRCxHQVpNLENBQVA7QUFhRDs7QUFFRCxTQUFTQyxhQUFULENBQXVCdEUsTUFBdkIsRUFBK0J1RSxXQUEvQixFQUE0Q0MsS0FBNUMsRUFBbUQ7QUFDakQsTUFBSTdLLElBQUo7O0FBQ0EsTUFBSTRLLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNyQjVLLFFBQUksR0FBRztBQUNMK0gsYUFBTyxFQUFFNkMsV0FESjtBQUVMaEgsWUFBTSxFQUFFeUMsTUFBTSxDQUFDekMsTUFGVjtBQUdMa0YsWUFBTSxFQUFFekMsTUFBTSxDQUFDeUMsTUFIVjtBQUlMZ0MsV0FBSyxFQUFFQyx5R0FBVSxDQUFDMUUsTUFBTSxDQUFDeUUsS0FBUixFQUFlLENBQUMsYUFBRCxDQUFmO0FBSlosS0FBUDtBQU1ELEdBUEQsTUFPTyxJQUFJRixXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDNUI1SyxRQUFJLEdBQUc7QUFDTCtILGFBQU8sRUFBRTZDLFdBREo7QUFFTEksVUFBSSxFQUFFO0FBQ0pwSCxjQUFNLEVBQUV5QyxNQUFNLENBQUN6QyxNQURYO0FBRUpxSCxlQUFPLEVBQUU1RSxNQUFNLENBQUN5QyxNQUFQLENBQWNtQyxPQUZuQjtBQUdKM0UsY0FBTSxFQUFFRCxNQUFNLENBQUN5QyxNQUFQLENBQWNvQyxZQUhsQjtBQUlKQyxtQkFBVyxFQUFFOUUsTUFBTSxDQUFDeUUsS0FBUCxDQUFhSztBQUp0QjtBQUZELEtBQVA7QUFTRDs7QUFDRCxTQUFPeEwsTUFBTSxDQUFDQyxNQUFQLENBQWNJLElBQWQsRUFBb0I2SyxLQUFwQixDQUFQO0FBQ0Q7O0FBQ0QsU0FBU08sZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDNUIsUUFBTXJMLElBQUksR0FBRyxFQUFiOztBQUNBLE1BQUk7QUFDRixVQUFNc0wsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsR0FBWCxDQUFaO0FBQ0FyTCxRQUFJLENBQUMyRCxJQUFMLEdBQVkySCxHQUFHLENBQUMzSCxJQUFoQjs7QUFDQSxRQUFJMkgsR0FBRyxDQUFDdkQsT0FBSixLQUFnQixDQUFwQixFQUF1QjtBQUNyQi9ILFVBQUksQ0FBQzhJLE1BQUwsR0FBY3dDLEdBQUcsQ0FBQ3hDLE1BQWxCO0FBQ0E5SSxVQUFJLENBQUM0RCxNQUFMLEdBQWMwSCxHQUFHLENBQUMxSCxNQUFsQjtBQUNBNUQsVUFBSSxDQUFDOEssS0FBTCxHQUFhUSxHQUFHLENBQUNSLEtBQWpCO0FBQ0QsS0FKRCxNQUlPLElBQUlRLEdBQUcsQ0FBQ3ZELE9BQUosS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDNUIsVUFBSXVELEdBQUcsQ0FBQ04sSUFBUixFQUFjO0FBQ1poTCxZQUFJLENBQUM0RCxNQUFMLEdBQWMwSCxHQUFHLENBQUNOLElBQUosQ0FBU3BILE1BQXZCO0FBQ0E1RCxZQUFJLENBQUM4SSxNQUFMLEdBQWMyQyxZQUFZLENBQUM7QUFDekJSLGlCQUFPLEVBQUVLLEdBQUcsQ0FBQ04sSUFBSixDQUFTQyxPQURPO0FBRXpCQyxzQkFBWSxFQUFFSSxHQUFHLENBQUNOLElBQUosQ0FBUzFFO0FBRkUsU0FBRCxDQUExQjtBQUlBdEcsWUFBSSxDQUFDOEssS0FBTCxHQUFhVyxZQUFZLENBQUM7QUFDeEJOLHFCQUFXLEVBQUVHLEdBQUcsQ0FBQ04sSUFBSixDQUFTRztBQURFLFNBQUQsQ0FBekI7QUFHRDtBQUNGO0FBQ0YsR0FuQkQsQ0FtQkUsT0FBTzFHLENBQVAsRUFBVTtBQUNWekUsUUFBSSxDQUFDMkQsSUFBTCxHQUFZMEgsR0FBWjtBQUNEOztBQUNELFNBQU9yTCxJQUFQO0FBQ0Q7O0FBRUQsU0FBU3lMLFlBQVQsQ0FBc0JILEdBQXRCLEVBQTJCO0FBQ3pCO0FBQ0EsTUFBSUksS0FBSyxDQUFDQyxPQUFOLENBQWNMLEdBQWQsQ0FBSixFQUF3QjtBQUN0QkEsT0FBRyxDQUFDTSxPQUFKLENBQVlILFlBQVo7QUFDRCxHQUZELE1BRU8sSUFBSUgsR0FBRyxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUExQixFQUFvQztBQUN6QyxhQUFLcEMsbUdBQUwsRUFBQW9DLEdBQUcsRUFBZSxDQUFDLENBQUNqRCxHQUFELEVBQU1NLEtBQU4sQ0FBRCxLQUFrQjtBQUNsQyxVQUFJLE9BQU9BLEtBQVAsS0FBaUIsV0FBckIsRUFBa0MsT0FBTzJDLEdBQUcsQ0FBQ2pELEdBQUQsQ0FBVixDQUFsQyxLQUNLb0QsWUFBWSxDQUFDOUMsS0FBRCxDQUFaO0FBQ04sS0FIRSxDQUFIO0FBSUQ7O0FBQ0QsU0FBTzJDLEdBQVA7QUFDRDs7QUFFRCxTQUFTTyxjQUFULENBQXdCQyxJQUF4QixFQUE4QjtBQUM1QixRQUFNQyxPQUFPLEdBQUcsU0FBU0MsV0FBVCxHQUF1QjtBQUNyQyxTQUFLakksVUFBTDtBQUNELEdBRkQ7O0FBR0FnSSxTQUFPLENBQUNFLFNBQVIsR0FBb0JILElBQXBCO0FBQ0FDLFNBQU8sQ0FBQ0csTUFBUixHQUFpQkMsYUFBakI7QUFDQSxTQUFPSixPQUFQO0FBQ0Q7O0FBQ0QsU0FBU0ksYUFBVCxDQUF1QkMsT0FBdkIsRUFBZ0M7QUFDOUIsU0FBT1AsY0FBYyxDQUFDbE0sTUFBTSxDQUFDQyxNQUFQLENBQWNELE1BQU0sQ0FBQzBNLE1BQVAsQ0FBYyxLQUFLSixTQUFuQixDQUFkLEVBQTZDRyxPQUE3QyxDQUFELENBQXJCO0FBQ0Q7O0FBRUQsTUFBTUUsYUFBYSxHQUFHcEYsZ0dBQVEsQ0FBQyxNQUFNO0FBQ25DeEgsaUdBQU8sQ0FBQyxZQUFELEVBQWVzSyxTQUFTLEVBQXhCLENBQVA7QUFDRCxDQUY2QixDQUE5QjtBQUlPLE1BQU11QyxXQUFXLEdBQUdWLGNBQWMsQ0FBQztBQUN4Q3JFLE1BQUksRUFBRSxNQURrQztBQUV4QzJDLGFBQVcsRUFBRSxhQUYyQjtBQUd4Q3FDLFdBQVMsRUFBRSxJQUg2QjtBQUl4Q0MsV0FBUyxFQUFFLEVBSjZCO0FBS3hDQyxVQUFRLEVBQUUsZUFMOEI7QUFNeENsQyxZQUFVLEVBQUU7QUFDVm1DLFlBQVEsRUFBRTtBQURBLEdBTjRCO0FBU3hDakMsZUFBYSxFQUFFa0Msb0ZBVHlCO0FBVXhDQyxlQUFhLEVBQUVELG9GQVZ5Qjs7QUFXeEM3SSxZQUFVLEdBQUc7QUFDWCxTQUFLd0csUUFBTCxHQUFnQjtBQUNkdUMsY0FBUSxFQUFFLENBREk7QUFFZEMsV0FBSyxFQUFFO0FBRk8sS0FBaEI7QUFJQSxTQUFLakUsTUFBTCxHQUFjQyxhQUFhLENBQUMsS0FBS3ZCLElBQU4sQ0FBM0I7QUFDQSxTQUFLNEMsU0FBTCxHQUFpQmQsWUFBWSxDQUFDLENBQzVCLE1BRDRCLEVBRTVCLFNBRjRCLEVBRzVCLGNBSDRCLEVBSTVCLGFBSjRCLEVBSWI7QUFDZixnQkFMNEIsRUFNNUIsY0FONEIsRUFPNUIsT0FQNEIsQ0FBRCxFQVExQixJQVIwQixFQVFwQmdELGFBUm9CLENBQTdCO0FBU0EsU0FBS2pDLFNBQUwsR0FBaUJmLFlBQVksQ0FBQyxDQUM1QixNQUQ0QixFQUU1QixPQUY0QixFQUc1QixTQUg0QixFQUk1QixPQUo0QixDQUFELEVBSzFCLElBTDBCLEVBS3BCZ0QsYUFMb0IsQ0FBN0I7QUFNQSxTQUFLVSxTQUFMLEdBQWlCdEksT0FBTyxDQUFDMkMsT0FBUixFQUFqQjtBQUNBLFNBQUs0RixTQUFMLEdBQWlCLEtBQUtDLFdBQUwsRUFBakI7QUFDQSxVQUFNQyxNQUFNLEdBQUdDLDhEQUFlLEVBQTlCO0FBQ0EsS0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLE1BQWQsRUFDQ3hCLE9BREQsQ0FDVXZELEdBQUQsSUFBUztBQUNoQixXQUFLQSxHQUFMLElBQVksQ0FBQyxHQUFHOUQsSUFBSixLQUFhO0FBQUU0SSxjQUFNLENBQUM5RSxHQUFELENBQU4sQ0FBWSxHQUFHOUQsSUFBZjtBQUF1QixPQUFsRDtBQUNELEtBSEQ7QUFJRCxHQXZDdUM7O0FBd0N4QzhJLEtBQUcsQ0FBQyxHQUFHOUksSUFBSixFQUFVO0FBQ1hNLFdBQU8sQ0FBQ3dJLEdBQVIsQ0FBWSxHQUFHOUksSUFBZixFQURXLENBQ1c7QUFDdkIsR0ExQ3VDOztBQTJDeEMySSxhQUFXLEdBQUc7QUFDWixRQUFJSSxPQUFKO0FBQ0EsUUFBSUMsZ0JBQUo7O0FBQ0EsVUFBTUMsVUFBVSxHQUFHLE1BQU0sS0FBS3BELFNBQUwsQ0FBZVAsRUFBZixDQUFrQixZQUFsQixLQUFtQzRELFVBQVUsT0FBTyxLQUFLakcsSUFBbEY7O0FBQ0EsVUFBTWtHLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFVBQUksQ0FBQ0YsVUFBVSxFQUFmLEVBQW1CLE9BQU85SSxPQUFPLENBQUMyQyxPQUFSLEVBQVA7QUFDbkIsV0FBS2dHLEdBQUwsQ0FBUyxnQkFBVCxFQUEyQixLQUFLbEQsV0FBaEM7QUFDQSxXQUFLRSxTQUFMLENBQWUzQixHQUFmLENBQW1CLE9BQW5CO0FBQ0F0QixhQUFPLEdBQUdBLE9BQU8sQ0FBQ3VHLElBQVIsQ0FBYSxNQUFNLElBQUlqSixPQUFKLENBQWEyQyxPQUFELElBQWE7QUFDcERrRyx3QkFBZ0IsR0FBR3JHLGdHQUFRLENBQUNHLE9BQUQsRUFBVSxLQUFLLElBQWYsQ0FBM0I7QUFDQWtHLHdCQUFnQjtBQUNqQixPQUg0QixDQUFuQixFQUlUSSxJQUpTLENBSUosTUFBTTtBQUNWLFlBQUlILFVBQVUsRUFBZCxFQUFrQixPQUFPLEtBQUt0TixJQUFMLEVBQVA7QUFDbEIsYUFBS21LLFNBQUwsQ0FBZTNCLEdBQWYsQ0FBbUIsTUFBbkI7QUFDRCxPQVBTLEVBUVRsRSxLQVJTLENBUUYyRCxHQUFELElBQVM7QUFBRXRELGVBQU8sQ0FBQytJLEtBQVIsQ0FBY3pGLEdBQWQ7QUFBcUIsT0FSN0IsRUFTVHdGLElBVFMsQ0FTSixNQUFNO0FBQ1ZMLGVBQU8sR0FBRyxJQUFWO0FBQ0FDLHdCQUFnQixHQUFHLElBQW5CO0FBQ0QsT0FaUyxDQUFWO0FBYUFELGFBQU8sR0FBR2xHLE9BQVY7QUFDRCxLQWxCRDs7QUFtQkEsYUFBUzZGLFNBQVQsR0FBcUI7QUFDbkIsVUFBSSxDQUFDSyxPQUFMLEVBQWNJLFFBQVE7QUFDdEIsVUFBSUgsZ0JBQUosRUFBc0JBLGdCQUFnQjtBQUN0QyxhQUFPRCxPQUFQO0FBQ0Q7O0FBQ0QsV0FBT0wsU0FBUDtBQUNELEdBeEV1Qzs7QUF5RXhDWSxnQkFBYyxHQUFHO0FBQ2YsU0FBS3JLLE9BQUwsR0FBZSxFQUFmO0FBQ0QsR0EzRXVDOztBQTRFeENzSyxTQUFPLEdBQUc7QUFDUixTQUFLMUQsU0FBTCxDQUFlMUIsR0FBZixDQUFtQixjQUFuQjtBQUNBLFdBQU8sQ0FBQyxLQUFLcUYsU0FBTCxLQUFtQnJKLE9BQU8sQ0FBQzJDLE9BQVIsQ0FBZ0IsS0FBSzJHLElBQUwsRUFBaEIsQ0FBbkIsR0FBa0R0SixPQUFPLENBQUNDLE1BQVIsQ0FBZTtBQUN2RXNKLFVBQUksRUFBRTtBQURpRSxLQUFmLENBQW5ELEVBR05OLElBSE0sQ0FHRCxNQUFNO0FBQ1YsV0FBS3ZELFNBQUwsQ0FBZTFCLEdBQWYsQ0FBbUIsWUFBbkI7QUFDRCxLQUxNLEVBS0hQLEdBQUQsSUFBUztBQUNWLFVBQUksQ0FBQyxTQUFELEVBQVksY0FBWixFQUE0QjVGLFFBQTVCLENBQXFDNEYsR0FBckMsb0JBQXFDQSxHQUFHLENBQUU4RixJQUExQyxDQUFKLEVBQXFEO0FBQ25ELGFBQUs3RCxTQUFMLENBQWUxQixHQUFmLENBQW1CUCxHQUFHLENBQUM4RixJQUF2QjtBQUNELE9BRkQsTUFFTztBQUNMcEosZUFBTyxDQUFDK0ksS0FBUixDQUFjekYsR0FBZDtBQUNBLGFBQUtpQyxTQUFMLENBQWUxQixHQUFmLENBQW1CLE9BQW5CO0FBQ0Q7O0FBQ0QsV0FBSzJCLFNBQUwsQ0FBZTNCLEdBQWYsQ0FBbUIsTUFBbkI7QUFDQSxZQUFNUCxHQUFOO0FBQ0QsS0FkTSxDQUFQO0FBZUQsR0E3RnVDOztBQThGeEMrRixXQUFTLEdBQUc7QUFDVixXQUFPLEtBQUtKLE9BQUwsR0FDTkgsSUFETSxDQUNELE1BQU0sS0FBS1YsU0FBTCxFQURMLENBQVA7QUFFRCxHQWpHdUM7O0FBa0d4Q2UsTUFBSSxFQUFFcEIsb0ZBbEdrQztBQW1HeEN1QixhQUFXLEVBQUV2QixvRkFuRzJCO0FBb0d4Q3dCLGFBQVcsRUFBRXhCLG9GQXBHMkI7O0FBcUd4Q3lCLGlCQUFlLENBQUNsRyxHQUFELEVBQU07QUFDbkIsVUFBTUEsR0FBTjtBQUNELEdBdkd1Qzs7QUF3R3hDbUcsU0FBTyxHQUFHO0FBQ1IsV0FBTyxLQUFLN0gsR0FBTCxDQUFTO0FBQUVlLFVBQUksRUFBRSxLQUFLa0Y7QUFBYixLQUFULEVBQ05pQixJQURNLENBQ0QzTixJQUFJLElBQUl1TCxJQUFJLENBQUNDLEtBQUwsQ0FBV3hMLElBQVgsQ0FEUCxFQUVOd0UsS0FGTSxDQUVBMkQsR0FBRyxJQUFJLEtBQUtrRyxlQUFMLENBQXFCbEcsR0FBckIsQ0FGUCxFQUdOd0YsSUFITSxDQUdEM04sSUFBSSxLQUFLO0FBQ2J3SCxVQUFJLEVBQUUsS0FBS2tGLFFBREU7QUFFYjFNO0FBRmEsS0FBTCxDQUhILENBQVA7QUFPRCxHQWhIdUM7O0FBaUh4QytOLFdBQVMsR0FBRztBQUNWLFNBQUtGLGNBQUw7QUFDQSxVQUFNVSxLQUFLLEdBQUcsS0FBS3pGLE1BQUwsQ0FBWXJDLEdBQVosQ0FBZ0IsT0FBaEIsQ0FBZDtBQUNBLFNBQUtqRCxPQUFMLENBQWFnTCxhQUFiLEdBQTZCRCxLQUFLLEdBQUksVUFBU0EsS0FBTSxFQUFuQixHQUF1QixJQUF6RDtBQUNBLFdBQU8sQ0FBQyxDQUFDQSxLQUFUO0FBQ0QsR0F0SHVDOztBQXVIeENFLFVBQVEsQ0FBQ3JDLE9BQUQsRUFBVTtBQUNoQixVQUFNO0FBQUU3QjtBQUFGLFFBQWUsSUFBckI7QUFDQSxVQUFNO0FBQUVtRSxXQUFLLEdBQUcsS0FBS2xDO0FBQWYsUUFBNkJKLE9BQW5DO0FBQ0EsUUFBSVksU0FBUyxHQUFHdEksT0FBTyxDQUFDMkMsT0FBUixFQUFoQjs7QUFDQSxRQUFJcUgsS0FBSixFQUFXO0FBQ1QxQixlQUFTLEdBQUcsS0FBS0EsU0FBTCxDQUNYVyxJQURXLENBQ05nQixFQUFFLElBQUkxTSxpR0FBUyxDQUFDeU0sS0FBSyxJQUFJN0wsSUFBSSxDQUFDQyxHQUFMLEtBQWE2TCxFQUFqQixDQUFOLENBRFQsRUFFWGhCLElBRlcsQ0FFTixNQUFNOUssSUFBSSxDQUFDQyxHQUFMLEVBRkEsQ0FBWjtBQUdBLFdBQUtrSyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOztBQUNEekMsWUFBUSxDQUFDd0MsS0FBVCxJQUFrQixDQUFsQjtBQUNBVCxpQkFBYTtBQUNiLFdBQU9VLFNBQVMsQ0FBQ1csSUFBVixDQUFlLE1BQU07QUFBQTs7QUFDMUJ2QixhQUFPLEdBQUd6TSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCd00sT0FBbEIsQ0FBVjtBQUNBQSxhQUFPLENBQUM1SSxPQUFSLEdBQWtCN0QsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLNEQsT0FBdkIsRUFBZ0M0SSxPQUFPLENBQUM1SSxPQUF4QyxDQUFsQjtBQUNBLFVBQUk7QUFBRXBEO0FBQUYsVUFBVWdNLE9BQWQ7QUFDQSxVQUFJaE0sR0FBRyxDQUFDd08sVUFBSixDQUFlLEdBQWYsQ0FBSixFQUF5QnhPLEdBQUcsR0FBRyxvQkFBQ2dNLE9BQU8sQ0FBQ3lDLE1BQVQsOEJBQW1CLEtBQUtwQyxTQUF4QixJQUFxQ3JNLEdBQTNDO0FBQ3pCLGFBQU9pRCwrRkFBTyxDQUFDakQsR0FBRCxFQUFNZ00sT0FBTixDQUFkO0FBQ0QsS0FOTSxFQU9OdUIsSUFQTSxDQU9ELENBQUM7QUFBRTNOO0FBQUYsS0FBRCxNQUFlO0FBQUVBO0FBQUYsS0FBZixDQVBDLEVBT3lCNE4sS0FBSyxLQUFLO0FBQUVBO0FBQUYsS0FBTCxDQVA5QixFQVFORCxJQVJNLENBUUQsQ0FBQztBQUFFM04sVUFBRjtBQUFRNE47QUFBUixLQUFELEtBQXFCO0FBQ3pCckQsY0FBUSxDQUFDdUMsUUFBVCxJQUFxQixDQUFyQjtBQUNBUixtQkFBYTtBQUNiLFVBQUlzQixLQUFKLEVBQVcsT0FBT2xKLE9BQU8sQ0FBQ0MsTUFBUixDQUFlaUosS0FBZixDQUFQO0FBQ1gsYUFBTzVOLElBQVA7QUFDRCxLQWJNLENBQVA7QUFjRCxHQWpKdUM7O0FBa0p4QzhPLGNBQVksR0FBRztBQUNiLFdBQU9DLDhDQUFZLENBQUN4SSxJQUFiLEVBQVA7QUFDRCxHQXBKdUM7O0FBcUp4Q3lJLGFBQVcsR0FBRztBQUNaLFdBQU8sS0FBS1YsT0FBTCxHQUNOWCxJQURNLENBQ0RzQixVQUFVLElBQUl2SyxPQUFPLENBQUN3SyxHQUFSLENBQVksQ0FDOUJELFVBRDhCLEVBRTlCLEtBQUsxSSxJQUFMLEVBRjhCLEVBRzlCLEtBQUt1SSxZQUFMLEVBSDhCLENBQVosQ0FEYixDQUFQO0FBTUQsR0E1SnVDOztBQTZKeEM1TyxNQUFJLEdBQUc7QUFDTCxTQUFLcUssUUFBTCxHQUFnQjtBQUNkdUMsY0FBUSxFQUFFLENBREk7QUFFZEMsV0FBSyxFQUFFO0FBRk8sS0FBaEI7QUFJQSxTQUFLMUMsU0FBTCxDQUFlM0IsR0FBZixDQUFtQixTQUFuQixFQUxLLENBTUw7O0FBQ0EsV0FBTyxLQUFLb0YsT0FBTCxHQUNOSCxJQURNLENBQ0QsTUFBTSxLQUFLcUIsV0FBTCxFQURMLEVBRU5yQixJQUZNLENBRUQzTixJQUFJLElBQUkwRSxPQUFPLENBQUMyQyxPQUFSLENBQWdCLEtBQUs4RyxXQUFMLEVBQWhCLEVBQW9DUixJQUFwQyxDQUF5QyxNQUFNM04sSUFBL0MsQ0FGUCxFQUdOMk4sSUFITSxDQUdELENBQUMsQ0FBQ3NCLFVBQUQsRUFBYUUsVUFBYixFQUF5QkMsU0FBekIsQ0FBRCxLQUF5QztBQUM3QyxZQUFNQyxjQUFjLEdBQUdKLFVBQVUsQ0FBQ2pQLElBQVgsSUFBbUIsRUFBMUM7QUFDQSxZQUFNc1AsY0FBYyxHQUFHRCxjQUFjLENBQUN2SyxJQUFmLElBQXVCLEVBQTlDO0FBQ0EsWUFBTXlLLGVBQWUsR0FBR0YsY0FBYyxDQUFDRyxTQUFmLElBQTRCLENBQXBEO0FBQ0EsVUFBSUMsYUFBYSxHQUFHLENBQUNGLGVBQUQsSUFDZjVQLE1BQU0sQ0FBQzRJLElBQVAsQ0FBWStHLGNBQVosRUFBNEJsTyxNQUE1QixLQUF1QytOLFVBQVUsQ0FBQy9OLE1BRHZEO0FBRUEsWUFBTTBCLEdBQUcsR0FBR0QsSUFBSSxDQUFDQyxHQUFMLEVBQVo7QUFDQSxZQUFNNE0sa0JBQWtCLEdBQUdoTix3REFBUyxDQUFDLGNBQUQsQ0FBcEM7QUFDQSxZQUFNaU4sYUFBYSxHQUFHLEVBQXRCO0FBQ0EsWUFBTUMsU0FBUyxHQUFHLEtBQUs5RyxNQUFMLENBQVlyQyxHQUFaLENBQWdCLE1BQWhCLEVBQXdCLEVBQXhCLENBQWxCO0FBQ0EsWUFBTW9KLFNBQVMsR0FBRyxDQUFDRCxTQUFTLENBQUNKLFNBQTdCO0FBQ0EsWUFBTU0sUUFBUSxHQUFHRCxTQUFTLElBQUlOLGVBQWUsR0FBR0ssU0FBUyxDQUFDSixTQUExRDtBQUNBLFdBQUtuQyxHQUFMLENBQVMsYUFBVCxFQUF3QndDLFNBQXhCO0FBQ0EsV0FBS3hDLEdBQUwsQ0FBUyxXQUFULEVBQXNCeUMsUUFBdEIsRUFBZ0MsR0FBaEMsRUFBcUMsUUFBckMsRUFBK0NGLFNBQVMsQ0FBQ0osU0FBekQsRUFBb0UsU0FBcEUsRUFBK0VELGVBQS9FLEVBQWdHLEdBQWhHO0FBQ0EsWUFBTVEsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsWUFBTUMsU0FBUyxHQUFHLEVBQWxCO0FBQ0EsWUFBTUMsU0FBUyxHQUFHLEVBQWxCO0FBQ0EsWUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsWUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0FkLG9CQUFjLENBQUN2SyxJQUFmLEdBQXNCcUssVUFBVSxDQUFDaUIsTUFBWCxDQUFrQixDQUFDdEwsSUFBRCxFQUFPdUwsSUFBUCxLQUFnQjtBQUN0RFYscUJBQWEsQ0FBQ1UsSUFBSSxDQUFDNUksR0FBTixDQUFiLEdBQTBCNEksSUFBMUI7QUFDQSxZQUFJQyxRQUFRLEdBQUdoQixjQUFjLENBQUNlLElBQUksQ0FBQzVJLEdBQU4sQ0FBN0I7O0FBQ0EsWUFBSSxDQUFDNkksUUFBTCxFQUFlO0FBQ2JBLGtCQUFRLEdBQUcsRUFBWDtBQUNBYix1QkFBYSxHQUFHLElBQWhCO0FBQ0Q7O0FBQ0QzSyxZQUFJLENBQUN1TCxJQUFJLENBQUM1SSxHQUFOLENBQUosR0FBaUI2SSxRQUFqQjs7QUFDQSxZQUFJLENBQUNBLFFBQVEsQ0FBQ0MsUUFBZCxFQUF3QjtBQUN0QkQsa0JBQVEsQ0FBQ0MsUUFBVCxHQUFvQnpOLEdBQXBCO0FBQ0EyTSx1QkFBYSxHQUFHLElBQWhCO0FBQ0Q7O0FBQ0QsZUFBTzNLLElBQVA7QUFDRCxPQWJxQixFQWFuQixFQWJtQixDQUF0QjtBQWNBc0ssZUFBUyxDQUFDeEQsT0FBVixDQUFtQnlFLElBQUQsSUFBVTtBQUMxQixjQUFNO0FBQUV2RixlQUFLLEVBQUU7QUFBRXJELGVBQUY7QUFBTytJLG9CQUFQO0FBQWlCQztBQUFqQjtBQUFULFlBQTZDSixJQUFuRDtBQUNBLGNBQU1LLFVBQVUsR0FBR3JCLGNBQWMsQ0FBQ3ZLLElBQWYsQ0FBb0IyQyxHQUFwQixDQUFuQjtBQUNBLGNBQU1rSixVQUFVLEdBQUdoQixhQUFhLENBQUNsSSxHQUFELENBQWhDOztBQUNBLFlBQUlpSixVQUFVLElBQUlDLFVBQWxCLEVBQThCO0FBQzVCLGNBQUlkLFNBQVMsSUFBSSxDQUFDWSxZQUFkLElBQThCQyxVQUFVLENBQUNILFFBQVgsR0FBc0JFLFlBQXhELEVBQXNFO0FBQ3BFVixvQkFBUSxDQUFDYSxJQUFULENBQWM7QUFBRUMsbUJBQUssRUFBRVIsSUFBVDtBQUFlUyxvQkFBTSxFQUFFSCxVQUF2QjtBQUFtQzdMLGtCQUFJLEVBQUU0TDtBQUF6QyxhQUFkO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsZ0JBQUlBLFVBQVUsQ0FBQ0gsUUFBWCxHQUFzQkUsWUFBMUIsRUFBd0M7QUFDdENULHVCQUFTLENBQUNZLElBQVYsQ0FBZTtBQUFFQyxxQkFBSyxFQUFFUixJQUFUO0FBQWVTLHNCQUFNLEVBQUVIO0FBQXZCLGVBQWY7QUFDQUQsd0JBQVUsQ0FBQ0gsUUFBWCxHQUFzQkUsWUFBdEI7QUFDQWhCLDJCQUFhLEdBQUcsSUFBaEI7QUFDRDs7QUFDRCxnQkFBSWlCLFVBQVUsQ0FBQ0YsUUFBWCxLQUF3QkEsUUFBNUIsRUFBc0M7QUFDcEMsa0JBQUlFLFVBQVUsQ0FBQ0YsUUFBWCxJQUF1QmQsa0JBQWtCLElBQUlILGVBQWpELEVBQWtFO0FBQ2hFWSwyQkFBVyxDQUFDUyxJQUFaLENBQWlCO0FBQUVDLHVCQUFLLEVBQUVSLElBQVQ7QUFBZVMsd0JBQU0sRUFBRUgsVUFBdkI7QUFBbUM3TCxzQkFBSSxFQUFFNEw7QUFBekMsaUJBQWpCO0FBQ0QsZUFGRCxNQUVPO0FBQ0xBLDBCQUFVLENBQUNGLFFBQVgsR0FBc0JBLFFBQXRCO0FBQ0FmLDZCQUFhLEdBQUcsSUFBaEI7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsaUJBQU9FLGFBQWEsQ0FBQ2xJLEdBQUQsQ0FBcEI7QUFDRCxTQW5CRCxNQW1CTyxJQUFJb0ksU0FBUyxJQUFJLENBQUNDLFFBQWQsSUFBMEJXLFlBQVksR0FBR2xCLGVBQTdDLEVBQThEO0FBQ25FUyxtQkFBUyxDQUFDWSxJQUFWLENBQWU7QUFBRUMsaUJBQUssRUFBRVI7QUFBVCxXQUFmO0FBQ0QsU0FGTSxNQUVBO0FBQ0xILGtCQUFRLENBQUNVLElBQVQsQ0FBYztBQUFFQyxpQkFBSyxFQUFFUjtBQUFULFdBQWQ7QUFDRDtBQUNGLE9BNUJEO0FBNkJBLGVBQWVuSCxtR0FBZixFQUFBeUcsYUFBYSxFQUFlLENBQUMsQ0FBQ2xJLEdBQUQsRUFBTTRJLElBQU4sQ0FBRCxLQUFpQjtBQUMzQyxjQUFNdkwsSUFBSSxHQUFHdUssY0FBYyxDQUFDdkssSUFBZixDQUFvQjJDLEdBQXBCLENBQWI7O0FBQ0EsWUFBSXFJLFFBQUosRUFBYztBQUNaQyxrQkFBUSxDQUFDYSxJQUFULENBQWM7QUFBRUUsa0JBQU0sRUFBRVQsSUFBVjtBQUFnQnZMO0FBQWhCLFdBQWQ7QUFDRCxTQUZELE1BRU87QUFDTG1MLG1CQUFTLENBQUNXLElBQVYsQ0FBZTtBQUFFRSxrQkFBTSxFQUFFVDtBQUFWLFdBQWY7QUFDRDtBQUNGLE9BUFksQ0FBYjtBQVFBLFlBQU1VLFlBQVksR0FBRyxDQUNuQixHQUFHaEIsUUFBUSxDQUFDOUYsR0FBVCxDQUFhLENBQUM7QUFBRTZHLGNBQUY7QUFBVWhNO0FBQVYsT0FBRCxLQUFzQjtBQUNwQyxhQUFLdUksR0FBTCxDQUFTLGtCQUFULEVBQTZCeUQsTUFBTSxDQUFDckosR0FBcEM7QUFDQSxlQUFPLEtBQUtoQixHQUFMLENBQVNxSyxNQUFULEVBQ05uRCxJQURNLENBQ0F0QyxHQUFELElBQVM7QUFDYixnQkFBTXJMLElBQUksR0FBR29MLGVBQWUsQ0FBQ0MsR0FBRCxDQUE1QixDQURhLENBRWI7O0FBQ0EsY0FBSSxDQUFDckwsSUFBSSxDQUFDMkQsSUFBVixFQUFnQjtBQUNoQixjQUFJbUIsSUFBSSxDQUFDeUwsUUFBVCxFQUFtQlMsd0dBQVMsQ0FBQ2hSLElBQUQsRUFBTyxvQkFBUCxFQUE2QjhFLElBQUksQ0FBQ3lMLFFBQWxDLENBQVQ7QUFDbkIsZ0JBQU1DLFFBQVEsR0FBRyxDQUFDMUwsSUFBSSxDQUFDMEwsUUFBdkI7QUFDQSxjQUFJQSxRQUFKLEVBQWN4USxJQUFJLENBQUN3USxRQUFMLEdBQWdCQSxRQUFoQjs7QUFDZCxjQUFJLENBQUM5Tix3REFBUyxDQUFDLGtCQUFELENBQVYsSUFBa0MxQyxJQUFJLENBQUM4SSxNQUEzQyxFQUFtRDtBQUNqRCxtQkFBTzlJLElBQUksQ0FBQzhJLE1BQUwsQ0FBWW1DLE9BQW5CO0FBQ0Q7O0FBQ0QsaUJBQU84RCw4Q0FBWSxDQUFDekksTUFBYixDQUFvQnRHLElBQXBCLENBQVA7QUFDRCxTQVpNLENBQVA7QUFhRCxPQWZFLENBRGdCLEVBaUJuQixHQUFHZ1EsU0FBUyxDQUFDL0YsR0FBVixDQUFjLENBQUM7QUFBRTRHLGFBQUY7QUFBU0M7QUFBVCxPQUFELEtBQXVCO0FBQ3RDLGFBQUt6RCxHQUFMLENBQVMsZ0JBQVQsRUFBMkJ3RCxLQUFLLENBQUMvRixLQUFOLENBQVlyRCxHQUF2QztBQUNBLGVBQU9zSCw4Q0FBWSxDQUFDdEksR0FBYixDQUFpQm9LLEtBQUssQ0FBQy9GLEtBQU4sQ0FBWXBLLEVBQTdCLEVBQ05pTixJQURNLENBQ0FoSyxJQUFELElBQVU7QUFDZDtBQUNBLGdCQUFNM0QsSUFBSSxHQUFHMkssYUFBYSxDQUFDa0csS0FBRCxFQUFRLENBQVIsRUFBVztBQUFFbE47QUFBRixXQUFYLENBQTFCO0FBQ0EwTCx3QkFBYyxDQUFDdkssSUFBZixDQUFvQitMLEtBQUssQ0FBQy9GLEtBQU4sQ0FBWXJELEdBQWhDLElBQXVDO0FBQ3JDOEksb0JBQVEsRUFBRU0sS0FBSyxDQUFDL0YsS0FBTixDQUFZMkYsWUFEZTtBQUVyQ0Qsb0JBQVEsRUFBRUssS0FBSyxDQUFDL0YsS0FBTixDQUFZMEY7QUFGZSxXQUF2QztBQUlBZix1QkFBYSxHQUFHLElBQWhCO0FBQ0EsaUJBQU8sS0FBS3dCLEdBQUwsQ0FDTHRSLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JrUixNQUFsQixFQUEwQjtBQUN4QnJKLGVBQUcsRUFBRW9KLEtBQUssQ0FBQy9GLEtBQU4sQ0FBWXJELEdBRE87QUFFeEJELGdCQUFJLEVBQUUsSUFGa0IsQ0FFWjs7QUFGWSxXQUExQixDQURLLEVBS0wrRCxJQUFJLENBQUMyRixTQUFMLENBQWVsUixJQUFmLENBTEssQ0FBUDtBQU9ELFNBaEJNLENBQVA7QUFpQkQsT0FuQkUsQ0FqQmdCLEVBcUNuQixHQUFHaVEsU0FBUyxDQUFDaEcsR0FBVixDQUFjLENBQUM7QUFBRTZHO0FBQUYsT0FBRCxLQUFnQjtBQUMvQixhQUFLekQsR0FBTCxDQUFTLHVCQUFULEVBQWtDeUQsTUFBTSxDQUFDckosR0FBekM7QUFDQSxlQUFPNEgsY0FBYyxDQUFDdkssSUFBZixDQUFvQmdNLE1BQU0sQ0FBQ3JKLEdBQTNCLENBQVA7QUFDQWdJLHFCQUFhLEdBQUcsSUFBaEI7QUFDQSxlQUFPLEtBQUs5SSxNQUFMLENBQVltSyxNQUFaLENBQVA7QUFDRCxPQUxFLENBckNnQixFQTJDbkIsR0FBR1osUUFBUSxDQUFDakcsR0FBVCxDQUFhLENBQUM7QUFBRTRHO0FBQUYsT0FBRCxLQUFlO0FBQzdCLGFBQUt4RCxHQUFMLENBQVMsc0JBQVQsRUFBaUN3RCxLQUFLLENBQUMvRixLQUFOLENBQVlyRCxHQUE3QztBQUNBLGVBQU9zSCw4Q0FBWSxDQUFDcEksTUFBYixDQUFvQmtLLEtBQUssQ0FBQy9GLEtBQU4sQ0FBWXBLLEVBQWhDLENBQVA7QUFDRCxPQUhFLENBM0NnQixFQStDbkIsR0FBR3lQLFdBQVcsQ0FBQ2xHLEdBQVosQ0FBZ0IsQ0FBQztBQUFFNEcsYUFBRjtBQUFTL0w7QUFBVCxPQUFELEtBQXFCO0FBQ3RDLGNBQU1xTSxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsWUFBSXJNLElBQUksQ0FBQzBMLFFBQVQsRUFBbUI7QUFDakJXLGlCQUFPLENBQUNyRyxLQUFSLEdBQWdCO0FBQUUwRixvQkFBUSxFQUFFMUwsSUFBSSxDQUFDMEw7QUFBakIsV0FBaEI7QUFDRDs7QUFDRCxlQUFPWSxrRUFBZ0IsQ0FBQ1AsS0FBSyxDQUFDL0YsS0FBTixDQUFZcEssRUFBYixFQUFpQnlRLE9BQWpCLENBQXZCO0FBQ0QsT0FORSxDQS9DZ0IsQ0FBckI7QUF1REFKLGtCQUFZLENBQUNILElBQWIsQ0FBa0JsTSxPQUFPLENBQUN3SyxHQUFSLENBQVk2QixZQUFaLEVBQTBCcEQsSUFBMUIsQ0FBK0IsTUFBTTBELDZEQUFXLEVBQWhELEVBQW9EMUQsSUFBcEQsQ0FBMEQyRCxPQUFELElBQWE7QUFDdEYsWUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDZDdCLHFCQUFhLEdBQUcsSUFBaEI7QUFDQSxlQUFPViw4Q0FBWSxDQUFDeEksSUFBYixHQUNOb0gsSUFETSxDQUNBNEQsT0FBRCxJQUFhO0FBQ2pCQSxpQkFBTyxDQUFDM0YsT0FBUixDQUFpQnZGLE1BQUQsSUFBWTtBQUMxQixrQkFBTXFLLFVBQVUsR0FBR3JCLGNBQWMsQ0FBQ3ZLLElBQWYsQ0FBb0J1QixNQUFNLENBQUN5RSxLQUFQLENBQWFyRCxHQUFqQyxDQUFuQjtBQUNBLGdCQUFJaUosVUFBSixFQUFnQkEsVUFBVSxDQUFDRixRQUFYLEdBQXNCbkssTUFBTSxDQUFDeUUsS0FBUCxDQUFhMEYsUUFBbkM7QUFDakIsV0FIRDtBQUlELFNBTk0sQ0FBUDtBQU9ELE9BVmlCLENBQWxCO0FBV0FPLGtCQUFZLENBQUNILElBQWIsQ0FBa0JsTSxPQUFPLENBQUN3SyxHQUFSLENBQVk2QixZQUFaLEVBQTBCcEQsSUFBMUIsQ0FBK0IsTUFBTTtBQUNyRCxjQUFNNkQsUUFBUSxHQUFHLEVBQWpCOztBQUNBLFlBQUkvQixhQUFKLEVBQW1CO0FBQ2pCSix3QkFBYyxDQUFDRyxTQUFmLEdBQTJCM00sSUFBSSxDQUFDQyxHQUFMLEVBQTNCO0FBQ0EwTyxrQkFBUSxDQUFDWixJQUFULENBQWMsS0FBS0ssR0FBTCxDQUFTaEMsVUFBVCxFQUFxQjFELElBQUksQ0FBQzJGLFNBQUwsQ0FBZTdCLGNBQWYsQ0FBckIsQ0FBZDtBQUNEOztBQUNETyxpQkFBUyxDQUFDSixTQUFWLEdBQXNCSCxjQUFjLENBQUNHLFNBQXJDO0FBQ0FJLGlCQUFTLENBQUN0RixRQUFWLEdBQXFCekgsSUFBSSxDQUFDQyxHQUFMLEVBQXJCO0FBQ0EsYUFBS2dHLE1BQUwsQ0FBWUosR0FBWixDQUFnQixNQUFoQixFQUF3QmtILFNBQXhCO0FBQ0EsZUFBT2xMLE9BQU8sQ0FBQ3dLLEdBQVIsQ0FBWXNDLFFBQVosQ0FBUDtBQUNELE9BVmlCLENBQWxCLEVBeEk2QyxDQW1KN0M7O0FBQ0EsYUFBTzlNLE9BQU8sQ0FBQ3dLLEdBQVIsQ0FBWTZCLFlBQVksQ0FBQzlHLEdBQWIsQ0FBaUJxRCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0ssSUFBUixDQUFhZixvRkFBYixFQUFtQnpFLEdBQUcsSUFBSUEsR0FBRyxJQUFJLElBQWpDLENBQTVCLENBQVosRUFDTndGLElBRE0sQ0FDRDhELE1BQU0sSUFBSUEsTUFBTSxDQUFDQyxNQUFQLENBQWNDLE9BQWQsQ0FEVCxFQUVOaEUsSUFGTSxDQUVBOEQsTUFBRCxJQUFZO0FBQUUsWUFBSUEsTUFBTSxDQUFDclEsTUFBWCxFQUFtQixNQUFNcVEsTUFBTjtBQUFlLE9BRi9DLENBQVA7QUFHRCxLQTFKTSxFQTJKTjlELElBM0pNLENBMkpELE1BQU07QUFDVixXQUFLdEQsU0FBTCxDQUFlM0IsR0FBZixDQUFtQixNQUFuQjtBQUNBLFdBQUsyRSxHQUFMLENBQVMsZ0JBQVQsRUFBMkIsS0FBS2xELFdBQWhDO0FBQ0QsS0E5Sk0sRUE4SkhoQyxHQUFELElBQVM7QUFDVixXQUFLa0MsU0FBTCxDQUFlM0IsR0FBZixDQUFtQixPQUFuQjtBQUNBLFdBQUsyRSxHQUFMLENBQVMsaUJBQVQsRUFBNEIsS0FBS2xELFdBQWpDO0FBQ0EsV0FBS2tELEdBQUwsQ0FBU2xGLEdBQVQ7QUFDRCxLQWxLTSxFQW1LTndGLElBbktNLENBbUtELE1BQU1qSixPQUFPLENBQUMyQyxPQUFSLENBQWdCLEtBQUsrRyxXQUFMLEVBQWhCLEVBQW9DNUosS0FBcEMsQ0FBMENvSSxvRkFBMUMsQ0FuS0wsQ0FBUDtBQW9LRDs7QUF4VXVDLENBQUQsQ0FBbEM7QUEyVUEsU0FBU2dGLFFBQVQsQ0FBa0JDLE9BQWxCLEVBQTJCO0FBQ2hDOUssZ0JBQWMsQ0FBQzZKLElBQWYsQ0FBb0JpQixPQUFwQjtBQUNEOztBQUNELFNBQVNwRSxVQUFULEdBQXNCO0FBQ3BCLFNBQU9uRyxVQUFVLENBQUNiLEdBQVgsQ0FBZSxTQUFmLENBQVA7QUFDRDs7QUFDRCxTQUFTcUwsVUFBVCxDQUFvQnRLLElBQXBCLEVBQTBCO0FBQ3hCLFNBQU9SLFFBQVEsQ0FBQ1EsSUFBSSxJQUFJaUcsVUFBVSxFQUFuQixDQUFmO0FBQ0Q7O0FBQ00sU0FBUzFKLFVBQVQsR0FBc0I7QUFDM0IsTUFBSSxDQUFDdUQsVUFBTCxFQUFpQjtBQUNmQSxjQUFVLEdBQUdjLFVBQVUsRUFBdkI7QUFDQXJCLGtCQUFjLENBQUM2RSxPQUFmLENBQXdCaUcsT0FBRCxJQUFhO0FBQ2xDLFlBQU0zSCxPQUFPLEdBQUcsSUFBSTJILE9BQUosRUFBaEI7QUFDQSxZQUFNO0FBQUVySztBQUFGLFVBQVcwQyxPQUFqQjtBQUNBcEQsa0JBQVksQ0FBQzhKLElBQWIsQ0FBa0JwSixJQUFsQjtBQUNBUixjQUFRLENBQUNRLElBQUQsQ0FBUixHQUFpQjBDLE9BQWpCO0FBQ0QsS0FMRDtBQU1EOztBQUNEaEssTUFBSTtBQUNMOztBQUVELFNBQVM2UixPQUFULENBQWlCN0gsT0FBakIsRUFBMEI7QUFDeEIsTUFBSUEsT0FBTyxDQUFDRyxTQUFSLENBQWtCUixFQUFsQixDQUFxQixDQUFDLE9BQUQsRUFBVSxTQUFWLENBQXJCLENBQUosRUFBZ0Q7QUFDaEQsTUFBSUssT0FBTyxDQUFDRSxTQUFSLENBQWtCUCxFQUFsQixDQUFxQixDQUFDLE1BQUQsRUFBUyxPQUFULENBQXJCLENBQUosRUFBNkMsT0FBT0ssT0FBTyxDQUFDZ0UsU0FBUixFQUFQO0FBQzdDLE1BQUloRSxPQUFPLENBQUNFLFNBQVIsQ0FBa0JQLEVBQWxCLENBQXFCLFlBQXJCLENBQUosRUFBd0MsT0FBT0ssT0FBTyxDQUFDK0MsU0FBUixFQUFQO0FBQ3pDOztBQUVNLFNBQVMvTSxJQUFULEdBQWdCO0FBQ3JCLFFBQU1nSyxPQUFPLEdBQUc0SCxVQUFVLEVBQTFCO0FBQ0EsU0FBTzVILE9BQU8sSUFBSXhGLE9BQU8sQ0FBQzJDLE9BQVIsQ0FBZ0IwSyxPQUFPLENBQUM3SCxPQUFELENBQXZCLEVBQWtDeUQsSUFBbEMsQ0FBdUMxRyxRQUF2QyxDQUFsQjtBQUNEO0FBRU0sU0FBUytLLFNBQVQsR0FBcUI7QUFDMUIsUUFBTTlILE9BQU8sR0FBRzRILFVBQVUsRUFBMUI7QUFDQSxNQUFJNUgsT0FBSixFQUFhQSxPQUFPLENBQUM4SCxTQUFSO0FBQ2Q7QUFFTSxTQUFTQyxNQUFULEdBQWtCO0FBQ3ZCLFFBQU0vSCxPQUFPLEdBQUc0SCxVQUFVLEVBQTFCO0FBQ0EsTUFBSTVILE9BQUosRUFBYUEsT0FBTyxDQUFDK0gsTUFBUjtBQUNkO0FBRU0sU0FBU0MsU0FBVCxDQUFtQnBKLE1BQW5CLEVBQTJCO0FBQ2hDLFFBQU1vQixPQUFPLEdBQUc0SCxVQUFVLEVBQTFCOztBQUNBLE1BQUk1SCxPQUFKLEVBQWE7QUFDWEEsV0FBTyxDQUFDMkMsYUFBUixDQUFzQi9ELE1BQXRCO0FBQ0EsV0FBT29CLE9BQU8sQ0FBQ2dFLFNBQVIsRUFBUDtBQUNEO0FBQ0Y7QUFFTSxlQUFlaUUsWUFBZixDQUE0Qi9SLEdBQTVCLEVBQWlDZ1MsV0FBakMsRUFBOEM7QUFDbkRDLHNCQUFvQixHQUQrQixDQUMzQjs7QUFDeEJuTyxTQUFPLENBQUNvTyxVQUFSLENBQW1CQyxlQUFuQixDQUFtQ2xPLFdBQW5DLENBQStDa08sZUFBL0MsRUFBZ0U7QUFDOURDLFFBQUksRUFBRSxDQUFFLEdBQUVKLFdBQVksR0FBaEIsQ0FEd0Q7QUFFOURLLFNBQUssRUFBRSxDQUFDLFlBQUQsQ0FGdUQ7QUFHOURoUyxTQUFLLEVBQUUsQ0FBQyxNQUFNeUQsT0FBTyxDQUFDd08sSUFBUixDQUFhckcsTUFBYixDQUFvQjtBQUFFak07QUFBRixLQUFwQixDQUFQLEVBQXFDTTtBQUhrQixHQUFoRSxFQUlHLENBQUMsVUFBRCxDQUpIO0FBS0Q7QUFFRDs7Ozs7QUFJQSxTQUFTNlIsZUFBVCxDQUF5QnpOLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLCtCQUFJLGVBQUFnTixVQUFVLElBQUdhLFNBQWpCLHFCQUFJLHdDQUF5QjdOLElBQUksQ0FBQzFFLEdBQTlCLENBQUosRUFBd0M7QUFDdEM4RCxXQUFPLENBQUN3TyxJQUFSLENBQWEvTCxNQUFiLENBQW9CN0IsSUFBSSxDQUFDckUsS0FBekIsRUFEc0MsQ0FFdEM7O0FBQ0FZLGNBQVUsQ0FBQ2dSLG9CQUFELEVBQXVCLENBQXZCLENBQVY7QUFDQSxXQUFPO0FBQUVPLFlBQU0sRUFBRTtBQUFWLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQVNQLG9CQUFULEdBQWdDO0FBQzlCbk8sU0FBTyxDQUFDb08sVUFBUixDQUFtQkMsZUFBbkIsQ0FBbUNNLGNBQW5DLENBQWtETixlQUFsRDtBQUNEOztBQUVEbFQsMERBQVcsQ0FBRVcsSUFBRCxJQUFVO0FBQ3BCLFFBQU0ySSxLQUFLLEdBQUczSSxJQUFILG9CQUFHQSxJQUFJLENBQUcsY0FBSCxDQUFsQjtBQUNBLE1BQUkySSxLQUFKLEVBQVc1RSxVQUFVO0FBQ3RCLENBSFUsQ0FBWCxDOzs7Ozs7Ozs7Ozs7QUN0bUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQSxNQUFNK0UsTUFBTSxHQUFHO0FBQ2JnSyxXQUFTLEVBQUUsaUJBREU7QUFFYkMsY0FBWSxFQUFFO0FBRkQsQ0FBZjtBQUtBLE1BQU1DLEtBQUssR0FBRyxrQkFBZCxDLENBQWtDOztBQUNsQyxNQUFNQyxPQUFPLEdBQUdDLENBQUMsSUFBSyxNQUFLLENBQUNBLENBQUMsQ0FBQ0MsVUFBRixDQUFhLENBQWIsSUFBa0IsT0FBbkIsRUFBNEJDLFFBQTVCLENBQXFDLEVBQXJDLEVBQXlDcEwsS0FBekMsQ0FBK0MsQ0FBL0MsQ0FBa0QsRUFBN0U7O0FBRUEsU0FBU3FMLGlCQUFULENBQTJCL0gsR0FBM0IsRUFBZ0M7QUFDOUIsUUFBTWdJLE1BQU0sR0FBRy9ILElBQUksQ0FBQzJGLFNBQUwsQ0FBZTVGLEdBQWYsQ0FBZjtBQUNBLFNBQU9nSSxNQUFNLENBQUNDLE9BQVAsQ0FBZVAsS0FBZixFQUFzQkMsT0FBdEIsQ0FBUDtBQUNEOztBQUVELE1BQU1PLE9BQU8sR0FBR2pILGlEQUFXLENBQUNMLE1BQVosQ0FBbUI7QUFDakMxRSxNQUFJLEVBQUUsU0FEMkI7QUFFakMyQyxhQUFXLEVBQUUsU0FGb0I7O0FBR2pDNkQsTUFBSSxHQUFHO0FBQ0wsV0FBTyxLQUFLUyxRQUFMLENBQWM7QUFDbkJnRixZQUFNLEVBQUUsTUFEVztBQUVuQnJULFNBQUcsRUFBRTtBQUZjLEtBQWQsRUFJTm9FLEtBSk0sQ0FJQzJELEdBQUQsSUFBUztBQUNkLFVBQUlBLEdBQUcsQ0FBQ3VMLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUN0QixlQUFPaFAsT0FBTyxDQUFDQyxNQUFSLENBQWU7QUFDcEJzSixjQUFJLEVBQUU7QUFEYyxTQUFmLENBQVA7QUFHRDs7QUFDRCxhQUFPdkosT0FBTyxDQUFDQyxNQUFSLENBQWU7QUFDcEJzSixZQUFJLEVBQUUsT0FEYztBQUVwQmpPLFlBQUksRUFBRW1JO0FBRmMsT0FBZixDQUFQO0FBSUQsS0FkTSxDQUFQO0FBZUQsR0FuQmdDOztBQW9CakNrRyxpQkFBZSxDQUFDeE4sR0FBRCxFQUFNO0FBQ25CLFFBQUlBLEdBQUcsQ0FBQzZTLE1BQUosS0FBZSxHQUFuQixFQUF3QixNQUFNN1MsR0FBTjtBQUN6QixHQXRCZ0M7O0FBdUJqQzBGLE1BQUksR0FBRztBQUNMLFdBQU8sS0FBS2tJLFFBQUwsQ0FBYztBQUNuQmdGLFlBQU0sRUFBRSxNQURXO0FBRW5CclQsU0FBRyxFQUFFLGdEQUZjO0FBR25CdVQsVUFBSSxFQUFFO0FBQ0pDLFlBQUksRUFBRTtBQURGLE9BSGE7QUFNbkJDLGtCQUFZLEVBQUU7QUFOSyxLQUFkLEVBUU5sRyxJQVJNLENBUUQzTixJQUFJLElBQ1JBLElBQUksQ0FBQzhULE9BQUwsQ0FBYXBDLE1BQWIsQ0FBb0JyQixJQUFJLElBQUlBLElBQUksQ0FBQyxNQUFELENBQUosS0FBaUIsTUFBakIsSUFBMkIzSSwwREFBWSxDQUFDMkksSUFBSSxDQUFDN0ksSUFBTixDQUFuRSxFQUFnRnlDLEdBQWhGLENBQW9GOEosU0FBcEYsQ0FUSyxDQUFQO0FBV0QsR0FuQ2dDOztBQW9DakN0TixLQUFHLENBQUM0SixJQUFELEVBQU87QUFDUixVQUFNN0ksSUFBSSxHQUFHRCw2REFBZSxDQUFDOEksSUFBRCxDQUE1QjtBQUNBLFdBQU8sS0FBSzVCLFFBQUwsQ0FBYztBQUNuQmdGLFlBQU0sRUFBRSxNQURXO0FBRW5CclQsU0FBRyxFQUFFLGlEQUZjO0FBR25Cb0QsYUFBTyxFQUFFO0FBQ1AsMkJBQW1CNlAsaUJBQWlCLENBQUM7QUFDbkNPLGNBQUksRUFBRyxJQUFHcE0sSUFBSztBQURvQixTQUFEO0FBRDdCO0FBSFUsS0FBZCxDQUFQO0FBU0QsR0EvQ2dDOztBQWdEakN5SixLQUFHLENBQUNaLElBQUQsRUFBT3JRLElBQVAsRUFBYTtBQUNkLFVBQU13SCxJQUFJLEdBQUdELDZEQUFlLENBQUM4SSxJQUFELENBQTVCO0FBQ0EsV0FBTyxLQUFLNUIsUUFBTCxDQUFjO0FBQ25CZ0YsWUFBTSxFQUFFLE1BRFc7QUFFbkJyVCxTQUFHLEVBQUUsK0NBRmM7QUFHbkJvRCxhQUFPLEVBQUU7QUFDUCwyQkFBbUI2UCxpQkFBaUIsQ0FBQztBQUNuQ08sY0FBSSxFQUFHLElBQUdwTSxJQUFLLEVBRG9CO0FBRW5Dd00sY0FBSSxFQUFFO0FBRjZCLFNBQUQsQ0FEN0I7QUFLUCx3QkFBZ0I7QUFMVCxPQUhVO0FBVW5CTCxVQUFJLEVBQUUzVCxJQVZhO0FBV25CNlQsa0JBQVksRUFBRTtBQVhLLEtBQWQsRUFhTmxHLElBYk0sQ0FhRG9HLFNBYkMsQ0FBUDtBQWNELEdBaEVnQzs7QUFpRWpDcE4sUUFBTSxDQUFDMEosSUFBRCxFQUFPO0FBQ1gsVUFBTTdJLElBQUksR0FBR0QsNkRBQWUsQ0FBQzhJLElBQUQsQ0FBNUI7QUFDQSxXQUFPLEtBQUs1QixRQUFMLENBQWM7QUFDbkJnRixZQUFNLEVBQUUsTUFEVztBQUVuQnJULFNBQUcsRUFBRSwyQ0FGYztBQUduQnVULFVBQUksRUFBRTtBQUNKQyxZQUFJLEVBQUcsSUFBR3BNLElBQUs7QUFEWCxPQUhhO0FBTW5CcU0sa0JBQVksRUFBRTtBQU5LLEtBQWQsRUFRTmxHLElBUk0sQ0FRRG9HLFNBUkMsQ0FBUDtBQVNELEdBNUVnQzs7QUE2RWpDL0IsV0FBUyxHQUFHO0FBQ1YsVUFBTWlDLE1BQU0sR0FBRztBQUNiQyxtQkFBYSxFQUFFLE9BREY7QUFFYnBCLGVBQVMsRUFBRWhLLE1BQU0sQ0FBQ2dLLFNBRkw7QUFHYkMsa0JBQVksRUFBRWpLLE1BQU0sQ0FBQ2lLO0FBSFIsS0FBZjtBQUtBLFVBQU0zUyxHQUFHLEdBQUksNENBQTJDK1Qsd0RBQVMsQ0FBQ0YsTUFBRCxDQUFTLEVBQTFFO0FBQ0E5Qiw4REFBWSxDQUFDL1IsR0FBRCxFQUFNMEksTUFBTSxDQUFDaUssWUFBYixDQUFaO0FBQ0QsR0FyRmdDOztBQXNGakNxQixZQUFVLENBQUMvSSxHQUFELEVBQU07QUFDZCxVQUFNckwsSUFBSSxHQUFHcVUsd0RBQVMsQ0FBQ2hKLEdBQUQsQ0FBdEI7O0FBQ0EsUUFBSXJMLElBQUksQ0FBQ3NVLFlBQVQsRUFBdUI7QUFDckIsV0FBS3hMLE1BQUwsQ0FBWUosR0FBWixDQUFnQjtBQUNkNkwsV0FBRyxFQUFFdlUsSUFBSSxDQUFDdVUsR0FESTtBQUVkaEcsYUFBSyxFQUFFdk8sSUFBSSxDQUFDc1U7QUFGRSxPQUFoQjtBQUlEO0FBQ0YsR0E5RmdDOztBQStGakMzQixXQUFTLENBQUN2UyxHQUFELEVBQU07QUFDYixVQUFNZ1MsV0FBVyxHQUFJLEdBQUV0SixNQUFNLENBQUNpSyxZQUFhLEdBQTNDOztBQUNBLFFBQUkzUyxHQUFHLENBQUN3TyxVQUFKLENBQWV3RCxXQUFmLENBQUosRUFBaUM7QUFDL0IsV0FBS2dDLFVBQUwsQ0FBZ0JoVSxHQUFHLENBQUM0SCxLQUFKLENBQVVvSyxXQUFXLENBQUNoUixNQUF0QixDQUFoQjtBQUNBLFdBQUs4TSxTQUFMO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQXRHZ0M7O0FBdUdqQytELFFBQU0sR0FBRztBQUNQLFNBQUtuSixNQUFMLENBQVlKLEdBQVosQ0FBZ0I7QUFDZDZMLFNBQUcsRUFBRSxJQURTO0FBRWRoRyxXQUFLLEVBQUU7QUFGTyxLQUFoQjtBQUlBLFdBQU8sS0FBS1QsT0FBTCxFQUFQO0FBQ0Q7O0FBN0dnQyxDQUFuQixDQUFoQjtBQStHQThELHNEQUFRLENBQUM0QixPQUFELENBQVI7O0FBRUEsU0FBU08sU0FBVCxDQUFtQjFELElBQW5CLEVBQXlCO0FBQ3ZCLFNBQU87QUFDTDdJLFFBQUksRUFBRTZJLElBQUksQ0FBQzdJLElBRE47QUFFTGdOLFFBQUksRUFBRW5FLElBQUksQ0FBQ21FLElBRk47QUFHTC9NLE9BQUcsRUFBRUcsb0RBQU0sQ0FBQ3lJLElBQUksQ0FBQzdJLElBQU4sQ0FITixDQUlMO0FBQ0E7O0FBTEssR0FBUDtBQU9ELEM7Ozs7Ozs7Ozs7OztBQzVJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxNQUFNc0IsTUFBTSxHQUFHO0FBQ2JnSyxXQUFTLEVBQUV0TixTQURFO0FBRWJpUCxlQUFhLEVBQUVqUCxTQUZGO0FBR2J1TixjQUFZLEVBQUUsdURBSEQ7QUFJYjJCLE9BQUssRUFBRTtBQUpNLENBQWY7QUFNQSxNQUFNQyxZQUFZLEdBQUc7QUFBRWpCLFFBQU0sRUFBRTtBQUFWLENBQXJCO0FBRUEsTUFBTWtCLFdBQVcsR0FBR3JJLGlEQUFXLENBQUNMLE1BQVosQ0FBbUI7QUFDckMxRSxNQUFJLEVBQUUsYUFEK0I7QUFFckMyQyxhQUFXLEVBQUUsY0FGd0I7QUFHckNzQyxXQUFTLEVBQUUscUNBSDBCOztBQUlyQ29JLGNBQVksR0FBRztBQUNiLFVBQU1BLFlBQVksR0FBRyxLQUFLL0wsTUFBTCxDQUFZckMsR0FBWixDQUFnQixlQUFoQixDQUFyQjtBQUNBLFFBQUksQ0FBQ29PLFlBQUwsRUFBbUIsT0FBT25RLE9BQU8sQ0FBQ0MsTUFBUixDQUFlO0FBQUVzSixVQUFJLEVBQUU7QUFBUixLQUFmLENBQVA7QUFDbkIsV0FBTyxLQUFLbUcsVUFBTCxDQUFnQjtBQUNyQlUsbUJBQWEsRUFBRUQsWUFETTtBQUVyQkUsZ0JBQVUsRUFBRTtBQUZTLEtBQWhCLEVBSU5wSCxJQUpNLENBSUQsTUFBTSxLQUFLRyxPQUFMLEVBSkwsQ0FBUDtBQUtELEdBWm9DOztBQWFyQ0UsTUFBSSxHQUFHO0FBQ0wsVUFBTWdILFdBQVcsR0FBRyxNQUFNLEtBQUt2RyxRQUFMLENBQWM7QUFDdENyTyxTQUFHLEVBQUcsa0RBQWlEK1Qsd0RBQVMsQ0FBQztBQUMvREcsb0JBQVksRUFBRSxLQUFLeEwsTUFBTCxDQUFZckMsR0FBWixDQUFnQixPQUFoQjtBQURpRCxPQUFELENBRTdELEVBSG1DO0FBSXRDb04sa0JBQVksRUFBRTtBQUp3QixLQUFkLENBQTFCOztBQU1BLFdBQU9tQixXQUFXLEdBQ2pCckgsSUFETSxDQUNBN0ksSUFBRCxJQUFVO0FBQ2Q7QUFDQSxVQUFJQSxJQUFJLENBQUNtUSxXQUFMLEtBQXFCLFFBQXpCLEVBQW1DO0FBQ2pDLGVBQU8sS0FBS3hHLFFBQUwsQ0FBYztBQUNuQmdGLGdCQUFNLEVBQUUsTUFEVztBQUVuQnJULGFBQUcsRUFBRyxxREFBb0QsS0FBSzBJLE1BQUwsQ0FBWXJDLEdBQVosQ0FBZ0IsT0FBaEIsQ0FBeUIsRUFGaEU7QUFHbkJvSSxnQkFBTSxFQUFFLEVBSFc7QUFJbkJyTCxpQkFBTyxFQUFFO0FBQ1AsNEJBQWdCO0FBRFQ7QUFKVSxTQUFkLEVBUU5tSyxJQVJNLENBUUQsTUFBTTtBQUNWdUgsK0RBQU0sQ0FBQztBQUNMQyxpQkFBSyxFQUFFLGVBREY7QUFFTHhCLGdCQUFJLEVBQUU7QUFGRCxXQUFELENBQU47QUFJQSxpQkFBT2pQLE9BQU8sQ0FBQ0MsTUFBUixDQUFlLHdCQUFmLENBQVA7QUFDRCxTQWRNLENBQVA7QUFlRDs7QUFDRCxVQUFJRyxJQUFJLENBQUM0UCxLQUFMLEtBQWU1TCxNQUFNLENBQUM0TCxLQUExQixFQUFpQyxPQUFPaFEsT0FBTyxDQUFDQyxNQUFSLENBQWVnUSxZQUFmLENBQVA7QUFDbEMsS0FyQk0sRUFzQk5uUSxLQXRCTSxDQXNCQzNELEdBQUQsSUFBUztBQUNkLFVBQUlBLEdBQUcsS0FBSzhULFlBQVIsSUFBd0I5VCxHQUFHLENBQUM2UyxNQUFKLEtBQWUsR0FBZixJQUFzQjBCLHdHQUFTLENBQUN2VSxHQUFELEVBQU0sd0JBQU4sQ0FBVCxLQUE2QyxlQUEvRixFQUFnSDtBQUM5RyxlQUFPLEtBQUtnVSxZQUFMLEdBQW9CbEgsSUFBcEIsQ0FBeUJxSCxXQUF6QixDQUFQO0FBQ0Q7O0FBQ0QsYUFBT3RRLE9BQU8sQ0FBQ0MsTUFBUixDQUFlO0FBQ3BCc0osWUFBSSxFQUFFLE9BRGM7QUFFcEJqTyxZQUFJLEVBQUVhO0FBRmMsT0FBZixDQUFQO0FBSUQsS0E5Qk0sQ0FBUDtBQStCRCxHQW5Eb0M7O0FBb0RyQ21PLGFBQVcsR0FBRztBQUNaLFVBQU1pRixNQUFNLEdBQUc7QUFDYm9CLFlBQU0sRUFBRSxlQURLO0FBRWJDLFlBQU0sRUFBRTtBQUZLLEtBQWY7QUFJQSxXQUFPLEtBQUs3RyxRQUFMLENBQWM7QUFDbkJyTyxTQUFHLEVBQUcsVUFBUytULHdEQUFTLENBQUNGLE1BQUQsQ0FBUyxFQURkO0FBRW5CSixrQkFBWSxFQUFFO0FBRkssS0FBZCxFQUlObEcsSUFKTSxDQUlELENBQUM7QUFBRTRIO0FBQUYsS0FBRCxLQUFlO0FBQ25CLFVBQUk3SSxRQUFKO0FBQ0EsWUFBTXlDLFVBQVUsR0FBR29HLEtBQUssQ0FBQzdELE1BQU4sQ0FBY3JCLElBQUQsSUFBVTtBQUN4QyxZQUFJM0ksMERBQVksQ0FBQzJJLElBQUksQ0FBQzdJLElBQU4sQ0FBaEIsRUFBNkIsT0FBTyxJQUFQOztBQUM3QixZQUFJLENBQUNrRixRQUFELElBQWEyRCxJQUFJLENBQUM3SSxJQUFMLEtBQWMsS0FBS2tGLFFBQXBDLEVBQThDO0FBQzVDQSxrQkFBUSxHQUFHMkQsSUFBWDtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUsxSixNQUFMLENBQVkwSixJQUFaO0FBQ0Q7O0FBQ0QsZUFBTyxLQUFQO0FBQ0QsT0FSa0IsRUFTbEJwRyxHQVRrQixDQVNkOEosU0FUYyxFQVVsQnJDLE1BVmtCLENBVVZyQixJQUFELElBQVU7QUFDaEIsWUFBSSxDQUFDQSxJQUFJLENBQUNtRSxJQUFWLEVBQWdCO0FBQ2QsZUFBSzdOLE1BQUwsQ0FBWTBKLElBQVo7QUFDQSxpQkFBTyxLQUFQO0FBQ0Q7O0FBQ0QsZUFBTyxJQUFQO0FBQ0QsT0FoQmtCLENBQW5CO0FBaUJBLFlBQU1tRixRQUFRLEdBQUc5SSxRQUFRLEdBQUdxSCxTQUFTLENBQUNySCxRQUFELENBQVosR0FBeUIsRUFBbEQ7QUFDQSxZQUFNK0ksT0FBTyxHQUFHLEtBQUtoUCxHQUFMLENBQVMrTyxRQUFULEVBQ2Y3SCxJQURlLENBQ1YzTixJQUFJLElBQUl1TCxJQUFJLENBQUNDLEtBQUwsQ0FBV3hMLElBQVgsQ0FERSxFQUVmd0UsS0FGZSxDQUVUMkQsR0FBRyxJQUFJLEtBQUtrRyxlQUFMLENBQXFCbEcsR0FBckIsQ0FGRSxFQUdmd0YsSUFIZSxDQUdWM04sSUFBSSxJQUFJTCxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCNFYsUUFBbEIsRUFBNEI7QUFDeENoTyxZQUFJLEVBQUUsS0FBS2tGLFFBRDZCO0FBRXhDakYsV0FBRyxFQUFFLElBRm1DO0FBR3hDekg7QUFId0MsT0FBNUIsQ0FIRSxDQUFoQjtBQVFBLGFBQU8wRSxPQUFPLENBQUN3SyxHQUFSLENBQVksQ0FBQ3VHLE9BQUQsRUFBVXRHLFVBQVYsRUFBc0IsS0FBS0wsWUFBTCxFQUF0QixDQUFaLENBQVA7QUFDRCxLQWpDTSxDQUFQO0FBa0NELEdBM0ZvQzs7QUE0RnJDa0QsV0FBUyxHQUFHO0FBQ1YsVUFBTWlDLE1BQU0sR0FBRztBQUNiQyxtQkFBYSxFQUFFLE1BREY7QUFFYmUsaUJBQVcsRUFBRSxTQUZBO0FBR2JuQyxlQUFTLEVBQUVoSyxNQUFNLENBQUNnSyxTQUhMO0FBSWJDLGtCQUFZLEVBQUVqSyxNQUFNLENBQUNpSyxZQUpSO0FBS2IyQixXQUFLLEVBQUU1TCxNQUFNLENBQUM0TDtBQUxELEtBQWY7QUFPQSxRQUFJLENBQUMsS0FBSzVMLE1BQUwsQ0FBWXJDLEdBQVosQ0FBZ0IsZUFBaEIsQ0FBTCxFQUF1Q3dOLE1BQU0sQ0FBQ3lCLE1BQVAsR0FBZ0IsU0FBaEI7QUFDdkMsVUFBTXRWLEdBQUcsR0FBSSxnREFBK0MrVCx3REFBUyxDQUFDRixNQUFELENBQVMsRUFBOUU7QUFDQTlCLDhEQUFZLENBQUMvUixHQUFELEVBQU0wSSxNQUFNLENBQUNpSyxZQUFiLENBQVo7QUFDRCxHQXZHb0M7O0FBd0dyQ0osV0FBUyxDQUFDdlMsR0FBRCxFQUFNO0FBQ2IsVUFBTWdTLFdBQVcsR0FBSSxHQUFFdEosTUFBTSxDQUFDaUssWUFBYSxRQUEzQzs7QUFDQSxRQUFJM1MsR0FBRyxDQUFDd08sVUFBSixDQUFld0QsV0FBZixDQUFKLEVBQWlDO0FBQy9CLFdBQUtoSSxTQUFMLENBQWUxQixHQUFmLENBQW1CLGFBQW5CO0FBQ0EsV0FBSzBMLFVBQUwsQ0FBZ0I7QUFDZHpRLFlBQUksRUFBRXVFLGtCQUFrQixDQUFDOUgsR0FBRyxDQUFDNkgsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLEVBQWtCRCxLQUFsQixDQUF3Qm9LLFdBQVcsQ0FBQ2hSLE1BQXBDLENBQUQ7QUFEVixPQUFoQixFQUdDdU0sSUFIRCxDQUdNLE1BQU0sS0FBS08sU0FBTCxFQUhaO0FBSUEsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQWxIb0M7O0FBbUhyQytELFFBQU0sR0FBRztBQUNQLFNBQUtuSixNQUFMLENBQVlKLEdBQVosQ0FBZ0I7QUFDZDZGLFdBQUssRUFBRSxJQURPO0FBRWR1RyxtQkFBYSxFQUFFO0FBRkQsS0FBaEI7QUFJQSxXQUFPLEtBQUtoSCxPQUFMLEVBQVA7QUFDRCxHQXpIb0M7O0FBMEhyQ3NHLFlBQVUsQ0FBQ0gsTUFBRCxFQUFTO0FBQ2pCLFdBQU8sS0FBS3hGLFFBQUwsQ0FBYztBQUNuQmdGLFlBQU0sRUFBRSxNQURXO0FBRW5CclQsU0FBRyxFQUFFLDRDQUZjO0FBR25CeU8sWUFBTSxFQUFFLEVBSFc7QUFJbkJyTCxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUpVO0FBT25CbVEsVUFBSSxFQUFFUSx3REFBUyxDQUFDeFUsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQjtBQUNoQ2tULGlCQUFTLEVBQUVoSyxNQUFNLENBQUNnSyxTQURjO0FBRWhDMkIscUJBQWEsRUFBRTNMLE1BQU0sQ0FBQzJMLGFBRlU7QUFHaEMxQixvQkFBWSxFQUFFakssTUFBTSxDQUFDaUssWUFIVztBQUloQ2dDLGtCQUFVLEVBQUU7QUFKb0IsT0FBbEIsRUFLYmQsTUFMYSxDQUFELENBUEk7QUFhbkJKLGtCQUFZLEVBQUU7QUFiSyxLQUFkLEVBZU5sRyxJQWZNLENBZUEzTixJQUFELElBQVU7QUFDZCxVQUFJQSxJQUFJLENBQUNzVSxZQUFULEVBQXVCO0FBQ3JCLGNBQU1oTyxNQUFNLEdBQUc7QUFDYmlJLGVBQUssRUFBRXZPLElBQUksQ0FBQ3NVO0FBREMsU0FBZjs7QUFHQSxZQUFJdFUsSUFBSSxDQUFDOFUsYUFBVCxFQUF3QjtBQUN0QnhPLGdCQUFNLENBQUN3TyxhQUFQLEdBQXVCOVUsSUFBSSxDQUFDOFUsYUFBNUI7QUFDRDs7QUFDRCxhQUFLaE0sTUFBTCxDQUFZSixHQUFaLENBQWdCcEMsTUFBaEI7QUFDRCxPQVJELE1BUU87QUFDTCxjQUFNdEcsSUFBTjtBQUNEO0FBQ0YsS0EzQk0sQ0FBUDtBQTRCRCxHQXZKb0M7O0FBd0pyQ3FPLGlCQUFlLEVBQUV6QixvRkF4Sm9COztBQXlKckNyRyxNQUFJLEdBQUc7QUFDTCxVQUFNLElBQUkzQixLQUFKLENBQVUsZUFBVixDQUFOO0FBQ0QsR0EzSm9DOztBQTRKckM2QixLQUFHLENBQUM7QUFBRS9GO0FBQUYsR0FBRCxFQUFTO0FBQ1YsUUFBSSxDQUFDQSxFQUFMLEVBQVMsT0FBT2dFLE9BQU8sQ0FBQ0MsTUFBUixFQUFQO0FBQ1QsV0FBTyxLQUFLOEosUUFBTCxDQUFjO0FBQ25Cck8sU0FBRyxFQUFHLFVBQVNNLEVBQUc7QUFEQyxLQUFkLENBQVA7QUFHRCxHQWpLb0M7O0FBa0tyQ3VRLEtBQUcsQ0FBQ1osSUFBRCxFQUFPclEsSUFBUCxFQUFhO0FBQ2QsVUFBTXdILElBQUksR0FBR0QsNkRBQWUsQ0FBQzhJLElBQUQsQ0FBNUI7QUFDQSxVQUFNO0FBQUUzUDtBQUFGLFFBQVMyUCxJQUFmO0FBQ0EsVUFBTXNGLFFBQVEsR0FBR0MsaUdBQVMsQ0FBQyx5QkFBRCxDQUExQjtBQUNBLFVBQU1wUyxPQUFPLEdBQUc7QUFDZCxzQkFBaUIsK0JBQThCbVMsUUFBUztBQUQxQyxLQUFoQjtBQUdBLFVBQU1FLFFBQVEsR0FBR25WLEVBQUUsR0FBRztBQUNwQjhHO0FBRG9CLEtBQUgsR0FFZjtBQUNGQSxVQURFO0FBRUZzTyxhQUFPLEVBQUUsQ0FBQyxlQUFEO0FBRlAsS0FGSjtBQU1BLFVBQU1uQyxJQUFJLEdBQUcsQ0FDVixLQUFJZ0MsUUFBUyxFQURILEVBRVgsK0NBRlcsRUFHWCxFQUhXLEVBSVhwSyxJQUFJLENBQUMyRixTQUFMLENBQWUyRSxRQUFmLENBSlcsRUFLVixLQUFJRixRQUFTLEVBTEgsRUFNWCwwQkFOVyxFQU9YLEVBUFcsRUFRWDNWLElBUlcsRUFTVixLQUFJMlYsUUFBUyxJQVRILEVBVVgsRUFWVyxFQVdYSSxJQVhXLENBV04sTUFYTSxDQUFiO0FBWUEsVUFBTTNWLEdBQUcsR0FBR00sRUFBRSxHQUNULG9EQUFtREEsRUFBRyx1QkFEN0MsR0FFVix1RUFGSjtBQUdBLFdBQU8sS0FBSytOLFFBQUwsQ0FBYztBQUNuQnJPLFNBRG1CO0FBRW5CdVQsVUFGbUI7QUFHbkJuUSxhQUhtQjtBQUluQmlRLFlBQU0sRUFBRS9TLEVBQUUsR0FBRyxPQUFILEdBQWE7QUFKSixLQUFkLENBQVA7QUFNRCxHQXBNb0M7O0FBcU1yQ2lHLFFBQU0sQ0FBQztBQUFFakc7QUFBRixHQUFELEVBQVM7QUFDYixXQUFPLEtBQUsrTixRQUFMLENBQWM7QUFDbkJnRixZQUFNLEVBQUUsUUFEVztBQUVuQnJULFNBQUcsRUFBRyxVQUFTTSxFQUFHO0FBRkMsS0FBZCxDQUFQO0FBSUQ7O0FBMU1vQyxDQUFuQixDQUFwQjtBQTRNQWtSLHNEQUFRLENBQUNnRCxXQUFELENBQVI7O0FBRUEsU0FBU2IsU0FBVCxDQUFtQjFELElBQW5CLEVBQXlCO0FBQ3ZCLFNBQU87QUFDTDNQLE1BQUUsRUFBRTJQLElBQUksQ0FBQzNQLEVBREo7QUFFTDhHLFFBQUksRUFBRTZJLElBQUksQ0FBQzdJLElBRk47QUFHTGdOLFFBQUksRUFBRSxDQUFDbkUsSUFBSSxDQUFDbUUsSUFIUDtBQUlML00sT0FBRyxFQUFFRyxvREFBTSxDQUFDeUksSUFBSSxDQUFDN0ksSUFBTjtBQUpOLEdBQVA7QUFNRCxDOzs7Ozs7Ozs7Ozs7QUN4T0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBN0gsTUFBTSxDQUFDQyxNQUFQLENBQWNDLHVEQUFkLEVBQXdCO0FBQ3RCbVcsZUFBYSxFQUFFaEUsK0NBRE87QUFFdEJpRSxZQUFVLEVBQUVoRSw0Q0FGVTtBQUd0QmlFLFdBQVMsRUFBRWhXLDBDQUhXO0FBSXRCaVcsZUFBYSxFQUFFakUsK0NBQVNBO0FBSkYsQ0FBeEI7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLE1BQU1wSixNQUFNLEdBQUc7QUFDYmdLLFdBQVMsRUFBRXROLFNBREU7QUFFYmlQLGVBQWEsRUFBRWpQLFNBRkY7QUFHYnVOLGNBQVksRUFBRTtBQUhELENBQWY7QUFNQSxNQUFNcUQsUUFBUSxHQUFHN0osaURBQVcsQ0FBQ0wsTUFBWixDQUFtQjtBQUNsQzFFLE1BQUksRUFBRSxVQUQ0QjtBQUVsQzJDLGFBQVcsRUFBRSxVQUZxQjtBQUdsQ3NDLFdBQVMsRUFBRSwrQkFIdUI7O0FBSWxDb0ksY0FBWSxHQUFHO0FBQ2IsVUFBTUEsWUFBWSxHQUFHLEtBQUsvTCxNQUFMLENBQVlyQyxHQUFaLENBQWdCLGVBQWhCLENBQXJCO0FBQ0EsV0FBTyxLQUFLMk4sVUFBTCxDQUFnQjtBQUNyQlUsbUJBQWEsRUFBRUQsWUFETTtBQUVyQkUsZ0JBQVUsRUFBRTtBQUZTLEtBQWhCLEVBSU5wSCxJQUpNLENBSUQsTUFBTSxLQUFLRyxPQUFMLEVBSkwsQ0FBUDtBQUtELEdBWGlDOztBQVlsQ0UsTUFBSSxHQUFHO0FBQ0wsVUFBTWdILFdBQVcsR0FBRyxNQUFNLEtBQUt2RyxRQUFMLENBQWM7QUFDdENyTyxTQUFHLEVBQUUsUUFEaUM7QUFFdEN5VCxrQkFBWSxFQUFFO0FBRndCLEtBQWQsQ0FBMUI7O0FBSUEsV0FBT21CLFdBQVcsR0FDakJ4USxLQURNLENBQ0MzRCxHQUFELElBQVM7QUFDZCxVQUFJQSxHQUFHLENBQUM2UyxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDdEIsZUFBTyxLQUFLbUIsWUFBTCxHQUFvQmxILElBQXBCLENBQXlCcUgsV0FBekIsQ0FBUDtBQUNEOztBQUNELFlBQU1uVSxHQUFOO0FBQ0QsS0FOTSxFQU9OMkQsS0FQTSxDQU9DM0QsR0FBRCxJQUFTO0FBQ2QsVUFBSUEsR0FBRyxDQUFDNlMsTUFBSixLQUFlLEdBQWYsSUFBc0IwQix3R0FBUyxDQUFDdlUsR0FBRCxFQUFNLFlBQU4sQ0FBVCxLQUFpQyxlQUEzRCxFQUE0RTtBQUMxRSxlQUFPNkQsT0FBTyxDQUFDQyxNQUFSLENBQWU7QUFDcEJzSixjQUFJLEVBQUU7QUFEYyxTQUFmLENBQVA7QUFHRDs7QUFDRCxhQUFPdkosT0FBTyxDQUFDQyxNQUFSLENBQWU7QUFDcEJzSixZQUFJLEVBQUUsT0FEYztBQUVwQmpPLFlBQUksRUFBRWE7QUFGYyxPQUFmLENBQVA7QUFJRCxLQWpCTSxDQUFQO0FBa0JELEdBbkNpQzs7QUFvQ2xDd04saUJBQWUsQ0FBQ3hOLEdBQUQsRUFBTTtBQUNuQixRQUFJQSxHQUFHLENBQUM2UyxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFBQTs7QUFDdEIsWUFBTTJDLE1BQU0sR0FBRyxxQkFBQXhWLEdBQUcsQ0FBQzJDLE9BQUosQ0FBWWlELEdBQVosQ0FBZ0Isa0JBQWhCLHVDQUFzQyxDQUF0QyxNQUE0QyxFQUEzRDs7QUFDQSxVQUFJLDhCQUE4QmtCLElBQTlCLENBQW1DME8sTUFBbkMsQ0FBSixFQUFnRDtBQUM5QyxlQUFPLEtBQUt4QixZQUFMLEdBQW9CbEgsSUFBcEIsQ0FBeUIsTUFBTSxLQUFLVyxPQUFMLEVBQS9CLENBQVA7QUFDRDs7QUFDRDtBQUNEOztBQUNELFVBQU16TixHQUFOO0FBQ0QsR0E3Q2lDOztBQThDbEMwRixNQUFJLEdBQUc7QUFDTCxXQUFPLEtBQUtrSSxRQUFMLENBQWM7QUFDbkJyTyxTQUFHLEVBQUUsaUNBRGM7QUFFbkJ5VCxrQkFBWSxFQUFFO0FBRkssS0FBZCxFQUlObEcsSUFKTSxDQUlEM04sSUFBSSxJQUFJQSxJQUFJLENBQUMySSxLQUFMLENBQVcrSSxNQUFYLENBQWtCckIsSUFBSSxJQUFJQSxJQUFJLENBQUNpRyxJQUFMLElBQWE1TywwREFBWSxDQUFDMkksSUFBSSxDQUFDN0ksSUFBTixDQUFuRCxFQUFnRXlDLEdBQWhFLENBQW9FOEosU0FBcEUsQ0FKUCxDQUFQO0FBS0QsR0FwRGlDOztBQXFEbEN0TixLQUFHLENBQUM0SixJQUFELEVBQU87QUFDUixVQUFNN0ksSUFBSSxHQUFHRCw2REFBZSxDQUFDOEksSUFBRCxDQUE1QjtBQUNBLFdBQU8sS0FBSzVCLFFBQUwsQ0FBYztBQUNuQnJPLFNBQUcsRUFBRywyQkFBMEJtVyxrQkFBa0IsQ0FBQy9PLElBQUQsQ0FBTyxFQUR0QztBQUVuQnFNLGtCQUFZLEVBQUU7QUFGSyxLQUFkLEVBSU5sRyxJQUpNLENBSUQzTixJQUFJLElBQUksS0FBS3lPLFFBQUwsQ0FBYztBQUMxQnJPLFNBQUcsRUFBRUosSUFBSSxDQUFDLHNCQUFELENBRGlCO0FBRTFCME8sV0FBSyxFQUFFO0FBRm1CLEtBQWQsQ0FKUCxDQUFQO0FBUUQsR0EvRGlDOztBQWdFbEN1QyxLQUFHLENBQUNaLElBQUQsRUFBT3JRLElBQVAsRUFBYTtBQUNkLFVBQU13SCxJQUFJLEdBQUdELDZEQUFlLENBQUM4SSxJQUFELENBQTVCO0FBQ0EsV0FBTyxLQUFLNUIsUUFBTCxDQUFjO0FBQ25CZ0YsWUFBTSxFQUFFLEtBRFc7QUFFbkJyVCxTQUFHLEVBQUcsMkJBQTBCbVcsa0JBQWtCLENBQUMvTyxJQUFELENBQU8sV0FGdEM7QUFHbkJoRSxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUhVO0FBTW5CbVEsVUFBSSxFQUFFM1QsSUFOYTtBQU9uQjZULGtCQUFZLEVBQUU7QUFQSyxLQUFkLEVBU05sRyxJQVRNLENBU0RvRyxTQVRDLENBQVA7QUFVRCxHQTVFaUM7O0FBNkVsQ3BOLFFBQU0sQ0FBQzBKLElBQUQsRUFBTztBQUNYO0FBQ0EsVUFBTTdJLElBQUksR0FBR0QsNkRBQWUsQ0FBQzhJLElBQUQsQ0FBNUI7QUFDQSxXQUFPLEtBQUs1QixRQUFMLENBQWM7QUFDbkJnRixZQUFNLEVBQUUsUUFEVztBQUVuQnJULFNBQUcsRUFBRywyQkFBMEJtVyxrQkFBa0IsQ0FBQy9PLElBQUQsQ0FBTztBQUZ0QyxLQUFkLEVBSU5oRCxLQUpNLENBSUFvSSxvRkFKQSxDQUFQO0FBS0QsR0FyRmlDOztBQXNGbENvRixXQUFTLEdBQUc7QUFDVixVQUFNaUMsTUFBTSxHQUFHO0FBQ2JuQixlQUFTLEVBQUVoSyxNQUFNLENBQUNnSyxTQURMO0FBRWI0QixXQUFLLEVBQUUsc0NBRk07QUFHYlIsbUJBQWEsRUFBRSxNQUhGO0FBSWJuQixrQkFBWSxFQUFFakssTUFBTSxDQUFDaUs7QUFKUixLQUFmO0FBTUEsVUFBTTNTLEdBQUcsR0FBSSxnREFBK0MrVCx3REFBUyxDQUFDRixNQUFELENBQVMsRUFBOUU7QUFDQTlCLDhEQUFZLENBQUMvUixHQUFELEVBQU0wSSxNQUFNLENBQUNpSyxZQUFiLENBQVo7QUFDRCxHQS9GaUM7O0FBZ0dsQ0osV0FBUyxDQUFDdlMsR0FBRCxFQUFNO0FBQ2IsVUFBTWdTLFdBQVcsR0FBSSxHQUFFdEosTUFBTSxDQUFDaUssWUFBYSxRQUEzQzs7QUFDQSxRQUFJM1MsR0FBRyxDQUFDd08sVUFBSixDQUFld0QsV0FBZixDQUFKLEVBQWlDO0FBQy9CLFdBQUtoSSxTQUFMLENBQWUxQixHQUFmLENBQW1CLGFBQW5CO0FBQ0EsV0FBSzBMLFVBQUwsQ0FBZ0I7QUFDZHpRLFlBQUksRUFBRXZELEdBQUcsQ0FBQzRILEtBQUosQ0FBVW9LLFdBQVcsQ0FBQ2hSLE1BQXRCO0FBRFEsT0FBaEIsRUFHQ3VNLElBSEQsQ0FHTSxNQUFNLEtBQUtPLFNBQUwsRUFIWjtBQUlBLGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0ExR2lDOztBQTJHbEMrRCxRQUFNLEdBQUc7QUFDUCxTQUFLbkosTUFBTCxDQUFZSixHQUFaLENBQWdCO0FBQ2Q2TCxTQUFHLEVBQUUsSUFEUztBQUVkaEcsV0FBSyxFQUFFLElBRk87QUFHZHVHLG1CQUFhLEVBQUU7QUFIRCxLQUFoQjtBQUtBLFdBQU8sS0FBS2hILE9BQUwsRUFBUDtBQUNELEdBbEhpQzs7QUFtSGxDc0csWUFBVSxDQUFDSCxNQUFELEVBQVM7QUFDakIsV0FBTyxLQUFLeEYsUUFBTCxDQUFjO0FBQ25CZ0YsWUFBTSxFQUFFLE1BRFc7QUFFbkJyVCxTQUFHLEVBQUUsMENBRmM7QUFHbkJ5TyxZQUFNLEVBQUUsRUFIVztBQUluQnJMLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURULE9BSlU7QUFPbkJtUSxVQUFJLEVBQUVRLHdEQUFTLENBQUN4VSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCO0FBQ2hDa1QsaUJBQVMsRUFBRWhLLE1BQU0sQ0FBQ2dLLFNBRGM7QUFFaEMyQixxQkFBYSxFQUFFM0wsTUFBTSxDQUFDMkwsYUFGVTtBQUdoQzFCLG9CQUFZLEVBQUVqSyxNQUFNLENBQUNpSyxZQUhXO0FBSWhDZ0Msa0JBQVUsRUFBRTtBQUpvQixPQUFsQixFQUtiZCxNQUxhLENBQUQsQ0FQSTtBQWFuQkosa0JBQVksRUFBRTtBQWJLLEtBQWQsRUFlTmxHLElBZk0sQ0FlQTNOLElBQUQsSUFBVTtBQUNkLFVBQUlBLElBQUksQ0FBQ3NVLFlBQVQsRUFBdUI7QUFDckIsYUFBS3hMLE1BQUwsQ0FBWUosR0FBWixDQUFnQjtBQUNkNkwsYUFBRyxFQUFFdlUsSUFBSSxDQUFDd1csT0FESTtBQUVkakksZUFBSyxFQUFFdk8sSUFBSSxDQUFDc1UsWUFGRTtBQUdkUSx1QkFBYSxFQUFFOVUsSUFBSSxDQUFDOFU7QUFITixTQUFoQjtBQUtELE9BTkQsTUFNTztBQUNMLGNBQU05VSxJQUFOO0FBQ0Q7QUFDRixLQXpCTSxDQUFQO0FBMEJEOztBQTlJaUMsQ0FBbkIsQ0FBakI7QUFnSkE0UixzREFBUSxDQUFDd0UsUUFBRCxDQUFSOztBQUVBLFNBQVNyQyxTQUFULENBQW1CMUQsSUFBbkIsRUFBeUI7QUFDdkIsU0FBTztBQUNMN0ksUUFBSSxFQUFFNkksSUFBSSxDQUFDN0ksSUFETjtBQUVMZ04sUUFBSSxFQUFFbkUsSUFBSSxDQUFDbUUsSUFGTjtBQUdML00sT0FBRyxFQUFFRyxvREFBTSxDQUFDeUksSUFBSSxDQUFDN0ksSUFBTixDQUhOLENBSUw7O0FBSkssR0FBUDtBQU1ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEtEO0FBSUEsTUFBTWlQLFlBQVksR0FBR0MsTUFBTSxDQUFDLFVBQUQsQ0FBM0I7O0FBRUEsTUFBTUMsS0FBTixDQUFZO0FBQ1YzSyxhQUFXLENBQUM0SyxJQUFELEVBQU9DLEtBQVAsRUFBYztBQUN2QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLDZFQUFrQkEsS0FBbEI7QUFDQSxTQUFLQyxVQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUNEOztBQUVELFNBQU9DLE9BQVAsQ0FBZUMsR0FBZixFQUFvQjtBQUNsQixVQUFNQyxNQUFNLEdBQUcsSUFBSUMsU0FBSixFQUFmO0FBQ0EsVUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLGVBQVAsQ0FBdUJKLEdBQXZCLEVBQTRCLGlCQUE1QixDQUFaO0FBQ0EsV0FBTyxJQUFJTixLQUFKLENBQVVTLEdBQVYsQ0FBUDtBQUNEOztBQUVETixZQUFVLEdBQUc7QUFDWCxVQUFNO0FBQUVGLFVBQUY7QUFBUUM7QUFBUixRQUFrQixJQUF4QjtBQUNBLFVBQU1TLEtBQUssR0FBRyxFQUFkO0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQWlCWCxJQUF2Qjs7QUFDQSxRQUFJVyxVQUFKLEVBQWdCO0FBQ2QsV0FBSyxNQUFNQyxJQUFYLElBQW1CWixJQUFJLENBQUNXLFVBQXhCLEVBQW9DO0FBQ2xDLGNBQU07QUFBRS9QLGNBQUY7QUFBUW1CO0FBQVIsWUFBa0I2TyxJQUF4QjtBQUNBLFlBQUloUSxJQUFJLEtBQUssT0FBYixFQUFzQnFQLEtBQUssQ0FBQ1ksQ0FBTixHQUFVOU8sS0FBVixDQUF0QixLQUNLLElBQUluQixJQUFJLENBQUNvSCxVQUFMLENBQWdCLFFBQWhCLENBQUosRUFBK0JpSSxLQUFLLENBQUNyUCxJQUFJLENBQUNRLEtBQUwsQ0FBVyxDQUFYLENBQUQsQ0FBTCxHQUF1QlcsS0FBdkI7QUFDcEMyTyxhQUFLLENBQUM5UCxJQUFELENBQUwsR0FBY21CLEtBQWQ7QUFDRDtBQUNGOztBQUNELFNBQUsyTyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7QUFFRFAsV0FBUyxHQUFHO0FBQ1YsVUFBTTtBQUFFSCxVQUFGO0FBQVFDO0FBQVIsUUFBa0IsSUFBeEI7O0FBQ0EsUUFBSUQsSUFBSSxDQUFDYyxRQUFMLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLFVBQUlsUSxJQUFJLEdBQUdvUCxJQUFJLENBQUNlLE9BQWhCO0FBQ0EsVUFBSUMsRUFBRSxHQUFHZixLQUFLLENBQUNZLENBQWY7O0FBQ0EsVUFBSWpRLElBQUksQ0FBQ2pGLFFBQUwsQ0FBYyxHQUFkLENBQUosRUFBd0I7QUFDdEIsWUFBSXNNLE1BQUo7QUFDQSxTQUFDQSxNQUFELEVBQVNySCxJQUFULElBQWlCQSxJQUFJLENBQUNTLEtBQUwsQ0FBVyxHQUFYLENBQWpCO0FBQ0EyUCxVQUFFLEdBQUdmLEtBQUssQ0FBQ2hJLE1BQUQsQ0FBVjtBQUNBLFlBQUksQ0FBQytJLEVBQUwsRUFBUyxNQUFNLElBQUloVCxLQUFKLENBQVcsc0JBQXFCaUssTUFBTyxFQUF2QyxDQUFOO0FBQ1Y7O0FBQ0QsV0FBS3JILElBQUwsR0FBWW9RLEVBQUUsR0FBR3BRLElBQWpCO0FBQ0Q7QUFDRjs7QUFFRHFRLE1BQUksR0FBRztBQUNMLFVBQU07QUFBRWpCO0FBQUYsUUFBVyxJQUFqQjtBQUNBLFFBQUlBLElBQUosRUFBVSxPQUFPLENBQUNBLElBQUksQ0FBQ2tCLFdBQUwsSUFBb0IsRUFBckIsRUFBeUJDLElBQXpCLEVBQVA7QUFDWDs7QUFFREMsVUFBUSxHQUFHO0FBQ1QsUUFBSSxDQUFDLEtBQUt2QixZQUFMLENBQUwsRUFBeUI7QUFDdkIsWUFBTTtBQUFFRyxZQUFGO0FBQVFDO0FBQVIsVUFBa0IsSUFBeEI7QUFDQSxXQUFLSixZQUFMLElBQXFCLENBQUMsR0FBR0csSUFBSSxDQUFDb0IsUUFBVCxFQUNwQi9OLEdBRG9CLENBQ2hCZ08sS0FBSyxJQUFJLElBQUl0QixLQUFKLENBQVVzQixLQUFWLEVBQWlCcEIsS0FBakIsQ0FETyxDQUFyQjtBQUVEOztBQUNELFdBQU8sS0FBS0osWUFBTCxDQUFQO0FBQ0Q7O0FBRUR4TSxLQUFHLENBQUNpTyxRQUFELEVBQVc7QUFDWixXQUFPLEtBQUtGLFFBQUwsR0FBZ0IvTixHQUFoQixDQUFvQmlPLFFBQXBCLENBQVA7QUFDRDs7QUFFREMsYUFBVyxDQUFDRCxRQUFELEVBQVc7QUFDcEIsUUFBSSxPQUFPQSxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ2hDLGFBQU8sQ0FBQ1AsT0FBTyxJQUFJZixJQUFJLElBQUlBLElBQUksQ0FBQ3BQLElBQUwsS0FBY21RLE9BQWxDLEVBQTJDTyxRQUEzQyxDQUFQO0FBQ0Q7O0FBQ0QsV0FBT0EsUUFBUDtBQUNEOztBQUVEeEcsUUFBTSxDQUFDd0csUUFBRCxFQUFXO0FBQ2YsV0FBTyxLQUFLRixRQUFMLEdBQWdCdEcsTUFBaEIsQ0FBdUIsS0FBS3lHLFdBQUwsQ0FBaUJELFFBQWpCLENBQXZCLENBQVA7QUFDRDs7QUFFREUsTUFBSSxDQUFDRixRQUFELEVBQVc7QUFDYixXQUFPLEtBQUtGLFFBQUwsR0FBZ0JJLElBQWhCLENBQXFCLEtBQUtELFdBQUwsQ0FBaUJELFFBQWpCLENBQXJCLENBQVA7QUFDRDs7QUFFRFYsTUFBSSxDQUFDblAsR0FBRCxFQUFNO0FBQ1IsV0FBTyxLQUFLaVAsS0FBTCxDQUFXalAsR0FBWCxDQUFQO0FBQ0Q7O0FBL0VTOztBQWtGWixNQUFNZ1EsY0FBYyxHQUFHO0FBQ3JCQyxXQUFTLEVBQUUsRUFEVTtBQUVyQkMsV0FBUyxFQUFFLEtBRlU7QUFHckJDLFVBQVEsRUFBRSxFQUhXO0FBSXJCQyxVQUFRLEVBQUU7QUFKVyxDQUF2QjtBQU9BLE1BQU1DLE1BQU0sR0FBR25NLGlEQUFXLENBQUNMLE1BQVosQ0FBbUI7QUFDaEMxRSxNQUFJLEVBQUUsUUFEMEI7QUFFaEMyQyxhQUFXLEVBQUUsUUFGbUI7QUFHaENLLFlBQVUsRUFBRTtBQUNWbUMsWUFBUSxFQUFFLFVBREE7QUFFVjJMLGFBQVMsRUFBRTtBQUZELEdBSG9COztBQU9oQzVOLGVBQWEsR0FBRztBQUNkLFFBQUksQ0FBQyxLQUFLRCxVQUFWLEVBQXNCO0FBQ3BCLFdBQUtBLFVBQUwsNkVBQ0s0TixjQURMLE1BRUssS0FBS3ZQLE1BQUwsQ0FBWXJDLEdBQVosQ0FBZ0IsWUFBaEIsQ0FGTDtBQUlEOztBQUNELFdBQU8sS0FBS2dFLFVBQVo7QUFDRCxHQWYrQjs7QUFnQmhDb0MsZUFBYSxDQUFDL0QsTUFBRCxFQUFTO0FBQ3BCbkosVUFBTSxDQUFDQyxNQUFQLENBQWMsS0FBSzZLLFVBQW5CLEVBQStCM0IsTUFBL0I7QUFDQSxTQUFLQSxNQUFMLENBQVlKLEdBQVosQ0FBZ0IsWUFBaEIsRUFBOEIsS0FBSytCLFVBQW5DO0FBQ0QsR0FuQitCOztBQW9CaENzRCxXQUFTLEdBQUc7QUFBQTs7QUFDVixTQUFLRixjQUFMO0FBQ0EsVUFBTS9FLE1BQU0sR0FBRyxLQUFLNEIsYUFBTCxFQUFmO0FBQ0EsUUFBSXRLLEdBQUcsR0FBRyxzQkFBQTBJLE1BQU0sQ0FBQ3dQLFNBQVAsdUNBQWtCUCxJQUFsQixPQUE0QixFQUF0QztBQUNBLFFBQUksQ0FBQzNYLEdBQUcsQ0FBQ21DLFFBQUosQ0FBYSxLQUFiLENBQUwsRUFBMEJuQyxHQUFHLEdBQUksVUFBU0EsR0FBSSxFQUFwQjtBQUMxQixRQUFJLENBQUNBLEdBQUcsQ0FBQ3VZLFFBQUosQ0FBYSxHQUFiLENBQUwsRUFBd0J2WSxHQUFHLElBQUksR0FBUDs7QUFDeEIsUUFBSTtBQUNGLFVBQUl3WSxHQUFKLENBQVF4WSxHQUFSLEVBREUsQ0FDWTtBQUNmLEtBRkQsQ0FFRSxPQUFPcUUsQ0FBUCxFQUFVO0FBQ1YsV0FBSytGLFVBQUwsQ0FBZ0I4TixTQUFoQixHQUE0QixJQUE1QjtBQUNBLGFBQU8sS0FBUDtBQUNEOztBQUNELFNBQUs5TixVQUFMLENBQWdCOE4sU0FBaEIsR0FBNkIsR0FBRWxZLEdBQUksZ0JBQW5DO0FBQ0EsVUFBTTtBQUFFbVksZUFBRjtBQUFhQyxjQUFiO0FBQXVCQztBQUF2QixRQUFvQzNQLE1BQTFDO0FBQ0EsUUFBSXlQLFNBQUosRUFBZSxPQUFPLElBQVA7QUFDZixRQUFJLENBQUNDLFFBQUQsSUFBYSxDQUFDQyxRQUFsQixFQUE0QixPQUFPLEtBQVA7QUFDNUIsVUFBTUksSUFBSSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBYSxHQUFFUCxRQUFTLElBQUdDLFFBQVMsRUFBcEMsQ0FBYjtBQUNBLFNBQUtqVixPQUFMLENBQWFnTCxhQUFiLEdBQThCLFNBQVFxSyxJQUFLLEVBQTNDO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0F2QytCOztBQXdDaENwSyxVQUFRLENBQUNyQyxPQUFELEVBQVU7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsV0FBT0csaURBQVcsQ0FBQ04sU0FBWixDQUFzQndDLFFBQXRCLENBQStCdUssSUFBL0IsQ0FBb0MsSUFBcEMsRUFBMENyWixNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUM3RHFaLGlCQUFXLEVBQUU7QUFEZ0QsS0FBZCxFQUU5QzdNLE9BRjhDLENBQTFDLENBQVA7QUFHRCxHQS9DK0I7O0FBZ0RoQ2lDLGlCQUFlLENBQUN4TixHQUFELEVBQU07QUFDbkIsUUFBSSxDQUFDLENBQ0gsR0FERyxFQUNFO0FBQ0wsT0FGRyxDQUVFO0FBRkYsTUFHSDBCLFFBSEcsQ0FHTTFCLEdBQUcsQ0FBQzZTLE1BSFYsQ0FBTCxFQUd3QixNQUFNN1MsR0FBTjtBQUN6QixHQXJEK0I7O0FBc0RoQzs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStFQTBGLE1BQUksR0FBRztBQUNMLFVBQU07QUFBRStSO0FBQUYsUUFBZ0IsS0FBSzlOLFVBQTNCOztBQUNBLFVBQU0wTyxLQUFLLEdBQUcsTUFBTSxLQUFLekssUUFBTCxDQUFjO0FBQ2hDZ0YsWUFBTSxFQUFFLE9BRHdCO0FBRWhDclQsU0FBRyxFQUFFa1k7QUFGMkIsS0FBZCxDQUFwQjs7QUFJQSxVQUFNYSxPQUFPLEdBQUcsTUFBTSxLQUFLMUssUUFBTCxDQUFjO0FBQ2xDZ0YsWUFBTSxFQUFFLFVBRDBCO0FBRWxDclQsU0FBRyxFQUFFa1ksU0FGNkI7QUFHbEM5VSxhQUFPLEVBQUU7QUFDUDRWLGFBQUssRUFBRTtBQURBO0FBSHlCLEtBQWQsRUFPckJ6TCxJQVBxQixDQU9mc0osR0FBRCxJQUFTO0FBQ2IsWUFBTUcsR0FBRyxHQUFHVCxLQUFLLENBQUNLLE9BQU4sQ0FBY0MsR0FBZCxDQUFaO0FBQ0EsWUFBTW9DLEtBQUssR0FBR2pDLEdBQUcsQ0FBQ1ksUUFBSixHQUFlLENBQWYsRUFDYi9OLEdBRGEsQ0FDUjJNLElBQUQsSUFBVTtBQUNiLGNBQU0wQyxJQUFJLEdBQUcxQyxJQUFJLENBQUN3QixJQUFMLENBQVUsY0FBVixFQUEwQkEsSUFBMUIsQ0FBK0IsVUFBL0IsQ0FBYjtBQUNBLGNBQU1uSyxJQUFJLEdBQUdxTCxJQUFJLENBQUNsQixJQUFMLENBQVUsa0JBQVYsRUFBOEJBLElBQTlCLENBQW1DLGdCQUFuQyxJQUF1RCxXQUF2RCxHQUFxRSxNQUFsRjs7QUFDQSxZQUFJbkssSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkIsY0FBSTlELFdBQUo7QUFDQSxnQkFBTW9QLGVBQWUsR0FBR0QsSUFBSSxDQUFDbEIsSUFBTCxDQUFVLGlCQUFWLENBQXhCOztBQUVBLGNBQUltQixlQUFlLEtBQUtDLFNBQXhCLEVBQW1DO0FBQ2pDclAsdUJBQVcsR0FBR29QLGVBQWUsQ0FBQzFCLElBQWhCLEVBQWQ7QUFDRCxXQUZELE1BRU87QUFDTCxrQkFBTTRCLElBQUksR0FBRzdDLElBQUksQ0FBQ3dCLElBQUwsQ0FBVSxVQUFWLEVBQXNCUCxJQUF0QixFQUFiO0FBQ0ExTix1QkFBVyxHQUFHakMsa0JBQWtCLENBQUN1UixJQUFJLENBQUNDLFNBQUwsQ0FBZUQsSUFBSSxDQUFDRSxXQUFMLENBQWlCLEdBQWpCLElBQXdCLENBQXZDLENBQUQsQ0FBaEM7QUFDRDs7QUFFRCxjQUFJalMsMERBQVksQ0FBQ3lDLFdBQUQsQ0FBaEIsRUFBK0I7QUFDN0Isa0JBQU1xSyxJQUFJLEdBQUc4RSxJQUFJLENBQUNsQixJQUFMLENBQVUsc0JBQVYsQ0FBYjtBQUNBLG1CQUFPckUsU0FBUyxDQUFDO0FBQ2Z2TSxrQkFBSSxFQUFFMkMsV0FEUztBQUVmcUssa0JBQUksRUFBRUEsSUFBSSxHQUFHLENBQUNBLElBQUksQ0FBQ3FELElBQUwsRUFBSixHQUFrQjtBQUZiLGFBQUQsQ0FBaEI7QUFJRDtBQUNGOztBQUNELGVBQU8sSUFBUDtBQUNELE9BeEJhLEVBeUJibkcsTUF6QmEsQ0F5Qk5DLE9BekJNLENBQWQ7QUEwQkEsYUFBTzBILEtBQVA7QUFDRCxLQXBDcUIsQ0FBdEI7O0FBcUNBLFdBQU9GLE9BQU8sR0FDYjNVLEtBRE0sQ0FDQzJELEdBQUQsSUFBUztBQUNkLFVBQUlBLEdBQUcsQ0FBQ3VMLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUN0QixlQUFPd0YsS0FBSyxHQUFHdkwsSUFBUixDQUFhd0wsT0FBYixDQUFQO0FBQ0Q7O0FBQ0QsWUFBTWhSLEdBQU47QUFDRCxLQU5NLENBQVA7QUFPRCxHQXhMK0I7O0FBeUxoQzFCLEtBQUcsQ0FBQzRKLElBQUQsRUFBTztBQUNSLFVBQU03SSxJQUFJLEdBQUdELDZEQUFlLENBQUM4SSxJQUFELENBQTVCO0FBQ0EsVUFBTTtBQUFFaUk7QUFBRixRQUFnQixLQUFLOU4sVUFBM0I7QUFDQSxXQUFPLEtBQUtpRSxRQUFMLENBQWM7QUFDbkJyTyxTQUFHLEVBQUVrWSxTQUFTLEdBQUc5UTtBQURFLEtBQWQsQ0FBUDtBQUdELEdBL0wrQjs7QUFnTWhDeUosS0FBRyxDQUFDWixJQUFELEVBQU9yUSxJQUFQLEVBQWE7QUFDZCxVQUFNd0gsSUFBSSxHQUFHRCw2REFBZSxDQUFDOEksSUFBRCxDQUE1QjtBQUNBLFVBQU03TSxPQUFPLEdBQUc7QUFDZCxzQkFBZ0I7QUFERixLQUFoQjtBQUdBLFVBQU1vVyxJQUFJLEdBQUcsS0FBSzlRLE1BQUwsQ0FBWXJDLEdBQVosQ0FBZ0IsTUFBaEIsQ0FBYjtBQUNBLFFBQUltVCxJQUFKLEVBQVVwVyxPQUFPLENBQUNxVyxFQUFSLEdBQWMsS0FBSUQsSUFBSyxJQUF2QjtBQUNWLFVBQU07QUFBRXRCO0FBQUYsUUFBZ0IsS0FBSzlOLFVBQTNCO0FBQ0EsV0FBTyxLQUFLaUUsUUFBTCxDQUFjO0FBQ25CZ0YsWUFBTSxFQUFFLEtBRFc7QUFFbkJyVCxTQUFHLEVBQUVrWSxTQUFTLEdBQUc5USxJQUZFO0FBR25CbU0sVUFBSSxFQUFFM1QsSUFIYTtBQUluQndEO0FBSm1CLEtBQWQsQ0FBUDtBQU1ELEdBOU0rQjs7QUErTWhDbUQsUUFBTSxDQUFDMEosSUFBRCxFQUFPO0FBQ1gsVUFBTTdJLElBQUksR0FBR0QsNkRBQWUsQ0FBQzhJLElBQUQsQ0FBNUI7QUFDQSxVQUFNN00sT0FBTyxHQUFHLEVBQWhCO0FBQ0EsVUFBTW9XLElBQUksR0FBRyxLQUFLOVEsTUFBTCxDQUFZckMsR0FBWixDQUFnQixNQUFoQixDQUFiO0FBQ0EsUUFBSW1ULElBQUosRUFBVXBXLE9BQU8sQ0FBQ3FXLEVBQVIsR0FBYyxLQUFJRCxJQUFLLElBQXZCO0FBQ1YsVUFBTTtBQUFFdEI7QUFBRixRQUFnQixLQUFLOU4sVUFBM0I7QUFDQSxXQUFPLEtBQUtpRSxRQUFMLENBQWM7QUFDbkJnRixZQUFNLEVBQUUsUUFEVztBQUVuQnJULFNBQUcsRUFBRWtZLFNBQVMsR0FBRzlRLElBRkU7QUFHbkJoRTtBQUhtQixLQUFkLENBQVA7QUFLRDs7QUExTitCLENBQW5CLENBQWY7QUE0TkFvTyxzREFBUSxDQUFDOEcsTUFBRCxDQUFSOztBQUVBLFNBQVMzRSxTQUFULENBQW1CMUQsSUFBbkIsRUFBeUI7QUFDdkIsU0FBTztBQUNMN0ksUUFBSSxFQUFFNkksSUFBSSxDQUFDN0ksSUFETjtBQUVMZ04sUUFBSSxFQUFFbkUsSUFBSSxDQUFDbUUsSUFGTjtBQUdML00sT0FBRyxFQUFFRyxvREFBTSxDQUFDeUksSUFBSSxDQUFDN0ksSUFBTjtBQUhOLEdBQVA7QUFLRCxDOzs7Ozs7Ozs7Ozs7QUNuVUQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1qRSxLQUFLLEdBQUd1VyxxR0FBUyxDQUFDO0FBQ3RCOzs7QUFHQUMsVUFBUSxFQUFFLEtBQUssRUFBTCxHQUFVO0FBSkUsQ0FBRCxDQUF2QjtBQU9BcGEsTUFBTSxDQUFDQyxNQUFQLENBQWNDLGlEQUFkLEVBQXdCO0FBQ3RCbWEsV0FBUyxDQUFDaGEsSUFBRCxFQUFPO0FBQ2QsV0FBT3VELEtBQUssQ0FBQ2tELEdBQU4sQ0FBVXpHLElBQVYsS0FBbUIsSUFBMUI7QUFDRCxHQUhxQjs7QUFJdEJpYSxVQUFRLENBQUNqYSxJQUFELEVBQU87QUFDYnVELFNBQUssQ0FBQzJXLEdBQU4sQ0FBVWxhLElBQUksQ0FBQ3FJLEdBQWYsRUFBb0JySSxJQUFJLENBQUMrWixRQUF6QjtBQUNELEdBTnFCOztBQU90QkksVUFBUSxDQUFDOVIsR0FBRCxFQUFNO0FBQ1osV0FBTzlFLEtBQUssQ0FBQzZXLEdBQU4sQ0FBVS9SLEdBQVYsS0FBa0IsSUFBekI7QUFDRDs7QUFUcUIsQ0FBeEI7QUFZZTlFLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFFQSxNQUFNOFcsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7QUFDQSxJQUFJQyxhQUFKO0FBRUE3YSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsaURBQWQsRUFBd0I7QUFDdEI0YSxjQUFZLENBQUN6YSxJQUFELEVBQU87QUFDakJ3YSxpQkFBYSxHQUFHeGEsSUFBaEI7QUFDQXFhLFlBQVEsQ0FBQ0ssS0FBVDtBQUNBLFVBQU1DLEdBQUcsR0FBR0wsUUFBUSxDQUFDTSxXQUFULENBQXFCLE1BQXJCLEVBQTZCLEtBQTdCLEVBQW9DLElBQXBDLENBQVo7O0FBQ0EsUUFBSSxDQUFDRCxHQUFELElBQVFuVixLQUFaLEVBQStCO0FBQzdCWCxhQUFPLENBQUMrRSxJQUFSLENBQWEsY0FBYjtBQUNEO0FBQ0Y7O0FBUnFCLENBQXhCO0FBV0EwUSxRQUFRLENBQUMzRyxJQUFULENBQWNrSCxXQUFkLENBQTBCUixRQUExQjtBQUVBQyxRQUFRLENBQUNRLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDclcsQ0FBQyxJQUFJO0FBQ3JDQSxHQUFDLENBQUNzVyxjQUFGO0FBQ0EsUUFBTTtBQUFFOU0sUUFBRjtBQUFRak87QUFBUixNQUFpQndhLGFBQXZCO0FBQ0EvVixHQUFDLENBQUMrVixhQUFGLENBQWdCUSxPQUFoQixDQUF3Qi9NLElBQUksSUFBSSxZQUFoQyxFQUE4Q2pPLElBQTlDO0FBQ0QsQ0FKRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTWliLEtBQUssR0FBRyxFQUFkO0FBQ0FDLCtGQUFPLENBQUNwUCxJQUFSLENBQWFxUCxZQUFiLENBQTBCQywrQ0FBMUI7O0FBQ0FGLCtGQUFPLENBQUM3VSxNQUFSLENBQWVnVixNQUFmLEdBQXlCaEwsSUFBRCxJQUFVO0FBQ2hDNEssT0FBSyxDQUFDSyxTQUFOLENBQWdCakwsSUFBSSxDQUFDdkYsS0FBTCxDQUFXcEssRUFBM0IsSUFBaUMyUCxJQUFqQztBQUNELENBRkQ7O0FBSUExUSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsaURBQWQsRUFBd0I7QUFDdEIwYixlQUFhLEVBQUVsSyxXQURPO0FBRXRCbUssYUFBVyxFQUFFelcsV0FGUzs7QUFHdEI7QUFDQTBXLFdBQVMsRUFBRUMsU0FKVzs7QUFLdEI7QUFDQSxRQUFNQyxTQUFOLENBQWdCO0FBQUVDO0FBQUYsR0FBaEIsRUFBNEI7QUFDMUIsVUFBTXJLLE9BQU8sR0FBRy9LLFVBQVUsRUFBMUI7QUFDQSxVQUFNekcsR0FBRyxHQUFHd1IsT0FBTyxDQUFDdEgsR0FBUixDQUFZNFIsVUFBWixDQUFaO0FBQ0EsVUFBTUMsT0FBTyxHQUFHLE1BQU1aLCtGQUFPLENBQUN2WCxJQUFSLENBQWFvWSxRQUFiLENBQXNCaGMsR0FBdEIsQ0FBdEI7QUFDQSxXQUFPO0FBQ0xzWixXQUFLLEVBQUU5SCxPQUFPLENBQUN0SCxHQUFSLENBQVk1RCxNQUFNLEtBQUs7QUFBRUEsY0FBRjtBQUFVMUMsWUFBSSxFQUFFbVksT0FBTyxDQUFDelYsTUFBTSxDQUFDeUUsS0FBUCxDQUFhcEssRUFBZDtBQUF2QixPQUFMLENBQWxCLENBREY7QUFFTGtiLFlBQU0sRUFBRUEsTUFBTSxHQUFHLE1BQU1WLCtGQUFPLENBQUN2UyxLQUFSLENBQWNvVCxRQUFkLENBQXVCaGMsR0FBdkIsQ0FBVCxHQUF1Q3laO0FBRmhELEtBQVA7QUFJRCxHQWRxQjs7QUFldEI7QUFDQTlTLGVBQWEsQ0FBQ2hHLEVBQUQsRUFBSztBQUNoQixXQUFPd2EsK0ZBQU8sQ0FBQ3ZYLElBQVIsQ0FBYXFZLE1BQWIsQ0FBb0J0YixFQUFwQixDQUFQO0FBQ0QsR0FsQnFCOztBQW1CdEJ1YixjQUFZLENBQUNDLElBQUQsRUFBTztBQUNqQixVQUFNN1YsTUFBTSxHQUFHcVYsU0FBUyxDQUFDUSxJQUFELENBQXhCO0FBQ0EsV0FBTzdWLE1BQU0sSUFBSSxDQUFDQSxNQUFNLENBQUN5QyxNQUFQLENBQWNqQyxPQUF6QixHQUNIUixNQUFNLENBQUM4VixJQUFQLENBQVlwVSxPQURULEdBRUgsSUFGSjtBQUdELEdBeEJxQjs7QUF5QnRCO0FBQ0FuQixhQUFXLENBQUM7QUFBRWxHLE1BQUY7QUFBTW1HO0FBQU4sR0FBRCxFQUFrQjtBQUMzQixXQUFPdUssZ0JBQWdCLENBQUMxUSxFQUFELEVBQUs7QUFDMUJvSSxZQUFNLEVBQUU7QUFBRWpDLGVBQU8sRUFBRUEsT0FBTyxHQUFHLENBQUgsR0FBTztBQUF6QixPQURrQjtBQUUxQmlFLFdBQUssRUFBRTtBQUFFMkYsb0JBQVksRUFBRTVOLElBQUksQ0FBQ0MsR0FBTDtBQUFoQjtBQUZtQixLQUFMLENBQXZCO0FBSUQsR0EvQnFCOztBQWdDdEI7QUFDQXNaLE1BQUksQ0FBQztBQUFFMWIsTUFBRjtBQUFNMmI7QUFBTixHQUFELEVBQWlCO0FBQ25CLFVBQU1oVyxNQUFNLEdBQUdpVyxhQUFhLENBQUM1YixFQUFELENBQTVCO0FBQ0EsVUFBTTZiLEtBQUssR0FBR3RCLEtBQUssQ0FBQzFKLE9BQU4sQ0FBY3pKLE9BQWQsQ0FBc0J6QixNQUF0QixDQUFkO0FBQ0E0VSxTQUFLLENBQUMxSixPQUFOLENBQWNpTCxNQUFkLENBQXFCRCxLQUFyQixFQUE0QixDQUE1QjtBQUNBdEIsU0FBSyxDQUFDMUosT0FBTixDQUFjaUwsTUFBZCxDQUFxQkQsS0FBSyxHQUFHRixNQUE3QixFQUFxQyxDQUFyQyxFQUF3Q2hXLE1BQXhDO0FBQ0EsV0FBT29XLGlCQUFpQixFQUF4QjtBQUNELEdBdkNxQjs7QUF3Q3RCO0FBQ0EsUUFBTUMsWUFBTixDQUFtQmhjLEVBQW5CLEVBQXVCO0FBQ3JCLFVBQU1tSCxDQUFDLEdBQUdvVCxLQUFLLENBQUMxSixPQUFOLENBQWN6SixPQUFkLENBQXNCd1UsYUFBYSxDQUFDNWIsRUFBRCxDQUFuQyxDQUFWOztBQUNBLFFBQUltSCxDQUFDLElBQUksQ0FBVCxFQUFZO0FBQ1ZvVCxXQUFLLENBQUMxSixPQUFOLENBQWNpTCxNQUFkLENBQXFCM1UsQ0FBckIsRUFBd0IsQ0FBeEI7QUFDQSxZQUFNbkQsT0FBTyxDQUFDd0ssR0FBUixDQUFZLENBQ2hCZ00sK0ZBQU8sQ0FBQzdVLE1BQVIsQ0FBZU0sTUFBZixDQUFzQmpHLEVBQXRCLENBRGdCLEVBRWhCd2EsK0ZBQU8sQ0FBQ3ZYLElBQVIsQ0FBYWdELE1BQWIsQ0FBb0JqRyxFQUFwQixDQUZnQixFQUdoQndhLCtGQUFPLENBQUN2UyxLQUFSLENBQWNoQyxNQUFkLENBQXFCakcsRUFBckIsQ0FIZ0IsQ0FBWixDQUFOO0FBS0Q7O0FBQ0QsV0FBT2hCLCtGQUFPLENBQUMsY0FBRCxFQUFpQmdCLEVBQWpCLENBQWQ7QUFDRCxHQXBEcUI7O0FBcUR0QmljLFdBQVMsRUFBRUMsaURBckRXO0FBc0R0QmxaLGFBQVcsRUFBRW1aLFdBdERTOztBQXVEdEI7QUFDQUMsa0JBQWdCLENBQUM7QUFBRXBjLE1BQUY7QUFBTW9JLFVBQU47QUFBY2xGO0FBQWQsR0FBRCxFQUF5QjtBQUN2QyxXQUFPd04sZ0JBQWdCLENBQUMxUSxFQUFELEVBQUs7QUFDMUJvSSxZQUQwQjtBQUUxQmxGLFlBRjBCO0FBRzFCa0gsV0FBSyxFQUFFO0FBQUUyRixvQkFBWSxFQUFFNU4sSUFBSSxDQUFDQyxHQUFMO0FBQWhCO0FBSG1CLEtBQUwsQ0FBdkI7QUFLRCxHQTlEcUI7O0FBK0R0QjtBQUNBaWEsUUFBTSxFQUFFQztBQWhFYyxDQUF4QjtBQW1FQUMsbURBQWEsQ0FBQ3JNLElBQWQsQ0FBbUIsWUFBWTtBQUFBOztBQUM3QixRQUFNO0FBQUU3SSxXQUFPLEVBQUVtVjtBQUFYLE1BQTJCLE1BQU1oWixPQUFPLENBQUNnWCxPQUFSLENBQWdCckssS0FBaEIsQ0FBc0JwSyxHQUF0QixDQUEwQixTQUExQixDQUF2QztBQUNBLFFBQU1zQixPQUFPLEdBQUd2QyxXQUFoQjtBQUNBLE1BQUksQ0FBQzBYLFdBQUwsRUFBa0IsTUFBTUMsMERBQU8sRUFBYjtBQUNsQixNQUFJcFYsT0FBTyxLQUFLbVYsV0FBaEIsRUFBNkJoWixPQUFPLENBQUNnWCxPQUFSLENBQWdCckssS0FBaEIsQ0FBc0JuSSxHQUF0QixDQUEwQjtBQUFFWDtBQUFGLEdBQTFCO0FBQzdCLFFBQU0vSCxJQUFJLEdBQUcsTUFBTWtFLE9BQU8sQ0FBQ2dYLE9BQVIsQ0FBZ0JySyxLQUFoQixDQUFzQnBLLEdBQXRCLEVBQW5CO0FBQ0EsUUFBTThLLE9BQU8sR0FBRyxFQUFoQjtBQUNBLFFBQU02TCxTQUFTLEdBQUc7QUFDaEIxYyxNQUFFLEVBQUUsQ0FEWTtBQUVoQjhQLFlBQVEsRUFBRTtBQUZNLEdBQWxCO0FBSUEsUUFBTTZNLEtBQUssR0FBRyxFQUFkO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQSxRQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxFQUFoQjtBQUNBOztBQUNBLFFBQU1DLFdBQVcsR0FBRyxTQUFTQyxDQUFULENBQVd0ZCxHQUFYLEVBQWdCO0FBQUVvZCxXQUFPLENBQUM1TSxJQUFSLENBQWEsS0FBS3hRLEdBQUwsS0FBYUEsR0FBMUI7QUFBaUMsR0FBdkU7O0FBQ0EsV0FBTThJLG1HQUFOLEVBQUFsSixJQUFJLEVBQWUsQ0FBQyxDQUFDcUksR0FBRCxFQUFNaEMsTUFBTixDQUFELEtBQW1CO0FBQ3BDK1UsbURBQVMsQ0FBQ25LLEdBQVYsQ0FBYzVJLEdBQWQsRUFBbUJoQyxNQUFuQjs7QUFDQSxRQUFJZ0MsR0FBRyxDQUFDdUcsVUFBSixDQUFlc00sK0ZBQU8sQ0FBQzdVLE1BQVIsQ0FBZXdJLE1BQTlCLENBQUosRUFBMkM7QUFBQTs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBTW5PLEVBQUUsR0FBR2lkLE1BQU0sQ0FBQ3RWLEdBQUcsQ0FBQ0wsS0FBSixDQUFVa1QsK0ZBQU8sQ0FBQzdVLE1BQVIsQ0FBZXdJLE1BQWYsQ0FBc0J6TixNQUFoQyxDQUFELENBQWpCOztBQUNBLFVBQUksQ0FBQ1YsRUFBRCxJQUFPMmMsS0FBSyxDQUFDM2MsRUFBRCxDQUFoQixFQUFzQjtBQUNwQjtBQUNBO0FBQ0E7QUFDRDs7QUFDRDJjLFdBQUssQ0FBQzNjLEVBQUQsQ0FBTCxHQUFZMkYsTUFBWjtBQUNBLFlBQU1vQixHQUFHLEdBQUdtVywwREFBVSxDQUFDdlgsTUFBRCxDQUF0Qjs7QUFDQSxVQUFJaVgsTUFBTSxDQUFDN1YsR0FBRCxDQUFWLEVBQWlCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Q7O0FBQ0Q2VixZQUFNLENBQUM3VixHQUFELENBQU4sR0FBY3BCLE1BQWQ7QUFDQUEsWUFBTSxDQUFDeUUsS0FBUCw2RUFDS3pFLE1BQU0sQ0FBQ3lFLEtBRFo7QUFFRXBLLFVBRkY7QUFHRStHO0FBSEY7QUFLQXBCLFlBQU0sQ0FBQ3pDLE1BQVAsNkVBQ0tpYSxnRUFBZ0IsRUFEckIsTUFFS3hYLE1BQU0sQ0FBQ3pDLE1BRlo7QUFJQXdaLGVBQVMsQ0FBQzFjLEVBQVYsR0FBZXVDLElBQUksQ0FBQzZhLEdBQUwsQ0FBU1YsU0FBUyxDQUFDMWMsRUFBbkIsRUFBdUJBLEVBQXZCLENBQWY7QUFDQTBjLGVBQVMsQ0FBQzVNLFFBQVYsR0FBcUJ2TixJQUFJLENBQUM2YSxHQUFMLENBQVNWLFNBQVMsQ0FBQzVNLFFBQW5CLEVBQTZCbU4sTUFBTSxDQUFDdFgsTUFBTSxDQUFDeUUsS0FBUCxDQUFhMEYsUUFBZCxDQUFuQyxDQUFyQjtBQUNBZSxhQUFPLENBQUNYLElBQVIsQ0FBYXZLLE1BQWIsRUFoQ3lDLENBaUN6Qzs7QUFDQSxZQUFNO0FBQ0p6QyxjQUFNLEVBQUU7QUFBRW1hLGlCQUFPLEdBQUc7QUFBWixZQUFtQixFQUR2QjtBQUVKNUIsWUFBSSxHQUFHOVYsTUFBTSxDQUFDOFYsSUFBUCxHQUFjO0FBRmpCLFVBR0Y5VixNQUhKO0FBSUE4VixVQUFJLENBQUM2QixLQUFMLEdBQWEsQ0FBQyxHQUFHLElBQUlDLEdBQUosQ0FBUTlCLElBQUksQ0FBQzZCLEtBQUwsSUFBYyxFQUF0QixDQUFKLENBQWIsQ0F0Q3lDLENBc0NJOztBQUM3Qyx1QkFBQTdCLElBQUksQ0FBQytCLE9BQUwsbUNBQWN0UyxPQUFkLENBQXNCNlIsV0FBdEIsRUFBbUNNLE9BQW5DO0FBQ0FwZSxZQUFNLENBQUNpYyxNQUFQLENBQWNPLElBQUksQ0FBQ2dDLFNBQUwsSUFBa0IsRUFBaEMsRUFBb0N2UyxPQUFwQyxDQUE0QzZSLFdBQTVDLEVBQXlETSxPQUF6RDtBQUNBLGVBQVNOLFdBQVQsRUFBQU0sT0FBTyxFQUFjNUIsSUFBSSxDQUFDaUMsSUFBbkIsQ0FBUDtBQUNELEtBMUNELE1BMENPLElBQUkvVixHQUFHLENBQUN1RyxVQUFKLENBQWVzTSwrRkFBTyxDQUFDbUQsR0FBUixDQUFZeFAsTUFBM0IsQ0FBSixFQUF3QztBQUM3QzBPLFVBQUksQ0FBQzNNLElBQUwsQ0FBVXZJLEdBQUcsQ0FBQ0wsS0FBSixDQUFVa1QsK0ZBQU8sQ0FBQ21ELEdBQVIsQ0FBWXhQLE1BQVosQ0FBbUJ6TixNQUE3QixDQUFWO0FBQ0Q7QUFDRixHQS9DRyxDQUFKO0FBZ0RBOFosaUdBQU8sQ0FBQ21ELEdBQVIsQ0FBWUMsV0FBWixDQUF3QmYsSUFBSSxDQUFDN0wsTUFBTCxDQUFZdFIsR0FBRyxJQUFJLENBQUNvZCxPQUFPLENBQUNqYixRQUFSLENBQWlCbkMsR0FBakIsQ0FBcEIsQ0FBeEI7QUFDQVQsUUFBTSxDQUFDQyxNQUFQLENBQWNxYixLQUFkLEVBQXFCO0FBQ25CMUosV0FEbUI7QUFFbkI2TCxhQUZtQjtBQUduQjlCLGFBQVMsRUFBRS9KLE9BQU8sQ0FBQ25CLE1BQVIsQ0FBZSxDQUFDbkcsR0FBRCxFQUFNb0csSUFBTixLQUFlO0FBQ3ZDcEcsU0FBRyxDQUFDb0csSUFBSSxDQUFDdkYsS0FBTCxDQUFXcEssRUFBWixDQUFILEdBQXFCMlAsSUFBckI7QUFDQSxhQUFPcEcsR0FBUDtBQUNELEtBSFUsRUFHUixFQUhRO0FBSFEsR0FBckIsRUFsRTZCLENBMEU3Qjs7QUFDQSxNQUFJbEMsT0FBTyxLQUFLbVYsV0FBWixJQUNENVksVUFEQyxJQUVELGtCQUFBdEUsSUFBSSxDQUFDb00sT0FBTCxtQ0FBY21TLGlCQUFkLE1BQW9DQyxrR0FGbkMsSUFHREMsc0dBQWMsQ0FBQ3ZCLFdBQUQsRUFBYyxRQUFkLENBQWQsSUFBeUMsQ0FINUMsRUFHK0M7QUFDN0N0VSwrREFBUyxDQUFDLG1CQUFELEVBQXNCOFYsa0dBQXRCLENBQVQ7QUFDRDs7QUFDRCxNQUFJbFosS0FBSixFQUF1QixFQUV0Qjs7QUFDRHdYLFFBQU0sQ0FBQ2hkLElBQUQsQ0FBTjtBQUNBLFNBQU9xUixXQUFXLEVBQWxCO0FBQ0QsQ0F0RkQ7QUF3RkE7O0FBQ0EsU0FBU3NNLE1BQVQsQ0FBZ0IxVSxHQUFoQixFQUFxQjtBQUNuQixTQUFPLENBQUNBLEdBQUQsSUFBUSxDQUFmO0FBQ0Q7QUFFRDs7O0FBQ0EsU0FBUzRTLFVBQVQsQ0FBb0J4VixNQUFwQixFQUE0QjtBQUMxQixTQUFPQSxNQUFQLG9CQUFPQSxNQUFNLENBQUV5RSxLQUFSLENBQWNwSyxFQUFyQjtBQUNEO0FBRUQ7OztBQUNBLFNBQVNpZSxrQkFBVCxHQUE4QjtBQUM1Qi9WLDZEQUFTLENBQUMsY0FBRCxFQUFpQi9GLElBQUksQ0FBQ0MsR0FBTCxFQUFqQixDQUFUO0FBQ0Q7QUFFRDs7O0FBQ08sZUFBZTJaLGlCQUFmLEdBQW1DO0FBQ3hDLFFBQU10TCxPQUFPLEdBQUc4SixLQUFLLENBQUMxSixPQUFOLENBQWNHLE1BQWQsQ0FBcUIsQ0FBQztBQUFFNUc7QUFBRixHQUFELEVBQVl5UixLQUFaLEtBQXNCO0FBQ3pELFVBQU0vTCxRQUFRLEdBQUcrTCxLQUFLLEdBQUcsQ0FBekI7QUFDQSxVQUFNMWIsR0FBRyxHQUFHaUssS0FBSyxDQUFDMEYsUUFBTixLQUFtQkEsUUFBL0I7QUFDQSxRQUFJM1AsR0FBSixFQUFTaUssS0FBSyxDQUFDMEYsUUFBTixHQUFpQkEsUUFBakI7QUFDVCxXQUFPM1AsR0FBUDtBQUNELEdBTGUsQ0FBaEI7QUFNQW9hLE9BQUssQ0FBQ21DLFNBQU4sQ0FBZ0I1TSxRQUFoQixHQUEyQnlLLEtBQUssQ0FBQzFKLE9BQU4sQ0FBY25RLE1BQXpDOztBQUNBLE1BQUkrUCxPQUFPLENBQUMvUCxNQUFaLEVBQW9CO0FBQ2xCLFVBQU04WiwrRkFBTyxDQUFDN1UsTUFBUixDQUFldVksSUFBZixDQUFvQnpOLE9BQXBCLENBQU47QUFDQXdOLHNCQUFrQjtBQUNuQjs7QUFDRCxTQUFPeE4sT0FBTyxDQUFDL1AsTUFBZjtBQUNEO0FBRUQ7O0FBQ08sZUFBZWlRLFdBQWYsR0FBNkI7QUFDbEM0SixPQUFLLENBQUMxSixPQUFOLENBQWNzTixJQUFkLENBQW1CLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVcEIsTUFBTSxDQUFDbUIsQ0FBQyxDQUFDaFUsS0FBRixDQUFRMEYsUUFBVCxDQUFOLEdBQTJCbU4sTUFBTSxDQUFDb0IsQ0FBQyxDQUFDalUsS0FBRixDQUFRMEYsUUFBVCxDQUE5RDtBQUNBLFFBQU1jLE9BQU8sR0FBRyxNQUFNbUwsaUJBQWlCLEVBQXZDO0FBQ0EvYyxpR0FBTyxDQUFDLGdCQUFELEVBQW1CLElBQW5CLENBQVA7QUFDQSxTQUFPNFIsT0FBUDtBQUNEO0FBRUQ7O0FBQ08sU0FBU2dMLGFBQVQsQ0FBdUI1YixFQUF2QixFQUEyQjtBQUNoQyxTQUFPdWEsS0FBSyxDQUFDSyxTQUFOLENBQWdCNWEsRUFBaEIsQ0FBUDtBQUNEO0FBRUQ7O0FBQ08sU0FBU2diLFNBQVQsQ0FBbUI7QUFBRWhiLElBQUY7QUFBTStHLEtBQU47QUFBVzBVO0FBQVgsQ0FBbkIsRUFBc0M7QUFDM0MsTUFBSTlWLE1BQUo7O0FBQ0EsTUFBSTNGLEVBQUosRUFBUTtBQUNOMkYsVUFBTSxHQUFHaVcsYUFBYSxDQUFDNWIsRUFBRCxDQUF0QjtBQUNELEdBRkQsTUFFTztBQUNMLFFBQUksQ0FBQytHLEdBQUwsRUFBVUEsR0FBRyxHQUFHbVcsMERBQVUsQ0FBQztBQUFFekIsVUFBRjtBQUFRemIsUUFBRSxFQUFFO0FBQVosS0FBRCxDQUFoQjtBQUNWMkYsVUFBTSxHQUFHNFUsS0FBSyxDQUFDMUosT0FBTixDQUFjNkcsSUFBZCxDQUFtQixDQUFDO0FBQUV0TjtBQUFGLEtBQUQsS0FBZXJELEdBQUcsS0FBS3FELEtBQUssQ0FBQ3JELEdBQWhELENBQVQ7QUFDRDs7QUFDRCxTQUFPcEIsTUFBUDtBQUNEO0FBRUQ7O0FBQ08sU0FBU0csVUFBVCxHQUFzQjtBQUMzQixTQUFPeVUsS0FBSyxDQUFDMUosT0FBTixDQUFjRyxNQUFkLENBQXFCckwsTUFBTSxJQUFJLENBQUNBLE1BQU0sQ0FBQ3lDLE1BQVAsQ0FBY2pDLE9BQTlDLENBQVA7QUFDRDtBQUVEOzs7Ozs7QUFLTyxTQUFTbVksbUJBQVQsQ0FBNkJqZixHQUE3QixFQUFrQztBQUN2QyxTQUFPbWIsK0ZBQU8sQ0FBQ3ZTLEtBQVIsQ0FBY29ULFFBQWQsQ0FBdUJoYyxHQUF2QixDQUFQO0FBQ0Q7QUFFRDs7Ozs7O0FBS08sZUFBZWtmLGVBQWYsQ0FBK0JDLFNBQS9CLEVBQTBDO0FBQy9DLE1BQUkxWixLQUFKLEVBQXVCWCxFQUFBO0FBQ3ZCLFFBQU1xVywrRkFBTyxDQUFDdlMsS0FBUixDQUFjaVcsSUFBZCxDQUFtQk0sU0FBbkIsQ0FBTjtBQUNBLFNBQU9BLFNBQVA7QUFDRDtBQUVNLE1BQU1DLGNBQWMsR0FBRyxXQUF2QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFyQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxVQUF0QjtBQUNQLE1BQU1DLFdBQVcsR0FBRywyQ0FBcEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsa0NBQWxCO0FBQ0E7Ozs7QUFHTyxlQUFlQyxlQUFmLENBQStCcGYsR0FBL0IsRUFBb0NxZixLQUFwQyxFQUEyQztBQUNoRCxRQUFNQyxVQUFVLEdBQUdDLDZEQUFhLENBQUN2ZixHQUFELENBQWIsR0FDZixFQURlLEdBRWY2YSxLQUFLLENBQUMxSixPQUFOLENBQWNHLE1BQWQsQ0FBcUJyTCxNQUFNO0FBQUE7O0FBQUEsV0FDM0IsQ0FBQ0EsTUFBTSxDQUFDeUMsTUFBUCxDQUFjakMsT0FBZixLQUNJNFksS0FBSyxJQUFJLDJCQUFFcFosTUFBTSxDQUFDekMsTUFBUCxDQUFjZ2MsUUFBaEIsb0NBQTRCdlosTUFBTSxDQUFDOFYsSUFBUCxDQUFZeUQsUUFBeEMsQ0FEYixLQUVHQywwREFBVSxDQUFDemYsR0FBRCxFQUFNaUcsTUFBTixDQUhjO0FBQUEsR0FBM0IsQ0FGSjtBQU9BLFFBQU15WixXQUFXLEdBQUcsRUFBcEI7QUFDQTs7QUFDQSxRQUFNLENBQUNDLFFBQUQsRUFBV0MsVUFBWCxJQUF5QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8vVixHQUFQLENBQVcsT0FBTztBQUMvQ2xLLE9BQUcsRUFBRSxFQUQwQzs7QUFFL0M7QUFDQXdSLFdBQU8sRUFBRSxFQUhzQztBQUkvQyxLQUFDNE4sY0FBRCxHQUFrQixFQUo2QjtBQUsvQyxLQUFDQyxZQUFELEdBQWdCLEVBTCtCO0FBTS9DLEtBQUNDLGFBQUQsR0FBaUI7QUFOOEIsR0FBUCxDQUFYLENBQS9CO0FBUUFLLFlBQVUsQ0FBQzlULE9BQVgsQ0FBb0J2RixNQUFELElBQVk7QUFBQTs7QUFDN0IsVUFBTTtBQUFFM0Y7QUFBRixRQUFTMkYsTUFBTSxDQUFDeUUsS0FBdEI7O0FBQ0EsUUFBSSxDQUFDekUsTUFBTSxDQUFDeUMsTUFBUCxDQUFjbUMsT0FBbkIsRUFBNEI7QUFDMUI2VSxpQkFBVyxDQUFDbFAsSUFBWixDQUFpQmxRLEVBQWpCO0FBQ0E7QUFDRDs7QUFDRCxVQUFNO0FBQUV5YixVQUFGO0FBQVF2WTtBQUFSLFFBQW1CeUMsTUFBekI7QUFDQSxVQUFNO0FBQUUwWCxhQUFPLEdBQUdrQyxZQUFZLENBQUM1WixNQUFEO0FBQXhCLFFBQXFDekMsTUFBM0M7QUFDQSxVQUFNc2MsS0FBSyxHQUFHLFlBQUMsR0FBRXRjLE1BQU0sQ0FBQ3NjLEtBQVAsSUFBZ0IvRCxJQUFJLENBQUMrRCxLQUFyQixJQUE4QixFQUFHLEVBQXBDLENBQXNDdGUsS0FBdEMsQ0FBNEMyZCxTQUE1Qyw4QkFBeUQsQ0FBekQsTUFBK0QsS0FBN0U7QUFDQSxVQUFNWSxHQUFHLEdBQUdELEtBQUssS0FBSyxPQUFWLElBQXFCQSxLQUFLLEtBQUssTUFBL0IsR0FBd0NILFFBQXhDLEdBQW1EQyxVQUEvRDtBQUNBRyxPQUFHLENBQUNwZ0IsR0FBSixDQUFRNlEsSUFBUixDQUFhbFEsRUFBYjs7QUFDQSxRQUFJeWIsSUFBSSxDQUFDNkIsS0FBTCxDQUFXb0MsSUFBWCxDQUFnQmQsV0FBVyxDQUFDM1gsSUFBNUIsRUFBa0MyWCxXQUFsQyxDQUFKLEVBQW9EO0FBQ2xEYSxTQUFHLENBQUNkLGFBQUQsQ0FBSCxDQUFtQnpPLElBQW5CLENBQXdCbFEsRUFBeEI7QUFDRDs7QUFDRCxTQUFLLE1BQU0sQ0FBQzZGLElBQUQsRUFBT2lCLElBQVAsQ0FBWCxJQUEyQixDQUN6QixDQUFDMlUsSUFBSSxDQUFDK0IsT0FBTixFQUFla0IsWUFBZixDQUR5QixFQUV6QixDQUFDemYsTUFBTSxDQUFDaWMsTUFBUCxDQUFjTyxJQUFJLENBQUNnQyxTQUFuQixDQUFELEVBQWdDZ0IsY0FBaEMsQ0FGeUIsQ0FBM0IsRUFHRztBQUNENVksVUFBSSxDQUFDcUYsT0FBTCxDQUFhdkQsR0FBRyxJQUFJO0FBQ2xCQSxXQUFHLEdBQUcwVixPQUFPLENBQUMxVixHQUFELENBQVAsSUFBZ0JBLEdBQXRCOztBQUNBLFlBQUksQ0FBQzBYLFFBQVEsQ0FBQ3ZZLElBQUQsQ0FBUixDQUFlakYsUUFBZixDQUF3QjhGLEdBQXhCLENBQUwsRUFBbUM7QUFDakM4WCxhQUFHLENBQUMzWSxJQUFELENBQUgsQ0FBVW9KLElBQVYsQ0FBZXZJLEdBQWY7QUFDRDtBQUNGLE9BTEQ7QUFNRDtBQUNEOzs7QUFDQThYLE9BQUcsQ0FBQzVPLE9BQUosQ0FBWVgsSUFBWiwyRUFBc0J2SyxNQUF0QjtBQUE4QjZaO0FBQTlCO0FBQ0QsR0EzQkQ7O0FBNEJBLE1BQUlGLFVBQVUsQ0FBQ2pnQixHQUFYLENBQWVxQixNQUFuQixFQUEyQjtBQUN6QjRlLGNBQVUsQ0FBQzFTLE9BQVgsR0FBcUIrUyxtQkFBbUIsQ0FBQ0wsVUFBRCxDQUF4QztBQUNEO0FBQ0Q7OztBQUNBLG1GQUNLRCxRQURMLE9BRUssTUFBTU0sbUJBQW1CLENBQUNOLFFBQUQsQ0FGOUI7QUFHRUQsZUFIRjtBQUlFRTtBQUpGO0FBTUQ7QUFFRDs7Ozs7QUFJQSxNQUFNTSxjQUFjLEdBQUczZ0IsTUFBTSxDQUFDbVUsT0FBUCxDQUFlO0FBQ3BDdlEsT0FBSyxFQUFFNGIsY0FENkI7QUFFcEN4YixNQUFJLEVBQUUsS0FGOEI7QUFHcEN1YSxTQUFPLEVBQUVrQixZQUgyQjtBQUlwQ3pXLE9BQUssRUFBRTBXO0FBSjZCLENBQWYsQ0FBdkI7QUFNQSxNQUFNa0Isa0JBQWtCLEdBQUcsRUFBM0I7O0FBRUEsZUFBZUYsbUJBQWYsQ0FBbUNGLEdBQW5DLEVBQXdDSyxPQUF4QyxFQUFpRDtBQUMvQyxRQUFNalksSUFBSSxHQUFHLEVBQWI7QUFDQStYLGdCQUFjLENBQUMxVSxPQUFmLENBQXVCLENBQUMsQ0FBQzZVLElBQUQsRUFBT0MsTUFBUCxDQUFELEtBQW9CO0FBQ3pDUCxPQUFHLENBQUNPLE1BQUQsQ0FBSCxDQUFZOVUsT0FBWixDQUFvQmxMLEVBQUUsSUFBSTtBQUN4QjZILFVBQUksQ0FBQ3FJLElBQUwsQ0FBVXNLLCtGQUFPLENBQUN1RixJQUFELENBQVAsQ0FBY0UsTUFBZCxDQUFxQmpnQixFQUFyQixDQUFWO0FBQ0QsS0FGRDtBQUdELEdBSkQ7QUFLQSxRQUFNVixJQUFJLEdBQUcsTUFBTWtiLCtGQUFPLENBQUNwUCxJQUFSLENBQWFpUSxRQUFiLENBQXNCeFQsSUFBdEIsQ0FBbkI7O0FBQ0EsT0FBSyxNQUFNLENBQUNrWSxJQUFELEVBQU9DLE1BQVAsQ0FBWCxJQUE2QkosY0FBN0IsRUFBNkM7QUFDM0NILE9BQUcsQ0FBQ00sSUFBRCxDQUFILEdBQVksRUFBWjs7QUFDQSxTQUFLLE1BQU0vZixFQUFYLElBQWlCeWYsR0FBRyxDQUFDTyxNQUFELENBQXBCLEVBQThCO0FBQzVCLFlBQU16WCxHQUFHLEdBQUdqSixJQUFJLENBQUNrYiwrRkFBTyxDQUFDdUYsSUFBRCxDQUFQLENBQWNFLE1BQWQsQ0FBcUJqZ0IsRUFBckIsQ0FBRCxDQUFoQjtBQUNBeWYsU0FBRyxDQUFDTSxJQUFELENBQUgsQ0FBVS9mLEVBQVYsSUFBZ0J1SSxHQUFoQjs7QUFDQSxVQUFJQSxHQUFHLElBQUksSUFBUCxJQUFld1gsSUFBSSxLQUFLLE9BQXhCLElBQW1DRixrQkFBa0IsQ0FBQ0UsSUFBSSxHQUFHL2YsRUFBUixDQUFsQixLQUFrQyxDQUF6RSxFQUE0RTtBQUMxRSxjQUFNeUgsR0FBRyxHQUFJLFFBQU9zWSxJQUFLLHlCQUF3Qi9mLEVBQUcsSUFBcEQ7QUFDQSxjQUFNa2dCLElBQUksR0FBRyxnRUFBYjtBQUNBTCwwQkFBa0IsQ0FBQ0UsSUFBSSxHQUFHL2YsRUFBUixDQUFsQixHQUFnQzhmLE9BQU8sR0FBRyxDQUFILEdBQU8sQ0FBOUM7O0FBQ0EsWUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWjNiLGlCQUFPLENBQUMrRSxJQUFSLENBQWF6QixHQUFiLEVBQWtCLGNBQWxCOztBQUNBLGNBQUksTUFBTTZVLE1BQU0sRUFBaEIsRUFBb0I7QUFDbEIsbUJBQU9xRCxtQkFBbUIsQ0FBQ0YsR0FBRCxFQUFNLElBQU4sQ0FBMUI7QUFDRDtBQUNGOztBQUNEdGIsZUFBTyxDQUFDK0ksS0FBUixDQUFjekYsR0FBZCxFQUFtQnlZLElBQW5CO0FBQ0ExTCwrREFBTSxDQUFDO0FBQUVDLGVBQUssRUFBRWhOLEdBQVQ7QUFBY3dMLGNBQUksRUFBRWlOO0FBQXBCLFNBQUQsQ0FBTjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxTQUFPVCxHQUFQO0FBQ0Q7QUFFRDs7Ozs7O0FBSU8sZUFBZWxnQixPQUFmLENBQXVCRixHQUF2QixFQUE0QjtBQUNqQyxRQUFNd1IsT0FBTyxHQUFHeFIsR0FBRyxHQUFHQSxHQUFHLENBQUNrSyxHQUFKLENBQVFxUyxhQUFSLENBQUgsR0FBNEJyQixLQUFLLENBQUMxSixPQUFyRDtBQUNBLFNBQU87QUFDTEEsV0FESztBQUVMaE8sU0FBSyxFQUFFLE1BQU1zZCxZQUFZLENBQUN0UCxPQUFEO0FBRnBCLEdBQVA7QUFJRDs7QUFFRCxTQUFTc1AsWUFBVCxDQUFzQnRQLE9BQXRCLEVBQStCO0FBQzdCLFFBQU11UCxRQUFRLEdBQUcsRUFBakI7QUFDQXZQLFNBQU8sQ0FBQzNGLE9BQVIsQ0FBaUJ2RixNQUFELElBQVk7QUFDMUIsVUFBTTtBQUFFK1g7QUFBRixRQUFXL1gsTUFBTSxDQUFDOFYsSUFBeEI7O0FBQ0EsUUFBSTRFLGdHQUFRLENBQUMzQyxJQUFELENBQVosRUFBb0I7QUFBQTs7QUFDbEIwQyxjQUFRLENBQUNsUSxJQUFULENBQWMsMEJBQUF2SyxNQUFNLENBQUN6QyxNQUFQLENBQWNtYSxPQUFkLDJDQUF3QkssSUFBeEIsTUFBaUNBLElBQS9DO0FBQ0Q7QUFDRixHQUxEO0FBTUEsU0FBTzBDLFFBQVEsQ0FBQzFmLE1BQVQsR0FDSDhaLCtGQUFPLENBQUMzWCxLQUFSLENBQWN3WSxRQUFkLENBQXVCK0UsUUFBdkIsRUFBaUN0SCxTQUFqQyxFQUE0QzBCLCtGQUFPLENBQUMzWCxLQUFSLENBQWN5ZCxXQUExRCxDQURHLEdBRUgsRUFGSjtBQUdEO0FBRUQ7OztBQUNPLFNBQVNqYyxXQUFULENBQXFCO0FBQUVrYztBQUFGLElBQVksRUFBakMsRUFBcUM7QUFDMUMsUUFBTW5lLEdBQUcsR0FBR0QsSUFBSSxDQUFDQyxHQUFMLEVBQVo7QUFDQSxRQUFNb2UsUUFBUSxHQUFHakcsS0FBSyxDQUFDMUosT0FBTixDQUFjRyxNQUFkLENBQXFCckwsTUFBTSxJQUFJQSxNQUFNLENBQUN5QyxNQUFQLENBQWNqQyxPQUFkLEtBQzlDb2EsS0FBSyxJQUFJbmUsR0FBRyxHQUFHNmEsTUFBTSxDQUFDdFgsTUFBTSxDQUFDeUUsS0FBUCxDQUFhMkYsWUFBZCxDQUFaLEdBQTBDMFEsbUdBREwsQ0FBL0IsQ0FBakI7O0FBR0EsTUFBSUQsUUFBUSxDQUFDOWYsTUFBYixFQUFxQjtBQUNuQjZaLFNBQUssQ0FBQzFKLE9BQU4sR0FBZ0IwSixLQUFLLENBQUMxSixPQUFOLENBQWNHLE1BQWQsQ0FBcUJyTCxNQUFNLElBQUksQ0FBQ0EsTUFBTSxDQUFDeUMsTUFBUCxDQUFjakMsT0FBOUMsQ0FBaEI7QUFDQSxVQUFNOUcsR0FBRyxHQUFHbWhCLFFBQVEsQ0FBQ2pYLEdBQVQsQ0FBYTRSLFVBQWIsQ0FBWjtBQUNBWCxtR0FBTyxDQUFDN1UsTUFBUixDQUFlaVksV0FBZixDQUEyQnZlLEdBQTNCO0FBQ0FtYixtR0FBTyxDQUFDdlgsSUFBUixDQUFhMmEsV0FBYixDQUF5QnZlLEdBQXpCO0FBQ0FtYixtR0FBTyxDQUFDdlMsS0FBUixDQUFjMlYsV0FBZCxDQUEwQnZlLEdBQTFCO0FBQ0Q7O0FBQ0QsU0FBT21oQixRQUFRLENBQUM5ZixNQUFoQjtBQUNEO0FBRUQ7O0FBQ0EsU0FBU2dnQixPQUFULEdBQW1CO0FBQ2pCLFFBQU1DLEdBQUcsR0FBRyxJQUFJQyxXQUFKLENBQWdCLENBQWhCLENBQVo7QUFDQXhJLFFBQU0sQ0FBQ3lJLE1BQVAsQ0FBY0MsZUFBZCxDQUE4QkgsR0FBOUIsRUFGaUIsQ0FHakI7QUFDQTtBQUNBOztBQUNBQSxLQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxNQUFULEdBQWtCLE1BQTNCLENBTmlCLENBTWtCOztBQUNuQ0EsS0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsTUFBVCxHQUFrQixNQUEzQixDQVBpQixDQU9rQjs7QUFDbkMsU0FBTyxlQUFlOU4sT0FBZixDQUF1QixLQUF2QixFQUE4QjFMLENBQUMsSUFBSSxDQUFDd1osR0FBRyxDQUFDeFosQ0FBRCxDQUFILEdBQVMsT0FBVixFQUFvQnVMLFFBQXBCLENBQTZCLEVBQTdCLEVBQWlDcEwsS0FBakMsQ0FBdUMsQ0FBQyxDQUF4QyxDQUFuQyxDQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLGVBQWV5WixVQUFmLENBQTBCcGIsTUFBMUIsRUFBa0MxQyxJQUFsQyxFQUF3QztBQUN0QyxRQUFNbUYsTUFBTSxHQUFHekMsTUFBTSxDQUFDeUMsTUFBUCxJQUFpQixFQUFoQztBQUNBQSxRQUFNLENBQUNtQyxPQUFQLEdBQWlCMFMsTUFBTSxDQUFDN1UsTUFBTSxDQUFDbUMsT0FBUixDQUF2QjtBQUNBbkMsUUFBTSxDQUFDb0MsWUFBUCxHQUFzQnlTLE1BQU0sQ0FBQzdVLE1BQU0sQ0FBQ29DLFlBQVIsQ0FBNUI7QUFDQSxRQUFNSixLQUFLLEdBQUd6RSxNQUFNLENBQUN5RSxLQUFQLElBQWdCLEVBQTlCO0FBQ0EsTUFBSTRXLFNBQUo7O0FBQ0EsTUFBSSxDQUFDNVcsS0FBSyxDQUFDcEssRUFBWCxFQUFlO0FBQ2J1YSxTQUFLLENBQUNtQyxTQUFOLENBQWdCMWMsRUFBaEIsSUFBc0IsQ0FBdEI7QUFDQW9LLFNBQUssQ0FBQ3BLLEVBQU4sR0FBV3VhLEtBQUssQ0FBQ21DLFNBQU4sQ0FBZ0IxYyxFQUEzQjtBQUNELEdBSEQsTUFHTztBQUNMZ2hCLGFBQVMsR0FBR3pHLEtBQUssQ0FBQ0ssU0FBTixDQUFnQnhRLEtBQUssQ0FBQ3BLLEVBQXRCLENBQVo7QUFDRDs7QUFDRG9LLE9BQUssQ0FBQ3JELEdBQU4sR0FBWW1XLDBEQUFVLENBQUN2WCxNQUFELENBQXRCO0FBQ0F5RSxPQUFLLENBQUM2VyxJQUFOLEdBQWE3VyxLQUFLLENBQUM2VyxJQUFOLEtBQWNKLE1BQU0sQ0FBQ0ssVUFBckIsb0JBQWNMLE1BQU0sQ0FBQ0ssVUFBUCxFQUFkLEtBQXVDUixPQUFPLEVBQTNELENBYnNDLENBY3RDOztBQUNBLE1BQUluRyxLQUFLLENBQUMxSixPQUFOLENBQWM2TyxJQUFkLENBQW1CLENBQUM7QUFBRXRWLFNBQUssRUFBRTtBQUFFcEssUUFBRjtBQUFNK0c7QUFBTixRQUFjO0FBQXZCLEdBQUQsS0FBaUNxRCxLQUFLLENBQUNwSyxFQUFOLEtBQWFBLEVBQWIsSUFBbUJvSyxLQUFLLENBQUNyRCxHQUFOLEtBQWNBLEdBQXJGLENBQUosRUFBK0Y7QUFDN0YsVUFBTW9hLDRGQUFJLENBQUMsc0JBQUQsQ0FBVjtBQUNEOztBQUNELE1BQUlILFNBQUosRUFBZTtBQUNicmIsVUFBTSxDQUFDeUMsTUFBUCw2RUFBcUI0WSxTQUFTLENBQUM1WSxNQUEvQixNQUEwQ0EsTUFBMUM7QUFDQXpDLFVBQU0sQ0FBQ3lFLEtBQVAsNkVBQW9CNFcsU0FBUyxDQUFDNVcsS0FBOUIsTUFBd0NBLEtBQXhDO0FBQ0EsVUFBTXlSLEtBQUssR0FBR3RCLEtBQUssQ0FBQzFKLE9BQU4sQ0FBY3pKLE9BQWQsQ0FBc0I0WixTQUF0QixDQUFkO0FBQ0F6RyxTQUFLLENBQUMxSixPQUFOLENBQWNnTCxLQUFkLElBQXVCbFcsTUFBdkI7QUFDRCxHQUxELE1BS087QUFDTCxRQUFJLENBQUN5RSxLQUFLLENBQUMwRixRQUFYLEVBQXFCO0FBQ25CeUssV0FBSyxDQUFDbUMsU0FBTixDQUFnQjVNLFFBQWhCLElBQTRCLENBQTVCO0FBQ0ExRixXQUFLLENBQUMwRixRQUFOLEdBQWlCeUssS0FBSyxDQUFDbUMsU0FBTixDQUFnQjVNLFFBQWpDO0FBQ0QsS0FIRCxNQUdPLElBQUl5SyxLQUFLLENBQUNtQyxTQUFOLENBQWdCNU0sUUFBaEIsR0FBMkIxRixLQUFLLENBQUMwRixRQUFyQyxFQUErQztBQUNwRHlLLFdBQUssQ0FBQ21DLFNBQU4sQ0FBZ0I1TSxRQUFoQixHQUEyQjFGLEtBQUssQ0FBQzBGLFFBQWpDO0FBQ0Q7O0FBQ0RuSyxVQUFNLENBQUN5QyxNQUFQLEdBQWdCQSxNQUFoQjtBQUNBekMsVUFBTSxDQUFDeUUsS0FBUCxHQUFlQSxLQUFmO0FBQ0FtUSxTQUFLLENBQUMxSixPQUFOLENBQWNYLElBQWQsQ0FBbUJ2SyxNQUFuQjtBQUNEOztBQUNELFNBQU8zQixPQUFPLENBQUN3SyxHQUFSLENBQVksQ0FDakJnTSwrRkFBTyxDQUFDN1UsTUFBUixDQUFldVksSUFBZixDQUFvQnZZLE1BQXBCLENBRGlCLEVBRWpCNlUsK0ZBQU8sQ0FBQ3ZYLElBQVIsQ0FBYStFLEdBQWIsQ0FBaUJvQyxLQUFLLENBQUNwSyxFQUF2QixFQUEyQmlELElBQTNCLENBRmlCLENBQVosQ0FBUDtBQUlEO0FBRUQ7OztBQUNPLGVBQWV5TixnQkFBZixDQUFnQzFRLEVBQWhDLEVBQW9DVixJQUFwQyxFQUEwQztBQUMvQyxRQUFNcUcsTUFBTSxHQUFHNFUsS0FBSyxDQUFDSyxTQUFOLENBQWdCNWEsRUFBaEIsQ0FBZjtBQUNBLE1BQUksQ0FBQzJGLE1BQUwsRUFBYSxNQUFNLElBQU47QUFDYkEsUUFBTSxDQUFDeUUsS0FBUCw2RUFBb0J6RSxNQUFNLENBQUN5RSxLQUEzQixNQUFxQzlLLElBQUksQ0FBQzhLLEtBQTFDO0FBQ0F6RSxRQUFNLENBQUN5QyxNQUFQLDZFQUFxQnpDLE1BQU0sQ0FBQ3lDLE1BQTVCLE1BQXVDOUksSUFBSSxDQUFDOEksTUFBNUM7QUFDQXpDLFFBQU0sQ0FBQ3pDLE1BQVAsNkVBQXFCeUMsTUFBTSxDQUFDekMsTUFBNUIsTUFBdUM1RCxJQUFJLENBQUM0RCxNQUE1QztBQUNBLFFBQU1zWCwrRkFBTyxDQUFDN1UsTUFBUixDQUFldVksSUFBZixDQUFvQnZZLE1BQXBCLENBQU47QUFDQSxTQUFPM0csK0ZBQU8sQ0FBQ29pQix3R0FBRCxFQUFvQjtBQUFFaGUsU0FBSyxFQUFFO0FBQUVwRDtBQUFGLEtBQVQ7QUFBaUI0RixVQUFNLEVBQUVEO0FBQXpCLEdBQXBCLENBQWQ7QUFDRDtBQUVEOztBQUNPLGVBQWV3VyxXQUFmLENBQTJCdmMsR0FBM0IsRUFBZ0M7QUFDckMsUUFBTTZiLElBQUksR0FBR1MseURBQVMsQ0FBQ3RjLEdBQUcsQ0FBQ3FELElBQUwsQ0FBdEI7QUFDQSxNQUFJLENBQUN3WSxJQUFJLENBQUMzVSxJQUFWLEVBQWdCLE1BQU8sR0FBRXFhLDRGQUFJLENBQUMsa0JBQUQsQ0FBcUIsS0FBSUEsNEZBQUksQ0FBQyxhQUFELENBQWdCLEVBQTFEO0FBQ2hCLFFBQU1FLE1BQU0sR0FBRztBQUNiemIsVUFBTSxFQUFFO0FBQ04wYixhQUFPLEVBQUUxaEIsR0FBRyxDQUFDMGhCLE9BQUosSUFBZSxJQUFmLEdBQXNCSCw0RkFBSSxDQUFDLFlBQUQsQ0FBMUIsR0FBMkN2aEIsR0FBRyxDQUFDMGhCLE9BQUosSUFBZTtBQUQ3RDtBQURLLEdBQWY7QUFLQSxNQUFJMWYsR0FBRyxHQUFHd2Ysd0dBQVY7QUFDQSxNQUFJemIsTUFBSjtBQUNBLFFBQU1xYixTQUFTLEdBQUcsTUFBTWhHLFNBQVMsQ0FBQztBQUFFaGIsTUFBRSxFQUFFSixHQUFHLENBQUNJLEVBQVY7QUFBY3liO0FBQWQsR0FBRCxDQUFqQzs7QUFDQSxNQUFJdUYsU0FBSixFQUFlO0FBQ2IsUUFBSXBoQixHQUFHLENBQUMyaEIsS0FBUixFQUFlLE1BQU1KLDRGQUFJLENBQUMsc0JBQUQsQ0FBVjtBQUNmeGIsVUFBTSxHQUFHLDBFQUFLcWIsU0FBUixDQUFOO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsS0FBQztBQUFFcmI7QUFBRixRQUFhNmIseURBQVMsRUFBdkI7QUFDQTVmLE9BQUcsR0FBRzZmLHFHQUFOO0FBQ0FKLFVBQU0sQ0FBQ0UsS0FBUCxHQUFlLElBQWY7QUFDQUYsVUFBTSxDQUFDemIsTUFBUCxDQUFjMGIsT0FBZCxHQUF3QkgsNEZBQUksQ0FBQyxjQUFELENBQTVCO0FBQ0Q7O0FBQ0R4YixRQUFNLENBQUN5QyxNQUFQLDZFQUNLekMsTUFBTSxDQUFDeUMsTUFEWixNQUVLeEksR0FBRyxDQUFDd0ksTUFGVDtBQUdFakMsV0FBTyxFQUFFLENBSFgsQ0FHYzs7QUFIZDtBQUtBUixRQUFNLENBQUN6QyxNQUFQLDZFQUNLeUMsTUFBTSxDQUFDekMsTUFEWixNQUVLdEQsR0FBRyxDQUFDc0QsTUFGVDtBQUlBeUMsUUFBTSxDQUFDeUUsS0FBUCw2RUFDS3pFLE1BQU0sQ0FBQ3lFLEtBRFo7QUFFRTJGLGdCQUFZLEVBQUU1TixJQUFJLENBQUNDLEdBQUwsRUFGaEI7QUFHRXFJLGVBQVcsRUFBRXRJLElBQUksQ0FBQ0MsR0FBTDtBQUhmLEtBSUt4QyxHQUFHLENBQUN3SyxLQUpUO0FBTUF6RSxRQUFNLENBQUM4VixJQUFQLEdBQWNBLElBQWQ7O0FBQ0EsTUFBSSxDQUFDQSxJQUFJLENBQUNpRyxXQUFOLElBQXFCLENBQUMvYixNQUFNLENBQUN6QyxNQUFQLENBQWN3ZSxXQUFwQyxJQUFtRHJCLGdHQUFRLENBQUN6Z0IsR0FBRyxDQUFDK2hCLElBQUwsQ0FBL0QsRUFBMkU7QUFDekVoYyxVQUFNLENBQUN6QyxNQUFQLENBQWN3ZSxXQUFkLEdBQTRCOWhCLEdBQUcsQ0FBQytoQixJQUFoQztBQUNEOztBQUNELE1BQUl0QixnR0FBUSxDQUFDemdCLEdBQUcsQ0FBQ0YsR0FBTCxDQUFaLEVBQXVCaUcsTUFBTSxDQUFDekMsTUFBUCxDQUFjMGUsY0FBZCxHQUErQmhpQixHQUFHLENBQUNGLEdBQW5DO0FBQ3ZCLE1BQUlFLEdBQUcsQ0FBQ2tRLFFBQVIsRUFBa0JuSyxNQUFNLENBQUN5RSxLQUFQLENBQWEwRixRQUFiLEdBQXdCLENBQUNsUSxHQUFHLENBQUNrUSxRQUE3QjtBQUNsQnlQLGNBQVksQ0FBQzVaLE1BQUQsRUFBUy9GLEdBQUcsQ0FBQ0YsR0FBYixDQUFaO0FBQ0EsUUFBTXFoQixVQUFVLENBQUNwYixNQUFELEVBQVMvRixHQUFHLENBQUNxRCxJQUFiLENBQWhCO0FBQ0E0ZSxnQkFBYyxDQUFDbGMsTUFBRCxFQUFTL0YsR0FBVCxDQUFkO0FBQ0FYLFFBQU0sQ0FBQ0MsTUFBUCxDQUFjbWlCLE1BQU0sQ0FBQ3piLE1BQXJCLEVBQTZCRCxNQUE3QixFQUFxQy9GLEdBQUcsQ0FBQ2dHLE1BQXpDO0FBQ0F5YixRQUFNLENBQUNqZSxLQUFQLEdBQWU7QUFBRXBELE1BQUUsRUFBRTJGLE1BQU0sQ0FBQ3lFLEtBQVAsQ0FBYXBLO0FBQW5CLEdBQWY7QUFDQWhCLGlHQUFPLENBQUM0QyxHQUFELEVBQU15ZixNQUFOLENBQVA7QUFDQVMsd0RBQVksQ0FBQ0MsSUFBYixDQUFrQixlQUFsQixFQUFtQ1YsTUFBbkM7QUFDQSxTQUFPQSxNQUFQO0FBQ0Q7QUFFRDs7QUFDQSxTQUFTOUIsWUFBVCxDQUFzQjVaLE1BQXRCLEVBQThCeUYsSUFBOUIsRUFBb0M7QUFDbEMsUUFBTTtBQUFFcVE7QUFBRixNQUFXOVYsTUFBakI7QUFDQSxRQUFNcWMsT0FBTyxHQUFHNVcsSUFBSSxJQUFJekYsTUFBTSxDQUFDekMsTUFBUCxDQUFjMGUsY0FBdEM7QUFDQSxRQUFNdkUsT0FBTyxHQUFHMkUsT0FBTyxHQUFHLENBQ3hCLEdBQUd2RyxJQUFJLENBQUMrQixPQURnQixFQUV4QixHQUFHdmUsTUFBTSxDQUFDaWMsTUFBUCxDQUFjTyxJQUFJLENBQUNnQyxTQUFuQixDQUZxQixFQUd4QmhDLElBQUksQ0FBQ2lDLElBSG1CLEVBSXhCaE8sTUFKd0IsQ0FJakIsQ0FBQ25HLEdBQUQsRUFBTTVCLEdBQU4sS0FBYztBQUNyQixRQUFJQSxHQUFKLEVBQVM7QUFDUCxZQUFNc2EsT0FBTyxHQUFHQyxrR0FBVSxDQUFDdmEsR0FBRCxFQUFNcWEsT0FBTixDQUExQjtBQUNBLFVBQUlDLE9BQU8sS0FBS3RhLEdBQWhCLEVBQXFCNEIsR0FBRyxDQUFDNUIsR0FBRCxDQUFILEdBQVdzYSxPQUFYO0FBQ3RCOztBQUNELFdBQU8xWSxHQUFQO0FBQ0QsR0FWeUIsRUFVdkIsRUFWdUIsQ0FBSCxHQVVkLEVBVlQ7QUFXQTVELFFBQU0sQ0FBQ3pDLE1BQVAsQ0FBY21hLE9BQWQsR0FBd0JBLE9BQXhCO0FBQ0EsU0FBT0EsT0FBUDtBQUNEO0FBRUQ7OztBQUNPLGVBQWV3RSxjQUFmLENBQThCbGMsTUFBOUIsRUFBc0N3YyxhQUF0QyxFQUFxREMsVUFBckQsRUFBaUU7QUFDdEUsUUFBTTtBQUFFbGYsVUFBTSxFQUFFO0FBQUVtYTtBQUFGLEtBQVY7QUFBdUI1QjtBQUF2QixNQUFnQzlWLE1BQXRDOztBQUNBLFFBQU0wYyxNQUFNLEdBQUcsQ0FBQzNpQixHQUFELEVBQU02TixJQUFOLEVBQVkrVSxTQUFaLEtBQTBCO0FBQUE7O0FBQ3ZDNWlCLE9BQUcsR0FBRzJkLE9BQU8sQ0FBQzNkLEdBQUQsQ0FBUCxJQUFnQkEsR0FBdEI7QUFDQSxVQUFNNmlCLFFBQVEsR0FBR0osYUFBSCwyQ0FBR0EsYUFBYSxDQUFHNVUsSUFBSCxDQUFoQixxQkFBRyxvQkFBd0I3TixHQUF4QixDQUFqQjtBQUNBLFdBQU82aUIsUUFBUSxJQUFJLElBQVosSUFBb0IsQ0FBQ0QsU0FBckIsR0FDSDlILCtGQUFPLENBQUNqTixJQUFELENBQVAsQ0FBY3ZGLEdBQWQsQ0FBa0J0SSxHQUFsQixFQUF1QjZpQixRQUF2QixLQUFvQyxJQURqQyxHQUVIL0gsK0ZBQU8sQ0FBQ2pOLElBQUQsQ0FBUCxDQUFjaVYsS0FBZCxDQUFvQjlpQixHQUFwQixFQUF5QjBpQixVQUF6QixFQUFxQ0UsU0FBckMsRUFBZ0R4ZSxLQUFoRCxDQUFzRDJELEdBQUcsSUFBSUEsR0FBN0QsQ0FGSjtBQUdELEdBTkQ7O0FBT0EsUUFBTXNKLE1BQU0sR0FBRyxNQUFNL00sT0FBTyxDQUFDd0ssR0FBUixDQUFZLENBQy9CLEdBQUdpTixJQUFJLENBQUMrQixPQUFMLENBQWFqVSxHQUFiLENBQWlCN0osR0FBRyxJQUFJMmlCLE1BQU0sQ0FBQzNpQixHQUFELEVBQU0sU0FBTixDQUE5QixDQUQ0QixFQUUvQixHQUFHVCxNQUFNLENBQUNpYyxNQUFQLENBQWNPLElBQUksQ0FBQ2dDLFNBQW5CLEVBQThCbFUsR0FBOUIsQ0FBa0M3SixHQUFHLElBQUkyaUIsTUFBTSxDQUFDM2lCLEdBQUQsRUFBTSxPQUFOLENBQS9DLENBRjRCLEVBRy9CMmdCLGdHQUFRLENBQUM1RSxJQUFJLENBQUNpQyxJQUFOLENBQVIsSUFBdUIyRSxNQUFNLENBQUM1RyxJQUFJLENBQUNpQyxJQUFOLEVBQVksT0FBWixFQUFxQitFLGFBQXJCLENBSEUsQ0FBWixDQUFyQjs7QUFLQSxNQUFJLEVBQUNOLGFBQUQsb0JBQUNBLGFBQWEsQ0FBRU8sZ0JBQWhCLENBQUosRUFBc0M7QUFDcEMsVUFBTXhWLEtBQUssR0FBRyxTQUE2QnlWLHdGQUE3QixFQUFBNVIsTUFBTSxDQUFDeEgsR0FBUCxDQUFXcVosZUFBWCxHQUFzQyxJQUF0QyxDQUFkOztBQUNBLFFBQUkxVixLQUFKLEVBQVc7QUFDVCxZQUFNb1UsT0FBTyxHQUFHSCw0RkFBSSxDQUFDLDBCQUFELENBQXBCO0FBQ0FuaUIscUdBQU8sQ0FBQ29pQix3R0FBRCxFQUFvQjtBQUN6QnhiLGNBQU0sRUFBRTtBQUFFc0gsZUFBRjtBQUFTb1U7QUFBVCxTQURpQjtBQUV6QmxlLGFBQUssRUFBRTtBQUFFcEQsWUFBRSxFQUFFMkYsTUFBTSxDQUFDeUUsS0FBUCxDQUFhcEs7QUFBbkI7QUFGa0IsT0FBcEIsQ0FBUDtBQUlBLGFBQVEsR0FBRXNoQixPQUFRLEtBQUlwVSxLQUFNLEVBQTVCO0FBQ0Q7QUFDRjtBQUNGO0FBRUQ7O0FBQ0EsU0FBU3VWLGFBQVQsQ0FBdUIvaUIsR0FBdkIsRUFBNEJtakIsR0FBNUIsRUFBaUN0VixJQUFqQyxFQUF1QztBQUNyQyxTQUFPLElBQUl2SixPQUFKLENBQVksQ0FBQzJDLE9BQUQsRUFBVTFDLE1BQVYsS0FBcUI7QUFDdEMsVUFBTTZlLE9BQU8sR0FBRzVLLEdBQUcsQ0FBQzZLLGVBQUosQ0FBb0IsSUFBSUMsSUFBSixDQUFTLENBQUNILEdBQUQsQ0FBVCxFQUFnQjtBQUFFdFY7QUFBRixLQUFoQixDQUFwQixDQUFoQjs7QUFDQSxVQUFNMFYsTUFBTSxHQUFJbGYsQ0FBRCxJQUFPO0FBQ3BCbVUsU0FBRyxDQUFDZ0wsZUFBSixDQUFvQkosT0FBcEI7QUFDQSxVQUFJL2UsQ0FBQyxDQUFDd0osSUFBRixLQUFXLE1BQWYsRUFBdUI1RyxPQUFPLEdBQTlCLEtBQ0sxQyxNQUFNLENBQUUsZ0JBQWV2RSxHQUFJLEVBQXJCLENBQU47QUFDTixLQUpEOztBQUtBLFVBQU15akIsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBZDtBQUNBRCxTQUFLLENBQUNFLE1BQU4sR0FBZUosTUFBZjtBQUNBRSxTQUFLLENBQUNHLE9BQU4sR0FBZ0JMLE1BQWhCO0FBQ0FFLFNBQUssQ0FBQ3ZqQixHQUFOLEdBQVlrakIsT0FBWjtBQUNELEdBWE0sQ0FBUDtBQVlEOztBQUVELFNBQVNGLGVBQVQsQ0FBeUI3ZSxDQUF6QixFQUE0QjtBQUMxQixTQUFPQSxDQUFDLElBQUksU0FBd0M0ZSx3RkFBeEMsR0FBQzVlLENBQUMsQ0FBQ2lQLE1BQUYsSUFBYSxPQUFNalAsQ0FBQyxDQUFDaVAsTUFBTyxFQUE3QixFQUFnQ2pQLENBQUMsQ0FBQ3JFLEdBQWxDLEdBQWlELEdBQWpELENBQUwsSUFBOERxRSxDQUFyRTtBQUNEOztBQUVELElBQUl3ZixVQUFKO0FBQ0E7Ozs7OztBQUlPLGVBQWVqSCxNQUFmLENBQXNCaGQsSUFBdEIsRUFBNEI7QUFDakMsTUFBSWlrQixVQUFKLEVBQWdCLE9BQU9BLFVBQVA7QUFDaEIsTUFBSUMsUUFBUSxHQUFHLENBQWY7QUFDQSxNQUFJQyxXQUFKO0FBQ0FGLFlBQVUsR0FBRyxJQUFJdmYsT0FBSixDQUFZMGYsQ0FBQyxJQUFJO0FBQUVELGVBQVcsR0FBR0MsQ0FBZDtBQUFrQixHQUFyQyxDQUFiO0FBQ0EsUUFBTXJDLE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBTXNDLE9BQU8sR0FBRyxFQUFoQjtBQUNBLFFBQU1DLFlBQVksR0FBRyxFQUFyQjtBQUNBLFFBQU1DLFNBQVMsR0FBRyxFQUFsQjtBQUNBLFFBQU1DLFNBQVMsR0FBRyxFQUFsQjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxFQUFwQjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxDQUNmLENBQUN6SiwrRkFBTyxDQUFDdlMsS0FBVCxFQUFnQjRiLFNBQWhCLENBRGUsRUFFZixDQUFDckosK0ZBQU8sQ0FBQzNYLEtBQVQsRUFBZ0JpaEIsU0FBaEIsQ0FGZSxFQUdmLENBQUN0SiwrRkFBTyxDQUFDZ0QsT0FBVCxFQUFrQnVHLFdBQWxCLENBSGUsRUFJZixDQUFDdkosK0ZBQU8sQ0FBQ3ZYLElBQVQsRUFBZStnQixRQUFmLENBSmUsQ0FBakI7QUFNQSxNQUFJLENBQUMxa0IsSUFBTCxFQUFXQSxJQUFJLEdBQUcsTUFBTWtFLE9BQU8sQ0FBQ2dYLE9BQVIsQ0FBZ0JySyxLQUFoQixDQUFzQnBLLEdBQXRCLEVBQWI7QUFDWCxXQUFNbWUsaUdBQU4sRUFBQTVrQixJQUFJLEVBQWNxSSxHQUFELElBQVM7QUFDeEJzYyxZQUFRLENBQUN2RSxJQUFULENBQWMsQ0FBQyxDQUFDeUUsUUFBRCxFQUFXNWEsR0FBWCxDQUFELEtBQXFCO0FBQ2pDLFlBQU07QUFBRTRFO0FBQUYsVUFBYWdXLFFBQW5COztBQUNBLFVBQUl4YyxHQUFHLENBQUN1RyxVQUFKLENBQWVDLE1BQWYsQ0FBSixFQUE0QjtBQUMxQjtBQUNBNUUsV0FBRyxDQUFDNUIsR0FBRyxDQUFDTCxLQUFKLENBQVU2RyxNQUFNLENBQUN6TixNQUFqQixDQUFELENBQUgsR0FBZ0MsQ0FBQyxDQUFqQztBQUNBLGVBQU8sSUFBUDtBQUNEOztBQUNELGFBQU8sS0FBUDtBQUNELEtBUkQ7QUFTRCxHQVZHLENBQUo7O0FBV0EsUUFBTTBqQixLQUFLLEdBQUcsQ0FBQ3haLEdBQUQsRUFBTWpELEdBQU4sRUFBVzBjLFFBQVgsS0FBd0I7QUFDcEMsUUFBSXpaLEdBQUcsQ0FBQ2pELEdBQUQsQ0FBSCxHQUFXLENBQWYsRUFBa0I7QUFDaEJpRCxTQUFHLENBQUNqRCxHQUFELENBQUgsR0FBVyxDQUFYO0FBQ0QsS0FGRCxNQUVPLElBQUksQ0FBQ2lELEdBQUcsQ0FBQ2pELEdBQUQsQ0FBUixFQUFlO0FBQ3BCaUQsU0FBRyxDQUFDakQsR0FBRCxDQUFILEdBQVcsSUFBSTBjLFFBQWY7QUFDRDtBQUNGLEdBTkQ7O0FBT0E5SixPQUFLLENBQUMxSixPQUFOLENBQWMzRixPQUFkLENBQXVCdkYsTUFBRCxJQUFZO0FBQ2hDLFVBQU07QUFBRTNGO0FBQUYsUUFBUzJGLE1BQU0sQ0FBQ3lFLEtBQXRCO0FBQ0FnYSxTQUFLLENBQUNKLFFBQUQsRUFBV2hrQixFQUFYLEVBQWVBLEVBQWYsQ0FBTDtBQUNBb2tCLFNBQUssQ0FBQ1AsU0FBRCxFQUFZN2pCLEVBQVosRUFBZ0JBLEVBQWhCLENBQUw7QUFDQSxRQUFJLENBQUMyRixNQUFNLENBQUN6QyxNQUFQLENBQWNtYSxPQUFuQixFQUE0QmtDLFlBQVksQ0FBQzVaLE1BQUQsQ0FBWjtBQUM1QixVQUFNO0FBQUUwWDtBQUFGLFFBQWMxWCxNQUFNLENBQUN6QyxNQUEzQjs7QUFDQXlDLFVBQU0sQ0FBQzhWLElBQVAsQ0FBWStCLE9BQVosQ0FBb0J0UyxPQUFwQixDQUE2QnhMLEdBQUQsSUFBUztBQUNuQzBrQixXQUFLLENBQUNMLFdBQUQsRUFBYzFHLE9BQU8sQ0FBQzNkLEdBQUQsQ0FBUCxJQUFnQkEsR0FBOUIsRUFBbUNNLEVBQW5DLENBQUw7QUFDRCxLQUZEOztBQUdBLGFBQXVCc2tCLG1HQUF2QixFQUFBM2UsTUFBTSxDQUFDOFYsSUFBUCxDQUFZZ0MsU0FBWixFQUFxQy9kLEdBQUQsSUFBUztBQUMzQzBrQixXQUFLLENBQUNOLFNBQUQsRUFBWXpHLE9BQU8sQ0FBQzNkLEdBQUQsQ0FBUCxJQUFnQkEsR0FBNUIsRUFBaUNNLEVBQWpDLENBQUw7QUFDRCxLQUZEO0FBR0EsVUFBTTtBQUFFMGQ7QUFBRixRQUFXL1gsTUFBTSxDQUFDOFYsSUFBeEI7O0FBQ0EsUUFBSTRFLGdHQUFRLENBQUMzQyxJQUFELENBQVosRUFBb0I7QUFDbEIsWUFBTXVFLE9BQU8sR0FBRzVFLE9BQU8sQ0FBQ0ssSUFBRCxDQUFQLElBQWlCQSxJQUFqQztBQUNBMEcsV0FBSyxDQUFDTixTQUFELEVBQVk3QixPQUFaLEVBQXFCamlCLEVBQXJCLENBQUw7QUFDRDtBQUNGLEdBakJEO0FBa0JBaWtCLFVBQVEsQ0FBQy9ZLE9BQVQsQ0FBaUIsQ0FBQyxDQUFDaVosUUFBRCxFQUFXNWEsR0FBWCxDQUFELEtBQXFCO0FBQ3BDLGFBQUtmLG1HQUFMLEVBQUFlLEdBQUcsRUFBZSxDQUFDLENBQUM1QixHQUFELEVBQU1NLEtBQU4sQ0FBRCxLQUFrQjtBQUNsQyxVQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ2I7QUFDQTJiLG9CQUFZLENBQUMxVCxJQUFiLENBQWtCaVUsUUFBUSxDQUFDbEUsTUFBVCxDQUFnQnRZLEdBQWhCLENBQWxCO0FBQ0E2YixnQkFBUSxJQUFJLENBQVo7QUFDRCxPQUpELE1BSU8sSUFBSXZiLEtBQUssSUFBSSxDQUFULElBQWNrYyxRQUFRLENBQUMzQixLQUEzQixFQUFrQztBQUN2QztBQUNBb0Isb0JBQVksQ0FBQzFULElBQWIsQ0FBa0JzSywrRkFBTyxDQUFDbUQsR0FBUixDQUFZc0MsTUFBWixDQUFtQnRZLEdBQW5CLENBQWxCO0FBQ0FnYyxlQUFPLENBQUN6VCxJQUFSLENBQWFpVSxRQUFRLENBQUMzQixLQUFULENBQWU3YSxHQUFmLEVBQW9CN0QsS0FBcEIsQ0FBMEIyRCxHQUFHLElBQUssR0FDN0M4YyxxR0FBYSxDQUFDM0ksYUFBYSxDQUFDM1QsS0FBSyxHQUFHLENBQVQsQ0FBZCxDQUNkLEtBQ0MyYSxlQUFlLENBQUNuYixHQUFELENBQ2hCLEVBSlksQ0FBYjtBQUtBK2IsZ0JBQVEsSUFBSSxDQUFaO0FBQ0Q7QUFDRixLQWZFLENBQUg7QUFnQkQsR0FqQkQ7O0FBa0JBLE1BQUlBLFFBQUosRUFBYztBQUNaLFVBQU1oSiwrRkFBTyxDQUFDcFAsSUFBUixDQUFhd1MsV0FBYixDQUF5QmdHLFlBQXpCLENBQU4sQ0FEWSxDQUNrQzs7QUFDOUN2QyxVQUFNLENBQUN0USxNQUFQLEdBQWdCLENBQUMsTUFBTS9NLE9BQU8sQ0FBQ3dLLEdBQVIsQ0FBWW1WLE9BQVosQ0FBUCxFQUE2QjNTLE1BQTdCLENBQW9DQyxPQUFwQyxDQUFoQjtBQUNEOztBQUNEc1MsWUFBVSxHQUFHLElBQWI7QUFDQWxDLFFBQU0sQ0FBQ21ELEtBQVAsR0FBZWhCLFFBQWY7QUFDQUMsYUFBVyxDQUFDcEMsTUFBRCxDQUFYO0FBQ0EsU0FBT0EsTUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7QUFNQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3h1QkE7QUFBQTtBQUFlLFNBQVMzVSxlQUFULEdBQTJCO0FBQ3hDLFFBQU1ELE1BQU0sR0FBRyxFQUFmO0FBQ0EsU0FBTztBQUFFZ1ksTUFBRjtBQUFNQyxPQUFOO0FBQVdDO0FBQVgsR0FBUDs7QUFFQSxXQUFTRixFQUFULENBQVlsWCxJQUFaLEVBQWtCcVgsSUFBbEIsRUFBd0I7QUFDdEIsUUFBSS9lLElBQUksR0FBRzRHLE1BQU0sQ0FBQ2MsSUFBRCxDQUFqQjs7QUFDQSxRQUFJLENBQUMxSCxJQUFMLEVBQVc7QUFDVEEsVUFBSSxHQUFHLEVBQVA7QUFDQTRHLFlBQU0sQ0FBQ2MsSUFBRCxDQUFOLEdBQWUxSCxJQUFmO0FBQ0Q7O0FBQ0RBLFFBQUksQ0FBQ3FLLElBQUwsQ0FBVTBVLElBQVY7QUFDRDs7QUFDRCxXQUFTRixHQUFULENBQWFuWCxJQUFiLEVBQW1CcVgsSUFBbkIsRUFBeUI7QUFDdkIsVUFBTS9lLElBQUksR0FBRzRHLE1BQU0sQ0FBQ2MsSUFBRCxDQUFuQjs7QUFDQSxRQUFJMUgsSUFBSixFQUFVO0FBQ1IsWUFBTXNCLENBQUMsR0FBR3RCLElBQUksQ0FBQ3VCLE9BQUwsQ0FBYXdkLElBQWIsQ0FBVjtBQUNBLFVBQUl6ZCxDQUFDLElBQUksQ0FBVCxFQUFZdEIsSUFBSSxDQUFDaVcsTUFBTCxDQUFZM1UsQ0FBWixFQUFlLENBQWY7QUFDYjtBQUNGOztBQUNELFdBQVN3ZCxJQUFULENBQWNwWCxJQUFkLEVBQW9Cak8sSUFBcEIsRUFBMEI7QUFDeEIsVUFBTXVHLElBQUksR0FBRzRHLE1BQU0sQ0FBQ2MsSUFBRCxDQUFuQjs7QUFDQSxRQUFJMUgsSUFBSixFQUFVO0FBQ1JBLFVBQUksQ0FBQ3FGLE9BQUwsQ0FBYzBaLElBQUQsSUFBVTtBQUNyQkEsWUFBSSxDQUFDdGxCLElBQUQsRUFBT2lPLElBQVAsQ0FBSjtBQUNELE9BRkQ7QUFHRDtBQUNGO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDM0JEO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQXNYLG9EQUFjLENBQUMzVSxJQUFmLENBQW9CLE1BQU07QUFDeEIxTSxTQUFPLENBQUNyRSxRQUFSLENBQWlCMmxCLFNBQWpCLENBQTJCbmhCLFdBQTNCLENBQXdDL0IsR0FBRCxJQUFTO0FBQzlDLFFBQUlBLEdBQUcsS0FBSyxXQUFaLEVBQXlCO0FBQ3ZCekMsdURBQVEsQ0FBQzRsQixVQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTUMsS0FBSyxHQUFHcGpCLEdBQUcsS0FBSyxVQUFSLEdBQXNCLElBQUdBLEdBQUksRUFBN0IsR0FBaUMsRUFBL0M7QUFDQXpDLHVEQUFRLENBQUM4bEIsT0FBVCxDQUFpQjtBQUFFdmxCLFdBQUcsRUFBRyxzQkFBcUJzbEIsS0FBTTtBQUFuQyxPQUFqQjtBQUNEO0FBQ0YsR0FQRDtBQVFELENBVEQsRTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxNQUFNRSxjQUFjLEdBQUcsSUFBdkI7QUFFQWptQixNQUFNLENBQUNDLE1BQVAsQ0FBY0MsaURBQWQsRUFBd0I7QUFDdEIsUUFBTWdtQixZQUFOLENBQW1CemxCLEdBQW5CLEVBQXdCO0FBQ3RCLFVBQU1pSSxHQUFHLEdBQUksZ0JBQWVqSSxHQUFJLEVBQWhDO0FBQ0EsV0FBT21ELDhDQUFLLENBQUNrRCxHQUFOLENBQVU0QixHQUFWLEtBQ0Y5RSw4Q0FBSyxDQUFDME4sR0FBTixDQUFVNUksR0FBVixFQUFleWQsYUFBYSxDQUFDMWxCLEdBQUQsRUFBTTtBQUFFMmxCLFlBQU0sRUFBRTtBQUFWLEtBQU4sQ0FBYixDQUFxQ3ZoQixLQUFyQyxDQUEyQ29JLG9GQUEzQyxDQUFmLEVBQWlFZ1osY0FBakUsQ0FETDtBQUVELEdBTHFCOztBQU10QkksVUFBUSxFQUFFQztBQU5ZLENBQXhCLEUsQ0FTQTs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsQ0FBQyxNQUFNO0FBQzNCLFFBQU07QUFBRWhoQjtBQUFGLE1BQWFsQixNQUFuQixDQUQyQixDQUUzQjs7QUFDQSxRQUFNaUIsR0FBRyxHQUFHQyxNQUFNLENBQUNnaEIsYUFBbkIsQ0FIMkIsQ0FJM0I7O0FBQ0EsUUFBTUMsWUFBWSxHQUFHLE1BQU1qaEIsTUFBTSxDQUFDZixPQUFQLENBQWVpaUIsU0FBMUMsQ0FMMkIsQ0FNM0I7OztBQUNBLFFBQU1DLFVBQVUsR0FBR0MsRUFBRSxJQUFJLENBQUMsR0FBRy9oQixJQUFKLEtBQWE7QUFDcEMsUUFBSTtBQUNGLGVBQUsraEIsRUFBTCxFQUFBcmhCLEdBQUcsRUFBSyxHQUFHVixJQUFSLEVBQWM0aEIsWUFBZCxDQUFIO0FBQ0QsS0FGRCxDQUVFLE9BQU8xaEIsQ0FBUCxFQUFVO0FBQ1YsZUFBSzZoQixFQUFMLEVBQUFyaEIsR0FBRyxFQUFLLEdBQUdWLElBQVIsQ0FBSDtBQUNEO0FBQ0YsR0FORDs7QUFPQSxTQUFPd0cseUdBQVUsQ0FBQzlGLEdBQUQsRUFBTSxDQUNyQixTQURxQixFQUVyQixjQUZxQixFQUdyQix5QkFIcUIsRUFJckIsVUFKcUIsQ0FBTixFQUtkcWhCLEVBQUUsSUFBS0EsRUFBRSxHQUFHRCxVQUFVLENBQUNDLEVBQUQsQ0FBYixHQUFvQjFaLG9GQUxmLENBQWpCO0FBTUQsQ0FwQnFCLEdBQXRCOztBQXNCQSxNQUFNMlosTUFBTSxHQUFHLEVBQWY7QUFDQSxNQUFNQyxjQUFjLEdBQUcsV0FBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsV0FBdkI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsWUFBeEI7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyxtQkFBaEM7QUFDQTs7QUFDQSxJQUFJQyxTQUFKO0FBQ0E7O0FBQ0EsSUFBSUMsU0FBSjtBQUNBOztBQUNBLElBQUlDLFVBQUo7QUFDQTs7QUFDQSxJQUFJQyxpQkFBSjtBQUNBOztBQUNBLElBQUlDLGdCQUFKO0FBQ0E7O0FBQ0EsSUFBSUMsa0JBQUosQyxDQUVBO0FBQ0E7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLENBQUM1aUIsVUFBRCxJQUFlLEVBQWpDO0FBRUFqRiw0REFBVyxDQUFFQyxPQUFELElBQWE7QUFDdkIsTUFBSThKLENBQUo7QUFDQSxRQUFNK2QsSUFBSSxHQUFHLEVBQWI7O0FBQ0EsTUFBSSxDQUFDL2QsQ0FBQyxHQUFHOUosT0FBTyxDQUFDa25CLGNBQUQsQ0FBWixLQUFpQyxJQUFyQyxFQUEyQztBQUN6Q0ksYUFBUyxHQUFHeGQsQ0FBWjtBQUNBZ2UsV0FBTyxHQUZrQyxDQUU5Qjs7QUFDWEQsUUFBSSxDQUFDdlcsSUFBTCxDQUFVd1csT0FBVixFQUh5QyxDQUdyQjtBQUNyQjs7QUFDRCxNQUFJLENBQUNoZSxDQUFDLEdBQUc5SixPQUFPLENBQUNtbkIsY0FBRCxDQUFaLEtBQWlDLElBQXJDLEVBQTJDO0FBQ3pDSSxhQUFTLEdBQUd6ZCxDQUFaO0FBQ0ErZCxRQUFJLENBQUN2VyxJQUFMLENBQVV5VyxXQUFWO0FBQ0Q7O0FBQ0QsTUFBSSxDQUFDamUsQ0FBQyxHQUFHOUosT0FBTyxDQUFDb25CLGVBQUQsQ0FBWixNQUFtQ0ksVUFBVSxHQUFHMWQsQ0FBaEQsS0FDRCxDQUFDQSxDQUFDLEdBQUc5SixPQUFPLENBQUNxbkIsdUJBQUQsQ0FBWixNQUEyQ0ksaUJBQWlCLEdBQUczZCxDQUEvRCxDQURILEVBQ3NFO0FBQ3BFK2QsUUFBSSxDQUFDdlcsSUFBTCxDQUFVMFcsZ0JBQVY7QUFDRDs7QUFDRCxNQUFJLGVBQWVob0IsT0FBbkIsRUFBNEI7QUFDMUI2bkIsUUFBSSxDQUFDdlcsSUFBTCxDQUFVMlcsV0FBVjtBQUNEOztBQUNELE1BQUlKLElBQUksQ0FBQy9sQixNQUFULEVBQWlCO0FBQ2ZvbUIsK0RBQVUsQ0FBQ2huQixHQUFHLElBQUkybUIsSUFBSSxDQUFDdmIsT0FBTCxDQUFhMGEsRUFBRSxJQUFJQSxFQUFFLENBQUM5bEIsR0FBRCxDQUFyQixDQUFSLENBQVY7QUFDRDtBQUNGLENBdEJVLENBQVg7QUF3QkEra0Isb0RBQWMsQ0FBQzNVLElBQWYsQ0FBb0IsTUFBTTtBQUN4QmdXLFdBQVMsR0FBR2xrQiwwREFBUyxDQUFDOGpCLGNBQUQsQ0FBckI7QUFDQUssV0FBUyxHQUFHbmtCLDBEQUFTLENBQUMrakIsY0FBRCxDQUFyQjtBQUNBSyxZQUFVLEdBQUdwa0IsMERBQVMsQ0FBQ2drQixlQUFELENBQXRCO0FBQ0FLLG1CQUFpQixHQUFHcmtCLDBEQUFTLENBQUNpa0IsdUJBQUQsQ0FBN0I7QUFDQUssa0JBQWdCLEdBQUduRiw0RkFBSSxDQUFDLDBCQUFELENBQXZCO0FBQ0FvRixvQkFBa0IsR0FBR3BGLDRGQUFJLENBQUMsNEJBQUQsQ0FBekI7QUFDQTJGLDZEQUFVLENBQUNELFdBQUQsQ0FBVjtBQUNBLE1BQUksQ0FBQ1gsU0FBTCxFQUFnQlEsT0FBTyxHQVJDLENBUUc7QUFDNUIsQ0FURDtBQVdBbGpCLE9BQU8sQ0FBQ3dPLElBQVIsQ0FBYStVLFNBQWIsQ0FBdUJwakIsV0FBdkIsQ0FBb0MzRCxFQUFELElBQVE7QUFDekMsU0FBTzZsQixNQUFNLENBQUM3bEIsRUFBRCxDQUFiO0FBQ0QsQ0FGRDtBQUlBd0QsT0FBTyxDQUFDd08sSUFBUixDQUFhZ1YsU0FBYixDQUF1QnJqQixXQUF2QixDQUFtQyxDQUFDNUQsS0FBRCxFQUFRcUUsSUFBUixFQUFjdEUsR0FBZCxLQUFzQjtBQUN2RCxRQUFNO0FBQUVKO0FBQUYsTUFBVTBFLElBQWhCOztBQUNBLE1BQUlBLElBQUksQ0FBQzRPLE1BQUwsS0FBZ0IsU0FBaEIsQ0FDQTtBQURBLEtBRUc1TyxJQUFJLENBQUM2aUIsVUFBTCxJQUFtQm5uQixHQUFHLENBQUNKLEdBQUosQ0FBUXdPLFVBQVIsQ0FBbUIsUUFBbkIsQ0FGMUIsRUFFd0Q7QUFDdEQyWSxlQUFXLENBQUMvbUIsR0FBRCxFQUFNSixHQUFOLENBQVg7QUFDRDtBQUNGLENBUEQ7O0FBU0EsU0FBUzZsQixRQUFULENBQWtCbG1CLEdBQWxCLEVBQXVCO0FBQUVTLEtBQUY7QUFBT0Q7QUFBUCxDQUF2QixFQUF5QztBQUN2QyxRQUFNRSxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsRUFBbEI7QUFDQSxRQUFNVixJQUFJLEdBQUd1bUIsTUFBTSxDQUFDOWxCLEtBQUQsQ0FBTixJQUFpQixFQUE5Qjs7QUFDQSxNQUFJLENBQUNULElBQUksQ0FBQ3FkLEtBQU4sSUFBZTljLE9BQU8sS0FBSyxDQUEvQixFQUFrQztBQUNoQztBQUNBO0FBQ0FQLFFBQUksQ0FBQytNLEtBQUwsR0FBYSxDQUFiO0FBQ0EvTSxRQUFJLENBQUM0bkIsTUFBTCxHQUFjLENBQWQ7QUFDQTVuQixRQUFJLENBQUNxZCxLQUFMLEdBQWEsRUFBYjtBQUNBa0osVUFBTSxDQUFDOWxCLEtBQUQsQ0FBTixHQUFnQlQsSUFBaEI7QUFDRDs7QUFDREEsTUFBSSxDQUFDK00sS0FBTCxJQUFjaE4sR0FBRyxDQUFDcUIsTUFBbEI7O0FBQ0EsTUFBSXJCLEdBQUosRUFBUztBQUNQQSxPQUFHLENBQUM2TCxPQUFKLENBQWFsTCxFQUFELElBQVE7QUFDbEJWLFVBQUksQ0FBQ3FkLEtBQUwsQ0FBVzNjLEVBQVgsSUFBaUIsQ0FBakI7QUFDRCxLQUZEO0FBR0FWLFFBQUksQ0FBQzRuQixNQUFMLEdBQWNqb0IsTUFBTSxDQUFDNEksSUFBUCxDQUFZdkksSUFBSSxDQUFDcWQsS0FBakIsRUFBd0JqYyxNQUF0QztBQUNEOztBQUNEa21CLGtCQUFnQixDQUFDOW1CLEdBQUQsRUFBTVIsSUFBTixDQUFoQjtBQUNBcW5CLGFBQVcsQ0FBQzdtQixHQUFELEVBQU1SLElBQU4sQ0FBWDtBQUNEOztBQUVELFNBQVNxbkIsV0FBVCxDQUFxQjdtQixHQUFyQixFQUEwQlIsSUFBSSxHQUFHdW1CLE1BQU0sQ0FBQy9sQixHQUFHLENBQUNFLEVBQUwsQ0FBdkMsRUFBaUQ7QUFDL0MsTUFBSVYsSUFBSixFQUFVO0FBQ1JrbUIsaUJBQWEsQ0FBQzJCLFlBQWQsQ0FBMkI7QUFDekJoUSxVQUFJLEVBQUcsR0FBRTdYLElBQUksQ0FBQzZtQixTQUFELENBQUosSUFBbUIsRUFBRyxFQUROO0FBRXpCcG1CLFdBQUssRUFBRUQsR0FBRyxDQUFDRTtBQUZjLEtBQTNCO0FBSUQ7QUFDRjs7QUFFRCxTQUFTNG1CLGdCQUFULENBQTBCOW1CLEdBQTFCLEVBQStCUixJQUFJLEdBQUd1bUIsTUFBTSxDQUFDL2xCLEdBQUcsQ0FBQ0UsRUFBTCxDQUE1QyxFQUFzRDtBQUNwRCxNQUFJVixJQUFKLEVBQVU7QUFDUmttQixpQkFBYSxDQUFDNEIsdUJBQWQsQ0FBc0M7QUFDcENDLFdBQUssRUFBRS9uQixJQUFJLENBQUNnb0IsT0FBTCxHQUFlakIsaUJBQWYsR0FBbUNELFVBRE47QUFFcENybUIsV0FBSyxFQUFFRCxHQUFHLENBQUNFO0FBRnlCLEtBQXRDO0FBSUQ7QUFDRixDLENBRUQ7QUFDQTs7O0FBQ0EsU0FBUzZtQixXQUFULENBQXFCL21CLEdBQXJCLEVBQTBCSixHQUFHLEdBQUdJLEdBQUcsQ0FBQ2tCLFVBQUosSUFBa0JsQixHQUFHLENBQUNKLEdBQXRELEVBQTJEO0FBQ3pELFFBQU1LLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxFQUFsQjtBQUNBLFFBQU11bkIsVUFBVSxHQUFHQyw0R0FBcUIsQ0FBQ3ZnQixJQUF0QixDQUEyQnZILEdBQTNCLENBQW5CO0FBQ0EsUUFBTStuQixXQUFXLEdBQUdGLFVBQVUsR0FBR3RJLDZEQUFhLENBQUN2ZixHQUFELENBQWhCLEdBQXdCb1osU0FBdEQ7QUFDQSxRQUFNckUsS0FBSyxHQUFHZ1QsV0FBVyxJQUFJbkIsZ0JBQWYsSUFBbUMsQ0FBQ2lCLFVBQUQsSUFBZWhCLGtCQUFsRCxJQUF3RSxFQUF0RixDQUp5RCxDQUt6RDtBQUNBOztBQUNBLE1BQUk5UixLQUFLLElBQUksQ0FBQ29SLE1BQU0sQ0FBQzlsQixLQUFELENBQU4sSUFBaUIsRUFBbEIsRUFBc0J1bkIsT0FBbkMsRUFBNEM7QUFDMUM5QixpQkFBYSxDQUFDa0MsUUFBZCxDQUF1QjtBQUFFalQsV0FBRjtBQUFTMVU7QUFBVCxLQUF2QjtBQUNBLFVBQU1ULElBQUksR0FBR21WLEtBQUssR0FBRztBQUFFNlMsYUFBTyxFQUFFO0FBQVgsS0FBSCxHQUF1QixFQUF6QztBQUNBekIsVUFBTSxDQUFDOWxCLEtBQUQsQ0FBTixHQUFnQlQsSUFBaEI7QUFDQW9uQixXQUFPLENBQUM1bUIsR0FBRCxFQUFNUixJQUFOLENBQVA7QUFDQXFuQixlQUFXLENBQUM3bUIsR0FBRCxFQUFNUixJQUFOLENBQVg7QUFDRDtBQUNGOztBQUVELGVBQWVvbkIsT0FBZixDQUF1QjVtQixHQUFHLEdBQUcsRUFBN0IsRUFBaUNSLElBQUksR0FBRyxFQUF4QyxFQUE0QztBQUMxQztBQUNBLFFBQU1xZSxHQUFHLEdBQUdyZSxJQUFJLENBQUNnb0IsT0FBTCxJQUFnQixHQUFoQixJQUF1QixDQUFDcEIsU0FBRCxJQUFjLEdBQXJDLElBQTRDLEVBQXhEO0FBQ0EsUUFBTXlCLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxPQUFLLE1BQU1DLENBQVgsSUFBZ0IsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLENBQWhCLEVBQWtDO0FBQ2hDLFVBQU0xVSxJQUFJLEdBQUksc0JBQXFCMFUsQ0FBRSxHQUFFakssR0FBSSxNQUEzQztBQUNBLFFBQUlELElBQUksR0FBRzhJLFNBQVMsR0FBR0EsU0FBUyxDQUFDdFQsSUFBRCxDQUFaLEdBQXFCQSxJQUF6Qzs7QUFDQSxRQUFJLENBQUN3SyxJQUFMLEVBQVc7QUFDVEEsVUFBSSxHQUFHLE1BQU0wSCxhQUFhLENBQUNsUyxJQUFELENBQTFCO0FBQ0FzVCxlQUFTLENBQUN0VCxJQUFELENBQVQsR0FBa0J3SyxJQUFsQjtBQUNEOztBQUNEaUssWUFBUSxDQUFDQyxDQUFELENBQVIsR0FBY2xLLElBQWQ7QUFDRDs7QUFDRDhILGVBQWEsQ0FBQ2tCLE9BQWQsQ0FBc0I7QUFDcEIzbUIsU0FBSyxFQUFFRCxHQUFHLENBQUNFLEVBRFM7QUFFcEIsS0FBQ3dtQixTQUFTLEdBQUcsV0FBSCxHQUFpQixNQUEzQixHQUFvQ21CO0FBRmhCLEdBQXRCO0FBSUQ7O0FBRUQsU0FBU3ZDLGFBQVQsQ0FBdUJsUyxJQUF2QixFQUE2QjtBQUFFbVM7QUFBRixJQUFhLEVBQTFDLEVBQThDO0FBQzVDLFNBQU8sSUFBSXJoQixPQUFKLENBQVksQ0FBQzJDLE9BQUQsRUFBVTFDLE1BQVYsS0FBcUI7QUFDdEMsVUFBTTRqQixHQUFHLEdBQUcsSUFBSXpFLEtBQUosRUFBWjtBQUNBeUUsT0FBRyxDQUFDam9CLEdBQUosR0FBVXNULElBQVY7O0FBQ0EyVSxPQUFHLENBQUN4RSxNQUFKLEdBQWEsTUFBTTtBQUNqQixZQUFNO0FBQUV5RSxhQUFGO0FBQVNDO0FBQVQsVUFBb0JGLEdBQTFCOztBQUNBLFVBQUksQ0FBQ0MsS0FBTCxFQUFZO0FBQUU7QUFDWm5oQixlQUFPLENBQUN1TSxJQUFELENBQVA7QUFDQTtBQUNEOztBQUNELFlBQU04VSxNQUFNLEdBQUdwTyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBLFlBQU1vTyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FGLFlBQU0sQ0FBQ0YsS0FBUCxHQUFlQSxLQUFmO0FBQ0FFLFlBQU0sQ0FBQ0QsTUFBUCxHQUFnQkEsTUFBaEI7QUFDQUUsU0FBRyxDQUFDRSxTQUFKLENBQWNOLEdBQWQsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUJDLEtBQXpCLEVBQWdDQyxNQUFoQztBQUNBcGhCLGFBQU8sQ0FBQzBlLE1BQU0sR0FBRzJDLE1BQU0sQ0FBQ0ksU0FBUCxFQUFILEdBQXdCSCxHQUFHLENBQUNJLFlBQUosQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUJQLEtBQXZCLEVBQThCQyxNQUE5QixDQUEvQixDQUFQO0FBQ0QsS0FaRDs7QUFhQUYsT0FBRyxDQUFDdkUsT0FBSixHQUFjcmYsTUFBZDtBQUNELEdBakJNLENBQVA7QUFrQkQsQzs7Ozs7Ozs7Ozs7O0FDbk5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNcWtCLGFBQWEsR0FBRzlrQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0I4a0IsTUFBaEIsQ0FBdUIsR0FBdkIsQ0FBdEI7QUFFQSxNQUFNaE0sYUFBYSxHQUFHLEVBQXRCO0FBQ0EsTUFBTXNJLGNBQWMsR0FBRyxFQUF2QjtBQUVBLGVBQWV4aEIsVUFBZixDQUEwQm1sQixJQUExQixFQUFnQztBQUNyQyxRQUFNQyxHQUFHLEdBQUd0Z0IsSUFBSSxJQUFLLE9BQU9BLElBQVAsS0FBZ0IsVUFBaEIsR0FBNkJBLElBQUksRUFBakMsR0FBc0NBLElBQTNEOztBQUNBLFFBQU1uRSxPQUFPLENBQUN3SyxHQUFSLENBQVkrTixhQUFhLENBQUNoVCxHQUFkLENBQWtCa2YsR0FBbEIsQ0FBWixDQUFOO0FBQ0EsUUFBTUEsR0FBRyxDQUFDRCxJQUFELENBQVQ7QUFDQSxRQUFNeGtCLE9BQU8sQ0FBQ3dLLEdBQVIsQ0FBWXFXLGNBQWMsQ0FBQ3RiLEdBQWYsQ0FBbUJrZixHQUFuQixDQUFaLENBQU47QUFDQWxNLGVBQWEsQ0FBQzdiLE1BQWQsR0FBdUIsQ0FBdkI7QUFDQW1rQixnQkFBYyxDQUFDbmtCLE1BQWYsR0FBd0IsQ0FBeEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTXZCLFFBQVEsR0FBRyxFQUFqQjtBQUVBLFNBQVNxVixNQUFULENBQWdCOUksT0FBaEIsRUFBeUI7QUFDOUJsSSxTQUFPLENBQUNrbEIsYUFBUixDQUFzQi9jLE1BQXRCLENBQTZCRCxPQUFPLENBQUMxTCxFQUFSLElBQWMsZUFBM0MsRUFBNEQ7QUFDMUR1TixRQUFJLEVBQUUsT0FEb0Q7QUFFMURvYixXQUFPLEVBQUVDLDRGQUZpRDtBQUcxRG5VLFNBQUssRUFBRyxHQUFFL0ksT0FBTyxDQUFDK0ksS0FBTSxNQUFLME0sNEZBQUksQ0FBQyxTQUFELENBQVksRUFIYTtBQUkxREcsV0FBTyxFQUFFNVYsT0FBTyxDQUFDdUgsSUFKeUM7QUFLMUQ0VixlQUFXLEVBQUVuZCxPQUFPLENBQUNtZDtBQUxxQyxHQUE1RDtBQU9EO0FBRU0sU0FBU0MsU0FBVCxDQUFtQnhwQixJQUFuQixFQUF5QjtBQUM5QnduQixZQUFVLENBQUVobkIsR0FBRCxJQUFTO0FBQ2xCMEQsV0FBTyxDQUFDd08sSUFBUixDQUFhK1csV0FBYixDQUF5QmpwQixHQUFHLENBQUNFLEVBQTdCLEVBQWlDVixJQUFqQyxFQUNDd0UsS0FERCxDQUNPb0ksb0ZBRFA7QUFFRCxHQUhTLENBQVY7QUFJRDtBQUVNLFNBQVM4YyxtQkFBVCxDQUE2QixHQUFHbmxCLElBQWhDLEVBQXNDO0FBQzNDLFNBQU9MLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnNsQixXQUFoQixDQUE0QixHQUFHbGxCLElBQS9CLEVBQXFDQyxLQUFyQyxDQUEyQ29JLG9GQUEzQyxDQUFQO0FBQ0Q7QUFFTSxlQUFlNGEsVUFBZixDQUEwQnRQLFFBQTFCLEVBQW9DO0FBQ3pDLFFBQU14RixJQUFJLEdBQUcsTUFBTXhPLE9BQU8sQ0FBQ3dPLElBQVIsQ0FBYWlYLEtBQWIsQ0FBbUIsRUFBbkIsQ0FBbkI7QUFDQSxNQUFJOWhCLENBQUMsR0FBRyxDQUFSOztBQUNBLE9BQUssTUFBTXJILEdBQVgsSUFBa0JrUyxJQUFsQixFQUF3QjtBQUN0QndGLFlBQVEsQ0FBQzFYLEdBQUQsQ0FBUjtBQUNBcUgsS0FBQyxJQUFJLENBQUwsQ0FGc0IsQ0FHdEI7QUFDQTtBQUNBOztBQUNBLFFBQUlBLENBQUMsR0FBRyxFQUFKLEtBQVcsQ0FBZixFQUFrQixNQUFNLElBQUluRCxPQUFKLENBQVlyRCxVQUFaLENBQU47QUFDbkI7QUFDRixDOzs7Ozs7Ozs7Ozs7QUNwQ0Q7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU11b0IsT0FBTyxHQUFHLEVBQWhCO0FBRUFqcUIsTUFBTSxDQUFDQyxNQUFQLENBQWNDLGlEQUFkLEVBQXdCO0FBQ3RCO0FBQ0EsUUFBTWdxQixZQUFOLENBQW1CN3BCLElBQW5CLEVBQXlCTSxHQUF6QixFQUE4QndwQixRQUE5QixFQUF3QztBQUN0QyxVQUFNQyxjQUFjLEdBQUcsTUFBTTdsQixPQUFPLENBQUNrbEIsYUFBUixDQUFzQi9jLE1BQXRCLENBQTZCO0FBQ3hENEIsVUFBSSxFQUFFLE9BRGtEO0FBRXhEa0gsV0FBSyxFQUFFblYsSUFBSSxDQUFDbVYsS0FBTCxLQUFlN1EsVUFBVSxHQUFHdWQsNEZBQUksQ0FBQyxTQUFELENBQVAsR0FBcUIsRUFBOUMsQ0FGaUQ7QUFFRTtBQUMxREcsYUFBTyxFQUFFaGlCLElBQUksQ0FBQzZYLElBSDBDO0FBSXhEd1IsYUFBTyxFQUFFcnBCLElBQUksQ0FBQzZqQixLQUFMLElBQWN5Riw0RkFBWUE7QUFKcUIsS0FBN0IsQ0FBN0I7QUFNQU0sV0FBTyxDQUFDRyxjQUFELENBQVAsR0FBMEIsQ0FBQUQsUUFBUSxRQUFSLFlBQUFBLFFBQVEsQ0FBRUUsT0FBVixLQUFxQjFwQixHQUFHLENBQUNFLEdBQUosQ0FBUUUsRUFBdkQ7QUFDQSxXQUFPcXBCLGNBQVA7QUFDRCxHQVhxQjs7QUFZdEJFLG9CQUFrQixDQUFDRixjQUFELEVBQWlCO0FBQ2pDLFdBQU83bEIsT0FBTyxDQUFDa2xCLGFBQVIsQ0FBc0IvZixLQUF0QixDQUE0QjBnQixjQUE1QixDQUFQO0FBQ0Q7O0FBZHFCLENBQXhCO0FBaUJBN2xCLE9BQU8sQ0FBQ2tsQixhQUFSLENBQXNCYyxTQUF0QixDQUFnQzdsQixXQUFoQyxDQUE2QzNELEVBQUQsSUFBUTtBQUNsRCxRQUFNeXBCLFFBQVEsR0FBR1AsT0FBTyxDQUFDbHBCLEVBQUQsQ0FBeEI7O0FBQ0EsTUFBSXlwQixRQUFRLElBQUksQ0FBaEIsRUFBbUI7QUFDakJDLHNHQUFVLENBQUNELFFBQUQsRUFBVyxtQkFBWCxFQUFnQ3pwQixFQUFoQyxDQUFWO0FBQ0Q7O0FBQ0QsTUFBSSxPQUFPeXBCLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7QUFDbENBLFlBQVE7QUFDVDtBQUNGLENBUkQ7QUFVQWptQixPQUFPLENBQUNrbEIsYUFBUixDQUFzQmlCLFFBQXRCLENBQStCaG1CLFdBQS9CLENBQTRDM0QsRUFBRCxJQUFRO0FBQ2pELFFBQU15cEIsUUFBUSxHQUFHUCxPQUFPLENBQUNscEIsRUFBRCxDQUF4QjtBQUNBLFNBQU9rcEIsT0FBTyxDQUFDbHBCLEVBQUQsQ0FBZDs7QUFDQSxNQUFJeXBCLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUNqQkMsc0dBQVUsQ0FBQ0QsUUFBRCxFQUFXLG1CQUFYLEVBQWdDenBCLEVBQWhDLENBQVY7QUFDRDtBQUNGLENBTkQsRTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBZixNQUFNLENBQUNDLE1BQVAsQ0FBY0MsaURBQWQsRUFBd0I7QUFDdEI7QUFDQXlxQixlQUFhLEdBQUc7QUFDZCxXQUFPenFCLGlEQUFRLENBQUMwcUIsVUFBVCxDQUFvQkMsd0dBQXBCLENBQVA7QUFDRCxHQUpxQjs7QUFLdEI7QUFDQUQsWUFBVSxDQUFDdnFCLElBQUQsRUFBTztBQUNmLFdBQU8sU0FBTXlxQiwrRkFBTixFQUFBenFCLElBQUksRUFBVyxDQUFDLENBQUNxSSxHQUFELENBQUQsS0FBVzNGLFNBQVMsQ0FBQzJGLEdBQUQsQ0FBL0IsQ0FBWDtBQUNELEdBUnFCOztBQVN0QjtBQUNBcWlCLFlBQVUsQ0FBQzFxQixJQUFELEVBQU87QUFDZitKLHVHQUFXLENBQUMvSixJQUFELENBQVgsQ0FBa0I0TCxPQUFsQixDQUEwQnlFLElBQUksSUFBSXpILFNBQVMsQ0FBQ3lILElBQUksQ0FBQ2hJLEdBQU4sRUFBV2dJLElBQUksQ0FBQzFILEtBQWhCLENBQTNDO0FBQ0Q7O0FBWnFCLENBQXhCO0FBZUEsSUFBSXJKLE9BQU8sR0FBRyxFQUFkO0FBQ0EsTUFBTXFyQixLQUFLLEdBQUdDLGlHQUFTLEVBQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHM2pCLGdHQUFRLENBQUM0akIsU0FBRCxFQUFZLEdBQVosQ0FBL0I7QUFFQSxJQUFJMWUsT0FBTyxHQUFHLEVBQWQ7QUFDQSxJQUFJMmUsV0FBVyxHQUFHN21CLE9BQU8sQ0FBQ2dYLE9BQVIsQ0FBZ0JySyxLQUFoQixDQUFzQnBLLEdBQXRCLENBQTBCLFNBQTFCLEVBQ2pCa0gsSUFEaUIsQ0FDWixDQUFDO0FBQUV2QixTQUFPLEVBQUVwTTtBQUFYLENBQUQsS0FBdUI7QUFDM0IsTUFBSUEsSUFBSSxJQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBNUIsRUFBc0NvTSxPQUFPLEdBQUdwTSxJQUFWOztBQUN0QyxNQUFJd0YsS0FBSixFQUF1QixFQUV0Qjs7QUFDRCxNQUFJLENBQUM0UCx3R0FBUyxDQUFDaEosT0FBRCxFQUFVLFNBQVYsQ0FBZCxFQUFvQztBQUNsQ3hELGFBQVMsQ0FBQyxTQUFELEVBQVksQ0FBWixDQUFUO0FBQ0Q7O0FBQ0RtaUIsYUFBVyxHQUFHLElBQWQ7QUFDRCxDQVZpQixDQUFsQjtBQVdBOU4sbURBQWEsQ0FBQ3JNLElBQWQsQ0FBbUJtYSxXQUFuQjs7QUFFQSxTQUFTQyxVQUFULENBQW9CemlCLElBQXBCLEVBQTBCSSxLQUExQixFQUFpQztBQUMvQjtBQUNBLFFBQU1OLEdBQUcsR0FBR0UsSUFBSSxDQUFDd04sSUFBTCxDQUFVLEdBQVYsQ0FBWixDQUYrQixDQUcvQjs7QUFDQSxTQUFPelcsT0FBTyxDQUFDK0ksR0FBRCxDQUFkO0FBQ0EvSSxTQUFPLENBQUMrSSxHQUFELENBQVAsR0FBZU0sS0FBZjtBQUNBa2lCLGdCQUFjO0FBQ2Y7O0FBRUQsU0FBU0MsU0FBVCxHQUFxQjtBQUNuQkgsT0FBSyxDQUFDdEYsSUFBTixDQUFXL2xCLE9BQVg7QUFDQUEsU0FBTyxHQUFHLEVBQVY7QUFDRDs7QUFFTSxTQUFTb0QsU0FBVCxDQUFtQjJGLEdBQW5CLEVBQXdCQyxHQUF4QixFQUE2QjtBQUNsQyxRQUFNQyxJQUFJLEdBQUdDLHFHQUFhLENBQUNILEdBQUQsQ0FBMUI7QUFDQSxRQUFNNGlCLE9BQU8sR0FBRzFpQixJQUFJLENBQUMsQ0FBRCxDQUFwQjtBQUNBLE1BQUlJLEtBQUssR0FBR3lELE9BQU8sQ0FBQzZlLE9BQUQsQ0FBbkI7QUFDQSxNQUFJdGlCLEtBQUssSUFBSSxJQUFiLEVBQW1CQSxLQUFLLEdBQUc2aEIsd0dBQVEsQ0FBQ1MsT0FBRCxDQUFoQjtBQUNuQixNQUFJdGlCLEtBQUssSUFBSSxJQUFiLEVBQW1CQSxLQUFLLEdBQUdMLEdBQVI7QUFDbkIsU0FBT0MsSUFBSSxDQUFDbkgsTUFBTCxHQUFjLENBQWQsR0FBa0JnVSx3R0FBUyxDQUFDek0sS0FBRCxFQUFRSixJQUFJLENBQUNQLEtBQUwsQ0FBVyxDQUFYLENBQVIsRUFBdUJNLEdBQXZCLENBQTNCLEdBQXlESyxLQUFoRTtBQUNEO0FBRU0sU0FBU3VpQixnQkFBVCxDQUEwQjdpQixHQUExQixFQUErQjtBQUNwQyxTQUFPK00sd0dBQVMsQ0FBQ29WLHdHQUFELEVBQVduaUIsR0FBWCxDQUFoQjtBQUNEO0FBRU0sU0FBU08sU0FBVCxDQUFtQlAsR0FBbkIsRUFBd0JNLEtBQXhCLEVBQStCO0FBQ3BDLE1BQUlvaUIsV0FBSixFQUFpQjtBQUNmQSxlQUFXLENBQUNwZCxJQUFaLENBQWlCLE1BQU07QUFDckIvRSxlQUFTLENBQUNQLEdBQUQsRUFBTU0sS0FBTixDQUFUO0FBQ0QsS0FGRDtBQUdBO0FBQ0Q7O0FBQ0QsUUFBTUosSUFBSSxHQUFHQyxxR0FBYSxDQUFDSCxHQUFELENBQTFCO0FBQ0EsUUFBTThpQixTQUFTLEdBQUc1aUIsSUFBSSxDQUFDd04sSUFBTCxDQUFVLEdBQVYsQ0FBbEI7QUFDQSxNQUFJcVYsV0FBVyxHQUFHemlCLEtBQWxCO0FBQ0EsUUFBTXNpQixPQUFPLEdBQUcxaUIsSUFBSSxDQUFDLENBQUQsQ0FBcEI7O0FBQ0EsTUFBSTBpQixPQUFPLElBQUlULHdHQUFmLEVBQXlCO0FBQ3ZCLFFBQUlqaUIsSUFBSSxDQUFDbkgsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CZ3FCLGlCQUFXLEdBQUdwYSx3R0FBUyxDQUFDdE8sU0FBUyxDQUFDdW9CLE9BQUQsQ0FBVixFQUFxQjFpQixJQUFJLENBQUNQLEtBQUwsQ0FBVyxDQUFYLENBQXJCLEVBQW9DVyxLQUFwQyxDQUF2QjtBQUNEOztBQUNEeUQsV0FBTyxDQUFDNmUsT0FBRCxDQUFQLEdBQW1CRyxXQUFuQjtBQUNBbG5CLFdBQU8sQ0FBQ2dYLE9BQVIsQ0FBZ0JySyxLQUFoQixDQUFzQm5JLEdBQXRCLENBQTBCO0FBQUUwRDtBQUFGLEtBQTFCO0FBQ0E0ZSxjQUFVLENBQUN6aUIsSUFBRCxFQUFPSSxLQUFQLENBQVY7O0FBQ0EsUUFBSW5ELEtBQUosRUFBdUIsRUFFdEI7QUFDRjtBQUNGO0FBRU0sTUFBTW5HLFdBQVcsR0FBR3NyQixLQUFLLENBQUNVLElBQTFCLEM7Ozs7Ozs7Ozs7OztBQzVGUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUscUVBQU0sSUFBSTNtQixPQUFKLENBQVksQ0FBQzJDLE9BQUQsRUFBVTFDLE1BQVYsS0FBcUI7QUFDcERFLFNBQU8sQ0FBQ0MsSUFBUixDQUFhLHFCQUFiO0FBQ0ErRCxNQUFJOztBQUNKLFdBQVNBLElBQVQsR0FBZ0I7QUFDZCxVQUFNeEcsR0FBRyxHQUFHaXBCLFNBQVMsQ0FBQ0MsSUFBVixDQUFlLGVBQWYsRUFBZ0MsQ0FBaEMsQ0FBWjs7QUFDQWxwQixPQUFHLENBQUNtcEIsU0FBSixHQUFnQixNQUFNO0FBQ3BCLFVBQUk7QUFDRkMsaUJBQVMsQ0FBQ3BwQixHQUFHLENBQUMwZixNQUFMLENBQVQ7QUFDRCxPQUZELENBRUUsT0FBTzVaLEdBQVAsRUFBWTtBQUNaO0FBQ0F4RCxjQUFNLENBQUN3RCxHQUFELENBQU47QUFDRDtBQUNGLEtBUEQ7O0FBUUE5RixPQUFHLENBQUMyaEIsT0FBSixHQUFjcmYsTUFBZDs7QUFDQXRDLE9BQUcsQ0FBQ3FwQixlQUFKLEdBQXNCLE1BQU07QUFDMUI7QUFDQS9tQixZQUFNO0FBQ1AsS0FIRDtBQUlEOztBQUNELFdBQVM4bUIsU0FBVCxDQUFtQkUsRUFBbkIsRUFBdUI7QUFDckIsVUFBTUMsRUFBRSxHQUFHRCxFQUFFLENBQUNFLFdBQUgsQ0FBZSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLE9BQXZCLEVBQWdDLFFBQWhDLENBQWYsQ0FBWDtBQUNBLFVBQU0xYSxPQUFPLEdBQUcsRUFBaEI7QUFDQSxRQUFJMmEsVUFBVSxHQUFHLENBQWpCOztBQUNBLFVBQU1DLElBQUksR0FBRyxNQUFNO0FBQ2pCRCxnQkFBVSxJQUFJLENBQWQ7QUFDQSxVQUFJLENBQUNBLFVBQUwsRUFBaUJ6a0IsT0FBTyxDQUFDbkQsT0FBTyxDQUFDZ1gsT0FBUixDQUFnQnJLLEtBQWhCLENBQXNCbkksR0FBdEIsQ0FBMEJ5SSxPQUExQixDQUFELENBQVA7QUFDbEIsS0FIRDs7QUFJQSxVQUFNNmEsTUFBTSxHQUFHLENBQUNDLFNBQUQsRUFBWS9ULFFBQVosS0FBeUI7QUFDdEMsWUFBTTdWLEdBQUcsR0FBR3VwQixFQUFFLENBQUNNLFdBQUgsQ0FBZUQsU0FBZixFQUEwQkQsTUFBMUIsRUFBWjs7QUFDQTNwQixTQUFHLENBQUNtcEIsU0FBSixHQUFnQixNQUFNdFQsUUFBUSxDQUFDN1YsR0FBRyxDQUFDMGYsTUFBTCxDQUE5Qjs7QUFDQTFmLFNBQUcsQ0FBQzJoQixPQUFKLEdBQWNyZixNQUFkO0FBQ0QsS0FKRDs7QUFLQXFuQixVQUFNLENBQUMsU0FBRCxFQUFhdE0sVUFBRCxJQUFnQjtBQUNoQyxZQUFNcEMsTUFBTSxHQUFHLEVBQWY7QUFDQW9DLGdCQUFVLENBQUM5VCxPQUFYLENBQW9CdkYsTUFBRCxJQUFZO0FBQzdCLGNBQU07QUFBRTFDLGNBQUY7QUFBUWpELFlBQVI7QUFBWStHO0FBQVosWUFBb0JwQixNQUExQjtBQUNBOEssZUFBTyxDQUFFLEdBQUUrSiwrRkFBTyxDQUFDN1UsTUFBUixDQUFld0ksTUFBTyxHQUFFbk8sRUFBRyxFQUEvQixDQUFQLEdBQTJDeXJCLGVBQWUsQ0FBQzlsQixNQUFELENBQTFEO0FBQ0E4SyxlQUFPLENBQUUsR0FBRStKLCtGQUFPLENBQUN2WCxJQUFSLENBQWFrTCxNQUFPLEdBQUVuTyxFQUFHLEVBQTdCLENBQVAsR0FBeUNpRCxJQUF6QztBQUNBMlosY0FBTSxDQUFDN1YsR0FBRCxDQUFOLEdBQWMvRyxFQUFkO0FBQ0QsT0FMRDtBQU1Bc3JCLFlBQU0sQ0FBQyxRQUFELEVBQVlJLFNBQUQsSUFBZTtBQUM5QkEsaUJBQVMsQ0FBQ3hnQixPQUFWLENBQWtCLENBQUM7QUFBRW5FLGFBQUY7QUFBT21VO0FBQVAsU0FBRCxLQUFxQjtBQUNyQyxnQkFBTWxiLEVBQUUsR0FBRzRjLE1BQU0sQ0FBQzdWLEdBQUQsQ0FBakI7QUFDQSxjQUFJL0csRUFBSixFQUFReVEsT0FBTyxDQUFFLEdBQUUrSiwrRkFBTyxDQUFDdlMsS0FBUixDQUFja0csTUFBTyxHQUFFbk8sRUFBRyxFQUE5QixDQUFQLEdBQTBDa2IsTUFBMUM7QUFDVCxTQUhEO0FBSUFtUSxZQUFJO0FBQ0wsT0FOSyxDQUFOO0FBT0QsS0FmSyxDQUFOO0FBZ0JBQyxVQUFNLENBQUMsT0FBRCxFQUFXSyxRQUFELElBQWM7QUFDNUJBLGNBQVEsQ0FBQ3pnQixPQUFULENBQWlCLENBQUM7QUFBRW5FLFdBQUY7QUFBT3pIO0FBQVAsT0FBRCxLQUFtQjtBQUNsQ21SLGVBQU8sQ0FBRSxHQUFFK0osK0ZBQU8sQ0FBQzNYLEtBQVIsQ0FBY3NMLE1BQU8sR0FBRXBILEdBQUksRUFBL0IsQ0FBUCxHQUEyQ3pILElBQTNDO0FBQ0QsT0FGRDtBQUdBK3JCLFVBQUk7QUFDTCxLQUxLLENBQU47QUFNQUMsVUFBTSxDQUFDLFNBQUQsRUFBYU0sVUFBRCxJQUFnQjtBQUNoQ0EsZ0JBQVUsQ0FBQzFnQixPQUFYLENBQW1CLENBQUM7QUFBRW5FLFdBQUY7QUFBTzlEO0FBQVAsT0FBRCxLQUFtQjtBQUNwQ3dOLGVBQU8sQ0FBRSxHQUFFK0osK0ZBQU8sQ0FBQ2dELE9BQVIsQ0FBZ0JyUCxNQUFPLEdBQUVwSCxHQUFJLEVBQWpDLENBQVAsR0FBNkM5RCxJQUE3QztBQUNELE9BRkQ7QUFHQW9vQixVQUFJO0FBQ0wsS0FMSyxDQUFOO0FBTUQ7O0FBQ0QsV0FBU0ksZUFBVCxDQUF5QjlsQixNQUF6QixFQUFpQztBQUMvQixXQUFPO0FBQ0w4VixVQUFJLEVBQUVTLHlEQUFTLENBQUN2VyxNQUFNLENBQUMxQyxJQUFSLENBRFY7QUFFTEMsWUFBTSxFQUFFakUsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDcEIyc0IsbUJBQVcsRUFBRSxJQURPO0FBRXBCQyxtQkFBVyxFQUFFLElBRk87QUFHcEJDLGlCQUFTLEVBQUUsSUFIUztBQUlwQkMsd0JBQWdCLEVBQUU7QUFKRSxPQUFkLEVBS0xybUIsTUFBTSxDQUFDekMsTUFMRixDQUZIO0FBUUxrSCxXQUFLLEVBQUU7QUFDTHBLLFVBQUUsRUFBRTJGLE1BQU0sQ0FBQzNGLEVBRE47QUFFTCtHLFdBQUcsRUFBRXBCLE1BQU0sQ0FBQ29CLEdBRlA7QUFHTCtJLGdCQUFRLEVBQUVuSyxNQUFNLENBQUNtSztBQUhaLE9BUkY7QUFhTDFILFlBQU0sRUFBRTtBQUNObUMsZUFBTyxFQUFFNUUsTUFBTSxDQUFDNEUsT0FEVjtBQUVOQyxvQkFBWSxFQUFFN0UsTUFBTSxDQUFDQztBQUZmO0FBYkgsS0FBUDtBQWtCRDtBQUNGLENBakZvQixFQWtGckI7QUFsRnFCLENBbUZwQjlCLEtBbkZvQixDQW1GZCxNQUFNLENBQUUsQ0FuRk0sQ0FBckIsRTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTXJELFNBQVMsR0FBRyxFQUFsQixDLENBQXNCOztBQUU3Qm9rQixvREFBYyxDQUFDM1UsSUFBZixDQUFvQixNQUFNO0FBQ3hCMU0sU0FBTyxDQUFDQyxPQUFSLENBQWdCd29CLFNBQWhCLENBQTBCdG9CLFdBQTFCLENBQXNDdW9CLGFBQXRDO0FBQ0Exb0IsU0FBTyxDQUFDb08sVUFBUixDQUFtQkMsZUFBbkIsQ0FBbUNsTyxXQUFuQyxDQUErQ3dvQixnQkFBL0MsRUFBaUU7QUFDL0RyYSxRQUFJLEVBQUUsQ0FBQ3RPLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjhrQixNQUFoQixDQUF1Qi9rQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IrQixXQUFoQixHQUE4QjRtQixjQUE5QixDQUE2Q0MsYUFBcEUsQ0FBRCxDQUR5RDtBQUUvRHRhLFNBQUssRUFBRSxDQUFDLFlBQUQ7QUFGd0QsR0FBakU7QUFJRCxDQU5EOztBQVFBLFNBQVNtYSxhQUFULENBQXVCSSxJQUF2QixFQUE2QjtBQUMzQixRQUFNdnNCLEtBQUssR0FBRyxDQUFDdXNCLElBQUksQ0FBQ3hsQixJQUFwQjtBQUNBckcsV0FBUyxDQUFDVixLQUFELENBQVQsR0FBbUIsQ0FBbkI7QUFDQTJwQixvR0FBVSxDQUFDM3BCLEtBQUQsRUFBUSxZQUFSLEVBQXNCLElBQXRCLENBQVY7QUFDQXVzQixNQUFJLENBQUNDLFlBQUwsQ0FBa0I1b0IsV0FBbEIsQ0FBOEI2b0IsYUFBOUI7QUFDQSxTQUFPcnRCLGlEQUFRLENBQUNzdEIsUUFBaEI7QUFDRDs7QUFFRCxTQUFTRCxhQUFULENBQXVCO0FBQUUxbEI7QUFBRixDQUF2QixFQUFpQztBQUMvQixTQUFPckcsU0FBUyxDQUFDcUcsSUFBRCxDQUFoQjtBQUNBNGlCLG9HQUFVLENBQUMsQ0FBQzVpQixJQUFGLEVBQVEsWUFBUixFQUFzQixLQUF0QixDQUFWO0FBQ0Q7O0FBRUQsZUFBZXFsQixnQkFBZixHQUFrQztBQUNoQyxRQUFNcHNCLEtBQUssR0FBRyxDQUFDLE1BQU1nQixvR0FBWSxFQUFuQixFQUF1QmYsRUFBckM7QUFDQTBwQixvR0FBVSxDQUFDM3BCLEtBQUQsRUFBUSxZQUFSLEVBQXNCLElBQXRCLENBQVY7O0FBQ0FaLG1EQUFRLENBQUNzdEIsUUFBVCxHQUFvQixPQUFPbnRCLElBQVAsRUFBYU0sR0FBYixLQUFxQjtBQUN2Q1gsVUFBTSxDQUFDQyxNQUFQLENBQWNJLElBQWQsR0FBb0IsTUFBTUMsbURBQU8sQ0FBQ0QsSUFBSSxDQUFDRCxHQUFOLENBQWpDO0FBQ0F3RCxrREFBSyxDQUFDME4sR0FBTixDQUFVLFVBQVYsRUFBc0J0UixNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFFLE9BQUNVLEdBQUcsQ0FBQ0MsT0FBTCxHQUFlLENBQUNQLElBQUQsRUFBT00sR0FBUDtBQUFqQixLQUFkLEVBQThDaUQsOENBQUssQ0FBQ2tELEdBQU4sQ0FBVSxVQUFWLENBQTlDLENBQXRCO0FBQ0QsR0FIRDtBQUlELEM7Ozs7Ozs7Ozs7OztBQ3BDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU0ybUIsVUFBVSxHQUFHO0FBQ2pCNWEsTUFBSSxFQUFFLENBQUMsU0FBRCxDQURXO0FBQ0U7QUFDbkJDLE9BQUssRUFBRSxDQUFDLFlBQUQsRUFBZSxXQUFmO0FBRlUsQ0FBbkI7QUFJQSxNQUFNNGEsZUFBZSxHQUFHLElBQXhCLEMsQ0FBOEI7O0FBQzlCLE1BQU1DLGtCQUFrQixHQUFHLEdBQTNCLEMsQ0FBZ0M7O0FBQ2hDLE1BQU1DLGNBQWMsR0FBRyxJQUF2QixDLENBQTZCOztBQUM3QixNQUFNQyxTQUFTLEdBQUcxVCxxR0FBUyxDQUFDO0FBQUVDLFVBQVEsRUFBRXdUO0FBQVosQ0FBRCxDQUEzQjtBQUNBLE1BQU1ocUIsS0FBSyxHQUFHdVcscUdBQVMsQ0FBQztBQUN0QkMsVUFBUSxFQUFFd1QsY0FEWTtBQUV0QkUsV0FBUyxFQUFFLE1BQU1uZ0IsT0FBTixJQUFpQjtBQUMxQixVQUFNdE4sSUFBSSxHQUFHLE1BQU1zTixPQUFuQjtBQUNBLFVBQU1vZ0IsR0FBRyxHQUFHLE9BQU0xdEIsSUFBTixvQkFBTUEsSUFBSSxDQUFFMnRCLFVBQVosQ0FBWjtBQUNBRCxPQUFHLFFBQUgsWUFBQUEsR0FBRyxDQUFFRSxVQUFMO0FBQ0Q7QUFOcUIsQ0FBRCxDQUF2QjtBQVFBLE1BQU1DLFdBQVcsR0FBRyxZQUFwQixDLENBQ0E7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFFBQW5CO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsbUJBQTVCO0FBQ0EsTUFBTXZILGNBQWMsR0FBRyxXQUF2QjtBQUNBLE1BQU13SCxjQUFjLEdBQUcsV0FBdkI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNBLElBQUlySCxTQUFKO0FBQ0EsSUFBSXNILFVBQUo7QUFDQSxJQUFJQyxTQUFKO0FBQ0E5dUIsNERBQVcsQ0FBQyt1QixlQUFELENBQVg7QUFDQTdJLG9EQUFjLENBQUMzVSxJQUFmLENBQW9CLE1BQU07QUFDeEIsT0FBSyxNQUFNdkksR0FBWCxJQUFrQixDQUFDeWxCLFVBQUQsRUFBYUMsbUJBQWIsRUFBa0N2SCxjQUFsQyxFQUFrRHdILGNBQWxELENBQWxCLEVBQXFGO0FBQ25GSSxtQkFBZSxDQUFDO0FBQUUsT0FBQy9sQixHQUFELEdBQU8zRiwwREFBUyxDQUFDMkYsR0FBRDtBQUFsQixLQUFELENBQWY7QUFDRDtBQUNGLENBSkQ7QUFNQTFJLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxpREFBZCxFQUF3QjtBQUN0QixRQUFNeUIsaUJBQU4sQ0FBd0I7QUFBRStzQixVQUFGO0FBQVV0dEIsWUFBVjtBQUFvQlY7QUFBcEIsR0FBeEIsRUFBNERDLEdBQTVELEVBQWlFO0FBQy9EUyxZQUFRLENBQUM2SyxPQUFULENBQWlCMGlCLGVBQWpCLEVBQWtDaHVCLEdBQWxDOztBQUNBLFFBQUkrdEIsTUFBSixFQUFZO0FBQ1Y7QUFDQTlxQixXQUFLLENBQUNnckIsR0FBTixDQUFVRixNQUFNLENBQUNHLFFBQWpCLEVBRlUsQ0FHVjs7QUFDQSxZQUFNck8sR0FBRyxHQUFHLE1BQU01YyxLQUFLLENBQUM2VyxHQUFOLENBQVVpVSxNQUFNLENBQUNJLE1BQWpCLENBQWxCOztBQUNBLFVBQUl0TyxHQUFKLEVBQVM7QUFDUEEsV0FBRyxDQUFDOWYsWUFBSixHQUFtQkEsWUFBbkI7QUFDQThmLFdBQUcsQ0FBQzVPLE9BQUosQ0FBWXRILEdBQVosQ0FBZ0J5a0IsYUFBaEIsRUFBK0J2TyxHQUEvQixFQUFvQ3pPLE1BQXBDLENBQTJDQyxPQUEzQyxFQUFvRC9GLE9BQXBELENBQTREMGlCLGVBQTVELEVBQTZFaHVCLEdBQTdFO0FBQ0EsZUFBT3lLLHlHQUFVLENBQUNvVixHQUFELEVBQU0sQ0FBQyxPQUFELEVBQVUsU0FBVixDQUFOLENBQWpCO0FBQ0Q7QUFDRjtBQUNGOztBQWRxQixDQUF4QjtBQWlCQTs7QUFDQSxTQUFTbU8sZUFBVCxDQUF5QixDQUFDam1CLEdBQUQsRUFBTXNtQixjQUFOLENBQXpCLEVBQWdEO0FBQzlDLFFBQU1ockIsSUFBSSxHQUFHNnBCLFNBQVMsQ0FBQ3BULEdBQVYsQ0FBYy9SLEdBQWQsQ0FBYixDQUQ4QyxDQUU5Qzs7QUFDQSxNQUFJc21CLGNBQWMsSUFBSWhyQixJQUF0QixFQUE0QjtBQUMxQk8sV0FBTyxDQUFDd08sSUFBUixDQUFha2MsYUFBYixDQUEyQixLQUFLcHVCLEdBQUwsQ0FBU0UsRUFBcEMsRUFBd0M7QUFDdENpRCxVQURzQztBQUV0Q3BELGFBQU8sRUFBRSxLQUFLQSxPQUZ3QjtBQUd0QzJmLFdBQUssRUFBRTtBQUgrQixLQUF4QztBQUtEO0FBQ0Y7O0FBRUQsTUFBTTJPLFlBQVksR0FBRztBQUNuQixHQUFDM1QsK0ZBQU8sQ0FBQzNYLEtBQVIsQ0FBY3NMLE1BQWYsR0FBd0JzUSxrREFETDtBQUVuQixHQUFDakUsK0ZBQU8sQ0FBQ3ZYLElBQVIsQ0FBYWtMLE1BQWQsR0FBdUIsSUFGSjtBQUduQixHQUFDcU0sK0ZBQU8sQ0FBQ2dELE9BQVIsQ0FBZ0JyUCxNQUFqQixHQUEwQnVRLGdEQUhQO0FBSW5CLEdBQUNsRSwrRkFBTyxDQUFDN1UsTUFBUixDQUFld0ksTUFBaEIsR0FBeUIsSUFKTjtBQUtuQixHQUFDcU0sK0ZBQU8sQ0FBQ3ZTLEtBQVIsQ0FBY2tHLE1BQWYsR0FBd0J3USxpREFBYUE7QUFMbEIsQ0FBckI7QUFRQW5iLE9BQU8sQ0FBQ2dYLE9BQVIsQ0FBZ0I0VCxTQUFoQixDQUEwQnpxQixXQUExQixDQUFzQyxNQUFNL0UsT0FBTixJQUFpQjtBQUNyRCxRQUFNeXZCLE1BQU0sR0FBR3B2QixNQUFNLENBQUM0SSxJQUFQLENBQVlqSixPQUFaLENBQWY7QUFDQSxRQUFNMHZCLFdBQVcsR0FBRyxNQUFNdHFCLE9BQU8sQ0FBQ3dLLEdBQVIsQ0FBWTNMLEtBQUssQ0FBQzByQixTQUFOLEVBQVosQ0FBMUI7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLFdBQVcsQ0FBQzVPLElBQVosQ0FBaUJwZ0IsSUFBSSxJQUFJQSxJQUFJLENBQUNnQixNQUFMLElBQ2xDK3RCLE1BQU0sQ0FBQzNPLElBQVAsQ0FBYS9YLEdBQUQsSUFBUztBQUFBOztBQUN0QixVQUFNd0csTUFBTSxHQUFHeEcsR0FBRyxDQUFDTCxLQUFKLENBQVUsQ0FBVixFQUFhSyxHQUFHLENBQUNQLE9BQUosQ0FBWSxHQUFaLElBQW1CLENBQWhDLENBQWY7QUFDQSxVQUFNd1IsSUFBSSxHQUFHdVYsWUFBWSxDQUFDaGdCLE1BQUQsQ0FBekI7QUFDQXhHLE9BQUcsR0FBR0EsR0FBRyxDQUFDTCxLQUFKLENBQVU2RyxNQUFNLENBQUN6TixNQUFqQixDQUFOO0FBQ0EsV0FBT2tZLElBQUksS0FBSyxJQUFULG1CQUNGdFosSUFBSSxDQUFDc1osSUFBRCxDQURGLHFCQUNGLFdBQVkvVyxRQUFaLENBQXFCc00sTUFBTSxLQUFLcU0sK0ZBQU8sQ0FBQ3ZTLEtBQVIsQ0FBY2tHLE1BQXpCLEdBQWtDLENBQUN4RyxHQUFuQyxHQUF5Q0EsR0FBOUQsQ0FERSxDQUFQO0FBRUQsR0FORSxDQURTLENBQWQ7O0FBUUEsTUFBSTZtQixLQUFKLEVBQVc7QUFDVDNyQixTQUFLLENBQUM0ckIsT0FBTjtBQUNEO0FBQ0YsQ0FkRDs7QUFnQkEsU0FBU0MsY0FBVCxDQUF3QnptQixLQUF4QixFQUErQjtBQUM3QixTQUFPLFNBQWdCMG1CLGNBQWhCLEVBQUFDLHFHQUFjLEVBQWlCM21CLEtBQWpCLENBQWQsR0FDSEEsS0FERyxHQUVIdWxCLFVBQVUsSUFBSXhQLGtHQUZsQjtBQUdEOztBQUVELFNBQVMwUCxlQUFULENBQXlCOXVCLE9BQXpCLEVBQWtDO0FBQ2hDLFdBQVM0SixtR0FBVCxFQUFBNUosT0FBTyxFQUFlLENBQUMsQ0FBQytJLEdBQUQsRUFBTU0sS0FBTixDQUFELEtBQWtCO0FBQ3RDLFlBQVFOLEdBQVI7QUFDQSxXQUFLMGxCLG1CQUFMO0FBQ0VHLGtCQUFVLEdBQUdrQixjQUFjLENBQUN6bUIsS0FBRCxDQUEzQjtBQUNBcEYsYUFBSyxDQUFDNHJCLE9BQU47QUFDQTs7QUFDRixXQUFLbkIsY0FBTDtBQUNFdUIsdUJBQWUsQ0FBQzVtQixLQUFELENBQWY7QUFDQXBGLGFBQUssQ0FBQzRyQixPQUFOO0FBQ0E7O0FBQ0YsV0FBSzNJLGNBQUw7QUFDRWdKLHVCQUFlLENBQUM3bUIsS0FBRCxDQUFmO0FBQ0E7O0FBQ0YsV0FBS21sQixVQUFMO0FBQ0UsaUJBQU81a0IsbUdBQVAsRUFBQVAsS0FBSyxFQUFlLENBQUMsQ0FBQzhtQixJQUFELEVBQU9DLFNBQVAsQ0FBRCxLQUF1QjtBQUN6Q3pCLGdCQUFNLENBQUMvbEIsa0JBQWtCLENBQUN1bkIsSUFBRCxDQUFuQixDQUFOLEdBQW1DQyxTQUFuQztBQUNELFNBRkksQ0FBTDtBQUdBOztBQUNGO0FBQ0UsWUFBSXJuQixHQUFHLENBQUM5RixRQUFKLENBQWEsR0FBYixDQUFKLEVBQXVCO0FBQUU7QUFDdkI2ckIseUJBQWUsQ0FBQ3BkLHdHQUFTLENBQUMsRUFBRCxFQUFLM0ksR0FBTCxFQUFVTSxLQUFWLENBQVYsQ0FBZjtBQUNEOztBQXBCSDtBQXNCRCxHQXZCTSxDQUFQO0FBd0JEO0FBRUQ7OztBQUNPLFNBQVM3SCxrQkFBVCxDQUE0QlYsR0FBNUIsRUFBaUNLLEtBQWpDLEVBQXdDRixPQUF4QyxFQUFpREYsWUFBakQsRUFBK0Q7QUFDcEUsUUFBTWdJLEdBQUcsR0FBR3NZLE1BQU0sQ0FBQ3ZnQixHQUFELEVBQU0sQ0FBQ0csT0FBUCxDQUFsQjtBQUNBLFNBQU9nRCxLQUFLLENBQUM2VyxHQUFOLENBQVUvUixHQUFWLEtBQWtCeUYsT0FBTyxDQUFDekYsR0FBRCxFQUFNakksR0FBTixFQUFXSyxLQUFYLEVBQWtCRixPQUFsQixFQUEyQkYsWUFBM0IsQ0FBaEM7QUFDRDs7QUFFRCxTQUFTc2dCLE1BQVQsQ0FBZ0J2Z0IsR0FBaEIsRUFBcUJxZixLQUFyQixFQUE0QjtBQUMxQixTQUFPQSxLQUFLLEdBQUdyZixHQUFILEdBQVUsSUFBR0EsR0FBSSxFQUE3QjtBQUNEOztBQUVELFNBQVNvdkIsZUFBVCxDQUF5QkcsTUFBekIsRUFBaUM7QUFDL0IvSSxXQUFTLEdBQUcrSSxNQUFaLENBRCtCLENBRS9CO0FBQ0E7O0FBQ0EsUUFBTUMsS0FBSyxHQUFJLEdBQUVELE1BQU0sR0FBRyxLQUFILEdBQVcsUUFBUyxVQUEzQztBQUNBLFFBQU03bUIsTUFBTSxHQUFHNm1CLE1BQU0sR0FBR3ZDLFVBQUgsR0FBZ0I1VCxTQUFyQztBQUNBdFYsU0FBTyxDQUFDb08sVUFBUixDQUFtQnVkLGFBQW5CLENBQWlDRCxLQUFqQyxFQUF3Q0MsYUFBeEMsRUFBdUQvbUIsTUFBdkQ7O0FBQ0EsTUFBSSxDQUFDOGQsU0FBRCxJQUFjLENBQUN1SCxTQUFuQixFQUE4QjtBQUFFO0FBQzlCanFCLFdBQU8sQ0FBQ29PLFVBQVIsQ0FBbUJ3ZCxpQkFBbkIsQ0FBcUNGLEtBQXJDLEVBQTRDRSxpQkFBNUMsRUFBK0RobkIsTUFBL0Q7QUFDRDs7QUFDRHZGLE9BQUssQ0FBQzRyQixPQUFOO0FBQ0Q7O0FBRUQsU0FBU0ksZUFBVCxDQUF5QkksTUFBekIsRUFBaUM7QUFDL0J4QixXQUFTLEdBQUd3QixNQUFaO0FBQ0F6ckIsU0FBTyxDQUFDb08sVUFBUixDQUFtQndkLGlCQUFuQixDQUFxQ2pkLGNBQXJDLENBQW9EaWQsaUJBQXBEOztBQUNBLE1BQUlILE1BQUosRUFBWTtBQUNWenJCLFdBQU8sQ0FBQ29PLFVBQVIsQ0FBbUJ3ZCxpQkFBbkIsQ0FBcUN6ckIsV0FBckMsQ0FBaUR5ckIsaUJBQWpELEVBQW9FMUMsVUFBcEUsRUFBZ0YsQ0FDOUUsVUFEOEUsRUFFOUUsaUJBRjhFLEVBRzlFbHBCLE9BQU8sQ0FBQ29PLFVBQVIsQ0FBbUJ5ZCx3QkFBbkIsQ0FBNENDLGFBSGtDLEVBSTlFdGUsTUFKOEUsQ0FJdkVDLE9BSnVFLENBQWhGO0FBS0Q7QUFDRjs7QUFFRCxTQUFTa2UsYUFBVCxDQUF1QjtBQUFFenZCLEtBQUY7QUFBT0ssT0FBUDtBQUFjRjtBQUFkLENBQXZCLEVBQWdEO0FBQzlDLE1BQUksQ0FBQzJuQiw0R0FBcUIsQ0FBQ3ZnQixJQUF0QixDQUEyQnZILEdBQTNCLENBQUwsRUFBc0M7QUFDdEMsUUFBTXFmLEtBQUssR0FBRyxDQUFDbGYsT0FBZjtBQUNBLFFBQU04SCxHQUFHLEdBQUdzWSxNQUFNLENBQUN2Z0IsR0FBRCxFQUFNcWYsS0FBTixDQUFsQjs7QUFDQSxNQUFJLENBQUNsYyxLQUFLLENBQUMwc0IsR0FBTixDQUFVNW5CLEdBQVYsQ0FBTCxFQUFxQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTlFLFNBQUssQ0FBQzBOLEdBQU4sQ0FBVTVJLEdBQVYsRUFBZXlGLE9BQU8sQ0FBQ3pGLEdBQUQsRUFBTWpJLEdBQU4sRUFBV0ssS0FBWCxFQUFrQkYsT0FBbEIsQ0FBdEIsRUFBa0Q4c0IsZUFBbEQ7QUFDRDtBQUNGO0FBRUQ7OztBQUNBLFNBQVN5QyxpQkFBVCxDQUEyQmhyQixJQUEzQixFQUFpQztBQUMvQixRQUFNdUQsR0FBRyxHQUFHc1ksTUFBTSxDQUFDN2IsSUFBSSxDQUFDMUUsR0FBTixFQUFXLENBQUMwRSxJQUFJLENBQUN2RSxPQUFqQixDQUFsQjtBQUNBLFFBQU1QLElBQUksR0FBR211QixTQUFTLElBQUk1cUIsS0FBSyxDQUFDa0QsR0FBTixDQUFVNEIsR0FBVixDQUExQjtBQUNBOUUsT0FBSyxDQUFDMlcsR0FBTixDQUFVN1IsR0FBVixFQUFlaWxCLGtCQUFmO0FBQ0EsU0FBTyxDQUFBdHRCLElBQUksUUFBSixZQUFBQSxJQUFJLENBQUVnQixNQUFOLEtBQWdCa3ZCLGNBQWMsQ0FBQ3ByQixJQUFELEVBQU85RSxJQUFQLENBQXJDO0FBQ0Q7QUFFRDs7Ozs7O0FBSUEsU0FBU2t3QixjQUFULENBQXdCO0FBQUU5dkIsS0FBRjtBQUFPK3ZCO0FBQVAsQ0FBeEIsRUFBa0Rud0IsSUFBbEQsRUFBd0Q7QUFDdEQsTUFBSUksR0FBRyxDQUFDd08sVUFBSixDQUFlLFFBQWYsS0FBNEJ3aEIsZUFBZSxDQUFDRCxlQUFELENBQS9DLEVBQWtFO0FBQ2hFRSx5QkFBcUIsQ0FBQ3J3QixJQUFELENBQXJCO0FBQ0Q7O0FBQ0QsUUFBTXdqQixPQUFPLEdBQUc1SyxHQUFHLENBQUM2SyxlQUFKLENBQW9CLElBQUlDLElBQUosQ0FBUyxDQUMzQ25ZLElBQUksQ0FBQzJGLFNBQUwsQ0FBZWxSLElBQUksQ0FBQ2dCLE1BQXBCLENBRDJDLENBQVQsQ0FBcEIsQ0FBaEI7QUFHQW12QixpQkFBZSxDQUFDdmYsSUFBaEIsQ0FBcUI7QUFDbkJwSixRQUFJLEVBQUUsWUFEYTtBQUVuQm1CLFNBQUssRUFBRyxJQUFHbkQsNEJBQTJCLEtBQUlnZSxPQUFPLENBQUN2YixLQUFSLENBQWMsR0FBZCxFQUFtQm1TLEdBQW5CLEVBQXlCO0FBRmhELEdBQXJCO0FBSUEvWSxZQUFVLENBQUN1WCxHQUFHLENBQUNnTCxlQUFMLEVBQXNCMkosY0FBdEIsRUFBc0MvSixPQUF0QyxDQUFWO0FBQ0EsU0FBTztBQUFFMk07QUFBRixHQUFQO0FBQ0Q7O0FBRUQsU0FBU3JpQixPQUFULENBQWlCekYsR0FBakIsRUFBc0JqSSxHQUF0QixFQUEyQkssS0FBM0IsRUFBa0NGLE9BQWxDLEVBQTJDRixZQUEzQyxFQUF5RDtBQUN2RDtBQUNBLFFBQU1RLEdBQUcsR0FBRztBQUNWO0FBQ0FHLFVBQU0sRUFBRTtBQUNOaXRCLFlBQU0sRUFBRSxDQUFDMXRCLE9BQUQsSUFDSEgsR0FBRyxDQUFDd08sVUFBSixDQUFlLFVBQWYsQ0FERyxJQUVIcWYsTUFBTSxDQUFDN3RCLEdBQUcsQ0FBQzZILEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFEO0FBSEw7QUFGRSxHQUFaO0FBUUEsU0FBTzJlLFNBQVMsR0FDWjBKLGNBQWMsQ0FBQ3p2QixHQUFELEVBQU13SCxHQUFOLEVBQVdqSSxHQUFYLEVBQWdCSyxLQUFoQixFQUF1QkYsT0FBdkIsRUFBZ0NGLFlBQWhDLENBREYsR0FFWlEsR0FGSjtBQUdEOztBQUVELGVBQWV5dkIsY0FBZixDQUE4Qnp2QixHQUE5QixFQUFtQzJ0QixRQUFuQyxFQUE2Q3B1QixHQUE3QyxFQUFrREssS0FBbEQsRUFBeURGLE9BQXpELEVBQWtFRixZQUFsRSxFQUFnRjtBQUM5RSxRQUFNTCxJQUFJLEdBQUcsTUFBTXdmLDJEQUFlLENBQUNwZixHQUFELEVBQU0sQ0FBQ0csT0FBUCxDQUFsQztBQUNBLFFBQU07QUFBRXlmLGNBQUY7QUFBY3pPO0FBQWQsTUFBMEJ2UixJQUFoQztBQUNBLFFBQU11d0IsTUFBTSxHQUFHbHdCLFlBQVksSUFBSSxJQUEvQjtBQUNBTCxNQUFJLENBQUNLLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsUUFBTVUsUUFBUSxHQUFHd1EsT0FBTyxDQUFDdEgsR0FBUixDQUFZeWtCLGFBQVosRUFBMkIxdUIsSUFBM0IsRUFBaUMwUixNQUFqQyxDQUF3Q0MsT0FBeEMsQ0FBakI7QUFDQSxRQUFNM0csSUFBSSxHQUFHZ1YsVUFBVSxDQUFDMVMsT0FBeEI7QUFDQSxRQUFNbWhCLE1BQU0sR0FBRzdZLGlHQUFTLENBQUUsR0FBRW5WLEtBQU0sSUFBR0YsT0FBUSxHQUFyQixDQUF4QjtBQUNBLFFBQU07QUFBRVM7QUFBRixNQUFhSCxHQUFuQjtBQUNBOztBQUNBbEIsUUFBTSxDQUFDQyxNQUFQLENBQWNvQixNQUFkLEVBQXNCO0FBQ3BCdVEsV0FEb0I7QUFFcEIsS0FBQ3NjLFdBQUQsR0FBZUssVUFGSztBQUdwQjNxQixTQUFLLEVBQUV2RCxJQUFJLENBQUN1RCxLQUhRO0FBSXBCOHFCLFVBQU0sRUFBRTtBQUNORyxjQURNO0FBQ0k7QUFDVkMsWUFGTSxDQUVFOztBQUZGLEtBSlk7QUFRcEIrQixXQUFPLEVBQUUsQ0FBQyxDQUFDeGxCLElBUlM7QUFRSDtBQUNqQjNLLGdCQUFZLEVBQUVBLFlBQVksSUFBTTtBQUM5QlUsWUFBUSxDQUFDSyxNQUFULEtBQW9CbVEsT0FBTyxDQUFDblEsTUFBNUIsQ0FBbUM7QUFBbkMsT0FDRzRlLFVBQVUsQ0FBQ3pPLE9BQVgsQ0FBbUJrZixLQUFuQixDQUF5QkMsR0FBRyxJQUFJQyxjQUFjLENBQUNELEdBQUQsRUFBTXJ3QixZQUFOLENBQTlDLENBRnFCLENBRThDO0FBWHBEO0FBYXBCTixPQUFHLEVBQUVDLElBQUksQ0FBQzhmLFdBYlU7QUFhRztBQUN2QmhiLFFBQUksRUFBRTtBQUNKOHJCLG9HQUFFQTtBQURFO0FBZGMsR0FBdEI7QUFrQkE7O0FBQ0FqeEIsUUFBTSxDQUFDQyxNQUFQLENBQWNpQixHQUFkLEVBQW1CO0FBQ2pCRSxZQURpQjtBQUVqQkUsWUFBUSxFQUFFLENBQUMsR0FBR2pCLElBQUksQ0FBQ3FmLGlEQUFELENBQVIsRUFBeUIsR0FBR1csVUFBVSxDQUFDWCxpREFBRCxDQUF0QyxDQUZPO0FBR2pCc08sY0FBVSxFQUFFLENBQUM0QyxNQUFELElBQVcsQ0FBQ3BDLFNBQVosSUFBeUI3cEIsVUFBekIsR0FDUnVzQixvQkFBb0IsQ0FBQzd2QixNQUFELEVBQVNaLEdBQVQsRUFBYyxDQUFDLENBQUNHLE9BQWhCLENBRFosR0FFUjtBQUxhLEdBQW5CO0FBT0EsTUFBSXlLLElBQUosRUFBVXpILEtBQUssQ0FBQzBOLEdBQU4sQ0FBVXdkLE1BQVYsRUFBa0J6akIsSUFBbEI7QUFDVnpILE9BQUssQ0FBQzBOLEdBQU4sQ0FBVXVkLFFBQVYsRUFBb0IzdEIsR0FBcEIsRUFyQzhFLENBcUNwRDs7QUFDMUIsU0FBT0EsR0FBUDtBQUNEO0FBRUQ7OztBQUNBLFNBQVM2dEIsYUFBVCxDQUF1QnJvQixNQUF2QixFQUErQjtBQUFBOztBQUM3QixRQUFNO0FBQUV6QyxVQUFGO0FBQVV1WSxRQUFWO0FBQWdCclI7QUFBaEIsTUFBMEJ6RSxNQUFoQztBQUNBLFFBQU07QUFBRTNGO0FBQUYsTUFBU29LLEtBQWY7QUFDQSxRQUFNO0FBQUV6SyxnQkFBRjtBQUFnQjZkLFdBQWhCO0FBQXlCdlY7QUFBekIsTUFBbUMsSUFBekM7QUFDQSxRQUFNaEYsSUFBSSxHQUFHLEtBQUtBLElBQUwsQ0FBVWpELEVBQVYsQ0FBYjtBQUNBLFFBQU1vd0IsT0FBTyxHQUFHbGIsaUdBQVMsQ0FBQyxNQUFELENBQXpCO0FBQ0EsUUFBTXpMLFdBQVcsR0FBRzhhLHFHQUFhLENBQUM1ZSxNQUFELENBQWpDO0FBQ0EsUUFBTW1CLElBQUksR0FBRytPLGtCQUFrQixDQUFDcE0sV0FBVyxDQUFDb0osT0FBWixDQUFvQixnQkFBcEIsRUFBc0N3ZCx3QkFBdEMsQ0FBRCxDQUEvQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0wsY0FBYyxDQUFDdHFCLE1BQUQsRUFBU2hHLFlBQVQsQ0FBaEM7QUFDQSxRQUFNMGQsT0FBTyxHQUFHbmEsTUFBTSxDQUFDbWEsT0FBUCxJQUFrQixFQUFsQztBQUNBLFFBQU1rVCxJQUFJLG9CQUFHOVUsSUFBSSxDQUFDK0IsT0FBUixxQkFBRyxjQUFjalUsR0FBZCxDQUFrQjVCLEdBQUcsSUFBSTZWLE9BQU8sQ0FBQ0gsT0FBTyxDQUFDMVYsR0FBRCxDQUFQLElBQWdCQSxHQUFqQixDQUFoQyxFQUF1RHFKLE1BQXZELENBQThEQyxPQUE5RCxDQUFiLENBVjZCLENBVzdCO0FBQ0E7O0FBQ0EsUUFBTXVmLFVBQVUsR0FBR0QsSUFBSSxHQUFHLEdBQUdFLE1BQUgsQ0FBVSxHQUFHRixJQUFJLENBQUNobkIsR0FBTCxDQUFTNUgsR0FBRyxJQUFJLENBQUNBLEdBQUQsRUFBTSxLQUFOLENBQWhCLENBQWIsQ0FBSCxHQUFpRCxFQUF4RTtBQUNBLFFBQU0rdUIsT0FBTyxHQUFHRixVQUFVLENBQUM5dkIsTUFBM0I7QUFDQSxRQUFNaXdCLFlBQVksR0FBRyxDQUNuQjtBQUNDLFlBQVNQLE9BQVEsYUFBWUEsT0FBUSw2Q0FGbkIsRUFHbkIsR0FBR0ksVUFIZ0IsRUFJbkI7QUFDQUUsU0FBTyxHQUFHLFFBQUgsR0FBYyxFQUxGLEVBTW5CenRCLElBTm1CLEVBT25CO0FBQ0FBLE1BQUksQ0FBQ2dWLFFBQUwsQ0FBYyxJQUFkLElBQXNCLEVBQXRCLEdBQTJCLElBUlIsRUFTbkJ5WSxPQUFPLEdBQUcsTUFBSCxHQUFZLEVBVEEsRUFVbkI7QUFDQyxtQkFBZ0JOLE9BQVEsU0FYTixFQVluQjtBQUNDLHFCQUFrQjlILG1EQUFjLEdBQUUxa0IsVUFBVSxHQUFHLEtBQUgsR0FBVyxFQUFHLEdBQUVrRCxJQUFLLFlBQVc5RyxFQUFHLEVBYjdELEVBY25CcVYsSUFkbUIsQ0FjZCxFQWRjLENBQXJCO0FBZUF5WCxXQUFTLENBQUN2YyxHQUFWLENBQWM2ZixPQUFkLEVBQXVCTyxZQUF2QixFQUFxQzlELGNBQXJDO0FBQ0E7O0FBQ0E1dEIsUUFBTSxDQUFDQyxNQUFQLENBQWN5RyxNQUFkLEVBQXNCO0FBQ3BCeXFCLFdBRG9CO0FBRXBCM21CLGVBRm9CO0FBR3BCO0FBQ0F4RyxRQUFJLEVBQUVxdEIsU0FBUyxHQUFHLEVBQUgsR0FBUTN3QixZQUFZLElBQUlneEIsWUFKbkI7QUFLcEJDLFdBQU8sRUFBRTN0QixJQUFJLENBQUMvQixLQUFMLENBQVcydkIsbUdBQVgsRUFBeUIsQ0FBekIsS0FBK0IsRUFMcEI7QUFNcEIzVixVQUFNLEVBQUVqVCxLQUFLLENBQUNqSSxFQUFELENBQUwsSUFBYTtBQU5ELEdBQXRCO0FBUUEsU0FBT3N3QixTQUFTLElBQUksQ0FBQ0YsT0FBRCxFQUFVLElBQVYsQ0FBcEI7QUFDRDs7QUFFRCxTQUFTQyx3QkFBVCxDQUFrQ1MsQ0FBbEMsRUFBcUM7QUFDbkM7QUFDQSxTQUFPQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JGLENBQUMsQ0FBQ3JlLFVBQUYsQ0FBYSxDQUFiLElBQWtCLElBQWxCLEdBQXlCLE1BQTdDLENBQVA7QUFDRDs7QUFFRCxNQUFNd2Usa0JBQWtCLEdBQUksSUFBRyxTQUFTalUsQ0FBVCxDQUFXMWQsSUFBWCxFQUFpQjtBQUM5Qzs7QUFFQSxRQUFNO0FBQUU0eEI7QUFBRixNQUFnQixJQUF0Qjs7QUFDQSxNQUFJQSxTQUFKLEVBQWU7QUFDYkEsYUFBUyxDQUFDNXhCLElBQUQsQ0FBVDtBQUNELEdBRkQsTUFFTztBQUNMO0FBQ0EsU0FBSzZ4QixNQUFMLEdBQWM3eEIsSUFBZDtBQUNEO0FBQ0YsQ0FBQyxHQVZGLEMsQ0FZQTs7QUFDQSxTQUFTNndCLG9CQUFULENBQThCN3ZCLE1BQTlCLEVBQXNDWixHQUF0QyxFQUEyQzB4QixTQUEzQyxFQUFzRDtBQUFBOztBQUNwRCxrQ0FBTzV0QixPQUFPLENBQUM2dEIsY0FBZixxQkFBTyxzQkFBd0JuZ0IsUUFBeEIsQ0FBaUM7QUFDdENrZ0IsYUFEc0M7QUFFdEM3ckIsTUFBRSxFQUFFLENBQUM7QUFDSHRDLFVBQUksRUFBRyxHQUFFZ3VCLGtCQUFtQixJQUFHcG1CLElBQUksQ0FBQzJGLFNBQUwsQ0FBZWxRLE1BQWYsQ0FBdUI7QUFEbkQsS0FBRCxDQUZrQztBQUt0Q2d4QixXQUFPLEVBQUU1eEIsR0FBRyxDQUFDNkgsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLENBTDZCO0FBTXRDaVksU0FBSyxFQUFFO0FBTitCLEdBQWpDLENBQVA7QUFRRDtBQUVEOzs7QUFDQSxTQUFTa1EsZUFBVCxDQUF5QkQsZUFBekIsRUFBMEM7QUFDeEMsU0FBT0EsZUFBZSxDQUFDL1AsSUFBaEIsQ0FBcUIsQ0FBQztBQUFFNVksUUFBRjtBQUFRbUI7QUFBUixHQUFELEtBQzFCLDZCQUE2QmhCLElBQTdCLENBQWtDSCxJQUFsQyxLQUNHLDBCQUEwQkcsSUFBMUIsRUFBZ0M7QUFDakNnQixPQUFLLENBQUMvRyxLQUFOLENBQVksa0NBQVosS0FDRytHLEtBQUssQ0FBQy9HLEtBQU4sQ0FBWSw2QkFBWixDQURILElBRUcrRyxLQUFLLENBQUMvRyxLQUFOLENBQVksOEJBQVosQ0FGSCxJQUdHLEVBSkYsQ0FGRSxDQUFQO0FBU0Q7QUFFRDs7O0FBQ0EsU0FBU3l1QixxQkFBVCxDQUErQnJ3QixJQUEvQixFQUFxQztBQUNuQztBQUNBLFFBQU1nQixNQUFNLEdBQUdoQixJQUFJLENBQUNnQixNQUFwQjtBQUNBQSxRQUFNLENBQUNYLFlBQVAsR0FBc0IsSUFBdEI7QUFDQVcsUUFBTSxDQUFDdVEsT0FBUCxDQUFlM0YsT0FBZixDQUF1QjhrQixHQUFHLElBQUk7QUFDNUI7QUFDQUEsT0FBRyxDQUFDL3NCLElBQUosR0FBVyxDQUFDZ3RCLGNBQWMsQ0FBQ0QsR0FBRCxFQUFNLElBQU4sQ0FBZixJQUE4QixFQUF6QztBQUNBMXdCLFFBQUksQ0FBQ2UsUUFBTCxDQUFjNlAsSUFBZCxDQUFtQixDQUFDOGYsR0FBRyxDQUFDSSxPQUFMLEVBQWMsSUFBZCxDQUFuQjtBQUNELEdBSkQ7QUFLRDs7QUFFRCxTQUFTSCxjQUFULENBQXdCRCxHQUF4QixFQUE2QnJ3QixZQUE3QixFQUEyQztBQUN6QyxRQUFNNHhCLEtBQUssR0FBR3ZCLEdBQUcsQ0FBQzdDLFdBQUQsQ0FBSCxLQUNaNkMsR0FBRyxDQUFDN0MsV0FBRCxDQUFILEdBQW1CdUIsY0FBYyxDQUFDc0IsR0FBRyxDQUFDOXNCLE1BQUosQ0FBV2lxQixXQUFYLEtBQTJCNkMsR0FBRyxDQUFDdlUsSUFBSixDQUFTMFIsV0FBVCxDQUE1QixDQURyQixDQUFkO0FBR0EsU0FBT29FLEtBQUssS0FBS0MscUdBQVYsSUFBNEI3eEIsWUFBWSxJQUFJNHhCLEtBQUssS0FBS3ZULGtHQUE3RDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9XRDtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU15VCxTQUFTLEdBQUcsV0FBbEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBSSxHQUFFcEosbURBQWMscUJBQTFDO0FBQ0E7O0FBQ0EsTUFBTXFKLFFBQVEsR0FBRyxFQUFqQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxFQUFsQjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxFQUFmO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsTUFBTTtBQUFFdHRCO0FBQUYsSUFBYWxCLE1BQW5CO0FBQ0EsSUFBSXl1QixPQUFKOztBQUVBLE1BQU1DLGFBQWEsR0FBSXhXLElBQUQsSUFBVTtBQUM5QixTQUFRQSxJQUFJLENBQUN5VyxnQkFBTCxLQUEwQiwwQkFBMUIsSUFBd0R6VyxJQUFJLENBQUNySSxZQUFMLEtBQXNCLE1BQTlFLElBQXdGcUksSUFBSSxDQUFDMFcsUUFBckc7QUFDRCxDQUZEOztBQUlBLElBQUkxdEIsTUFBSixFQUFZO0FBQ1ZBLFFBQU0sQ0FBQ290QixTQUFQLENBQWlCeEQsU0FBakIsQ0FBMkJ6cUIsV0FBM0IsQ0FBdUN3dUIsR0FBRyxJQUFJO0FBQUE7O0FBQzVDaHVCLFdBQU8sQ0FBQ0MsSUFBUixDQUFhLFdBQWIsRUFBMEIrdEIsR0FBMUI7QUFDQSxRQUFJLENBQUNQLFNBQVMsQ0FBQ08sR0FBRyxDQUFDbnlCLEVBQUwsQ0FBZCxFQUF3QjtBQUN4QixVQUFNO0FBQUUyQixTQUFGO0FBQU8vQjtBQUFQLFFBQWVneUIsU0FBUyxDQUFDTyxHQUFHLENBQUNueUIsRUFBTCxDQUE5QjtBQUNBLFVBQU07QUFBRUYsU0FBRyxFQUFFO0FBQUVFLFVBQUUsRUFBRUQ7QUFBTixPQUFQO0FBQXNCRjtBQUF0QixRQUFrQ0QsR0FBeEM7O0FBRUEsUUFBSSxlQUFBdXlCLEdBQUcsQ0FBQ25wQixLQUFKLGdDQUFXb3BCLE9BQVgsTUFBdUIsVUFBM0IsRUFBdUM7QUFDckMxSSx3R0FBVSxDQUFDM3BCLEtBQUQsRUFBUSxlQUFSLEVBQXlCO0FBQ2pDd04sWUFBSSxFQUFFLE1BRDJCO0FBQ25Cdk4sVUFBRSxFQUFFMkIsR0FBRyxDQUFDM0IsRUFEVztBQUNQcXlCLGtCQUFVLEVBQUVGLEdBQUcsQ0FBQ255QjtBQURULE9BQXpCLEVBRVA7QUFBRUg7QUFBRixPQUZPLENBQVY7QUFHQSxhQUFPK3hCLFNBQVMsQ0FBQ08sR0FBRyxDQUFDbnlCLEVBQUwsQ0FBaEI7QUFDQSxhQUFPMnhCLFFBQVEsQ0FBQ2h3QixHQUFHLENBQUMzQixFQUFMLENBQWY7QUFDRDtBQUNGLEdBYkQ7QUFjRDs7QUFFRGYsTUFBTSxDQUFDQyxNQUFQLENBQWNDLGlEQUFkLEVBQXdCO0FBQ3RCbXpCLGdCQUFjLEVBQUVDLGNBRE07O0FBRXRCLFFBQU1DLGlCQUFOLENBQXdCenlCLEtBQXhCLEVBQStCSCxHQUEvQixFQUFvQztBQUNsQyxVQUFNRSxHQUFHLEdBQUc4RCxVQUFVLElBQUksQ0FBQ2hFLEdBQUcsQ0FBQ0YsR0FBSixJQUFXLEVBQVosRUFBZ0J3TyxVQUFoQixDQUEyQixPQUEzQixDQUFkLEtBQ1AsTUFBTTFLLE9BQU8sQ0FBQ3dPLElBQVIsQ0FBYWpNLEdBQWIsQ0FBaUJoRyxLQUFqQixFQUF3QitELEtBQXhCLENBQThCb0ksb0ZBQTlCLENBREMsQ0FBWjtBQUVBLFdBQU9wTSxHQUFHLElBQUksQ0FBQ0EsR0FBRyxDQUFDa0IsVUFBSixJQUFrQmxCLEdBQUcsQ0FBQ0osR0FBdEIsSUFBNkIsRUFBOUIsRUFBa0N3TyxVQUFsQyxDQUE2Q3dqQixnQkFBN0MsQ0FBZDtBQUNELEdBTnFCOztBQU90QjtBQUNBZSxhQUFXLENBQUNqWCxJQUFELEVBQU81YixHQUFQLEVBQVk7QUFDckIsVUFBTTtBQUFFRSxTQUFHLEVBQUU7QUFBRUUsVUFBRSxFQUFFRDtBQUFOLE9BQVA7QUFBc0JGO0FBQXRCLFFBQWtDRCxHQUF4QztBQUNBLFVBQU07QUFBRUksUUFBRjtBQUFNMHlCO0FBQU4sUUFBeUJsWCxJQUEvQixDQUZxQixDQUlyQjs7QUFDQSxRQUFJaFgsTUFBTSxJQUFJd3RCLGFBQWEsQ0FBQ3hXLElBQUQsQ0FBM0IsRUFBbUM7QUFDakM7QUFDQSxhQUFPaFgsTUFBTSxDQUFDb3RCLFNBQVAsQ0FBaUJlLFFBQWpCLENBQTBCO0FBQy9CanpCLFdBQUcsRUFBRThiLElBQUksQ0FBQzliLEdBRHFCO0FBRS9CO0FBQ0FrekIsZ0JBQVEsRUFBRXBYLElBQUksQ0FBQzBXO0FBSGdCLE9BQTFCLEVBSUpHLFVBQVUsSUFBSTtBQUNmO0FBQ0FWLGdCQUFRLENBQUMzeEIsRUFBRCxDQUFSLEdBQWU7QUFBRUEsWUFBRjtBQUFNcXlCLG9CQUFOO0FBQWtCdHlCLGVBQWxCO0FBQXlCMnlCLHdCQUF6QjtBQUF5Q0csYUFBRyxFQUFFO0FBQTlDLFNBQWY7QUFDQWpCLGlCQUFTLENBQUNTLFVBQUQsQ0FBVCxHQUF3QjtBQUFFMXdCLGFBQUcsRUFBRWd3QixRQUFRLENBQUMzeEIsRUFBRCxDQUFmO0FBQXFCd2IsY0FBckI7QUFBMkI1YjtBQUEzQixTQUF4Qjs7QUFDQSxZQUFJOHlCLGNBQUosb0JBQUlBLGNBQWMsQ0FBRTd3QixRQUFoQixDQUF5QixVQUF6QixDQUFKLEVBQTBDO0FBQ3hDNm5CLDRHQUFVLENBQUMzcEIsS0FBRCxFQUFRLGVBQVIsRUFBeUI7QUFBRXdOLGdCQUFJLEVBQUUsVUFBUjtBQUFvQnZOLGNBQXBCO0FBQXdCcXlCO0FBQXhCLFdBQXpCLEVBQStEO0FBQUV4eUI7QUFBRixXQUEvRCxDQUFWO0FBQ0Q7QUFDRixPQVhNLENBQVA7QUFZRCxLQW5Cb0IsQ0FvQnJCOzs7QUFFQTh4QixZQUFRLENBQUMzeEIsRUFBRCxDQUFSLEdBQWU7QUFDYkEsUUFEYTtBQUViRCxXQUZhO0FBR2IyeUIsb0JBSGE7QUFJYkcsU0FBRyxFQUFFLElBQUlDLGNBQUo7QUFKUSxLQUFmO0FBTUEsS0FBQ2hCLFdBQVcsQ0FBQy94QixLQUFELENBQVgsS0FBdUIreEIsV0FBVyxDQUFDL3hCLEtBQUQsQ0FBWCxHQUFxQixFQUE1QyxDQUFELEVBQWtEQyxFQUFsRCxJQUF3RCxDQUF4RDtBQUNBK3lCLGVBQVcsQ0FBQ3ZYLElBQUQsRUFBTzViLEdBQVAsRUFBWU8sR0FBRyxJQUFJd3hCLFFBQVEsQ0FBQzN4QixFQUFELENBQVIsSUFDNUIwcEIsa0dBQVUsQ0FBQzNwQixLQUFELEVBQVEsZUFBUixFQUF5QkksR0FBekIsRUFBOEI7QUFBRU47QUFBRixLQUE5QixDQURELENBQVg7QUFHRCxHQXhDcUI7O0FBeUN0QjtBQUNBbXpCLGNBQVksQ0FBQ2h6QixFQUFELEVBQUs7QUFDZixVQUFNMkIsR0FBRyxHQUFHZ3dCLFFBQVEsQ0FBQzN4QixFQUFELENBQXBCOztBQUNBLFFBQUkyQixHQUFKLEVBQVM7QUFDUDtBQUNBLFVBQUk2QyxNQUFKLEVBQVk7QUFDVjtBQUNBQSxjQUFNLENBQUNvdEIsU0FBUCxDQUFpQjFmLE1BQWpCLENBQXdCdlEsR0FBRyxDQUFDM0IsRUFBNUI7QUFDQSxlQUFPMnhCLFFBQVEsQ0FBQ2h3QixHQUFHLENBQUMzQixFQUFMLENBQWY7QUFDRCxPQUpELE1BSU87QUFDTDJCLFdBQUcsQ0FBQ2t4QixHQUFKLENBQVFJLEtBQVI7QUFDQUMsb0JBQVksQ0FBQ3Z4QixHQUFELENBQVo7QUFDRDtBQUNGO0FBQ0YsR0F2RHFCOztBQXdEdEJ3eEIsWUFBVSxDQUFDenpCLEdBQUQsRUFBTTtBQUNkLFVBQU00QyxLQUFLLEdBQUdPLDhDQUFLLENBQUM2VyxHQUFOLENBQVcsV0FBVWhhLEdBQUksRUFBekIsQ0FBZDs7QUFDQSxRQUFJNEMsS0FBSixFQUFXO0FBQ1RELGtCQUFZLENBQUNDLEtBQUQsQ0FBWjtBQUNBNFYsU0FBRyxDQUFDZ0wsZUFBSixDQUFvQnhqQixHQUFwQjtBQUNEO0FBQ0Y7O0FBOURxQixDQUF4QjtBQWlFQSxNQUFNMHpCLGNBQWMsR0FBRyxDQUNyQixZQURxQixFQUVyQjtBQUNBO0FBQ0EsZ0JBSnFCLEVBS3JCLGlCQUxxQixFQU1yQixnQ0FOcUIsRUFPckIsK0JBUHFCLEVBUXJCLFlBUnFCLEVBU3JCLGdCQVRxQixFQVVyQixRQVZxQixFQVdyQixTQVhxQixFQVlyQixNQVpxQixFQWFyQixLQWJxQixFQWNyQixRQWRxQixFQWVyQixNQWZxQixFQWdCckIsWUFoQnFCLEVBaUJyQixRQWpCcUIsRUFrQnJCLFNBbEJxQixFQW1CckIsSUFuQnFCLEVBb0JyQixTQXBCcUIsRUFxQnJCLG1CQXJCcUIsRUFzQnJCLFNBdEJxQixFQXVCckIsS0F2QnFCLENBQXZCLEMsQ0F5QkE7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHLENBQUMsTUFBTTtBQUM1QjtBQUNBLFFBQU1DLFNBQVMsR0FBRztBQUNoQnhoQixRQUFJLEVBQUUsQ0FBQyxZQUFELENBRFU7QUFFaEJDLFNBQUssRUFBRSxDQUFDLGdCQUFEO0FBRlMsR0FBbEI7QUFJQSxRQUFNdWQsYUFBYSxHQUFHLENBQ3BCOXJCLE9BQU8sQ0FBQ29PLFVBQVIsQ0FBbUIyaEIsMEJBQW5CLENBQThDakUsYUFEMUIsRUFFcEJ0ZSxNQUZvQixDQUViQyxPQUZhLENBQXRCO0FBR0EsUUFBTXVpQixlQUFlLEdBQUcsRUFBeEI7QUFDQTs7QUFDQSxRQUFNQyxVQUFVLEdBQUc5ZCxNQUFNLElBQUlBLE1BQU0sQ0FBQzdPLElBQVAsS0FBZ0IycUIsU0FBN0M7O0FBQ0EsUUFBTWlDLFdBQVcsR0FBRy9kLE1BQU0sSUFBSSxDQUFDLGNBQWMxTyxJQUFkLENBQW1CME8sTUFBTSxDQUFDN08sSUFBMUIsQ0FBL0I7O0FBQ0EsUUFBTTZzQixVQUFVLEdBQUdoZSxNQUFNLElBQUlBLE1BQU0sQ0FBQzdPLElBQVAsS0FBZ0IycUIsU0FBN0M7O0FBQ0EsUUFBTW1DLGNBQWMsR0FBR2plLE1BQU0sSUFBSWdlLFVBQVUsQ0FBQ2hlLE1BQUQsQ0FBVixJQUFzQitkLFdBQVcsQ0FBQy9kLE1BQUQsQ0FBbEU7O0FBQ0EsUUFBTWtlLGFBQWEsR0FBRyxpQkFBdEI7QUFDQSxRQUFNQyxtQkFBbUIsR0FBRyx5RUFBNUI7QUFDQSxRQUFNQyxrQkFBa0IsR0FBRyxnREFBM0I7QUFDQSxRQUFNQyxhQUFhLEdBQUc7QUFDcEJDLFVBQU0sRUFBRSxRQURZO0FBRXBCQyxPQUFHLEVBQUUsS0FGZTtBQUdwQkMsUUFBSSxFQUFFO0FBSGMsR0FBdEI7QUFLQTs7Ozs7O0FBS0EsUUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQ0MsV0FBRCxFQUFjMXlCLEdBQWQsRUFBbUJqQyxHQUFuQixLQUEyQjtBQUNsRCxRQUFJOFMsQ0FBQyxHQUFHc2hCLG1CQUFtQixDQUFDUSxJQUFwQixDQUF5QkQsV0FBekIsQ0FBUjs7QUFDQSxRQUFJN2hCLENBQUosRUFBTztBQUFBOztBQUNMLFlBQU0sR0FBR3JFLE1BQUgsRUFBV3JILElBQVgsR0FBbUJtQixLQUFuQixFQUEwQnNzQixNQUExQixJQUFvQy9oQixDQUExQztBQUNBLFlBQU1naUIsR0FBRyxHQUFHLEVBQVo7QUFDQSxZQUFNQyxNQUFNLEdBQUd0bUIsTUFBTSxLQUFLLE1BQTFCO0FBQ0E0bEIsd0JBQWtCLENBQUNXLFNBQW5CLEdBQStCLENBQS9COztBQUNBLGFBQVFsaUIsQ0FBQyxHQUFHdWhCLGtCQUFrQixDQUFDTyxJQUFuQixDQUF3QkMsTUFBeEIsQ0FBWixFQUE4QztBQUM1Q0MsV0FBRyxDQUFDaGlCLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS21pQixXQUFMLEVBQUQsQ0FBSCxHQUEwQm5pQixDQUFDLENBQUMsQ0FBRCxDQUEzQjtBQUNEOztBQUNELFlBQU1vaUIsUUFBUSxvQkFBR0osR0FBRyxDQUFDSSxRQUFQLHFCQUFHLGNBQWNELFdBQWQsRUFBakI7QUFDQW54QixhQUFPLENBQUNxeEIsT0FBUixDQUFnQjdzQixHQUFoQixDQUFvQjtBQUNsQnRJLFdBRGtCO0FBRWxCb0gsWUFGa0I7QUFHbEJtQixhQUhrQjtBQUlsQjlHLGNBQU0sRUFBRXN6QixNQUFNLEdBQUczYixTQUFILEdBQWUwYixHQUFHLENBQUNyekIsTUFKZjtBQUtsQjJ6QixzQkFBYyxFQUFFdnlCLElBQUksQ0FBQzZhLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxJQUFJamIsSUFBSixDQUFTcXlCLEdBQUcsQ0FBQyxTQUFELENBQUgsR0FBaUIsSUFBakIsSUFBeUJBLEdBQUcsQ0FBQ08sT0FBdEMsQ0FBYixLQUFnRWpjLFNBTDlEO0FBTWxCa2MsZ0JBQVEsRUFBRSxjQUFjUixHQU5OO0FBT2xCdGhCLFlBQUksRUFBRXVoQixNQUFNLEdBQUcsR0FBSCxHQUFTRCxHQUFHLENBQUN0aEIsSUFQUDtBQVFsQjBoQixnQkFBUSxFQUFFWixhQUFhLENBQUNZLFFBQUQsQ0FSTDtBQVNsQkssY0FBTSxFQUFFdjFCLEdBQUcsQ0FBQ3dPLFVBQUosQ0FBZSxRQUFmLE1BQTZCLENBQUMsQ0FBQ0MsTUFBRixJQUFZeW1CLFFBQVEsS0FBSyxNQUF6QixJQUFtQyxZQUFZSixHQUE1RSxDQVRVO0FBVWxCVSxlQUFPLEVBQUV2ekIsR0FBRyxDQUFDdXpCO0FBVkssT0FBcEI7QUFZRDtBQUNGLEdBeEJEOztBQXlCQSxRQUFNQyxTQUFTLEdBQUc7QUFDaEJDLHVCQUFtQixFQUFFO0FBQ25CMXBCLGFBQU8sRUFBRSxDQUFDLGdCQUFELEVBQW1CLFVBQW5CLEVBQStCLEdBQUc0akIsYUFBbEMsQ0FEVTs7QUFFbkI7QUFDQStGLGNBQVEsQ0FBQztBQUFFQyxzQkFBYyxFQUFFeHlCLE9BQWxCO0FBQTJCeXlCO0FBQTNCLE9BQUQsRUFBeUM7QUFBQTs7QUFDL0M7QUFDQSxjQUFNQyxLQUFLLEdBQUcsa0JBQUExeUIsT0FBTyxDQUFDNFUsSUFBUixDQUFhK2IsVUFBYixvQ0FBMEJ4ckIsS0FBMUIsS0FBbUM0cEIsTUFBTSxDQUFDMEQsU0FBRCxDQUF2RDtBQUNBLGNBQU01ekIsR0FBRyxHQUFHNnpCLEtBQUssSUFBSTdELFFBQVEsQ0FBQzZELEtBQUQsQ0FBN0I7O0FBQ0EsWUFBSUEsS0FBSyxJQUFJN3pCLEdBQWIsRUFBa0I7QUFDaEJrd0IsZ0JBQU0sQ0FBQzBELFNBQUQsQ0FBTixHQUFvQkMsS0FBcEI7QUFDQTd6QixhQUFHLENBQUM4ekIsTUFBSixHQUFhRixTQUFiO0FBQ0F6eUIsaUJBQU8sR0FBRyxDQUFDbkIsR0FBRyxDQUFDK3pCLGNBQUosR0FBcUI1eUIsT0FBTyxDQUFDa08sTUFBUixDQUFlMGlCLFdBQWYsQ0FBckIsR0FBbUQ1d0IsT0FBcEQsRUFDVDJ0QixNQURTLENBQ0YrQyxlQUFlLENBQUNnQyxLQUFELENBQWYsSUFBMEIsRUFEeEIsRUFFVHhrQixNQUZTLENBRUZyUCxHQUFHLENBQUNrVyxTQUFKLEdBQWdCK2IsY0FBaEIsR0FBaUNELFVBRi9CLENBQVY7QUFHRDs7QUFDRCxlQUFPO0FBQUUyQix3QkFBYyxFQUFFeHlCO0FBQWxCLFNBQVA7QUFDRDs7QUFma0IsS0FETDtBQWtCaEJzc0IscUJBQWlCLEVBQUU7QUFDakIxakIsYUFBTyxFQUFFLENBQUMsaUJBQUQsRUFBb0IsVUFBcEIsRUFBZ0MsR0FBRzRqQixhQUFuQyxDQURROztBQUVqQjtBQUNBK0YsY0FBUSxDQUFDO0FBQUU1Rix1QkFBZSxFQUFFM3NCLE9BQW5CO0FBQTRCeXlCLGlCQUE1QjtBQUF1QzcxQjtBQUF2QyxPQUFELEVBQStDO0FBQ3JELGNBQU1pQyxHQUFHLEdBQUdnd0IsUUFBUSxDQUFDRSxNQUFNLENBQUMwRCxTQUFELENBQVAsQ0FBcEI7O0FBQ0EsWUFBSTV6QixHQUFKLEVBQVM7QUFDUCxjQUFJQSxHQUFHLENBQUNrVyxTQUFKLElBQWlCbFcsR0FBRyxDQUFDdXpCLE9BQXpCLEVBQWtDO0FBQ2hDcHlCLG1CQUFPLEdBQUdBLE9BQU8sQ0FBQ2tPLE1BQVIsQ0FBZTJrQixDQUFDLElBQ3hCLENBQUM5QixhQUFhLENBQUM1c0IsSUFBZCxDQUFtQjB1QixDQUFDLENBQUM3dUIsSUFBckIsQ0FBRCxJQUNHLENBQUNuRixHQUFHLENBQUN1ekIsT0FEUixJQUVHZCxnQkFBZ0IsQ0FBQ3VCLENBQUMsQ0FBQzF0QixLQUFILEVBQVV0RyxHQUFWLEVBQWVqQyxHQUFmLENBSFgsQ0FBVjtBQUtEOztBQUNEaUMsYUFBRyxDQUFDOHRCLGVBQUosR0FBc0Izc0IsT0FBTyxDQUFDeUcsR0FBUixDQUFZcXNCLHNCQUFaLEVBQW9DdmdCLElBQXBDLENBQXlDLEVBQXpDLENBQXRCO0FBQ0EsaUJBQU87QUFBRW9hLDJCQUFlLEVBQUUzc0I7QUFBbkIsV0FBUDtBQUNEO0FBQ0Y7O0FBaEJnQjtBQWxCSCxHQUFsQixDQXJENEIsQ0EwRjVCO0FBQ0E7O0FBQ0EsTUFBSW90QiwwRkFBRSxDQUFDMXJCLE1BQUgsSUFBYSxFQUFiLElBQW1CMHJCLDBGQUFFLENBQUMxckIsTUFBSCxJQUFhLEVBQXBDLEVBQXdDO0FBQ3RDaEIsV0FBTyxDQUFDb08sVUFBUixDQUFtQndqQixtQkFBbkIsQ0FBdUN6eEIsV0FBdkMsQ0FBbUR1SSxvRkFBbkQsRUFBeURvbkIsU0FBekQsRUFBb0UsQ0FBQyxjQUFELENBQXBFO0FBQ0Q7O0FBQ0QsU0FBTztBQUNMdUMsT0FBRyxDQUFDTCxLQUFELEVBQVExeUIsT0FBUixFQUFpQjtBQUNsQjtBQUNBMHdCLHFCQUFlLENBQUNnQyxLQUFELENBQWYsR0FBeUIxeUIsT0FBekIsQ0FGa0IsQ0FHbEI7O0FBQ0EsZUFBVzBGLG1HQUFYLEVBQUEyc0IsU0FBUyxFQUFlLENBQUMsQ0FBQ3J1QixJQUFELEVBQU87QUFBRXV1QixnQkFBRjtBQUFZM3BCO0FBQVosT0FBUCxDQUFELEtBQW1DO0FBQ3pEbEksZUFBTyxDQUFDb08sVUFBUixDQUFtQjlLLElBQW5CLEVBQXlCbkQsV0FBekIsQ0FBcUMweEIsUUFBckMsRUFBK0MvQixTQUEvQyxFQUEwRDVuQixPQUExRDtBQUNELE9BRlEsQ0FBVDtBQUdELEtBUkk7O0FBU0xtaUIsT0FBRyxDQUFDMkgsS0FBRCxFQUFRO0FBQ1QsVUFBSUEsS0FBSyxJQUFJaEMsZUFBYixFQUE4QjtBQUM1QixlQUFPQSxlQUFlLENBQUNnQyxLQUFELENBQXRCOztBQUNBLFlBQUlNLCtGQUFPLENBQUN0QyxlQUFELENBQVgsRUFBOEI7QUFDNUIsbUJBQVdockIsbUdBQVgsRUFBQTJzQixTQUFTLEVBQWUsQ0FBQyxDQUFDcnVCLElBQUQsRUFBTztBQUFFdXVCO0FBQUYsV0FBUCxDQUFELEtBQTBCO0FBQ2hEN3hCLG1CQUFPLENBQUNvTyxVQUFSLENBQW1COUssSUFBbkIsRUFBeUJxTCxjQUF6QixDQUF3Q2tqQixRQUF4QztBQUNELFdBRlEsQ0FBVDtBQUdEO0FBQ0Y7QUFDRjs7QUFsQkksR0FBUDtBQW9CRCxDQW5Ic0IsR0FBdkI7QUFxSEE7Ozs7QUFFQSxNQUFNVSxVQUFVLEdBQUcsR0FBbkI7O0FBRUEsZUFBZUMsVUFBZixDQUEwQkMsUUFBMUIsRUFBb0NwYSxLQUFwQyxFQUEyQztBQUN6QyxTQUFPcWEsbUdBQVcsQ0FBQ0QsUUFBRCxFQUFXcGEsS0FBSyxHQUFHa2EsVUFBbkIsRUFBK0JBLFVBQS9CLENBQWxCO0FBQ0Q7O0FBRUQsU0FBU0ksY0FBVCxDQUF3QkYsUUFBeEIsRUFBa0M7QUFDaEMsUUFBTXYyQixHQUFHLEdBQUd3WSxHQUFHLENBQUM2SyxlQUFKLENBQW9Ca1QsUUFBcEIsQ0FBWjtBQUNBcHpCLGdEQUFLLENBQUMwTixHQUFOLENBQVcsV0FBVTdRLEdBQUksRUFBekIsRUFBNEJpQixVQUFVLENBQUN4QixpREFBUSxDQUFDZzBCLFVBQVYsRUFBc0IsSUFBdEIsRUFBNEJ6ekIsR0FBNUIsQ0FBdEMsRUFBd0UsSUFBeEU7QUFDQSxTQUFPQSxHQUFQO0FBQ0Q7QUFFRDs7O0FBQ0EsU0FBUzAyQixrQkFBVCxDQUE0QnowQixHQUE1QixFQUFpQztBQUMvQixNQUFJMDBCLFdBQVcsR0FBR3J5QixPQUFPLENBQUMyQyxPQUFSLEVBQWxCO0FBQ0EsTUFBSTJ2QixXQUFKO0FBQ0EsTUFBSUMsUUFBSjtBQUNBLE1BQUlDLFNBQUo7QUFDQSxNQUFJUCxRQUFKO0FBQ0EsTUFBSVEsWUFBSjtBQUNBLE1BQUloSCxlQUFKO0FBQ0EsTUFBSWlILElBQUksR0FBRyxLQUFYO0FBQ0EsUUFBTTtBQUFFMTJCLE1BQUY7QUFBTTIyQixXQUFOO0FBQWVDLFdBQWY7QUFBd0IvRDtBQUF4QixNQUFnQ2x4QixHQUF0QyxDQVQrQixDQVUvQjs7QUFDQSxRQUFNazFCLFFBQVEsR0FBR0YsT0FBTyxJQUFJUixjQUFYLElBQTZCUyxPQUFPLElBQUlaLFVBQXpEOztBQUNBLFFBQU1jLGtCQUFrQixHQUFHLE1BQU07QUFDL0IsVUFBTWgwQixPQUFPLEdBQUduQixHQUFHLENBQUM4dEIsZUFBSixJQUF1Qm9ELEdBQUcsQ0FBQ2tFLHFCQUFKLEVBQXZDOztBQUNBLFFBQUl0SCxlQUFlLEtBQUszc0IsT0FBeEIsRUFBaUM7QUFDL0Iyc0IscUJBQWUsR0FBRzNzQixPQUFsQjtBQUNBLGFBQU87QUFBRTJzQjtBQUFGLE9BQVA7QUFDRDtBQUNGLEdBTkQ7O0FBT0EsU0FBUTBDLEdBQUQsSUFBUztBQUNkLFVBQU01a0IsSUFBSSxHQUFHNGtCLEdBQUcsQ0FBQzVrQixJQUFqQjs7QUFDQSxRQUFJLENBQUMrb0IsV0FBTCxFQUFrQjtBQUNoQkEsaUJBQVcsR0FBR3pELEdBQUcsQ0FBQ21FLGlCQUFKLENBQXNCLGNBQXRCLEtBQXlDLDBCQUF2RDtBQUNEOztBQUNELFFBQUluRSxHQUFHLENBQUNvRCxRQUFKLEtBQWlCQSxRQUFyQixFQUErQjtBQUM3QkEsY0FBUSxHQUFHcEQsR0FBRyxDQUFDb0QsUUFBZjtBQUNBUyxVQUFJLEdBQUcsS0FBUDs7QUFDQSxVQUFJO0FBQ0ZELG9CQUFZLEdBQUc1RCxHQUFHLENBQUM0RCxZQUFuQjtBQUNBLFlBQUlBLFlBQVksS0FBS1IsUUFBckIsRUFBK0JRLFlBQVksR0FBRyxDQUFDLE1BQUQsQ0FBZjtBQUNoQyxPQUhELENBR0UsT0FBTzF5QixDQUFQLEVBQVUsQ0FDVjtBQUNEOztBQUNELFVBQUksQ0FBQzR5QixPQUFPLElBQUlDLE9BQVosS0FBd0JYLFFBQTVCLEVBQXNDO0FBQ3BDTSxnQkFBUSxHQUFHTixRQUFRLENBQUNuaUIsSUFBcEI7QUFDQTBpQixpQkFBUyxHQUFHSSxPQUFPLElBQUlyMEIsSUFBSSxDQUFDMDBCLElBQUwsQ0FBVVYsUUFBUSxHQUFHUixVQUFyQixDQUFYLElBQStDLENBQTNEO0FBQ0Q7QUFDRjs7QUFDRCxVQUFNbUIsWUFBWSxHQUFHdjFCLEdBQUcsQ0FBQyt3QixjQUFKLENBQW1CN3dCLFFBQW5CLENBQTRCMEwsSUFBNUIsQ0FBckIsQ0FuQmMsQ0FvQmQ7O0FBQ0EsVUFBTTRwQixrQkFBa0IsR0FBR3RFLEdBQUcsQ0FBQ3VFLFVBQUosS0FBbUIsQ0FBbkIsSUFBd0JGLFlBQXhCLElBQXdDLENBQUNSLElBQXBFO0FBQ0FMLGVBQVcsR0FBR0EsV0FBVyxDQUFDcHBCLElBQVosQ0FBaUIsWUFBWTtBQUN6QyxZQUFNdEwsR0FBRyxDQUFDMDFCLEVBQUosQ0FBTztBQUNYVixlQURXO0FBRVhDLGVBRlc7QUFHWE4sbUJBSFc7QUFJWEMsZ0JBSlc7QUFLWHYyQixVQUxXO0FBTVh3MkIsaUJBTlc7QUFPWGpwQixZQVBXO0FBUVhqTyxZQUFJLEVBQUU0M0IsWUFBWSxJQUFJO0FBQ3BCSSxrQkFBUSxFQUFFekUsR0FBRyxDQUFDMEU7QUFERSxXQUViVCxrQkFBa0IsRUFGTCxNQUdienNCLHlHQUFVLENBQUN3b0IsR0FBRCxFQUFNLENBQUMsWUFBRCxFQUFlLFFBQWYsRUFBeUIsWUFBekIsQ0FBTixDQUhHLE1BSVosWUFBWVYsR0FBYixJQUFxQjluQix5R0FBVSxDQUFDOG5CLEdBQUQsRUFBTSxDQUFDLGtCQUFELEVBQXFCLFFBQXJCLEVBQStCLE9BQS9CLENBQU4sQ0FKbEI7QUFLaEI4RCxrQkFBUSxFQUFFa0Isa0JBQWtCLEdBQ3hCWCxTQUFTLEtBQUksTUFBTUssUUFBUSxDQUFDWixRQUFELEVBQVcsQ0FBWCxDQUFsQixDQUFULElBQTRDQSxRQURwQixHQUV4QixJQVBZO0FBUWhCUSxzQkFBWSxFQUFFVSxrQkFBa0IsR0FDNUJWLFlBRDRCLEdBRTVCO0FBVlk7QUFSUCxPQUFQLENBQU47O0FBcUJBLFVBQUlVLGtCQUFKLEVBQXdCO0FBQ3RCLGFBQUssSUFBSWh3QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcXZCLFNBQXBCLEVBQStCcnZCLENBQUMsSUFBSSxDQUFwQyxFQUF1QztBQUNyQyxnQkFBTXhGLEdBQUcsQ0FBQzAxQixFQUFKLENBQU87QUFDWHIzQixjQURXO0FBRVh3M0IsaUJBQUssRUFBRTtBQUNMQyxpQkFBRyxFQUFFdHdCLENBQUMsR0FBRzR1QixVQURKO0FBRUx6MkIsa0JBQUksRUFBRSxNQUFNdTNCLFFBQVEsQ0FBQ1osUUFBRCxFQUFXOXVCLENBQVgsQ0FGZjtBQUdMdXdCLGtCQUFJLEVBQUV2d0IsQ0FBQyxHQUFHLENBQUosS0FBVXF2QjtBQUhYO0FBRkksV0FBUCxDQUFOO0FBUUQ7QUFDRjs7QUFDRCxVQUFJanBCLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQ3RCMmxCLG9CQUFZLENBQUN2eEIsR0FBRCxDQUFaO0FBQ0Q7QUFDRixLQXJDYSxDQUFkO0FBc0NELEdBNUREO0FBNkREOztBQUVELFNBQVNnMkIsZUFBVCxDQUF5QkMsV0FBekIsRUFBc0M7QUFDcEMsU0FBT3hFLGNBQWMsQ0FBQ3Z4QixRQUFmLENBQXdCKzFCLFdBQXhCLEtBQ0ZBLFdBQVcsQ0FBQzFwQixVQUFaLENBQXVCLFFBQXZCLENBREUsSUFFRjBwQixXQUFXLENBQUMxcEIsVUFBWixDQUF1QixNQUF2QixDQUZMO0FBR0Q7QUFFRDs7Ozs7OztBQUtBLGVBQWU2a0IsV0FBZixDQUEyQnZYLElBQTNCLEVBQWlDNWIsR0FBakMsRUFBc0N5M0IsRUFBdEMsRUFBMEM7QUFDeEMsUUFBTTtBQUFFdjNCO0FBQUYsTUFBVUYsR0FBaEI7QUFDQSxRQUFNO0FBQUVpNEI7QUFBRixNQUFnQi8zQixHQUF0QjtBQUNBLFFBQU07QUFBRStYLGFBQUY7QUFBYTdYLE1BQWI7QUFBaUJpeUIsb0JBQWpCO0FBQW1DNkYsV0FBbkM7QUFBNENwNEI7QUFBNUMsTUFBb0Q4YixJQUExRDtBQUNBLFFBQU03WixHQUFHLEdBQUdnd0IsUUFBUSxDQUFDM3hCLEVBQUQsQ0FBcEI7QUFDQSxNQUFJLENBQUMyQixHQUFELElBQVFBLEdBQUcsQ0FBQzAxQixFQUFoQixFQUFvQjtBQUNwQjExQixLQUFHLENBQUMwMUIsRUFBSixHQUFTQSxFQUFUO0FBQ0ExMUIsS0FBRyxDQUFDa1csU0FBSixHQUFnQkEsU0FBaEI7QUFDQSxRQUFNO0FBQUVnYjtBQUFGLE1BQVVseEIsR0FBaEI7QUFDQSxRQUFNbzJCLFNBQVMsR0FBRyxFQUFsQixDQVR3QyxDQVV4Qzs7QUFDQSxRQUFNbkIsT0FBTyxHQUFHLENBQUNoekIsVUFBRCxJQUFlaTBCLFNBQS9CO0FBQ0EsUUFBTWxCLE9BQU8sR0FBR21CLE9BQU8sSUFBSSxDQUFDbDBCLFVBQVosSUFBMEIsQ0FBQ2kwQixTQUEzQztBQUNBLFFBQU0sQ0FBQzVrQixJQUFELEVBQU9xakIsV0FBUCxJQUFzQjBCLFVBQVUsQ0FBQ3hjLElBQUksQ0FBQ2xjLElBQU4sQ0FBdEMsQ0Fid0MsQ0FjeEM7O0FBQ0FxQyxLQUFHLENBQUNnMUIsT0FBSixHQUFjQSxPQUFkO0FBQ0FoMUIsS0FBRyxDQUFDaTFCLE9BQUosR0FBY0EsT0FBZCxDQWhCd0MsQ0FpQnhDO0FBQ0E7O0FBQ0EsTUFBSXFCLGlCQUFpQixHQUFHLENBQUNwZ0IsU0FBRCxLQUFlZ2dCLFNBQVMsSUFBSWowQixVQUE1QixDQUF4QjtBQUNBaXZCLEtBQUcsQ0FBQ2hJLElBQUosQ0FBU3JQLElBQUksQ0FBQ3pJLE1BQUwsSUFBZSxLQUF4QixFQUErQnJULEdBQS9CLEVBQW9DLElBQXBDLEVBQTBDOGIsSUFBSSxDQUFDbE8sSUFBTCxJQUFhLEVBQXZELEVBQTJEa08sSUFBSSxDQUFDekQsUUFBTCxJQUFpQixFQUE1RTtBQUNBOGEsS0FBRyxDQUFDcUYsZ0JBQUosQ0FBcUJ6RyxTQUFyQixFQUFnQ3p4QixFQUFoQztBQUNBLE1BQUlzMkIsV0FBSixFQUFpQnpELEdBQUcsQ0FBQ3FGLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDNUIsV0FBckM7QUFDakIsV0FBYzl0QixtR0FBZCxFQUFBZ1QsSUFBSSxDQUFDMVksT0FBTCxFQUEyQixDQUFDLENBQUNnRSxJQUFELEVBQU9tQixLQUFQLENBQUQsS0FBbUI7QUFDNUMsVUFBTWt3QixTQUFTLEdBQUdyeEIsSUFBSSxDQUFDNnRCLFdBQUwsRUFBbEI7O0FBQ0EsUUFBSWdELGVBQWUsQ0FBQ1EsU0FBRCxDQUFuQixFQUFnQztBQUM5QkosZUFBUyxDQUFDN25CLElBQVYsQ0FBZTtBQUFFcEosWUFBRjtBQUFRbUI7QUFBUixPQUFmO0FBQ0QsS0FGRCxNQUVPLElBQUksQ0FBQ2t3QixTQUFTLENBQUNqcUIsVUFBVixDQUFxQixLQUFyQixDQUFMLEVBQWtDO0FBQ3ZDO0FBQ0Eya0IsU0FBRyxDQUFDcUYsZ0JBQUosQ0FBcUJweEIsSUFBckIsRUFBMkJtQixLQUEzQjtBQUNEOztBQUNELFFBQUlrd0IsU0FBUyxLQUFLLFFBQWxCLEVBQTRCO0FBQzFCRix1QkFBaUIsR0FBRyxLQUFwQjtBQUNEO0FBQ0YsR0FYRDtBQVlBcEYsS0FBRyxDQUFDMWYsWUFBSixHQUFtQixDQUFDeWpCLE9BQU8sSUFBSUQsT0FBWixLQUF3QixNQUF4QixJQUFrQ21CLE9BQWxDLElBQTZDLE1BQWhFO0FBQ0FqRixLQUFHLENBQUN1RixPQUFKLEdBQWM3MUIsSUFBSSxDQUFDNmEsR0FBTCxDQUFTLENBQVQsRUFBWTdhLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQVQsRUFBc0JnWixJQUFJLENBQUM0YyxPQUEzQixDQUFaLEtBQW9ELENBQWxFO0FBQ0EsTUFBSW5HLGdCQUFKLEVBQXNCWSxHQUFHLENBQUNaLGdCQUFKLENBQXFCQSxnQkFBckI7O0FBQ3RCLE1BQUlnRyxpQkFBSixFQUF1QjtBQUNyQnQyQixPQUFHLENBQUMrekIsY0FBSixHQUFxQixJQUFyQjs7QUFDQSxTQUFLLE1BQU1uYixLQUFYLElBQW9CLE1BQU0vVyxPQUFPLENBQUNxeEIsT0FBUixDQUFnQndELGtCQUFoQixFQUExQixFQUFnRTtBQUM5RCxVQUFJOWQsS0FBSyxDQUFDK2QsTUFBTixDQUFhejJCLFFBQWIsQ0FBc0IvQixHQUFHLENBQUNFLEVBQTFCLENBQUosRUFBbUM7QUFDakMsWUFBSTRELFVBQVUsR0FBRzJXLEtBQUssQ0FBQ3ZhLEVBQU4sS0FBYSxpQkFBaEIsR0FBb0N1YSxLQUFLLENBQUN2YSxFQUFOLEtBQWEsR0FBL0QsRUFBb0U7QUFDbEU7O0FBRUEyQixhQUFHLENBQUN1ekIsT0FBSixHQUFjM2EsS0FBSyxDQUFDdmEsRUFBcEI7QUFDRDs7QUFDRDtBQUNEO0FBQ0Y7O0FBQ0QsVUFBTW9DLEdBQUcsR0FBR0QsSUFBSSxDQUFDQyxHQUFMLEtBQWEsSUFBekI7QUFDQSxVQUFNeXlCLE9BQU8sR0FBRyxDQUFDLE1BQU1yeEIsT0FBTyxDQUFDcXhCLE9BQVIsQ0FBZ0J2SixNQUFoQjtBQUNyQjVyQixTQURxQjtBQUVyQncxQixhQUFPLEVBQUV2ekIsR0FBRyxDQUFDdXpCO0FBRlEsT0FHbEJoRiwwRkFBRSxDQUFDcUksT0FBSCxJQUFjLEVBQWQsSUFBb0I7QUFBRUMsc0JBQWdCLEVBQUU7QUFBcEIsS0FIRixFQUFQLEVBSVp4bkIsTUFKWSxDQUlMeW5CLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxPQUFGLElBQWFELENBQUMsQ0FBQzNELGNBQUYsR0FBbUIxeUIsR0FKaEMsQ0FBaEIsQ0FicUIsQ0FpQmlDOztBQUN0RCxRQUFJeXlCLE9BQU8sQ0FBQ24wQixNQUFaLEVBQW9CO0FBQ2xCcTNCLGVBQVMsQ0FBQzduQixJQUFWLENBQWU7QUFDYnBKLFlBQUksRUFBRSxRQURPO0FBRWJtQixhQUFLLEVBQUU0c0IsT0FBTyxDQUFDdHJCLEdBQVIsQ0FBWWt2QixDQUFDLElBQUssR0FBRUEsQ0FBQyxDQUFDM3hCLElBQUssSUFBRzJ4QixDQUFDLENBQUN4d0IsS0FBTSxHQUF0QyxFQUEwQ29OLElBQTFDLENBQStDLEdBQS9DO0FBRk0sT0FBZjtBQUlEO0FBQ0Y7O0FBQ0RnZSxnQkFBYyxDQUFDd0MsR0FBZixDQUFtQjcxQixFQUFuQixFQUF1QiszQixTQUF2QjtBQUNBLFFBQU12Z0IsUUFBUSxHQUFHNGUsa0JBQWtCLENBQUN6MEIsR0FBRCxDQUFuQztBQUNBQSxLQUFHLENBQUMrd0IsY0FBSixDQUFtQnhuQixPQUFuQixDQUEyQmluQixHQUFHLElBQUk7QUFBRVUsT0FBRyxDQUFFLEtBQUlWLEdBQUksRUFBVixDQUFILEdBQWtCM2EsUUFBbEI7QUFBNkIsR0FBakU7QUFDQXFiLEtBQUcsQ0FBQzhGLFNBQUosR0FBZ0JuaEIsUUFBaEIsQ0FsRXdDLENBa0VkOztBQUMxQnFiLEtBQUcsQ0FBQytGLElBQUosQ0FBUzNsQixJQUFUO0FBQ0Q7QUFFRDs7O0FBQ0EsU0FBU2lnQixZQUFULENBQXNCdnhCLEdBQXRCLEVBQTJCO0FBQ3pCLE1BQUlBLEdBQUcsQ0FBQzh6QixNQUFSLEVBQWdCLE9BQU81RCxNQUFNLENBQUNsd0IsR0FBRyxDQUFDOHpCLE1BQUwsQ0FBYjtBQUNoQixTQUFPOUQsUUFBUSxDQUFDaHdCLEdBQUcsQ0FBQzNCLEVBQUwsQ0FBZjtBQUNBLFNBQU8sQ0FBQzh4QixXQUFXLENBQUNud0IsR0FBRyxDQUFDNUIsS0FBTCxDQUFYLElBQTBCLEVBQTNCLEVBQStCNEIsR0FBRyxDQUFDM0IsRUFBbkMsQ0FBUDtBQUNBcXpCLGdCQUFjLENBQUN4RixHQUFmLENBQW1CbHNCLEdBQUcsQ0FBQzNCLEVBQXZCO0FBQ0Q7QUFFRDs7O0FBQ0EsU0FBU2c0QixVQUFULENBQW9CLENBQUMva0IsSUFBRCxFQUFPMUYsSUFBUCxFQUFhc3JCLE9BQWIsQ0FBcEIsRUFBMkM7QUFDekMsTUFBSXRyQixJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNwQkEsUUFBSSxHQUFHLG1DQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlBLElBQUosRUFBVTtBQUNmO0FBQ0EsVUFBTXBOLEdBQUcsR0FBRzI0Qix5R0FBaUIsQ0FBQ0MsSUFBSSxDQUFDOWxCLElBQUksQ0FBQzNMLEtBQUwsQ0FBVzJMLElBQUksQ0FBQzdMLE9BQUwsQ0FBYSxHQUFiLElBQW9CLENBQS9CLENBQUQsQ0FBTCxDQUE3Qjs7QUFDQSxRQUFJLENBQUN5eEIsT0FBTCxFQUFjO0FBQ1p0ckIsVUFBSSxHQUFHMEYsSUFBSSxDQUFDL1IsS0FBTCxDQUFXLG9CQUFYLEVBQWlDLENBQWpDLEVBQW9DMlIsT0FBcEMsQ0FBNEMsa0JBQTVDLEVBQ0w7QUFDQSxPQUFDbUssQ0FBRCxFQUFJZ2MsRUFBSixLQUFXQSxFQUFFLEdBQUdqSSxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsR0FBRzd3QixHQUFHLENBQUNtSCxLQUFKLENBQVUsQ0FBVixFQUFhbkgsR0FBRyxDQUFDaUgsT0FBSixDQUFZLEVBQVosQ0FBYixDQUF2QixDQUZYLENBQVA7QUFHRDs7QUFDRDZMLFFBQUksR0FBRzlTLEdBQVA7QUFDRDs7QUFDRCxTQUFPLENBQUM4UyxJQUFELEVBQU8xRixJQUFQLENBQVA7QUFDRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxlQUFlZ2xCLGNBQWYsQ0FBOEI7QUFBRXR2QixNQUFGO0FBQVEwZSxNQUFSO0FBQWNqaUI7QUFBZCxDQUE5QixFQUFtRDtBQUFFSSxLQUFHLEdBQUc7QUFBUixDQUFuRCxFQUFpRTtBQUMvRCxNQUFJLENBQUNtRCxJQUFMLEVBQVdBLElBQUksR0FBRyxDQUFDLE1BQU1OLCtGQUFPLENBQUNqRCxHQUFELENBQWQsRUFBcUJKLElBQTVCLENBRG9ELENBRS9EOztBQUNBLE1BQUksQ0FBQzI1Qiw0REFBWSxDQUFDaDJCLElBQUQsQ0FBakIsRUFBeUIsTUFBTWtlLDRGQUFJLENBQUMsa0JBQUQsQ0FBVjtBQUN6QnRlLGdEQUFLLENBQUMwTixHQUFOLENBQVU3USxHQUFWLEVBQWV1RCxJQUFmLEVBQXFCLElBQXJCO0FBQ0EsUUFBTWkyQixVQUFVLEdBQUdoa0IsaUdBQVMsRUFBNUI7QUFDQSxRQUFNO0FBQUVpa0IsVUFBRjtBQUFVbjVCLE1BQUUsRUFBRUQsS0FBZDtBQUFxQjgzQjtBQUFyQixNQUFtQy8zQixHQUF6QyxDQU4rRCxDQU8vRDs7QUFDQSxRQUFNczVCLGdCQUFnQixHQUFHLENBQUMsQ0FBQ3ZCLFNBQUQsSUFBY2owQixVQUFmLE1BQ3ZCbEUsR0FBRyxLQUFLaWlCLElBQVIsSUFDRzllLDhDQUFLLENBQUMwc0IsR0FBTixDQUFXLGFBQVl4dkIsS0FBTSxFQUE3QixDQURILElBRUcsMERBQTBEa0gsSUFBMUQsQ0FBK0QwYSxJQUEvRCxDQUhvQixDQUF6QjtBQUlBOztBQUNBOWUsZ0RBQUssQ0FBQzBOLEdBQU4sQ0FBVyxXQUFVMm9CLFVBQVcsRUFBaEMsRUFBbUM7QUFBRXJCLGFBQUY7QUFBYW40QixPQUFiO0FBQWtCaWlCLFFBQWxCO0FBQXdCNWhCLFNBQXhCO0FBQStCczVCLE1BQUUsRUFBRW5KLDBGQUFFLENBQUNxSTtBQUF0QyxHQUFuQztBQUNBLFFBQU1lLFVBQVUsR0FBRzVILGdCQUFnQixHQUFHd0gsVUFBdEM7QUFDQSxRQUFNO0FBQUVLO0FBQUYsTUFBZUgsZ0JBQWdCLEdBQ2pDLE1BQU01MUIsT0FBTyxDQUFDd08sSUFBUixDQUFhcE0sTUFBYixDQUFvQjdGLEtBQXBCLEVBQTJCO0FBQUVMLE9BQUcsRUFBRTQ1QjtBQUFQLEdBQTNCLENBRDJCLEdBRWpDLE1BQU1uNkIsaURBQVEsQ0FBQzhsQixPQUFULENBQWlCO0FBQUV2bEIsT0FBRyxFQUFFNDVCLFVBQVA7QUFBbUJILFVBQU0sRUFBRSxDQUFDLENBQUNBO0FBQTdCLEdBQWpCLEVBQXdEO0FBQUVyNUI7QUFBRixHQUF4RCxDQUZWOztBQUdBLE1BQUlxNUIsTUFBTSxJQUFJSSxRQUFRLEtBQUt6NUIsR0FBRyxDQUFDeTVCLFFBQS9CLEVBQXlDO0FBQ3ZDLFVBQU0vMUIsT0FBTyxDQUFDZzJCLE9BQVIsQ0FBZ0I1ekIsTUFBaEIsQ0FBdUIyekIsUUFBdkIsRUFBaUM7QUFBRUUsYUFBTyxFQUFFO0FBQVgsS0FBakMsQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsTUFBTUMsV0FBVyxHQUFHLElBQUlDLE1BQUosQ0FBWSxhQUM5QixDQUNFLGtDQURGLEVBRUUsNkJBRkYsRUFHRSx5QkFIRixFQUlFLHVDQUpGLEVBS0UsdUNBTEYsRUFNRSwwQkFORixFQU9FdGtCLElBUEYsQ0FPTyxHQVBQLENBUUQseUJBVDhCLENBU0x4QyxPQVRLLENBU0csSUFUSCxFQVNTLE9BVFQsQ0FBWCxDQUFwQjtBQVdBLE1BQU0rbUIsV0FBVyxHQUFHLElBQUlELE1BQUosQ0FBWSxhQUM5QixDQUNFLHdCQURGLEVBRUUsa0JBRkYsRUFHRSxrQkFIRixFQUlFdGtCLElBSkYsQ0FJTyxHQUpQLENBS0QsSUFObUIsQ0FBcEI7O0FBUUEsTUFBTXdrQixpQkFBaUIsR0FBR242QixHQUFHLElBQzFCLEdBQUU0b0IsbURBQWMsOEJBQTZCLENBQUM1b0IsR0FBRyxDQUFDNkgsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLENBQWtCLEVBRG5FLEMsQ0FHQTs7O0FBQ0EsTUFBTXV5QixZQUFZLEdBQUdsMkIsVUFBVSxJQUFJLElBQUkrMUIsTUFBSixDQUNoQyxvQkFBbUJyUixtREFBYSxDQUFDelYsT0FBZCxDQUFzQixLQUF0QixFQUE2QixNQUE3QixDQUFxQyx3QkFEeEIsQ0FBbkM7O0FBR0EsTUFBTWtuQix5QkFBeUIsR0FBR0QsWUFBWSxLQUFLLENBQUMvNUIsS0FBRCxFQUFRSCxHQUFSLEtBQWdCO0FBQ2pFLE1BQUlrNkIsWUFBWSxDQUFDN3lCLElBQWIsQ0FBa0JySCxHQUFsQixDQUFKLEVBQTRCO0FBQzFCNEQsV0FBTyxDQUFDd08sSUFBUixDQUFhcE0sTUFBYixDQUFvQjdGLEtBQXBCLEVBQTJCO0FBQUVMLFNBQUcsRUFBRW02QixpQkFBaUIsQ0FBQ2o2QixHQUFEO0FBQXhCLEtBQTNCO0FBQ0Q7QUFDRixDQUo2QyxDQUE5Qzs7QUFLQSxJQUFJazZCLFlBQUosRUFBa0I7QUFDaEIsUUFBTXpFLFFBQVEsR0FBRyxDQUFDdDFCLEtBQUQsRUFBUTtBQUFFTDtBQUFGLEdBQVIsS0FBb0JBLEdBQUcsSUFBSXE2Qix5QkFBeUIsQ0FBQ2g2QixLQUFELEVBQVFMLEdBQVIsQ0FBckU7O0FBQ0EsUUFBTXM2QixRQUFRLEdBQUd4MkIsT0FBTyxDQUFDd08sSUFBUixDQUFhZ1YsU0FBOUI7QUFDQSxRQUFNcmpCLFdBQVcsR0FBR3EyQixRQUFRLENBQUNyMkIsV0FBVCxDQUFxQnMyQixJQUFyQixDQUEwQkQsUUFBMUIsRUFBb0MzRSxRQUFwQyxDQUFwQjs7QUFDQSxNQUFJO0FBQUUxeEIsZUFBVyxDQUFDO0FBQUVtRyxnQkFBVSxFQUFFLENBQUMsS0FBRDtBQUFkLEtBQUQsQ0FBWDtBQUF1QyxHQUE3QyxDQUE4QyxPQUFPL0YsQ0FBUCxFQUFVO0FBQUVKLGVBQVc7QUFBSztBQUMzRTs7QUFFREgsT0FBTyxDQUFDd08sSUFBUixDQUFha29CLFNBQWIsQ0FBdUJ2MkIsV0FBdkIsQ0FBb0M3RCxHQUFELElBQVM7QUFDMUMsUUFBTTtBQUFFRSxNQUFGO0FBQU15VSxTQUFOO0FBQWEvVTtBQUFiLE1BQXFCSSxHQUEzQjtBQUNBOzs7QUFFQSxNQUFJLENBQUMsQ0FBQ0osR0FBRyxDQUFDd08sVUFBSixDQUFlLE9BQWYsQ0FBRCxJQUE0QmdpQiwwRkFBRSxDQUFDcUksT0FBSCxHQUFhLEVBQTFDLEtBQ0cscUJBQXFCdHhCLElBQXJCLENBQTBCbkgsR0FBRyxDQUFDa0IsVUFBSixJQUFrQnRCLEdBQTVDLENBRFAsRUFDeUQ7QUFDdkRtRCxrREFBSyxDQUFDME4sR0FBTixDQUFXLGFBQVl2USxFQUFHLEVBQTFCLEVBQTZCLElBQTdCLEVBQW1DLElBQW5DO0FBQ0Q7O0FBQ0QsTUFBSTg1QixZQUFZLElBQUlwNkIsR0FBRyxLQUFLLGFBQTVCLEVBQTJDO0FBQ3pDcTZCLDZCQUF5QixDQUFDLzVCLEVBQUQsRUFBS3lVLEtBQUwsQ0FBekI7QUFDRDtBQUNGLENBWEQ7QUFhQWpSLE9BQU8sQ0FBQ29PLFVBQVIsQ0FBbUJDLGVBQW5CLENBQW1DbE8sV0FBbkMsQ0FBZ0RoQyxHQUFELElBQVM7QUFDdEQsUUFBTTtBQUFFb1IsVUFBRjtBQUFVaFQsU0FBVjtBQUFpQkw7QUFBakIsTUFBeUJpQyxHQUEvQjs7QUFDQSxNQUFJb1IsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDcEI7QUFDRCxHQUpxRCxDQUt0RDs7O0FBQ0EsTUFBSXJULEdBQUcsQ0FBQ3dPLFVBQUosQ0FBZW9hLG1EQUFmLENBQUosRUFBbUM7QUFDakMsV0FBTztBQUFFNlIsaUJBQVcsRUFBRU4saUJBQWlCLENBQUNuNkIsR0FBRDtBQUFoQyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBSSxDQUFDbUQsOENBQUssQ0FBQzBzQixHQUFOLENBQVcsVUFBUzd2QixHQUFJLEVBQXhCLENBQUQsS0FDQSxDQUFDazZCLFdBQVcsQ0FBQzN5QixJQUFaLENBQWlCdkgsR0FBakIsQ0FBRCxJQUEwQmc2QixXQUFXLENBQUN6eUIsSUFBWixDQUFpQnZILEdBQWpCLENBRDFCLENBQUosRUFDc0Q7QUFDcEQwNkIsc0JBQWtCLENBQUNyNkIsS0FBRCxFQUFRTCxHQUFSLENBQWxCO0FBQ0EsV0FBTztBQUFFeTZCLGlCQUFXLEVBQUU7QUFBZixLQUFQLENBRm9ELENBRVA7QUFDOUM7QUFDRixDQWRELEVBY0c7QUFDRHJvQixNQUFJLEVBQUUsQ0FDSjtBQUNBO0FBQ0E7QUFDQSxtQkFKSSxFQUtKLG1CQUxJLEVBTUosb0JBTkksRUFPSixzQkFQSSxFQVFILEdBQUV3VyxtREFBYyxXQVJiLENBREw7QUFXRHZXLE9BQUssRUFBRSxDQUFDLFlBQUQ7QUFYTixDQWRILEVBMEJHLENBQUMsVUFBRCxDQTFCSDs7QUE0QkEsZUFBZXFvQixrQkFBZixDQUFrQ3I2QixLQUFsQyxFQUF5Q0wsR0FBekMsRUFBOEM7QUFDNUMsUUFBTTtBQUFFSixRQUFJLEVBQUUyRDtBQUFSLE1BQWlCLE9BQU1OLCtGQUFPLENBQUNqRCxHQUFELENBQVAsQ0FBYW9FLEtBQWIsQ0FBbUJvSSxvRkFBbkIsQ0FBTixLQUFrQyxFQUF6RDs7QUFDQSxNQUFJakosSUFBSSxJQUFJaVoseURBQVMsQ0FBQ2paLElBQUQsQ0FBVCxDQUFnQjZELElBQTVCLEVBQWtDO0FBQ2hDLFVBQU1oSCxHQUFHLEdBQUdDLEtBQUssSUFBSSxDQUFULEtBQWMsTUFBTXlELE9BQU8sQ0FBQ3dPLElBQVIsQ0FBYWpNLEdBQWIsQ0FBaUJoRyxLQUFqQixDQUFwQixLQUErQyxFQUEzRDtBQUNBd3lCLGtCQUFjLENBQUM7QUFBRXR2QixVQUFGO0FBQVF2RCxTQUFSO0FBQWFpaUIsVUFBSSxFQUFFN2hCLEdBQUcsQ0FBQ0o7QUFBdkIsS0FBRCxFQUErQjtBQUFFSTtBQUFGLEtBQS9CLENBQWQ7QUFDRCxHQUhELE1BR087QUFDTCtDLGtEQUFLLENBQUMwTixHQUFOLENBQVcsVUFBUzdRLEdBQUksRUFBeEIsRUFBMkIsSUFBM0IsRUFBaUMsSUFBakM7QUFDQSxRQUFJSyxLQUFLLElBQUksQ0FBYixFQUFnQnlELE9BQU8sQ0FBQ3dPLElBQVIsQ0FBYXBNLE1BQWIsQ0FBb0I3RixLQUFwQixFQUEyQjtBQUFFTDtBQUFGLEtBQTNCO0FBQ2pCO0FBQ0YsQyxDQUVEO0FBQ0E7OztBQUVBOEQsT0FBTyxDQUFDd08sSUFBUixDQUFhK1UsU0FBYixDQUF1QnBqQixXQUF2QixDQUFvQzVELEtBQUQsSUFBVztBQUM1Q0csc0JBQW9CLENBQUNILEtBQUQsQ0FBcEI7QUFDRCxDQUZEO0FBSU8sU0FBU0csb0JBQVQsQ0FBOEJILEtBQTlCLEVBQXFDO0FBQzFDLFFBQU1pSSxHQUFHLEdBQUc4cEIsV0FBVyxDQUFDL3hCLEtBQUQsQ0FBdkI7O0FBQ0EsTUFBSWlJLEdBQUosRUFBUztBQUNQLFdBQU84cEIsV0FBVyxDQUFDL3hCLEtBQUQsQ0FBbEI7QUFDQSxhQUFLeUksbUdBQUwsRUFBQVIsR0FBRyxFQUFlLENBQUMsQ0FBQ2hJLEVBQUQsQ0FBRCxLQUFVYixpREFBUSxDQUFDNnpCLFlBQVQsQ0FBc0JoekIsRUFBdEIsQ0FBekIsQ0FBSDtBQUNEO0FBQ0Y7QUFFRDs7Ozs7O0FBS0EsU0FBUzQxQixzQkFBVCxDQUFnQztBQUFFOXVCLE1BQUY7QUFBUW1CLE9BQVI7QUFBZW95QjtBQUFmLENBQWhDLEVBQThEO0FBQzVELFNBQVEsR0FBRUMsaUJBQWlCLENBQUN4ekIsSUFBRCxDQUFPLEtBQ2hDdXpCLFdBQVcsR0FDUEUscUdBQWEsQ0FBQ0YsV0FBRCxDQUROLEdBRVBDLGlCQUFpQixDQUFDcnlCLEtBQUQsQ0FDdEIsTUFKRDtBQUtEO0FBRUQ7Ozs7OztBQUlBLFNBQVNxeUIsaUJBQVQsQ0FBMkJFLEdBQTNCLEVBQWdDO0FBQzlCLE1BQUksQ0FBQyxrQkFBa0J2ekIsSUFBbEIsQ0FBdUJ1ekIsR0FBdkIsQ0FBTCxFQUFrQyxPQUFPQSxHQUFQO0FBQ2xDLE1BQUksQ0FBQ3pJLE9BQUwsRUFBY0EsT0FBTyxHQUFHLElBQUkwSSxXQUFKLEVBQVY7QUFDZCxTQUFPRixxR0FBYSxDQUFDeEksT0FBTyxDQUFDMkksTUFBUixDQUFlRixHQUFmLENBQUQsQ0FBcEI7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeG9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQXY3QixNQUFNLENBQUNDLE1BQVAsQ0FBY0MsaURBQWQsRUFBd0I7QUFDdEI7QUFDQXc3QixnQkFBYyxDQUFDcjdCLElBQUQsRUFBTztBQUNuQixVQUFNVSxFQUFFLEdBQUdrVixpR0FBUyxFQUFwQjtBQUNBclMsa0RBQUssQ0FBQzBOLEdBQU4sQ0FBVyxPQUFNdlEsRUFBRyxFQUFwQixFQUF1QndoQixTQUFTLENBQUNsaUIsSUFBRCxDQUFoQztBQUNBLFdBQU9VLEVBQVA7QUFDRCxHQU5xQjs7QUFPdEI7QUFDQTQ2QixXQUFTLENBQUM1NkIsRUFBRCxFQUFLO0FBQ1osV0FBT0EsRUFBRSxJQUFJNkMsOENBQUssQ0FBQ2tELEdBQU4sQ0FBVyxPQUFNL0YsRUFBRyxFQUFwQixDQUFOLElBQWdDd2hCLFNBQVMsRUFBaEQ7QUFDRCxHQVZxQjs7QUFXdEJ2RixXQUFTLEVBQUVDO0FBWFcsQ0FBeEI7QUFjTyxTQUFTK2MsWUFBVCxDQUFzQjloQixJQUF0QixFQUE0QjtBQUNqQyxNQUFJLFFBQVFsUSxJQUFSLENBQWFrUSxJQUFiLENBQUosRUFBd0IsT0FBTyxLQUFQLENBRFMsQ0FDSzs7QUFDdEMsTUFBSUEsSUFBSSxDQUFDL1AsT0FBTCxDQUFhLG1CQUFiLElBQW9DLENBQXhDLEVBQTJDLE9BQU8sS0FBUCxDQUZWLENBRXdCOztBQUN6RCxTQUFPLElBQVA7QUFDRDtBQUVELE1BQU15ekIsU0FBUyxHQUFHO0FBQ2hCQyxTQUFPLEVBQUUsTUFBTSxFQURDO0FBRWhCL1AsV0FBUyxFQUFFLENBQUM1cUIsR0FBRCxFQUFNb0ksR0FBTixLQUFjO0FBQ3ZCcEksT0FBRyxDQUFDK1AsSUFBSixDQUFTM0gsR0FBVDtBQUNBLFdBQU9wSSxHQUFQO0FBQ0Q7QUFMZSxDQUFsQjtBQU9BLE1BQU00NkIsV0FBVyxHQUFHO0FBQ2xCRCxTQUFPLEVBQUUsTUFBTSxJQURHO0FBRWxCL1AsV0FBUyxFQUFFLENBQUM1cUIsR0FBRCxFQUFNb0ksR0FBTixLQUFlcEksR0FBRyxJQUFJLElBQVAsR0FBY29JLEdBQWQsR0FBb0JwSTtBQUY1QixDQUFwQjtBQUlBLE1BQU02NkIsU0FBUyxHQUFHO0FBQ2hCQyxTQUFPLEVBQUVKLFNBRE87QUFFaEJLLFNBQU8sRUFBRUwsU0FGTztBQUdoQjM1QixPQUFLLEVBQUUyNUIsU0FIUztBQUloQk0sY0FBWSxFQUFFTixTQUpFO0FBS2hCcmQsU0FBTyxFQUFFcWQsU0FMTztBQU1oQk8sVUFBUSxFQUFFO0FBQ1JOLFdBQU8sRUFBRSxPQUFPLEVBQVAsQ0FERDtBQUVSL1AsYUFBUyxFQUFFLENBQUM1cUIsR0FBRCxFQUFNb0ksR0FBTixLQUFjO0FBQ3ZCLFlBQU04eUIsSUFBSSxHQUFHOXlCLEdBQUcsQ0FBQ3JILEtBQUosQ0FBVSxpQkFBVixDQUFiO0FBQ0EsVUFBSW02QixJQUFKLEVBQVVsN0IsR0FBRyxDQUFDazdCLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBSCxHQUFlQSxJQUFJLENBQUMsQ0FBRCxDQUFuQjtBQUNWLGFBQU9sN0IsR0FBUDtBQUNEO0FBTk8sR0FOTTtBQWNoQm1kLE9BQUssRUFBRXVkLFNBZFM7QUFlaEIzYixVQUFRLEVBQUU7QUFDUjRiLFdBQU8sRUFBRSxNQUFNLEtBRFA7QUFFUi9QLGFBQVMsRUFBRSxNQUFNO0FBRlQ7QUFmTSxDQUFsQjtBQW9CQSxNQUFNdVEsaUJBQWlCLEdBQUc7QUFDeEJDLGFBQVcsRUFBRVYsU0FEVztBQUV4QlcsWUFBVSxFQUFFWCxTQUZZO0FBR3hCWSxTQUFPLEVBQUVaO0FBSGUsQ0FBMUI7QUFLTyxTQUFTM2UsU0FBVCxDQUFtQmpaLElBQW5CLEVBQXlCO0FBQzlCO0FBQ0EsUUFBTXdZLElBQUksR0FBRyxTQUFXc08sK0ZBQVgsRUFBQWlSLFNBQVMsRUFBVyxDQUFDLEdBQUcveUIsS0FBSCxDQUFELEtBQWVBLEtBQUssQ0FBQzZ5QixPQUFOLEVBQTFCLENBQXRCO0FBQ0EsUUFBTVksUUFBUSxHQUFHejRCLElBQUksQ0FBQy9CLEtBQUwsQ0FBVzJ2QixtR0FBWCxFQUF5QixDQUF6QixLQUErQixFQUFoRDtBQUNBNkssVUFBUSxDQUFDN29CLE9BQVQsQ0FBaUIsZ0NBQWpCLEVBQW1ELENBQUM4b0IsTUFBRCxFQUFTQyxNQUFULEVBQWlCQyxRQUFqQixLQUE4QjtBQUMvRSxVQUFNLENBQUNDLE9BQUQsRUFBVUMsTUFBVixJQUFvQkgsTUFBTSxDQUFDdDBCLEtBQVAsQ0FBYSxDQUFiLEVBQWdCQyxLQUFoQixDQUFzQixHQUF0QixDQUExQjtBQUNBLFVBQU15MEIsUUFBUSxHQUFHRixPQUFPLENBQUNqcEIsT0FBUixDQUFnQixXQUFoQixFQUE2QixDQUFDTCxDQUFELEVBQUl5cEIsQ0FBSixLQUFVQSxDQUFDLENBQUNDLFdBQUYsRUFBdkMsQ0FBakI7QUFDQSxVQUFNdjBCLEdBQUcsR0FBR28wQixNQUFNLEdBQUksR0FBRUMsUUFBUyxJQUFHRCxNQUFNLENBQUNwSCxXQUFQLEVBQXFCLEVBQXZDLEdBQTJDcUgsUUFBN0Q7QUFDQSxVQUFNenpCLEdBQUcsR0FBR3N6QixRQUFRLENBQUN4a0IsSUFBVCxFQUFaO0FBQ0EsVUFBTThrQixRQUFRLEdBQUduQixTQUFTLENBQUNyekIsR0FBRCxDQUFULElBQWtCMnpCLGlCQUFpQixDQUFDM3pCLEdBQUQsQ0FBbkMsSUFBNENvekIsV0FBN0Q7QUFDQSxRQUFJcUIsUUFBUSxHQUFHM2dCLElBQUksQ0FBQzlULEdBQUQsQ0FBbkI7QUFDQSxRQUFJLE9BQU95MEIsUUFBUCxLQUFvQixXQUF4QixFQUFxQ0EsUUFBUSxHQUFHRCxRQUFRLENBQUNyQixPQUFULEVBQVg7QUFDckNyZixRQUFJLENBQUM5VCxHQUFELENBQUosR0FBWXcwQixRQUFRLENBQUNwUixTQUFULENBQW1CcVIsUUFBbkIsRUFBNkI3ekIsR0FBN0IsQ0FBWjtBQUNELEdBVEQ7QUFVQWtULE1BQUksQ0FBQ2dDLFNBQUwsR0FBaUJoQyxJQUFJLENBQUMyZixRQUF0QjtBQUNBLFNBQU8zZixJQUFJLENBQUMyZixRQUFaLENBZjhCLENBZ0I5Qjs7QUFDQSxNQUFJLENBQUMzZixJQUFJLENBQUNpRyxXQUFOLElBQXFCakcsSUFBSSxDQUFDNGdCLFFBQTlCLEVBQXdDNWdCLElBQUksQ0FBQ2lHLFdBQUwsR0FBbUJqRyxJQUFJLENBQUM0Z0IsUUFBeEI7QUFDeEMsU0FBTzVnQixJQUFQO0FBQ0Q7QUFFTSxTQUFTMEIsZ0JBQVQsR0FBNEI7QUFDakMsU0FBTztBQUNMME8sZUFBVyxFQUFFLElBRFI7QUFFTEMsZUFBVyxFQUFFLElBRlI7QUFHTEMsYUFBUyxFQUFFLElBSE47QUFJTEMsb0JBQWdCLEVBQUU7QUFKYixHQUFQO0FBTUQ7QUFFTSxTQUFTeEssU0FBVCxDQUFtQmxpQixJQUFuQixFQUF5QjtBQUM5QixRQUFNMEosS0FBSyxHQUFHO0FBQ1p0SixPQUFHLEVBQUUsU0FESTtBQUVUb0gsUUFBSSxFQUFFLEVBRkc7QUFHVHcxQixRQUFJLEVBQUUsSUFBSW42QixJQUFKLEdBQVdvNkIsY0FBWDtBQUhHLEtBSU5qOUIsSUFKTSxDQUFYOztBQU1BLFFBQU0yRCxJQUFJLEdBQUdqQiwwREFBUyxDQUFDLGdCQUFELENBQVQsQ0FDWjZRLE9BRFksQ0FDSixZQURJLEVBQ1UsQ0FBQzJuQixHQUFELEVBQU0xekIsSUFBTixLQUFlO0FBQ3BDLFVBQU1tQixLQUFLLEdBQUdlLEtBQUssQ0FBQ2xDLElBQUQsQ0FBbkI7QUFDQSxXQUFPbUIsS0FBSyxJQUFJLElBQVQsR0FBZ0J1eUIsR0FBaEIsR0FBc0J2eUIsS0FBN0I7QUFDRCxHQUpZLENBQWI7QUFLQSxRQUFNdEMsTUFBTSxHQUFHO0FBQ2J6QyxVQUFNLEVBQUVpYSxnQkFBZ0IsRUFEWDtBQUViL1UsVUFBTSxFQUFFO0FBQ05tQyxhQUFPLEVBQUUsQ0FESDtBQUVOQyxrQkFBWSxFQUFFO0FBRlIsS0FGSztBQU1iaVIsUUFBSSxFQUFFUyxTQUFTLENBQUNqWixJQUFELENBTkY7QUFPYm1ILFNBQUssRUFBRTtBQVBNLEdBQWY7QUFTQSxTQUFPO0FBQUV6RSxVQUFGO0FBQVUxQztBQUFWLEdBQVA7QUFDRDtBQUVNLFNBQVNpYSxVQUFULENBQW9CdlgsTUFBcEIsRUFBNEI7QUFDakMsUUFBTXVSLEVBQUUsR0FBR3ZSLE1BQU0sQ0FBQzhWLElBQVAsQ0FBWStnQixTQUFaLElBQXlCLEVBQXBDO0FBQ0EsUUFBTTExQixJQUFJLEdBQUduQixNQUFNLENBQUM4VixJQUFQLENBQVkzVSxJQUFaLElBQW9CLEVBQWpDO0FBQ0EsTUFBSTIxQixPQUFPLEdBQUdDLHNHQUFjLENBQUUsR0FBRXhsQixFQUFHLEtBQUlwUSxJQUFLLElBQWhCLENBQTVCO0FBQ0EsTUFBSSxDQUFDb1EsRUFBRCxJQUFPLENBQUNwUSxJQUFaLEVBQWtCMjFCLE9BQU8sSUFBSTkyQixNQUFNLENBQUN5RSxLQUFQLENBQWFwSyxFQUFiLElBQW1CLEVBQTlCO0FBQ2xCLFNBQU95OEIsT0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQzNIRDtBQUFBO0FBQUE7QUFBTyxTQUFTOW9CLFNBQVQsQ0FBbUJmLE1BQW5CLEVBQTJCO0FBQ2hDLFNBQU9BLE1BQU0sQ0FBQ3JMLEtBQVAsQ0FBYSxHQUFiLEVBQWtCbUksTUFBbEIsQ0FBeUIsQ0FBQ3BRLElBQUQsRUFBT3E5QixLQUFQLEtBQWlCO0FBQy9DLFVBQU0sQ0FBQ2gxQixHQUFELEVBQU1ZLEdBQU4sSUFBYW8wQixLQUFLLENBQUNwMUIsS0FBTixDQUFZLEdBQVosRUFBaUJnQyxHQUFqQixDQUFxQi9CLGtCQUFyQixDQUFuQjtBQUNBbEksUUFBSSxDQUFDcUksR0FBRCxDQUFKLEdBQVlZLEdBQVo7QUFDQSxXQUFPakosSUFBUDtBQUNELEdBSk0sRUFJSixFQUpJLENBQVA7QUFLRDtBQUVNLFNBQVNtVSxTQUFULENBQW1CbXBCLElBQW5CLEVBQXlCO0FBQzlCLFNBQU8zOUIsTUFBTSxDQUFDbVUsT0FBUCxDQUFld3BCLElBQWYsRUFDTnJ6QixHQURNLENBQ0ZzekIsTUFBTSxJQUFJQSxNQUFNLENBQUN0ekIsR0FBUCxDQUFXc00sa0JBQVgsRUFBK0JSLElBQS9CLENBQW9DLEdBQXBDLENBRFIsRUFFTkEsSUFGTSxDQUVELEdBRkMsQ0FBUDtBQUdELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEO0FBQ0E7QUFFQTs7QUFDQW1GLCtGQUFPLENBQUMzWCxLQUFSLENBQWMyZixLQUFkLEdBQXNCc2EsWUFBWSxDQUFDO0FBQ2pDMzBCLE1BQUksQ0FBQ3VELE9BQUQsRUFBVTtBQUNaLHFGQUFZQSxPQUFaO0FBQXFCeUgsa0JBQVksRUFBRTtBQUFuQztBQUNELEdBSGdDOztBQUlqQyxRQUFNNFgsU0FBTixDQUFnQmtMLFFBQWhCLEVBQTBCdjJCLEdBQTFCLEVBQStCZ00sT0FBL0IsRUFBd0NxeEIsS0FBeEMsRUFBK0M7QUFDN0MsVUFBTSxDQUFDeHZCLElBQUQsRUFBTzBGLElBQVAsSUFBZSxNQUFNdUgsK0ZBQU8sQ0FBQzNYLEtBQVIsQ0FBY202QixPQUFkLENBQXNCL0csUUFBdEIsRUFBZ0MsSUFBaEMsQ0FBM0I7QUFDQSxXQUFNOEcsS0FBTixvQkFBTUEsS0FBSyxDQUFHcjlCLEdBQUgsRUFBUXUyQixRQUFRLENBQUMzMkIsSUFBakIsRUFBdUJpTyxJQUF2QixDQUFYO0FBQ0EsV0FBUSxHQUFFQSxJQUFLLElBQUcwRixJQUFLLEVBQXZCO0FBQ0Q7O0FBUmdDLENBQUQsQ0FBbEM7QUFXQTs7QUFDQXVILCtGQUFPLENBQUNnRCxPQUFSLENBQWdCZ0YsS0FBaEIsR0FBd0JzYSxZQUFZLENBQUM7QUFDbkMvUixXQUFTLEVBQUUsQ0FBQztBQUFFenJCO0FBQUYsR0FBRCxFQUFXSSxHQUFYLEtBQ1QsUUFBUXVILElBQVIsQ0FBYTNILElBQWIsSUFDSTBFLE9BQU8sQ0FBQ0MsTUFBUixDQUFnQixXQUFVdkUsR0FBSSxLQUFJSixJQUFJLENBQUNnSSxLQUFMLENBQVcsQ0FBWCxFQUFjLEdBQWQsRUFBbUIrUCxJQUFuQixHQUEwQnhFLE9BQTFCLENBQWtDLFNBQWxDLEVBQTZDLEdBQTdDLENBQWtELEdBQXBGLENBREosR0FFSXZUO0FBSjZCLENBQUQsQ0FBcEM7O0FBUUEsU0FBU3c5QixZQUFULENBQXNCRyxRQUFRLEdBQUcsRUFBakMsRUFBcUM7QUFDbkMsUUFBTXRMLFFBQVEsR0FBRyxFQUFqQjtBQUNBLFFBQU07QUFBRXhwQixRQUFGO0FBQVE0aUI7QUFBUixNQUFzQmtTLFFBQTVCO0FBQ0E7O0FBQ0EsU0FBTyxTQUFTQyxtQkFBVCxDQUE2QixHQUFHcjVCLElBQWhDLEVBQXNDO0FBQzNDLFVBQU0sQ0FBQ25FLEdBQUQsSUFBUW1FLElBQWQ7QUFDQSxVQUFNK0ksT0FBTyxHQUFHK2tCLFFBQVEsQ0FBQ2p5QixHQUFELENBQVIsS0FBa0JpeUIsUUFBUSxDQUFDanlCLEdBQUQsQ0FBUixHQUFnQixTQUFNeTlCLE9BQU4sUUFBYyxHQUFHdDVCLElBQWpCLENBQWxDLENBQWhCO0FBQ0EsV0FBTytJLE9BQVA7QUFDRCxHQUpEO0FBS0E7O0FBQ0EsaUJBQWV1d0IsT0FBZixDQUF1QixHQUFHdDVCLElBQTFCLEVBQWdDO0FBQzlCLFVBQU0sQ0FBQ25FLEdBQUQsRUFBTWdNLE9BQU4sSUFBaUI3SCxJQUF2Qjs7QUFDQSxRQUFJO0FBQ0YsWUFBTTFELEdBQUcsR0FBRyxNQUFNd0MsK0ZBQU8sQ0FBQ2pELEdBQUQsRUFBTSxDQUFBeUksSUFBSSxRQUFKLFlBQUFBLElBQUksQ0FBR3VELE9BQUgsQ0FBSixLQUFtQkEsT0FBekIsQ0FBekI7O0FBQ0EsVUFBSSxNQUFNMHhCLFVBQVUsQ0FBQ2o5QixHQUFELEVBQU1ULEdBQU4sQ0FBcEIsRUFBZ0M7QUFDOUIsY0FBTTJoQixNQUFNLEdBQUcwSixTQUFTLEdBQUcsTUFBTUEsU0FBUyxDQUFDNXFCLEdBQUQsRUFBTSxHQUFHMEQsSUFBVCxDQUFsQixHQUFtQzFELEdBQUcsQ0FBQ2IsSUFBL0Q7QUFDQSxjQUFNLEtBQUswSSxHQUFMLENBQVN0SSxHQUFULEVBQWMyaEIsTUFBZCxDQUFOO0FBQ0Q7QUFDRixLQU5ELENBTUUsT0FBTzVaLEdBQVAsRUFBWTtBQUNaLFVBQUkzQyxLQUFKLEVBQXVCWCxFQUFBO0FBQ3ZCLFlBQU1zRCxHQUFOO0FBQ0QsS0FURCxTQVNVO0FBQ1IsYUFBT2txQixRQUFRLENBQUNqeUIsR0FBRCxDQUFmO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGVBQWUwOUIsVUFBZixDQUEwQjtBQUFFdDZCO0FBQUYsQ0FBMUIsRUFBdUNwRCxHQUF2QyxFQUE0QztBQUMxQyxRQUFNaWUsR0FBRyxHQUFHN2EsT0FBTyxDQUFDaUQsR0FBUixDQUFZLE1BQVosS0FDVCxDQUFDLElBQUk1RCxJQUFKLENBQVNXLE9BQU8sQ0FBQ2lELEdBQVIsQ0FBWSxlQUFaLENBQVQsQ0FEUSxJQUVULENBQUMsSUFBSTVELElBQUosQ0FBU1csT0FBTyxDQUFDaUQsR0FBUixDQUFZLE1BQVosQ0FBVCxDQUZKOztBQUdBLE1BQUksQ0FBQzRYLEdBQUQsSUFBUUEsR0FBRyxNQUFLLE1BQU1uRCwrRkFBTyxDQUFDbUQsR0FBUixDQUFZckMsTUFBWixDQUFtQjViLEdBQW5CLENBQVgsQ0FBZixFQUFtRDtBQUNqRCxRQUFJaWUsR0FBSixFQUFTLE1BQU1uRCwrRkFBTyxDQUFDbUQsR0FBUixDQUFZM1YsR0FBWixDQUFnQnRJLEdBQWhCLEVBQXFCaWUsR0FBckIsQ0FBTjtBQUNULFdBQU8sSUFBUDtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNdUwsT0FBTyxHQUFHLEVBQWhCO0FBRUFqcUIsTUFBTSxDQUFDQyxNQUFQLENBQWNDLGlEQUFkLEVBQXdCO0FBQ3RCOzs7OztBQUtBLFFBQU00bEIsVUFBTixDQUFpQnNZLE1BQWpCLEVBQXlCO0FBQ3ZCLFFBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1gsWUFBTTtBQUFFdjlCLFdBQUY7QUFBT3FCO0FBQVAsVUFBa0IsTUFBTWhDLGlEQUFRLENBQUMyQixZQUFULEVBQTlCO0FBQ0EsWUFBTWQsRUFBRSxHQUFHbUIsTUFBTSxJQUFJaEMsaURBQVEsQ0FBQ3c3QixjQUFULENBQXdCO0FBQzNDajdCLFdBQUcsRUFBRSxDQUFDSSxHQUFHLENBQUNrQixVQUFKLElBQWtCbEIsR0FBRyxDQUFDSixHQUF2QixFQUE0QjZILEtBQTVCLENBQWtDLE1BQWxDLEVBQTBDLENBQTFDLENBRHNDO0FBRTNDVCxZQUFJLEVBQUcsR0FBRTlFLDBEQUFTLENBQUMsc0JBQUQsQ0FBVCxHQUFvQyxFQUFwQyxHQUF5QyxJQUFLLEdBQUViLE1BQU87QUFGckIsT0FBeEIsQ0FBckI7QUFJQWs4QixZQUFNLEdBQUksT0FBTXI5QixFQUFFLEdBQUksSUFBR0EsRUFBRyxFQUFWLEdBQWMsRUFBRyxFQUFuQztBQUNEOztBQUNELFVBQU1OLEdBQUcsR0FBSSxHQUFFNG9CLG1EQUFjLDhCQUE2QitVLE1BQU8sRUFBakUsQ0FUdUIsQ0FVdkI7O0FBQ0EsU0FBSyxNQUFNQyxJQUFYLElBQW1COTVCLE9BQU8sQ0FBQys1QixTQUFSLENBQWtCQyxRQUFsQixFQUFuQixFQUFpRDtBQUMvQyxVQUFJRixJQUFJLENBQUNHLFFBQUwsQ0FBYzFrQixJQUFkLEtBQXVCclosR0FBM0IsRUFBZ0M7QUFDOUI7QUFDQSxjQUFNSSxHQUFHLEdBQUd5RCx1R0FBUSxFQUFDLE1BQU0rNUIsSUFBSSxDQUFDOTVCLE9BQUwsQ0FBYXdPLElBQWIsQ0FBa0JqRixVQUFsQixFQUFQLEVBQXBCO0FBQ0F2SixlQUFPLENBQUN3TyxJQUFSLENBQWFwTSxNQUFiLENBQW9COUYsR0FBRyxDQUFDRSxFQUF4QixFQUE0QjtBQUFFbTVCLGdCQUFNLEVBQUU7QUFBVixTQUE1QjtBQUNBMzFCLGVBQU8sQ0FBQ2cyQixPQUFSLENBQWdCNXpCLE1BQWhCLENBQXVCOUYsR0FBRyxDQUFDeTVCLFFBQTNCLEVBQXFDO0FBQUVFLGlCQUFPLEVBQUU7QUFBWCxTQUFyQztBQUNBLGVBQU8zNUIsR0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBT1gsaURBQVEsQ0FBQzhsQixPQUFULENBQWlCO0FBQUV2bEIsU0FBRjtBQUFPZytCLG1CQUFhLEVBQUU7QUFBdEIsS0FBakIsQ0FBUDtBQUNELEdBM0JxQjs7QUE0QnRCO0FBQ0EsUUFBTXpZLE9BQU4sQ0FBYztBQUNadmxCLE9BRFk7QUFFWnk1QixVQUFNLEdBQUcsSUFGRztBQUdad0UsYUFIWTtBQUlaQyxVQUFNLEdBQUcsSUFKRztBQUtaRixpQkFBYSxHQUFHLEtBTEo7QUFNWkc7QUFOWSxHQUFkLEVBT0dqK0IsR0FBRyxHQUFHLEVBUFQsRUFPYTtBQUNYO0FBQ0EsVUFBTWsrQixNQUFNLEdBQUdsK0IsR0FBRyxDQUFDRSxHQUFKLEtBQVcsTUFBTWlCLG9HQUFZLEVBQTdCLEtBQW1DLEVBQWxELENBRlcsQ0FHWDs7QUFDQSxVQUFNZzlCLE1BQU0sR0FBR24rQixHQUFHLENBQUNGLEdBQW5CO0FBQ0EsVUFBTXMrQixVQUFVLEdBQUcsQ0FBQ0QsTUFBRCxJQUFXQSxNQUFNLENBQUM3dkIsVUFBUCxDQUFrQm9hLG1EQUFsQixDQUE5QixDQUxXLENBTVg7O0FBQ0EsVUFBTTtBQUFFdVAsZUFBRjtBQUFhMEI7QUFBYixRQUEwQnVFLE1BQWhDLENBUFcsQ0FRWDs7QUFDQSxRQUFJNUksT0FBTyxHQUFHNEksTUFBTSxDQUFDRyxhQUFyQjs7QUFDQSxRQUFJL0ksT0FBTyxJQUFJLENBQUMyQyxTQUFoQixFQUEyQjtBQUN6QjNDLGFBQU8sR0FBR2dKLGNBQWMsQ0FBQ0YsVUFBVSxHQUFHLENBQUgsR0FBT0wsU0FBbEIsQ0FBZCxJQUE4Q3pJLE9BQXhEO0FBQ0Q7O0FBQ0QsUUFBSUEsT0FBSixFQUFhQSxPQUFPLEdBQUc7QUFBRStJLG1CQUFhLEVBQUUvSTtBQUFqQixLQUFWLENBYkYsQ0FjWDs7QUFDQSxRQUFJLENBQUMsV0FBV2p1QixJQUFYLENBQWdCdkgsR0FBaEIsQ0FBTCxFQUEyQjtBQUN6QkEsU0FBRyxHQUFHcytCLFVBQVUsR0FDWng2QixPQUFPLENBQUNDLE9BQVIsQ0FBZ0I4a0IsTUFBaEIsQ0FBdUI3b0IsR0FBdkIsQ0FEWSxHQUVad2lCLGtHQUFVLENBQUN4aUIsR0FBRCxFQUFNcStCLE1BQU4sQ0FGZDtBQUdEOztBQUNELFVBQU1JLGdCQUFnQixHQUFHLENBQUN0RyxTQUFELElBQWNqMEIsVUFBZCxJQUE0QixDQUFDLG1CQUFtQnFELElBQW5CLENBQXdCdkgsR0FBeEIsQ0FBdEQ7QUFDQSxRQUFJMCtCLE1BQUo7O0FBQ0EsUUFBSVYsYUFBYSxJQUNWbDZCLE9BQU8sQ0FBQ2cyQixPQURYLElBRUd4M0IsMERBQVMsQ0FBQyxjQUFEO0FBQ1o7O0FBSEEsUUFLSSxDQUFDa3pCLE9BQUQsSUFBWWhGLDBGQUFFLENBQUNxSSxPQUFILElBQWMsRUFMOUIsQ0FBSixFQUt1QztBQUNyQyxZQUFNOEYsT0FBTyxHQUFHO0FBQ2QzK0IsV0FEVztBQUVYbTRCLGlCQUFTLEVBQUVzRyxnQkFBZ0IsSUFBSXRHO0FBRnBCLFNBR1I3MUIsMERBQVMsQ0FBQyxvQkFBRCxDQUFULElBQW1DO0FBQUV1TCxZQUFJLEVBQUU7QUFBUixPQUgzQixNQUlSLENBQUMzSixVQUFELElBQWU7QUFBRTYxQixlQUFPLEVBQUUsQ0FBQyxDQUFDTjtBQUFiLE9BSlAsTUFLUmpFLE9BTFEsQ0FBYjs7QUFPQSxZQUFNdUMsR0FBRyxHQUFHejFCLDBEQUFTLENBQUMsaUJBQUQsQ0FBckI7QUFDQSxZQUFNczhCLE1BQU0sR0FBRzdHLEdBQUcsSUFBSSxTQUFTQSxHQUEvQjtBQUNBLFlBQU04RyxHQUFHLEdBQUcsT0FBTS82QixPQUFPLENBQUNnMkIsT0FBUixDQUFnQjd0QixNQUFoQiwyRUFBNEIweUIsT0FBNUIsTUFBd0M1RyxHQUF4QyxHQUErQzN6QixLQUEvQyxDQUFxRHc2QixNQUFNLElBQUlweUIsb0ZBQS9ELENBQU4sS0FDUG95QixNQUFNLEtBQUksTUFBTTk2QixPQUFPLENBQUNnMkIsT0FBUixDQUFnQjd0QixNQUFoQixDQUF1QjB5QixPQUF2QixDQUFWLENBRFg7QUFFQUQsWUFBTSxHQUFHRyxHQUFHLENBQUN2c0IsSUFBSixDQUFTLENBQVQsQ0FBVDtBQUNEOztBQUNELFFBQUksQ0FBQ29zQixNQUFMLEVBQWE7QUFDWEEsWUFBTSxHQUFHLE1BQU01NkIsT0FBTyxDQUFDd08sSUFBUixDQUFhckcsTUFBYjtBQUNiak0sV0FEYTtBQUViO0FBQ0F5NUIsY0FBTSxFQUFFLENBQUMsQ0FBQ0EsTUFIRztBQUliMEUsY0FBTSxFQUFFLENBQUMsQ0FBQ0E7QUFKRyxTQUtWM0ksT0FMVSxNQU1WaUosZ0JBQWdCLElBQUk7QUFDckI1RTtBQURpQixTQUVkcUUsTUFBTSxJQUFJO0FBQUUvaEIsYUFBSyxFQUFFaWlCLE1BQU0sQ0FBQ2ppQixLQUFQLEdBQWU7QUFBeEIsT0FGSSxNQUdkcVUsMEZBQUUsQ0FBQ3NPLG9CQUFILElBQTJCO0FBQUVDLG1CQUFXLEVBQUVYLE1BQU0sQ0FBQzk5QjtBQUF0QixPQUhiLENBTk4sRUFBZjtBQVlEOztBQUNELFVBQU07QUFBRUE7QUFBRixRQUFTbytCLE1BQWY7O0FBQ0EsUUFBSWpGLE1BQU0sSUFBSWlGLE1BQU0sQ0FBQzdFLFFBQVAsS0FBb0JBLFFBQWxDLEVBQTRDO0FBQzFDLFlBQU0vMUIsT0FBTyxDQUFDZzJCLE9BQVIsQ0FBZ0I1ekIsTUFBaEIsQ0FBdUJ3NEIsTUFBTSxDQUFDN0UsUUFBOUIsRUFBd0M7QUFBRUUsZUFBTyxFQUFFO0FBQVgsT0FBeEMsQ0FBTjtBQUNEOztBQUNEdlEsV0FBTyxDQUFDbHBCLEVBQUQsQ0FBUCxHQUFjODlCLE1BQU0sQ0FBQzk5QixFQUFyQjtBQUNBLFdBQU9nK0IsVUFBVSxHQUFHSSxNQUFILEdBQVk7QUFBRXArQjtBQUFGLEtBQTdCO0FBQ0QsR0FqR3FCOztBQWtHdEI7QUFDQTArQixVQUFRLENBQUM7QUFBRTErQjtBQUFGLE1BQVMsRUFBVixFQUFjSixHQUFkLEVBQW1CO0FBQUE7O0FBQ3pCLFVBQU1HLEtBQUssR0FBR0MsRUFBRSxLQUFJSixHQUFKLGdDQUFJQSxHQUFHLENBQUVFLEdBQVQscUJBQUksU0FBVUUsRUFBZCxDQUFoQjtBQUNBLFFBQUlELEtBQUssSUFBSSxDQUFiLEVBQWdCeUQsT0FBTyxDQUFDd08sSUFBUixDQUFhL0wsTUFBYixDQUFvQmxHLEtBQXBCO0FBQ2pCLEdBdEdxQjs7QUF1R3RCNCtCLFVBQVEsQ0FBQzNoQixDQUFELEVBQUlwZCxHQUFKLEVBQVM7QUFDZjRELFdBQU8sQ0FBQ3dPLElBQVIsQ0FBYXBNLE1BQWIsQ0FBb0JoRyxHQUFHLENBQUNFLEdBQUosQ0FBUUUsRUFBNUIsRUFBZ0M7QUFBRW01QixZQUFNLEVBQUU7QUFBVixLQUFoQyxFQUFrRHIxQixLQUFsRCxDQUF3RG9JLG9GQUF4RDtBQUNBMUksV0FBTyxDQUFDZzJCLE9BQVIsQ0FBZ0I1ekIsTUFBaEIsQ0FBdUJoRyxHQUFHLENBQUNFLEdBQUosQ0FBUXk1QixRQUEvQixFQUF5QztBQUFFRSxhQUFPLEVBQUU7QUFBWCxLQUF6QyxFQUE0RDMxQixLQUE1RCxDQUFrRW9JLG9GQUFsRTtBQUNEOztBQTFHcUIsQ0FBeEIsRSxDQTZHQTtBQUNBO0FBQ0E7O0FBQ0Fna0IsMEZBQUUsQ0FBQzBPLEtBQUgsQ0FBUzN4QixJQUFULENBQWMsTUFBTTtBQUNsQmhPLFFBQU0sQ0FBQzQvQixnQkFBUCxDQUF3QjNPLDBGQUF4QixFQUE0QjtBQUMxQnNPLHdCQUFvQixFQUFFO0FBQ3BCdjJCLFdBQUssRUFBRSxDQUFDckUsVUFBRCxJQUFlc3NCLDBGQUFFLENBQUNxSSxPQUFILElBQWMsRUFBZCxJQUFvQnJJLDBGQUFFLENBQUM0TyxFQUFILEtBQVU7QUFEaEM7QUFESSxHQUE1QjtBQUtELENBTkQ7QUFRQXQ3QixPQUFPLENBQUN3TyxJQUFSLENBQWErVSxTQUFiLENBQXVCcGpCLFdBQXZCLENBQW9DM0QsRUFBRCxJQUFRO0FBQ3pDLFFBQU15cEIsUUFBUSxHQUFHUCxPQUFPLENBQUNscEIsRUFBRCxDQUF4Qjs7QUFDQSxNQUFJeXBCLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUNqQkMsc0dBQVUsQ0FBQ0QsUUFBRCxFQUFXLFdBQVgsRUFBd0J6cEIsRUFBeEIsQ0FBVjtBQUNBLFdBQU9rcEIsT0FBTyxDQUFDbHBCLEVBQUQsQ0FBZDtBQUNEO0FBQ0YsQ0FORDs7QUFRQSxTQUFTaytCLGNBQVQsQ0FBd0JyaUIsS0FBeEIsRUFBK0I7QUFDN0IsU0FBT0EsS0FBSyxLQUFLLENBQVYsSUFBZSxpQkFBZixJQUNHQSxLQUFLLEdBQUcsQ0FBUixJQUFjLHFCQUFvQkEsS0FBTSxFQURsRDtBQUVELEM7Ozs7Ozs7Ozs7OztBQzVJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU0vYyxlQUFlLEdBQUcsZ0JBQXhCO0FBQ1AsTUFBTWlnQyxzQkFBc0IsR0FBSSxHQUFFamdDLGVBQWdCLFFBQWxEO0FBQ0EsTUFBTWtnQyxnQkFBZ0IsR0FBSTs7Ozs7OztDQUExQjtBQVNBbmEsb0RBQWMsQ0FBQzNVLElBQWYsQ0FBb0IsTUFBTTtBQUN4QixNQUFJK3VCLE1BQU0sR0FBR2o5QiwwREFBUyxDQUFDKzhCLHNCQUFELENBQXRCLENBRHdCLENBRXhCOztBQUNBLE1BQUlFLE1BQUosRUFBWTtBQUNaLFFBQU1DLFFBQVEsR0FBR2w5QiwwREFBUyxDQUFDbEQsZUFBRCxDQUExQixDQUp3QixDQUt4Qjs7QUFDQSxNQUFJbWdDLE1BQU0sSUFBSSxJQUFkLEVBQW9CO0FBQ2xCQSxVQUFNLEdBQUdDLFFBQVEsS0FBS0YsZ0JBQXRCO0FBQ0EsUUFBSUMsTUFBSixFQUFZLzJCLDBEQUFTLENBQUM2MkIsc0JBQUQsRUFBeUIsSUFBekIsQ0FBVCxDQUFaLEtBQ0toZ0MsbUJBQW1CLEdBSE4sQ0FJcEI7QUFDQyxHQUxELE1BS08sSUFBSW1nQyxRQUFRLEtBQUsxVSxpRUFBZ0IsQ0FBQzFyQixlQUFELENBQWpDLEVBQW9EO0FBQ3pEQyx1QkFBbUI7QUFDcEI7QUFDRixDQWREO0FBZ0JPLFNBQVNBLG1CQUFULENBQTZCSCxPQUFPLEdBQUcsRUFBdkMsRUFBMkM7QUFDaEQsUUFBTXVnQyxlQUFlLEdBQUczVSxpRUFBZ0IsQ0FBQzFyQixlQUFELENBQXhDO0FBQ0EsTUFBSW9nQyxRQUFRLEdBQUd0Z0MsT0FBTyxDQUFDRSxlQUFELENBQXRCOztBQUNBLE1BQUksQ0FBQ29nQyxRQUFMLEVBQWU7QUFDYkEsWUFBUSxHQUFHQyxlQUFYO0FBQ0F2Z0MsV0FBTyxDQUFDRSxlQUFELENBQVAsR0FBMkJvZ0MsUUFBM0I7QUFDQWgzQiw4REFBUyxDQUFDcEosZUFBRCxFQUFrQm9nQyxRQUFsQixDQUFUO0FBQ0Q7O0FBQ0QsUUFBTUQsTUFBTSxHQUFHQyxRQUFRLEtBQUtDLGVBQTVCOztBQUNBLE1BQUlGLE1BQU0sS0FBS3JnQyxPQUFPLENBQUNtZ0Msc0JBQUQsQ0FBdEIsRUFBZ0Q7QUFDOUNuZ0MsV0FBTyxDQUFDbWdDLHNCQUFELENBQVAsR0FBa0NFLE1BQWxDO0FBQ0EvMkIsOERBQVMsQ0FBQzYyQixzQkFBRCxFQUF5QkUsTUFBekIsQ0FBVDtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDM0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFoZ0MsTUFBTSxDQUFDQyxNQUFQLENBQWNDLGlEQUFkLEVBQXdCO0FBQ3RCaWdDLGVBQWEsRUFBRW5nQjtBQURPLENBQXhCO0FBSUE0RixvREFBYyxDQUFDM1UsSUFBZixDQUFvQm12QixjQUFwQjtBQUVBaitCLDJGQUFBLENBQVksSUFBWjtBQUVBLE1BQU1rK0IsY0FBYyxHQUFHLHlCQUF2QjtBQUNBLElBQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUNBNWdDLDREQUFXLENBQUVDLE9BQUQsSUFBYTtBQUN2QixNQUFJLGVBQWVBLE9BQW5CLEVBQTRCeWdDLGNBQWMsQ0FBQ3pnQyxPQUFPLENBQUM0Z0MsU0FBUixJQUFxQixFQUF0QixDQUFkO0FBQzdCLENBRlUsQ0FBWDtBQUdBLE1BQU1DLGdCQUFnQixHQUFHLFdBQXpCO0FBRUE7Ozs7Ozs7Ozs7OztBQVdBLE1BQU1DLG1CQUFtQixHQUFHLEtBQTVCO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxJQUFJQyxXQUFXLEdBQUcsQ0FBbEI7O0FBRUEsU0FBU0MsU0FBVCxDQUFtQm5nQyxHQUFuQixFQUF3Qm9nQyxLQUF4QixFQUErQjN4QixNQUEvQixFQUF1QzR4QixXQUF2QyxFQUFvRDtBQUNsRCxTQUFPRCxLQUFLLENBQUNwZ0IsSUFBTixDQUFXOWEsSUFBSSxJQUFJO0FBQ3hCLFVBQU0rQyxHQUFHLEdBQUksR0FBRXdHLE1BQU8sSUFBR3ZKLElBQUssRUFBOUI7QUFDQSxVQUFNbzdCLE9BQU8sR0FBR245Qiw4Q0FBSyxDQUFDa0QsR0FBTixDQUFVNEIsR0FBVixLQUFrQjlFLDhDQUFLLENBQUMwTixHQUFOLENBQVU1SSxHQUFWLEVBQWVvNEIsV0FBVyxDQUFDbjdCLElBQUQsQ0FBMUIsQ0FBbEM7QUFDQSxXQUFPbzdCLE9BQU8sQ0FBQy80QixJQUFSLENBQWF2SCxHQUFiLENBQVA7QUFDRCxHQUpNLENBQVA7QUFLRDtBQUVEOzs7OztBQUdPLFNBQVN1Z0MsUUFBVCxDQUFrQnZnQyxHQUFsQixFQUF1Qm9nQyxLQUF2QixFQUE4QjtBQUNuQyxTQUFPRCxTQUFTLENBQUNuZ0MsR0FBRCxFQUFNb2dDLEtBQU4sRUFBYSxJQUFiLEVBQW1CSSxPQUFuQixDQUFoQjtBQUNEO0FBRUQ7Ozs7QUFHTyxTQUFTQyxTQUFULENBQW1CemdDLEdBQW5CLEVBQXdCb2dDLEtBQXhCLEVBQStCO0FBQ3BDLFNBQU9ELFNBQVMsQ0FBQ25nQyxHQUFELEVBQU1vZ0MsS0FBTixFQUFhLE9BQWIsRUFBc0JNLFdBQXRCLENBQWhCO0FBQ0Q7QUFFTSxTQUFTamhCLFVBQVQsQ0FBb0J6ZixHQUFwQixFQUF5QmlHLE1BQXpCLEVBQWlDO0FBQ3RDOUMsZ0RBQUssQ0FBQ3c5QixLQUFOLENBQVksSUFBWjtBQUNBLFFBQU07QUFBRW45QixVQUFGO0FBQVV1WTtBQUFWLE1BQW1COVYsTUFBekI7QUFDQSxRQUFNMjZCLEdBQUcsR0FBR0MsVUFBVSxDQUFDcjlCLE1BQU0sQ0FBQzZvQixTQUFQLElBQW9CdFEsSUFBSSxDQUFDdmEsS0FBMUIsRUFBaUNnQyxNQUFNLENBQUNoQyxLQUF4QyxDQUF0QjtBQUNBLFFBQU1zL0IsR0FBRyxHQUFHRCxVQUFVLENBQUNyOUIsTUFBTSxDQUFDMm9CLFdBQVAsSUFBc0JwUSxJQUFJLENBQUN3ZixPQUE1QixFQUFxQy8zQixNQUFNLENBQUMrM0IsT0FBNUMsQ0FBdEI7QUFDQSxRQUFNd0YsR0FBRyxHQUFHRixVQUFVLENBQUNyOUIsTUFBTSxDQUFDNG9CLFdBQVAsSUFBc0JyUSxJQUFJLENBQUN5ZixPQUE1QixFQUFxQ2g0QixNQUFNLENBQUNnNEIsT0FBNUMsQ0FBdEI7QUFDQSxRQUFNd0YsTUFBTSxHQUFHSCxVQUFVLENBQUNyOUIsTUFBTSxDQUFDOG9CLGdCQUFQLElBQTJCdlEsSUFBSSxDQUFDMGYsWUFBakMsRUFBK0NqNEIsTUFBTSxDQUFDaTRCLFlBQXRELENBQXpCLENBTnNDLENBT3RDOztBQUNBLE1BQUl3RixFQUFFLEdBQUcsQ0FBQ0wsR0FBRyxDQUFDNS9CLE1BQUwsSUFBZSxDQUFDOC9CLEdBQUcsQ0FBQzkvQixNQUE3QixDQVJzQyxDQVN0Qzs7QUFDQWlnQyxJQUFFLEdBQUdBLEVBQUUsSUFBSVIsU0FBUyxDQUFDemdDLEdBQUQsRUFBTTRnQyxHQUFOLENBQXBCLENBVnNDLENBV3RDOztBQUNBSyxJQUFFLEdBQUdBLEVBQUUsSUFBSVYsUUFBUSxDQUFDdmdDLEdBQUQsRUFBTThnQyxHQUFOLENBQW5CLENBWnNDLENBYXRDOztBQUNBRyxJQUFFLEdBQUdBLEVBQUUsSUFBSSxDQUFDUixTQUFTLENBQUN6Z0MsR0FBRCxFQUFNZ2hDLE1BQU4sQ0FBckIsQ0Fkc0MsQ0FldEM7O0FBQ0FDLElBQUUsR0FBR0EsRUFBRSxJQUFJLENBQUNWLFFBQVEsQ0FBQ3ZnQyxHQUFELEVBQU0rZ0MsR0FBTixDQUFwQjtBQUNBNTlCLGdEQUFLLENBQUN3OUIsS0FBTixDQUFZLEtBQVo7QUFDQSxTQUFPTSxFQUFQO0FBQ0Q7O0FBRUQsU0FBU0osVUFBVCxDQUFvQixHQUFHMThCLElBQXZCLEVBQTZCO0FBQzNCLFNBQU9BLElBQUksQ0FBQzZMLE1BQUwsQ0FBWSxDQUFDdlAsR0FBRCxFQUFNd1AsSUFBTixLQUFnQkEsSUFBSSxHQUFHeFAsR0FBRyxDQUFDc3dCLE1BQUosQ0FBVzlnQixJQUFYLENBQUgsR0FBc0J4UCxHQUF0RCxFQUE0RCxFQUE1RCxDQUFQO0FBQ0Q7O0FBRUQsU0FBU3lnQyxNQUFULENBQWdCcEcsR0FBaEIsRUFBcUI7QUFDbkIsUUFBTXFHLEVBQUUsR0FBR3JHLEdBQUcsQ0FBQzNuQixPQUFKLENBQVksb0JBQVosRUFBa0MsTUFBbEMsRUFBMENBLE9BQTFDLENBQWtELEtBQWxELEVBQXlELEtBQXpELENBQVg7QUFDQSxTQUFPZ3VCLEVBQVA7QUFDRDs7QUFFRCxTQUFTQyxNQUFULENBQWdCRCxFQUFoQixFQUFvQjtBQUNsQixTQUFPQSxFQUFFLENBQUM1NUIsSUFBSCxDQUFRZ3pCLElBQVIsQ0FBYTRHLEVBQWIsQ0FBUDtBQUNEOztBQUVELFNBQVNYLE9BQVQsQ0FBaUIxRixHQUFqQixFQUFzQjtBQUNwQjtBQUNBLE1BQUlBLEdBQUcsQ0FBQzk1QixNQUFKLEdBQWEsQ0FBYixJQUFrQjg1QixHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVcsR0FBN0IsSUFBb0NBLEdBQUcsQ0FBQ0EsR0FBRyxDQUFDOTVCLE1BQUosR0FBYSxDQUFkLENBQUgsS0FBd0IsR0FBaEUsRUFBcUU7QUFDbkUsUUFBSW1nQyxFQUFKOztBQUNBLFFBQUk7QUFBRUEsUUFBRSxHQUFHLElBQUlsSCxNQUFKLENBQVdhLEdBQUcsQ0FBQ2x6QixLQUFKLENBQVUsQ0FBVixFQUFhLENBQUMsQ0FBZCxDQUFYLEVBQTZCLEdBQTdCLENBQUw7QUFBeUMsS0FBL0MsQ0FBZ0QsT0FBT3ZELENBQVAsRUFBVTtBQUFFO0FBQWM7O0FBQzFFLFdBQU87QUFBRWtELFVBQUksRUFBRTQ1QixFQUFFLEdBQUdDLE1BQU0sQ0FBQ0QsRUFBRCxDQUFULEdBQWdCLE1BQU07QUFBaEMsS0FBUDtBQUNELEdBTm1CLENBT3BCOzs7QUFDQSxRQUFNRSxLQUFLLEdBQUdILE1BQU0sQ0FBQ3BHLEdBQUcsQ0FBQzdGLFdBQUosRUFBRCxDQUFwQjs7QUFDQSxNQUFJdnpCLDJGQUFBLE1BQWlCbzVCLEdBQUcsQ0FBQzM0QixRQUFKLENBQWEsT0FBYixDQUFyQixFQUE0QztBQUMxQyxVQUFNbS9CLFFBQVEsR0FBR0QsS0FBSyxDQUFDbHVCLE9BQU4sQ0FBYyxTQUFkLEVBQXlCLG9CQUF6QixDQUFqQjtBQUNBLFdBQU87QUFDTDVMLFVBQUksRUFBR2c2QixJQUFELElBQVU7QUFDZCxjQUFNM1AsT0FBTyxHQUFHMlAsSUFBSSxDQUFDdE0sV0FBTCxHQUFtQnp6QixLQUFuQixDQUF5QjgvQixRQUF6QixDQUFoQjs7QUFDQSxZQUFJMVAsT0FBSixFQUFhO0FBQ1gsZ0JBQU00UCxNQUFNLEdBQUc1UCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdocUIsS0FBWCxDQUFpQixDQUFqQixDQUFmO0FBQ0EsY0FBSWxHLG1HQUFBLENBQW9COC9CLE1BQXBCLE1BQWdDQSxNQUFwQyxFQUE0QyxPQUFPLElBQVA7QUFDN0M7O0FBQ0QsZUFBTyxLQUFQO0FBQ0Q7QUFSSSxLQUFQO0FBVUQ7O0FBQ0QsUUFBTUwsRUFBRSxHQUFHLElBQUlsSCxNQUFKLENBQVksSUFBR29ILEtBQU0sR0FBckIsRUFBeUIsR0FBekIsQ0FBWCxDQXRCb0IsQ0FzQnNCOztBQUMxQyxTQUFPO0FBQUU5NUIsUUFBSSxFQUFFNjVCLE1BQU0sQ0FBQ0QsRUFBRDtBQUFkLEdBQVA7QUFDRDs7QUFFRCxTQUFTTSxXQUFULENBQXFCdjhCLElBQXJCLEVBQTJCdEYsSUFBM0IsRUFBaUM7QUFDL0I7QUFDQSxNQUFJc0YsSUFBSSxLQUFLdEYsSUFBYixFQUFtQixPQUFPLENBQVAsQ0FGWSxDQUcvQjtBQUNBOztBQUNBLE1BQUksQ0FDRixHQURFLEVBRUYsT0FGRSxFQUdGdUMsUUFIRSxDQUdPK0MsSUFIUCxLQUdnQjY2QixnQkFBZ0IsQ0FBQ3g0QixJQUFqQixDQUFzQjNILElBQXRCLENBSHBCLEVBR2lELE9BQU8sQ0FBUDtBQUNqRCxTQUFPLENBQVA7QUFDRDs7QUFFRCxNQUFNOGhDLFVBQVUsR0FBRyxhQUFuQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxtQkFBbkI7O0FBQ0EsU0FBU0MsV0FBVCxDQUFxQjE4QixJQUFyQixFQUEyQjtBQUN6QjtBQUNBLE1BQUlBLElBQUksS0FBSyxHQUFiLEVBQWtCO0FBQ2hCLFdBQU8sTUFBTSxDQUFiO0FBQ0QsR0FKd0IsQ0FLekI7QUFDQTtBQUNBOzs7QUFDQSxRQUFNMjhCLE1BQU0sR0FBRzM4QixJQUFJLENBQUMrdkIsV0FBTCxFQUFmLENBUnlCLENBUVU7O0FBQ25DLE1BQUl4bUIsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJL0MsSUFBSSxHQUFHbTJCLE1BQVg7QUFDQSxNQUFJTCxNQUFNLEdBQUcsRUFBYjs7QUFDQSxNQUFJdDhCLElBQUksQ0FBQ3NKLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBSixFQUEyQjtBQUN6QjlDLFFBQUksR0FBR0EsSUFBSSxDQUFDOUQsS0FBTCxDQUFXLENBQVgsQ0FBUDtBQUNBNkcsVUFBTSxHQUFHaXpCLFVBQVQ7QUFDRDs7QUFDRCxNQUFJaGdDLDJGQUFBLE1BQWlCd0QsSUFBSSxDQUFDcVQsUUFBTCxDQUFjLE1BQWQsQ0FBckIsRUFBNEM7QUFDMUM3TSxRQUFJLEdBQUdBLElBQUksQ0FBQzlELEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBQyxDQUFmLENBQVA7QUFDQTQ1QixVQUFNLEdBQUdHLFVBQVQ7QUFDRDs7QUFDRCxRQUFNUixFQUFFLEdBQUcsSUFBSWxILE1BQUosQ0FBWSxJQUFHeHJCLE1BQU8sR0FBRXl5QixNQUFNLENBQUN4MUIsSUFBRCxDQUFPLEdBQUU4MUIsTUFBTyxHQUE5QyxDQUFYO0FBQ0EsU0FBUTVoQyxJQUFELElBQVU7QUFDZjtBQUNBQSxRQUFJLEdBQUdBLElBQUksQ0FBQ3ExQixXQUFMLEVBQVA7QUFDQSxRQUFJNE0sTUFBTSxLQUFLamlDLElBQWYsRUFBcUIsT0FBTyxDQUFQLENBSE4sQ0FJZjs7QUFDQSxVQUFNZ3lCLE9BQU8sR0FBR2h5QixJQUFJLENBQUM0QixLQUFMLENBQVcyL0IsRUFBWCxDQUFoQjs7QUFDQSxRQUFJdlAsT0FBSixFQUFhO0FBQ1gsWUFBTSxHQUFHa1EsTUFBSCxJQUFhbFEsT0FBbkI7QUFDQSxVQUFJLENBQUNrUSxNQUFMLEVBQWEsT0FBTyxDQUFQO0FBQ2IsWUFBTUMsU0FBUyxHQUFHRCxNQUFNLENBQUNsNkIsS0FBUCxDQUFhLENBQWIsQ0FBbEI7QUFDQSxhQUFPbEcsbUdBQUEsQ0FBb0JxZ0MsU0FBcEIsTUFBbUNBLFNBQTFDO0FBQ0Q7O0FBQ0QsV0FBTyxDQUFQO0FBQ0QsR0FiRDtBQWNEOztBQUVELFNBQVNDLFdBQVQsQ0FBcUI5OEIsSUFBckIsRUFBMkI7QUFDekIsUUFBTSs4QixLQUFLLEdBQUcvOEIsSUFBSSxDQUFDd0MsT0FBTCxDQUFhLEdBQWIsQ0FBZDtBQUNBLE1BQUl3NkIsTUFBTSxHQUFHaDlCLElBQUksQ0FBQ3dDLE9BQUwsQ0FBYSxHQUFiLENBQWI7QUFDQSxNQUFJeTZCLEtBQUssR0FBR2pCLE1BQU0sQ0FBQ2g4QixJQUFELENBQWxCO0FBQ0EsTUFBSWc5QixNQUFNLEdBQUdELEtBQWIsRUFBb0JDLE1BQU0sR0FBRyxDQUFDLENBQVY7O0FBQ3BCLE1BQUlELEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDYixRQUFJQyxNQUFNLEdBQUcsQ0FBYixFQUFnQkMsS0FBSyxHQUFJLElBQUdBLEtBQU0sWUFBbEIsQ0FBaEIsS0FDS0EsS0FBSyxHQUFJLElBQUdBLEtBQU0sU0FBbEI7QUFDTjs7QUFDRCxTQUFPZixNQUFNLENBQUMsSUFBSW5ILE1BQUosQ0FBV2tJLEtBQVgsQ0FBRCxDQUFiO0FBQ0Q7O0FBRUQsU0FBU3pCLFdBQVQsQ0FBcUJ4N0IsSUFBckIsRUFBMkI7QUFDekIsTUFBSXFDLElBQUo7O0FBQ0EsTUFBSXJDLElBQUksS0FBSyxZQUFiLEVBQTJCO0FBQ3pCcUMsUUFBSSxHQUFHLE1BQU0sSUFBYjtBQUNELEdBRkQsTUFFTztBQUNMLFVBQU02NkIsU0FBUyxHQUFHbDlCLElBQUksQ0FBQzFELEtBQUwsQ0FBV28rQixjQUFYLENBQWxCOztBQUNBLFFBQUl3QyxTQUFKLEVBQWU7QUFDYixZQUFNQyxTQUFTLEdBQUdULFdBQVcsQ0FBQ1EsU0FBUyxDQUFDLENBQUQsQ0FBVixDQUE3QjtBQUNBLFlBQU1FLFNBQVMsR0FBR04sV0FBVyxDQUFDSSxTQUFTLENBQUMsQ0FBRCxDQUFWLENBQTdCOztBQUNBNzZCLFVBQUksR0FBSXZILEdBQUQsSUFBUztBQUNkLGNBQU11aUMsS0FBSyxHQUFHdmlDLEdBQUcsQ0FBQ3dCLEtBQUosQ0FBVW8rQixjQUFWLENBQWQ7QUFDQSxlQUFPLENBQUMsQ0FBQ3dDLFNBQUYsSUFBZSxDQUFDLENBQUNHLEtBQWpCLElBQ0ZkLFdBQVcsQ0FBQ1csU0FBUyxDQUFDLENBQUQsQ0FBVixFQUFlRyxLQUFLLENBQUMsQ0FBRCxDQUFwQixDQURULElBRUZGLFNBQVMsQ0FBQ0UsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUZQLElBR0ZELFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUhkO0FBSUQsT0FORDtBQU9ELEtBVkQsTUFVTztBQUNMO0FBQ0FoN0IsVUFBSSxHQUFHLE1BQU0sS0FBYjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTztBQUFFQTtBQUFGLEdBQVA7QUFDRDs7QUFFTSxTQUFTZ1ksYUFBVCxDQUF1QnZmLEdBQXZCLEVBQTRCO0FBQ2pDLE1BQUlTLEdBQUcsR0FBR3cvQixPQUFPLENBQUNqZ0MsR0FBRCxDQUFqQjs7QUFDQSxNQUFJUyxHQUFHLEtBQUsyWSxTQUFaLEVBQXVCO0FBQ3JCLFVBQU1sVSxJQUFJLEdBQUcyNkIsY0FBYyxDQUFDN25CLElBQWYsQ0FBb0IsQ0FBQztBQUFFelE7QUFBRixLQUFELEtBQWNBLElBQUksQ0FBQ3ZILEdBQUQsQ0FBdEMsQ0FBYjtBQUNBUyxPQUFHLEdBQUcsQ0FBQXlFLElBQUksUUFBSixZQUFBQSxJQUFJLENBQUVYLE1BQU4sS0FBZ0JXLElBQUksQ0FBQ3VTLElBQTNCO0FBQ0ErcUIsd0JBQW9CLENBQUN4aUMsR0FBRCxFQUFNUyxHQUFHLElBQUksS0FBYixDQUFwQjtBQUNEOztBQUNELFNBQU9BLEdBQVA7QUFDRDtBQUVNLFNBQVNrL0IsY0FBVCxDQUF3Qng1QixJQUF4QixFQUE4QjtBQUNuQ2hELGdEQUFLLENBQUN3OUIsS0FBTixDQUFZLElBQVo7QUFDQSxRQUFNUCxLQUFLLEdBQUdqNkIsSUFBSSxJQUFJLElBQVIsR0FBZTdELDBEQUFTLENBQUMsV0FBRCxDQUF4QixHQUF3QzZELElBQXREOztBQUNBLE1BQUlmLEtBQUosRUFBdUIsRUFIWSxDQU1uQzs7O0FBQ0F5NkIsZ0JBQWMsR0FBRyxDQUFDdjBCLEtBQUssQ0FBQ0MsT0FBTixDQUFjNjBCLEtBQWQsSUFBdUJBLEtBQXZCLEdBQStCLENBQUNBLEtBQUssSUFBSSxFQUFWLEVBQWN2NEIsS0FBZCxDQUFvQixJQUFwQixDQUFoQyxFQUNoQmdDLEdBRGdCLENBQ1g0TixJQUFELElBQVU7QUFDYkEsUUFBSSxHQUFHQSxJQUFJLENBQUNFLElBQUwsRUFBUDtBQUNBLFFBQUksQ0FBQ0YsSUFBRCxJQUFTQSxJQUFJLENBQUNqSixVQUFMLENBQWdCLEdBQWhCLENBQWIsRUFBbUMsT0FBTyxJQUFQO0FBQ25DLFVBQU1vRixJQUFJLEdBQUc2RCxJQUFJLENBQUNqSixVQUFMLENBQWdCLEdBQWhCLEtBQXdCaUosSUFBSSxDQUFDNVAsS0FBTCxDQUFXLElBQVgsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBckM7QUFDQSxVQUFNM0MsSUFBSSxHQUFHME8sSUFBSSxHQUFHNkQsSUFBSSxDQUFDN1AsS0FBTCxDQUFXZ00sSUFBSSxDQUFDNVMsTUFBTCxHQUFjLENBQXpCLEVBQTRCMlcsSUFBNUIsRUFBSCxHQUF3Q0YsSUFBekQ7QUFDQSxVQUFNbFQsTUFBTSxHQUFHcVAsSUFBSSxLQUFLLFVBQVQsSUFBdUJBLElBQUksS0FBSyxRQUEvQyxDQUxhLENBSzRDOztBQUN6RCxVQUFNO0FBQUVyTTtBQUFGLFFBQVdxTSxJQUFJLEtBQUssVUFBVCxJQUF1QkEsSUFBSSxLQUFLLFVBQVQsSUFBdUI0c0IsT0FBTyxDQUFDdDdCLElBQUQsQ0FBckQsSUFDWixDQUFDME8sSUFBRCxJQUFTLENBQUMxTyxJQUFJLENBQUMvQyxRQUFMLENBQWMsR0FBZCxDQUFWLElBQWdDdStCLFdBQVcsQ0FBRSxPQUFNeDdCLElBQUssSUFBYixDQUQvQixDQUNpRDtBQURqRCxPQUVadzdCLFdBQVcsQ0FBQ3g3QixJQUFELENBRmhCLENBTmEsQ0FRVzs7QUFDeEIsV0FBTztBQUFFWCxZQUFGO0FBQVVnRCxVQUFWO0FBQWdCa1E7QUFBaEIsS0FBUDtBQUNELEdBWGdCLEVBWWhCbkcsTUFaZ0IsQ0FZVEMsT0FaUyxDQUFqQjtBQWFBMHVCLFNBQU8sR0FBRyxFQUFWO0FBQ0FDLGFBQVcsR0FBRyxDQUFkO0FBQ0EvOEIsZ0RBQUssQ0FBQ3c5QixLQUFOLENBQVksS0FBWjtBQUNEOztBQUVELFNBQVM2QixvQkFBVCxDQUE4QnY2QixHQUE5QixFQUFtQ00sS0FBbkMsRUFBMEM7QUFDeEMwM0IsU0FBTyxDQUFDaDRCLEdBQUQsQ0FBUCxHQUFlTSxLQUFmO0FBQ0EyM0IsYUFBVyxJQUFJajRCLEdBQUcsQ0FBQ2pILE1BQW5COztBQUNBLE1BQUlrL0IsV0FBVyxHQUFHRixtQkFBbEIsRUFBdUM7QUFDckN6Z0MsVUFBTSxDQUFDNEksSUFBUCxDQUFZODNCLE9BQVosRUFDQ2pnQixJQURELENBQ09qWCxDQUFELElBQU87QUFDWG0zQixpQkFBVyxJQUFJbjNCLENBQUMsQ0FBQy9ILE1BQWpCO0FBQ0EsYUFBT2kvQixPQUFPLENBQUNsM0IsQ0FBRCxDQUFkLENBRlcsQ0FHWDs7QUFDQSxhQUFPbTNCLFdBQVcsR0FBR0YsbUJBQW1CLEdBQUcsQ0FBdEIsR0FBMEIsQ0FBL0M7QUFDRCxLQU5EO0FBT0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7QUM1UEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQXpnQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsaURBQWQsRUFBd0I7QUFDdEI7QUFDQSxRQUFNZ2pDLFdBQU4sQ0FBa0JuaUMsRUFBbEIsRUFBc0I7QUFDcEIsVUFBTTJGLE1BQU0sR0FBR2lXLHlEQUFhLENBQUM1YixFQUFELENBQTVCO0FBQ0EsVUFBTW9pQyxPQUFPLEdBQUcsTUFBTUMsaUJBQWlCLENBQUMsQ0FBQzE4QixNQUFELENBQUQsQ0FBdkM7QUFDQSxXQUFPeThCLE9BQU8sQ0FBQyxDQUFELENBQWQ7QUFDRCxHQU5xQjs7QUFPdEI7QUFDQSxRQUFNRSxjQUFOLEdBQXVCO0FBQ3JCcDZCLDhEQUFTLENBQUMsWUFBRCxFQUFlL0YsSUFBSSxDQUFDQyxHQUFMLEVBQWYsQ0FBVDtBQUNBLFVBQU1tZ0MsUUFBUSxHQUFHejhCLHNEQUFVLEdBQUdrTCxNQUFiLENBQW9CckIsSUFBSSxJQUFJQSxJQUFJLENBQUN2SCxNQUFMLENBQVlvQyxZQUF4QyxDQUFqQjtBQUNBLFVBQU00M0IsT0FBTyxHQUFHLE1BQU1DLGlCQUFpQixDQUFDRSxRQUFELENBQXZDO0FBQ0EsV0FBT0gsT0FBTyxDQUFDdmdDLFFBQVIsQ0FBaUIsSUFBakIsQ0FBUDtBQUNEOztBQWJxQixDQUF4Qjs7QUFnQkEsZUFBZXdnQyxpQkFBZixDQUFpQ3h4QixPQUFqQyxFQUEwQztBQUN4QyxRQUFNMnhCLEtBQUssR0FBRyxFQUFkO0FBQ0EsUUFBTUosT0FBTyxHQUFHLE1BQU1wK0IsT0FBTyxDQUFDd0ssR0FBUixDQUFZcUMsT0FBTyxDQUFDdEgsR0FBUixDQUFZb0csSUFBSSxJQUFJOHlCLFdBQVcsQ0FBQzl5QixJQUFELEVBQU82eUIsS0FBUCxDQUEvQixDQUFaLENBQXRCOztBQUNBLE1BQUlBLEtBQUssQ0FBQzloQyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCOFQsVUFBTSxDQUFDZ3VCLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBTjtBQUNELEdBRkQsTUFFTyxJQUFJQSxLQUFLLENBQUM5aEMsTUFBVixFQUFrQjtBQUN2QjhULFVBQU0sQ0FBQztBQUNMO0FBQ0EyQyxVQUFJLEVBQUVxckIsS0FBSyxDQUFDajVCLEdBQU4sQ0FBVXFlLENBQUMsSUFBSUEsQ0FBQyxDQUFDelEsSUFBakIsRUFBdUI5QixJQUF2QixDQUE0QixJQUE1QixDQUZEO0FBR0xpVSxhQUFPLEVBQUU5bEIsT0FBTyxDQUFDQyxPQUFSLENBQWdCaS9CO0FBSHBCLEtBQUQsQ0FBTjtBQUtEOztBQUNELFNBQU9OLE9BQVA7QUFDRDs7QUFFRCxNQUFNTyxTQUFTLEdBQUcsRUFBbEIsQyxDQUVBOztBQUNBLFNBQVNGLFdBQVQsQ0FBcUI5OEIsTUFBckIsRUFBNkI2OEIsS0FBN0IsRUFBb0M7QUFDbEMsUUFBTTtBQUFFeGlDO0FBQUYsTUFBUzJGLE1BQU0sQ0FBQ3lFLEtBQXRCO0FBQ0EsUUFBTXdDLE9BQU8sR0FBRysxQixTQUFTLENBQUMzaUMsRUFBRCxDQUFULEtBQWtCMmlDLFNBQVMsQ0FBQzNpQyxFQUFELENBQVQsR0FBZ0I0aUMsYUFBYSxDQUFDajlCLE1BQUQsRUFBUzY4QixLQUFULENBQS9DLENBQWhCO0FBQ0EsU0FBTzUxQixPQUFQO0FBQ0Q7O0FBRUQsZUFBZWcyQixhQUFmLENBQTZCajlCLE1BQTdCLEVBQXFDNjhCLEtBQXJDLEVBQTRDO0FBQzFDLFFBQU07QUFBRXhpQztBQUFGLE1BQVMyRixNQUFNLENBQUN5RSxLQUF0QjtBQUNBLE1BQUl5NEIsS0FBSjtBQUNBLE1BQUlDLE1BQUo7QUFDQSxNQUFJQyxZQUFKOztBQUNBLE1BQUk7QUFDRixVQUFNO0FBQUVuOUI7QUFBRixRQUFhLE1BQU11Vyx1REFBVyxDQUFDO0FBQ25DbmMsUUFEbUM7QUFFbkNpRCxVQUFJLEVBQUUsTUFBTSsvQixjQUFjLENBQUNyOUIsTUFBRCxDQUZTO0FBR25DQyxZQUFNLEVBQUU7QUFBRXE5QixnQkFBUSxFQUFFO0FBQVo7QUFIMkIsS0FBRCxDQUFwQztBQUtBSixTQUFLLEdBQUcxaEIsNEZBQUksQ0FBQyxrQkFBRCxFQUFxQixDQUFDb0QscUdBQWEsQ0FBQzNlLE1BQUQsQ0FBZCxDQUFyQixDQUFaO0FBQ0FtOUIsZ0JBQVksR0FBRztBQUFFbGdDLFdBQUssRUFBRTtBQUFULEtBQWY7QUFDQSxXQUFPLElBQVA7QUFDRCxHQVRELENBU0UsT0FBTytDLE1BQVAsRUFBZTtBQUNmazlCLFVBQU0sR0FBR2w5QixNQUFNLENBQUNzSCxLQUFoQixDQURlLENBRWY7O0FBQ0E2MUIsZ0JBQVksR0FBRyxDQUFDbjlCLE1BQU0sQ0FBQ3NILEtBQVIsSUFBaUIsQ0FBQ3RILE1BQU0sQ0FBQ3E5QixRQUF6QixJQUFxQyxFQUFwRDtBQUNBLFFBQUluK0IsS0FBSixFQUF1QlgsRUFBQTtBQUN4QixHQWRELFNBY1U7QUFDUixRQUFJNCtCLFlBQUosRUFBa0I7QUFDaEJELFlBQU0sR0FBRyxNQUFNamhCLDBEQUFjLENBQUNsYyxNQUFELEVBQVMsSUFBVCxFQUFlbzlCLFlBQWYsQ0FBN0I7QUFDQSxVQUFJaitCLEtBQUosRUFBaUNYLEVBQUE7QUFDbEM7O0FBQ0QsUUFBSSsrQixTQUFTLENBQUN2OUIsTUFBRCxDQUFULEtBQXNCazlCLEtBQUssSUFBSUMsTUFBL0IsQ0FBSixFQUE0QztBQUMxQ04sV0FBSyxDQUFDdHlCLElBQU4sQ0FBVztBQUNUdkssY0FEUztBQUVUd1IsWUFBSSxFQUFFLFNBQWlCd0wsd0ZBQWpCLEdBQUNrZ0IsS0FBRCxFQUFRQyxNQUFSLEdBQTBCLElBQTFCO0FBRkcsT0FBWDtBQUlEOztBQUNELFdBQU9ILFNBQVMsQ0FBQzNpQyxFQUFELENBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxlQUFlZ2pDLGNBQWYsQ0FBOEI7QUFBRTU0QixPQUFLLEVBQUU7QUFBRXBLO0FBQUYsR0FBVDtBQUFpQnliLE1BQWpCO0FBQXVCdlk7QUFBdkIsQ0FBOUIsRUFBK0Q7QUFDN0QsUUFBTWlnQyxXQUFXLEdBQUdqZ0MsTUFBTSxDQUFDaWdDLFdBQVAsSUFBc0IxbkIsSUFBSSxDQUFDMG5CLFdBQTNCLElBQTBDamdDLE1BQU0sQ0FBQzBlLGNBQXJFO0FBQ0EsUUFBTXdoQixTQUFTLEdBQUdsZ0MsTUFBTSxDQUFDa2dDLFNBQVAsSUFBb0IzbkIsSUFBSSxDQUFDMm5CLFNBQXpCLElBQXNDRCxXQUF4RCxDQUY2RCxDQUc3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQUksQ0FBQ0MsU0FBTCxFQUFnQixNQUFNLEtBQU47QUFDaEIsTUFBSUMsWUFBSjtBQUNBLFFBQU16OUIsTUFBTSxHQUFHLEVBQWY7QUFDQSxRQUFNeWIsTUFBTSxHQUFHO0FBQUV6YixVQUFGO0FBQVV4QyxTQUFLLEVBQUU7QUFBRXBEO0FBQUY7QUFBakIsR0FBZjtBQUNBc2pDLFVBQVEsQ0FBQ25pQiw0RkFBSSxDQUFDLHNCQUFELENBQUwsQ0FBUjs7QUFDQSxNQUFJO0FBQ0YsVUFBTTtBQUFFN2hCO0FBQUYsUUFBVyxNQUFNcUQsK0ZBQU8sQ0FBQ3lnQyxTQUFELEVBQVk7QUFDeEM7QUFDQXZnQyxXQUFLLEVBQUUsVUFGaUM7QUFHeENDLGFBQU8sRUFBRTtBQUFFQyxjQUFNLEVBQUU7QUFBVjtBQUgrQixLQUFaLENBQTlCO0FBS0EsVUFBTTtBQUFFc0U7QUFBRixRQUFjNlUseURBQVMsQ0FBQzVjLElBQUQsQ0FBN0I7O0FBQ0EsUUFBSXllLHNHQUFjLENBQUN0QyxJQUFJLENBQUNwVSxPQUFOLEVBQWVBLE9BQWYsQ0FBZCxJQUF5QyxDQUE3QyxFQUFnRDtBQUM5Q2k4QixjQUFRLENBQUNuaUIsNEZBQUksQ0FBQyxhQUFELENBQUwsRUFBc0I7QUFBRThoQixnQkFBUSxFQUFFO0FBQVosT0FBdEIsQ0FBUjtBQUNELEtBRkQsTUFFTyxJQUFJLENBQUNFLFdBQUwsRUFBa0I7QUFDdkJHLGNBQVEsQ0FBQ25pQiw0RkFBSSxDQUFDLGVBQUQsQ0FBTCxFQUF3QjtBQUFFOGhCLGdCQUFRLEVBQUU7QUFBWixPQUF4QixDQUFSO0FBQ0QsS0FGTSxNQUVBO0FBQ0xLLGNBQVEsQ0FBQ25pQiw0RkFBSSxDQUFDLGFBQUQsQ0FBTCxDQUFSO0FBQ0FraUIsa0JBQVksR0FBR2xpQiw0RkFBSSxDQUFDLHdCQUFELENBQW5CO0FBQ0EsYUFBTyxDQUFDLE1BQU14ZSwrRkFBTyxDQUFDd2dDLFdBQUQsRUFBYztBQUFFdGdDLGFBQUssRUFBRTtBQUFULE9BQWQsQ0FBZCxFQUFvRHZELElBQTNEO0FBQ0Q7QUFDRixHQWhCRCxDQWdCRSxPQUFPNE4sS0FBUCxFQUFjO0FBQ2QsUUFBSXBJLEtBQUosRUFBdUJYLEVBQUE7QUFDdkJtL0IsWUFBUSxDQUFDRCxZQUFZLElBQUlsaUIsNEZBQUksQ0FBQyw0QkFBRCxDQUFyQixFQUFxRDtBQUFFalU7QUFBRixLQUFyRCxDQUFSO0FBQ0Q7O0FBQ0QsUUFBTXRILE1BQU47O0FBQ0EsV0FBUzA5QixRQUFULENBQWtCaGlCLE9BQWxCLEVBQTJCO0FBQUVwVSxTQUFGO0FBQVMrMUIsWUFBUSxHQUFHLENBQUMvMUI7QUFBckIsTUFBK0IsRUFBMUQsRUFBOEQ7QUFDNURqTyxVQUFNLENBQUNDLE1BQVAsQ0FBYzBHLE1BQWQsRUFBc0I7QUFDcEIwYixhQURvQjtBQUVwQjJoQixjQUZvQjtBQUdwQi8xQixXQUFLLEVBQUVBLEtBQUssR0FBSSxHQUFFaVUsNEZBQUksQ0FBQyxjQUFELENBQWlCLElBQUdqVSxLQUFLLENBQUM4RixNQUFPLEtBQUk5RixLQUFLLENBQUN4TixHQUFJLEVBQXpELEdBQTZELElBSHJELENBSXBCOztBQUpvQixLQUF0QjtBQU1BVixtR0FBTyxDQUFDb2lCLHdHQUFELEVBQW9CQyxNQUFwQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTNmhCLFNBQVQsQ0FBbUJ2OUIsTUFBbkIsRUFBMkI7QUFBQTs7QUFDekIsUUFBTTQ5QixPQUFPLEdBQUd2aEMsMERBQVMsQ0FBQyxlQUFELENBQXpCO0FBQ0EsU0FBT0EsMERBQVMsQ0FBQyxxQkFBRCxDQUFULEdBQ0h1aEMsT0FERyw0QkFFSDU5QixNQUFNLENBQUN5QyxNQUFQLENBQWNvN0IsYUFGWCxvQ0FFNEJELE9BRm5DO0FBR0Q7O0FBRUQsU0FBUy91QixNQUFULENBQWdCO0FBQ2Q3TyxRQURjO0FBRWR3UixNQUZjO0FBR2RtUyxTQUFPLEdBQUcsTUFBTW5xQixpREFBUSxDQUFDNGxCLFVBQVQsQ0FBb0JwZixNQUFNLENBQUN5RSxLQUFQLENBQWFwSyxFQUFqQztBQUhGLENBQWhCLEVBSUc7QUFDRGIsbURBQVEsQ0FBQ2dxQixZQUFULENBQXNCO0FBQ3BCaFMsUUFEb0I7QUFFcEI7QUFDQTFDLFNBQUssRUFBRTdRLFVBQVUsR0FBSSxHQUFFdWQsNEZBQUksQ0FBQyxvQkFBRCxDQUF1QixNQUFLQSw0RkFBSSxDQUFDLFNBQUQsQ0FBWSxFQUF0RCxHQUEwRDtBQUh2RCxHQUF0QixFQUlHckksU0FKSCxFQUljO0FBQ1p3UTtBQURZLEdBSmQ7QUFPRCxDOzs7Ozs7Ozs7Ozs7QUNqSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1KLE9BQU8sR0FBRyxFQUFoQixDLENBQW9COztBQUNwQixJQUFJcm1CLEtBQUssR0FBRyxFQUFaLEMsQ0FBZ0I7O0FBQ2hCLElBQUk0Z0MsZUFBSjtBQUVBeGtDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxpREFBZCxFQUF3QjtBQUN0QjtBQUNBLFFBQU11a0MsYUFBTixDQUFvQjFqQyxFQUFwQixFQUF3QjtBQUN0QixVQUFNMmpDLE1BQU0sR0FBRyxNQUFNcmxCLCtEQUFtQixDQUFDLENBQUN0ZSxFQUFELENBQUQsQ0FBeEM7QUFDQSxXQUFPMmpDLE1BQU0sQ0FBQzNqQyxFQUFELENBQU4sSUFBYyxFQUFyQjtBQUNELEdBTHFCOztBQU10Qjs7QUFFQSxRQUFNNGpDLGNBQU4sQ0FBcUJ0a0MsSUFBckIsRUFBMkI7QUFDekI7QUFDQSxVQUFNcWtDLE1BQU0sR0FBR3JrQyxJQUFJLENBQUNvUSxNQUFMLENBQVksQ0FBQ3ZQLEdBQUQsRUFBTTtBQUFFaUQsV0FBRjtBQUFTbVg7QUFBVCxLQUFOLEtBQTJCO0FBQUE7O0FBQ3BELFlBQU12YSxFQUFFLEdBQUdvRCxLQUFLLENBQUNwRCxFQUFOLG1CQUFZZ2IscURBQVMsQ0FBQzVYLEtBQUQsQ0FBckIscUJBQVksV0FBa0JnSCxLQUFsQixDQUF3QnBLLEVBQXBDLENBQVg7QUFDQSxVQUFJQSxFQUFKLEVBQVFHLEdBQUcsQ0FBQ0gsRUFBRCxDQUFILEdBQVV1YSxLQUFWO0FBQ1IsYUFBT3BhLEdBQVA7QUFDRCxLQUpjLEVBSVosRUFKWSxDQUFmO0FBS0EsVUFBTTZELE9BQU8sQ0FBQ3dLLEdBQVIsQ0FBWSxDQUNoQitQLDJEQUFlLENBQUNvbEIsTUFBRCxDQURDLEVBRWhCRSxvQkFBb0IsQ0FBQ0Msa0JBQWtCLENBQUNILE1BQUQsQ0FBbkIsQ0FGSixDQUFaLENBQU47QUFJRCxHQW5CcUI7O0FBb0J0QjtBQUNBSSxhQUFXLENBQUM7QUFBRS9qQyxNQUFGO0FBQU0ySCxPQUFOO0FBQVdNLFNBQUssR0FBRztBQUFuQixHQUFELEVBQTRCckksR0FBNUIsRUFBaUM7QUFDMUMwUSw0R0FBUyxDQUFDek4sS0FBRCxFQUFRLENBQUM3QyxFQUFELEVBQUsySCxHQUFMLEVBQVUsTUFBVixDQUFSLEVBQTJCTSxLQUEzQixDQUFUO0FBQ0FxSSw0R0FBUyxDQUFDek4sS0FBRCxFQUFRLENBQUM3QyxFQUFELEVBQUsySCxHQUFMLEVBQVUvSCxHQUFHLENBQUNFLEdBQUosQ0FBUUUsRUFBbEIsRUFBc0JKLEdBQUcsQ0FBQ0MsT0FBMUIsQ0FBUixFQUE0Q29JLEtBQTVDLENBQVQ7QUFDQSs3QixlQUFXO0FBQ1o7O0FBekJxQixDQUF4QjtBQTRCQXhnQyxPQUFPLENBQUN3TyxJQUFSLENBQWErVSxTQUFiLENBQXVCcGpCLFdBQXZCLENBQW1DMUQsZ0JBQW5DO0FBQ0F1RCxPQUFPLENBQUN3TyxJQUFSLENBQWFpeUIsVUFBYixDQUF3QnRnQyxXQUF4QixDQUFvQyxDQUFDdWdDLE9BQUQsRUFBVUMsU0FBVixLQUF3QmxrQyxnQkFBZ0IsQ0FBQ2trQyxTQUFELENBQTVFO0FBRU8sU0FBU2xrQyxnQkFBVCxDQUEwQkYsS0FBMUIsRUFBaUM7QUFDdEMsV0FBU3lJLG1HQUFULEVBQUEwZ0IsT0FBTyxFQUFlLENBQUMsQ0FBQ2xwQixFQUFELEVBQUtva0MsVUFBTCxDQUFELEtBQXNCO0FBQzFDLFFBQUlya0MsS0FBSyxJQUFJcWtDLFVBQWIsRUFBeUI7QUFDdkIsYUFBT0EsVUFBVSxDQUFDcmtDLEtBQUQsQ0FBakI7QUFDQSxVQUFJKzFCLCtGQUFPLENBQUNzTyxVQUFELENBQVgsRUFBeUIsT0FBT2xiLE9BQU8sQ0FBQ2xwQixFQUFELENBQWQ7QUFDMUI7QUFDRixHQUxNLENBQVA7QUFNRDtBQUVNLFNBQVNhLGNBQVQsQ0FBd0JkLEtBQXhCLEVBQStCRixPQUEvQixFQUF3Q3drQyxTQUF4QyxFQUFtRDtBQUN4REEsV0FBUyxDQUFDbjVCLE9BQVYsQ0FBbUJsTCxFQUFELElBQVE7QUFDeEJzUSw0R0FBUyxDQUFDNFksT0FBRCxFQUFVLENBQUNscEIsRUFBRCxFQUFLRCxLQUFMLEVBQVlGLE9BQVosQ0FBVixFQUFnQyxDQUFoQyxDQUFUO0FBQ0QsR0FGRDtBQUdEOztBQUVELGVBQWVta0MsV0FBZixHQUE2QjtBQUMzQixTQUFPLENBQUNQLGVBQVIsRUFBeUI7QUFDdkJBLG1CQUFlLEdBQUcsSUFBbEI7QUFDQSxVQUFNLENBQU47QUFDQSxVQUFNYSxZQUFZLEdBQUd6aEMsS0FBckI7QUFDQUEsU0FBSyxHQUFHLEVBQVI7QUFDQSxVQUFNMGhDLFFBQVEsQ0FBQ0QsWUFBRCxDQUFkO0FBQ0FiLG1CQUFlLEdBQUcsS0FBbEI7QUFDQSxRQUFJM04sK0ZBQU8sQ0FBQ2p6QixLQUFELENBQVgsRUFBb0I7QUFDckI7QUFDRjs7QUFFRCxlQUFlMGhDLFFBQWYsQ0FBd0JELFlBQXhCLEVBQXNDO0FBQ3BDLFFBQU1qbEMsR0FBRyxHQUFHSixNQUFNLENBQUM0SSxJQUFQLENBQVl5OEIsWUFBWixDQUFaO0FBQ0EsUUFBTUUsV0FBVyxHQUFHLE1BQU1sbUIsK0RBQW1CLENBQUNqZixHQUFELENBQTdDO0FBQ0FBLEtBQUcsQ0FBQzZMLE9BQUosQ0FBYWxMLEVBQUQsSUFBUTtBQUNsQixhQUFrQndJLG1HQUFsQixFQUFBODdCLFlBQVksQ0FBQ3RrQyxFQUFELENBQVosRUFBK0IsQ0FBQyxDQUFDMkgsR0FBRCxFQUFNO0FBQUUrdkI7QUFBRixLQUFOLENBQUQsS0FBcUI7QUFDbERwbkIsOEdBQVMsQ0FBQ2swQixXQUFELEVBQWMsQ0FBQ3hrQyxFQUFELEVBQUsySCxHQUFMLENBQWQsRUFBeUIrdkIsSUFBSSxJQUFJNWUsU0FBakMsQ0FBVDtBQUNELEtBRkQ7QUFHRCxHQUpEO0FBS0EsUUFBTTlVLE9BQU8sQ0FBQ3dLLEdBQVIsQ0FBWSxDQUNoQitQLDJEQUFlLENBQUNpbUIsV0FBRCxDQURDLEVBRWhCWCxvQkFBb0IsQ0FBQ1ksaUJBQWlCLENBQUNILFlBQUQsQ0FBbEIsRUFBa0M7QUFBRUksV0FBTyxFQUFFO0FBQVgsR0FBbEMsQ0FGSixDQUFaLENBQU47QUFJRDs7QUFFRCxlQUFlYixvQkFBZixDQUFvQ2MsWUFBcEMsRUFBa0Q7QUFBRUQ7QUFBRixJQUFjLEVBQWhFLEVBQW9FO0FBQ2xFLFFBQU1FLEtBQUssR0FBRyxFQUFkOztBQUNBLE9BQUssTUFBTSxDQUFDN2tDLEtBQUQsRUFBUThrQyxNQUFSLENBQVgsSUFBOEI1bEMsTUFBTSxDQUFDbVUsT0FBUCxDQUFldXhCLFlBQWYsQ0FBOUIsRUFBNEQ7QUFDMUQsU0FBSyxNQUFNLENBQUM5a0MsT0FBRCxFQUFVaWxDLFNBQVYsQ0FBWCxJQUFtQzdsQyxNQUFNLENBQUNtVSxPQUFQLENBQWV5eEIsTUFBZixDQUFuQyxFQUEyRDtBQUN6RCxVQUFJLENBQUMvTywrRkFBTyxDQUFDZ1AsU0FBRCxDQUFaLEVBQXlCO0FBQ3ZCLFlBQUlKLE9BQUosRUFBYUksU0FBUyxDQUFDSixPQUFWLEdBQW9CLElBQXBCO0FBQ2JFLGFBQUssQ0FBQzEwQixJQUFOLENBQVd3WixrR0FBVSxDQUFDLENBQUMzcEIsS0FBRixFQUFTLGVBQVQsRUFBMEIra0MsU0FBMUIsRUFBcUM7QUFBRWpsQyxpQkFBTyxFQUFFLENBQUNBO0FBQVosU0FBckMsQ0FBckI7QUFDQSxZQUFJK2tDLEtBQUssQ0FBQ2xrQyxNQUFOLEtBQWlCLEVBQXJCLEVBQXlCLE1BQU1zRCxPQUFPLENBQUN3SyxHQUFSLENBQVlvMkIsS0FBSyxDQUFDOW9CLE1BQU4sQ0FBYSxDQUFiLENBQVosQ0FBTixDQUhGLENBR3NDO0FBQzlEO0FBQ0Y7QUFDRjs7QUFDRCxRQUFNOVgsT0FBTyxDQUFDd0ssR0FBUixDQUFZbzJCLEtBQVosQ0FBTjtBQUNELEMsQ0FFRDs7O0FBQ0EsU0FBU0gsaUJBQVQsQ0FBMkJNLFNBQTNCLEVBQXNDO0FBQ3BDLFFBQU1DLE1BQU0sR0FBRyxFQUFmO0FBQ0EsV0FBV3g4QixtR0FBWCxFQUFBdThCLFNBQVMsRUFBZSxDQUFDLENBQUMva0MsRUFBRCxFQUFLaWxDLFVBQUwsQ0FBRCxLQUFzQjtBQUM1QyxVQUFNQyxXQUFXLEdBQUdqbUMsTUFBTSxDQUFDbVUsT0FBUCxDQUFlNnhCLFVBQWYsQ0FBcEI7QUFDQSxhQUFhejhCLG1HQUFiLEVBQUEwZ0IsT0FBTyxDQUFDbHBCLEVBQUQsQ0FBUCxFQUEwQixDQUFDLENBQUNELEtBQUQsRUFBUThrQyxNQUFSLENBQUQsS0FBcUI7QUFDN0MsZUFBUTNnQixpR0FBUixFQUFBMmdCLE1BQU0sRUFBY2hsQyxPQUFELElBQWE7QUFDOUJxbEMsbUJBQVcsQ0FBQ2g2QixPQUFaLENBQW9CLENBQUMsQ0FBQ3ZELEdBQUQsRUFBTXc5QixPQUFOLENBQUQsS0FBb0I7QUFBQTs7QUFDdEM7QUFDQSxjQUFJQSxPQUFPLENBQUN6TixJQUFSLHdCQUFpQnlOLE9BQU8sQ0FBQ3BsQyxLQUFELENBQXhCLHFCQUFpQixlQUFpQkYsT0FBakIsQ0FBakIsQ0FBSixFQUFnRDtBQUM5Q3lRLG9IQUFTLENBQUMwMEIsTUFBRCxFQUFTLENBQUNqbEMsS0FBRCxFQUFRRixPQUFSLEVBQWlCRyxFQUFqQixFQUFxQjJILEdBQXJCLENBQVQsRUFBb0N3OUIsT0FBTyxDQUFDek4sSUFBNUMsQ0FBVDtBQUNEO0FBQ0YsU0FMRDtBQU1ELE9BUEssQ0FBTjtBQVFELEtBVEQ7QUFVRCxHQVpRLENBQVQ7QUFhQSxTQUFPc04sTUFBUDtBQUNELEMsQ0FFRDs7O0FBQ0EsU0FBU2xCLGtCQUFULENBQTRCSCxNQUE1QixFQUFvQztBQUNsQyxRQUFNcUIsTUFBTSxHQUFHLEVBQWY7QUFDQSxXQUFReDhCLG1HQUFSLEVBQUFtN0IsTUFBTSxFQUFlLENBQUMsQ0FBQzNqQyxFQUFELEVBQUt1YSxLQUFMLENBQUQsS0FBaUI7QUFDcEMsYUFBYS9SLG1HQUFiLEVBQUEwZ0IsT0FBTyxDQUFDbHBCLEVBQUQsQ0FBUCxFQUEwQixDQUFDLENBQUNELEtBQUQsRUFBUThrQyxNQUFSLENBQUQsS0FBcUI7QUFDN0MsZUFBUTNnQixpR0FBUixFQUFBMmdCLE1BQU0sRUFBYWhsQyxPQUFPLElBQUk7QUFDNUJ5USxnSEFBUyxDQUFDMDBCLE1BQUQsRUFBUyxDQUFDamxDLEtBQUQsRUFBUUYsT0FBUixFQUFpQkcsRUFBakIsQ0FBVCxFQUErQnVhLEtBQS9CLENBQVQ7QUFDRCxPQUZLLENBQU47QUFHRCxLQUpEO0FBS0QsR0FOSyxDQUFOO0FBT0EsU0FBT3lxQixNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDN0hEO0FBQUE7QUFBZSxNQUFNdC9CLFlBQU4sQ0FBbUI7QUFDaEM0RixhQUFXLENBQUNpNEIsT0FBRCxFQUFVO0FBQ25CLFNBQUs5MkIsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLODJCLE9BQUwsR0FBZUEsT0FBZjtBQUNEOztBQUVENkIsV0FBUyxDQUFDNzNCLElBQUQsRUFBTztBQUNkLFFBQUksS0FBS2cyQixPQUFMLElBQWdCLENBQUMsS0FBS0EsT0FBTCxDQUFhMWhDLFFBQWIsQ0FBc0IwTCxJQUF0QixDQUFyQixFQUFrRDtBQUNoRCxZQUFNLElBQUlySixLQUFKLENBQVcsdUJBQXNCcUosSUFBSyxFQUF0QyxDQUFOO0FBQ0Q7QUFDRjs7QUFFRGtYLElBQUUsQ0FBQ2xYLElBQUQsRUFBTzgzQixNQUFQLEVBQWU7QUFDZixTQUFLRCxTQUFMLENBQWU3M0IsSUFBZjtBQUNBLFVBQU07QUFBRWQ7QUFBRixRQUFhLElBQW5CO0FBQ0EsUUFBSXd3QixRQUFRLEdBQUd4d0IsTUFBTSxDQUFDYyxJQUFELENBQXJCOztBQUNBLFFBQUksQ0FBQzB2QixRQUFMLEVBQWU7QUFDYkEsY0FBUSxHQUFHLEVBQVg7QUFDQXh3QixZQUFNLENBQUNjLElBQUQsQ0FBTixHQUFlMHZCLFFBQWY7QUFDRDs7QUFDRCxXQUFPLE1BQU0sS0FBS3ZZLEdBQUwsQ0FBU25YLElBQVQsRUFBZTgzQixNQUFmLENBQWI7QUFDRDs7QUFFRDNnQixLQUFHLENBQUNuWCxJQUFELEVBQU84M0IsTUFBUCxFQUFlO0FBQ2hCLFNBQUtELFNBQUwsQ0FBZTczQixJQUFmO0FBQ0EsVUFBTTB2QixRQUFRLEdBQUcsS0FBS3h3QixNQUFMLENBQVljLElBQVosQ0FBakI7O0FBQ0EsUUFBSTB2QixRQUFKLEVBQWM7QUFDWixZQUFNOTFCLENBQUMsR0FBRzgxQixRQUFRLENBQUM3MUIsT0FBVCxDQUFpQmkrQixNQUFqQixDQUFWO0FBQ0EsVUFBSWwrQixDQUFDLElBQUksQ0FBVCxFQUFZODFCLFFBQVEsQ0FBQ25oQixNQUFULENBQWdCM1UsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDYjtBQUNGOztBQUVENGEsTUFBSSxDQUFDeFUsSUFBRCxFQUFPak8sSUFBUCxFQUFhO0FBQ2YsU0FBSzhsQyxTQUFMLENBQWU3M0IsSUFBZjtBQUNBLFVBQU0wdkIsUUFBUSxHQUFHLEtBQUt4d0IsTUFBTCxDQUFZYyxJQUFaLENBQWpCOztBQUNBLFFBQUkwdkIsUUFBSixFQUFjO0FBQ1osWUFBTTlLLEdBQUcsR0FBRztBQUNWNWtCLFlBRFU7QUFFVmpPLFlBRlU7QUFHVmdtQyx3QkFBZ0IsRUFBRSxLQUhSOztBQUlWanJCLHNCQUFjLEdBQUc7QUFDZjhYLGFBQUcsQ0FBQ21ULGdCQUFKLEdBQXVCLElBQXZCO0FBQ0Q7O0FBTlMsT0FBWjtBQVFBckksY0FBUSxDQUFDdmQsSUFBVCxDQUFlMmxCLE1BQUQsSUFBWTtBQUN4QkEsY0FBTSxDQUFDbFQsR0FBRCxDQUFOO0FBQ0EsZUFBT0EsR0FBRyxDQUFDbVQsZ0JBQVg7QUFDRCxPQUhEO0FBSUQ7QUFDRjs7QUFqRCtCLEM7Ozs7Ozs7Ozs7OztBQ0FsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsT0FBVCxHQUFtQixDQUFFOztBQUU1QixTQUFTQyxZQUFULENBQXNCNzlCLEdBQXRCLEVBQTJCO0FBQ3pCLFNBQU8sQ0FBQyxHQUFHOUQsSUFBSixLQUFhNGhDLDRDQUFLLElBQUlBLDRDQUFLLENBQUM5OUIsR0FBRCxDQUFMLENBQVcsR0FBRzlELElBQWQsQ0FBN0I7QUFDRDs7QUFFTSxTQUFTNmhDLE9BQVQsR0FBbUI7QUFDeEIsU0FBTyxDQUFDLENBQUNELDRDQUFUO0FBQ0Q7QUFFTSxNQUFNRSxTQUFTLEdBQUdILFlBQVksQ0FBQyxXQUFELENBQTlCO0FBQ0EsTUFBTUksWUFBWSxHQUFHSixZQUFZLENBQUMsY0FBRCxDQUFqQztBQUNBLE1BQU1LLGVBQWUsR0FBR0wsWUFBWSxDQUFDLGlCQUFELENBQXBDLEMiLCJmaWxlIjoiYmFja2dyb3VuZC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJiYWNrZ3JvdW5kL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvYmFja2dyb3VuZC9pbmRleC5qc1wiLFwicHVibGljL2xpYi90bGRqc1wiLFwiY29tbW9uXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyohIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZSB2MS40LjEgYnkgQG1hdGhpYXMgKi9cbjsoZnVuY3Rpb24ocm9vdCkge1xuXG5cdC8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZXMgKi9cblx0dmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJlxuXHRcdCFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cdHZhciBmcmVlTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiZcblx0XHQhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblx0dmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcblx0aWYgKFxuXHRcdGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8XG5cdFx0ZnJlZUdsb2JhbC53aW5kb3cgPT09IGZyZWVHbG9iYWwgfHxcblx0XHRmcmVlR2xvYmFsLnNlbGYgPT09IGZyZWVHbG9iYWxcblx0KSB7XG5cdFx0cm9vdCA9IGZyZWVHbG9iYWw7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGBwdW55Y29kZWAgb2JqZWN0LlxuXHQgKiBAbmFtZSBwdW55Y29kZVxuXHQgKiBAdHlwZSBPYmplY3Rcblx0ICovXG5cdHZhciBwdW55Y29kZSxcblxuXHQvKiogSGlnaGVzdCBwb3NpdGl2ZSBzaWduZWQgMzItYml0IGZsb2F0IHZhbHVlICovXG5cdG1heEludCA9IDIxNDc0ODM2NDcsIC8vIGFrYS4gMHg3RkZGRkZGRiBvciAyXjMxLTFcblxuXHQvKiogQm9vdHN0cmluZyBwYXJhbWV0ZXJzICovXG5cdGJhc2UgPSAzNixcblx0dE1pbiA9IDEsXG5cdHRNYXggPSAyNixcblx0c2tldyA9IDM4LFxuXHRkYW1wID0gNzAwLFxuXHRpbml0aWFsQmlhcyA9IDcyLFxuXHRpbml0aWFsTiA9IDEyOCwgLy8gMHg4MFxuXHRkZWxpbWl0ZXIgPSAnLScsIC8vICdcXHgyRCdcblxuXHQvKiogUmVndWxhciBleHByZXNzaW9ucyAqL1xuXHRyZWdleFB1bnljb2RlID0gL154bi0tLyxcblx0cmVnZXhOb25BU0NJSSA9IC9bXlxceDIwLVxceDdFXS8sIC8vIHVucHJpbnRhYmxlIEFTQ0lJIGNoYXJzICsgbm9uLUFTQ0lJIGNoYXJzXG5cdHJlZ2V4U2VwYXJhdG9ycyA9IC9bXFx4MkVcXHUzMDAyXFx1RkYwRVxcdUZGNjFdL2csIC8vIFJGQyAzNDkwIHNlcGFyYXRvcnNcblxuXHQvKiogRXJyb3IgbWVzc2FnZXMgKi9cblx0ZXJyb3JzID0ge1xuXHRcdCdvdmVyZmxvdyc6ICdPdmVyZmxvdzogaW5wdXQgbmVlZHMgd2lkZXIgaW50ZWdlcnMgdG8gcHJvY2VzcycsXG5cdFx0J25vdC1iYXNpYyc6ICdJbGxlZ2FsIGlucHV0ID49IDB4ODAgKG5vdCBhIGJhc2ljIGNvZGUgcG9pbnQpJyxcblx0XHQnaW52YWxpZC1pbnB1dCc6ICdJbnZhbGlkIGlucHV0J1xuXHR9LFxuXG5cdC8qKiBDb252ZW5pZW5jZSBzaG9ydGN1dHMgKi9cblx0YmFzZU1pbnVzVE1pbiA9IGJhc2UgLSB0TWluLFxuXHRmbG9vciA9IE1hdGguZmxvb3IsXG5cdHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUsXG5cblx0LyoqIFRlbXBvcmFyeSB2YXJpYWJsZSAqL1xuXHRrZXk7XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBlcnJvciB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgZXJyb3IgdHlwZS5cblx0ICogQHJldHVybnMge0Vycm9yfSBUaHJvd3MgYSBgUmFuZ2VFcnJvcmAgd2l0aCB0aGUgYXBwbGljYWJsZSBlcnJvciBtZXNzYWdlLlxuXHQgKi9cblx0ZnVuY3Rpb24gZXJyb3IodHlwZSkge1xuXHRcdHRocm93IG5ldyBSYW5nZUVycm9yKGVycm9yc1t0eXBlXSk7XG5cdH1cblxuXHQvKipcblx0ICogQSBnZW5lcmljIGBBcnJheSNtYXBgIHV0aWxpdHkgZnVuY3Rpb24uXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeSBhcnJheVxuXHQgKiBpdGVtLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IGFycmF5IG9mIHZhbHVlcyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBtYXAoYXJyYXksIGZuKSB7XG5cdFx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0d2hpbGUgKGxlbmd0aC0tKSB7XG5cdFx0XHRyZXN1bHRbbGVuZ3RoXSA9IGZuKGFycmF5W2xlbmd0aF0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgc2ltcGxlIGBBcnJheSNtYXBgLWxpa2Ugd3JhcHBlciB0byB3b3JrIHdpdGggZG9tYWluIG5hbWUgc3RyaW5ncyBvciBlbWFpbFxuXHQgKiBhZGRyZXNzZXMuXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkb21haW4gVGhlIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeVxuXHQgKiBjaGFyYWN0ZXIuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBuZXcgc3RyaW5nIG9mIGNoYXJhY3RlcnMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrXG5cdCAqIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwRG9tYWluKHN0cmluZywgZm4pIHtcblx0XHR2YXIgcGFydHMgPSBzdHJpbmcuc3BsaXQoJ0AnKTtcblx0XHR2YXIgcmVzdWx0ID0gJyc7XG5cdFx0aWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdC8vIEluIGVtYWlsIGFkZHJlc3Nlcywgb25seSB0aGUgZG9tYWluIG5hbWUgc2hvdWxkIGJlIHB1bnljb2RlZC4gTGVhdmVcblx0XHRcdC8vIHRoZSBsb2NhbCBwYXJ0IChpLmUuIGV2ZXJ5dGhpbmcgdXAgdG8gYEBgKSBpbnRhY3QuXG5cdFx0XHRyZXN1bHQgPSBwYXJ0c1swXSArICdAJztcblx0XHRcdHN0cmluZyA9IHBhcnRzWzFdO1xuXHRcdH1cblx0XHQvLyBBdm9pZCBgc3BsaXQocmVnZXgpYCBmb3IgSUU4IGNvbXBhdGliaWxpdHkuIFNlZSAjMTcuXG5cdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocmVnZXhTZXBhcmF0b3JzLCAnXFx4MkUnKTtcblx0XHR2YXIgbGFiZWxzID0gc3RyaW5nLnNwbGl0KCcuJyk7XG5cdFx0dmFyIGVuY29kZWQgPSBtYXAobGFiZWxzLCBmbikuam9pbignLicpO1xuXHRcdHJldHVybiByZXN1bHQgKyBlbmNvZGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgbnVtZXJpYyBjb2RlIHBvaW50cyBvZiBlYWNoIFVuaWNvZGVcblx0ICogY2hhcmFjdGVyIGluIHRoZSBzdHJpbmcuIFdoaWxlIEphdmFTY3JpcHQgdXNlcyBVQ1MtMiBpbnRlcm5hbGx5LFxuXHQgKiB0aGlzIGZ1bmN0aW9uIHdpbGwgY29udmVydCBhIHBhaXIgb2Ygc3Vycm9nYXRlIGhhbHZlcyAoZWFjaCBvZiB3aGljaFxuXHQgKiBVQ1MtMiBleHBvc2VzIGFzIHNlcGFyYXRlIGNoYXJhY3RlcnMpIGludG8gYSBzaW5nbGUgY29kZSBwb2ludCxcblx0ICogbWF0Y2hpbmcgVVRGLTE2LlxuXHQgKiBAc2VlIGBwdW55Y29kZS51Y3MyLmVuY29kZWBcblx0ICogQHNlZSA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmc+XG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGRlY29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBVbmljb2RlIGlucHV0IHN0cmluZyAoVUNTLTIpLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBuZXcgYXJyYXkgb2YgY29kZSBwb2ludHMuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgY291bnRlciA9IDAsXG5cdFx0ICAgIGxlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG5cdFx0ICAgIHZhbHVlLFxuXHRcdCAgICBleHRyYTtcblx0XHR3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0dmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0aWYgKHZhbHVlID49IDB4RDgwMCAmJiB2YWx1ZSA8PSAweERCRkYgJiYgY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0XHQvLyBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXJcblx0XHRcdFx0ZXh0cmEgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0XHRpZiAoKGV4dHJhICYgMHhGQzAwKSA9PSAweERDMDApIHsgLy8gbG93IHN1cnJvZ2F0ZVxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKCgodmFsdWUgJiAweDNGRikgPDwgMTApICsgKGV4dHJhICYgMHgzRkYpICsgMHgxMDAwMCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gdW5tYXRjaGVkIHN1cnJvZ2F0ZTsgb25seSBhcHBlbmQgdGhpcyBjb2RlIHVuaXQsIGluIGNhc2UgdGhlIG5leHRcblx0XHRcdFx0XHQvLyBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXJcblx0XHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0Y291bnRlci0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHN0cmluZyBiYXNlZCBvbiBhbiBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAc2VlIGBwdW55Y29kZS51Y3MyLmRlY29kZWBcblx0ICogQG1lbWJlck9mIHB1bnljb2RlLnVjczJcblx0ICogQG5hbWUgZW5jb2RlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGNvZGVQb2ludHMgVGhlIGFycmF5IG9mIG51bWVyaWMgY29kZSBwb2ludHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBuZXcgVW5pY29kZSBzdHJpbmcgKFVDUy0yKS5cblx0ICovXG5cdGZ1bmN0aW9uIHVjczJlbmNvZGUoYXJyYXkpIHtcblx0XHRyZXR1cm4gbWFwKGFycmF5LCBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdFx0aWYgKHZhbHVlID4gMHhGRkZGKSB7XG5cdFx0XHRcdHZhbHVlIC09IDB4MTAwMDA7XG5cdFx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuXHRcdFx0XHR2YWx1ZSA9IDB4REMwMCB8IHZhbHVlICYgMHgzRkY7XG5cdFx0XHR9XG5cdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlKTtcblx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBiYXNpYyBjb2RlIHBvaW50IGludG8gYSBkaWdpdC9pbnRlZ2VyLlxuXHQgKiBAc2VlIGBkaWdpdFRvQmFzaWMoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGNvZGVQb2ludCBUaGUgYmFzaWMgbnVtZXJpYyBjb2RlIHBvaW50IHZhbHVlLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQgKGZvciB1c2UgaW5cblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpbiB0aGUgcmFuZ2UgYDBgIHRvIGBiYXNlIC0gMWAsIG9yIGBiYXNlYCBpZlxuXHQgKiB0aGUgY29kZSBwb2ludCBkb2VzIG5vdCByZXByZXNlbnQgYSB2YWx1ZS5cblx0ICovXG5cdGZ1bmN0aW9uIGJhc2ljVG9EaWdpdChjb2RlUG9pbnQpIHtcblx0XHRpZiAoY29kZVBvaW50IC0gNDggPCAxMCkge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDIyO1xuXHRcdH1cblx0XHRpZiAoY29kZVBvaW50IC0gNjUgPCAyNikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDY1O1xuXHRcdH1cblx0XHRpZiAoY29kZVBvaW50IC0gOTcgPCAyNikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDk3O1xuXHRcdH1cblx0XHRyZXR1cm4gYmFzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIGRpZ2l0L2ludGVnZXIgaW50byBhIGJhc2ljIGNvZGUgcG9pbnQuXG5cdCAqIEBzZWUgYGJhc2ljVG9EaWdpdCgpYFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gZGlnaXQgVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYmFzaWMgY29kZSBwb2ludCB3aG9zZSB2YWx1ZSAod2hlbiB1c2VkIGZvclxuXHQgKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGlzIGBkaWdpdGAsIHdoaWNoIG5lZWRzIHRvIGJlIGluIHRoZSByYW5nZVxuXHQgKiBgMGAgdG8gYGJhc2UgLSAxYC4gSWYgYGZsYWdgIGlzIG5vbi16ZXJvLCB0aGUgdXBwZXJjYXNlIGZvcm0gaXNcblx0ICogdXNlZDsgZWxzZSwgdGhlIGxvd2VyY2FzZSBmb3JtIGlzIHVzZWQuIFRoZSBiZWhhdmlvciBpcyB1bmRlZmluZWRcblx0ICogaWYgYGZsYWdgIGlzIG5vbi16ZXJvIGFuZCBgZGlnaXRgIGhhcyBubyB1cHBlcmNhc2UgZm9ybS5cblx0ICovXG5cdGZ1bmN0aW9uIGRpZ2l0VG9CYXNpYyhkaWdpdCwgZmxhZykge1xuXHRcdC8vICAwLi4yNSBtYXAgdG8gQVNDSUkgYS4ueiBvciBBLi5aXG5cdFx0Ly8gMjYuLjM1IG1hcCB0byBBU0NJSSAwLi45XG5cdFx0cmV0dXJuIGRpZ2l0ICsgMjIgKyA3NSAqIChkaWdpdCA8IDI2KSAtICgoZmxhZyAhPSAwKSA8PCA1KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCaWFzIGFkYXB0YXRpb24gZnVuY3Rpb24gYXMgcGVyIHNlY3Rpb24gMy40IG9mIFJGQyAzNDkyLlxuXHQgKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzQ5MiNzZWN0aW9uLTMuNFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gYWRhcHQoZGVsdGEsIG51bVBvaW50cywgZmlyc3RUaW1lKSB7XG5cdFx0dmFyIGsgPSAwO1xuXHRcdGRlbHRhID0gZmlyc3RUaW1lID8gZmxvb3IoZGVsdGEgLyBkYW1wKSA6IGRlbHRhID4+IDE7XG5cdFx0ZGVsdGEgKz0gZmxvb3IoZGVsdGEgLyBudW1Qb2ludHMpO1xuXHRcdGZvciAoLyogbm8gaW5pdGlhbGl6YXRpb24gKi87IGRlbHRhID4gYmFzZU1pbnVzVE1pbiAqIHRNYXggPj4gMTsgayArPSBiYXNlKSB7XG5cdFx0XHRkZWx0YSA9IGZsb29yKGRlbHRhIC8gYmFzZU1pbnVzVE1pbik7XG5cdFx0fVxuXHRcdHJldHVybiBmbG9vcihrICsgKGJhc2VNaW51c1RNaW4gKyAxKSAqIGRlbHRhIC8gKGRlbHRhICsgc2tldykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scyB0byBhIHN0cmluZyBvZiBVbmljb2RlXG5cdCAqIHN5bWJvbHMuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICovXG5cdGZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHRcdC8vIERvbid0IHVzZSBVQ1MtMlxuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGgsXG5cdFx0ICAgIG91dCxcblx0XHQgICAgaSA9IDAsXG5cdFx0ICAgIG4gPSBpbml0aWFsTixcblx0XHQgICAgYmlhcyA9IGluaXRpYWxCaWFzLFxuXHRcdCAgICBiYXNpYyxcblx0XHQgICAgaixcblx0XHQgICAgaW5kZXgsXG5cdFx0ICAgIG9sZGksXG5cdFx0ICAgIHcsXG5cdFx0ICAgIGssXG5cdFx0ICAgIGRpZ2l0LFxuXHRcdCAgICB0LFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgYmFzZU1pbnVzVDtcblxuXHRcdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHM6IGxldCBgYmFzaWNgIGJlIHRoZSBudW1iZXIgb2YgaW5wdXQgY29kZVxuXHRcdC8vIHBvaW50cyBiZWZvcmUgdGhlIGxhc3QgZGVsaW1pdGVyLCBvciBgMGAgaWYgdGhlcmUgaXMgbm9uZSwgdGhlbiBjb3B5XG5cdFx0Ly8gdGhlIGZpcnN0IGJhc2ljIGNvZGUgcG9pbnRzIHRvIHRoZSBvdXRwdXQuXG5cblx0XHRiYXNpYyA9IGlucHV0Lmxhc3RJbmRleE9mKGRlbGltaXRlcik7XG5cdFx0aWYgKGJhc2ljIDwgMCkge1xuXHRcdFx0YmFzaWMgPSAwO1xuXHRcdH1cblxuXHRcdGZvciAoaiA9IDA7IGogPCBiYXNpYzsgKytqKSB7XG5cdFx0XHQvLyBpZiBpdCdzIG5vdCBhIGJhc2ljIGNvZGUgcG9pbnRcblx0XHRcdGlmIChpbnB1dC5jaGFyQ29kZUF0KGopID49IDB4ODApIHtcblx0XHRcdFx0ZXJyb3IoJ25vdC1iYXNpYycpO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0LnB1c2goaW5wdXQuY2hhckNvZGVBdChqKSk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFpbiBkZWNvZGluZyBsb29wOiBzdGFydCBqdXN0IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlciBpZiBhbnkgYmFzaWMgY29kZVxuXHRcdC8vIHBvaW50cyB3ZXJlIGNvcGllZDsgc3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvdGhlcndpc2UuXG5cblx0XHRmb3IgKGluZGV4ID0gYmFzaWMgPiAwID8gYmFzaWMgKyAxIDogMDsgaW5kZXggPCBpbnB1dExlbmd0aDsgLyogbm8gZmluYWwgZXhwcmVzc2lvbiAqLykge1xuXG5cdFx0XHQvLyBgaW5kZXhgIGlzIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gYmUgY29uc3VtZWQuXG5cdFx0XHQvLyBEZWNvZGUgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlciBpbnRvIGBkZWx0YWAsXG5cdFx0XHQvLyB3aGljaCBnZXRzIGFkZGVkIHRvIGBpYC4gVGhlIG92ZXJmbG93IGNoZWNraW5nIGlzIGVhc2llclxuXHRcdFx0Ly8gaWYgd2UgaW5jcmVhc2UgYGlgIGFzIHdlIGdvLCB0aGVuIHN1YnRyYWN0IG9mZiBpdHMgc3RhcnRpbmdcblx0XHRcdC8vIHZhbHVlIGF0IHRoZSBlbmQgdG8gb2J0YWluIGBkZWx0YWAuXG5cdFx0XHRmb3IgKG9sZGkgPSBpLCB3ID0gMSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cblx0XHRcdFx0aWYgKGluZGV4ID49IGlucHV0TGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ2ludmFsaWQtaW5wdXQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRpZ2l0ID0gYmFzaWNUb0RpZ2l0KGlucHV0LmNoYXJDb2RlQXQoaW5kZXgrKykpO1xuXG5cdFx0XHRcdGlmIChkaWdpdCA+PSBiYXNlIHx8IGRpZ2l0ID4gZmxvb3IoKG1heEludCAtIGkpIC8gdykpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgKz0gZGlnaXQgKiB3O1xuXHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPCB0KSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdGlmICh3ID4gZmxvb3IobWF4SW50IC8gYmFzZU1pbnVzVCkpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHcgKj0gYmFzZU1pbnVzVDtcblxuXHRcdFx0fVxuXG5cdFx0XHRvdXQgPSBvdXRwdXQubGVuZ3RoICsgMTtcblx0XHRcdGJpYXMgPSBhZGFwdChpIC0gb2xkaSwgb3V0LCBvbGRpID09IDApO1xuXG5cdFx0XHQvLyBgaWAgd2FzIHN1cHBvc2VkIHRvIHdyYXAgYXJvdW5kIGZyb20gYG91dGAgdG8gYDBgLFxuXHRcdFx0Ly8gaW5jcmVtZW50aW5nIGBuYCBlYWNoIHRpbWUsIHNvIHdlJ2xsIGZpeCB0aGF0IG5vdzpcblx0XHRcdGlmIChmbG9vcihpIC8gb3V0KSA+IG1heEludCAtIG4pIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdG4gKz0gZmxvb3IoaSAvIG91dCk7XG5cdFx0XHRpICU9IG91dDtcblxuXHRcdFx0Ly8gSW5zZXJ0IGBuYCBhdCBwb3NpdGlvbiBgaWAgb2YgdGhlIG91dHB1dFxuXHRcdFx0b3V0cHV0LnNwbGljZShpKyssIDAsIG4pO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVjczJlbmNvZGUob3V0cHV0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMgKGUuZy4gYSBkb21haW4gbmFtZSBsYWJlbCkgdG8gYVxuXHQgKiBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBlbmNvZGUoaW5wdXQpIHtcblx0XHR2YXIgbixcblx0XHQgICAgZGVsdGEsXG5cdFx0ICAgIGhhbmRsZWRDUENvdW50LFxuXHRcdCAgICBiYXNpY0xlbmd0aCxcblx0XHQgICAgYmlhcyxcblx0XHQgICAgaixcblx0XHQgICAgbSxcblx0XHQgICAgcSxcblx0XHQgICAgayxcblx0XHQgICAgdCxcblx0XHQgICAgY3VycmVudFZhbHVlLFxuXHRcdCAgICBvdXRwdXQgPSBbXSxcblx0XHQgICAgLyoqIGBpbnB1dExlbmd0aGAgd2lsbCBob2xkIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgaW4gYGlucHV0YC4gKi9cblx0XHQgICAgaW5wdXRMZW5ndGgsXG5cdFx0ICAgIC8qKiBDYWNoZWQgY2FsY3VsYXRpb24gcmVzdWx0cyAqL1xuXHRcdCAgICBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsXG5cdFx0ICAgIGJhc2VNaW51c1QsXG5cdFx0ICAgIHFNaW51c1Q7XG5cblx0XHQvLyBDb252ZXJ0IHRoZSBpbnB1dCBpbiBVQ1MtMiB0byBVbmljb2RlXG5cdFx0aW5wdXQgPSB1Y3MyZGVjb2RlKGlucHV0KTtcblxuXHRcdC8vIENhY2hlIHRoZSBsZW5ndGhcblx0XHRpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuXHRcdC8vIEluaXRpYWxpemUgdGhlIHN0YXRlXG5cdFx0biA9IGluaXRpYWxOO1xuXHRcdGRlbHRhID0gMDtcblx0XHRiaWFzID0gaW5pdGlhbEJpYXM7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzXG5cdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IDB4ODApIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGN1cnJlbnRWYWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGhhbmRsZWRDUENvdW50ID0gYmFzaWNMZW5ndGggPSBvdXRwdXQubGVuZ3RoO1xuXG5cdFx0Ly8gYGhhbmRsZWRDUENvdW50YCBpcyB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIGhhbmRsZWQ7XG5cdFx0Ly8gYGJhc2ljTGVuZ3RoYCBpcyB0aGUgbnVtYmVyIG9mIGJhc2ljIGNvZGUgcG9pbnRzLlxuXG5cdFx0Ly8gRmluaXNoIHRoZSBiYXNpYyBzdHJpbmcgLSBpZiBpdCBpcyBub3QgZW1wdHkgLSB3aXRoIGEgZGVsaW1pdGVyXG5cdFx0aWYgKGJhc2ljTGVuZ3RoKSB7XG5cdFx0XHRvdXRwdXQucHVzaChkZWxpbWl0ZXIpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZW5jb2RpbmcgbG9vcDpcblx0XHR3aGlsZSAoaGFuZGxlZENQQ291bnQgPCBpbnB1dExlbmd0aCkge1xuXG5cdFx0XHQvLyBBbGwgbm9uLWJhc2ljIGNvZGUgcG9pbnRzIDwgbiBoYXZlIGJlZW4gaGFuZGxlZCBhbHJlYWR5LiBGaW5kIHRoZSBuZXh0XG5cdFx0XHQvLyBsYXJnZXIgb25lOlxuXHRcdFx0Zm9yIChtID0gbWF4SW50LCBqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPj0gbiAmJiBjdXJyZW50VmFsdWUgPCBtKSB7XG5cdFx0XHRcdFx0bSA9IGN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbmNyZWFzZSBgZGVsdGFgIGVub3VnaCB0byBhZHZhbmNlIHRoZSBkZWNvZGVyJ3MgPG4saT4gc3RhdGUgdG8gPG0sMD4sXG5cdFx0XHQvLyBidXQgZ3VhcmQgYWdhaW5zdCBvdmVyZmxvd1xuXHRcdFx0aGFuZGxlZENQQ291bnRQbHVzT25lID0gaGFuZGxlZENQQ291bnQgKyAxO1xuXHRcdFx0aWYgKG0gLSBuID4gZmxvb3IoKG1heEludCAtIGRlbHRhKSAvIGhhbmRsZWRDUENvdW50UGx1c09uZSkpIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGRlbHRhICs9IChtIC0gbikgKiBoYW5kbGVkQ1BDb3VudFBsdXNPbmU7XG5cdFx0XHRuID0gbTtcblxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IG4gJiYgKytkZWx0YSA+IG1heEludCkge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PSBuKSB7XG5cdFx0XHRcdFx0Ly8gUmVwcmVzZW50IGRlbHRhIGFzIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXJcblx0XHRcdFx0XHRmb3IgKHEgPSBkZWx0YSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cdFx0XHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblx0XHRcdFx0XHRcdGlmIChxIDwgdCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHFNaW51c1QgPSBxIC0gdDtcblx0XHRcdFx0XHRcdGJhc2VNaW51c1QgPSBiYXNlIC0gdDtcblx0XHRcdFx0XHRcdG91dHB1dC5wdXNoKFxuXHRcdFx0XHRcdFx0XHRzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHQgKyBxTWludXNUICUgYmFzZU1pbnVzVCwgMCkpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cSA9IGZsb29yKHFNaW51c1QgLyBiYXNlTWludXNUKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHEsIDApKSk7XG5cdFx0XHRcdFx0YmlhcyA9IGFkYXB0KGRlbHRhLCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsIGhhbmRsZWRDUENvdW50ID09IGJhc2ljTGVuZ3RoKTtcblx0XHRcdFx0XHRkZWx0YSA9IDA7XG5cdFx0XHRcdFx0KytoYW5kbGVkQ1BDb3VudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQrK2RlbHRhO1xuXHRcdFx0KytuO1xuXG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzc1xuXHQgKiB0byBVbmljb2RlLiBPbmx5IHRoZSBQdW55Y29kZWQgcGFydHMgb2YgdGhlIGlucHV0IHdpbGwgYmUgY29udmVydGVkLCBpLmUuXG5cdCAqIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IG9uIGEgc3RyaW5nIHRoYXQgaGFzIGFscmVhZHkgYmVlblxuXHQgKiBjb252ZXJ0ZWQgdG8gVW5pY29kZS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGVkIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogY29udmVydCB0byBVbmljb2RlLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgVW5pY29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gUHVueWNvZGVcblx0ICogc3RyaW5nLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9Vbmljb2RlKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhQdW55Y29kZS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyBkZWNvZGUoc3RyaW5nLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgVW5pY29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzcyB0b1xuXHQgKiBQdW55Y29kZS4gT25seSB0aGUgbm9uLUFTQ0lJIHBhcnRzIG9mIHRoZSBkb21haW4gbmFtZSB3aWxsIGJlIGNvbnZlcnRlZCxcblx0ICogaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQncyBhbHJlYWR5IGluXG5cdCAqIEFTQ0lJLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvIGNvbnZlcnQsIGFzIGFcblx0ICogVW5pY29kZSBzdHJpbmcuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBQdW55Y29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gZG9tYWluIG5hbWUgb3Jcblx0ICogZW1haWwgYWRkcmVzcy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvQVNDSUkoaW5wdXQpIHtcblx0XHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdHJldHVybiByZWdleE5vbkFTQ0lJLnRlc3Qoc3RyaW5nKVxuXHRcdFx0XHQ/ICd4bi0tJyArIGVuY29kZShzdHJpbmcpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqIERlZmluZSB0aGUgcHVibGljIEFQSSAqL1xuXHRwdW55Y29kZSA9IHtcblx0XHQvKipcblx0XHQgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgUHVueWNvZGUuanMgdmVyc2lvbiBudW1iZXIuXG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0J3ZlcnNpb24nOiAnMS40LjEnLFxuXHRcdC8qKlxuXHRcdCAqIEFuIG9iamVjdCBvZiBtZXRob2RzIHRvIGNvbnZlcnQgZnJvbSBKYXZhU2NyaXB0J3MgaW50ZXJuYWwgY2hhcmFjdGVyXG5cdFx0ICogcmVwcmVzZW50YXRpb24gKFVDUy0yKSB0byBVbmljb2RlIGNvZGUgcG9pbnRzLCBhbmQgYmFjay5cblx0XHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0XHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0XHQgKiBAdHlwZSBPYmplY3Rcblx0XHQgKi9cblx0XHQndWNzMic6IHtcblx0XHRcdCdkZWNvZGUnOiB1Y3MyZGVjb2RlLFxuXHRcdFx0J2VuY29kZSc6IHVjczJlbmNvZGVcblx0XHR9LFxuXHRcdCdkZWNvZGUnOiBkZWNvZGUsXG5cdFx0J2VuY29kZSc6IGVuY29kZSxcblx0XHQndG9BU0NJSSc6IHRvQVNDSUksXG5cdFx0J3RvVW5pY29kZSc6IHRvVW5pY29kZVxuXHR9O1xuXG5cdC8qKiBFeHBvc2UgYHB1bnljb2RlYCAqL1xuXHQvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBzcGVjaWZpYyBjb25kaXRpb24gcGF0dGVybnNcblx0Ly8gbGlrZSB0aGUgZm9sbG93aW5nOlxuXHRpZiAoXG5cdFx0dHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiZcblx0XHRkZWZpbmUuYW1kXG5cdCkge1xuXHRcdGRlZmluZSgncHVueWNvZGUnLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBwdW55Y29kZTtcblx0XHR9KTtcblx0fSBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlKSB7XG5cdFx0aWYgKG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzKSB7XG5cdFx0XHQvLyBpbiBOb2RlLmpzLCBpby5qcywgb3IgUmluZ29KUyB2MC44LjArXG5cdFx0XHRmcmVlTW9kdWxlLmV4cG9ydHMgPSBwdW55Y29kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cblx0XHRcdGZvciAoa2V5IGluIHB1bnljb2RlKSB7XG5cdFx0XHRcdHB1bnljb2RlLmhhc093blByb3BlcnR5KGtleSkgJiYgKGZyZWVFeHBvcnRzW2tleV0gPSBwdW55Y29kZVtrZXldKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW4gUmhpbm8gb3IgYSB3ZWIgYnJvd3NlclxuXHRcdHJvb3QucHVueWNvZGUgPSBwdW55Y29kZTtcblx0fVxuXG59KHRoaXMpKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIElmIG9iai5oYXNPd25Qcm9wZXJ0eSBoYXMgYmVlbiBvdmVycmlkZGVuLCB0aGVuIGNhbGxpbmdcbi8vIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSB3aWxsIGJyZWFrLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MDdcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocXMsIHNlcCwgZXEsIG9wdGlvbnMpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIHZhciBvYmogPSB7fTtcblxuICBpZiAodHlwZW9mIHFzICE9PSAnc3RyaW5nJyB8fCBxcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IC9cXCsvZztcbiAgcXMgPSBxcy5zcGxpdChzZXApO1xuXG4gIHZhciBtYXhLZXlzID0gMTAwMDtcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubWF4S2V5cyA9PT0gJ251bWJlcicpIHtcbiAgICBtYXhLZXlzID0gb3B0aW9ucy5tYXhLZXlzO1xuICB9XG5cbiAgdmFyIGxlbiA9IHFzLmxlbmd0aDtcbiAgLy8gbWF4S2V5cyA8PSAwIG1lYW5zIHRoYXQgd2Ugc2hvdWxkIG5vdCBsaW1pdCBrZXlzIGNvdW50XG4gIGlmIChtYXhLZXlzID4gMCAmJiBsZW4gPiBtYXhLZXlzKSB7XG4gICAgbGVuID0gbWF4S2V5cztcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgeCA9IHFzW2ldLnJlcGxhY2UocmVnZXhwLCAnJTIwJyksXG4gICAgICAgIGlkeCA9IHguaW5kZXhPZihlcSksXG4gICAgICAgIGtzdHIsIHZzdHIsIGssIHY7XG5cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGtzdHIgPSB4LnN1YnN0cigwLCBpZHgpO1xuICAgICAgdnN0ciA9IHguc3Vic3RyKGlkeCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrc3RyID0geDtcbiAgICAgIHZzdHIgPSAnJztcbiAgICB9XG5cbiAgICBrID0gZGVjb2RlVVJJQ29tcG9uZW50KGtzdHIpO1xuICAgIHYgPSBkZWNvZGVVUklDb21wb25lbnQodnN0cik7XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5KG9iaiwgaykpIHtcbiAgICAgIG9ialtrXSA9IHY7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgIG9ialtrXS5wdXNoKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba10gPSBbb2JqW2tdLCB2XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5UHJpbWl0aXZlID0gZnVuY3Rpb24odikge1xuICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2O1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdiA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIGlzRmluaXRlKHYpID8gdiA6ICcnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHNlcCwgZXEsIG5hbWUpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICBvYmogPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbWFwKG9iamVjdEtleXMob2JqKSwgZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrKSkgKyBlcTtcbiAgICAgIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAgcmV0dXJuIG1hcChvYmpba10sIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKHYpKTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmpba10pKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG5cbiAgfVxuXG4gIGlmICghbmFtZSkgcmV0dXJuICcnO1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShuYW1lKSkgKyBlcSArXG4gICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9iaikpO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbmZ1bmN0aW9uIG1hcCAoeHMsIGYpIHtcbiAgaWYgKHhzLm1hcCkgcmV0dXJuIHhzLm1hcChmKTtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzLnB1c2goZih4c1tpXSwgaSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgcmVzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5kZWNvZGUgPSBleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHB1bnljb2RlID0gcmVxdWlyZSgncHVueWNvZGUnKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmV4cG9ydHMucGFyc2UgPSB1cmxQYXJzZTtcbmV4cG9ydHMucmVzb2x2ZSA9IHVybFJlc29sdmU7XG5leHBvcnRzLnJlc29sdmVPYmplY3QgPSB1cmxSZXNvbHZlT2JqZWN0O1xuZXhwb3J0cy5mb3JtYXQgPSB1cmxGb3JtYXQ7XG5cbmV4cG9ydHMuVXJsID0gVXJsO1xuXG5mdW5jdGlvbiBVcmwoKSB7XG4gIHRoaXMucHJvdG9jb2wgPSBudWxsO1xuICB0aGlzLnNsYXNoZXMgPSBudWxsO1xuICB0aGlzLmF1dGggPSBudWxsO1xuICB0aGlzLmhvc3QgPSBudWxsO1xuICB0aGlzLnBvcnQgPSBudWxsO1xuICB0aGlzLmhvc3RuYW1lID0gbnVsbDtcbiAgdGhpcy5oYXNoID0gbnVsbDtcbiAgdGhpcy5zZWFyY2ggPSBudWxsO1xuICB0aGlzLnF1ZXJ5ID0gbnVsbDtcbiAgdGhpcy5wYXRobmFtZSA9IG51bGw7XG4gIHRoaXMucGF0aCA9IG51bGw7XG4gIHRoaXMuaHJlZiA9IG51bGw7XG59XG5cbi8vIFJlZmVyZW5jZTogUkZDIDM5ODYsIFJGQyAxODA4LCBSRkMgMjM5NlxuXG4vLyBkZWZpbmUgdGhlc2UgaGVyZSBzbyBhdCBsZWFzdCB0aGV5IG9ubHkgaGF2ZSB0byBiZVxuLy8gY29tcGlsZWQgb25jZSBvbiB0aGUgZmlyc3QgbW9kdWxlIGxvYWQuXG52YXIgcHJvdG9jb2xQYXR0ZXJuID0gL14oW2EtejAtOS4rLV0rOikvaSxcbiAgICBwb3J0UGF0dGVybiA9IC86WzAtOV0qJC8sXG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIGEgc2ltcGxlIHBhdGggVVJMXG4gICAgc2ltcGxlUGF0aFBhdHRlcm4gPSAvXihcXC9cXC8/KD8hXFwvKVteXFw/XFxzXSopKFxcP1teXFxzXSopPyQvLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgcmVzZXJ2ZWQgZm9yIGRlbGltaXRpbmcgVVJMcy5cbiAgICAvLyBXZSBhY3R1YWxseSBqdXN0IGF1dG8tZXNjYXBlIHRoZXNlLlxuICAgIGRlbGltcyA9IFsnPCcsICc+JywgJ1wiJywgJ2AnLCAnICcsICdcXHInLCAnXFxuJywgJ1xcdCddLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgZm9yIHZhcmlvdXMgcmVhc29ucy5cbiAgICB1bndpc2UgPSBbJ3snLCAnfScsICd8JywgJ1xcXFwnLCAnXicsICdgJ10uY29uY2F0KGRlbGltcyksXG5cbiAgICAvLyBBbGxvd2VkIGJ5IFJGQ3MsIGJ1dCBjYXVzZSBvZiBYU1MgYXR0YWNrcy4gIEFsd2F5cyBlc2NhcGUgdGhlc2UuXG4gICAgYXV0b0VzY2FwZSA9IFsnXFwnJ10uY29uY2F0KHVud2lzZSksXG4gICAgLy8gQ2hhcmFjdGVycyB0aGF0IGFyZSBuZXZlciBldmVyIGFsbG93ZWQgaW4gYSBob3N0bmFtZS5cbiAgICAvLyBOb3RlIHRoYXQgYW55IGludmFsaWQgY2hhcnMgYXJlIGFsc28gaGFuZGxlZCwgYnV0IHRoZXNlXG4gICAgLy8gYXJlIHRoZSBvbmVzIHRoYXQgYXJlICpleHBlY3RlZCogdG8gYmUgc2Vlbiwgc28gd2UgZmFzdC1wYXRoXG4gICAgLy8gdGhlbS5cbiAgICBub25Ib3N0Q2hhcnMgPSBbJyUnLCAnLycsICc/JywgJzsnLCAnIyddLmNvbmNhdChhdXRvRXNjYXBlKSxcbiAgICBob3N0RW5kaW5nQ2hhcnMgPSBbJy8nLCAnPycsICcjJ10sXG4gICAgaG9zdG5hbWVNYXhMZW4gPSAyNTUsXG4gICAgaG9zdG5hbWVQYXJ0UGF0dGVybiA9IC9eWythLXowLTlBLVpfLV17MCw2M30kLyxcbiAgICBob3N0bmFtZVBhcnRTdGFydCA9IC9eKFsrYS16MC05QS1aXy1dezAsNjN9KSguKikkLyxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBjYW4gYWxsb3cgXCJ1bnNhZmVcIiBhbmQgXCJ1bndpc2VcIiBjaGFycy5cbiAgICB1bnNhZmVQcm90b2NvbCA9IHtcbiAgICAgICdqYXZhc2NyaXB0JzogdHJ1ZSxcbiAgICAgICdqYXZhc2NyaXB0Oic6IHRydWVcbiAgICB9LFxuICAgIC8vIHByb3RvY29scyB0aGF0IG5ldmVyIGhhdmUgYSBob3N0bmFtZS5cbiAgICBob3N0bGVzc1Byb3RvY29sID0ge1xuICAgICAgJ2phdmFzY3JpcHQnOiB0cnVlLFxuICAgICAgJ2phdmFzY3JpcHQ6JzogdHJ1ZVxuICAgIH0sXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgYWx3YXlzIGNvbnRhaW4gYSAvLyBiaXQuXG4gICAgc2xhc2hlZFByb3RvY29sID0ge1xuICAgICAgJ2h0dHAnOiB0cnVlLFxuICAgICAgJ2h0dHBzJzogdHJ1ZSxcbiAgICAgICdmdHAnOiB0cnVlLFxuICAgICAgJ2dvcGhlcic6IHRydWUsXG4gICAgICAnZmlsZSc6IHRydWUsXG4gICAgICAnaHR0cDonOiB0cnVlLFxuICAgICAgJ2h0dHBzOic6IHRydWUsXG4gICAgICAnZnRwOic6IHRydWUsXG4gICAgICAnZ29waGVyOic6IHRydWUsXG4gICAgICAnZmlsZTonOiB0cnVlXG4gICAgfSxcbiAgICBxdWVyeXN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG5cbmZ1bmN0aW9uIHVybFBhcnNlKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgaWYgKHVybCAmJiB1dGlsLmlzT2JqZWN0KHVybCkgJiYgdXJsIGluc3RhbmNlb2YgVXJsKSByZXR1cm4gdXJsO1xuXG4gIHZhciB1ID0gbmV3IFVybDtcbiAgdS5wYXJzZSh1cmwsIHBhcnNlUXVlcnlTdHJpbmcsIHNsYXNoZXNEZW5vdGVIb3N0KTtcbiAgcmV0dXJuIHU7XG59XG5cblVybC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbih1cmwsIHBhcnNlUXVlcnlTdHJpbmcsIHNsYXNoZXNEZW5vdGVIb3N0KSB7XG4gIGlmICghdXRpbC5pc1N0cmluZyh1cmwpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhcmFtZXRlciAndXJsJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgdXJsKTtcbiAgfVxuXG4gIC8vIENvcHkgY2hyb21lLCBJRSwgb3BlcmEgYmFja3NsYXNoLWhhbmRsaW5nIGJlaGF2aW9yLlxuICAvLyBCYWNrIHNsYXNoZXMgYmVmb3JlIHRoZSBxdWVyeSBzdHJpbmcgZ2V0IGNvbnZlcnRlZCB0byBmb3J3YXJkIHNsYXNoZXNcbiAgLy8gU2VlOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MjU5MTZcbiAgdmFyIHF1ZXJ5SW5kZXggPSB1cmwuaW5kZXhPZignPycpLFxuICAgICAgc3BsaXR0ZXIgPVxuICAgICAgICAgIChxdWVyeUluZGV4ICE9PSAtMSAmJiBxdWVyeUluZGV4IDwgdXJsLmluZGV4T2YoJyMnKSkgPyAnPycgOiAnIycsXG4gICAgICB1U3BsaXQgPSB1cmwuc3BsaXQoc3BsaXR0ZXIpLFxuICAgICAgc2xhc2hSZWdleCA9IC9cXFxcL2c7XG4gIHVTcGxpdFswXSA9IHVTcGxpdFswXS5yZXBsYWNlKHNsYXNoUmVnZXgsICcvJyk7XG4gIHVybCA9IHVTcGxpdC5qb2luKHNwbGl0dGVyKTtcblxuICB2YXIgcmVzdCA9IHVybDtcblxuICAvLyB0cmltIGJlZm9yZSBwcm9jZWVkaW5nLlxuICAvLyBUaGlzIGlzIHRvIHN1cHBvcnQgcGFyc2Ugc3R1ZmYgbGlrZSBcIiAgaHR0cDovL2Zvby5jb20gIFxcblwiXG4gIHJlc3QgPSByZXN0LnRyaW0oKTtcblxuICBpZiAoIXNsYXNoZXNEZW5vdGVIb3N0ICYmIHVybC5zcGxpdCgnIycpLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIFRyeSBmYXN0IHBhdGggcmVnZXhwXG4gICAgdmFyIHNpbXBsZVBhdGggPSBzaW1wbGVQYXRoUGF0dGVybi5leGVjKHJlc3QpO1xuICAgIGlmIChzaW1wbGVQYXRoKSB7XG4gICAgICB0aGlzLnBhdGggPSByZXN0O1xuICAgICAgdGhpcy5ocmVmID0gcmVzdDtcbiAgICAgIHRoaXMucGF0aG5hbWUgPSBzaW1wbGVQYXRoWzFdO1xuICAgICAgaWYgKHNpbXBsZVBhdGhbMl0pIHtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzaW1wbGVQYXRoWzJdO1xuICAgICAgICBpZiAocGFyc2VRdWVyeVN0cmluZykge1xuICAgICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeXN0cmluZy5wYXJzZSh0aGlzLnNlYXJjaC5zdWJzdHIoMSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnNlYXJjaC5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyc2VRdWVyeVN0cmluZykge1xuICAgICAgICB0aGlzLnNlYXJjaCA9ICcnO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvdG8gPSBwcm90b2NvbFBhdHRlcm4uZXhlYyhyZXN0KTtcbiAgaWYgKHByb3RvKSB7XG4gICAgcHJvdG8gPSBwcm90b1swXTtcbiAgICB2YXIgbG93ZXJQcm90byA9IHByb3RvLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5wcm90b2NvbCA9IGxvd2VyUHJvdG87XG4gICAgcmVzdCA9IHJlc3Quc3Vic3RyKHByb3RvLmxlbmd0aCk7XG4gIH1cblxuICAvLyBmaWd1cmUgb3V0IGlmIGl0J3MgZ290IGEgaG9zdFxuICAvLyB1c2VyQHNlcnZlciBpcyAqYWx3YXlzKiBpbnRlcnByZXRlZCBhcyBhIGhvc3RuYW1lLCBhbmQgdXJsXG4gIC8vIHJlc29sdXRpb24gd2lsbCB0cmVhdCAvL2Zvby9iYXIgYXMgaG9zdD1mb28scGF0aD1iYXIgYmVjYXVzZSB0aGF0J3NcbiAgLy8gaG93IHRoZSBicm93c2VyIHJlc29sdmVzIHJlbGF0aXZlIFVSTHMuXG4gIGlmIChzbGFzaGVzRGVub3RlSG9zdCB8fCBwcm90byB8fCByZXN0Lm1hdGNoKC9eXFwvXFwvW15AXFwvXStAW15AXFwvXSsvKSkge1xuICAgIHZhciBzbGFzaGVzID0gcmVzdC5zdWJzdHIoMCwgMikgPT09ICcvLyc7XG4gICAgaWYgKHNsYXNoZXMgJiYgIShwcm90byAmJiBob3N0bGVzc1Byb3RvY29sW3Byb3RvXSkpIHtcbiAgICAgIHJlc3QgPSByZXN0LnN1YnN0cigyKTtcbiAgICAgIHRoaXMuc2xhc2hlcyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFob3N0bGVzc1Byb3RvY29sW3Byb3RvXSAmJlxuICAgICAgKHNsYXNoZXMgfHwgKHByb3RvICYmICFzbGFzaGVkUHJvdG9jb2xbcHJvdG9dKSkpIHtcblxuICAgIC8vIHRoZXJlJ3MgYSBob3N0bmFtZS5cbiAgICAvLyB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgLywgPywgOywgb3IgIyBlbmRzIHRoZSBob3N0LlxuICAgIC8vXG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gQCBpbiB0aGUgaG9zdG5hbWUsIHRoZW4gbm9uLWhvc3QgY2hhcnMgKmFyZSogYWxsb3dlZFxuICAgIC8vIHRvIHRoZSBsZWZ0IG9mIHRoZSBsYXN0IEAgc2lnbiwgdW5sZXNzIHNvbWUgaG9zdC1lbmRpbmcgY2hhcmFjdGVyXG4gICAgLy8gY29tZXMgKmJlZm9yZSogdGhlIEAtc2lnbi5cbiAgICAvLyBVUkxzIGFyZSBvYm5veGlvdXMuXG4gICAgLy9cbiAgICAvLyBleDpcbiAgICAvLyBodHRwOi8vYUBiQGMvID0+IHVzZXI6YUBiIGhvc3Q6Y1xuICAgIC8vIGh0dHA6Ly9hQGI/QGMgPT4gdXNlcjphIGhvc3Q6YyBwYXRoOi8/QGNcblxuICAgIC8vIHYwLjEyIFRPRE8oaXNhYWNzKTogVGhpcyBpcyBub3QgcXVpdGUgaG93IENocm9tZSBkb2VzIHRoaW5ncy5cbiAgICAvLyBSZXZpZXcgb3VyIHRlc3QgY2FzZSBhZ2FpbnN0IGJyb3dzZXJzIG1vcmUgY29tcHJlaGVuc2l2ZWx5LlxuXG4gICAgLy8gZmluZCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgYW55IGhvc3RFbmRpbmdDaGFyc1xuICAgIHZhciBob3N0RW5kID0gLTE7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob3N0RW5kaW5nQ2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBoZWMgPSByZXN0LmluZGV4T2YoaG9zdEVuZGluZ0NoYXJzW2ldKTtcbiAgICAgIGlmIChoZWMgIT09IC0xICYmIChob3N0RW5kID09PSAtMSB8fCBoZWMgPCBob3N0RW5kKSlcbiAgICAgICAgaG9zdEVuZCA9IGhlYztcbiAgICB9XG5cbiAgICAvLyBhdCB0aGlzIHBvaW50LCBlaXRoZXIgd2UgaGF2ZSBhbiBleHBsaWNpdCBwb2ludCB3aGVyZSB0aGVcbiAgICAvLyBhdXRoIHBvcnRpb24gY2Fubm90IGdvIHBhc3QsIG9yIHRoZSBsYXN0IEAgY2hhciBpcyB0aGUgZGVjaWRlci5cbiAgICB2YXIgYXV0aCwgYXRTaWduO1xuICAgIGlmIChob3N0RW5kID09PSAtMSkge1xuICAgICAgLy8gYXRTaWduIGNhbiBiZSBhbnl3aGVyZS5cbiAgICAgIGF0U2lnbiA9IHJlc3QubGFzdEluZGV4T2YoJ0AnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYXRTaWduIG11c3QgYmUgaW4gYXV0aCBwb3J0aW9uLlxuICAgICAgLy8gaHR0cDovL2FAYi9jQGQgPT4gaG9zdDpiIGF1dGg6YSBwYXRoOi9jQGRcbiAgICAgIGF0U2lnbiA9IHJlc3QubGFzdEluZGV4T2YoJ0AnLCBob3N0RW5kKTtcbiAgICB9XG5cbiAgICAvLyBOb3cgd2UgaGF2ZSBhIHBvcnRpb24gd2hpY2ggaXMgZGVmaW5pdGVseSB0aGUgYXV0aC5cbiAgICAvLyBQdWxsIHRoYXQgb2ZmLlxuICAgIGlmIChhdFNpZ24gIT09IC0xKSB7XG4gICAgICBhdXRoID0gcmVzdC5zbGljZSgwLCBhdFNpZ24pO1xuICAgICAgcmVzdCA9IHJlc3Quc2xpY2UoYXRTaWduICsgMSk7XG4gICAgICB0aGlzLmF1dGggPSBkZWNvZGVVUklDb21wb25lbnQoYXV0aCk7XG4gICAgfVxuXG4gICAgLy8gdGhlIGhvc3QgaXMgdGhlIHJlbWFpbmluZyB0byB0aGUgbGVmdCBvZiB0aGUgZmlyc3Qgbm9uLWhvc3QgY2hhclxuICAgIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vbkhvc3RDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhlYyA9IHJlc3QuaW5kZXhPZihub25Ib3N0Q2hhcnNbaV0pO1xuICAgICAgaWYgKGhlYyAhPT0gLTEgJiYgKGhvc3RFbmQgPT09IC0xIHx8IGhlYyA8IGhvc3RFbmQpKVxuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgIH1cbiAgICAvLyBpZiB3ZSBzdGlsbCBoYXZlIG5vdCBoaXQgaXQsIHRoZW4gdGhlIGVudGlyZSB0aGluZyBpcyBhIGhvc3QuXG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKVxuICAgICAgaG9zdEVuZCA9IHJlc3QubGVuZ3RoO1xuXG4gICAgdGhpcy5ob3N0ID0gcmVzdC5zbGljZSgwLCBob3N0RW5kKTtcbiAgICByZXN0ID0gcmVzdC5zbGljZShob3N0RW5kKTtcblxuICAgIC8vIHB1bGwgb3V0IHBvcnQuXG4gICAgdGhpcy5wYXJzZUhvc3QoKTtcblxuICAgIC8vIHdlJ3ZlIGluZGljYXRlZCB0aGF0IHRoZXJlIGlzIGEgaG9zdG5hbWUsXG4gICAgLy8gc28gZXZlbiBpZiBpdCdzIGVtcHR5LCBpdCBoYXMgdG8gYmUgcHJlc2VudC5cbiAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZSB8fCAnJztcblxuICAgIC8vIGlmIGhvc3RuYW1lIGJlZ2lucyB3aXRoIFsgYW5kIGVuZHMgd2l0aCBdXG4gICAgLy8gYXNzdW1lIHRoYXQgaXQncyBhbiBJUHY2IGFkZHJlc3MuXG4gICAgdmFyIGlwdjZIb3N0bmFtZSA9IHRoaXMuaG9zdG5hbWVbMF0gPT09ICdbJyAmJlxuICAgICAgICB0aGlzLmhvc3RuYW1lW3RoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMV0gPT09ICddJztcblxuICAgIC8vIHZhbGlkYXRlIGEgbGl0dGxlLlxuICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG4gICAgICB2YXIgaG9zdHBhcnRzID0gdGhpcy5ob3N0bmFtZS5zcGxpdCgvXFwuLyk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGhvc3RwYXJ0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIHBhcnQgPSBob3N0cGFydHNbaV07XG4gICAgICAgIGlmICghcGFydCkgY29udGludWU7XG4gICAgICAgIGlmICghcGFydC5tYXRjaChob3N0bmFtZVBhcnRQYXR0ZXJuKSkge1xuICAgICAgICAgIHZhciBuZXdwYXJ0ID0gJyc7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGsgPSBwYXJ0Lmxlbmd0aDsgaiA8IGs7IGorKykge1xuICAgICAgICAgICAgaWYgKHBhcnQuY2hhckNvZGVBdChqKSA+IDEyNykge1xuICAgICAgICAgICAgICAvLyB3ZSByZXBsYWNlIG5vbi1BU0NJSSBjaGFyIHdpdGggYSB0ZW1wb3JhcnkgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0aGlzIHRvIG1ha2Ugc3VyZSBzaXplIG9mIGhvc3RuYW1lIGlzIG5vdFxuICAgICAgICAgICAgICAvLyBicm9rZW4gYnkgcmVwbGFjaW5nIG5vbi1BU0NJSSBieSBub3RoaW5nXG4gICAgICAgICAgICAgIG5ld3BhcnQgKz0gJ3gnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3cGFydCArPSBwYXJ0W2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB3ZSB0ZXN0IGFnYWluIHdpdGggQVNDSUkgY2hhciBvbmx5XG4gICAgICAgICAgaWYgKCFuZXdwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFBhdHRlcm4pKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRQYXJ0cyA9IGhvc3RwYXJ0cy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIHZhciBub3RIb3N0ID0gaG9zdHBhcnRzLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgICAgIHZhciBiaXQgPSBwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChiaXQpIHtcbiAgICAgICAgICAgICAgdmFsaWRQYXJ0cy5wdXNoKGJpdFsxXSk7XG4gICAgICAgICAgICAgIG5vdEhvc3QudW5zaGlmdChiaXRbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vdEhvc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJlc3QgPSAnLycgKyBub3RIb3N0LmpvaW4oJy4nKSArIHJlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhvc3RuYW1lID0gdmFsaWRQYXJ0cy5qb2luKCcuJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5ob3N0bmFtZS5sZW5ndGggPiBob3N0bmFtZU1heExlbikge1xuICAgICAgdGhpcy5ob3N0bmFtZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBob3N0bmFtZXMgYXJlIGFsd2F5cyBsb3dlciBjYXNlLlxuICAgICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoIWlwdjZIb3N0bmFtZSkge1xuICAgICAgLy8gSUROQSBTdXBwb3J0OiBSZXR1cm5zIGEgcHVueWNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIFwiZG9tYWluXCIuXG4gICAgICAvLyBJdCBvbmx5IGNvbnZlcnRzIHBhcnRzIG9mIHRoZSBkb21haW4gbmFtZSB0aGF0XG4gICAgICAvLyBoYXZlIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLCBpLmUuIGl0IGRvZXNuJ3QgbWF0dGVyIGlmXG4gICAgICAvLyB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQgYWxyZWFkeSBpcyBBU0NJSS1vbmx5LlxuICAgICAgdGhpcy5ob3N0bmFtZSA9IHB1bnljb2RlLnRvQVNDSUkodGhpcy5ob3N0bmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIHAgPSB0aGlzLnBvcnQgPyAnOicgKyB0aGlzLnBvcnQgOiAnJztcbiAgICB2YXIgaCA9IHRoaXMuaG9zdG5hbWUgfHwgJyc7XG4gICAgdGhpcy5ob3N0ID0gaCArIHA7XG4gICAgdGhpcy5ocmVmICs9IHRoaXMuaG9zdDtcblxuICAgIC8vIHN0cmlwIFsgYW5kIF0gZnJvbSB0aGUgaG9zdG5hbWVcbiAgICAvLyB0aGUgaG9zdCBmaWVsZCBzdGlsbCByZXRhaW5zIHRoZW0sIHRob3VnaFxuICAgIGlmIChpcHY2SG9zdG5hbWUpIHtcbiAgICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lLnN1YnN0cigxLCB0aGlzLmhvc3RuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgaWYgKHJlc3RbMF0gIT09ICcvJykge1xuICAgICAgICByZXN0ID0gJy8nICsgcmVzdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBub3cgcmVzdCBpcyBzZXQgdG8gdGhlIHBvc3QtaG9zdCBzdHVmZi5cbiAgLy8gY2hvcCBvZmYgYW55IGRlbGltIGNoYXJzLlxuICBpZiAoIXVuc2FmZVByb3RvY29sW2xvd2VyUHJvdG9dKSB7XG5cbiAgICAvLyBGaXJzdCwgbWFrZSAxMDAlIHN1cmUgdGhhdCBhbnkgXCJhdXRvRXNjYXBlXCIgY2hhcnMgZ2V0XG4gICAgLy8gZXNjYXBlZCwgZXZlbiBpZiBlbmNvZGVVUklDb21wb25lbnQgZG9lc24ndCB0aGluayB0aGV5XG4gICAgLy8gbmVlZCB0byBiZS5cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGF1dG9Fc2NhcGUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgYWUgPSBhdXRvRXNjYXBlW2ldO1xuICAgICAgaWYgKHJlc3QuaW5kZXhPZihhZSkgPT09IC0xKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIHZhciBlc2MgPSBlbmNvZGVVUklDb21wb25lbnQoYWUpO1xuICAgICAgaWYgKGVzYyA9PT0gYWUpIHtcbiAgICAgICAgZXNjID0gZXNjYXBlKGFlKTtcbiAgICAgIH1cbiAgICAgIHJlc3QgPSByZXN0LnNwbGl0KGFlKS5qb2luKGVzYyk7XG4gICAgfVxuICB9XG5cblxuICAvLyBjaG9wIG9mZiBmcm9tIHRoZSB0YWlsIGZpcnN0LlxuICB2YXIgaGFzaCA9IHJlc3QuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaCAhPT0gLTEpIHtcbiAgICAvLyBnb3QgYSBmcmFnbWVudCBzdHJpbmcuXG4gICAgdGhpcy5oYXNoID0gcmVzdC5zdWJzdHIoaGFzaCk7XG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoMCwgaGFzaCk7XG4gIH1cbiAgdmFyIHFtID0gcmVzdC5pbmRleE9mKCc/Jyk7XG4gIGlmIChxbSAhPT0gLTEpIHtcbiAgICB0aGlzLnNlYXJjaCA9IHJlc3Quc3Vic3RyKHFtKTtcbiAgICB0aGlzLnF1ZXJ5ID0gcmVzdC5zdWJzdHIocW0gKyAxKTtcbiAgICBpZiAocGFyc2VRdWVyeVN0cmluZykge1xuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5c3RyaW5nLnBhcnNlKHRoaXMucXVlcnkpO1xuICAgIH1cbiAgICByZXN0ID0gcmVzdC5zbGljZSgwLCBxbSk7XG4gIH0gZWxzZSBpZiAocGFyc2VRdWVyeVN0cmluZykge1xuICAgIC8vIG5vIHF1ZXJ5IHN0cmluZywgYnV0IHBhcnNlUXVlcnlTdHJpbmcgc3RpbGwgcmVxdWVzdGVkXG4gICAgdGhpcy5zZWFyY2ggPSAnJztcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gIH1cbiAgaWYgKHJlc3QpIHRoaXMucGF0aG5hbWUgPSByZXN0O1xuICBpZiAoc2xhc2hlZFByb3RvY29sW2xvd2VyUHJvdG9dICYmXG4gICAgICB0aGlzLmhvc3RuYW1lICYmICF0aGlzLnBhdGhuYW1lKSB7XG4gICAgdGhpcy5wYXRobmFtZSA9ICcvJztcbiAgfVxuXG4gIC8vdG8gc3VwcG9ydCBodHRwLnJlcXVlc3RcbiAgaWYgKHRoaXMucGF0aG5hbWUgfHwgdGhpcy5zZWFyY2gpIHtcbiAgICB2YXIgcCA9IHRoaXMucGF0aG5hbWUgfHwgJyc7XG4gICAgdmFyIHMgPSB0aGlzLnNlYXJjaCB8fCAnJztcbiAgICB0aGlzLnBhdGggPSBwICsgcztcbiAgfVxuXG4gIC8vIGZpbmFsbHksIHJlY29uc3RydWN0IHRoZSBocmVmIGJhc2VkIG9uIHdoYXQgaGFzIGJlZW4gdmFsaWRhdGVkLlxuICB0aGlzLmhyZWYgPSB0aGlzLmZvcm1hdCgpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGZvcm1hdCBhIHBhcnNlZCBvYmplY3QgaW50byBhIHVybCBzdHJpbmdcbmZ1bmN0aW9uIHVybEZvcm1hdChvYmopIHtcbiAgLy8gZW5zdXJlIGl0J3MgYW4gb2JqZWN0LCBhbmQgbm90IGEgc3RyaW5nIHVybC5cbiAgLy8gSWYgaXQncyBhbiBvYmosIHRoaXMgaXMgYSBuby1vcC5cbiAgLy8gdGhpcyB3YXksIHlvdSBjYW4gY2FsbCB1cmxfZm9ybWF0KCkgb24gc3RyaW5nc1xuICAvLyB0byBjbGVhbiB1cCBwb3RlbnRpYWxseSB3b25reSB1cmxzLlxuICBpZiAodXRpbC5pc1N0cmluZyhvYmopKSBvYmogPSB1cmxQYXJzZShvYmopO1xuICBpZiAoIShvYmogaW5zdGFuY2VvZiBVcmwpKSByZXR1cm4gVXJsLnByb3RvdHlwZS5mb3JtYXQuY2FsbChvYmopO1xuICByZXR1cm4gb2JqLmZvcm1hdCgpO1xufVxuXG5VcmwucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYXV0aCA9IHRoaXMuYXV0aCB8fCAnJztcbiAgaWYgKGF1dGgpIHtcbiAgICBhdXRoID0gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpO1xuICAgIGF1dGggPSBhdXRoLnJlcGxhY2UoLyUzQS9pLCAnOicpO1xuICAgIGF1dGggKz0gJ0AnO1xuICB9XG5cbiAgdmFyIHByb3RvY29sID0gdGhpcy5wcm90b2NvbCB8fCAnJyxcbiAgICAgIHBhdGhuYW1lID0gdGhpcy5wYXRobmFtZSB8fCAnJyxcbiAgICAgIGhhc2ggPSB0aGlzLmhhc2ggfHwgJycsXG4gICAgICBob3N0ID0gZmFsc2UsXG4gICAgICBxdWVyeSA9ICcnO1xuXG4gIGlmICh0aGlzLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHRoaXMuaG9zdDtcbiAgfSBlbHNlIGlmICh0aGlzLmhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAodGhpcy5ob3N0bmFtZS5pbmRleE9mKCc6JykgPT09IC0xID9cbiAgICAgICAgdGhpcy5ob3N0bmFtZSA6XG4gICAgICAgICdbJyArIHRoaXMuaG9zdG5hbWUgKyAnXScpO1xuICAgIGlmICh0aGlzLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdGhpcy5wb3J0O1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLnF1ZXJ5ICYmXG4gICAgICB1dGlsLmlzT2JqZWN0KHRoaXMucXVlcnkpICYmXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXJ5KS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9IHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeSh0aGlzLnF1ZXJ5KTtcbiAgfVxuXG4gIHZhciBzZWFyY2ggPSB0aGlzLnNlYXJjaCB8fCAocXVlcnkgJiYgKCc/JyArIHF1ZXJ5KSkgfHwgJyc7XG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonO1xuXG4gIC8vIG9ubHkgdGhlIHNsYXNoZWRQcm90b2NvbHMgZ2V0IHRoZSAvLy4gIE5vdCBtYWlsdG86LCB4bXBwOiwgZXRjLlxuICAvLyB1bmxlc3MgdGhleSBoYWQgdGhlbSB0byBiZWdpbiB3aXRoLlxuICBpZiAodGhpcy5zbGFzaGVzIHx8XG4gICAgICAoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbFtwcm90b2NvbF0pICYmIGhvc3QgIT09IGZhbHNlKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJyk7XG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lO1xuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnO1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaC5jaGFyQXQoMCkgIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2g7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoLmNoYXJBdCgwKSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2g7XG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChtYXRjaCk7XG4gIH0pO1xuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKTtcblxuICByZXR1cm4gcHJvdG9jb2wgKyBob3N0ICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xufTtcblxuZnVuY3Rpb24gdXJsUmVzb2x2ZShzb3VyY2UsIHJlbGF0aXZlKSB7XG4gIHJldHVybiB1cmxQYXJzZShzb3VyY2UsIGZhbHNlLCB0cnVlKS5yZXNvbHZlKHJlbGF0aXZlKTtcbn1cblxuVXJsLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgcmV0dXJuIHRoaXMucmVzb2x2ZU9iamVjdCh1cmxQYXJzZShyZWxhdGl2ZSwgZmFsc2UsIHRydWUpKS5mb3JtYXQoKTtcbn07XG5cbmZ1bmN0aW9uIHVybFJlc29sdmVPYmplY3Qoc291cmNlLCByZWxhdGl2ZSkge1xuICBpZiAoIXNvdXJjZSkgcmV0dXJuIHJlbGF0aXZlO1xuICByZXR1cm4gdXJsUGFyc2Uoc291cmNlLCBmYWxzZSwgdHJ1ZSkucmVzb2x2ZU9iamVjdChyZWxhdGl2ZSk7XG59XG5cblVybC5wcm90b3R5cGUucmVzb2x2ZU9iamVjdCA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG4gIGlmICh1dGlsLmlzU3RyaW5nKHJlbGF0aXZlKSkge1xuICAgIHZhciByZWwgPSBuZXcgVXJsKCk7XG4gICAgcmVsLnBhcnNlKHJlbGF0aXZlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgcmVsYXRpdmUgPSByZWw7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gbmV3IFVybCgpO1xuICB2YXIgdGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgZm9yICh2YXIgdGsgPSAwOyB0ayA8IHRrZXlzLmxlbmd0aDsgdGsrKykge1xuICAgIHZhciB0a2V5ID0gdGtleXNbdGtdO1xuICAgIHJlc3VsdFt0a2V5XSA9IHRoaXNbdGtleV07XG4gIH1cblxuICAvLyBoYXNoIGlzIGFsd2F5cyBvdmVycmlkZGVuLCBubyBtYXR0ZXIgd2hhdC5cbiAgLy8gZXZlbiBocmVmPVwiXCIgd2lsbCByZW1vdmUgaXQuXG4gIHJlc3VsdC5oYXNoID0gcmVsYXRpdmUuaGFzaDtcblxuICAvLyBpZiB0aGUgcmVsYXRpdmUgdXJsIGlzIGVtcHR5LCB0aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIGRvIGhlcmUuXG4gIGlmIChyZWxhdGl2ZS5ocmVmID09PSAnJykge1xuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBocmVmcyBsaWtlIC8vZm9vL2JhciBhbHdheXMgY3V0IHRvIHRoZSBwcm90b2NvbC5cbiAgaWYgKHJlbGF0aXZlLnNsYXNoZXMgJiYgIXJlbGF0aXZlLnByb3RvY29sKSB7XG4gICAgLy8gdGFrZSBldmVyeXRoaW5nIGV4Y2VwdCB0aGUgcHJvdG9jb2wgZnJvbSByZWxhdGl2ZVxuICAgIHZhciBya2V5cyA9IE9iamVjdC5rZXlzKHJlbGF0aXZlKTtcbiAgICBmb3IgKHZhciByayA9IDA7IHJrIDwgcmtleXMubGVuZ3RoOyByaysrKSB7XG4gICAgICB2YXIgcmtleSA9IHJrZXlzW3JrXTtcbiAgICAgIGlmIChya2V5ICE9PSAncHJvdG9jb2wnKVxuICAgICAgICByZXN1bHRbcmtleV0gPSByZWxhdGl2ZVtya2V5XTtcbiAgICB9XG5cbiAgICAvL3VybFBhcnNlIGFwcGVuZHMgdHJhaWxpbmcgLyB0byB1cmxzIGxpa2UgaHR0cDovL3d3dy5leGFtcGxlLmNvbVxuICAgIGlmIChzbGFzaGVkUHJvdG9jb2xbcmVzdWx0LnByb3RvY29sXSAmJlxuICAgICAgICByZXN1bHQuaG9zdG5hbWUgJiYgIXJlc3VsdC5wYXRobmFtZSkge1xuICAgICAgcmVzdWx0LnBhdGggPSByZXN1bHQucGF0aG5hbWUgPSAnLyc7XG4gICAgfVxuXG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmIChyZWxhdGl2ZS5wcm90b2NvbCAmJiByZWxhdGl2ZS5wcm90b2NvbCAhPT0gcmVzdWx0LnByb3RvY29sKSB7XG4gICAgLy8gaWYgaXQncyBhIGtub3duIHVybCBwcm90b2NvbCwgdGhlbiBjaGFuZ2luZ1xuICAgIC8vIHRoZSBwcm90b2NvbCBkb2VzIHdlaXJkIHRoaW5nc1xuICAgIC8vIGZpcnN0LCBpZiBpdCdzIG5vdCBmaWxlOiwgdGhlbiB3ZSBNVVNUIGhhdmUgYSBob3N0LFxuICAgIC8vIGFuZCBpZiB0aGVyZSB3YXMgYSBwYXRoXG4gICAgLy8gdG8gYmVnaW4gd2l0aCwgdGhlbiB3ZSBNVVNUIGhhdmUgYSBwYXRoLlxuICAgIC8vIGlmIGl0IGlzIGZpbGU6LCB0aGVuIHRoZSBob3N0IGlzIGRyb3BwZWQsXG4gICAgLy8gYmVjYXVzZSB0aGF0J3Mga25vd24gdG8gYmUgaG9zdGxlc3MuXG4gICAgLy8gYW55dGhpbmcgZWxzZSBpcyBhc3N1bWVkIHRvIGJlIGFic29sdXRlLlxuICAgIGlmICghc2xhc2hlZFByb3RvY29sW3JlbGF0aXZlLnByb3RvY29sXSkge1xuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhyZWxhdGl2ZSk7XG4gICAgICBmb3IgKHZhciB2ID0gMDsgdiA8IGtleXMubGVuZ3RoOyB2KyspIHtcbiAgICAgICAgdmFyIGsgPSBrZXlzW3ZdO1xuICAgICAgICByZXN1bHRba10gPSByZWxhdGl2ZVtrXTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXN1bHQucHJvdG9jb2wgPSByZWxhdGl2ZS5wcm90b2NvbDtcbiAgICBpZiAoIXJlbGF0aXZlLmhvc3QgJiYgIWhvc3RsZXNzUHJvdG9jb2xbcmVsYXRpdmUucHJvdG9jb2xdKSB7XG4gICAgICB2YXIgcmVsUGF0aCA9IChyZWxhdGl2ZS5wYXRobmFtZSB8fCAnJykuc3BsaXQoJy8nKTtcbiAgICAgIHdoaWxlIChyZWxQYXRoLmxlbmd0aCAmJiAhKHJlbGF0aXZlLmhvc3QgPSByZWxQYXRoLnNoaWZ0KCkpKTtcbiAgICAgIGlmICghcmVsYXRpdmUuaG9zdCkgcmVsYXRpdmUuaG9zdCA9ICcnO1xuICAgICAgaWYgKCFyZWxhdGl2ZS5ob3N0bmFtZSkgcmVsYXRpdmUuaG9zdG5hbWUgPSAnJztcbiAgICAgIGlmIChyZWxQYXRoWzBdICE9PSAnJykgcmVsUGF0aC51bnNoaWZ0KCcnKTtcbiAgICAgIGlmIChyZWxQYXRoLmxlbmd0aCA8IDIpIHJlbFBhdGgudW5zaGlmdCgnJyk7XG4gICAgICByZXN1bHQucGF0aG5hbWUgPSByZWxQYXRoLmpvaW4oJy8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnBhdGhuYW1lID0gcmVsYXRpdmUucGF0aG5hbWU7XG4gICAgfVxuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgcmVzdWx0Lmhvc3QgPSByZWxhdGl2ZS5ob3N0IHx8ICcnO1xuICAgIHJlc3VsdC5hdXRoID0gcmVsYXRpdmUuYXV0aDtcbiAgICByZXN1bHQuaG9zdG5hbWUgPSByZWxhdGl2ZS5ob3N0bmFtZSB8fCByZWxhdGl2ZS5ob3N0O1xuICAgIHJlc3VsdC5wb3J0ID0gcmVsYXRpdmUucG9ydDtcbiAgICAvLyB0byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmIChyZXN1bHQucGF0aG5hbWUgfHwgcmVzdWx0LnNlYXJjaCkge1xuICAgICAgdmFyIHAgPSByZXN1bHQucGF0aG5hbWUgfHwgJyc7XG4gICAgICB2YXIgcyA9IHJlc3VsdC5zZWFyY2ggfHwgJyc7XG4gICAgICByZXN1bHQucGF0aCA9IHAgKyBzO1xuICAgIH1cbiAgICByZXN1bHQuc2xhc2hlcyA9IHJlc3VsdC5zbGFzaGVzIHx8IHJlbGF0aXZlLnNsYXNoZXM7XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHZhciBpc1NvdXJjZUFicyA9IChyZXN1bHQucGF0aG5hbWUgJiYgcmVzdWx0LnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSxcbiAgICAgIGlzUmVsQWJzID0gKFxuICAgICAgICAgIHJlbGF0aXZlLmhvc3QgfHxcbiAgICAgICAgICByZWxhdGl2ZS5wYXRobmFtZSAmJiByZWxhdGl2ZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJ1xuICAgICAgKSxcbiAgICAgIG11c3RFbmRBYnMgPSAoaXNSZWxBYnMgfHwgaXNTb3VyY2VBYnMgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdC5ob3N0ICYmIHJlbGF0aXZlLnBhdGhuYW1lKSksXG4gICAgICByZW1vdmVBbGxEb3RzID0gbXVzdEVuZEFicyxcbiAgICAgIHNyY1BhdGggPSByZXN1bHQucGF0aG5hbWUgJiYgcmVzdWx0LnBhdGhuYW1lLnNwbGl0KCcvJykgfHwgW10sXG4gICAgICByZWxQYXRoID0gcmVsYXRpdmUucGF0aG5hbWUgJiYgcmVsYXRpdmUucGF0aG5hbWUuc3BsaXQoJy8nKSB8fCBbXSxcbiAgICAgIHBzeWNob3RpYyA9IHJlc3VsdC5wcm90b2NvbCAmJiAhc2xhc2hlZFByb3RvY29sW3Jlc3VsdC5wcm90b2NvbF07XG5cbiAgLy8gaWYgdGhlIHVybCBpcyBhIG5vbi1zbGFzaGVkIHVybCwgdGhlbiByZWxhdGl2ZVxuICAvLyBsaW5rcyBsaWtlIC4uLy4uIHNob3VsZCBiZSBhYmxlXG4gIC8vIHRvIGNyYXdsIHVwIHRvIHRoZSBob3N0bmFtZSwgYXMgd2VsbC4gIFRoaXMgaXMgc3RyYW5nZS5cbiAgLy8gcmVzdWx0LnByb3RvY29sIGhhcyBhbHJlYWR5IGJlZW4gc2V0IGJ5IG5vdy5cbiAgLy8gTGF0ZXIgb24sIHB1dCB0aGUgZmlyc3QgcGF0aCBwYXJ0IGludG8gdGhlIGhvc3QgZmllbGQuXG4gIGlmIChwc3ljaG90aWMpIHtcbiAgICByZXN1bHQuaG9zdG5hbWUgPSAnJztcbiAgICByZXN1bHQucG9ydCA9IG51bGw7XG4gICAgaWYgKHJlc3VsdC5ob3N0KSB7XG4gICAgICBpZiAoc3JjUGF0aFswXSA9PT0gJycpIHNyY1BhdGhbMF0gPSByZXN1bHQuaG9zdDtcbiAgICAgIGVsc2Ugc3JjUGF0aC51bnNoaWZ0KHJlc3VsdC5ob3N0KTtcbiAgICB9XG4gICAgcmVzdWx0Lmhvc3QgPSAnJztcbiAgICBpZiAocmVsYXRpdmUucHJvdG9jb2wpIHtcbiAgICAgIHJlbGF0aXZlLmhvc3RuYW1lID0gbnVsbDtcbiAgICAgIHJlbGF0aXZlLnBvcnQgPSBudWxsO1xuICAgICAgaWYgKHJlbGF0aXZlLmhvc3QpIHtcbiAgICAgICAgaWYgKHJlbFBhdGhbMF0gPT09ICcnKSByZWxQYXRoWzBdID0gcmVsYXRpdmUuaG9zdDtcbiAgICAgICAgZWxzZSByZWxQYXRoLnVuc2hpZnQocmVsYXRpdmUuaG9zdCk7XG4gICAgICB9XG4gICAgICByZWxhdGl2ZS5ob3N0ID0gbnVsbDtcbiAgICB9XG4gICAgbXVzdEVuZEFicyA9IG11c3RFbmRBYnMgJiYgKHJlbFBhdGhbMF0gPT09ICcnIHx8IHNyY1BhdGhbMF0gPT09ICcnKTtcbiAgfVxuXG4gIGlmIChpc1JlbEFicykge1xuICAgIC8vIGl0J3MgYWJzb2x1dGUuXG4gICAgcmVzdWx0Lmhvc3QgPSAocmVsYXRpdmUuaG9zdCB8fCByZWxhdGl2ZS5ob3N0ID09PSAnJykgP1xuICAgICAgICAgICAgICAgICAgcmVsYXRpdmUuaG9zdCA6IHJlc3VsdC5ob3N0O1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9IChyZWxhdGl2ZS5ob3N0bmFtZSB8fCByZWxhdGl2ZS5ob3N0bmFtZSA9PT0gJycpID9cbiAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZS5ob3N0bmFtZSA6IHJlc3VsdC5ob3N0bmFtZTtcbiAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuICAgIHJlc3VsdC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICAgIHNyY1BhdGggPSByZWxQYXRoO1xuICAgIC8vIGZhbGwgdGhyb3VnaCB0byB0aGUgZG90LWhhbmRsaW5nIGJlbG93LlxuICB9IGVsc2UgaWYgKHJlbFBhdGgubGVuZ3RoKSB7XG4gICAgLy8gaXQncyByZWxhdGl2ZVxuICAgIC8vIHRocm93IGF3YXkgdGhlIGV4aXN0aW5nIGZpbGUsIGFuZCB0YWtlIHRoZSBuZXcgcGF0aCBpbnN0ZWFkLlxuICAgIGlmICghc3JjUGF0aCkgc3JjUGF0aCA9IFtdO1xuICAgIHNyY1BhdGgucG9wKCk7XG4gICAgc3JjUGF0aCA9IHNyY1BhdGguY29uY2F0KHJlbFBhdGgpO1xuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gIH0gZWxzZSBpZiAoIXV0aWwuaXNOdWxsT3JVbmRlZmluZWQocmVsYXRpdmUuc2VhcmNoKSkge1xuICAgIC8vIGp1c3QgcHVsbCBvdXQgdGhlIHNlYXJjaC5cbiAgICAvLyBsaWtlIGhyZWY9Jz9mb28nLlxuICAgIC8vIFB1dCB0aGlzIGFmdGVyIHRoZSBvdGhlciB0d28gY2FzZXMgYmVjYXVzZSBpdCBzaW1wbGlmaWVzIHRoZSBib29sZWFuc1xuICAgIGlmIChwc3ljaG90aWMpIHtcbiAgICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlc3VsdC5ob3N0ID0gc3JjUGF0aC5zaGlmdCgpO1xuICAgICAgLy9vY2NhdGlvbmFseSB0aGUgYXV0aCBjYW4gZ2V0IHN0dWNrIG9ubHkgaW4gaG9zdFxuICAgICAgLy90aGlzIGVzcGVjaWFsbHkgaGFwcGVucyBpbiBjYXNlcyBsaWtlXG4gICAgICAvL3VybC5yZXNvbHZlT2JqZWN0KCdtYWlsdG86bG9jYWwxQGRvbWFpbjEnLCAnbG9jYWwyQGRvbWFpbjInKVxuICAgICAgdmFyIGF1dGhJbkhvc3QgPSByZXN1bHQuaG9zdCAmJiByZXN1bHQuaG9zdC5pbmRleE9mKCdAJykgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lmhvc3Quc3BsaXQoJ0AnKSA6IGZhbHNlO1xuICAgICAgaWYgKGF1dGhJbkhvc3QpIHtcbiAgICAgICAgcmVzdWx0LmF1dGggPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgICAgIHJlc3VsdC5ob3N0ID0gcmVzdWx0Lmhvc3RuYW1lID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuICAgIHJlc3VsdC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICAgIC8vdG8gc3VwcG9ydCBodHRwLnJlcXVlc3RcbiAgICBpZiAoIXV0aWwuaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIXV0aWwuaXNOdWxsKHJlc3VsdC5zZWFyY2gpKSB7XG4gICAgICByZXN1bHQucGF0aCA9IChyZXN1bHQucGF0aG5hbWUgPyByZXN1bHQucGF0aG5hbWUgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAocmVzdWx0LnNlYXJjaCA/IHJlc3VsdC5zZWFyY2ggOiAnJyk7XG4gICAgfVxuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAoIXNyY1BhdGgubGVuZ3RoKSB7XG4gICAgLy8gbm8gcGF0aCBhdCBhbGwuICBlYXN5LlxuICAgIC8vIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgb3RoZXIgc3R1ZmYgYWJvdmUuXG4gICAgcmVzdWx0LnBhdGhuYW1lID0gbnVsbDtcbiAgICAvL3RvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gICAgaWYgKHJlc3VsdC5zZWFyY2gpIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gJy8nICsgcmVzdWx0LnNlYXJjaDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnBhdGggPSBudWxsO1xuICAgIH1cbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gaWYgYSB1cmwgRU5EcyBpbiAuIG9yIC4uLCB0aGVuIGl0IG11c3QgZ2V0IGEgdHJhaWxpbmcgc2xhc2guXG4gIC8vIGhvd2V2ZXIsIGlmIGl0IGVuZHMgaW4gYW55dGhpbmcgZWxzZSBub24tc2xhc2h5LFxuICAvLyB0aGVuIGl0IG11c3QgTk9UIGdldCBhIHRyYWlsaW5nIHNsYXNoLlxuICB2YXIgbGFzdCA9IHNyY1BhdGguc2xpY2UoLTEpWzBdO1xuICB2YXIgaGFzVHJhaWxpbmdTbGFzaCA9IChcbiAgICAgIChyZXN1bHQuaG9zdCB8fCByZWxhdGl2ZS5ob3N0IHx8IHNyY1BhdGgubGVuZ3RoID4gMSkgJiZcbiAgICAgIChsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJykgfHwgbGFzdCA9PT0gJycpO1xuXG4gIC8vIHN0cmlwIHNpbmdsZSBkb3RzLCByZXNvbHZlIGRvdWJsZSBkb3RzIHRvIHBhcmVudCBkaXJcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHNyY1BhdGgubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIGxhc3QgPSBzcmNQYXRoW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHNyY1BhdGguc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHNyY1BhdGguc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmICghbXVzdEVuZEFicyAmJiAhcmVtb3ZlQWxsRG90cykge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgc3JjUGF0aC51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtdXN0RW5kQWJzICYmIHNyY1BhdGhbMF0gIT09ICcnICYmXG4gICAgICAoIXNyY1BhdGhbMF0gfHwgc3JjUGF0aFswXS5jaGFyQXQoMCkgIT09ICcvJykpIHtcbiAgICBzcmNQYXRoLnVuc2hpZnQoJycpO1xuICB9XG5cbiAgaWYgKGhhc1RyYWlsaW5nU2xhc2ggJiYgKHNyY1BhdGguam9pbignLycpLnN1YnN0cigtMSkgIT09ICcvJykpIHtcbiAgICBzcmNQYXRoLnB1c2goJycpO1xuICB9XG5cbiAgdmFyIGlzQWJzb2x1dGUgPSBzcmNQYXRoWzBdID09PSAnJyB8fFxuICAgICAgKHNyY1BhdGhbMF0gJiYgc3JjUGF0aFswXS5jaGFyQXQoMCkgPT09ICcvJyk7XG5cbiAgLy8gcHV0IHRoZSBob3N0IGJhY2tcbiAgaWYgKHBzeWNob3RpYykge1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlc3VsdC5ob3N0ID0gaXNBYnNvbHV0ZSA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1BhdGgubGVuZ3RoID8gc3JjUGF0aC5zaGlmdCgpIDogJyc7XG4gICAgLy9vY2NhdGlvbmFseSB0aGUgYXV0aCBjYW4gZ2V0IHN0dWNrIG9ubHkgaW4gaG9zdFxuICAgIC8vdGhpcyBlc3BlY2lhbGx5IGhhcHBlbnMgaW4gY2FzZXMgbGlrZVxuICAgIC8vdXJsLnJlc29sdmVPYmplY3QoJ21haWx0bzpsb2NhbDFAZG9tYWluMScsICdsb2NhbDJAZG9tYWluMicpXG4gICAgdmFyIGF1dGhJbkhvc3QgPSByZXN1bHQuaG9zdCAmJiByZXN1bHQuaG9zdC5pbmRleE9mKCdAJykgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ob3N0LnNwbGl0KCdAJykgOiBmYWxzZTtcbiAgICBpZiAoYXV0aEluSG9zdCkge1xuICAgICAgcmVzdWx0LmF1dGggPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgICByZXN1bHQuaG9zdCA9IHJlc3VsdC5ob3N0bmFtZSA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICB9XG4gIH1cblxuICBtdXN0RW5kQWJzID0gbXVzdEVuZEFicyB8fCAocmVzdWx0Lmhvc3QgJiYgc3JjUGF0aC5sZW5ndGgpO1xuXG4gIGlmIChtdXN0RW5kQWJzICYmICFpc0Fic29sdXRlKSB7XG4gICAgc3JjUGF0aC51bnNoaWZ0KCcnKTtcbiAgfVxuXG4gIGlmICghc3JjUGF0aC5sZW5ndGgpIHtcbiAgICByZXN1bHQucGF0aG5hbWUgPSBudWxsO1xuICAgIHJlc3VsdC5wYXRoID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQucGF0aG5hbWUgPSBzcmNQYXRoLmpvaW4oJy8nKTtcbiAgfVxuXG4gIC8vdG8gc3VwcG9ydCByZXF1ZXN0Lmh0dHBcbiAgaWYgKCF1dGlsLmlzTnVsbChyZXN1bHQucGF0aG5hbWUpIHx8ICF1dGlsLmlzTnVsbChyZXN1bHQuc2VhcmNoKSkge1xuICAgIHJlc3VsdC5wYXRoID0gKHJlc3VsdC5wYXRobmFtZSA/IHJlc3VsdC5wYXRobmFtZSA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocmVzdWx0LnNlYXJjaCA/IHJlc3VsdC5zZWFyY2ggOiAnJyk7XG4gIH1cbiAgcmVzdWx0LmF1dGggPSByZWxhdGl2ZS5hdXRoIHx8IHJlc3VsdC5hdXRoO1xuICByZXN1bHQuc2xhc2hlcyA9IHJlc3VsdC5zbGFzaGVzIHx8IHJlbGF0aXZlLnNsYXNoZXM7XG4gIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuVXJsLnByb3RvdHlwZS5wYXJzZUhvc3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGhvc3QgPSB0aGlzLmhvc3Q7XG4gIHZhciBwb3J0ID0gcG9ydFBhdHRlcm4uZXhlYyhob3N0KTtcbiAgaWYgKHBvcnQpIHtcbiAgICBwb3J0ID0gcG9ydFswXTtcbiAgICBpZiAocG9ydCAhPT0gJzonKSB7XG4gICAgICB0aGlzLnBvcnQgPSBwb3J0LnN1YnN0cigxKTtcbiAgICB9XG4gICAgaG9zdCA9IGhvc3Quc3Vic3RyKDAsIGhvc3QubGVuZ3RoIC0gcG9ydC5sZW5ndGgpO1xuICB9XG4gIGlmIChob3N0KSB0aGlzLmhvc3RuYW1lID0gaG9zdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1N0cmluZzogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZihhcmcpID09PSAnc3RyaW5nJztcbiAgfSxcbiAgaXNPYmplY3Q6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YoYXJnKSA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xuICB9LFxuICBpc051bGw6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBhcmcgPT09IG51bGw7XG4gIH0sXG4gIGlzTnVsbE9yVW5kZWZpbmVkOiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gYXJnID09IG51bGw7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgJyMvY29tbW9uL2Jyb3dzZXInO1xuaW1wb3J0IHsgZ2V0QWN0aXZlVGFiLCBtYWtlUGF1c2UsIHNlbmRDbWQsIHJlcXVlc3QgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBCVUlMRF9JTl9TQ1JJUFRfU1JDLCBUSU1FT1VUXzI0SE9VUlMsIFRJTUVPVVRfTUFYLCBJU19ERVYgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0ICogYXMgdGxkIGZyb20gJyMvY29tbW9uL3RsZCc7XG5pbXBvcnQgKiBhcyBzeW5jIGZyb20gJy4vc3luYyc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgY2hlY2tSZW1vdmUgfSBmcm9tICcuL3V0aWxzL2RiJztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuL3V0aWxzL2luaXQnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uLCBob29rT3B0aW9ucyB9IGZyb20gJy4vdXRpbHMvb3B0aW9ucyc7XG5pbXBvcnQgeyBwb3B1cFRhYnMgfSBmcm9tICcuL3V0aWxzL3BvcHVwLXRyYWNrZXInO1xuaW1wb3J0IHsgZ2V0SW5qZWN0ZWRTY3JpcHRzIH0gZnJvbSAnLi91dGlscy9wcmVpbmplY3QnO1xuaW1wb3J0IHsgU0NSSVBUX1RFTVBMQVRFLCByZXNldFNjcmlwdFRlbXBsYXRlIH0gZnJvbSAnLi91dGlscy90ZW1wbGF0ZS1ob29rJztcbmltcG9ydCB7IHJlc2V0VmFsdWVPcGVuZXIsIGFkZFZhbHVlT3BlbmVyIH0gZnJvbSAnLi91dGlscy92YWx1ZXMnO1xuaW1wb3J0IHsgY2xlYXJSZXF1ZXN0c0J5VGFiSWQgfSBmcm9tICcuL3V0aWxzL3JlcXVlc3RzJztcbmltcG9ydCAnLi91dGlscy9jbGlwYm9hcmQnO1xuaW1wb3J0ICcuL3V0aWxzL2hvdGtleXMnO1xuaW1wb3J0ICcuL3V0aWxzL2ljb24nO1xuaW1wb3J0ICcuL3V0aWxzL25vdGlmaWNhdGlvbnMnO1xuaW1wb3J0ICcuL3V0aWxzL3NjcmlwdCc7XG5pbXBvcnQgJy4vdXRpbHMvdGFicyc7XG5pbXBvcnQgJy4vdXRpbHMvdGVzdGVyJztcbmltcG9ydCAnLi91dGlscy91cGRhdGUnO1xuXG5ob29rT3B0aW9ucygoY2hhbmdlcykgPT4ge1xuICBpZiAoJ2F1dG9VcGRhdGUnIGluIGNoYW5nZXMpIHtcbiAgICBhdXRvVXBkYXRlKCk7XG4gIH1cbiAgaWYgKFNDUklQVF9URU1QTEFURSBpbiBjaGFuZ2VzKSB7XG4gICAgcmVzZXRTY3JpcHRUZW1wbGF0ZShjaGFuZ2VzKTtcbiAgfVxuICBzZW5kQ21kKCdVcGRhdGVPcHRpb25zJywgY2hhbmdlcyk7XG59KTtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICAvKiogQHJldHVybiB7UHJvbWlzZTx7IHNjcmlwdHM6IFZNU2NyaXB0W10sIGNhY2hlOiBPYmplY3QsIHN5bmM6IE9iamVjdCB9Pn0gKi9cbiAgYXN5bmMgR2V0RGF0YShpZHMpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YShpZHMpO1xuICAgIGRhdGEuc3luYyA9IHN5bmMuZ2V0U3RhdGVzKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59ICovXG4gIGFzeW5jIEdldEluamVjdGVkKHsgdXJsLCBmb3JjZUNvbnRlbnQgfSwgc3JjKSB7XG4gICAgY29uc3QgeyBmcmFtZUlkLCB0YWIgfSA9IHNyYztcbiAgICBjb25zdCB0YWJJZCA9IHRhYi5pZDtcbiAgICBpZiAoIXVybCkgdXJsID0gc3JjLnVybCB8fCB0YWIudXJsO1xuICAgIGlmICghZnJhbWVJZCkge1xuICAgICAgcmVzZXRWYWx1ZU9wZW5lcih0YWJJZCk7XG4gICAgICBjbGVhclJlcXVlc3RzQnlUYWJJZCh0YWJJZCk7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEluamVjdGVkU2NyaXB0cyh1cmwsIHRhYklkLCBmcmFtZUlkLCBmb3JjZUNvbnRlbnQpO1xuICAgIGNvbnN0IHsgZmVlZGJhY2ssIGluamVjdCwgdmFsT3BJZHMgfSA9IHJlcztcbiAgICBpbmplY3QuaXNQb3B1cFNob3duID0gcG9wdXBUYWJzW3RhYklkXTtcbiAgICAvLyBJbmplY3Rpbmcga25vd24gY29udGVudCBzY3JpcHRzIHdpdGhvdXQgd2FpdGluZyBmb3IgSW5qZWN0aW9uRmVlZGJhY2sgbWVzc2FnZS5cbiAgICAvLyBSdW5uaW5nIGluIGEgc2VwYXJhdGUgdGFzayBiZWNhdXNlIGl0IG1heSB0YWtlIGEgbG9uZyB0aW1lIHRvIHNlcmlhbGl6ZSBkYXRhLlxuICAgIGlmIChmZWVkYmFjay5sZW5ndGgpIHtcbiAgICAgIHNldFRpbWVvdXQoY29tbWFuZHMuSW5qZWN0aW9uRmVlZGJhY2ssIDAsIHsgZmVlZGJhY2sgfSwgc3JjKTtcbiAgICB9XG4gICAgYWRkVmFsdWVPcGVuZXIodGFiSWQsIGZyYW1lSWQsIHZhbE9wSWRzKTtcbiAgICByZXR1cm4gaW5qZWN0O1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fSAqL1xuICBhc3luYyBHZXRUYWJEb21haW4oKSB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgZ2V0QWN0aXZlVGFiKCkgfHwge307XG4gICAgY29uc3QgdXJsID0gdGFiLnBlbmRpbmdVcmwgfHwgdGFiLnVybCB8fCAnJztcbiAgICBjb25zdCBob3N0ID0gdXJsLm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXi9dKyl8JC8pWzFdO1xuICAgIHJldHVybiB7XG4gICAgICB0YWIsXG4gICAgICBkb21haW46IGhvc3QgJiYgdGxkLmdldERvbWFpbihob3N0KSB8fCBob3N0LFxuICAgIH07XG4gIH0sXG4gIC8qKlxuICAgKiBUaW1lcnMgaW4gY29udGVudCBzY3JpcHRzIGFyZSBzaGFyZWQgd2l0aCB0aGUgd2ViIHBhZ2Ugc28gaXQgY2FuIGNsZWFyIHRoZW0uXG4gICAqIGF3YWl0IHNlbmRDbWQoJ1NldFRpbWVvdXQnLCAxMDApIGluIGluamVjdGVkL2NvbnRlbnRcbiAgICogYXdhaXQgYnJpZGdlLnNlbmQoJ1NldFRpbWVvdXQnLCAxMDApIGluIGluamVjdGVkL3dlYlxuICAgKi9cbiAgU2V0VGltZW91dChtcykge1xuICAgIHJldHVybiBtcyA+IDAgJiYgbWFrZVBhdXNlKG1zKTtcbiAgfSxcbn0pO1xuXG4vLyBjb21tYW5kcyB0byBzeW5jIHVuY29uZGl0aW9uYWxseSByZWdhcmRsZXNzIG9mIHRoZSByZXR1cm5lZCB2YWx1ZSBmcm9tIHRoZSBoYW5kbGVyXG5jb25zdCBjb21tYW5kc1RvU3luYyA9IFtcbiAgJ01hcmtSZW1vdmVkJyxcbiAgJ01vdmUnLFxuICAnUGFyc2VTY3JpcHQnLFxuICAnUmVtb3ZlU2NyaXB0JyxcbiAgJ1VwZGF0ZVNjcmlwdEluZm8nLFxuXTtcbi8vIGNvbW1hbmRzIHRvIHN5bmMgb25seSBpZiB0aGUgaGFuZGxlciByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlXG5jb25zdCBjb21tYW5kc1RvU3luY0lmVHJ1dGh5ID0gW1xuICAnQ2hlY2tSZW1vdmUnLFxuICAnQ2hlY2tVcGRhdGUnLFxuICAnQ2hlY2tVcGRhdGVBbGwnLFxuXTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ29tbWFuZE1lc3NhZ2UocmVxLCBzcmMpIHtcbiAgY29uc3QgeyBjbWQgfSA9IHJlcTtcbiAgY29uc3QgcmVzID0gYXdhaXQgY29tbWFuZHNbY21kXT8uKHJlcS5kYXRhLCBzcmMpO1xuICBpZiAoY29tbWFuZHNUb1N5bmMuaW5jbHVkZXMoY21kKVxuICB8fCByZXMgJiYgY29tbWFuZHNUb1N5bmNJZlRydXRoeS5pbmNsdWRlcyhjbWQpKSB7XG4gICAgc3luYy5zeW5jKCk7XG4gIH1cbiAgLy8gYHVuZGVmaW5lZGAgaXMgbm90IHRyYW5zZmVyYWJsZSwgYnV0IGBudWxsYCBpc1xuICByZXR1cm4gcmVzID8/IG51bGw7XG59XG5cbmZ1bmN0aW9uIGF1dG9VcGRhdGUoKSB7XG4gIGNvbnN0IGludGVydmFsID0gSVNfREVWID8gMTAwMDAgOiAoK2dldE9wdGlvbignYXV0b1VwZGF0ZScpIHx8IDApICogVElNRU9VVF8yNEhPVVJTO1xuICBpZiAoIWludGVydmFsKSByZXR1cm47XG4gIGxldCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGdldE9wdGlvbignbGFzdFVwZGF0ZScpO1xuICBpZiAoZWxhcHNlZCA+PSBpbnRlcnZhbCkge1xuICAgIGhhbmRsZUNvbW1hbmRNZXNzYWdlKHsgY21kOiAnQ2hlY2tVcGRhdGVBbGwnIH0pO1xuICAgIGVsYXBzZWQgPSAwO1xuICB9XG4gIGNsZWFyVGltZW91dChhdXRvVXBkYXRlLnRpbWVyKTtcbiAgYXV0b1VwZGF0ZS50aW1lciA9IHNldFRpbWVvdXQoYXV0b1VwZGF0ZSwgTWF0aC5taW4oVElNRU9VVF9NQVgsIGludGVydmFsIC0gZWxhcHNlZCkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0QnVpbGRpbigpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXF1ZXN0KEJVSUxEX0lOX1NDUklQVF9TUkMsIHtcbiAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICBoZWFkZXJzOiB7IEFjY2VwdDogJ3RleHQveC11c2Vyc2NyaXB0LW1ldGEsKi8qJyB9LFxuICB9KTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBjb21tYW5kcy5QYXJzZVNjcmlwdCh7XG4gICAgdXJsOiBCVUlMRF9JTl9TQ1JJUFRfU1JDLFxuICAgIGNvZGU6IGRhdGEsXG4gICAgY3VzdG9tOiB7IGJ1aWxkSW46IHRydWUgfSxcbiAgfSk7XG4gIHN5bmMuc3luYygpO1xuXG4gIGlmIChyZXMud2hlcmUuaWQgIT09IDEpIHtcbiAgICB0aHJvdyBgd3JvbmcgaWQ6ICR7cmVzLndoZXJlLmlkfWA7XG4gIH1cbn1cblxuaW5pdGlhbGl6ZSgoKSA9PiB7XG4gIGdsb2JhbC5oYW5kbGVDb21tYW5kTWVzc2FnZSA9IGhhbmRsZUNvbW1hbmRNZXNzYWdlO1xuICBnbG9iYWwuZGVlcENvcHkgPSBkZWVwQ29weTtcbiAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcbiAgICBJU19GSVJFRk9YIC8vIGluIEZGIGEgcmVqZWN0ZWQgUHJvbWlzZSB2YWx1ZSBpcyB0cmFuc2ZlcnJlZCBvbmx5IGlmIGl0J3MgYW4gRXJyb3Igb2JqZWN0XG4gICAgICA/ICguLi5hcmdzKSA9PiBoYW5kbGVDb21tYW5kTWVzc2FnZSguLi5hcmdzKS5jYXRjaChlID0+IChcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZSBpbnN0YW5jZW9mIEVycm9yID8gZSA6IG5ldyBFcnJvcihlKSlcbiAgICAgICkpIC8vIERpZG4ndCB1c2UgYHRocm93YCB0byBhdm9pZCBpbnRlcnJ1cHRpb24gaW4gZGV2dG9vbHMgd2l0aCBwYXVzZS1vbi1leGNlcHRpb24gZW5hYmxlZC5cbiAgICAgIDogaGFuZGxlQ29tbWFuZE1lc3NhZ2UsXG4gICk7XG5cbiAgLy8gY2hlY2sgYW5kIGluc3RhbGwgdGhlIGJ1aWxkLWluIHNjcmlwdFxuICBpbml0QnVpbGRpbigpO1xuICBjb25zb2xlLmluZm8oJ2luaXRCdWlsZGluLi4uJyk7XG4gIHNldFRpbWVvdXQoYXV0b1VwZGF0ZSwgSVNfREVWID8gMSA6IDJlNCk7XG4gIHN5bmMuaW5pdGlhbGl6ZSgpO1xuICBjaGVja1JlbW92ZSgpO1xuICBzZXRJbnRlcnZhbChjaGVja1JlbW92ZSwgVElNRU9VVF8yNEhPVVJTKTtcbiAgY29uc3QgYXBpID0gZ2xvYmFsLmNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQ7XG4gIGlmIChhcGkpIHtcbiAgICAvLyBVc2luZyBkZWNsYXJhdGl2ZUNvbnRlbnQgdG8gcnVuIGNvbnRlbnQgc2NyaXB0cyBlYXJsaWVyIHRoYW4gZG9jdW1lbnRfc3RhcnRcbiAgICBhcGkub25QYWdlQ2hhbmdlZC5nZXRSdWxlcyhhc3luYyAoW3J1bGVdKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IHJ1bGU/LmlkO1xuICAgICAgY29uc3QgbmV3SWQgPSBwcm9jZXNzLmVudi5JTklUX0ZVTkNfTkFNRTtcbiAgICAgIGlmIChpZCA9PT0gbmV3SWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIGF3YWl0IGJyb3dzZXIuZGVjbGFyYXRpdmVDb250ZW50Lm9uUGFnZUNoYW5nZWQucmVtb3ZlUnVsZXMoW2lkXSk7XG4gICAgICB9XG4gICAgICBhcGkub25QYWdlQ2hhbmdlZC5hZGRSdWxlcyhbe1xuICAgICAgICBpZDogbmV3SWQsXG4gICAgICAgIGNvbmRpdGlvbnM6IFtcbiAgICAgICAgICBuZXcgYXBpLlBhZ2VTdGF0ZU1hdGNoZXIoe1xuICAgICAgICAgICAgcGFnZVVybDogeyB1cmxDb250YWluczogJzovLycgfSwgLy8gZXNzZW50aWFsbHkgbGlrZSA8YWxsX3VybHM+XG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICBuZXcgYXBpLlJlcXVlc3RDb250ZW50U2NyaXB0KHtcbiAgICAgICAgICAgIGpzOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5jb250ZW50X3NjcmlwdHNbMF0uanMsXG4gICAgICAgICAgICAvLyBOb3QgdXNpbmcgYGFsbEZyYW1lczp0cnVlYCBhcyB0aGVyZSdzIG5vIGltcHJvdmVtZW50IGluIGZyYW1lc1xuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfV0pO1xuICAgIH0pO1xuICB9XG59KTtcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnIy9jb21tb24vZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEV2ZW50RW1pdHRlcihbXG4gICdzY3JpcHRFZGl0JyxcbiAgJ3NjcmlwdENoYW5nZWQnLFxuXSk7XG4iLCJpbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0U2NyaXB0cyB9IGZyb20gJy4uL3V0aWxzL2RiJztcblxuZXhwb3J0IGNvbnN0IHNjcmlwdCA9IHtcbiAgLyoqXG4gICAqIFVwZGF0ZSBhbiBleGlzdGluZyBzY3JpcHQgaWRlbnRpZmllZCBieSB0aGUgcHJvdmlkZWQgaWRcbiAgICogQHBhcmFtIHt7IGlkLCBjb2RlLCBtZXNzYWdlLCBpc05ldywgY29uZmlnLCBjdXN0b20sIHByb3BzLCB1cGRhdGUgfX0gZGF0YVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHsgaXNOZXc/LCB1cGRhdGUsIHdoZXJlIH0+fVxuICAgKi9cbiAgdXBkYXRlOiBjb21tYW5kcy5QYXJzZVNjcmlwdCxcbiAgLyoqXG4gICAqIExpc3QgYWxsIGF2YWlsYWJsZSBzY3JpcHRzLCB3aXRob3V0IHNjcmlwdCBjb2RlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Vk1TY3JpcHRbXT59XG4gICAqL1xuICBsaXN0OiBhc3luYyAoKSA9PiBnZXRTY3JpcHRzKCksXG4gIC8qKlxuICAgKiBHZXQgc2NyaXB0IGNvZGUgb2YgYW4gZXhpc3Rpbmcgc2NyaXB0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBnZXQ6IGNvbW1hbmRzLkdldFNjcmlwdENvZGUsXG4gIC8qKlxuICAgKiBSZW1vdmUgc2NyaXB0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgcmVtb3ZlOiBpZCA9PiBjb21tYW5kcy5NYXJrUmVtb3ZlZCh7IGlkLCByZW1vdmVkOiB0cnVlIH0pLFxufTtcbiIsImltcG9ydCB7XG4gIGRlYm91bmNlLCBub3JtYWxpemVLZXlzLCByZXF1ZXN0LCBub29wLCBtYWtlUGF1c2UsIGVuc3VyZUFycmF5LCBzZW5kQ21kLFxufSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBUSU1FT1VUX0hPVVIgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHtcbiAgZm9yRWFjaEVudHJ5LCBvYmplY3RTZXQsIG9iamVjdFBpY2ssXG59IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQge1xuICBnZXRFdmVudEVtaXR0ZXIsIGdldE9wdGlvbiwgc2V0T3B0aW9uLCBob29rT3B0aW9ucyxcbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgc29ydFNjcmlwdHMsXG4gIHVwZGF0ZVNjcmlwdEluZm8sXG59IGZyb20gJy4uL3V0aWxzL2RiJztcbmltcG9ydCB7IHNjcmlwdCBhcyBwbHVnaW5TY3JpcHQgfSBmcm9tICcuLi9wbHVnaW4nO1xuXG5jb25zdCBzZXJ2aWNlTmFtZXMgPSBbXTtcbmNvbnN0IHNlcnZpY2VDbGFzc2VzID0gW107XG5jb25zdCBzZXJ2aWNlcyA9IHt9O1xuY29uc3QgYXV0b1N5bmMgPSBkZWJvdW5jZShzeW5jLCBUSU1FT1VUX0hPVVIpO1xubGV0IHdvcmtpbmcgPSBQcm9taXNlLnJlc29sdmUoKTtcbmxldCBzeW5jQ29uZmlnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUZpbGVuYW1lKHsgbmFtZSwgdXJpIH0pIHtcbiAgLy8gV2hlbiBnZXQgb3IgcmVtb3ZlLCBjdXJyZW50IG5hbWUgc2hvdWxkIGJlIHByZWZlcmVkXG4gIGlmIChuYW1lKSByZXR1cm4gbmFtZTtcbiAgLy8gb3RoZXJ3aXNlIHVyaSBkZXJpdmVkIG5hbWUgc2hvdWxkIGJlIHByZWZlcmVkXG4gIC8vIHVyaSBpcyBhbHJlYWR5IGVuY29kZWQgYnkgYGVuY29kZUZpbGVuYW1lYFxuICByZXR1cm4gYHZtQDItJHt1cml9YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1NjcmlwdEZpbGUobmFtZSkge1xuICByZXR1cm4gL152bSg/OkBcXGQrKT8tLy50ZXN0KG5hbWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSSShuYW1lKSB7XG4gIGNvbnN0IGkgPSBuYW1lLmluZGV4T2YoJy0nKTtcbiAgY29uc3QgWywgdmVyc2lvbl0gPSBuYW1lLnNsaWNlKDAsIGkpLnNwbGl0KCdAJyk7XG4gIGlmICh2ZXJzaW9uID09PSAnMicpIHtcbiAgICAvLyB1cmkgaXMgZW5jb2RlZCBieSBgZW5jb2RlZEZpbGVuYW1lYCwgc28gd2Ugc2hvdWxkIG5vdCBkZWNvZGUgaXQgaGVyZVxuICAgIHJldHVybiBuYW1lLnNsaWNlKGkgKyAxKTtcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQobmFtZS5zbGljZSgzKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBuYW1lLnNsaWNlKDMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDb25maWcoKSB7XG4gIGZ1bmN0aW9uIGdldChrZXksIGRlZikge1xuICAgIGNvbnN0IGtleXMgPSBub3JtYWxpemVLZXlzKGtleSk7XG4gICAga2V5cy51bnNoaWZ0KCdzeW5jJyk7XG4gICAgcmV0dXJuIGdldE9wdGlvbihrZXlzLCBkZWYpO1xuICB9XG4gIGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5KTtcbiAgICBrZXlzLnVuc2hpZnQoJ3N5bmMnKTtcbiAgICBzZXRPcHRpb24oa2V5cywgdmFsdWUpO1xuICB9XG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbGV0IGNvbmZpZyA9IGdldE9wdGlvbignc3luYycpO1xuICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2VydmljZXMpIHtcbiAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgc2VydmljZXM6IHt9LFxuICAgICAgfTtcbiAgICAgIHNldChbXSwgY29uZmlnKTtcbiAgICB9XG4gIH1cbiAgaW5pdCgpO1xuICByZXR1cm4geyBnZXQsIHNldCB9O1xufVxuZnVuY3Rpb24gc2VydmljZUNvbmZpZyhuYW1lKSB7XG4gIGZ1bmN0aW9uIGdldEtleXMoa2V5KSB7XG4gICAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5KTtcbiAgICBrZXlzLnVuc2hpZnQoJ3NlcnZpY2VzJywgbmFtZSk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0KGtleSwgZGVmKSB7XG4gICAgcmV0dXJuIHN5bmNDb25maWcuZ2V0KGdldEtleXMoa2V5KSwgZGVmKTtcbiAgfVxuICBmdW5jdGlvbiBzZXQoa2V5LCB2YWwpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGtleTo6Zm9yRWFjaEVudHJ5KChbaywgdl0pID0+IHtcbiAgICAgICAgc3luY0NvbmZpZy5zZXQoZ2V0S2V5cyhrKSwgdik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3luY0NvbmZpZy5zZXQoZ2V0S2V5cyhrZXkpLCB2YWwpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzeW5jQ29uZmlnLnNldChnZXRLZXlzKCksIHt9KTtcbiAgfVxuICByZXR1cm4geyBnZXQsIHNldCwgY2xlYXIgfTtcbn1cbmZ1bmN0aW9uIHNlcnZpY2VTdGF0ZSh2YWxpZFN0YXRlcywgaW5pdGlhbFN0YXRlLCBvbkNoYW5nZSkge1xuICBsZXQgc3RhdGUgPSBpbml0aWFsU3RhdGUgfHwgdmFsaWRTdGF0ZXNbMF07XG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgZnVuY3Rpb24gc2V0KG5ld1N0YXRlKSB7XG4gICAgaWYgKHZhbGlkU3RhdGVzLmluY2x1ZGVzKG5ld1N0YXRlKSkge1xuICAgICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgIGlmIChvbkNoYW5nZSkgb25DaGFuZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIHN0YXRlOicsIG5ld1N0YXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldCgpO1xuICB9XG4gIGZ1bmN0aW9uIGlzKHN0YXRlcykge1xuICAgIHJldHVybiBlbnN1cmVBcnJheShzdGF0ZXMpLmluY2x1ZGVzKHN0YXRlKTtcbiAgfVxuICByZXR1cm4geyBnZXQsIHNldCwgaXMgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZXMoKSB7XG4gIHJldHVybiBzZXJ2aWNlTmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgY29uc3Qgc2VydmljZSA9IHNlcnZpY2VzW25hbWVdO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBzZXJ2aWNlLm5hbWUsXG4gICAgICBkaXNwbGF5TmFtZTogc2VydmljZS5kaXNwbGF5TmFtZSxcbiAgICAgIGF1dGhTdGF0ZTogc2VydmljZS5hdXRoU3RhdGUuZ2V0KCksXG4gICAgICBzeW5jU3RhdGU6IHNlcnZpY2Uuc3luY1N0YXRlLmdldCgpLFxuICAgICAgbGFzdFN5bmM6IHNlcnZpY2UuY29uZmlnLmdldCgnbWV0YScsIHt9KS5sYXN0U3luYyxcbiAgICAgIHByb2dyZXNzOiBzZXJ2aWNlLnByb2dyZXNzLFxuICAgICAgcHJvcGVydGllczogc2VydmljZS5wcm9wZXJ0aWVzLFxuICAgICAgdXNlckNvbmZpZzogc2VydmljZS5nZXRVc2VyQ29uZmlnKCksXG4gICAgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcmlwdERhdGEoc2NyaXB0LCBzeW5jVmVyc2lvbiwgZXh0cmEpIHtcbiAgbGV0IGRhdGE7XG4gIGlmIChzeW5jVmVyc2lvbiA9PT0gMikge1xuICAgIGRhdGEgPSB7XG4gICAgICB2ZXJzaW9uOiBzeW5jVmVyc2lvbixcbiAgICAgIGN1c3RvbTogc2NyaXB0LmN1c3RvbSxcbiAgICAgIGNvbmZpZzogc2NyaXB0LmNvbmZpZyxcbiAgICAgIHByb3BzOiBvYmplY3RQaWNrKHNjcmlwdC5wcm9wcywgWydsYXN0VXBkYXRlZCddKSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHN5bmNWZXJzaW9uID09PSAxKSB7XG4gICAgZGF0YSA9IHtcbiAgICAgIHZlcnNpb246IHN5bmNWZXJzaW9uLFxuICAgICAgbW9yZToge1xuICAgICAgICBjdXN0b206IHNjcmlwdC5jdXN0b20sXG4gICAgICAgIGVuYWJsZWQ6IHNjcmlwdC5jb25maWcuZW5hYmxlZCxcbiAgICAgICAgdXBkYXRlOiBzY3JpcHQuY29uZmlnLnNob3VsZFVwZGF0ZSxcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IHNjcmlwdC5wcm9wcy5sYXN0VXBkYXRlZCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihkYXRhLCBleHRyYSk7XG59XG5mdW5jdGlvbiBwYXJzZVNjcmlwdERhdGEocmF3KSB7XG4gIGNvbnN0IGRhdGEgPSB7fTtcbiAgdHJ5IHtcbiAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgZGF0YS5jb2RlID0gb2JqLmNvZGU7XG4gICAgaWYgKG9iai52ZXJzaW9uID09PSAyKSB7XG4gICAgICBkYXRhLmNvbmZpZyA9IG9iai5jb25maWc7XG4gICAgICBkYXRhLmN1c3RvbSA9IG9iai5jdXN0b207XG4gICAgICBkYXRhLnByb3BzID0gb2JqLnByb3BzO1xuICAgIH0gZWxzZSBpZiAob2JqLnZlcnNpb24gPT09IDEpIHtcbiAgICAgIGlmIChvYmoubW9yZSkge1xuICAgICAgICBkYXRhLmN1c3RvbSA9IG9iai5tb3JlLmN1c3RvbTtcbiAgICAgICAgZGF0YS5jb25maWcgPSBvYmplY3RQdXJpZnkoe1xuICAgICAgICAgIGVuYWJsZWQ6IG9iai5tb3JlLmVuYWJsZWQsXG4gICAgICAgICAgc2hvdWxkVXBkYXRlOiBvYmoubW9yZS51cGRhdGUsXG4gICAgICAgIH0pO1xuICAgICAgICBkYXRhLnByb3BzID0gb2JqZWN0UHVyaWZ5KHtcbiAgICAgICAgICBsYXN0VXBkYXRlZDogb2JqLm1vcmUubGFzdFVwZGF0ZWQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGRhdGEuY29kZSA9IHJhdztcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0UHVyaWZ5KG9iaikge1xuICAvLyBSZW1vdmUga2V5cyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXNcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIG9iai5mb3JFYWNoKG9iamVjdFB1cmlmeSk7XG4gIH0gZWxzZSBpZiAob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgb2JqOjpmb3JFYWNoRW50cnkoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgIGVsc2Ugb2JqZWN0UHVyaWZ5KHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBzZXJ2aWNlRmFjdG9yeShiYXNlKSB7XG4gIGNvbnN0IFNlcnZpY2UgPSBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfTtcbiAgU2VydmljZS5wcm90b3R5cGUgPSBiYXNlO1xuICBTZXJ2aWNlLmV4dGVuZCA9IGV4dGVuZFNlcnZpY2U7XG4gIHJldHVybiBTZXJ2aWNlO1xufVxuZnVuY3Rpb24gZXh0ZW5kU2VydmljZShvcHRpb25zKSB7XG4gIHJldHVybiBzZXJ2aWNlRmFjdG9yeShPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUodGhpcy5wcm90b3R5cGUpLCBvcHRpb25zKSk7XG59XG5cbmNvbnN0IG9uU3RhdGVDaGFuZ2UgPSBkZWJvdW5jZSgoKSA9PiB7XG4gIHNlbmRDbWQoJ1VwZGF0ZVN5bmMnLCBnZXRTdGF0ZXMoKSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IEJhc2VTZXJ2aWNlID0gc2VydmljZUZhY3Rvcnkoe1xuICBuYW1lOiAnYmFzZScsXG4gIGRpc3BsYXlOYW1lOiAnQmFzZVNlcnZpY2UnLFxuICBkZWxheVRpbWU6IDEwMDAsXG4gIHVybFByZWZpeDogJycsXG4gIG1ldGFGaWxlOiAnVmlvbGVudG1vbmtleScsXG4gIHByb3BlcnRpZXM6IHtcbiAgICBhdXRoVHlwZTogJ29hdXRoJyxcbiAgfSxcbiAgZ2V0VXNlckNvbmZpZzogbm9vcCxcbiAgc2V0VXNlckNvbmZpZzogbm9vcCxcbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnByb2dyZXNzID0ge1xuICAgICAgZmluaXNoZWQ6IDAsXG4gICAgICB0b3RhbDogMCxcbiAgICB9O1xuICAgIHRoaXMuY29uZmlnID0gc2VydmljZUNvbmZpZyh0aGlzLm5hbWUpO1xuICAgIHRoaXMuYXV0aFN0YXRlID0gc2VydmljZVN0YXRlKFtcbiAgICAgICdpZGxlJyxcbiAgICAgICduby1hdXRoJyxcbiAgICAgICdpbml0aWFsaXppbmcnLFxuICAgICAgJ2F1dGhvcml6aW5nJywgLy8gaW4gY2FzZSBzb21lIHNlcnZpY2VzIHJlcXVpcmUgYXN5bmNocm9ub3VzIHJlcXVlc3RzIHRvIGdldCBhY2Nlc3NfdG9rZW5zXG4gICAgICAnYXV0aG9yaXplZCcsXG4gICAgICAndW5hdXRob3JpemVkJyxcbiAgICAgICdlcnJvcicsXG4gICAgXSwgbnVsbCwgb25TdGF0ZUNoYW5nZSk7XG4gICAgdGhpcy5zeW5jU3RhdGUgPSBzZXJ2aWNlU3RhdGUoW1xuICAgICAgJ2lkbGUnLFxuICAgICAgJ3JlYWR5JyxcbiAgICAgICdzeW5jaW5nJyxcbiAgICAgICdlcnJvcicsXG4gICAgXSwgbnVsbCwgb25TdGF0ZUNoYW5nZSk7XG4gICAgdGhpcy5sYXN0RmV0Y2ggPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLnN0YXJ0U3luYyA9IHRoaXMuc3luY0ZhY3RvcnkoKTtcbiAgICBjb25zdCBldmVudHMgPSBnZXRFdmVudEVtaXR0ZXIoKTtcbiAgICBbJ29uJywgJ29mZicsICdmaXJlJ11cbiAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzW2tleV0gPSAoLi4uYXJncykgPT4geyBldmVudHNba2V5XSguLi5hcmdzKTsgfTtcbiAgICB9KTtcbiAgfSxcbiAgbG9nKC4uLmFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyguLi5hcmdzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH0sXG4gIHN5bmNGYWN0b3J5KCkge1xuICAgIGxldCBwcm9taXNlO1xuICAgIGxldCBkZWJvdW5jZWRSZXNvbHZlO1xuICAgIGNvbnN0IHNob3VsZFN5bmMgPSAoKSA9PiB0aGlzLmF1dGhTdGF0ZS5pcygnYXV0aG9yaXplZCcpICYmIGdldEN1cnJlbnQoKSA9PT0gdGhpcy5uYW1lO1xuICAgIGNvbnN0IGdldFJlYWR5ID0gKCkgPT4ge1xuICAgICAgaWYgKCFzaG91bGRTeW5jKCkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIHRoaXMubG9nKCdSZWFkeSB0byBzeW5jOicsIHRoaXMuZGlzcGxheU5hbWUpO1xuICAgICAgdGhpcy5zeW5jU3RhdGUuc2V0KCdyZWFkeScpO1xuICAgICAgd29ya2luZyA9IHdvcmtpbmcudGhlbigoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBkZWJvdW5jZWRSZXNvbHZlID0gZGVib3VuY2UocmVzb2x2ZSwgMTAgKiAxMDAwKTtcbiAgICAgICAgZGVib3VuY2VkUmVzb2x2ZSgpO1xuICAgICAgfSkpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChzaG91bGRTeW5jKCkpIHJldHVybiB0aGlzLnN5bmMoKTtcbiAgICAgICAgdGhpcy5zeW5jU3RhdGUuc2V0KCdpZGxlJyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHsgY29uc29sZS5lcnJvcihlcnIpOyB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgZGVib3VuY2VkUmVzb2x2ZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICAgIHByb21pc2UgPSB3b3JraW5nO1xuICAgIH07XG4gICAgZnVuY3Rpb24gc3RhcnRTeW5jKCkge1xuICAgICAgaWYgKCFwcm9taXNlKSBnZXRSZWFkeSgpO1xuICAgICAgaWYgKGRlYm91bmNlZFJlc29sdmUpIGRlYm91bmNlZFJlc29sdmUoKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICByZXR1cm4gc3RhcnRTeW5jO1xuICB9LFxuICBwcmVwYXJlSGVhZGVycygpIHtcbiAgICB0aGlzLmhlYWRlcnMgPSB7fTtcbiAgfSxcbiAgcHJlcGFyZSgpIHtcbiAgICB0aGlzLmF1dGhTdGF0ZS5zZXQoJ2luaXRpYWxpemluZycpO1xuICAgIHJldHVybiAodGhpcy5pbml0VG9rZW4oKSA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnVzZXIoKSkgOiBQcm9taXNlLnJlamVjdCh7XG4gICAgICB0eXBlOiAnbm8tYXV0aCcsXG4gICAgfSkpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5hdXRoU3RhdGUuc2V0KCdhdXRob3JpemVkJyk7XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgaWYgKFsnbm8tYXV0aCcsICd1bmF1dGhvcml6ZWQnXS5pbmNsdWRlcyhlcnI/LnR5cGUpKSB7XG4gICAgICAgIHRoaXMuYXV0aFN0YXRlLnNldChlcnIudHlwZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHRoaXMuYXV0aFN0YXRlLnNldCgnZXJyb3InKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3luY1N0YXRlLnNldCgnaWRsZScpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9LFxuICBjaGVja1N5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZSgpXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5zdGFydFN5bmMoKSk7XG4gIH0sXG4gIHVzZXI6IG5vb3AsXG4gIGFjcXVpcmVMb2NrOiBub29wLFxuICByZWxlYXNlTG9jazogbm9vcCxcbiAgaGFuZGxlTWV0YUVycm9yKGVycikge1xuICAgIHRocm93IGVycjtcbiAgfSxcbiAgZ2V0TWV0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoeyBuYW1lOiB0aGlzLm1ldGFGaWxlIH0pXG4gICAgLnRoZW4oZGF0YSA9PiBKU09OLnBhcnNlKGRhdGEpKVxuICAgIC5jYXRjaChlcnIgPT4gdGhpcy5oYW5kbGVNZXRhRXJyb3IoZXJyKSlcbiAgICAudGhlbihkYXRhID0+ICh7XG4gICAgICBuYW1lOiB0aGlzLm1ldGFGaWxlLFxuICAgICAgZGF0YSxcbiAgICB9KSk7XG4gIH0sXG4gIGluaXRUb2tlbigpIHtcbiAgICB0aGlzLnByZXBhcmVIZWFkZXJzKCk7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmNvbmZpZy5nZXQoJ3Rva2VuJyk7XG4gICAgdGhpcy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogbnVsbDtcbiAgICByZXR1cm4gISF0b2tlbjtcbiAgfSxcbiAgbG9hZERhdGEob3B0aW9ucykge1xuICAgIGNvbnN0IHsgcHJvZ3Jlc3MgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBkZWxheSA9IHRoaXMuZGVsYXlUaW1lIH0gPSBvcHRpb25zO1xuICAgIGxldCBsYXN0RmV0Y2ggPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGxhc3RGZXRjaCA9IHRoaXMubGFzdEZldGNoXG4gICAgICAudGhlbih0cyA9PiBtYWtlUGF1c2UoZGVsYXkgLSAoRGF0ZS5ub3coKSAtIHRzKSkpXG4gICAgICAudGhlbigoKSA9PiBEYXRlLm5vdygpKTtcbiAgICAgIHRoaXMubGFzdEZldGNoID0gbGFzdEZldGNoO1xuICAgIH1cbiAgICBwcm9ncmVzcy50b3RhbCArPSAxO1xuICAgIG9uU3RhdGVDaGFuZ2UoKTtcbiAgICByZXR1cm4gbGFzdEZldGNoLnRoZW4oKCkgPT4ge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5oZWFkZXJzLCBvcHRpb25zLmhlYWRlcnMpO1xuICAgICAgbGV0IHsgdXJsIH0gPSBvcHRpb25zO1xuICAgICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHVybCA9IChvcHRpb25zLnByZWZpeCA/PyB0aGlzLnVybFByZWZpeCkgKyB1cmw7XG4gICAgICByZXR1cm4gcmVxdWVzdCh1cmwsIG9wdGlvbnMpO1xuICAgIH0pXG4gICAgLnRoZW4oKHsgZGF0YSB9KSA9PiAoeyBkYXRhIH0pLCBlcnJvciA9PiAoeyBlcnJvciB9KSlcbiAgICAudGhlbigoeyBkYXRhLCBlcnJvciB9KSA9PiB7XG4gICAgICBwcm9ncmVzcy5maW5pc2hlZCArPSAxO1xuICAgICAgb25TdGF0ZUNoYW5nZSgpO1xuICAgICAgaWYgKGVycm9yKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH0sXG4gIGdldExvY2FsRGF0YSgpIHtcbiAgICByZXR1cm4gcGx1Z2luU2NyaXB0Lmxpc3QoKTtcbiAgfSxcbiAgZ2V0U3luY0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TWV0YSgpXG4gICAgLnRoZW4ocmVtb3RlTWV0YSA9PiBQcm9taXNlLmFsbChbXG4gICAgICByZW1vdGVNZXRhLFxuICAgICAgdGhpcy5saXN0KCksXG4gICAgICB0aGlzLmdldExvY2FsRGF0YSgpLFxuICAgIF0pKTtcbiAgfSxcbiAgc3luYygpIHtcbiAgICB0aGlzLnByb2dyZXNzID0ge1xuICAgICAgZmluaXNoZWQ6IDAsXG4gICAgICB0b3RhbDogMCxcbiAgICB9O1xuICAgIHRoaXMuc3luY1N0YXRlLnNldCgnc3luY2luZycpO1xuICAgIC8vIEF2b2lkIHNpbXVsdGFuZW91cyByZXF1ZXN0c1xuICAgIHJldHVybiB0aGlzLnByZXBhcmUoKVxuICAgIC50aGVuKCgpID0+IHRoaXMuZ2V0U3luY0RhdGEoKSlcbiAgICAudGhlbihkYXRhID0+IFByb21pc2UucmVzb2x2ZSh0aGlzLmFjcXVpcmVMb2NrKCkpLnRoZW4oKCkgPT4gZGF0YSkpXG4gICAgLnRoZW4oKFtyZW1vdGVNZXRhLCByZW1vdGVEYXRhLCBsb2NhbERhdGFdKSA9PiB7XG4gICAgICBjb25zdCByZW1vdGVNZXRhRGF0YSA9IHJlbW90ZU1ldGEuZGF0YSB8fCB7fTtcbiAgICAgIGNvbnN0IHJlbW90ZU1ldGFJbmZvID0gcmVtb3RlTWV0YURhdGEuaW5mbyB8fCB7fTtcbiAgICAgIGNvbnN0IHJlbW90ZVRpbWVzdGFtcCA9IHJlbW90ZU1ldGFEYXRhLnRpbWVzdGFtcCB8fCAwO1xuICAgICAgbGV0IHJlbW90ZUNoYW5nZWQgPSAhcmVtb3RlVGltZXN0YW1wXG4gICAgICAgIHx8IE9iamVjdC5rZXlzKHJlbW90ZU1ldGFJbmZvKS5sZW5ndGggIT09IHJlbW90ZURhdGEubGVuZ3RoO1xuICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IGdsb2JhbExhc3RNb2RpZmllZCA9IGdldE9wdGlvbignbGFzdE1vZGlmaWVkJyk7XG4gICAgICBjb25zdCByZW1vdGVJdGVtTWFwID0ge307XG4gICAgICBjb25zdCBsb2NhbE1ldGEgPSB0aGlzLmNvbmZpZy5nZXQoJ21ldGEnLCB7fSk7XG4gICAgICBjb25zdCBmaXJzdFN5bmMgPSAhbG9jYWxNZXRhLnRpbWVzdGFtcDtcbiAgICAgIGNvbnN0IG91dGRhdGVkID0gZmlyc3RTeW5jIHx8IHJlbW90ZVRpbWVzdGFtcCA+IGxvY2FsTWV0YS50aW1lc3RhbXA7XG4gICAgICB0aGlzLmxvZygnRmlyc3Qgc3luYzonLCBmaXJzdFN5bmMpO1xuICAgICAgdGhpcy5sb2coJ091dGRhdGVkOicsIG91dGRhdGVkLCAnKCcsICdsb2NhbDonLCBsb2NhbE1ldGEudGltZXN0YW1wLCAncmVtb3RlOicsIHJlbW90ZVRpbWVzdGFtcCwgJyknKTtcbiAgICAgIGNvbnN0IHB1dExvY2FsID0gW107XG4gICAgICBjb25zdCBwdXRSZW1vdGUgPSBbXTtcbiAgICAgIGNvbnN0IGRlbFJlbW90ZSA9IFtdO1xuICAgICAgY29uc3QgZGVsTG9jYWwgPSBbXTtcbiAgICAgIGNvbnN0IHVwZGF0ZUxvY2FsID0gW107XG4gICAgICByZW1vdGVNZXRhRGF0YS5pbmZvID0gcmVtb3RlRGF0YS5yZWR1Y2UoKGluZm8sIGl0ZW0pID0+IHtcbiAgICAgICAgcmVtb3RlSXRlbU1hcFtpdGVtLnVyaV0gPSBpdGVtO1xuICAgICAgICBsZXQgaXRlbUluZm8gPSByZW1vdGVNZXRhSW5mb1tpdGVtLnVyaV07XG4gICAgICAgIGlmICghaXRlbUluZm8pIHtcbiAgICAgICAgICBpdGVtSW5mbyA9IHt9O1xuICAgICAgICAgIHJlbW90ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm9baXRlbS51cmldID0gaXRlbUluZm87XG4gICAgICAgIGlmICghaXRlbUluZm8ubW9kaWZpZWQpIHtcbiAgICAgICAgICBpdGVtSW5mby5tb2RpZmllZCA9IG5vdztcbiAgICAgICAgICByZW1vdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgIH0sIHt9KTtcbiAgICAgIGxvY2FsRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcHJvcHM6IHsgdXJpLCBwb3NpdGlvbiwgbGFzdE1vZGlmaWVkIH0gfSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IHJlbW90ZUluZm8gPSByZW1vdGVNZXRhRGF0YS5pbmZvW3VyaV07XG4gICAgICAgIGNvbnN0IHJlbW90ZUl0ZW0gPSByZW1vdGVJdGVtTWFwW3VyaV07XG4gICAgICAgIGlmIChyZW1vdGVJbmZvICYmIHJlbW90ZUl0ZW0pIHtcbiAgICAgICAgICBpZiAoZmlyc3RTeW5jIHx8ICFsYXN0TW9kaWZpZWQgfHwgcmVtb3RlSW5mby5tb2RpZmllZCA+IGxhc3RNb2RpZmllZCkge1xuICAgICAgICAgICAgcHV0TG9jYWwucHVzaCh7IGxvY2FsOiBpdGVtLCByZW1vdGU6IHJlbW90ZUl0ZW0sIGluZm86IHJlbW90ZUluZm8gfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyZW1vdGVJbmZvLm1vZGlmaWVkIDwgbGFzdE1vZGlmaWVkKSB7XG4gICAgICAgICAgICAgIHB1dFJlbW90ZS5wdXNoKHsgbG9jYWw6IGl0ZW0sIHJlbW90ZTogcmVtb3RlSXRlbSB9KTtcbiAgICAgICAgICAgICAgcmVtb3RlSW5mby5tb2RpZmllZCA9IGxhc3RNb2RpZmllZDtcbiAgICAgICAgICAgICAgcmVtb3RlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVtb3RlSW5mby5wb3NpdGlvbiAhPT0gcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgaWYgKHJlbW90ZUluZm8ucG9zaXRpb24gJiYgZ2xvYmFsTGFzdE1vZGlmaWVkIDw9IHJlbW90ZVRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsLnB1c2goeyBsb2NhbDogaXRlbSwgcmVtb3RlOiByZW1vdGVJdGVtLCBpbmZvOiByZW1vdGVJbmZvIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW90ZUluZm8ucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICByZW1vdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGUgcmVtb3RlSXRlbU1hcFt1cmldO1xuICAgICAgICB9IGVsc2UgaWYgKGZpcnN0U3luYyB8fCAhb3V0ZGF0ZWQgfHwgbGFzdE1vZGlmaWVkID4gcmVtb3RlVGltZXN0YW1wKSB7XG4gICAgICAgICAgcHV0UmVtb3RlLnB1c2goeyBsb2NhbDogaXRlbSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxMb2NhbC5wdXNoKHsgbG9jYWw6IGl0ZW0gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVtb3RlSXRlbU1hcDo6Zm9yRWFjaEVudHJ5KChbdXJpLCBpdGVtXSkgPT4ge1xuICAgICAgICBjb25zdCBpbmZvID0gcmVtb3RlTWV0YURhdGEuaW5mb1t1cmldO1xuICAgICAgICBpZiAob3V0ZGF0ZWQpIHtcbiAgICAgICAgICBwdXRMb2NhbC5wdXNoKHsgcmVtb3RlOiBpdGVtLCBpbmZvIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbFJlbW90ZS5wdXNoKHsgcmVtb3RlOiBpdGVtIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHByb21pc2VRdWV1ZSA9IFtcbiAgICAgICAgLi4ucHV0TG9jYWwubWFwKCh7IHJlbW90ZSwgaW5mbyB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2coJ0Rvd25sb2FkIHNjcmlwdDonLCByZW1vdGUudXJpKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXQocmVtb3RlKVxuICAgICAgICAgIC50aGVuKChyYXcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBwYXJzZVNjcmlwdERhdGEocmF3KTtcbiAgICAgICAgICAgIC8vIEludmFsaWQgZGF0YVxuICAgICAgICAgICAgaWYgKCFkYXRhLmNvZGUpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChpbmZvLm1vZGlmaWVkKSBvYmplY3RTZXQoZGF0YSwgJ3Byb3BzLmxhc3RNb2RpZmllZCcsIGluZm8ubW9kaWZpZWQpO1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSAraW5mby5wb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbikgZGF0YS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKCFnZXRPcHRpb24oJ3N5bmNTY3JpcHRTdGF0dXMnKSAmJiBkYXRhLmNvbmZpZykge1xuICAgICAgICAgICAgICBkZWxldGUgZGF0YS5jb25maWcuZW5hYmxlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwbHVnaW5TY3JpcHQudXBkYXRlKGRhdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgLi4ucHV0UmVtb3RlLm1hcCgoeyBsb2NhbCwgcmVtb3RlIH0pID0+IHtcbiAgICAgICAgICB0aGlzLmxvZygnVXBsb2FkIHNjcmlwdDonLCBsb2NhbC5wcm9wcy51cmkpO1xuICAgICAgICAgIHJldHVybiBwbHVnaW5TY3JpcHQuZ2V0KGxvY2FsLnByb3BzLmlkKVxuICAgICAgICAgIC50aGVuKChjb2RlKSA9PiB7XG4gICAgICAgICAgICAvLyBYWFggdXNlIHZlcnNpb24gMSB0byBiZSBjb21wYXRpYmxlIHdpdGggVmlvbGVudG1vbmtleSBvbiBvdGhlciBwbGF0Zm9ybXNcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBnZXRTY3JpcHREYXRhKGxvY2FsLCAxLCB7IGNvZGUgfSk7XG4gICAgICAgICAgICByZW1vdGVNZXRhRGF0YS5pbmZvW2xvY2FsLnByb3BzLnVyaV0gPSB7XG4gICAgICAgICAgICAgIG1vZGlmaWVkOiBsb2NhbC5wcm9wcy5sYXN0TW9kaWZpZWQsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBsb2NhbC5wcm9wcy5wb3NpdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZW1vdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1dChcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcmVtb3RlLCB7XG4gICAgICAgICAgICAgICAgdXJpOiBsb2NhbC5wcm9wcy51cmksXG4gICAgICAgICAgICAgICAgbmFtZTogbnVsbCwgLy8gcHJlZmVyIHVzaW5nIHVyaSBvbiBQVVRcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIC4uLmRlbFJlbW90ZS5tYXAoKHsgcmVtb3RlIH0pID0+IHtcbiAgICAgICAgICB0aGlzLmxvZygnUmVtb3ZlIHJlbW90ZSBzY3JpcHQ6JywgcmVtb3RlLnVyaSk7XG4gICAgICAgICAgZGVsZXRlIHJlbW90ZU1ldGFEYXRhLmluZm9bcmVtb3RlLnVyaV07XG4gICAgICAgICAgcmVtb3RlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKHJlbW90ZSk7XG4gICAgICAgIH0pLFxuICAgICAgICAuLi5kZWxMb2NhbC5tYXAoKHsgbG9jYWwgfSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nKCdSZW1vdmUgbG9jYWwgc2NyaXB0OicsIGxvY2FsLnByb3BzLnVyaSk7XG4gICAgICAgICAgcmV0dXJuIHBsdWdpblNjcmlwdC5yZW1vdmUobG9jYWwucHJvcHMuaWQpO1xuICAgICAgICB9KSxcbiAgICAgICAgLi4udXBkYXRlTG9jYWwubWFwKCh7IGxvY2FsLCBpbmZvIH0pID0+IHtcbiAgICAgICAgICBjb25zdCB1cGRhdGVzID0ge307XG4gICAgICAgICAgaWYgKGluZm8ucG9zaXRpb24pIHtcbiAgICAgICAgICAgIHVwZGF0ZXMucHJvcHMgPSB7IHBvc2l0aW9uOiBpbmZvLnBvc2l0aW9uIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB1cGRhdGVTY3JpcHRJbmZvKGxvY2FsLnByb3BzLmlkLCB1cGRhdGVzKTtcbiAgICAgICAgfSksXG4gICAgICBdO1xuICAgICAgcHJvbWlzZVF1ZXVlLnB1c2goUHJvbWlzZS5hbGwocHJvbWlzZVF1ZXVlKS50aGVuKCgpID0+IHNvcnRTY3JpcHRzKCkpLnRoZW4oKGNoYW5nZWQpID0+IHtcbiAgICAgICAgaWYgKCFjaGFuZ2VkKSByZXR1cm47XG4gICAgICAgIHJlbW90ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gcGx1Z2luU2NyaXB0Lmxpc3QoKVxuICAgICAgICAudGhlbigoc2NyaXB0cykgPT4ge1xuICAgICAgICAgIHNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZW1vdGVJbmZvID0gcmVtb3RlTWV0YURhdGEuaW5mb1tzY3JpcHQucHJvcHMudXJpXTtcbiAgICAgICAgICAgIGlmIChyZW1vdGVJbmZvKSByZW1vdGVJbmZvLnBvc2l0aW9uID0gc2NyaXB0LnByb3BzLnBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pKTtcbiAgICAgIHByb21pc2VRdWV1ZS5wdXNoKFByb21pc2UuYWxsKHByb21pc2VRdWV1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGlmIChyZW1vdGVDaGFuZ2VkKSB7XG4gICAgICAgICAgcmVtb3RlTWV0YURhdGEudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMucHV0KHJlbW90ZU1ldGEsIEpTT04uc3RyaW5naWZ5KHJlbW90ZU1ldGFEYXRhKSkpO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsTWV0YS50aW1lc3RhbXAgPSByZW1vdGVNZXRhRGF0YS50aW1lc3RhbXA7XG4gICAgICAgIGxvY2FsTWV0YS5sYXN0U3luYyA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuY29uZmlnLnNldCgnbWV0YScsIGxvY2FsTWV0YSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICB9KSk7XG4gICAgICAvLyBpZ25vcmUgZXJyb3JzIHRvIGVuc3VyZSBhbGwgcHJvbWlzZXMgYXJlIGZ1bGZpbGxlZFxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VRdWV1ZS5tYXAocHJvbWlzZSA9PiBwcm9taXNlLnRoZW4obm9vcCwgZXJyID0+IGVyciB8fCB0cnVlKSkpXG4gICAgICAudGhlbihlcnJvcnMgPT4gZXJyb3JzLmZpbHRlcihCb29sZWFuKSlcbiAgICAgIC50aGVuKChlcnJvcnMpID0+IHsgaWYgKGVycm9ycy5sZW5ndGgpIHRocm93IGVycm9yczsgfSk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnN5bmNTdGF0ZS5zZXQoJ2lkbGUnKTtcbiAgICAgIHRoaXMubG9nKCdTeW5jIGZpbmlzaGVkOicsIHRoaXMuZGlzcGxheU5hbWUpO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIHRoaXMuc3luY1N0YXRlLnNldCgnZXJyb3InKTtcbiAgICAgIHRoaXMubG9nKCdGYWlsZWQgc3luY2luZzonLCB0aGlzLmRpc3BsYXlOYW1lKTtcbiAgICAgIHRoaXMubG9nKGVycik7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiBQcm9taXNlLnJlc29sdmUodGhpcy5yZWxlYXNlTG9jaygpKS5jYXRjaChub29wKSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKEZhY3RvcnkpIHtcbiAgc2VydmljZUNsYXNzZXMucHVzaChGYWN0b3J5KTtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnQoKSB7XG4gIHJldHVybiBzeW5jQ29uZmlnLmdldCgnY3VycmVudCcpO1xufVxuZnVuY3Rpb24gZ2V0U2VydmljZShuYW1lKSB7XG4gIHJldHVybiBzZXJ2aWNlc1tuYW1lIHx8IGdldEN1cnJlbnQoKV07XG59XG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgaWYgKCFzeW5jQ29uZmlnKSB7XG4gICAgc3luY0NvbmZpZyA9IGluaXRDb25maWcoKTtcbiAgICBzZXJ2aWNlQ2xhc3Nlcy5mb3JFYWNoKChGYWN0b3J5KSA9PiB7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gbmV3IEZhY3RvcnkoKTtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gc2VydmljZTtcbiAgICAgIHNlcnZpY2VOYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgc2VydmljZXNbbmFtZV0gPSBzZXJ2aWNlO1xuICAgIH0pO1xuICB9XG4gIHN5bmMoKTtcbn1cblxuZnVuY3Rpb24gc3luY09uZShzZXJ2aWNlKSB7XG4gIGlmIChzZXJ2aWNlLnN5bmNTdGF0ZS5pcyhbJ3JlYWR5JywgJ3N5bmNpbmcnXSkpIHJldHVybjtcbiAgaWYgKHNlcnZpY2UuYXV0aFN0YXRlLmlzKFsnaWRsZScsICdlcnJvciddKSkgcmV0dXJuIHNlcnZpY2UuY2hlY2tTeW5jKCk7XG4gIGlmIChzZXJ2aWNlLmF1dGhTdGF0ZS5pcygnYXV0aG9yaXplZCcpKSByZXR1cm4gc2VydmljZS5zdGFydFN5bmMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN5bmMoKSB7XG4gIGNvbnN0IHNlcnZpY2UgPSBnZXRTZXJ2aWNlKCk7XG4gIHJldHVybiBzZXJ2aWNlICYmIFByb21pc2UucmVzb2x2ZShzeW5jT25lKHNlcnZpY2UpKS50aGVuKGF1dG9TeW5jKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhvcml6ZSgpIHtcbiAgY29uc3Qgc2VydmljZSA9IGdldFNlcnZpY2UoKTtcbiAgaWYgKHNlcnZpY2UpIHNlcnZpY2UuYXV0aG9yaXplKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZva2UoKSB7XG4gIGNvbnN0IHNlcnZpY2UgPSBnZXRTZXJ2aWNlKCk7XG4gIGlmIChzZXJ2aWNlKSBzZXJ2aWNlLnJldm9rZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29uZmlnKGNvbmZpZykge1xuICBjb25zdCBzZXJ2aWNlID0gZ2V0U2VydmljZSgpO1xuICBpZiAoc2VydmljZSkge1xuICAgIHNlcnZpY2Uuc2V0VXNlckNvbmZpZyhjb25maWcpO1xuICAgIHJldHVybiBzZXJ2aWNlLmNoZWNrU3luYygpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvcGVuQXV0aFBhZ2UodXJsLCByZWRpcmVjdFVyaSkge1xuICB1bnJlZ2lzdGVyV2ViUmVxdWVzdCgpOyAvLyBvdGhlcndpc2Ugb3VyIG5ldyB0YWJJZCB3aWxsIGJlIGlnbm9yZWRcbiAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihvbkJlZm9yZVJlcXVlc3QsIHtcbiAgICB1cmxzOiBbYCR7cmVkaXJlY3RVcml9KmBdLFxuICAgIHR5cGVzOiBbJ21haW5fZnJhbWUnXSxcbiAgICB0YWJJZDogKGF3YWl0IGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmwgfSkpLmlkLFxuICB9LCBbJ2Jsb2NraW5nJ10pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Y2hyb21lLndlYlJlcXVlc3QuV2ViUmVzcG9uc2VEZXRhaWxzfSBpbmZvXG4gKiBAcmV0dXJucyB7Y2hyb21lLndlYlJlcXVlc3QuQmxvY2tpbmdSZXNwb25zZX1cbiAqL1xuZnVuY3Rpb24gb25CZWZvcmVSZXF1ZXN0KGluZm8pIHtcbiAgaWYgKGdldFNlcnZpY2UoKS5jaGVja0F1dGg/LihpbmZvLnVybCkpIHtcbiAgICBicm93c2VyLnRhYnMucmVtb3ZlKGluZm8udGFiSWQpO1xuICAgIC8vIElmIHdlIHVucmVnaXN0ZXIgd2l0aG91dCBzZXRUaW1lb3V0LCBBUEkgd2lsbCBpZ25vcmUgeyBjYW5jZWw6IHRydWUgfVxuICAgIHNldFRpbWVvdXQodW5yZWdpc3RlcldlYlJlcXVlc3QsIDApO1xuICAgIHJldHVybiB7IGNhbmNlbDogdHJ1ZSB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHVucmVnaXN0ZXJXZWJSZXF1ZXN0KCkge1xuICBicm93c2VyLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LnJlbW92ZUxpc3RlbmVyKG9uQmVmb3JlUmVxdWVzdCk7XG59XG5cbmhvb2tPcHRpb25zKChkYXRhKSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gZGF0YT8uWydzeW5jLmN1cnJlbnQnXTtcbiAgaWYgKHZhbHVlKSBpbml0aWFsaXplKCk7XG59KTtcbiIsImltcG9ydCB7IGxvYWRRdWVyeSwgZHVtcFF1ZXJ5IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgZ2V0VVJJLCBnZXRJdGVtRmlsZW5hbWUsIEJhc2VTZXJ2aWNlLCBpc1NjcmlwdEZpbGUsIHJlZ2lzdGVyLFxuICBvcGVuQXV0aFBhZ2UsXG59IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgY2xpZW50X2lkOiAnZjBxMTJ6dXAydXlzNXc4JyxcbiAgcmVkaXJlY3RfdXJpOiAnaHR0cHM6Ly92aW9sZW50bW9ua2V5LmdpdGh1Yi5pby9hdXRoX2Ryb3Bib3guaHRtbCcsXG59O1xuXG5jb25zdCBlc2NSRSA9IC9bXFx1MDA3Zi1cXHVmZmZmXS9nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbmNvbnN0IGVzY0Z1bmMgPSBtID0+IGBcXFxcdSR7KG0uY2hhckNvZGVBdCgwKSArIDB4MTAwMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKX1gO1xuXG5mdW5jdGlvbiBqc29uU3RyaW5naWZ5U2FmZShvYmopIHtcbiAgY29uc3Qgc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGVzY1JFLCBlc2NGdW5jKTtcbn1cblxuY29uc3QgRHJvcGJveCA9IEJhc2VTZXJ2aWNlLmV4dGVuZCh7XG4gIG5hbWU6ICdkcm9wYm94JyxcbiAgZGlzcGxheU5hbWU6ICdEcm9wYm94JyxcbiAgdXNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmRyb3Bib3hhcGkuY29tLzIvdXNlcnMvZ2V0X2N1cnJlbnRfYWNjb3VudCcsXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgIHR5cGU6ICd1bmF1dGhvcml6ZWQnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIGRhdGE6IGVycixcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBoYW5kbGVNZXRhRXJyb3IocmVzKSB7XG4gICAgaWYgKHJlcy5zdGF0dXMgIT09IDQwOSkgdGhyb3cgcmVzO1xuICB9LFxuICBsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZHJvcGJveGFwaS5jb20vMi9maWxlcy9saXN0X2ZvbGRlcicsXG4gICAgICBib2R5OiB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgfSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiAoXG4gICAgICBkYXRhLmVudHJpZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbVsnLnRhZyddID09PSAnZmlsZScgJiYgaXNTY3JpcHRGaWxlKGl0ZW0ubmFtZSkpLm1hcChub3JtYWxpemUpXG4gICAgKSk7XG4gIH0sXG4gIGdldChpdGVtKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vY29udGVudC5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL2Rvd25sb2FkJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0Ryb3Bib3gtQVBJLUFyZyc6IGpzb25TdHJpbmdpZnlTYWZlKHtcbiAgICAgICAgICBwYXRoOiBgLyR7bmFtZX1gLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIHB1dChpdGVtLCBkYXRhKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vY29udGVudC5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL3VwbG9hZCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdEcm9wYm94LUFQSS1BcmcnOiBqc29uU3RyaW5naWZ5U2FmZSh7XG4gICAgICAgICAgcGF0aDogYC8ke25hbWV9YCxcbiAgICAgICAgICBtb2RlOiAnb3ZlcndyaXRlJyxcbiAgICAgICAgfSksXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBkYXRhLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbihub3JtYWxpemUpO1xuICB9LFxuICByZW1vdmUoaXRlbSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICdodHRwczovL2FwaS5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL2RlbGV0ZScsXG4gICAgICBib2R5OiB7XG4gICAgICAgIHBhdGg6IGAvJHtuYW1lfWAsXG4gICAgICB9LFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbihub3JtYWxpemUpO1xuICB9LFxuICBhdXRob3JpemUoKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgcmVzcG9uc2VfdHlwZTogJ3Rva2VuJyxcbiAgICAgIGNsaWVudF9pZDogY29uZmlnLmNsaWVudF9pZCxcbiAgICAgIHJlZGlyZWN0X3VyaTogY29uZmlnLnJlZGlyZWN0X3VyaSxcbiAgICB9O1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5kcm9wYm94LmNvbS9vYXV0aDIvYXV0aG9yaXplPyR7ZHVtcFF1ZXJ5KHBhcmFtcyl9YDtcbiAgICBvcGVuQXV0aFBhZ2UodXJsLCBjb25maWcucmVkaXJlY3RfdXJpKTtcbiAgfSxcbiAgYXV0aG9yaXplZChyYXcpIHtcbiAgICBjb25zdCBkYXRhID0gbG9hZFF1ZXJ5KHJhdyk7XG4gICAgaWYgKGRhdGEuYWNjZXNzX3Rva2VuKSB7XG4gICAgICB0aGlzLmNvbmZpZy5zZXQoe1xuICAgICAgICB1aWQ6IGRhdGEudWlkLFxuICAgICAgICB0b2tlbjogZGF0YS5hY2Nlc3NfdG9rZW4sXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGNoZWNrQXV0aCh1cmwpIHtcbiAgICBjb25zdCByZWRpcmVjdFVyaSA9IGAke2NvbmZpZy5yZWRpcmVjdF91cml9I2A7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKHJlZGlyZWN0VXJpKSkge1xuICAgICAgdGhpcy5hdXRob3JpemVkKHVybC5zbGljZShyZWRpcmVjdFVyaS5sZW5ndGgpKTtcbiAgICAgIHRoaXMuY2hlY2tTeW5jKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHJldm9rZSgpIHtcbiAgICB0aGlzLmNvbmZpZy5zZXQoe1xuICAgICAgdWlkOiBudWxsLFxuICAgICAgdG9rZW46IG51bGwsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZSgpO1xuICB9LFxufSk7XG5yZWdpc3RlcihEcm9wYm94KTtcblxuZnVuY3Rpb24gbm9ybWFsaXplKGl0ZW0pIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgc2l6ZTogaXRlbS5zaXplLFxuICAgIHVyaTogZ2V0VVJJKGl0ZW0ubmFtZSksXG4gICAgLy8gbW9kaWZpZWQ6IG5ldyBEYXRlKGl0ZW0uc2VydmVyX21vZGlmaWVkKS5nZXRUaW1lKCksXG4gICAgLy8gaXNEZWxldGVkOiBpdGVtLmlzX2RlbGV0ZWQsXG4gIH07XG59XG4iLCIvLyBSZWZlcmVuY2U6XG4vLyAtIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2RyaXZlL3YzL3JlZmVyZW5jZS9maWxlc1xuLy8gLSBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2dvb2dsZS1hcGktbm9kZWpzLWNsaWVudFxuaW1wb3J0IHsgZ2V0VW5pcUlkLCBub29wIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgb2JqZWN0R2V0IH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCB7IGR1bXBRdWVyeSwgbm90aWZ5IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgZ2V0VVJJLCBnZXRJdGVtRmlsZW5hbWUsIEJhc2VTZXJ2aWNlLCByZWdpc3RlciwgaXNTY3JpcHRGaWxlLFxuICBvcGVuQXV0aFBhZ2UsXG59IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5TWU5DX0dPT0dMRV9DTElFTlRfSUQsXG4gIGNsaWVudF9zZWNyZXQ6IHByb2Nlc3MuZW52LlNZTkNfR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gIHJlZGlyZWN0X3VyaTogJ2h0dHBzOi8vdmlvbGVudG1vbmtleS5naXRodWIuaW8vYXV0aF9nb29nbGVkcml2ZS5odG1sJyxcbiAgc2NvcGU6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlLmFwcGRhdGEnLFxufTtcbmNvbnN0IFVOQVVUSE9SSVpFRCA9IHsgc3RhdHVzOiAnVU5BVVRIT1JJWkVEJyB9O1xuXG5jb25zdCBHb29nbGVEcml2ZSA9IEJhc2VTZXJ2aWNlLmV4dGVuZCh7XG4gIG5hbWU6ICdnb29nbGVkcml2ZScsXG4gIGRpc3BsYXlOYW1lOiAnR29vZ2xlIERyaXZlJyxcbiAgdXJsUHJlZml4OiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZHJpdmUvdjMnLFxuICByZWZyZXNoVG9rZW4oKSB7XG4gICAgY29uc3QgcmVmcmVzaFRva2VuID0gdGhpcy5jb25maWcuZ2V0KCdyZWZyZXNoX3Rva2VuJyk7XG4gICAgaWYgKCFyZWZyZXNoVG9rZW4pIHJldHVybiBQcm9taXNlLnJlamVjdCh7IHR5cGU6ICd1bmF1dGhvcml6ZWQnIH0pO1xuICAgIHJldHVybiB0aGlzLmF1dGhvcml6ZWQoe1xuICAgICAgcmVmcmVzaF90b2tlbjogcmVmcmVzaFRva2VuLFxuICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5wcmVwYXJlKCkpO1xuICB9LFxuICB1c2VyKCkge1xuICAgIGNvbnN0IHJlcXVlc3RVc2VyID0gKCkgPT4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjMvdG9rZW5pbmZvPyR7ZHVtcFF1ZXJ5KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuOiB0aGlzLmNvbmZpZy5nZXQoJ3Rva2VuJyksXG4gICAgICB9KX1gLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcXVlc3RVc2VyKClcbiAgICAudGhlbigoaW5mbykgPT4ge1xuICAgICAgLy8gSWYgYWNjZXNzIHdhcyBncmFudGVkIHdpdGggYWNjZXNzX3R5cGU9b25saW5lLCByZXZva2UgaXQuXG4gICAgICBpZiAoaW5mby5hY2Nlc3NfdHlwZSA9PT0gJ29ubGluZScpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIHVybDogYGh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9yZXZva2U/dG9rZW49JHt0aGlzLmNvbmZpZy5nZXQoJ3Rva2VuJyl9YCxcbiAgICAgICAgICBwcmVmaXg6ICcnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgbm90aWZ5KHtcbiAgICAgICAgICAgIHRpdGxlOiAnU3luYyBVcGdyYWRlZCcsXG4gICAgICAgICAgICBib2R5OiAnUGxlYXNlIHJlYXV0aG9yaXplIGFjY2VzcyB0byB5b3VyIEdvb2dsZSBEcml2ZSB0byBjb21wbGV0ZSB0aGUgdXBncmFkYXRpb24uJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ09ubGluZSBhY2Nlc3MgcmV2b2tlZC4nKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5mby5zY29wZSAhPT0gY29uZmlnLnNjb3BlKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoVU5BVVRIT1JJWkVEKTtcbiAgICB9KVxuICAgIC5jYXRjaCgocmVzKSA9PiB7XG4gICAgICBpZiAocmVzID09PSBVTkFVVEhPUklaRUQgfHwgcmVzLnN0YXR1cyA9PT0gNDAwICYmIG9iamVjdEdldChyZXMsICdkYXRhLmVycm9yX2Rlc2NyaXB0aW9uJykgPT09ICdJbnZhbGlkIFZhbHVlJykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZyZXNoVG9rZW4oKS50aGVuKHJlcXVlc3RVc2VyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIGRhdGE6IHJlcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXRTeW5jRGF0YSgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBzcGFjZXM6ICdhcHBEYXRhRm9sZGVyJyxcbiAgICAgIGZpZWxkczogJ2ZpbGVzKGlkLG5hbWUsc2l6ZSknLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsOiBgL2ZpbGVzPyR7ZHVtcFF1ZXJ5KHBhcmFtcyl9YCxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4oKHsgZmlsZXMgfSkgPT4ge1xuICAgICAgbGV0IG1ldGFGaWxlO1xuICAgICAgY29uc3QgcmVtb3RlRGF0YSA9IGZpbGVzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXNTY3JpcHRGaWxlKGl0ZW0ubmFtZSkpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoIW1ldGFGaWxlICYmIGl0ZW0ubmFtZSA9PT0gdGhpcy5tZXRhRmlsZSkge1xuICAgICAgICAgIG1ldGFGaWxlID0gaXRlbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLm1hcChub3JtYWxpemUpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGlmICghaXRlbS5zaXplKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUoaXRlbSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBtZXRhSXRlbSA9IG1ldGFGaWxlID8gbm9ybWFsaXplKG1ldGFGaWxlKSA6IHt9O1xuICAgICAgY29uc3QgZ290TWV0YSA9IHRoaXMuZ2V0KG1ldGFJdGVtKVxuICAgICAgLnRoZW4oZGF0YSA9PiBKU09OLnBhcnNlKGRhdGEpKVxuICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLmhhbmRsZU1ldGFFcnJvcihlcnIpKVxuICAgICAgLnRoZW4oZGF0YSA9PiBPYmplY3QuYXNzaWduKHt9LCBtZXRhSXRlbSwge1xuICAgICAgICBuYW1lOiB0aGlzLm1ldGFGaWxlLFxuICAgICAgICB1cmk6IG51bGwsXG4gICAgICAgIGRhdGEsXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2dvdE1ldGEsIHJlbW90ZURhdGEsIHRoaXMuZ2V0TG9jYWxEYXRhKCldKTtcbiAgICB9KTtcbiAgfSxcbiAgYXV0aG9yaXplKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIHJlc3BvbnNlX3R5cGU6ICdjb2RlJyxcbiAgICAgIGFjY2Vzc190eXBlOiAnb2ZmbGluZScsXG4gICAgICBjbGllbnRfaWQ6IGNvbmZpZy5jbGllbnRfaWQsXG4gICAgICByZWRpcmVjdF91cmk6IGNvbmZpZy5yZWRpcmVjdF91cmksXG4gICAgICBzY29wZTogY29uZmlnLnNjb3BlLFxuICAgIH07XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5nZXQoJ3JlZnJlc2hfdG9rZW4nKSkgcGFyYW1zLnByb21wdCA9ICdjb25zZW50JztcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGg/JHtkdW1wUXVlcnkocGFyYW1zKX1gO1xuICAgIG9wZW5BdXRoUGFnZSh1cmwsIGNvbmZpZy5yZWRpcmVjdF91cmkpO1xuICB9LFxuICBjaGVja0F1dGgodXJsKSB7XG4gICAgY29uc3QgcmVkaXJlY3RVcmkgPSBgJHtjb25maWcucmVkaXJlY3RfdXJpfT9jb2RlPWA7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKHJlZGlyZWN0VXJpKSkge1xuICAgICAgdGhpcy5hdXRoU3RhdGUuc2V0KCdhdXRob3JpemluZycpO1xuICAgICAgdGhpcy5hdXRob3JpemVkKHtcbiAgICAgICAgY29kZTogZGVjb2RlVVJJQ29tcG9uZW50KHVybC5zcGxpdCgnIycpWzBdLnNsaWNlKHJlZGlyZWN0VXJpLmxlbmd0aCkpLFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuY2hlY2tTeW5jKCkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuICByZXZva2UoKSB7XG4gICAgdGhpcy5jb25maWcuc2V0KHtcbiAgICAgIHRva2VuOiBudWxsLFxuICAgICAgcmVmcmVzaF90b2tlbjogbnVsbCxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlKCk7XG4gIH0sXG4gIGF1dGhvcml6ZWQocGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4nLFxuICAgICAgcHJlZml4OiAnJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGR1bXBRdWVyeShPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIGNsaWVudF9pZDogY29uZmlnLmNsaWVudF9pZCxcbiAgICAgICAgY2xpZW50X3NlY3JldDogY29uZmlnLmNsaWVudF9zZWNyZXQsXG4gICAgICAgIHJlZGlyZWN0X3VyaTogY29uZmlnLnJlZGlyZWN0X3VyaSxcbiAgICAgICAgZ3JhbnRfdHlwZTogJ2F1dGhvcml6YXRpb25fY29kZScsXG4gICAgICB9LCBwYXJhbXMpKSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgICAgdG9rZW46IGRhdGEuYWNjZXNzX3Rva2VuLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoZGF0YS5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICAgICAgdXBkYXRlLnJlZnJlc2hfdG9rZW4gPSBkYXRhLnJlZnJlc2hfdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25maWcuc2V0KHVwZGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBkYXRhO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBoYW5kbGVNZXRhRXJyb3I6IG5vb3AsXG4gIGxpc3QoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3Qgc3VwcG9ydGVkJyk7XG4gIH0sXG4gIGdldCh7IGlkIH0pIHtcbiAgICBpZiAoIWlkKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6IGAvZmlsZXMvJHtpZH0/YWx0PW1lZGlhYCxcbiAgICB9KTtcbiAgfSxcbiAgcHV0KGl0ZW0sIGRhdGEpIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIGNvbnN0IHsgaWQgfSA9IGl0ZW07XG4gICAgY29uc3QgYm91bmRhcnkgPSBnZXRVbmlxSWQoJ3Zpb2xlbnRtb25rZXktaXMtZ3JlYXQtJyk7XG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiBgbXVsdGlwYXJ0L3JlbGF0ZWQ7IGJvdW5kYXJ5PSR7Ym91bmRhcnl9YCxcbiAgICB9O1xuICAgIGNvbnN0IG1ldGFkYXRhID0gaWQgPyB7XG4gICAgICBuYW1lLFxuICAgIH0gOiB7XG4gICAgICBuYW1lLFxuICAgICAgcGFyZW50czogWydhcHBEYXRhRm9sZGVyJ10sXG4gICAgfTtcbiAgICBjb25zdCBib2R5ID0gW1xuICAgICAgYC0tJHtib3VuZGFyeX1gLFxuICAgICAgJ0NvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAnJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KG1ldGFkYXRhKSxcbiAgICAgIGAtLSR7Ym91bmRhcnl9YCxcbiAgICAgICdDb250ZW50LVR5cGU6IHRleHQvcGxhaW4nLFxuICAgICAgJycsXG4gICAgICBkYXRhLFxuICAgICAgYC0tJHtib3VuZGFyeX0tLWAsXG4gICAgICAnJyxcbiAgICBdLmpvaW4oJ1xcclxcbicpO1xuICAgIGNvbnN0IHVybCA9IGlkXG4gICAgICA/IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS91cGxvYWQvZHJpdmUvdjMvZmlsZXMvJHtpZH0/dXBsb2FkVHlwZT1tdWx0aXBhcnRgXG4gICAgICA6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS91cGxvYWQvZHJpdmUvdjMvZmlsZXM/dXBsb2FkVHlwZT1tdWx0aXBhcnQnO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybCxcbiAgICAgIGJvZHksXG4gICAgICBoZWFkZXJzLFxuICAgICAgbWV0aG9kOiBpZCA/ICdQQVRDSCcgOiAnUE9TVCcsXG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZSh7IGlkIH0pIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgdXJsOiBgL2ZpbGVzLyR7aWR9YCxcbiAgICB9KTtcbiAgfSxcbn0pO1xucmVnaXN0ZXIoR29vZ2xlRHJpdmUpO1xuXG5mdW5jdGlvbiBub3JtYWxpemUoaXRlbSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBpdGVtLmlkLFxuICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICBzaXplOiAraXRlbS5zaXplLFxuICAgIHVyaTogZ2V0VVJJKGl0ZW0ubmFtZSksXG4gIH07XG59XG4iLCJpbXBvcnQge1xuICBpbml0aWFsaXplLFxuICBzeW5jLFxuICBnZXRTdGF0ZXMsXG4gIGF1dGhvcml6ZSxcbiAgcmV2b2tlLFxuICBzZXRDb25maWcsXG59IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgJy4vZHJvcGJveCc7XG5pbXBvcnQgJy4vb25lZHJpdmUnO1xuaW1wb3J0ICcuL2dvb2dsZWRyaXZlJztcbmltcG9ydCAnLi93ZWJkYXYnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuLi91dGlscy9tZXNzYWdlJztcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICBTeW5jQXV0aG9yaXplOiBhdXRob3JpemUsXG4gIFN5bmNSZXZva2U6IHJldm9rZSxcbiAgU3luY1N0YXJ0OiBzeW5jLFxuICBTeW5jU2V0Q29uZmlnOiBzZXRDb25maWcsXG59KTtcblxuZXhwb3J0IHtcbiAgaW5pdGlhbGl6ZSxcbiAgc3luYyxcbiAgZ2V0U3RhdGVzLFxuICBhdXRob3JpemUsXG4gIHJldm9rZSxcbn07XG4iLCIvLyBSZWZlcmVuY2U6IGh0dHBzOi8vZGV2Lm9uZWRyaXZlLmNvbS9SRUFETUUuaHRtXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgb2JqZWN0R2V0IH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCB7IGR1bXBRdWVyeSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7XG4gIGdldFVSSSwgZ2V0SXRlbUZpbGVuYW1lLCBCYXNlU2VydmljZSwgaXNTY3JpcHRGaWxlLCByZWdpc3RlcixcbiAgb3BlbkF1dGhQYWdlLFxufSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuU1lOQ19PTkVEUklWRV9DTElFTlRfSUQsXG4gIGNsaWVudF9zZWNyZXQ6IHByb2Nlc3MuZW52LlNZTkNfT05FRFJJVkVfQ0xJRU5UX1NFQ1JFVCxcbiAgcmVkaXJlY3RfdXJpOiAnaHR0cHM6Ly92aW9sZW50bW9ua2V5LmdpdGh1Yi5pby9hdXRoX29uZWRyaXZlLmh0bWwnLFxufTtcblxuY29uc3QgT25lRHJpdmUgPSBCYXNlU2VydmljZS5leHRlbmQoe1xuICBuYW1lOiAnb25lZHJpdmUnLFxuICBkaXNwbGF5TmFtZTogJ09uZURyaXZlJyxcbiAgdXJsUHJlZml4OiAnaHR0cHM6Ly9hcGkub25lZHJpdmUuY29tL3YxLjAnLFxuICByZWZyZXNoVG9rZW4oKSB7XG4gICAgY29uc3QgcmVmcmVzaFRva2VuID0gdGhpcy5jb25maWcuZ2V0KCdyZWZyZXNoX3Rva2VuJyk7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXplZCh7XG4gICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4sXG4gICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB0aGlzLnByZXBhcmUoKSk7XG4gIH0sXG4gIHVzZXIoKSB7XG4gICAgY29uc3QgcmVxdWVzdFVzZXIgPSAoKSA9PiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybDogJy9kcml2ZScsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVxdWVzdFVzZXIoKVxuICAgIC5jYXRjaCgocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hUb2tlbigpLnRoZW4ocmVxdWVzdFVzZXIpO1xuICAgICAgfVxuICAgICAgdGhyb3cgcmVzO1xuICAgIH0pXG4gICAgLmNhdGNoKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDAgJiYgb2JqZWN0R2V0KHJlcywgJ2RhdGEuZXJyb3InKSA9PT0gJ2ludmFsaWRfZ3JhbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgdHlwZTogJ3VuYXV0aG9yaXplZCcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgZGF0YTogcmVzLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGhhbmRsZU1ldGFFcnJvcihyZXMpIHtcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICBjb25zdCBoZWFkZXIgPSByZXMuaGVhZGVycy5nZXQoJ1dXVy1BdXRoZW50aWNhdGUnKT8uWzBdIHx8ICcnO1xuICAgICAgaWYgKC9eQmVhcmVyIHJlYWxtPVwiT25lRHJpdmVBUElcIi8udGVzdChoZWFkZXIpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hUb2tlbigpLnRoZW4oKCkgPT4gdGhpcy5nZXRNZXRhKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aHJvdyByZXM7XG4gIH0sXG4gIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsOiAnL2RyaXZlL3NwZWNpYWwvYXBwcm9vdC9jaGlsZHJlbicsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKGRhdGEgPT4gZGF0YS52YWx1ZS5maWx0ZXIoaXRlbSA9PiBpdGVtLmZpbGUgJiYgaXNTY3JpcHRGaWxlKGl0ZW0ubmFtZSkpLm1hcChub3JtYWxpemUpKTtcbiAgfSxcbiAgZ2V0KGl0ZW0pIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybDogYC9kcml2ZS9zcGVjaWFsL2FwcHJvb3Q6LyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWAsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKGRhdGEgPT4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6IGRhdGFbJ0Bjb250ZW50LmRvd25sb2FkVXJsJ10sXG4gICAgICBkZWxheTogZmFsc2UsXG4gICAgfSkpO1xuICB9LFxuICBwdXQoaXRlbSwgZGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIHVybDogYC9kcml2ZS9zcGVjaWFsL2FwcHJvb3Q6LyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfTovY29udGVudGAsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBkYXRhLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbihub3JtYWxpemUpO1xuICB9LFxuICByZW1vdmUoaXRlbSkge1xuICAgIC8vIHJldHVybiAyMDRcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICB1cmw6IGAvZHJpdmUvc3BlY2lhbC9hcHByb290Oi8ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gLFxuICAgIH0pXG4gICAgLmNhdGNoKG5vb3ApO1xuICB9LFxuICBhdXRob3JpemUoKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50X2lkLFxuICAgICAgc2NvcGU6ICdvbmVkcml2ZS5hcHBmb2xkZXIgd2wub2ZmbGluZV9hY2Nlc3MnLFxuICAgICAgcmVzcG9uc2VfdHlwZTogJ2NvZGUnLFxuICAgICAgcmVkaXJlY3RfdXJpOiBjb25maWcucmVkaXJlY3RfdXJpLFxuICAgIH07XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vbG9naW4ubGl2ZS5jb20vb2F1dGgyMF9hdXRob3JpemUuc3JmPyR7ZHVtcFF1ZXJ5KHBhcmFtcyl9YDtcbiAgICBvcGVuQXV0aFBhZ2UodXJsLCBjb25maWcucmVkaXJlY3RfdXJpKTtcbiAgfSxcbiAgY2hlY2tBdXRoKHVybCkge1xuICAgIGNvbnN0IHJlZGlyZWN0VXJpID0gYCR7Y29uZmlnLnJlZGlyZWN0X3VyaX0/Y29kZT1gO1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aChyZWRpcmVjdFVyaSkpIHtcbiAgICAgIHRoaXMuYXV0aFN0YXRlLnNldCgnYXV0aG9yaXppbmcnKTtcbiAgICAgIHRoaXMuYXV0aG9yaXplZCh7XG4gICAgICAgIGNvZGU6IHVybC5zbGljZShyZWRpcmVjdFVyaS5sZW5ndGgpLFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuY2hlY2tTeW5jKCkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuICByZXZva2UoKSB7XG4gICAgdGhpcy5jb25maWcuc2V0KHtcbiAgICAgIHVpZDogbnVsbCxcbiAgICAgIHRva2VuOiBudWxsLFxuICAgICAgcmVmcmVzaF90b2tlbjogbnVsbCxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlKCk7XG4gIH0sXG4gIGF1dGhvcml6ZWQocGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICdodHRwczovL2xvZ2luLmxpdmUuY29tL29hdXRoMjBfdG9rZW4uc3JmJyxcbiAgICAgIHByZWZpeDogJycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBkdW1wUXVlcnkoT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICBjbGllbnRfaWQ6IGNvbmZpZy5jbGllbnRfaWQsXG4gICAgICAgIGNsaWVudF9zZWNyZXQ6IGNvbmZpZy5jbGllbnRfc2VjcmV0LFxuICAgICAgICByZWRpcmVjdF91cmk6IGNvbmZpZy5yZWRpcmVjdF91cmksXG4gICAgICAgIGdyYW50X3R5cGU6ICdhdXRob3JpemF0aW9uX2NvZGUnLFxuICAgICAgfSwgcGFyYW1zKSksXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgdGhpcy5jb25maWcuc2V0KHtcbiAgICAgICAgICB1aWQ6IGRhdGEudXNlcl9pZCxcbiAgICAgICAgICB0b2tlbjogZGF0YS5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgcmVmcmVzaF90b2tlbjogZGF0YS5yZWZyZXNoX3Rva2VuLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGRhdGE7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59KTtcbnJlZ2lzdGVyKE9uZURyaXZlKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplKGl0ZW0pIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgc2l6ZTogaXRlbS5zaXplLFxuICAgIHVyaTogZ2V0VVJJKGl0ZW0ubmFtZSksXG4gICAgLy8gbW9kaWZpZWQ6IG5ldyBEYXRlKGl0ZW0ubGFzdE1vZGlmaWVkRGF0ZVRpbWUpLmdldFRpbWUoKSxcbiAgfTtcbn1cbiIsImltcG9ydCB7XG4gIGdldFVSSSwgZ2V0SXRlbUZpbGVuYW1lLCBCYXNlU2VydmljZSwgaXNTY3JpcHRGaWxlLCByZWdpc3Rlcixcbn0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgS0VZX0NISUxEUkVOID0gU3ltYm9sKCdjaGlsZHJlbicpO1xuXG5jbGFzcyBYTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIG5zTWFwKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5zTWFwID0geyAuLi5uc01hcCB9O1xuICAgIHRoaXMucGFyc2VBdHRycygpO1xuICAgIHRoaXMucGFyc2VOYW1lKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVhNTCh4bWwpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWwsICdhcHBsaWNhdGlvbi94bWwnKTtcbiAgICByZXR1cm4gbmV3IFhOb2RlKGRvYyk7XG4gIH1cblxuICBwYXJzZUF0dHJzKCkge1xuICAgIGNvbnN0IHsgbm9kZSwgbnNNYXAgfSA9IHRoaXM7XG4gICAgY29uc3QgYXR0cnMgPSB7fTtcbiAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IG5vZGU7XG4gICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gYXR0cjtcbiAgICAgICAgaWYgKG5hbWUgPT09ICd4bWxucycpIG5zTWFwLiQgPSB2YWx1ZTtcbiAgICAgICAgZWxzZSBpZiAobmFtZS5zdGFydHNXaXRoKCd4bWxuczonKSkgbnNNYXBbbmFtZS5zbGljZSg2KV0gPSB2YWx1ZTtcbiAgICAgICAgYXR0cnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hdHRycyA9IGF0dHJzO1xuICB9XG5cbiAgcGFyc2VOYW1lKCkge1xuICAgIGNvbnN0IHsgbm9kZSwgbnNNYXAgfSA9IHRoaXM7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGxldCBuYW1lID0gbm9kZS50YWdOYW1lO1xuICAgICAgbGV0IG5zID0gbnNNYXAuJDtcbiAgICAgIGlmIChuYW1lLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgbGV0IHByZWZpeDtcbiAgICAgICAgW3ByZWZpeCwgbmFtZV0gPSBuYW1lLnNwbGl0KCc6Jyk7XG4gICAgICAgIG5zID0gbnNNYXBbcHJlZml4XTtcbiAgICAgICAgaWYgKCFucykgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG5hbWVzcGFjZTogJHtwcmVmaXh9YCk7XG4gICAgICB9XG4gICAgICB0aGlzLm5hbWUgPSBucyArIG5hbWU7XG4gICAgfVxuICB9XG5cbiAgdGV4dCgpIHtcbiAgICBjb25zdCB7IG5vZGUgfSA9IHRoaXM7XG4gICAgaWYgKG5vZGUpIHJldHVybiAobm9kZS50ZXh0Q29udGVudCB8fCAnJykudHJpbSgpO1xuICB9XG5cbiAgY2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzW0tFWV9DSElMRFJFTl0pIHtcbiAgICAgIGNvbnN0IHsgbm9kZSwgbnNNYXAgfSA9IHRoaXM7XG4gICAgICB0aGlzW0tFWV9DSElMRFJFTl0gPSBbLi4ubm9kZS5jaGlsZHJlbl1cbiAgICAgIC5tYXAoY2hpbGQgPT4gbmV3IFhOb2RlKGNoaWxkLCBuc01hcCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpc1tLRVlfQ0hJTERSRU5dO1xuICB9XG5cbiAgbWFwKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4oKS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgZ2V0Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICh0YWdOYW1lID0+IG5vZGUgPT4gbm9kZS5uYW1lID09PSB0YWdOYW1lKShjYWxsYmFjayk7XG4gICAgfVxuICAgIHJldHVybiBjYWxsYmFjaztcbiAgfVxuXG4gIGZpbHRlcihjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuKCkuZmlsdGVyKHRoaXMuZ2V0Q2FsbGJhY2soY2FsbGJhY2spKTtcbiAgfVxuXG4gIGZpbmQoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbigpLmZpbmQodGhpcy5nZXRDYWxsYmFjayhjYWxsYmFjaykpO1xuICB9XG5cbiAgYXR0cihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyc1trZXldO1xuICB9XG59XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICBzZXJ2ZXJVcmw6ICcnLFxuICBhbm9ueW1vdXM6IGZhbHNlLFxuICB1c2VybmFtZTogJycsXG4gIHBhc3N3b3JkOiAnJyxcbn07XG5cbmNvbnN0IFdlYkRBViA9IEJhc2VTZXJ2aWNlLmV4dGVuZCh7XG4gIG5hbWU6ICd3ZWJkYXYnLFxuICBkaXNwbGF5TmFtZTogJ1dlYkRBVicsXG4gIHByb3BlcnRpZXM6IHtcbiAgICBhdXRoVHlwZTogJ3Bhc3N3b3JkJyxcbiAgICBzZXJ2ZXJVcmw6IG51bGwsXG4gIH0sXG4gIGdldFVzZXJDb25maWcoKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJDb25maWcpIHtcbiAgICAgIHRoaXMudXNlckNvbmZpZyA9IHtcbiAgICAgICAgLi4uREVGQVVMVF9DT05GSUcsXG4gICAgICAgIC4uLnRoaXMuY29uZmlnLmdldCgndXNlckNvbmZpZycpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXNlckNvbmZpZztcbiAgfSxcbiAgc2V0VXNlckNvbmZpZyhjb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMudXNlckNvbmZpZywgY29uZmlnKTtcbiAgICB0aGlzLmNvbmZpZy5zZXQoJ3VzZXJDb25maWcnLCB0aGlzLnVzZXJDb25maWcpO1xuICB9LFxuICBpbml0VG9rZW4oKSB7XG4gICAgdGhpcy5wcmVwYXJlSGVhZGVycygpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0VXNlckNvbmZpZygpO1xuICAgIGxldCB1cmwgPSBjb25maWcuc2VydmVyVXJsPy50cmltKCkgfHwgJyc7XG4gICAgaWYgKCF1cmwuaW5jbHVkZXMoJzovLycpKSB1cmwgPSBgaHR0cDovLyR7dXJsfWA7XG4gICAgaWYgKCF1cmwuZW5kc1dpdGgoJy8nKSkgdXJsICs9ICcvJztcbiAgICB0cnkge1xuICAgICAgbmV3IFVSTCh1cmwpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMucHJvcGVydGllcy5zZXJ2ZXJVcmwgPSBudWxsO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnByb3BlcnRpZXMuc2VydmVyVXJsID0gYCR7dXJsfVZpb2xlbnRtb25rZXkvYDtcbiAgICBjb25zdCB7IGFub255bW91cywgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBjb25maWc7XG4gICAgaWYgKGFub255bW91cykgcmV0dXJuIHRydWU7XG4gICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBhdXRoID0gd2luZG93LmJ0b2EoYCR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9YCk7XG4gICAgdGhpcy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmFzaWMgJHthdXRofWA7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGxvYWREYXRhKG9wdGlvbnMpIHtcbiAgICAvLyBCeXBhc3NpbmcgbG9naW4gQ1NSRiBwcm90ZWN0aW9uIGluIE5leHRjbG91ZCAvIE93bmNsb3VkIGJ5IG5vdCBzZW5kaW5nIGNvb2tpZXMuXG4gICAgLy8gV2UgYXJlIG5vdCB1c2luZyB3ZWIgVUkgYW5kIGNvb2tpZSBhdXRoZW50aWNhdGlvbiwgc28gd2UgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCB0aGF0LlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdmlvbGVudG1vbmtleS92aW9sZW50bW9ua2V5L2lzc3Vlcy85NzZcbiAgICByZXR1cm4gQmFzZVNlcnZpY2UucHJvdG90eXBlLmxvYWREYXRhLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjcmVkZW50aWFsczogJ29taXQnLFxuICAgIH0sIG9wdGlvbnMpKTtcbiAgfSxcbiAgaGFuZGxlTWV0YUVycm9yKHJlcykge1xuICAgIGlmICghW1xuICAgICAgNDA0LCAvLyBGaWxlIG5vdCBleGlzdHNcbiAgICAgIDQwOSwgLy8gRGlyZWN0b3J5IG5vdCBleGlzdHNcbiAgICBdLmluY2x1ZGVzKHJlcy5zdGF0dXMpKSB0aHJvdyByZXM7XG4gIH0sXG4gIC8vIFNvbWUgV2ViREFWIHNlcnZlcnMgZG8gbm90IGFsbG93IExPQ0sgLyBVTkxPQ0tcbiAgLypcbiAgYWNxdWlyZUxvY2soKSB7XG4gICAgY29uc3QgeyBzZXJ2ZXJVcmwgfSA9IHRoaXMucHJvcGVydGllcztcbiAgICBjb25zdCBjcmVhdGVMb2NrID0gKCkgPT4ge1xuICAgICAgdGhpcy5sb2coJ0FjcXVpcmUgbG9jay4uLicpO1xuICAgICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgICBtZXRob2Q6ICdMT0NLJyxcbiAgICAgICAgdXJsOiBzZXJ2ZXJVcmwsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBUaW1lb3V0OiBgU2Vjb25kLSR7MzAgKiA2MH1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBgXFxcbjw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCIgPz5cbjxEOmxvY2tpbmZvIHhtbG5zOkQ9J0RBVjonPlxuICA8RDpsb2Nrc2NvcGU+PEQ6ZXhjbHVzaXZlLz48L0Q6bG9ja3Njb3BlPlxuICA8RDpsb2NrdHlwZT48RDp3cml0ZS8+PC9EOmxvY2t0eXBlPlxuPC9EOmxvY2tpbmZvPmAsXG4gICAgICB9KVxuICAgICAgLnRoZW4oeG1sID0+IHtcbiAgICAgICAgY29uc3QgZG9jID0gWE5vZGUuZnJvbVhNTCh4bWwpO1xuICAgICAgICBjb25zdCBsb2NrID0gZG9jLmZpbmQoJ0RBVjpwcm9wJylcbiAgICAgICAgLmZpbmQoJ0RBVjpsb2NrZGlzY292ZXJ5JylcbiAgICAgICAgLmZpbmQoJ0RBVjphY3RpdmVsb2NrJylcbiAgICAgICAgLmZpbmQoJ0RBVjpsb2NrdG9rZW4nKVxuICAgICAgICAuZmluZCgnREFWOmhyZWYnKVxuICAgICAgICAudGV4dCgpO1xuICAgICAgICB0aGlzLmxvZygnQWNxdWlyZWQgbG9jazonLCBsb2NrKTtcbiAgICAgICAgdGhpcy5jb25maWcuc2V0KHtcbiAgICAgICAgICBsb2NrLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgbG9jayA9IHRoaXMuY29uZmlnLmdldCgnbG9jaycpO1xuICAgIGlmIChsb2NrKSB7XG4gICAgICB0aGlzLmxvZygnUmVmcmVzaCBsb2NrOicsIGxvY2spO1xuICAgICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgICBtZXRob2Q6ICdMT0NLJyxcbiAgICAgICAgdXJsOiBzZXJ2ZXJVcmwsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBJZjogYCg8JHtsb2NrfT4pYCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9nKCdSZWZyZXNoZWQgbG9jazonLCBsb2NrKTtcbiAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MTIpIHtcbiAgICAgICAgICB0aGlzLmxvZygnUmVmcmVzaCBsb2NrIGVycm9yJyk7XG4gICAgICAgICAgdGhpcy5jb25maWcuc2V0KHsgbG9jazogbnVsbCB9KTtcbiAgICAgICAgICAvLyBQcmVjb25kaXRpb24gRmFpbGVkXG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2soKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2soKTtcbiAgfSxcbiAgcmVsZWFzZUxvY2soKSB7XG4gICAgY29uc3QgbG9jayA9IHRoaXMuY29uZmlnLmdldCgnbG9jaycpO1xuICAgIGlmIChsb2NrKSB7XG4gICAgICBjb25zdCB7IHNlcnZlclVybCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgICAgdGhpcy5sb2coJ1JlbGVhc2UgbG9jazonLCBsb2NrKTtcbiAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgICAgbWV0aG9kOiAnVU5MT0NLJyxcbiAgICAgICAgdXJsOiBzZXJ2ZXJVcmwsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnTG9jay1Ub2tlbic6IGA8JHtsb2NrfT5gLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2coJ1JlbGVhc2VkIGxvY2snKTtcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2coJ1JlbGVhc2UgbG9jayBlcnJvcicpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5jb25maWcuc2V0KHsgbG9jazogbnVsbCB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgKi9cbiAgbGlzdCgpIHtcbiAgICBjb25zdCB7IHNlcnZlclVybCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgIGNvbnN0IG1rZGlyID0gKCkgPT4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdNS0NPTCcsXG4gICAgICB1cmw6IHNlcnZlclVybCxcbiAgICB9KTtcbiAgICBjb25zdCByZWFkZGlyID0gKCkgPT4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQUk9QRklORCcsXG4gICAgICB1cmw6IHNlcnZlclVybCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgZGVwdGg6ICcxJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbigoeG1sKSA9PiB7XG4gICAgICBjb25zdCBkb2MgPSBYTm9kZS5mcm9tWE1MKHhtbCk7XG4gICAgICBjb25zdCBpdGVtcyA9IGRvYy5jaGlsZHJlbigpWzBdXG4gICAgICAubWFwKChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3AgPSBub2RlLmZpbmQoJ0RBVjpwcm9wc3RhdCcpLmZpbmQoJ0RBVjpwcm9wJyk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBwcm9wLmZpbmQoJ0RBVjpyZXNvdXJjZXR5cGUnKS5maW5kKCdEQVY6Y29sbGVjdGlvbicpID8gJ2RpcmVjdG9yeScgOiAnZmlsZSc7XG4gICAgICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICBsZXQgZGlzcGxheU5hbWU7XG4gICAgICAgICAgY29uc3QgZGlzcGxheU5hbWVOb2RlID0gcHJvcC5maW5kKCdEQVY6ZGlzcGxheW5hbWUnKTtcblxuICAgICAgICAgIGlmIChkaXNwbGF5TmFtZU5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZU5vZGUudGV4dCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gbm9kZS5maW5kKCdEQVY6aHJlZicpLnRleHQoKTtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYuc3Vic3RyaW5nKGhyZWYubGFzdEluZGV4T2YoJy8nKSArIDEpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNTY3JpcHRGaWxlKGRpc3BsYXlOYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHByb3AuZmluZCgnREFWOmdldGNvbnRlbnRsZW5ndGgnKTtcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemUoe1xuICAgICAgICAgICAgICBuYW1lOiBkaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgc2l6ZTogc2l6ZSA/ICtzaXplLnRleHQoKSA6IDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9KTtcbiAgICByZXR1cm4gcmVhZGRpcigpXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIG1rZGlyKCkudGhlbihyZWFkZGlyKTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0KGl0ZW0pIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIGNvbnN0IHsgc2VydmVyVXJsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsOiBzZXJ2ZXJVcmwgKyBuYW1lLFxuICAgIH0pO1xuICB9LFxuICBwdXQoaXRlbSwgZGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbicsXG4gICAgfTtcbiAgICBjb25zdCBsb2NrID0gdGhpcy5jb25maWcuZ2V0KCdsb2NrJyk7XG4gICAgaWYgKGxvY2spIGhlYWRlcnMuSWYgPSBgKDwke2xvY2t9PilgO1xuICAgIGNvbnN0IHsgc2VydmVyVXJsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIHVybDogc2VydmVyVXJsICsgbmFtZSxcbiAgICAgIGJvZHk6IGRhdGEsXG4gICAgICBoZWFkZXJzLFxuICAgIH0pO1xuICB9LFxuICByZW1vdmUoaXRlbSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgY29uc3QgaGVhZGVycyA9IHt9O1xuICAgIGNvbnN0IGxvY2sgPSB0aGlzLmNvbmZpZy5nZXQoJ2xvY2snKTtcbiAgICBpZiAobG9jaykgaGVhZGVycy5JZiA9IGAoPCR7bG9ja30+KWA7XG4gICAgY29uc3QgeyBzZXJ2ZXJVcmwgfSA9IHRoaXMucHJvcGVydGllcztcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgdXJsOiBzZXJ2ZXJVcmwgKyBuYW1lLFxuICAgICAgaGVhZGVycyxcbiAgICB9KTtcbiAgfSxcbn0pO1xucmVnaXN0ZXIoV2ViREFWKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplKGl0ZW0pIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgc2l6ZTogaXRlbS5zaXplLFxuICAgIHVyaTogZ2V0VVJJKGl0ZW0ubmFtZSksXG4gIH07XG59XG4iLCJpbXBvcnQgaW5pdENhY2hlIGZyb20gJyMvY29tbW9uL2NhY2hlJztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuY29uc3QgY2FjaGUgPSBpbml0Q2FjaGUoe1xuICAvKiBLZWVwaW5nIHRoZSBkYXRhIGZvciBvbmUgaG91ciBzaW5jZSBjaHJvbWUuc3RvcmFnZS5sb2NhbCBpcyBpbnNhbmVseSBzbG93IGluIENocm9tZSxcbiAgICAgaXQgY2FuIHRha2VzIHNlY29uZHMgdG8gcmVhZCBpdCB3aGVuIGluamVjdGluZyB0YWJzIHdpdGggYSBiaWcgc2NyaXB0L3ZhbHVlLCB3aGljaCBkZWxheXNcbiAgICAgYWxsIG90aGVyIHNjcmlwdHMgaW4gdGhpcyB0YWIgYW5kIHRoZXkgd2lsbCBuZXZlciBiZSBhYmxlIHRvIHJ1biBhdCBkb2N1bWVudC1zdGFydC4gKi9cbiAgbGlmZXRpbWU6IDYwICogNjAgKiAxMDAwLFxufSk7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgQ2FjaGVMb2FkKGRhdGEpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KGRhdGEpIHx8IG51bGw7XG4gIH0sXG4gIENhY2hlSGl0KGRhdGEpIHtcbiAgICBjYWNoZS5oaXQoZGF0YS5rZXksIGRhdGEubGlmZXRpbWUpO1xuICB9LFxuICBDYWNoZVBvcChrZXkpIHtcbiAgICByZXR1cm4gY2FjaGUucG9wKGtleSkgfHwgbnVsbDtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjYWNoZTtcbiIsImltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xubGV0IGNsaXBib2FyZERhdGE7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgU2V0Q2xpcGJvYXJkKGRhdGEpIHtcbiAgICBjbGlwYm9hcmREYXRhID0gZGF0YTtcbiAgICB0ZXh0YXJlYS5mb2N1cygpO1xuICAgIGNvbnN0IHJldCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JywgZmFsc2UsIG51bGwpO1xuICAgIGlmICghcmV0ICYmIHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NvcHkgZmFpbGVkIScpO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRhcmVhKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29weScsIGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHsgdHlwZSwgZGF0YSB9ID0gY2xpcGJvYXJkRGF0YTtcbiAgZS5jbGlwYm9hcmREYXRhLnNldERhdGEodHlwZSB8fCAndGV4dC9wbGFpbicsIGRhdGEpO1xufSk7XG4iLCJpbXBvcnQge1xuICBjb21wYXJlVmVyc2lvbiwgaTE4biwgZ2V0RnVsbFVybCwgZ2V0U2NyaXB0TmFtZSwgaXNSZW1vdGUsIHNlbmRDbWQsIHRydWVKb2luLFxufSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQge1xuICBDTURfU0NSSVBUX0FERCwgQ01EX1NDUklQVF9VUERBVEUsIElOSkVDVF9QQUdFLCBJTkpFQ1RfQVVUTywgVElNRU9VVF9XRUVLLFxufSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgZm9yRWFjaEVudHJ5LCBmb3JFYWNoS2V5LCBmb3JFYWNoVmFsdWUgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnIy9jb21tb24vc3RvcmFnZSc7XG5pbXBvcnQgcGx1Z2luRXZlbnRzIGZyb20gJy4uL3BsdWdpbi9ldmVudHMnO1xuaW1wb3J0IHsgZ2V0TmFtZVVSSSwgcGFyc2VNZXRhLCBuZXdTY3JpcHQsIGdldERlZmF1bHRDdXN0b20gfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgeyB0ZXN0U2NyaXB0LCB0ZXN0QmxhY2tsaXN0IH0gZnJvbSAnLi90ZXN0ZXInO1xuaW1wb3J0IHsgcHJlSW5pdGlhbGl6ZSB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBjb21tYW5kcywgbm90aWZ5IH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCBwYXRjaERCIGZyb20gJy4vcGF0Y2gtZGInO1xuaW1wb3J0IHsgc2V0T3B0aW9uIH0gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCAnLi9zdG9yYWdlLWZldGNoJztcbmltcG9ydCBkYXRhQ2FjaGUgZnJvbSAnLi9jYWNoZSc7XG5cbmNvbnN0IHN0b3JlID0ge307XG5zdG9yYWdlLmJhc2Uuc2V0RGF0YUNhY2hlKGRhdGFDYWNoZSk7XG5zdG9yYWdlLnNjcmlwdC5vbkR1bXAgPSAoaXRlbSkgPT4ge1xuICBzdG9yZS5zY3JpcHRNYXBbaXRlbS5wcm9wcy5pZF0gPSBpdGVtO1xufTtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICBDaGVja1Bvc2l0aW9uOiBzb3J0U2NyaXB0cyxcbiAgQ2hlY2tSZW1vdmU6IGNoZWNrUmVtb3ZlLFxuICAvKiogQHJldHVybiB7Vk1TY3JpcHR9ICovXG4gIEdldFNjcmlwdDogZ2V0U2NyaXB0LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTx7IGl0ZW1zOiBWTVNjcmlwdFtdLCB2YWx1ZXM/IH0+fSAqL1xuICBhc3luYyBFeHBvcnRaaXAoeyB2YWx1ZXMgfSkge1xuICAgIGNvbnN0IHNjcmlwdHMgPSBnZXRTY3JpcHRzKCk7XG4gICAgY29uc3QgaWRzID0gc2NyaXB0cy5tYXAoZ2V0UHJvcHNJZCk7XG4gICAgY29uc3QgY29kZU1hcCA9IGF3YWl0IHN0b3JhZ2UuY29kZS5nZXRNdWx0aShpZHMpO1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogc2NyaXB0cy5tYXAoc2NyaXB0ID0+ICh7IHNjcmlwdCwgY29kZTogY29kZU1hcFtzY3JpcHQucHJvcHMuaWRdIH0pKSxcbiAgICAgIHZhbHVlczogdmFsdWVzID8gYXdhaXQgc3RvcmFnZS52YWx1ZS5nZXRNdWx0aShpZHMpIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59ICovXG4gIEdldFNjcmlwdENvZGUoaWQpIHtcbiAgICByZXR1cm4gc3RvcmFnZS5jb2RlLmdldE9uZShpZCk7XG4gIH0sXG4gIEdldFNjcmlwdFZlcihvcHRzKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZ2V0U2NyaXB0KG9wdHMpO1xuICAgIHJldHVybiBzY3JpcHQgJiYgIXNjcmlwdC5jb25maWcucmVtb3ZlZFxuICAgICAgPyBzY3JpcHQubWV0YS52ZXJzaW9uXG4gICAgICA6IG51bGw7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSAqL1xuICBNYXJrUmVtb3ZlZCh7IGlkLCByZW1vdmVkIH0pIHtcbiAgICByZXR1cm4gdXBkYXRlU2NyaXB0SW5mbyhpZCwge1xuICAgICAgY29uZmlnOiB7IHJlbW92ZWQ6IHJlbW92ZWQgPyAxIDogMCB9LFxuICAgICAgcHJvcHM6IHsgbGFzdE1vZGlmaWVkOiBEYXRlLm5vdygpIH0sXG4gICAgfSk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59ICovXG4gIE1vdmUoeyBpZCwgb2Zmc2V0IH0pIHtcbiAgICBjb25zdCBzY3JpcHQgPSBnZXRTY3JpcHRCeUlkKGlkKTtcbiAgICBjb25zdCBpbmRleCA9IHN0b3JlLnNjcmlwdHMuaW5kZXhPZihzY3JpcHQpO1xuICAgIHN0b3JlLnNjcmlwdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzdG9yZS5zY3JpcHRzLnNwbGljZShpbmRleCArIG9mZnNldCwgMCwgc2NyaXB0KTtcbiAgICByZXR1cm4gbm9ybWFsaXplUG9zaXRpb24oKTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59ICovXG4gIGFzeW5jIFJlbW92ZVNjcmlwdChpZCkge1xuICAgIGNvbnN0IGkgPSBzdG9yZS5zY3JpcHRzLmluZGV4T2YoZ2V0U2NyaXB0QnlJZChpZCkpO1xuICAgIGlmIChpID49IDApIHtcbiAgICAgIHN0b3JlLnNjcmlwdHMuc3BsaWNlKGksIDEpO1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBzdG9yYWdlLnNjcmlwdC5yZW1vdmUoaWQpLFxuICAgICAgICBzdG9yYWdlLmNvZGUucmVtb3ZlKGlkKSxcbiAgICAgICAgc3RvcmFnZS52YWx1ZS5yZW1vdmUoaWQpLFxuICAgICAgXSk7XG4gICAgfVxuICAgIHJldHVybiBzZW5kQ21kKCdSZW1vdmVTY3JpcHQnLCBpZCk7XG4gIH0sXG4gIFBhcnNlTWV0YTogcGFyc2VNZXRhLFxuICBQYXJzZVNjcmlwdDogcGFyc2VTY3JpcHQsXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSAqL1xuICBVcGRhdGVTY3JpcHRJbmZvKHsgaWQsIGNvbmZpZywgY3VzdG9tIH0pIHtcbiAgICByZXR1cm4gdXBkYXRlU2NyaXB0SW5mbyhpZCwge1xuICAgICAgY29uZmlnLFxuICAgICAgY3VzdG9tLFxuICAgICAgcHJvcHM6IHsgbGFzdE1vZGlmaWVkOiBEYXRlLm5vdygpIH0sXG4gICAgfSk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59ICovXG4gIFZhY3V1bTogdmFjdXVtLFxufSk7XG5cbnByZUluaXRpYWxpemUucHVzaChhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgdmVyc2lvbjogbGFzdFZlcnNpb24gfSA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoJ3ZlcnNpb24nKTtcbiAgY29uc3QgdmVyc2lvbiA9IHByb2Nlc3MuZW52LlZNX1ZFUjtcbiAgaWYgKCFsYXN0VmVyc2lvbikgYXdhaXQgcGF0Y2hEQigpO1xuICBpZiAodmVyc2lvbiAhPT0gbGFzdFZlcnNpb24pIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyB2ZXJzaW9uIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xuICBjb25zdCBzY3JpcHRzID0gW107XG4gIGNvbnN0IHN0b3JlSW5mbyA9IHtcbiAgICBpZDogMCxcbiAgICBwb3NpdGlvbjogMCxcbiAgfTtcbiAgY29uc3QgaWRNYXAgPSB7fTtcbiAgY29uc3QgdXJpTWFwID0ge307XG4gIGNvbnN0IG1vZHMgPSBbXTtcbiAgY29uc3QgcmVzVXJscyA9IFtdO1xuICAvKiogQHRoaXMgVk1TY3JpcHRDdXN0b20ucGF0aE1hcCAqL1xuICBjb25zdCByZW1lbWJlclVybCA9IGZ1bmN0aW9uIF8odXJsKSB7IHJlc1VybHMucHVzaCh0aGlzW3VybF0gfHwgdXJsKTsgfTtcbiAgZGF0YTo6Zm9yRWFjaEVudHJ5KChba2V5LCBzY3JpcHRdKSA9PiB7XG4gICAgZGF0YUNhY2hlLnB1dChrZXksIHNjcmlwdCk7XG4gICAgaWYgKGtleS5zdGFydHNXaXRoKHN0b3JhZ2Uuc2NyaXB0LnByZWZpeCkpIHtcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgbWV0YSxcbiAgICAgIC8vICAgY3VzdG9tLFxuICAgICAgLy8gICBwcm9wczogeyBpZCwgcG9zaXRpb24sIHVyaSB9LFxuICAgICAgLy8gICBjb25maWc6IHsgZW5hYmxlZCwgc2hvdWxkVXBkYXRlIH0sXG4gICAgICAvLyB9XG4gICAgICBjb25zdCBpZCA9IGdldEludChrZXkuc2xpY2Uoc3RvcmFnZS5zY3JpcHQucHJlZml4Lmxlbmd0aCkpO1xuICAgICAgaWYgKCFpZCB8fCBpZE1hcFtpZF0pIHtcbiAgICAgICAgLy8gSUQgY29uZmxpY3RzIVxuICAgICAgICAvLyBTaG91bGQgbm90IGhhcHBlbiwgZGlzY2FyZCBkdXBsaWNhdGVzLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZE1hcFtpZF0gPSBzY3JpcHQ7XG4gICAgICBjb25zdCB1cmkgPSBnZXROYW1lVVJJKHNjcmlwdCk7XG4gICAgICBpZiAodXJpTWFwW3VyaV0pIHtcbiAgICAgICAgLy8gTmFtZXNwYWNlIGNvbmZsaWN0cyFcbiAgICAgICAgLy8gU2hvdWxkIG5vdCBoYXBwZW4sIGRpc2NhcmQgZHVwbGljYXRlcy5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdXJpTWFwW3VyaV0gPSBzY3JpcHQ7XG4gICAgICBzY3JpcHQucHJvcHMgPSB7XG4gICAgICAgIC4uLnNjcmlwdC5wcm9wcyxcbiAgICAgICAgaWQsXG4gICAgICAgIHVyaSxcbiAgICAgIH07XG4gICAgICBzY3JpcHQuY3VzdG9tID0ge1xuICAgICAgICAuLi5nZXREZWZhdWx0Q3VzdG9tKCksXG4gICAgICAgIC4uLnNjcmlwdC5jdXN0b20sXG4gICAgICB9O1xuICAgICAgc3RvcmVJbmZvLmlkID0gTWF0aC5tYXgoc3RvcmVJbmZvLmlkLCBpZCk7XG4gICAgICBzdG9yZUluZm8ucG9zaXRpb24gPSBNYXRoLm1heChzdG9yZUluZm8ucG9zaXRpb24sIGdldEludChzY3JpcHQucHJvcHMucG9zaXRpb24pKTtcbiAgICAgIHNjcmlwdHMucHVzaChzY3JpcHQpO1xuICAgICAgLy8gbGlzdGluZyBhbGwga25vd24gcmVzb3VyY2UgdXJscyBpbiBvcmRlciB0byByZW1vdmUgdW51c2VkIG1vZCBrZXlzXG4gICAgICBjb25zdCB7XG4gICAgICAgIGN1c3RvbTogeyBwYXRoTWFwID0ge30gfSA9IHt9LFxuICAgICAgICBtZXRhID0gc2NyaXB0Lm1ldGEgPSB7fSxcbiAgICAgIH0gPSBzY3JpcHQ7XG4gICAgICBtZXRhLmdyYW50ID0gWy4uLm5ldyBTZXQobWV0YS5ncmFudCB8fCBbXSldOyAvLyBkZWR1cGxpY2F0ZVxuICAgICAgbWV0YS5yZXF1aXJlPy5mb3JFYWNoKHJlbWVtYmVyVXJsLCBwYXRoTWFwKTtcbiAgICAgIE9iamVjdC52YWx1ZXMobWV0YS5yZXNvdXJjZXMgfHwge30pLmZvckVhY2gocmVtZW1iZXJVcmwsIHBhdGhNYXApO1xuICAgICAgcGF0aE1hcDo6cmVtZW1iZXJVcmwobWV0YS5pY29uKTtcbiAgICB9IGVsc2UgaWYgKGtleS5zdGFydHNXaXRoKHN0b3JhZ2UubW9kLnByZWZpeCkpIHtcbiAgICAgIG1vZHMucHVzaChrZXkuc2xpY2Uoc3RvcmFnZS5tb2QucHJlZml4Lmxlbmd0aCkpO1xuICAgIH1cbiAgfSk7XG4gIHN0b3JhZ2UubW9kLnJlbW92ZU11bHRpKG1vZHMuZmlsdGVyKHVybCA9PiAhcmVzVXJscy5pbmNsdWRlcyh1cmwpKSk7XG4gIE9iamVjdC5hc3NpZ24oc3RvcmUsIHtcbiAgICBzY3JpcHRzLFxuICAgIHN0b3JlSW5mbyxcbiAgICBzY3JpcHRNYXA6IHNjcmlwdHMucmVkdWNlKChtYXAsIGl0ZW0pID0+IHtcbiAgICAgIG1hcFtpdGVtLnByb3BzLmlkXSA9IGl0ZW07XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KSxcbiAgfSk7XG4gIC8vIFN3aXRjaCBkZWZhdWx0SW5qZWN0SW50byBmcm9tIGBwYWdlYCB0byBgYXV0b2Agd2hlbiB1cGdyYWRpbmcgVk0yLjEyLjcgb3Igb2xkZXJcbiAgaWYgKHZlcnNpb24gIT09IGxhc3RWZXJzaW9uXG4gICYmIElTX0ZJUkVGT1hcbiAgJiYgZGF0YS5vcHRpb25zPy5kZWZhdWx0SW5qZWN0SW50byA9PT0gSU5KRUNUX1BBR0VcbiAgJiYgY29tcGFyZVZlcnNpb24obGFzdFZlcnNpb24sICcyLjEyLjcnKSA8PSAwKSB7XG4gICAgc2V0T3B0aW9uKCdkZWZhdWx0SW5qZWN0SW50bycsIElOSkVDVF9BVVRPKTtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICBjb25zb2xlLmxvZygnc3RvcmU6Jywgc3RvcmUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgfVxuICB2YWN1dW0oZGF0YSk7XG4gIHJldHVybiBzb3J0U2NyaXB0cygpO1xufSk7XG5cbi8qKiBAcmV0dXJuIHtudW1iZXJ9ICovXG5mdW5jdGlvbiBnZXRJbnQodmFsKSB7XG4gIHJldHVybiArdmFsIHx8IDA7XG59XG5cbi8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuZnVuY3Rpb24gZ2V0UHJvcHNJZChzY3JpcHQpIHtcbiAgcmV0dXJuIHNjcmlwdD8ucHJvcHMuaWQ7XG59XG5cbi8qKiBAcmV0dXJuIHt2b2lkfSAqL1xuZnVuY3Rpb24gdXBkYXRlTGFzdE1vZGlmaWVkKCkge1xuICBzZXRPcHRpb24oJ2xhc3RNb2RpZmllZCcsIERhdGUubm93KCkpO1xufVxuXG4vKiogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fSAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5vcm1hbGl6ZVBvc2l0aW9uKCkge1xuICBjb25zdCB1cGRhdGVzID0gc3RvcmUuc2NyaXB0cy5maWx0ZXIoKHsgcHJvcHMgfSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGluZGV4ICsgMTtcbiAgICBjb25zdCByZXMgPSBwcm9wcy5wb3NpdGlvbiAhPT0gcG9zaXRpb247XG4gICAgaWYgKHJlcykgcHJvcHMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICByZXR1cm4gcmVzO1xuICB9KTtcbiAgc3RvcmUuc3RvcmVJbmZvLnBvc2l0aW9uID0gc3RvcmUuc2NyaXB0cy5sZW5ndGg7XG4gIGlmICh1cGRhdGVzLmxlbmd0aCkge1xuICAgIGF3YWl0IHN0b3JhZ2Uuc2NyaXB0LmR1bXAodXBkYXRlcyk7XG4gICAgdXBkYXRlTGFzdE1vZGlmaWVkKCk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZXMubGVuZ3RoO1xufVxuXG4vKiogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fSAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNvcnRTY3JpcHRzKCkge1xuICBzdG9yZS5zY3JpcHRzLnNvcnQoKGEsIGIpID0+IGdldEludChhLnByb3BzLnBvc2l0aW9uKSAtIGdldEludChiLnByb3BzLnBvc2l0aW9uKSk7XG4gIGNvbnN0IGNoYW5nZWQgPSBhd2FpdCBub3JtYWxpemVQb3NpdGlvbigpO1xuICBzZW5kQ21kKCdTY3JpcHRzVXBkYXRlZCcsIG51bGwpO1xuICByZXR1cm4gY2hhbmdlZDtcbn1cblxuLyoqIEByZXR1cm4gez9WTVNjcmlwdH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHRCeUlkKGlkKSB7XG4gIHJldHVybiBzdG9yZS5zY3JpcHRNYXBbaWRdO1xufVxuXG4vKiogQHJldHVybiB7P1ZNU2NyaXB0fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmlwdCh7IGlkLCB1cmksIG1ldGEgfSkge1xuICBsZXQgc2NyaXB0O1xuICBpZiAoaWQpIHtcbiAgICBzY3JpcHQgPSBnZXRTY3JpcHRCeUlkKGlkKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXVyaSkgdXJpID0gZ2V0TmFtZVVSSSh7IG1ldGEsIGlkOiAnQEBzaG91bGQtaGF2ZS1uYW1lJyB9KTtcbiAgICBzY3JpcHQgPSBzdG9yZS5zY3JpcHRzLmZpbmQoKHsgcHJvcHMgfSkgPT4gdXJpID09PSBwcm9wcy51cmkpO1xuICB9XG4gIHJldHVybiBzY3JpcHQ7XG59XG5cbi8qKiBAcmV0dXJuIHtWTVNjcmlwdFtdfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmlwdHMoKSB7XG4gIHJldHVybiBzdG9yZS5zY3JpcHRzLmZpbHRlcihzY3JpcHQgPT4gIXNjcmlwdC5jb25maWcucmVtb3ZlZCk7XG59XG5cbi8qKlxuICogQGRlc2MgTG9hZCB2YWx1ZXMgZm9yIGJhdGNoIHVwZGF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcltdfSBpZHNcbiAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlU3RvcmVzQnlJZHMoaWRzKSB7XG4gIHJldHVybiBzdG9yYWdlLnZhbHVlLmdldE11bHRpKGlkcyk7XG59XG5cbi8qKlxuICogQGRlc2MgRHVtcCB2YWx1ZXMgZm9yIGJhdGNoIHVwZGF0ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVEaWN0IHsgaWQxOiB2YWx1ZTEsIGlkMjogdmFsdWUyLCAuLi4gfVxuICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZHVtcFZhbHVlU3RvcmVzKHZhbHVlRGljdCkge1xuICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIGNvbnNvbGUuaW5mbygnVXBkYXRlIHZhbHVlIHN0b3JlcycsIHZhbHVlRGljdCk7XG4gIGF3YWl0IHN0b3JhZ2UudmFsdWUuZHVtcCh2YWx1ZURpY3QpO1xuICByZXR1cm4gdmFsdWVEaWN0O1xufVxuXG5leHBvcnQgY29uc3QgRU5WX0NBQ0hFX0tFWVMgPSAnY2FjaGVLZXlzJztcbmV4cG9ydCBjb25zdCBFTlZfUkVRX0tFWVMgPSAncmVxS2V5cyc7XG5leHBvcnQgY29uc3QgRU5WX1ZBTFVFX0lEUyA9ICd2YWx1ZUlkcyc7XG5jb25zdCBHTVZBTFVFU19SRSA9IC9eR01bXy5dKGxpc3RWYWx1ZXN8KFtnc11ldHxkZWxldGUpVmFsdWUpJC87XG5jb25zdCBSVU5fQVRfUkUgPSAvXmRvY3VtZW50LShzdGFydHxib2R5fGVuZHxpZGxlKSQvO1xuLyoqXG4gKiBAZGVzYyBHZXQgc2NyaXB0cyB0byBiZSBpbmplY3RlZCB0byBwYWdlIHdpdGggc3BlY2lmaWMgVVJMLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2NyaXB0c0J5VVJMKHVybCwgaXNUb3ApIHtcbiAgY29uc3QgYWxsU2NyaXB0cyA9IHRlc3RCbGFja2xpc3QodXJsKVxuICAgID8gW11cbiAgICA6IHN0b3JlLnNjcmlwdHMuZmlsdGVyKHNjcmlwdCA9PiAoXG4gICAgICAhc2NyaXB0LmNvbmZpZy5yZW1vdmVkXG4gICAgICAmJiAoaXNUb3AgfHwgIShzY3JpcHQuY3VzdG9tLm5vZnJhbWVzID8/IHNjcmlwdC5tZXRhLm5vZnJhbWVzKSlcbiAgICAgICYmIHRlc3RTY3JpcHQodXJsLCBzY3JpcHQpXG4gICAgKSk7XG4gIGNvbnN0IGRpc2FibGVkSWRzID0gW107XG4gIC8qKiBAbmFtZXNwYWNlIFZNU2NyaXB0QnlVcmxEYXRhICovXG4gIGNvbnN0IFtlbnZTdGFydCwgZW52RGVsYXllZF0gPSBbMCwgMV0ubWFwKCgpID0+ICh7XG4gICAgaWRzOiBbXSxcbiAgICAvKiogQHR5cGUgeyhWTVNjcmlwdCAmIFZNSW5qZWN0ZWRTY3JpcHQpW119ICovXG4gICAgc2NyaXB0czogW10sXG4gICAgW0VOVl9DQUNIRV9LRVlTXTogW10sXG4gICAgW0VOVl9SRVFfS0VZU106IFtdLFxuICAgIFtFTlZfVkFMVUVfSURTXTogW10sXG4gIH0pKTtcbiAgYWxsU2NyaXB0cy5mb3JFYWNoKChzY3JpcHQpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBzY3JpcHQucHJvcHM7XG4gICAgaWYgKCFzY3JpcHQuY29uZmlnLmVuYWJsZWQpIHtcbiAgICAgIGRpc2FibGVkSWRzLnB1c2goaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IG1ldGEsIGN1c3RvbSB9ID0gc2NyaXB0O1xuICAgIGNvbnN0IHsgcGF0aE1hcCA9IGJ1aWxkUGF0aE1hcChzY3JpcHQpIH0gPSBjdXN0b207XG4gICAgY29uc3QgcnVuQXQgPSBgJHtjdXN0b20ucnVuQXQgfHwgbWV0YS5ydW5BdCB8fCAnJ31gLm1hdGNoKFJVTl9BVF9SRSk/LlsxXSB8fCAnZW5kJztcbiAgICBjb25zdCBlbnYgPSBydW5BdCA9PT0gJ3N0YXJ0JyB8fCBydW5BdCA9PT0gJ2JvZHknID8gZW52U3RhcnQgOiBlbnZEZWxheWVkO1xuICAgIGVudi5pZHMucHVzaChpZCk7XG4gICAgaWYgKG1ldGEuZ3JhbnQuc29tZShHTVZBTFVFU19SRS50ZXN0LCBHTVZBTFVFU19SRSkpIHtcbiAgICAgIGVudltFTlZfVkFMVUVfSURTXS5wdXNoKGlkKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbbGlzdCwgbmFtZV0gb2YgW1xuICAgICAgW21ldGEucmVxdWlyZSwgRU5WX1JFUV9LRVlTXSxcbiAgICAgIFtPYmplY3QudmFsdWVzKG1ldGEucmVzb3VyY2VzKSwgRU5WX0NBQ0hFX0tFWVNdLFxuICAgIF0pIHtcbiAgICAgIGxpc3QuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBrZXkgPSBwYXRoTWFwW2tleV0gfHwga2V5O1xuICAgICAgICBpZiAoIWVudlN0YXJ0W25hbWVdLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBlbnZbbmFtZV0ucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqIEBuYW1lc3BhY2UgVk1JbmplY3RlZFNjcmlwdCAqL1xuICAgIGVudi5zY3JpcHRzLnB1c2goeyAuLi5zY3JpcHQsIHJ1bkF0IH0pO1xuICB9KTtcbiAgaWYgKGVudkRlbGF5ZWQuaWRzLmxlbmd0aCkge1xuICAgIGVudkRlbGF5ZWQucHJvbWlzZSA9IHJlYWRFbnZpcm9ubWVudERhdGEoZW52RGVsYXllZCk7XG4gIH1cbiAgLyoqIEBuYW1lc3BhY2UgVk1TY3JpcHRCeVVybERhdGEgKi9cbiAgcmV0dXJuIHtcbiAgICAuLi5lbnZTdGFydCxcbiAgICAuLi5hd2FpdCByZWFkRW52aXJvbm1lbnREYXRhKGVudlN0YXJ0KSxcbiAgICBkaXNhYmxlZElkcyxcbiAgICBlbnZEZWxheWVkLFxuICB9O1xufVxuXG4vKipcbiAqIE9iamVjdCBrZXlzID09IGFyZWFzIGluIGBzdG9yYWdlYCBtb2R1bGUuXG4gKiBAbmFtZXNwYWNlIFZNU2NyaXB0QnlVcmxEYXRhXG4gKi9cbmNvbnN0IFNUT1JBR0VfUk9VVEVTID0gT2JqZWN0LmVudHJpZXMoe1xuICBjYWNoZTogRU5WX0NBQ0hFX0tFWVMsXG4gIGNvZGU6ICdpZHMnLFxuICByZXF1aXJlOiBFTlZfUkVRX0tFWVMsXG4gIHZhbHVlOiBFTlZfVkFMVUVfSURTLFxufSk7XG5jb25zdCByZXRyaWVkU3RvcmFnZUtleXMgPSB7fTtcblxuYXN5bmMgZnVuY3Rpb24gcmVhZEVudmlyb25tZW50RGF0YShlbnYsIGlzUmV0cnkpIHtcbiAgY29uc3Qga2V5cyA9IFtdO1xuICBTVE9SQUdFX1JPVVRFUy5mb3JFYWNoKChbYXJlYSwgc3JjSWRzXSkgPT4ge1xuICAgIGVudltzcmNJZHNdLmZvckVhY2goaWQgPT4ge1xuICAgICAga2V5cy5wdXNoKHN0b3JhZ2VbYXJlYV0uZ2V0S2V5KGlkKSk7XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgc3RvcmFnZS5iYXNlLmdldE11bHRpKGtleXMpO1xuICBmb3IgKGNvbnN0IFthcmVhLCBzcmNJZHNdIG9mIFNUT1JBR0VfUk9VVEVTKSB7XG4gICAgZW52W2FyZWFdID0ge307XG4gICAgZm9yIChjb25zdCBpZCBvZiBlbnZbc3JjSWRzXSkge1xuICAgICAgY29uc3QgdmFsID0gZGF0YVtzdG9yYWdlW2FyZWFdLmdldEtleShpZCldO1xuICAgICAgZW52W2FyZWFdW2lkXSA9IHZhbDtcbiAgICAgIGlmICh2YWwgPT0gbnVsbCAmJiBhcmVhICE9PSAndmFsdWUnICYmIHJldHJpZWRTdG9yYWdlS2V5c1thcmVhICsgaWRdICE9PSAyKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IGBUaGUgXCIke2FyZWF9XCIgc3RvcmFnZSBpcyBtaXNzaW5nIFwiJHtpZH1cIiFgO1xuICAgICAgICBjb25zdCBlcnIyID0gJ1ZhY3V1bWluZyBkaWQgbm90IGhlbHAuIFBsZWFzZSByZWluc3RhbGwgdGhlIGFmZmVjdGVkIHNjcmlwdHMuJztcbiAgICAgICAgcmV0cmllZFN0b3JhZ2VLZXlzW2FyZWEgKyBpZF0gPSBpc1JldHJ5ID8gMiA6IDE7XG4gICAgICAgIGlmICghaXNSZXRyeSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlcnIsICdWYWN1dW1pbmcuLi4nKTtcbiAgICAgICAgICBpZiAoYXdhaXQgdmFjdXVtKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFkRW52aXJvbm1lbnREYXRhKGVudiwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLCBlcnIyKTtcbiAgICAgICAgbm90aWZ5KHsgdGl0bGU6IGVyciwgYm9keTogZXJyMiB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVudjtcbn1cblxuLyoqXG4gKiBAZGVzYyBHZXQgZGF0YSBmb3IgZGFzaGJvYXJkLlxuICogQHJldHVybiB7UHJvbWlzZTx7IHNjcmlwdHM6IFZNU2NyaXB0W10sIGNhY2hlOiBPYmplY3QgfT59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhKGlkcykge1xuICBjb25zdCBzY3JpcHRzID0gaWRzID8gaWRzLm1hcChnZXRTY3JpcHRCeUlkKSA6IHN0b3JlLnNjcmlwdHM7XG4gIHJldHVybiB7XG4gICAgc2NyaXB0cyxcbiAgICBjYWNoZTogYXdhaXQgZ2V0SWNvbkNhY2hlKHNjcmlwdHMpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRJY29uQ2FjaGUoc2NyaXB0cykge1xuICBjb25zdCBpY29uVXJscyA9IFtdO1xuICBzY3JpcHRzLmZvckVhY2goKHNjcmlwdCkgPT4ge1xuICAgIGNvbnN0IHsgaWNvbiB9ID0gc2NyaXB0Lm1ldGE7XG4gICAgaWYgKGlzUmVtb3RlKGljb24pKSB7XG4gICAgICBpY29uVXJscy5wdXNoKHNjcmlwdC5jdXN0b20ucGF0aE1hcD8uW2ljb25dIHx8IGljb24pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBpY29uVXJscy5sZW5ndGhcbiAgICA/IHN0b3JhZ2UuY2FjaGUuZ2V0TXVsdGkoaWNvblVybHMsIHVuZGVmaW5lZCwgc3RvcmFnZS5jYWNoZS5tYWtlRGF0YVVyaSlcbiAgICA6IHt9O1xufVxuXG4vKiogQHJldHVybiB7bnVtYmVyfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmVtb3ZlKHsgZm9yY2UgfSA9IHt9KSB7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gIGNvbnN0IHRvUmVtb3ZlID0gc3RvcmUuc2NyaXB0cy5maWx0ZXIoc2NyaXB0ID0+IHNjcmlwdC5jb25maWcucmVtb3ZlZCAmJiAoXG4gICAgZm9yY2UgfHwgbm93IC0gZ2V0SW50KHNjcmlwdC5wcm9wcy5sYXN0TW9kaWZpZWQpID4gVElNRU9VVF9XRUVLXG4gICkpO1xuICBpZiAodG9SZW1vdmUubGVuZ3RoKSB7XG4gICAgc3RvcmUuc2NyaXB0cyA9IHN0b3JlLnNjcmlwdHMuZmlsdGVyKHNjcmlwdCA9PiAhc2NyaXB0LmNvbmZpZy5yZW1vdmVkKTtcbiAgICBjb25zdCBpZHMgPSB0b1JlbW92ZS5tYXAoZ2V0UHJvcHNJZCk7XG4gICAgc3RvcmFnZS5zY3JpcHQucmVtb3ZlTXVsdGkoaWRzKTtcbiAgICBzdG9yYWdlLmNvZGUucmVtb3ZlTXVsdGkoaWRzKTtcbiAgICBzdG9yYWdlLnZhbHVlLnJlbW92ZU11bHRpKGlkcyk7XG4gIH1cbiAgcmV0dXJuIHRvUmVtb3ZlLmxlbmd0aDtcbn1cblxuLyoqIEByZXR1cm4ge3N0cmluZ30gKi9cbmZ1bmN0aW9uIGdldFVVSUQoKSB7XG4gIGNvbnN0IHJuZCA9IG5ldyBVaW50MTZBcnJheSg4KTtcbiAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMocm5kKTtcbiAgLy8geHh4eHh4eHgteHh4eC1NeHh4LU54eHgteHh4eHh4eHh4eHh4XG4gIC8vIFdlJ3JlIHVzaW5nIFVVSUR2NCB2YXJpYW50IDEgc28gTj00IGFuZCBNPThcbiAgLy8gU2VlIGZvcm1hdF91dWlkX3Yzb3I1IGluIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvcmZjL3JmYzQxMjIudHh0XG4gIHJuZFszXSA9IHJuZFszXSAmIDB4MEZGRiB8IDB4NDAwMDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1iaXR3aXNlXG4gIHJuZFs0XSA9IHJuZFs0XSAmIDB4M0ZGRiB8IDB4ODAwMDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1iaXR3aXNlXG4gIHJldHVybiAnMDEtMi0zLTQtNTY3Jy5yZXBsYWNlKC9cXGQvZywgaSA9PiAocm5kW2ldICsgMHgxXzAwMDApLnRvU3RyaW5nKDE2KS5zbGljZSgtNCkpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Vk1TY3JpcHR9IHNjcmlwdFxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAqIEByZXR1cm4ge1Byb21pc2U8Vk1TY3JpcHRbXT59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNhdmVTY3JpcHQoc2NyaXB0LCBjb2RlKSB7XG4gIGNvbnN0IGNvbmZpZyA9IHNjcmlwdC5jb25maWcgfHwge307XG4gIGNvbmZpZy5lbmFibGVkID0gZ2V0SW50KGNvbmZpZy5lbmFibGVkKTtcbiAgY29uZmlnLnNob3VsZFVwZGF0ZSA9IGdldEludChjb25maWcuc2hvdWxkVXBkYXRlKTtcbiAgY29uc3QgcHJvcHMgPSBzY3JpcHQucHJvcHMgfHwge307XG4gIGxldCBvbGRTY3JpcHQ7XG4gIGlmICghcHJvcHMuaWQpIHtcbiAgICBzdG9yZS5zdG9yZUluZm8uaWQgKz0gMTtcbiAgICBwcm9wcy5pZCA9IHN0b3JlLnN0b3JlSW5mby5pZDtcbiAgfSBlbHNlIHtcbiAgICBvbGRTY3JpcHQgPSBzdG9yZS5zY3JpcHRNYXBbcHJvcHMuaWRdO1xuICB9XG4gIHByb3BzLnVyaSA9IGdldE5hbWVVUkkoc2NyaXB0KTtcbiAgcHJvcHMudXVpZCA9IHByb3BzLnV1aWQgfHwgY3J5cHRvLnJhbmRvbVVVSUQ/LigpIHx8IGdldFVVSUQoKTtcbiAgLy8gRG8gbm90IGFsbG93IHNjcmlwdCB3aXRoIHNhbWUgbmFtZSBhbmQgbmFtZXNwYWNlXG4gIGlmIChzdG9yZS5zY3JpcHRzLnNvbWUoKHsgcHJvcHM6IHsgaWQsIHVyaSB9ID0ge30gfSkgPT4gcHJvcHMuaWQgIT09IGlkICYmIHByb3BzLnVyaSA9PT0gdXJpKSkge1xuICAgIHRocm93IGkxOG4oJ21zZ05hbWVzcGFjZUNvbmZsaWN0Jyk7XG4gIH1cbiAgaWYgKG9sZFNjcmlwdCkge1xuICAgIHNjcmlwdC5jb25maWcgPSB7IC4uLm9sZFNjcmlwdC5jb25maWcsIC4uLmNvbmZpZyB9O1xuICAgIHNjcmlwdC5wcm9wcyA9IHsgLi4ub2xkU2NyaXB0LnByb3BzLCAuLi5wcm9wcyB9O1xuICAgIGNvbnN0IGluZGV4ID0gc3RvcmUuc2NyaXB0cy5pbmRleE9mKG9sZFNjcmlwdCk7XG4gICAgc3RvcmUuc2NyaXB0c1tpbmRleF0gPSBzY3JpcHQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFwcm9wcy5wb3NpdGlvbikge1xuICAgICAgc3RvcmUuc3RvcmVJbmZvLnBvc2l0aW9uICs9IDE7XG4gICAgICBwcm9wcy5wb3NpdGlvbiA9IHN0b3JlLnN0b3JlSW5mby5wb3NpdGlvbjtcbiAgICB9IGVsc2UgaWYgKHN0b3JlLnN0b3JlSW5mby5wb3NpdGlvbiA8IHByb3BzLnBvc2l0aW9uKSB7XG4gICAgICBzdG9yZS5zdG9yZUluZm8ucG9zaXRpb24gPSBwcm9wcy5wb3NpdGlvbjtcbiAgICB9XG4gICAgc2NyaXB0LmNvbmZpZyA9IGNvbmZpZztcbiAgICBzY3JpcHQucHJvcHMgPSBwcm9wcztcbiAgICBzdG9yZS5zY3JpcHRzLnB1c2goc2NyaXB0KTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgIHN0b3JhZ2Uuc2NyaXB0LmR1bXAoc2NyaXB0KSxcbiAgICBzdG9yYWdlLmNvZGUuc2V0KHByb3BzLmlkLCBjb2RlKSxcbiAgXSk7XG59XG5cbi8qKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNjcmlwdEluZm8oaWQsIGRhdGEpIHtcbiAgY29uc3Qgc2NyaXB0ID0gc3RvcmUuc2NyaXB0TWFwW2lkXTtcbiAgaWYgKCFzY3JpcHQpIHRocm93IG51bGw7XG4gIHNjcmlwdC5wcm9wcyA9IHsgLi4uc2NyaXB0LnByb3BzLCAuLi5kYXRhLnByb3BzIH07XG4gIHNjcmlwdC5jb25maWcgPSB7IC4uLnNjcmlwdC5jb25maWcsIC4uLmRhdGEuY29uZmlnIH07XG4gIHNjcmlwdC5jdXN0b20gPSB7IC4uLnNjcmlwdC5jdXN0b20sIC4uLmRhdGEuY3VzdG9tIH07XG4gIGF3YWl0IHN0b3JhZ2Uuc2NyaXB0LmR1bXAoc2NyaXB0KTtcbiAgcmV0dXJuIHNlbmRDbWQoQ01EX1NDUklQVF9VUERBVEUsIHsgd2hlcmU6IHsgaWQgfSwgdXBkYXRlOiBzY3JpcHQgfSk7XG59XG5cbi8qKiBAcmV0dXJuIHtQcm9taXNlPHsgaXNOZXc/LCB1cGRhdGUsIHdoZXJlIH0+fSAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlU2NyaXB0KHNyYykge1xuICBjb25zdCBtZXRhID0gcGFyc2VNZXRhKHNyYy5jb2RlKTtcbiAgaWYgKCFtZXRhLm5hbWUpIHRocm93IGAke2kxOG4oJ21zZ0ludmFsaWRTY3JpcHQnKX1cXG4ke2kxOG4oJ2xhYmVsTm9OYW1lJyl9YDtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHVwZGF0ZToge1xuICAgICAgbWVzc2FnZTogc3JjLm1lc3NhZ2UgPT0gbnVsbCA/IGkxOG4oJ21zZ1VwZGF0ZWQnKSA6IHNyYy5tZXNzYWdlIHx8ICcnLFxuICAgIH0sXG4gIH07XG4gIGxldCBjbWQgPSBDTURfU0NSSVBUX1VQREFURTtcbiAgbGV0IHNjcmlwdDtcbiAgY29uc3Qgb2xkU2NyaXB0ID0gYXdhaXQgZ2V0U2NyaXB0KHsgaWQ6IHNyYy5pZCwgbWV0YSB9KTtcbiAgaWYgKG9sZFNjcmlwdCkge1xuICAgIGlmIChzcmMuaXNOZXcpIHRocm93IGkxOG4oJ21zZ05hbWVzcGFjZUNvbmZsaWN0Jyk7XG4gICAgc2NyaXB0ID0geyAuLi5vbGRTY3JpcHQgfTtcbiAgfSBlbHNlIHtcbiAgICAoeyBzY3JpcHQgfSA9IG5ld1NjcmlwdCgpKTtcbiAgICBjbWQgPSBDTURfU0NSSVBUX0FERDtcbiAgICByZXN1bHQuaXNOZXcgPSB0cnVlO1xuICAgIHJlc3VsdC51cGRhdGUubWVzc2FnZSA9IGkxOG4oJ21zZ0luc3RhbGxlZCcpO1xuICB9XG4gIHNjcmlwdC5jb25maWcgPSB7XG4gICAgLi4uc2NyaXB0LmNvbmZpZyxcbiAgICAuLi5zcmMuY29uZmlnLFxuICAgIHJlbW92ZWQ6IDAsIC8vIGZvcmNlIHJlc2V0IGByZW1vdmVkYCBzaW5jZSB0aGlzIGlzIGFuIGluc3RhbGxhdGlvblxuICB9O1xuICBzY3JpcHQuY3VzdG9tID0ge1xuICAgIC4uLnNjcmlwdC5jdXN0b20sXG4gICAgLi4uc3JjLmN1c3RvbSxcbiAgfTtcbiAgc2NyaXB0LnByb3BzID0ge1xuICAgIC4uLnNjcmlwdC5wcm9wcyxcbiAgICBsYXN0TW9kaWZpZWQ6IERhdGUubm93KCksXG4gICAgbGFzdFVwZGF0ZWQ6IERhdGUubm93KCksXG4gICAgLi4uc3JjLnByb3BzLFxuICB9O1xuICBzY3JpcHQubWV0YSA9IG1ldGE7XG4gIGlmICghbWV0YS5ob21lcGFnZVVSTCAmJiAhc2NyaXB0LmN1c3RvbS5ob21lcGFnZVVSTCAmJiBpc1JlbW90ZShzcmMuZnJvbSkpIHtcbiAgICBzY3JpcHQuY3VzdG9tLmhvbWVwYWdlVVJMID0gc3JjLmZyb207XG4gIH1cbiAgaWYgKGlzUmVtb3RlKHNyYy51cmwpKSBzY3JpcHQuY3VzdG9tLmxhc3RJbnN0YWxsVVJMID0gc3JjLnVybDtcbiAgaWYgKHNyYy5wb3NpdGlvbikgc2NyaXB0LnByb3BzLnBvc2l0aW9uID0gK3NyYy5wb3NpdGlvbjtcbiAgYnVpbGRQYXRoTWFwKHNjcmlwdCwgc3JjLnVybCk7XG4gIGF3YWl0IHNhdmVTY3JpcHQoc2NyaXB0LCBzcmMuY29kZSk7XG4gIGZldGNoUmVzb3VyY2VzKHNjcmlwdCwgc3JjKTtcbiAgT2JqZWN0LmFzc2lnbihyZXN1bHQudXBkYXRlLCBzY3JpcHQsIHNyYy51cGRhdGUpO1xuICByZXN1bHQud2hlcmUgPSB7IGlkOiBzY3JpcHQucHJvcHMuaWQgfTtcbiAgc2VuZENtZChjbWQsIHJlc3VsdCk7XG4gIHBsdWdpbkV2ZW50cy5lbWl0KCdzY3JpcHRDaGFuZ2VkJywgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIEByZXR1cm4ge09iamVjdH0gKi9cbmZ1bmN0aW9uIGJ1aWxkUGF0aE1hcChzY3JpcHQsIGJhc2UpIHtcbiAgY29uc3QgeyBtZXRhIH0gPSBzY3JpcHQ7XG4gIGNvbnN0IGJhc2VVcmwgPSBiYXNlIHx8IHNjcmlwdC5jdXN0b20ubGFzdEluc3RhbGxVUkw7XG4gIGNvbnN0IHBhdGhNYXAgPSBiYXNlVXJsID8gW1xuICAgIC4uLm1ldGEucmVxdWlyZSxcbiAgICAuLi5PYmplY3QudmFsdWVzKG1ldGEucmVzb3VyY2VzKSxcbiAgICBtZXRhLmljb24sXG4gIF0ucmVkdWNlKChtYXAsIGtleSkgPT4ge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGNvbnN0IGZ1bGxVcmwgPSBnZXRGdWxsVXJsKGtleSwgYmFzZVVybCk7XG4gICAgICBpZiAoZnVsbFVybCAhPT0ga2V5KSBtYXBba2V5XSA9IGZ1bGxVcmw7XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG4gIH0sIHt9KSA6IHt9O1xuICBzY3JpcHQuY3VzdG9tLnBhdGhNYXAgPSBwYXRoTWFwO1xuICByZXR1cm4gcGF0aE1hcDtcbn1cblxuLyoqIEByZXR1cm4ge1Byb21pc2U8P3N0cmluZz59IHJlc29sdmVzIHRvIGVycm9yIHRleHQgaWYgYHJlc291cmNlQ2FjaGVgIGlzIGFic2VudCAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUmVzb3VyY2VzKHNjcmlwdCwgcmVzb3VyY2VDYWNoZSwgcmVxT3B0aW9ucykge1xuICBjb25zdCB7IGN1c3RvbTogeyBwYXRoTWFwIH0sIG1ldGEgfSA9IHNjcmlwdDtcbiAgY29uc3Qgc25hdGNoID0gKHVybCwgdHlwZSwgdmFsaWRhdG9yKSA9PiB7XG4gICAgdXJsID0gcGF0aE1hcFt1cmxdIHx8IHVybDtcbiAgICBjb25zdCBjb250ZW50cyA9IHJlc291cmNlQ2FjaGU/Llt0eXBlXT8uW3VybF07XG4gICAgcmV0dXJuIGNvbnRlbnRzICE9IG51bGwgJiYgIXZhbGlkYXRvclxuICAgICAgPyBzdG9yYWdlW3R5cGVdLnNldCh1cmwsIGNvbnRlbnRzKSAmJiBudWxsXG4gICAgICA6IHN0b3JhZ2VbdHlwZV0uZmV0Y2godXJsLCByZXFPcHRpb25zLCB2YWxpZGF0b3IpLmNhdGNoKGVyciA9PiBlcnIpO1xuICB9O1xuICBjb25zdCBlcnJvcnMgPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgLi4ubWV0YS5yZXF1aXJlLm1hcCh1cmwgPT4gc25hdGNoKHVybCwgJ3JlcXVpcmUnKSksXG4gICAgLi4uT2JqZWN0LnZhbHVlcyhtZXRhLnJlc291cmNlcykubWFwKHVybCA9PiBzbmF0Y2godXJsLCAnY2FjaGUnKSksXG4gICAgaXNSZW1vdGUobWV0YS5pY29uKSAmJiBzbmF0Y2gobWV0YS5pY29uLCAnY2FjaGUnLCB2YWxpZGF0ZUltYWdlKSxcbiAgXSk7XG4gIGlmICghcmVzb3VyY2VDYWNoZT8uaWdub3JlRGVwc0Vycm9ycykge1xuICAgIGNvbnN0IGVycm9yID0gZXJyb3JzLm1hcChmb3JtYXRIdHRwRXJyb3IpOjp0cnVlSm9pbignXFxuJyk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gaTE4bignbXNnRXJyb3JGZXRjaGluZ1Jlc291cmNlJyk7XG4gICAgICBzZW5kQ21kKENNRF9TQ1JJUFRfVVBEQVRFLCB7XG4gICAgICAgIHVwZGF0ZTogeyBlcnJvciwgbWVzc2FnZSB9LFxuICAgICAgICB3aGVyZTogeyBpZDogc2NyaXB0LnByb3BzLmlkIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBgJHttZXNzYWdlfVxcbiR7ZXJyb3J9YDtcbiAgICB9XG4gIH1cbn1cblxuLyoqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IHJlc29sdmVzIG9uIHN1Y2Nlc3MsIHJlamVjdHMgb24gZXJyb3IgKi9cbmZ1bmN0aW9uIHZhbGlkYXRlSW1hZ2UodXJsLCBidWYsIHR5cGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBibG9iVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbYnVmXSwgeyB0eXBlIH0pKTtcbiAgICBjb25zdCBvbkRvbmUgPSAoZSkgPT4ge1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVXJsKTtcbiAgICAgIGlmIChlLnR5cGUgPT09ICdsb2FkJykgcmVzb2x2ZSgpO1xuICAgICAgZWxzZSByZWplY3QoYElNQUdFX0VSUk9SOiAke3VybH1gKTtcbiAgICB9O1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uub25sb2FkID0gb25Eb25lO1xuICAgIGltYWdlLm9uZXJyb3IgPSBvbkRvbmU7XG4gICAgaW1hZ2Uuc3JjID0gYmxvYlVybDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEh0dHBFcnJvcihlKSB7XG4gIHJldHVybiBlICYmIFtlLnN0YXR1cyAmJiBgSFRUUCR7ZS5zdGF0dXN9YCwgZS51cmxdOjp0cnVlSm9pbignICcpIHx8IGU7XG59XG5cbmxldCBfdmFjdXVtaW5nO1xuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWN1dW0oZGF0YSkge1xuICBpZiAoX3ZhY3V1bWluZykgcmV0dXJuIF92YWN1dW1pbmc7XG4gIGxldCBudW1GaXhlcyA9IDA7XG4gIGxldCByZXNvbHZlU2VsZjtcbiAgX3ZhY3V1bWluZyA9IG5ldyBQcm9taXNlKHIgPT4geyByZXNvbHZlU2VsZiA9IHI7IH0pO1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgY29uc3QgdG9GZXRjaCA9IFtdO1xuICBjb25zdCBrZXlzVG9SZW1vdmUgPSBbXTtcbiAgY29uc3QgdmFsdWVLZXlzID0ge307XG4gIGNvbnN0IGNhY2hlS2V5cyA9IHt9O1xuICBjb25zdCByZXF1aXJlS2V5cyA9IHt9O1xuICBjb25zdCBjb2RlS2V5cyA9IHt9O1xuICBjb25zdCBtYXBwaW5ncyA9IFtcbiAgICBbc3RvcmFnZS52YWx1ZSwgdmFsdWVLZXlzXSxcbiAgICBbc3RvcmFnZS5jYWNoZSwgY2FjaGVLZXlzXSxcbiAgICBbc3RvcmFnZS5yZXF1aXJlLCByZXF1aXJlS2V5c10sXG4gICAgW3N0b3JhZ2UuY29kZSwgY29kZUtleXNdLFxuICBdO1xuICBpZiAoIWRhdGEpIGRhdGEgPSBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XG4gIGRhdGE6OmZvckVhY2hLZXkoKGtleSkgPT4ge1xuICAgIG1hcHBpbmdzLnNvbWUoKFtzdWJzdG9yZSwgbWFwXSkgPT4ge1xuICAgICAgY29uc3QgeyBwcmVmaXggfSA9IHN1YnN0b3JlO1xuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKHByZWZpeCkpIHtcbiAgICAgICAgLy8gLTEgZm9yIHVudG91Y2hlZCwgMSBmb3IgdG91Y2hlZCwgMiBmb3IgbWlzc2luZ1xuICAgICAgICBtYXBba2V5LnNsaWNlKHByZWZpeC5sZW5ndGgpXSA9IC0xO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IHRvdWNoID0gKG9iaiwga2V5LCBzY3JpcHRJZCkgPT4ge1xuICAgIGlmIChvYmpba2V5XSA8IDApIHtcbiAgICAgIG9ialtrZXldID0gMTtcbiAgICB9IGVsc2UgaWYgKCFvYmpba2V5XSkge1xuICAgICAgb2JqW2tleV0gPSAyICsgc2NyaXB0SWQ7XG4gICAgfVxuICB9O1xuICBzdG9yZS5zY3JpcHRzLmZvckVhY2goKHNjcmlwdCkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHNjcmlwdC5wcm9wcztcbiAgICB0b3VjaChjb2RlS2V5cywgaWQsIGlkKTtcbiAgICB0b3VjaCh2YWx1ZUtleXMsIGlkLCBpZCk7XG4gICAgaWYgKCFzY3JpcHQuY3VzdG9tLnBhdGhNYXApIGJ1aWxkUGF0aE1hcChzY3JpcHQpO1xuICAgIGNvbnN0IHsgcGF0aE1hcCB9ID0gc2NyaXB0LmN1c3RvbTtcbiAgICBzY3JpcHQubWV0YS5yZXF1aXJlLmZvckVhY2goKHVybCkgPT4ge1xuICAgICAgdG91Y2gocmVxdWlyZUtleXMsIHBhdGhNYXBbdXJsXSB8fCB1cmwsIGlkKTtcbiAgICB9KTtcbiAgICBzY3JpcHQubWV0YS5yZXNvdXJjZXM6OmZvckVhY2hWYWx1ZSgodXJsKSA9PiB7XG4gICAgICB0b3VjaChjYWNoZUtleXMsIHBhdGhNYXBbdXJsXSB8fCB1cmwsIGlkKTtcbiAgICB9KTtcbiAgICBjb25zdCB7IGljb24gfSA9IHNjcmlwdC5tZXRhO1xuICAgIGlmIChpc1JlbW90ZShpY29uKSkge1xuICAgICAgY29uc3QgZnVsbFVybCA9IHBhdGhNYXBbaWNvbl0gfHwgaWNvbjtcbiAgICAgIHRvdWNoKGNhY2hlS2V5cywgZnVsbFVybCwgaWQpO1xuICAgIH1cbiAgfSk7XG4gIG1hcHBpbmdzLmZvckVhY2goKFtzdWJzdG9yZSwgbWFwXSkgPT4ge1xuICAgIG1hcDo6Zm9yRWFjaEVudHJ5KChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgLy8gcmVkdW5kYW50IHZhbHVlXG4gICAgICAgIGtleXNUb1JlbW92ZS5wdXNoKHN1YnN0b3JlLmdldEtleShrZXkpKTtcbiAgICAgICAgbnVtRml4ZXMgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPj0gMiAmJiBzdWJzdG9yZS5mZXRjaCkge1xuICAgICAgICAvLyBtaXNzaW5nIHJlc291cmNlXG4gICAgICAgIGtleXNUb1JlbW92ZS5wdXNoKHN0b3JhZ2UubW9kLmdldEtleShrZXkpKTtcbiAgICAgICAgdG9GZXRjaC5wdXNoKHN1YnN0b3JlLmZldGNoKGtleSkuY2F0Y2goZXJyID0+IGAke1xuICAgICAgICAgIGdldFNjcmlwdE5hbWUoZ2V0U2NyaXB0QnlJZCh2YWx1ZSAtIDIpKVxuICAgICAgICB9OiAke1xuICAgICAgICAgIGZvcm1hdEh0dHBFcnJvcihlcnIpXG4gICAgICAgIH1gKSk7XG4gICAgICAgIG51bUZpeGVzICs9IDE7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBpZiAobnVtRml4ZXMpIHtcbiAgICBhd2FpdCBzdG9yYWdlLmJhc2UucmVtb3ZlTXVsdGkoa2V5c1RvUmVtb3ZlKTsgLy8gUmVtb3ZpbmcgYG1vZGAgYmVmb3JlIGZldGNoaW5nXG4gICAgcmVzdWx0LmVycm9ycyA9IChhd2FpdCBQcm9taXNlLmFsbCh0b0ZldGNoKSkuZmlsdGVyKEJvb2xlYW4pO1xuICB9XG4gIF92YWN1dW1pbmcgPSBudWxsO1xuICByZXN1bHQuZml4ZXMgPSBudW1GaXhlcztcbiAgcmVzb2x2ZVNlbGYocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIEB0eXBlZGVmIFZNU2NyaXB0XG4gKiBAcHJvcGVydHkge1ZNU2NyaXB0Q29uZmlnfSBjb25maWdcbiAqIEBwcm9wZXJ0eSB7Vk1TY3JpcHRDdXN0b219IGN1c3RvbVxuICogQHByb3BlcnR5IHtWTVNjcmlwdE1ldGF9IG1ldGFcbiAqIEBwcm9wZXJ0eSB7Vk1TY3JpcHRQcm9wc30gcHJvcHNcbiAqL1xuLyoqIEB0eXBlZGVmIFZNU2NyaXB0Q29uZmlnICpcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZW5hYmxlZCAtIHN0b3JlZCBhcyAwIG9yIDFcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gcmVtb3ZlZCAtIHN0b3JlZCBhcyAwIG9yIDFcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2hvdWxkVXBkYXRlIC0gc3RvcmVkIGFzIDAgb3IgMVxuICogQHByb3BlcnR5IHtCb29sZWFuIHwgbnVsbH0gbm90aWZ5VXBkYXRlcyAtIHN0b3JlZCBhcyAwIG9yIDEgb3IgbnVsbCAoZGVmYXVsdCkgd2hpY2ggbWVhbnMgXCJ1c2UgZ2xvYmFsIHNldHRpbmdcIlxuICovXG4vKiogQHR5cGVkZWYgVk1TY3JpcHRDdXN0b20gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkb3dubG9hZFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGhvbWVwYWdlVVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFzdEluc3RhbGxVUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cGRhdGVVUkxcbiAqIEBwcm9wZXJ0eSB7J2F1dG8nIHwgJ3BhZ2UnIHwgJ2NvbnRlbnQnfSBpbmplY3RJbnRvXG4gKiBAcHJvcGVydHkge251bGwgfCAxIHwgMH0gbm9mcmFtZXMgLSBudWxsIG9yIGFic2VuY2UgPT0gZGVmYXVsdCAoc2NyaXB0J3MgdmFsdWUpXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBleGNsdWRlXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBleGNsdWRlTWF0Y2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGluY2x1ZGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IG1hdGNoXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9yaWdFeGNsdWRlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9yaWdFeGNsdWRlTWF0Y2hcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JpZ0luY2x1ZGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JpZ01hdGNoXG4gKiBAcHJvcGVydHkge09iamVjdH0gcGF0aE1hcFxuICogQHByb3BlcnR5IHtWTVNjcmlwdFJ1bkF0fSBydW5BdFxuICovXG4vKiogQHR5cGVkZWYgVk1TY3JpcHRNZXRhICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRvd25sb2FkVVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBleGNsdWRlXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBleGNsdWRlTWF0Y2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGdyYW50XG4gKiBAcHJvcGVydHkge3N0cmluZ30gaG9tZXBhZ2VVUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBpbmNsdWRlXG4gKiBAcHJvcGVydHkgeydhdXRvJyB8ICdwYWdlJyB8ICdjb250ZW50J30gaW5qZWN0SW50b1xuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gbWF0Y2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lc3BhY2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG5vZnJhbWVzXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSByZXF1aXJlXG4gKiBAcHJvcGVydHkge09iamVjdH0gcmVzb3VyY2VzXG4gKiBAcHJvcGVydHkge1ZNU2NyaXB0UnVuQXR9IHJ1bkF0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gc3VwcG9ydFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHZlcnNpb25cbiAqL1xuLyoqIEB0eXBlZGVmIFZNU2NyaXB0UHJvcHMgKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGlkXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGFzdE1vZGlmaWVkXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGFzdFVwZGF0ZWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwb3NpdGlvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IHVyaVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHV1aWRcbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7XG4gICAnZG9jdW1lbnQtc3RhcnQnIHwgJ2RvY3VtZW50LWJvZHknIHwgJ2RvY3VtZW50LWVuZCcgfCAnZG9jdW1lbnQtaWRsZSdcbiB9IFZNU2NyaXB0UnVuQXRcbiAqL1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RXZlbnRFbWl0dGVyKCkge1xuICBjb25zdCBldmVudHMgPSB7fTtcbiAgcmV0dXJuIHsgb24sIG9mZiwgZmlyZSB9O1xuXG4gIGZ1bmN0aW9uIG9uKHR5cGUsIGZ1bmMpIHtcbiAgICBsZXQgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICBpZiAoIWxpc3QpIHtcbiAgICAgIGxpc3QgPSBbXTtcbiAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3Q7XG4gICAgfVxuICAgIGxpc3QucHVzaChmdW5jKTtcbiAgfVxuICBmdW5jdGlvbiBvZmYodHlwZSwgZnVuYykge1xuICAgIGNvbnN0IGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgaWYgKGxpc3QpIHtcbiAgICAgIGNvbnN0IGkgPSBsaXN0LmluZGV4T2YoZnVuYyk7XG4gICAgICBpZiAoaSA+PSAwKSBsaXN0LnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZmlyZSh0eXBlLCBkYXRhKSB7XG4gICAgY29uc3QgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICBpZiAobGlzdCkge1xuICAgICAgbGlzdC5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgICAgIGZ1bmMoZGF0YSwgdHlwZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHBvc3RJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxucG9zdEluaXRpYWxpemUucHVzaCgoKSA9PiB7XG4gIGJyb3dzZXIuY29tbWFuZHMub25Db21tYW5kLmFkZExpc3RlbmVyKChjbWQpID0+IHtcbiAgICBpZiAoY21kID09PSAnbmV3U2NyaXB0Jykge1xuICAgICAgY29tbWFuZHMuT3BlbkVkaXRvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByb3V0ZSA9IGNtZCA9PT0gJ3NldHRpbmdzJyA/IGAjJHtjbWR9YCA6ICcnO1xuICAgICAgY29tbWFuZHMuVGFiT3Blbih7IHVybDogYC9vcHRpb25zL2luZGV4Lmh0bWwke3JvdXRlfWAgfSk7XG4gICAgfVxuICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgaTE4biwgbm9vcCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IElOSkVDVEFCTEVfVEFCX1VSTF9SRSB9IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQgeyBvYmplY3RQaWNrIH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcbmltcG9ydCB7IHBvc3RJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzLCBmb3JFYWNoVGFiIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IGdldE9wdGlvbiwgaG9va09wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgdGVzdEJsYWNrbGlzdCB9IGZyb20gJy4vdGVzdGVyJztcblxuLy8gc3RvcmluZyBpbiBgY2FjaGVgIG9ubHkgZm9yIHRoZSBkdXJhdGlvbiBvZiBwYWdlIGxvYWQgaW4gY2FzZSB0aGVyZSBhcmUgMisgaWRlbnRpY2FsIHVybHNcbmNvbnN0IENBQ0hFX0RVUkFUSU9OID0gMTAwMDtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICBhc3luYyBHZXRJbWFnZURhdGEodXJsKSB7XG4gICAgY29uc3Qga2V5ID0gYEdldEltYWdlRGF0YToke3VybH1gO1xuICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KVxuICAgICAgfHwgY2FjaGUucHV0KGtleSwgbG9hZEltYWdlRGF0YSh1cmwsIHsgYmFzZTY0OiB0cnVlIH0pLmNhdGNoKG5vb3ApLCBDQUNIRV9EVVJBVElPTik7XG4gIH0sXG4gIFNldEJhZGdlOiBzZXRCYWRnZSxcbn0pO1xuXG4vLyBGaXJlZm94IEFuZHJvaWQgZG9lcyBub3Qgc3VwcG9ydCBzdWNoIEFQSXMsIHVzZSBub29wXG5cbmNvbnN0IGJyb3dzZXJBY3Rpb24gPSAoKCkgPT4ge1xuICBjb25zdCB7IGNocm9tZSB9ID0gZ2xvYmFsO1xuICAvLyBVc2luZyBgY2hyb21lYCBuYW1lc3BhY2UgaW4gb3JkZXIgdG8gc2tpcCBvdXIgYnJvd3Nlci5qcyBwb2x5ZmlsbCBpbiBDaHJvbWVcbiAgY29uc3QgYXBpID0gY2hyb21lLmJyb3dzZXJBY3Rpb247XG4gIC8vIFN1cHByZXNzIHRoZSBcIm5vIHRhYiBpZFwiIGVycm9yIHdoZW4gc2V0dGluZyBhbiBpY29uL2JhZGdlIGFzIGl0IGNhbm5vdCBiZSByZWxpYWJseSBwcmV2ZW50ZWRcbiAgY29uc3QgaWdub3JlRXJyb3JzID0gKCkgPT4gY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yO1xuICAvLyBTb21lIG1ldGhvZHMgbGlrZSBzZXRCYWRnZVRleHQgYWRkZWQgY2FsbGJhY2tzIG9ubHkgaW4gQ2hyb21lIDY3Ky5cbiAgY29uc3QgbWFrZU1ldGhvZCA9IGZuID0+ICguLi5hcmdzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGFwaTo6Zm4oLi4uYXJncywgaWdub3JlRXJyb3JzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhcGk6OmZuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIG9iamVjdFBpY2soYXBpLCBbXG4gICAgJ3NldEljb24nLFxuICAgICdzZXRCYWRnZVRleHQnLFxuICAgICdzZXRCYWRnZUJhY2tncm91bmRDb2xvcicsXG4gICAgJ3NldFRpdGxlJyxcbiAgXSwgZm4gPT4gKGZuID8gbWFrZU1ldGhvZChmbikgOiBub29wKSk7XG59KSgpO1xuXG5jb25zdCBiYWRnZXMgPSB7fTtcbmNvbnN0IEtFWV9JU19BUFBMSUVEID0gJ2lzQXBwbGllZCc7XG5jb25zdCBLRVlfU0hPV19CQURHRSA9ICdzaG93QmFkZ2UnO1xuY29uc3QgS0VZX0JBREdFX0NPTE9SID0gJ2JhZGdlQ29sb3InO1xuY29uc3QgS0VZX0JBREdFX0NPTE9SX0JMT0NLRUQgPSAnYmFkZ2VDb2xvckJsb2NrZWQnO1xuLyoqIEB0eXBlIGJvb2xlYW4gKi9cbmxldCBpc0FwcGxpZWQ7XG4vKiogQHR5cGUgVk1CYWRnZU1vZGUgKi9cbmxldCBzaG93QmFkZ2U7XG4vKiogQHR5cGUgc3RyaW5nICovXG5sZXQgYmFkZ2VDb2xvcjtcbi8qKiBAdHlwZSBzdHJpbmcgKi9cbmxldCBiYWRnZUNvbG9yQmxvY2tlZDtcbi8qKiBAdHlwZSBzdHJpbmcgKi9cbmxldCB0aXRsZUJsYWNrbGlzdGVkO1xuLyoqIEB0eXBlIHN0cmluZyAqL1xubGV0IHRpdGxlTm9uaW5qZWN0YWJsZTtcblxuLy8gV2UnbGwgY2FjaGUgdGhlIGljb24gZGF0YSBpbiBDaHJvbWUgYXMgaXQgZG9lc24ndCBjYWNoZSB0aGUgZGF0YSBhbmQgdGFrZXMgdXAgdG8gNDBtc1xuLy8gaW4gb3VyIGJhY2tncm91bmQgcGFnZSBjb250ZXh0IHRvIHNldCB0aGUgNCBpY29uIHNpemVzIGZvciBlYWNoIG5ldyB0YWIgb3BlbmVkXG5jb25zdCBpY29uQ2FjaGUgPSAhSVNfRklSRUZPWCAmJiB7fTtcblxuaG9va09wdGlvbnMoKGNoYW5nZXMpID0+IHtcbiAgbGV0IHY7XG4gIGNvbnN0IGpvYnMgPSBbXTtcbiAgaWYgKCh2ID0gY2hhbmdlc1tLRVlfSVNfQVBQTElFRF0pICE9IG51bGwpIHtcbiAgICBpc0FwcGxpZWQgPSB2O1xuICAgIHNldEljb24oKTsgLy8gY2hhbmdlIHRoZSBkZWZhdWx0IGljb25cbiAgICBqb2JzLnB1c2goc2V0SWNvbik7IC8vIGNoYW5nZSB0aGUgY3VycmVudCB0YWJzJyBpY29uc1xuICB9XG4gIGlmICgodiA9IGNoYW5nZXNbS0VZX1NIT1dfQkFER0VdKSAhPSBudWxsKSB7XG4gICAgc2hvd0JhZGdlID0gdjtcbiAgICBqb2JzLnB1c2godXBkYXRlQmFkZ2UpO1xuICB9XG4gIGlmICgodiA9IGNoYW5nZXNbS0VZX0JBREdFX0NPTE9SXSkgJiYgKGJhZGdlQ29sb3IgPSB2KVxuICB8fCAodiA9IGNoYW5nZXNbS0VZX0JBREdFX0NPTE9SX0JMT0NLRURdKSAmJiAoYmFkZ2VDb2xvckJsb2NrZWQgPSB2KSkge1xuICAgIGpvYnMucHVzaCh1cGRhdGVCYWRnZUNvbG9yKTtcbiAgfVxuICBpZiAoJ2JsYWNrbGlzdCcgaW4gY2hhbmdlcykge1xuICAgIGpvYnMucHVzaCh1cGRhdGVTdGF0ZSk7XG4gIH1cbiAgaWYgKGpvYnMubGVuZ3RoKSB7XG4gICAgZm9yRWFjaFRhYih0YWIgPT4gam9icy5mb3JFYWNoKGZuID0+IGZuKHRhYikpKTtcbiAgfVxufSk7XG5cbnBvc3RJbml0aWFsaXplLnB1c2goKCkgPT4ge1xuICBpc0FwcGxpZWQgPSBnZXRPcHRpb24oS0VZX0lTX0FQUExJRUQpO1xuICBzaG93QmFkZ2UgPSBnZXRPcHRpb24oS0VZX1NIT1dfQkFER0UpO1xuICBiYWRnZUNvbG9yID0gZ2V0T3B0aW9uKEtFWV9CQURHRV9DT0xPUik7XG4gIGJhZGdlQ29sb3JCbG9ja2VkID0gZ2V0T3B0aW9uKEtFWV9CQURHRV9DT0xPUl9CTE9DS0VEKTtcbiAgdGl0bGVCbGFja2xpc3RlZCA9IGkxOG4oJ2ZhaWx1cmVSZWFzb25CbGFja2xpc3RlZCcpO1xuICB0aXRsZU5vbmluamVjdGFibGUgPSBpMThuKCdmYWlsdXJlUmVhc29uTm9uaW5qZWN0YWJsZScpO1xuICBmb3JFYWNoVGFiKHVwZGF0ZVN0YXRlKTtcbiAgaWYgKCFpc0FwcGxpZWQpIHNldEljb24oKTsgLy8gc2V0cyB0aGUgZGltbWVkIGljb24gYXMgZGVmYXVsdFxufSk7XG5cbmJyb3dzZXIudGFicy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoKGlkKSA9PiB7XG4gIGRlbGV0ZSBiYWRnZXNbaWRdO1xufSk7XG5cbmJyb3dzZXIudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBpbmZvLCB0YWIpID0+IHtcbiAgY29uc3QgeyB1cmwgfSA9IGluZm87XG4gIGlmIChpbmZvLnN0YXR1cyA9PT0gJ2xvYWRpbmcnXG4gICAgICAvLyBhdCBsZWFzdCBhYm91dDpuZXd0YWIgaW4gRmlyZWZveCBtYXkgb3BlbiB3aXRob3V0ICdsb2FkaW5nJyBzdGF0dXNcbiAgICAgIHx8IGluZm8uZmF2SWNvblVybCAmJiB0YWIudXJsLnN0YXJ0c1dpdGgoJ2Fib3V0OicpKSB7XG4gICAgdXBkYXRlU3RhdGUodGFiLCB1cmwpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc2V0QmFkZ2UoaWRzLCB7IHRhYiwgZnJhbWVJZCB9KSB7XG4gIGNvbnN0IHRhYklkID0gdGFiLmlkO1xuICBjb25zdCBkYXRhID0gYmFkZ2VzW3RhYklkXSB8fCB7fTtcbiAgaWYgKCFkYXRhLmlkTWFwIHx8IGZyYW1lSWQgPT09IDApIHtcbiAgICAvLyAxKSBrZWVwaW5nIGRhdGEgb2JqZWN0IHRvIHByZXNlcnZlIGRhdGEuYmxvY2tlZFxuICAgIC8vIDIpICd0b3RhbCcgYW5kICd1bmlxdWUnIG11c3QgbWF0Y2ggc2hvd0JhZGdlIGluIG9wdGlvbnMtZGVmYXVsdHMuanNcbiAgICBkYXRhLnRvdGFsID0gMDtcbiAgICBkYXRhLnVuaXF1ZSA9IDA7XG4gICAgZGF0YS5pZE1hcCA9IHt9O1xuICAgIGJhZGdlc1t0YWJJZF0gPSBkYXRhO1xuICB9XG4gIGRhdGEudG90YWwgKz0gaWRzLmxlbmd0aDtcbiAgaWYgKGlkcykge1xuICAgIGlkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgZGF0YS5pZE1hcFtpZF0gPSAxO1xuICAgIH0pO1xuICAgIGRhdGEudW5pcXVlID0gT2JqZWN0LmtleXMoZGF0YS5pZE1hcCkubGVuZ3RoO1xuICB9XG4gIHVwZGF0ZUJhZGdlQ29sb3IodGFiLCBkYXRhKTtcbiAgdXBkYXRlQmFkZ2UodGFiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQmFkZ2UodGFiLCBkYXRhID0gYmFkZ2VzW3RhYi5pZF0pIHtcbiAgaWYgKGRhdGEpIHtcbiAgICBicm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7XG4gICAgICB0ZXh0OiBgJHtkYXRhW3Nob3dCYWRnZV0gfHwgJyd9YCxcbiAgICAgIHRhYklkOiB0YWIuaWQsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQmFkZ2VDb2xvcih0YWIsIGRhdGEgPSBiYWRnZXNbdGFiLmlkXSkge1xuICBpZiAoZGF0YSkge1xuICAgIGJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3Ioe1xuICAgICAgY29sb3I6IGRhdGEuYmxvY2tlZCA/IGJhZGdlQ29sb3JCbG9ja2VkIDogYmFkZ2VDb2xvcixcbiAgICAgIHRhYklkOiB0YWIuaWQsXG4gICAgfSk7XG4gIH1cbn1cblxuLy8gQ2hyb21lIDc5KyB1c2VzIHBlbmRpbmdVcmwgd2hpbGUgdGhlIHRhYiBjb25uZWN0cyB0byB0aGUgbmV3bHkgbmF2aWdhdGVkIFVSTFxuLy8gaHR0cHM6Ly9ncm91cHMuZ29vZ2xlLmNvbS9hL2Nocm9taXVtLm9yZy9mb3J1bS8jIXRvcGljL2Nocm9taXVtLWV4dGVuc2lvbnMvNXp1X1BUMGFybHNcbmZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHRhYiwgdXJsID0gdGFiLnBlbmRpbmdVcmwgfHwgdGFiLnVybCkge1xuICBjb25zdCB0YWJJZCA9IHRhYi5pZDtcbiAgY29uc3QgaW5qZWN0YWJsZSA9IElOSkVDVEFCTEVfVEFCX1VSTF9SRS50ZXN0KHVybCk7XG4gIGNvbnN0IGJsYWNrbGlzdGVkID0gaW5qZWN0YWJsZSA/IHRlc3RCbGFja2xpc3QodXJsKSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgdGl0bGUgPSBibGFja2xpc3RlZCAmJiB0aXRsZUJsYWNrbGlzdGVkIHx8ICFpbmplY3RhYmxlICYmIHRpdGxlTm9uaW5qZWN0YWJsZSB8fCAnJztcbiAgLy8gaWYgdGhlIHVzZXIgdW5ibGFja2xpc3RlZCB0aGlzIHByZXZpb3VzbHkgYmxvY2tlZCB0YWIgaW4gc2V0dGluZ3MsXG4gIC8vIGJ1dCBkaWRuJ3QgcmVsb2FkIHRoZSB0YWIgeWV0LCB3ZSBuZWVkIHRvIHJlc3RvcmUgdGhlIGljb24gYW5kIHRoZSB0aXRsZVxuICBpZiAodGl0bGUgfHwgKGJhZGdlc1t0YWJJZF0gfHwge30pLmJsb2NrZWQpIHtcbiAgICBicm93c2VyQWN0aW9uLnNldFRpdGxlKHsgdGl0bGUsIHRhYklkIH0pO1xuICAgIGNvbnN0IGRhdGEgPSB0aXRsZSA/IHsgYmxvY2tlZDogdHJ1ZSB9IDoge307XG4gICAgYmFkZ2VzW3RhYklkXSA9IGRhdGE7XG4gICAgc2V0SWNvbih0YWIsIGRhdGEpO1xuICAgIHVwZGF0ZUJhZGdlKHRhYiwgZGF0YSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0SWNvbih0YWIgPSB7fSwgZGF0YSA9IHt9KSB7XG4gIC8vIG1vZGVybiBDaHJvbWUgYW5kIEZpcmVmb3ggdXNlIDE2LzMyLCBvdGhlciBicm93c2VycyBtYXkgc3RpbGwgdXNlIDE5LzM4IChlLmcuIFZpdmFsZGkpXG4gIGNvbnN0IG1vZCA9IGRhdGEuYmxvY2tlZCAmJiAnYicgfHwgIWlzQXBwbGllZCAmJiAndycgfHwgJyc7XG4gIGNvbnN0IGljb25EYXRhID0ge307XG4gIGZvciAoY29uc3QgbiBvZiBbMTYsIDE5LCAzMiwgMzhdKSB7XG4gICAgY29uc3QgcGF0aCA9IGAvcHVibGljL2ltYWdlcy9pY29uJHtufSR7bW9kfS5wbmdgO1xuICAgIGxldCBpY29uID0gaWNvbkNhY2hlID8gaWNvbkNhY2hlW3BhdGhdIDogcGF0aDtcbiAgICBpZiAoIWljb24pIHtcbiAgICAgIGljb24gPSBhd2FpdCBsb2FkSW1hZ2VEYXRhKHBhdGgpO1xuICAgICAgaWNvbkNhY2hlW3BhdGhdID0gaWNvbjtcbiAgICB9XG4gICAgaWNvbkRhdGFbbl0gPSBpY29uO1xuICB9XG4gIGJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XG4gICAgdGFiSWQ6IHRhYi5pZCxcbiAgICBbaWNvbkNhY2hlID8gJ2ltYWdlRGF0YScgOiAncGF0aCddOiBpY29uRGF0YSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRJbWFnZURhdGEocGF0aCwgeyBiYXNlNjQgfSA9IHt9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IHBhdGg7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gaW1nO1xuICAgICAgaWYgKCF3aWR0aCkgeyAvLyBGRiByZXBvcnRzIDAgZm9yIFNWR1xuICAgICAgICByZXNvbHZlKHBhdGgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgcmVzb2x2ZShiYXNlNjQgPyBjYW52YXMudG9EYXRhVVJMKCkgOiBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpKTtcbiAgICB9O1xuICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xuICB9KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2FjaGUgfSBmcm9tICcuL2NhY2hlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0RXZlbnRFbWl0dGVyIH0gZnJvbSAnLi9ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vb3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL3NlYXJjaCc7XG4iLCJleHBvcnQgY29uc3QgZXh0ZW5zaW9uUm9vdCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJy8nKTtcblxuZXhwb3J0IGNvbnN0IHByZUluaXRpYWxpemUgPSBbXTtcbmV4cG9ydCBjb25zdCBwb3N0SW5pdGlhbGl6ZSA9IFtdO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZShtYWluKSB7XG4gIGNvbnN0IHJ1biA9IGluaXQgPT4gKHR5cGVvZiBpbml0ID09PSAnZnVuY3Rpb24nID8gaW5pdCgpIDogaW5pdCk7XG4gIGF3YWl0IFByb21pc2UuYWxsKHByZUluaXRpYWxpemUubWFwKHJ1bikpO1xuICBhd2FpdCBydW4obWFpbik7XG4gIGF3YWl0IFByb21pc2UuYWxsKHBvc3RJbml0aWFsaXplLm1hcChydW4pKTtcbiAgcHJlSW5pdGlhbGl6ZS5sZW5ndGggPSAwO1xuICBwb3N0SW5pdGlhbGl6ZS5sZW5ndGggPSAwO1xufVxuIiwiaW1wb3J0IHsgZGVmYXVsdEltYWdlLCBpMThuLCBub29wIH0gZnJvbSAnIy9jb21tb24nO1xuXG5leHBvcnQgY29uc3QgY29tbWFuZHMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeShvcHRpb25zKSB7XG4gIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUob3B0aW9ucy5pZCB8fCAnVmlvbGVudE1vbmtleScsIHtcbiAgICB0eXBlOiAnYmFzaWMnLFxuICAgIGljb25Vcmw6IGRlZmF1bHRJbWFnZSxcbiAgICB0aXRsZTogYCR7b3B0aW9ucy50aXRsZX0gLSAke2kxOG4oJ2V4dE5hbWUnKX1gLFxuICAgIG1lc3NhZ2U6IG9wdGlvbnMuYm9keSxcbiAgICBpc0NsaWNrYWJsZTogb3B0aW9ucy5pc0NsaWNrYWJsZSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicm9hZGNhc3QoZGF0YSkge1xuICBmb3JFYWNoVGFiKCh0YWIpID0+IHtcbiAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBkYXRhKVxuICAgIC5jYXRjaChub29wKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZU9ySWdub3JlKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSguLi5hcmdzKS5jYXRjaChub29wKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZvckVhY2hUYWIoY2FsbGJhY2spIHtcbiAgY29uc3QgdGFicyA9IGF3YWl0IGJyb3dzZXIudGFicy5xdWVyeSh7fSk7XG4gIGxldCBpID0gMDtcbiAgZm9yIChjb25zdCB0YWIgb2YgdGFicykge1xuICAgIGNhbGxiYWNrKHRhYik7XG4gICAgaSArPSAxO1xuICAgIC8vIHdlJ2xsIHJ1biBhdCBtb3N0IHRoaXMgbWFueSB0YWJzIGluIG9uZSBldmVudCBsb29wIGN5Y2xlXG4gICAgLy8gYmVjYXVzZSBodW5kcmVkcyBvZiB0YWJzIHdvdWxkIG1ha2Ugb3VyIGV4dGVuc2lvbiBwcm9jZXNzIHVucmVzcG9uc2l2ZSxcbiAgICAvLyB0aGUgc2FtZSBwcm9jZXNzIHVzZWQgYnkgb3VyIG93biBwYWdlcyBsaWtlIHRoZSBiYWNrZ3JvdW5kIHBhZ2UsIGRhc2hib2FyZCwgb3IgcG9wdXBzXG4gICAgaWYgKGkgJSAyMCA9PT0gMCkgYXdhaXQgbmV3IFByb21pc2Uoc2V0VGltZW91dCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGkxOG4sIGRlZmF1bHRJbWFnZSwgc2VuZFRhYkNtZCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuY29uc3Qgb3BlbmVycyA9IHt9O1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59ICovXG4gIGFzeW5jIE5vdGlmaWNhdGlvbihkYXRhLCBzcmMsIGJnRXh0cmFzKSB7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uSWQgPSBhd2FpdCBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKHtcbiAgICAgIHR5cGU6ICdiYXNpYycsXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSB8fCAoSVNfRklSRUZPWCA/IGkxOG4oJ2V4dE5hbWUnKSA6ICcnKSwgLy8gQ2hyb21lIGFscmVhZHkgc2hvd3MgdGhlIG5hbWVcbiAgICAgIG1lc3NhZ2U6IGRhdGEudGV4dCxcbiAgICAgIGljb25Vcmw6IGRhdGEuaW1hZ2UgfHwgZGVmYXVsdEltYWdlLFxuICAgIH0pO1xuICAgIG9wZW5lcnNbbm90aWZpY2F0aW9uSWRdID0gYmdFeHRyYXM/Lm9uQ2xpY2sgfHwgc3JjLnRhYi5pZDtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uSWQ7XG4gIH0sXG4gIFJlbW92ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZCkge1xuICAgIHJldHVybiBicm93c2VyLm5vdGlmaWNhdGlvbnMuY2xlYXIobm90aWZpY2F0aW9uSWQpO1xuICB9LFxufSk7XG5cbmJyb3dzZXIubm90aWZpY2F0aW9ucy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKGlkKSA9PiB7XG4gIGNvbnN0IG9wZW5lcklkID0gb3BlbmVyc1tpZF07XG4gIGlmIChvcGVuZXJJZCA+PSAwKSB7XG4gICAgc2VuZFRhYkNtZChvcGVuZXJJZCwgJ05vdGlmaWNhdGlvbkNsaWNrJywgaWQpO1xuICB9XG4gIGlmICh0eXBlb2Ygb3BlbmVySWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcGVuZXJJZCgpO1xuICB9XG59KTtcblxuYnJvd3Nlci5ub3RpZmljYXRpb25zLm9uQ2xvc2VkLmFkZExpc3RlbmVyKChpZCkgPT4ge1xuICBjb25zdCBvcGVuZXJJZCA9IG9wZW5lcnNbaWRdO1xuICBkZWxldGUgb3BlbmVyc1tpZF07XG4gIGlmIChvcGVuZXJJZCA+PSAwKSB7XG4gICAgc2VuZFRhYkNtZChvcGVuZXJJZCwgJ05vdGlmaWNhdGlvbkNsb3NlJywgaWQpO1xuICB9XG59KTtcbiIsImltcG9ydCB7XG4gIGRlYm91bmNlLCBlbnN1cmVBcnJheSwgaW5pdEhvb2tzLCBub3JtYWxpemVLZXlzLFxufSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBtYXBFbnRyeSwgb2JqZWN0R2V0LCBvYmplY3RTZXQgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJyMvY29tbW9uL29wdGlvbnMtZGVmYXVsdHMnO1xuaW1wb3J0IHsgcHJlSW5pdGlhbGl6ZSB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgLyoqIEByZXR1cm4ge09iamVjdH0gKi9cbiAgR2V0QWxsT3B0aW9ucygpIHtcbiAgICByZXR1cm4gY29tbWFuZHMuR2V0T3B0aW9ucyhkZWZhdWx0cyk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtPYmplY3R9ICovXG4gIEdldE9wdGlvbnMoZGF0YSkge1xuICAgIHJldHVybiBkYXRhOjptYXBFbnRyeSgoW2tleV0pID0+IGdldE9wdGlvbihrZXkpKTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge3ZvaWR9ICovXG4gIFNldE9wdGlvbnMoZGF0YSkge1xuICAgIGVuc3VyZUFycmF5KGRhdGEpLmZvckVhY2goaXRlbSA9PiBzZXRPcHRpb24oaXRlbS5rZXksIGl0ZW0udmFsdWUpKTtcbiAgfSxcbn0pO1xuXG5sZXQgY2hhbmdlcyA9IHt9O1xuY29uc3QgaG9va3MgPSBpbml0SG9va3MoKTtcbmNvbnN0IGNhbGxIb29rc0xhdGVyID0gZGVib3VuY2UoY2FsbEhvb2tzLCAxMDApO1xuXG5sZXQgb3B0aW9ucyA9IHt9O1xubGV0IGluaXRQZW5kaW5nID0gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgnb3B0aW9ucycpXG4udGhlbigoeyBvcHRpb25zOiBkYXRhIH0pID0+IHtcbiAgaWYgKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSBvcHRpb25zID0gZGF0YTtcbiAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgY29uc29sZS5sb2coJ29wdGlvbnM6Jywgb3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICB9XG4gIGlmICghb2JqZWN0R2V0KG9wdGlvbnMsICd2ZXJzaW9uJykpIHtcbiAgICBzZXRPcHRpb24oJ3ZlcnNpb24nLCAxKTtcbiAgfVxuICBpbml0UGVuZGluZyA9IG51bGw7XG59KTtcbnByZUluaXRpYWxpemUucHVzaChpbml0UGVuZGluZyk7XG5cbmZ1bmN0aW9uIGZpcmVDaGFuZ2Uoa2V5cywgdmFsdWUpIHtcbiAgLy8gRmxhdHRlbmluZyBrZXkgcGF0aCBzbyB0aGUgc3Vic2NyaWJlcnMgY2FuIHVwZGF0ZSBuZXN0ZWQgdmFsdWVzIHdpdGhvdXQgb3ZlcndyaXRpbmcgdGhlIHBhcmVudFxuICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oJy4nKTtcbiAgLy8gRW5zdXJpbmcgdGhlIGNvcnJlY3Qgb3JkZXIgd2hlbiB1cGRhdGVzIHdlcmUgbWl4ZWQgbGlrZSB0aGlzOiBmb28uYmFyPTE7IGZvbz17YmFyOjJ9OyBmb28uYmFyPTNcbiAgZGVsZXRlIGNoYW5nZXNba2V5XTtcbiAgY2hhbmdlc1trZXldID0gdmFsdWU7XG4gIGNhbGxIb29rc0xhdGVyKCk7XG59XG5cbmZ1bmN0aW9uIGNhbGxIb29rcygpIHtcbiAgaG9va3MuZmlyZShjaGFuZ2VzKTtcbiAgY2hhbmdlcyA9IHt9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3B0aW9uKGtleSwgZGVmKSB7XG4gIGNvbnN0IGtleXMgPSBub3JtYWxpemVLZXlzKGtleSk7XG4gIGNvbnN0IG1haW5LZXkgPSBrZXlzWzBdO1xuICBsZXQgdmFsdWUgPSBvcHRpb25zW21haW5LZXldO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgdmFsdWUgPSBkZWZhdWx0c1ttYWluS2V5XTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHZhbHVlID0gZGVmO1xuICByZXR1cm4ga2V5cy5sZW5ndGggPiAxID8gb2JqZWN0R2V0KHZhbHVlLCBrZXlzLnNsaWNlKDEpLCBkZWYpIDogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9uKGtleSkge1xuICByZXR1cm4gb2JqZWN0R2V0KGRlZmF1bHRzLCBrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0T3B0aW9uKGtleSwgdmFsdWUpIHtcbiAgaWYgKGluaXRQZW5kaW5nKSB7XG4gICAgaW5pdFBlbmRpbmcudGhlbigoKSA9PiB7XG4gICAgICBzZXRPcHRpb24oa2V5LCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGtleXMgPSBub3JtYWxpemVLZXlzKGtleSk7XG4gIGNvbnN0IG9wdGlvbktleSA9IGtleXMuam9pbignLicpO1xuICBsZXQgb3B0aW9uVmFsdWUgPSB2YWx1ZTtcbiAgY29uc3QgbWFpbktleSA9IGtleXNbMF07XG4gIGlmIChtYWluS2V5IGluIGRlZmF1bHRzKSB7XG4gICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgb3B0aW9uVmFsdWUgPSBvYmplY3RTZXQoZ2V0T3B0aW9uKG1haW5LZXkpLCBrZXlzLnNsaWNlKDEpLCB2YWx1ZSk7XG4gICAgfVxuICAgIG9wdGlvbnNbbWFpbktleV0gPSBvcHRpb25WYWx1ZTtcbiAgICBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgb3B0aW9ucyB9KTtcbiAgICBmaXJlQ2hhbmdlKGtleXMsIHZhbHVlKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdPcHRpb25zIHVwZGF0ZWQ6Jywgb3B0aW9uS2V5LCB2YWx1ZSwgb3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaG9va09wdGlvbnMgPSBob29rcy5ob29rO1xuIiwiaW1wb3J0IHsgcGFyc2VNZXRhIH0gZnJvbSAnLi9zY3JpcHQnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnIy9jb21tb24vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgY29uc29sZS5pbmZvKCdVcGdyYWRlIGRhdGFiYXNlLi4uJyk7XG4gIGluaXQoKTtcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjb25zdCByZXEgPSBpbmRleGVkREIub3BlbignVmlvbGVudG1vbmtleScsIDEpO1xuICAgIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0cmFuc2Zvcm0ocmVxLnJlc3VsdCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IGRpZCBoYXBwZW4gaW4gRmlyZWZveC5cbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXEub25lcnJvciA9IHJlamVjdDtcbiAgICByZXEub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgLy8gTm8gYXZhaWxhYmxlIHVwZ3JhZGF0aW9uXG4gICAgICByZWplY3QoKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybShkYikge1xuICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oWydzY3JpcHRzJywgJ3JlcXVpcmUnLCAnY2FjaGUnLCAndmFsdWVzJ10pO1xuICAgIGNvbnN0IHVwZGF0ZXMgPSB7fTtcbiAgICBsZXQgcHJvY2Vzc2luZyA9IDM7XG4gICAgY29uc3QgZG9uZSA9ICgpID0+IHtcbiAgICAgIHByb2Nlc3NpbmcgLT0gMTtcbiAgICAgIGlmICghcHJvY2Vzc2luZykgcmVzb2x2ZShicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHVwZGF0ZXMpKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEFsbCA9IChzdG9yZU5hbWUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBjb25zdCByZXEgPSB0eC5vYmplY3RTdG9yZShzdG9yZU5hbWUpLmdldEFsbCgpO1xuICAgICAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IGNhbGxiYWNrKHJlcS5yZXN1bHQpO1xuICAgICAgcmVxLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgfTtcbiAgICBnZXRBbGwoJ3NjcmlwdHMnLCAoYWxsU2NyaXB0cykgPT4ge1xuICAgICAgY29uc3QgdXJpTWFwID0ge307XG4gICAgICBhbGxTY3JpcHRzLmZvckVhY2goKHNjcmlwdCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNvZGUsIGlkLCB1cmkgfSA9IHNjcmlwdDtcbiAgICAgICAgdXBkYXRlc1tgJHtzdG9yYWdlLnNjcmlwdC5wcmVmaXh9JHtpZH1gXSA9IHRyYW5zZm9ybVNjcmlwdChzY3JpcHQpO1xuICAgICAgICB1cGRhdGVzW2Ake3N0b3JhZ2UuY29kZS5wcmVmaXh9JHtpZH1gXSA9IGNvZGU7XG4gICAgICAgIHVyaU1hcFt1cmldID0gaWQ7XG4gICAgICB9KTtcbiAgICAgIGdldEFsbCgndmFsdWVzJywgKGFsbFZhbHVlcykgPT4ge1xuICAgICAgICBhbGxWYWx1ZXMuZm9yRWFjaCgoeyB1cmksIHZhbHVlcyB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgaWQgPSB1cmlNYXBbdXJpXTtcbiAgICAgICAgICBpZiAoaWQpIHVwZGF0ZXNbYCR7c3RvcmFnZS52YWx1ZS5wcmVmaXh9JHtpZH1gXSA9IHZhbHVlcztcbiAgICAgICAgfSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGdldEFsbCgnY2FjaGUnLCAoYWxsQ2FjaGUpID0+IHtcbiAgICAgIGFsbENhY2hlLmZvckVhY2goKHsgdXJpLCBkYXRhIH0pID0+IHtcbiAgICAgICAgdXBkYXRlc1tgJHtzdG9yYWdlLmNhY2hlLnByZWZpeH0ke3VyaX1gXSA9IGRhdGE7XG4gICAgICB9KTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgICBnZXRBbGwoJ3JlcXVpcmUnLCAoYWxsUmVxdWlyZSkgPT4ge1xuICAgICAgYWxsUmVxdWlyZS5mb3JFYWNoKCh7IHVyaSwgY29kZSB9KSA9PiB7XG4gICAgICAgIHVwZGF0ZXNbYCR7c3RvcmFnZS5yZXF1aXJlLnByZWZpeH0ke3VyaX1gXSA9IGNvZGU7XG4gICAgICB9KTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm1TY3JpcHQoc2NyaXB0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1ldGE6IHBhcnNlTWV0YShzY3JpcHQuY29kZSksXG4gICAgICBjdXN0b206IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBvcmlnSW5jbHVkZTogdHJ1ZSxcbiAgICAgICAgb3JpZ0V4Y2x1ZGU6IHRydWUsXG4gICAgICAgIG9yaWdNYXRjaDogdHJ1ZSxcbiAgICAgICAgb3JpZ0V4Y2x1ZGVNYXRjaDogdHJ1ZSxcbiAgICAgIH0sIHNjcmlwdC5jdXN0b20pLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgaWQ6IHNjcmlwdC5pZCxcbiAgICAgICAgdXJpOiBzY3JpcHQudXJpLFxuICAgICAgICBwb3NpdGlvbjogc2NyaXB0LnBvc2l0aW9uLFxuICAgICAgfSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBlbmFibGVkOiBzY3JpcHQuZW5hYmxlZCxcbiAgICAgICAgc2hvdWxkVXBkYXRlOiBzY3JpcHQudXBkYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59KVxuLy8gSWdub3JlIGVycm9yXG4uY2F0Y2goKCkgPT4ge30pO1xuIiwiaW1wb3J0IHsgZ2V0QWN0aXZlVGFiLCBzZW5kVGFiQ21kIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4vZGInO1xuaW1wb3J0IHsgcG9zdEluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5leHBvcnQgY29uc3QgcG9wdXBUYWJzID0ge307IC8vIHsgdGFiSWQ6IDEgfVxuXG5wb3N0SW5pdGlhbGl6ZS5wdXNoKCgpID0+IHtcbiAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihvblBvcHVwT3BlbmVkKTtcbiAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihwcmVmZXRjaFNldFBvcHVwLCB7XG4gICAgdXJsczogW2Jyb3dzZXIucnVudGltZS5nZXRVUkwoYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkuYnJvd3Nlcl9hY3Rpb24uZGVmYXVsdF9wb3B1cCldLFxuICAgIHR5cGVzOiBbJ21haW5fZnJhbWUnXSxcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gb25Qb3B1cE9wZW5lZChwb3J0KSB7XG4gIGNvbnN0IHRhYklkID0gK3BvcnQubmFtZTtcbiAgcG9wdXBUYWJzW3RhYklkXSA9IDE7XG4gIHNlbmRUYWJDbWQodGFiSWQsICdQb3B1cFNob3duJywgdHJ1ZSk7XG4gIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKG9uUG9wdXBDbG9zZWQpO1xuICBkZWxldGUgY29tbWFuZHMuU2V0UG9wdXA7XG59XG5cbmZ1bmN0aW9uIG9uUG9wdXBDbG9zZWQoeyBuYW1lIH0pIHtcbiAgZGVsZXRlIHBvcHVwVGFic1tuYW1lXTtcbiAgc2VuZFRhYkNtZCgrbmFtZSwgJ1BvcHVwU2hvd24nLCBmYWxzZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByZWZldGNoU2V0UG9wdXAoKSB7XG4gIGNvbnN0IHRhYklkID0gKGF3YWl0IGdldEFjdGl2ZVRhYigpKS5pZDtcbiAgc2VuZFRhYkNtZCh0YWJJZCwgJ1BvcHVwU2hvd24nLCB0cnVlKTtcbiAgY29tbWFuZHMuU2V0UG9wdXAgPSBhc3luYyAoZGF0YSwgc3JjKSA9PiB7XG4gICAgT2JqZWN0LmFzc2lnbihkYXRhLCBhd2FpdCBnZXREYXRhKGRhdGEuaWRzKSk7XG4gICAgY2FjaGUucHV0KCdTZXRQb3B1cCcsIE9iamVjdC5hc3NpZ24oeyBbc3JjLmZyYW1lSWRdOiBbZGF0YSwgc3JjXSB9LCBjYWNoZS5nZXQoJ1NldFBvcHVwJykpKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGdldFNjcmlwdE5hbWUsIGdldFVuaXFJZCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7XG4gIElOSkVDVF9BVVRPLCBJTkpFQ1RfQ09OVEVOVCwgSU5KRUNUX01BUFBJTkcsXG4gIElOSkVDVEFCTEVfVEFCX1VSTF9SRSwgTUVUQUJMT0NLX1JFLFxufSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IGluaXRDYWNoZSBmcm9tICcjL2NvbW1vbi9jYWNoZSc7XG5pbXBvcnQgeyBmb3JFYWNoRW50cnksIG9iamVjdFBpY2ssIG9iamVjdFNldCB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcjL2NvbW1vbi9zdG9yYWdlJztcbmltcG9ydCB1YSBmcm9tICcjL2NvbW1vbi91YSc7XG5pbXBvcnQgeyBnZXRTY3JpcHRzQnlVUkwsIEVOVl9DQUNIRV9LRVlTLCBFTlZfUkVRX0tFWVMsIEVOVl9WQUxVRV9JRFMgfSBmcm9tICcuL2RiJztcbmltcG9ydCB7IGV4dGVuc2lvblJvb3QsIHBvc3RJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IGdldE9wdGlvbiwgaG9va09wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5jb25zdCBBUElfQ09ORklHID0ge1xuICB1cmxzOiBbJyo6Ly8qLyonXSwgLy8gYCpgIHNjaGVtZSBtYXRjaGVzIG9ubHkgaHR0cCBhbmQgaHR0cHNcbiAgdHlwZXM6IFsnbWFpbl9mcmFtZScsICdzdWJfZnJhbWUnXSxcbn07XG5jb25zdCBUSU1FX0FGVEVSX1NFTkQgPSAxMGUzOyAvLyBsb25nZXIgYXMgZXN0YWJsaXNoaW5nIGNvbm5lY3Rpb24gdG8gc2l0ZXMgbWF5IHRha2UgdGltZVxuY29uc3QgVElNRV9BRlRFUl9SRUNFSVZFID0gMWUzOyAvLyBzaG9ydGVyIGFzIHJlc3BvbnNlIGJvZHkgd2lsbCBiZSBjb21pbmcgdmVyeSBzb29uXG5jb25zdCBUSU1FX0tFRVBfREFUQSA9IDYwZTM7IC8vIDEwMG1zIHNob3VsZCBiZSBlbm91Z2ggYnV0IHRoZSB0YWIgbWF5IGhhbmcgb3IgZ2V0IHBhdXNlZCBpbiBkZWJ1Z2dlclxuY29uc3QgY2FjaGVDb2RlID0gaW5pdENhY2hlKHsgbGlmZXRpbWU6IFRJTUVfS0VFUF9EQVRBIH0pO1xuY29uc3QgY2FjaGUgPSBpbml0Q2FjaGUoe1xuICBsaWZldGltZTogVElNRV9LRUVQX0RBVEEsXG4gIG9uRGlzcG9zZTogYXN5bmMgcHJvbWlzZSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHByb21pc2U7XG4gICAgY29uc3QgcmNzID0gYXdhaXQgZGF0YT8ucmNzUHJvbWlzZTtcbiAgICByY3M/LnVucmVnaXN0ZXIoKTtcbiAgfSxcbn0pO1xuY29uc3QgSU5KRUNUX0lOVE8gPSAnaW5qZWN0SW50byc7XG4vLyBLRVlfWFhYIGZvciBob29rZWQgb3B0aW9uc1xuY29uc3QgS0VZX0VYUE9TRSA9ICdleHBvc2UnO1xuY29uc3QgS0VZX0RFRl9JTkpFQ1RfSU5UTyA9ICdkZWZhdWx0SW5qZWN0SW50byc7XG5jb25zdCBLRVlfSVNfQVBQTElFRCA9ICdpc0FwcGxpZWQnO1xuY29uc3QgS0VZX1hIUl9JTkpFQ1QgPSAneGhySW5qZWN0JztcbmNvbnN0IGV4cG9zZSA9IHt9O1xubGV0IGlzQXBwbGllZDtcbmxldCBpbmplY3RJbnRvO1xubGV0IHhockluamVjdDtcbmhvb2tPcHRpb25zKG9uT3B0aW9uQ2hhbmdlZCk7XG5wb3N0SW5pdGlhbGl6ZS5wdXNoKCgpID0+IHtcbiAgZm9yIChjb25zdCBrZXkgb2YgW0tFWV9FWFBPU0UsIEtFWV9ERUZfSU5KRUNUX0lOVE8sIEtFWV9JU19BUFBMSUVELCBLRVlfWEhSX0lOSkVDVF0pIHtcbiAgICBvbk9wdGlvbkNoYW5nZWQoeyBba2V5XTogZ2V0T3B0aW9uKGtleSkgfSk7XG4gIH1cbn0pO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIGFzeW5jIEluamVjdGlvbkZlZWRiYWNrKHsgZmVlZElkLCBmZWVkYmFjaywgZm9yY2VDb250ZW50IH0sIHNyYykge1xuICAgIGZlZWRiYWNrLmZvckVhY2gocHJvY2Vzc0ZlZWRiYWNrLCBzcmMpO1xuICAgIGlmIChmZWVkSWQpIHtcbiAgICAgIC8vIGNhY2hlIGNsZWFudXAgd2hlbiBnZXREYXRhRkYgb3V0cnVucyBHZXRJbmplY3RlZFxuICAgICAgY2FjaGUuZGVsKGZlZWRJZC5jYWNoZUtleSk7XG4gICAgICAvLyBlbnZEZWxheWVkXG4gICAgICBjb25zdCBlbnYgPSBhd2FpdCBjYWNoZS5wb3AoZmVlZElkLmVudktleSk7XG4gICAgICBpZiAoZW52KSB7XG4gICAgICAgIGVudi5mb3JjZUNvbnRlbnQgPSBmb3JjZUNvbnRlbnQ7XG4gICAgICAgIGVudi5zY3JpcHRzLm1hcChwcmVwYXJlU2NyaXB0LCBlbnYpLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKHByb2Nlc3NGZWVkYmFjaywgc3JjKTtcbiAgICAgICAgcmV0dXJuIG9iamVjdFBpY2soZW52LCBbJ2NhY2hlJywgJ3NjcmlwdHMnXSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxufSk7XG5cbi8qKiBAdGhpcyB7Y2hyb21lLnJ1bnRpbWUuTWVzc2FnZVNlbmRlcn0gKi9cbmZ1bmN0aW9uIHByb2Nlc3NGZWVkYmFjayhba2V5LCBuZWVkc0luamVjdGlvbl0pIHtcbiAgY29uc3QgY29kZSA9IGNhY2hlQ29kZS5wb3Aoa2V5KTtcbiAgLy8gc2VlIFRJTUVfS0VFUF9EQVRBIGNvbW1lbnRcbiAgaWYgKG5lZWRzSW5qZWN0aW9uICYmIGNvZGUpIHtcbiAgICBicm93c2VyLnRhYnMuZXhlY3V0ZVNjcmlwdCh0aGlzLnRhYi5pZCwge1xuICAgICAgY29kZSxcbiAgICAgIGZyYW1lSWQ6IHRoaXMuZnJhbWVJZCxcbiAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfc3RhcnQnLFxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IHByb3BzVG9DbGVhciA9IHtcbiAgW3N0b3JhZ2UuY2FjaGUucHJlZml4XTogRU5WX0NBQ0hFX0tFWVMsXG4gIFtzdG9yYWdlLmNvZGUucHJlZml4XTogdHJ1ZSxcbiAgW3N0b3JhZ2UucmVxdWlyZS5wcmVmaXhdOiBFTlZfUkVRX0tFWVMsXG4gIFtzdG9yYWdlLnNjcmlwdC5wcmVmaXhdOiB0cnVlLFxuICBbc3RvcmFnZS52YWx1ZS5wcmVmaXhdOiBFTlZfVkFMVUVfSURTLFxufTtcblxuYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihhc3luYyBjaGFuZ2VzID0+IHtcbiAgY29uc3QgZGJLZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcyk7XG4gIGNvbnN0IGNhY2hlVmFsdWVzID0gYXdhaXQgUHJvbWlzZS5hbGwoY2FjaGUuZ2V0VmFsdWVzKCkpO1xuICBjb25zdCBkaXJ0eSA9IGNhY2hlVmFsdWVzLnNvbWUoZGF0YSA9PiBkYXRhLmluamVjdFxuICAgICYmIGRiS2V5cy5zb21lKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHByZWZpeCA9IGtleS5zbGljZSgwLCBrZXkuaW5kZXhPZignOicpICsgMSk7XG4gICAgICBjb25zdCBwcm9wID0gcHJvcHNUb0NsZWFyW3ByZWZpeF07XG4gICAgICBrZXkgPSBrZXkuc2xpY2UocHJlZml4Lmxlbmd0aCk7XG4gICAgICByZXR1cm4gcHJvcCA9PT0gdHJ1ZVxuICAgICAgICB8fCBkYXRhW3Byb3BdPy5pbmNsdWRlcyhwcmVmaXggPT09IHN0b3JhZ2UudmFsdWUucHJlZml4ID8gK2tleSA6IGtleSk7XG4gICAgfSkpO1xuICBpZiAoZGlydHkpIHtcbiAgICBjYWNoZS5kZXN0cm95KCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBub3JtYWxpemVSZWFsbSh2YWx1ZSkge1xuICByZXR1cm4gSU5KRUNUX01BUFBJTkc6Omhhc093blByb3BlcnR5KHZhbHVlKVxuICAgID8gdmFsdWVcbiAgICA6IGluamVjdEludG8gfHwgSU5KRUNUX0FVVE87XG59XG5cbmZ1bmN0aW9uIG9uT3B0aW9uQ2hhbmdlZChjaGFuZ2VzKSB7XG4gIGNoYW5nZXM6OmZvckVhY2hFbnRyeSgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIEtFWV9ERUZfSU5KRUNUX0lOVE86XG4gICAgICBpbmplY3RJbnRvID0gbm9ybWFsaXplUmVhbG0odmFsdWUpO1xuICAgICAgY2FjaGUuZGVzdHJveSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBLRVlfWEhSX0lOSkVDVDpcbiAgICAgIHRvZ2dsZVhockluamVjdCh2YWx1ZSk7XG4gICAgICBjYWNoZS5kZXN0cm95KCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEtFWV9JU19BUFBMSUVEOlxuICAgICAgdG9nZ2xlUHJlaW5qZWN0KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgS0VZX0VYUE9TRTpcbiAgICAgIHZhbHVlOjpmb3JFYWNoRW50cnkoKFtzaXRlLCBpc0V4cG9zZWRdKSA9PiB7XG4gICAgICAgIGV4cG9zZVtkZWNvZGVVUklDb21wb25lbnQoc2l0ZSldID0gaXNFeHBvc2VkO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKGtleS5pbmNsdWRlcygnLicpKSB7IC8vIHVzZWQgYnkgYGV4cG9zZS51cmxgXG4gICAgICAgIG9uT3B0aW9uQ2hhbmdlZChvYmplY3RTZXQoe30sIGtleSwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluamVjdGVkU2NyaXB0cyh1cmwsIHRhYklkLCBmcmFtZUlkLCBmb3JjZUNvbnRlbnQpIHtcbiAgY29uc3Qga2V5ID0gZ2V0S2V5KHVybCwgIWZyYW1lSWQpO1xuICByZXR1cm4gY2FjaGUucG9wKGtleSkgfHwgcHJlcGFyZShrZXksIHVybCwgdGFiSWQsIGZyYW1lSWQsIGZvcmNlQ29udGVudCk7XG59XG5cbmZ1bmN0aW9uIGdldEtleSh1cmwsIGlzVG9wKSB7XG4gIHJldHVybiBpc1RvcCA/IHVybCA6IGAtJHt1cmx9YDtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJlaW5qZWN0KGVuYWJsZSkge1xuICBpc0FwcGxpZWQgPSBlbmFibGU7XG4gIC8vIFVzaW5nIG9uU2VuZEhlYWRlcnMgYmVjYXVzZSBvbkhlYWRlcnNSZWNlaXZlZCBpbiBGaXJlZm94IGZpcmVzICphZnRlciogY29udGVudCBzY3JpcHRzLlxuICAvLyBBbmQgZXZlbiBpbiBDaHJvbWUgYSBzaXRlIG1heSBiZSBzbyBmYXN0IHRoYXQgcHJlaW5qZWN0IG9uIG9uSGVhZGVyc1JlY2VpdmVkIHdvbid0IGJlIHVzZWZ1bC5cbiAgY29uc3Qgb25PZmYgPSBgJHtlbmFibGUgPyAnYWRkJyA6ICdyZW1vdmUnfUxpc3RlbmVyYDtcbiAgY29uc3QgY29uZmlnID0gZW5hYmxlID8gQVBJX0NPTkZJRyA6IHVuZGVmaW5lZDtcbiAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uU2VuZEhlYWRlcnNbb25PZmZdKG9uU2VuZEhlYWRlcnMsIGNvbmZpZyk7XG4gIGlmICghaXNBcHBsaWVkIHx8ICF4aHJJbmplY3QpIHsgLy8gd2lsbCBiZSByZWdpc3RlcmVkIGluIHRvZ2dsZVhockluamVjdFxuICAgIGJyb3dzZXIud2ViUmVxdWVzdC5vbkhlYWRlcnNSZWNlaXZlZFtvbk9mZl0ob25IZWFkZXJzUmVjZWl2ZWQsIGNvbmZpZyk7XG4gIH1cbiAgY2FjaGUuZGVzdHJveSgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVYaHJJbmplY3QoZW5hYmxlKSB7XG4gIHhockluamVjdCA9IGVuYWJsZTtcbiAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkLnJlbW92ZUxpc3RlbmVyKG9uSGVhZGVyc1JlY2VpdmVkKTtcbiAgaWYgKGVuYWJsZSkge1xuICAgIGJyb3dzZXIud2ViUmVxdWVzdC5vbkhlYWRlcnNSZWNlaXZlZC5hZGRMaXN0ZW5lcihvbkhlYWRlcnNSZWNlaXZlZCwgQVBJX0NPTkZJRywgW1xuICAgICAgJ2Jsb2NraW5nJyxcbiAgICAgICdyZXNwb25zZUhlYWRlcnMnLFxuICAgICAgYnJvd3Nlci53ZWJSZXF1ZXN0Lk9uSGVhZGVyc1JlY2VpdmVkT3B0aW9ucy5FWFRSQV9IRUFERVJTLFxuICAgIF0uZmlsdGVyKEJvb2xlYW4pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvblNlbmRIZWFkZXJzKHsgdXJsLCB0YWJJZCwgZnJhbWVJZCB9KSB7XG4gIGlmICghSU5KRUNUQUJMRV9UQUJfVVJMX1JFLnRlc3QodXJsKSkgcmV0dXJuO1xuICBjb25zdCBpc1RvcCA9ICFmcmFtZUlkO1xuICBjb25zdCBrZXkgPSBnZXRLZXkodXJsLCBpc1RvcCk7XG4gIGlmICghY2FjaGUuaGFzKGtleSkpIHtcbiAgICAvLyBHZXRJbmplY3RlZCBtZXNzYWdlIHdpbGwgYmUgc2VudCBzb29uIGJ5IHRoZSBjb250ZW50IHNjcmlwdFxuICAgIC8vIGFuZCBpdCBtYXkgZWFzaWx5IGhhcHBlbiB3aGlsZSBnZXRTY3JpcHRzQnlVUkwgaXMgc3RpbGwgd2FpdGluZyBmb3IgYnJvd3Nlci5zdG9yYWdlXG4gICAgLy8gc28gd2UnbGwgbGV0IEdldEluamVjdGVkIGF3YWl0IHRoaXMgcGVuZGluZyBkYXRhIGJ5IHN0b3JpbmcgUHJvbWlzZSBpbiB0aGUgY2FjaGVcbiAgICBjYWNoZS5wdXQoa2V5LCBwcmVwYXJlKGtleSwgdXJsLCB0YWJJZCwgZnJhbWVJZCksIFRJTUVfQUZURVJfU0VORCk7XG4gIH1cbn1cblxuLyoqIEBwYXJhbSB7Y2hyb21lLndlYlJlcXVlc3QuV2ViUmVzcG9uc2VIZWFkZXJzRGV0YWlsc30gaW5mbyAqL1xuZnVuY3Rpb24gb25IZWFkZXJzUmVjZWl2ZWQoaW5mbykge1xuICBjb25zdCBrZXkgPSBnZXRLZXkoaW5mby51cmwsICFpbmZvLmZyYW1lSWQpO1xuICBjb25zdCBkYXRhID0geGhySW5qZWN0ICYmIGNhY2hlLmdldChrZXkpO1xuICBjYWNoZS5oaXQoa2V5LCBUSU1FX0FGVEVSX1JFQ0VJVkUpO1xuICByZXR1cm4gZGF0YT8uaW5qZWN0ICYmIHByZXBhcmVYaHJCbG9iKGluZm8sIGRhdGEpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Y2hyb21lLndlYlJlcXVlc3QuV2ViUmVzcG9uc2VIZWFkZXJzRGV0YWlsc30gaW5mb1xuICogQHBhcmFtIHtWTUdldEluamVjdGVkRGF0YUNvbnRhaW5lcn0gZGF0YVxuICovXG5mdW5jdGlvbiBwcmVwYXJlWGhyQmxvYih7IHVybCwgcmVzcG9uc2VIZWFkZXJzIH0sIGRhdGEpIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwczonKSAmJiBkZXRlY3RTdHJpY3RDc3AocmVzcG9uc2VIZWFkZXJzKSkge1xuICAgIGZvcmNlQ29udGVudEluamVjdGlvbihkYXRhKTtcbiAgfVxuICBjb25zdCBibG9iVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbXG4gICAgSlNPTi5zdHJpbmdpZnkoZGF0YS5pbmplY3QpLFxuICBdKSk7XG4gIHJlc3BvbnNlSGVhZGVycy5wdXNoKHtcbiAgICBuYW1lOiAnU2V0LUNvb2tpZScsXG4gICAgdmFsdWU6IGBcIiR7cHJvY2Vzcy5lbnYuSU5JVF9GVU5DX05BTUV9XCI9JHtibG9iVXJsLnNwbGl0KCcvJykucG9wKCl9OyBTYW1lU2l0ZT1MYXhgLFxuICB9KTtcbiAgc2V0VGltZW91dChVUkwucmV2b2tlT2JqZWN0VVJMLCBUSU1FX0tFRVBfREFUQSwgYmxvYlVybCk7XG4gIHJldHVybiB7IHJlc3BvbnNlSGVhZGVycyB9O1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlKGtleSwgdXJsLCB0YWJJZCwgZnJhbWVJZCwgZm9yY2VDb250ZW50KSB7XG4gIC8qKiBAbmFtZXNwYWNlIFZNR2V0SW5qZWN0ZWREYXRhQ29udGFpbmVyICovXG4gIGNvbnN0IHJlcyA9IHtcbiAgICAvKiogQG5hbWVzcGFjZSBWTUdldEluamVjdGVkRGF0YSAqL1xuICAgIGluamVjdDoge1xuICAgICAgZXhwb3NlOiAhZnJhbWVJZFxuICAgICAgICAmJiB1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKVxuICAgICAgICAmJiBleHBvc2VbdXJsLnNwbGl0KCcvJywgMylbMl1dLFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBpc0FwcGxpZWRcbiAgICA/IHByZXBhcmVTY3JpcHRzKHJlcywga2V5LCB1cmwsIHRhYklkLCBmcmFtZUlkLCBmb3JjZUNvbnRlbnQpXG4gICAgOiByZXM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByZXBhcmVTY3JpcHRzKHJlcywgY2FjaGVLZXksIHVybCwgdGFiSWQsIGZyYW1lSWQsIGZvcmNlQ29udGVudCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2NyaXB0c0J5VVJMKHVybCwgIWZyYW1lSWQpO1xuICBjb25zdCB7IGVudkRlbGF5ZWQsIHNjcmlwdHMgfSA9IGRhdGE7XG4gIGNvbnN0IGlzTGF0ZSA9IGZvcmNlQ29udGVudCAhPSBudWxsO1xuICBkYXRhLmZvcmNlQ29udGVudCA9IGZvcmNlQ29udGVudDtcbiAgY29uc3QgZmVlZGJhY2sgPSBzY3JpcHRzLm1hcChwcmVwYXJlU2NyaXB0LCBkYXRhKS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IG1vcmUgPSBlbnZEZWxheWVkLnByb21pc2U7XG4gIGNvbnN0IGVudktleSA9IGdldFVuaXFJZChgJHt0YWJJZH06JHtmcmFtZUlkfTpgKTtcbiAgY29uc3QgeyBpbmplY3QgfSA9IHJlcztcbiAgLyoqIEBuYW1lc3BhY2UgVk1HZXRJbmplY3RlZERhdGEgKi9cbiAgT2JqZWN0LmFzc2lnbihpbmplY3QsIHtcbiAgICBzY3JpcHRzLFxuICAgIFtJTkpFQ1RfSU5UT106IGluamVjdEludG8sXG4gICAgY2FjaGU6IGRhdGEuY2FjaGUsXG4gICAgZmVlZElkOiB7XG4gICAgICBjYWNoZUtleSwgLy8gSW5qZWN0aW9uRmVlZGJhY2sgY2FjaGUga2V5IGZvciBjbGVhbnVwIHdoZW4gZ2V0RGF0YUZGIG91dHJ1bnMgR2V0SW5qZWN0ZWRcbiAgICAgIGVudktleSwgLy8gSW5qZWN0aW9uRmVlZGJhY2sgY2FjaGUga2V5IGZvciBlbnZEZWxheWVkXG4gICAgfSxcbiAgICBoYXNNb3JlOiAhIW1vcmUsIC8vIHRlbGxzIGNvbnRlbnQgYnJpZGdlIHRvIGV4cGVjdCBlbnZEZWxheWVkXG4gICAgZm9yY2VDb250ZW50OiBmb3JjZUNvbnRlbnQgfHwgKCAvLyBUcnlpbmcgdG8gc2tpcCBwYWdlIHNhbmRib3ggd2hlbiB4aHJJbmplY3QgaXMgb246XG4gICAgICBmZWVkYmFjay5sZW5ndGggPT09IHNjcmlwdHMubGVuZ3RoIC8vIC4uLndoZW4gYWxsIGBlbnZTdGFydGAgc2NyaXB0cyBhcmUgYGNvbnRlbnRgLFxuICAgICAgJiYgZW52RGVsYXllZC5zY3JpcHRzLmV2ZXJ5KHNjciA9PiBpc0NvbnRlbnRSZWFsbShzY3IsIGZvcmNlQ29udGVudCkpIC8vIGFuZCBgZW52RGVsYXllZGAgdG9vLlxuICAgICksXG4gICAgaWRzOiBkYXRhLmRpc2FibGVkSWRzLCAvLyBjb250ZW50IGJyaWRnZSBhZGRzIHRoZSBhY3R1YWxseSBydW5uaW5nIGlkcyBhbmQgc2VuZHMgdmlhIFNldFBvcHVwXG4gICAgaW5mbzoge1xuICAgICAgdWEsXG4gICAgfSxcbiAgfSk7XG4gIC8qKiBAbmFtZXNwYWNlIFZNR2V0SW5qZWN0ZWREYXRhQ29udGFpbmVyICovXG4gIE9iamVjdC5hc3NpZ24ocmVzLCB7XG4gICAgZmVlZGJhY2ssXG4gICAgdmFsT3BJZHM6IFsuLi5kYXRhW0VOVl9WQUxVRV9JRFNdLCAuLi5lbnZEZWxheWVkW0VOVl9WQUxVRV9JRFNdXSxcbiAgICByY3NQcm9taXNlOiAhaXNMYXRlICYmICF4aHJJbmplY3QgJiYgSVNfRklSRUZPWFxuICAgICAgPyByZWdpc3RlclNjcmlwdERhdGFGRihpbmplY3QsIHVybCwgISFmcmFtZUlkKVxuICAgICAgOiBudWxsLFxuICB9KTtcbiAgaWYgKG1vcmUpIGNhY2hlLnB1dChlbnZLZXksIG1vcmUpO1xuICBjYWNoZS5wdXQoY2FjaGVLZXksIHJlcyk7IC8vIG5lY2Vzc2FyeSBmb3IgdGhlIHN5bmNocm9ub3VzIG9uSGVhZGVyc1JlY2VpdmVkXG4gIHJldHVybiByZXM7XG59XG5cbi8qKiBAdGhpcyB7Vk1TY3JpcHRCeVVybERhdGF9ICovXG5mdW5jdGlvbiBwcmVwYXJlU2NyaXB0KHNjcmlwdCkge1xuICBjb25zdCB7IGN1c3RvbSwgbWV0YSwgcHJvcHMgfSA9IHNjcmlwdDtcbiAgY29uc3QgeyBpZCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgZm9yY2VDb250ZW50LCByZXF1aXJlLCB2YWx1ZSB9ID0gdGhpcztcbiAgY29uc3QgY29kZSA9IHRoaXMuY29kZVtpZF07XG4gIGNvbnN0IGRhdGFLZXkgPSBnZXRVbmlxSWQoJ1ZNaW4nKTtcbiAgY29uc3QgZGlzcGxheU5hbWUgPSBnZXRTY3JpcHROYW1lKHNjcmlwdCk7XG4gIGNvbnN0IG5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQoZGlzcGxheU5hbWUucmVwbGFjZSgvWyMmJywvOjs/QD0rXS9nLCByZXBsYWNlV2l0aEZ1bGxXaWR0aEZvcm0pKTtcbiAgY29uc3QgaXNDb250ZW50ID0gaXNDb250ZW50UmVhbG0oc2NyaXB0LCBmb3JjZUNvbnRlbnQpO1xuICBjb25zdCBwYXRoTWFwID0gY3VzdG9tLnBhdGhNYXAgfHwge307XG4gIGNvbnN0IHJlcXMgPSBtZXRhLnJlcXVpcmU/Lm1hcChrZXkgPT4gcmVxdWlyZVtwYXRoTWFwW2tleV0gfHwga2V5XSkuZmlsdGVyKEJvb2xlYW4pO1xuICAvLyB0cnlpbmcgdG8gYXZvaWQgcHJvZ3Jlc3NpdmUgc3RyaW5nIGNvbmNhdGVuYXRpb24gb2YgcG90ZW50aWFsbHkgaHVnZSBjb2RlIHNsaWNlc1xuICAvLyBhZGRpbmcgYDtgIG9uIGEgbmV3IGxpbmUgaW4gY2FzZSBzb21lIHJlcXVpcmVkIHNjcmlwdCBlbmRzIHdpdGggYSBsaW5lIGNvbW1lbnRcbiAgY29uc3QgcmVxc1NsaWNlcyA9IHJlcXMgPyBbXS5jb25jYXQoLi4ucmVxcy5tYXAocmVxID0+IFtyZXEsICdcXG47J10pKSA6IFtdO1xuICBjb25zdCBoYXNSZXFzID0gcmVxc1NsaWNlcy5sZW5ndGg7XG4gIGNvbnN0IGluamVjdGVkQ29kZSA9IFtcbiAgICAvLyBoaWRpbmcgbW9kdWxlIGludGVyZmFjZSBmcm9tIEByZXF1aXJlJ2Qgc2NyaXB0cyBzbyB0aGV5IGRvbid0IG1pc3Rha2VubHkgdXNlIGl0XG4gICAgYHdpbmRvdy4ke2RhdGFLZXl9PWZ1bmN0aW9uKCR7ZGF0YUtleX0pe3RyeXt3aXRoKHRoaXMpKChkZWZpbmUsbW9kdWxlLGV4cG9ydHMpPT57YCxcbiAgICAuLi5yZXFzU2xpY2VzLFxuICAgIC8vIGFkZGluZyBhIG5lc3RlZCBJSUZFIHRvIHN1cHBvcnQgJ3VzZSBzdHJpY3QnIGluIHRoZSBjb2RlIHdoZW4gdGhlcmUgYXJlIEByZXF1aXJlc1xuICAgIGhhc1JlcXMgPyAnKCgpPT57JyA6ICcnLFxuICAgIGNvZGUsXG4gICAgLy8gYWRkaW5nIGEgbmV3IGxpbmUgaW4gY2FzZSB0aGUgY29kZSBlbmRzIHdpdGggYSBsaW5lIGNvbW1lbnRcbiAgICBjb2RlLmVuZHNXaXRoKCdcXG4nKSA/ICcnIDogJ1xcbicsXG4gICAgaGFzUmVxcyA/ICd9KSgpJyA6ICcnLFxuICAgIC8vIDAgYXQgdGhlIGVuZCB0byBzdXBwcmVzcyBlcnJvcnMgYWJvdXQgbm9uLWNsb25lYWJsZSByZXN1bHQgb2YgZXhlY3V0ZVNjcmlwdCBpbiBGRlxuICAgIGB9KSgpfWNhdGNoKGUpeyR7ZGF0YUtleX0oZSl9fTswYCxcbiAgICAvLyBGaXJlZm94IGxpc3RzIC51c2VyLmpzIGFtb25nIG91ciBvd24gY29udGVudCBzY3JpcHRzIHNvIGEgc3BhY2UgYXQgc3RhcnQgd2lsbCBncm91cCB0aGVtXG4gICAgYFxcbi8vIyBzb3VyY2VVUkw9JHtleHRlbnNpb25Sb290fSR7SVNfRklSRUZPWCA/ICclMjAnIDogJyd9JHtuYW1lfS51c2VyLmpzIyR7aWR9YCxcbiAgXS5qb2luKCcnKTtcbiAgY2FjaGVDb2RlLnB1dChkYXRhS2V5LCBpbmplY3RlZENvZGUsIFRJTUVfS0VFUF9EQVRBKTtcbiAgLyoqIEBuYW1lc3BhY2UgVk1JbmplY3RlZFNjcmlwdCAqL1xuICBPYmplY3QuYXNzaWduKHNjcmlwdCwge1xuICAgIGRhdGFLZXksXG4gICAgZGlzcGxheU5hbWUsXG4gICAgLy8gY29kZSB3aWxsIGJlIGB0cnVlYCBpZiB0aGUgZGVzaXJlZCByZWFsbSBpcyBQQUdFIHdoaWNoIGlzIG5vdCBpbmplY3RhYmxlXG4gICAgY29kZTogaXNDb250ZW50ID8gJycgOiBmb3JjZUNvbnRlbnQgfHwgaW5qZWN0ZWRDb2RlLFxuICAgIG1ldGFTdHI6IGNvZGUubWF0Y2goTUVUQUJMT0NLX1JFKVsxXSB8fCAnJyxcbiAgICB2YWx1ZXM6IHZhbHVlW2lkXSB8fCBudWxsLFxuICB9KTtcbiAgcmV0dXJuIGlzQ29udGVudCAmJiBbZGF0YUtleSwgdHJ1ZV07XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VXaXRoRnVsbFdpZHRoRm9ybShzKSB7XG4gIC8vIGZ1bGx3aWR0aCByYW5nZSBzdGFydHMgYXQgMHhGRjAwLCBub3JtYWwgcmFuZ2Ugc3RhcnRzIGF0IHNwYWNlIGNoYXIgY29kZSAweDIwXG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHMuY2hhckNvZGVBdCgwKSAtIDB4MjAgKyAweEZGMDApO1xufVxuXG5jb25zdCByZXNvbHZlRGF0YUNvZGVTdHIgPSBgKCR7ZnVuY3Rpb24gXyhkYXRhKSB7XG4gIC8qIGBmdW5jdGlvbmAgaXMgcmVxdWlyZWQgdG8gY29tcGlsZSBgdGhpc2AsIGFuZCBgdGhpc2AgaXMgcmVxdWlyZWQgYmVjYXVzZSBvdXIgc2FmZS1nbG9iYWxzXG4gICAqIHNoYWRvd3MgYHdpbmRvd2Agc28gaXRzIG5hbWUgaXMgbWluaWZpZWQgYW5kIGhlbmNlIGluYWNjZXNzaWJsZSBoZXJlICovXG4gIGNvbnN0IHsgdm1SZXNvbHZlIH0gPSB0aGlzO1xuICBpZiAodm1SZXNvbHZlKSB7XG4gICAgdm1SZXNvbHZlKGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJ1bm5pbmcgZWFybGllciB0aGFuIHRoZSBtYWluIGNvbnRlbnQgc2NyaXB0IGZvciB3aGF0ZXZlciByZWFzb25cbiAgICB0aGlzLnZtRGF0YSA9IGRhdGE7XG4gIH1cbn19KWA7XG5cbi8vIFRPRE86IHJld29yayB0aGUgd2hvbGUgdGhpbmcgdG8gcmVnaXN0ZXIgc2NyaXB0cyBpbmRpdmlkdWFsbHkgd2l0aCByZWFsIGBtYXRjaGVzYFxuZnVuY3Rpb24gcmVnaXN0ZXJTY3JpcHREYXRhRkYoaW5qZWN0LCB1cmwsIGFsbEZyYW1lcykge1xuICByZXR1cm4gYnJvd3Nlci5jb250ZW50U2NyaXB0cz8ucmVnaXN0ZXIoe1xuICAgIGFsbEZyYW1lcyxcbiAgICBqczogW3tcbiAgICAgIGNvZGU6IGAke3Jlc29sdmVEYXRhQ29kZVN0cn0oJHtKU09OLnN0cmluZ2lmeShpbmplY3QpfSlgLFxuICAgIH1dLFxuICAgIG1hdGNoZXM6IHVybC5zcGxpdCgnIycsIDEpLFxuICAgIHJ1bkF0OiAnZG9jdW1lbnRfc3RhcnQnLFxuICB9KTtcbn1cblxuLyoqIEBwYXJhbSB7Y2hyb21lLndlYlJlcXVlc3QuSHR0cEhlYWRlcltdfSByZXNwb25zZUhlYWRlcnMgKi9cbmZ1bmN0aW9uIGRldGVjdFN0cmljdENzcChyZXNwb25zZUhlYWRlcnMpIHtcbiAgcmV0dXJuIHJlc3BvbnNlSGVhZGVycy5zb21lKCh7IG5hbWUsIHZhbHVlIH0pID0+IChcbiAgICAvXmNvbnRlbnQtc2VjdXJpdHktcG9saWN5JC9pLnRlc3QobmFtZSlcbiAgICAmJiAvXi4oPyEuKid1bnNhZmUtaW5saW5lJykvLnRlc3QoIC8vIHRydWUgaWYgbm90IGVtcHR5IGFuZCB3aXRob3V0ICd1bnNhZmUtaW5saW5lJ1xuICAgICAgdmFsdWUubWF0Y2goLyg/Ol58OylcXHMqc2NyaXB0LXNyYy1lbGVtXFxzW147XSsvKVxuICAgICAgfHwgdmFsdWUubWF0Y2goLyg/Ol58OylcXHMqc2NyaXB0LXNyY1xcc1teO10rLylcbiAgICAgIHx8IHZhbHVlLm1hdGNoKC8oPzpefDspXFxzKmRlZmF1bHQtc3JjXFxzW147XSsvKVxuICAgICAgfHwgJycsXG4gICAgKVxuICApKTtcbn1cblxuLyoqIEBwYXJhbSB7Vk1HZXRJbmplY3RlZERhdGFDb250YWluZXJ9IGRhdGEgKi9cbmZ1bmN0aW9uIGZvcmNlQ29udGVudEluamVjdGlvbihkYXRhKSB7XG4gIC8qKiBAdHlwZSBWTUdldEluamVjdGVkRGF0YSAqL1xuICBjb25zdCBpbmplY3QgPSBkYXRhLmluamVjdDtcbiAgaW5qZWN0LmZvcmNlQ29udGVudCA9IHRydWU7XG4gIGluamVjdC5zY3JpcHRzLmZvckVhY2goc2NyID0+IHtcbiAgICAvLyBXaGVuIHNjcmlwdCB3YW50cyBgcGFnZWAsIHRoZSByZXN1bHQgYmVsb3cgd2lsbCBiZSBgdHJ1ZWAgc28gdGhlIHNjcmlwdCBnb2VzIGludG8gYGZhaWxlZElkc2BcbiAgICBzY3IuY29kZSA9ICFpc0NvbnRlbnRSZWFsbShzY3IsIHRydWUpIHx8ICcnO1xuICAgIGRhdGEuZmVlZGJhY2sucHVzaChbc2NyLmRhdGFLZXksIHRydWVdKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzQ29udGVudFJlYWxtKHNjciwgZm9yY2VDb250ZW50KSB7XG4gIGNvbnN0IHJlYWxtID0gc2NyW0lOSkVDVF9JTlRPXSB8fCAoXG4gICAgc2NyW0lOSkVDVF9JTlRPXSA9IG5vcm1hbGl6ZVJlYWxtKHNjci5jdXN0b21bSU5KRUNUX0lOVE9dIHx8IHNjci5tZXRhW0lOSkVDVF9JTlRPXSlcbiAgKTtcbiAgcmV0dXJuIHJlYWxtID09PSBJTkpFQ1RfQ09OVEVOVCB8fCBmb3JjZUNvbnRlbnQgJiYgcmVhbG0gPT09IElOSkVDVF9BVVRPO1xufVxuIiwiaW1wb3J0IHtcbiAgYmxvYjJiYXNlNjQsIGJ1ZmZlcjJzdHJpbmcsIGdldFVuaXFJZCwgcmVxdWVzdCwgaTE4biwgaXNFbXB0eSwgbm9vcCwgc2VuZFRhYkNtZCxcbiAgc3RyaW5nMnVpbnQ4YXJyYXksXG59IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IGZvckVhY2hFbnRyeSwgb2JqZWN0UGljayB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgdWEgZnJvbSAnIy9jb21tb24vdWEnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuaW1wb3J0IHsgaXNVc2VyU2NyaXB0LCBwYXJzZU1ldGEgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgeyBleHRlbnNpb25Sb290IH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuY29uc3QgVk1fVkVSSUZZID0gJ1ZNLVZlcmlmeSc7XG5jb25zdCBDT05GSVJNX1VSTF9CQVNFID0gYCR7ZXh0ZW5zaW9uUm9vdH1jb25maXJtL2luZGV4Lmh0bWwjYDtcbi8qKiBAdHlwZSB7T2JqZWN0PHN0cmluZyxWTUh0dHBSZXF1ZXN0Pn0gKi9cbmNvbnN0IHJlcXVlc3RzID0ge307XG5jb25zdCBkb3dubG9hZHMgPSB7fTtcbmNvbnN0IHZlcmlmeSA9IHt9O1xuY29uc3QgdGFiUmVxdWVzdHMgPSB7fTtcbmNvbnN0IHsgY2hyb21lIH0gPSBnbG9iYWw7XG5sZXQgZW5jb2RlcjtcblxuY29uc3QgaXNEb3dubG9hZFJlcSA9IChvcHRzKSA9PiB7XG4gIHJldHVybiAob3B0cy5vdmVycmlkZU1pbWVUeXBlID09PSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyAmJiBvcHRzLnJlc3BvbnNlVHlwZSA9PT0gJ2Jsb2InICYmIG9wdHMuZmlsZU5hbWUpO1xufTtcblxuaWYgKGNocm9tZSkge1xuICBjaHJvbWUuZG93bmxvYWRzLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihldnQgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnb25DaGFuZ2VkJywgZXZ0KTtcbiAgICBpZiAoIWRvd25sb2Fkc1tldnQuaWRdKSByZXR1cm47XG4gICAgY29uc3QgeyByZXEsIHNyYyB9ID0gZG93bmxvYWRzW2V2dC5pZF07XG4gICAgY29uc3QgeyB0YWI6IHsgaWQ6IHRhYklkIH0sIGZyYW1lSWQgfSA9IHNyYztcblxuICAgIGlmIChldnQuc3RhdGU/LmN1cnJlbnQgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIHNlbmRUYWJDbWQodGFiSWQsICdIdHRwUmVxdWVzdGVkJywge1xuICAgICAgICB0eXBlOiAnbG9hZCcsIGlkOiByZXEuaWQsIGRvd25sb2FkSWQ6IGV2dC5pZCxcbiAgICAgIH0sIHsgZnJhbWVJZCB9KTtcbiAgICAgIGRlbGV0ZSBkb3dubG9hZHNbZXZ0LmlkXTtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0c1tyZXEuaWRdO1xuICAgIH1cbiAgfSk7XG59XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgQ29uZmlybUluc3RhbGw6IGNvbmZpcm1JbnN0YWxsLFxuICBhc3luYyBDaGVja0luc3RhbGxlclRhYih0YWJJZCwgc3JjKSB7XG4gICAgY29uc3QgdGFiID0gSVNfRklSRUZPWCAmJiAoc3JjLnVybCB8fCAnJykuc3RhcnRzV2l0aCgnZmlsZTonKVxuICAgICAgJiYgYXdhaXQgYnJvd3Nlci50YWJzLmdldCh0YWJJZCkuY2F0Y2gobm9vcCk7XG4gICAgcmV0dXJuIHRhYiAmJiAodGFiLnBlbmRpbmdVcmwgfHwgdGFiLnVybCB8fCAnJykuc3RhcnRzV2l0aChDT05GSVJNX1VSTF9CQVNFKTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge3ZvaWR9ICovXG4gIEh0dHBSZXF1ZXN0KG9wdHMsIHNyYykge1xuICAgIGNvbnN0IHsgdGFiOiB7IGlkOiB0YWJJZCB9LCBmcmFtZUlkIH0gPSBzcmM7XG4gICAgY29uc3QgeyBpZCwgZXZlbnRzVG9Ob3RpZnkgfSA9IG9wdHM7XG5cbiAgICAvLyBoYW5kbGUgZG93bmxvYWRcbiAgICBpZiAoY2hyb21lICYmIGlzRG93bmxvYWRSZXEob3B0cykpIHtcbiAgICAgIC8vIGNvbnNvbGUuaW5mbyhvcHRzKTtcbiAgICAgIHJldHVybiBjaHJvbWUuZG93bmxvYWRzLmRvd25sb2FkKHtcbiAgICAgICAgdXJsOiBvcHRzLnVybCxcbiAgICAgICAgLy8gXCJzYXZlQXNcIiA6IHRydWUsXG4gICAgICAgIGZpbGVuYW1lOiBvcHRzLmZpbGVOYW1lLFxuICAgICAgfSwgZG93bmxvYWRJZCA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUuaW5mbygnZG93bmxvYWRJZCcsIGRvd25sb2FkSWQpO1xuICAgICAgICByZXF1ZXN0c1tpZF0gPSB7IGlkLCBkb3dubG9hZElkLCB0YWJJZCwgZXZlbnRzVG9Ob3RpZnksIHhocjogbnVsbCB9O1xuICAgICAgICBkb3dubG9hZHNbZG93bmxvYWRJZF0gPSB7IHJlcTogcmVxdWVzdHNbaWRdLCBvcHRzLCBzcmMgfTtcbiAgICAgICAgaWYgKGV2ZW50c1RvTm90aWZ5Py5pbmNsdWRlcygncHJvZ3Jlc3MnKSkge1xuICAgICAgICAgIHNlbmRUYWJDbWQodGFiSWQsICdIdHRwUmVxdWVzdGVkJywgeyB0eXBlOiAncHJvZ3Jlc3MnLCBpZCwgZG93bmxvYWRJZCB9LCB7IGZyYW1lSWQgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcIkh0dHBSZXF1ZXN0XCIsIG9wdHMsIHNyYyk7XG5cbiAgICByZXF1ZXN0c1tpZF0gPSB7XG4gICAgICBpZCxcbiAgICAgIHRhYklkLFxuICAgICAgZXZlbnRzVG9Ob3RpZnksXG4gICAgICB4aHI6IG5ldyBYTUxIdHRwUmVxdWVzdCgpLFxuICAgIH07XG4gICAgKHRhYlJlcXVlc3RzW3RhYklkXSB8fCAodGFiUmVxdWVzdHNbdGFiSWRdID0ge30pKVtpZF0gPSAxO1xuICAgIGh0dHBSZXF1ZXN0KG9wdHMsIHNyYywgcmVzID0+IHJlcXVlc3RzW2lkXSAmJiAoXG4gICAgICBzZW5kVGFiQ21kKHRhYklkLCAnSHR0cFJlcXVlc3RlZCcsIHJlcywgeyBmcmFtZUlkIH0pXG4gICAgKSk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHt2b2lkfSAqL1xuICBBYm9ydFJlcXVlc3QoaWQpIHtcbiAgICBjb25zdCByZXEgPSByZXF1ZXN0c1tpZF07XG4gICAgaWYgKHJlcSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpZiAoY2hyb21lKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBjaHJvbWUuZG93bmxvYWRzLmNhbmNlbChyZXEuaWQpO1xuICAgICAgICBkZWxldGUgcmVxdWVzdHNbcmVxLmlkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcS54aHIuYWJvcnQoKTtcbiAgICAgICAgY2xlYXJSZXF1ZXN0KHJlcSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBSZXZva2VCbG9iKHVybCkge1xuICAgIGNvbnN0IHRpbWVyID0gY2FjaGUucG9wKGB4aHJCbG9iOiR7dXJsfWApO1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICB9XG4gIH0sXG59KTtcblxuY29uc3Qgc3BlY2lhbEhlYWRlcnMgPSBbXG4gICd1c2VyLWFnZW50JyxcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9HbG9zc2FyeS9Gb3JiaWRkZW5faGVhZGVyX25hbWVcbiAgLy8gaHR0cHM6Ly9jcy5jaHJvbWl1bS5vcmcvP3E9ZmlsZTpjYytzeW1ib2w6SXNGb3JiaWRkZW5IZWFkZXIlNUNiXG4gICdhY2NlcHQtY2hhcnNldCcsXG4gICdhY2NlcHQtZW5jb2RpbmcnLFxuICAnYWNjZXNzLWNvbnRyb2wtcmVxdWVzdC1oZWFkZXJzJyxcbiAgJ2FjY2Vzcy1jb250cm9sLXJlcXVlc3QtbWV0aG9kJyxcbiAgJ2Nvbm5lY3Rpb24nLFxuICAnY29udGVudC1sZW5ndGgnLFxuICAnY29va2llJyxcbiAgJ2Nvb2tpZTInLFxuICAnZGF0ZScsXG4gICdkbnQnLFxuICAnZXhwZWN0JyxcbiAgJ2hvc3QnLFxuICAna2VlcC1hbGl2ZScsXG4gICdvcmlnaW4nLFxuICAncmVmZXJlcicsXG4gICd0ZScsXG4gICd0cmFpbGVyJyxcbiAgJ3RyYW5zZmVyLWVuY29kaW5nJyxcbiAgJ3VwZ3JhZGUnLFxuICAndmlhJyxcbl07XG4vLyBjb25zdCB0YXNrcyA9IHt9O1xuY29uc3QgSGVhZGVySW5qZWN0b3IgPSAoKCkgPT4ge1xuICAvKiogQHR5cGUgY2hyb21lLndlYlJlcXVlc3QuUmVxdWVzdEZpbHRlciAqL1xuICBjb25zdCBhcGlGaWx0ZXIgPSB7XG4gICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4gICAgdHlwZXM6IFsneG1saHR0cHJlcXVlc3QnXSxcbiAgfTtcbiAgY29uc3QgRVhUUkFfSEVBREVSUyA9IFtcbiAgICBicm93c2VyLndlYlJlcXVlc3QuT25CZWZvcmVTZW5kSGVhZGVyc09wdGlvbnMuRVhUUkFfSEVBREVSUyxcbiAgXS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IGhlYWRlcnNUb0luamVjdCA9IHt9O1xuICAvKiogQHBhcmFtIHtjaHJvbWUud2ViUmVxdWVzdC5IdHRwSGVhZGVyfSBoZWFkZXIgKi9cbiAgY29uc3QgaXNWbVZlcmlmeSA9IGhlYWRlciA9PiBoZWFkZXIubmFtZSA9PT0gVk1fVkVSSUZZO1xuICBjb25zdCBpc05vdENvb2tpZSA9IGhlYWRlciA9PiAhL15jb29raWUyPyQvaS50ZXN0KGhlYWRlci5uYW1lKTtcbiAgY29uc3QgaXNTZW5kYWJsZSA9IGhlYWRlciA9PiBoZWFkZXIubmFtZSAhPT0gVk1fVkVSSUZZO1xuICBjb25zdCBpc1NlbmRhYmxlQW5vbiA9IGhlYWRlciA9PiBpc1NlbmRhYmxlKGhlYWRlcikgJiYgaXNOb3RDb29raWUoaGVhZGVyKTtcbiAgY29uc3QgUkVfU0VUX0NPT0tJRSA9IC9ec2V0LWNvb2tpZTI/JC9pO1xuICBjb25zdCBSRV9TRVRfQ09PS0lFX1ZBTFVFID0gL15cXHMqKD86X18oU2VjdXJlfEhvc3QpLSk/KFtePVxcc10rKVxccyo9XFxzKihcIik/KFshIy0rXFwtLTo8LVtcXF0tfl0qKVxcMyguKikvO1xuICBjb25zdCBSRV9TRVRfQ09PS0lFX0FUVFIgPSAvXFxzKjs/XFxzKihcXHcrKSg/Oj0oXCIpPyhbISMtK1xcLS06PC1bXFxdLX5dKilcXDIpPy95O1xuICBjb25zdCBTQU1FX1NJVEVfTUFQID0ge1xuICAgIHN0cmljdDogJ3N0cmljdCcsXG4gICAgbGF4OiAnbGF4JyxcbiAgICBub25lOiAnbm9fcmVzdHJpY3Rpb24nLFxuICB9O1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhlYWRlclZhbHVlXG4gICAqIEBwYXJhbSB7Vk1IdHRwUmVxdWVzdH0gcmVxXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIGNvbnN0IHNldENvb2tpZUluU3RvcmUgPSAoaGVhZGVyVmFsdWUsIHJlcSwgdXJsKSA9PiB7XG4gICAgbGV0IG0gPSBSRV9TRVRfQ09PS0lFX1ZBTFVFLmV4ZWMoaGVhZGVyVmFsdWUpO1xuICAgIGlmIChtKSB7XG4gICAgICBjb25zdCBbLCBwcmVmaXgsIG5hbWUsICwgdmFsdWUsIG9wdFN0cl0gPSBtO1xuICAgICAgY29uc3Qgb3B0ID0ge307XG4gICAgICBjb25zdCBpc0hvc3QgPSBwcmVmaXggPT09ICdIb3N0JztcbiAgICAgIFJFX1NFVF9DT09LSUVfQVRUUi5sYXN0SW5kZXggPSAwO1xuICAgICAgd2hpbGUgKChtID0gUkVfU0VUX0NPT0tJRV9BVFRSLmV4ZWMob3B0U3RyKSkpIHtcbiAgICAgICAgb3B0W21bMV0udG9Mb3dlckNhc2UoKV0gPSBtWzNdO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2FtZVNpdGUgPSBvcHQuc2FtZVNpdGU/LnRvTG93ZXJDYXNlKCk7XG4gICAgICBicm93c2VyLmNvb2tpZXMuc2V0KHtcbiAgICAgICAgdXJsLFxuICAgICAgICBuYW1lLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgZG9tYWluOiBpc0hvc3QgPyB1bmRlZmluZWQgOiBvcHQuZG9tYWluLFxuICAgICAgICBleHBpcmF0aW9uRGF0ZTogTWF0aC5tYXgoMCwgK25ldyBEYXRlKG9wdFsnbWF4LWFnZSddICogMTAwMCB8fCBvcHQuZXhwaXJlcykpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgaHR0cE9ubHk6ICdodHRwb25seScgaW4gb3B0LFxuICAgICAgICBwYXRoOiBpc0hvc3QgPyAnLycgOiBvcHQucGF0aCxcbiAgICAgICAgc2FtZVNpdGU6IFNBTUVfU0lURV9NQVBbc2FtZVNpdGVdLFxuICAgICAgICBzZWN1cmU6IHVybC5zdGFydHNXaXRoKCdodHRwczonKSAmJiAoISFwcmVmaXggfHwgc2FtZVNpdGUgPT09ICdub25lJyB8fCAnc2VjdXJlJyBpbiBvcHQpLFxuICAgICAgICBzdG9yZUlkOiByZXEuc3RvcmVJZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYXBpRXZlbnRzID0ge1xuICAgIG9uQmVmb3JlU2VuZEhlYWRlcnM6IHtcbiAgICAgIG9wdGlvbnM6IFsncmVxdWVzdEhlYWRlcnMnLCAnYmxvY2tpbmcnLCAuLi5FWFRSQV9IRUFERVJTXSxcbiAgICAgIC8qKiBAcGFyYW0ge2Nocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RIZWFkZXJzRGV0YWlsc30gZGV0YWlscyAqL1xuICAgICAgbGlzdGVuZXIoeyByZXF1ZXN0SGVhZGVyczogaGVhZGVycywgcmVxdWVzdElkIH0pIHtcbiAgICAgICAgLy8gb25seSB0aGUgZmlyc3QgY2FsbCBkdXJpbmcgYSByZWRpcmVjdC9hdXRoIGNoYWluIHdpbGwgaGF2ZSBWTS1WZXJpZnkgaGVhZGVyXG4gICAgICAgIGNvbnN0IHJlcUlkID0gaGVhZGVycy5maW5kKGlzVm1WZXJpZnkpPy52YWx1ZSB8fCB2ZXJpZnlbcmVxdWVzdElkXTtcbiAgICAgICAgY29uc3QgcmVxID0gcmVxSWQgJiYgcmVxdWVzdHNbcmVxSWRdO1xuICAgICAgICBpZiAocmVxSWQgJiYgcmVxKSB7XG4gICAgICAgICAgdmVyaWZ5W3JlcXVlc3RJZF0gPSByZXFJZDtcbiAgICAgICAgICByZXEuY29yZUlkID0gcmVxdWVzdElkO1xuICAgICAgICAgIGhlYWRlcnMgPSAocmVxLm5vTmF0aXZlQ29va2llID8gaGVhZGVycy5maWx0ZXIoaXNOb3RDb29raWUpIDogaGVhZGVycylcbiAgICAgICAgICAuY29uY2F0KGhlYWRlcnNUb0luamVjdFtyZXFJZF0gfHwgW10pXG4gICAgICAgICAgLmZpbHRlcihyZXEuYW5vbnltb3VzID8gaXNTZW5kYWJsZUFub24gOiBpc1NlbmRhYmxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyByZXF1ZXN0SGVhZGVyczogaGVhZGVycyB9O1xuICAgICAgfSxcbiAgICB9LFxuICAgIG9uSGVhZGVyc1JlY2VpdmVkOiB7XG4gICAgICBvcHRpb25zOiBbJ3Jlc3BvbnNlSGVhZGVycycsICdibG9ja2luZycsIC4uLkVYVFJBX0hFQURFUlNdLFxuICAgICAgLyoqIEBwYXJhbSB7Y2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdEhlYWRlcnNEZXRhaWxzfSBkZXRhaWxzICovXG4gICAgICBsaXN0ZW5lcih7IHJlc3BvbnNlSGVhZGVyczogaGVhZGVycywgcmVxdWVzdElkLCB1cmwgfSkge1xuICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0c1t2ZXJpZnlbcmVxdWVzdElkXV07XG4gICAgICAgIGlmIChyZXEpIHtcbiAgICAgICAgICBpZiAocmVxLmFub255bW91cyB8fCByZXEuc3RvcmVJZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuZmlsdGVyKGggPT4gKFxuICAgICAgICAgICAgICAhUkVfU0VUX0NPT0tJRS50ZXN0KGgubmFtZSlcbiAgICAgICAgICAgICAgfHwgIXJlcS5zdG9yZUlkXG4gICAgICAgICAgICAgIHx8IHNldENvb2tpZUluU3RvcmUoaC52YWx1ZSwgcmVxLCB1cmwpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVxLnJlc3BvbnNlSGVhZGVycyA9IGhlYWRlcnMubWFwKGVuY29kZVdlYlJlcXVlc3RIZWFkZXIpLmpvaW4oJycpO1xuICAgICAgICAgIHJldHVybiB7IHJlc3BvbnNlSGVhZGVyczogaGVhZGVycyB9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIC8vIENocm9tZSA3NC05MSBuZWVkcyBhbiBleHRyYUhlYWRlcnMgbGlzdGVuZXIgYXQgdGFiIGxvYWQgc3RhcnQsIGh0dHBzOi8vY3JidWcuY29tLzEwNzQyODJcbiAgLy8gV2UncmUgYXR0YWNoaW5nIGEgbm8tb3AgaW4gbm9uLWJsb2NraW5nIG1vZGUgc28gaXQncyB2ZXJ5IGxpZ2h0d2VpZ2h0IGFuZCBmYXN0LlxuICBpZiAodWEuY2hyb21lID49IDc0ICYmIHVhLmNocm9tZSA8PSA5MSkge1xuICAgIGJyb3dzZXIud2ViUmVxdWVzdC5vbkJlZm9yZVNlbmRIZWFkZXJzLmFkZExpc3RlbmVyKG5vb3AsIGFwaUZpbHRlciwgWydleHRyYUhlYWRlcnMnXSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhZGQocmVxSWQsIGhlYWRlcnMpIHtcbiAgICAgIC8vIG5lZWQgdG8gc2V0IHRoZSBlbnRyeSBldmVuIGlmIGl0J3MgZW1wdHkgW10gc28gdGhhdCAnaWYnIGNoZWNrIGluIGRlbCgpIHJ1bnMgb25seSBvbmNlXG4gICAgICBoZWFkZXJzVG9JbmplY3RbcmVxSWRdID0gaGVhZGVycztcbiAgICAgIC8vIG5lZWQgdGhlIGxpc3RlbmVyIHRvIGdldCB0aGUgcmVxdWVzdElkXG4gICAgICBhcGlFdmVudHM6OmZvckVhY2hFbnRyeSgoW25hbWUsIHsgbGlzdGVuZXIsIG9wdGlvbnMgfV0pID0+IHtcbiAgICAgICAgYnJvd3Nlci53ZWJSZXF1ZXN0W25hbWVdLmFkZExpc3RlbmVyKGxpc3RlbmVyLCBhcGlGaWx0ZXIsIG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBkZWwocmVxSWQpIHtcbiAgICAgIGlmIChyZXFJZCBpbiBoZWFkZXJzVG9JbmplY3QpIHtcbiAgICAgICAgZGVsZXRlIGhlYWRlcnNUb0luamVjdFtyZXFJZF07XG4gICAgICAgIGlmIChpc0VtcHR5KGhlYWRlcnNUb0luamVjdCkpIHtcbiAgICAgICAgICBhcGlFdmVudHM6OmZvckVhY2hFbnRyeSgoW25hbWUsIHsgbGlzdGVuZXIgfV0pID0+IHtcbiAgICAgICAgICAgIGJyb3dzZXIud2ViUmVxdWVzdFtuYW1lXS5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufSkoKTtcblxuLyogMU1CIHRha2VzIH4yMG1zIHRvIGVuY29kZS9kZWNvZGUgc28gaXQgZG9lc24ndCBibG9jayB0aGUgcHJvY2VzcyBvZiB0aGUgZXh0ZW5zaW9uIGFuZCB3ZWIgcGFnZSxcbiAqIHdoaWNoIGxldHMgdXMgYW5kIHRoZW0gYmUgcmVzcG9uc2l2ZSB0byBvdGhlciBldmVudHMgb3IgdXNlciBpbnB1dC4gKi9cbmNvbnN0IENIVU5LX1NJWkUgPSAxZTY7XG5cbmFzeW5jIGZ1bmN0aW9uIGJsb2IyY2h1bmsocmVzcG9uc2UsIGluZGV4KSB7XG4gIHJldHVybiBibG9iMmJhc2U2NChyZXNwb25zZSwgaW5kZXggKiBDSFVOS19TSVpFLCBDSFVOS19TSVpFKTtcbn1cblxuZnVuY3Rpb24gYmxvYjJvYmplY3RVcmwocmVzcG9uc2UpIHtcbiAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZXNwb25zZSk7XG4gIGNhY2hlLnB1dChgeGhyQmxvYjoke3VybH1gLCBzZXRUaW1lb3V0KGNvbW1hbmRzLlJldm9rZUJsb2IsIDYwZTMsIHVybCksIDYxZTMpO1xuICByZXR1cm4gdXJsO1xufVxuXG4vKiogQHBhcmFtIHtWTUh0dHBSZXF1ZXN0fSByZXEgKi9cbmZ1bmN0aW9uIHhockNhbGxiYWNrV3JhcHBlcihyZXEpIHtcbiAgbGV0IGxhc3RQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIGxldCBjb250ZW50VHlwZTtcbiAgbGV0IGRhdGFTaXplO1xuICBsZXQgbnVtQ2h1bmtzO1xuICBsZXQgcmVzcG9uc2U7XG4gIGxldCByZXNwb25zZVRleHQ7XG4gIGxldCByZXNwb25zZUhlYWRlcnM7XG4gIGxldCBzZW50ID0gZmFsc2U7XG4gIGNvbnN0IHsgaWQsIGJsb2JiZWQsIGNodW5rZWQsIHhociB9ID0gcmVxO1xuICAvLyBDaHJvbWUgZW5jb2RlcyBtZXNzYWdlcyB0byBVVEY4IHNvIHRoZXkgY2FuIGdyb3cgdXAgdG8gNHggYnV0IDY0TUIgaXMgdGhlIG1lc3NhZ2Ugc2l6ZSBsaW1pdFxuICBjb25zdCBnZXRDaHVuayA9IGJsb2JiZWQgJiYgYmxvYjJvYmplY3RVcmwgfHwgY2h1bmtlZCAmJiBibG9iMmNodW5rO1xuICBjb25zdCBnZXRSZXNwb25zZUhlYWRlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IHJlcS5yZXNwb25zZUhlYWRlcnMgfHwgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuICAgIGlmIChyZXNwb25zZUhlYWRlcnMgIT09IGhlYWRlcnMpIHtcbiAgICAgIHJlc3BvbnNlSGVhZGVycyA9IGhlYWRlcnM7XG4gICAgICByZXR1cm4geyByZXNwb25zZUhlYWRlcnMgfTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoZXZ0KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGV2dC50eXBlO1xuICAgIGlmICghY29udGVudFR5cGUpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICB9XG4gICAgaWYgKHhoci5yZXNwb25zZSAhPT0gcmVzcG9uc2UpIHtcbiAgICAgIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlO1xuICAgICAgc2VudCA9IGZhbHNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgaWYgKHJlc3BvbnNlVGV4dCA9PT0gcmVzcG9uc2UpIHJlc3BvbnNlVGV4dCA9IFsnc2FtZSddO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmUgaWYgcmVzcG9uc2VUZXh0IGlzIHVucmVhY2hhYmxlXG4gICAgICB9XG4gICAgICBpZiAoKGJsb2JiZWQgfHwgY2h1bmtlZCkgJiYgcmVzcG9uc2UpIHtcbiAgICAgICAgZGF0YVNpemUgPSByZXNwb25zZS5zaXplO1xuICAgICAgICBudW1DaHVua3MgPSBjaHVua2VkICYmIE1hdGguY2VpbChkYXRhU2l6ZSAvIENIVU5LX1NJWkUpIHx8IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNob3VsZE5vdGlmeSA9IHJlcS5ldmVudHNUb05vdGlmeS5pbmNsdWRlcyh0eXBlKTtcbiAgICAvLyBvbmx5IHNlbmQgcmVzcG9uc2Ugd2hlbiBYSFIgaXMgY29tcGxldGVcbiAgICBjb25zdCBzaG91bGRTZW5kUmVzcG9uc2UgPSB4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiBzaG91bGROb3RpZnkgJiYgIXNlbnQ7XG4gICAgbGFzdFByb21pc2UgPSBsYXN0UHJvbWlzZS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHJlcS5jYih7XG4gICAgICAgIGJsb2JiZWQsXG4gICAgICAgIGNodW5rZWQsXG4gICAgICAgIGNvbnRlbnRUeXBlLFxuICAgICAgICBkYXRhU2l6ZSxcbiAgICAgICAgaWQsXG4gICAgICAgIG51bUNodW5rcyxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgZGF0YTogc2hvdWxkTm90aWZ5ICYmIHtcbiAgICAgICAgICBmaW5hbFVybDogeGhyLnJlc3BvbnNlVVJMLFxuICAgICAgICAgIC4uLmdldFJlc3BvbnNlSGVhZGVycygpLFxuICAgICAgICAgIC4uLm9iamVjdFBpY2soeGhyLCBbJ3JlYWR5U3RhdGUnLCAnc3RhdHVzJywgJ3N0YXR1c1RleHQnXSksXG4gICAgICAgICAgLi4uKCdsb2FkZWQnIGluIGV2dCkgJiYgb2JqZWN0UGljayhldnQsIFsnbGVuZ3RoQ29tcHV0YWJsZScsICdsb2FkZWQnLCAndG90YWwnXSksXG4gICAgICAgICAgcmVzcG9uc2U6IHNob3VsZFNlbmRSZXNwb25zZVxuICAgICAgICAgICAgPyBudW1DaHVua3MgJiYgYXdhaXQgZ2V0Q2h1bmsocmVzcG9uc2UsIDApIHx8IHJlc3BvbnNlXG4gICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgcmVzcG9uc2VUZXh0OiBzaG91bGRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAgID8gcmVzcG9uc2VUZXh0XG4gICAgICAgICAgICA6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGlmIChzaG91bGRTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1DaHVua3M7IGkgKz0gMSkge1xuICAgICAgICAgIGF3YWl0IHJlcS5jYih7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGNodW5rOiB7XG4gICAgICAgICAgICAgIHBvczogaSAqIENIVU5LX1NJWkUsXG4gICAgICAgICAgICAgIGRhdGE6IGF3YWl0IGdldENodW5rKHJlc3BvbnNlLCBpKSxcbiAgICAgICAgICAgICAgbGFzdDogaSArIDEgPT09IG51bUNodW5rcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnbG9hZGVuZCcpIHtcbiAgICAgICAgY2xlYXJSZXF1ZXN0KHJlcSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lhbEhlYWRlcihsb3dlckhlYWRlcikge1xuICByZXR1cm4gc3BlY2lhbEhlYWRlcnMuaW5jbHVkZXMobG93ZXJIZWFkZXIpXG4gICAgfHwgbG93ZXJIZWFkZXIuc3RhcnRzV2l0aCgncHJveHktJylcbiAgICB8fCBsb3dlckhlYWRlci5zdGFydHNXaXRoKCdzZWMtJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBwYXJhbSB7Y2hyb21lLnJ1bnRpbWUuTWVzc2FnZVNlbmRlciB8IGJyb3dzZXIucnVudGltZS5NZXNzYWdlU2VuZGVyfSBzcmNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGh0dHBSZXF1ZXN0KG9wdHMsIHNyYywgY2IpIHtcbiAgY29uc3QgeyB0YWIgfSA9IHNyYztcbiAgY29uc3QgeyBpbmNvZ25pdG8gfSA9IHRhYjtcbiAgY29uc3QgeyBhbm9ueW1vdXMsIGlkLCBvdmVycmlkZU1pbWVUeXBlLCB4aHJUeXBlLCB1cmwgfSA9IG9wdHM7XG4gIGNvbnN0IHJlcSA9IHJlcXVlc3RzW2lkXTtcbiAgaWYgKCFyZXEgfHwgcmVxLmNiKSByZXR1cm47XG4gIHJlcS5jYiA9IGNiO1xuICByZXEuYW5vbnltb3VzID0gYW5vbnltb3VzO1xuICBjb25zdCB7IHhociB9ID0gcmVxO1xuICBjb25zdCB2bUhlYWRlcnMgPSBbXTtcbiAgLy8gRmlyZWZveCBjYW4gc2VuZCBCbG9iL0FycmF5QnVmZmVyIGRpcmVjdGx5XG4gIGNvbnN0IGNodW5rZWQgPSAhSVNfRklSRUZPWCAmJiBpbmNvZ25pdG87XG4gIGNvbnN0IGJsb2JiZWQgPSB4aHJUeXBlICYmICFJU19GSVJFRk9YICYmICFpbmNvZ25pdG87XG4gIGNvbnN0IFtib2R5LCBjb250ZW50VHlwZV0gPSBkZWNvZGVCb2R5KG9wdHMuZGF0YSk7XG4gIC8vIENocm9tZSBjYW4ndCBmZXRjaCBCbG9iIFVSTCBpbiBpbmNvZ25pdG8gc28gd2UgdXNlIGNodW5rc1xuICByZXEuYmxvYmJlZCA9IGJsb2JiZWQ7XG4gIHJlcS5jaHVua2VkID0gY2h1bmtlZDtcbiAgLy8gRmlyZWZveCBkb2Vzbid0IHNlbmQgY29va2llcywgaHR0cHM6Ly9naXRodWIuY29tL3Zpb2xlbnRtb25rZXkvdmlvbGVudG1vbmtleS9pc3N1ZXMvNjA2XG4gIC8vIEJvdGggQ2hyb21lICYgRkYgbmVlZCBleHBsaWNpdCByb3V0aW5nIG9mIGNvb2tpZXMgaW4gY29udGFpbmVycyBvciBpbmNvZ25pdG9cbiAgbGV0IHNob3VsZFNlbmRDb29raWVzID0gIWFub255bW91cyAmJiAoaW5jb2duaXRvIHx8IElTX0ZJUkVGT1gpO1xuICB4aHIub3BlbihvcHRzLm1ldGhvZCB8fCAnR0VUJywgdXJsLCB0cnVlLCBvcHRzLnVzZXIgfHwgJycsIG9wdHMucGFzc3dvcmQgfHwgJycpO1xuICB4aHIuc2V0UmVxdWVzdEhlYWRlcihWTV9WRVJJRlksIGlkKTtcbiAgaWYgKGNvbnRlbnRUeXBlKSB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuICBvcHRzLmhlYWRlcnM6OmZvckVhY2hFbnRyeSgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoaXNTcGVjaWFsSGVhZGVyKGxvd2VyTmFtZSkpIHtcbiAgICAgIHZtSGVhZGVycy5wdXNoKHsgbmFtZSwgdmFsdWUgfSk7XG4gICAgfSBlbHNlIGlmICghbG93ZXJOYW1lLnN0YXJ0c1dpdGgoJ3ZtLScpKSB7XG4gICAgICAvLyBgVk0tYCBoZWFkZXJzIGFyZSByZXNlcnZlZFxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICBpZiAobG93ZXJOYW1lID09PSAnY29va2llJykge1xuICAgICAgc2hvdWxkU2VuZENvb2tpZXMgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICB4aHIucmVzcG9uc2VUeXBlID0gKGNodW5rZWQgfHwgYmxvYmJlZCkgJiYgJ2Jsb2InIHx8IHhoclR5cGUgfHwgJ3RleHQnO1xuICB4aHIudGltZW91dCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDB4N0ZGRl9GRkZGLCBvcHRzLnRpbWVvdXQpKSB8fCAwO1xuICBpZiAob3ZlcnJpZGVNaW1lVHlwZSkgeGhyLm92ZXJyaWRlTWltZVR5cGUob3ZlcnJpZGVNaW1lVHlwZSk7XG4gIGlmIChzaG91bGRTZW5kQ29va2llcykge1xuICAgIHJlcS5ub05hdGl2ZUNvb2tpZSA9IHRydWU7XG4gICAgZm9yIChjb25zdCBzdG9yZSBvZiBhd2FpdCBicm93c2VyLmNvb2tpZXMuZ2V0QWxsQ29va2llU3RvcmVzKCkpIHtcbiAgICAgIGlmIChzdG9yZS50YWJJZHMuaW5jbHVkZXModGFiLmlkKSkge1xuICAgICAgICBpZiAoSVNfRklSRUZPWCA/IHN0b3JlLmlkICE9PSAnZmlyZWZveC1kZWZhdWx0JyA6IHN0b3JlLmlkICE9PSAnMCcpIHtcbiAgICAgICAgICAvKiBDb29raWUgcm91dGluZy4gRm9yIHRoZSBtYWluIHN0b3JlIHdlIHJlbHkgb24gdGhlIGJyb3dzZXIuXG4gICAgICAgICAgICogVGhlIGlkcyBhcmUgaGFyZC1jb2RlZCBhcyBgc3RvcmVzYCBtYXkgb21pdCB0aGUgbWFpbiBzdG9yZSBpZiBubyBzdWNoIHRhYnMgYXJlIG9wZW4uICovXG4gICAgICAgICAgcmVxLnN0b3JlSWQgPSBzdG9yZS5pZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgY29uc3QgY29va2llcyA9IChhd2FpdCBicm93c2VyLmNvb2tpZXMuZ2V0QWxsKHtcbiAgICAgIHVybCxcbiAgICAgIHN0b3JlSWQ6IHJlcS5zdG9yZUlkLFxuICAgICAgLi4udWEuZmlyZWZveCA+PSA1OSAmJiB7IGZpcnN0UGFydHlEb21haW46IG51bGwgfSxcbiAgICB9KSkuZmlsdGVyKGMgPT4gYy5zZXNzaW9uIHx8IGMuZXhwaXJhdGlvbkRhdGUgPiBub3cpOyAvLyBGRiByZXBvcnRzIGV4cGlyZWQgY29va2llcyFcbiAgICBpZiAoY29va2llcy5sZW5ndGgpIHtcbiAgICAgIHZtSGVhZGVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2Nvb2tpZScsXG4gICAgICAgIHZhbHVlOiBjb29raWVzLm1hcChjID0+IGAke2MubmFtZX09JHtjLnZhbHVlfTtgKS5qb2luKCcgJyksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgSGVhZGVySW5qZWN0b3IuYWRkKGlkLCB2bUhlYWRlcnMpO1xuICBjb25zdCBjYWxsYmFjayA9IHhockNhbGxiYWNrV3JhcHBlcihyZXEpO1xuICByZXEuZXZlbnRzVG9Ob3RpZnkuZm9yRWFjaChldnQgPT4geyB4aHJbYG9uJHtldnR9YF0gPSBjYWxsYmFjazsgfSk7XG4gIHhoci5vbmxvYWRlbmQgPSBjYWxsYmFjazsgLy8gYWx3YXlzIHNlbmQgaXQgZm9yIHRoZSBpbnRlcm5hbCBjbGVhbnVwXG4gIHhoci5zZW5kKGJvZHkpO1xufVxuXG4vKiogQHBhcmFtIHtWTUh0dHBSZXF1ZXN0fSByZXEgKi9cbmZ1bmN0aW9uIGNsZWFyUmVxdWVzdChyZXEpIHtcbiAgaWYgKHJlcS5jb3JlSWQpIGRlbGV0ZSB2ZXJpZnlbcmVxLmNvcmVJZF07XG4gIGRlbGV0ZSByZXF1ZXN0c1tyZXEuaWRdO1xuICBkZWxldGUgKHRhYlJlcXVlc3RzW3JlcS50YWJJZF0gfHwge30pW3JlcS5pZF07XG4gIEhlYWRlckluamVjdG9yLmRlbChyZXEuaWQpO1xufVxuXG4vKiogUG9seWZpbGwgZm9yIENocm9tZSdzIGluYWJpbGl0eSB0byBzZW5kIGNvbXBsZXggdHlwZXMgb3ZlciBleHRlbnNpb24gbWVzc2FnaW5nICovXG5mdW5jdGlvbiBkZWNvZGVCb2R5KFtib2R5LCB0eXBlLCB3YXNCbG9iXSkge1xuICBpZiAodHlwZSA9PT0gJ3F1ZXJ5Jykge1xuICAgIHR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgfSBlbHNlIGlmICh0eXBlKSB7XG4gICAgLy8gNXggdGltZXMgZmFzdGVyIHRoYW4gZmV0Y2goKSB3aGljaCB3YXN0ZXMgdGltZSBvbiBpbnRlci1wcm9jZXNzIGNvbW11bmljYXRpb25cbiAgICBjb25zdCByZXMgPSBzdHJpbmcydWludDhhcnJheShhdG9iKGJvZHkuc2xpY2UoYm9keS5pbmRleE9mKCcsJykgKyAxKSkpO1xuICAgIGlmICghd2FzQmxvYikge1xuICAgICAgdHlwZSA9IGJvZHkubWF0Y2goL15kYXRhOiguKz8pO2Jhc2U2NC8pWzFdLnJlcGxhY2UoLyhib3VuZGFyeT0pW147XSsvLFxuICAgICAgICAvLyB1c2luZyBhIGZ1bmN0aW9uIHNvIGl0IHJ1bnMgb25seSBpZiBcImJvdW5kYXJ5XCIgd2FzIGZvdW5kXG4gICAgICAgIChfLCBwMSkgPT4gcDEgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLnJlcy5zbGljZSgyLCByZXMuaW5kZXhPZigxMykpKSk7XG4gICAgfVxuICAgIGJvZHkgPSByZXM7XG4gIH1cbiAgcmV0dXJuIFtib2R5LCB0eXBlXTtcbn1cblxuLy8gV2F0Y2ggVVJMIHJlZGlyZWN0c1xuLy8gYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVkaXJlY3QuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XG4vLyAgIGNvbnN0IHJlcUlkID0gdmVyaWZ5W2RldGFpbHMucmVxdWVzdElkXTtcbi8vICAgaWYgKHJlcUlkKSB7XG4vLyAgICAgY29uc3QgcmVxID0gcmVxdWVzdHNbcmVxSWRdO1xuLy8gICAgIGlmIChyZXEpIHJlcS5maW5hbFVybCA9IGRldGFpbHMucmVkaXJlY3RVcmw7XG4vLyAgIH1cbi8vIH0sIHtcbi8vICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4vLyAgIHR5cGVzOiBbJ3htbGh0dHByZXF1ZXN0J10sXG4vLyB9KTtcblxuLy8gdGFza3MgYXJlIG5vdCBuZWNlc3Nhcnkgbm93LCB0dXJuZWQgb2ZmXG4vLyBTdG9wIHJlZGlyZWN0c1xuLy8gYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkLmFkZExpc3RlbmVyKGRldGFpbHMgPT4ge1xuLy8gICBjb25zdCB0YXNrID0gdGFza3NbZGV0YWlscy5yZXF1ZXN0SWRdO1xuLy8gICBpZiAodGFzaykge1xuLy8gICAgIGRlbGV0ZSB0YXNrc1tkZXRhaWxzLnJlcXVlc3RJZF07XG4vLyAgICAgaWYgKHRhc2sgPT09ICdHZXQtTG9jYXRpb24nICYmIFszMDEsIDMwMiwgMzAzXS5pbmNsdWRlcyhkZXRhaWxzLnN0YXR1c0NvZGUpKSB7XG4vLyAgICAgICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRldGFpbHMucmVzcG9uc2VIZWFkZXJzLmZpbmQoXG4vLyAgICAgICAgIGhlYWRlciA9PiBoZWFkZXIubmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbG9jYXRpb24nKTtcbi8vICAgICAgIGNvbnN0IGJhc2U2NCA9IGxvY2F0aW9uSGVhZGVyICYmIGxvY2F0aW9uSGVhZGVyLnZhbHVlO1xuLy8gICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcmVkaXJlY3RVcmw6IGBkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwke2Jhc2U2NCB8fCAnJ31gLFxuLy8gICAgICAgfTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH0sIHtcbi8vICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4vLyAgIHR5cGVzOiBbJ3htbGh0dHByZXF1ZXN0J10sXG4vLyB9LCBbJ2Jsb2NraW5nJywgJ3Jlc3BvbnNlSGVhZGVycyddKTtcbi8vIGJyb3dzZXIud2ViUmVxdWVzdC5vbkNvbXBsZXRlZC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcbi8vICAgZGVsZXRlIHRhc2tzW2RldGFpbHMucmVxdWVzdElkXTtcbi8vIH0sIHtcbi8vICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4vLyAgIHR5cGVzOiBbJ3htbGh0dHByZXF1ZXN0J10sXG4vLyB9KTtcbi8vIGJyb3dzZXIud2ViUmVxdWVzdC5vbkVycm9yT2NjdXJyZWQuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XG4vLyAgIGRlbGV0ZSB0YXNrc1tkZXRhaWxzLnJlcXVlc3RJZF07XG4vLyB9LCB7XG4vLyAgIHVybHM6IFsnPGFsbF91cmxzPiddLFxuLy8gICB0eXBlczogWyd4bWxodHRwcmVxdWVzdCddLFxuLy8gfSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbmZpcm1JbnN0YWxsKHsgY29kZSwgZnJvbSwgdXJsIH0sIHsgdGFiID0ge30gfSkge1xuICBpZiAoIWNvZGUpIGNvZGUgPSAoYXdhaXQgcmVxdWVzdCh1cmwpKS5kYXRhO1xuICAvLyBUT0RPOiBkaXNwbGF5IHRoZSBlcnJvciBpbiBVSVxuICBpZiAoIWlzVXNlclNjcmlwdChjb2RlKSkgdGhyb3cgaTE4bignbXNnSW52YWxpZFNjcmlwdCcpO1xuICBjYWNoZS5wdXQodXJsLCBjb2RlLCAzMDAwKTtcbiAgY29uc3QgY29uZmlybUtleSA9IGdldFVuaXFJZCgpO1xuICBjb25zdCB7IGFjdGl2ZSwgaWQ6IHRhYklkLCBpbmNvZ25pdG8gfSA9IHRhYjtcbiAgLy8gTm90IHRlc3RpbmcgdGFiLnBlbmRpbmdVcmwgYmVjYXVzZSBpdCB3aWxsIGJlIGFsd2F5cyBlcXVhbCB0byBgdXJsYFxuICBjb25zdCBjYW5SZXBsYWNlQ3VyVGFiID0gKCFpbmNvZ25pdG8gfHwgSVNfRklSRUZPWCkgJiYgKFxuICAgIHVybCA9PT0gZnJvbVxuICAgIHx8IGNhY2hlLmhhcyhgYXV0b2Nsb3NlOiR7dGFiSWR9YClcbiAgICB8fCAvXihjaHJvbWU6XFwvXFwvKG5ld3RhYnxzdGFydHBhZ2UpXFwvfGFib3V0Oihob21lfG5ld3RhYikpJC8udGVzdChmcm9tKSk7XG4gIC8qKiBAbmFtZXNwYWNlIFZNQ29uZmlybUNhY2hlICovXG4gIGNhY2hlLnB1dChgY29uZmlybS0ke2NvbmZpcm1LZXl9YCwgeyBpbmNvZ25pdG8sIHVybCwgZnJvbSwgdGFiSWQsIGZmOiB1YS5maXJlZm94IH0pO1xuICBjb25zdCBjb25maXJtVXJsID0gQ09ORklSTV9VUkxfQkFTRSArIGNvbmZpcm1LZXk7XG4gIGNvbnN0IHsgd2luZG93SWQgfSA9IGNhblJlcGxhY2VDdXJUYWJcbiAgICA/IGF3YWl0IGJyb3dzZXIudGFicy51cGRhdGUodGFiSWQsIHsgdXJsOiBjb25maXJtVXJsIH0pXG4gICAgOiBhd2FpdCBjb21tYW5kcy5UYWJPcGVuKHsgdXJsOiBjb25maXJtVXJsLCBhY3RpdmU6ICEhYWN0aXZlIH0sIHsgdGFiIH0pO1xuICBpZiAoYWN0aXZlICYmIHdpbmRvd0lkICE9PSB0YWIud2luZG93SWQpIHtcbiAgICBhd2FpdCBicm93c2VyLndpbmRvd3MudXBkYXRlKHdpbmRvd0lkLCB7IGZvY3VzZWQ6IHRydWUgfSk7XG4gIH1cbn1cblxuY29uc3Qgd2hpdGVsaXN0UmUgPSBuZXcgUmVnRXhwKGBeaHR0cHM6Ly8oJHtcbiAgW1xuICAgICdncmVhc3lmb3JrXFxcXC5vcmcvc2NyaXB0cy8lL2NvZGUvJyxcbiAgICAnb3BlbnVzZXJqc1xcXFwub3JnL2luc3RhbGwvJS8nLFxuICAgICdnaXRodWJcXFxcLmNvbS8lLyUvcmF3LyUvJyxcbiAgICAnZ2l0aHViXFxcXC5jb20vJS8lL3JlbGVhc2VzLyUvZG93bmxvYWQvJyxcbiAgICAncmF3XFxcXC5naXRodWJ1c2VyY29udGVudFxcXFwuY29tKC8lKXszfS8nLFxuICAgICdnaXN0XFxcXC5naXRodWJcXFxcLmNvbS8uKj8vJyxcbiAgXS5qb2luKCd8Jylcbn0pJT9cXFxcLnVzZXJcXFxcLmpzKFs/I118JClgLnJlcGxhY2UoLyUvZywgJ1teL10qJykpO1xuXG5jb25zdCBibGFja2xpc3RSZSA9IG5ldyBSZWdFeHAoYF5odHRwczovLygke1xuICBbXG4gICAgJyhnaXN0XFxcXC4pP2dpdGh1YlxcXFwuY29tJyxcbiAgICAnZ3JlYXN5Zm9ya1xcXFwub3JnJyxcbiAgICAnb3BlbnVzZXJqc1xcXFwub3JnJyxcbiAgXS5qb2luKCd8Jylcbn0pL2ApO1xuXG5jb25zdCByZXNvbHZlVmlydHVhbFVybCA9IHVybCA9PiAoXG4gIGAke2V4dGVuc2lvblJvb3R9b3B0aW9ucy9pbmRleC5odG1sI3NjcmlwdHMvJHsrdXJsLnNwbGl0KCcjJylbMV19YFxuKTtcbi8vIEZGIGNhbid0IGludGVyY2VwdCB2aXJ0dWFsIC51c2VyLmpzIFVSTCB2aWEgd2ViUmVxdWVzdCwgc28gd2UgcmVkaXJlY3QgaXQgZXhwbGljaXRseVxuY29uc3QgdmlydHVhbFVybFJlID0gSVNfRklSRUZPWCAmJiBuZXcgUmVnRXhwKChcbiAgYF4odmlldy1zb3VyY2U6KT8oJHtleHRlbnNpb25Sb290LnJlcGxhY2UoJzovLycsICckJik/Jyl9W14vXSpcXFxcLnVzZXJcXFxcLmpzI1xcXFxkK2BcbikpO1xuY29uc3QgbWF5YmVSZWRpcmVjdFZpcnR1YWxVcmxGRiA9IHZpcnR1YWxVcmxSZSAmJiAoKHRhYklkLCBzcmMpID0+IHtcbiAgaWYgKHZpcnR1YWxVcmxSZS50ZXN0KHNyYykpIHtcbiAgICBicm93c2VyLnRhYnMudXBkYXRlKHRhYklkLCB7IHVybDogcmVzb2x2ZVZpcnR1YWxVcmwoc3JjKSB9KTtcbiAgfVxufSk7XG5pZiAodmlydHVhbFVybFJlKSB7XG4gIGNvbnN0IGxpc3RlbmVyID0gKHRhYklkLCB7IHVybCB9KSA9PiB1cmwgJiYgbWF5YmVSZWRpcmVjdFZpcnR1YWxVcmxGRih0YWJJZCwgdXJsKTtcbiAgY29uc3QgYXBpRXZlbnQgPSBicm93c2VyLnRhYnMub25VcGRhdGVkO1xuICBjb25zdCBhZGRMaXN0ZW5lciA9IGFwaUV2ZW50LmFkZExpc3RlbmVyLmJpbmQoYXBpRXZlbnQsIGxpc3RlbmVyKTtcbiAgdHJ5IHsgYWRkTGlzdGVuZXIoeyBwcm9wZXJ0aWVzOiBbJ3VybCddIH0pOyB9IGNhdGNoIChlKSB7IGFkZExpc3RlbmVyKCk7IH1cbn1cblxuYnJvd3Nlci50YWJzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB1cmwgfSA9IHRhYjtcbiAgLyogRGV0ZXJtaW5pbmcgaWYgdGhpcyB0YWIgY2FuIGJlIGF1dG8tY2xvc2VkIChyZXBsYWNlZCwgYWN0dWFsbHkpLlxuICAgICBGRj49NjggYWxsb3dzIHJlYWRpbmcgZmlsZTogVVJMIG9ubHkgaW4gdGhlIHRhYidzIGNvbnRlbnQgc2NyaXB0IHNvIHRoZSB0YWIgbXVzdCBzdGF5IG9wZW4uICovXG4gIGlmICgoIXVybC5zdGFydHNXaXRoKCdmaWxlOicpIHx8IHVhLmZpcmVmb3ggPCA2OClcbiAgICAgICYmIC9cXC51c2VyXFwuanMoWz8jXXwkKS8udGVzdCh0YWIucGVuZGluZ1VybCB8fCB1cmwpKSB7XG4gICAgY2FjaGUucHV0KGBhdXRvY2xvc2U6JHtpZH1gLCB0cnVlLCAxMGUzKTtcbiAgfVxuICBpZiAodmlydHVhbFVybFJlICYmIHVybCA9PT0gJ2Fib3V0OmJsYW5rJykge1xuICAgIG1heWJlUmVkaXJlY3RWaXJ0dWFsVXJsRkYoaWQsIHRpdGxlKTtcbiAgfVxufSk7XG5cbmJyb3dzZXIud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoKHJlcSkgPT4ge1xuICBjb25zdCB7IG1ldGhvZCwgdGFiSWQsIHVybCB9ID0gcmVxO1xuICBpZiAobWV0aG9kICE9PSAnR0VUJykge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBvcGVuIGEgcmVhbCBVUkwgZm9yIHNpbXBsaWZpZWQgdXNlcnNjcmlwdCBVUkwgbGlzdGVkIGluIGRldnRvb2xzIG9mIHRoZSB3ZWIgcGFnZVxuICBpZiAodXJsLnN0YXJ0c1dpdGgoZXh0ZW5zaW9uUm9vdCkpIHtcbiAgICByZXR1cm4geyByZWRpcmVjdFVybDogcmVzb2x2ZVZpcnR1YWxVcmwodXJsKSB9O1xuICB9XG4gIGlmICghY2FjaGUuaGFzKGBieXBhc3M6JHt1cmx9YClcbiAgJiYgKCFibGFja2xpc3RSZS50ZXN0KHVybCkgfHwgd2hpdGVsaXN0UmUudGVzdCh1cmwpKSkge1xuICAgIG1heWJlSW5zdGFsbFVzZXJKcyh0YWJJZCwgdXJsKTtcbiAgICByZXR1cm4geyByZWRpcmVjdFVybDogJ2phdmFzY3JpcHQ6dm9pZCAwJyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgfVxufSwge1xuICB1cmxzOiBbXG4gICAgLy8gMS4gKjovLyBjb21wcmlzZXMgb25seSBodHRwL2h0dHBzXG4gICAgLy8gMi4gdGhlIEFQSSBpZ25vcmVzICNoYXNoIHBhcnRcbiAgICAvLyAzLiBGaXJlZm94OiBvbkJlZm9yZVJlcXVlc3QgZG9lcyBub3Qgd29yayB3aXRoIGZpbGU6Ly8gb3IgbW96LWV4dGVuc2lvbjovL1xuICAgICcqOi8vKi8qLnVzZXIuanMnLFxuICAgICcqOi8vKi8qLnVzZXIuanM/KicsXG4gICAgJ2ZpbGU6Ly8qLyoudXNlci5qcycsXG4gICAgJ2ZpbGU6Ly8qLyoudXNlci5qcz8qJyxcbiAgICBgJHtleHRlbnNpb25Sb290fSoudXNlci5qc2AsXG4gIF0sXG4gIHR5cGVzOiBbJ21haW5fZnJhbWUnXSxcbn0sIFsnYmxvY2tpbmcnXSk7XG5cbmFzeW5jIGZ1bmN0aW9uIG1heWJlSW5zdGFsbFVzZXJKcyh0YWJJZCwgdXJsKSB7XG4gIGNvbnN0IHsgZGF0YTogY29kZSB9ID0gYXdhaXQgcmVxdWVzdCh1cmwpLmNhdGNoKG5vb3ApIHx8IHt9O1xuICBpZiAoY29kZSAmJiBwYXJzZU1ldGEoY29kZSkubmFtZSkge1xuICAgIGNvbnN0IHRhYiA9IHRhYklkID49IDAgJiYgYXdhaXQgYnJvd3Nlci50YWJzLmdldCh0YWJJZCkgfHwge307XG4gICAgY29uZmlybUluc3RhbGwoeyBjb2RlLCB1cmwsIGZyb206IHRhYi51cmwgfSwgeyB0YWIgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FjaGUucHV0KGBieXBhc3M6JHt1cmx9YCwgdHJ1ZSwgMTBlMyk7XG4gICAgaWYgKHRhYklkID49IDApIGJyb3dzZXIudGFicy51cGRhdGUodGFiSWQsIHsgdXJsIH0pO1xuICB9XG59XG5cbi8vIEluIEZpcmVmb3ggd2l0aCBwcm9kdWN0aW9uIGNvZGUgb2YgVmlvbGVudG1vbmtleSwgc2NyaXB0cyBjYW4gYmUgaW5qZWN0ZWQgYmVmb3JlIGB0YWJzLm9uVXBkYXRlZGAgaXMgZmlyZWQuXG4vLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS92aW9sZW50bW9ua2V5L3Zpb2xlbnRtb25rZXkvaXNzdWVzLzEyNTVcblxuYnJvd3Nlci50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigodGFiSWQpID0+IHtcbiAgY2xlYXJSZXF1ZXN0c0J5VGFiSWQodGFiSWQpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclJlcXVlc3RzQnlUYWJJZCh0YWJJZCkge1xuICBjb25zdCBzZXQgPSB0YWJSZXF1ZXN0c1t0YWJJZF07XG4gIGlmIChzZXQpIHtcbiAgICBkZWxldGUgdGFiUmVxdWVzdHNbdGFiSWRdO1xuICAgIHNldDo6Zm9yRWFjaEVudHJ5KChbaWRdKSA9PiBjb21tYW5kcy5BYm9ydFJlcXVlc3QoaWQpKTtcbiAgfVxufVxuXG4vKipcbiAqIEltaXRhdGluZyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzXG4gKiBQZXIgdGhlIHNwZWNpZmljYXRpb24gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAgdGhlIGhlYWRlciBuYW1lIGlzIHdpdGhpbiBBU0NJSSxcbiAqIGJ1dCB3ZSdsbCB0cnkgZW5jb2RpbmcgaXQsIGlmIG5lY2Vzc2FyeSwgdG8gaGFuZGxlIGludmFsaWQgc2VydmVyIHJlc3BvbnNlcy5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlV2ViUmVxdWVzdEhlYWRlcih7IG5hbWUsIHZhbHVlLCBiaW5hcnlWYWx1ZSB9KSB7XG4gIHJldHVybiBgJHtzdHJpbmcyYnl0ZVN0cmluZyhuYW1lKX06ICR7XG4gICAgYmluYXJ5VmFsdWVcbiAgICAgID8gYnVmZmVyMnN0cmluZyhiaW5hcnlWYWx1ZSlcbiAgICAgIDogc3RyaW5nMmJ5dGVTdHJpbmcodmFsdWUpXG4gIH1cXHJcXG5gO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBVVEY4LWVuY29kZWQgYmluYXJ5IHN0cmluZyBpLmUuIG9uZSBieXRlIHBlciBjaGFyYWN0ZXIuXG4gKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzdHJpbmcgaW4gY2FzZSBpdCB3YXMgYWxyZWFkeSB3aXRoaW4gQVNDSUkuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZzJieXRlU3RyaW5nKHN0cikge1xuICBpZiAoIS9bXFx1MDA4MC1cXHVGRkZGXS8udGVzdChzdHIpKSByZXR1cm4gc3RyO1xuICBpZiAoIWVuY29kZXIpIGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgcmV0dXJuIGJ1ZmZlcjJzdHJpbmcoZW5jb2Rlci5lbmNvZGUoc3RyKSk7XG59XG5cbi8qKiBAdHlwZWRlZiB7e1xuICBhbm9ueW1vdXM6IGJvb2xlYW5cbiAgYmxvYmJlZDogYm9vbGVhblxuICBjYjogZnVuY3Rpb24oT2JqZWN0KVxuICBjaHVua2VkOiBib29sZWFuXG4gIGNvcmVJZDogbnVtYmVyXG4gIGV2ZW50c1RvTm90aWZ5OiBzdHJpbmdbXVxuICBpZDogbnVtYmVyXG4gIG5vTmF0aXZlQ29va2llOiBib29sZWFuXG4gIHJlc3BvbnNlSGVhZGVyczogc3RyaW5nXG4gIHN0b3JlSWQ6IHN0cmluZ1xuICB0YWJJZDogbnVtYmVyXG4gIHhocjogWE1MSHR0cFJlcXVlc3Rcbn19IFZNSHR0cFJlcXVlc3QgKi9cbiIsImltcG9ydCB7IGdldFVuaXFJZCwgZW5jb2RlRmlsZW5hbWUgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBNRVRBQkxPQ0tfUkUgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgbWFwRW50cnkgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uIH0gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICAvKiogQHJldHVybiB7c3RyaW5nfSAqL1xuICBDYWNoZU5ld1NjcmlwdChkYXRhKSB7XG4gICAgY29uc3QgaWQgPSBnZXRVbmlxSWQoKTtcbiAgICBjYWNoZS5wdXQoYG5ldy0ke2lkfWAsIG5ld1NjcmlwdChkYXRhKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9LFxuICAvKiogQHJldHVybiB7Vk1TY3JpcHR9ICovXG4gIE5ld1NjcmlwdChpZCkge1xuICAgIHJldHVybiBpZCAmJiBjYWNoZS5nZXQoYG5ldy0ke2lkfWApIHx8IG5ld1NjcmlwdCgpO1xuICB9LFxuICBQYXJzZU1ldGE6IHBhcnNlTWV0YSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VyU2NyaXB0KHRleHQpIHtcbiAgaWYgKC9eXFxzKjwvLnRlc3QodGV4dCkpIHJldHVybiBmYWxzZTsgLy8gSFRNTFxuICBpZiAodGV4dC5pbmRleE9mKCcvLyA9PVVzZXJTY3JpcHQ9PScpIDwgMCkgcmV0dXJuIGZhbHNlOyAvLyBMYWNrIG9mIG1ldGEgYmxvY2tcbiAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IGFycmF5VHlwZSA9IHtcbiAgZGVmYXVsdDogKCkgPT4gW10sXG4gIHRyYW5zZm9ybTogKHJlcywgdmFsKSA9PiB7XG4gICAgcmVzLnB1c2godmFsKTtcbiAgICByZXR1cm4gcmVzO1xuICB9LFxufTtcbmNvbnN0IGRlZmF1bHRUeXBlID0ge1xuICBkZWZhdWx0OiAoKSA9PiBudWxsLFxuICB0cmFuc2Zvcm06IChyZXMsIHZhbCkgPT4gKHJlcyA9PSBudWxsID8gdmFsIDogcmVzKSxcbn07XG5jb25zdCBtZXRhVHlwZXMgPSB7XG4gIGluY2x1ZGU6IGFycmF5VHlwZSxcbiAgZXhjbHVkZTogYXJyYXlUeXBlLFxuICBtYXRjaDogYXJyYXlUeXBlLFxuICBleGNsdWRlTWF0Y2g6IGFycmF5VHlwZSxcbiAgcmVxdWlyZTogYXJyYXlUeXBlLFxuICByZXNvdXJjZToge1xuICAgIGRlZmF1bHQ6ICgpID0+ICh7fSksXG4gICAgdHJhbnNmb3JtOiAocmVzLCB2YWwpID0+IHtcbiAgICAgIGNvbnN0IHBhaXIgPSB2YWwubWF0Y2goL14oXFx3XFxTKilcXHMrKC4qKS8pO1xuICAgICAgaWYgKHBhaXIpIHJlc1twYWlyWzFdXSA9IHBhaXJbMl07XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0sXG4gIH0sXG4gIGdyYW50OiBhcnJheVR5cGUsXG4gIG5vZnJhbWVzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gZmFsc2UsXG4gICAgdHJhbnNmb3JtOiAoKSA9PiB0cnVlLFxuICB9LFxufTtcbmNvbnN0IG1ldGFPcHRpb25hbFR5cGVzID0ge1xuICBhbnRpZmVhdHVyZTogYXJyYXlUeXBlLFxuICBjb21wYXRpYmxlOiBhcnJheVR5cGUsXG4gIGNvbm5lY3Q6IGFycmF5VHlwZSxcbn07XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNZXRhKGNvZGUpIHtcbiAgLy8gaW5pdGlhbGl6ZSBtZXRhXG4gIGNvbnN0IG1ldGEgPSBtZXRhVHlwZXM6Om1hcEVudHJ5KChbLCB2YWx1ZV0pID0+IHZhbHVlLmRlZmF1bHQoKSk7XG4gIGNvbnN0IG1ldGFCb2R5ID0gY29kZS5tYXRjaChNRVRBQkxPQ0tfUkUpWzFdIHx8ICcnO1xuICBtZXRhQm9keS5yZXBsYWNlKC8oPzpefFxcbilcXHMqXFwvXFwvXFx4MjAoQFxcUyspKC4qKS9nLCAoX21hdGNoLCByYXdLZXksIHJhd1ZhbHVlKSA9PiB7XG4gICAgY29uc3QgW2tleU5hbWUsIGxvY2FsZV0gPSByYXdLZXkuc2xpY2UoMSkuc3BsaXQoJzonKTtcbiAgICBjb25zdCBjYW1lbEtleSA9IGtleU5hbWUucmVwbGFjZSgvWy1fXShcXHcpL2csIChtLCBnKSA9PiBnLnRvVXBwZXJDYXNlKCkpO1xuICAgIGNvbnN0IGtleSA9IGxvY2FsZSA/IGAke2NhbWVsS2V5fToke2xvY2FsZS50b0xvd2VyQ2FzZSgpfWAgOiBjYW1lbEtleTtcbiAgICBjb25zdCB2YWwgPSByYXdWYWx1ZS50cmltKCk7XG4gICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhVHlwZXNba2V5XSB8fCBtZXRhT3B0aW9uYWxUeXBlc1trZXldIHx8IGRlZmF1bHRUeXBlO1xuICAgIGxldCBvbGRWYWx1ZSA9IG1ldGFba2V5XTtcbiAgICBpZiAodHlwZW9mIG9sZFZhbHVlID09PSAndW5kZWZpbmVkJykgb2xkVmFsdWUgPSBtZXRhVHlwZS5kZWZhdWx0KCk7XG4gICAgbWV0YVtrZXldID0gbWV0YVR5cGUudHJhbnNmb3JtKG9sZFZhbHVlLCB2YWwpO1xuICB9KTtcbiAgbWV0YS5yZXNvdXJjZXMgPSBtZXRhLnJlc291cmNlO1xuICBkZWxldGUgbWV0YS5yZXNvdXJjZTtcbiAgLy8gQGhvbWVwYWdlVVJMOiBjb21wYXRpYmxlIHdpdGggQGhvbWVwYWdlXG4gIGlmICghbWV0YS5ob21lcGFnZVVSTCAmJiBtZXRhLmhvbWVwYWdlKSBtZXRhLmhvbWVwYWdlVVJMID0gbWV0YS5ob21lcGFnZTtcbiAgcmV0dXJuIG1ldGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q3VzdG9tKCkge1xuICByZXR1cm4ge1xuICAgIG9yaWdJbmNsdWRlOiB0cnVlLFxuICAgIG9yaWdFeGNsdWRlOiB0cnVlLFxuICAgIG9yaWdNYXRjaDogdHJ1ZSxcbiAgICBvcmlnRXhjbHVkZU1hdGNoOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3U2NyaXB0KGRhdGEpIHtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgdXJsOiAnKjovLyovKicsXG4gICAgbmFtZTogJycsXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxuICAgIC4uLmRhdGEsXG4gIH07XG4gIGNvbnN0IGNvZGUgPSBnZXRPcHRpb24oJ3NjcmlwdFRlbXBsYXRlJylcbiAgLnJlcGxhY2UoL3t7KFxcdyspfX0vZywgKHN0ciwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gc3RhdGVbbmFtZV07XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBzdHIgOiB2YWx1ZTtcbiAgfSk7XG4gIGNvbnN0IHNjcmlwdCA9IHtcbiAgICBjdXN0b206IGdldERlZmF1bHRDdXN0b20oKSxcbiAgICBjb25maWc6IHtcbiAgICAgIGVuYWJsZWQ6IDEsXG4gICAgICBzaG91bGRVcGRhdGU6IDEsXG4gICAgfSxcbiAgICBtZXRhOiBwYXJzZU1ldGEoY29kZSksXG4gICAgcHJvcHM6IHt9LFxuICB9O1xuICByZXR1cm4geyBzY3JpcHQsIGNvZGUgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVVUkkoc2NyaXB0KSB7XG4gIGNvbnN0IG5zID0gc2NyaXB0Lm1ldGEubmFtZXNwYWNlIHx8ICcnO1xuICBjb25zdCBuYW1lID0gc2NyaXB0Lm1ldGEubmFtZSB8fCAnJztcbiAgbGV0IG5hbWVVUkkgPSBlbmNvZGVGaWxlbmFtZShgJHtuc31cXG4ke25hbWV9XFxuYCk7XG4gIGlmICghbnMgJiYgIW5hbWUpIG5hbWVVUkkgKz0gc2NyaXB0LnByb3BzLmlkIHx8ICcnO1xuICByZXR1cm4gbmFtZVVSSTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkUXVlcnkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJyYnKS5yZWR1Y2UoKGRhdGEsIHBpZWNlKSA9PiB7XG4gICAgY29uc3QgW2tleSwgdmFsXSA9IHBpZWNlLnNwbGl0KCc9JykubWFwKGRlY29kZVVSSUNvbXBvbmVudCk7XG4gICAgZGF0YVtrZXldID0gdmFsO1xuICAgIHJldHVybiBkYXRhO1xuICB9LCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkdW1wUXVlcnkoZGljdCkge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoZGljdClcbiAgLm1hcChrZXlWYWwgPT4ga2V5VmFsLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJz0nKSlcbiAgLmpvaW4oJyYnKTtcbn1cbiIsImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcjL2NvbW1vbi9zdG9yYWdlJztcblxuLyoqIEB0eXBlIHsgZnVuY3Rpb24odXJsLCBvcHRpb25zLCBjaGVjayk6IFByb21pc2U8dm9pZD4gfSBvciB0aHJvd3Mgb24gZXJyb3IgKi9cbnN0b3JhZ2UuY2FjaGUuZmV0Y2ggPSBjYWNoZU9yRmV0Y2goe1xuICBpbml0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4geyAuLi5vcHRpb25zLCByZXNwb25zZVR5cGU6ICdibG9iJyB9O1xuICB9LFxuICBhc3luYyB0cmFuc2Zvcm0ocmVzcG9uc2UsIHVybCwgb3B0aW9ucywgY2hlY2spIHtcbiAgICBjb25zdCBbdHlwZSwgYm9keV0gPSBhd2FpdCBzdG9yYWdlLmNhY2hlLm1ha2VSYXcocmVzcG9uc2UsIHRydWUpO1xuICAgIGF3YWl0IGNoZWNrPy4odXJsLCByZXNwb25zZS5kYXRhLCB0eXBlKTtcbiAgICByZXR1cm4gYCR7dHlwZX0sJHtib2R5fWA7XG4gIH0sXG59KTtcblxuLyoqIEB0eXBlIHsgZnVuY3Rpb24odXJsLCBvcHRpb25zKTogUHJvbWlzZTx2b2lkPiB9IG9yIHRocm93cyBvbiBlcnJvciAqL1xuc3RvcmFnZS5yZXF1aXJlLmZldGNoID0gY2FjaGVPckZldGNoKHtcbiAgdHJhbnNmb3JtOiAoeyBkYXRhIH0sIHVybCkgPT4gKFxuICAgIC9eXFxzKjwvLnRlc3QoZGF0YSlcbiAgICAgID8gUHJvbWlzZS5yZWplY3QoYE5PVF9KUzogJHt1cmx9IFwiJHtkYXRhLnNsaWNlKDAsIDEwMCkudHJpbSgpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKX1cImApXG4gICAgICA6IGRhdGFcbiAgKSxcbn0pO1xuXG5mdW5jdGlvbiBjYWNoZU9yRmV0Y2goaGFuZGxlcnMgPSB7fSkge1xuICBjb25zdCByZXF1ZXN0cyA9IHt9O1xuICBjb25zdCB7IGluaXQsIHRyYW5zZm9ybSB9ID0gaGFuZGxlcnM7XG4gIC8qKiBAdGhpcyBWTVN0b3JhZ2VCYXNlICovXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZU9yRmV0Y2hIYW5kbGVyKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBbdXJsXSA9IGFyZ3M7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlcXVlc3RzW3VybF0gfHwgKHJlcXVlc3RzW3VybF0gPSB0aGlzOjpkb0ZldGNoKC4uLmFyZ3MpKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcbiAgLyoqIEB0aGlzIFZNU3RvcmFnZUJhc2UgKi9cbiAgYXN5bmMgZnVuY3Rpb24gZG9GZXRjaCguLi5hcmdzKSB7XG4gICAgY29uc3QgW3VybCwgb3B0aW9uc10gPSBhcmdzO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KHVybCwgaW5pdD8uKG9wdGlvbnMpIHx8IG9wdGlvbnMpO1xuICAgICAgaWYgKGF3YWl0IGlzTW9kaWZpZWQocmVzLCB1cmwpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRyYW5zZm9ybSA/IGF3YWl0IHRyYW5zZm9ybShyZXMsIC4uLmFyZ3MpIDogcmVzLmRhdGE7XG4gICAgICAgIGF3YWl0IHRoaXMuc2V0KHVybCwgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5lcnJvcihgRXJyb3IgZmV0Y2hpbmc6ICR7dXJsfWAsIGVycik7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0c1t1cmxdO1xuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBpc01vZGlmaWVkKHsgaGVhZGVycyB9LCB1cmwpIHtcbiAgY29uc3QgbW9kID0gaGVhZGVycy5nZXQoJ2V0YWcnKVxuICB8fCArbmV3IERhdGUoaGVhZGVycy5nZXQoJ2xhc3QtbW9kaWZpZWQnKSlcbiAgfHwgK25ldyBEYXRlKGhlYWRlcnMuZ2V0KCdkYXRlJykpO1xuICBpZiAoIW1vZCB8fCBtb2QgIT09IGF3YWl0IHN0b3JhZ2UubW9kLmdldE9uZSh1cmwpKSB7XG4gICAgaWYgKG1vZCkgYXdhaXQgc3RvcmFnZS5tb2Quc2V0KHVybCwgbW9kKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0QWN0aXZlVGFiLCBub29wLCBzZW5kVGFiQ21kLCBnZXRGdWxsVXJsIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHVhIGZyb20gJyMvY29tbW9uL3VhJztcbmltcG9ydCB7IGV4dGVuc2lvblJvb3QgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uIH0gZnJvbSAnLi9vcHRpb25zJztcblxuY29uc3Qgb3BlbmVycyA9IHt9O1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3BhdGhJZF0gLSBwYXRoIG9yIGlkIHRvIGFkZCB0byAjc2NyaXB0cyByb3V0ZSBpbiBkYXNoYm9hcmQsXG4gICAgIGlmIGFic2VudCBhIG5ldyBzY3JpcHQgd2lsbCBiZSBjcmVhdGVkIGZvciBhY3RpdmUgdGFiJ3MgVVJMXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHtpZDogbnVtYmVyfT59XG4gICAqL1xuICBhc3luYyBPcGVuRWRpdG9yKHBhdGhJZCkge1xuICAgIGlmICghcGF0aElkKSB7XG4gICAgICBjb25zdCB7IHRhYiwgZG9tYWluIH0gPSBhd2FpdCBjb21tYW5kcy5HZXRUYWJEb21haW4oKTtcbiAgICAgIGNvbnN0IGlkID0gZG9tYWluICYmIGNvbW1hbmRzLkNhY2hlTmV3U2NyaXB0KHtcbiAgICAgICAgdXJsOiAodGFiLnBlbmRpbmdVcmwgfHwgdGFiLnVybCkuc3BsaXQoL1sjP10vKVswXSxcbiAgICAgICAgbmFtZTogYCR7Z2V0T3B0aW9uKCdzY3JpcHRUZW1wbGF0ZUVkaXRlZCcpID8gJycgOiAnLSAnfSR7ZG9tYWlufWAsXG4gICAgICB9KTtcbiAgICAgIHBhdGhJZCA9IGBfbmV3JHtpZCA/IGAvJHtpZH1gIDogJyd9YDtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gYCR7ZXh0ZW5zaW9uUm9vdH1vcHRpb25zL2luZGV4Lmh0bWwjc2NyaXB0cy8ke3BhdGhJZH1gO1xuICAgIC8vIEZpcmVmb3ggdW50aWwgdjU2IGRvZXNuJ3Qgc3VwcG9ydCBtb3otZXh0ZW5zaW9uOi8vIHBhdHRlcm4gaW4gYnJvd3Nlci50YWJzLnF1ZXJ5KClcbiAgICBmb3IgKGNvbnN0IHZpZXcgb2YgYnJvd3Nlci5leHRlbnNpb24uZ2V0Vmlld3MoKSkge1xuICAgICAgaWYgKHZpZXcubG9jYXRpb24uaHJlZiA9PT0gdXJsKSB7XG4gICAgICAgIC8vIGRlZXAtY29weWluZyB0byBhdm9pZCBkZWFkIG9iamVjdHNcbiAgICAgICAgY29uc3QgdGFiID0gZGVlcENvcHkoYXdhaXQgdmlldy5icm93c2VyLnRhYnMuZ2V0Q3VycmVudCgpKTtcbiAgICAgICAgYnJvd3Nlci50YWJzLnVwZGF0ZSh0YWIuaWQsIHsgYWN0aXZlOiB0cnVlIH0pO1xuICAgICAgICBicm93c2VyLndpbmRvd3MudXBkYXRlKHRhYi53aW5kb3dJZCwgeyBmb2N1c2VkOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4gdGFiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tbWFuZHMuVGFiT3Blbih7IHVybCwgbWF5YmVJbldpbmRvdzogdHJ1ZSB9KTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8eyBpZDogbnVtYmVyIH0gfCBjaHJvbWUudGFicy5UYWI+fSBuZXcgdGFiIGlzIHJldHVybmVkIGZvciBpbnRlcm5hbCBjYWxscyAqL1xuICBhc3luYyBUYWJPcGVuKHtcbiAgICB1cmwsXG4gICAgYWN0aXZlID0gdHJ1ZSxcbiAgICBjb250YWluZXIsXG4gICAgaW5zZXJ0ID0gdHJ1ZSxcbiAgICBtYXliZUluV2luZG93ID0gZmFsc2UsXG4gICAgcGlubmVkLFxuICB9LCBzcmMgPSB7fSkge1xuICAgIC8vIHNyYy50YWIgbWF5IGJlIGFic2VudCB3aGVuIGludm9rZWQgZnJvbSBwb3B1cCAoZS5nLiBlZGl0L2NyZWF0ZSBidXR0b25zKVxuICAgIGNvbnN0IHNyY1RhYiA9IHNyYy50YWIgfHwgYXdhaXQgZ2V0QWN0aXZlVGFiKCkgfHwge307XG4gICAgLy8gc3JjLnVybCBtYXkgYmUgYWJzZW50IHdoZW4gaW52b2tlZCBkaXJlY3RseSBhcyBjb21tYW5kcy5UYWJPcGVuXG4gICAgY29uc3Qgc3JjVXJsID0gc3JjLnVybDtcbiAgICBjb25zdCBpc0ludGVybmFsID0gIXNyY1VybCB8fCBzcmNVcmwuc3RhcnRzV2l0aChleHRlbnNpb25Sb290KTtcbiAgICAvLyBvbmx5IGluY29nbml0byBzdG9yZUlkIG1heSBiZSBzcGVjaWZpZWQgd2hlbiBvcGVuaW5nIGluIGFuIGluY29nbml0byB3aW5kb3dcbiAgICBjb25zdCB7IGluY29nbml0bywgd2luZG93SWQgfSA9IHNyY1RhYjtcbiAgICAvLyBDaHJvbWUgY2FuJ3Qgb3BlbiBjaHJvbWUteHh4OiBVUkxzIGluIGluY29nbml0byB3aW5kb3dzXG4gICAgbGV0IHN0b3JlSWQgPSBzcmNUYWIuY29va2llU3RvcmVJZDtcbiAgICBpZiAoc3RvcmVJZCAmJiAhaW5jb2duaXRvKSB7XG4gICAgICBzdG9yZUlkID0gZ2V0Q29udGFpbmVySWQoaXNJbnRlcm5hbCA/IDAgOiBjb250YWluZXIpIHx8IHN0b3JlSWQ7XG4gICAgfVxuICAgIGlmIChzdG9yZUlkKSBzdG9yZUlkID0geyBjb29raWVTdG9yZUlkOiBzdG9yZUlkIH07XG4gICAgLy8gVVJMIG5lZWRzIHRvIGJlIGV4cGFuZGVkIGZvciBgY2FuT3BlbkluY29nbml0b2AgYmVsb3dcbiAgICBpZiAoIS9eWy1cXHddKzovLnRlc3QodXJsKSkge1xuICAgICAgdXJsID0gaXNJbnRlcm5hbFxuICAgICAgICA/IGJyb3dzZXIucnVudGltZS5nZXRVUkwodXJsKVxuICAgICAgICA6IGdldEZ1bGxVcmwodXJsLCBzcmNVcmwpO1xuICAgIH1cbiAgICBjb25zdCBjYW5PcGVuSW5jb2duaXRvID0gIWluY29nbml0byB8fCBJU19GSVJFRk9YIHx8ICEvXihjaHJvbWVbLVxcd10qKTovLnRlc3QodXJsKTtcbiAgICBsZXQgbmV3VGFiO1xuICAgIGlmIChtYXliZUluV2luZG93XG4gICAgICAgICYmIGJyb3dzZXIud2luZG93c1xuICAgICAgICAmJiBnZXRPcHRpb24oJ2VkaXRvcldpbmRvdycpXG4gICAgICAgIC8qIGNvb2tpZVN0b3JlSWQgaW4gd2luZG93cy5jcmVhdGUoKSBpcyBzdXBwb3J0ZWQgc2luY2UgRkY2NCBodHRwczovL2J1Z3ppbC5sYS8xMzkzNTcwXG4gICAgICAgICAqIGFuZCBhIHdvcmthcm91bmQgaXMgdG9vIGNvbnZvbHV0ZWQgdG8gYWRkIGl0IGZvciBzdWNoIGFuIGFuY2llbnQgdmVyc2lvbiAqL1xuICAgICAgICAmJiAoIXN0b3JlSWQgfHwgdWEuZmlyZWZveCA+PSA2NCkpIHtcbiAgICAgIGNvbnN0IHduZE9wdHMgPSB7XG4gICAgICAgIHVybCxcbiAgICAgICAgaW5jb2duaXRvOiBjYW5PcGVuSW5jb2duaXRvICYmIGluY29nbml0byxcbiAgICAgICAgLi4uZ2V0T3B0aW9uKCdlZGl0b3JXaW5kb3dTaW1wbGUnKSAmJiB7IHR5cGU6ICdwb3B1cCcgfSxcbiAgICAgICAgLi4uIUlTX0ZJUkVGT1ggJiYgeyBmb2N1c2VkOiAhIWFjdGl2ZSB9LCAvLyBGRiBkb2Vzbid0IHN1cHBvcnQgdGhpc1xuICAgICAgICAuLi5zdG9yZUlkLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHBvcyA9IGdldE9wdGlvbignZWRpdG9yV2luZG93UG9zJyk7XG4gICAgICBjb25zdCBoYXNQb3MgPSBwb3MgJiYgJ3RvcCcgaW4gcG9zO1xuICAgICAgY29uc3Qgd25kID0gYXdhaXQgYnJvd3Nlci53aW5kb3dzLmNyZWF0ZSh7IC4uLnduZE9wdHMsIC4uLnBvcyB9KS5jYXRjaChoYXNQb3MgJiYgbm9vcClcbiAgICAgICAgfHwgaGFzUG9zICYmIGF3YWl0IGJyb3dzZXIud2luZG93cy5jcmVhdGUod25kT3B0cyk7XG4gICAgICBuZXdUYWIgPSB3bmQudGFic1swXTtcbiAgICB9XG4gICAgaWYgKCFuZXdUYWIpIHtcbiAgICAgIG5ld1RhYiA9IGF3YWl0IGJyb3dzZXIudGFicy5jcmVhdGUoe1xuICAgICAgICB1cmwsXG4gICAgICAgIC8vIG5vcm1hbGl6aW5nIGFzIGJvb2xlYW4gYmVjYXVzZSB0aGUgQVBJIHJlcXVpcmVzIHN0cmljdCB0eXBlc1xuICAgICAgICBhY3RpdmU6ICEhYWN0aXZlLFxuICAgICAgICBwaW5uZWQ6ICEhcGlubmVkLFxuICAgICAgICAuLi5zdG9yZUlkLFxuICAgICAgICAuLi5jYW5PcGVuSW5jb2duaXRvICYmIHtcbiAgICAgICAgICB3aW5kb3dJZCxcbiAgICAgICAgICAuLi5pbnNlcnQgJiYgeyBpbmRleDogc3JjVGFiLmluZGV4ICsgMSB9LFxuICAgICAgICAgIC4uLnVhLm9wZW5lclRhYklkU3VwcG9ydGVkICYmIHsgb3BlbmVyVGFiSWQ6IHNyY1RhYi5pZCB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHsgaWQgfSA9IG5ld1RhYjtcbiAgICBpZiAoYWN0aXZlICYmIG5ld1RhYi53aW5kb3dJZCAhPT0gd2luZG93SWQpIHtcbiAgICAgIGF3YWl0IGJyb3dzZXIud2luZG93cy51cGRhdGUobmV3VGFiLndpbmRvd0lkLCB7IGZvY3VzZWQ6IHRydWUgfSk7XG4gICAgfVxuICAgIG9wZW5lcnNbaWRdID0gc3JjVGFiLmlkO1xuICAgIHJldHVybiBpc0ludGVybmFsID8gbmV3VGFiIDogeyBpZCB9O1xuICB9LFxuICAvKiogQHJldHVybiB7dm9pZH0gKi9cbiAgVGFiQ2xvc2UoeyBpZCB9ID0ge30sIHNyYykge1xuICAgIGNvbnN0IHRhYklkID0gaWQgfHwgc3JjPy50YWI/LmlkO1xuICAgIGlmICh0YWJJZCA+PSAwKSBicm93c2VyLnRhYnMucmVtb3ZlKHRhYklkKTtcbiAgfSxcbiAgVGFiRm9jdXMoXywgc3JjKSB7XG4gICAgYnJvd3Nlci50YWJzLnVwZGF0ZShzcmMudGFiLmlkLCB7IGFjdGl2ZTogdHJ1ZSB9KS5jYXRjaChub29wKTtcbiAgICBicm93c2VyLndpbmRvd3MudXBkYXRlKHNyYy50YWIud2luZG93SWQsIHsgZm9jdXNlZDogdHJ1ZSB9KS5jYXRjaChub29wKTtcbiAgfSxcbn0pO1xuXG4vLyBGaXJlZm94IEFuZHJvaWQgZG9lcyBub3Qgc3VwcG9ydCBgb3BlbmVyVGFiSWRgIGZpZWxkLCBpdCBmYWlscyBpZiB0aGlzIGZpZWxkIGlzIHBhc3NlZFxuLy8gWFhYIG9wZW5lclRhYklkIHNlZW1zIGJ1Z2d5IG9uIENocm9tZSwgaHR0cHM6Ly9jcmJ1Zy5jb20vOTY3MTUwXG4vLyBJdCBzZWVtcyB0byBkbyBub3RoaW5nIGV2ZW4gc2V0IHN1Y2Nlc3NmdWxseSB3aXRoIGBicm93c2VyLnRhYnMudXBkYXRlYC5cbnVhLnJlYWR5LnRoZW4oKCkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh1YSwge1xuICAgIG9wZW5lclRhYklkU3VwcG9ydGVkOiB7XG4gICAgICB2YWx1ZTogIUlTX0ZJUkVGT1ggfHwgdWEuZmlyZWZveCA+PSA1NyAmJiB1YS5vcyAhPT0gJ2FuZHJvaWQnLFxuICAgIH0sXG4gIH0pO1xufSk7XG5cbmJyb3dzZXIudGFicy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoKGlkKSA9PiB7XG4gIGNvbnN0IG9wZW5lcklkID0gb3BlbmVyc1tpZF07XG4gIGlmIChvcGVuZXJJZCA+PSAwKSB7XG4gICAgc2VuZFRhYkNtZChvcGVuZXJJZCwgJ1RhYkNsb3NlZCcsIGlkKTtcbiAgICBkZWxldGUgb3BlbmVyc1tpZF07XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRDb250YWluZXJJZChpbmRleCkge1xuICByZXR1cm4gaW5kZXggPT09IDAgJiYgJ2ZpcmVmb3gtZGVmYXVsdCdcbiAgICAgICAgIHx8IGluZGV4ID4gMCAmJiBgZmlyZWZveC1jb250YWluZXItJHtpbmRleH1gO1xufVxuIiwiaW1wb3J0IHsgcG9zdEluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbiwgZ2V0T3B0aW9uLCBzZXRPcHRpb24gfSBmcm9tICcuL29wdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgU0NSSVBUX1RFTVBMQVRFID0gJ3NjcmlwdFRlbXBsYXRlJztcbmNvbnN0IFNDUklQVF9URU1QTEFURV9FRElURUQgPSBgJHtTQ1JJUFRfVEVNUExBVEV9RWRpdGVkYDtcbmNvbnN0IElOSVRJQUxfVEVNUExBVEUgPSBgXFxcbi8vID09VXNlclNjcmlwdD09XG4vLyBAbmFtZSBOZXcgU2NyaXB0XG4vLyBAbmFtZXNwYWNlIFZpb2xlbnRtb25rZXkgU2NyaXB0c1xuLy8gQG1hdGNoIHt7dXJsfX1cbi8vIEBncmFudCBub25lXG4vLyA9PS9Vc2VyU2NyaXB0PT1cbmA7XG5cbnBvc3RJbml0aWFsaXplLnB1c2goKCkgPT4ge1xuICBsZXQgZWRpdGVkID0gZ2V0T3B0aW9uKFNDUklQVF9URU1QTEFURV9FRElURUQpO1xuICAvLyBQcmVzZXJ2ZSBhbiBlZGl0ZWQgdGVtcGxhdGVcbiAgaWYgKGVkaXRlZCkgcmV0dXJuO1xuICBjb25zdCB0ZW1wbGF0ZSA9IGdldE9wdGlvbihTQ1JJUFRfVEVNUExBVEUpO1xuICAvLyBXaGVuIHVwZGF0aW5nIGZyb20gYW4gb2xkIHZlcnNpb24sIHNldCB0aGUgZWRpdGVkIGZsYWcgcmV0cm9hY3RpdmVseVxuICBpZiAoZWRpdGVkID09IG51bGwpIHtcbiAgICBlZGl0ZWQgPSB0ZW1wbGF0ZSAhPT0gSU5JVElBTF9URU1QTEFURTtcbiAgICBpZiAoZWRpdGVkKSBzZXRPcHRpb24oU0NSSVBUX1RFTVBMQVRFX0VESVRFRCwgdHJ1ZSk7XG4gICAgZWxzZSByZXNldFNjcmlwdFRlbXBsYXRlKCk7XG4gIC8vIFdoZW4gdXBkYXRpbmcgVk0sIHVwZGF0ZSB0byB0aGUgbmV3IGRlZmF1bHQgdGVtcGxhdGVcbiAgfSBlbHNlIGlmICh0ZW1wbGF0ZSAhPT0gZ2V0RGVmYXVsdE9wdGlvbihTQ1JJUFRfVEVNUExBVEUpKSB7XG4gICAgcmVzZXRTY3JpcHRUZW1wbGF0ZSgpO1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0U2NyaXB0VGVtcGxhdGUoY2hhbmdlcyA9IHt9KSB7XG4gIGNvbnN0IGRlZmF1bHRUZW1wbGF0ZSA9IGdldERlZmF1bHRPcHRpb24oU0NSSVBUX1RFTVBMQVRFKTtcbiAgbGV0IHRlbXBsYXRlID0gY2hhbmdlc1tTQ1JJUFRfVEVNUExBVEVdO1xuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgdGVtcGxhdGUgPSBkZWZhdWx0VGVtcGxhdGU7XG4gICAgY2hhbmdlc1tTQ1JJUFRfVEVNUExBVEVdID0gdGVtcGxhdGU7XG4gICAgc2V0T3B0aW9uKFNDUklQVF9URU1QTEFURSwgdGVtcGxhdGUpO1xuICB9XG4gIGNvbnN0IGVkaXRlZCA9IHRlbXBsYXRlICE9PSBkZWZhdWx0VGVtcGxhdGU7XG4gIGlmIChlZGl0ZWQgIT09IGNoYW5nZXNbU0NSSVBUX1RFTVBMQVRFX0VESVRFRF0pIHtcbiAgICBjaGFuZ2VzW1NDUklQVF9URU1QTEFURV9FRElURURdID0gZWRpdGVkO1xuICAgIHNldE9wdGlvbihTQ1JJUFRfVEVNUExBVEVfRURJVEVELCBlZGl0ZWQpO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyB0bGQgZnJvbSAnIy9jb21tb24vdGxkJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcbmltcG9ydCB7IHBvc3RJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IGdldE9wdGlvbiwgaG9va09wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIFRlc3RCbGFja2xpc3Q6IHRlc3RCbGFja2xpc3QsXG59KTtcblxucG9zdEluaXRpYWxpemUucHVzaChyZXNldEJsYWNrbGlzdCk7XG5cbnRsZC5pbml0VExEKHRydWUpO1xuXG5jb25zdCBSRV9NQVRDSF9QQVJUUyA9IC8oLio/KTpcXC9cXC8oW14vXSopXFwvKC4qKS87XG5sZXQgYmxhY2tsaXN0UnVsZXMgPSBbXTtcbmhvb2tPcHRpb25zKChjaGFuZ2VzKSA9PiB7XG4gIGlmICgnYmxhY2tsaXN0JyBpbiBjaGFuZ2VzKSByZXNldEJsYWNrbGlzdChjaGFuZ2VzLmJsYWNrbGlzdCB8fCAnJyk7XG59KTtcbmNvbnN0IFJFX0hUVFBfT1JfSFRUUFMgPSAvXmh0dHBzPyQvaTtcblxuLypcbiBTaW1wbGUgRklGTyBxdWV1ZSBmb3IgdGhlIHJlc3VsdHMgb2YgdGVzdEJsYWNrbGlzdCwgY2FjaGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgbWFpbiB8Y2FjaGV8XG4gYmVjYXVzZSB0aGUgYmxhY2tsaXN0IGlzIHVwZGF0ZWQgb25seSBvbmNlIGluIGEgd2hpbGUgc28gaXRzIGVudHJpZXMgd291bGQgYmUgY3Jvd2RpbmdcbiB0aGUgbWFpbiBjYWNoZSBhbmQgcmVkdWNpbmcgaXRzIHBlcmZvcm1hbmNlIChvYmplY3RzIHdpdGggbG90cyBvZiBrZXlzIGFyZSBzbG93IHRvIGFjY2VzcykuXG5cbiBXZSBhbHNvIGRvbid0IG5lZWQgdG8gYXV0by1leHBpcmUgdGhlIGVudHJpZXMgYWZ0ZXIgYSB0aW1lb3V0LlxuIFRoZSBvbmx5IGxpbWl0IHdlJ3JlIGNvbmNlcm5lZCB3aXRoIGlzIHRoZSBvdmVyYWxsIG1lbW9yeSB1c2VkLlxuIFRoZSBsaW1pdCBpcyBzcGVjaWZpZWQgaW4gdGhlIGFtb3VudCBvZiB1bmljb2RlIGNoYXJhY3RlcnMgKHN0cmluZyBsZW5ndGgpIGZvciBzaW1wbGljaXR5LlxuIERpc3JlZ2FyZGluZyBkZWR1cGxpY2F0aW9uIGR1ZSB0byBpbnRlcm5pbmcsIHRoZSBhY3R1YWwgbWVtb3J5IHVzZWQgaXMgYXBwcm94aW1hdGVseSB0d2ljZSBhcyBiaWc6XG4gMiAqIGtleUxlbmd0aCArIG9iamVjdFN0cnVjdHVyZU92ZXJoZWFkICogb2JqZWN0Q291bnRcbiovXG5jb25zdCBNQVhfQkxfQ0FDSEVfTEVOR1RIID0gMTAwZTM7XG5sZXQgYmxDYWNoZSA9IHt9O1xubGV0IGJsQ2FjaGVTaXplID0gMDtcblxuZnVuY3Rpb24gdGVzdFJ1bGVzKHVybCwgcnVsZXMsIHByZWZpeCwgcnVsZUJ1aWxkZXIpIHtcbiAgcmV0dXJuIHJ1bGVzLnNvbWUocnVsZSA9PiB7XG4gICAgY29uc3Qga2V5ID0gYCR7cHJlZml4fToke3J1bGV9YDtcbiAgICBjb25zdCBtYXRjaGVyID0gY2FjaGUuZ2V0KGtleSkgfHwgY2FjaGUucHV0KGtleSwgcnVsZUJ1aWxkZXIocnVsZSkpO1xuICAgIHJldHVybiBtYXRjaGVyLnRlc3QodXJsKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGVzdCBnbG9iIHJ1bGVzIGxpa2UgYEBpbmNsdWRlYCBhbmQgYEBleGNsdWRlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlc3RHbG9iKHVybCwgcnVsZXMpIHtcbiAgcmV0dXJuIHRlc3RSdWxlcyh1cmwsIHJ1bGVzLCAncmUnLCBhdXRvUmVnKTtcbn1cblxuLyoqXG4gKiBUZXN0IG1hdGNoIHJ1bGVzIGxpa2UgYEBtYXRjaGAgYW5kIGBAZXhjbHVkZV9tYXRjaGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0TWF0Y2godXJsLCBydWxlcykge1xuICByZXR1cm4gdGVzdFJ1bGVzKHVybCwgcnVsZXMsICdtYXRjaCcsIG1hdGNoVGVzdGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RTY3JpcHQodXJsLCBzY3JpcHQpIHtcbiAgY2FjaGUuYmF0Y2godHJ1ZSk7XG4gIGNvbnN0IHsgY3VzdG9tLCBtZXRhIH0gPSBzY3JpcHQ7XG4gIGNvbnN0IG1hdCA9IG1lcmdlTGlzdHMoY3VzdG9tLm9yaWdNYXRjaCAmJiBtZXRhLm1hdGNoLCBjdXN0b20ubWF0Y2gpO1xuICBjb25zdCBpbmMgPSBtZXJnZUxpc3RzKGN1c3RvbS5vcmlnSW5jbHVkZSAmJiBtZXRhLmluY2x1ZGUsIGN1c3RvbS5pbmNsdWRlKTtcbiAgY29uc3QgZXhjID0gbWVyZ2VMaXN0cyhjdXN0b20ub3JpZ0V4Y2x1ZGUgJiYgbWV0YS5leGNsdWRlLCBjdXN0b20uZXhjbHVkZSk7XG4gIGNvbnN0IGV4Y01hdCA9IG1lcmdlTGlzdHMoY3VzdG9tLm9yaWdFeGNsdWRlTWF0Y2ggJiYgbWV0YS5leGNsdWRlTWF0Y2gsIGN1c3RvbS5leGNsdWRlTWF0Y2gpO1xuICAvLyBtYXRjaCBhbGwgaWYgbm8gQG1hdGNoIG9yIEBpbmNsdWRlIHJ1bGVcbiAgbGV0IG9rID0gIW1hdC5sZW5ndGggJiYgIWluYy5sZW5ndGg7XG4gIC8vIEBtYXRjaFxuICBvayA9IG9rIHx8IHRlc3RNYXRjaCh1cmwsIG1hdCk7XG4gIC8vIEBpbmNsdWRlXG4gIG9rID0gb2sgfHwgdGVzdEdsb2IodXJsLCBpbmMpO1xuICAvLyBAZXhjbHVkZS1tYXRjaFxuICBvayA9IG9rICYmICF0ZXN0TWF0Y2godXJsLCBleGNNYXQpO1xuICAvLyBAZXhjbHVkZVxuICBvayA9IG9rICYmICF0ZXN0R2xvYih1cmwsIGV4Yyk7XG4gIGNhY2hlLmJhdGNoKGZhbHNlKTtcbiAgcmV0dXJuIG9rO1xufVxuXG5mdW5jdGlvbiBtZXJnZUxpc3RzKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGFyZ3MucmVkdWNlKChyZXMsIGl0ZW0pID0+IChpdGVtID8gcmVzLmNvbmNhdChpdGVtKSA6IHJlcyksIFtdKTtcbn1cblxuZnVuY3Rpb24gc3RyMlJFKHN0cikge1xuICBjb25zdCByZSA9IHN0ci5yZXBsYWNlKC8oWy4/K1tcXF17fSgpfF4kXSkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gIHJldHVybiByZTtcbn1cblxuZnVuY3Rpb24gYmluZFJFKHJlKSB7XG4gIHJldHVybiByZS50ZXN0LmJpbmQocmUpO1xufVxuXG5mdW5jdGlvbiBhdXRvUmVnKHN0cikge1xuICAvLyByZWdleHAgbW9kZTogY2FzZS1pbnNlbnNpdGl2ZSBwZXIgR00gZG9jdW1lbnRhdGlvblxuICBpZiAoc3RyLmxlbmd0aCA+IDEgJiYgc3RyWzBdID09PSAnLycgJiYgc3RyW3N0ci5sZW5ndGggLSAxXSA9PT0gJy8nKSB7XG4gICAgbGV0IHJlO1xuICAgIHRyeSB7IHJlID0gbmV3IFJlZ0V4cChzdHIuc2xpY2UoMSwgLTEpLCAnaScpOyB9IGNhdGNoIChlKSB7IC8qIGlnbm9yZSAqLyB9XG4gICAgcmV0dXJuIHsgdGVzdDogcmUgPyBiaW5kUkUocmUpIDogKCkgPT4gZmFsc2UgfTtcbiAgfVxuICAvLyBnbG9iIG1vZGU6IGNhc2UtaW5zZW5zaXRpdmUgdG8gbWF0Y2ggR000ICYgVGFtcGVybW9ua2V5IGJ1Z2dlZCBiZWhhdmlvclxuICBjb25zdCByZVN0ciA9IHN0cjJSRShzdHIudG9Mb3dlckNhc2UoKSk7XG4gIGlmICh0bGQuaXNSZWFkeSgpICYmIHN0ci5pbmNsdWRlcygnLnRsZC8nKSkge1xuICAgIGNvbnN0IHJlVGxkU3RyID0gcmVTdHIucmVwbGFjZSgnXFxcXC50bGQvJywgJygoPzpcXFxcLlstXFxcXHddKykrKS8nKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGVzdDogKHRzdHIpID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRzdHIudG9Mb3dlckNhc2UoKS5tYXRjaChyZVRsZFN0cik7XG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3Qgc3VmZml4ID0gbWF0Y2hlc1sxXS5zbGljZSgxKTtcbiAgICAgICAgICBpZiAodGxkLmdldFB1YmxpY1N1ZmZpeChzdWZmaXgpID09PSBzdWZmaXgpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoYF4ke3JlU3RyfSRgLCAnaScpOyAvLyBTdHJpbmcgd2l0aCB3aWxkY2FyZHNcbiAgcmV0dXJuIHsgdGVzdDogYmluZFJFKHJlKSB9O1xufVxuXG5mdW5jdGlvbiBtYXRjaFNjaGVtZShydWxlLCBkYXRhKSB7XG4gIC8vIGV4YWN0IG1hdGNoXG4gIGlmIChydWxlID09PSBkYXRhKSByZXR1cm4gMTtcbiAgLy8gKiA9IGh0dHAgfCBodHRwc1xuICAvLyBzdXBwb3J0IGh0dHAqXG4gIGlmIChbXG4gICAgJyonLFxuICAgICdodHRwKicsXG4gIF0uaW5jbHVkZXMocnVsZSkgJiYgUkVfSFRUUF9PUl9IVFRQUy50ZXN0KGRhdGEpKSByZXR1cm4gMTtcbiAgcmV0dXJuIDA7XG59XG5cbmNvbnN0IFJFX1NUUl9BTlkgPSAnKD86fC4qP1xcXFwuKSc7XG5jb25zdCBSRV9TVFJfVExEID0gJygoPzpcXFxcLlstXFxcXHddKykrKSc7XG5mdW5jdGlvbiBob3N0TWF0Y2hlcihydWxlKSB7XG4gIC8vICogbWF0Y2hlcyBhbGxcbiAgaWYgKHJ1bGUgPT09ICcqJykge1xuICAgIHJldHVybiAoKSA9PiAxO1xuICB9XG4gIC8vICouZXhhbXBsZS5jb21cbiAgLy8gd3d3Lmdvb2dsZS4qXG4gIC8vIHd3dy5nb29nbGUudGxkXG4gIGNvbnN0IHJ1bGVMQyA9IHJ1bGUudG9Mb3dlckNhc2UoKTsgLy8gaG9zdCBtYXRjaGluZyBpcyBjYXNlLWluc2Vuc2l0aXZlXG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IGJhc2UgPSBydWxlTEM7XG4gIGxldCBzdWZmaXggPSAnJztcbiAgaWYgKHJ1bGUuc3RhcnRzV2l0aCgnKi4nKSkge1xuICAgIGJhc2UgPSBiYXNlLnNsaWNlKDIpO1xuICAgIHByZWZpeCA9IFJFX1NUUl9BTlk7XG4gIH1cbiAgaWYgKHRsZC5pc1JlYWR5KCkgJiYgcnVsZS5lbmRzV2l0aCgnLnRsZCcpKSB7XG4gICAgYmFzZSA9IGJhc2Uuc2xpY2UoMCwgLTQpO1xuICAgIHN1ZmZpeCA9IFJFX1NUUl9UTEQ7XG4gIH1cbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGBeJHtwcmVmaXh9JHtzdHIyUkUoYmFzZSl9JHtzdWZmaXh9JGApO1xuICByZXR1cm4gKGRhdGEpID0+IHtcbiAgICAvLyBleGFjdCBtYXRjaCwgY2FzZS1pbnNlbnNpdGl2ZVxuICAgIGRhdGEgPSBkYXRhLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHJ1bGVMQyA9PT0gZGF0YSkgcmV0dXJuIDE7XG4gICAgLy8gZnVsbCBjaGVja1xuICAgIGNvbnN0IG1hdGNoZXMgPSBkYXRhLm1hdGNoKHJlKTtcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgWywgdGxkU3RyXSA9IG1hdGNoZXM7XG4gICAgICBpZiAoIXRsZFN0cikgcmV0dXJuIDE7XG4gICAgICBjb25zdCB0bGRTdWZmaXggPSB0bGRTdHIuc2xpY2UoMSk7XG4gICAgICByZXR1cm4gdGxkLmdldFB1YmxpY1N1ZmZpeCh0bGRTdWZmaXgpID09PSB0bGRTdWZmaXg7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwYXRoTWF0Y2hlcihydWxlKSB7XG4gIGNvbnN0IGlIYXNoID0gcnVsZS5pbmRleE9mKCcjJyk7XG4gIGxldCBpUXVlcnkgPSBydWxlLmluZGV4T2YoJz8nKTtcbiAgbGV0IHN0clJlID0gc3RyMlJFKHJ1bGUpO1xuICBpZiAoaVF1ZXJ5ID4gaUhhc2gpIGlRdWVyeSA9IC0xO1xuICBpZiAoaUhhc2ggPCAwKSB7XG4gICAgaWYgKGlRdWVyeSA8IDApIHN0clJlID0gYF4ke3N0clJlfSg/Ols/I118JClgO1xuICAgIGVsc2Ugc3RyUmUgPSBgXiR7c3RyUmV9KD86I3wkKWA7XG4gIH1cbiAgcmV0dXJuIGJpbmRSRShuZXcgUmVnRXhwKHN0clJlKSk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoVGVzdGVyKHJ1bGUpIHtcbiAgbGV0IHRlc3Q7XG4gIGlmIChydWxlID09PSAnPGFsbF91cmxzPicpIHtcbiAgICB0ZXN0ID0gKCkgPT4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBydWxlUGFydHMgPSBydWxlLm1hdGNoKFJFX01BVENIX1BBUlRTKTtcbiAgICBpZiAocnVsZVBhcnRzKSB7XG4gICAgICBjb25zdCBtYXRjaEhvc3QgPSBob3N0TWF0Y2hlcihydWxlUGFydHNbMl0pO1xuICAgICAgY29uc3QgbWF0Y2hQYXRoID0gcGF0aE1hdGNoZXIocnVsZVBhcnRzWzNdKTtcbiAgICAgIHRlc3QgPSAodXJsKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdXJsLm1hdGNoKFJFX01BVENIX1BBUlRTKTtcbiAgICAgICAgcmV0dXJuICEhcnVsZVBhcnRzICYmICEhcGFydHNcbiAgICAgICAgICAmJiBtYXRjaFNjaGVtZShydWxlUGFydHNbMV0sIHBhcnRzWzFdKVxuICAgICAgICAgICYmIG1hdGNoSG9zdChwYXJ0c1syXSlcbiAgICAgICAgICAmJiBtYXRjaFBhdGgocGFydHNbM10pO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWdub3JlIGludmFsaWQgbWF0Y2ggcnVsZXNcbiAgICAgIHRlc3QgPSAoKSA9PiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgdGVzdCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdEJsYWNrbGlzdCh1cmwpIHtcbiAgbGV0IHJlcyA9IGJsQ2FjaGVbdXJsXTtcbiAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgcnVsZSA9IGJsYWNrbGlzdFJ1bGVzLmZpbmQoKHsgdGVzdCB9KSA9PiB0ZXN0KHVybCkpO1xuICAgIHJlcyA9IHJ1bGU/LnJlamVjdCAmJiBydWxlLnRleHQ7XG4gICAgdXBkYXRlQmxhY2tsaXN0Q2FjaGUodXJsLCByZXMgfHwgZmFsc2UpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEJsYWNrbGlzdChsaXN0KSB7XG4gIGNhY2hlLmJhdGNoKHRydWUpO1xuICBjb25zdCBydWxlcyA9IGxpc3QgPT0gbnVsbCA/IGdldE9wdGlvbignYmxhY2tsaXN0JykgOiBsaXN0O1xuICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICBjb25zb2xlLmluZm8oJ1Jlc2V0IGJsYWNrbGlzdDonLCBydWxlcyk7XG4gIH1cbiAgLy8gWFhYIGNvbXBhdGlibGUgd2l0aCB7QXJyYXl9IGxpc3QgaW4gdjIuNi4xLVxuICBibGFja2xpc3RSdWxlcyA9IChBcnJheS5pc0FycmF5KHJ1bGVzKSA/IHJ1bGVzIDogKHJ1bGVzIHx8ICcnKS5zcGxpdCgnXFxuJykpXG4gIC5tYXAoKHRleHQpID0+IHtcbiAgICB0ZXh0ID0gdGV4dC50cmltKCk7XG4gICAgaWYgKCF0ZXh0IHx8IHRleHQuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtb2RlID0gdGV4dC5zdGFydHNXaXRoKCdAJykgJiYgdGV4dC5zcGxpdCgvXFxzLywgMSlbMF07XG4gICAgY29uc3QgcnVsZSA9IG1vZGUgPyB0ZXh0LnNsaWNlKG1vZGUubGVuZ3RoICsgMSkudHJpbSgpIDogdGV4dDtcbiAgICBjb25zdCByZWplY3QgPSBtb2RlICE9PSAnQGluY2x1ZGUnICYmIG1vZGUgIT09ICdAbWF0Y2gnOyAvLyBAaW5jbHVkZSBhbmQgQG1hdGNoID0gd2hpdGVsaXN0XG4gICAgY29uc3QgeyB0ZXN0IH0gPSBtb2RlID09PSAnQGluY2x1ZGUnIHx8IG1vZGUgPT09ICdAZXhjbHVkZScgJiYgYXV0b1JlZyhydWxlKVxuICAgICAgfHwgIW1vZGUgJiYgIXJ1bGUuaW5jbHVkZXMoJy8nKSAmJiBtYXRjaFRlc3RlcihgKjovLyR7cnVsZX0vKmApIC8vIGRvbWFpblxuICAgICAgfHwgbWF0Y2hUZXN0ZXIocnVsZSk7IC8vIEBtYXRjaCBhbmQgQGV4Y2x1ZGUtbWF0Y2hcbiAgICByZXR1cm4geyByZWplY3QsIHRlc3QsIHRleHQgfTtcbiAgfSlcbiAgLmZpbHRlcihCb29sZWFuKTtcbiAgYmxDYWNoZSA9IHt9O1xuICBibENhY2hlU2l6ZSA9IDA7XG4gIGNhY2hlLmJhdGNoKGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQmxhY2tsaXN0Q2FjaGUoa2V5LCB2YWx1ZSkge1xuICBibENhY2hlW2tleV0gPSB2YWx1ZTtcbiAgYmxDYWNoZVNpemUgKz0ga2V5Lmxlbmd0aDtcbiAgaWYgKGJsQ2FjaGVTaXplID4gTUFYX0JMX0NBQ0hFX0xFTkdUSCkge1xuICAgIE9iamVjdC5rZXlzKGJsQ2FjaGUpXG4gICAgLnNvbWUoKGspID0+IHtcbiAgICAgIGJsQ2FjaGVTaXplIC09IGsubGVuZ3RoO1xuICAgICAgZGVsZXRlIGJsQ2FjaGVba107XG4gICAgICAvLyByZWR1Y2UgdGhlIGNhY2hlIHRvIDc1JSBzbyB0aGF0IHRoaXMgZnVuY3Rpb24gZG9lc24ndCBydW4gdG9vIG9mdGVuLlxuICAgICAgcmV0dXJuIGJsQ2FjaGVTaXplIDwgTUFYX0JMX0NBQ0hFX0xFTkdUSCAqIDMgLyA0O1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRTY3JpcHROYW1lLCBpMThuLCByZXF1ZXN0LCBjb21wYXJlVmVyc2lvbiwgc2VuZENtZCwgdHJ1ZUpvaW4gfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBDTURfU0NSSVBUX1VQREFURSwgSVNfREVWIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcbmltcG9ydCB7IGZldGNoUmVzb3VyY2VzLCBnZXRTY3JpcHRCeUlkLCBnZXRTY3JpcHRzLCBwYXJzZVNjcmlwdCB9IGZyb20gJy4vZGInO1xuaW1wb3J0IHsgcGFyc2VNZXRhIH0gZnJvbSAnLi9zY3JpcHQnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uLCBzZXRPcHRpb24gfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHRydWU/Pn0gKi9cbiAgYXN5bmMgQ2hlY2tVcGRhdGUoaWQpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBnZXRTY3JpcHRCeUlkKGlkKTtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2hlY2tBbGxBbmROb3RpZnkoW3NjcmlwdF0pO1xuICAgIHJldHVybiByZXN1bHRzWzBdO1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gKi9cbiAgYXN5bmMgQ2hlY2tVcGRhdGVBbGwoKSB7XG4gICAgc2V0T3B0aW9uKCdsYXN0VXBkYXRlJywgRGF0ZS5ub3coKSk7XG4gICAgY29uc3QgdG9VcGRhdGUgPSBnZXRTY3JpcHRzKCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb25maWcuc2hvdWxkVXBkYXRlKTtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2hlY2tBbGxBbmROb3RpZnkodG9VcGRhdGUpO1xuICAgIHJldHVybiByZXN1bHRzLmluY2x1ZGVzKHRydWUpO1xuICB9LFxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrQWxsQW5kTm90aWZ5KHNjcmlwdHMpIHtcbiAgY29uc3Qgbm90ZXMgPSBbXTtcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKGl0ZW0gPT4gY2hlY2tVcGRhdGUoaXRlbSwgbm90ZXMpKSk7XG4gIGlmIChub3Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICBub3RpZnkobm90ZXNbMF0pO1xuICB9IGVsc2UgaWYgKG5vdGVzLmxlbmd0aCkge1xuICAgIG5vdGlmeSh7XG4gICAgICAvLyBGRiBkb2Vzbid0IHNob3cgbm90aWZpY2F0aW9ucyBvZiB0eXBlOidsaXN0JyBzbyB3ZSdsbCB1c2UgYHRleHRgIGV2ZXJ5d2hlcmVcbiAgICAgIHRleHQ6IG5vdGVzLm1hcChuID0+IG4udGV4dCkuam9pbignXFxuJyksXG4gICAgICBvbkNsaWNrOiBicm93c2VyLnJ1bnRpbWUub3Blbk9wdGlvbnNQYWdlLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufVxuXG5jb25zdCBwcm9jZXNzZXMgPSB7fTtcblxuLy8gcmVzb2x2ZXMgdG8gdHJ1ZSBpZiBzdWNjZXNzZnVsbHkgdXBkYXRlZFxuZnVuY3Rpb24gY2hlY2tVcGRhdGUoc2NyaXB0LCBub3Rlcykge1xuICBjb25zdCB7IGlkIH0gPSBzY3JpcHQucHJvcHM7XG4gIGNvbnN0IHByb21pc2UgPSBwcm9jZXNzZXNbaWRdIHx8IChwcm9jZXNzZXNbaWRdID0gZG9DaGVja1VwZGF0ZShzY3JpcHQsIG5vdGVzKSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkb0NoZWNrVXBkYXRlKHNjcmlwdCwgbm90ZXMpIHtcbiAgY29uc3QgeyBpZCB9ID0gc2NyaXB0LnByb3BzO1xuICBsZXQgbXNnT2s7XG4gIGxldCBtc2dFcnI7XG4gIGxldCByZXNvdXJjZU9wdHM7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1cGRhdGUgfSA9IGF3YWl0IHBhcnNlU2NyaXB0KHtcbiAgICAgIGlkLFxuICAgICAgY29kZTogYXdhaXQgZG93bmxvYWRVcGRhdGUoc2NyaXB0KSxcbiAgICAgIHVwZGF0ZTogeyBjaGVja2luZzogZmFsc2UgfSxcbiAgICB9KTtcbiAgICBtc2dPayA9IGkxOG4oJ21zZ1NjcmlwdFVwZGF0ZWQnLCBbZ2V0U2NyaXB0TmFtZSh1cGRhdGUpXSk7XG4gICAgcmVzb3VyY2VPcHRzID0geyBjYWNoZTogJ25vLWNhY2hlJyB9O1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoICh1cGRhdGUpIHtcbiAgICBtc2dFcnIgPSB1cGRhdGUuZXJyb3I7XG4gICAgLy8gRWl0aGVyIHByb2NlZWQgd2l0aCBub3JtYWwgZmV0Y2ggb24gbm8tdXBkYXRlIG9yIHNraXAgaXQgYWx0b2dldGhlciBvbiBlcnJvclxuICAgIHJlc291cmNlT3B0cyA9ICF1cGRhdGUuZXJyb3IgJiYgIXVwZGF0ZS5jaGVja2luZyAmJiB7fTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIGNvbnNvbGUuZXJyb3IodXBkYXRlKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAocmVzb3VyY2VPcHRzKSB7XG4gICAgICBtc2dFcnIgPSBhd2FpdCBmZXRjaFJlc291cmNlcyhzY3JpcHQsIG51bGwsIHJlc291cmNlT3B0cyk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcgJiYgbXNnRXJyKSBjb25zb2xlLmVycm9yKG1zZ0Vycik7XG4gICAgfVxuICAgIGlmIChjYW5Ob3RpZnkoc2NyaXB0KSAmJiAobXNnT2sgfHwgbXNnRXJyKSkge1xuICAgICAgbm90ZXMucHVzaCh7XG4gICAgICAgIHNjcmlwdCxcbiAgICAgICAgdGV4dDogW21zZ09rLCBtc2dFcnJdOjp0cnVlSm9pbignXFxuJyksXG4gICAgICB9KTtcbiAgICB9XG4gICAgZGVsZXRlIHByb2Nlc3Nlc1tpZF07XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZG93bmxvYWRVcGRhdGUoeyBwcm9wczogeyBpZCB9LCBtZXRhLCBjdXN0b20gfSkge1xuICBjb25zdCBkb3dubG9hZFVSTCA9IGN1c3RvbS5kb3dubG9hZFVSTCB8fCBtZXRhLmRvd25sb2FkVVJMIHx8IGN1c3RvbS5sYXN0SW5zdGFsbFVSTDtcbiAgY29uc3QgdXBkYXRlVVJMID0gY3VzdG9tLnVwZGF0ZVVSTCB8fCBtZXRhLnVwZGF0ZVVSTCB8fCBkb3dubG9hZFVSTDtcbiAgLy8gaWYgKElTX0RFViAmJiB1cGRhdGVVUkwpIHtcbiAgLy8gICAvLyBuZXcgVVJMKHVwZGF0ZVVSTCk7XG4gIC8vICAgY29uc29sZS5pbmZvKCdkb3dubG9hZFVwZGF0ZScsIGlkLCBtZXRhLCB1cGRhdGVVUkwpO1xuICAvLyAgIHVwZGF0ZVVSTCA9IG51bGw7XG4gIC8vIH1cbiAgaWYgKCF1cGRhdGVVUkwpIHRocm93IGZhbHNlO1xuICBsZXQgZXJyb3JNZXNzYWdlO1xuICBjb25zdCB1cGRhdGUgPSB7fTtcbiAgY29uc3QgcmVzdWx0ID0geyB1cGRhdGUsIHdoZXJlOiB7IGlkIH0gfTtcbiAgYW5ub3VuY2UoaTE4bignbXNnQ2hlY2tpbmdGb3JVcGRhdGUnKSk7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXF1ZXN0KHVwZGF0ZVVSTCwge1xuICAgICAgLy8gVE9ETzogZG8gYSBIRUFEIHJlcXVlc3QgZmlyc3QgdG8gZ2V0IEVUYWcgaGVhZGVyIGFuZCBjb21wYXJlIHRvIHN0b3JhZ2UubW9kXG4gICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgIGhlYWRlcnM6IHsgQWNjZXB0OiAndGV4dC94LXVzZXJzY3JpcHQtbWV0YSwqLyonIH0sXG4gICAgfSk7XG4gICAgY29uc3QgeyB2ZXJzaW9uIH0gPSBwYXJzZU1ldGEoZGF0YSk7XG4gICAgaWYgKGNvbXBhcmVWZXJzaW9uKG1ldGEudmVyc2lvbiwgdmVyc2lvbikgPj0gMCkge1xuICAgICAgYW5ub3VuY2UoaTE4bignbXNnTm9VcGRhdGUnKSwgeyBjaGVja2luZzogZmFsc2UgfSk7XG4gICAgfSBlbHNlIGlmICghZG93bmxvYWRVUkwpIHtcbiAgICAgIGFubm91bmNlKGkxOG4oJ21zZ05ld1ZlcnNpb24nKSwgeyBjaGVja2luZzogZmFsc2UgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFubm91bmNlKGkxOG4oJ21zZ1VwZGF0aW5nJykpO1xuICAgICAgZXJyb3JNZXNzYWdlID0gaTE4bignbXNnRXJyb3JGZXRjaGluZ1NjcmlwdCcpO1xuICAgICAgcmV0dXJuIChhd2FpdCByZXF1ZXN0KGRvd25sb2FkVVJMLCB7IGNhY2hlOiAnbm8tY2FjaGUnIH0pKS5kYXRhO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIGFubm91bmNlKGVycm9yTWVzc2FnZSB8fCBpMThuKCdtc2dFcnJvckZldGNoaW5nVXBkYXRlSW5mbycpLCB7IGVycm9yIH0pO1xuICB9XG4gIHRocm93IHVwZGF0ZTtcbiAgZnVuY3Rpb24gYW5ub3VuY2UobWVzc2FnZSwgeyBlcnJvciwgY2hlY2tpbmcgPSAhZXJyb3IgfSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih1cGRhdGUsIHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBjaGVja2luZyxcbiAgICAgIGVycm9yOiBlcnJvciA/IGAke2kxOG4oJ2dlbmVyaWNFcnJvcicpfSAke2Vycm9yLnN0YXR1c30sICR7ZXJyb3IudXJsfWAgOiBudWxsLFxuICAgICAgLy8gYG51bGxgIGlzIHRyYW5zZmVyYWJsZSBpbiBDaHJvbWUgdW5saWtlIGB1bmRlZmluZWRgXG4gICAgfSk7XG4gICAgc2VuZENtZChDTURfU0NSSVBUX1VQREFURSwgcmVzdWx0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5Ob3RpZnkoc2NyaXB0KSB7XG4gIGNvbnN0IGFsbG93ZWQgPSBnZXRPcHRpb24oJ25vdGlmeVVwZGF0ZXMnKTtcbiAgcmV0dXJuIGdldE9wdGlvbignbm90aWZ5VXBkYXRlc0dsb2JhbCcpXG4gICAgPyBhbGxvd2VkXG4gICAgOiBzY3JpcHQuY29uZmlnLm5vdGlmeVVwZGF0ZXMgPz8gYWxsb3dlZDtcbn1cblxuZnVuY3Rpb24gbm90aWZ5KHtcbiAgc2NyaXB0LFxuICB0ZXh0LFxuICBvbkNsaWNrID0gKCkgPT4gY29tbWFuZHMuT3BlbkVkaXRvcihzY3JpcHQucHJvcHMuaWQpLFxufSkge1xuICBjb21tYW5kcy5Ob3RpZmljYXRpb24oe1xuICAgIHRleHQsXG4gICAgLy8gRkYgZG9lc24ndCBzaG93IHRoZSBuYW1lIG9mIHRoZSBleHRlbnNpb24gaW4gdGhlIHRpdGxlIG9mIHRoZSBub3RpZmljYXRpb25cbiAgICB0aXRsZTogSVNfRklSRUZPWCA/IGAke2kxOG4oJ3RpdGxlU2NyaXB0VXBkYXRlZCcpfSAtICR7aTE4bignZXh0TmFtZScpfWAgOiAnJyxcbiAgfSwgdW5kZWZpbmVkLCB7XG4gICAgb25DbGljayxcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBpc0VtcHR5LCBzZW5kVGFiQ21kIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgZm9yRWFjaEVudHJ5LCBmb3JFYWNoS2V5LCBvYmplY3RTZXQgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHsgZ2V0U2NyaXB0LCBnZXRWYWx1ZVN0b3Jlc0J5SWRzLCBkdW1wVmFsdWVTdG9yZXMgfSBmcm9tICcuL2RiJztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuY29uc3Qgb3BlbmVycyA9IHt9OyAvLyB7IHNjcmlwdElkOiB7IHRhYklkOiB7IGZyYW1lSWQ6IDEsIC4uLiB9LCAuLi4gfSB9XG5sZXQgY2FjaGUgPSB7fTsgLy8geyBzY3JpcHRJZDogeyBrZXk6IHsgbGFzdDogdmFsdWUsIHRhYklkOiB7IGZyYW1lSWQ6IHZhbHVlIH0gfSB9IH1cbmxldCB1cGRhdGVTY2hlZHVsZWQ7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn0gKi9cbiAgYXN5bmMgR2V0VmFsdWVTdG9yZShpZCkge1xuICAgIGNvbnN0IHN0b3JlcyA9IGF3YWl0IGdldFZhbHVlU3RvcmVzQnlJZHMoW2lkXSk7XG4gICAgcmV0dXJuIHN0b3Jlc1tpZF0gfHwge307XG4gIH0sXG4gIC8qKiBAcGFyYW0ge3sgd2hlcmUsIHN0b3JlIH1bXX0gZGF0YVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSAqL1xuICBhc3luYyBTZXRWYWx1ZVN0b3JlcyhkYXRhKSB7XG4gICAgLy8gVmFsdWUgc3RvcmUgd2lsbCBiZSByZXBsYWNlZCBzb29uLlxuICAgIGNvbnN0IHN0b3JlcyA9IGRhdGEucmVkdWNlKChyZXMsIHsgd2hlcmUsIHN0b3JlIH0pID0+IHtcbiAgICAgIGNvbnN0IGlkID0gd2hlcmUuaWQgfHwgZ2V0U2NyaXB0KHdoZXJlKT8ucHJvcHMuaWQ7XG4gICAgICBpZiAoaWQpIHJlc1tpZF0gPSBzdG9yZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGR1bXBWYWx1ZVN0b3JlcyhzdG9yZXMpLFxuICAgICAgYnJvYWRjYXN0VmFsdWVTdG9yZXMoZ3JvdXBTdG9yZXNCeUZyYW1lKHN0b3JlcykpLFxuICAgIF0pO1xuICB9LFxuICAvKiogQHJldHVybiB7dm9pZH0gKi9cbiAgVXBkYXRlVmFsdWUoeyBpZCwga2V5LCB2YWx1ZSA9IG51bGwgfSwgc3JjKSB7XG4gICAgb2JqZWN0U2V0KGNhY2hlLCBbaWQsIGtleSwgJ2xhc3QnXSwgdmFsdWUpO1xuICAgIG9iamVjdFNldChjYWNoZSwgW2lkLCBrZXksIHNyYy50YWIuaWQsIHNyYy5mcmFtZUlkXSwgdmFsdWUpO1xuICAgIHVwZGF0ZUxhdGVyKCk7XG4gIH0sXG59KTtcblxuYnJvd3Nlci50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcihyZXNldFZhbHVlT3BlbmVyKTtcbmJyb3dzZXIudGFicy5vblJlcGxhY2VkLmFkZExpc3RlbmVyKChhZGRlZElkLCByZW1vdmVkSWQpID0+IHJlc2V0VmFsdWVPcGVuZXIocmVtb3ZlZElkKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFZhbHVlT3BlbmVyKHRhYklkKSB7XG4gIG9wZW5lcnM6OmZvckVhY2hFbnRyeSgoW2lkLCBvcGVuZXJUYWJzXSkgPT4ge1xuICAgIGlmICh0YWJJZCBpbiBvcGVuZXJUYWJzKSB7XG4gICAgICBkZWxldGUgb3BlbmVyVGFic1t0YWJJZF07XG4gICAgICBpZiAoaXNFbXB0eShvcGVuZXJUYWJzKSkgZGVsZXRlIG9wZW5lcnNbaWRdO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRWYWx1ZU9wZW5lcih0YWJJZCwgZnJhbWVJZCwgc2NyaXB0SWRzKSB7XG4gIHNjcmlwdElkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgIG9iamVjdFNldChvcGVuZXJzLCBbaWQsIHRhYklkLCBmcmFtZUlkXSwgMSk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVMYXRlcigpIHtcbiAgd2hpbGUgKCF1cGRhdGVTY2hlZHVsZWQpIHtcbiAgICB1cGRhdGVTY2hlZHVsZWQgPSB0cnVlO1xuICAgIGF3YWl0IDA7XG4gICAgY29uc3QgY3VycmVudENhY2hlID0gY2FjaGU7XG4gICAgY2FjaGUgPSB7fTtcbiAgICBhd2FpdCBkb1VwZGF0ZShjdXJyZW50Q2FjaGUpO1xuICAgIHVwZGF0ZVNjaGVkdWxlZCA9IGZhbHNlO1xuICAgIGlmIChpc0VtcHR5KGNhY2hlKSkgYnJlYWs7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZG9VcGRhdGUoY3VycmVudENhY2hlKSB7XG4gIGNvbnN0IGlkcyA9IE9iamVjdC5rZXlzKGN1cnJlbnRDYWNoZSk7XG4gIGNvbnN0IHZhbHVlU3RvcmVzID0gYXdhaXQgZ2V0VmFsdWVTdG9yZXNCeUlkcyhpZHMpO1xuICBpZHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICBjdXJyZW50Q2FjaGVbaWRdOjpmb3JFYWNoRW50cnkoKFtrZXksIHsgbGFzdCB9XSkgPT4ge1xuICAgICAgb2JqZWN0U2V0KHZhbHVlU3RvcmVzLCBbaWQsIGtleV0sIGxhc3QgfHwgdW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfSk7XG4gIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBkdW1wVmFsdWVTdG9yZXModmFsdWVTdG9yZXMpLFxuICAgIGJyb2FkY2FzdFZhbHVlU3RvcmVzKGdyb3VwQ2FjaGVCeUZyYW1lKGN1cnJlbnRDYWNoZSksIHsgcGFydGlhbDogdHJ1ZSB9KSxcbiAgXSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGJyb2FkY2FzdFZhbHVlU3RvcmVzKHRhYkZyYW1lRGF0YSwgeyBwYXJ0aWFsIH0gPSB7fSkge1xuICBjb25zdCB0YXNrcyA9IFtdO1xuICBmb3IgKGNvbnN0IFt0YWJJZCwgZnJhbWVzXSBvZiBPYmplY3QuZW50cmllcyh0YWJGcmFtZURhdGEpKSB7XG4gICAgZm9yIChjb25zdCBbZnJhbWVJZCwgZnJhbWVEYXRhXSBvZiBPYmplY3QuZW50cmllcyhmcmFtZXMpKSB7XG4gICAgICBpZiAoIWlzRW1wdHkoZnJhbWVEYXRhKSkge1xuICAgICAgICBpZiAocGFydGlhbCkgZnJhbWVEYXRhLnBhcnRpYWwgPSB0cnVlO1xuICAgICAgICB0YXNrcy5wdXNoKHNlbmRUYWJDbWQoK3RhYklkLCAnVXBkYXRlZFZhbHVlcycsIGZyYW1lRGF0YSwgeyBmcmFtZUlkOiArZnJhbWVJZCB9KSk7XG4gICAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDIwKSBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcy5zcGxpY2UoMCkpOyAvLyB0aHJvdHRsaW5nXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzKTtcbn1cblxuLy8gUmV0dXJucyBwZXIgdGFiL2ZyYW1lIGRhdGEgd2l0aCBvbmx5IHRoZSBjaGFuZ2VkIHZhbHVlc1xuZnVuY3Rpb24gZ3JvdXBDYWNoZUJ5RnJhbWUoY2FjaGVEYXRhKSB7XG4gIGNvbnN0IHRvU2VuZCA9IHt9O1xuICBjYWNoZURhdGE6OmZvckVhY2hFbnRyeSgoW2lkLCBzY3JpcHREYXRhXSkgPT4ge1xuICAgIGNvbnN0IGRhdGFFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoc2NyaXB0RGF0YSk7XG4gICAgb3BlbmVyc1tpZF06OmZvckVhY2hFbnRyeSgoW3RhYklkLCBmcmFtZXNdKSA9PiB7XG4gICAgICBmcmFtZXM6OmZvckVhY2hLZXkoKGZyYW1lSWQpID0+IHtcbiAgICAgICAgZGF0YUVudHJpZXMuZm9yRWFjaCgoW2tleSwgaGlzdG9yeV0pID0+IHtcbiAgICAgICAgICAvLyBTa2lwcGluZyB0aGlzIGZyYW1lIGlmIGl0cyBsYXN0IHJlY29yZGVkIHZhbHVlIGlzIGlkZW50aWNhbFxuICAgICAgICAgIGlmIChoaXN0b3J5Lmxhc3QgIT09IGhpc3RvcnlbdGFiSWRdPy5bZnJhbWVJZF0pIHtcbiAgICAgICAgICAgIG9iamVjdFNldCh0b1NlbmQsIFt0YWJJZCwgZnJhbWVJZCwgaWQsIGtleV0sIGhpc3RvcnkubGFzdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHRvU2VuZDtcbn1cblxuLy8gUmV0dXJucyBwZXIgdGFiL2ZyYW1lIGRhdGFcbmZ1bmN0aW9uIGdyb3VwU3RvcmVzQnlGcmFtZShzdG9yZXMpIHtcbiAgY29uc3QgdG9TZW5kID0ge307XG4gIHN0b3Jlczo6Zm9yRWFjaEVudHJ5KChbaWQsIHN0b3JlXSkgPT4ge1xuICAgIG9wZW5lcnNbaWRdOjpmb3JFYWNoRW50cnkoKFt0YWJJZCwgZnJhbWVzXSkgPT4ge1xuICAgICAgZnJhbWVzOjpmb3JFYWNoS2V5KGZyYW1lSWQgPT4ge1xuICAgICAgICBvYmplY3RTZXQodG9TZW5kLCBbdGFiSWQsIGZyYW1lSWQsIGlkXSwgc3RvcmUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gdG9TZW5kO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoYWxsb3dlZCkge1xuICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgdGhpcy5hbGxvd2VkID0gYWxsb3dlZDtcbiAgfVxuXG4gIGNoZWNrVHlwZSh0eXBlKSB7XG4gICAgaWYgKHRoaXMuYWxsb3dlZCAmJiAhdGhpcy5hbGxvd2VkLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZXZlbnQgdHlwZTogJHt0eXBlfWApO1xuICAgIH1cbiAgfVxuXG4gIG9uKHR5cGUsIGhhbmRsZSkge1xuICAgIHRoaXMuY2hlY2tUeXBlKHR5cGUpO1xuICAgIGNvbnN0IHsgZXZlbnRzIH0gPSB0aGlzO1xuICAgIGxldCBoYW5kbGVycyA9IGV2ZW50c1t0eXBlXTtcbiAgICBpZiAoIWhhbmRsZXJzKSB7XG4gICAgICBoYW5kbGVycyA9IFtdO1xuICAgICAgZXZlbnRzW3R5cGVdID0gaGFuZGxlcnM7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB0aGlzLm9mZih0eXBlLCBoYW5kbGUpO1xuICB9XG5cbiAgb2ZmKHR5cGUsIGhhbmRsZSkge1xuICAgIHRoaXMuY2hlY2tUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5ldmVudHNbdHlwZV07XG4gICAgaWYgKGhhbmRsZXJzKSB7XG4gICAgICBjb25zdCBpID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGUpO1xuICAgICAgaWYgKGkgPj0gMCkgaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuXG4gIGVtaXQodHlwZSwgZGF0YSkge1xuICAgIHRoaXMuY2hlY2tUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5ldmVudHNbdHlwZV07XG4gICAgaWYgKGhhbmRsZXJzKSB7XG4gICAgICBjb25zdCBldnQgPSB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRlZmF1bHRQcmV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgICAgICBldnQuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgaGFuZGxlcnMuc29tZSgoaGFuZGxlKSA9PiB7XG4gICAgICAgIGhhbmRsZShldnQpO1xuICAgICAgICByZXR1cm4gZXZ0LmRlZmF1bHRQcmV2ZW50ZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB0bGRqcyBmcm9tICd0bGRqcyc7XG4vLyBpbXBvcnQgeyBmcm9tVXNlclNldHRpbmdzIH0gZnJvbSAndGxkanMnO1xuLy8gaW1wb3J0IFRyaWUgZnJvbSAndGxkanMvbGliL3N1ZmZpeC10cmllJztcbi8vIGltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcjL2NvbW1vbic7XG5cbi8vIGxldCB0bGRqcztcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGluaXRUTEQocmVtb3RlKSB7XG4vLyAgIC8vIFRMRCBydWxlcyBhcmUgdG9vIGxhcmdlIHRvIGJlIHBhY2tlZCwgZG93bmxvYWQgdGhlbSBhdCBydW50aW1lLlxuLy8gICBjb25zdCB1cmwgPSAnaHR0cHM6Ly92aW9sZW50bW9ua2V5LnRvcC9zdGF0aWMvdGxkLXJ1bGVzLmpzb24nO1xuLy8gICBjb25zdCBrZXkgPSAnZGF0OnRsZFJ1bGVzJztcbi8vICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChrZXkpXG4vLyAgIC50aGVuKCh7IFtrZXldOiB0bGRSdWxlcyB9KSA9PiB7XG4vLyAgICAgaWYgKHRsZFJ1bGVzKSByZXR1cm4gdGxkUnVsZXM7XG4vLyAgICAgaWYgKCFyZW1vdGUpIHJldHVybiBQcm9taXNlLnJlamVjdCgnaWdub3JlIFRMRCcpO1xuLy8gICAgIHJldHVybiByZXF1ZXN0KHVybCwgeyByZXNwb25zZVR5cGU6ICdqc29uJyB9KVxuLy8gICAgIC50aGVuKCh7IGRhdGE6IHJ1bGVzIH0pID0+IHtcbi8vICAgICAgIGNvbnNvbGUuaW5mbygnRG93bmxvYWRlZCBwdWJsaWMgc3VmZml4IGRhdGEnKTtcbi8vICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgW2tleV06IHJ1bGVzIH0pXG4vLyAgICAgICAudGhlbigoKSA9PiBydWxlcyk7XG4vLyAgICAgfSk7XG4vLyAgIH0pXG4vLyAgIC50aGVuKHRsZFJ1bGVzID0+IHtcbi8vICAgICBjb25zb2xlLmluZm8oJ0luaXRpYWxpemVkIFRMRCcpO1xuLy8gICAgIHRsZGpzID0gZnJvbVVzZXJTZXR0aW5ncyh7IHJ1bGVzOiBUcmllLmZyb21Kc29uKHRsZFJ1bGVzKSB9KTtcbi8vICAgfSlcbi8vICAgLmNhdGNoKGVyciA9PiB7XG4vLyAgICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSBjb25zb2xlLmVycm9yKGVycik7XG4vLyAgICAgY29uc29sZS5pbmZvKCdGYWlsZWQgaW5pdGlhbGl6aW5nIFRMRCcpO1xuLy8gICB9KTtcbi8vIH1cbmV4cG9ydCBmdW5jdGlvbiBpbml0VExEKCkge31cblxuZnVuY3Rpb24gZXhwb3J0TWV0aG9kKGtleSkge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IHRsZGpzICYmIHRsZGpzW2tleV0oLi4uYXJncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWR5KCkge1xuICByZXR1cm4gISF0bGRqcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldERvbWFpbiA9IGV4cG9ydE1ldGhvZCgnZ2V0RG9tYWluJyk7XG5leHBvcnQgY29uc3QgZ2V0U3ViZG9tYWluID0gZXhwb3J0TWV0aG9kKCdnZXRTdWJkb21haW4nKTtcbmV4cG9ydCBjb25zdCBnZXRQdWJsaWNTdWZmaXggPSBleHBvcnRNZXRob2QoJ2dldFB1YmxpY1N1ZmZpeCcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==