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
/*! exports provided: ResponseCache, MiniIframeRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniIframeRPC", function() { return MiniIframeRPC; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./src/errors/index.ts");
/* harmony import */ var _response_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./response-cache */ "./src/response-cache.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponseCache", function() { return _response_cache__WEBPACK_IMPORTED_MODULE_2__["ResponseCache"]; });

/* tslint:disable no-any no-unsafe-any */



 // so unit tests can access ResponseCache
var RPC_MESSAGE_TYPE = "mini-iframe-rpc";
var RANDOM_BASE = 36;
var CALLID_LENGTH = 8;
var DEFAULT_INVOCATION_OPTIONS = {
    timeout: 200,
    retryLimit: 0
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
                var messageBody = messageEvent.data.message;
                if (messageBody.contents === "request") {
                    return _this.handleRequest(messageBody, messageEvent.source, messageEvent.origin);
                }
                return _this.handleResponse(messageBody);
            }
        };
        this.config = {
            windowRef: initParameters && initParameters.windowRef || window,
            originWhitelist: initParameters && initParameters.originWhitelist || [],
            defaultInvocationOptions: Object.assign({}, DEFAULT_INVOCATION_OPTIONS, initParameters && initParameters.defaultInvocationOptions || {}),
            eventCallbacks: initParameters && initParameters.eventCallbacks || {}
        };
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
            if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_1__["ProcedureNotFoundError"]) {
                return false;
            }
            return true;
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
            // TODO: call internal eventCallback
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
    MiniIframeRPC.prototype.handleRequest = function (messageBody, messageSource, messageOrigin) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var callId, procedureName, argumentList, responseOrigin, sendError;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                callId = messageBody.callId;
                procedureName = messageBody.procedureName;
                argumentList = messageBody.argumentList;
                responseOrigin = !messageOrigin || messageOrigin === "null" ? null : messageOrigin;
                sendError = function (rejectOrError, exceptionName) {
                    var isError = rejectOrError instanceof Error;
                    _this.sendMessage(messageSource, responseOrigin, {
                        contents: "error",
                        callId: callId,
                        isErrorInstance: isError,
                        errorValue: isError ? Object(_errors__WEBPACK_IMPORTED_MODULE_1__["serializeRemoteError"])(rejectOrError, exceptionName) : rejectOrError
                    });
                };
                if (this.registeredProcedures[procedureName]) {
                    try {
                        return [2 /*return*/, Promise.resolve(this.registeredProcedures[procedureName].apply({ messageBody: messageBody, messageSource: messageSource, messageOrigin: messageOrigin }, argumentList)).then(function (result) { return _this.sendMessage(messageSource, responseOrigin, {
                                contents: "result",
                                callId: callId,
                                result: result
                            }).catch(function (error) {
                                sendError(error, _errors__WEBPACK_IMPORTED_MODULE_1__["SendMessageError"].name);
                            }); }, 
                            // send 'error' type message with rejection value
                            sendError)];
                    }
                    catch (ex) {
                        return [2 /*return*/, sendError(ex, _errors__WEBPACK_IMPORTED_MODULE_1__["EvaluationError"].name)];
                    }
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

/***/ "./src/response-cache.ts":
/*!*******************************!*\
  !*** ./src/response-cache.ts ***!
  \*******************************/
/*! exports provided: ResponseCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseCache", function() { return ResponseCache; });
;
var DEFAULT_PARAMETERS = {
    size: 100
};
var ResponseCache = /** @class */ (function () {
    function ResponseCache(parameters) {
        // tslint:disable-next-line:no-any
        this.responses = {};
        this.parameters = Object.assign({}, DEFAULT_PARAMETERS, parameters || {});
    }
    return ResponseCache;
}());



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvZXZhbHVhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL2luZGV4LnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvaW52b2NhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL21pbmktaWZyYW1lLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvcHJvY2VkdXJlLW5vdC1mb3VuZC1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL3JlbW90ZS1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL3NlbmQtbWVzc2FnZS1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL3RpbWVvdXQtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL21pbmktaWZyYW1lLXJwYy50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvcmVzcG9uc2UtY2FjaGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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Q0FBQyxDQUFDO2FBQzlDO2lCQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7Z0JBQ3RDLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLHNFQUFzQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDakgsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pDO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNoRTtJQUNMLENBQUM7SUFlTCxvQkFBQztBQUFELENBQUMsS0FBQyxlQUFlOzs7Ozs7Ozs7Ozs7OztBQ25TaEI7QUFBQTtBQUFBLENBQUM7QUFFRixJQUFNLGtCQUFrQixHQUFHO0lBQ3ZCLElBQUksRUFBRSxHQUFHO0NBQ1osQ0FBQztBQUVGO0lBTUksdUJBQVksVUFBNkM7UUFKekQsa0NBQWtDO1FBQ2xDLGNBQVMsR0FBdUIsRUFBRSxDQUFDO1FBSS9CLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMiLCJmaWxlIjoibWluaS1pZnJhbWUtcnBjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJtaW5pLWlmcmFtZS1ycGNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWluaS1pZnJhbWUtcnBjXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbmktaWZyYW1lLXJwY1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9taW5pLWlmcmFtZS1ycGMudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IFJlbW90ZUVycm9yIH0gZnJvbSAnLi9yZW1vdGUtZXJyb3InO1xuXG5leHBvcnQgY2xhc3MgRXZhbHVhdGlvbkVycm9yIGV4dGVuZHMgUmVtb3RlRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3I6IFJlbW90ZUVycm9yKSB7XG4gICAgICAgIHN1cGVyKGVycm9yLmNhdXNlKTtcbiAgICAgICAgLy8gc2VlOiB0eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9yZWxlYXNlLW5vdGVzL3R5cGVzY3JpcHQtMi0yLmh0bWxcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTsgLy8gcmVzdG9yZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgdGhpcy5uYW1lID0gRXZhbHVhdGlvbkVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHtFdmFsdWF0aW9uRXJyb3J9IGZyb20gJy4vZXZhbHVhdGlvbi1lcnJvcic7XG5pbXBvcnQge0ludm9jYXRpb25FcnJvcn0gZnJvbSAnLi9pbnZvY2F0aW9uLWVycm9yJztcbmltcG9ydCB7TWluaUlmcmFtZUVycm9yfSBmcm9tICcuL21pbmktaWZyYW1lLWVycm9yJztcbmltcG9ydCB7UHJvY2VkdXJlTm90Rm91bmRFcnJvcn0gZnJvbSAnLi9wcm9jZWR1cmUtbm90LWZvdW5kLWVycm9yJztcbmltcG9ydCB7ZXJyb3JUb0pTT04sIFJlbW90ZUVycm9yLCBSZW1vdGVFcnJvckNhdXNlfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5pbXBvcnQge1NlbmRNZXNzYWdlRXJyb3J9IGZyb20gJy4vc2VuZC1tZXNzYWdlLWVycm9yJztcbmltcG9ydCB7VGltZW91dEVycm9yfSBmcm9tICcuL3RpbWVvdXQtZXJyb3InO1xuXG5leHBvcnQge01pbmlJZnJhbWVFcnJvciwgUHJvY2VkdXJlTm90Rm91bmRFcnJvciwgRXZhbHVhdGlvbkVycm9yLCBUaW1lb3V0RXJyb3IsIFNlbmRNZXNzYWdlRXJyb3IsIFJlbW90ZUVycm9yLCBJbnZvY2F0aW9uRXJyb3J9O1xuXG50eXBlIFJlbW90ZUVycm9yQ29uc3RydWN0b3IgPSBuZXcgKHN0YXRlOiBQYXJ0aWFsPFJlbW90ZUVycm9yPikgPT4gUmVtb3RlRXJyb3I7XG5cbnR5cGUgRVJST1JfTUFQID0ge1xuICAgIFtrZXk6IHN0cmluZ106IFJlbW90ZUVycm9yQ29uc3RydWN0b3Jcbn1cblxuY29uc3QgcmVtb3RlRXJyb3JDbGFzc2VzID0gKFtcbiAgICBQcm9jZWR1cmVOb3RGb3VuZEVycm9yLFxuICAgIEV2YWx1YXRpb25FcnJvcixcbiAgICBTZW5kTWVzc2FnZUVycm9yXG4gICAgXSBhcyBSZW1vdGVFcnJvckNvbnN0cnVjdG9yW10pLnJlZHVjZShcbiAgICAob2JqOkVSUk9SX01BUCwgY29uc3RyOlJlbW90ZUVycm9yQ29uc3RydWN0b3IpID0+IHtcbiAgICAgICAgb2JqW2NvbnN0ci5uYW1lXSA9IGNvbnN0cjtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sIHt9IGFzIEVSUk9SX01BUCkgYXMgRVJST1JfTUFQOyAgICBcblxuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZVJlbW90ZUVycm9yID0gKGNhdXNlOiBSZW1vdGVFcnJvckNhdXNlLCByZW1vdGVFeGNlcHRpb25OYW1lPzogc3RyaW5nKTpSZW1vdGVFcnJvciA9PiB7ICAgIFxuICAgIFxuICAgIGNvbnN0IGNvbnZlcnQgPSAoZXJyOiBSZW1vdGVFcnJvcik6UmVtb3RlRXJyb3IgPT4ge1xuICAgICAgICBjb25zdCBlcnJKU09OOlJlbW90ZUVycm9yID0gZXJyb3JUb0pTT04oZXJyKTsgICAgICAgIFxuICAgICAgICBpZiAocmVtb3RlRXhjZXB0aW9uTmFtZSkge1xuICAgICAgICAgICAgZXJySlNPTi5uYW1lID0gcmVtb3RlRXhjZXB0aW9uTmFtZTtcbiAgICAgICAgfSAgICAgXG5cbiAgICAgICAgcmV0dXJuIGVyckpTT047XG4gICAgfVxuICAgIGlmIChjYXVzZSBpbnN0YW5jZW9mIFJlbW90ZUVycm9yKSB7XG4gICAgICAgIC8vIGlmIGNhdXNlIGlzIGFscmVhZHkgYSByZW1vdGVFcnJvciwgcmV0dXJuIGFzIGlzXG4gICAgICAgIHJldHVybiBjb252ZXJ0KGNhdXNlKTtcbiAgICB9ICAgIFxuICAgIC8vIGZvciBib3RoIEVycm9yIGFuZCBTdHJpbmcgdHlwZSBjYXVzZXMsIGNyZWF0ZSBhIG5ldyBSZW1vdGVFcnJvciBcblxuICAgIHJldHVybiBjb252ZXJ0KG5ldyBSZW1vdGVFcnJvcihjYXVzZSkpOyAgICBcbn07ICAgXG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBjb25zdCBkZXNlcmlhbGl6ZVJlbW90ZUVycm9yID0gKGVycm9yOlJlbW90ZUVycm9yKSA9PiB7XG4gICAgY29uc3QgY29uc3RyID0gcmVtb3RlRXJyb3JDbGFzc2VzW2Vycm9yLm5hbWVdIHx8IFJlbW90ZUVycm9yO1xuXG4gICAgcmV0dXJuIG5ldyBjb25zdHIoZXJyb3IpO1xufTsiLCJpbXBvcnQge01pbmlJZnJhbWVFcnJvcn0gZnJvbSAnLi9taW5pLWlmcmFtZS1lcnJvcic7XG5pbXBvcnQge2Vycm9yVG9KU09OfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmNvbnN0IG1ha2VNZXNzYWdlID0gKHByb2NlZHVyZU5hbWU6IHN0cmluZywgY2F1c2U/OiBhbnksIHByZXZpb3VzUmVqZWN0UmVhc29ucz86IGFueVtdKTpzdHJpbmcgPT4ge1xuICAgIGxldCBtZXNzYWdlID0gYEVycm9yIGludm9raW5nIHJlbW90ZSBwcm9jZWR1cmUgJyR7cHJvY2VkdXJlTmFtZX0nLmA7XG4gICAgaWYgKGNhdXNlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc3QgZXJyID0gY2F1c2UgYXMgRXJyb3I7XG4gICAgICAgIG1lc3NhZ2UgKz0gYCAke2Vyci5uYW1lfTogJHtlcnIubWVzc2FnZX0uYDtcbiAgICB9IGVsc2UgaWYgKGNhdXNlKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gYCBSZWFzb246ICR7Y2F1c2UudG9TdHJpbmcoKX0uYDtcbiAgICB9XG4gICAgaWYgKHByZXZpb3VzUmVqZWN0UmVhc29ucyAmJiBwcmV2aW91c1JlamVjdFJlYXNvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBwbHVyYWwgPSBwcmV2aW91c1JlamVjdFJlYXNvbnMubGVuZ3RoID4gMSA/ICdzJyA6ICcnO1xuICAgICAgICBtZXNzYWdlICs9IGAgJHtwcmV2aW91c1JlamVjdFJlYXNvbnMubGVuZ3RofSBhZGRpdGlvbmFsIHJlamVjdGlvbiR7cGx1cmFsfSBmcm9tIHJldHJpZWQgYXR0ZW1wdCR7cGx1cmFsfS5gO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xufTtcblxuZXhwb3J0IGNsYXNzIEludm9jYXRpb25FcnJvciBleHRlbmRzIE1pbmlJZnJhbWVFcnJvciB7XG5cbiAgICBwcm9jZWR1cmVOYW1lOiBzdHJpbmc7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGNhdXNlPzogYW55O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBwcmV2aW91c1JlamVjdFJlYXNvbnM/OiBhbnlbXTtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjb25zdHJ1Y3Rvcihwcm9jZWR1cmVOYW1lOiBzdHJpbmcsIGNhdXNlPzogYW55LCBwcmV2aW91c1JlamVjdFJlYXNvbnM/OiBhbnlbXSkge1xuICAgICAgICBzdXBlcihtYWtlTWVzc2FnZShwcm9jZWR1cmVOYW1lLCBjYXVzZSwgcHJldmlvdXNSZWplY3RSZWFzb25zKSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBJbnZvY2F0aW9uRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgIFxuICAgICAgICB0aGlzLnByb2NlZHVyZU5hbWUgPSBwcm9jZWR1cmVOYW1lO1xuICAgICAgICB0aGlzLmNhdXNlID0gY2F1c2U7XG4gICAgICAgIHRoaXMucHJldmlvdXNSZWplY3RSZWFzb25zID0gcHJldmlvdXNSZWplY3RSZWFzb25zOyAgICAgICAgICAgICAgXG4gICAgfSAgICBcbn0iLCJleHBvcnQgY2xhc3MgTWluaUlmcmFtZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXG4gICAgdGltZXN0YW1wOm51bWJlcjtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nLCBzdGF0ZT86IGFueSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSDCoCsobmV3IERhdGUoKSk7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2VlOiB0eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9yZWxlYXNlLW5vdGVzL3R5cGVzY3JpcHQtMi0yLmh0bWxcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTsgLy8gcmVzdG9yZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgdGhpcy5uYW1lID0gTWluaUlmcmFtZUVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgXG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZW1vdGVFcnJvciB9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcblxuZXhwb3J0IGNsYXNzIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBSZW1vdGVFcnJvciB7XG5cbiAgICBwcm9jZWR1cmVOYW1lID0gXCJ1bmtub3duXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGFydGlhbDxQcm9jZWR1cmVOb3RGb3VuZEVycm9yPikge1xuICAgICAgICBzdXBlcihgUmVtb3RlIHByb2NlZHVyZSAnJHtzdGF0ZS5wcm9jZWR1cmVOYW1lfScgbm90IHJlZ2lzdGVyZWQgaW4gcmVtb3RlIFJQQyBpbnN0YW5jZS5gKTtcbiAgICAgICAgaWYgKHN0YXRlLnByb2NlZHVyZU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2VkdXJlTmFtZSA9IHN0YXRlLnByb2NlZHVyZU5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2VlOiB0eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9yZWxlYXNlLW5vdGVzL3R5cGVzY3JpcHQtMi0yLmh0bWxcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTsgLy8gcmVzdG9yZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgdGhpcy5uYW1lID0gUHJvY2VkdXJlTm90Rm91bmRFcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7TWluaUlmcmFtZUVycm9yfSBmcm9tICcuL21pbmktaWZyYW1lLWVycm9yJztcblxuZXhwb3J0IHR5cGUgUmVtb3RlRXJyb3JDYXVzZSA9IEVycm9yIHwgc3RyaW5nO1xuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JUb0pTT048VCBleHRlbmRzIEVycm9yPiAoZXJyOiBUKTpUIHtcbiAgICAvLyBtZXNzYWdlLCBuYW1lLCBzdGFjayBhcmUgbm90IGVubnVtZXJhYmxlLCBzbyB3ZSBtdXN0IGV4cGxpY2l0bHkgZ2V0IHRoZW0uXG4gICAgY29uc3Qge21lc3NhZ2UsIG5hbWUsIHN0YWNrfSA9IGVycjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHttZXNzYWdlLCBzdGFjaywgbmFtZX0sIGVycik7XG59XG5cbmNvbnN0IGNhdXNlVG9NZXNzYWdlID0gKGNhdXNlOiBSZW1vdGVFcnJvckNhdXNlKTpzdHJpbmcgPT4ge1xuICAgIGlmICh0eXBlb2YgY2F1c2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBjYXVzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYCR7Y2F1c2UubWVzc2FnZX1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW90ZUVycm9yIGV4dGVuZHMgTWluaUlmcmFtZUVycm9yIHtcbiAgICAgICAgXG4gICAgY2F1c2U6IFJlbW90ZUVycm9yQ2F1c2U7XG5cbiAgICBjb25zdHJ1Y3RvcihjYXVzZTogUmVtb3RlRXJyb3JDYXVzZSkgeyAgICAgICAgXG4gICAgICAgIHN1cGVyKGNhdXNlVG9NZXNzYWdlKGNhdXNlKSk7XG4gICAgICAgIHRoaXMuY2F1c2UgPSAodHlwZW9mIGNhdXNlID09PSAnc3RyaW5nJykgPyBjYXVzZSA6IGVycm9yVG9KU09OKGNhdXNlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gUmVtb3RlRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZW1vdGVFcnJvciB9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcblxuZXhwb3J0IGNsYXNzIFNlbmRNZXNzYWdlRXJyb3IgZXh0ZW5kcyBSZW1vdGVFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvcjogUmVtb3RlRXJyb3IpIHtcbiAgICAgICAgc3VwZXIoZXJyb3IuY2F1c2UpOyAgICAgICAgXG4gICAgICAgIHRoaXMubmFtZSA9IFNlbmRNZXNzYWdlRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQge01pbmlJZnJhbWVFcnJvcn0gZnJvbSAnLi9taW5pLWlmcmFtZS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBUaW1lb3V0RXJyb3IgZXh0ZW5kcyBNaW5pSWZyYW1lRXJyb3Ige1xuXG4gICAgdGltZW91dE1pbGxpU2Vjb25kcyA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGFydGlhbDxUaW1lb3V0RXJyb3I+KSB7XG4gICAgICAgIHN1cGVyKGBUaW1lb3V0IGFmdGVyICR7c3RhdGUudGltZW91dE1pbGxpU2Vjb25kc30gbXMuYCwgc3RhdGUpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgLy8gc2VlOiB0eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9yZWxlYXNlLW5vdGVzL3R5cGVzY3JpcHQtMi0yLmh0bWxcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTsgLy8gcmVzdG9yZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgdGhpcy5uYW1lID0gVGltZW91dEVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICAgICAgICAgIFxuICAgIH1cbn0iLCJcbi8qIHRzbGludDpkaXNhYmxlIG5vLWFueSBuby11bnNhZmUtYW55ICovXG5cbmltcG9ydCB7ZGVzZXJpYWxpemVSZW1vdGVFcnJvciwgRXZhbHVhdGlvbkVycm9yLCBJbnZvY2F0aW9uRXJyb3IsIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IsIFJlbW90ZUVycm9yLCBTZW5kTWVzc2FnZUVycm9yLCBzZXJpYWxpemVSZW1vdGVFcnJvciwgVGltZW91dEVycm9yfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQge1Jlc3BvbnNlQ2FjaGV9IGZyb20gXCIuL3Jlc3BvbnNlLWNhY2hlXCI7XG5leHBvcnQge1Jlc3BvbnNlQ2FjaGV9OyAvLyBzbyB1bml0IHRlc3RzIGNhbiBhY2Nlc3MgUmVzcG9uc2VDYWNoZVxuXG5pbnRlcmZhY2UgUmVxdWVzdE1lc3NhZ2VCb2R5ICB7XG4gICAgY29udGVudHM6IFwicmVxdWVzdFwiO1xuICAgIGNhbGxJZDogc3RyaW5nO1xuICAgIHByb2NlZHVyZU5hbWU6IHN0cmluZztcbiAgICBhcmd1bWVudExpc3Q6IGFueVtdXG59XG5cbmludGVyZmFjZSBSZXN1bHRNZXNzYWdlQm9keSB7XG4gICAgY29udGVudHM6IFwicmVzdWx0XCI7XG4gICAgY2FsbElkOiBzdHJpbmc7ICAgIFxuICAgIHJlc3VsdDogYW55XG59XG5cbmludGVyZmFjZSBFcnJvck1lc3NhZ2VCb2R5IHtcbiAgICBjb250ZW50czogXCJlcnJvclwiO1xuICAgIGNhbGxJZDogc3RyaW5nO1xuICAgIGlzRXJyb3JJbnN0YW5jZTogYm9vbGVhbjtcbiAgICBlcnJvclZhbHVlOiBSZW1vdGVFcnJvcjtcbn1cblxudHlwZSBNZXNzYWdlQm9keSA9IFJlcXVlc3RNZXNzYWdlQm9keSB8IFJlc3VsdE1lc3NhZ2VCb2R5IHwgRXJyb3JNZXNzYWdlQm9keTtcblxuZXhwb3J0IGludGVyZmFjZSBJbnZvY2F0aW9uT3B0aW9ucyB7XG4gICAgdGltZW91dDogbnVtYmVyO1xuICAgIHJldHJ5TGltaXQ6IG51bWJlcjtcbn1cblxudHlwZSBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tUeXBlID0gJ29uVW5leHBlY3RlZFJlc3BvbnNlJyB8ICdvblJlY2VpdmUnIHwgJ29uU2VuZCcgfCAnb25SZWdpc3RlcicgfCAnb25DbG9zZScgfCAnb25SZXF1ZXN0UmV0cnknO1xuXG4vLyBPcHRpb25hbCBjYWxsYmFja3MgZm9yIGludGVybmFsIGV2ZW50cyB1c2VmdWwgZm9yIGRlYnVnZ2luZyBhbmQgdGVzdGluZ1xuZXhwb3J0IHR5cGUgSW50ZXJuYWxFdmVudENhbGxiYWNrcyA9IHtcbiAgICBba2V5IGluIEludGVybmFsRXZlbnRDYWxsYmFja1R5cGVdOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEluaXRQYXJhbWV0ZXJzIHtcbiAgICB3aW5kb3dSZWY6IFdpbmRvdztcbiAgICBvcmlnaW5XaGl0ZWxpc3Q6IHN0cmluZ1tdO1xuICAgIGRlZmF1bHRJbnZvY2F0aW9uT3B0aW9uczogSW52b2NhdGlvbk9wdGlvbnM7XG4gICAgZXZlbnRDYWxsYmFja3M6IFBhcnRpYWw8SW50ZXJuYWxFdmVudENhbGxiYWNrcz47XG59XG5cbmludGVyZmFjZSBDYWxsYmFja0Z1bmN0aW9ucyB7XG4gICAgcmVzb2x2ZTogKHJlc3VsdD86IGFueSkgPT4gdm9pZCxcbiAgICByZWplY3Q6IChlcnJvcj86IGFueSkgPT4gdm9pZFxufVxuXG50eXBlIFByb2NlZHVyZUltcGxlbWVudGF0aW9uID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk7XG5cbmNvbnN0IFJQQ19NRVNTQUdFX1RZUEUgPSBcIm1pbmktaWZyYW1lLXJwY1wiO1xuY29uc3QgUkFORE9NX0JBU0UgPSAzNjtcbmNvbnN0IENBTExJRF9MRU5HVEggPSA4O1xuY29uc3QgREVGQVVMVF9JTlZPQ0FUSU9OX09QVElPTlM6SW52b2NhdGlvbk9wdGlvbnMgPSB7XG4gICAgdGltZW91dDogMjAwLFxuICAgIHJldHJ5TGltaXQ6IDBcbn1cblxuZXhwb3J0IGNsYXNzIE1pbmlJZnJhbWVSUEMge1xuICAgIHByaXZhdGUgY29uZmlnOiBJbml0UGFyYW1ldGVycztcbiAgICBwcml2YXRlIGNhbGxiYWNrczoge1trZXk6c3RyaW5nXTpDYWxsYmFja0Z1bmN0aW9uc30gPSB7fTtcbiAgICBwcml2YXRlIHJlZ2lzdGVyZWRQcm9jZWR1cmVzOntba2V5OnN0cmluZ106IFByb2NlZHVyZUltcGxlbWVudGF0aW9ufSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoaW5pdFBhcmFtZXRlcnM/OiBJbml0UGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIHdpbmRvd1JlZjogaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMud2luZG93UmVmIHx8IHdpbmRvdyxcbiAgICAgICAgICAgIG9yaWdpbldoaXRlbGlzdDogaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMub3JpZ2luV2hpdGVsaXN0IHx8IFtdLFxuICAgICAgICAgICAgZGVmYXVsdEludm9jYXRpb25PcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0lOVk9DQVRJT05fT1BUSU9OUywgaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMuZGVmYXVsdEludm9jYXRpb25PcHRpb25zIHx8IHt9KSxcbiAgICAgICAgICAgIGV2ZW50Q2FsbGJhY2tzOiBpbml0UGFyYW1ldGVycyAmJiBpbml0UGFyYW1ldGVycy5ldmVudENhbGxiYWNrcyB8fCB7fVxuICAgICAgICB9O1xuICAgICAgICAvLyBhdHRhY2ggbGlzdGVuZXJcbiAgICAgICAgdGhpcy5jb25maWcud2luZG93UmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMucmVjdik7XG4gICAgfSAgICAgICAgXG5cbiAgICByZWdpc3Rlcihwcm9jZWR1cmVOYW1lOiBzdHJpbmcsIGltcGxlbWVudGF0aW9uPzogUHJvY2VkdXJlSW1wbGVtZW50YXRpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblJlZ2lzdGVyXCIsIHByb2NlZHVyZU5hbWUsIGltcGxlbWVudGF0aW9uKVxuICAgICAgICBpZiAoaW1wbGVtZW50YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlTmFtZV0gPSBpbXBsZW1lbnRhdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzW3Byb2NlZHVyZU5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW52b2tlICh0YXJnZXRXaW5kb3c6IFdpbmRvdywgdGFyZ2V0T3JpZ2luOiBzdHJpbmcgfCBudWxsLCBwcm9jZWR1cmVOYW1lOiBzdHJpbmcsIGFyZ3VtZW50TGlzdD86IGFueVtdLCBpbnZvY2F0aW9uT3B0aW9ucz86IEludm9jYXRpb25PcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLmRlZmF1bHRJbnZvY2F0aW9uT3B0aW9ucywgaW52b2NhdGlvbk9wdGlvbnMgfHzCoHt9KTtcbiAgICAgICAgY29uc3QgY2FsbElkID0gdGhpcy5nZXROZXh0Q2FsbElkKCk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RNZXNzYWdlQm9keTogUmVxdWVzdE1lc3NhZ2VCb2R5ID0ge1xuICAgICAgICAgICAgY29udGVudHM6IFwicmVxdWVzdFwiLFxuICAgICAgICAgICAgY2FsbElkLFxuICAgICAgICAgICAgcHJvY2VkdXJlTmFtZSxcbiAgICAgICAgICAgIGFyZ3VtZW50TGlzdDogKGFyZ3VtZW50TGlzdCB8fCBbXSl9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RXaXRoUmV0cnkodGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4sIHJlcXVlc3RNZXNzYWdlQm9keSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25DbG9zZVwiKTtcbiAgICAgICAgdGhpcy5jb25maWcud2luZG93UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMucmVjdik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXF1ZXN0V2l0aFJldHJ5KHRhcmdldFdpbmRvdzogV2luZG93LCB0YXJnZXRPcmlnaW46IHN0cmluZyB8IG51bGwsIHJlcXVlc3RNZXNzYWdlQm9keTpSZXF1ZXN0TWVzc2FnZUJvZHksIG9wdGlvbnM6IEludm9jYXRpb25PcHRpb25zKTpQcm9taXNlPGFueT4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlcXVlc3RDb3VudCA9IDA7XG4gICAgICAgIGxldCBmYWlsdXJlQ291bnQgPSAwOyAgICAgICAgXG4gICAgICAgIGxldCBmaW5hbFJlc29sdmU6KHJlc3VsdD86IGFueSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcbiAgICAgICAgbGV0IGZpbmFsUmVqZWN0OihlcnJvcj86IGFueSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcbiAgICAgICAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBwcmV2aW91c1JlamVjdFJlYXNvbnM6YW55W10gPSBbXTsgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgaXNFcnJvclJldHJpYWJsZSA9IChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0IDw9IDAgfHwgb3B0aW9ucy5yZXRyeUxpbWl0IDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG1ha2VSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZSh0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgcmVxdWVzdE1lc3NhZ2VCb2R5KTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrc1tyZXF1ZXN0TWVzc2FnZUJvZHkuY2FsbElkXSA9IHsgcmVzb2x2ZSwgcmVqZWN0IH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc29sdmUgPSAocmVzdWx0PzogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBmaXJzdCBzdWNjZXNzZnVsIHJlcXVlc3QgaW1tZWRpYXRlbHkgcmVzb2x2ZXMgdGhlIGludm9jYXRpb24gcHJvbWlzZVxuICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZpbmFsUmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlUmVqZWN0ID0gKHJlYXNvbj86IGFueSkgPT4ge1xuICAgICAgICAgICAgZmFpbHVyZUNvdW50ICs9IDE7XG4gICAgICAgICAgICAvLyBJZiByZXF1ZXN0IGhhcyBzaW5jZSBiZWVuIGNvbXBsZXRlZCwgZG8gbm90aGluZ1xuICAgICAgICAgICAgLy8gUmV0cnkgcmVxdWVzdCBvciBmYWlsIHBlcm1hbmVudGx5IGlmIG5vIG91dHN0YW5kaW5nIHJlcXVlc3RzIHN0aWxsIGluIGZsaWdodFxuICAgICAgICAgICAgaWYgKCFjb21wbGV0ZWQgJiYgZmFpbHVyZUNvdW50ID09PSByZXF1ZXN0Q291bnQpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpc0Vycm9yUmV0cmlhYmxlKHJlYXNvbikgJiYgcmVxdWVzdENvdW50IDwgKG9wdGlvbnMucmV0cnlMaW1pdCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25SZXF1ZXN0UmV0cnlcIiwgcmVhc29uLCBwcmV2aW91c1JlamVjdFJlYXNvbnMsIHJlcXVlc3RNZXNzYWdlQm9keSk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVqZWN0UmVhc29ucy5wdXNoKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgICAgIG1ha2VBdHRlbXB0KCk7XG4gICAgICAgICAgICAgICAgLy8gSWYgZXJyb3IgaXMgbm9uLXJldHJpYWJsZSBhbmQgdGhlcmUgYXJlIG5vIHVuYW5zd2VyZWQgcmVxdWVzdHMsIGdpdmUgdXAuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxSZWplY3QobmV3IEludm9jYXRpb25FcnJvcihyZXF1ZXN0TWVzc2FnZUJvZHkucHJvY2VkdXJlTmFtZSwgcmVhc29uLCBwcmV2aW91c1JlamVjdFJlYXNvbnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBhcmUgc3RpbGwgb3V0c3RhbmRpbmcgcmVxdWVzdHMsIHdhaXQgZm9yIHRoZW0gdG8gc3VjY2VlZCBvciBmYWlsLlxuICAgICAgICAgICAgLy8gVE9ETzogY2FsbCBpbnRlcm5hbCBldmVudENhbGxiYWNrXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWFrZUF0dGVtcHQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0Q291bnQgKz0gMTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZVByb21pc2UgPSBtYWtlUmVxdWVzdCgpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudGltZW91dCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVByb21pc2UgPSB0aGlzLnRpbWVib3hQcm9taXNlKHJlc3BvbnNlUHJvbWlzZSwgb3B0aW9ucy50aW1lb3V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlUHJvbWlzZS50aGVuKGhhbmRsZVJlc29sdmUsIGhhbmRsZVJlamVjdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmaW5hbFJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgZmluYWxSZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpbml0aWFsIGF0dGVtcHRcbiAgICAgICAgbWFrZUF0dGVtcHQoKTtcblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnRlcm5hbEV2ZW50Q2FsbGJhY2soaW50ZXJuYWxFdmVudENhbGxiYWNrOiBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tUeXBlLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBjYiA9IHRoaXMuY29uZmlnLmV2ZW50Q2FsbGJhY2tzW2ludGVybmFsRXZlbnRDYWxsYmFja107XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgY2IuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRpbWVib3hQcm9taXNlKG9yaWdpbmFsUHJvbWlzZTogUHJvbWlzZTxhbnk+LCB0aW1lb3V0TWlsbGlTZWNvbmRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIG9yaWdpbmFsUHJvbWlzZSxcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcud2luZG93UmVmLnNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHJlamVjdChuZXcgVGltZW91dEVycm9yKHt0aW1lb3V0TWlsbGlTZWNvbmRzfSkpLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0TWlsbGlTZWNvbmRzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pO1xuICAgIH0gICBcblxuICAgIHByaXZhdGUgZ2V0TmV4dENhbGxJZCAoKSB7XG4gICAgICAgIGxldCByYW5kb21JZCA6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICB3aGlsZSghcmFuZG9tSWQgfHwgdGhpcy5jYWxsYmFja3NbcmFuZG9tSWRdKSB7XG4gICAgICAgICAgICByYW5kb21JZCA9IGBjYiR7TWF0aC5yYW5kb20oKS50b1N0cmluZyhSQU5ET01fQkFTRSkucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIENBTExJRF9MRU5HVEgpfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmFuZG9tSWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kTWVzc2FnZSAodGFyZ2V0V2luZG93OiBXaW5kb3csIHRhcmdldE9yaWdpbjogc3RyaW5nIHwgbnVsbCwgbWVzc2FnZUJvZHk6IE1lc3NhZ2VCb2R5KSA6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsTWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFJQQ19NRVNTQUdFX1RZUEUsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBtZXNzYWdlQm9keVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblNlbmRcIiwgdGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4sIGZ1bGxNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2UoZnVsbE1lc3NhZ2UsIHRhcmdldE9yaWdpbiB8fCBcIipcIik7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSAgICAgXG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVJlcXVlc3QgKG1lc3NhZ2VCb2R5OiBSZXF1ZXN0TWVzc2FnZUJvZHksIG1lc3NhZ2VTb3VyY2U6IFdpbmRvdywgbWVzc2FnZU9yaWdpbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNhbGxJZCA9IG1lc3NhZ2VCb2R5LmNhbGxJZDtcbiAgICAgICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IG1lc3NhZ2VCb2R5LnByb2NlZHVyZU5hbWU7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50TGlzdCA9IG1lc3NhZ2VCb2R5LmFyZ3VtZW50TGlzdDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VPcmlnaW4gPSAhbWVzc2FnZU9yaWdpbiB8fCBtZXNzYWdlT3JpZ2luID09PSBcIm51bGxcIiA/IG51bGwgOiBtZXNzYWdlT3JpZ2luO1xuICAgICAgICBjb25zdCBzZW5kRXJyb3IgPSAocmVqZWN0T3JFcnJvcjogYW55LCBleGNlcHRpb25OYW1lPzpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzRXJyb3IgPSByZWplY3RPckVycm9yIGluc3RhbmNlb2YgRXJyb3I7XG4gICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VTb3VyY2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPcmlnaW4sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50czogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICBjYWxsSWQsXG4gICAgICAgICAgICAgICAgICAgIGlzRXJyb3JJbnN0YW5jZTogaXNFcnJvciwgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBlcnJvclZhbHVlOiBpc0Vycm9yID8gc2VyaWFsaXplUmVtb3RlRXJyb3IocmVqZWN0T3JFcnJvciwgZXhjZXB0aW9uTmFtZSkgOiByZWplY3RPckVycm9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzW3Byb2NlZHVyZU5hbWVdKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlTmFtZV0uYXBwbHkoXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZUJvZHksIG1lc3NhZ2VTb3VyY2UsIG1lc3NhZ2VPcmlnaW59LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRMaXN0KSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPT4gdGhpcy5zZW5kTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VPcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzOiBcInJlc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRFcnJvcihlcnJvciwgU2VuZE1lc3NhZ2VFcnJvci5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW5kICdlcnJvcicgdHlwZSBtZXNzYWdlIHdpdGggcmVqZWN0aW9uIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZEVycm9yKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbmRFcnJvcihleCwgRXZhbHVhdGlvbkVycm9yLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRFcnJvcihuZXcgUHJvY2VkdXJlTm90Rm91bmRFcnJvcih7cHJvY2VkdXJlTmFtZX0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2U6IE1lc3NhZ2VCb2R5KSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrRnVuY3Rpb25zID0gdGhpcy5jYWxsYmFja3NbcmVzcG9uc2UuY2FsbElkXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrRnVuY3Rpb25zKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jYWxsYmFja3NbcmVzcG9uc2UuY2FsbElkXTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50cyA9PT0gXCJyZXN1bHRcIikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb25zLnJlc29sdmUocmVzcG9uc2UucmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuY29udGVudHMgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yT2JqZWN0ID0gcmVzcG9uc2UuaXNFcnJvckluc3RhbmNlID8gZGVzZXJpYWxpemVSZW1vdGVFcnJvcihyZXNwb25zZS5lcnJvclZhbHVlKSA6IHJlc3BvbnNlLmVycm9yVmFsdWU7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbnMucmVqZWN0KGVycm9yT2JqZWN0KTtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblVuZXhwZWN0ZWRSZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgIH0gICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlY3YgPSAobWVzc2FnZUV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCh0aGlzLmNvbmZpZy5vcmlnaW5XaGl0ZWxpc3QubGVuZ3RoIDwgMSB8fCB0aGlzLmNvbmZpZy5vcmlnaW5XaGl0ZWxpc3QuaW5kZXhPZihtZXNzYWdlRXZlbnQub3JpZ2luKSA+IC0xKSAmJlxuICAgICAgICAgICAgbWVzc2FnZUV2ZW50LmRhdGEgJiYgbWVzc2FnZUV2ZW50LmRhdGEudHlwZSA9PT0gUlBDX01FU1NBR0VfVFlQRSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblJlY2VpdmVcIiwgbWVzc2FnZUV2ZW50KTsgICAgXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlQm9keSA6IE1lc3NhZ2VCb2R5ID0gbWVzc2FnZUV2ZW50LmRhdGEubWVzc2FnZSBhcyBNZXNzYWdlQm9keTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlQm9keS5jb250ZW50cyA9PT0gXCJyZXF1ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXF1ZXN0KG1lc3NhZ2VCb2R5LCBtZXNzYWdlRXZlbnQuc291cmNlIGFzIFdpbmRvdywgbWVzc2FnZUV2ZW50Lm9yaWdpbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlc3BvbnNlKG1lc3NhZ2VCb2R5KTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxufSAvLyBlbmQgb2YgY2xhc3NcbiIsImV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VDYWNoZVBhcmFtZXRlcnMge1xuICAgIHNpemU6IG51bWJlcjtcbn07XG5cbmNvbnN0IERFRkFVTFRfUEFSQU1FVEVSUyA9IHtcbiAgICBzaXplOiAxMDBcbn07XG5cbmV4cG9ydCBjbGFzcyBSZXNwb25zZUNhY2hlIHtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICByZXNwb25zZXM6IHtba2V5OnN0cmluZ106YW55fSA9IHt9O1xuICAgIHBhcmFtZXRlcnM6IFJlc3BvbnNlQ2FjaGVQYXJhbWV0ZXJzO1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycz86IFBhcnRpYWw8UmVzcG9uc2VDYWNoZVBhcmFtZXRlcnM+KSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfUEFSQU1FVEVSUywgcGFyYW1ldGVycyB8fCB7fSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=