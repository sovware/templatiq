/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isPropValid; }
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);




/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ memoize; }
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}




/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ unitlessKeys; }
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};




/***/ }),

/***/ "./src/svg/icon/arrow-small-left.svg":
/*!*******************************************!*\
  !*** ./src/svg/icon/arrow-small-left.svg ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: function() { return /* binding */ SvgArrowSmallLeft; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArrowSmallLeft = function SvgArrowSmallLeft(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 10.279
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#2188ff",
    d: "M11.143 4.287H2.571l2.82-2.82A.858.858 0 0 0 4.182.25L.506 3.935A1.714 1.714 0 0 0 0 5.144a1.714 1.714 0 0 0 .506 1.2l3.677 3.686a.858.858 0 0 0 1.209-1.217L2.571 6.001h8.571a.857.857 0 0 0 0-1.714Z",
    "data-name": "arrow-small-left (1)"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMC4yNzkiIHZpZXdCb3g9IjAgMCAxMiAxMC4yNzkiPgogIDxwYXRoIGlkPSJhcnJvdy1zbWFsbC1sZWZ0XzFfIiBkYXRhLW5hbWU9ImFycm93LXNtYWxsLWxlZnQgKDEpIiBkPSJNMTcuMTQzLDEwLjI4Nkg4LjU3MWwyLjgyLTIuODJhLjg1OC44NTgsMCwwLDAtMS4yMDktMS4yMTdMNi41MDYsOS45MzRBMS43MTQsMS43MTQsMCwwLDAsNiwxMS4xNDNINmExLjcxNCwxLjcxNCwwLDAsMCwuNTA2LDEuMmwzLjY3NywzLjY4NmEuODU4Ljg1OCwwLDAsMCwxLjIwOS0xLjIxN0w4LjU3MSwxMmg4LjU3MWEuODU3Ljg1NywwLDAsMCwwLTEuNzE0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYgLTUuOTk5KSIgZmlsbD0iIzIxODhmZiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/minus-solid.svg":
/*!**************************************!*\
  !*** ./src/svg/icon/minus-solid.svg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: function() { return /* binding */ SvgMinusSolid; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMinusSolid = function SvgMinusSolid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDMyIDI1NmMwIDE3LjctMTQuMyAzMi0zMiAzMkw0OCAyODhjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsMzUyIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJ6Ii8+PC9zdmc+");

/***/ }),

/***/ "./src/svg/icon/times.svg":
/*!********************************!*\
  !*** ./src/svg/icon/times.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: function() { return /* binding */ SvgTimes; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTimes = function SvgTimes(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 6,
    height: 5.999
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#3c3c3c",
    d: "M3.706 3.004 5.854.861a.501.501 0 1 0-.709-.709L3 2.295.857.147a.501.501 0 0 0-.709.709l2.148 2.148L.148 5.142a.501.501 0 1 0 .709.709L3 3.704l2.143 2.148a.501.501 0 1 0 .709-.709Z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjUuOTk5IiB2aWV3Qm94PSIwIDAgNiA1Ljk5OSI+CiAgPHBhdGggaWQ9InRpbWVzIiBkPSJNOS43LDlsMi4xNDgtMi4xNDNhLjUuNSwwLDEsMC0uNzA5LS43MDlMOC45OTQsOC4yOTEsNi44NTEsNi4xNDNhLjUuNSwwLDAsMC0uNzA5LjcwOUw4LjI5LDksNi4xNDIsMTEuMTM4YS41LjUsMCwxLDAsLjcwOS43MDlMOC45OTQsOS43bDIuMTQzLDIuMTQ4YS41LjUsMCwxLDAsLjcwOS0uNzA5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuOTk0IC01Ljk5NikiIGZpbGw9IiMzYzNjM2MiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/js/components/ContentLoading.js":
/*!*********************************************!*\
  !*** ./src/js/components/ContentLoading.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ContentLoading; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style */ "./src/js/style.js");


function ContentLoading({
  style
}) {
  const defaultStyle = {
    minHeight: '500px'
  };
  style = style ? {
    ...defaultStyle,
    ...style
  } : defaultStyle;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__.ContentLoadingStyle, {
    style: style,
    className: "helpgent-content-loading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "helpgent-shimmer-effect"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "helpgent-shimmer-effect"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "helpgent-shimmer-effect"
  }));
}

/***/ }),

/***/ "./src/js/frontend/pages/ChatBubble/components/ChatFormBack.js":
/*!*********************************************************************!*\
  !*** ./src/js/frontend/pages/ChatBubble/components/ChatFormBack.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ChatFormBack; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _icon_arrow_small_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @icon/arrow-small-left.svg */ "./src/svg/icon/arrow-small-left.svg");



function ChatFormBack(props) {
  const {
    moduleState,
    setModuleState,
    clearErrors,
    getValues
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: `helpgent-chatForm-back-btn ${moduleState.isProcessingSubmitCallback ? 'helpgent-disabled' : ''}`,
    onClick: e => {
      if (moduleState.isProcessingSubmitCallback) {
        return;
      }
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: _icon_arrow_small_left_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
  }));
}

/***/ }),

/***/ "./src/js/frontend/pages/ChatBubble/components/ChatFormClose.js":
/*!**********************************************************************!*\
  !*** ./src/js/frontend/pages/ChatBubble/components/ChatFormClose.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ChatFormClose; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _icon_times_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @icon/times.svg */ "./src/svg/icon/times.svg");
/* harmony import */ var _icon_minus_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @icon/minus-solid.svg */ "./src/svg/icon/minus-solid.svg");




function ChatFormClose(props) {
  const {
    moduleState,
    setModuleState
  } = props;
  function handleCloseChatForm(e) {
    e.preventDefault();
    setModuleState({
      ...moduleState,
      chatBubble: {
        ...moduleState.chatBubble,
        isChatFormActive: moduleState.chatBubble.canCloseChatForm ? false : true,
        isChatFormMinimized: moduleState.chatBubble.canCloseChatForm ? false : true
      }
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "helpgent-chatForm-close-btn",
    onClick: e => handleCloseChatForm(e)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: moduleState.chatBubble.canCloseChatForm ? _icon_times_svg__WEBPACK_IMPORTED_MODULE_1__["default"] : _icon_minus_solid_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
  }));
}

/***/ }),

/***/ "./src/js/style.js":
/*!*************************!*\
  !*** ./src/js/style.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatBubbleStyle: function() { return /* binding */ ChatBubbleStyle; },
