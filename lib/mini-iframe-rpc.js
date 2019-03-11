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
                exception: function (exception) {
                    _this.callbacks.delete(callId);
                    reject(new Error(exception));
                }
            };
            _this.callbacks.set(callId, callbacks);
        }); });
        if (options.timeout > 0) {
            resultPromise = this.timeboxPromise(resultPromise, options.timeout).then(function (result) { return result; }, function (error) {
                if (error === timeoutMarker) {
                    // retry?
                    // when retry exhaused raise timeout error
                    throw new Error("Timeout waiting for RPC response after " + options.timeout + " ms");
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
    MiniIframeRPC.prototype.formatError = function (err) {
        if (!(err instanceof Error)) {
            return err;
        }
        // message is non-enumerable, so it must be explicitly extracted
        var message = err.message, name = err.name, stack = err.stack;
        return JSON.stringify({ message: message, name: name, stack: stack });
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
                sendError = function (ex) { return _this.sendMessage(messageSource, responseOrigin, {
                    contents: "exception",
                    callId: callId,
                    exception: _this.formatError(ex)
                }); };
                if (this.registeredProcedures.has(procedureName)) {
                    try {
                        return [2 /*return*/, Promise.resolve(this.registeredProcedures.get(procedureName).apply({ messageBody: messageBody, messageSource: messageSource, messageOrigin: messageOrigin }, argumentList)).then(function (result) { return _this.sendMessage(messageSource, responseOrigin, {
                                contents: "result",
                                callId: callId,
                                result: result
                            }).catch(sendError); }, sendError)];
                    }
                    catch (ex) {
                        return [2 /*return*/, sendError(ex)];
                    }
                }
                else {
                    return [2 /*return*/, sendError("Procedure not found: " + procedureName)];
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
            else if (response.contents === "exception") {
                callbackFunctions.exception(response.exception);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5pLWlmcmFtZS1ycGMvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL21pbmktaWZyYW1lLXJwYy8uL3NyYy9taW5pLWlmcmFtZS1ycGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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Q0o7SUFFTyxzQ0FBYyxHQUF0QixVQUF1QixRQUFxQjtRQUN4QyxJQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLGlCQUFpQixFQUFFO1lBQ25CLElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7Z0JBQ2hDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0M7aUJBQU0sSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFBRTtnQkFDMUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNuRDtTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDaEU7SUFDTCxDQUFDO0lBZUwsb0JBQUM7QUFBRCxDQUFDLEtBQUMsZUFBZSIsImZpbGUiOiJtaW5pLWlmcmFtZS1ycGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm1pbmktaWZyYW1lLXJwY1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW5pLWlmcmFtZS1ycGNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWluaS1pZnJhbWUtcnBjXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21pbmktaWZyYW1lLXJwYy50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiXG4vKiB0c2xpbnQ6ZGlzYWJsZSBuby1hbnkgbm8tdW5zYWZlLWFueSAqL1xuXG5jb25zdCBSUENfTUVTU0FHRV9UWVBFID0gXCJtaW5pLWlmcmFtZS1ycGNcIjtcbmNvbnN0IFJBTkRPTV9CQVNFID0gMzY7XG5jb25zdCBDQUxMSURfTEVOR1RIID0gODtcblxuaW50ZXJmYWNlIFJlcXVlc3RNZXNzYWdlQm9keSAge1xuICAgIGNvbnRlbnRzOiBcInJlcXVlc3RcIjtcbiAgICBjYWxsSWQ6IHN0cmluZztcbiAgICBwcm9jZWR1cmVOYW1lOiBzdHJpbmc7XG4gICAgYXJndW1lbnRMaXN0OiBhbnlbXVxufVxuXG5pbnRlcmZhY2UgUmVzdWx0TWVzc2FnZUJvZHkge1xuICAgIGNvbnRlbnRzOiBcInJlc3VsdFwiO1xuICAgIGNhbGxJZDogc3RyaW5nOyAgICBcbiAgICByZXN1bHQ6IGFueSB8IG51bGxcbn1cblxuaW50ZXJmYWNlIEV4Y2VwdGlvbk1lc3NhZ2VCb2R5IHtcbiAgICBjb250ZW50czogXCJleGNlcHRpb25cIjtcbiAgICBjYWxsSWQ6IHN0cmluZztcbiAgICBleGNlcHRpb246IHN0cmluZ1xufVxuXG50eXBlIE1lc3NhZ2VCb2R5ID0gUmVxdWVzdE1lc3NhZ2VCb2R5IHwgUmVzdWx0TWVzc2FnZUJvZHkgfCBFeGNlcHRpb25NZXNzYWdlQm9keTtcblxuZXhwb3J0IGludGVyZmFjZSBJbnZvY2F0aW9uT3B0aW9ucyB7XG4gICAgdGltZW91dDogbnVtYmVyO1xuICAgIHJldHJ5TGltaXQ6IG51bWJlcjtcbn1cblxudHlwZSBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tUeXBlID0gJ29uVW5leHBlY3RlZFJlc3BvbnNlJyB8ICdvblJlY2VpdmUnIHwgJ29uU2VuZCcgfCAnb25SZWdpc3RlcicgfCAnb25DbG9zZSc7XG5cbi8vIE9wdGlvbmFsIGNhbGxiYWNrcyBmb3IgaW50ZXJuYWwgZXZlbnRzIHVzZWZ1bCBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nXG5leHBvcnQgdHlwZSBJbnRlcm5hbEV2ZW50Q2FsbGJhY2tzID0ge1xuICAgIFtrZXkgaW4gSW50ZXJuYWxFdmVudENhbGxiYWNrVHlwZV06ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdFBhcmFtZXRlcnMge1xuICAgIHdpbmRvd1JlZjogV2luZG93O1xuICAgIG9yaWdpbldoaXRlbGlzdDogc3RyaW5nW107XG4gICAgZGVmYXVsdEludm9jYXRpb25PcHRpb25zOiBJbnZvY2F0aW9uT3B0aW9ucztcbiAgICBldmVudENhbGxiYWNrczogUGFydGlhbDxJbnRlcm5hbEV2ZW50Q2FsbGJhY2tzPjtcbn1cblxuaW50ZXJmYWNlIENhbGxiYWNrRnVuY3Rpb25zIHtcbiAgICByZXN1bHQ6IChyZXN1bHQ6IGFueSkgPT4gdm9pZCxcbiAgICBleGNlcHRpb246IChleGNlcHRpb246IHN0cmluZykgPT4gdm9pZFxufVxuXG50eXBlIFByb2NlZHVyZUltcGxlbWVudGF0aW9uID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk7XG5cbmNvbnN0IHRpbWVvdXRNYXJrZXIgPSB7fTtcblxuZXhwb3J0IGNsYXNzIE1pbmlJZnJhbWVSUEMge1xuICAgIHByaXZhdGUgY29uZmlnOiBJbml0UGFyYW1ldGVycztcbiAgICBwcml2YXRlIGNhbGxiYWNrczogTWFwPHN0cmluZywgQ2FsbGJhY2tGdW5jdGlvbnM+ID0gbmV3IE1hcDxzdHJpbmcsIENhbGxiYWNrRnVuY3Rpb25zPigpO1xuICAgIHByaXZhdGUgcmVnaXN0ZXJlZFByb2NlZHVyZXM6IE1hcDxzdHJpbmcsIFByb2NlZHVyZUltcGxlbWVudGF0aW9uPiA9IG5ldyBNYXA8c3RyaW5nLCBQcm9jZWR1cmVJbXBsZW1lbnRhdGlvbj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKGluaXRQYXJhbWV0ZXJzPzogSW5pdFBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICB3aW5kb3dSZWY6IGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLndpbmRvd1JlZiB8fCB3aW5kb3csXG4gICAgICAgICAgICBvcmlnaW5XaGl0ZWxpc3Q6IGluaXRQYXJhbWV0ZXJzICYmIGluaXRQYXJhbWV0ZXJzLm9yaWdpbldoaXRlbGlzdCB8fCBbXSxcbiAgICAgICAgICAgIGRlZmF1bHRJbnZvY2F0aW9uT3B0aW9uczogaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMuZGVmYXVsdEludm9jYXRpb25PcHRpb25zIHx8IHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAwLFxuICAgICAgICAgICAgICAgIHJldHJ5TGltaXQ6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudENhbGxiYWNrczogaW5pdFBhcmFtZXRlcnMgJiYgaW5pdFBhcmFtZXRlcnMuZXZlbnRDYWxsYmFja3MgfHwge31cbiAgICAgICAgfTtcbiAgICAgICAgLy8gYXR0YWNoIGxpc3RlbmVyXG4gICAgICAgIHRoaXMuY29uZmlnLndpbmRvd1JlZi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLnJlY3YpO1xuICAgIH0gICAgICAgIFxuXG4gICAgcmVnaXN0ZXIocHJvY2VkdXJlTmFtZTogc3RyaW5nLCBpbXBsZW1lbnRhdGlvbj86IFByb2NlZHVyZUltcGxlbWVudGF0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxFdmVudENhbGxiYWNrKFwib25SZWdpc3RlclwiLCBwcm9jZWR1cmVOYW1lLCBpbXBsZW1lbnRhdGlvbilcbiAgICAgICAgaWYgKGltcGxlbWVudGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzLnNldChwcm9jZWR1cmVOYW1lLCBpbXBsZW1lbnRhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzLmRlbGV0ZShwcm9jZWR1cmVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGludm9rZSAodGFyZ2V0V2luZG93OiBXaW5kb3csIHRhcmdldE9yaWdpbjogc3RyaW5nIHwgbnVsbCwgcHJvY2VkdXJlTmFtZTogc3RyaW5nLCBhcmd1bWVudExpc3Q/OiBhbnlbXSwgaW52b2NhdGlvbk9wdGlvbnM/OiBJbnZvY2F0aW9uT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBpbnZvY2F0aW9uT3B0aW9ucyB8fCB0aGlzLmNvbmZpZy5kZWZhdWx0SW52b2NhdGlvbk9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGNhbGxJZCA9IHRoaXMuZ2V0TmV4dENhbGxJZCgpO1xuICAgICAgICBjb25zdCBtZXNzYWdlQm9keTogUmVxdWVzdE1lc3NhZ2VCb2R5ID0ge1xuICAgICAgICAgICAgY29udGVudHM6IFwicmVxdWVzdFwiLFxuICAgICAgICAgICAgY2FsbElkLFxuICAgICAgICAgICAgcHJvY2VkdXJlTmFtZSxcbiAgICAgICAgICAgIGFyZ3VtZW50TGlzdDogKGFyZ3VtZW50TGlzdCB8fCBbXSl9O1xuICAgICAgICBsZXQgcmVzdWx0UHJvbWlzZTogUHJvbWlzZTxhbnk+ID0gdGhpcy5zZW5kTWVzc2FnZSh0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgbWVzc2FnZUJvZHkpLnRoZW4oKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzIDogQ2FsbGJhY2tGdW5jdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0OiAocmVzdWx0IDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLmRlbGV0ZShjYWxsSWQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleGNlcHRpb246IChleGNlcHRpb24gOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MuZGVsZXRlKGNhbGxJZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXhjZXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLnNldChjYWxsSWQsIGNhbGxiYWNrcyk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKG9wdGlvbnMudGltZW91dCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdFByb21pc2UgPSB0aGlzLnRpbWVib3hQcm9taXNlKHJlc3VsdFByb21pc2UsIG9wdGlvbnMudGltZW91dCkudGhlbihcbiAgICAgICAgICAgICAgICByZXN1bHQgPT4gcmVzdWx0LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yID09PSB0aW1lb3V0TWFya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXRyeT9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcmV0cnkgZXhoYXVzZWQgcmFpc2UgdGltZW91dCBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaW1lb3V0IHdhaXRpbmcgZm9yIFJQQyByZXNwb25zZSBhZnRlciAke29wdGlvbnMudGltZW91dH0gbXNgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uQ2xvc2VcIik7XG4gICAgICAgIHRoaXMuY29uZmlnLndpbmRvd1JlZi5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLnJlY3YpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW50ZXJuYWxFdmVudENhbGxiYWNrKGludGVybmFsRXZlbnRDYWxsYmFjazogSW50ZXJuYWxFdmVudENhbGxiYWNrVHlwZSwgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgY2IgPSB0aGlzLmNvbmZpZy5ldmVudENhbGxiYWNrc1tpbnRlcm5hbEV2ZW50Q2FsbGJhY2tdO1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aW1lYm94UHJvbWlzZShvcmlnaW5hbFByb21pc2U6IFByb21pc2U8YW55PiwgdGltZW91dE1pbGxpc2Vjb25kczogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgICAgICAgICBvcmlnaW5hbFByb21pc2UsXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLndpbmRvd1JlZi5zZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiByZWplY3QodGltZW91dE1hcmtlciksXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRNaWxsaXNlY29uZHMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgXSk7XG4gICAgfSAgIFxuXG4gICAgcHJpdmF0ZSBnZXROZXh0Q2FsbElkICgpIHtcbiAgICAgICAgbGV0IHJhbmRvbUlkIDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIHdoaWxlKCFyYW5kb21JZCB8fCB0aGlzLmNhbGxiYWNrcy5oYXMocmFuZG9tSWQpKSB7XG4gICAgICAgICAgICByYW5kb21JZCA9IGBjYiR7TWF0aC5yYW5kb20oKS50b1N0cmluZyhSQU5ET01fQkFTRSkucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIENBTExJRF9MRU5HVEgpfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmFuZG9tSWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kTWVzc2FnZSAodGFyZ2V0V2luZG93OiBXaW5kb3csIHRhcmdldE9yaWdpbjogc3RyaW5nIHwgbnVsbCwgbWVzc2FnZUJvZHk6IE1lc3NhZ2VCb2R5KSA6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsTWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFJQQ19NRVNTQUdFX1RZUEUsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBtZXNzYWdlQm9keVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEV2ZW50Q2FsbGJhY2soXCJvblNlbmRcIiwgdGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4sIGZ1bGxNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2UoZnVsbE1lc3NhZ2UsIHRhcmdldE9yaWdpbiB8fCBcIipcIik7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRFcnJvcihlcnIgOiBhbnkpICB7XG4gICAgICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgfVxuICAgICAgICAvLyBtZXNzYWdlIGlzIG5vbi1lbnVtZXJhYmxlLCBzbyBpdCBtdXN0IGJlIGV4cGxpY2l0bHkgZXh0cmFjdGVkXG4gICAgICAgIGNvbnN0IHttZXNzYWdlLCBuYW1lLCBzdGFja30gPSBlcnI7XG5cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHttZXNzYWdlLCBuYW1lLCBzdGFja30pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlUmVxdWVzdCAobWVzc2FnZUJvZHk6IFJlcXVlc3RNZXNzYWdlQm9keSwgbWVzc2FnZVNvdXJjZTogV2luZG93LCBtZXNzYWdlT3JpZ2luOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY2FsbElkID0gbWVzc2FnZUJvZHkuY2FsbElkO1xuICAgICAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gbWVzc2FnZUJvZHkucHJvY2VkdXJlTmFtZTtcbiAgICAgICAgY29uc3QgYXJndW1lbnRMaXN0ID0gbWVzc2FnZUJvZHkuYXJndW1lbnRMaXN0O1xuICAgICAgICBjb25zdCByZXNwb25zZU9yaWdpbiA9ICFtZXNzYWdlT3JpZ2luIHx8IG1lc3NhZ2VPcmlnaW4gPT09IFwibnVsbFwiID8gbnVsbCA6IG1lc3NhZ2VPcmlnaW47XG4gICAgICAgIGNvbnN0IHNlbmRFcnJvciA9IChleCA6IEVycm9yIHwgc3RyaW5nKSA9PiB0aGlzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VTb3VyY2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPcmlnaW4sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50czogXCJleGNlcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgY2FsbElkLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb246IHRoaXMuZm9ybWF0RXJyb3IoZXgpfSk7XG4gICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzLmhhcyhwcm9jZWR1cmVOYW1lKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRQcm9jZWR1cmVzLmdldChwcm9jZWR1cmVOYW1lKSEuYXBwbHkoXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZUJvZHksIG1lc3NhZ2VTb3VyY2UsIG1lc3NhZ2VPcmlnaW59LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRMaXN0KSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPT4gdGhpcy5zZW5kTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VPcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzOiBcInJlc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKHNlbmRFcnJvciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZEVycm9yKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbmRFcnJvcihleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZEVycm9yKGBQcm9jZWR1cmUgbm90IGZvdW5kOiAke3Byb2NlZHVyZU5hbWV9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlOiBNZXNzYWdlQm9keSkge1xuICAgICAgICBjb25zdCBjYWxsYmFja0Z1bmN0aW9ucyA9IHRoaXMuY2FsbGJhY2tzLmdldChyZXNwb25zZS5jYWxsSWQpO1xuICAgICAgICBpZiAoY2FsbGJhY2tGdW5jdGlvbnMpIHsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50cyA9PT0gXCJyZXN1bHRcIikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb25zLnJlc3VsdChyZXNwb25zZS5yZXN1bHQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5jb250ZW50cyA9PT0gXCJleGNlcHRpb25cIikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb25zLmV4Y2VwdGlvbihyZXNwb25zZS5leGNlcHRpb24pO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uVW5leHBlY3RlZFJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgcmVjdiA9IChtZXNzYWdlRXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoKHRoaXMuY29uZmlnLm9yaWdpbldoaXRlbGlzdC5sZW5ndGggPCAxIHx8IHRoaXMuY29uZmlnLm9yaWdpbldoaXRlbGlzdC5pbmRleE9mKG1lc3NhZ2VFdmVudC5vcmlnaW4pID4gLTEpICYmXG4gICAgICAgICAgICBtZXNzYWdlRXZlbnQuZGF0YSAmJiBtZXNzYWdlRXZlbnQuZGF0YS50eXBlID09PSBSUENfTUVTU0FHRV9UWVBFKSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRXZlbnRDYWxsYmFjayhcIm9uUmVjZWl2ZVwiLCBtZXNzYWdlRXZlbnQpOyAgICBcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VCb2R5IDogTWVzc2FnZUJvZHkgPSBtZXNzYWdlRXZlbnQuZGF0YS5tZXNzYWdlIGFzIE1lc3NhZ2VCb2R5O1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2VCb2R5LmNvbnRlbnRzID09PSBcInJlcXVlc3RcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3QobWVzc2FnZUJvZHksIG1lc3NhZ2VFdmVudC5zb3VyY2UgYXMgV2luZG93LCBtZXNzYWdlRXZlbnQub3JpZ2luKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVzcG9uc2UobWVzc2FnZUJvZHkpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG59IC8vIGVuZCBvZiBjbGFzc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==