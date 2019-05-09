(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mini-iframe-rpc", [], factory);
	else if(typeof exports === 'object')
		exports["mini-iframe-rpc"] = factory();
	else
		root["mini-iframe-rpc"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mini-iframe-rpc.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mdn-polyfills/Object.assign.js":
/*!*****************************************************!*\
  !*** ./node_modules/mdn-polyfills/Object.assign.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

"function"!=typeof Object.assign&&(Object.assign=function(n){if(null==n)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(n),t=1;t<arguments.length;t++){var e=arguments[t];if(null!=e)for(var o in e)e.hasOwnProperty(o)&&(r[o]=e[o])}return r});


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/errors/evaluation-error.ts":
/*!****************************************!*\
  !*** ./src/errors/evaluation-error.ts ***!
  \****************************************/
/*! exports provided: EvaluationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationError", function() { return EvaluationError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _remote_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-error */ "./src/errors/remote-error.ts");


var EvaluationError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EvaluationError, _super);
    function EvaluationError(error) {
        var _this = _super.call(this, error.cause) || this;
        _this.name = EvaluationError.name; // stack traces display correctly now         
        return _this;
    }
    return EvaluationError;
}(_remote_error__WEBPACK_IMPORTED_MODULE_1__["RemoteError"]));



/***/ }),

/***/ "./src/errors/index.ts":
/*!*****************************!*\
  !*** ./src/errors/index.ts ***!
  \*****************************/
/*! exports provided: MiniIframeError, ProcedureNotFoundError, EvaluationError, TimeoutError, isError, SendMessageError, RemoteError, InvocationError, serializeRemoteError, deserializeRemoteError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeRemoteError", function() { return serializeRemoteError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeRemoteError", function() { return deserializeRemoteError; });
/* harmony import */ var _evaluation_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evaluation-error */ "./src/errors/evaluation-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EvaluationError", function() { return _evaluation_error__WEBPACK_IMPORTED_MODULE_0__["EvaluationError"]; });

/* harmony import */ var _invocation_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invocation-error */ "./src/errors/invocation-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvocationError", function() { return _invocation_error__WEBPACK_IMPORTED_MODULE_1__["InvocationError"]; });

/* harmony import */ var _is_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-error */ "./src/errors/is-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _is_error__WEBPACK_IMPORTED_MODULE_2__["isError"]; });

/* harmony import */ var _mini_iframe_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mini-iframe-error */ "./src/errors/mini-iframe-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniIframeError", function() { return _mini_iframe_error__WEBPACK_IMPORTED_MODULE_3__["MiniIframeError"]; });

/* harmony import */ var _procedure_not_found_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./procedure-not-found-error */ "./src/errors/procedure-not-found-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProcedureNotFoundError", function() { return _procedure_not_found_error__WEBPACK_IMPORTED_MODULE_4__["ProcedureNotFoundError"]; });

/* harmony import */ var _remote_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remote-error */ "./src/errors/remote-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteError", function() { return _remote_error__WEBPACK_IMPORTED_MODULE_5__["RemoteError"]; });

/* harmony import */ var _send_message_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-message-error */ "./src/errors/send-message-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SendMessageError", function() { return _send_message_error__WEBPACK_IMPORTED_MODULE_6__["SendMessageError"]; });

/* harmony import */ var _timeout_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeout-error */ "./src/errors/timeout-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _timeout_error__WEBPACK_IMPORTED_MODULE_7__["TimeoutError"]; });










var remoteErrorClasses = [
    _procedure_not_found_error__WEBPACK_IMPORTED_MODULE_4__["ProcedureNotFoundError"],
    _evaluation_error__WEBPACK_IMPORTED_MODULE_0__["EvaluationError"],
    _send_message_error__WEBPACK_IMPORTED_MODULE_6__["SendMessageError"]
].reduce(function (obj, constr) {
    obj[constr.name] = constr;
    return obj;
}, {});
var serializeRemoteError = function (cause, remoteExceptionName) {
    var convert = function (err) {
        var errJSON = Object(_remote_error__WEBPACK_IMPORTED_MODULE_5__["errorToJSON"])(err);
        if (remoteExceptionName) {
            errJSON.name = remoteExceptionName;
        }
        return errJSON;
    };
    if (cause instanceof _remote_error__WEBPACK_IMPORTED_MODULE_5__["RemoteError"]) {
        // if cause is already a remoteError, return as is
        return convert(cause);
    }
    // for both Error and String type causes, create a new RemoteError 
    return convert(new _remote_error__WEBPACK_IMPORTED_MODULE_5__["RemoteError"](cause));
};
// tslint:disable-next-line:no-any
var deserializeRemoteError = function (error) {
    var constr = remoteErrorClasses[error.name] || _remote_error__WEBPACK_IMPORTED_MODULE_5__["RemoteError"];
    return new constr(error);
};


/***/ }),

/***/ "./src/errors/invocation-error.ts":
/*!****************************************!*\
  !*** ./src/errors/invocation-error.ts ***!
  \****************************************/
/*! exports provided: InvocationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvocationError", function() { return InvocationError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-error */ "./src/errors/is-error.ts");
/* harmony import */ var _mini_iframe_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mini-iframe-error */ "./src/errors/mini-iframe-error.ts");



// tslint:disable-next-line:no-any
var makeMessage = function (procedureName, cause, previousRejectReasons) {
    var message = "Error invoking remote procedure '" + procedureName + "'.";
    if (Object(_is_error__WEBPACK_IMPORTED_MODULE_1__["isError"])(cause)) {
        message += " " + cause.name + ": " + cause.message + ".";
    }
    else if (cause) {
        // tslint:disable-next-line:no-unsafe-any
        message += " Reason: " + cause.toString();
    }
    if (previousRejectReasons && previousRejectReasons.length > 0) {
        var plural = previousRejectReasons.length > 1 ? 's' : '';
        message += " " + previousRejectReasons.length + " additional rejection" + plural + " from retried attempt" + plural + ".";
    }
    return message;
};
var InvocationError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InvocationError, _super);
    // tslint:disable-next-line:no-any
    function InvocationError(procedureName, cause, previousRejectReasons) {
        var _this = _super.call(this, makeMessage(procedureName, cause, previousRejectReasons)) || this;
        _this.name = InvocationError.name; // stack traces display correctly now   
        _this.procedureName = procedureName;
        _this.cause = cause;
        _this.previousRejectReasons = previousRejectReasons;
        return _this;
    }
    return InvocationError;
}(_mini_iframe_error__WEBPACK_IMPORTED_MODULE_2__["MiniIframeError"]));



/***/ }),

/***/ "./src/errors/is-error.ts":
/*!********************************!*\
  !*** ./src/errors/is-error.ts ***!
  \********************************/
/*! exports provided: isError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
// the wonders of Javascript: Error detection https://stackoverflow.com/a/45496068
// tslint:disable-next-line:no-any
var isError = function (rejectOrError) {
    var isErrorValue = (rejectOrError !== null && rejectOrError !== undefined) &&
        ((rejectOrError instanceof Error) ||
            (rejectOrError instanceof DOMException) ||
            // DataCloneErrors must be identified as such otherwise, we can't even send errors
            // when response cant be serialized! This is required for MS Edge support.
            (rejectOrError.name === 'DataCloneError') ||
            ((rejectOrError.message && typeof rejectOrError.message === 'string') &&
                (rejectOrError.stack && typeof rejectOrError.stack === 'string')));
    return isErrorValue;
};


/***/ }),

/***/ "./src/errors/mini-iframe-error.ts":
/*!*****************************************!*\
  !*** ./src/errors/mini-iframe-error.ts ***!
  \*****************************************/
/*! exports provided: MiniIframeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniIframeError", function() { return MiniIframeError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var MiniIframeError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MiniIframeError, _super);
    // tslint:disable-next-line:no-any
    function MiniIframeError(message, state) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.timestamp = +(new Date());
        if (state) {
            Object.assign(_this, state);
        }
        // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
        // tslint:disable-next-line:no-unsafe-any
        Object.setPrototypeOf(_this, _newTarget.prototype); // restore prototype chain
        _this.name = MiniIframeError.name; // stack traces display correctly now 
        return _this;
    }
    return MiniIframeError;
}(Error));



/***/ }),

/***/ "./src/errors/procedure-not-found-error.ts":
/*!*************************************************!*\
  !*** ./src/errors/procedure-not-found-error.ts ***!
  \*************************************************/
/*! exports provided: ProcedureNotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureNotFoundError", function() { return ProcedureNotFoundError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _remote_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-error */ "./src/errors/remote-error.ts");


var ProcedureNotFoundError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProcedureNotFoundError, _super);
    function ProcedureNotFoundError(state) {
        var _this = _super.call(this, "Remote procedure '" + state.procedureName + "' not registered in remote RPC instance.") || this;
        _this.procedureName = "unknown";
        if (state.procedureName) {
            _this.procedureName = state.procedureName;
        }
        _this.name = ProcedureNotFoundError.name; // stack traces display correctly now         
        return _this;
    }
    return ProcedureNotFoundError;
}(_remote_error__WEBPACK_IMPORTED_MODULE_1__["RemoteError"]));



/***/ }),

/***/ "./src/errors/remote-error.ts":
/*!************************************!*\
  !*** ./src/errors/remote-error.ts ***!
  \************************************/
/*! exports provided: errorToJSON, RemoteError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorToJSON", function() { return errorToJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteError", function() { return RemoteError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mini_iframe_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mini-iframe-error */ "./src/errors/mini-iframe-error.ts");


