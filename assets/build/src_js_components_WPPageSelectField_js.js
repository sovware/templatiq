"use strict";
(self["webpackChunktemplate_market"] = self["webpackChunktemplate_market"] || []).push([["src_js_components_WPPageSelectField_js"],{

/***/ "./src/js/components/AsyncSelectField.js":
/*!***********************************************!*\
  !*** ./src/js/components/AsyncSelectField.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AsyncSelectField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select-async.esm.js");
/* harmony import */ var _CheckboxOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckboxOption */ "./src/js/components/CheckboxOption.js");





function AsyncSelectField(props) {
  const {
    name,
    onChange: onChangeValue,
    control,
    rules
  } = props;
  const debounceTimer = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const defaultOptions = {
    className: 'helpgent-select',
    classNamePrefix: 'helpgent-select',
    isMulti: false,
    isClearable: false,
    closeMenuOnSelect: true,
    hideSelectedOptions: false,
    allowSelectAll: true,
    loadPreSelectedOptions: null,
    loadOptions: () => {},
    defaultOptions: {},
    components: {
      Option: _CheckboxOption__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    outputAsArray: true
  };
  let options = {
    ...defaultOptions,
    ...props
  };
  options = sanitizeOptions(options, defaultOptions);
  function sanitizeOptions(options, defaultOptions) {
    return Object.keys(options).reduce((updatedOptions, optionKey) => {
      if (!defaultOptions.hasOwnProperty(optionKey)) {
        updatedOptions[optionKey] = options[optionKey];
        return updatedOptions;
      }
      if (typeof defaultOptions[optionKey] === 'boolean' && typeof options[optionKey] !== 'boolean') {
        updatedOptions[optionKey] = defaultOptions[optionKey];
        return updatedOptions;
      }
      updatedOptions[optionKey] = options[optionKey];
      return updatedOptions;
    }, {});
  }
  if (options.isMulti) {
    options.closeMenuOnSelect = false;
  }
  async function loadOptions(data) {
    if (typeof options.loadOptions !== 'function') {
      return [];
    }
    try {
      const response = await debounce(options.loadOptions, data, 400);
      return response;
    } catch (error) {
      return [];
    }
  }
  async function debounce(callback, data, timer) {
    timer = timer ? timer : 300;
    return new Promise((resolve, reject) => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      debounceTimer.current = setTimeout(async () => {
        try {
          const response = await callback(data);
          resolve(response);
        } catch (error) {
          reject(error);
        }
      }, timer);
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller, {
    control: control,
    name: name,
    rules: rules ? rules : {},
    render: ({
      field: {
        onChange,
        value
      }
    }) => {
      const [key, setKey] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
      const [defaultValue, setDefaultValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
      const [preSelectedOptions, setPreSelectedOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
      const [defaultOptions, setDefaultOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        loadPreSelectedOptions();
      }, [value]);
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const latestOptions = mergeOptions(preSelectedOptions, options.defaultOptions);
        setDefaultOptions(latestOptions);
      }, [options.defaultOptions]);
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        updateDefaultValue(defaultOptions);
        updateKey();
      }, [defaultOptions]);
      async function loadPreSelectedOptions() {
        if (typeof options.loadPreSelectedOptions !== 'function') {
          return;
        }
        const currentValue = parseValue(value);
        if (!currentValue) {
          return;
        }
        if (defaultOptions.length) {
          const selectedOption = getOptionByVaue(currentValue, defaultOptions);
          if (selectedOption) {
            return;
          }
        }
        const ids = !Array.isArray(currentValue) ? [currentValue] : currentValue;
        if (!ids.length) {
          return;
        }
        const response = await options.loadPreSelectedOptions(ids);
        if (!Array.isArray(response)) {
          return;
        }
        setPreSelectedOptions(response);
        setDefaultOptions(currentValue => mergeOptions(response, currentValue));
      }
      function updateDefaultValue(defaultOptions) {
        const currentValue = parseValue(value);
        const defaultValue = getOptionByVaue(currentValue, defaultOptions);
        setDefaultValue(defaultValue);
      }
      function getOptionByVaue(value, optionList) {
        const selectedOptions = optionList.filter(item => {
          if (Array.isArray(value) && value.includes(item.value)) {
            return true;
          }
          return `${item.value}` === `${value}`;
        });
        if (!selectedOptions.length) {
          return null;
        }
        return !options.isMulti ? selectedOptions[0] : selectedOptions;
      }
      function parseValue(value) {
        value = typeof value === 'string' || typeof value === 'number' ? `${value}`.split(',') : value;
        value = Array.isArray(value) ? value : [];
        if (!options.isMulti) {
          value = value.length ? value[0] : '';
        }
        return value;
      }
      function mergeOptions(optionsA, optionsB) {
        if (!Array.isArray(optionsA) && !Array.isArray(optionsB)) {
          return [];
        }
        if (!optionsA.length) {
          return optionsB;
        }
        const optionsBValues = optionsB.map(item => `${item.value}`);
        optionsA = optionsA.filter(item => !optionsBValues.includes(`${item.value}`));
        if (!optionsA.length) {
          return optionsB;
        }
        return [...optionsA, ...optionsB];
      }
      function updateKey() {
        setKey(currentValue => {
          const newKey = currentValue + 1;
          return newKey;
        });
      }
      function syncSelectedOption(selectedOption) {
        const maybeAddNewOption = option => {
          setDefaultOptions(currentValue => {
            const hasSelectedOption = getOptionByVaue(option.value, currentValue);
            if (hasSelectedOption) {
              return currentValue;
            }
            return [option, ...currentValue];
          });
        };
        if (Array.isArray(selectedOption)) {
          selectedOption.forEach(option => {
            maybeAddNewOption(option);
          });
          return;
        }
        maybeAddNewOption(selectedOption);
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select_async__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: key,
        cacheOptions: true,
        className: options.className,
        classNamePrefix: options.classNamePrefix,
        isMulti: options.isMulti,
        isClearable: options.isClearable,
        closeMenuOnSelect: options.closeMenuOnSelect,
        hideSelectedOptions: options.hideSelectedOptions,
        allowSelectAll: options.allowSelectAll,
        loadOptions: loadOptions,
        defaultOptions: defaultOptions,
        defaultValue: defaultValue,
        components: options.components,
        onChange: selectedValue => {
          let newValue = selectedValue;
          if (options.isMulti) {
            newValue = selectedValue.map(item => item.value);
            newValue = options.outputAsArray ? newValue : newValue.join(',');
          } else {
            newValue = selectedValue.value;
          }
          onChange(newValue);
          if (typeof onChangeValue === 'function') {
            onChangeValue(newValue);
          }
          syncSelectedOption(selectedValue);
        }
      });
    }
  });
}