/* harmony export */   ChatFormStyle: function() { return /* binding */ ChatFormStyle; },
/* harmony export */   ColorPickerStyle: function() { return /* binding */ ColorPickerStyle; },
/* harmony export */   ContentLoadingStyle: function() { return /* binding */ ContentLoadingStyle; },
/* harmony export */   CountryDialerControl: function() { return /* binding */ CountryDialerControl; },
/* harmony export */   CrudLayoutStyle: function() { return /* binding */ CrudLayoutStyle; },
/* harmony export */   DeleteAlertStyle: function() { return /* binding */ DeleteAlertStyle; },
/* harmony export */   HelpgentTableStyle: function() { return /* binding */ HelpgentTableStyle; },
/* harmony export */   InlineFieldStyle: function() { return /* binding */ InlineFieldStyle; },
/* harmony export */   LayoutStyle: function() { return /* binding */ LayoutStyle; },
/* harmony export */   MediaPreviewStyle: function() { return /* binding */ MediaPreviewStyle; },
/* harmony export */   ModalAlertStyle: function() { return /* binding */ ModalAlertStyle; },
/* harmony export */   MultiSelectStyle: function() { return /* binding */ MultiSelectStyle; },
/* harmony export */   PreviewCopyright: function() { return /* binding */ PreviewCopyright; },
/* harmony export */   PreviewDeviceControlStyle: function() { return /* binding */ PreviewDeviceControlStyle; },
/* harmony export */   ProModalContentStyle: function() { return /* binding */ ProModalContentStyle; },
/* harmony export */   ProgressBarStyle: function() { return /* binding */ ProgressBarStyle; },
/* harmony export */   QuestionPreviewStyle: function() { return /* binding */ QuestionPreviewStyle; },
/* harmony export */   SearchableDropdownStyle: function() { return /* binding */ SearchableDropdownStyle; },
/* harmony export */   SharePopupStyle: function() { return /* binding */ SharePopupStyle; },
/* harmony export */   SingleSelectStyle: function() { return /* binding */ SingleSelectStyle; },
/* harmony export */   UserMediaStyle: function() { return /* binding */ UserMediaStyle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const QuestionPreviewStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    flex: 1 1 0%;
    overflow: auto;
    margin-top: 20px;
    position: relative;
    &.helpgent-client{
        .helpgent-question-element{
            .helpgent-question-element__uploader,
            input,
            textarea,
            input:not(.helpgent-form-group__element--date){
                pointer-events: all;
            }
        }
        .helpgent-open-ended-question-types .helpgent-open-ended-btn{
            pointer-events: all;
        }
        .helpgent-select-picture-single__caption{
            cursor: pointer;
        }
    }

    &.helpgent-question-element-wrapper--picture_select{
        .helpgent-question-element__action{
            .helpgent-form-group{
                margin-bottom: 0;
            }
        }
    }
    &.helpgent-question-element-wrapper--open_ended{

    }

    &.helpgent-question-element-wrapper--address,
    &.helpgent-question-element-wrapper--contact_info{
        .helpgent-form-group{
            margin-bottom: 24px;
        }
        .helpgent-form-group--last{
            margin-bottom: 0;
            + .helpgent-form-group{
                margin-top: 24px;
            }
        }
    }

    .helpgent-question-element{
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        padding: 25px 0 45px 0;
        min-height: calc(100% - 68px);
        .helpgent-question-element__label-text{
            text-align: left;
        }
        &.helpgent-question-textField{
            //padding-left: 40px;
            //padding-right: 40px;
            .helpgent-form-group{
                position: relative;
                &:not(:last-child){
                    margin-bottom: 16px;
                }
                .helpgent-file-upload{
                    input{
                        display: none;
                    }
                }
                .helpgent-file-uploader{
                    font-size: 13px;
                    font-weight: 500;
                    width: fit-content;
                    border-radius: 6px;
                    border: 0px none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                    min-height: 36px;
                    padding: 2px 10px;
                    cursor: pointer;
                    background-color: var(--helpgent-color-bg-gray);
                    gap: 8px;
                }
            }
            .helpgent-btn-next{
                justify-content: center;
            }
        }
        &.helpgent-question--end{
            align-items: center;
            max-width: 600px;
            margin: 0 auto;
            .block-editor-rich-text__editable{
                text-align: center;
            }
            [data-rich-text-placeholder]:after{
                text-align: center;
            }
            .helpgent-question-element__label{
                margin-bottom: 15px;
            }
            .helpgent-question-element__text{
                width: 100%;
                box-sizing: border-box;
            }
            .helpgent-question-element__action{
                margin-top: 40px;
                width: 100%;
                display: flex;
                justify-content: center;
                box-sizing: border-box;
            }
            .helpgent-btn-external{
                padding: 0 23%;
            }
            .helpgent-question-element__label-text{
                text-align: center;
                line-height: 1.2;
                p{
                    font-size: 30px;
                }
            }
            .helpgent-question-element__description-text{
                text-align: center;
                p{
                    font-size: 16px;
                }
            }
        }
        input.components-form-toggle__input{
            pointer-events: all !important;
        }
        input:not(.helpgent-form-group__element--date),
        textarea,
        .helpgent-question-element__uploader{
            pointer-events: none;
        }
        .helpgent-uploaded-files{
            &:empty{
                display: none;
            }
            .helpgent-uploaded-file{
                background: var(--helpgent-color-bg-light);
                border-radius: 10px;
                padding: 10px 50px 10px 10px;
                display: flex;
                align-items: center;
                gap: 10px;
                position: relative;
                margin-top: 10px;
                &:not(:last-child){
                    margin-bottom: 10px;
                }
                &.helpgent-uploaded-file--uploading{
                    padding: 12px 12px 12px 15px;
                    .helpgent-uploaded-file-meta{
                        flex: 1;
                    }
                }
                &.helpgent-uploaded-file-has-error{
                    flex-wrap: wrap;
                    .helpgent-uploaded-file-meta{
                        flex: 1;
                    }
                }
                .helpgent-uploaded-file-thumbnail{
                    line-height: 0;
                    min-width: 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    svg{
                        width: 25px;
                        height: 25px;
                    }
                    img,
                    video{
                        width: 34px;
                        height: 34px;
                        object-fit: cover;
                        border-radius: 6px;
                    }
                }
                .helpgent-uploaded-file-meta{
                    .helpgent-uploaded-file-meta-title{
                        word-wrap: break-word;
                        word-break: break-word;
                        font-size: 13px;
                        margin: 0 0 7px;
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        line-height: 1;
                        color: var(--helpgent-color-dark);
                        .helpgent-uploaded-file-meta-subtitle{
                            min-width: 60px;
                            display: block;
                            line-height: 1;
                        }
                    }
                    .helpgent-uploaded-file-meta-subtitle{
                        font-size: 10px;
                        color: var(--helpgent-color-light-gray);
                        margin: 0;
                        line-height: 1;
                        .helpgent-status{
                            display: block;
                            color: var(--helpgent-color-danger);
                        }
                    }
                    .helpgent-upload-progress{
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        .helpgent-upload-progress-bar-wrap{
                            flex: 1;
                            height: 6px;
                            border-radius: 30px;
                            background: var(--helpgent-color-bg-deep);
                            position: relative;
                            .helpgent-upload-progress-bar{
                                position: absolute;
                                left: 0;
                                top: 0;
                                height: 100%;
                                background: var(--helpgent-color-primary);
                                border-radius: 30px;
                                transition: var(--helpgent-transition);
                            }
                        }
                        .helpgent-upload-progress-bar-label{
                            color: var(--helpgent-color-primary);
                            font-size: 10px;
                            font-weight: 500;
                        }
                        .helpgent-upload-progress-bar-action{
                            a{
                                line-height: 0;
                                display: block;
                            }
                            svg{
                                width: 10px;
                                height: 10px;
                                path{
                                    fill: var(--helpgent-color-gray);
                                }
                            }
                        }
                    }
                }
                .helpgent-uploaded-file-meta-status{
                    flex: 0 0 100%;
                    font-size: 11px;
                    color: var(--helpgent-color-danger);
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                }
                .helpgent-uploaded-file-action{
                    position: absolute;
                    right: 13px;
                    top: 50%;
                    transform: translateY(-50%);
                    a{
                        width: 28px;
                        height: 28px;
                        border-radius: 7px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #fff;
                        transition: var(--helpgent-transition);
                        text-decoration: none;
                        svg{
                            width: 10px;
                            height: 10px;
                            transition: var(--helpgent-transition);
                        }
                        &:hover{
                            background: var(--helpgent-color-danger);
                            svg path{
                                fill: #fff;
                            }
                        }
                    }
                    .helpgent-file-deleting{
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        border: 2px solid var(--helpgent-color-gray);
                        border-bottom: 2px solid transparent;
                        animation: helpgent-spin 2s linear infinite;
                        display: block;
                    }
                    @keyframes helpgent-spin {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                }
            }
        }

        &.helpgent-question-element--open-ended{
            justify-content: flex-start;
            //height: 100%;
            .helpgent-question-element__text{
                align-self: flex-start;
                margin-bottom: 0;
                width: 100%;
                box-sizing: border-box;
                .helpgent-question-element__label{
                    margin-bottom: 4px;
                    .block-editor-rich-text__editable{
                        line-height: 1.5;
                    }
                    [data-rich-text-placeholder]{
                        &:after{
                            line-height: 1.5;
                            text-align: start;
                        }
                    }

                }
            }
            .helpgent-question-element__action{
                margin-top: auto;
                margin-bottom: auto;
                width: 100%;
                box-sizing: border-box;
            }
        }
    }
    .helpgent-question-element__icon{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--helpgent-color-success);
        margin-bottom: 30px;
    }

    .helpgent-question-element__social{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin: 20px 0;
        padding: 0 30px;
    }
    .helpgent-question-element__social-item{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        cursor: pointer;
        border-radius: 8px;
        &.helpgent-question-element__social-facebook{
            background-color: #2D75ED;
        }
        &.helpgent-question-element__social-twitter{
            background-color: #3CA2F8;
        }
        &.helpgent-question-element__social-youtube{
            background-color: #F30104;
        }
        &.helpgent-question-element__social-instagram{
            background-color: #BF3AD4;
        }
    }
    .helpgent-question-element__label{
        margin-bottom: 10px;
        .block-editor-rich-text__editable{
            font-size: var(--helpgent-label-font-size);
            font-weight: var(--helpgent-label-font-weight);
            color: var(--helpgent-label-color);
            word-wrap: break-word;
            word-break: break-word;
            text-align: start;
            line-height: 1.2;
        }
        [data-rich-text-placeholder]{
            &:after{
                font-size: var(--helpgent-label-font-size);
                font-weight: var(--helpgent-label-font-weight);
                color: var(--helpgent-color-dark);
            }
        }
    }
    .ql-container.ql-snow{
        border: 0 none;
    }

    .block-editor-rich-text__editable{
        margin: 0;
        &:focus{
            outline: none;
            box-shadow: 0 0;
            border: 0 none;
        }
    }
    [data-rich-text-placeholder]{
        &:after{
            font-style: italic;
            inset-inline-start: 0;
            opacity: .4;
        }
    }
    .helpgent-question-element__description{
        .block-editor-rich-text__editable{
            font-size: var(--helpgent-description-font-size);
            font-weight: var(--helpgent-description-font-weight);
            color: var(--helpgent-description-color);
            word-wrap: break-word;
            word-break: break-word;
            text-align: start;
        }
        [data-rich-text-placeholder]{
            &:after{
                font-size: var(--helpgent-description-font-size);
                font-weight: var(--helpgent-description-font-weight);
                color: var(--helpgent-color-light-gray);
                text-align: start;
                width: 100%;
                height: 100%;
            }
        }
    }
    .helpgent-question-element__text,
    .helpgent-question-element__action{
        padding: 0 40px;
    }
    .helpgent-question-element__text{
        margin-bottom: 20px;
    }
    .helpgent-question-element__action{
        text-align: start;
        .helpgent-btn{
            min-height: 48px;
            font-size: var(--helpgent-btn-font-size);
            border: 1px solid var(--helpgent-btn-color);
            border-radius: var(--helpgent-btn-radius);
            color: var(--helpgent-btn-text-color);
            background-color: var(--helpgent-btn-color);
            word-wrap: break-word;
            word-break: break-word;
            &:not(:hover):not(:active):not(.has-background) {
                color: var(--helpgent-btn-text-color);
                background-color: var(--helpgent-btn-color);
                border-color: var(--helpgent-btn-color);
            }
            &:hover {
                color: var(--helpgent-btn-color);
                background-color: var(--helpgent-color-white);
                svg path {
                    fill: var(--helpgent-btn-color);
                }
            }
        }
        .helpgent-btn-start{
            padding: 0 30.5px;
        }
        .helpgent-btn-next{
            padding: 0 28.75px;
        }
        .helpgent-btn-submit{
            width: 100%;
            justify-content: center;
        }
        .helpgent-form__element{
            min-height: 44px;
            padding: 7px 16px 8px;
            border-radius: var(--helpgent-btn-radius);
            background-color: var(--helpgent-input-background);
        }
        textarea.helpgent-form-group__element{
            resize: none;
            min-height: 100px;
            padding-top: 11px;
            padding-bottom: 15px;
            font-family: inherit;
        }
        .helpgent-question-element__option-count{
            display: block;
            width: 100%;
            text-align: end;
            margin-top: 10px;
            font-size: 13px;
            color: var(--helpgent-color-light-gray);
        }
        .helpgent-single-select,
        .helpgent-multi-select{
            display: flex;
            align-items: center;
            margin-inline-start: -20px;
            .helpgent-option-number{
                font-size: 13px;
                font-weight: 400;
                color: var(--helpgent-color-extra-light);
                display: block;
                width: 20px;
            }
        }
        .helpgent-multi-select--last,
        .helpgent-single-select--last{
            margin-bottom: 0;
        }
        .helpgent-question-element__item{
            &:not(:last-child){
                margin-bottom: 20px;
                border-bottom: 1px solid var(--helpgent-color-border-light);
            }
        }
        &--alter{
            .helpgent-single-select,
            .helpgent-multi-select{
                margin-inline-start: 0;
            }
        }
    }
    .helpgent-form-icon-left{
        svg{
            width: 14px;
            height: 14px;
            path{
                fill: var(--helpgent-color-extra-light)
            }
        }
        .helpgent-form__element{
            padding-inline-start: 40px;
        }
    }
    .helpgent-question-time{
        display: flex;
        align-items: center;
        margin-top: 20px;
        svg{
            margin-inline-end: 8px;
        }
        span{
            font-size: 13px;
            font-weight: 500;
            color: var(--helpgent-color-dark);
        }
        .helpgent-estimated-time{
            display: inline-block;
            margin-left: 5px;
        }
    }

    .helpgent-form-group{
        margin-bottom: 10px;
        &--inline{
            display: flex;
            align-items: center;
            .helpgent-form-group__element{
                width: auto;
            }
        }
    }

    .helpgent-form-group__element{
        min-height: 44px;
        border-radius: 10px;
    }
    .helpgent-form-group__label{
        margin-bottom: 10px;
        word-wrap: wrap;
        word-break: break-word;
    }
    .helpgent-select__control{
        height: 44px;
        border-radius: 10px;
        padding-bottom: 5px;
        padding-top: 5px;
    }
    .helpgent-select__placeholder{
        font-size: 14px;
        font-weight: 400;
        color: var(--helpgent-color-gray);
    }
    .helpgent-select__single-value{
        font-size: 14px;
        font-weight: 500;
        color: var(--helpgent-color-dark);
    }
    .helpgent-form__element-inline--yes-no-toggler{
        padding: 12px 16px;
        border-radius: 10px;
        background: var(--helpgent-color-bg-light);
        width: 100%;
        max-width: 300px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-sizing: border-box;
        .helpgent-toggle{
            display: flex;
        }
        .components-form-toggle{
            display: inline-flex;
        }
        .helpgent-form__label{
            font-size: 13px;
            display: block;
        }
    }

    //Picture Select Question
    .helpgent-select-picture-list{
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        gap: 15px;
    }
    .helpgent-select-picture-single{
        width: 160px;
        border: 2px solid transparent;
        border-radius: 12px;
        padding: 6px;
        box-sizing: border-box;
        position: relative;
        cursor: pointer;
        box-shadow: 0 0 0 1px var(--helpgent-color-bg-gray);
        &--selected{
            border-color: var(--helpgent-color-primary);
            box-shadow: none;
        }
        &__remove{
            width: 22px;
            height: 22px;
            background: var(--helpgent-color-danger);
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            inset-inline-end: -9px;
            top: -11px;
            border-radius: 50%;
            visibility: hidden;
            opacity: 0;
            transition: var(--helpgent-transition);
            svg{
                path{
                    fill: #fff;
                }
            }
        }
        &__img{
            position: relative;
            img{
                border-radius: 10px;
                width: 100%;
                height: 120px;
                object-fit: cover;
            }
        }
        &__action{
            position: absolute;
            inset-inline-end: 8px;
            top: 8px;
            display: flex;
            align-items: center;
            gap: 5px;
            visibility: hidden;
            opacity: 0;
            transition: var(--helpgent-transition);
            &__btn{
                padding: 0;
                margin: 0;
                background: #fff;
                border-radius: 6px;
                width: 30px;
                height: 30px;
                align-items: center;
                justify-content: center;
                border: 0 none;
                display: flex;
                cursor: pointer;
                transition: var(--helpgent-transition);
                svg{
                    width: 13px;
                    path{
                        transition: var(--helpgent-transition);
                        fill: var(--helpgent-color-light-gray);
                    }
                }
                &:hover{
                    svg{
                        path{
                            fill: #fff;
                        }
                    }
                }
                &--replace{
                    &:hover{
                        background: var(--helpgent-color-primary);
                    }
                }
                &--remove{
                    &:hover{
                        background: var(--helpgent-color-danger);
                    }
                }
            }
        }
        &__caption{
            font-size: 13px;
            margin-top: 5px;
            color: var(--helpgent-color-gray);
            word-break: break-all;
            word-wrap: break-word;
            cursor: text;
        }
        &--add-new{
            border: 2px dashed var(--helpgent-color-border-light);
            border-width: 2px;
            min-height: 166px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            box-shadow: none;
        }
        &__add-picture{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0;
            margin: 0;
            cursor: pointer;
            background: none;
            border: 0 none;
            color: var(--helpgent-color-gray);
            font-size: 13px;
            &::after{
                position: absolute;
                content: '';
                inset-inline-start: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }
            span{
                display: block;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                margin-bottom: 10px;
                background: var(--helpgent-color-extra-light);
                svg{
                    width: 10px;
                    path{
                        fill: #fff;
                    }
                }
            }
        }
        &__selected{
            position: absolute;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: var(--helpgent-color-primary);
            top: 5px;
            right: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                width: 12px;
                path{
                    fill: #fff;
                }
            }
        }
        &:hover{
            .helpgent-select-picture-single__remove,
            .helpgent-select-picture-single__action
            {
                visibility: visible;
                opacity: 1;
            }
        }
    }

    //Open-ended question
    .helpgent-question-element__chat-title,
    .helpgent-question-element__chat-title-text{
        font-size: var(--helpgent-chatTtile-font-size);
        font-weight: var(--helpgent-chatTtile-font-weight);
        color: var(--helpgent-chatTtile-color);
        margin: 0;
        word-break: break-word;
        word-wrap: break-word;
        margin-bottom: 16px;
        .block-editor-rich-text__editable,
        [data-rich-text-placeholder]:after{
            font-size: var(--helpgent-chatTtile-font-size);
            font-weight: var(--helpgent-chatTtile-font-weight);
            color: var(--helpgent-chatTtile-color);
            word-break: break-word;
            word-wrap: break-word;
        }
        p{
            font-size: var(--helpgent-chatTtile-font-size);
            font-weight: var(--helpgent-chatTtile-font-weight);
            color: var(--helpgent-chatTtile-color);
            margin: 0;
            word-break: break-word;
            word-wrap: break-word;
        }
    }
    .helpgent-question-element__footer,
    .helpgent-question-element__footer-text{
        margin-top: 12px;
        font-size: var(--helpgent-footerText-font-size);
        font-weight: var(--helpgent-footerText-font-weight);
        color: var(--helpgent-footerText-color);
        .block-editor-rich-text__editable,
        [data-rich-text-placeholder]:after{
            font-size: var(--helpgent-footerText-font-size);
            font-weight: var(--helpgent-footerText-font-weight);
            color: var(--helpgent-footerText-color);
            word-break: break-word;
            word-wrap: break-word;
        }
        p{
            font-size: var(--helpgent-footerText-font-size);
            font-weight: var(--helpgent-footerText-font-weight);
            color: var(--helpgent-footerText-color);
            margin: 0;
        }
    }
    .helpgent-open-ended-question-types{
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        .helpgent-open-ended-btn{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--helpgent-btn-text-color);
            background: var(--helpgent-btn-color);
            border-radius: var(--helpgent-btn-radius);
            min-width: 85px;
            min-height: 85px;
            border: 0 none;
            cursor: pointer;
            pointer-events: none;
            &:focus{
                outline: 0;
                border: 0 none;
            }
            svg{
                width: 24px;
                path{
                    fill: var(--helpgent-btn-text-color);
                }
            }
            span{
                font-size: var(--helpgent-btn-font-size);
                font-weight: 500;
                margin-top: 12px;
                line-height: 1;
                color: var(--helpgent-btn-text-color);
                text-transform: capitalize;
            }
        }
    }

    //Rating Question
    .helpgent-rating-wrapper{
        display: flex;
        align-items: center;
        gap: 6px;
        .helpgent-rating-single{
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            svg{
                width: 24px;
                height: 24px;
            }
            .helpgent-rating-value{
                display: block;
                margin-top: 8px;
                font-size: 14px;
                color: var(--helpgent-color-gray);
            }
            &--selected{
                svg{
                    path, ellipse{
                        fill: var(--helpgent-color-primary);
                    }
                }
            }
        }
    }
    .helpgent-btn-back{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        transition: var(--helpgent-transition);
        background-color: var(--helpgent-color-bg-gray);
        cursor: pointer;
        svg{
            width: 14px;
            height: 14px;
            path{
                fill: var(--helpgent-color-gray);
                transition: var(--helpgent-transition);
            }
        }
        &:hover{
            background: var(--helpgent-color-primary);
            svg path{
                fill: #fff;
            }
        }
    }
`;
const SingleSelectStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    line-height: 1.25;
    &:not(last-child){
        margin-bottom: 10px;
    }
    input[type='radio']{
        display: none;
        &:checked {
            & + .helpgent-single-select__option{
                font-weight: 500;
                color: var(--helpgent-color-dark);
                &:before{
                    border: 5px solid var(--helpgent-color-primary);
                }
            }
        }
    }
    .helpgent-single-select__option{
        position: relative;
        border-radius: 10px;
        padding: 14px 15px 14px 45px;
        width: 100%;
        min-height: 18px;
        display: flex;
        align-items: center;
        max-width: 290px;
        background-color: var(--helpgent-color-bg-light);
        color: var(--helpgent-color-gray);
        font-size: 14px;
        &:before{
            content: '';
            position: absolute;
            width: 18px;
            height: 18px;
            inset-inline-start: 24px;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            border: 2px solid #a2a2a2;
            z-index: 10;
            box-sizing: border-box;
        }
    }
`;
const MultiSelectStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    &:not(last-child){
        margin-bottom: 10px;
    }
    input[type='checkbox']{
        display: none;
        &:checked {
            & + .helpgent-multi-select__option{
                svg{
                    display: block;
                }
                &:before{
                    border-color: var(--helpgent-color-primary);
                    background-color: var(--helpgent-color-primary);
                }
            }
        }
    }
    .helpgent-multi-select__option{
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 10px;
        padding: 14px 15px 14px 45px;
        width: 100%;
        max-width: 290px;
        min-height: 18px;
        background-color: var(--helpgent-color-bg-light);
        font-size: 14px;
        &:before{
            position: absolute;
            inset-inline-start: 15px;
            width: 18px;
            height: 18px;
            border-radius: 5px;
            background-color: transparent;
            content: '';
            border: 2px solid var(--helpgent-color-extra-light);
            top: 50%;
            transform: translateY(-50%);
            box-sizing: border-box;
        }
        svg{
            position: absolute;
            width: 8px;
            height: 8px;
            inset-inline-start: 20px;
            top: 50%;
            transform: translateY(-50%);
            display: none;
            path{
                fill: var(--helpgent-color-white);
            }
        }
    }