function errorToJSON(err) {
    // message, name, stack are not ennumerable, so we must explicitly get them.
    var message = err.message, name = err.name, stack = err.stack;
    return Object.assign({ message: message, stack: stack, name: name }, err);
}
var causeToMessage = function (cause) {
    if (typeof cause === 'string') {
        return cause;
    }
    else {
        return "" + cause.message;
    }
};
var RemoteError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RemoteError, _super);
    function RemoteError(cause) {
        var _this = _super.call(this, causeToMessage(cause)) || this;
        _this.cause = (typeof cause === 'string') ? cause : errorToJSON(cause);
        _this.name = RemoteError.name; // stack traces display correctly now         
        return _this;
    }
    return RemoteError;
}(_mini_iframe_error__WEBPACK_IMPORTED_MODULE_1__["MiniIframeError"]));



/***/ }),

/***/ "./src/errors/send-message-error.ts":
/*!******************************************!*\
  !*** ./src/errors/send-message-error.ts ***!
  \******************************************/
/*! exports provided: SendMessageError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageError", function() { return SendMessageError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _remote_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-error */ "./src/errors/remote-error.ts");


var SendMessageError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SendMessageError, _super);
    function SendMessageError(error) {
        var _this = _super.call(this, error.cause) || this;
        _this.name = SendMessageError.name; // stack traces display correctly now         
        return _this;
    }
    return SendMessageError;
}(_remote_error__WEBPACK_IMPORTED_MODULE_1__["RemoteError"]));



/***/ }),

/***/ "./src/errors/timeout-error.ts":
/*!*************************************!*\
  !*** ./src/errors/timeout-error.ts ***!
  \*************************************/
/*! exports provided: TimeoutError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mini_iframe_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mini-iframe-error */ "./src/errors/mini-iframe-error.ts");


var TimeoutError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimeoutError, _super);
    function TimeoutError(state) {
        var _this = _super.call(this, "Timeout after " + state.timeoutMilliSeconds + " ms.", state) || this;
        _this.timeoutMilliSeconds = 0;
        _this.name = TimeoutError.name; // stack traces display correctly now                 
        return _this;
    }
    return TimeoutError;
}(_mini_iframe_error__WEBPACK_IMPORTED_MODULE_1__["MiniIframeError"]));



/***/ }),

/***/ "./src/mini-iframe-rpc.ts":
/*!********************************!*\
  !*** ./src/mini-iframe-rpc.ts ***!
  \********************************/
/*! exports provided: ResultCache, MiniIframeRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniIframeRPC", function() { return MiniIframeRPC; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var mdn_polyfills_Object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdn-polyfills/Object.assign */ "./node_modules/mdn-polyfills/Object.assign.js");
/* harmony import */ var mdn_polyfills_Object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./src/errors/index.ts");
/* harmony import */ var _result_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./result-cache */ "./src/result-cache.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultCache", function() { return _result_cache__WEBPACK_IMPORTED_MODULE_3__["ResultCache"]; });

/* harmony import */ var _transport_post_message_transport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transport/post-message-transport */ "./src/transport/post-message-transport.ts");
/* tslint:disable no-any no-unsafe-any */




 // so unit tests can access ResponseCache

var RANDOM_BASE = 36;
var CALLID_LENGTH = 8;
var DEFAULT_INVOCATION_OPTIONS = {
    timeout: 100,
    retryLimit: 2,
    retryAllFailures: false
};
var MiniIframeRPC = /** @class */ (function () {
    function MiniIframeRPC(initParameters) {
        var _this = this;
        this.callbacks = {};
        this.registeredProcedures = {};
        this.recv = function (messageBody, messageSource, messageOrigin) {
            _this.internalEventCallback("onReceive", messageBody, messageSource, messageOrigin);
            if ('method' in messageBody) {
                _this.handleRequest(messageBody, messageSource, messageOrigin);
            }
            else {
                _this.handleResponse(messageBody);
            }
        };
        this.config = {
            windowRef: initParameters && initParameters.windowRef || window,
            originWhitelist: initParameters && initParameters.originWhitelist || [],
            defaultInvocationOptions: Object.assign({}, DEFAULT_INVOCATION_OPTIONS, initParameters && initParameters.defaultInvocationOptions || {}),
            eventCallbacks: initParameters && initParameters.eventCallbacks || {},
            resultCacheCapacity: initParameters && typeof initParameters.resultCacheCapacity === 'number' ? initParameters.resultCacheCapacity : _result_cache__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_RESULT_CACHE_CAPACITY"]
        };
        this.resultCache = new _result_cache__WEBPACK_IMPORTED_MODULE_3__["ResultCache"]({
            capacity: this.config.resultCacheCapacity,
            evictionCallback: function (id, result) {
                _this.internalEventCallback("onResultCacheEviction", id, result);
            }
        });
        this.transport = new _transport_post_message_transport__WEBPACK_IMPORTED_MODULE_4__["PostMessageTransport"](this.config.windowRef, this.recv, { 'originWhitelist': this.config.originWhitelist });
    }
    MiniIframeRPC.prototype.register = function (procedureName, implementation) {
        this.internalEventCallback("onRegister", procedureName, implementation);
        if (implementation) {
            this.registeredProcedures[procedureName] = implementation;
        }
        else {
            delete this.registeredProcedures[procedureName];
        }
    };
    MiniIframeRPC.prototype.invoke = function (targetWindow, targetOrigin, method, params, invocationOptions) {
        var options = Object.assign({}, this.config.defaultInvocationOptions, invocationOptions || {});
        var id = this.getNextCallId();
        var requestMessageBody = {
            id: id,
            method: method,
            params: (params || [])
        };
        return this.requestWithRetry(targetWindow, targetOrigin, requestMessageBody, options);
    };
    MiniIframeRPC.prototype.close = function () {
        this.internalEventCallback("onClose");
        this.transport.close();
    };
    MiniIframeRPC.prototype.requestWithRetry = function (targetWindow, targetOrigin, requestMessageBody, options) {
        var _this = this;
        var requestCount = 0;
        var failureCount = 0;
        var finalResolve = function () { return void 0; };
        var finalReject = function () { return void 0; };
        var completed = false;
        var previousRejectReasons = [];
        var isErrorRetriable = function (error) {
            if (options.timeout <= 0 || options.retryLimit < 1) {
                return false;
            }
            return options.retryAllFailures || (error instanceof _errors__WEBPACK_IMPORTED_MODULE_2__["TimeoutError"]);
        };
        var makeRequest = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.sendMessage(targetWindow, targetOrigin, requestMessageBody).then(function () { return new Promise(function (resolve, reject) {
                        _this.callbacks[requestMessageBody.id] = { resolve: resolve, reject: reject };
                    }); })];
            });
        }); };
        var handleResolve = function (result) {
            // first successful request immediately resolves the invocation promise
            completed = true;
            finalResolve(result);
        };
        var handleReject = function (reason) {
            failureCount += 1;
            // If request has since been completed, do nothing
            // Retry request or fail permanently if no outstanding requests still in flight
            if (!completed && failureCount === requestCount) {
                if (isErrorRetriable(reason) && requestCount < (options.retryLimit + 1)) {
                    _this.internalEventCallback("onRequestRetry", reason, previousRejectReasons, requestMessageBody);
                    previousRejectReasons.push(reason);
                    makeAttempt();
                    // If error is non-retriable and there are no unanswered requests, give up.
                }
                else {
                    completed = true;
                    finalReject(new _errors__WEBPACK_IMPORTED_MODULE_2__["InvocationError"](requestMessageBody.method, reason, previousRejectReasons));
                }
            }
            // if there are still outstanding requests, wait for them to succeed or fail.
        };
        var makeAttempt = function () {
            requestCount += 1;
            var responsePromise = makeRequest();
            if (options.timeout > 0) {
                responsePromise = _this.timeboxPromise(responsePromise, options.timeout);
            }
            responsePromise.then(handleResolve, handleReject);
        };
        var returnValue = new Promise(function (resolve, reject) {
            finalResolve = resolve;
            finalReject = reject;
        });
        // initial attempt
        makeAttempt();
        return returnValue;
    };
    MiniIframeRPC.prototype.internalEventCallback = function (internalEventCallback) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var cb = this.config.eventCallbacks[internalEventCallback];
        if (cb) {
            cb.apply(this, args);
        }
    };
    MiniIframeRPC.prototype.timeboxPromise = function (originalPromise, timeoutMilliSeconds) {
        var _this = this;
        return Promise.race([
            originalPromise,
            new Promise(function (_resolve, reject) {
                _this.config.windowRef.setTimeout(function () { return reject(new _errors__WEBPACK_IMPORTED_MODULE_2__["TimeoutError"]({ timeoutMilliSeconds: timeoutMilliSeconds })); }, timeoutMilliSeconds);
            })
        ]);
    };
    MiniIframeRPC.prototype.getNextCallId = function () {
        var randomId = null;
        while (!randomId || this.callbacks[randomId]) {
            randomId = "cb" + Math.random().toString(RANDOM_BASE).replace(/[^a-z]+/g, '').substr(0, CALLID_LENGTH);
        }
        return randomId;
    };
    MiniIframeRPC.prototype.sendMessage = function (targetWindow, targetOrigin, messageBody) {
        this.internalEventCallback("onSend", messageBody, targetWindow, targetOrigin);
        return this.transport.send({ targetWindow: targetWindow, targetOrigin: targetOrigin }, messageBody);
    };
    MiniIframeRPC.prototype.isArray = function (arg) {
        // Array.isArray doesn't work in IE8 and doesn't necessarily work cross-window
        // from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
    MiniIframeRPC.prototype.unpackParams = function (params) {
        if (this.isArray(params)) {
            return params;
        }
        if (params === undefined) {
            return [];
        }
        return [params];
    };
    MiniIframeRPC.prototype.handleRequest = function (requestMessageBody, messageSource, messageOrigin) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, method, params, responseOrigin, sendError, getResult;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = requestMessageBody.id;
                method = requestMessageBody.method;
                params = this.unpackParams(requestMessageBody.params);
                responseOrigin = !messageOrigin || messageOrigin === "null" ? null : messageOrigin;
                sendError = function (rejectOrError, exceptionName) {
                    var sendingError = Object(_errors__WEBPACK_IMPORTED_MODULE_2__["isError"])(rejectOrError);
                    return _this.sendMessage(messageSource, responseOrigin, {
                        id: id,
                        isErrorInstance: sendingError,
                        error: sendingError ? Object(_errors__WEBPACK_IMPORTED_MODULE_2__["serializeRemoteError"])(rejectOrError, exceptionName) : rejectOrError
                    });
                };
                getResult = function () {
                    if (_this.resultCache.hasCachedResult(id)) {
                        return _this.resultCache.getCachedResult(id);
                    }
                    var resultPromise = new Promise(function (resolve) {
                        resolve(_this.registeredProcedures[method].apply({ requestMessageBody: requestMessageBody, messageSource: messageSource, messageOrigin: messageOrigin }, params));
                    });
                    _this.resultCache.setCachedResult(id, resultPromise);
                    return resultPromise;
                };
                if (this.registeredProcedures[method]) {
                    getResult()
                        .then(function (result) { return _this.sendMessage(messageSource, responseOrigin, {
                        id: id,
                        result: result
                    }).catch(function (error) { return sendError(error, _errors__WEBPACK_IMPORTED_MODULE_2__["SendMessageError"].name); }); }, function (error) { return sendError(error, _errors__WEBPACK_IMPORTED_MODULE_2__["EvaluationError"].name); });
                }
                else {
                    sendError(new _errors__WEBPACK_IMPORTED_MODULE_2__["ProcedureNotFoundError"]({ procedureName: method }));
                }
                return [2 /*return*/];
            });
        });
    };
    MiniIframeRPC.prototype.handleResponse = function (messageBody) {
        var callbackFunctions = this.callbacks[messageBody.id];
        if (callbackFunctions) {
            delete this.callbacks[messageBody.id];
            if ('isErrorInstance' in messageBody) {
                var errorObject = messageBody.isErrorInstance ? Object(_errors__WEBPACK_IMPORTED_MODULE_2__["deserializeRemoteError"])(messageBody.error) : messageBody.error;
                callbackFunctions.reject(errorObject);
            }
            else if ('result' in messageBody) {
                callbackFunctions.resolve(messageBody.result);
            }
        }
        else {
            this.internalEventCallback("onUnexpectedResponse", messageBody);
        }
    };
    return MiniIframeRPC;
}()); // end of class



