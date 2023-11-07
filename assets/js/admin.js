/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPropValid)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memoize)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unitlessKeys)
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

/***/ "./node_modules/@remix-run/router/dist/router.js":
/*!*******************************************************!*\
  !*** ./node_modules/@remix-run/router/dist/router.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortedDeferredError: () => (/* binding */ AbortedDeferredError),
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   IDLE_BLOCKER: () => (/* binding */ IDLE_BLOCKER),
/* harmony export */   IDLE_FETCHER: () => (/* binding */ IDLE_FETCHER),
/* harmony export */   IDLE_NAVIGATION: () => (/* binding */ IDLE_NAVIGATION),
/* harmony export */   UNSAFE_DEFERRED_SYMBOL: () => (/* binding */ UNSAFE_DEFERRED_SYMBOL),
/* harmony export */   UNSAFE_DeferredData: () => (/* binding */ DeferredData),
/* harmony export */   UNSAFE_ErrorResponseImpl: () => (/* binding */ ErrorResponseImpl),
/* harmony export */   UNSAFE_convertRouteMatchToUiMatch: () => (/* binding */ convertRouteMatchToUiMatch),
/* harmony export */   UNSAFE_convertRoutesToDataRoutes: () => (/* binding */ convertRoutesToDataRoutes),
/* harmony export */   UNSAFE_getPathContributingMatches: () => (/* binding */ getPathContributingMatches),
/* harmony export */   UNSAFE_invariant: () => (/* binding */ invariant),
/* harmony export */   UNSAFE_warning: () => (/* binding */ warning),
/* harmony export */   createBrowserHistory: () => (/* binding */ createBrowserHistory),
/* harmony export */   createHashHistory: () => (/* binding */ createHashHistory),
/* harmony export */   createMemoryHistory: () => (/* binding */ createMemoryHistory),
/* harmony export */   createPath: () => (/* binding */ createPath),
/* harmony export */   createRouter: () => (/* binding */ createRouter),
/* harmony export */   createStaticHandler: () => (/* binding */ createStaticHandler),
/* harmony export */   defer: () => (/* binding */ defer),
/* harmony export */   generatePath: () => (/* binding */ generatePath),
/* harmony export */   getStaticContextFromError: () => (/* binding */ getStaticContextFromError),
/* harmony export */   getToPathname: () => (/* binding */ getToPathname),
/* harmony export */   isDeferredData: () => (/* binding */ isDeferredData),
/* harmony export */   isRouteErrorResponse: () => (/* binding */ isRouteErrorResponse),
/* harmony export */   joinPaths: () => (/* binding */ joinPaths),
/* harmony export */   json: () => (/* binding */ json),
/* harmony export */   matchPath: () => (/* binding */ matchPath),
/* harmony export */   matchRoutes: () => (/* binding */ matchRoutes),
/* harmony export */   normalizePathname: () => (/* binding */ normalizePathname),
/* harmony export */   parsePath: () => (/* binding */ parsePath),
/* harmony export */   redirect: () => (/* binding */ redirect),
/* harmony export */   redirectDocument: () => (/* binding */ redirectDocument),
/* harmony export */   resolvePath: () => (/* binding */ resolvePath),
/* harmony export */   resolveTo: () => (/* binding */ resolveTo),
/* harmony export */   stripBasename: () => (/* binding */ stripBasename)
/* harmony export */ });
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */
var Action;
(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */
  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */
  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */
function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }
  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries; // Declare so we can access from createMemoryLocation
  entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;
  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index];
  }
  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }
    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }
  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  let history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref,
    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },
    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },
    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 1
        });
      }
    },
    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 0
        });
      }
    },
    go(delta) {
      action = Action.Pop;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;
      if (listener) {
        listener({
          action,
          location: nextLocation,
          delta
        });
      }
    },
    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }
  };
  return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    // Hash URL should always have a leading / just like window.location.pathname
    // does, so if an app ends up at a route like /#something then we add a
    // leading slash so all of our path-matching behaves the same as if it would
    // in a browser router.  This is particularly important when there exists a
    // root splat route (<Route path="*">) since that matches internally against
    // "/*" and we'd expect /#something to 404 in a hash router app.
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);
    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience, so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    // try...catch because iOS limits us to 100 pushState calls :/
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // If the exception is because `state` can't be serialized, let that throw
      // outwards just like a replace call would so the dev knows the cause
      // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
      // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window, to);
    },
    createURL,
    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
//#endregion

var ResultType;
(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
const immutableRouteKeys = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function isIndexRoute(route) {
  return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  if (manifest === void 0) {
    manifest = {};
  }
  return routes.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!manifest[id], "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, mapRouteProperties(route), {
        id
      });
      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
        id,
        children: undefined
      });
      manifest[id] = pathOrLayoutRoute;
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
      }
      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i],
    // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    safelyDecodeURI(pathname));
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    // Add the children before adding this route to the array, so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.
    if (route.children && route.children.length > 0) {
      invariant(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  // Optional path segments are denoted by a trailing `?`
  let isOptional = first.endsWith("?");
  // Compute the corresponding required segment: `foo?` -> `foo`
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  // All child paths with the prefix.  Do this for all children before the
  // optional version for all children, so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explode _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue
  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/")));
  // Then, if this is an optional value, add all child versions without
  if (isOptional) {
    result.push(...restExploded);
  }
  // for absolute paths, ensure `/` instead of empty segment
  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = s => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ?
  // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] :
  // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */
function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }
  let path = originalPath;
  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  }
  // ensure `/` is added at the beginning if the path is absolute
  const prefix = path.startsWith("/") ? "/" : "";
  const stringify = p => p == null ? "" : typeof p === "string" ? p : String(p);
  const segments = path.split(/\/+/).map((segment, index, array) => {
    const isLastSegment = index === array.length - 1;
    // only apply the splat if it's the last segment
    if (isLastSegment && segment === "*") {
      const star = "*";
      // Apply the splat
      return stringify(params[star]);
    }
    const keyMatch = segment.match(/^:(\w+)(\??)$/);
    if (keyMatch) {
      const [, key, optional] = keyMatch;
      let param = params[key];
      invariant(optional === "?" || param != null, "Missing \":" + key + "\" param");
      return stringify(param);
    }
    // Remove any optional markers from optional static segments
    return segment.replace(/\?$/g, "");
  })
  // Remove empty segments
  .filter(segment => !!segment);
  return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo[paramName] = undefined;
    } else {
      memo[paramName] = safelyDecodeURIComponent(value || "", paramName);
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:(\w+)(\?)?/g, (_, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, params];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  // Ensure the pathname has a trailing slash if the original "to" had one
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  // Or if this was a link to the current path which has a trailing slash
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
/**
 * @private
 */
function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */
const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */
const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */
const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */
const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */
const json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }
  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class AbortedDeferredError extends Error {}
class DeferredData {
  constructor(data, responseInit) {
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.deferredKeys = [];
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
    // Set up an AbortController + Promise we can race against to exit early
    // cancellation
    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();
    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));
    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);
    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});
    if (this.done) {
      // All incoming values were resolved
      this.unlistenAbortSignal();
    }
    this.init = responseInit;
  }
  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }
    this.deferredKeys.push(key);
    this.pendingKeysSet.add(key);
    // We store a little wrapper promise that will be extended with
    // _data/_error props upon resolve/reject
    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, undefined, data), error => this.onSettle(promise, key, error));
    // Register rejection listeners to avoid uncaught promise rejections on
    // errors or aborted deferred values
    promise.catch(() => {});
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }
  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }
    this.pendingKeysSet.delete(key);
    if (this.done) {
      // Nothing left to abort!
      this.unlistenAbortSignal();
    }
    // If the promise was resolved/rejected with undefined, we'll throw an error as you
    // should always resolve with a value or null
    if (error === undefined && data === undefined) {
      let undefinedError = new Error("Deferred data for key \"" + key + "\" resolved/rejected with `undefined`, " + "you must resolve/reject with a value or `null`.");
      Object.defineProperty(promise, "_error", {
        get: () => undefinedError
      });
      this.emit(false, key);
      return Promise.reject(undefinedError);
    }
    if (data === undefined) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      this.emit(false, key);
      return Promise.reject(error);
    }
    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    this.emit(false, key);
    return data;
  }
  emit(aborted, settledKey) {
    this.subscribers.forEach(subscriber => subscriber(aborted, settledKey));
  }
  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }
  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
    this.emit(true);
  }
  async resolveData(signal) {
    let aborted = false;
    if (!this.done) {
      let onAbort = () => this.cancel();
      signal.addEventListener("abort", onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted => {
          signal.removeEventListener("abort", onAbort);
          if (aborted || this.done) {
            resolve(aborted);
          }
        });
      });
    }
    return aborted;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref3) => {
      let [key, value] = _ref3;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }
  if (value._error) {
    throw value._error;
  }
  return value._data;
}
const defer = function defer(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const redirectDocument = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Reload-Document", "true");
  return response;
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */
class ErrorResponseImpl {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }
}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
const IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
const IDLE_BLOCKER = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const defaultMapRouteProperties = route => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
const TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
  const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  const isServer = !isBrowser;
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let mapRouteProperties;
  if (init.mapRouteProperties) {
    mapRouteProperties = init.mapRouteProperties;
  } else if (init.detectErrorBoundary) {
    // If they are still using the deprecated version, wrap it with the new API
    let detectErrorBoundary = init.detectErrorBoundary;
    mapRouteProperties = route => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  // Routes keyed by ID
  let manifest = {};
  // Routes in tree format for matching
  let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, undefined, manifest);
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  // Config driven behavior flags
  let future = _extends({
    v7_fetcherPersist: false,
    v7_normalizeFormMethod: false,
    v7_prependBasename: false
  }, init.future);
  // Cleanup function for history
  let unlistenHistory = null;
  // Externally-provided functions to call on all state changes
  let subscribers = new Set();
  // Externally-provided object to hold scroll restoration locations during routing
  let savedScrollPositions = null;
  // Externally-provided function to get scroll restoration keys
  let getScrollRestorationKey = null;
  // Externally-provided function to get current scroll position
  let getScrollPosition = null;
  // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialErrors = null;
  if (initialMatches == null) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }
  let initialized =
  // All initialMatches need to be loaded before we're ready.  If we have lazy
  // functions around still then we'll need to run them in initialize()
  !initialMatches.some(m => m.route.lazy) && (
  // And we have to either have no loaders or have been provided hydrationData
  !initialMatches.some(m => m.route.loader) || init.hydrationData != null);
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map(),
    blockers: new Map()
  };
  // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)
  let pendingAction = Action.Pop;
  // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?
  let pendingPreventScrollReset = false;
  // AbortController for the active navigation
  let pendingNavigationController;
  // Should the current navigation enable document.startViewTransition?
  let pendingViewTransitionEnabled = false;
  // Store applied view transitions so we can apply them on POP
  let appliedViewTransitions = new Map();
  // Cleanup function for persisting applied transitions to sessionStorage
  let removePageHideEventListener = null;
  // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted
  let isUninterruptedRevalidation = false;
  // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidator()
  //  - X-Remix-Revalidate (from redirect)
  let isRevalidationRequired = false;
  // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission
  let cancelledDeferredRoutes = [];
  // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation
  let cancelledFetcherLoads = [];
  // AbortControllers for any in-flight fetchers
  let fetchControllers = new Map();
  // Track loads based on the order in which they started
  let incrementingLoadId = 0;
  // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation
  let pendingNavigationLoadId = -1;
  // Fetchers that triggered data reloads as a result of their actions
  let fetchReloadIds = new Map();
  // Fetchers that triggered redirect navigations
  let fetchRedirectIds = new Set();
  // Most recent href/match for fetcher.load calls for fetchers
  let fetchLoadMatches = new Map();
  // Ref-count mounted fetchers so we know when it's ok to clean them up
  let activeFetchers = new Map();
  // Fetchers that have requested a delete when using v7_fetcherPersist,
  // they'll be officially removed after they return to idle
  let deletedFetchers = new Set();
  // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.
  let activeDeferreds = new Map();
  // Store blocker functions in a separate Map outside of router state since
  // we don't need to update UI state if they change
  let blockerFunctions = new Map();
  // Flag to ignore the next history update, so we can revert the URL change on
  // a POP navigation that was blocked by the user without touching router state
  let ignoreNextHistoryUpdate = false;
  // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();
  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(_ref => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;
      // Ignore this event if it was just us resetting the URL from a
      // blocked POP navigation
      if (ignoreNextHistoryUpdate) {
        ignoreNextHistoryUpdate = false;
        return;
      }
      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });
      if (blockerKey && delta != null) {
        // Restore the URL to match the current UI, but don't update router state
        ignoreNextHistoryUpdate = true;
        init.history.go(delta * -1);
        // Put the blocker into a blocked state
        updateBlocker(blockerKey, {
          state: "blocked",
          location,
          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location
            });
            // Re-do the same POP navigation we just blocked
            init.history.go(delta);
          },
          reset() {
            let blockers = new Map(state.blockers);
            blockers.set(blockerKey, IDLE_BLOCKER);
            updateState({
              blockers
            });
          }
        });
        return;
      }
      return startNavigation(historyAction, location);
    });
    if (isBrowser) {
      // FIXME: This feels gross.  How can we cleanup the lines between
      // scrollRestoration/appliedTransitions persistance?
      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
      let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
      removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
    }
    // Kick off initial data load if needed.  Use Pop to avoid modifying history
    // Note we don't do any handling of lazy here.  For SPA's it'll get handled
    // in the normal navigation flow.  For SSR it's expected that lazy modules are
    // resolved prior to router creation since we can't go into a fallbackElement
    // UI for SSR'd apps
    if (!state.initialized) {
      startNavigation(Action.Pop, state.location);
    }
    return router;
  }
  // Clean up a router and it's side effects
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    if (removePageHideEventListener) {
      removePageHideEventListener();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  // Subscribe to state updates for the router
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  // Update our state and notify the calling context of the change
  function updateState(newState, viewTransitionOpts) {
    state = _extends({}, state, newState);
    // Prep fetcher cleanup so we can tell the UI which fetcher data entries
    // can be removed
    let completedFetchers = [];
    let deletedFetchersKeys = [];
    if (future.v7_fetcherPersist) {
      state.fetchers.forEach((fetcher, key) => {
        if (fetcher.state === "idle") {
          if (deletedFetchers.has(key)) {
            // Unmounted from the UI and can be totally removed
            deletedFetchersKeys.push(key);
          } else {
            // Returned to idle but still mounted in the UI, so semi-remains for
            // revalidations and such
            completedFetchers.push(key);
          }
        }
      });
    }
    subscribers.forEach(subscriber => subscriber(state, {
      deletedFetchers: deletedFetchersKeys,
      unstable_viewTransitionOpts: viewTransitionOpts
    }));
    // Remove idle fetchers from state since we only care about in-flight fetchers.
    if (future.v7_fetcherPersist) {
      completedFetchers.forEach(key => state.fetchers.delete(key));
      deletedFetchersKeys.forEach(key => deleteFetcher(key));
    }
  }
  // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState
  function completeNavigation(location, newState) {
    var _location$state, _location$state2;
    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a mutation submission
    // - We're past the submitting state and into the loading state
    // - The location being loaded is not the result of a redirect
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    }
    // Always preserve any existing loaderData from re-used routes
    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
    // On a successful navigation we can assume we got through all blockers
    // so we can start fresh
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
    }
    // Always respect the user flag.  Otherwise don't reset on mutation
    // submission navigations unless they redirect
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = undefined;
    }
    if (isUninterruptedRevalidation) ; else if (pendingAction === Action.Pop) ; else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    }
    let viewTransitionOpts;
    // On POP, enable transitions if they were enabled on the original navigation
    if (pendingAction === Action.Pop) {
      // Forward takes precedence so they behave like the original navigation
      let priorPaths = appliedViewTransitions.get(state.location.pathname);
      if (priorPaths && priorPaths.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location
        };
      } else if (appliedViewTransitions.has(location.pathname)) {
        // If we don't have a previous forward nav, assume we're popping back to
        // the new location and enable if that location previously enabled
        viewTransitionOpts = {
          currentLocation: location,
          nextLocation: state.location
        };
      }
    } else if (pendingViewTransitionEnabled) {
      // Store the applied transition on PUSH/REPLACE
      let toPaths = appliedViewTransitions.get(state.location.pathname);
      if (toPaths) {
        toPaths.add(location.pathname);
      } else {
        toPaths = new Set([location.pathname]);
        appliedViewTransitions.set(state.location.pathname, toPaths);
      }
      viewTransitionOpts = {
        currentLocation: state.location,
        nextLocation: location
      };
    }
    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers
    }), viewTransitionOpts);
    // Reset stateful navigation vars
    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    pendingViewTransitionEnabled = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  }
  // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission
  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
    // URL from window.location, so we need to encode it here so the behavior
    // remains the same as POP and non-data-router usages.  new URL() does all
    // the same encoding we'd get from a history.pushState/window.location read
    // without having to touch history
    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = Action.Push;
    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      // By default on submissions to the current location we REPLACE so that
      // users don't have to double-click the back button to get to the prior
      // location.  If the user redirects to a different location from the
      // action/loader this will be ignored and the redirect will be a PUSH
      historyAction = Action.Replace;
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      // Put the blocker into a blocked state
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: undefined,
            reset: undefined,
            location: nextLocation
          });
          // Send the same navigation through
          navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({
            blockers
          });
        }
      });
      return;
    }
    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace,
      enableViewTransition: opts && opts.unstable_viewTransition
    });
  }
  // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round
  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    });
    // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders
    if (state.navigation.state === "submitting") {
      return;
    }
    // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    }
    // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes
    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  }
  // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation
  async function startNavigation(historyAction, location, opts) {
    // Abort any in-progress navigations and start a new one. Unset any ongoing
    // uninterrupted revalidations unless told otherwise, since we want this
    // new navigation to update history normally
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    // Save the current scroll position every time we start a new navigation,
    // and track whether we should reset scroll on completion
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(routesToUse, location, basename);
    // Short circuit with a 404 on the root error boundary if we match nothing
    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(routesToUse);
      // Cancel all pending deferred on 404s since we don't keep any routes
      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      });
      return;
    }
    // Short circuit if it's only a hash change and not a revalidation or
    // mutation submission.
    //
    // Ignore on initial page loads because since the initial load will always
    // be "same hash".  For example, on /page#hash and submit a <Form method="post">
    // which will default to a navigation to /page
    if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      });
      return;
    }
    // Create a controller/Request for this navigation
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionData;
    let pendingError;
    if (opts && opts.pendingError) {
      // If we have a pendingError, it means the user attempted a GET submission
      // with binary FormData so assign here and skip to handleLoaders.  That
      // way we handle calling loaders above the boundary etc.  It's not really
      // different from an actionError in that sense.
      pendingError = {
        [findNearestBoundary(matches).route.id]: opts.pendingError
      };
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      // Call action if we received an action submission
      let actionOutput = await handleAction(request, location, opts.submission, matches, {
        replace: opts.replace
      });
      if (actionOutput.shortCircuited) {
        return;
      }
      pendingActionData = actionOutput.pendingActionData;
      pendingError = actionOutput.pendingActionError;
      loadingNavigation = getLoadingNavigation(location, opts.submission);
      // Create a GET request for the loaders
      request = new Request(request.url, {
        signal: request.signal
      });
    }
    // Call loaders
    let {
      shortCircuited,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, pendingActionData, pendingError);
    if (shortCircuited) {
      return;
    }
    // Clean up now that the action/loaders have completed.  Don't clean up if
    // we short circuited because pendingNavigationController will have already
    // been assigned to a new controller for the next navigation
    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches
    }, pendingActionData ? {
      actionData: pendingActionData
    } : {}, {
      loaderData,
      errors
    }));
  }
  // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors
  async function handleAction(request, location, submission, matches, opts) {
    if (opts === void 0) {
      opts = {};
    }
    interruptActiveLoads();
    // Put us in a submitting state
    let navigation = getSubmittingNavigation(location, submission);
    updateState({
      navigation
    });
    // Call our action and get the result
    let result;
    let actionMatch = getTargetMatch(matches, location);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename);
      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }
    if (isRedirectResult(result)) {
      let replace;
      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        // If the user didn't explicity indicate replace behavior, replace if
        // we redirected to the exact same location we're currently at to avoid
        // double back-buttons
        replace = result.location === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(state, result, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }
    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      // By default, all submissions are REPLACE navigations, but if the
      // action threw an error that'll be rendered in an errorElement, we fall
      // back to PUSH so that the user can use the back button to get back to
      // the pre-submission form location to try again
      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }
      return {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [boundaryMatch.route.id]: result.error
        }
      };
    }
    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    return {
      pendingActionData: {
        [actionMatch.route.id]: result.data
      }
    };
  }
  // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.
  async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, pendingActionData, pendingError) {
    // Figure out the right navigation we want to use for data loading
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
    // If this was a redirect from an action we don't have a "submission" but
    // we have it on the loading navigation so use that if available
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError);
    // Cancel pending deferreds for no-longer-matched routes or routes we're
    // about to reload.  Note that if this is an action reload we would have
    // already cancelled all pending deferreds so this would be a no-op
    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId));
    pendingNavigationLoadId = ++incrementingLoadId;
    // Short circuit if we have no loaders to run
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers = markFetchRedirectsDone();
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingError || null
      }, pendingActionData ? {
        actionData: pendingActionData
      } : {}, updatedFetchers ? {
        fetchers: new Map(state.fetchers)
      } : {}));
      return {
        shortCircuited: true
      };
    }
    // If this is an uninterrupted revalidation, we remain in our current idle
    // state.  If not, we need to switch to our loading state and load data,
    // preserving any new action data or existing action data (in the case of
    // a revalidation interrupting an actionReload)
    if (!isUninterruptedRevalidation) {
      revalidatingFetchers.forEach(rf => {
        let fetcher = state.fetchers.get(rf.key);
        let revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
        state.fetchers.set(rf.key, revalidatingFetcher);
      });
      let actionData = pendingActionData || state.actionData;
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData ? Object.keys(actionData).length === 0 ? {
        actionData: null
      } : {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
    }
    revalidatingFetchers.forEach(rf => {
      if (fetchControllers.has(rf.key)) {
        abortFetcher(rf.key);
      }
      if (rf.controller) {
        // Fetchers use an independent AbortController so that aborting a fetcher
        // (via deleteFetcher) does not abort the triggering navigation that
        // triggered the revalidation
        fetchControllers.set(rf.key, rf.controller);
      }
    });
    // Proxy navigation abort through to revalidation fetchers
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach(f => abortFetcher(f.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    }
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    }
    // Clean up _after_ loaders have completed.  Don't clean up if we short
    // circuited because fetchControllers would have been aborted and
    // reassigned to new controllers for the next navigation
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    }
    revalidatingFetchers.forEach(rf => fetchControllers.delete(rf.key));
    // If any loaders returned a redirect Response, start a new REPLACE navigation
    let redirect = findRedirect(results);
    if (redirect) {
      if (redirect.idx >= matchesToLoad.length) {
        // If this redirect came from a fetcher make sure we mark it in
        // fetchRedirectIds so it doesn't get revalidated on the next set of
        // loader executions
        let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      await startRedirectNavigation(state, redirect.result, {
        replace
      });
      return {
        shortCircuited: true
      };
    }
    // Process and commit output from loaders
    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds);
    // Wire up subscribers to update loaderData as promises settle
    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        // Note: No need to updateState here since the TrackedPromise on
        // loaderData is stable across resolve/reject
        // Remove this instance if we were aborted or if promises have settled
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return _extends({
      loaderData,
      errors
    }, shouldUpdateFetchers ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }
  function getFetcher(key) {
    if (future.v7_fetcherPersist) {
      activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
      // If this fetcher was previously marked for deletion, unmark it since we
      // have a new instance
      if (deletedFetchers.has(key)) {
        deletedFetchers.delete(key);
      }
    }
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  // Trigger a fetcher load/submit for the given fetcher key
  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }
    if (fetchControllers.has(key)) abortFetcher(key);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, routeId, opts == null ? void 0 : opts.relative);
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: normalizedPath
      }));
      return;
    }
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
    if (error) {
      setFetcherError(key, routeId, error);
      return;
    }
    let match = getTargetMatch(matches, path);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    }
    // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations
    fetchLoadMatches.set(key, {
      routeId,
      path
    });
    handleFetcherLoader(key, routeId, path, match, matches, submission);
  }
  // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation
  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    if (!match.route.action && !match.route.lazy) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId: routeId
      });
      setFetcherError(key, routeId, error);
      return;
    }
    // Put this fetcher into it's submitting state
    let existingFetcher = state.fetchers.get(key);
    let fetcher = getSubmittingFetcher(submission, existingFetcher);
    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
    // Call the action for the fetcher
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, manifest, mapRouteProperties, basename);
    if (fetchRequest.signal.aborted) {
      // We can delete this so long as we weren't aborted by our own fetcher
      // re-submit which would have put _new_ controller is in fetchControllers
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    if (deletedFetchers.has(key)) {
      state.fetchers.set(key, getDoneFetcher(undefined));
      updateState({
        fetchers: new Map(state.fetchers)
      });
      return;
    }
    if (isRedirectResult(actionResult)) {
      fetchControllers.delete(key);
      if (pendingNavigationLoadId > originatingLoadId) {
        // A new navigation was kicked off after our action started, so that
        // should take precedence over this redirect navigation.  We already
        // set isRevalidationRequired so all loaders for the new route should
        // fire unless opted out via shouldRevalidate
        let doneFetcher = getDoneFetcher(undefined);
        state.fetchers.set(key, doneFetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        });
        return;
      } else {
        fetchRedirectIds.add(key);
        let loadingFetcher = getLoadingFetcher(submission);
        state.fetchers.set(key, loadingFetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        });
        return startRedirectNavigation(state, actionResult, {
          fetcherSubmission: submission
        });
      }
    }
    // Process any non-redirect errors thrown
    if (isErrorResult(actionResult)) {
      setFetcherError(key, routeId, actionResult.error);
      return;
    }
    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    // Start the data load for current matches, or the next location if we're
    // in the middle of a navigation
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, {
      [match.route.id]: actionResult.data
    }, undefined // No need to send through errors since we short circuit above
    );
    // Put all revalidating fetchers into the loading state, except for the
    // current fetcher which we want to keep in it's current loading state which
    // contains it's action submission info + action data
    revalidatingFetchers.filter(rf => rf.key !== key).forEach(rf => {
      let staleKey = rf.key;
      let existingFetcher = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
      state.fetchers.set(staleKey, revalidatingFetcher);
      if (fetchControllers.has(staleKey)) {
        abortFetcher(staleKey);
      }
      if (rf.controller) {
        fetchControllers.set(staleKey, rf.controller);
      }
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach(rf => abortFetcher(rf.key));
    abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(r => fetchControllers.delete(r.key));
    let redirect = findRedirect(results);
    if (redirect) {
      if (redirect.idx >= matchesToLoad.length) {
        // If this redirect came from a fetcher make sure we mark it in
        // fetchRedirectIds so it doesn't get revalidated on the next set of
        // loader executions
        let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      return startRedirectNavigation(state, redirect.result);
    }
    // Process and commit output from loaders
    let {
      loaderData,
      errors
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
    // Since we let revalidations complete even if the submitting fetcher was
    // deleted, only put it back to idle if it hasn't been deleted
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    abortStaleFetchLoads(loadId);
    // If we are currently in a navigation loading state and this fetcher is
    // more recent than the navigation, we want the newer data so abort the
    // navigation and complete it with the fetcher data
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      // otherwise just update with the fetcher data, preserving any existing
      // loaderData for loaders that did not need to reload.  We have to
      // manually merge here since we aren't going through completeNavigation
      updateState({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
        fetchers: new Map(state.fetchers)
      });
      isRevalidationRequired = false;
    }
  }
  // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
  async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
    let existingFetcher = state.fetchers.get(key);
    // Put this fetcher into it's loading state
    let loadingFetcher = getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined);
    state.fetchers.set(key, loadingFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
    // Call the loader for this fetcher route match
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let result = await callLoaderOrAction("loader", fetchRequest, match, matches, manifest, mapRouteProperties, basename);
    // Deferred isn't supported for fetcher loads, await everything and treat it
    // as a normal load.  resolveDeferredData will return undefined if this
    // fetcher gets aborted, so we just leave result untouched and short circuit
    // below if that happens
    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    }
    // We can delete this so long as we weren't aborted by our our own fetcher
    // re-load which would have put _new_ controller is in fetchControllers
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    if (deletedFetchers.has(key)) {
      state.fetchers.set(key, getDoneFetcher(undefined));
      updateState({
        fetchers: new Map(state.fetchers)
      });
      return;
    }
    // If the loader threw a redirect Response, start a new REPLACE navigation
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        // A new navigation was kicked off after our loader started, so that
        // should take precedence over this redirect navigation
        let doneFetcher = getDoneFetcher(undefined);
        state.fetchers.set(key, doneFetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        });
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(state, result);
        return;
      }
    }
    // Process any non-redirect errors thrown
    if (isErrorResult(result)) {
      setFetcherError(key, routeId, result.error);
      return;
    }
    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
    // Put the fetcher back into an idle state
    let doneFetcher = getDoneFetcher(result.data);
    state.fetchers.set(key, doneFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */
  async function startRedirectNavigation(state, redirect, _temp) {
    let {
      submission,
      fetcherSubmission,
      replace
    } = _temp === void 0 ? {} : _temp;
    if (redirect.revalidate) {
      isRevalidationRequired = true;
    }
    let redirectLocation = createLocation(state.location, redirect.location, {
      _isRedirect: true
    });
    invariant(redirectLocation, "Expected a location on the redirect navigation");
    if (isBrowser) {
      let isDocumentReload = false;
      if (redirect.reloadDocument) {
        // Hard reload if the response contained X-Remix-Reload-Document
        isDocumentReload = true;
      } else if (ABSOLUTE_URL_REGEX.test(redirect.location)) {
        const url = init.history.createURL(redirect.location);
        isDocumentReload =
        // Hard reload if it's an absolute URL to a new origin
        url.origin !== routerWindow.location.origin ||
        // Hard reload if it's an absolute URL that does not match our basename
        stripBasename(url.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace) {
          routerWindow.location.replace(redirect.location);
        } else {
          routerWindow.location.assign(redirect.location);
        }
        return;
      }
    }
    // There's no need to abort on redirects, since we don't detect the
    // redirect until the action/loaders have settled
    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
    // Use the incoming submission if provided, fallback on the active one in
    // state.navigation
    let {
      formMethod,
      formAction,
      formEncType
    } = state.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state.navigation);
    }
    // If this was a 307/308 submission we want to preserve the HTTP method and
    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
    // redirected location
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, activeSubmission, {
          formAction: redirect.location
        }),
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    } else {
      // If we have a navigation submission, we will preserve it through the
      // redirect navigation
      let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission,
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    }
  }
  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    // Call all navigation loaders and revalidating fetcher loaders in parallel,
    // then slice off the results into separate arrays so we can handle them
    // accordingly
    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename)), ...fetchersToLoad.map(f => {
      if (f.matches && f.match && f.controller) {
        return callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, f.controller.signal), f.match, f.matches, manifest, mapRouteProperties, basename);
      } else {
        let error = {
          type: ResultType.error,
          error: getInternalRouterError(404, {
            pathname: f.path
          })
        };
        return error;
      }
    })]);
    let loaderResults = results.slice(0, matchesToLoad.length);
    let fetcherResults = results.slice(matchesToLoad.length);
    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(() => request.signal), false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(f => f.match), fetcherResults, fetchersToLoad.map(f => f.controller ? f.controller.signal : null), true)]);
    return {
      results,
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    // Every interruption triggers a revalidation
    isRevalidationRequired = true;
    // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation
    cancelledDeferredRoutes.push(...cancelActiveDeferreds());
    // Abort in-flight fetcher loads
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }
  function setFetcherError(key, routeId, error) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    });
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    // Don't abort the controller if this is a deletion of a fetcher.submit()
    // in it's loading phase since - we don't want to abort the corresponding
    // revalidation and want them to complete and land
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    deletedFetchers.delete(key);
    state.fetchers.delete(key);
  }
  function deleteFetcherAndUpdateState(key) {
    if (future.v7_fetcherPersist) {
      let count = (activeFetchers.get(key) || 0) - 1;
      if (count <= 0) {
        activeFetchers.delete(key);
        deletedFetchers.add(key);
      } else {
        activeFetchers.set(key, count);
      }
    } else {
      deleteFetcher(key);
    }
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  // Utility function to update blockers, ensuring valid state transitions
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    // Poor mans state machine :)
    // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({
      blockers
    });
  }
  function shouldBlockNavigation(_ref2) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref2;
    if (blockerFunctions.size === 0) {
      return;
    }
    // We ony support a single active blocker at the moment since we don't have
    // any compelling use cases for multi-blocker yet
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      // If the blocker is currently proceeding, we don't need to re-check
      // it and can let this navigation continue
      return;
    }
    // At this point, we know we're unblocked/blocked so we need to check the
    // user-provided blocker function
    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return blockerKey;
    }
  }
  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  }
  // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey = getKey || null;
    // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }
    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }
  function getScrollKey(location, matches) {
    if (getScrollRestorationKey) {
      let key = getScrollRestorationKey(location, matches.map(m => convertRouteMatchToUiMatch(m, state.loaderData)));
      return key || location.key;
    }
    return location.key;
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollPosition) {
      let key = getScrollKey(location, matches);
      savedScrollPositions[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions) {
      let key = getScrollKey(location, matches);
      let y = savedScrollPositions[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, undefined, manifest);
  }
  router = {
    get basename() {
      return basename;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return routerWindow;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: to => init.history.createHref(to),
    encodeLocation: to => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher: deleteFetcherAndUpdateState,
    dispose,
    getBlocker,
    deleteBlocker,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let manifest = {};
  let basename = (opts ? opts.basename : null) || "/";
  let mapRouteProperties;
  if (opts != null && opts.mapRouteProperties) {
    mapRouteProperties = opts.mapRouteProperties;
  } else if (opts != null && opts.detectErrorBoundary) {
    // If they are still using the deprecated version, wrap it with the new API
    let detectErrorBoundary = opts.detectErrorBoundary;
    mapRouteProperties = route => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, undefined, manifest);
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */
  async function query(request, _temp2) {
    let {
      requestContext
    } = _temp2 === void 0 ? {} : _temp2;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    // SSR supports HEAD requests while SPA doesn't
    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    let result = await queryImpl(request, location, matches, requestContext);
    if (isResponse(result)) {
      return result;
    }
    // When returning StaticHandlerContext, we patch back in the location here
    // since we need it for React Context.  But this helps keep our submit and
    // loadRouteData operating on a Request instead of a Location
    return _extends({
      location,
      basename
    }, result);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */
  async function queryRoute(request, _temp3) {
    let {
      routeId,
      requestContext
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    // SSR supports HEAD requests while SPA doesn't
    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);
    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      // This should never hit I don't think?
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let result = await queryImpl(request, location, matches, requestContext, match);
    if (isResponse(result)) {
      return result;
    }
    let error = result.errors ? Object.values(result.errors)[0] : undefined;
    if (error !== undefined) {
      // If we got back result.errors, that means the loader/action threw
      // _something_ that wasn't a Response, but it's not guaranteed/required
      // to be an `instanceof Error` either, so we have to use throw here to
      // preserve the "error" state outside of queryImpl.
      throw error;
    }
    // Pick off the right state value to return
    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }
    if (result.loaderData) {
      var _result$activeDeferre;
      let data = Object.values(result.loaderData)[0];
      if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
        data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
      }
      return data;
    }
    return undefined;
  }
  async function queryImpl(request, location, matches, requestContext, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
        return result;
      }
      let result = await loadRouteData(request, matches, requestContext, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      // If the user threw/returned a Response in callLoaderOrAction, we throw
      // it to bail out and then return or throw here based on whether the user
      // returned or threw
      if (isQueryRouteResponse(e)) {
        if (e.type === ResultType.error) {
          throw e.response;
        }
        return e.response;
      }
      // Redirects are always returned since they don't propagate to catch
      // boundaries
      if (isRedirectResponse(e)) {
        return e;
      }
      throw e;
    }
  }
  async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
    let result;
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, {
        isStaticRequest: true,
        isRouteRequest,
        requestContext
      });
      if (request.signal.aborted) {
        let method = isRouteRequest ? "queryRoute" : "query";
        throw new Error(method + "() call aborted: " + request.method + " " + request.url);
      }
    }
    if (isRedirectResult(result)) {
      // Uhhhh - this should never happen, we should always throw these from
      // callLoaderOrAction, but the type narrowing here keeps TS happy and we
      // can get back on the "throw all redirect responses" train here should
      // this ever happen :/
      throw new Response(null, {
        status: result.status,
        headers: {
          Location: result.location
        }
      });
    }
    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    }
    if (isRouteRequest) {
      // Note: This should only be non-Response values if we get here, since
      // isRouteRequest should throw any Response received in callLoaderOrAction
      if (isErrorResult(result)) {
        throw result.error;
      }
      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      let context = await loadRouteData(request, matches, requestContext, undefined, {
        [boundaryMatch.route.id]: result.error
      });
      // action status codes take precedence over loader status codes
      return _extends({}, context, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    }
    // Create a GET request for the loaders
    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    let context = await loadRouteData(loaderRequest, matches, requestContext);
    return _extends({}, context, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionData: {
        [actionMatch.route.id]: result.data
      },
      actionHeaders: _extends({}, result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {})
    });
  }
  async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
    let isRouteRequest = routeMatch != null;
    // Short circuit if we have no loaders to run (queryRoute())
    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }
    let requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
    let matchesToLoad = requestMatches.filter(m => m.route.loader || m.route.lazy);
    // Short circuit if we have no loaders to run (query())
    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionError || null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    }
    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename, {
      isStaticRequest: true,
      isRouteRequest,
      requestContext
    }))]);
    if (request.signal.aborted) {
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted: " + request.method + " " + request.url);
    }
    // Process and commit output from loaders
    let activeDeferreds = new Map();
    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds);
    // Add a null for any non-loader matches for proper revalidation on the client
    let executedLoaders = new Set(matchesToLoad.map(match => match.route.id));
    matches.forEach(match => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }
  return {
    dataRoutes,
    query,
    queryRoute
  };
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */
function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });
  return newContext;
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function normalizeTo(location, matches, basename, prependBasename, to, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId != null && relative !== "path") {
    // Grab matches up to the calling route so our route-relative logic is
    // relative to the correct source route.  When using relative:path,
    // fromRouteId is ignored since that is always relative to the current
    // location path
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  // Resolve the relative path
  let path = resolveTo(to ? to : ".", getPathContributingMatches(contextualMatches).map(m => m.pathnameBase), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
  // When `to` is not specified we inherit search/hash from the current
  // location, unlike when to="." and we just inherit the path.
  // See https://github.com/remix-run/remix/issues/927
  if (to == null) {
    path.search = location.search;
    path.hash = location.hash;
  }
  // Add an ?index param for matched index routes if we don't already have one
  if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !hasNakedIndexQuery(path.search)) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  // If we're operating within a basename, prepend it to the pathname.  If
  // this is a root navigation, then just use the raw basename which allows
  // the basename to have full control over the presence of a trailing slash
  // on root actions
  if (prependBasename && basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
  // Return location verbatim on non-submission navigations
  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, {
      type: "invalid-body"
    })
  });
  // Create a Submission on non-GET navigations
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== undefined) {
    if (opts.formEncType === "text/plain") {
      // text only support POST/PUT/PATCH/DELETE submissions
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ?
      // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
      Array.from(opts.body.entries()).reduce((acc, _ref3) => {
        let [name, value] = _ref3;
        return "" + acc + name + "=" + value + "\n";
      }, "") : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: undefined,
          json: undefined,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      // json only supports POST/PUT/PATCH/DELETE submissions
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: undefined,
            json,
            text: undefined
          }
        };
      } catch (e) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(typeof FormData === "function", "FormData is not available in this environment");
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams();
    formData = new FormData();
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: undefined,
    text: undefined
  };
  if (isMutationMethod(submission.formMethod)) {
    return {
      path,
      submission
    };
  }
  // Flatten submission onto URLSearchParams for GET submissions
  let parsedPath = parsePath(path);
  // On GET navigation submissions we can drop the ?index param from the
  // resulting location since all loaders will run.  But fetcher GET submissions
  // only run a single loader so we need to preserve any incoming ?index params
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission
  };
}
// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;
  if (boundaryId) {
    let index = matches.findIndex(m => m.route.id === boundaryId);
    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }
  return boundaryMatches;
}
function getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError) {
  let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  // Pick navigation matches that are net-new or qualify for revalidation
  let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
  let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
  let navigationMatches = boundaryMatches.filter((match, index) => {
    if (match.route.lazy) {
      // We haven't loaded this route yet so we don't know if it's got a loader!
      return true;
    }
    if (match.route.loader == null) {
      return false;
    }
    // Always call the loader on new route instances and pending defer cancellations
    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(id => id === match.route.id)) {
      return true;
    }
    // This is the default implementation for when we revalidate.  If the route
    // provides it's own implementation, then we give them full control but
    // provide this value so they can leverage it if needed after they check
    // their own specific use cases
    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      defaultShouldRevalidate:
      // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
      isRevalidationRequired ||
      // Clicked the same link, resubmitted a GET form
      currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search ||
      // Search params affect all loaders
      currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
    }));
  });
  // Pick fetcher.loads that need to be revalidated
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    // Don't revalidate if fetcher won't be present in the subsequent render
    if (!matches.some(m => m.route.id === f.routeId)) {
      return;
    }
    let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
    // If the fetcher path no longer matches, push it in with null matches so
    // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
    // currently only a use-case for Remix HMR where the route tree can change
    // at runtime and remove a route previously loaded via a fetcher
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    // Revalidating fetchers are decoupled from the route matches since they
    // load from a static href.  They revalidate based on explicit revalidation
    // (submission, useRevalidator, or X-Remix-Revalidate)
    let fetcher = state.fetchers.get(key);
    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
    let shouldRevalidate = false;
    if (fetchRedirectIds.has(key)) {
      // Never trigger a revalidation of an actively redirecting fetcher
      shouldRevalidate = false;
    } else if (cancelledFetcherLoads.includes(key)) {
      // Always revalidate if the fetcher was cancelled
      shouldRevalidate = true;
    } else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) {
      // If the fetcher hasn't ever completed loading yet, then this isn't a
      // revalidation, it would just be a brand new load if an explicit
      // revalidation is required
      shouldRevalidate = isRevalidationRequired;
    } else {
      // Otherwise fall back on any user-defined shouldRevalidate, defaulting
      // to explicit revalidations only
      shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params
      }, submission, {
        actionResult,
        defaultShouldRevalidate: isRevalidationRequired
      }));
    }
    if (shouldRevalidate) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: fetcherMatches,
        match: fetcherMatch,
        controller: new AbortController()
      });
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew =
  // [a] -> [a, b]
  !currentMatch ||
  // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id;
  // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred
  let isMissingData = currentLoaderData[match.route.id] === undefined;
  // Always load if this is a net-new route or we don't yet have data
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname ||
    // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */
async function loadLazyRouteModule(route, mapRouteProperties, manifest) {
  if (!route.lazy) {
    return;
  }
  let lazyRoute = await route.lazy();
  // If the lazy route function was executed and removed by another parallel
  // call then we can return - first lazy() to finish wins because the return
  // value of lazy is expected to be static
  if (!route.lazy) {
    return;
  }
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  // Update the route in place.  This should be safe because there's no way
  // we could yet be sitting on this route as we can't get there without
  // resolving lazy() first.
  //
  // This is different than the HMR "update" use-case where we may actively be
  // on the route being updated.  The main concern boils down to "does this
  // mutation affect any ongoing navigations or any current state.matches
  // values?".  If not, it should be safe to update in place.
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== undefined &&
    // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(!isPropertyStaticallyDefined, "Route \"" + routeToUpdate.id + "\" has a static property \"" + lazyRouteProperty + "\" " + "defined but its lazy function is also returning a value for this property. " + ("The lazy route property \"" + lazyRouteProperty + "\" will be ignored."));
    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  }
  // Mutate the route with the provided updates.  Do this first so we pass
  // the updated version to mapRouteProperties
  Object.assign(routeToUpdate, routeUpdates);
  // Mutate the `hasErrorBoundary` property on the route based on the route
  // updates and remove the `lazy` function so we don't resolve the lazy
  // route again.
  Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
    lazy: undefined
  }));
}
async function callLoaderOrAction(type, request, match, matches, manifest, mapRouteProperties, basename, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let resultType;
  let result;
  let onReject;
  let runHandler = handler => {
    // Setup a promise we can race against so that abort signals short circuit
    let reject;
    let abortPromise = new Promise((_, r) => reject = r);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    return Promise.race([handler({
      request,
      params: match.params,
      context: opts.requestContext
    }), abortPromise]);
  };
  try {
    let handler = match.route[type];
    if (match.route.lazy) {
      if (handler) {
        // Run statically defined handler in parallel with lazy()
        let handlerError;
        let values = await Promise.all([
        // If the handler throws, don't let it immediately bubble out,
        // since we need to let the lazy() execution finish so we know if this
        // route has a boundary that can handle the error
        runHandler(handler).catch(e => {
          handlerError = e;
        }), loadLazyRouteModule(match.route, mapRouteProperties, manifest)]);
        if (handlerError) {
          throw handlerError;
        }
        result = values[0];
      } else {
        // Load lazy route module, then run any returned handler
        await loadLazyRouteModule(match.route, mapRouteProperties, manifest);
        handler = match.route[type];
        if (handler) {
          // Handler still run even if we got interrupted to maintain consistency
          // with un-abortable behavior of handler execution on non-lazy or
          // previously-lazy-loaded routes
          result = await runHandler(handler);
        } else if (type === "action") {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          // lazy() route has no loader to run.  Short circuit here so we don't
          // hit the invariant below that errors on returning undefined.
          return {
            type: ResultType.data,
            data: undefined
          };
        }
      }
    } else if (!handler) {
      let url = new URL(request.url);
      let pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
    invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    resultType = ResultType.error;
    result = e;
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  if (isResponse(result)) {
    let status = result.status;
    // Process redirects
    if (redirectStatusCodes.has(status)) {
      let location = result.headers.get("Location");
      invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
      // Support relative routing in internal redirects
      if (!ABSOLUTE_URL_REGEX.test(location)) {
        location = normalizeTo(new URL(request.url), matches.slice(0, matches.indexOf(match) + 1), basename, true, location);
      } else if (!opts.isStaticRequest) {
        // Strip off the protocol+origin for same-origin + same-basename absolute
        // redirects. If this is a static request, we can let it go back to the
        // browser as-is
        let currentUrl = new URL(request.url);
        let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
        let isSameBasename = stripBasename(url.pathname, basename) != null;
        if (url.origin === currentUrl.origin && isSameBasename) {
          location = url.pathname + url.search + url.hash;
        }
      }
      // Don't process redirects in the router during static requests requests.
      // Instead, throw the Response and let the server handle it with an HTTP
      // redirect.  We also update the Location header in place in this flow so
      // basename and relative routing is taken into account
      if (opts.isStaticRequest) {
        result.headers.set("Location", location);
        throw result;
      }
      return {
        type: ResultType.redirect,
        status,
        location,
        revalidate: result.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: result.headers.get("X-Remix-Reload-Document") !== null
      };
    }
    // For SSR single-route requests, we want to hand Responses back directly
    // without unwrapping.  We do this with the QueryRouteResponse wrapper
    // interface so we can know whether it was returned or thrown
    if (opts.isRouteRequest) {
      let queryRouteResponse = {
        type: resultType === ResultType.error ? ResultType.error : ResultType.data,
        response: result
      };
      throw queryRouteResponse;
    }
    let data;
    let contentType = result.headers.get("Content-Type");
    // Check between word boundaries instead of startsWith() due to the last
    // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      data = await result.json();
    } else {
      data = await result.text();
    }
    if (resultType === ResultType.error) {
      return {
        type: resultType,
        error: new ErrorResponseImpl(status, result.statusText, data),
        headers: result.headers
      };
    }
    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (resultType === ResultType.error) {
    return {
      type: resultType,
      error: result
    };
  }
  if (isDeferredData(result)) {
    var _result$init, _result$init2;
    return {
      type: ResultType.deferred,
      deferredData: result,
      statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
      headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
    };
  }
  return {
    type: ResultType.data,
    data: result
  };
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };
  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType
    } = submission;
    // Didn't think we needed this but it turns out unlike other methods, patch
    // won't be properly normalized to uppercase and results in a 405 error.
    // See: https://fetch.spec.whatwg.org/#concept-method
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({
        "Content-Type": formEncType
      });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = submission.formData;
    }
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  // Fill in loaderData/errors from our loaders
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  // Process loader results into state.loaderData/state.errors
  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
    if (isErrorResult(result)) {
      // Look upwards from the matched route for the closest ancestor
      // error boundary, defaulting to the root match
      let boundaryMatch = findNearestBoundary(matches, id);
      let error = result.error;
      // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed
      if (pendingError) {
        error = Object.values(pendingError)[0];
        pendingError = undefined;
      }
      errors = errors || {};
      // Prefer higher error values if lower errors bubble to the same boundary
      if (errors[boundaryMatch.route.id] == null) {
        errors[boundaryMatch.route.id] = error;
      }
      // Clear our any prior loaderData for the throwing route
      loaderData[id] = undefined;
      // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
      } else {
        loaderData[id] = result.data;
      }
      // Error status codes always override success status codes, but if all
      // loaders are successful we take the deepest status code.
      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  });
  // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route
  if (pendingError) {
    errors = pendingError;
    loaderData[Object.keys(pendingError)[0]] = undefined;
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds);
  // Process results from our revalidating fetchers
  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      match,
      controller
    } = revalidatingFetchers[index];
    invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
    let result = fetcherResults[index];
    // Process fetcher non-redirect errors
    if (controller && controller.signal.aborted) {
      // Nothing to do for aborted fetchers
      continue;
    } else if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  return {
    loaderData,
    errors
  };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);
  for (let match of matches) {
    let id = match.route.id;
    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== undefined) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== undefined && match.route.loader) {
      // Preserve existing keys not included in newLoaderData and where a loader
      // wasn't removed by HMR
      mergedLoaderData[id] = loaderData[id];
    }
    if (errors && errors.hasOwnProperty(id)) {
      // Don't keep any loader data below the boundary
      break;
    }
  }
  return mergedLoaderData;
}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let route = routes.length === 1 ? routes[0] : routes.find(r => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}
function getInternalRouterError(status, _temp4) {
  let {
    pathname,
    routeId,
    method,
    type
  } = _temp4 === void 0 ? {} : _temp4;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }
  return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];
    if (isRedirectResult(result)) {
      return {
        result,
        idx: i
      };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}
function isHashChangeOnly(a, b) {
  if (a.pathname !== b.pathname || a.search !== b.search) {
    return false;
  }
  if (a.hash === "") {
    // /page -> /page#hash
    return b.hash !== "";
  } else if (a.hash === b.hash) {
    // /page#hash -> /page#hash
    return true;
  } else if (b.hash !== "") {
    // /page#hash -> /page#other
    return true;
  }
  // If the hash is removed the browser will re-perform a request to the server
  // /page#hash -> /page
  return false;
}
function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}
function isErrorResult(result) {
  return result.type === ResultType.error;
}
function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}
function isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }
  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}
function isQueryRouteResponse(obj) {
  return obj && isResponse(obj.response) && (obj.type === ResultType.data || obj.type === ResultType.error);
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toLowerCase());
}
async function resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index];
    // If we don't have a match, then we can have a deferred result to do
    // anything with.  This is for revalidating fetchers where the route was
    // removed during HMR
    if (!match) {
      continue;
    }
    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      let signal = signals[index];
      invariant(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
      await resolveDeferredData(result, signal, isFetcher).then(result => {
        if (result) {
          results[index] = result || results[index];
        }
      });
    }
  }
}
async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }
  let aborted = await result.deferredData.resolveData(signal);
  if (aborted) {
    return;
  }
  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      // Handle any TrackedPromise._error values encountered while unwrapping
      return {
        type: ResultType.error,
        error: e
      };
    }
  }
  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(v => v === "");
}
function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  }
  // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let {
    formMethod,
    formAction,
    formEncType,
    text,
    formData,
    json
  } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json: undefined,
      text
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: undefined,
      text: undefined
    };
  } else if (json !== undefined) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json,
      text: undefined
    };
  }
}
function getLoadingNavigation(location, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined
    };
    return navigation;
  }
}
function getSubmittingNavigation(location, submission) {
  let navigation = {
    state: "submitting",
    location,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined,
      data
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : undefined
  };
  return fetcher;
}
function getDoneFetcher(data) {
  let fetcher = {
    state: "idle",
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined,
    data
  };
  return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
  try {
    let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
    if (sessionPositions) {
      let json = JSON.parse(sessionPositions);
      for (let [k, v] of Object.entries(json || {})) {
        if (v && Array.isArray(v)) {
          transitions.set(k, new Set(v || []));
        }
      }
    }
  } catch (e) {
    // no-op, use default empty object
  }
}
function persistAppliedTransitions(_window, transitions) {
  if (transitions.size > 0) {
    let json = {};
    for (let [k, v] of transitions) {
      json[k] = [...v];
    }
    try {
      _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
    } catch (error) {
      warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
    }
  }
}
//#endregion


//# sourceMappingURL=router.js.map


/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgLogo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _defs;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 127,
    height: 30,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "url(#logo_svg__a)",
    d: "M0 0h126.05v30H0z"
  })), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pattern", {
    id: "logo_svg__a",
    width: 1,
    height: 1,
    patternContentUnits: "objectBoundingBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
    xlinkHref: "#logo_svg__b",
    transform: "scale(.001 .0042)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("image", {
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAADuCAYAAACqEi1kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAJF1JREFUeNrs3T92HLeiJ2BYT8HNLl82mdsrMLUCtVdgagVuZZOZWgGb2csoR3MmYiuakFQ4EVvZZKRXwL4rEN8KNA0TdU3LlEQ2C1UA6vvOwaH/SKzuKhQKvwIKFQIAAAAAAAAAEMJ3E/3e+9uy5/Bnd7MtV3YDAADAtAP6fiqzbXmZ/tvcIR/NVQrsH7Zlk8rabgEAAGgvoM9TeSmIV2WdwnsM7ud2BwAAIKDXJ05RP9iWn1MgN2W9Ded3wvrG7gAAAChXDOVn2/JJab5cbMvCzRcAAIByzLZluS0fhdZJlnjcT1M9AAAAYKRgfiqgKuGvo+pzpwYAAIBgrgjqAAAAgrmi3BPUZ04dAACA/iyDZ8yV3ctJsJgcAADAk8y35VrAVEI/i8kdOKUAAAAeJ452ngiVSoZyFoymAwAAPMj+tlwKkkrIO5o+d6oBAAC1+I8RtrnYlv8TLOxFXv9Ide27bVnbHQAAAH9lhXZlrJXeTXkHAABI4ciUdmXMEuvfvlMRAAAo1XcDbGMWbhftEo4Y2822/LQtV3YFAAAwtYAeQ7npxZQW0l8Fz6UDAACFeSacMzF7qV4u7AoAAKAkuVZxF84p3cG2/CuY7g4AABQixxR34ZyavBDSAQCAFgN6DOXXwjkVsXAcAABQhD6fQe+e7RXOqUlXb2d2BQAA0EpAPw1epUa9If0suLkEAACMqK9F4pbb8j/tTir2P1J5b1cAAAC1BvS4Gvb/sitpQJwB8t/b8v/sCgAAYGhPXSTOonC0yMruAADA4J76DLrndmnRqXoNAAAM7SlT3A+D585pU3wW/R/b8n/tCgAAYCi7TnGfbctlMMpI2+L70dd2AwAAMIRdp7ifCOdMwIldAAAADGWXKe7zbfkvu44JiFPdreoOAAAMYpcp7nHV9pldx0TcbMsP6ScAAEA2j53ivhDOmZj4KMeR3QAAAOT2mBF07zxnyuIo+sZuAAAAcnn+iD97KJxns04/P6SfcTr11QP+3iz8OaPhx3R89h2nLOIo+mu7AQAAyOUxI+gfBb8n26Tg/XsK5ZuQb1R2nsL7j+mf9+3+JzOKDgAAjG6xLZ+UR5d4U+M0lPPsfgzq8dVhl47NTsVr1wAAgNFdC2cPLtcpyJU+Yj1LNw7OHLNH3XAxiwQAABjNXDB7UHCrIZR/yV4K60bWv10WmgQAAGAsp0LZF8tFg4FtPx3zj47vveVSkwAAAIxhTyC7t8QAO5/AsV8GjzfcVyy4BwAADG4hjP0tmM8mWg8EdYvFAQAAI7KA2G05m2gw/9wymPreLQQIMAXzkO8RMQDgEUxvv33eeK4q/K1enKgbprkDArqADgD9ev6V/3cw4f1ysy3H2/JWFbl337zZlncpqE/1BkY8P65UBwCo1iw8bobkVeoHAYwS0F9OdJ+cb8trDfCDLlI/bcvhthyF6b0f/OdwO+UfACg/hM+35cfUX5k/8XduUol9oX+ln2u7GujDd1/5fx8nFrpuUjA/Vy12uvhNYWX7z/1ncCOnpTq8yPS71xV23OYZz+dV6thST124yHRe/GT3kqk9j/X2Zfo5G3DbsV6/Tz/NsgN6FZ+vndqz5jOH/cmWE6s3Bw55UyEkVz1ZOpf/Uuaqm3MjeAad/kP5YerPlbSg7EmwZg3wSM++EtCnIj5n/iIY0emrUx/35VRGlV10AWAccZbnIoXyEsPw3ZsG1+mf9xw2YNeAPoXnz2OIfBVuFzyjP3FK1w9hGs9ivXS4AWDw4LtMofc01HGzPH7mk/DnjYSZwwg8NqC3PjK4CbfPvnnePI+btH9XjX9PI+gAMFzIPU0ht9bFaeNnPgx/3lwQ1AEBPdyO8L4IFu8YQlx0r+UZCnsurgCQ/VrbjT4vGvpe8bvE6e/LYOo78I2A3nI4X4fbkV0rbw/nbQrqrRLQASCPbrT5sNHvF4P5UQrqFp4FvhjQW72LtxLOR933rYb0ucMLAL3aT6H1JExjdHm2LWepGE0HAX0SgaPlgFjTMZjSCu8AwOMtUzif4jovcRT9Orj5DwL6BIKhcF6GqwaPhZXcAeDp4sjxRbid8m0/3M4eAAT0P/zY0PdbC+fFOXdMAIA75sHI8ecOU1A35R0m5vk9/62VhiCO1r5yiIu0Sj9PG/guewNuJ3Zc4pS/+0bt46MDv4fbGyDeUABALRaN9AdymKeQ/tq1HXo7p/q2SSWr2BB8qrxcB3cca3DSQF37NEBDcrpD/V8GK8w/dj/nqh/LCvfHMuP+mKtuzo3U14DT0EY/IHf5GKb5TD70rYp+XovPoMeRxFfBYmQ1iO9IP7cb7hXD9VnqxC52+LtHKahPZQVcAOoL5wu74UG659KFdJiAFl+zZhqQ41W7uIprX+9E7d4hO7dbARDOhXSgvoBe84n/NhiRrc1NCulmPNyKHZa+34PaXdR1hgAQzoV0oLKAXqt1uJ0yTX1afP3arp2W08y/X6cIAOG87pB+Gjy+BgJ64W4EvOrFmQ8rnZZBtnOgugEgnFcrjqCf2Q0goJcshvONw1m9NxM9jkN3Wtx5B2BIJ8J57+ZpvwICenHOg+fOWzG1mRAxJJ+N0GnZc1EHYCDxGndoN2QR96tZcdCY5wIdhVmH28X+Wr+Yj73QS+wwHQczTwDIJ17jTgv8XJtUPqS+5LfeJrOXvsv34XbkelbQdzlNfSeL7YKAXoRjDVKTjlOAbHUadimrsP4aLKwIQL5rXUnPScfZlu9TmN3s+Pc7sxTUfw7jj2B3i8a9UuWgDTVPcY93O986hE26aTg4zkI5r0gxLQ6AXE7D+CPNm9Sf+M8UYFehn5ljm/S74u/8IYw/YHSQbhgAAvqojPy1LV741o19pxjKL0M57y+dBe9SBSBPYBzzJnD3+tYYnt9mDs8xrC8LCOqnqh0I6GM6bzC88XfHjYXzOHK+V+DnAoC+7I0YFru1iV6E4V/denMnqI+xePEsWCkfBPQRGT2fhnVo40ZMqeG8u6ADQF/GepXn2xSOVyN//xjUX6Uy9Gj6SfAaVRDQRxAb3o1DNxm1r9K/CLfT2l0wAWjdPAw/tb0LxG9CWQsHx1H0OJJ/NeA294JRdBDQR3DssE3KJox/N/wp4dwzYQBMxcnA27tKIfi80P0R+zA/DdyP+VU1BAF9SKtg9HyK3gnnAFD8dW/IdU2uUvgtvV/YPRc/VEifBaPoIKAP6DeHbJLWoa5n0ZfCOQATczRCOL+paP8MGdI9VgcC+mAh7cohm6xabs6cDtxJAYCxLcJwi47WGM7vhvR1xt8fbwB0r5YDBPTs3jlckxafL9tUEM4XDhUAEzPUjemaw3nnVeh/wKkL5q+DR0FBQB/ITah3oTD6U+pNmj3hHICJmodhRs+71dpvKt9f3TPpfXwPwRwa9LySzymc09WDEqePx3ec7zs8MAn7KYzEn9/fCSbx3+977nNzp+P8IXXK4+jZ2q6chNmd+rL3jdB2dednTYZaNfxVQyE0HuP4VqJdV71fpb/fyv64267+eOdceWi72v27dvVp9u4ci9lX/ty60raqap8KLMIPd8PwJ6W3slSl/jC3j/9imXF/zCsMWIfbcrYtH3veFxfpd88meG5cNNzBXfRQXy5TeDsIZS/4tedaNVif5mOqE7MGvvfU29WSxDYmzgK93nF/n6X9XcvChNW2T6UFiGvnDncshGqdHgFdQB8oZF0OeC5eFtrJqSWgL0eur/PUUc1VP85SR7o0hwOdG63af2AwX4b6V2bfS/Vl6HZ1MaF29aH9jVkK5R8ztFNDXeNbHLC7qCmgnwT4awMvWAvoArqAnkOuTstjysf0GWYCehUBfT5wR/E6lLXeyRBhax7adtp4MC+lXT2ZQLu6fOCxGCJo5p793HRAr2GROKu3c5dnXoBcHcgu/IzZIe5G769Th9L7jMsUj8tZ6lDNR6yrY583uTvhq9D+c8XH9/Rz4n/7IQWuWhfFK61dPUyfpYWbHruI3/tyoHZjnra1DOyk9IC+Eca4h5s2QI2dlsc6DOWNmHI71fw6jDvlvAs/Yy5SOsT3P55AfYp93VVDwXwvff5S266jibWr++kadxSGvzFxlLY9c9loK6CvHSLUCyCDeeqkjdFpeWxntwtiRtPHF4PHWUHHYh7+XL9gaC8z//5VmM6rw1oI5nfr41Hhn3Mq7eoijP+moe4GgQW/GwroHxwi7nEV6n8PKjBuyIqdllmFNxTmDt9oTgsOHicj3DjIXRd/m1Dd2jTQr9GulhfOT0MZNyD2glcSNxXQ1w4R6gbQcyfhqPLPf+hQjhLOF4V/xoMw3IjgfubtXAWPOGpXh/38i4aOSRfOS9zPQnrlAX0TpjO1icczuwJ4bKAYekGvXE4K7HwJ52XV89whPfd59JtqV019u2ykXT1tpF3dL/h7dI8WeFzrG54X/NncOUX9oAW/hPzPavZt1mg4b6lT0AXG106x7OfvotL6/lPIN236x8zf4VzV065qVx/tn+H2UZfS602cbfHGKVRnQP/d4eEr1nYBFYXdmd2gE6kzWfU+rrXe5wrpOaepWmdGuzr2OX9TaYBcVHJM4mNa7/Xlv6zkKe4OGg+5iANMsRN5t0O2cKj5Qv0/yfi7c3nv0GlXCwiQNbarNR0Tj2lVGtCFL75lYxcAE+5E3u3oWHiH+8SQsez5d84yf+a1w6Zd1a42b5ahbRLQB2B6E9/iMQjgPlNciOYsWHiH+8XnPecVBXQDNOW2q1NrZ7Sref1q/9YV0NcODQ+wsQuAL3SqpjbyEUOTKYMMETRydqjjdd0ATbl1aDbBdvXIoc8mtiULu+HvSl0k7qagitO96zOepFdh2Ne/TX37AjrwWMvQxit/dnGQvvtaNeCe63m8gfOqh9+V8+aX67p2tTQWNMsrjqK/tRvqCOhjT12epwpz8JULyLtUoW5sX0AHitC9vmVs6/Dnzc2hxRD2g6rAPWq4gTP0dX0W2h/BWz1xv5bQrsa+5pV2tUmz4Mbyg3wqoCxH+u7d8zUP/ZzXod87ilPffq31teay1OT9Ya4uDFZythmXA36P2P6dpO+z943O7eHAn21Zwblx0fOxXzq3HlxvS97XS21/cW2udvW2LNS7bGWXx7MuGtwPF6UHnjHuZu494URf2L6ALqAL6MqoAf1woM8f28mDJ4xEDdGp+NjjKJOA3l45FNAF9MLOq4snfM75QO3qtXqX9ZoloN+5LpY6xX0zwjYvwu7PVZ2mz7y2/VHqyky+hEmLYTT3FMw4xfI4PO1ZuThF86cU8HOuMt8tvOO5vnHEa+GHcP+aLbFj/n263o61kGE8V1bBYmx8ux35tYJ2dZ1K7nZ1ltrVVSPH9+qeNmCsRwi6Na+uHvn5d91Ojiyy6emYfFHrUyDvswz93Fnbm/j2x9DiHTQj6MObqwtVt+/LkP/uft8X9djZyzk987rwc6O1EfSL1Hnfe2QdWKZjVdMo+jIYQZ9Cm5v7nLrO0K7uT7xd/VY5Szcy9h5wI+IytNcfndfy2Ut+D3ptdwi7Cm37APW14V+7o/0i9P9u5k24HU3P9c7nWdh9Kj4Pt07HMZZVeNyo9CZ17OLiU6/DsCPavzp0NNiuXg3Qrs4rPJ7r1M7Etzicf6Ot2aS27EX685uBPuOPTjsB/a5v3UnKfcFb9Lj9X0bevgs+MLQ+27AvdfZydVBuMgezn1WPrN6k+rHu4XetUgf6fKDPPgtu4PBlhwO0q7navdzt6i+VHcs3T7iOnYc8N1Lus++0E9BzdWBm4fHPQ7/suXLvVbZ9gKfIdWMwdyfvbmf1TabfLYDlqxux0/o2w+99lbE+1B40GM4vGc+dodrVY+3qH/v6bQ/HLOeshLsZCgE9W4WYjbz9/cx/fujfB/Al84wX9eMwzKhBtAp5FtncE9KzBIzcndW3qWOdW58zCPtimuv4DhppV99mbFfnFRzHN6G/Be26di/3jRUhXUAvJlCOvX0nA1CrXKM8V2H4FdBzjfa8VE2qCued1YAhvSRm4Y0v16MxY7Srv1W2j/qyDnlm+OSe3SOTCOh/qXBT3j5ArXKFi+MRvkvsUG0y/N65atKbN2G40b8upK8qDWO7Mguv3Xb1txG+y3mmdrX0eprr5t4qjPMqbAF9gq4a2/5jA/965O0D7NpByjHatgnDLdR1X2dS4CnTeRjn/cdvMneI5zv8nXXGz7MXjKK32q6uRjx3SzhvhpI7RP/mNBHQawvINztcuPre/lVl29f5BHaRa5TnfMTv9KGgEMZfr21vRtx2zqnuewVeR13X22tX1yN+pw8Tq6fvM//+c6dJfs8L/VzzAU/md+H2dRJjVdr3E99+H50LYHpyLSY1C7fvph7D9xm/E7uLI0abEbe/TmWeMWg85uZ67hvxQ/YBp+AxdTfXmhV7jbarV4Ud65sB+uKbVFxXJhjQh3TV44Xv3cgX3uMKtw+wayc+h4PQ3srnOlJPsyrkJkGuOv/Ym125H2WzsOF4AT3XqHCL7ep+KG80+WrAOuW6MsGA/v3A24tT1y6f+Due8jqHvra/qXT7pXXQoe/O/bvKPnNcHX1R8OfznOrj/NMu2FmuRaZ2/Rw5OsW7hLJ1xmvwPJ3f1rTRrvL44DyED/rg0wzos4G3F+84xWe8Tp/w949H3v6bircPLftXqG+6ZukXXs+o2l9D+VDQZ4ntyKKQPlfuIBBHW1eq36CBTTvxOD8W+Jn+5bC0odRF4mYjbHMVdluIJV4w43tRb0befqh8+zqdAJRmPYGbBbv0uX7P/F1/UfUGD+hGzx+nxP31vcMioLcW0LuQ+uKBF+RuVdc+wrnta4iAh5vbBQzkyme513qAc3ym+g1aZwx61M8504iSF4l77KqifTZmP6XtxylWny9Wsgm3d7FXtl9EHQGA1gNx7s+zy0ru8eZ8zlHEo5D3FXNTYMozCOhNBPS7Fx/bL5uADkAuU1qkbJegvQ55V+aOv/tNsFjcU/tyQGWeFfzZfnR4+IpZ8LwUAIwl9wJ68Rp/mHkb6235buSyyvz9AAG9N0ZHUT8AoExDvAM6TnOfNb4fc81CMHoOAnrv5g4PX/HSLgCA0WwGCoEnjYfzXLMB16ooCOhCOuoGAK2YTSxs7+LdQCH2oNH9/mvG3/3BKZyV/YuADnfEu82muAPoSE4poOfsE+0a0M8H+u6nob11Z+aZj+m5UxgE9BxMY2boTgpQvo1dwASvN/uFnotDBMEYzs8aq1tHhYVz7SoI6A++MFqpm8/9bBeAgA4TC+i5Bi2e+hz5uwGPxWkj9eogc916r10FAT13IwbqBJC7Ixl/73cNlqUqs7OSbgjnCnRPfc/4+YDhbpFKzWaZbzTchLJG0LWr0GBAN1rKXXGKn1kVIKDn6jjP7F4+u+aUMLV8kfHa18caBccD7ovTikN6N1U/Zz/mPOx200W7CgL6g+V8BQX1+dUuAEK+VwiZoUOJ152czyv38aq0VRh2inStIT2G89w3fH7TroKAPlRIB3UB6DNU3OcXu5bPLMK4o+hx+7MKzqXjgfdLTSG9GzmfD9AuXhVQF7SrTMk/pxrQndh04dxsCiDK9eqw/eBNEfzdyYjBLufo+Sb0N/K9CsMvNHYayn8FW/xsF2GYAYbfnvj3tauwW/2eZECPJ/XM8Z88N2qAzjrj7z4q4PsdOsTF9UPGOCYnmfs/fb8i7c0I+2iRAvB+ofXmeqDPtgm3N0m0q9pVBPTBePZ42mIHxfR2oLPrSsUP7VSP2d4sUzC7DEadSnIy8PFYhPxTuPseMT3PHPK+1kG+TOdOCaPp8TOcphsHQ32ePh4x0K7Cbud7r3WqpoC+CKY3T5kbNMDn3mf83bFzPRvpWnd0J3RcpE6l618Zhljkq6sHud/5nSuMvR7x+BylALYYsaMeg+D1wJ9hE54+eq5dhd31Osu3poAeTyIjqNO0F8peCOa1QwSj2PV1Qg9td3K/DumhoewwGPUp6XqU+3niwwHCeegx0N0XFo9HPEaztP+6kLw30DZP0jaPRgh+ffZDtKu06iZzPct68/ZTweVa3ZqkZeH1sjsxP1VYlqrXH+b28WDnXN+dodPM58jlQJ3Jh7YhQ4/65Do3Lhq4TvR9LLrwMtTnn2WuO5eFXOc+pnai75sqszshb8zvd5bh2GlXtatjtLdD3Cyptl6XHigWssSk7KWLa+kBvWtwPwYBXUAX0Ie8AM8GOE8uM98ZP9nhZvW88nOjhYDeHYs++iWHA18/hujI7xd6TbxI9eXgEef1PJVlCsTXBd18yHGjRbuqXW01oF8PUK+z3PwsPVAYRZ+WZQV1soYOiYAuoLca0KPTMExH+DBDvXtKZ2GIqaIC+sP7JoeP7JjtpxAxxjVjqCCyqOym9WVl1/BFxmOnXdWuthjQzwaq18u+69HUGyTKUcPo+aeKRg0EdAG91YA+C8OOvs17qG8XPXYEDio8N1oL6J+H9bP0mZbhz9Wru38fewT2YuD25DTUFdJrKWeZj5t2VbvaYkAf8lrRPV6z+MZ3m6X6Nqs9oH8MVl6cgmUl9fFLIyOXQUAX0AX0oS7AJ2H4ELYMj5sie5IxmOUa9RHQ2yvzEdqUS/u99/ZniH7wGO3qoXZVQM9ov4a2+Xmlnem9dAILF+2Kd5GOKv78V9vyU2os9x1OyO44DPs6zq6N6tqp9Vf+3GyAz3OQLu5xNedz1YEvGOs95a6H/YkrUb8KeVekHrNdPbnz79pVcvTPb0LhA73PK97BsVO0Crev86A9J41cRHVKYLjzLXaizkba/ryAfdCtAr5ObQ98fo68GTlUDrV6d8tep5ChXR22XT1PdZj6xWO5KPkDPqt8B5+qY02KDXIr77zvQro7rzDMRXdlN8C94mjoZsTtb9L18MaheFI4H7o/oV39M6jThnelf8DaA3pLQY4/G8DWbrx0IwclXuDWqhyNiSOEV/YB/K2tf1vA57gS0nd2PGI/QruqXW2tPSy6Pj9rYCefBne1WhIfXZg1+t1eFxjSr1Q5GtNNyZxqADh2XnPPOVHS1NwupKunDxf7DkvtqnaV3vxWW0DfVLaDWxxxnap56P99mCWG9LeFfJarYBSDNnUBYIrfe+nw81mwKnHEWkh/uDep76Bd1a7Sn1XJ7U8LAT06mECwa123CIeL7XB+U+1ovFP1ekLf9yZYGI77rzdXhdfZlcP0RSXd1Neu0mL7WE1Ar1WcGm2l7HrletdkqVYjX+TiRcfCdTjP2upEmhHD553PVQV193XwfO+XzukSj592lVasQ1k3wJoM6N1Ud8+j12cZyniVxi42PVzkxmj8j110mFBIf9F4fY/PF5sqzOf1/m1Fn/dtOk83Dt0f5/KLUPYirqsJhFePYExDkbOM7gvoNZ9s+8Hz6LWJjyccVfz5n9qZGOMit66s4wZ9dHhb7Gx1i3+tHeKsnbfa+kXxuvK60vP0xcSvTzXdqFg33q4K59NRXD2+L6D/3kDgO1HXquCGyl/DwxCdwJswrefH4PPzrJVHO24a+z7a5368rryNj/v5TZje6OUmfec3lZ4f2lVqP+6vQ0E3xp41uqPjgnEL9a1o3aJwtT+ScNXj78ndCewuPBvVjwlfhF+F+l8XZAVsIf1LdXvVyD5fh9uR5Deh/cexulHzdeXtau3HSruqnX9RyvF/9oVGsQVxZPZAfSs2nF+ENt53/t89Nw4/ZGocNi488G+rdCE+r/SzO5cn3nn7QphtcdTvbboutrhuyjp9t1ZuQrzVrlK5YhZnbO0Z9PtCupXdywznrRyXdabGoc9n8M4L7ljCWDbhdtSnlk5Z93lrH/2vvc703T4/9XrRTQffNN5pXjYU1NfpmLV43O62q5uKPq92lbvtzetUL0arw/cF9JY68a2FQcejzBM5Z6frKTcAuk7AKxce+Op58iIU9vzZZ+3BcWh3hLTGNr+EULxKgfXtxPZ9F9RLPV+/dcx+6uHaXku7WvJx0q7yLd3gVlE3BS+35VND5aOQXkQ4b61efRpo38W6Gxc+vH7A57lOf1Z9f5x5xjqyrHB/LDPuj3kFdeGskOtWPJdnjZ4bF5XU2W/V18UD2+a+6sRpaOPxsD6vj6dp35TYR7hOdXPqx0y7Wme7Wlp7O2aGWQyQY/79/Z9/4YNcNdbB70ZuPV8y7v5vLTSuB9rOVSpv0kVldk8jFj/LJlgADvo4r9fpPIvrmPwycNsVz/V34Xa0zcyX8q1SWaS6kqODGUdy3qef6sTfz5du5fq4739OP/dH/kzrdB7rc2pXqd/NnbZ+/7O2pi+bh9TNw9DeSGdXFurZ4OH8stG65HV+MJ12LF47TjO1Zxfpujuzq3e2DGWM6MxSXYmjhbuO6l6murYI9b/pZCxdEDxJ51fOvsBl2s7COaxdZXLmqZ4tU527+Ebb/zH9mbP0dw7uq6PffWFj++lkaVUciXyrTmW3nypgq41jfLbbs0sw3YvyXvhzFOj7B7Z18Q757+H2bnk3O4Z+AvpRht/71OeFuzpyt6587irVixv1IXsg3A9/zkSLfnzETZB4bLo3t6wdL+0qjKHU53n6KqcOcVYHE6hDM4cZoJiAPsU1EwBozLOv/L914999EW5nCZg+lqejdNb4vo13ZzcONQAAMERA/zCB7x+n0MQVNueqQi/2UjA/msB3XTvcAADAUAF9Ks/WdiuMW/Draebh9mbHwUS+73uHHAAAGCqgb8K0FlmIK/DFKe/eH/048QZHt0rqVB4XiIuRrB16AABgqIAevZvY/uhWr18Gz6Y/xDztr8OJfW8rtwMAAIMH9KkGkaMUPA9UkXvNwu2z5hdhmiuZv1MFAACAoQP6Jkx3Ku/dEGra+604q2AZpn3zYsrnBAAAMGJAj6Y+WjhPgfQ0TPu913Eae1wE7ihMe/q/0XMAAGBUH7flk/JHmVJQ37sTzB3722JtAoDyLDO1+XO7FoAhPXvgn/vNrvq3RQqsFw1fuGepsxO/50mY9syBu1bhdgV3AACA0cRRQ6Pofy8XjR3n+Fz5meP6xeJGBUCZlsEIOgANeOgIehw1XNldTYoL4J2kGzBnwcr1X7IOtwvEAQAAZPH8EX/2ONxO7/YMbt3i8Ztvy8/p58wueXD9BwAAKCKgx1H0+Cz6kd1WlRjA4yj5yxTIvTLu8VbBq9UAAICCAnr0dlt+DUbRSzRPP2MA/z793HesemH0HAAAKC6g36SwcmLXja57BZobJnnFm1IbuwEAAMjt2Q5/JwaWK7tu1GC+DLevQDsSzrPqbkgBAAAUGdCjN3adYD4Br4P3ngMAAIUH9HW4HUlHMG/VeSoAAABFB/QoTv3d2IWCeYPiqPlruwEAABjS8yf83RhiXm3Lpd3YezC3+Nu4TG0HAAAG9+yJfz8uFud59P6C+TIYMR9bfHTD1HYAAGBwz3v4HTHQvNyWA7tz52BuxLwMbjgBAABVB/QoTgmebcu+XSqYV6p7ZAMAAGAUz3r6Pd2iWlN7bndvx7+zDKaylxbOfwoWPQQAABoI6NFVCjlTCun7jwjYgnm53qT6CwAA0ERA70L61J7hPRTMqxZnfqzsBgAAoFWLbfk0obL4SjD/OLF9UftxA6A+y0zXibldC8CQnmf6vav083Qi+zF+z1+25X24fY75ZQp/RsvLZeQcAACYRECfYkifB3fahXMAAIAdPcv8+2MIiq+uurGrEc4BAADGC+jReZje6u6Up3vPuXAOAABMNqBHcXX3H4JXWTGOTbi9SXRuVwAAAKV6PuC2blJIOglWz2Y46+AxC4AptPU5bOxaAKYgBnSvH1Nyl6VTDQAA4Ntm23IpRCoZyvW27DvFAACAmvzHiNuOU47/97Z8l8LUPxwOenAcbldq39gVAAAAjzfblotg5FfZvcT6Y9QcAACgJ/NwOz1Z4FQeM5194dQBAADIYyGoK98ocZHB5bbsOV0AAAAEdUUwBwAAmJSD4Bn1qZfLYCo7AABAMWbbchKMqk9ptPw0WPwNAACYgO8q/uxxVP1l+jlzKJsRX793vi3v008AAAABvSJxhHW+Lb8K61Vab8uHFMiv7A4AAGCKnjfyPa5SiQuHHTmsxYfxzbb8no7Z2i4BAABoJ6DzcJtUHusmhepdtyWIAwAACOikoHy8LSu7AgAAQEBHMAcAAEBAF8wBAAAQ0BHMAQAAENAFcwAAAAR0BHMAAAAEdMEcAAAAAR3BHAAAAAFdMAcAAEBARzAHAABAQBfMAQAAENARzAEAABDQBXMAAAAEdARzAAAABHTBHAAAAAEdwRwAAAABXTAHAABAQB/bjWAOAAAA45tvy6dCyvW2LBwSAAAApmhfMAcAAIAyXAvmAAAAML4TwRwAAADGNxPMAQAAoAxLwRwAAADKcCmYAwAAwPj2egrpgjkAAAD0ENLPBHMAAAAow0F4+OvXBHMAAAAG993Evu98W37elv1U4gj7zbZcpfJhW85VCwAAAAAAAIAJ+v8CDADzoMw1LbOIWAAAAABJRU5ErkJggg==",
    id: "logo_svg__b",
    width: 1000,
    height: 238
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI3IiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTI3IDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHJlY3Qgd2lkdGg9IjEyNi4wNSIgaGVpZ2h0PSIzMCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMjQ1XzI2MzciIHRyYW5zZm9ybT0ic2NhbGUoMC4wMDEgMC4wMDQyMDE2OCkiLz4KPC9wYXR0ZXJuPgo8aW1hZ2UgaWQ9ImltYWdlMF8yNDVfMjYzNyIgd2lkdGg9IjEwMDAiIGhlaWdodD0iMjM4IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQStnQUFBRHVDQVlBQUFDcUVpMWtBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBSkYxSlJFRlVlTnJzM1Q5MkhMZWlKMkJZVDhITkxsODJtZHNyTUxVQ3RWZGdhZ1Z1WlpPWldnR2IyY3NvUjNNbVlpdWFrRlE0RVZ2WlpLUlh3TDRyRU44S05BMFRkVTNMbEVRMkMxVUE2dnZPd2FIL1NLenVLaFFLdndJS0ZRSUFBQUFBQUFBQUVNSjNFLzNlKzl1eTUvQm5kN010VjNZREFBREF0QVA2ZmlxemJYbVovdHZjSVIvTlZRcnNIN1psazhyYWJnRUFBR2d2b005VGVTbUlWMldkd25zTTd1ZDJCd0FBSUtEWEowNVJQOWlXbjFNZ04yVzlEZWQzd3ZyRzdnQUFBQ2hYRE9WbjIvSkphYjVjYk12Q3pSY0FBSUJ5ekxabHVTMGZoZFpKbG5qY1QxTTlBQUFBWUtSZ2ZpcWdLdUd2bytwenB3WUFBSUJncmdqcUFBQUFncm1pM0JQVVowNGRBQUNBL2l5RFo4eVYzY3RKc0pnY0FBREFrOHkzNVZyQVZFSS9pOGtkT0tVQUFBQWVKNDUybmdpVlNvWnlGb3ltQXdBQVBNait0bHdLa2tySU81bytkNm9CQUFDMStJOFJ0cm5ZbHY4VExPeEZYdjlJZGUyN2JWbmJIUUFBQUg5bGhYWmxySlhlVFhrSEFBQkk0Y2lVZG1YTUV1dmZ2bE1SQUFBbzFYY0RiR01XYmhmdEVvNFkyODIyL0xRdFYzWUZBQUF3dFlBZVE3bnB4WlFXMGw4Rno2VURBQUNGZVNhY016RjdxVjR1N0FvQUFLQWt1Vlp4Rjg0cDNjRzIvQ3VZN2c0QUFCUWl4eFIzNFp5YXZCRFNBUUNBRmdONkRPWFh3amtWc1hBY0FBQlFoRDZmUWUrZTdSWE9xVWxYYjJkMkJRQUEwRXBBUHcxZXBVYTlJZjBzdUxrRUFBQ01xSzlGNHBiYjhqL3RUaXIyUDFKNWIxY0FBQUMxQnZTNEd2Yi9zaXRwUUp3Qjh0L2I4di9zQ2dBQVlHaFBYU1RPb25DMHlNcnVBQURBNEo3NkRMcm5kbW5ScVhvTkFBQU03U2xUM0ErRDU4NXBVM3dXL1IvYjhuL3RDZ0FBWUNpN1RuR2ZiY3RsTU1wSTIrTDcwZGQyQXdBQU1JUmRwN2lmQ09kTXdJbGRBQUFBREdXWEtlN3piZmt2dTQ0SmlGUGRyZW9PQUFBTVlwY3A3bkhWOXBsZHgwVGNiTXNQNlNjQUFFQTJqNTNpdmhET21aajRLTWVSM1FBQUFPVDJtQkYwN3p4bnl1SW8rc1p1QUFBQWNubitpRDk3S0p4bnMwNC9QNlNmY1RyMTFRUCszaXo4T2FQaHgzUjg5aDJuTE9JbyttdTdBUUFBeU9VeEkrZ2ZCYjhuMjZUZy9Yc0s1WnVRYjFSMm5zTDdqK21mOSszK0p6T0tEZ0FBakc2eExaK1VSNWQ0VStNMGxQUHNmZ3pxOGRWaGw0N05Uc1ZyMXdBQWdORmRDMmNQTHRjcHlKVStZajFMTnc3T0hMTkgzWEF4aXdRQUFCak5YREI3VUhDcklaUi95VjRLNjBiV3YxMFdtZ1FBQUdBc3AwTFpGOHRGZzRGdFB4M3pqNDd2dmVWU2t3QUFBSXhoVHlDN3Q4UUFPNS9Bc1Y4R2p6ZmNWeXk0QndBQURHNGhqUDB0bU04bVdnOEVkWXZGQVFBQUk3S0EyRzA1bTJndy85d3ltUHJlTFFRSU1BWHprTzhSTVFEZ0VVeHZ2MzNlZUs0cS9LMWVuS2dicHJrREFycUFEZ0Q5ZXY2Vi8zY3c0ZjF5c3kzSDIvSldGYmwzMzd6WmxuY3BxRS8xQmtZOFA2NVVCd0NvMWl3OGJvYmtWZW9IQVl3UzBGOU9kSitjYjh0ckRmQ0RMbEkvYmN2aHRoeUY2YjBmL09kd08rVWZBQ2cvaE0rMzVjZlVYNWsvOFhkdVVvbDlvWCtsbjJ1N0d1akRkMS81Zng4bkZycHVVakEvVnkxMnV2aE5ZV1g3ei8xbmNDT25wVHE4eVBTNzF4VjIzT1laeitkVjZ0aFNUMTI0eUhSZS9HVDNrcWs5ai9YMlpmbzVHM0Ric1Y2L1R6L05zZ042Rlordm5kcXo1ak9IL2NtV0U2czNCdzU1VXlFa1Z6MVpPcGYvVXVhcW0zTWplQWFkL2tQNVllclBsYlNnN0Vtd1pnM3dTTSsrRXRDbklqNW4vaUlZMGVtclV4LzM1VlJHbFYxMEFXQWNjWmJuSW9YeUVzUHczWnNHMSttZjl4dzJZTmVBUG9YbnoyT0lmQlZ1Rnp5alAzRksxdzloR3M5aXZYUzRBV0R3NEx0TW9mYzAxSEd6UEg3bWsvRG5qWVNad3dnOE5xQzNQaks0Q2JmUHZubmVQSStidEg5WGpYOVBJK2dBTUZ6SVBVMGh0OWJGYWVOblBneC8zbHdRMUFFQlBkeU84TDRJRnU4WVFseDByK1VaQ25zdXJnQ1EvVnJialQ0dkd2cGU4YnZFNmUvTFlPbzc4STJBM25JNFg0ZmJrVjByYncvbmJRcnFyUkxRQVNDUGJyVDVzTkh2RjRQNVVRcnFGcDRGdmhqUVc3Mkx0eExPUjkzM3JZYjB1Y01MQUwzYVQ2SDFKRXhqZEhtMkxXZXBHRTBIQVgwU2dhUGxnRmpUTVpqU0N1OEF3T010VXppZjRqb3ZjUlQ5T3JqNUR3TDZCSUtoY0Y2R3F3YVBoWlhjQWVEcDRzanhSYmlkOG0wLzNNNGVBQVQwUC96WTBQZGJDK2ZGT1hkTUFJQTc1c0hJOGVjT1UxQTM1UjBtNXZrOS82MlZoaUNPMXI1eWlJdTBTajlQRy9ndWV3TnVKM1pjNHBTLyswYnQ0Nk1EdjRmYkd5RGVVQUJBTFJhTjlBZHltS2VRL3RxMUhYbzdwL3EyU1NXcjJCQjhxcnhjQjNjY2EzRFNRRjM3TkVCRGNycEQvVjhHSzh3L2RqL25xaC9MQ3ZmSE11UCttS3R1em8zVTE0RFQwRVkvSUhmNUdLYjVURDcwcllwK1hvdlBvTWVSeEZmQlltUTFpTzlJUDdjYjdoWEQ5Vm5xeEM1MitMdEhLYWhQWlFWY0FPb0w1d3U3NFVHNjU5S0ZkSmlBRmwrelpocVE0MVc3dUlwclgrOUU3ZDRoTzdkYkFSRE9oWFNndm9CZTg0bi9OaGlScmMxTkN1bG1QTnlLSFphKzM0UGFYZFIxaGdBUXpvVjBvTEtBWHF0MXVKMHlUWDFhZlAzYXJwMlcwOHkvWDZjSUFPRzg3cEIrR2p5K0JnSjY0VzRFdk9yRm1ROHJuWlpCdG5PZ3VnRWduRmNyanFDZjJRMGdvSmNzaHZPTncxbTlOeE05amtOM1d0eDVCMkJJSjhKNTcrWnB2d0lDZW5IT2crZk9XekcxbVJBeEpKK04wR25aYzFFSFlDRHhHbmRvTjJRUjk2dFpjZENZNXdJZGhWbUgyOFgrV3IrWWo3M1FTK3d3SFFjelR3RElKMTdqVGd2OFhKdFVQcVMrNUxmZUpyT1h2c3YzNFhia2VsYlFkemxOZlNlTDdZS0FYb1JqRFZLVGpsT0FiSFVhZGltcnNQNGFMS3dJUUw1clhVblBTY2ZabHU5VG1OM3MrUGM3c3hUVWZ3N2pqMkIzaThhOVV1V2dEVFZQY1k5M085ODZoRTI2YVRnNHprSTVyMGd4TFE2QVhFN0QrQ1BObTlTZitNOFVZRmVobjVsam0vUzc0dS84SVl3L1lIU1FiaGdBQXZxb2pQeTFMVjc0MW8xOXB4aktMME01N3krZEJlOVNCU0JQWUJ6ekpuRDMrdFlZbnQ5bURzOHhyQzhMQ09xbnFoMEk2R002YnpDODhYZkhqWVh6T0hLK1YrRG5Bb0MrN0kwWUZydTFpVjZFNFYvZGVuTW5xSSt4ZVBFc1dDa2ZCUFFSR1QyZmhuVm80MFpNcWVHOHU2QURRRi9HZXBYbjJ4U09WeU4vL3hqVVg2VXk5R2o2U2ZBYVZSRFFSeEFiM28xRE54bTFyOUsvQ0xmVDJsMHdBV2pkUEF3L3RiMEx4RzlDV1FzSHgxSDBPSkovTmVBMjk0SlJkQkRRUjNEc3NFM0tKb3gvTi93cDRkd3pZUUJNeGNuQTI3dEtJZmk4MFAwUit6QS9EZHlQK1ZVMUJBRjlTS3RnOUh5SzNnbm5BRkQ4ZFcvSWRVMnVVdmd0dlYvWVBSYy9WRWlmQmFQb0lLQVA2RGVIYkpMV29hNW4wWmZDT1FBVGN6UkNPTCtwYVA4TUdkSTlWZ2NDK21BaDdjb2htNnhhYnM2Y0R0eEpBWUN4TGNKd2k0N1dHTTd2aHZSMXh0OGZid0IwcjVZREJQVHMzamxja3hhZkw5dFVFTTRYRGhVQUV6UFVqZW1hdzNublZlaC93S2tMNXErRFIwRkJRQi9JVGFoM29URDZVK3BObWozaEhJQ0ptb2RoUnMrNzFkcHZLdDlmM1RQcGZYd1B3UndhOUx5U3p5bWMwOVdERXFlUHgzZWM3enM4TUFuN0tZekVuOS9mQ1NieDMrOTc3bk56cCtQOElYWEs0K2paMnE2Y2hObWQrckwzamRCMmRlZG5UWVphTmZ4VlF5RTBIdVA0VnFKZFY3MWZwYi9meXY2NDI2NytlT2RjZVdpNzJ2MjdkdlZwOXU0Y2k5bFgvdHk2MHJhcWFwOEtMTUlQZDhQd0o2VzNzbFNsL2pDM2ovOWltWEYvekNzTVdJZmJjcll0SDN2ZUZ4ZnBkODhtZUc1Y05OekJYZlJRWHk1VGVEc0laUy80dGVkYU5WaWY1bU9xRTdNR3Z2ZlUyOVdTeERZbXpnSzkzbkYvbjZYOVhjdkNoTlcyVDZVRmlHdm5EbmNzaEdxZEhnRmRRQjhvWkYwT2VDNWVGdHJKcVNXZ0wwZXVyL1BVVWMxVlA4NVNSN28waHdPZEc2M2FmMkF3WDRiNlYyYmZTL1ZsNkhaMU1hRjI5YUg5alZrSzVSOHp0Rk5EWGVOYkhMQzdxQ21nbndUNGF3TXZXQXZvQXJxQW5rT3VUc3RqeXNmMEdXWUNlaFVCZlQ1d1IvRTZsTFhleVJCaGF4N2FkdHA0TUMrbFhUMlpRTHU2Zk9DeEdDSm81cDc5M0hSQXIyR1JPS3UzYzVkblhvQmNIY2d1L0l6WkllNUc3NjlUaDlMN2pNc1VqOHRaNmxETlI2eXJZNTgzdVR2aHE5RCtjOFhIOS9SejRuLzdJUVd1V2hmRks2MWRQVXlmcFlXYkhydUkzL3R5b0haam5yYTFET3lrOUlDK0VjYTRoNXMyUUkyZGxzYzZET1dObUhJNzFmdzZqRHZsdkFzL1l5NVNPc1QzUDU1QWZZcDkzVlZEd1h3dmZmNVMyNjZqaWJXcisra2FkeFNHdnpGeGxMWTljOWxvSzZDdkhTTFVDeUNEZWVxa2pkRnBlV3hudHd0aVJ0UEhGNFBIV1VISFloNytYTDlnYUM4ei8vNVZtTTZydzFvSTVuZnI0MUhobjNNcTdlb2lqUCttb2U0R2dRVy9Hd3JvSHh3aTduRVY2bjhQS2pCdXlJcWRsbG1GTnhUbUR0OW9UZ3NPSGljajNEaklYUmQvbTFEZDJqVFFyOUd1bGhmT1QwTVpOeUQyZ2xjU054WFExdzRSNmdiUWN5ZmhxUExQZitoUWpoTE9GNFYveG9NdzNJamdmdWJ0WEFXUE9HcFhoLzM4aTRhT1NSZk9TOXpQUW5ybEFYMFRwak8xaWNjenV3SjRiS0FZZWtHdlhFNEs3SHdKNTJYVjg5d2hQZmQ1OUp0cVYwMTl1MnlrWFQxdHBGM2RML2g3ZEk4V2VGenJHNTRYL05uY09VWDlvQVcvaFB6UGF2WnQxbWc0YjZsVDBBWEcxMDZ4N09mdm90TDYvbFBJTjIzNng4emY0VnpWMDY1cVZ4L3RuK0gyVVpmUzYwMmNiZkhHS1ZSblFQL2Q0ZUVyMW5ZQkZZWGRtZDJnRTZreldmVStyclhlNXdycE9hZXBXbWRHdXpyMk9YOVRhWUJjVkhKTTRtTmE3L1hsdjZ6a0tlNE9HZys1aUFOTXNSTjV0ME8yY0tqNVF2MC95Zmk3YzNudjBHbFhDd2lRTmJhck5SMFRqMmxWR3RDRkw3NWxZeGNBRSs1RTN1M29XSGlIKzhTUXNlejVkODR5ZithMXc2WmQxYTQyYjVhaGJSTFFCMkI2RTkvaU1RamdQbE5jaU9Zc1dIaUgrOFhuUGVjVkJYUUROT1cycTFOclo3U3JlZjFxLzlZVjBOY09EUSt3c1F1QUwzU3FwamJ5RVVPVEtZTU1FVFJ5ZHFqamRkMEFUYmwxYURiQmR2WElvYzhtdGlVTHUrSHZTbDBrN3FhZ2l0Tzk2ek9lcEZkaDJOZS9UWDM3QWpyd1dNdlF4aXQvZG5HUXZ2dGFOZUNlNjNtOGdmT3FoOStWOCthWDY3cDJ0VFFXTk1zcmpxSy90UnZxQ09oalQxMmVwd3B6OEpVTHlMdFVvVzVzWDBBSGl0Qzl2bVZzNi9EbnpjMmh4UkQyZzZyQVBXcTRnVFAwZFgwVzJoL0JXejF4djViUXJzYSs1cFYydFVtejRNYnlnM3dxb0N4SCt1N2Q4elVQL1p6WG9kODdpbFBmZnEzMXRlYXkxT1Q5WWE0dURGWnl0aG1YQTM2UDJQNmRwTyt6OTQzTzdlSEFuMjFad2JseDBmT3hYenEzSGx4dlM5N1hTMjEvY1cydWR2VzJMTlM3YkdXWHg3TXVHdHdQRjZVSG5qSHVadTQ5NFVSZjJMNkFMcUFMNk1xb0FmMXdvTThmMjhtREo0eEVEZEdwK05qaktKT0EzbDQ1Rk5BRjlNTE9xNHNuZk03NVFPM3F0WHFYOVpvbG9OKzVMcFk2eFgwendqWXZ3dTdQVloybXo3eTIvVkhxeWt5K2hFbUxZVFQzRk13NHhmSTRQTzFadVRoRjg2Y1U4SE91TXQ4dHZPTzV2bkhFYStHSGNQK2FMYkZqL24yNjNvNjFrR0U4VjFiQllteDh1eDM1dFlKMmRaMUs3bloxbHRyVlZTUEg5K3FlTm1Dc1J3aTZOYSt1SHZuNWQ5MU9qaXl5NmVtWWZGSHJVeUR2c3d6OTNGbmJtL2oyeDlEaUhUUWo2TU9icXd0VnQrL0xrUC91ZnQ4WDlkalp5ems5ODdyd2M2TzFFZlNMMUhuZmUyUWRXS1pqVmRNbytqSVlRWjlDbTV2N25Mck8wSzd1VDd4ZC9WWTVTemN5OWg1d0krSXl0TmNmbmRmeTJVdCtEM3B0ZHdpN0NtMzdBUFcxNFYrN28vMGk5UDl1NWsyNEhVM1A5YzduV2RoOUtqNFB0MDdITVpaVmVOeW85Q1oxN09MaVU2L0RzQ1BhdnpwME5OaXVYZzNRcnM0clBKN3IxTTdFdHppY2Y2T3QyYVMyN0VYNjg1dUJQdU9QVGpzQi9hNXYzVW5LZmNGYjlMajlYMGJldmdzK01MUSsyN0F2ZGZaeWRWQnVNZ2V6bjFXUHJONmsrckh1NFhldFVnZjZmS0RQUGd0dTRQQmxod08wcTduYXZkenQ2aStWSGNzM1Q3aU9uWWM4TjFMdXMrKzBFOUJ6ZFdCbTRmSFBRNy9zdVhMdlZiWjlnS2ZJZFdNd2R5ZnZibWYxVGFiZkxZRGxxeHV4MC9vMncrOTlsYkUrMUI0MEdNNHZHYytkb2RyVlkrM3FIL3Y2YlEvSExPZXNoTHNaQ2dFOVc0V1lqYno5L2N4L2Z1amZCL0FsODR3WDllTXd6S2hCdEFwNUZ0bmNFOUt6Qkl6Y25kVzNxV09kVzU4ekNQdGltdXY0RGhwcFY5OW1iRmZuRlJ6SE42Ry9CZTI2ZGkvM2pSVWhYVUF2SmxDT3ZYMG5BMUNyWEtNOFYySDRGZEJ6amZhOFZFMnFDdWVkMVlBaHZTUm00WTB2MTZNeFk3U3J2MVcyai9xeURubG0rT1NlM1NPVENPaC9xWEJUM2o1QXJYS0ZpK01Sdmt2c1VHMHkvTjY1YXRLYk4yRzQwYjh1cEs4cURXTzdNZ3V2M1hiMXR4Ryt5M21tZHJYMGVwcnI1dDRxalBNcWJBRjlncTRhMi81akEvOTY1TzBEN05wQnlqSGF0Z25ETGRSMVgyZFM0Q25UZVJqbi9jZHZNbmVJNXp2OG5YWEd6N01YaktLMzJxNnVSangzU3podmhwSTdSUC9tTkJIUWF3dklOenRjdVByZS9sVmwyOWY1QkhhUmE1VG5mTVR2OUtHZ0VNWmZyMjF2UnR4MnpxbnVld1ZlUjEzWDIydFgxeU4rcHc4VHE2ZnZNLy8rYzZkSmZzOEwvVnp6QVUvbWQrSDJkUkpqVmRyM0U5OStINTBMWUhweUxTWTFDN2Z2cGg3RDl4bS9FN3VMSTBhYkViZS9UbVdlTVdnODV1WjY3aHZ4US9ZQnArQXhkVGZYbWhWN2piYXJWNFVkNjVzQit1S2JWRnhYSmhqUWgzVFY0NFh2M2NnWDN1TUt0dyt3YXljK2g0UFEzc3JuT2xKUHN5cmtKa0d1T3YvWW0xMjVIMld6c09GNEFUM1hxSENMN2VwK0tHODArV3JBT3VXNk1zR0EvdjNBMjR0VDF5NmYrRHVlOGpxSHZyYS9xWFQ3cFhYUW9lL08vYnZLUG5OY0hYMVI4T2Z6bk9yai9OTXUyRm11UmFaMi9SdzVPc1c3aExKMXhtdndQSjNmMXJUUnJ2TDQ0RHlFRC9yZzB3em9zNEczRis4NHhXZThUcC93OTQ5SDN2NmJpcmNQTGZ0WHFHKzZadWtYWHMrbzJsOUQrVkRRWjRudHlLS1FQbGZ1SUJCSFcxZXEzNkNCVFR2eE9EOFcrSm4rNWJDMG9kUkY0bVlqYkhNVmRsdUlKVjR3NDN0UmIwYmVmcWg4K3pxZEFKUm1QWUdiQmJ2MHVYN1AvRjEvVWZVR0QraEd6eCtueFAzMXZjTWlvTGNXMEx1USt1S0JGK1J1VmRjK3dybnRhNGlBaDV2YkJRemt5bWU1MTNxQWMzeW0rZzFhWnd4NjFNODUwNGlTRjRsNzdLcWlmVFptUDZYdHh5bFdueTlXc2dtM2Q3Rlh0bDlFSFFHQTFnTng3cyt6eTBydThlWjh6bEhFbzVEM0ZYTlRZTW96Q09oTkJQUzdGeC9iTDV1QURrQXVVMXFrYkplZ3ZRNTVWK2FPdi90TnNGamNVL3R5UUdXZUZmelpmblI0K0lwWjhMd1VBSXdsOXdKNjhScC9tSGtiNjIzNWJ1U3l5dno5QUFHOU4wWkhVVDhBb0V4RHZBTTZUbk9mTmI0ZmM4MUNNSG9PQW5ydjVnNFBYL0hTTGdDQTBXd0dDb0VuallmelhMTUIxNm9vQ09oQ091b0dBSzJZVFN4czcrTGRRQ0gyb05IOS9tdkczLzNCS1p5Vi9ZdUFEbmZFdTgybXVBUG9TRTRwb09mc0UrMGEwTThIK3U2bm9iMTFaK2FaaittNVV4Z0U5QnhNWTJib1RncFF2bzFkd0FTdk4vdUZub3REQk1FWXpzOGFxMXRIaFlWejdTb0k2QSsrTUZxcG04LzliQmVBZ0E0VEMraTVCaTJlK2h6NXV3R1B4V2tqOWVvZ2M5MTZyMTBGQVQxM0l3YnFCSkM3SXhsLzczY05scVVxczdPU2Jnam5DblJQZmMvNCtZRGhicEZLeldhWmJ6VGNoTEpHMExXcjBHQkFOMXJLWFhHS24xa1ZJS0RuNmpqUDdGNCt1K2FVTUxWOGtmSGExOGNhQmNjRDdvdlRpa042TjFVL1p6L21QT3gyMDBXN0NnTDZnK1Y4QlFYMStkVXVBRUsrVndpWm9VT0oxNTJjenl2MzhhcTBWUmgyaW5TdElUMkc4OXczZkg3VHJvS0FQbFJJQjNVQjZETlUzT2NYdTViUExNSzRvK2h4KzdNS3pxWGpnZmRMVFNHOUd6bWZEOUF1WGhWUUY3U3JUTWsvcHhyUW5kaDA0ZHhzQ2lESzllcXcvZUJORWZ6ZHlZakJMdWZvK1NiME4vSzlDc012TkhZYXluOEZXL3hzRjJHWUFZYmZudmozdGF1d1cvMmVaRUNQSi9YTThaODhOMnFBempyajd6NHE0UHNkT3NURjlVUEdPQ1lubWZzL2ZiOGk3YzBJKzJpUkF2QitvZlhtZXFEUHRnbTNOMG0wcTlwVkJQVEJlUFo0Mm1JSHhmUjJvTFByU3NVUDdWU1AyZDRzVXpDN0RFYWRTbkl5OFBGWWhQeFR1UHNlTVQzUEhQSysxa0crVE9kT0NhUHA4VE9jcGhzSFEzMmVQaDR4MEs3Q2J1ZDdyM1dxcG9DK0NLWTNUNWtiTk1EbjNtZjgzYkZ6UFJ2cFduZDBKM1JjcEU2bDYxOFpobGprcTZzSHVkLzVuU3VNdlI3eCtCeWxBTFlZc2FNZWcrRDF3SjloRTU0K2VxNWRoZDMxT3N1M3BvQWVUeUlqcU5PMEY4cGVDT2ExUXdTajJQVjFRZzl0ZDNLL0R1bWhvZXd3R1BVcDZYcVUrM25pd3dIQ2VlZ3gwTjBYRm85SFBFYXp0UCs2a0x3MzBEWlAwamFQUmdoK2ZmWkR0S3UwNmlaelBjdDY4L1pUd2VWYTNacWtaZUgxc2pzeFAxVllscXJYSCtiMjhXRG5YTitkb2RQTTU4amxRSjNKaDdZaFE0LzY1RG8zTGhxNFR2UjlMTHJ3TXRUbm4yV3VPNWVGWE9jK3BuYWk3NXNxc3pzaGI4enZkNWJoMkdsWHRhdGp0TGREM0N5cHRsNlhIaWdXc3NTazdLV0xhK2tCdld0d1B3WUJYVUFYMEllOEFNOEdPRTh1TTk4WlA5bmhadlc4OG5PamhZRGVIWXMrK2lXSEExOC9odWpJN3hkNlRieEk5ZVhnRWVmMVBKVmxDc1RYQmQxOHlIR2pSYnVxWFcwMW9GOFBVSyt6M1B3c1BWQVlSWitXWlFWMXNvWU9pWUF1b0xjYTBLUFRNRXhIK0RCRHZYdEtaMkdJcWFJQytzUDdKb2VQN0pqdHB4QXh4alZqcUNDeXFPeW05V1ZsMS9CRnhtT25YZFd1dGhqUXp3YXExOHUrNjlIVUd5VEtVY1BvK2FlS1JnMEVkQUc5MVlBK0M4T092czE3cUc4WFBYWUVEaW84TjFvTDZKK0g5YlAwbVpiaHo5V3J1MzhmZXdUMll1RDI1RFRVRmRKcktXZVpqNXQyVmJ2YVlrQWY4bHJSUFY2eitNWjNtNlg2TnFzOW9IOE1WbDZjZ21VbDlmRkxJeU9YUVVBWDBBWDBvUzdBSjJINEVMWU1qNXNpZTVJeG1PVWE5UkhRMnl2ekVkcVVTL3U5OS9abmlIN3dHTzNxb1haVlFNOW92NGEyK1htbG5lbTlkQUlMRisyS2Q1R09Ldjc4Vjl2eVUyb3M5eDFPeU80NERQczZ6cTZONnRxcDlWZiszR3lBejNPUUx1NXhOZWR6MVlFdkdPczk1YTZIL1lrclViOEtlVmVrSHJOZFBibno3OXBWY3ZUUGIwTGhBNzNQSzk3QnNWTzBDcmV2ODZBOUo0MWNSSFZLWUxqekxYYWl6a2JhL3J5QWZkQ3RBcjVPYlE5OGZvNjhHVGxVRHJWNmQ4dGVwNUNoWFIyMlhUMVBkWmo2eFdPNUtQa0RQcXQ4QjUrcVkwMktEWElyNzd6dlFybzdyekRNUlhkbE44Qzk0bWpvWnNUdGI5TDE4TWFoZUZJNEg3by9vVjM5TTZqVGhuZWxmOERhQTNwTFFZNC9HOERXYnJ4MEl3Y2xYdURXcWh5TmlTT0VWL1lCL0sydGYxdkE1N2dTMG5kMlBHSS9RcnVxWFcydFBTeTZQajlyWUNlZkJuZTFXaElmWFpnMSt0MWVGeGpTcjFRNUd0Tk55WnhxQURoMlhuUFBPVkhTMU53dXBLdW5EeGY3RGt2dHFuYVYzdnhXVzBEZlZMYURXeHh4bmFwNTZQOTltQ1dHOUxlRmZKYXJZQlNETm5VQllJcmZlK253ODFtd0tuSEVXa2gvdURlcDc2QmQxYTdTbjFYSjdVOExBVDA2bUVDd2ExMjNDSWVMN1hCK1UrMW92RlAxZWtMZjl5WllHSTc3cnpkWGhkZlpsY1AwUlNYZDFOZXUwbUw3V0UxQXIxV2NHbTJsN0hybGV0ZGtxVllqWCtUaVJjZkNkVGpQMnVwRW1oSEQ1NTNQVlFWMTkzWHdmTytYenVrU2o1OTJsVmFzUTFrM3dKb002TjFVZDgrajEyY1p5bmlWeGk0MlBWemt4bWo4ajExMG1GQklmOUY0ZlkvUEY1c3F6T2YxL20xRm4vZHRPazgzRHQwZjUvS0xVUFlpcnFzSmhGZVBZRXhEa2JPTTdndm9OWjlzKzhIejZMV0pqeWNjVmZ6NW45cVpHT01pdDY2czR3WjlkSGhiN0d4MWkzK3RIZUtzbmJmYStrWHh1dks2MHZQMHhjU3ZUelhkcUZnMzNxNEs1OU5SWEQyK0w2RC8za0RnTzFIWHF1Q0d5bC9Ed3hDZHdKc3dyZWZINFBQenJKVkhPMjRhK3o3YTUzNjhycnlOai92NVRaamU2T1VtZmVjM2xaNGYybFZxUCs2dlEwRTN4cDQxdXFQamduRUw5YTFvM2FKd3RUK1NjTlhqNzhuZENld3VQQnZWandsZmhGK0YrbDhYWkFWc0lmMUxkWHZWeUQ1Zmg5dVI1RGVoL2NleHVsSHpkZVh0YXUzSFNydXFuWDlSeXZGLzlvVkdzUVZ4WlBaQWZTczJuRitFTnQ1My90ODlOdzQvWkdvY05pNDg4RytyZENFK3IvU3pPNWNuM25uN1FwaHRjZFR2YmJvdXRyaHV5anA5dDFadVFyelZybEs1WWhabmJPMFo5UHRDdXBYZHl3em5yUnlYZGFiR29jOW44TTRMN2xqQ1dEYmhkdFNubGs1WjkzbHJILzJ2dmM3MDNUNC85WHJSVFFmZk5ONXBYallVMU5mcG1MVjQzTzYycTV1S1BxOTJsYnZ0emV0VUwwYXJ3L2NGOUpZNjhhMkZRY2VqekJNNVo2ZnJLVGNBdWs3QUt4Y2UrT3A1OGlJVTl2elpaKzNCY1doM2hMVEdOcitFVUx4S2dmWHR4UFo5RjlSTFBWKy9kY3grNnVIYVhrdTdXdkp4MHE3eUxkM2dWbEUzQlMrMzVWTkQ1YU9RWGtRNGI2MWVmUnBvMzhXNkd4Yyt2SDdBNTdsT2YxWjlmNXg1eGpxeXJIQi9MRFB1ajNrRmRlR3NrT3RXUEpkbmpaNGJGNVhVMlcvVjE4VUQyK2ErNnNScGFPUHhzRDZ2ajZkcDM1VFlSN2hPZFhQcXgweTdXbWU3V2xwN08yYUdXUXlRWS83OS9aOS80WU5jTmRiQjcwWnVQVjh5N3Y1dkxUU3VCOXJPVlNwdjBrVmxkazhqRmovTEpsZ0FEdm80cjlmcFBJdnJtUHd5Y05zVnovVjM0WGEwemN5WDhxMVNXYVM2a3FPREdVZHkzcWVmNnNUZno1ZHU1ZnE0NzM5T1AvZEgva3pyZEI3cmMycFhxZC9ObmJaKy83TzJwaStiaDlUTnc5RGVTR2RYRnVyWjRPSDhzdEc2NUhWK01KMTJMRjQ3VGpPMVp4ZnB1anV6cTNlMkRHV002TXhTWFltamhidU82bDZtdXJZSTliL3BaQ3hkRUR4SjUxZk92c0JsMnM3Q09heGRaWExtcVo0dFU1MjcrRWJiL3pIOW1iUDBkdzd1cTZQZmZXRmorK2xrYVZVY2lYeXJUbVczbnlwZ3E0MWpmTGJiczBzdzNZdnlYdmh6Rk9qN0I3WjE4UTc1NytIMmJuazNPNForQXZwUmh0LzcxT2VGdXpweXQ2NTg3aXJWaXh2MUlYc2czQTkvemtTTGZuekVUWkI0YkxvM3Q2d2RMKzBxaktIVTUzbjZLcWNPY1ZZSEU2aERNNGNab0ppQVBzVTFFd0JvekxPdi9MOTE0OTk5RVc1bkNaZytscWVqZE5iNHZvMTNaemNPTlFBQU1FUkEvekNCN3grbjBNUVZOdWVxUWkvMlVqQS9tc0IzWFR2Y0FBREFVQUY5S3MvV2RpdU1XL0RyYWViaDltYkh3VVMrNzN1SEhBQUFHQ3FnYjhLMEZsbUlLL0RGS2UvZUgvMDQ4UVpIdDBycVZCNFhpSXVSckIxNkFBQmdxSUFldlp2WS91aFdyMThHejZZL3hEenRyOE9KZlc4cnR3TUFBSU1IOUtrR2thTVVQQTlVa1h2Tnd1Mno1aGRobWl1WnYxTUZBQUNBb1FQNkpreDNLdS9kRUdyYSs2MDRxMkFacG4zellzcm5CQUFBTUdKQWo2WStXamhQZ2ZRMFRQdTkxM0VhZTF3RTdpaE1lL3EvMFhNQUFHQlVIN2Zsay9KSG1WSlEzN3NUekIzNzIySnRBb0R5TERPMStYTzdGb0FoUFh2Z24vdk5ydnEzUlFxc0Z3MWZ1R2Vwc3hPLzUwbVk5c3lCdTFiaGRnVjNBQUNBMGNSUlE2UG9meThYalIzbitGejVtZVA2eGVKR0JVQ1psc0VJT2dBTmVPZ0llaHcxWE5sZFRZb0w0SjJrR3pCbndjcjFYN0lPdHd2RUFRQUFaUEg4RVgvMk9OeE83L1lNYnQzaThadHZ5OC9wNTh3dWVYRDlCd0FBS0NLZ3gxSDArQ3o2a2QxV2xSakE0eWo1eXhUSXZUTHU4VmJCcTlVQUFJQ0NBbnIwZGx0K0RVYlJTelJQUDJNQS96NzkzSGVzZW1IMEhBQUFLQzZnMzZTd2NtTFhqYTU3QlpvYkpubkZtMUlidXdFQUFNanQyUTUvSndhV0s3dHUxR0MrRExldlFEc1N6clBxYmtnQkFBQVVHZENqTjNhZFlENEJyNFAzbmdNQUFJVUg5SFc0SFVsSE1HL1ZlU29BQUFCRkIvUW9UdjNkMklXQ2VZUGlxUGxydXdFQUFCalM4eWY4M1JoaVhtM0xwZDNZZXpDMytOdTRURzBIQUFBRzkreUpmejh1RnVkNTlQNkMrVElZTVI5YmZIVEQxSFlBQUdCd3ozdjRIVEhRdk55V0E3dHo1MkJ1eEx3TWJqZ0JBQUJWQi9Rb1RnbWViY3UrWFNxWVY2cDdaQU1BQUdBVXozcjZQZDJpV2xON2JuZHZ4Nyt6REtheWx4Yk9md29XUFFRQUFCb0k2TkZWQ2psVEN1bjdqd2pZZ25tNTNxVDZDd0FBMEVSQTcwTDYxSjdoUFJUTXF4Wm5mcXpzQmdBQW9GV0xiZmswb2JMNFNqRC9PTEY5VWZ0eEE2QSt5MHpYaWJsZEM4Q1FubWY2dmF2MDgzUWkrekYrejErMjVYMjRmWTc1WlFwL1JzdkxaZVFjQUFDWVJFQ2ZZa2lmQjNmYWhYTUFBSUFkUGN2OCsyTUlpcSt1dXJHckVjNEJBQURHQytqUmVaamU2dTZVcDN2UHVYQU9BQUJNTnFCSGNYWDNINEpYV1RHT1RiaTlTWFJ1VndBQUFLVjZQdUMyYmxKSU9nbFd6Mlk0NitBeEM0QXB0UFU1Yk94YUFLWWdCblN2SDFOeWw2VlREUUFBNE50bTIzSXBSQ29aeXZXMjdEdkZBQUNBbXZ6SGlOdU9VNDcvOTdaOGw4TFVQeHdPZW5BY2JsZHEzOWdWQUFBQWp6ZmJsb3RnNUZmWnZjVDZZOVFjQUFDZ0ovTndPejFaNEZRZU01MTk0ZFFCQUFESVl5R29LOThvY1pIQjViYnNPVjBBQUFBRWRVVXdCd0FBbUpTRDRCbjFxWmZMWUNvN0FBQkFNV2JiY2hLTXFrOXB0UHcwV1B3TkFBQ1lnTzhxL3V4eFZQMWwramx6S0pzUlg3OTN2aTN2MDA4QUFBQUJ2U0p4aEhXK0xiOEs2MVZhYjh1SEZNaXY3QTRBQUdDS25qZnlQYTVTaVF1SEhUbXN4WWZ4emJiOG5vN1oyaTRCQUFCb0o2RHpjSnRVSHVzbWhlcGR0eVdJQXdBQUNPaWtvSHk4TFN1N0FnQUFRRUJITUFjQUFFQkFGOHdCQUFBUTBCSE1BUUFBRU5BRmN3QUFBQVIwQkhNQUFBQUVkTUVjQUFBQUFSM0JIQUFBQUFGZE1BY0FBRUJBUnpBSEFBQkFRQmZNQVFBQUVOQVJ6QUVBQUJEUUJYTUFBQUFFZEFSekFBQUFCSFRCSEFBQUFBRWR3UndBQUFBQlhUQUhBQUJBUUIvYmpXQU9BQUFBNDV0dnk2ZEN5dlcyTEJ3U0FBQUFwbWhmTUFjQUFJQXlYQXZtQUFBQU1MNFR3UndBQUFER054UE1BUUFBb0F4THdSd0FBQURLY0NtWUF3QUF3UGoyZWdycGdqa0FBQUQwRU5MUEJITUFBQUFvdzBGNCtPdlhCSE1BQUFBRzk5M0V2dTk4VzM3ZWx2MVU0Z2o3emJaY3BmSmhXODVWQ3dBQUFBQUFBSUFKK3Y4Q0RBRHpvTXcxTGJPSVdBQUFBQUJKUlU1RXJrSmdnZz09Ii8+CjwvZGVmcz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/address-book.svg":
/*!***************************************!*\
  !*** ./src/svg/icon/address-book.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgAddressBook),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAddressBook = function SvgAddressBook(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 14.667,
    height: 16
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M11 0H5a3.667 3.667 0 0 0-3.262 2H1a1 1 0 0 0 0 2h.333v1.333H1a1 1 0 0 0 0 2h.333v1.334H1a1 1 0 0 0 0 2h.333V12H1a1 1 0 0 0 0 2h.738A3.667 3.667 0 0 0 5 16h6a3.671 3.671 0 0 0 3.667-3.667V3.667A3.671 3.671 0 0 0 11 0Zm1.667 12.333A1.667 1.667 0 0 1 11 14H5a1.667 1.667 0 0 1-1.667-1.667V3.667A1.667 1.667 0 0 1 5 2h6a1.667 1.667 0 0 1 1.667 1.667Zm-6.333-6A1.667 1.667 0 1 1 8 8a1.667 1.667 0 0 1-1.667-1.667Zm4.325 4.488a.443.443 0 0 1-.449.512H5.769a.443.443 0 0 1-.449-.512 2.736 2.736 0 0 1 5.338 0Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNC42NjciIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNC42NjcgMTYiPgogIDxwYXRoIGlkPSJhZGRyZXNzLWJvb2siIGQ9Ik0xMiwwSDZBMy42NjcsMy42NjcsMCwwLDAsMi43MzgsMkgyQTEsMSwwLDAsMCwyLDRoLjMzM1Y1LjMzM0gyYTEsMSwwLDAsMCwwLDJoLjMzM1Y4LjY2N0gyYTEsMSwwLDAsMCwwLDJoLjMzM1YxMkgyYTEsMSwwLDAsMCwwLDJoLjczOEEzLjY2NywzLjY2NywwLDAsMCw2LDE2aDZhMy42NzEsMy42NzEsMCwwLDAsMy42NjctMy42NjdWMy42NjdBMy42NzEsMy42NzEsMCwwLDAsMTIsMFptMS42NjcsMTIuMzMzQTEuNjY3LDEuNjY3LDAsMCwxLDEyLDE0SDZhMS42NjcsMS42NjcsMCwwLDEtMS42NjctMS42NjdWMy42NjdBMS42NjcsMS42NjcsMCwwLDEsNiwyaDZhMS42NjcsMS42NjcsMCwwLDEsMS42NjcsMS42NjdabS02LjMzMy02QTEuNjY3LDEuNjY3LDAsMSwxLDksOCwxLjY2NywxLjY2NywwLDAsMSw3LjMzMyw2LjMzM1ptNC4zMjUsNC40ODhhLjQ0My40NDMsMCwwLDEtLjQ0OS41MTJINi43NjlhLjQ0My40NDMsMCwwLDEtLjQ0OS0uNTEyLDIuNzM2LDIuNzM2LDAsMCwxLDUuMzM4LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSkiIGZpbGw9IiM2ZTZlNmUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/angle-circle.svg":
/*!***************************************!*\
  !*** ./src/svg/icon/angle-circle.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgAngleCircle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAngleCircle = function SvgAngleCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "#6e6e6e"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 16a8 8 0 1 1 8-8 8 8 0 0 1-8 8ZM8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Z",
    "data-name": "Path 1505"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 10.672a2.327 2.327 0 0 1-1.633-.661L4.3 7.982a1 1 0 1 1 1.4-1.426l2.067 2.026a.337.337 0 0 0 .467 0L10.3 6.551a1 1 0 1 1 1.4 1.426l-2.066 2.035a2.329 2.329 0 0 1-1.633.66Z",
    "data-name": "Path 1506"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8ZyBpZD0iYW5nbGUtY2lyY2xlLXJpZ2h0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNikgcm90YXRlKDkwKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8xNTA1IiBkYXRhLW5hbWU9IlBhdGggMTUwNSIgZD0iTTE2LDhBOCw4LDAsMSwxLDgsMCw4LDgsMCwwLDEsMTYsOFpNMiw4QTYsNiwwLDEsMCw4LDIsNiw2LDAsMCwwLDIsOFoiIGZpbGw9IiM2ZTZlNmUiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzE1MDYiIGRhdGEtbmFtZT0iUGF0aCAxNTA2IiBkPSJNMTMuNzksOS45ODZhMi4zMjcsMi4zMjcsMCwwLDEtLjY2MSwxLjYzM0wxMS4xLDEzLjY4NmExLDEsMCwxLDEtMS40MjYtMS40TDExLjcsMTAuMjE5YS4zMzcuMzM3LDAsMCwwLDAtLjQ2N0w5LjY2OSw3LjY4NmExLDEsMCwxLDEsMS40MjYtMS40TDEzLjEzLDguMzUyYTIuMzI5LDIuMzI5LDAsMCwxLC42NiwxLjYzM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjExOCAtMS45ODYpIiBmaWxsPSIjNmU2ZTZlIi8+CiAgPC9nPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/arrow-square-left.svg":
/*!********************************************!*\
  !*** ./src/svg/icon/arrow-square-left.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgArrowSquareLeft),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArrowSquareLeft = function SvgArrowSquareLeft(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#3c3c3c",
    d: "M6.983 11.16 4.155 8.368a.517.517 0 0 1 0-.736L6.983 4.84A.6.6 0 0 1 8 5.265V7h3a1 1 0 0 1 0 2H8v1.735a.6.6 0 0 1-1.017.425Zm5.35 4.84H3.666A3.671 3.671 0 0 1 0 12.333V3.667A3.671 3.671 0 0 1 3.667 0h8.666A3.671 3.671 0 0 1 16 3.667v8.667A3.671 3.671 0 0 1 12.333 16Zm0-2A1.669 1.669 0 0 0 14 12.333V3.667A1.669 1.669 0 0 0 12.333 2H3.666A1.669 1.669 0 0 0 2 3.667v8.667A1.669 1.669 0 0 0 3.667 14Z",
    "data-name": "arrow-alt-square-down (1)"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBpZD0iYXJyb3ctYWx0LXNxdWFyZS1kb3duXzFfIiBkYXRhLW5hbWU9ImFycm93LWFsdC1zcXVhcmUtZG93biAoMSkiIGQ9Ik0xMS4xNiw5LjAxNyw4LjM2OCwxMS44NDVhLjUxNy41MTcsMCwwLDEtLjczNiwwTDQuODQsOS4wMTdBLjYuNiwwLDAsMSw1LjI2NSw4SDdWNUExLDEsMCwwLDEsOSw1VjhoMS43MzVBLjYuNiwwLDAsMSwxMS4xNiw5LjAxN1pNMTYsMy42Njd2OC42NjdBMy42NzEsMy42NzEsMCwwLDEsMTIuMzMzLDE2SDMuNjY3QTMuNjcxLDMuNjcxLDAsMCwxLDAsMTIuMzMzVjMuNjY3QTMuNjcxLDMuNjcxLDAsMCwxLDMuNjY3LDBoOC42NjdBMy42NzEsMy42NzEsMCwwLDEsMTYsMy42NjdabS0yLDBBMS42NjksMS42NjksMCwwLDAsMTIuMzMzLDJIMy42NjdBMS42NjksMS42NjksMCwwLDAsMiwzLjY2N3Y4LjY2N0ExLjY2OSwxLjY2OSwwLDAsMCwzLjY2NywxNGg4LjY2N0ExLjY2OSwxLjY2OSwwLDAsMCwxNCwxMi4zMzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNikgcm90YXRlKDkwKSIgZmlsbD0iIzNjM2MzYyIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/arrow-square-right.svg":
/*!*********************************************!*\
  !*** ./src/svg/icon/arrow-square-right.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgArrowSquareRight),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArrowSquareRight = function SvgArrowSquareRight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#3c3c3c",
    d: "m9.017 4.84 2.828 2.792a.517.517 0 0 1 0 .736L9.017 11.16A.6.6 0 0 1 8 10.735V9H5a1 1 0 1 1 0-2h3V5.265a.6.6 0 0 1 1.017-.425ZM3.667 0h8.667A3.671 3.671 0 0 1 16 3.667v8.666A3.671 3.671 0 0 1 12.333 16H3.667A3.671 3.671 0 0 1 0 12.333V3.666A3.671 3.671 0 0 1 3.667 0Zm0 2A1.669 1.669 0 0 0 2 3.667v8.666A1.669 1.669 0 0 0 3.667 14h8.667A1.669 1.669 0 0 0 14 12.333V3.666A1.669 1.669 0 0 0 12.333 2Z",
    "data-name": "arrow-alt-square-down (1)"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBpZD0iYXJyb3ctYWx0LXNxdWFyZS1kb3duXzFfIiBkYXRhLW5hbWU9ImFycm93LWFsdC1zcXVhcmUtZG93biAoMSkiIGQ9Ik0xMS4xNiw5LjAxNyw4LjM2OCwxMS44NDVhLjUxNy41MTcsMCwwLDEtLjczNiwwTDQuODQsOS4wMTdBLjYuNiwwLDAsMSw1LjI2NSw4SDdWNUExLDEsMCwxLDEsOSw1VjhoMS43MzVBLjYuNiwwLDAsMSwxMS4xNiw5LjAxN1pNMTYsMy42Njd2OC42NjdBMy42NzEsMy42NzEsMCwwLDEsMTIuMzMzLDE2SDMuNjY3QTMuNjcxLDMuNjcxLDAsMCwxLDAsMTIuMzMzVjMuNjY3QTMuNjcxLDMuNjcxLDAsMCwxLDMuNjY3LDBoOC42NjdBMy42NzEsMy42NzEsMCwwLDEsMTYsMy42NjdabS0yLDBBMS42NjksMS42NjksMCwwLDAsMTIuMzMzLDJIMy42NjdBMS42NjksMS42NjksMCwwLDAsMiwzLjY2N3Y4LjY2N0ExLjY2OSwxLjY2OSwwLDAsMCwzLjY2NywxNGg4LjY2N0ExLjY2OSwxLjY2OSwwLDAsMCwxNCwxMi4zMzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzNjM2MzYyIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/bar.svg":
/*!******************************!*\
  !*** ./src/svg/icon/bar.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgBar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBar = function SvgBar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 6.333
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M15 2H1a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z",
    "data-name": "Path 1484"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M1 4.333h8.667a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2Z",
    "data-name": "Path 1485"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBpZD0ic3ltYm9sIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSI2LjMzMyIgdmlld0JveD0iMCAwIDE2IDYuMzMzIj4KICA8cGF0aCBpZD0iUGF0aF8xNDg0IiBkYXRhLW5hbWU9IlBhdGggMTQ4NCIgZD0iTTE1LDVIMUExLDEsMCwwLDEsMSwzSDE1YTEsMSwwLDAsMSwwLDJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSIgZmlsbD0iIzZlNmU2ZSIvPgogIDxwYXRoIGlkPSJQYXRoXzE0ODUiIGRhdGEtbmFtZT0iUGF0aCAxNDg1IiBkPSJNOSw4aDguNjY3YTEsMSwwLDEsMSwwLDJIOUExLDEsMCwxLDEsOSw4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTggLTMuNjY3KSIgZmlsbD0iIzZlNmU2ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/blocks.svg":
/*!*********************************!*\
  !*** ./src/svg/icon/blocks.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgBlocks),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBlocks = function SvgBlocks(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#94949A",
    fillRule: "evenodd",
    d: "M4.819.5h6.362c.604 0 1.102 0 1.508.033.421.035.809.109 1.173.294a3 3 0 0 1 1.311 1.311c.185.364.26.752.294 1.173.033.406.033.904.033 1.508v6.362c0 .604 0 1.102-.033 1.508-.035.421-.109.809-.294 1.173a3 3 0 0 1-1.311 1.311c-.364.185-.752.26-1.173.294-.406.033-.904.033-1.508.033H4.819c-.604 0-1.102 0-1.508-.033-.421-.035-.809-.109-1.173-.294a3 3 0 0 1-1.311-1.311c-.185-.364-.26-.752-.294-1.173C.5 12.283.5 11.785.5 11.18V4.819c0-.604 0-1.102.033-1.508.035-.421.109-.809.294-1.173A3 3 0 0 1 2.138.827c.364-.185.752-.26 1.173-.294C3.717.5 4.215.5 4.82.5ZM2 6.5v4.65c0 .642 0 1.08.028 1.417.027.329.076.497.135.614a1.5 1.5 0 0 0 .656.655c.117.06.285.109.614.136.338.027.775.028 1.417.028h6.3c.642 0 1.08 0 1.417-.028.329-.027.497-.076.614-.136a1.5 1.5 0 0 0 .655-.655c.06-.117.109-.285.136-.614.027-.338.028-.775.028-1.417V6.5H2ZM14 5H2v-.15c0-.642 0-1.08.028-1.417.027-.329.076-.497.135-.614a1.5 1.5 0 0 1 .656-.656c.117-.06.285-.108.614-.135C3.771 2.001 4.208 2 4.85 2h6.3c.642 0 1.08 0 1.417.028.329.027.497.076.614.135a1.5 1.5 0 0 1 .655.656c.06.117.109.285.136.614.027.338.028.775.028 1.417V5Z",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjgxOTAzIDAuNUgxMS4xODFDMTEuNzg0NyAwLjQ5OTk5MSAxMi4yODMgMC40OTk5ODMgMTIuNjg4OSAwLjUzMzE0NkMxMy4xMTA0IDAuNTY3NTkgMTMuNDk4IDAuNjQxNTEzIDEzLjg2MiAwLjgyNjk4MUMxNC40MjY1IDEuMTE0NiAxNC44ODU0IDEuNTczNTQgMTUuMTczIDIuMTM4MDNDMTUuMzU4NSAyLjUwMjAzIDE1LjQzMjQgMi44ODk1NiAxNS40NjY5IDMuMzExMTNDMTUuNSAzLjcxNzAyIDE1LjUgNC4yMTUyOSAxNS41IDQuODE5MDFWMTEuMTgxQzE1LjUgMTEuNzg0NyAxNS41IDEyLjI4MyAxNS40NjY5IDEyLjY4ODlDMTUuNDMyNCAxMy4xMTA0IDE1LjM1ODUgMTMuNDk4IDE1LjE3MyAxMy44NjJDMTQuODg1NCAxNC40MjY1IDE0LjQyNjUgMTQuODg1NCAxMy44NjIgMTUuMTczQzEzLjQ5OCAxNS4zNTg1IDEzLjExMDQgMTUuNDMyNCAxMi42ODg5IDE1LjQ2NjlDMTIuMjgzIDE1LjUgMTEuNzg0NyAxNS41IDExLjE4MSAxNS41SDQuODE5MDFDNC4yMTUyOSAxNS41IDMuNzE3MDIgMTUuNSAzLjMxMTEzIDE1LjQ2NjlDMi44ODk1NiAxNS40MzI0IDIuNTAyMDMgMTUuMzU4NSAyLjEzODAzIDE1LjE3M0MxLjU3MzU0IDE0Ljg4NTQgMS4xMTQ2IDE0LjQyNjUgMC44MjY5ODEgMTMuODYyQzAuNjQxNTEzIDEzLjQ5OCAwLjU2NzU5IDEzLjExMDQgMC41MzMxNDYgMTIuNjg4OUMwLjQ5OTk4MyAxMi4yODMgMC40OTk5OTEgMTEuNzg0NyAwLjUgMTEuMTgxVjQuODE5MDNDMC40OTk5OTEgNC4yMTUzIDAuNDk5OTgzIDMuNzE3MDMgMC41MzMxNDYgMy4zMTExM0MwLjU2NzU5IDIuODg5NTYgMC42NDE1MTMgMi41MDIwMyAwLjgyNjk4MSAyLjEzODAzQzEuMTE0NiAxLjU3MzU0IDEuNTczNTQgMS4xMTQ2IDIuMTM4MDMgMC44MjY5ODFDMi41MDIwMyAwLjY0MTUxMyAyLjg4OTU2IDAuNTY3NTkgMy4zMTExMyAwLjUzMzE0NkMzLjcxNzAzIDAuNDk5OTgzIDQuMjE1MyAwLjQ5OTk5MSA0LjgxOTAzIDAuNVpNMiA2LjVWMTEuMTVDMiAxMS43OTI0IDIuMDAwNTggMTIuMjI5MiAyLjAyODE2IDEyLjU2NjdDMi4wNTUwMyAxMi44OTU1IDIuMTAzNzIgMTMuMDYzNyAyLjE2MzQ5IDEzLjE4MUMyLjMwNzMgMTMuNDYzMiAyLjUzNjc3IDEzLjY5MjcgMi44MTkwMiAxMy44MzY1QzIuOTM2MzEgMTMuODk2MyAzLjEwNDQ3IDEzLjk0NSAzLjQzMzI4IDEzLjk3MThDMy43NzA4NSAxMy45OTk0IDQuMjA3NTcgMTQgNC44NSAxNEgxMS4xNUMxMS43OTI0IDE0IDEyLjIyOTIgMTMuOTk5NCAxMi41NjY3IDEzLjk3MThDMTIuODk1NSAxMy45NDUgMTMuMDYzNyAxMy44OTYzIDEzLjE4MSAxMy44MzY1QzEzLjQ2MzIgMTMuNjkyNyAxMy42OTI3IDEzLjQ2MzIgMTMuODM2NSAxMy4xODFDMTMuODk2MyAxMy4wNjM3IDEzLjk0NSAxMi44OTU1IDEzLjk3MTggMTIuNTY2N0MxMy45OTk0IDEyLjIyOTIgMTQgMTEuNzkyNCAxNCAxMS4xNVY2LjVIMlpNMTQgNUgyVjQuODVDMiA0LjIwNzU3IDIuMDAwNTggMy43NzA4NSAyLjAyODE2IDMuNDMzMjhDMi4wNTUwMyAzLjEwNDQ3IDIuMTAzNzIgMi45MzYzMSAyLjE2MzQ5IDIuODE5MDJDMi4zMDczIDIuNTM2NzcgMi41MzY3NyAyLjMwNzMgMi44MTkwMiAyLjE2MzQ5QzIuOTM2MzEgMi4xMDM3MiAzLjEwNDQ3IDIuMDU1MDMgMy40MzMyOCAyLjAyODE2QzMuNzcwODUgMi4wMDA1OCA0LjIwNzU3IDIgNC44NSAySDExLjE1QzExLjc5MjQgMiAxMi4yMjkyIDIuMDAwNTggMTIuNTY2NyAyLjAyODE2QzEyLjg5NTUgMi4wNTUwMyAxMy4wNjM3IDIuMTAzNzIgMTMuMTgxIDIuMTYzNDlDMTMuNDYzMiAyLjMwNzMgMTMuNjkyNyAyLjUzNjc3IDEzLjgzNjUgMi44MTkwMkMxMy44OTYzIDIuOTM2MzEgMTMuOTQ1IDMuMTA0NDcgMTMuOTcxOCAzLjQzMzI4QzEzLjk5OTQgMy43NzA4NSAxNCA0LjIwNzU3IDE0IDQuODVWNVoiIGZpbGw9IiM5NDk0OUEiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/bulb-solid.svg":
/*!*************************************!*\
  !*** ./src/svg/icon/bulb-solid.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgBulbSolid),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBulbSolid = function SvgBulbSolid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 18.006,
    height: 24.003
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#a2a2a2",
    d: "M14.999 2.289a9 9 0 0 0-12.126 13.3 6.263 6.263 0 0 1 2.132 4.563v.161a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.549a5.323 5.323 0 0 1 1.932-4 8.994 8.994 0 0 0 .062-13.477ZM9.315 22.003h-.62a1.692 1.692 0 0 1-1.69-1.69s-.007-.26-.008-.31h4.008v.31a1.692 1.692 0 0 1-1.69 1.69Zm4.3-7.741a7.667 7.667 0 0 0-2.364 3.741h-1.246v-7.184a3 3 0 0 0 2-2.816 1 1 0 0 0-2 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 2 2.816v7.184H6.683a8.634 8.634 0 0 0-2.448-3.881A7 7 0 0 1 8.186 2.049a7.452 7.452 0 0 1 .828-.046 6.921 6.921 0 0 1 4.652 1.778 6.993 6.993 0 0 1-.048 10.481Z",
    "data-name": "bulb (1)"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC4wMDYiIGhlaWdodD0iMjQuMDAzIiB2aWV3Qm94PSIwIDAgMTguMDA2IDI0LjAwMyI+CiAgPHBhdGggaWQ9ImJ1bGJfMV8iIGRhdGEtbmFtZT0iYnVsYiAoMSkiIGQ9Ik0xNy45OTQsMi4yODZhOSw5LDAsMCwwLTEyLjEyNiwxMy4zQTYuMjYzLDYuMjYzLDAsMCwxLDgsMjAuMTQ5di4xNjFBMy42OTQsMy42OTQsMCwwLDAsMTEuNjksMjRoLjYyQTMuNjk0LDMuNjk0LDAsMCwwLDE2LDIwLjMxdi0uNTQ5YTUuMzIzLDUuMzIzLDAsMCwxLDEuOTMyLTQsOC45OTQsOC45OTQsMCwwLDAsLjA2Mi0xMy40NzdaTTEyLjMxLDIyaC0uNjJBMS42OTIsMS42OTIsMCwwLDEsMTAsMjAuMzFzLS4wMDctLjI2LS4wMDgtLjMxSDE0di4zMUExLjY5MiwxLjY5MiwwLDAsMSwxMi4zMSwyMlptNC4zLTcuNzQxQTcuNjY3LDcuNjY3LDAsMCwwLDE0LjI0NiwxOEgxM1YxMC44MTZBMywzLDAsMCwwLDE1LDhhMSwxLDAsMCwwLTIsMCwxLDEsMCwwLDEtMiwwQTEsMSwwLDAsMCw5LDhhMywzLDAsMCwwLDIsMi44MTZWMThIOS42NzhBOC42MzQsOC42MzQsMCwwLDAsNy4yMywxNC4xMTksNyw3LDAsMCwxLDExLjE4MSwyLjA0Niw3LjQ1Miw3LjQ1MiwwLDAsMSwxMi4wMDksMmE2LjkyMSw2LjkyMSwwLDAsMSw0LjY1MiwxLjc3OCw2Ljk5Myw2Ljk5MywwLDAsMS0uMDQ4LDEwLjQ4MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjk5NSAwLjAwMykiIGZpbGw9IiNhMmEyYTIiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/bulb.svg":
/*!*******************************!*\
  !*** ./src/svg/icon/bulb.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgBulb),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBulb = function SvgBulb(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 18.004,
    height: 24.004
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#a2a2a2",
    d: "M2.873 15.587a9 9 0 1 1 12.064.18 5.741 5.741 0 0 0-1.594 2.237h-3.338V10.82a3 3 0 0 0 2-2.816 1 1 0 0 0-2 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 2 2.816v7.184H4.568a6.839 6.839 0 0 0-1.695-2.417Zm2.132 4.417v.31a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.31Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC4wMDQiIGhlaWdodD0iMjQuMDA0IiB2aWV3Qm94PSIwIDAgMTguMDA0IDI0LjAwNCI+CiAgPHBhdGggaWQ9ImJ1bGIiIGQ9Ik01Ljg2OCwxNS41ODNhOSw5LDAsMSwxLDEyLjA2NC4xOEE1Ljc0MSw1Ljc0MSwwLDAsMCwxNi4zMzgsMThIMTNWMTAuODE2QTMsMywwLDAsMCwxNSw4YTEsMSwwLDAsMC0yLDAsMSwxLDAsMCwxLTIsMEExLDEsMCwwLDAsOSw4YTMsMywwLDAsMCwyLDIuODE2VjE4SDcuNTYzYTYuODM5LDYuODM5LDAsMCwwLTEuNjk1LTIuNDE3Wk04LDIwdi4zMUEzLjY5NCwzLjY5NCwwLDAsMCwxMS42OSwyNGguNjJBMy42OTQsMy42OTQsMCwwLDAsMTYsMjAuMzFWMjBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi45OTUgMC4wMDQpIiBmaWxsPSIjYTJhMmEyIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/button.svg":
/*!*********************************!*\
  !*** ./src/svg/icon/button.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgButton = function SvgButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 10.667
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M0 3.667V7a3.671 3.671 0 0 0 3.667 3.667h8.667A3.671 3.671 0 0 0 16 7V3.667A3.671 3.671 0 0 0 12.333 0H3.667A3.671 3.671 0 0 0 0 3.667ZM12.333 2A1.669 1.669 0 0 1 14 3.667V7a1.669 1.669 0 0 1-1.667 1.667H3.667A1.669 1.669 0 0 1 2 7V3.667A1.669 1.669 0 0 1 3.667 2ZM12 4Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMC42NjciIHZpZXdCb3g9IjAgMCAxNiAxMC42NjciPgogIDxwYXRoIGlkPSJtb2JpbGUtYnV0dG9uIiBkPSJNMTEsMEg3LjY2N0EzLjY3MSwzLjY3MSwwLDAsMCw0LDMuNjY3djguNjY3QTMuNjcxLDMuNjcxLDAsMCwwLDcuNjY3LDE2SDExYTMuNjcxLDMuNjcxLDAsMCwwLDMuNjY3LTMuNjY3VjMuNjY3QTMuNjcxLDMuNjcxLDAsMCwwLDExLDBabTEuNjY3LDEyLjMzM0ExLjY2OSwxLjY2OSwwLDAsMSwxMSwxNEg3LjY2N0ExLjY2OSwxLjY2OSwwLDAsMSw2LDEyLjMzM1YzLjY2N0ExLjY2OSwxLjY2OSwwLDAsMSw3LjY2NywySDExYTEuNjY5LDEuNjY5LDAsMCwxLDEuNjY3LDEuNjY3Wm0tMi0uMzMzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxNC42NjcpIHJvdGF0ZSgtOTApIiBmaWxsPSIjNmU2ZTZlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/calendar-day.svg":
/*!***************************************!*\
  !*** ./src/svg/icon/calendar-day.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgCalendarDay),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCalendarDay = function SvgCalendarDay(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M12.333 1.333H12V1a1 1 0 0 0-2 0v.333H6V1a1 1 0 0 0-2 0v.333h-.333A3.671 3.671 0 0 0 0 5v7.333A3.671 3.671 0 0 0 3.667 16h8.667A3.671 3.671 0 0 0 16 12.333V5a3.671 3.671 0 0 0-3.667-3.667Zm0 12.667H3.667A1.669 1.669 0 0 1 2 12.333V6h12v6.333A1.669 1.669 0 0 1 12.333 14ZM6.667 8.333v1.334a1 1 0 0 1-1 1H4.333a1 1 0 0 1-1-1V8.333a1 1 0 0 1 1-1h1.334a1 1 0 0 1 1 1Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBpZD0iY2FsZW5kYXItZGF5IiBkPSJNMTIuMzMzLDEuMzMzSDEyVjFhMSwxLDAsMCwwLTIsMHYuMzMzSDZWMUExLDEsMCwwLDAsNCwxdi4zMzNIMy42NjdBMy42NzEsMy42NzEsMCwwLDAsMCw1djcuMzMzQTMuNjcxLDMuNjcxLDAsMCwwLDMuNjY3LDE2aDguNjY3QTMuNjcxLDMuNjcxLDAsMCwwLDE2LDEyLjMzM1Y1QTMuNjcxLDMuNjcxLDAsMCwwLDEyLjMzMywxLjMzM1ptMCwxMi42NjdIMy42NjdBMS42NjksMS42NjksMCwwLDEsMiwxMi4zMzNWNkgxNHY2LjMzM0ExLjY2OSwxLjY2OSwwLDAsMSwxMi4zMzMsMTRaTTYuNjY3LDguMzMzVjkuNjY3YTEsMSwwLDAsMS0xLDFINC4zMzNhMSwxLDAsMCwxLTEtMVY4LjMzM2ExLDEsMCwwLDEsMS0xSDUuNjY3QTEsMSwwLDAsMSw2LjY2Nyw4LjMzM1oiIGZpbGw9IiM2ZTZlNmUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/chart-bar.svg":
/*!************************************!*\
  !*** ./src/svg/icon/chart-bar.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgChartBar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3, _path4;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChartBar = function SvgChartBar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 12
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M15 2H1a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z",
    "data-name": "Path 1484"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M1 3.333h8.667a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2Z",
    "data-name": "Path 1485"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M1 10h8.667a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2Z",
    "data-name": "Path 1486"
  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M1 6.667h14a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2Z",
    "data-name": "Path 1487"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBpZD0ic3ltYm9sIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDE2IDEyIj4KICA8cGF0aCBpZD0iUGF0aF8xNDg0IiBkYXRhLW5hbWU9IlBhdGggMTQ4NCIgZD0iTTE1LDVIMUExLDEsMCwwLDEsMSwzSDE1YTEsMSwwLDAsMSwwLDJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSIgZmlsbD0iIzZlNmU2ZSIvPgogIDxwYXRoIGlkPSJQYXRoXzE0ODUiIGRhdGEtbmFtZT0iUGF0aCAxNDg1IiBkPSJNOSw4aDguNjY3YTEsMSwwLDEsMSwwLDJIOUExLDEsMCwxLDEsOSw4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTggLTQuNjY3KSIgZmlsbD0iIzZlNmU2ZSIvPgogIDxwYXRoIGlkPSJQYXRoXzE0ODYiIGRhdGEtbmFtZT0iUGF0aCAxNDg2IiBkPSJNOSwxOGg4LjY2N2ExLDEsMCwxLDEsMCwySDlhMSwxLDAsMSwxLDAtMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04IC04KSIgZmlsbD0iIzZlNmU2ZSIvPgogIDxwYXRoIGlkPSJQYXRoXzE0ODciIGRhdGEtbmFtZT0iUGF0aCAxNDg3IiBkPSJNMSwxM0gxNWExLDEsMCwxLDEsMCwySDFhMSwxLDAsMSwxLDAtMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTYuMzMzKSIgZmlsbD0iIzZlNmU2ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/chart-simple-horizontal.svg":
/*!**************************************************!*\
  !*** ./src/svg/icon/chart-simple-horizontal.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgChartSimpleHorizontal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChartSimpleHorizontal = function SvgChartSimpleHorizontal(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M14 6H2a2 2 0 0 0 0 4h12a2 2 0 0 0 0-4Zm0 2.667H2a.667.667 0 0 1 0-1.334h12a.667.667 0 1 1 0 1.333ZM2 4h8a2 2 0 0 0 0-4H2a2 2 0 0 0 0 4Zm0-2.667h8a.667.667 0 1 1 0 1.333H2a.667.667 0 0 1 0-1.333ZM6 12H2a2 2 0 0 0 0 4h4a2 2 0 0 0 0-4Zm0 2.667H2a.667.667 0 1 1 0-1.333h4a.667.667 0 1 1 0 1.333Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBpZD0iY2hhcnQtc2ltcGxlLWhvcml6b250YWwiIGQ9Ik0xNCw2SDJhMiwyLDAsMCwwLDAsNEgxNGEyLDIsMCwwLDAsMC00Wm0wLDIuNjY3SDJBLjY2Ny42NjcsMCwwLDEsMiw3LjMzM0gxNGEuNjY3LjY2NywwLDEsMSwwLDEuMzMzWk0yLDRoOGEyLDIsMCwwLDAsMC00SDJBMiwyLDAsMCwwLDIsNFpNMiwxLjMzM2g4YS42NjcuNjY3LDAsMSwxLDAsMS4zMzNIMkEuNjY3LjY2NywwLDAsMSwyLDEuMzMzWk02LDEySDJhMiwyLDAsMCwwLDAsNEg2YTIsMiwwLDAsMCwwLTRabTAsMi42NjdIMmEuNjY3LjY2NywwLDEsMSwwLTEuMzMzSDZhLjY2Ny42NjcsMCwxLDEsMCwxLjMzM1oiIGZpbGw9IiM2ZTZlNmUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/chart-simple.svg":
/*!***************************************!*\
  !*** ./src/svg/icon/chart-simple.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgChartSimple),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChartSimple = function SvgChartSimple(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M8 16a2.006 2.006 0 0 1-2-2V2a2 2 0 0 1 4 0v12a2.006 2.006 0 0 1-2 2Zm6 0a2.006 2.006 0 0 1-2-2V6a2 2 0 0 1 4 0v8a2.006 2.006 0 0 1-2 2ZM2 16a2.006 2.006 0 0 1-2-2v-4a2 2 0 0 1 4 0v4a2.006 2.006 0 0 1-2 2Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBpZD0iY2hhcnQtc2ltcGxlIiBkPSJNOCwxNmEyLjAwNiwyLjAwNiwwLDAsMS0yLTJWMmEyLDIsMCwwLDEsNCwwVjE0QTIuMDA2LDIuMDA2LDAsMCwxLDgsMTZabTYsMGEyLjAwNiwyLjAwNiwwLDAsMS0yLTJWNmEyLDIsMCwwLDEsNCwwdjhBMi4wMDYsMi4wMDYsMCwwLDEsMTQsMTZaTTIsMTZhMi4wMDYsMi4wMDYsMCwwLDEtMi0yVjEwYTIsMiwwLDAsMSw0LDB2NEEyLjAwNiwyLjAwNiwwLDAsMSwyLDE2WiIgZmlsbD0iIzZlNmU2ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/checkbox.svg":
/*!***********************************!*\
  !*** ./src/svg/icon/checkbox.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgCheckbox),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCheckbox = function SvgCheckbox(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M12.333 16H3.667A3.671 3.671 0 0 1 0 12.333V3.667A3.671 3.671 0 0 1 3.667 0h8.667A3.671 3.671 0 0 1 16 3.667v8.667A3.671 3.671 0 0 1 12.333 16ZM3.667 2A1.667 1.667 0 0 0 2 3.667v8.667A1.667 1.667 0 0 0 3.667 14h8.667A1.667 1.667 0 0 0 14 12.333V3.667A1.667 1.667 0 0 0 12.333 2Z",
    "data-name": "Path 1503"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M6.445 11.858a1.575 1.575 0 0 1-1.12-.467L3.334 9.403a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l1.7 1.7 4.806-4.809a1 1 0 0 1 1.414 0 1 1 0 0 1 0 1.414l-5.1 5.1a1.573 1.573 0 0 1-1.123.464Z",
    "data-name": "Path 1504"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBpZD0iY2hlY2tib3giIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPgogIDxwYXRoIGlkPSJQYXRoXzE1MDMiIGRhdGEtbmFtZT0iUGF0aCAxNTAzIiBkPSJNMTIuMzMzLDE2SDMuNjY3QTMuNjcxLDMuNjcxLDAsMCwxLDAsMTIuMzMzVjMuNjY3QTMuNjcxLDMuNjcxLDAsMCwxLDMuNjY3LDBoOC42NjdBMy42NzEsMy42NzEsMCwwLDEsMTYsMy42Njd2OC42NjdBMy42NzEsMy42NzEsMCwwLDEsMTIuMzMzLDE2Wk0zLjY2NywyQTEuNjY3LDEuNjY3LDAsMCwwLDIsMy42Njd2OC42NjdBMS42NjcsMS42NjcsMCwwLDAsMy42NjcsMTRoOC42NjdBMS42NjcsMS42NjcsMCwwLDAsMTQsMTIuMzMzVjMuNjY3QTEuNjY3LDEuNjY3LDAsMCwwLDEyLjMzMywyWiIgZmlsbD0iIzZlNmU2ZSIvPgogIDxwYXRoIGlkPSJQYXRoXzE1MDQiIGRhdGEtbmFtZT0iUGF0aCAxNTA0IiBkPSJNMTAwLjY5MSwxNTMuOTc4YTEuNTc1LDEuNTc1LDAsMCwxLTEuMTItLjQ2N2wtMS45OTEtMS45ODhhMSwxLDAsMCwxLDAtMS40MTRoMGExLDEsMCwwLDEsMS40MTQsMGwxLjcsMS43TDEwNS41LDE0N2ExLDEsMCwwLDEsMS40MTQsMGgwYTEsMSwwLDAsMSwwLDEuNDE0aDBsLTUuMSw1LjFBMS41NzMsMS41NzMsMCwwLDEsMTAwLjY5MSwxNTMuOTc4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0LjI0NiAtMTQyLjEyKSIgZmlsbD0iIzZlNmU2ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/comment.svg":
/*!**********************************!*\
  !*** ./src/svg/icon/comment.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgComment),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgComment = function SvgComment(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "#a2a2a2",
    "data-name": "comment (2)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15.999 7.505A8.007 8.007 0 1 0 8.01 16h4.322a3.67 3.67 0 0 0 3.667-3.663V7.568Zm-2 4.832a1.666 1.666 0 0 1-1.667 1.665H8.011a6.03 6.03 0 0 1-4.488-2.005 5.941 5.941 0 0 1-1.484-4.686 6.023 6.023 0 0 1 5.192-5.25 6.329 6.329 0 0 1 .782-.049A6 6 0 0 1 13.999 7.6Z",
    "data-name": "Path 1500"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.333 7.342h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2Z",
    "data-name": "Path 1501"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 8.672H6.333a1 1 0 0 0 0 2H11a1 1 0 0 0 0-2Z",
    "data-name": "Path 1502"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8ZyBpZD0iY29tbWVudF8yXyIgZGF0YS1uYW1lPSJjb21tZW50ICgyKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAxIDAuMDIyKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8xNTAwIiBkYXRhLW5hbWU9IlBhdGggMTUwMCIgZD0iTTE2LDcuNDgzYTguMDA3LDguMDA3LDAsMSwwLTcuOTg5LDguNDk1aDQuMzIyQTMuNjcsMy42NywwLDAsMCwxNiwxMi4zMTVWNy41NDZabS0yLDQuODMyYTEuNjY2LDEuNjY2LDAsMCwxLTEuNjY3LDEuNjY1SDguMDEyYTYuMDMsNi4wMywwLDAsMS00LjQ4OC0yLjAwNUE1Ljk0MSw1Ljk0MSwwLDAsMSwyLjA0LDcuMjg5YTYuMDIzLDYuMDIzLDAsMCwxLDUuMTkyLTUuMjUsNi4zMjksNi4zMjksMCwwLDEsLjc4Mi0uMDQ5QTYsNiwwLDAsMSwxNCw3LjU3OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9IiNhMmEyYTIiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzE1MDEiIGRhdGEtbmFtZT0iUGF0aCAxNTAxIiBkPSJNOSwxMGgyYTEsMSwwLDAsMCwwLTJIOWExLDEsMCwwLDAsMCwyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNjY2IC0yLjY4KSIgZmlsbD0iI2EyYTJhMiIvPgogICAgPHBhdGggaWQ9IlBhdGhfMTUwMiIgZGF0YS1uYW1lPSJQYXRoIDE1MDIiIGQ9Ik0xMy42NjcsMTNIOWExLDEsMCwwLDAsMCwyaDQuNjY3YTEsMSwwLDAsMCwwLTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi42NjYgLTQuMzUpIiBmaWxsPSIjYTJhMmEyIi8+CiAgPC9nPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/crown.svg":
/*!********************************!*\
  !*** ./src/svg/icon/crown.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgCrown),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g, _defs;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCrown = function SvgCrown(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    fill: "none"
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    clipPath: "url(#crown_svg__a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#F17D0E",
    d: "M12 3.068c0-.665-.54-1.205-1.205-1.205s-1.205.54-1.205 1.205c0 .548.023 1.27-.42 1.592L8.703 5a1 1 0 0 1-1.461-.321l-.225-.402c-.279-.498-.013-1.154.123-1.708a1.206 1.206 0 0 0-1.17-1.49 1.206 1.206 0 0 0-1.163 1.525c.15.543.426 1.178.167 1.678l-.173.336a1 1 0 0 1-1.486.342l-.493-.367c-.443-.33-.413-1.059-.413-1.612 0-.665-.54-1.205-1.205-1.205a1.206 1.206 0 0 0-.814 2.092c.275.253.586.51.675.873l1.232 4.998a1 1 0 0 0 .97.761h5.538a1 1 0 0 0 .973-.77l1.162-4.898c.087-.365.398-.626.673-.882.237-.22.386-.534.386-.882Z"
  }))), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: "crown_svg__a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M0 0h12v12H0z"
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQ1N181NDApIj4KPHBhdGggZD0iTTEyIDMuMDY3NjZDMTIgMi40MDMxNyAxMS40NTk0IDEuODYyNjQgMTAuNzk1IDEuODYyNjRDMTAuMTMwNSAxLjg2MjY0IDkuNTg5OTcgMi40MDMxNyA5LjU4OTk3IDMuMDY3NjZDOS41ODk5NyAzLjYxNTk0IDkuNjEyNzggNC4zMzc5MiA5LjE2OTQxIDQuNjYwNDZMOC43MDM2NSA0Ljk5OTNDOC4yMTkgNS4zNTE4OCA3LjUzNTE5IDUuMjAxODggNy4yNDI2MiA0LjY3ODgxTDcuMDE3NzIgNC4yNzY3NUM2LjczOTEgMy43Nzg2MSA3LjAwNTIzIDMuMTIzMjYgNy4xNDA1OSAyLjU2ODc4QzcuMTYyOTUgMi40NzcxOSA3LjE3NDggMi4zODE1MyA3LjE3NDggMi4yODMxNEM3LjE3NDggMS42MTg2NSA2LjYzNDI4IDEuMDc4MTIgNS45Njk3OSAxLjA3ODEyQzUuMzA1MyAxLjA3ODEyIDQuNzY0NzcgMS42MTg2NSA0Ljc2NDc3IDIuMjgzMTRDNC43NjQ3NyAyLjM5NDE3IDQuNzc5ODYgMi41MDE3NCA0LjgwODA5IDIuNjAzOUM0Ljk1ODExIDMuMTQ2NyA1LjIzNDE5IDMuNzgyMjIgNC45NzU0MyA0LjI4MjRMNC44MDE3MiA0LjYxODE5QzQuNTE4MTYgNS4xNjYzMiAzLjgxMDY2IDUuMzI5MjkgMy4zMTU4OCA0Ljk2MDQ2TDIuODIzMTYgNC41OTMxN0MyLjM3OTUxIDQuMjYyNDUgMi40MTAxMyAzLjUzNDA0IDIuNDEwMTMgMi45ODA2OEMyLjQxMDEzIDIuMzE2MTkgMS44Njk2IDEuNzc1NjcgMS4yMDUxMSAxLjc3NTY3QzAuNTQwNTI3IDEuNzc1NjcgMCAyLjMxNjE5IDAgMi45ODA2OEMwIDMuMzMxNzMgMC4xNTA5MzMgMy42NDgwOSAwLjM5MTI5MyAzLjg2ODQ2QzAuNjY2MjM5IDQuMTIwNTQgMC45NzcwMDcgNC4zNzg4NiAxLjA2NjI1IDQuNzQxMDRMMi4yOTc3OCA5LjczOTI0QzIuNDA3ODYgMTAuMTg2IDIuODA4NjEgMTAuNSAzLjI2ODc0IDEwLjVIOC44MDY0NUM5LjI2OTgyIDEwLjUgOS42NzI1IDEwLjE4MTcgOS43Nzk0NSA5LjczMDgxTDEwLjk0MTQgNC44MzIyOUMxMS4wMjggNC40NjczMiAxMS4zMzk0IDQuMjA1NTcgMTEuNjE0MyAzLjk1MDM3QzExLjg1MTQgMy43MzAyNCAxMiAzLjQxNjAzIDEyIDMuMDY3NjZaIiBmaWxsPSIjRjE3RDBFIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNDU3XzU0MCI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/elementor.svg":
/*!************************************!*\
  !*** ./src/svg/icon/elementor.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgElementor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _rect, _defs;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgElementor = function SvgElementor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 24,
    height: 24,
    fill: "none"
  }, props), _rect || (_rect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: 24,
    height: 24,
    fill: "url(#elementor_svg__a)",
    rx: 5
  })), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pattern", {
    id: "elementor_svg__a",
    width: 1,
    height: 1,
    patternContentUnits: "objectBoundingBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
    xlinkHref: "#elementor_svg__b",
    transform: "scale(.01111)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("image", {
    xlinkHref: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gKgSUNDX1BST0ZJTEUAAQEAAAKQbGNtcwQwAABtbnRyUkdCIFhZWiAH4gAMABYADAAaAANhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAADhjcHJ0AAABQAAAAE53dHB0AAABkAAAABRjaGFkAAABpAAAACxyWFlaAAAB0AAAABRiWFlaAAAB5AAAABRnWFlaAAAB+AAAABRyVFJDAAACDAAAACBnVFJDAAACLAAAACBiVFJDAAACTAAAACBjaHJtAAACbAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABwAAAAcAHMAUgBHAEIAIABiAHUAaQBsAHQALQBpAG4AAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAMgAAABwATgBvACAAYwBvAHAAeQByAGkAZwBoAHQALAAgAHUAcwBlACAAZgByAGUAZQBsAHkAAAAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEoAAAXj///zKgAAB5sAAP2H///7ov///aMAAAPYAADAlFhZWiAAAAAAAABvlAAAOO4AAAOQWFlaIAAAAAAAACSdAAAPgwAAtr5YWVogAAAAAAAAYqUAALeQAAAY3nBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR7AABMzQAAmZoAACZmAAAPXP/bAEMABQMEBAQDBQQEBAUFBQYHDAgHBwcHDwsLCQwRDxISEQ8RERMWHBcTFBoVEREYIRgaHR0fHx8TFyIkIh4kHB4fHv/bAEMBBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/CABEIAFoAWgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAACAwEHAAQFBv/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAQQFAAb/2gAMAwEAAhADEAAAAeWheN9U0kkLmkqQa0lSLWkqRa7v+caI8nAm/isJdxrCoS2rSE6kK6sFFLFtaUbDWIaL+TgZoefbe1DXyirTsRacWKxm38BVJxt6U7DG67hbyJCdDBZfdA39WRTMRa3Pq6bixYUfG5olqMdrOh3IkMv+fZ0uUQsfv8uQZ1y5Egx8LmLDHa7hPk563y13ACTLmgRyDQIiFoERCwNwb6V3/8QAIRAAAQMDBQEBAAAAAAAAAAAAAgABBAUQEQMUMDVBFQb/2gAIAQEAAQUCk6+rr62VlZWVlZWVlZTO7ONVlsPvH7x+2p0KIdPqDMM+nQohQNhCWxhKezDOv7aldZU+yCbLEd9MW+mIiciv7aldZVOypsKGdP2EFbCCqgzBPv7aldZVOzCbLEd/NW/moiciv7ak9ZVezpsGGdP+fBXz4KqLME+/tgnTQEiIyCdMAfoTl9CciJzK/vGWWLiYTx+qABq3DoMz6oCLB//EACMRAAICAgECBwAAAAAAAAAAAAABAgMREgQxUgUTFCEiMlH/2gAIAQMBAT8Bg0lhCkKQpCkTrrt+yyKRdyvJWS3mKqKljqLxePaV2bRTNhTOa/iid0a61shc6rsK7E4po2FI5LykStUILKPVV9pCeY+xsKRlPqZTEo/gpGwmJiYmJkrXA//EABwRAAMAAgMBAAAAAAAAAAAAAAABEQISAxAhIP/aAAgBAgEBPwFohCEPSGXg+miEOUfhsQhDnRlEjddQg8Ux4pmiIQTqvzllD//EACcQAQABAwIFBAMBAAAAAAAAAAECAAMENJIRICFzsTAxUYESIkCR/9oACAEBAAY/ApXLslX0uI9aD8z+yxKWNZVtxVYHxV+MTgFxA+6sSljWVbcV4wPitLZ2FaWzsKvxiAE0P958btR8Vk92XmiMcm8B7cJtau/va1V/e0ykqvV48+N2o+Kye7LzWPKWLZZNuK8YHxWksbCtJY2FX4xAC4gffPjdqPisnuy80RjlXiJ7BNrV397Wrv72mUlV9158XtR8Vld2XmsecsWyybcVWB8Vo7GwrR2NhV+MQAuPA++cjHKvEToBNpnJZSeqtEY5V4iewTa1l/e1rL+9plJWT1V/gR6Ppn6tT/GIcTi8D0jpQEQAr//EAB4QAQACAwEBAAMAAAAAAAAAAAEAERAxUSHwIGFx/9oACAEBAAE/IVSt3X6Jbst2W7Ldluz+pbst2W7DiQclxCgLdxfWbl5v8B8jtLl5uXm8GovrLT2gFaQ9hkaCGfvCF8ZcsPI2GjIfIvqXj4XGIAbtQoBnLhMjWbMvBqO2LnzuMMKGWEK0zVEMRkaDC4ai+pePv8Rxg9lqgBrP3T92tHqy8Go7YufL4wo0PYJVGdlhvugeBhcHyO0vAl98CDUc2Nh6sCstUANZ2WeuthauTUdsXLxcvNy4agG0GkSXm5eby9iuuTkjoW9lHCUcJRwlHCAcJRwlHCUcIBwgChLNkHdAAPAn/9oADAMBAAIAAwAAABCc0YYTNkM4UVB2qYNiuAFEGMYf1efbEtkEA0P/xAAfEQACAgEEAwAAAAAAAAAAAAAAAREhECAxUfFBYXH/2gAIAQMBAT8QQtjTdRkUOViUhlMlpgQ8j2yKuKf6lsoh00yGgyZhL6EYwqYkAtwcVmvHjx40jKmT/8QAGxEBAQEAAwEBAAAAAAAAAAAAAQAREDFRIWH/2gAIAQIBAT8QlrWtAdTxPic5LRgTAbZ8mNbgEhqX4WTW95wj4TW5PqSSSS0dX//EACMQAQEAAQMEAgMBAAAAAAAAAAEAESGR8DFBUXGx4RCBwWH/2gAIAQEAAT8QVid1eDnp9g8R5+8efvHn7x5e8efvD8948vePL3jz950W5F4RmW3TFWDqvm3yGGKUYYgww2l9T3IhRhilGGKM9Pq3iGGYd4EeZVNVgxzngCADsSbCCmoqpqtzz+Tj4G0XMY8ALAHYhhtL6t4iD+Oj5vdBgcUA6AZ0I5l8xxL5npnSyz1V7sQZ6fU9yGPxPLg98wbApkVU1W59/JxPI/Ucsc8AQAdiGK9Pq3yKP4pch749WSgmgDOhHMvmOJfMuF+at1Ve7FGen1PchiuqeODrmtpAMFVNVudfycTwv1Y5rdxIAOxDF0vqe5FGMfkYLoAHQlhhyVuqq9WMfkqBoAHQjlXzHIvmWWHJV1VXqwwz0+p7kMQoxCjDFK9PqQTPHkR1GKMMUgwxRhnp0Ec+mJQfLEZeMrHV/wBj6yPrI+sj6y+mR9ZH1kfWX1ye1soCdYEJDwBgAOhf/9k=",
    id: "elementor_svg__b",
    width: 90,
    height: 90
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjUiIGZpbGw9InVybCgjcGF0dGVybjApIi8+CjxkZWZzPgo8cGF0dGVybiBpZD0icGF0dGVybjAiIHBhdHRlcm5Db250ZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj4KPHVzZSB4bGluazpocmVmPSIjaW1hZ2UwXzQxMF8zNCIgdHJhbnNmb3JtPSJzY2FsZSgwLjAxMTExMTEpIi8+CjwvcGF0dGVybj4KPGltYWdlIGlkPSJpbWFnZTBfNDEwXzM0IiB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzRnS2dTVU5EWDFCU1QwWkpURVVBQVFFQUFBS1FiR050Y3dRd0FBQnRiblJ5VWtkQ0lGaFpXaUFINGdBTUFCWUFEQUFhQUFOaFkzTndRVkJRVEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBOXRZQUFRQUFBQURUTFd4amJYTUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXRrWlhOakFBQUJDQUFBQURoamNISjBBQUFCUUFBQUFFNTNkSEIwQUFBQmtBQUFBQlJqYUdGa0FBQUJwQUFBQUN4eVdGbGFBQUFCMEFBQUFCUmlXRmxhQUFBQjVBQUFBQlJuV0ZsYUFBQUIrQUFBQUJSeVZGSkRBQUFDREFBQUFDQm5WRkpEQUFBQ0xBQUFBQ0JpVkZKREFBQUNUQUFBQUNCamFISnRBQUFDYkFBQUFDUnRiSFZqQUFBQUFBQUFBQUVBQUFBTVpXNVZVd0FBQUJ3QUFBQWNBSE1BVWdCSEFFSUFJQUJpQUhVQWFRQnNBSFFBTFFCcEFHNEFBRzFzZFdNQUFBQUFBQUFBQVFBQUFBeGxibFZUQUFBQU1nQUFBQndBVGdCdkFDQUFZd0J2QUhBQWVRQnlBR2tBWndCb0FIUUFMQUFnQUhVQWN3QmxBQ0FBWmdCeUFHVUFaUUJzQUhrQUFBQUFXRmxhSUFBQUFBQUFBUGJXQUFFQUFBQUEweTF6WmpNeUFBQUFBQUFCREVvQUFBWGovLy96S2dBQUI1c0FBUDJILy8vN292Ly8vYU1BQUFQWUFBREFsRmhaV2lBQUFBQUFBQUJ2bEFBQU9PNEFBQU9RV0ZsYUlBQUFBQUFBQUNTZEFBQVBnd0FBdHI1WVdWb2dBQUFBQUFBQVlxVUFBTGVRQUFBWTNuQmhjbUVBQUFBQUFBTUFBQUFDWm1ZQUFQS25BQUFOV1FBQUU5QUFBQXBiY0dGeVlRQUFBQUFBQXdBQUFBSm1aZ0FBOHFjQUFBMVpBQUFUMEFBQUNsdHdZWEpoQUFBQUFBQURBQUFBQW1abUFBRHlwd0FBRFZrQUFCUFFBQUFLVzJOb2NtMEFBQUFBQUFNQUFBQUFvOWNBQUZSN0FBQk16UUFBbVpvQUFDWm1BQUFQWFAvYkFFTUFCUU1FQkFRREJRUUVCQVVGQlFZSERBZ0hCd2NIRHdzTENRd1JEeElTRVE4UkVSTVdIQmNURkJvVkVSRVlJUmdhSFIwZkh4OFRGeUlrSWg0a0hCNGZIdi9iQUVNQkJRVUZCd1lIRGdnSURoNFVFUlFlSGg0ZUhoNGVIaDRlSGg0ZUhoNGVIaDRlSGg0ZUhoNGVIaDRlSGg0ZUhoNGVIaDRlSGg0ZUhoNGVIaDRlSGg0ZUh2L0NBQkVJQUZvQVdnTUJJZ0FDRVFFREVRSC94QUFiQUFBQ0FnTUJBQUFBQUFBQUFBQUFBQUFDQXdFSEFBUUZCdi9FQUJvQkFBSURBUUVBQUFBQUFBQUFBQUFBQUFJREFRUUZBQWIvMmdBTUF3RUFBaEFERUFBQUFlV2hlTjlVMGtrTG1rcVFhMGxTTFdrcVJhN3YrY2FJOG5BbS9pc0pkeHJDb1MyclNFNmtLNnNGRkxGdGFVYkRXSWFMK1RnWm9lZmJlMURYeWlyVHNSYWNXS3htMzhCVkp4dDZVN0RHNjdoYnlKQ2REQlpmZEEzOVdSVE1SYTNQcTZiaXhZVWZHNW9scU1kck9oM0lrTXYrZlowdVVRc2Z2OHVRWjF5NUVneDhMbUxESGE3aFBrNTYzeTEzQUNUTG1nUnlEUUlpRm9FUkN3TndiNlYzLzhRQUlSQUFBUU1EQlFFQkFBQUFBQUFBQUFBQUFnQUJCQVVRRVFNVU1EVkJGUWIvMmdBSUFRRUFBUVVDazYrcnI2MlZsWldWbFpXVmxaVE83T05WbHNQdkg3eCsycDBLSWRQcURNTStuUW9oUU5oQ1d4aEtlekRPdjdhbGRaVSt5Q2JMRWQ5TVcrbUlpY2l2N2FsZFpWT3lwc0tHZFAyRUZiQ0NxZ3pCUHY3YWxkWlZPekNiTEVkL05XL21vaWNpdjdhazlaVmV6cHNHR2RQK2ZCWHo0S3FMTUUrL3RnblRRRWlJeUNkTUFmb1RsOUNjaUp6Sy92R1dXTGlZVHgrcUFCcTNEb016Nm9DTEIvL0VBQ01SQUFJQ0FnRUNCd0FBQUFBQUFBQUFBQUFCQWdNUkVnUXhVZ1VURkNFaU1sSC8yZ0FJQVFNQkFUOEJnMGxoQ2tLUXBDa1RycnQreXlLUmR5dkpXUzNtS3FLbGpxTHhlUGFWMmJSVE5oVE9hL2lpZDBhNjFzaGM2cnNLN0U0cG8yRkk1THlrU3RVSUxLUFZWOXBDZVkreHNLUmxQcVpURW8vZ3BHd21KaVltSmtyWEEvL0VBQndSQUFNQUFnTUJBQUFBQUFBQUFBQUFBQUFCRVFJU0F4QWhJUC9hQUFnQkFnRUJQd0ZvaENFUFNHWGcrbWlFT1VmaHNRaERuUmxFamRkUWc4VXg0cG1pSVFUcXZ6bGxELy9FQUNjUUFRQUJBd0lGQkFNQkFBQUFBQUFBQUFFQ0FBTUVOSklSSUNGenNUQXhVWUVTSWtDUi85b0FDQUVCQUFZL0FwWExzbFgwdUk5YUQ4eit5eEtXTlpWdHhWWUh4VitNVGdGeEErNnNTbGpXVmJjVjR3UGl0TFoyRmFXenNLdnhpQUUwUDk1OGJ0UjhWazkyWG1pTWNtOEI3Y0p0YXUvdmExVi9lMHlrcXZWNDgrTjJvK0t5ZTdMeldQS1dMWlpOdUs4WUh4V2tzYkN0SlkyRlg0eEFDNGdmZlBqZHFQaXNudXk4MFJqbFhpSjdCTnJWMzk3V3J2NzJtVWxWOTE1OFh0UjhWbGQyWG1zZWNzV3l5YmNWV0I4Vm83R3dyUjJOaFYrTVFBdVBBKytjakhLdkVUb0JOcG5KWlNlcXRFWTVWNGlld1RhMWwvZTFyTCs5cGxKV1QxVi9nUjZQcG42dFQvR0ljVGk4RDBqcFFFUUFyLy9FQUI0UUFRQUNBd0VCQUFNQUFBQUFBQUFBQUFFQUVSQXhVU0h3SUdGeC85b0FDQUVCQUFFL0lWU3QzWDZKYnN0Mlc3TGRsdXorcGJzdDJXN0RpUWNseENnTGR4ZldibDV2OEI4anRMbDV1WG04R292ckxUMmdGYVE5aGthQ0dmdkNGOFpjc1BJMkdqSWZJdnFYajRYR0lBYnRRb0JuTGhNaldiTXZCcU8yTG56dU1NS0dXRUswelZFTVJrYURDNGFpK3BlUHY4UnhnOWxxZ0JyUDNUOTJ0SHF5OEdvN1l1Zkw0d28wUFlKVkdkbGh2dWdlQmhjSHlPMHZBbDk4Q0RVYzJOaDZzQ3N0VUFOWjJXZXV0aGF1VFVkc1hMeGN2Tnk0YWdHMEdrU1htNWVieTlpdXVUa2pvVzlsSENVY0pSd2xIQ0FjSlJ3bEhDVWNJQndnQ2hMTmtIZEFBUEFuLzlvQURBTUJBQUlBQXdBQUFCQ2MwWVlUTmtNNFVWQjJxWU5pdUFGRUdNWWYxZWZiRXRrRUEwUC94QUFmRVFBQ0FnRUVBd0FBQUFBQUFBQUFBQUFBQVJFaEVDQXhVZkZCWVhILzJnQUlBUU1CQVQ4UVF0alRkUmtVT1ZpVWhsTWxwZ1E4ajJ5S3VLZjZsc29oMDB5R2d5WmhMNkVZd3FZa0F0d2NWbXZIang0MGpLbVQvOFFBR3hFQkFRRUFBd0VCQUFBQUFBQUFBQUFBQVFBUkVERlJJV0gvMmdBSUFRSUJBVDhRbHJXdEFkVHhQaWM1TFJnVEFiWjhtTmJnRWhxWDRXVFc5NXdqNFRXNVBxU1NTUzBkWC8vRUFDTVFBUUVBQVFNRUFnTUJBQUFBQUFBQUFBRUFFU0dSOERGQlVYR3g0UkNCd1dILzJnQUlBUUVBQVQ4UVZpZDFlRG5wOWc4UjUrOGVmdkhuN3g1ZThlZnZEODk0OHZlUEwzano5NTBXNUY0Um1XM1RGV0Rxdm0zeUdHS1VZWWd3dzJsOVQzSWhSaGlsR0dLTTlQcTNpR0dZZDRFZVpWTlZneHpuZ0NBRHNTYkNDbW9xcHF0enorVGo0RzBYTVk4QUxBSFloaHRMNnQ0aUQrT2o1dmRCZ2NVQTZBWjBJNWw4eHhMNW5wblN5ejFWN3NRWjZmVTl5R1B4UExnOTh3YkFwa1ZVMVc1OS9KeFBJL1Vjc2M4QVFBZGlHSzlQcTN5S1A0cGNoNzQ5V1NnbWdET2hITXZtT0pmTXVGK2F0MVZlN0ZHZW4xUGNoaXVxZU9Ecm10cEFNRlZOVnVkZnljVHd2MVk1cmR4SUFPeERGMHZxZTVGR01ma1lMb0FIUWxoaHlWdXFxOVdNZmtxQm9BSFFqbFh6SEl2bVdXSEpWMVZYcXd3ejArcDdrTVFveENqREZLOVBxUVRQSGtSMUdLTU1VZ3d4UmhucDBFYyttSlFmTEVaZU1ySFYvd0JqNnlQckkrc2o2eSttUjlaSDFrZldYMXllMXNvQ2RZRUpEd0JnQU9oZi85az0iLz4KPC9kZWZzPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/envelope.svg":
/*!***********************************!*\
  !*** ./src/svg/icon/envelope.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgEnvelope),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEnvelope = function SvgEnvelope(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 14.667
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M12.333 0H3.667A3.671 3.671 0 0 0 0 3.667V11a3.671 3.671 0 0 0 3.667 3.667h8.667A3.671 3.671 0 0 0 16 11V3.667A3.671 3.671 0 0 0 12.333 0Zm0 2a1.651 1.651 0 0 1 1.1.421L9.1 6.754a1.582 1.582 0 0 1-2.185 0L2.577 2.421A1.651 1.651 0 0 1 3.667 2Zm0 10.667H3.667A1.667 1.667 0 0 1 2 11V4.678l3.493 3.493a3.545 3.545 0 0 0 5.014 0L14 4.678V11a1.667 1.667 0 0 1-1.667 1.667Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNC42NjciIHZpZXdCb3g9IjAgMCAxNiAxNC42NjciPgogIDxwYXRoIGlkPSJlbnZlbG9wZSIgZD0iTTEyLjMzMywxSDMuNjY3QTMuNjcxLDMuNjcxLDAsMCwwLDAsNC42NjdWMTJhMy42NzEsMy42NzEsMCwwLDAsMy42NjcsMy42NjdoOC42NjdBMy42NzEsMy42NzEsMCwwLDAsMTYsMTJWNC42NjdBMy42NzEsMy42NzEsMCwwLDAsMTIuMzMzLDFabTAsMmExLjY1MSwxLjY1MSwwLDAsMSwxLjEuNDIxTDkuMSw3Ljc1NGExLjU4MiwxLjU4MiwwLDAsMS0yLjE4NSwwTDIuNTc3LDMuNDIxQTEuNjUxLDEuNjUxLDAsMCwxLDMuNjY3LDNabTAsMTAuNjY3SDMuNjY3QTEuNjY3LDEuNjY3LDAsMCwxLDIsMTJWNS42NzhMNS40OTMsOS4xNzFhMy41NDUsMy41NDUsMCwwLDAsNS4wMTQsMEwxNCw1LjY3OFYxMkExLjY2NywxLjY2NywwLDAsMSwxMi4zMzMsMTMuNjY3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMSkiIGZpbGw9IiM2ZTZlNmUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/facebook.svg":
/*!***********************************!*\
  !*** ./src/svg/icon/facebook.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgFacebook),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFacebook = function SvgFacebook(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 15.903
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M16 8a8 8 0 1 0-9.25 7.9v-5.587H4.718V8H6.75V6.237a2.823 2.823 0 0 1 3.022-3.112 12.312 12.312 0 0 1 1.791.156v1.968h-1.009a1.156 1.156 0 0 0-1.3 1.249V8h2.219l-.355 2.313H9.25V15.9A8 8 0 0 0 16 8Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNS45MDMiIHZpZXdCb3g9IjAgMCAxNiAxNS45MDMiPgogIDxwYXRoIGlkPSJmYWNlYm9vayIgZD0iTTI0LDE2YTgsOCwwLDEsMC05LjI1LDcuOVYxOC4zMTNIMTIuNzE4VjE2SDE0Ljc1VjE0LjIzN2EyLjgyMywyLjgyMywwLDAsMSwzLjAyMi0zLjExMiwxMi4zMTIsMTIuMzEyLDAsMCwxLDEuNzkxLjE1NnYxLjk2OEgxOC41NTRhMS4xNTYsMS4xNTYsMCwwLDAtMS4zLDEuMjQ5VjE2aDIuMjE5bC0uMzU1LDIuMzEzSDE3LjI1VjIzLjlBOCw4LDAsMCwwLDI0LDE2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTggLTgpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/file-pdf.svg":
/*!***********************************!*\
  !*** ./src/svg/icon/file-pdf.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgFilePdf),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFilePdf = function SvgFilePdf(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 30
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#a2a2a2",
    d: "M7.475 20.675a1.108 1.108 0 0 1-1.113 1.075H5.325V19.6h1.05a1.108 1.108 0 0 1 1.112 1.075Zm5.137-1.075h-1.05v4.375h1.05a1.108 1.108 0 0 0 1.113-1.075v-2.225a1.108 1.108 0 0 0-1.113-1.075ZM25 10.2v12.925A6.887 6.887 0 0 1 18.125 30H6.875A6.887 6.887 0 0 1 0 23.125V6.875A6.887 6.887 0 0 1 6.875 0H14.8a6.826 6.826 0 0 1 4.862 2.012l3.325 3.325A6.826 6.826 0 0 1 25 10.2ZM9.037 20.675a2.662 2.662 0 0 0-2.675-2.637H5a1.254 1.254 0 0 0-1.25 1.25v5.55a.771.771 0 0 0 .775.775.779.779 0 0 0 .775-.775v-1.525h1.05a2.662 2.662 0 0 0 2.675-2.638Zm6.25 0a2.662 2.662 0 0 0-2.675-2.637H11.25a1.254 1.254 0 0 0-1.25 1.25v5.55a.711.711 0 0 0 .775.7H12.6a2.662 2.662 0 0 0 2.675-2.638v-2.225Zm5.862-1.962a.78.78 0 0 0-.763-.587H17.5a.771.771 0 0 0-.775.775v6.012a.771.771 0 0 0 .775.775.779.779 0 0 0 .775-.775v-2.25h1.55a.771.771 0 0 0 .775-.775.779.779 0 0 0-.775-.775h-1.55v-1.426h2.112a.791.791 0 0 0 .763-.587v-.375ZM21.25 15v-3.75h-5a2.507 2.507 0 0 1-2.5-2.5v-5H6.875A3.126 3.126 0 0 0 3.75 6.875V15h17.5Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDI1IDMwIj4KICA8cGF0aCBpZD0iZmlsZS1wZGYiIGQ9Ik05LjQ3NSwyMC42NzVBMS4xMDgsMS4xMDgsMCwwLDEsOC4zNjIsMjEuNzVINy4zMjVWMTkuNmgxLjA1YTEuMTA4LDEuMTA4LDAsMCwxLDEuMTEyLDEuMDc1Wk0xNC42MTIsMTkuNmgtMS4wNXY0LjM3NWgxLjA1QTEuMTA4LDEuMTA4LDAsMCwwLDE1LjcyNSwyMi45VjIwLjY3NUExLjEwOCwxLjEwOCwwLDAsMCwxNC42MTIsMTkuNlpNMjcsMTAuMlYyMy4xMjVBNi44ODcsNi44ODcsMCwwLDEsMjAuMTI1LDMwSDguODc1QTYuODg3LDYuODg3LDAsMCwxLDIsMjMuMTI1VjYuODc1QTYuODg3LDYuODg3LDAsMCwxLDguODc1LDBIMTYuOGE2LjgyNiw2LjgyNiwwLDAsMSw0Ljg2MiwyLjAxMmwzLjMyNSwzLjMyNUE2LjgyNiw2LjgyNiwwLDAsMSwyNywxMC4yWk0xMS4wMzcsMjAuNjc1YTIuNjYyLDIuNjYyLDAsMCwwLTIuNjc1LTIuNjM3SDdhMS4yNTQsMS4yNTQsMCwwLDAtMS4yNSwxLjI1djUuNTVhLjc3MS43NzEsMCwwLDAsLjc3NS43NzUuNzc5Ljc3OSwwLDAsMCwuNzc1LS43NzVWMjMuMzEzSDguMzVhMi42NjIsMi42NjIsMCwwLDAsMi42NzUtMi42MzhabTYuMjUsMGEyLjY2MiwyLjY2MiwwLDAsMC0yLjY3NS0yLjYzN0gxMy4yNUExLjI1NCwxLjI1NCwwLDAsMCwxMiwxOS4yODh2NS41NWEuNzExLjcxMSwwLDAsMCwuNzc1LjdIMTQuNkEyLjY2MiwyLjY2MiwwLDAsMCwxNy4yNzUsMjIuOVYyMC42NzVabTUuODYyLTEuOTYyYS43OC43OCwwLDAsMC0uNzYzLS41ODdIMTkuNWEuNzcxLjc3MSwwLDAsMC0uNzc1Ljc3NXY2LjAxMmEuNzcxLjc3MSwwLDAsMCwuNzc1Ljc3NS43NzkuNzc5LDAsMCwwLC43NzUtLjc3NXYtMi4yNWgxLjU1YS43NzEuNzcxLDAsMCwwLC43NzUtLjc3NS43NzkuNzc5LDAsMCwwLS43NzUtLjc3NWgtMS41NVYxOS42ODdoMi4xMTJhLjc5MS43OTEsMCwwLDAsLjc2My0uNTg3di0uMzc1Wk0yMy4yNSwxNVYxMS4yNWgtNWEyLjUwNywyLjUwNywwLDAsMS0yLjUtMi41di01SDguODc1QTMuMTI2LDMuMTI2LDAsMCwwLDUuNzUsNi44NzVWMTVoMTcuNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yKSIgZmlsbD0iI2EyYTJhMiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/file-solid.svg":
/*!*************************************!*\
  !*** ./src/svg/icon/file-solid.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgFileSolid),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFileSolid = function SvgFileSolid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0l128 128z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NEMwIDI4LjcgMjguNyAwIDY0IDBIMjI0VjEyOGMwIDE3LjcgMTQuMyAzMiAzMiAzMkgzODRWNDQ4YzAgMzUuMy0yOC43IDY0LTY0IDY0SDY0Yy0zNS4zIDAtNjQtMjguNy02NC02NFY2NHptMzg0IDY0SDI1NlYwTDM4NCAxMjh6Ii8+PC9zdmc+");

/***/ }),

/***/ "./src/svg/icon/filter.svg":
/*!*********************************!*\
  !*** ./src/svg/icon/filter.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgFilter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFilter = function SvgFilter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 13,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6B6B73",
    fillRule: "evenodd",
    d: "M12.5 2.316c-.828 0-1.5.645-1.5 1.44 0 .794.672 1.438 1.5 1.438S14 4.55 14 3.755c0-.794-.672-1.439-1.5-1.439Zm-2.905.72C9.928 1.795 11.102.878 12.5.878c1.657 0 3 1.288 3 2.877 0 1.59-1.343 2.878-3 2.878-1.398 0-2.572-.917-2.905-2.159H1.25c-.414 0-.75-.322-.75-.719 0-.397.336-.72.75-.72h8.345ZM3.5 8.07c-.828 0-1.5.645-1.5 1.44 0 .794.672 1.438 1.5 1.438S5 10.305 5 9.51c0-.794-.672-1.439-1.5-1.439Zm-3 1.44c0-1.59 1.343-2.878 3-2.878 1.398 0 2.572.917 2.905 2.158h8.345c.414 0 .75.322.75.72 0 .397-.336.719-.75.719H6.405c-.333 1.24-1.507 2.158-2.905 2.158-1.657 0-3-1.289-3-2.878Z",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi41IDIuMzE2MzRDMTEuNjcxNiAyLjMxNjM0IDExIDIuOTYwNSAxMSAzLjc1NTEyQzExIDQuNTQ5NzMgMTEuNjcxNiA1LjE5Mzg5IDEyLjUgNS4xOTM4OUMxMy4zMjg0IDUuMTkzODkgMTQgNC41NDk3MyAxNCAzLjc1NTExQzE0IDIuOTYwNSAxMy4zMjg0IDIuMzE2MzQgMTIuNSAyLjMxNjM0Wk05LjU5NDUxIDMuMDM1NzNDOS45Mjc1NCAxLjc5NDYyIDExLjEwMjEgMC44Nzc1NjMgMTIuNSAwLjg3NzU2M0MxNC4xNTY5IDAuODc3NTYzIDE1LjUgMi4xNjU4OSAxNS41IDMuNzU1MTFDMTUuNSA1LjM0NDM0IDE0LjE1NjkgNi42MzI2NyAxMi41IDYuNjMyNjdDMTEuMTAyMSA2LjYzMjY3IDkuOTI3NTUgNS43MTU2MSA5LjU5NDUxIDQuNDc0NUwxLjI1IDQuNDc0NUMwLjgzNTc4NiA0LjQ3NDUgMC41IDQuMTUyNDIgMC41IDMuNzU1MTFDMC41IDMuMzU3ODEgMC44MzU3ODcgMy4wMzU3MyAxLjI1IDMuMDM1NzNMOS41OTQ1MSAzLjAzNTczWk0zLjUgOC4wNzE0NEMyLjY3MTU3IDguMDcxNDQgMiA4LjcxNTYgMiA5LjUxMDIyQzIgMTAuMzA0OCAyLjY3MTU3IDEwLjk0OSAzLjUgMTAuOTQ5QzQuMzI4NDMgMTAuOTQ5IDUgMTAuMzA0OCA1IDkuNTEwMjJDNSA4LjcxNTYgNC4zMjg0MyA4LjA3MTQ0IDMuNSA4LjA3MTQ0Wk0wLjUgOS41MTAyMkMwLjUgNy45MjA5OSAxLjg0MzE1IDYuNjMyNjcgMy41IDYuNjMyNjdDNC44OTc4OCA2LjYzMjY3IDYuMDcyNDUgNy41NDk3MiA2LjQwNTQ5IDguNzkwODNMMTQuNzUgOC43OTA4M0MxNS4xNjQyIDguNzkwODMgMTUuNSA5LjExMjkxIDE1LjUgOS41MTAyMkMxNS41IDkuOTA3NTMgMTUuMTY0MiAxMC4yMjk2IDE0Ljc1IDEwLjIyOTZINi40MDU0OUM2LjA3MjQ1IDExLjQ3MDcgNC44OTc4OCAxMi4zODc4IDMuNSAxMi4zODc4QzEuODQzMTUgMTIuMzg3OCAwLjUgMTEuMDk5NCAwLjUgOS41MTAyMloiIGZpbGw9IiM2QjZCNzMiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/flag-solid.svg":
/*!*************************************!*\
  !*** ./src/svg/icon/flag-solid.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgFlagSolid),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFlagSolid = function SvgFlagSolid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#a2a2a2",
    d: "m20.358 7.5 3.237-4.3A2 2 0 0 0 22 0H4a4 4 0 0 0-4 4v19a1 1 0 0 0 2 0v-8h20a2 2 0 0 0 1.6-3.2l-3.241-4.3ZM2 13V4a2 2 0 0 1 2-2h18l-3.69 4.9a1 1 0 0 0 0 1.2L22 13H2Z",
    "data-name": "flag-alt (1)"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBpZD0iZmxhZy1hbHRfMV8iIGRhdGEtbmFtZT0iZmxhZy1hbHQgKDEpIiBkPSJNMjAuMzU4LDcuNWwzLjIzNy00LjNBMiwyLDAsMCwwLDIyLDBINEE0LDQsMCwwLDAsMCw0VjIzYTEsMSwwLDAsMCwyLDBWMTVIMjJhMiwyLDAsMCwwLDEuNi0zLjJMMjAuMzU5LDcuNVpNMiwxM1Y0QTIsMiwwLDAsMSw0LDJIMjJsLTMuNjksNC45YTEsMSwwLDAsMCwwLDEuMkwyMiwxM0gyWiIgZmlsbD0iI2EyYTJhMiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/flag.svg":
/*!*******************************!*\
  !*** ./src/svg/icon/flag.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgFlag),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFlag = function SvgFlag(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24.001
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#a2a2a2",
    d: "M1 24.001a1 1 0 0 1-1-1v-19a4 4 0 0 1 4-4h18a2.013 2.013 0 0 1 1.6 3.2l-3.241 4.3 3.241 4.3a2.012 2.012 0 0 1-1.6 3.2H2v8a1 1 0 0 1-1 1Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNC4wMDEiIHZpZXdCb3g9IjAgMCAyNCAyNC4wMDEiPgogIDxwYXRoIGlkPSJmbGFnLWFsdCIgZD0iTTEsMjRhMSwxLDAsMCwxLTEtMVY0QTQsNCwwLDAsMSw0LDBIMjJhMi4wMTMsMi4wMTMsMCwwLDEsMS42LDMuMkwyMC4zNTksNy41LDIzLjYsMTEuOEEyLjAxMiwyLjAxMiwwLDAsMSwyMiwxNUgydjhBMSwxLDAsMCwxLDEsMjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDAxKSIgZmlsbD0iI2EyYTJhMiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/hash.svg":
/*!*******************************!*\
  !*** ./src/svg/icon/hash.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgHash),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHash = function SvgHash(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M15 6a1 1 0 0 0 0-2h-2.419l.409-2.859a1 1 0 1 0-1.98-.282L10.561 4h-3.98l.409-2.859A1 1 0 0 0 5.01.859L4.561 4H1.667a1 1 0 1 0 0 2h2.608L3.7 10H1a1 1 0 1 0 0 2h2.419l-.409 2.859a1 1 0 1 0 1.98.283L5.439 12h3.98l-.409 2.859a1 1 0 0 0 1.98.283L11.439 12h2.895a1 1 0 0 0 0-2h-2.609l.575-4Zm-5.3 4H5.725L6.3 6h3.979Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBpZD0iaGFzdGFnIiBkPSJNMTUsNmExLDEsMCwwLDAsMC0ySDEyLjU4MWwuNDA5LTIuODU5QTEsMSwwLDEsMCwxMS4wMS44NTlMMTAuNTYxLDRINi41ODFMNi45OSwxLjE0MUExLDEsMCwwLDAsNS4wMS44NTlMNC41NjEsNEgxLjY2N2ExLDEsMCwxLDAsMCwySDQuMjc1TDMuNywxMEgxYTEsMSwwLDEsMCwwLDJIMy40MTlMMy4wMSwxNC44NTlhMSwxLDAsMSwwLDEuOTguMjgzTDUuNDM5LDEyaDMuOThMOS4wMSwxNC44NTlhMSwxLDAsMCwwLDEuOTguMjgzTDExLjQzOSwxMmgyLjg5NWExLDEsMCwwLDAsMC0ySDExLjcyNUwxMi4zLDZaTTkuNywxMEg1LjcyNUw2LjMsNmgzLjk3OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9IiM2ZTZlNmUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/heart-solid.svg":
/*!**************************************!*\
  !*** ./src/svg/icon/heart-solid.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgHeartSolid),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHeartSolid = function SvgHeartSolid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 21.087
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#a2a2a2",
    d: "M17.498 0a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 .005 7.047c0 4.545 4.784 9.509 8.8 12.875a4.972 4.972 0 0 0 6.4 0c4.012-3.366 8.8-8.33 8.8-12.875A6.8 6.8 0 0 0 17.505 0Zm-3.584 18.392a2.972 2.972 0 0 1-3.828 0C4.95 14.083 2.005 9.949 2.005 7.047a4.8 4.8 0 0 1 4.5-5.048 4.8 4.8 0 0 1 4.5 5.048 1 1 0 1 0 2 0 4.8 4.8 0 0 1 4.5-5.048 4.8 4.8 0 0 1 4.5 5.048c0 2.9-2.946 7.036-8.082 11.341Z",
    "data-name": "heart (1)"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMS4wODciIHZpZXdCb3g9IjAgMCAyNCAyMS4wODciPgogIDxwYXRoIGlkPSJoZWFydF8xXyIgZGF0YS1uYW1lPSJoZWFydCAoMSkiIGQ9Ik0xNy40OTMsMS45MTdhNi40LDYuNCwwLDAsMC01LjUsMy4zLDYuNCw2LjQsMCwwLDAtNS41LTMuM0E2LjgsNi44LDAsMCwwLDAsOC45NjRjMCw0LjU0NSw0Ljc4NCw5LjUwOSw4LjgsMTIuODc1YTQuOTcyLDQuOTcyLDAsMCwwLDYuNCwwYzQuMDEyLTMuMzY2LDguOC04LjMzLDguOC0xMi44NzVhNi44LDYuOCwwLDAsMC02LjUtNy4wNDdaTTEzLjkwOSwyMC4zMDlhMi45NzIsMi45NzIsMCwwLDEtMy44MjgsMEM0Ljk0NSwxNiwyLDExLjg2NiwyLDguOTY0QTQuOCw0LjgsMCwwLDEsNi41LDMuOTE2LDQuOCw0LjgsMCwwLDEsMTEsOC45NjRhMSwxLDAsMSwwLDIsMCw0LjgsNC44LDAsMCwxLDQuNS01LjA0OCw0LjgsNC44LDAsMCwxLDQuNSw1LjA0OGMwLDIuOS0yLjk0Niw3LjAzNi04LjA4MiwxMS4zNDFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwNSAtMS45MTcpIiBmaWxsPSIjYTJhMmEyIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/heart.svg":
/*!********************************!*\
  !*** ./src/svg/icon/heart.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgHeart),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHeart = function SvgHeart(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 21.087
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#a2a2a2",
    d: "M17.498 0a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 .005 7.047c0 4.545 4.784 9.509 8.8 12.875a4.972 4.972 0 0 0 6.4 0c4.012-3.366 8.8-8.33 8.8-12.875A6.8 6.8 0 0 0 17.505 0Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMS4wODciIHZpZXdCb3g9IjAgMCAyNCAyMS4wODciPgogIDxwYXRoIGlkPSJoZWFydCIgZD0iTTE3LjQ5MywxLjkxN2E2LjQsNi40LDAsMCwwLTUuNSwzLjMsNi40LDYuNCwwLDAsMC01LjUtMy4zQTYuOCw2LjgsMCwwLDAsMCw4Ljk2NGMwLDQuNTQ1LDQuNzg0LDkuNTA5LDguOCwxMi44NzVhNC45NzIsNC45NzIsMCwwLDAsNi40LDBjNC4wMTItMy4zNjYsOC44LTguMzMsOC44LTEyLjg3NWE2LjgsNi44LDAsMCwwLTYuNS03LjA0N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDA1IC0xLjkxNykiIGZpbGw9IiNhMmEyYTIiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/instagram.svg":
/*!************************************!*\
  !*** ./src/svg/icon/instagram.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgInstagram),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgInstagram = function SvgInstagram(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 15.996
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M8.002 3.897a4.1 4.1 0 1 0 4.1 4.1 4.095 4.095 0 0 0-4.1-4.1Zm0 6.768a2.666 2.666 0 1 1 2.666-2.666 2.671 2.671 0 0 1-2.666 2.666Zm5.226-6.935a.957.957 0 1 1-.953-.955.954.954 0 0 1 .952.954Zm2.716.971a4.734 4.734 0 0 0-1.292-3.352A4.765 4.765 0 0 0 11.3.057c-1.321-.075-5.279-.075-6.6 0a4.758 4.758 0 0 0-3.352 1.288A4.75 4.75 0 0 0 .056 4.696c-.075 1.321-.075 5.279 0 6.6a4.734 4.734 0 0 0 1.292 3.352A4.771 4.771 0 0 0 4.7 15.94c1.321.075 5.279.075 6.6 0a4.734 4.734 0 0 0 3.352-1.292 4.765 4.765 0 0 0 1.292-3.352c.075-1.321.075-5.275 0-6.596Zm-1.706 8.013a2.7 2.7 0 0 1-1.521 1.521c-1.053.418-3.552.321-4.715.321s-3.666.093-4.715-.321a2.7 2.7 0 0 1-1.521-1.521c-.418-1.053-.321-3.552-.321-4.715s-.093-3.666.321-4.715a2.7 2.7 0 0 1 1.521-1.521c1.053-.418 3.552-.321 4.715-.321s3.666-.093 4.715.321a2.7 2.7 0 0 1 1.521 1.521c.418 1.053.321 3.552.321 4.715s.096 3.665-.321 4.714Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNS45OTYiIHZpZXdCb3g9IjAgMCAxNiAxNS45OTYiPgogIDxwYXRoIGlkPSJpbnN0YWdyYW0iIGQ9Ik03LjkyNywzNS43MjJhNC4xLDQuMSwwLDEsMCw0LjEsNC4xQTQuMDk1LDQuMDk1LDAsMCwwLDcuOTI3LDM1LjcyMlptMCw2Ljc2OGEyLjY2NiwyLjY2NiwwLDEsMSwyLjY2Ni0yLjY2NkEyLjY3MSwyLjY3MSwwLDAsMSw3LjkyNyw0Mi40OVptNS4yMjYtNi45MzVBLjk1Ny45NTcsMCwxLDEsMTIuMiwzNC42Ljk1NC45NTQsMCwwLDEsMTMuMTUyLDM1LjU1NFptMi43MTYuOTcxYTQuNzM0LDQuNzM0LDAsMCwwLTEuMjkyLTMuMzUyLDQuNzY1LDQuNzY1LDAsMCwwLTMuMzUyLTEuMjkyYy0xLjMyMS0uMDc1LTUuMjc5LS4wNzUtNi42LDBBNC43NTgsNC43NTgsMCwwLDAsMS4yNzMsMzMuMTcsNC43NSw0Ljc1LDAsMCwwLS4wMTksMzYuNTIxYy0uMDc1LDEuMzIxLS4wNzUsNS4yNzksMCw2LjZhNC43MzQsNC43MzQsMCwwLDAsMS4yOTIsMy4zNTIsNC43NzEsNC43NzEsMCwwLDAsMy4zNTIsMS4yOTJjMS4zMjEuMDc1LDUuMjc5LjA3NSw2LjYsMGE0LjczNCw0LjczNCwwLDAsMCwzLjM1Mi0xLjI5Miw0Ljc2NSw0Ljc2NSwwLDAsMCwxLjI5Mi0zLjM1MkMxNS45NDQsNDEuOCwxNS45NDQsMzcuODQ2LDE1Ljg2OSwzNi41MjVabS0xLjcwNiw4LjAxM2EyLjcsMi43LDAsMCwxLTEuNTIxLDEuNTIxYy0xLjA1My40MTgtMy41NTIuMzIxLTQuNzE1LjMyMXMtMy42NjYuMDkzLTQuNzE1LS4zMjFhMi43LDIuNywwLDAsMS0xLjUyMS0xLjUyMWMtLjQxOC0xLjA1My0uMzIxLTMuNTUyLS4zMjEtNC43MTVzLS4wOTMtMy42NjYuMzIxLTQuNzE1YTIuNywyLjcsMCwwLDEsMS41MjEtMS41MjFjMS4wNTMtLjQxOCwzLjU1Mi0uMzIxLDQuNzE1LS4zMjFzMy42NjYtLjA5Myw0LjcxNS4zMjFhMi43LDIuNywwLDAsMSwxLjUyMSwxLjUyMWMuNDE4LDEuMDUzLjMyMSwzLjU1Mi4zMjEsNC43MTVTMTQuNTgsNDMuNDg5LDE0LjE2Myw0NC41MzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA3NSAtMzEuODI1KSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/link-alt.svg":
/*!***********************************!*\
  !*** ./src/svg/icon/link-alt.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgLinkAlt),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLinkAlt = function SvgLinkAlt(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M5.263 10.736a1 1 0 0 1 1.414-1.414 2.4 2.4 0 0 0 3.311 0l3.328-3.325a2.342 2.342 0 0 0-3.311-3.311A1 1 0 1 1 8.59 1.27a4.342 4.342 0 1 1 6.14 6.14l-3.327 3.327a4.347 4.347 0 0 1-6.14 0Zm-.923 5.261a4.33 4.33 0 0 0 3.07-1.27 1 1 0 1 0-1.413-1.411 2.342 2.342 0 0 1-3.311-3.311l3.311-3.308a2.343 2.343 0 0 1 3.311 0 1 1 0 0 0 1.414-1.414 4.346 4.346 0 0 0-6.14 0L1.27 8.59a4.34 4.34 0 0 0 3.07 7.407Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBpZD0ibGluay1hbHQiIGQ9Ik01LjI2NiwxMC43MzlBMSwxLDAsMCwxLDYuNjgsOS4zMjVhMi40LDIuNCwwLDAsMCwzLjMxMSwwTDEzLjMxOSw2YTIuMzQyLDIuMzQyLDAsMCwwLTMuMzExLTMuMzExQTEsMSwwLDEsMSw4LjU5MywxLjI3M2E0LjM0Miw0LjM0MiwwLDEsMSw2LjE0LDYuMTRsLTMuMzI3LDMuMzI3YTQuMzQ3LDQuMzQ3LDAsMCwxLTYuMTQsMFpNNC4zNDMsMTZhNC4zMyw0LjMzLDAsMCwwLDMuMDctMS4yN0ExLDEsMCwxLDAsNiwxMy4zMTlhMi4zNDIsMi4zNDIsMCwwLDEtMy4zMTEtMy4zMTFMNiw2LjdhMi4zNDMsMi4zNDMsMCwwLDEsMy4zMTEsMCwxLDEsMCwwLDAsMS40MTQtMS40MTQsNC4zNDYsNC4zNDYsMCwwLDAtNi4xNCwwTDEuMjczLDguNTkzQTQuMzQsNC4zNCwwLDAsMCw0LjM0MywxNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjAwMyAtMC4wMDMpIiBmaWxsPSIjNmU2ZTZlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/marker.svg":
/*!*********************************!*\
  !*** ./src/svg/icon/marker.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgMarker),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMarker = function SvgMarker(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 14,
    height: 16
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "#6e6e6e"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7 0a7.009 7.009 0 0 0-7 7c0 1.884 1.467 4.511 4.361 7.806a3.517 3.517 0 0 0 5.28 0C12.534 11.512 14 8.885 14 7a7.009 7.009 0 0 0-7-7Zm1.138 13.488a1.553 1.553 0 0 1-2.275 0C3.407 10.691 2 8.326 2 7a5 5 0 1 1 10 0c0 1.326-1.407 3.691-3.862 6.488Z",
    "data-name": "Path 1494"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7 4.037a2.909 2.909 0 1 0 2.909 2.909A2.909 2.909 0 0 0 7 4.037Zm0 3.817a.909.909 0 1 1 .909-.909.909.909 0 0 1-.909.909Z",
    "data-name": "Path 1495"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE0IDE2Ij4KICA8ZyBpZD0ibWFya2VyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS41KSI+CiAgICA8cGF0aCBpZD0iUGF0aF8xNDk0IiBkYXRhLW5hbWU9IlBhdGggMTQ5NCIgZD0iTTguNSwwYTcuMDA5LDcuMDA5LDAsMCwwLTcsN2MwLDEuODg0LDEuNDY3LDQuNTExLDQuMzYxLDcuODA2YTMuNTE3LDMuNTE3LDAsMCwwLDUuMjgsMEMxNC4wMzQsMTEuNTEyLDE1LjUsOC44ODUsMTUuNSw3QTcuMDA5LDcuMDA5LDAsMCwwLDguNSwwWk05LjYzOCwxMy40ODhhMS41NTMsMS41NTMsMCwwLDEtMi4yNzUsMEM0LjkwNywxMC42OTEsMy41LDguMzI2LDMuNSw3YTUsNSwwLDEsMSwxMCwwQzEzLjUsOC4zMjYsMTIuMDkzLDEwLjY5MSw5LjYzOCwxMy40ODhaIiBmaWxsPSIjNmU2ZTZlIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8xNDk1IiBkYXRhLW5hbWU9IlBhdGggMTQ5NSIgZD0iTTEwLjU0Niw2LjA1NWEyLjkwOSwyLjkwOSwwLDEsMCwyLjkwOSwyLjkwOSwyLjkwOSwyLjkwOSwwLDAsMC0yLjkwOS0yLjkwOVptMCwzLjgxN2EuOTA5LjkwOSwwLDEsMSwuOTA5LS45MDlBLjkwOS45MDksMCwwLDEsMTAuNTQ2LDkuODcyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMDQ2IC0yLjAxOCkiIGZpbGw9IiM2ZTZlNmUiLz4KICA8L2c+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/meter.svg":
/*!********************************!*\
  !*** ./src/svg/icon/meter.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgMeter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMeter = function SvgMeter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 14.337
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M16 8.007a7.933 7.933 0 0 1-2.321 5.625 2.341 2.341 0 0 1-3.145.184l-.855-.693a1 1 0 1 1 1.259-1.553l.855.693a.349.349 0 0 0 .467-.039A6.027 6.027 0 0 0 12 3.532a6 6 0 0 0-8.267 8.685.346.346 0 0 0 .467.037l.828-.685A1 1 0 0 1 6.3 13.111l-.826.685a2.337 2.337 0 0 1-3.167-.172A8 8 0 1 1 16 8.007Zm-4.959-1.6a1 1 0 1 0-1.415-1.415L7.917 6.699a1.333 1.333 0 1 0 1.416 1.416Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNC4zMzciIHZpZXdCb3g9IjAgMCAxNiAxNC4zMzciPgogIDxwYXRoIGlkPSJ0YWNob21ldGVyLWZhc3QiIGQ9Ik0xNiw4Ljk1OWE3LjkzMyw3LjkzMywwLDAsMS0yLjMyMSw1LjYyNSwyLjM0MSwyLjM0MSwwLDAsMS0zLjE0NS4xODRsLS44NTUtLjY5M2ExLDEsMCwxLDEsMS4yNTktMS41NTNsLjg1NS42OTNhLjM0OS4zNDksMCwwLDAsLjQ2Ny0uMDM5QTYuMDI3LDYuMDI3LDAsMCwwLDEyLDQuNDg0YTYsNiwwLDAsMC04LjI2Nyw4LjY4NS4zNDYuMzQ2LDAsMCwwLC40NjcuMDM3bC44MjgtLjY4NUExLDEsMCwwLDEsNi4zLDE0LjA2M2wtLjgyNi42ODVhMi4zMzcsMi4zMzcsMCwwLDEtMy4xNjctLjE3MkE4LDgsMCwxLDEsMTYsOC45NTlabS00Ljk1OS0xLjZBMSwxLDAsMSwwLDkuNjI2LDUuOTQ0TDcuOTE3LDcuNjUxQTEuMzMzLDEuMzMzLDAsMSwwLDkuMzMzLDkuMDY3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMC45NTIpIiBmaWxsPSIjNmU2ZTZlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/mic.svg":
/*!******************************!*\
  !*** ./src/svg/icon/mic.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgMic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMic = function SvgMic(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 14.012,
    height: 18
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "#898989",
    "data-name": "Group 2293"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7.414 12.497a4 4 0 0 0 3.545-4.035V4.034a4.235 4.235 0 0 0-.123-1.021 3.951 3.951 0 0 0-7.784 1.083V8.46a4.672 4.672 0 0 0 .08.859 4 4 0 0 0 4.282 3.178Zm.769-6.328a.488.488 0 0 1-.511.4 2.8 2.8 0 0 1-.5-.048 2.381 2.381 0 0 0-.793.048.51.51 0 0 1-.3-.973 2.324 2.324 0 0 1 .322-.091 1.911 1.911 0 0 1 .5-.05 2.373 2.373 0 0 1 .923.165.482.482 0 0 1 .354.549ZM5.191 4.38a.528.528 0 0 1 .356-.428 4.27 4.27 0 0 1 1.331-.178 6.047 6.047 0 0 1 1.507.224.356.356 0 0 1 .212.554.622.622 0 0 1-.739.294 2.5 2.5 0 0 0-1.9.015c-.28.114-.855-.165-.767-.481Z",
    "data-name": "Path 1240"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14.004 8.096c0-.414.01-.765 0-1.116a.6.6 0 0 0-.623-.583.6.6 0 0 0-.612.571c-.018.456-.009.913-.011 1.369a6.227 6.227 0 0 1-.151 1.421A5.721 5.721 0 0 1 4.14 13.43a5.628 5.628 0 0 1-2.878-5.035c-.008-.478.008-.956-.011-1.433a.6.6 0 0 0-.619-.565.588.588 0 0 0-.613.568 16.076 16.076 0 0 0 .08 2.65 7.03 7.03 0 0 0 6.113 5.845c.133.015.173.058.171.193-.008.555-.006 1.11 0 1.665a.632.632 0 1 0 1.259-.008v-1.454c0-.357 0-.351.346-.4a6.8 6.8 0 0 0 5.168-3.588 6.993 6.993 0 0 0 .848-3.772Z",
    "data-name": "Path 1241"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNC4wMTIiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNC4wMTIgMTgiPgogIDxnIGlkPSJHcm91cF8yMjkzIiBkYXRhLW5hbWU9Ikdyb3VwIDIyOTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MDkuNjIyIC01MjQuODcyKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8xMjQwIiBkYXRhLW5hbWU9IlBhdGggMTI0MCIgZD0iTTgxNy4wMzYsNTM3LjM2OWE0LDQsMCwwLDAsMy41NDUtNC4wMzVxMC0xLjEsMC0yLjE5MywwLTEuMTE3LDAtMi4yMzVhNC4yMzUsNC4yMzUsMCwwLDAtLjEyMy0xLjAyMSwzLjk1MSwzLjk1MSwwLDAsMC03Ljc4NCwxLjA4M3EwLDIuMTgxLDAsNC4zNjRhNC42NzIsNC42NzIsMCwwLDAsLjA4Ljg1OUE0LDQsMCwwLDAsODE3LjAzNiw1MzcuMzY5Wm0uNzY5LTYuMzI4YS40ODguNDg4LDAsMCwxLS41MTEuNCwyLjgsMi44LDAsMCwxLS41LS4wNDgsMi4zODEsMi4zODEsMCwwLDAtLjc5My4wNDguNTA5LjUwOSwwLDAsMS0uMy0uOTczLDIuMzI0LDIuMzI0LDAsMCwxLC4zMjItLjA5MSwxLjkxMSwxLjkxMSwwLDAsMSwuNS0uMDUsMi4zNzMsMi4zNzMsMCwwLDEsLjkyMy4xNjVBLjQ4Mi40ODIsMCwwLDEsODE3LjgsNTMxLjA0MVptLTIuOTkyLTEuNzg5YS41MjguNTI4LDAsMCwxLC4zNTYtLjQyOCw0LjI3LDQuMjcsMCwwLDEsMS4zMzEtLjE3OCw2LjA0Nyw2LjA0NywwLDAsMSwxLjUwNy4yMjQuMzU2LjM1NiwwLDAsMSwuMjEyLjU1NC42MjIuNjIyLDAsMCwxLS43MzkuMjk0LDIuNSwyLjUsMCwwLDAtMS45LjAxNUM4MTUuMyw1MjkuODQ3LDgxNC43MjUsNTI5LjU2OCw4MTQuODEzLDUyOS4yNTJaIiBmaWxsPSIjODk4OTg5Ii8+CiAgICA8cGF0aCBpZD0iUGF0aF8xMjQxIiBkYXRhLW5hbWU9IlBhdGggMTI0MSIgZD0iTTgyMy42MjYsNTMyLjk2OGMwLS40MTQuMDEtLjc2NSwwLTEuMTE2YS42LjYsMCwwLDAtLjYyMy0uNTgzLjYuNiwwLDAsMC0uNjEyLjU3MWMtLjAxOC40NTYtLjAwOS45MTMtLjAxMSwxLjM2OWE2LjIyNyw2LjIyNywwLDAsMS0uMTUxLDEuNDIxLDUuNzIxLDUuNzIxLDAsMCwxLTguNDY3LDMuNjcyLDUuNjI4LDUuNjI4LDAsMCwxLTIuODc4LTUuMDM1Yy0uMDA4LS40NzguMDA4LS45NTYtLjAxMS0xLjQzM2EuNi42LDAsMCwwLS42MTktLjU2NS41ODguNTg4LDAsMCwwLS42MTMuNTY4LDE2LjA3NiwxNi4wNzYsMCwwLDAsLjA4LDIuNjUsNy4wMyw3LjAzLDAsMCwwLDYuMTEzLDUuODQ1Yy4xMzMuMDE1LjE3My4wNTguMTcxLjE5My0uMDA4LjU1NS0uMDA2LDEuMTEsMCwxLjY2NWEuNjMyLjYzMiwwLDEsMCwxLjI1OS0uMDA4YzAtLjQ4NCwwLS45NjksMC0xLjQ1NCwwLS4zNTcsMC0uMzUxLjM0Ni0uNGE2LjgsNi44LDAsMCwwLDUuMTY4LTMuNTg4QTYuOTkzLDYuOTkzLDAsMCwwLDgyMy42MjYsNTMyLjk2OFoiIGZpbGw9IiM4OTg5ODkiLz4KICA8L2c+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/open-ended.svg":
/*!*************************************!*\
  !*** ./src/svg/icon/open-ended.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgOpenEnded),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOpenEnded = function SvgOpenEnded(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 15.998
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "#6e6e6e"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15.649 6.536a.8.8 0 0 0-.746-.08l-2.94 1.176A2.4 2.4 0 0 0 9.6 5.598H2.4a2.4 2.4 0 0 0-2.4 2.4v5.6a2.4 2.4 0 0 0 2.4 2.4h7.2a2.4 2.4 0 0 0 2.363-2.033l2.94 1.176A.8.8 0 0 0 16 14.398v-7.2a.8.8 0 0 0-.351-.662ZM9.6 14.398H2.4a.8.8 0 0 1-.8-.8v-5.6a.8.8 0 0 1 .8-.8h7.2a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8Zm4.8-1.182-2.4-.96V9.34l2.4-.96v4.838Z",
    "data-name": "Path 1511"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3.36 2.674a3.771 3.771 0 0 1 5.28 0 .8.8 0 0 0 1.12-1.14 5.377 5.377 0 0 0-7.52 0 .8.8 0 0 0 1.12 1.14Z",
    "data-name": "Path 1512"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.16 3.429a.8.8 0 1 0 1.12 1.14 1.026 1.026 0 0 1 1.44 0 .8.8 0 1 0 1.12-1.14 2.632 2.632 0 0 0-3.68 0Z",
    "data-name": "Path 1513"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNS45OTgiIHZpZXdCb3g9IjAgMCAxNiAxNS45OTgiPgogIDxnIGlkPSJvcGVuLWVuZGVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMiAtMi4wMDIpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzE1MTEiIGRhdGEtbmFtZT0iUGF0aCAxNTExIiBkPSJNMTcuNjQ5LDkuOTM4YS44LjgsMCwwLDAtLjc0Ni0uMDhsLTIuOTQsMS4xNzZBMi40LDIuNCwwLDAsMCwxMS42LDlINC40QTIuNCwyLjQsMCwwLDAsMiwxMS40VjE3YTIuNCwyLjQsMCwwLDAsMi40LDIuNGg3LjJhMi40LDIuNCwwLDAsMCwyLjM2My0yLjAzM2wyLjk0LDEuMTc2QS44LjgsMCwwLDAsMTgsMTcuOFYxMC42YS44LjgsMCwwLDAtLjM1MS0uNjYyWk0xMS42LDE3LjhINC40YS44LjgsMCwwLDEtLjgtLjhWMTEuNGEuOC44LDAsMCwxLC44LS44aDcuMmEuOC44LDAsMCwxLC44LjhWMTdBLjguOCwwLDAsMSwxMS42LDE3LjhabTQuOC0xLjE4Mi0yLjQtLjk2VjEyLjc0MmwyLjQtLjk2djQuODM4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMS40KSIgZmlsbD0iIzZlNmU2ZSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMTUxMiIgZGF0YS1uYW1lPSJQYXRoIDE1MTIiIGQ9Ik01Ljg2Nyw0LjY3NmEzLjc3MSwzLjc3MSwwLDAsMSw1LjI4LDAsLjguOCwwLDAsMCwxLjEyLTEuMTQsNS4zNzcsNS4zNzcsMCwwLDAtNy41MiwwLC44LjgsMCwwLDAsMS4xMiwxLjE0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNTA3IDApIiBmaWxsPSIjNmU2ZTZlIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8xNTEzIiBkYXRhLW5hbWU9IlBhdGggMTUxMyIgZD0iTTcuMTMzLDYuMWEuOC44LDAsMSwwLDEuMTIsMS4xNCwxLjAyNiwxLjAyNiwwLDAsMSwxLjQ0LDAsLjguOCwwLDEsMCwxLjEyLTEuMTQsMi42MzIsMi42MzIsMCwwLDAtMy42OCwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuOTczIC0wLjY2OSkiIGZpbGw9IiM2ZTZlNmUiLz4KICA8L2c+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/pages.svg":
/*!********************************!*\
  !*** ./src/svg/icon/pages.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgPages),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPages = function SvgPages(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 18,
    height: 18,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#94949A",
    fillRule: "evenodd",
    d: "M9.75 2.265a9.588 9.588 0 0 0-.741-.015H6.6c-.642 0-1.08 0-1.417.028-.329.027-.497.076-.614.135a1.5 1.5 0 0 0-.656.656c-.06.117-.108.285-.135.614-.027.338-.028.775-.028 1.417v7.8c0 .642 0 1.08.028 1.417.027.329.076.497.135.614a1.5 1.5 0 0 0 .656.655c.117.06.285.109.614.136.338.027.775.028 1.417.028h4.8c.642 0 1.08 0 1.417-.028.329-.027.497-.076.614-.136a1.5 1.5 0 0 0 .655-.655c.06-.117.109-.285.136-.614.027-.338.028-.775.028-1.417V7.491c0-.395-.002-.602-.015-.741h-2.559c-.19 0-.374 0-.53-.013a1.517 1.517 0 0 1-.577-.15 1.5 1.5 0 0 1-.656-.656 1.516 1.516 0 0 1-.15-.577c-.013-.156-.013-.34-.013-.53v-2.56Zm1.043-1.254a3.003 3.003 0 0 0-.525-.178C9.921.75 9.561.75 9.085.75H6.57c-.604 0-1.102 0-1.508.033-.421.035-.809.108-1.173.294a3 3 0 0 0-1.311 1.311c-.185.364-.26.752-.294 1.173-.033.406-.033.904-.033 1.508v7.862c0 .604 0 1.102.033 1.508.035.421.109.809.294 1.173a3 3 0 0 0 1.311 1.311c.364.186.752.26 1.173.294.406.033.904.033 1.508.033h4.862c.604 0 1.102 0 1.508-.033.421-.035.809-.108 1.173-.294a3 3 0 0 0 1.311-1.311c.185-.364.26-.752.294-1.173.033-.406.033-.904.033-1.508V7.415c0-.476 0-.836-.083-1.183a2.989 2.989 0 0 0-.36-.868c-.186-.304-.44-.558-.777-.895l-.054-.054-2.391-2.39a46.097 46.097 0 0 0-.054-.055c-.337-.337-.591-.591-.896-.778a2.998 2.998 0 0 0-.342-.18Zm.457 2.3V4.8a6.175 6.175 0 0 0 .009.441 6.141 6.141 0 0 0 .441.009h1.49l-1.94-1.94Z",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05Ljc1IDIuMjY0ODdDOS42MTA3MyAyLjI1MjE4IDkuNDA0MzYgMi4yNDk5OSA5LjAwODgzIDIuMjQ5OTlINi42QzUuOTU3NTcgMi4yNDk5OSA1LjUyMDg1IDIuMjUwNTcgNS4xODMyOCAyLjI3ODE1QzQuODU0NDcgMi4zMDUwMSA0LjY4NjMxIDIuMzUzNzEgNC41NjkwMiAyLjQxMzQ4QzQuMjg2NzcgMi41NTcyOSA0LjA1NzMgMi43ODY3NiAzLjkxMzQ5IDMuMDY5QzMuODUzNzIgMy4xODYzIDMuODA1MDMgMy4zNTQ0NSAzLjc3ODE2IDMuNjgzMjZDMy43NTA1OCA0LjAyMDgzIDMuNzUgNC40NTc1NSAzLjc1IDUuMDk5OTlWMTIuOUMzLjc1IDEzLjU0MjQgMy43NTA1OCAxMy45NzkxIDMuNzc4MTYgMTQuMzE2N0MzLjgwNTAzIDE0LjY0NTUgMy44NTM3MiAxNC44MTM3IDMuOTEzNDkgMTQuOTMxQzQuMDU3MyAxNS4yMTMyIDQuMjg2NzcgMTUuNDQyNyA0LjU2OTAyIDE1LjU4NjVDNC42ODYzMSAxNS42NDYzIDQuODU0NDcgMTUuNjk1IDUuMTgzMjggMTUuNzIxOEM1LjUyMDg1IDE1Ljc0OTQgNS45NTc1NyAxNS43NSA2LjYgMTUuNzVIMTEuNEMxMi4wNDI0IDE1Ljc1IDEyLjQ3OTIgMTUuNzQ5NCAxMi44MTY3IDE1LjcyMThDMTMuMTQ1NSAxNS42OTUgMTMuMzEzNyAxNS42NDYzIDEzLjQzMSAxNS41ODY1QzEzLjcxMzIgMTUuNDQyNyAxMy45NDI3IDE1LjIxMzIgMTQuMDg2NSAxNC45MzFDMTQuMTQ2MyAxNC44MTM3IDE0LjE5NSAxNC42NDU1IDE0LjIyMTggMTQuMzE2N0MxNC4yNDk0IDEzLjk3OTEgMTQuMjUgMTMuNTQyNCAxNC4yNSAxMi45VjcuNDkxMTVDMTQuMjUgNy4wOTU2MyAxNC4yNDc4IDYuODg5MjYgMTQuMjM1MSA2Ljc0OTk5TDExLjY3NjEgNi43NDk5OUMxMS40ODY4IDYuNzUwMDEgMTEuMzAyNCA2Ljc1MDAzIDExLjE0NjMgNi43MzcyOEMxMC45NzQ5IDYuNzIzMjcgMTAuNzcyNiA2LjY5MDIyIDEwLjU2OSA2LjU4NjVDMTAuMjg2OCA2LjQ0MjY5IDEwLjA1NzMgNi4yMTMyMSA5LjkxMzQ5IDUuOTMwOTdDOS44MDk3NyA1LjcyNzQgOS43NzY3MiA1LjUyNTEgOS43NjI3MSA1LjM1MzY2QzkuNzQ5OTUgNS4xOTc1NCA5Ljc0OTk4IDUuMDEzMTkgOS43NSA0LjgyMzlMOS43NSAyLjI2NDg3Wk0xMC43OTI3IDEuMDExMzRDMTAuNjI0IDAuOTM1OTI0IDEwLjQ0ODUgMC44NzYxMzMgMTAuMjY4NCAwLjgzMjg3N0M5LjkyMTM0IDAuNzQ5NTY0IDkuNTYxNDkgMC43NDk3MzYgOS4wODUyNCAwLjc0OTk2MkM5LjA2MDEgMC43NDk5NzQgOS4wMzQ2NCAwLjc0OTk4NiA5LjAwODgzIDAuNzQ5OTg2TDYuNTY5MDMgMC43NDk5ODZDNS45NjUzIDAuNzQ5OTc2IDUuNDY3MDMgMC43NDk5NjggNS4wNjExMyAwLjc4MzEzMUM0LjYzOTU2IDAuODE3NTc1IDQuMjUyMDMgMC44OTE0OTkgMy44ODgwMyAxLjA3Njk3QzMuMzIzNTQgMS4zNjQ1OSAyLjg2NDYgMS44MjM1MyAyLjU3Njk4IDIuMzg4MDFDMi4zOTE1MSAyLjc1MjAyIDIuMzE3NTkgMy4xMzk1NCAyLjI4MzE1IDMuNTYxMTJDMi4yNDk5OCAzLjk2NzAxIDIuMjQ5OTkgNC40NjUyOCAyLjI1IDUuMDY5MDFWMTIuOTMxQzIuMjQ5OTkgMTMuNTM0NyAyLjI0OTk4IDE0LjAzMyAyLjI4MzE1IDE0LjQzODlDMi4zMTc1OSAxNC44NjA0IDIuMzkxNTEgMTUuMjQ4IDIuNTc2OTggMTUuNjEyQzIuODY0NiAxNi4xNzY0IDMuMzIzNTQgMTYuNjM1NCAzLjg4ODAzIDE2LjkyM0M0LjI1MjAzIDE3LjEwODUgNC42Mzk1NiAxNy4xODI0IDUuMDYxMTMgMTcuMjE2OEM1LjQ2NzAyIDE3LjI1IDUuOTY1MjkgMTcuMjUgNi41NjkwMSAxNy4yNUgxMS40MzFDMTIuMDM0NyAxNy4yNSAxMi41MzMgMTcuMjUgMTIuOTM4OSAxNy4yMTY4QzEzLjM2MDQgMTcuMTgyNCAxMy43NDggMTcuMTA4NSAxNC4xMTIgMTYuOTIzQzE0LjY3NjUgMTYuNjM1NCAxNS4xMzU0IDE2LjE3NjQgMTUuNDIzIDE1LjYxMkMxNS42MDg1IDE1LjI0OCAxNS42ODI0IDE0Ljg2MDQgMTUuNzE2OSAxNC40Mzg5QzE1Ljc1IDE0LjAzMyAxNS43NSAxMy41MzQ3IDE1Ljc1IDEyLjkzMVY3LjQ5MTE1QzE1Ljc1IDcuNDY1MzUgMTUuNzUgNy40Mzk4OSAxNS43NSA3LjQxNDc1QzE1Ljc1MDIgNi45Mzg1IDE1Ljc1MDQgNi41Nzg2NSAxNS42NjcxIDYuMjMxNjNDMTUuNjIzOSA2LjA1MTQ1IDE1LjU2NDEgNS44NzU5NCAxNS40ODg2IDUuNzA3MjhDMTUuNDgzNyA1LjY5NTU0IDE1LjQ3ODQgNS42ODM5NCAxNS40NzI4IDUuNjcyNTFDMTUuNDI0IDUuNTY2ODcgMTUuMzY4OSA1LjQ2NCAxNS4zMDc5IDUuMzY0NDdDMTUuMTIxNCA1LjA2MDE4IDE0Ljg2NjkgNC44MDU4NSAxNC41MyA0LjQ2OTI0QzE0LjUxMjIgNC40NTE0OCAxNC40OTQyIDQuNDMzNDggMTQuNDc1OSA0LjQxNTI0TDEyLjA4NDcgMi4wMjQwN0MxMi4wNjY1IDIuMDA1ODMgMTIuMDQ4NSAxLjk4NzgxIDEyLjAzMDcgMS45NzAwM0MxMS42OTQxIDEuNjMzMTEgMTEuNDM5OCAxLjM3ODU0IDExLjEzNTUgMS4xOTIwN0MxMS4wMzYgMS4xMzEwNyAxMC45MzMxIDEuMDc2MDMgMTAuODI3NSAxLjAyNzE3QzEwLjgxNjEgMS4wMjE2MSAxMC44MDQ0IDEuMDE2MzMgMTAuNzkyNyAxLjAxMTM0Wk0xMS4yNSAzLjMxMDY1VjQuNzk5OTlDMTEuMjUgNS4wMjIzOCAxMS4yNTA2IDUuMTQ0MDcgMTEuMjU3NyA1LjIzMTUxQzExLjI1OCA1LjIzNDk5IDExLjI1ODMgNS4yMzgyOSAxMS4yNTg2IDUuMjQxNEMxMS4yNjE3IDUuMjQxNjkgMTEuMjY1IDUuMjQxOTcgMTEuMjY4NSA1LjI0MjI2QzExLjM1NTkgNS4yNDk0IDExLjQ3NzYgNS4yNDk5OSAxMS43IDUuMjQ5OTlIMTMuMTg5M0wxMS4yNSAzLjMxMDY1WiIgZmlsbD0iIzk0OTQ5QSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/phone-flip.svg":
/*!*************************************!*\
  !*** ./src/svg/icon/phone-flip.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgPhoneFlip),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPhoneFlip = function SvgPhoneFlip(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "m14.773 1.287-.727-.636a2.351 2.351 0 0 0-3.3.053L9.364 2.198a2.332 2.332 0 0 0-.007 3.3l.267.267a7.722 7.722 0 0 1-3.842 3.851l-.272-.267a2.336 2.336 0 0 0-3.275-.02L.687 10.762A2.323 2.323 0 0 0 0 12.415a2.287 2.287 0 0 0 .654 1.62s.62.713.634.726a4.266 4.266 0 0 0 3.041 1.24c5.015 0 11.672-6.652 11.672-11.663a4.26 4.26 0 0 0-1.241-3.039Zm-10.431 12.7a2.3 2.3 0 0 1-1.607-.633s-.614-.706-.634-.72a.334.334 0 0 1-.1-.233.3.3 0 0 1 .073-.207l1.547-1.433a.335.335 0 0 1 .233-.1.325.325 0 0 1 .233.1l.754.746a1 1 0 0 0 1.06.22 9.885 9.885 0 0 0 5.824-5.81 1 1 0 0 0-.215-1.073l-.747-.76a.334.334 0 0 1-.1-.233.358.358 0 0 1 .127-.26l1.381-1.493a.343.343 0 0 1 .474 0c.013.013.72.633.72.633a2.284 2.284 0 0 1 .634 1.606c0 4.266-6 9.664-9.671 9.664Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBpZD0icGhvbmUtZmxpcCIgZD0iTTE0Ljc2MywxLjMsMTQuMDM2LjY2NGEyLjM1MSwyLjM1MSwwLDAsMC0zLjMuMDUzTDkuMzU0LDIuMjExYTIuMzMyLDIuMzMyLDAsMCwwLS4wMDcsMy4zbC4yNjcuMjY3QTcuNzIyLDcuNzIyLDAsMCwxLDUuNzcyLDkuNjI5TDUuNSw5LjM2MmEyLjMzNiwyLjMzNiwwLDAsMC0zLjI3NS0uMDJMLjY3NywxMC43NzVBMi4zMjMsMi4zMjMsMCwwLDAtLjAxLDEyLjQyOGEyLjI4NywyLjI4NywwLDAsMCwuNjU0LDEuNjJzLjYyLjcxMy42MzQuNzI2YTQuMjY2LDQuMjY2LDAsMCwwLDMuMDQxLDEuMjRjNS4wMTUsMCwxMS42NzItNi42NTIsMTEuNjcyLTExLjY2M2E0LjI2LDQuMjYsMCwwLDAtMS4yNDEtMy4wMzlaTTQuMzMyLDE0YTIuMywyLjMsMCwwLDEtMS42MDctLjYzM3MtLjYxNC0uNzA2LS42MzQtLjcyYS4zMzQuMzM0LDAsMCwxLS4xLS4yMzMuMy4zLDAsMCwxLC4wNzMtLjIwN2wxLjU0Ny0xLjQzM2EuMzM1LjMzNSwwLDAsMSwuMjMzLS4xLjMyNS4zMjUsMCwwLDEsLjIzMy4xbC43NTQuNzQ2YTEsMSwwLDAsMCwxLjA2LjIyQTkuODg1LDkuODg1LDAsMCwwLDExLjcxNSw1LjkzLDEsMSwwLDAsMCwxMS41LDQuODU3bC0uNzQ3LS43NmEuMzM0LjMzNCwwLDAsMS0uMS0uMjMzLjM1OC4zNTgsMCwwLDEsLjEyNy0uMjZsMS4zODEtMS40OTNhLjM0My4zNDMsMCwwLDEsLjQ3NCwwYy4wMTMuMDEzLjcyLjYzMy43Mi42MzNhMi4yODQsMi4yODQsMCwwLDEsLjYzNCwxLjYwNmMwLDQuMjY2LTYsOS42NjQtOS42NzEsOS42NjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAxIC0wLjAxMykiIGZpbGw9IiM2ZTZlNmUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/picture.svg":
/*!**********************************!*\
  !*** ./src/svg/icon/picture.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgPicture),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _circle;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPicture = function SvgPicture(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M13 0H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3ZM3 2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-.293.707L7.885 7.885a2.667 2.667 0 0 0-3.771 0L2 10V3a1 1 0 0 1 1-1Z",
    "data-name": "Path 1507"
  })), _circle || (_circle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: 2.5,
    cy: 2.5,
    r: 2.5,
    fill: "#6e6e6e",
    "data-name": "Ellipse 270",
    transform: "translate(7.526 2.895)"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBpZD0icGljdHVyZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggaWQ9IlBhdGhfMTUwNyIgZGF0YS1uYW1lPSJQYXRoIDE1MDciIGQ9Ik0xMywwSDNBMywzLDAsMCwwLDAsM1YxM2EzLDMsMCwwLDAsMywzSDEzYTMsMywwLDAsMCwzLTNWM0EzLDMsMCwwLDAsMTMsMFpNMywySDEzYTEsMSwwLDAsMSwxLDFWMTNhMSwxLDAsMCwxLS4yOTMuNzA3TDcuODg1LDcuODg1YTIuNjY3LDIuNjY3LDAsMCwwLTMuNzcxLDBMMiwxMFYzQTEsMSwwLDAsMSwzLDJaIiBmaWxsPSIjNmU2ZTZlIi8+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8yNzAiIGRhdGEtbmFtZT0iRWxsaXBzZSAyNzAiIGN4PSIyLjUiIGN5PSIyLjUiIHI9IjIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy41MjYgMi44OTUpIiBmaWxsPSIjNmU2ZTZlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/redo.svg":
/*!*******************************!*\
  !*** ./src/svg/icon/redo.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgRedo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRedo = function SvgRedo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 14,
    height: 12.192
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M.875 12.191A.875.875 0 0 1 0 11.316v-3.5a5.549 5.549 0 0 1 5.543-5.543h2.138v-.981A1.292 1.292 0 0 1 9.919.413l3.627 3.906a1.716 1.716 0 0 1 0 2.325l-3.627 3.902a1.292 1.292 0 0 1-2.239-.879v-.98h-3.3a2.626 2.626 0 0 0-2.63 2.629.875.875 0 0 1-.875.875Zm3.5-5.251h4.18a.875.875 0 0 1 .875.875v.688l2.833-3.05-2.832-3.007v.7a.875.875 0 0 1-.875.875H5.543A3.8 3.8 0 0 0 1.75 7.814a4.351 4.351 0 0 1 2.626-.874Zm4.26-5.338Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMi4xOTIiIHZpZXdCb3g9IjAgMCAxNCAxMi4xOTIiPgogIDxwYXRoIGlkPSJyZWRvIiBkPSJNLjg3NSwxNC43NDVBLjg3NS44NzUsMCwwLDEsMCwxMy44N3YtMy41QTUuNTQ5LDUuNTQ5LDAsMCwxLDUuNTQzLDQuODI3SDcuNjgxVjMuODQ2YTEuMjkyLDEuMjkyLDAsMCwxLDIuMjM4LS44NzlsMy42MjcsMy45MDZhMS43MTYsMS43MTYsMCwwLDEsMCwyLjMyNUw5LjkxOSwxMy4xYTEuMjkyLDEuMjkyLDAsMCwxLTIuMjM5LS44Nzl2LS45OGgtMy4zQTIuNjI2LDIuNjI2LDAsMCwwLDEuNzUsMTMuODdhLjg3NS44NzUsMCwwLDEtLjg3NS44NzVabTMuNS01LjI1MWg0LjE4YS44NzUuODc1LDAsMCwxLC44NzUuODc1di42ODhsMi44MzMtMy4wNUw5LjQzMSw1di43YS44NzUuODc1LDAsMCwxLS44NzUuODc1SDUuNTQzQTMuOCwzLjgsMCwwLDAsMS43NSwxMC4zNjhoMEE0LjM1MSw0LjM1MSwwLDAsMSw0LjM3Niw5LjQ5NFpNOC42MzUsNC4xNTZsMCwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMi41NTQpIiBmaWxsPSIjNmU2ZTZlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/screen-record.svg":
/*!****************************************!*\
  !*** ./src/svg/icon/screen-record.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgScreenRecord),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgScreenRecord = function SvgScreenRecord(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M15.417 0H4.583A4.588 4.588 0 0 0 0 4.583v6.667a4.588 4.588 0 0 0 4.583 4.583H8.75V17.5H6.667a1.25 1.25 0 1 0 0 2.5h6.667a1.25 1.25 0 0 0 0-2.5H11.25v-1.667h4.167A4.588 4.588 0 0 0 20 11.25V4.583A4.588 4.588 0 0 0 15.417 0ZM4.583 2.5h10.834A2.083 2.083 0 0 1 17.5 4.583v6.25h-15v-6.25A2.083 2.083 0 0 1 4.583 2.5Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8cGF0aCBpZD0ic2NyZWVuLXJlY29yZCIgZD0iTTE1LjQxNywwSDQuNTgzQTQuNTg4LDQuNTg4LDAsMCwwLDAsNC41ODNWMTEuMjVhNC41ODgsNC41ODgsMCwwLDAsNC41ODMsNC41ODNIOC43NVYxNy41SDYuNjY3YTEuMjUsMS4yNSwwLDEsMCwwLDIuNWg2LjY2N2ExLjI1LDEuMjUsMCwwLDAsMC0yLjVIMTEuMjVWMTUuODMzaDQuMTY3QTQuNTg4LDQuNTg4LDAsMCwwLDIwLDExLjI1VjQuNTgzQTQuNTg4LDQuNTg4LDAsMCwwLDE1LjQxNywwWk00LjU4MywyLjVIMTUuNDE3QTIuMDgzLDIuMDgzLDAsMCwxLDE3LjUsNC41ODN2Ni4yNUgyLjVWNC41ODNBMi4wODMsMi4wODMsMCwwLDEsNC41ODMsMi41WiIgZmlsbD0iIzZlNmU2ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/scrubber.svg":
/*!***********************************!*\
  !*** ./src/svg/icon/scrubber.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgScrubber),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgScrubber = function SvgScrubber(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 14a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Zm2-6a2 2 0 1 1-2-2 2 2 0 0 1 2 2Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBpZD0ic2NydWJiZXIiIGQ9Ik04LDBhOCw4LDAsMSwwLDgsOEE4LjAwOSw4LjAwOSwwLDAsMCw4LDBaTTgsMTRhNiw2LDAsMSwxLDYtNkE2LjAwNyw2LjAwNywwLDAsMSw4LDE0Wm0yLTZBMiwyLDAsMSwxLDgsNiwyLDIsMCwwLDEsMTAsOFoiIGZpbGw9IiM2ZTZlNmUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/search.svg":
/*!*********************************!*\
  !*** ./src/svg/icon/search.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgSearch),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 14,
    height: 14
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "m12.805 13.795-2.572-2.572a6.3 6.3 0 0 1-8.388-9.378A6.3 6.3 0 0 1 12.6 6.3a6.252 6.252 0 0 1-1.377 3.933l2.577 2.572a.7.7 0 1 1-.99.99ZM1.4 6.3a4.9 4.9 0 0 0 8.311 3.514.71.71 0 0 1 .049-.054.735.735 0 0 1 .055-.049A4.9 4.9 0 1 0 1.4 6.3Z",
    "data-name": "Union 4"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4KICA8cGF0aCBpZD0iVW5pb25fNCIgZGF0YS1uYW1lPSJVbmlvbiA0IiBkPSJNMTIuODA1LDEzLjc5NWwtMi41NzItMi41NzJBNi4zLDYuMywwLDAsMSwxLjg0NSwxLjg0NSw2LjMsNi4zLDAsMCwxLDEyLjYsNi4zYTYuMjUyLDYuMjUyLDAsMCwxLTEuMzc3LDMuOTMzTDEzLjgsMTIuODA1YS43LjcsMCwxLDEtLjk5Ljk5Wk0xLjQsNi4zQTQuOSw0LjksMCwwLDAsOS43MTEsOS44MTQuNzEuNzEsMCwwLDEsOS43Niw5Ljc2YS43MzUuNzM1LDAsMCwxLC4wNTUtLjA0OUE0LjksNC45LDAsMSwwLDEuNCw2LjNaIiBmaWxsPSIjNmU2ZTZlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/sliders.svg":
/*!**********************************!*\
  !*** ./src/svg/icon/sliders.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgSliders),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSliders = function SvgSliders(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 15.167
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "#6e6e6e",
    "data-name": "settings-sliders (1)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7.133 1.334a2.321 2.321 0 0 0-4.2 0H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1.93a2.321 2.321 0 0 0 4.2 0H15a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z",
    "data-name": "Path 1491"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.97 5.25a2.328 2.328 0 0 0-2.1 1.333H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h7.867a2.321 2.321 0 0 0 4.2 0H15a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-1.93a2.328 2.328 0 0 0-2.1-1.333Z",
    "data-name": "Path 1492"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5.03 10.5a2.328 2.328 0 0 0-2.1 1.333H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1.93a2.321 2.321 0 0 0 4.2 0H15a1 1 0 0 0 1-1 1 1 0 0 0-1-1H7.133A2.328 2.328 0 0 0 5.03 10.5Z",
    "data-name": "Path 1493"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNS4xNjciIHZpZXdCb3g9IjAgMCAxNiAxNS4xNjciPgogIDxnIGlkPSJzZXR0aW5ncy1zbGlkZXJzXzFfIiBkYXRhLW5hbWU9InNldHRpbmdzLXNsaWRlcnMgKDEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMy4zMjYpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzE0OTEiIGRhdGEtbmFtZT0iUGF0aCAxNDkxIiBkPSJNNy4xMzMsMTQuNjZhMi4zMjEsMi4zMjEsMCwwLDAtNC4yLDBIMWExLDEsMCwwLDAtMSwxSDBhMSwxLDAsMCwwLDEsMUgyLjkzYTIuMzIxLDIuMzIxLDAsMCwwLDQuMiwwSDE1YTEsMSwwLDAsMCwxLTFoMGExLDEsMCwwLDAtMS0xWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZmlsbD0iIzZlNmU2ZSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMTQ5MiIgZGF0YS1uYW1lPSJQYXRoIDE0OTIiIGQ9Ik0xMC45NywxODEuMzMzYTIuMzI4LDIuMzI4LDAsMCwwLTIuMSwxLjMzM0gxYTEsMSwwLDAsMC0xLDFIMGExLDEsMCwwLDAsMSwxSDguODY3YTIuMzIxLDIuMzIxLDAsMCwwLDQuMiwwSDE1YTEsMSwwLDAsMCwxLTFoMGExLDEsMCwwLDAtMS0xSDEzLjA3QTIuMzI4LDIuMzI4LDAsMCwwLDEwLjk3LDE4MS4zMzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xNjIuNzU3KSIgZmlsbD0iIzZlNmU2ZSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMTQ5MyIgZGF0YS1uYW1lPSJQYXRoIDE0OTMiIGQ9Ik01LjAzLDM0OS4zMzNhMi4zMjgsMi4zMjgsMCwwLDAtMi4xLDEuMzMzSDFhMSwxLDAsMCwwLTEsMUgwYTEsMSwwLDAsMCwxLDFIMi45M2EyLjMyMSwyLjMyMSwwLDAsMCw0LjIsMEgxNWExLDEsMCwwLDAsMS0xaDBhMSwxLDAsMCwwLTEtMUg3LjEzM0EyLjMyOCwyLjMyOCwwLDAsMCw1LjAzLDM0OS4zMzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zMjUuNTA3KSIgZmlsbD0iIzZlNmU2ZSIvPgogIDwvZz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/star-alt.svg":
/*!***********************************!*\
  !*** ./src/svg/icon/star-alt.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgStarAlt),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStarAlt = function SvgStarAlt(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 26.041,
    height: 25
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    stroke: "#a2a2a2",
    strokeWidth: 2,
    d: "M11.733 1.801 8.804 7.739l-6.554.956a1.436 1.436 0 0 0-.794 2.449l4.742 4.621-1.119 6.526a1.435 1.435 0 0 0 2.078 1.51l5.863-3.082 5.859 3.082a1.436 1.436 0 0 0 2.081-1.512l-1.122-6.527 4.742-4.621a1.436 1.436 0 0 0-.794-2.449l-6.554-.956-2.924-5.935a1.437 1.437 0 0 0-2.575 0Z",
    "data-name": "Icon awesome-star"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNi4wNDEiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNi4wNDEgMjUiPgogIDxwYXRoIGlkPSJJY29uX2F3ZXNvbWUtc3RhciIgZGF0YS1uYW1lPSJJY29uIGF3ZXNvbWUtc3RhciIgZD0iTTEyLjE1NC44LDkuMjI1LDYuNzM4bC02LjU1NC45NTZhMS40MzYsMS40MzYsMCwwLDAtLjc5NCwyLjQ0OWw0Ljc0Miw0LjYyMUw1LjUsMjEuMjlBMS40MzUsMS40MzUsMCwwLDAsNy41NzgsMjIuOGw1Ljg2My0zLjA4MkwxOS4zLDIyLjhhMS40MzYsMS40MzYsMCwwLDAsMi4wODEtMS41MTJsLTEuMTIyLTYuNTI3LDQuNzQyLTQuNjIxYTEuNDM2LDEuNDM2LDAsMCwwLS43OTQtMi40NDlsLTYuNTU0LS45NTZMMTQuNzI5LjhhMS40MzcsMS40MzcsMCwwLDAtMi41NzUsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQyMSAxLjAwMSkiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2EyYTJhMiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/star.svg":
/*!*******************************!*\
  !*** ./src/svg/icon/star.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgStar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStar = function SvgStar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 15.314
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M7.142.533 5.189 4.492.82 5.129a.957.957 0 0 0-.529 1.633l3.161 3.08-.748 4.351a.956.956 0 0 0 1.388 1.008l3.909-2.055 3.908 2.055a.957.957 0 0 0 1.388-1.008l-.748-4.35 3.161-3.08a.957.957 0 0 0-.529-1.633l-4.369-.637L8.859.533a.958.958 0 0 0-1.717 0Z",
    "data-name": "Icon awesome-star"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNS4zMTQiIHZpZXdCb3g9IjAgMCAxNiAxNS4zMTQiPgogIDxwYXRoIGlkPSJJY29uX2F3ZXNvbWUtc3RhciIgZGF0YS1uYW1lPSJJY29uIGF3ZXNvbWUtc3RhciIgZD0iTTguNTgzLjUzMiw2LjYzLDQuNDkxbC00LjM2OS42MzdhLjk1Ny45NTcsMCwwLDAtLjUyOSwxLjYzM2wzLjE2MSwzLjA4LS43NDgsNC4zNTFBLjk1Ni45NTYsMCwwLDAsNS41MzMsMTUuMmwzLjkwOS0yLjA1NUwxMy4zNSwxNS4yYS45NTcuOTU3LDAsMCwwLDEuMzg4LTEuMDA4TDEzLjk5LDkuODQybDMuMTYxLTMuMDhhLjk1Ny45NTcsMCwwLDAtLjUyOS0xLjYzM2wtNC4zNjktLjYzN0wxMC4zLjUzMmEuOTU4Ljk1OCwwLDAsMC0xLjcxNywwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNDQxIDAuMDAxKSIgZmlsbD0iIzZlNmU2ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/text.svg":
/*!*******************************!*\
  !*** ./src/svg/icon/text.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgText),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgText = function SvgText(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm-2 10a1 1 0 0 1-1-1 1 1 0 0 0-1-1h-2v8h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V8H9a1 1 0 0 0-1 1 1 1 0 0 1-2 0 3 3 0 0 1 3-3h6a3 3 0 0 1 3 3 1 1 0 0 1-1 1Z",
    "data-name": "text (1)"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBpZD0idGV4dF8xXyIgZGF0YS1uYW1lPSJ0ZXh0ICgxKSIgZD0iTTE5LDBINUE1LjAwNiw1LjAwNiwwLDAsMCwwLDVWMTlhNS4wMDYsNS4wMDYsMCwwLDAsNSw1SDE5YTUuMDA2LDUuMDA2LDAsMCwwLDUtNVY1QTUuMDA2LDUuMDA2LDAsMCwwLDE5LDBaTTE3LDEwYTEsMSwwLDAsMS0xLTEsMSwxLDAsMCwwLTEtMUgxM3Y4aDFhMSwxLDAsMCwxLDAsMkgxMGExLDEsMCwwLDEsMC0yaDFWOEg5QTEsMSwwLDAsMCw4LDksMSwxLDAsMCwxLDYsOSwzLDMsMCwwLDEsOSw2aDZhMywzLDAsMCwxLDMsM0ExLDEsMCwwLDEsMTcsMTBaIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/thumbs-up-solid.svg":
/*!******************************************!*\
  !*** ./src/svg/icon/thumbs-up-solid.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgThumbsUpSolid),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgThumbsUpSolid = function SvgThumbsUpSolid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24.004,
    height: 20.574
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#a2a2a2",
    d: "M22.773 7.295A4.994 4.994 0 0 0 19 5.574h-3.989l.336-2.041a3.037 3.037 0 0 0-5.721-1.837L7.712 5.574H5a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5h13.3a5.024 5.024 0 0 0 4.951-4.3l.7-5a5 5 0 0 0-1.183-3.979ZM2 15.574v-5a3 3 0 0 1 3-3h2v11H5a3 3 0 0 1-3-3Zm19.971-4.581-.706 5a3.012 3.012 0 0 1-2.965 2.581H9V7.308a1 1 0 0 0 .23-.292l2.189-4.435a1.07 1.07 0 0 1 1.722-.207 1.024 1.024 0 0 1 .233.84l-.528 3.2a1 1 0 0 0 .987 1.16H19a3 3 0 0 1 2.971 3.419Z",
    "data-name": "social-network (1)"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4wMDQiIGhlaWdodD0iMjAuNTc0IiB2aWV3Qm94PSIwIDAgMjQuMDA0IDIwLjU3NCI+CiAgPHBhdGggaWQ9InNvY2lhbC1uZXR3b3JrXzFfIiBkYXRhLW5hbWU9InNvY2lhbC1uZXR3b3JrICgxKSIgZD0iTTIyLjc3Myw3LjcyMUE0Ljk5NCw0Ljk5NCwwLDAsMCwxOSw2SDE1LjAxMWwuMzM2LTIuMDQxQTMuMDM3LDMuMDM3LDAsMCwwLDkuNjI2LDIuMTIyTDcuNzEyLDZINWE1LjAwNiw1LjAwNiwwLDAsMC01LDV2NWE1LjAwNiw1LjAwNiwwLDAsMCw1LDVIMTguM2E1LjAyNCw1LjAyNCwwLDAsMCw0Ljk1MS00LjNsLjctNWE1LDUsMCwwLDAtMS4xODMtMy45NzlaTTIsMTZWMTFBMywzLDAsMCwxLDUsOEg3VjE5SDVBMywzLDAsMCwxLDIsMTZabTE5Ljk3MS00LjU4MS0uNzA2LDVBMy4wMTIsMy4wMTIsMCwwLDEsMTguMywxOUg5VjcuNzM0YTEsMSwwLDAsMCwuMjMtLjI5MmwyLjE4OS00LjQzNUExLjA3LDEuMDcsMCwwLDEsMTMuMTQxLDIuOGExLjAyNCwxLjAyNCwwLDAsMSwuMjMzLjg0bC0uNTI4LDMuMkExLDEsMCwwLDAsMTMuODMzLDhIMTlhMywzLDAsMCwxLDIuOTcxLDMuNDE5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMC40MjYpIiBmaWxsPSIjYTJhMmEyIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/thumbs-up.svg":
/*!************************************!*\
  !*** ./src/svg/icon/thumbs-up.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgThumbsUp),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgThumbsUp = function SvgThumbsUp(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24.005,
    height: 20.574
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "#a2a2a2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M22.773 7.295A4.994 4.994 0 0 0 19 5.574h-3.989l.336-2.041a3.037 3.037 0 0 0-5.721-1.837L8 4.991v15.583h10.3a5.024 5.024 0 0 0 4.951-4.3l.7-5a4.994 4.994 0 0 0-1.183-3.979Z",
    "data-name": "Path 1535"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M0 10.574v5a5.006 5.006 0 0 0 5 5h1v-15H5a5.006 5.006 0 0 0-5 5Z",
    "data-name": "Path 1536"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4wMDUiIGhlaWdodD0iMjAuNTc0IiB2aWV3Qm94PSIwIDAgMjQuMDA1IDIwLjU3NCI+CiAgPGcgaWQ9InRodW1icy11cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMC40MjYpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzE1MzUiIGRhdGEtbmFtZT0iUGF0aCAxNTM1IiBkPSJNMjIuNzczLDcuNzIxQTQuOTk0LDQuOTk0LDAsMCwwLDE5LDZIMTUuMDExbC4zMzYtMi4wNDFBMy4wMzcsMy4wMzcsMCwwLDAsOS42MjYsMi4xMjJMOCw1LjQxN1YyMUgxOC4zYTUuMDI0LDUuMDI0LDAsMCwwLDQuOTUxLTQuM2wuNy01YTQuOTk0LDQuOTk0LDAsMCwwLTEuMTgzLTMuOTc5WiIgZmlsbD0iI2EyYTJhMiIvPgogICAgPHBhdGggaWQ9IlBhdGhfMTUzNiIgZGF0YS1uYW1lPSJQYXRoIDE1MzYiIGQ9Ik0wLDExdjVhNS4wMDYsNS4wMDYsMCwwLDAsNSw1SDZWNkg1YTUuMDA2LDUuMDA2LDAsMCwwLTUsNVoiIGZpbGw9IiNhMmEyYTIiLz4KICA8L2c+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/toggle.svg":
/*!*********************************!*\
  !*** ./src/svg/icon/toggle.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgToggle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgToggle = function SvgToggle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 10.667
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M10.667 0H5.333a5.333 5.333 0 1 0 0 10.667h5.333A5.334 5.334 0 0 0 10.667 0Zm0 8.667H5.333a3.334 3.334 0 1 1 0-6.667h5.333a3.334 3.334 0 0 1 0 6.667Zm2-3.333a2 2 0 1 1-2-2 2 2 0 0 1 2 1.999Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMC42NjciIHZpZXdCb3g9IjAgMCAxNiAxMC42NjciPgogIDxwYXRoIGlkPSJ0b2dnbGUtb24iIGQ9Ik0xMC42NjcsNEg1LjMzM2E1LjMzMyw1LjMzMywwLDEsMCwwLDEwLjY2N2g1LjMzM0E1LjMzMyw1LjMzMywwLDAsMCwxMC42NjcsNFptMCw4LjY2N0g1LjMzM0EzLjMzMywzLjMzMywwLDEsMSw1LjMzMyw2aDUuMzMzYTMuMzMzLDMuMzMzLDAsMCwxLDAsNi42NjdabTItMy4zMzNhMiwyLDAsMSwxLTItMkEyLDIsMCwwLDEsMTIuNjY3LDkuMzMzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNCkiIGZpbGw9IiM2ZTZlNmUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/trophy-solid.svg":
/*!***************************************!*\
  !*** ./src/svg/icon/trophy-solid.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgTrophySolid),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTrophySolid = function SvgTrophySolid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#a2a2a2",
    d: "M15.091 16C21.661 15.964 24 12.484 24 9.5a3.5 3.5 0 0 0-2.764-3.419c.136-.387.254-.742.333-1.011a3.887 3.887 0 0 0-.626-3.458A3.979 3.979 0 0 0 17.729 0H6.271a3.979 3.979 0 0 0-3.214 1.612 3.887 3.887 0 0 0-.626 3.458c.079.269.2.624.333 1.011A3.5 3.5 0 0 0 0 9.5c0 2.984 2.339 6.464 8.909 6.5a5.06 5.06 0 0 1 .091.921V20a1.883 1.883 0 0 1-2 2H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-.992A1.885 1.885 0 0 1 15 20v-3.08a5.058 5.058 0 0 1 .091-.92ZM20.5 8A1.5 1.5 0 0 1 22 9.5c0 2.034-1.609 4.2-6.036 4.47a4.847 4.847 0 0 1 .762-.821 15.132 15.132 0 0 0 3.727-5.159c.016.001.03.01.047.01ZM2 9.5A1.5 1.5 0 0 1 3.5 8c.017 0 .031-.009.047-.01a15.132 15.132 0 0 0 3.727 5.159 4.847 4.847 0 0 1 .762.821C3.609 13.7 2 11.534 2 9.5ZM10.513 22A4.08 4.08 0 0 0 11 20v-3.079a6.93 6.93 0 0 0-2.431-5.3A15.338 15.338 0 0 1 4.349 4.5a1.9 1.9 0 0 1 .31-1.694A1.994 1.994 0 0 1 6.271 2h11.458a1.994 1.994 0 0 1 1.612.81 1.9 1.9 0 0 1 .31 1.694 15.338 15.338 0 0 1-4.22 7.122A6.928 6.928 0 0 0 13 16.92V20a4.08 4.08 0 0 0 .487 2Z",
    "data-name": "trophy (1)"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBpZD0idHJvcGh5XzFfIiBkYXRhLW5hbWU9InRyb3BoeSAoMSkiIGQ9Ik0xNS4wOTEsMTZDMjEuNjYxLDE1Ljk2NCwyNCwxMi40ODQsMjQsOS41YTMuNSwzLjUsMCwwLDAtMi43NjQtMy40MTljLjEzNi0uMzg3LjI1NC0uNzQyLjMzMy0xLjAxMWEzLjg4NywzLjg4NywwLDAsMC0uNjI2LTMuNDU4QTMuOTc5LDMuOTc5LDAsMCwwLDE3LjcyOSwwSDYuMjcxQTMuOTc5LDMuOTc5LDAsMCwwLDMuMDU3LDEuNjEyLDMuODg3LDMuODg3LDAsMCwwLDIuNDMxLDUuMDdjLjA3OS4yNjkuMi42MjQuMzMzLDEuMDExQTMuNSwzLjUsMCwwLDAsMCw5LjVjMCwyLjk4NCwyLjMzOSw2LjQ2NCw4LjkwOSw2LjVBNS4wNiw1LjA2LDAsMCwxLDksMTYuOTIxVjIwYTEuODgzLDEuODgzLDAsMCwxLTIsMkg2YTEsMSwwLDAsMCwwLDJIMThhMSwxLDAsMCwwLDAtMmgtLjk5MkExLjg4NSwxLjg4NSwwLDAsMSwxNSwyMFYxNi45MmE1LjA1OCw1LjA1OCwwLDAsMSwuMDkxLS45MlpNMjAuNSw4QTEuNSwxLjUsMCwwLDEsMjIsOS41YzAsMi4wMzQtMS42MDksNC4yLTYuMDM2LDQuNDdhNC44NDcsNC44NDcsMCwwLDEsLjc2Mi0uODIxQTE1LjEzMiwxNS4xMzIsMCwwLDAsMjAuNDUzLDcuOTlDMjAuNDY5LDcuOTkxLDIwLjQ4Myw4LDIwLjUsOFpNMiw5LjVBMS41LDEuNSwwLDAsMSwzLjUsOGMuMDE3LDAsLjAzMS0uMDA5LjA0Ny0uMDFhMTUuMTMyLDE1LjEzMiwwLDAsMCwzLjcyNyw1LjE1OSw0Ljg0Nyw0Ljg0NywwLDAsMSwuNzYyLjgyMUMzLjYwOSwxMy43LDIsMTEuNTM0LDIsOS41Wk0xMC41MTMsMjJBNC4wOCw0LjA4LDAsMCwwLDExLDIwVjE2LjkyMWE2LjkzLDYuOTMsMCwwLDAtMi40MzEtNS4zQTE1LjMzOCwxNS4zMzgsMCwwLDEsNC4zNDksNC41YTEuOSwxLjksMCwwLDEsLjMxLTEuNjk0QTEuOTk0LDEuOTk0LDAsMCwxLDYuMjcxLDJIMTcuNzI5YTEuOTk0LDEuOTk0LDAsMCwxLDEuNjEyLjgxLDEuOSwxLjksMCwwLDEsLjMxLDEuNjk0LDE1LjMzOCwxNS4zMzgsMCwwLDEtNC4yMiw3LjEyMkE2LjkyOCw2LjkyOCwwLDAsMCwxMywxNi45MlYyMGE0LjA4LDQuMDgsMCwwLDAsLjQ4NywyWiIgZmlsbD0iI2EyYTJhMiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/trophy.svg":
/*!*********************************!*\
  !*** ./src/svg/icon/trophy.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgTrophy),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTrophy = function SvgTrophy(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#a2a2a2",
    d: "M14.09 16H15c6.643 0 9-3.5 9-6.5a3.5 3.5 0 0 0-2.84-3.433 7.564 7.564 0 0 0 .409-1 3.887 3.887 0 0 0-.626-3.458A3.979 3.979 0 0 0 17.729 0H6.271a3.979 3.979 0 0 0-3.214 1.612 3.887 3.887 0 0 0-.626 3.458 7.564 7.564 0 0 0 .409 1A3.5 3.5 0 0 0 0 9.5c0 3 2.357 6.5 9 6.5h.91a5.027 5.027 0 0 1 .09.921V20a1.883 1.883 0 0 1-2 2H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-1.994A1.885 1.885 0 0 1 14 20v-3.08a5.025 5.025 0 0 1 .09-.92Zm1.636-2.851a23.486 23.486 0 0 0 4.4-5.225A1 1 0 0 0 20.5 8 1.5 1.5 0 0 1 22 9.5c0 2.176-1.839 4.5-7 4.5h-.056a4.805 4.805 0 0 1 .782-.851ZM9 14c-5.161 0-7-2.324-7-4.5A1.5 1.5 0 0 1 3.5 8a1 1 0 0 0 .375-.076 23.486 23.486 0 0 0 4.4 5.225 4.805 4.805 0 0 1 .781.851Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBpZD0idHJvcGh5IiBkPSJNMTQuMDksMTZIMTVjNi42NDMsMCw5LTMuNSw5LTYuNWEzLjUsMy41LDAsMCwwLTIuODQtMy40MzMsNy41NjQsNy41NjQsMCwwLDAsLjQwOS0xLDMuODg3LDMuODg3LDAsMCwwLS42MjYtMy40NThBMy45NzksMy45NzksMCwwLDAsMTcuNzI5LDBINi4yNzFBMy45NzksMy45NzksMCwwLDAsMy4wNTcsMS42MTIsMy44ODcsMy44ODcsMCwwLDAsMi40MzEsNS4wN2E3LjU2NCw3LjU2NCwwLDAsMCwuNDA5LDFBMy41LDMuNSwwLDAsMCwwLDkuNWMwLDMsMi4zNTcsNi41LDksNi41aC45MWE1LjAyNyw1LjAyNywwLDAsMSwuMDkuOTIxVjIwYTEuODgzLDEuODgzLDAsMCwxLTIsMkg2YTEsMSwwLDAsMCwwLDJIMThhMSwxLDAsMCwwLDAtMkgxNi4wMDZBMS44ODUsMS44ODUsMCwwLDEsMTQsMjBWMTYuOTJhNS4wMjUsNS4wMjUsMCwwLDEsLjA5LS45MlptMS42MzYtMi44NTFhMjMuNDg2LDIzLjQ4NiwwLDAsMCw0LjQtNS4yMjVBMSwxLDAsMCwwLDIwLjUsOCwxLjUsMS41LDAsMCwxLDIyLDkuNWMwLDIuMTc2LTEuODM5LDQuNS03LDQuNWgtLjA1NkE0LjgwNSw0LjgwNSwwLDAsMSwxNS43MjYsMTMuMTQ5Wk05LDE0Yy01LjE2MSwwLTctMi4zMjQtNy00LjVBMS41LDEuNSwwLDAsMSwzLjUsOGExLDEsMCwwLDAsLjM3NS0uMDc2LDIzLjQ4NiwyMy40ODYsMCwwLDAsNC40LDUuMjI1QTQuODA1LDQuODA1LDAsMCwxLDkuMDU2LDE0WiIgZmlsbD0iI2EyYTJhMiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/twitter.svg":
/*!**********************************!*\
  !*** ./src/svg/icon/twitter.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgTwitter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTwitter = function SvgTwitter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 12.995
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M14.355 3.239c.01.142.01.284.01.426a9.266 9.266 0 0 1-9.33 9.33A9.267 9.267 0 0 1 0 11.518a6.783 6.783 0 0 0 .792.041 6.567 6.567 0 0 0 4.071-1.4A3.285 3.285 0 0 1 1.8 7.888a4.135 4.135 0 0 0 .619.051 3.468 3.468 0 0 0 .863-.112A3.28 3.28 0 0 1 .65 4.609v-.041a3.3 3.3 0 0 0 1.482.416A3.284 3.284 0 0 1 1.117.598a9.321 9.321 0 0 0 6.761 3.431 3.7 3.7 0 0 1-.081-.751 3.282 3.282 0 0 1 5.675-2.244 6.456 6.456 0 0 0 2.081-.792 3.27 3.27 0 0 1-1.442 1.807A6.574 6.574 0 0 0 16 1.543a7.049 7.049 0 0 1-1.645 1.696Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMi45OTUiIHZpZXdCb3g9IjAgMCAxNiAxMi45OTUiPgogIDxwYXRoIGlkPSJ0d2l0dGVyIiBkPSJNMTQuMzU1LDUxLjMyMWMuMDEuMTQyLjAxLjI4NC4wMS40MjZhOS4yNjYsOS4yNjYsMCwwLDEtOS4zMyw5LjMzQTkuMjY3LDkuMjY3LDAsMCwxLDAsNTkuNmE2Ljc4Myw2Ljc4MywwLDAsMCwuNzkyLjA0MSw2LjU2Nyw2LjU2NywwLDAsMCw0LjA3MS0xLjRBMy4yODUsMy4yODUsMCwwLDEsMS44LDU1Ljk3YTQuMTM1LDQuMTM1LDAsMCwwLC42MTkuMDUxLDMuNDY4LDMuNDY4LDAsMCwwLC44NjMtLjExMkEzLjI4LDMuMjgsMCwwLDEsLjY1LDUyLjY5MXYtLjA0MWEzLjMsMy4zLDAsMCwwLDEuNDgyLjQxNiwzLjI4NCwzLjI4NCwwLDAsMS0xLjAxNS00LjM4Niw5LjMyMSw5LjMyMSwwLDAsMCw2Ljc2MSwzLjQzMSwzLjcsMy43LDAsMCwxLS4wODEtLjc1MSwzLjI4MiwzLjI4MiwwLDAsMSw1LjY3NS0yLjI0NCw2LjQ1Niw2LjQ1NiwwLDAsMCwyLjA4MS0uNzkyLDMuMjcsMy4yNywwLDAsMS0xLjQ0MiwxLjgwN0E2LjU3NCw2LjU3NCwwLDAsMCwxNiw0OS42MjUsNy4wNDksNy4wNDksMCwwLDEsMTQuMzU1LDUxLjMyMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4LjA4MikiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/upload.svg":
/*!*********************************!*\
  !*** ./src/svg/icon/upload.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgUpload),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUpload = function SvgUpload(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 14.667
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6e6e6e",
    d: "M16 5v6a3.671 3.671 0 0 1-3.667 3.667h-.667a1 1 0 0 1 0-2h.667A1.669 1.669 0 0 0 14 11V5a1.663 1.663 0 0 0-.034-.333H2V11a1.669 1.669 0 0 0 1.667 1.667h.667a1 1 0 0 1 0 2h-.667A3.671 3.671 0 0 1 0 11V3.667A3.671 3.671 0 0 1 3.667 0h1.685A2.349 2.349 0 0 1 6.4.246l2.1 1.051a.329.329 0 0 0 .149.036h3.685A3.671 3.671 0 0 1 16 5Zm-5.419 3.861L8.472 6.753a.666.666 0 0 0-.943 0L5.421 8.861a.667.667 0 0 0 .471 1.138H7v3.667a1 1 0 0 0 2 0V9.999h1.11a.667.667 0 0 0 .471-1.138Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNC42NjciIHZpZXdCb3g9IjAgMCAxNiAxNC42NjciPgogIDxwYXRoIGlkPSJmb2xkZXItdXBsb2FkIiBkPSJNMTYsNS42NTR2NmEzLjY3MSwzLjY3MSwwLDAsMS0zLjY2NywzLjY2N2gtLjY2N2ExLDEsMCwwLDEsMC0yaC42NjdBMS42NjksMS42NjksMCwwLDAsMTQsMTEuNjU0di02YTEuNjYzLDEuNjYzLDAsMCwwLS4wMzQtLjMzM0gydjYuMzMzYTEuNjY5LDEuNjY5LDAsMCwwLDEuNjY3LDEuNjY3aC42NjdhMSwxLDAsMCwxLDAsMkgzLjY2N0EzLjY3MSwzLjY3MSwwLDAsMSwwLDExLjY1NFY0LjMyMUEzLjY3MSwzLjY3MSwwLDAsMSwzLjY2Ny42NTRINS4zNTJBMi4zNDksMi4zNDksMCwwLDEsNi40LjlMOC41LDEuOTUxYS4zMjkuMzI5LDAsMCwwLC4xNDkuMDM2aDMuNjg1QTMuNjcxLDMuNjcxLDAsMCwxLDE2LDUuNjU0Wk0xMC41ODEsOS41MTUsOC40NzIsNy40MDdhLjY2Ni42NjYsMCwwLDAtLjk0MywwTDUuNDIxLDkuNTE1YS42NjcuNjY3LDAsMCwwLC40NzEsMS4xMzhIN3YzLjY2N2ExLDEsMCwwLDAsMiwwVjEwLjY1M0gxMC4xMWEuNjY3LjY2NywwLDAsMCwuNDcxLTEuMTM4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMC42NTQpIiBmaWxsPSIjNmU2ZTZlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/user-alt.svg":
/*!***********************************!*\
  !*** ./src/svg/icon/user-alt.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgUserAlt),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUserAlt = function SvgUserAlt(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 14,
    height: 14,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#35353D",
    fillRule: "evenodd",
    d: "M7 1.667a2.333 2.333 0 1 0 0 4.666 2.333 2.333 0 0 0 0-4.666ZM3.333 4a3.667 3.667 0 1 1 7.334 0 3.667 3.667 0 0 1-7.334 0ZM7 9.667c-1.893 0-3.58.912-4.657 2.339-.066.087-.117.154-.159.213a1.715 1.715 0 0 0-.069.102c.1.011.24.012.503.012h8.764c.262 0 .404 0 .503-.012a1.731 1.731 0 0 0-.07-.102c-.041-.059-.092-.126-.157-.213C10.58 10.579 8.893 9.666 7 9.666Zm-5.721 1.535C2.594 9.462 4.666 8.333 7 8.333s4.406 1.128 5.721 2.87l.018.023c.113.15.234.31.321.464.105.188.183.404.178.668-.004.211-.068.41-.146.566a1.349 1.349 0 0 1-.364.458 1.32 1.32 0 0 1-.68.262c-.188.023-.411.023-.636.023H2.588c-.225 0-.448 0-.637-.023a1.32 1.32 0 0 1-.679-.262 1.349 1.349 0 0 1-.364-.458 1.348 1.348 0 0 1-.146-.566c-.005-.264.073-.48.178-.668a4.307 4.307 0 0 1 .339-.488Z",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjAwMDAyIDEuNjY2NjhDNS43MTEzNiAxLjY2NjY4IDQuNjY2NjkgMi43MTEzNSA0LjY2NjY5IDQuMDAwMDFDNC42NjY2OSA1LjI4ODY3IDUuNzExMzYgNi4zMzMzNCA3LjAwMDAyIDYuMzMzMzRDOC4yODg2OSA2LjMzMzM0IDkuMzMzMzYgNS4yODg2NyA5LjMzMzM2IDQuMDAwMDFDOS4zMzMzNiAyLjcxMTM1IDguMjg4NjkgMS42NjY2OCA3LjAwMDAyIDEuNjY2NjhaTTMuMzMzMzYgNC4wMDAwMUMzLjMzMzM2IDEuOTc0OTcgNC45NzQ5OCAwLjMzMzM0NCA3LjAwMDAyIDAuMzMzMzQ0QzkuMDI1MDcgMC4zMzMzNDQgMTAuNjY2NyAxLjk3NDk3IDEwLjY2NjcgNC4wMDAwMUMxMC42NjY3IDYuMDI1MDUgOS4wMjUwNyA3LjY2NjY4IDcuMDAwMDIgNy42NjY2OEM0Ljk3NDk4IDcuNjY2NjggMy4zMzMzNiA2LjAyNTA1IDMuMzMzMzYgNC4wMDAwMVpNNy4wMDAwMiA5LjY2NjY4QzUuMTA3MzQgOS42NjY2OCAzLjQyMDM1IDEwLjU3OTUgMi4zNDI1OSAxMi4wMDU5QzIuMjc2NjUgMTIuMDkzMiAyLjIyNjIgMTIuMTYgMi4xODQyMiAxMi4yMTg4QzIuMTUyMzYgMTIuMjYzNCAyLjEzMDYxIDEyLjI5NjEgMi4xMTU0NyAxMi4zMjFDMi4yMTQ1NSAxMi4zMzIzIDIuMzU1NzQgMTIuMzMzMyAyLjYxODE4IDEyLjMzMzNIMTEuMzgxOUMxMS42NDQzIDEyLjMzMzMgMTEuNzg1NSAxMi4zMzIzIDExLjg4NDYgMTIuMzIxQzExLjg2OTQgMTIuMjk2MSAxMS44NDc3IDEyLjI2MzQgMTEuODE1OCAxMi4yMTg4QzExLjc3MzkgMTIuMTYgMTEuNzIzNCAxMi4wOTMyIDExLjY1NzUgMTIuMDA1OUMxMC41Nzk3IDEwLjU3OTUgOC44OTI3MSA5LjY2NjY4IDcuMDAwMDIgOS42NjY2OFpNMS4yNzg3OSAxMS4yMDIxQzIuNTk0MSA5LjQ2MTM0IDQuNjY1OTQgOC4zMzMzNCA3LjAwMDAyIDguMzMzMzRDOS4zMzQxIDguMzMzMzQgMTEuNDA2IDkuNDYxMzQgMTIuNzIxMyAxMS4yMDIxQzEyLjcyNzIgMTEuMjEgMTIuNzMzMiAxMS4yMTc5IDEyLjczOTIgMTEuMjI1OEMxMi44NTIzIDExLjM3NTMgMTIuOTczNSAxMS41MzU3IDEzLjA2MDIgMTEuNjkwNEMxMy4xNjUxIDExLjg3NzYgMTMuMjQyOCAxMi4wOTQzIDEzLjIzOCAxMi4zNTc3QzEzLjIzNDEgMTIuNTY5NSAxMy4xNyAxMi43Njc3IDEzLjA5MiAxMi45MjQzQzEzLjAxNDEgMTMuMDgwOCAxMi44OTQ2IDEzLjI1MTUgMTIuNzI4IDEzLjM4MjNDMTIuNTA1OCAxMy41NTY2IDEyLjI2MzkgMTMuNjE4NCAxMi4wNDg5IDEzLjY0NDJDMTEuODYwNCAxMy42NjY4IDExLjYzNjkgMTMuNjY2NyAxMS40MTIyIDEzLjY2NjdDMTEuNDAyMSAxMy42NjY3IDExLjM5MiAxMy42NjY3IDExLjM4MTkgMTMuNjY2N0gyLjYxODE4QzIuNjA4MDUgMTMuNjY2NyAyLjU5NzkyIDEzLjY2NjcgMi41ODc4IDEzLjY2NjdDMi4zNjMxMyAxMy42NjY3IDIuMTM5NjggMTMuNjY2OCAxLjk1MTEyIDEzLjY0NDJDMS43MzYxOSAxMy42MTg0IDEuNDk0MjUgMTMuNTU2NiAxLjI3MjA0IDEzLjM4MjNDMS4xMDU0MSAxMy4yNTE1IDAuOTg1OTI0IDEzLjA4MDggMC45MDgwMDcgMTIuOTI0M0MwLjgzMDA4OSAxMi43Njc3IDAuNzY1OTI2IDEyLjU2OTUgMC43NjIwNTMgMTIuMzU3N0MwLjc1NzIzNSAxMi4wOTQzIDAuODM0OTc0IDExLjg3NzYgMC45Mzk4NjQgMTEuNjkwNEMxLjAyNjUyIDExLjUzNTcgMS4xNDc3OCAxMS4zNzUzIDEuMjYwODcgMTEuMjI1OEMxLjI2Njg3IDExLjIxNzkgMS4yNzI4NCAxMS4yMSAxLjI3ODc5IDExLjIwMjFaIiBmaWxsPSIjMzUzNTNEIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/user-solid.svg":
/*!*************************************!*\
  !*** ./src/svg/icon/user-solid.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgUserSolid),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUserSolid = function SvgUserSolid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 18,
    height: 24
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "#a2a2a2",
    "data-name": "user (1)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 12a6 6 0 1 0-6-6 6 6 0 0 0 6 6ZM9 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4Z",
    "data-name": "Path 1537"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 14a9.01 9.01 0 0 0-9 9 1 1 0 1 0 2 0 7 7 0 1 1 14 0 1 1 0 0 0 2 0 9.01 9.01 0 0 0-9-9Z",
    "data-name": "Path 1538"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDE4IDI0Ij4KICA8ZyBpZD0idXNlcl8xXyIgZGF0YS1uYW1lPSJ1c2VyICgxKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzE1MzciIGRhdGEtbmFtZT0iUGF0aCAxNTM3IiBkPSJNMTIsMTJBNiw2LDAsMSwwLDYsNmE2LDYsMCwwLDAsNiw2Wk0xMiwyQTQsNCwwLDEsMSw4LDZhNCw0LDAsMCwxLDQtNFoiIGZpbGw9IiNhMmEyYTIiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzE1MzgiIGRhdGEtbmFtZT0iUGF0aCAxNTM4IiBkPSJNMTIsMTRhOS4wMSw5LjAxLDAsMCwwLTksOSwxLDEsMCwxLDAsMiwwLDcsNywwLDEsMSwxNCwwLDEsMSwwLDAsMCwyLDBBOS4wMSw5LjAxLDAsMCwwLDEyLDE0WiIgZmlsbD0iI2EyYTJhMiIvPgogIDwvZz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/user-unlock.svg":
/*!**************************************!*\
  !*** ./src/svg/icon/user-unlock.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgUserUnlock),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUserUnlock = function SvgUserUnlock(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16.001
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#6551f2",
    d: "M14 10h-2.666V9a1 1 0 0 1 1-1 .989.989 0 0 1 .746.334A1 1 0 0 0 14.569 7a3 3 0 0 0-5.236 2v1.51A1.993 1.993 0 0 0 8.666 12v2a2 2 0 0 0 2 2H14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Zm-1.667 4a1 1 0 1 1 1-1 1 1 0 0 1-.999 1Zm-7-14a4 4 0 1 0 4 4 4 4 0 0 0-3.999-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-1.999 2Zm1.973 4.68a1 1 0 0 1-1.2.743A3.337 3.337 0 0 0 2 14.667V15a1 1 0 0 1-2 0v-.333a5.338 5.338 0 0 1 6.564-5.191 1 1 0 0 1 .743 1.2Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNi4wMDEiIHZpZXdCb3g9IjAgMCAxNiAxNi4wMDEiPgogIDxwYXRoIGlkPSJ1c2VyLXVubG9jayIgZD0iTTE0LDEwSDExLjMzNFY5YTEsMSwwLDAsMSwxLTEsLjk4OS45ODksMCwwLDEsLjc0Ni4zMzRBMSwxLDAsMCwwLDE0LjU2OSw3LDMsMywwLDAsMCw5LjMzMyw5djEuNTFBMS45OTMsMS45OTMsMCwwLDAsOC42NjYsMTJ2MmEyLDIsMCwwLDAsMiwySDE0YTIsMiwwLDAsMCwyLTJWMTJhMiwyLDAsMCwwLTItMlptLTEuNjY3LDRhMSwxLDAsMSwxLDEtMUExLDEsMCwwLDEsMTIuMzM0LDE0Wm0tNy0xNGE0LDQsMCwxLDAsNCw0QTQsNCwwLDAsMCw1LjMzNCwwWm0wLDZhMiwyLDAsMSwxLDItMkEyLDIsMCwwLDEsNS4zMzQsNlptMS45NzMsNC42OGExLDEsMCwwLDEtMS4yLjc0M0EzLjMzNywzLjMzNywwLDAsMCwyLDE0LjY2N1YxNWExLDEsMCwwLDEtMiwwdi0uMzMzQTUuMzM4LDUuMzM4LDAsMCwxLDYuNTY0LDkuNDc2YTEsMSwwLDAsMSwuNzQzLDEuMloiIGZpbGw9IiM2NTUxZjIiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/user.svg":
/*!*******************************!*\
  !*** ./src/svg/icon/user.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgUser),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUser = function SvgUser(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 18.014,
    height: 24
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "#a2a2a2",
    transform: "translate(-64 -.019)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: 6.24,
    cy: 5.76,
    "data-name": "Ellipse 294",
    rx: 6.24,
    ry: 5.76,
    transform: "translate(66.88 .019)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M73.007 14.012A9.017 9.017 0 0 0 64 23.019a1 1 0 0 0 1 1h16.013a1 1 0 0 0 1-1 9.017 9.017 0 0 0-9.006-9.007Z",
    "data-name": "Path 1539"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC4wMTQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxOC4wMTQgMjQiPgogIDxnIGlkPSJ1c2VyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjQgLTAuMDE5KSI+CiAgICA8ZWxsaXBzZSBpZD0iRWxsaXBzZV8yOTQiIGRhdGEtbmFtZT0iRWxsaXBzZSAyOTQiIGN4PSI2LjI0IiBjeT0iNS43NiIgcng9IjYuMjQiIHJ5PSI1Ljc2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Ni44OCAwLjAxOSkiIGZpbGw9IiNhMmEyYTIiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzE1MzkiIGRhdGEtbmFtZT0iUGF0aCAxNTM5IiBkPSJNNzMuMDA3LDI5OC42NjdBOS4wMTcsOS4wMTcsMCwwLDAsNjQsMzA3LjY3NGExLDEsMCwwLDAsMSwxSDgxLjAxM2ExLDEsMCwwLDAsMS0xQTkuMDE3LDkuMDE3LDAsMCwwLDczLjAwNywyOTguNjY3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMjg0LjY1NSkiIGZpbGw9IiNhMmEyYTIiLz4KICA8L2c+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/svg/icon/video-camera-alt.svg":
/*!*******************************************!*\
  !*** ./src/svg/icon/video-camera-alt.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgVideoCameraAlt),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgVideoCameraAlt = function SvgVideoCameraAlt(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 18
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M22.925 2.695a1.934 1.934 0 0 0-2.037.183L18.944 4.76A5.505 5.505 0 0 0 13.5 0h-8A5.506 5.506 0 0 0 0 5.5v7A5.507 5.507 0 0 0 5.5 18h8a5.505 5.505 0 0 0 5.441-4.736l1.947 1.846a1.937 1.937 0 0 0 2.145.126A2.077 2.077 0 0 0 24 13.42V4.434a1.933 1.933 0 0 0-1.075-1.739ZM16 12.5a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 3 12.5v-7A2.5 2.5 0 0 1 5.5 3h8A2.5 2.5 0 0 1 16 5.5v7Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij4KICA8cGF0aCBpZD0idmlkZW8tY2FtZXJhLWFsdCIgZD0iTTIyLjkyNSw1LjY5NWExLjkzNCwxLjkzNCwwLDAsMC0yLjAzNy4xODNMMTguOTQ0LDcuNzZBNS41MDUsNS41MDUsMCwwLDAsMTMuNSwzaC04QTUuNTA2LDUuNTA2LDAsMCwwLDAsOC41djdBNS41MDcsNS41MDcsMCwwLDAsNS41LDIxaDhhNS41MDUsNS41MDUsMCwwLDAsNS40NDEtNC43MzZsMS45NDcsMS44NDZhMS45MzcsMS45MzcsMCwwLDAsMi4xNDUuMTI2QTIuMDc3LDIuMDc3LDAsMCwwLDI0LDE2LjQyVjcuNDM0QTEuOTMzLDEuOTMzLDAsMCwwLDIyLjkyNSw1LjY5NVpNMTYsMTUuNUEyLjUsMi41LDAsMCwxLDEzLjUsMThoLThBMi41LDIuNSwwLDAsMSwzLDE1LjV2LTdBMi41LDIuNSwwLDAsMSw1LjUsNmg4QTIuNSwyLjUsMCwwLDEsMTYsOC41djdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/svg/icon/video.svg":
/*!********************************!*\
  !*** ./src/svg/icon/video.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgVideo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgVideo = function SvgVideo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 12
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#a2a2a2",
    d: "M15.283 1.8a1.289 1.289 0 0 0-1.358.122l-1.3 1.255A3.67 3.67 0 0 0 9 0H3.667A3.671 3.671 0 0 0 0 3.667v4.667A3.671 3.671 0 0 0 3.667 12H9a3.67 3.67 0 0 0 3.627-3.157l1.3 1.231a1.291 1.291 0 0 0 1.43.084A1.384 1.384 0 0 0 16 8.947V2.956a1.289 1.289 0 0 0-.717-1.156Zm-4.617 6.537A1.668 1.668 0 0 1 9 10H3.667A1.669 1.669 0 0 1 2 8.333V3.667A1.669 1.669 0 0 1 3.667 2H9a1.668 1.668 0 0 1 1.667 1.667v4.667Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDE2IDEyIj4KICA8cGF0aCBpZD0idmlkZW8tY2FtZXJhLWFsdCIgZD0iTTE1LjI4Myw0LjhhMS4yODksMS4yODksMCwwLDAtMS4zNTguMTIybC0xLjMsMS4yNTVBMy42NywzLjY3LDAsMCwwLDksM0gzLjY2N0EzLjY3MSwzLjY3MSwwLDAsMCwwLDYuNjY3djQuNjY3QTMuNjcxLDMuNjcxLDAsMCwwLDMuNjY3LDE1SDlhMy42NywzLjY3LDAsMCwwLDMuNjI3LTMuMTU3bDEuMywxLjIzMWExLjI5MSwxLjI5MSwwLDAsMCwxLjQzLjA4NEExLjM4NCwxLjM4NCwwLDAsMCwxNiwxMS45NDdWNS45NTZBMS4yODksMS4yODksMCwwLDAsMTUuMjgzLDQuOFptLTQuNjE3LDYuNTM3QTEuNjY4LDEuNjY4LDAsMCwxLDksMTNIMy42NjdBMS42NjksMS42NjksMCwwLDEsMiwxMS4zMzNWNi42NjdBMS42NjksMS42NjksMCwwLDEsMy42NjcsNUg5YTEuNjY4LDEuNjY4LDAsMCwxLDEuNjY3LDEuNjY3djQuNjY3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMykiIGZpbGw9IiNhMmEyYTIiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/svg/icon/youtube.svg":
/*!**********************************!*\
  !*** ./src/svg/icon/youtube.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgYoutube),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgYoutube = function SvgYoutube(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 11.25
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M15.667 1.76A2.01 2.01 0 0 0 14.252.336 47.51 47.51 0 0 0 8 0a47.51 47.51 0 0 0-6.251.337A2.01 2.01 0 0 0 .334 1.761a22.636 22.636 0 0 0 0 7.752 1.98 1.98 0 0 0 1.415 1.4A47.513 47.513 0 0 0 8 11.249a47.513 47.513 0 0 0 6.251-.336 1.981 1.981 0 0 0 1.415-1.4 22.636 22.636 0 0 0 0-7.752Zm-9.3 6.255V3.257l4.182 2.379Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMS4yNSIgdmlld0JveD0iMCAwIDE2IDExLjI1Ij4KICA8cGF0aCBpZD0ieW91dHViZSIgZD0iTTMwLjYsNjUuNzZhMi4wMSwyLjAxLDAsMCwwLTEuNDE1LTEuNDI0QTQ3LjUxLDQ3LjUxLDAsMCwwLDIyLjkzMyw2NGE0Ny41MSw0Ny41MSwwLDAsMC02LjI1MS4zMzcsMi4wMSwyLjAxLDAsMCwwLTEuNDE1LDEuNDI0LDIyLjYzNiwyMi42MzYsMCwwLDAsMCw3Ljc1MiwxLjk4LDEuOTgsMCwwLDAsMS40MTUsMS40LDQ3LjUxMyw0Ny41MTMsMCwwLDAsNi4yNTEuMzM2LDQ3LjUxMyw0Ny41MTMsMCwwLDAsNi4yNTEtLjMzNiwxLjk4MSwxLjk4MSwwLDAsMCwxLjQxNS0xLjQsMjIuNjM2LDIyLjYzNiwwLDAsMCwwLTcuNzUyWm0tOS4zLDYuMjU1VjY3LjI1N2w0LjE4MiwyLjM3OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNC45MzMgLTY0KSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/js/admin/App.js":
/*!*****************************!*\
  !*** ./src/js/admin/App.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @helper/utils */ "./src/js/helper/utils.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _pages_TemplatePack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/TemplatePack */ "./src/js/admin/pages/TemplatePack.js");
/* harmony import */ var _layout_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/AppLayout */ "./src/js/layout/AppLayout.js");
/* harmony import */ var _pages_Pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Pages */ "./src/js/admin/pages/Pages.js");
/* harmony import */ var _pages_Blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Blocks */ "./src/js/admin/pages/Blocks.js");


// import { applyFilters } from '@wordpress/hooks';







function App() {
  const [dir, setDir] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('ltr');
  const theme = {
    direction: dir
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (document.documentElement.getAttribute('dir') === 'rtl') {
      setDir('rtl');
    } else {
      setDir('ltr');
    }
    (0,_helper_utils__WEBPACK_IMPORTED_MODULE_2__.updateGlobalState)('templatiq_router_references', {
      navigationHook: react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate,
      routeLink: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link,
      routerNavLink: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink,
      paramsHook: react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams,
      locationHook: {
        useLocation: react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useLocation
      }
    });
  }, []);
  const templateRoutes = [{
    path: `/*`,
    element: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pages_TemplatePack__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }, {
    path: '/pages',
    element: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pages_Pages__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }, {
    path: `/blocks`,
    element: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pages_Blocks__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_layout_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.HashRouter, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(styled_components__WEBPACK_IMPORTED_MODULE_9__.ThemeProvider, {
    theme: theme
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, templateRoutes.map((routeItem, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
      key: index,
      path: routeItem.path,
      element: routeItem.element
    });
  }))))));
}

/***/ }),

/***/ "./src/js/admin/pages/Blocks.js":
/*!**************************************!*\
  !*** ./src/js/admin/pages/Blocks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blocks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Blocks() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Blocks");
}

/***/ }),

/***/ "./src/js/admin/pages/Pages.js":
/*!*************************************!*\
  !*** ./src/js/admin/pages/Pages.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pages)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Pages() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Pages");
}

/***/ }),

/***/ "./src/js/admin/pages/TemplatePack.js":
/*!********************************************!*\
  !*** ./src/js/admin/pages/TemplatePack.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TemplatePack)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_TemplatePack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/TemplatePack */ "./src/js/modules/TemplatePack/index.js");


function TemplatePack() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_modules_TemplatePack__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GB_IN_BYTES: () => (/* binding */ GB_IN_BYTES),
/* harmony export */   KB_IN_BYTES: () => (/* binding */ KB_IN_BYTES),
/* harmony export */   MB_IN_BYTES: () => (/* binding */ MB_IN_BYTES),
/* harmony export */   MIN_IN_SECONDS: () => (/* binding */ MIN_IN_SECONDS),
/* harmony export */   SECOND_IN_MILLISECONDS: () => (/* binding */ SECOND_IN_MILLISECONDS),
/* harmony export */   iconList: () => (/* binding */ iconList),
/* harmony export */   mimeTypeIcons: () => (/* binding */ mimeTypeIcons),
/* harmony export */   mimeTypes: () => (/* binding */ mimeTypes),
/* harmony export */   ratingIcons: () => (/* binding */ ratingIcons),
/* harmony export */   socialIcons: () => (/* binding */ socialIcons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _icon_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @icon/facebook.svg */ "./src/svg/icon/facebook.svg");
/* harmony import */ var _icon_twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @icon/twitter.svg */ "./src/svg/icon/twitter.svg");
/* harmony import */ var _icon_youtube_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @icon/youtube.svg */ "./src/svg/icon/youtube.svg");
/* harmony import */ var _icon_instagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @icon/instagram.svg */ "./src/svg/icon/instagram.svg");
/* harmony import */ var _icon_chart_bar_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @icon/chart-bar.svg */ "./src/svg/icon/chart-bar.svg");
/* harmony import */ var _icon_bar_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @icon/bar.svg */ "./src/svg/icon/bar.svg");
/* harmony import */ var _icon_hash_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @icon/hash.svg */ "./src/svg/icon/hash.svg");
/* harmony import */ var _icon_button_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @icon/button.svg */ "./src/svg/icon/button.svg");
/* harmony import */ var _icon_upload_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @icon/upload.svg */ "./src/svg/icon/upload.svg");
/* harmony import */ var _icon_sliders_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @icon/sliders.svg */ "./src/svg/icon/sliders.svg");
/* harmony import */ var _icon_calendar_day_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @icon/calendar-day.svg */ "./src/svg/icon/calendar-day.svg");
/* harmony import */ var _icon_star_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @icon/star.svg */ "./src/svg/icon/star.svg");
/* harmony import */ var _icon_meter_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @icon/meter.svg */ "./src/svg/icon/meter.svg");
/* harmony import */ var _icon_marker_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @icon/marker.svg */ "./src/svg/icon/marker.svg");
/* harmony import */ var _icon_address_book_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @icon/address-book.svg */ "./src/svg/icon/address-book.svg");
/* harmony import */ var _icon_envelope_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @icon/envelope.svg */ "./src/svg/icon/envelope.svg");
/* harmony import */ var _icon_phone_flip_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @icon/phone-flip.svg */ "./src/svg/icon/phone-flip.svg");
/* harmony import */ var _icon_link_alt_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @icon/link-alt.svg */ "./src/svg/icon/link-alt.svg");
/* harmony import */ var _icon_open_ended_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @icon/open-ended.svg */ "./src/svg/icon/open-ended.svg");
/* harmony import */ var _icon_chart_simple_horizontal_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @icon/chart-simple-horizontal.svg */ "./src/svg/icon/chart-simple-horizontal.svg");
/* harmony import */ var _icon_video_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @icon/video.svg */ "./src/svg/icon/video.svg");
/* harmony import */ var _icon_comment_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @icon/comment.svg */ "./src/svg/icon/comment.svg");
/* harmony import */ var _icon_scrubber_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @icon/scrubber.svg */ "./src/svg/icon/scrubber.svg");
/* harmony import */ var _icon_checkbox_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @icon/checkbox.svg */ "./src/svg/icon/checkbox.svg");
/* harmony import */ var _icon_angle_circle_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @icon/angle-circle.svg */ "./src/svg/icon/angle-circle.svg");
/* harmony import */ var _icon_toggle_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @icon/toggle.svg */ "./src/svg/icon/toggle.svg");
/* harmony import */ var _icon_picture_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @icon/picture.svg */ "./src/svg/icon/picture.svg");
/* harmony import */ var _icon_file_pdf_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @icon/file-pdf.svg */ "./src/svg/icon/file-pdf.svg");
/* harmony import */ var _icon_arrow_square_right_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @icon/arrow-square-right.svg */ "./src/svg/icon/arrow-square-right.svg");
/* harmony import */ var _icon_arrow_square_left_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @icon/arrow-square-left.svg */ "./src/svg/icon/arrow-square-left.svg");
/* harmony import */ var _icon_chart_simple_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @icon/chart-simple.svg */ "./src/svg/icon/chart-simple.svg");
/* harmony import */ var _icon_user_unlock_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @icon/user-unlock.svg */ "./src/svg/icon/user-unlock.svg");
/* harmony import */ var _icon_text_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @icon/text.svg */ "./src/svg/icon/text.svg");
/* harmony import */ var _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @icon/video-camera-alt.svg */ "./src/svg/icon/video-camera-alt.svg");
/* harmony import */ var _icon_screen_record_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @icon/screen-record.svg */ "./src/svg/icon/screen-record.svg");
/* harmony import */ var _icon_mic_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @icon/mic.svg */ "./src/svg/icon/mic.svg");
/* harmony import */ var _icon_redo_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @icon/redo.svg */ "./src/svg/icon/redo.svg");
/* harmony import */ var _icon_star_alt_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @icon/star-alt.svg */ "./src/svg/icon/star-alt.svg");
/* harmony import */ var _icon_heart_svg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @icon/heart.svg */ "./src/svg/icon/heart.svg");
/* harmony import */ var _icon_heart_solid_svg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @icon/heart-solid.svg */ "./src/svg/icon/heart-solid.svg");
/* harmony import */ var _icon_bulb_svg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @icon/bulb.svg */ "./src/svg/icon/bulb.svg");
/* harmony import */ var _icon_bulb_solid_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @icon/bulb-solid.svg */ "./src/svg/icon/bulb-solid.svg");
/* harmony import */ var _icon_thumbs_up_svg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @icon/thumbs-up.svg */ "./src/svg/icon/thumbs-up.svg");
/* harmony import */ var _icon_thumbs_up_solid_svg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @icon/thumbs-up-solid.svg */ "./src/svg/icon/thumbs-up-solid.svg");
/* harmony import */ var _icon_user_svg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @icon/user.svg */ "./src/svg/icon/user.svg");
/* harmony import */ var _icon_user_solid_svg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @icon/user-solid.svg */ "./src/svg/icon/user-solid.svg");
/* harmony import */ var _icon_trophy_svg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @icon/trophy.svg */ "./src/svg/icon/trophy.svg");
/* harmony import */ var _icon_trophy_solid_svg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @icon/trophy-solid.svg */ "./src/svg/icon/trophy-solid.svg");
/* harmony import */ var _icon_flag_svg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @icon/flag.svg */ "./src/svg/icon/flag.svg");
/* harmony import */ var _icon_flag_solid_svg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @icon/flag-solid.svg */ "./src/svg/icon/flag-solid.svg");



const KB_IN_BYTES = 1024;
const MB_IN_BYTES = 1024 * KB_IN_BYTES;
const GB_IN_BYTES = 1024 * MB_IN_BYTES;
const SECOND_IN_MILLISECONDS = 1000;
const MIN_IN_SECONDS = 60;


















































const iconList = {
  chartBar: _icon_chart_bar_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  bar: _icon_bar_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
  hash: _icon_hash_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
  button: _icon_button_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
  upload: _icon_upload_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
  slider: _icon_sliders_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
  date: _icon_calendar_day_svg__WEBPACK_IMPORTED_MODULE_11__["default"],
  star: _icon_star_svg__WEBPACK_IMPORTED_MODULE_12__["default"],
  meter: _icon_meter_svg__WEBPACK_IMPORTED_MODULE_13__["default"],
  marker: _icon_marker_svg__WEBPACK_IMPORTED_MODULE_14__["default"],
  address: _icon_address_book_svg__WEBPACK_IMPORTED_MODULE_15__["default"],
  envelope: _icon_envelope_svg__WEBPACK_IMPORTED_MODULE_16__["default"],
  phone: _icon_phone_flip_svg__WEBPACK_IMPORTED_MODULE_17__["default"],
  url: _icon_link_alt_svg__WEBPACK_IMPORTED_MODULE_18__["default"],
  openEnded: _icon_open_ended_svg__WEBPACK_IMPORTED_MODULE_19__["default"],
  horizontalBar: _icon_chart_simple_horizontal_svg__WEBPACK_IMPORTED_MODULE_20__["default"],
  video: _icon_video_svg__WEBPACK_IMPORTED_MODULE_21__["default"],
  comment: _icon_comment_svg__WEBPACK_IMPORTED_MODULE_22__["default"],
  scrubber: _icon_scrubber_svg__WEBPACK_IMPORTED_MODULE_23__["default"],
  checkbox: _icon_checkbox_svg__WEBPACK_IMPORTED_MODULE_24__["default"],
  angleCircle: _icon_angle_circle_svg__WEBPACK_IMPORTED_MODULE_25__["default"],
  toggle: _icon_toggle_svg__WEBPACK_IMPORTED_MODULE_26__["default"],
  picture: _icon_picture_svg__WEBPACK_IMPORTED_MODULE_27__["default"],
  arrowSquareRight: _icon_arrow_square_right_svg__WEBPACK_IMPORTED_MODULE_29__["default"],
  arrowSquareLeft: _icon_arrow_square_left_svg__WEBPACK_IMPORTED_MODULE_30__["default"],
  chartSimple: _icon_chart_simple_svg__WEBPACK_IMPORTED_MODULE_31__["default"],
  useUnLock: _icon_user_unlock_svg__WEBPACK_IMPORTED_MODULE_32__["default"],
  text: _icon_text_svg__WEBPACK_IMPORTED_MODULE_33__["default"],
  video: _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  screen: _icon_screen_record_svg__WEBPACK_IMPORTED_MODULE_35__["default"],
  voice: _icon_mic_svg__WEBPACK_IMPORTED_MODULE_36__["default"],
  redo: _icon_redo_svg__WEBPACK_IMPORTED_MODULE_37__["default"]
};
const ratingIcons = {
  star: {
    normal: _icon_star_svg__WEBPACK_IMPORTED_MODULE_12__["default"],
    solid: _icon_star_alt_svg__WEBPACK_IMPORTED_MODULE_38__["default"]
  },
  heart: {
    normal: _icon_heart_svg__WEBPACK_IMPORTED_MODULE_39__["default"],
    solid: _icon_heart_solid_svg__WEBPACK_IMPORTED_MODULE_40__["default"]
  },
  bulb: {
    normal: _icon_bulb_svg__WEBPACK_IMPORTED_MODULE_41__["default"],
    solid: _icon_bulb_solid_svg__WEBPACK_IMPORTED_MODULE_42__["default"]
  },
  thumbs: {
    normal: _icon_thumbs_up_svg__WEBPACK_IMPORTED_MODULE_43__["default"],
    solid: _icon_thumbs_up_solid_svg__WEBPACK_IMPORTED_MODULE_44__["default"]
  },
  user: {
    normal: _icon_user_svg__WEBPACK_IMPORTED_MODULE_45__["default"],
    solid: _icon_user_solid_svg__WEBPACK_IMPORTED_MODULE_46__["default"]
  },
  trophy: {
    normal: _icon_trophy_svg__WEBPACK_IMPORTED_MODULE_47__["default"],
    solid: _icon_trophy_solid_svg__WEBPACK_IMPORTED_MODULE_48__["default"]
  },
  flag: {
    normal: _icon_flag_svg__WEBPACK_IMPORTED_MODULE_49__["default"],
    solid: _icon_flag_solid_svg__WEBPACK_IMPORTED_MODULE_50__["default"]
  }
};
const mimeTypeIcons = {
  'image/jpeg': _icon_picture_svg__WEBPACK_IMPORTED_MODULE_27__["default"],
  'image/gif': _icon_picture_svg__WEBPACK_IMPORTED_MODULE_27__["default"],
  'image/png': _icon_picture_svg__WEBPACK_IMPORTED_MODULE_27__["default"],
  'image/bmp': _icon_picture_svg__WEBPACK_IMPORTED_MODULE_27__["default"],
  'image/tiff': _icon_picture_svg__WEBPACK_IMPORTED_MODULE_27__["default"],
  'image/webp': _icon_picture_svg__WEBPACK_IMPORTED_MODULE_27__["default"],
  'image/x-icon': _icon_picture_svg__WEBPACK_IMPORTED_MODULE_27__["default"],
  'image/heic': _icon_picture_svg__WEBPACK_IMPORTED_MODULE_27__["default"],
  'video/x-ms-asf': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'video/x-ms-wmv': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'video/x-ms-wmx': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'video/x-ms-wm': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'video/avi': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'video/divx': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'video/x-flv': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'video/quicktime': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'video/mp4': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'video/ogg': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'video/webm': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'video/x-matroska': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'video/3gpp': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'video/3gpp2': _icon_video_camera_alt_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  'audio/mpeg': _icon_mic_svg__WEBPACK_IMPORTED_MODULE_36__["default"],
  'audio/aac': _icon_mic_svg__WEBPACK_IMPORTED_MODULE_36__["default"],
  'audio/x-realaudio': _icon_mic_svg__WEBPACK_IMPORTED_MODULE_36__["default"],
  'audio/ogg': _icon_mic_svg__WEBPACK_IMPORTED_MODULE_36__["default"],
  'audio/flac': _icon_mic_svg__WEBPACK_IMPORTED_MODULE_36__["default"],
  'audio/midi': _icon_mic_svg__WEBPACK_IMPORTED_MODULE_36__["default"],
  'audio/x-ms-wma': _icon_mic_svg__WEBPACK_IMPORTED_MODULE_36__["default"],
  'audio/x-ms-wax': _icon_mic_svg__WEBPACK_IMPORTED_MODULE_36__["default"],
  'audio/x-matroska': _icon_mic_svg__WEBPACK_IMPORTED_MODULE_36__["default"],
  'application/pdf': _icon_file_pdf_svg__WEBPACK_IMPORTED_MODULE_28__["default"]
};
const mimeTypes = {
  'image/jpeg': 'picture',
  'image/gif': 'picture',
  'image/png': 'picture',
  'image/bmp': 'picture',
  'image/tiff': 'picture',
  'image/webp': 'picture',
  'image/x-icon': 'picture',
  'image/heic': 'picture',
  'video/x-ms-asf': 'video',
  'video/x-ms-wmv': 'video',
  'video/x-ms-wmx': 'video',
  'video/x-ms-wm': 'video',
  'video/avi': 'video',
  'video/divx': 'video',
  'video/x-flv': 'video',
  'video/quicktime': 'video',
  'video/mp4': 'video',
  'video/ogg': 'video',
  'video/webm': 'video',
  'video/x-matroska': 'video',
  'video/3gpp': 'video',
  'video/3gpp2': 'video',
  'audio/mpeg': 'voice',
  'audio/aac': 'voice',
  'audio/x-realaudio': 'voice',
  'audio/ogg': 'voice',
  'audio/flac': 'voice',
  'audio/midi': 'voice',
  'audio/x-ms-wma': 'voice',
  'audio/x-ms-wax': 'voice',
  'audio/x-matroska': 'voice',
  'application/pdf': 'pdf'
};
const socialIcons = {
  facebook: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_51__["default"], {
    src: _icon_facebook_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
  }),
  twitter: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_51__["default"], {
    src: _icon_twitter_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
  }),
  youtube: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_51__["default"], {
    src: _icon_youtube_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }),
  instagram: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_51__["default"], {
    src: _icon_instagram_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
  })
};


/***/ }),

/***/ "./src/js/helper/utils.js":
/*!********************************!*\
  !*** ./src/js/helper/utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findObjectItem: () => (/* binding */ findObjectItem),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   generateFileNameFromBlob: () => (/* binding */ generateFileNameFromBlob),
/* harmony export */   getAcceptedExtensions: () => (/* binding */ getAcceptedExtensions),
/* harmony export */   getFormattedMaxSize: () => (/* binding */ getFormattedMaxSize),
/* harmony export */   getFormattedSize: () => (/* binding */ getFormattedSize),
/* harmony export */   getGlobalState: () => (/* binding */ getGlobalState),
/* harmony export */   getMaxUploadSize: () => (/* binding */ getMaxUploadSize),
/* harmony export */   getPassedTime: () => (/* binding */ getPassedTime),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isSelectedExtensionValid: () => (/* binding */ isSelectedExtensionValid),
/* harmony export */   safeUpdateObjectItem: () => (/* binding */ safeUpdateObjectItem),
/* harmony export */   updateGlobalState: () => (/* binding */ updateGlobalState)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");

const isObject = value => value && typeof value === 'object' && !Array.isArray(value);
function getMaxUploadSize() {
  return 5 * _constants__WEBPACK_IMPORTED_MODULE_0__.MB_IN_BYTES;
}
function getFormattedMaxSize(rawSize) {
  const size = rawSize < _constants__WEBPACK_IMPORTED_MODULE_0__.MB_IN_BYTES ? `${(rawSize / _constants__WEBPACK_IMPORTED_MODULE_0__.KB_IN_BYTES).toFixed(2)} KB` : `${(rawSize / _constants__WEBPACK_IMPORTED_MODULE_0__.MB_IN_BYTES).toFixed(2)} MB`;
  return size;
}
function getFormattedSize(rawSize) {
  const isFloat = value => Number(value) === value && value % 1 !== 0;
  const formatNumber = value => isFloat(value) ? value.toFixed(2) : value;
  const size = rawSize < _constants__WEBPACK_IMPORTED_MODULE_0__.MB_IN_BYTES ? `${formatNumber(rawSize / _constants__WEBPACK_IMPORTED_MODULE_0__.KB_IN_BYTES)} KB` : `${formatNumber(rawSize / _constants__WEBPACK_IMPORTED_MODULE_0__.MB_IN_BYTES)} MB`;
  return size;
}
function getPassedTime(date) {
  const givenDate = new Date(date);
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - givenDate;

  // Define units in seconds and their corresponding names
  const units = [{
    value: 86400,
    name: 'day'
  }, {
    value: 3600,
    name: 'hour'
  }, {
    value: 60,
    name: 'minute'
  }, {
    value: 1,
    name: 'second'
  }];

  // Find the appropriate unit for formatting
  let output = '';
  for (const unit of units) {
    if (timeDifference >= unit.value * 1000) {
      const unitCount = Math.floor(timeDifference / (unit.value * 1000));
      output = `${unitCount} ${unit.name}${unitCount !== 1 ? 's' : ''}`;
      break;
    }
  }
  return output;
}
function formatDate(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateParts = date.split(' ');
  const [datePart, timePart] = dateParts;
  const [year, month, day] = datePart.split('-');
  const [hour, minute] = timePart.split(':');
  const formattedDate = `${parseInt(day)} ${months[parseInt(month) - 1]} ${year.slice(-2)} @ ${hour}:${minute}`;
  return formattedDate;
}
function generateFileNameFromBlob(blob) {
  if (!blob instanceof Blob) {
    return '';
  }
  const matchExt = blob.type.match(/^\w+\/([^;]+)/);
  const ext = matchExt ? matchExt[1] : '';
  if (!ext) {
    return '';
  }
  return Date.now() + '.' + ext;
}
const extensionsInStandardObject = {};
function isSelectedExtensionValid(fileExtension, uploadedMimeType) {
  return extensionsInStandardObject[fileExtension] === uploadedMimeType;
}
function getAcceptedExtensions() {
  const supportedExtensions = templatiq_localization.supported_file_extensions || [];
  Object.entries(supportedExtensions).forEach(([extString, mimeType]) => {
    const exts = extString.split('|');
    exts.forEach(ext => {
      extensionsInStandardObject[ext] = mimeType;
    });
  });
  return Object.keys(extensionsInStandardObject).map(ext => `.${ext}`).join(',');
}
function findObjectItem(path, data, defaultValue) {
  if (typeof path !== 'string') {
    return defaultValue;
  }
  if (!path) {
    return defaultValue;
  }
  if (!isObject(data)) {
    return defaultValue;
  }
  const pathList = path.split('.');
  let targetItem = data;
  for (const key of pathList) {
    if (!isObject(targetItem)) {
      return defaultValue;
    }
    if (!targetItem.hasOwnProperty(key)) {
      return defaultValue;
    }
    targetItem = targetItem[key];
  }
  return targetItem;
}
function safeUpdateObjectItem(path, data, value) {
  if (typeof path !== 'string') {
    return data;
  }
  if (!path) {
    return data;
  }
  const isObject = value => value && typeof value === 'object' && !Array.isArray(value);
  if (!isObject(data)) {
    return data;
  }
  const pathList = path.split('.');
  const lastKey = pathList.splice(pathList.length - 1, 1)[0];
  let currentDataItem = data;
  for (const key of pathList) {
    if (!isObject(currentDataItem)) {
      return data;
    }
    if (!currentDataItem.hasOwnProperty(key)) {
      currentDataItem[key] = {};
    }
    currentDataItem = currentDataItem[key];
  }
  if (!isObject(currentDataItem)) {
    return data;
  }
  currentDataItem[lastKey] = value;
  return data;
}
function updateGlobalState(key, value, merge) {
  if (!window.templateMarketGlobalState) {
    window.templateMarketGlobalState = {};
  }
  if (typeof merge === 'boolean' && merge && isObject(value) && isObject(window.templateMarketGlobalState[key])) {
    const newValue = {
      ...window.templateMarketGlobalState[key],
      ...value
    };
    window.templateMarketGlobalState[key] = newValue;
    return window.templateMarketGlobalState[key];
  }
  window.templateMarketGlobalState[key] = value;
  return window.templateMarketGlobalState[key];
}
function getGlobalState(key, defaultValue) {
  if (!window.templateMarketGlobalState) {
    window.templateMarketGlobalState = {};
  }
  if (typeof key === 'undefined') {
    return window.templateMarketGlobalState;
  }
  if (!window.templateMarketGlobalState.hasOwnProperty(key)) {
    return defaultValue;
  }
  return window.templateMarketGlobalState[key];
}

/***/ }),

/***/ "./src/js/layout/AppLayout.js":
/*!************************************!*\
  !*** ./src/js/layout/AppLayout.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/index.js */ "./src/js/layout/Header/index.js");
/* harmony import */ var _Sidebar_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar/index.js */ "./src/js/layout/Sidebar/index.js");
/* harmony import */ var _Sidebar_AdminSidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar/AdminSidebar.js */ "./src/js/layout/Sidebar/AdminSidebar.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.js */ "./src/js/layout/style.js");






const AppLayout = ({
  children
}) => {
  let isLoggedIn = false;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Header_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style_js__WEBPACK_IMPORTED_MODULE_4__.LayoutStyle, {
    className: "templatiq__wrapper"
  }, isLoggedIn ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Sidebar_AdminSidebar_js__WEBPACK_IMPORTED_MODULE_3__["default"], null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Sidebar_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLayout);

/***/ }),

/***/ "./src/js/layout/Header/index.js":
/*!***************************************!*\
  !*** ./src/js/layout/Header/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/js/layout/Header/style.js");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _icon_user_alt_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @icon/user-alt.svg */ "./src/svg/icon/user-alt.svg");
/* harmony import */ var _icon_file_solid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @icon/file-solid.svg */ "./src/svg/icon/file-solid.svg");
/* harmony import */ var _icon_pages_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @icon/pages.svg */ "./src/svg/icon/pages.svg");
/* harmony import */ var _icon_blocks_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @icon/blocks.svg */ "./src/svg/icon/blocks.svg");
/* harmony import */ var _icon_elementor_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @icon/elementor.svg */ "./src/svg/icon/elementor.svg");









const Header = () => {
  let isLoggedIn = false;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__.HeaderStyle, {
    className: "templatiq__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__header__logo"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _images_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Logo"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__header__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__.HeaderNavStyle, {
    className: "templatiq__header__nav"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "templatiq__header__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/template-pack",
    className: `templatiq__header__link active`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _icon_file_solid_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    width: 18,
    height: 18
  }), "Template Pack")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "templatiq__header__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/pages",
    className: `templatiq__header__link`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _icon_pages_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    width: 18,
    height: 18
  }), "Pages")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "templatiq__header__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/blocks",
    className: `templatiq__header__link`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _icon_blocks_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    width: 18,
    height: 18
  }), "Blocks"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__.HeaderActionStyle, {
    className: "templatiq__header__action"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__header__action__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__header__action__link"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _icon_elementor_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    width: 24,
    height: 24
  }), "Elementor")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__header__action__item"
  }, isLoggedIn ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__header__action__link"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _icon_user_alt_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    width: 14,
    height: 14
  }), "Logout") : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__header__action__link"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _icon_user_alt_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    width: 14,
    height: 14
  }), "Login")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/js/layout/Header/style.js":
/*!***************************************!*\
  !*** ./src/js/layout/Header/style.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderActionStyle: () => (/* binding */ HeaderActionStyle),
/* harmony export */   HeaderNavStyle: () => (/* binding */ HeaderNavStyle),
/* harmony export */   HeaderStyle: () => (/* binding */ HeaderStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const HeaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    height: 70px;
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 0 2px 4px #10101404;
    .templatiq__header__logo {
        flex: 0 0 256px;
        max-width: 256px;
        margin-inline-start: 24px;
        img {
            max-width: 100%;
        }
    }
    .templatiq__header__content {
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        margin-inline-end: 32px;
        justify-content: space-between;
    }
`;
const HeaderNavStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul`
    display: flex;
    gap: 24px;
    align-items: center;
    margin: 0;
    .templatiq__header__item {
        margin: 0;
    }
    .templatiq__header__link {
        display: flex;
        gap: 8px;
        align-items: center;
        position: relative;
        font-size: 14px;
        font-weight: 500;
        height: 70px;
        color: #57575F;
        text-decoration: none;
        path {
            fill: #57575F;
            transition: fill 0.3s ease;
        }
        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            height: 2px;
            width: 0;
            background: transparent;
            transition: width 0.3s ease;
        }
        &:hover,
        &.active {
            color: #8941FF;
            path {
                fill: #8941FF;
            }
            &:before {
                width: 100%;
                background: #8941FF;
            }
        }
    }
`;
const HeaderActionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    gap: 32px;
    align-items: center;
    .templatiq__header__action__link {
        display: flex;
        gap: 10px;
        align-items: center;
        height: 36px;
        padding: 0 12px;
        border-radius: 8px;
        color: #57575F;
        font-size: 14px;
        font-weight: 500;
        background-color: #F1F1F4;
        transition: background-color 0.3s ease;
        path {
            fill: #57575F;
            transition: fill 0.3s ease;
        }
        &:hover {
            color: #ffffff;
            background-color: #8941FF;
            path {
                fill: #ffffff;
            }
        }
    }
`;


/***/ }),

/***/ "./src/js/layout/Sidebar/AdminSidebar.js":
/*!***********************************************!*\
  !*** ./src/js/layout/Sidebar/AdminSidebar.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/js/layout/Sidebar/style.js");


const AdminSidebar = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__.SidebarStyle, {
    className: "templatiq__sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__nav"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__sidebar__nav__link active"
  }, "Favorites"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__sidebar__nav__link"
  }, "Downloads"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__sidebar__nav__link"
  }, "Purchased"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__sidebar__nav__link"
  }, "My Account"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminSidebar);

/***/ }),

/***/ "./src/js/layout/Sidebar/index.js":
/*!****************************************!*\
  !*** ./src/js/layout/Sidebar/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/js/layout/Sidebar/style.js");
/* harmony import */ var _icon_filter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @icon/filter.svg */ "./src/svg/icon/filter.svg");





const Sidebar = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__.SidebarStyle, {
    className: "templatiq__sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__filter"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "templatiq__sidebar__filter__title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: _icon_filter_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    width: 18,
    height: 18
  }), "Filter"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__sidebar__filter__clear"
  }, "Clear")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__nav"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__sidebar__nav__link active"
  }, "Plugins"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__sidebar__nav__link"
  }, "Categories")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__.SidebarCollapseStyle, {
    className: "templatiq__sidebar__collapse"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "templatiq__sidebar__collapse__title"
  }, "Directorist"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "Pricing Plan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "WooCommerce Pricing Plans"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "Business Directory"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "Marketplace"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "Claim Listing"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "templatiq__sidebar__collapse__title"
  }, "WooCommerce"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "Pricing Plan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "WooCommerce Pricing Plans"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "Business Directory"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "Marketplace"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "Claim Listing"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "templatiq__sidebar__collapse__title"
  }, "HelpGent"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "Pricing Plan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "WooCommerce Pricing Plans"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "Business Directory"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "Marketplace"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__sidebar__collapse__item__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "templatiq__sidebar__collapse__item__single__checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "templatiq__sidebar__collapse__item__single__label"
  }, "Claim Listing"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__sidebar__collapse__item__single__count"
  }, "12")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./src/js/layout/Sidebar/style.js":
/*!****************************************!*\
  !*** ./src/js/layout/Sidebar/style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarCollapseStyle: () => (/* binding */ SidebarCollapseStyle),
/* harmony export */   SidebarStyle: () => (/* binding */ SidebarStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const SidebarStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 256px;
    background: #ffffff;
    box-shadow: 0 7px 20px 5px #10101405;
    .templatiq__sidebar__filter {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        padding: 10px 24px;
        background: #F8F8F9;
        .templatiq__sidebar__filter__title {
            display: flex;
            gap: 10px;
            align-items: center;
            font-size: 14px;
            font-weight: 400;
            color: #6B6B73;
            margin: 0;
            path {
                fill: #6B6B73;
            }
        }
        .templatiq__sidebar__filter__clear {
            color: #8941FF;
        }
    }

    .templatiq__sidebar__wrapper {
        padding-bottom: 30px
    }
    
    .templatiq__sidebar__nav {
        display: flex;
        gap: 24px;
        padding: 0 24px;
        margin-bottom: 24px;
        border-bottom: 1px solid #F1F1F4;
        .templatiq__sidebar__nav__link {
            position: relative;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            color: #57575F;
            height: 50px;
            text-decoration: none;
            &:before {
                content: '';
                position: absolute;
                bottom: 0;
                height: 2px;
                width: 0;
                background: transparent;
                transition: width 0.3s ease;
            }
            &.active,
            &:hover {
                color: #8941FF;
                &:before {
                    width: 100%;
                    background: #8941FF;
                }
            }
        }
    }
`;
const SidebarCollapseStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    gap: 25px;
    flex-direction: column;
    padding: 0 24px;
    .templatiq__sidebar__collapse__title {
        font-size: 14px;
        font-weight: 500;
        margin: 0 0 20px;
    }
    .templatiq__sidebar__collapse__item {
        display: flex;
        gap: 15px;
        flex-direction: column;
        .templatiq__sidebar__collapse__item__single {
            display: flex;
            gap: 12px;
            .templatiq__sidebar__collapse__item__single__checkbox {
                margin: 3px 0 0;
            }
            .templatiq__sidebar__collapse__item__single__label {
                font-size: 13px;
                font-weight: 500;
            }
            .templatiq__sidebar__collapse__item__single__count {
                flex: 1;
                text-align: end;
            }
        }
    }
`;


/***/ }),

/***/ "./src/js/layout/style.js":
/*!********************************!*\
  !*** ./src/js/layout/style.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutStyle: () => (/* binding */ LayoutStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const LayoutStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    .templatiq__content {
        flex: 1;
        padding: 32px;
    }
`;


/***/ }),

/***/ "./src/js/modules/TemplatePack/components/SingleTemplate.js":
/*!******************************************************************!*\
  !*** ./src/js/modules/TemplatePack/components/SingleTemplate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/js/modules/TemplatePack/components/style.js");
/* harmony import */ var _icon_user_alt_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @icon/user-alt.svg */ "./src/svg/icon/user-alt.svg");




const SingleTemplate = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__.SingleTemplateStyle, {
    className: "templatiq__template__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__template__single__wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__template__single__img"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__template__single__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "templatiq__template__single__title"
  }, "DDoctors"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__template__single__cat"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__template__single__cat__link"
  }, "Directorist Core"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__template__single__cat__link"
  }, "Pricing Plan")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__template__single__quickmeta"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__template__single__quickmeta__item"
  }, "$20"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "templatiq__template__single__quickmeta__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: _icon_user_alt_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    width: 14,
    height: 14
  }), "24"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__template__single__quickmeta__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: _icon_user_alt_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    width: 14,
    height: 14
  }), "52")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleTemplate);

/***/ }),

/***/ "./src/js/modules/TemplatePack/components/style.js":
/*!*********************************************************!*\
  !*** ./src/js/modules/TemplatePack/components/style.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SingleTemplateStyle: () => (/* binding */ SingleTemplateStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const SingleTemplateStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    .templatiq__content {
        flex: 1;
        padding: 32px;
    }
`;


/***/ }),

/***/ "./src/js/modules/TemplatePack/index.js":
/*!**********************************************!*\
  !*** ./src/js/modules/TemplatePack/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TemplatePackModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ "./src/js/style.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/js/modules/TemplatePack/style.js");
/* harmony import */ var _components_SingleTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SingleTemplate */ "./src/js/modules/TemplatePack/components/SingleTemplate.js");
/* harmony import */ var _icon_search_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @icon/search.svg */ "./src/svg/icon/search.svg");
/* harmony import */ var _icon_crown_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @icon/crown.svg */ "./src/svg/icon/crown.svg");








function TemplatePackModule() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__.TemplatePackStyle, {
    className: "templatiq__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__content__top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__content__top__filter"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "templatiq__content__top__filter__title"
  }, "Template Pack"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__.TemplatePackFilterStyle, {
    className: "templatiq__content__top__filter__wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "templatiq__content__top__filter__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__content__top__filter__link active"
  }, "All (24)")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "templatiq__content__top__filter__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__content__top__filter__link"
  }, "Free (8)")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "templatiq__content__top__filter__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "templatiq__content__top__filter__link"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: _icon_crown_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    width: 12,
    height: 12
  }), "Pro (16)")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__content__top__search"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__.SearchBoxStyle, {
    className: "templatiq__content__top__searchbox"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "templatiq__content__top__searchbox__button"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: _icon_search_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    width: 18,
    height: 18
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "templatiq__content__top__searchbox__input",
    placeholder: "Search "
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "templatiq__content__wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SingleTemplate__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}

/***/ }),

/***/ "./src/js/modules/TemplatePack/style.js":
/*!**********************************************!*\
  !*** ./src/js/modules/TemplatePack/style.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplatePackFilterStyle: () => (/* binding */ TemplatePackFilterStyle),
/* harmony export */   TemplatePackStyle: () => (/* binding */ TemplatePackStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const TemplatePackStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    .templatiq__content__top {
        display: flex;
        gap: 24px;
        justify-content: space-between;
        .templatiq__content__top__filter__title {
            font-size: 16px;
            font-weight: 600;
            color: #101014;
        }
        .templatiq__content__top__filter {
            display: flex;
            gap: 20px;
            align-items: center;
        }
    }
`;
const TemplatePackFilterStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul`
    display: flex;
    gap: 4px;
    padding: 4px 10px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 16px #10101404;
    .templatiq__content__top__filter__item {
        display: flex;
    }
    .templatiq__content__top__filter__link {
        display: flex;
        gap: 8px;
        align-items: center;
        padding: 7px 12px;
        border-radius: 8px;
        color: #57575F;
        font-size: 12px;
        line-height: 1;
        text-transform: uppercase;
        background: transparent;
        transition: background 0.3s ease, color 0.3s ease;
        &.active,
        &:hover {
            color: #ffffff;
            background: #8941FF;
        }
    }

`;


/***/ }),

/***/ "./src/js/queryStore/index.js":
/*!************************************!*\
  !*** ./src/js/queryStore/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/query-core/build/lib/queryClient.mjs");

const queryStore = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (queryStore);

/***/ }),

/***/ "./src/js/style.js":
/*!*************************!*\
  !*** ./src/js/style.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalAlertStyle: () => (/* binding */ ModalAlertStyle),
/* harmony export */   MultiSelectStyle: () => (/* binding */ MultiSelectStyle),
/* harmony export */   SearchBoxStyle: () => (/* binding */ SearchBoxStyle),
/* harmony export */   SingleSelectStyle: () => (/* binding */ SingleSelectStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const SearchBoxStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    position: relative;
    height: 38px;
    padding: 0;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 8px;
    button {
        position: absolute;
        inset-inline-start: 16px;
        top: 10px;
        padding: 0;
        background: transparent;
    }
    input {
        width: 100%;
        height: 100%;
        border: none;
        padding: 0 42px;
        background: transparent;
        box-shadow: 0 4px 16px #10101404;
        outline: none;
        transition: box-shadow 0.3s ease;
        &::placeholder {
            color: #94949A;
        }
        &:focus {
            box-shadow: 0 4px 16px #8941FF25;
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
            & + .templatiq-single-select__option{
                font-weight: 500;
                color: var(--templatiq-color-dark);
                &:before{
                    border: 5px solid var(--templatiq-color-primary);
                }
            }
        }
    }
    .templatiq-single-select__option{
        position: relative;
        border-radius: 10px;
        padding: 14px 15px 14px 45px;
        width: 100%;
        min-height: 18px;
        display: flex;
        align-items: center;
        max-width: 290px;
        background-color: var(--templatiq-color-bg-light);
        color: var(--templatiq-color-gray);
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
            & + .templatiq-multi-select__option{
                svg{
                    display: block;
                }
                &:before{
                    border-color: var(--templatiq-color-primary);
                    background-color: var(--templatiq-color-primary);
                }
            }
        }
    }
    .templatiq-multi-select__option{
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 10px;
        padding: 14px 15px 14px 45px;
        width: 100%;
        max-width: 290px;
        min-height: 18px;
        background-color: var(--templatiq-color-bg-light);
        font-size: 14px;
        &:before{
            position: absolute;
            inset-inline-start: 15px;
            width: 18px;
            height: 18px;
            border-radius: 5px;
            background-color: transparent;
            content: '';
            border: 2px solid var(--templatiq-color-extra-light);
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
                fill: var(--templatiq-color-white);
            }
        }
    }
`;
const ModalAlertStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    padding: 84px 0 0;
    .templatiq-modal-action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 30px;
        background-color: var(--templatiq-color-bg-light);
        .templatiq-btn{
            margin: 0 5px;
        }
        &.templatiq-modal-filter-action{
            .templatiq-modal-action__cancel{
                background: transparent;
                border: 0 none;
                padding: 0;
                color: var(--templatiq-color-light-gray);
                &:hover{
                    color: var(--templatiq-color-dark);
                }
            }
        }
        &.templatiq-delete-alert-modal-action,
        &.templatiq-conversation-delete-action,
        &.templatiq-form-delete-alert-action,
        &.templatiq-response-delete-alert-action,
        &.templatiq-delete-tag-alert-action{
            justify-content: flex-end;
            .templatiq-btn{
                border-radius: 10px;
                min-height: 40px;
            }
        }
    }

    //filter modal
    .templatiq-modal-filter-inner{
        padding: 0 30px 30px;
        .templatiq-modal-filter__tags-label{
            font-size: 16px;
            font-weight: 600;
            color: var(--templatiq-color-dark);
            margin-bottom: 20px;
            display: block;
        }
        .templatiq-modal-filter__tags-list{
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
        .templatiq-modal-filter__tags-item{
            flex: 0 0 50%;
            margin-bottom: 18px;
            .templatiq-checkbox{
                display: flex;
                gap: 12px;
                label{
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--templatiq-color-gray);
                }
            }
        }
        .templatiq-show-more{
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: var(--templatiq-color-dark);
            margin-top: 0;
            text-decoration: underline;
            cursor: pointer;
            &--active{
                margin-top: 18px;
            }
        }
    }
    .templatiq-modal-action{}

    .templatiq-session-expired__content{
        margin-top: -84px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 50px;
        h2{
            margin: 30px 0 20px;
            font-size: 24px;
            font-weight: 500;
            color: var(--templatiq-color-dark);
        }
        p{
            margin: 0 0 50px;
        }
    }
`;


/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noTextChildNodes: () => (/* binding */ noTextChildNodes),
/* harmony export */   possibleStandardNames: () => (/* binding */ possibleStandardNames),
/* harmony export */   randomString: () => (/* binding */ randomString),
/* harmony export */   styleToObject: () => (/* binding */ styleToObject)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertFromNode: () => (/* binding */ convertFromNode),
/* harmony export */   convertFromString: () => (/* binding */ convertFromString),
/* harmony export */   "default": () => (/* binding */ convert)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STATUS: () => (/* binding */ STATUS),
/* harmony export */   canUseDOM: () => (/* binding */ canUseDOM),
/* harmony export */   isSupportedEnvironment: () => (/* binding */ isSupportedEnvironment),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   randomString: () => (/* binding */ randomString),
/* harmony export */   supportsInlineSVG: () => (/* binding */ supportsInlineSVG)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheStore: () => (/* binding */ cacheStore),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineSVG);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-router-dom/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/dist/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortedDeferredError: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError),
/* harmony export */   Await: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Await),
/* harmony export */   BrowserRouter: () => (/* binding */ BrowserRouter),
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   HashRouter: () => (/* binding */ HashRouter),
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   MemoryRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.MemoryRouter),
/* harmony export */   NavLink: () => (/* binding */ NavLink),
/* harmony export */   Navigate: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Navigate),
/* harmony export */   NavigationType: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Action),
/* harmony export */   Outlet: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Outlet),
/* harmony export */   Route: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Route),
/* harmony export */   Router: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Router),
/* harmony export */   RouterProvider: () => (/* binding */ RouterProvider),
/* harmony export */   Routes: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Routes),
/* harmony export */   ScrollRestoration: () => (/* binding */ ScrollRestoration),
/* harmony export */   UNSAFE_DataRouterContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterContext),
/* harmony export */   UNSAFE_DataRouterStateContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterStateContext),
/* harmony export */   UNSAFE_FetchersContext: () => (/* binding */ FetchersContext),
/* harmony export */   UNSAFE_LocationContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_LocationContext),
/* harmony export */   UNSAFE_NavigationContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext),
/* harmony export */   UNSAFE_RouteContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_RouteContext),
/* harmony export */   UNSAFE_ViewTransitionContext: () => (/* binding */ ViewTransitionContext),
/* harmony export */   UNSAFE_useRouteId: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_useRouteId),
/* harmony export */   UNSAFE_useScrollRestoration: () => (/* binding */ useScrollRestoration),
/* harmony export */   createBrowserRouter: () => (/* binding */ createBrowserRouter),
/* harmony export */   createHashRouter: () => (/* binding */ createHashRouter),
/* harmony export */   createMemoryRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createMemoryRouter),
/* harmony export */   createPath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createPath),
/* harmony export */   createRoutesFromChildren: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createRoutesFromChildren),
/* harmony export */   createRoutesFromElements: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createRoutesFromElements),
/* harmony export */   createSearchParams: () => (/* binding */ createSearchParams),
/* harmony export */   defer: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.defer),
/* harmony export */   generatePath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.generatePath),
/* harmony export */   isRouteErrorResponse: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse),
/* harmony export */   json: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.json),
/* harmony export */   matchPath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath),
/* harmony export */   matchRoutes: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes),
/* harmony export */   parsePath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.parsePath),
/* harmony export */   redirect: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.redirect),
/* harmony export */   redirectDocument: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.redirectDocument),
/* harmony export */   renderMatches: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.renderMatches),
/* harmony export */   resolvePath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath),
/* harmony export */   unstable_HistoryRouter: () => (/* binding */ HistoryRouter),
/* harmony export */   unstable_useBlocker: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.unstable_useBlocker),
/* harmony export */   unstable_usePrompt: () => (/* binding */ usePrompt),
/* harmony export */   unstable_useViewTransitionState: () => (/* binding */ useViewTransitionState),
/* harmony export */   useActionData: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useActionData),
/* harmony export */   useAsyncError: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useAsyncError),
/* harmony export */   useAsyncValue: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useAsyncValue),
/* harmony export */   useBeforeUnload: () => (/* binding */ useBeforeUnload),
/* harmony export */   useFetcher: () => (/* binding */ useFetcher),
/* harmony export */   useFetchers: () => (/* binding */ useFetchers),
/* harmony export */   useFormAction: () => (/* binding */ useFormAction),
/* harmony export */   useHref: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useHref),
/* harmony export */   useInRouterContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useInRouterContext),
/* harmony export */   useLinkClickHandler: () => (/* binding */ useLinkClickHandler),
/* harmony export */   useLoaderData: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useLoaderData),
/* harmony export */   useLocation: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation),
/* harmony export */   useMatch: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useMatch),
/* harmony export */   useMatches: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useMatches),
/* harmony export */   useNavigate: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate),
/* harmony export */   useNavigation: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigation),
/* harmony export */   useNavigationType: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigationType),
/* harmony export */   useOutlet: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useOutlet),
/* harmony export */   useOutletContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useOutletContext),
/* harmony export */   useParams: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useParams),
/* harmony export */   useResolvedPath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath),
/* harmony export */   useRevalidator: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRevalidator),
/* harmony export */   useRouteError: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRouteError),
/* harmony export */   useRouteLoaderData: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRouteLoaderData),
/* harmony export */   useRoutes: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRoutes),
/* harmony export */   useSearchParams: () => (/* binding */ useSearchParams),
/* harmony export */   useSubmit: () => (/* binding */ useSubmit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @remix-run/router */ "./node_modules/@remix-run/router/dist/router.js");
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (
  // Ignore everything but left clicks
  !target || target === "_self") &&
  // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }
  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams) {
    // Use `defaultSearchParams.forEach(...)` here instead of iterating of
    // `defaultSearchParams.keys()` to work-around a bug in Firefox related to
    // web extensions. Relevant Bugzilla tickets:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
    defaultSearchParams.forEach((_, key) => {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    });
  }
  return searchParams;
}
// One-time check for submitter support
let _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(document.createElement("form"),
      // @ts-expect-error if FormData supports the submitter parameter, this will throw
      0);
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
const supportedFormEncTypes = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
     true ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "\"" + encType + "\" is not a valid `encType` for `<Form>`/`<fetcher.Form>` " + ("and will default to \"" + defaultEncType + "\"")) : 0;
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("action");
    action = attr ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    }
    // <button>/<input type="submit"> may override attributes of <form>
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    // Build a FormData object populated from a form and submitter
    formData = new FormData(form, target);
    // If this browser doesn't support the `FormData(el, submitter)` format,
    // then tack on the submitter value at the end.  This is a lightweight
    // solution that is not 100% spec compliant.  For complete support in older
    // browsers, consider using the `formdata-submitter-polyfill` package
    if (!isFormDataSubmitterSupported()) {
      let {
        name,
        type,
        value
      } = target;
      if (type === "image") {
        let prefix = name ? name + "." : "";
        formData.append(prefix + "x", "0");
        formData.append(prefix + "y", "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  // Send body for <Form encType="text/plain" so we encode it into text
  if (formData && encType === "text/plain") {
    body = formData;
    formData = undefined;
  }
  return {
    action,
    method: method.toLowerCase(),
    encType,
    formData,
    body
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
  _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
  _excluded3 = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"];
function createBrowserRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createBrowserHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_mapRouteProperties,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function createHashRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createHashHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_mapRouteProperties,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function parseHydrationData() {
  var _window;
  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
  if (state && state.errors) {
    state = _extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    // Hey you!  If you change this, please change the corresponding logic in
    // serializeErrors in react-router-dom/server.tsx :)
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            // @ts-expect-error
            let error = new ErrorConstructor(val.message);
            // Wipe away the client-side stack trace.  Nothing to fill it in with
            // because we don't serialize SSR stack traces for security reasons
            error.stack = "";
            serialized[key] = error;
          } catch (e) {
            // no-op - fall through and create a normal Error
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        // Wipe away the client-side stack trace.  Nothing to fill it in with
        // because we don't serialize SSR stack traces for security reasons
        error.stack = "";
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
const ViewTransitionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  isTransitioning: false
});
if (true) {
  ViewTransitionContext.displayName = "ViewTransition";
}
const FetchersContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(new Map());
if (true) {
  FetchersContext.displayName = "Fetchers";
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_0__[START_TRANSITION];
function startTransitionSafe(cb) {
  if (startTransitionImpl) {
    startTransitionImpl(cb);
  } else {
    cb();
  }
}
class Deferred {
  constructor() {
    this.status = "pending";
    this.promise = new Promise((resolve, reject) => {
      this.resolve = value => {
        if (this.status === "pending") {
          this.status = "resolved";
          resolve(value);
        }
      };
      this.reject = reason => {
        if (this.status === "pending") {
          this.status = "rejected";
          reject(reason);
        }
      };
    });
  }
}
/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router,
    future
  } = _ref;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
  let [pendingState, setPendingState] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [vtContext, setVtContext] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    isTransitioning: false
  });
  let [renderDfd, setRenderDfd] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [transition, setTransition] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [interruption, setInterruption] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map());
  let {
    v7_startTransition
  } = future || {};
  let optInStartTransition = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(cb => {
    if (v7_startTransition) {
      startTransitionSafe(cb);
    } else {
      cb();
    }
  }, [v7_startTransition]);
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState, _ref2) => {
    let {
      deletedFetchers,
      unstable_viewTransitionOpts: viewTransitionOpts
    } = _ref2;
    deletedFetchers.forEach(key => fetcherData.current.delete(key));
    newState.fetchers.forEach((fetcher, key) => {
      if (fetcher.data !== undefined) {
        fetcherData.current.set(key, fetcher.data);
      }
    });
    if (!viewTransitionOpts || router.window == null || typeof router.window.document.startViewTransition !== "function") {
      // Mid-navigation state update, or startViewTransition isn't available
      optInStartTransition(() => setStateImpl(newState));
    } else if (transition && renderDfd) {
      // Interrupting an in-progress transition, cancel and let everything flush
      // out, and then kick off a new transition from the interruption state
      renderDfd.resolve();
      transition.skipTransition();
      setInterruption({
        state: newState,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    } else {
      // Completed navigation update with opted-in view transitions, let 'er rip
      setPendingState(newState);
      setVtContext({
        isTransitioning: true,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    }
  }, [router.window, transition, renderDfd, fetcherData, optInStartTransition]);
  // Need to use a layout effect here so we are subscribed early enough to
  // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  // When we start a view transition, create a Deferred we can use for the
  // eventual "completed" render
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (vtContext.isTransitioning) {
      setRenderDfd(new Deferred());
    }
  }, [vtContext.isTransitioning]);
  // Once the deferred is created, kick off startViewTransition() to update the
  // DOM and then wait on the Deferred to resolve (indicating the DOM update has
  // happened)
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (renderDfd && pendingState && router.window) {
      let newState = pendingState;
      let renderPromise = renderDfd.promise;
      let transition = router.window.document.startViewTransition(async () => {
        optInStartTransition(() => setStateImpl(newState));
        await renderPromise;
      });
      transition.finished.finally(() => {
        setRenderDfd(undefined);
        setTransition(undefined);
        setPendingState(undefined);
        setVtContext({
          isTransitioning: false
        });
      });
      setTransition(transition);
    }
  }, [optInStartTransition, pendingState, renderDfd, router.window]);
  // When the new location finally renders and is committed to the DOM, this
  // effect will run to resolve the transition
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
      renderDfd.resolve();
    }
  }, [renderDfd, transition, state.location, pendingState]);
  // If we get interrupted with a new navigation during a transition, we skip
  // the active transition, let it cleanup, then kick it off again here
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!vtContext.isTransitioning && interruption) {
      setPendingState(interruption.state);
      setVtContext({
        isTransitioning: true,
        currentLocation: interruption.currentLocation,
        nextLocation: interruption.nextLocation
      });
      setInterruption(undefined);
    }
  }, [vtContext.isTransitioning, interruption]);
  let navigator = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]);
  // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FetchersContext.Provider, {
    value: fetcherData.current
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTransitionContext.Provider, {
    value: vtContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Router, {
    basename: basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator: navigator
  }, state.initialized ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRoutes, {
    routes: router.routes,
    state: state
  }) : fallbackElement))))), null);
}
function DataRoutes(_ref3) {
  let {
    routes,
    state
  } = _ref3;
  return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_useRoutesImpl)(routes, undefined, state);
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref4) {
  let {
    basename,
    children,
    future,
    window
  } = _ref4;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createBrowserHistory)({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref5) {
  let {
    basename,
    children,
    future,
    window
  } = _ref5;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createHashHistory)({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref6) {
  let {
    basename,
    children,
    future,
    history
  } = _ref6;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
if (true) {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware `<a>`.
 */
const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
      onClick,
      relative,
      reloadDocument,
      replace,
      state,
      target,
      to,
      preventScrollReset,
      unstable_viewTransition
    } = _ref7,
    rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext);
  // Rendered into <a href> for absolute URLs
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    // Render the absolute href server- and client-side
    absoluteHref = to;
    // Only check for external origins client-side
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          // Strip the protocol/origin/basename for same-origin absolute URLs
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        // We can't do external URL detection without a valid URL
         true ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "<Link to=\"" + to + "\"> contains an invalid URL which will probably break " + "when clicked - please update to a valid URL path.") : 0;
      }
    }
  }
  // Rendered into <a href> for relative URLs
  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useHref)(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative,
    unstable_viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});
if (true) {
  Link.displayName = "Link";
}
/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function NavLinkWithRef(_ref8, ref) {
  let {
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      unstable_viewTransition,
      children
    } = _ref8,
    rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath)(to, {
    relative: rest.relative
  });
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let routerState = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterStateContext);
  let {
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext);
  let isTransitioning = routerState != null &&
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useViewTransitionState(path) && unstable_viewTransition === true;
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let renderProps = {
    isActive,
    isPending,
    isTransitioning
  };
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp(renderProps);
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null, isTransitioning ? "transitioning" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to,
    unstable_viewTransition: unstable_viewTransition
  }), typeof children === "function" ? children(renderProps) : children);
});
if (true) {
  NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */
const Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref9, forwardedRef) => {
  let {
      fetcherKey,
      navigate,
      reloadDocument,
      replace,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      unstable_viewTransition
    } = _ref9,
    props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
  let submit = useSubmit();
  let formAction = useFormAction(action, {
    relative
  });
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      fetcherKey,
      method: submitMethod,
      navigate,
      replace,
      state,
      relative,
      preventScrollReset,
      unstable_viewTransition
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});
if (true) {
  Form.displayName = "Form";
}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */
function ScrollRestoration(_ref10) {
  let {
    getKey,
    storageKey
  } = _ref10;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}
if (true) {
  ScrollRestoration.displayName = "ScrollRestoration";
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmit"] = "useSubmit";
  DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook["UseFetcher"] = "useFetcher";
  DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetcher"] = "useFetcher";
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
// Internal hooks
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterContext);
  !ctx ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterStateContext);
  !state ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return state;
}
// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    unstable_viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath)(to, {
    relative
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set
      let replace = replaceProp !== undefined ? replaceProp : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(location) === (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative,
        unstable_viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, unstable_viewTransition]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */
function useSearchParams(defaultInit) {
   true ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : 0;
  let defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let searchParams = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() =>
  // Only merge in the defaults if we haven't yet called setSearchParams.
  // Once we call that we want those to take precedence, otherwise you can't
  // remove a param with setSearchParams({}) if it has an initial value
  getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  let setSearchParams = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
function validateClientSideSubmission() {
  if (typeof document === "undefined") {
    throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
  }
}
let fetcherId = 0;
let getUniqueFetcherId = () => "__" + String(++fetcherId) + "__";
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */
function useSubmit() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmit);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext);
  let currentRouteId = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_useRouteId)();
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }
    validateClientSideSubmission();
    let {
      action,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    if (options.navigate === false) {
      let key = options.fetcherKey || getUniqueFetcherId();
      router.fetch(key, currentRouteId, options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType
      });
    } else {
      router.navigate(options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        replace: options.replace,
        state: options.state,
        fromRouteId: currentRouteId,
        unstable_viewTransition: options.unstable_viewTransition
      });
    }
  }, [router, basename, currentRouteId]);
}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext);
  let routeContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_RouteContext);
  !routeContext ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useFormAction must be used inside a RouteContext") : 0 : void 0;
  let [match] = routeContext.matches.slice(-1);
  // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath
  let path = _extends({}, (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath)(action ? action : ".", {
    relative
  }));
  // Previously we set the default action to ".". The problem with this is that
  // `useResolvedPath(".")` excludes search params of the resolved URL. This is
  // the intended behavior of when "." is specifically provided as
  // the form action, but inconsistent w/ browsers when the action is omitted.
  // https://github.com/remix-run/remix/issues/927
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  if (action == null) {
    // Safe to write to this directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    path.search = location.search;
    // When grabbing search params from the URL, remove the automatically
    // inserted ?index param so we match the useResolvedPath search behavior
    // which would not include ?index
    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, path.pathname]);
  }
  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(path);
}
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */
function useFetcher(_temp3) {
  var _route$matches;
  let {
    key
  } = _temp3 === void 0 ? {} : _temp3;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseFetcher);
  let state = useDataRouterState(DataRouterStateHook.UseFetcher);
  let fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FetchersContext);
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_RouteContext);
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !fetcherData ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useFetcher must be used inside a FetchersContext") : 0 : void 0;
  !route ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useFetcher must be used inside a RouteContext") : 0 : void 0;
  !(routeId != null) ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useFetcher can only be used on routes that contain a unique \"id\"") : 0 : void 0;
  // Fetcher key handling
  let [fetcherKey, setFetcherKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState(key || "");
  if (!fetcherKey) {
    setFetcherKey(getUniqueFetcherId());
  }
  // Registration/cleanup
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    router.getFetcher(fetcherKey);
    return () => {
      // Tell the router we've unmounted - if v7_fetcherPersist is enabled this
      // will not delete immediately but instead queue up a delete after the
      // fetcher returns to an `idle` state
      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  // Fetcher additions
  let load = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(href => {
    !routeId ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "No routeId available for fetcher.load()") : 0 : void 0;
    router.fetch(fetcherKey, routeId, href);
  }, [fetcherKey, routeId, router]);
  let submitImpl = useSubmit();
  let submit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((target, opts) => {
    submitImpl(target, _extends({}, opts, {
      navigate: false,
      fetcherKey
    }));
  }, [fetcherKey, submitImpl]);
  let FetcherForm = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let FetcherForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Form, _extends({}, props, {
        navigate: false,
        fetcherKey: fetcherKey,
        ref: ref
      }));
    });
    if (true) {
      FetcherForm.displayName = "fetcher.Form";
    }
    return FetcherForm;
  }, [fetcherKey]);
  // Exposed FetcherWithComponents
  let fetcher = state.fetchers.get(fetcherKey) || react_router__WEBPACK_IMPORTED_MODULE_1__.IDLE_FETCHER;
  let data = fetcherData.get(fetcherKey);
  let fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => _extends({
    Form: FetcherForm,
    submit,
    load
  }, fetcher, {
    data
  }), [FetcherForm, submit, load, fetcher, data]);
  return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */
function useFetchers() {
  let state = useDataRouterState(DataRouterStateHook.UseFetchers);
  return Array.from(state.fetchers.entries()).map(_ref11 => {
    let [key, fetcher] = _ref11;
    return _extends({}, fetcher, {
      key
    });
  });
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */
function useScrollRestoration(_temp4) {
  let {
    getKey,
    storageKey
  } = _temp4 === void 0 ? {} : _temp4;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
  let {
    restoreScrollPosition,
    preventScrollReset
  } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let matches = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useMatches)();
  let navigation = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigation)();
  // Trigger manual scroll restoration while we're active
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  // Save positions on pagehide
  usePageHide(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }
    try {
      sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    } catch (error) {
       true ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (" + error + ").") : 0;
    }
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches]));
  // Read in any saved scroll locations
  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {
        // no-op, use default empty object
      }
    }, [storageKey]);
    // Enable scroll restoration in the router
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      let getKeyWithoutBasename = getKey && basename !== "/" ? (location, matches) => getKey( // Strip the basename to match useLocation()
      _extends({}, location, {
        pathname: (0,react_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(location.pathname, basename) || location.pathname
      }), matches) : getKey;
      let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKeyWithoutBasename);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, basename, getKey]);
    // Restore scrolling when state.restoreScrollPosition changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      // Explicit false means don't do anything (used for submissions)
      if (restoreScrollPosition === false) {
        return;
      }
      // been here before, scroll to it
      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      }
      // try to scroll to the hash
      if (location.hash) {
        let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      // Don't reset if this navigation opted out
      if (preventScrollReset === true) {
        return;
      }
      // otherwise go to the top on new locations
      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */
function useBeforeUnload(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */
function usePageHide(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */
function usePrompt(_ref12) {
  let {
    when,
    message
  } = _ref12;
  let blocker = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.unstable_useBlocker)(when);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);
      if (proceed) {
        // This timeout is needed to avoid a weird "race" on POP navigations
        // between the `window.history` revert navigation and the result of
        // `window.confirm`
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
}
/**
 * Return a boolean indicating if there is an active view transition to the
 * given href.  You can use this value to render CSS classes or viewTransitionName
 * styles onto your elements
 *
 * @param href The destination href
 * @param [opts.relative] Relative routing type ("route" | "path")
 */
function useViewTransitionState(to, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let vtContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ViewTransitionContext);
  !(vtContext != null) ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  " + "Did you accidentally import `RouterProvider` from `react-router`?") : 0 : void 0;
  let {
    basename
  } = useDataRouterContext(DataRouterHook.useViewTransitionState);
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath)(to, {
    relative: opts.relative
  });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  // Transition is active if we're going to or coming from the indicated
  // destination.  This ensures that other PUSH navigations that reverse
  // an indicated transition apply.  I.e., on the list view you have:
  //
  //   <NavLink to="/details/1" unstable_viewTransition>
  //
  // If you click the breadcrumb back to the list view:
  //
  //   <NavLink to="/list" unstable_viewTransition>
  //
  // We should apply the transition because it's indicated as active going
  // from /list -> /details/1 and therefore should be active on the reverse
  // (even though this isn't strictly a POP reverse)
  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath)(path.pathname, nextPath) != null || (0,react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath)(path.pathname, currentPath) != null;
}
//#endregion


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/react-router/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router/dist/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortedDeferredError: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError),
/* harmony export */   Await: () => (/* binding */ Await),
/* harmony export */   MemoryRouter: () => (/* binding */ MemoryRouter),
/* harmony export */   Navigate: () => (/* binding */ Navigate),
/* harmony export */   NavigationType: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action),
/* harmony export */   Outlet: () => (/* binding */ Outlet),
/* harmony export */   Route: () => (/* binding */ Route),
/* harmony export */   Router: () => (/* binding */ Router),
/* harmony export */   RouterProvider: () => (/* binding */ RouterProvider),
/* harmony export */   Routes: () => (/* binding */ Routes),
/* harmony export */   UNSAFE_DataRouterContext: () => (/* binding */ DataRouterContext),
/* harmony export */   UNSAFE_DataRouterStateContext: () => (/* binding */ DataRouterStateContext),
/* harmony export */   UNSAFE_LocationContext: () => (/* binding */ LocationContext),
/* harmony export */   UNSAFE_NavigationContext: () => (/* binding */ NavigationContext),
/* harmony export */   UNSAFE_RouteContext: () => (/* binding */ RouteContext),
/* harmony export */   UNSAFE_mapRouteProperties: () => (/* binding */ mapRouteProperties),
/* harmony export */   UNSAFE_useRouteId: () => (/* binding */ useRouteId),
/* harmony export */   UNSAFE_useRoutesImpl: () => (/* binding */ useRoutesImpl),
/* harmony export */   createMemoryRouter: () => (/* binding */ createMemoryRouter),
/* harmony export */   createPath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createPath),
/* harmony export */   createRoutesFromChildren: () => (/* binding */ createRoutesFromChildren),
/* harmony export */   createRoutesFromElements: () => (/* binding */ createRoutesFromChildren),
/* harmony export */   defer: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.defer),
/* harmony export */   generatePath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.generatePath),
/* harmony export */   isRouteErrorResponse: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse),
/* harmony export */   json: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.json),
/* harmony export */   matchPath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath),
/* harmony export */   matchRoutes: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes),
/* harmony export */   parsePath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath),
/* harmony export */   redirect: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirect),
/* harmony export */   redirectDocument: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirectDocument),
/* harmony export */   renderMatches: () => (/* binding */ renderMatches),
/* harmony export */   resolvePath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath),
/* harmony export */   unstable_useBlocker: () => (/* binding */ useBlocker),
/* harmony export */   useActionData: () => (/* binding */ useActionData),
/* harmony export */   useAsyncError: () => (/* binding */ useAsyncError),
/* harmony export */   useAsyncValue: () => (/* binding */ useAsyncValue),
/* harmony export */   useHref: () => (/* binding */ useHref),
/* harmony export */   useInRouterContext: () => (/* binding */ useInRouterContext),
/* harmony export */   useLoaderData: () => (/* binding */ useLoaderData),
/* harmony export */   useLocation: () => (/* binding */ useLocation),
/* harmony export */   useMatch: () => (/* binding */ useMatch),
/* harmony export */   useMatches: () => (/* binding */ useMatches),
/* harmony export */   useNavigate: () => (/* binding */ useNavigate),
/* harmony export */   useNavigation: () => (/* binding */ useNavigation),
/* harmony export */   useNavigationType: () => (/* binding */ useNavigationType),
/* harmony export */   useOutlet: () => (/* binding */ useOutlet),
/* harmony export */   useOutletContext: () => (/* binding */ useOutletContext),
/* harmony export */   useParams: () => (/* binding */ useParams),
/* harmony export */   useResolvedPath: () => (/* binding */ useResolvedPath),
/* harmony export */   useRevalidator: () => (/* binding */ useRevalidator),
/* harmony export */   useRouteError: () => (/* binding */ useRouteError),
/* harmony export */   useRouteLoaderData: () => (/* binding */ useRouteLoaderData),
/* harmony export */   useRoutes: () => (/* binding */ useRoutes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @remix-run/router */ "./node_modules/@remix-run/router/dist/router.js");
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const DataRouterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  AwaitContext.displayName = "Await";
}

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */

const NavigationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  LocationContext.displayName = "Location";
}
const RouteContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
if (true) {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  RouteErrorContext.displayName = "RouteError";
}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;

  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}

/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */
function useInRouterContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext) != null;
}

/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */
function useLocation() {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : 0 : void 0;
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location;
}

/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */
function useNavigationType() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).navigationType;
}

/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/hooks/use-match
 */
function useMatch(pattern) {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    pathname
  } = useLocation();
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath)(pattern, pathname), [pathname, pattern]);
}

/**
 * The interface for the navigate() function returned from useNavigate().
 */

const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.";

// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
  let isStatic = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static;
  if (!isStatic) {
    // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(cb);
  }
}

/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */
function useNavigate() {
  let {
    isDataRoute
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : 0 : void 0;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase));
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our history listener yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");

    // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history (but only if we're not in a data router,
    // otherwise it'll prepend the basename inside of the router).
    // If this is a root navigation, then we navigate to the raw basename
    // which allows the basename to have full control over the presence of a
    // trailing slash on root links
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
const OutletContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */
function useOutletContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(OutletContext);
}

/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */
function useOutlet(context) {
  let outlet = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext).outlet;
  if (outlet) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}

/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */
function useParams() {
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}

/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase));
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}

/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}

// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState) {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (true) {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : 0 : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes)(routes, {
    pathname: remainingPathname
  });
  if (true) {
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : 0;
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" " + "does not have an element or Component. This means it will render an <Outlet /> with a " + "null value by default resulting in an \"empty\" page.") : 0;
  }
  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterState);

  // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.
  if (locationArg && renderedMatches) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  if (true) {
    console.error("Error handled by React Router default ErrorBoundary:", error);
    devInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      style: codeStyles
    }, "ErrorBoundary"), " or", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      style: codeStyles
    }, "errorElement"), " prop on your route."));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }
  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }

    // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.
    return {
      error: props.error || state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);

  // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  var _dataRouterState2;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (matches == null) {
    var _dataRouterState;
    if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;

  // If we have data errors, trim matches to the highest error boundary
  let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : 0 : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    // Only data routers handle errors
    let errorElement = null;
    if (dataRouterState) {
      errorElement = match.route.errorElement || defaultErrorElement;
    }
    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (match.route.Component) {
        // Note: This is a de-optimized path since React won't re-use the
        // ReactElement since it's identity changes with each new
        // React.createElement call.  We keep this so folks can use
        // `<Route Component={...}>` in `<Routes>` but generally `Component`
        // usage is only advised in `RouterProvider` when we can convert it to
        // `element` ahead of time.
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderedRoute, {
        match: match,
        routeContext: {
          outlet,
          matches,
          isDataRoute: dataRouterState != null
        },
        children: children
      });
    };
    // Only wrap in an error boundary within data router usages when we have an
    // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
    // an ancestor ErrorBoundary/errorElement
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook = /*#__PURE__*/function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
  DataRouterHook["UseNavigateStable"] = "useNavigate";
  return DataRouterHook;
}(DataRouterHook || {});
var DataRouterStateHook = /*#__PURE__*/function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook["UseRouteId"] = "useRouteId";
  return DataRouterStateHook;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  !ctx ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
  !state ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  !route ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return route;
}

// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, hookName + " can only be used on routes that contain a unique \"id\"") : 0 : void 0;
  return thisRoute.route.id;
}

/**
 * Returns the ID for the nearest contextual route
 */
function useRouteId() {
  return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}

/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */
function useNavigation() {
  let state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}

/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */
function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  }), [dataRouterContext.router.revalidate, state.revalidation]);
}

/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */
function useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterStateHook.UseMatches);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => matches.map(m => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_convertRouteMatchToUiMatch)(m, loaderData)), [matches, loaderData]);
}

/**
 * Returns the loader data for the nearest ancestor Route loader
 */
function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return undefined;
  }
  return state.loaderData[routeId];
}

/**
 * Returns the loaderData for the given routeId
 */
function useRouteLoaderData(routeId) {
  let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}

/**
 * Returns the action data for the nearest ancestor Route action
 */
function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  !route ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useActionData must be used inside a RouteContext") : 0 : void 0;
  return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}

/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */
function useRouteError() {
  var _state$errors;
  let error = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);

  // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary
  if (error) {
    return error;
  }

  // Otherwise look for errors from our data router state
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}

/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */
function useAsyncValue() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}

/**
 * Returns the error from the nearest ancestor `<Await />` value
 */
function useAsyncError() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
let blockerId = 0;

/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */
function useBlocker(shouldBlock) {
  let {
    router,
    basename
  } = useDataRouterContext(DataRouterHook.UseBlocker);
  let state = useDataRouterState(DataRouterStateHook.UseBlocker);
  let [blockerKey, setBlockerKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  let blockerFunction = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(arg => {
    if (typeof shouldBlock !== "function") {
      return !!shouldBlock;
    }
    if (basename === "/") {
      return shouldBlock(arg);
    }

    // If they provided us a function and we've got an active basename, strip
    // it from the locations we expose to the user to match the behavior of
    // useLocation
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = arg;
    return shouldBlock({
      currentLocation: _extends({}, currentLocation, {
        pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(currentLocation.pathname, basename) || currentLocation.pathname
      }),
      nextLocation: _extends({}, nextLocation, {
        pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(nextLocation.pathname, basename) || nextLocation.pathname
      }),
      historyAction
    });
  }, [basename, shouldBlock]);

  // This effect is in charge of blocker key assignment and deletion (which is
  // tightly coupled to the key)
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let key = String(++blockerId);
    setBlockerKey(key);
    return () => router.deleteBlocker(key);
  }, [router]);

  // This effect handles assigning the blockerFunction.  This is to handle
  // unstable blocker function identities, and happens only after the prior
  // effect so we don't get an orphaned blockerFunction in the router with a
  // key of "".  Until then we just have the IDLE_BLOCKER.
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blockerKey !== "") {
      router.getBlocker(blockerKey, blockerFunction);
    }
  }, [router, blockerKey, blockerFunction]);

  // Prefer the blocker from `state` not `router.state` since DataRouterContext
  // is memoized so this ensures we update on blocker state updates
  return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.IDLE_BLOCKER;
}

/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseNavigateStable);
  let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our router subscriber yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends({
        fromRouteId: id
      }, options));
    }
  }, [router, id]);
  return navigate;
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, message) : 0;
  }
}

/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_0__[START_TRANSITION];

/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router,
    future
  } = _ref;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    if (v7_startTransition && startTransitionImpl) {
      startTransitionImpl(() => setStateImpl(newState));
    } else {
      setStateImpl(newState);
    }
  }, [setStateImpl, v7_startTransition]);

  // Need to use a layout effect here so we are subscribed early enough to
  // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  let navigator = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]);

  // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
    basename: basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator: navigator
  }, state.initialized ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRoutes, {
    routes: router.routes,
    state: state
  }) : fallbackElement))), null);
}
function DataRoutes(_ref2) {
  let {
    routes,
    state
  } = _ref2;
  return useRoutesImpl(routes, undefined, state);
}
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */
function MemoryRouter(_ref3) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex,
    future
  } = _ref3;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
function Navigate(_ref4) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref4;
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : 0 : void 0;
   true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(!react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : 0;
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let navigate = useNavigate();

  // Resolve the path outside of the effect so that when effects run twice in
  // StrictMode they navigate to the same place
  let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase), locationPathname, relative === "path");
  let jsonPath = JSON.stringify(path);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => navigate(JSON.parse(jsonPath), {
    replace,
    state,
    relative
  }), [navigate, jsonPath, relative, replace, state]);
  return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */
function Route(_props) {
   true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : 0 ;
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref5;
  !!useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : 0 : void 0;

  // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let trailingPathname = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
   true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : 0;
  if (locationContext == null) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
    children: children,
    value: locationContext
  }));
}
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
function Await(_ref7) {
  let {
    children,
    errorElement,
    resolve
  } = _ref7;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitErrorBoundary, {
    resolve: resolve,
    errorElement: errorElement
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus = /*#__PURE__*/function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
  return AwaitRenderStatus;
}(AwaitRenderStatus || {});
const neverSettledPromise = new Promise(() => {});
class AwaitErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("<Await> caught the following error during render", error, errorInfo);
  }
  render() {
    let {
      children,
      errorElement,
      resolve
    } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;
    if (!(resolve instanceof Promise)) {
      // Didn't get a promise - provide as a resolved promise
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_data", {
        get: () => resolve
      });
    } else if (this.state.error) {
      // Caught a render error, provide it as a rejected promise
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_error", {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      // Already tracked promise - check contents
      promise = resolve;
      status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
    } else {
      // Raw (untracked) promise - track it
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, "_tracked", {
        get: () => true
      });
      promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
        get: () => data
      }), error => Object.defineProperty(resolve, "_error", {
        get: () => error
      }));
    }
    if (status === AwaitRenderStatus.error && promise._error instanceof _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError) {
      // Freeze the UI by throwing a never resolved promise
      throw neverSettledPromise;
    }
    if (status === AwaitRenderStatus.error && !errorElement) {
      // No errorElement, throw to the nearest route-level error boundary
      throw promise._error;
    }
    if (status === AwaitRenderStatus.error) {
      // Render via our errorElement
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }
    if (status === AwaitRenderStatus.success) {
      // Render children with resolved value
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
        value: promise,
        children: children
      });
    }

    // Throw to the suspense boundary
    throw promise;
  }
}

/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on `<Await>`
 */
function ResolveAwait(_ref8) {
  let {
    children
  } = _ref8;
  let data = useAsyncValue();
  let toRender = typeof children === "function" ? children(data) : children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, toRender);
}

///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : 0 : void 0;
    !(!element.props.index || !element.props.children) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "An index route cannot have child routes.") : 0 : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}

/**
 * Renders the result of `matchRoutes()` into a React element.
 */
function renderMatches(matches) {
  return _renderMatches(matches);
}

function mapRouteProperties(route) {
  let updates = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
  };
  if (route.Component) {
    if (true) {
      if (route.element) {
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - " + "`Component` will be used.") : 0;
      }
    }
    Object.assign(updates, {
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.Component),
      Component: undefined
    });
  }
  if (route.ErrorBoundary) {
    if (true) {
      if (route.errorElement) {
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - " + "`ErrorBoundary` will be used.") : 0;
      }
    }
    Object.assign(updates, {
      errorElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.ErrorBoundary),
      ErrorBoundary: undefined
    });
  }
  return updates;
}
function createMemoryRouter(routes, opts) {
  return (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes,
    mapRouteProperties
  }).initialize();
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerStyleSheet: () => (/* binding */ ut),
/* harmony export */   StyleSheetConsumer: () => (/* binding */ je),
/* harmony export */   StyleSheetContext: () => (/* binding */ ke),
/* harmony export */   StyleSheetManager: () => (/* binding */ Fe),
/* harmony export */   ThemeConsumer: () => (/* binding */ Ue),
/* harmony export */   ThemeContext: () => (/* binding */ He),
/* harmony export */   ThemeProvider: () => (/* binding */ Xe),
/* harmony export */   __PRIVATE__: () => (/* binding */ pt),
/* harmony export */   createGlobalStyle: () => (/* binding */ at),
/* harmony export */   css: () => (/* binding */ nt),
/* harmony export */   "default": () => (/* binding */ st),
/* harmony export */   isStyledComponent: () => (/* binding */ ee),
/* harmony export */   keyframes: () => (/* binding */ ct),
/* harmony export */   styled: () => (/* binding */ st),
/* harmony export */   useTheme: () => (/* binding */ Je),
/* harmony export */   version: () => (/* binding */ m),
/* harmony export */   withTheme: () => (/* binding */ lt)
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
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/focusManager.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/focusManager.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusManager: () => (/* binding */ FocusManager),
/* harmony export */   focusManager: () => (/* binding */ focusManager)
/* harmony export */ });
/* harmony import */ var _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribable.mjs */ "./node_modules/@tanstack/query-core/build/lib/subscribable.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");



class FocusManager extends _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__.Subscribable {
  constructor() {
    super();

    this.setup = onFocus => {
      // addEventListener does not exist in React Native, but window does
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.isServer && window.addEventListener) {
        const listener = () => onFocus(); // Listen to visibillitychange and focus


        window.addEventListener('visibilitychange', listener, false);
        window.addEventListener('focus', listener, false);
        return () => {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('visibilitychange', listener);
          window.removeEventListener('focus', listener);
        };
      }

      return;
    };
  }

  onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  }

  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;

      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = undefined;
    }
  }

  setEventListener(setup) {
    var _this$cleanup2;

    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(focused => {
      if (typeof focused === 'boolean') {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }

  setFocused(focused) {
    const changed = this.focused !== focused;

    if (changed) {
      this.focused = focused;
      this.onFocus();
    }
  }

  onFocus() {
    this.listeners.forEach(({
      listener
    }) => {
      listener();
    });
  }

  isFocused() {
    if (typeof this.focused === 'boolean') {
      return this.focused;
    } // document global can be unavailable in react native


    if (typeof document === 'undefined') {
      return true;
    }

    return [undefined, 'visible', 'prerender'].includes(document.visibilityState);
  }

}
const focusManager = new FocusManager();


//# sourceMappingURL=focusManager.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/infiniteQueryBehavior.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/infiniteQueryBehavior.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNextPageParam: () => (/* binding */ getNextPageParam),
/* harmony export */   getPreviousPageParam: () => (/* binding */ getPreviousPageParam),
/* harmony export */   hasNextPage: () => (/* binding */ hasNextPage),
/* harmony export */   hasPreviousPage: () => (/* binding */ hasPreviousPage),
/* harmony export */   infiniteQueryBehavior: () => (/* binding */ infiniteQueryBehavior)
/* harmony export */ });
function infiniteQueryBehavior() {
  return {
    onFetch: context => {
      context.fetchFn = () => {
        var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;

        const refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
        const fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
        const pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        const isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'forward';
        const isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'backward';
        const oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        const oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        let newPageParams = oldPageParams;
        let cancelled = false;

        const addSignalProperty = object => {
          Object.defineProperty(object, 'signal', {
            enumerable: true,
            get: () => {
              var _context$signal;

              if ((_context$signal = context.signal) != null && _context$signal.aborted) {
                cancelled = true;
              } else {
                var _context$signal2;

                (_context$signal2 = context.signal) == null ? void 0 : _context$signal2.addEventListener('abort', () => {
                  cancelled = true;
                });
              }

              return context.signal;
            }
          });
        }; // Get query function


        const queryFn = context.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + context.options.queryHash + "'"));

        const buildNewPages = (pages, param, page, previous) => {
          newPageParams = previous ? [param, ...newPageParams] : [...newPageParams, param];
          return previous ? [page, ...pages] : [...pages, page];
        }; // Create function to fetch a page


        const fetchPage = (pages, manual, param, previous) => {
          if (cancelled) {
            return Promise.reject('Cancelled');
          }

          if (typeof param === 'undefined' && !manual && pages.length) {
            return Promise.resolve(pages);
          }

          const queryFnContext = {
            queryKey: context.queryKey,
            pageParam: param,
            meta: context.options.meta
          };
          addSignalProperty(queryFnContext);
          const queryFnResult = queryFn(queryFnContext);
          const promise = Promise.resolve(queryFnResult).then(page => buildNewPages(pages, param, page, previous));
          return promise;
        };

        let promise; // Fetch first page?

        if (!oldPages.length) {
          promise = fetchPage([]);
        } // Fetch next page?
        else if (isFetchingNextPage) {
          const manual = typeof pageParam !== 'undefined';
          const param = manual ? pageParam : getNextPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param);
        } // Fetch previous page?
        else if (isFetchingPreviousPage) {
          const manual = typeof pageParam !== 'undefined';
          const param = manual ? pageParam : getPreviousPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param, true);
        } // Refetch pages
        else {
          newPageParams = [];
          const manual = typeof context.options.getNextPageParam === 'undefined';
          const shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true; // Fetch first page

          promise = shouldFetchFirstPage ? fetchPage([], manual, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0])); // Fetch remaining pages

          for (let i = 1; i < oldPages.length; i++) {
            promise = promise.then(pages => {
              const shouldFetchNextPage = refetchPage && oldPages[i] ? refetchPage(oldPages[i], i, oldPages) : true;

              if (shouldFetchNextPage) {
                const param = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);
                return fetchPage(pages, manual, param);
              }

              return Promise.resolve(buildNewPages(pages, oldPageParams[i], oldPages[i]));
            });
          }
        }

        const finalPromise = promise.then(pages => ({
          pages,
          pageParams: newPageParams
        }));
        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}
/**
 * Checks if there is a next page.
 * Returns `undefined` if it cannot be determined.
 */

function hasNextPage(options, pages) {
  if (options.getNextPageParam && Array.isArray(pages)) {
    const nextPageParam = getNextPageParam(options, pages);
    return typeof nextPageParam !== 'undefined' && nextPageParam !== null && nextPageParam !== false;
  }

  return;
}
/**
 * Checks if there is a previous page.
 * Returns `undefined` if it cannot be determined.
 */

function hasPreviousPage(options, pages) {
  if (options.getPreviousPageParam && Array.isArray(pages)) {
    const previousPageParam = getPreviousPageParam(options, pages);
    return typeof previousPageParam !== 'undefined' && previousPageParam !== null && previousPageParam !== false;
  }

  return;
}


//# sourceMappingURL=infiniteQueryBehavior.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/logger.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/logger.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultLogger: () => (/* binding */ defaultLogger)
/* harmony export */ });
const defaultLogger = console;


//# sourceMappingURL=logger.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/mutation.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/mutation.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mutation: () => (/* binding */ Mutation),
/* harmony export */   getDefaultState: () => (/* binding */ getDefaultState)
/* harmony export */ });
/* harmony import */ var _logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.mjs */ "./node_modules/@tanstack/query-core/build/lib/logger.mjs");
/* harmony import */ var _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/notifyManager.mjs");
/* harmony import */ var _removable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removable.mjs */ "./node_modules/@tanstack/query-core/build/lib/removable.mjs");
/* harmony import */ var _retryer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retryer.mjs */ "./node_modules/@tanstack/query-core/build/lib/retryer.mjs");





// CLASS
class Mutation extends _removable_mjs__WEBPACK_IMPORTED_MODULE_0__.Removable {
  constructor(config) {
    super();
    this.defaultOptions = config.defaultOptions;
    this.mutationId = config.mutationId;
    this.mutationCache = config.mutationCache;
    this.logger = config.logger || _logger_mjs__WEBPACK_IMPORTED_MODULE_1__.defaultLogger;
    this.observers = [];
    this.state = config.state || getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }

  setOptions(options) {
    this.options = { ...this.defaultOptions,
      ...options
    };
    this.updateCacheTime(this.options.cacheTime);
  }

  get meta() {
    return this.options.meta;
  }

  setState(state) {
    this.dispatch({
      type: 'setState',
      state
    });
  }

  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer); // Stop the mutation from being garbage collected

      this.clearGcTimeout();
      this.mutationCache.notify({
        type: 'observerAdded',
        mutation: this,
        observer
      });
    }
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(x => x !== observer);
    this.scheduleGc();
    this.mutationCache.notify({
      type: 'observerRemoved',
      mutation: this,
      observer
    });
  }

  optionalRemove() {
    if (!this.observers.length) {
      if (this.state.status === 'loading') {
        this.scheduleGc();
      } else {
        this.mutationCache.remove(this);
      }
    }
  }

  continue() {
    var _this$retryer$continu, _this$retryer;

    return (_this$retryer$continu = (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.continue()) != null ? _this$retryer$continu : this.execute();
  }

  async execute() {
    const executeMutation = () => {
      var _this$options$retry;

      this.retryer = (0,_retryer_mjs__WEBPACK_IMPORTED_MODULE_2__.createRetryer)({
        fn: () => {
          if (!this.options.mutationFn) {
            return Promise.reject('No mutationFn found');
          }

          return this.options.mutationFn(this.state.variables);
        },
        onFail: (failureCount, error) => {
          this.dispatch({
            type: 'failed',
            failureCount,
            error
          });
        },
        onPause: () => {
          this.dispatch({
            type: 'pause'
          });
        },
        onContinue: () => {
          this.dispatch({
            type: 'continue'
          });
        },
        retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      });
      return this.retryer.promise;
    };

    const restored = this.state.status === 'loading';

    try {
      var _this$mutationCache$c3, _this$mutationCache$c4, _this$options$onSucce, _this$options2, _this$mutationCache$c5, _this$mutationCache$c6, _this$options$onSettl, _this$options3;

      if (!restored) {
        var _this$mutationCache$c, _this$mutationCache$c2, _this$options$onMutat, _this$options;

        this.dispatch({
          type: 'loading',
          variables: this.options.variables
        }); // Notify cache callback

        await ((_this$mutationCache$c = (_this$mutationCache$c2 = this.mutationCache.config).onMutate) == null ? void 0 : _this$mutationCache$c.call(_this$mutationCache$c2, this.state.variables, this));
        const context = await ((_this$options$onMutat = (_this$options = this.options).onMutate) == null ? void 0 : _this$options$onMutat.call(_this$options, this.state.variables));

        if (context !== this.state.context) {
          this.dispatch({
            type: 'loading',
            context,
            variables: this.state.variables
          });
        }
      }

      const data = await executeMutation(); // Notify cache callback

      await ((_this$mutationCache$c3 = (_this$mutationCache$c4 = this.mutationCache.config).onSuccess) == null ? void 0 : _this$mutationCache$c3.call(_this$mutationCache$c4, data, this.state.variables, this.state.context, this));
      await ((_this$options$onSucce = (_this$options2 = this.options).onSuccess) == null ? void 0 : _this$options$onSucce.call(_this$options2, data, this.state.variables, this.state.context)); // Notify cache callback

      await ((_this$mutationCache$c5 = (_this$mutationCache$c6 = this.mutationCache.config).onSettled) == null ? void 0 : _this$mutationCache$c5.call(_this$mutationCache$c6, data, null, this.state.variables, this.state.context, this));
      await ((_this$options$onSettl = (_this$options3 = this.options).onSettled) == null ? void 0 : _this$options$onSettl.call(_this$options3, data, null, this.state.variables, this.state.context));
      this.dispatch({
        type: 'success',
        data
      });
      return data;
    } catch (error) {
      try {
        var _this$mutationCache$c7, _this$mutationCache$c8, _this$options$onError, _this$options4, _this$mutationCache$c9, _this$mutationCache$c10, _this$options$onSettl2, _this$options5;

        // Notify cache callback
        await ((_this$mutationCache$c7 = (_this$mutationCache$c8 = this.mutationCache.config).onError) == null ? void 0 : _this$mutationCache$c7.call(_this$mutationCache$c8, error, this.state.variables, this.state.context, this));

        if (true) {
          this.logger.error(error);
        }

        await ((_this$options$onError = (_this$options4 = this.options).onError) == null ? void 0 : _this$options$onError.call(_this$options4, error, this.state.variables, this.state.context)); // Notify cache callback

        await ((_this$mutationCache$c9 = (_this$mutationCache$c10 = this.mutationCache.config).onSettled) == null ? void 0 : _this$mutationCache$c9.call(_this$mutationCache$c10, undefined, error, this.state.variables, this.state.context, this));
        await ((_this$options$onSettl2 = (_this$options5 = this.options).onSettled) == null ? void 0 : _this$options$onSettl2.call(_this$options5, undefined, error, this.state.variables, this.state.context));
        throw error;
      } finally {
        this.dispatch({
          type: 'error',
          error: error
        });
      }
    }
  }

  dispatch(action) {
    const reducer = state => {
      switch (action.type) {
        case 'failed':
          return { ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };

        case 'pause':
          return { ...state,
            isPaused: true
          };

        case 'continue':
          return { ...state,
            isPaused: false
          };

        case 'loading':
          return { ...state,
            context: action.context,
            data: undefined,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !(0,_retryer_mjs__WEBPACK_IMPORTED_MODULE_2__.canFetch)(this.options.networkMode),
            status: 'loading',
            variables: action.variables
          };

        case 'success':
          return { ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: 'success',
            isPaused: false
          };

        case 'error':
          return { ...state,
            data: undefined,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: 'error'
          };

        case 'setState':
          return { ...state,
            ...action.state
          };
      }
    };

    this.state = reducer(this.state);
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(() => {
      this.observers.forEach(observer => {
        observer.onMutationUpdate(action);
      });
      this.mutationCache.notify({
        mutation: this,
        type: 'updated',
        action
      });
    });
  }

}
function getDefaultState() {
  return {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: 'idle',
    variables: undefined
  };
}


//# sourceMappingURL=mutation.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/mutationCache.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/mutationCache.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MutationCache: () => (/* binding */ MutationCache)
/* harmony export */ });
/* harmony import */ var _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/notifyManager.mjs");
/* harmony import */ var _mutation_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutation.mjs */ "./node_modules/@tanstack/query-core/build/lib/mutation.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");
/* harmony import */ var _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribable.mjs */ "./node_modules/@tanstack/query-core/build/lib/subscribable.mjs");





// CLASS
class MutationCache extends _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__.Subscribable {
  constructor(config) {
    super();
    this.config = config || {};
    this.mutations = [];
    this.mutationId = 0;
  }

  build(client, options, state) {
    const mutation = new _mutation_mjs__WEBPACK_IMPORTED_MODULE_1__.Mutation({
      mutationCache: this,
      logger: client.getLogger(),
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : undefined
    });
    this.add(mutation);
    return mutation;
  }

  add(mutation) {
    this.mutations.push(mutation);
    this.notify({
      type: 'added',
      mutation
    });
  }

  remove(mutation) {
    this.mutations = this.mutations.filter(x => x !== mutation);
    this.notify({
      type: 'removed',
      mutation
    });
  }

  clear() {
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(() => {
      this.mutations.forEach(mutation => {
        this.remove(mutation);
      });
    });
  }

  getAll() {
    return this.mutations;
  }

  find(filters) {
    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.mutations.find(mutation => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.matchMutation)(filters, mutation));
  }

  findAll(filters) {
    return this.mutations.filter(mutation => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.matchMutation)(filters, mutation));
  }

  notify(event) {
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(() => {
      this.listeners.forEach(({
        listener
      }) => {
        listener(event);
      });
    });
  }

  resumePausedMutations() {
    var _this$resuming;

    this.resuming = ((_this$resuming = this.resuming) != null ? _this$resuming : Promise.resolve()).then(() => {
      const pausedMutations = this.mutations.filter(x => x.state.isPaused);
      return _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(() => pausedMutations.reduce((promise, mutation) => promise.then(() => mutation.continue().catch(_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.noop)), Promise.resolve()));
    }).then(() => {
      this.resuming = undefined;
    });
    return this.resuming;
  }

}


//# sourceMappingURL=mutationCache.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/notifyManager.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/notifyManager.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNotifyManager: () => (/* binding */ createNotifyManager),
/* harmony export */   notifyManager: () => (/* binding */ notifyManager)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");


function createNotifyManager() {
  let queue = [];
  let transactions = 0;

  let notifyFn = callback => {
    callback();
  };

  let batchNotifyFn = callback => {
    callback();
  };

  const batch = callback => {
    let result;
    transactions++;

    try {
      result = callback();
    } finally {
      transactions--;

      if (!transactions) {
        flush();
      }
    }

    return result;
  };

  const schedule = callback => {
    if (transactions) {
      queue.push(callback);
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.scheduleMicrotask)(() => {
        notifyFn(callback);
      });
    }
  };
  /**
   * All calls to the wrapped function will be batched.
   */


  const batchCalls = callback => {
    return (...args) => {
      schedule(() => {
        callback(...args);
      });
    };
  };

  const flush = () => {
    const originalQueue = queue;
    queue = [];

    if (originalQueue.length) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.scheduleMicrotask)(() => {
        batchNotifyFn(() => {
          originalQueue.forEach(callback => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  /**
   * Use this method to set a custom notify function.
   * This can be used to for example wrap notifications with `React.act` while running tests.
   */


  const setNotifyFunction = fn => {
    notifyFn = fn;
  };
  /**
   * Use this method to set a custom function to batch notifications together into a single tick.
   * By default React Query will use the batch function provided by ReactDOM or React Native.
   */


  const setBatchNotifyFunction = fn => {
    batchNotifyFn = fn;
  };

  return {
    batch,
    batchCalls,
    schedule,
    setNotifyFunction,
    setBatchNotifyFunction
  };
} // SINGLETON

const notifyManager = createNotifyManager();


//# sourceMappingURL=notifyManager.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/onlineManager.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/onlineManager.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnlineManager: () => (/* binding */ OnlineManager),
/* harmony export */   onlineManager: () => (/* binding */ onlineManager)
/* harmony export */ });
/* harmony import */ var _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribable.mjs */ "./node_modules/@tanstack/query-core/build/lib/subscribable.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");



const onlineEvents = ['online', 'offline'];
class OnlineManager extends _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__.Subscribable {
  constructor() {
    super();

    this.setup = onOnline => {
      // addEventListener does not exist in React Native, but window does
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.isServer && window.addEventListener) {
        const listener = () => onOnline(); // Listen to online


        onlineEvents.forEach(event => {
          window.addEventListener(event, listener, false);
        });
        return () => {
          // Be sure to unsubscribe if a new handler is set
          onlineEvents.forEach(event => {
            window.removeEventListener(event, listener);
          });
        };
      }

      return;
    };
  }

  onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  }

  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;

      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = undefined;
    }
  }

  setEventListener(setup) {
    var _this$cleanup2;

    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(online => {
      if (typeof online === 'boolean') {
        this.setOnline(online);
      } else {
        this.onOnline();
      }
    });
  }

  setOnline(online) {
    const changed = this.online !== online;

    if (changed) {
      this.online = online;
      this.onOnline();
    }
  }

  onOnline() {
    this.listeners.forEach(({
      listener
    }) => {
      listener();
    });
  }

  isOnline() {
    if (typeof this.online === 'boolean') {
      return this.online;
    }

    if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined') {
      return true;
    }

    return navigator.onLine;
  }

}
const onlineManager = new OnlineManager();


//# sourceMappingURL=onlineManager.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/query.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/query.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Query: () => (/* binding */ Query)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");
/* harmony import */ var _logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.mjs */ "./node_modules/@tanstack/query-core/build/lib/logger.mjs");
/* harmony import */ var _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/notifyManager.mjs");
/* harmony import */ var _retryer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retryer.mjs */ "./node_modules/@tanstack/query-core/build/lib/retryer.mjs");
/* harmony import */ var _removable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removable.mjs */ "./node_modules/@tanstack/query-core/build/lib/removable.mjs");






// CLASS
class Query extends _removable_mjs__WEBPACK_IMPORTED_MODULE_0__.Removable {
  constructor(config) {
    super();
    this.abortSignalConsumed = false;
    this.defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.cache = config.cache;
    this.logger = config.logger || _logger_mjs__WEBPACK_IMPORTED_MODULE_1__.defaultLogger;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.initialState = config.state || getDefaultState(this.options);
    this.state = this.initialState;
    this.scheduleGc();
  }

  get meta() {
    return this.options.meta;
  }

  setOptions(options) {
    this.options = { ...this.defaultOptions,
      ...options
    };
    this.updateCacheTime(this.options.cacheTime);
  }

  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === 'idle') {
      this.cache.remove(this);
    }
  }

  setData(newData, options) {
    const data = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.replaceData)(this.state.data, newData, this.options); // Set data and mark it as cached

    this.dispatch({
      data,
      type: 'success',
      dataUpdatedAt: options == null ? void 0 : options.updatedAt,
      manual: options == null ? void 0 : options.manual
    });
    return data;
  }

  setState(state, setStateOptions) {
    this.dispatch({
      type: 'setState',
      state,
      setStateOptions
    });
  }

  cancel(options) {
    var _this$retryer;

    const promise = this.promise;
    (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
    return promise ? promise.then(_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.noop).catch(_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.noop) : Promise.resolve();
  }

  destroy() {
    super.destroy();
    this.cancel({
      silent: true
    });
  }

  reset() {
    this.destroy();
    this.setState(this.initialState);
  }

  isActive() {
    return this.observers.some(observer => observer.options.enabled !== false);
  }

  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }

  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(observer => observer.getCurrentResult().isStale);
  }

  isStaleByTime(staleTime = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.timeUntilStale)(this.state.dataUpdatedAt, staleTime);
  }

  onFocus() {
    var _this$retryer2;

    const observer = this.observers.find(x => x.shouldFetchOnWindowFocus());

    if (observer) {
      observer.refetch({
        cancelRefetch: false
      });
    } // Continue fetch if currently paused


    (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
  }

  onOnline() {
    var _this$retryer3;

    const observer = this.observers.find(x => x.shouldFetchOnReconnect());

    if (observer) {
      observer.refetch({
        cancelRefetch: false
      });
    } // Continue fetch if currently paused


    (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
  }

  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer); // Stop the query from being garbage collected

      this.clearGcTimeout();
      this.cache.notify({
        type: 'observerAdded',
        query: this,
        observer
      });
    }
  }

  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter(x => x !== observer);

      if (!this.observers.length) {
        // If the transport layer does not support cancellation
        // we'll let the query continue so the result can be cached
        if (this.retryer) {
          if (this.abortSignalConsumed) {
            this.retryer.cancel({
              revert: true
            });
          } else {
            this.retryer.cancelRetry();
          }
        }

        this.scheduleGc();
      }

      this.cache.notify({
        type: 'observerRemoved',
        query: this,
        observer
      });
    }
  }

  getObserversCount() {
    return this.observers.length;
  }

  invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({
        type: 'invalidate'
      });
    }
  }

  fetch(options, fetchOptions) {
    var _this$options$behavio, _context$fetchOptions;

    if (this.state.fetchStatus !== 'idle') {
      if (this.state.dataUpdatedAt && fetchOptions != null && fetchOptions.cancelRefetch) {
        // Silently cancel current fetch if the user wants to cancel refetches
        this.cancel({
          silent: true
        });
      } else if (this.promise) {
        var _this$retryer4;

        // make sure that retries that were potentially cancelled due to unmounts can continue
        (_this$retryer4 = this.retryer) == null ? void 0 : _this$retryer4.continueRetry(); // Return current promise if we are already fetching

        return this.promise;
      }
    } // Update config if passed, otherwise the config from the last execution is used


    if (options) {
      this.setOptions(options);
    } // Use the options from the first observer with a query function if no function is found.
    // This can happen when the query is hydrated or created with setQueryData.


    if (!this.options.queryFn) {
      const observer = this.observers.find(x => x.options.queryFn);

      if (observer) {
        this.setOptions(observer.options);
      }
    }

    if (true) {
      if (!Array.isArray(this.options.queryKey)) {
        this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']");
      }
    }

    const abortController = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.getAbortController)(); // Create query function context

    const queryFnContext = {
      queryKey: this.queryKey,
      pageParam: undefined,
      meta: this.meta
    }; // Adds an enumerable signal property to the object that
    // which sets abortSignalConsumed to true when the signal
    // is read.

    const addSignalProperty = object => {
      Object.defineProperty(object, 'signal', {
        enumerable: true,
        get: () => {
          if (abortController) {
            this.abortSignalConsumed = true;
            return abortController.signal;
          }

          return undefined;
        }
      });
    };

    addSignalProperty(queryFnContext); // Create fetch function

    const fetchFn = () => {
      if (!this.options.queryFn) {
        return Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'");
      }

      this.abortSignalConsumed = false;
      return this.options.queryFn(queryFnContext);
    }; // Trigger behavior hook


    const context = {
      fetchOptions,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn
    };
    addSignalProperty(context);
    (_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch(context); // Store state in case the current fetch needs to be reverted

    this.revertState = this.state; // Set to fetching state if not already in it

    if (this.state.fetchStatus === 'idle' || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
      var _context$fetchOptions2;

      this.dispatch({
        type: 'fetch',
        meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
      });
    }

    const onError = error => {
      // Optimistically update state if needed
      if (!((0,_retryer_mjs__WEBPACK_IMPORTED_MODULE_3__.isCancelledError)(error) && error.silent)) {
        this.dispatch({
          type: 'error',
          error: error
        });
      }

      if (!(0,_retryer_mjs__WEBPACK_IMPORTED_MODULE_3__.isCancelledError)(error)) {
        var _this$cache$config$on, _this$cache$config, _this$cache$config$on2, _this$cache$config2;

        // Notify cache callback
        (_this$cache$config$on = (_this$cache$config = this.cache.config).onError) == null ? void 0 : _this$cache$config$on.call(_this$cache$config, error, this);
        (_this$cache$config$on2 = (_this$cache$config2 = this.cache.config).onSettled) == null ? void 0 : _this$cache$config$on2.call(_this$cache$config2, this.state.data, error, this);

        if (true) {
          this.logger.error(error);
        }
      }

      if (!this.isFetchingOptimistic) {
        // Schedule query gc after fetching
        this.scheduleGc();
      }

      this.isFetchingOptimistic = false;
    }; // Try to fetch the data


    this.retryer = (0,_retryer_mjs__WEBPACK_IMPORTED_MODULE_3__.createRetryer)({
      fn: context.fetchFn,
      abort: abortController == null ? void 0 : abortController.abort.bind(abortController),
      onSuccess: data => {
        var _this$cache$config$on3, _this$cache$config3, _this$cache$config$on4, _this$cache$config4;

        if (typeof data === 'undefined') {
          if (true) {
            this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash);
          }

          onError(new Error(this.queryHash + " data is undefined"));
          return;
        }

        this.setData(data); // Notify cache callback

        (_this$cache$config$on3 = (_this$cache$config3 = this.cache.config).onSuccess) == null ? void 0 : _this$cache$config$on3.call(_this$cache$config3, data, this);
        (_this$cache$config$on4 = (_this$cache$config4 = this.cache.config).onSettled) == null ? void 0 : _this$cache$config$on4.call(_this$cache$config4, data, this.state.error, this);

        if (!this.isFetchingOptimistic) {
          // Schedule query gc after fetching
          this.scheduleGc();
        }

        this.isFetchingOptimistic = false;
      },
      onError,
      onFail: (failureCount, error) => {
        this.dispatch({
          type: 'failed',
          failureCount,
          error
        });
      },
      onPause: () => {
        this.dispatch({
          type: 'pause'
        });
      },
      onContinue: () => {
        this.dispatch({
          type: 'continue'
        });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode
    });
    this.promise = this.retryer.promise;
    return this.promise;
  }

  dispatch(action) {
    const reducer = state => {
      var _action$meta, _action$dataUpdatedAt;

      switch (action.type) {
        case 'failed':
          return { ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error
          };

        case 'pause':
          return { ...state,
            fetchStatus: 'paused'
          };

        case 'continue':
          return { ...state,
            fetchStatus: 'fetching'
          };

        case 'fetch':
          return { ...state,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
            fetchStatus: (0,_retryer_mjs__WEBPACK_IMPORTED_MODULE_3__.canFetch)(this.options.networkMode) ? 'fetching' : 'paused',
            ...(!state.dataUpdatedAt && {
              error: null,
              status: 'loading'
            })
          };

        case 'success':
          return { ...state,
            data: action.data,
            dataUpdateCount: state.dataUpdateCount + 1,
            dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
            error: null,
            isInvalidated: false,
            status: 'success',
            ...(!action.manual && {
              fetchStatus: 'idle',
              fetchFailureCount: 0,
              fetchFailureReason: null
            })
          };

        case 'error':
          const error = action.error;

          if ((0,_retryer_mjs__WEBPACK_IMPORTED_MODULE_3__.isCancelledError)(error) && error.revert && this.revertState) {
            return { ...this.revertState,
              fetchStatus: 'idle'
            };
          }

          return { ...state,
            error: error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: 'idle',
            status: 'error'
          };

        case 'invalidate':
          return { ...state,
            isInvalidated: true
          };

        case 'setState':
          return { ...state,
            ...action.state
          };
      }
    };

    this.state = reducer(this.state);
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_4__.notifyManager.batch(() => {
      this.observers.forEach(observer => {
        observer.onQueryUpdate(action);
      });
      this.cache.notify({
        query: this,
        type: 'updated',
        action
      });
    });
  }

}

function getDefaultState(options) {
  const data = typeof options.initialData === 'function' ? options.initialData() : options.initialData;
  const hasData = typeof data !== 'undefined';
  const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === 'function' ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? 'success' : 'loading',
    fetchStatus: 'idle'
  };
}


//# sourceMappingURL=query.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/queryCache.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/queryCache.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryCache: () => (/* binding */ QueryCache)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");
/* harmony import */ var _query_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query.mjs */ "./node_modules/@tanstack/query-core/build/lib/query.mjs");
/* harmony import */ var _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/notifyManager.mjs");
/* harmony import */ var _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribable.mjs */ "./node_modules/@tanstack/query-core/build/lib/subscribable.mjs");





// CLASS
class QueryCache extends _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__.Subscribable {
  constructor(config) {
    super();
    this.config = config || {};
    this.queries = [];
    this.queriesMap = {};
  }

  build(client, options, state) {
    var _options$queryHash;

    const queryKey = options.queryKey;
    const queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.hashQueryKeyByOptions)(queryKey, options);
    let query = this.get(queryHash);

    if (!query) {
      query = new _query_mjs__WEBPACK_IMPORTED_MODULE_2__.Query({
        cache: this,
        logger: client.getLogger(),
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }

    return query;
  }

  add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: 'added',
        query
      });
    }
  }

  remove(query) {
    const queryInMap = this.queriesMap[query.queryHash];

    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter(x => x !== query);

      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }

      this.notify({
        type: 'removed',
        query
      });
    }
  }

  clear() {
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(() => {
      this.queries.forEach(query => {
        this.remove(query);
      });
    });
  }

  get(queryHash) {
    return this.queriesMap[queryHash];
  }

  getAll() {
    return this.queries;
  }

  find(arg1, arg2) {
    const [filters] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseFilterArgs)(arg1, arg2);

    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.queries.find(query => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.matchQuery)(filters, query));
  }

  findAll(arg1, arg2) {
    const [filters] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseFilterArgs)(arg1, arg2);
    return Object.keys(filters).length > 0 ? this.queries.filter(query => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.matchQuery)(filters, query)) : this.queries;
  }

  notify(event) {
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(() => {
      this.listeners.forEach(({
        listener
      }) => {
        listener(event);
      });
    });
  }

  onFocus() {
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(() => {
      this.queries.forEach(query => {
        query.onFocus();
      });
    });
  }

  onOnline() {
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(() => {
      this.queries.forEach(query => {
        query.onOnline();
      });
    });
  }

}


//# sourceMappingURL=queryCache.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/queryClient.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/queryClient.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryClient: () => (/* binding */ QueryClient)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");
/* harmony import */ var _queryCache_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queryCache.mjs */ "./node_modules/@tanstack/query-core/build/lib/queryCache.mjs");
/* harmony import */ var _mutationCache_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutationCache.mjs */ "./node_modules/@tanstack/query-core/build/lib/mutationCache.mjs");
/* harmony import */ var _focusManager_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/focusManager.mjs");
/* harmony import */ var _onlineManager_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onlineManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/onlineManager.mjs");
/* harmony import */ var _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/notifyManager.mjs");
/* harmony import */ var _infiniteQueryBehavior_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infiniteQueryBehavior.mjs */ "./node_modules/@tanstack/query-core/build/lib/infiniteQueryBehavior.mjs");
/* harmony import */ var _logger_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.mjs */ "./node_modules/@tanstack/query-core/build/lib/logger.mjs");









// CLASS
class QueryClient {
  constructor(config = {}) {
    this.queryCache = config.queryCache || new _queryCache_mjs__WEBPACK_IMPORTED_MODULE_0__.QueryCache();
    this.mutationCache = config.mutationCache || new _mutationCache_mjs__WEBPACK_IMPORTED_MODULE_1__.MutationCache();
    this.logger = config.logger || _logger_mjs__WEBPACK_IMPORTED_MODULE_2__.defaultLogger;
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
    this.mountCount = 0;

    if ( true && config.logger) {
      this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
    }
  }

  mount() {
    this.mountCount++;
    if (this.mountCount !== 1) return;
    this.unsubscribeFocus = _focusManager_mjs__WEBPACK_IMPORTED_MODULE_3__.focusManager.subscribe(() => {
      if (_focusManager_mjs__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused()) {
        this.resumePausedMutations();
        this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = _onlineManager_mjs__WEBPACK_IMPORTED_MODULE_4__.onlineManager.subscribe(() => {
      if (_onlineManager_mjs__WEBPACK_IMPORTED_MODULE_4__.onlineManager.isOnline()) {
        this.resumePausedMutations();
        this.queryCache.onOnline();
      }
    });
  }

  unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;

    this.mountCount--;
    if (this.mountCount !== 0) return;
    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    this.unsubscribeFocus = undefined;
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
    this.unsubscribeOnline = undefined;
  }

  isFetching(arg1, arg2) {
    const [filters] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2);
    filters.fetchStatus = 'fetching';
    return this.queryCache.findAll(filters).length;
  }

  isMutating(filters) {
    return this.mutationCache.findAll({ ...filters,
      fetching: true
    }).length;
  }

  getQueryData(queryKey, filters) {
    var _this$queryCache$find;

    return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  }

  ensureQueryData(arg1, arg2, arg3) {
    const parsedOptions = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    const cachedData = this.getQueryData(parsedOptions.queryKey);
    return cachedData ? Promise.resolve(cachedData) : this.fetchQuery(parsedOptions);
  }

  getQueriesData(queryKeyOrFilters) {
    return this.getQueryCache().findAll(queryKeyOrFilters).map(({
      queryKey,
      state
    }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }

  setQueryData(queryKey, updater, options) {
    const query = this.queryCache.find(queryKey);
    const prevData = query == null ? void 0 : query.state.data;
    const data = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.functionalUpdate)(updater, prevData);

    if (typeof data === 'undefined') {
      return undefined;
    }

    const parsedOptions = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(queryKey);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(data, { ...options,
      manual: true
    });
  }

  setQueriesData(queryKeyOrFilters, updater, options) {
    return _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(() => this.getQueryCache().findAll(queryKeyOrFilters).map(({
      queryKey
    }) => [queryKey, this.setQueryData(queryKey, updater, options)]));
  }

  getQueryState(queryKey, filters) {
    var _this$queryCache$find2;

    return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
  }

  removeQueries(arg1, arg2) {
    const [filters] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2);
    const queryCache = this.queryCache;
    _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(() => {
      queryCache.findAll(filters).forEach(query => {
        queryCache.remove(query);
      });
    });
  }

  resetQueries(arg1, arg2, arg3) {
    const [filters, options] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3);
    const queryCache = this.queryCache;
    const refetchFilters = {
      type: 'active',
      ...filters
    };
    return _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(() => {
      queryCache.findAll(filters).forEach(query => {
        query.reset();
      });
      return this.refetchQueries(refetchFilters, options);
    });
  }

  cancelQueries(arg1, arg2, arg3) {
    const [filters, cancelOptions = {}] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3);

    if (typeof cancelOptions.revert === 'undefined') {
      cancelOptions.revert = true;
    }

    const promises = _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(() => this.queryCache.findAll(filters).map(query => query.cancel(cancelOptions)));
    return Promise.all(promises).then(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop);
  }

  invalidateQueries(arg1, arg2, arg3) {
    const [filters, options] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3);
    return _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(() => {
      var _ref, _filters$refetchType;

      this.queryCache.findAll(filters).forEach(query => {
        query.invalidate();
      });

      if (filters.refetchType === 'none') {
        return Promise.resolve();
      }

      const refetchFilters = { ...filters,
        type: (_ref = (_filters$refetchType = filters.refetchType) != null ? _filters$refetchType : filters.type) != null ? _ref : 'active'
      };
      return this.refetchQueries(refetchFilters, options);
    });
  }

  refetchQueries(arg1, arg2, arg3) {
    const [filters, options] = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3);
    const promises = _notifyManager_mjs__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(() => this.queryCache.findAll(filters).filter(query => !query.isDisabled()).map(query => {
      var _options$cancelRefetc;

      return query.fetch(undefined, { ...options,
        cancelRefetch: (_options$cancelRefetc = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc : true,
        meta: {
          refetchPage: filters.refetchPage
        }
      });
    }));
    let promise = Promise.all(promises).then(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop);

    if (!(options != null && options.throwOnError)) {
      promise = promise.catch(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop);
    }

    return promise;
  }

  fetchQuery(arg1, arg2, arg3) {
    const parsedOptions = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions); // https://github.com/tannerlinsley/react-query/issues/652

    if (typeof defaultedOptions.retry === 'undefined') {
      defaultedOptions.retry = false;
    }

    const query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }

  prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop);
  }

  fetchInfiniteQuery(arg1, arg2, arg3) {
    const parsedOptions = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    parsedOptions.behavior = (0,_infiniteQueryBehavior_mjs__WEBPACK_IMPORTED_MODULE_7__.infiniteQueryBehavior)();
    return this.fetchQuery(parsedOptions);
  }

  prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.noop);
  }

  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }

  getQueryCache() {
    return this.queryCache;
  }

  getMutationCache() {
    return this.mutationCache;
  }

  getLogger() {
    return this.logger;
  }

  getDefaultOptions() {
    return this.defaultOptions;
  }

  setDefaultOptions(options) {
    this.defaultOptions = options;
  }

  setQueryDefaults(queryKey, options) {
    const result = this.queryDefaults.find(x => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(queryKey) === (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(x.queryKey));

    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey,
        defaultOptions: options
      });
    }
  }

  getQueryDefaults(queryKey) {
    if (!queryKey) {
      return undefined;
    } // Get the first matching defaults


    const firstMatchingDefaults = this.queryDefaults.find(x => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(queryKey, x.queryKey)); // Additional checks and error in dev mode

    if (true) {
      // Retrieve all matching defaults for the given key
      const matchingDefaults = this.queryDefaults.filter(x => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(queryKey, x.queryKey)); // It is ok not having defaults, but it is error prone to have more than 1 default for a given key

      if (matchingDefaults.length > 1) {
        this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(queryKey) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults.");
      }
    }

    return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
  }

  setMutationDefaults(mutationKey, options) {
    const result = this.mutationDefaults.find(x => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(mutationKey) === (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(x.mutationKey));

    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey,
        defaultOptions: options
      });
    }
  }

  getMutationDefaults(mutationKey) {
    if (!mutationKey) {
      return undefined;
    } // Get the first matching defaults


    const firstMatchingDefaults = this.mutationDefaults.find(x => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(mutationKey, x.mutationKey)); // Additional checks and error in dev mode

    if (true) {
      // Retrieve all matching defaults for the given key
      const matchingDefaults = this.mutationDefaults.filter(x => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(mutationKey, x.mutationKey)); // It is ok not having defaults, but it is error prone to have more than 1 default for a given key

      if (matchingDefaults.length > 1) {
        this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(mutationKey) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults.");
      }
    }

    return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
  }

  defaultQueryOptions(options) {
    if (options != null && options._defaulted) {
      return options;
    }

    const defaultedOptions = { ...this.defaultOptions.queries,
      ...this.getQueryDefaults(options == null ? void 0 : options.queryKey),
      ...options,
      _defaulted: true
    };

    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.hashQueryKeyByOptions)(defaultedOptions.queryKey, defaultedOptions);
    } // dependent default values


    if (typeof defaultedOptions.refetchOnReconnect === 'undefined') {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== 'always';
    }

    if (typeof defaultedOptions.useErrorBoundary === 'undefined') {
      defaultedOptions.useErrorBoundary = !!defaultedOptions.suspense;
    }

    return defaultedOptions;
  }

  defaultMutationOptions(options) {
    if (options != null && options._defaulted) {
      return options;
    }

    return { ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(options == null ? void 0 : options.mutationKey),
      ...options,
      _defaulted: true
    };
  }

  clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  }

}


//# sourceMappingURL=queryClient.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/removable.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/removable.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Removable: () => (/* binding */ Removable)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");


class Removable {
  destroy() {
    this.clearGcTimeout();
  }

  scheduleGc() {
    this.clearGcTimeout();

    if ((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidTimeout)(this.cacheTime)) {
      this.gcTimeout = setTimeout(() => {
        this.optionalRemove();
      }, this.cacheTime);
    }
  }

  updateCacheTime(newCacheTime) {
    // Default to 5 minutes (Infinity for server-side) if no cache time is set
    this.cacheTime = Math.max(this.cacheTime || 0, newCacheTime != null ? newCacheTime : _utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isServer ? Infinity : 5 * 60 * 1000);
  }

  clearGcTimeout() {
    if (this.gcTimeout) {
      clearTimeout(this.gcTimeout);
      this.gcTimeout = undefined;
    }
  }

}


//# sourceMappingURL=removable.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/retryer.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/retryer.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancelledError: () => (/* binding */ CancelledError),
/* harmony export */   canFetch: () => (/* binding */ canFetch),
/* harmony export */   createRetryer: () => (/* binding */ createRetryer),
/* harmony export */   isCancelledError: () => (/* binding */ isCancelledError)
/* harmony export */ });
/* harmony import */ var _focusManager_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/focusManager.mjs");
/* harmony import */ var _onlineManager_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onlineManager.mjs */ "./node_modules/@tanstack/query-core/build/lib/onlineManager.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@tanstack/query-core/build/lib/utils.mjs");




function defaultRetryDelay(failureCount) {
  return Math.min(1000 * 2 ** failureCount, 30000);
}

function canFetch(networkMode) {
  return (networkMode != null ? networkMode : 'online') === 'online' ? _onlineManager_mjs__WEBPACK_IMPORTED_MODULE_0__.onlineManager.isOnline() : true;
}
class CancelledError {
  constructor(options) {
    this.revert = options == null ? void 0 : options.revert;
    this.silent = options == null ? void 0 : options.silent;
  }

}
function isCancelledError(value) {
  return value instanceof CancelledError;
}
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let isResolved = false;
  let continueFn;
  let promiseResolve;
  let promiseReject;
  const promise = new Promise((outerResolve, outerReject) => {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });

  const cancel = cancelOptions => {
    if (!isResolved) {
      reject(new CancelledError(cancelOptions));
      config.abort == null ? void 0 : config.abort();
    }
  };

  const cancelRetry = () => {
    isRetryCancelled = true;
  };

  const continueRetry = () => {
    isRetryCancelled = false;
  };

  const shouldPause = () => !_focusManager_mjs__WEBPACK_IMPORTED_MODULE_1__.focusManager.isFocused() || config.networkMode !== 'always' && !_onlineManager_mjs__WEBPACK_IMPORTED_MODULE_0__.onlineManager.isOnline();

  const resolve = value => {
    if (!isResolved) {
      isResolved = true;
      config.onSuccess == null ? void 0 : config.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };

  const reject = value => {
    if (!isResolved) {
      isResolved = true;
      config.onError == null ? void 0 : config.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };

  const pause = () => {
    return new Promise(continueResolve => {
      continueFn = value => {
        const canContinue = isResolved || !shouldPause();

        if (canContinue) {
          continueResolve(value);
        }

        return canContinue;
      };

      config.onPause == null ? void 0 : config.onPause();
    }).then(() => {
      continueFn = undefined;

      if (!isResolved) {
        config.onContinue == null ? void 0 : config.onContinue();
      }
    });
  }; // Create loop function


  const run = () => {
    // Do nothing if already resolved
    if (isResolved) {
      return;
    }

    let promiseOrValue; // Execute query

    try {
      promiseOrValue = config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }

    Promise.resolve(promiseOrValue).then(resolve).catch(error => {
      var _config$retry, _config$retryDelay;

      // Stop if the fetch is already resolved
      if (isResolved) {
        return;
      } // Do we need to retry the request?


      const retry = (_config$retry = config.retry) != null ? _config$retry : 3;
      const retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      const delay = typeof retryDelay === 'function' ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === 'number' && failureCount < retry || typeof retry === 'function' && retry(failureCount, error);

      if (isRetryCancelled || !shouldRetry) {
        // We are done if the query does not need to be retried
        reject(error);
        return;
      }

      failureCount++; // Notify on fail

      config.onFail == null ? void 0 : config.onFail(failureCount, error); // Delay

      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.sleep)(delay) // Pause if the document is not visible or when the device is offline
      .then(() => {
        if (shouldPause()) {
          return pause();
        }

        return;
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  }; // Start loop


  if (canFetch(config.networkMode)) {
    run();
  } else {
    pause().then(run);
  }

  return {
    promise,
    cancel,
    continue: () => {
      const didContinue = continueFn == null ? void 0 : continueFn();
      return didContinue ? promise : Promise.resolve();
    },
    cancelRetry,
    continueRetry
  };
}


//# sourceMappingURL=retryer.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/subscribable.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/subscribable.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subscribable: () => (/* binding */ Subscribable)
/* harmony export */ });
class Subscribable {
  constructor() {
    this.listeners = new Set();
    this.subscribe = this.subscribe.bind(this);
  }

  subscribe(listener) {
    const identity = {
      listener
    };
    this.listeners.add(identity);
    this.onSubscribe();
    return () => {
      this.listeners.delete(identity);
      this.onUnsubscribe();
    };
  }

  hasListeners() {
    return this.listeners.size > 0;
  }

  onSubscribe() {// Do nothing
  }

  onUnsubscribe() {// Do nothing
  }

}


//# sourceMappingURL=subscribable.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/lib/utils.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/lib/utils.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   difference: () => (/* binding */ difference),
/* harmony export */   functionalUpdate: () => (/* binding */ functionalUpdate),
/* harmony export */   getAbortController: () => (/* binding */ getAbortController),
/* harmony export */   hashQueryKey: () => (/* binding */ hashQueryKey),
/* harmony export */   hashQueryKeyByOptions: () => (/* binding */ hashQueryKeyByOptions),
/* harmony export */   isError: () => (/* binding */ isError),
/* harmony export */   isPlainArray: () => (/* binding */ isPlainArray),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isQueryKey: () => (/* binding */ isQueryKey),
/* harmony export */   isServer: () => (/* binding */ isServer),
/* harmony export */   isValidTimeout: () => (/* binding */ isValidTimeout),
/* harmony export */   matchMutation: () => (/* binding */ matchMutation),
/* harmony export */   matchQuery: () => (/* binding */ matchQuery),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   parseFilterArgs: () => (/* binding */ parseFilterArgs),
/* harmony export */   parseMutationArgs: () => (/* binding */ parseMutationArgs),
/* harmony export */   parseMutationFilterArgs: () => (/* binding */ parseMutationFilterArgs),
/* harmony export */   parseQueryArgs: () => (/* binding */ parseQueryArgs),
/* harmony export */   partialDeepEqual: () => (/* binding */ partialDeepEqual),
/* harmony export */   partialMatchKey: () => (/* binding */ partialMatchKey),
/* harmony export */   replaceAt: () => (/* binding */ replaceAt),
/* harmony export */   replaceData: () => (/* binding */ replaceData),
/* harmony export */   replaceEqualDeep: () => (/* binding */ replaceEqualDeep),
/* harmony export */   scheduleMicrotask: () => (/* binding */ scheduleMicrotask),
/* harmony export */   shallowEqualObjects: () => (/* binding */ shallowEqualObjects),
/* harmony export */   sleep: () => (/* binding */ sleep),
/* harmony export */   timeUntilStale: () => (/* binding */ timeUntilStale)
/* harmony export */ });
// TYPES
// UTILS
const isServer = typeof window === 'undefined' || 'Deno' in window;
function noop() {
  return undefined;
}
function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === 'number' && value >= 0 && value !== Infinity;
}
function difference(array1, array2) {
  return array1.filter(x => !array2.includes(x));
}
function replaceAt(array, index, value) {
  const copy = array.slice(0);
  copy[index] = value;
  return copy;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }

  if (typeof arg2 === 'function') {
    return { ...arg3,
      queryKey: arg1,
      queryFn: arg2
    };
  }

  return { ...arg2,
    queryKey: arg1
  };
}
function parseMutationArgs(arg1, arg2, arg3) {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === 'function') {
      return { ...arg3,
        mutationKey: arg1,
        mutationFn: arg2
      };
    }

    return { ...arg2,
      mutationKey: arg1
    };
  }

  if (typeof arg1 === 'function') {
    return { ...arg2,
      mutationFn: arg1
    };
  }

  return { ...arg1
  };
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [{ ...arg2,
    queryKey: arg1
  }, arg3] : [arg1 || {}, arg2];
}
function parseMutationFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [{ ...arg2,
    mutationKey: arg1
  }, arg3] : [arg1 || {}, arg2];
}
function matchQuery(filters, query) {
  const {
    type = 'all',
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = filters;

  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }

  if (type !== 'all') {
    const isActive = query.isActive();

    if (type === 'active' && !isActive) {
      return false;
    }

    if (type === 'inactive' && isActive) {
      return false;
    }
  }

  if (typeof stale === 'boolean' && query.isStale() !== stale) {
    return false;
  }

  if (typeof fetchStatus !== 'undefined' && fetchStatus !== query.state.fetchStatus) {
    return false;
  }

  if (predicate && !predicate(query)) {
    return false;
  }

  return true;
}
function matchMutation(filters, mutation) {
  const {
    exact,
    fetching,
    predicate,
    mutationKey
  } = filters;

  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }

    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }

  if (typeof fetching === 'boolean' && mutation.state.status === 'loading' !== fetching) {
    return false;
  }

  if (predicate && !predicate(mutation)) {
    return false;
  }

  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
/**
 * Default query keys hash function.
 * Hashes the value into a stable hash.
 */

function hashQueryKey(queryKey) {
  return JSON.stringify(queryKey, (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
    result[key] = val[key];
    return result;
  }, {}) : val);
}
/**
 * Checks if key `b` partially matches with key `a`.
 */

function partialMatchKey(a, b) {
  return partialDeepEqual(a, b);
}
/**
 * Checks if `b` partially matches with `a`.
 */

function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    return !Object.keys(b).some(key => !partialDeepEqual(a[key], b[key]));
  }

  return false;
}
/**
 * This function returns `a` if `b` is deeply equal.
 * If not, it will replace any deeply equal children of `b` with those of `a`.
 * This can be used for structural sharing between JSON values for example.
 */

function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }

  const array = isPlainArray(a) && isPlainArray(b);

  if (array || isPlainObject(a) && isPlainObject(b)) {
    const aSize = array ? a.length : Object.keys(a).length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;

    for (let i = 0; i < bSize; i++) {
      const key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);

      if (copy[key] === a[key]) {
        equalItems++;
      }
    }

    return aSize === bSize && equalItems === aSize ? a : copy;
  }

  return b;
}
/**
 * Shallow compare objects. Only works with objects that always have the same properties.
 */

function shallowEqualObjects(a, b) {
  if (a && !b || b && !a) {
    return false;
  }

  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
} // Copied from: https://github.com/jonschlinkert/is-plain-object

function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  } // If has modified constructor


  const ctor = o.constructor;

  if (typeof ctor === 'undefined') {
    return true;
  } // If has modified prototype


  const prot = ctor.prototype;

  if (!hasObjectPrototype(prot)) {
    return false;
  } // If constructor does not have an Object-specific method


  if (!prot.hasOwnProperty('isPrototypeOf')) {
    return false;
  } // Most likely a plain Object


  return true;
}

function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isQueryKey(value) {
  return Array.isArray(value);
}
function isError(value) {
  return value instanceof Error;
}
function sleep(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
/**
 * Schedules a microtask.
 * This can be useful to schedule state updates after rendering.
 */

function scheduleMicrotask(callback) {
  sleep(0).then(callback);
}
function getAbortController() {
  if (typeof AbortController === 'function') {
    return new AbortController();
  }

  return;
}
function replaceData(prevData, data, options) {
  // Use prev data if an isDataEqual function is defined and returns `true`
  if (options.isDataEqual != null && options.isDataEqual(prevData, data)) {
    return prevData;
  } else if (typeof options.structuralSharing === 'function') {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    // Structurally share data between prev and new data if needed
    return replaceEqualDeep(prevData, data);
  }

  return data;
}


//# sourceMappingURL=utils.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryClientProvider: () => (/* binding */ QueryClientProvider),
/* harmony export */   defaultContext: () => (/* binding */ defaultContext),
/* harmony export */   useQueryClient: () => (/* binding */ useQueryClient)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


const defaultContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const QueryClientSharingContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false); // If we are given a context, we will use it.
// Otherwise, if contextSharing is on, we share the first and at least one
// instance of the context across the window
// to ensure that if React Query is used across
// different bundles or microfrontends they will
// all use the same **instance** of context, regardless
// of module scoping.

function getQueryClientContext(context, contextSharing) {
  if (context) {
    return context;
  }

  if (contextSharing && typeof window !== 'undefined') {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }

    return window.ReactQueryClientContext;
  }

  return defaultContext;
}

const useQueryClient = ({
  context
} = {}) => {
  const queryClient = react__WEBPACK_IMPORTED_MODULE_0__.useContext(getQueryClientContext(context, react__WEBPACK_IMPORTED_MODULE_0__.useContext(QueryClientSharingContext)));

  if (!queryClient) {
    throw new Error('No QueryClient set, use QueryClientProvider to set one');
  }

  return queryClient;
};
const QueryClientProvider = ({
  client,
  children,
  context,
  contextSharing = false
}) => {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);

  if ( true && contextSharing) {
    client.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  }

  const Context = getQueryClientContext(context, contextSharing);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(QueryClientSharingContext.Provider, {
    value: !context && contextSharing
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
    value: client
  }, children));
};


//# sourceMappingURL=QueryClientProvider.mjs.map


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Enum.js":
/*!************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Enum.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHARSET: () => (/* binding */ CHARSET),
/* harmony export */   COMMENT: () => (/* binding */ COMMENT),
/* harmony export */   COUNTER_STYLE: () => (/* binding */ COUNTER_STYLE),
/* harmony export */   DECLARATION: () => (/* binding */ DECLARATION),
/* harmony export */   DOCUMENT: () => (/* binding */ DOCUMENT),
/* harmony export */   FONT_FACE: () => (/* binding */ FONT_FACE),
/* harmony export */   FONT_FEATURE_VALUES: () => (/* binding */ FONT_FEATURE_VALUES),
/* harmony export */   IMPORT: () => (/* binding */ IMPORT),
/* harmony export */   KEYFRAMES: () => (/* binding */ KEYFRAMES),
/* harmony export */   LAYER: () => (/* binding */ LAYER),
/* harmony export */   MEDIA: () => (/* binding */ MEDIA),
/* harmony export */   MOZ: () => (/* binding */ MOZ),
/* harmony export */   MS: () => (/* binding */ MS),
/* harmony export */   NAMESPACE: () => (/* binding */ NAMESPACE),
/* harmony export */   PAGE: () => (/* binding */ PAGE),
/* harmony export */   RULESET: () => (/* binding */ RULESET),
/* harmony export */   SUPPORTS: () => (/* binding */ SUPPORTS),
/* harmony export */   VIEWPORT: () => (/* binding */ VIEWPORT),
/* harmony export */   WEBKIT: () => (/* binding */ WEBKIT)
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   middleware: () => (/* binding */ middleware),
/* harmony export */   namespace: () => (/* binding */ namespace),
/* harmony export */   prefixer: () => (/* binding */ prefixer),
/* harmony export */   rulesheet: () => (/* binding */ rulesheet)
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   declaration: () => (/* binding */ declaration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   ruleset: () => (/* binding */ ruleset)
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefix: () => (/* binding */ prefix)
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   stringify: () => (/* binding */ stringify)
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alloc: () => (/* binding */ alloc),
/* harmony export */   caret: () => (/* binding */ caret),
/* harmony export */   char: () => (/* binding */ char),
/* harmony export */   character: () => (/* binding */ character),
/* harmony export */   characters: () => (/* binding */ characters),
/* harmony export */   column: () => (/* binding */ column),
/* harmony export */   commenter: () => (/* binding */ commenter),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dealloc: () => (/* binding */ dealloc),
/* harmony export */   delimit: () => (/* binding */ delimit),
/* harmony export */   delimiter: () => (/* binding */ delimiter),
/* harmony export */   escaping: () => (/* binding */ escaping),
/* harmony export */   identifier: () => (/* binding */ identifier),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lift: () => (/* binding */ lift),
/* harmony export */   line: () => (/* binding */ line),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   node: () => (/* binding */ node),
/* harmony export */   peek: () => (/* binding */ peek),
/* harmony export */   position: () => (/* binding */ position),
/* harmony export */   prev: () => (/* binding */ prev),
/* harmony export */   slice: () => (/* binding */ slice),
/* harmony export */   token: () => (/* binding */ token),
/* harmony export */   tokenize: () => (/* binding */ tokenize),
/* harmony export */   tokenizer: () => (/* binding */ tokenizer),
/* harmony export */   whitespace: () => (/* binding */ whitespace)
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   charat: () => (/* binding */ charat),
/* harmony export */   combine: () => (/* binding */ combine),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   from: () => (/* binding */ from),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   indexof: () => (/* binding */ indexof),
/* harmony export */   match: () => (/* binding */ match),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   sizeof: () => (/* binding */ sizeof),
/* harmony export */   strlen: () => (/* binding */ strlen),
/* harmony export */   substr: () => (/* binding */ substr),
/* harmony export */   trim: () => (/* binding */ trim)
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./src/js/admin/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _queryStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queryStore */ "./src/js/queryStore/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/js/admin/App.js");





document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.templatiq-root');
  if (!container) {
    return;
  }
  if (_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot) {
    const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
    root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
      client: _queryStore__WEBPACK_IMPORTED_MODULE_2__["default"]
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
  } else {
    render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
      client: _queryStore__WEBPACK_IMPORTED_MODULE_2__["default"]
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), container);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.templatiq-root');
  if (!container) {
    return;
  }
  if (_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot) {
    const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
    root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
      client: _queryStore__WEBPACK_IMPORTED_MODULE_2__["default"]
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
  } else {
    render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
      client: _queryStore__WEBPACK_IMPORTED_MODULE_2__["default"]
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), container);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=admin.js.map