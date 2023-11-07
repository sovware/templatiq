"use strict";
(globalThis["webpackChunktemplate_market"] = globalThis["webpackChunktemplate_market"] || []).push([["src_js_modules_ChatBubble_index_js"],{

/***/ "./src/js/modules/ChatBubble/context/ChatBubbleContext.js":
/*!****************************************************************!*\
  !*** ./src/js/modules/ChatBubble/context/ChatBubbleContext.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatBubbleStateProvider: () => (/* binding */ ChatBubbleStateProvider),
/* harmony export */   useChatBubbleState: () => (/* binding */ useChatBubbleState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const ChatBubbleStateContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useChatBubbleState = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(ChatBubbleStateContent);
const ChatBubbleStateProvider = ({
  children
}) => {
  const chatBubbleObj = {
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
    beforeSubmitCallback: null,
    beforeSubmitCallbackArgs: null,
    submissionServerError: null,
    chatBubble: {
      isChatFormActive: false,
      isChatFormMinimized: false,
      canCloseChatForm: true
    },
    chatFormClose: null
  };
  const [chatBubbleState, setChatBubbleState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(chatBubbleObj);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ChatBubbleStateContent.Provider, {
    value: {
      chatBubbleState,
      setChatBubbleState
    }
  }, children);
};

/***/ }),

/***/ "./src/js/modules/ChatBubble/index.js":
/*!********************************************!*\
  !*** ./src/js/modules/ChatBubble/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChatBubbleModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ChatBubbleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/ChatBubbleContext */ "./src/js/modules/ChatBubble/context/ChatBubbleContext.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/ContentLoading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/ChatBubble'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _queryStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../queryStore */ "./src/js/queryStore/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/js/modules/ChatBubble/style.js");






const ChatForm = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '@components/ChatForm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }));




const ChatBubbleCircle = props => {
  const {
    data,
    isLoggedIn,
    isFloatingForm
  } = props;
  const {
    chatBubbleState,
    setChatBubbleState
  } = (0,_context_ChatBubbleContext__WEBPACK_IMPORTED_MODULE_2__.useChatBubbleState)();
  const {
    singleForm
  } = chatBubbleState;
  const {
    questions
  } = JSON.parse(JSON.parse(data).content);
  const {
    global
  } = JSON.parse(JSON.parse(data).content);
  const {
    bubble
  } = global;
  const {
    offset_x,
    offset_y,
    position
  } = bubble;
  const bubbleFormStyles = {
    '--templatiq-bubble-form-offset-x': `${offset_x}px`,
    '--templatiq-bubble-form-offset-y': `${offset_y}px`
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let activeQuestion = questions.find((item, index) => {
      if (item.question_type === 'welcome') {
        return true;
      } else if (isLoggedIn === '1' && index === 0) {
        return true;
      } else if (item.question_type === 'user_validation') {
        return true;
      }
      return false;
    });
    setChatBubbleState({
      ...chatBubbleState,
      singleForm: JSON.parse(data),
      activeQuestion: activeQuestion,
      isLoggedIn: isLoggedIn,
      estimatedTime: null,
      nextQuestion: null,
      isFinalSubmissionActive: false,
      userVerificationField: 'default',
      userEmail: '',
      submittedQuestions: [],
      reWatchedQuestionIds: [],
      cachedQuestionsValue: [],
      responseToken: null,
      isProcessingSubmitCallback: null,
      beforeSubmitCallback: null,
      beforeSubmitCallbackArgs: null,
      submissionServerError: null
    });
    if (window.templatiqGlobalState) {
      window.templatiqGlobalState = {};
    }
  }, [chatBubbleState?.chatBubble?.isChatFormActive]);
  return singleForm && singleForm.is_chat_bubble === '1' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_5__.ChatBubbleContainerStyle, null, chatBubbleState.chatBubble.isChatFormActive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: chatBubbleState.chatBubble.isChatFormMinimized ? 'none' : 'block'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_5__.ChatBubbleFormStyle, {
    className: `templatiq-chat-bubble-form templatiq-chat-bubble-form--${position}`,
    style: bubbleFormStyles
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ChatForm, {
    moduleState: chatBubbleState,
    setModuleState: setChatBubbleState,
    isFloatingForm: isFloatingForm
  }))), (!chatBubbleState.chatBubble.isChatFormActive || chatBubbleState.chatBubble.isChatFormMinimized) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/ChatBubble'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    bubbleSettings: bubble,
    moduleState: chatBubbleState,
    setModuleState: setChatBubbleState,
    isClientModeActive: true
  }));
};
function ChatBubbleModule(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClientProvider, {
    client: _queryStore__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_ChatBubbleContext__WEBPACK_IMPORTED_MODULE_2__.ChatBubbleStateProvider, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ChatBubbleCircle, {
    ...props
  })));
}

/***/ }),

/***/ "./src/js/modules/ChatBubble/style.js":
/*!********************************************!*\
  !*** ./src/js/modules/ChatBubble/style.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatBubbleContainerStyle: () => (/* binding */ ChatBubbleContainerStyle),
/* harmony export */   ChatBubbleFormStyle: () => (/* binding */ ChatBubbleFormStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const ChatBubbleFormStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    position: fixed;
    max-width: 800px;
    width: 100%;
    bottom: var(--templatiq-bubble-form-offset-y);
    height: min(80vh, 550px);
    z-index: 9999;
    animation: 0.4s ease-in-out 0s 1 normal none running templatiqOpeningAnimation;
    @media only screen and (max-width: 991px){
        max-width: 700px;
    }
    @media only screen and (max-width: 768px){
        width: calc(100% - 60px);
        height: unset;
    }
     &.templatiq-chat-bubble-form{
        position: fixed;
        &--left{
            left: var(--templatiq-bubble-form-offset-x);
        }
        &--right{
            right: var(--templatiq-bubble-form-offset-x);
        }
        .templatiq-preview-container{
            overflow: unset;
        }
        .templatiq-preview-media-right{
            .templatiq-question-element-wrapper{
                padding-left: 40px;
            }
            .templatiq-media-src__image .templatiq-media-src__overlay{
                border-radius: 0 20px 20px 0;
            }
            .templatiq-countdown{
                border-radius: 0;
            }
        }
        .templatiq-media-src__image .templatiq-media-src__overlay{
            border-radius: 20px 0 0 20px;
        }

    }
`;
const ChatBubbleContainerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    .templatiq-chat-bubble{
        position: fixed;
    }
`;


/***/ })

}]);
//# sourceMappingURL=src_js_modules_ChatBubble_index_js.js.map