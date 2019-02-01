(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("iframerpc", [], factory);
	else if(typeof exports === 'object')
		exports["iframerpc"] = factory();
	else
		root["iframerpc"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/iframerpc.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/iframerpc.js":
/*!**************************!*\
  !*** ./src/iframerpc.js ***!
  \**************************/
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

    return windowRef.JSON.stringify(merge(err));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZnJhbWVycGMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2lmcmFtZXJwYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pZnJhbWVycGMvLi9zcmMvaWZyYW1lcnBjLmpzIl0sIm5hbWVzIjpbImluaXQiLCJSRVFVRVNUIiwiUkVTVUxUIiwiRVhDRVBUSU9OIiwiUlBDX01FU1NBR0VfVFlQRSIsIndpbmRvd1JlZiIsIndpbmRvdyIsIm9yaWdpbldoaXRlbGlzdCIsInRpbWVvdXQiLCJ0aW1lYm94UHJvbWlzZSIsIm9yaWdpbmFsUHJvbWlzZSIsIm1pbGlzZWNvbmRzVG9XYWl0IiwiUHJvbWlzZSIsInJhY2UiLCJfcmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJFcnJvciIsImNhbGxiYWNrcyIsInJlZ2lzdGVyZWRQcm9jZWR1cmVzIiwicmVnaXN0ZXIiLCJuYW1lIiwiaW1wbGVtZW50YXRpb24iLCJnZXROZXh0Q2FsbElkIiwicmFuZG9tSWQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyIiwic2VuZE1lc3NhZ2UiLCJ0YXJnZXRXaW5kb3ciLCJ0YXJnZXRPcmlnaW4iLCJtZXNzYWdlIiwicmVzb2x2ZSIsInBvc3RNZXNzYWdlIiwiZSIsImludm9rZSIsInByb2NlZHVyZSIsImFyZ3VtZW50TGlzdCIsImNhbGxJZCIsInJlc3VsdFByb21pc2UiLCJ0aGVuIiwicmVzdWx0IiwiZXhjZXB0aW9uIiwibWVyZ2UiLCJkZXN0Iiwib2JqZWN0cyIsImZvckVhY2giLCJvYmoiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwia2V5IiwiZm9ybWF0RXJyb3IiLCJlcnIiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uZCIsIm1lc3NhZ2VFdmVudCIsImRhdGEiLCJyZXNwb25zZU9yaWdpbiIsIm9yaWdpbiIsInJlc3BvbnNlIiwic2VuZEVycm9yIiwiZXgiLCJzb3VyY2UiLCJhcHBseSIsImNhdGNoIiwicmVjdiIsImxlbmd0aCIsImluZGV4T2YiLCJ0eXBlIiwiY29udGVudHMiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUNsRmUsa0JBQUNBLElBQUQsRUFBVTtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQUEsTUFBMkJDLE1BQU0sR0FBRyxRQUFwQztBQUFBLE1BQThDQyxTQUFTLEdBQUcsV0FBMUQsQ0FuQnFCLENBbUJrRDs7QUFDdkUsTUFBTUMsZ0JBQWdCLEdBQUcsWUFBekI7QUFFQUosTUFBSSxHQUFHQSxJQUFJLElBQUksRUFB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RkQsQ0E5SnFCLENBa0tyQjs7O0FBQ0EvRCxXQUFTLENBQUNzRSxnQkFBVixDQUEyQixTQUEzQixFQUFzQ1AsSUFBdEM7QUFFQSxTQUFPO0FBQUNoRCxZQUFRLEVBQVJBLFFBQUQ7QUFBV2lCLFVBQU0sRUFBTkEsTUFBWDtBQUFtQm9DLFNBQUssRUFBTEE7QUFBbkIsR0FBUDtBQUNILEMiLCJmaWxlIjoiaWZyYW1lcnBjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJpZnJhbWVycGNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaWZyYW1lcnBjXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImlmcmFtZXJwY1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pZnJhbWVycGMuanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCAoaW5pdCkgPT4ge1xuICAgIC8qXG4gICAgICAgIE1TRyBmb3JtYXRcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogaWZyYW1lLXJwY1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRzOiByZXF1ZXN0LCByZXN1bHQgb3IgZXhjZXB0aW9uXG4gICAgICAgICAgICAgICAgY2FsbElkOiByYW5kb20gaWRcbiAgICAgICAgICAgICAgICAtLSByZXF1ZXN0IC0tXG4gICAgICAgICAgICAgICAgcHJvY2VkdXJlOlxuICAgICAgICAgICAgICAgIGFyZ3VtZW50TGlzdDpcbiAgICAgICAgICAgICAgICAtLSByZXN1bHQgLS1cbiAgICAgICAgICAgICAgICByZXN1bHQ6XG4gICAgICAgICAgICAgICAgLS0gZXhjZXB0aW9uIC0tXG4gICAgICAgICAgICAgICAgZXhjZXB0aW9uOiBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICovXG5cbiAgICBjb25zdCBSRVFVRVNUID0gXCJyZXF1ZXN0XCIsIFJFU1VMVCA9IFwicmVzdWx0XCIsIEVYQ0VQVElPTiA9IFwiZXhjZXB0aW9uXCI7IC8vIFRPRE86IHR5cGUgbm8gc3VjaCBtZXRob2QsIGV4Y2VwdGlvbiwgdGltZW91dCwgZXRjLlxuICAgIGNvbnN0IFJQQ19NRVNTQUdFX1RZUEUgPSBcImlmcmFtZS1ycGNcIjtcblxuICAgIGluaXQgPSBpbml0IHx8IHt9O1xuICAgIGNvbnN0IHdpbmRvd1JlZiA9IGluaXQud2luZG93IHx8IHdpbmRvdztcbiAgICBjb25zdCBvcmlnaW5XaGl0ZWxpc3QgPSBpbml0Lm9yaWdpbldoaXRlbGlzdCB8fCBbXTtcbiAgICBjb25zdCB0aW1lb3V0ID0gaW5pdC50aW1lb3V0IHx8IDA7XG5cbiAgICBjb25zdCB0aW1lYm94UHJvbWlzZSA9IChvcmlnaW5hbFByb21pc2UsIG1pbGlzZWNvbmRzVG9XYWl0KSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgb3JpZ2luYWxQcm9taXNlLFxuICAgICAgICAgICAgbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3dSZWYuc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gcmVqZWN0KG5ldyBFcnJvcignVGltZW91dCB3YWl0aW5nIGZvciBSUEMgcmVzcG9uc2UgYWZ0ZXIgJyArIG1pbGlzZWNvbmRzVG9XYWl0ICsgJyBtcycpKSxcbiAgICAgICAgICAgICAgICAgICAgbWlsaXNlY29uZHNUb1dhaXQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgXSk7XG4gICAgfTtcblxuXG4gICAgY29uc3QgY2FsbGJhY2tzID0ge307XG5cbiAgICBjb25zdCByZWdpc3RlcmVkUHJvY2VkdXJlcyA9IHt9O1xuXG4gICAgY29uc3QgcmVnaXN0ZXIgPSBmdW5jdGlvbihuYW1lLCBpbXBsZW1lbnRhdGlvbikge1xuICAgICAgICBpZiAoaW1wbGVtZW50YXRpb24pIHtcbiAgICAgICAgICAgIHJlZ2lzdGVyZWRQcm9jZWR1cmVzW25hbWVdID0gaW1wbGVtZW50YXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgcmVnaXN0ZXJlZFByb2NlZHVyZXNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0TmV4dENhbGxJZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJhbmRvbUlkO1xuICAgICAgICB3aGlsZSghcmFuZG9tSWQgfHwgKHJhbmRvbUlkIGluIGNhbGxiYWNrcykpIHtcbiAgICAgICAgICAgIHJhbmRvbUlkID0gXCJjYlwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIDgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByYW5kb21JZDtcbiAgICB9XG5cbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9ICh0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgbWVzc2FnZSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGFyZ2V0V2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogUlBDX01FU1NBR0VfVFlQRSxcbiAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogbWVzc2FnZX0sIHRhcmdldE9yaWdpbiB8fCBcIipcIik7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaW52b2tlID0gKHRhcmdldFdpbmRvdywgdGFyZ2V0T3JpZ2luLCBwcm9jZWR1cmUsIGFyZ3VtZW50TGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBjYWxsSWQgPSBnZXROZXh0Q2FsbElkKCk7XG4gICAgICAgIGxldCByZXN1bHRQcm9taXNlID0gc2VuZE1lc3NhZ2UodGFyZ2V0V2luZG93LCB0YXJnZXRPcmlnaW4sIHtcbiAgICAgICAgICAgIFwiY29udGVudHNcIjogUkVRVUVTVCxcbiAgICAgICAgICAgIFwiY2FsbElkXCIgOiBjYWxsSWQsXG4gICAgICAgICAgICBcInByb2NlZHVyZVwiOiBwcm9jZWR1cmUsXG4gICAgICAgICAgICBcImFyZ3VtZW50TGlzdFwiOiAoYXJndW1lbnRMaXN0IHx8IFtdKVxuICAgICAgICB9KS50aGVuKCgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrc1tjYWxsSWRdID0ge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNhbGxiYWNrc1tjYWxsSWRdO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImV4Y2VwdGlvblwiOiAoZXhjZXB0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbElkXTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihleGNlcHRpb24pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSk7XG4gICAgICAgIGlmICh0aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0UHJvbWlzZSA9IHRpbWVib3hQcm9taXNlKHJlc3VsdFByb21pc2UsIHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgIH07XG5cbiAgICBjb25zdCBtZXJnZSA9ICguLi5vYmplY3RzKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc3QgPSB7fTtcbiAgICAgICAgb2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBkZXN0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gZGVzdDtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtYXRFcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aW5kb3dSZWYuSlNPTi5zdHJpbmdpZnkobWVyZ2UoZXJyKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbmQgPSAobWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlRXZlbnQuZGF0YS5tZXNzYWdlXG4gICAgICAgIGNvbnN0IGNhbGxJZCA9IG1lc3NhZ2UuY2FsbElkO1xuICAgICAgICBjb25zdCBwcm9jZWR1cmUgPSBtZXNzYWdlLnByb2NlZHVyZTtcbiAgICAgICAgY29uc3QgYXJndW1lbnRMaXN0ID0gbWVzc2FnZS5hcmd1bWVudExpc3Q7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlT3JpZ2luID0gIW1lc3NhZ2VFdmVudC5vcmlnaW4gfHwgbWVzc2FnZUV2ZW50Lm9yaWdpbiA9PT0gXCJudWxsXCIgPyBudWxsIDogbWVzc2FnZUV2ZW50Lm9yaWdpbjtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XCJjYWxsSWRcIiA6IGNhbGxJZH07XG4gICAgICAgIGNvbnN0IHNlbmRFcnJvciA9IChleCkgPT4gc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgbWVzc2FnZUV2ZW50LnNvdXJjZSxcbiAgICAgICAgICAgICAgICByZXNwb25zZU9yaWdpbixcbiAgICAgICAgICAgICAgICBtZXJnZShyZXNwb25zZSwge1xuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRzXCI6IEVYQ0VQVElPTixcbiAgICAgICAgICAgICAgICAgICAgXCJleGNlcHRpb25cIjogZm9ybWF0RXJyb3IoZXgpfSkpO1xuICAgICAgICBpZiAocmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlXSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkUHJvY2VkdXJlc1twcm9jZWR1cmVdLmFwcGx5KG1lc3NhZ2VFdmVudCwgYXJndW1lbnRMaXN0KSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9PiBzZW5kTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRXZlbnQuc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlKHJlc3BvbnNlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudHNcIjogUkVTVUxULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiByZXN1bHR9KSkuY2F0Y2goc2VuZEVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRFcnJvcik7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kRXJyb3IoZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRFcnJvcihcIlByb2NlZHVyZSBub3QgZm91bmQ6IFwiICsgcHJvY2VkdXJlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZWN2ID0gKG1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoKG9yaWdpbldoaXRlbGlzdC5sZW5ndGggPCAxIHx8IG9yaWdpbldoaXRlbGlzdC5pbmRleE9mKG1lc3NhZ2VFdmVudC5vcmlnaW4pID4gLTEpICYmXG4gICAgICAgICAgICBtZXNzYWdlRXZlbnQuZGF0YSAmJiBtZXNzYWdlRXZlbnQuZGF0YS50eXBlID09PSBSUENfTUVTU0FHRV9UWVBFKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZUV2ZW50LmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29udGVudHMgPT09IFJFUVVFU1QpIHtcbiAgICAgICAgICAgICAgICByZXNwb25kKG1lc3NhZ2VFdmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxJZCA9IG1lc3NhZ2UuY2FsbElkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gbWVzc2FnZS5jb250ZW50cztcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudHMgJiYgY2FsbGJhY2tzW2NhbGxJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzW2NhbGxJZF1bY29udGVudHNdKG1lc3NhZ2VbY29udGVudHNdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlY3YpO1xuICAgIH07XG5cbiAgICAvLyBhdHRhY2ggbGlzdGVuZXJcbiAgICB3aW5kb3dSZWYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjdik7XG5cbiAgICByZXR1cm4ge3JlZ2lzdGVyLCBpbnZva2UsIGNsb3NlfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9