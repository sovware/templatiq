"use strict";(globalThis.webpackChunktemplatiq=globalThis.webpackChunktemplatiq||[]).push([[661],{9719:(e,t,a)=>{a.d(t,{Z:()=>l}),a(9196);const l="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjI0NDA4IDUuMjQ0MDhDNS41Njk1MSA0LjkxODY0IDYuMDk3MTUgNC45MTg2NCA2LjQyMjU5IDUuMjQ0MDhMMTAgOC44MjE0OUwxMy41Nzc0IDUuMjQ0MDhDMTMuOTAyOCA0LjkxODY0IDE0LjQzMDUgNC45MTg2NCAxNC43NTU5IDUuMjQ0MDhDMTUuMDgxNCA1LjU2OTUxIDE1LjA4MTQgNi4wOTcxNSAxNC43NTU5IDYuNDIyNTlMMTEuMTc4NSAxMEwxNC43NTU5IDEzLjU3NzRDMTUuMDgxNCAxMy45MDI4IDE1LjA4MTQgMTQuNDMwNSAxNC43NTU5IDE0Ljc1NTlDMTQuNDMwNSAxNS4wODE0IDEzLjkwMjggMTUuMDgxNCAxMy41Nzc0IDE0Ljc1NTlMMTAgMTEuMTc4NUw2LjQyMjU5IDE0Ljc1NTlDNi4wOTcxNSAxNS4wODE0IDUuNTY5NTEgMTUuMDgxNCA1LjI0NDA4IDE0Ljc1NTlDNC45MTg2NCAxNC40MzA1IDQuOTE4NjQgMTMuOTAyOCA1LjI0NDA4IDEzLjU3NzRMOC44MjE0OSAxMEw1LjI0NDA4IDYuNDIyNTlDNC45MTg2NCA2LjA5NzE1IDQuOTE4NjQgNS41Njk1MSA1LjI0NDA4IDUuMjQ0MDhaIiBmaWxsPSIjMzUzNTNEIi8+Cjwvc3ZnPgo="},8886:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(9196),i=a(9307),n=a(9818),o=a(3082),r=a(4934),m=a(5668),_=a(7324),s=a(7045);const p="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMS4wODciIHZpZXdCb3g9IjAgMCAyNCAyMS4wODciPgogIDxwYXRoIGlkPSJoZWFydCIgZD0iTTE3LjQ5MywxLjkxN2E2LjQsNi40LDAsMCwwLTUuNSwzLjMsNi40LDYuNCwwLDAsMC01LjUtMy4zQTYuOCw2LjgsMCwwLDAsMCw4Ljk2NGMwLDQuNTQ1LDQuNzg0LDkuNTA5LDguOCwxMi44NzVhNC45NzIsNC45NzIsMCwwLDAsNi40LDBjNC4wMTItMy4zNjYsOC44LTguMzMsOC44LTEyLjg3NWE2LjgsNi44LDAsMCwwLTYuNS03LjA0N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDA1IC0xLjkxNykiIGZpbGw9IiNhMmEyYTIiLz4KPC9zdmc+Cg==",c=e=>{let{template_id:t,number_of_bookmarks:a}=e.item;const[c,d]=(0,i.useState)(e.type?e.type:""),{isLoggedIn:u,bookmarks:g}=(0,n.select)(_.Z).getUserInfo(),h=g&&g.includes(t),[q,b]=(0,i.useState)(!1),[N,E]=(0,i.useState)(a),[x,f]=(0,i.useState)(h),y=l=>{if(l.preventDefault(),x)(e=>{(0,o.Z)("templatiq/bookmark/remove",{template_id:e}).then((e=>{(0,n.dispatch)(_.Z).setBookmark(e.body.bookmarks)}))})(t),E(a),f(!1);else{(e=>{(0,o.Z)("templatiq/bookmark/add",{template_id:e}).then((e=>{(0,n.dispatch)(_.Z).setBookmark(e.body.bookmarks)}))})(t);const e=Number(N)+1;E(e),f(!0)}e.onFavoriteCountUpdate?.(x)};return(0,i.useEffect)((()=>{E(x?Number(a)+1:a)}),[]),(0,l.createElement)(l.Fragment,null,"single"===c?(0,l.createElement)("a",{href:"#",className:"templatiq__details__header__action__link add-to-favorite templatiq-btn templatiq-btn-white "+(x?"active":""),onClick:e=>y(e)},(0,l.createElement)(r.Z,{src:x?p:s.Z,width:16,height:16})):u?(0,l.createElement)("a",{href:"#",className:"templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip "+(x?"active":""),"data-info":x?"Added to Favourite":"Add to Favourite",onClick:y},(0,l.createElement)(r.Z,{src:x?p:s.Z,width:14,height:14}),N||""):(0,l.createElement)(l.Fragment,null,q?(0,l.createElement)(m.Z,{modalEnable:!0,onClose:()=>{b(!1)}}):"",(0,l.createElement)("a",{href:"#",className:"templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip","data-info":"Add to Favourite",onClick:e=>{e.preventDefault(),document.querySelector(".templatiq").classList.add("templatiq-overlay-enable"),b(!0)}},(0,l.createElement)(r.Z,{src:s.Z,width:14,height:14}),a||"")))}},1215:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(9196),i=a(9307),n=a(3082),o=a(9818),r=a(4934),m=a(5668),_=a(7324),s=a(4122),p=a(9719);const c=({item:e,required_plugins:t,onClose:a})=>{const{template_id:o,builder:m}=e,_=t.filter((e=>!e.hasOwnProperty("is_pro")||"false"===e.is_pro)),c=t.filter((e=>e.hasOwnProperty("is_pro")&&"true"===e.is_pro));let[d,u]=(0,i.useState)([]),[g,h]=(0,i.useState)(""),[q,b]=(0,i.useState)(!1);const[N,E]=(0,i.useState)([]),[x,f]=(0,i.useState)([]),[y,v]=(0,i.useState)(!0),[w,M]=(0,i.useState)(!1),[k,D]=(0,i.useState)(!1),[L,I]=(0,i.useState)(!1);let C=e=>{e.preventDefault();let t=document.querySelector(".templatiq");t&&t.classList.remove("templatiq-overlay-enable"),a()};const j=async e=>{b(!0),v(!0),E((t=>[...t,e.slug]));try{await new Promise(((t,a)=>{(0,n.Z)("templatiq/dependency/install",{plugin:e}).then((l=>{b(!1),l.success?(f((t=>[...t,e.slug])),u(d.filter((t=>t.slug!==e.slug))),t(l)):a(new Error("Installation failed"))}))}))}catch(e){console.error("Error installing plugin:",e),b(!1)}},S=async e=>{await(async(e,t)=>{var a={unique_id:e,data:{edit_mode:!0,display:!0,template_id:e}};t&&jQuery.extend(!0,a,t),elementorCommon.ajax.addRequest("get_templatiq_template_data",a)})(e,{success:function(e){console.log(e);const t=e,a=Backbone.Model.extend({defaults:{title:"",type:""}});$e.run("document/elements/import",{model:new a,data:t})},error:function(e){console.log("Error: ",e)},complete:function(e){console.log("Complete: ",e)}})};return(0,i.useEffect)((()=>{_.every((e=>x.includes(e.slug)))&&(M(!0),u([]))}),[x,_]),(0,i.useEffect)((()=>{const e=document.body.classList.contains("elementor-editor-active");I(e),e&&!_.length&&S(o)}),[]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.y8,{className:"templatiq__modal templatiq__modal--required "+(q&&w?"templatiq__loading":"")},(0,l.createElement)("form",{className:"templatiq__modal__form",onSubmit:async e=>{e.preventDefault();for(const e of d)await j(e);L&&S(o)}},(0,l.createElement)("div",{className:"templatiq__modal__content"},k?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h2",{className:"templatiq__modal__title"},"Imported Successfully"),(0,l.createElement)("p",{className:"templatiq__modal__desc"},"You can edit or preview the template or you can push it to Templatiq cloud to share with your team."),(0,l.createElement)("div",{className:"templatiq__modal__actions"},(0,l.createElement)("a",{href:k.elementor_edit_link,target:"_blank",className:"templatiq-btn templatiq-btn-primary"},"Edit Template with Elementor"),(0,l.createElement)("a",{href:k.visit,target:"_blank",className:"templatiq-btn templatiq-btn-primary"},"View Template"))):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h2",{className:"templatiq__modal__title"},w?L?"Importing...":"Enter Page Title":"Required Plugins"),w&&!L?(0,l.createElement)("p",{className:"templatiq__modal__desc"},"To import this item you need to install all the Plugin listed below."):"",(0,l.createElement)("div",{className:"templatiq__modal__plugins"},w?(0,l.createElement)("div",{className:"templatiq__modal__page"},L?(0,l.createElement)("p",{className:"templatiq__modal__desc"},"Elementor Content Importing"):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{type:"text",className:"templatiq__modal__page__title",placeholder:"Enter Page Title",onChange:e=>(e=>{e.preventDefault(),h(e.target.value)})(e)}),(0,l.createElement)("button",{type:"button",className:"templatiq__modal__page__button templatiq-btn templatiq-btn-primary",onClick:()=>(async(e,t,a)=>{b(!0),(0,n.Z)("templatiq/template/import-as-page",{title:e,template_id:t,builder:a}).then((e=>{b(!1),e.post_id&&D(e)}))})(g,o,m),disabled:""===g},"Create a Page"))):(0,l.createElement)(l.Fragment,null,_&&_.map(((e,t)=>{let a=N.includes(e.slug),i="";return x.includes(e.slug)?i="Installed":a&&(i="Installing..."),(0,l.createElement)("div",{key:t,className:"templatiq__modal__plugin templatiq__checkbox"},(0,l.createElement)("input",{id:o+"_"+t,name:o+"_"+t,type:"checkbox",className:"templatiq__modal__plugin__checkbox templatiq__checkbox__input",onChange:()=>(e=>{const t=d.includes(e)?d.filter((t=>t!==e)):[...d,e];return u(t),v(0===t.length),t})(e),disabled:a||""!==i}),(0,l.createElement)("label",{htmlFor:o+"_"+t,className:"templatiq__modal__plugin__label templatiq__checkbox__label"},(0,l.createElement)("a",{href:"#",className:"templatiq__modal__plugin__link"},e.name)),(0,l.createElement)("span",{className:"templatiq__modal__plugin__status"},i))})),c&&c.map(((e,t)=>(0,l.createElement)("div",{key:t,className:"templatiq__modal__plugin templatiq__checkbox"},(0,l.createElement)("input",{id:o+"_pro_"+t,name:o+"_pro_"+t,type:"checkbox",className:"templatiq__modal__plugin__checkbox templatiq__checkbox__input",disabled:!0}),(0,l.createElement)("label",{htmlFor:o+"_pro_"+t,className:"templatiq__modal__plugin__label templatiq__checkbox__label"},(0,l.createElement)("a",{href:"#",className:"templatiq__modal__plugin__link"},e.name)),(0,l.createElement)("span",{className:"templatiq__modal__plugin__status"},"It's Pro Plugin")))))),w&&!L?(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,l.createElement)("strong",null,"Note:")," Make sure you have manually installed & activated the Pro Plugin listed above."):"",(0,l.createElement)("div",{className:"templatiq__modal__actions"},w?"":(0,l.createElement)("button",{type:"submit",disabled:y,className:"templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-primary"},"Install and Proceed to Import"),(0,l.createElement)("button",{className:"templatiq__modal__action templatiq__modal__action--cancel templatiq-btn",onClick:C},"Cancel"))))),(0,l.createElement)("button",{className:"templatiq__modal__cancel__button",onClick:C},(0,l.createElement)(r.Z,{src:p.Z,width:20,height:20}))))},d="data:image/svg+xml;base64,PHN2ZyBpZD0iZG93bmxvYWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgMTIgMTIiPgogIDxwYXRoIGlkPSJQYXRoXzE1NTYiIGRhdGEtbmFtZT0iUGF0aCAxNTU2IiBkPSJNMTEzLjEzNCw4Ljg0YTIuMjU1LDIuMjU1LDAsMCwwLDMuMTg1LDBoMGwxLjYwNy0xLjZhLjc1Ljc1LDAsMSwwLTEuMDQzLTEuMDc4bC0uMDE4LjAxOC0xLjM5MywxLjM4OUwxMTUuNDYxLjc0OUEuNzUuNzUsMCwwLDAsMTE0LjcxLDBoMGEuNzUuNzUsMCwwLDAtLjc1MS43NDlsLjAxLDYuODA2LTEuMzgyLTEuMzc5YS43NS43NSwwLDAsMC0xLjA2MSwxLjA1OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDguNzEpIiBmaWxsPSIjNmU2ZTZlIi8+CiAgPHBhdGggaWQ9IlBhdGhfMTU1NyIgZGF0YS1uYW1lPSJQYXRoIDE1NTciIGQ9Ik0xMS4yNSwzMDkuMzMzYS43NS43NSwwLDAsMC0uNzUuNzQ5djIuMjkzYS4yLjIsMCwwLDEtLjIuMkgxLjdhLjIuMiwwLDAsMS0uMi0uMnYtMi4yOTNhLjc1Ljc1LDAsMCwwLTEuNSwwdjIuMjkzYTEuNzA2LDEuNzA2LDAsMCwwLDEuNywxLjdIMTAuM2ExLjcwNSwxLjcwNSwwLDAsMCwxLjctMS43di0yLjI5M0EuNzUuNzUsMCwwLDAsMTEuMjUsMzA5LjMzM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwMi4wNzgpIiBmaWxsPSIjNmU2ZTZlIi8+Cjwvc3ZnPgo=";var u=a(7915);const g=({item:e,templateRef:t,className:a,innerText:s,solidIcon:p})=>{let{template_id:g,required_plugins:h,type:q}=e;const{isLoggedIn:b}=(0,o.select)(_.Z).getUserInfo(),[N,E]=(0,i.useState)(!1),[x,f]=(0,i.useState)(!1),[y,v]=(0,i.useState)([]),w=e=>{e.preventDefault(),document.querySelector(".templatiq").classList.add("templatiq-overlay-enable"),f(!0)},M=async e=>{(0,n.Z)("templatiq/dependency/check",{plugins:e}).then((e=>{v(e)}))};return(0,i.useEffect)((()=>{M(h)}),[]),(0,l.createElement)(l.Fragment,null,N&&y&&(0,l.createElement)(c,{item:e,required_plugins:y,onClose:()=>{E(!1)}}),x&&(0,l.createElement)(m.Z,{modalEnable:!0,onClose:()=>{f(!1)}}),"pack"!==q?(0,l.createElement)("button",{id:g,className:a||"templatiq__template__single__info__action__link insert-btn tmTemplateLibrary__insert-button",onClick:e=>b?(async e=>{e.preventDefault(),document.querySelector(".templatiq").classList.add("templatiq-overlay-enable"),t&&t.current&&t.current.classList.add("insert-modal-open");try{await M(h),E(!0)}catch(e){console.error("Error fetching installable plugins:",e)}})(e):w(e)},(0,l.createElement)(r.Z,{src:p?d:u.Z,width:14,height:14}),s||"Insert"):(0,l.createElement)("a",{href:`?page=starter-templates&template_id=${g}`,target:"_blank",className:a||"templatiq__template__single__info__action__link insert-btn tmTemplateLibrary__insert-button",onClick:e=>b?null:w(e)},(0,l.createElement)(r.Z,{src:p?d:u.Z,width:14,height:14}),s||"Insert Full Site"))}},5668:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(9196),i=a(9307),n=a(4934),o=a(3614),r=a(7028),m=a(4122),_=a(9719);const s=({onClose:e})=>{const[t,a]=(0,i.useState)(!1);return(0,l.createElement)(m._k,{className:"templatiq__modal"},t?(0,l.createElement)(r.Z,null):(0,l.createElement)(o.Z,null),(0,l.createElement)("button",{className:"templatiq__modal__cancel__button",onClick:()=>{let t=document.querySelector(".templatiq");t&&t.classList.remove("templatiq-overlay-enable"),e()}},(0,l.createElement)(n.Z,{src:_.Z,width:20,height:20})),(0,l.createElement)("div",{className:"templatiq__modal__bottom"},t?"Already have an account?":"Don't have an account?"," ",(0,l.createElement)("a",{href:"",className:"templatiq__modal__another__btn",onClick:e=>{e.preventDefault(),a(!t)}},t?"Sign in":"Sign up")))}},4122:(e,t,a)=>{a.d(t,{_k:()=>n,y8:()=>i});var l=a(1893);l.ZP.div`
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    padding: 26px 32px 32px;
    background-color: var(--templatiq-white-color);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    .templatiq__modal__title {
        font-size: 21px;
        line-height: 25px;
        font-weight: 600;
        margin: 0 0 20px;
        text-align: start;
        color: var(--templatiq-black-color);
    }
    .templatiq__modal__desc {
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        margin: 0;
        color: var(--templatiq-body-color);
        strong {
            font-weight: 600;
            color: var(--templatiq-dark-color);
        }
    }
    .templatiq__modal__plugins {
        margin: 20px 0;
        .install_status {
            &.installed {
                color: var(--templatiq-success-color);
            }
        }
        a {
            position: relative;
            top: -2px;
            font-size: 15px;
            line-height: 20px;
            font-weight: 600;
            color: var(--templatiq-primary-color);
            z-index: -1;
        }
    }
    .templatiq__modal__page {
        display: flex;
        align-items: center;
        gap: 15px;
        .templatiq__modal__page__title {
            flex: 1;
            height: 36px;
            padding: 0 20px;
            border: 1px solid #9f9f9f;
        }
    }
    .templatiq__modal__actions {
        display: flex;
        gap: 12px;
        margin: 20px 0 0;
    }
    .templatiq__modal__action {
        height: 40px;
        padding: 0 20px;
    }
    .templatiq__modal__cancel__button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        position: absolute;
        top: 20px;
        inset-inline-end: 20px;
        cursor: pointer;
        background-color: var(--templatiq-sec-color);
        transition: background-color 0.3s ease;
        path {
            fill: var(--templatiq-dark-color);
            transition: fill 0.3s ease;
        }
        &:hover {
            background-color: var(--templatiq-primary-color);
            path {
                fill: var(--templatiq-white-color);
            }
        }
    }
`;const i=l.ZP.div`
    .templatiq__modal__title {
        font-size: 21px;
        line-height: 25px;
        font-weight: 600;
        margin: 0 0 20px;
        text-align: start;
        color: var(--templatiq-black-color);
    }
    .templatiq__modal__desc {
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        margin: 0;
        color: var(--templatiq-body-color);
        strong {
            font-weight: 600;
            color: var(--templatiq-dark-color);
        }
    }
    .templatiq__modal__plugins {
        margin: 20px 0;
        .install_status {
            &.installed {
                color: var(--templatiq-success-color);
            }
        }
        a {
            position: relative;
            top: -2px;
            font-size: 15px;
            line-height: 20px;
            font-weight: 600;
            color: var(--templatiq-primary-color);
            z-index: -1;
        }
    }
    .templatiq__modal__page {
        display: flex;
        align-items: center;
        gap: 15px;
        .templatiq__modal__page__title {
            flex: 1;
            height: 36px;
            padding: 0 20px;
            border: 1px solid #9f9f9f;
        }
    }
    .templatiq__modal__actions {
        display: flex;
        gap: 12px;
        margin: 20px 0 0;
    }
    .templatiq__modal__action {
        height: 40px;
        padding: 0 20px;
    }
`,n=l.ZP.div`
    width: 500px;
    .templatiq__auth {
        height: auto;
        padding: 0;
    }
    .templatiq__auth__wrapper {
        width: auto;
        padding: 0;
        margin: 0;
    }
    .templatiq__auth__actions {
        .templatiq__auth__desc {
            display: none;
        }
    }

    .templatiq__modal__bottom {
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        text-align: center;
        margin-top: 20px;
        color: var(--templatiq-body-color);
        a {
            color: var(--templatiq-primary-color);
        }
    }
`},661:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=a(9196),i=a(9818),n=a(9307),o=a(4934),r=a(9655),m=a(8886),_=a(1215),s=a(4684);const p=a(1893).ZP.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    background: var(--templatiq-white-color);
    padding: 20px 20px 24px;
    border-radius: 16px;
    box-shadow: var(--templatiq-box-shadow);
    .templatiq__template__single__img {
        display: flex;
        position: relative;
        border-radius: 12px;
        min-height: 150px;
        img {
            width: 100%;
        }
    }

    .templatiq__template__single__overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: #00000020;
            border-radius: 12px;
        }
    }
    .templatiq__template__single__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 12px;
        box-sizing: border-box;
    }

    &:hover {
        .templatiq__template__single__overlay,
        .templatiq__template__single__info__action,
        .templatiq__template__single__info__required {
            opacity: 1;
            visibility: visible;
        }
    }

    .templatiq__template__single__info__meta__item {
        display: inline-flex;
        gap: 6px;
        align-items: center;
        height: 32px;
        padding: 0 12px;
        border-radius: 8px;
        color: var(--templatiq-pro-color);
        background: var(--templatiq-dark-color);
        font-size: 13px;
        line-height: 20px;
        font-weight: 600;
        transition: background 0.3s ease;
        path {
            fill: var(--templatiq-pro-color);
        }
    }
    .templatiq__template__single__info__action {
        display: flex;
        gap: 8px;
        justify-content: center;
        visibility: hidden;
        transition: visibility 0.3s ease;
        .templatiq__template__single__info__action__link {
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 13px;
            line-height: 20px;
            font-weight: 600;
            height: 36px;
            padding: 0 16px;
            border-radius: 8px;
            box-shadow: none;
            cursor: pointer;
            color: var(--templatiq-btn-color);
            background-color: var(--templatiq-white-color);
            &.purchase-btn {
                color: var(--templatiq-white-color);
                background-color: var(--templatiq-primary-color);
                path {
                    fill: var(--templatiq-white-color);
                }
            }
            &.insert-btn {
                color: var(--templatiq-white-color);
                background-color: var(--templatiq-success-color);
                path {
                    fill: var(--templatiq-white-color);
                }
            }
        }
    }
    .templatiq__template__single__info__required {
        display: flex;
        gap: 8px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        .templatiq__template__single__info__required__item {
            position: relative;
            display: inline-flex;
            padding: 4px;
            border-radius: 8px;
            background-color: var(--templatiq-white-color);
        }
    }

    .templatiq__template__single__title {
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        margin: 0 0 4px;
        text-align: start;
        a {
            color: var(--templatiq-dark-color);
            &:hover {
                color: var(--templatiq-primary-color);
            }
        }
    }
    .templatiq__template__single__cat {
        display: flex;
        gap: 8px;
        margin: 0 0 16px;
    }
    .templatiq__template__single__cat__link {
        font-size: 13px;
        line-height: 20px;
        font-weight: 500;
        color: var(--templatiq-gray-color);
        &:hover {
            color: var(--templatiq-primary-color);
        }
        &:not(:last-of-type) {
            position: relative;
            padding-inline-end: 12px;
            &:after {
                content: '';
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: #D1D1D7;
                position: absolute;
                inset-inline-end: 0;
                top: 9px;
            }
        }
    }

    .templatiq__template__single__cat__dropdown {
        position: relative;
        .templatiq__template__single__cat__link::after {
            display: none;
        }
    }
    .templatiq__template__single__cat__button {
        padding: 0;
        line-height: 1;
        cursor: pointer;
        background: transparent;
    }
    .templatiq__template__single__cat__dropdown-content {
        position: absolute;
        bottom: 100%;
        right: 0;
        padding: 10px 15px;
        background: var(--templatiq-white-color);
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);
        min-width: 120px;
        display: flex;
        gap: 10px;
        flex-direction: column;
    }

    .templatiq__template__single__quickmeta {
        display: flex;
        gap: 6px;
    }
    .templatiq__template__single__quickmeta__item {
        display: flex;
        gap: 6px;
        align-items: center;
        height: 28px;
        padding: 0 12px;
        border-radius: 8px;
        color: var(--templatiq-body-color);
        background: var(--templatiq-sec-color);
        box-shadow: none;
        transition: background 0.3s ease;
        path {
            fill: var(--templatiq-gray-color);
        }
        &.pro-item {
            color: var(--templatiq-primary-color);
            background-color: #F2ECFF;
        }
        &.free-item {
            color: #26A764;
            background-color: #E1F6EC;
        }
        &.favorite-btn {
            &:hover {
                background-color: #F2ECFF;
                path {
                    fill: var(--templatiq-primary-color);
                }
            }
            &.active {
                path {
                    fill: var(--templatiq-danger-color);
                }
            }
        }
    }

    .templatiq-tooltip {
        position: relative;
        &:before {
            content: attr(data-info);
            position: absolute;
            top: -45px;
            left: 50%;
            transform: translateX(-50%);
            min-width: 135px;
            text-align: center;
            color: var(--templatiq-white-color);
            font-size: 13px;
            font-weight: 600;
            padding: 8px 12px;
            border-radius: 8px;
            background-color: var(--templatiq-dark-color);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        &:after {
            content: '';
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            border-top: 10px solid var(--templatiq-dark-color);
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        &:hover {
            &:before,
            &:after {
                opacity: 1;
                visibility: visible;
            }
        }
    }
`;var c=a(7324),d=a(9248),u=a(1329),g=a(7915);const h=e=>{let{slug:t,preview_link:a,purchase_url:h,thumbnail:q,title:b,price:N,number_of_downloads:E,categories:x,required_plugins:f}=e;const[y,v]=(0,n.useState)(!1),[w,M]=(0,n.useState)([]),[k,D]=(0,n.useState)([]),[L,I]=(0,n.useState)(!1),C=(0,n.useRef)(null);return(0,n.useEffect)((()=>{const e=(0,i.select)(c.Z).getLibraryData(),t=x.map((t=>e.categories[t])),a=t.length<3?t:t.slice(0,2),l=t.slice(2);M(a),D(l)}),[]),(0,l.createElement)(p,{className:"templatiq__template__single",ref:C},(0,l.createElement)("div",{className:"templatiq__template__single__img"},L?(0,l.createElement)("img",{src:q,alt:b}):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.Z,{style:{margin:0,minHeight:"unset"}}),(0,l.createElement)("img",{src:q,alt:b,onLoad:()=>{I(!0)},style:{display:"none"}})),(0,l.createElement)("div",{className:"templatiq__template__single__overlay"}),(0,l.createElement)("div",{className:"templatiq__template__single__info"},(0,l.createElement)("div",{className:"templatiq__template__single__info__meta"},N>0?(0,l.createElement)("span",{className:"templatiq__template__single__info__meta__item pro-item"},(0,l.createElement)(o.Z,{src:d.Z,width:16,height:16}),"Pro"):""),(0,l.createElement)("div",{className:"templatiq__template__single__info__action"},(0,l.createElement)("a",{href:a,target:"_blank",className:"templatiq__template__single__info__action__link"},"Live Demo"),N>0?(0,l.createElement)("a",{href:h,target:"_blank",className:"templatiq__template__single__info__action__link purchase-btn"},(0,l.createElement)(o.Z,{src:u.Z,width:14,height:14}),"Purchase"):(0,l.createElement)(_.Z,{item:e,templateRef:C,className:"templatiq__template__single__info__action__link insert-btn tmTemplateLibrary__insert-button"})),(0,l.createElement)("div",{className:"templatiq__template__single__info__required"},f&&f.map(((e,t)=>(0,l.createElement)("a",{key:t,href:"#",className:"templatiq__template__single__info__required__item templatiq-tooltip","data-info":e.name},(0,l.createElement)("img",{src:`${template_market_obj.assets_url}/svg/icon/${e.slug}.svg`,width:28,height:28}))))))),(0,l.createElement)("div",{className:"templatiq__template__single__content"},(0,l.createElement)("h3",{className:"templatiq__template__single__title"},(0,l.createElement)(r.rU,{to:`/template/${t}`},b||"DDoctors")),(0,l.createElement)("div",{className:"templatiq__template__single__cat"},w.map(((e,t)=>(0,l.createElement)("a",{key:t,href:"#",className:"templatiq__template__single__cat__link"},e))),k.length>0&&(0,l.createElement)("div",{className:"templatiq__template__single__cat__dropdown"},(0,l.createElement)("button",{className:"templatiq__template__single__cat__button",onClick:()=>v(!y)},"..."),y&&(0,l.createElement)("div",{className:"templatiq__template__single__cat__dropdown-content"},k.map(((e,t)=>(0,l.createElement)("a",{key:t,href:"#",className:"templatiq__template__single__cat__link"},e)))))),(0,l.createElement)("div",{className:"templatiq__template__single__quickmeta"},N>0?(0,l.createElement)("span",{className:"templatiq__template__single__quickmeta__item pro-item"},N?"$"+N:""):(0,l.createElement)("span",{className:"templatiq__template__single__quickmeta__item free-item"},"Free"),(0,l.createElement)("span",{className:"templatiq__template__single__quickmeta__item templatiq-tooltip","data-info":"Total Downloads"},(0,l.createElement)(o.Z,{src:g.Z,width:14,height:14}),E||""),(0,l.createElement)(m.Z,{item:e}))))}},3614:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(9196),i=a(9307),n=a(3082),o=a(9818),r=a(9250),m=a(9655),_=a(2646),s=a(7324);function p(){const e=(0,r.s0)();let[t,a]=(0,i.useState)(!1);const{isLoggedIn:p}=(0,o.select)(s.Z).getUserInfo(),[c,d]=((0,o.select)(s.Z).getUserInfo(),(0,i.useState)({authorEmail:"riaz",authorPassword:"fffffffffddddd"})),u=e=>{d({...c,[e.target.name]:e.target.value})};return(0,i.useEffect)((()=>{p&&e("/")}),[]),(0,l.createElement)(_.dr,{className:"templatiq__auth"},(0,l.createElement)("h3",{className:"templatiq__auth__title"},"Sign in to your account"),(0,l.createElement)("form",{className:"templatiq__auth__wrapper",onSubmit:t=>{t.preventDefault(),(async t=>{(0,n.Z)("templatiq/account/login",t).then((t=>{const l=t.body;if(l.token){const t={isLoggedIn:!0,userName:l.user_nicename,userEmail:l.user_email,userDisplayName:l.user_display_name,bookmarks:l.bookmarks,downloads:l.downloads,purchased:l.purchased};(0,o.dispatch)(s.Z).setUserInfo(t),e("/dashboard/favorites")}else a(!1)}))})({username:authorEmail.value,password:authorPassword.value})}},(0,l.createElement)("div",{className:"templatiq__auth__info"},(0,l.createElement)("div",{className:"templatiq__auth__info__single"},(0,l.createElement)("label",{htmlFor:"authorEmail"},"Email Address"),(0,l.createElement)("input",{type:"text",id:"authorEmail",name:"authorEmail",value:c.authorEmail,onChange:u})),(0,l.createElement)("div",{className:"templatiq__auth__info__single"},(0,l.createElement)("label",{htmlFor:"authorPassword"},"Password"),(0,l.createElement)("input",{type:"password",id:"authorPassword",name:"authorPassword",value:c.authorPassword,onChange:u}))),(0,l.createElement)("div",{className:"templatiq__auth__actions"},(0,l.createElement)("div",{className:"templatiq__auth__actions__wrapper"},(0,l.createElement)("div",{className:"templatiq__checkbox templatiq__auth__remember"},(0,l.createElement)("input",{type:"checkbox",name:"rememberMe",id:"rememberMe",className:"templatiq__checkbox__input"}),(0,l.createElement)("label",{for:"rememberMe",className:"templatiq__checkbox__label"},"Remember Me")),(0,l.createElement)("div",{className:"templatiq__auth__forgot"},(0,l.createElement)("a",{href:"#",target:"_blank",className:"templatiq__auth__link"},"Forgot password?"))),(0,l.createElement)("button",{type:"submit",onClick:()=>{a(!0)},className:"templatiq__auth__btn templatiq-btn templatiq-btn-primary "+(t?"templatiq__loading templatiq__loading--btn":"")},"Sign In"),(0,l.createElement)("span",{className:"templatiq__auth__desc"},"Don't have an account?",(0,l.createElement)(m.rU,{to:"/signup",className:"templatiq__auth__link"},"Sign up")))))}},7028:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(9196),i=a(9307),n=a(3082),o=a(9250),r=a(9655),m=a(2646),_=a(9818),s=a(7324);function p(){const e=(0,o.s0)();let[t,a]=(0,i.useState)(!1);const[p,c]=(0,i.useState)(!1);let[d,u]=(0,i.useState)("");const[g,h]=(0,i.useState)({authorFullName:"Ibrahim Riaz",authorEmail:"riaz@sovware.com"}),{isLoggedIn:q}=(0,_.select)(s.Z).getUserInfo(),b=e=>{h({...g,[e.target.name]:e.target.value})};return(0,i.useEffect)((()=>{q&&e("/dashboard/favorites")}),[]),(0,l.createElement)(m.dr,{className:"templatiq__auth"},(0,l.createElement)("h3",{className:"templatiq__auth__title"},"Sign up your account"),p?(0,l.createElement)("div",{className:"templatiq__auth__wrapper notification-wrapper"},(0,l.createElement)("p",null,"Successfully Registered. Check Your Email to Complete Registration."," "),(0,l.createElement)("div",{class:"templatiq__auth__btn_wrapper"},(0,l.createElement)(r.rU,{to:"/",className:"templatiq__auth__btn templatiq-btn templatiq-btn-primary"},"Go to Home"),(0,l.createElement)(r.rU,{to:"/signin",className:"templatiq__auth__btn templatiq-btn"},"Sign in"))):(0,l.createElement)("form",{className:"templatiq__auth__wrapper",onSubmit:t=>{t.preventDefault(),(async t=>{(0,n.Z)("templatiq/account/create",t).then((t=>{if(t.body.token)c(!0),e("/signin");else{const e=t.message?.user_email;u(e)}a(!1)}))})({name:authorFullName.value,user_email:authorEmail.value})}},(0,l.createElement)("div",{className:"templatiq__auth__info"},(0,l.createElement)("div",{className:"templatiq__auth__info__single"},(0,l.createElement)("label",{htmlFor:"authorFullName"},"Full Name"),(0,l.createElement)("input",{type:"text",id:"authorFullName",name:"authorFullName",value:g.authorFullName,onChange:b})),(0,l.createElement)("div",{className:"templatiq__auth__info__single"},(0,l.createElement)("label",{htmlFor:"authorEmail"},"Email Address"),(0,l.createElement)("input",{type:"email",id:"authorEmail",name:"authorEmail",value:g.authorEmail,onChange:b}))),(0,l.createElement)("div",{className:"templatiq__auth__actions"},(0,l.createElement)("button",{type:"submit",onClick:()=>{a(!0)},className:"templatiq__auth__btn templatiq-btn templatiq-btn-primary "+(t?"templatiq__loading templatiq__loading--btn":"")},"Sign Up"),d&&(0,l.createElement)("p",{className:"text-danger"},d),(0,l.createElement)("span",{className:"templatiq__auth__desc"},"Already have an account?",(0,l.createElement)(r.rU,{to:"/signin",className:"templatiq__auth__link"},"Sign in")))))}}}]);