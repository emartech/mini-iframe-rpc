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
        var _newTarget = this.constructor;
        var _this = _super.call(this, error.cause) || this;
        // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
        Object.setPrototypeOf(_this, _newTarget.prototype); // restore prototype chain
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
/*! exports provided: MiniIframeError, ProcedureNotFoundError, EvaluationError, TimeoutError, SendMessageError, RemoteError, InvocationError, serializeRemoteError, deserializeRemoteError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeRemoteError", function() { return serializeRemoteError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeRemoteError", function() { return deserializeRemoteError; });
/* harmony import */ var _evaluation_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evaluation-error */ "./src/errors/evaluation-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EvaluationError", function() { return _evaluation_error__WEBPACK_IMPORTED_MODULE_0__["EvaluationError"]; });

/* harmony import */ var _invocation_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invocation-error */ "./src/errors/invocation-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvocationError", function() { return _invocation_error__WEBPACK_IMPORTED_MODULE_1__["InvocationError"]; });

/* harmony import */ var _mini_iframe_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mini-iframe-error */ "./src/errors/mini-iframe-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniIframeError", function() { return _mini_iframe_error__WEBPACK_IMPORTED_MODULE_2__["MiniIframeError"]; });

/* harmony import */ var _procedure_not_found_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./procedure-not-found-error */ "./src/errors/procedure-not-found-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProcedureNotFoundError", function() { return _procedure_not_found_error__WEBPACK_IMPORTED_MODULE_3__["ProcedureNotFoundError"]; });

/* harmony import */ var _remote_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remote-error */ "./src/errors/remote-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteError", function() { return _remote_error__WEBPACK_IMPORTED_MODULE_4__["RemoteError"]; });

/* harmony import */ var _send_message_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-message-error */ "./src/errors/send-message-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SendMessageError", function() { return _send_message_error__WEBPACK_IMPORTED_MODULE_5__["SendMessageError"]; });

/* harmony import */ var _timeout_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeout-error */ "./src/errors/timeout-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _timeout_error__WEBPACK_IMPORTED_MODULE_6__["TimeoutError"]; });









var remoteErrorClasses = [
    _procedure_not_found_error__WEBPACK_IMPORTED_MODULE_3__["ProcedureNotFoundError"],
    _evaluation_error__WEBPACK_IMPORTED_MODULE_0__["EvaluationError"],
    _send_message_error__WEBPACK_IMPORTED_MODULE_5__["SendMessageError"]
].reduce(function (obj, constr) {
    obj[constr.name] = constr;
    return obj;
}, {});
var serializeRemoteError = function (cause, remoteExceptionName) {
    var convert = function (err) {
        var errJSON = Object(_remote_error__WEBPACK_IMPORTED_MODULE_4__["errorToJSON"])(err);
        if (remoteExceptionName) {
            errJSON.name = remoteExceptionName;
        }
        return errJSON;
    };
    if (cause instanceof _remote_error__WEBPACK_IMPORTED_MODULE_4__["RemoteError"]) {
        // if cause is already a remoteError, return as is
        return convert(cause);
    }
    // for both Error and String type causes, create a new RemoteError 
    return convert(new _remote_error__WEBPACK_IMPORTED_MODULE_4__["RemoteError"](cause));
};
// tslint:disable-next-line:no-any
var deserializeRemoteError = function (error) {
    var constr = remoteErrorClasses[error.name] || _remote_error__WEBPACK_IMPORTED_MODULE_4__["RemoteError"];
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
/* harmony import */ var _mini_iframe_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mini-iframe-error */ "./src/errors/mini-iframe-error.ts");


// tslint:disable-next-line:no-any
var makeMessage = function (procedureName, cause, previousRejectReasons) {
    var message = "Error invoking remote procedure '" + procedureName + "'.";
    if (cause instanceof Error) {
        var err = cause;
        message += " " + err.name + ": " + err.message + ".";
    }
    else if (cause) {
        message += " Reason: " + cause.toString() + ".";
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
}(_mini_iframe_error__WEBPACK_IMPORTED_MODULE_1__["MiniIframeError"]));



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
        var _newTarget = this.constructor;
        var _this = _super.call(this, "Remote procedure '" + state.procedureName + "' not registered in remote RPC instance.") || this;
        _this.procedureName = "unknown";
        if (state.procedureName) {
            _this.procedureName = state.procedureName;
        }
        // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
        Object.setPrototypeOf(_this, _newTarget.prototype); // restore prototype chain
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
        var _newTarget = this.constructor;
        var _this = _super.call(this, "Timeout after " + state.timeoutMilliSeconds + " ms.", state) || this;
        _this.timeoutMilliSeconds = 0;
        // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
        Object.setPrototypeOf(_this, _newTarget.prototype); // restore prototype chain
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

/* tslint:disable no-any no-unsafe-any */



 // so unit tests can access ResponseCache