`;
const CountryDialerControl = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    .helpgent-select__control{
        min-height: 44px;
    }
    .helpgent-select__menu{
        min-width: 220px;
        padding: 8px;
    }
    .helpgent-select__option{
        font-size: 13px;
        padding: 4px 5px;
    }
    .helpgent-select__single-value{
        display: flex;
        align-items: center;
        width: 20px;
        height: 20px;
        margin: 0 12px 0 0;
    }
    .helpgent-select__indicator{
        padding: 0 10px 0 0;
        svg{
            width: 18px;
            height: 18px;
        }
    }
    .helpgent-form-group--inline{
        gap: 8px;
        flex-wrap: nowrap;
        .helpgent-select{
            width: 80px;
        }
        .helpgent-form-group__element{
            width: 100%;
        }
    }
    .helpgent-form-group__element{
        flex: 1;
    }
    .helpgent-form-group__dialer{
        position: relative;
        flex: 1;
        .helpgent-form-group__dialer__code{
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
            font-weight: 500;
        }
        .helpgent-form-group__element{
            padding-left: 66px;
            width: 100% !important;
        }
    }
    .helpgent-form-group-phone{
        display: flex;
        gap: 10px;
        width: 100%;
    }
`;
const ColorPickerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    position: relative;
    .helpgent-color-picker__trigger{
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    input[type=color]{
        position: absolute;
        flex: none;
        appearance: none;
        padding: 0;
        border-radius: 50%;
        opacity: 0;
        cursor: pointer;
        z-index: 10;
        width: 100%;
        height: 100%;
    }
`;
const MediaPreviewStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    flex: 1 1 0%;
    overflow: hidden;
    position: relative;
    .helpgent-media-preview{
        height: 100%;
        position: relative;
        max-height: 550px;
        &:hover{
            .helpgent-video-control{
                opacity: 1;
                visibility: visible;
            }
        }
    }
    .helpgent-media-src{
        height: 100%;
        &--loading{
            position: relative;
            &:before{
                position: absolute;
                content: '';
                left: 50%;
                top: 50%;
                width: 30px;
                height: 30px;
                border: 2px solid var(--helpgent-color-dark);
                border-radius: 50%;
                border-top-color: transparent;
                animation: helpgentSpinner 900ms infinite linear forwards;
            }
            .helpgent-media-src__video{
                display: none;
            }
        }
    }
    .helpgent-media-empty{
        width: 100%;
        height: 100%;
        border-radius: 20px 0 0 20px;
        background-color: var(--helpgent-color-gray);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        span{
            color: #565656;
            font-size: 14px;
        }
        svg{
            width: 80px;
            height: 80px;
            path{
                fill: #565656;
            }
        }
    }
    .helpgent-media-src__image{
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
            border-radius: 20px 0 0 20px;
        }
    }
    .helpgent-media-src__video{
        height: 100%;
        video{
            width: 100%;
            height: 100%;
            border-radius: 20px 0 0 20px;
            object-fit: cover;
        }
    }
    .helpgent-media-src__image,
    .helpgent-media-src__video{
        position: relative;
        animation: fadeIn 0.4s ease-in;
        img,
        video{
            animation: fadeIn 0.4s ease-in;
            transition: 0.4s ease;
        }
        .helpgent-media-src__overlay{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: var(--helpgent-overlay-color);
            opacity: var(--helpgent-overlay-opacity);
            border-radius: 0;
            animation: fadeIn 0.4s ease-in;
        }
    }
    .helpgent-video-visualization{
        position: absolute;
        inset-inline-end: 20px;
        top: 20px;
        display: flex;
        align-items: center;
        gap: 20px;
        z-index: 1;
        &__timer{
            color: #fff;
            font-size: 12px;
            font-weight: 600;
            display: block;
        }
        &__fullScreen{
            display: block;
            line-height: 0;
        }
    }
    .helpgent-video-control{
        position: absolute;
        width: 76px;
        height: 76px;
        border-radius: 50%;
        inset-inline-start: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: var(--helpgent-transition);
        z-index: 2;
        svg{
            width: 20px;
            height: 20px;
            path{
                fill: #000;
            }
        }
    }
    .helpgent-media-action{
        position: absolute;
        inset-inline-start: 20px;
        top: 20px;
        display: flex;
        align-items: center;
        gap: 6px;
        &__item{
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background: rgba(0,0,0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--helpgent-transition);
            svg{
                width: 15px;
                height: 15px;
                path{
                    fill: #fff;
                }
            }
            &:hover{
                background: #000;
            }
        }
    }
    .helpgent-video-visualization__fullScreen{
        cursor: pointer;
    }
`;
const SearchableDropdownStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const LayoutStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    padding: 30px;
    display: flex;
    @media only screen and (max-width: 400px){
        padding: 15px;
    }
    aside{
        width: 350px;
        height: calc(100vh - 100px);
        margin-right: 30px;
        @media only screen and (max-width: 1199px){
            width: 250px;
        }
        &.helpgent-sidebar--active{
            display: block !important;
            width: 100%;
            margin-right: 0;
            height: 100%;
        }
    }
    .helpgent-sidebar__top{
        margin-bottom: 17px;
        min-height: 140px;
    }
    .helpgent-sidebar__back{
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: var(--helpgent-color-gray);
        display: flex;
        align-items: center;
        gap: 8px;
        transition: var(--helpgent-transition);
        svg{
            width: 12px;
            height: 12px;
            path{
                fill: var(--helpgent-color-gray);
                transition: var(--helpgent-transition);
            }
        }
        &:hover{
            color: var(--helpgent-color-primary);
            svg path{
                fill: var(--helpgent-color-primary);
            }
        }
    }
    .helpgent-sidebar__content{
        margin: 20px 0 25px;
        align-items: center;
    }
    .helpgent-sidebar__question{
        align-items: center;
        min-height: 50px;
        img{
            width: 50px;
            height: 50px;
            border-radius: 10px;
        }
        .helpgent-sidebar__question-title{
            font-size: 18px;
            font-weight: 600;
            line-height: 1.5;
            margin-left: 15px;
            color: var(--helpgent-color-dark);
        }
    }
    .helpgent-form-color-box{
        width: 50px;
        height: 50px;
        border-radius: 10px;
        flex: none;
    }
    .helpgent-sidebar__action{
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background-color: var(--helpgent-color-white);
            transition: var(--helpgent-transition);
            svg{
                width: 16px;
                height: 16px;
                path{
                    fill: var(--helpgent-color-gray);
                    transition: var(--helpgent-transition);
                }
            }
            &:hover{
                background: var(--helpgent-color-primary);
                svg path{
                    fill: #fff;
                }
            }
        }

    }
    .helpgent-sidebar__navigation-wrap{
        justify-content: space-between;
        align-items: center;
    }
    .helpgent-sidebar__quick-action{
        display: flex;
        align-items: center;
        gap: 7px;
        margin-right: -7.5px;
    }
    .helpgent-sidebar__quick-action-link{
        &.helpgent-sidebar__quick-action-refresh{
            padding: 0 7.5px;
            svg path{
                transition: var(--helpgent-transition);
            }
            &:hover{
                svg path{
                    fill: var(--helpgent-color-gray);
                }
            }
        }
        .helpgent-dropdown__toggle{
            padding: 0 7.5px;
            &:hover{
                svg{
                    path{
                        fill: var(--helpgent-color-gray);
                    }
                }
            }
        }
        .helpgent-dropdown__content{
            width: 180px;
            padding: 3px 0;
            right: 0;
            a{
                color: var(--helpgent-color-gray);
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 14px;
                font-weight: 500;
                &:hover{
                    background: none;
                }
                .helpgent-dropdown-item-icon{
                    margin: 0;
                }
                svg{
                    path{
                        fill: var(--helpgent-color-gray);
                    }
                }
            }
        }
    }
    .helpgent-sidebar__navigation{
        display: flex;
        margin: -7.5px;
        a{
            position: relative;
            display: inline-block;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            margin: 7.5px;
            color: var(--helpgent-color-light-gray);
            &.helpgent-active{
                color: var(--helpgent-color-primary);
                &:after{
                    background-color: var(--helpgent-color-primary);
                }
            }
            &:hover{
                color: var(--helpgent-color-primary);
            }
            &:after{
                position: absolute;
                left: 0;
                bottom: -6px;
                width: 100%;
                height: 2px;
                border-radius: 10px;
                content: '';
                background-color: transparent;
            }
        }
    }
    .helpgent-sidebar__archive{
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        .helpgent-sidebar__archive-title{
            font-size: 14px;
            font-weight: 500;
            color: var(--helpgent-color-primary);
            display: flex;
            align-items: center;
            gap: 8px;
            svg{
                path{
                    fill: var(--helpgent-color-primary);
                }
            }
        }
        .helpgent-sidebar__archive-remove{
            cursor: pointer;
            width: 30px;
            height: 30px;
            background: var(--helpgent-color-light-gray);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            svg{
                width: 10px;
                height: 10px;
                path{
                    fill: #fff;
                }
            }
        }
    }
    main{
        flex: 1;
        height: calc(100vh - 100px);
        border-radius: 20px;
        background-color: var(--helpgent-color-white);
        display: none;
        @media only screen and (max-width: 1199px){
            width: 400px;
        }
        &.helpgent-conversation-main--active{
            width: 100%;
            display: block;
            .helpgent-user-view{
                .helpgent-back-user-list{
                    display: block;
                    margin-right: 15px;
                    cursor: pointer;
                }
            }
        }
    }
`;
const ContentLoadingStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    &.helpgent-content-loading{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        max-width: 100%;
        min-height: 500px;
        padding: 30px;
        border-radius: 10px;
        margin: 15px;
        box-sizing: border-box;
        background-color: var(--helpgent-color-white);
        flex: 1 1 0%;
        .helpgent-shimmer-effect{
            display: block;
            height: 16px;
            width: 100%;
            background: #f6f7f8;
            background-image: -webkit-linear-gradient(left,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);
            background-image: -o-linear-gradient(left,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);
            background-image: linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);
            background-repeat: no-repeat;
            background-size: 800px 104px;
            display: inline-block;
            position: relative;
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-name: shimmerEffect;
            animation-timing-function: linear;
            &:not(:last-child){
                margin-bottom: 15px;
            }
        }
    }
`;
const InlineFieldStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    &.helpgent-field-element--inline{
        .helpgent-form-group--has-extension{
            .helpgent-select{
                min-width: auto;
            }

            .helpgent-select__option{
                padding: 4px;
            }

            .helpgent-select__control{
                padding: 0 4px;
                background-color: var(--helpgent-color-white);
            }
            .helpgent-select__value-container{
                width: 25px;
            }
        }
        .helpgent-form-group__extension{
            max-width: 60px;
            .helpgent-select__menu{
                padding: 6px;
            }
            .helpgent-select__control{
                height: 26px;
                min-height: 26px;
            }
            .helpgent-select .helpgent-select__indicator{
                height: auto;
            }
        }
        .helpgent-select {
            .helpgent-select__value-container{
                padding: 0;
            }
            .helpgent-select__indicator{
                width: 16px;
                height: 16px;
                padding-inline-end: 0;
            }
        }
    }
`;
const UserMediaStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    .helpgent-user-block__left{
        width: 30px;
        height: 30px;
        margin-right: 10px;
        img{
            max-width: 30px;
            border-radius: 50%;
        }
    }
    .helpgent-user-block__username{
        font-size: 15px;
        font-weight: 500;
        color: #030308;
        margin-right: 8px;
    }
    .helpgent-user-block__date-meta{
        color: var(--helpgent-color-light-gray);
        font-size: 13px;
    }
    .helpgent-user-block__content{
        p{
            font-size; 15px;
            font-weight: 400;
            color: var(--helpgent-color-gray);
            margin: 0;
        }
        .helpgent-user-block__content-attachment{
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 5px;
        }
    }
`;
const ModalAlertStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    padding: 84px 0 0;
    .helpgent-modal-action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 30px;
        background-color: var(--helpgent-color-bg-light);
        .helpgent-btn{
            margin: 0 5px;
        }
        &.helpgent-modal-filter-action{
            .helpgent-modal-action__cancel{
                background: transparent;
                border: 0 none;
                padding: 0;
                color: var(--helpgent-color-light-gray);
                &:hover{
                    color: var(--helpgent-color-dark);
                }
            }
        }
        &.helpgent-delete-alert-modal-action,
        &.helpgent-conversation-delete-action,
        &.helpgent-form-delete-alert-action,
        &.helpgent-response-delete-alert-action,
        &.helpgent-delete-tag-alert-action{
            justify-content: flex-end;
            .helpgent-btn{
                border-radius: 10px;
                min-height: 40px;
            }
        }
    }

    //filter modal
    .helpgent-modal-filter-inner{
        padding: 0 30px 30px;
        .helpgent-modal-filter__tags-label{
            font-size: 16px;
            font-weight: 600;
            color: var(--helpgent-color-dark);
            margin-bottom: 20px;
            display: block;
        }
        .helpgent-modal-filter__tags-list{
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            max-height: 170px;
            overflow-y: auto;
            overflow-x: hidden;
        }
        .helpgent-modal-filter__tags-item{
            flex: 0 0 50%;
            margin-bottom: 18px;
            .helpgent-checkbox{
                display: flex;
                gap: 12px;
                label{
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--helpgent-color-gray);
                }
            }
        }
        .helpgent-show-more{
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: var(--helpgent-color-dark);
            margin-top: 0;
            text-decoration: underline;
            cursor: pointer;
            &--active{
                margin-top: 18px;
            }
        }
    }
    .helpgent-modal-action{}

    .helpgent-session-expired__content{
        margin-top: -84px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 50px;
        h2{
            margin: 30px 0 20px;
            font-size: 24px;
            font-weight: 500;
            color: var(--helpgent-color-dark);
        }
        p{
            margin: 0 0 50px;
        }
    }
