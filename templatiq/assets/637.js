"use strict";(globalThis.webpackChunktemplatiq=globalThis.webpackChunktemplatiq||[]).push([[637],{4839:(e,t,a)=>{a.d(t,{A:()=>l}),a(1609);const l="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjI0NDA4IDUuMjQ0MDhDNS41Njk1MSA0LjkxODY0IDYuMDk3MTUgNC45MTg2NCA2LjQyMjU5IDUuMjQ0MDhMMTAgOC44MjE0OUwxMy41Nzc0IDUuMjQ0MDhDMTMuOTAyOCA0LjkxODY0IDE0LjQzMDUgNC45MTg2NCAxNC43NTU5IDUuMjQ0MDhDMTUuMDgxNCA1LjU2OTUxIDE1LjA4MTQgNi4wOTcxNSAxNC43NTU5IDYuNDIyNTlMMTEuMTc4NSAxMEwxNC43NTU5IDEzLjU3NzRDMTUuMDgxNCAxMy45MDI4IDE1LjA4MTQgMTQuNDMwNSAxNC43NTU5IDE0Ljc1NTlDMTQuNDMwNSAxNS4wODE0IDEzLjkwMjggMTUuMDgxNCAxMy41Nzc0IDE0Ljc1NTlMMTAgMTEuMTc4NUw2LjQyMjU5IDE0Ljc1NTlDNi4wOTcxNSAxNS4wODE0IDUuNTY5NTEgMTUuMDgxNCA1LjI0NDA4IDE0Ljc1NTlDNC45MTg2NCAxNC40MzA1IDQuOTE4NjQgMTMuOTAyOCA1LjI0NDA4IDEzLjU3NzRMOC44MjE0OSAxMEw1LjI0NDA4IDYuNDIyNTlDNC45MTg2NCA2LjA5NzE1IDQuOTE4NjQgNS41Njk1MSA1LjI0NDA4IDUuMjQ0MDhaIiBmaWxsPSIjMzUzNTNEIi8+Cjwvc3ZnPgo="},3513:(e,t,a)=>{a.d(t,{A:()=>d});var l=a(1609),i=a(6087),n=a(7143),m=a(4581),_=a(8867),o=a(125),s=a(9548),r=a(7723),c=a(5511);const p="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMS4wODciIHZpZXdCb3g9IjAgMCAyNCAyMS4wODciPgogIDxwYXRoIGlkPSJoZWFydCIgZD0iTTE3LjQ5MywxLjkxN2E2LjQsNi40LDAsMCwwLTUuNSwzLjMsNi40LDYuNCwwLDAsMC01LjUtMy4zQTYuOCw2LjgsMCwwLDAsMCw4Ljk2NGMwLDQuNTQ1LDQuNzg0LDkuNTA5LDguOCwxMi44NzVhNC45NzIsNC45NzIsMCwwLDAsNi40LDBjNC4wMTItMy4zNjYsOC44LTguMzMsOC44LTEyLjg3NWE2LjgsNi44LDAsMCwwLTYuNS03LjA0N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDA1IC0xLjkxNykiIGZpbGw9IiNhMmEyYTIiLz4KPC9zdmc+Cg==",d=e=>{let{template_id:t,number_of_bookmarks:a}=e.item;const[d,u]=(0,i.useState)(e.type?e.type:""),{isLoggedIn:g,bookmarks:M}=(0,n.select)(s.A).getUserInfo(),N=M&&M.includes(t),[q,E]=(0,i.useState)(!1),[h,y]=(0,i.useState)(a),[j,x]=(0,i.useState)(N),D=l=>{if(l.preventDefault(),j)(e=>{(0,m.A)("templatiq/bookmark/remove",{template_id:e}).then((e=>{(0,n.dispatch)(s.A).setBookmark(e.body.bookmarks)}))})(t),y(a),x(!1);else{(e=>{(0,m.A)("templatiq/bookmark/add",{template_id:e}).then((e=>{(0,n.dispatch)(s.A).setBookmark(e.body.bookmarks)}))})(t);const e=Number(h)+1;y(e),x(!0)}e.onFavoriteCountUpdate?.(j)};return(0,i.useEffect)((()=>{y(j?Number(a)+1:a)}),[]),(0,l.createElement)(l.Fragment,null,"single"===d?(0,l.createElement)("a",{href:"#",className:"templatiq__details__header__action__link add-to-favorite templatiq-btn templatiq-btn-white "+(j?"active":""),onClick:e=>D(e)},(0,l.createElement)(_.A,{src:j?p:c.A,width:16,height:16})):g?(0,l.createElement)("a",{href:"#",className:"templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip "+(j?"active":""),"data-info":j?(0,r.__)("Added to Favourite","templatiq"):(0,r.__)("Add to Favourite","templatiq"),onClick:D},(0,l.createElement)(_.A,{src:j?p:c.A,width:14,height:14}),h||""):(0,l.createElement)(l.Fragment,null,q?(0,l.createElement)(o.A,{modalEnable:!0,onClose:()=>{E(!1)}}):"",(0,l.createElement)("a",{href:"#",className:"templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip","data-info":(0,r.__)("Add to Favourite","templatiq"),onClick:e=>{e.preventDefault(),document.querySelector(".templatiq").classList.add("templatiq-overlay-enable"),E(!0)}},(0,l.createElement)(_.A,{src:c.A,width:14,height:14}),a||"")))}},4993:(e,t,a)=>{a.d(t,{A:()=>E});var l=a(1609),i=a(125),n=a(4581),m=a(9548),_=a(7143),o=a(6087),s=a(8867),r=a(7723),c=a(6311),p=a(4839);const d=({item:e,onClose:t})=>{const{template_id:a}=e,[i,m]=(0,o.useState)(!1),_=templatiq_obj?.theme_status,d=async e=>{m(!0),(0,n.A)("templatiq/dependency/activate-theme").then((t=>{m(!1),t.success?(u(e),window.location.href=`?page=templatiq-library&template_id=${a}`):console.error("Installation failed")}))},u=e=>{e.preventDefault();let a=document.querySelector(".templatiq");a&&a.classList.remove("templatiq-overlay-enable"),t()};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.uq,{className:"templatiq__modal templatiq__modal--install"},(0,l.createElement)("div",{className:"templatiq__modal__content"},(0,l.createElement)("h2",{className:"templatiq__modal__title"},(0,l.createElement)(s.A,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOCAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04Ljc3MzcxIDIwLjAyMDlIMTAuMTE4N0MxMC4yOTc3IDIwLjAyMDkgMTAuNDQ0MSAxOS44NzQ2IDEwLjQ0NDEgMTkuNjk1N1YxMy4wNDM0QzEwLjQ0NDEgMTIuODY0NSAxMC4yOTc3IDEyLjcxODIgMTAuMTE4NyAxMi43MTgySDguNzczNzFDOC41OTQ3MyAxMi43MTgyIDguNDQ4MzIgMTIuODY0NSA4LjQ0ODMyIDEzLjA0MzRWMTkuNjk1N0M4LjQ0ODMyIDE5Ljg3NDcgOC41OTQ3MyAyMC4wMjA5IDguNzczNzEgMjAuMDIwOVpNMTEuNjIxNCAxOS44MTQ3TDEyLjAxNDUgMjAuMDIxSDE3LjE2ODFDMTcuNjkxNiAyMC4wMjEgMTguMTIgMTkuNTkyOSAxOC4xMiAxOS4wNjk0QzE4LjEyIDE4LjU0NjEgMTcuNjkxNiAxOC4xMTc5IDE3LjE2ODEgMTguMTE3OUgxNy42NDUzQzE4LjE2ODggMTguMTE3OSAxOC41OTcyIDE3LjY4ODQgMTguNTk3MiAxNy4xNjM1QzE4LjU5NzIgMTYuNjM4NSAxOC4xNjg4IDE2LjIwOSAxNy42NDUzIDE2LjIwOUgxOC4xMjI2QzE4LjY0NjEgMTYuMjA5IDE5LjA3NDQgMTUuNzc5NiAxOS4wNzQ0IDE1LjI1NDZDMTkuMDc0NCAxNC43Mjk2IDE4LjY0NjEgMTQuMzAwMSAxOC4xMjI2IDE0LjMwMDFIMTguNTk5OEMxOS4xMjMzIDE0LjMwMDEgMTkuNTUxNyAxMy44NzA3IDE5LjU1MTcgMTMuMzQ1N0MxOS41NTE3IDEyLjgyMDcgMTkuMTIzMyAxMi4zOTEyIDE4LjU5OTggMTIuMzkxMkwxNS4yMDEyIDEyLjQwODRDMTUuNTYzNSAxMC45OTggMTYuMTUwOSA5LjEzMTQxIDE2LjIwNjIgOC41MzYzN0MxNi4zMzM2IDcuMTYzMTQgMTUuMTk2MSA2LjE5MTExIDE0LjU0NjggNy4yNzA1OEwxMS40NzI4IDEyLjM4MkMxMS41NzA5IDEyLjU4MTggMTEuNjI2MiAxMi44MDYzIDExLjYyNiAxMy4wNDM1TDExLjYyMTQgMTkuODE0N1pNMjUuNjA0MSAyMS4zNTg0QzI3LjczNDQgMjAuNjIxMSAyOC43MTA0IDE3LjYxODMgMjcuNDIwNSAxNS43N0MyNi44Nzc4IDE0Ljk5MjQgMjYuODc3NyAxNC4wMDc3IDI3LjQyMDQgMTMuMjMwMUMyOC43MTA0IDExLjM4MTkgMjcuNzM0NSA4LjM3OTA4IDI1LjYwNDIgNy42NDE3M0MyNC43MDc5IDcuMzMxNTggMjQuMTI4OCA2LjUzNDg2IDI0LjExMDcgNS41ODY5MUMyNC4wNjc2IDMuMzMzNjcgMjEuNTEyNSAxLjQ3Nzc4IDE5LjM1NTQgMi4xMzMwMUMxOC40NDc5IDIuNDA4NjggMTcuNTExMSAyLjEwNDUxIDE2LjkzOSAxLjM0ODI2QzE1LjU3OTQgLTAuNDQ5MzU4IDEyLjQyMDkgLTAuNDQ5NDMyIDExLjA2MTIgMS4zNDgxMUMxMC40ODkxIDIuMTA0MzYgOS41NTIyMiAyLjQwODgzIDguNjQ0ODEgMi4xMzMwOUM2LjQ4NzgyIDEuNDc3NzEgMy45MzI1MyAzLjMzMzUyIDMuODg5MzkgNS41ODY3NkMzLjg3MTIyIDYuNTM0NzEgMy4yOTIzMSA3LjMzMTUgMi4zOTYwNSA3LjY0MTY2QzAuMjY1NjU3IDguMzc4OTMgLTAuNzEwMzggMTEuMzgxNyAwLjU3OTUyNyAxMy4yM0MxLjEyMjI1IDE0LjAwNzYgMS4xMjIzMiAxNC45OTIzIDAuNTc5NjAxIDE1Ljc2OTlDLTAuNzEwNDU0IDE3LjYxODEgMC4yNjU1MDggMjAuNjIxIDIuMzk1ODMgMjEuMzU4NEMzLjI5MjA5IDIxLjY2ODUgMy44NzEyMiAyMi40NjUxIDMuODg5MzIgMjMuNDEzMUMzLjkzMjM5IDI1LjY2NjMgNi40ODc1MyAyNy41MjIyIDguNjQ0NTIgMjYuODY3QzkuNTUyIDI2LjU5MTMgMTAuNDg4OSAyNi44OTU1IDExLjA2MDkgMjcuNjUxN0MxMi40MjA2IDI5LjQ0OTQgMTUuNTc5MiAyOS40NDk0IDE2LjkzODkgMjcuNjUxOEMxNy41MTA5IDI2Ljg5NTYgMTguNDQ3NyAyNi41OTEzIDE5LjM1NTIgMjYuODY3QzIxLjUxMjIgMjcuNTIyMyAyNC4wNjc0IDI1LjY2NjQgMjQuMTEwNSAyMy40MTMyQzI0LjEyODggMjIuNDY1MiAyNC43MDc4IDIxLjY2ODYgMjUuNjA0MSAyMS4zNTg0Wk0xNCA1LjAzMTU5QzE5LjIzMSA1LjAzMTU5IDIzLjQ3MTYgOS4yNzA3NiAyMy40NzE2IDE0LjVDMjMuNDcxNiAxOS43MjkzIDE5LjIzMSAyMy45Njg1IDE0IDIzLjk2ODVDOC43NjkwNiAyMy45Njg1IDQuNTI4NTEgMTkuNzI5MyA0LjUyODUxIDE0LjVDNC41Mjg1MSA5LjI3MDc2IDguNzY5MDYgNS4wMzE1OSAxNCA1LjAzMTU5WiIgZmlsbD0iIzg5NDFGRiIvPgo8L3N2Zz4K",width:30,height:30}),(0,r.__)("Recommendation","templatiq")),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("We recommend to use Pixetiq Theme to fully experience the design & feature of this template. To install directorist you need to install directorist. To install directorist you need to install directorist. To install directorist you need to install directorist. To install directorist you need to install directorist.","templatiq")),(0,l.createElement)("div",{className:"templatiq__modal__actions"},(0,l.createElement)("button",{className:"templatiq-btn templatiq-btn-primary",onClick:"not-installed"===_?async e=>{m(!0),(await wp.updates.installTheme({slug:"pixetiq"})).customizeUrl&&await d(e)}:"installed-but-inactive"===_?d:null,disabled:i},"not-installed"===_?i?(0,r.__)("Installing...","templatiq"):(0,r.__)("Yes, Install","templatiq"):i?(0,r.__)("Activating...","templatiq"):(0,r.__)("Yes, Activate","templatiq")),!i&&(0,l.createElement)("button",{className:"templatiq-btn",onClick:e=>{window.location.href=`?page=templatiq-library&template_id=${a}&ci=1`,u(e)}},(0,r.__)("Continue without...","templatiq")," ","not-installed"===_?"installing":"activating"))),(0,l.createElement)("button",{className:"templatiq__modal__cancel__button",onClick:u},(0,l.createElement)(s.A,{src:p.A,width:20,height:20}))))},u=({item:e,onClose:t,onLoginClick:a})=>{const{isLoggedIn:i}=(0,_.select)(m.A).getUserInfo(),{template_id:n}=e;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.uq,{className:"templatiq__modal templatiq__modal--pro"},(0,l.createElement)("div",{className:"templatiq__modal__content"},(0,l.createElement)("h2",{className:"templatiq__modal__title"},(0,r.__)("Liked This Template?","templatiq")),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("This is a premium template. Get access to this premium template.","templatiq")),(0,l.createElement)("a",{href:`https://templatiq.com/checkout?edd_action=add_to_cart&download_id=${n}`,target:"_blank",className:"templatiq-btn templatiq-btn-warning templatiq-btn-full semi-bold"},(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16.417",height:"16.5",viewBox:"1063.75 119.75 16.417 16.5"},(0,l.createElement)("path",{d:"M1065.75 119.756c.1.008.24.028.39.096.2.09.37.234.48.415.09.139.13.274.15.372.02.083.03.177.04.255 0 .005.01.01.01.015l.26 1.841h11.71c.11 0 .23 0 .34.009.12.011.3.038.48.144.23.134.41.346.5.597.07.199.06.381.05.501-.01.107-.04.227-.06.332l-1 5.257c-.06.325-.11.609-.18.843-.06.248-.15.49-.31.718a2.2 2.2 0 0 1-.94.783c-.26.112-.51.154-.77.173-.24.018-.53.018-.86.018h-6.47c-.35 0-.65 0-.9-.019a2.297 2.297 0 0 1-.8-.186 2.26 2.26 0 0 1-.96-.839c-.15-.243-.23-.5-.29-.762a10.8 10.8 0 0 1-.14-.893l-.79-5.822-.34-2.354h-.85a.753.753 0 0 1-.75-.75c0-.414.34-.75.75-.75h1c.07 0 .17 0 .25.006Zm1.54 4.494.67 4.947c.05.38.09.622.13.806.03.175.07.24.09.274.07.122.19.219.32.28.03.016.1.039.28.053.19.014.43.015.82.015h6.41c.37 0 .6 0 .78-.014.17-.012.24-.034.27-.05a.75.75 0 0 0 .32-.261c.02-.032.05-.093.1-.257.04-.173.09-.401.15-.759l.96-5.034h-11.3Zm.96 10.5a1.5 1.5 0 1 1 2.999-.001 1.5 1.5 0 0 1-2.999.001Zm6 0a1.5 1.5 0 1 1 2.999-.001 1.5 1.5 0 0 1-2.999.001Z",fill:"#0b0d15","fill-rule":"evenodd","data-name":"Path 1659"})),(0,r.__)("Buy This Item","templatiq")),!i&&(0,l.createElement)("div",{className:"templatiq__modal__pro-auth"},(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("Already a Premium Member?","templatiq")),(0,l.createElement)("button",{onClick:a,className:"templatiq-btn templatiq-btn-full"},(0,r.__)("Sign In","templatiq")))),(0,l.createElement)("button",{className:"templatiq__modal__cancel__button",onClick:e=>{e.preventDefault();let a=document.querySelector(".templatiq");a&&a.classList.remove("templatiq-overlay-enable"),t()}},(0,l.createElement)(s.A,{src:p.A,width:20,height:20}))))},g=({item:e,onClose:t,required_plugins:a})=>{const{template_id:i,builder:m,directory_page_type:_}=e,d=templatiq_obj?.directory_types,u=a?.length>0?a.filter((e=>!e.hasOwnProperty("is_pro")||!1===e.is_pro)):[],g=a?.length>0?a.filter((e=>e.hasOwnProperty("is_pro")&&!0===e.is_pro)):[];let[M,N]=(0,o.useState)([]),[q,E]=(0,o.useState)([]),[h,y]=(0,o.useState)([]),[j,x]=(0,o.useState)(!0),[D,I]=(0,o.useState)(""),[b,A]=(0,o.useState)(!1),[T,L]=(0,o.useState)(!1);const[w,z]=(0,o.useState)(u||[]),[f,v]=(0,o.useState)([]),[k,S]=(0,o.useState)([]),[C,O]=(0,o.useState)(!0),[U,Y]=(0,o.useState)(!0),[Q,Z]=(0,o.useState)(!1),[P,F]=(0,o.useState)(!1);let G=e=>{e&&e.preventDefault();let a=document.querySelector(".templatiq");a&&a.classList.remove("templatiq-overlay-enable"),t()};const R=async e=>{A(!0),O(!0),v((t=>[...t,e.slug]));try{await new Promise(((t,a)=>{(0,n.A)("templatiq/dependency/install",{plugin:e}).then((l=>{A(!1),l.success?(S((t=>[...t,e.slug])),N(M.filter((t=>t.slug!==e.slug))),t(l)):a(new Error("Installation failed"))}))}))}catch(e){A(!1)}},H=async e=>{await(async(e,t)=>{var a={unique_id:e,data:{edit_mode:!0,display:!0,template_id:e}};t&&jQuery.extend(!0,a,t),elementorCommon.ajax.addRequest("get_templatiq_template_data",a)})(e,{success:function(e){const t=e.data,a=Backbone.Model.extend({defaults:{title:"",type:""}});$e.run("document/elements/import",{model:new a,data:t})},error:function(e){},complete:function(e){G(),setTimeout((()=>{}),300)}})},W=()=>{if(w&&0===w?.length)Y(!0),N([]);else{const e=w&&w.every((e=>k.includes(e.slug))),t=w.filter((e=>!k.includes(e.slug)));e?(Y(!0),N([])):(z(t),Y(!1))}};return(0,o.useEffect)((()=>{W()}),[k]),(0,o.useEffect)((()=>{W(),z(u);const e=document.body.classList.contains("elementor-editor-active");F(e),e&&0===w?.length&&H(i)}),[]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.uq,{className:"templatiq__modal templatiq__modal--required "+(b&&U?"templatiq__loading":"")},(0,l.createElement)("form",{className:"templatiq__modal__form",onSubmit:async e=>{e.preventDefault();for(const e of M)await R(e);P&&H(i)}},(0,l.createElement)("div",{className:"templatiq__modal__content"},Q||T?Q?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h2",{className:"templatiq__modal__title"},"Imported Successfully"),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("You can edit or preview the template or you can push it to Templatiq cloud to share with your team.","templatiq")),(0,l.createElement)("div",{className:"templatiq__modal__actions"},(0,l.createElement)("a",{href:Q.elementor_edit_link,target:"_blank",className:"templatiq-btn templatiq-btn-primary"},(0,r.__)("Edit Template with Elementor","templatiq")),(0,l.createElement)("a",{href:Q.visit,target:"_blank",className:"templatiq-btn templatiq-btn-primary"},(0,r.__)("View Template","templatiq")))):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h2",{className:"templatiq__modal__title text-center"},(0,r.__)("Error","templatiq")),(0,l.createElement)("p",{className:"templatiq__modal__desc text-danger text-center"},T)):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h2",{className:"templatiq__modal__title"},U?d?.length>1&&!h?.length>0&&!P?(0,r.__)("Available Directory Type","templatiq"):P?(0,r.__)("Importing...","templatiq"):(0,r.__)("Enter Page Title","templatiq"):(0,r.__)("Required Plugins","templatiq")),U&&!d?.length>1&&!P?(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("To import this item you need to install all the Plugin listed below.","templatiq")):null,(0,l.createElement)("div",{className:"templatiq__modal__plugins"},U||P?d?.length>1&&!h?.length>0&&!P?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("Choose the directories where you'd like to include this page. You can choose multiple directories.","templatiq")),(0,l.createElement)("div",{className:"templatiq__modal__plugins"},d.map(((e,t)=>(0,l.createElement)("div",{key:t,className:"templatiq__modal__plugin templatiq__checkbox"},(0,l.createElement)("input",{id:"type_"+i+"_"+t,name:"type_"+i+"_"+t,type:"checkbox",className:"templatiq__modal__plugin__checkbox templatiq__checkbox__input",onChange:()=>(e=>{const t=q.includes(e)?q.filter((t=>t!==e)):[...q,e];return E(t),x(0===t?.length),t})(e)}),(0,l.createElement)("label",{htmlFor:"type_"+i+"_"+t,className:"templatiq__modal__plugin__label templatiq__checkbox__label"},(0,l.createElement)("a",{href:"#",className:"templatiq__modal__plugin__link"},e.name))))))):(0,l.createElement)("div",{className:"templatiq__modal__page"},P?(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("Elementor Content Importing...","templatiq")):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{type:"text",className:"templatiq__modal__page__title",placeholder:(0,r.__)("Enter Page Title","templatiq"),onChange:e=>(e=>{e.preventDefault(),I(e.target.value)})(e)}),(0,l.createElement)("button",{type:"button",className:"templatiq__modal__page__button templatiq-btn templatiq-btn-primary",onClick:()=>(async(e,t,a,l,i)=>{A(!0),(0,n.A)("templatiq/template/import-as-page",{title:e,template_id:t,builder:a,pageType:l,directoryTypes:i}).then((e=>{A(!1),e.post_id&&Z(e)}))})(D,i,m,_,{submittedTypes:h.length>0?h:d}),disabled:""===D},(0,r.__)("Create a Page","templatiq")))):(0,l.createElement)("div",{className:"templatiq__modal__plugins"},w&&w.map(((e,t)=>{let a=f.includes(e.slug),n="";return k.includes(e.slug)?n=(0,r.__)("Installed","templatiq"):a&&(n=(0,r.__)("Installing...","templatiq")),(0,l.createElement)("div",{key:t,className:"templatiq__modal__plugin templatiq__checkbox"},(0,l.createElement)("input",{id:"plugin_"+i+"_"+t,name:"plugin_"+i+"_"+t,type:"checkbox",className:"templatiq__modal__plugin__checkbox templatiq__checkbox__input",onChange:()=>(e=>{const t=M.includes(e)?M.filter((t=>t!==e)):[...M,e];return N(t),O(0===t?.length),t})(e),checked:M.includes(e),disabled:a||""!==n}),(0,l.createElement)("label",{htmlFor:"plugin_"+i+"_"+t,className:"templatiq__modal__plugin__label templatiq__checkbox__label"},(0,l.createElement)("a",{href:"#",className:"templatiq__modal__plugin__link"},e.name)),(0,l.createElement)("span",{className:"templatiq__modal__plugin__status"},n))})),g&&g.map(((e,t)=>(0,l.createElement)("div",{key:t,className:"templatiq__modal__plugin templatiq__checkbox"},(0,l.createElement)("input",{id:"plugin_"+i+"_pro_"+t,name:"plugin_"+i+"_pro_"+t,type:"checkbox",className:"templatiq__modal__plugin__checkbox templatiq__checkbox__input",disabled:!0}),(0,l.createElement)("label",{htmlFor:"plugin_"+i+"_pro_"+t,className:"templatiq__modal__plugin__label templatiq__checkbox__label"},(0,l.createElement)("a",{href:"#",className:"templatiq__modal__plugin__link"},e.name)),(0,l.createElement)("span",{className:"templatiq__modal__plugin__status"},(0,r.__)("It's Pro Plugin","templatiq"))))))),U&&!d?.length>1&&!P?(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,l.createElement)("strong",null,(0,r.__)("Note:","templatiq")),(0,r.__)(" Make sure you have manually installed & activated the Pro Plugin listed above.","templatiq")):"",(0,l.createElement)("div",{className:"templatiq__modal__actions"},U?!h?.length&&d?.length>1&&!P?(0,l.createElement)("button",{disabled:j,className:"templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-success",onClick:e=>(e=>{e.preventDefault(),y(q)})(e)},(0,r.__)("Insert Page","templatiq")):null:(0,l.createElement)(l.Fragment,null,(0,l.createElement)("button",{type:"submit",disabled:C,className:"templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-primary"},(0,r.__)("Install and Proceed to Import","templatiq")),(0,l.createElement)("button",{className:"templatiq__modal__action templatiq__modal__action--cancel templatiq-btn",onClick:G},(0,r.__)("Cancel","templatiq"))))))),(0,l.createElement)("button",{className:"templatiq__modal__cancel__button",onClick:G},(0,l.createElement)(s.A,{src:p.A,width:20,height:20}))))},M="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNC42NDQiIGhlaWdodD0iMjUuNTI4IiB2aWV3Qm94PSIwIDAgMzQuNjQ0IDI1LjUyOCI+CiAgPHBhdGggaWQ9IlBhdGhfNiIgZGF0YS1uYW1lPSJQYXRoIDYiIGQ9Ik0xNjEuNTc4LDEzNy4wN2EzLjY0NiwzLjY0NiwwLDAsMC01LjE1NywwbC0xNS42NTYsMTUuNjU0LTYuNTM5LTYuNTM3YTMuNjQ2LDMuNjQ2LDAsMSwwLTUuMTU3LDUuMTU3bDkuMTE3LDkuMTE3YTMuNjQ1LDMuNjQ1LDAsMCwwLDUuMTU3LDBsMTguMjM0LTE4LjIzNEEzLjY0NiwzLjY0NiwwLDAsMCwxNjEuNTc4LDEzNy4wN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjguMDAyIC0xMzYuMDAyKSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K",N=({onClose:e,install_directorist:t})=>{let[a,i]=(0,o.useState)(!1),[m,_]=(0,o.useState)(!1),d=t=>{t&&t.preventDefault();let a=document.querySelector(".templatiq");a&&a.classList.remove("templatiq-overlay-enable"),e()};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.uq,{className:"templatiq__modal templatiq__modal--install"},(0,l.createElement)("form",{className:"templatiq__modal__form",onSubmit:async e=>{e.preventDefault(),await(async e=>{i(!0),(0,n.A)("templatiq/dependency/install",{plugin:e}).then((e=>{i(!1),e.success?(_(!0),setTimeout((()=>{window.location.reload(),d()}),600)):console.error("Installation failed")}))})(t)}},(0,l.createElement)("div",{className:"templatiq__modal__content"},m?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"templatiq__modal__icon templatiq__modal__icon--success"},(0,l.createElement)(s.A,{src:M,width:30,height:30})),(0,l.createElement)("h2",{className:"templatiq__modal__title"},(0,l.createElement)("span",{className:"text-success"},(0,r.__)("Success!","templatiq"))),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("Directorist successful installed & activated","templatiq")),(0,l.createElement)("button",{disabled:!0,className:"templatiq__modal__action templatiq__modal__action--install templatiq-btn  templatiq-btn-primary"},(0,l.createElement)(s.A,{src:M,width:16,height:16}),(0,r.__)("Installed & Activated","templatiq"))):a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h2",{className:"templatiq__modal__title templatiq__modal__title--installing"},(0,r.__)("Installing the directorist Plugin","templatiq")),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("Installing directorist you need to install directorist. Installing directorist you need to install directorist.","templatiq")),(0,l.createElement)("button",{disabled:!0,className:"templatiq__modal__action templatiq__modal__action--install templatiq-btn templatiq-btn-primary templatiq-btn-loading"},(0,r.__)("Installing","templatiq"))):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"templatiq__modal__icon templatiq__modal__icon--warning"},(0,l.createElement)(s.A,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjgzMzMgMTUuMTY2NlY4LjE2NjYzQzEyLjgzMzMgNy41MjQ5NiAxMy4zNTgzIDYuOTk5OTYgMTQgNi45OTk5NkMxNC42NDE2IDYuOTk5OTYgMTUuMTY2NiA3LjUyNDk2IDE1LjE2NjYgOC4xNjY2M1YxNS4xNjY2QzE1LjE2NjYgMTUuODA4MyAxNC42NDE2IDE2LjMzMzMgMTQgMTYuMzMzM0MxMy4zNTgzIDE2LjMzMzMgMTIuODMzMyAxNS44MDgzIDEyLjgzMzMgMTUuMTY2NlpNMTQgMTcuNUMxMy4wMzE2IDE3LjUgMTIuMjUgMTguMjgxNiAxMi4yNSAxOS4yNUMxMi4yNSAyMC4yMTgzIDEzLjAzMTYgMjEgMTQgMjFDMTQuOTY4MyAyMSAxNS43NSAyMC4yMTgzIDE1Ljc1IDE5LjI1QzE1Ljc1IDE4LjI4MTYgMTQuOTY4MyAxNy41IDE0IDE3LjVaTTI3LjUxIDIzLjE5MzNDMjYuNjkzMyAyNC43NjgzIDI0Ljk3ODMgMjUuNjY2NiAyMi44MzE2IDI1LjY2NjZINS4xNzk5N0MzLjAyMTY0IDI1LjY2NjYgMS4zMTgzIDI0Ljc2ODMgMC41MDE2MzYgMjMuMTkzM0MtMC4zMjY2OTcgMjEuNjA2NiAtMC4wOTMzNjM3IDE5LjU3NjYgMS4wODQ5NyAxNy44NzMzTDEwLjQ2NSAzLjAzMzI5QzExLjI5MzMgMS44NDMyOSAxMi42IDEuMTY2NjMgMTQgMS4xNjY2M0MxNS40IDEuMTY2NjMgMTYuNzA2NiAxLjg0MzI5IDE3LjUgMi45OTgyOUwyNi45MjY2IDE3Ljg5NjZDMjguMTA1IDE5LjYgMjguMzI2NiAyMS42MTgzIDI3LjQ5ODMgMjMuMTkzM0gyNy41MVpNMjUuMDAxNiAxOS4yMDMzQzI1LjAwMTYgMTkuMjAzMyAyNC45NzgzIDE5LjE4IDI0Ljk3ODMgMTkuMTU2NkwxNS41NjMzIDQuMjgxNjNDMTUuMjI1IDMuODAzMjkgMTQuNjQxNiAzLjQ5OTk2IDE0IDMuNDk5OTZDMTMuMzU4MyAzLjQ5OTk2IDEyLjc3NSAzLjgwMzI5IDEyLjQxMzMgNC4zMjgyOUwzLjAyMTY0IDE5LjE1NjZDMi4yOTgzIDIwLjE4MzMgMi4xMzQ5NyAyMS4zMDMzIDIuNTU0OTcgMjIuMTA4M0MyLjk2MzMgMjIuOTAxNiAzLjg5NjY0IDIzLjMzMzMgNS4xNjgzIDIzLjMzMzNIMjIuODA4M0MyNC4wOCAyMy4zMzMzIDI1LjAxMzMgMjIuOTAxNiAyNS40MjE2IDIyLjEwODNDMjUuODQxNiAyMS4zMDMzIDI1LjY3ODMgMjAuMTgzMyAyNC45OSAxOS4yMDMzSDI1LjAwMTZaIiBmaWxsPSIjRjE3RDBFIi8+Cjwvc3ZnPgo=",width:30,height:30})),(0,l.createElement)("h2",{className:"templatiq__modal__title"},(0,r.__)("Oops!","templatiq")," ",(0,l.createElement)("span",{className:"text-warning"},(0,r.__)("Directorist is not Installed","templatiq"))),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("To install directorist you need to install directorist. To install directorist you need to install directorist. To install directorist you need to install directorist. To install directorist you need to install directorist.","templatiq")),(0,l.createElement)("button",{type:"submit",className:"templatiq__modal__action templatiq__modal__action--install templatiq-btn  templatiq-btn-primary"},(0,r.__)("Install Now","templatiq"))))),(0,l.createElement)("button",{className:"templatiq__modal__cancel__button",onClick:d},(0,l.createElement)(s.A,{src:p.A,width:20,height:20}))))};var q=a(5651);const E=({item:e,isPro:t,templateRef:a,className:c,innerText:p,solidIcon:M})=>{let{template_id:E,type:h,required_plugins:y,is_directorist_required:j}=e;const x=y.filter((e=>e?.init)),D="installed-and-active"===templatiq_obj?.theme_status,I="pack"===h,{isLoggedIn:b,purchased:A,unlocked:T}=(0,_.select)(m.A).getUserInfo(),[L,w]=(0,o.useState)(!1),[z,f]=(0,o.useState)(!1),[v,k]=(0,o.useState)(!1),[S,C]=(0,o.useState)(!1),[O,U]=(0,o.useState)(x),[Y,Q]=(0,o.useState)(!1),Z=e=>A&&A.some((t=>e in t)),P=e=>T&&T.some((t=>e in t)),F=e=>{e.stopPropagation(),document.querySelector(".templatiq").classList.add("templatiq-overlay-enable"),k(!1),C(!0)},G=()=>{k(!1)},R=async e=>{const t=await(0,n.A)("templatiq/dependency/check",{plugins:e});U(t)};return(0,o.useEffect)((()=>{R(x)}),[]),(0,o.useEffect)((()=>{if(j){const e=O.find((e=>"directorist"===e.slug));Q(e||!1)}}),[O,v]),(0,l.createElement)(l.Fragment,null,v?!t||L||z?I?(0,l.createElement)(d,{item:e,onClose:G}):Y?(0,l.createElement)(N,{install_directorist:Y,onClose:G}):(0,l.createElement)(g,{item:e,required_plugins:O,installed_directorist:!Y,onClose:G}):(0,l.createElement)(u,{item:e,onClose:G,onLoginClick:F}):null,S&&(0,l.createElement)(i.A,{modalEnable:!0,onClose:()=>{C(!1)}}),(0,l.createElement)("button",{id:E,className:c||"templatiq__template__single__info__action__link insert-btn tmTemplateLibrary__insert-button",onClick:e=>b||t?(async e=>{e.stopPropagation();const l=()=>{document.querySelector(".templatiq").classList.add("templatiq-overlay-enable"),a&&a.current&&a.current.classList.add("insert-modal-open"),k(!0)};if(w(Z(E)),f(P(E)),I)(!t||Z(E)||P(E))&&D?window.location.href=`?page=templatiq-library&template_id=${E}&ci=0`:l();else if(t||Y)l();else try{await R(x),l()}catch(e){console.error("Error fetching installable plugins:",e)}})(e):F(e)},(0,l.createElement)(s.A,{src:M?"data:image/svg+xml;base64,PHN2ZyBpZD0iZG93bmxvYWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgMTIgMTIiPgogIDxwYXRoIGlkPSJQYXRoXzE1NTYiIGRhdGEtbmFtZT0iUGF0aCAxNTU2IiBkPSJNMTEzLjEzNCw4Ljg0YTIuMjU1LDIuMjU1LDAsMCwwLDMuMTg1LDBoMGwxLjYwNy0xLjZhLjc1Ljc1LDAsMSwwLTEuMDQzLTEuMDc4bC0uMDE4LjAxOC0xLjM5MywxLjM4OUwxMTUuNDYxLjc0OUEuNzUuNzUsMCwwLDAsMTE0LjcxLDBoMGEuNzUuNzUsMCwwLDAtLjc1MS43NDlsLjAxLDYuODA2LTEuMzgyLTEuMzc5YS43NS43NSwwLDAsMC0xLjA2MSwxLjA1OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDguNzEpIiBmaWxsPSIjNmU2ZTZlIi8+CiAgPHBhdGggaWQ9IlBhdGhfMTU1NyIgZGF0YS1uYW1lPSJQYXRoIDE1NTciIGQ9Ik0xMS4yNSwzMDkuMzMzYS43NS43NSwwLDAsMC0uNzUuNzQ5djIuMjkzYS4yLjIsMCwwLDEtLjIuMkgxLjdhLjIuMiwwLDAsMS0uMi0uMnYtMi4yOTNhLjc1Ljc1LDAsMCwwLTEuNSwwdjIuMjkzYTEuNzA2LDEuNzA2LDAsMCwwLDEuNywxLjdIMTAuM2ExLjcwNSwxLjcwNSwwLDAsMCwxLjctMS43di0yLjI5M0EuNzUuNzUsMCwwLDAsMTEuMjUsMzA5LjMzM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwMi4wNzgpIiBmaWxsPSIjNmU2ZTZlIi8+Cjwvc3ZnPgo=":q.A,width:14,height:14}),"pack"!==h?p||(0,r.__)("Insert","templatiq"):(0,r.__)("Insert Full Template","templatiq")))}},125:(e,t,a)=>{a.d(t,{A:()=>c});var l=a(1609),i=a(9880),n=a(7148),m=a(6087),_=a(8867),o=a(6311),s=a(7723),r=a(4839);const c=({onClose:e})=>{const[t,a]=(0,m.useState)(!1),[c,p]=(0,m.useState)(!1);return(0,l.createElement)(o.jL,{className:"templatiq__modal"},t?(0,l.createElement)(n.A,{setIsSignedUp:p}):(0,l.createElement)(i.A,null),(0,l.createElement)("button",{className:"templatiq__modal__cancel__button",onClick:()=>{let t=document.querySelector(".templatiq");t&&t.classList.remove("templatiq-overlay-enable"),e()}},(0,l.createElement)(_.A,{src:r.A,width:20,height:20})),!c&&(0,l.createElement)("div",{className:"templatiq__modal__bottom"},t?(0,s.__)("Already have an account?","templatiq"):(0,s.__)("Don't have an account?","templatiq")," ",(0,l.createElement)("a",{href:"#",className:"templatiq__modal__another__btn",onClick:e=>{e.preventDefault(),a(!t)}},t?(0,s.__)("Sign in","templatiq"):(0,s.__)("Sign up","templatiq"))))}},6311:(e,t,a)=>{a.d(t,{jL:()=>n,uq:()=>i});var l=a(1686);l.Ay.div`
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
        display: flex;
        gap: 14px;
        align-items: center;
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
`;const i=l.Ay.div`
    .templatiq__modal__title {
        display: flex;
        gap: 14px;
        align-items: center;
        font-size: 21px;
        line-height: 25px;
        font-weight: 600;
        margin: 0 0 15px;
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

    &.templatiq__modal--install {
        text-align: center;
        .templatiq__modal__title {
            text-align: center;
            justify-content: center;
        }
        .templatiq__modal__actions {
            justify-content: center;
        }
        .templatiq__modal__title--installing {
            margin-top: 50px;
        }
        .templatiq__modal__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            margin: 0 auto 20px;
            border-radius: 100%;
            svg {
                max-width: 40px;
            }
            &--warning {
                background-color: var(--templatiq-warning-color2);
                svg {
                    fill: var(--templatiq-warning-color);
                }
            }
            &--success {
                background-color: var(--templatiq-success-color);
                svg {
                    fill: var(--templatiq-success-color);
                }
            }
        }
        .templatiq__modal__progressbar {
            display: flex;
            position: relative;
            margin: 20px 0 0;
            width: 100%;
            height: 4px;
            background-color: #f3f3f3;
            border-radius: 6px;
            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 30px;
                height: 100%;
                border-radius: 6px;
                background-color: var(--templatiq-primary-color);
                transition: width 2s;
            }
        }
        .templatiq__modal__action--install {
            margin: 20px 0 0;
            svg {
                width: 16px;
                height: 16px;
            }
        }
    }
    &.templatiq__modal--pro {
        text-align: center;
        padding: 60px 70px;
        .templatiq__modal__title {
            text-align: center;
            justify-content: center;
        }
        .templatiq__modal__content {
            .templatiq-btn {
                height: 40px;
                max-width: 275px;
                margin: 20px 0 0;
            }
            .templatiq__modal__pro-auth {
                margin: 30px 0 0;
                .templatiq-btn {
                    margin: 10px 0 0;
                }
            }
        }
    }
    
