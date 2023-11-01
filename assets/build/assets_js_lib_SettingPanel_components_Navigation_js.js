"use strict";
(self["webpackChunktemplate_market"] = self["webpackChunktemplate_market"] || []).push([["assets_js_lib_SettingPanel_components_Navigation_js"],{

/***/ "./assets/svg/icon/caret-down.svg":
/*!****************************************!*\
  !*** ./assets/svg/icon/caret-down.svg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: function() { return /* binding */ SvgCaretDown; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCaretDown = function SvgCaretDown(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 8,
    height: 4.607
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#898989",
    d: "M.607 0h6.786a.607.607 0 0 1 .429 1.037L4.43 4.43a.607.607 0 0 1-.859 0L.178 1.037A.607.607 0 0 1 .607 0Z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjQuNjA3IiB2aWV3Qm94PSIwIDAgOCA0LjYwNyI+CiAgPHBhdGggaWQ9ImNhcmV0LWRvd24iIGQ9Ik02LjAyMSw5aDYuNzg2YS42MDcuNjA3LDAsMCwxLC40MjksMS4wMzdMOS44NDQsMTMuNDNhLjYwNy42MDcsMCwwLDEtLjg1OSwwTDUuNTkyLDEwLjAzN0EuNjA3LjYwNywwLDAsMSw2LjAyMSw5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuNDE0IC05KSIgZmlsbD0iIzg5ODk4OSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./assets/js/lib/SettingPanel/components/DropDownMenuItem.js":
/*!*******************************************************************!*\
  !*** ./assets/js/lib/SettingPanel/components/DropDownMenuItem.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DropDownMenuItem; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/SettingsContext */ "./assets/js/lib/SettingPanel/context/SettingsContext.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "./assets/js/lib/SettingPanel/components/MenuItem.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _icon_caret_down_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @icon/caret-down.svg */ "./assets/svg/icon/caret-down.svg");





function DropDownMenuItem({
  menu
}) {
  const {
    settingsState
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__.useSettingsState)();
  const {
    routeLocation,
    NavLink
  } = settingsState;
  const rootRoutePath = settingsState.rootRoutePath;
  const currentRoutePath = routeLocation.pathname;
  const activeMenuClass = ({
    isActive
  }, menu) => {
    const baseClass = 'helpgent-settings-panel-nav-menu-link';
    if (isActive) {
      return `${baseClass} --is-active`;
    }
    for (const submenu of menu.submenu) {
      const path = rootRoutePath ? `${rootRoutePath}/${submenu.path}` : '/' + submenu.path;
      if (path === currentRoutePath) {
        return `${baseClass} --is-active`;
      }
    }
    return baseClass;
  };
  const menuIconClass = menu => {
    const baseClass = 'helpgent-settings-panel-nav-menu-icon helpgent-icon';
    return menu.iconClass ? `${baseClass} ${menu.iconClass}` : baseClass;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-nav-menu-item --has-dropdown"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NavLink, {
    to: `${menu.grandChildPath ? menu.grandChildPath : menu.path}`,
    className: data => activeMenuClass(data, menu)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: menuIconClass(menu)
  }, menu.icon), menu.label, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "helpgent-settings-panel-nav-menu-action"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: _icon_caret_down_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-nav-menu-dropdown"
  }, menu.submenu.map((submenu, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menu: submenu,
    key: index
  }))));
}

/***/ }),

/***/ "./assets/js/lib/SettingPanel/components/MenuItem.js":
/*!***********************************************************!*\
  !*** ./assets/js/lib/SettingPanel/components/MenuItem.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MenuItem; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/SettingsContext */ "./assets/js/lib/SettingPanel/context/SettingsContext.js");


function MenuItem({
  menu
}) {
  const {
    settingsState
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__.useSettingsState)();
  const {
    NavLink
  } = settingsState;
  const activeMenuClass = ({
    isActive
  }) => {
    const baseClass = 'helpgent-settings-panel-nav-menu-link';
    if (isActive) {
      return `${baseClass} --is-active`;
    }
    return baseClass;
  };
  const menuIconClass = menu => {
    const baseClass = 'helpgent-settings-panel-nav-menu-icon helpgent-icon';
    return menu.iconClass ? `${baseClass} ${menu.iconClass}` : baseClass;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-nav-menu-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NavLink, {
    to: `${menu.path}`,
    className: activeMenuClass
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: menuIconClass(menu)
  }, menu.icon), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "helpgent-settings-panel-nav-menu-label"
  }, menu.label)));
}

/***/ }),

/***/ "./assets/js/lib/SettingPanel/components/Navigation.js":
/*!*************************************************************!*\
  !*** ./assets/js/lib/SettingPanel/components/Navigation.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navigation; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/SettingsContext */ "./assets/js/lib/SettingPanel/context/SettingsContext.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "./assets/js/lib/SettingPanel/components/MenuItem.js");
/* harmony import */ var _DropDownMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropDownMenuItem */ "./assets/js/lib/SettingPanel/components/DropDownMenuItem.js");




function Navigation() {
  const {
    settingsState
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__.useSettingsState)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-nav"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-nav-menu"
  }, settingsState.menus.map((menu, index) => {
    if ('menu' === menu.type) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        menu: menu,
        key: index
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DropDownMenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      menu: menu,
      key: index
    });
  })));
}

/***/ })

}]);
//# sourceMappingURL=assets_js_lib_SettingPanel_components_Navigation_js.js.map