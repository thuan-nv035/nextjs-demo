webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_vanth_OneDrive_Desktop_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_vanth_OneDrive_Desktop_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vanth_OneDrive_Desktop_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_vanth_OneDrive_Desktop_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_vanth_OneDrive_Desktop_next_cy_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/product */ "./src/actions/product.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ "./src/store.js");






var _jsxFileName = "C:\\Users\\vanth\\OneDrive\\Desktop\\next-cy\\src\\pages\\_app.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_vanth_OneDrive_Desktop_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var MyApp = function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_7__["getProduct"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("meta", {
        name: "viewport",
        content: "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
        children: "demo app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(MyApp, "rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"]];
});

_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(C_Users_vanth_OneDrive_Desktop_next_cy_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_vanth_OneDrive_Desktop_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var Component, ctx, pageProps;
    return C_Users_vanth_OneDrive_Desktop_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref2.Component, ctx = _ref2.ctx;
            _context.t0 = _objectSpread;
            _context.t1 = {};

            if (!Component.getInitialProps) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return Component.getInitialProps(ctx);

          case 6:
            _context.t2 = _context.sent;
            _context.next = 10;
            break;

          case 9:
            _context.t2 = {};

          case 10:
            _context.t3 = _context.t2;
            pageProps = (0, _context.t0)(_context.t1, _context.t3);

            if (!ctx.req) {
              _context.next = 16;
              break;
            }

            ctx.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_8__["END"]);
            _context.next = 16;
            return ctx.store.sagaTask.toPromise();

          case 16:
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = _store__WEBPACK_IMPORTED_MODULE_9__["wrapper"].withRedux(MyApp));

var _c, _c2;

$RefreshReg$(_c, "MyApp");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiZ2V0UHJvZHVjdCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcSIsInN0b3JlIiwiRU5EIiwic2FnYVRhc2siLCJ0b1Byb21pc2UiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUMxQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixZQUFRLENBQUNHLG1FQUFVLEVBQVgsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsa0JBREY7QUFhRCxDQXBCRDs7R0FBTU4sSztVQUNhSSx1RDs7O0tBRGJKLEs7O0FBc0JOQSxLQUFLLENBQUNPLGVBQU47QUFBQSxxU0FBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNOLHFCQUFULFNBQVNBLFNBQVQsRUFBb0JPLEdBQXBCLFNBQW9CQSxHQUFwQjtBQUFBO0FBQUE7O0FBQUEsaUJBRWhCUCxTQUFTLENBQUNNLGVBRk07QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFFa0JOLFNBQVMsQ0FBQ00sZUFBVixDQUEwQkMsR0FBMUIsQ0FGbEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSwwQkFFbUQsRUFGbkQ7O0FBQUE7QUFBQTtBQUNoQk4scUJBRGdCOztBQUFBLGlCQUlsQk0sR0FBRyxDQUFDQyxHQUpjO0FBQUE7QUFBQTtBQUFBOztBQUtwQkQsZUFBRyxDQUFDRSxLQUFKLENBQVVQLFFBQVYsQ0FBbUJRLDhDQUFuQjtBQUxvQjtBQUFBLG1CQU1kSCxHQUFHLENBQUNFLEtBQUosQ0FBVUUsUUFBVixDQUFtQkMsU0FBbkIsRUFOYzs7QUFBQTtBQUFBLDZDQVFmO0FBQUVYLHVCQUFTLEVBQVRBO0FBQUYsYUFSZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXZSxxRUFBQVksOENBQU8sQ0FBQ0MsU0FBUixDQUFrQmYsS0FBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjkzMGI4YTk1M2EyZmU3YzBhZjk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGdldFByb2R1Y3QgfSBmcm9tIFwiLi4vYWN0aW9ucy9wcm9kdWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFTkQgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0UHJvZHVjdCgpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJ1c2VyLXNjYWxhYmxlPW5vLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5kZW1vIGFwcDwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IENvbXBvbmVudCwgY3R4IH0pID0+IHtcclxuICBjb25zdCBwYWdlUHJvcHMgPSB7XHJcbiAgICAuLi4oQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9KSxcclxuICB9O1xyXG4gIGlmIChjdHgucmVxKSB7XHJcbiAgICBjdHguc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgIGF3YWl0IGN0eC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICB9XHJcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=