`;
const ProgressBarStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    &.helpgent-progress-bar{
        width: 100%;
        height: 6px;
        position: relative;
        border-radius: 20px;
        background-color: var(--helpgent-color-bg-gray);
        .helpgent-progress-bar__status{
            display: block;
            height: 100%;
            width: 50%;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            background-size: 15px 15px;
            position: relative;
            overflow: hidden;
        }
        &.helpgent-progress-bar-dark{
            .helpgent-progress-bar__status{
                background-color: var(--helpgent-color-dark);
            }
        }
        &.helpgent-progress-bar-primary{
            .helpgent-progress-bar__status{
                background-color: var(--helpgent-color-primary);
            }
        }
        &.helpgent-progress-bar-success{
            .helpgent-progress-bar__status{
                background-color: var(--helpgent-color-success);
            }
        }
        &.helpgent-progress-bar-animate{
            .helpgent-progress-bar__status{
                background-image: linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
                animation: wpwaxProgressBar 1.5s linear infinite;
            }
        }
    }
`;
const CrudLayoutStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    .helpgent-crud-header {
        align-items: center;
        margin-bottom: 30px;
        justify-content: space-between;
    }
    .helpgent-crud-header__left{
        display: flex;
        align-items: center;
        gap: 25px;
    }
    .helpgent-crud-header__title{
        font-size: 24px;
        font-weight: 500;
        line-height: 1.5;
        color: var(--helpgent-color-dark);
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
        .helpgent-count{
            color: var(--helpgent-color-light-gray);
            font-size: 18px;
            font-weight: 500;
        }
    }
    .helpgent-crud-header__right{
        width: 300px;
        .helpgent-form-group{
            margin: 0;
        }
        .helpgent-form-group__element{
            background: var(--helpgent-color-bg-deep);
            border-radius: 10px;
        }
    }
    .helpgent-crud-main{
        padding: 20px;
        border-radius: 12px;
        background-color: var(--helpgent-color-white);
        margin-bottom: 30px;
    }