/***/ }),

/***/ "./src/result-cache.ts":
/*!*****************************!*\
  !*** ./src/result-cache.ts ***!
  \*****************************/
/*! exports provided: DEFAULT_RESULT_CACHE_CAPACITY, ResultCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESULT_CACHE_CAPACITY", function() { return DEFAULT_RESULT_CACHE_CAPACITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultCache", function() { return ResultCache; });
;
var DEFAULT_RESULT_CACHE_CAPACITY = 200;
var DEFAULT_PARAMETERS = {
    capacity: DEFAULT_RESULT_CACHE_CAPACITY,
};
var ResultCache = /** @class */ (function () {
    function ResultCache(config) {
        // tslint:disable-next-line:no-any
        this.ids = [];
        // tslint:disable-next-line:no-any
        this.results = {};
        this.config = Object.assign({}, DEFAULT_PARAMETERS, config || {});
    }
    ResultCache.prototype.hasCachedResult = function (id) {
        return this.results.hasOwnProperty(id);
    };
    ResultCache.prototype.getCachedResult = function (id) {
        return this.results[id];
    };
    // tslint:disable-next-line:no-any
    ResultCache.prototype.setCachedResult = function (id, result) {
        if (this.hasCachedResult(id)) {
            this.ids = this.ids.filter(function (c) { return c !== id; });
        }
        this.ids.unshift(id);
        this.results[id] = result;
        if (this.config.capacity >= 0) {
            this.enforceCapacity();
        }
    };
    ResultCache.prototype.enforceCapacity = function () {
        for (var size = this.ids.length; size > this.config.capacity; size--) {
            var id = this.ids.pop();
            var result = this.results[id];
            delete this.results[id];
            if (this.config.evictionCallback) {
                this.config.evictionCallback(id, result);
            }
        }
    };
    return ResultCache;
}());



/***/ }),

/***/ "./src/transport/post-message-transport.ts":
/*!*************************************************!*\
  !*** ./src/transport/post-message-transport.ts ***!
  \*************************************************/
