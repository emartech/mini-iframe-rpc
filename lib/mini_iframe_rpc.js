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
    var response = {
      "callId": callId
    };

    var sendError = function sendError(ex) {
      return sendMessage(messageEvent.source, responseOrigin, merge(response, {
        "contents": EXCEPTION,
        "exception": formatError(ex)
      }));
    };

    if (registeredProcedures[procedure]) {
      try {
        return Promise.resolve(registeredProcedures[procedure].apply(messageEvent, argumentList)).then(function (result) {
          return sendMessage(messageEvent.source, responseOrigin, merge(response, {
            "contents": RESULT,
            "result": result
          })).catch(sendError);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pX2lmcmFtZV9ycGMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbmlfaWZyYW1lX3JwYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5pX2lmcmFtZV9ycGMvLi9zcmMvbWluaV9pZnJhbWVfcnBjLmpzIl0sIm5hbWVzIjpbImluaXQiLCJSRVFVRVNUIiwiUkVTVUxUIiwiRVhDRVBUSU9OIiwiUlBDX01FU1NBR0VfVFlQRSIsIndpbmRvd1JlZiIsIndpbmRvdyIsIm9yaWdpbldoaXRlbGlzdCIsInRpbWVvdXQiLCJ0aW1lYm94UHJvbWlzZSIsIm9yaWdpbmFsUHJvbWlzZSIsIm1pbGlzZWNvbmRzVG9XYWl0IiwiUHJvbWlzZSIsInJhY2UiLCJfcmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJFcnJvciIsImNhbGxiYWNrcyIsInJlZ2lzdGVyZWRQcm9jZWR1cmVzIiwicmVnaXN0ZXIiLCJuYW1lIiwiaW1wbGVtZW50YXRpb24iLCJnZXROZXh0Q2FsbElkIiwicmFuZG9tSWQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyIiwic2VuZE1lc3NhZ2UiLCJ0YXJnZXRXaW5kb3ciLCJ0YXJnZXRPcmlnaW4iLCJtZXNzYWdlIiwicmVzb2x2ZSIsInBvc3RNZXNzYWdlIiwiZSIsImludm9rZSIsInByb2NlZHVyZSIsImFyZ3VtZW50TGlzdCIsImNhbGxJZCIsInJlc3VsdFByb21pc2UiLCJ0aGVuIiwicmVzdWx0IiwiZXhjZXB0aW9uIiwibWVyZ2UiLCJkZXN0Iiwib2JqZWN0cyIsImZvckVhY2giLCJvYmoiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwia2V5IiwiZm9ybWF0RXJyb3IiLCJlcnIiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uZCIsIm1lc3NhZ2VFdmVudCIsImRhdGEiLCJyZXNwb25zZU9yaWdpbiIsIm9yaWdpbiIsInJlc3BvbnNlIiwic2VuZEVycm9yIiwiZXgiLCJzb3VyY2UiLCJhcHBseSIsImNhdGNoIiwicmVjdiIsImxlbmd0aCIsImluZGV4T2YiLCJ0eXBlIiwiY29udGVudHMiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUNsRmUsa0JBQUNBLElBQUQsRUFBVTtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQUEsTUFBMkJDLE1BQU0sR0FBRyxRQUFwQztBQUFBLE1BQThDQyxTQUFTLEdBQUcsV0FBMUQsQ0FuQnFCLENBbUJrRDs7QUFDdkUsTUFBTUMsZ0JBQWdCLEdBQUcsWUFBekI7QUFFQUos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USxHQUFXO0FBQ3JCcEUsYUFBUyxDQUFDcUUsbUJBQVYsQ0FBOEIsU0FBOUIsRUFBeUNOLElBQXpDO0FBQ0gsR0FGRCxDQTlKcUIsQ0FrS3JCOzs7QUFDQS9ELFdBQVMsQ0FBQ3NFLGdCQUFWLENBQTJCLFNBQTNCLEVBQXNDUCxJQUF0QztBQUVBLFNBQU87QUFBQ2hELFlBQVEsRUFBUkEsUUFBRDtBQUFXaUIsVUFBTSxFQUFOQSxNQUFYO0FBQW1Cb0MsU0FBSyxFQUFMQTtBQUFuQixHQUFQO0FBQ0gsQyIsImZpbGUiOiJtaW5pX2lmcmFtZV9ycGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm1pbmlfaWZyYW1lX3JwY1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW5pX2lmcmFtZV9ycGNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWluaV9pZnJhbWVfcnBjXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21pbmlfaWZyYW1lX3JwYy5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IChpbml0KSA9PiB7XG4gICAgLypcbiAgICAgICAgTVNHIGZvcm1hdFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBpZnJhbWUtcnBjXG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgY29udGVudHM6IHJlcXVlc3QsIHJlc3VsdCBvciBleGNlcHRpb25cbiAgICAgICAgICAgICAgICBjYWxsSWQ6IHJhbmRvbSBpZFxuICAgICAgICAgICAgICAgIC0tIHJlcXVlc3QgLS1cbiAgICAgICAgICAgICAgICBwcm9jZWR1cmU6XG4gICAgICAgICAgICAgICAgYXJndW1lbnRMaXN0OlxuICAgICAgICAgICAgICAgIC0tIHJlc3VsdCAtLVxuICAgICAgICAgICAgICAgIHJlc3VsdDpcbiAgICAgICAgICAgICAgICAtLSBleGNlcHRpb24gLS1cbiAgICAgICAgICAgICAgICBleGNlcHRpb246IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKi9cblxuICAgIGNvbnN0IFJFUVVFU1QgPSBcInJlcXVlc3RcIiwgUkVTVUxUID0gXCJyZXN1bHRcIiwgRVhDRVBUSU9OID0gXCJleGNlcHRpb25cIjsgLy8gVE9ETzogdHlwZSBubyBzdWNoIG1ldGhvZCwgZXhjZXB0aW9uLCB0aW1lb3V0LCBldGMuXG4gICAgY29uc3QgUlBDX01FU1NBR0VfVFlQRSA9IFwiaWZyYW1lLXJwY1wiO1xuXG4gICAgaW5pdCA9IGluaXQgfHwge307XG4gICAgY29uc3Qgd2luZG93UmVmID0gaW5pdC53aW5kb3cgfHwgd2luZG93O1xuICAgIGNvbnN0IG9yaWdpbldoaXRlbGlzdCA9IGluaXQub3JpZ2luV2hpdGVsaXN0IHx8IFtdO1xuICAgIGNvbnN0IHRpbWVvdXQgPSBpbml0LnRpbWVvdXQgfHwgMDtcblxuICAgIGNvbnN0IHRpbWVib3hQcm9taXNlID0gKG9yaWdpbmFsUHJvbWlzZSwgbWlsaXNlY29uZHNUb1dhaXQpID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgICAgICAgICBvcmlnaW5hbFByb21pc2UsXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvd1JlZi5zZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiByZWplY3QobmV3IEVycm9yKCdUaW1lb3V0IHdhaXRpbmcgZm9yIFJQQyByZXNwb25zZSBhZnRlciAnICsgbWlsaXNlY29uZHNUb1dhaXQgKyAnIG1zJykpLFxuICAgICAgICAgICAgICAgICAgICBtaWxpc2Vjb25kc1RvV2FpdCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBdKTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBjYWxsYmFja3MgPSB7fTtcblxuICAgIGNvbnN0IHJlZ2lzdGVyZWRQcm9jZWR1cmVzID0ge307XG5cbiAgICBjb25zdCByZWdpc3RlciA9IGZ1bmN0aW9uKG5hbWUsIGltcGxlbWVudGF0aW9uKSB7XG4gICAgICAgIGlmIChpbXBsZW1lbnRhdGlvbikge1xuICAgICAgICAgICAgcmVnaXN0ZXJlZFByb2NlZHVyZXNbbmFtZV0gPSBpbXBsZW1lbnRhdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSByZWdpc3RlcmVkUHJvY2VkdXJlc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXROZXh0Q2FsbElkID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmFuZG9tSWQ7XG4gICAgICAgIHdoaWxlKCFyYW5kb21JZCB8fCAocmFuZG9tSWQgaW4gY2FsbGJhY2tzKSkge1xuICAgICAgICAgICAgcmFuZG9tSWQgPSBcImNiXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgOCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhbmRvbUlkO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKHRhcmdldFdpbmRvdywgdGFyZ2V0T3JpZ2luLCBtZXNzYWdlKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBSUENfTUVTU0FHRV9UWVBFLFxuICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBtZXNzYWdlfSwgdGFyZ2V0T3JpZ2luIHx8IFwiKlwiKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbnZva2UgPSAodGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4sIHByb2NlZHVyZSwgYXJndW1lbnRMaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxJZCA9IGdldE5leHRDYWxsSWQoKTtcbiAgICAgICAgbGV0IHJlc3VsdFByb21pc2UgPSBzZW5kTWVzc2FnZSh0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwge1xuICAgICAgICAgICAgXCJjb250ZW50c1wiOiBSRVFVRVNULFxuICAgICAgICAgICAgXCJjYWxsSWRcIiA6IGNhbGxJZCxcbiAgICAgICAgICAgIFwicHJvY2VkdXJlXCI6IHByb2NlZHVyZSxcbiAgICAgICAgICAgIFwiYXJndW1lbnRMaXN0XCI6IChhcmd1bWVudExpc3QgfHwgW10pXG4gICAgICAgIH0pLnRoZW4oKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2tzW2NhbGxJZF0gPSB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2NhbGxJZF07XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZXhjZXB0aW9uXCI6IChleGNlcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNhbGxiYWNrc1tjYWxsSWRdO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4Y2VwdGlvbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKHRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICByZXN1bHRQcm9taXNlID0gdGltZWJveFByb21pc2UocmVzdWx0UHJvbWlzZSwgdGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IG1lcmdlID0gKC4uLm9iamVjdHMpID0+IHtcbiAgICAgICAgY29uc3QgZGVzdCA9IHt9O1xuICAgICAgICBvYmplY3RzLmZvckVhY2gob2JqID0+IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIGRlc3Rba2V5XSA9IG9ialtrZXldO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBkZXN0O1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdEVycm9yID0gKGVycikgPT4ge1xuICAgICAgICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpbmRvd1JlZi5KU09OLnN0cmluZ2lmeShtZXJnZShlcnIsIHtcIm1lc3NhZ2VcIjogZXJyLm1lc3NhZ2V9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbmQgPSAobWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlRXZlbnQuZGF0YS5tZXNzYWdlXG4gICAgICAgIGNvbnN0IGNhbGxJZCA9IG1lc3NhZ2UuY2FsbElkO1xuICAgICAgICBjb25zdCBwcm9jZWR1cmUgPSBtZXNzYWdlLnByb2NlZHVyZTtcbiAgICAgICAgY29uc3QgYXJndW1lbnRMaXN0ID0gbWVzc2FnZS5hcmd1bWVudExpc3Q7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlT3JpZ2luID0gIW1lc3NhZ2VFdmVudC5vcmlnaW4gfHwgbWVzc2FnZUV2ZW50Lm9yaWdpbiA9PT0gXCJudWxsXCIgPyBudWxsIDogbWVzc2FnZUV2ZW50Lm9yaWdpbjtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XCJjYWxsSWRcIiA6IGNhbGxJZH07XG4gICAgICAgIGNvbnN0IHNlbmRFcnJvciA9IChleCkgPT4gc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgbWVzc2FnZUV2ZW50LnNvdXJjZSxcbiAgICAgICAgICAgICAgICByZXNwb25zZU9yaWdpbixcbiAgICAgICAgICAgICAgICBtZXJnZShyZXNwb25zZSwge1xuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRzXCI6IEVYQ0VQVElPTixcbiAgICAgICAgICAgICAgICAgICAgXCJleGNlcHRpb25cIjogZm9ybWF0RXJyb3IoZXgpfSkpO1xuICAgICAgICBpZiAocmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlXSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkUHJvY2VkdXJlc1twcm9jZWR1cmVdLmFwcGx5KG1lc3NhZ2VFdmVudCwgYXJndW1lbnRMaXN0KSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9PiBzZW5kTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRXZlbnQuc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlKHJlc3BvbnNlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudHNcIjogUkVTVUxULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiByZXN1bHR9KSkuY2F0Y2goc2VuZEVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRFcnJvcik7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kRXJyb3IoZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRFcnJvcihcIlByb2NlZHVyZSBub3QgZm91bmQ6IFwiICsgcHJvY2VkdXJlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZWN2ID0gKG1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoKG9yaWdpbldoaXRlbGlzdC5sZW5ndGggPCAxIHx8IG9yaWdpbldoaXRlbGlzdC5pbmRleE9mKG1lc3NhZ2VFdmVudC5vcmlnaW4pID4gLTEpICYmXG4gICAgICAgICAgICBtZXNzYWdlRXZlbnQuZGF0YSAmJiBtZXNzYWdlRXZlbnQuZGF0YS50eXBlID09PSBSUENfTUVTU0FHRV9UWVBFKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZUV2ZW50LmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29udGVudHMgPT09IFJFUVVFU1QpIHtcbiAgICAgICAgICAgICAgICByZXNwb25kKG1lc3NhZ2VFdmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxJZCA9IG1lc3NhZ2UuY2FsbElkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gbWVzc2FnZS5jb250ZW50cztcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudHMgJiYgY2FsbGJhY2tzW2NhbGxJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzW2NhbGxJZF1bY29udGVudHNdKG1lc3NhZ2VbY29udGVudHNdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlY3YpO1xuICAgIH07XG5cbiAgICAvLyBhdHRhY2ggbGlzdGVuZXJcbiAgICB3aW5kb3dSZWYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjdik7XG5cbiAgICByZXR1cm4ge3JlZ2lzdGVyLCBpbnZva2UsIGNsb3NlfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9