var RPC_MESSAGE_TYPE = "mini-iframe-rpc";
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
        this.recv = function (messageEvent) {
            if ((_this.config.originWhitelist.length < 1 || _this.config.originWhitelist.indexOf(messageEvent.origin) > -1) &&
                messageEvent.data && messageEvent.data.type === RPC_MESSAGE_TYPE) {
                _this.internalEventCallback("onReceive", messageEvent);
                var requestMessageBody = messageEvent.data.message;
                if (requestMessageBody.contents === "request") {
                    return _this.handleRequest({ requestMessageBody: requestMessageBody, messageSource: messageEvent.source, messageOrigin: messageEvent.origin });
                }
                return _this.handleResponse(requestMessageBody);
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
            evictionCallback: function (callId, result) {
                _this.internalEventCallback("onResultCacheEviction", callId, result);
            }
        });
        // attach listener
        this.config.windowRef.addEventListener("message", this.recv);
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
    MiniIframeRPC.prototype.invoke = function (targetWindow, targetOrigin, procedureName, argumentList, invocationOptions) {
        var options = Object.assign({}, this.config.defaultInvocationOptions, invocationOptions || {});
        var callId = this.getNextCallId();
        var requestMessageBody = {
            contents: "request",
            callId: callId,
            procedureName: procedureName,
            argumentList: (argumentList || [])
        };
        return this.requestWithRetry(targetWindow, targetOrigin, requestMessageBody, options);
    };
    MiniIframeRPC.prototype.close = function () {
        this.internalEventCallback("onClose");
        this.config.windowRef.removeEventListener("message", this.recv);
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
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendMessage(targetWindow, targetOrigin, requestMessageBody)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.callbacks[requestMessageBody.callId] = { resolve: resolve, reject: reject };
                            })];
                }
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
                    finalReject(new _errors__WEBPACK_IMPORTED_MODULE_1__["InvocationError"](requestMessageBody.procedureName, reason, previousRejectReasons));
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
            return responsePromise.then(handleResolve, handleReject);
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
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var fullMessage = {
                    "type": RPC_MESSAGE_TYPE,
                    "message": messageBody
                };
                _this.internalEventCallback("onSend", targetWindow, targetOrigin, fullMessage);
                targetWindow.postMessage(fullMessage, targetOrigin || "*");
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    MiniIframeRPC.prototype.handleRequest = function (context) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var callId, procedureName, argumentList, responseOrigin, sendError, getResult;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                callId = context.requestMessageBody.callId;
                procedureName = context.requestMessageBody.procedureName;
                argumentList = context.requestMessageBody.argumentList;
                responseOrigin = !context.messageOrigin || context.messageOrigin === "null" ? null : context.messageOrigin;
                sendError = function (rejectOrError, exceptionName) {
                    var isError = rejectOrError instanceof Error;
                    _this.sendMessage(context.messageSource, responseOrigin, {
                        contents: "error",
                        callId: callId,
                        isErrorInstance: isError,
                        errorValue: isError ? Object(_errors__WEBPACK_IMPORTED_MODULE_1__["serializeRemoteError"])(rejectOrError, exceptionName) : rejectOrError
                    });
                };
                getResult = function () {
                    if (_this.resultCache.hasCachedResult(callId)) {
                        return _this.resultCache.getCachedResult(callId);
                    }
                    var resultPromise = new Promise(function (resolve) {
                        resolve(_this.registeredProcedures[procedureName].apply(context, argumentList));
                    });
                    _this.resultCache.setCachedResult(callId, resultPromise);
                    return resultPromise;
                };
                if (this.registeredProcedures[procedureName]) {
                    return [2 /*return*/, getResult()
                            .then(function (result) { return _this.sendMessage(context.messageSource, responseOrigin, {
                            contents: "result",
                            callId: callId,
                            result: result
                        }).catch(function (error) { return sendError(error, _errors__WEBPACK_IMPORTED_MODULE_1__["SendMessageError"].name); }); }, function (error) { return sendError(error, _errors__WEBPACK_IMPORTED_MODULE_1__["EvaluationError"].name); })];
                }
                else {
                    return [2 /*return*/, sendError(new _errors__WEBPACK_IMPORTED_MODULE_1__["ProcedureNotFoundError"]({ procedureName: procedureName }))];
                }
                return [2 /*return*/];
            });
        });
    };
    MiniIframeRPC.prototype.handleResponse = function (response) {
        var callbackFunctions = this.callbacks[response.callId];
        if (callbackFunctions) {
            delete this.callbacks[response.callId];
            if (response.contents === "result") {
                callbackFunctions.resolve(response.result);
            }
            else if (response.contents === "error") {
                var errorObject = response.isErrorInstance ? Object(_errors__WEBPACK_IMPORTED_MODULE_1__["deserializeRemoteError"])(response.errorValue) : response.errorValue;
                callbackFunctions.reject(errorObject);
            }
        }
        else {
            this.internalEventCallback("onUnexpectedResponse", response);
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
        this.callIds = [];
        // tslint:disable-next-line:no-any
        this.results = {};
        this.config = Object.assign({}, DEFAULT_PARAMETERS, config || {});
    }
    ResultCache.prototype.hasCachedResult = function (callId) {
        return this.results.hasOwnProperty(callId);
    };
    ResultCache.prototype.getCachedResult = function (callId) {
        return this.results[callId];
    };
    // tslint:disable-next-line:no-any
    ResultCache.prototype.setCachedResult = function (callId, result) {
        if (this.hasCachedResult(callId)) {
            this.callIds = this.callIds.filter(function (c) { return c !== callId; });
        }
        this.callIds.unshift(callId);
        this.results[callId] = result;
        if (this.config.capacity >= 0) {
            this.enforceCapacity();
        }
    };
    ResultCache.prototype.enforceCapacity = function () {
        for (var size = this.callIds.length; size > this.config.capacity; size--) {
            var callId = this.callIds.pop();
            var result = this.results[callId];
            delete this.results[callId];
            if (this.config.evictionCallback) {
                this.config.evictionCallback(callId, result);
            }
        }
    };
    return ResultCache;
}());



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvZXZhbHVhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL2luZGV4LnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvaW52b2NhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL21pbmktaWZyYW1lLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvcHJvY2VkdXJlLW5vdC1mb3VuZC1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL3JlbW90ZS1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL3NlbmQtbWVzc2FnZS1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL3RpbWVvdXQtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL21pbmktaWZyYW1lLXJwYy50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvcmVzdWx0LWNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0FBQyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRU8scUNBQWUsR0FBdkI7UUFDSSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUN0RSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRyxDQUFDO1lBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDaEQ7U0FDSjtJQUNMLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMiLCJmaWxlIjoibWluaS1pZnJhbWUtcnBjLW1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm1pbmktaWZyYW1lLXJwY1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW5pLWlmcmFtZS1ycGNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWluaS1pZnJhbWUtcnBjXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21pbmktaWZyYW1lLXJwYy50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVtb3RlRXJyb3IgfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBFdmFsdWF0aW9uRXJyb3IgZXh0ZW5kcyBSZW1vdGVFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvcjogUmVtb3RlRXJyb3IpIHtcbiAgICAgICAgc3VwZXIoZXJyb3IuY2F1c2UpO1xuICAgICAgICAvLyBzZWU6IHR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL3JlbGVhc2Utbm90ZXMvdHlwZXNjcmlwdC0yLTIuaHRtbFxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpOyAvLyByZXN0b3JlIHByb3RvdHlwZSBjaGFpblxuICAgICAgICB0aGlzLm5hbWUgPSBFdmFsdWF0aW9uRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQge0V2YWx1YXRpb25FcnJvcn0gZnJvbSAnLi9ldmFsdWF0aW9uLWVycm9yJztcbmltcG9ydCB7SW52b2NhdGlvbkVycm9yfSBmcm9tICcuL2ludm9jYXRpb24tZXJyb3InO1xuaW1wb3J0IHtNaW5pSWZyYW1lRXJyb3J9IGZyb20gJy4vbWluaS1pZnJhbWUtZXJyb3InO1xuaW1wb3J0IHtQcm9jZWR1cmVOb3RGb3VuZEVycm9yfSBmcm9tICcuL3Byb2NlZHVyZS1ub3QtZm91bmQtZXJyb3InO1xuaW1wb3J0IHtlcnJvclRvSlNPTiwgUmVtb3RlRXJyb3IsIFJlbW90ZUVycm9yQ2F1c2V9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcbmltcG9ydCB7U2VuZE1lc3NhZ2VFcnJvcn0gZnJvbSAnLi9zZW5kLW1lc3NhZ2UtZXJyb3InO1xuaW1wb3J0IHtUaW1lb3V0RXJyb3J9IGZyb20gJy4vdGltZW91dC1lcnJvcic7XG5cbmV4cG9ydCB7TWluaUlmcmFtZUVycm9yLCBQcm9jZWR1cmVOb3RGb3VuZEVycm9yLCBFdmFsdWF0aW9uRXJyb3IsIFRpbWVvdXRFcnJvciwgU2VuZE1lc3NhZ2VFcnJvciwgUmVtb3RlRXJyb3IsIEludm9jYXRpb25FcnJvcn07XG5cbnR5cGUgUmVtb3RlRXJyb3JDb25zdHJ1Y3RvciA9IG5ldyAoc3RhdGU6IFBhcnRpYWw8UmVtb3RlRXJyb3I+KSA9PiBSZW1vdGVFcnJvcjtcblxudHlwZSBFUlJPUl9NQVAgPSB7XG4gICAgW2tleTogc3RyaW5nXTogUmVtb3RlRXJyb3JDb25zdHJ1Y3RvclxufVxuXG5jb25zdCByZW1vdGVFcnJvckNsYXNzZXMgPSAoW1xuICAgIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IsXG4gICAgRXZhbHVhdGlvbkVycm9yLFxuICAgIFNlbmRNZXNzYWdlRXJyb3JcbiAgICBdIGFzIFJlbW90ZUVycm9yQ29uc3RydWN0b3JbXSkucmVkdWNlKFxuICAgIChvYmo6RVJST1JfTUFQLCBjb25zdHI6UmVtb3RlRXJyb3JDb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgICBvYmpbY29uc3RyLm5hbWVdID0gY29uc3RyO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSwge30gYXMgRVJST1JfTUFQKSBhcyBFUlJPUl9NQVA7ICAgIFxuXG5leHBvcnQgY29uc3Qgc2VyaWFsaXplUmVtb3RlRXJyb3IgPSAoY2F1c2U6IFJlbW90ZUVycm9yQ2F1c2UsIHJlbW90ZUV4Y2VwdGlvbk5hbWU/OiBzdHJpbmcpOlJlbW90ZUVycm9yID0+IHsgICAgXG4gICAgXG4gICAgY29uc3QgY29udmVydCA9IChlcnI6IFJlbW90ZUVycm9yKTpSZW1vdGVFcnJvciA9PiB7XG4gICAgICAgIGNvbnN0IGVyckpTT046UmVtb3RlRXJyb3IgPSBlcnJvclRvSlNPTihlcnIpOyAgICAgICAgXG4gICAgICAgIGlmIChyZW1vdGVFeGNlcHRpb25OYW1lKSB7XG4gICAgICAgICAgICBlcnJKU09OLm5hbWUgPSByZW1vdGVFeGNlcHRpb25OYW1lO1xuICAgICAgICB9ICAgICBcblxuICAgICAgICByZXR1cm4gZXJySlNPTjtcbiAgICB9XG4gICAgaWYgKGNhdXNlIGluc3RhbmNlb2YgUmVtb3RlRXJyb3IpIHtcbiAgICAgICAgLy8gaWYgY2F1c2UgaXMgYWxyZWFkeSBhIHJlbW90ZUVycm9yLCByZXR1cm4gYXMgaXNcbiAgICAgICAgcmV0dXJuIGNvbnZlcnQoY2F1c2UpO1xuICAgIH0gICAgXG4gICAgLy8gZm9yIGJvdGggRXJyb3IgYW5kIFN0cmluZyB0eXBlIGNhdXNlcywgY3JlYXRlIGEgbmV3IFJlbW90ZUVycm9yIFxuXG4gICAgcmV0dXJuIGNvbnZlcnQobmV3IFJlbW90ZUVycm9yKGNhdXNlKSk7ICAgIFxufTsgICBcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGNvbnN0IGRlc2VyaWFsaXplUmVtb3RlRXJyb3IgPSAoZXJyb3I6UmVtb3RlRXJyb3IpID0+IHtcbiAgICBjb25zdCBjb25zdHIgPSByZW1vdGVFcnJvckNsYXNzZXNbZXJyb3IubmFtZV0gfHwgUmVtb3RlRXJyb3I7XG5cbiAgICByZXR1cm4gbmV3IGNvbnN0cihlcnJvcik7XG59OyIsImltcG9ydCB7TWluaUlmcmFtZUVycm9yfSBmcm9tICcuL21pbmktaWZyYW1lLWVycm9yJztcbmltcG9ydCB7ZXJyb3JUb0pTT059IGZyb20gJy4vcmVtb3RlLWVycm9yJztcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuY29uc3QgbWFrZU1lc3NhZ2UgPSAocHJvY2VkdXJlTmFtZTogc3RyaW5nLCBjYXVzZT86IGFueSwgcHJldmlvdXNSZWplY3RSZWFzb25zPzogYW55W10pOnN0cmluZyA9PiB7XG4gICAgbGV0IG1lc3NhZ2UgPSBgRXJyb3IgaW52b2tpbmcgcmVtb3RlIHByb2NlZHVyZSAnJHtwcm9jZWR1cmVOYW1lfScuYDtcbiAgICBpZiAoY2F1c2UgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBjb25zdCBlcnIgPSBjYXVzZSBhcyBFcnJvcjtcbiAgICAgICAgbWVzc2FnZSArPSBgICR7ZXJyLm5hbWV9OiAke2Vyci5tZXNzYWdlfS5gO1xuICAgIH0gZWxzZSBpZiAoY2F1c2UpIHtcbiAgICAgICAgbWVzc2FnZSArPSBgIFJlYXNvbjogJHtjYXVzZS50b1N0cmluZygpfS5gO1xuICAgIH1cbiAgICBpZiAocHJldmlvdXNSZWplY3RSZWFzb25zICYmIHByZXZpb3VzUmVqZWN0UmVhc29ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHBsdXJhbCA9IHByZXZpb3VzUmVqZWN0UmVhc29ucy5sZW5ndGggPiAxID8gJ3MnIDogJyc7XG4gICAgICAgIG1lc3NhZ2UgKz0gYCAke3ByZXZpb3VzUmVqZWN0UmVhc29ucy5sZW5ndGh9IGFkZGl0aW9uYWwgcmVqZWN0aW9uJHtwbHVyYWx9IGZyb20gcmV0cmllZCBhdHRlbXB0JHtwbHVyYWx9LmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG59O1xuXG5leHBvcnQgY2xhc3MgSW52b2NhdGlvbkVycm9yIGV4dGVuZHMgTWluaUlmcmFtZUVycm9yIHtcblxuICAgIHByb2NlZHVyZU5hbWU6IHN0cmluZztcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY2F1c2U/OiBhbnk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHByZXZpb3VzUmVqZWN0UmVhc29ucz86IGFueVtdO1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGNvbnN0cnVjdG9yKHByb2NlZHVyZU5hbWU6IHN0cmluZywgY2F1c2U/OiBhbnksIHByZXZpb3VzUmVqZWN0UmVhc29ucz86IGFueVtdKSB7XG4gICAgICAgIHN1cGVyKG1ha2VNZXNzYWdlKHByb2NlZHVyZU5hbWUsIGNhdXNlLCBwcmV2aW91c1JlamVjdFJlYXNvbnMpKTsgICAgICAgICAgICAgICAgXG4gICAgICAgIHRoaXMubmFtZSA9IEludm9jYXRpb25FcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgXG4gICAgICAgIHRoaXMucHJvY2VkdXJlTmFtZSA9IHByb2NlZHVyZU5hbWU7XG4gICAgICAgIHRoaXMuY2F1c2UgPSBjYXVzZTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1JlamVjdFJlYXNvbnMgPSBwcmV2aW91c1JlamVjdFJlYXNvbnM7ICAgICAgICAgICAgICBcbiAgICB9ICAgIFxufSIsImV4cG9ydCBjbGFzcyBNaW5pSWZyYW1lRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cbiAgICB0aW1lc3RhbXA6bnVtYmVyO1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcsIHN0YXRlPzogYW55KSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IMKgKyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZWU6IHR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL3JlbGVhc2Utbm90ZXMvdHlwZXNjcmlwdC0yLTIuaHRtbFxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpOyAvLyByZXN0b3JlIHByb3RvdHlwZSBjaGFpblxuICAgICAgICB0aGlzLm5hbWUgPSBNaW5pSWZyYW1lRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyBcbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IFJlbW90ZUVycm9yIH0gZnJvbSAnLi9yZW1vdGUtZXJyb3InO1xuXG5leHBvcnQgY2xhc3MgUHJvY2VkdXJlTm90Rm91bmRFcnJvciBleHRlbmRzIFJlbW90ZUVycm9yIHtcblxuICAgIHByb2NlZHVyZU5hbWUgPSBcInVua25vd25cIjtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOiBQYXJ0aWFsPFByb2NlZHVyZU5vdEZvdW5kRXJyb3I+KSB7XG4gICAgICAgIHN1cGVyKGBSZW1vdGUgcHJvY2VkdXJlICcke3N0YXRlLnByb2NlZHVyZU5hbWV9JyBub3QgcmVnaXN0ZXJlZCBpbiByZW1vdGUgUlBDIGluc3RhbmNlLmApO1xuICAgICAgICBpZiAoc3RhdGUucHJvY2VkdXJlTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZWR1cmVOYW1lID0gc3RhdGUucHJvY2VkdXJlTmFtZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZWU6IHR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL3JlbGVhc2Utbm90ZXMvdHlwZXNjcmlwdC0yLTIuaHRtbFxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpOyAvLyByZXN0b3JlIHByb3RvdHlwZSBjaGFpblxuICAgICAgICB0aGlzLm5hbWUgPSBQcm9jZWR1cmVOb3RGb3VuZEVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHtNaW5pSWZyYW1lRXJyb3J9IGZyb20gJy4vbWluaS1pZnJhbWUtZXJyb3InO1xuXG5leHBvcnQgdHlwZSBSZW1vdGVFcnJvckNhdXNlID0gRXJyb3IgfCBzdHJpbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvclRvSlNPTjxUIGV4dGVuZHMgRXJyb3I+IChlcnI6IFQpOlQge1xuICAgIC8vIG1lc3NhZ2UsIG5hbWUsIHN0YWNrIGFyZSBub3QgZW5udW1lcmFibGUsIHNvIHdlIG11c3QgZXhwbGljaXRseSBnZXQgdGhlbS5cbiAgICBjb25zdCB7bWVzc2FnZSwgbmFtZSwgc3RhY2t9ID0gZXJyO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe21lc3NhZ2UsIHN0YWNrLCBuYW1lfSwgZXJyKTtcbn1cblxuY29uc3QgY2F1c2VUb01lc3NhZ2UgPSAoY2F1c2U6IFJlbW90ZUVycm9yQ2F1c2UpOnN0cmluZyA9PiB7XG4gICAgaWYgKHR5cGVvZiBjYXVzZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGNhdXNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgJHtjYXVzZS5tZXNzYWdlfWA7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3RlRXJyb3IgZXh0ZW5kcyBNaW5pSWZyYW1lRXJyb3Ige1xuICAgICAgICBcbiAgICBjYXVzZTogUmVtb3RlRXJyb3JDYXVzZTtcblxuICAgIGNvbnN0cnVjdG9yKGNhdXNlOiBSZW1vdGVFcnJvckNhdXNlKSB7ICAgICAgICBcbiAgICAgICAgc3VwZXIoY2F1c2VUb01lc3NhZ2UoY2F1c2UpKTtcbiAgICAgICAgdGhpcy5jYXVzZSA9ICh0eXBlb2YgY2F1c2UgPT09ICdzdHJpbmcnKSA/IGNhdXNlIDogZXJyb3JUb0pTT04oY2F1c2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBSZW1vdGVFcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IFJlbW90ZUVycm9yIH0gZnJvbSAnLi9yZW1vdGUtZXJyb3InO1xuXG5leHBvcnQgY2xhc3MgU2VuZE1lc3NhZ2VFcnJvciBleHRlbmRzIFJlbW90ZUVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yOiBSZW1vdGVFcnJvcikge1xuICAgICAgICBzdXBlcihlcnJvci5jYXVzZSk7ICAgICAgICBcbiAgICAgICAgdGhpcy5uYW1lID0gU2VuZE1lc3NhZ2VFcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7TWluaUlmcmFtZUVycm9yfSBmcm9tICcuL21pbmktaWZyYW1lLWVycm9yJztcblxuZXhwb3J0IGNsYXNzIFRpbWVvdXRFcnJvciBleHRlbmRzIE1pbmlJZnJhbWVFcnJvciB7XG5cbiAgICB0aW1lb3V0TWlsbGlTZWNvbmRzID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOiBQYXJ0aWFsPFRpbWVvdXRFcnJvcj4pIHtcbiAgICAgICAgc3VwZXIoYFRpbWVvdXQgYWZ0ZXIgJHtzdGF0ZS50aW1lb3V0TWlsbGlTZWNvbmRzfSBtcy5gLCBzdGF0ZSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyBzZWU6IHR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL3JlbGVhc2Utbm90ZXMvdHlwZXNjcmlwdC0yLTIuaHRtbFxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpOyAvLyByZXN0b3JlIHByb3RvdHlwZSBjaGFpblxuICAgICAgICB0aGlzLm5hbWUgPSBUaW1lb3V0RXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgICAgICAgICAgXG4gICAgfVxufSIsIlxuLyogdHNsaW50OmRpc2FibGUgbm8tYW55IG5vLXVuc2FmZS1hbnkgKi9cblxuaW1wb3J0IHtkZXNlcmlhbGl6ZVJlbW90ZUVycm9yLCBFdmFsdWF0aW9uRXJyb3IsIEludm9jYXRpb25FcnJvciwgUHJvY2VkdXJlTm90Rm91bmRFcnJvciwgUmVtb3RlRXJyb3IsIFNlbmRNZXNzYWdlRXJyb3IsIHNlcmlhbGl6ZVJlbW90ZUVycm9yLCBUaW1lb3V0RXJyb3J9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7REVGQVVMVF9SRVNVTFRfQ0FDSEVfQ0FQQUNJVFksIFJlc3VsdENhY2hlfSBmcm9tIFwiLi9yZXN1bHQtY2FjaGVcIjtcbmV4cG9ydCB7UmVzdWx0Q2FjaGV9OyAvLyBzbyB1bml0IHRlc3RzIGNhbiBhY2Nlc3MgUmVzcG9uc2VDYWNoZVxuXG5pbnRlcmZhY2UgUmVxdWVzdE1lc3NhZ2VCb2R5ICB7XG4gICAgY29udGVudHM6IFwicmVxdWVzdFwiO1xuICAgIGNhbGxJZDogc3RyaW5nO1xuICAgIHByb2NlZHVyZU5hbWU6IHN0cmluZztcbiAgICBhcmd1bWVudExpc3Q6IGFueVtdXG59XG5cbmludGVyZmFjZSBSZXN1bHRNZXNzYWdlQm9keSB7XG4gICAgY29udGVudHM6IFwicmVzdWx0XCI7XG4gICAgY2FsbElkOiBzdHJpbmc7ICAgIFxuICAgIHJlc3VsdDogYW55XG59XG5cbmludGVyZmFjZSBFcnJvck1lc3NhZ2VCb2R5IHtcbiAgICBjb250ZW50czogXCJlcnJvclwiO1xuICAgIGNhbGxJZDogc3RyaW5nO1xuICAgIGlzRXJyb3JJbnN0YW5jZTogYm9vbGVhbjtcbiAgICBlcnJvclZhbHVlOiBSZW1vdGVFcnJvcjtcbn1cblxudHlwZSBNZXNzYWdlQm9keSA9IFJlcXVlc3RNZXNzYWdlQm9keSB8IFJlc3VsdE1lc3NhZ2VCb2R5IHwgRXJyb3JNZXNzYWdlQm9keTtcblxuZXhwb3J0IGludGVyZmFjZSBJbnZvY2F0aW9uT3B0aW9ucyB7XG4gICAgdGltZW91dDogbnVtYmVyO1xuICAgIHJldHJ5TGltaXQ6IG51bWJlcjtcbiAgICByZXRyeUFsbEZhaWx1cmVzIDogYm9vbGVhbjtcbn1cblxudHlwZSBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tUeXBlID0gJ29uVW5leHBlY3RlZFJlc3BvbnNlJyB8ICdvblJlY2VpdmUnIHwgJ29uU2VuZCcgfCAnb25SZWdpc3RlcicgfCAnb25DbG9zZScgfCAnb25SZXF1ZXN0UmV0cnknIHwgJ29uUmVzdWx0Q2FjaGVFdmljdGlvbic7XG5cbi8vIE9wdGlvbmFsIGNhbGxiYWNrcyBmb3IgaW50ZXJuYWwgZXZlbnRzIHVzZWZ1bCBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nXG5leHBvcnQgdHlwZSBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tzID0ge1xuICAgIFtrZXkgaW4gSW50ZXJuYWxFdmVudENhbGxiYWNrVHlwZV06ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdFBhcmFtZXRlcnMge1xuICAgIHdpbmRvd1JlZjogV2luZG93O1xuICAgIG9yaWdpbldoaXRlbGlzdDogc3RyaW5nW107XG4gICAgZGVmYXVsdEludm9jYXRpb25PcHRpb25zOiBJbnZvY2F0aW9uT3B0aW9ucztcbiAgICBldmVudENhbGxiYWNrczogUGFydGlhbDxJbnRlcm5hbEV2ZW50Q2FsbGJhY2tzPjtcbiAgICByZXN1bHRDYWNoZUNhcGFjaXR5OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDYWxsYmFja0Z1bmN0aW9ucyB7XG4gICAgcmVzb2x2ZTogKHJlc3VsdD86IGFueSkgPT4gdm9pZCxcbiAgICByZWplY3Q6IChlcnJvcj86IGFueSkgPT4gdm9pZFxufVxuXG50eXBlIFByb2NlZHVyZUltcGxlbWVudGF0aW9uID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk7XG5cbnR5cGUgUHJvY2VkdXJlSW52b2NhdGlvbkNvbnRleHQgPSB7cmVxdWVzdE1lc3NhZ2VCb2R5OiBSZXF1ZXN0TWVzc2FnZUJvZHksIG1lc3NhZ2VTb3VyY2U6IFdpbmRvdywgbWVzc2FnZU9yaWdpbjogc3RyaW5nfTtcblxuY29uc3QgUlBDX01FU1NBR0VfVFlQRSA9IFwibWluaS1pZnJhbWUtcnBjXCI7XG5jb25zdCBSQU5ET01fQkFTRSA9IDM2O1xuY29uc3QgQ0FMTElEX0xFTkdUSCA9IDg7XG5jb25zdCBERUZBVUxUX0lOVk9DQVRJT05fT1BUSU9OUzpJbnZvY2F0aW9uT3B0aW9ucyA9IHtcbiAgICB0aW1lb3V0OiAxMDAsXG4gICAgcmV0cnlMaW1pdDogMixcbiAgICByZXRyeUFsbEZhaWx1cmVzOiBmYWxzZVxufVxuXG5leHBvcnQgY2xhc3MgTWluaUlmcmFtZVJQQyB7XG4gICAgcHJpdmF0ZSBjb25maWc6IEluaXRQYXJhbWV0ZXJzO1xuICAgIHByaXZhdGUgY2FsbGJhY2tzOiB7W2tleTpzdHJpbmddOkNhbGxiYWNrRnVuY3Rpb25zfSA9IHt9O1xuICAgIHByaXZhdGUgcmVnaXN0ZXJlZFByb2NlZHVyZXM6e1trZXk6c3RyaW5nXTogUHJvY2VkdXJlSW1wbGVtZW50YXRpb259ID0ge307XG4gICAgcHJpdmF0ZSByZXN1bHRDYWNoZTpSZXN1bHRDYWNoZTtcblxuICAgIGNvbnN0cnVjdG9yKGluaXRQYXJhbWV0ZXJzPzogSW5pdFBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICB3aW5kb3dSZWY6IGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLndpbmRvd1JlZiB8fCB3aW5kb3csXG4gICAgICAgICAgICBvcmlnaW5XaGl0ZWxpc3Q6IGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLm9yaWdpbldoaXRlbGlzdCB8fCBbXSxcbiAgICAgICAgICAgIGRlZmF1bHRJbnZvY2F0aW9uT3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9JTlZPQ0FUSU9OX09QVElPTlMsIGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLmRlZmF1bHRJbnZvY2F0aW9uT3B0aW9ucyB8fCB7fSksICAgICAgICAgICAgXG4gICAgICAgICAgICBldmVudENhbGxiYWNrczogaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMuZXZlbnRDYWxsYmFja3MgfHwge30sXG4gICAgICAgICAgICByZXN1bHRDYWNoZUNhcGFjaXR5OiBpbml0UGFyYW1ldGVycyAmJiB0eXBlb2YgaW5pdFBhcmFtZXRlcnMucmVzdWx0Q2FjaGVDYXBhY2l0eSA9PT0gJ251bWJlcicgPyBpbml0UGFyYW1ldGVycy5yZXN1bHRDYWNoZUNhcGFjaXR5IDogREVGQVVMVF9SRVNVTFRfQ0FDSEVfQ0FQQUNJVFlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZXN1bHRDYWNoZSA9IG5ldyBSZXN1bHRDYWNoZSh7XG4gICAgICAgICAgICBjYXBhY2l0eTogdGhpcy5jb25maWcucmVzdWx0Q2FjaGVDYXBhY2l0eSxcbiAgICAgICAgICAgIGV2aWN0aW9uQ2FsbGJhY2s6IChjYWxsSWQsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25SZXN1bHRDYWNoZUV2aWN0aW9uXCIsIGNhbGxJZCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGF0dGFjaCBsaXN0ZW5lclxuICAgICAgICB0aGlzLmNvbmZpZy53aW5kb3dSZWYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5yZWN2KTtcbiAgICB9ICAgICAgICBcblxuICAgIHJlZ2lzdGVyKHByb2NlZHVyZU5hbWU6IHN0cmluZywgaW1wbGVtZW50YXRpb24/OiBQcm9jZWR1cmVJbXBsZW1lbnRhdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uUmVnaXN0ZXJcIiwgcHJvY2VkdXJlTmFtZSwgaW1wbGVtZW50YXRpb24pXG4gICAgICAgIGlmIChpbXBsZW1lbnRhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmVkUHJvY2VkdXJlc1twcm9jZWR1cmVOYW1lXSA9IGltcGxlbWVudGF0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlTmFtZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZva2UgKHRhcmdldFdpbmRvdzogV2luZG93LCB0YXJnZXRPcmlnaW46IHN0cmluZyB8IG51bGwsIHByb2NlZHVyZU5hbWU6IHN0cmluZywgYXJndW1lbnRMaXN0PzogYW55W10sIGludm9jYXRpb25PcHRpb25zPzogSW52b2NhdGlvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb25maWcuZGVmYXVsdEludm9jYXRpb25PcHRpb25zLCBpbnZvY2F0aW9uT3B0aW9ucyB8fMKge30pO1xuICAgICAgICBjb25zdCBjYWxsSWQgPSB0aGlzLmdldE5leHRDYWxsSWQoKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE1lc3NhZ2VCb2R5OiBSZXF1ZXN0TWVzc2FnZUJvZHkgPSB7XG4gICAgICAgICAgICBjb250ZW50czogXCJyZXF1ZXN0XCIsXG4gICAgICAgICAgICBjYWxsSWQsXG4gICAgICAgICAgICBwcm9jZWR1cmVOYW1lLFxuICAgICAgICAgICAgYXJndW1lbnRMaXN0OiAoYXJndW1lbnRMaXN0IHx8IFtdKX07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdFdpdGhSZXRyeSh0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgcmVxdWVzdE1lc3NhZ2VCb2R5LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvbkNsb3NlXCIpO1xuICAgICAgICB0aGlzLmNvbmZpZy53aW5kb3dSZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5yZWN2KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlcXVlc3RXaXRoUmV0cnkodGFyZ2V0V2luZG93OiBXaW5kb3csIHRhcmdldE9yaWdpbjogc3RyaW5nIHwgbnVsbCwgcmVxdWVzdE1lc3NhZ2VCb2R5OlJlcXVlc3RNZXNzYWdlQm9keSwgb3B0aW9uczogSW52b2NhdGlvbk9wdGlvbnMpOlByb21pc2U8YW55PiB7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVxdWVzdENvdW50ID0gMDtcbiAgICAgICAgbGV0IGZhaWx1cmVDb3VudCA9IDA7ICAgICAgICBcbiAgICAgICAgbGV0IGZpbmFsUmVzb2x2ZToocmVzdWx0PzogYW55KSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuICAgICAgICBsZXQgZmluYWxSZWplY3Q6KGVycm9yPzogYW55KSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuICAgICAgICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUmVqZWN0UmVhc29uczphbnlbXSA9IFtdOyAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBpc0Vycm9yUmV0cmlhYmxlID0gKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRpbWVvdXQgPD0gMCB8fCBvcHRpb25zLnJldHJ5TGltaXQgPCAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5yZXRyeUFsbEZhaWx1cmVzIHx8IChlcnJvciBpbnN0YW5jZW9mIFRpbWVvdXRFcnJvcik7ICAgICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWFrZVJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHRhcmdldFdpbmRvdywgdGFyZ2V0T3JpZ2luLCByZXF1ZXN0TWVzc2FnZUJvZHkpO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzW3JlcXVlc3RNZXNzYWdlQm9keS5jYWxsSWRdID0ge3Jlc29sdmUsIHJlamVjdH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc29sdmUgPSAocmVzdWx0PzogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBmaXJzdCBzdWNjZXNzZnVsIHJlcXVlc3QgaW1tZWRpYXRlbHkgcmVzb2x2ZXMgdGhlIGludm9jYXRpb24gcHJvbWlzZVxuICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZpbmFsUmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlUmVqZWN0ID0gKHJlYXNvbj86IGFueSkgPT4ge1xuICAgICAgICAgICAgZmFpbHVyZUNvdW50ICs9IDE7XG4gICAgICAgICAgICAvLyBJZiByZXF1ZXN0IGhhcyBzaW5jZSBiZWVuIGNvbXBsZXRlZCwgZG8gbm90aGluZ1xuICAgICAgICAgICAgLy8gUmV0cnkgcmVxdWVzdCBvciBmYWlsIHBlcm1hbmVudGx5IGlmIG5vIG91dHN0YW5kaW5nIHJlcXVlc3RzIHN0aWxsIGluIGZsaWdodFxuICAgICAgICAgICAgaWYgKCFjb21wbGV0ZWQgJiYgZmFpbHVyZUNvdW50ID09PSByZXF1ZXN0Q291bnQpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpc0Vycm9yUmV0cmlhYmxlKHJlYXNvbikgJiYgcmVxdWVzdENvdW50IDwgKG9wdGlvbnMucmV0cnlMaW1pdCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25SZXF1ZXN0UmV0cnlcIiwgcmVhc29uLCBwcmV2aW91c1JlamVjdFJlYXNvbnMsIHJlcXVlc3RNZXNzYWdlQm9keSk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVqZWN0UmVhc29ucy5wdXNoKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgICAgIG1ha2VBdHRlbXB0KCk7XG4gICAgICAgICAgICAgICAgLy8gSWYgZXJyb3IgaXMgbm9uLXJldHJpYWJsZSBhbmQgdGhlcmUgYXJlIG5vIHVuYW5zd2VyZWQgcmVxdWVzdHMsIGdpdmUgdXAuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxSZWplY3QobmV3IEludm9jYXRpb25FcnJvcihyZXF1ZXN0TWVzc2FnZUJvZHkucHJvY2VkdXJlTmFtZSwgcmVhc29uLCBwcmV2aW91c1JlamVjdFJlYXNvbnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBhcmUgc3RpbGwgb3V0c3RhbmRpbmcgcmVxdWVzdHMsIHdhaXQgZm9yIHRoZW0gdG8gc3VjY2VlZCBvciBmYWlsLlxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG1ha2VBdHRlbXB0ID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdENvdW50ICs9IDE7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2VQcm9taXNlID0gbWFrZVJlcXVlc3QoKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VQcm9taXNlID0gdGhpcy50aW1lYm94UHJvbWlzZShyZXNwb25zZVByb21pc2UsIG9wdGlvbnMudGltZW91dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVByb21pc2UudGhlbihoYW5kbGVSZXNvbHZlLCBoYW5kbGVSZWplY3QpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZmluYWxSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIGZpbmFsUmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaW5pdGlhbCBhdHRlbXB0XG4gICAgICAgIG1ha2VBdHRlbXB0KCk7XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW50ZXJuYWxFdmVudENhbGxiYWNrKGludGVybmFsRXZlbnRDYWxsYmFjazogSW50ZXJuYWxFdmVudENhbGxiYWNrVHlwZSwgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgY2IgPSB0aGlzLmNvbmZpZy5ldmVudENhbGxiYWNrc1tpbnRlcm5hbEV2ZW50Q2FsbGJhY2tdO1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aW1lYm94UHJvbWlzZShvcmlnaW5hbFByb21pc2U6IFByb21pc2U8YW55PiwgdGltZW91dE1pbGxpU2Vjb25kczogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgICAgICAgICBvcmlnaW5hbFByb21pc2UsXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLndpbmRvd1JlZi5zZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiByZWplY3QobmV3IFRpbWVvdXRFcnJvcih7dGltZW91dE1pbGxpU2Vjb25kc30pKSxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dE1pbGxpU2Vjb25kcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBdKTtcbiAgICB9ICAgXG5cbiAgICBwcml2YXRlIGdldE5leHRDYWxsSWQgKCkge1xuICAgICAgICBsZXQgcmFuZG9tSWQgOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgICAgd2hpbGUoIXJhbmRvbUlkIHx8IHRoaXMuY2FsbGJhY2tzW3JhbmRvbUlkXSkge1xuICAgICAgICAgICAgcmFuZG9tSWQgPSBgY2Ike01hdGgucmFuZG9tKCkudG9TdHJpbmcoUkFORE9NX0JBU0UpLnJlcGxhY2UoL1teYS16XSsvZywgJycpLnN1YnN0cigwLCBDQUxMSURfTEVOR1RIKX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJhbmRvbUlkO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2VuZE1lc3NhZ2UgKHRhcmdldFdpbmRvdzogV2luZG93LCB0YXJnZXRPcmlnaW46IHN0cmluZyB8IG51bGwsIG1lc3NhZ2VCb2R5OiBNZXNzYWdlQm9keSkgOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnVsbE1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBSUENfTUVTU0FHRV9UWVBFLFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogbWVzc2FnZUJvZHlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25TZW5kXCIsIHRhcmdldFdpbmRvdywgdGFyZ2V0T3JpZ2luLCBmdWxsTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0V2luZG93LnBvc3RNZXNzYWdlKGZ1bGxNZXNzYWdlLCB0YXJnZXRPcmlnaW4gfHwgXCIqXCIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gICAgICAgIFxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVSZXF1ZXN0IChjb250ZXh0OlByb2NlZHVyZUludm9jYXRpb25Db250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGNhbGxJZCA9IGNvbnRleHQucmVxdWVzdE1lc3NhZ2VCb2R5LmNhbGxJZDtcbiAgICAgICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IGNvbnRleHQucmVxdWVzdE1lc3NhZ2VCb2R5LnByb2NlZHVyZU5hbWU7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50TGlzdCA9IGNvbnRleHQucmVxdWVzdE1lc3NhZ2VCb2R5LmFyZ3VtZW50TGlzdDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VPcmlnaW4gPSAhY29udGV4dC5tZXNzYWdlT3JpZ2luIHx8IGNvbnRleHQubWVzc2FnZU9yaWdpbiA9PT0gXCJudWxsXCIgPyBudWxsIDogY29udGV4dC5tZXNzYWdlT3JpZ2luO1xuICAgICAgICBjb25zdCBzZW5kRXJyb3IgPSAocmVqZWN0T3JFcnJvcjogYW55LCBleGNlcHRpb25OYW1lPzpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzRXJyb3IgPSByZWplY3RPckVycm9yIGluc3RhbmNlb2YgRXJyb3I7XG4gICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIGNvbnRleHQubWVzc2FnZVNvdXJjZSxcbiAgICAgICAgICAgICAgICByZXNwb25zZU9yaWdpbixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxJZCxcbiAgICAgICAgICAgICAgICAgICAgaXNFcnJvckluc3RhbmNlOiBpc0Vycm9yLCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVmFsdWU6IGlzRXJyb3IgPyBzZXJpYWxpemVSZW1vdGVFcnJvcihyZWplY3RPckVycm9yLCBleGNlcHRpb25OYW1lKSA6IHJlamVjdE9yRXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZ2V0UmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0Q2FjaGUuaGFzQ2FjaGVkUmVzdWx0KGNhbGxJZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRDYWNoZS5nZXRDYWNoZWRSZXN1bHQoY2FsbElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZWdpc3RlcmVkUHJvY2VkdXJlc1twcm9jZWR1cmVOYW1lXS5hcHBseShcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRMaXN0KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdENhY2hlLnNldENhY2hlZFJlc3VsdChjYWxsSWQsIHJlc3VsdFByb21pc2UpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlTmFtZV0pIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBnZXRSZXN1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3VsdD86YW55KSA9PiB0aGlzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm1lc3NhZ2VTb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50czogXCJyZXN1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBzZW5kRXJyb3IoZXJyb3IsIFNlbmRNZXNzYWdlRXJyb3IubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcj86YW55KSA9PiBzZW5kRXJyb3IoZXJyb3IsIEV2YWx1YXRpb25FcnJvci5uYW1lKSk7ICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZEVycm9yKG5ldyBQcm9jZWR1cmVOb3RGb3VuZEVycm9yKHtwcm9jZWR1cmVOYW1lfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVSZXNwb25zZShyZXNwb25zZTogTWVzc2FnZUJvZHkpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tGdW5jdGlvbnMgPSB0aGlzLmNhbGxiYWNrc1tyZXNwb25zZS5jYWxsSWRdO1xuICAgICAgICBpZiAoY2FsbGJhY2tGdW5jdGlvbnMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1tyZXNwb25zZS5jYWxsSWRdOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvbnRlbnRzID09PSBcInJlc3VsdFwiKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbnMucmVzb2x2ZShyZXNwb25zZS5yZXN1bHQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5jb250ZW50cyA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JPYmplY3QgPSByZXNwb25zZS5pc0Vycm9ySW5zdGFuY2UgPyBkZXNlcmlhbGl6ZVJlbW90ZUVycm9yKHJlc3BvbnNlLmVycm9yVmFsdWUpIDogcmVzcG9uc2UuZXJyb3JWYWx1ZTtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9ucy5yZWplY3QoZXJyb3JPYmplY3QpO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uVW5leHBlY3RlZFJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgcmVjdiA9IChtZXNzYWdlRXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoKHRoaXMuY29uZmlnLm9yaWdpbldoaXRlbGlzdC5sZW5ndGggPCAxIHx8IHRoaXMuY29uZmlnLm9yaWdpbldoaXRlbGlzdC5pbmRleE9mKG1lc3NhZ2VFdmVudC5vcmlnaW4pID4gLTEpICYmXG4gICAgICAgICAgICBtZXNzYWdlRXZlbnQuZGF0YSAmJiBtZXNzYWdlRXZlbnQuZGF0YS50eXBlID09PSBSUENfTUVTU0FHRV9UWVBFKSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uUmVjZWl2ZVwiLCBtZXNzYWdlRXZlbnQpOyAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RNZXNzYWdlQm9keSA6IE1lc3NhZ2VCb2R5ID0gbWVzc2FnZUV2ZW50LmRhdGEubWVzc2FnZSBhcyBNZXNzYWdlQm9keTtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0TWVzc2FnZUJvZHkuY29udGVudHMgPT09IFwicmVxdWVzdFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdCh7cmVxdWVzdE1lc3NhZ2VCb2R5LCBtZXNzYWdlU291cmNlOiBtZXNzYWdlRXZlbnQuc291cmNlIGFzIFdpbmRvdywgbWVzc2FnZU9yaWdpbjogbWVzc2FnZUV2ZW50Lm9yaWdpbn0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXNwb25zZShyZXF1ZXN0TWVzc2FnZUJvZHkpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG59IC8vIGVuZCBvZiBjbGFzc1xuIiwiZXhwb3J0IGludGVyZmFjZSBSZXN1bHRDYWNoZVBhcmFtZXRlcnMge1xuICAgIGNhcGFjaXR5OiBudW1iZXI7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGV2aWN0aW9uQ2FsbGJhY2s/OiAoY2FsbElkOnN0cmluZywgcmVzdWx0OmFueSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1JFU1VMVF9DQUNIRV9DQVBBQ0lUWSA9IDIwMDtcblxuXG5jb25zdCBERUZBVUxUX1BBUkFNRVRFUlM6UmVzdWx0Q2FjaGVQYXJhbWV0ZXJzID0ge1xuICAgIGNhcGFjaXR5OiBERUZBVUxUX1JFU1VMVF9DQUNIRV9DQVBBQ0lUWSxcbn07XG5cbmV4cG9ydCBjbGFzcyBSZXN1bHRDYWNoZSB7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcHJpdmF0ZSBjYWxsSWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBwcml2YXRlIHJlc3VsdHM6IHtba2V5OnN0cmluZ106YW55fSA9IHt9O1xuICAgIHByaXZhdGUgY29uZmlnOiBSZXN1bHRDYWNoZVBhcmFtZXRlcnM7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBQYXJ0aWFsPFJlc3VsdENhY2hlUGFyYW1ldGVycz4pIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1BBUkFNRVRFUlMsIGNvbmZpZyB8fCB7fSk7XG4gICAgfVxuXG4gICAgaGFzQ2FjaGVkUmVzdWx0KGNhbGxJZDpzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0cy5oYXNPd25Qcm9wZXJ0eShjYWxsSWQpO1xuICAgIH1cblxuICAgIGdldENhY2hlZFJlc3VsdChjYWxsSWQ6c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHNbY2FsbElkXTtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgc2V0Q2FjaGVkUmVzdWx0KGNhbGxJZDpzdHJpbmcsIHJlc3VsdDphbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2FjaGVkUmVzdWx0KGNhbGxJZCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbElkcyA9IHRoaXMuY2FsbElkcy5maWx0ZXIoYyA9PiBjICE9PSBjYWxsSWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsbElkcy51bnNoaWZ0KGNhbGxJZCk7XG4gICAgICAgIHRoaXMucmVzdWx0c1tjYWxsSWRdID0gcmVzdWx0O1xuICAgICAgICBpZiAodGhpcy5jb25maWcuY2FwYWNpdHkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbmZvcmNlQ2FwYWNpdHkoKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmZvcmNlQ2FwYWNpdHkoKSB7XG4gICAgICAgIGZvciAobGV0IHNpemUgPSB0aGlzLmNhbGxJZHMubGVuZ3RoOyBzaXplID4gdGhpcy5jb25maWcuY2FwYWNpdHk7IHNpemUtLSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbElkID0gdGhpcy5jYWxsSWRzLnBvcCgpITtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmVzdWx0c1tjYWxsSWRdO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVzdWx0c1tjYWxsSWRdO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmV2aWN0aW9uQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5ldmljdGlvbkNhbGxiYWNrKGNhbGxJZCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=