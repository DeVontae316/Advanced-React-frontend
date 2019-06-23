webpackHotUpdate("static/development/pages/sell.js",{

/***/ "./components/CreateItem.js":
/*!**********************************!*\
  !*** ./components/CreateItem.js ***!
  \**********************************/
/*! exports provided: default, CREATE_ITEM_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ITEM_MUTATION", function() { return CREATE_ITEM_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
var _jsxFileName = "/Users/DeVontae/Advanced-React/sick-fits/frontend/components/CreateItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Center = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "CreateItem__Center",
  componentId: "cxl74w-0"
})(["text-align:center;"]);

var CreateItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateItem, _Component);

  function CreateItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      title: "test",
      description: "test",
      image: "test.png",
      largeImage: "test.png",
      price: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (e) {
      var _e$target$value = e.target.value,
          name = _e$target$value.name,
          value = _e$target$value.value,
          type = _e$target$value.type;
      var val = type === "number" ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    return _this;
  }

  _createClass(CreateItem, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "imgae",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        onChange: this.uploadFile,
        placeholder: "Upload file",
        requiredvalue: this.state.image,
        id: "image",
        name: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.onChange,
        placeholder: "Upload file",
        requiredvalue: this.state.image,
        id: "image",
        name: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }))));
    }
  }]);

  return CreateItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateItem);


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/apollo-client/ApolloClient.js":
false,

/***/ "./node_modules/apollo-client/core/ObservableQuery.js":
false,

/***/ "./node_modules/apollo-client/core/QueryManager.js":
false,

/***/ "./node_modules/apollo-client/core/networkStatus.js":
false,

/***/ "./node_modules/apollo-client/core/types.js":
false,

/***/ "./node_modules/apollo-client/data/mutations.js":
false,

/***/ "./node_modules/apollo-client/data/queries.js":
false,

/***/ "./node_modules/apollo-client/data/store.js":
false,

/***/ "./node_modules/apollo-client/errors/ApolloError.js":
false,

/***/ "./node_modules/apollo-client/index.js":
false,

/***/ "./node_modules/apollo-client/scheduler/scheduler.js":
false,

/***/ "./node_modules/apollo-client/util/Observable.js":
false,

/***/ "./node_modules/apollo-client/version.js":
false,

/***/ "./node_modules/apollo-link-dedup/lib/dedupLink.js":
false,

/***/ "./node_modules/apollo-link-dedup/lib/index.js":
false,

/***/ "./node_modules/apollo-link/lib/index.js":
false,

/***/ "./node_modules/apollo-link/lib/link.js":
false,

/***/ "./node_modules/apollo-link/lib/linkUtils.js":
false,

/***/ "./node_modules/apollo-utilities/lib/directives.js":
false,

/***/ "./node_modules/apollo-utilities/lib/fragments.js":
false,

/***/ "./node_modules/apollo-utilities/lib/getFromAST.js":
false,

/***/ "./node_modules/apollo-utilities/lib/index.js":
false,

/***/ "./node_modules/apollo-utilities/lib/storeUtils.js":
false,

/***/ "./node_modules/apollo-utilities/lib/transform.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/assign.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/cloneDeep.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/environment.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/errorHandling.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/isEqual.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/stripSymbols.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/warnOnce.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/buffer/index.js":
false,

/***/ "./node_modules/fast-json-stable-stringify/index.js":
false,

/***/ "./node_modules/fclone/dist/fclone.js":
false,

/***/ "./node_modules/graphql/language/printer.mjs":
false,

/***/ "./node_modules/graphql/language/visitor.mjs":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/invariant/browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/lodash/_LazyWrapper.js":
false,

/***/ "./node_modules/lodash/_LodashWrapper.js":
false,

/***/ "./node_modules/lodash/_Symbol.js":
false,

/***/ "./node_modules/lodash/_WeakMap.js":
false,

/***/ "./node_modules/lodash/_apply.js":
false,

/***/ "./node_modules/lodash/_arrayPush.js":
false,

/***/ "./node_modules/lodash/_baseCreate.js":
false,

/***/ "./node_modules/lodash/_baseFlatten.js":
false,

/***/ "./node_modules/lodash/_baseGetTag.js":
false,

/***/ "./node_modules/lodash/_baseIsArguments.js":
false,

/***/ "./node_modules/lodash/_baseIsNative.js":
false,

/***/ "./node_modules/lodash/_baseLodash.js":
false,

/***/ "./node_modules/lodash/_baseSetToString.js":
false,

/***/ "./node_modules/lodash/_copyArray.js":
false,

/***/ "./node_modules/lodash/_coreJsData.js":
false,

/***/ "./node_modules/lodash/_createFlow.js":
false,

/***/ "./node_modules/lodash/_defineProperty.js":
false,

/***/ "./node_modules/lodash/_flatRest.js":
false,

/***/ "./node_modules/lodash/_freeGlobal.js":
false,

/***/ "./node_modules/lodash/_getData.js":
false,

/***/ "./node_modules/lodash/_getFuncName.js":
false,

/***/ "./node_modules/lodash/_getNative.js":
false,

/***/ "./node_modules/lodash/_getRawTag.js":
false,

/***/ "./node_modules/lodash/_getValue.js":
false,

/***/ "./node_modules/lodash/_isFlattenable.js":
false,

/***/ "./node_modules/lodash/_isLaziable.js":
false,

/***/ "./node_modules/lodash/_isMasked.js":
false,

/***/ "./node_modules/lodash/_metaMap.js":
false,

/***/ "./node_modules/lodash/_objectToString.js":
false,

/***/ "./node_modules/lodash/_overRest.js":
false,

/***/ "./node_modules/lodash/_realNames.js":
false,

/***/ "./node_modules/lodash/_root.js":
false,

/***/ "./node_modules/lodash/_setToString.js":
false,

/***/ "./node_modules/lodash/_shortOut.js":
false,

/***/ "./node_modules/lodash/_toSource.js":
false,

/***/ "./node_modules/lodash/_wrapperClone.js":
false,

/***/ "./node_modules/lodash/constant.js":
false,

/***/ "./node_modules/lodash/flatten.js":
false,

/***/ "./node_modules/lodash/flowRight.js":
false,

/***/ "./node_modules/lodash/identity.js":
false,

/***/ "./node_modules/lodash/isArguments.js":
false,

/***/ "./node_modules/lodash/isArray.js":
false,

/***/ "./node_modules/lodash/isFunction.js":
false,

/***/ "./node_modules/lodash/isObject.js":
false,

/***/ "./node_modules/lodash/isObjectLike.js":
false,

/***/ "./node_modules/lodash/noop.js":
false,

/***/ "./node_modules/lodash/wrapperLodash.js":
false,

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/react-apollo/node_modules/fbjs/lib/shallowEqual.js":
false,

/***/ "./node_modules/react-apollo/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/react-apollo/react-apollo.browser.umd.js":
false,

/***/ "./node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./node_modules/zen-observable-ts/lib/index.js":
false,

/***/ "./node_modules/zen-observable-ts/lib/zenObservable.js":
false,

/***/ "./node_modules/zen-observable/index.js":
false,

/***/ "./node_modules/zen-observable/lib/Observable.js":
false

})
//# sourceMappingURL=sell.js.56459e570a17b42bae59.hot-update.js.map