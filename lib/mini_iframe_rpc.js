(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mini_iframe_rpc", [], factory);
	else if(typeof exports === 'object')
		exports["mini_iframe_rpc"] = factory();
	else
		root["mini_iframe_rpc"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mini_iframe_rpc.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/mini_iframe_rpc.js":
/*!********************************!*\
  !*** ./src/mini_iframe_rpc.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(init) {
  /*
      MSG format
      {
          type: iframe-rpc
          message: {
              contents: request, result or exception
              callId: random id
              -- request --
              procedure:
              argumentList:
              -- result --
              result:
              -- exception --
              exception: 
          }
      }
  */
  var REQUEST = "request",
      RESULT = "result",
      EXCEPTION = "exception"; // TODO: type no such method, exception, timeout, etc.

  var RPC_MESSAGE_TYPE = "iframe-rpc";
  init = init || {};
  var windowRef = init.window || window;
  var originWhitelist = init.originWhitelist || [];
  var timeout = init.timeout || 0;

  var timeboxPromise = function timeboxPromise(originalPromise, milisecondsToWait) {
    return Promise.race([originalPromise, new Promise(function (_resolve, reject) {
      windowRef.setTimeout(function () {
        return reject(new Error('Timeout waiting for RPC response after ' + milisecondsToWait + ' ms'));
      }, milisecondsToWait);
    })]);
  };

  var callbacks = {};
  var registeredProcedures = {};

  var register = function register(name, implementation) {
    if (implementation) {
      registeredProcedures[name] = implementation;
    } else {
      delete registeredProcedures[name];
    }
  };

  var getNextCallId = function getNextCallId() {
    var randomId;

    while (!randomId || randomId in callbacks) {
      randomId = "cb" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
    }

    return randomId;
  };

  var sendMessage = function sendMessage(targetWindow, targetOrigin, message) {
    return new Promise(function (resolve, reject) {
      try {
        targetWindow.postMessage({
          "type": RPC_MESSAGE_TYPE,
          "message": message
        }, targetOrigin || "*");
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };

  var invoke = function invoke(targetWindow, targetOrigin, procedure, argumentList) {
    var callId = getNextCallId();
    var resultPromise = sendMessage(targetWindow, targetOrigin, {
      "contents": REQUEST,
      "callId": callId,
      "procedure": procedure,
      "argumentList": argumentList || []
    }).then(function () {
      return new Promise(function (resolve, reject) {
        callbacks[callId] = {
          "result": function result(_result) {
            delete callbacks[callId];
            resolve(_result);
          },
          "exception": function exception(_exception) {
            delete callbacks[callId];
            reject(new Error(_exception));
          }
        };
      });
    });

    if (timeout > 0) {
      resultPromise = timeboxPromise(resultPromise, timeout);
    }

    return resultPromise;
  };

  var merge = function merge() {
    var dest = {};

    for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
      objects[_key] = arguments[_key];
    }

    objects.forEach(function (obj) {
      return Object.getOwnPropertyNames(obj).forEach(function (key) {
        dest[key] = obj[key];
      });
    });
    return dest;
  };

  var formatError = function formatError(err) {
    if (!(err instanceof Error)) {
      return err;
    }

    return windowRef.JSON.stringify(merge(err, {
      "message": err.message
    }));
  };

  var respond = function respond(messageEvent) {
    var message = messageEvent.data.message;
    var callId = message.callId;
    var procedure = message.procedure;
    var argumentList = message.argumentList;
    var responseOrigin = !messageEvent.origin || messageEvent.origin === "null" ? null : messageEvent.origin;

    var sendError = function sendError(ex) {
      return sendMessage(messageEvent.source, responseOrigin, {
        "callId": callId,
        "contents": EXCEPTION,
        "exception": formatError(ex)
      });
    };

    if (registeredProcedures[procedure]) {
      try {
        return Promise.resolve(registeredProcedures[procedure].apply(messageEvent, argumentList)).then(function (result) {
          return sendMessage(messageEvent.source, responseOrigin, {
            "callId": callId,
            "contents": RESULT,
            "result": result
          }).catch(sendError);
        }, sendError);
      } catch (ex) {
        return sendError(ex);
      }
    } else {
      return sendError("Procedure not found: " + procedure);
    }
  };

  var recv = function recv(messageEvent) {
    if ((originWhitelist.length < 1 || originWhitelist.indexOf(messageEvent.origin) > -1) && messageEvent.data && messageEvent.data.type === RPC_MESSAGE_TYPE) {
      var message = messageEvent.data.message;

      if (message.contents === REQUEST) {
        respond(messageEvent);
      } else {
        var callId = message.callId;
        var contents = message.contents;

        if (contents && callbacks[callId]) {
          callbacks[callId][contents](message[contents]);
        }
      }
    }
  };

  var close = function close() {
    windowRef.removeEventListener("message", recv);
  }; // attach listener


  windowRef.addEventListener("message", recv);
  return {
    register: register,
    invoke: invoke,
    close: close
  };
};

exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pX2lmcmFtZV9ycGMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbmlfaWZyYW1lX3JwYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5pX2lmcmFtZV9ycGMvLi9zcmMvbWluaV9pZnJhbWVfcnBjLmpzIl0sIm5hbWVzIjpbImluaXQiLCJSRVFVRVNUIiwiUkVTVUxUIiwiRVhDRVBUSU9OIiwiUlBDX01FU1NBR0VfVFlQRSIsIndpbmRvd1JlZiIsIndpbmRvdyIsIm9yaWdpbldoaXRlbGlzdCIsInRpbWVvdXQiLCJ0aW1lYm94UHJvbWlzZSIsIm9yaWdpbmFsUHJvbWlzZSIsIm1pbGlzZWNvbmRzVG9XYWl0IiwiUHJvbWlzZSIsInJhY2UiLCJfcmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJFcnJvciIsImNhbGxiYWNrcyIsInJlZ2lzdGVyZWRQcm9jZWR1cmVzIiwicmVnaXN0ZXIiLCJuYW1lIiwiaW1wbGVtZW50YXRpb24iLCJnZXROZXh0Q2FsbElkIiwicmFuZG9tSWQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyIiwic2VuZE1lc3NhZ2UiLCJ0YXJnZXRXaW5kb3ciLCJ0YXJnZXRPcmlnaW4iLCJtZXNzYWdlIiwicmVzb2x2ZSIsInBvc3RNZXNzYWdlIiwiZSIsImludm9rZSIsInByb2NlZHVyZSIsImFyZ3VtZW50TGlzdCIsImNhbGxJZCIsInJlc3VsdFByb21pc2UiLCJ0aGVuIiwicmVzdWx0IiwiZXhjZXB0aW9uIiwibWVyZ2UiLCJkZXN0Iiwib2JqZWN0cyIsImZvckVhY2giLCJvYmoiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwia2V5IiwiZm9ybWF0RXJyb3IiLCJlcnIiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uZCIsIm1lc3NhZ2VFdmVudCIsImRhdGEiLCJyZXNwb25zZU9yaWdpbiIsIm9yaWdpbiIsInNlbmRFcnJvciIsImV4Iiwic291cmNlIiwiYXBwbHkiLCJjYXRjaCIsInJlY3YiLCJsZW5ndGgiLCJpbmRleE9mIiwidHlwZSIsImNvbnRlbnRzIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDbEZlLGtCQUFDQSxJQUFELEVBQVU7QUFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUFBLE1BQTJCQyxNQUFNLEdBQUcsUUFBcEM7QUFBQSxNQUE4Q0MsU0FBUyxHQUFHLFdBQTFELENBbkJxQixDQW1Ca0Q7O0FBQ3ZFLE1BQU1DLGdCQUFnQixHQUFHLFlBQXpCO0FBRUFKLE1BQUksR0FBR0Es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QixDQW1LckI7OztBQUNBOUQsV0FBUyxDQUFDcUUsZ0JBQVYsQ0FBMkIsU0FBM0IsRUFBc0NQLElBQXRDO0FBRUEsU0FBTztBQUFDL0MsWUFBUSxFQUFSQSxRQUFEO0FBQVdpQixVQUFNLEVBQU5BLE1BQVg7QUFBbUJtQyxTQUFLLEVBQUxBO0FBQW5CLEdBQVA7QUFDSCxDIiwiZmlsZSI6Im1pbmlfaWZyYW1lX3JwYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibWluaV9pZnJhbWVfcnBjXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbmlfaWZyYW1lX3JwY1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW5pX2lmcmFtZV9ycGNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWluaV9pZnJhbWVfcnBjLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgKGluaXQpID0+IHtcbiAgICAvKlxuICAgICAgICBNU0cgZm9ybWF0XG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IGlmcmFtZS1ycGNcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50czogcmVxdWVzdCwgcmVzdWx0IG9yIGV4Y2VwdGlvblxuICAgICAgICAgICAgICAgIGNhbGxJZDogcmFuZG9tIGlkXG4gICAgICAgICAgICAgICAgLS0gcmVxdWVzdCAtLVxuICAgICAgICAgICAgICAgIHByb2NlZHVyZTpcbiAgICAgICAgICAgICAgICBhcmd1bWVudExpc3Q6XG4gICAgICAgICAgICAgICAgLS0gcmVzdWx0IC0tXG4gICAgICAgICAgICAgICAgcmVzdWx0OlxuICAgICAgICAgICAgICAgIC0tIGV4Y2VwdGlvbiAtLVxuICAgICAgICAgICAgICAgIGV4Y2VwdGlvbjogXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAqL1xuXG4gICAgY29uc3QgUkVRVUVTVCA9IFwicmVxdWVzdFwiLCBSRVNVTFQgPSBcInJlc3VsdFwiLCBFWENFUFRJT04gPSBcImV4Y2VwdGlvblwiOyAvLyBUT0RPOiB0eXBlIG5vIHN1Y2ggbWV0aG9kLCBleGNlcHRpb24sIHRpbWVvdXQsIGV0Yy5cbiAgICBjb25zdCBSUENfTUVTU0FHRV9UWVBFID0gXCJpZnJhbWUtcnBjXCI7XG5cbiAgICBpbml0ID0gaW5pdCB8fCB7fTtcbiAgICBjb25zdCB3aW5kb3dSZWYgPSBpbml0LndpbmRvdyB8fCB3aW5kb3c7XG4gICAgY29uc3Qgb3JpZ2luV2hpdGVsaXN0ID0gaW5pdC5vcmlnaW5XaGl0ZWxpc3QgfHwgW107XG4gICAgY29uc3QgdGltZW91dCA9IGluaXQudGltZW91dCB8fCAwO1xuXG4gICAgY29uc3QgdGltZWJveFByb21pc2UgPSAob3JpZ2luYWxQcm9taXNlLCBtaWxpc2Vjb25kc1RvV2FpdCkgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIG9yaWdpbmFsUHJvbWlzZSxcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93UmVmLnNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHJlamVjdChuZXcgRXJyb3IoJ1RpbWVvdXQgd2FpdGluZyBmb3IgUlBDIHJlc3BvbnNlIGFmdGVyICcgKyBtaWxpc2Vjb25kc1RvV2FpdCArICcgbXMnKSksXG4gICAgICAgICAgICAgICAgICAgIG1pbGlzZWNvbmRzVG9XYWl0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pO1xuICAgIH07XG5cblxuICAgIGNvbnN0IGNhbGxiYWNrcyA9IHt9O1xuXG4gICAgY29uc3QgcmVnaXN0ZXJlZFByb2NlZHVyZXMgPSB7fTtcblxuICAgIGNvbnN0IHJlZ2lzdGVyID0gZnVuY3Rpb24obmFtZSwgaW1wbGVtZW50YXRpb24pIHtcbiAgICAgICAgaWYgKGltcGxlbWVudGF0aW9uKSB7XG4gICAgICAgICAgICByZWdpc3RlcmVkUHJvY2VkdXJlc1tuYW1lXSA9IGltcGxlbWVudGF0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHJlZ2lzdGVyZWRQcm9jZWR1cmVzW25hbWVdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE5leHRDYWxsSWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCByYW5kb21JZDtcbiAgICAgICAgd2hpbGUoIXJhbmRvbUlkIHx8IChyYW5kb21JZCBpbiBjYWxsYmFja3MpKSB7XG4gICAgICAgICAgICByYW5kb21JZCA9IFwiY2JcIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnJlcGxhY2UoL1teYS16XSsvZywgJycpLnN1YnN0cigwLCA4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZG9tSWQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAodGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4sIG1lc3NhZ2UpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRhcmdldFdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFJQQ19NRVNTQUdFX1RZUEUsXG4gICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IG1lc3NhZ2V9LCB0YXJnZXRPcmlnaW4gfHwgXCIqXCIpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGludm9rZSA9ICh0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgcHJvY2VkdXJlLCBhcmd1bWVudExpc3QpID0+IHtcbiAgICAgICAgY29uc3QgY2FsbElkID0gZ2V0TmV4dENhbGxJZCgpO1xuICAgICAgICBsZXQgcmVzdWx0UHJvbWlzZSA9IHNlbmRNZXNzYWdlKHRhcmdldFdpbmRvdywgdGFyZ2V0T3JpZ2luLCB7XG4gICAgICAgICAgICBcImNvbnRlbnRzXCI6IFJFUVVFU1QsXG4gICAgICAgICAgICBcImNhbGxJZFwiIDogY2FsbElkLFxuICAgICAgICAgICAgXCJwcm9jZWR1cmVcIjogcHJvY2VkdXJlLFxuICAgICAgICAgICAgXCJhcmd1bWVudExpc3RcIjogKGFyZ3VtZW50TGlzdCB8fCBbXSlcbiAgICAgICAgfSkudGhlbigoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFja3NbY2FsbElkXSA9IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbElkXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJleGNlcHRpb25cIjogKGV4Y2VwdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2NhbGxJZF07XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXhjZXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAodGltZW91dCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdFByb21pc2UgPSB0aW1lYm94UHJvbWlzZShyZXN1bHRQcm9taXNlLCB0aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWVyZ2UgPSAoLi4ub2JqZWN0cykgPT4ge1xuICAgICAgICBjb25zdCBkZXN0ID0ge307XG4gICAgICAgIG9iamVjdHMuZm9yRWFjaChvYmogPT4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgZGVzdFtrZXldID0gb2JqW2tleV07XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIGRlc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybWF0RXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2luZG93UmVmLkpTT04uc3RyaW5naWZ5KG1lcmdlKGVyciwge1wibWVzc2FnZVwiOiBlcnIubWVzc2FnZX0pKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uZCA9IChtZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VFdmVudC5kYXRhLm1lc3NhZ2VcbiAgICAgICAgY29uc3QgY2FsbElkID0gbWVzc2FnZS5jYWxsSWQ7XG4gICAgICAgIGNvbnN0IHByb2NlZHVyZSA9IG1lc3NhZ2UucHJvY2VkdXJlO1xuICAgICAgICBjb25zdCBhcmd1bWVudExpc3QgPSBtZXNzYWdlLmFyZ3VtZW50TGlzdDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VPcmlnaW4gPSAhbWVzc2FnZUV2ZW50Lm9yaWdpbiB8fCBtZXNzYWdlRXZlbnQub3JpZ2luID09PSBcIm51bGxcIiA/IG51bGwgOiBtZXNzYWdlRXZlbnQub3JpZ2luO1xuICAgICAgICBjb25zdCBzZW5kRXJyb3IgPSAoZXgpID0+IHNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VFdmVudC5zb3VyY2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPcmlnaW4sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImNhbGxJZFwiIDogY2FsbElkLFxuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRzXCI6IEVYQ0VQVElPTixcbiAgICAgICAgICAgICAgICAgICAgXCJleGNlcHRpb25cIjogZm9ybWF0RXJyb3IoZXgpfSk7XG4gICAgICAgIGlmIChyZWdpc3RlcmVkUHJvY2VkdXJlc1twcm9jZWR1cmVdKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRQcm9jZWR1cmVzW3Byb2NlZHVyZV0uYXBwbHkobWVzc2FnZUV2ZW50LCBhcmd1bWVudExpc3QpKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0+IHNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFdmVudC5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VPcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxJZFwiIDogY2FsbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRzXCI6IFJFU1VMVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogcmVzdWx0fSkuY2F0Y2goc2VuZEVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRFcnJvcik7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kRXJyb3IoZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRFcnJvcihcIlByb2NlZHVyZSBub3QgZm91bmQ6IFwiICsgcHJvY2VkdXJlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZWN2ID0gKG1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoKG9yaWdpbldoaXRlbGlzdC5sZW5ndGggPCAxIHx8IG9yaWdpbldoaXRlbGlzdC5pbmRleE9mKG1lc3NhZ2VFdmVudC5vcmlnaW4pID4gLTEpICYmXG4gICAgICAgICAgICBtZXNzYWdlRXZlbnQuZGF0YSAmJiBtZXNzYWdlRXZlbnQuZGF0YS50eXBlID09PSBSUENfTUVTU0FHRV9UWVBFKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZUV2ZW50LmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29udGVudHMgPT09IFJFUVVFU1QpIHtcbiAgICAgICAgICAgICAgICByZXNwb25kKG1lc3NhZ2VFdmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxJZCA9IG1lc3NhZ2UuY2FsbElkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gbWVzc2FnZS5jb250ZW50cztcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudHMgJiYgY2FsbGJhY2tzW2NhbGxJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzW2NhbGxJZF1bY29udGVudHNdKG1lc3NhZ2VbY29udGVudHNdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlY3YpO1xuICAgIH07XG5cbiAgICAvLyBhdHRhY2ggbGlzdGVuZXJcbiAgICB3aW5kb3dSZWYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjdik7XG5cbiAgICByZXR1cm4ge3JlZ2lzdGVyLCBpbnZva2UsIGNsb3NlfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9