`;
const HelpgentTableStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].table`
    &.helpgent-table {
        display: table;
        border-collapse: collapse;
        width: 100%;
        text-align: start;
        border-spacing: 0;
        empty-cells: show;
        margin-bottom: 0;
        margin-top: 0;
        overflow: visible;

        thead {
            border-radius: 6px;
            border-bottom: 10px solid transparent;
            tr {
                background: #e8e8e8;
                border-radius: 10px;
                th {
                    font-size: 13px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 500;
                    padding: 16px 15px 10px;
                    text-align: start;
                    color: var(--helpgent-color-light-gray);
                    @media only screen and (max-width: 1399px){
                        padding: 16px 5px 10px;
                    }
                }
                @media only screen and (max-width: 1399px){
                    th:first-child{
                        padding-left: 15px;
                    }
                    th:last-child{
                        padding-right: 15px;
                    }
                }
            }
        }

        tbody {
            transition: var(--helpgent-transition);
            tr {
                transition: var(--helpgent-transition);
                &:hover {
                    background-color: var(--helpgent-color-bg-light);
                }

                td {
                    font-size: 14px;
                    font-weight: 500;
                    padding: 11px 15px;
                    @media only screen and (max-width: 1399px){
                        padding: 11px 5px;
                    }
                }

                @media only screen and (max-width: 1399px){
                    td:first-child{
                        padding-left: 15px;
                    }
                    td:last-child{
                        padding-right: 15px;
                    }
                }
            }
        }

        tr {
            th,
            td {
                display: table-cell;
                &:first-child {
                    border-radius: 10px 0 0 10px;
                }

                &:last-child {
                    border-radius: 0 10px 10px 0;
                }
            }
        }
    }
    .helpgent-table-action {
        display: flex;
        align-items: center;
        gap: 0 20px;
        @media only screen and (max-width: 1399px){
            gap: 0 10px;
        }
        .helpgent-btn{
            padding: 0 15px;
            min-height: 34px;
            font-size: 14px;
            font-weight: 500;
            gap: 8px;
            color: var(--helpgent-color-gray);
            svg{
                width: 14px;
                height: 14px;
                path{
                    fill: var(--helpgent-color-light-gray);
                    transition: var(--helpgent-transition);
                }
            }

            &:hover{
                background: var(--helpgent-color-dark);
                color: var(--helpgent-color-white);
                border-color: var(--helpgent-color-dark);
                svg path{
                    fill: var(--helpgent-color-white);
                }
            }
        }
        .helpgent-dropdown{
            line-height: 0;
            .helpgent-dropdown__toggle{
                height: 35px;
                padding: 0 10px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &.helpgent-dropdown-open{
                .helpgent-dropdown__toggle{
                    background: var(--helpgent-color-bg-deep);
                }
            }
            &__content{
                min-width: 240px;
                box-sizing: border-box;
                padding: 12px;
                li{
                    margin-bottom: 0;
                    a{
                        padding: 13px 15px;
                        gap: 12px;
                        font-weight: 500;
                        color: var(--helpgent-color-gray);
                    }
                    .helpgent-dropdown-item-icon{
                        line-height: 0;
                        margin: 0;
                    }
                    .helpgent-dropdown-item-icon svg{
                        width: 16px;
                        height: 16px;
                        path{
                            fill: var(--helpgent-color-light-gray);
                        }
                    }
                    &:hover{
                        a{
                            background: var(--helpgent-color-bg-gray);
                            color: var(--helpgent-color-dark);
                            svg{
                                path, circle{
                                    fill: var(--helpgent-color-dark);
                                }
                            }
                        }
                    }
                li:last-child{
                    border-top: 1px solid #e6e6e6;
                    a{
                        margin-top: 5px;
                    }
                }
            }
        }
    }
    .helpgent-table{
        &.helpgent-table-striped{
            background-color: var(--helpgent-color-white);
            thead {
                background-color: transparent;
                tr {
                    th{
                        padding: 10px 0;
                        border-bottom: 1px solid var(--helpgent-color-border-light);
                    }
                }
            }
            tbody{
                tr{
                    td{
                        padding: 10px 0;
                    }
                    &:not(:last-child){
                        td{
                            border-bottom: 1px solid var(--helpgent-color-border-light);
                        }
                    }
                }
            }
        }
    }
`;
const ChatBubbleStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    cursor: pointer;
    &.helpgent-chat-bubble{
        position: absolute;
        bottom: var(--helpgent-bubble-offset-y);
        background: var(--helpgent-bubble-bg-color);
        border: 4px solid var(--helpgent-bubble-border-color);
        //transition: var(--helpgent-transition);
        box-shadow: var(--helpgent-bubble-box-shadow);
        overflow: hidden;
        box-sizing: border-box;
        .helpgent-chat-bubble__overlay-text{
            display: flex;
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 15px 28px;
            font-size: 15px;
            font-weight: 700;
            box-sizing: border-box;
            text-align: left;
            align-items: center;
            justify-content: center;
            word-break: break-word;
            word-wrap: break-word;
            z-index: 2;
            color: var(--helpgent-color-white);
            line-height: 1.2;

        }
        &--left{
            left: var(--helpgent-bubble-offset-x);
        }
        &--right{
            right: var(--helpgent-bubble-offset-x);
        }
        &--circle{
            border-radius: 50%;
        }
        &--small{
            width: 100px;
            height: 100px;
            .helpgent-chat-bubble__overlay-text{
                font-size: 13px;
                padding: 15px 18px;
            }
        }
        &--medium{
            width: 130px;
            height: 130px;
        }
        &--large{
            width: 150px;
            height: 150px;
            .helpgent-chat-bubble__overlay-text{
                font-size: 18px;
                padding: 15px 30px;
            }
        }
        &--boxed-horizontal{
            width: 180px;
            border-radius: 10px;
        }
        &--boxed-vertical{
            height: 180px;
            border-radius: 10px;
        }
        .helpgent-chat-bubble__background{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            left: 0;
            top: 0;
            &:after{
                position: absolute;
                content: '';
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                border-radius: inherit;
                background: rgba(0,0,0,0.32);
            }
            &--image{
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &--video{
                video{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &--placeholder{
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &--colored{
                &:after{
                    content: none;
                }
            }
        }
    }
`;
const PreviewCopyright = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    position: sticky;
    width: 100%;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    padding: 18px;
    box-sizing: border-box;
    background: rgba(255,255,255,0.85);
    border-radius: 0 0 20px 0;
    .helpgent-copyright__button{
        font-size: 12px;
        font-weight: 600;
        color: #707070;
        background: var(--helpgent-color-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 8px;
        transition: var(--helpgent-transition);
        height: 32px;
        text-decoration: none;
        padding: 0 14px;
        svg{
            width: 80px;
            height: 18px;
        }
        &:hover{
            background: #3a3a3a;
        }
    }
    &.helpgent-form__copyright--media{
        background: 0;
        position: absolute;
        z-index: 1;
    }
`;
const DeleteAlertStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    padding: 0 30px 25px;
    .helpgent-delete-alert-text{
        p{
            font-size: 14px;
            color: var(--helpgent-color-gray);
            margin: 0 0 27px;
        }
    }
`;
const ProModalContentStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    padding: 0 40px 40px;
    text-align: center;
    .helpgent-badge-extended{
        width: fit-content;
        line-height: 1.4;
        padding: 3px 6px;
        margin: 0 auto;
    }
    .helpgent-pro-modal__title{
        font-size: 22px;
        font-weight: 600;
        margin: 20px 0 18px;
        color: var(--helpgent-color-dark);
    }
    p{
        font-size: 15px;
        font-weight: 400;
        margin: 0 0 40px;
        color: var(--helpgent-color-text);
    }
    .helpgent-pro-modal__bottom{
        display: flex;
        flex-direction: column;
        button{
            border-radius: 10px;
            text-align: center;
            justify-content: center;
        }
        .helpgent-btn-link{
            font-size: 15px;
            font-weight: 500;
            background-color: transparent;
            box-shadow: 0 0;
            border: 0 none;
            margin-top: 15px;
            cursor: pointer;
            color: var(--helpgent-color-light-gray);
            &:hover{
                color: var(--helpgent-color-primary);
            }
        }
    }
`;
const PreviewDeviceControlStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    margin-top: 40px;
    .helpgent-device-action{
        cursor: pointer;
        &.helpgent-active{
            svg{
                path{
                    fill: var(--helpgent-color-dark);
                }
            }
        }
    }
`;
const ChatFormStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    &.helpgent-answer-loading{
        .helpgent-navigation,
        .helpgent-question-element-wrapper{
            user-select: none;
            opacity: .5;
        }
    }
    .helpgent-chatForm-back-btn,
    .helpgent-chatForm-close-btn{
        position: absolute;
        right: -10px;
        top: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background-color: var(--helpgent-color-dark);
        z-index: 2;
        svg{
            width: 10px;
            height: 10px;
            path{
                fill: var(--helpgent-color-white);
            }
        }
    }
    .helpgent-chatForm-back-btn{
        right: auto;
        left: 0;
        top: 0;
        background-color: var(--helpgent-color-white);
        width: 40px;
        height: inherit;
        border-radius: 20px 0 0 20px;
        background: var(--helpgent-color-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        svg{
            width: 14px;
            path{
                fill: #fff;
            }
        }
    }
    .helpgent-question-element-wrapper--user_validation,
    .helpgent-question-element-wrapper--date,
    .helpgent-question-element-wrapper--long_text,
    .helpgent-question-element-wrapper--short_text,
    .helpgent-question-element-wrapper--email,
    .helpgent-question-element-wrapper--dropdown,
    .helpgent-question-element-wrapper--multi_select,
    .helpgent-question-element-wrapper--single_select{
        .helpgent-validate-danger{
            display: block;
        }
    }
`;
const SharePopupStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    position: relative;
    .helpgent-share-popup{
        position: absolute;
        right: -85px;
        top: 50px;
        background: #fff;
        border-radius: 10px;
        padding: 12px;
        box-shadow: 0 0 15px rgba(0,0,0,0.15);
        width: 205px;
        box-sizing: border-box;
        &:before{
            position: absolute;
            content: '';
            width: 10px;
            height: 10px;
            background: #fff;
            left: 50%;
            top: -5px;
            transform: translateX(-50%) rotate(45deg);
        }
        input{
            border: 0 none;
            background: var(--helpgent-color-bg-gray);
            color: var(--helpgent-color-dark);
            border-radius: 5px;
            text-align: center;
            cursor: copy;
            font-size: 12px;
            font-weight: 400;
            width: 100%;
            &:focus{
                border: 1px solid var(--helpgent-color-dark);
                box-shadow: none;
                outline: 0;
            }
        }
    }
`;


/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/react-from-dom/esm/helpers.js":
/*!****************************************************!*\
  !*** ./node_modules/react-from-dom/esm/helpers.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noTextChildNodes: function() { return /* binding */ noTextChildNodes; },
/* harmony export */   possibleStandardNames: function() { return /* binding */ possibleStandardNames; },
/* harmony export */   randomString: function() { return /* binding */ randomString; },
/* harmony export */   styleToObject: function() { return /* binding */ styleToObject; }
/* harmony export */ });
var __read = (undefined && undefined.__read) || function (o, n) {
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
};
var styleToObject = function (input) {
    var attributes = input.split(/ ?; ?/);
    return attributes.reduce(function (acc, d) {
        var _a = __read(d.split(/ ?: ?/), 2), key = _a[0], value = _a[1];
        if (key && value) {
            acc[key.replace(/-(\w)/g, function (_$0, $1) { return $1.toUpperCase(); })] = Number.isNaN(Number(value))
                ? value
                : Number(value);
        }
        return acc;
    }, {});
};
/* istanbul ignore next */
function randomString(length) {
    if (length === void 0) { length = 6; }
    var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var index = length; index > 0; --index) {
        result += characters[Math.round(Math.random() * (characters.length - 1))];
    }
    return result;
}
var noTextChildNodes = [
    'br',
    'col',
    'colgroup',
    'dl',
    'hr',
    'iframe',
    'img',
    'input',
    'link',
    'menuitem',
    'meta',
    'ol',
    'param',
    'select',
    'table',
    'tbody',
    'tfoot',
    'thead',
    'tr',
    'ul',
    'wbr',
];
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Taken from https://raw.githubusercontent.com/facebook/react/baff5cc2f69d30589a5dc65b089e47765437294b/packages/react-dom/src/shared/possibleStandardNames.js
// tslint:disable:object-literal-sort-keys
var possibleStandardNames = {
    // HTML
    'accept-charset': 'acceptCharset',
    acceptcharset: 'acceptCharset',
    accesskey: 'accessKey',
    allowfullscreen: 'allowFullScreen',
    autocapitalize: 'autoCapitalize',
    autocomplete: 'autoComplete',
    autocorrect: 'autoCorrect',
    autofocus: 'autoFocus',
    autoplay: 'autoPlay',
    autosave: 'autoSave',
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    charset: 'charSet',
    class: 'className',
    classid: 'classID',
    classname: 'className',
    colspan: 'colSpan',
    contenteditable: 'contentEditable',
    contextmenu: 'contextMenu',
    controlslist: 'controlsList',
    crossorigin: 'crossOrigin',
    dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
    datetime: 'dateTime',
    defaultchecked: 'defaultChecked',
    defaultvalue: 'defaultValue',
    enctype: 'encType',
    for: 'htmlFor',
    formmethod: 'formMethod',
    formaction: 'formAction',
    formenctype: 'formEncType',
    formnovalidate: 'formNoValidate',
    formtarget: 'formTarget',
    frameborder: 'frameBorder',
    hreflang: 'hrefLang',
    htmlfor: 'htmlFor',
    httpequiv: 'httpEquiv',
    'http-equiv': 'httpEquiv',
    icon: 'icon',
    innerhtml: 'innerHTML',
    inputmode: 'inputMode',
    itemid: 'itemID',
    itemprop: 'itemProp',
    itemref: 'itemRef',
    itemscope: 'itemScope',
    itemtype: 'itemType',
    keyparams: 'keyParams',
    keytype: 'keyType',
    marginwidth: 'marginWidth',
    marginheight: 'marginHeight',
    maxlength: 'maxLength',
    mediagroup: 'mediaGroup',
    minlength: 'minLength',
    nomodule: 'noModule',
    novalidate: 'noValidate',
    playsinline: 'playsInline',
    radiogroup: 'radioGroup',
    readonly: 'readOnly',
    referrerpolicy: 'referrerPolicy',
    rowspan: 'rowSpan',
    spellcheck: 'spellCheck',
    srcdoc: 'srcDoc',
    srclang: 'srcLang',
    srcset: 'srcSet',
    tabindex: 'tabIndex',
    typemustmatch: 'typeMustMatch',
    usemap: 'useMap',
    // SVG
    accentheight: 'accentHeight',
    'accent-height': 'accentHeight',
    alignmentbaseline: 'alignmentBaseline',
    'alignment-baseline': 'alignmentBaseline',
    allowreorder: 'allowReorder',
    arabicform: 'arabicForm',
    'arabic-form': 'arabicForm',
    attributename: 'attributeName',
    attributetype: 'attributeType',
    autoreverse: 'autoReverse',
    basefrequency: 'baseFrequency',
    baselineshift: 'baselineShift',
    'baseline-shift': 'baselineShift',
    baseprofile: 'baseProfile',
    calcmode: 'calcMode',
    capheight: 'capHeight',
    'cap-height': 'capHeight',
    clippath: 'clipPath',
    'clip-path': 'clipPath',
    clippathunits: 'clipPathUnits',
    cliprule: 'clipRule',
    'clip-rule': 'clipRule',
    colorinterpolation: 'colorInterpolation',
    'color-interpolation': 'colorInterpolation',
    colorinterpolationfilters: 'colorInterpolationFilters',
    'color-interpolation-filters': 'colorInterpolationFilters',
    colorprofile: 'colorProfile',
    'color-profile': 'colorProfile',
    colorrendering: 'colorRendering',
    'color-rendering': 'colorRendering',
    contentscripttype: 'contentScriptType',
    contentstyletype: 'contentStyleType',
    diffuseconstant: 'diffuseConstant',
    dominantbaseline: 'dominantBaseline',
    'dominant-baseline': 'dominantBaseline',
    edgemode: 'edgeMode',
    enablebackground: 'enableBackground',
    'enable-background': 'enableBackground',
    externalresourcesrequired: 'externalResourcesRequired',
    fillopacity: 'fillOpacity',
    'fill-opacity': 'fillOpacity',
    fillrule: 'fillRule',
    'fill-rule': 'fillRule',
    filterres: 'filterRes',
    filterunits: 'filterUnits',
    floodopacity: 'floodOpacity',
    'flood-opacity': 'floodOpacity',
    floodcolor: 'floodColor',
    'flood-color': 'floodColor',
    fontfamily: 'fontFamily',
    'font-family': 'fontFamily',
    fontsize: 'fontSize',
    'font-size': 'fontSize',
    fontsizeadjust: 'fontSizeAdjust',
    'font-size-adjust': 'fontSizeAdjust',
    fontstretch: 'fontStretch',
    'font-stretch': 'fontStretch',
    fontstyle: 'fontStyle',
    'font-style': 'fontStyle',
    fontvariant: 'fontVariant',
    'font-variant': 'fontVariant',
    fontweight: 'fontWeight',
    'font-weight': 'fontWeight',
    glyphname: 'glyphName',
    'glyph-name': 'glyphName',
    glyphorientationhorizontal: 'glyphOrientationHorizontal',
    'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
    glyphorientationvertical: 'glyphOrientationVertical',
    'glyph-orientation-vertical': 'glyphOrientationVertical',
    glyphref: 'glyphRef',
    gradienttransform: 'gradientTransform',
    gradientunits: 'gradientUnits',
    horizadvx: 'horizAdvX',
    'horiz-adv-x': 'horizAdvX',
    horizoriginx: 'horizOriginX',
    'horiz-origin-x': 'horizOriginX',
    imagerendering: 'imageRendering',
    'image-rendering': 'imageRendering',
    kernelmatrix: 'kernelMatrix',
    kernelunitlength: 'kernelUnitLength',
    keypoints: 'keyPoints',
    keysplines: 'keySplines',
    keytimes: 'keyTimes',
    lengthadjust: 'lengthAdjust',
    letterspacing: 'letterSpacing',
    'letter-spacing': 'letterSpacing',
    lightingcolor: 'lightingColor',
    'lighting-color': 'lightingColor',
    limitingconeangle: 'limitingConeAngle',
    markerend: 'markerEnd',
    'marker-end': 'markerEnd',
    markerheight: 'markerHeight',
    markermid: 'markerMid',
    'marker-mid': 'markerMid',
    markerstart: 'markerStart',
    'marker-start': 'markerStart',
    markerunits: 'markerUnits',
    markerwidth: 'markerWidth',
    maskcontentunits: 'maskContentUnits',
    maskunits: 'maskUnits',
    numoctaves: 'numOctaves',
    overlineposition: 'overlinePosition',
    'overline-position': 'overlinePosition',
    overlinethickness: 'overlineThickness',
    'overline-thickness': 'overlineThickness',
    paintorder: 'paintOrder',
    'paint-order': 'paintOrder',
    'panose-1': 'panose1',
    pathlength: 'pathLength',
    patterncontentunits: 'patternContentUnits',
    patterntransform: 'patternTransform',
    patternunits: 'patternUnits',
    pointerevents: 'pointerEvents',
    'pointer-events': 'pointerEvents',
    pointsatx: 'pointsAtX',
    pointsaty: 'pointsAtY',
    pointsatz: 'pointsAtZ',
    preservealpha: 'preserveAlpha',
    preserveaspectratio: 'preserveAspectRatio',
    primitiveunits: 'primitiveUnits',
    refx: 'refX',
    refy: 'refY',
    renderingintent: 'renderingIntent',
    'rendering-intent': 'renderingIntent',
    repeatcount: 'repeatCount',
    repeatdur: 'repeatDur',
    requiredextensions: 'requiredExtensions',
    requiredfeatures: 'requiredFeatures',
    shaperendering: 'shapeRendering',
    'shape-rendering': 'shapeRendering',
    specularconstant: 'specularConstant',
    specularexponent: 'specularExponent',
    spreadmethod: 'spreadMethod',
    startoffset: 'startOffset',
    stddeviation: 'stdDeviation',
    stitchtiles: 'stitchTiles',
    stopcolor: 'stopColor',
    'stop-color': 'stopColor',
    stopopacity: 'stopOpacity',
    'stop-opacity': 'stopOpacity',
    strikethroughposition: 'strikethroughPosition',
    'strikethrough-position': 'strikethroughPosition',
    strikethroughthickness: 'strikethroughThickness',
    'strikethrough-thickness': 'strikethroughThickness',
    strokedasharray: 'strokeDasharray',
    'stroke-dasharray': 'strokeDasharray',
    strokedashoffset: 'strokeDashoffset',
    'stroke-dashoffset': 'strokeDashoffset',
    strokelinecap: 'strokeLinecap',
    'stroke-linecap': 'strokeLinecap',
    strokelinejoin: 'strokeLinejoin',
    'stroke-linejoin': 'strokeLinejoin',
    strokemiterlimit: 'strokeMiterlimit',
    'stroke-miterlimit': 'strokeMiterlimit',
    strokewidth: 'strokeWidth',
    'stroke-width': 'strokeWidth',
    strokeopacity: 'strokeOpacity',
    'stroke-opacity': 'strokeOpacity',
    suppresscontenteditablewarning: 'suppressContentEditableWarning',
    suppresshydrationwarning: 'suppressHydrationWarning',
    surfacescale: 'surfaceScale',
    systemlanguage: 'systemLanguage',
    tablevalues: 'tableValues',
    targetx: 'targetX',
    targety: 'targetY',
    textanchor: 'textAnchor',
    'text-anchor': 'textAnchor',
    textdecoration: 'textDecoration',
    'text-decoration': 'textDecoration',
    textlength: 'textLength',
    textrendering: 'textRendering',
    'text-rendering': 'textRendering',
    underlineposition: 'underlinePosition',
    'underline-position': 'underlinePosition',
    underlinethickness: 'underlineThickness',
    'underline-thickness': 'underlineThickness',
    unicodebidi: 'unicodeBidi',
    'unicode-bidi': 'unicodeBidi',
    unicoderange: 'unicodeRange',
    'unicode-range': 'unicodeRange',
    unitsperem: 'unitsPerEm',
    'units-per-em': 'unitsPerEm',
    unselectable: 'unselectable',
    valphabetic: 'vAlphabetic',
    'v-alphabetic': 'vAlphabetic',
    vectoreffect: 'vectorEffect',
    'vector-effect': 'vectorEffect',
    vertadvy: 'vertAdvY',
    'vert-adv-y': 'vertAdvY',
    vertoriginx: 'vertOriginX',
    'vert-origin-x': 'vertOriginX',
    vertoriginy: 'vertOriginY',
    'vert-origin-y': 'vertOriginY',
    vhanging: 'vHanging',
    'v-hanging': 'vHanging',
    videographic: 'vIdeographic',
    'v-ideographic': 'vIdeographic',
    viewbox: 'viewBox',
    viewtarget: 'viewTarget',
    vmathematical: 'vMathematical',
    'v-mathematical': 'vMathematical',
    wordspacing: 'wordSpacing',
    'word-spacing': 'wordSpacing',
    writingmode: 'writingMode',
    'writing-mode': 'writingMode',
    xchannelselector: 'xChannelSelector',
    xheight: 'xHeight',
    'x-height': 'xHeight',
    xlinkactuate: 'xlinkActuate',
    'xlink:actuate': 'xlinkActuate',
    xlinkarcrole: 'xlinkArcrole',
    'xlink:arcrole': 'xlinkArcrole',
    xlinkhref: 'xlinkHref',
    'xlink:href': 'xlinkHref',
    xlinkrole: 'xlinkRole',
    'xlink:role': 'xlinkRole',
    xlinkshow: 'xlinkShow',
    'xlink:show': 'xlinkShow',
    xlinktitle: 'xlinkTitle',
    'xlink:title': 'xlinkTitle',
    xlinktype: 'xlinkType',
    'xlink:type': 'xlinkType',
    xmlbase: 'xmlBase',
    'xml:base': 'xmlBase',
    xmllang: 'xmlLang',
    'xml:lang': 'xmlLang',
    'xml:space': 'xmlSpace',
    xmlnsxlink: 'xmlnsXlink',
    'xmlns:xlink': 'xmlnsXlink',
    xmlspace: 'xmlSpace',
    ychannelselector: 'yChannelSelector',
    zoomandpan: 'zoomAndPan',
    // event handlers
    onblur: 'onBlur',
    onchange: 'onChange',
    onclick: 'onClick',
    oncontextmenu: 'onContextMenu',
    ondoubleclick: 'onDoubleClick',
    ondrag: 'onDrag',
    ondragend: 'onDragEnd',
    ondragenter: 'onDragEnter',
    ondragexit: 'onDragExit',
    ondragleave: 'onDragLeave',
    ondragover: 'onDragOver',
    ondragstart: 'onDragStart',
    ondrop: 'onDrop',
    onerror: 'onError',
    onfocus: 'onFocus',
    oninput: 'onInput',
    oninvalid: 'onInvalid',
    onkeydown: 'onKeyDown',
    onkeypress: 'onKeyPress',
    onkeyup: 'onKeyUp',
    onload: 'onLoad',
    onmousedown: 'onMouseDown',
    onmouseenter: 'onMouseEnter',
    onmouseleave: 'onMouseLeave',
    onmousemove: 'onMouseMove',
    onmouseout: 'onMouseOut',
    onmouseover: 'onMouseOver',
    onmouseup: 'onMouseUp',
    onscroll: 'onScroll',
    onsubmit: 'onSubmit',
    ontouchcancel: 'onTouchCancel',
    ontouchend: 'onTouchEnd',
    ontouchmove: 'onTouchMove',
    ontouchstart: 'onTouchStart',
    onwheel: 'onWheel',
};
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/react-from-dom/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-from-dom/esm/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertFromNode: function() { return /* binding */ convertFromNode; },
/* harmony export */   convertFromString: function() { return /* binding */ convertFromString; },
/* harmony export */   "default": function() { return /* binding */ convert; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./node_modules/react-from-dom/esm/helpers.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
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
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable @typescript-eslint/no-use-before-define */


function parseAttributes(node, reactKey) {
    var attributes = {
        key: reactKey,
    };
    /* istanbul ignore else */
    if (node instanceof Element) {
        var nodeClassNames = node.getAttribute('class');
        if (nodeClassNames) {
            attributes.className = nodeClassNames;
        }
        __spreadArray([], __read(node.attributes), false).forEach(function (d) {
            switch (d.name) {
                // this is manually handled above, so break;
                case 'class':
                    break;
                case 'style':
                    attributes[d.name] = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.styleToObject)(d.value);
                    break;
                case 'allowfullscreen':
                case 'allowpaymentrequest':
                case 'async':
                case 'autofocus':
                case 'autoplay':
                case 'checked':
                case 'controls':
                case 'default':
                case 'defer':
                case 'disabled':
                case 'formnovalidate':
                case 'hidden':
                case 'ismap':
                case 'itemscope':
                case 'loop':
                case 'multiple':
                case 'muted':
                case 'nomodule':
                case 'novalidate':
                case 'open':
                case 'readonly':
                case 'required':
                case 'reversed':
                case 'selected':
                case 'typemustmatch':
                    attributes[_helpers__WEBPACK_IMPORTED_MODULE_1__.possibleStandardNames[d.name] || d.name] = true;
                    break;
                default:
                    attributes[_helpers__WEBPACK_IMPORTED_MODULE_1__.possibleStandardNames[d.name] || d.name] = d.value;
            }
        });
    }
    return attributes;
}
function parseChildren(childNodeList, level, options) {
    var children = __spreadArray([], __read(childNodeList), false).map(function (node, index) {
        return convertFromNode(node, __assign(__assign({}, options), { index: index, level: level + 1 }));
    })
        .filter(Boolean);
    if (!children.length) {
        return null;
    }
    return children;
}
function parseName(nodeName) {
    if (/[a-z]+[A-Z]+[a-z]+/.test(nodeName)) {
        return nodeName;
    }
    return nodeName.toLowerCase();
}
function convertFromNode(input, options) {
    var _a;
    if (options === void 0) { options = {}; }
    if (!input || !(input instanceof Node)) {
        return null;
    }
    var _b = options.actions, actions = _b === void 0 ? [] : _b, _c = options.index, index = _c === void 0 ? 0 : _c, _d = options.level, level = _d === void 0 ? 0 : _d, randomKey = options.randomKey;
    var node = input;
    var key = "".concat(level, "-").concat(index);
    var result = [];
    if (randomKey && level === 0) {
        key = "".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.randomString)(), "-").concat(key);
    }
    /* istanbul ignore else */
    if (Array.isArray(actions)) {
        actions.forEach(function (action) {
            if (action.condition(node, key, level)) {
                if (typeof action.pre === 'function') {
                    node = action.pre(node, key, level);
                    if (!(node instanceof Node)) {
                        node = input;
                        /* istanbul ignore else */
                        if (true) {
                            // eslint-disable-next-line no-console
                            console.warn('The `pre` method always must return a valid DomNode (instanceof Node) - your modification will be ignored (Hint: if you want to render a React-component, use the `post` method instead)');
                        }
                    }
                }
                if (typeof action.post === 'function') {
                    result.push(action.post(node, key, level));
                }
            }
        });
    }
    if (result.length) {
        return result;
    }
    switch (node.nodeType) {
        case 1: {
            // regular dom-node
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(parseName(node.nodeName), parseAttributes(node, key), parseChildren(node.childNodes, level, options));
        }
        case 3: {
            // textnode
            var nodeText = ((_a = node.nodeValue) === null || _a === void 0 ? void 0 : _a.toString()) || '';
            /* istanbul ignore else */
            if (/^\s+$/.test(nodeText) && !/[\u00A0\u202F]/.test(nodeText)) {
                return null;
            }
            /* istanbul ignore next */
            if (!node.parentNode) {
                return nodeText;
            }
            var parentNodeName = node.parentNode.nodeName.toLowerCase();
            if (_helpers__WEBPACK_IMPORTED_MODULE_1__.noTextChildNodes.includes(parentNodeName)) {
                /* istanbul ignore else */
                if (/\S/.test(nodeText)) {
                    // eslint-disable-next-line no-console
                    console.warn("A textNode is not allowed inside '".concat(parentNodeName, "'. Your text \"").concat(nodeText, "\" will be ignored"));
                }
                return null;
            }
            return nodeText;
        }
        case 8: {
            // html-comment
            return null;
        }
        /* istanbul ignore next */
        default: {
            return null;
        }
    }
}
function convertFromString(input, options) {
    if (options === void 0) { options = {}; }
    if (!input || typeof input !== 'string') {
        return null;
    }
    var _a = options.nodeOnly, nodeOnly = _a === void 0 ? false : _a, _b = options.selector, selector = _b === void 0 ? 'body > *' : _b, _c = options.type, type = _c === void 0 ? 'text/html' : _c;
    try {
        var parser = new DOMParser();
        var document_1 = parser.parseFromString(input, type);
        var node = document_1.querySelector(selector);
        if (!(node instanceof Node)) {
            throw new TypeError('Error parsing input');
        }
        if (nodeOnly) {
            return node;
        }
        return convertFromNode(node, options);
    }
    catch (error) {
        /* istanbul ignore else */
        if (true) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    }
    return null;
}
function convert(input, options) {
    if (options === void 0) { options = {}; }
    if (typeof input === 'string') {
        return convertFromString(input, options);
    }
    if (input instanceof Node) {
        return convertFromNode(input, options);
    }
    return null;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-inlinesvg/esm/helpers.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-inlinesvg/esm/helpers.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STATUS: function() { return /* binding */ STATUS; },
/* harmony export */   canUseDOM: function() { return /* binding */ canUseDOM; },
/* harmony export */   isSupportedEnvironment: function() { return /* binding */ isSupportedEnvironment; },
/* harmony export */   omit: function() { return /* binding */ omit; },
/* harmony export */   randomString: function() { return /* binding */ randomString; },
/* harmony export */   supportsInlineSVG: function() { return /* binding */ supportsInlineSVG; }
/* harmony export */ });
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_0__);

