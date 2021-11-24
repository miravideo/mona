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
      const newId = "Violentmonkey:nODql6GvvDo=";

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
    value: `"${"Violentmonkey:nODql6GvvDo="}"=${blobUrl.split('/').pop()}; SameSite=Lax`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL25vZGVfbW9kdWxlcy9wdW55Y29kZS9wdW55Y29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cmwvdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cmwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3BsdWdpbi9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvcGx1Z2luL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3N5bmMvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9zeW5jL2Ryb3Bib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvc3luYy9nb29nbGVkcml2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9zeW5jL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3N5bmMvb25lZHJpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvc3luYy93ZWJkYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2RiLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9ob3RrZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL2ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9wYXRjaC1kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9wb3B1cC10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3ByZWluamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3N0b3JhZ2UtZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy90ZW1wbGF0ZS1ob29rLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzL3Rlc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91dGlscy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXRpbHMvdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdGxkLmpzIl0sIm5hbWVzIjpbImhvb2tPcHRpb25zIiwiY2hhbmdlcyIsImF1dG9VcGRhdGUiLCJTQ1JJUFRfVEVNUExBVEUiLCJyZXNldFNjcmlwdFRlbXBsYXRlIiwic2VuZENtZCIsIk9iamVjdCIsImFzc2lnbiIsImNvbW1hbmRzIiwiR2V0RGF0YSIsImlkcyIsImRhdGEiLCJnZXREYXRhIiwic3luYyIsIkdldEluamVjdGVkIiwidXJsIiwiZm9yY2VDb250ZW50Iiwic3JjIiwiZnJhbWVJZCIsInRhYiIsInRhYklkIiwiaWQiLCJyZXNldFZhbHVlT3BlbmVyIiwiY2xlYXJSZXF1ZXN0c0J5VGFiSWQiLCJyZXMiLCJnZXRJbmplY3RlZFNjcmlwdHMiLCJmZWVkYmFjayIsImluamVjdCIsInZhbE9wSWRzIiwiaXNQb3B1cFNob3duIiwicG9wdXBUYWJzIiwibGVuZ3RoIiwic2V0VGltZW91dCIsIkluamVjdGlvbkZlZWRiYWNrIiwiYWRkVmFsdWVPcGVuZXIiLCJHZXRUYWJEb21haW4iLCJnZXRBY3RpdmVUYWIiLCJwZW5kaW5nVXJsIiwiaG9zdCIsIm1hdGNoIiwiZG9tYWluIiwidGxkIiwiU2V0VGltZW91dCIsIm1zIiwibWFrZVBhdXNlIiwiY29tbWFuZHNUb1N5bmMiLCJjb21tYW5kc1RvU3luY0lmVHJ1dGh5IiwiaGFuZGxlQ29tbWFuZE1lc3NhZ2UiLCJyZXEiLCJjbWQiLCJpbmNsdWRlcyIsImludGVydmFsIiwiSVNfREVWIiwiZ2V0T3B0aW9uIiwiVElNRU9VVF8yNEhPVVJTIiwiZWxhcHNlZCIsIkRhdGUiLCJub3ciLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsIk1hdGgiLCJtaW4iLCJUSU1FT1VUX01BWCIsImluaXRCdWlsZGluIiwicmVxdWVzdCIsIkJVSUxEX0lOX1NDUklQVF9TUkMiLCJjYWNoZSIsImhlYWRlcnMiLCJBY2NlcHQiLCJQYXJzZVNjcmlwdCIsImNvZGUiLCJjdXN0b20iLCJidWlsZEluIiwid2hlcmUiLCJpbml0aWFsaXplIiwiZ2xvYmFsIiwiZGVlcENvcHkiLCJicm93c2VyIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwiSVNfRklSRUZPWCIsImFyZ3MiLCJjYXRjaCIsImUiLCJQcm9taXNlIiwicmVqZWN0IiwiRXJyb3IiLCJjb25zb2xlIiwiaW5mbyIsImNoZWNrUmVtb3ZlIiwic2V0SW50ZXJ2YWwiLCJhcGkiLCJjaHJvbWUiLCJkZWNsYXJhdGl2ZUNvbnRlbnQiLCJvblBhZ2VDaGFuZ2VkIiwiZ2V0UnVsZXMiLCJydWxlIiwibmV3SWQiLCJwcm9jZXNzIiwicmVtb3ZlUnVsZXMiLCJhZGRSdWxlcyIsImNvbmRpdGlvbnMiLCJQYWdlU3RhdGVNYXRjaGVyIiwicGFnZVVybCIsInVybENvbnRhaW5zIiwiYWN0aW9ucyIsIlJlcXVlc3RDb250ZW50U2NyaXB0IiwianMiLCJnZXRNYW5pZmVzdCIsImNvbnRlbnRfc2NyaXB0cyIsIkV2ZW50RW1pdHRlciIsInNjcmlwdCIsInVwZGF0ZSIsImxpc3QiLCJnZXRTY3JpcHRzIiwiZ2V0IiwiR2V0U2NyaXB0Q29kZSIsInJlbW92ZSIsIk1hcmtSZW1vdmVkIiwicmVtb3ZlZCIsInNlcnZpY2VOYW1lcyIsInNlcnZpY2VDbGFzc2VzIiwic2VydmljZXMiLCJhdXRvU3luYyIsImRlYm91bmNlIiwiVElNRU9VVF9IT1VSIiwid29ya2luZyIsInJlc29sdmUiLCJzeW5jQ29uZmlnIiwiZ2V0SXRlbUZpbGVuYW1lIiwibmFtZSIsInVyaSIsImlzU2NyaXB0RmlsZSIsInRlc3QiLCJnZXRVUkkiLCJpIiwiaW5kZXhPZiIsInZlcnNpb24iLCJzbGljZSIsInNwbGl0IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXJyIiwiaW5pdENvbmZpZyIsImtleSIsImRlZiIsImtleXMiLCJub3JtYWxpemVLZXlzIiwidW5zaGlmdCIsInNldCIsInZhbHVlIiwic2V0T3B0aW9uIiwiaW5pdCIsImNvbmZpZyIsInNlcnZpY2VDb25maWciLCJnZXRLZXlzIiwidmFsIiwiZm9yRWFjaEVudHJ5IiwiayIsInYiLCJjbGVhciIsInNlcnZpY2VTdGF0ZSIsInZhbGlkU3RhdGVzIiwiaW5pdGlhbFN0YXRlIiwib25DaGFuZ2UiLCJzdGF0ZSIsIm5ld1N0YXRlIiwid2FybiIsImlzIiwic3RhdGVzIiwiZW5zdXJlQXJyYXkiLCJnZXRTdGF0ZXMiLCJtYXAiLCJzZXJ2aWNlIiwiZGlzcGxheU5hbWUiLCJhdXRoU3RhdGUiLCJzeW5jU3RhdGUiLCJsYXN0U3luYyIsInByb2dyZXNzIiwicHJvcGVydGllcyIsInVzZXJDb25maWciLCJnZXRVc2VyQ29uZmlnIiwiZ2V0U2NyaXB0RGF0YSIsInN5bmNWZXJzaW9uIiwiZXh0cmEiLCJwcm9wcyIsIm9iamVjdFBpY2siLCJtb3JlIiwiZW5hYmxlZCIsInNob3VsZFVwZGF0ZSIsImxhc3RVcGRhdGVkIiwicGFyc2VTY3JpcHREYXRhIiwicmF3Iiwib2JqIiwiSlNPTiIsInBhcnNlIiwib2JqZWN0UHVyaWZ5IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInNlcnZpY2VGYWN0b3J5IiwiYmFzZSIsIlNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImV4dGVuZCIsImV4dGVuZFNlcnZpY2UiLCJvcHRpb25zIiwiY3JlYXRlIiwib25TdGF0ZUNoYW5nZSIsIkJhc2VTZXJ2aWNlIiwiZGVsYXlUaW1lIiwidXJsUHJlZml4IiwibWV0YUZpbGUiLCJhdXRoVHlwZSIsIm5vb3AiLCJzZXRVc2VyQ29uZmlnIiwiZmluaXNoZWQiLCJ0b3RhbCIsImxhc3RGZXRjaCIsInN0YXJ0U3luYyIsInN5bmNGYWN0b3J5IiwiZXZlbnRzIiwiZ2V0RXZlbnRFbWl0dGVyIiwibG9nIiwicHJvbWlzZSIsImRlYm91bmNlZFJlc29sdmUiLCJzaG91bGRTeW5jIiwiZ2V0Q3VycmVudCIsImdldFJlYWR5IiwidGhlbiIsImVycm9yIiwicHJlcGFyZUhlYWRlcnMiLCJwcmVwYXJlIiwiaW5pdFRva2VuIiwidXNlciIsInR5cGUiLCJjaGVja1N5bmMiLCJhY3F1aXJlTG9jayIsInJlbGVhc2VMb2NrIiwiaGFuZGxlTWV0YUVycm9yIiwiZ2V0TWV0YSIsInRva2VuIiwiQXV0aG9yaXphdGlvbiIsImxvYWREYXRhIiwiZGVsYXkiLCJ0cyIsInN0YXJ0c1dpdGgiLCJwcmVmaXgiLCJnZXRMb2NhbERhdGEiLCJwbHVnaW5TY3JpcHQiLCJnZXRTeW5jRGF0YSIsInJlbW90ZU1ldGEiLCJhbGwiLCJyZW1vdGVEYXRhIiwibG9jYWxEYXRhIiwicmVtb3RlTWV0YURhdGEiLCJyZW1vdGVNZXRhSW5mbyIsInJlbW90ZVRpbWVzdGFtcCIsInRpbWVzdGFtcCIsInJlbW90ZUNoYW5nZWQiLCJnbG9iYWxMYXN0TW9kaWZpZWQiLCJyZW1vdGVJdGVtTWFwIiwibG9jYWxNZXRhIiwiZmlyc3RTeW5jIiwib3V0ZGF0ZWQiLCJwdXRMb2NhbCIsInB1dFJlbW90ZSIsImRlbFJlbW90ZSIsImRlbExvY2FsIiwidXBkYXRlTG9jYWwiLCJyZWR1Y2UiLCJpdGVtIiwiaXRlbUluZm8iLCJtb2RpZmllZCIsInBvc2l0aW9uIiwibGFzdE1vZGlmaWVkIiwicmVtb3RlSW5mbyIsInJlbW90ZUl0ZW0iLCJwdXNoIiwibG9jYWwiLCJyZW1vdGUiLCJwcm9taXNlUXVldWUiLCJvYmplY3RTZXQiLCJwdXQiLCJzdHJpbmdpZnkiLCJ1cGRhdGVzIiwidXBkYXRlU2NyaXB0SW5mbyIsInNvcnRTY3JpcHRzIiwiY2hhbmdlZCIsInNjcmlwdHMiLCJwcm9taXNlcyIsImVycm9ycyIsImZpbHRlciIsIkJvb2xlYW4iLCJyZWdpc3RlciIsIkZhY3RvcnkiLCJnZXRTZXJ2aWNlIiwic3luY09uZSIsImF1dGhvcml6ZSIsInJldm9rZSIsInNldENvbmZpZyIsIm9wZW5BdXRoUGFnZSIsInJlZGlyZWN0VXJpIiwidW5yZWdpc3RlcldlYlJlcXVlc3QiLCJ3ZWJSZXF1ZXN0Iiwib25CZWZvcmVSZXF1ZXN0IiwidXJscyIsInR5cGVzIiwidGFicyIsImNoZWNrQXV0aCIsImNhbmNlbCIsInJlbW92ZUxpc3RlbmVyIiwiY2xpZW50X2lkIiwicmVkaXJlY3RfdXJpIiwiZXNjUkUiLCJlc2NGdW5jIiwibSIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsImpzb25TdHJpbmdpZnlTYWZlIiwic3RyaW5nIiwicmVwbGFjZSIsIkRyb3Bib3giLCJtZXRob2QiLCJzdGF0dXMiLCJib2R5IiwicGF0aCIsInJlc3BvbnNlVHlwZSIsImVudHJpZXMiLCJub3JtYWxpemUiLCJtb2RlIiwicGFyYW1zIiwicmVzcG9uc2VfdHlwZSIsImR1bXBRdWVyeSIsImF1dGhvcml6ZWQiLCJsb2FkUXVlcnkiLCJhY2Nlc3NfdG9rZW4iLCJ1aWQiLCJzaXplIiwiY2xpZW50X3NlY3JldCIsInNjb3BlIiwiVU5BVVRIT1JJWkVEIiwiR29vZ2xlRHJpdmUiLCJyZWZyZXNoVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwiZ3JhbnRfdHlwZSIsInJlcXVlc3RVc2VyIiwiYWNjZXNzX3R5cGUiLCJub3RpZnkiLCJ0aXRsZSIsIm9iamVjdEdldCIsInNwYWNlcyIsImZpZWxkcyIsImZpbGVzIiwibWV0YUl0ZW0iLCJnb3RNZXRhIiwicHJvbXB0IiwiYm91bmRhcnkiLCJnZXRVbmlxSWQiLCJtZXRhZGF0YSIsInBhcmVudHMiLCJqb2luIiwiU3luY0F1dGhvcml6ZSIsIlN5bmNSZXZva2UiLCJTeW5jU3RhcnQiLCJTeW5jU2V0Q29uZmlnIiwiT25lRHJpdmUiLCJoZWFkZXIiLCJmaWxlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidXNlcl9pZCIsIktFWV9DSElMRFJFTiIsIlN5bWJvbCIsIlhOb2RlIiwibm9kZSIsIm5zTWFwIiwicGFyc2VBdHRycyIsInBhcnNlTmFtZSIsImZyb21YTUwiLCJ4bWwiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJhdHRyIiwiJCIsIm5vZGVUeXBlIiwidGFnTmFtZSIsIm5zIiwidGV4dCIsInRleHRDb250ZW50IiwidHJpbSIsImNoaWxkcmVuIiwiY2hpbGQiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiZmluZCIsIkRFRkFVTFRfQ09ORklHIiwic2VydmVyVXJsIiwiYW5vbnltb3VzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIldlYkRBViIsImVuZHNXaXRoIiwiVVJMIiwiYXV0aCIsIndpbmRvdyIsImJ0b2EiLCJjYWxsIiwiY3JlZGVudGlhbHMiLCJta2RpciIsInJlYWRkaXIiLCJkZXB0aCIsIml0ZW1zIiwicHJvcCIsImRpc3BsYXlOYW1lTm9kZSIsInVuZGVmaW5lZCIsImhyZWYiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImxvY2siLCJJZiIsImluaXRDYWNoZSIsImxpZmV0aW1lIiwiQ2FjaGVMb2FkIiwiQ2FjaGVIaXQiLCJoaXQiLCJDYWNoZVBvcCIsInBvcCIsInRleHRhcmVhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xpcGJvYXJkRGF0YSIsIlNldENsaXBib2FyZCIsImZvY3VzIiwicmV0IiwiZXhlY0NvbW1hbmQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInNldERhdGEiLCJzdG9yZSIsInN0b3JhZ2UiLCJzZXREYXRhQ2FjaGUiLCJkYXRhQ2FjaGUiLCJvbkR1bXAiLCJzY3JpcHRNYXAiLCJDaGVja1Bvc2l0aW9uIiwiQ2hlY2tSZW1vdmUiLCJHZXRTY3JpcHQiLCJnZXRTY3JpcHQiLCJFeHBvcnRaaXAiLCJ2YWx1ZXMiLCJnZXRQcm9wc0lkIiwiY29kZU1hcCIsImdldE11bHRpIiwiZ2V0T25lIiwiR2V0U2NyaXB0VmVyIiwib3B0cyIsIm1ldGEiLCJNb3ZlIiwib2Zmc2V0IiwiZ2V0U2NyaXB0QnlJZCIsImluZGV4Iiwic3BsaWNlIiwibm9ybWFsaXplUG9zaXRpb24iLCJSZW1vdmVTY3JpcHQiLCJQYXJzZU1ldGEiLCJwYXJzZU1ldGEiLCJwYXJzZVNjcmlwdCIsIlVwZGF0ZVNjcmlwdEluZm8iLCJWYWN1dW0iLCJ2YWN1dW0iLCJwcmVJbml0aWFsaXplIiwibGFzdFZlcnNpb24iLCJwYXRjaERCIiwic3RvcmVJbmZvIiwiaWRNYXAiLCJ1cmlNYXAiLCJtb2RzIiwicmVzVXJscyIsInJlbWVtYmVyVXJsIiwiXyIsImdldEludCIsImdldE5hbWVVUkkiLCJnZXREZWZhdWx0Q3VzdG9tIiwibWF4IiwicGF0aE1hcCIsImdyYW50IiwiU2V0IiwicmVxdWlyZSIsInJlc291cmNlcyIsImljb24iLCJtb2QiLCJyZW1vdmVNdWx0aSIsImRlZmF1bHRJbmplY3RJbnRvIiwiSU5KRUNUX1BBR0UiLCJjb21wYXJlVmVyc2lvbiIsIklOSkVDVF9BVVRPIiwidXBkYXRlTGFzdE1vZGlmaWVkIiwiZHVtcCIsInNvcnQiLCJhIiwiYiIsImdldFZhbHVlU3RvcmVzQnlJZHMiLCJkdW1wVmFsdWVTdG9yZXMiLCJ2YWx1ZURpY3QiLCJFTlZfQ0FDSEVfS0VZUyIsIkVOVl9SRVFfS0VZUyIsIkVOVl9WQUxVRV9JRFMiLCJHTVZBTFVFU19SRSIsIlJVTl9BVF9SRSIsImdldFNjcmlwdHNCeVVSTCIsImlzVG9wIiwiYWxsU2NyaXB0cyIsInRlc3RCbGFja2xpc3QiLCJub2ZyYW1lcyIsInRlc3RTY3JpcHQiLCJkaXNhYmxlZElkcyIsImVudlN0YXJ0IiwiZW52RGVsYXllZCIsImJ1aWxkUGF0aE1hcCIsInJ1bkF0IiwiZW52Iiwic29tZSIsInJlYWRFbnZpcm9ubWVudERhdGEiLCJTVE9SQUdFX1JPVVRFUyIsInJldHJpZWRTdG9yYWdlS2V5cyIsImlzUmV0cnkiLCJhcmVhIiwic3JjSWRzIiwiZ2V0S2V5IiwiZXJyMiIsImdldEljb25DYWNoZSIsImljb25VcmxzIiwiaXNSZW1vdGUiLCJtYWtlRGF0YVVyaSIsImZvcmNlIiwidG9SZW1vdmUiLCJUSU1FT1VUX1dFRUsiLCJnZXRVVUlEIiwicm5kIiwiVWludDE2QXJyYXkiLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJzYXZlU2NyaXB0Iiwib2xkU2NyaXB0IiwidXVpZCIsInJhbmRvbVVVSUQiLCJpMThuIiwiQ01EX1NDUklQVF9VUERBVEUiLCJyZXN1bHQiLCJtZXNzYWdlIiwiaXNOZXciLCJuZXdTY3JpcHQiLCJDTURfU0NSSVBUX0FERCIsImhvbWVwYWdlVVJMIiwiZnJvbSIsImxhc3RJbnN0YWxsVVJMIiwiZmV0Y2hSZXNvdXJjZXMiLCJwbHVnaW5FdmVudHMiLCJlbWl0IiwiYmFzZVVybCIsImZ1bGxVcmwiLCJnZXRGdWxsVXJsIiwicmVzb3VyY2VDYWNoZSIsInJlcU9wdGlvbnMiLCJzbmF0Y2giLCJ2YWxpZGF0b3IiLCJjb250ZW50cyIsImZldGNoIiwidmFsaWRhdGVJbWFnZSIsImlnbm9yZURlcHNFcnJvcnMiLCJ0cnVlSm9pbiIsImZvcm1hdEh0dHBFcnJvciIsImJ1ZiIsImJsb2JVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwib25Eb25lIiwicmV2b2tlT2JqZWN0VVJMIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJfdmFjdXVtaW5nIiwibnVtRml4ZXMiLCJyZXNvbHZlU2VsZiIsInIiLCJ0b0ZldGNoIiwia2V5c1RvUmVtb3ZlIiwidmFsdWVLZXlzIiwiY2FjaGVLZXlzIiwicmVxdWlyZUtleXMiLCJjb2RlS2V5cyIsIm1hcHBpbmdzIiwiZm9yRWFjaEtleSIsInN1YnN0b3JlIiwidG91Y2giLCJzY3JpcHRJZCIsImZvckVhY2hWYWx1ZSIsImdldFNjcmlwdE5hbWUiLCJmaXhlcyIsIm9uIiwib2ZmIiwiZmlyZSIsImZ1bmMiLCJwb3N0SW5pdGlhbGl6ZSIsIm9uQ29tbWFuZCIsIk9wZW5FZGl0b3IiLCJyb3V0ZSIsIlRhYk9wZW4iLCJDQUNIRV9EVVJBVElPTiIsIkdldEltYWdlRGF0YSIsImxvYWRJbWFnZURhdGEiLCJiYXNlNjQiLCJTZXRCYWRnZSIsInNldEJhZGdlIiwiYnJvd3NlckFjdGlvbiIsImlnbm9yZUVycm9ycyIsImxhc3RFcnJvciIsIm1ha2VNZXRob2QiLCJmbiIsImJhZGdlcyIsIktFWV9JU19BUFBMSUVEIiwiS0VZX1NIT1dfQkFER0UiLCJLRVlfQkFER0VfQ09MT1IiLCJLRVlfQkFER0VfQ09MT1JfQkxPQ0tFRCIsImlzQXBwbGllZCIsInNob3dCYWRnZSIsImJhZGdlQ29sb3IiLCJiYWRnZUNvbG9yQmxvY2tlZCIsInRpdGxlQmxhY2tsaXN0ZWQiLCJ0aXRsZU5vbmluamVjdGFibGUiLCJpY29uQ2FjaGUiLCJqb2JzIiwic2V0SWNvbiIsInVwZGF0ZUJhZGdlIiwidXBkYXRlQmFkZ2VDb2xvciIsInVwZGF0ZVN0YXRlIiwiZm9yRWFjaFRhYiIsIm9uUmVtb3ZlZCIsIm9uVXBkYXRlZCIsImZhdkljb25VcmwiLCJ1bmlxdWUiLCJzZXRCYWRnZVRleHQiLCJzZXRCYWRnZUJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYmxvY2tlZCIsImluamVjdGFibGUiLCJJTkpFQ1RBQkxFX1RBQl9VUkxfUkUiLCJibGFja2xpc3RlZCIsInNldFRpdGxlIiwiaWNvbkRhdGEiLCJuIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwidG9EYXRhVVJMIiwiZ2V0SW1hZ2VEYXRhIiwiZXh0ZW5zaW9uUm9vdCIsImdldFVSTCIsIm1haW4iLCJydW4iLCJub3RpZmljYXRpb25zIiwiaWNvblVybCIsImRlZmF1bHRJbWFnZSIsImlzQ2xpY2thYmxlIiwiYnJvYWRjYXN0Iiwic2VuZE1lc3NhZ2UiLCJzZW5kTWVzc2FnZU9ySWdub3JlIiwicXVlcnkiLCJvcGVuZXJzIiwiTm90aWZpY2F0aW9uIiwiYmdFeHRyYXMiLCJub3RpZmljYXRpb25JZCIsIm9uQ2xpY2siLCJSZW1vdmVOb3RpZmljYXRpb24iLCJvbkNsaWNrZWQiLCJvcGVuZXJJZCIsInNlbmRUYWJDbWQiLCJvbkNsb3NlZCIsIkdldEFsbE9wdGlvbnMiLCJHZXRPcHRpb25zIiwiZGVmYXVsdHMiLCJtYXBFbnRyeSIsIlNldE9wdGlvbnMiLCJob29rcyIsImluaXRIb29rcyIsImNhbGxIb29rc0xhdGVyIiwiY2FsbEhvb2tzIiwiaW5pdFBlbmRpbmciLCJmaXJlQ2hhbmdlIiwibWFpbktleSIsImdldERlZmF1bHRPcHRpb24iLCJvcHRpb25LZXkiLCJvcHRpb25WYWx1ZSIsImhvb2siLCJpbmRleGVkREIiLCJvcGVuIiwib25zdWNjZXNzIiwidHJhbnNmb3JtIiwib251cGdyYWRlbmVlZGVkIiwiZGIiLCJ0eCIsInRyYW5zYWN0aW9uIiwicHJvY2Vzc2luZyIsImRvbmUiLCJnZXRBbGwiLCJzdG9yZU5hbWUiLCJvYmplY3RTdG9yZSIsInRyYW5zZm9ybVNjcmlwdCIsImFsbFZhbHVlcyIsImFsbENhY2hlIiwiYWxsUmVxdWlyZSIsIm9yaWdJbmNsdWRlIiwib3JpZ0V4Y2x1ZGUiLCJvcmlnTWF0Y2giLCJvcmlnRXhjbHVkZU1hdGNoIiwib25Db25uZWN0Iiwib25Qb3B1cE9wZW5lZCIsInByZWZldGNoU2V0UG9wdXAiLCJicm93c2VyX2FjdGlvbiIsImRlZmF1bHRfcG9wdXAiLCJwb3J0Iiwib25EaXNjb25uZWN0Iiwib25Qb3B1cENsb3NlZCIsIlNldFBvcHVwIiwiQVBJX0NPTkZJRyIsIlRJTUVfQUZURVJfU0VORCIsIlRJTUVfQUZURVJfUkVDRUlWRSIsIlRJTUVfS0VFUF9EQVRBIiwiY2FjaGVDb2RlIiwib25EaXNwb3NlIiwicmNzIiwicmNzUHJvbWlzZSIsInVucmVnaXN0ZXIiLCJJTkpFQ1RfSU5UTyIsIktFWV9FWFBPU0UiLCJLRVlfREVGX0lOSkVDVF9JTlRPIiwiS0VZX1hIUl9JTkpFQ1QiLCJleHBvc2UiLCJpbmplY3RJbnRvIiwieGhySW5qZWN0Iiwib25PcHRpb25DaGFuZ2VkIiwiZmVlZElkIiwicHJvY2Vzc0ZlZWRiYWNrIiwiZGVsIiwiY2FjaGVLZXkiLCJlbnZLZXkiLCJwcmVwYXJlU2NyaXB0IiwibmVlZHNJbmplY3Rpb24iLCJleGVjdXRlU2NyaXB0IiwicHJvcHNUb0NsZWFyIiwib25DaGFuZ2VkIiwiZGJLZXlzIiwiY2FjaGVWYWx1ZXMiLCJnZXRWYWx1ZXMiLCJkaXJ0eSIsImRlc3Ryb3kiLCJub3JtYWxpemVSZWFsbSIsImhhc093blByb3BlcnR5IiwiSU5KRUNUX01BUFBJTkciLCJ0b2dnbGVYaHJJbmplY3QiLCJ0b2dnbGVQcmVpbmplY3QiLCJzaXRlIiwiaXNFeHBvc2VkIiwiZW5hYmxlIiwib25PZmYiLCJvblNlbmRIZWFkZXJzIiwib25IZWFkZXJzUmVjZWl2ZWQiLCJPbkhlYWRlcnNSZWNlaXZlZE9wdGlvbnMiLCJFWFRSQV9IRUFERVJTIiwiaGFzIiwicHJlcGFyZVhockJsb2IiLCJyZXNwb25zZUhlYWRlcnMiLCJkZXRlY3RTdHJpY3RDc3AiLCJmb3JjZUNvbnRlbnRJbmplY3Rpb24iLCJwcmVwYXJlU2NyaXB0cyIsImlzTGF0ZSIsImhhc01vcmUiLCJldmVyeSIsInNjciIsImlzQ29udGVudFJlYWxtIiwidWEiLCJyZWdpc3RlclNjcmlwdERhdGFGRiIsImRhdGFLZXkiLCJyZXBsYWNlV2l0aEZ1bGxXaWR0aEZvcm0iLCJpc0NvbnRlbnQiLCJyZXFzIiwicmVxc1NsaWNlcyIsImNvbmNhdCIsImhhc1JlcXMiLCJpbmplY3RlZENvZGUiLCJtZXRhU3RyIiwiTUVUQUJMT0NLX1JFIiwicyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInJlc29sdmVEYXRhQ29kZVN0ciIsInZtUmVzb2x2ZSIsInZtRGF0YSIsImFsbEZyYW1lcyIsImNvbnRlbnRTY3JpcHRzIiwibWF0Y2hlcyIsInJlYWxtIiwiSU5KRUNUX0NPTlRFTlQiLCJWTV9WRVJJRlkiLCJDT05GSVJNX1VSTF9CQVNFIiwicmVxdWVzdHMiLCJkb3dubG9hZHMiLCJ2ZXJpZnkiLCJ0YWJSZXF1ZXN0cyIsImVuY29kZXIiLCJldnQiLCJjdXJyZW50IiwiZG93bmxvYWRJZCIsIkNvbmZpcm1JbnN0YWxsIiwiY29uZmlybUluc3RhbGwiLCJDaGVja0luc3RhbGxlclRhYiIsIkh0dHBSZXF1ZXN0IiwiZXZlbnRzVG9Ob3RpZnkiLCJuYXRpdmUiLCJkb3dubG9hZCIsImZpbGVuYW1lIiwiZmlsZU5hbWUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImh0dHBSZXF1ZXN0IiwiQWJvcnRSZXF1ZXN0IiwiYWJvcnQiLCJjbGVhclJlcXVlc3QiLCJSZXZva2VCbG9iIiwic3BlY2lhbEhlYWRlcnMiLCJIZWFkZXJJbmplY3RvciIsImFwaUZpbHRlciIsIk9uQmVmb3JlU2VuZEhlYWRlcnNPcHRpb25zIiwiaGVhZGVyc1RvSW5qZWN0IiwiaXNWbVZlcmlmeSIsImlzTm90Q29va2llIiwiaXNTZW5kYWJsZSIsImlzU2VuZGFibGVBbm9uIiwiUkVfU0VUX0NPT0tJRSIsIlJFX1NFVF9DT09LSUVfVkFMVUUiLCJSRV9TRVRfQ09PS0lFX0FUVFIiLCJTQU1FX1NJVEVfTUFQIiwic3RyaWN0IiwibGF4Iiwibm9uZSIsInNldENvb2tpZUluU3RvcmUiLCJoZWFkZXJWYWx1ZSIsImV4ZWMiLCJvcHRTdHIiLCJvcHQiLCJpc0hvc3QiLCJsYXN0SW5kZXgiLCJ0b0xvd2VyQ2FzZSIsInNhbWVTaXRlIiwiY29va2llcyIsImV4cGlyYXRpb25EYXRlIiwiZXhwaXJlcyIsImh0dHBPbmx5Iiwic2VjdXJlIiwic3RvcmVJZCIsImFwaUV2ZW50cyIsIm9uQmVmb3JlU2VuZEhlYWRlcnMiLCJsaXN0ZW5lciIsInJlcXVlc3RIZWFkZXJzIiwicmVxdWVzdElkIiwicmVxSWQiLCJjb3JlSWQiLCJub05hdGl2ZUNvb2tpZSIsImgiLCJlbmNvZGVXZWJSZXF1ZXN0SGVhZGVyIiwiYWRkIiwiaXNFbXB0eSIsIkNIVU5LX1NJWkUiLCJibG9iMmNodW5rIiwicmVzcG9uc2UiLCJibG9iMmJhc2U2NCIsImJsb2Iyb2JqZWN0VXJsIiwieGhyQ2FsbGJhY2tXcmFwcGVyIiwibGFzdFByb21pc2UiLCJjb250ZW50VHlwZSIsImRhdGFTaXplIiwibnVtQ2h1bmtzIiwicmVzcG9uc2VUZXh0Iiwic2VudCIsImJsb2JiZWQiLCJjaHVua2VkIiwiZ2V0Q2h1bmsiLCJnZXRSZXNwb25zZUhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJnZXRSZXNwb25zZUhlYWRlciIsImNlaWwiLCJzaG91bGROb3RpZnkiLCJzaG91bGRTZW5kUmVzcG9uc2UiLCJyZWFkeVN0YXRlIiwiY2IiLCJmaW5hbFVybCIsInJlc3BvbnNlVVJMIiwiY2h1bmsiLCJwb3MiLCJsYXN0IiwiaXNTcGVjaWFsSGVhZGVyIiwibG93ZXJIZWFkZXIiLCJpbmNvZ25pdG8iLCJvdmVycmlkZU1pbWVUeXBlIiwieGhyVHlwZSIsInZtSGVhZGVycyIsImRlY29kZUJvZHkiLCJzaG91bGRTZW5kQ29va2llcyIsInNldFJlcXVlc3RIZWFkZXIiLCJsb3dlck5hbWUiLCJ0aW1lb3V0IiwiZ2V0QWxsQ29va2llU3RvcmVzIiwidGFiSWRzIiwiZmlyZWZveCIsImZpcnN0UGFydHlEb21haW4iLCJjIiwic2Vzc2lvbiIsIm9ubG9hZGVuZCIsInNlbmQiLCJ3YXNCbG9iIiwic3RyaW5nMnVpbnQ4YXJyYXkiLCJhdG9iIiwicDEiLCJpc1VzZXJTY3JpcHQiLCJjb25maXJtS2V5IiwiYWN0aXZlIiwiY2FuUmVwbGFjZUN1clRhYiIsImZmIiwiY29uZmlybVVybCIsIndpbmRvd0lkIiwid2luZG93cyIsImZvY3VzZWQiLCJ3aGl0ZWxpc3RSZSIsIlJlZ0V4cCIsImJsYWNrbGlzdFJlIiwicmVzb2x2ZVZpcnR1YWxVcmwiLCJ2aXJ0dWFsVXJsUmUiLCJtYXliZVJlZGlyZWN0VmlydHVhbFVybEZGIiwiYXBpRXZlbnQiLCJiaW5kIiwib25DcmVhdGVkIiwicmVkaXJlY3RVcmwiLCJtYXliZUluc3RhbGxVc2VySnMiLCJiaW5hcnlWYWx1ZSIsInN0cmluZzJieXRlU3RyaW5nIiwiYnVmZmVyMnN0cmluZyIsInN0ciIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiQ2FjaGVOZXdTY3JpcHQiLCJOZXdTY3JpcHQiLCJhcnJheVR5cGUiLCJkZWZhdWx0IiwiZGVmYXVsdFR5cGUiLCJtZXRhVHlwZXMiLCJpbmNsdWRlIiwiZXhjbHVkZSIsImV4Y2x1ZGVNYXRjaCIsInJlc291cmNlIiwicGFpciIsIm1ldGFPcHRpb25hbFR5cGVzIiwiYW50aWZlYXR1cmUiLCJjb21wYXRpYmxlIiwiY29ubmVjdCIsIm1ldGFCb2R5IiwiX21hdGNoIiwicmF3S2V5IiwicmF3VmFsdWUiLCJrZXlOYW1lIiwibG9jYWxlIiwiY2FtZWxLZXkiLCJnIiwidG9VcHBlckNhc2UiLCJtZXRhVHlwZSIsIm9sZFZhbHVlIiwiaG9tZXBhZ2UiLCJkYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJuYW1lc3BhY2UiLCJuYW1lVVJJIiwiZW5jb2RlRmlsZW5hbWUiLCJwaWVjZSIsImRpY3QiLCJrZXlWYWwiLCJjYWNoZU9yRmV0Y2giLCJjaGVjayIsIm1ha2VSYXciLCJoYW5kbGVycyIsImNhY2hlT3JGZXRjaEhhbmRsZXIiLCJkb0ZldGNoIiwiaXNNb2RpZmllZCIsInBhdGhJZCIsInZpZXciLCJleHRlbnNpb24iLCJnZXRWaWV3cyIsImxvY2F0aW9uIiwibWF5YmVJbldpbmRvdyIsImNvbnRhaW5lciIsImluc2VydCIsInBpbm5lZCIsInNyY1RhYiIsInNyY1VybCIsImlzSW50ZXJuYWwiLCJjb29raWVTdG9yZUlkIiwiZ2V0Q29udGFpbmVySWQiLCJjYW5PcGVuSW5jb2duaXRvIiwibmV3VGFiIiwid25kT3B0cyIsImhhc1BvcyIsInduZCIsIm9wZW5lclRhYklkU3VwcG9ydGVkIiwib3BlbmVyVGFiSWQiLCJUYWJDbG9zZSIsIlRhYkZvY3VzIiwicmVhZHkiLCJkZWZpbmVQcm9wZXJ0aWVzIiwib3MiLCJTQ1JJUFRfVEVNUExBVEVfRURJVEVEIiwiSU5JVElBTF9URU1QTEFURSIsImVkaXRlZCIsInRlbXBsYXRlIiwiZGVmYXVsdFRlbXBsYXRlIiwiVGVzdEJsYWNrbGlzdCIsInJlc2V0QmxhY2tsaXN0IiwiUkVfTUFUQ0hfUEFSVFMiLCJibGFja2xpc3RSdWxlcyIsImJsYWNrbGlzdCIsIlJFX0hUVFBfT1JfSFRUUFMiLCJNQVhfQkxfQ0FDSEVfTEVOR1RIIiwiYmxDYWNoZSIsImJsQ2FjaGVTaXplIiwidGVzdFJ1bGVzIiwicnVsZXMiLCJydWxlQnVpbGRlciIsIm1hdGNoZXIiLCJ0ZXN0R2xvYiIsImF1dG9SZWciLCJ0ZXN0TWF0Y2giLCJtYXRjaFRlc3RlciIsImJhdGNoIiwibWF0IiwibWVyZ2VMaXN0cyIsImluYyIsImV4YyIsImV4Y01hdCIsIm9rIiwic3RyMlJFIiwicmUiLCJiaW5kUkUiLCJyZVN0ciIsInJlVGxkU3RyIiwidHN0ciIsInN1ZmZpeCIsIm1hdGNoU2NoZW1lIiwiUkVfU1RSX0FOWSIsIlJFX1NUUl9UTEQiLCJob3N0TWF0Y2hlciIsInJ1bGVMQyIsInRsZFN0ciIsInRsZFN1ZmZpeCIsInBhdGhNYXRjaGVyIiwiaUhhc2giLCJpUXVlcnkiLCJzdHJSZSIsInJ1bGVQYXJ0cyIsIm1hdGNoSG9zdCIsIm1hdGNoUGF0aCIsInBhcnRzIiwidXBkYXRlQmxhY2tsaXN0Q2FjaGUiLCJDaGVja1VwZGF0ZSIsInJlc3VsdHMiLCJjaGVja0FsbEFuZE5vdGlmeSIsIkNoZWNrVXBkYXRlQWxsIiwidG9VcGRhdGUiLCJub3RlcyIsImNoZWNrVXBkYXRlIiwib3Blbk9wdGlvbnNQYWdlIiwicHJvY2Vzc2VzIiwiZG9DaGVja1VwZGF0ZSIsIm1zZ09rIiwibXNnRXJyIiwicmVzb3VyY2VPcHRzIiwiZG93bmxvYWRVcGRhdGUiLCJjaGVja2luZyIsImNhbk5vdGlmeSIsImRvd25sb2FkVVJMIiwidXBkYXRlVVJMIiwiZGV2IiwiZXJyb3JNZXNzYWdlIiwiYW5ub3VuY2UiLCJhbGxvd2VkIiwibm90aWZ5VXBkYXRlcyIsInVwZGF0ZVNjaGVkdWxlZCIsIkdldFZhbHVlU3RvcmUiLCJzdG9yZXMiLCJTZXRWYWx1ZVN0b3JlcyIsImJyb2FkY2FzdFZhbHVlU3RvcmVzIiwiZ3JvdXBTdG9yZXNCeUZyYW1lIiwiVXBkYXRlVmFsdWUiLCJ1cGRhdGVMYXRlciIsIm9uUmVwbGFjZWQiLCJhZGRlZElkIiwicmVtb3ZlZElkIiwib3BlbmVyVGFicyIsInNjcmlwdElkcyIsImN1cnJlbnRDYWNoZSIsImRvVXBkYXRlIiwidmFsdWVTdG9yZXMiLCJncm91cENhY2hlQnlGcmFtZSIsInBhcnRpYWwiLCJ0YWJGcmFtZURhdGEiLCJ0YXNrcyIsImZyYW1lcyIsImZyYW1lRGF0YSIsImNhY2hlRGF0YSIsInRvU2VuZCIsInNjcmlwdERhdGEiLCJkYXRhRW50cmllcyIsImhpc3RvcnkiLCJjaGVja1R5cGUiLCJoYW5kbGUiLCJkZWZhdWx0UHJldmVudGVkIiwiaW5pdFRMRCIsImV4cG9ydE1ldGhvZCIsInRsZGpzIiwiaXNSZWFkeSIsImdldERvbWFpbiIsImdldFN1YmRvbWFpbiIsImdldFB1YmxpY1N1ZmZpeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FB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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsTUFBTTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM3RCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7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YTZoQyw0Q0FBSyxJQUFJQSw0Q0FBSyxDQUFDLzlCLEdBQUQsQ0FBTCxDQUFXLEdBQUc5RCxJQUFkLENBQTdCO0FBQ0Q7O0FBRU0sU0FBUzhoQyxPQUFULEdBQW1CO0FBQ3hCLFNBQU8sQ0FBQyxDQUFDRCw0Q0FBVDtBQUNEO0FBRU0sTUFBTUUsU0FBUyxHQUFHSCxZQUFZLENBQUMsV0FBRCxDQUE5QjtBQUNBLE1BQU1JLFlBQVksR0FBR0osWUFBWSxDQUFDLGNBQUQsQ0FBakM7QUFDQSxNQUFNSyxlQUFlLEdBQUdMLFlBQVksQ0FBQyxpQkFBRCxDQUFwQyxDIiwiZmlsZSI6ImJhY2tncm91bmQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYmFja2dyb3VuZC9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2JhY2tncm91bmQvaW5kZXguanNcIixcInB1YmxpYy9saWIvdGxkanNcIixcImNvbW1vblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qISBodHRwczovL210aHMuYmUvcHVueWNvZGUgdjEuNC4xIGJ5IEBtYXRoaWFzICovXG47KGZ1bmN0aW9uKHJvb3QpIHtcblxuXHQvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGVzICovXG5cdHZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiZcblx0XHQhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXHR2YXIgZnJlZU1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmXG5cdFx0IW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cdHZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWw7XG5cdGlmIChcblx0XHRmcmVlR2xvYmFsLmdsb2JhbCA9PT0gZnJlZUdsb2JhbCB8fFxuXHRcdGZyZWVHbG9iYWwud2luZG93ID09PSBmcmVlR2xvYmFsIHx8XG5cdFx0ZnJlZUdsb2JhbC5zZWxmID09PSBmcmVlR2xvYmFsXG5cdCkge1xuXHRcdHJvb3QgPSBmcmVlR2xvYmFsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBgcHVueWNvZGVgIG9iamVjdC5cblx0ICogQG5hbWUgcHVueWNvZGVcblx0ICogQHR5cGUgT2JqZWN0XG5cdCAqL1xuXHR2YXIgcHVueWNvZGUsXG5cblx0LyoqIEhpZ2hlc3QgcG9zaXRpdmUgc2lnbmVkIDMyLWJpdCBmbG9hdCB2YWx1ZSAqL1xuXHRtYXhJbnQgPSAyMTQ3NDgzNjQ3LCAvLyBha2EuIDB4N0ZGRkZGRkYgb3IgMl4zMS0xXG5cblx0LyoqIEJvb3RzdHJpbmcgcGFyYW1ldGVycyAqL1xuXHRiYXNlID0gMzYsXG5cdHRNaW4gPSAxLFxuXHR0TWF4ID0gMjYsXG5cdHNrZXcgPSAzOCxcblx0ZGFtcCA9IDcwMCxcblx0aW5pdGlhbEJpYXMgPSA3Mixcblx0aW5pdGlhbE4gPSAxMjgsIC8vIDB4ODBcblx0ZGVsaW1pdGVyID0gJy0nLCAvLyAnXFx4MkQnXG5cblx0LyoqIFJlZ3VsYXIgZXhwcmVzc2lvbnMgKi9cblx0cmVnZXhQdW55Y29kZSA9IC9eeG4tLS8sXG5cdHJlZ2V4Tm9uQVNDSUkgPSAvW15cXHgyMC1cXHg3RV0vLCAvLyB1bnByaW50YWJsZSBBU0NJSSBjaGFycyArIG5vbi1BU0NJSSBjaGFyc1xuXHRyZWdleFNlcGFyYXRvcnMgPSAvW1xceDJFXFx1MzAwMlxcdUZGMEVcXHVGRjYxXS9nLCAvLyBSRkMgMzQ5MCBzZXBhcmF0b3JzXG5cblx0LyoqIEVycm9yIG1lc3NhZ2VzICovXG5cdGVycm9ycyA9IHtcblx0XHQnb3ZlcmZsb3cnOiAnT3ZlcmZsb3c6IGlucHV0IG5lZWRzIHdpZGVyIGludGVnZXJzIHRvIHByb2Nlc3MnLFxuXHRcdCdub3QtYmFzaWMnOiAnSWxsZWdhbCBpbnB1dCA+PSAweDgwIChub3QgYSBiYXNpYyBjb2RlIHBvaW50KScsXG5cdFx0J2ludmFsaWQtaW5wdXQnOiAnSW52YWxpZCBpbnB1dCdcblx0fSxcblxuXHQvKiogQ29udmVuaWVuY2Ugc2hvcnRjdXRzICovXG5cdGJhc2VNaW51c1RNaW4gPSBiYXNlIC0gdE1pbixcblx0Zmxvb3IgPSBNYXRoLmZsb29yLFxuXHRzdHJpbmdGcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLFxuXG5cdC8qKiBUZW1wb3JhcnkgdmFyaWFibGUgKi9cblx0a2V5O1xuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdC8qKlxuXHQgKiBBIGdlbmVyaWMgZXJyb3IgdXRpbGl0eSBmdW5jdGlvbi5cblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIGVycm9yIHR5cGUuXG5cdCAqIEByZXR1cm5zIHtFcnJvcn0gVGhyb3dzIGEgYFJhbmdlRXJyb3JgIHdpdGggdGhlIGFwcGxpY2FibGUgZXJyb3IgbWVzc2FnZS5cblx0ICovXG5cdGZ1bmN0aW9uIGVycm9yKHR5cGUpIHtcblx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcihlcnJvcnNbdHlwZV0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBgQXJyYXkjbWFwYCB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnkgYXJyYXlcblx0ICogaXRlbS5cblx0ICogQHJldHVybnMge0FycmF5fSBBIG5ldyBhcnJheSBvZiB2YWx1ZXMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwKGFycmF5LCBmbikge1xuXHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdHdoaWxlIChsZW5ndGgtLSkge1xuXHRcdFx0cmVzdWx0W2xlbmd0aF0gPSBmbihhcnJheVtsZW5ndGhdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIHNpbXBsZSBgQXJyYXkjbWFwYC1saWtlIHdyYXBwZXIgdG8gd29yayB3aXRoIGRvbWFpbiBuYW1lIHN0cmluZ3Mgb3IgZW1haWxcblx0ICogYWRkcmVzc2VzLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnlcblx0ICogY2hhcmFjdGVyLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IHN0cmluZyBvZiBjaGFyYWN0ZXJzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFja1xuXHQgKiBmdW5jdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIG1hcERvbWFpbihzdHJpbmcsIGZuKSB7XG5cdFx0dmFyIHBhcnRzID0gc3RyaW5nLnNwbGl0KCdAJyk7XG5cdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHQvLyBJbiBlbWFpbCBhZGRyZXNzZXMsIG9ubHkgdGhlIGRvbWFpbiBuYW1lIHNob3VsZCBiZSBwdW55Y29kZWQuIExlYXZlXG5cdFx0XHQvLyB0aGUgbG9jYWwgcGFydCAoaS5lLiBldmVyeXRoaW5nIHVwIHRvIGBAYCkgaW50YWN0LlxuXHRcdFx0cmVzdWx0ID0gcGFydHNbMF0gKyAnQCc7XG5cdFx0XHRzdHJpbmcgPSBwYXJ0c1sxXTtcblx0XHR9XG5cdFx0Ly8gQXZvaWQgYHNwbGl0KHJlZ2V4KWAgZm9yIElFOCBjb21wYXRpYmlsaXR5LiBTZWUgIzE3LlxuXHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJlZ2V4U2VwYXJhdG9ycywgJ1xceDJFJyk7XG5cdFx0dmFyIGxhYmVscyA9IHN0cmluZy5zcGxpdCgnLicpO1xuXHRcdHZhciBlbmNvZGVkID0gbWFwKGxhYmVscywgZm4pLmpvaW4oJy4nKTtcblx0XHRyZXR1cm4gcmVzdWx0ICsgZW5jb2RlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG51bWVyaWMgY29kZSBwb2ludHMgb2YgZWFjaCBVbmljb2RlXG5cdCAqIGNoYXJhY3RlciBpbiB0aGUgc3RyaW5nLiBXaGlsZSBKYXZhU2NyaXB0IHVzZXMgVUNTLTIgaW50ZXJuYWxseSxcblx0ICogdGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYSBwYWlyIG9mIHN1cnJvZ2F0ZSBoYWx2ZXMgKGVhY2ggb2Ygd2hpY2hcblx0ICogVUNTLTIgZXhwb3NlcyBhcyBzZXBhcmF0ZSBjaGFyYWN0ZXJzKSBpbnRvIGEgc2luZ2xlIGNvZGUgcG9pbnQsXG5cdCAqIG1hdGNoaW5nIFVURi0xNi5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5lbmNvZGVgXG5cdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuXHQgKiBAbmFtZSBkZWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgVW5pY29kZSBpbnB1dCBzdHJpbmcgKFVDUy0yKS5cblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgbmV3IGFycmF5IG9mIGNvZGUgcG9pbnRzLlxuXHQgKi9cblx0ZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGNvdW50ZXIgPSAwLFxuXHRcdCAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuXHRcdCAgICB2YWx1ZSxcblx0XHQgICAgZXh0cmE7XG5cdFx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdFx0Ly8gaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyXG5cdFx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdFx0aWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7IC8vIGxvdyBzdXJyb2dhdGVcblx0XHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHVubWF0Y2hlZCBzdXJyb2dhdGU7IG9ubHkgYXBwZW5kIHRoaXMgY29kZSB1bml0LCBpbiBjYXNlIHRoZSBuZXh0XG5cdFx0XHRcdFx0Ly8gY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBzdHJpbmcgYmFzZWQgb24gYW4gYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5kZWNvZGVgXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGVuY29kZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBjb2RlUG9pbnRzIFRoZSBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbmV3IFVuaWNvZGUgc3RyaW5nIChVQ1MtMikuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZW5jb2RlKGFycmF5KSB7XG5cdFx0cmV0dXJuIG1hcChhcnJheSwgZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHRcdGlmICh2YWx1ZSA+IDB4RkZGRikge1xuXHRcdFx0XHR2YWx1ZSAtPSAweDEwMDAwO1xuXHRcdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRcdFx0dmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgYmFzaWMgY29kZSBwb2ludCBpbnRvIGEgZGlnaXQvaW50ZWdlci5cblx0ICogQHNlZSBgZGlnaXRUb0Jhc2ljKClgXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlUG9pbnQgVGhlIGJhc2ljIG51bWVyaWMgY29kZSBwb2ludCB2YWx1ZS5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50IChmb3IgdXNlIGluXG5cdCAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaW4gdGhlIHJhbmdlIGAwYCB0byBgYmFzZSAtIDFgLCBvciBgYmFzZWAgaWZcblx0ICogdGhlIGNvZGUgcG9pbnQgZG9lcyBub3QgcmVwcmVzZW50IGEgdmFsdWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNpY1RvRGlnaXQoY29kZVBvaW50KSB7XG5cdFx0aWYgKGNvZGVQb2ludCAtIDQ4IDwgMTApIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSAyMjtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDY1IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA2NTtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDk3IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA5Nztcblx0XHR9XG5cdFx0cmV0dXJuIGJhc2U7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBkaWdpdC9pbnRlZ2VyIGludG8gYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAc2VlIGBiYXNpY1RvRGlnaXQoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRpZ2l0IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludC5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIGJhc2ljIGNvZGUgcG9pbnQgd2hvc2UgdmFsdWUgKHdoZW4gdXNlZCBmb3Jcblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpcyBgZGlnaXRgLCB3aGljaCBuZWVkcyB0byBiZSBpbiB0aGUgcmFuZ2Vcblx0ICogYDBgIHRvIGBiYXNlIC0gMWAuIElmIGBmbGFnYCBpcyBub24temVybywgdGhlIHVwcGVyY2FzZSBmb3JtIGlzXG5cdCAqIHVzZWQ7IGVsc2UsIHRoZSBsb3dlcmNhc2UgZm9ybSBpcyB1c2VkLiBUaGUgYmVoYXZpb3IgaXMgdW5kZWZpbmVkXG5cdCAqIGlmIGBmbGFnYCBpcyBub24temVybyBhbmQgYGRpZ2l0YCBoYXMgbm8gdXBwZXJjYXNlIGZvcm0uXG5cdCAqL1xuXHRmdW5jdGlvbiBkaWdpdFRvQmFzaWMoZGlnaXQsIGZsYWcpIHtcblx0XHQvLyAgMC4uMjUgbWFwIHRvIEFTQ0lJIGEuLnogb3IgQS4uWlxuXHRcdC8vIDI2Li4zNSBtYXAgdG8gQVNDSUkgMC4uOVxuXHRcdHJldHVybiBkaWdpdCArIDIyICsgNzUgKiAoZGlnaXQgPCAyNikgLSAoKGZsYWcgIT0gMCkgPDwgNSk7XG5cdH1cblxuXHQvKipcblx0ICogQmlhcyBhZGFwdGF0aW9uIGZ1bmN0aW9uIGFzIHBlciBzZWN0aW9uIDMuNCBvZiBSRkMgMzQ5Mi5cblx0ICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM0OTIjc2VjdGlvbi0zLjRcblx0ICogQHByaXZhdGVcblx0ICovXG5cdGZ1bmN0aW9uIGFkYXB0KGRlbHRhLCBudW1Qb2ludHMsIGZpcnN0VGltZSkge1xuXHRcdHZhciBrID0gMDtcblx0XHRkZWx0YSA9IGZpcnN0VGltZSA/IGZsb29yKGRlbHRhIC8gZGFtcCkgOiBkZWx0YSA+PiAxO1xuXHRcdGRlbHRhICs9IGZsb29yKGRlbHRhIC8gbnVtUG9pbnRzKTtcblx0XHRmb3IgKC8qIG5vIGluaXRpYWxpemF0aW9uICovOyBkZWx0YSA+IGJhc2VNaW51c1RNaW4gKiB0TWF4ID4+IDE7IGsgKz0gYmFzZSkge1xuXHRcdFx0ZGVsdGEgPSBmbG9vcihkZWx0YSAvIGJhc2VNaW51c1RNaW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gZmxvb3IoayArIChiYXNlTWludXNUTWluICsgMSkgKiBkZWx0YSAvIChkZWx0YSArIHNrZXcpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMgdG8gYSBzdHJpbmcgb2YgVW5pY29kZVxuXHQgKiBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcblx0XHQvLyBEb24ndCB1c2UgVUNTLTJcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuXHRcdCAgICBvdXQsXG5cdFx0ICAgIGkgPSAwLFxuXHRcdCAgICBuID0gaW5pdGlhbE4sXG5cdFx0ICAgIGJpYXMgPSBpbml0aWFsQmlhcyxcblx0XHQgICAgYmFzaWMsXG5cdFx0ICAgIGosXG5cdFx0ICAgIGluZGV4LFxuXHRcdCAgICBvbGRpLFxuXHRcdCAgICB3LFxuXHRcdCAgICBrLFxuXHRcdCAgICBkaWdpdCxcblx0XHQgICAgdCxcblx0XHQgICAgLyoqIENhY2hlZCBjYWxjdWxhdGlvbiByZXN1bHRzICovXG5cdFx0ICAgIGJhc2VNaW51c1Q7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzOiBsZXQgYGJhc2ljYCBiZSB0aGUgbnVtYmVyIG9mIGlucHV0IGNvZGVcblx0XHQvLyBwb2ludHMgYmVmb3JlIHRoZSBsYXN0IGRlbGltaXRlciwgb3IgYDBgIGlmIHRoZXJlIGlzIG5vbmUsIHRoZW4gY29weVxuXHRcdC8vIHRoZSBmaXJzdCBiYXNpYyBjb2RlIHBvaW50cyB0byB0aGUgb3V0cHV0LlxuXG5cdFx0YmFzaWMgPSBpbnB1dC5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xuXHRcdGlmIChiYXNpYyA8IDApIHtcblx0XHRcdGJhc2ljID0gMDtcblx0XHR9XG5cblx0XHRmb3IgKGogPSAwOyBqIDwgYmFzaWM7ICsraikge1xuXHRcdFx0Ly8gaWYgaXQncyBub3QgYSBiYXNpYyBjb2RlIHBvaW50XG5cdFx0XHRpZiAoaW5wdXQuY2hhckNvZGVBdChqKSA+PSAweDgwKSB7XG5cdFx0XHRcdGVycm9yKCdub3QtYmFzaWMnKTtcblx0XHRcdH1cblx0XHRcdG91dHB1dC5wdXNoKGlucHV0LmNoYXJDb2RlQXQoaikpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZGVjb2RpbmcgbG9vcDogc3RhcnQganVzdCBhZnRlciB0aGUgbGFzdCBkZWxpbWl0ZXIgaWYgYW55IGJhc2ljIGNvZGVcblx0XHQvLyBwb2ludHMgd2VyZSBjb3BpZWQ7IHN0YXJ0IGF0IHRoZSBiZWdpbm5pbmcgb3RoZXJ3aXNlLlxuXG5cdFx0Zm9yIChpbmRleCA9IGJhc2ljID4gMCA/IGJhc2ljICsgMSA6IDA7IGluZGV4IDwgaW5wdXRMZW5ndGg7IC8qIG5vIGZpbmFsIGV4cHJlc3Npb24gKi8pIHtcblxuXHRcdFx0Ly8gYGluZGV4YCBpcyB0aGUgaW5kZXggb2YgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGJlIGNvbnN1bWVkLlxuXHRcdFx0Ly8gRGVjb2RlIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIgaW50byBgZGVsdGFgLFxuXHRcdFx0Ly8gd2hpY2ggZ2V0cyBhZGRlZCB0byBgaWAuIFRoZSBvdmVyZmxvdyBjaGVja2luZyBpcyBlYXNpZXJcblx0XHRcdC8vIGlmIHdlIGluY3JlYXNlIGBpYCBhcyB3ZSBnbywgdGhlbiBzdWJ0cmFjdCBvZmYgaXRzIHN0YXJ0aW5nXG5cdFx0XHQvLyB2YWx1ZSBhdCB0aGUgZW5kIHRvIG9idGFpbiBgZGVsdGFgLlxuXHRcdFx0Zm9yIChvbGRpID0gaSwgdyA9IDEsIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXG5cdFx0XHRcdGlmIChpbmRleCA+PSBpbnB1dExlbmd0aCkge1xuXHRcdFx0XHRcdGVycm9yKCdpbnZhbGlkLWlucHV0Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkaWdpdCA9IGJhc2ljVG9EaWdpdChpbnB1dC5jaGFyQ29kZUF0KGluZGV4KyspKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPj0gYmFzZSB8fCBkaWdpdCA+IGZsb29yKChtYXhJbnQgLSBpKSAvIHcpKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpICs9IGRpZ2l0ICogdztcblx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cblx0XHRcdFx0aWYgKGRpZ2l0IDwgdCkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0XHRpZiAodyA+IGZsb29yKG1heEludCAvIGJhc2VNaW51c1QpKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3ICo9IGJhc2VNaW51c1Q7XG5cblx0XHRcdH1cblxuXHRcdFx0b3V0ID0gb3V0cHV0Lmxlbmd0aCArIDE7XG5cdFx0XHRiaWFzID0gYWRhcHQoaSAtIG9sZGksIG91dCwgb2xkaSA9PSAwKTtcblxuXHRcdFx0Ly8gYGlgIHdhcyBzdXBwb3NlZCB0byB3cmFwIGFyb3VuZCBmcm9tIGBvdXRgIHRvIGAwYCxcblx0XHRcdC8vIGluY3JlbWVudGluZyBgbmAgZWFjaCB0aW1lLCBzbyB3ZSdsbCBmaXggdGhhdCBub3c6XG5cdFx0XHRpZiAoZmxvb3IoaSAvIG91dCkgPiBtYXhJbnQgLSBuKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRuICs9IGZsb29yKGkgLyBvdXQpO1xuXHRcdFx0aSAlPSBvdXQ7XG5cblx0XHRcdC8vIEluc2VydCBgbmAgYXQgcG9zaXRpb24gYGlgIG9mIHRoZSBvdXRwdXRcblx0XHRcdG91dHB1dC5zcGxpY2UoaSsrLCAwLCBuKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB1Y3MyZW5jb2RlKG91dHB1dCk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzIChlLmcuIGEgZG9tYWluIG5hbWUgbGFiZWwpIHRvIGFcblx0ICogUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlc3VsdGluZyBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKi9cblx0ZnVuY3Rpb24gZW5jb2RlKGlucHV0KSB7XG5cdFx0dmFyIG4sXG5cdFx0ICAgIGRlbHRhLFxuXHRcdCAgICBoYW5kbGVkQ1BDb3VudCxcblx0XHQgICAgYmFzaWNMZW5ndGgsXG5cdFx0ICAgIGJpYXMsXG5cdFx0ICAgIGosXG5cdFx0ICAgIG0sXG5cdFx0ICAgIHEsXG5cdFx0ICAgIGssXG5cdFx0ICAgIHQsXG5cdFx0ICAgIGN1cnJlbnRWYWx1ZSxcblx0XHQgICAgb3V0cHV0ID0gW10sXG5cdFx0ICAgIC8qKiBgaW5wdXRMZW5ndGhgIHdpbGwgaG9sZCB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIGluIGBpbnB1dGAuICovXG5cdFx0ICAgIGlucHV0TGVuZ3RoLFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgaGFuZGxlZENQQ291bnRQbHVzT25lLFxuXHRcdCAgICBiYXNlTWludXNULFxuXHRcdCAgICBxTWludXNUO1xuXG5cdFx0Ly8gQ29udmVydCB0aGUgaW5wdXQgaW4gVUNTLTIgdG8gVW5pY29kZVxuXHRcdGlucHV0ID0gdWNzMmRlY29kZShpbnB1dCk7XG5cblx0XHQvLyBDYWNoZSB0aGUgbGVuZ3RoXG5cdFx0aW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cblx0XHQvLyBJbml0aWFsaXplIHRoZSBzdGF0ZVxuXHRcdG4gPSBpbml0aWFsTjtcblx0XHRkZWx0YSA9IDA7XG5cdFx0YmlhcyA9IGluaXRpYWxCaWFzO1xuXG5cdFx0Ly8gSGFuZGxlIHRoZSBiYXNpYyBjb2RlIHBvaW50c1xuXHRcdGZvciAoaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRjdXJyZW50VmFsdWUgPSBpbnB1dFtqXTtcblx0XHRcdGlmIChjdXJyZW50VmFsdWUgPCAweDgwKSB7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHN0cmluZ0Zyb21DaGFyQ29kZShjdXJyZW50VmFsdWUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRoYW5kbGVkQ1BDb3VudCA9IGJhc2ljTGVuZ3RoID0gb3V0cHV0Lmxlbmd0aDtcblxuXHRcdC8vIGBoYW5kbGVkQ1BDb3VudGAgaXMgdGhlIG51bWJlciBvZiBjb2RlIHBvaW50cyB0aGF0IGhhdmUgYmVlbiBoYW5kbGVkO1xuXHRcdC8vIGBiYXNpY0xlbmd0aGAgaXMgdGhlIG51bWJlciBvZiBiYXNpYyBjb2RlIHBvaW50cy5cblxuXHRcdC8vIEZpbmlzaCB0aGUgYmFzaWMgc3RyaW5nIC0gaWYgaXQgaXMgbm90IGVtcHR5IC0gd2l0aCBhIGRlbGltaXRlclxuXHRcdGlmIChiYXNpY0xlbmd0aCkge1xuXHRcdFx0b3V0cHV0LnB1c2goZGVsaW1pdGVyKTtcblx0XHR9XG5cblx0XHQvLyBNYWluIGVuY29kaW5nIGxvb3A6XG5cdFx0d2hpbGUgKGhhbmRsZWRDUENvdW50IDwgaW5wdXRMZW5ndGgpIHtcblxuXHRcdFx0Ly8gQWxsIG5vbi1iYXNpYyBjb2RlIHBvaW50cyA8IG4gaGF2ZSBiZWVuIGhhbmRsZWQgYWxyZWFkeS4gRmluZCB0aGUgbmV4dFxuXHRcdFx0Ly8gbGFyZ2VyIG9uZTpcblx0XHRcdGZvciAobSA9IG1heEludCwgaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID49IG4gJiYgY3VycmVudFZhbHVlIDwgbSkge1xuXHRcdFx0XHRcdG0gPSBjdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSW5jcmVhc2UgYGRlbHRhYCBlbm91Z2ggdG8gYWR2YW5jZSB0aGUgZGVjb2RlcidzIDxuLGk+IHN0YXRlIHRvIDxtLDA+LFxuXHRcdFx0Ly8gYnV0IGd1YXJkIGFnYWluc3Qgb3ZlcmZsb3dcblx0XHRcdGhhbmRsZWRDUENvdW50UGx1c09uZSA9IGhhbmRsZWRDUENvdW50ICsgMTtcblx0XHRcdGlmIChtIC0gbiA+IGZsb29yKChtYXhJbnQgLSBkZWx0YSkgLyBoYW5kbGVkQ1BDb3VudFBsdXNPbmUpKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWx0YSArPSAobSAtIG4pICogaGFuZGxlZENQQ291bnRQbHVzT25lO1xuXHRcdFx0biA9IG07XG5cblx0XHRcdGZvciAoaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPCBuICYmICsrZGVsdGEgPiBtYXhJbnQpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT0gbikge1xuXHRcdFx0XHRcdC8vIFJlcHJlc2VudCBkZWx0YSBhcyBhIGdlbmVyYWxpemVkIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyXG5cdFx0XHRcdFx0Zm9yIChxID0gZGVsdGEsIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXHRcdFx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cdFx0XHRcdFx0XHRpZiAocSA8IHQpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRxTWludXNUID0gcSAtIHQ7XG5cdFx0XHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdFx0XHRvdXRwdXQucHVzaChcblx0XHRcdFx0XHRcdFx0c3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyh0ICsgcU1pbnVzVCAlIGJhc2VNaW51c1QsIDApKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHEgPSBmbG9vcihxTWludXNUIC8gYmFzZU1pbnVzVCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyhxLCAwKSkpO1xuXHRcdFx0XHRcdGJpYXMgPSBhZGFwdChkZWx0YSwgaGFuZGxlZENQQ291bnRQbHVzT25lLCBoYW5kbGVkQ1BDb3VudCA9PSBiYXNpY0xlbmd0aCk7XG5cdFx0XHRcdFx0ZGVsdGEgPSAwO1xuXHRcdFx0XHRcdCsraGFuZGxlZENQQ291bnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0KytkZWx0YTtcblx0XHRcdCsrbjtcblxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3Ncblx0ICogdG8gVW5pY29kZS4gT25seSB0aGUgUHVueWNvZGVkIHBhcnRzIG9mIHRoZSBpbnB1dCB3aWxsIGJlIGNvbnZlcnRlZCwgaS5lLlxuXHQgKiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCBvbiBhIHN0cmluZyB0aGF0IGhhcyBhbHJlYWR5IGJlZW5cblx0ICogY29udmVydGVkIHRvIFVuaWNvZGUuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlZCBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvXG5cdCAqIGNvbnZlcnQgdG8gVW5pY29kZS5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIFVuaWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIFB1bnljb2RlXG5cdCAqIHN0cmluZy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvVW5pY29kZShpbnB1dCkge1xuXHRcdHJldHVybiBtYXBEb21haW4oaW5wdXQsIGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHJlZ2V4UHVueWNvZGUudGVzdChzdHJpbmcpXG5cdFx0XHRcdD8gZGVjb2RlKHN0cmluZy5zbGljZSg0KS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0XHQ6IHN0cmluZztcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFVuaWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogUHVueWNvZGUuIE9ubHkgdGhlIG5vbi1BU0NJSSBwYXJ0cyBvZiB0aGUgZG9tYWluIG5hbWUgd2lsbCBiZSBjb252ZXJ0ZWQsXG5cdCAqIGkuZS4gaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0J3MgYWxyZWFkeSBpblxuXHQgKiBBU0NJSS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcyB0byBjb252ZXJ0LCBhcyBhXG5cdCAqIFVuaWNvZGUgc3RyaW5nLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgUHVueWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIGRvbWFpbiBuYW1lIG9yXG5cdCAqIGVtYWlsIGFkZHJlc3MuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b0FTQ0lJKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhOb25BU0NJSS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyAneG4tLScgKyBlbmNvZGUoc3RyaW5nKVxuXHRcdFx0XHQ6IHN0cmluZztcblx0XHR9KTtcblx0fVxuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdC8qKiBEZWZpbmUgdGhlIHB1YmxpYyBBUEkgKi9cblx0cHVueWNvZGUgPSB7XG5cdFx0LyoqXG5cdFx0ICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IFB1bnljb2RlLmpzIHZlcnNpb24gbnVtYmVyLlxuXHRcdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdCAqL1xuXHRcdCd2ZXJzaW9uJzogJzEuNC4xJyxcblx0XHQvKipcblx0XHQgKiBBbiBvYmplY3Qgb2YgbWV0aG9kcyB0byBjb252ZXJ0IGZyb20gSmF2YVNjcmlwdCdzIGludGVybmFsIGNoYXJhY3RlclxuXHRcdCAqIHJlcHJlc2VudGF0aW9uIChVQ1MtMikgdG8gVW5pY29kZSBjb2RlIHBvaW50cywgYW5kIGJhY2suXG5cdFx0ICogQHNlZSA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmc+XG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgT2JqZWN0XG5cdFx0ICovXG5cdFx0J3VjczInOiB7XG5cdFx0XHQnZGVjb2RlJzogdWNzMmRlY29kZSxcblx0XHRcdCdlbmNvZGUnOiB1Y3MyZW5jb2RlXG5cdFx0fSxcblx0XHQnZGVjb2RlJzogZGVjb2RlLFxuXHRcdCdlbmNvZGUnOiBlbmNvZGUsXG5cdFx0J3RvQVNDSUknOiB0b0FTQ0lJLFxuXHRcdCd0b1VuaWNvZGUnOiB0b1VuaWNvZGVcblx0fTtcblxuXHQvKiogRXhwb3NlIGBwdW55Y29kZWAgKi9cblx0Ly8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3Igc3BlY2lmaWMgY29uZGl0aW9uIHBhdHRlcm5zXG5cdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0aWYgKFxuXHRcdHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmXG5cdFx0ZGVmaW5lLmFtZFxuXHQpIHtcblx0XHRkZWZpbmUoJ3B1bnljb2RlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gcHVueWNvZGU7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSkge1xuXHRcdGlmIChtb2R1bGUuZXhwb3J0cyA9PSBmcmVlRXhwb3J0cykge1xuXHRcdFx0Ly8gaW4gTm9kZS5qcywgaW8uanMsIG9yIFJpbmdvSlMgdjAuOC4wK1xuXHRcdFx0ZnJlZU1vZHVsZS5leHBvcnRzID0gcHVueWNvZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGluIE5hcndoYWwgb3IgUmluZ29KUyB2MC43LjAtXG5cdFx0XHRmb3IgKGtleSBpbiBwdW55Y29kZSkge1xuXHRcdFx0XHRwdW55Y29kZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChmcmVlRXhwb3J0c1trZXldID0gcHVueWNvZGVba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIGluIFJoaW5vIG9yIGEgd2ViIGJyb3dzZXJcblx0XHRyb290LnB1bnljb2RlID0gcHVueWNvZGU7XG5cdH1cblxufSh0aGlzKSk7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG1hcChvYmplY3RLZXlzKG9iaiksIGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBtYXAob2JqW2tdLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5mdW5jdGlvbiBtYXAgKHhzLCBmKSB7XG4gIGlmICh4cy5tYXApIHJldHVybiB4cy5tYXAoZik7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgIHJlcy5wdXNoKGYoeHNbaV0sIGkpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHJlcy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwdW55Y29kZSA9IHJlcXVpcmUoJ3B1bnljb2RlJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5leHBvcnRzLnBhcnNlID0gdXJsUGFyc2U7XG5leHBvcnRzLnJlc29sdmUgPSB1cmxSZXNvbHZlO1xuZXhwb3J0cy5yZXNvbHZlT2JqZWN0ID0gdXJsUmVzb2x2ZU9iamVjdDtcbmV4cG9ydHMuZm9ybWF0ID0gdXJsRm9ybWF0O1xuXG5leHBvcnRzLlVybCA9IFVybDtcblxuZnVuY3Rpb24gVXJsKCkge1xuICB0aGlzLnByb3RvY29sID0gbnVsbDtcbiAgdGhpcy5zbGFzaGVzID0gbnVsbDtcbiAgdGhpcy5hdXRoID0gbnVsbDtcbiAgdGhpcy5ob3N0ID0gbnVsbDtcbiAgdGhpcy5wb3J0ID0gbnVsbDtcbiAgdGhpcy5ob3N0bmFtZSA9IG51bGw7XG4gIHRoaXMuaGFzaCA9IG51bGw7XG4gIHRoaXMuc2VhcmNoID0gbnVsbDtcbiAgdGhpcy5xdWVyeSA9IG51bGw7XG4gIHRoaXMucGF0aG5hbWUgPSBudWxsO1xuICB0aGlzLnBhdGggPSBudWxsO1xuICB0aGlzLmhyZWYgPSBudWxsO1xufVxuXG4vLyBSZWZlcmVuY2U6IFJGQyAzOTg2LCBSRkMgMTgwOCwgUkZDIDIzOTZcblxuLy8gZGVmaW5lIHRoZXNlIGhlcmUgc28gYXQgbGVhc3QgdGhleSBvbmx5IGhhdmUgdG8gYmVcbi8vIGNvbXBpbGVkIG9uY2Ugb24gdGhlIGZpcnN0IG1vZHVsZSBsb2FkLlxudmFyIHByb3RvY29sUGF0dGVybiA9IC9eKFthLXowLTkuKy1dKzopL2ksXG4gICAgcG9ydFBhdHRlcm4gPSAvOlswLTldKiQvLFxuXG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciBhIHNpbXBsZSBwYXRoIFVSTFxuICAgIHNpbXBsZVBhdGhQYXR0ZXJuID0gL14oXFwvXFwvPyg/IVxcLylbXlxcP1xcc10qKShcXD9bXlxcc10qKT8kLyxcblxuICAgIC8vIFJGQyAyMzk2OiBjaGFyYWN0ZXJzIHJlc2VydmVkIGZvciBkZWxpbWl0aW5nIFVSTHMuXG4gICAgLy8gV2UgYWN0dWFsbHkganVzdCBhdXRvLWVzY2FwZSB0aGVzZS5cbiAgICBkZWxpbXMgPSBbJzwnLCAnPicsICdcIicsICdgJywgJyAnLCAnXFxyJywgJ1xcbicsICdcXHQnXSxcblxuICAgIC8vIFJGQyAyMzk2OiBjaGFyYWN0ZXJzIG5vdCBhbGxvd2VkIGZvciB2YXJpb3VzIHJlYXNvbnMuXG4gICAgdW53aXNlID0gWyd7JywgJ30nLCAnfCcsICdcXFxcJywgJ14nLCAnYCddLmNvbmNhdChkZWxpbXMpLFxuXG4gICAgLy8gQWxsb3dlZCBieSBSRkNzLCBidXQgY2F1c2Ugb2YgWFNTIGF0dGFja3MuICBBbHdheXMgZXNjYXBlIHRoZXNlLlxuICAgIGF1dG9Fc2NhcGUgPSBbJ1xcJyddLmNvbmNhdCh1bndpc2UpLFxuICAgIC8vIENoYXJhY3RlcnMgdGhhdCBhcmUgbmV2ZXIgZXZlciBhbGxvd2VkIGluIGEgaG9zdG5hbWUuXG4gICAgLy8gTm90ZSB0aGF0IGFueSBpbnZhbGlkIGNoYXJzIGFyZSBhbHNvIGhhbmRsZWQsIGJ1dCB0aGVzZVxuICAgIC8vIGFyZSB0aGUgb25lcyB0aGF0IGFyZSAqZXhwZWN0ZWQqIHRvIGJlIHNlZW4sIHNvIHdlIGZhc3QtcGF0aFxuICAgIC8vIHRoZW0uXG4gICAgbm9uSG9zdENoYXJzID0gWyclJywgJy8nLCAnPycsICc7JywgJyMnXS5jb25jYXQoYXV0b0VzY2FwZSksXG4gICAgaG9zdEVuZGluZ0NoYXJzID0gWycvJywgJz8nLCAnIyddLFxuICAgIGhvc3RuYW1lTWF4TGVuID0gMjU1LFxuICAgIGhvc3RuYW1lUGFydFBhdHRlcm4gPSAvXlsrYS16MC05QS1aXy1dezAsNjN9JC8sXG4gICAgaG9zdG5hbWVQYXJ0U3RhcnQgPSAvXihbK2EtejAtOUEtWl8tXXswLDYzfSkoLiopJC8sXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgY2FuIGFsbG93IFwidW5zYWZlXCIgYW5kIFwidW53aXNlXCIgY2hhcnMuXG4gICAgdW5zYWZlUHJvdG9jb2wgPSB7XG4gICAgICAnamF2YXNjcmlwdCc6IHRydWUsXG4gICAgICAnamF2YXNjcmlwdDonOiB0cnVlXG4gICAgfSxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBuZXZlciBoYXZlIGEgaG9zdG5hbWUuXG4gICAgaG9zdGxlc3NQcm90b2NvbCA9IHtcbiAgICAgICdqYXZhc2NyaXB0JzogdHJ1ZSxcbiAgICAgICdqYXZhc2NyaXB0Oic6IHRydWVcbiAgICB9LFxuICAgIC8vIHByb3RvY29scyB0aGF0IGFsd2F5cyBjb250YWluIGEgLy8gYml0LlxuICAgIHNsYXNoZWRQcm90b2NvbCA9IHtcbiAgICAgICdodHRwJzogdHJ1ZSxcbiAgICAgICdodHRwcyc6IHRydWUsXG4gICAgICAnZnRwJzogdHJ1ZSxcbiAgICAgICdnb3BoZXInOiB0cnVlLFxuICAgICAgJ2ZpbGUnOiB0cnVlLFxuICAgICAgJ2h0dHA6JzogdHJ1ZSxcbiAgICAgICdodHRwczonOiB0cnVlLFxuICAgICAgJ2Z0cDonOiB0cnVlLFxuICAgICAgJ2dvcGhlcjonOiB0cnVlLFxuICAgICAgJ2ZpbGU6JzogdHJ1ZVxuICAgIH0sXG4gICAgcXVlcnlzdHJpbmcgPSByZXF1aXJlKCdxdWVyeXN0cmluZycpO1xuXG5mdW5jdGlvbiB1cmxQYXJzZSh1cmwsIHBhcnNlUXVlcnlTdHJpbmcsIHNsYXNoZXNEZW5vdGVIb3N0KSB7XG4gIGlmICh1cmwgJiYgdXRpbC5pc09iamVjdCh1cmwpICYmIHVybCBpbnN0YW5jZW9mIFVybCkgcmV0dXJuIHVybDtcblxuICB2YXIgdSA9IG5ldyBVcmw7XG4gIHUucGFyc2UodXJsLCBwYXJzZVF1ZXJ5U3RyaW5nLCBzbGFzaGVzRGVub3RlSG9zdCk7XG4gIHJldHVybiB1O1xufVxuXG5VcmwucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24odXJsLCBwYXJzZVF1ZXJ5U3RyaW5nLCBzbGFzaGVzRGVub3RlSG9zdCkge1xuICBpZiAoIXV0aWwuaXNTdHJpbmcodXJsKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXJhbWV0ZXIgJ3VybCcgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHVybCk7XG4gIH1cblxuICAvLyBDb3B5IGNocm9tZSwgSUUsIG9wZXJhIGJhY2tzbGFzaC1oYW5kbGluZyBiZWhhdmlvci5cbiAgLy8gQmFjayBzbGFzaGVzIGJlZm9yZSB0aGUgcXVlcnkgc3RyaW5nIGdldCBjb252ZXJ0ZWQgdG8gZm9yd2FyZCBzbGFzaGVzXG4gIC8vIFNlZTogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTI1OTE2XG4gIHZhciBxdWVyeUluZGV4ID0gdXJsLmluZGV4T2YoJz8nKSxcbiAgICAgIHNwbGl0dGVyID1cbiAgICAgICAgICAocXVlcnlJbmRleCAhPT0gLTEgJiYgcXVlcnlJbmRleCA8IHVybC5pbmRleE9mKCcjJykpID8gJz8nIDogJyMnLFxuICAgICAgdVNwbGl0ID0gdXJsLnNwbGl0KHNwbGl0dGVyKSxcbiAgICAgIHNsYXNoUmVnZXggPSAvXFxcXC9nO1xuICB1U3BsaXRbMF0gPSB1U3BsaXRbMF0ucmVwbGFjZShzbGFzaFJlZ2V4LCAnLycpO1xuICB1cmwgPSB1U3BsaXQuam9pbihzcGxpdHRlcik7XG5cbiAgdmFyIHJlc3QgPSB1cmw7XG5cbiAgLy8gdHJpbSBiZWZvcmUgcHJvY2VlZGluZy5cbiAgLy8gVGhpcyBpcyB0byBzdXBwb3J0IHBhcnNlIHN0dWZmIGxpa2UgXCIgIGh0dHA6Ly9mb28uY29tICBcXG5cIlxuICByZXN0ID0gcmVzdC50cmltKCk7XG5cbiAgaWYgKCFzbGFzaGVzRGVub3RlSG9zdCAmJiB1cmwuc3BsaXQoJyMnKS5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBUcnkgZmFzdCBwYXRoIHJlZ2V4cFxuICAgIHZhciBzaW1wbGVQYXRoID0gc2ltcGxlUGF0aFBhdHRlcm4uZXhlYyhyZXN0KTtcbiAgICBpZiAoc2ltcGxlUGF0aCkge1xuICAgICAgdGhpcy5wYXRoID0gcmVzdDtcbiAgICAgIHRoaXMuaHJlZiA9IHJlc3Q7XG4gICAgICB0aGlzLnBhdGhuYW1lID0gc2ltcGxlUGF0aFsxXTtcbiAgICAgIGlmIChzaW1wbGVQYXRoWzJdKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gc2ltcGxlUGF0aFsyXTtcbiAgICAgICAgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlzdHJpbmcucGFyc2UodGhpcy5zZWFyY2guc3Vic3RyKDEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5zZWFyY2guc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSAnJztcbiAgICAgICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3RvID0gcHJvdG9jb2xQYXR0ZXJuLmV4ZWMocmVzdCk7XG4gIGlmIChwcm90bykge1xuICAgIHByb3RvID0gcHJvdG9bMF07XG4gICAgdmFyIGxvd2VyUHJvdG8gPSBwcm90by50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMucHJvdG9jb2wgPSBsb3dlclByb3RvO1xuICAgIHJlc3QgPSByZXN0LnN1YnN0cihwcm90by5sZW5ndGgpO1xuICB9XG5cbiAgLy8gZmlndXJlIG91dCBpZiBpdCdzIGdvdCBhIGhvc3RcbiAgLy8gdXNlckBzZXJ2ZXIgaXMgKmFsd2F5cyogaW50ZXJwcmV0ZWQgYXMgYSBob3N0bmFtZSwgYW5kIHVybFxuICAvLyByZXNvbHV0aW9uIHdpbGwgdHJlYXQgLy9mb28vYmFyIGFzIGhvc3Q9Zm9vLHBhdGg9YmFyIGJlY2F1c2UgdGhhdCdzXG4gIC8vIGhvdyB0aGUgYnJvd3NlciByZXNvbHZlcyByZWxhdGl2ZSBVUkxzLlxuICBpZiAoc2xhc2hlc0Rlbm90ZUhvc3QgfHwgcHJvdG8gfHwgcmVzdC5tYXRjaCgvXlxcL1xcL1teQFxcL10rQFteQFxcL10rLykpIHtcbiAgICB2YXIgc2xhc2hlcyA9IHJlc3Quc3Vic3RyKDAsIDIpID09PSAnLy8nO1xuICAgIGlmIChzbGFzaGVzICYmICEocHJvdG8gJiYgaG9zdGxlc3NQcm90b2NvbFtwcm90b10pKSB7XG4gICAgICByZXN0ID0gcmVzdC5zdWJzdHIoMik7XG4gICAgICB0aGlzLnNsYXNoZXMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghaG9zdGxlc3NQcm90b2NvbFtwcm90b10gJiZcbiAgICAgIChzbGFzaGVzIHx8IChwcm90byAmJiAhc2xhc2hlZFByb3RvY29sW3Byb3RvXSkpKSB7XG5cbiAgICAvLyB0aGVyZSdzIGEgaG9zdG5hbWUuXG4gICAgLy8gdGhlIGZpcnN0IGluc3RhbmNlIG9mIC8sID8sIDssIG9yICMgZW5kcyB0aGUgaG9zdC5cbiAgICAvL1xuICAgIC8vIElmIHRoZXJlIGlzIGFuIEAgaW4gdGhlIGhvc3RuYW1lLCB0aGVuIG5vbi1ob3N0IGNoYXJzICphcmUqIGFsbG93ZWRcbiAgICAvLyB0byB0aGUgbGVmdCBvZiB0aGUgbGFzdCBAIHNpZ24sIHVubGVzcyBzb21lIGhvc3QtZW5kaW5nIGNoYXJhY3RlclxuICAgIC8vIGNvbWVzICpiZWZvcmUqIHRoZSBALXNpZ24uXG4gICAgLy8gVVJMcyBhcmUgb2Jub3hpb3VzLlxuICAgIC8vXG4gICAgLy8gZXg6XG4gICAgLy8gaHR0cDovL2FAYkBjLyA9PiB1c2VyOmFAYiBob3N0OmNcbiAgICAvLyBodHRwOi8vYUBiP0BjID0+IHVzZXI6YSBob3N0OmMgcGF0aDovP0BjXG5cbiAgICAvLyB2MC4xMiBUT0RPKGlzYWFjcyk6IFRoaXMgaXMgbm90IHF1aXRlIGhvdyBDaHJvbWUgZG9lcyB0aGluZ3MuXG4gICAgLy8gUmV2aWV3IG91ciB0ZXN0IGNhc2UgYWdhaW5zdCBicm93c2VycyBtb3JlIGNvbXByZWhlbnNpdmVseS5cblxuICAgIC8vIGZpbmQgdGhlIGZpcnN0IGluc3RhbmNlIG9mIGFueSBob3N0RW5kaW5nQ2hhcnNcbiAgICB2YXIgaG9zdEVuZCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9zdEVuZGluZ0NoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaGVjID0gcmVzdC5pbmRleE9mKGhvc3RFbmRpbmdDaGFyc1tpXSk7XG4gICAgICBpZiAoaGVjICE9PSAtMSAmJiAoaG9zdEVuZCA9PT0gLTEgfHwgaGVjIDwgaG9zdEVuZCkpXG4gICAgICAgIGhvc3RFbmQgPSBoZWM7XG4gICAgfVxuXG4gICAgLy8gYXQgdGhpcyBwb2ludCwgZWl0aGVyIHdlIGhhdmUgYW4gZXhwbGljaXQgcG9pbnQgd2hlcmUgdGhlXG4gICAgLy8gYXV0aCBwb3J0aW9uIGNhbm5vdCBnbyBwYXN0LCBvciB0aGUgbGFzdCBAIGNoYXIgaXMgdGhlIGRlY2lkZXIuXG4gICAgdmFyIGF1dGgsIGF0U2lnbjtcbiAgICBpZiAoaG9zdEVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIGF0U2lnbiBjYW4gYmUgYW55d2hlcmUuXG4gICAgICBhdFNpZ24gPSByZXN0Lmxhc3RJbmRleE9mKCdAJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGF0U2lnbiBtdXN0IGJlIGluIGF1dGggcG9ydGlvbi5cbiAgICAgIC8vIGh0dHA6Ly9hQGIvY0BkID0+IGhvc3Q6YiBhdXRoOmEgcGF0aDovY0BkXG4gICAgICBhdFNpZ24gPSByZXN0Lmxhc3RJbmRleE9mKCdAJywgaG9zdEVuZCk7XG4gICAgfVxuXG4gICAgLy8gTm93IHdlIGhhdmUgYSBwb3J0aW9uIHdoaWNoIGlzIGRlZmluaXRlbHkgdGhlIGF1dGguXG4gICAgLy8gUHVsbCB0aGF0IG9mZi5cbiAgICBpZiAoYXRTaWduICE9PSAtMSkge1xuICAgICAgYXV0aCA9IHJlc3Quc2xpY2UoMCwgYXRTaWduKTtcbiAgICAgIHJlc3QgPSByZXN0LnNsaWNlKGF0U2lnbiArIDEpO1xuICAgICAgdGhpcy5hdXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KGF1dGgpO1xuICAgIH1cblxuICAgIC8vIHRoZSBob3N0IGlzIHRoZSByZW1haW5pbmcgdG8gdGhlIGxlZnQgb2YgdGhlIGZpcnN0IG5vbi1ob3N0IGNoYXJcbiAgICBob3N0RW5kID0gLTE7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub25Ib3N0Q2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBoZWMgPSByZXN0LmluZGV4T2Yobm9uSG9zdENoYXJzW2ldKTtcbiAgICAgIGlmIChoZWMgIT09IC0xICYmIChob3N0RW5kID09PSAtMSB8fCBoZWMgPCBob3N0RW5kKSlcbiAgICAgICAgaG9zdEVuZCA9IGhlYztcbiAgICB9XG4gICAgLy8gaWYgd2Ugc3RpbGwgaGF2ZSBub3QgaGl0IGl0LCB0aGVuIHRoZSBlbnRpcmUgdGhpbmcgaXMgYSBob3N0LlxuICAgIGlmIChob3N0RW5kID09PSAtMSlcbiAgICAgIGhvc3RFbmQgPSByZXN0Lmxlbmd0aDtcblxuICAgIHRoaXMuaG9zdCA9IHJlc3Quc2xpY2UoMCwgaG9zdEVuZCk7XG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoaG9zdEVuZCk7XG5cbiAgICAvLyBwdWxsIG91dCBwb3J0LlxuICAgIHRoaXMucGFyc2VIb3N0KCk7XG5cbiAgICAvLyB3ZSd2ZSBpbmRpY2F0ZWQgdGhhdCB0aGVyZSBpcyBhIGhvc3RuYW1lLFxuICAgIC8vIHNvIGV2ZW4gaWYgaXQncyBlbXB0eSwgaXQgaGFzIHRvIGJlIHByZXNlbnQuXG4gICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUgfHwgJyc7XG5cbiAgICAvLyBpZiBob3N0bmFtZSBiZWdpbnMgd2l0aCBbIGFuZCBlbmRzIHdpdGggXVxuICAgIC8vIGFzc3VtZSB0aGF0IGl0J3MgYW4gSVB2NiBhZGRyZXNzLlxuICAgIHZhciBpcHY2SG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lWzBdID09PSAnWycgJiZcbiAgICAgICAgdGhpcy5ob3N0bmFtZVt0aGlzLmhvc3RuYW1lLmxlbmd0aCAtIDFdID09PSAnXSc7XG5cbiAgICAvLyB2YWxpZGF0ZSBhIGxpdHRsZS5cbiAgICBpZiAoIWlwdjZIb3N0bmFtZSkge1xuICAgICAgdmFyIGhvc3RwYXJ0cyA9IHRoaXMuaG9zdG5hbWUuc3BsaXQoL1xcLi8pO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBob3N0cGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gaG9zdHBhcnRzW2ldO1xuICAgICAgICBpZiAoIXBhcnQpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoIXBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0UGF0dGVybikpIHtcbiAgICAgICAgICB2YXIgbmV3cGFydCA9ICcnO1xuICAgICAgICAgIGZvciAodmFyIGogPSAwLCBrID0gcGFydC5sZW5ndGg7IGogPCBrOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChwYXJ0LmNoYXJDb2RlQXQoaikgPiAxMjcpIHtcbiAgICAgICAgICAgICAgLy8gd2UgcmVwbGFjZSBub24tQVNDSUkgY2hhciB3aXRoIGEgdGVtcG9yYXJ5IHBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgIC8vIHdlIG5lZWQgdGhpcyB0byBtYWtlIHN1cmUgc2l6ZSBvZiBob3N0bmFtZSBpcyBub3RcbiAgICAgICAgICAgICAgLy8gYnJva2VuIGJ5IHJlcGxhY2luZyBub24tQVNDSUkgYnkgbm90aGluZ1xuICAgICAgICAgICAgICBuZXdwYXJ0ICs9ICd4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld3BhcnQgKz0gcGFydFtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gd2UgdGVzdCBhZ2FpbiB3aXRoIEFTQ0lJIGNoYXIgb25seVxuICAgICAgICAgIGlmICghbmV3cGFydC5tYXRjaChob3N0bmFtZVBhcnRQYXR0ZXJuKSkge1xuICAgICAgICAgICAgdmFyIHZhbGlkUGFydHMgPSBob3N0cGFydHMuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICB2YXIgbm90SG9zdCA9IGhvc3RwYXJ0cy5zbGljZShpICsgMSk7XG4gICAgICAgICAgICB2YXIgYml0ID0gcGFydC5tYXRjaChob3N0bmFtZVBhcnRTdGFydCk7XG4gICAgICAgICAgICBpZiAoYml0KSB7XG4gICAgICAgICAgICAgIHZhbGlkUGFydHMucHVzaChiaXRbMV0pO1xuICAgICAgICAgICAgICBub3RIb3N0LnVuc2hpZnQoYml0WzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub3RIb3N0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXN0ID0gJy8nICsgbm90SG9zdC5qb2luKCcuJykgKyByZXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ob3N0bmFtZSA9IHZhbGlkUGFydHMuam9pbignLicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaG9zdG5hbWUubGVuZ3RoID4gaG9zdG5hbWVNYXhMZW4pIHtcbiAgICAgIHRoaXMuaG9zdG5hbWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaG9zdG5hbWVzIGFyZSBhbHdheXMgbG93ZXIgY2FzZS5cbiAgICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKCFpcHY2SG9zdG5hbWUpIHtcbiAgICAgIC8vIElETkEgU3VwcG9ydDogUmV0dXJucyBhIHB1bnljb2RlZCByZXByZXNlbnRhdGlvbiBvZiBcImRvbWFpblwiLlxuICAgICAgLy8gSXQgb25seSBjb252ZXJ0cyBwYXJ0cyBvZiB0aGUgZG9tYWluIG5hbWUgdGhhdFxuICAgICAgLy8gaGF2ZSBub24tQVNDSUkgY2hhcmFjdGVycywgaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZlxuICAgICAgLy8geW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0IGFscmVhZHkgaXMgQVNDSUktb25seS5cbiAgICAgIHRoaXMuaG9zdG5hbWUgPSBwdW55Y29kZS50b0FTQ0lJKHRoaXMuaG9zdG5hbWUpO1xuICAgIH1cblxuICAgIHZhciBwID0gdGhpcy5wb3J0ID8gJzonICsgdGhpcy5wb3J0IDogJyc7XG4gICAgdmFyIGggPSB0aGlzLmhvc3RuYW1lIHx8ICcnO1xuICAgIHRoaXMuaG9zdCA9IGggKyBwO1xuICAgIHRoaXMuaHJlZiArPSB0aGlzLmhvc3Q7XG5cbiAgICAvLyBzdHJpcCBbIGFuZCBdIGZyb20gdGhlIGhvc3RuYW1lXG4gICAgLy8gdGhlIGhvc3QgZmllbGQgc3RpbGwgcmV0YWlucyB0aGVtLCB0aG91Z2hcbiAgICBpZiAoaXB2Nkhvc3RuYW1lKSB7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZS5zdWJzdHIoMSwgdGhpcy5ob3N0bmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIGlmIChyZXN0WzBdICE9PSAnLycpIHtcbiAgICAgICAgcmVzdCA9ICcvJyArIHJlc3Q7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gbm93IHJlc3QgaXMgc2V0IHRvIHRoZSBwb3N0LWhvc3Qgc3R1ZmYuXG4gIC8vIGNob3Agb2ZmIGFueSBkZWxpbSBjaGFycy5cbiAgaWYgKCF1bnNhZmVQcm90b2NvbFtsb3dlclByb3RvXSkge1xuXG4gICAgLy8gRmlyc3QsIG1ha2UgMTAwJSBzdXJlIHRoYXQgYW55IFwiYXV0b0VzY2FwZVwiIGNoYXJzIGdldFxuICAgIC8vIGVzY2FwZWQsIGV2ZW4gaWYgZW5jb2RlVVJJQ29tcG9uZW50IGRvZXNuJ3QgdGhpbmsgdGhleVxuICAgIC8vIG5lZWQgdG8gYmUuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdXRvRXNjYXBlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGFlID0gYXV0b0VzY2FwZVtpXTtcbiAgICAgIGlmIChyZXN0LmluZGV4T2YoYWUpID09PSAtMSlcbiAgICAgICAgY29udGludWU7XG4gICAgICB2YXIgZXNjID0gZW5jb2RlVVJJQ29tcG9uZW50KGFlKTtcbiAgICAgIGlmIChlc2MgPT09IGFlKSB7XG4gICAgICAgIGVzYyA9IGVzY2FwZShhZSk7XG4gICAgICB9XG4gICAgICByZXN0ID0gcmVzdC5zcGxpdChhZSkuam9pbihlc2MpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gY2hvcCBvZmYgZnJvbSB0aGUgdGFpbCBmaXJzdC5cbiAgdmFyIGhhc2ggPSByZXN0LmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2ggIT09IC0xKSB7XG4gICAgLy8gZ290IGEgZnJhZ21lbnQgc3RyaW5nLlxuICAgIHRoaXMuaGFzaCA9IHJlc3Quc3Vic3RyKGhhc2gpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKDAsIGhhc2gpO1xuICB9XG4gIHZhciBxbSA9IHJlc3QuaW5kZXhPZignPycpO1xuICBpZiAocW0gIT09IC0xKSB7XG4gICAgdGhpcy5zZWFyY2ggPSByZXN0LnN1YnN0cihxbSk7XG4gICAgdGhpcy5xdWVyeSA9IHJlc3Quc3Vic3RyKHFtICsgMSk7XG4gICAgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeXN0cmluZy5wYXJzZSh0aGlzLnF1ZXJ5KTtcbiAgICB9XG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoMCwgcW0pO1xuICB9IGVsc2UgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAvLyBubyBxdWVyeSBzdHJpbmcsIGJ1dCBwYXJzZVF1ZXJ5U3RyaW5nIHN0aWxsIHJlcXVlc3RlZFxuICAgIHRoaXMuc2VhcmNoID0gJyc7XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICB9XG4gIGlmIChyZXN0KSB0aGlzLnBhdGhuYW1lID0gcmVzdDtcbiAgaWYgKHNsYXNoZWRQcm90b2NvbFtsb3dlclByb3RvXSAmJlxuICAgICAgdGhpcy5ob3N0bmFtZSAmJiAhdGhpcy5wYXRobmFtZSkge1xuICAgIHRoaXMucGF0aG5hbWUgPSAnLyc7XG4gIH1cblxuICAvL3RvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gIGlmICh0aGlzLnBhdGhuYW1lIHx8IHRoaXMuc2VhcmNoKSB7XG4gICAgdmFyIHAgPSB0aGlzLnBhdGhuYW1lIHx8ICcnO1xuICAgIHZhciBzID0gdGhpcy5zZWFyY2ggfHwgJyc7XG4gICAgdGhpcy5wYXRoID0gcCArIHM7XG4gIH1cblxuICAvLyBmaW5hbGx5LCByZWNvbnN0cnVjdCB0aGUgaHJlZiBiYXNlZCBvbiB3aGF0IGhhcyBiZWVuIHZhbGlkYXRlZC5cbiAgdGhpcy5ocmVmID0gdGhpcy5mb3JtYXQoKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBmb3JtYXQgYSBwYXJzZWQgb2JqZWN0IGludG8gYSB1cmwgc3RyaW5nXG5mdW5jdGlvbiB1cmxGb3JtYXQob2JqKSB7XG4gIC8vIGVuc3VyZSBpdCdzIGFuIG9iamVjdCwgYW5kIG5vdCBhIHN0cmluZyB1cmwuXG4gIC8vIElmIGl0J3MgYW4gb2JqLCB0aGlzIGlzIGEgbm8tb3AuXG4gIC8vIHRoaXMgd2F5LCB5b3UgY2FuIGNhbGwgdXJsX2Zvcm1hdCgpIG9uIHN0cmluZ3NcbiAgLy8gdG8gY2xlYW4gdXAgcG90ZW50aWFsbHkgd29ua3kgdXJscy5cbiAgaWYgKHV0aWwuaXNTdHJpbmcob2JqKSkgb2JqID0gdXJsUGFyc2Uob2JqKTtcbiAgaWYgKCEob2JqIGluc3RhbmNlb2YgVXJsKSkgcmV0dXJuIFVybC5wcm90b3R5cGUuZm9ybWF0LmNhbGwob2JqKTtcbiAgcmV0dXJuIG9iai5mb3JtYXQoKTtcbn1cblxuVXJsLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGF1dGggPSB0aGlzLmF1dGggfHwgJyc7XG4gIGlmIChhdXRoKSB7XG4gICAgYXV0aCA9IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKTtcbiAgICBhdXRoID0gYXV0aC5yZXBsYWNlKC8lM0EvaSwgJzonKTtcbiAgICBhdXRoICs9ICdAJztcbiAgfVxuXG4gIHZhciBwcm90b2NvbCA9IHRoaXMucHJvdG9jb2wgfHwgJycsXG4gICAgICBwYXRobmFtZSA9IHRoaXMucGF0aG5hbWUgfHwgJycsXG4gICAgICBoYXNoID0gdGhpcy5oYXNoIHx8ICcnLFxuICAgICAgaG9zdCA9IGZhbHNlLFxuICAgICAgcXVlcnkgPSAnJztcblxuICBpZiAodGhpcy5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB0aGlzLmhvc3Q7XG4gIH0gZWxzZSBpZiAodGhpcy5ob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKHRoaXMuaG9zdG5hbWUuaW5kZXhPZignOicpID09PSAtMSA/XG4gICAgICAgIHRoaXMuaG9zdG5hbWUgOlxuICAgICAgICAnWycgKyB0aGlzLmhvc3RuYW1lICsgJ10nKTtcbiAgICBpZiAodGhpcy5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHRoaXMucG9ydDtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5xdWVyeSAmJlxuICAgICAgdXRpbC5pc09iamVjdCh0aGlzLnF1ZXJ5KSAmJlxuICAgICAgT2JqZWN0LmtleXModGhpcy5xdWVyeSkubGVuZ3RoKSB7XG4gICAgcXVlcnkgPSBxdWVyeXN0cmluZy5zdHJpbmdpZnkodGhpcy5xdWVyeSk7XG4gIH1cblxuICB2YXIgc2VhcmNoID0gdGhpcy5zZWFyY2ggfHwgKHF1ZXJ5ICYmICgnPycgKyBxdWVyeSkpIHx8ICcnO1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6JztcblxuICAvLyBvbmx5IHRoZSBzbGFzaGVkUHJvdG9jb2xzIGdldCB0aGUgLy8uICBOb3QgbWFpbHRvOiwgeG1wcDosIGV0Yy5cbiAgLy8gdW5sZXNzIHRoZXkgaGFkIHRoZW0gdG8gYmVnaW4gd2l0aC5cbiAgaWYgKHRoaXMuc2xhc2hlcyB8fFxuICAgICAgKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xbcHJvdG9jb2xdKSAmJiBob3N0ICE9PSBmYWxzZSkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpO1xuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZTtcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJztcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2guY2hhckF0KDApICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoO1xuICBpZiAoc2VhcmNoICYmIHNlYXJjaC5jaGFyQXQoMCkgIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoO1xuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQobWF0Y2gpO1xuICB9KTtcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJyk7XG5cbiAgcmV0dXJuIHByb3RvY29sICsgaG9zdCArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcbn07XG5cbmZ1bmN0aW9uIHVybFJlc29sdmUoc291cmNlLCByZWxhdGl2ZSkge1xuICByZXR1cm4gdXJsUGFyc2Uoc291cmNlLCBmYWxzZSwgdHJ1ZSkucmVzb2x2ZShyZWxhdGl2ZSk7XG59XG5cblVybC5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG4gIHJldHVybiB0aGlzLnJlc29sdmVPYmplY3QodXJsUGFyc2UocmVsYXRpdmUsIGZhbHNlLCB0cnVlKSkuZm9ybWF0KCk7XG59O1xuXG5mdW5jdGlvbiB1cmxSZXNvbHZlT2JqZWN0KHNvdXJjZSwgcmVsYXRpdmUpIHtcbiAgaWYgKCFzb3VyY2UpIHJldHVybiByZWxhdGl2ZTtcbiAgcmV0dXJuIHVybFBhcnNlKHNvdXJjZSwgZmFsc2UsIHRydWUpLnJlc29sdmVPYmplY3QocmVsYXRpdmUpO1xufVxuXG5VcmwucHJvdG90eXBlLnJlc29sdmVPYmplY3QgPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuICBpZiAodXRpbC5pc1N0cmluZyhyZWxhdGl2ZSkpIHtcbiAgICB2YXIgcmVsID0gbmV3IFVybCgpO1xuICAgIHJlbC5wYXJzZShyZWxhdGl2ZSwgZmFsc2UsIHRydWUpO1xuICAgIHJlbGF0aXZlID0gcmVsO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IG5ldyBVcmwoKTtcbiAgdmFyIHRrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gIGZvciAodmFyIHRrID0gMDsgdGsgPCB0a2V5cy5sZW5ndGg7IHRrKyspIHtcbiAgICB2YXIgdGtleSA9IHRrZXlzW3RrXTtcbiAgICByZXN1bHRbdGtleV0gPSB0aGlzW3RrZXldO1xuICB9XG5cbiAgLy8gaGFzaCBpcyBhbHdheXMgb3ZlcnJpZGRlbiwgbm8gbWF0dGVyIHdoYXQuXG4gIC8vIGV2ZW4gaHJlZj1cIlwiIHdpbGwgcmVtb3ZlIGl0LlxuICByZXN1bHQuaGFzaCA9IHJlbGF0aXZlLmhhc2g7XG5cbiAgLy8gaWYgdGhlIHJlbGF0aXZlIHVybCBpcyBlbXB0eSwgdGhlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byBkbyBoZXJlLlxuICBpZiAocmVsYXRpdmUuaHJlZiA9PT0gJycpIHtcbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gaHJlZnMgbGlrZSAvL2Zvby9iYXIgYWx3YXlzIGN1dCB0byB0aGUgcHJvdG9jb2wuXG4gIGlmIChyZWxhdGl2ZS5zbGFzaGVzICYmICFyZWxhdGl2ZS5wcm90b2NvbCkge1xuICAgIC8vIHRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIHByb3RvY29sIGZyb20gcmVsYXRpdmVcbiAgICB2YXIgcmtleXMgPSBPYmplY3Qua2V5cyhyZWxhdGl2ZSk7XG4gICAgZm9yICh2YXIgcmsgPSAwOyByayA8IHJrZXlzLmxlbmd0aDsgcmsrKykge1xuICAgICAgdmFyIHJrZXkgPSBya2V5c1tya107XG4gICAgICBpZiAocmtleSAhPT0gJ3Byb3RvY29sJylcbiAgICAgICAgcmVzdWx0W3JrZXldID0gcmVsYXRpdmVbcmtleV07XG4gICAgfVxuXG4gICAgLy91cmxQYXJzZSBhcHBlbmRzIHRyYWlsaW5nIC8gdG8gdXJscyBsaWtlIGh0dHA6Ly93d3cuZXhhbXBsZS5jb21cbiAgICBpZiAoc2xhc2hlZFByb3RvY29sW3Jlc3VsdC5wcm90b2NvbF0gJiZcbiAgICAgICAgcmVzdWx0Lmhvc3RuYW1lICYmICFyZXN1bHQucGF0aG5hbWUpIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gcmVzdWx0LnBhdGhuYW1lID0gJy8nO1xuICAgIH1cblxuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAocmVsYXRpdmUucHJvdG9jb2wgJiYgcmVsYXRpdmUucHJvdG9jb2wgIT09IHJlc3VsdC5wcm90b2NvbCkge1xuICAgIC8vIGlmIGl0J3MgYSBrbm93biB1cmwgcHJvdG9jb2wsIHRoZW4gY2hhbmdpbmdcbiAgICAvLyB0aGUgcHJvdG9jb2wgZG9lcyB3ZWlyZCB0aGluZ3NcbiAgICAvLyBmaXJzdCwgaWYgaXQncyBub3QgZmlsZTosIHRoZW4gd2UgTVVTVCBoYXZlIGEgaG9zdCxcbiAgICAvLyBhbmQgaWYgdGhlcmUgd2FzIGEgcGF0aFxuICAgIC8vIHRvIGJlZ2luIHdpdGgsIHRoZW4gd2UgTVVTVCBoYXZlIGEgcGF0aC5cbiAgICAvLyBpZiBpdCBpcyBmaWxlOiwgdGhlbiB0aGUgaG9zdCBpcyBkcm9wcGVkLFxuICAgIC8vIGJlY2F1c2UgdGhhdCdzIGtub3duIHRvIGJlIGhvc3RsZXNzLlxuICAgIC8vIGFueXRoaW5nIGVsc2UgaXMgYXNzdW1lZCB0byBiZSBhYnNvbHV0ZS5cbiAgICBpZiAoIXNsYXNoZWRQcm90b2NvbFtyZWxhdGl2ZS5wcm90b2NvbF0pIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocmVsYXRpdmUpO1xuICAgICAgZm9yICh2YXIgdiA9IDA7IHYgPCBrZXlzLmxlbmd0aDsgdisrKSB7XG4gICAgICAgIHZhciBrID0ga2V5c1t2XTtcbiAgICAgICAgcmVzdWx0W2tdID0gcmVsYXRpdmVba107XG4gICAgICB9XG4gICAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmVzdWx0LnByb3RvY29sID0gcmVsYXRpdmUucHJvdG9jb2w7XG4gICAgaWYgKCFyZWxhdGl2ZS5ob3N0ICYmICFob3N0bGVzc1Byb3RvY29sW3JlbGF0aXZlLnByb3RvY29sXSkge1xuICAgICAgdmFyIHJlbFBhdGggPSAocmVsYXRpdmUucGF0aG5hbWUgfHwgJycpLnNwbGl0KCcvJyk7XG4gICAgICB3aGlsZSAocmVsUGF0aC5sZW5ndGggJiYgIShyZWxhdGl2ZS5ob3N0ID0gcmVsUGF0aC5zaGlmdCgpKSk7XG4gICAgICBpZiAoIXJlbGF0aXZlLmhvc3QpIHJlbGF0aXZlLmhvc3QgPSAnJztcbiAgICAgIGlmICghcmVsYXRpdmUuaG9zdG5hbWUpIHJlbGF0aXZlLmhvc3RuYW1lID0gJyc7XG4gICAgICBpZiAocmVsUGF0aFswXSAhPT0gJycpIHJlbFBhdGgudW5zaGlmdCgnJyk7XG4gICAgICBpZiAocmVsUGF0aC5sZW5ndGggPCAyKSByZWxQYXRoLnVuc2hpZnQoJycpO1xuICAgICAgcmVzdWx0LnBhdGhuYW1lID0gcmVsUGF0aC5qb2luKCcvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wYXRobmFtZSA9IHJlbGF0aXZlLnBhdGhuYW1lO1xuICAgIH1cbiAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuICAgIHJlc3VsdC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICAgIHJlc3VsdC5ob3N0ID0gcmVsYXRpdmUuaG9zdCB8fCAnJztcbiAgICByZXN1bHQuYXV0aCA9IHJlbGF0aXZlLmF1dGg7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVsYXRpdmUuaG9zdG5hbWUgfHwgcmVsYXRpdmUuaG9zdDtcbiAgICByZXN1bHQucG9ydCA9IHJlbGF0aXZlLnBvcnQ7XG4gICAgLy8gdG8gc3VwcG9ydCBodHRwLnJlcXVlc3RcbiAgICBpZiAocmVzdWx0LnBhdGhuYW1lIHx8IHJlc3VsdC5zZWFyY2gpIHtcbiAgICAgIHZhciBwID0gcmVzdWx0LnBhdGhuYW1lIHx8ICcnO1xuICAgICAgdmFyIHMgPSByZXN1bHQuc2VhcmNoIHx8ICcnO1xuICAgICAgcmVzdWx0LnBhdGggPSBwICsgcztcbiAgICB9XG4gICAgcmVzdWx0LnNsYXNoZXMgPSByZXN1bHQuc2xhc2hlcyB8fCByZWxhdGl2ZS5zbGFzaGVzO1xuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB2YXIgaXNTb3VyY2VBYnMgPSAocmVzdWx0LnBhdGhuYW1lICYmIHJlc3VsdC5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJyksXG4gICAgICBpc1JlbEFicyA9IChcbiAgICAgICAgICByZWxhdGl2ZS5ob3N0IHx8XG4gICAgICAgICAgcmVsYXRpdmUucGF0aG5hbWUgJiYgcmVsYXRpdmUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLydcbiAgICAgICksXG4gICAgICBtdXN0RW5kQWJzID0gKGlzUmVsQWJzIHx8IGlzU291cmNlQWJzIHx8XG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQuaG9zdCAmJiByZWxhdGl2ZS5wYXRobmFtZSkpLFxuICAgICAgcmVtb3ZlQWxsRG90cyA9IG11c3RFbmRBYnMsXG4gICAgICBzcmNQYXRoID0gcmVzdWx0LnBhdGhuYW1lICYmIHJlc3VsdC5wYXRobmFtZS5zcGxpdCgnLycpIHx8IFtdLFxuICAgICAgcmVsUGF0aCA9IHJlbGF0aXZlLnBhdGhuYW1lICYmIHJlbGF0aXZlLnBhdGhuYW1lLnNwbGl0KCcvJykgfHwgW10sXG4gICAgICBwc3ljaG90aWMgPSByZXN1bHQucHJvdG9jb2wgJiYgIXNsYXNoZWRQcm90b2NvbFtyZXN1bHQucHJvdG9jb2xdO1xuXG4gIC8vIGlmIHRoZSB1cmwgaXMgYSBub24tc2xhc2hlZCB1cmwsIHRoZW4gcmVsYXRpdmVcbiAgLy8gbGlua3MgbGlrZSAuLi8uLiBzaG91bGQgYmUgYWJsZVxuICAvLyB0byBjcmF3bCB1cCB0byB0aGUgaG9zdG5hbWUsIGFzIHdlbGwuICBUaGlzIGlzIHN0cmFuZ2UuXG4gIC8vIHJlc3VsdC5wcm90b2NvbCBoYXMgYWxyZWFkeSBiZWVuIHNldCBieSBub3cuXG4gIC8vIExhdGVyIG9uLCBwdXQgdGhlIGZpcnN0IHBhdGggcGFydCBpbnRvIHRoZSBob3N0IGZpZWxkLlxuICBpZiAocHN5Y2hvdGljKSB7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gJyc7XG4gICAgcmVzdWx0LnBvcnQgPSBudWxsO1xuICAgIGlmIChyZXN1bHQuaG9zdCkge1xuICAgICAgaWYgKHNyY1BhdGhbMF0gPT09ICcnKSBzcmNQYXRoWzBdID0gcmVzdWx0Lmhvc3Q7XG4gICAgICBlbHNlIHNyY1BhdGgudW5zaGlmdChyZXN1bHQuaG9zdCk7XG4gICAgfVxuICAgIHJlc3VsdC5ob3N0ID0gJyc7XG4gICAgaWYgKHJlbGF0aXZlLnByb3RvY29sKSB7XG4gICAgICByZWxhdGl2ZS5ob3N0bmFtZSA9IG51bGw7XG4gICAgICByZWxhdGl2ZS5wb3J0ID0gbnVsbDtcbiAgICAgIGlmIChyZWxhdGl2ZS5ob3N0KSB7XG4gICAgICAgIGlmIChyZWxQYXRoWzBdID09PSAnJykgcmVsUGF0aFswXSA9IHJlbGF0aXZlLmhvc3Q7XG4gICAgICAgIGVsc2UgcmVsUGF0aC51bnNoaWZ0KHJlbGF0aXZlLmhvc3QpO1xuICAgICAgfVxuICAgICAgcmVsYXRpdmUuaG9zdCA9IG51bGw7XG4gICAgfVxuICAgIG11c3RFbmRBYnMgPSBtdXN0RW5kQWJzICYmIChyZWxQYXRoWzBdID09PSAnJyB8fCBzcmNQYXRoWzBdID09PSAnJyk7XG4gIH1cblxuICBpZiAoaXNSZWxBYnMpIHtcbiAgICAvLyBpdCdzIGFic29sdXRlLlxuICAgIHJlc3VsdC5ob3N0ID0gKHJlbGF0aXZlLmhvc3QgfHwgcmVsYXRpdmUuaG9zdCA9PT0gJycpID9cbiAgICAgICAgICAgICAgICAgIHJlbGF0aXZlLmhvc3QgOiByZXN1bHQuaG9zdDtcbiAgICByZXN1bHQuaG9zdG5hbWUgPSAocmVsYXRpdmUuaG9zdG5hbWUgfHwgcmVsYXRpdmUuaG9zdG5hbWUgPT09ICcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmUuaG9zdG5hbWUgOiByZXN1bHQuaG9zdG5hbWU7XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICBzcmNQYXRoID0gcmVsUGF0aDtcbiAgICAvLyBmYWxsIHRocm91Z2ggdG8gdGhlIGRvdC1oYW5kbGluZyBiZWxvdy5cbiAgfSBlbHNlIGlmIChyZWxQYXRoLmxlbmd0aCkge1xuICAgIC8vIGl0J3MgcmVsYXRpdmVcbiAgICAvLyB0aHJvdyBhd2F5IHRoZSBleGlzdGluZyBmaWxlLCBhbmQgdGFrZSB0aGUgbmV3IHBhdGggaW5zdGVhZC5cbiAgICBpZiAoIXNyY1BhdGgpIHNyY1BhdGggPSBbXTtcbiAgICBzcmNQYXRoLnBvcCgpO1xuICAgIHNyY1BhdGggPSBzcmNQYXRoLmNvbmNhdChyZWxQYXRoKTtcbiAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuICAgIHJlc3VsdC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICB9IGVsc2UgaWYgKCF1dGlsLmlzTnVsbE9yVW5kZWZpbmVkKHJlbGF0aXZlLnNlYXJjaCkpIHtcbiAgICAvLyBqdXN0IHB1bGwgb3V0IHRoZSBzZWFyY2guXG4gICAgLy8gbGlrZSBocmVmPSc/Zm9vJy5cbiAgICAvLyBQdXQgdGhpcyBhZnRlciB0aGUgb3RoZXIgdHdvIGNhc2VzIGJlY2F1c2UgaXQgc2ltcGxpZmllcyB0aGUgYm9vbGVhbnNcbiAgICBpZiAocHN5Y2hvdGljKSB7XG4gICAgICByZXN1bHQuaG9zdG5hbWUgPSByZXN1bHQuaG9zdCA9IHNyY1BhdGguc2hpZnQoKTtcbiAgICAgIC8vb2NjYXRpb25hbHkgdGhlIGF1dGggY2FuIGdldCBzdHVjayBvbmx5IGluIGhvc3RcbiAgICAgIC8vdGhpcyBlc3BlY2lhbGx5IGhhcHBlbnMgaW4gY2FzZXMgbGlrZVxuICAgICAgLy91cmwucmVzb2x2ZU9iamVjdCgnbWFpbHRvOmxvY2FsMUBkb21haW4xJywgJ2xvY2FsMkBkb21haW4yJylcbiAgICAgIHZhciBhdXRoSW5Ib3N0ID0gcmVzdWx0Lmhvc3QgJiYgcmVzdWx0Lmhvc3QuaW5kZXhPZignQCcpID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ob3N0LnNwbGl0KCdAJykgOiBmYWxzZTtcbiAgICAgIGlmIChhdXRoSW5Ib3N0KSB7XG4gICAgICAgIHJlc3VsdC5hdXRoID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgICAgICByZXN1bHQuaG9zdCA9IHJlc3VsdC5ob3N0bmFtZSA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICAvL3RvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gICAgaWYgKCF1dGlsLmlzTnVsbChyZXN1bHQucGF0aG5hbWUpIHx8ICF1dGlsLmlzTnVsbChyZXN1bHQuc2VhcmNoKSkge1xuICAgICAgcmVzdWx0LnBhdGggPSAocmVzdWx0LnBhdGhuYW1lID8gcmVzdWx0LnBhdGhuYW1lIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdC5zZWFyY2ggPyByZXN1bHQuc2VhcmNoIDogJycpO1xuICAgIH1cbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKCFzcmNQYXRoLmxlbmd0aCkge1xuICAgIC8vIG5vIHBhdGggYXQgYWxsLiAgZWFzeS5cbiAgICAvLyB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQgdGhlIG90aGVyIHN0dWZmIGFib3ZlLlxuICAgIHJlc3VsdC5wYXRobmFtZSA9IG51bGw7XG4gICAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmIChyZXN1bHQuc2VhcmNoKSB7XG4gICAgICByZXN1bHQucGF0aCA9ICcvJyArIHJlc3VsdC5zZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGlmIGEgdXJsIEVORHMgaW4gLiBvciAuLiwgdGhlbiBpdCBtdXN0IGdldCBhIHRyYWlsaW5nIHNsYXNoLlxuICAvLyBob3dldmVyLCBpZiBpdCBlbmRzIGluIGFueXRoaW5nIGVsc2Ugbm9uLXNsYXNoeSxcbiAgLy8gdGhlbiBpdCBtdXN0IE5PVCBnZXQgYSB0cmFpbGluZyBzbGFzaC5cbiAgdmFyIGxhc3QgPSBzcmNQYXRoLnNsaWNlKC0xKVswXTtcbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2ggPSAoXG4gICAgICAocmVzdWx0Lmhvc3QgfHwgcmVsYXRpdmUuaG9zdCB8fCBzcmNQYXRoLmxlbmd0aCA+IDEpICYmXG4gICAgICAobGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicpIHx8IGxhc3QgPT09ICcnKTtcblxuICAvLyBzdHJpcCBzaW5nbGUgZG90cywgcmVzb2x2ZSBkb3VibGUgZG90cyB0byBwYXJlbnQgZGlyXG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBzcmNQYXRoLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICBsYXN0ID0gc3JjUGF0aFtpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHNyY1BhdGguc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoIW11c3RFbmRBYnMgJiYgIXJlbW92ZUFsbERvdHMpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHNyY1BhdGgudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAobXVzdEVuZEFicyAmJiBzcmNQYXRoWzBdICE9PSAnJyAmJlxuICAgICAgKCFzcmNQYXRoWzBdIHx8IHNyY1BhdGhbMF0uY2hhckF0KDApICE9PSAnLycpKSB7XG4gICAgc3JjUGF0aC51bnNoaWZ0KCcnKTtcbiAgfVxuXG4gIGlmIChoYXNUcmFpbGluZ1NsYXNoICYmIChzcmNQYXRoLmpvaW4oJy8nKS5zdWJzdHIoLTEpICE9PSAnLycpKSB7XG4gICAgc3JjUGF0aC5wdXNoKCcnKTtcbiAgfVxuXG4gIHZhciBpc0Fic29sdXRlID0gc3JjUGF0aFswXSA9PT0gJycgfHxcbiAgICAgIChzcmNQYXRoWzBdICYmIHNyY1BhdGhbMF0uY2hhckF0KDApID09PSAnLycpO1xuXG4gIC8vIHB1dCB0aGUgaG9zdCBiYWNrXG4gIGlmIChwc3ljaG90aWMpIHtcbiAgICByZXN1bHQuaG9zdG5hbWUgPSByZXN1bHQuaG9zdCA9IGlzQWJzb2x1dGUgPyAnJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNQYXRoLmxlbmd0aCA/IHNyY1BhdGguc2hpZnQoKSA6ICcnO1xuICAgIC8vb2NjYXRpb25hbHkgdGhlIGF1dGggY2FuIGdldCBzdHVjayBvbmx5IGluIGhvc3RcbiAgICAvL3RoaXMgZXNwZWNpYWxseSBoYXBwZW5zIGluIGNhc2VzIGxpa2VcbiAgICAvL3VybC5yZXNvbHZlT2JqZWN0KCdtYWlsdG86bG9jYWwxQGRvbWFpbjEnLCAnbG9jYWwyQGRvbWFpbjInKVxuICAgIHZhciBhdXRoSW5Ib3N0ID0gcmVzdWx0Lmhvc3QgJiYgcmVzdWx0Lmhvc3QuaW5kZXhPZignQCcpID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG4gICAgaWYgKGF1dGhJbkhvc3QpIHtcbiAgICAgIHJlc3VsdC5hdXRoID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbiAgbXVzdEVuZEFicyA9IG11c3RFbmRBYnMgfHwgKHJlc3VsdC5ob3N0ICYmIHNyY1BhdGgubGVuZ3RoKTtcblxuICBpZiAobXVzdEVuZEFicyAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG4gIH1cblxuICBpZiAoIXNyY1BhdGgubGVuZ3RoKSB7XG4gICAgcmVzdWx0LnBhdGhuYW1lID0gbnVsbDtcbiAgICByZXN1bHQucGF0aCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0LnBhdGhuYW1lID0gc3JjUGF0aC5qb2luKCcvJyk7XG4gIH1cblxuICAvL3RvIHN1cHBvcnQgcmVxdWVzdC5odHRwXG4gIGlmICghdXRpbC5pc051bGwocmVzdWx0LnBhdGhuYW1lKSB8fCAhdXRpbC5pc051bGwocmVzdWx0LnNlYXJjaCkpIHtcbiAgICByZXN1bHQucGF0aCA9IChyZXN1bHQucGF0aG5hbWUgPyByZXN1bHQucGF0aG5hbWUgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJlc3VsdC5zZWFyY2ggPyByZXN1bHQuc2VhcmNoIDogJycpO1xuICB9XG4gIHJlc3VsdC5hdXRoID0gcmVsYXRpdmUuYXV0aCB8fCByZXN1bHQuYXV0aDtcbiAgcmVzdWx0LnNsYXNoZXMgPSByZXN1bHQuc2xhc2hlcyB8fCByZWxhdGl2ZS5zbGFzaGVzO1xuICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblVybC5wcm90b3R5cGUucGFyc2VIb3N0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBob3N0ID0gdGhpcy5ob3N0O1xuICB2YXIgcG9ydCA9IHBvcnRQYXR0ZXJuLmV4ZWMoaG9zdCk7XG4gIGlmIChwb3J0KSB7XG4gICAgcG9ydCA9IHBvcnRbMF07XG4gICAgaWYgKHBvcnQgIT09ICc6Jykge1xuICAgICAgdGhpcy5wb3J0ID0gcG9ydC5zdWJzdHIoMSk7XG4gICAgfVxuICAgIGhvc3QgPSBob3N0LnN1YnN0cigwLCBob3N0Lmxlbmd0aCAtIHBvcnQubGVuZ3RoKTtcbiAgfVxuICBpZiAoaG9zdCkgdGhpcy5ob3N0bmFtZSA9IGhvc3Q7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNTdHJpbmc6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YoYXJnKSA9PT0gJ3N0cmluZyc7XG4gIH0sXG4gIGlzT2JqZWN0OiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gdHlwZW9mKGFyZykgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbiAgfSxcbiAgaXNOdWxsOiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gYXJnID09PSBudWxsO1xuICB9LFxuICBpc051bGxPclVuZGVmaW5lZDogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGFyZyA9PSBudWxsO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0ICcjL2NvbW1vbi9icm93c2VyJztcbmltcG9ydCB7IGdldEFjdGl2ZVRhYiwgbWFrZVBhdXNlLCBzZW5kQ21kLCByZXF1ZXN0IH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgQlVJTERfSU5fU0NSSVBUX1NSQywgVElNRU9VVF8yNEhPVVJTLCBUSU1FT1VUX01BWCwgSVNfREVWIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCAqIGFzIHRsZCBmcm9tICcjL2NvbW1vbi90bGQnO1xuaW1wb3J0ICogYXMgc3luYyBmcm9tICcuL3N5bmMnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGdldERhdGEsIGNoZWNrUmVtb3ZlIH0gZnJvbSAnLi91dGlscy9kYic7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi91dGlscy9pbml0JztcbmltcG9ydCB7IGdldE9wdGlvbiwgaG9va09wdGlvbnMgfSBmcm9tICcuL3V0aWxzL29wdGlvbnMnO1xuaW1wb3J0IHsgcG9wdXBUYWJzIH0gZnJvbSAnLi91dGlscy9wb3B1cC10cmFja2VyJztcbmltcG9ydCB7IGdldEluamVjdGVkU2NyaXB0cyB9IGZyb20gJy4vdXRpbHMvcHJlaW5qZWN0JztcbmltcG9ydCB7IFNDUklQVF9URU1QTEFURSwgcmVzZXRTY3JpcHRUZW1wbGF0ZSB9IGZyb20gJy4vdXRpbHMvdGVtcGxhdGUtaG9vayc7XG5pbXBvcnQgeyByZXNldFZhbHVlT3BlbmVyLCBhZGRWYWx1ZU9wZW5lciB9IGZyb20gJy4vdXRpbHMvdmFsdWVzJztcbmltcG9ydCB7IGNsZWFyUmVxdWVzdHNCeVRhYklkIH0gZnJvbSAnLi91dGlscy9yZXF1ZXN0cyc7XG5pbXBvcnQgJy4vdXRpbHMvY2xpcGJvYXJkJztcbmltcG9ydCAnLi91dGlscy9ob3RrZXlzJztcbmltcG9ydCAnLi91dGlscy9pY29uJztcbmltcG9ydCAnLi91dGlscy9ub3RpZmljYXRpb25zJztcbmltcG9ydCAnLi91dGlscy9zY3JpcHQnO1xuaW1wb3J0ICcuL3V0aWxzL3RhYnMnO1xuaW1wb3J0ICcuL3V0aWxzL3Rlc3Rlcic7XG5pbXBvcnQgJy4vdXRpbHMvdXBkYXRlJztcblxuaG9va09wdGlvbnMoKGNoYW5nZXMpID0+IHtcbiAgaWYgKCdhdXRvVXBkYXRlJyBpbiBjaGFuZ2VzKSB7XG4gICAgYXV0b1VwZGF0ZSgpO1xuICB9XG4gIGlmIChTQ1JJUFRfVEVNUExBVEUgaW4gY2hhbmdlcykge1xuICAgIHJlc2V0U2NyaXB0VGVtcGxhdGUoY2hhbmdlcyk7XG4gIH1cbiAgc2VuZENtZCgnVXBkYXRlT3B0aW9ucycsIGNoYW5nZXMpO1xufSk7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8eyBzY3JpcHRzOiBWTVNjcmlwdFtdLCBjYWNoZTogT2JqZWN0LCBzeW5jOiBPYmplY3QgfT59ICovXG4gIGFzeW5jIEdldERhdGEoaWRzKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoaWRzKTtcbiAgICBkYXRhLnN5bmMgPSBzeW5jLmdldFN0YXRlcygpO1xuICAgIHJldHVybiBkYXRhO1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fSAqL1xuICBhc3luYyBHZXRJbmplY3RlZCh7IHVybCwgZm9yY2VDb250ZW50IH0sIHNyYykge1xuICAgIGNvbnN0IHsgZnJhbWVJZCwgdGFiIH0gPSBzcmM7XG4gICAgY29uc3QgdGFiSWQgPSB0YWIuaWQ7XG4gICAgaWYgKCF1cmwpIHVybCA9IHNyYy51cmwgfHwgdGFiLnVybDtcbiAgICBpZiAoIWZyYW1lSWQpIHtcbiAgICAgIHJlc2V0VmFsdWVPcGVuZXIodGFiSWQpO1xuICAgICAgY2xlYXJSZXF1ZXN0c0J5VGFiSWQodGFiSWQpO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRJbmplY3RlZFNjcmlwdHModXJsLCB0YWJJZCwgZnJhbWVJZCwgZm9yY2VDb250ZW50KTtcbiAgICBjb25zdCB7IGZlZWRiYWNrLCBpbmplY3QsIHZhbE9wSWRzIH0gPSByZXM7XG4gICAgaW5qZWN0LmlzUG9wdXBTaG93biA9IHBvcHVwVGFic1t0YWJJZF07XG4gICAgLy8gSW5qZWN0aW5nIGtub3duIGNvbnRlbnQgc2NyaXB0cyB3aXRob3V0IHdhaXRpbmcgZm9yIEluamVjdGlvbkZlZWRiYWNrIG1lc3NhZ2UuXG4gICAgLy8gUnVubmluZyBpbiBhIHNlcGFyYXRlIHRhc2sgYmVjYXVzZSBpdCBtYXkgdGFrZSBhIGxvbmcgdGltZSB0byBzZXJpYWxpemUgZGF0YS5cbiAgICBpZiAoZmVlZGJhY2subGVuZ3RoKSB7XG4gICAgICBzZXRUaW1lb3V0KGNvbW1hbmRzLkluamVjdGlvbkZlZWRiYWNrLCAwLCB7IGZlZWRiYWNrIH0sIHNyYyk7XG4gICAgfVxuICAgIGFkZFZhbHVlT3BlbmVyKHRhYklkLCBmcmFtZUlkLCB2YWxPcElkcyk7XG4gICAgcmV0dXJuIGluamVjdDtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn0gKi9cbiAgYXN5bmMgR2V0VGFiRG9tYWluKCkge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IGdldEFjdGl2ZVRhYigpIHx8IHt9O1xuICAgIGNvbnN0IHVybCA9IHRhYi5wZW5kaW5nVXJsIHx8IHRhYi51cmwgfHwgJyc7XG4gICAgY29uc3QgaG9zdCA9IHVybC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW14vXSspfCQvKVsxXTtcbiAgICByZXR1cm4ge1xuICAgICAgdGFiLFxuICAgICAgZG9tYWluOiBob3N0ICYmIHRsZC5nZXREb21haW4oaG9zdCkgfHwgaG9zdCxcbiAgICB9O1xuICB9LFxuICAvKipcbiAgICogVGltZXJzIGluIGNvbnRlbnQgc2NyaXB0cyBhcmUgc2hhcmVkIHdpdGggdGhlIHdlYiBwYWdlIHNvIGl0IGNhbiBjbGVhciB0aGVtLlxuICAgKiBhd2FpdCBzZW5kQ21kKCdTZXRUaW1lb3V0JywgMTAwKSBpbiBpbmplY3RlZC9jb250ZW50XG4gICAqIGF3YWl0IGJyaWRnZS5zZW5kKCdTZXRUaW1lb3V0JywgMTAwKSBpbiBpbmplY3RlZC93ZWJcbiAgICovXG4gIFNldFRpbWVvdXQobXMpIHtcbiAgICByZXR1cm4gbXMgPiAwICYmIG1ha2VQYXVzZShtcyk7XG4gIH0sXG59KTtcblxuLy8gY29tbWFuZHMgdG8gc3luYyB1bmNvbmRpdGlvbmFsbHkgcmVnYXJkbGVzcyBvZiB0aGUgcmV0dXJuZWQgdmFsdWUgZnJvbSB0aGUgaGFuZGxlclxuY29uc3QgY29tbWFuZHNUb1N5bmMgPSBbXG4gICdNYXJrUmVtb3ZlZCcsXG4gICdNb3ZlJyxcbiAgJ1BhcnNlU2NyaXB0JyxcbiAgJ1JlbW92ZVNjcmlwdCcsXG4gICdVcGRhdGVTY3JpcHRJbmZvJyxcbl07XG4vLyBjb21tYW5kcyB0byBzeW5jIG9ubHkgaWYgdGhlIGhhbmRsZXIgcmV0dXJucyBhIHRydXRoeSB2YWx1ZVxuY29uc3QgY29tbWFuZHNUb1N5bmNJZlRydXRoeSA9IFtcbiAgJ0NoZWNrUmVtb3ZlJyxcbiAgJ0NoZWNrVXBkYXRlJyxcbiAgJ0NoZWNrVXBkYXRlQWxsJyxcbl07XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNvbW1hbmRNZXNzYWdlKHJlcSwgc3JjKSB7XG4gIGNvbnN0IHsgY21kIH0gPSByZXE7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNvbW1hbmRzW2NtZF0/LihyZXEuZGF0YSwgc3JjKTtcbiAgaWYgKGNvbW1hbmRzVG9TeW5jLmluY2x1ZGVzKGNtZClcbiAgfHwgcmVzICYmIGNvbW1hbmRzVG9TeW5jSWZUcnV0aHkuaW5jbHVkZXMoY21kKSkge1xuICAgIHN5bmMuc3luYygpO1xuICB9XG4gIC8vIGB1bmRlZmluZWRgIGlzIG5vdCB0cmFuc2ZlcmFibGUsIGJ1dCBgbnVsbGAgaXNcbiAgcmV0dXJuIHJlcyA/PyBudWxsO1xufVxuXG5mdW5jdGlvbiBhdXRvVXBkYXRlKCkge1xuICBjb25zdCBpbnRlcnZhbCA9IElTX0RFViA/IDEwMDAgOiAoK2dldE9wdGlvbignYXV0b1VwZGF0ZScpIHx8IDApICogVElNRU9VVF8yNEhPVVJTO1xuICBpZiAoIWludGVydmFsKSByZXR1cm47XG4gIGxldCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGdldE9wdGlvbignbGFzdFVwZGF0ZScpO1xuICBpZiAoZWxhcHNlZCA+PSBpbnRlcnZhbCkge1xuICAgIGhhbmRsZUNvbW1hbmRNZXNzYWdlKHsgY21kOiAnQ2hlY2tVcGRhdGVBbGwnIH0pO1xuICAgIGVsYXBzZWQgPSAwO1xuICB9XG4gIGNsZWFyVGltZW91dChhdXRvVXBkYXRlLnRpbWVyKTtcbiAgYXV0b1VwZGF0ZS50aW1lciA9IHNldFRpbWVvdXQoYXV0b1VwZGF0ZSwgTWF0aC5taW4oVElNRU9VVF9NQVgsIGludGVydmFsIC0gZWxhcHNlZCkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0QnVpbGRpbigpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXF1ZXN0KEJVSUxEX0lOX1NDUklQVF9TUkMsIHtcbiAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICBoZWFkZXJzOiB7IEFjY2VwdDogJ3RleHQveC11c2Vyc2NyaXB0LW1ldGEsKi8qJyB9LFxuICB9KTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBjb21tYW5kcy5QYXJzZVNjcmlwdCh7XG4gICAgdXJsOiBCVUlMRF9JTl9TQ1JJUFRfU1JDLFxuICAgIGNvZGU6IGRhdGEsXG4gICAgY3VzdG9tOiB7IGJ1aWxkSW46IHRydWUgfSxcbiAgfSk7XG4gIHN5bmMuc3luYygpO1xuXG4gIGlmIChyZXMud2hlcmUuaWQgIT09IDEpIHtcbiAgICB0aHJvdyBgd3JvbmcgaWQ6ICR7cmVzLndoZXJlLmlkfWA7XG4gIH1cbn1cblxuaW5pdGlhbGl6ZSgoKSA9PiB7XG4gIGdsb2JhbC5oYW5kbGVDb21tYW5kTWVzc2FnZSA9IGhhbmRsZUNvbW1hbmRNZXNzYWdlO1xuICBnbG9iYWwuZGVlcENvcHkgPSBkZWVwQ29weTtcbiAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcbiAgICBJU19GSVJFRk9YIC8vIGluIEZGIGEgcmVqZWN0ZWQgUHJvbWlzZSB2YWx1ZSBpcyB0cmFuc2ZlcnJlZCBvbmx5IGlmIGl0J3MgYW4gRXJyb3Igb2JqZWN0XG4gICAgICA/ICguLi5hcmdzKSA9PiBoYW5kbGVDb21tYW5kTWVzc2FnZSguLi5hcmdzKS5jYXRjaChlID0+IChcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZSBpbnN0YW5jZW9mIEVycm9yID8gZSA6IG5ldyBFcnJvcihlKSlcbiAgICAgICkpIC8vIERpZG4ndCB1c2UgYHRocm93YCB0byBhdm9pZCBpbnRlcnJ1cHRpb24gaW4gZGV2dG9vbHMgd2l0aCBwYXVzZS1vbi1leGNlcHRpb24gZW5hYmxlZC5cbiAgICAgIDogaGFuZGxlQ29tbWFuZE1lc3NhZ2UsXG4gICk7XG5cbiAgLy8gY2hlY2sgYW5kIGluc3RhbGwgdGhlIGJ1aWxkLWluIHNjcmlwdFxuICBpbml0QnVpbGRpbigpO1xuICBjb25zb2xlLmluZm8oJ2luaXRCdWlsZGluLi4uJyk7XG4gIHNldFRpbWVvdXQoYXV0b1VwZGF0ZSwgSVNfREVWID8gMSA6IDJlNCk7XG4gIHN5bmMuaW5pdGlhbGl6ZSgpO1xuICBjaGVja1JlbW92ZSgpO1xuICBzZXRJbnRlcnZhbChjaGVja1JlbW92ZSwgVElNRU9VVF8yNEhPVVJTKTtcbiAgY29uc3QgYXBpID0gZ2xvYmFsLmNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQ7XG4gIGlmIChhcGkpIHtcbiAgICAvLyBVc2luZyBkZWNsYXJhdGl2ZUNvbnRlbnQgdG8gcnVuIGNvbnRlbnQgc2NyaXB0cyBlYXJsaWVyIHRoYW4gZG9jdW1lbnRfc3RhcnRcbiAgICBhcGkub25QYWdlQ2hhbmdlZC5nZXRSdWxlcyhhc3luYyAoW3J1bGVdKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IHJ1bGU/LmlkO1xuICAgICAgY29uc3QgbmV3SWQgPSBwcm9jZXNzLmVudi5JTklUX0ZVTkNfTkFNRTtcbiAgICAgIGlmIChpZCA9PT0gbmV3SWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIGF3YWl0IGJyb3dzZXIuZGVjbGFyYXRpdmVDb250ZW50Lm9uUGFnZUNoYW5nZWQucmVtb3ZlUnVsZXMoW2lkXSk7XG4gICAgICB9XG4gICAgICBhcGkub25QYWdlQ2hhbmdlZC5hZGRSdWxlcyhbe1xuICAgICAgICBpZDogbmV3SWQsXG4gICAgICAgIGNvbmRpdGlvbnM6IFtcbiAgICAgICAgICBuZXcgYXBpLlBhZ2VTdGF0ZU1hdGNoZXIoe1xuICAgICAgICAgICAgcGFnZVVybDogeyB1cmxDb250YWluczogJzovLycgfSwgLy8gZXNzZW50aWFsbHkgbGlrZSA8YWxsX3VybHM+XG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICBuZXcgYXBpLlJlcXVlc3RDb250ZW50U2NyaXB0KHtcbiAgICAgICAgICAgIGpzOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5jb250ZW50X3NjcmlwdHNbMF0uanMsXG4gICAgICAgICAgICAvLyBOb3QgdXNpbmcgYGFsbEZyYW1lczp0cnVlYCBhcyB0aGVyZSdzIG5vIGltcHJvdmVtZW50IGluIGZyYW1lc1xuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfV0pO1xuICAgIH0pO1xuICB9XG59KTtcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnIy9jb21tb24vZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEV2ZW50RW1pdHRlcihbXG4gICdzY3JpcHRFZGl0JyxcbiAgJ3NjcmlwdENoYW5nZWQnLFxuXSk7XG4iLCJpbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0U2NyaXB0cyB9IGZyb20gJy4uL3V0aWxzL2RiJztcblxuZXhwb3J0IGNvbnN0IHNjcmlwdCA9IHtcbiAgLyoqXG4gICAqIFVwZGF0ZSBhbiBleGlzdGluZyBzY3JpcHQgaWRlbnRpZmllZCBieSB0aGUgcHJvdmlkZWQgaWRcbiAgICogQHBhcmFtIHt7IGlkLCBjb2RlLCBtZXNzYWdlLCBpc05ldywgY29uZmlnLCBjdXN0b20sIHByb3BzLCB1cGRhdGUgfX0gZGF0YVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHsgaXNOZXc/LCB1cGRhdGUsIHdoZXJlIH0+fVxuICAgKi9cbiAgdXBkYXRlOiBjb21tYW5kcy5QYXJzZVNjcmlwdCxcbiAgLyoqXG4gICAqIExpc3QgYWxsIGF2YWlsYWJsZSBzY3JpcHRzLCB3aXRob3V0IHNjcmlwdCBjb2RlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Vk1TY3JpcHRbXT59XG4gICAqL1xuICBsaXN0OiBhc3luYyAoKSA9PiBnZXRTY3JpcHRzKCksXG4gIC8qKlxuICAgKiBHZXQgc2NyaXB0IGNvZGUgb2YgYW4gZXhpc3Rpbmcgc2NyaXB0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBnZXQ6IGNvbW1hbmRzLkdldFNjcmlwdENvZGUsXG4gIC8qKlxuICAgKiBSZW1vdmUgc2NyaXB0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgcmVtb3ZlOiBpZCA9PiBjb21tYW5kcy5NYXJrUmVtb3ZlZCh7IGlkLCByZW1vdmVkOiB0cnVlIH0pLFxufTtcbiIsImltcG9ydCB7XG4gIGRlYm91bmNlLCBub3JtYWxpemVLZXlzLCByZXF1ZXN0LCBub29wLCBtYWtlUGF1c2UsIGVuc3VyZUFycmF5LCBzZW5kQ21kLFxufSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBUSU1FT1VUX0hPVVIgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHtcbiAgZm9yRWFjaEVudHJ5LCBvYmplY3RTZXQsIG9iamVjdFBpY2ssXG59IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQge1xuICBnZXRFdmVudEVtaXR0ZXIsIGdldE9wdGlvbiwgc2V0T3B0aW9uLCBob29rT3B0aW9ucyxcbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgc29ydFNjcmlwdHMsXG4gIHVwZGF0ZVNjcmlwdEluZm8sXG59IGZyb20gJy4uL3V0aWxzL2RiJztcbmltcG9ydCB7IHNjcmlwdCBhcyBwbHVnaW5TY3JpcHQgfSBmcm9tICcuLi9wbHVnaW4nO1xuXG5jb25zdCBzZXJ2aWNlTmFtZXMgPSBbXTtcbmNvbnN0IHNlcnZpY2VDbGFzc2VzID0gW107XG5jb25zdCBzZXJ2aWNlcyA9IHt9O1xuY29uc3QgYXV0b1N5bmMgPSBkZWJvdW5jZShzeW5jLCBUSU1FT1VUX0hPVVIpO1xubGV0IHdvcmtpbmcgPSBQcm9taXNlLnJlc29sdmUoKTtcbmxldCBzeW5jQ29uZmlnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUZpbGVuYW1lKHsgbmFtZSwgdXJpIH0pIHtcbiAgLy8gV2hlbiBnZXQgb3IgcmVtb3ZlLCBjdXJyZW50IG5hbWUgc2hvdWxkIGJlIHByZWZlcmVkXG4gIGlmIChuYW1lKSByZXR1cm4gbmFtZTtcbiAgLy8gb3RoZXJ3aXNlIHVyaSBkZXJpdmVkIG5hbWUgc2hvdWxkIGJlIHByZWZlcmVkXG4gIC8vIHVyaSBpcyBhbHJlYWR5IGVuY29kZWQgYnkgYGVuY29kZUZpbGVuYW1lYFxuICByZXR1cm4gYHZtQDItJHt1cml9YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1NjcmlwdEZpbGUobmFtZSkge1xuICByZXR1cm4gL152bSg/OkBcXGQrKT8tLy50ZXN0KG5hbWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSSShuYW1lKSB7XG4gIGNvbnN0IGkgPSBuYW1lLmluZGV4T2YoJy0nKTtcbiAgY29uc3QgWywgdmVyc2lvbl0gPSBuYW1lLnNsaWNlKDAsIGkpLnNwbGl0KCdAJyk7XG4gIGlmICh2ZXJzaW9uID09PSAnMicpIHtcbiAgICAvLyB1cmkgaXMgZW5jb2RlZCBieSBgZW5jb2RlZEZpbGVuYW1lYCwgc28gd2Ugc2hvdWxkIG5vdCBkZWNvZGUgaXQgaGVyZVxuICAgIHJldHVybiBuYW1lLnNsaWNlKGkgKyAxKTtcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQobmFtZS5zbGljZSgzKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBuYW1lLnNsaWNlKDMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDb25maWcoKSB7XG4gIGZ1bmN0aW9uIGdldChrZXksIGRlZikge1xuICAgIGNvbnN0IGtleXMgPSBub3JtYWxpemVLZXlzKGtleSk7XG4gICAga2V5cy51bnNoaWZ0KCdzeW5jJyk7XG4gICAgcmV0dXJuIGdldE9wdGlvbihrZXlzLCBkZWYpO1xuICB9XG4gIGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5KTtcbiAgICBrZXlzLnVuc2hpZnQoJ3N5bmMnKTtcbiAgICBzZXRPcHRpb24oa2V5cywgdmFsdWUpO1xuICB9XG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbGV0IGNvbmZpZyA9IGdldE9wdGlvbignc3luYycpO1xuICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2VydmljZXMpIHtcbiAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgc2VydmljZXM6IHt9LFxuICAgICAgfTtcbiAgICAgIHNldChbXSwgY29uZmlnKTtcbiAgICB9XG4gIH1cbiAgaW5pdCgpO1xuICByZXR1cm4geyBnZXQsIHNldCB9O1xufVxuZnVuY3Rpb24gc2VydmljZUNvbmZpZyhuYW1lKSB7XG4gIGZ1bmN0aW9uIGdldEtleXMoa2V5KSB7XG4gICAgY29uc3Qga2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5KTtcbiAgICBrZXlzLnVuc2hpZnQoJ3NlcnZpY2VzJywgbmFtZSk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0KGtleSwgZGVmKSB7XG4gICAgcmV0dXJuIHN5bmNDb25maWcuZ2V0KGdldEtleXMoa2V5KSwgZGVmKTtcbiAgfVxuICBmdW5jdGlvbiBzZXQoa2V5LCB2YWwpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGtleTo6Zm9yRWFjaEVudHJ5KChbaywgdl0pID0+IHtcbiAgICAgICAgc3luY0NvbmZpZy5zZXQoZ2V0S2V5cyhrKSwgdik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3luY0NvbmZpZy5zZXQoZ2V0S2V5cyhrZXkpLCB2YWwpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzeW5jQ29uZmlnLnNldChnZXRLZXlzKCksIHt9KTtcbiAgfVxuICByZXR1cm4geyBnZXQsIHNldCwgY2xlYXIgfTtcbn1cbmZ1bmN0aW9uIHNlcnZpY2VTdGF0ZSh2YWxpZFN0YXRlcywgaW5pdGlhbFN0YXRlLCBvbkNoYW5nZSkge1xuICBsZXQgc3RhdGUgPSBpbml0aWFsU3RhdGUgfHwgdmFsaWRTdGF0ZXNbMF07XG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgZnVuY3Rpb24gc2V0KG5ld1N0YXRlKSB7XG4gICAgaWYgKHZhbGlkU3RhdGVzLmluY2x1ZGVzKG5ld1N0YXRlKSkge1xuICAgICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgIGlmIChvbkNoYW5nZSkgb25DaGFuZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIHN0YXRlOicsIG5ld1N0YXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldCgpO1xuICB9XG4gIGZ1bmN0aW9uIGlzKHN0YXRlcykge1xuICAgIHJldHVybiBlbnN1cmVBcnJheShzdGF0ZXMpLmluY2x1ZGVzKHN0YXRlKTtcbiAgfVxuICByZXR1cm4geyBnZXQsIHNldCwgaXMgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZXMoKSB7XG4gIHJldHVybiBzZXJ2aWNlTmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgY29uc3Qgc2VydmljZSA9IHNlcnZpY2VzW25hbWVdO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBzZXJ2aWNlLm5hbWUsXG4gICAgICBkaXNwbGF5TmFtZTogc2VydmljZS5kaXNwbGF5TmFtZSxcbiAgICAgIGF1dGhTdGF0ZTogc2VydmljZS5hdXRoU3RhdGUuZ2V0KCksXG4gICAgICBzeW5jU3RhdGU6IHNlcnZpY2Uuc3luY1N0YXRlLmdldCgpLFxuICAgICAgbGFzdFN5bmM6IHNlcnZpY2UuY29uZmlnLmdldCgnbWV0YScsIHt9KS5sYXN0U3luYyxcbiAgICAgIHByb2dyZXNzOiBzZXJ2aWNlLnByb2dyZXNzLFxuICAgICAgcHJvcGVydGllczogc2VydmljZS5wcm9wZXJ0aWVzLFxuICAgICAgdXNlckNvbmZpZzogc2VydmljZS5nZXRVc2VyQ29uZmlnKCksXG4gICAgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcmlwdERhdGEoc2NyaXB0LCBzeW5jVmVyc2lvbiwgZXh0cmEpIHtcbiAgbGV0IGRhdGE7XG4gIGlmIChzeW5jVmVyc2lvbiA9PT0gMikge1xuICAgIGRhdGEgPSB7XG4gICAgICB2ZXJzaW9uOiBzeW5jVmVyc2lvbixcbiAgICAgIGN1c3RvbTogc2NyaXB0LmN1c3RvbSxcbiAgICAgIGNvbmZpZzogc2NyaXB0LmNvbmZpZyxcbiAgICAgIHByb3BzOiBvYmplY3RQaWNrKHNjcmlwdC5wcm9wcywgWydsYXN0VXBkYXRlZCddKSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHN5bmNWZXJzaW9uID09PSAxKSB7XG4gICAgZGF0YSA9IHtcbiAgICAgIHZlcnNpb246IHN5bmNWZXJzaW9uLFxuICAgICAgbW9yZToge1xuICAgICAgICBjdXN0b206IHNjcmlwdC5jdXN0b20sXG4gICAgICAgIGVuYWJsZWQ6IHNjcmlwdC5jb25maWcuZW5hYmxlZCxcbiAgICAgICAgdXBkYXRlOiBzY3JpcHQuY29uZmlnLnNob3VsZFVwZGF0ZSxcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IHNjcmlwdC5wcm9wcy5sYXN0VXBkYXRlZCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihkYXRhLCBleHRyYSk7XG59XG5mdW5jdGlvbiBwYXJzZVNjcmlwdERhdGEocmF3KSB7XG4gIGNvbnN0IGRhdGEgPSB7fTtcbiAgdHJ5IHtcbiAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgZGF0YS5jb2RlID0gb2JqLmNvZGU7XG4gICAgaWYgKG9iai52ZXJzaW9uID09PSAyKSB7XG4gICAgICBkYXRhLmNvbmZpZyA9IG9iai5jb25maWc7XG4gICAgICBkYXRhLmN1c3RvbSA9IG9iai5jdXN0b207XG4gICAgICBkYXRhLnByb3BzID0gb2JqLnByb3BzO1xuICAgIH0gZWxzZSBpZiAob2JqLnZlcnNpb24gPT09IDEpIHtcbiAgICAgIGlmIChvYmoubW9yZSkge1xuICAgICAgICBkYXRhLmN1c3RvbSA9IG9iai5tb3JlLmN1c3RvbTtcbiAgICAgICAgZGF0YS5jb25maWcgPSBvYmplY3RQdXJpZnkoe1xuICAgICAgICAgIGVuYWJsZWQ6IG9iai5tb3JlLmVuYWJsZWQsXG4gICAgICAgICAgc2hvdWxkVXBkYXRlOiBvYmoubW9yZS51cGRhdGUsXG4gICAgICAgIH0pO1xuICAgICAgICBkYXRhLnByb3BzID0gb2JqZWN0UHVyaWZ5KHtcbiAgICAgICAgICBsYXN0VXBkYXRlZDogb2JqLm1vcmUubGFzdFVwZGF0ZWQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGRhdGEuY29kZSA9IHJhdztcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0UHVyaWZ5KG9iaikge1xuICAvLyBSZW1vdmUga2V5cyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXNcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIG9iai5mb3JFYWNoKG9iamVjdFB1cmlmeSk7XG4gIH0gZWxzZSBpZiAob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgb2JqOjpmb3JFYWNoRW50cnkoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgIGVsc2Ugb2JqZWN0UHVyaWZ5KHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBzZXJ2aWNlRmFjdG9yeShiYXNlKSB7XG4gIGNvbnN0IFNlcnZpY2UgPSBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfTtcbiAgU2VydmljZS5wcm90b3R5cGUgPSBiYXNlO1xuICBTZXJ2aWNlLmV4dGVuZCA9IGV4dGVuZFNlcnZpY2U7XG4gIHJldHVybiBTZXJ2aWNlO1xufVxuZnVuY3Rpb24gZXh0ZW5kU2VydmljZShvcHRpb25zKSB7XG4gIHJldHVybiBzZXJ2aWNlRmFjdG9yeShPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUodGhpcy5wcm90b3R5cGUpLCBvcHRpb25zKSk7XG59XG5cbmNvbnN0IG9uU3RhdGVDaGFuZ2UgPSBkZWJvdW5jZSgoKSA9PiB7XG4gIHNlbmRDbWQoJ1VwZGF0ZVN5bmMnLCBnZXRTdGF0ZXMoKSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IEJhc2VTZXJ2aWNlID0gc2VydmljZUZhY3Rvcnkoe1xuICBuYW1lOiAnYmFzZScsXG4gIGRpc3BsYXlOYW1lOiAnQmFzZVNlcnZpY2UnLFxuICBkZWxheVRpbWU6IDEwMDAsXG4gIHVybFByZWZpeDogJycsXG4gIG1ldGFGaWxlOiAnVmlvbGVudG1vbmtleScsXG4gIHByb3BlcnRpZXM6IHtcbiAgICBhdXRoVHlwZTogJ29hdXRoJyxcbiAgfSxcbiAgZ2V0VXNlckNvbmZpZzogbm9vcCxcbiAgc2V0VXNlckNvbmZpZzogbm9vcCxcbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnByb2dyZXNzID0ge1xuICAgICAgZmluaXNoZWQ6IDAsXG4gICAgICB0b3RhbDogMCxcbiAgICB9O1xuICAgIHRoaXMuY29uZmlnID0gc2VydmljZUNvbmZpZyh0aGlzLm5hbWUpO1xuICAgIHRoaXMuYXV0aFN0YXRlID0gc2VydmljZVN0YXRlKFtcbiAgICAgICdpZGxlJyxcbiAgICAgICduby1hdXRoJyxcbiAgICAgICdpbml0aWFsaXppbmcnLFxuICAgICAgJ2F1dGhvcml6aW5nJywgLy8gaW4gY2FzZSBzb21lIHNlcnZpY2VzIHJlcXVpcmUgYXN5bmNocm9ub3VzIHJlcXVlc3RzIHRvIGdldCBhY2Nlc3NfdG9rZW5zXG4gICAgICAnYXV0aG9yaXplZCcsXG4gICAgICAndW5hdXRob3JpemVkJyxcbiAgICAgICdlcnJvcicsXG4gICAgXSwgbnVsbCwgb25TdGF0ZUNoYW5nZSk7XG4gICAgdGhpcy5zeW5jU3RhdGUgPSBzZXJ2aWNlU3RhdGUoW1xuICAgICAgJ2lkbGUnLFxuICAgICAgJ3JlYWR5JyxcbiAgICAgICdzeW5jaW5nJyxcbiAgICAgICdlcnJvcicsXG4gICAgXSwgbnVsbCwgb25TdGF0ZUNoYW5nZSk7XG4gICAgdGhpcy5sYXN0RmV0Y2ggPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLnN0YXJ0U3luYyA9IHRoaXMuc3luY0ZhY3RvcnkoKTtcbiAgICBjb25zdCBldmVudHMgPSBnZXRFdmVudEVtaXR0ZXIoKTtcbiAgICBbJ29uJywgJ29mZicsICdmaXJlJ11cbiAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzW2tleV0gPSAoLi4uYXJncykgPT4geyBldmVudHNba2V5XSguLi5hcmdzKTsgfTtcbiAgICB9KTtcbiAgfSxcbiAgbG9nKC4uLmFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyguLi5hcmdzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH0sXG4gIHN5bmNGYWN0b3J5KCkge1xuICAgIGxldCBwcm9taXNlO1xuICAgIGxldCBkZWJvdW5jZWRSZXNvbHZlO1xuICAgIGNvbnN0IHNob3VsZFN5bmMgPSAoKSA9PiB0aGlzLmF1dGhTdGF0ZS5pcygnYXV0aG9yaXplZCcpICYmIGdldEN1cnJlbnQoKSA9PT0gdGhpcy5uYW1lO1xuICAgIGNvbnN0IGdldFJlYWR5ID0gKCkgPT4ge1xuICAgICAgaWYgKCFzaG91bGRTeW5jKCkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIHRoaXMubG9nKCdSZWFkeSB0byBzeW5jOicsIHRoaXMuZGlzcGxheU5hbWUpO1xuICAgICAgdGhpcy5zeW5jU3RhdGUuc2V0KCdyZWFkeScpO1xuICAgICAgd29ya2luZyA9IHdvcmtpbmcudGhlbigoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBkZWJvdW5jZWRSZXNvbHZlID0gZGVib3VuY2UocmVzb2x2ZSwgMTAgKiAxMDAwKTtcbiAgICAgICAgZGVib3VuY2VkUmVzb2x2ZSgpO1xuICAgICAgfSkpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChzaG91bGRTeW5jKCkpIHJldHVybiB0aGlzLnN5bmMoKTtcbiAgICAgICAgdGhpcy5zeW5jU3RhdGUuc2V0KCdpZGxlJyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHsgY29uc29sZS5lcnJvcihlcnIpOyB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgZGVib3VuY2VkUmVzb2x2ZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICAgIHByb21pc2UgPSB3b3JraW5nO1xuICAgIH07XG4gICAgZnVuY3Rpb24gc3RhcnRTeW5jKCkge1xuICAgICAgaWYgKCFwcm9taXNlKSBnZXRSZWFkeSgpO1xuICAgICAgaWYgKGRlYm91bmNlZFJlc29sdmUpIGRlYm91bmNlZFJlc29sdmUoKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICByZXR1cm4gc3RhcnRTeW5jO1xuICB9LFxuICBwcmVwYXJlSGVhZGVycygpIHtcbiAgICB0aGlzLmhlYWRlcnMgPSB7fTtcbiAgfSxcbiAgcHJlcGFyZSgpIHtcbiAgICB0aGlzLmF1dGhTdGF0ZS5zZXQoJ2luaXRpYWxpemluZycpO1xuICAgIHJldHVybiAodGhpcy5pbml0VG9rZW4oKSA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnVzZXIoKSkgOiBQcm9taXNlLnJlamVjdCh7XG4gICAgICB0eXBlOiAnbm8tYXV0aCcsXG4gICAgfSkpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5hdXRoU3RhdGUuc2V0KCdhdXRob3JpemVkJyk7XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgaWYgKFsnbm8tYXV0aCcsICd1bmF1dGhvcml6ZWQnXS5pbmNsdWRlcyhlcnI/LnR5cGUpKSB7XG4gICAgICAgIHRoaXMuYXV0aFN0YXRlLnNldChlcnIudHlwZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHRoaXMuYXV0aFN0YXRlLnNldCgnZXJyb3InKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3luY1N0YXRlLnNldCgnaWRsZScpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9LFxuICBjaGVja1N5bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZSgpXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5zdGFydFN5bmMoKSk7XG4gIH0sXG4gIHVzZXI6IG5vb3AsXG4gIGFjcXVpcmVMb2NrOiBub29wLFxuICByZWxlYXNlTG9jazogbm9vcCxcbiAgaGFuZGxlTWV0YUVycm9yKGVycikge1xuICAgIHRocm93IGVycjtcbiAgfSxcbiAgZ2V0TWV0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoeyBuYW1lOiB0aGlzLm1ldGFGaWxlIH0pXG4gICAgLnRoZW4oZGF0YSA9PiBKU09OLnBhcnNlKGRhdGEpKVxuICAgIC5jYXRjaChlcnIgPT4gdGhpcy5oYW5kbGVNZXRhRXJyb3IoZXJyKSlcbiAgICAudGhlbihkYXRhID0+ICh7XG4gICAgICBuYW1lOiB0aGlzLm1ldGFGaWxlLFxuICAgICAgZGF0YSxcbiAgICB9KSk7XG4gIH0sXG4gIGluaXRUb2tlbigpIHtcbiAgICB0aGlzLnByZXBhcmVIZWFkZXJzKCk7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmNvbmZpZy5nZXQoJ3Rva2VuJyk7XG4gICAgdGhpcy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogbnVsbDtcbiAgICByZXR1cm4gISF0b2tlbjtcbiAgfSxcbiAgbG9hZERhdGEob3B0aW9ucykge1xuICAgIGNvbnN0IHsgcHJvZ3Jlc3MgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBkZWxheSA9IHRoaXMuZGVsYXlUaW1lIH0gPSBvcHRpb25zO1xuICAgIGxldCBsYXN0RmV0Y2ggPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGxhc3RGZXRjaCA9IHRoaXMubGFzdEZldGNoXG4gICAgICAudGhlbih0cyA9PiBtYWtlUGF1c2UoZGVsYXkgLSAoRGF0ZS5ub3coKSAtIHRzKSkpXG4gICAgICAudGhlbigoKSA9PiBEYXRlLm5vdygpKTtcbiAgICAgIHRoaXMubGFzdEZldGNoID0gbGFzdEZldGNoO1xuICAgIH1cbiAgICBwcm9ncmVzcy50b3RhbCArPSAxO1xuICAgIG9uU3RhdGVDaGFuZ2UoKTtcbiAgICByZXR1cm4gbGFzdEZldGNoLnRoZW4oKCkgPT4ge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5oZWFkZXJzLCBvcHRpb25zLmhlYWRlcnMpO1xuICAgICAgbGV0IHsgdXJsIH0gPSBvcHRpb25zO1xuICAgICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHVybCA9IChvcHRpb25zLnByZWZpeCA/PyB0aGlzLnVybFByZWZpeCkgKyB1cmw7XG4gICAgICByZXR1cm4gcmVxdWVzdCh1cmwsIG9wdGlvbnMpO1xuICAgIH0pXG4gICAgLnRoZW4oKHsgZGF0YSB9KSA9PiAoeyBkYXRhIH0pLCBlcnJvciA9PiAoeyBlcnJvciB9KSlcbiAgICAudGhlbigoeyBkYXRhLCBlcnJvciB9KSA9PiB7XG4gICAgICBwcm9ncmVzcy5maW5pc2hlZCArPSAxO1xuICAgICAgb25TdGF0ZUNoYW5nZSgpO1xuICAgICAgaWYgKGVycm9yKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH0sXG4gIGdldExvY2FsRGF0YSgpIHtcbiAgICByZXR1cm4gcGx1Z2luU2NyaXB0Lmxpc3QoKTtcbiAgfSxcbiAgZ2V0U3luY0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TWV0YSgpXG4gICAgLnRoZW4ocmVtb3RlTWV0YSA9PiBQcm9taXNlLmFsbChbXG4gICAgICByZW1vdGVNZXRhLFxuICAgICAgdGhpcy5saXN0KCksXG4gICAgICB0aGlzLmdldExvY2FsRGF0YSgpLFxuICAgIF0pKTtcbiAgfSxcbiAgc3luYygpIHtcbiAgICB0aGlzLnByb2dyZXNzID0ge1xuICAgICAgZmluaXNoZWQ6IDAsXG4gICAgICB0b3RhbDogMCxcbiAgICB9O1xuICAgIHRoaXMuc3luY1N0YXRlLnNldCgnc3luY2luZycpO1xuICAgIC8vIEF2b2lkIHNpbXVsdGFuZW91cyByZXF1ZXN0c1xuICAgIHJldHVybiB0aGlzLnByZXBhcmUoKVxuICAgIC50aGVuKCgpID0+IHRoaXMuZ2V0U3luY0RhdGEoKSlcbiAgICAudGhlbihkYXRhID0+IFByb21pc2UucmVzb2x2ZSh0aGlzLmFjcXVpcmVMb2NrKCkpLnRoZW4oKCkgPT4gZGF0YSkpXG4gICAgLnRoZW4oKFtyZW1vdGVNZXRhLCByZW1vdGVEYXRhLCBsb2NhbERhdGFdKSA9PiB7XG4gICAgICBjb25zdCByZW1vdGVNZXRhRGF0YSA9IHJlbW90ZU1ldGEuZGF0YSB8fCB7fTtcbiAgICAgIGNvbnN0IHJlbW90ZU1ldGFJbmZvID0gcmVtb3RlTWV0YURhdGEuaW5mbyB8fCB7fTtcbiAgICAgIGNvbnN0IHJlbW90ZVRpbWVzdGFtcCA9IHJlbW90ZU1ldGFEYXRhLnRpbWVzdGFtcCB8fCAwO1xuICAgICAgbGV0IHJlbW90ZUNoYW5nZWQgPSAhcmVtb3RlVGltZXN0YW1wXG4gICAgICAgIHx8IE9iamVjdC5rZXlzKHJlbW90ZU1ldGFJbmZvKS5sZW5ndGggIT09IHJlbW90ZURhdGEubGVuZ3RoO1xuICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IGdsb2JhbExhc3RNb2RpZmllZCA9IGdldE9wdGlvbignbGFzdE1vZGlmaWVkJyk7XG4gICAgICBjb25zdCByZW1vdGVJdGVtTWFwID0ge307XG4gICAgICBjb25zdCBsb2NhbE1ldGEgPSB0aGlzLmNvbmZpZy5nZXQoJ21ldGEnLCB7fSk7XG4gICAgICBjb25zdCBmaXJzdFN5bmMgPSAhbG9jYWxNZXRhLnRpbWVzdGFtcDtcbiAgICAgIGNvbnN0IG91dGRhdGVkID0gZmlyc3RTeW5jIHx8IHJlbW90ZVRpbWVzdGFtcCA+IGxvY2FsTWV0YS50aW1lc3RhbXA7XG4gICAgICB0aGlzLmxvZygnRmlyc3Qgc3luYzonLCBmaXJzdFN5bmMpO1xuICAgICAgdGhpcy5sb2coJ091dGRhdGVkOicsIG91dGRhdGVkLCAnKCcsICdsb2NhbDonLCBsb2NhbE1ldGEudGltZXN0YW1wLCAncmVtb3RlOicsIHJlbW90ZVRpbWVzdGFtcCwgJyknKTtcbiAgICAgIGNvbnN0IHB1dExvY2FsID0gW107XG4gICAgICBjb25zdCBwdXRSZW1vdGUgPSBbXTtcbiAgICAgIGNvbnN0IGRlbFJlbW90ZSA9IFtdO1xuICAgICAgY29uc3QgZGVsTG9jYWwgPSBbXTtcbiAgICAgIGNvbnN0IHVwZGF0ZUxvY2FsID0gW107XG4gICAgICByZW1vdGVNZXRhRGF0YS5pbmZvID0gcmVtb3RlRGF0YS5yZWR1Y2UoKGluZm8sIGl0ZW0pID0+IHtcbiAgICAgICAgcmVtb3RlSXRlbU1hcFtpdGVtLnVyaV0gPSBpdGVtO1xuICAgICAgICBsZXQgaXRlbUluZm8gPSByZW1vdGVNZXRhSW5mb1tpdGVtLnVyaV07XG4gICAgICAgIGlmICghaXRlbUluZm8pIHtcbiAgICAgICAgICBpdGVtSW5mbyA9IHt9O1xuICAgICAgICAgIHJlbW90ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm9baXRlbS51cmldID0gaXRlbUluZm87XG4gICAgICAgIGlmICghaXRlbUluZm8ubW9kaWZpZWQpIHtcbiAgICAgICAgICBpdGVtSW5mby5tb2RpZmllZCA9IG5vdztcbiAgICAgICAgICByZW1vdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgIH0sIHt9KTtcbiAgICAgIGxvY2FsRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcHJvcHM6IHsgdXJpLCBwb3NpdGlvbiwgbGFzdE1vZGlmaWVkIH0gfSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IHJlbW90ZUluZm8gPSByZW1vdGVNZXRhRGF0YS5pbmZvW3VyaV07XG4gICAgICAgIGNvbnN0IHJlbW90ZUl0ZW0gPSByZW1vdGVJdGVtTWFwW3VyaV07XG4gICAgICAgIGlmIChyZW1vdGVJbmZvICYmIHJlbW90ZUl0ZW0pIHtcbiAgICAgICAgICBpZiAoZmlyc3RTeW5jIHx8ICFsYXN0TW9kaWZpZWQgfHwgcmVtb3RlSW5mby5tb2RpZmllZCA+IGxhc3RNb2RpZmllZCkge1xuICAgICAgICAgICAgcHV0TG9jYWwucHVzaCh7IGxvY2FsOiBpdGVtLCByZW1vdGU6IHJlbW90ZUl0ZW0sIGluZm86IHJlbW90ZUluZm8gfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyZW1vdGVJbmZvLm1vZGlmaWVkIDwgbGFzdE1vZGlmaWVkKSB7XG4gICAgICAgICAgICAgIHB1dFJlbW90ZS5wdXNoKHsgbG9jYWw6IGl0ZW0sIHJlbW90ZTogcmVtb3RlSXRlbSB9KTtcbiAgICAgICAgICAgICAgcmVtb3RlSW5mby5tb2RpZmllZCA9IGxhc3RNb2RpZmllZDtcbiAgICAgICAgICAgICAgcmVtb3RlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVtb3RlSW5mby5wb3NpdGlvbiAhPT0gcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgaWYgKHJlbW90ZUluZm8ucG9zaXRpb24gJiYgZ2xvYmFsTGFzdE1vZGlmaWVkIDw9IHJlbW90ZVRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsLnB1c2goeyBsb2NhbDogaXRlbSwgcmVtb3RlOiByZW1vdGVJdGVtLCBpbmZvOiByZW1vdGVJbmZvIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW90ZUluZm8ucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICByZW1vdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGUgcmVtb3RlSXRlbU1hcFt1cmldO1xuICAgICAgICB9IGVsc2UgaWYgKGZpcnN0U3luYyB8fCAhb3V0ZGF0ZWQgfHwgbGFzdE1vZGlmaWVkID4gcmVtb3RlVGltZXN0YW1wKSB7XG4gICAgICAgICAgcHV0UmVtb3RlLnB1c2goeyBsb2NhbDogaXRlbSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxMb2NhbC5wdXNoKHsgbG9jYWw6IGl0ZW0gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVtb3RlSXRlbU1hcDo6Zm9yRWFjaEVudHJ5KChbdXJpLCBpdGVtXSkgPT4ge1xuICAgICAgICBjb25zdCBpbmZvID0gcmVtb3RlTWV0YURhdGEuaW5mb1t1cmldO1xuICAgICAgICBpZiAob3V0ZGF0ZWQpIHtcbiAgICAgICAgICBwdXRMb2NhbC5wdXNoKHsgcmVtb3RlOiBpdGVtLCBpbmZvIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbFJlbW90ZS5wdXNoKHsgcmVtb3RlOiBpdGVtIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHByb21pc2VRdWV1ZSA9IFtcbiAgICAgICAgLi4ucHV0TG9jYWwubWFwKCh7IHJlbW90ZSwgaW5mbyB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2coJ0Rvd25sb2FkIHNjcmlwdDonLCByZW1vdGUudXJpKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXQocmVtb3RlKVxuICAgICAgICAgIC50aGVuKChyYXcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBwYXJzZVNjcmlwdERhdGEocmF3KTtcbiAgICAgICAgICAgIC8vIEludmFsaWQgZGF0YVxuICAgICAgICAgICAgaWYgKCFkYXRhLmNvZGUpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChpbmZvLm1vZGlmaWVkKSBvYmplY3RTZXQoZGF0YSwgJ3Byb3BzLmxhc3RNb2RpZmllZCcsIGluZm8ubW9kaWZpZWQpO1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSAraW5mby5wb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbikgZGF0YS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKCFnZXRPcHRpb24oJ3N5bmNTY3JpcHRTdGF0dXMnKSAmJiBkYXRhLmNvbmZpZykge1xuICAgICAgICAgICAgICBkZWxldGUgZGF0YS5jb25maWcuZW5hYmxlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwbHVnaW5TY3JpcHQudXBkYXRlKGRhdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgLi4ucHV0UmVtb3RlLm1hcCgoeyBsb2NhbCwgcmVtb3RlIH0pID0+IHtcbiAgICAgICAgICB0aGlzLmxvZygnVXBsb2FkIHNjcmlwdDonLCBsb2NhbC5wcm9wcy51cmkpO1xuICAgICAgICAgIHJldHVybiBwbHVnaW5TY3JpcHQuZ2V0KGxvY2FsLnByb3BzLmlkKVxuICAgICAgICAgIC50aGVuKChjb2RlKSA9PiB7XG4gICAgICAgICAgICAvLyBYWFggdXNlIHZlcnNpb24gMSB0byBiZSBjb21wYXRpYmxlIHdpdGggVmlvbGVudG1vbmtleSBvbiBvdGhlciBwbGF0Zm9ybXNcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBnZXRTY3JpcHREYXRhKGxvY2FsLCAxLCB7IGNvZGUgfSk7XG4gICAgICAgICAgICByZW1vdGVNZXRhRGF0YS5pbmZvW2xvY2FsLnByb3BzLnVyaV0gPSB7XG4gICAgICAgICAgICAgIG1vZGlmaWVkOiBsb2NhbC5wcm9wcy5sYXN0TW9kaWZpZWQsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBsb2NhbC5wcm9wcy5wb3NpdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZW1vdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1dChcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcmVtb3RlLCB7XG4gICAgICAgICAgICAgICAgdXJpOiBsb2NhbC5wcm9wcy51cmksXG4gICAgICAgICAgICAgICAgbmFtZTogbnVsbCwgLy8gcHJlZmVyIHVzaW5nIHVyaSBvbiBQVVRcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIC4uLmRlbFJlbW90ZS5tYXAoKHsgcmVtb3RlIH0pID0+IHtcbiAgICAgICAgICB0aGlzLmxvZygnUmVtb3ZlIHJlbW90ZSBzY3JpcHQ6JywgcmVtb3RlLnVyaSk7XG4gICAgICAgICAgZGVsZXRlIHJlbW90ZU1ldGFEYXRhLmluZm9bcmVtb3RlLnVyaV07XG4gICAgICAgICAgcmVtb3RlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKHJlbW90ZSk7XG4gICAgICAgIH0pLFxuICAgICAgICAuLi5kZWxMb2NhbC5tYXAoKHsgbG9jYWwgfSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nKCdSZW1vdmUgbG9jYWwgc2NyaXB0OicsIGxvY2FsLnByb3BzLnVyaSk7XG4gICAgICAgICAgcmV0dXJuIHBsdWdpblNjcmlwdC5yZW1vdmUobG9jYWwucHJvcHMuaWQpO1xuICAgICAgICB9KSxcbiAgICAgICAgLi4udXBkYXRlTG9jYWwubWFwKCh7IGxvY2FsLCBpbmZvIH0pID0+IHtcbiAgICAgICAgICBjb25zdCB1cGRhdGVzID0ge307XG4gICAgICAgICAgaWYgKGluZm8ucG9zaXRpb24pIHtcbiAgICAgICAgICAgIHVwZGF0ZXMucHJvcHMgPSB7IHBvc2l0aW9uOiBpbmZvLnBvc2l0aW9uIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB1cGRhdGVTY3JpcHRJbmZvKGxvY2FsLnByb3BzLmlkLCB1cGRhdGVzKTtcbiAgICAgICAgfSksXG4gICAgICBdO1xuICAgICAgcHJvbWlzZVF1ZXVlLnB1c2goUHJvbWlzZS5hbGwocHJvbWlzZVF1ZXVlKS50aGVuKCgpID0+IHNvcnRTY3JpcHRzKCkpLnRoZW4oKGNoYW5nZWQpID0+IHtcbiAgICAgICAgaWYgKCFjaGFuZ2VkKSByZXR1cm47XG4gICAgICAgIHJlbW90ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gcGx1Z2luU2NyaXB0Lmxpc3QoKVxuICAgICAgICAudGhlbigoc2NyaXB0cykgPT4ge1xuICAgICAgICAgIHNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZW1vdGVJbmZvID0gcmVtb3RlTWV0YURhdGEuaW5mb1tzY3JpcHQucHJvcHMudXJpXTtcbiAgICAgICAgICAgIGlmIChyZW1vdGVJbmZvKSByZW1vdGVJbmZvLnBvc2l0aW9uID0gc2NyaXB0LnByb3BzLnBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pKTtcbiAgICAgIHByb21pc2VRdWV1ZS5wdXNoKFByb21pc2UuYWxsKHByb21pc2VRdWV1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGlmIChyZW1vdGVDaGFuZ2VkKSB7XG4gICAgICAgICAgcmVtb3RlTWV0YURhdGEudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMucHV0KHJlbW90ZU1ldGEsIEpTT04uc3RyaW5naWZ5KHJlbW90ZU1ldGFEYXRhKSkpO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsTWV0YS50aW1lc3RhbXAgPSByZW1vdGVNZXRhRGF0YS50aW1lc3RhbXA7XG4gICAgICAgIGxvY2FsTWV0YS5sYXN0U3luYyA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuY29uZmlnLnNldCgnbWV0YScsIGxvY2FsTWV0YSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICB9KSk7XG4gICAgICAvLyBpZ25vcmUgZXJyb3JzIHRvIGVuc3VyZSBhbGwgcHJvbWlzZXMgYXJlIGZ1bGZpbGxlZFxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VRdWV1ZS5tYXAocHJvbWlzZSA9PiBwcm9taXNlLnRoZW4obm9vcCwgZXJyID0+IGVyciB8fCB0cnVlKSkpXG4gICAgICAudGhlbihlcnJvcnMgPT4gZXJyb3JzLmZpbHRlcihCb29sZWFuKSlcbiAgICAgIC50aGVuKChlcnJvcnMpID0+IHsgaWYgKGVycm9ycy5sZW5ndGgpIHRocm93IGVycm9yczsgfSk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnN5bmNTdGF0ZS5zZXQoJ2lkbGUnKTtcbiAgICAgIHRoaXMubG9nKCdTeW5jIGZpbmlzaGVkOicsIHRoaXMuZGlzcGxheU5hbWUpO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIHRoaXMuc3luY1N0YXRlLnNldCgnZXJyb3InKTtcbiAgICAgIHRoaXMubG9nKCdGYWlsZWQgc3luY2luZzonLCB0aGlzLmRpc3BsYXlOYW1lKTtcbiAgICAgIHRoaXMubG9nKGVycik7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiBQcm9taXNlLnJlc29sdmUodGhpcy5yZWxlYXNlTG9jaygpKS5jYXRjaChub29wKSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKEZhY3RvcnkpIHtcbiAgc2VydmljZUNsYXNzZXMucHVzaChGYWN0b3J5KTtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnQoKSB7XG4gIHJldHVybiBzeW5jQ29uZmlnLmdldCgnY3VycmVudCcpO1xufVxuZnVuY3Rpb24gZ2V0U2VydmljZShuYW1lKSB7XG4gIHJldHVybiBzZXJ2aWNlc1tuYW1lIHx8IGdldEN1cnJlbnQoKV07XG59XG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgaWYgKCFzeW5jQ29uZmlnKSB7XG4gICAgc3luY0NvbmZpZyA9IGluaXRDb25maWcoKTtcbiAgICBzZXJ2aWNlQ2xhc3Nlcy5mb3JFYWNoKChGYWN0b3J5KSA9PiB7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gbmV3IEZhY3RvcnkoKTtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gc2VydmljZTtcbiAgICAgIHNlcnZpY2VOYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgc2VydmljZXNbbmFtZV0gPSBzZXJ2aWNlO1xuICAgIH0pO1xuICB9XG4gIHN5bmMoKTtcbn1cblxuZnVuY3Rpb24gc3luY09uZShzZXJ2aWNlKSB7XG4gIGlmIChzZXJ2aWNlLnN5bmNTdGF0ZS5pcyhbJ3JlYWR5JywgJ3N5bmNpbmcnXSkpIHJldHVybjtcbiAgaWYgKHNlcnZpY2UuYXV0aFN0YXRlLmlzKFsnaWRsZScsICdlcnJvciddKSkgcmV0dXJuIHNlcnZpY2UuY2hlY2tTeW5jKCk7XG4gIGlmIChzZXJ2aWNlLmF1dGhTdGF0ZS5pcygnYXV0aG9yaXplZCcpKSByZXR1cm4gc2VydmljZS5zdGFydFN5bmMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN5bmMoKSB7XG4gIGNvbnN0IHNlcnZpY2UgPSBnZXRTZXJ2aWNlKCk7XG4gIHJldHVybiBzZXJ2aWNlICYmIFByb21pc2UucmVzb2x2ZShzeW5jT25lKHNlcnZpY2UpKS50aGVuKGF1dG9TeW5jKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhvcml6ZSgpIHtcbiAgY29uc3Qgc2VydmljZSA9IGdldFNlcnZpY2UoKTtcbiAgaWYgKHNlcnZpY2UpIHNlcnZpY2UuYXV0aG9yaXplKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZva2UoKSB7XG4gIGNvbnN0IHNlcnZpY2UgPSBnZXRTZXJ2aWNlKCk7XG4gIGlmIChzZXJ2aWNlKSBzZXJ2aWNlLnJldm9rZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29uZmlnKGNvbmZpZykge1xuICBjb25zdCBzZXJ2aWNlID0gZ2V0U2VydmljZSgpO1xuICBpZiAoc2VydmljZSkge1xuICAgIHNlcnZpY2Uuc2V0VXNlckNvbmZpZyhjb25maWcpO1xuICAgIHJldHVybiBzZXJ2aWNlLmNoZWNrU3luYygpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvcGVuQXV0aFBhZ2UodXJsLCByZWRpcmVjdFVyaSkge1xuICB1bnJlZ2lzdGVyV2ViUmVxdWVzdCgpOyAvLyBvdGhlcndpc2Ugb3VyIG5ldyB0YWJJZCB3aWxsIGJlIGlnbm9yZWRcbiAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihvbkJlZm9yZVJlcXVlc3QsIHtcbiAgICB1cmxzOiBbYCR7cmVkaXJlY3RVcml9KmBdLFxuICAgIHR5cGVzOiBbJ21haW5fZnJhbWUnXSxcbiAgICB0YWJJZDogKGF3YWl0IGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmwgfSkpLmlkLFxuICB9LCBbJ2Jsb2NraW5nJ10pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Y2hyb21lLndlYlJlcXVlc3QuV2ViUmVzcG9uc2VEZXRhaWxzfSBpbmZvXG4gKiBAcmV0dXJucyB7Y2hyb21lLndlYlJlcXVlc3QuQmxvY2tpbmdSZXNwb25zZX1cbiAqL1xuZnVuY3Rpb24gb25CZWZvcmVSZXF1ZXN0KGluZm8pIHtcbiAgaWYgKGdldFNlcnZpY2UoKS5jaGVja0F1dGg/LihpbmZvLnVybCkpIHtcbiAgICBicm93c2VyLnRhYnMucmVtb3ZlKGluZm8udGFiSWQpO1xuICAgIC8vIElmIHdlIHVucmVnaXN0ZXIgd2l0aG91dCBzZXRUaW1lb3V0LCBBUEkgd2lsbCBpZ25vcmUgeyBjYW5jZWw6IHRydWUgfVxuICAgIHNldFRpbWVvdXQodW5yZWdpc3RlcldlYlJlcXVlc3QsIDApO1xuICAgIHJldHVybiB7IGNhbmNlbDogdHJ1ZSB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHVucmVnaXN0ZXJXZWJSZXF1ZXN0KCkge1xuICBicm93c2VyLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LnJlbW92ZUxpc3RlbmVyKG9uQmVmb3JlUmVxdWVzdCk7XG59XG5cbmhvb2tPcHRpb25zKChkYXRhKSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gZGF0YT8uWydzeW5jLmN1cnJlbnQnXTtcbiAgaWYgKHZhbHVlKSBpbml0aWFsaXplKCk7XG59KTtcbiIsImltcG9ydCB7IGxvYWRRdWVyeSwgZHVtcFF1ZXJ5IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgZ2V0VVJJLCBnZXRJdGVtRmlsZW5hbWUsIEJhc2VTZXJ2aWNlLCBpc1NjcmlwdEZpbGUsIHJlZ2lzdGVyLFxuICBvcGVuQXV0aFBhZ2UsXG59IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgY2xpZW50X2lkOiAnZjBxMTJ6dXAydXlzNXc4JyxcbiAgcmVkaXJlY3RfdXJpOiAnaHR0cHM6Ly92aW9sZW50bW9ua2V5LmdpdGh1Yi5pby9hdXRoX2Ryb3Bib3guaHRtbCcsXG59O1xuXG5jb25zdCBlc2NSRSA9IC9bXFx1MDA3Zi1cXHVmZmZmXS9nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbmNvbnN0IGVzY0Z1bmMgPSBtID0+IGBcXFxcdSR7KG0uY2hhckNvZGVBdCgwKSArIDB4MTAwMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKX1gO1xuXG5mdW5jdGlvbiBqc29uU3RyaW5naWZ5U2FmZShvYmopIHtcbiAgY29uc3Qgc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGVzY1JFLCBlc2NGdW5jKTtcbn1cblxuY29uc3QgRHJvcGJveCA9IEJhc2VTZXJ2aWNlLmV4dGVuZCh7XG4gIG5hbWU6ICdkcm9wYm94JyxcbiAgZGlzcGxheU5hbWU6ICdEcm9wYm94JyxcbiAgdXNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmRyb3Bib3hhcGkuY29tLzIvdXNlcnMvZ2V0X2N1cnJlbnRfYWNjb3VudCcsXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgIHR5cGU6ICd1bmF1dGhvcml6ZWQnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIGRhdGE6IGVycixcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBoYW5kbGVNZXRhRXJyb3IocmVzKSB7XG4gICAgaWYgKHJlcy5zdGF0dXMgIT09IDQwOSkgdGhyb3cgcmVzO1xuICB9LFxuICBsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZHJvcGJveGFwaS5jb20vMi9maWxlcy9saXN0X2ZvbGRlcicsXG4gICAgICBib2R5OiB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgfSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiAoXG4gICAgICBkYXRhLmVudHJpZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbVsnLnRhZyddID09PSAnZmlsZScgJiYgaXNTY3JpcHRGaWxlKGl0ZW0ubmFtZSkpLm1hcChub3JtYWxpemUpXG4gICAgKSk7XG4gIH0sXG4gIGdldChpdGVtKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vY29udGVudC5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL2Rvd25sb2FkJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0Ryb3Bib3gtQVBJLUFyZyc6IGpzb25TdHJpbmdpZnlTYWZlKHtcbiAgICAgICAgICBwYXRoOiBgLyR7bmFtZX1gLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIHB1dChpdGVtLCBkYXRhKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldEl0ZW1GaWxlbmFtZShpdGVtKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vY29udGVudC5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL3VwbG9hZCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdEcm9wYm94LUFQSS1BcmcnOiBqc29uU3RyaW5naWZ5U2FmZSh7XG4gICAgICAgICAgcGF0aDogYC8ke25hbWV9YCxcbiAgICAgICAgICBtb2RlOiAnb3ZlcndyaXRlJyxcbiAgICAgICAgfSksXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBkYXRhLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbihub3JtYWxpemUpO1xuICB9LFxuICByZW1vdmUoaXRlbSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICdodHRwczovL2FwaS5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL2RlbGV0ZScsXG4gICAgICBib2R5OiB7XG4gICAgICAgIHBhdGg6IGAvJHtuYW1lfWAsXG4gICAgICB9LFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbihub3JtYWxpemUpO1xuICB9LFxuICBhdXRob3JpemUoKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgcmVzcG9uc2VfdHlwZTogJ3Rva2VuJyxcbiAgICAgIGNsaWVudF9pZDogY29uZmlnLmNsaWVudF9pZCxcbiAgICAgIHJlZGlyZWN0X3VyaTogY29uZmlnLnJlZGlyZWN0X3VyaSxcbiAgICB9O1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5kcm9wYm94LmNvbS9vYXV0aDIvYXV0aG9yaXplPyR7ZHVtcFF1ZXJ5KHBhcmFtcyl9YDtcbiAgICBvcGVuQXV0aFBhZ2UodXJsLCBjb25maWcucmVkaXJlY3RfdXJpKTtcbiAgfSxcbiAgYXV0aG9yaXplZChyYXcpIHtcbiAgICBjb25zdCBkYXRhID0gbG9hZFF1ZXJ5KHJhdyk7XG4gICAgaWYgKGRhdGEuYWNjZXNzX3Rva2VuKSB7XG4gICAgICB0aGlzLmNvbmZpZy5zZXQoe1xuICAgICAgICB1aWQ6IGRhdGEudWlkLFxuICAgICAgICB0b2tlbjogZGF0YS5hY2Nlc3NfdG9rZW4sXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGNoZWNrQXV0aCh1cmwpIHtcbiAgICBjb25zdCByZWRpcmVjdFVyaSA9IGAke2NvbmZpZy5yZWRpcmVjdF91cml9I2A7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKHJlZGlyZWN0VXJpKSkge1xuICAgICAgdGhpcy5hdXRob3JpemVkKHVybC5zbGljZShyZWRpcmVjdFVyaS5sZW5ndGgpKTtcbiAgICAgIHRoaXMuY2hlY2tTeW5jKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHJldm9rZSgpIHtcbiAgICB0aGlzLmNvbmZpZy5zZXQoe1xuICAgICAgdWlkOiBudWxsLFxuICAgICAgdG9rZW46IG51bGwsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZSgpO1xuICB9LFxufSk7XG5yZWdpc3RlcihEcm9wYm94KTtcblxuZnVuY3Rpb24gbm9ybWFsaXplKGl0ZW0pIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgc2l6ZTogaXRlbS5zaXplLFxuICAgIHVyaTogZ2V0VVJJKGl0ZW0ubmFtZSksXG4gICAgLy8gbW9kaWZpZWQ6IG5ldyBEYXRlKGl0ZW0uc2VydmVyX21vZGlmaWVkKS5nZXRUaW1lKCksXG4gICAgLy8gaXNEZWxldGVkOiBpdGVtLmlzX2RlbGV0ZWQsXG4gIH07XG59XG4iLCIvLyBSZWZlcmVuY2U6XG4vLyAtIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2RyaXZlL3YzL3JlZmVyZW5jZS9maWxlc1xuLy8gLSBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2dvb2dsZS1hcGktbm9kZWpzLWNsaWVudFxuaW1wb3J0IHsgZ2V0VW5pcUlkLCBub29wIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgb2JqZWN0R2V0IH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCB7IGR1bXBRdWVyeSwgbm90aWZ5IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgZ2V0VVJJLCBnZXRJdGVtRmlsZW5hbWUsIEJhc2VTZXJ2aWNlLCByZWdpc3RlciwgaXNTY3JpcHRGaWxlLFxuICBvcGVuQXV0aFBhZ2UsXG59IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5TWU5DX0dPT0dMRV9DTElFTlRfSUQsXG4gIGNsaWVudF9zZWNyZXQ6IHByb2Nlc3MuZW52LlNZTkNfR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gIHJlZGlyZWN0X3VyaTogJ2h0dHBzOi8vdmlvbGVudG1vbmtleS5naXRodWIuaW8vYXV0aF9nb29nbGVkcml2ZS5odG1sJyxcbiAgc2NvcGU6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlLmFwcGRhdGEnLFxufTtcbmNvbnN0IFVOQVVUSE9SSVpFRCA9IHsgc3RhdHVzOiAnVU5BVVRIT1JJWkVEJyB9O1xuXG5jb25zdCBHb29nbGVEcml2ZSA9IEJhc2VTZXJ2aWNlLmV4dGVuZCh7XG4gIG5hbWU6ICdnb29nbGVkcml2ZScsXG4gIGRpc3BsYXlOYW1lOiAnR29vZ2xlIERyaXZlJyxcbiAgdXJsUHJlZml4OiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZHJpdmUvdjMnLFxuICByZWZyZXNoVG9rZW4oKSB7XG4gICAgY29uc3QgcmVmcmVzaFRva2VuID0gdGhpcy5jb25maWcuZ2V0KCdyZWZyZXNoX3Rva2VuJyk7XG4gICAgaWYgKCFyZWZyZXNoVG9rZW4pIHJldHVybiBQcm9taXNlLnJlamVjdCh7IHR5cGU6ICd1bmF1dGhvcml6ZWQnIH0pO1xuICAgIHJldHVybiB0aGlzLmF1dGhvcml6ZWQoe1xuICAgICAgcmVmcmVzaF90b2tlbjogcmVmcmVzaFRva2VuLFxuICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5wcmVwYXJlKCkpO1xuICB9LFxuICB1c2VyKCkge1xuICAgIGNvbnN0IHJlcXVlc3RVc2VyID0gKCkgPT4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjMvdG9rZW5pbmZvPyR7ZHVtcFF1ZXJ5KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuOiB0aGlzLmNvbmZpZy5nZXQoJ3Rva2VuJyksXG4gICAgICB9KX1gLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcXVlc3RVc2VyKClcbiAgICAudGhlbigoaW5mbykgPT4ge1xuICAgICAgLy8gSWYgYWNjZXNzIHdhcyBncmFudGVkIHdpdGggYWNjZXNzX3R5cGU9b25saW5lLCByZXZva2UgaXQuXG4gICAgICBpZiAoaW5mby5hY2Nlc3NfdHlwZSA9PT0gJ29ubGluZScpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIHVybDogYGh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9yZXZva2U/dG9rZW49JHt0aGlzLmNvbmZpZy5nZXQoJ3Rva2VuJyl9YCxcbiAgICAgICAgICBwcmVmaXg6ICcnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgbm90aWZ5KHtcbiAgICAgICAgICAgIHRpdGxlOiAnU3luYyBVcGdyYWRlZCcsXG4gICAgICAgICAgICBib2R5OiAnUGxlYXNlIHJlYXV0aG9yaXplIGFjY2VzcyB0byB5b3VyIEdvb2dsZSBEcml2ZSB0byBjb21wbGV0ZSB0aGUgdXBncmFkYXRpb24uJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ09ubGluZSBhY2Nlc3MgcmV2b2tlZC4nKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5mby5zY29wZSAhPT0gY29uZmlnLnNjb3BlKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoVU5BVVRIT1JJWkVEKTtcbiAgICB9KVxuICAgIC5jYXRjaCgocmVzKSA9PiB7XG4gICAgICBpZiAocmVzID09PSBVTkFVVEhPUklaRUQgfHwgcmVzLnN0YXR1cyA9PT0gNDAwICYmIG9iamVjdEdldChyZXMsICdkYXRhLmVycm9yX2Rlc2NyaXB0aW9uJykgPT09ICdJbnZhbGlkIFZhbHVlJykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZyZXNoVG9rZW4oKS50aGVuKHJlcXVlc3RVc2VyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIGRhdGE6IHJlcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXRTeW5jRGF0YSgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBzcGFjZXM6ICdhcHBEYXRhRm9sZGVyJyxcbiAgICAgIGZpZWxkczogJ2ZpbGVzKGlkLG5hbWUsc2l6ZSknLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsOiBgL2ZpbGVzPyR7ZHVtcFF1ZXJ5KHBhcmFtcyl9YCxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4oKHsgZmlsZXMgfSkgPT4ge1xuICAgICAgbGV0IG1ldGFGaWxlO1xuICAgICAgY29uc3QgcmVtb3RlRGF0YSA9IGZpbGVzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXNTY3JpcHRGaWxlKGl0ZW0ubmFtZSkpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoIW1ldGFGaWxlICYmIGl0ZW0ubmFtZSA9PT0gdGhpcy5tZXRhRmlsZSkge1xuICAgICAgICAgIG1ldGFGaWxlID0gaXRlbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLm1hcChub3JtYWxpemUpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGlmICghaXRlbS5zaXplKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUoaXRlbSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBtZXRhSXRlbSA9IG1ldGFGaWxlID8gbm9ybWFsaXplKG1ldGFGaWxlKSA6IHt9O1xuICAgICAgY29uc3QgZ290TWV0YSA9IHRoaXMuZ2V0KG1ldGFJdGVtKVxuICAgICAgLnRoZW4oZGF0YSA9PiBKU09OLnBhcnNlKGRhdGEpKVxuICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLmhhbmRsZU1ldGFFcnJvcihlcnIpKVxuICAgICAgLnRoZW4oZGF0YSA9PiBPYmplY3QuYXNzaWduKHt9LCBtZXRhSXRlbSwge1xuICAgICAgICBuYW1lOiB0aGlzLm1ldGFGaWxlLFxuICAgICAgICB1cmk6IG51bGwsXG4gICAgICAgIGRhdGEsXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2dvdE1ldGEsIHJlbW90ZURhdGEsIHRoaXMuZ2V0TG9jYWxEYXRhKCldKTtcbiAgICB9KTtcbiAgfSxcbiAgYXV0aG9yaXplKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIHJlc3BvbnNlX3R5cGU6ICdjb2RlJyxcbiAgICAgIGFjY2Vzc190eXBlOiAnb2ZmbGluZScsXG4gICAgICBjbGllbnRfaWQ6IGNvbmZpZy5jbGllbnRfaWQsXG4gICAgICByZWRpcmVjdF91cmk6IGNvbmZpZy5yZWRpcmVjdF91cmksXG4gICAgICBzY29wZTogY29uZmlnLnNjb3BlLFxuICAgIH07XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5nZXQoJ3JlZnJlc2hfdG9rZW4nKSkgcGFyYW1zLnByb21wdCA9ICdjb25zZW50JztcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGg/JHtkdW1wUXVlcnkocGFyYW1zKX1gO1xuICAgIG9wZW5BdXRoUGFnZSh1cmwsIGNvbmZpZy5yZWRpcmVjdF91cmkpO1xuICB9LFxuICBjaGVja0F1dGgodXJsKSB7XG4gICAgY29uc3QgcmVkaXJlY3RVcmkgPSBgJHtjb25maWcucmVkaXJlY3RfdXJpfT9jb2RlPWA7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKHJlZGlyZWN0VXJpKSkge1xuICAgICAgdGhpcy5hdXRoU3RhdGUuc2V0KCdhdXRob3JpemluZycpO1xuICAgICAgdGhpcy5hdXRob3JpemVkKHtcbiAgICAgICAgY29kZTogZGVjb2RlVVJJQ29tcG9uZW50KHVybC5zcGxpdCgnIycpWzBdLnNsaWNlKHJlZGlyZWN0VXJpLmxlbmd0aCkpLFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuY2hlY2tTeW5jKCkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuICByZXZva2UoKSB7XG4gICAgdGhpcy5jb25maWcuc2V0KHtcbiAgICAgIHRva2VuOiBudWxsLFxuICAgICAgcmVmcmVzaF90b2tlbjogbnVsbCxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlKCk7XG4gIH0sXG4gIGF1dGhvcml6ZWQocGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4nLFxuICAgICAgcHJlZml4OiAnJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGR1bXBRdWVyeShPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIGNsaWVudF9pZDogY29uZmlnLmNsaWVudF9pZCxcbiAgICAgICAgY2xpZW50X3NlY3JldDogY29uZmlnLmNsaWVudF9zZWNyZXQsXG4gICAgICAgIHJlZGlyZWN0X3VyaTogY29uZmlnLnJlZGlyZWN0X3VyaSxcbiAgICAgICAgZ3JhbnRfdHlwZTogJ2F1dGhvcml6YXRpb25fY29kZScsXG4gICAgICB9LCBwYXJhbXMpKSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgICAgdG9rZW46IGRhdGEuYWNjZXNzX3Rva2VuLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoZGF0YS5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICAgICAgdXBkYXRlLnJlZnJlc2hfdG9rZW4gPSBkYXRhLnJlZnJlc2hfdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25maWcuc2V0KHVwZGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBkYXRhO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBoYW5kbGVNZXRhRXJyb3I6IG5vb3AsXG4gIGxpc3QoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3Qgc3VwcG9ydGVkJyk7XG4gIH0sXG4gIGdldCh7IGlkIH0pIHtcbiAgICBpZiAoIWlkKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6IGAvZmlsZXMvJHtpZH0/YWx0PW1lZGlhYCxcbiAgICB9KTtcbiAgfSxcbiAgcHV0KGl0ZW0sIGRhdGEpIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIGNvbnN0IHsgaWQgfSA9IGl0ZW07XG4gICAgY29uc3QgYm91bmRhcnkgPSBnZXRVbmlxSWQoJ3Zpb2xlbnRtb25rZXktaXMtZ3JlYXQtJyk7XG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiBgbXVsdGlwYXJ0L3JlbGF0ZWQ7IGJvdW5kYXJ5PSR7Ym91bmRhcnl9YCxcbiAgICB9O1xuICAgIGNvbnN0IG1ldGFkYXRhID0gaWQgPyB7XG4gICAgICBuYW1lLFxuICAgIH0gOiB7XG4gICAgICBuYW1lLFxuICAgICAgcGFyZW50czogWydhcHBEYXRhRm9sZGVyJ10sXG4gICAgfTtcbiAgICBjb25zdCBib2R5ID0gW1xuICAgICAgYC0tJHtib3VuZGFyeX1gLFxuICAgICAgJ0NvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAnJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KG1ldGFkYXRhKSxcbiAgICAgIGAtLSR7Ym91bmRhcnl9YCxcbiAgICAgICdDb250ZW50LVR5cGU6IHRleHQvcGxhaW4nLFxuICAgICAgJycsXG4gICAgICBkYXRhLFxuICAgICAgYC0tJHtib3VuZGFyeX0tLWAsXG4gICAgICAnJyxcbiAgICBdLmpvaW4oJ1xcclxcbicpO1xuICAgIGNvbnN0IHVybCA9IGlkXG4gICAgICA/IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS91cGxvYWQvZHJpdmUvdjMvZmlsZXMvJHtpZH0/dXBsb2FkVHlwZT1tdWx0aXBhcnRgXG4gICAgICA6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS91cGxvYWQvZHJpdmUvdjMvZmlsZXM/dXBsb2FkVHlwZT1tdWx0aXBhcnQnO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybCxcbiAgICAgIGJvZHksXG4gICAgICBoZWFkZXJzLFxuICAgICAgbWV0aG9kOiBpZCA/ICdQQVRDSCcgOiAnUE9TVCcsXG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZSh7IGlkIH0pIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgdXJsOiBgL2ZpbGVzLyR7aWR9YCxcbiAgICB9KTtcbiAgfSxcbn0pO1xucmVnaXN0ZXIoR29vZ2xlRHJpdmUpO1xuXG5mdW5jdGlvbiBub3JtYWxpemUoaXRlbSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBpdGVtLmlkLFxuICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICBzaXplOiAraXRlbS5zaXplLFxuICAgIHVyaTogZ2V0VVJJKGl0ZW0ubmFtZSksXG4gIH07XG59XG4iLCJpbXBvcnQge1xuICBpbml0aWFsaXplLFxuICBzeW5jLFxuICBnZXRTdGF0ZXMsXG4gIGF1dGhvcml6ZSxcbiAgcmV2b2tlLFxuICBzZXRDb25maWcsXG59IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgJy4vZHJvcGJveCc7XG5pbXBvcnQgJy4vb25lZHJpdmUnO1xuaW1wb3J0ICcuL2dvb2dsZWRyaXZlJztcbmltcG9ydCAnLi93ZWJkYXYnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuLi91dGlscy9tZXNzYWdlJztcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICBTeW5jQXV0aG9yaXplOiBhdXRob3JpemUsXG4gIFN5bmNSZXZva2U6IHJldm9rZSxcbiAgU3luY1N0YXJ0OiBzeW5jLFxuICBTeW5jU2V0Q29uZmlnOiBzZXRDb25maWcsXG59KTtcblxuZXhwb3J0IHtcbiAgaW5pdGlhbGl6ZSxcbiAgc3luYyxcbiAgZ2V0U3RhdGVzLFxuICBhdXRob3JpemUsXG4gIHJldm9rZSxcbn07XG4iLCIvLyBSZWZlcmVuY2U6IGh0dHBzOi8vZGV2Lm9uZWRyaXZlLmNvbS9SRUFETUUuaHRtXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IHsgb2JqZWN0R2V0IH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCB7IGR1bXBRdWVyeSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7XG4gIGdldFVSSSwgZ2V0SXRlbUZpbGVuYW1lLCBCYXNlU2VydmljZSwgaXNTY3JpcHRGaWxlLCByZWdpc3RlcixcbiAgb3BlbkF1dGhQYWdlLFxufSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuU1lOQ19PTkVEUklWRV9DTElFTlRfSUQsXG4gIGNsaWVudF9zZWNyZXQ6IHByb2Nlc3MuZW52LlNZTkNfT05FRFJJVkVfQ0xJRU5UX1NFQ1JFVCxcbiAgcmVkaXJlY3RfdXJpOiAnaHR0cHM6Ly92aW9sZW50bW9ua2V5LmdpdGh1Yi5pby9hdXRoX29uZWRyaXZlLmh0bWwnLFxufTtcblxuY29uc3QgT25lRHJpdmUgPSBCYXNlU2VydmljZS5leHRlbmQoe1xuICBuYW1lOiAnb25lZHJpdmUnLFxuICBkaXNwbGF5TmFtZTogJ09uZURyaXZlJyxcbiAgdXJsUHJlZml4OiAnaHR0cHM6Ly9hcGkub25lZHJpdmUuY29tL3YxLjAnLFxuICByZWZyZXNoVG9rZW4oKSB7XG4gICAgY29uc3QgcmVmcmVzaFRva2VuID0gdGhpcy5jb25maWcuZ2V0KCdyZWZyZXNoX3Rva2VuJyk7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXplZCh7XG4gICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4sXG4gICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB0aGlzLnByZXBhcmUoKSk7XG4gIH0sXG4gIHVzZXIoKSB7XG4gICAgY29uc3QgcmVxdWVzdFVzZXIgPSAoKSA9PiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybDogJy9kcml2ZScsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVxdWVzdFVzZXIoKVxuICAgIC5jYXRjaCgocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hUb2tlbigpLnRoZW4ocmVxdWVzdFVzZXIpO1xuICAgICAgfVxuICAgICAgdGhyb3cgcmVzO1xuICAgIH0pXG4gICAgLmNhdGNoKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDAgJiYgb2JqZWN0R2V0KHJlcywgJ2RhdGEuZXJyb3InKSA9PT0gJ2ludmFsaWRfZ3JhbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgdHlwZTogJ3VuYXV0aG9yaXplZCcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgZGF0YTogcmVzLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGhhbmRsZU1ldGFFcnJvcihyZXMpIHtcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICBjb25zdCBoZWFkZXIgPSByZXMuaGVhZGVycy5nZXQoJ1dXVy1BdXRoZW50aWNhdGUnKT8uWzBdIHx8ICcnO1xuICAgICAgaWYgKC9eQmVhcmVyIHJlYWxtPVwiT25lRHJpdmVBUElcIi8udGVzdChoZWFkZXIpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hUb2tlbigpLnRoZW4oKCkgPT4gdGhpcy5nZXRNZXRhKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aHJvdyByZXM7XG4gIH0sXG4gIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsOiAnL2RyaXZlL3NwZWNpYWwvYXBwcm9vdC9jaGlsZHJlbicsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKGRhdGEgPT4gZGF0YS52YWx1ZS5maWx0ZXIoaXRlbSA9PiBpdGVtLmZpbGUgJiYgaXNTY3JpcHRGaWxlKGl0ZW0ubmFtZSkpLm1hcChub3JtYWxpemUpKTtcbiAgfSxcbiAgZ2V0KGl0ZW0pIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIHVybDogYC9kcml2ZS9zcGVjaWFsL2FwcHJvb3Q6LyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWAsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKGRhdGEgPT4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICB1cmw6IGRhdGFbJ0Bjb250ZW50LmRvd25sb2FkVXJsJ10sXG4gICAgICBkZWxheTogZmFsc2UsXG4gICAgfSkpO1xuICB9LFxuICBwdXQoaXRlbSwgZGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIHVybDogYC9kcml2ZS9zcGVjaWFsL2FwcHJvb3Q6LyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfTovY29udGVudGAsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBkYXRhLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSlcbiAgICAudGhlbihub3JtYWxpemUpO1xuICB9LFxuICByZW1vdmUoaXRlbSkge1xuICAgIC8vIHJldHVybiAyMDRcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICB1cmw6IGAvZHJpdmUvc3BlY2lhbC9hcHByb290Oi8ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gLFxuICAgIH0pXG4gICAgLmNhdGNoKG5vb3ApO1xuICB9LFxuICBhdXRob3JpemUoKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50X2lkLFxuICAgICAgc2NvcGU6ICdvbmVkcml2ZS5hcHBmb2xkZXIgd2wub2ZmbGluZV9hY2Nlc3MnLFxuICAgICAgcmVzcG9uc2VfdHlwZTogJ2NvZGUnLFxuICAgICAgcmVkaXJlY3RfdXJpOiBjb25maWcucmVkaXJlY3RfdXJpLFxuICAgIH07XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vbG9naW4ubGl2ZS5jb20vb2F1dGgyMF9hdXRob3JpemUuc3JmPyR7ZHVtcFF1ZXJ5KHBhcmFtcyl9YDtcbiAgICBvcGVuQXV0aFBhZ2UodXJsLCBjb25maWcucmVkaXJlY3RfdXJpKTtcbiAgfSxcbiAgY2hlY2tBdXRoKHVybCkge1xuICAgIGNvbnN0IHJlZGlyZWN0VXJpID0gYCR7Y29uZmlnLnJlZGlyZWN0X3VyaX0/Y29kZT1gO1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aChyZWRpcmVjdFVyaSkpIHtcbiAgICAgIHRoaXMuYXV0aFN0YXRlLnNldCgnYXV0aG9yaXppbmcnKTtcbiAgICAgIHRoaXMuYXV0aG9yaXplZCh7XG4gICAgICAgIGNvZGU6IHVybC5zbGljZShyZWRpcmVjdFVyaS5sZW5ndGgpLFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuY2hlY2tTeW5jKCkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuICByZXZva2UoKSB7XG4gICAgdGhpcy5jb25maWcuc2V0KHtcbiAgICAgIHVpZDogbnVsbCxcbiAgICAgIHRva2VuOiBudWxsLFxuICAgICAgcmVmcmVzaF90b2tlbjogbnVsbCxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlKCk7XG4gIH0sXG4gIGF1dGhvcml6ZWQocGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICdodHRwczovL2xvZ2luLmxpdmUuY29tL29hdXRoMjBfdG9rZW4uc3JmJyxcbiAgICAgIHByZWZpeDogJycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBkdW1wUXVlcnkoT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICBjbGllbnRfaWQ6IGNvbmZpZy5jbGllbnRfaWQsXG4gICAgICAgIGNsaWVudF9zZWNyZXQ6IGNvbmZpZy5jbGllbnRfc2VjcmV0LFxuICAgICAgICByZWRpcmVjdF91cmk6IGNvbmZpZy5yZWRpcmVjdF91cmksXG4gICAgICAgIGdyYW50X3R5cGU6ICdhdXRob3JpemF0aW9uX2NvZGUnLFxuICAgICAgfSwgcGFyYW1zKSksXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgdGhpcy5jb25maWcuc2V0KHtcbiAgICAgICAgICB1aWQ6IGRhdGEudXNlcl9pZCxcbiAgICAgICAgICB0b2tlbjogZGF0YS5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgcmVmcmVzaF90b2tlbjogZGF0YS5yZWZyZXNoX3Rva2VuLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGRhdGE7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59KTtcbnJlZ2lzdGVyKE9uZURyaXZlKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplKGl0ZW0pIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgc2l6ZTogaXRlbS5zaXplLFxuICAgIHVyaTogZ2V0VVJJKGl0ZW0ubmFtZSksXG4gICAgLy8gbW9kaWZpZWQ6IG5ldyBEYXRlKGl0ZW0ubGFzdE1vZGlmaWVkRGF0ZVRpbWUpLmdldFRpbWUoKSxcbiAgfTtcbn1cbiIsImltcG9ydCB7XG4gIGdldFVSSSwgZ2V0SXRlbUZpbGVuYW1lLCBCYXNlU2VydmljZSwgaXNTY3JpcHRGaWxlLCByZWdpc3Rlcixcbn0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgS0VZX0NISUxEUkVOID0gU3ltYm9sKCdjaGlsZHJlbicpO1xuXG5jbGFzcyBYTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIG5zTWFwKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5zTWFwID0geyAuLi5uc01hcCB9O1xuICAgIHRoaXMucGFyc2VBdHRycygpO1xuICAgIHRoaXMucGFyc2VOYW1lKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVhNTCh4bWwpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWwsICdhcHBsaWNhdGlvbi94bWwnKTtcbiAgICByZXR1cm4gbmV3IFhOb2RlKGRvYyk7XG4gIH1cblxuICBwYXJzZUF0dHJzKCkge1xuICAgIGNvbnN0IHsgbm9kZSwgbnNNYXAgfSA9IHRoaXM7XG4gICAgY29uc3QgYXR0cnMgPSB7fTtcbiAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IG5vZGU7XG4gICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gYXR0cjtcbiAgICAgICAgaWYgKG5hbWUgPT09ICd4bWxucycpIG5zTWFwLiQgPSB2YWx1ZTtcbiAgICAgICAgZWxzZSBpZiAobmFtZS5zdGFydHNXaXRoKCd4bWxuczonKSkgbnNNYXBbbmFtZS5zbGljZSg2KV0gPSB2YWx1ZTtcbiAgICAgICAgYXR0cnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hdHRycyA9IGF0dHJzO1xuICB9XG5cbiAgcGFyc2VOYW1lKCkge1xuICAgIGNvbnN0IHsgbm9kZSwgbnNNYXAgfSA9IHRoaXM7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGxldCBuYW1lID0gbm9kZS50YWdOYW1lO1xuICAgICAgbGV0IG5zID0gbnNNYXAuJDtcbiAgICAgIGlmIChuYW1lLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgbGV0IHByZWZpeDtcbiAgICAgICAgW3ByZWZpeCwgbmFtZV0gPSBuYW1lLnNwbGl0KCc6Jyk7XG4gICAgICAgIG5zID0gbnNNYXBbcHJlZml4XTtcbiAgICAgICAgaWYgKCFucykgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG5hbWVzcGFjZTogJHtwcmVmaXh9YCk7XG4gICAgICB9XG4gICAgICB0aGlzLm5hbWUgPSBucyArIG5hbWU7XG4gICAgfVxuICB9XG5cbiAgdGV4dCgpIHtcbiAgICBjb25zdCB7IG5vZGUgfSA9IHRoaXM7XG4gICAgaWYgKG5vZGUpIHJldHVybiAobm9kZS50ZXh0Q29udGVudCB8fCAnJykudHJpbSgpO1xuICB9XG5cbiAgY2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzW0tFWV9DSElMRFJFTl0pIHtcbiAgICAgIGNvbnN0IHsgbm9kZSwgbnNNYXAgfSA9IHRoaXM7XG4gICAgICB0aGlzW0tFWV9DSElMRFJFTl0gPSBbLi4ubm9kZS5jaGlsZHJlbl1cbiAgICAgIC5tYXAoY2hpbGQgPT4gbmV3IFhOb2RlKGNoaWxkLCBuc01hcCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpc1tLRVlfQ0hJTERSRU5dO1xuICB9XG5cbiAgbWFwKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4oKS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgZ2V0Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICh0YWdOYW1lID0+IG5vZGUgPT4gbm9kZS5uYW1lID09PSB0YWdOYW1lKShjYWxsYmFjayk7XG4gICAgfVxuICAgIHJldHVybiBjYWxsYmFjaztcbiAgfVxuXG4gIGZpbHRlcihjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuKCkuZmlsdGVyKHRoaXMuZ2V0Q2FsbGJhY2soY2FsbGJhY2spKTtcbiAgfVxuXG4gIGZpbmQoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbigpLmZpbmQodGhpcy5nZXRDYWxsYmFjayhjYWxsYmFjaykpO1xuICB9XG5cbiAgYXR0cihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyc1trZXldO1xuICB9XG59XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICBzZXJ2ZXJVcmw6ICcnLFxuICBhbm9ueW1vdXM6IGZhbHNlLFxuICB1c2VybmFtZTogJycsXG4gIHBhc3N3b3JkOiAnJyxcbn07XG5cbmNvbnN0IFdlYkRBViA9IEJhc2VTZXJ2aWNlLmV4dGVuZCh7XG4gIG5hbWU6ICd3ZWJkYXYnLFxuICBkaXNwbGF5TmFtZTogJ1dlYkRBVicsXG4gIHByb3BlcnRpZXM6IHtcbiAgICBhdXRoVHlwZTogJ3Bhc3N3b3JkJyxcbiAgICBzZXJ2ZXJVcmw6IG51bGwsXG4gIH0sXG4gIGdldFVzZXJDb25maWcoKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJDb25maWcpIHtcbiAgICAgIHRoaXMudXNlckNvbmZpZyA9IHtcbiAgICAgICAgLi4uREVGQVVMVF9DT05GSUcsXG4gICAgICAgIC4uLnRoaXMuY29uZmlnLmdldCgndXNlckNvbmZpZycpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXNlckNvbmZpZztcbiAgfSxcbiAgc2V0VXNlckNvbmZpZyhjb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMudXNlckNvbmZpZywgY29uZmlnKTtcbiAgICB0aGlzLmNvbmZpZy5zZXQoJ3VzZXJDb25maWcnLCB0aGlzLnVzZXJDb25maWcpO1xuICB9LFxuICBpbml0VG9rZW4oKSB7XG4gICAgdGhpcy5wcmVwYXJlSGVhZGVycygpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0VXNlckNvbmZpZygpO1xuICAgIGxldCB1cmwgPSBjb25maWcuc2VydmVyVXJsPy50cmltKCkgfHwgJyc7XG4gICAgaWYgKCF1cmwuaW5jbHVkZXMoJzovLycpKSB1cmwgPSBgaHR0cDovLyR7dXJsfWA7XG4gICAgaWYgKCF1cmwuZW5kc1dpdGgoJy8nKSkgdXJsICs9ICcvJztcbiAgICB0cnkge1xuICAgICAgbmV3IFVSTCh1cmwpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMucHJvcGVydGllcy5zZXJ2ZXJVcmwgPSBudWxsO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnByb3BlcnRpZXMuc2VydmVyVXJsID0gYCR7dXJsfVZpb2xlbnRtb25rZXkvYDtcbiAgICBjb25zdCB7IGFub255bW91cywgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBjb25maWc7XG4gICAgaWYgKGFub255bW91cykgcmV0dXJuIHRydWU7XG4gICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBhdXRoID0gd2luZG93LmJ0b2EoYCR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9YCk7XG4gICAgdGhpcy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmFzaWMgJHthdXRofWA7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGxvYWREYXRhKG9wdGlvbnMpIHtcbiAgICAvLyBCeXBhc3NpbmcgbG9naW4gQ1NSRiBwcm90ZWN0aW9uIGluIE5leHRjbG91ZCAvIE93bmNsb3VkIGJ5IG5vdCBzZW5kaW5nIGNvb2tpZXMuXG4gICAgLy8gV2UgYXJlIG5vdCB1c2luZyB3ZWIgVUkgYW5kIGNvb2tpZSBhdXRoZW50aWNhdGlvbiwgc28gd2UgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCB0aGF0LlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdmlvbGVudG1vbmtleS92aW9sZW50bW9ua2V5L2lzc3Vlcy85NzZcbiAgICByZXR1cm4gQmFzZVNlcnZpY2UucHJvdG90eXBlLmxvYWREYXRhLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjcmVkZW50aWFsczogJ29taXQnLFxuICAgIH0sIG9wdGlvbnMpKTtcbiAgfSxcbiAgaGFuZGxlTWV0YUVycm9yKHJlcykge1xuICAgIGlmICghW1xuICAgICAgNDA0LCAvLyBGaWxlIG5vdCBleGlzdHNcbiAgICAgIDQwOSwgLy8gRGlyZWN0b3J5IG5vdCBleGlzdHNcbiAgICBdLmluY2x1ZGVzKHJlcy5zdGF0dXMpKSB0aHJvdyByZXM7XG4gIH0sXG4gIC8vIFNvbWUgV2ViREFWIHNlcnZlcnMgZG8gbm90IGFsbG93IExPQ0sgLyBVTkxPQ0tcbiAgLypcbiAgYWNxdWlyZUxvY2soKSB7XG4gICAgY29uc3QgeyBzZXJ2ZXJVcmwgfSA9IHRoaXMucHJvcGVydGllcztcbiAgICBjb25zdCBjcmVhdGVMb2NrID0gKCkgPT4ge1xuICAgICAgdGhpcy5sb2coJ0FjcXVpcmUgbG9jay4uLicpO1xuICAgICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgICBtZXRob2Q6ICdMT0NLJyxcbiAgICAgICAgdXJsOiBzZXJ2ZXJVcmwsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBUaW1lb3V0OiBgU2Vjb25kLSR7MzAgKiA2MH1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBgXFxcbjw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCIgPz5cbjxEOmxvY2tpbmZvIHhtbG5zOkQ9J0RBVjonPlxuICA8RDpsb2Nrc2NvcGU+PEQ6ZXhjbHVzaXZlLz48L0Q6bG9ja3Njb3BlPlxuICA8RDpsb2NrdHlwZT48RDp3cml0ZS8+PC9EOmxvY2t0eXBlPlxuPC9EOmxvY2tpbmZvPmAsXG4gICAgICB9KVxuICAgICAgLnRoZW4oeG1sID0+IHtcbiAgICAgICAgY29uc3QgZG9jID0gWE5vZGUuZnJvbVhNTCh4bWwpO1xuICAgICAgICBjb25zdCBsb2NrID0gZG9jLmZpbmQoJ0RBVjpwcm9wJylcbiAgICAgICAgLmZpbmQoJ0RBVjpsb2NrZGlzY292ZXJ5JylcbiAgICAgICAgLmZpbmQoJ0RBVjphY3RpdmVsb2NrJylcbiAgICAgICAgLmZpbmQoJ0RBVjpsb2NrdG9rZW4nKVxuICAgICAgICAuZmluZCgnREFWOmhyZWYnKVxuICAgICAgICAudGV4dCgpO1xuICAgICAgICB0aGlzLmxvZygnQWNxdWlyZWQgbG9jazonLCBsb2NrKTtcbiAgICAgICAgdGhpcy5jb25maWcuc2V0KHtcbiAgICAgICAgICBsb2NrLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgbG9jayA9IHRoaXMuY29uZmlnLmdldCgnbG9jaycpO1xuICAgIGlmIChsb2NrKSB7XG4gICAgICB0aGlzLmxvZygnUmVmcmVzaCBsb2NrOicsIGxvY2spO1xuICAgICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgICBtZXRob2Q6ICdMT0NLJyxcbiAgICAgICAgdXJsOiBzZXJ2ZXJVcmwsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBJZjogYCg8JHtsb2NrfT4pYCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9nKCdSZWZyZXNoZWQgbG9jazonLCBsb2NrKTtcbiAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MTIpIHtcbiAgICAgICAgICB0aGlzLmxvZygnUmVmcmVzaCBsb2NrIGVycm9yJyk7XG4gICAgICAgICAgdGhpcy5jb25maWcuc2V0KHsgbG9jazogbnVsbCB9KTtcbiAgICAgICAgICAvLyBQcmVjb25kaXRpb24gRmFpbGVkXG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2soKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2soKTtcbiAgfSxcbiAgcmVsZWFzZUxvY2soKSB7XG4gICAgY29uc3QgbG9jayA9IHRoaXMuY29uZmlnLmdldCgnbG9jaycpO1xuICAgIGlmIChsb2NrKSB7XG4gICAgICBjb25zdCB7IHNlcnZlclVybCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgICAgdGhpcy5sb2coJ1JlbGVhc2UgbG9jazonLCBsb2NrKTtcbiAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHtcbiAgICAgICAgbWV0aG9kOiAnVU5MT0NLJyxcbiAgICAgICAgdXJsOiBzZXJ2ZXJVcmwsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnTG9jay1Ub2tlbic6IGA8JHtsb2NrfT5gLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2coJ1JlbGVhc2VkIGxvY2snKTtcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2coJ1JlbGVhc2UgbG9jayBlcnJvcicpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5jb25maWcuc2V0KHsgbG9jazogbnVsbCB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgKi9cbiAgbGlzdCgpIHtcbiAgICBjb25zdCB7IHNlcnZlclVybCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgIGNvbnN0IG1rZGlyID0gKCkgPT4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdNS0NPTCcsXG4gICAgICB1cmw6IHNlcnZlclVybCxcbiAgICB9KTtcbiAgICBjb25zdCByZWFkZGlyID0gKCkgPT4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdQUk9QRklORCcsXG4gICAgICB1cmw6IHNlcnZlclVybCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgZGVwdGg6ICcxJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbigoeG1sKSA9PiB7XG4gICAgICBjb25zdCBkb2MgPSBYTm9kZS5mcm9tWE1MKHhtbCk7XG4gICAgICBjb25zdCBpdGVtcyA9IGRvYy5jaGlsZHJlbigpWzBdXG4gICAgICAubWFwKChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3AgPSBub2RlLmZpbmQoJ0RBVjpwcm9wc3RhdCcpLmZpbmQoJ0RBVjpwcm9wJyk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBwcm9wLmZpbmQoJ0RBVjpyZXNvdXJjZXR5cGUnKS5maW5kKCdEQVY6Y29sbGVjdGlvbicpID8gJ2RpcmVjdG9yeScgOiAnZmlsZSc7XG4gICAgICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICBsZXQgZGlzcGxheU5hbWU7XG4gICAgICAgICAgY29uc3QgZGlzcGxheU5hbWVOb2RlID0gcHJvcC5maW5kKCdEQVY6ZGlzcGxheW5hbWUnKTtcblxuICAgICAgICAgIGlmIChkaXNwbGF5TmFtZU5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZU5vZGUudGV4dCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gbm9kZS5maW5kKCdEQVY6aHJlZicpLnRleHQoKTtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYuc3Vic3RyaW5nKGhyZWYubGFzdEluZGV4T2YoJy8nKSArIDEpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNTY3JpcHRGaWxlKGRpc3BsYXlOYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHByb3AuZmluZCgnREFWOmdldGNvbnRlbnRsZW5ndGgnKTtcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemUoe1xuICAgICAgICAgICAgICBuYW1lOiBkaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgc2l6ZTogc2l6ZSA/ICtzaXplLnRleHQoKSA6IDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9KTtcbiAgICByZXR1cm4gcmVhZGRpcigpXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIG1rZGlyKCkudGhlbihyZWFkZGlyKTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0KGl0ZW0pIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0SXRlbUZpbGVuYW1lKGl0ZW0pO1xuICAgIGNvbnN0IHsgc2VydmVyVXJsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgdXJsOiBzZXJ2ZXJVcmwgKyBuYW1lLFxuICAgIH0pO1xuICB9LFxuICBwdXQoaXRlbSwgZGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbicsXG4gICAgfTtcbiAgICBjb25zdCBsb2NrID0gdGhpcy5jb25maWcuZ2V0KCdsb2NrJyk7XG4gICAgaWYgKGxvY2spIGhlYWRlcnMuSWYgPSBgKDwke2xvY2t9PilgO1xuICAgIGNvbnN0IHsgc2VydmVyVXJsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoe1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIHVybDogc2VydmVyVXJsICsgbmFtZSxcbiAgICAgIGJvZHk6IGRhdGEsXG4gICAgICBoZWFkZXJzLFxuICAgIH0pO1xuICB9LFxuICByZW1vdmUoaXRlbSkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJdGVtRmlsZW5hbWUoaXRlbSk7XG4gICAgY29uc3QgaGVhZGVycyA9IHt9O1xuICAgIGNvbnN0IGxvY2sgPSB0aGlzLmNvbmZpZy5nZXQoJ2xvY2snKTtcbiAgICBpZiAobG9jaykgaGVhZGVycy5JZiA9IGAoPCR7bG9ja30+KWA7XG4gICAgY29uc3QgeyBzZXJ2ZXJVcmwgfSA9IHRoaXMucHJvcGVydGllcztcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgdXJsOiBzZXJ2ZXJVcmwgKyBuYW1lLFxuICAgICAgaGVhZGVycyxcbiAgICB9KTtcbiAgfSxcbn0pO1xucmVnaXN0ZXIoV2ViREFWKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplKGl0ZW0pIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgc2l6ZTogaXRlbS5zaXplLFxuICAgIHVyaTogZ2V0VVJJKGl0ZW0ubmFtZSksXG4gIH07XG59XG4iLCJpbXBvcnQgaW5pdENhY2hlIGZyb20gJyMvY29tbW9uL2NhY2hlJztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuY29uc3QgY2FjaGUgPSBpbml0Q2FjaGUoe1xuICAvKiBLZWVwaW5nIHRoZSBkYXRhIGZvciBvbmUgaG91ciBzaW5jZSBjaHJvbWUuc3RvcmFnZS5sb2NhbCBpcyBpbnNhbmVseSBzbG93IGluIENocm9tZSxcbiAgICAgaXQgY2FuIHRha2VzIHNlY29uZHMgdG8gcmVhZCBpdCB3aGVuIGluamVjdGluZyB0YWJzIHdpdGggYSBiaWcgc2NyaXB0L3ZhbHVlLCB3aGljaCBkZWxheXNcbiAgICAgYWxsIG90aGVyIHNjcmlwdHMgaW4gdGhpcyB0YWIgYW5kIHRoZXkgd2lsbCBuZXZlciBiZSBhYmxlIHRvIHJ1biBhdCBkb2N1bWVudC1zdGFydC4gKi9cbiAgbGlmZXRpbWU6IDYwICogNjAgKiAxMDAwLFxufSk7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgQ2FjaGVMb2FkKGRhdGEpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KGRhdGEpIHx8IG51bGw7XG4gIH0sXG4gIENhY2hlSGl0KGRhdGEpIHtcbiAgICBjYWNoZS5oaXQoZGF0YS5rZXksIGRhdGEubGlmZXRpbWUpO1xuICB9LFxuICBDYWNoZVBvcChrZXkpIHtcbiAgICByZXR1cm4gY2FjaGUucG9wKGtleSkgfHwgbnVsbDtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjYWNoZTtcbiIsImltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xubGV0IGNsaXBib2FyZERhdGE7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgU2V0Q2xpcGJvYXJkKGRhdGEpIHtcbiAgICBjbGlwYm9hcmREYXRhID0gZGF0YTtcbiAgICB0ZXh0YXJlYS5mb2N1cygpO1xuICAgIGNvbnN0IHJldCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JywgZmFsc2UsIG51bGwpO1xuICAgIGlmICghcmV0ICYmIHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NvcHkgZmFpbGVkIScpO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRhcmVhKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29weScsIGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHsgdHlwZSwgZGF0YSB9ID0gY2xpcGJvYXJkRGF0YTtcbiAgZS5jbGlwYm9hcmREYXRhLnNldERhdGEodHlwZSB8fCAndGV4dC9wbGFpbicsIGRhdGEpO1xufSk7XG4iLCJpbXBvcnQge1xuICBjb21wYXJlVmVyc2lvbiwgaTE4biwgZ2V0RnVsbFVybCwgZ2V0U2NyaXB0TmFtZSwgaXNSZW1vdGUsIHNlbmRDbWQsIHRydWVKb2luLFxufSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQge1xuICBDTURfU0NSSVBUX0FERCwgQ01EX1NDUklQVF9VUERBVEUsIElOSkVDVF9QQUdFLCBJTkpFQ1RfQVVUTywgVElNRU9VVF9XRUVLLFxufSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgZm9yRWFjaEVudHJ5LCBmb3JFYWNoS2V5LCBmb3JFYWNoVmFsdWUgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnIy9jb21tb24vc3RvcmFnZSc7XG5pbXBvcnQgcGx1Z2luRXZlbnRzIGZyb20gJy4uL3BsdWdpbi9ldmVudHMnO1xuaW1wb3J0IHsgZ2V0TmFtZVVSSSwgcGFyc2VNZXRhLCBuZXdTY3JpcHQsIGdldERlZmF1bHRDdXN0b20gfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgeyB0ZXN0U2NyaXB0LCB0ZXN0QmxhY2tsaXN0IH0gZnJvbSAnLi90ZXN0ZXInO1xuaW1wb3J0IHsgcHJlSW5pdGlhbGl6ZSB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBjb21tYW5kcywgbm90aWZ5IH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCBwYXRjaERCIGZyb20gJy4vcGF0Y2gtZGInO1xuaW1wb3J0IHsgc2V0T3B0aW9uIH0gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCAnLi9zdG9yYWdlLWZldGNoJztcbmltcG9ydCBkYXRhQ2FjaGUgZnJvbSAnLi9jYWNoZSc7XG5cbmNvbnN0IHN0b3JlID0ge307XG5zdG9yYWdlLmJhc2Uuc2V0RGF0YUNhY2hlKGRhdGFDYWNoZSk7XG5zdG9yYWdlLnNjcmlwdC5vbkR1bXAgPSAoaXRlbSkgPT4ge1xuICBzdG9yZS5zY3JpcHRNYXBbaXRlbS5wcm9wcy5pZF0gPSBpdGVtO1xufTtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICBDaGVja1Bvc2l0aW9uOiBzb3J0U2NyaXB0cyxcbiAgQ2hlY2tSZW1vdmU6IGNoZWNrUmVtb3ZlLFxuICAvKiogQHJldHVybiB7Vk1TY3JpcHR9ICovXG4gIEdldFNjcmlwdDogZ2V0U2NyaXB0LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTx7IGl0ZW1zOiBWTVNjcmlwdFtdLCB2YWx1ZXM/IH0+fSAqL1xuICBhc3luYyBFeHBvcnRaaXAoeyB2YWx1ZXMgfSkge1xuICAgIGNvbnN0IHNjcmlwdHMgPSBnZXRTY3JpcHRzKCk7XG4gICAgY29uc3QgaWRzID0gc2NyaXB0cy5tYXAoZ2V0UHJvcHNJZCk7XG4gICAgY29uc3QgY29kZU1hcCA9IGF3YWl0IHN0b3JhZ2UuY29kZS5nZXRNdWx0aShpZHMpO1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogc2NyaXB0cy5tYXAoc2NyaXB0ID0+ICh7IHNjcmlwdCwgY29kZTogY29kZU1hcFtzY3JpcHQucHJvcHMuaWRdIH0pKSxcbiAgICAgIHZhbHVlczogdmFsdWVzID8gYXdhaXQgc3RvcmFnZS52YWx1ZS5nZXRNdWx0aShpZHMpIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59ICovXG4gIEdldFNjcmlwdENvZGUoaWQpIHtcbiAgICByZXR1cm4gc3RvcmFnZS5jb2RlLmdldE9uZShpZCk7XG4gIH0sXG4gIEdldFNjcmlwdFZlcihvcHRzKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZ2V0U2NyaXB0KG9wdHMpO1xuICAgIHJldHVybiBzY3JpcHQgJiYgIXNjcmlwdC5jb25maWcucmVtb3ZlZFxuICAgICAgPyBzY3JpcHQubWV0YS52ZXJzaW9uXG4gICAgICA6IG51bGw7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSAqL1xuICBNYXJrUmVtb3ZlZCh7IGlkLCByZW1vdmVkIH0pIHtcbiAgICByZXR1cm4gdXBkYXRlU2NyaXB0SW5mbyhpZCwge1xuICAgICAgY29uZmlnOiB7IHJlbW92ZWQ6IHJlbW92ZWQgPyAxIDogMCB9LFxuICAgICAgcHJvcHM6IHsgbGFzdE1vZGlmaWVkOiBEYXRlLm5vdygpIH0sXG4gICAgfSk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59ICovXG4gIE1vdmUoeyBpZCwgb2Zmc2V0IH0pIHtcbiAgICBjb25zdCBzY3JpcHQgPSBnZXRTY3JpcHRCeUlkKGlkKTtcbiAgICBjb25zdCBpbmRleCA9IHN0b3JlLnNjcmlwdHMuaW5kZXhPZihzY3JpcHQpO1xuICAgIHN0b3JlLnNjcmlwdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzdG9yZS5zY3JpcHRzLnNwbGljZShpbmRleCArIG9mZnNldCwgMCwgc2NyaXB0KTtcbiAgICByZXR1cm4gbm9ybWFsaXplUG9zaXRpb24oKTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59ICovXG4gIGFzeW5jIFJlbW92ZVNjcmlwdChpZCkge1xuICAgIGNvbnN0IGkgPSBzdG9yZS5zY3JpcHRzLmluZGV4T2YoZ2V0U2NyaXB0QnlJZChpZCkpO1xuICAgIGlmIChpID49IDApIHtcbiAgICAgIHN0b3JlLnNjcmlwdHMuc3BsaWNlKGksIDEpO1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBzdG9yYWdlLnNjcmlwdC5yZW1vdmUoaWQpLFxuICAgICAgICBzdG9yYWdlLmNvZGUucmVtb3ZlKGlkKSxcbiAgICAgICAgc3RvcmFnZS52YWx1ZS5yZW1vdmUoaWQpLFxuICAgICAgXSk7XG4gICAgfVxuICAgIHJldHVybiBzZW5kQ21kKCdSZW1vdmVTY3JpcHQnLCBpZCk7XG4gIH0sXG4gIFBhcnNlTWV0YTogcGFyc2VNZXRhLFxuICBQYXJzZVNjcmlwdDogcGFyc2VTY3JpcHQsXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSAqL1xuICBVcGRhdGVTY3JpcHRJbmZvKHsgaWQsIGNvbmZpZywgY3VzdG9tIH0pIHtcbiAgICByZXR1cm4gdXBkYXRlU2NyaXB0SW5mbyhpZCwge1xuICAgICAgY29uZmlnLFxuICAgICAgY3VzdG9tLFxuICAgICAgcHJvcHM6IHsgbGFzdE1vZGlmaWVkOiBEYXRlLm5vdygpIH0sXG4gICAgfSk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59ICovXG4gIFZhY3V1bTogdmFjdXVtLFxufSk7XG5cbnByZUluaXRpYWxpemUucHVzaChhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgdmVyc2lvbjogbGFzdFZlcnNpb24gfSA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoJ3ZlcnNpb24nKTtcbiAgY29uc3QgdmVyc2lvbiA9IHByb2Nlc3MuZW52LlZNX1ZFUjtcbiAgaWYgKCFsYXN0VmVyc2lvbikgYXdhaXQgcGF0Y2hEQigpO1xuICBpZiAodmVyc2lvbiAhPT0gbGFzdFZlcnNpb24pIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyB2ZXJzaW9uIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xuICBjb25zdCBzY3JpcHRzID0gW107XG4gIGNvbnN0IHN0b3JlSW5mbyA9IHtcbiAgICBpZDogMCxcbiAgICBwb3NpdGlvbjogMCxcbiAgfTtcbiAgY29uc3QgaWRNYXAgPSB7fTtcbiAgY29uc3QgdXJpTWFwID0ge307XG4gIGNvbnN0IG1vZHMgPSBbXTtcbiAgY29uc3QgcmVzVXJscyA9IFtdO1xuICAvKiogQHRoaXMgVk1TY3JpcHRDdXN0b20ucGF0aE1hcCAqL1xuICBjb25zdCByZW1lbWJlclVybCA9IGZ1bmN0aW9uIF8odXJsKSB7IHJlc1VybHMucHVzaCh0aGlzW3VybF0gfHwgdXJsKTsgfTtcbiAgZGF0YTo6Zm9yRWFjaEVudHJ5KChba2V5LCBzY3JpcHRdKSA9PiB7XG4gICAgZGF0YUNhY2hlLnB1dChrZXksIHNjcmlwdCk7XG4gICAgaWYgKGtleS5zdGFydHNXaXRoKHN0b3JhZ2Uuc2NyaXB0LnByZWZpeCkpIHtcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgbWV0YSxcbiAgICAgIC8vICAgY3VzdG9tLFxuICAgICAgLy8gICBwcm9wczogeyBpZCwgcG9zaXRpb24sIHVyaSB9LFxuICAgICAgLy8gICBjb25maWc6IHsgZW5hYmxlZCwgc2hvdWxkVXBkYXRlIH0sXG4gICAgICAvLyB9XG4gICAgICBjb25zdCBpZCA9IGdldEludChrZXkuc2xpY2Uoc3RvcmFnZS5zY3JpcHQucHJlZml4Lmxlbmd0aCkpO1xuICAgICAgaWYgKCFpZCB8fCBpZE1hcFtpZF0pIHtcbiAgICAgICAgLy8gSUQgY29uZmxpY3RzIVxuICAgICAgICAvLyBTaG91bGQgbm90IGhhcHBlbiwgZGlzY2FyZCBkdXBsaWNhdGVzLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZE1hcFtpZF0gPSBzY3JpcHQ7XG4gICAgICBjb25zdCB1cmkgPSBnZXROYW1lVVJJKHNjcmlwdCk7XG4gICAgICBpZiAodXJpTWFwW3VyaV0pIHtcbiAgICAgICAgLy8gTmFtZXNwYWNlIGNvbmZsaWN0cyFcbiAgICAgICAgLy8gU2hvdWxkIG5vdCBoYXBwZW4sIGRpc2NhcmQgZHVwbGljYXRlcy5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdXJpTWFwW3VyaV0gPSBzY3JpcHQ7XG4gICAgICBzY3JpcHQucHJvcHMgPSB7XG4gICAgICAgIC4uLnNjcmlwdC5wcm9wcyxcbiAgICAgICAgaWQsXG4gICAgICAgIHVyaSxcbiAgICAgIH07XG4gICAgICBzY3JpcHQuY3VzdG9tID0ge1xuICAgICAgICAuLi5nZXREZWZhdWx0Q3VzdG9tKCksXG4gICAgICAgIC4uLnNjcmlwdC5jdXN0b20sXG4gICAgICB9O1xuICAgICAgc3RvcmVJbmZvLmlkID0gTWF0aC5tYXgoc3RvcmVJbmZvLmlkLCBpZCk7XG4gICAgICBzdG9yZUluZm8ucG9zaXRpb24gPSBNYXRoLm1heChzdG9yZUluZm8ucG9zaXRpb24sIGdldEludChzY3JpcHQucHJvcHMucG9zaXRpb24pKTtcbiAgICAgIHNjcmlwdHMucHVzaChzY3JpcHQpO1xuICAgICAgLy8gbGlzdGluZyBhbGwga25vd24gcmVzb3VyY2UgdXJscyBpbiBvcmRlciB0byByZW1vdmUgdW51c2VkIG1vZCBrZXlzXG4gICAgICBjb25zdCB7XG4gICAgICAgIGN1c3RvbTogeyBwYXRoTWFwID0ge30gfSA9IHt9LFxuICAgICAgICBtZXRhID0gc2NyaXB0Lm1ldGEgPSB7fSxcbiAgICAgIH0gPSBzY3JpcHQ7XG4gICAgICBtZXRhLmdyYW50ID0gWy4uLm5ldyBTZXQobWV0YS5ncmFudCB8fCBbXSldOyAvLyBkZWR1cGxpY2F0ZVxuICAgICAgbWV0YS5yZXF1aXJlPy5mb3JFYWNoKHJlbWVtYmVyVXJsLCBwYXRoTWFwKTtcbiAgICAgIE9iamVjdC52YWx1ZXMobWV0YS5yZXNvdXJjZXMgfHwge30pLmZvckVhY2gocmVtZW1iZXJVcmwsIHBhdGhNYXApO1xuICAgICAgcGF0aE1hcDo6cmVtZW1iZXJVcmwobWV0YS5pY29uKTtcbiAgICB9IGVsc2UgaWYgKGtleS5zdGFydHNXaXRoKHN0b3JhZ2UubW9kLnByZWZpeCkpIHtcbiAgICAgIG1vZHMucHVzaChrZXkuc2xpY2Uoc3RvcmFnZS5tb2QucHJlZml4Lmxlbmd0aCkpO1xuICAgIH1cbiAgfSk7XG4gIHN0b3JhZ2UubW9kLnJlbW92ZU11bHRpKG1vZHMuZmlsdGVyKHVybCA9PiAhcmVzVXJscy5pbmNsdWRlcyh1cmwpKSk7XG4gIE9iamVjdC5hc3NpZ24oc3RvcmUsIHtcbiAgICBzY3JpcHRzLFxuICAgIHN0b3JlSW5mbyxcbiAgICBzY3JpcHRNYXA6IHNjcmlwdHMucmVkdWNlKChtYXAsIGl0ZW0pID0+IHtcbiAgICAgIG1hcFtpdGVtLnByb3BzLmlkXSA9IGl0ZW07XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KSxcbiAgfSk7XG4gIC8vIFN3aXRjaCBkZWZhdWx0SW5qZWN0SW50byBmcm9tIGBwYWdlYCB0byBgYXV0b2Agd2hlbiB1cGdyYWRpbmcgVk0yLjEyLjcgb3Igb2xkZXJcbiAgaWYgKHZlcnNpb24gIT09IGxhc3RWZXJzaW9uXG4gICYmIElTX0ZJUkVGT1hcbiAgJiYgZGF0YS5vcHRpb25zPy5kZWZhdWx0SW5qZWN0SW50byA9PT0gSU5KRUNUX1BBR0VcbiAgJiYgY29tcGFyZVZlcnNpb24obGFzdFZlcnNpb24sICcyLjEyLjcnKSA8PSAwKSB7XG4gICAgc2V0T3B0aW9uKCdkZWZhdWx0SW5qZWN0SW50bycsIElOSkVDVF9BVVRPKTtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICBjb25zb2xlLmxvZygnc3RvcmU6Jywgc3RvcmUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgfVxuICB2YWN1dW0oZGF0YSk7XG4gIHJldHVybiBzb3J0U2NyaXB0cygpO1xufSk7XG5cbi8qKiBAcmV0dXJuIHtudW1iZXJ9ICovXG5mdW5jdGlvbiBnZXRJbnQodmFsKSB7XG4gIHJldHVybiArdmFsIHx8IDA7XG59XG5cbi8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuZnVuY3Rpb24gZ2V0UHJvcHNJZChzY3JpcHQpIHtcbiAgcmV0dXJuIHNjcmlwdD8ucHJvcHMuaWQ7XG59XG5cbi8qKiBAcmV0dXJuIHt2b2lkfSAqL1xuZnVuY3Rpb24gdXBkYXRlTGFzdE1vZGlmaWVkKCkge1xuICBzZXRPcHRpb24oJ2xhc3RNb2RpZmllZCcsIERhdGUubm93KCkpO1xufVxuXG4vKiogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fSAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5vcm1hbGl6ZVBvc2l0aW9uKCkge1xuICBjb25zdCB1cGRhdGVzID0gc3RvcmUuc2NyaXB0cy5maWx0ZXIoKHsgcHJvcHMgfSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGluZGV4ICsgMTtcbiAgICBjb25zdCByZXMgPSBwcm9wcy5wb3NpdGlvbiAhPT0gcG9zaXRpb247XG4gICAgaWYgKHJlcykgcHJvcHMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICByZXR1cm4gcmVzO1xuICB9KTtcbiAgc3RvcmUuc3RvcmVJbmZvLnBvc2l0aW9uID0gc3RvcmUuc2NyaXB0cy5sZW5ndGg7XG4gIGlmICh1cGRhdGVzLmxlbmd0aCkge1xuICAgIGF3YWl0IHN0b3JhZ2Uuc2NyaXB0LmR1bXAodXBkYXRlcyk7XG4gICAgdXBkYXRlTGFzdE1vZGlmaWVkKCk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZXMubGVuZ3RoO1xufVxuXG4vKiogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fSAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNvcnRTY3JpcHRzKCkge1xuICBzdG9yZS5zY3JpcHRzLnNvcnQoKGEsIGIpID0+IGdldEludChhLnByb3BzLnBvc2l0aW9uKSAtIGdldEludChiLnByb3BzLnBvc2l0aW9uKSk7XG4gIGNvbnN0IGNoYW5nZWQgPSBhd2FpdCBub3JtYWxpemVQb3NpdGlvbigpO1xuICBzZW5kQ21kKCdTY3JpcHRzVXBkYXRlZCcsIG51bGwpO1xuICByZXR1cm4gY2hhbmdlZDtcbn1cblxuLyoqIEByZXR1cm4gez9WTVNjcmlwdH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHRCeUlkKGlkKSB7XG4gIHJldHVybiBzdG9yZS5zY3JpcHRNYXBbaWRdO1xufVxuXG4vKiogQHJldHVybiB7P1ZNU2NyaXB0fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmlwdCh7IGlkLCB1cmksIG1ldGEgfSkge1xuICBsZXQgc2NyaXB0O1xuICBpZiAoaWQpIHtcbiAgICBzY3JpcHQgPSBnZXRTY3JpcHRCeUlkKGlkKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXVyaSkgdXJpID0gZ2V0TmFtZVVSSSh7IG1ldGEsIGlkOiAnQEBzaG91bGQtaGF2ZS1uYW1lJyB9KTtcbiAgICBzY3JpcHQgPSBzdG9yZS5zY3JpcHRzLmZpbmQoKHsgcHJvcHMgfSkgPT4gdXJpID09PSBwcm9wcy51cmkpO1xuICB9XG4gIHJldHVybiBzY3JpcHQ7XG59XG5cbi8qKiBAcmV0dXJuIHtWTVNjcmlwdFtdfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmlwdHMoKSB7XG4gIHJldHVybiBzdG9yZS5zY3JpcHRzLmZpbHRlcihzY3JpcHQgPT4gIXNjcmlwdC5jb25maWcucmVtb3ZlZCk7XG59XG5cbi8qKlxuICogQGRlc2MgTG9hZCB2YWx1ZXMgZm9yIGJhdGNoIHVwZGF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcltdfSBpZHNcbiAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlU3RvcmVzQnlJZHMoaWRzKSB7XG4gIHJldHVybiBzdG9yYWdlLnZhbHVlLmdldE11bHRpKGlkcyk7XG59XG5cbi8qKlxuICogQGRlc2MgRHVtcCB2YWx1ZXMgZm9yIGJhdGNoIHVwZGF0ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVEaWN0IHsgaWQxOiB2YWx1ZTEsIGlkMjogdmFsdWUyLCAuLi4gfVxuICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZHVtcFZhbHVlU3RvcmVzKHZhbHVlRGljdCkge1xuICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIGNvbnNvbGUuaW5mbygnVXBkYXRlIHZhbHVlIHN0b3JlcycsIHZhbHVlRGljdCk7XG4gIGF3YWl0IHN0b3JhZ2UudmFsdWUuZHVtcCh2YWx1ZURpY3QpO1xuICByZXR1cm4gdmFsdWVEaWN0O1xufVxuXG5leHBvcnQgY29uc3QgRU5WX0NBQ0hFX0tFWVMgPSAnY2FjaGVLZXlzJztcbmV4cG9ydCBjb25zdCBFTlZfUkVRX0tFWVMgPSAncmVxS2V5cyc7XG5leHBvcnQgY29uc3QgRU5WX1ZBTFVFX0lEUyA9ICd2YWx1ZUlkcyc7XG5jb25zdCBHTVZBTFVFU19SRSA9IC9eR01bXy5dKGxpc3RWYWx1ZXN8KFtnc11ldHxkZWxldGUpVmFsdWUpJC87XG5jb25zdCBSVU5fQVRfUkUgPSAvXmRvY3VtZW50LShzdGFydHxib2R5fGVuZHxpZGxlKSQvO1xuLyoqXG4gKiBAZGVzYyBHZXQgc2NyaXB0cyB0byBiZSBpbmplY3RlZCB0byBwYWdlIHdpdGggc3BlY2lmaWMgVVJMLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2NyaXB0c0J5VVJMKHVybCwgaXNUb3ApIHtcbiAgY29uc3QgYWxsU2NyaXB0cyA9IHRlc3RCbGFja2xpc3QodXJsKVxuICAgID8gW11cbiAgICA6IHN0b3JlLnNjcmlwdHMuZmlsdGVyKHNjcmlwdCA9PiAoXG4gICAgICAhc2NyaXB0LmNvbmZpZy5yZW1vdmVkXG4gICAgICAmJiAoaXNUb3AgfHwgIShzY3JpcHQuY3VzdG9tLm5vZnJhbWVzID8/IHNjcmlwdC5tZXRhLm5vZnJhbWVzKSlcbiAgICAgICYmIHRlc3RTY3JpcHQodXJsLCBzY3JpcHQpXG4gICAgKSk7XG4gIGNvbnN0IGRpc2FibGVkSWRzID0gW107XG4gIC8qKiBAbmFtZXNwYWNlIFZNU2NyaXB0QnlVcmxEYXRhICovXG4gIGNvbnN0IFtlbnZTdGFydCwgZW52RGVsYXllZF0gPSBbMCwgMV0ubWFwKCgpID0+ICh7XG4gICAgaWRzOiBbXSxcbiAgICAvKiogQHR5cGUgeyhWTVNjcmlwdCAmIFZNSW5qZWN0ZWRTY3JpcHQpW119ICovXG4gICAgc2NyaXB0czogW10sXG4gICAgW0VOVl9DQUNIRV9LRVlTXTogW10sXG4gICAgW0VOVl9SRVFfS0VZU106IFtdLFxuICAgIFtFTlZfVkFMVUVfSURTXTogW10sXG4gIH0pKTtcbiAgYWxsU2NyaXB0cy5mb3JFYWNoKChzY3JpcHQpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBzY3JpcHQucHJvcHM7XG4gICAgaWYgKCFzY3JpcHQuY29uZmlnLmVuYWJsZWQpIHtcbiAgICAgIGRpc2FibGVkSWRzLnB1c2goaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IG1ldGEsIGN1c3RvbSB9ID0gc2NyaXB0O1xuICAgIGNvbnN0IHsgcGF0aE1hcCA9IGJ1aWxkUGF0aE1hcChzY3JpcHQpIH0gPSBjdXN0b207XG4gICAgY29uc3QgcnVuQXQgPSBgJHtjdXN0b20ucnVuQXQgfHwgbWV0YS5ydW5BdCB8fCAnJ31gLm1hdGNoKFJVTl9BVF9SRSk/LlsxXSB8fCAnZW5kJztcbiAgICBjb25zdCBlbnYgPSBydW5BdCA9PT0gJ3N0YXJ0JyB8fCBydW5BdCA9PT0gJ2JvZHknID8gZW52U3RhcnQgOiBlbnZEZWxheWVkO1xuICAgIGVudi5pZHMucHVzaChpZCk7XG4gICAgaWYgKG1ldGEuZ3JhbnQuc29tZShHTVZBTFVFU19SRS50ZXN0LCBHTVZBTFVFU19SRSkpIHtcbiAgICAgIGVudltFTlZfVkFMVUVfSURTXS5wdXNoKGlkKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbbGlzdCwgbmFtZV0gb2YgW1xuICAgICAgW21ldGEucmVxdWlyZSwgRU5WX1JFUV9LRVlTXSxcbiAgICAgIFtPYmplY3QudmFsdWVzKG1ldGEucmVzb3VyY2VzKSwgRU5WX0NBQ0hFX0tFWVNdLFxuICAgIF0pIHtcbiAgICAgIGxpc3QuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBrZXkgPSBwYXRoTWFwW2tleV0gfHwga2V5O1xuICAgICAgICBpZiAoIWVudlN0YXJ0W25hbWVdLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBlbnZbbmFtZV0ucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqIEBuYW1lc3BhY2UgVk1JbmplY3RlZFNjcmlwdCAqL1xuICAgIGVudi5zY3JpcHRzLnB1c2goeyAuLi5zY3JpcHQsIHJ1bkF0IH0pO1xuICB9KTtcbiAgaWYgKGVudkRlbGF5ZWQuaWRzLmxlbmd0aCkge1xuICAgIGVudkRlbGF5ZWQucHJvbWlzZSA9IHJlYWRFbnZpcm9ubWVudERhdGEoZW52RGVsYXllZCk7XG4gIH1cbiAgLyoqIEBuYW1lc3BhY2UgVk1TY3JpcHRCeVVybERhdGEgKi9cbiAgcmV0dXJuIHtcbiAgICAuLi5lbnZTdGFydCxcbiAgICAuLi5hd2FpdCByZWFkRW52aXJvbm1lbnREYXRhKGVudlN0YXJ0KSxcbiAgICBkaXNhYmxlZElkcyxcbiAgICBlbnZEZWxheWVkLFxuICB9O1xufVxuXG4vKipcbiAqIE9iamVjdCBrZXlzID09IGFyZWFzIGluIGBzdG9yYWdlYCBtb2R1bGUuXG4gKiBAbmFtZXNwYWNlIFZNU2NyaXB0QnlVcmxEYXRhXG4gKi9cbmNvbnN0IFNUT1JBR0VfUk9VVEVTID0gT2JqZWN0LmVudHJpZXMoe1xuICBjYWNoZTogRU5WX0NBQ0hFX0tFWVMsXG4gIGNvZGU6ICdpZHMnLFxuICByZXF1aXJlOiBFTlZfUkVRX0tFWVMsXG4gIHZhbHVlOiBFTlZfVkFMVUVfSURTLFxufSk7XG5jb25zdCByZXRyaWVkU3RvcmFnZUtleXMgPSB7fTtcblxuYXN5bmMgZnVuY3Rpb24gcmVhZEVudmlyb25tZW50RGF0YShlbnYsIGlzUmV0cnkpIHtcbiAgY29uc3Qga2V5cyA9IFtdO1xuICBTVE9SQUdFX1JPVVRFUy5mb3JFYWNoKChbYXJlYSwgc3JjSWRzXSkgPT4ge1xuICAgIGVudltzcmNJZHNdLmZvckVhY2goaWQgPT4ge1xuICAgICAga2V5cy5wdXNoKHN0b3JhZ2VbYXJlYV0uZ2V0S2V5KGlkKSk7XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgc3RvcmFnZS5iYXNlLmdldE11bHRpKGtleXMpO1xuICBmb3IgKGNvbnN0IFthcmVhLCBzcmNJZHNdIG9mIFNUT1JBR0VfUk9VVEVTKSB7XG4gICAgZW52W2FyZWFdID0ge307XG4gICAgZm9yIChjb25zdCBpZCBvZiBlbnZbc3JjSWRzXSkge1xuICAgICAgY29uc3QgdmFsID0gZGF0YVtzdG9yYWdlW2FyZWFdLmdldEtleShpZCldO1xuICAgICAgZW52W2FyZWFdW2lkXSA9IHZhbDtcbiAgICAgIGlmICh2YWwgPT0gbnVsbCAmJiBhcmVhICE9PSAndmFsdWUnICYmIHJldHJpZWRTdG9yYWdlS2V5c1thcmVhICsgaWRdICE9PSAyKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IGBUaGUgXCIke2FyZWF9XCIgc3RvcmFnZSBpcyBtaXNzaW5nIFwiJHtpZH1cIiFgO1xuICAgICAgICBjb25zdCBlcnIyID0gJ1ZhY3V1bWluZyBkaWQgbm90IGhlbHAuIFBsZWFzZSByZWluc3RhbGwgdGhlIGFmZmVjdGVkIHNjcmlwdHMuJztcbiAgICAgICAgcmV0cmllZFN0b3JhZ2VLZXlzW2FyZWEgKyBpZF0gPSBpc1JldHJ5ID8gMiA6IDE7XG4gICAgICAgIGlmICghaXNSZXRyeSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlcnIsICdWYWN1dW1pbmcuLi4nKTtcbiAgICAgICAgICBpZiAoYXdhaXQgdmFjdXVtKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFkRW52aXJvbm1lbnREYXRhKGVudiwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLCBlcnIyKTtcbiAgICAgICAgbm90aWZ5KHsgdGl0bGU6IGVyciwgYm9keTogZXJyMiB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVudjtcbn1cblxuLyoqXG4gKiBAZGVzYyBHZXQgZGF0YSBmb3IgZGFzaGJvYXJkLlxuICogQHJldHVybiB7UHJvbWlzZTx7IHNjcmlwdHM6IFZNU2NyaXB0W10sIGNhY2hlOiBPYmplY3QgfT59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhKGlkcykge1xuICBjb25zdCBzY3JpcHRzID0gaWRzID8gaWRzLm1hcChnZXRTY3JpcHRCeUlkKSA6IHN0b3JlLnNjcmlwdHM7XG4gIHJldHVybiB7XG4gICAgc2NyaXB0cyxcbiAgICBjYWNoZTogYXdhaXQgZ2V0SWNvbkNhY2hlKHNjcmlwdHMpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRJY29uQ2FjaGUoc2NyaXB0cykge1xuICBjb25zdCBpY29uVXJscyA9IFtdO1xuICBzY3JpcHRzLmZvckVhY2goKHNjcmlwdCkgPT4ge1xuICAgIGNvbnN0IHsgaWNvbiB9ID0gc2NyaXB0Lm1ldGE7XG4gICAgaWYgKGlzUmVtb3RlKGljb24pKSB7XG4gICAgICBpY29uVXJscy5wdXNoKHNjcmlwdC5jdXN0b20ucGF0aE1hcD8uW2ljb25dIHx8IGljb24pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBpY29uVXJscy5sZW5ndGhcbiAgICA/IHN0b3JhZ2UuY2FjaGUuZ2V0TXVsdGkoaWNvblVybHMsIHVuZGVmaW5lZCwgc3RvcmFnZS5jYWNoZS5tYWtlRGF0YVVyaSlcbiAgICA6IHt9O1xufVxuXG4vKiogQHJldHVybiB7bnVtYmVyfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmVtb3ZlKHsgZm9yY2UgfSA9IHt9KSB7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gIGNvbnN0IHRvUmVtb3ZlID0gc3RvcmUuc2NyaXB0cy5maWx0ZXIoc2NyaXB0ID0+IHNjcmlwdC5jb25maWcucmVtb3ZlZCAmJiAoXG4gICAgZm9yY2UgfHwgbm93IC0gZ2V0SW50KHNjcmlwdC5wcm9wcy5sYXN0TW9kaWZpZWQpID4gVElNRU9VVF9XRUVLXG4gICkpO1xuICBpZiAodG9SZW1vdmUubGVuZ3RoKSB7XG4gICAgc3RvcmUuc2NyaXB0cyA9IHN0b3JlLnNjcmlwdHMuZmlsdGVyKHNjcmlwdCA9PiAhc2NyaXB0LmNvbmZpZy5yZW1vdmVkKTtcbiAgICBjb25zdCBpZHMgPSB0b1JlbW92ZS5tYXAoZ2V0UHJvcHNJZCk7XG4gICAgc3RvcmFnZS5zY3JpcHQucmVtb3ZlTXVsdGkoaWRzKTtcbiAgICBzdG9yYWdlLmNvZGUucmVtb3ZlTXVsdGkoaWRzKTtcbiAgICBzdG9yYWdlLnZhbHVlLnJlbW92ZU11bHRpKGlkcyk7XG4gIH1cbiAgcmV0dXJuIHRvUmVtb3ZlLmxlbmd0aDtcbn1cblxuLyoqIEByZXR1cm4ge3N0cmluZ30gKi9cbmZ1bmN0aW9uIGdldFVVSUQoKSB7XG4gIGNvbnN0IHJuZCA9IG5ldyBVaW50MTZBcnJheSg4KTtcbiAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMocm5kKTtcbiAgLy8geHh4eHh4eHgteHh4eC1NeHh4LU54eHgteHh4eHh4eHh4eHh4XG4gIC8vIFdlJ3JlIHVzaW5nIFVVSUR2NCB2YXJpYW50IDEgc28gTj00IGFuZCBNPThcbiAgLy8gU2VlIGZvcm1hdF91dWlkX3Yzb3I1IGluIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvcmZjL3JmYzQxMjIudHh0XG4gIHJuZFszXSA9IHJuZFszXSAmIDB4MEZGRiB8IDB4NDAwMDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1iaXR3aXNlXG4gIHJuZFs0XSA9IHJuZFs0XSAmIDB4M0ZGRiB8IDB4ODAwMDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1iaXR3aXNlXG4gIHJldHVybiAnMDEtMi0zLTQtNTY3Jy5yZXBsYWNlKC9cXGQvZywgaSA9PiAocm5kW2ldICsgMHgxXzAwMDApLnRvU3RyaW5nKDE2KS5zbGljZSgtNCkpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Vk1TY3JpcHR9IHNjcmlwdFxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAqIEByZXR1cm4ge1Byb21pc2U8Vk1TY3JpcHRbXT59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNhdmVTY3JpcHQoc2NyaXB0LCBjb2RlKSB7XG4gIGNvbnN0IGNvbmZpZyA9IHNjcmlwdC5jb25maWcgfHwge307XG4gIGNvbmZpZy5lbmFibGVkID0gZ2V0SW50KGNvbmZpZy5lbmFibGVkKTtcbiAgY29uZmlnLnNob3VsZFVwZGF0ZSA9IGdldEludChjb25maWcuc2hvdWxkVXBkYXRlKTtcbiAgY29uc3QgcHJvcHMgPSBzY3JpcHQucHJvcHMgfHwge307XG4gIGxldCBvbGRTY3JpcHQ7XG4gIGlmICghcHJvcHMuaWQpIHtcbiAgICBzdG9yZS5zdG9yZUluZm8uaWQgKz0gMTtcbiAgICBwcm9wcy5pZCA9IHN0b3JlLnN0b3JlSW5mby5pZDtcbiAgfSBlbHNlIHtcbiAgICBvbGRTY3JpcHQgPSBzdG9yZS5zY3JpcHRNYXBbcHJvcHMuaWRdO1xuICB9XG4gIHByb3BzLnVyaSA9IGdldE5hbWVVUkkoc2NyaXB0KTtcbiAgcHJvcHMudXVpZCA9IHByb3BzLnV1aWQgfHwgY3J5cHRvLnJhbmRvbVVVSUQ/LigpIHx8IGdldFVVSUQoKTtcbiAgLy8gRG8gbm90IGFsbG93IHNjcmlwdCB3aXRoIHNhbWUgbmFtZSBhbmQgbmFtZXNwYWNlXG4gIGlmIChzdG9yZS5zY3JpcHRzLnNvbWUoKHsgcHJvcHM6IHsgaWQsIHVyaSB9ID0ge30gfSkgPT4gcHJvcHMuaWQgIT09IGlkICYmIHByb3BzLnVyaSA9PT0gdXJpKSkge1xuICAgIHRocm93IGkxOG4oJ21zZ05hbWVzcGFjZUNvbmZsaWN0Jyk7XG4gIH1cbiAgaWYgKG9sZFNjcmlwdCkge1xuICAgIHNjcmlwdC5jb25maWcgPSB7IC4uLm9sZFNjcmlwdC5jb25maWcsIC4uLmNvbmZpZyB9O1xuICAgIHNjcmlwdC5wcm9wcyA9IHsgLi4ub2xkU2NyaXB0LnByb3BzLCAuLi5wcm9wcyB9O1xuICAgIGNvbnN0IGluZGV4ID0gc3RvcmUuc2NyaXB0cy5pbmRleE9mKG9sZFNjcmlwdCk7XG4gICAgc3RvcmUuc2NyaXB0c1tpbmRleF0gPSBzY3JpcHQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFwcm9wcy5wb3NpdGlvbikge1xuICAgICAgc3RvcmUuc3RvcmVJbmZvLnBvc2l0aW9uICs9IDE7XG4gICAgICBwcm9wcy5wb3NpdGlvbiA9IHN0b3JlLnN0b3JlSW5mby5wb3NpdGlvbjtcbiAgICB9IGVsc2UgaWYgKHN0b3JlLnN0b3JlSW5mby5wb3NpdGlvbiA8IHByb3BzLnBvc2l0aW9uKSB7XG4gICAgICBzdG9yZS5zdG9yZUluZm8ucG9zaXRpb24gPSBwcm9wcy5wb3NpdGlvbjtcbiAgICB9XG4gICAgc2NyaXB0LmNvbmZpZyA9IGNvbmZpZztcbiAgICBzY3JpcHQucHJvcHMgPSBwcm9wcztcbiAgICBzdG9yZS5zY3JpcHRzLnB1c2goc2NyaXB0KTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgIHN0b3JhZ2Uuc2NyaXB0LmR1bXAoc2NyaXB0KSxcbiAgICBzdG9yYWdlLmNvZGUuc2V0KHByb3BzLmlkLCBjb2RlKSxcbiAgXSk7XG59XG5cbi8qKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNjcmlwdEluZm8oaWQsIGRhdGEpIHtcbiAgY29uc3Qgc2NyaXB0ID0gc3RvcmUuc2NyaXB0TWFwW2lkXTtcbiAgaWYgKCFzY3JpcHQpIHRocm93IG51bGw7XG4gIHNjcmlwdC5wcm9wcyA9IHsgLi4uc2NyaXB0LnByb3BzLCAuLi5kYXRhLnByb3BzIH07XG4gIHNjcmlwdC5jb25maWcgPSB7IC4uLnNjcmlwdC5jb25maWcsIC4uLmRhdGEuY29uZmlnIH07XG4gIHNjcmlwdC5jdXN0b20gPSB7IC4uLnNjcmlwdC5jdXN0b20sIC4uLmRhdGEuY3VzdG9tIH07XG4gIGF3YWl0IHN0b3JhZ2Uuc2NyaXB0LmR1bXAoc2NyaXB0KTtcbiAgcmV0dXJuIHNlbmRDbWQoQ01EX1NDUklQVF9VUERBVEUsIHsgd2hlcmU6IHsgaWQgfSwgdXBkYXRlOiBzY3JpcHQgfSk7XG59XG5cbi8qKiBAcmV0dXJuIHtQcm9taXNlPHsgaXNOZXc/LCB1cGRhdGUsIHdoZXJlIH0+fSAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlU2NyaXB0KHNyYykge1xuICBjb25zdCBtZXRhID0gcGFyc2VNZXRhKHNyYy5jb2RlKTtcbiAgaWYgKCFtZXRhLm5hbWUpIHRocm93IGAke2kxOG4oJ21zZ0ludmFsaWRTY3JpcHQnKX1cXG4ke2kxOG4oJ2xhYmVsTm9OYW1lJyl9YDtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHVwZGF0ZToge1xuICAgICAgbWVzc2FnZTogc3JjLm1lc3NhZ2UgPT0gbnVsbCA/IGkxOG4oJ21zZ1VwZGF0ZWQnKSA6IHNyYy5tZXNzYWdlIHx8ICcnLFxuICAgIH0sXG4gIH07XG4gIGxldCBjbWQgPSBDTURfU0NSSVBUX1VQREFURTtcbiAgbGV0IHNjcmlwdDtcbiAgY29uc3Qgb2xkU2NyaXB0ID0gYXdhaXQgZ2V0U2NyaXB0KHsgaWQ6IHNyYy5pZCwgbWV0YSB9KTtcbiAgaWYgKG9sZFNjcmlwdCkge1xuICAgIGlmIChzcmMuaXNOZXcpIHRocm93IGkxOG4oJ21zZ05hbWVzcGFjZUNvbmZsaWN0Jyk7XG4gICAgc2NyaXB0ID0geyAuLi5vbGRTY3JpcHQgfTtcbiAgfSBlbHNlIHtcbiAgICAoeyBzY3JpcHQgfSA9IG5ld1NjcmlwdCgpKTtcbiAgICBjbWQgPSBDTURfU0NSSVBUX0FERDtcbiAgICByZXN1bHQuaXNOZXcgPSB0cnVlO1xuICAgIHJlc3VsdC51cGRhdGUubWVzc2FnZSA9IGkxOG4oJ21zZ0luc3RhbGxlZCcpO1xuICB9XG4gIHNjcmlwdC5jb25maWcgPSB7XG4gICAgLi4uc2NyaXB0LmNvbmZpZyxcbiAgICAuLi5zcmMuY29uZmlnLFxuICAgIHJlbW92ZWQ6IDAsIC8vIGZvcmNlIHJlc2V0IGByZW1vdmVkYCBzaW5jZSB0aGlzIGlzIGFuIGluc3RhbGxhdGlvblxuICB9O1xuICBzY3JpcHQuY3VzdG9tID0ge1xuICAgIC4uLnNjcmlwdC5jdXN0b20sXG4gICAgLi4uc3JjLmN1c3RvbSxcbiAgfTtcbiAgc2NyaXB0LnByb3BzID0ge1xuICAgIC4uLnNjcmlwdC5wcm9wcyxcbiAgICBsYXN0TW9kaWZpZWQ6IERhdGUubm93KCksXG4gICAgbGFzdFVwZGF0ZWQ6IERhdGUubm93KCksXG4gICAgLi4uc3JjLnByb3BzLFxuICB9O1xuICBzY3JpcHQubWV0YSA9IG1ldGE7XG4gIGlmICghbWV0YS5ob21lcGFnZVVSTCAmJiAhc2NyaXB0LmN1c3RvbS5ob21lcGFnZVVSTCAmJiBpc1JlbW90ZShzcmMuZnJvbSkpIHtcbiAgICBzY3JpcHQuY3VzdG9tLmhvbWVwYWdlVVJMID0gc3JjLmZyb207XG4gIH1cbiAgaWYgKGlzUmVtb3RlKHNyYy51cmwpKSBzY3JpcHQuY3VzdG9tLmxhc3RJbnN0YWxsVVJMID0gc3JjLnVybDtcbiAgaWYgKHNyYy5wb3NpdGlvbikgc2NyaXB0LnByb3BzLnBvc2l0aW9uID0gK3NyYy5wb3NpdGlvbjtcbiAgYnVpbGRQYXRoTWFwKHNjcmlwdCwgc3JjLnVybCk7XG4gIGF3YWl0IHNhdmVTY3JpcHQoc2NyaXB0LCBzcmMuY29kZSk7XG4gIGZldGNoUmVzb3VyY2VzKHNjcmlwdCwgc3JjKTtcbiAgT2JqZWN0LmFzc2lnbihyZXN1bHQudXBkYXRlLCBzY3JpcHQsIHNyYy51cGRhdGUpO1xuICByZXN1bHQud2hlcmUgPSB7IGlkOiBzY3JpcHQucHJvcHMuaWQgfTtcbiAgc2VuZENtZChjbWQsIHJlc3VsdCk7XG4gIHBsdWdpbkV2ZW50cy5lbWl0KCdzY3JpcHRDaGFuZ2VkJywgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIEByZXR1cm4ge09iamVjdH0gKi9cbmZ1bmN0aW9uIGJ1aWxkUGF0aE1hcChzY3JpcHQsIGJhc2UpIHtcbiAgY29uc3QgeyBtZXRhIH0gPSBzY3JpcHQ7XG4gIGNvbnN0IGJhc2VVcmwgPSBiYXNlIHx8IHNjcmlwdC5jdXN0b20ubGFzdEluc3RhbGxVUkw7XG4gIGNvbnN0IHBhdGhNYXAgPSBiYXNlVXJsID8gW1xuICAgIC4uLm1ldGEucmVxdWlyZSxcbiAgICAuLi5PYmplY3QudmFsdWVzKG1ldGEucmVzb3VyY2VzKSxcbiAgICBtZXRhLmljb24sXG4gIF0ucmVkdWNlKChtYXAsIGtleSkgPT4ge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGNvbnN0IGZ1bGxVcmwgPSBnZXRGdWxsVXJsKGtleSwgYmFzZVVybCk7XG4gICAgICBpZiAoZnVsbFVybCAhPT0ga2V5KSBtYXBba2V5XSA9IGZ1bGxVcmw7XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG4gIH0sIHt9KSA6IHt9O1xuICBzY3JpcHQuY3VzdG9tLnBhdGhNYXAgPSBwYXRoTWFwO1xuICByZXR1cm4gcGF0aE1hcDtcbn1cblxuLyoqIEByZXR1cm4ge1Byb21pc2U8P3N0cmluZz59IHJlc29sdmVzIHRvIGVycm9yIHRleHQgaWYgYHJlc291cmNlQ2FjaGVgIGlzIGFic2VudCAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUmVzb3VyY2VzKHNjcmlwdCwgcmVzb3VyY2VDYWNoZSwgcmVxT3B0aW9ucykge1xuICBjb25zdCB7IGN1c3RvbTogeyBwYXRoTWFwIH0sIG1ldGEgfSA9IHNjcmlwdDtcbiAgY29uc3Qgc25hdGNoID0gKHVybCwgdHlwZSwgdmFsaWRhdG9yKSA9PiB7XG4gICAgdXJsID0gcGF0aE1hcFt1cmxdIHx8IHVybDtcbiAgICBjb25zdCBjb250ZW50cyA9IHJlc291cmNlQ2FjaGU/Llt0eXBlXT8uW3VybF07XG4gICAgcmV0dXJuIGNvbnRlbnRzICE9IG51bGwgJiYgIXZhbGlkYXRvclxuICAgICAgPyBzdG9yYWdlW3R5cGVdLnNldCh1cmwsIGNvbnRlbnRzKSAmJiBudWxsXG4gICAgICA6IHN0b3JhZ2VbdHlwZV0uZmV0Y2godXJsLCByZXFPcHRpb25zLCB2YWxpZGF0b3IpLmNhdGNoKGVyciA9PiBlcnIpO1xuICB9O1xuICBjb25zdCBlcnJvcnMgPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgLi4ubWV0YS5yZXF1aXJlLm1hcCh1cmwgPT4gc25hdGNoKHVybCwgJ3JlcXVpcmUnKSksXG4gICAgLi4uT2JqZWN0LnZhbHVlcyhtZXRhLnJlc291cmNlcykubWFwKHVybCA9PiBzbmF0Y2godXJsLCAnY2FjaGUnKSksXG4gICAgaXNSZW1vdGUobWV0YS5pY29uKSAmJiBzbmF0Y2gobWV0YS5pY29uLCAnY2FjaGUnLCB2YWxpZGF0ZUltYWdlKSxcbiAgXSk7XG4gIGlmICghcmVzb3VyY2VDYWNoZT8uaWdub3JlRGVwc0Vycm9ycykge1xuICAgIGNvbnN0IGVycm9yID0gZXJyb3JzLm1hcChmb3JtYXRIdHRwRXJyb3IpOjp0cnVlSm9pbignXFxuJyk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gaTE4bignbXNnRXJyb3JGZXRjaGluZ1Jlc291cmNlJyk7XG4gICAgICBzZW5kQ21kKENNRF9TQ1JJUFRfVVBEQVRFLCB7XG4gICAgICAgIHVwZGF0ZTogeyBlcnJvciwgbWVzc2FnZSB9LFxuICAgICAgICB3aGVyZTogeyBpZDogc2NyaXB0LnByb3BzLmlkIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBgJHttZXNzYWdlfVxcbiR7ZXJyb3J9YDtcbiAgICB9XG4gIH1cbn1cblxuLyoqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IHJlc29sdmVzIG9uIHN1Y2Nlc3MsIHJlamVjdHMgb24gZXJyb3IgKi9cbmZ1bmN0aW9uIHZhbGlkYXRlSW1hZ2UodXJsLCBidWYsIHR5cGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBibG9iVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbYnVmXSwgeyB0eXBlIH0pKTtcbiAgICBjb25zdCBvbkRvbmUgPSAoZSkgPT4ge1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVXJsKTtcbiAgICAgIGlmIChlLnR5cGUgPT09ICdsb2FkJykgcmVzb2x2ZSgpO1xuICAgICAgZWxzZSByZWplY3QoYElNQUdFX0VSUk9SOiAke3VybH1gKTtcbiAgICB9O1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uub25sb2FkID0gb25Eb25lO1xuICAgIGltYWdlLm9uZXJyb3IgPSBvbkRvbmU7XG4gICAgaW1hZ2Uuc3JjID0gYmxvYlVybDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEh0dHBFcnJvcihlKSB7XG4gIHJldHVybiBlICYmIFtlLnN0YXR1cyAmJiBgSFRUUCR7ZS5zdGF0dXN9YCwgZS51cmxdOjp0cnVlSm9pbignICcpIHx8IGU7XG59XG5cbmxldCBfdmFjdXVtaW5nO1xuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWN1dW0oZGF0YSkge1xuICBpZiAoX3ZhY3V1bWluZykgcmV0dXJuIF92YWN1dW1pbmc7XG4gIGxldCBudW1GaXhlcyA9IDA7XG4gIGxldCByZXNvbHZlU2VsZjtcbiAgX3ZhY3V1bWluZyA9IG5ldyBQcm9taXNlKHIgPT4geyByZXNvbHZlU2VsZiA9IHI7IH0pO1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgY29uc3QgdG9GZXRjaCA9IFtdO1xuICBjb25zdCBrZXlzVG9SZW1vdmUgPSBbXTtcbiAgY29uc3QgdmFsdWVLZXlzID0ge307XG4gIGNvbnN0IGNhY2hlS2V5cyA9IHt9O1xuICBjb25zdCByZXF1aXJlS2V5cyA9IHt9O1xuICBjb25zdCBjb2RlS2V5cyA9IHt9O1xuICBjb25zdCBtYXBwaW5ncyA9IFtcbiAgICBbc3RvcmFnZS52YWx1ZSwgdmFsdWVLZXlzXSxcbiAgICBbc3RvcmFnZS5jYWNoZSwgY2FjaGVLZXlzXSxcbiAgICBbc3RvcmFnZS5yZXF1aXJlLCByZXF1aXJlS2V5c10sXG4gICAgW3N0b3JhZ2UuY29kZSwgY29kZUtleXNdLFxuICBdO1xuICBpZiAoIWRhdGEpIGRhdGEgPSBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XG4gIGRhdGE6OmZvckVhY2hLZXkoKGtleSkgPT4ge1xuICAgIG1hcHBpbmdzLnNvbWUoKFtzdWJzdG9yZSwgbWFwXSkgPT4ge1xuICAgICAgY29uc3QgeyBwcmVmaXggfSA9IHN1YnN0b3JlO1xuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKHByZWZpeCkpIHtcbiAgICAgICAgLy8gLTEgZm9yIHVudG91Y2hlZCwgMSBmb3IgdG91Y2hlZCwgMiBmb3IgbWlzc2luZ1xuICAgICAgICBtYXBba2V5LnNsaWNlKHByZWZpeC5sZW5ndGgpXSA9IC0xO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IHRvdWNoID0gKG9iaiwga2V5LCBzY3JpcHRJZCkgPT4ge1xuICAgIGlmIChvYmpba2V5XSA8IDApIHtcbiAgICAgIG9ialtrZXldID0gMTtcbiAgICB9IGVsc2UgaWYgKCFvYmpba2V5XSkge1xuICAgICAgb2JqW2tleV0gPSAyICsgc2NyaXB0SWQ7XG4gICAgfVxuICB9O1xuICBzdG9yZS5zY3JpcHRzLmZvckVhY2goKHNjcmlwdCkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHNjcmlwdC5wcm9wcztcbiAgICB0b3VjaChjb2RlS2V5cywgaWQsIGlkKTtcbiAgICB0b3VjaCh2YWx1ZUtleXMsIGlkLCBpZCk7XG4gICAgaWYgKCFzY3JpcHQuY3VzdG9tLnBhdGhNYXApIGJ1aWxkUGF0aE1hcChzY3JpcHQpO1xuICAgIGNvbnN0IHsgcGF0aE1hcCB9ID0gc2NyaXB0LmN1c3RvbTtcbiAgICBzY3JpcHQubWV0YS5yZXF1aXJlLmZvckVhY2goKHVybCkgPT4ge1xuICAgICAgdG91Y2gocmVxdWlyZUtleXMsIHBhdGhNYXBbdXJsXSB8fCB1cmwsIGlkKTtcbiAgICB9KTtcbiAgICBzY3JpcHQubWV0YS5yZXNvdXJjZXM6OmZvckVhY2hWYWx1ZSgodXJsKSA9PiB7XG4gICAgICB0b3VjaChjYWNoZUtleXMsIHBhdGhNYXBbdXJsXSB8fCB1cmwsIGlkKTtcbiAgICB9KTtcbiAgICBjb25zdCB7IGljb24gfSA9IHNjcmlwdC5tZXRhO1xuICAgIGlmIChpc1JlbW90ZShpY29uKSkge1xuICAgICAgY29uc3QgZnVsbFVybCA9IHBhdGhNYXBbaWNvbl0gfHwgaWNvbjtcbiAgICAgIHRvdWNoKGNhY2hlS2V5cywgZnVsbFVybCwgaWQpO1xuICAgIH1cbiAgfSk7XG4gIG1hcHBpbmdzLmZvckVhY2goKFtzdWJzdG9yZSwgbWFwXSkgPT4ge1xuICAgIG1hcDo6Zm9yRWFjaEVudHJ5KChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgLy8gcmVkdW5kYW50IHZhbHVlXG4gICAgICAgIGtleXNUb1JlbW92ZS5wdXNoKHN1YnN0b3JlLmdldEtleShrZXkpKTtcbiAgICAgICAgbnVtRml4ZXMgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPj0gMiAmJiBzdWJzdG9yZS5mZXRjaCkge1xuICAgICAgICAvLyBtaXNzaW5nIHJlc291cmNlXG4gICAgICAgIGtleXNUb1JlbW92ZS5wdXNoKHN0b3JhZ2UubW9kLmdldEtleShrZXkpKTtcbiAgICAgICAgdG9GZXRjaC5wdXNoKHN1YnN0b3JlLmZldGNoKGtleSkuY2F0Y2goZXJyID0+IGAke1xuICAgICAgICAgIGdldFNjcmlwdE5hbWUoZ2V0U2NyaXB0QnlJZCh2YWx1ZSAtIDIpKVxuICAgICAgICB9OiAke1xuICAgICAgICAgIGZvcm1hdEh0dHBFcnJvcihlcnIpXG4gICAgICAgIH1gKSk7XG4gICAgICAgIG51bUZpeGVzICs9IDE7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBpZiAobnVtRml4ZXMpIHtcbiAgICBhd2FpdCBzdG9yYWdlLmJhc2UucmVtb3ZlTXVsdGkoa2V5c1RvUmVtb3ZlKTsgLy8gUmVtb3ZpbmcgYG1vZGAgYmVmb3JlIGZldGNoaW5nXG4gICAgcmVzdWx0LmVycm9ycyA9IChhd2FpdCBQcm9taXNlLmFsbCh0b0ZldGNoKSkuZmlsdGVyKEJvb2xlYW4pO1xuICB9XG4gIF92YWN1dW1pbmcgPSBudWxsO1xuICByZXN1bHQuZml4ZXMgPSBudW1GaXhlcztcbiAgcmVzb2x2ZVNlbGYocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIEB0eXBlZGVmIFZNU2NyaXB0XG4gKiBAcHJvcGVydHkge1ZNU2NyaXB0Q29uZmlnfSBjb25maWdcbiAqIEBwcm9wZXJ0eSB7Vk1TY3JpcHRDdXN0b219IGN1c3RvbVxuICogQHByb3BlcnR5IHtWTVNjcmlwdE1ldGF9IG1ldGFcbiAqIEBwcm9wZXJ0eSB7Vk1TY3JpcHRQcm9wc30gcHJvcHNcbiAqL1xuLyoqIEB0eXBlZGVmIFZNU2NyaXB0Q29uZmlnICpcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZW5hYmxlZCAtIHN0b3JlZCBhcyAwIG9yIDFcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gcmVtb3ZlZCAtIHN0b3JlZCBhcyAwIG9yIDFcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2hvdWxkVXBkYXRlIC0gc3RvcmVkIGFzIDAgb3IgMVxuICogQHByb3BlcnR5IHtCb29sZWFuIHwgbnVsbH0gbm90aWZ5VXBkYXRlcyAtIHN0b3JlZCBhcyAwIG9yIDEgb3IgbnVsbCAoZGVmYXVsdCkgd2hpY2ggbWVhbnMgXCJ1c2UgZ2xvYmFsIHNldHRpbmdcIlxuICovXG4vKiogQHR5cGVkZWYgVk1TY3JpcHRDdXN0b20gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkb3dubG9hZFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGhvbWVwYWdlVVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFzdEluc3RhbGxVUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cGRhdGVVUkxcbiAqIEBwcm9wZXJ0eSB7J2F1dG8nIHwgJ3BhZ2UnIHwgJ2NvbnRlbnQnfSBpbmplY3RJbnRvXG4gKiBAcHJvcGVydHkge251bGwgfCAxIHwgMH0gbm9mcmFtZXMgLSBudWxsIG9yIGFic2VuY2UgPT0gZGVmYXVsdCAoc2NyaXB0J3MgdmFsdWUpXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBleGNsdWRlXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBleGNsdWRlTWF0Y2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGluY2x1ZGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IG1hdGNoXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9yaWdFeGNsdWRlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9yaWdFeGNsdWRlTWF0Y2hcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JpZ0luY2x1ZGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JpZ01hdGNoXG4gKiBAcHJvcGVydHkge09iamVjdH0gcGF0aE1hcFxuICogQHByb3BlcnR5IHtWTVNjcmlwdFJ1bkF0fSBydW5BdFxuICovXG4vKiogQHR5cGVkZWYgVk1TY3JpcHRNZXRhICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRvd25sb2FkVVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBleGNsdWRlXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBleGNsdWRlTWF0Y2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGdyYW50XG4gKiBAcHJvcGVydHkge3N0cmluZ30gaG9tZXBhZ2VVUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBpbmNsdWRlXG4gKiBAcHJvcGVydHkgeydhdXRvJyB8ICdwYWdlJyB8ICdjb250ZW50J30gaW5qZWN0SW50b1xuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gbWF0Y2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lc3BhY2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG5vZnJhbWVzXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSByZXF1aXJlXG4gKiBAcHJvcGVydHkge09iamVjdH0gcmVzb3VyY2VzXG4gKiBAcHJvcGVydHkge1ZNU2NyaXB0UnVuQXR9IHJ1bkF0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gc3VwcG9ydFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHZlcnNpb25cbiAqL1xuLyoqIEB0eXBlZGVmIFZNU2NyaXB0UHJvcHMgKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGlkXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGFzdE1vZGlmaWVkXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGFzdFVwZGF0ZWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwb3NpdGlvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IHVyaVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHV1aWRcbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7XG4gICAnZG9jdW1lbnQtc3RhcnQnIHwgJ2RvY3VtZW50LWJvZHknIHwgJ2RvY3VtZW50LWVuZCcgfCAnZG9jdW1lbnQtaWRsZSdcbiB9IFZNU2NyaXB0UnVuQXRcbiAqL1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RXZlbnRFbWl0dGVyKCkge1xuICBjb25zdCBldmVudHMgPSB7fTtcbiAgcmV0dXJuIHsgb24sIG9mZiwgZmlyZSB9O1xuXG4gIGZ1bmN0aW9uIG9uKHR5cGUsIGZ1bmMpIHtcbiAgICBsZXQgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICBpZiAoIWxpc3QpIHtcbiAgICAgIGxpc3QgPSBbXTtcbiAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3Q7XG4gICAgfVxuICAgIGxpc3QucHVzaChmdW5jKTtcbiAgfVxuICBmdW5jdGlvbiBvZmYodHlwZSwgZnVuYykge1xuICAgIGNvbnN0IGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgaWYgKGxpc3QpIHtcbiAgICAgIGNvbnN0IGkgPSBsaXN0LmluZGV4T2YoZnVuYyk7XG4gICAgICBpZiAoaSA+PSAwKSBsaXN0LnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZmlyZSh0eXBlLCBkYXRhKSB7XG4gICAgY29uc3QgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICBpZiAobGlzdCkge1xuICAgICAgbGlzdC5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgICAgIGZ1bmMoZGF0YSwgdHlwZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHBvc3RJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxucG9zdEluaXRpYWxpemUucHVzaCgoKSA9PiB7XG4gIGJyb3dzZXIuY29tbWFuZHMub25Db21tYW5kLmFkZExpc3RlbmVyKChjbWQpID0+IHtcbiAgICBpZiAoY21kID09PSAnbmV3U2NyaXB0Jykge1xuICAgICAgY29tbWFuZHMuT3BlbkVkaXRvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByb3V0ZSA9IGNtZCA9PT0gJ3NldHRpbmdzJyA/IGAjJHtjbWR9YCA6ICcnO1xuICAgICAgY29tbWFuZHMuVGFiT3Blbih7IHVybDogYC9vcHRpb25zL2luZGV4Lmh0bWwke3JvdXRlfWAgfSk7XG4gICAgfVxuICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgaTE4biwgbm9vcCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IElOSkVDVEFCTEVfVEFCX1VSTF9SRSB9IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQgeyBvYmplY3RQaWNrIH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcbmltcG9ydCB7IHBvc3RJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzLCBmb3JFYWNoVGFiIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IGdldE9wdGlvbiwgaG9va09wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgdGVzdEJsYWNrbGlzdCB9IGZyb20gJy4vdGVzdGVyJztcblxuLy8gc3RvcmluZyBpbiBgY2FjaGVgIG9ubHkgZm9yIHRoZSBkdXJhdGlvbiBvZiBwYWdlIGxvYWQgaW4gY2FzZSB0aGVyZSBhcmUgMisgaWRlbnRpY2FsIHVybHNcbmNvbnN0IENBQ0hFX0RVUkFUSU9OID0gMTAwMDtcblxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywge1xuICBhc3luYyBHZXRJbWFnZURhdGEodXJsKSB7XG4gICAgY29uc3Qga2V5ID0gYEdldEltYWdlRGF0YToke3VybH1gO1xuICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KVxuICAgICAgfHwgY2FjaGUucHV0KGtleSwgbG9hZEltYWdlRGF0YSh1cmwsIHsgYmFzZTY0OiB0cnVlIH0pLmNhdGNoKG5vb3ApLCBDQUNIRV9EVVJBVElPTik7XG4gIH0sXG4gIFNldEJhZGdlOiBzZXRCYWRnZSxcbn0pO1xuXG4vLyBGaXJlZm94IEFuZHJvaWQgZG9lcyBub3Qgc3VwcG9ydCBzdWNoIEFQSXMsIHVzZSBub29wXG5cbmNvbnN0IGJyb3dzZXJBY3Rpb24gPSAoKCkgPT4ge1xuICBjb25zdCB7IGNocm9tZSB9ID0gZ2xvYmFsO1xuICAvLyBVc2luZyBgY2hyb21lYCBuYW1lc3BhY2UgaW4gb3JkZXIgdG8gc2tpcCBvdXIgYnJvd3Nlci5qcyBwb2x5ZmlsbCBpbiBDaHJvbWVcbiAgY29uc3QgYXBpID0gY2hyb21lLmJyb3dzZXJBY3Rpb247XG4gIC8vIFN1cHByZXNzIHRoZSBcIm5vIHRhYiBpZFwiIGVycm9yIHdoZW4gc2V0dGluZyBhbiBpY29uL2JhZGdlIGFzIGl0IGNhbm5vdCBiZSByZWxpYWJseSBwcmV2ZW50ZWRcbiAgY29uc3QgaWdub3JlRXJyb3JzID0gKCkgPT4gY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yO1xuICAvLyBTb21lIG1ldGhvZHMgbGlrZSBzZXRCYWRnZVRleHQgYWRkZWQgY2FsbGJhY2tzIG9ubHkgaW4gQ2hyb21lIDY3Ky5cbiAgY29uc3QgbWFrZU1ldGhvZCA9IGZuID0+ICguLi5hcmdzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGFwaTo6Zm4oLi4uYXJncywgaWdub3JlRXJyb3JzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhcGk6OmZuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIG9iamVjdFBpY2soYXBpLCBbXG4gICAgJ3NldEljb24nLFxuICAgICdzZXRCYWRnZVRleHQnLFxuICAgICdzZXRCYWRnZUJhY2tncm91bmRDb2xvcicsXG4gICAgJ3NldFRpdGxlJyxcbiAgXSwgZm4gPT4gKGZuID8gbWFrZU1ldGhvZChmbikgOiBub29wKSk7XG59KSgpO1xuXG5jb25zdCBiYWRnZXMgPSB7fTtcbmNvbnN0IEtFWV9JU19BUFBMSUVEID0gJ2lzQXBwbGllZCc7XG5jb25zdCBLRVlfU0hPV19CQURHRSA9ICdzaG93QmFkZ2UnO1xuY29uc3QgS0VZX0JBREdFX0NPTE9SID0gJ2JhZGdlQ29sb3InO1xuY29uc3QgS0VZX0JBREdFX0NPTE9SX0JMT0NLRUQgPSAnYmFkZ2VDb2xvckJsb2NrZWQnO1xuLyoqIEB0eXBlIGJvb2xlYW4gKi9cbmxldCBpc0FwcGxpZWQ7XG4vKiogQHR5cGUgVk1CYWRnZU1vZGUgKi9cbmxldCBzaG93QmFkZ2U7XG4vKiogQHR5cGUgc3RyaW5nICovXG5sZXQgYmFkZ2VDb2xvcjtcbi8qKiBAdHlwZSBzdHJpbmcgKi9cbmxldCBiYWRnZUNvbG9yQmxvY2tlZDtcbi8qKiBAdHlwZSBzdHJpbmcgKi9cbmxldCB0aXRsZUJsYWNrbGlzdGVkO1xuLyoqIEB0eXBlIHN0cmluZyAqL1xubGV0IHRpdGxlTm9uaW5qZWN0YWJsZTtcblxuLy8gV2UnbGwgY2FjaGUgdGhlIGljb24gZGF0YSBpbiBDaHJvbWUgYXMgaXQgZG9lc24ndCBjYWNoZSB0aGUgZGF0YSBhbmQgdGFrZXMgdXAgdG8gNDBtc1xuLy8gaW4gb3VyIGJhY2tncm91bmQgcGFnZSBjb250ZXh0IHRvIHNldCB0aGUgNCBpY29uIHNpemVzIGZvciBlYWNoIG5ldyB0YWIgb3BlbmVkXG5jb25zdCBpY29uQ2FjaGUgPSAhSVNfRklSRUZPWCAmJiB7fTtcblxuaG9va09wdGlvbnMoKGNoYW5nZXMpID0+IHtcbiAgbGV0IHY7XG4gIGNvbnN0IGpvYnMgPSBbXTtcbiAgaWYgKCh2ID0gY2hhbmdlc1tLRVlfSVNfQVBQTElFRF0pICE9IG51bGwpIHtcbiAgICBpc0FwcGxpZWQgPSB2O1xuICAgIHNldEljb24oKTsgLy8gY2hhbmdlIHRoZSBkZWZhdWx0IGljb25cbiAgICBqb2JzLnB1c2goc2V0SWNvbik7IC8vIGNoYW5nZSB0aGUgY3VycmVudCB0YWJzJyBpY29uc1xuICB9XG4gIGlmICgodiA9IGNoYW5nZXNbS0VZX1NIT1dfQkFER0VdKSAhPSBudWxsKSB7XG4gICAgc2hvd0JhZGdlID0gdjtcbiAgICBqb2JzLnB1c2godXBkYXRlQmFkZ2UpO1xuICB9XG4gIGlmICgodiA9IGNoYW5nZXNbS0VZX0JBREdFX0NPTE9SXSkgJiYgKGJhZGdlQ29sb3IgPSB2KVxuICB8fCAodiA9IGNoYW5nZXNbS0VZX0JBREdFX0NPTE9SX0JMT0NLRURdKSAmJiAoYmFkZ2VDb2xvckJsb2NrZWQgPSB2KSkge1xuICAgIGpvYnMucHVzaCh1cGRhdGVCYWRnZUNvbG9yKTtcbiAgfVxuICBpZiAoJ2JsYWNrbGlzdCcgaW4gY2hhbmdlcykge1xuICAgIGpvYnMucHVzaCh1cGRhdGVTdGF0ZSk7XG4gIH1cbiAgaWYgKGpvYnMubGVuZ3RoKSB7XG4gICAgZm9yRWFjaFRhYih0YWIgPT4gam9icy5mb3JFYWNoKGZuID0+IGZuKHRhYikpKTtcbiAgfVxufSk7XG5cbnBvc3RJbml0aWFsaXplLnB1c2goKCkgPT4ge1xuICBpc0FwcGxpZWQgPSBnZXRPcHRpb24oS0VZX0lTX0FQUExJRUQpO1xuICBzaG93QmFkZ2UgPSBnZXRPcHRpb24oS0VZX1NIT1dfQkFER0UpO1xuICBiYWRnZUNvbG9yID0gZ2V0T3B0aW9uKEtFWV9CQURHRV9DT0xPUik7XG4gIGJhZGdlQ29sb3JCbG9ja2VkID0gZ2V0T3B0aW9uKEtFWV9CQURHRV9DT0xPUl9CTE9DS0VEKTtcbiAgdGl0bGVCbGFja2xpc3RlZCA9IGkxOG4oJ2ZhaWx1cmVSZWFzb25CbGFja2xpc3RlZCcpO1xuICB0aXRsZU5vbmluamVjdGFibGUgPSBpMThuKCdmYWlsdXJlUmVhc29uTm9uaW5qZWN0YWJsZScpO1xuICBmb3JFYWNoVGFiKHVwZGF0ZVN0YXRlKTtcbiAgaWYgKCFpc0FwcGxpZWQpIHNldEljb24oKTsgLy8gc2V0cyB0aGUgZGltbWVkIGljb24gYXMgZGVmYXVsdFxufSk7XG5cbmJyb3dzZXIudGFicy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoKGlkKSA9PiB7XG4gIGRlbGV0ZSBiYWRnZXNbaWRdO1xufSk7XG5cbmJyb3dzZXIudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBpbmZvLCB0YWIpID0+IHtcbiAgY29uc3QgeyB1cmwgfSA9IGluZm87XG4gIGlmIChpbmZvLnN0YXR1cyA9PT0gJ2xvYWRpbmcnXG4gICAgICAvLyBhdCBsZWFzdCBhYm91dDpuZXd0YWIgaW4gRmlyZWZveCBtYXkgb3BlbiB3aXRob3V0ICdsb2FkaW5nJyBzdGF0dXNcbiAgICAgIHx8IGluZm8uZmF2SWNvblVybCAmJiB0YWIudXJsLnN0YXJ0c1dpdGgoJ2Fib3V0OicpKSB7XG4gICAgdXBkYXRlU3RhdGUodGFiLCB1cmwpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc2V0QmFkZ2UoaWRzLCB7IHRhYiwgZnJhbWVJZCB9KSB7XG4gIGNvbnN0IHRhYklkID0gdGFiLmlkO1xuICBjb25zdCBkYXRhID0gYmFkZ2VzW3RhYklkXSB8fCB7fTtcbiAgaWYgKCFkYXRhLmlkTWFwIHx8IGZyYW1lSWQgPT09IDApIHtcbiAgICAvLyAxKSBrZWVwaW5nIGRhdGEgb2JqZWN0IHRvIHByZXNlcnZlIGRhdGEuYmxvY2tlZFxuICAgIC8vIDIpICd0b3RhbCcgYW5kICd1bmlxdWUnIG11c3QgbWF0Y2ggc2hvd0JhZGdlIGluIG9wdGlvbnMtZGVmYXVsdHMuanNcbiAgICBkYXRhLnRvdGFsID0gMDtcbiAgICBkYXRhLnVuaXF1ZSA9IDA7XG4gICAgZGF0YS5pZE1hcCA9IHt9O1xuICAgIGJhZGdlc1t0YWJJZF0gPSBkYXRhO1xuICB9XG4gIGRhdGEudG90YWwgKz0gaWRzLmxlbmd0aDtcbiAgaWYgKGlkcykge1xuICAgIGlkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgZGF0YS5pZE1hcFtpZF0gPSAxO1xuICAgIH0pO1xuICAgIGRhdGEudW5pcXVlID0gT2JqZWN0LmtleXMoZGF0YS5pZE1hcCkubGVuZ3RoO1xuICB9XG4gIHVwZGF0ZUJhZGdlQ29sb3IodGFiLCBkYXRhKTtcbiAgdXBkYXRlQmFkZ2UodGFiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQmFkZ2UodGFiLCBkYXRhID0gYmFkZ2VzW3RhYi5pZF0pIHtcbiAgaWYgKGRhdGEpIHtcbiAgICBicm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7XG4gICAgICB0ZXh0OiBgJHtkYXRhW3Nob3dCYWRnZV0gfHwgJyd9YCxcbiAgICAgIHRhYklkOiB0YWIuaWQsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQmFkZ2VDb2xvcih0YWIsIGRhdGEgPSBiYWRnZXNbdGFiLmlkXSkge1xuICBpZiAoZGF0YSkge1xuICAgIGJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3Ioe1xuICAgICAgY29sb3I6IGRhdGEuYmxvY2tlZCA/IGJhZGdlQ29sb3JCbG9ja2VkIDogYmFkZ2VDb2xvcixcbiAgICAgIHRhYklkOiB0YWIuaWQsXG4gICAgfSk7XG4gIH1cbn1cblxuLy8gQ2hyb21lIDc5KyB1c2VzIHBlbmRpbmdVcmwgd2hpbGUgdGhlIHRhYiBjb25uZWN0cyB0byB0aGUgbmV3bHkgbmF2aWdhdGVkIFVSTFxuLy8gaHR0cHM6Ly9ncm91cHMuZ29vZ2xlLmNvbS9hL2Nocm9taXVtLm9yZy9mb3J1bS8jIXRvcGljL2Nocm9taXVtLWV4dGVuc2lvbnMvNXp1X1BUMGFybHNcbmZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHRhYiwgdXJsID0gdGFiLnBlbmRpbmdVcmwgfHwgdGFiLnVybCkge1xuICBjb25zdCB0YWJJZCA9IHRhYi5pZDtcbiAgY29uc3QgaW5qZWN0YWJsZSA9IElOSkVDVEFCTEVfVEFCX1VSTF9SRS50ZXN0KHVybCk7XG4gIGNvbnN0IGJsYWNrbGlzdGVkID0gaW5qZWN0YWJsZSA/IHRlc3RCbGFja2xpc3QodXJsKSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgdGl0bGUgPSBibGFja2xpc3RlZCAmJiB0aXRsZUJsYWNrbGlzdGVkIHx8ICFpbmplY3RhYmxlICYmIHRpdGxlTm9uaW5qZWN0YWJsZSB8fCAnJztcbiAgLy8gaWYgdGhlIHVzZXIgdW5ibGFja2xpc3RlZCB0aGlzIHByZXZpb3VzbHkgYmxvY2tlZCB0YWIgaW4gc2V0dGluZ3MsXG4gIC8vIGJ1dCBkaWRuJ3QgcmVsb2FkIHRoZSB0YWIgeWV0LCB3ZSBuZWVkIHRvIHJlc3RvcmUgdGhlIGljb24gYW5kIHRoZSB0aXRsZVxuICBpZiAodGl0bGUgfHwgKGJhZGdlc1t0YWJJZF0gfHwge30pLmJsb2NrZWQpIHtcbiAgICBicm93c2VyQWN0aW9uLnNldFRpdGxlKHsgdGl0bGUsIHRhYklkIH0pO1xuICAgIGNvbnN0IGRhdGEgPSB0aXRsZSA/IHsgYmxvY2tlZDogdHJ1ZSB9IDoge307XG4gICAgYmFkZ2VzW3RhYklkXSA9IGRhdGE7XG4gICAgc2V0SWNvbih0YWIsIGRhdGEpO1xuICAgIHVwZGF0ZUJhZGdlKHRhYiwgZGF0YSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0SWNvbih0YWIgPSB7fSwgZGF0YSA9IHt9KSB7XG4gIC8vIG1vZGVybiBDaHJvbWUgYW5kIEZpcmVmb3ggdXNlIDE2LzMyLCBvdGhlciBicm93c2VycyBtYXkgc3RpbGwgdXNlIDE5LzM4IChlLmcuIFZpdmFsZGkpXG4gIGNvbnN0IG1vZCA9IGRhdGEuYmxvY2tlZCAmJiAnYicgfHwgIWlzQXBwbGllZCAmJiAndycgfHwgJyc7XG4gIGNvbnN0IGljb25EYXRhID0ge307XG4gIGZvciAoY29uc3QgbiBvZiBbMTYsIDE5LCAzMiwgMzhdKSB7XG4gICAgY29uc3QgcGF0aCA9IGAvcHVibGljL2ltYWdlcy9pY29uJHtufSR7bW9kfS5wbmdgO1xuICAgIGxldCBpY29uID0gaWNvbkNhY2hlID8gaWNvbkNhY2hlW3BhdGhdIDogcGF0aDtcbiAgICBpZiAoIWljb24pIHtcbiAgICAgIGljb24gPSBhd2FpdCBsb2FkSW1hZ2VEYXRhKHBhdGgpO1xuICAgICAgaWNvbkNhY2hlW3BhdGhdID0gaWNvbjtcbiAgICB9XG4gICAgaWNvbkRhdGFbbl0gPSBpY29uO1xuICB9XG4gIGJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XG4gICAgdGFiSWQ6IHRhYi5pZCxcbiAgICBbaWNvbkNhY2hlID8gJ2ltYWdlRGF0YScgOiAncGF0aCddOiBpY29uRGF0YSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRJbWFnZURhdGEocGF0aCwgeyBiYXNlNjQgfSA9IHt9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IHBhdGg7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gaW1nO1xuICAgICAgaWYgKCF3aWR0aCkgeyAvLyBGRiByZXBvcnRzIDAgZm9yIFNWR1xuICAgICAgICByZXNvbHZlKHBhdGgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgcmVzb2x2ZShiYXNlNjQgPyBjYW52YXMudG9EYXRhVVJMKCkgOiBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpKTtcbiAgICB9O1xuICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xuICB9KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2FjaGUgfSBmcm9tICcuL2NhY2hlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0RXZlbnRFbWl0dGVyIH0gZnJvbSAnLi9ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vb3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL3NlYXJjaCc7XG4iLCJleHBvcnQgY29uc3QgZXh0ZW5zaW9uUm9vdCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJy8nKTtcblxuZXhwb3J0IGNvbnN0IHByZUluaXRpYWxpemUgPSBbXTtcbmV4cG9ydCBjb25zdCBwb3N0SW5pdGlhbGl6ZSA9IFtdO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZShtYWluKSB7XG4gIGNvbnN0IHJ1biA9IGluaXQgPT4gKHR5cGVvZiBpbml0ID09PSAnZnVuY3Rpb24nID8gaW5pdCgpIDogaW5pdCk7XG4gIGF3YWl0IFByb21pc2UuYWxsKHByZUluaXRpYWxpemUubWFwKHJ1bikpO1xuICBhd2FpdCBydW4obWFpbik7XG4gIGF3YWl0IFByb21pc2UuYWxsKHBvc3RJbml0aWFsaXplLm1hcChydW4pKTtcbiAgcHJlSW5pdGlhbGl6ZS5sZW5ndGggPSAwO1xuICBwb3N0SW5pdGlhbGl6ZS5sZW5ndGggPSAwO1xufVxuIiwiaW1wb3J0IHsgZGVmYXVsdEltYWdlLCBpMThuLCBub29wIH0gZnJvbSAnIy9jb21tb24nO1xuXG5leHBvcnQgY29uc3QgY29tbWFuZHMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeShvcHRpb25zKSB7XG4gIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUob3B0aW9ucy5pZCB8fCAnVmlvbGVudE1vbmtleScsIHtcbiAgICB0eXBlOiAnYmFzaWMnLFxuICAgIGljb25Vcmw6IGRlZmF1bHRJbWFnZSxcbiAgICB0aXRsZTogYCR7b3B0aW9ucy50aXRsZX0gLSAke2kxOG4oJ2V4dE5hbWUnKX1gLFxuICAgIG1lc3NhZ2U6IG9wdGlvbnMuYm9keSxcbiAgICBpc0NsaWNrYWJsZTogb3B0aW9ucy5pc0NsaWNrYWJsZSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicm9hZGNhc3QoZGF0YSkge1xuICBmb3JFYWNoVGFiKCh0YWIpID0+IHtcbiAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBkYXRhKVxuICAgIC5jYXRjaChub29wKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZU9ySWdub3JlKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSguLi5hcmdzKS5jYXRjaChub29wKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZvckVhY2hUYWIoY2FsbGJhY2spIHtcbiAgY29uc3QgdGFicyA9IGF3YWl0IGJyb3dzZXIudGFicy5xdWVyeSh7fSk7XG4gIGxldCBpID0gMDtcbiAgZm9yIChjb25zdCB0YWIgb2YgdGFicykge1xuICAgIGNhbGxiYWNrKHRhYik7XG4gICAgaSArPSAxO1xuICAgIC8vIHdlJ2xsIHJ1biBhdCBtb3N0IHRoaXMgbWFueSB0YWJzIGluIG9uZSBldmVudCBsb29wIGN5Y2xlXG4gICAgLy8gYmVjYXVzZSBodW5kcmVkcyBvZiB0YWJzIHdvdWxkIG1ha2Ugb3VyIGV4dGVuc2lvbiBwcm9jZXNzIHVucmVzcG9uc2l2ZSxcbiAgICAvLyB0aGUgc2FtZSBwcm9jZXNzIHVzZWQgYnkgb3VyIG93biBwYWdlcyBsaWtlIHRoZSBiYWNrZ3JvdW5kIHBhZ2UsIGRhc2hib2FyZCwgb3IgcG9wdXBzXG4gICAgaWYgKGkgJSAyMCA9PT0gMCkgYXdhaXQgbmV3IFByb21pc2Uoc2V0VGltZW91dCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGkxOG4sIGRlZmF1bHRJbWFnZSwgc2VuZFRhYkNtZCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuY29uc3Qgb3BlbmVycyA9IHt9O1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59ICovXG4gIGFzeW5jIE5vdGlmaWNhdGlvbihkYXRhLCBzcmMsIGJnRXh0cmFzKSB7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uSWQgPSBhd2FpdCBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKHtcbiAgICAgIHR5cGU6ICdiYXNpYycsXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSB8fCAoSVNfRklSRUZPWCA/IGkxOG4oJ2V4dE5hbWUnKSA6ICcnKSwgLy8gQ2hyb21lIGFscmVhZHkgc2hvd3MgdGhlIG5hbWVcbiAgICAgIG1lc3NhZ2U6IGRhdGEudGV4dCxcbiAgICAgIGljb25Vcmw6IGRhdGEuaW1hZ2UgfHwgZGVmYXVsdEltYWdlLFxuICAgIH0pO1xuICAgIG9wZW5lcnNbbm90aWZpY2F0aW9uSWRdID0gYmdFeHRyYXM/Lm9uQ2xpY2sgfHwgc3JjLnRhYi5pZDtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uSWQ7XG4gIH0sXG4gIFJlbW92ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZCkge1xuICAgIHJldHVybiBicm93c2VyLm5vdGlmaWNhdGlvbnMuY2xlYXIobm90aWZpY2F0aW9uSWQpO1xuICB9LFxufSk7XG5cbmJyb3dzZXIubm90aWZpY2F0aW9ucy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKGlkKSA9PiB7XG4gIGNvbnN0IG9wZW5lcklkID0gb3BlbmVyc1tpZF07XG4gIGlmIChvcGVuZXJJZCA+PSAwKSB7XG4gICAgc2VuZFRhYkNtZChvcGVuZXJJZCwgJ05vdGlmaWNhdGlvbkNsaWNrJywgaWQpO1xuICB9XG4gIGlmICh0eXBlb2Ygb3BlbmVySWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcGVuZXJJZCgpO1xuICB9XG59KTtcblxuYnJvd3Nlci5ub3RpZmljYXRpb25zLm9uQ2xvc2VkLmFkZExpc3RlbmVyKChpZCkgPT4ge1xuICBjb25zdCBvcGVuZXJJZCA9IG9wZW5lcnNbaWRdO1xuICBkZWxldGUgb3BlbmVyc1tpZF07XG4gIGlmIChvcGVuZXJJZCA+PSAwKSB7XG4gICAgc2VuZFRhYkNtZChvcGVuZXJJZCwgJ05vdGlmaWNhdGlvbkNsb3NlJywgaWQpO1xuICB9XG59KTtcbiIsImltcG9ydCB7XG4gIGRlYm91bmNlLCBlbnN1cmVBcnJheSwgaW5pdEhvb2tzLCBub3JtYWxpemVLZXlzLFxufSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBtYXBFbnRyeSwgb2JqZWN0R2V0LCBvYmplY3RTZXQgfSBmcm9tICcjL2NvbW1vbi9vYmplY3QnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJyMvY29tbW9uL29wdGlvbnMtZGVmYXVsdHMnO1xuaW1wb3J0IHsgcHJlSW5pdGlhbGl6ZSB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgLyoqIEByZXR1cm4ge09iamVjdH0gKi9cbiAgR2V0QWxsT3B0aW9ucygpIHtcbiAgICByZXR1cm4gY29tbWFuZHMuR2V0T3B0aW9ucyhkZWZhdWx0cyk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtPYmplY3R9ICovXG4gIEdldE9wdGlvbnMoZGF0YSkge1xuICAgIHJldHVybiBkYXRhOjptYXBFbnRyeSgoW2tleV0pID0+IGdldE9wdGlvbihrZXkpKTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge3ZvaWR9ICovXG4gIFNldE9wdGlvbnMoZGF0YSkge1xuICAgIGVuc3VyZUFycmF5KGRhdGEpLmZvckVhY2goaXRlbSA9PiBzZXRPcHRpb24oaXRlbS5rZXksIGl0ZW0udmFsdWUpKTtcbiAgfSxcbn0pO1xuXG5sZXQgY2hhbmdlcyA9IHt9O1xuY29uc3QgaG9va3MgPSBpbml0SG9va3MoKTtcbmNvbnN0IGNhbGxIb29rc0xhdGVyID0gZGVib3VuY2UoY2FsbEhvb2tzLCAxMDApO1xuXG5sZXQgb3B0aW9ucyA9IHt9O1xubGV0IGluaXRQZW5kaW5nID0gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgnb3B0aW9ucycpXG4udGhlbigoeyBvcHRpb25zOiBkYXRhIH0pID0+IHtcbiAgaWYgKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSBvcHRpb25zID0gZGF0YTtcbiAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgY29uc29sZS5sb2coJ29wdGlvbnM6Jywgb3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICB9XG4gIGlmICghb2JqZWN0R2V0KG9wdGlvbnMsICd2ZXJzaW9uJykpIHtcbiAgICBzZXRPcHRpb24oJ3ZlcnNpb24nLCAxKTtcbiAgfVxuICBpbml0UGVuZGluZyA9IG51bGw7XG59KTtcbnByZUluaXRpYWxpemUucHVzaChpbml0UGVuZGluZyk7XG5cbmZ1bmN0aW9uIGZpcmVDaGFuZ2Uoa2V5cywgdmFsdWUpIHtcbiAgLy8gRmxhdHRlbmluZyBrZXkgcGF0aCBzbyB0aGUgc3Vic2NyaWJlcnMgY2FuIHVwZGF0ZSBuZXN0ZWQgdmFsdWVzIHdpdGhvdXQgb3ZlcndyaXRpbmcgdGhlIHBhcmVudFxuICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oJy4nKTtcbiAgLy8gRW5zdXJpbmcgdGhlIGNvcnJlY3Qgb3JkZXIgd2hlbiB1cGRhdGVzIHdlcmUgbWl4ZWQgbGlrZSB0aGlzOiBmb28uYmFyPTE7IGZvbz17YmFyOjJ9OyBmb28uYmFyPTNcbiAgZGVsZXRlIGNoYW5nZXNba2V5XTtcbiAgY2hhbmdlc1trZXldID0gdmFsdWU7XG4gIGNhbGxIb29rc0xhdGVyKCk7XG59XG5cbmZ1bmN0aW9uIGNhbGxIb29rcygpIHtcbiAgaG9va3MuZmlyZShjaGFuZ2VzKTtcbiAgY2hhbmdlcyA9IHt9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3B0aW9uKGtleSwgZGVmKSB7XG4gIGNvbnN0IGtleXMgPSBub3JtYWxpemVLZXlzKGtleSk7XG4gIGNvbnN0IG1haW5LZXkgPSBrZXlzWzBdO1xuICBsZXQgdmFsdWUgPSBvcHRpb25zW21haW5LZXldO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgdmFsdWUgPSBkZWZhdWx0c1ttYWluS2V5XTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHZhbHVlID0gZGVmO1xuICByZXR1cm4ga2V5cy5sZW5ndGggPiAxID8gb2JqZWN0R2V0KHZhbHVlLCBrZXlzLnNsaWNlKDEpLCBkZWYpIDogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9uKGtleSkge1xuICByZXR1cm4gb2JqZWN0R2V0KGRlZmF1bHRzLCBrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0T3B0aW9uKGtleSwgdmFsdWUpIHtcbiAgaWYgKGluaXRQZW5kaW5nKSB7XG4gICAgaW5pdFBlbmRpbmcudGhlbigoKSA9PiB7XG4gICAgICBzZXRPcHRpb24oa2V5LCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGtleXMgPSBub3JtYWxpemVLZXlzKGtleSk7XG4gIGNvbnN0IG9wdGlvbktleSA9IGtleXMuam9pbignLicpO1xuICBsZXQgb3B0aW9uVmFsdWUgPSB2YWx1ZTtcbiAgY29uc3QgbWFpbktleSA9IGtleXNbMF07XG4gIGlmIChtYWluS2V5IGluIGRlZmF1bHRzKSB7XG4gICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgb3B0aW9uVmFsdWUgPSBvYmplY3RTZXQoZ2V0T3B0aW9uKG1haW5LZXkpLCBrZXlzLnNsaWNlKDEpLCB2YWx1ZSk7XG4gICAgfVxuICAgIG9wdGlvbnNbbWFpbktleV0gPSBvcHRpb25WYWx1ZTtcbiAgICBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgb3B0aW9ucyB9KTtcbiAgICBmaXJlQ2hhbmdlKGtleXMsIHZhbHVlKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdPcHRpb25zIHVwZGF0ZWQ6Jywgb3B0aW9uS2V5LCB2YWx1ZSwgb3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaG9va09wdGlvbnMgPSBob29rcy5ob29rO1xuIiwiaW1wb3J0IHsgcGFyc2VNZXRhIH0gZnJvbSAnLi9zY3JpcHQnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnIy9jb21tb24vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgY29uc29sZS5pbmZvKCdVcGdyYWRlIGRhdGFiYXNlLi4uJyk7XG4gIGluaXQoKTtcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjb25zdCByZXEgPSBpbmRleGVkREIub3BlbignVmlvbGVudG1vbmtleScsIDEpO1xuICAgIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0cmFuc2Zvcm0ocmVxLnJlc3VsdCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IGRpZCBoYXBwZW4gaW4gRmlyZWZveC5cbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXEub25lcnJvciA9IHJlamVjdDtcbiAgICByZXEub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgLy8gTm8gYXZhaWxhYmxlIHVwZ3JhZGF0aW9uXG4gICAgICByZWplY3QoKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybShkYikge1xuICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oWydzY3JpcHRzJywgJ3JlcXVpcmUnLCAnY2FjaGUnLCAndmFsdWVzJ10pO1xuICAgIGNvbnN0IHVwZGF0ZXMgPSB7fTtcbiAgICBsZXQgcHJvY2Vzc2luZyA9IDM7XG4gICAgY29uc3QgZG9uZSA9ICgpID0+IHtcbiAgICAgIHByb2Nlc3NpbmcgLT0gMTtcbiAgICAgIGlmICghcHJvY2Vzc2luZykgcmVzb2x2ZShicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHVwZGF0ZXMpKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEFsbCA9IChzdG9yZU5hbWUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBjb25zdCByZXEgPSB0eC5vYmplY3RTdG9yZShzdG9yZU5hbWUpLmdldEFsbCgpO1xuICAgICAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IGNhbGxiYWNrKHJlcS5yZXN1bHQpO1xuICAgICAgcmVxLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgfTtcbiAgICBnZXRBbGwoJ3NjcmlwdHMnLCAoYWxsU2NyaXB0cykgPT4ge1xuICAgICAgY29uc3QgdXJpTWFwID0ge307XG4gICAgICBhbGxTY3JpcHRzLmZvckVhY2goKHNjcmlwdCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNvZGUsIGlkLCB1cmkgfSA9IHNjcmlwdDtcbiAgICAgICAgdXBkYXRlc1tgJHtzdG9yYWdlLnNjcmlwdC5wcmVmaXh9JHtpZH1gXSA9IHRyYW5zZm9ybVNjcmlwdChzY3JpcHQpO1xuICAgICAgICB1cGRhdGVzW2Ake3N0b3JhZ2UuY29kZS5wcmVmaXh9JHtpZH1gXSA9IGNvZGU7XG4gICAgICAgIHVyaU1hcFt1cmldID0gaWQ7XG4gICAgICB9KTtcbiAgICAgIGdldEFsbCgndmFsdWVzJywgKGFsbFZhbHVlcykgPT4ge1xuICAgICAgICBhbGxWYWx1ZXMuZm9yRWFjaCgoeyB1cmksIHZhbHVlcyB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgaWQgPSB1cmlNYXBbdXJpXTtcbiAgICAgICAgICBpZiAoaWQpIHVwZGF0ZXNbYCR7c3RvcmFnZS52YWx1ZS5wcmVmaXh9JHtpZH1gXSA9IHZhbHVlcztcbiAgICAgICAgfSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGdldEFsbCgnY2FjaGUnLCAoYWxsQ2FjaGUpID0+IHtcbiAgICAgIGFsbENhY2hlLmZvckVhY2goKHsgdXJpLCBkYXRhIH0pID0+IHtcbiAgICAgICAgdXBkYXRlc1tgJHtzdG9yYWdlLmNhY2hlLnByZWZpeH0ke3VyaX1gXSA9IGRhdGE7XG4gICAgICB9KTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgICBnZXRBbGwoJ3JlcXVpcmUnLCAoYWxsUmVxdWlyZSkgPT4ge1xuICAgICAgYWxsUmVxdWlyZS5mb3JFYWNoKCh7IHVyaSwgY29kZSB9KSA9PiB7XG4gICAgICAgIHVwZGF0ZXNbYCR7c3RvcmFnZS5yZXF1aXJlLnByZWZpeH0ke3VyaX1gXSA9IGNvZGU7XG4gICAgICB9KTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm1TY3JpcHQoc2NyaXB0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1ldGE6IHBhcnNlTWV0YShzY3JpcHQuY29kZSksXG4gICAgICBjdXN0b206IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBvcmlnSW5jbHVkZTogdHJ1ZSxcbiAgICAgICAgb3JpZ0V4Y2x1ZGU6IHRydWUsXG4gICAgICAgIG9yaWdNYXRjaDogdHJ1ZSxcbiAgICAgICAgb3JpZ0V4Y2x1ZGVNYXRjaDogdHJ1ZSxcbiAgICAgIH0sIHNjcmlwdC5jdXN0b20pLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgaWQ6IHNjcmlwdC5pZCxcbiAgICAgICAgdXJpOiBzY3JpcHQudXJpLFxuICAgICAgICBwb3NpdGlvbjogc2NyaXB0LnBvc2l0aW9uLFxuICAgICAgfSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBlbmFibGVkOiBzY3JpcHQuZW5hYmxlZCxcbiAgICAgICAgc2hvdWxkVXBkYXRlOiBzY3JpcHQudXBkYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59KVxuLy8gSWdub3JlIGVycm9yXG4uY2F0Y2goKCkgPT4ge30pO1xuIiwiaW1wb3J0IHsgZ2V0QWN0aXZlVGFiLCBzZW5kVGFiQ21kIH0gZnJvbSAnIy9jb21tb24nO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4vZGInO1xuaW1wb3J0IHsgcG9zdEluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5leHBvcnQgY29uc3QgcG9wdXBUYWJzID0ge307IC8vIHsgdGFiSWQ6IDEgfVxuXG5wb3N0SW5pdGlhbGl6ZS5wdXNoKCgpID0+IHtcbiAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihvblBvcHVwT3BlbmVkKTtcbiAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihwcmVmZXRjaFNldFBvcHVwLCB7XG4gICAgdXJsczogW2Jyb3dzZXIucnVudGltZS5nZXRVUkwoYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkuYnJvd3Nlcl9hY3Rpb24uZGVmYXVsdF9wb3B1cCldLFxuICAgIHR5cGVzOiBbJ21haW5fZnJhbWUnXSxcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gb25Qb3B1cE9wZW5lZChwb3J0KSB7XG4gIGNvbnN0IHRhYklkID0gK3BvcnQubmFtZTtcbiAgcG9wdXBUYWJzW3RhYklkXSA9IDE7XG4gIHNlbmRUYWJDbWQodGFiSWQsICdQb3B1cFNob3duJywgdHJ1ZSk7XG4gIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKG9uUG9wdXBDbG9zZWQpO1xuICBkZWxldGUgY29tbWFuZHMuU2V0UG9wdXA7XG59XG5cbmZ1bmN0aW9uIG9uUG9wdXBDbG9zZWQoeyBuYW1lIH0pIHtcbiAgZGVsZXRlIHBvcHVwVGFic1tuYW1lXTtcbiAgc2VuZFRhYkNtZCgrbmFtZSwgJ1BvcHVwU2hvd24nLCBmYWxzZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByZWZldGNoU2V0UG9wdXAoKSB7XG4gIGNvbnN0IHRhYklkID0gKGF3YWl0IGdldEFjdGl2ZVRhYigpKS5pZDtcbiAgc2VuZFRhYkNtZCh0YWJJZCwgJ1BvcHVwU2hvd24nLCB0cnVlKTtcbiAgY29tbWFuZHMuU2V0UG9wdXAgPSBhc3luYyAoZGF0YSwgc3JjKSA9PiB7XG4gICAgT2JqZWN0LmFzc2lnbihkYXRhLCBhd2FpdCBnZXREYXRhKGRhdGEuaWRzKSk7XG4gICAgY2FjaGUucHV0KCdTZXRQb3B1cCcsIE9iamVjdC5hc3NpZ24oeyBbc3JjLmZyYW1lSWRdOiBbZGF0YSwgc3JjXSB9LCBjYWNoZS5nZXQoJ1NldFBvcHVwJykpKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGdldFNjcmlwdE5hbWUsIGdldFVuaXFJZCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7XG4gIElOSkVDVF9BVVRPLCBJTkpFQ1RfQ09OVEVOVCwgSU5KRUNUX01BUFBJTkcsXG4gIElOSkVDVEFCTEVfVEFCX1VSTF9SRSwgTUVUQUJMT0NLX1JFLFxufSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IGluaXRDYWNoZSBmcm9tICcjL2NvbW1vbi9jYWNoZSc7XG5pbXBvcnQgeyBmb3JFYWNoRW50cnksIG9iamVjdFBpY2ssIG9iamVjdFNldCB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcjL2NvbW1vbi9zdG9yYWdlJztcbmltcG9ydCB1YSBmcm9tICcjL2NvbW1vbi91YSc7XG5pbXBvcnQgeyBnZXRTY3JpcHRzQnlVUkwsIEVOVl9DQUNIRV9LRVlTLCBFTlZfUkVRX0tFWVMsIEVOVl9WQUxVRV9JRFMgfSBmcm9tICcuL2RiJztcbmltcG9ydCB7IGV4dGVuc2lvblJvb3QsIHBvc3RJbml0aWFsaXplIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IGdldE9wdGlvbiwgaG9va09wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5jb25zdCBBUElfQ09ORklHID0ge1xuICB1cmxzOiBbJyo6Ly8qLyonXSwgLy8gYCpgIHNjaGVtZSBtYXRjaGVzIG9ubHkgaHR0cCBhbmQgaHR0cHNcbiAgdHlwZXM6IFsnbWFpbl9mcmFtZScsICdzdWJfZnJhbWUnXSxcbn07XG5jb25zdCBUSU1FX0FGVEVSX1NFTkQgPSAxMGUzOyAvLyBsb25nZXIgYXMgZXN0YWJsaXNoaW5nIGNvbm5lY3Rpb24gdG8gc2l0ZXMgbWF5IHRha2UgdGltZVxuY29uc3QgVElNRV9BRlRFUl9SRUNFSVZFID0gMWUzOyAvLyBzaG9ydGVyIGFzIHJlc3BvbnNlIGJvZHkgd2lsbCBiZSBjb21pbmcgdmVyeSBzb29uXG5jb25zdCBUSU1FX0tFRVBfREFUQSA9IDYwZTM7IC8vIDEwMG1zIHNob3VsZCBiZSBlbm91Z2ggYnV0IHRoZSB0YWIgbWF5IGhhbmcgb3IgZ2V0IHBhdXNlZCBpbiBkZWJ1Z2dlclxuY29uc3QgY2FjaGVDb2RlID0gaW5pdENhY2hlKHsgbGlmZXRpbWU6IFRJTUVfS0VFUF9EQVRBIH0pO1xuY29uc3QgY2FjaGUgPSBpbml0Q2FjaGUoe1xuICBsaWZldGltZTogVElNRV9LRUVQX0RBVEEsXG4gIG9uRGlzcG9zZTogYXN5bmMgcHJvbWlzZSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHByb21pc2U7XG4gICAgY29uc3QgcmNzID0gYXdhaXQgZGF0YT8ucmNzUHJvbWlzZTtcbiAgICByY3M/LnVucmVnaXN0ZXIoKTtcbiAgfSxcbn0pO1xuY29uc3QgSU5KRUNUX0lOVE8gPSAnaW5qZWN0SW50byc7XG4vLyBLRVlfWFhYIGZvciBob29rZWQgb3B0aW9uc1xuY29uc3QgS0VZX0VYUE9TRSA9ICdleHBvc2UnO1xuY29uc3QgS0VZX0RFRl9JTkpFQ1RfSU5UTyA9ICdkZWZhdWx0SW5qZWN0SW50byc7XG5jb25zdCBLRVlfSVNfQVBQTElFRCA9ICdpc0FwcGxpZWQnO1xuY29uc3QgS0VZX1hIUl9JTkpFQ1QgPSAneGhySW5qZWN0JztcbmNvbnN0IGV4cG9zZSA9IHt9O1xubGV0IGlzQXBwbGllZDtcbmxldCBpbmplY3RJbnRvO1xubGV0IHhockluamVjdDtcbmhvb2tPcHRpb25zKG9uT3B0aW9uQ2hhbmdlZCk7XG5wb3N0SW5pdGlhbGl6ZS5wdXNoKCgpID0+IHtcbiAgZm9yIChjb25zdCBrZXkgb2YgW0tFWV9FWFBPU0UsIEtFWV9ERUZfSU5KRUNUX0lOVE8sIEtFWV9JU19BUFBMSUVELCBLRVlfWEhSX0lOSkVDVF0pIHtcbiAgICBvbk9wdGlvbkNoYW5nZWQoeyBba2V5XTogZ2V0T3B0aW9uKGtleSkgfSk7XG4gIH1cbn0pO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIGFzeW5jIEluamVjdGlvbkZlZWRiYWNrKHsgZmVlZElkLCBmZWVkYmFjaywgZm9yY2VDb250ZW50IH0sIHNyYykge1xuICAgIGZlZWRiYWNrLmZvckVhY2gocHJvY2Vzc0ZlZWRiYWNrLCBzcmMpO1xuICAgIGlmIChmZWVkSWQpIHtcbiAgICAgIC8vIGNhY2hlIGNsZWFudXAgd2hlbiBnZXREYXRhRkYgb3V0cnVucyBHZXRJbmplY3RlZFxuICAgICAgY2FjaGUuZGVsKGZlZWRJZC5jYWNoZUtleSk7XG4gICAgICAvLyBlbnZEZWxheWVkXG4gICAgICBjb25zdCBlbnYgPSBhd2FpdCBjYWNoZS5wb3AoZmVlZElkLmVudktleSk7XG4gICAgICBpZiAoZW52KSB7XG4gICAgICAgIGVudi5mb3JjZUNvbnRlbnQgPSBmb3JjZUNvbnRlbnQ7XG4gICAgICAgIGVudi5zY3JpcHRzLm1hcChwcmVwYXJlU2NyaXB0LCBlbnYpLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKHByb2Nlc3NGZWVkYmFjaywgc3JjKTtcbiAgICAgICAgcmV0dXJuIG9iamVjdFBpY2soZW52LCBbJ2NhY2hlJywgJ3NjcmlwdHMnXSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxufSk7XG5cbi8qKiBAdGhpcyB7Y2hyb21lLnJ1bnRpbWUuTWVzc2FnZVNlbmRlcn0gKi9cbmZ1bmN0aW9uIHByb2Nlc3NGZWVkYmFjayhba2V5LCBuZWVkc0luamVjdGlvbl0pIHtcbiAgY29uc3QgY29kZSA9IGNhY2hlQ29kZS5wb3Aoa2V5KTtcbiAgLy8gc2VlIFRJTUVfS0VFUF9EQVRBIGNvbW1lbnRcbiAgaWYgKG5lZWRzSW5qZWN0aW9uICYmIGNvZGUpIHtcbiAgICBicm93c2VyLnRhYnMuZXhlY3V0ZVNjcmlwdCh0aGlzLnRhYi5pZCwge1xuICAgICAgY29kZSxcbiAgICAgIGZyYW1lSWQ6IHRoaXMuZnJhbWVJZCxcbiAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfc3RhcnQnLFxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IHByb3BzVG9DbGVhciA9IHtcbiAgW3N0b3JhZ2UuY2FjaGUucHJlZml4XTogRU5WX0NBQ0hFX0tFWVMsXG4gIFtzdG9yYWdlLmNvZGUucHJlZml4XTogdHJ1ZSxcbiAgW3N0b3JhZ2UucmVxdWlyZS5wcmVmaXhdOiBFTlZfUkVRX0tFWVMsXG4gIFtzdG9yYWdlLnNjcmlwdC5wcmVmaXhdOiB0cnVlLFxuICBbc3RvcmFnZS52YWx1ZS5wcmVmaXhdOiBFTlZfVkFMVUVfSURTLFxufTtcblxuYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihhc3luYyBjaGFuZ2VzID0+IHtcbiAgY29uc3QgZGJLZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcyk7XG4gIGNvbnN0IGNhY2hlVmFsdWVzID0gYXdhaXQgUHJvbWlzZS5hbGwoY2FjaGUuZ2V0VmFsdWVzKCkpO1xuICBjb25zdCBkaXJ0eSA9IGNhY2hlVmFsdWVzLnNvbWUoZGF0YSA9PiBkYXRhLmluamVjdFxuICAgICYmIGRiS2V5cy5zb21lKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHByZWZpeCA9IGtleS5zbGljZSgwLCBrZXkuaW5kZXhPZignOicpICsgMSk7XG4gICAgICBjb25zdCBwcm9wID0gcHJvcHNUb0NsZWFyW3ByZWZpeF07XG4gICAgICBrZXkgPSBrZXkuc2xpY2UocHJlZml4Lmxlbmd0aCk7XG4gICAgICByZXR1cm4gcHJvcCA9PT0gdHJ1ZVxuICAgICAgICB8fCBkYXRhW3Byb3BdPy5pbmNsdWRlcyhwcmVmaXggPT09IHN0b3JhZ2UudmFsdWUucHJlZml4ID8gK2tleSA6IGtleSk7XG4gICAgfSkpO1xuICBpZiAoZGlydHkpIHtcbiAgICBjYWNoZS5kZXN0cm95KCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBub3JtYWxpemVSZWFsbSh2YWx1ZSkge1xuICByZXR1cm4gSU5KRUNUX01BUFBJTkc6Omhhc093blByb3BlcnR5KHZhbHVlKVxuICAgID8gdmFsdWVcbiAgICA6IGluamVjdEludG8gfHwgSU5KRUNUX0FVVE87XG59XG5cbmZ1bmN0aW9uIG9uT3B0aW9uQ2hhbmdlZChjaGFuZ2VzKSB7XG4gIGNoYW5nZXM6OmZvckVhY2hFbnRyeSgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIEtFWV9ERUZfSU5KRUNUX0lOVE86XG4gICAgICBpbmplY3RJbnRvID0gbm9ybWFsaXplUmVhbG0odmFsdWUpO1xuICAgICAgY2FjaGUuZGVzdHJveSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBLRVlfWEhSX0lOSkVDVDpcbiAgICAgIHRvZ2dsZVhockluamVjdCh2YWx1ZSk7XG4gICAgICBjYWNoZS5kZXN0cm95KCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEtFWV9JU19BUFBMSUVEOlxuICAgICAgdG9nZ2xlUHJlaW5qZWN0KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgS0VZX0VYUE9TRTpcbiAgICAgIHZhbHVlOjpmb3JFYWNoRW50cnkoKFtzaXRlLCBpc0V4cG9zZWRdKSA9PiB7XG4gICAgICAgIGV4cG9zZVtkZWNvZGVVUklDb21wb25lbnQoc2l0ZSldID0gaXNFeHBvc2VkO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKGtleS5pbmNsdWRlcygnLicpKSB7IC8vIHVzZWQgYnkgYGV4cG9zZS51cmxgXG4gICAgICAgIG9uT3B0aW9uQ2hhbmdlZChvYmplY3RTZXQoe30sIGtleSwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluamVjdGVkU2NyaXB0cyh1cmwsIHRhYklkLCBmcmFtZUlkLCBmb3JjZUNvbnRlbnQpIHtcbiAgY29uc3Qga2V5ID0gZ2V0S2V5KHVybCwgIWZyYW1lSWQpO1xuICByZXR1cm4gY2FjaGUucG9wKGtleSkgfHwgcHJlcGFyZShrZXksIHVybCwgdGFiSWQsIGZyYW1lSWQsIGZvcmNlQ29udGVudCk7XG59XG5cbmZ1bmN0aW9uIGdldEtleSh1cmwsIGlzVG9wKSB7XG4gIHJldHVybiBpc1RvcCA/IHVybCA6IGAtJHt1cmx9YDtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJlaW5qZWN0KGVuYWJsZSkge1xuICBpc0FwcGxpZWQgPSBlbmFibGU7XG4gIC8vIFVzaW5nIG9uU2VuZEhlYWRlcnMgYmVjYXVzZSBvbkhlYWRlcnNSZWNlaXZlZCBpbiBGaXJlZm94IGZpcmVzICphZnRlciogY29udGVudCBzY3JpcHRzLlxuICAvLyBBbmQgZXZlbiBpbiBDaHJvbWUgYSBzaXRlIG1heSBiZSBzbyBmYXN0IHRoYXQgcHJlaW5qZWN0IG9uIG9uSGVhZGVyc1JlY2VpdmVkIHdvbid0IGJlIHVzZWZ1bC5cbiAgY29uc3Qgb25PZmYgPSBgJHtlbmFibGUgPyAnYWRkJyA6ICdyZW1vdmUnfUxpc3RlbmVyYDtcbiAgY29uc3QgY29uZmlnID0gZW5hYmxlID8gQVBJX0NPTkZJRyA6IHVuZGVmaW5lZDtcbiAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uU2VuZEhlYWRlcnNbb25PZmZdKG9uU2VuZEhlYWRlcnMsIGNvbmZpZyk7XG4gIGlmICghaXNBcHBsaWVkIHx8ICF4aHJJbmplY3QpIHsgLy8gd2lsbCBiZSByZWdpc3RlcmVkIGluIHRvZ2dsZVhockluamVjdFxuICAgIGJyb3dzZXIud2ViUmVxdWVzdC5vbkhlYWRlcnNSZWNlaXZlZFtvbk9mZl0ob25IZWFkZXJzUmVjZWl2ZWQsIGNvbmZpZyk7XG4gIH1cbiAgY2FjaGUuZGVzdHJveSgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVYaHJJbmplY3QoZW5hYmxlKSB7XG4gIHhockluamVjdCA9IGVuYWJsZTtcbiAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkLnJlbW92ZUxpc3RlbmVyKG9uSGVhZGVyc1JlY2VpdmVkKTtcbiAgaWYgKGVuYWJsZSkge1xuICAgIGJyb3dzZXIud2ViUmVxdWVzdC5vbkhlYWRlcnNSZWNlaXZlZC5hZGRMaXN0ZW5lcihvbkhlYWRlcnNSZWNlaXZlZCwgQVBJX0NPTkZJRywgW1xuICAgICAgJ2Jsb2NraW5nJyxcbiAgICAgICdyZXNwb25zZUhlYWRlcnMnLFxuICAgICAgYnJvd3Nlci53ZWJSZXF1ZXN0Lk9uSGVhZGVyc1JlY2VpdmVkT3B0aW9ucy5FWFRSQV9IRUFERVJTLFxuICAgIF0uZmlsdGVyKEJvb2xlYW4pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvblNlbmRIZWFkZXJzKHsgdXJsLCB0YWJJZCwgZnJhbWVJZCB9KSB7XG4gIGlmICghSU5KRUNUQUJMRV9UQUJfVVJMX1JFLnRlc3QodXJsKSkgcmV0dXJuO1xuICBjb25zdCBpc1RvcCA9ICFmcmFtZUlkO1xuICBjb25zdCBrZXkgPSBnZXRLZXkodXJsLCBpc1RvcCk7XG4gIGlmICghY2FjaGUuaGFzKGtleSkpIHtcbiAgICAvLyBHZXRJbmplY3RlZCBtZXNzYWdlIHdpbGwgYmUgc2VudCBzb29uIGJ5IHRoZSBjb250ZW50IHNjcmlwdFxuICAgIC8vIGFuZCBpdCBtYXkgZWFzaWx5IGhhcHBlbiB3aGlsZSBnZXRTY3JpcHRzQnlVUkwgaXMgc3RpbGwgd2FpdGluZyBmb3IgYnJvd3Nlci5zdG9yYWdlXG4gICAgLy8gc28gd2UnbGwgbGV0IEdldEluamVjdGVkIGF3YWl0IHRoaXMgcGVuZGluZyBkYXRhIGJ5IHN0b3JpbmcgUHJvbWlzZSBpbiB0aGUgY2FjaGVcbiAgICBjYWNoZS5wdXQoa2V5LCBwcmVwYXJlKGtleSwgdXJsLCB0YWJJZCwgZnJhbWVJZCksIFRJTUVfQUZURVJfU0VORCk7XG4gIH1cbn1cblxuLyoqIEBwYXJhbSB7Y2hyb21lLndlYlJlcXVlc3QuV2ViUmVzcG9uc2VIZWFkZXJzRGV0YWlsc30gaW5mbyAqL1xuZnVuY3Rpb24gb25IZWFkZXJzUmVjZWl2ZWQoaW5mbykge1xuICBjb25zdCBrZXkgPSBnZXRLZXkoaW5mby51cmwsICFpbmZvLmZyYW1lSWQpO1xuICBjb25zdCBkYXRhID0geGhySW5qZWN0ICYmIGNhY2hlLmdldChrZXkpO1xuICBjYWNoZS5oaXQoa2V5LCBUSU1FX0FGVEVSX1JFQ0VJVkUpO1xuICByZXR1cm4gZGF0YT8uaW5qZWN0ICYmIHByZXBhcmVYaHJCbG9iKGluZm8sIGRhdGEpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Y2hyb21lLndlYlJlcXVlc3QuV2ViUmVzcG9uc2VIZWFkZXJzRGV0YWlsc30gaW5mb1xuICogQHBhcmFtIHtWTUdldEluamVjdGVkRGF0YUNvbnRhaW5lcn0gZGF0YVxuICovXG5mdW5jdGlvbiBwcmVwYXJlWGhyQmxvYih7IHVybCwgcmVzcG9uc2VIZWFkZXJzIH0sIGRhdGEpIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwczonKSAmJiBkZXRlY3RTdHJpY3RDc3AocmVzcG9uc2VIZWFkZXJzKSkge1xuICAgIGZvcmNlQ29udGVudEluamVjdGlvbihkYXRhKTtcbiAgfVxuICBjb25zdCBibG9iVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbXG4gICAgSlNPTi5zdHJpbmdpZnkoZGF0YS5pbmplY3QpLFxuICBdKSk7XG4gIHJlc3BvbnNlSGVhZGVycy5wdXNoKHtcbiAgICBuYW1lOiAnU2V0LUNvb2tpZScsXG4gICAgdmFsdWU6IGBcIiR7cHJvY2Vzcy5lbnYuSU5JVF9GVU5DX05BTUV9XCI9JHtibG9iVXJsLnNwbGl0KCcvJykucG9wKCl9OyBTYW1lU2l0ZT1MYXhgLFxuICB9KTtcbiAgc2V0VGltZW91dChVUkwucmV2b2tlT2JqZWN0VVJMLCBUSU1FX0tFRVBfREFUQSwgYmxvYlVybCk7XG4gIHJldHVybiB7IHJlc3BvbnNlSGVhZGVycyB9O1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlKGtleSwgdXJsLCB0YWJJZCwgZnJhbWVJZCwgZm9yY2VDb250ZW50KSB7XG4gIC8qKiBAbmFtZXNwYWNlIFZNR2V0SW5qZWN0ZWREYXRhQ29udGFpbmVyICovXG4gIGNvbnN0IHJlcyA9IHtcbiAgICAvKiogQG5hbWVzcGFjZSBWTUdldEluamVjdGVkRGF0YSAqL1xuICAgIGluamVjdDoge1xuICAgICAgZXhwb3NlOiAhZnJhbWVJZFxuICAgICAgICAmJiB1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKVxuICAgICAgICAmJiBleHBvc2VbdXJsLnNwbGl0KCcvJywgMylbMl1dLFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBpc0FwcGxpZWRcbiAgICA/IHByZXBhcmVTY3JpcHRzKHJlcywga2V5LCB1cmwsIHRhYklkLCBmcmFtZUlkLCBmb3JjZUNvbnRlbnQpXG4gICAgOiByZXM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByZXBhcmVTY3JpcHRzKHJlcywgY2FjaGVLZXksIHVybCwgdGFiSWQsIGZyYW1lSWQsIGZvcmNlQ29udGVudCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2NyaXB0c0J5VVJMKHVybCwgIWZyYW1lSWQpO1xuICBjb25zdCB7IGVudkRlbGF5ZWQsIHNjcmlwdHMgfSA9IGRhdGE7XG4gIGNvbnN0IGlzTGF0ZSA9IGZvcmNlQ29udGVudCAhPSBudWxsO1xuICBkYXRhLmZvcmNlQ29udGVudCA9IGZvcmNlQ29udGVudDtcbiAgY29uc3QgZmVlZGJhY2sgPSBzY3JpcHRzLm1hcChwcmVwYXJlU2NyaXB0LCBkYXRhKS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IG1vcmUgPSBlbnZEZWxheWVkLnByb21pc2U7XG4gIGNvbnN0IGVudktleSA9IGdldFVuaXFJZChgJHt0YWJJZH06JHtmcmFtZUlkfTpgKTtcbiAgY29uc3QgeyBpbmplY3QgfSA9IHJlcztcbiAgLyoqIEBuYW1lc3BhY2UgVk1HZXRJbmplY3RlZERhdGEgKi9cbiAgT2JqZWN0LmFzc2lnbihpbmplY3QsIHtcbiAgICBzY3JpcHRzLFxuICAgIFtJTkpFQ1RfSU5UT106IGluamVjdEludG8sXG4gICAgY2FjaGU6IGRhdGEuY2FjaGUsXG4gICAgZmVlZElkOiB7XG4gICAgICBjYWNoZUtleSwgLy8gSW5qZWN0aW9uRmVlZGJhY2sgY2FjaGUga2V5IGZvciBjbGVhbnVwIHdoZW4gZ2V0RGF0YUZGIG91dHJ1bnMgR2V0SW5qZWN0ZWRcbiAgICAgIGVudktleSwgLy8gSW5qZWN0aW9uRmVlZGJhY2sgY2FjaGUga2V5IGZvciBlbnZEZWxheWVkXG4gICAgfSxcbiAgICBoYXNNb3JlOiAhIW1vcmUsIC8vIHRlbGxzIGNvbnRlbnQgYnJpZGdlIHRvIGV4cGVjdCBlbnZEZWxheWVkXG4gICAgZm9yY2VDb250ZW50OiBmb3JjZUNvbnRlbnQgfHwgKCAvLyBUcnlpbmcgdG8gc2tpcCBwYWdlIHNhbmRib3ggd2hlbiB4aHJJbmplY3QgaXMgb246XG4gICAgICBmZWVkYmFjay5sZW5ndGggPT09IHNjcmlwdHMubGVuZ3RoIC8vIC4uLndoZW4gYWxsIGBlbnZTdGFydGAgc2NyaXB0cyBhcmUgYGNvbnRlbnRgLFxuICAgICAgJiYgZW52RGVsYXllZC5zY3JpcHRzLmV2ZXJ5KHNjciA9PiBpc0NvbnRlbnRSZWFsbShzY3IsIGZvcmNlQ29udGVudCkpIC8vIGFuZCBgZW52RGVsYXllZGAgdG9vLlxuICAgICksXG4gICAgaWRzOiBkYXRhLmRpc2FibGVkSWRzLCAvLyBjb250ZW50IGJyaWRnZSBhZGRzIHRoZSBhY3R1YWxseSBydW5uaW5nIGlkcyBhbmQgc2VuZHMgdmlhIFNldFBvcHVwXG4gICAgaW5mbzoge1xuICAgICAgdWEsXG4gICAgfSxcbiAgfSk7XG4gIC8qKiBAbmFtZXNwYWNlIFZNR2V0SW5qZWN0ZWREYXRhQ29udGFpbmVyICovXG4gIE9iamVjdC5hc3NpZ24ocmVzLCB7XG4gICAgZmVlZGJhY2ssXG4gICAgdmFsT3BJZHM6IFsuLi5kYXRhW0VOVl9WQUxVRV9JRFNdLCAuLi5lbnZEZWxheWVkW0VOVl9WQUxVRV9JRFNdXSxcbiAgICByY3NQcm9taXNlOiAhaXNMYXRlICYmICF4aHJJbmplY3QgJiYgSVNfRklSRUZPWFxuICAgICAgPyByZWdpc3RlclNjcmlwdERhdGFGRihpbmplY3QsIHVybCwgISFmcmFtZUlkKVxuICAgICAgOiBudWxsLFxuICB9KTtcbiAgaWYgKG1vcmUpIGNhY2hlLnB1dChlbnZLZXksIG1vcmUpO1xuICBjYWNoZS5wdXQoY2FjaGVLZXksIHJlcyk7IC8vIG5lY2Vzc2FyeSBmb3IgdGhlIHN5bmNocm9ub3VzIG9uSGVhZGVyc1JlY2VpdmVkXG4gIHJldHVybiByZXM7XG59XG5cbi8qKiBAdGhpcyB7Vk1TY3JpcHRCeVVybERhdGF9ICovXG5mdW5jdGlvbiBwcmVwYXJlU2NyaXB0KHNjcmlwdCkge1xuICBjb25zdCB7IGN1c3RvbSwgbWV0YSwgcHJvcHMgfSA9IHNjcmlwdDtcbiAgY29uc3QgeyBpZCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgZm9yY2VDb250ZW50LCByZXF1aXJlLCB2YWx1ZSB9ID0gdGhpcztcbiAgY29uc3QgY29kZSA9IHRoaXMuY29kZVtpZF07XG4gIGNvbnN0IGRhdGFLZXkgPSBnZXRVbmlxSWQoJ1ZNaW4nKTtcbiAgY29uc3QgZGlzcGxheU5hbWUgPSBnZXRTY3JpcHROYW1lKHNjcmlwdCk7XG4gIGNvbnN0IG5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQoZGlzcGxheU5hbWUucmVwbGFjZSgvWyMmJywvOjs/QD0rXS9nLCByZXBsYWNlV2l0aEZ1bGxXaWR0aEZvcm0pKTtcbiAgY29uc3QgaXNDb250ZW50ID0gaXNDb250ZW50UmVhbG0oc2NyaXB0LCBmb3JjZUNvbnRlbnQpO1xuICBjb25zdCBwYXRoTWFwID0gY3VzdG9tLnBhdGhNYXAgfHwge307XG4gIGNvbnN0IHJlcXMgPSBtZXRhLnJlcXVpcmU/Lm1hcChrZXkgPT4gcmVxdWlyZVtwYXRoTWFwW2tleV0gfHwga2V5XSkuZmlsdGVyKEJvb2xlYW4pO1xuICAvLyB0cnlpbmcgdG8gYXZvaWQgcHJvZ3Jlc3NpdmUgc3RyaW5nIGNvbmNhdGVuYXRpb24gb2YgcG90ZW50aWFsbHkgaHVnZSBjb2RlIHNsaWNlc1xuICAvLyBhZGRpbmcgYDtgIG9uIGEgbmV3IGxpbmUgaW4gY2FzZSBzb21lIHJlcXVpcmVkIHNjcmlwdCBlbmRzIHdpdGggYSBsaW5lIGNvbW1lbnRcbiAgY29uc3QgcmVxc1NsaWNlcyA9IHJlcXMgPyBbXS5jb25jYXQoLi4ucmVxcy5tYXAocmVxID0+IFtyZXEsICdcXG47J10pKSA6IFtdO1xuICBjb25zdCBoYXNSZXFzID0gcmVxc1NsaWNlcy5sZW5ndGg7XG4gIGNvbnN0IGluamVjdGVkQ29kZSA9IFtcbiAgICAvLyBoaWRpbmcgbW9kdWxlIGludGVyZmFjZSBmcm9tIEByZXF1aXJlJ2Qgc2NyaXB0cyBzbyB0aGV5IGRvbid0IG1pc3Rha2VubHkgdXNlIGl0XG4gICAgYHdpbmRvdy4ke2RhdGFLZXl9PWZ1bmN0aW9uKCR7ZGF0YUtleX0pe3RyeXt3aXRoKHRoaXMpKChkZWZpbmUsbW9kdWxlLGV4cG9ydHMpPT57YCxcbiAgICAuLi5yZXFzU2xpY2VzLFxuICAgIC8vIGFkZGluZyBhIG5lc3RlZCBJSUZFIHRvIHN1cHBvcnQgJ3VzZSBzdHJpY3QnIGluIHRoZSBjb2RlIHdoZW4gdGhlcmUgYXJlIEByZXF1aXJlc1xuICAgIGhhc1JlcXMgPyAnKCgpPT57JyA6ICcnLFxuICAgIGNvZGUsXG4gICAgLy8gYWRkaW5nIGEgbmV3IGxpbmUgaW4gY2FzZSB0aGUgY29kZSBlbmRzIHdpdGggYSBsaW5lIGNvbW1lbnRcbiAgICBjb2RlLmVuZHNXaXRoKCdcXG4nKSA/ICcnIDogJ1xcbicsXG4gICAgaGFzUmVxcyA/ICd9KSgpJyA6ICcnLFxuICAgIC8vIDAgYXQgdGhlIGVuZCB0byBzdXBwcmVzcyBlcnJvcnMgYWJvdXQgbm9uLWNsb25lYWJsZSByZXN1bHQgb2YgZXhlY3V0ZVNjcmlwdCBpbiBGRlxuICAgIGB9KSgpfWNhdGNoKGUpeyR7ZGF0YUtleX0oZSl9fTswYCxcbiAgICAvLyBGaXJlZm94IGxpc3RzIC51c2VyLmpzIGFtb25nIG91ciBvd24gY29udGVudCBzY3JpcHRzIHNvIGEgc3BhY2UgYXQgc3RhcnQgd2lsbCBncm91cCB0aGVtXG4gICAgYFxcbi8vIyBzb3VyY2VVUkw9JHtleHRlbnNpb25Sb290fSR7SVNfRklSRUZPWCA/ICclMjAnIDogJyd9JHtuYW1lfS51c2VyLmpzIyR7aWR9YCxcbiAgXS5qb2luKCcnKTtcbiAgY2FjaGVDb2RlLnB1dChkYXRhS2V5LCBpbmplY3RlZENvZGUsIFRJTUVfS0VFUF9EQVRBKTtcbiAgLyoqIEBuYW1lc3BhY2UgVk1JbmplY3RlZFNjcmlwdCAqL1xuICBPYmplY3QuYXNzaWduKHNjcmlwdCwge1xuICAgIGRhdGFLZXksXG4gICAgZGlzcGxheU5hbWUsXG4gICAgLy8gY29kZSB3aWxsIGJlIGB0cnVlYCBpZiB0aGUgZGVzaXJlZCByZWFsbSBpcyBQQUdFIHdoaWNoIGlzIG5vdCBpbmplY3RhYmxlXG4gICAgY29kZTogaXNDb250ZW50ID8gJycgOiBmb3JjZUNvbnRlbnQgfHwgaW5qZWN0ZWRDb2RlLFxuICAgIG1ldGFTdHI6IGNvZGUubWF0Y2goTUVUQUJMT0NLX1JFKVsxXSB8fCAnJyxcbiAgICB2YWx1ZXM6IHZhbHVlW2lkXSB8fCBudWxsLFxuICB9KTtcbiAgcmV0dXJuIGlzQ29udGVudCAmJiBbZGF0YUtleSwgdHJ1ZV07XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VXaXRoRnVsbFdpZHRoRm9ybShzKSB7XG4gIC8vIGZ1bGx3aWR0aCByYW5nZSBzdGFydHMgYXQgMHhGRjAwLCBub3JtYWwgcmFuZ2Ugc3RhcnRzIGF0IHNwYWNlIGNoYXIgY29kZSAweDIwXG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHMuY2hhckNvZGVBdCgwKSAtIDB4MjAgKyAweEZGMDApO1xufVxuXG5jb25zdCByZXNvbHZlRGF0YUNvZGVTdHIgPSBgKCR7ZnVuY3Rpb24gXyhkYXRhKSB7XG4gIC8qIGBmdW5jdGlvbmAgaXMgcmVxdWlyZWQgdG8gY29tcGlsZSBgdGhpc2AsIGFuZCBgdGhpc2AgaXMgcmVxdWlyZWQgYmVjYXVzZSBvdXIgc2FmZS1nbG9iYWxzXG4gICAqIHNoYWRvd3MgYHdpbmRvd2Agc28gaXRzIG5hbWUgaXMgbWluaWZpZWQgYW5kIGhlbmNlIGluYWNjZXNzaWJsZSBoZXJlICovXG4gIGNvbnN0IHsgdm1SZXNvbHZlIH0gPSB0aGlzO1xuICBpZiAodm1SZXNvbHZlKSB7XG4gICAgdm1SZXNvbHZlKGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJ1bm5pbmcgZWFybGllciB0aGFuIHRoZSBtYWluIGNvbnRlbnQgc2NyaXB0IGZvciB3aGF0ZXZlciByZWFzb25cbiAgICB0aGlzLnZtRGF0YSA9IGRhdGE7XG4gIH1cbn19KWA7XG5cbi8vIFRPRE86IHJld29yayB0aGUgd2hvbGUgdGhpbmcgdG8gcmVnaXN0ZXIgc2NyaXB0cyBpbmRpdmlkdWFsbHkgd2l0aCByZWFsIGBtYXRjaGVzYFxuZnVuY3Rpb24gcmVnaXN0ZXJTY3JpcHREYXRhRkYoaW5qZWN0LCB1cmwsIGFsbEZyYW1lcykge1xuICByZXR1cm4gYnJvd3Nlci5jb250ZW50U2NyaXB0cz8ucmVnaXN0ZXIoe1xuICAgIGFsbEZyYW1lcyxcbiAgICBqczogW3tcbiAgICAgIGNvZGU6IGAke3Jlc29sdmVEYXRhQ29kZVN0cn0oJHtKU09OLnN0cmluZ2lmeShpbmplY3QpfSlgLFxuICAgIH1dLFxuICAgIG1hdGNoZXM6IHVybC5zcGxpdCgnIycsIDEpLFxuICAgIHJ1bkF0OiAnZG9jdW1lbnRfc3RhcnQnLFxuICB9KTtcbn1cblxuLyoqIEBwYXJhbSB7Y2hyb21lLndlYlJlcXVlc3QuSHR0cEhlYWRlcltdfSByZXNwb25zZUhlYWRlcnMgKi9cbmZ1bmN0aW9uIGRldGVjdFN0cmljdENzcChyZXNwb25zZUhlYWRlcnMpIHtcbiAgcmV0dXJuIHJlc3BvbnNlSGVhZGVycy5zb21lKCh7IG5hbWUsIHZhbHVlIH0pID0+IChcbiAgICAvXmNvbnRlbnQtc2VjdXJpdHktcG9saWN5JC9pLnRlc3QobmFtZSlcbiAgICAmJiAvXi4oPyEuKid1bnNhZmUtaW5saW5lJykvLnRlc3QoIC8vIHRydWUgaWYgbm90IGVtcHR5IGFuZCB3aXRob3V0ICd1bnNhZmUtaW5saW5lJ1xuICAgICAgdmFsdWUubWF0Y2goLyg/Ol58OylcXHMqc2NyaXB0LXNyYy1lbGVtXFxzW147XSsvKVxuICAgICAgfHwgdmFsdWUubWF0Y2goLyg/Ol58OylcXHMqc2NyaXB0LXNyY1xcc1teO10rLylcbiAgICAgIHx8IHZhbHVlLm1hdGNoKC8oPzpefDspXFxzKmRlZmF1bHQtc3JjXFxzW147XSsvKVxuICAgICAgfHwgJycsXG4gICAgKVxuICApKTtcbn1cblxuLyoqIEBwYXJhbSB7Vk1HZXRJbmplY3RlZERhdGFDb250YWluZXJ9IGRhdGEgKi9cbmZ1bmN0aW9uIGZvcmNlQ29udGVudEluamVjdGlvbihkYXRhKSB7XG4gIC8qKiBAdHlwZSBWTUdldEluamVjdGVkRGF0YSAqL1xuICBjb25zdCBpbmplY3QgPSBkYXRhLmluamVjdDtcbiAgaW5qZWN0LmZvcmNlQ29udGVudCA9IHRydWU7XG4gIGluamVjdC5zY3JpcHRzLmZvckVhY2goc2NyID0+IHtcbiAgICAvLyBXaGVuIHNjcmlwdCB3YW50cyBgcGFnZWAsIHRoZSByZXN1bHQgYmVsb3cgd2lsbCBiZSBgdHJ1ZWAgc28gdGhlIHNjcmlwdCBnb2VzIGludG8gYGZhaWxlZElkc2BcbiAgICBzY3IuY29kZSA9ICFpc0NvbnRlbnRSZWFsbShzY3IsIHRydWUpIHx8ICcnO1xuICAgIGRhdGEuZmVlZGJhY2sucHVzaChbc2NyLmRhdGFLZXksIHRydWVdKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzQ29udGVudFJlYWxtKHNjciwgZm9yY2VDb250ZW50KSB7XG4gIGNvbnN0IHJlYWxtID0gc2NyW0lOSkVDVF9JTlRPXSB8fCAoXG4gICAgc2NyW0lOSkVDVF9JTlRPXSA9IG5vcm1hbGl6ZVJlYWxtKHNjci5jdXN0b21bSU5KRUNUX0lOVE9dIHx8IHNjci5tZXRhW0lOSkVDVF9JTlRPXSlcbiAgKTtcbiAgcmV0dXJuIHJlYWxtID09PSBJTkpFQ1RfQ09OVEVOVCB8fCBmb3JjZUNvbnRlbnQgJiYgcmVhbG0gPT09IElOSkVDVF9BVVRPO1xufVxuIiwiaW1wb3J0IHtcbiAgYmxvYjJiYXNlNjQsIGJ1ZmZlcjJzdHJpbmcsIGdldFVuaXFJZCwgcmVxdWVzdCwgaTE4biwgaXNFbXB0eSwgbm9vcCwgc2VuZFRhYkNtZCxcbiAgc3RyaW5nMnVpbnQ4YXJyYXksXG59IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IGZvckVhY2hFbnRyeSwgb2JqZWN0UGljayB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgdWEgZnJvbSAnIy9jb21tb24vdWEnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuaW1wb3J0IHsgaXNVc2VyU2NyaXB0LCBwYXJzZU1ldGEgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgeyBleHRlbnNpb25Sb290IH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuY29uc3QgVk1fVkVSSUZZID0gJ1ZNLVZlcmlmeSc7XG5jb25zdCBDT05GSVJNX1VSTF9CQVNFID0gYCR7ZXh0ZW5zaW9uUm9vdH1jb25maXJtL2luZGV4Lmh0bWwjYDtcbi8qKiBAdHlwZSB7T2JqZWN0PHN0cmluZyxWTUh0dHBSZXF1ZXN0Pn0gKi9cbmNvbnN0IHJlcXVlc3RzID0ge307XG5jb25zdCBkb3dubG9hZHMgPSB7fTtcbmNvbnN0IHZlcmlmeSA9IHt9O1xuY29uc3QgdGFiUmVxdWVzdHMgPSB7fTtcbmNvbnN0IHsgY2hyb21lIH0gPSBnbG9iYWw7XG5sZXQgZW5jb2RlcjtcblxuaWYgKGNocm9tZSkge1xuICBjaHJvbWUuZG93bmxvYWRzLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihldnQgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnb25DaGFuZ2VkJywgZXZ0KTtcbiAgICBpZiAoIWRvd25sb2Fkc1tldnQuaWRdKSByZXR1cm47XG4gICAgY29uc3QgeyByZXEsIHNyYyB9ID0gZG93bmxvYWRzW2V2dC5pZF07XG4gICAgY29uc3QgeyB0YWI6IHsgaWQ6IHRhYklkIH0sIGZyYW1lSWQgfSA9IHNyYztcblxuICAgIGlmIChldnQuc3RhdGU/LmN1cnJlbnQgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIHNlbmRUYWJDbWQodGFiSWQsICdIdHRwUmVxdWVzdGVkJywge1xuICAgICAgICB0eXBlOiAnbG9hZCcsIGlkOiByZXEuaWQsIGRvd25sb2FkSWQ6IGV2dC5pZCxcbiAgICAgIH0sIHsgZnJhbWVJZCB9KTtcbiAgICB9IGVsc2UgaWYgKGV2dC5zdGF0ZT8uY3VycmVudCA9PT0gJ2ludGVycnVwdGVkJykge1xuICAgICAgc2VuZFRhYkNtZCh0YWJJZCwgJ0h0dHBSZXF1ZXN0ZWQnLCB7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsIGlkOiByZXEuaWQsIGRvd25sb2FkSWQ6IGV2dC5pZCxcbiAgICAgIH0sIHsgZnJhbWVJZCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkZWxldGUgZG93bmxvYWRzW2V2dC5pZF07XG4gICAgZGVsZXRlIHJlcXVlc3RzW3JlcS5pZF07XG4gIH0pO1xufVxuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIENvbmZpcm1JbnN0YWxsOiBjb25maXJtSW5zdGFsbCxcbiAgYXN5bmMgQ2hlY2tJbnN0YWxsZXJUYWIodGFiSWQsIHNyYykge1xuICAgIGNvbnN0IHRhYiA9IElTX0ZJUkVGT1ggJiYgKHNyYy51cmwgfHwgJycpLnN0YXJ0c1dpdGgoJ2ZpbGU6JylcbiAgICAgICYmIGF3YWl0IGJyb3dzZXIudGFicy5nZXQodGFiSWQpLmNhdGNoKG5vb3ApO1xuICAgIHJldHVybiB0YWIgJiYgKHRhYi5wZW5kaW5nVXJsIHx8IHRhYi51cmwgfHwgJycpLnN0YXJ0c1dpdGgoQ09ORklSTV9VUkxfQkFTRSk7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHt2b2lkfSAqL1xuICBIdHRwUmVxdWVzdChvcHRzLCBzcmMpIHtcbiAgICBjb25zdCB7IHRhYjogeyBpZDogdGFiSWQgfSwgZnJhbWVJZCB9ID0gc3JjO1xuICAgIGNvbnN0IHsgaWQsIGV2ZW50c1RvTm90aWZ5IH0gPSBvcHRzO1xuXG4gICAgY29uc29sZS5pbmZvKCdyZXEgb3B0cycsIG9wdHMpO1xuXG4gICAgLy8gaGFuZGxlIGRvd25sb2FkXG4gICAgaWYgKGNocm9tZSAmJiBvcHRzLm5hdGl2ZSkge1xuICAgICAgLy8gY29uc29sZS5pbmZvKG9wdHMpO1xuICAgICAgcmV0dXJuIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICB1cmw6IG9wdHMudXJsLFxuICAgICAgICAvLyBcInNhdmVBc1wiIDogdHJ1ZSxcbiAgICAgICAgZmlsZW5hbWU6IG9wdHMuZmlsZU5hbWUsXG4gICAgICB9LCBkb3dubG9hZElkID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5pbmZvKCdkb3dubG9hZElkJywgZG93bmxvYWRJZCk7XG4gICAgICAgIHJlcXVlc3RzW2lkXSA9IHsgaWQsIGRvd25sb2FkSWQsIHRhYklkLCBldmVudHNUb05vdGlmeSwgeGhyOiBudWxsIH07XG4gICAgICAgIGRvd25sb2Fkc1tkb3dubG9hZElkXSA9IHsgcmVxOiByZXF1ZXN0c1tpZF0sIG9wdHMsIHNyYyB9O1xuICAgICAgICBpZiAoZXZlbnRzVG9Ob3RpZnk/LmluY2x1ZGVzKCdwcm9ncmVzcycpKSB7XG4gICAgICAgICAgc2VuZFRhYkNtZCh0YWJJZCwgJ0h0dHBSZXF1ZXN0ZWQnLCB7IHR5cGU6ICdwcm9ncmVzcycsIGlkLCBkb3dubG9hZElkIH0sIHsgZnJhbWVJZCB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiSHR0cFJlcXVlc3RcIiwgb3B0cywgc3JjKTtcblxuICAgIHJlcXVlc3RzW2lkXSA9IHtcbiAgICAgIGlkLFxuICAgICAgdGFiSWQsXG4gICAgICBldmVudHNUb05vdGlmeSxcbiAgICAgIHhocjogbmV3IFhNTEh0dHBSZXF1ZXN0KCksXG4gICAgfTtcbiAgICAodGFiUmVxdWVzdHNbdGFiSWRdIHx8ICh0YWJSZXF1ZXN0c1t0YWJJZF0gPSB7fSkpW2lkXSA9IDE7XG4gICAgaHR0cFJlcXVlc3Qob3B0cywgc3JjLCByZXMgPT4gcmVxdWVzdHNbaWRdICYmIChcbiAgICAgIHNlbmRUYWJDbWQodGFiSWQsICdIdHRwUmVxdWVzdGVkJywgcmVzLCB7IGZyYW1lSWQgfSlcbiAgICApKTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge3ZvaWR9ICovXG4gIEFib3J0UmVxdWVzdChpZCkge1xuICAgIGNvbnN0IHJlcSA9IHJlcXVlc3RzW2lkXTtcbiAgICBpZiAocmVxKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGlmIChjaHJvbWUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIGNocm9tZS5kb3dubG9hZHMuY2FuY2VsKHJlcS5pZCk7XG4gICAgICAgIGRlbGV0ZSByZXF1ZXN0c1tyZXEuaWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxLnhoci5hYm9ydCgpO1xuICAgICAgICBjbGVhclJlcXVlc3QocmVxKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFJldm9rZUJsb2IodXJsKSB7XG4gICAgY29uc3QgdGltZXIgPSBjYWNoZS5wb3AoYHhockJsb2I6JHt1cmx9YCk7XG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5jb25zdCBzcGVjaWFsSGVhZGVycyA9IFtcbiAgJ3VzZXItYWdlbnQnLFxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0dsb3NzYXJ5L0ZvcmJpZGRlbl9oZWFkZXJfbmFtZVxuICAvLyBodHRwczovL2NzLmNocm9taXVtLm9yZy8/cT1maWxlOmNjK3N5bWJvbDpJc0ZvcmJpZGRlbkhlYWRlciU1Q2JcbiAgJ2FjY2VwdC1jaGFyc2V0JyxcbiAgJ2FjY2VwdC1lbmNvZGluZycsXG4gICdhY2Nlc3MtY29udHJvbC1yZXF1ZXN0LWhlYWRlcnMnLFxuICAnYWNjZXNzLWNvbnRyb2wtcmVxdWVzdC1tZXRob2QnLFxuICAnY29ubmVjdGlvbicsXG4gICdjb250ZW50LWxlbmd0aCcsXG4gICdjb29raWUnLFxuICAnY29va2llMicsXG4gICdkYXRlJyxcbiAgJ2RudCcsXG4gICdleHBlY3QnLFxuICAnaG9zdCcsXG4gICdrZWVwLWFsaXZlJyxcbiAgJ29yaWdpbicsXG4gICdyZWZlcmVyJyxcbiAgJ3RlJyxcbiAgJ3RyYWlsZXInLFxuICAndHJhbnNmZXItZW5jb2RpbmcnLFxuICAndXBncmFkZScsXG4gICd2aWEnLFxuXTtcbi8vIGNvbnN0IHRhc2tzID0ge307XG5jb25zdCBIZWFkZXJJbmplY3RvciA9ICgoKSA9PiB7XG4gIC8qKiBAdHlwZSBjaHJvbWUud2ViUmVxdWVzdC5SZXF1ZXN0RmlsdGVyICovXG4gIGNvbnN0IGFwaUZpbHRlciA9IHtcbiAgICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbiAgICB0eXBlczogWyd4bWxodHRwcmVxdWVzdCddLFxuICB9O1xuICBjb25zdCBFWFRSQV9IRUFERVJTID0gW1xuICAgIGJyb3dzZXIud2ViUmVxdWVzdC5PbkJlZm9yZVNlbmRIZWFkZXJzT3B0aW9ucy5FWFRSQV9IRUFERVJTLFxuICBdLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgaGVhZGVyc1RvSW5qZWN0ID0ge307XG4gIC8qKiBAcGFyYW0ge2Nocm9tZS53ZWJSZXF1ZXN0Lkh0dHBIZWFkZXJ9IGhlYWRlciAqL1xuICBjb25zdCBpc1ZtVmVyaWZ5ID0gaGVhZGVyID0+IGhlYWRlci5uYW1lID09PSBWTV9WRVJJRlk7XG4gIGNvbnN0IGlzTm90Q29va2llID0gaGVhZGVyID0+ICEvXmNvb2tpZTI/JC9pLnRlc3QoaGVhZGVyLm5hbWUpO1xuICBjb25zdCBpc1NlbmRhYmxlID0gaGVhZGVyID0+IGhlYWRlci5uYW1lICE9PSBWTV9WRVJJRlk7XG4gIGNvbnN0IGlzU2VuZGFibGVBbm9uID0gaGVhZGVyID0+IGlzU2VuZGFibGUoaGVhZGVyKSAmJiBpc05vdENvb2tpZShoZWFkZXIpO1xuICBjb25zdCBSRV9TRVRfQ09PS0lFID0gL15zZXQtY29va2llMj8kL2k7XG4gIGNvbnN0IFJFX1NFVF9DT09LSUVfVkFMVUUgPSAvXlxccyooPzpfXyhTZWN1cmV8SG9zdCktKT8oW149XFxzXSspXFxzKj1cXHMqKFwiKT8oWyEjLStcXC0tOjwtW1xcXS1+XSopXFwzKC4qKS87XG4gIGNvbnN0IFJFX1NFVF9DT09LSUVfQVRUUiA9IC9cXHMqOz9cXHMqKFxcdyspKD86PShcIik/KFshIy0rXFwtLTo8LVtcXF0tfl0qKVxcMik/L3k7XG4gIGNvbnN0IFNBTUVfU0lURV9NQVAgPSB7XG4gICAgc3RyaWN0OiAnc3RyaWN0JyxcbiAgICBsYXg6ICdsYXgnLFxuICAgIG5vbmU6ICdub19yZXN0cmljdGlvbicsXG4gIH07XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGVhZGVyVmFsdWVcbiAgICogQHBhcmFtIHtWTUh0dHBSZXF1ZXN0fSByZXFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgY29uc3Qgc2V0Q29va2llSW5TdG9yZSA9IChoZWFkZXJWYWx1ZSwgcmVxLCB1cmwpID0+IHtcbiAgICBsZXQgbSA9IFJFX1NFVF9DT09LSUVfVkFMVUUuZXhlYyhoZWFkZXJWYWx1ZSk7XG4gICAgaWYgKG0pIHtcbiAgICAgIGNvbnN0IFssIHByZWZpeCwgbmFtZSwgLCB2YWx1ZSwgb3B0U3RyXSA9IG07XG4gICAgICBjb25zdCBvcHQgPSB7fTtcbiAgICAgIGNvbnN0IGlzSG9zdCA9IHByZWZpeCA9PT0gJ0hvc3QnO1xuICAgICAgUkVfU0VUX0NPT0tJRV9BVFRSLmxhc3RJbmRleCA9IDA7XG4gICAgICB3aGlsZSAoKG0gPSBSRV9TRVRfQ09PS0lFX0FUVFIuZXhlYyhvcHRTdHIpKSkge1xuICAgICAgICBvcHRbbVsxXS50b0xvd2VyQ2FzZSgpXSA9IG1bM107XG4gICAgICB9XG4gICAgICBjb25zdCBzYW1lU2l0ZSA9IG9wdC5zYW1lU2l0ZT8udG9Mb3dlckNhc2UoKTtcbiAgICAgIGJyb3dzZXIuY29va2llcy5zZXQoe1xuICAgICAgICB1cmwsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBkb21haW46IGlzSG9zdCA/IHVuZGVmaW5lZCA6IG9wdC5kb21haW4sXG4gICAgICAgIGV4cGlyYXRpb25EYXRlOiBNYXRoLm1heCgwLCArbmV3IERhdGUob3B0WydtYXgtYWdlJ10gKiAxMDAwIHx8IG9wdC5leHBpcmVzKSkgfHwgdW5kZWZpbmVkLFxuICAgICAgICBodHRwT25seTogJ2h0dHBvbmx5JyBpbiBvcHQsXG4gICAgICAgIHBhdGg6IGlzSG9zdCA/ICcvJyA6IG9wdC5wYXRoLFxuICAgICAgICBzYW1lU2l0ZTogU0FNRV9TSVRFX01BUFtzYW1lU2l0ZV0sXG4gICAgICAgIHNlY3VyZTogdXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOicpICYmICghIXByZWZpeCB8fCBzYW1lU2l0ZSA9PT0gJ25vbmUnIHx8ICdzZWN1cmUnIGluIG9wdCksXG4gICAgICAgIHN0b3JlSWQ6IHJlcS5zdG9yZUlkLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhcGlFdmVudHMgPSB7XG4gICAgb25CZWZvcmVTZW5kSGVhZGVyczoge1xuICAgICAgb3B0aW9uczogWydyZXF1ZXN0SGVhZGVycycsICdibG9ja2luZycsIC4uLkVYVFJBX0hFQURFUlNdLFxuICAgICAgLyoqIEBwYXJhbSB7Y2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdEhlYWRlcnNEZXRhaWxzfSBkZXRhaWxzICovXG4gICAgICBsaXN0ZW5lcih7IHJlcXVlc3RIZWFkZXJzOiBoZWFkZXJzLCByZXF1ZXN0SWQgfSkge1xuICAgICAgICAvLyBvbmx5IHRoZSBmaXJzdCBjYWxsIGR1cmluZyBhIHJlZGlyZWN0L2F1dGggY2hhaW4gd2lsbCBoYXZlIFZNLVZlcmlmeSBoZWFkZXJcbiAgICAgICAgY29uc3QgcmVxSWQgPSBoZWFkZXJzLmZpbmQoaXNWbVZlcmlmeSk/LnZhbHVlIHx8IHZlcmlmeVtyZXF1ZXN0SWRdO1xuICAgICAgICBjb25zdCByZXEgPSByZXFJZCAmJiByZXF1ZXN0c1tyZXFJZF07XG4gICAgICAgIGlmIChyZXFJZCAmJiByZXEpIHtcbiAgICAgICAgICB2ZXJpZnlbcmVxdWVzdElkXSA9IHJlcUlkO1xuICAgICAgICAgIHJlcS5jb3JlSWQgPSByZXF1ZXN0SWQ7XG4gICAgICAgICAgaGVhZGVycyA9IChyZXEubm9OYXRpdmVDb29raWUgPyBoZWFkZXJzLmZpbHRlcihpc05vdENvb2tpZSkgOiBoZWFkZXJzKVxuICAgICAgICAgIC5jb25jYXQoaGVhZGVyc1RvSW5qZWN0W3JlcUlkXSB8fCBbXSlcbiAgICAgICAgICAuZmlsdGVyKHJlcS5hbm9ueW1vdXMgPyBpc1NlbmRhYmxlQW5vbiA6IGlzU2VuZGFibGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHJlcXVlc3RIZWFkZXJzOiBoZWFkZXJzIH07XG4gICAgICB9LFxuICAgIH0sXG4gICAgb25IZWFkZXJzUmVjZWl2ZWQ6IHtcbiAgICAgIG9wdGlvbnM6IFsncmVzcG9uc2VIZWFkZXJzJywgJ2Jsb2NraW5nJywgLi4uRVhUUkFfSEVBREVSU10sXG4gICAgICAvKiogQHBhcmFtIHtjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0SGVhZGVyc0RldGFpbHN9IGRldGFpbHMgKi9cbiAgICAgIGxpc3RlbmVyKHsgcmVzcG9uc2VIZWFkZXJzOiBoZWFkZXJzLCByZXF1ZXN0SWQsIHVybCB9KSB7XG4gICAgICAgIGNvbnN0IHJlcSA9IHJlcXVlc3RzW3ZlcmlmeVtyZXF1ZXN0SWRdXTtcbiAgICAgICAgaWYgKHJlcSkge1xuICAgICAgICAgIGlmIChyZXEuYW5vbnltb3VzIHx8IHJlcS5zdG9yZUlkKSB7XG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5maWx0ZXIoaCA9PiAoXG4gICAgICAgICAgICAgICFSRV9TRVRfQ09PS0lFLnRlc3QoaC5uYW1lKVxuICAgICAgICAgICAgICB8fCAhcmVxLnN0b3JlSWRcbiAgICAgICAgICAgICAgfHwgc2V0Q29va2llSW5TdG9yZShoLnZhbHVlLCByZXEsIHVybClcbiAgICAgICAgICAgICkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXEucmVzcG9uc2VIZWFkZXJzID0gaGVhZGVycy5tYXAoZW5jb2RlV2ViUmVxdWVzdEhlYWRlcikuam9pbignJyk7XG4gICAgICAgICAgcmV0dXJuIHsgcmVzcG9uc2VIZWFkZXJzOiBoZWFkZXJzIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgLy8gQ2hyb21lIDc0LTkxIG5lZWRzIGFuIGV4dHJhSGVhZGVycyBsaXN0ZW5lciBhdCB0YWIgbG9hZCBzdGFydCwgaHR0cHM6Ly9jcmJ1Zy5jb20vMTA3NDI4MlxuICAvLyBXZSdyZSBhdHRhY2hpbmcgYSBuby1vcCBpbiBub24tYmxvY2tpbmcgbW9kZSBzbyBpdCdzIHZlcnkgbGlnaHR3ZWlnaHQgYW5kIGZhc3QuXG4gIGlmICh1YS5jaHJvbWUgPj0gNzQgJiYgdWEuY2hyb21lIDw9IDkxKSB7XG4gICAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlU2VuZEhlYWRlcnMuYWRkTGlzdGVuZXIobm9vcCwgYXBpRmlsdGVyLCBbJ2V4dHJhSGVhZGVycyddKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFkZChyZXFJZCwgaGVhZGVycykge1xuICAgICAgLy8gbmVlZCB0byBzZXQgdGhlIGVudHJ5IGV2ZW4gaWYgaXQncyBlbXB0eSBbXSBzbyB0aGF0ICdpZicgY2hlY2sgaW4gZGVsKCkgcnVucyBvbmx5IG9uY2VcbiAgICAgIGhlYWRlcnNUb0luamVjdFtyZXFJZF0gPSBoZWFkZXJzO1xuICAgICAgLy8gbmVlZCB0aGUgbGlzdGVuZXIgdG8gZ2V0IHRoZSByZXF1ZXN0SWRcbiAgICAgIGFwaUV2ZW50czo6Zm9yRWFjaEVudHJ5KChbbmFtZSwgeyBsaXN0ZW5lciwgb3B0aW9ucyB9XSkgPT4ge1xuICAgICAgICBicm93c2VyLndlYlJlcXVlc3RbbmFtZV0uYWRkTGlzdGVuZXIobGlzdGVuZXIsIGFwaUZpbHRlciwgb3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlbChyZXFJZCkge1xuICAgICAgaWYgKHJlcUlkIGluIGhlYWRlcnNUb0luamVjdCkge1xuICAgICAgICBkZWxldGUgaGVhZGVyc1RvSW5qZWN0W3JlcUlkXTtcbiAgICAgICAgaWYgKGlzRW1wdHkoaGVhZGVyc1RvSW5qZWN0KSkge1xuICAgICAgICAgIGFwaUV2ZW50czo6Zm9yRWFjaEVudHJ5KChbbmFtZSwgeyBsaXN0ZW5lciB9XSkgPT4ge1xuICAgICAgICAgICAgYnJvd3Nlci53ZWJSZXF1ZXN0W25hbWVdLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG59KSgpO1xuXG4vKiAxTUIgdGFrZXMgfjIwbXMgdG8gZW5jb2RlL2RlY29kZSBzbyBpdCBkb2Vzbid0IGJsb2NrIHRoZSBwcm9jZXNzIG9mIHRoZSBleHRlbnNpb24gYW5kIHdlYiBwYWdlLFxuICogd2hpY2ggbGV0cyB1cyBhbmQgdGhlbSBiZSByZXNwb25zaXZlIHRvIG90aGVyIGV2ZW50cyBvciB1c2VyIGlucHV0LiAqL1xuY29uc3QgQ0hVTktfU0laRSA9IDFlNjtcblxuYXN5bmMgZnVuY3Rpb24gYmxvYjJjaHVuayhyZXNwb25zZSwgaW5kZXgpIHtcbiAgcmV0dXJuIGJsb2IyYmFzZTY0KHJlc3BvbnNlLCBpbmRleCAqIENIVU5LX1NJWkUsIENIVU5LX1NJWkUpO1xufVxuXG5mdW5jdGlvbiBibG9iMm9iamVjdFVybChyZXNwb25zZSkge1xuICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJlc3BvbnNlKTtcbiAgY2FjaGUucHV0KGB4aHJCbG9iOiR7dXJsfWAsIHNldFRpbWVvdXQoY29tbWFuZHMuUmV2b2tlQmxvYiwgNjBlMywgdXJsKSwgNjFlMyk7XG4gIHJldHVybiB1cmw7XG59XG5cbi8qKiBAcGFyYW0ge1ZNSHR0cFJlcXVlc3R9IHJlcSAqL1xuZnVuY3Rpb24geGhyQ2FsbGJhY2tXcmFwcGVyKHJlcSkge1xuICBsZXQgbGFzdFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgbGV0IGNvbnRlbnRUeXBlO1xuICBsZXQgZGF0YVNpemU7XG4gIGxldCBudW1DaHVua3M7XG4gIGxldCByZXNwb25zZTtcbiAgbGV0IHJlc3BvbnNlVGV4dDtcbiAgbGV0IHJlc3BvbnNlSGVhZGVycztcbiAgbGV0IHNlbnQgPSBmYWxzZTtcbiAgY29uc3QgeyBpZCwgYmxvYmJlZCwgY2h1bmtlZCwgeGhyIH0gPSByZXE7XG4gIC8vIENocm9tZSBlbmNvZGVzIG1lc3NhZ2VzIHRvIFVURjggc28gdGhleSBjYW4gZ3JvdyB1cCB0byA0eCBidXQgNjRNQiBpcyB0aGUgbWVzc2FnZSBzaXplIGxpbWl0XG4gIGNvbnN0IGdldENodW5rID0gYmxvYmJlZCAmJiBibG9iMm9iamVjdFVybCB8fCBjaHVua2VkICYmIGJsb2IyY2h1bms7XG4gIGNvbnN0IGdldFJlc3BvbnNlSGVhZGVycyA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gcmVxLnJlc3BvbnNlSGVhZGVycyB8fCB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7XG4gICAgaWYgKHJlc3BvbnNlSGVhZGVycyAhPT0gaGVhZGVycykge1xuICAgICAgcmVzcG9uc2VIZWFkZXJzID0gaGVhZGVycztcbiAgICAgIHJldHVybiB7IHJlc3BvbnNlSGVhZGVycyB9O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChldnQpID0+IHtcbiAgICBjb25zdCB0eXBlID0gZXZ0LnR5cGU7XG4gICAgaWYgKCFjb250ZW50VHlwZSkge1xuICAgICAgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpIHx8ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgIH1cbiAgICBpZiAoeGhyLnJlc3BvbnNlICE9PSByZXNwb25zZSkge1xuICAgICAgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2U7XG4gICAgICBzZW50ID0gZmFsc2U7XG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICBpZiAocmVzcG9uc2VUZXh0ID09PSByZXNwb25zZSkgcmVzcG9uc2VUZXh0ID0gWydzYW1lJ107XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlnbm9yZSBpZiByZXNwb25zZVRleHQgaXMgdW5yZWFjaGFibGVcbiAgICAgIH1cbiAgICAgIGlmICgoYmxvYmJlZCB8fCBjaHVua2VkKSAmJiByZXNwb25zZSkge1xuICAgICAgICBkYXRhU2l6ZSA9IHJlc3BvbnNlLnNpemU7XG4gICAgICAgIG51bUNodW5rcyA9IGNodW5rZWQgJiYgTWF0aC5jZWlsKGRhdGFTaXplIC8gQ0hVTktfU0laRSkgfHwgMTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkTm90aWZ5ID0gcmVxLmV2ZW50c1RvTm90aWZ5LmluY2x1ZGVzKHR5cGUpO1xuICAgIC8vIG9ubHkgc2VuZCByZXNwb25zZSB3aGVuIFhIUiBpcyBjb21wbGV0ZVxuICAgIGNvbnN0IHNob3VsZFNlbmRSZXNwb25zZSA9IHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHNob3VsZE5vdGlmeSAmJiAhc2VudDtcbiAgICBsYXN0UHJvbWlzZSA9IGxhc3RQcm9taXNlLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgcmVxLmNiKHtcbiAgICAgICAgYmxvYmJlZCxcbiAgICAgICAgY2h1bmtlZCxcbiAgICAgICAgY29udGVudFR5cGUsXG4gICAgICAgIGRhdGFTaXplLFxuICAgICAgICBpZCxcbiAgICAgICAgbnVtQ2h1bmtzLFxuICAgICAgICB0eXBlLFxuICAgICAgICBkYXRhOiBzaG91bGROb3RpZnkgJiYge1xuICAgICAgICAgIGZpbmFsVXJsOiB4aHIucmVzcG9uc2VVUkwsXG4gICAgICAgICAgLi4uZ2V0UmVzcG9uc2VIZWFkZXJzKCksXG4gICAgICAgICAgLi4ub2JqZWN0UGljayh4aHIsIFsncmVhZHlTdGF0ZScsICdzdGF0dXMnLCAnc3RhdHVzVGV4dCddKSxcbiAgICAgICAgICAuLi4oJ2xvYWRlZCcgaW4gZXZ0KSAmJiBvYmplY3RQaWNrKGV2dCwgWydsZW5ndGhDb21wdXRhYmxlJywgJ2xvYWRlZCcsICd0b3RhbCddKSxcbiAgICAgICAgICByZXNwb25zZTogc2hvdWxkU2VuZFJlc3BvbnNlXG4gICAgICAgICAgICA/IG51bUNodW5rcyAmJiBhd2FpdCBnZXRDaHVuayhyZXNwb25zZSwgMCkgfHwgcmVzcG9uc2VcbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICByZXNwb25zZVRleHQ6IHNob3VsZFNlbmRSZXNwb25zZVxuICAgICAgICAgICAgPyByZXNwb25zZVRleHRcbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHNob3VsZFNlbmRSZXNwb25zZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bUNodW5rczsgaSArPSAxKSB7XG4gICAgICAgICAgYXdhaXQgcmVxLmNiKHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgY2h1bms6IHtcbiAgICAgICAgICAgICAgcG9zOiBpICogQ0hVTktfU0laRSxcbiAgICAgICAgICAgICAgZGF0YTogYXdhaXQgZ2V0Q2h1bmsocmVzcG9uc2UsIGkpLFxuICAgICAgICAgICAgICBsYXN0OiBpICsgMSA9PT0gbnVtQ2h1bmtzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdsb2FkZW5kJykge1xuICAgICAgICBjbGVhclJlcXVlc3QocmVxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNTcGVjaWFsSGVhZGVyKGxvd2VySGVhZGVyKSB7XG4gIHJldHVybiBzcGVjaWFsSGVhZGVycy5pbmNsdWRlcyhsb3dlckhlYWRlcilcbiAgICB8fCBsb3dlckhlYWRlci5zdGFydHNXaXRoKCdwcm94eS0nKVxuICAgIHx8IGxvd2VySGVhZGVyLnN0YXJ0c1dpdGgoJ3NlYy0nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQHBhcmFtIHtjaHJvbWUucnVudGltZS5NZXNzYWdlU2VuZGVyIHwgYnJvd3Nlci5ydW50aW1lLk1lc3NhZ2VTZW5kZXJ9IHNyY1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2JcbiAqL1xuYXN5bmMgZnVuY3Rpb24gaHR0cFJlcXVlc3Qob3B0cywgc3JjLCBjYikge1xuICBjb25zdCB7IHRhYiB9ID0gc3JjO1xuICBjb25zdCB7IGluY29nbml0byB9ID0gdGFiO1xuICBjb25zdCB7IGFub255bW91cywgaWQsIG92ZXJyaWRlTWltZVR5cGUsIHhoclR5cGUsIHVybCB9ID0gb3B0cztcbiAgY29uc3QgcmVxID0gcmVxdWVzdHNbaWRdO1xuICBpZiAoIXJlcSB8fCByZXEuY2IpIHJldHVybjtcbiAgcmVxLmNiID0gY2I7XG4gIHJlcS5hbm9ueW1vdXMgPSBhbm9ueW1vdXM7XG4gIGNvbnN0IHsgeGhyIH0gPSByZXE7XG4gIGNvbnN0IHZtSGVhZGVycyA9IFtdO1xuICAvLyBGaXJlZm94IGNhbiBzZW5kIEJsb2IvQXJyYXlCdWZmZXIgZGlyZWN0bHlcbiAgY29uc3QgY2h1bmtlZCA9ICFJU19GSVJFRk9YICYmIGluY29nbml0bztcbiAgY29uc3QgYmxvYmJlZCA9IHhoclR5cGUgJiYgIUlTX0ZJUkVGT1ggJiYgIWluY29nbml0bztcbiAgY29uc3QgW2JvZHksIGNvbnRlbnRUeXBlXSA9IGRlY29kZUJvZHkob3B0cy5kYXRhKTtcbiAgLy8gQ2hyb21lIGNhbid0IGZldGNoIEJsb2IgVVJMIGluIGluY29nbml0byBzbyB3ZSB1c2UgY2h1bmtzXG4gIHJlcS5ibG9iYmVkID0gYmxvYmJlZDtcbiAgcmVxLmNodW5rZWQgPSBjaHVua2VkO1xuICAvLyBGaXJlZm94IGRvZXNuJ3Qgc2VuZCBjb29raWVzLCBodHRwczovL2dpdGh1Yi5jb20vdmlvbGVudG1vbmtleS92aW9sZW50bW9ua2V5L2lzc3Vlcy82MDZcbiAgLy8gQm90aCBDaHJvbWUgJiBGRiBuZWVkIGV4cGxpY2l0IHJvdXRpbmcgb2YgY29va2llcyBpbiBjb250YWluZXJzIG9yIGluY29nbml0b1xuICBsZXQgc2hvdWxkU2VuZENvb2tpZXMgPSAhYW5vbnltb3VzICYmIChpbmNvZ25pdG8gfHwgSVNfRklSRUZPWCk7XG4gIHhoci5vcGVuKG9wdHMubWV0aG9kIHx8ICdHRVQnLCB1cmwsIHRydWUsIG9wdHMudXNlciB8fCAnJywgb3B0cy5wYXNzd29yZCB8fCAnJyk7XG4gIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFZNX1ZFUklGWSwgaWQpO1xuICBpZiAoY29udGVudFR5cGUpIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG4gIG9wdHMuaGVhZGVyczo6Zm9yRWFjaEVudHJ5KChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChpc1NwZWNpYWxIZWFkZXIobG93ZXJOYW1lKSkge1xuICAgICAgdm1IZWFkZXJzLnB1c2goeyBuYW1lLCB2YWx1ZSB9KTtcbiAgICB9IGVsc2UgaWYgKCFsb3dlck5hbWUuc3RhcnRzV2l0aCgndm0tJykpIHtcbiAgICAgIC8vIGBWTS1gIGhlYWRlcnMgYXJlIHJlc2VydmVkXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIGlmIChsb3dlck5hbWUgPT09ICdjb29raWUnKSB7XG4gICAgICBzaG91bGRTZW5kQ29va2llcyA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIHhoci5yZXNwb25zZVR5cGUgPSAoY2h1bmtlZCB8fCBibG9iYmVkKSAmJiAnYmxvYicgfHwgeGhyVHlwZSB8fCAndGV4dCc7XG4gIHhoci50aW1lb3V0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMHg3RkZGX0ZGRkYsIG9wdHMudGltZW91dCkpIHx8IDA7XG4gIGlmIChvdmVycmlkZU1pbWVUeXBlKSB4aHIub3ZlcnJpZGVNaW1lVHlwZShvdmVycmlkZU1pbWVUeXBlKTtcbiAgaWYgKHNob3VsZFNlbmRDb29raWVzKSB7XG4gICAgcmVxLm5vTmF0aXZlQ29va2llID0gdHJ1ZTtcbiAgICBmb3IgKGNvbnN0IHN0b3JlIG9mIGF3YWl0IGJyb3dzZXIuY29va2llcy5nZXRBbGxDb29raWVTdG9yZXMoKSkge1xuICAgICAgaWYgKHN0b3JlLnRhYklkcy5pbmNsdWRlcyh0YWIuaWQpKSB7XG4gICAgICAgIGlmIChJU19GSVJFRk9YID8gc3RvcmUuaWQgIT09ICdmaXJlZm94LWRlZmF1bHQnIDogc3RvcmUuaWQgIT09ICcwJykge1xuICAgICAgICAgIC8qIENvb2tpZSByb3V0aW5nLiBGb3IgdGhlIG1haW4gc3RvcmUgd2UgcmVseSBvbiB0aGUgYnJvd3Nlci5cbiAgICAgICAgICAgKiBUaGUgaWRzIGFyZSBoYXJkLWNvZGVkIGFzIGBzdG9yZXNgIG1heSBvbWl0IHRoZSBtYWluIHN0b3JlIGlmIG5vIHN1Y2ggdGFicyBhcmUgb3Blbi4gKi9cbiAgICAgICAgICByZXEuc3RvcmVJZCA9IHN0b3JlLmlkO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICBjb25zdCBjb29raWVzID0gKGF3YWl0IGJyb3dzZXIuY29va2llcy5nZXRBbGwoe1xuICAgICAgdXJsLFxuICAgICAgc3RvcmVJZDogcmVxLnN0b3JlSWQsXG4gICAgICAuLi51YS5maXJlZm94ID49IDU5ICYmIHsgZmlyc3RQYXJ0eURvbWFpbjogbnVsbCB9LFxuICAgIH0pKS5maWx0ZXIoYyA9PiBjLnNlc3Npb24gfHwgYy5leHBpcmF0aW9uRGF0ZSA+IG5vdyk7IC8vIEZGIHJlcG9ydHMgZXhwaXJlZCBjb29raWVzIVxuICAgIGlmIChjb29raWVzLmxlbmd0aCkge1xuICAgICAgdm1IZWFkZXJzLnB1c2goe1xuICAgICAgICBuYW1lOiAnY29va2llJyxcbiAgICAgICAgdmFsdWU6IGNvb2tpZXMubWFwKGMgPT4gYCR7Yy5uYW1lfT0ke2MudmFsdWV9O2ApLmpvaW4oJyAnKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBIZWFkZXJJbmplY3Rvci5hZGQoaWQsIHZtSGVhZGVycyk7XG4gIGNvbnN0IGNhbGxiYWNrID0geGhyQ2FsbGJhY2tXcmFwcGVyKHJlcSk7XG4gIHJlcS5ldmVudHNUb05vdGlmeS5mb3JFYWNoKGV2dCA9PiB7IHhocltgb24ke2V2dH1gXSA9IGNhbGxiYWNrOyB9KTtcbiAgeGhyLm9ubG9hZGVuZCA9IGNhbGxiYWNrOyAvLyBhbHdheXMgc2VuZCBpdCBmb3IgdGhlIGludGVybmFsIGNsZWFudXBcbiAgeGhyLnNlbmQoYm9keSk7XG59XG5cbi8qKiBAcGFyYW0ge1ZNSHR0cFJlcXVlc3R9IHJlcSAqL1xuZnVuY3Rpb24gY2xlYXJSZXF1ZXN0KHJlcSkge1xuICBpZiAocmVxLmNvcmVJZCkgZGVsZXRlIHZlcmlmeVtyZXEuY29yZUlkXTtcbiAgZGVsZXRlIHJlcXVlc3RzW3JlcS5pZF07XG4gIGRlbGV0ZSAodGFiUmVxdWVzdHNbcmVxLnRhYklkXSB8fCB7fSlbcmVxLmlkXTtcbiAgSGVhZGVySW5qZWN0b3IuZGVsKHJlcS5pZCk7XG59XG5cbi8qKiBQb2x5ZmlsbCBmb3IgQ2hyb21lJ3MgaW5hYmlsaXR5IHRvIHNlbmQgY29tcGxleCB0eXBlcyBvdmVyIGV4dGVuc2lvbiBtZXNzYWdpbmcgKi9cbmZ1bmN0aW9uIGRlY29kZUJvZHkoW2JvZHksIHR5cGUsIHdhc0Jsb2JdKSB7XG4gIGlmICh0eXBlID09PSAncXVlcnknKSB7XG4gICAgdHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICB9IGVsc2UgaWYgKHR5cGUpIHtcbiAgICAvLyA1eCB0aW1lcyBmYXN0ZXIgdGhhbiBmZXRjaCgpIHdoaWNoIHdhc3RlcyB0aW1lIG9uIGludGVyLXByb2Nlc3MgY29tbXVuaWNhdGlvblxuICAgIGNvbnN0IHJlcyA9IHN0cmluZzJ1aW50OGFycmF5KGF0b2IoYm9keS5zbGljZShib2R5LmluZGV4T2YoJywnKSArIDEpKSk7XG4gICAgaWYgKCF3YXNCbG9iKSB7XG4gICAgICB0eXBlID0gYm9keS5tYXRjaCgvXmRhdGE6KC4rPyk7YmFzZTY0LylbMV0ucmVwbGFjZSgvKGJvdW5kYXJ5PSlbXjtdKy8sXG4gICAgICAgIC8vIHVzaW5nIGEgZnVuY3Rpb24gc28gaXQgcnVucyBvbmx5IGlmIFwiYm91bmRhcnlcIiB3YXMgZm91bmRcbiAgICAgICAgKF8sIHAxKSA9PiBwMSArIFN0cmluZy5mcm9tQ2hhckNvZGUoLi4ucmVzLnNsaWNlKDIsIHJlcy5pbmRleE9mKDEzKSkpKTtcbiAgICB9XG4gICAgYm9keSA9IHJlcztcbiAgfVxuICByZXR1cm4gW2JvZHksIHR5cGVdO1xufVxuXG4vLyBXYXRjaCBVUkwgcmVkaXJlY3RzXG4vLyBicm93c2VyLndlYlJlcXVlc3Qub25CZWZvcmVSZWRpcmVjdC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcbi8vICAgY29uc3QgcmVxSWQgPSB2ZXJpZnlbZGV0YWlscy5yZXF1ZXN0SWRdO1xuLy8gICBpZiAocmVxSWQpIHtcbi8vICAgICBjb25zdCByZXEgPSByZXF1ZXN0c1tyZXFJZF07XG4vLyAgICAgaWYgKHJlcSkgcmVxLmZpbmFsVXJsID0gZGV0YWlscy5yZWRpcmVjdFVybDtcbi8vICAgfVxuLy8gfSwge1xuLy8gICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbi8vICAgdHlwZXM6IFsneG1saHR0cHJlcXVlc3QnXSxcbi8vIH0pO1xuXG4vLyB0YXNrcyBhcmUgbm90IG5lY2Vzc2FyeSBub3csIHR1cm5lZCBvZmZcbi8vIFN0b3AgcmVkaXJlY3RzXG4vLyBicm93c2VyLndlYlJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWQuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XG4vLyAgIGNvbnN0IHRhc2sgPSB0YXNrc1tkZXRhaWxzLnJlcXVlc3RJZF07XG4vLyAgIGlmICh0YXNrKSB7XG4vLyAgICAgZGVsZXRlIHRhc2tzW2RldGFpbHMucmVxdWVzdElkXTtcbi8vICAgICBpZiAodGFzayA9PT0gJ0dldC1Mb2NhdGlvbicgJiYgWzMwMSwgMzAyLCAzMDNdLmluY2x1ZGVzKGRldGFpbHMuc3RhdHVzQ29kZSkpIHtcbi8vICAgICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZGV0YWlscy5yZXNwb25zZUhlYWRlcnMuZmluZChcbi8vICAgICAgICAgaGVhZGVyID0+IGhlYWRlci5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsb2NhdGlvbicpO1xuLy8gICAgICAgY29uc3QgYmFzZTY0ID0gbG9jYXRpb25IZWFkZXIgJiYgbG9jYXRpb25IZWFkZXIudmFsdWU7XG4vLyAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICByZWRpcmVjdFVybDogYGRhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCR7YmFzZTY0IHx8ICcnfWAsXG4vLyAgICAgICB9O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfSwge1xuLy8gICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbi8vICAgdHlwZXM6IFsneG1saHR0cHJlcXVlc3QnXSxcbi8vIH0sIFsnYmxvY2tpbmcnLCAncmVzcG9uc2VIZWFkZXJzJ10pO1xuLy8gYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQ29tcGxldGVkLmFkZExpc3RlbmVyKGRldGFpbHMgPT4ge1xuLy8gICBkZWxldGUgdGFza3NbZGV0YWlscy5yZXF1ZXN0SWRdO1xuLy8gfSwge1xuLy8gICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbi8vICAgdHlwZXM6IFsneG1saHR0cHJlcXVlc3QnXSxcbi8vIH0pO1xuLy8gYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uRXJyb3JPY2N1cnJlZC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcbi8vICAgZGVsZXRlIHRhc2tzW2RldGFpbHMucmVxdWVzdElkXTtcbi8vIH0sIHtcbi8vICAgdXJsczogWyc8YWxsX3VybHM+J10sXG4vLyAgIHR5cGVzOiBbJ3htbGh0dHByZXF1ZXN0J10sXG4vLyB9KTtcblxuYXN5bmMgZnVuY3Rpb24gY29uZmlybUluc3RhbGwoeyBjb2RlLCBmcm9tLCB1cmwgfSwgeyB0YWIgPSB7fSB9KSB7XG4gIGlmICghY29kZSkgY29kZSA9IChhd2FpdCByZXF1ZXN0KHVybCkpLmRhdGE7XG4gIC8vIFRPRE86IGRpc3BsYXkgdGhlIGVycm9yIGluIFVJXG4gIGlmICghaXNVc2VyU2NyaXB0KGNvZGUpKSB0aHJvdyBpMThuKCdtc2dJbnZhbGlkU2NyaXB0Jyk7XG4gIGNhY2hlLnB1dCh1cmwsIGNvZGUsIDMwMDApO1xuICBjb25zdCBjb25maXJtS2V5ID0gZ2V0VW5pcUlkKCk7XG4gIGNvbnN0IHsgYWN0aXZlLCBpZDogdGFiSWQsIGluY29nbml0byB9ID0gdGFiO1xuICAvLyBOb3QgdGVzdGluZyB0YWIucGVuZGluZ1VybCBiZWNhdXNlIGl0IHdpbGwgYmUgYWx3YXlzIGVxdWFsIHRvIGB1cmxgXG4gIGNvbnN0IGNhblJlcGxhY2VDdXJUYWIgPSAoIWluY29nbml0byB8fCBJU19GSVJFRk9YKSAmJiAoXG4gICAgdXJsID09PSBmcm9tXG4gICAgfHwgY2FjaGUuaGFzKGBhdXRvY2xvc2U6JHt0YWJJZH1gKVxuICAgIHx8IC9eKGNocm9tZTpcXC9cXC8obmV3dGFifHN0YXJ0cGFnZSlcXC98YWJvdXQ6KGhvbWV8bmV3dGFiKSkkLy50ZXN0KGZyb20pKTtcbiAgLyoqIEBuYW1lc3BhY2UgVk1Db25maXJtQ2FjaGUgKi9cbiAgY2FjaGUucHV0KGBjb25maXJtLSR7Y29uZmlybUtleX1gLCB7IGluY29nbml0bywgdXJsLCBmcm9tLCB0YWJJZCwgZmY6IHVhLmZpcmVmb3ggfSk7XG4gIGNvbnN0IGNvbmZpcm1VcmwgPSBDT05GSVJNX1VSTF9CQVNFICsgY29uZmlybUtleTtcbiAgY29uc3QgeyB3aW5kb3dJZCB9ID0gY2FuUmVwbGFjZUN1clRhYlxuICAgID8gYXdhaXQgYnJvd3Nlci50YWJzLnVwZGF0ZSh0YWJJZCwgeyB1cmw6IGNvbmZpcm1VcmwgfSlcbiAgICA6IGF3YWl0IGNvbW1hbmRzLlRhYk9wZW4oeyB1cmw6IGNvbmZpcm1VcmwsIGFjdGl2ZTogISFhY3RpdmUgfSwgeyB0YWIgfSk7XG4gIGlmIChhY3RpdmUgJiYgd2luZG93SWQgIT09IHRhYi53aW5kb3dJZCkge1xuICAgIGF3YWl0IGJyb3dzZXIud2luZG93cy51cGRhdGUod2luZG93SWQsIHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgfVxufVxuXG5jb25zdCB3aGl0ZWxpc3RSZSA9IG5ldyBSZWdFeHAoYF5odHRwczovLygke1xuICBbXG4gICAgJ2dyZWFzeWZvcmtcXFxcLm9yZy9zY3JpcHRzLyUvY29kZS8nLFxuICAgICdvcGVudXNlcmpzXFxcXC5vcmcvaW5zdGFsbC8lLycsXG4gICAgJ2dpdGh1YlxcXFwuY29tLyUvJS9yYXcvJS8nLFxuICAgICdnaXRodWJcXFxcLmNvbS8lLyUvcmVsZWFzZXMvJS9kb3dubG9hZC8nLFxuICAgICdyYXdcXFxcLmdpdGh1YnVzZXJjb250ZW50XFxcXC5jb20oLyUpezN9LycsXG4gICAgJ2dpc3RcXFxcLmdpdGh1YlxcXFwuY29tLy4qPy8nLFxuICBdLmpvaW4oJ3wnKVxufSklP1xcXFwudXNlclxcXFwuanMoWz8jXXwkKWAucmVwbGFjZSgvJS9nLCAnW14vXSonKSk7XG5cbmNvbnN0IGJsYWNrbGlzdFJlID0gbmV3IFJlZ0V4cChgXmh0dHBzOi8vKCR7XG4gIFtcbiAgICAnKGdpc3RcXFxcLik/Z2l0aHViXFxcXC5jb20nLFxuICAgICdncmVhc3lmb3JrXFxcXC5vcmcnLFxuICAgICdvcGVudXNlcmpzXFxcXC5vcmcnLFxuICBdLmpvaW4oJ3wnKVxufSkvYCk7XG5cbmNvbnN0IHJlc29sdmVWaXJ0dWFsVXJsID0gdXJsID0+IChcbiAgYCR7ZXh0ZW5zaW9uUm9vdH1vcHRpb25zL2luZGV4Lmh0bWwjc2NyaXB0cy8keyt1cmwuc3BsaXQoJyMnKVsxXX1gXG4pO1xuLy8gRkYgY2FuJ3QgaW50ZXJjZXB0IHZpcnR1YWwgLnVzZXIuanMgVVJMIHZpYSB3ZWJSZXF1ZXN0LCBzbyB3ZSByZWRpcmVjdCBpdCBleHBsaWNpdGx5XG5jb25zdCB2aXJ0dWFsVXJsUmUgPSBJU19GSVJFRk9YICYmIG5ldyBSZWdFeHAoKFxuICBgXih2aWV3LXNvdXJjZTopPygke2V4dGVuc2lvblJvb3QucmVwbGFjZSgnOi8vJywgJyQmKT8nKX1bXi9dKlxcXFwudXNlclxcXFwuanMjXFxcXGQrYFxuKSk7XG5jb25zdCBtYXliZVJlZGlyZWN0VmlydHVhbFVybEZGID0gdmlydHVhbFVybFJlICYmICgodGFiSWQsIHNyYykgPT4ge1xuICBpZiAodmlydHVhbFVybFJlLnRlc3Qoc3JjKSkge1xuICAgIGJyb3dzZXIudGFicy51cGRhdGUodGFiSWQsIHsgdXJsOiByZXNvbHZlVmlydHVhbFVybChzcmMpIH0pO1xuICB9XG59KTtcbmlmICh2aXJ0dWFsVXJsUmUpIHtcbiAgY29uc3QgbGlzdGVuZXIgPSAodGFiSWQsIHsgdXJsIH0pID0+IHVybCAmJiBtYXliZVJlZGlyZWN0VmlydHVhbFVybEZGKHRhYklkLCB1cmwpO1xuICBjb25zdCBhcGlFdmVudCA9IGJyb3dzZXIudGFicy5vblVwZGF0ZWQ7XG4gIGNvbnN0IGFkZExpc3RlbmVyID0gYXBpRXZlbnQuYWRkTGlzdGVuZXIuYmluZChhcGlFdmVudCwgbGlzdGVuZXIpO1xuICB0cnkgeyBhZGRMaXN0ZW5lcih7IHByb3BlcnRpZXM6IFsndXJsJ10gfSk7IH0gY2F0Y2ggKGUpIHsgYWRkTGlzdGVuZXIoKTsgfVxufVxuXG5icm93c2VyLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcbiAgY29uc3QgeyBpZCwgdGl0bGUsIHVybCB9ID0gdGFiO1xuICAvKiBEZXRlcm1pbmluZyBpZiB0aGlzIHRhYiBjYW4gYmUgYXV0by1jbG9zZWQgKHJlcGxhY2VkLCBhY3R1YWxseSkuXG4gICAgIEZGPj02OCBhbGxvd3MgcmVhZGluZyBmaWxlOiBVUkwgb25seSBpbiB0aGUgdGFiJ3MgY29udGVudCBzY3JpcHQgc28gdGhlIHRhYiBtdXN0IHN0YXkgb3Blbi4gKi9cbiAgaWYgKCghdXJsLnN0YXJ0c1dpdGgoJ2ZpbGU6JykgfHwgdWEuZmlyZWZveCA8IDY4KVxuICAgICAgJiYgL1xcLnVzZXJcXC5qcyhbPyNdfCQpLy50ZXN0KHRhYi5wZW5kaW5nVXJsIHx8IHVybCkpIHtcbiAgICBjYWNoZS5wdXQoYGF1dG9jbG9zZToke2lkfWAsIHRydWUsIDEwZTMpO1xuICB9XG4gIGlmICh2aXJ0dWFsVXJsUmUgJiYgdXJsID09PSAnYWJvdXQ6YmxhbmsnKSB7XG4gICAgbWF5YmVSZWRpcmVjdFZpcnR1YWxVcmxGRihpZCwgdGl0bGUpO1xuICB9XG59KTtcblxuYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcigocmVxKSA9PiB7XG4gIGNvbnN0IHsgbWV0aG9kLCB0YWJJZCwgdXJsIH0gPSByZXE7XG4gIGlmIChtZXRob2QgIT09ICdHRVQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIG9wZW4gYSByZWFsIFVSTCBmb3Igc2ltcGxpZmllZCB1c2Vyc2NyaXB0IFVSTCBsaXN0ZWQgaW4gZGV2dG9vbHMgb2YgdGhlIHdlYiBwYWdlXG4gIGlmICh1cmwuc3RhcnRzV2l0aChleHRlbnNpb25Sb290KSkge1xuICAgIHJldHVybiB7IHJlZGlyZWN0VXJsOiByZXNvbHZlVmlydHVhbFVybCh1cmwpIH07XG4gIH1cbiAgaWYgKCFjYWNoZS5oYXMoYGJ5cGFzczoke3VybH1gKVxuICAmJiAoIWJsYWNrbGlzdFJlLnRlc3QodXJsKSB8fCB3aGl0ZWxpc3RSZS50ZXN0KHVybCkpKSB7XG4gICAgbWF5YmVJbnN0YWxsVXNlckpzKHRhYklkLCB1cmwpO1xuICAgIHJldHVybiB7IHJlZGlyZWN0VXJsOiAnamF2YXNjcmlwdDp2b2lkIDAnIH07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICB9XG59LCB7XG4gIHVybHM6IFtcbiAgICAvLyAxLiAqOi8vIGNvbXByaXNlcyBvbmx5IGh0dHAvaHR0cHNcbiAgICAvLyAyLiB0aGUgQVBJIGlnbm9yZXMgI2hhc2ggcGFydFxuICAgIC8vIDMuIEZpcmVmb3g6IG9uQmVmb3JlUmVxdWVzdCBkb2VzIG5vdCB3b3JrIHdpdGggZmlsZTovLyBvciBtb3otZXh0ZW5zaW9uOi8vXG4gICAgJyo6Ly8qLyoudXNlci5qcycsXG4gICAgJyo6Ly8qLyoudXNlci5qcz8qJyxcbiAgICAnZmlsZTovLyovKi51c2VyLmpzJyxcbiAgICAnZmlsZTovLyovKi51c2VyLmpzPyonLFxuICAgIGAke2V4dGVuc2lvblJvb3R9Ki51c2VyLmpzYCxcbiAgXSxcbiAgdHlwZXM6IFsnbWFpbl9mcmFtZSddLFxufSwgWydibG9ja2luZyddKTtcblxuYXN5bmMgZnVuY3Rpb24gbWF5YmVJbnN0YWxsVXNlckpzKHRhYklkLCB1cmwpIHtcbiAgY29uc3QgeyBkYXRhOiBjb2RlIH0gPSBhd2FpdCByZXF1ZXN0KHVybCkuY2F0Y2gobm9vcCkgfHwge307XG4gIGlmIChjb2RlICYmIHBhcnNlTWV0YShjb2RlKS5uYW1lKSB7XG4gICAgY29uc3QgdGFiID0gdGFiSWQgPj0gMCAmJiBhd2FpdCBicm93c2VyLnRhYnMuZ2V0KHRhYklkKSB8fCB7fTtcbiAgICBjb25maXJtSW5zdGFsbCh7IGNvZGUsIHVybCwgZnJvbTogdGFiLnVybCB9LCB7IHRhYiB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYWNoZS5wdXQoYGJ5cGFzczoke3VybH1gLCB0cnVlLCAxMGUzKTtcbiAgICBpZiAodGFiSWQgPj0gMCkgYnJvd3Nlci50YWJzLnVwZGF0ZSh0YWJJZCwgeyB1cmwgfSk7XG4gIH1cbn1cblxuLy8gSW4gRmlyZWZveCB3aXRoIHByb2R1Y3Rpb24gY29kZSBvZiBWaW9sZW50bW9ua2V5LCBzY3JpcHRzIGNhbiBiZSBpbmplY3RlZCBiZWZvcmUgYHRhYnMub25VcGRhdGVkYCBpcyBmaXJlZC5cbi8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Zpb2xlbnRtb25rZXkvdmlvbGVudG1vbmtleS9pc3N1ZXMvMTI1NVxuXG5icm93c2VyLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKCh0YWJJZCkgPT4ge1xuICBjbGVhclJlcXVlc3RzQnlUYWJJZCh0YWJJZCk7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUmVxdWVzdHNCeVRhYklkKHRhYklkKSB7XG4gIGNvbnN0IHNldCA9IHRhYlJlcXVlc3RzW3RhYklkXTtcbiAgaWYgKHNldCkge1xuICAgIGRlbGV0ZSB0YWJSZXF1ZXN0c1t0YWJJZF07XG4gICAgc2V0Ojpmb3JFYWNoRW50cnkoKFtpZF0pID0+IGNvbW1hbmRzLkFib3J0UmVxdWVzdChpZCkpO1xuICB9XG59XG5cbi8qKlxuICogSW1pdGF0aW5nIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9nZXRBbGxSZXNwb25zZUhlYWRlcnNcbiAqIFBlciB0aGUgc3BlY2lmaWNhdGlvbiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCB0aGUgaGVhZGVyIG5hbWUgaXMgd2l0aGluIEFTQ0lJLFxuICogYnV0IHdlJ2xsIHRyeSBlbmNvZGluZyBpdCwgaWYgbmVjZXNzYXJ5LCB0byBoYW5kbGUgaW52YWxpZCBzZXJ2ZXIgcmVzcG9uc2VzLlxuICovXG5mdW5jdGlvbiBlbmNvZGVXZWJSZXF1ZXN0SGVhZGVyKHsgbmFtZSwgdmFsdWUsIGJpbmFyeVZhbHVlIH0pIHtcbiAgcmV0dXJuIGAke3N0cmluZzJieXRlU3RyaW5nKG5hbWUpfTogJHtcbiAgICBiaW5hcnlWYWx1ZVxuICAgICAgPyBidWZmZXIyc3RyaW5nKGJpbmFyeVZhbHVlKVxuICAgICAgOiBzdHJpbmcyYnl0ZVN0cmluZyh2YWx1ZSlcbiAgfVxcclxcbmA7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIFVURjgtZW5jb2RlZCBiaW5hcnkgc3RyaW5nIGkuZS4gb25lIGJ5dGUgcGVyIGNoYXJhY3Rlci5cbiAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHN0cmluZyBpbiBjYXNlIGl0IHdhcyBhbHJlYWR5IHdpdGhpbiBBU0NJSS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nMmJ5dGVTdHJpbmcoc3RyKSB7XG4gIGlmICghL1tcXHUwMDgwLVxcdUZGRkZdLy50ZXN0KHN0cikpIHJldHVybiBzdHI7XG4gIGlmICghZW5jb2RlcikgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICByZXR1cm4gYnVmZmVyMnN0cmluZyhlbmNvZGVyLmVuY29kZShzdHIpKTtcbn1cblxuLyoqIEB0eXBlZGVmIHt7XG4gIGFub255bW91czogYm9vbGVhblxuICBibG9iYmVkOiBib29sZWFuXG4gIGNiOiBmdW5jdGlvbihPYmplY3QpXG4gIGNodW5rZWQ6IGJvb2xlYW5cbiAgY29yZUlkOiBudW1iZXJcbiAgZXZlbnRzVG9Ob3RpZnk6IHN0cmluZ1tdXG4gIGlkOiBudW1iZXJcbiAgbm9OYXRpdmVDb29raWU6IGJvb2xlYW5cbiAgcmVzcG9uc2VIZWFkZXJzOiBzdHJpbmdcbiAgc3RvcmVJZDogc3RyaW5nXG4gIHRhYklkOiBudW1iZXJcbiAgeGhyOiBYTUxIdHRwUmVxdWVzdFxufX0gVk1IdHRwUmVxdWVzdCAqL1xuIiwiaW1wb3J0IHsgZ2V0VW5pcUlkLCBlbmNvZGVGaWxlbmFtZSB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IE1FVEFCTE9DS19SRSB9IGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5pbXBvcnQgeyBtYXBFbnRyeSB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyBnZXRPcHRpb24gfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKiBAcmV0dXJuIHtzdHJpbmd9ICovXG4gIENhY2hlTmV3U2NyaXB0KGRhdGEpIHtcbiAgICBjb25zdCBpZCA9IGdldFVuaXFJZCgpO1xuICAgIGNhY2hlLnB1dChgbmV3LSR7aWR9YCwgbmV3U2NyaXB0KGRhdGEpKTtcbiAgICByZXR1cm4gaWQ7XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtWTVNjcmlwdH0gKi9cbiAgTmV3U2NyaXB0KGlkKSB7XG4gICAgcmV0dXJuIGlkICYmIGNhY2hlLmdldChgbmV3LSR7aWR9YCkgfHwgbmV3U2NyaXB0KCk7XG4gIH0sXG4gIFBhcnNlTWV0YTogcGFyc2VNZXRhLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VzZXJTY3JpcHQodGV4dCkge1xuICBpZiAoL15cXHMqPC8udGVzdCh0ZXh0KSkgcmV0dXJuIGZhbHNlOyAvLyBIVE1MXG4gIGlmICh0ZXh0LmluZGV4T2YoJy8vID09VXNlclNjcmlwdD09JykgPCAwKSByZXR1cm4gZmFsc2U7IC8vIExhY2sgb2YgbWV0YSBibG9ja1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgYXJyYXlUeXBlID0ge1xuICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgdHJhbnNmb3JtOiAocmVzLCB2YWwpID0+IHtcbiAgICByZXMucHVzaCh2YWwpO1xuICAgIHJldHVybiByZXM7XG4gIH0sXG59O1xuY29uc3QgZGVmYXVsdFR5cGUgPSB7XG4gIGRlZmF1bHQ6ICgpID0+IG51bGwsXG4gIHRyYW5zZm9ybTogKHJlcywgdmFsKSA9PiAocmVzID09IG51bGwgPyB2YWwgOiByZXMpLFxufTtcbmNvbnN0IG1ldGFUeXBlcyA9IHtcbiAgaW5jbHVkZTogYXJyYXlUeXBlLFxuICBleGNsdWRlOiBhcnJheVR5cGUsXG4gIG1hdGNoOiBhcnJheVR5cGUsXG4gIGV4Y2x1ZGVNYXRjaDogYXJyYXlUeXBlLFxuICByZXF1aXJlOiBhcnJheVR5cGUsXG4gIHJlc291cmNlOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKHt9KSxcbiAgICB0cmFuc2Zvcm06IChyZXMsIHZhbCkgPT4ge1xuICAgICAgY29uc3QgcGFpciA9IHZhbC5tYXRjaCgvXihcXHdcXFMqKVxccysoLiopLyk7XG4gICAgICBpZiAocGFpcikgcmVzW3BhaXJbMV1dID0gcGFpclsyXTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSxcbiAgfSxcbiAgZ3JhbnQ6IGFycmF5VHlwZSxcbiAgbm9mcmFtZXM6IHtcbiAgICBkZWZhdWx0OiAoKSA9PiBmYWxzZSxcbiAgICB0cmFuc2Zvcm06ICgpID0+IHRydWUsXG4gIH0sXG59O1xuY29uc3QgbWV0YU9wdGlvbmFsVHlwZXMgPSB7XG4gIGFudGlmZWF0dXJlOiBhcnJheVR5cGUsXG4gIGNvbXBhdGlibGU6IGFycmF5VHlwZSxcbiAgY29ubmVjdDogYXJyYXlUeXBlLFxufTtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1ldGEoY29kZSkge1xuICAvLyBpbml0aWFsaXplIG1ldGFcbiAgY29uc3QgbWV0YSA9IG1ldGFUeXBlczo6bWFwRW50cnkoKFssIHZhbHVlXSkgPT4gdmFsdWUuZGVmYXVsdCgpKTtcbiAgY29uc3QgbWV0YUJvZHkgPSBjb2RlLm1hdGNoKE1FVEFCTE9DS19SRSlbMV0gfHwgJyc7XG4gIG1ldGFCb2R5LnJlcGxhY2UoLyg/Ol58XFxuKVxccypcXC9cXC9cXHgyMChAXFxTKykoLiopL2csIChfbWF0Y2gsIHJhd0tleSwgcmF3VmFsdWUpID0+IHtcbiAgICBjb25zdCBba2V5TmFtZSwgbG9jYWxlXSA9IHJhd0tleS5zbGljZSgxKS5zcGxpdCgnOicpO1xuICAgIGNvbnN0IGNhbWVsS2V5ID0ga2V5TmFtZS5yZXBsYWNlKC9bLV9dKFxcdykvZywgKG0sIGcpID0+IGcudG9VcHBlckNhc2UoKSk7XG4gICAgY29uc3Qga2V5ID0gbG9jYWxlID8gYCR7Y2FtZWxLZXl9OiR7bG9jYWxlLnRvTG93ZXJDYXNlKCl9YCA6IGNhbWVsS2V5O1xuICAgIGNvbnN0IHZhbCA9IHJhd1ZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBtZXRhVHlwZSA9IG1ldGFUeXBlc1trZXldIHx8IG1ldGFPcHRpb25hbFR5cGVzW2tleV0gfHwgZGVmYXVsdFR5cGU7XG4gICAgbGV0IG9sZFZhbHVlID0gbWV0YVtrZXldO1xuICAgIGlmICh0eXBlb2Ygb2xkVmFsdWUgPT09ICd1bmRlZmluZWQnKSBvbGRWYWx1ZSA9IG1ldGFUeXBlLmRlZmF1bHQoKTtcbiAgICBtZXRhW2tleV0gPSBtZXRhVHlwZS50cmFuc2Zvcm0ob2xkVmFsdWUsIHZhbCk7XG4gIH0pO1xuICBtZXRhLnJlc291cmNlcyA9IG1ldGEucmVzb3VyY2U7XG4gIGRlbGV0ZSBtZXRhLnJlc291cmNlO1xuICAvLyBAaG9tZXBhZ2VVUkw6IGNvbXBhdGlibGUgd2l0aCBAaG9tZXBhZ2VcbiAgaWYgKCFtZXRhLmhvbWVwYWdlVVJMICYmIG1ldGEuaG9tZXBhZ2UpIG1ldGEuaG9tZXBhZ2VVUkwgPSBtZXRhLmhvbWVwYWdlO1xuICByZXR1cm4gbWV0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRDdXN0b20oKSB7XG4gIHJldHVybiB7XG4gICAgb3JpZ0luY2x1ZGU6IHRydWUsXG4gICAgb3JpZ0V4Y2x1ZGU6IHRydWUsXG4gICAgb3JpZ01hdGNoOiB0cnVlLFxuICAgIG9yaWdFeGNsdWRlTWF0Y2g6IHRydWUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdTY3JpcHQoZGF0YSkge1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICB1cmw6ICcqOi8vKi8qJyxcbiAgICBuYW1lOiAnJyxcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgLi4uZGF0YSxcbiAgfTtcbiAgY29uc3QgY29kZSA9IGdldE9wdGlvbignc2NyaXB0VGVtcGxhdGUnKVxuICAucmVwbGFjZSgve3soXFx3Kyl9fS9nLCAoc3RyLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtuYW1lXTtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHN0ciA6IHZhbHVlO1xuICB9KTtcbiAgY29uc3Qgc2NyaXB0ID0ge1xuICAgIGN1c3RvbTogZ2V0RGVmYXVsdEN1c3RvbSgpLFxuICAgIGNvbmZpZzoge1xuICAgICAgZW5hYmxlZDogMSxcbiAgICAgIHNob3VsZFVwZGF0ZTogMSxcbiAgICB9LFxuICAgIG1ldGE6IHBhcnNlTWV0YShjb2RlKSxcbiAgICBwcm9wczoge30sXG4gIH07XG4gIHJldHVybiB7IHNjcmlwdCwgY29kZSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZVVSSShzY3JpcHQpIHtcbiAgY29uc3QgbnMgPSBzY3JpcHQubWV0YS5uYW1lc3BhY2UgfHwgJyc7XG4gIGNvbnN0IG5hbWUgPSBzY3JpcHQubWV0YS5uYW1lIHx8ICcnO1xuICBsZXQgbmFtZVVSSSA9IGVuY29kZUZpbGVuYW1lKGAke25zfVxcbiR7bmFtZX1cXG5gKTtcbiAgaWYgKCFucyAmJiAhbmFtZSkgbmFtZVVSSSArPSBzY3JpcHQucHJvcHMuaWQgfHwgJyc7XG4gIHJldHVybiBuYW1lVVJJO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRRdWVyeShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJicpLnJlZHVjZSgoZGF0YSwgcGllY2UpID0+IHtcbiAgICBjb25zdCBba2V5LCB2YWxdID0gcGllY2Uuc3BsaXQoJz0nKS5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KTtcbiAgICBkYXRhW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sIHt9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGR1bXBRdWVyeShkaWN0KSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhkaWN0KVxuICAubWFwKGtleVZhbCA9PiBrZXlWYWwubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignPScpKVxuICAuam9pbignJicpO1xufVxuIiwiaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJyMvY29tbW9uL3N0b3JhZ2UnO1xuXG4vKiogQHR5cGUgeyBmdW5jdGlvbih1cmwsIG9wdGlvbnMsIGNoZWNrKTogUHJvbWlzZTx2b2lkPiB9IG9yIHRocm93cyBvbiBlcnJvciAqL1xuc3RvcmFnZS5jYWNoZS5mZXRjaCA9IGNhY2hlT3JGZXRjaCh7XG4gIGluaXQob3B0aW9ucykge1xuICAgIHJldHVybiB7IC4uLm9wdGlvbnMsIHJlc3BvbnNlVHlwZTogJ2Jsb2InIH07XG4gIH0sXG4gIGFzeW5jIHRyYW5zZm9ybShyZXNwb25zZSwgdXJsLCBvcHRpb25zLCBjaGVjaykge1xuICAgIGNvbnN0IFt0eXBlLCBib2R5XSA9IGF3YWl0IHN0b3JhZ2UuY2FjaGUubWFrZVJhdyhyZXNwb25zZSwgdHJ1ZSk7XG4gICAgYXdhaXQgY2hlY2s/Lih1cmwsIHJlc3BvbnNlLmRhdGEsIHR5cGUpO1xuICAgIHJldHVybiBgJHt0eXBlfSwke2JvZHl9YDtcbiAgfSxcbn0pO1xuXG4vKiogQHR5cGUgeyBmdW5jdGlvbih1cmwsIG9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IH0gb3IgdGhyb3dzIG9uIGVycm9yICovXG5zdG9yYWdlLnJlcXVpcmUuZmV0Y2ggPSBjYWNoZU9yRmV0Y2goe1xuICB0cmFuc2Zvcm06ICh7IGRhdGEgfSwgdXJsKSA9PiAoXG4gICAgL15cXHMqPC8udGVzdChkYXRhKVxuICAgICAgPyBQcm9taXNlLnJlamVjdChgTk9UX0pTOiAke3VybH0gXCIke2RhdGEuc2xpY2UoMCwgMTAwKS50cmltKCkucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpfVwiYClcbiAgICAgIDogZGF0YVxuICApLFxufSk7XG5cbmZ1bmN0aW9uIGNhY2hlT3JGZXRjaChoYW5kbGVycyA9IHt9KSB7XG4gIGNvbnN0IHJlcXVlc3RzID0ge307XG4gIGNvbnN0IHsgaW5pdCwgdHJhbnNmb3JtIH0gPSBoYW5kbGVycztcbiAgLyoqIEB0aGlzIFZNU3RvcmFnZUJhc2UgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlT3JGZXRjaEhhbmRsZXIoLi4uYXJncykge1xuICAgIGNvbnN0IFt1cmxdID0gYXJncztcbiAgICBjb25zdCBwcm9taXNlID0gcmVxdWVzdHNbdXJsXSB8fCAocmVxdWVzdHNbdXJsXSA9IHRoaXM6OmRvRmV0Y2goLi4uYXJncykpO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuICAvKiogQHRoaXMgVk1TdG9yYWdlQmFzZSAqL1xuICBhc3luYyBmdW5jdGlvbiBkb0ZldGNoKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBbdXJsLCBvcHRpb25zXSA9IGFyZ3M7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QodXJsLCBpbml0Py4ob3B0aW9ucykgfHwgb3B0aW9ucyk7XG4gICAgICBpZiAoYXdhaXQgaXNNb2RpZmllZChyZXMsIHVybCkpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdHJhbnNmb3JtID8gYXdhaXQgdHJhbnNmb3JtKHJlcywgLi4uYXJncykgOiByZXMuZGF0YTtcbiAgICAgICAgYXdhaXQgdGhpcy5zZXQodXJsLCByZXN1bHQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZzogJHt1cmx9YCwgZXJyKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RzW3VybF07XG4gICAgfVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGlzTW9kaWZpZWQoeyBoZWFkZXJzIH0sIHVybCkge1xuICBjb25zdCBtb2QgPSBoZWFkZXJzLmdldCgnZXRhZycpXG4gIHx8ICtuZXcgRGF0ZShoZWFkZXJzLmdldCgnbGFzdC1tb2RpZmllZCcpKVxuICB8fCArbmV3IERhdGUoaGVhZGVycy5nZXQoJ2RhdGUnKSk7XG4gIGlmICghbW9kIHx8IG1vZCAhPT0gYXdhaXQgc3RvcmFnZS5tb2QuZ2V0T25lKHVybCkpIHtcbiAgICBpZiAobW9kKSBhd2FpdCBzdG9yYWdlLm1vZC5zZXQodXJsLCBtb2QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRBY3RpdmVUYWIsIG5vb3AsIHNlbmRUYWJDbWQsIGdldEZ1bGxVcmwgfSBmcm9tICcjL2NvbW1vbic7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJyMvY29tbW9uL29iamVjdCc7XG5pbXBvcnQgdWEgZnJvbSAnIy9jb21tb24vdWEnO1xuaW1wb3J0IHsgZXh0ZW5zaW9uUm9vdCB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyBnZXRPcHRpb24gfSBmcm9tICcuL29wdGlvbnMnO1xuXG5jb25zdCBvcGVuZXJzID0ge307XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcGF0aElkXSAtIHBhdGggb3IgaWQgdG8gYWRkIHRvICNzY3JpcHRzIHJvdXRlIGluIGRhc2hib2FyZCxcbiAgICAgaWYgYWJzZW50IGEgbmV3IHNjcmlwdCB3aWxsIGJlIGNyZWF0ZWQgZm9yIGFjdGl2ZSB0YWIncyBVUkxcbiAgICogQHJldHVybnMge1Byb21pc2U8e2lkOiBudW1iZXJ9Pn1cbiAgICovXG4gIGFzeW5jIE9wZW5FZGl0b3IocGF0aElkKSB7XG4gICAgaWYgKCFwYXRoSWQpIHtcbiAgICAgIGNvbnN0IHsgdGFiLCBkb21haW4gfSA9IGF3YWl0IGNvbW1hbmRzLkdldFRhYkRvbWFpbigpO1xuICAgICAgY29uc3QgaWQgPSBkb21haW4gJiYgY29tbWFuZHMuQ2FjaGVOZXdTY3JpcHQoe1xuICAgICAgICB1cmw6ICh0YWIucGVuZGluZ1VybCB8fCB0YWIudXJsKS5zcGxpdCgvWyM/XS8pWzBdLFxuICAgICAgICBuYW1lOiBgJHtnZXRPcHRpb24oJ3NjcmlwdFRlbXBsYXRlRWRpdGVkJykgPyAnJyA6ICctICd9JHtkb21haW59YCxcbiAgICAgIH0pO1xuICAgICAgcGF0aElkID0gYF9uZXcke2lkID8gYC8ke2lkfWAgOiAnJ31gO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBgJHtleHRlbnNpb25Sb290fW9wdGlvbnMvaW5kZXguaHRtbCNzY3JpcHRzLyR7cGF0aElkfWA7XG4gICAgLy8gRmlyZWZveCB1bnRpbCB2NTYgZG9lc24ndCBzdXBwb3J0IG1vei1leHRlbnNpb246Ly8gcGF0dGVybiBpbiBicm93c2VyLnRhYnMucXVlcnkoKVxuICAgIGZvciAoY29uc3QgdmlldyBvZiBicm93c2VyLmV4dGVuc2lvbi5nZXRWaWV3cygpKSB7XG4gICAgICBpZiAodmlldy5sb2NhdGlvbi5ocmVmID09PSB1cmwpIHtcbiAgICAgICAgLy8gZGVlcC1jb3B5aW5nIHRvIGF2b2lkIGRlYWQgb2JqZWN0c1xuICAgICAgICBjb25zdCB0YWIgPSBkZWVwQ29weShhd2FpdCB2aWV3LmJyb3dzZXIudGFicy5nZXRDdXJyZW50KCkpO1xuICAgICAgICBicm93c2VyLnRhYnMudXBkYXRlKHRhYi5pZCwgeyBhY3RpdmU6IHRydWUgfSk7XG4gICAgICAgIGJyb3dzZXIud2luZG93cy51cGRhdGUodGFiLndpbmRvd0lkLCB7IGZvY3VzZWQ6IHRydWUgfSk7XG4gICAgICAgIHJldHVybiB0YWI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb21tYW5kcy5UYWJPcGVuKHsgdXJsLCBtYXliZUluV2luZG93OiB0cnVlIH0pO1xuICB9LFxuICAvKiogQHJldHVybiB7UHJvbWlzZTx7IGlkOiBudW1iZXIgfSB8IGNocm9tZS50YWJzLlRhYj59IG5ldyB0YWIgaXMgcmV0dXJuZWQgZm9yIGludGVybmFsIGNhbGxzICovXG4gIGFzeW5jIFRhYk9wZW4oe1xuICAgIHVybCxcbiAgICBhY3RpdmUgPSB0cnVlLFxuICAgIGNvbnRhaW5lcixcbiAgICBpbnNlcnQgPSB0cnVlLFxuICAgIG1heWJlSW5XaW5kb3cgPSBmYWxzZSxcbiAgICBwaW5uZWQsXG4gIH0sIHNyYyA9IHt9KSB7XG4gICAgLy8gc3JjLnRhYiBtYXkgYmUgYWJzZW50IHdoZW4gaW52b2tlZCBmcm9tIHBvcHVwIChlLmcuIGVkaXQvY3JlYXRlIGJ1dHRvbnMpXG4gICAgY29uc3Qgc3JjVGFiID0gc3JjLnRhYiB8fCBhd2FpdCBnZXRBY3RpdmVUYWIoKSB8fCB7fTtcbiAgICAvLyBzcmMudXJsIG1heSBiZSBhYnNlbnQgd2hlbiBpbnZva2VkIGRpcmVjdGx5IGFzIGNvbW1hbmRzLlRhYk9wZW5cbiAgICBjb25zdCBzcmNVcmwgPSBzcmMudXJsO1xuICAgIGNvbnN0IGlzSW50ZXJuYWwgPSAhc3JjVXJsIHx8IHNyY1VybC5zdGFydHNXaXRoKGV4dGVuc2lvblJvb3QpO1xuICAgIC8vIG9ubHkgaW5jb2duaXRvIHN0b3JlSWQgbWF5IGJlIHNwZWNpZmllZCB3aGVuIG9wZW5pbmcgaW4gYW4gaW5jb2duaXRvIHdpbmRvd1xuICAgIGNvbnN0IHsgaW5jb2duaXRvLCB3aW5kb3dJZCB9ID0gc3JjVGFiO1xuICAgIC8vIENocm9tZSBjYW4ndCBvcGVuIGNocm9tZS14eHg6IFVSTHMgaW4gaW5jb2duaXRvIHdpbmRvd3NcbiAgICBsZXQgc3RvcmVJZCA9IHNyY1RhYi5jb29raWVTdG9yZUlkO1xuICAgIGlmIChzdG9yZUlkICYmICFpbmNvZ25pdG8pIHtcbiAgICAgIHN0b3JlSWQgPSBnZXRDb250YWluZXJJZChpc0ludGVybmFsID8gMCA6IGNvbnRhaW5lcikgfHwgc3RvcmVJZDtcbiAgICB9XG4gICAgaWYgKHN0b3JlSWQpIHN0b3JlSWQgPSB7IGNvb2tpZVN0b3JlSWQ6IHN0b3JlSWQgfTtcbiAgICAvLyBVUkwgbmVlZHMgdG8gYmUgZXhwYW5kZWQgZm9yIGBjYW5PcGVuSW5jb2duaXRvYCBiZWxvd1xuICAgIGlmICghL15bLVxcd10rOi8udGVzdCh1cmwpKSB7XG4gICAgICB1cmwgPSBpc0ludGVybmFsXG4gICAgICAgID8gYnJvd3Nlci5ydW50aW1lLmdldFVSTCh1cmwpXG4gICAgICAgIDogZ2V0RnVsbFVybCh1cmwsIHNyY1VybCk7XG4gICAgfVxuICAgIGNvbnN0IGNhbk9wZW5JbmNvZ25pdG8gPSAhaW5jb2duaXRvIHx8IElTX0ZJUkVGT1ggfHwgIS9eKGNocm9tZVstXFx3XSopOi8udGVzdCh1cmwpO1xuICAgIGxldCBuZXdUYWI7XG4gICAgaWYgKG1heWJlSW5XaW5kb3dcbiAgICAgICAgJiYgYnJvd3Nlci53aW5kb3dzXG4gICAgICAgICYmIGdldE9wdGlvbignZWRpdG9yV2luZG93JylcbiAgICAgICAgLyogY29va2llU3RvcmVJZCBpbiB3aW5kb3dzLmNyZWF0ZSgpIGlzIHN1cHBvcnRlZCBzaW5jZSBGRjY0IGh0dHBzOi8vYnVnemlsLmxhLzEzOTM1NzBcbiAgICAgICAgICogYW5kIGEgd29ya2Fyb3VuZCBpcyB0b28gY29udm9sdXRlZCB0byBhZGQgaXQgZm9yIHN1Y2ggYW4gYW5jaWVudCB2ZXJzaW9uICovXG4gICAgICAgICYmICghc3RvcmVJZCB8fCB1YS5maXJlZm94ID49IDY0KSkge1xuICAgICAgY29uc3Qgd25kT3B0cyA9IHtcbiAgICAgICAgdXJsLFxuICAgICAgICBpbmNvZ25pdG86IGNhbk9wZW5JbmNvZ25pdG8gJiYgaW5jb2duaXRvLFxuICAgICAgICAuLi5nZXRPcHRpb24oJ2VkaXRvcldpbmRvd1NpbXBsZScpICYmIHsgdHlwZTogJ3BvcHVwJyB9LFxuICAgICAgICAuLi4hSVNfRklSRUZPWCAmJiB7IGZvY3VzZWQ6ICEhYWN0aXZlIH0sIC8vIEZGIGRvZXNuJ3Qgc3VwcG9ydCB0aGlzXG4gICAgICAgIC4uLnN0b3JlSWQsXG4gICAgICB9O1xuICAgICAgY29uc3QgcG9zID0gZ2V0T3B0aW9uKCdlZGl0b3JXaW5kb3dQb3MnKTtcbiAgICAgIGNvbnN0IGhhc1BvcyA9IHBvcyAmJiAndG9wJyBpbiBwb3M7XG4gICAgICBjb25zdCB3bmQgPSBhd2FpdCBicm93c2VyLndpbmRvd3MuY3JlYXRlKHsgLi4ud25kT3B0cywgLi4ucG9zIH0pLmNhdGNoKGhhc1BvcyAmJiBub29wKVxuICAgICAgICB8fCBoYXNQb3MgJiYgYXdhaXQgYnJvd3Nlci53aW5kb3dzLmNyZWF0ZSh3bmRPcHRzKTtcbiAgICAgIG5ld1RhYiA9IHduZC50YWJzWzBdO1xuICAgIH1cbiAgICBpZiAoIW5ld1RhYikge1xuICAgICAgbmV3VGFiID0gYXdhaXQgYnJvd3Nlci50YWJzLmNyZWF0ZSh7XG4gICAgICAgIHVybCxcbiAgICAgICAgLy8gbm9ybWFsaXppbmcgYXMgYm9vbGVhbiBiZWNhdXNlIHRoZSBBUEkgcmVxdWlyZXMgc3RyaWN0IHR5cGVzXG4gICAgICAgIGFjdGl2ZTogISFhY3RpdmUsXG4gICAgICAgIHBpbm5lZDogISFwaW5uZWQsXG4gICAgICAgIC4uLnN0b3JlSWQsXG4gICAgICAgIC4uLmNhbk9wZW5JbmNvZ25pdG8gJiYge1xuICAgICAgICAgIHdpbmRvd0lkLFxuICAgICAgICAgIC4uLmluc2VydCAmJiB7IGluZGV4OiBzcmNUYWIuaW5kZXggKyAxIH0sXG4gICAgICAgICAgLi4udWEub3BlbmVyVGFiSWRTdXBwb3J0ZWQgJiYgeyBvcGVuZXJUYWJJZDogc3JjVGFiLmlkIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgeyBpZCB9ID0gbmV3VGFiO1xuICAgIGlmIChhY3RpdmUgJiYgbmV3VGFiLndpbmRvd0lkICE9PSB3aW5kb3dJZCkge1xuICAgICAgYXdhaXQgYnJvd3Nlci53aW5kb3dzLnVwZGF0ZShuZXdUYWIud2luZG93SWQsIHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgICB9XG4gICAgb3BlbmVyc1tpZF0gPSBzcmNUYWIuaWQ7XG4gICAgcmV0dXJuIGlzSW50ZXJuYWwgPyBuZXdUYWIgOiB7IGlkIH07XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHt2b2lkfSAqL1xuICBUYWJDbG9zZSh7IGlkIH0gPSB7fSwgc3JjKSB7XG4gICAgY29uc3QgdGFiSWQgPSBpZCB8fCBzcmM/LnRhYj8uaWQ7XG4gICAgaWYgKHRhYklkID49IDApIGJyb3dzZXIudGFicy5yZW1vdmUodGFiSWQpO1xuICB9LFxuICBUYWJGb2N1cyhfLCBzcmMpIHtcbiAgICBicm93c2VyLnRhYnMudXBkYXRlKHNyYy50YWIuaWQsIHsgYWN0aXZlOiB0cnVlIH0pLmNhdGNoKG5vb3ApO1xuICAgIGJyb3dzZXIud2luZG93cy51cGRhdGUoc3JjLnRhYi53aW5kb3dJZCwgeyBmb2N1c2VkOiB0cnVlIH0pLmNhdGNoKG5vb3ApO1xuICB9LFxufSk7XG5cbi8vIEZpcmVmb3ggQW5kcm9pZCBkb2VzIG5vdCBzdXBwb3J0IGBvcGVuZXJUYWJJZGAgZmllbGQsIGl0IGZhaWxzIGlmIHRoaXMgZmllbGQgaXMgcGFzc2VkXG4vLyBYWFggb3BlbmVyVGFiSWQgc2VlbXMgYnVnZ3kgb24gQ2hyb21lLCBodHRwczovL2NyYnVnLmNvbS85NjcxNTBcbi8vIEl0IHNlZW1zIHRvIGRvIG5vdGhpbmcgZXZlbiBzZXQgc3VjY2Vzc2Z1bGx5IHdpdGggYGJyb3dzZXIudGFicy51cGRhdGVgLlxudWEucmVhZHkudGhlbigoKSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHVhLCB7XG4gICAgb3BlbmVyVGFiSWRTdXBwb3J0ZWQ6IHtcbiAgICAgIHZhbHVlOiAhSVNfRklSRUZPWCB8fCB1YS5maXJlZm94ID49IDU3ICYmIHVhLm9zICE9PSAnYW5kcm9pZCcsXG4gICAgfSxcbiAgfSk7XG59KTtcblxuYnJvd3Nlci50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigoaWQpID0+IHtcbiAgY29uc3Qgb3BlbmVySWQgPSBvcGVuZXJzW2lkXTtcbiAgaWYgKG9wZW5lcklkID49IDApIHtcbiAgICBzZW5kVGFiQ21kKG9wZW5lcklkLCAnVGFiQ2xvc2VkJywgaWQpO1xuICAgIGRlbGV0ZSBvcGVuZXJzW2lkXTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5lcklkKGluZGV4KSB7XG4gIHJldHVybiBpbmRleCA9PT0gMCAmJiAnZmlyZWZveC1kZWZhdWx0J1xuICAgICAgICAgfHwgaW5kZXggPiAwICYmIGBmaXJlZm94LWNvbnRhaW5lci0ke2luZGV4fWA7XG59XG4iLCJpbXBvcnQgeyBwb3N0SW5pdGlhbGl6ZSB9IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9uLCBnZXRPcHRpb24sIHNldE9wdGlvbiB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBTQ1JJUFRfVEVNUExBVEUgPSAnc2NyaXB0VGVtcGxhdGUnO1xuY29uc3QgU0NSSVBUX1RFTVBMQVRFX0VESVRFRCA9IGAke1NDUklQVF9URU1QTEFURX1FZGl0ZWRgO1xuY29uc3QgSU5JVElBTF9URU1QTEFURSA9IGBcXFxuLy8gPT1Vc2VyU2NyaXB0PT1cbi8vIEBuYW1lIE5ldyBTY3JpcHRcbi8vIEBuYW1lc3BhY2UgVmlvbGVudG1vbmtleSBTY3JpcHRzXG4vLyBAbWF0Y2gge3t1cmx9fVxuLy8gQGdyYW50IG5vbmVcbi8vID09L1VzZXJTY3JpcHQ9PVxuYDtcblxucG9zdEluaXRpYWxpemUucHVzaCgoKSA9PiB7XG4gIGxldCBlZGl0ZWQgPSBnZXRPcHRpb24oU0NSSVBUX1RFTVBMQVRFX0VESVRFRCk7XG4gIC8vIFByZXNlcnZlIGFuIGVkaXRlZCB0ZW1wbGF0ZVxuICBpZiAoZWRpdGVkKSByZXR1cm47XG4gIGNvbnN0IHRlbXBsYXRlID0gZ2V0T3B0aW9uKFNDUklQVF9URU1QTEFURSk7XG4gIC8vIFdoZW4gdXBkYXRpbmcgZnJvbSBhbiBvbGQgdmVyc2lvbiwgc2V0IHRoZSBlZGl0ZWQgZmxhZyByZXRyb2FjdGl2ZWx5XG4gIGlmIChlZGl0ZWQgPT0gbnVsbCkge1xuICAgIGVkaXRlZCA9IHRlbXBsYXRlICE9PSBJTklUSUFMX1RFTVBMQVRFO1xuICAgIGlmIChlZGl0ZWQpIHNldE9wdGlvbihTQ1JJUFRfVEVNUExBVEVfRURJVEVELCB0cnVlKTtcbiAgICBlbHNlIHJlc2V0U2NyaXB0VGVtcGxhdGUoKTtcbiAgLy8gV2hlbiB1cGRhdGluZyBWTSwgdXBkYXRlIHRvIHRoZSBuZXcgZGVmYXVsdCB0ZW1wbGF0ZVxuICB9IGVsc2UgaWYgKHRlbXBsYXRlICE9PSBnZXREZWZhdWx0T3B0aW9uKFNDUklQVF9URU1QTEFURSkpIHtcbiAgICByZXNldFNjcmlwdFRlbXBsYXRlKCk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRTY3JpcHRUZW1wbGF0ZShjaGFuZ2VzID0ge30pIHtcbiAgY29uc3QgZGVmYXVsdFRlbXBsYXRlID0gZ2V0RGVmYXVsdE9wdGlvbihTQ1JJUFRfVEVNUExBVEUpO1xuICBsZXQgdGVtcGxhdGUgPSBjaGFuZ2VzW1NDUklQVF9URU1QTEFURV07XG4gIGlmICghdGVtcGxhdGUpIHtcbiAgICB0ZW1wbGF0ZSA9IGRlZmF1bHRUZW1wbGF0ZTtcbiAgICBjaGFuZ2VzW1NDUklQVF9URU1QTEFURV0gPSB0ZW1wbGF0ZTtcbiAgICBzZXRPcHRpb24oU0NSSVBUX1RFTVBMQVRFLCB0ZW1wbGF0ZSk7XG4gIH1cbiAgY29uc3QgZWRpdGVkID0gdGVtcGxhdGUgIT09IGRlZmF1bHRUZW1wbGF0ZTtcbiAgaWYgKGVkaXRlZCAhPT0gY2hhbmdlc1tTQ1JJUFRfVEVNUExBVEVfRURJVEVEXSkge1xuICAgIGNoYW5nZXNbU0NSSVBUX1RFTVBMQVRFX0VESVRFRF0gPSBlZGl0ZWQ7XG4gICAgc2V0T3B0aW9uKFNDUklQVF9URU1QTEFURV9FRElURUQsIGVkaXRlZCk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHRsZCBmcm9tICcjL2NvbW1vbi90bGQnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuaW1wb3J0IHsgcG9zdEluaXRpYWxpemUgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uLCBob29rT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgVGVzdEJsYWNrbGlzdDogdGVzdEJsYWNrbGlzdCxcbn0pO1xuXG5wb3N0SW5pdGlhbGl6ZS5wdXNoKHJlc2V0QmxhY2tsaXN0KTtcblxudGxkLmluaXRUTEQodHJ1ZSk7XG5cbmNvbnN0IFJFX01BVENIX1BBUlRTID0gLyguKj8pOlxcL1xcLyhbXi9dKilcXC8oLiopLztcbmxldCBibGFja2xpc3RSdWxlcyA9IFtdO1xuaG9va09wdGlvbnMoKGNoYW5nZXMpID0+IHtcbiAgaWYgKCdibGFja2xpc3QnIGluIGNoYW5nZXMpIHJlc2V0QmxhY2tsaXN0KGNoYW5nZXMuYmxhY2tsaXN0IHx8ICcnKTtcbn0pO1xuY29uc3QgUkVfSFRUUF9PUl9IVFRQUyA9IC9eaHR0cHM/JC9pO1xuXG4vKlxuIFNpbXBsZSBGSUZPIHF1ZXVlIGZvciB0aGUgcmVzdWx0cyBvZiB0ZXN0QmxhY2tsaXN0LCBjYWNoZWQgc2VwYXJhdGVseSBmcm9tIHRoZSBtYWluIHxjYWNoZXxcbiBiZWNhdXNlIHRoZSBibGFja2xpc3QgaXMgdXBkYXRlZCBvbmx5IG9uY2UgaW4gYSB3aGlsZSBzbyBpdHMgZW50cmllcyB3b3VsZCBiZSBjcm93ZGluZ1xuIHRoZSBtYWluIGNhY2hlIGFuZCByZWR1Y2luZyBpdHMgcGVyZm9ybWFuY2UgKG9iamVjdHMgd2l0aCBsb3RzIG9mIGtleXMgYXJlIHNsb3cgdG8gYWNjZXNzKS5cblxuIFdlIGFsc28gZG9uJ3QgbmVlZCB0byBhdXRvLWV4cGlyZSB0aGUgZW50cmllcyBhZnRlciBhIHRpbWVvdXQuXG4gVGhlIG9ubHkgbGltaXQgd2UncmUgY29uY2VybmVkIHdpdGggaXMgdGhlIG92ZXJhbGwgbWVtb3J5IHVzZWQuXG4gVGhlIGxpbWl0IGlzIHNwZWNpZmllZCBpbiB0aGUgYW1vdW50IG9mIHVuaWNvZGUgY2hhcmFjdGVycyAoc3RyaW5nIGxlbmd0aCkgZm9yIHNpbXBsaWNpdHkuXG4gRGlzcmVnYXJkaW5nIGRlZHVwbGljYXRpb24gZHVlIHRvIGludGVybmluZywgdGhlIGFjdHVhbCBtZW1vcnkgdXNlZCBpcyBhcHByb3hpbWF0ZWx5IHR3aWNlIGFzIGJpZzpcbiAyICoga2V5TGVuZ3RoICsgb2JqZWN0U3RydWN0dXJlT3ZlcmhlYWQgKiBvYmplY3RDb3VudFxuKi9cbmNvbnN0IE1BWF9CTF9DQUNIRV9MRU5HVEggPSAxMDBlMztcbmxldCBibENhY2hlID0ge307XG5sZXQgYmxDYWNoZVNpemUgPSAwO1xuXG5mdW5jdGlvbiB0ZXN0UnVsZXModXJsLCBydWxlcywgcHJlZml4LCBydWxlQnVpbGRlcikge1xuICByZXR1cm4gcnVsZXMuc29tZShydWxlID0+IHtcbiAgICBjb25zdCBrZXkgPSBgJHtwcmVmaXh9OiR7cnVsZX1gO1xuICAgIGNvbnN0IG1hdGNoZXIgPSBjYWNoZS5nZXQoa2V5KSB8fCBjYWNoZS5wdXQoa2V5LCBydWxlQnVpbGRlcihydWxlKSk7XG4gICAgcmV0dXJuIG1hdGNoZXIudGVzdCh1cmwpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUZXN0IGdsb2IgcnVsZXMgbGlrZSBgQGluY2x1ZGVgIGFuZCBgQGV4Y2x1ZGVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVzdEdsb2IodXJsLCBydWxlcykge1xuICByZXR1cm4gdGVzdFJ1bGVzKHVybCwgcnVsZXMsICdyZScsIGF1dG9SZWcpO1xufVxuXG4vKipcbiAqIFRlc3QgbWF0Y2ggcnVsZXMgbGlrZSBgQG1hdGNoYCBhbmQgYEBleGNsdWRlX21hdGNoYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlc3RNYXRjaCh1cmwsIHJ1bGVzKSB7XG4gIHJldHVybiB0ZXN0UnVsZXModXJsLCBydWxlcywgJ21hdGNoJywgbWF0Y2hUZXN0ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdFNjcmlwdCh1cmwsIHNjcmlwdCkge1xuICBjYWNoZS5iYXRjaCh0cnVlKTtcbiAgY29uc3QgeyBjdXN0b20sIG1ldGEgfSA9IHNjcmlwdDtcbiAgY29uc3QgbWF0ID0gbWVyZ2VMaXN0cyhjdXN0b20ub3JpZ01hdGNoICYmIG1ldGEubWF0Y2gsIGN1c3RvbS5tYXRjaCk7XG4gIGNvbnN0IGluYyA9IG1lcmdlTGlzdHMoY3VzdG9tLm9yaWdJbmNsdWRlICYmIG1ldGEuaW5jbHVkZSwgY3VzdG9tLmluY2x1ZGUpO1xuICBjb25zdCBleGMgPSBtZXJnZUxpc3RzKGN1c3RvbS5vcmlnRXhjbHVkZSAmJiBtZXRhLmV4Y2x1ZGUsIGN1c3RvbS5leGNsdWRlKTtcbiAgY29uc3QgZXhjTWF0ID0gbWVyZ2VMaXN0cyhjdXN0b20ub3JpZ0V4Y2x1ZGVNYXRjaCAmJiBtZXRhLmV4Y2x1ZGVNYXRjaCwgY3VzdG9tLmV4Y2x1ZGVNYXRjaCk7XG4gIC8vIG1hdGNoIGFsbCBpZiBubyBAbWF0Y2ggb3IgQGluY2x1ZGUgcnVsZVxuICBsZXQgb2sgPSAhbWF0Lmxlbmd0aCAmJiAhaW5jLmxlbmd0aDtcbiAgLy8gQG1hdGNoXG4gIG9rID0gb2sgfHwgdGVzdE1hdGNoKHVybCwgbWF0KTtcbiAgLy8gQGluY2x1ZGVcbiAgb2sgPSBvayB8fCB0ZXN0R2xvYih1cmwsIGluYyk7XG4gIC8vIEBleGNsdWRlLW1hdGNoXG4gIG9rID0gb2sgJiYgIXRlc3RNYXRjaCh1cmwsIGV4Y01hdCk7XG4gIC8vIEBleGNsdWRlXG4gIG9rID0gb2sgJiYgIXRlc3RHbG9iKHVybCwgZXhjKTtcbiAgY2FjaGUuYmF0Y2goZmFsc2UpO1xuICByZXR1cm4gb2s7XG59XG5cbmZ1bmN0aW9uIG1lcmdlTGlzdHMoLi4uYXJncykge1xuICByZXR1cm4gYXJncy5yZWR1Y2UoKHJlcywgaXRlbSkgPT4gKGl0ZW0gPyByZXMuY29uY2F0KGl0ZW0pIDogcmVzKSwgW10pO1xufVxuXG5mdW5jdGlvbiBzdHIyUkUoc3RyKSB7XG4gIGNvbnN0IHJlID0gc3RyLnJlcGxhY2UoLyhbLj8rW1xcXXt9KCl8XiRdKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgcmV0dXJuIHJlO1xufVxuXG5mdW5jdGlvbiBiaW5kUkUocmUpIHtcbiAgcmV0dXJuIHJlLnRlc3QuYmluZChyZSk7XG59XG5cbmZ1bmN0aW9uIGF1dG9SZWcoc3RyKSB7XG4gIC8vIHJlZ2V4cCBtb2RlOiBjYXNlLWluc2Vuc2l0aXZlIHBlciBHTSBkb2N1bWVudGF0aW9uXG4gIGlmIChzdHIubGVuZ3RoID4gMSAmJiBzdHJbMF0gPT09ICcvJyAmJiBzdHJbc3RyLmxlbmd0aCAtIDFdID09PSAnLycpIHtcbiAgICBsZXQgcmU7XG4gICAgdHJ5IHsgcmUgPSBuZXcgUmVnRXhwKHN0ci5zbGljZSgxLCAtMSksICdpJyk7IH0gY2F0Y2ggKGUpIHsgLyogaWdub3JlICovIH1cbiAgICByZXR1cm4geyB0ZXN0OiByZSA/IGJpbmRSRShyZSkgOiAoKSA9PiBmYWxzZSB9O1xuICB9XG4gIC8vIGdsb2IgbW9kZTogY2FzZS1pbnNlbnNpdGl2ZSB0byBtYXRjaCBHTTQgJiBUYW1wZXJtb25rZXkgYnVnZ2VkIGJlaGF2aW9yXG4gIGNvbnN0IHJlU3RyID0gc3RyMlJFKHN0ci50b0xvd2VyQ2FzZSgpKTtcbiAgaWYgKHRsZC5pc1JlYWR5KCkgJiYgc3RyLmluY2x1ZGVzKCcudGxkLycpKSB7XG4gICAgY29uc3QgcmVUbGRTdHIgPSByZVN0ci5yZXBsYWNlKCdcXFxcLnRsZC8nLCAnKCg/OlxcXFwuWy1cXFxcd10rKSspLycpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXN0OiAodHN0cikgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gdHN0ci50b0xvd2VyQ2FzZSgpLm1hdGNoKHJlVGxkU3RyKTtcbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCBzdWZmaXggPSBtYXRjaGVzWzFdLnNsaWNlKDEpO1xuICAgICAgICAgIGlmICh0bGQuZ2V0UHVibGljU3VmZml4KHN1ZmZpeCkgPT09IHN1ZmZpeCkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgXiR7cmVTdHJ9JGAsICdpJyk7IC8vIFN0cmluZyB3aXRoIHdpbGRjYXJkc1xuICByZXR1cm4geyB0ZXN0OiBiaW5kUkUocmUpIH07XG59XG5cbmZ1bmN0aW9uIG1hdGNoU2NoZW1lKHJ1bGUsIGRhdGEpIHtcbiAgLy8gZXhhY3QgbWF0Y2hcbiAgaWYgKHJ1bGUgPT09IGRhdGEpIHJldHVybiAxO1xuICAvLyAqID0gaHR0cCB8IGh0dHBzXG4gIC8vIHN1cHBvcnQgaHR0cCpcbiAgaWYgKFtcbiAgICAnKicsXG4gICAgJ2h0dHAqJyxcbiAgXS5pbmNsdWRlcyhydWxlKSAmJiBSRV9IVFRQX09SX0hUVFBTLnRlc3QoZGF0YSkpIHJldHVybiAxO1xuICByZXR1cm4gMDtcbn1cblxuY29uc3QgUkVfU1RSX0FOWSA9ICcoPzp8Lio/XFxcXC4pJztcbmNvbnN0IFJFX1NUUl9UTEQgPSAnKCg/OlxcXFwuWy1cXFxcd10rKSspJztcbmZ1bmN0aW9uIGhvc3RNYXRjaGVyKHJ1bGUpIHtcbiAgLy8gKiBtYXRjaGVzIGFsbFxuICBpZiAocnVsZSA9PT0gJyonKSB7XG4gICAgcmV0dXJuICgpID0+IDE7XG4gIH1cbiAgLy8gKi5leGFtcGxlLmNvbVxuICAvLyB3d3cuZ29vZ2xlLipcbiAgLy8gd3d3Lmdvb2dsZS50bGRcbiAgY29uc3QgcnVsZUxDID0gcnVsZS50b0xvd2VyQ2FzZSgpOyAvLyBob3N0IG1hdGNoaW5nIGlzIGNhc2UtaW5zZW5zaXRpdmVcbiAgbGV0IHByZWZpeCA9ICcnO1xuICBsZXQgYmFzZSA9IHJ1bGVMQztcbiAgbGV0IHN1ZmZpeCA9ICcnO1xuICBpZiAocnVsZS5zdGFydHNXaXRoKCcqLicpKSB7XG4gICAgYmFzZSA9IGJhc2Uuc2xpY2UoMik7XG4gICAgcHJlZml4ID0gUkVfU1RSX0FOWTtcbiAgfVxuICBpZiAodGxkLmlzUmVhZHkoKSAmJiBydWxlLmVuZHNXaXRoKCcudGxkJykpIHtcbiAgICBiYXNlID0gYmFzZS5zbGljZSgwLCAtNCk7XG4gICAgc3VmZml4ID0gUkVfU1RSX1RMRDtcbiAgfVxuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoYF4ke3ByZWZpeH0ke3N0cjJSRShiYXNlKX0ke3N1ZmZpeH0kYCk7XG4gIHJldHVybiAoZGF0YSkgPT4ge1xuICAgIC8vIGV4YWN0IG1hdGNoLCBjYXNlLWluc2Vuc2l0aXZlXG4gICAgZGF0YSA9IGRhdGEudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAocnVsZUxDID09PSBkYXRhKSByZXR1cm4gMTtcbiAgICAvLyBmdWxsIGNoZWNrXG4gICAgY29uc3QgbWF0Y2hlcyA9IGRhdGEubWF0Y2gocmUpO1xuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBbLCB0bGRTdHJdID0gbWF0Y2hlcztcbiAgICAgIGlmICghdGxkU3RyKSByZXR1cm4gMTtcbiAgICAgIGNvbnN0IHRsZFN1ZmZpeCA9IHRsZFN0ci5zbGljZSgxKTtcbiAgICAgIHJldHVybiB0bGQuZ2V0UHVibGljU3VmZml4KHRsZFN1ZmZpeCkgPT09IHRsZFN1ZmZpeDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhdGhNYXRjaGVyKHJ1bGUpIHtcbiAgY29uc3QgaUhhc2ggPSBydWxlLmluZGV4T2YoJyMnKTtcbiAgbGV0IGlRdWVyeSA9IHJ1bGUuaW5kZXhPZignPycpO1xuICBsZXQgc3RyUmUgPSBzdHIyUkUocnVsZSk7XG4gIGlmIChpUXVlcnkgPiBpSGFzaCkgaVF1ZXJ5ID0gLTE7XG4gIGlmIChpSGFzaCA8IDApIHtcbiAgICBpZiAoaVF1ZXJ5IDwgMCkgc3RyUmUgPSBgXiR7c3RyUmV9KD86Wz8jXXwkKWA7XG4gICAgZWxzZSBzdHJSZSA9IGBeJHtzdHJSZX0oPzojfCQpYDtcbiAgfVxuICByZXR1cm4gYmluZFJFKG5ldyBSZWdFeHAoc3RyUmUpKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hUZXN0ZXIocnVsZSkge1xuICBsZXQgdGVzdDtcbiAgaWYgKHJ1bGUgPT09ICc8YWxsX3VybHM+Jykge1xuICAgIHRlc3QgPSAoKSA9PiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJ1bGVQYXJ0cyA9IHJ1bGUubWF0Y2goUkVfTUFUQ0hfUEFSVFMpO1xuICAgIGlmIChydWxlUGFydHMpIHtcbiAgICAgIGNvbnN0IG1hdGNoSG9zdCA9IGhvc3RNYXRjaGVyKHJ1bGVQYXJ0c1syXSk7XG4gICAgICBjb25zdCBtYXRjaFBhdGggPSBwYXRoTWF0Y2hlcihydWxlUGFydHNbM10pO1xuICAgICAgdGVzdCA9ICh1cmwpID0+IHtcbiAgICAgICAgY29uc3QgcGFydHMgPSB1cmwubWF0Y2goUkVfTUFUQ0hfUEFSVFMpO1xuICAgICAgICByZXR1cm4gISFydWxlUGFydHMgJiYgISFwYXJ0c1xuICAgICAgICAgICYmIG1hdGNoU2NoZW1lKHJ1bGVQYXJ0c1sxXSwgcGFydHNbMV0pXG4gICAgICAgICAgJiYgbWF0Y2hIb3N0KHBhcnRzWzJdKVxuICAgICAgICAgICYmIG1hdGNoUGF0aChwYXJ0c1szXSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZ25vcmUgaW52YWxpZCBtYXRjaCBydWxlc1xuICAgICAgdGVzdCA9ICgpID0+IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyB0ZXN0IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0QmxhY2tsaXN0KHVybCkge1xuICBsZXQgcmVzID0gYmxDYWNoZVt1cmxdO1xuICBpZiAocmVzID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBydWxlID0gYmxhY2tsaXN0UnVsZXMuZmluZCgoeyB0ZXN0IH0pID0+IHRlc3QodXJsKSk7XG4gICAgcmVzID0gcnVsZT8ucmVqZWN0ICYmIHJ1bGUudGV4dDtcbiAgICB1cGRhdGVCbGFja2xpc3RDYWNoZSh1cmwsIHJlcyB8fCBmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0QmxhY2tsaXN0KGxpc3QpIHtcbiAgY2FjaGUuYmF0Y2godHJ1ZSk7XG4gIGNvbnN0IHJ1bGVzID0gbGlzdCA9PSBudWxsID8gZ2V0T3B0aW9uKCdibGFja2xpc3QnKSA6IGxpc3Q7XG4gIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgIGNvbnNvbGUuaW5mbygnUmVzZXQgYmxhY2tsaXN0OicsIHJ1bGVzKTtcbiAgfVxuICAvLyBYWFggY29tcGF0aWJsZSB3aXRoIHtBcnJheX0gbGlzdCBpbiB2Mi42LjEtXG4gIGJsYWNrbGlzdFJ1bGVzID0gKEFycmF5LmlzQXJyYXkocnVsZXMpID8gcnVsZXMgOiAocnVsZXMgfHwgJycpLnNwbGl0KCdcXG4nKSlcbiAgLm1hcCgodGV4dCkgPT4ge1xuICAgIHRleHQgPSB0ZXh0LnRyaW0oKTtcbiAgICBpZiAoIXRleHQgfHwgdGV4dC5zdGFydHNXaXRoKCcjJykpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1vZGUgPSB0ZXh0LnN0YXJ0c1dpdGgoJ0AnKSAmJiB0ZXh0LnNwbGl0KC9cXHMvLCAxKVswXTtcbiAgICBjb25zdCBydWxlID0gbW9kZSA/IHRleHQuc2xpY2UobW9kZS5sZW5ndGggKyAxKS50cmltKCkgOiB0ZXh0O1xuICAgIGNvbnN0IHJlamVjdCA9IG1vZGUgIT09ICdAaW5jbHVkZScgJiYgbW9kZSAhPT0gJ0BtYXRjaCc7IC8vIEBpbmNsdWRlIGFuZCBAbWF0Y2ggPSB3aGl0ZWxpc3RcbiAgICBjb25zdCB7IHRlc3QgfSA9IG1vZGUgPT09ICdAaW5jbHVkZScgfHwgbW9kZSA9PT0gJ0BleGNsdWRlJyAmJiBhdXRvUmVnKHJ1bGUpXG4gICAgICB8fCAhbW9kZSAmJiAhcnVsZS5pbmNsdWRlcygnLycpICYmIG1hdGNoVGVzdGVyKGAqOi8vJHtydWxlfS8qYCkgLy8gZG9tYWluXG4gICAgICB8fCBtYXRjaFRlc3RlcihydWxlKTsgLy8gQG1hdGNoIGFuZCBAZXhjbHVkZS1tYXRjaFxuICAgIHJldHVybiB7IHJlamVjdCwgdGVzdCwgdGV4dCB9O1xuICB9KVxuICAuZmlsdGVyKEJvb2xlYW4pO1xuICBibENhY2hlID0ge307XG4gIGJsQ2FjaGVTaXplID0gMDtcbiAgY2FjaGUuYmF0Y2goZmFsc2UpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVCbGFja2xpc3RDYWNoZShrZXksIHZhbHVlKSB7XG4gIGJsQ2FjaGVba2V5XSA9IHZhbHVlO1xuICBibENhY2hlU2l6ZSArPSBrZXkubGVuZ3RoO1xuICBpZiAoYmxDYWNoZVNpemUgPiBNQVhfQkxfQ0FDSEVfTEVOR1RIKSB7XG4gICAgT2JqZWN0LmtleXMoYmxDYWNoZSlcbiAgICAuc29tZSgoaykgPT4ge1xuICAgICAgYmxDYWNoZVNpemUgLT0gay5sZW5ndGg7XG4gICAgICBkZWxldGUgYmxDYWNoZVtrXTtcbiAgICAgIC8vIHJlZHVjZSB0aGUgY2FjaGUgdG8gNzUlIHNvIHRoYXQgdGhpcyBmdW5jdGlvbiBkb2Vzbid0IHJ1biB0b28gb2Z0ZW4uXG4gICAgICByZXR1cm4gYmxDYWNoZVNpemUgPCBNQVhfQkxfQ0FDSEVfTEVOR1RIICogMyAvIDQ7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFNjcmlwdE5hbWUsIGkxOG4sIHJlcXVlc3QsIGNvbXBhcmVWZXJzaW9uLCBzZW5kQ21kLCB0cnVlSm9pbiB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IENNRF9TQ1JJUFRfVVBEQVRFLCBJU19ERVYgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgZmV0Y2hSZXNvdXJjZXMsIGdldFNjcmlwdEJ5SWQsIGdldFNjcmlwdHMsIHBhcnNlU2NyaXB0IH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgeyBwYXJzZU1ldGEgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgeyBnZXRPcHRpb24sIHNldE9wdGlvbiB9IGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHtcbiAgLyoqIEByZXR1cm4ge1Byb21pc2U8dHJ1ZT8+fSAqL1xuICBhc3luYyBDaGVja1VwZGF0ZShpZCkge1xuICAgIGNvbnN0IHNjcmlwdCA9IGdldFNjcmlwdEJ5SWQoaWQpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjaGVja0FsbEFuZE5vdGlmeShbc2NyaXB0XSk7XG4gICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gIH0sXG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSAqL1xuICBhc3luYyBDaGVja1VwZGF0ZUFsbCgpIHtcbiAgICBzZXRPcHRpb24oJ2xhc3RVcGRhdGUnLCBEYXRlLm5vdygpKTtcbiAgICBjb25zdCB0b1VwZGF0ZSA9IGdldFNjcmlwdHMoKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNvbmZpZy5zaG91bGRVcGRhdGUpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjaGVja0FsbEFuZE5vdGlmeSh0b1VwZGF0ZSk7XG4gICAgcmV0dXJuIHJlc3VsdHMuaW5jbHVkZXModHJ1ZSk7XG4gIH0sXG59KTtcblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBbGxBbmROb3RpZnkoc2NyaXB0cykge1xuICBjb25zdCBub3RlcyA9IFtdO1xuICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAoaXRlbSA9PiBjaGVja1VwZGF0ZShpdGVtLCBub3RlcykpKTtcbiAgaWYgKG5vdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIG5vdGlmeShub3Rlc1swXSk7XG4gIH0gZWxzZSBpZiAobm90ZXMubGVuZ3RoKSB7XG4gICAgbm90aWZ5KHtcbiAgICAgIC8vIEZGIGRvZXNuJ3Qgc2hvdyBub3RpZmljYXRpb25zIG9mIHR5cGU6J2xpc3QnIHNvIHdlJ2xsIHVzZSBgdGV4dGAgZXZlcnl3aGVyZVxuICAgICAgdGV4dDogbm90ZXMubWFwKG4gPT4gbi50ZXh0KS5qb2luKCdcXG4nKSxcbiAgICAgIG9uQ2xpY2s6IGJyb3dzZXIucnVudGltZS5vcGVuT3B0aW9uc1BhZ2UsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmNvbnN0IHByb2Nlc3NlcyA9IHt9O1xuXG4vLyByZXNvbHZlcyB0byB0cnVlIGlmIHN1Y2Nlc3NmdWxseSB1cGRhdGVkXG5mdW5jdGlvbiBjaGVja1VwZGF0ZShzY3JpcHQsIG5vdGVzKSB7XG4gIGNvbnN0IHsgaWQgfSA9IHNjcmlwdC5wcm9wcztcbiAgY29uc3QgcHJvbWlzZSA9IHByb2Nlc3Nlc1tpZF0gfHwgKHByb2Nlc3Nlc1tpZF0gPSBkb0NoZWNrVXBkYXRlKHNjcmlwdCwgbm90ZXMpKTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRvQ2hlY2tVcGRhdGUoc2NyaXB0LCBub3Rlcykge1xuICBjb25zdCB7IGlkIH0gPSBzY3JpcHQucHJvcHM7XG4gIGxldCBtc2dPaztcbiAgbGV0IG1zZ0VycjtcbiAgbGV0IHJlc291cmNlT3B0cztcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVwZGF0ZSB9ID0gYXdhaXQgcGFyc2VTY3JpcHQoe1xuICAgICAgaWQsXG4gICAgICBjb2RlOiBhd2FpdCBkb3dubG9hZFVwZGF0ZShzY3JpcHQpLFxuICAgICAgdXBkYXRlOiB7IGNoZWNraW5nOiBmYWxzZSB9LFxuICAgIH0pO1xuICAgIG1zZ09rID0gaTE4bignbXNnU2NyaXB0VXBkYXRlZCcsIFtnZXRTY3JpcHROYW1lKHVwZGF0ZSldKTtcbiAgICByZXNvdXJjZU9wdHMgPSB7IGNhY2hlOiAnbm8tY2FjaGUnIH07XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKHVwZGF0ZSkge1xuICAgIG1zZ0VyciA9IHVwZGF0ZS5lcnJvcjtcbiAgICAvLyBFaXRoZXIgcHJvY2VlZCB3aXRoIG5vcm1hbCBmZXRjaCBvbiBuby11cGRhdGUgb3Igc2tpcCBpdCBhbHRvZ2V0aGVyIG9uIGVycm9yXG4gICAgcmVzb3VyY2VPcHRzID0gIXVwZGF0ZS5lcnJvciAmJiAhdXBkYXRlLmNoZWNraW5nICYmIHt9O1xuICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5lcnJvcih1cGRhdGUpO1xuICB9IGZpbmFsbHkge1xuICAgIGlmIChyZXNvdXJjZU9wdHMgJiYgIUlTX0RFVikgeyAvLyBERVbnirbmgIHkuI3mm7TmlrByZXNvdXJjZVxuICAgICAgbXNnRXJyID0gYXdhaXQgZmV0Y2hSZXNvdXJjZXMoc2NyaXB0LCBudWxsLCByZXNvdXJjZU9wdHMpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHICYmIG1zZ0VycikgY29uc29sZS5lcnJvcihtc2dFcnIpO1xuICAgIH1cbiAgICBpZiAoY2FuTm90aWZ5KHNjcmlwdCkgJiYgKG1zZ09rIHx8IG1zZ0VycikpIHtcbiAgICAgIG5vdGVzLnB1c2goe1xuICAgICAgICBzY3JpcHQsXG4gICAgICAgIHRleHQ6IFttc2dPaywgbXNnRXJyXTo6dHJ1ZUpvaW4oJ1xcbicpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGRlbGV0ZSBwcm9jZXNzZXNbaWRdO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkVXBkYXRlKHsgcHJvcHM6IHsgaWQgfSwgbWV0YSwgY3VzdG9tIH0pIHtcbiAgY29uc3QgZG93bmxvYWRVUkwgPSBjdXN0b20uZG93bmxvYWRVUkwgfHwgbWV0YS5kb3dubG9hZFVSTCB8fCBjdXN0b20ubGFzdEluc3RhbGxVUkw7XG4gIGxldCB1cGRhdGVVUkwgPSBjdXN0b20udXBkYXRlVVJMIHx8IG1ldGEudXBkYXRlVVJMIHx8IGRvd25sb2FkVVJMO1xuICBpZiAoSVNfREVWICYmIHVwZGF0ZVVSTCkge1xuICAgIGlmIChtZXRhLmRldikge1xuICAgICAgY29uc3QgdXJscyA9IHVwZGF0ZVVSTC5zcGxpdCgnLycpO1xuICAgICAgdXBkYXRlVVJMID0gYGh0dHA6Ly8xMjcuMC4wLjE6JHttZXRhLmRldn0vJHt1cmxzW3VybHMubGVuZ3RoIC0gMV19YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlVVJMID0gbnVsbDtcbiAgICB9XG4gICAgLy8gY29uc29sZS5pbmZvKCdkb3dubG9hZFVwZGF0ZScsIGlkLCB1cGRhdGVVUkwpO1xuICB9XG4gIGlmICghdXBkYXRlVVJMKSB0aHJvdyBmYWxzZTtcbiAgbGV0IGVycm9yTWVzc2FnZTtcbiAgY29uc3QgdXBkYXRlID0ge307XG4gIGNvbnN0IHJlc3VsdCA9IHsgdXBkYXRlLCB3aGVyZTogeyBpZCB9IH07XG4gIGFubm91bmNlKGkxOG4oJ21zZ0NoZWNraW5nRm9yVXBkYXRlJykpO1xuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVxdWVzdCh1cGRhdGVVUkwsIHtcbiAgICAgIC8vIFRPRE86IGRvIGEgSEVBRCByZXF1ZXN0IGZpcnN0IHRvIGdldCBFVGFnIGhlYWRlciBhbmQgY29tcGFyZSB0byBzdG9yYWdlLm1vZFxuICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICBoZWFkZXJzOiB7IEFjY2VwdDogJ3RleHQveC11c2Vyc2NyaXB0LW1ldGEsKi8qJyB9LFxuICAgIH0pO1xuICAgIGlmIChJU19ERVYpIHJldHVybiBkYXRhO1xuICAgIGNvbnN0IHsgdmVyc2lvbiB9ID0gcGFyc2VNZXRhKGRhdGEpO1xuICAgIGlmIChjb21wYXJlVmVyc2lvbihtZXRhLnZlcnNpb24sIHZlcnNpb24pID49IDApIHtcbiAgICAgIGFubm91bmNlKGkxOG4oJ21zZ05vVXBkYXRlJyksIHsgY2hlY2tpbmc6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSBpZiAoIWRvd25sb2FkVVJMKSB7XG4gICAgICBhbm5vdW5jZShpMThuKCdtc2dOZXdWZXJzaW9uJyksIHsgY2hlY2tpbmc6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbm5vdW5jZShpMThuKCdtc2dVcGRhdGluZycpKTtcbiAgICAgIGVycm9yTWVzc2FnZSA9IGkxOG4oJ21zZ0Vycm9yRmV0Y2hpbmdTY3JpcHQnKTtcbiAgICAgIHJldHVybiAoYXdhaXQgcmVxdWVzdChkb3dubG9hZFVSTCwgeyBjYWNoZTogJ25vLWNhY2hlJyB9KSkuZGF0YTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICBhbm5vdW5jZShlcnJvck1lc3NhZ2UgfHwgaTE4bignbXNnRXJyb3JGZXRjaGluZ1VwZGF0ZUluZm8nKSwgeyBlcnJvciB9KTtcbiAgfVxuICB0aHJvdyB1cGRhdGU7XG4gIGZ1bmN0aW9uIGFubm91bmNlKG1lc3NhZ2UsIHsgZXJyb3IsIGNoZWNraW5nID0gIWVycm9yIH0gPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odXBkYXRlLCB7XG4gICAgICBtZXNzYWdlLFxuICAgICAgY2hlY2tpbmcsXG4gICAgICBlcnJvcjogZXJyb3IgPyBgJHtpMThuKCdnZW5lcmljRXJyb3InKX0gJHtlcnJvci5zdGF0dXN9LCAke2Vycm9yLnVybH1gIDogbnVsbCxcbiAgICAgIC8vIGBudWxsYCBpcyB0cmFuc2ZlcmFibGUgaW4gQ2hyb21lIHVubGlrZSBgdW5kZWZpbmVkYFxuICAgIH0pO1xuICAgIHNlbmRDbWQoQ01EX1NDUklQVF9VUERBVEUsIHJlc3VsdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FuTm90aWZ5KHNjcmlwdCkge1xuICBjb25zdCBhbGxvd2VkID0gZ2V0T3B0aW9uKCdub3RpZnlVcGRhdGVzJyk7XG4gIHJldHVybiBnZXRPcHRpb24oJ25vdGlmeVVwZGF0ZXNHbG9iYWwnKVxuICAgID8gYWxsb3dlZFxuICAgIDogc2NyaXB0LmNvbmZpZy5ub3RpZnlVcGRhdGVzID8/IGFsbG93ZWQ7XG59XG5cbmZ1bmN0aW9uIG5vdGlmeSh7XG4gIHNjcmlwdCxcbiAgdGV4dCxcbiAgb25DbGljayA9ICgpID0+IGNvbW1hbmRzLk9wZW5FZGl0b3Ioc2NyaXB0LnByb3BzLmlkKSxcbn0pIHtcbiAgY29tbWFuZHMuTm90aWZpY2F0aW9uKHtcbiAgICB0ZXh0LFxuICAgIC8vIEZGIGRvZXNuJ3Qgc2hvdyB0aGUgbmFtZSBvZiB0aGUgZXh0ZW5zaW9uIGluIHRoZSB0aXRsZSBvZiB0aGUgbm90aWZpY2F0aW9uXG4gICAgdGl0bGU6IElTX0ZJUkVGT1ggPyBgJHtpMThuKCd0aXRsZVNjcmlwdFVwZGF0ZWQnKX0gLSAke2kxOG4oJ2V4dE5hbWUnKX1gIDogJycsXG4gIH0sIHVuZGVmaW5lZCwge1xuICAgIG9uQ2xpY2ssXG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgaXNFbXB0eSwgc2VuZFRhYkNtZCB9IGZyb20gJyMvY29tbW9uJztcbmltcG9ydCB7IGZvckVhY2hFbnRyeSwgZm9yRWFjaEtleSwgb2JqZWN0U2V0IH0gZnJvbSAnIy9jb21tb24vb2JqZWN0JztcbmltcG9ydCB7IGdldFNjcmlwdCwgZ2V0VmFsdWVTdG9yZXNCeUlkcywgZHVtcFZhbHVlU3RvcmVzIH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgeyBjb21tYW5kcyB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbmNvbnN0IG9wZW5lcnMgPSB7fTsgLy8geyBzY3JpcHRJZDogeyB0YWJJZDogeyBmcmFtZUlkOiAxLCAuLi4gfSwgLi4uIH0gfVxubGV0IGNhY2hlID0ge307IC8vIHsgc2NyaXB0SWQ6IHsga2V5OiB7IGxhc3Q6IHZhbHVlLCB0YWJJZDogeyBmcmFtZUlkOiB2YWx1ZSB9IH0gfSB9XG5sZXQgdXBkYXRlU2NoZWR1bGVkO1xuXG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCB7XG4gIC8qKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59ICovXG4gIGFzeW5jIEdldFZhbHVlU3RvcmUoaWQpIHtcbiAgICBjb25zdCBzdG9yZXMgPSBhd2FpdCBnZXRWYWx1ZVN0b3Jlc0J5SWRzKFtpZF0pO1xuICAgIHJldHVybiBzdG9yZXNbaWRdIHx8IHt9O1xuICB9LFxuICAvKiogQHBhcmFtIHt7IHdoZXJlLCBzdG9yZSB9W119IGRhdGFcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gKi9cbiAgYXN5bmMgU2V0VmFsdWVTdG9yZXMoZGF0YSkge1xuICAgIC8vIFZhbHVlIHN0b3JlIHdpbGwgYmUgcmVwbGFjZWQgc29vbi5cbiAgICBjb25zdCBzdG9yZXMgPSBkYXRhLnJlZHVjZSgocmVzLCB7IHdoZXJlLCBzdG9yZSB9KSA9PiB7XG4gICAgICBjb25zdCBpZCA9IHdoZXJlLmlkIHx8IGdldFNjcmlwdCh3aGVyZSk/LnByb3BzLmlkO1xuICAgICAgaWYgKGlkKSByZXNbaWRdID0gc3RvcmU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0sIHt9KTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBkdW1wVmFsdWVTdG9yZXMoc3RvcmVzKSxcbiAgICAgIGJyb2FkY2FzdFZhbHVlU3RvcmVzKGdyb3VwU3RvcmVzQnlGcmFtZShzdG9yZXMpKSxcbiAgICBdKTtcbiAgfSxcbiAgLyoqIEByZXR1cm4ge3ZvaWR9ICovXG4gIFVwZGF0ZVZhbHVlKHsgaWQsIGtleSwgdmFsdWUgPSBudWxsIH0sIHNyYykge1xuICAgIG9iamVjdFNldChjYWNoZSwgW2lkLCBrZXksICdsYXN0J10sIHZhbHVlKTtcbiAgICBvYmplY3RTZXQoY2FjaGUsIFtpZCwga2V5LCBzcmMudGFiLmlkLCBzcmMuZnJhbWVJZF0sIHZhbHVlKTtcbiAgICB1cGRhdGVMYXRlcigpO1xuICB9LFxufSk7XG5cbmJyb3dzZXIudGFicy5vblJlbW92ZWQuYWRkTGlzdGVuZXIocmVzZXRWYWx1ZU9wZW5lcik7XG5icm93c2VyLnRhYnMub25SZXBsYWNlZC5hZGRMaXN0ZW5lcigoYWRkZWRJZCwgcmVtb3ZlZElkKSA9PiByZXNldFZhbHVlT3BlbmVyKHJlbW92ZWRJZCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRWYWx1ZU9wZW5lcih0YWJJZCkge1xuICBvcGVuZXJzOjpmb3JFYWNoRW50cnkoKFtpZCwgb3BlbmVyVGFic10pID0+IHtcbiAgICBpZiAodGFiSWQgaW4gb3BlbmVyVGFicykge1xuICAgICAgZGVsZXRlIG9wZW5lclRhYnNbdGFiSWRdO1xuICAgICAgaWYgKGlzRW1wdHkob3BlbmVyVGFicykpIGRlbGV0ZSBvcGVuZXJzW2lkXTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVmFsdWVPcGVuZXIodGFiSWQsIGZyYW1lSWQsIHNjcmlwdElkcykge1xuICBzY3JpcHRJZHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICBvYmplY3RTZXQob3BlbmVycywgW2lkLCB0YWJJZCwgZnJhbWVJZF0sIDEpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTGF0ZXIoKSB7XG4gIHdoaWxlICghdXBkYXRlU2NoZWR1bGVkKSB7XG4gICAgdXBkYXRlU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBhd2FpdCAwO1xuICAgIGNvbnN0IGN1cnJlbnRDYWNoZSA9IGNhY2hlO1xuICAgIGNhY2hlID0ge307XG4gICAgYXdhaXQgZG9VcGRhdGUoY3VycmVudENhY2hlKTtcbiAgICB1cGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBpZiAoaXNFbXB0eShjYWNoZSkpIGJyZWFrO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRvVXBkYXRlKGN1cnJlbnRDYWNoZSkge1xuICBjb25zdCBpZHMgPSBPYmplY3Qua2V5cyhjdXJyZW50Q2FjaGUpO1xuICBjb25zdCB2YWx1ZVN0b3JlcyA9IGF3YWl0IGdldFZhbHVlU3RvcmVzQnlJZHMoaWRzKTtcbiAgaWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgY3VycmVudENhY2hlW2lkXTo6Zm9yRWFjaEVudHJ5KChba2V5LCB7IGxhc3QgfV0pID0+IHtcbiAgICAgIG9iamVjdFNldCh2YWx1ZVN0b3JlcywgW2lkLCBrZXldLCBsYXN0IHx8IHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH0pO1xuICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZHVtcFZhbHVlU3RvcmVzKHZhbHVlU3RvcmVzKSxcbiAgICBicm9hZGNhc3RWYWx1ZVN0b3Jlcyhncm91cENhY2hlQnlGcmFtZShjdXJyZW50Q2FjaGUpLCB7IHBhcnRpYWw6IHRydWUgfSksXG4gIF0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBicm9hZGNhc3RWYWx1ZVN0b3Jlcyh0YWJGcmFtZURhdGEsIHsgcGFydGlhbCB9ID0ge30pIHtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgZm9yIChjb25zdCBbdGFiSWQsIGZyYW1lc10gb2YgT2JqZWN0LmVudHJpZXModGFiRnJhbWVEYXRhKSkge1xuICAgIGZvciAoY29uc3QgW2ZyYW1lSWQsIGZyYW1lRGF0YV0gb2YgT2JqZWN0LmVudHJpZXMoZnJhbWVzKSkge1xuICAgICAgaWYgKCFpc0VtcHR5KGZyYW1lRGF0YSkpIHtcbiAgICAgICAgaWYgKHBhcnRpYWwpIGZyYW1lRGF0YS5wYXJ0aWFsID0gdHJ1ZTtcbiAgICAgICAgdGFza3MucHVzaChzZW5kVGFiQ21kKCt0YWJJZCwgJ1VwZGF0ZWRWYWx1ZXMnLCBmcmFtZURhdGEsIHsgZnJhbWVJZDogK2ZyYW1lSWQgfSkpO1xuICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAyMCkgYXdhaXQgUHJvbWlzZS5hbGwodGFza3Muc3BsaWNlKDApKTsgLy8gdGhyb3R0bGluZ1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcyk7XG59XG5cbi8vIFJldHVybnMgcGVyIHRhYi9mcmFtZSBkYXRhIHdpdGggb25seSB0aGUgY2hhbmdlZCB2YWx1ZXNcbmZ1bmN0aW9uIGdyb3VwQ2FjaGVCeUZyYW1lKGNhY2hlRGF0YSkge1xuICBjb25zdCB0b1NlbmQgPSB7fTtcbiAgY2FjaGVEYXRhOjpmb3JFYWNoRW50cnkoKFtpZCwgc2NyaXB0RGF0YV0pID0+IHtcbiAgICBjb25zdCBkYXRhRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHNjcmlwdERhdGEpO1xuICAgIG9wZW5lcnNbaWRdOjpmb3JFYWNoRW50cnkoKFt0YWJJZCwgZnJhbWVzXSkgPT4ge1xuICAgICAgZnJhbWVzOjpmb3JFYWNoS2V5KChmcmFtZUlkKSA9PiB7XG4gICAgICAgIGRhdGFFbnRyaWVzLmZvckVhY2goKFtrZXksIGhpc3RvcnldKSA9PiB7XG4gICAgICAgICAgLy8gU2tpcHBpbmcgdGhpcyBmcmFtZSBpZiBpdHMgbGFzdCByZWNvcmRlZCB2YWx1ZSBpcyBpZGVudGljYWxcbiAgICAgICAgICBpZiAoaGlzdG9yeS5sYXN0ICE9PSBoaXN0b3J5W3RhYklkXT8uW2ZyYW1lSWRdKSB7XG4gICAgICAgICAgICBvYmplY3RTZXQodG9TZW5kLCBbdGFiSWQsIGZyYW1lSWQsIGlkLCBrZXldLCBoaXN0b3J5Lmxhc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB0b1NlbmQ7XG59XG5cbi8vIFJldHVybnMgcGVyIHRhYi9mcmFtZSBkYXRhXG5mdW5jdGlvbiBncm91cFN0b3Jlc0J5RnJhbWUoc3RvcmVzKSB7XG4gIGNvbnN0IHRvU2VuZCA9IHt9O1xuICBzdG9yZXM6OmZvckVhY2hFbnRyeSgoW2lkLCBzdG9yZV0pID0+IHtcbiAgICBvcGVuZXJzW2lkXTo6Zm9yRWFjaEVudHJ5KChbdGFiSWQsIGZyYW1lc10pID0+IHtcbiAgICAgIGZyYW1lczo6Zm9yRWFjaEtleShmcmFtZUlkID0+IHtcbiAgICAgICAgb2JqZWN0U2V0KHRvU2VuZCwgW3RhYklkLCBmcmFtZUlkLCBpZF0sIHN0b3JlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHRvU2VuZDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGFsbG93ZWQpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIHRoaXMuYWxsb3dlZCA9IGFsbG93ZWQ7XG4gIH1cblxuICBjaGVja1R5cGUodHlwZSkge1xuICAgIGlmICh0aGlzLmFsbG93ZWQgJiYgIXRoaXMuYWxsb3dlZC5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGV2ZW50IHR5cGU6ICR7dHlwZX1gKTtcbiAgICB9XG4gIH1cblxuICBvbih0eXBlLCBoYW5kbGUpIHtcbiAgICB0aGlzLmNoZWNrVHlwZSh0eXBlKTtcbiAgICBjb25zdCB7IGV2ZW50cyB9ID0gdGhpcztcbiAgICBsZXQgaGFuZGxlcnMgPSBldmVudHNbdHlwZV07XG4gICAgaWYgKCFoYW5kbGVycykge1xuICAgICAgaGFuZGxlcnMgPSBbXTtcbiAgICAgIGV2ZW50c1t0eXBlXSA9IGhhbmRsZXJzO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gdGhpcy5vZmYodHlwZSwgaGFuZGxlKTtcbiAgfVxuXG4gIG9mZih0eXBlLCBoYW5kbGUpIHtcbiAgICB0aGlzLmNoZWNrVHlwZSh0eXBlKTtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuZXZlbnRzW3R5cGVdO1xuICAgIGlmIChoYW5kbGVycykge1xuICAgICAgY29uc3QgaSA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlKTtcbiAgICAgIGlmIChpID49IDApIGhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICBlbWl0KHR5cGUsIGRhdGEpIHtcbiAgICB0aGlzLmNoZWNrVHlwZSh0eXBlKTtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuZXZlbnRzW3R5cGVdO1xuICAgIGlmIChoYW5kbGVycykge1xuICAgICAgY29uc3QgZXZ0ID0ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBkYXRhLFxuICAgICAgICBkZWZhdWx0UHJldmVudGVkOiBmYWxzZSxcbiAgICAgICAgcHJldmVudERlZmF1bHQoKSB7XG4gICAgICAgICAgZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGhhbmRsZXJzLnNvbWUoKGhhbmRsZSkgPT4ge1xuICAgICAgICBoYW5kbGUoZXZ0KTtcbiAgICAgICAgcmV0dXJuIGV2dC5kZWZhdWx0UHJldmVudGVkO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdGxkanMgZnJvbSAndGxkanMnO1xuLy8gaW1wb3J0IHsgZnJvbVVzZXJTZXR0aW5ncyB9IGZyb20gJ3RsZGpzJztcbi8vIGltcG9ydCBUcmllIGZyb20gJ3RsZGpzL2xpYi9zdWZmaXgtdHJpZSc7XG4vLyBpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnIy9jb21tb24nO1xuXG4vLyBsZXQgdGxkanM7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBpbml0VExEKHJlbW90ZSkge1xuLy8gICAvLyBUTEQgcnVsZXMgYXJlIHRvbyBsYXJnZSB0byBiZSBwYWNrZWQsIGRvd25sb2FkIHRoZW0gYXQgcnVudGltZS5cbi8vICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vdmlvbGVudG1vbmtleS50b3Avc3RhdGljL3RsZC1ydWxlcy5qc29uJztcbi8vICAgY29uc3Qga2V5ID0gJ2RhdDp0bGRSdWxlcyc7XG4vLyAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoa2V5KVxuLy8gICAudGhlbigoeyBba2V5XTogdGxkUnVsZXMgfSkgPT4ge1xuLy8gICAgIGlmICh0bGRSdWxlcykgcmV0dXJuIHRsZFJ1bGVzO1xuLy8gICAgIGlmICghcmVtb3RlKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ2lnbm9yZSBUTEQnKTtcbi8vICAgICByZXR1cm4gcmVxdWVzdCh1cmwsIHsgcmVzcG9uc2VUeXBlOiAnanNvbicgfSlcbi8vICAgICAudGhlbigoeyBkYXRhOiBydWxlcyB9KSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmluZm8oJ0Rvd25sb2FkZWQgcHVibGljIHN1ZmZpeCBkYXRhJyk7XG4vLyAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IFtrZXldOiBydWxlcyB9KVxuLy8gICAgICAgLnRoZW4oKCkgPT4gcnVsZXMpO1xuLy8gICAgIH0pO1xuLy8gICB9KVxuLy8gICAudGhlbih0bGRSdWxlcyA9PiB7XG4vLyAgICAgY29uc29sZS5pbmZvKCdJbml0aWFsaXplZCBUTEQnKTtcbi8vICAgICB0bGRqcyA9IGZyb21Vc2VyU2V0dGluZ3MoeyBydWxlczogVHJpZS5mcm9tSnNvbih0bGRSdWxlcykgfSk7XG4vLyAgIH0pXG4vLyAgIC5jYXRjaChlcnIgPT4ge1xuLy8gICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5lcnJvcihlcnIpO1xuLy8gICAgIGNvbnNvbGUuaW5mbygnRmFpbGVkIGluaXRpYWxpemluZyBUTEQnKTtcbi8vICAgfSk7XG4vLyB9XG5leHBvcnQgZnVuY3Rpb24gaW5pdFRMRCgpIHt9XG5cbmZ1bmN0aW9uIGV4cG9ydE1ldGhvZChrZXkpIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB0bGRqcyAmJiB0bGRqc1trZXldKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkeSgpIHtcbiAgcmV0dXJuICEhdGxkanM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXREb21haW4gPSBleHBvcnRNZXRob2QoJ2dldERvbWFpbicpO1xuZXhwb3J0IGNvbnN0IGdldFN1YmRvbWFpbiA9IGV4cG9ydE1ldGhvZCgnZ2V0U3ViZG9tYWluJyk7XG5leHBvcnQgY29uc3QgZ2V0UHVibGljU3VmZml4ID0gZXhwb3J0TWV0aG9kKCdnZXRQdWJsaWNTdWZmaXgnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=