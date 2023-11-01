"use strict";
(self["webpackChunktemplate_market"] = self["webpackChunktemplate_market"] || []).push([["assets_js_lib_SettingPanel_components_SearchBar_js"],{

/***/ "./assets/js/lib/SettingPanel/components/SearchBar.js":
/*!************************************************************!*\
  !*** ./assets/js/lib/SettingPanel/components/SearchBar.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchBar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SettingsContext */ "./assets/js/lib/SettingPanel/context/SettingsContext.js");
/* harmony import */ var _helpers_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/utility */ "./assets/js/lib/SettingPanel/helpers/utility.js");




function SearchBar() {
  const {
    settingsState
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__.useSettingsState)();
  const [searchResults, setSearchResults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [keyword, setKeyword] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  function handleSearch(e) {
    setKeyword(e.target.value);
    setSearchResults([]);
    if (!e.target.value) {
      return;
    }
    prepareSearchResult(e.target.value);
  }
  function prepareSearchResult(keyword) {
    keyword = keyword.toLowerCase();
    searchFields(keyword);
    searchMenu(keyword);
  }
  function serchFieldInMenu(fieldKey, menus) {
    for (const menu of menus) {
      if ('submenu' === menu.type) {
        const submenu = serchFieldInMenu(fieldKey, menu.submenu);
        if (submenu) {
          return submenu;
        }
        continue;
      }
      if ('menu' === menu.type) {
        const hasInField = menu.fields && menu.fields.includes(fieldKey);
        let hasInFieldGroups = false;
        if (menu.fieldGroups) {
          const filteredFieldGroups = menu.fieldGroups.filter(fieldGroup => fieldGroup.fields && fieldGroup.fields.includes(fieldKey));
          hasInFieldGroups = filteredFieldGroups.length;
        }
        if (hasInField || hasInFieldGroups) {
          return menu;
        }
      }
    }
    return null;
  }
  function searchFields(keyword) {
    const fieldKeys = Object.keys(settingsState.fields);
    for (const fieldKey of fieldKeys) {
      if (!settingsState.fields[fieldKey].label) {
        continue;
      }
      const hasMatch = (0,_helpers_utility__WEBPACK_IMPORTED_MODULE_3__.hasMathInText)(keyword, settingsState.fields[fieldKey].label);
      if (!hasMatch) {
        continue;
      }
      const menu = serchFieldInMenu(fieldKey, settingsState.menus);
      if (!menu) {
        return;
      }
      const path = (0,_helpers_utility__WEBPACK_IMPORTED_MODULE_3__.sanitizePath)(settingsState.rootRoutePath + '/' + menu.path);
      const resultItem = {
        label: settingsState.fields[fieldKey].label,
        link: `#/${path}?field=${fieldKey}`,
        breadcrumb: (0,_helpers_utility__WEBPACK_IMPORTED_MODULE_3__.generateBreadcrumb)(path)
      };
      setSearchResults(currentValue => {
        return [...currentValue, resultItem];
      });
    }
  }
  function searchMenu(keyword) {
    const searchLabelInMenu = menus => {
      for (const menu of menus) {
        if ('submenu' === menu.type) {
          if ((0,_helpers_utility__WEBPACK_IMPORTED_MODULE_3__.hasMathInText)(keyword, menu.label)) {
            return menu;
          }
          const subMenu = searchLabelInMenu(menu.submenu);
          if (subMenu) {
            return subMenu;
          }
          continue;
        }
        if ('menu' === menu.type) {
          if ((0,_helpers_utility__WEBPACK_IMPORTED_MODULE_3__.hasMathInText)(keyword, menu.label)) {
            return menu;
          }
        }
      }
      return null;
    };
    const menu = searchLabelInMenu(settingsState.menus);
    if (!menu) {
      return;
    }
    let path = 'submenu' === menu.type && menu.grandChildPath ? menu.grandChildPath : menu.path;
    path = (0,_helpers_utility__WEBPACK_IMPORTED_MODULE_3__.sanitizePath)(settingsState.rootRoutePath + '/' + path);
    const resultItem = {
      label: menu.label,
      link: `#/${path}`,
      breadcrumb: (0,_helpers_utility__WEBPACK_IMPORTED_MODULE_3__.generateBreadcrumb)(path)
    };
    setSearchResults(currentValue => {
      return [...currentValue, resultItem];
    });
  }
  function reset() {
    setKeyword('');
    setSearchResults([]);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-search"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: keyword,
    onChange: handleSearch,
    className: "helpgent-settings-panel-search-input",
    placeholder: "Search settings here..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "helpgent-settings-panel-search-results"
  }, searchResults.map(item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: item.link,
    onClick: reset,
    className: "helpgent-settings-panel-search-result-link"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "helpgent-settings-panel-search-result-label"
  }, item.label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "helpgent-settings-panel-search-result-breadcrumb"
  }, item.breadcrumb)))));
}

/***/ })

}]);
//# sourceMappingURL=assets_js_lib_SettingPanel_components_SearchBar_js.js.map