var STATUS = {
    IDLE: 'idle',
    LOADING: 'loading',
    LOADED: 'loaded',
    FAILED: 'failed',
    READY: 'ready',
    UNSUPPORTED: 'unsupported',
};
function canUseDOM() {
    return exenv__WEBPACK_IMPORTED_MODULE_0__.canUseDOM;
}
function isSupportedEnvironment() {
    return supportsInlineSVG() && typeof window !== 'undefined' && window !== null;
}
function supportsInlineSVG() {
    /* istanbul ignore next */
    if (!document) {
        return false;
    }
    var div = document.createElement('div');
    div.innerHTML = '<svg />';
    var svg = div.firstChild;
    return !!svg && svg.namespaceURI === 'http://www.w3.org/2000/svg';
}
function randomCharacter(character) {
    return character[Math.floor(Math.random() * character.length)];
}
function randomString(length) {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '1234567890';
    var charset = "".concat(letters).concat(letters.toUpperCase()).concat(numbers);
    var R = '';
    for (var index = 0; index < length; index++) {
        R += randomCharacter(charset);
    }
    return R;
}
/**
 *  Remove properties from an object
 */
function omit(input) {
    var filter = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        filter[_i - 1] = arguments[_i];
    }
    var output = {};
    for (var key in input) {
        /* istanbul ignore else */
        if ({}.hasOwnProperty.call(input, key)) {
            if (!filter.includes(key)) {
                output[key] = input[key];
            }
        }
    }
    return output;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/react-inlinesvg/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-inlinesvg/esm/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheStore: function() { return /* binding */ cacheStore; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_from_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-from-dom */ "./node_modules/react-from-dom/esm/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./node_modules/react-inlinesvg/esm/helpers.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
var __read = (undefined && undefined.__read) || function (o, n) {
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
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var cacheStore = Object.create(null);
var InlineSVG = /** @class */ (function (_super) {
    __extends(InlineSVG, _super);
    function InlineSVG(props) {
        var _this = _super.call(this, props) || this;
        Object.defineProperty(_this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(_this, "isActive", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(_this, "isInitialized", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(_this, "handleError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function (error) {
                var onError = _this.props.onError;
                var status = error.message === 'Browser does not support SVG' ? _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.UNSUPPORTED : _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.FAILED;
                /* istanbul ignore else */
                if (_this.isActive) {
                    _this.setState({ status: status }, function () {
                        /* istanbul ignore else */
                        if (typeof onError === 'function') {
                            onError(error);
                        }
                    });
                }
            }
        });
        Object.defineProperty(_this, "handleLoad", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function (content, hasCache) {
                if (hasCache === void 0) { hasCache = false; }
                /* istanbul ignore else */
                if (_this.isActive) {
                    _this.setState({
                        content: content,
                        hasCache: hasCache,
                        status: _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.LOADED,
                    }, _this.getElement);
                }
            }
        });
        Object.defineProperty(_this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, cacheRequests, fetchOptions, src, response, contentType, _b, fileType_1, content, currentSrc, cache, error_1, cache;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this.props, cacheRequests = _a.cacheRequests, fetchOptions = _a.fetchOptions, src = _a.src;
                            if (cacheRequests) {
                                cacheStore[src] = { content: '', status: _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.LOADING };
                            }
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, fetch(src, fetchOptions)];
                        case 2:
                            response = _c.sent();
                            contentType = response.headers.get('content-type');
                            _b = __read((contentType || '').split(/ ?; ?/), 1), fileType_1 = _b[0];
                            if (response.status > 299) {
                                throw new Error('Not found');
                            }
                            if (!['image/svg+xml', 'text/plain'].some(function (d) { return fileType_1.includes(d); })) {
                                throw new Error("Content type isn't valid: ".concat(fileType_1));
                            }
                            return [4 /*yield*/, response.text()];
                        case 3:
                            content = _c.sent();
                            currentSrc = this.props.src;
                            // the current src don't match the previous one, skipping...
                            if (src !== currentSrc) {
                                if (cacheStore[src].status === _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.LOADING) {
                                    delete cacheStore[src];
                                }
                                return [2 /*return*/];
                            }
                            this.handleLoad(content);
                            /* istanbul ignore else */
                            if (cacheRequests) {
                                cache = cacheStore[src];
                                /* istanbul ignore else */
                                if (cache) {
                                    cache.content = content;
                                    cache.status = _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.LOADED;
                                }
                            }
                            return [3 /*break*/, 5];
                        case 4:
                            error_1 = _c.sent();
                            this.handleError(error_1);
                            /* istanbul ignore else */
                            if (cacheRequests) {
                                cache = cacheStore[src];
                                /* istanbul ignore else */
                                if (cache) {
                                    delete cacheStore[src];
                                }
                            }
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            }); }
        });
        _this.state = {
            content: '',
            element: null,
            hasCache: !!props.cacheRequests && !!cacheStore[props.src],
            status: _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.IDLE,
        };
        _this.hash = props.uniqueHash || (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.randomString)(8);
        return _this;
    }
    Object.defineProperty(InlineSVG.prototype, "componentDidMount", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.isActive = true;
            if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)() || this.isInitialized) {
                return;
            }
            var status = this.state.status;
            var src = this.props.src;
            try {
                /* istanbul ignore else */
                if (status === _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.IDLE) {
                    /* istanbul ignore else */
                    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isSupportedEnvironment)()) {
                        throw new Error('Browser does not support SVG');
                    }
                    /* istanbul ignore else */
                    if (!src) {
                        throw new Error('Missing src');
                    }
                    this.load();
                }
            }
            catch (error) {
                this.handleError(error);
            }
            this.isInitialized = true;
        }
    });
    Object.defineProperty(InlineSVG.prototype, "componentDidUpdate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (previousProps, previousState) {
            if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)()) {
                return;
            }
            var _a = this.state, hasCache = _a.hasCache, status = _a.status;
            var _b = this.props, onLoad = _b.onLoad, src = _b.src;
            if (previousState.status !== _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.READY && status === _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.READY) {
                /* istanbul ignore else */
                if (onLoad) {
                    onLoad(src, hasCache);
                }
            }
            if (previousProps.src !== src) {
                if (!src) {
                    this.handleError(new Error('Missing src'));
                    return;
                }
                this.load();
            }
        }
    });
    Object.defineProperty(InlineSVG.prototype, "componentWillUnmount", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.isActive = false;
        }
    });
    Object.defineProperty(InlineSVG.prototype, "getElement", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            try {
                var node = this.getNode();
                var element = (0,react_from_dom__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
                if (!element || !react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)) {
                    throw new Error('Could not convert the src to a React element');
                }
                this.setState({
                    element: element,
                    status: _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.READY,
                });
            }
            catch (error) {
                this.handleError(new Error(error.message));
            }
        }
    });
    Object.defineProperty(InlineSVG.prototype, "getNode", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a = this.props, description = _a.description, title = _a.title;
            try {
                var svgText = this.processSVG();
                var node = (0,react_from_dom__WEBPACK_IMPORTED_MODULE_2__["default"])(svgText, { nodeOnly: true });
                if (!node || !(node instanceof SVGSVGElement)) {
                    throw new Error('Could not convert the src to a DOM Node');
                }
                var svg = this.updateSVGAttributes(node);
                if (description) {
                    var originalDesc = svg.querySelector('desc');
                    if (originalDesc && originalDesc.parentNode) {
                        originalDesc.parentNode.removeChild(originalDesc);
                    }
                    var descElement = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
                    descElement.innerHTML = description;
                    svg.prepend(descElement);
                }
                if (typeof title !== 'undefined') {
                    var originalTitle = svg.querySelector('title');
                    if (originalTitle && originalTitle.parentNode) {
                        originalTitle.parentNode.removeChild(originalTitle);
                    }
                    if (title) {
                        var titleElement = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                        titleElement.innerHTML = title;
                        svg.prepend(titleElement);
                    }
                }
                return svg;
            }
            catch (error) {
                return this.handleError(error);
            }
        }
    });
    Object.defineProperty(InlineSVG.prototype, "load", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _this = this;
            /* istanbul ignore else */
            if (this.isActive) {
                this.setState({
                    content: '',
                    element: null,
                    hasCache: false,
                    status: _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.LOADING,
                }, function () {
                    var _a = _this.props, cacheRequests = _a.cacheRequests, src = _a.src;
                    var cache = cacheRequests && cacheStore[src];
                    if (cache && cache.status === _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.LOADED) {
                        _this.handleLoad(cache.content, true);
                        return;
                    }
                    var dataURI = src.match(/^data:image\/svg[^,]*?(;base64)?,(.*)/u);
                    var inlineSrc;
                    if (dataURI) {
                        inlineSrc = dataURI[1] ? window.atob(dataURI[2]) : decodeURIComponent(dataURI[2]);
                    }
                    else if (src.includes('<svg')) {
                        inlineSrc = src;
                    }
                    if (inlineSrc) {
                        _this.handleLoad(inlineSrc);
                        return;
                    }
                    _this.request();
                });
            }
        }
    });
    Object.defineProperty(InlineSVG.prototype, "processSVG", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var content = this.state.content;
            var preProcessor = this.props.preProcessor;
            if (preProcessor) {
                return preProcessor(content);
            }
            return content;
        }
    });
    Object.defineProperty(InlineSVG.prototype, "updateSVGAttributes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            var _this = this;
            var _a = this.props, _b = _a.baseURL, baseURL = _b === void 0 ? '' : _b, uniquifyIDs = _a.uniquifyIDs;
            var replaceableAttributes = ['id', 'href', 'xlink:href', 'xlink:role', 'xlink:arcrole'];
            var linkAttributes = ['href', 'xlink:href'];
            var isDataValue = function (name, value) {
                return linkAttributes.includes(name) && (value ? !value.includes('#') : false);
            };
            if (!uniquifyIDs) {
                return node;
            }
            __spreadArray([], __read(node.children), false).forEach(function (d) {
                if (d.attributes && d.attributes.length) {
                    var attributes_1 = Object.values(d.attributes).map(function (a) {
                        var attribute = a;
                        var match = a.value.match(/url\((.*?)\)/);
                        if (match && match[1]) {
                            attribute.value = a.value.replace(match[0], "url(".concat(baseURL).concat(match[1], "__").concat(_this.hash, ")"));
                        }
                        return attribute;
                    });
                    replaceableAttributes.forEach(function (r) {
                        var attribute = attributes_1.find(function (a) { return a.name === r; });
                        if (attribute && !isDataValue(r, attribute.value)) {
                            attribute.value = "".concat(attribute.value, "__").concat(_this.hash);
                        }
                    });
                }
                if (d.children.length) {
                    return _this.updateSVGAttributes(d);
                }
                return d;
            });
            return node;
        }
    });
    Object.defineProperty(InlineSVG.prototype, "render", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a = this.state, element = _a.element, status = _a.status;
            var _b = this.props, _c = _b.children, children = _c === void 0 ? null : _c, innerRef = _b.innerRef, _d = _b.loader, loader = _d === void 0 ? null : _d;
            var elementProps = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.omit)(this.props, 'baseURL', 'cacheRequests', 'children', 'description', 'fetchOptions', 'innerRef', 'loader', 'onError', 'onLoad', 'preProcessor', 'src', 'title', 'uniqueHash', 'uniquifyIDs');
            if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)()) {
                return loader;
            }
            if (element) {
                return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element, __assign({ ref: innerRef }, elementProps));
            }
            if ([_helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.UNSUPPORTED, _helpers__WEBPACK_IMPORTED_MODULE_1__.STATUS.FAILED].includes(status)) {
                return children;
            }
            return loader;
        }
    });
    Object.defineProperty(InlineSVG, "defaultProps", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {
            cacheRequests: true,
            uniquifyIDs: false,
        }
    });
    return InlineSVG;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent));