/***/ }),

/***/ "./src/js/components/Checkbox.js":
/*!***************************************!*\
  !*** ./src/js/components/Checkbox.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const Checkbox = ({
  id,
  name,
  label,
  value,
  checked,
  onChange,
  disabled,
  currentCheckboxId,
  loader
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-checkbox"
  }, currentCheckboxId === id && loader ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "helpgent-circle-loader"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: id,
    name: name,
    type: "checkbox",
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled ? 'disabled' : ''
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label));
};

// Specifies the default values for props:
Checkbox.defaultProps = {
  id: '',
  name: '',
  label: '',
  value: '',
  checked: false,
  disabled: false,
  currentCheckboxId: '',
  loader: false
};

// Specifies the prop Types:
Checkbox.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  checked: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  currentCheckboxId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  loader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./src/js/components/CheckboxOption.js":
/*!*********************************************!*\
  !*** ./src/js/components/CheckboxOption.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.js */ "./src/js/components/Checkbox.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/index-a301f526.esm.js");



const CheckboxOption = props => {
  const handleChangeOption = () => {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select__WEBPACK_IMPORTED_MODULE_2__.c.Option, {
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Checkbox_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: `helpgent-${props.value}`,
    label: props.label,
    onChange: handleChangeOption,
    checked: props.value === 'all' ? true : props.isSelected
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (CheckboxOption);

/***/ }),

/***/ "./src/js/components/WPPageSelectField.js":
/*!************************************************!*\
  !*** ./src/js/components/WPPageSelectField.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WPPageSelectField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncSelectField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsyncSelectField */ "./src/js/components/AsyncSelectField.js");
/* harmony import */ var _helper_fetchWPPages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @helper/fetchWPPages */ "./src/js/helper/fetchWPPages.js");




