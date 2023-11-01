"use strict";
(self["webpackChunktemplate_market"] = self["webpackChunktemplate_market"] || []).push([["assets_js_lib_SettingPanel_index_js"],{

/***/ "./assets/js/lib/SettingPanel/App.js":
/*!*******************************************!*\
  !*** ./assets/js/lib/SettingPanel/App.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _components_ContentLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/ContentLoading */ "./assets/js/components/ContentLoading.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./assets/js/lib/SettingPanel/style.js");
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/SettingsContext */ "./assets/js/lib/SettingPanel/context/SettingsContext.js");
/* harmony import */ var _hooks_useSave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSave */ "./assets/js/lib/SettingPanel/hooks/useSave.js");
/* harmony import */ var _helpers_utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/utility */ "./assets/js/lib/SettingPanel/helpers/utility.js");
/* harmony import */ var _hooks_useSettingsRoutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useSettingsRoutes */ "./assets/js/lib/SettingPanel/hooks/useSettingsRoutes.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Loader */ "./assets/js/lib/SettingPanel/components/Loader.js");










const SaveButton = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "assets_js_lib_SettingPanel_components_SaveButton_js").then(__webpack_require__.bind(__webpack_require__, /*! ./components/SaveButton */ "./assets/js/lib/SettingPanel/components/SaveButton.js")));
const Navigation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "assets_js_lib_SettingPanel_components_Navigation_js").then(__webpack_require__.bind(__webpack_require__, /*! ./components/Navigation */ "./assets/js/lib/SettingPanel/components/Navigation.js")));
const FieldSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "assets_js_lib_SettingPanel_components_FieldSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./components/FieldSection */ "./assets/js/lib/SettingPanel/components/FieldSection.js")));
const Breadcrumb = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "assets_js_lib_SettingPanel_components_Breadcrumb_js").then(__webpack_require__.bind(__webpack_require__, /*! ./components/Breadcrumb */ "./assets/js/lib/SettingPanel/components/Breadcrumb.js")));
const SearchBar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "assets_js_lib_SettingPanel_components_SearchBar_js").then(__webpack_require__.bind(__webpack_require__, /*! ./components/SearchBar */ "./assets/js/lib/SettingPanel/components/SearchBar.js")));
function App(props) {
  const {
    menus,
    prefix,
    fields,
    fieldComponents,
    data,
    isLoading,
    loader,
    rootRoutePath: baseRootRoutePath,
    onSave,
    NavLink,
    Route,
    Routes,
    routeLocation,
    navigate
  } = props;
  const {
    settingsState
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_4__.useSettingsState)();
  const {
    routeList,
    rootRoutePath
  } = (0,_hooks_useSettingsRoutes__WEBPACK_IMPORTED_MODULE_7__["default"])({
    menus,
    prefix,
    fields,
    fieldComponents,
    rootRoutePath: baseRootRoutePath,
    routeLocation,
    navigate,
    NavLink
  });
  if (!routeList.length) {
    return '';
  }
  let LoaderContent = loader ? loader : _components_Loader__WEBPACK_IMPORTED_MODULE_8__["default"];
  LoaderContent = typeof LoaderContent === 'string' ? () => LoaderContent : LoaderContent;
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
    mode: 'onChange'
  });
  const {
    isSaving,
    message,
    buttonRef,
    submit,
    onSubmit
  } = (0,_hooks_useSave__WEBPACK_IMPORTED_MODULE_5__["default"])(onSave);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadData(data);
  }, [data]);
  function loadData(data) {
    data = (0,_helpers_utility__WEBPACK_IMPORTED_MODULE_6__.isObject)(data) ? data : {};
    const parseValue = fieldKey => {
      const inputKey = `${settingsState.prefix}${fieldKey}`;
      const value = typeof settingsState.fields[fieldKey].value !== 'undefined' ? settingsState.fields[fieldKey].value : '';
      return {
        key: inputKey,
        value: data.hasOwnProperty(inputKey) ? data[inputKey] : value
      };
    };
    const transformToObject = (previousValue, currentValue) => {
      return {
        ...previousValue,
        [currentValue.key]: currentValue.value
      };
    };
    const defaultValues = Object.keys(settingsState.fields).map(parseValue).reduce(transformToObject, data);
    form.reset(defaultValues);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_3__.SettingPanelStyle, {
    className: "helpgent-settings-panel"
  }, isLoading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoaderContent, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ContentLoading__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: form.handleSubmit(onSubmit)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Breadcrumb, {
    routeLocation: routeLocation,
    routeList: routeList,
    rootRoutePath: rootRoutePath
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SearchBar, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-action"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SaveButton, {
    buttonRef: buttonRef,
    isSaving: isSaving,
    message: message
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Navigation, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-contents"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Routes, null, routeList.map((route, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Route, {
    key: index,
    path: `${route.path}/*`,
    element: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FieldSection, {
      menu: route,
      form: form,
      save: submit,
      onSubmit: onSubmit
    })
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-footer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-action"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SaveButton, {
    buttonRef: buttonRef,
    isSaving: isSaving,
    message: message
  }))))));
}