/* harmony default export */ __webpack_exports__["default"] = (InlineSVG);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ (function(module) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerStyleSheet: function() { return /* binding */ ut; },
/* harmony export */   StyleSheetConsumer: function() { return /* binding */ je; },
/* harmony export */   StyleSheetContext: function() { return /* binding */ ke; },
/* harmony export */   StyleSheetManager: function() { return /* binding */ Fe; },
/* harmony export */   ThemeConsumer: function() { return /* binding */ Ue; },
/* harmony export */   ThemeContext: function() { return /* binding */ He; },
/* harmony export */   ThemeProvider: function() { return /* binding */ Xe; },
/* harmony export */   __PRIVATE__: function() { return /* binding */ pt; },
/* harmony export */   createGlobalStyle: function() { return /* binding */ at; },
/* harmony export */   css: function() { return /* binding */ nt; },
/* harmony export */   "default": function() { return /* binding */ st; },
/* harmony export */   isStyledComponent: function() { return /* binding */ ee; },
/* harmony export */   keyframes: function() { return /* binding */ ct; },
/* harmony export */   styled: function() { return /* binding */ st; },
/* harmony export */   useTheme: function() { return /* binding */ Je; },
/* harmony export */   version: function() { return /* binding */ m; },
/* harmony export */   withTheme: function() { return /* binding */ lt; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylis */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stylis */ "./node_modules/styled-components/node_modules/stylis/src/Middleware.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stylis */ "./node_modules/styled-components/node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stylis */ "./node_modules/styled-components/node_modules/stylis/src/Parser.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js");
var f="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",m="6.1.0",y="undefined"!=typeof window&&"HTMLElement"in window,v=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),g={},S=/invalid hook call/i,w=new Set,b=function(t,n){if(true){var o=n?' with the id of "'.concat(n,'"'):"",s="The component ".concat(t).concat(o," has been created dynamically.\n")+"You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",i=console.error;try{var a=!0;console.error=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];S.test(t)?(a=!1,w.delete(s)):i.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],n,!1))},(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),a&&!w.has(s)&&(console.warn(s),w.add(s))}catch(e){S.test(e.message)&&w.delete(s)}finally{console.error=i}}},E=Object.freeze([]),N=Object.freeze({});function P(e,t,n){return void 0===n&&(n=N),e.theme!==n.theme&&e.theme||t||n.theme}var _=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),C=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,I=/(^-|-$)/g;function A(e){return e.replace(C,"-").replace(I,"")}var O=/(a)(d)/gi,D=function(e){return String.fromCharCode(e+(e>25?39:97))};function R(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=D(t%52)+n;return(D(t%52)+n).replace(O,"$1-$2")}var T,k=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},j=function(e){return k(5381,e)};function x(e){return R(j(e)>>>0)}function V(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function F(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var M="function"==typeof Symbol&&Symbol.for,$=M?Symbol.for("react.memo"):60115,z=M?Symbol.for("react.forward_ref"):60112,B={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},L={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},G={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Y=((T={})[z]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},T[$]=G,T);function W(e){return("type"in(t=e)&&t.type.$$typeof)===$?G:"$$typeof"in e?Y[e.$$typeof]:B;var t}var q=Object.defineProperty,H=Object.getOwnPropertyNames,U=Object.getOwnPropertySymbols,J=Object.getOwnPropertyDescriptor,X=Object.getPrototypeOf,Z=Object.prototype;function K(e,t,n){if("string"!=typeof t){if(Z){var o=X(t);o&&o!==Z&&K(e,o,n)}var r=H(t);U&&(r=r.concat(U(t)));for(var s=W(e),i=W(t),a=0;a<r.length;++a){var c=r[a];if(!(c in L||n&&n[c]||i&&c in i||s&&c in s)){var l=J(t,c);try{q(e,c,l)}catch(e){}}}}return e}function Q(e){return"function"==typeof e}function ee(e){return"object"==typeof e&&"styledComponentId"in e}function te(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ne(e,t){if(0===e.length)return"";for(var n=e[0],o=1;o<e.length;o++)n+=t?t+e[o]:e[o];return n}function oe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function re(e,t,n){if(void 0===n&&(n=!1),!n&&!oe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=re(e[o],t[o]);else if(oe(t))for(var o in t)e[o]=re(e[o],t[o]);return e}function se(e,t){Object.defineProperty(e,"toString",{value:t})}var ie= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:0;function ae(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],o=[],r=1,s=e.length;r<s;r+=1)o.push(e[r]);return o.forEach(function(e){n=n.replace(/%[a-z]/,e)}),n}function ce(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return false?0:new Error(ae.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([ie[t]],n,!1)).trim())}var le=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,r=o;e>=r;)if((r<<=1)<0)throw ce(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var s=o;s<r;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),o=n+t;this.groupSizes[e]=0;for(var r=n;r<o;r++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],o=this.indexOfGroup(e),r=o+n,s=o;s<r;s++)t+="".concat(this.tag.getRule(s)).concat("/*!sc*/\n");return t},e}(),ue=new Map,pe=new Map,de=1,he=function(e){if(ue.has(e))return ue.get(e);for(;pe.has(de);)de++;var t=de++;if( true&&((0|t)<0||t>1073741824))throw ce(16,"".concat(t));return ue.set(e,t),pe.set(t,e),t},fe=function(e,t){ue.set(e,t),pe.set(t,e)},me="style[".concat(f,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),ye=new RegExp("^".concat(f,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ve=function(e,t,n){for(var o,r=n.split(","),s=0,i=r.length;s<i;s++)(o=r[s])&&e.registerName(t,o)},ge=function(e,t){for(var n,o=(null!==(n=t.textContent)&&void 0!==n?n:"").split("/*!sc*/\n"),r=[],s=0,i=o.length;s<i;s++){var a=o[s].trim();if(a){var c=a.match(ye);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(fe(u,l),ve(e,u,c[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}};function Se(){return true?__webpack_require__.nc:0}var we=function(e){var t=document.head,n=e||t,o=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(f,"]")));return t[t.length-1]}(n),s=void 0!==r?r.nextSibling:null;o.setAttribute(f,"active"),o.setAttribute("data-styled-version","6.1.0");var i=Se();return i&&o.setAttribute("nonce",i),n.insertBefore(o,s),o},be=function(){function e(e){this.element=we(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,o=t.length;n<o;n++){var r=t[n];if(r.ownerNode===e)return r}throw ce(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ee=function(){function e(e){this.element=we(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Ne=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Pe=y,_e={isServer:!y,useCSSOMInjection:!v},Ce=function(){function e(e,n,o){void 0===e&&(e=N),void 0===n&&(n={});var r=this;this.options=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},_e),e),this.gs=n,this.names=new Map(o),this.server=!!e.isServer,!this.server&&y&&Pe&&(Pe=!1,function(e){for(var t=document.querySelectorAll(me),n=0,o=t.length;n<o;n++){var r=t[n];r&&"active"!==r.getAttribute(f)&&(ge(e,r),r.parentNode&&r.parentNode.removeChild(r))}}(this)),se(this,function(){return function(e){for(var t=e.getTag(),n=t.length,o="",r=function(n){var r=function(e){return pe.get(e)}(n);if(void 0===r)return"continue";var s=e.names.get(r),i=t.getGroup(n);if(void 0===s||0===i.length)return"continue";var a="".concat(f,".g").concat(n,'[id="').concat(r,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),o+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat("/*!sc*/\n")},s=0;s<n;s++)r(s);return o}(r)})}return e.registerId=function(e){return he(e)},e.prototype.reconstructWithOptions=function(n,o){return void 0===o&&(o=!0),new e((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},this.options),n),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Ne(n):t?new be(n):new Ee(n)}(this.options),new le(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(he(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(he(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(he(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ie=/&/g,Ae=/^\s*\/\/.*$/gm;function Oe(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Oe(e.children,t)),e})}function De(e){var t,n,o,r=void 0===e?N:e,s=r.options,i=void 0===s?N:s,a=r.plugins,c=void 0===a?E:a,l=function(e,o,r){return r===n||r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},u=c.slice();u.push(function(e){e.type===stylis__WEBPACK_IMPORTED_MODULE_5__.RULESET&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Ie,n).replace(o,l))}),i.prefix&&u.push(stylis__WEBPACK_IMPORTED_MODULE_6__.prefixer),u.push(stylis__WEBPACK_IMPORTED_MODULE_7__.stringify);var p=function(e,r,s,a){void 0===r&&(r=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=r,o=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(Ae,""),l=stylis__WEBPACK_IMPORTED_MODULE_8__.compile(s||r?"".concat(s," ").concat(r," { ").concat(c," }"):c);i.namespace&&(l=Oe(l,i.namespace));var p=[];return stylis__WEBPACK_IMPORTED_MODULE_7__.serialize(l,stylis__WEBPACK_IMPORTED_MODULE_6__.middleware(u.concat(stylis__WEBPACK_IMPORTED_MODULE_6__.rulesheet(function(e){return p.push(e)})))),p};return p.hash=c.length?c.reduce(function(e,t){return t.name||ce(15),k(e,t.name)},5381).toString():"",p}var Re=new Ce,Te=De(),ke=react__WEBPACK_IMPORTED_MODULE_1___default().createContext({shouldForwardProp:void 0,styleSheet:Re,stylis:Te}),je=ke.Consumer,xe=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(void 0);function Ve(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ke)}function Fe(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],r=t[1],c=Ve().styleSheet,l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,c]),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return De({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var d=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:l,stylis:u}},[e.shouldForwardProp,l,u]);return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ke.Provider,{value:d},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(xe.Provider,{value:u},e.children))}var Me=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Te);var o=n.name+t.hash;e.hasNameForId(n.id,o)||e.insertRules(n.id,o,t(n.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,se(this,function(){throw ce(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Te),this.name+e.hash},e}(),$e=function(e){return e>="A"&&e<="Z"};function ze(e){for(var t="",n=0;n<e.length;n++){var o=e[n];if(1===n&&"-"===o&&"-"===e[0])return e;$e(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var Be=function(e){return null==e||!1===e||""===e},Le=function(t){var n,o,r=[];for(var s in t){var i=t[s];t.hasOwnProperty(s)&&!Be(i)&&(Array.isArray(i)&&i.isCss||Q(i)?r.push("".concat(ze(s),":"),i,";"):oe(i)?r.push.apply(r,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)(["".concat(s," {")],Le(i),!1),["}"],!1)):r.push("".concat(ze(s),": ").concat((n=s,null==(o=i)||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||n in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"]||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function Ge(e,t,n,o){if(Be(e))return[];if(ee(e))return[".".concat(e.styledComponentId)];if(Q(e)){if(!Q(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var r=e(t);return false||"object"!=typeof r||Array.isArray(r)||r instanceof Me||oe(r)||null===r||console.error("".concat(V(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),Ge(r,t,n,o)}var s;return e instanceof Me?n?(e.inject(n,o),[e.getName(o)]):[e]:oe(e)?Le(e):Array.isArray(e)?Array.prototype.concat.apply(E,e.map(function(e){return Ge(e,t,n,o)})):[e.toString()]}function Ye(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Q(n)&&!ee(n))return!1}return!0}var We=j("6.1.0"),qe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=k(We,t),this.baseStyle=n,Ce.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=te(o,this.staticRulesId);else{var r=ne(Ge(this.rules,e,t,n)),s=R(k(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=n(r,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i)}o=te(o,s),this.staticRulesId=s}else{for(var a=k(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u, true&&(a=k(a,u));else if(u){var p=ne(Ge(u,e,t,n));a=k(a,p+l),c+=p}}if(c){var d=R(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),o=te(o,d)}}return o},e}(),He=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(void 0),Ue=He.Consumer;function Je(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(He);if(!e)throw ce(18);return e}function Xe(e){var n=react__WEBPACK_IMPORTED_MODULE_1___default().useContext(He),r=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return function(e,n){if(!e)throw ce(14);if(Q(e)){var o=e(n);if( true&&(null===o||Array.isArray(o)||"object"!=typeof o))throw ce(7);return o}if(Array.isArray(e)||"object"!=typeof e)throw ce(8);return n?(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n),e):e}(e.theme,n)},[e.theme,n]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(He.Provider,{value:r},e.children):null}var Ze={},Ke=new Set;function Qe(e,r,s){var i=ee(e),a=e,c=!F(e),p=r.attrs,d=void 0===p?E:p,h=r.componentId,f=void 0===h?function(e,t){var n="string"!=typeof e?"sc":A(e);Ze[n]=(Ze[n]||0)+1;var o="".concat(n,"-").concat(x("6.1.0"+n+Ze[n]));return t?"".concat(t,"-").concat(o):o}(r.displayName,r.parentComponentId):h,m=r.displayName,y=void 0===m?function(e){return F(e)?"styled.".concat(e):"Styled(".concat(V(e),")")}(e):m,v=r.displayName&&r.componentId?"".concat(A(r.displayName),"-").concat(r.componentId):r.componentId||f,g=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,S=r.shouldForwardProp;if(i&&a.shouldForwardProp){var w=a.shouldForwardProp;if(r.shouldForwardProp){var C=r.shouldForwardProp;S=function(e,t){return w(e,t)&&C(e,t)}}else S=w}var I=new qe(s,v,i?a.componentStyle:void 0);function O(e,r){return function(e,r,s){var i=e.attrs,a=e.componentStyle,c=e.defaultProps,p=e.foldedComponentIds,d=e.styledComponentId,h=e.target,f=react__WEBPACK_IMPORTED_MODULE_1___default().useContext(He),m=Ve(),y=e.shouldForwardProp||m.shouldForwardProp; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(d);var v=function(e,n,o){for(var r,s=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n),{className:void 0,theme:o}),i=0;i<e.length;i+=1){var a=Q(r=e[i])?r(s):r;for(var c in a)s[c]="className"===c?te(s[c],a[c]):"style"===c?(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},s[c]),a[c]):a[c]}return n.className&&(s.className=te(s.className,n.className)),s}(i,r,P(r,f,c)||N),g=v.as||h,S={};for(var w in v)void 0===v[w]||"$"===w[0]||"as"===w||"theme"===w||("forwardedAs"===w?S.as=v.forwardedAs:y&&!y(w,g)||(S[w]=v[w],y||"development"!=="development"||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__["default"])(w)||Ke.has(w)||!_.has(g)||(Ke.add(w),console.warn('styled-components: it looks like an unknown prop "'.concat(w,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var b=function(e,t){var n=Ve(),o=e.generateAndInjectStyles(t,n.styleSheet,n.stylis);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(o),o}(a,v); true&&e.warnTooManyClasses&&e.warnTooManyClasses(b);var E=te(p,d);return b&&(E+=" "+b),v.className&&(E+=" "+v.className),S[F(g)&&!_.has(g)?"class":"className"]=E,S.ref=s,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(g,S)}(D,e,r)} true&&(O.displayName=y);var D=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(O);return D.attrs=g,D.componentStyle=I,D.shouldForwardProp=S, true&&(D.displayName=y),D.foldedComponentIds=i?te(a.foldedComponentIds,a.styledComponentId):"",D.styledComponentId=v,D.target=i?a.target:e,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var o=0,r=t;o<r.length;o++)re(e,r[o],!0);return e}({},a.defaultProps,e):e}}), true&&(b(y,v),D.warnTooManyClasses=function(e,t){var n={},o=!1;return function(r){if(!o&&(n[r]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'.concat(t,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(e).concat(s,".\n")+"Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),o=!0,n={}}}}(y,v)),se(D,function(){return".".concat(D.styledComponentId)}),c&&K(D,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function et(e,t){for(var n=[e[0]],o=0,r=t.length;o<r;o+=1)n.push(t[o],e[o+1]);return n}var tt=function(e){return Object.assign(e,{isCss:!0})};function nt(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(Q(t)||oe(t)){var r=t;return tt(Ge(et(E,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([r],n,!0))))}var s=t;return 0===n.length&&1===s.length&&"string"==typeof s[0]?Ge(s):tt(Ge(et(s,n)))}function ot(n,o,r){if(void 0===r&&(r=N),!o)throw ce(1,o);var s=function(t){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return n(o,r,nt.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],s,!1)))};return s.attrs=function(e){return ot(n,o,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},r),{attrs:Array.prototype.concat(r.attrs,e).filter(Boolean)}))},s.withConfig=function(e){return ot(n,o,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},r),e))},s}var rt=function(e){return ot(Qe,e)},st=rt;_.forEach(function(e){st[e]=rt(e)});var it=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ye(e),Ce.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,o){var r=o(ne(Ge(this.rules,t,n,o)),""),s=this.componentId+e;n.insertRules(s,s,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,o){e>2&&Ce.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,o)},e}();function at(n){for(var r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];var i=nt.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([n],r,!1)),a="sc-global-".concat(x(JSON.stringify(i))),c=new it(i,a); true&&b(a);var l=function(e){var t=Ve(),n=react__WEBPACK_IMPORTED_MODULE_1___default().useContext(He),r=react__WEBPACK_IMPORTED_MODULE_1___default().useRef(t.styleSheet.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(e.children)&&console.warn("The global style component ".concat(a," was given child JSX. createGlobalStyle does not render children.")), true&&i.some(function(e){return"string"==typeof e&&-1!==e.indexOf("@import")})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.styleSheet.server&&u(r,e,t.styleSheet,n,t.stylis),react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect(function(){if(!t.styleSheet.server)return u(r,e,t.styleSheet,n,t.stylis),function(){return c.removeStyles(r,t.styleSheet)}},[r,e,t.styleSheet,n,t.stylis]),null};function u(e,n,o,r,s){if(c.isStatic)c.renderStyles(e,g,o,s);else{var i=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n),{theme:P(n,r,l.defaultProps)});c.renderStyles(e,i,o,s)}}return react__WEBPACK_IMPORTED_MODULE_1___default().memo(l)}function ct(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o]; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");var r=ne(nt.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],n,!1))),s=x(r);return new Me(s,r)}function lt(e){var n=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function(n,r){var s=P(n,react__WEBPACK_IMPORTED_MODULE_1___default().useContext(He),e.defaultProps);return true&&void 0===s&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'.concat(V(e),'"')),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(e,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n,{theme:s,ref:r}))});return true&&(n.displayName="WithTheme(".concat(V(e),")")),K(n,e)}var ut=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=Se(),o=ne([n&&'nonce="'.concat(n,'"'),"".concat(f,'="true"'),"".concat("data-styled-version",'="').concat("6.1.0",'"')].filter(Boolean)," ");return"<style ".concat(o,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw ce(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw ce(2);var r=((n={})[f]="",n["data-styled-version"]="6.1.0",n.dangerouslySetInnerHTML={__html:e.instance.toString()},n),s=Se();return s&&(r.nonce=s),[react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style",(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Ce({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw ce(2);return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Fe,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw ce(3)},e}(),pt={StyleSheet:Ce,mainSheet:Re}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");var dt="__sc-".concat(f,"__"); true&&"undefined"!=typeof window&&(window[dt]||(window[dt]=0),1===window[dt]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window[dt]+=1);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@helpgent/modules":
/*!***************************************!*\
  !*** external ["helpgent","modules"] ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = window["helpgent"]["modules"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Enum.js":
/*!************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Enum.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHARSET: function() { return /* binding */ CHARSET; },
/* harmony export */   COMMENT: function() { return /* binding */ COMMENT; },
/* harmony export */   COUNTER_STYLE: function() { return /* binding */ COUNTER_STYLE; },
/* harmony export */   DECLARATION: function() { return /* binding */ DECLARATION; },
/* harmony export */   DOCUMENT: function() { return /* binding */ DOCUMENT; },
/* harmony export */   FONT_FACE: function() { return /* binding */ FONT_FACE; },
/* harmony export */   FONT_FEATURE_VALUES: function() { return /* binding */ FONT_FEATURE_VALUES; },
/* harmony export */   IMPORT: function() { return /* binding */ IMPORT; },
/* harmony export */   KEYFRAMES: function() { return /* binding */ KEYFRAMES; },
/* harmony export */   LAYER: function() { return /* binding */ LAYER; },
/* harmony export */   MEDIA: function() { return /* binding */ MEDIA; },
/* harmony export */   MOZ: function() { return /* binding */ MOZ; },
/* harmony export */   MS: function() { return /* binding */ MS; },
/* harmony export */   NAMESPACE: function() { return /* binding */ NAMESPACE; },
/* harmony export */   PAGE: function() { return /* binding */ PAGE; },
/* harmony export */   RULESET: function() { return /* binding */ RULESET; },
/* harmony export */   SUPPORTS: function() { return /* binding */ SUPPORTS; },
/* harmony export */   VIEWPORT: function() { return /* binding */ VIEWPORT; },
/* harmony export */   WEBKIT: function() { return /* binding */ WEBKIT; }
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'
var LAYER = '@layer'


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Middleware.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Middleware.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   middleware: function() { return /* binding */ middleware; },
/* harmony export */   namespace: function() { return /* binding */ namespace; },
/* harmony export */   prefixer: function() { return /* binding */ prefixer; },
/* harmony export */   rulesheet: function() { return /* binding */ rulesheet; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/styled-components/node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "./node_modules/styled-components/node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prefixer.js */ "./node_modules/styled-components/node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix)(element.value, element.length, children)
					return
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
					return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {value: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT)})], callback)
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
					if (element.length)
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)(children = element.props, function (value) {
							switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, callback = /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [value]}))
									;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(element, {props: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.filter)(children, callback)})
									break
								// :placeholder
								case '::placeholder':
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'input-$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'input-$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [value]}))
									;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(element, {props: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.filter)(children, callback)})
									break
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
			element.props = element.props.map(function (value) {
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize)(value), function (value, index, children) {
					switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 0)) {
						// \f
						case 12:
							return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) > 1 ? '' : value
								case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Parser.js":