function WPPageSelectField(props) {
  const {
    control,
    name,
    rules,
    isMulti,
    isClearable,
    closeMenuOnSelect,
    hideSelectedOptions,
    allowSelectAll,
    onChange,
    outputAsArray
  } = props;
  const [defaultPages, setDefaultPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchDefaultPages = async () => {
      setDefaultPages(await (0,_helper_fetchWPPages__WEBPACK_IMPORTED_MODULE_3__["default"])());
    };
    fetchDefaultPages();
  }, []);
  function fetchWPPagesByIDs(ids) {
    return (0,_helper_fetchWPPages__WEBPACK_IMPORTED_MODULE_3__["default"])('', ids);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AsyncSelectField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    control: control,
    name: name,
    rules: rules,
    isMulti: isMulti,
    isClearable: isClearable,
    closeMenuOnSelect: closeMenuOnSelect,
    hideSelectedOptions: hideSelectedOptions,
    allowSelectAll: allowSelectAll,
    loadPreSelectedOptions: fetchWPPagesByIDs,
    loadOptions: _helper_fetchWPPages__WEBPACK_IMPORTED_MODULE_3__["default"],
    defaultOptions: defaultPages,
    onChange: onChange,
    outputAsArray: outputAsArray
  });
}

/***/ }),

/***/ "./src/js/helper/fetchWPPages.js":
/*!***************************************!*\
  !*** ./src/js/helper/fetchWPPages.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ fetchWPPages; }
/* harmony export */ });
/* harmony import */ var _helper_fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @helper/fetchData */ "./src/js/helper/fetchData.js");

async function fetchWPPages(inputValue, ids) {
  inputValue = inputValue ? inputValue : '';
  let url = '';
  if (Array.isArray(ids)) {
    const queryStrings = ids.map(item => `ids[]=${item}`).join('&');
    url = `/helpgent/admin/page/?${queryStrings}`;
  } else {
    url = `/helpgent/admin/page/?search=${inputValue}`;
  }
  try {
    const availablePages = await (0,_helper_fetchData__WEBPACK_IMPORTED_MODULE_0__["default"])(url);
    const availableOptions = availablePages.pages.map(({
      id,
      title
    }) => ({
      value: id,
      label: title
    }));
    return availableOptions;
  } catch (_) {
    return [];
  }
}

/***/ }),

/***/ "./node_modules/react-select/async/dist/react-select-async.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-select/async/dist/react-select-async.esm.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AsyncSelect$1; },
/* harmony export */   useAsync: function() { return /* reexport safe */ _dist_useAsync_ba7c6b77_esm_js__WEBPACK_IMPORTED_MODULE_2__.u; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dist_Select_a221b56b_esm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dist/Select-a221b56b.esm.js */ "./node_modules/react-select/dist/Select-a221b56b.esm.js");
/* harmony import */ var _dist_useStateManager_7e1e8489_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../dist/useStateManager-7e1e8489.esm.js */ "./node_modules/react-select/dist/useStateManager-7e1e8489.esm.js");
/* harmony import */ var _dist_useAsync_ba7c6b77_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dist/useAsync-ba7c6b77.esm.js */ "./node_modules/react-select/dist/useAsync-ba7c6b77.esm.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! use-isomorphic-layout-effect */ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");

























var AsyncSelect = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (props, ref) {
  var stateManagedProps = (0,_dist_useAsync_ba7c6b77_esm_js__WEBPACK_IMPORTED_MODULE_2__.u)(props);
  var selectProps = (0,_dist_useStateManager_7e1e8489_esm_js__WEBPACK_IMPORTED_MODULE_16__.u)(stateManagedProps);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_dist_Select_a221b56b_esm_js__WEBPACK_IMPORTED_MODULE_17__.S, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, selectProps));
});
var AsyncSelect$1 = AsyncSelect;




/***/ }),

/***/ "./node_modules/react-select/dist/useAsync-ba7c6b77.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-select/dist/useAsync-ba7c6b77.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ useAsync; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_a301f526_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-a301f526.esm.js */ "./node_modules/react-select/dist/index-a301f526.esm.js");







