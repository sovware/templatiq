"use strict";
(self["webpackChunktemplate_market"] = self["webpackChunktemplate_market"] || []).push([["assets_js_lib_SettingPanel_components_FieldSection_js"],{

/***/ "./assets/js/lib/SettingPanel/components/ErrorMessage.js":
/*!***************************************************************!*\
  !*** ./assets/js/lib/SettingPanel/components/ErrorMessage.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ErrorMessage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utility */ "./assets/js/lib/SettingPanel/helpers/utility.js");


function ErrorMessage({
  inputKey,
  form,
  rules
}) {
  const errorMessage = (0,_helpers_utility__WEBPACK_IMPORTED_MODULE_1__.getErrorMessage)(inputKey, form, rules);
  if (!errorMessage) {
    return '';
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-form-input-error-message"
  }, errorMessage);
}

/***/ }),

/***/ "./assets/js/lib/SettingPanel/components/FieldGroups.js":
/*!**************************************************************!*\
  !*** ./assets/js/lib/SettingPanel/components/FieldGroups.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FieldGroups; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fields */ "./assets/js/lib/SettingPanel/components/Fields.js");


function FieldGroups({
  fieldGroups,
  form,
  save
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, fieldGroups.map((fieldGroup, index) => {
    if (!fieldGroup.fields) {
      return '';
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "helpgent-settings-panel-field-group",
      key: index
    }, fieldGroup.label && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "helpgent-settings-panel-field-group-header"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, fieldGroup.label)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "helpgent-settings-panel-field-group-contents"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields__WEBPACK_IMPORTED_MODULE_1__["default"], {
      fields: fieldGroup.fields,
      form: form,
      save: save
    })));
  }));
}

/***/ }),

/***/ "./assets/js/lib/SettingPanel/components/FieldSection.js":
/*!***************************************************************!*\
  !*** ./assets/js/lib/SettingPanel/components/FieldSection.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FieldSection; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FieldGroups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldGroups */ "./assets/js/lib/SettingPanel/components/FieldGroups.js");
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fields */ "./assets/js/lib/SettingPanel/components/Fields.js");



function FieldSection({
  menu,
  form,
  save,
  onSubmit
}) {
  if (!(Array.isArray(menu.fields) || Array.isArray(menu.fieldGroups))) {
    return '';
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-field-section"
  }, menu.fields && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-field-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-field-group-contents"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fields: menu.fields,
    form: form,
    save: save,
    onSubmit: onSubmit
  }))), menu.fieldGroups && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FieldGroups__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fieldGroups: menu.fieldGroups,
    form: form,
    save: save
  }));
}

/***/ }),

/***/ "./assets/js/lib/SettingPanel/components/Fields.js":
/*!*********************************************************!*\
  !*** ./assets/js/lib/SettingPanel/components/Fields.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Fields; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/SettingsContext */ "./assets/js/lib/SettingPanel/context/SettingsContext.js");
/* harmony import */ var _helpers_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/utility */ "./assets/js/lib/SettingPanel/helpers/utility.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage */ "./assets/js/lib/SettingPanel/components/ErrorMessage.js");




function Fields({
  fields,
  form,
  save,
  onSubmit
}) {
  const {
    settingsState,
    setSettingsState
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__.useSettingsState)();
  function getInputKey(fieldKey) {
    return `${settingsState.prefix}${fieldKey}`;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, fields.map((fieldKey, index) => {
    if (!settingsState.fields.hasOwnProperty(fieldKey)) {
      return '';
    }
    if (!settingsState.fieldComponents.hasOwnProperty(settingsState.fields[fieldKey].type)) {
      return '';
    }
    const Field = settingsState.fieldComponents[settingsState.fields[fieldKey].type];
    const fieldData = settingsState.fields[fieldKey];
    const rules = fieldData.rules && typeof fieldData.rules === 'object' && !Array.isArray(fieldData.rules) ? fieldData.rules : {};
    const inputKey = `${settingsState.prefix}${fieldKey}`;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      id: `helpgent-settings-panel-${fieldKey}-field-item`,
      className: `helpgent-settings-panel-field-item helpgent-settings-panel-${fieldKey}-field-item`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Field, {
      ...settingsState.fields[fieldKey],
      prefix: settingsState.prefix,
      getInputKey: getInputKey,
      fieldKey: fieldKey,
      inputKey: inputKey,
      settingsState: settingsState,
      setSettingsState: setSettingsState,
      form: form,
      rules: rules,
      save: save,
      onSubmit: onSubmit,
      getErrorMessage: _helpers_utility__WEBPACK_IMPORTED_MODULE_2__.getErrorMessage,
      ErrorMessage: _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"]
    }));
  }));
}

/***/ })

}]);
//# sourceMappingURL=assets_js_lib_SettingPanel_components_FieldSection_js.js.map