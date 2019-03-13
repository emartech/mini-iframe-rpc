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
/*! exports provided: MiniIframeError, ProcedureNotFoundError, EvaluationError, TimeoutError, SendMessageError, RemoteError, serializeRemoteError, deserializeRemoteError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeRemoteError", function() { return serializeRemoteError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeRemoteError", function() { return deserializeRemoteError; });
/* harmony import */ var _evaluation_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evaluation-error */ "./src/errors/evaluation-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EvaluationError", function() { return _evaluation_error__WEBPACK_IMPORTED_MODULE_0__["EvaluationError"]; });

/* harmony import */ var _mini_iframe_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mini-iframe-error */ "./src/errors/mini-iframe-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniIframeError", function() { return _mini_iframe_error__WEBPACK_IMPORTED_MODULE_1__["MiniIframeError"]; });

/* harmony import */ var _procedure_not_found_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./procedure-not-found-error */ "./src/errors/procedure-not-found-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProcedureNotFoundError", function() { return _procedure_not_found_error__WEBPACK_IMPORTED_MODULE_2__["ProcedureNotFoundError"]; });

/* harmony import */ var _remote_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remote-error */ "./src/errors/remote-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteError", function() { return _remote_error__WEBPACK_IMPORTED_MODULE_3__["RemoteError"]; });

/* harmony import */ var _send_message_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./send-message-error */ "./src/errors/send-message-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SendMessageError", function() { return _send_message_error__WEBPACK_IMPORTED_MODULE_4__["SendMessageError"]; });

/* harmony import */ var _timeout_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeout-error */ "./src/errors/timeout-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _timeout_error__WEBPACK_IMPORTED_MODULE_5__["TimeoutError"]; });