/***/ }),

/***/ "./assets/js/lib/SettingPanel/components/Loader.js":
/*!*********************************************************!*\
  !*** ./assets/js/lib/SettingPanel/components/Loader.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Loader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Loader() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-loader"
  }, "Loading...");
}

/***/ }),

/***/ "./assets/js/lib/SettingPanel/context/SettingsContext.js":
/*!***************************************************************!*\
  !*** ./assets/js/lib/SettingPanel/context/SettingsContext.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsStateProvider: function() { return /* binding */ SettingsStateProvider; },
/* harmony export */   useSettingsState: function() { return /* binding */ useSettingsState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const SettingsContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useSettingsState = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(SettingsContext);
const SettingsStateProvider = ({
  children
}) => {
  const initialState = {
    prefix: '',
    fields: {},
    menus: [],
    fieldComponents: {}
  };
  const [settingsState, setSettingsState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SettingsContext.Provider, {
    value: {
      settingsState,
      setSettingsState
    }
  }, children);
};

/***/ }),

/***/ "./assets/js/lib/SettingPanel/helpers/utility.js":
/*!*******************************************************!*\
  !*** ./assets/js/lib/SettingPanel/helpers/utility.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   genarateRoutes: function() { return /* binding */ genarateRoutes; },
/* harmony export */   generateBreadcrumb: function() { return /* binding */ generateBreadcrumb; },
/* harmony export */   getErrorMessage: function() { return /* binding */ getErrorMessage; },
/* harmony export */   hasMathInText: function() { return /* binding */ hasMathInText; },
/* harmony export */   isObject: function() { return /* binding */ isObject; },
/* harmony export */   sanitizePath: function() { return /* binding */ sanitizePath; },
/* harmony export */   titleCase: function() { return /* binding */ titleCase; }
/* harmony export */ });
const genarateRoutes = (menus, parent) => {
  let routes = [];
  if (!Array.isArray(menus)) {
    return routes;
  }
  const generatePath = label => label.toLowerCase().replace(/\s/g, '-');
  menus.forEach(menu => {
    if (!isObject(menu)) {
      return;
    }
    if ('menu' === menu.type) {
      let routePath = menu.label ? generatePath(menu.label) : '';
      if (parent && parent.label) {
        routePath = `${generatePath(parent.label)}/${routePath}`;
      }
      menu.path = routePath;
      routes.push({
        ...menu,
        path: routePath
      });
    }
    if ('submenu' === menu.type && Array.isArray(menu.submenu)) {
      const subRoutes = genarateRoutes(menu.submenu, menu);
      menu.path = menu.label ? generatePath(menu.label) : '';
      menu.grandChildPath = subRoutes.length ? subRoutes[0].path : '';
      routes = [...routes, ...subRoutes];
    }
  });
  return routes;
};
const isObject = data => {
  if (!data) {
    return false;
  }
  if (typeof data !== 'object') {
    return false;
  }
  if (Array.isArray(data)) {
    return false;
  }
  return true;
};
const titleCase = item => item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
const slugToLabel = item => item.split('-').map(titleCase).join(' ');
const sanitizePath = path => {
  return path.replace(/^\/+/, '').replace(/\/+$/, '');
};
const generateBreadcrumb = path => {
  return path.split('/').map(slugToLabel).join(' > ');
};
const hasMathInText = (keyword, text) => {
  const matches = keyword.split(' ').filter(keywordPart => {
    if (!keywordPart) {
      return false;
    }
    const matches = text.toLowerCase().split(' ').map(item => item.match(keywordPart)).filter(item => item);
    return matches.length;
  });
  return matches.length ? true : false;
};
function getErrorMessage(inputKey, form, rules) {
  const {
    formState: {
      errors
    }
  } = form;
  if (typeof errors[inputKey] === 'undefined') {
    return '';
  }
  const error = errors[inputKey];
  const rule = rules[error.type] ? rules[error.type] : '';
  const errorMessages = {
    required: `The input is required`,
    min: `The input must be at least ${rule}`,
    max: `The input must not greater then ${rule}`,
    minLength: `The input length must be at least ${rule}`,
    maxLength: `The input length must not greater then ${rule}`,
    pattern: `The input has invalid data`,
    validate: `The input has invalid data`
  };
  if (!errorMessages[error.type]) {
    return '';
  }
  return errorMessages[error.type];
}
/* harmony default export */ __webpack_exports__["default"] = ({
  genarateRoutes,
  isObject,
  titleCase,
  sanitizePath,
  generateBreadcrumb,
  hasMathInText,
  getErrorMessage
});

