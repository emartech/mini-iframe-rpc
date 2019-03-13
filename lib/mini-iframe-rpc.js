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
        this.callbacks = new Map();
        this.registeredProcedures = new Map();
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
            this.registeredProcedures.set(procedureName, implementation);
        }
        else {
            this.registeredProcedures.delete(procedureName);
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
                    _this.callbacks.delete(callId);
                    resolve(result);
                },
                error: function (err) {
                    _this.callbacks.delete(callId);
                    reject(err);
                }
            };
            _this.callbacks.set(callId, callbacks);
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
        while (!randomId || this.callbacks.has(randomId)) {
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
                if (this.registeredProcedures.has(procedureName)) {
                    try {
                        return [2 /*return*/, Promise.resolve(this.registeredProcedures.get(procedureName).apply({ messageBody: messageBody, messageSource: messageSource, messageOrigin: messageOrigin }, argumentList)).then(function (result) { return _this.sendMessage(messageSource, responseOrigin, {
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
        var callbackFunctions = this.callbacks.get(response.callId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvZXZhbHVhdGlvbi1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvZXJyb3JzL2luZGV4LnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvbWluaS1pZnJhbWUtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vbWluaS1pZnJhbWUtcnBjLy4vc3JjL2Vycm9ycy9wcm9jZWR1cmUtbm90LWZvdW5kLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvcmVtb3RlLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvc2VuZC1tZXNzYWdlLWVycm9yLnRzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9lcnJvcnMvdGltZW91dC1lcnJvci50cyIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9zcmMvbWluaS1pZnJhbWUtcnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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QUFPLEVBQUUsRUFBRTt3QkFDVCxzQkFBTyxTQUFTLENBQUMsRUFBRSxFQUFFLHVEQUFlLENBQUMsSUFBSSxDQUFDLEVBQUM7cUJBQzlDO2lCQUNKO3FCQUFNO29CQUNILHNCQUFPLFNBQVMsQ0FBQyxJQUFJLDhEQUFzQixDQUFDLEVBQUMsYUFBYSxpQkFBQyxDQUFDLENBQUMsRUFBQztpQkFDakU7Ozs7S0FDSjtJQUVPLHNDQUFjLEdBQXRCLFVBQXVCLFFBQXFCO1FBQ3hDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlELElBQUksaUJBQWlCLEVBQUU7WUFDbkIsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM3QztpQkFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUN0QyxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxzRUFBc0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7Z0JBQ2pILGlCQUFpQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN4QztTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDaEU7SUFDTCxDQUFDO0lBZUwsb0JBQUM7QUFBRCxDQUFDLEtBQUMsZUFBZSIsImZpbGUiOiJtaW5pLWlmcmFtZS1ycGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm1pbmktaWZyYW1lLXJwY1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW5pLWlmcmFtZS1ycGNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWluaS1pZnJhbWUtcnBjXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21pbmktaWZyYW1lLXJwYy50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVtb3RlRXJyb3IgfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBFdmFsdWF0aW9uRXJyb3IgZXh0ZW5kcyBSZW1vdGVFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvcjogUmVtb3RlRXJyb3IpIHtcbiAgICAgICAgc3VwZXIoZXJyb3IuY2F1c2UpO1xuICAgICAgICAvLyBzZWU6IHR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL3JlbGVhc2Utbm90ZXMvdHlwZXNjcmlwdC0yLTIuaHRtbFxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpOyAvLyByZXN0b3JlIHByb3RvdHlwZSBjaGFpblxuICAgICAgICB0aGlzLm5hbWUgPSBFdmFsdWF0aW9uRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQge0V2YWx1YXRpb25FcnJvcn0gZnJvbSAnLi9ldmFsdWF0aW9uLWVycm9yJztcbmltcG9ydCB7TWluaUlmcmFtZUVycm9yfSBmcm9tICcuL21pbmktaWZyYW1lLWVycm9yJztcbmltcG9ydCB7UHJvY2VkdXJlTm90Rm91bmRFcnJvcn0gZnJvbSAnLi9wcm9jZWR1cmUtbm90LWZvdW5kLWVycm9yJztcbmltcG9ydCB7ZXJyb3JUb0pTT04sIFJlbW90ZUVycm9yLCBSZW1vdGVFcnJvckNhdXNlfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5pbXBvcnQge1NlbmRNZXNzYWdlRXJyb3J9IGZyb20gJy4vc2VuZC1tZXNzYWdlLWVycm9yJztcbmltcG9ydCB7VGltZW91dEVycm9yfSBmcm9tICcuL3RpbWVvdXQtZXJyb3InO1xuXG5leHBvcnQge01pbmlJZnJhbWVFcnJvciwgUHJvY2VkdXJlTm90Rm91bmRFcnJvciwgRXZhbHVhdGlvbkVycm9yLCBUaW1lb3V0RXJyb3IsIFNlbmRNZXNzYWdlRXJyb3IsIFJlbW90ZUVycm9yfTtcblxudHlwZSBSZW1vdGVFcnJvckNvbnN0cnVjdG9yID0gbmV3IChzdGF0ZTogUGFydGlhbDxSZW1vdGVFcnJvcj4pID0+IFJlbW90ZUVycm9yO1xuXG50eXBlIEVSUk9SX01BUCA9IHtcbiAgICBba2V5OiBzdHJpbmddOiBSZW1vdGVFcnJvckNvbnN0cnVjdG9yXG59XG5cbmNvbnN0IHJlbW90ZUVycm9yQ2xhc3NlcyA9IChbXG4gICAgUHJvY2VkdXJlTm90Rm91bmRFcnJvcixcbiAgICBFdmFsdWF0aW9uRXJyb3IsXG4gICAgU2VuZE1lc3NhZ2VFcnJvclxuICAgIF0gYXMgUmVtb3RlRXJyb3JDb25zdHJ1Y3RvcltdKS5yZWR1Y2UoXG4gICAgKG9iajpFUlJPUl9NQVAsIGNvbnN0cjpSZW1vdGVFcnJvckNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgIG9ialtjb25zdHIubmFtZV0gPSBjb25zdHI7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSBhcyBFUlJPUl9NQVApIGFzIEVSUk9SX01BUDsgICAgXG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpemVSZW1vdGVFcnJvciA9IChjYXVzZTogUmVtb3RlRXJyb3JDYXVzZSwgcmVtb3RlRXhjZXB0aW9uTmFtZT86IHN0cmluZyk6UmVtb3RlRXJyb3IgPT4geyAgICBcbiAgICBcbiAgICBjb25zdCBjb252ZXJ0ID0gKGVycjogUmVtb3RlRXJyb3IpOlJlbW90ZUVycm9yID0+IHtcbiAgICAgICAgY29uc3QgZXJySlNPTjpSZW1vdGVFcnJvciA9IGVycm9yVG9KU09OKGVycik7ICAgICAgICBcbiAgICAgICAgaWYgKHJlbW90ZUV4Y2VwdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIGVyckpTT04ubmFtZSA9IHJlbW90ZUV4Y2VwdGlvbk5hbWU7XG4gICAgICAgIH0gICAgIFxuXG4gICAgICAgIHJldHVybiBlcnJKU09OO1xuICAgIH1cbiAgICBpZiAoY2F1c2UgaW5zdGFuY2VvZiBSZW1vdGVFcnJvcikge1xuICAgICAgICAvLyBpZiBjYXVzZSBpcyBhbHJlYWR5IGEgcmVtb3RlRXJyb3IsIHJldHVybiBhcyBpc1xuICAgICAgICByZXR1cm4gY29udmVydChjYXVzZSk7XG4gICAgfSAgICBcbiAgICAvLyBmb3IgYm90aCBFcnJvciBhbmQgU3RyaW5nIHR5cGUgY2F1c2VzLCBjcmVhdGUgYSBuZXcgUmVtb3RlRXJyb3IgXG5cbiAgICByZXR1cm4gY29udmVydChuZXcgUmVtb3RlRXJyb3IoY2F1c2UpKTsgICAgXG59OyAgIFxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgY29uc3QgZGVzZXJpYWxpemVSZW1vdGVFcnJvciA9IChlcnJvcjpSZW1vdGVFcnJvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0ciA9IHJlbW90ZUVycm9yQ2xhc3Nlc1tlcnJvci5uYW1lXSB8fCBSZW1vdGVFcnJvcjtcblxuICAgIHJldHVybiBuZXcgY29uc3RyKGVycm9yKTtcbn07IiwiZXhwb3J0IGNsYXNzIE1pbmlJZnJhbWVFcnJvciBleHRlbmRzIEVycm9yIHtcblxuICAgIHRpbWVzdGFtcDpudW1iZXI7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZywgc3RhdGU/OiBhbnkpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gwqArKG5ldyBEYXRlKCkpO1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNlZTogdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svcmVsZWFzZS1ub3Rlcy90eXBlc2NyaXB0LTItMi5odG1sXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7IC8vIHJlc3RvcmUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgIHRoaXMubmFtZSA9IE1pbmlJZnJhbWVFcnJvci5uYW1lOyAvLyBzdGFjayB0cmFjZXMgZGlzcGxheSBjb3JyZWN0bHkgbm93IFxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgUmVtb3RlRXJyb3IgfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBQcm9jZWR1cmVOb3RGb3VuZEVycm9yIGV4dGVuZHMgUmVtb3RlRXJyb3Ige1xuXG4gICAgcHJvY2VkdXJlTmFtZSA9IFwidW5rbm93blwiO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBhcnRpYWw8UHJvY2VkdXJlTm90Rm91bmRFcnJvcj4pIHtcbiAgICAgICAgc3VwZXIoYFJlbW90ZSBwcm9jZWR1cmUgJyR7c3RhdGUucHJvY2VkdXJlTmFtZX0nIG5vdCByZWdpc3RlcmVkIGluIHJlbW90ZSBSUEMgaW5zdGFuY2UuYCk7XG4gICAgICAgIGlmIChzdGF0ZS5wcm9jZWR1cmVOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnByb2NlZHVyZU5hbWUgPSBzdGF0ZS5wcm9jZWR1cmVOYW1lO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNlZTogdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svcmVsZWFzZS1ub3Rlcy90eXBlc2NyaXB0LTItMi5odG1sXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7IC8vIHJlc3RvcmUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgIHRoaXMubmFtZSA9IFByb2NlZHVyZU5vdEZvdW5kRXJyb3IubmFtZTsgLy8gc3RhY2sgdHJhY2VzIGRpc3BsYXkgY29ycmVjdGx5IG5vdyAgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQge01pbmlJZnJhbWVFcnJvcn0gZnJvbSAnLi9taW5pLWlmcmFtZS1lcnJvcic7XG5cbmV4cG9ydCB0eXBlIFJlbW90ZUVycm9yQ2F1c2UgPSBFcnJvciB8IHN0cmluZztcblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yVG9KU09OPFQgZXh0ZW5kcyBFcnJvcj4gKGVycjogVCk6VCB7XG4gICAgLy8gbWVzc2FnZSwgbmFtZSwgc3RhY2sgYXJlIG5vdCBlbm51bWVyYWJsZSwgc28gd2UgbXVzdCBleHBsaWNpdGx5IGdldCB0aGVtLlxuICAgIGNvbnN0IHttZXNzYWdlLCBuYW1lLCBzdGFja30gPSBlcnI7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7bWVzc2FnZSwgc3RhY2ssIG5hbWV9LCBlcnIpO1xufVxuXG5jb25zdCBjYXVzZVRvTWVzc2FnZSA9IChjYXVzZTogUmVtb3RlRXJyb3JDYXVzZSk6c3RyaW5nID0+IHtcbiAgICBpZiAodHlwZW9mIGNhdXNlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gY2F1c2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke2NhdXNlLm1lc3NhZ2V9YDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdGVFcnJvciBleHRlbmRzIE1pbmlJZnJhbWVFcnJvciB7XG4gICAgICAgIFxuICAgIGNhdXNlOiBSZW1vdGVFcnJvckNhdXNlO1xuXG4gICAgY29uc3RydWN0b3IoY2F1c2U6IFJlbW90ZUVycm9yQ2F1c2UpIHsgICAgICAgIFxuICAgICAgICBzdXBlcihjYXVzZVRvTWVzc2FnZShjYXVzZSkpO1xuICAgICAgICB0aGlzLmNhdXNlID0gKHR5cGVvZiBjYXVzZSA9PT0gJ3N0cmluZycpID8gY2F1c2UgOiBlcnJvclRvSlNPTihjYXVzZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFJlbW90ZUVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgUmVtb3RlRXJyb3IgfSBmcm9tICcuL3JlbW90ZS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBTZW5kTWVzc2FnZUVycm9yIGV4dGVuZHMgUmVtb3RlRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3I6IFJlbW90ZUVycm9yKSB7XG4gICAgICAgIHN1cGVyKGVycm9yLmNhdXNlKTsgICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBTZW5kTWVzc2FnZUVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHtNaW5pSWZyYW1lRXJyb3J9IGZyb20gJy4vbWluaS1pZnJhbWUtZXJyb3InO1xuXG5leHBvcnQgY2xhc3MgVGltZW91dEVycm9yIGV4dGVuZHMgTWluaUlmcmFtZUVycm9yIHtcblxuICAgIHByb2NlZHVyZU5hbWUgPSBcIlwiO1xuICAgIHRpbWVvdXRNaWxsaVNlY29uZHMgPSAwO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBhcnRpYWw8VGltZW91dEVycm9yPikge1xuICAgICAgICBzdXBlcihgVGltZW91dCB3YWl0aW5nIGZvciBSUEMgcmVzcG9uc2UgdG8gaW52b2NhdGlvbiBvZiBcIiR7c3RhdGUucHJvY2VkdXJlTmFtZX1cIiBhZnRlciAke3N0YXRlLnRpbWVvdXRNaWxsaVNlY29uZHN9IG1zYCwgc3RhdGUpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgLy8gc2VlOiB0eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9yZWxlYXNlLW5vdGVzL3R5cGVzY3JpcHQtMi0yLmh0bWxcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTsgLy8gcmVzdG9yZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgdGhpcy5uYW1lID0gVGltZW91dEVycm9yLm5hbWU7IC8vIHN0YWNrIHRyYWNlcyBkaXNwbGF5IGNvcnJlY3RseSBub3cgICAgICAgICAgICAgICAgIFxuICAgIH1cbn0iLCJcbi8qIHRzbGludDpkaXNhYmxlIG5vLWFueSBuby11bnNhZmUtYW55ICovXG5cbmltcG9ydCB7ZGVzZXJpYWxpemVSZW1vdGVFcnJvciwgRXZhbHVhdGlvbkVycm9yLCBNaW5pSWZyYW1lRXJyb3IsIFByb2NlZHVyZU5vdEZvdW5kRXJyb3IsIFJlbW90ZUVycm9yLCBTZW5kTWVzc2FnZUVycm9yLCBzZXJpYWxpemVSZW1vdGVFcnJvciwgVGltZW91dEVycm9yfSBmcm9tICcuL2Vycm9ycyc7XG5cbmNvbnN0IFJQQ19NRVNTQUdFX1RZUEUgPSBcIm1pbmktaWZyYW1lLXJwY1wiO1xuY29uc3QgUkFORE9NX0JBU0UgPSAzNjtcbmNvbnN0IENBTExJRF9MRU5HVEggPSA4O1xuXG5pbnRlcmZhY2UgUmVxdWVzdE1lc3NhZ2VCb2R5ICB7XG4gICAgY29udGVudHM6IFwicmVxdWVzdFwiO1xuICAgIGNhbGxJZDogc3RyaW5nO1xuICAgIHByb2NlZHVyZU5hbWU6IHN0cmluZztcbiAgICBhcmd1bWVudExpc3Q6IGFueVtdXG59XG5cbmludGVyZmFjZSBSZXN1bHRNZXNzYWdlQm9keSB7XG4gICAgY29udGVudHM6IFwicmVzdWx0XCI7XG4gICAgY2FsbElkOiBzdHJpbmc7ICAgIFxuICAgIHJlc3VsdDogYW55XG59XG5cbmludGVyZmFjZSBFcnJvck1lc3NhZ2VCb2R5IHtcbiAgICBjb250ZW50czogXCJlcnJvclwiO1xuICAgIGNhbGxJZDogc3RyaW5nO1xuICAgIGlzRXJyb3JJbnN0YW5jZTogYm9vbGVhbjtcbiAgICBlcnJvclZhbHVlOiBSZW1vdGVFcnJvcjtcbn1cblxudHlwZSBNZXNzYWdlQm9keSA9IFJlcXVlc3RNZXNzYWdlQm9keSB8IFJlc3VsdE1lc3NhZ2VCb2R5IHwgRXJyb3JNZXNzYWdlQm9keTtcblxuZXhwb3J0IGludGVyZmFjZSBJbnZvY2F0aW9uT3B0aW9ucyB7XG4gICAgdGltZW91dDogbnVtYmVyO1xuICAgIHJldHJ5TGltaXQ6IG51bWJlcjtcbn1cblxudHlwZSBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tUeXBlID0gJ29uVW5leHBlY3RlZFJlc3BvbnNlJyB8ICdvblJlY2VpdmUnIHwgJ29uU2VuZCcgfCAnb25SZWdpc3RlcicgfCAnb25DbG9zZSc7XG5cbi8vIE9wdGlvbmFsIGNhbGxiYWNrcyBmb3IgaW50ZXJuYWwgZXZlbnRzIHVzZWZ1bCBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nXG5leHBvcnQgdHlwZSBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tzID0ge1xuICAgIFtrZXkgaW4gSW50ZXJuYWxFdmVudENhbGxiYWNrVHlwZV06ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdFBhcmFtZXRlcnMge1xuICAgIHdpbmRvd1JlZjogV2luZG93O1xuICAgIG9yaWdpbldoaXRlbGlzdDogc3RyaW5nW107XG4gICAgZGVmYXVsdEludm9jYXRpb25PcHRpb25zOiBJbnZvY2F0aW9uT3B0aW9ucztcbiAgICBldmVudENhbGxiYWNrczogUGFydGlhbDxJbnRlcm5hbEV2ZW50Q2FsbGJhY2tzPjtcbn1cblxuaW50ZXJmYWNlIENhbGxiYWNrRnVuY3Rpb25zIHtcbiAgICByZXN1bHQ6IChyZXN1bHQ6IGFueSkgPT4gdm9pZCxcbiAgICBlcnJvcjogKGVycm9yOiBhbnkpID0+IHZvaWRcbn1cblxudHlwZSBQcm9jZWR1cmVJbXBsZW1lbnRhdGlvbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55O1xuXG5jb25zdCB0aW1lb3V0TWFya2VyID0ge307XG5cbmV4cG9ydCBjbGFzcyBNaW5pSWZyYW1lUlBDIHtcbiAgICBwcml2YXRlIGNvbmZpZzogSW5pdFBhcmFtZXRlcnM7XG4gICAgcHJpdmF0ZSBjYWxsYmFja3M6IE1hcDxzdHJpbmcsIENhbGxiYWNrRnVuY3Rpb25zPiA9IG5ldyBNYXA8c3RyaW5nLCBDYWxsYmFja0Z1bmN0aW9ucz4oKTtcbiAgICBwcml2YXRlIHJlZ2lzdGVyZWRQcm9jZWR1cmVzOiBNYXA8c3RyaW5nLCBQcm9jZWR1cmVJbXBsZW1lbnRhdGlvbj4gPSBuZXcgTWFwPHN0cmluZywgUHJvY2VkdXJlSW1wbGVtZW50YXRpb24+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihpbml0UGFyYW1ldGVycz86IEluaXRQYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgd2luZG93UmVmOiBpbml0UGFyYW1ldGVycyAmJiBpbml0UGFyYW1ldGVycy53aW5kb3dSZWYgfHwgd2luZG93LFxuICAgICAgICAgICAgb3JpZ2luV2hpdGVsaXN0OiBpbml0UGFyYW1ldGVycyAmJiBpbml0UGFyYW1ldGVycy5vcmlnaW5XaGl0ZWxpc3QgfHwgW10sXG4gICAgICAgICAgICBkZWZhdWx0SW52b2NhdGlvbk9wdGlvbnM6IGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLmRlZmF1bHRJbnZvY2F0aW9uT3B0aW9ucyB8fCB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogMCxcbiAgICAgICAgICAgICAgICByZXRyeUxpbWl0OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXZlbnRDYWxsYmFja3M6IGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLmV2ZW50Q2FsbGJhY2tzIHx8IHt9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGF0dGFjaCBsaXN0ZW5lclxuICAgICAgICB0aGlzLmNvbmZpZy53aW5kb3dSZWYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5yZWN2KTtcbiAgICB9ICAgICAgICBcblxuICAgIHJlZ2lzdGVyKHByb2NlZHVyZU5hbWU6IHN0cmluZywgaW1wbGVtZW50YXRpb24/OiBQcm9jZWR1cmVJbXBsZW1lbnRhdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uUmVnaXN0ZXJcIiwgcHJvY2VkdXJlTmFtZSwgaW1wbGVtZW50YXRpb24pXG4gICAgICAgIGlmIChpbXBsZW1lbnRhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmVkUHJvY2VkdXJlcy5zZXQocHJvY2VkdXJlTmFtZSwgaW1wbGVtZW50YXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmVkUHJvY2VkdXJlcy5kZWxldGUocHJvY2VkdXJlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZva2UgKHRhcmdldFdpbmRvdzogV2luZG93LCB0YXJnZXRPcmlnaW46IHN0cmluZyB8IG51bGwsIHByb2NlZHVyZU5hbWU6IHN0cmluZywgYXJndW1lbnRMaXN0PzogYW55W10sIGludm9jYXRpb25PcHRpb25zPzogSW52b2NhdGlvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gaW52b2NhdGlvbk9wdGlvbnMgfHwgdGhpcy5jb25maWcuZGVmYXVsdEludm9jYXRpb25PcHRpb25zO1xuICAgICAgICBjb25zdCBjYWxsSWQgPSB0aGlzLmdldE5leHRDYWxsSWQoKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZUJvZHk6IFJlcXVlc3RNZXNzYWdlQm9keSA9IHtcbiAgICAgICAgICAgIGNvbnRlbnRzOiBcInJlcXVlc3RcIixcbiAgICAgICAgICAgIGNhbGxJZCxcbiAgICAgICAgICAgIHByb2NlZHVyZU5hbWUsXG4gICAgICAgICAgICBhcmd1bWVudExpc3Q6IChhcmd1bWVudExpc3QgfHwgW10pfTtcbiAgICAgICAgbGV0IHJlc3VsdFByb21pc2U6IFByb21pc2U8YW55PiA9IHRoaXMuc2VuZE1lc3NhZ2UodGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4sIG1lc3NhZ2VCb2R5KS50aGVuKCgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA6IENhbGxiYWNrRnVuY3Rpb25zID0ge1xuICAgICAgICAgICAgICAgIHJlc3VsdDogKHJlc3VsdCA6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5kZWxldGUoY2FsbElkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IChlcnIgOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MuZGVsZXRlKGNhbGxJZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5zZXQoY2FsbElkLCBjYWxsYmFja3MpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChvcHRpb25zLnRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICByZXN1bHRQcm9taXNlID0gdGhpcy50aW1lYm94UHJvbWlzZShyZXN1bHRQcm9taXNlLCBvcHRpb25zLnRpbWVvdXQpLnRoZW4oXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHJlc3VsdCxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA9PT0gdGltZW91dE1hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0cnk/XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHJldHJ5IGV4aGF1c2VkIHJhaXNlIHRpbWVvdXQgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUaW1lb3V0RXJyb3Ioe3Byb2NlZHVyZU5hbWUsIHRpbWVvdXRNaWxsaVNlY29uZHM6IG9wdGlvbnMudGltZW91dH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25DbG9zZVwiKTtcbiAgICAgICAgdGhpcy5jb25maWcud2luZG93UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMucmVjdik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnRlcm5hbEV2ZW50Q2FsbGJhY2soaW50ZXJuYWxFdmVudENhbGxiYWNrOiBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tUeXBlLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBjYiA9IHRoaXMuY29uZmlnLmV2ZW50Q2FsbGJhY2tzW2ludGVybmFsRXZlbnRDYWxsYmFja107XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgY2IuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRpbWVib3hQcm9taXNlKG9yaWdpbmFsUHJvbWlzZTogUHJvbWlzZTxhbnk+LCB0aW1lb3V0TWlsbGlzZWNvbmRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIG9yaWdpbmFsUHJvbWlzZSxcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcud2luZG93UmVmLnNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHJlamVjdCh0aW1lb3V0TWFya2VyKSxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dE1pbGxpc2Vjb25kcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBdKTtcbiAgICB9ICAgXG5cbiAgICBwcml2YXRlIGdldE5leHRDYWxsSWQgKCkge1xuICAgICAgICBsZXQgcmFuZG9tSWQgOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgICAgd2hpbGUoIXJhbmRvbUlkIHx8IHRoaXMuY2FsbGJhY2tzLmhhcyhyYW5kb21JZCkpIHtcbiAgICAgICAgICAgIHJhbmRvbUlkID0gYGNiJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKFJBTkRPTV9CQVNFKS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgQ0FMTElEX0xFTkdUSCl9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByYW5kb21JZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbmRNZXNzYWdlICh0YXJnZXRXaW5kb3c6IFdpbmRvdywgdGFyZ2V0T3JpZ2luOiBzdHJpbmcgfCBudWxsLCBtZXNzYWdlQm9keTogTWVzc2FnZUJvZHkpIDogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxNZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogUlBDX01FU1NBR0VfVFlQRSxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IG1lc3NhZ2VCb2R5XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uU2VuZFwiLCB0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgZnVsbE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRhcmdldFdpbmRvdy5wb3N0TWVzc2FnZShmdWxsTWVzc2FnZSwgdGFyZ2V0T3JpZ2luIHx8IFwiKlwiKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9ICAgICBcblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlUmVxdWVzdCAobWVzc2FnZUJvZHk6IFJlcXVlc3RNZXNzYWdlQm9keSwgbWVzc2FnZVNvdXJjZTogV2luZG93LCBtZXNzYWdlT3JpZ2luOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY2FsbElkID0gbWVzc2FnZUJvZHkuY2FsbElkO1xuICAgICAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gbWVzc2FnZUJvZHkucHJvY2VkdXJlTmFtZTtcbiAgICAgICAgY29uc3QgYXJndW1lbnRMaXN0ID0gbWVzc2FnZUJvZHkuYXJndW1lbnRMaXN0O1xuICAgICAgICBjb25zdCByZXNwb25zZU9yaWdpbiA9ICFtZXNzYWdlT3JpZ2luIHx8IG1lc3NhZ2VPcmlnaW4gPT09IFwibnVsbFwiID8gbnVsbCA6IG1lc3NhZ2VPcmlnaW47XG4gICAgICAgIGNvbnN0IHNlbmRFcnJvciA9IChyZWplY3RPckVycm9yOiBhbnksIGV4Y2VwdGlvbk5hbWU/OnN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNFcnJvciA9IHJlamVjdE9yRXJyb3IgaW5zdGFuY2VvZiBFcnJvcjtcbiAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgbWVzc2FnZVNvdXJjZSxcbiAgICAgICAgICAgICAgICByZXNwb25zZU9yaWdpbixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxJZCxcbiAgICAgICAgICAgICAgICAgICAgaXNFcnJvckluc3RhbmNlOiBpc0Vycm9yLCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVmFsdWU6IGlzRXJyb3IgPyBzZXJpYWxpemVSZW1vdGVFcnJvcihyZWplY3RPckVycm9yLCBleGNlcHRpb25OYW1lKSA6IHJlamVjdE9yRXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXMuaGFzKHByb2NlZHVyZU5hbWUpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZFByb2NlZHVyZXMuZ2V0KHByb2NlZHVyZU5hbWUpIS5hcHBseShcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlQm9keSwgbWVzc2FnZVNvdXJjZSwgbWVzc2FnZU9yaWdpbn0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudExpc3QpKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB0aGlzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlU291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZU9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM6IFwicmVzdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZEVycm9yKGVycm9yLCBTZW5kTWVzc2FnZUVycm9yLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbmQgJ2Vycm9yJyB0eXBlIG1lc3NhZ2Ugd2l0aCByZWplY3Rpb24gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kRXJyb3IpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VuZEVycm9yKGV4LCBFdmFsdWF0aW9uRXJyb3IubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZEVycm9yKG5ldyBQcm9jZWR1cmVOb3RGb3VuZEVycm9yKHtwcm9jZWR1cmVOYW1lfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVSZXNwb25zZShyZXNwb25zZTogTWVzc2FnZUJvZHkpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tGdW5jdGlvbnMgPSB0aGlzLmNhbGxiYWNrcy5nZXQocmVzcG9uc2UuY2FsbElkKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrRnVuY3Rpb25zKSB7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuY29udGVudHMgPT09IFwicmVzdWx0XCIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9ucy5yZXN1bHQocmVzcG9uc2UucmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuY29udGVudHMgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yT2JqZWN0ID0gcmVzcG9uc2UuaXNFcnJvckluc3RhbmNlID8gZGVzZXJpYWxpemVSZW1vdGVFcnJvcihyZXNwb25zZS5lcnJvclZhbHVlKSA6IHJlc3BvbnNlLmVycm9yVmFsdWU7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbnMuZXJyb3IoZXJyb3JPYmplY3QpO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uVW5leHBlY3RlZFJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgcmVjdiA9IChtZXNzYWdlRXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoKHRoaXMuY29uZmlnLm9yaWdpbldoaXRlbGlzdC5sZW5ndGggPCAxIHx8IHRoaXMuY29uZmlnLm9yaWdpbldoaXRlbGlzdC5pbmRleE9mKG1lc3NhZ2VFdmVudC5vcmlnaW4pID4gLTEpICYmXG4gICAgICAgICAgICBtZXNzYWdlRXZlbnQuZGF0YSAmJiBtZXNzYWdlRXZlbnQuZGF0YS50eXBlID09PSBSUENfTUVTU0FHRV9UWVBFKSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uUmVjZWl2ZVwiLCBtZXNzYWdlRXZlbnQpOyAgICBcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VCb2R5IDogTWVzc2FnZUJvZHkgPSBtZXNzYWdlRXZlbnQuZGF0YS5tZXNzYWdlIGFzIE1lc3NhZ2VCb2R5O1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2VCb2R5LmNvbnRlbnRzID09PSBcInJlcXVlc3RcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3QobWVzc2FnZUJvZHksIG1lc3NhZ2VFdmVudC5zb3VyY2UgYXMgV2luZG93LCBtZXNzYWdlRXZlbnQub3JpZ2luKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVzcG9uc2UobWVzc2FnZUJvZHkpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG59IC8vIGVuZCBvZiBjbGFzc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==