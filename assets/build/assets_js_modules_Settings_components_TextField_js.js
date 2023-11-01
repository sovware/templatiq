"use strict";
(self["webpackChunktemplate_market"] = self["webpackChunktemplate_market"] || []).push([["assets_js_modules_Settings_components_TextField_js"],{

/***/ "./assets/js/modules/Settings/components/TextField.js":
/*!************************************************************!*\
  !*** ./assets/js/modules/Settings/components/TextField.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TextField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TextField(props) {
  const {
    label,
    inputKey,
    form,
    rules,
    ErrorMessage
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-form-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-form-row-left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "helpgent-page-select",
    className: "helpgent-form__label"
  }, label)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-form-row-right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    ...form.register(inputKey)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorMessage, {
    inputKey: inputKey,
    form: form,
    rules: rules
  })));
}

/***/ })

}]);
//# sourceMappingURL=assets_js_modules_Settings_components_TextField_js.js.map