/***/ }),

/***/ "./assets/js/lib/SettingPanel/hooks/useSave.js":
/*!*****************************************************!*\
  !*** ./assets/js/lib/SettingPanel/hooks/useSave.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useSave; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function useSave(onSave) {
  const buttonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    success: null,
    message: '',
    isSaving: false
  });
  const {
    isSaving,
    message,
    success
  } = state;
  function submit() {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }
  function onSubmit(data) {
    save(data);
  }
  async function save(data) {
    if (typeof onSave !== 'function') {
      return;
    }
    if (isSaving) {
      return;
    }
    setState({
      ...state,
      isSaving: true,
      success: null,
      message: ''
    });
    const status = await onSave(data);
    setState({
      ...state,
      isSaving: false,
      success: status.success,
      message: status.message
    });
    wait(5000).then(() => {
      setState({
        ...state,
        success: null,
        message: ''
      });
    });
    return status;
  }
  function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  return {
    isSaving,
    message,
    success,
    buttonRef,
    onSubmit,
    submit
  };
}

/***/ }),

/***/ "./assets/js/lib/SettingPanel/hooks/useSettingsRoutes.js":
/*!***************************************************************!*\
  !*** ./assets/js/lib/SettingPanel/hooks/useSettingsRoutes.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useSettingsRoutes; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/SettingsContext */ "./assets/js/lib/SettingPanel/context/SettingsContext.js");
/* harmony import */ var _helpers_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/utility */ "./assets/js/lib/SettingPanel/helpers/utility.js");



function useSettingsRoutes({
  menus,
  prefix,
  fields,
  fieldComponents,
  rootRoutePath,
  routeLocation,
  navigate,
  NavLink
}) {
  const {
    settingsState,
    setSettingsState
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__.useSettingsState)();
  rootRoutePath = rootRoutePath ? '/' + rootRoutePath : '/';
  const currentRoutePath = routeLocation.pathname;
  const routeList = (0,_helpers_utility__WEBPACK_IMPORTED_MODULE_2__.genarateRoutes)(menus);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!routeList.length) {
      return;
    }
    let newSettingsState = settingsState;
    newSettingsState.rootRoutePath = rootRoutePath;
    newSettingsState.routeLocation = routeLocation;
    newSettingsState.navigate = navigate;
    newSettingsState.NavLink = NavLink;
    if (Array.isArray(menus)) {
      newSettingsState = {
        ...newSettingsState,
        menus
      };
    }
    if (typeof prefix === 'string') {
      newSettingsState = {
        ...newSettingsState,
        prefix
      };
    }
    if ((0,_helpers_utility__WEBPACK_IMPORTED_MODULE_2__.isObject)(fields)) {
      newSettingsState = {
        ...newSettingsState,
        fields
      };
    }
    if ((0,_helpers_utility__WEBPACK_IMPORTED_MODULE_2__.isObject)(fieldComponents)) {
      newSettingsState = {
        ...newSettingsState,
        fieldComponents
      };
    }
    setSettingsState(newSettingsState);
    const sanitizePath = path => path.replace(/^\/+/, '').replace(/\/+$/, '');
    const rootPath = sanitizePath(rootRoutePath);
    const currentPath = sanitizePath(currentRoutePath);
    if (rootPath === currentPath) {
      navigate(routeList[0].path);
    }
  }, []);
  return {
    routeList,
    rootRoutePath,
    currentRoutePath
  };
}