/*!**************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Parser.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: function() { return /* binding */ comment; },
/* harmony export */   compile: function() { return /* binding */ compile; },
/* harmony export */   declaration: function() { return /* binding */ declaration; },
/* harmony export */   parse: function() { return /* binding */ parse; },
/* harmony export */   ruleset: function() { return /* binding */ ruleset; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/styled-components/node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent, declarations), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset: if (ampersand == -1) characters = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, /\f/g, '')
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length, siblings)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment (value, root, parent, siblings) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0, siblings)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration (value, root, parent, length, siblings) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length, siblings)
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Prefixer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Prefixer.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefix: function() { return /* binding */ prefix; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash)(value, length)) {
		// color-adjust
		case 5103:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// tab-size
		case 4789:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// writing-mode
		case 5936:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// order
		case 6165:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') + (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/) ? _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2') + value
		// cursor
		case 6187:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// justify-self
		case 4200:
			if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/)) return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-column-align' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-end/) })) {
				return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value + (children = children[length].value), 'span') ? value : (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-span:' + (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(children, 'span') ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) : +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) - +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /\d+/)) + ';')
			}
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-start/) })) ? value : _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 1 - length > 6)
				switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, 'stretch') ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + ':' + b + f) + (c ? (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 6) === 121)
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Serializer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Serializer.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: function() { return /* binding */ serialize; },
/* harmony export */   stringify: function() { return /* binding */ stringify; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''

	for (var i = 0; i < children.length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.LAYER: if (element.children.length) break
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.RULESET: if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(element.value = element.props.join(','))) return ''
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Tokenizer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Tokenizer.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alloc: function() { return /* binding */ alloc; },
/* harmony export */   caret: function() { return /* binding */ caret; },
/* harmony export */   char: function() { return /* binding */ char; },
/* harmony export */   character: function() { return /* binding */ character; },
/* harmony export */   characters: function() { return /* binding */ characters; },
/* harmony export */   column: function() { return /* binding */ column; },
/* harmony export */   commenter: function() { return /* binding */ commenter; },
/* harmony export */   copy: function() { return /* binding */ copy; },
/* harmony export */   dealloc: function() { return /* binding */ dealloc; },
/* harmony export */   delimit: function() { return /* binding */ delimit; },
/* harmony export */   delimiter: function() { return /* binding */ delimiter; },
/* harmony export */   escaping: function() { return /* binding */ escaping; },
/* harmony export */   identifier: function() { return /* binding */ identifier; },
/* harmony export */   length: function() { return /* binding */ length; },
/* harmony export */   lift: function() { return /* binding */ lift; },
/* harmony export */   line: function() { return /* binding */ line; },
/* harmony export */   next: function() { return /* binding */ next; },
/* harmony export */   node: function() { return /* binding */ node; },
/* harmony export */   peek: function() { return /* binding */ peek; },
/* harmony export */   position: function() { return /* binding */ position; },
/* harmony export */   prev: function() { return /* binding */ prev; },
/* harmony export */   slice: function() { return /* binding */ slice; },
/* harmony export */   token: function() { return /* binding */ token; },
/* harmony export */   tokenize: function() { return /* binding */ tokenize; },
/* harmony export */   tokenizer: function() { return /* binding */ tokenizer; },
/* harmony export */   whitespace: function() { return /* binding */ whitespace; }
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length, siblings) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: '', siblings: siblings}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(node('', null, null, '', null, null, 0, root.siblings), root, {length: -root.length}, props)
}

/**
 * @param {object} root
 */
function lift (root) {
	while (root.root)
		root = copy(root.root, {children: [root]})

	;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(root, root.siblings)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Utility.js":
/*!***************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Utility.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: function() { return /* binding */ abs; },
/* harmony export */   append: function() { return /* binding */ append; },
/* harmony export */   assign: function() { return /* binding */ assign; },
/* harmony export */   charat: function() { return /* binding */ charat; },
/* harmony export */   combine: function() { return /* binding */ combine; },
/* harmony export */   filter: function() { return /* binding */ filter; },
/* harmony export */   from: function() { return /* binding */ from; },
/* harmony export */   hash: function() { return /* binding */ hash; },
/* harmony export */   indexof: function() { return /* binding */ indexof; },
/* harmony export */   match: function() { return /* binding */ match; },
/* harmony export */   replace: function() { return /* binding */ replace; },
/* harmony export */   sizeof: function() { return /* binding */ sizeof; },
/* harmony export */   strlen: function() { return /* binding */ strlen; },
/* harmony export */   substr: function() { return /* binding */ substr; },
/* harmony export */   trim: function() { return /* binding */ trim; }
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter (array, pattern) {
	return array.filter(function (value) { return !match(value, pattern) })
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: function() { return /* binding */ __addDisposableResource; },
/* harmony export */   __assign: function() { return /* binding */ __assign; },
/* harmony export */   __asyncDelegator: function() { return /* binding */ __asyncDelegator; },
/* harmony export */   __asyncGenerator: function() { return /* binding */ __asyncGenerator; },
/* harmony export */   __asyncValues: function() { return /* binding */ __asyncValues; },
/* harmony export */   __await: function() { return /* binding */ __await; },
/* harmony export */   __awaiter: function() { return /* binding */ __awaiter; },
/* harmony export */   __classPrivateFieldGet: function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   __classPrivateFieldIn: function() { return /* binding */ __classPrivateFieldIn; },
/* harmony export */   __classPrivateFieldSet: function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   __createBinding: function() { return /* binding */ __createBinding; },
/* harmony export */   __decorate: function() { return /* binding */ __decorate; },
/* harmony export */   __disposeResources: function() { return /* binding */ __disposeResources; },
/* harmony export */   __esDecorate: function() { return /* binding */ __esDecorate; },
/* harmony export */   __exportStar: function() { return /* binding */ __exportStar; },
/* harmony export */   __extends: function() { return /* binding */ __extends; },
/* harmony export */   __generator: function() { return /* binding */ __generator; },
/* harmony export */   __importDefault: function() { return /* binding */ __importDefault; },
/* harmony export */   __importStar: function() { return /* binding */ __importStar; },
/* harmony export */   __makeTemplateObject: function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   __metadata: function() { return /* binding */ __metadata; },
/* harmony export */   __param: function() { return /* binding */ __param; },
/* harmony export */   __propKey: function() { return /* binding */ __propKey; },
/* harmony export */   __read: function() { return /* binding */ __read; },
/* harmony export */   __rest: function() { return /* binding */ __rest; },
/* harmony export */   __runInitializers: function() { return /* binding */ __runInitializers; },
/* harmony export */   __setFunctionName: function() { return /* binding */ __setFunctionName; },
/* harmony export */   __spread: function() { return /* binding */ __spread; },
/* harmony export */   __spreadArray: function() { return /* binding */ __spreadArray; },
/* harmony export */   __spreadArrays: function() { return /* binding */ __spreadArrays; },
/* harmony export */   __values: function() { return /* binding */ __values; }
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
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

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
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

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
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
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
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

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***************************************************!*\
  !*** ./src/js/frontend/pages/ChatBubble/index.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ChatFormClose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ChatFormClose */ "./src/js/frontend/pages/ChatBubble/components/ChatFormClose.js");
/* harmony import */ var _components_ChatFormBack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ChatFormBack */ "./src/js/frontend/pages/ChatBubble/components/ChatFormBack.js");
/* harmony import */ var _components_ContentLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/ContentLoading */ "./src/js/components/ContentLoading.js");
/* harmony import */ var _helpgent_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @helpgent/modules */ "@helpgent/modules");
/* harmony import */ var _helpgent_modules__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpgent_modules__WEBPACK_IMPORTED_MODULE_7__);








_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {
  const containers = document.querySelectorAll('.helpgent-chat-bubble-item');
  if (containers.length === 0) {
    return;
  }
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('helpgent_chat_form_close', 'helpgent', function (items) {
    // replace unique_key
    items['helpgent_chat_form_close'] = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ChatFormClose__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ...items.props
    });
    return items;
  });
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('helpgent_chat_form_back', 'helpgent', function (items) {
    // replace unique_key
    items['helpgent_chat_form_back'] = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ChatFormBack__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ...items.props
    });
    return items;
  });
  containers.forEach(container => {
    const singleForm = container.dataset.form_data;
    const isLoggedIn = container.dataset.is_user_logged_in;
    if (_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createRoot) {
      const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createRoot)(container);
      root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
        fallback: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ContentLoading__WEBPACK_IMPORTED_MODULE_6__["default"], null)
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_helpgent_modules__WEBPACK_IMPORTED_MODULE_7__.ChatBubbleModule, {
        data: singleForm,
        isLoggedIn: isLoggedIn,
        isFloatingForm: true
      })));
    } else {
      render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_helpgent_modules__WEBPACK_IMPORTED_MODULE_7__.ChatBubbleModule, {
        data: singleForm,
        isLoggedIn: isLoggedIn,
        isFloatingForm: true
      }), container);
    }
  });
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map