var _excluded = ["defaultOptions", "cacheOptions", "loadOptions", "options", "isLoading", "onInputChange", "filterOption"];
function useAsync(_ref) {
  var _ref$defaultOptions = _ref.defaultOptions,
    propsDefaultOptions = _ref$defaultOptions === void 0 ? false : _ref$defaultOptions,
    _ref$cacheOptions = _ref.cacheOptions,
    cacheOptions = _ref$cacheOptions === void 0 ? false : _ref$cacheOptions,
    propsLoadOptions = _ref.loadOptions;
    _ref.options;
    var _ref$isLoading = _ref.isLoading,
    propsIsLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
    propsOnInputChange = _ref.onInputChange,
    _ref$filterOption = _ref.filterOption,
    filterOption = _ref$filterOption === void 0 ? null : _ref$filterOption,
    restSelectProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded);
  var propsInputValue = restSelectProps.inputValue;
  var lastRequest = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(undefined);
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Array.isArray(propsDefaultOptions) ? propsDefaultOptions : undefined),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    defaultOptions = _useState2[0],
    setDefaultOptions = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(typeof propsInputValue !== 'undefined' ? propsInputValue : ''),
    _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    stateInputValue = _useState4[0],
    setStateInputValue = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(propsDefaultOptions === true),
    _useState6 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined),
    _useState8 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
    loadedInputValue = _useState8[0],
    setLoadedInputValue = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
    _useState10 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
    loadedOptions = _useState10[0],
    setLoadedOptions = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    _useState12 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
    passEmptyOptions = _useState12[0],
    setPassEmptyOptions = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),
    _useState14 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState13, 2),
    optionsCache = _useState14[0],
    setOptionsCache = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined),
    _useState16 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState15, 2),
    prevDefaultOptions = _useState16[0],
    setPrevDefaultOptions = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined),
    _useState18 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState17, 2),
    prevCacheOptions = _useState18[0],
    setPrevCacheOptions = _useState18[1];
  if (cacheOptions !== prevCacheOptions) {
    setOptionsCache({});
    setPrevCacheOptions(cacheOptions);
  }
  if (propsDefaultOptions !== prevDefaultOptions) {
    setDefaultOptions(Array.isArray(propsDefaultOptions) ? propsDefaultOptions : undefined);
    setPrevDefaultOptions(propsDefaultOptions);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  var loadOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (inputValue, callback) {
    if (!propsLoadOptions) return callback();
    var loader = propsLoadOptions(inputValue, callback);
    if (loader && typeof loader.then === 'function') {
      loader.then(callback, function () {
        return callback();
      });
    }
  }, [propsLoadOptions]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (propsDefaultOptions === true) {
      loadOptions(stateInputValue, function (options) {
        if (!mounted.current) return;
        setDefaultOptions(options || []);
        setIsLoading(!!lastRequest.current);
      });
    }
    // NOTE: this effect is designed to only run when the component mounts,
    // so we don't want to include any hook dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var onInputChange = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (newValue, actionMeta) {
    var inputValue = (0,_index_a301f526_esm_js__WEBPACK_IMPORTED_MODULE_5__.L)(newValue, actionMeta, propsOnInputChange);
    if (!inputValue) {
      lastRequest.current = undefined;
      setStateInputValue('');
      setLoadedInputValue('');
      setLoadedOptions([]);
      setIsLoading(false);
      setPassEmptyOptions(false);
      return;
    }
    if (cacheOptions && optionsCache[inputValue]) {
      setStateInputValue(inputValue);
      setLoadedInputValue(inputValue);
      setLoadedOptions(optionsCache[inputValue]);
      setIsLoading(false);
      setPassEmptyOptions(false);
    } else {
      var request = lastRequest.current = {};
      setStateInputValue(inputValue);
      setIsLoading(true);
      setPassEmptyOptions(!loadedInputValue);
      loadOptions(inputValue, function (options) {
        if (!mounted) return;
        if (request !== lastRequest.current) return;
        lastRequest.current = undefined;
        setIsLoading(false);
        setLoadedInputValue(inputValue);
        setLoadedOptions(options || []);
        setPassEmptyOptions(false);
        setOptionsCache(options ? (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, optionsCache), {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, inputValue, options)) : optionsCache);
      });
    }
  }, [cacheOptions, loadOptions, loadedInputValue, optionsCache, propsOnInputChange]);
  var options = passEmptyOptions ? [] : stateInputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, restSelectProps), {}, {
    options: options,
    isLoading: isLoading || propsIsLoading,
    onInputChange: onInputChange,
    filterOption: filterOption
  });
}




/***/ })

}]);
//# sourceMappingURL=src_js_components_WPPageSelectField_js.js.map