/*! exports provided: PostMessageTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostMessageTransport", function() { return PostMessageTransport; });
var isInternetExplorer = function () { return (
// based on https://stackoverflow.com/questions/24861073/detect-if-any-kind-of-ie-msie/24861307#24861307    
navigator.appName === 'Microsoft Internet Explorer' ||
    !!navigator.userAgent.match(/Trident|MSIE|rv:11/)); };
var POSTMESSAGE_TYPE = "mini-iframe-rpc";
var DEFAULT_CONFIG = {
    // IE needs postmessages to contain strings instead of objects
    stringifyObjects: isInternetExplorer()
};
var PostMessageTransport = /** @class */ (function () {
    function PostMessageTransport(windowRef, onReceive, config) {
        var _this = this;
        this.recv = function (messageEvent) {
            if ((!_this.config.originWhitelist || _this.config.originWhitelist.length < 1 || _this.config.originWhitelist.indexOf(messageEvent.origin) > -1) && messageEvent.data) {
                var messageData = _this.readMessageData(messageEvent);
                if (messageData && messageData.type === POSTMESSAGE_TYPE && messageData.payload) {
                    _this.onReceive(messageData.payload, messageEvent.source, messageEvent.origin);
                }
            }
            // otherwise drop the message silently
        };
        this.windowRef = windowRef || window;
        this.onReceive = onReceive;
        this.config = Object.assign({}, DEFAULT_CONFIG, config || {});
        this.windowRef.addEventListener("message", this.recv);
    }
    PostMessageTransport.prototype.close = function () {
        this.windowRef.removeEventListener("message", this.recv);
    };
    PostMessageTransport.prototype.send = function (recipient, messageBody) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var envelopedMessage = {
                "type": POSTMESSAGE_TYPE,
                "payload": messageBody
            };
            recipient.targetWindow.postMessage(_this.config.stringifyObjects ? JSON.stringify(envelopedMessage, function (_k, v) { return v === undefined ? null : v; }) : envelopedMessage, recipient.targetOrigin || "*");
            resolve();
        });
    };
    ;
    // tslint:disable-next-line:no-any
    PostMessageTransport.prototype.readMessageData = function (messageEvent) {
        if (typeof messageEvent.data === 'string' && JSON && isInternetExplorer()) {
            try {
                return JSON.parse(messageEvent.data);
            }
            catch (e) {
                // JSON parse error, silently discard message
                return null;
            }
        }
        return messageEvent.data;
    };
    return PostMessageTransport;
}());



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9ub2RlX21vZHVsZXMvbWRuLXBvbHlmaWxscy9PYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL2Vycm9ycy9ldmFsdWF0aW9uLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL2Vycm9ycy9pbnZvY2F0aW9uLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvaXMtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL2Vycm9ycy9taW5pLWlmcmFtZS1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL3Byb2NlZHVyZS1ub3QtZm91bmQtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL2Vycm9ycy9yZW1vdGUtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL2Vycm9ycy9zZW5kLW1lc3NhZ2UtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL2Vycm9ycy90aW1lb3V0LWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9taW5pLWlmcmFtZS1ycGMudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL3Jlc3VsdC1jYWNoZS50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvdHJhbnNwb3J0L3Bvc3QtbWVzc2FnZS10cmFuc3BvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSw2REFBNkQsNkVBQTZFLHdCQUF3QixtQkFBbUIsS0FBSyxtQkFBbUIsMkRBQTJELFNBQVM7Ozs7Ozs7Ozs7Ozs7QUNBalI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsNkNBQTZDO2dCQUM3QyxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFFRCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQWVMLDJCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJtaW5pLWlmcmFtZS1ycGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm1pbmktaWZyYW1lLXJwY1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW5pLWlmcmFtZS1ycGNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWluaS1pZnJhbWUtcnBjXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21pbmktaWZyYW1lLXJwYy50c1wiKTtcbiIsIlwiZnVuY3Rpb25cIiE9dHlwZW9mIE9iamVjdC5hc3NpZ24mJihPYmplY3QuYXNzaWduPWZ1bmN0aW9uKG4pe2lmKG51bGw9PW4pdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdFwiKTtmb3IodmFyIHI9T2JqZWN0KG4pLHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgZT1hcmd1bWVudHNbdF07aWYobnVsbCE9ZSlmb3IodmFyIG8gaW4gZSllLmhhc093blByb3BlcnR5KG8pJiYocltvXT1lW29dKX1yZXR1cm4gcn0pO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBSZW1vdGVFcnJvciB9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcblxuZXhwb3J0IGNsYXNzIEV2YWx1YXRpb25FcnJvciBleHRlbmRzIFJlbW90ZUVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yOiBSZW1vdGVFcnJvcikge1xuICAgICAgICBzdXBlcihlcnJvci5jYXVzZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IEV2YWx1YXRpb25FcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7RXZhbHVhdGlvbkVycm9yfSBmcm9tICcuL2V2YWx1YXRpb24tZXJyb3InO1xuaW1wb3J0IHtJbnZvY2F0aW9uRXJyb3J9IGZyb20gJy4vaW52b2NhdGlvbi1lcnJvcic7XG5pbXBvcnQge2lzRXJyb3J9IGZyb20gJy4vaXMtZXJyb3InO1xuaW1wb3J0IHtNaW5pSWZyYW1lRXJyb3J9IGZyb20gJy4vbWluaS1pZnJhbWUtZXJyb3InO1xuaW1wb3J0IHtQcm9jZWR1cmVOb3RGb3VuZEVycm9yfSBmcm9tICcuL3Byb2NlZHVyZS1ub3QtZm91bmQtZXJyb3InO1xuaW1wb3J0IHtlcnJvclRvSlNPTiwgUmVtb3RlRXJyb3IsIFJlbW90ZUVycm9yQ2F1c2V9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcbmltcG9ydCB7U2VuZE1lc3NhZ2VFcnJvcn0gZnJvbSAnLi9zZW5kLW1lc3NhZ2UtZXJyb3InO1xuaW1wb3J0IHtUaW1lb3V0RXJyb3J9IGZyb20gJy4vdGltZW91dC1lcnJvcic7XG5cbmV4cG9ydCB7TWluaUlmcmFtZUVycm9yLCBQcm9jZWR1cmVOb3RGb3VuZEVycm9yLCBFdmFsdWF0aW9uRXJyb3IsIFRpbWVvdXRFcnJvciwgaXNFcnJvciwgU2VuZE1lc3NhZ2VFcnJvciwgUmVtb3RlRXJyb3IsIEludm9jYXRpb25FcnJvcn07XG5cbnR5cGUgUmVtb3RlRXJyb3JDb25zdHJ1Y3RvciA9IG5ldyAoc3RhdGU6IFBhcnRpYWw8UmVtb3RlRXJyb3I+KSA9PiBSZW1vdGVFcnJvcjtcblxudHlwZSBFUlJPUl9NQVAgPSB7XG4gICAgW2tleTogc3RyaW5nXTogUmVtb3RlRXJyb3JDb25zdHJ1Y3RvclxufVxuXG5jb25zdCByZW1vdGVFcnJvckNsYXNzZXMgPSAoW1xuICAgIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IsXG4gICAgRXZhbHVhdGlvbkVycm9yLFxuICAgIFNlbmRNZXNzYWdlRXJyb3JcbiAgICBdIGFzIFJlbW90ZUVycm9yQ29uc3RydWN0b3JbXSkucmVkdWNlKFxuICAgIChvYmo6RVJST1JfTUFQLCBjb25zdHI6UmVtb3RlRXJyb3JDb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgICBvYmpbY29uc3RyLm5hbWVdID0gY29uc3RyO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSwge30gYXMgRVJST1JfTUFQKTsgICAgXG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpemVSZW1vdGVFcnJvciA9IChjYXVzZTogUmVtb3RlRXJyb3JDYXVzZSwgcmVtb3RlRXhjZXB0aW9uTmFtZT86IHN0cmluZyk6UmVtb3RlRXJyb3IgPT4geyAgICBcbiAgICBcbiAgICBjb25zdCBjb252ZXJ0ID0gKGVycjogUmVtb3RlRXJyb3IpOlJlbW90ZUVycm9yID0+IHtcbiAgICAgICAgY29uc3QgZXJySlNPTjpSZW1vdGVFcnJvciA9IGVycm9yVG9KU09OKGVycik7ICAgICAgICBcbiAgICAgICAgaWYgKHJlbW90ZUV4Y2VwdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIGVyckpTT04ubmFtZSA9IHJlbW90ZUV4Y2VwdGlvbk5hbWU7XG4gICAgICAgIH0gICAgIFxuXG4gICAgICAgIHJldHVybiBlcnJKU09OO1xuICAgIH1cbiAgICBpZiAoY2F1c2UgaW5zdGFuY2VvZiBSZW1vdGVFcnJvcikge1xuICAgICAgICAvLyBpZiBjYXVzZSBpcyBhbHJlYWR5IGEgcmVtb3RlRXJyb3IsIHJldHVybiBhcyBpc1xuICAgICAgICByZXR1cm4gY29udmVydChjYXVzZSk7XG4gICAgfSAgICBcbiAgICAvLyBmb3IgYm90aCBFcnJvciBhbmQgU3RyaW5nIHR5cGUgY2F1c2VzLCBjcmVhdGUgYSBuZXcgUmVtb3RlRXJyb3IgXG5cbiAgICByZXR1cm4gY29udmVydChuZXcgUmVtb3RlRXJyb3IoY2F1c2UpKTsgICAgXG59OyAgIFxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgY29uc3QgZGVzZXJpYWxpemVSZW1vdGVFcnJvciA9IChlcnJvcjpSZW1vdGVFcnJvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0ciA9IHJlbW90ZUVycm9yQ2xhc3Nlc1tlcnJvci5uYW1lXSB8fCBSZW1vdGVFcnJvcjtcblxuICAgIHJldHVybiBuZXcgY29uc3RyKGVycm9yKTtcbn07IiwiaW1wb3J0IHtpc0Vycm9yfSBmcm9tICcuL2lzLWVycm9yJztcbmltcG9ydCB7TWluaUlmcmFtZUVycm9yfSBmcm9tICcuL21pbmktaWZyYW1lLWVycm9yJztcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuY29uc3QgbWFrZU1lc3NhZ2UgPSAocHJvY2VkdXJlTmFtZTogc3RyaW5nLCBjYXVzZT86IGFueSwgcHJldmlvdXNSZWplY3RSZWFzb25zPzogYW55W10pOnN0cmluZyA9PiB7XG4gICAgbGV0IG1lc3NhZ2UgPSBgRXJyb3IgaW52b2tpbmcgcmVtb3RlIHByb2NlZHVyZSAnJHtwcm9jZWR1cmVOYW1lfScuYDtcbiAgICBpZiAoaXNFcnJvcihjYXVzZSkpIHsgICAgICAgIFxuICAgICAgICBtZXNzYWdlICs9IGAgJHtjYXVzZS5uYW1lfTogJHtjYXVzZS5tZXNzYWdlfS5gO1xuICAgIH0gZWxzZSBpZiAoY2F1c2UpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVuc2FmZS1hbnlcbiAgICAgICAgbWVzc2FnZSArPSBgIFJlYXNvbjogJHtjYXVzZS50b1N0cmluZygpfWA7XG4gICAgfVxuICAgIGlmIChwcmV2aW91c1JlamVjdFJlYXNvbnMgJiYgcHJldmlvdXNSZWplY3RSZWFzb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcGx1cmFsID0gcHJldmlvdXNSZWplY3RSZWFzb25zLmxlbmd0aCA+IDEgPyAncycgOiAnJztcbiAgICAgICAgbWVzc2FnZSArPSBgICR7cHJldmlvdXNSZWplY3RSZWFzb25zLmxlbmd0aH0gYWRkaXRpb25hbCByZWplY3Rpb24ke3BsdXJhbH0gZnJvbSByZXRyaWVkIGF0dGVtcHQke3BsdXJhbH0uYDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBJbnZvY2F0aW9uRXJyb3IgZXh0ZW5kcyBNaW5pSWZyYW1lRXJyb3Ige1xuXG4gICAgcHJvY2VkdXJlTmFtZTogc3RyaW5nO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjYXVzZT86IGFueTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcHJldmlvdXNSZWplY3RSZWFzb25zPzogYW55W107XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3RydWN0b3IocHJvY2VkdXJlTmFtZTogc3RyaW5nLCBjYXVzZT86IGFueSwgcHJldmlvdXNSZWplY3RSZWFzb25zPzogYW55W10pIHtcbiAgICAgICAgc3VwZXIobWFrZU1lc3NhZ2UocHJvY2VkdXJlTmFtZSwgY2F1c2UsIHByZXZpb3VzUmVqZWN0UmVhc29ucykpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgdGhpcy5uYW1lID0gSW52b2NhdGlvbkVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICBcbiAgICAgICAgdGhpcy5wcm9jZWR1cmVOYW1lID0gcHJvY2VkdXJlTmFtZTtcbiAgICAgICAgdGhpcy5jYXVzZSA9IGNhdXNlO1xuICAgICAgICB0aGlzLnByZXZpb3VzUmVqZWN0UmVhc29ucyA9IHByZXZpb3VzUmVqZWN0UmVhc29uczsgICAgICAgICAgICAgIFxuICAgIH0gICAgXG59IiwiLy8gdGhlIHdvbmRlcnMgb2YgSmF2YXNjcmlwdDogRXJyb3IgZGV0ZWN0aW9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NTQ5NjA2OFxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGNvbnN0IGlzRXJyb3IgPSAocmVqZWN0T3JFcnJvcj86YW55KSA9PiB7XG4gICAgY29uc3QgaXNFcnJvclZhbHVlID0gKHJlamVjdE9yRXJyb3IgIT09IG51bGwgJiYgcmVqZWN0T3JFcnJvciAhPT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAoXG4gICAgICAgICAgICAocmVqZWN0T3JFcnJvciBpbnN0YW5jZW9mIEVycm9yKSB8fFxuICAgICAgICAgICAgKHJlamVjdE9yRXJyb3IgaW5zdGFuY2VvZiBET01FeGNlcHRpb24pIHx8XG4gICAgICAgICAgICAvLyBEYXRhQ2xvbmVFcnJvcnMgbXVzdCBiZSBpZGVudGlmaWVkIGFzIHN1Y2ggb3RoZXJ3aXNlLCB3ZSBjYW4ndCBldmVuIHNlbmQgZXJyb3JzXG4gICAgICAgICAgICAvLyB3aGVuIHJlc3BvbnNlIGNhbnQgYmUgc2VyaWFsaXplZCEgVGhpcyBpcyByZXF1aXJlZCBmb3IgTVMgRWRnZSBzdXBwb3J0LlxuICAgICAgICAgICAgKHJlamVjdE9yRXJyb3IubmFtZSA9PT0gJ0RhdGFDbG9uZUVycm9yJykgfHxcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAocmVqZWN0T3JFcnJvci5tZXNzYWdlICYmIHR5cGVvZiByZWplY3RPckVycm9yLm1lc3NhZ2UgPT09ICdzdHJpbmcnKSAmJlxuICAgICAgICAgICAgICAgIChyZWplY3RPckVycm9yLnN0YWNrICYmIHR5cGVvZiByZWplY3RPckVycm9yLnN0YWNrID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgcmV0dXJuIGlzRXJyb3JWYWx1ZTsgICAgXG59OyIsImV4cG9ydCBjbGFzcyBNaW5pSWZyYW1lRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cbiAgICB0aW1lc3RhbXA6bnVtYmVyO1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcsIHN0YXRlPzogYW55KSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IMKgKyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZWU6IHR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL3JlbGVhc2Utbm90ZXMvdHlwZXNjcmlwdC0yLTIuaHRtbFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW5zYWZlLWFueVxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpOyAvLyByZXN0b3JlIHByb3RvdHlwZSBjaGFpblxuICAgICAgICB0aGlzLm5hbWUgPSBNaW5pSWZyYW1lRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyBcbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IFJlbW90ZUVycm9yIH0gZnJvbSAnLi9yZW1vdGUtZXJyb3InO1xuXG5leHBvcnQgY2xhc3MgUHJvY2VkdXJlTm90Rm91bmRFcnJvciBleHRlbmRzIFJlbW90ZUVycm9yIHtcblxuICAgIHByb2NlZHVyZU5hbWUgPSBcInVua25vd25cIjtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOiBQYXJ0aWFsPFByb2NlZHVyZU5vdEZvdW5kRXJyb3I+KSB7XG4gICAgICAgIHN1cGVyKGBSZW1vdGUgcHJvY2VkdXJlICcke3N0YXRlLnByb2NlZHVyZU5hbWV9JyBub3QgcmVnaXN0ZXJlZCBpbiByZW1vdGUgUlBDIGluc3RhbmNlLmApO1xuICAgICAgICBpZiAoc3RhdGUucHJvY2VkdXJlTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZWR1cmVOYW1lID0gc3RhdGUucHJvY2VkdXJlTmFtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hbWUgPSBQcm9jZWR1cmVOb3RGb3VuZEVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHtNaW5pSWZyYW1lRXJyb3J9IGZyb20gJy4vbWluaS1pZnJhbWUtZXJyb3InO1xuXG5leHBvcnQgdHlwZSBSZW1vdGVFcnJvckNhdXNlID0gRXJyb3IgfCBzdHJpbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvclRvSlNPTjxUIGV4dGVuZHMgRXJyb3I+IChlcnI6IFQpOlQge1xuICAgIC8vIG1lc3NhZ2UsIG5hbWUsIHN0YWNrIGFyZSBub3QgZW5udW1lcmFibGUsIHNvIHdlIG11c3QgZXhwbGljaXRseSBnZXQgdGhlbS5cbiAgICBjb25zdCB7bWVzc2FnZSwgbmFtZSwgc3RhY2t9ID0gZXJyO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe21lc3NhZ2UsIHN0YWNrLCBuYW1lfSwgZXJyKTtcbn1cblxuY29uc3QgY2F1c2VUb01lc3NhZ2UgPSAoY2F1c2U6IFJlbW90ZUVycm9yQ2F1c2UpOnN0cmluZyA9PiB7XG4gICAgaWYgKHR5cGVvZiBjYXVzZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGNhdXNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgJHtjYXVzZS5tZXNzYWdlfWA7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3RlRXJyb3IgZXh0ZW5kcyBNaW5pSWZyYW1lRXJyb3Ige1xuICAgICAgICBcbiAgICBjYXVzZTogUmVtb3RlRXJyb3JDYXVzZTtcblxuICAgIGNvbnN0cnVjdG9yKGNhdXNlOiBSZW1vdGVFcnJvckNhdXNlKSB7ICAgICAgICBcbiAgICAgICAgc3VwZXIoY2F1c2VUb01lc3NhZ2UoY2F1c2UpKTtcbiAgICAgICAgdGhpcy5jYXVzZSA9ICh0eXBlb2YgY2F1c2UgPT09ICdzdHJpbmcnKSA/IGNhdXNlIDogZXJyb3JUb0pTT04oY2F1c2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBSZW1vdGVFcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IFJlbW90ZUVycm9yIH0gZnJvbSAnLi9yZW1vdGUtZXJyb3InO1xuXG5leHBvcnQgY2xhc3MgU2VuZE1lc3NhZ2VFcnJvciBleHRlbmRzIFJlbW90ZUVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yOiBSZW1vdGVFcnJvcikge1xuICAgICAgICBzdXBlcihlcnJvci5jYXVzZSk7ICAgICAgICBcbiAgICAgICAgdGhpcy5uYW1lID0gU2VuZE1lc3NhZ2VFcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7TWluaUlmcmFtZUVycm9yfSBmcm9tICcuL21pbmktaWZyYW1lLWVycm9yJztcblxuZXhwb3J0IGNsYXNzIFRpbWVvdXRFcnJvciBleHRlbmRzIE1pbmlJZnJhbWVFcnJvciB7XG5cbiAgICB0aW1lb3V0TWlsbGlTZWNvbmRzID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOiBQYXJ0aWFsPFRpbWVvdXRFcnJvcj4pIHtcbiAgICAgICAgc3VwZXIoYFRpbWVvdXQgYWZ0ZXIgJHtzdGF0ZS50aW1lb3V0TWlsbGlTZWNvbmRzfSBtcy5gLCBzdGF0ZSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBUaW1lb3V0RXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgICAgICAgICAgXG4gICAgfVxufSIsIi8qIHRzbGludDpkaXNhYmxlIG5vLWFueSBuby11bnNhZmUtYW55ICovXG5cbmltcG9ydCAnbWRuLXBvbHlmaWxscy9PYmplY3QuYXNzaWduJztcbmltcG9ydCB7ZGVzZXJpYWxpemVSZW1vdGVFcnJvciwgRXZhbHVhdGlvbkVycm9yLCBJbnZvY2F0aW9uRXJyb3IsIGlzRXJyb3IsIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IsIFNlbmRNZXNzYWdlRXJyb3IsIHNlcmlhbGl6ZVJlbW90ZUVycm9yLCBUaW1lb3V0RXJyb3J9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7REVGQVVMVF9SRVNVTFRfQ0FDSEVfQ0FQQUNJVFksIFJlc3VsdENhY2hlfSBmcm9tIFwiLi9yZXN1bHQtY2FjaGVcIjtcbmV4cG9ydCB7UmVzdWx0Q2FjaGV9OyAvLyBzbyB1bml0IHRlc3RzIGNhbiBhY2Nlc3MgUmVzcG9uc2VDYWNoZVxuaW1wb3J0IHtNZXNzYWdlQm9keSwgUmVxdWVzdE1lc3NhZ2VCb2R5fSBmcm9tIFwiLi9qc29uLXJwY1wiO1xuaW1wb3J0IHtQb3N0TWVzc2FnZVRyYW5zcG9ydH0gZnJvbSAnLi90cmFuc3BvcnQvcG9zdC1tZXNzYWdlLXRyYW5zcG9ydCc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBJbnZvY2F0aW9uT3B0aW9ucyB7XG4gICAgdGltZW91dDogbnVtYmVyO1xuICAgIHJldHJ5TGltaXQ6IG51bWJlcjtcbiAgICByZXRyeUFsbEZhaWx1cmVzIDogYm9vbGVhbjtcbn1cblxudHlwZSBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tUeXBlID0gJ29uVW5leHBlY3RlZFJlc3BvbnNlJyB8ICdvblJlY2VpdmUnIHwgJ29uU2VuZCcgfCAnb25SZWdpc3RlcicgfCAnb25DbG9zZScgfCAnb25SZXF1ZXN0UmV0cnknIHwgJ29uUmVzdWx0Q2FjaGVFdmljdGlvbic7XG5cbi8vIE9wdGlvbmFsIGNhbGxiYWNrcyBmb3IgaW50ZXJuYWwgZXZlbnRzIHVzZWZ1bCBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nXG5leHBvcnQgdHlwZSBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tzID0ge1xuICAgIFtrZXkgaW4gSW50ZXJuYWxFdmVudENhbGxiYWNrVHlwZV06ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdFBhcmFtZXRlcnMge1xuICAgIHdpbmRvd1JlZjogV2luZG93O1xuICAgIG9yaWdpbldoaXRlbGlzdDogc3RyaW5nW107XG4gICAgZGVmYXVsdEludm9jYXRpb25PcHRpb25zOiBJbnZvY2F0aW9uT3B0aW9ucztcbiAgICBldmVudENhbGxiYWNrczogUGFydGlhbDxJbnRlcm5hbEV2ZW50Q2FsbGJhY2tzPjtcbiAgICByZXN1bHRDYWNoZUNhcGFjaXR5OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDYWxsYmFja0Z1bmN0aW9ucyB7XG4gICAgcmVzb2x2ZTogKHJlc3VsdD86IGFueSkgPT4gdm9pZCxcbiAgICByZWplY3Q6IChlcnJvcj86IGFueSkgPT4gdm9pZFxufVxuXG50eXBlIFByb2NlZHVyZUltcGxlbWVudGF0aW9uID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk7XG5cbnR5cGUgUHJvY2VkdXJlSW52b2NhdGlvbkNvbnRleHQgPSB7cmVxdWVzdE1lc3NhZ2VCb2R5OiBSZXF1ZXN0TWVzc2FnZUJvZHksIG1lc3NhZ2VTb3VyY2U6IFdpbmRvdywgbWVzc2FnZU9yaWdpbjogc3RyaW5nfTtcblxuY29uc3QgUkFORE9NX0JBU0UgPSAzNjtcbmNvbnN0IENBTExJRF9MRU5HVEggPSA4O1xuY29uc3QgREVGQVVMVF9JTlZPQ0FUSU9OX09QVElPTlM6SW52b2NhdGlvbk9wdGlvbnMgPSB7XG4gICAgdGltZW91dDogMTAwLFxuICAgIHJldHJ5TGltaXQ6IDIsXG4gICAgcmV0cnlBbGxGYWlsdXJlczogZmFsc2Vcbn1cblxuZXhwb3J0IGNsYXNzIE1pbmlJZnJhbWVSUEMge1xuICAgIHByaXZhdGUgY29uZmlnOiBJbml0UGFyYW1ldGVycztcbiAgICBwcml2YXRlIGNhbGxiYWNrczoge1trZXk6c3RyaW5nXTpDYWxsYmFja0Z1bmN0aW9uc30gPSB7fTtcbiAgICBwcml2YXRlIHJlZ2lzdGVyZWRQcm9jZWR1cmVzOntba2V5OnN0cmluZ106IFByb2NlZHVyZUltcGxlbWVudGF0aW9ufSA9IHt9O1xuICAgIHByaXZhdGUgcmVzdWx0Q2FjaGU6UmVzdWx0Q2FjaGU7XG4gICAgcHJpdmF0ZSB0cmFuc3BvcnQ6IFBvc3RNZXNzYWdlVHJhbnNwb3J0O1xuXG4gICAgY29uc3RydWN0b3IoaW5pdFBhcmFtZXRlcnM/OiBQYXJ0aWFsPEluaXRQYXJhbWV0ZXJzPikge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIHdpbmRvd1JlZjogaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMud2luZG93UmVmIHx8IHdpbmRvdyxcbiAgICAgICAgICAgIG9yaWdpbldoaXRlbGlzdDogaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMub3JpZ2luV2hpdGVsaXN0IHx8IFtdLFxuICAgICAgICAgICAgZGVmYXVsdEludm9jYXRpb25PcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0lOVk9DQVRJT05fT1BUSU9OUywgaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMuZGVmYXVsdEludm9jYXRpb25PcHRpb25zIHx8IHt9KSwgICAgICAgICAgICBcbiAgICAgICAgICAgIGV2ZW50Q2FsbGJhY2tzOiBpbml0UGFyYW1ldGVycyAmJiBpbml0UGFyYW1ldGVycy5ldmVudENhbGxiYWNrcyB8fCB7fSxcbiAgICAgICAgICAgIHJlc3VsdENhY2hlQ2FwYWNpdHk6IGluaXRQYXJhbWV0ZXJzICYmIHR5cGVvZiBpbml0UGFyYW1ldGVycy5yZXN1bHRDYWNoZUNhcGFjaXR5ID09PSAnbnVtYmVyJyA/IGluaXRQYXJhbWV0ZXJzLnJlc3VsdENhY2hlQ2FwYWNpdHkgOiBERUZBVUxUX1JFU1VMVF9DQUNIRV9DQVBBQ0lUWVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlc3VsdENhY2hlID0gbmV3IFJlc3VsdENhY2hlKHtcbiAgICAgICAgICAgIGNhcGFjaXR5OiB0aGlzLmNvbmZpZy5yZXN1bHRDYWNoZUNhcGFjaXR5LFxuICAgICAgICAgICAgZXZpY3Rpb25DYWxsYmFjazogKGlkLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uUmVzdWx0Q2FjaGVFdmljdGlvblwiLCBpZCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0ID0gbmV3IFBvc3RNZXNzYWdlVHJhbnNwb3J0KFxuICAgICAgICAgICAgdGhpcy5jb25maWcud2luZG93UmVmLFxuICAgICAgICAgICAgdGhpcy5yZWN2LFxuICAgICAgICAgICAgeydvcmlnaW5XaGl0ZWxpc3QnOiB0aGlzLmNvbmZpZy5vcmlnaW5XaGl0ZWxpc3R9KTsgICAgICAgIFxuICAgIH0gICAgICAgIFxuXG4gICAgcmVnaXN0ZXIocHJvY2VkdXJlTmFtZTogc3RyaW5nLCBpbXBsZW1lbnRhdGlvbj86IFByb2NlZHVyZUltcGxlbWVudGF0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25SZWdpc3RlclwiLCBwcm9jZWR1cmVOYW1lLCBpbXBsZW1lbnRhdGlvbilcbiAgICAgICAgaWYgKGltcGxlbWVudGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzW3Byb2NlZHVyZU5hbWVdID0gaW1wbGVtZW50YXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yZWdpc3RlcmVkUHJvY2VkdXJlc1twcm9jZWR1cmVOYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGludm9rZSAodGFyZ2V0V2luZG93OiBXaW5kb3csIHRhcmdldE9yaWdpbjogc3RyaW5nIHwgbnVsbCwgbWV0aG9kOiBzdHJpbmcsIHBhcmFtcz86IGFueVtdLCBpbnZvY2F0aW9uT3B0aW9ucz86IEludm9jYXRpb25PcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLmRlZmF1bHRJbnZvY2F0aW9uT3B0aW9ucywgaW52b2NhdGlvbk9wdGlvbnMgfHwge30pO1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0TmV4dENhbGxJZCgpO1xuICAgICAgICBjb25zdCByZXF1ZXN0TWVzc2FnZUJvZHk6IFJlcXVlc3RNZXNzYWdlQm9keSA9IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgcGFyYW1zOiAocGFyYW1zIHx8IFtdKX07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdFdpdGhSZXRyeSh0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgcmVxdWVzdE1lc3NhZ2VCb2R5LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvbkNsb3NlXCIpO1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpOyAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXF1ZXN0V2l0aFJldHJ5KHRhcmdldFdpbmRvdzogV2luZG93LCB0YXJnZXRPcmlnaW46IHN0cmluZyB8IG51bGwsIHJlcXVlc3RNZXNzYWdlQm9keTpSZXF1ZXN0TWVzc2FnZUJvZHksIG9wdGlvbnM6IEludm9jYXRpb25PcHRpb25zKTpQcm9taXNlPGFueT4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlcXVlc3RDb3VudCA9IDA7XG4gICAgICAgIGxldCBmYWlsdXJlQ291bnQgPSAwOyAgICAgICAgXG4gICAgICAgIGxldCBmaW5hbFJlc29sdmU6KHJlc3VsdD86IGFueSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcbiAgICAgICAgbGV0IGZpbmFsUmVqZWN0OihlcnJvcj86IGFueSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcbiAgICAgICAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBwcmV2aW91c1JlamVjdFJlYXNvbnM6YW55W10gPSBbXTsgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgaXNFcnJvclJldHJpYWJsZSA9IChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0IDw9IDAgfHwgb3B0aW9ucy5yZXRyeUxpbWl0IDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMucmV0cnlBbGxGYWlsdXJlcyB8fCAoZXJyb3IgaW5zdGFuY2VvZiBUaW1lb3V0RXJyb3IpOyAgICAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG1ha2VSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UodGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4sIHJlcXVlc3RNZXNzYWdlQm9keSkudGhlbihcbiAgICAgICAgICAgICAgICAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzW3JlcXVlc3RNZXNzYWdlQm9keS5pZF0gPSB7cmVzb2x2ZSwgcmVqZWN0fTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVSZXNvbHZlID0gKHJlc3VsdD86IGFueSkgPT4ge1xuICAgICAgICAgICAgLy8gZmlyc3Qgc3VjY2Vzc2Z1bCByZXF1ZXN0IGltbWVkaWF0ZWx5IHJlc29sdmVzIHRoZSBpbnZvY2F0aW9uIHByb21pc2VcbiAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBmaW5hbFJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVJlamVjdCA9IChyZWFzb24/OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGZhaWx1cmVDb3VudCArPSAxO1xuICAgICAgICAgICAgLy8gSWYgcmVxdWVzdCBoYXMgc2luY2UgYmVlbiBjb21wbGV0ZWQsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIC8vIFJldHJ5IHJlcXVlc3Qgb3IgZmFpbCBwZXJtYW5lbnRseSBpZiBubyBvdXRzdGFuZGluZyByZXF1ZXN0cyBzdGlsbCBpbiBmbGlnaHRcbiAgICAgICAgICAgIGlmICghY29tcGxldGVkICYmIGZhaWx1cmVDb3VudCA9PT0gcmVxdWVzdENvdW50KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNFcnJvclJldHJpYWJsZShyZWFzb24pICYmIHJlcXVlc3RDb3VudCA8IChvcHRpb25zLnJldHJ5TGltaXQgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uUmVxdWVzdFJldHJ5XCIsIHJlYXNvbiwgcHJldmlvdXNSZWplY3RSZWFzb25zLCByZXF1ZXN0TWVzc2FnZUJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1JlamVjdFJlYXNvbnMucHVzaChyZWFzb24pO1xuICAgICAgICAgICAgICAgICAgICBtYWtlQXR0ZW1wdCgpO1xuICAgICAgICAgICAgICAgIC8vIElmIGVycm9yIGlzIG5vbi1yZXRyaWFibGUgYW5kIHRoZXJlIGFyZSBubyB1bmFuc3dlcmVkIHJlcXVlc3RzLCBnaXZlIHVwLlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsUmVqZWN0KG5ldyBJbnZvY2F0aW9uRXJyb3IocmVxdWVzdE1lc3NhZ2VCb2R5Lm1ldGhvZCwgcmVhc29uLCBwcmV2aW91c1JlamVjdFJlYXNvbnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBhcmUgc3RpbGwgb3V0c3RhbmRpbmcgcmVxdWVzdHMsIHdhaXQgZm9yIHRoZW0gdG8gc3VjY2VlZCBvciBmYWlsLlxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG1ha2VBdHRlbXB0ID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdENvdW50ICs9IDE7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2VQcm9taXNlID0gbWFrZVJlcXVlc3QoKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VQcm9taXNlID0gdGhpcy50aW1lYm94UHJvbWlzZShyZXNwb25zZVByb21pc2UsIG9wdGlvbnMudGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNwb25zZVByb21pc2UudGhlbihoYW5kbGVSZXNvbHZlLCBoYW5kbGVSZWplY3QpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZmluYWxSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIGZpbmFsUmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaW5pdGlhbCBhdHRlbXB0XG4gICAgICAgIG1ha2VBdHRlbXB0KCk7XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW50ZXJuYWxFdmVudENhbGxiYWNrKGludGVybmFsRXZlbnRDYWxsYmFjazogSW50ZXJuYWxFdmVudENhbGxiYWNrVHlwZSwgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgY2IgPSB0aGlzLmNvbmZpZy5ldmVudENhbGxiYWNrc1tpbnRlcm5hbEV2ZW50Q2FsbGJhY2tdO1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aW1lYm94UHJvbWlzZShvcmlnaW5hbFByb21pc2U6IFByb21pc2U8YW55PiwgdGltZW91dE1pbGxpU2Vjb25kczogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgICAgICAgICBvcmlnaW5hbFByb21pc2UsXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLndpbmRvd1JlZi5zZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiByZWplY3QobmV3IFRpbWVvdXRFcnJvcih7dGltZW91dE1pbGxpU2Vjb25kc30pKSxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dE1pbGxpU2Vjb25kcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBdKTtcbiAgICB9ICAgXG5cbiAgICBwcml2YXRlIGdldE5leHRDYWxsSWQgKCkge1xuICAgICAgICBsZXQgcmFuZG9tSWQgOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgICAgd2hpbGUoIXJhbmRvbUlkIHx8IHRoaXMuY2FsbGJhY2tzW3JhbmRvbUlkXSkge1xuICAgICAgICAgICAgcmFuZG9tSWQgPSBgY2Ike01hdGgucmFuZG9tKCkudG9TdHJpbmcoUkFORE9NX0JBU0UpLnJlcGxhY2UoL1teYS16XSsvZywgJycpLnN1YnN0cigwLCBDQUxMSURfTEVOR1RIKX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJhbmRvbUlkO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2VuZE1lc3NhZ2UgKHRhcmdldFdpbmRvdzogV2luZG93LCB0YXJnZXRPcmlnaW46IHN0cmluZyB8IG51bGwsIG1lc3NhZ2VCb2R5OiBNZXNzYWdlQm9keSkgOiBQcm9taXNlPHZvaWQ+IHsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblNlbmRcIiwgbWVzc2FnZUJvZHksIHRhcmdldFdpbmRvdywgdGFyZ2V0T3JpZ2luKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoXG4gICAgICAgICAgICAgICAge3RhcmdldFdpbmRvdywgdGFyZ2V0T3JpZ2lufSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQm9keSk7XG4gICAgfSAgICAgICAgXG5cbiAgICBwcml2YXRlIGlzQXJyYXkoYXJnOmFueSkge1xuICAgICAgICAvLyBBcnJheS5pc0FycmF5IGRvZXNuJ3Qgd29yayBpbiBJRTggYW5kIGRvZXNuJ3QgbmVjZXNzYXJpbHkgd29yayBjcm9zcy13aW5kb3dcbiAgICAgICAgLy8gZnJvbTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaXNBcnJheVxuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7ICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1bnBhY2tQYXJhbXMocGFyYW1zOmFueSkge1xuICAgICAgICBpZiAodGhpcy5pc0FycmF5KHBhcmFtcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3BhcmFtc107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVSZXF1ZXN0IChyZXF1ZXN0TWVzc2FnZUJvZHk6UmVxdWVzdE1lc3NhZ2VCb2R5LCBtZXNzYWdlU291cmNlOiBXaW5kb3csIG1lc3NhZ2VPcmlnaW46IHN0cmluZykge1xuICAgICAgICBjb25zdCBpZCA9IHJlcXVlc3RNZXNzYWdlQm9keS5pZDtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gcmVxdWVzdE1lc3NhZ2VCb2R5Lm1ldGhvZDtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy51bnBhY2tQYXJhbXMocmVxdWVzdE1lc3NhZ2VCb2R5LnBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlT3JpZ2luID0gIW1lc3NhZ2VPcmlnaW4gfHwgbWVzc2FnZU9yaWdpbiA9PT0gXCJudWxsXCIgPyBudWxsIDogbWVzc2FnZU9yaWdpbjtcbiAgICAgICAgY29uc3Qgc2VuZEVycm9yID0gKHJlamVjdE9yRXJyb3I6IGFueSwgZXhjZXB0aW9uTmFtZT86c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZW5kaW5nRXJyb3IgPSBpc0Vycm9yKHJlamVjdE9yRXJyb3IpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShcbiAgICAgICAgICAgICAgICBtZXNzYWdlU291cmNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlT3JpZ2luLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIGlzRXJyb3JJbnN0YW5jZTogc2VuZGluZ0Vycm9yLCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBzZW5kaW5nRXJyb3IgPyBzZXJpYWxpemVSZW1vdGVFcnJvcihyZWplY3RPckVycm9yLCBleGNlcHRpb25OYW1lKSA6IHJlamVjdE9yRXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZ2V0UmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0Q2FjaGUuaGFzQ2FjaGVkUmVzdWx0KGlkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3VsdENhY2hlLmdldENhY2hlZFJlc3VsdChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbbWV0aG9kXS5hcHBseShcbiAgICAgICAgICAgICAgICAgICAge3JlcXVlc3RNZXNzYWdlQm9keSwgbWVzc2FnZVNvdXJjZSwgbWVzc2FnZU9yaWdpbn0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRDYWNoZS5zZXRDYWNoZWRSZXN1bHQoaWQsIHJlc3VsdFByb21pc2UpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbbWV0aG9kXSkgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgZ2V0UmVzdWx0KClcbiAgICAgICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdD86YW55KSA9PiB0aGlzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gc2VuZEVycm9yKGVycm9yLCBTZW5kTWVzc2FnZUVycm9yLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcj86YW55KSA9PiBzZW5kRXJyb3IoZXJyb3IsIEV2YWx1YXRpb25FcnJvci5uYW1lKVxuICAgICAgICAgICAgICAgICk7ICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRXJyb3IobmV3IFByb2NlZHVyZU5vdEZvdW5kRXJyb3Ioe3Byb2NlZHVyZU5hbWU6IG1ldGhvZH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlUmVzcG9uc2UobWVzc2FnZUJvZHk6IE1lc3NhZ2VCb2R5KSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrRnVuY3Rpb25zID0gdGhpcy5jYWxsYmFja3NbbWVzc2FnZUJvZHkuaWRdO1xuICAgICAgICBpZiAoY2FsbGJhY2tGdW5jdGlvbnMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1ttZXNzYWdlQm9keS5pZF07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoJ2lzRXJyb3JJbnN0YW5jZScgaW4gbWVzc2FnZUJvZHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck9iamVjdCA9IG1lc3NhZ2VCb2R5LmlzRXJyb3JJbnN0YW5jZSA/IGRlc2VyaWFsaXplUmVtb3RlRXJyb3IobWVzc2FnZUJvZHkuZXJyb3IpIDogbWVzc2FnZUJvZHkuZXJyb3I7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbnMucmVqZWN0KGVycm9yT2JqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJ3Jlc3VsdCcgaW4gbWVzc2FnZUJvZHkpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9ucy5yZXNvbHZlKG1lc3NhZ2VCb2R5LnJlc3VsdCk7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25VbmV4cGVjdGVkUmVzcG9uc2VcIiwgbWVzc2FnZUJvZHkpO1xuICAgICAgICB9ICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWN2ID0gKG1lc3NhZ2VCb2R5Ok1lc3NhZ2VCb2R5LCBtZXNzYWdlU291cmNlOiBXaW5kb3csIG1lc3NhZ2VPcmlnaW46IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uUmVjZWl2ZVwiLCBtZXNzYWdlQm9keSwgbWVzc2FnZVNvdXJjZSwgbWVzc2FnZU9yaWdpbik7ICAgIFxuICAgICAgICBpZiAoJ21ldGhvZCcgaW4gbWVzc2FnZUJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVxdWVzdChtZXNzYWdlQm9keSwgbWVzc2FnZVNvdXJjZSwgbWVzc2FnZU9yaWdpbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3BvbnNlKG1lc3NhZ2VCb2R5KTtcbiAgICAgICAgfSAgICAgICAgICAgIFxuICAgIH1cblxufSAvLyBlbmQgb2YgY2xhc3NcbiIsImV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0Q2FjaGVQYXJhbWV0ZXJzIHtcbiAgICBjYXBhY2l0eTogbnVtYmVyO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBldmljdGlvbkNhbGxiYWNrPzogKGNhbGxJZDpzdHJpbmcsIHJlc3VsdDphbnkpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9SRVNVTFRfQ0FDSEVfQ0FQQUNJVFkgPSAyMDA7XG5cblxuY29uc3QgREVGQVVMVF9QQVJBTUVURVJTOlJlc3VsdENhY2hlUGFyYW1ldGVycyA9IHtcbiAgICBjYXBhY2l0eTogREVGQVVMVF9SRVNVTFRfQ0FDSEVfQ0FQQUNJVFksXG59O1xuXG5leHBvcnQgY2xhc3MgUmVzdWx0Q2FjaGUge1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHByaXZhdGUgaWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBwcml2YXRlIHJlc3VsdHM6IHtba2V5OnN0cmluZ106YW55fSA9IHt9O1xuICAgIHByaXZhdGUgY29uZmlnOiBSZXN1bHRDYWNoZVBhcmFtZXRlcnM7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBQYXJ0aWFsPFJlc3VsdENhY2hlUGFyYW1ldGVycz4pIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1BBUkFNRVRFUlMsIGNvbmZpZyB8fCB7fSk7XG4gICAgfVxuXG4gICAgaGFzQ2FjaGVkUmVzdWx0KGlkOnN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzLmhhc093blByb3BlcnR5KGlkKTtcbiAgICB9XG5cbiAgICBnZXRDYWNoZWRSZXN1bHQoaWQ6c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHNbaWRdO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBzZXRDYWNoZWRSZXN1bHQoaWQ6c3RyaW5nLCByZXN1bHQ6YW55KSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0NhY2hlZFJlc3VsdChpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuaWRzID0gdGhpcy5pZHMuZmlsdGVyKGMgPT4gYyAhPT0gaWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaWRzLnVuc2hpZnQoaWQpO1xuICAgICAgICB0aGlzLnJlc3VsdHNbaWRdID0gcmVzdWx0O1xuICAgICAgICBpZiAodGhpcy5jb25maWcuY2FwYWNpdHkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbmZvcmNlQ2FwYWNpdHkoKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmZvcmNlQ2FwYWNpdHkoKSB7XG4gICAgICAgIGZvciAobGV0IHNpemUgPSB0aGlzLmlkcy5sZW5ndGg7IHNpemUgPiB0aGlzLmNvbmZpZy5jYXBhY2l0eTsgc2l6ZS0tKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuaWRzLnBvcCgpITtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmVzdWx0c1tpZF07XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yZXN1bHRzW2lkXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5ldmljdGlvbkNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXZpY3Rpb25DYWxsYmFjayhpZCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCB7TWVzc2FnZUJvZHl9IGZyb20gJy4uL2pzb24tcnBjJztcbmltcG9ydCB7UmVjaXBpZW50LCBUcmFuc3BvcnRDb25maWcsIFRyYW5zcG9ydEludGVyZmFjZX0gZnJvbSAnLi90cmFuc3BvcnQnO1xuXG5jb25zdCBpc0ludGVybmV0RXhwbG9yZXIgPSAoKSA9PiAoXG4gICAgLy8gYmFzZWQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ4NjEwNzMvZGV0ZWN0LWlmLWFueS1raW5kLW9mLWllLW1zaWUvMjQ4NjEzMDcjMjQ4NjEzMDcgICAgXG4gICAgbmF2aWdhdG9yLmFwcE5hbWUgPT09ICdNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXInIHx8IFxuICAgICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudHxNU0lFfHJ2OjExLykpO1xuXG5jb25zdCBQT1NUTUVTU0FHRV9UWVBFID0gXCJtaW5pLWlmcmFtZS1ycGNcIjtcblxuY29uc3QgREVGQVVMVF9DT05GSUc6VHJhbnNwb3J0Q29uZmlnID0ge1xuICAgIC8vIElFIG5lZWRzIHBvc3RtZXNzYWdlcyB0byBjb250YWluIHN0cmluZ3MgaW5zdGVhZCBvZiBvYmplY3RzXG4gICAgc3RyaW5naWZ5T2JqZWN0czogaXNJbnRlcm5ldEV4cGxvcmVyKClcbn07XG5cbmV4cG9ydCB0eXBlIE9uUmVjZWl2ZSA9IChtZXNzYWdlQm9keTpNZXNzYWdlQm9keSwgbWVzc2FnZVNvdXJjZTogV2luZG93LCBtZXNzYWdlT3JpZ2luOiBzdHJpbmcpID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBQb3N0TWVzc2FnZVRyYW5zcG9ydCBpbXBsZW1lbnRzIFRyYW5zcG9ydEludGVyZmFjZXtcblxuICAgIHByaXZhdGUgd2luZG93UmVmOiBXaW5kb3c7XG4gICAgcHJpdmF0ZSBjb25maWc6IFRyYW5zcG9ydENvbmZpZztcbiAgICBwcml2YXRlIG9uUmVjZWl2ZTogT25SZWNlaXZlO1xuXG4gICAgY29uc3RydWN0b3Iod2luZG93UmVmOiBXaW5kb3csIG9uUmVjZWl2ZTogT25SZWNlaXZlLCBjb25maWc/OiBQYXJ0aWFsPFRyYW5zcG9ydENvbmZpZz4pIHtcbiAgICAgICAgdGhpcy53aW5kb3dSZWYgPSB3aW5kb3dSZWYgfHwgd2luZG93O1xuICAgICAgICB0aGlzLm9uUmVjZWl2ZSA9IG9uUmVjZWl2ZTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0NPTkZJRywgY29uZmlnIHx8wqB7fSk7XG4gICAgICAgIHRoaXMud2luZG93UmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMucmVjdik7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMud2luZG93UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMucmVjdik7XG4gICAgfVxuXG4gICAgc2VuZCAocmVjaXBpZW50OlJlY2lwaWVudCwgbWVzc2FnZUJvZHk6IE1lc3NhZ2VCb2R5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbnZlbG9wZWRNZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBQT1NUTUVTU0FHRV9UWVBFLFxuICAgICAgICAgICAgICAgIFwicGF5bG9hZFwiOiBtZXNzYWdlQm9keVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlY2lwaWVudC50YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc3RyaW5naWZ5T2JqZWN0cyA/IEpTT04uc3RyaW5naWZ5KGVudmVsb3BlZE1lc3NhZ2UsIChfayx2KSA9PiB2ID09PSB1bmRlZmluZWQgPyBudWxsIDogdikgOiBlbnZlbG9wZWRNZXNzYWdlLFxuICAgICAgICAgICAgICAgIHJlY2lwaWVudC50YXJnZXRPcmlnaW4gfHwgXCIqXCIpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHByaXZhdGUgcmVhZE1lc3NhZ2VEYXRhKG1lc3NhZ2VFdmVudDogTWVzc2FnZUV2ZW50KTphbnkge1xuICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2VFdmVudC5kYXRhID09PSAnc3RyaW5nJyAmJiBKU09OICYmIGlzSW50ZXJuZXRFeHBsb3JlcigpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKG1lc3NhZ2VFdmVudC5kYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBKU09OIHBhcnNlIGVycm9yLCBzaWxlbnRseSBkaXNjYXJkIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXNzYWdlRXZlbnQuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSByZWN2ID0gKG1lc3NhZ2VFdmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICghdGhpcy5jb25maWcub3JpZ2luV2hpdGVsaXN0IHx8IHRoaXMuY29uZmlnLm9yaWdpbldoaXRlbGlzdC5sZW5ndGggPCAxIHx8IHRoaXMuY29uZmlnLm9yaWdpbldoaXRlbGlzdC5pbmRleE9mKG1lc3NhZ2VFdmVudC5vcmlnaW4pID4gLTEpICYmIG1lc3NhZ2VFdmVudC5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlRGF0YSA9IHRoaXMucmVhZE1lc3NhZ2VEYXRhKG1lc3NhZ2VFdmVudCk7XG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEgJiYgbWVzc2FnZURhdGEudHlwZSA9PT0gUE9TVE1FU1NBR0VfVFlQRSAmJiBtZXNzYWdlRGF0YS5wYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblJlY2VpdmUoXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VEYXRhLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFdmVudC5zb3VyY2UgYXMgV2luZG93LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRXZlbnQub3JpZ2luKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyBvdGhlcndpc2UgZHJvcCB0aGUgbWVzc2FnZSBzaWxlbnRseVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9