/***/ }),

/***/ "./assets/js/lib/SettingPanel/index.js":
/*!*********************************************!*\
  !*** ./assets/js/lib/SettingPanel/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SettingsPanel; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/SettingsContext */ "./assets/js/lib/SettingPanel/context/SettingsContext.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./assets/js/lib/SettingPanel/App.js");



function SettingsPanel(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__.SettingsStateProvider, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...props
  }));
}

/***/ }),

/***/ "./assets/js/lib/SettingPanel/style.js":
/*!*********************************************!*\
  !*** ./assets/js/lib/SettingPanel/style.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingPanelStyle: function() { return /* binding */ SettingPanelStyle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const SettingPanelStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    &.helpgent-settings-panel {
        border-radius: 20px;
        overflow: hidden;
        max-width: 1200px;
        margin: 0 auto 30px auto;
    }
    .helpgent-settings-panel-header,
    .helpgent-settings-panel-footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        background: #000000;
        padding: 15px 30px 15px 25px;
    }

    .helpgent-settings-panel-footer {
        justify-content: end;
    }

    .helpgent-settings-panel-search {
        position: relative;
        z-index: 8;
    }

    .helpgent-settings-panel-search-input {
        min-width: 250px;
        padding: 0 20px;
        color: #fff;
        border: none;
        background: rgba(255,255,255, 0.2);
        min-height: 40px;
        border-radius: 8px;
    }

    .helpgent-settings-panel-search-results {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translate(0px, 100%);
        box-shadow: 0 0 20px -8px rgba(0,0,0,0.3);
        background: #fff;
    }

    .helpgent-settings-panel-search-result-link {
        text-decoration: none;
        padding: 10px 10px;
        display: block;
        transition: all ease-in-out 300ms;

        &:hover {
            background: #e8e8e8;
        }
    }

    .helpgent-settings-panel-search-result-label {
        margin: 0;
        color: #000;
    }

    .helpgent-settings-panel-search-result-breadcrumb {
        margin: 0;
        color: gray;
    }

    .helpgent-settings-panel-field-item {
        margin-bottom: 20px;
    }

    .helpgent-form-input-error-message {
        padding: 10px 0;
        color: red;
    }

    .helpgent-settings-panel-body {
        display: flex;
        background: #ffffff;
    }

    .helpgent-settings-panel-nav {
        min-height: 500px;
        background: #E6E6E6;
    }

    .helpgent-settings-panel-nav-menu {

    }

    .helpgent-settings-panel-nav-menu-item {
        min-width: 250px;
        position: relative;
        &.--has-dropdown {
            display: block;
            > .helpgent-settings-panel-nav-menu-link.--is-active {
                z-index: 2;
                .helpgent-settings-panel-nav-menu-action{
                    svg{
                        transform: rotate(180deg);
                        path{
                            fill: #030308;
                        }
                    }
                }
            }
        }
    }

    .helpgent-settings-panel-nav-menu-link {
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        color: #030308;
        padding: 15px 25px;
        box-shadow: none;
        outline: none;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 15px;
        &.--is-active {
            border-left: 2px solid var(--helpgent-primary-button-bg );
            box-shadow: 0 5px 20px rgba(161, 168, 198 , 0.2);
            background: #ffffff;
            + .helpgent-settings-panel-nav-menu-dropdown {
                display: block;
            }
        }
    }

    .helpgent-settings-panel-nav-menu-icon {
        line-height: 0;
        svg{
            width: 18px;
        }
    }

    .helpgent-settings-panel-nav-menu-action {
        line-height: 0;
        margin-left: auto;
    }

    .helpgent-settings-panel-nav-menu-dropdown {
        display: none;
        .helpgent-settings-panel-nav-menu-link {
            padding-left: 55px;
            &.--is-active {
                border-left: unset;
                box-shadow: unset;
                color: var(--helpgent-primary-button-bg );
            }

        }
    }

    .helpgent-settings-panel-contents {
        flex-grow: 1;
        padding: 20px;
    }

    .helpgent-settings-panel-action {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .helpgent-settings-panel-save-action {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .helpgent-settings-panel-save-status {
        padding: 0 30px;
        color: #fff;
        &.--has-success {
            color: #86f224;
        }
        &.--has-error {
            color: #ff6060;
        }
    }

    .helpgent-settings-panel-breadcrumb {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        display: flex;
    }

    .helpgent-breadcrumb-label {
        display: inline-block;
        color: rgba( 255,255,255, 0.6 );
        &.--is-active {
            color: #fff;
        }
    }

    .helpgent-breadcrumb-separator {
        padding: 0 5px;
    }

    .helpgent-settings-panel-field-group {
        // border: 1px solid #E3E6EF;
        border-radius: 10px;
        margin-bottom: 30px;
    }

    .helpgent-settings-panel-field-group-header {
        padding: 20px;
        // border-bottom: 1px solid #E3E6EF;

        h1, h2, h3, h4, h5, h5 {
            margin: 0;
        }
        h2{
            font-size: 20px;
            font-weight: 600;
            color: var(--helpgent-color-dark);
        }
    }

    .helpgent-settings-panel-field-group-contents {
        padding: 10px 20px;
    }

    .helpgent-form-row {
        display: flex;
        flex-wrap: wrap;
        align-items: start;
    }

    .helpgent-form-row-left {
        flex-basis: 34%;
    }

    .helpgent-form-row-right {
        flex-basis: 66%;
    }

    .helpgent-form__label {
        display: block;
        font-size: 15px;
        font-weight: 500;
        color: #272b41;
        margin-bottom: 0;
    }

    .helpgent-icon {
        &.icon-primary svg path {
            fill: var(--helpgent-color-primary);
        }

        &.icon-warning-deep svg path {
            fill: var(--helpgent-color-warning-deep);
        }
    }

    .helpgent-title {
        display: block;
    }

    .helpgent-user-profile {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .helpgent-user-profile-thumbnail {
        height: 50px;
        width: 50px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 15px;
        background: #A2A2A2;
    }

    .helpgent-user-profile-thumbnail-img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .helpgent-user-profile-meta {
        flex-grow: 1;
    }

    .helpgent-user-profile-meta-title {
        margin: 0 0 5px 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--helpgent-color-dark);
    }

    .helpgent-user-profile-meta-subtitle {
        color: var(--helpgent-color-gray);
        font-size: 14px;
        margin: 0;
    }
    .helpgent-storage-status-bar-label{
        color: var(--helpgent-color-gray);
        font-size: 13px;
        font-weight: 500;
    }
    .helpgent-storage-status-bar {
        position: relative;
        height: 8px;
        background: #D5D5D5;
        border-radius: 10px;
        overflow: hidden;
    }

    .helpgent-storage-status-bar-fill {
        width: 0%;
        height: 100%;
        background: var(--helpgent-color-primary);
        transition: all ease-in-out 300ms;
    }

    .helpgent-dropdown__content li a.helpgent-danger {
        color: var(--helpgent-color-danger);

        .helpgent-dropdown-item-icon svg path {
            fill: var(--helpgent-color-danger);
        }
    }

    .helpgent-danger svg path {
        fill: var(--helpgent-color-danger);
    }

    .helpgent-dropdown-btn.helpgent-btn-dark {
        svg path {
            fill: #fff;
        }

        &:hover {
            svg path {
                fill: #000;
            }
        }
    }
`;


/***/ })

}]);
//# sourceMappingURL=assets_js_lib_SettingPanel_index_js.js.map