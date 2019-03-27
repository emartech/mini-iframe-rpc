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
var isError = function (rejectOrError) { return !!rejectOrError && ((rejectOrError instanceof Error) ||
    (rejectOrError.stack && rejectOrError.message && typeof rejectOrError.stack === 'string' && typeof rejectOrError.message === 'string')); };


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
    MiniIframeRPC.prototype.handleRequest = function (requestMessageBody, messageSource, messageOrigin) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, method, params, responseOrigin, sendError, getResult;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = requestMessageBody.id;
                method = requestMessageBody.method;
                params = requestMessageBody.params;
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
            if ('result' in messageBody) {
                callbackFunctions.resolve(messageBody.result);
            }
            else if ('error' in messageBody) {
                var errorObject = messageBody.isErrorInstance ? Object(_errors__WEBPACK_IMPORTED_MODULE_1__["deserializeRemoteError"])(messageBody.error) : messageBody.error;
                callbackFunctions.reject(errorObject);
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
                var messageData = (typeof messageEvent.data === 'string' && JSON) ? JSON.parse(messageEvent.data) : messageEvent.data;
                if (messageData.type === POSTMESSAGE_TYPE && messageData.payload) {
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
            recipient.targetWindow.postMessage(_this.config.stringifyObjects ? JSON.stringify(envelopedMessage) : envelopedMessage, recipient.targetOrigin || "*");
            resolve();
        });
    };
    ;
    return PostMessageTransport;
}());



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvZXZhbHVhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL2luZGV4LnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvaW52b2NhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL2lzLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvbWluaS1pZnJhbWUtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL2Vycm9ycy9wcm9jZWR1cmUtbm90LWZvdW5kLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvcmVtb3RlLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvc2VuZC1tZXNzYWdlLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvdGltZW91dC1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvbWluaS1pZnJhbWUtcnBjLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9yZXN1bHQtY2FjaGUudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL3RyYW5zcG9ydC9wb3N0LW1lc3NhZ2UtdHJhbnNwb3J0LnRz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O0FBQUQsQ0FBQyIsImZpbGUiOiJtaW5pLWlmcmFtZS1ycGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm1pbmktaWZyYW1lLXJwY1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW5pLWlmcmFtZS1ycGNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWluaS1pZnJhbWUtcnBjXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21pbmktaWZyYW1lLXJwYy50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVtb3RlRXJyb3IgfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBFdmFsdWF0aW9uRXJyb3IgZXh0ZW5kcyBSZW1vdGVFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvcjogUmVtb3RlRXJyb3IpIHtcbiAgICAgICAgc3VwZXIoZXJyb3IuY2F1c2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBFdmFsdWF0aW9uRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQge0V2YWx1YXRpb25FcnJvcn0gZnJvbSAnLi9ldmFsdWF0aW9uLWVycm9yJztcbmltcG9ydCB7SW52b2NhdGlvbkVycm9yfSBmcm9tICcuL2ludm9jYXRpb24tZXJyb3InO1xuaW1wb3J0IHtpc0Vycm9yfSBmcm9tICcuL2lzLWVycm9yJztcbmltcG9ydCB7TWluaUlmcmFtZUVycm9yfSBmcm9tICcuL21pbmktaWZyYW1lLWVycm9yJztcbmltcG9ydCB7UHJvY2VkdXJlTm90Rm91bmRFcnJvcn0gZnJvbSAnLi9wcm9jZWR1cmUtbm90LWZvdW5kLWVycm9yJztcbmltcG9ydCB7ZXJyb3JUb0pTT04sIFJlbW90ZUVycm9yLCBSZW1vdGVFcnJvckNhdXNlfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5pbXBvcnQge1NlbmRNZXNzYWdlRXJyb3J9IGZyb20gJy4vc2VuZC1tZXNzYWdlLWVycm9yJztcbmltcG9ydCB7VGltZW91dEVycm9yfSBmcm9tICcuL3RpbWVvdXQtZXJyb3InO1xuXG5leHBvcnQge01pbmlJZnJhbWVFcnJvciwgUHJvY2VkdXJlTm90Rm91bmRFcnJvciwgRXZhbHVhdGlvbkVycm9yLCBUaW1lb3V0RXJyb3IsIGlzRXJyb3IsIFNlbmRNZXNzYWdlRXJyb3IsIFJlbW90ZUVycm9yLCBJbnZvY2F0aW9uRXJyb3J9O1xuXG50eXBlIFJlbW90ZUVycm9yQ29uc3RydWN0b3IgPSBuZXcgKHN0YXRlOiBQYXJ0aWFsPFJlbW90ZUVycm9yPikgPT4gUmVtb3RlRXJyb3I7XG5cbnR5cGUgRVJST1JfTUFQID0ge1xuICAgIFtrZXk6IHN0cmluZ106IFJlbW90ZUVycm9yQ29uc3RydWN0b3Jcbn1cblxuY29uc3QgcmVtb3RlRXJyb3JDbGFzc2VzID0gKFtcbiAgICBQcm9jZWR1cmVOb3RGb3VuZEVycm9yLFxuICAgIEV2YWx1YXRpb25FcnJvcixcbiAgICBTZW5kTWVzc2FnZUVycm9yXG4gICAgXSBhcyBSZW1vdGVFcnJvckNvbnN0cnVjdG9yW10pLnJlZHVjZShcbiAgICAob2JqOkVSUk9SX01BUCwgY29uc3RyOlJlbW90ZUVycm9yQ29uc3RydWN0b3IpID0+IHtcbiAgICAgICAgb2JqW2NvbnN0ci5uYW1lXSA9IGNvbnN0cjtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sIHt9IGFzIEVSUk9SX01BUCk7ICAgIFxuXG5leHBvcnQgY29uc3Qgc2VyaWFsaXplUmVtb3RlRXJyb3IgPSAoY2F1c2U6IFJlbW90ZUVycm9yQ2F1c2UsIHJlbW90ZUV4Y2VwdGlvbk5hbWU/OiBzdHJpbmcpOlJlbW90ZUVycm9yID0+IHsgICAgXG4gICAgXG4gICAgY29uc3QgY29udmVydCA9IChlcnI6IFJlbW90ZUVycm9yKTpSZW1vdGVFcnJvciA9PiB7XG4gICAgICAgIGNvbnN0IGVyckpTT046UmVtb3RlRXJyb3IgPSBlcnJvclRvSlNPTihlcnIpOyAgICAgICAgXG4gICAgICAgIGlmIChyZW1vdGVFeGNlcHRpb25OYW1lKSB7XG4gICAgICAgICAgICBlcnJKU09OLm5hbWUgPSByZW1vdGVFeGNlcHRpb25OYW1lO1xuICAgICAgICB9ICAgICBcblxuICAgICAgICByZXR1cm4gZXJySlNPTjtcbiAgICB9XG4gICAgaWYgKGNhdXNlIGluc3RhbmNlb2YgUmVtb3RlRXJyb3IpIHtcbiAgICAgICAgLy8gaWYgY2F1c2UgaXMgYWxyZWFkeSBhIHJlbW90ZUVycm9yLCByZXR1cm4gYXMgaXNcbiAgICAgICAgcmV0dXJuIGNvbnZlcnQoY2F1c2UpO1xuICAgIH0gICAgXG4gICAgLy8gZm9yIGJvdGggRXJyb3IgYW5kIFN0cmluZyB0eXBlIGNhdXNlcywgY3JlYXRlIGEgbmV3IFJlbW90ZUVycm9yIFxuXG4gICAgcmV0dXJuIGNvbnZlcnQobmV3IFJlbW90ZUVycm9yKGNhdXNlKSk7ICAgIFxufTsgICBcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGNvbnN0IGRlc2VyaWFsaXplUmVtb3RlRXJyb3IgPSAoZXJyb3I6UmVtb3RlRXJyb3IpID0+IHtcbiAgICBjb25zdCBjb25zdHIgPSByZW1vdGVFcnJvckNsYXNzZXNbZXJyb3IubmFtZV0gfHwgUmVtb3RlRXJyb3I7XG5cbiAgICByZXR1cm4gbmV3IGNvbnN0cihlcnJvcik7XG59OyIsImltcG9ydCB7aXNFcnJvcn0gZnJvbSAnLi9pcy1lcnJvcic7XG5pbXBvcnQge01pbmlJZnJhbWVFcnJvcn0gZnJvbSAnLi9taW5pLWlmcmFtZS1lcnJvcic7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmNvbnN0IG1ha2VNZXNzYWdlID0gKHByb2NlZHVyZU5hbWU6IHN0cmluZywgY2F1c2U/OiBhbnksIHByZXZpb3VzUmVqZWN0UmVhc29ucz86IGFueVtdKTpzdHJpbmcgPT4ge1xuICAgIGxldCBtZXNzYWdlID0gYEVycm9yIGludm9raW5nIHJlbW90ZSBwcm9jZWR1cmUgJyR7cHJvY2VkdXJlTmFtZX0nLmA7XG4gICAgaWYgKGlzRXJyb3IoY2F1c2UpKSB7ICAgICAgICBcbiAgICAgICAgbWVzc2FnZSArPSBgICR7Y2F1c2UubmFtZX06ICR7Y2F1c2UubWVzc2FnZX0uYDtcbiAgICB9IGVsc2UgaWYgKGNhdXNlKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnNhZmUtYW55XG4gICAgICAgIG1lc3NhZ2UgKz0gYCBSZWFzb246ICR7Y2F1c2UudG9TdHJpbmcoKX1gO1xuICAgIH1cbiAgICBpZiAocHJldmlvdXNSZWplY3RSZWFzb25zICYmIHByZXZpb3VzUmVqZWN0UmVhc29ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHBsdXJhbCA9IHByZXZpb3VzUmVqZWN0UmVhc29ucy5sZW5ndGggPiAxID8gJ3MnIDogJyc7XG4gICAgICAgIG1lc3NhZ2UgKz0gYCAke3ByZXZpb3VzUmVqZWN0UmVhc29ucy5sZW5ndGh9IGFkZGl0aW9uYWwgcmVqZWN0aW9uJHtwbHVyYWx9IGZyb20gcmV0cmllZCBhdHRlbXB0JHtwbHVyYWx9LmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG59O1xuXG5leHBvcnQgY2xhc3MgSW52b2NhdGlvbkVycm9yIGV4dGVuZHMgTWluaUlmcmFtZUVycm9yIHtcblxuICAgIHByb2NlZHVyZU5hbWU6IHN0cmluZztcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY2F1c2U/OiBhbnk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHByZXZpb3VzUmVqZWN0UmVhc29ucz86IGFueVtdO1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGNvbnN0cnVjdG9yKHByb2NlZHVyZU5hbWU6IHN0cmluZywgY2F1c2U/OiBhbnksIHByZXZpb3VzUmVqZWN0UmVhc29ucz86IGFueVtdKSB7XG4gICAgICAgIHN1cGVyKG1ha2VNZXNzYWdlKHByb2NlZHVyZU5hbWUsIGNhdXNlLCBwcmV2aW91c1JlamVjdFJlYXNvbnMpKTsgICAgICAgICAgICAgICAgXG4gICAgICAgIHRoaXMubmFtZSA9IEludm9jYXRpb25FcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgXG4gICAgICAgIHRoaXMucHJvY2VkdXJlTmFtZSA9IHByb2NlZHVyZU5hbWU7XG4gICAgICAgIHRoaXMuY2F1c2UgPSBjYXVzZTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1JlamVjdFJlYXNvbnMgPSBwcmV2aW91c1JlamVjdFJlYXNvbnM7ICAgICAgICAgICAgICBcbiAgICB9ICAgIFxufSIsIi8vIHRoZSB3b25kZXJzIG9mIEphdmFzY3JpcHQ6IEVycm9yIGRldGVjdGlvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDU0OTYwNjhcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBjb25zdCBpc0Vycm9yID0gKHJlamVjdE9yRXJyb3I/OmFueSkgPT4gISFyZWplY3RPckVycm9yICYmIChcbiAgICAgICAgICAgICAgICAocmVqZWN0T3JFcnJvciBpbnN0YW5jZW9mIEVycm9yKSB8fCBcbiAgICAgICAgICAgICAgICAocmVqZWN0T3JFcnJvci5zdGFjayAmJiByZWplY3RPckVycm9yLm1lc3NhZ2UgJiYgdHlwZW9mIHJlamVjdE9yRXJyb3Iuc3RhY2sgPT09ICdzdHJpbmcnICYmIHR5cGVvZiByZWplY3RPckVycm9yLm1lc3NhZ2UgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgKTsiLCJleHBvcnQgY2xhc3MgTWluaUlmcmFtZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXG4gICAgdGltZXN0YW1wOm51bWJlcjtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nLCBzdGF0ZT86IGFueSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSDCoCsobmV3IERhdGUoKSk7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2VlOiB0eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9yZWxlYXNlLW5vdGVzL3R5cGVzY3JpcHQtMi0yLmh0bWxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVuc2FmZS1hbnlcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTsgLy8gcmVzdG9yZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgdGhpcy5uYW1lID0gTWluaUlmcmFtZUVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgXG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZW1vdGVFcnJvciB9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcblxuZXhwb3J0IGNsYXNzIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBSZW1vdGVFcnJvciB7XG5cbiAgICBwcm9jZWR1cmVOYW1lID0gXCJ1bmtub3duXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGFydGlhbDxQcm9jZWR1cmVOb3RGb3VuZEVycm9yPikge1xuICAgICAgICBzdXBlcihgUmVtb3RlIHByb2NlZHVyZSAnJHtzdGF0ZS5wcm9jZWR1cmVOYW1lfScgbm90IHJlZ2lzdGVyZWQgaW4gcmVtb3RlIFJQQyBpbnN0YW5jZS5gKTtcbiAgICAgICAgaWYgKHN0YXRlLnByb2NlZHVyZU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2VkdXJlTmFtZSA9IHN0YXRlLnByb2NlZHVyZU5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYW1lID0gUHJvY2VkdXJlTm90Rm91bmRFcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7TWluaUlmcmFtZUVycm9yfSBmcm9tICcuL21pbmktaWZyYW1lLWVycm9yJztcblxuZXhwb3J0IHR5cGUgUmVtb3RlRXJyb3JDYXVzZSA9IEVycm9yIHwgc3RyaW5nO1xuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JUb0pTT048VCBleHRlbmRzIEVycm9yPiAoZXJyOiBUKTpUIHtcbiAgICAvLyBtZXNzYWdlLCBuYW1lLCBzdGFjayBhcmUgbm90IGVubnVtZXJhYmxlLCBzbyB3ZSBtdXN0IGV4cGxpY2l0bHkgZ2V0IHRoZW0uXG4gICAgY29uc3Qge21lc3NhZ2UsIG5hbWUsIHN0YWNrfSA9IGVycjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHttZXNzYWdlLCBzdGFjaywgbmFtZX0sIGVycik7XG59XG5cbmNvbnN0IGNhdXNlVG9NZXNzYWdlID0gKGNhdXNlOiBSZW1vdGVFcnJvckNhdXNlKTpzdHJpbmcgPT4ge1xuICAgIGlmICh0eXBlb2YgY2F1c2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBjYXVzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYCR7Y2F1c2UubWVzc2FnZX1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW90ZUVycm9yIGV4dGVuZHMgTWluaUlmcmFtZUVycm9yIHtcbiAgICAgICAgXG4gICAgY2F1c2U6IFJlbW90ZUVycm9yQ2F1c2U7XG5cbiAgICBjb25zdHJ1Y3RvcihjYXVzZTogUmVtb3RlRXJyb3JDYXVzZSkgeyAgICAgICAgXG4gICAgICAgIHN1cGVyKGNhdXNlVG9NZXNzYWdlKGNhdXNlKSk7XG4gICAgICAgIHRoaXMuY2F1c2UgPSAodHlwZW9mIGNhdXNlID09PSAnc3RyaW5nJykgPyBjYXVzZSA6IGVycm9yVG9KU09OKGNhdXNlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gUmVtb3RlRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZW1vdGVFcnJvciB9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcblxuZXhwb3J0IGNsYXNzIFNlbmRNZXNzYWdlRXJyb3IgZXh0ZW5kcyBSZW1vdGVFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvcjogUmVtb3RlRXJyb3IpIHtcbiAgICAgICAgc3VwZXIoZXJyb3IuY2F1c2UpOyAgICAgICAgXG4gICAgICAgIHRoaXMubmFtZSA9IFNlbmRNZXNzYWdlRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQge01pbmlJZnJhbWVFcnJvcn0gZnJvbSAnLi9taW5pLWlmcmFtZS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBUaW1lb3V0RXJyb3IgZXh0ZW5kcyBNaW5pSWZyYW1lRXJyb3Ige1xuXG4gICAgdGltZW91dE1pbGxpU2Vjb25kcyA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGFydGlhbDxUaW1lb3V0RXJyb3I+KSB7XG4gICAgICAgIHN1cGVyKGBUaW1lb3V0IGFmdGVyICR7c3RhdGUudGltZW91dE1pbGxpU2Vjb25kc30gbXMuYCwgc3RhdGUpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgdGhpcy5uYW1lID0gVGltZW91dEVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICAgICAgICAgIFxuICAgIH1cbn0iLCIvKiB0c2xpbnQ6ZGlzYWJsZSBuby1hbnkgbm8tdW5zYWZlLWFueSAqL1xuXG5pbXBvcnQge2Rlc2VyaWFsaXplUmVtb3RlRXJyb3IsIEV2YWx1YXRpb25FcnJvciwgSW52b2NhdGlvbkVycm9yLCBpc0Vycm9yLCBQcm9jZWR1cmVOb3RGb3VuZEVycm9yLCBTZW5kTWVzc2FnZUVycm9yLCBzZXJpYWxpemVSZW1vdGVFcnJvciwgVGltZW91dEVycm9yfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQge0RFRkFVTFRfUkVTVUxUX0NBQ0hFX0NBUEFDSVRZLCBSZXN1bHRDYWNoZX0gZnJvbSBcIi4vcmVzdWx0LWNhY2hlXCI7XG5leHBvcnQge1Jlc3VsdENhY2hlfTsgLy8gc28gdW5pdCB0ZXN0cyBjYW4gYWNjZXNzIFJlc3BvbnNlQ2FjaGVcbmltcG9ydCB7TWVzc2FnZUJvZHksIFJlcXVlc3RNZXNzYWdlQm9keX0gZnJvbSBcIi4vanNvbi1ycGNcIjtcbmltcG9ydCB7UG9zdE1lc3NhZ2VUcmFuc3BvcnR9IGZyb20gJy4vdHJhbnNwb3J0L3Bvc3QtbWVzc2FnZS10cmFuc3BvcnQnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSW52b2NhdGlvbk9wdGlvbnMge1xuICAgIHRpbWVvdXQ6IG51bWJlcjtcbiAgICByZXRyeUxpbWl0OiBudW1iZXI7XG4gICAgcmV0cnlBbGxGYWlsdXJlcyA6IGJvb2xlYW47XG59XG5cbnR5cGUgSW50ZXJuYWxFdmVudENhbGxiYWNrVHlwZSA9ICdvblVuZXhwZWN0ZWRSZXNwb25zZScgfCAnb25SZWNlaXZlJyB8ICdvblNlbmQnIHwgJ29uUmVnaXN0ZXInIHwgJ29uQ2xvc2UnIHwgJ29uUmVxdWVzdFJldHJ5JyB8ICdvblJlc3VsdENhY2hlRXZpY3Rpb24nO1xuXG4vLyBPcHRpb25hbCBjYWxsYmFja3MgZm9yIGludGVybmFsIGV2ZW50cyB1c2VmdWwgZm9yIGRlYnVnZ2luZyBhbmQgdGVzdGluZ1xuZXhwb3J0IHR5cGUgSW50ZXJuYWxFdmVudENhbGxiYWNrcyA9IHtcbiAgICBba2V5IGluIEludGVybmFsRXZlbnRDYWxsYmFja1R5cGVdOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEluaXRQYXJhbWV0ZXJzIHtcbiAgICB3aW5kb3dSZWY6IFdpbmRvdztcbiAgICBvcmlnaW5XaGl0ZWxpc3Q6IHN0cmluZ1tdO1xuICAgIGRlZmF1bHRJbnZvY2F0aW9uT3B0aW9uczogSW52b2NhdGlvbk9wdGlvbnM7XG4gICAgZXZlbnRDYWxsYmFja3M6IFBhcnRpYWw8SW50ZXJuYWxFdmVudENhbGxiYWNrcz47XG4gICAgcmVzdWx0Q2FjaGVDYXBhY2l0eTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2FsbGJhY2tGdW5jdGlvbnMge1xuICAgIHJlc29sdmU6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQsXG4gICAgcmVqZWN0OiAoZXJyb3I/OiBhbnkpID0+IHZvaWRcbn1cblxudHlwZSBQcm9jZWR1cmVJbXBsZW1lbnRhdGlvbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55O1xuXG50eXBlIFByb2NlZHVyZUludm9jYXRpb25Db250ZXh0ID0ge3JlcXVlc3RNZXNzYWdlQm9keTogUmVxdWVzdE1lc3NhZ2VCb2R5LCBtZXNzYWdlU291cmNlOiBXaW5kb3csIG1lc3NhZ2VPcmlnaW46IHN0cmluZ307XG5cbmNvbnN0IFJBTkRPTV9CQVNFID0gMzY7XG5jb25zdCBDQUxMSURfTEVOR1RIID0gODtcbmNvbnN0IERFRkFVTFRfSU5WT0NBVElPTl9PUFRJT05TOkludm9jYXRpb25PcHRpb25zID0ge1xuICAgIHRpbWVvdXQ6IDEwMCxcbiAgICByZXRyeUxpbWl0OiAyLFxuICAgIHJldHJ5QWxsRmFpbHVyZXM6IGZhbHNlXG59XG5cbmV4cG9ydCBjbGFzcyBNaW5pSWZyYW1lUlBDIHtcbiAgICBwcml2YXRlIGNvbmZpZzogSW5pdFBhcmFtZXRlcnM7XG4gICAgcHJpdmF0ZSBjYWxsYmFja3M6IHtba2V5OnN0cmluZ106Q2FsbGJhY2tGdW5jdGlvbnN9ID0ge307XG4gICAgcHJpdmF0ZSByZWdpc3RlcmVkUHJvY2VkdXJlczp7W2tleTpzdHJpbmddOiBQcm9jZWR1cmVJbXBsZW1lbnRhdGlvbn0gPSB7fTtcbiAgICBwcml2YXRlIHJlc3VsdENhY2hlOlJlc3VsdENhY2hlO1xuICAgIHByaXZhdGUgdHJhbnNwb3J0OiBQb3N0TWVzc2FnZVRyYW5zcG9ydDtcblxuICAgIGNvbnN0cnVjdG9yKGluaXRQYXJhbWV0ZXJzPzogUGFydGlhbDxJbml0UGFyYW1ldGVycz4pIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICB3aW5kb3dSZWY6IGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLndpbmRvd1JlZiB8fCB3aW5kb3csXG4gICAgICAgICAgICBvcmlnaW5XaGl0ZWxpc3Q6IGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLm9yaWdpbldoaXRlbGlzdCB8fCBbXSxcbiAgICAgICAgICAgIGRlZmF1bHRJbnZvY2F0aW9uT3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9JTlZPQ0FUSU9OX09QVElPTlMsIGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLmRlZmF1bHRJbnZvY2F0aW9uT3B0aW9ucyB8fCB7fSksICAgICAgICAgICAgXG4gICAgICAgICAgICBldmVudENhbGxiYWNrczogaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMuZXZlbnRDYWxsYmFja3MgfHwge30sXG4gICAgICAgICAgICByZXN1bHRDYWNoZUNhcGFjaXR5OiBpbml0UGFyYW1ldGVycyAmJiB0eXBlb2YgaW5pdFBhcmFtZXRlcnMucmVzdWx0Q2FjaGVDYXBhY2l0eSA9PT0gJ251bWJlcicgPyBpbml0UGFyYW1ldGVycy5yZXN1bHRDYWNoZUNhcGFjaXR5IDogREVGQVVMVF9SRVNVTFRfQ0FDSEVfQ0FQQUNJVFlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZXN1bHRDYWNoZSA9IG5ldyBSZXN1bHRDYWNoZSh7XG4gICAgICAgICAgICBjYXBhY2l0eTogdGhpcy5jb25maWcucmVzdWx0Q2FjaGVDYXBhY2l0eSxcbiAgICAgICAgICAgIGV2aWN0aW9uQ2FsbGJhY2s6IChpZCwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblJlc3VsdENhY2hlRXZpY3Rpb25cIiwgaWQsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IG5ldyBQb3N0TWVzc2FnZVRyYW5zcG9ydChcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLndpbmRvd1JlZixcbiAgICAgICAgICAgIHRoaXMucmVjdixcbiAgICAgICAgICAgIHsnb3JpZ2luV2hpdGVsaXN0JzogdGhpcy5jb25maWcub3JpZ2luV2hpdGVsaXN0fSk7ICAgICAgICBcbiAgICB9ICAgICAgICBcblxuICAgIHJlZ2lzdGVyKHByb2NlZHVyZU5hbWU6IHN0cmluZywgaW1wbGVtZW50YXRpb24/OiBQcm9jZWR1cmVJbXBsZW1lbnRhdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uUmVnaXN0ZXJcIiwgcHJvY2VkdXJlTmFtZSwgaW1wbGVtZW50YXRpb24pXG4gICAgICAgIGlmIChpbXBsZW1lbnRhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmVkUHJvY2VkdXJlc1twcm9jZWR1cmVOYW1lXSA9IGltcGxlbWVudGF0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlTmFtZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZva2UgKHRhcmdldFdpbmRvdzogV2luZG93LCB0YXJnZXRPcmlnaW46IHN0cmluZyB8IG51bGwsIG1ldGhvZDogc3RyaW5nLCBwYXJhbXM/OiBhbnlbXSwgaW52b2NhdGlvbk9wdGlvbnM/OiBJbnZvY2F0aW9uT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbmZpZy5kZWZhdWx0SW52b2NhdGlvbk9wdGlvbnMsIGludm9jYXRpb25PcHRpb25zIHx8wqB7fSk7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXROZXh0Q2FsbElkKCk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RNZXNzYWdlQm9keTogUmVxdWVzdE1lc3NhZ2VCb2R5ID0ge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICBwYXJhbXM6IChwYXJhbXMgfHwgW10pfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0V2l0aFJldHJ5KHRhcmdldFdpbmRvdywgdGFyZ2V0T3JpZ2luLCByZXF1ZXN0TWVzc2FnZUJvZHksIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uQ2xvc2VcIik7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7ICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlcXVlc3RXaXRoUmV0cnkodGFyZ2V0V2luZG93OiBXaW5kb3csIHRhcmdldE9yaWdpbjogc3RyaW5nIHwgbnVsbCwgcmVxdWVzdE1lc3NhZ2VCb2R5OlJlcXVlc3RNZXNzYWdlQm9keSwgb3B0aW9uczogSW52b2NhdGlvbk9wdGlvbnMpOlByb21pc2U8YW55PiB7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVxdWVzdENvdW50ID0gMDtcbiAgICAgICAgbGV0IGZhaWx1cmVDb3VudCA9IDA7ICAgICAgICBcbiAgICAgICAgbGV0IGZpbmFsUmVzb2x2ZToocmVzdWx0PzogYW55KSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuICAgICAgICBsZXQgZmluYWxSZWplY3Q6KGVycm9yPzogYW55KSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuICAgICAgICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUmVqZWN0UmVhc29uczphbnlbXSA9IFtdOyAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBpc0Vycm9yUmV0cmlhYmxlID0gKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRpbWVvdXQgPD0gMCB8fCBvcHRpb25zLnJldHJ5TGltaXQgPCAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5yZXRyeUFsbEZhaWx1cmVzIHx8IChlcnJvciBpbnN0YW5jZW9mIFRpbWVvdXRFcnJvcik7ICAgICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWFrZVJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZSh0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgcmVxdWVzdE1lc3NhZ2VCb2R5KS50aGVuKFxuICAgICAgICAgICAgICAgICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3NbcmVxdWVzdE1lc3NhZ2VCb2R5LmlkXSA9IHtyZXNvbHZlLCByZWplY3R9O1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc29sdmUgPSAocmVzdWx0PzogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBmaXJzdCBzdWNjZXNzZnVsIHJlcXVlc3QgaW1tZWRpYXRlbHkgcmVzb2x2ZXMgdGhlIGludm9jYXRpb24gcHJvbWlzZVxuICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZpbmFsUmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlUmVqZWN0ID0gKHJlYXNvbj86IGFueSkgPT4ge1xuICAgICAgICAgICAgZmFpbHVyZUNvdW50ICs9IDE7XG4gICAgICAgICAgICAvLyBJZiByZXF1ZXN0IGhhcyBzaW5jZSBiZWVuIGNvbXBsZXRlZCwgZG8gbm90aGluZ1xuICAgICAgICAgICAgLy8gUmV0cnkgcmVxdWVzdCBvciBmYWlsIHBlcm1hbmVudGx5IGlmIG5vIG91dHN0YW5kaW5nIHJlcXVlc3RzIHN0aWxsIGluIGZsaWdodFxuICAgICAgICAgICAgaWYgKCFjb21wbGV0ZWQgJiYgZmFpbHVyZUNvdW50ID09PSByZXF1ZXN0Q291bnQpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpc0Vycm9yUmV0cmlhYmxlKHJlYXNvbikgJiYgcmVxdWVzdENvdW50IDwgKG9wdGlvbnMucmV0cnlMaW1pdCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25SZXF1ZXN0UmV0cnlcIiwgcmVhc29uLCBwcmV2aW91c1JlamVjdFJlYXNvbnMsIHJlcXVlc3RNZXNzYWdlQm9keSk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVqZWN0UmVhc29ucy5wdXNoKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgICAgIG1ha2VBdHRlbXB0KCk7XG4gICAgICAgICAgICAgICAgLy8gSWYgZXJyb3IgaXMgbm9uLXJldHJpYWJsZSBhbmQgdGhlcmUgYXJlIG5vIHVuYW5zd2VyZWQgcmVxdWVzdHMsIGdpdmUgdXAuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxSZWplY3QobmV3IEludm9jYXRpb25FcnJvcihyZXF1ZXN0TWVzc2FnZUJvZHkubWV0aG9kLCByZWFzb24sIHByZXZpb3VzUmVqZWN0UmVhc29ucykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGFyZSBzdGlsbCBvdXRzdGFuZGluZyByZXF1ZXN0cywgd2FpdCBmb3IgdGhlbSB0byBzdWNjZWVkIG9yIGZhaWwuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWFrZUF0dGVtcHQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0Q291bnQgKz0gMTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZVByb21pc2UgPSBtYWtlUmVxdWVzdCgpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudGltZW91dCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVByb21pc2UgPSB0aGlzLnRpbWVib3hQcm9taXNlKHJlc3BvbnNlUHJvbWlzZSwgb3B0aW9ucy50aW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZS50aGVuKGhhbmRsZVJlc29sdmUsIGhhbmRsZVJlamVjdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmaW5hbFJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgZmluYWxSZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpbml0aWFsIGF0dGVtcHRcbiAgICAgICAgbWFrZUF0dGVtcHQoKTtcblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnRlcm5hbEV2ZW50Q2FsbGJhY2soaW50ZXJuYWxFdmVudENhbGxiYWNrOiBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tUeXBlLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBjYiA9IHRoaXMuY29uZmlnLmV2ZW50Q2FsbGJhY2tzW2ludGVybmFsRXZlbnRDYWxsYmFja107XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgY2IuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRpbWVib3hQcm9taXNlKG9yaWdpbmFsUHJvbWlzZTogUHJvbWlzZTxhbnk+LCB0aW1lb3V0TWlsbGlTZWNvbmRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIG9yaWdpbmFsUHJvbWlzZSxcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcud2luZG93UmVmLnNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHJlamVjdChuZXcgVGltZW91dEVycm9yKHt0aW1lb3V0TWlsbGlTZWNvbmRzfSkpLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0TWlsbGlTZWNvbmRzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pO1xuICAgIH0gICBcblxuICAgIHByaXZhdGUgZ2V0TmV4dENhbGxJZCAoKSB7XG4gICAgICAgIGxldCByYW5kb21JZCA6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICB3aGlsZSghcmFuZG9tSWQgfHwgdGhpcy5jYWxsYmFja3NbcmFuZG9tSWRdKSB7XG4gICAgICAgICAgICByYW5kb21JZCA9IGBjYiR7TWF0aC5yYW5kb20oKS50b1N0cmluZyhSQU5ET01fQkFTRSkucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIENBTExJRF9MRU5HVEgpfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmFuZG9tSWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kTWVzc2FnZSAodGFyZ2V0V2luZG93OiBXaW5kb3csIHRhcmdldE9yaWdpbjogc3RyaW5nIHwgbnVsbCwgbWVzc2FnZUJvZHk6IE1lc3NhZ2VCb2R5KSA6IFByb21pc2U8dm9pZD4geyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uU2VuZFwiLCBtZXNzYWdlQm9keSwgdGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChcbiAgICAgICAgICAgICAgICB7dGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW59LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb2R5KTtcbiAgICB9ICAgICAgICBcblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlUmVxdWVzdCAocmVxdWVzdE1lc3NhZ2VCb2R5OlJlcXVlc3RNZXNzYWdlQm9keSwgbWVzc2FnZVNvdXJjZTogV2luZG93LCBtZXNzYWdlT3JpZ2luOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgaWQgPSByZXF1ZXN0TWVzc2FnZUJvZHkuaWQ7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHJlcXVlc3RNZXNzYWdlQm9keS5tZXRob2Q7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHJlcXVlc3RNZXNzYWdlQm9keS5wYXJhbXM7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlT3JpZ2luID0gIW1lc3NhZ2VPcmlnaW4gfHwgbWVzc2FnZU9yaWdpbiA9PT0gXCJudWxsXCIgPyBudWxsIDogbWVzc2FnZU9yaWdpbjtcbiAgICAgICAgY29uc3Qgc2VuZEVycm9yID0gKHJlamVjdE9yRXJyb3I6IGFueSwgZXhjZXB0aW9uTmFtZT86c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZW5kaW5nRXJyb3IgPSBpc0Vycm9yKHJlamVjdE9yRXJyb3IpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShcbiAgICAgICAgICAgICAgICBtZXNzYWdlU291cmNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlT3JpZ2luLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIGlzRXJyb3JJbnN0YW5jZTogc2VuZGluZ0Vycm9yLCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBzZW5kaW5nRXJyb3IgPyBzZXJpYWxpemVSZW1vdGVFcnJvcihyZWplY3RPckVycm9yLCBleGNlcHRpb25OYW1lKSA6IHJlamVjdE9yRXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZ2V0UmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0Q2FjaGUuaGFzQ2FjaGVkUmVzdWx0KGlkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3VsdENhY2hlLmdldENhY2hlZFJlc3VsdChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbbWV0aG9kXS5hcHBseShcbiAgICAgICAgICAgICAgICAgICAge3JlcXVlc3RNZXNzYWdlQm9keSwgbWVzc2FnZVNvdXJjZSwgbWVzc2FnZU9yaWdpbn0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRDYWNoZS5zZXRDYWNoZWRSZXN1bHQoaWQsIHJlc3VsdFByb21pc2UpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbbWV0aG9kXSkgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgZ2V0UmVzdWx0KClcbiAgICAgICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdD86YW55KSA9PiB0aGlzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gc2VuZEVycm9yKGVycm9yLCBTZW5kTWVzc2FnZUVycm9yLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcj86YW55KSA9PiBzZW5kRXJyb3IoZXJyb3IsIEV2YWx1YXRpb25FcnJvci5uYW1lKVxuICAgICAgICAgICAgICAgICk7ICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRXJyb3IobmV3IFByb2NlZHVyZU5vdEZvdW5kRXJyb3Ioe3Byb2NlZHVyZU5hbWU6IG1ldGhvZH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlUmVzcG9uc2UobWVzc2FnZUJvZHk6IE1lc3NhZ2VCb2R5KSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrRnVuY3Rpb25zID0gdGhpcy5jYWxsYmFja3NbbWVzc2FnZUJvZHkuaWRdO1xuICAgICAgICBpZiAoY2FsbGJhY2tGdW5jdGlvbnMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1ttZXNzYWdlQm9keS5pZF07ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoJ3Jlc3VsdCcgaW4gbWVzc2FnZUJvZHkpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9ucy5yZXNvbHZlKG1lc3NhZ2VCb2R5LnJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCdlcnJvcicgaW4gbWVzc2FnZUJvZHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck9iamVjdCA9IG1lc3NhZ2VCb2R5LmlzRXJyb3JJbnN0YW5jZSA/IGRlc2VyaWFsaXplUmVtb3RlRXJyb3IobWVzc2FnZUJvZHkuZXJyb3IpIDogbWVzc2FnZUJvZHkuZXJyb3I7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbnMucmVqZWN0KGVycm9yT2JqZWN0KTtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblVuZXhwZWN0ZWRSZXNwb25zZVwiLCBtZXNzYWdlQm9keSk7XG4gICAgICAgIH0gICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlY3YgPSAobWVzc2FnZUJvZHk6TWVzc2FnZUJvZHksIG1lc3NhZ2VTb3VyY2U6IFdpbmRvdywgbWVzc2FnZU9yaWdpbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25SZWNlaXZlXCIsIG1lc3NhZ2VCb2R5LCBtZXNzYWdlU291cmNlLCBtZXNzYWdlT3JpZ2luKTsgICAgXG4gICAgICAgIGlmICgnbWV0aG9kJyBpbiBtZXNzYWdlQm9keSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0KG1lc3NhZ2VCb2R5LCBtZXNzYWdlU291cmNlLCBtZXNzYWdlT3JpZ2luKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzcG9uc2UobWVzc2FnZUJvZHkpO1xuICAgICAgICB9ICAgICAgICAgICAgXG4gICAgfVxuXG59IC8vIGVuZCBvZiBjbGFzc1xuIiwiZXhwb3J0IGludGVyZmFjZSBSZXN1bHRDYWNoZVBhcmFtZXRlcnMge1xuICAgIGNhcGFjaXR5OiBudW1iZXI7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGV2aWN0aW9uQ2FsbGJhY2s/OiAoY2FsbElkOnN0cmluZywgcmVzdWx0OmFueSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1JFU1VMVF9DQUNIRV9DQVBBQ0lUWSA9IDIwMDtcblxuXG5jb25zdCBERUZBVUxUX1BBUkFNRVRFUlM6UmVzdWx0Q2FjaGVQYXJhbWV0ZXJzID0ge1xuICAgIGNhcGFjaXR5OiBERUZBVUxUX1JFU1VMVF9DQUNIRV9DQVBBQ0lUWSxcbn07XG5cbmV4cG9ydCBjbGFzcyBSZXN1bHRDYWNoZSB7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcHJpdmF0ZSBpZHM6IHN0cmluZ1tdID0gW107XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHByaXZhdGUgcmVzdWx0czoge1trZXk6c3RyaW5nXTphbnl9ID0ge307XG4gICAgcHJpdmF0ZSBjb25maWc6IFJlc3VsdENhY2hlUGFyYW1ldGVycztcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IFBhcnRpYWw8UmVzdWx0Q2FjaGVQYXJhbWV0ZXJzPikge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfUEFSQU1FVEVSUywgY29uZmlnIHx8IHt9KTtcbiAgICB9XG5cbiAgICBoYXNDYWNoZWRSZXN1bHQoaWQ6c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHMuaGFzT3duUHJvcGVydHkoaWQpO1xuICAgIH1cblxuICAgIGdldENhY2hlZFJlc3VsdChpZDpzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0c1tpZF07XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHNldENhY2hlZFJlc3VsdChpZDpzdHJpbmcsIHJlc3VsdDphbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2FjaGVkUmVzdWx0KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5pZHMgPSB0aGlzLmlkcy5maWx0ZXIoYyA9PiBjICE9PSBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pZHMudW5zaGlmdChpZCk7XG4gICAgICAgIHRoaXMucmVzdWx0c1tpZF0gPSByZXN1bHQ7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5jYXBhY2l0eSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVuZm9yY2VDYXBhY2l0eSgpO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZm9yY2VDYXBhY2l0eSgpIHtcbiAgICAgICAgZm9yIChsZXQgc2l6ZSA9IHRoaXMuaWRzLmxlbmd0aDsgc2l6ZSA+IHRoaXMuY29uZmlnLmNhcGFjaXR5OyBzaXplLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5pZHMucG9wKCkhO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHRzW2lkXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlc3VsdHNbaWRdO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmV2aWN0aW9uQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5ldmljdGlvbkNhbGxiYWNrKGlkLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IHtNZXNzYWdlQm9keX0gZnJvbSAnLi4vanNvbi1ycGMnO1xuaW1wb3J0IHtSZWNpcGllbnQsIFRyYW5zcG9ydENvbmZpZywgVHJhbnNwb3J0SW50ZXJmYWNlfSBmcm9tICcuL3RyYW5zcG9ydCc7XG5cbmNvbnN0IGlzSW50ZXJuZXRFeHBsb3JlciA9ICgpID0+IChcbiAgICAvLyBiYXNlZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDg2MTA3My9kZXRlY3QtaWYtYW55LWtpbmQtb2YtaWUtbXNpZS8yNDg2MTMwNyMyNDg2MTMwNyAgICBcbiAgICBuYXZpZ2F0b3IuYXBwTmFtZSA9PT0gJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlcicgfHwgXG4gICAgISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50fE1TSUV8cnY6MTEvKSk7XG5cbmNvbnN0IFBPU1RNRVNTQUdFX1RZUEUgPSBcIm1pbmktaWZyYW1lLXJwY1wiO1xuXG5jb25zdCBERUZBVUxUX0NPTkZJRzpUcmFuc3BvcnRDb25maWcgPSB7XG4gICAgLy8gSUUgbmVlZHMgcG9zdG1lc3NhZ2VzIHRvIGNvbnRhaW4gc3RyaW5ncyBpbnN0ZWFkIG9mIG9iamVjdHNcbiAgICBzdHJpbmdpZnlPYmplY3RzOiBpc0ludGVybmV0RXhwbG9yZXIoKVxufTtcblxuZXhwb3J0IHR5cGUgT25SZWNlaXZlID0gKG1lc3NhZ2VCb2R5Ok1lc3NhZ2VCb2R5LCBtZXNzYWdlU291cmNlOiBXaW5kb3csIG1lc3NhZ2VPcmlnaW46IHN0cmluZykgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIFBvc3RNZXNzYWdlVHJhbnNwb3J0IGltcGxlbWVudHMgVHJhbnNwb3J0SW50ZXJmYWNle1xuXG4gICAgcHJpdmF0ZSB3aW5kb3dSZWY6IFdpbmRvdztcbiAgICBwcml2YXRlIGNvbmZpZzogVHJhbnNwb3J0Q29uZmlnO1xuICAgIHByaXZhdGUgb25SZWNlaXZlOiBPblJlY2VpdmU7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aW5kb3dSZWY6IFdpbmRvdywgb25SZWNlaXZlOiBPblJlY2VpdmUsIGNvbmZpZz86IFBhcnRpYWw8VHJhbnNwb3J0Q29uZmlnPikge1xuICAgICAgICB0aGlzLndpbmRvd1JlZiA9IHdpbmRvd1JlZiB8fCB3aW5kb3c7XG4gICAgICAgIHRoaXMub25SZWNlaXZlID0gb25SZWNlaXZlO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfQ09ORklHLCBjb25maWcgfHzCoHt9KTtcbiAgICAgICAgdGhpcy53aW5kb3dSZWYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5yZWN2KTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy53aW5kb3dSZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5yZWN2KTtcbiAgICB9XG5cbiAgICBzZW5kIChyZWNpcGllbnQ6UmVjaXBpZW50LCBtZXNzYWdlQm9keTogTWVzc2FnZUJvZHkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudmVsb3BlZE1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFBPU1RNRVNTQUdFX1RZUEUsXG4gICAgICAgICAgICAgICAgXCJwYXlsb2FkXCI6IG1lc3NhZ2VCb2R5XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVjaXBpZW50LnRhcmdldFdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zdHJpbmdpZnlPYmplY3RzID8gSlNPTi5zdHJpbmdpZnkoZW52ZWxvcGVkTWVzc2FnZSkgOiBlbnZlbG9wZWRNZXNzYWdlLFxuICAgICAgICAgICAgICAgIHJlY2lwaWVudC50YXJnZXRPcmlnaW4gfHwgXCIqXCIpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZWN2ID0gKG1lc3NhZ2VFdmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICghdGhpcy5jb25maWcub3JpZ2luV2hpdGVsaXN0IHx8IHRoaXMuY29uZmlnLm9yaWdpbldoaXRlbGlzdC5sZW5ndGggPCAxIHx8IHRoaXMuY29uZmlnLm9yaWdpbldoaXRlbGlzdC5pbmRleE9mKG1lc3NhZ2VFdmVudC5vcmlnaW4pID4gLTEpICYmIG1lc3NhZ2VFdmVudC5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlRGF0YSA9ICh0eXBlb2YgbWVzc2FnZUV2ZW50LmRhdGEgPT09ICdzdHJpbmcnICYmIEpTT04pID8gSlNPTi5wYXJzZShtZXNzYWdlRXZlbnQuZGF0YSkgOiBtZXNzYWdlRXZlbnQuZGF0YTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBQT1NUTUVTU0FHRV9UWVBFICYmIG1lc3NhZ2VEYXRhLnBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVjZWl2ZShcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZURhdGEucGF5bG9hZCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUV2ZW50LnNvdXJjZSBhcyBXaW5kb3csXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFdmVudC5vcmlnaW4pO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIG90aGVyd2lzZSBkcm9wIHRoZSBtZXNzYWdlIHNpbGVudGx5XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=