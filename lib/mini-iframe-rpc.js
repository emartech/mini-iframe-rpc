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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvZXZhbHVhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL2luZGV4LnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvaW52b2NhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL21pbmktaWZyYW1lLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvcHJvY2VkdXJlLW5vdC1mb3VuZC1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL3JlbW90ZS1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL3NlbmQtbWVzc2FnZS1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL3RpbWVvdXQtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL21pbmktaWZyYW1lLXJwYy50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvcmVzcG9uc2UtY2FjaGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxzRUFBc0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7Z0JBQ2pILGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN6QztTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDaEU7SUFDTCxDQUFDO0lBZUwsb0JBQUM7QUFBRCxDQUFDLEtBQUMsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNsU2hCO0FBQUE7QUFBQSxDQUFDO0FBRUYsSUFBTSxrQkFBa0IsR0FBRztJQUN2QixJQUFJLEVBQUUsR0FBRztDQUNaLENBQUM7QUFFRjtJQU1JLHVCQUFZLFVBQTZDO1FBSnpELGtDQUFrQztRQUNsQyxjQUFTLEdBQXVCLEVBQUUsQ0FBQztRQUkvQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGtCQUFrQixFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDIiwiZmlsZSI6Im1pbmktaWZyYW1lLXJwYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibWluaS1pZnJhbWUtcnBjXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbmktaWZyYW1lLXJwY1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW5pLWlmcmFtZS1ycGNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWluaS1pZnJhbWUtcnBjLnRzXCIpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBSZW1vdGVFcnJvciB9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcblxuZXhwb3J0IGNsYXNzIEV2YWx1YXRpb25FcnJvciBleHRlbmRzIFJlbW90ZUVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yOiBSZW1vdGVFcnJvcikge1xuICAgICAgICBzdXBlcihlcnJvci5jYXVzZSk7XG4gICAgICAgIC8vIHNlZTogdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svcmVsZWFzZS1ub3Rlcy90eXBlc2NyaXB0LTItMi5odG1sXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7IC8vIHJlc3RvcmUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgIHRoaXMubmFtZSA9IEV2YWx1YXRpb25FcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7RXZhbHVhdGlvbkVycm9yfSBmcm9tICcuL2V2YWx1YXRpb24tZXJyb3InO1xuaW1wb3J0IHtJbnZvY2F0aW9uRXJyb3J9IGZyb20gJy4vaW52b2NhdGlvbi1lcnJvcic7XG5pbXBvcnQge01pbmlJZnJhbWVFcnJvcn0gZnJvbSAnLi9taW5pLWlmcmFtZS1lcnJvcic7XG5pbXBvcnQge1Byb2NlZHVyZU5vdEZvdW5kRXJyb3J9IGZyb20gJy4vcHJvY2VkdXJlLW5vdC1mb3VuZC1lcnJvcic7XG5pbXBvcnQge2Vycm9yVG9KU09OLCBSZW1vdGVFcnJvciwgUmVtb3RlRXJyb3JDYXVzZX0gZnJvbSAnLi9yZW1vdGUtZXJyb3InO1xuaW1wb3J0IHtTZW5kTWVzc2FnZUVycm9yfSBmcm9tICcuL3NlbmQtbWVzc2FnZS1lcnJvcic7XG5pbXBvcnQge1RpbWVvdXRFcnJvcn0gZnJvbSAnLi90aW1lb3V0LWVycm9yJztcblxuZXhwb3J0IHtNaW5pSWZyYW1lRXJyb3IsIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IsIEV2YWx1YXRpb25FcnJvciwgVGltZW91dEVycm9yLCBTZW5kTWVzc2FnZUVycm9yLCBSZW1vdGVFcnJvciwgSW52b2NhdGlvbkVycm9yfTtcblxudHlwZSBSZW1vdGVFcnJvckNvbnN0cnVjdG9yID0gbmV3IChzdGF0ZTogUGFydGlhbDxSZW1vdGVFcnJvcj4pID0+IFJlbW90ZUVycm9yO1xuXG50eXBlIEVSUk9SX01BUCA9IHtcbiAgICBba2V5OiBzdHJpbmddOiBSZW1vdGVFcnJvckNvbnN0cnVjdG9yXG59XG5cbmNvbnN0IHJlbW90ZUVycm9yQ2xhc3NlcyA9IChbXG4gICAgUHJvY2VkdXJlTm90Rm91bmRFcnJvcixcbiAgICBFdmFsdWF0aW9uRXJyb3IsXG4gICAgU2VuZE1lc3NhZ2VFcnJvclxuICAgIF0gYXMgUmVtb3RlRXJyb3JDb25zdHJ1Y3RvcltdKS5yZWR1Y2UoXG4gICAgKG9iajpFUlJPUl9NQVAsIGNvbnN0cjpSZW1vdGVFcnJvckNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgIG9ialtjb25zdHIubmFtZV0gPSBjb25zdHI7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSBhcyBFUlJPUl9NQVApIGFzIEVSUk9SX01BUDsgICAgXG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpemVSZW1vdGVFcnJvciA9IChjYXVzZTogUmVtb3RlRXJyb3JDYXVzZSwgcmVtb3RlRXhjZXB0aW9uTmFtZT86IHN0cmluZyk6UmVtb3RlRXJyb3IgPT4geyAgICBcbiAgICBcbiAgICBjb25zdCBjb252ZXJ0ID0gKGVycjogUmVtb3RlRXJyb3IpOlJlbW90ZUVycm9yID0+IHtcbiAgICAgICAgY29uc3QgZXJySlNPTjpSZW1vdGVFcnJvciA9IGVycm9yVG9KU09OKGVycik7ICAgICAgICBcbiAgICAgICAgaWYgKHJlbW90ZUV4Y2VwdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIGVyckpTT04ubmFtZSA9IHJlbW90ZUV4Y2VwdGlvbk5hbWU7XG4gICAgICAgIH0gICAgIFxuXG4gICAgICAgIHJldHVybiBlcnJKU09OO1xuICAgIH1cbiAgICBpZiAoY2F1c2UgaW5zdGFuY2VvZiBSZW1vdGVFcnJvcikge1xuICAgICAgICAvLyBpZiBjYXVzZSBpcyBhbHJlYWR5IGEgcmVtb3RlRXJyb3IsIHJldHVybiBhcyBpc1xuICAgICAgICByZXR1cm4gY29udmVydChjYXVzZSk7XG4gICAgfSAgICBcbiAgICAvLyBmb3IgYm90aCBFcnJvciBhbmQgU3RyaW5nIHR5cGUgY2F1c2VzLCBjcmVhdGUgYSBuZXcgUmVtb3RlRXJyb3IgXG5cbiAgICByZXR1cm4gY29udmVydChuZXcgUmVtb3RlRXJyb3IoY2F1c2UpKTsgICAgXG59OyAgIFxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgY29uc3QgZGVzZXJpYWxpemVSZW1vdGVFcnJvciA9IChlcnJvcjpSZW1vdGVFcnJvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0ciA9IHJlbW90ZUVycm9yQ2xhc3Nlc1tlcnJvci5uYW1lXSB8fCBSZW1vdGVFcnJvcjtcblxuICAgIHJldHVybiBuZXcgY29uc3RyKGVycm9yKTtcbn07IiwiaW1wb3J0IHtNaW5pSWZyYW1lRXJyb3J9IGZyb20gJy4vbWluaS1pZnJhbWUtZXJyb3InO1xuaW1wb3J0IHtlcnJvclRvSlNPTn0gZnJvbSAnLi9yZW1vdGUtZXJyb3InO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5jb25zdCBtYWtlTWVzc2FnZSA9IChwcm9jZWR1cmVOYW1lOiBzdHJpbmcsIGNhdXNlPzogYW55LCBwcmV2aW91c1JlamVjdFJlYXNvbnM/OiBhbnlbXSk6c3RyaW5nID0+IHtcbiAgICBsZXQgbWVzc2FnZSA9IGBFcnJvciBpbnZva2luZyByZW1vdGUgcHJvY2VkdXJlICcke3Byb2NlZHVyZU5hbWV9Jy5gO1xuICAgIGlmIChjYXVzZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IGNhdXNlIGFzIEVycm9yO1xuICAgICAgICBtZXNzYWdlICs9IGAgJHtlcnIubmFtZX06ICR7ZXJyLm1lc3NhZ2V9LmA7XG4gICAgfSBlbHNlIGlmIChjYXVzZSkge1xuICAgICAgICBtZXNzYWdlICs9IGAgUmVhc29uOiAke2NhdXNlLnRvU3RyaW5nKCl9LmA7XG4gICAgfVxuICAgIGlmIChwcmV2aW91c1JlamVjdFJlYXNvbnMgJiYgcHJldmlvdXNSZWplY3RSZWFzb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcGx1cmFsID0gcHJldmlvdXNSZWplY3RSZWFzb25zLmxlbmd0aCA+IDEgPyAncycgOiAnJztcbiAgICAgICAgbWVzc2FnZSArPSBgICR7cHJldmlvdXNSZWplY3RSZWFzb25zLmxlbmd0aH0gYWRkaXRpb25hbCByZWplY3Rpb24ke3BsdXJhbH0gZnJvbSByZXRyaWVkIGF0dGVtcHQke3BsdXJhbH0uYDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBJbnZvY2F0aW9uRXJyb3IgZXh0ZW5kcyBNaW5pSWZyYW1lRXJyb3Ige1xuXG4gICAgcHJvY2VkdXJlTmFtZTogc3RyaW5nO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjYXVzZT86IGFueTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcHJldmlvdXNSZWplY3RSZWFzb25zPzogYW55W107XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3RydWN0b3IocHJvY2VkdXJlTmFtZTogc3RyaW5nLCBjYXVzZT86IGFueSwgcHJldmlvdXNSZWplY3RSZWFzb25zPzogYW55W10pIHtcbiAgICAgICAgc3VwZXIobWFrZU1lc3NhZ2UocHJvY2VkdXJlTmFtZSwgY2F1c2UsIHByZXZpb3VzUmVqZWN0UmVhc29ucykpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgdGhpcy5uYW1lID0gSW52b2NhdGlvbkVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICBcbiAgICAgICAgdGhpcy5wcm9jZWR1cmVOYW1lID0gcHJvY2VkdXJlTmFtZTtcbiAgICAgICAgdGhpcy5jYXVzZSA9IGNhdXNlO1xuICAgICAgICB0aGlzLnByZXZpb3VzUmVqZWN0UmVhc29ucyA9IHByZXZpb3VzUmVqZWN0UmVhc29uczsgICAgICAgICAgICAgIFxuICAgIH0gICAgXG59IiwiZXhwb3J0IGNsYXNzIE1pbmlJZnJhbWVFcnJvciBleHRlbmRzIEVycm9yIHtcblxuICAgIHRpbWVzdGFtcDpudW1iZXI7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZywgc3RhdGU/OiBhbnkpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gwqArKG5ldyBEYXRlKCkpO1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNlZTogdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svcmVsZWFzZS1ub3Rlcy90eXBlc2NyaXB0LTItMi5odG1sXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7IC8vIHJlc3RvcmUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgIHRoaXMubmFtZSA9IE1pbmlJZnJhbWVFcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93IFxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgUmVtb3RlRXJyb3IgfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBQcm9jZWR1cmVOb3RGb3VuZEVycm9yIGV4dGVuZHMgUmVtb3RlRXJyb3Ige1xuXG4gICAgcHJvY2VkdXJlTmFtZSA9IFwidW5rbm93blwiO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBhcnRpYWw8UHJvY2VkdXJlTm90Rm91bmRFcnJvcj4pIHtcbiAgICAgICAgc3VwZXIoYFJlbW90ZSBwcm9jZWR1cmUgJyR7c3RhdGUucHJvY2VkdXJlTmFtZX0nIG5vdCByZWdpc3RlcmVkIGluIHJlbW90ZSBSUEMgaW5zdGFuY2UuYCk7XG4gICAgICAgIGlmIChzdGF0ZS5wcm9jZWR1cmVOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnByb2NlZHVyZU5hbWUgPSBzdGF0ZS5wcm9jZWR1cmVOYW1lO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNlZTogdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svcmVsZWFzZS1ub3Rlcy90eXBlc2NyaXB0LTItMi5odG1sXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7IC8vIHJlc3RvcmUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgIHRoaXMubmFtZSA9IFByb2NlZHVyZU5vdEZvdW5kRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQge01pbmlJZnJhbWVFcnJvcn0gZnJvbSAnLi9taW5pLWlmcmFtZS1lcnJvcic7XG5cbmV4cG9ydCB0eXBlIFJlbW90ZUVycm9yQ2F1c2UgPSBFcnJvciB8IHN0cmluZztcblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yVG9KU09OPFQgZXh0ZW5kcyBFcnJvcj4gKGVycjogVCk6VCB7XG4gICAgLy8gbWVzc2FnZSwgbmFtZSwgc3RhY2sgYXJlIG5vdCBlbm51bWVyYWJsZSwgc28gd2UgbXVzdCBleHBsaWNpdGx5IGdldCB0aGVtLlxuICAgIGNvbnN0IHttZXNzYWdlLCBuYW1lLCBzdGFja30gPSBlcnI7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7bWVzc2FnZSwgc3RhY2ssIG5hbWV9LCBlcnIpO1xufVxuXG5jb25zdCBjYXVzZVRvTWVzc2FnZSA9IChjYXVzZTogUmVtb3RlRXJyb3JDYXVzZSk6c3RyaW5nID0+IHtcbiAgICBpZiAodHlwZW9mIGNhdXNlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gY2F1c2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke2NhdXNlLm1lc3NhZ2V9YDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdGVFcnJvciBleHRlbmRzIE1pbmlJZnJhbWVFcnJvciB7XG4gICAgICAgIFxuICAgIGNhdXNlOiBSZW1vdGVFcnJvckNhdXNlO1xuXG4gICAgY29uc3RydWN0b3IoY2F1c2U6IFJlbW90ZUVycm9yQ2F1c2UpIHsgICAgICAgIFxuICAgICAgICBzdXBlcihjYXVzZVRvTWVzc2FnZShjYXVzZSkpO1xuICAgICAgICB0aGlzLmNhdXNlID0gKHR5cGVvZiBjYXVzZSA9PT0gJ3N0cmluZycpID8gY2F1c2UgOiBlcnJvclRvSlNPTihjYXVzZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFJlbW90ZUVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgUmVtb3RlRXJyb3IgfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBTZW5kTWVzc2FnZUVycm9yIGV4dGVuZHMgUmVtb3RlRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3I6IFJlbW90ZUVycm9yKSB7XG4gICAgICAgIHN1cGVyKGVycm9yLmNhdXNlKTsgICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBTZW5kTWVzc2FnZUVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHtNaW5pSWZyYW1lRXJyb3J9IGZyb20gJy4vbWluaS1pZnJhbWUtZXJyb3InO1xuXG5leHBvcnQgY2xhc3MgVGltZW91dEVycm9yIGV4dGVuZHMgTWluaUlmcmFtZUVycm9yIHtcblxuICAgIHRpbWVvdXRNaWxsaVNlY29uZHMgPSAwO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBhcnRpYWw8VGltZW91dEVycm9yPikge1xuICAgICAgICBzdXBlcihgVGltZW91dCBhZnRlciAke3N0YXRlLnRpbWVvdXRNaWxsaVNlY29uZHN9IG1zLmAsIHN0YXRlKTsgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vIHNlZTogdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svcmVsZWFzZS1ub3Rlcy90eXBlc2NyaXB0LTItMi5odG1sXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7IC8vIHJlc3RvcmUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgIHRoaXMubmFtZSA9IFRpbWVvdXRFcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgICAgICAgICAgICAgICBcbiAgICB9XG59IiwiXG4vKiB0c2xpbnQ6ZGlzYWJsZSBuby1hbnkgbm8tdW5zYWZlLWFueSAqL1xuXG5pbXBvcnQge2Rlc2VyaWFsaXplUmVtb3RlRXJyb3IsIEV2YWx1YXRpb25FcnJvciwgSW52b2NhdGlvbkVycm9yLCBQcm9jZWR1cmVOb3RGb3VuZEVycm9yLCBSZW1vdGVFcnJvciwgU2VuZE1lc3NhZ2VFcnJvciwgc2VyaWFsaXplUmVtb3RlRXJyb3IsIFRpbWVvdXRFcnJvcn0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHtSZXNwb25zZUNhY2hlfSBmcm9tIFwiLi9yZXNwb25zZS1jYWNoZVwiO1xuZXhwb3J0IHtSZXNwb25zZUNhY2hlfTsgLy8gc28gdW5pdCB0ZXN0cyBjYW4gYWNjZXNzIFJlc3BvbnNlQ2FjaGVcblxuaW50ZXJmYWNlIFJlcXVlc3RNZXNzYWdlQm9keSAge1xuICAgIGNvbnRlbnRzOiBcInJlcXVlc3RcIjtcbiAgICBjYWxsSWQ6IHN0cmluZztcbiAgICBwcm9jZWR1cmVOYW1lOiBzdHJpbmc7XG4gICAgYXJndW1lbnRMaXN0OiBhbnlbXVxufVxuXG5pbnRlcmZhY2UgUmVzdWx0TWVzc2FnZUJvZHkge1xuICAgIGNvbnRlbnRzOiBcInJlc3VsdFwiO1xuICAgIGNhbGxJZDogc3RyaW5nOyAgICBcbiAgICByZXN1bHQ6IGFueVxufVxuXG5pbnRlcmZhY2UgRXJyb3JNZXNzYWdlQm9keSB7XG4gICAgY29udGVudHM6IFwiZXJyb3JcIjtcbiAgICBjYWxsSWQ6IHN0cmluZztcbiAgICBpc0Vycm9ySW5zdGFuY2U6IGJvb2xlYW47XG4gICAgZXJyb3JWYWx1ZTogUmVtb3RlRXJyb3I7XG59XG5cbnR5cGUgTWVzc2FnZUJvZHkgPSBSZXF1ZXN0TWVzc2FnZUJvZHkgfCBSZXN1bHRNZXNzYWdlQm9keSB8IEVycm9yTWVzc2FnZUJvZHk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW52b2NhdGlvbk9wdGlvbnMge1xuICAgIHRpbWVvdXQ6IG51bWJlcjtcbiAgICByZXRyeUxpbWl0OiBudW1iZXI7XG59XG5cbnR5cGUgSW50ZXJuYWxFdmVudENhbGxiYWNrVHlwZSA9ICdvblVuZXhwZWN0ZWRSZXNwb25zZScgfCAnb25SZWNlaXZlJyB8ICdvblNlbmQnIHwgJ29uUmVnaXN0ZXInIHwgJ29uQ2xvc2UnO1xuXG4vLyBPcHRpb25hbCBjYWxsYmFja3MgZm9yIGludGVybmFsIGV2ZW50cyB1c2VmdWwgZm9yIGRlYnVnZ2luZyBhbmQgdGVzdGluZ1xuZXhwb3J0IHR5cGUgSW50ZXJuYWxFdmVudENhbGxiYWNrcyA9IHtcbiAgICBba2V5IGluIEludGVybmFsRXZlbnRDYWxsYmFja1R5cGVdOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEluaXRQYXJhbWV0ZXJzIHtcbiAgICB3aW5kb3dSZWY6IFdpbmRvdztcbiAgICBvcmlnaW5XaGl0ZWxpc3Q6IHN0cmluZ1tdO1xuICAgIGRlZmF1bHRJbnZvY2F0aW9uT3B0aW9uczogSW52b2NhdGlvbk9wdGlvbnM7XG4gICAgZXZlbnRDYWxsYmFja3M6IFBhcnRpYWw8SW50ZXJuYWxFdmVudENhbGxiYWNrcz47XG59XG5cbmludGVyZmFjZSBDYWxsYmFja0Z1bmN0aW9ucyB7XG4gICAgcmVzb2x2ZTogKHJlc3VsdD86IGFueSkgPT4gdm9pZCxcbiAgICByZWplY3Q6IChlcnJvcj86IGFueSkgPT4gdm9pZFxufVxuXG50eXBlIFByb2NlZHVyZUltcGxlbWVudGF0aW9uID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk7XG5cbmNvbnN0IFJQQ19NRVNTQUdFX1RZUEUgPSBcIm1pbmktaWZyYW1lLXJwY1wiO1xuY29uc3QgUkFORE9NX0JBU0UgPSAzNjtcbmNvbnN0IENBTExJRF9MRU5HVEggPSA4O1xuY29uc3QgREVGQVVMVF9JTlZPQ0FUSU9OX09QVElPTlM6SW52b2NhdGlvbk9wdGlvbnMgPSB7XG4gICAgdGltZW91dDogMjAwLFxuICAgIHJldHJ5TGltaXQ6IDBcbn1cblxuZXhwb3J0IGNsYXNzIE1pbmlJZnJhbWVSUEMge1xuICAgIHByaXZhdGUgY29uZmlnOiBJbml0UGFyYW1ldGVycztcbiAgICBwcml2YXRlIGNhbGxiYWNrczoge1trZXk6c3RyaW5nXTpDYWxsYmFja0Z1bmN0aW9uc30gPSB7fTtcbiAgICBwcml2YXRlIHJlZ2lzdGVyZWRQcm9jZWR1cmVzOntba2V5OnN0cmluZ106IFByb2NlZHVyZUltcGxlbWVudGF0aW9ufSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoaW5pdFBhcmFtZXRlcnM/OiBJbml0UGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIHdpbmRvd1JlZjogaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMud2luZG93UmVmIHx8IHdpbmRvdyxcbiAgICAgICAgICAgIG9yaWdpbldoaXRlbGlzdDogaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMub3JpZ2luV2hpdGVsaXN0IHx8IFtdLFxuICAgICAgICAgICAgZGVmYXVsdEludm9jYXRpb25PcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0lOVk9DQVRJT05fT1BUSU9OUywgaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMuZGVmYXVsdEludm9jYXRpb25PcHRpb25zIHx8IHt9KSxcbiAgICAgICAgICAgIGV2ZW50Q2FsbGJhY2tzOiBpbml0UGFyYW1ldGVycyAmJiBpbml0UGFyYW1ldGVycy5ldmVudENhbGxiYWNrcyB8fCB7fVxuICAgICAgICB9O1xuICAgICAgICAvLyBhdHRhY2ggbGlzdGVuZXJcbiAgICAgICAgdGhpcy5jb25maWcud2luZG93UmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMucmVjdik7XG4gICAgfSAgICAgICAgXG5cbiAgICByZWdpc3Rlcihwcm9jZWR1cmVOYW1lOiBzdHJpbmcsIGltcGxlbWVudGF0aW9uPzogUHJvY2VkdXJlSW1wbGVtZW50YXRpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblJlZ2lzdGVyXCIsIHByb2NlZHVyZU5hbWUsIGltcGxlbWVudGF0aW9uKVxuICAgICAgICBpZiAoaW1wbGVtZW50YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlTmFtZV0gPSBpbXBsZW1lbnRhdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzW3Byb2NlZHVyZU5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW52b2tlICh0YXJnZXRXaW5kb3c6IFdpbmRvdywgdGFyZ2V0T3JpZ2luOiBzdHJpbmcgfCBudWxsLCBwcm9jZWR1cmVOYW1lOiBzdHJpbmcsIGFyZ3VtZW50TGlzdD86IGFueVtdLCBpbnZvY2F0aW9uT3B0aW9ucz86IEludm9jYXRpb25PcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLmRlZmF1bHRJbnZvY2F0aW9uT3B0aW9ucywgaW52b2NhdGlvbk9wdGlvbnMgfHzCoHt9KTtcbiAgICAgICAgY29uc3QgY2FsbElkID0gdGhpcy5nZXROZXh0Q2FsbElkKCk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RNZXNzYWdlQm9keTogUmVxdWVzdE1lc3NhZ2VCb2R5ID0ge1xuICAgICAgICAgICAgY29udGVudHM6IFwicmVxdWVzdFwiLFxuICAgICAgICAgICAgY2FsbElkLFxuICAgICAgICAgICAgcHJvY2VkdXJlTmFtZSxcbiAgICAgICAgICAgIGFyZ3VtZW50TGlzdDogKGFyZ3VtZW50TGlzdCB8fCBbXSl9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RXaXRoUmV0cnkodGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4sIHJlcXVlc3RNZXNzYWdlQm9keSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25DbG9zZVwiKTtcbiAgICAgICAgdGhpcy5jb25maWcud2luZG93UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMucmVjdik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXF1ZXN0V2l0aFJldHJ5KHRhcmdldFdpbmRvdzogV2luZG93LCB0YXJnZXRPcmlnaW46IHN0cmluZyB8IG51bGwsIHJlcXVlc3RNZXNzYWdlQm9keTpSZXF1ZXN0TWVzc2FnZUJvZHksIG9wdGlvbnM6IEludm9jYXRpb25PcHRpb25zKTpQcm9taXNlPGFueT4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlcXVlc3RDb3VudCA9IDA7XG4gICAgICAgIGxldCBmYWlsdXJlQ291bnQgPSAwOyAgICAgICAgXG4gICAgICAgIGxldCBmaW5hbFJlc29sdmU6KHJlc3VsdD86IGFueSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcbiAgICAgICAgbGV0IGZpbmFsUmVqZWN0OihlcnJvcj86IGFueSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcbiAgICAgICAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBwcmV2aW91c1JlamVjdFJlYXNvbnM6YW55W10gPSBbXTsgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgaXNFcnJvclJldHJpYWJsZSA9IChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0IDw9IDAgfHwgb3B0aW9ucy5yZXRyeUxpbWl0IDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG1ha2VSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZSh0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgcmVxdWVzdE1lc3NhZ2VCb2R5KTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrc1tyZXF1ZXN0TWVzc2FnZUJvZHkuY2FsbElkXSA9IHsgcmVzb2x2ZSwgcmVqZWN0IH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc29sdmUgPSAocmVzdWx0PzogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBmaXJzdCBzdWNjZXNzZnVsIHJlcXVlc3QgaW1tZWRpYXRlbHkgcmVzb2x2ZXMgdGhlIGludm9jYXRpb24gcHJvbWlzZVxuICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZpbmFsUmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlUmVqZWN0ID0gKHJlYXNvbj86IGFueSkgPT4ge1xuICAgICAgICAgICAgZmFpbHVyZUNvdW50ICs9IDE7XG4gICAgICAgICAgICAvLyBJZiByZXF1ZXN0IGhhcyBzaW5jZSBiZWVuIGNvbXBsZXRlZCwgZG8gbm90aGluZ1xuICAgICAgICAgICAgLy8gUmV0cnkgcmVxdWVzdCBvciBmYWlsIHBlcm1hbmVudGx5IGlmIG5vIG91dHN0YW5kaW5nIHJlcXVlc3RzIHN0aWxsIGluIGZsaWdodFxuICAgICAgICAgICAgaWYgKCFjb21wbGV0ZWQgJiYgZmFpbHVyZUNvdW50ID09PSByZXF1ZXN0Q291bnQpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpc0Vycm9yUmV0cmlhYmxlKHJlYXNvbikgJiYgcmVxdWVzdENvdW50IDwgKG9wdGlvbnMucmV0cnlMaW1pdCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVqZWN0UmVhc29ucy5wdXNoKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgICAgIG1ha2VBdHRlbXB0KCk7XG4gICAgICAgICAgICAgICAgLy8gSWYgZXJyb3IgaXMgbm9uLXJldHJpYWJsZSBhbmQgdGhlcmUgYXJlIG5vIHVuYW5zd2VyZWQgcmVxdWVzdHMsIGdpdmUgdXAuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxSZWplY3QobmV3IEludm9jYXRpb25FcnJvcihyZXF1ZXN0TWVzc2FnZUJvZHkucHJvY2VkdXJlTmFtZSwgcmVhc29uLCBwcmV2aW91c1JlamVjdFJlYXNvbnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBhcmUgc3RpbGwgb3V0c3RhbmRpbmcgcmVxdWVzdHMsIHdhaXQgZm9yIHRoZW0gdG8gc3VjY2VlZCBvciBmYWlsLlxuICAgICAgICAgICAgLy8gVE9ETzogY2FsbCBpbnRlcm5hbCBldmVudENhbGxiYWNrXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWFrZUF0dGVtcHQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0Q291bnQgKz0gMTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZVByb21pc2UgPSBtYWtlUmVxdWVzdCgpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudGltZW91dCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVByb21pc2UgPSB0aGlzLnRpbWVib3hQcm9taXNlKHJlc3BvbnNlUHJvbWlzZSwgb3B0aW9ucy50aW1lb3V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlUHJvbWlzZS50aGVuKGhhbmRsZVJlc29sdmUsIGhhbmRsZVJlamVjdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmaW5hbFJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgZmluYWxSZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpbml0aWFsIGF0dGVtcHRcbiAgICAgICAgbWFrZUF0dGVtcHQoKTtcblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnRlcm5hbEV2ZW50Q2FsbGJhY2soaW50ZXJuYWxFdmVudENhbGxiYWNrOiBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tUeXBlLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBjYiA9IHRoaXMuY29uZmlnLmV2ZW50Q2FsbGJhY2tzW2ludGVybmFsRXZlbnRDYWxsYmFja107XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgY2IuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRpbWVib3hQcm9taXNlKG9yaWdpbmFsUHJvbWlzZTogUHJvbWlzZTxhbnk+LCB0aW1lb3V0TWlsbGlTZWNvbmRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIG9yaWdpbmFsUHJvbWlzZSxcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcud2luZG93UmVmLnNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHJlamVjdChuZXcgVGltZW91dEVycm9yKHt0aW1lb3V0TWlsbGlTZWNvbmRzfSkpLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0TWlsbGlTZWNvbmRzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pO1xuICAgIH0gICBcblxuICAgIHByaXZhdGUgZ2V0TmV4dENhbGxJZCAoKSB7XG4gICAgICAgIGxldCByYW5kb21JZCA6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICB3aGlsZSghcmFuZG9tSWQgfHwgdGhpcy5jYWxsYmFja3NbcmFuZG9tSWRdKSB7XG4gICAgICAgICAgICByYW5kb21JZCA9IGBjYiR7TWF0aC5yYW5kb20oKS50b1N0cmluZyhSQU5ET01fQkFTRSkucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIENBTExJRF9MRU5HVEgpfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmFuZG9tSWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kTWVzc2FnZSAodGFyZ2V0V2luZG93OiBXaW5kb3csIHRhcmdldE9yaWdpbjogc3RyaW5nIHwgbnVsbCwgbWVzc2FnZUJvZHk6IE1lc3NhZ2VCb2R5KSA6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsTWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFJQQ19NRVNTQUdFX1RZUEUsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBtZXNzYWdlQm9keVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblNlbmRcIiwgdGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4sIGZ1bGxNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2UoZnVsbE1lc3NhZ2UsIHRhcmdldE9yaWdpbiB8fCBcIipcIik7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSAgICAgXG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVJlcXVlc3QgKG1lc3NhZ2VCb2R5OiBSZXF1ZXN0TWVzc2FnZUJvZHksIG1lc3NhZ2VTb3VyY2U6IFdpbmRvdywgbWVzc2FnZU9yaWdpbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNhbGxJZCA9IG1lc3NhZ2VCb2R5LmNhbGxJZDtcbiAgICAgICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IG1lc3NhZ2VCb2R5LnByb2NlZHVyZU5hbWU7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50TGlzdCA9IG1lc3NhZ2VCb2R5LmFyZ3VtZW50TGlzdDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VPcmlnaW4gPSAhbWVzc2FnZU9yaWdpbiB8fCBtZXNzYWdlT3JpZ2luID09PSBcIm51bGxcIiA/IG51bGwgOiBtZXNzYWdlT3JpZ2luO1xuICAgICAgICBjb25zdCBzZW5kRXJyb3IgPSAocmVqZWN0T3JFcnJvcjogYW55LCBleGNlcHRpb25OYW1lPzpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzRXJyb3IgPSByZWplY3RPckVycm9yIGluc3RhbmNlb2YgRXJyb3I7XG4gICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VTb3VyY2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPcmlnaW4sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50czogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICBjYWxsSWQsXG4gICAgICAgICAgICAgICAgICAgIGlzRXJyb3JJbnN0YW5jZTogaXNFcnJvciwgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBlcnJvclZhbHVlOiBpc0Vycm9yID8gc2VyaWFsaXplUmVtb3RlRXJyb3IocmVqZWN0T3JFcnJvciwgZXhjZXB0aW9uTmFtZSkgOiByZWplY3RPckVycm9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzW3Byb2NlZHVyZU5hbWVdKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlTmFtZV0uYXBwbHkoXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZUJvZHksIG1lc3NhZ2VTb3VyY2UsIG1lc3NhZ2VPcmlnaW59LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRMaXN0KSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPT4gdGhpcy5zZW5kTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VPcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzOiBcInJlc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRFcnJvcihlcnJvciwgU2VuZE1lc3NhZ2VFcnJvci5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW5kICdlcnJvcicgdHlwZSBtZXNzYWdlIHdpdGggcmVqZWN0aW9uIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZEVycm9yKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbmRFcnJvcihleCwgRXZhbHVhdGlvbkVycm9yLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRFcnJvcihuZXcgUHJvY2VkdXJlTm90Rm91bmRFcnJvcih7cHJvY2VkdXJlTmFtZX0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2U6IE1lc3NhZ2VCb2R5KSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrRnVuY3Rpb25zID0gdGhpcy5jYWxsYmFja3NbcmVzcG9uc2UuY2FsbElkXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrRnVuY3Rpb25zKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jYWxsYmFja3NbcmVzcG9uc2UuY2FsbElkXTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50cyA9PT0gXCJyZXN1bHRcIikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb25zLnJlc29sdmUocmVzcG9uc2UucmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuY29udGVudHMgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yT2JqZWN0ID0gcmVzcG9uc2UuaXNFcnJvckluc3RhbmNlID8gZGVzZXJpYWxpemVSZW1vdGVFcnJvcihyZXNwb25zZS5lcnJvclZhbHVlKSA6IHJlc3BvbnNlLmVycm9yVmFsdWU7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbnMucmVqZWN0KGVycm9yT2JqZWN0KTtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblVuZXhwZWN0ZWRSZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgIH0gICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlY3YgPSAobWVzc2FnZUV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCh0aGlzLmNvbmZpZy5vcmlnaW5XaGl0ZWxpc3QubGVuZ3RoIDwgMSB8fCB0aGlzLmNvbmZpZy5vcmlnaW5XaGl0ZWxpc3QuaW5kZXhPZihtZXNzYWdlRXZlbnQub3JpZ2luKSA+IC0xKSAmJlxuICAgICAgICAgICAgbWVzc2FnZUV2ZW50LmRhdGEgJiYgbWVzc2FnZUV2ZW50LmRhdGEudHlwZSA9PT0gUlBDX01FU1NBR0VfVFlQRSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblJlY2VpdmVcIiwgbWVzc2FnZUV2ZW50KTsgICAgXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlQm9keSA6IE1lc3NhZ2VCb2R5ID0gbWVzc2FnZUV2ZW50LmRhdGEubWVzc2FnZSBhcyBNZXNzYWdlQm9keTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlQm9keS5jb250ZW50cyA9PT0gXCJyZXF1ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXF1ZXN0KG1lc3NhZ2VCb2R5LCBtZXNzYWdlRXZlbnQuc291cmNlIGFzIFdpbmRvdywgbWVzc2FnZUV2ZW50Lm9yaWdpbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlc3BvbnNlKG1lc3NhZ2VCb2R5KTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxufSAvLyBlbmQgb2YgY2xhc3NcbiIsImV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VDYWNoZVBhcmFtZXRlcnMge1xuICAgIHNpemU6IG51bWJlcjtcbn07XG5cbmNvbnN0IERFRkFVTFRfUEFSQU1FVEVSUyA9IHtcbiAgICBzaXplOiAxMDBcbn07XG5cbmV4cG9ydCBjbGFzcyBSZXNwb25zZUNhY2hlIHtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICByZXNwb25zZXM6IHtba2V5OnN0cmluZ106YW55fSA9IHt9O1xuICAgIHBhcmFtZXRlcnM6IFJlc3BvbnNlQ2FjaGVQYXJhbWV0ZXJzO1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycz86IFBhcnRpYWw8UmVzcG9uc2VDYWNoZVBhcmFtZXRlcnM+KSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfUEFSQU1FVEVSUywgcGFyYW1ldGVycyB8fCB7fSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=