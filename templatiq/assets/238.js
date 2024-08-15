"use strict";(globalThis.webpackChunktemplatiq=globalThis.webpackChunktemplatiq||[]).push([[238],{6238:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var r=a(1609),n=a(819),l=a(1455),s=a.n(l);async function i(e,t){return await s()({path:e,...t}).then((e=>e)).catch((e=>{throw e}))}var o=a(6087),m=a(2619),c=a(4976),u=a(7767),p=a(1686),d=(a(7723),a(9548)),f=a(7143);const h=(0,o.lazy)((()=>Promise.all([a.e(867),a.e(794),a.e(445),a.e(458)]).then(a.bind(a,9458)))),g=(0,o.lazy)((()=>Promise.all([a.e(867),a.e(403)]).then(a.bind(a,1403)))),E=(0,o.lazy)((()=>Promise.all([a.e(867),a.e(794),a.e(445),a.e(261)]).then(a.bind(a,642)))),y=(0,o.lazy)((()=>Promise.all([a.e(867),a.e(794),a.e(445),a.e(487)]).then(a.bind(a,5487)))),b=(0,o.lazy)((()=>Promise.all([a.e(867),a.e(152)]).then(a.bind(a,152)))),S=(0,o.lazy)((()=>Promise.all([a.e(867),a.e(442)]).then(a.bind(a,9442)))),k=(0,o.lazy)((()=>Promise.all([a.e(867),a.e(794),a.e(319)]).then(a.bind(a,5319)))),I=(0,o.lazy)((()=>Promise.all([a.e(867),a.e(391)]).then(a.bind(a,8391)))),_=(0,o.lazy)((()=>Promise.all([a.e(867),a.e(48)]).then(a.bind(a,6048)))),T=(0,o.lazy)((()=>Promise.all([a.e(867),a.e(900)]).then(a.bind(a,3900))));function q(){const[e,t]=(0,o.useState)("ltr"),[a,l]=(0,o.useState)(!1),[s,q]=(0,o.useState)(!1),N={direction:e};(0,o.useEffect)((()=>{i("templatiq/template/library").then((e=>{(0,f.dispatch)(d.A).setTemplates(e.templates),(0,f.dispatch)(d.A).setLibraryData(e)})).then((()=>{i("templatiq/account/data").then((e=>{const t=e,a={isLoggedIn:!!t.token,userEmail:t.user_email,userDisplayName:t.user_display_name,bookmarks:t.bookmarks,downloads:t.downloads,purchased:t.purchased,unlocked:t.unlocked_by_directorist};(0,f.dispatch)(d.A).setUserInfo(a),l(!0)}))}));const e=document.body.classList.contains("elementor-editor-active");q(e)}),[]);const A=(0,m.applyFilters)("templatiq_admin_routes",[{path:"/*",element:s?(0,r.createElement)(E,null):(0,r.createElement)(h,null)},{path:"/pages",element:(0,r.createElement)(E,null)},{path:"/blocks",element:(0,r.createElement)(y,null)},{path:"/template/:slug",element:(0,r.createElement)(g,null)},{path:"/signin",element:(0,r.createElement)(b,null)},{path:"/signup",element:(0,r.createElement)(S,null)},{path:"/dashboard",element:(0,r.createElement)(k,null)},{path:"/dashboard/favorites",element:(0,r.createElement)(k,null)},{path:"/dashboard/downloads",element:(0,r.createElement)(I,null)},{path:"/dashboard/purchase",element:(0,r.createElement)(_,null)},{path:"/dashboard/account",element:(0,r.createElement)(T,null)}]);return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(c.I9,null,(0,r.createElement)(o.Suspense,{fallback:(0,r.createElement)(n.A,null)},a?(0,r.createElement)(p.NP,{theme:N},(0,r.createElement)(u.BV,null,A.map(((e,t)=>(0,r.createElement)(u.qh,{key:t,path:e.path,element:e.element}))))):(0,r.createElement)(n.A,null))))}},819:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(1609);const n=a(1686).Ay.div`
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
`,l=({style:e})=>{const t={minHeight:"500px"};return e=e?{...t,...e}:t,(0,r.createElement)(n,{style:e,className:"templatiq-content-loading"},(0,r.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,r.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,r.createElement)("span",{className:"templatiq-shimmer-effect"}))}},9548:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(7143);const n={getLibraryData(e){const{libraryData:t}=e;return t},getTemplates(e){const{templates:t}=e;return t},getUserInfo(e){const{userInfo:t}=e;return t},getSearchQuery(e){const{searchQuery:t}=e;return t},getFilterSearch(e){const{filterSearch:t}=e;return t}},l={userInfo:{loggedIn:"",userName:"",userEmail:"",bookmarks:[],downloads:[],purchased:[],userDisplayName:""},allTemplates:[],searchQuery:"",filterData:[],favCounts:{},templateStatus:{}},s=(0,r.createReduxStore)("templatiq-stores",{reducer(e=l,t){switch(t.type){case"SET_TEMPLATES":const a={...e,templates:t.templates};return localStorage.setItem("templatiq-stores",JSON.stringify(a)),a;case"SET_LIBRARY":const r={...e,libraryData:t.data};return localStorage.setItem("templatiq-stores",JSON.stringify(r)),r;case"SET_BOOKMARK":const n={...e,userInfo:{...e.userInfo,bookmarks:t.bookmark}};return localStorage.setItem("templatiq-stores",JSON.stringify(n)),n;case"SET_USER_INFO":const l={...e,userInfo:t.userInfo};return localStorage.setItem("templatiq-stores",JSON.stringify(l)),l;case"SET_SEARCH_QUERY":const s={...e,searchQuery:t.searchQuery};return localStorage.setItem("templatiq-stores",JSON.stringify(s)),s;case"SET_FILTER_SEARCH":const i={...e,filterSearch:t.filterSearch};return localStorage.setItem("templatiq-stores",JSON.stringify(i)),i;case"LOG_OUT":const o={...e,userInfo:{isLoggedIn:!1,userName:"",userEmail:"",userDisplayName:""}};return localStorage.setItem("templatiq-stores",JSON.stringify(o)),o}return e},actions:{setLibraryData:e=>({type:"SET_LIBRARY",data:e}),setTemplates:e=>({type:"SET_TEMPLATES",templates:e}),setBookmark:e=>({type:"SET_BOOKMARK",bookmark:e}),setUserInfo:e=>({type:"SET_USER_INFO",userInfo:e}),logOut:()=>({type:"LOG_OUT"}),setSearchQuery:e=>({type:"SET_SEARCH_QUERY",searchQuery:e}),setFilterSearch:e=>({type:"SET_FILTER_SEARCH",filterSearch:e})},selectors:n});(0,r.register)(s);const i=s}}]);