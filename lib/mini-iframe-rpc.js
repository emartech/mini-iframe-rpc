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
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./src/errors/index.ts");
/* harmony import */ var _result_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result-cache */ "./src/result-cache.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultCache", function() { return _result_cache__WEBPACK_IMPORTED_MODULE_2__["ResultCache"]; });

/* harmony import */ var _transport_post_message_transport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transport/post-message-transport */ "./src/transport/post-message-transport.ts");
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
            resultCacheCapacity: initParameters && typeof initParameters.resultCacheCapacity === 'number' ? initParameters.resultCacheCapacity : _result_cache__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_RESULT_CACHE_CAPACITY"]
        };
        this.resultCache = new _result_cache__WEBPACK_IMPORTED_MODULE_2__["ResultCache"]({
            capacity: this.config.resultCacheCapacity,
            evictionCallback: function (id, result) {
                _this.internalEventCallback("onResultCacheEviction", id, result);
            }
        });
        this.transport = new _transport_post_message_transport__WEBPACK_IMPORTED_MODULE_3__["PostMessageTransport"](this.config.windowRef, this.recv, { 'originWhitelist': this.config.originWhitelist });
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
            return options.retryAllFailures || (error instanceof _errors__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]);
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
                    finalReject(new _errors__WEBPACK_IMPORTED_MODULE_1__["InvocationError"](requestMessageBody.method, reason, previousRejectReasons));
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
                _this.config.windowRef.setTimeout(function () { return reject(new _errors__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]({ timeoutMilliSeconds: timeoutMilliSeconds })); }, timeoutMilliSeconds);
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
                    var sendingError = Object(_errors__WEBPACK_IMPORTED_MODULE_1__["isError"])(rejectOrError);
                    return _this.sendMessage(messageSource, responseOrigin, {
                        id: id,
                        isErrorInstance: sendingError,
                        error: sendingError ? Object(_errors__WEBPACK_IMPORTED_MODULE_1__["serializeRemoteError"])(rejectOrError, exceptionName) : rejectOrError
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
                    }).catch(function (error) { return sendError(error, _errors__WEBPACK_IMPORTED_MODULE_1__["SendMessageError"].name); }); }, function (error) { return sendError(error, _errors__WEBPACK_IMPORTED_MODULE_1__["EvaluationError"].name); });
                }
                else {
                    sendError(new _errors__WEBPACK_IMPORTED_MODULE_1__["ProcedureNotFoundError"]({ procedureName: method }));
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
                var errorObject = messageBody.isErrorInstance ? Object(_errors__WEBPACK_IMPORTED_MODULE_1__["deserializeRemoteError"])(messageBody.error) : messageBody.error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvZXZhbHVhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL2luZGV4LnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvaW52b2NhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL2lzLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvbWluaS1pZnJhbWUtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL2Vycm9ycy9wcm9jZWR1cmUtbm90LWZvdW5kLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvcmVtb3RlLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvc2VuZC1tZXNzYWdlLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvdGltZW91dC1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvbWluaS1pZnJhbWUtcnBjLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9yZXN1bHQtY2FjaGUudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL3RyYW5zcG9ydC9wb3N0LW1lc3NhZ2UtdHJhbnNwb3J0LnRz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cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJtaW5pLWlmcmFtZS1ycGNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWluaS1pZnJhbWUtcnBjXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbmktaWZyYW1lLXJwY1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9taW5pLWlmcmFtZS1ycGMudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IFJlbW90ZUVycm9yIH0gZnJvbSAnLi9yZW1vdGUtZXJyb3InO1xuXG5leHBvcnQgY2xhc3MgRXZhbHVhdGlvbkVycm9yIGV4dGVuZHMgUmVtb3RlRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3I6IFJlbW90ZUVycm9yKSB7XG4gICAgICAgIHN1cGVyKGVycm9yLmNhdXNlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gRXZhbHVhdGlvbkVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHtFdmFsdWF0aW9uRXJyb3J9IGZyb20gJy4vZXZhbHVhdGlvbi1lcnJvcic7XG5pbXBvcnQge0ludm9jYXRpb25FcnJvcn0gZnJvbSAnLi9pbnZvY2F0aW9uLWVycm9yJztcbmltcG9ydCB7aXNFcnJvcn0gZnJvbSAnLi9pcy1lcnJvcic7XG5pbXBvcnQge01pbmlJZnJhbWVFcnJvcn0gZnJvbSAnLi9taW5pLWlmcmFtZS1lcnJvcic7XG5pbXBvcnQge1Byb2NlZHVyZU5vdEZvdW5kRXJyb3J9IGZyb20gJy4vcHJvY2VkdXJlLW5vdC1mb3VuZC1lcnJvcic7XG5pbXBvcnQge2Vycm9yVG9KU09OLCBSZW1vdGVFcnJvciwgUmVtb3RlRXJyb3JDYXVzZX0gZnJvbSAnLi9yZW1vdGUtZXJyb3InO1xuaW1wb3J0IHtTZW5kTWVzc2FnZUVycm9yfSBmcm9tICcuL3NlbmQtbWVzc2FnZS1lcnJvcic7XG5pbXBvcnQge1RpbWVvdXRFcnJvcn0gZnJvbSAnLi90aW1lb3V0LWVycm9yJztcblxuZXhwb3J0IHtNaW5pSWZyYW1lRXJyb3IsIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IsIEV2YWx1YXRpb25FcnJvciwgVGltZW91dEVycm9yLCBpc0Vycm9yLCBTZW5kTWVzc2FnZUVycm9yLCBSZW1vdGVFcnJvciwgSW52b2NhdGlvbkVycm9yfTtcblxudHlwZSBSZW1vdGVFcnJvckNvbnN0cnVjdG9yID0gbmV3IChzdGF0ZTogUGFydGlhbDxSZW1vdGVFcnJvcj4pID0+IFJlbW90ZUVycm9yO1xuXG50eXBlIEVSUk9SX01BUCA9IHtcbiAgICBba2V5OiBzdHJpbmddOiBSZW1vdGVFcnJvckNvbnN0cnVjdG9yXG59XG5cbmNvbnN0IHJlbW90ZUVycm9yQ2xhc3NlcyA9IChbXG4gICAgUHJvY2VkdXJlTm90Rm91bmRFcnJvcixcbiAgICBFdmFsdWF0aW9uRXJyb3IsXG4gICAgU2VuZE1lc3NhZ2VFcnJvclxuICAgIF0gYXMgUmVtb3RlRXJyb3JDb25zdHJ1Y3RvcltdKS5yZWR1Y2UoXG4gICAgKG9iajpFUlJPUl9NQVAsIGNvbnN0cjpSZW1vdGVFcnJvckNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgIG9ialtjb25zdHIubmFtZV0gPSBjb25zdHI7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSBhcyBFUlJPUl9NQVApOyAgICBcblxuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZVJlbW90ZUVycm9yID0gKGNhdXNlOiBSZW1vdGVFcnJvckNhdXNlLCByZW1vdGVFeGNlcHRpb25OYW1lPzogc3RyaW5nKTpSZW1vdGVFcnJvciA9PiB7ICAgIFxuICAgIFxuICAgIGNvbnN0IGNvbnZlcnQgPSAoZXJyOiBSZW1vdGVFcnJvcik6UmVtb3RlRXJyb3IgPT4ge1xuICAgICAgICBjb25zdCBlcnJKU09OOlJlbW90ZUVycm9yID0gZXJyb3JUb0pTT04oZXJyKTsgICAgICAgIFxuICAgICAgICBpZiAocmVtb3RlRXhjZXB0aW9uTmFtZSkge1xuICAgICAgICAgICAgZXJySlNPTi5uYW1lID0gcmVtb3RlRXhjZXB0aW9uTmFtZTtcbiAgICAgICAgfSAgICAgXG5cbiAgICAgICAgcmV0dXJuIGVyckpTT047XG4gICAgfVxuICAgIGlmIChjYXVzZSBpbnN0YW5jZW9mIFJlbW90ZUVycm9yKSB7XG4gICAgICAgIC8vIGlmIGNhdXNlIGlzIGFscmVhZHkgYSByZW1vdGVFcnJvciwgcmV0dXJuIGFzIGlzXG4gICAgICAgIHJldHVybiBjb252ZXJ0KGNhdXNlKTtcbiAgICB9ICAgIFxuICAgIC8vIGZvciBib3RoIEVycm9yIGFuZCBTdHJpbmcgdHlwZSBjYXVzZXMsIGNyZWF0ZSBhIG5ldyBSZW1vdGVFcnJvciBcblxuICAgIHJldHVybiBjb252ZXJ0KG5ldyBSZW1vdGVFcnJvcihjYXVzZSkpOyAgICBcbn07ICAgXG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBjb25zdCBkZXNlcmlhbGl6ZVJlbW90ZUVycm9yID0gKGVycm9yOlJlbW90ZUVycm9yKSA9PiB7XG4gICAgY29uc3QgY29uc3RyID0gcmVtb3RlRXJyb3JDbGFzc2VzW2Vycm9yLm5hbWVdIHx8IFJlbW90ZUVycm9yO1xuXG4gICAgcmV0dXJuIG5ldyBjb25zdHIoZXJyb3IpO1xufTsiLCJpbXBvcnQge2lzRXJyb3J9IGZyb20gJy4vaXMtZXJyb3InO1xuaW1wb3J0IHtNaW5pSWZyYW1lRXJyb3J9IGZyb20gJy4vbWluaS1pZnJhbWUtZXJyb3InO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5jb25zdCBtYWtlTWVzc2FnZSA9IChwcm9jZWR1cmVOYW1lOiBzdHJpbmcsIGNhdXNlPzogYW55LCBwcmV2aW91c1JlamVjdFJlYXNvbnM/OiBhbnlbXSk6c3RyaW5nID0+IHtcbiAgICBsZXQgbWVzc2FnZSA9IGBFcnJvciBpbnZva2luZyByZW1vdGUgcHJvY2VkdXJlICcke3Byb2NlZHVyZU5hbWV9Jy5gO1xuICAgIGlmIChpc0Vycm9yKGNhdXNlKSkgeyAgICAgICAgXG4gICAgICAgIG1lc3NhZ2UgKz0gYCAke2NhdXNlLm5hbWV9OiAke2NhdXNlLm1lc3NhZ2V9LmA7XG4gICAgfSBlbHNlIGlmIChjYXVzZSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW5zYWZlLWFueVxuICAgICAgICBtZXNzYWdlICs9IGAgUmVhc29uOiAke2NhdXNlLnRvU3RyaW5nKCl9YDtcbiAgICB9XG4gICAgaWYgKHByZXZpb3VzUmVqZWN0UmVhc29ucyAmJiBwcmV2aW91c1JlamVjdFJlYXNvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBwbHVyYWwgPSBwcmV2aW91c1JlamVjdFJlYXNvbnMubGVuZ3RoID4gMSA/ICdzJyA6ICcnO1xuICAgICAgICBtZXNzYWdlICs9IGAgJHtwcmV2aW91c1JlamVjdFJlYXNvbnMubGVuZ3RofSBhZGRpdGlvbmFsIHJlamVjdGlvbiR7cGx1cmFsfSBmcm9tIHJldHJpZWQgYXR0ZW1wdCR7cGx1cmFsfS5gO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xufTtcblxuZXhwb3J0IGNsYXNzIEludm9jYXRpb25FcnJvciBleHRlbmRzIE1pbmlJZnJhbWVFcnJvciB7XG5cbiAgICBwcm9jZWR1cmVOYW1lOiBzdHJpbmc7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGNhdXNlPzogYW55O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBwcmV2aW91c1JlamVjdFJlYXNvbnM/OiBhbnlbXTtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjb25zdHJ1Y3Rvcihwcm9jZWR1cmVOYW1lOiBzdHJpbmcsIGNhdXNlPzogYW55LCBwcmV2aW91c1JlamVjdFJlYXNvbnM/OiBhbnlbXSkge1xuICAgICAgICBzdXBlcihtYWtlTWVzc2FnZShwcm9jZWR1cmVOYW1lLCBjYXVzZSwgcHJldmlvdXNSZWplY3RSZWFzb25zKSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBJbnZvY2F0aW9uRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgIFxuICAgICAgICB0aGlzLnByb2NlZHVyZU5hbWUgPSBwcm9jZWR1cmVOYW1lO1xuICAgICAgICB0aGlzLmNhdXNlID0gY2F1c2U7XG4gICAgICAgIHRoaXMucHJldmlvdXNSZWplY3RSZWFzb25zID0gcHJldmlvdXNSZWplY3RSZWFzb25zOyAgICAgICAgICAgICAgXG4gICAgfSAgICBcbn0iLCIvLyB0aGUgd29uZGVycyBvZiBKYXZhc2NyaXB0OiBFcnJvciBkZXRlY3Rpb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ1NDk2MDY4XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgY29uc3QgaXNFcnJvciA9IChyZWplY3RPckVycm9yPzphbnkpID0+IHtcbiAgICBjb25zdCBpc0Vycm9yVmFsdWUgPSAocmVqZWN0T3JFcnJvciAhPT0gbnVsbCAmJiByZWplY3RPckVycm9yICE9PSB1bmRlZmluZWQpICYmXG4gICAgICAgIChcbiAgICAgICAgICAgIChyZWplY3RPckVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHx8XG4gICAgICAgICAgICAocmVqZWN0T3JFcnJvciBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbikgfHxcbiAgICAgICAgICAgIC8vIERhdGFDbG9uZUVycm9ycyBtdXN0IGJlIGlkZW50aWZpZWQgYXMgc3VjaCBvdGhlcndpc2UsIHdlIGNhbid0IGV2ZW4gc2VuZCBlcnJvcnNcbiAgICAgICAgICAgIC8vIHdoZW4gcmVzcG9uc2UgY2FudCBiZSBzZXJpYWxpemVkISBUaGlzIGlzIHJlcXVpcmVkIGZvciBNUyBFZGdlIHN1cHBvcnQuXG4gICAgICAgICAgICAocmVqZWN0T3JFcnJvci5uYW1lID09PSAnRGF0YUNsb25lRXJyb3InKSB8fFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIChyZWplY3RPckVycm9yLm1lc3NhZ2UgJiYgdHlwZW9mIHJlamVjdE9yRXJyb3IubWVzc2FnZSA9PT0gJ3N0cmluZycpICYmXG4gICAgICAgICAgICAgICAgKHJlamVjdE9yRXJyb3Iuc3RhY2sgJiYgdHlwZW9mIHJlamVjdE9yRXJyb3Iuc3RhY2sgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBcbiAgICByZXR1cm4gaXNFcnJvclZhbHVlOyAgICBcbn07IiwiZXhwb3J0IGNsYXNzIE1pbmlJZnJhbWVFcnJvciBleHRlbmRzIEVycm9yIHtcblxuICAgIHRpbWVzdGFtcDpudW1iZXI7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZywgc3RhdGU/OiBhbnkpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gwqArKG5ldyBEYXRlKCkpO1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNlZTogdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svcmVsZWFzZS1ub3Rlcy90eXBlc2NyaXB0LTItMi5odG1sXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnNhZmUtYW55XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7IC8vIHJlc3RvcmUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgIHRoaXMubmFtZSA9IE1pbmlJZnJhbWVFcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93IFxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgUmVtb3RlRXJyb3IgfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBQcm9jZWR1cmVOb3RGb3VuZEVycm9yIGV4dGVuZHMgUmVtb3RlRXJyb3Ige1xuXG4gICAgcHJvY2VkdXJlTmFtZSA9IFwidW5rbm93blwiO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBhcnRpYWw8UHJvY2VkdXJlTm90Rm91bmRFcnJvcj4pIHtcbiAgICAgICAgc3VwZXIoYFJlbW90ZSBwcm9jZWR1cmUgJyR7c3RhdGUucHJvY2VkdXJlTmFtZX0nIG5vdCByZWdpc3RlcmVkIGluIHJlbW90ZSBSUEMgaW5zdGFuY2UuYCk7XG4gICAgICAgIGlmIChzdGF0ZS5wcm9jZWR1cmVOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnByb2NlZHVyZU5hbWUgPSBzdGF0ZS5wcm9jZWR1cmVOYW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IFByb2NlZHVyZU5vdEZvdW5kRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQge01pbmlJZnJhbWVFcnJvcn0gZnJvbSAnLi9taW5pLWlmcmFtZS1lcnJvcic7XG5cbmV4cG9ydCB0eXBlIFJlbW90ZUVycm9yQ2F1c2UgPSBFcnJvciB8IHN0cmluZztcblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yVG9KU09OPFQgZXh0ZW5kcyBFcnJvcj4gKGVycjogVCk6VCB7XG4gICAgLy8gbWVzc2FnZSwgbmFtZSwgc3RhY2sgYXJlIG5vdCBlbm51bWVyYWJsZSwgc28gd2UgbXVzdCBleHBsaWNpdGx5IGdldCB0aGVtLlxuICAgIGNvbnN0IHttZXNzYWdlLCBuYW1lLCBzdGFja30gPSBlcnI7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7bWVzc2FnZSwgc3RhY2ssIG5hbWV9LCBlcnIpO1xufVxuXG5jb25zdCBjYXVzZVRvTWVzc2FnZSA9IChjYXVzZTogUmVtb3RlRXJyb3JDYXVzZSk6c3RyaW5nID0+IHtcbiAgICBpZiAodHlwZW9mIGNhdXNlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gY2F1c2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke2NhdXNlLm1lc3NhZ2V9YDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdGVFcnJvciBleHRlbmRzIE1pbmlJZnJhbWVFcnJvciB7XG4gICAgICAgIFxuICAgIGNhdXNlOiBSZW1vdGVFcnJvckNhdXNlO1xuXG4gICAgY29uc3RydWN0b3IoY2F1c2U6IFJlbW90ZUVycm9yQ2F1c2UpIHsgICAgICAgIFxuICAgICAgICBzdXBlcihjYXVzZVRvTWVzc2FnZShjYXVzZSkpO1xuICAgICAgICB0aGlzLmNhdXNlID0gKHR5cGVvZiBjYXVzZSA9PT0gJ3N0cmluZycpID8gY2F1c2UgOiBlcnJvclRvSlNPTihjYXVzZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFJlbW90ZUVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgUmVtb3RlRXJyb3IgfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBTZW5kTWVzc2FnZUVycm9yIGV4dGVuZHMgUmVtb3RlRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3I6IFJlbW90ZUVycm9yKSB7XG4gICAgICAgIHN1cGVyKGVycm9yLmNhdXNlKTsgICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBTZW5kTWVzc2FnZUVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHtNaW5pSWZyYW1lRXJyb3J9IGZyb20gJy4vbWluaS1pZnJhbWUtZXJyb3InO1xuXG5leHBvcnQgY2xhc3MgVGltZW91dEVycm9yIGV4dGVuZHMgTWluaUlmcmFtZUVycm9yIHtcblxuICAgIHRpbWVvdXRNaWxsaVNlY29uZHMgPSAwO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBhcnRpYWw8VGltZW91dEVycm9yPikge1xuICAgICAgICBzdXBlcihgVGltZW91dCBhZnRlciAke3N0YXRlLnRpbWVvdXRNaWxsaVNlY29uZHN9IG1zLmAsIHN0YXRlKTsgICAgICAgICAgICAgICAgXG4gICAgICAgIHRoaXMubmFtZSA9IFRpbWVvdXRFcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgICAgICAgICAgICAgICBcbiAgICB9XG59IiwiLyogdHNsaW50OmRpc2FibGUgbm8tYW55IG5vLXVuc2FmZS1hbnkgKi9cblxuaW1wb3J0IHtkZXNlcmlhbGl6ZVJlbW90ZUVycm9yLCBFdmFsdWF0aW9uRXJyb3IsIEludm9jYXRpb25FcnJvciwgaXNFcnJvciwgUHJvY2VkdXJlTm90Rm91bmRFcnJvciwgU2VuZE1lc3NhZ2VFcnJvciwgc2VyaWFsaXplUmVtb3RlRXJyb3IsIFRpbWVvdXRFcnJvcn0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHtERUZBVUxUX1JFU1VMVF9DQUNIRV9DQVBBQ0lUWSwgUmVzdWx0Q2FjaGV9IGZyb20gXCIuL3Jlc3VsdC1jYWNoZVwiO1xuZXhwb3J0IHtSZXN1bHRDYWNoZX07IC8vIHNvIHVuaXQgdGVzdHMgY2FuIGFjY2VzcyBSZXNwb25zZUNhY2hlXG5pbXBvcnQge01lc3NhZ2VCb2R5LCBSZXF1ZXN0TWVzc2FnZUJvZHl9IGZyb20gXCIuL2pzb24tcnBjXCI7XG5pbXBvcnQge1Bvc3RNZXNzYWdlVHJhbnNwb3J0fSBmcm9tICcuL3RyYW5zcG9ydC9wb3N0LW1lc3NhZ2UtdHJhbnNwb3J0JztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEludm9jYXRpb25PcHRpb25zIHtcbiAgICB0aW1lb3V0OiBudW1iZXI7XG4gICAgcmV0cnlMaW1pdDogbnVtYmVyO1xuICAgIHJldHJ5QWxsRmFpbHVyZXMgOiBib29sZWFuO1xufVxuXG50eXBlIEludGVybmFsRXZlbnRDYWxsYmFja1R5cGUgPSAnb25VbmV4cGVjdGVkUmVzcG9uc2UnIHwgJ29uUmVjZWl2ZScgfCAnb25TZW5kJyB8ICdvblJlZ2lzdGVyJyB8ICdvbkNsb3NlJyB8ICdvblJlcXVlc3RSZXRyeScgfCAnb25SZXN1bHRDYWNoZUV2aWN0aW9uJztcblxuLy8gT3B0aW9uYWwgY2FsbGJhY2tzIGZvciBpbnRlcm5hbCBldmVudHMgdXNlZnVsIGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmdcbmV4cG9ydCB0eXBlIEludGVybmFsRXZlbnRDYWxsYmFja3MgPSB7XG4gICAgW2tleSBpbiBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tUeXBlXTogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJbml0UGFyYW1ldGVycyB7XG4gICAgd2luZG93UmVmOiBXaW5kb3c7XG4gICAgb3JpZ2luV2hpdGVsaXN0OiBzdHJpbmdbXTtcbiAgICBkZWZhdWx0SW52b2NhdGlvbk9wdGlvbnM6IEludm9jYXRpb25PcHRpb25zO1xuICAgIGV2ZW50Q2FsbGJhY2tzOiBQYXJ0aWFsPEludGVybmFsRXZlbnRDYWxsYmFja3M+O1xuICAgIHJlc3VsdENhY2hlQ2FwYWNpdHk6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENhbGxiYWNrRnVuY3Rpb25zIHtcbiAgICByZXNvbHZlOiAocmVzdWx0PzogYW55KSA9PiB2b2lkLFxuICAgIHJlamVjdDogKGVycm9yPzogYW55KSA9PiB2b2lkXG59XG5cbnR5cGUgUHJvY2VkdXJlSW1wbGVtZW50YXRpb24gPSAoLi4uYXJnczogYW55W10pID0+IGFueTtcblxudHlwZSBQcm9jZWR1cmVJbnZvY2F0aW9uQ29udGV4dCA9IHtyZXF1ZXN0TWVzc2FnZUJvZHk6IFJlcXVlc3RNZXNzYWdlQm9keSwgbWVzc2FnZVNvdXJjZTogV2luZG93LCBtZXNzYWdlT3JpZ2luOiBzdHJpbmd9O1xuXG5jb25zdCBSQU5ET01fQkFTRSA9IDM2O1xuY29uc3QgQ0FMTElEX0xFTkdUSCA9IDg7XG5jb25zdCBERUZBVUxUX0lOVk9DQVRJT05fT1BUSU9OUzpJbnZvY2F0aW9uT3B0aW9ucyA9IHtcbiAgICB0aW1lb3V0OiAxMDAsXG4gICAgcmV0cnlMaW1pdDogMixcbiAgICByZXRyeUFsbEZhaWx1cmVzOiBmYWxzZVxufVxuXG5leHBvcnQgY2xhc3MgTWluaUlmcmFtZVJQQyB7XG4gICAgcHJpdmF0ZSBjb25maWc6IEluaXRQYXJhbWV0ZXJzO1xuICAgIHByaXZhdGUgY2FsbGJhY2tzOiB7W2tleTpzdHJpbmddOkNhbGxiYWNrRnVuY3Rpb25zfSA9IHt9O1xuICAgIHByaXZhdGUgcmVnaXN0ZXJlZFByb2NlZHVyZXM6e1trZXk6c3RyaW5nXTogUHJvY2VkdXJlSW1wbGVtZW50YXRpb259ID0ge307XG4gICAgcHJpdmF0ZSByZXN1bHRDYWNoZTpSZXN1bHRDYWNoZTtcbiAgICBwcml2YXRlIHRyYW5zcG9ydDogUG9zdE1lc3NhZ2VUcmFuc3BvcnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihpbml0UGFyYW1ldGVycz86IFBhcnRpYWw8SW5pdFBhcmFtZXRlcnM+KSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgd2luZG93UmVmOiBpbml0UGFyYW1ldGVycyAmJiBpbml0UGFyYW1ldGVycy53aW5kb3dSZWYgfHwgd2luZG93LFxuICAgICAgICAgICAgb3JpZ2luV2hpdGVsaXN0OiBpbml0UGFyYW1ldGVycyAmJiBpbml0UGFyYW1ldGVycy5vcmlnaW5XaGl0ZWxpc3QgfHwgW10sXG4gICAgICAgICAgICBkZWZhdWx0SW52b2NhdGlvbk9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfSU5WT0NBVElPTl9PUFRJT05TLCBpbml0UGFyYW1ldGVycyAmJiBpbml0UGFyYW1ldGVycy5kZWZhdWx0SW52b2NhdGlvbk9wdGlvbnMgfHwge30pLCAgICAgICAgICAgIFxuICAgICAgICAgICAgZXZlbnRDYWxsYmFja3M6IGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLmV2ZW50Q2FsbGJhY2tzIHx8IHt9LFxuICAgICAgICAgICAgcmVzdWx0Q2FjaGVDYXBhY2l0eTogaW5pdFBhcmFtZXRlcnMgJiYgdHlwZW9mIGluaXRQYXJhbWV0ZXJzLnJlc3VsdENhY2hlQ2FwYWNpdHkgPT09ICdudW1iZXInID8gaW5pdFBhcmFtZXRlcnMucmVzdWx0Q2FjaGVDYXBhY2l0eSA6IERFRkFVTFRfUkVTVUxUX0NBQ0hFX0NBUEFDSVRZXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVzdWx0Q2FjaGUgPSBuZXcgUmVzdWx0Q2FjaGUoe1xuICAgICAgICAgICAgY2FwYWNpdHk6IHRoaXMuY29uZmlnLnJlc3VsdENhY2hlQ2FwYWNpdHksXG4gICAgICAgICAgICBldmljdGlvbkNhbGxiYWNrOiAoaWQsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25SZXN1bHRDYWNoZUV2aWN0aW9uXCIsIGlkLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSBuZXcgUG9zdE1lc3NhZ2VUcmFuc3BvcnQoXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy53aW5kb3dSZWYsXG4gICAgICAgICAgICB0aGlzLnJlY3YsXG4gICAgICAgICAgICB7J29yaWdpbldoaXRlbGlzdCc6IHRoaXMuY29uZmlnLm9yaWdpbldoaXRlbGlzdH0pOyAgICAgICAgXG4gICAgfSAgICAgICAgXG5cbiAgICByZWdpc3Rlcihwcm9jZWR1cmVOYW1lOiBzdHJpbmcsIGltcGxlbWVudGF0aW9uPzogUHJvY2VkdXJlSW1wbGVtZW50YXRpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblJlZ2lzdGVyXCIsIHByb2NlZHVyZU5hbWUsIGltcGxlbWVudGF0aW9uKVxuICAgICAgICBpZiAoaW1wbGVtZW50YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlTmFtZV0gPSBpbXBsZW1lbnRhdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzW3Byb2NlZHVyZU5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW52b2tlICh0YXJnZXRXaW5kb3c6IFdpbmRvdywgdGFyZ2V0T3JpZ2luOiBzdHJpbmcgfCBudWxsLCBtZXRob2Q6IHN0cmluZywgcGFyYW1zPzogYW55W10sIGludm9jYXRpb25PcHRpb25zPzogSW52b2NhdGlvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb25maWcuZGVmYXVsdEludm9jYXRpb25PcHRpb25zLCBpbnZvY2F0aW9uT3B0aW9ucyB8fCB7fSk7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXROZXh0Q2FsbElkKCk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RNZXNzYWdlQm9keTogUmVxdWVzdE1lc3NhZ2VCb2R5ID0ge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICBwYXJhbXM6IChwYXJhbXMgfHwgW10pfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0V2l0aFJldHJ5KHRhcmdldFdpbmRvdywgdGFyZ2V0T3JpZ2luLCByZXF1ZXN0TWVzc2FnZUJvZHksIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uQ2xvc2VcIik7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7ICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlcXVlc3RXaXRoUmV0cnkodGFyZ2V0V2luZG93OiBXaW5kb3csIHRhcmdldE9yaWdpbjogc3RyaW5nIHwgbnVsbCwgcmVxdWVzdE1lc3NhZ2VCb2R5OlJlcXVlc3RNZXNzYWdlQm9keSwgb3B0aW9uczogSW52b2NhdGlvbk9wdGlvbnMpOlByb21pc2U8YW55PiB7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVxdWVzdENvdW50ID0gMDtcbiAgICAgICAgbGV0IGZhaWx1cmVDb3VudCA9IDA7ICAgICAgICBcbiAgICAgICAgbGV0IGZpbmFsUmVzb2x2ZToocmVzdWx0PzogYW55KSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuICAgICAgICBsZXQgZmluYWxSZWplY3Q6KGVycm9yPzogYW55KSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuICAgICAgICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUmVqZWN0UmVhc29uczphbnlbXSA9IFtdOyAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBpc0Vycm9yUmV0cmlhYmxlID0gKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRpbWVvdXQgPD0gMCB8fCBvcHRpb25zLnJldHJ5TGltaXQgPCAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5yZXRyeUFsbEZhaWx1cmVzIHx8IChlcnJvciBpbnN0YW5jZW9mIFRpbWVvdXRFcnJvcik7ICAgICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWFrZVJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZSh0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgcmVxdWVzdE1lc3NhZ2VCb2R5KS50aGVuKFxuICAgICAgICAgICAgICAgICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3NbcmVxdWVzdE1lc3NhZ2VCb2R5LmlkXSA9IHtyZXNvbHZlLCByZWplY3R9O1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc29sdmUgPSAocmVzdWx0PzogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBmaXJzdCBzdWNjZXNzZnVsIHJlcXVlc3QgaW1tZWRpYXRlbHkgcmVzb2x2ZXMgdGhlIGludm9jYXRpb24gcHJvbWlzZVxuICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZpbmFsUmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlUmVqZWN0ID0gKHJlYXNvbj86IGFueSkgPT4ge1xuICAgICAgICAgICAgZmFpbHVyZUNvdW50ICs9IDE7XG4gICAgICAgICAgICAvLyBJZiByZXF1ZXN0IGhhcyBzaW5jZSBiZWVuIGNvbXBsZXRlZCwgZG8gbm90aGluZ1xuICAgICAgICAgICAgLy8gUmV0cnkgcmVxdWVzdCBvciBmYWlsIHBlcm1hbmVudGx5IGlmIG5vIG91dHN0YW5kaW5nIHJlcXVlc3RzIHN0aWxsIGluIGZsaWdodFxuICAgICAgICAgICAgaWYgKCFjb21wbGV0ZWQgJiYgZmFpbHVyZUNvdW50ID09PSByZXF1ZXN0Q291bnQpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpc0Vycm9yUmV0cmlhYmxlKHJlYXNvbikgJiYgcmVxdWVzdENvdW50IDwgKG9wdGlvbnMucmV0cnlMaW1pdCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25SZXF1ZXN0UmV0cnlcIiwgcmVhc29uLCBwcmV2aW91c1JlamVjdFJlYXNvbnMsIHJlcXVlc3RNZXNzYWdlQm9keSk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVqZWN0UmVhc29ucy5wdXNoKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgICAgIG1ha2VBdHRlbXB0KCk7XG4gICAgICAgICAgICAgICAgLy8gSWYgZXJyb3IgaXMgbm9uLXJldHJpYWJsZSBhbmQgdGhlcmUgYXJlIG5vIHVuYW5zd2VyZWQgcmVxdWVzdHMsIGdpdmUgdXAuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxSZWplY3QobmV3IEludm9jYXRpb25FcnJvcihyZXF1ZXN0TWVzc2FnZUJvZHkubWV0aG9kLCByZWFzb24sIHByZXZpb3VzUmVqZWN0UmVhc29ucykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGFyZSBzdGlsbCBvdXRzdGFuZGluZyByZXF1ZXN0cywgd2FpdCBmb3IgdGhlbSB0byBzdWNjZWVkIG9yIGZhaWwuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWFrZUF0dGVtcHQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0Q291bnQgKz0gMTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZVByb21pc2UgPSBtYWtlUmVxdWVzdCgpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudGltZW91dCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVByb21pc2UgPSB0aGlzLnRpbWVib3hQcm9taXNlKHJlc3BvbnNlUHJvbWlzZSwgb3B0aW9ucy50aW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZS50aGVuKGhhbmRsZVJlc29sdmUsIGhhbmRsZVJlamVjdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmaW5hbFJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgZmluYWxSZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpbml0aWFsIGF0dGVtcHRcbiAgICAgICAgbWFrZUF0dGVtcHQoKTtcblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnRlcm5hbEV2ZW50Q2FsbGJhY2soaW50ZXJuYWxFdmVudENhbGxiYWNrOiBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tUeXBlLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBjYiA9IHRoaXMuY29uZmlnLmV2ZW50Q2FsbGJhY2tzW2ludGVybmFsRXZlbnRDYWxsYmFja107XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgY2IuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRpbWVib3hQcm9taXNlKG9yaWdpbmFsUHJvbWlzZTogUHJvbWlzZTxhbnk+LCB0aW1lb3V0TWlsbGlTZWNvbmRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIG9yaWdpbmFsUHJvbWlzZSxcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcud2luZG93UmVmLnNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHJlamVjdChuZXcgVGltZW91dEVycm9yKHt0aW1lb3V0TWlsbGlTZWNvbmRzfSkpLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0TWlsbGlTZWNvbmRzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pO1xuICAgIH0gICBcblxuICAgIHByaXZhdGUgZ2V0TmV4dENhbGxJZCAoKSB7XG4gICAgICAgIGxldCByYW5kb21JZCA6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICB3aGlsZSghcmFuZG9tSWQgfHwgdGhpcy5jYWxsYmFja3NbcmFuZG9tSWRdKSB7XG4gICAgICAgICAgICByYW5kb21JZCA9IGBjYiR7TWF0aC5yYW5kb20oKS50b1N0cmluZyhSQU5ET01fQkFTRSkucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIENBTExJRF9MRU5HVEgpfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmFuZG9tSWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kTWVzc2FnZSAodGFyZ2V0V2luZG93OiBXaW5kb3csIHRhcmdldE9yaWdpbjogc3RyaW5nIHwgbnVsbCwgbWVzc2FnZUJvZHk6IE1lc3NhZ2VCb2R5KSA6IFByb21pc2U8dm9pZD4geyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uU2VuZFwiLCBtZXNzYWdlQm9keSwgdGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChcbiAgICAgICAgICAgICAgICB7dGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW59LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb2R5KTtcbiAgICB9ICAgICAgICBcblxuICAgIHByaXZhdGUgaXNBcnJheShhcmc6YW55KSB7XG4gICAgICAgIC8vIEFycmF5LmlzQXJyYXkgZG9lc24ndCB3b3JrIGluIElFOCBhbmQgZG9lc24ndCBuZWNlc3NhcmlseSB3b3JrIGNyb3NzLXdpbmRvd1xuICAgICAgICAvLyBmcm9tOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9pc0FycmF5XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJzsgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHVucGFja1BhcmFtcyhwYXJhbXM6YW55KSB7XG4gICAgICAgIGlmICh0aGlzLmlzQXJyYXkocGFyYW1zKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbcGFyYW1zXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVJlcXVlc3QgKHJlcXVlc3RNZXNzYWdlQm9keTpSZXF1ZXN0TWVzc2FnZUJvZHksIG1lc3NhZ2VTb3VyY2U6IFdpbmRvdywgbWVzc2FnZU9yaWdpbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcmVxdWVzdE1lc3NhZ2VCb2R5LmlkO1xuICAgICAgICBjb25zdCBtZXRob2QgPSByZXF1ZXN0TWVzc2FnZUJvZHkubWV0aG9kO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLnVucGFja1BhcmFtcyhyZXF1ZXN0TWVzc2FnZUJvZHkucGFyYW1zKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VPcmlnaW4gPSAhbWVzc2FnZU9yaWdpbiB8fCBtZXNzYWdlT3JpZ2luID09PSBcIm51bGxcIiA/IG51bGwgOiBtZXNzYWdlT3JpZ2luO1xuICAgICAgICBjb25zdCBzZW5kRXJyb3IgPSAocmVqZWN0T3JFcnJvcjogYW55LCBleGNlcHRpb25OYW1lPzpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbmRpbmdFcnJvciA9IGlzRXJyb3IocmVqZWN0T3JFcnJvcik7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VTb3VyY2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPcmlnaW4sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgaXNFcnJvckluc3RhbmNlOiBzZW5kaW5nRXJyb3IsICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHNlbmRpbmdFcnJvciA/IHNlcmlhbGl6ZVJlbW90ZUVycm9yKHJlamVjdE9yRXJyb3IsIGV4Y2VwdGlvbk5hbWUpIDogcmVqZWN0T3JFcnJvclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBnZXRSZXN1bHQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXN1bHRDYWNoZS5oYXNDYWNoZWRSZXN1bHQoaWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0Q2FjaGUuZ2V0Q2FjaGVkUmVzdWx0KGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZWdpc3RlcmVkUHJvY2VkdXJlc1ttZXRob2RdLmFwcGx5KFxuICAgICAgICAgICAgICAgICAgICB7cmVxdWVzdE1lc3NhZ2VCb2R5LCBtZXNzYWdlU291cmNlLCBtZXNzYWdlT3JpZ2lufSxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdENhY2hlLnNldENhY2hlZFJlc3VsdChpZCwgcmVzdWx0UHJvbWlzZSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5yZWdpc3RlcmVkUHJvY2VkdXJlc1ttZXRob2RdKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICBnZXRSZXN1bHQoKVxuICAgICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0PzphbnkpID0+IHRoaXMuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlU291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VPcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBzZW5kRXJyb3IoZXJyb3IsIFNlbmRNZXNzYWdlRXJyb3IubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yPzphbnkpID0+IHNlbmRFcnJvcihlcnJvciwgRXZhbHVhdGlvbkVycm9yLm5hbWUpXG4gICAgICAgICAgICAgICAgKTsgICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRFcnJvcihuZXcgUHJvY2VkdXJlTm90Rm91bmRFcnJvcih7cHJvY2VkdXJlTmFtZTogbWV0aG9kfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVSZXNwb25zZShtZXNzYWdlQm9keTogTWVzc2FnZUJvZHkpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tGdW5jdGlvbnMgPSB0aGlzLmNhbGxiYWNrc1ttZXNzYWdlQm9keS5pZF07XG4gICAgICAgIGlmIChjYWxsYmFja0Z1bmN0aW9ucykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2FsbGJhY2tzW21lc3NhZ2VCb2R5LmlkXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICgnaXNFcnJvckluc3RhbmNlJyBpbiBtZXNzYWdlQm9keSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yT2JqZWN0ID0gbWVzc2FnZUJvZHkuaXNFcnJvckluc3RhbmNlID8gZGVzZXJpYWxpemVSZW1vdGVFcnJvcihtZXNzYWdlQm9keS5lcnJvcikgOiBtZXNzYWdlQm9keS5lcnJvcjtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9ucy5yZWplY3QoZXJyb3JPYmplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgncmVzdWx0JyBpbiBtZXNzYWdlQm9keSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb25zLnJlc29sdmUobWVzc2FnZUJvZHkucmVzdWx0KTtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblVuZXhwZWN0ZWRSZXNwb25zZVwiLCBtZXNzYWdlQm9keSk7XG4gICAgICAgIH0gICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlY3YgPSAobWVzc2FnZUJvZHk6TWVzc2FnZUJvZHksIG1lc3NhZ2VTb3VyY2U6IFdpbmRvdywgbWVzc2FnZU9yaWdpbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25SZWNlaXZlXCIsIG1lc3NhZ2VCb2R5LCBtZXNzYWdlU291cmNlLCBtZXNzYWdlT3JpZ2luKTsgICAgXG4gICAgICAgIGlmICgnbWV0aG9kJyBpbiBtZXNzYWdlQm9keSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0KG1lc3NhZ2VCb2R5LCBtZXNzYWdlU291cmNlLCBtZXNzYWdlT3JpZ2luKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzcG9uc2UobWVzc2FnZUJvZHkpO1xuICAgICAgICB9ICAgICAgICAgICAgXG4gICAgfVxuXG59IC8vIGVuZCBvZiBjbGFzc1xuIiwiZXhwb3J0IGludGVyZmFjZSBSZXN1bHRDYWNoZVBhcmFtZXRlcnMge1xuICAgIGNhcGFjaXR5OiBudW1iZXI7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGV2aWN0aW9uQ2FsbGJhY2s/OiAoY2FsbElkOnN0cmluZywgcmVzdWx0OmFueSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1JFU1VMVF9DQUNIRV9DQVBBQ0lUWSA9IDIwMDtcblxuXG5jb25zdCBERUZBVUxUX1BBUkFNRVRFUlM6UmVzdWx0Q2FjaGVQYXJhbWV0ZXJzID0ge1xuICAgIGNhcGFjaXR5OiBERUZBVUxUX1JFU1VMVF9DQUNIRV9DQVBBQ0lUWSxcbn07XG5cbmV4cG9ydCBjbGFzcyBSZXN1bHRDYWNoZSB7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcHJpdmF0ZSBpZHM6IHN0cmluZ1tdID0gW107XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHByaXZhdGUgcmVzdWx0czoge1trZXk6c3RyaW5nXTphbnl9ID0ge307XG4gICAgcHJpdmF0ZSBjb25maWc6IFJlc3VsdENhY2hlUGFyYW1ldGVycztcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IFBhcnRpYWw8UmVzdWx0Q2FjaGVQYXJhbWV0ZXJzPikge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfUEFSQU1FVEVSUywgY29uZmlnIHx8IHt9KTtcbiAgICB9XG5cbiAgICBoYXNDYWNoZWRSZXN1bHQoaWQ6c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHMuaGFzT3duUHJvcGVydHkoaWQpO1xuICAgIH1cblxuICAgIGdldENhY2hlZFJlc3VsdChpZDpzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0c1tpZF07XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHNldENhY2hlZFJlc3VsdChpZDpzdHJpbmcsIHJlc3VsdDphbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2FjaGVkUmVzdWx0KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5pZHMgPSB0aGlzLmlkcy5maWx0ZXIoYyA9PiBjICE9PSBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pZHMudW5zaGlmdChpZCk7XG4gICAgICAgIHRoaXMucmVzdWx0c1tpZF0gPSByZXN1bHQ7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5jYXBhY2l0eSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVuZm9yY2VDYXBhY2l0eSgpO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZm9yY2VDYXBhY2l0eSgpIHtcbiAgICAgICAgZm9yIChsZXQgc2l6ZSA9IHRoaXMuaWRzLmxlbmd0aDsgc2l6ZSA+IHRoaXMuY29uZmlnLmNhcGFjaXR5OyBzaXplLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5pZHMucG9wKCkhO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHRzW2lkXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlc3VsdHNbaWRdO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmV2aWN0aW9uQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5ldmljdGlvbkNhbGxiYWNrKGlkLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IHtNZXNzYWdlQm9keX0gZnJvbSAnLi4vanNvbi1ycGMnO1xuaW1wb3J0IHtSZWNpcGllbnQsIFRyYW5zcG9ydENvbmZpZywgVHJhbnNwb3J0SW50ZXJmYWNlfSBmcm9tICcuL3RyYW5zcG9ydCc7XG5cbmNvbnN0IGlzSW50ZXJuZXRFeHBsb3JlciA9ICgpID0+IChcbiAgICAvLyBiYXNlZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDg2MTA3My9kZXRlY3QtaWYtYW55LWtpbmQtb2YtaWUtbXNpZS8yNDg2MTMwNyMyNDg2MTMwNyAgICBcbiAgICBuYXZpZ2F0b3IuYXBwTmFtZSA9PT0gJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlcicgfHwgXG4gICAgISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50fE1TSUV8cnY6MTEvKSk7XG5cbmNvbnN0IFBPU1RNRVNTQUdFX1RZUEUgPSBcIm1pbmktaWZyYW1lLXJwY1wiO1xuXG5jb25zdCBERUZBVUxUX0NPTkZJRzpUcmFuc3BvcnRDb25maWcgPSB7XG4gICAgLy8gSUUgbmVlZHMgcG9zdG1lc3NhZ2VzIHRvIGNvbnRhaW4gc3RyaW5ncyBpbnN0ZWFkIG9mIG9iamVjdHNcbiAgICBzdHJpbmdpZnlPYmplY3RzOiBpc0ludGVybmV0RXhwbG9yZXIoKVxufTtcblxuZXhwb3J0IHR5cGUgT25SZWNlaXZlID0gKG1lc3NhZ2VCb2R5Ok1lc3NhZ2VCb2R5LCBtZXNzYWdlU291cmNlOiBXaW5kb3csIG1lc3NhZ2VPcmlnaW46IHN0cmluZykgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIFBvc3RNZXNzYWdlVHJhbnNwb3J0IGltcGxlbWVudHMgVHJhbnNwb3J0SW50ZXJmYWNle1xuXG4gICAgcHJpdmF0ZSB3aW5kb3dSZWY6IFdpbmRvdztcbiAgICBwcml2YXRlIGNvbmZpZzogVHJhbnNwb3J0Q29uZmlnO1xuICAgIHByaXZhdGUgb25SZWNlaXZlOiBPblJlY2VpdmU7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aW5kb3dSZWY6IFdpbmRvdywgb25SZWNlaXZlOiBPblJlY2VpdmUsIGNvbmZpZz86IFBhcnRpYWw8VHJhbnNwb3J0Q29uZmlnPikge1xuICAgICAgICB0aGlzLndpbmRvd1JlZiA9IHdpbmRvd1JlZiB8fCB3aW5kb3c7XG4gICAgICAgIHRoaXMub25SZWNlaXZlID0gb25SZWNlaXZlO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfQ09ORklHLCBjb25maWcgfHzCoHt9KTtcbiAgICAgICAgdGhpcy53aW5kb3dSZWYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5yZWN2KTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy53aW5kb3dSZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5yZWN2KTtcbiAgICB9XG5cbiAgICBzZW5kIChyZWNpcGllbnQ6UmVjaXBpZW50LCBtZXNzYWdlQm9keTogTWVzc2FnZUJvZHkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudmVsb3BlZE1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFBPU1RNRVNTQUdFX1RZUEUsXG4gICAgICAgICAgICAgICAgXCJwYXlsb2FkXCI6IG1lc3NhZ2VCb2R5XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVjaXBpZW50LnRhcmdldFdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zdHJpbmdpZnlPYmplY3RzID8gSlNPTi5zdHJpbmdpZnkoZW52ZWxvcGVkTWVzc2FnZSwgKF9rLHYpID0+IHYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB2KSA6IGVudmVsb3BlZE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgcmVjaXBpZW50LnRhcmdldE9yaWdpbiB8fCBcIipcIik7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcHJpdmF0ZSByZWFkTWVzc2FnZURhdGEobWVzc2FnZUV2ZW50OiBNZXNzYWdlRXZlbnQpOmFueSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZUV2ZW50LmRhdGEgPT09ICdzdHJpbmcnICYmIEpTT04gJiYgaXNJbnRlcm5ldEV4cGxvcmVyKCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobWVzc2FnZUV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIEpTT04gcGFyc2UgZXJyb3IsIHNpbGVudGx5IGRpc2NhcmQgbWVzc2FnZVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VFdmVudC5kYXRhO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIHJlY3YgPSAobWVzc2FnZUV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCF0aGlzLmNvbmZpZy5vcmlnaW5XaGl0ZWxpc3QgfHwgdGhpcy5jb25maWcub3JpZ2luV2hpdGVsaXN0Lmxlbmd0aCA8IDEgfHwgdGhpcy5jb25maWcub3JpZ2luV2hpdGVsaXN0LmluZGV4T2YobWVzc2FnZUV2ZW50Lm9yaWdpbikgPiAtMSkgJiYgbWVzc2FnZUV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VEYXRhID0gdGhpcy5yZWFkTWVzc2FnZURhdGEobWVzc2FnZUV2ZW50KTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YSAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBQT1NUTUVTU0FHRV9UWVBFICYmIG1lc3NhZ2VEYXRhLnBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVjZWl2ZShcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZURhdGEucGF5bG9hZCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUV2ZW50LnNvdXJjZSBhcyBXaW5kb3csXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFdmVudC5vcmlnaW4pO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIG90aGVyd2lzZSBkcm9wIHRoZSBtZXNzYWdlIHNpbGVudGx5XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=