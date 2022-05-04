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
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_10__);






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
  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  var goArticleHandle = function goArticleHandle() {
    router.push({
      pathname: "/bai-viet/pho-ha-noi",
      query: {
        code: 123,
        title: "Pha Ha Noi",
        des: "mo tả về món phửo ha noi"
      }
    });
  };

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
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
        children: "demo app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: function onClick() {
          return goArticleHandle();
        },
        children: "click me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(MyApp, "dfK0q129ToldU1hhc+dQGV7CLZ8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], next_dist_client_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ29BcnRpY2xlSGFuZGxlIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJjb2RlIiwidGl0bGUiLCJkZXMiLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVxIiwic3RvcmUiLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUMxQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQywwRUFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJGLFVBQU0sQ0FBQ0csSUFBUCxDQUFZO0FBQ1ZDLGNBQVEsRUFBRSxzQkFEQTtBQUVWQyxXQUFLLEVBQUU7QUFDTEMsWUFBSSxFQUFFLEdBREQ7QUFFTEMsYUFBSyxFQUFFLFlBRkY7QUFHTEMsV0FBRyxFQUFFO0FBSEE7QUFGRyxLQUFaO0FBUUQsR0FURDs7QUFVQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RYLFlBQVEsQ0FBQ1ksbUVBQVUsRUFBWCxDQUFSO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1SLGVBQWUsRUFBckI7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0UscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQSxrQkFERjtBQWVELENBaENEOztHQUFNUCxLO1VBQ2FJLHVELEVBQ0ZFLGtFOzs7S0FGWE4sSzs7QUFrQ05BLEtBQUssQ0FBQ2dCLGVBQU47QUFBQSxxU0FBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNmLHFCQUFULFNBQVNBLFNBQVQsRUFBb0JnQixHQUFwQixTQUFvQkEsR0FBcEI7QUFBQTtBQUFBOztBQUFBLGlCQUVoQmhCLFNBQVMsQ0FBQ2UsZUFGTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUVrQmYsU0FBUyxDQUFDZSxlQUFWLENBQTBCQyxHQUExQixDQUZsQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBCQUVtRCxFQUZuRDs7QUFBQTtBQUFBO0FBQ2hCZixxQkFEZ0I7O0FBQUEsaUJBSWxCZSxHQUFHLENBQUNDLEdBSmM7QUFBQTtBQUFBO0FBQUE7O0FBS3BCRCxlQUFHLENBQUNFLEtBQUosQ0FBVWhCLFFBQVYsQ0FBbUJpQiw4Q0FBbkI7QUFMb0I7QUFBQSxtQkFNZEgsR0FBRyxDQUFDRSxLQUFKLENBQVVFLFFBQVYsQ0FBbUJDLFNBQW5CLEVBTmM7O0FBQUE7QUFBQSw2Q0FRZjtBQUFFcEIsdUJBQVMsRUFBVEE7QUFBRixhQVJlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdlLHFFQUFBcUIsOENBQU8sQ0FBQ0MsU0FBUixDQUFrQnhCLEtBQWxCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44MWE3ZTg5NzE4MGY3YmZjZGMzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0IH0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5cclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZ29BcnRpY2xlSGFuZGxlID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goe1xyXG4gICAgICBwYXRobmFtZTogXCIvYmFpLXZpZXQvcGhvLWhhLW5vaVwiLFxyXG4gICAgICBxdWVyeToge1xyXG4gICAgICAgIGNvZGU6IDEyMyxcclxuICAgICAgICB0aXRsZTogXCJQaGEgSGEgTm9pXCIsXHJcbiAgICAgICAgZGVzOiBcIm1vIHThuqMgduG7gSBtw7NuIHBo4butbyBoYSBub2lcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGdldFByb2R1Y3QoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICBjb250ZW50PVwidXNlci1zY2FsYWJsZT1ubywgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+ZGVtbyBhcHA8L2gyPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ29BcnRpY2xlSGFuZGxlKCl9PmNsaWNrIG1lPC9idXR0b24+XHJcbiAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9KSA9PiB7XHJcbiAgY29uc3QgcGFnZVByb3BzID0ge1xyXG4gICAgLi4uKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fSksXHJcbiAgfTtcclxuICBpZiAoY3R4LnJlcSkge1xyXG4gICAgY3R4LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgICBhd2FpdCBjdHguc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9