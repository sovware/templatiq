"use strict";
(globalThis["webpackChunktemplate_market"] = globalThis["webpackChunktemplate_market"] || []).push([["src_js_modules_ChatShortCode_index_js"],{

/***/ "./src/js/modules/ChatShortCode/context/ChatShortCodeContext.js":
/*!**********************************************************************!*\
  !*** ./src/js/modules/ChatShortCode/context/ChatShortCodeContext.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatShortCodeStateProvider: () => (/* binding */ ChatShortCodeStateProvider),
/* harmony export */   useChatShortCodeState: () => (/* binding */ useChatShortCodeState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const ChatShortCodeStateContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useChatShortCodeState = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(ChatShortCodeStateContent);
const ChatShortCodeStateProvider = ({
  children
}) => {
  const chatShortCodeObj = {
    singleForm: null,
    estimatedTime: null,
    activeQuestion: null,
    nextQuestion: null,
    isFinalSubmissionActive: false,
    isLoggedIn: '1',
    userVerificationField: 'default',
    userEmail: '',
    submittedQuestions: [],
    reWatchedQuestionIds: [],
    cachedQuestionsValue: [],
    responseToken: null,
    isProcessingSubmitCallback: null,
    globalKey: {
      beforeSubmitCallback: 'chatFormBeforeSubmitCallback',
      beforeSubmitCallbackArgs: 'chatFormBeforeSubmitCallbackArgs'
    },
    submissionServerError: null
  };
  const [chatShortCodeState, setChatShortCodeState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(chatShortCodeObj);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ChatShortCodeStateContent.Provider, {
    value: {
      chatShortCodeState,
      setChatShortCodeState
    }
  }, children);
};

/***/ }),

/***/ "./src/js/modules/ChatShortCode/index.js":
/*!***********************************************!*\
  !*** ./src/js/modules/ChatShortCode/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChatShortCodeModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _context_ChatShortCodeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/ChatShortCodeContext */ "./src/js/modules/ChatShortCode/context/ChatShortCodeContext.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/ContentLoading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _queryStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../queryStore */ "./src/js/queryStore/index.js");







const ChatForm = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '@components/ChatForm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }));
function ChatShortCode(props) {
  const {
    data,
    isLoggedIn
  } = props;
  const {
    chatShortCodeState,
    setChatShortCodeState
  } = (0,_context_ChatShortCodeContext__WEBPACK_IMPORTED_MODULE_2__.useChatShortCodeState)();
  const {
    singleForm
  } = chatShortCodeState;
  const {
    questions
  } = JSON.parse(JSON.parse(data).content);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let activeQuestion = questions.find((item, index) => {
      if (item.question_type === 'welcome') {
        return true;
      } else if (isLoggedIn === '1' && index === 1) {
        return true;
      } else if (isLoggedIn === '0' && item.question_type === 'user_validation') {
        return true;
      }
      return false;
    });
    setChatShortCodeState({
      ...chatShortCodeState,
      singleForm: JSON.parse(data),
      activeQuestion: activeQuestion,
      isLoggedIn: isLoggedIn
    });
  }, []);
  return singleForm && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/ContentLoading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ChatForm, {
    moduleState: chatShortCodeState,
    setModuleState: setChatShortCodeState,
    isFloatingForm: false
  }));
}
function ChatShortCodeModule(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {
    client: _queryStore__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_ChatShortCodeContext__WEBPACK_IMPORTED_MODULE_2__.ChatShortCodeStateProvider, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ChatShortCode, {
    ...props
  })));
}

/***/ })

}]);
//# sourceMappingURL=src_js_modules_ChatShortCode_index_js.js.map