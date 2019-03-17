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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvZXZhbHVhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL2luZGV4LnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvaW52b2NhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL21pbmktaWZyYW1lLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvcHJvY2VkdXJlLW5vdC1mb3VuZC1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL3JlbW90ZS1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL3NlbmQtbWVzc2FnZS1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL3RpbWVvdXQtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL21pbmktaWZyYW1lLXJwYy50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvcmVzdWx0LWNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0FBQyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRU8scUNBQWUsR0FBdkI7UUFDSSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUN0RSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRyxDQUFDO1lBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDaEQ7U0FDSjtJQUNMLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMiLCJmaWxlIjoibWluaS1pZnJhbWUtcnBjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJtaW5pLWlmcmFtZS1ycGNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWluaS1pZnJhbWUtcnBjXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbmktaWZyYW1lLXJwY1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9taW5pLWlmcmFtZS1ycGMudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IFJlbW90ZUVycm9yIH0gZnJvbSAnLi9yZW1vdGUtZXJyb3InO1xuXG5leHBvcnQgY2xhc3MgRXZhbHVhdGlvbkVycm9yIGV4dGVuZHMgUmVtb3RlRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3I6IFJlbW90ZUVycm9yKSB7XG4gICAgICAgIHN1cGVyKGVycm9yLmNhdXNlKTtcbiAgICAgICAgLy8gc2VlOiB0eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9yZWxlYXNlLW5vdGVzL3R5cGVzY3JpcHQtMi0yLmh0bWxcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTsgLy8gcmVzdG9yZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgdGhpcy5uYW1lID0gRXZhbHVhdGlvbkVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHtFdmFsdWF0aW9uRXJyb3J9IGZyb20gJy4vZXZhbHVhdGlvbi1lcnJvcic7XG5pbXBvcnQge0ludm9jYXRpb25FcnJvcn0gZnJvbSAnLi9pbnZvY2F0aW9uLWVycm9yJztcbmltcG9ydCB7TWluaUlmcmFtZUVycm9yfSBmcm9tICcuL21pbmktaWZyYW1lLWVycm9yJztcbmltcG9ydCB7UHJvY2VkdXJlTm90Rm91bmRFcnJvcn0gZnJvbSAnLi9wcm9jZWR1cmUtbm90LWZvdW5kLWVycm9yJztcbmltcG9ydCB7ZXJyb3JUb0pTT04sIFJlbW90ZUVycm9yLCBSZW1vdGVFcnJvckNhdXNlfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5pbXBvcnQge1NlbmRNZXNzYWdlRXJyb3J9IGZyb20gJy4vc2VuZC1tZXNzYWdlLWVycm9yJztcbmltcG9ydCB7VGltZW91dEVycm9yfSBmcm9tICcuL3RpbWVvdXQtZXJyb3InO1xuXG5leHBvcnQge01pbmlJZnJhbWVFcnJvciwgUHJvY2VkdXJlTm90Rm91bmRFcnJvciwgRXZhbHVhdGlvbkVycm9yLCBUaW1lb3V0RXJyb3IsIFNlbmRNZXNzYWdlRXJyb3IsIFJlbW90ZUVycm9yLCBJbnZvY2F0aW9uRXJyb3J9O1xuXG50eXBlIFJlbW90ZUVycm9yQ29uc3RydWN0b3IgPSBuZXcgKHN0YXRlOiBQYXJ0aWFsPFJlbW90ZUVycm9yPikgPT4gUmVtb3RlRXJyb3I7XG5cbnR5cGUgRVJST1JfTUFQID0ge1xuICAgIFtrZXk6IHN0cmluZ106IFJlbW90ZUVycm9yQ29uc3RydWN0b3Jcbn1cblxuY29uc3QgcmVtb3RlRXJyb3JDbGFzc2VzID0gKFtcbiAgICBQcm9jZWR1cmVOb3RGb3VuZEVycm9yLFxuICAgIEV2YWx1YXRpb25FcnJvcixcbiAgICBTZW5kTWVzc2FnZUVycm9yXG4gICAgXSBhcyBSZW1vdGVFcnJvckNvbnN0cnVjdG9yW10pLnJlZHVjZShcbiAgICAob2JqOkVSUk9SX01BUCwgY29uc3RyOlJlbW90ZUVycm9yQ29uc3RydWN0b3IpID0+IHtcbiAgICAgICAgb2JqW2NvbnN0ci5uYW1lXSA9IGNvbnN0cjtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sIHt9IGFzIEVSUk9SX01BUCkgYXMgRVJST1JfTUFQOyAgICBcblxuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZVJlbW90ZUVycm9yID0gKGNhdXNlOiBSZW1vdGVFcnJvckNhdXNlLCByZW1vdGVFeGNlcHRpb25OYW1lPzogc3RyaW5nKTpSZW1vdGVFcnJvciA9PiB7ICAgIFxuICAgIFxuICAgIGNvbnN0IGNvbnZlcnQgPSAoZXJyOiBSZW1vdGVFcnJvcik6UmVtb3RlRXJyb3IgPT4ge1xuICAgICAgICBjb25zdCBlcnJKU09OOlJlbW90ZUVycm9yID0gZXJyb3JUb0pTT04oZXJyKTsgICAgICAgIFxuICAgICAgICBpZiAocmVtb3RlRXhjZXB0aW9uTmFtZSkge1xuICAgICAgICAgICAgZXJySlNPTi5uYW1lID0gcmVtb3RlRXhjZXB0aW9uTmFtZTtcbiAgICAgICAgfSAgICAgXG5cbiAgICAgICAgcmV0dXJuIGVyckpTT047XG4gICAgfVxuICAgIGlmIChjYXVzZSBpbnN0YW5jZW9mIFJlbW90ZUVycm9yKSB7XG4gICAgICAgIC8vIGlmIGNhdXNlIGlzIGFscmVhZHkgYSByZW1vdGVFcnJvciwgcmV0dXJuIGFzIGlzXG4gICAgICAgIHJldHVybiBjb252ZXJ0KGNhdXNlKTtcbiAgICB9ICAgIFxuICAgIC8vIGZvciBib3RoIEVycm9yIGFuZCBTdHJpbmcgdHlwZSBjYXVzZXMsIGNyZWF0ZSBhIG5ldyBSZW1vdGVFcnJvciBcblxuICAgIHJldHVybiBjb252ZXJ0KG5ldyBSZW1vdGVFcnJvcihjYXVzZSkpOyAgICBcbn07ICAgXG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBjb25zdCBkZXNlcmlhbGl6ZVJlbW90ZUVycm9yID0gKGVycm9yOlJlbW90ZUVycm9yKSA9PiB7XG4gICAgY29uc3QgY29uc3RyID0gcmVtb3RlRXJyb3JDbGFzc2VzW2Vycm9yLm5hbWVdIHx8IFJlbW90ZUVycm9yO1xuXG4gICAgcmV0dXJuIG5ldyBjb25zdHIoZXJyb3IpO1xufTsiLCJpbXBvcnQge01pbmlJZnJhbWVFcnJvcn0gZnJvbSAnLi9taW5pLWlmcmFtZS1lcnJvcic7XG5pbXBvcnQge2Vycm9yVG9KU09OfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmNvbnN0IG1ha2VNZXNzYWdlID0gKHByb2NlZHVyZU5hbWU6IHN0cmluZywgY2F1c2U/OiBhbnksIHByZXZpb3VzUmVqZWN0UmVhc29ucz86IGFueVtdKTpzdHJpbmcgPT4ge1xuICAgIGxldCBtZXNzYWdlID0gYEVycm9yIGludm9raW5nIHJlbW90ZSBwcm9jZWR1cmUgJyR7cHJvY2VkdXJlTmFtZX0nLmA7XG4gICAgaWYgKGNhdXNlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc3QgZXJyID0gY2F1c2UgYXMgRXJyb3I7XG4gICAgICAgIG1lc3NhZ2UgKz0gYCAke2Vyci5uYW1lfTogJHtlcnIubWVzc2FnZX0uYDtcbiAgICB9IGVsc2UgaWYgKGNhdXNlKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gYCBSZWFzb246ICR7Y2F1c2UudG9TdHJpbmcoKX0uYDtcbiAgICB9XG4gICAgaWYgKHByZXZpb3VzUmVqZWN0UmVhc29ucyAmJiBwcmV2aW91c1JlamVjdFJlYXNvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBwbHVyYWwgPSBwcmV2aW91c1JlamVjdFJlYXNvbnMubGVuZ3RoID4gMSA/ICdzJyA6ICcnO1xuICAgICAgICBtZXNzYWdlICs9IGAgJHtwcmV2aW91c1JlamVjdFJlYXNvbnMubGVuZ3RofSBhZGRpdGlvbmFsIHJlamVjdGlvbiR7cGx1cmFsfSBmcm9tIHJldHJpZWQgYXR0ZW1wdCR7cGx1cmFsfS5gO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xufTtcblxuZXhwb3J0IGNsYXNzIEludm9jYXRpb25FcnJvciBleHRlbmRzIE1pbmlJZnJhbWVFcnJvciB7XG5cbiAgICBwcm9jZWR1cmVOYW1lOiBzdHJpbmc7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGNhdXNlPzogYW55O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBwcmV2aW91c1JlamVjdFJlYXNvbnM/OiBhbnlbXTtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjb25zdHJ1Y3Rvcihwcm9jZWR1cmVOYW1lOiBzdHJpbmcsIGNhdXNlPzogYW55LCBwcmV2aW91c1JlamVjdFJlYXNvbnM/OiBhbnlbXSkge1xuICAgICAgICBzdXBlcihtYWtlTWVzc2FnZShwcm9jZWR1cmVOYW1lLCBjYXVzZSwgcHJldmlvdXNSZWplY3RSZWFzb25zKSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBJbnZvY2F0aW9uRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgIFxuICAgICAgICB0aGlzLnByb2NlZHVyZU5hbWUgPSBwcm9jZWR1cmVOYW1lO1xuICAgICAgICB0aGlzLmNhdXNlID0gY2F1c2U7XG4gICAgICAgIHRoaXMucHJldmlvdXNSZWplY3RSZWFzb25zID0gcHJldmlvdXNSZWplY3RSZWFzb25zOyAgICAgICAgICAgICAgXG4gICAgfSAgICBcbn0iLCJleHBvcnQgY2xhc3MgTWluaUlmcmFtZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXG4gICAgdGltZXN0YW1wOm51bWJlcjtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nLCBzdGF0ZT86IGFueSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSDCoCsobmV3IERhdGUoKSk7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2VlOiB0eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9yZWxlYXNlLW5vdGVzL3R5cGVzY3JpcHQtMi0yLmh0bWxcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTsgLy8gcmVzdG9yZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgdGhpcy5uYW1lID0gTWluaUlmcmFtZUVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgXG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZW1vdGVFcnJvciB9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcblxuZXhwb3J0IGNsYXNzIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBSZW1vdGVFcnJvciB7XG5cbiAgICBwcm9jZWR1cmVOYW1lID0gXCJ1bmtub3duXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGFydGlhbDxQcm9jZWR1cmVOb3RGb3VuZEVycm9yPikge1xuICAgICAgICBzdXBlcihgUmVtb3RlIHByb2NlZHVyZSAnJHtzdGF0ZS5wcm9jZWR1cmVOYW1lfScgbm90IHJlZ2lzdGVyZWQgaW4gcmVtb3RlIFJQQyBpbnN0YW5jZS5gKTtcbiAgICAgICAgaWYgKHN0YXRlLnByb2NlZHVyZU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2VkdXJlTmFtZSA9IHN0YXRlLnByb2NlZHVyZU5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2VlOiB0eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9yZWxlYXNlLW5vdGVzL3R5cGVzY3JpcHQtMi0yLmh0bWxcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTsgLy8gcmVzdG9yZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgdGhpcy5uYW1lID0gUHJvY2VkdXJlTm90Rm91bmRFcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7TWluaUlmcmFtZUVycm9yfSBmcm9tICcuL21pbmktaWZyYW1lLWVycm9yJztcblxuZXhwb3J0IHR5cGUgUmVtb3RlRXJyb3JDYXVzZSA9IEVycm9yIHwgc3RyaW5nO1xuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JUb0pTT048VCBleHRlbmRzIEVycm9yPiAoZXJyOiBUKTpUIHtcbiAgICAvLyBtZXNzYWdlLCBuYW1lLCBzdGFjayBhcmUgbm90IGVubnVtZXJhYmxlLCBzbyB3ZSBtdXN0IGV4cGxpY2l0bHkgZ2V0IHRoZW0uXG4gICAgY29uc3Qge21lc3NhZ2UsIG5hbWUsIHN0YWNrfSA9IGVycjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHttZXNzYWdlLCBzdGFjaywgbmFtZX0sIGVycik7XG59XG5cbmNvbnN0IGNhdXNlVG9NZXNzYWdlID0gKGNhdXNlOiBSZW1vdGVFcnJvckNhdXNlKTpzdHJpbmcgPT4ge1xuICAgIGlmICh0eXBlb2YgY2F1c2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBjYXVzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYCR7Y2F1c2UubWVzc2FnZX1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW90ZUVycm9yIGV4dGVuZHMgTWluaUlmcmFtZUVycm9yIHtcbiAgICAgICAgXG4gICAgY2F1c2U6IFJlbW90ZUVycm9yQ2F1c2U7XG5cbiAgICBjb25zdHJ1Y3RvcihjYXVzZTogUmVtb3RlRXJyb3JDYXVzZSkgeyAgICAgICAgXG4gICAgICAgIHN1cGVyKGNhdXNlVG9NZXNzYWdlKGNhdXNlKSk7XG4gICAgICAgIHRoaXMuY2F1c2UgPSAodHlwZW9mIGNhdXNlID09PSAnc3RyaW5nJykgPyBjYXVzZSA6IGVycm9yVG9KU09OKGNhdXNlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gUmVtb3RlRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZW1vdGVFcnJvciB9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcblxuZXhwb3J0IGNsYXNzIFNlbmRNZXNzYWdlRXJyb3IgZXh0ZW5kcyBSZW1vdGVFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvcjogUmVtb3RlRXJyb3IpIHtcbiAgICAgICAgc3VwZXIoZXJyb3IuY2F1c2UpOyAgICAgICAgXG4gICAgICAgIHRoaXMubmFtZSA9IFNlbmRNZXNzYWdlRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQge01pbmlJZnJhbWVFcnJvcn0gZnJvbSAnLi9taW5pLWlmcmFtZS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBUaW1lb3V0RXJyb3IgZXh0ZW5kcyBNaW5pSWZyYW1lRXJyb3Ige1xuXG4gICAgdGltZW91dE1pbGxpU2Vjb25kcyA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGFydGlhbDxUaW1lb3V0RXJyb3I+KSB7XG4gICAgICAgIHN1cGVyKGBUaW1lb3V0IGFmdGVyICR7c3RhdGUudGltZW91dE1pbGxpU2Vjb25kc30gbXMuYCwgc3RhdGUpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgLy8gc2VlOiB0eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9yZWxlYXNlLW5vdGVzL3R5cGVzY3JpcHQtMi0yLmh0bWxcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTsgLy8gcmVzdG9yZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgdGhpcy5uYW1lID0gVGltZW91dEVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICAgICAgICAgIFxuICAgIH1cbn0iLCJcbi8qIHRzbGludDpkaXNhYmxlIG5vLWFueSBuby11bnNhZmUtYW55ICovXG5cbmltcG9ydCB7ZGVzZXJpYWxpemVSZW1vdGVFcnJvciwgRXZhbHVhdGlvbkVycm9yLCBJbnZvY2F0aW9uRXJyb3IsIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IsIFJlbW90ZUVycm9yLCBTZW5kTWVzc2FnZUVycm9yLCBzZXJpYWxpemVSZW1vdGVFcnJvciwgVGltZW91dEVycm9yfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQge0RFRkFVTFRfUkVTVUxUX0NBQ0hFX0NBUEFDSVRZLCBSZXN1bHRDYWNoZX0gZnJvbSBcIi4vcmVzdWx0LWNhY2hlXCI7XG5leHBvcnQge1Jlc3VsdENhY2hlfTsgLy8gc28gdW5pdCB0ZXN0cyBjYW4gYWNjZXNzIFJlc3BvbnNlQ2FjaGVcblxuaW50ZXJmYWNlIFJlcXVlc3RNZXNzYWdlQm9keSAge1xuICAgIGNvbnRlbnRzOiBcInJlcXVlc3RcIjtcbiAgICBjYWxsSWQ6IHN0cmluZztcbiAgICBwcm9jZWR1cmVOYW1lOiBzdHJpbmc7XG4gICAgYXJndW1lbnRMaXN0OiBhbnlbXVxufVxuXG5pbnRlcmZhY2UgUmVzdWx0TWVzc2FnZUJvZHkge1xuICAgIGNvbnRlbnRzOiBcInJlc3VsdFwiO1xuICAgIGNhbGxJZDogc3RyaW5nOyAgICBcbiAgICByZXN1bHQ6IGFueVxufVxuXG5pbnRlcmZhY2UgRXJyb3JNZXNzYWdlQm9keSB7XG4gICAgY29udGVudHM6IFwiZXJyb3JcIjtcbiAgICBjYWxsSWQ6IHN0cmluZztcbiAgICBpc0Vycm9ySW5zdGFuY2U6IGJvb2xlYW47XG4gICAgZXJyb3JWYWx1ZTogUmVtb3RlRXJyb3I7XG59XG5cbnR5cGUgTWVzc2FnZUJvZHkgPSBSZXF1ZXN0TWVzc2FnZUJvZHkgfCBSZXN1bHRNZXNzYWdlQm9keSB8IEVycm9yTWVzc2FnZUJvZHk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW52b2NhdGlvbk9wdGlvbnMge1xuICAgIHRpbWVvdXQ6IG51bWJlcjtcbiAgICByZXRyeUxpbWl0OiBudW1iZXI7XG4gICAgcmV0cnlBbGxGYWlsdXJlcyA6IGJvb2xlYW47XG59XG5cbnR5cGUgSW50ZXJuYWxFdmVudENhbGxiYWNrVHlwZSA9ICdvblVuZXhwZWN0ZWRSZXNwb25zZScgfCAnb25SZWNlaXZlJyB8ICdvblNlbmQnIHwgJ29uUmVnaXN0ZXInIHwgJ29uQ2xvc2UnIHwgJ29uUmVxdWVzdFJldHJ5JyB8ICdvblJlc3VsdENhY2hlRXZpY3Rpb24nO1xuXG4vLyBPcHRpb25hbCBjYWxsYmFja3MgZm9yIGludGVybmFsIGV2ZW50cyB1c2VmdWwgZm9yIGRlYnVnZ2luZyBhbmQgdGVzdGluZ1xuZXhwb3J0IHR5cGUgSW50ZXJuYWxFdmVudENhbGxiYWNrcyA9IHtcbiAgICBba2V5IGluIEludGVybmFsRXZlbnRDYWxsYmFja1R5cGVdOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEluaXRQYXJhbWV0ZXJzIHtcbiAgICB3aW5kb3dSZWY6IFdpbmRvdztcbiAgICBvcmlnaW5XaGl0ZWxpc3Q6IHN0cmluZ1tdO1xuICAgIGRlZmF1bHRJbnZvY2F0aW9uT3B0aW9uczogSW52b2NhdGlvbk9wdGlvbnM7XG4gICAgZXZlbnRDYWxsYmFja3M6IFBhcnRpYWw8SW50ZXJuYWxFdmVudENhbGxiYWNrcz47XG4gICAgcmVzdWx0Q2FjaGVDYXBhY2l0eTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2FsbGJhY2tGdW5jdGlvbnMge1xuICAgIHJlc29sdmU6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQsXG4gICAgcmVqZWN0OiAoZXJyb3I/OiBhbnkpID0+IHZvaWRcbn1cblxudHlwZSBQcm9jZWR1cmVJbXBsZW1lbnRhdGlvbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55O1xuXG50eXBlIFByb2NlZHVyZUludm9jYXRpb25Db250ZXh0ID0ge3JlcXVlc3RNZXNzYWdlQm9keTogUmVxdWVzdE1lc3NhZ2VCb2R5LCBtZXNzYWdlU291cmNlOiBXaW5kb3csIG1lc3NhZ2VPcmlnaW46IHN0cmluZ307XG5cbmNvbnN0IFJQQ19NRVNTQUdFX1RZUEUgPSBcIm1pbmktaWZyYW1lLXJwY1wiO1xuY29uc3QgUkFORE9NX0JBU0UgPSAzNjtcbmNvbnN0IENBTExJRF9MRU5HVEggPSA4O1xuY29uc3QgREVGQVVMVF9JTlZPQ0FUSU9OX09QVElPTlM6SW52b2NhdGlvbk9wdGlvbnMgPSB7XG4gICAgdGltZW91dDogMTAwLFxuICAgIHJldHJ5TGltaXQ6IDIsXG4gICAgcmV0cnlBbGxGYWlsdXJlczogZmFsc2Vcbn1cblxuZXhwb3J0IGNsYXNzIE1pbmlJZnJhbWVSUEMge1xuICAgIHByaXZhdGUgY29uZmlnOiBJbml0UGFyYW1ldGVycztcbiAgICBwcml2YXRlIGNhbGxiYWNrczoge1trZXk6c3RyaW5nXTpDYWxsYmFja0Z1bmN0aW9uc30gPSB7fTtcbiAgICBwcml2YXRlIHJlZ2lzdGVyZWRQcm9jZWR1cmVzOntba2V5OnN0cmluZ106IFByb2NlZHVyZUltcGxlbWVudGF0aW9ufSA9IHt9O1xuICAgIHByaXZhdGUgcmVzdWx0Q2FjaGU6UmVzdWx0Q2FjaGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihpbml0UGFyYW1ldGVycz86IEluaXRQYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgd2luZG93UmVmOiBpbml0UGFyYW1ldGVycyAmJiBpbml0UGFyYW1ldGVycy53aW5kb3dSZWYgfHwgd2luZG93LFxuICAgICAgICAgICAgb3JpZ2luV2hpdGVsaXN0OiBpbml0UGFyYW1ldGVycyAmJiBpbml0UGFyYW1ldGVycy5vcmlnaW5XaGl0ZWxpc3QgfHwgW10sXG4gICAgICAgICAgICBkZWZhdWx0SW52b2NhdGlvbk9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfSU5WT0NBVElPTl9PUFRJT05TLCBpbml0UGFyYW1ldGVycyAmJiBpbml0UGFyYW1ldGVycy5kZWZhdWx0SW52b2NhdGlvbk9wdGlvbnMgfHwge30pLCAgICAgICAgICAgIFxuICAgICAgICAgICAgZXZlbnRDYWxsYmFja3M6IGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLmV2ZW50Q2FsbGJhY2tzIHx8IHt9LFxuICAgICAgICAgICAgcmVzdWx0Q2FjaGVDYXBhY2l0eTogaW5pdFBhcmFtZXRlcnMgJiYgdHlwZW9mIGluaXRQYXJhbWV0ZXJzLnJlc3VsdENhY2hlQ2FwYWNpdHkgPT09ICdudW1iZXInID8gaW5pdFBhcmFtZXRlcnMucmVzdWx0Q2FjaGVDYXBhY2l0eSA6IERFRkFVTFRfUkVTVUxUX0NBQ0hFX0NBUEFDSVRZXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVzdWx0Q2FjaGUgPSBuZXcgUmVzdWx0Q2FjaGUoe1xuICAgICAgICAgICAgY2FwYWNpdHk6IHRoaXMuY29uZmlnLnJlc3VsdENhY2hlQ2FwYWNpdHksXG4gICAgICAgICAgICBldmljdGlvbkNhbGxiYWNrOiAoY2FsbElkLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uUmVzdWx0Q2FjaGVFdmljdGlvblwiLCBjYWxsSWQsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhdHRhY2ggbGlzdGVuZXJcbiAgICAgICAgdGhpcy5jb25maWcud2luZG93UmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMucmVjdik7XG4gICAgfSAgICAgICAgXG5cbiAgICByZWdpc3Rlcihwcm9jZWR1cmVOYW1lOiBzdHJpbmcsIGltcGxlbWVudGF0aW9uPzogUHJvY2VkdXJlSW1wbGVtZW50YXRpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblJlZ2lzdGVyXCIsIHByb2NlZHVyZU5hbWUsIGltcGxlbWVudGF0aW9uKVxuICAgICAgICBpZiAoaW1wbGVtZW50YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlTmFtZV0gPSBpbXBsZW1lbnRhdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzW3Byb2NlZHVyZU5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW52b2tlICh0YXJnZXRXaW5kb3c6IFdpbmRvdywgdGFyZ2V0T3JpZ2luOiBzdHJpbmcgfCBudWxsLCBwcm9jZWR1cmVOYW1lOiBzdHJpbmcsIGFyZ3VtZW50TGlzdD86IGFueVtdLCBpbnZvY2F0aW9uT3B0aW9ucz86IEludm9jYXRpb25PcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLmRlZmF1bHRJbnZvY2F0aW9uT3B0aW9ucywgaW52b2NhdGlvbk9wdGlvbnMgfHzCoHt9KTtcbiAgICAgICAgY29uc3QgY2FsbElkID0gdGhpcy5nZXROZXh0Q2FsbElkKCk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RNZXNzYWdlQm9keTogUmVxdWVzdE1lc3NhZ2VCb2R5ID0ge1xuICAgICAgICAgICAgY29udGVudHM6IFwicmVxdWVzdFwiLFxuICAgICAgICAgICAgY2FsbElkLFxuICAgICAgICAgICAgcHJvY2VkdXJlTmFtZSxcbiAgICAgICAgICAgIGFyZ3VtZW50TGlzdDogKGFyZ3VtZW50TGlzdCB8fCBbXSl9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RXaXRoUmV0cnkodGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4sIHJlcXVlc3RNZXNzYWdlQm9keSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25DbG9zZVwiKTtcbiAgICAgICAgdGhpcy5jb25maWcud2luZG93UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMucmVjdik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXF1ZXN0V2l0aFJldHJ5KHRhcmdldFdpbmRvdzogV2luZG93LCB0YXJnZXRPcmlnaW46IHN0cmluZyB8IG51bGwsIHJlcXVlc3RNZXNzYWdlQm9keTpSZXF1ZXN0TWVzc2FnZUJvZHksIG9wdGlvbnM6IEludm9jYXRpb25PcHRpb25zKTpQcm9taXNlPGFueT4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlcXVlc3RDb3VudCA9IDA7XG4gICAgICAgIGxldCBmYWlsdXJlQ291bnQgPSAwOyAgICAgICAgXG4gICAgICAgIGxldCBmaW5hbFJlc29sdmU6KHJlc3VsdD86IGFueSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcbiAgICAgICAgbGV0IGZpbmFsUmVqZWN0OihlcnJvcj86IGFueSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcbiAgICAgICAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBwcmV2aW91c1JlamVjdFJlYXNvbnM6YW55W10gPSBbXTsgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgaXNFcnJvclJldHJpYWJsZSA9IChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0IDw9IDAgfHwgb3B0aW9ucy5yZXRyeUxpbWl0IDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMucmV0cnlBbGxGYWlsdXJlcyB8fCAoZXJyb3IgaW5zdGFuY2VvZiBUaW1lb3V0RXJyb3IpOyAgICAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG1ha2VSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZSh0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgcmVxdWVzdE1lc3NhZ2VCb2R5KTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrc1tyZXF1ZXN0TWVzc2FnZUJvZHkuY2FsbElkXSA9IHtyZXNvbHZlLCByZWplY3R9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVSZXNvbHZlID0gKHJlc3VsdD86IGFueSkgPT4ge1xuICAgICAgICAgICAgLy8gZmlyc3Qgc3VjY2Vzc2Z1bCByZXF1ZXN0IGltbWVkaWF0ZWx5IHJlc29sdmVzIHRoZSBpbnZvY2F0aW9uIHByb21pc2VcbiAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBmaW5hbFJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVJlamVjdCA9IChyZWFzb24/OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGZhaWx1cmVDb3VudCArPSAxO1xuICAgICAgICAgICAgLy8gSWYgcmVxdWVzdCBoYXMgc2luY2UgYmVlbiBjb21wbGV0ZWQsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIC8vIFJldHJ5IHJlcXVlc3Qgb3IgZmFpbCBwZXJtYW5lbnRseSBpZiBubyBvdXRzdGFuZGluZyByZXF1ZXN0cyBzdGlsbCBpbiBmbGlnaHRcbiAgICAgICAgICAgIGlmICghY29tcGxldGVkICYmIGZhaWx1cmVDb3VudCA9PT0gcmVxdWVzdENvdW50KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNFcnJvclJldHJpYWJsZShyZWFzb24pICYmIHJlcXVlc3RDb3VudCA8IChvcHRpb25zLnJldHJ5TGltaXQgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uUmVxdWVzdFJldHJ5XCIsIHJlYXNvbiwgcHJldmlvdXNSZWplY3RSZWFzb25zLCByZXF1ZXN0TWVzc2FnZUJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1JlamVjdFJlYXNvbnMucHVzaChyZWFzb24pO1xuICAgICAgICAgICAgICAgICAgICBtYWtlQXR0ZW1wdCgpO1xuICAgICAgICAgICAgICAgIC8vIElmIGVycm9yIGlzIG5vbi1yZXRyaWFibGUgYW5kIHRoZXJlIGFyZSBubyB1bmFuc3dlcmVkIHJlcXVlc3RzLCBnaXZlIHVwLlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsUmVqZWN0KG5ldyBJbnZvY2F0aW9uRXJyb3IocmVxdWVzdE1lc3NhZ2VCb2R5LnByb2NlZHVyZU5hbWUsIHJlYXNvbiwgcHJldmlvdXNSZWplY3RSZWFzb25zKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgYXJlIHN0aWxsIG91dHN0YW5kaW5nIHJlcXVlc3RzLCB3YWl0IGZvciB0aGVtIHRvIHN1Y2NlZWQgb3IgZmFpbC5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtYWtlQXR0ZW1wdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RDb3VudCArPSAxO1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlUHJvbWlzZSA9IG1ha2VSZXF1ZXN0KCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IHRoaXMudGltZWJveFByb21pc2UocmVzcG9uc2VQcm9taXNlLCBvcHRpb25zLnRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VQcm9taXNlLnRoZW4oaGFuZGxlUmVzb2x2ZSwgaGFuZGxlUmVqZWN0KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZpbmFsUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBmaW5hbFJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGluaXRpYWwgYXR0ZW1wdFxuICAgICAgICBtYWtlQXR0ZW1wdCgpO1xuXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGludGVybmFsRXZlbnRDYWxsYmFjayhpbnRlcm5hbEV2ZW50Q2FsbGJhY2s6IEludGVybmFsRXZlbnRDYWxsYmFja1R5cGUsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IGNiID0gdGhpcy5jb25maWcuZXZlbnRDYWxsYmFja3NbaW50ZXJuYWxFdmVudENhbGxiYWNrXTtcbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICBjYi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdGltZWJveFByb21pc2Uob3JpZ2luYWxQcm9taXNlOiBQcm9taXNlPGFueT4sIHRpbWVvdXRNaWxsaVNlY29uZHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgb3JpZ2luYWxQcm9taXNlLFxuICAgICAgICAgICAgbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy53aW5kb3dSZWYuc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gcmVqZWN0KG5ldyBUaW1lb3V0RXJyb3Ioe3RpbWVvdXRNaWxsaVNlY29uZHN9KSksXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRNaWxsaVNlY29uZHMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgXSk7XG4gICAgfSAgIFxuXG4gICAgcHJpdmF0ZSBnZXROZXh0Q2FsbElkICgpIHtcbiAgICAgICAgbGV0IHJhbmRvbUlkIDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIHdoaWxlKCFyYW5kb21JZCB8fCB0aGlzLmNhbGxiYWNrc1tyYW5kb21JZF0pIHtcbiAgICAgICAgICAgIHJhbmRvbUlkID0gYGNiJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKFJBTkRPTV9CQVNFKS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgQ0FMTElEX0xFTkdUSCl9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByYW5kb21JZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbmRNZXNzYWdlICh0YXJnZXRXaW5kb3c6IFdpbmRvdywgdGFyZ2V0T3JpZ2luOiBzdHJpbmcgfCBudWxsLCBtZXNzYWdlQm9keTogTWVzc2FnZUJvZHkpIDogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxNZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogUlBDX01FU1NBR0VfVFlQRSxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IG1lc3NhZ2VCb2R5XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uU2VuZFwiLCB0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgZnVsbE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRhcmdldFdpbmRvdy5wb3N0TWVzc2FnZShmdWxsTWVzc2FnZSwgdGFyZ2V0T3JpZ2luIHx8IFwiKlwiKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9ICAgICAgICBcblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlUmVxdWVzdCAoY29udGV4dDpQcm9jZWR1cmVJbnZvY2F0aW9uQ29udGV4dCkge1xuICAgICAgICBjb25zdCBjYWxsSWQgPSBjb250ZXh0LnJlcXVlc3RNZXNzYWdlQm9keS5jYWxsSWQ7XG4gICAgICAgIGNvbnN0IHByb2NlZHVyZU5hbWUgPSBjb250ZXh0LnJlcXVlc3RNZXNzYWdlQm9keS5wcm9jZWR1cmVOYW1lO1xuICAgICAgICBjb25zdCBhcmd1bWVudExpc3QgPSBjb250ZXh0LnJlcXVlc3RNZXNzYWdlQm9keS5hcmd1bWVudExpc3Q7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlT3JpZ2luID0gIWNvbnRleHQubWVzc2FnZU9yaWdpbiB8fCBjb250ZXh0Lm1lc3NhZ2VPcmlnaW4gPT09IFwibnVsbFwiID8gbnVsbCA6IGNvbnRleHQubWVzc2FnZU9yaWdpbjtcbiAgICAgICAgY29uc3Qgc2VuZEVycm9yID0gKHJlamVjdE9yRXJyb3I6IGFueSwgZXhjZXB0aW9uTmFtZT86c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0Vycm9yID0gcmVqZWN0T3JFcnJvciBpbnN0YW5jZW9mIEVycm9yO1xuICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm1lc3NhZ2VTb3VyY2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPcmlnaW4sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50czogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICBjYWxsSWQsXG4gICAgICAgICAgICAgICAgICAgIGlzRXJyb3JJbnN0YW5jZTogaXNFcnJvciwgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBlcnJvclZhbHVlOiBpc0Vycm9yID8gc2VyaWFsaXplUmVtb3RlRXJyb3IocmVqZWN0T3JFcnJvciwgZXhjZXB0aW9uTmFtZSkgOiByZWplY3RPckVycm9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGdldFJlc3VsdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdENhY2hlLmhhc0NhY2hlZFJlc3VsdChjYWxsSWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0Q2FjaGUuZ2V0Q2FjaGVkUmVzdWx0KGNhbGxJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlTmFtZV0uYXBwbHkoXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50TGlzdCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRDYWNoZS5zZXRDYWNoZWRSZXN1bHQoY2FsbElkLCByZXN1bHRQcm9taXNlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzW3Byb2NlZHVyZU5hbWVdKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZ2V0UmVzdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQ/OmFueSkgPT4gdGhpcy5zZW5kTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5tZXNzYWdlU291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZU9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM6IFwicmVzdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gc2VuZEVycm9yKGVycm9yLCBTZW5kTWVzc2FnZUVycm9yLm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3I/OmFueSkgPT4gc2VuZEVycm9yKGVycm9yLCBFdmFsdWF0aW9uRXJyb3IubmFtZSkpOyAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRFcnJvcihuZXcgUHJvY2VkdXJlTm90Rm91bmRFcnJvcih7cHJvY2VkdXJlTmFtZX0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2U6IE1lc3NhZ2VCb2R5KSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrRnVuY3Rpb25zID0gdGhpcy5jYWxsYmFja3NbcmVzcG9uc2UuY2FsbElkXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrRnVuY3Rpb25zKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jYWxsYmFja3NbcmVzcG9uc2UuY2FsbElkXTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50cyA9PT0gXCJyZXN1bHRcIikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb25zLnJlc29sdmUocmVzcG9uc2UucmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuY29udGVudHMgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yT2JqZWN0ID0gcmVzcG9uc2UuaXNFcnJvckluc3RhbmNlID8gZGVzZXJpYWxpemVSZW1vdGVFcnJvcihyZXNwb25zZS5lcnJvclZhbHVlKSA6IHJlc3BvbnNlLmVycm9yVmFsdWU7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbnMucmVqZWN0KGVycm9yT2JqZWN0KTtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblVuZXhwZWN0ZWRSZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgIH0gICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlY3YgPSAobWVzc2FnZUV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCh0aGlzLmNvbmZpZy5vcmlnaW5XaGl0ZWxpc3QubGVuZ3RoIDwgMSB8fCB0aGlzLmNvbmZpZy5vcmlnaW5XaGl0ZWxpc3QuaW5kZXhPZihtZXNzYWdlRXZlbnQub3JpZ2luKSA+IC0xKSAmJlxuICAgICAgICAgICAgbWVzc2FnZUV2ZW50LmRhdGEgJiYgbWVzc2FnZUV2ZW50LmRhdGEudHlwZSA9PT0gUlBDX01FU1NBR0VfVFlQRSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblJlY2VpdmVcIiwgbWVzc2FnZUV2ZW50KTsgICAgXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0TWVzc2FnZUJvZHkgOiBNZXNzYWdlQm9keSA9IG1lc3NhZ2VFdmVudC5kYXRhLm1lc3NhZ2UgYXMgTWVzc2FnZUJvZHk7XG4gICAgICAgICAgICBpZiAocmVxdWVzdE1lc3NhZ2VCb2R5LmNvbnRlbnRzID09PSBcInJlcXVlc3RcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3Qoe3JlcXVlc3RNZXNzYWdlQm9keSwgbWVzc2FnZVNvdXJjZTogbWVzc2FnZUV2ZW50LnNvdXJjZSBhcyBXaW5kb3csIG1lc3NhZ2VPcmlnaW46IG1lc3NhZ2VFdmVudC5vcmlnaW59KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVzcG9uc2UocmVxdWVzdE1lc3NhZ2VCb2R5KTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxufSAvLyBlbmQgb2YgY2xhc3NcbiIsImV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0Q2FjaGVQYXJhbWV0ZXJzIHtcbiAgICBjYXBhY2l0eTogbnVtYmVyO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBldmljdGlvbkNhbGxiYWNrPzogKGNhbGxJZDpzdHJpbmcsIHJlc3VsdDphbnkpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9SRVNVTFRfQ0FDSEVfQ0FQQUNJVFkgPSAyMDA7XG5cblxuY29uc3QgREVGQVVMVF9QQVJBTUVURVJTOlJlc3VsdENhY2hlUGFyYW1ldGVycyA9IHtcbiAgICBjYXBhY2l0eTogREVGQVVMVF9SRVNVTFRfQ0FDSEVfQ0FQQUNJVFksXG59O1xuXG5leHBvcnQgY2xhc3MgUmVzdWx0Q2FjaGUge1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHByaXZhdGUgY2FsbElkczogc3RyaW5nW10gPSBbXTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcHJpdmF0ZSByZXN1bHRzOiB7W2tleTpzdHJpbmddOmFueX0gPSB7fTtcbiAgICBwcml2YXRlIGNvbmZpZzogUmVzdWx0Q2FjaGVQYXJhbWV0ZXJzO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogUGFydGlhbDxSZXN1bHRDYWNoZVBhcmFtZXRlcnM+KSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9QQVJBTUVURVJTLCBjb25maWcgfHwge30pO1xuICAgIH1cblxuICAgIGhhc0NhY2hlZFJlc3VsdChjYWxsSWQ6c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHMuaGFzT3duUHJvcGVydHkoY2FsbElkKTtcbiAgICB9XG5cbiAgICBnZXRDYWNoZWRSZXN1bHQoY2FsbElkOnN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzW2NhbGxJZF07XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHNldENhY2hlZFJlc3VsdChjYWxsSWQ6c3RyaW5nLCByZXN1bHQ6YW55KSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0NhY2hlZFJlc3VsdChjYWxsSWQpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxJZHMgPSB0aGlzLmNhbGxJZHMuZmlsdGVyKGMgPT4gYyAhPT0gY2FsbElkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxJZHMudW5zaGlmdChjYWxsSWQpO1xuICAgICAgICB0aGlzLnJlc3VsdHNbY2FsbElkXSA9IHJlc3VsdDtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmNhcGFjaXR5ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW5mb3JjZUNhcGFjaXR5KCk7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgZW5mb3JjZUNhcGFjaXR5KCkge1xuICAgICAgICBmb3IgKGxldCBzaXplID0gdGhpcy5jYWxsSWRzLmxlbmd0aDsgc2l6ZSA+IHRoaXMuY29uZmlnLmNhcGFjaXR5OyBzaXplLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxJZCA9IHRoaXMuY2FsbElkcy5wb3AoKSE7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnJlc3VsdHNbY2FsbElkXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlc3VsdHNbY2FsbElkXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5ldmljdGlvbkNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXZpY3Rpb25DYWxsYmFjayhjYWxsSWQsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9