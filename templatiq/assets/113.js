"use strict";(globalThis.webpackChunktemplatiq=globalThis.webpackChunktemplatiq||[]).push([[113],{3113:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var l=a(9196),n=a(9307),r=a(2694),s=a(9655),i=a(9250),o=a(1893),m=a(6989),c=a.n(m);async function u(e,t){return await c()({path:e,...t}).then((e=>e)).catch((e=>{throw e}))}var p=a(4684),f=a(9818),d=a(7324);const h=(0,n.lazy)((()=>Promise.all([a.e(934),a.e(582),a.e(842),a.e(240)]).then(a.bind(a,3240)))),E=(0,n.lazy)((()=>Promise.all([a.e(934),a.e(804)]).then(a.bind(a,8804)))),g=(0,n.lazy)((()=>Promise.all([a.e(934),a.e(582),a.e(842),a.e(540)]).then(a.bind(a,9540)))),y=(0,n.lazy)((()=>Promise.all([a.e(934),a.e(582),a.e(842),a.e(190)]).then(a.bind(a,190)))),b=(0,n.lazy)((()=>Promise.all([a.e(934),a.e(532)]).then(a.bind(a,6532)))),S=(0,n.lazy)((()=>Promise.all([a.e(934),a.e(767)]).then(a.bind(a,1770)))),k=(0,n.lazy)((()=>Promise.all([a.e(934),a.e(582),a.e(967)]).then(a.bind(a,4967)))),I=(0,n.lazy)((()=>Promise.all([a.e(934),a.e(428)]).then(a.bind(a,2428)))),T=(0,n.lazy)((()=>Promise.all([a.e(934),a.e(628)]).then(a.bind(a,9628)))),_=(0,n.lazy)((()=>Promise.all([a.e(934),a.e(440)]).then(a.bind(a,440))));function q(){const[e,t]=(0,n.useState)("ltr"),[a,m]=(0,n.useState)(!1),[c,q]=(0,n.useState)(!1),N={direction:e};(0,n.useEffect)((()=>{u("templatiq/template/library").then((e=>{(0,f.dispatch)(d.Z).setTemplates(e.templates),(0,f.dispatch)(d.Z).setLibraryData(e)})).then((()=>{u("templatiq/account/data").then((e=>{const t=e.body,a={isLoggedIn:!!t.token,userEmail:t.user_email,userDisplayName:t.user_display_name,bookmarks:t.bookmarks,downloads:t.downloads,purchased:t.purchased};(0,f.dispatch)(d.Z).setUserInfo(a),m(!0)}))}));const e=document.body.classList.contains("elementor-editor-active");q(e)}),[]);const O=(0,r.applyFilters)("templatiq_admin_routes",[{path:"/*",element:c?(0,l.createElement)(g,null):(0,l.createElement)(h,null)},{path:"/pages",element:(0,l.createElement)(g,null)},{path:"/blocks",element:(0,l.createElement)(y,null)},{path:"/template/:slug",element:(0,l.createElement)(E,null)},{path:"/signin",element:(0,l.createElement)(b,null)},{path:"/signup",element:(0,l.createElement)(S,null)},{path:"/dashboard",element:(0,l.createElement)(k,null)},{path:"/dashboard/favorites",element:(0,l.createElement)(k,null)},{path:"/dashboard/downloads",element:(0,l.createElement)(I,null)},{path:"/dashboard/purchase",element:(0,l.createElement)(T,null)},{path:"/dashboard/account",element:(0,l.createElement)(_,null)}]);return(0,l.createElement)(h,null),(0,l.createElement)(g,null),(0,l.createElement)(y,null),(0,l.createElement)(E,null),(0,l.createElement)(b,null),(0,l.createElement)(S,null),(0,l.createElement)(k,null),(0,l.createElement)(k,null),(0,l.createElement)(I,null),(0,l.createElement)(T,null),(0,l.createElement)(_,null),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.UT,null,(0,l.createElement)(n.Suspense,{fallback:(0,l.createElement)(p.Z,null)},a?(0,l.createElement)(o.f6,{theme:N},(0,l.createElement)(i.Z5,null,O.map(((e,t)=>(0,l.createElement)(i.AW,{key:t,path:e.path,element:e.element}))))):(0,l.createElement)(p.Z,null))))}},4684:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(9196);const n=a(1893).ZP.div`
    &.templatiq-content-loading{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        max-width: 100%;
        min-height: 500px;
        padding: 30px;
        border-radius: 10px;
        margin: 15px;
        box-sizing: border-box;
        background-color: var(--templatiq-color-white);
        flex: 1 1 0%;
        .templatiq-shimmer-effect{
            display: block;
            height: 16px;
            width: 100%;
            background: #f6f7f8;
            background-image: -webkit-linear-gradient(left,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);
            background-image: -o-linear-gradient(left,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);
            background-image: linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);
            background-repeat: no-repeat;
            background-size: 800px 104px;
            display: inline-block;
            position: relative;
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-name: shimmerEffect;
            animation-timing-function: linear;
            &:not(:last-child){
                margin-bottom: 15px;
            }
        }
    }
`,r=({style:e})=>{const t={minHeight:"500px"};return e=e?{...t,...e}:t,(0,l.createElement)(n,{style:e,className:"templatiq-content-loading"},(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}))}},7324:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(9818);const n={getLibraryData(e){const{libraryData:t}=e;return t},getTemplates(e){const{templates:t}=e;return t},getUserInfo(e){const{userInfo:t}=e;return t},getSearchQuery(e){const{searchQuery:t}=e;return t},getFilterSearch(e){const{filterSearch:t}=e;return t}},r={userInfo:{loggedIn:"",userName:"",userEmail:"",bookmarks:[],downloads:[],purchased:[],userDisplayName:""},allTemplates:[],searchQuery:"",filterData:[],favCounts:{},templateStatus:{}},s=(0,l.createReduxStore)("templatiq-stores",{reducer(e=r,t){switch(t.type){case"SET_TEMPLATES":const a={...e,templates:t.templates};return localStorage.setItem("templatiq-stores",JSON.stringify(a)),a;case"SET_LIBRARY":const l={...e,libraryData:t.data};return localStorage.setItem("templatiq-stores",JSON.stringify(l)),l;case"SET_BOOKMARK":const n={...e,userInfo:{...e.userInfo,bookmarks:t.bookmark}};return localStorage.setItem("templatiq-stores",JSON.stringify(n)),n;case"SET_USER_INFO":const r={...e,userInfo:t.userInfo};return localStorage.setItem("templatiq-stores",JSON.stringify(r)),r;case"SET_SEARCH_QUERY":const s={...e,searchQuery:t.searchQuery};return localStorage.setItem("templatiq-stores",JSON.stringify(s)),s;case"SET_FILTER_SEARCH":const i={...e,filterSearch:t.filterSearch};return localStorage.setItem("templatiq-stores",JSON.stringify(i)),i;case"LOG_OUT":const o={...e,userInfo:{isLoggedIn:!1,userName:"",userEmail:"",userDisplayName:""}};return localStorage.setItem("templatiq-stores",JSON.stringify(o)),o}return e},actions:{setLibraryData:e=>({type:"SET_LIBRARY",data:e}),setTemplates:e=>({type:"SET_TEMPLATES",templates:e}),setBookmark:e=>({type:"SET_BOOKMARK",bookmark:e}),setUserInfo:e=>({type:"SET_USER_INFO",userInfo:e}),logOut:()=>({type:"LOG_OUT"}),setSearchQuery:e=>({type:"SET_SEARCH_QUERY",searchQuery:e}),setFilterSearch:e=>({type:"SET_FILTER_SEARCH",filterSearch:e})},selectors:n});(0,l.register)(s);const i=s}}]);