var remoteErrorClasses = [
    _procedure_not_found_error__WEBPACK_IMPORTED_MODULE_2__["ProcedureNotFoundError"],
    _evaluation_error__WEBPACK_IMPORTED_MODULE_0__["EvaluationError"],
    _send_message_error__WEBPACK_IMPORTED_MODULE_4__["SendMessageError"]
].reduce(function (obj, constr) {
    obj[constr.name] = constr;
    return obj;
}, {});
var serializeRemoteError = function (cause, remoteExceptionName) {
    var convert = function (err) {
        var errJSON = Object(_remote_error__WEBPACK_IMPORTED_MODULE_3__["errorToJSON"])(err);
        if (remoteExceptionName) {
            errJSON.name = remoteExceptionName;
        }
        return errJSON;
    };
    if (cause instanceof _remote_error__WEBPACK_IMPORTED_MODULE_3__["RemoteError"]) {
        // if cause is already a remoteError, return as is
        return convert(cause);
    }
    // for both Error and String type causes, create a new RemoteError 
    return convert(new _remote_error__WEBPACK_IMPORTED_MODULE_3__["RemoteError"](cause));
};
// tslint:disable-next-line:no-any
var deserializeRemoteError = function (error) {
    var constr = remoteErrorClasses[error.name] || _remote_error__WEBPACK_IMPORTED_MODULE_3__["RemoteError"];
    return new constr(error);
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
        var _this = _super.call(this, "Timeout waiting for RPC response to invocation of \"" + state.procedureName + "\" after " + state.timeoutMilliSeconds + " ms", state) || this;
        _this.procedureName = "";
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
/*! exports provided: MiniIframeRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniIframeRPC", function() { return MiniIframeRPC; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./src/errors/index.ts");
/* tslint:disable no-any no-unsafe-any */


var RPC_MESSAGE_TYPE = "mini-iframe-rpc";
var RANDOM_BASE = 36;
var CALLID_LENGTH = 8;
var timeoutMarker = {};
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
            defaultInvocationOptions: initParameters && initParameters.defaultInvocationOptions || {
                timeout: 0,
                retryLimit: 0
            },
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
        var _this = this;
        var options = invocationOptions || this.config.defaultInvocationOptions;
        var callId = this.getNextCallId();
        var messageBody = {
            contents: "request",
            callId: callId,
            procedureName: procedureName,
            argumentList: (argumentList || [])
        };
        var resultPromise = this.sendMessage(targetWindow, targetOrigin, messageBody).then(function () { return new Promise(function (resolve, reject) {
            var callbacks = {
                result: function (result) {
                    delete _this.callbacks[callId];
                    resolve(result);
                },
                error: function (err) {
                    delete _this.callbacks[callId];
                    reject(err);
                }
            };
            _this.callbacks[callId] = callbacks;
        }); });
        if (options.timeout > 0) {
            resultPromise = this.timeboxPromise(resultPromise, options.timeout).then(function (result) { return result; }, function (error) {
                if (error === timeoutMarker) {
                    // retry?
                    // when retry exhaused raise timeout error
                    throw new _errors__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]({ procedureName: procedureName, timeoutMilliSeconds: options.timeout });
                }
                else {
                    throw error;
                }
            });
        }
        return resultPromise;
    };
    MiniIframeRPC.prototype.close = function () {
        this.internalEventCallback("onClose");
        this.config.windowRef.removeEventListener("message", this.recv);
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
    MiniIframeRPC.prototype.timeboxPromise = function (originalPromise, timeoutMilliseconds) {
        var _this = this;
        return Promise.race([
            originalPromise,
            new Promise(function (_resolve, reject) {
                _this.config.windowRef.setTimeout(function () { return reject(timeoutMarker); }, timeoutMilliseconds);
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
            if (response.contents === "result") {
                callbackFunctions.result(response.result);
            }
            else if (response.contents === "error") {
                var errorObject = response.isErrorInstance ? Object(_errors__WEBPACK_IMPORTED_MODULE_1__["deserializeRemoteError"])(response.errorValue) : response.errorValue;
                callbackFunctions.error(errorObject);
            }
        }
        else {
            this.internalEventCallback("onUnexpectedResponse", response);
        }
    };
    return MiniIframeRPC;
}()); // end of class



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvZXZhbHVhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL2luZGV4LnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvbWluaS1pZnJhbWUtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL2Vycm9ycy9wcm9jZWR1cmUtbm90LWZvdW5kLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvcmVtb3RlLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvc2VuZC1tZXNzYWdlLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvdGltZW91dC1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvbWluaS1pZnJhbWUtcnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRix5QkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7O0FBRU87QUFDUDtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFTztBQUNQO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxjQUFjO0FBQzFFO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBOztBQUVPO0FBQ1AsbUNBQW1DLG9DQUFvQztBQUN2RTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1AsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSxnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxpQkFBaUIsc0ZBQXNGLGFBQWEsRUFBRTtBQUN0SCxzQkFBc0IsZ0NBQWdDLHFDQUFxQywwQ0FBMEMsRUFBRSxFQUFFLEdBQUc7QUFDNUksMkJBQTJCLE1BQU0sZUFBZSxFQUFFLFlBQVksb0JBQW9CLEVBQUU7QUFDcEYsc0JBQXNCLG9HQUFvRztBQUMxSCw2QkFBNkIsdUJBQXVCO0FBQ3BELDRCQUE0Qix3QkFBd0I7QUFDcEQsMkJBQTJCLHlEQUF5RDtBQUNwRjs7QUFFTztBQUNQO0FBQ0EsaUJBQWlCLDRDQUE0QyxTQUFTLEVBQUUscURBQXFELGFBQWEsRUFBRTtBQUM1SSx5QkFBeUIsNkJBQTZCLG9CQUFvQixnREFBZ0QsZ0JBQWdCLEVBQUUsS0FBSztBQUNqSjs7QUFFTztBQUNQO0FBQ0E7QUFDQSwyR0FBMkcsc0ZBQXNGLGFBQWEsRUFBRTtBQUNoTixzQkFBc0IsOEJBQThCLGdEQUFnRCx1REFBdUQsRUFBRSxFQUFFLEdBQUc7QUFDbEssNENBQTRDLHNDQUFzQyxVQUFVLG9CQUFvQixFQUFFLEVBQUUsVUFBVTtBQUM5SDs7QUFFTztBQUNQLGdDQUFnQyx1Q0FBdUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxrQkFBa0I7QUFDakg7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRDQUE0QztBQUM1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekw2QztBQUU3QztJQUFxQyx5RUFBVztJQUU1Qyx5QkFBWSxLQUFrQjs7UUFBOUIsWUFDSSxrQkFBTSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBSXJCO1FBSEcsMEVBQTBFO1FBQzFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxFQUFFLFdBQVcsU0FBUyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7UUFDN0UsS0FBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsOENBQThDOztJQUNwRixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLENBUm9DLHlEQUFXLEdBUS9DOzs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRDtBQUNDO0FBQ2U7QUFDTztBQUNwQjtBQUNUO0FBRWtFO0FBUS9HLElBQU0sa0JBQWtCLEdBQUk7SUFDeEIsaUZBQXNCO0lBQ3RCLGlFQUFlO0lBQ2Ysb0VBQWdCO0NBQ2MsQ0FBQyxNQUFNLENBQ3JDLFVBQUMsR0FBYSxFQUFFLE1BQTZCO0lBQ3pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBRTFCLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQyxFQUFFLEVBQWUsQ0FBYyxDQUFDO0FBRTlCLElBQU0sb0JBQW9CLEdBQUcsVUFBQyxLQUF1QixFQUFFLG1CQUE0QjtJQUV0RixJQUFNLE9BQU8sR0FBRyxVQUFDLEdBQWdCO1FBQzdCLElBQU0sT0FBTyxHQUFlLGlFQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsSUFBSSxtQkFBbUIsRUFBRTtZQUNyQixPQUFPLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDO1NBQ3RDO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksS0FBSyxZQUFZLHlEQUFXLEVBQUU7UUFDOUIsa0RBQWtEO1FBQ2xELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCO0lBQ0QsbUVBQW1FO0lBRW5FLE9BQU8sT0FBTyxDQUFDLElBQUkseURBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQztBQUVGLGtDQUFrQztBQUMzQixJQUFNLHNCQUFzQixHQUFHLFVBQUMsS0FBaUI7SUFDcEQsSUFBTSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLHlEQUFXLENBQUM7SUFFN0QsT0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERGO0lBQXFDLHlFQUFLO0lBSXRDLGtDQUFrQztJQUNsQyx5QkFBWSxPQUFnQixFQUFFLEtBQVc7O1FBQXpDLFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFNBU2pCO1FBUkcsS0FBSSxDQUFDLFNBQVMsR0FBSSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksS0FBSyxFQUFFO1lBQ1AsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDOUI7UUFDRCwwRUFBMEU7UUFDMUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFJLEVBQUUsV0FBVyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBCQUEwQjtRQUM3RSxLQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxzQ0FBc0M7O0lBRTVFLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQ0FoQm9DLEtBQUssR0FnQnpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEI0QztBQUU3QztJQUE0QyxnRkFBVztJQUluRCxnQ0FBWSxLQUFzQzs7UUFBbEQsWUFDSSxrQkFBTSx1QkFBcUIsS0FBSyxDQUFDLGFBQWEsNkNBQTBDLENBQUMsU0FPNUY7UUFWRCxtQkFBYSxHQUFHLFNBQVMsQ0FBQztRQUl0QixJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDckIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1NBQzVDO1FBQ0QsMEVBQTBFO1FBQzFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxFQUFFLFdBQVcsU0FBUyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7UUFDN0UsS0FBSSxDQUFDLElBQUksR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyw4Q0FBOEM7O0lBQzNGLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQ0FiMkMseURBQVcsR0FhdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm1EO0FBSTdDLFNBQVMsV0FBVyxDQUFtQixHQUFNO0lBQ2hELDRFQUE0RTtJQUNyRSx5QkFBTyxFQUFFLGVBQUksRUFBRSxpQkFBSyxDQUFRO0lBRW5DLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLE9BQU8sV0FBRSxLQUFLLFNBQUUsSUFBSSxRQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUVELElBQU0sY0FBYyxHQUFHLFVBQUMsS0FBdUI7SUFDM0MsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDM0IsT0FBTyxLQUFLLENBQUM7S0FDaEI7U0FBTTtRQUNILE9BQU8sS0FBRyxLQUFLLENBQUMsT0FBUyxDQUFDO0tBQzdCO0FBQ0wsQ0FBQztBQUVEO0lBQWlDLHFFQUFlO0lBSTVDLHFCQUFZLEtBQXVCO1FBQW5DLFlBQ0ksa0JBQU0sY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBRy9CO1FBRkcsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxLQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyw4Q0FBOEM7O0lBQ2hGLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQ0FUZ0Msa0VBQWUsR0FTL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjRDO0FBRTdDO0lBQXNDLDBFQUFXO0lBRTdDLDBCQUFZLEtBQWtCO1FBQTlCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUVyQjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsOENBQThDOztJQUNyRixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLENBTnFDLHlEQUFXLEdBTWhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUm1EO0FBRXBEO0lBQWtDLHNFQUFlO0lBSzdDLHNCQUFZLEtBQTRCOztRQUF4QyxZQUNJLGtCQUFNLHlEQUFzRCxLQUFLLENBQUMsYUFBYSxpQkFBVyxLQUFLLENBQUMsbUJBQW1CLFFBQUssRUFBRSxLQUFLLENBQUMsU0FJbkk7UUFSRCxtQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQix5QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFJcEIsMEVBQTBFO1FBQzFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxFQUFFLFdBQVcsU0FBUyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7UUFDN0UsS0FBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsc0RBQXNEOztJQUN6RixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLENBWGlDLGtFQUFlLEdBV2hEOzs7Ozs7Ozs7Ozs7OztBQ1pEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBQXlDOztBQUVtSDtBQUU1SixJQUFNLGdCQUFnQixHQUFHLGlCQUFpQixDQUFDO0FBQzNDLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN2QixJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFrRHhCLElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUV6QjtJQUtJLHVCQUFZLGNBQStCO1FBQTNDLGlCQVlDO1FBZk8sY0FBUyxHQUFxQyxFQUFFLENBQUM7UUFDakQseUJBQW9CLEdBQTJDLEVBQUUsQ0FBQztRQXlLbEUsU0FBSSxHQUFHLFVBQUMsWUFBMEI7WUFDdEMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekcsWUFBWSxDQUFDLElBQUksSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBZ0IsRUFBRTtnQkFDbEUsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDdEQsSUFBTSxXQUFXLEdBQWlCLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBc0IsQ0FBQztnQkFDM0UsSUFBSSxXQUFXLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtvQkFDcEMsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsTUFBZ0IsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzlGO2dCQUVELE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMzQztRQUNMLENBQUM7UUFqTEcsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNWLFNBQVMsRUFBRSxjQUFjLElBQUksY0FBYyxDQUFDLFNBQVMsSUFBSSxNQUFNO1lBQy9ELGVBQWUsRUFBRSxjQUFjLElBQUksY0FBYyxDQUFDLGVBQWUsSUFBSSxFQUFFO1lBQ3ZFLHdCQUF3QixFQUFFLGNBQWMsSUFBSSxjQUFjLENBQUMsd0JBQXdCLElBQUk7Z0JBQ25GLE9BQU8sRUFBRSxDQUFDO2dCQUNWLFVBQVUsRUFBRSxDQUFDO2FBQ2hCO1lBQ0QsY0FBYyxFQUFFLGNBQWMsSUFBSSxjQUFjLENBQUMsY0FBYyxJQUFJLEVBQUU7U0FDeEUsQ0FBQztRQUNGLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsYUFBcUIsRUFBRSxjQUF3QztRQUNwRSxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7UUFDdkUsSUFBSSxjQUFjLEVBQUU7WUFDaEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxHQUFHLGNBQWMsQ0FBQztTQUM3RDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFRLFlBQW9CLEVBQUUsWUFBMkIsRUFBRSxhQUFxQixFQUFFLFlBQW9CLEVBQUUsaUJBQXFDO1FBQTdJLGlCQXFDQztRQXBDRyxJQUFNLE9BQU8sR0FBRyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1FBQzFFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwQyxJQUFNLFdBQVcsR0FBdUI7WUFDcEMsUUFBUSxFQUFFLFNBQVM7WUFDbkIsTUFBTTtZQUNOLGFBQWE7WUFDYixZQUFZLEVBQUUsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1NBQUMsQ0FBQztRQUN4QyxJQUFJLGFBQWEsR0FBaUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLFdBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0gsSUFBTSxTQUFTLEdBQXVCO2dCQUNsQyxNQUFNLEVBQUUsVUFBQyxNQUFZO29CQUNqQixPQUFPLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxLQUFLLEVBQUUsVUFBQyxHQUFTO29CQUNiLE9BQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixDQUFDO2FBQ0osQ0FBQztZQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQVpxRyxDQVlyRyxDQUFDLENBQUM7UUFDSixJQUFJLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNwRSxnQkFBTSxJQUFJLGFBQU0sRUFBTixDQUFNLEVBQ2hCLGVBQUs7Z0JBQ0QsSUFBSSxLQUFLLEtBQUssYUFBYSxFQUFFO29CQUN6QixTQUFTO29CQUNULDBDQUEwQztvQkFDMUMsTUFBTSxJQUFJLG9EQUFZLENBQUMsRUFBQyxhQUFhLGlCQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO2lCQUNqRjtxQkFBTTtvQkFDSCxNQUFNLEtBQUssQ0FBQztpQkFDZjtZQUNMLENBQUMsQ0FDSixDQUFDO1NBQ0w7UUFFRCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyw2Q0FBcUIsR0FBN0IsVUFBOEIscUJBQWdEO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDMUYsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM3RCxJQUFJLEVBQUUsRUFBRTtZQUNKLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVPLHNDQUFjLEdBQXRCLFVBQXVCLGVBQTZCLEVBQUUsbUJBQTJCO1FBQWpGLGlCQVNDO1FBUkcsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2hCLGVBQWU7WUFDZixJQUFJLE9BQU8sQ0FBQyxVQUFDLFFBQVEsRUFBRSxNQUFNO2dCQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQzVCLGNBQU0sYUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFyQixDQUFxQixFQUMzQixtQkFBbUIsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQztTQUNMLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxxQ0FBYSxHQUFyQjtRQUNJLElBQUksUUFBUSxHQUFtQixJQUFJLENBQUM7UUFDcEMsT0FBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLFFBQVEsR0FBRyxPQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBRyxDQUFDO1NBQzFHO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQXFCLFlBQW9CLEVBQUUsWUFBMkIsRUFBRSxXQUF3QjtRQUFoRyxpQkFjQztRQWJHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFJO2dCQUNBLElBQU0sV0FBVyxHQUFHO29CQUNoQixNQUFNLEVBQUUsZ0JBQWdCO29CQUN4QixTQUFTLEVBQUUsV0FBVztpQkFDekIsQ0FBQztnQkFDRixLQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQzlFLFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFlBQVksSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDM0QsT0FBTyxFQUFFLENBQUM7YUFDYjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRWEscUNBQWEsR0FBM0IsVUFBNkIsV0FBK0IsRUFBRSxhQUFxQixFQUFFLGFBQXFCOzs7OztnQkFDaEcsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQzVCLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO2dCQUMxQyxZQUFZLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQztnQkFDeEMsY0FBYyxHQUFHLENBQUMsYUFBYSxJQUFJLGFBQWEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO2dCQUNuRixTQUFTLEdBQUcsVUFBQyxhQUFrQixFQUFFLGFBQXFCO29CQUN4RCxJQUFNLE9BQU8sR0FBRyxhQUFhLFlBQVksS0FBSyxDQUFDO29CQUMvQyxLQUFJLENBQUMsV0FBVyxDQUNaLGFBQWEsRUFDYixjQUFjLEVBQ2Q7d0JBQ0ksUUFBUSxFQUFFLE9BQU87d0JBQ2pCLE1BQU07d0JBQ04sZUFBZSxFQUFFLE9BQU87d0JBQ3hCLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLG9FQUFvQixDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYTtxQkFDM0YsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ0wsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQzFDLElBQUk7d0JBQ0Esc0JBQU8sT0FBTyxDQUFDLE9BQU8sQ0FDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FDMUMsRUFBQyxXQUFXLGVBQUUsYUFBYSxpQkFBRSxhQUFhLGlCQUFDLEVBQzNDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNmLGdCQUFNLElBQUksWUFBSSxDQUFDLFdBQVcsQ0FDdEIsYUFBYSxFQUNiLGNBQWMsRUFDZDtnQ0FDSSxRQUFRLEVBQUUsUUFBUTtnQ0FDbEIsTUFBTTtnQ0FDTixNQUFNOzZCQUNULENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBSztnQ0FDVixTQUFTLENBQUMsS0FBSyxFQUFFLHdEQUFnQixDQUFDLElBQUksQ0FBQzs0QkFDM0MsQ0FBQyxDQUFDLEVBVEksQ0FTSjs0QkFDTixpREFBaUQ7NEJBQ2pELFNBQVMsQ0FBQyxFQUFDO3FCQUMxQjtvQkFBQyxPQUFPLEVBQUUsRUFBRTt3QkFDVCxzQkFBTyxTQUFTLENBQUMsRUFBRSxFQUFFLHVEQUFlLENBQUMsSUFBSSxDQUFDLEVBQUM7cUJBQzlDO2lCQUNKO3FCQUFNO29CQUNILHNCQUFPLFNBQVMsQ0FBQyxJQUFJLDhEQUFzQixDQUFDLEVBQUMsYUFBYSxpQkFBQyxDQUFDLENBQUMsRUFBQztpQkFDakU7Ozs7S0FDSjtJQUVPLHNDQUFjLEdBQXRCLFVBQXVCLFFBQXFCO1FBQ3hDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsSUFBSSxpQkFBaUIsRUFBRTtZQUNuQixJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzdDO2lCQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7Z0JBQ3RDLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLHNFQUFzQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDakgsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNoRTtJQUNMLENBQUM7SUFlTCxvQkFBQztBQUFELENBQUMsS0FBQyxlQUFlIiwiZmlsZSI6Im1pbmktaWZyYW1lLXJwYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibWluaS1pZnJhbWUtcnBjXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbmktaWZyYW1lLXJwY1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW5pLWlmcmFtZS1ycGNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWluaS1pZnJhbWUtcnBjLnRzXCIpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBSZW1vdGVFcnJvciB9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcblxuZXhwb3J0IGNsYXNzIEV2YWx1YXRpb25FcnJvciBleHRlbmRzIFJlbW90ZUVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yOiBSZW1vdGVFcnJvcikge1xuICAgICAgICBzdXBlcihlcnJvci5jYXVzZSk7XG4gICAgICAgIC8vIHNlZTogdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svcmVsZWFzZS1ub3Rlcy90eXBlc2NyaXB0LTItMi5odG1sXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7IC8vIHJlc3RvcmUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgIHRoaXMubmFtZSA9IEV2YWx1YXRpb25FcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7RXZhbHVhdGlvbkVycm9yfSBmcm9tICcuL2V2YWx1YXRpb24tZXJyb3InO1xuaW1wb3J0IHtNaW5pSWZyYW1lRXJyb3J9IGZyb20gJy4vbWluaS1pZnJhbWUtZXJyb3InO1xuaW1wb3J0IHtQcm9jZWR1cmVOb3RGb3VuZEVycm9yfSBmcm9tICcuL3Byb2NlZHVyZS1ub3QtZm91bmQtZXJyb3InO1xuaW1wb3J0IHtlcnJvclRvSlNPTiwgUmVtb3RlRXJyb3IsIFJlbW90ZUVycm9yQ2F1c2V9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcbmltcG9ydCB7U2VuZE1lc3NhZ2VFcnJvcn0gZnJvbSAnLi9zZW5kLW1lc3NhZ2UtZXJyb3InO1xuaW1wb3J0IHtUaW1lb3V0RXJyb3J9IGZyb20gJy4vdGltZW91dC1lcnJvcic7XG5cbmV4cG9ydCB7TWluaUlmcmFtZUVycm9yLCBQcm9jZWR1cmVOb3RGb3VuZEVycm9yLCBFdmFsdWF0aW9uRXJyb3IsIFRpbWVvdXRFcnJvciwgU2VuZE1lc3NhZ2VFcnJvciwgUmVtb3RlRXJyb3J9O1xuXG50eXBlIFJlbW90ZUVycm9yQ29uc3RydWN0b3IgPSBuZXcgKHN0YXRlOiBQYXJ0aWFsPFJlbW90ZUVycm9yPikgPT4gUmVtb3RlRXJyb3I7XG5cbnR5cGUgRVJST1JfTUFQID0ge1xuICAgIFtrZXk6IHN0cmluZ106IFJlbW90ZUVycm9yQ29uc3RydWN0b3Jcbn1cblxuY29uc3QgcmVtb3RlRXJyb3JDbGFzc2VzID0gKFtcbiAgICBQcm9jZWR1cmVOb3RGb3VuZEVycm9yLFxuICAgIEV2YWx1YXRpb25FcnJvcixcbiAgICBTZW5kTWVzc2FnZUVycm9yXG4gICAgXSBhcyBSZW1vdGVFcnJvckNvbnN0cnVjdG9yW10pLnJlZHVjZShcbiAgICAob2JqOkVSUk9SX01BUCwgY29uc3RyOlJlbW90ZUVycm9yQ29uc3RydWN0b3IpID0+IHtcbiAgICAgICAgb2JqW2NvbnN0ci5uYW1lXSA9IGNvbnN0cjtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sIHt9IGFzIEVSUk9SX01BUCkgYXMgRVJST1JfTUFQOyAgICBcblxuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZVJlbW90ZUVycm9yID0gKGNhdXNlOiBSZW1vdGVFcnJvckNhdXNlLCByZW1vdGVFeGNlcHRpb25OYW1lPzogc3RyaW5nKTpSZW1vdGVFcnJvciA9PiB7ICAgIFxuICAgIFxuICAgIGNvbnN0IGNvbnZlcnQgPSAoZXJyOiBSZW1vdGVFcnJvcik6UmVtb3RlRXJyb3IgPT4ge1xuICAgICAgICBjb25zdCBlcnJKU09OOlJlbW90ZUVycm9yID0gZXJyb3JUb0pTT04oZXJyKTsgICAgICAgIFxuICAgICAgICBpZiAocmVtb3RlRXhjZXB0aW9uTmFtZSkge1xuICAgICAgICAgICAgZXJySlNPTi5uYW1lID0gcmVtb3RlRXhjZXB0aW9uTmFtZTtcbiAgICAgICAgfSAgICAgXG5cbiAgICAgICAgcmV0dXJuIGVyckpTT047XG4gICAgfVxuICAgIGlmIChjYXVzZSBpbnN0YW5jZW9mIFJlbW90ZUVycm9yKSB7XG4gICAgICAgIC8vIGlmIGNhdXNlIGlzIGFscmVhZHkgYSByZW1vdGVFcnJvciwgcmV0dXJuIGFzIGlzXG4gICAgICAgIHJldHVybiBjb252ZXJ0KGNhdXNlKTtcbiAgICB9ICAgIFxuICAgIC8vIGZvciBib3RoIEVycm9yIGFuZCBTdHJpbmcgdHlwZSBjYXVzZXMsIGNyZWF0ZSBhIG5ldyBSZW1vdGVFcnJvciBcblxuICAgIHJldHVybiBjb252ZXJ0KG5ldyBSZW1vdGVFcnJvcihjYXVzZSkpOyAgICBcbn07ICAgXG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBjb25zdCBkZXNlcmlhbGl6ZVJlbW90ZUVycm9yID0gKGVycm9yOlJlbW90ZUVycm9yKSA9PiB7XG4gICAgY29uc3QgY29uc3RyID0gcmVtb3RlRXJyb3JDbGFzc2VzW2Vycm9yLm5hbWVdIHx8IFJlbW90ZUVycm9yO1xuXG4gICAgcmV0dXJuIG5ldyBjb25zdHIoZXJyb3IpO1xufTsiLCJleHBvcnQgY2xhc3MgTWluaUlmcmFtZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXG4gICAgdGltZXN0YW1wOm51bWJlcjtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nLCBzdGF0ZT86IGFueSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSDCoCsobmV3IERhdGUoKSk7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2VlOiB0eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9yZWxlYXNlLW5vdGVzL3R5cGVzY3JpcHQtMi0yLmh0bWxcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTsgLy8gcmVzdG9yZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgdGhpcy5uYW1lID0gTWluaUlmcmFtZUVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgXG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZW1vdGVFcnJvciB9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcblxuZXhwb3J0IGNsYXNzIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBSZW1vdGVFcnJvciB7XG5cbiAgICBwcm9jZWR1cmVOYW1lID0gXCJ1bmtub3duXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGFydGlhbDxQcm9jZWR1cmVOb3RGb3VuZEVycm9yPikge1xuICAgICAgICBzdXBlcihgUmVtb3RlIHByb2NlZHVyZSAnJHtzdGF0ZS5wcm9jZWR1cmVOYW1lfScgbm90IHJlZ2lzdGVyZWQgaW4gcmVtb3RlIFJQQyBpbnN0YW5jZS5gKTtcbiAgICAgICAgaWYgKHN0YXRlLnByb2NlZHVyZU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2VkdXJlTmFtZSA9IHN0YXRlLnByb2NlZHVyZU5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2VlOiB0eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9yZWxlYXNlLW5vdGVzL3R5cGVzY3JpcHQtMi0yLmh0bWxcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTsgLy8gcmVzdG9yZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgdGhpcy5uYW1lID0gUHJvY2VkdXJlTm90Rm91bmRFcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93ICAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7TWluaUlmcmFtZUVycm9yfSBmcm9tICcuL21pbmktaWZyYW1lLWVycm9yJztcblxuZXhwb3J0IHR5cGUgUmVtb3RlRXJyb3JDYXVzZSA9IEVycm9yIHwgc3RyaW5nO1xuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JUb0pTT048VCBleHRlbmRzIEVycm9yPiAoZXJyOiBUKTpUIHtcbiAgICAvLyBtZXNzYWdlLCBuYW1lLCBzdGFjayBhcmUgbm90IGVubnVtZXJhYmxlLCBzbyB3ZSBtdXN0IGV4cGxpY2l0bHkgZ2V0IHRoZW0uXG4gICAgY29uc3Qge21lc3NhZ2UsIG5hbWUsIHN0YWNrfSA9IGVycjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHttZXNzYWdlLCBzdGFjaywgbmFtZX0sIGVycik7XG59XG5cbmNvbnN0IGNhdXNlVG9NZXNzYWdlID0gKGNhdXNlOiBSZW1vdGVFcnJvckNhdXNlKTpzdHJpbmcgPT4ge1xuICAgIGlmICh0eXBlb2YgY2F1c2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBjYXVzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYCR7Y2F1c2UubWVzc2FnZX1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW90ZUVycm9yIGV4dGVuZHMgTWluaUlmcmFtZUVycm9yIHtcbiAgICAgICAgXG4gICAgY2F1c2U6IFJlbW90ZUVycm9yQ2F1c2U7XG5cbiAgICBjb25zdHJ1Y3RvcihjYXVzZTogUmVtb3RlRXJyb3JDYXVzZSkgeyAgICAgICAgXG4gICAgICAgIHN1cGVyKGNhdXNlVG9NZXNzYWdlKGNhdXNlKSk7XG4gICAgICAgIHRoaXMuY2F1c2UgPSAodHlwZW9mIGNhdXNlID09PSAnc3RyaW5nJykgPyBjYXVzZSA6IGVycm9yVG9KU09OKGNhdXNlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gUmVtb3RlRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZW1vdGVFcnJvciB9IGZyb20gJy4vcmVtb3RlLWVycm9yJztcblxuZXhwb3J0IGNsYXNzIFNlbmRNZXNzYWdlRXJyb3IgZXh0ZW5kcyBSZW1vdGVFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvcjogUmVtb3RlRXJyb3IpIHtcbiAgICAgICAgc3VwZXIoZXJyb3IuY2F1c2UpOyAgICAgICAgXG4gICAgICAgIHRoaXMubmFtZSA9IFNlbmRNZXNzYWdlRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQge01pbmlJZnJhbWVFcnJvcn0gZnJvbSAnLi9taW5pLWlmcmFtZS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBUaW1lb3V0RXJyb3IgZXh0ZW5kcyBNaW5pSWZyYW1lRXJyb3Ige1xuXG4gICAgcHJvY2VkdXJlTmFtZSA9IFwiXCI7XG4gICAgdGltZW91dE1pbGxpU2Vjb25kcyA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGFydGlhbDxUaW1lb3V0RXJyb3I+KSB7XG4gICAgICAgIHN1cGVyKGBUaW1lb3V0IHdhaXRpbmcgZm9yIFJQQyByZXNwb25zZSB0byBpbnZvY2F0aW9uIG9mIFwiJHtzdGF0ZS5wcm9jZWR1cmVOYW1lfVwiIGFmdGVyICR7c3RhdGUudGltZW91dE1pbGxpU2Vjb25kc30gbXNgLCBzdGF0ZSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyBzZWU6IHR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL3JlbGVhc2Utbm90ZXMvdHlwZXNjcmlwdC0yLTIuaHRtbFxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpOyAvLyByZXN0b3JlIHByb3RvdHlwZSBjaGFpblxuICAgICAgICB0aGlzLm5hbWUgPSBUaW1lb3V0RXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgICAgICAgICAgXG4gICAgfVxufSIsIlxuLyogdHNsaW50OmRpc2FibGUgbm8tYW55IG5vLXVuc2FmZS1hbnkgKi9cblxuaW1wb3J0IHtkZXNlcmlhbGl6ZVJlbW90ZUVycm9yLCBFdmFsdWF0aW9uRXJyb3IsIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IsIFJlbW90ZUVycm9yLCBTZW5kTWVzc2FnZUVycm9yLCBzZXJpYWxpemVSZW1vdGVFcnJvciwgVGltZW91dEVycm9yfSBmcm9tICcuL2Vycm9ycyc7XG5cbmNvbnN0IFJQQ19NRVNTQUdFX1RZUEUgPSBcIm1pbmktaWZyYW1lLXJwY1wiO1xuY29uc3QgUkFORE9NX0JBU0UgPSAzNjtcbmNvbnN0IENBTExJRF9MRU5HVEggPSA4O1xuXG5pbnRlcmZhY2UgUmVxdWVzdE1lc3NhZ2VCb2R5ICB7XG4gICAgY29udGVudHM6IFwicmVxdWVzdFwiO1xuICAgIGNhbGxJZDogc3RyaW5nO1xuICAgIHByb2NlZHVyZU5hbWU6IHN0cmluZztcbiAgICBhcmd1bWVudExpc3Q6IGFueVtdXG59XG5cbmludGVyZmFjZSBSZXN1bHRNZXNzYWdlQm9keSB7XG4gICAgY29udGVudHM6IFwicmVzdWx0XCI7XG4gICAgY2FsbElkOiBzdHJpbmc7ICAgIFxuICAgIHJlc3VsdDogYW55XG59XG5cbmludGVyZmFjZSBFcnJvck1lc3NhZ2VCb2R5IHtcbiAgICBjb250ZW50czogXCJlcnJvclwiO1xuICAgIGNhbGxJZDogc3RyaW5nO1xuICAgIGlzRXJyb3JJbnN0YW5jZTogYm9vbGVhbjtcbiAgICBlcnJvclZhbHVlOiBSZW1vdGVFcnJvcjtcbn1cblxudHlwZSBNZXNzYWdlQm9keSA9IFJlcXVlc3RNZXNzYWdlQm9keSB8IFJlc3VsdE1lc3NhZ2VCb2R5IHwgRXJyb3JNZXNzYWdlQm9keTtcblxuZXhwb3J0IGludGVyZmFjZSBJbnZvY2F0aW9uT3B0aW9ucyB7XG4gICAgdGltZW91dDogbnVtYmVyO1xuICAgIHJldHJ5TGltaXQ6IG51bWJlcjtcbn1cblxudHlwZSBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tUeXBlID0gJ29uVW5leHBlY3RlZFJlc3BvbnNlJyB8ICdvblJlY2VpdmUnIHwgJ29uU2VuZCcgfCAnb25SZWdpc3RlcicgfCAnb25DbG9zZSc7XG5cbi8vIE9wdGlvbmFsIGNhbGxiYWNrcyBmb3IgaW50ZXJuYWwgZXZlbnRzIHVzZWZ1bCBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nXG5leHBvcnQgdHlwZSBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tzID0ge1xuICAgIFtrZXkgaW4gSW50ZXJuYWxFdmVudENhbGxiYWNrVHlwZV06ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdFBhcmFtZXRlcnMge1xuICAgIHdpbmRvd1JlZjogV2luZG93O1xuICAgIG9yaWdpbldoaXRlbGlzdDogc3RyaW5nW107XG4gICAgZGVmYXVsdEludm9jYXRpb25PcHRpb25zOiBJbnZvY2F0aW9uT3B0aW9ucztcbiAgICBldmVudENhbGxiYWNrczogUGFydGlhbDxJbnRlcm5hbEV2ZW50Q2FsbGJhY2tzPjtcbn1cblxuaW50ZXJmYWNlIENhbGxiYWNrRnVuY3Rpb25zIHtcbiAgICByZXN1bHQ6IChyZXN1bHQ6IGFueSkgPT4gdm9pZCxcbiAgICBlcnJvcjogKGVycm9yOiBhbnkpID0+IHZvaWRcbn1cblxudHlwZSBQcm9jZWR1cmVJbXBsZW1lbnRhdGlvbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55O1xuXG5jb25zdCB0aW1lb3V0TWFya2VyID0ge307XG5cbmV4cG9ydCBjbGFzcyBNaW5pSWZyYW1lUlBDIHtcbiAgICBwcml2YXRlIGNvbmZpZzogSW5pdFBhcmFtZXRlcnM7XG4gICAgcHJpdmF0ZSBjYWxsYmFja3M6IHtba2V5OnN0cmluZ106Q2FsbGJhY2tGdW5jdGlvbnN9ID0ge307XG4gICAgcHJpdmF0ZSByZWdpc3RlcmVkUHJvY2VkdXJlczp7W2tleTpzdHJpbmddOiBQcm9jZWR1cmVJbXBsZW1lbnRhdGlvbn0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKGluaXRQYXJhbWV0ZXJzPzogSW5pdFBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICB3aW5kb3dSZWY6IGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLndpbmRvd1JlZiB8fCB3aW5kb3csXG4gICAgICAgICAgICBvcmlnaW5XaGl0ZWxpc3Q6IGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLm9yaWdpbldoaXRlbGlzdCB8fCBbXSxcbiAgICAgICAgICAgIGRlZmF1bHRJbnZvY2F0aW9uT3B0aW9uczogaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMuZGVmYXVsdEludm9jYXRpb25PcHRpb25zIHx8IHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAwLFxuICAgICAgICAgICAgICAgIHJldHJ5TGltaXQ6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudENhbGxiYWNrczogaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMuZXZlbnRDYWxsYmFja3MgfHwge31cbiAgICAgICAgfTtcbiAgICAgICAgLy8gYXR0YWNoIGxpc3RlbmVyXG4gICAgICAgIHRoaXMuY29uZmlnLndpbmRvd1JlZi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLnJlY3YpO1xuICAgIH0gICAgICAgIFxuXG4gICAgcmVnaXN0ZXIocHJvY2VkdXJlTmFtZTogc3RyaW5nLCBpbXBsZW1lbnRhdGlvbj86IFByb2NlZHVyZUltcGxlbWVudGF0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25SZWdpc3RlclwiLCBwcm9jZWR1cmVOYW1lLCBpbXBsZW1lbnRhdGlvbilcbiAgICAgICAgaWYgKGltcGxlbWVudGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzW3Byb2NlZHVyZU5hbWVdID0gaW1wbGVtZW50YXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yZWdpc3RlcmVkUHJvY2VkdXJlc1twcm9jZWR1cmVOYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGludm9rZSAodGFyZ2V0V2luZG93OiBXaW5kb3csIHRhcmdldE9yaWdpbjogc3RyaW5nIHwgbnVsbCwgcHJvY2VkdXJlTmFtZTogc3RyaW5nLCBhcmd1bWVudExpc3Q/OiBhbnlbXSwgaW52b2NhdGlvbk9wdGlvbnM/OiBJbnZvY2F0aW9uT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBpbnZvY2F0aW9uT3B0aW9ucyB8fCB0aGlzLmNvbmZpZy5kZWZhdWx0SW52b2NhdGlvbk9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGNhbGxJZCA9IHRoaXMuZ2V0TmV4dENhbGxJZCgpO1xuICAgICAgICBjb25zdCBtZXNzYWdlQm9keTogUmVxdWVzdE1lc3NhZ2VCb2R5ID0ge1xuICAgICAgICAgICAgY29udGVudHM6IFwicmVxdWVzdFwiLFxuICAgICAgICAgICAgY2FsbElkLFxuICAgICAgICAgICAgcHJvY2VkdXJlTmFtZSxcbiAgICAgICAgICAgIGFyZ3VtZW50TGlzdDogKGFyZ3VtZW50TGlzdCB8fCBbXSl9O1xuICAgICAgICBsZXQgcmVzdWx0UHJvbWlzZTogUHJvbWlzZTxhbnk+ID0gdGhpcy5zZW5kTWVzc2FnZSh0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgbWVzc2FnZUJvZHkpLnRoZW4oKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzIDogQ2FsbGJhY2tGdW5jdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0OiAocmVzdWx0IDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1tjYWxsSWRdO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogKGVyciA6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jYWxsYmFja3NbY2FsbElkXTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzW2NhbGxJZF0gPSBjYWxsYmFja3M7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKG9wdGlvbnMudGltZW91dCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdFByb21pc2UgPSB0aGlzLnRpbWVib3hQcm9taXNlKHJlc3VsdFByb21pc2UsIG9wdGlvbnMudGltZW91dCkudGhlbihcbiAgICAgICAgICAgICAgICByZXN1bHQgPT4gcmVzdWx0LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yID09PSB0aW1lb3V0TWFya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXRyeT9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcmV0cnkgZXhoYXVzZWQgcmFpc2UgdGltZW91dCBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFRpbWVvdXRFcnJvcih7cHJvY2VkdXJlTmFtZSwgdGltZW91dE1pbGxpU2Vjb25kczogb3B0aW9ucy50aW1lb3V0fSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvbkNsb3NlXCIpO1xuICAgICAgICB0aGlzLmNvbmZpZy53aW5kb3dSZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5yZWN2KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGludGVybmFsRXZlbnRDYWxsYmFjayhpbnRlcm5hbEV2ZW50Q2FsbGJhY2s6IEludGVybmFsRXZlbnRDYWxsYmFja1R5cGUsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IGNiID0gdGhpcy5jb25maWcuZXZlbnRDYWxsYmFja3NbaW50ZXJuYWxFdmVudENhbGxiYWNrXTtcbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICBjYi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdGltZWJveFByb21pc2Uob3JpZ2luYWxQcm9taXNlOiBQcm9taXNlPGFueT4sIHRpbWVvdXRNaWxsaXNlY29uZHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgb3JpZ2luYWxQcm9taXNlLFxuICAgICAgICAgICAgbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy53aW5kb3dSZWYuc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gcmVqZWN0KHRpbWVvdXRNYXJrZXIpLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0TWlsbGlzZWNvbmRzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pO1xuICAgIH0gICBcblxuICAgIHByaXZhdGUgZ2V0TmV4dENhbGxJZCAoKSB7XG4gICAgICAgIGxldCByYW5kb21JZCA6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICB3aGlsZSghcmFuZG9tSWQgfHwgdGhpcy5jYWxsYmFja3NbcmFuZG9tSWRdKSB7XG4gICAgICAgICAgICByYW5kb21JZCA9IGBjYiR7TWF0aC5yYW5kb20oKS50b1N0cmluZyhSQU5ET01fQkFTRSkucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIENBTExJRF9MRU5HVEgpfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmFuZG9tSWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kTWVzc2FnZSAodGFyZ2V0V2luZG93OiBXaW5kb3csIHRhcmdldE9yaWdpbjogc3RyaW5nIHwgbnVsbCwgbWVzc2FnZUJvZHk6IE1lc3NhZ2VCb2R5KSA6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsTWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFJQQ19NRVNTQUdFX1RZUEUsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBtZXNzYWdlQm9keVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblNlbmRcIiwgdGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4sIGZ1bGxNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2UoZnVsbE1lc3NhZ2UsIHRhcmdldE9yaWdpbiB8fCBcIipcIik7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSAgICAgXG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVJlcXVlc3QgKG1lc3NhZ2VCb2R5OiBSZXF1ZXN0TWVzc2FnZUJvZHksIG1lc3NhZ2VTb3VyY2U6IFdpbmRvdywgbWVzc2FnZU9yaWdpbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNhbGxJZCA9IG1lc3NhZ2VCb2R5LmNhbGxJZDtcbiAgICAgICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IG1lc3NhZ2VCb2R5LnByb2NlZHVyZU5hbWU7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50TGlzdCA9IG1lc3NhZ2VCb2R5LmFyZ3VtZW50TGlzdDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VPcmlnaW4gPSAhbWVzc2FnZU9yaWdpbiB8fCBtZXNzYWdlT3JpZ2luID09PSBcIm51bGxcIiA/IG51bGwgOiBtZXNzYWdlT3JpZ2luO1xuICAgICAgICBjb25zdCBzZW5kRXJyb3IgPSAocmVqZWN0T3JFcnJvcjogYW55LCBleGNlcHRpb25OYW1lPzpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzRXJyb3IgPSByZWplY3RPckVycm9yIGluc3RhbmNlb2YgRXJyb3I7XG4gICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VTb3VyY2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPcmlnaW4sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50czogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICBjYWxsSWQsXG4gICAgICAgICAgICAgICAgICAgIGlzRXJyb3JJbnN0YW5jZTogaXNFcnJvciwgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBlcnJvclZhbHVlOiBpc0Vycm9yID8gc2VyaWFsaXplUmVtb3RlRXJyb3IocmVqZWN0T3JFcnJvciwgZXhjZXB0aW9uTmFtZSkgOiByZWplY3RPckVycm9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzW3Byb2NlZHVyZU5hbWVdKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlTmFtZV0uYXBwbHkoXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZUJvZHksIG1lc3NhZ2VTb3VyY2UsIG1lc3NhZ2VPcmlnaW59LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRMaXN0KSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPT4gdGhpcy5zZW5kTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VPcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzOiBcInJlc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRFcnJvcihlcnJvciwgU2VuZE1lc3NhZ2VFcnJvci5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW5kICdlcnJvcicgdHlwZSBtZXNzYWdlIHdpdGggcmVqZWN0aW9uIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZEVycm9yKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbmRFcnJvcihleCwgRXZhbHVhdGlvbkVycm9yLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRFcnJvcihuZXcgUHJvY2VkdXJlTm90Rm91bmRFcnJvcih7cHJvY2VkdXJlTmFtZX0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2U6IE1lc3NhZ2VCb2R5KSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrRnVuY3Rpb25zID0gdGhpcy5jYWxsYmFja3NbcmVzcG9uc2UuY2FsbElkXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrRnVuY3Rpb25zKSB7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuY29udGVudHMgPT09IFwicmVzdWx0XCIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9ucy5yZXN1bHQocmVzcG9uc2UucmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuY29udGVudHMgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yT2JqZWN0ID0gcmVzcG9uc2UuaXNFcnJvckluc3RhbmNlID8gZGVzZXJpYWxpemVSZW1vdGVFcnJvcihyZXNwb25zZS5lcnJvclZhbHVlKSA6IHJlc3BvbnNlLmVycm9yVmFsdWU7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbnMuZXJyb3IoZXJyb3JPYmplY3QpO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uVW5leHBlY3RlZFJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgcmVjdiA9IChtZXNzYWdlRXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoKHRoaXMuY29uZmlnLm9yaWdpbldoaXRlbGlzdC5sZW5ndGggPCAxIHx8IHRoaXMuY29uZmlnLm9yaWdpbldoaXRlbGlzdC5pbmRleE9mKG1lc3NhZ2VFdmVudC5vcmlnaW4pID4gLTEpICYmXG4gICAgICAgICAgICBtZXNzYWdlRXZlbnQuZGF0YSAmJiBtZXNzYWdlRXZlbnQuZGF0YS50eXBlID09PSBSUENfTUVTU0FHRV9UWVBFKSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uUmVjZWl2ZVwiLCBtZXNzYWdlRXZlbnQpOyAgICBcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VCb2R5IDogTWVzc2FnZUJvZHkgPSBtZXNzYWdlRXZlbnQuZGF0YS5tZXNzYWdlIGFzIE1lc3NhZ2VCb2R5O1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2VCb2R5LmNvbnRlbnRzID09PSBcInJlcXVlc3RcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3QobWVzc2FnZUJvZHksIG1lc3NhZ2VFdmVudC5zb3VyY2UgYXMgV2luZG93LCBtZXNzYWdlRXZlbnQub3JpZ2luKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVzcG9uc2UobWVzc2FnZUJvZHkpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG59IC8vIGVuZCBvZiBjbGFzc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==