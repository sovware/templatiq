"use strict";
(self["webpackChunktemplate_market"] = self["webpackChunktemplate_market"] || []).push([["assets_js_lib_SettingPanel_components_Breadcrumb_js"],{

/***/ "./assets/js/lib/SettingPanel/components/Breadcrumb.js":
/*!*************************************************************!*\
  !*** ./assets/js/lib/SettingPanel/components/Breadcrumb.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Breadcrumb; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Breadcrumb({
  routeLocation,
  routeList,
  rootRoutePath
}) {
  const currentRoutePath = routeLocation.pathname;
  const activeRoutes = routeList.filter(route => {
    let routePath = `${rootRoutePath}/${route.path}`;
    return routePath === currentRoutePath;
  });
  if (!activeRoutes.length) {
    return '';
  }
  const titleCase = item => item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
  const wordCase = item => item.split('-').map(titleCase).join(' ');
  const activeRoute = activeRoutes[0];
  const activeRoutePath = `${rootRoutePath}/${activeRoute.path}`;
  const routes = activeRoutePath.split('/').filter(item => item).map(wordCase);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-breadcrumb"
  }, routes.map((routeLabel, index, items) => {
    const isLastItem = index + 1 === items.length;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `helpgent-breadcrumb-label${isLastItem ? ' --is-active' : ''}`
    }, routeLabel), !isLastItem && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "helpgent-breadcrumb-label helpgent-breadcrumb-separator"
    }, ">"));
  }));
}

/***/ })

}]);
//# sourceMappingURL=assets_js_lib_SettingPanel_components_Breadcrumb_js.js.map