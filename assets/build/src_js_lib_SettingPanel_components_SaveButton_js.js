"use strict";
(self["webpackChunktemplate_market"] = self["webpackChunktemplate_market"] || []).push([["src_js_lib_SettingPanel_components_SaveButton_js"],{

/***/ "./src/js/lib/SettingPanel/components/SaveButton.js":
/*!**********************************************************!*\
  !*** ./src/js/lib/SettingPanel/components/SaveButton.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SaveButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SaveButton({
  buttonRef,
  isSaving,
  message
}) {
  const statusMessageClass = 'helpgent-settings-panel-save-status';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-save-action"
  }, message && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: success ? `${statusMessageClass} --has-success` : `${statusMessageClass} --has-error`
  }, message), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    ref: buttonRef,
    className: "helpgent-btn helpgent-btn-primary"
  }, isSaving ? 'Saving' : 'Save Settings'));
}

/***/ })

}]);
//# sourceMappingURL=src_js_lib_SettingPanel_components_SaveButton_js.js.map