`,n=l.Ay.div`
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
`},3637:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var l=a(1609),i=a(3513),n=a(819),m=a(4993),_=a(9548),o=a(7143),s=a(6087),r=a(8867),c=a(4976);const p=a(1686).Ay.div`
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
            border-radius: 12px;
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

    .templatiq__template__single__info__meta {
        display: flex;
        gap: 10px;
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
        &.unlocked-item {
            color: #ffffff;
            background-color: #26A764;
        }
        &.purchased-item {
            color: #ffffff;
            background-color: #26A764;
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
            white-space: nowrap;
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
        &.unlocked-item {
            color: #ffffff;
            background-color: #26A764;
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
`;var d=a(7723),u=a(7262),g=a(5651);const M=e=>{let{template_id:t,slug:a,preview_link:M,thumbnail:N,title:q,price:E,number_of_downloads:h,categories:y,required_plugins:j}=e;const[x,D]=(0,s.useState)(!1),[I,b]=(0,s.useState)([]),[A,T]=(0,s.useState)([]),{purchased:L,unlocked:w}=(0,o.select)(_.A).getUserInfo(),[z,f]=(0,s.useState)(!1),[v,k]=(0,s.useState)(!1),[S,C]=(0,s.useState)(!1),O=j.filter((e=>e?.init)),U=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=(0,o.select)(_.A).getLibraryData(),a=y.map((t=>e.categories[t])),l=a.length<3?a:a.slice(0,2),i=a.slice(2);var n;b(l),T(i),C((n=t,w&&w.some((e=>n in e)))),k((e=>L&&L.some((t=>e in t)))(t))}),[]),(0,l.createElement)(p,{className:"templatiq__template__single",ref:U},(0,l.createElement)("div",{className:"templatiq__template__single__img"},z?(0,l.createElement)("img",{src:N,alt:q}):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.A,{style:{margin:0,minHeight:"unset"}}),(0,l.createElement)("img",{src:N,alt:q,onLoad:()=>{f(!0)},style:{display:"none"}})),(0,l.createElement)("div",{className:"templatiq__template__single__overlay"}),(0,l.createElement)("div",{className:"templatiq__template__single__info"},(0,l.createElement)("div",{className:"templatiq__template__single__info__meta"},E>0&&!S?(0,l.createElement)("span",{className:"templatiq__template__single__info__meta__item pro-item"},(0,l.createElement)(r.A,{src:u.A,width:16,height:16}),(0,d.__)("Pro","templatiq")):"",E>0&&v&&(0,l.createElement)("span",{className:"templatiq__template__single__info__meta__item purchased-item templatiq-tooltip","data-info":"Unlocked"},(0,d.__)("Purchased","templatiq")),S&&(0,l.createElement)("span",{className:"templatiq__template__single__info__meta__item unlocked-item templatiq-tooltip","data-info":"Unlocked"},(0,d.__)("Unlocked","templatiq"))),(0,l.createElement)("div",{className:"templatiq__template__single__info__action"},(0,l.createElement)("a",{href:M,target:"_blank",className:"templatiq__template__single__info__action__link"},(0,d.__)("Live Demo","templatiq")),(0,l.createElement)(m.A,{item:e,isPro:parseFloat(E)>0,templateRef:U,className:"templatiq__template__single__info__action__link insert-btn tmTemplateLibrary__insert-button"})),(0,l.createElement)("div",{className:"templatiq__template__single__info__required"},O&&O.map(((e,t)=>(0,l.createElement)("a",{key:t,href:"#",className:"templatiq__template__single__info__required__item templatiq-tooltip","data-info":e?.name},(0,l.createElement)("img",{src:`${templatiq_obj.assets_url}/svg/icon/${e?.slug}.svg`,width:28,height:28,onError:e=>{e.target.onerror=null,e.target.src=`${templatiq_obj.assets_url}/svg/icon/wordpress-plugin.png`}}))))))),(0,l.createElement)("div",{className:"templatiq__template__single__content"},(0,l.createElement)("h3",{className:"templatiq__template__single__title"},(0,l.createElement)(c.N_,{to:`/template/${a}`},q||(0,d.__)("dDoctors","templatiq"))),(0,l.createElement)("div",{className:"templatiq__template__single__cat"},I.map(((e,t)=>(0,l.createElement)("a",{key:t,href:"#",className:"templatiq__template__single__cat__link"},e))),A.length>0&&(0,l.createElement)("div",{className:"templatiq__template__single__cat__dropdown"},(0,l.createElement)("button",{className:"templatiq__template__single__cat__button",onClick:()=>D(!x)},"..."),x&&(0,l.createElement)("div",{className:"templatiq__template__single__cat__dropdown-content"},A.map(((e,t)=>(0,l.createElement)("a",{key:t,href:"#",className:"templatiq__template__single__cat__link"},e)))))),(0,l.createElement)("div",{className:"templatiq__template__single__quickmeta"},E>0?(0,l.createElement)("span",{className:"templatiq__template__single__quickmeta__item pro-item"},E?"$"+E:""):(0,l.createElement)("span",{className:"templatiq__template__single__quickmeta__item free-item"},(0,d.__)("Free","templatiq")),(0,l.createElement)("span",{className:"templatiq__template__single__quickmeta__item templatiq-tooltip","data-info":(0,d.__)("Total Downloads","templatiq")},(0,l.createElement)(r.A,{src:g.A,width:14,height:14}),h||""),(0,l.createElement)(i.A,{item:e}))))}},9880:(e,t,a)=>{a.d(t,{A:()=>p});var l=a(1609),i=a(4581),n=a(6883),m=a(7143),_=a(6087),o=a(7767),s=a(4976),r=a(7723),c=a(9548);function p(){const e=(0,o.Zp)();let[t,a]=(0,_.useState)(!1),[p,d]=(0,_.useState)(!1);const{isLoggedIn:u}=(0,m.select)(c.A).getUserInfo(),[g,M]=(0,_.useState)({authorEmail:"",authorPassword:""}),N=e=>{M({...g,[e.target.name]:e.target.value})};return(0,_.useEffect)((()=>{u&&e("/")}),[]),(0,l.createElement)(n.S_,{className:"templatiq__auth"},(0,l.createElement)("h3",{className:"templatiq__auth__title"},"Sign in to your account"),(0,l.createElement)("form",{className:"templatiq__auth__wrapper",onSubmit:t=>{t.preventDefault(),(async t=>{(0,i.A)("templatiq/account/login",t).then((t=>{if(t.body){const l=t.body;if(l.token){const t={isLoggedIn:!0,userName:l.user_nicename,userEmail:l.user_email,userDisplayName:l.user_display_name,bookmarks:l.bookmarks,downloads:l.downloads,purchased:l.purchased};(0,m.dispatch)(c.A).setUserInfo(t),e("/dashboard/favorites")}else a(!1)}else a(!1),d("Something went wrong, try again")}))})({username:authorEmail.value,password:authorPassword.value})}},(0,l.createElement)("div",{className:"templatiq__auth__info"},(0,l.createElement)("div",{className:"templatiq__auth__info__single"},(0,l.createElement)("label",{htmlFor:"authorEmail"},(0,r.__)("Email Address","templatiq")),(0,l.createElement)("input",{type:"text",id:"authorEmail",name:"authorEmail",value:g.authorEmail,onChange:N})),(0,l.createElement)("div",{className:"templatiq__auth__info__single"},(0,l.createElement)("label",{htmlFor:"authorPassword"},"Password"),(0,l.createElement)("input",{type:"password",id:"authorPassword",name:"authorPassword",value:g.authorPassword,onChange:N}))),(0,l.createElement)("div",{className:"templatiq__auth__actions"},(0,l.createElement)("div",{className:"templatiq__auth__actions__wrapper"},(0,l.createElement)("div",{className:"templatiq__checkbox templatiq__auth__remember"},(0,l.createElement)("input",{type:"checkbox",name:"rememberMe",id:"rememberMe",className:"templatiq__checkbox__input"}),(0,l.createElement)("label",{for:"rememberMe",className:"templatiq__checkbox__label"},(0,r.__)("Remember Me","templatiq"))),(0,l.createElement)("div",{className:"templatiq__auth__forgot"},(0,l.createElement)("a",{href:"https://templatiq.com/wp-login.php?action=lostpassword",target:"_blank",className:"templatiq__auth__link"},(0,r.__)("Forgot password?","templatiq")))),(0,l.createElement)("button",{type:"submit",onClick:()=>{a(!0)},className:"templatiq__auth__btn templatiq-btn templatiq-btn-primary "+(t?"templatiq__loading templatiq__loading--btn":"")},t?null:(0,r.__)("Sign In","templatiq")),p?(0,l.createElement)("p",{className:"templatiq__auth__error text-danger"},p):null,(0,l.createElement)("span",{className:"templatiq__auth__desc"},(0,r.__)("Don't have an account?","templatiq"),(0,l.createElement)(s.N_,{to:"/signup",className:"templatiq__auth__link"},(0,r.__)("Sign up","templatiq"))))))}},7148:(e,t,a)=>{a.d(t,{A:()=>p});var l=a(1609),i=a(4581),n=a(6883),m=a(6087),_=a(7767),o=a(4976),s=a(7723),r=a(9548),c=a(7143);function p({setIsSignedUp:e}){const t=(0,_.Zp)();let[a,p]=(0,m.useState)(!1);const[d,u]=(0,m.useState)(!1);let[g,M]=(0,m.useState)("");const[N,q]=(0,m.useState)({authorFullName:"",authorEmail:""}),{isLoggedIn:E}=(0,c.select)(r.A).getUserInfo(),h=e=>{q({...N,[e.target.name]:e.target.value})};return(0,m.useEffect)((()=>{E&&t("/dashboard/favorites")}),[]),(0,l.createElement)(n.S_,{className:"templatiq__auth"},(0,l.createElement)("h3",{className:"templatiq__auth__title"}," Sign up your account"),d?(0,l.createElement)("div",{className:"templatiq__auth__wrapper notification-wrapper"},(0,l.createElement)("p",null,(0,s.__)("Successfully Registered. Check Your Email to Complete Registration.","templatiq")),(0,l.createElement)("div",{className:"templatiq__auth__btn_wrapper"},(0,l.createElement)(o.N_,{to:"/",className:"templatiq__auth__btn templatiq-btn templatiq-btn-primary"},(0,s.__)(" Go to Home","templatiq")),(0,l.createElement)(o.N_,{to:"/signin",className:"templatiq__auth__btn templatiq-btn"},(0,s.__)("Sign in","templatiq")))):(0,l.createElement)("form",{className:"templatiq__auth__wrapper",onSubmit:t=>{t.preventDefault(),(async t=>{(0,i.A)("templatiq/account/create",t).then((t=>{if(t?.body?.token)u(!0),e(!0);else{const e=t.message||(0,s.__)("Something went wrong","templatiq");M(e)}p(!1)}))})({name:authorFullName.value,user_email:authorEmail.value})}},(0,l.createElement)("div",{className:"templatiq__auth__info"},(0,l.createElement)("div",{className:"templatiq__auth__info__single"},(0,l.createElement)("label",{htmlFor:"authorFullName"},"Name"),(0,l.createElement)("input",{type:"text",id:"authorFullName",name:"authorFullName",value:N.authorFullName,onChange:h})),(0,l.createElement)("div",{className:"templatiq__auth__info__single"},(0,l.createElement)("label",{htmlFor:"authorEmail"},"Email Address"),(0,l.createElement)("input",{type:"email",id:"authorEmail",name:"authorEmail",value:N.authorEmail,onChange:h}))),(0,l.createElement)("div",{className:"templatiq__auth__actions"},(0,l.createElement)("button",{type:"submit",onClick:()=>{p(!0)},className:"templatiq__auth__btn templatiq-btn templatiq-btn-primary "+(a?"templatiq__loading templatiq__loading--btn":"")},a?null:(0,s.__)("Sign Up","templatiq")),g&&(0,l.createElement)("p",{className:"text-danger"},g),(0,l.createElement)("span",{className:"templatiq__auth__desc"},(0,s.__)("Already have an account?","templatiq"),(0,l.createElement)(o.N_,{to:"/signin",className:"templatiq__auth__link"},(0,s.__)("Sign in","templatiq"))))))}}}]);