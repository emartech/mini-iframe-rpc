(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("iframeRPC", [], factory);
	else if(typeof exports === 'object')
		exports["iframeRPC"] = factory();
	else
		root["iframeRPC"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/iframeRPC.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/iframeRPC.js":
/*!**************************!*\
  !*** ./src/iframeRPC.js ***!
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
    registeredProcedures[name] = implementation;
  };

  var getNextCallId = function getNextCallId() {
    var randomId;

    while (!randomId || randomId in callbacks) {
      randomId = "cb" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
    }

    return randomId;
  };

  var sendMessage = function sendMessage(targetWindow, targetOrigin, message) {
    var fullMessage = {
      "type": RPC_MESSAGE_TYPE,
      "message": message
    };
    return targetWindow.postMessage(fullMessage, targetOrigin || "*");
  };

  var invoke = function invoke(targetWindow, targetOrigin, procedure, argumentList) {
    var callId = getNextCallId();
    sendMessage(targetWindow, targetOrigin, {
      "contents": REQUEST,
      "callId": callId,
      "procedure": procedure,
      "argumentList": argumentList || []
    });
    var resultPromise = new Promise(function (resolve, reject) {
      callbacks[callId] = {
        "result": function result(_result) {
          delete callbacks[callId];
          resolve(_result);
        },
        "exception": function exception(_exception) {
          delete callbacks[callId];
          reject(_exception);
        }
      };
    });
    return timeout > 0 ? timeboxPromise(resultPromise, timeout) : resultPromise;
  };

  var cloneError = function cloneError(err) {
    if (!(err instanceof Error)) {
      return err;
    }

    var plainObject = {};
    Object.getOwnPropertyNames(err).forEach(function (key) {
      plainObject[key] = err[key];
    });
    return plainObject;
  };

  var recv = function recv(messageEvent) {
    if ((originWhitelist.length < 1 || originWhitelist.indexOf(messageEvent.origin) > -1) && messageEvent.data && messageEvent.data.type === RPC_MESSAGE_TYPE) {
      var message = messageEvent.data.message;
      var callId = message.callId;

      if (message.contents === REQUEST) {
        var procedure = message.procedure;
        var argumentList = message.argumentList;
        var responseOrigin = !messageEvent.origin || messageEvent.origin === "null" ? null : messageEvent.origin;
        var response = {
          "callId": callId
        };

        var sendError = function sendError(ex) {
          sendMessage(messageEvent.source, responseOrigin, Object.assign(response, {
            "contents": EXCEPTION,
            "exception": cloneError(ex)
          }));
        };

        if (registeredProcedures[procedure]) {
          try {
            Promise.resolve(registeredProcedures[procedure].apply(messageEvent, argumentList)).then(function (result) {
              return sendMessage(messageEvent.source, responseOrigin, Object.assign(response, {
                "contents": RESULT,
                "result": result
              }));
            }, sendError);
          } catch (ex) {
            sendError(ex.toString());
          }
        } else {
          sendError("Procedure not found: " + procedure);
        }
      } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZnJhbWVSUEMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2lmcmFtZVJQQy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pZnJhbWVSUEMvLi9zcmMvaWZyYW1lUlBDLmpzIl0sIm5hbWVzIjpbImluaXQiLCJSRVFVRVNUIiwiUkVTVUxUIiwiRVhDRVBUSU9OIiwiUlBDX01FU1NBR0VfVFlQRSIsIndpbmRvd1JlZiIsIndpbmRvdyIsIm9yaWdpbldoaXRlbGlzdCIsInRpbWVvdXQiLCJ0aW1lYm94UHJvbWlzZSIsIm9yaWdpbmFsUHJvbWlzZSIsIm1pbGlzZWNvbmRzVG9XYWl0IiwiUHJvbWlzZSIsInJhY2UiLCJfcmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJFcnJvciIsImNhbGxiYWNrcyIsInJlZ2lzdGVyZWRQcm9jZWR1cmVzIiwicmVnaXN0ZXIiLCJuYW1lIiwiaW1wbGVtZW50YXRpb24iLCJnZXROZXh0Q2FsbElkIiwicmFuZG9tSWQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyIiwic2VuZE1lc3NhZ2UiLCJ0YXJnZXRXaW5kb3ciLCJ0YXJnZXRPcmlnaW4iLCJtZXNzYWdlIiwiZnVsbE1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImludm9rZSIsInByb2NlZHVyZSIsImFyZ3VtZW50TGlzdCIsImNhbGxJZCIsInJlc3VsdFByb21pc2UiLCJyZXNvbHZlIiwicmVzdWx0IiwiZXhjZXB0aW9uIiwiY2xvbmVFcnJvciIsImVyciIsInBsYWluT2JqZWN0IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvckVhY2giLCJrZXkiLCJyZWN2IiwibWVzc2FnZUV2ZW50IiwibGVuZ3RoIiwiaW5kZXhPZiIsIm9yaWdpbiIsImRhdGEiLCJ0eXBlIiwiY29udGVudHMiLCJyZXNwb25zZU9yaWdpbiIsInJlc3BvbnNlIiwic2VuZEVycm9yIiwiZXgiLCJzb3VyY2UiLCJhc3NpZ24iLCJhcHBseSIsInRoZW4iLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUNsRmUsa0JBQUNBLElBQUQsRUFBVTtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQUEsTUFBMkJDLE1BQU0sR0FBRyxRQUFwQztBQUFBLE1BQThDQyxTQUFTLEdBQUcsV0FBMUQsQ0FuQnFCLENBbUJrRDs7QUFDdkUsTUFBTUMsZ0JBQWdCLEdBQUcsWUFBekI7QUFFQUosTUFBSSxHQUFHQSxJQUFJLElBQUksRUFBZjtBQUNBLE1BQU1LLFNBQVMsR0FBR0wsSUFBSSxDQUFDTSxN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LENBQWtCbUIsUUFBbEIsRUFBNEJ6QixPQUFPLENBQUN5QixRQUFELENBQW5DO0FBQ0g7QUFDSjtBQUNKO0FBQ0osR0ExQ0Q7O0FBNENBLE1BQU1TLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVc7QUFDckI5RCxhQUFTLENBQUMrRCxtQkFBVixDQUE4QixTQUE5QixFQUF5Q2pCLElBQXpDO0FBQ0gsR0FGRCxDQTVJcUIsQ0FnSnJCOzs7QUFDQTlDLFdBQVMsQ0FBQ2dFLGdCQUFWLENBQTJCLFNBQTNCLEVBQXNDbEIsSUFBdEM7QUFFQSxTQUFPO0FBQUMvQixZQUFRLEVBQVJBLFFBQUQ7QUFBV2dCLFVBQU0sRUFBTkEsTUFBWDtBQUFtQitCLFNBQUssRUFBTEE7QUFBbkIsR0FBUDtBQUNILEMiLCJmaWxlIjoiaWZyYW1lUlBDLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJpZnJhbWVSUENcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaWZyYW1lUlBDXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImlmcmFtZVJQQ1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pZnJhbWVSUEMuanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCAoaW5pdCkgPT4ge1xuICAgIC8qXG4gICAgICAgIE1TRyBmb3JtYXRcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogaWZyYW1lLXJwY1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRzOiByZXF1ZXN0LCByZXN1bHQgb3IgZXhjZXB0aW9uXG4gICAgICAgICAgICAgICAgY2FsbElkOiByYW5kb20gaWRcbiAgICAgICAgICAgICAgICAtLSByZXF1ZXN0IC0tXG4gICAgICAgICAgICAgICAgcHJvY2VkdXJlOlxuICAgICAgICAgICAgICAgIGFyZ3VtZW50TGlzdDpcbiAgICAgICAgICAgICAgICAtLSByZXN1bHQgLS1cbiAgICAgICAgICAgICAgICByZXN1bHQ6XG4gICAgICAgICAgICAgICAgLS0gZXhjZXB0aW9uIC0tXG4gICAgICAgICAgICAgICAgZXhjZXB0aW9uOiBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgKi9cbiAgICBjb25zdCBSRVFVRVNUID0gXCJyZXF1ZXN0XCIsIFJFU1VMVCA9IFwicmVzdWx0XCIsIEVYQ0VQVElPTiA9IFwiZXhjZXB0aW9uXCI7IC8vIFRPRE86IHR5cGUgbm8gc3VjaCBtZXRob2QsIGV4Y2VwdGlvbiwgdGltZW91dCwgZXRjLlxuICAgIGNvbnN0IFJQQ19NRVNTQUdFX1RZUEUgPSBcImlmcmFtZS1ycGNcIjtcblxuICAgIGluaXQgPSBpbml0IHx8IHt9O1xuICAgIGNvbnN0IHdpbmRvd1JlZiA9IGluaXQud2luZG93IHx8IHdpbmRvdztcbiAgICBjb25zdCBvcmlnaW5XaGl0ZWxpc3QgPSBpbml0Lm9yaWdpbldoaXRlbGlzdCB8fCBbXTtcbiAgICBjb25zdCB0aW1lb3V0ID0gaW5pdC50aW1lb3V0IHx8IDA7XG5cbiAgICBjb25zdCB0aW1lYm94UHJvbWlzZSA9IChvcmlnaW5hbFByb21pc2UsIG1pbGlzZWNvbmRzVG9XYWl0KSA9PiB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgb3JpZ2luYWxQcm9taXNlLFxuICAgICAgICBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHdpbmRvd1JlZi5zZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4gcmVqZWN0KG5ldyBFcnJvcignVGltZW91dCB3YWl0aW5nIGZvciBSUEMgcmVzcG9uc2UgYWZ0ZXIgJyArIG1pbGlzZWNvbmRzVG9XYWl0ICsgJyBtcycpKSxcbiAgICAgICAgICAgIG1pbGlzZWNvbmRzVG9XYWl0KTtcbiAgICAgICAgfSlcbiAgICAgIF0pO1xuICAgIH07XG5cblxuICAgIGNvbnN0IGNhbGxiYWNrcyA9IHt9O1xuXG4gICAgY29uc3QgcmVnaXN0ZXJlZFByb2NlZHVyZXMgPSB7fTtcblxuICAgIGNvbnN0IHJlZ2lzdGVyID0gZnVuY3Rpb24obmFtZSwgaW1wbGVtZW50YXRpb24pIHtcbiAgICAgICAgcmVnaXN0ZXJlZFByb2NlZHVyZXNbbmFtZV0gPSBpbXBsZW1lbnRhdGlvbjtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0TmV4dENhbGxJZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJhbmRvbUlkO1xuICAgICAgICB3aGlsZSghcmFuZG9tSWQgfHwgKHJhbmRvbUlkIGluIGNhbGxiYWNrcykpIHtcbiAgICAgICAgICAgIHJhbmRvbUlkID0gXCJjYlwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIDgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByYW5kb21JZDtcbiAgICB9XG5cbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9ICh0YXJnZXRXaW5kb3csIHRhcmdldE9yaWdpbiwgbWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zdCBmdWxsTWVzc2FnZSA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBSUENfTUVTU0FHRV9UWVBFLFxuICAgICAgICAgICAgXCJtZXNzYWdlXCI6IG1lc3NhZ2UgfTtcbiAgICAgICAgcmV0dXJuIHRhcmdldFdpbmRvdy5wb3N0TWVzc2FnZShmdWxsTWVzc2FnZSwgdGFyZ2V0T3JpZ2luIHx8IFwiKlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW52b2tlID0gKHRhcmdldFdpbmRvdywgdGFyZ2V0T3JpZ2luLCBwcm9jZWR1cmUsIGFyZ3VtZW50TGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBjYWxsSWQgPSBnZXROZXh0Q2FsbElkKCk7XG4gICAgICAgIHNlbmRNZXNzYWdlKHRhcmdldFdpbmRvdywgdGFyZ2V0T3JpZ2luLCB7XG4gICAgICAgICAgICBcImNvbnRlbnRzXCI6IFJFUVVFU1QsXG4gICAgICAgICAgICBcImNhbGxJZFwiIDogY2FsbElkLFxuICAgICAgICAgICAgXCJwcm9jZWR1cmVcIjogcHJvY2VkdXJlLFxuICAgICAgICAgICAgXCJhcmd1bWVudExpc3RcIjogKGFyZ3VtZW50TGlzdCB8fCBbXSlcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFja3NbY2FsbElkXSA9IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbElkXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJleGNlcHRpb25cIjogKGV4Y2VwdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2NhbGxJZF07XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChleGNlcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGltZW91dCA+IDAgPyB0aW1lYm94UHJvbWlzZShyZXN1bHRQcm9taXNlLCB0aW1lb3V0KSA6IHJlc3VsdFByb21pc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsb25lRXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbGFpbk9iamVjdCA9IHt9O1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlcnIpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBwbGFpbk9iamVjdFtrZXldID0gZXJyW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGxhaW5PYmplY3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY3YgPSAobWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmICgob3JpZ2luV2hpdGVsaXN0Lmxlbmd0aCA8IDEgfHwgb3JpZ2luV2hpdGVsaXN0LmluZGV4T2YobWVzc2FnZUV2ZW50Lm9yaWdpbikgPiAtMSkgJiZcbiAgICAgICAgICAgIG1lc3NhZ2VFdmVudC5kYXRhICYmIG1lc3NhZ2VFdmVudC5kYXRhLnR5cGUgPT09IFJQQ19NRVNTQUdFX1RZUEUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlRXZlbnQuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICBjb25zdCBjYWxsSWQgPSBtZXNzYWdlLmNhbGxJZDtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmNvbnRlbnRzID09PSBSRVFVRVNUKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvY2VkdXJlID0gbWVzc2FnZS5wcm9jZWR1cmU7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJndW1lbnRMaXN0ID0gbWVzc2FnZS5hcmd1bWVudExpc3Q7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VPcmlnaW4gPSAhbWVzc2FnZUV2ZW50Lm9yaWdpbiB8fCBtZXNzYWdlRXZlbnQub3JpZ2luID09PSBcIm51bGxcIiA/IG51bGwgOiBtZXNzYWdlRXZlbnQub3JpZ2luO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1wiY2FsbElkXCIgOiBjYWxsSWR9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbmRFcnJvciA9IChleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFdmVudC5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZU9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzcG9uc2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRzXCI6IEVYQ0VQVElPTixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2VwdGlvblwiOiBjbG9uZUVycm9yKGV4KX0pKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChyZWdpc3RlcmVkUHJvY2VkdXJlc1twcm9jZWR1cmVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZFByb2NlZHVyZXNbcHJvY2VkdXJlXS5hcHBseShtZXNzYWdlRXZlbnQsIGFyZ3VtZW50TGlzdCkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0+IHNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRXZlbnQuc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZU9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXNwb25zZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50c1wiOiBSRVNVTFQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiByZXN1bHR9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRFcnJvcihleC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRFcnJvcihcIlByb2NlZHVyZSBub3QgZm91bmQ6IFwiICsgcHJvY2VkdXJlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gbWVzc2FnZS5jb250ZW50cztcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudHMgJiYgY2FsbGJhY2tzW2NhbGxJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzW2NhbGxJZF1bY29udGVudHNdKG1lc3NhZ2VbY29udGVudHNdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlY3YpO1xuICAgIH07XG5cbiAgICAvLyBhdHRhY2ggbGlzdGVuZXJcbiAgICB3aW5kb3dSZWYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjdik7XG5cbiAgICByZXR1cm4ge3JlZ2lzdGVyLCBpbnZva2UsIGNsb3NlfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9