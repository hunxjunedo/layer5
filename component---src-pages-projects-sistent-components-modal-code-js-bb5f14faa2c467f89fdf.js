"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[9497],{88083:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);const o=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/button",text:"Button"},{id:10,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:11,link:"/projects/sistent/components/button/code",text:"Button"},{id:12,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:13,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:14,link:"/projects/sistent/components/text-input/code",text:"Text Input"}];var l=n(63689);var i=n(67268).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var r=()=>{var e,t;const{0:n,1:r}=(0,a.useState)(0);return(0,a.useEffect)((()=>{const e=window.location.pathname,t=o.findIndex((t=>t.link===e));r(t)}),[]),a.createElement(i,null,n>0?a.createElement(l.default,{secondary:!0,url:null===(e=o[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<o.length-1?a.createElement(l.default,{primary:!0,url:null===(t=o[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},33916:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(67294),o=n(4942),l=n(66158),i=n(56527),r=n(63689),c=n(23631),s=n(71082),d=n(89192),m=n(38804),u=n(56678);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const y=e=>{let{label:t,text:n,style:o}=e;return a.createElement(i.Box,{style:h({marginBottom:"16px"},o)},a.createElement(i.Typography,{variant:"subtitle1",gutterBottom:!0},t),a.createElement(i.TextField,{label:n,variant:"outlined",style:{width:"100%"}}))},g=['  <Button variant="contained" onClick={handleOpen}>\n        Open Modal\n    </Button>\n    <Modal open={open} closeModal={handleClose} title="Modal Title">\n        <ModalBody>\n            <div>\n                This action is irreversible! Are you sure you want to delete this team?\n            </div>\n        </ModalBody>\n        <ModalFooter variant="filled">\n            <ModalButtonSecondary onClick={handleClose}>\n                Cancel\n            </ModalButtonSecondary>\n            <ModalButtonDanger onClick={handleClose}>\n                Delete\n            </ModalButtonDanger>\n        </ModalFooter>\n    </Modal>','  <Button onClick={handleActionOpen}>Open Action Modal</Button>\n    <Modal\n        open={actionOpen}\n        onClose={handleActionClose}\n        title="Action Modal Title"\n    >\n        <ModalBody>\n            <CustomInput label="Name" placeholder="Enter your name" />\n            <CustomInput label="Email" placeholder="Enter your email" />\n            <CustomInput\n                label="Assign Organizations"\n                placeholder="Assign organizations"\n            />\n        </ModalBody>\n        <ModalFooter variant="filled">\n            <ModalButtonSecondary onClick={handleActionClose}>\n                Cancel\n            </ModalButtonSecondary>\n            <ModalButtonPrimary onClick={handleActionClose}>\n                Save\n            </ModalButtonPrimary>\n        </ModalFooter>\n    </Modal>'];var f=()=>{const{0:e,1:t}=(0,a.useState)(!1),{0:n,1:o}=(0,a.useState)(!1),p=(0,c.useLocation)(),{isDark:h}=(0,d.I)(),f=()=>{t(!1)},E=()=>{o(!1)};return a.createElement(l.y,{title:"Modal"},a.createElement("div",{className:"content"},a.createElement("a",{id:"Identity"},a.createElement("h2",null,"Modal")),a.createElement("p",null,"A modal is a dialog box or popup, displayed over the current page. Modals are used to grab the user's attention and provide important information."),a.createElement("div",{className:"filterBtns"},a.createElement(r.default,{className:"/projects/sistent/components/modal"===p.pathname?"active":"",onClick:()=>(0,s.navigate)("/projects/sistent/components/modal"),title:"Overview"}),a.createElement(r.default,{className:"/projects/sistent/components/modal/code"===p.pathname?"active":"",onClick:()=>(0,s.navigate)("/projects/sistent/identity/color/code"),title:"Code"})),a.createElement("div",{className:"main-content"},a.createElement(i.SistentThemeProvider,{initialMode:h?"dark":"light"},a.createElement("p",null,"Buttons communicate actions to users and they can be placed at several places throughout the user interface."),a.createElement("a",{id:"Basic Button"},a.createElement("h2",null,"Confirmation Modal")),a.createElement("div",{className:"showcase"},a.createElement("div",{className:"items"},a.createElement(i.Button,{variant:"contained",onClick:()=>{t(!0)}},"Open Modal"),a.createElement(i.Modal,{open:e,closeModal:f,title:"Modal Title"},a.createElement(i.ModalBody,null,a.createElement("div",null,"This action is irreversible! Are you sure you want to delete this team?")),a.createElement(i.ModalFooter,{variant:"filled"},a.createElement(u.P,null,a.createElement(i.ModalButtonSecondary,{onClick:f},"Cancel"),a.createElement(i.ModalButtonDanger,{onClick:f},"Delete"))))),a.createElement(m.d,{name:"confirmation-modal",code:g[0]})),a.createElement("h3",null,"Action Modal"),a.createElement("p",null,"Action modals help users carry out specific tasks. These would naturally involve more steps than just confirming or rejecting an action. They may include forms, links, and feature specific elements that ensure that users complete crucial tasks along their given flow. They will usually have an icon at the top left corner of the modal to signify what the purpose of this modal is in relation to the given flow as well as help users familiarize with said custom icons for easy identification across our solutions however, this might not be applicable in all cases."),a.createElement("div",{className:"showcase"},a.createElement("div",{className:"items"},a.createElement(i.Button,{variant:"contained",onClick:()=>{o(!0)}},"Open Action Modal"),a.createElement(i.Modal,{open:n,closeModal:E,title:"Action Modal Title"},a.createElement(i.ModalBody,null,a.createElement(y,{text:"Name"}),a.createElement(y,{text:"Email"}),a.createElement(y,{text:"Assign Organizations"})),a.createElement(i.ModalFooter,{variant:"filled"},a.createElement(u.P,null,a.createElement(i.ModalButtonSecondary,{onClick:E},"Cancel"),a.createElement(i.ModalButtonPrimary,{onClick:E},"Save"))))),a.createElement(m.d,{name:"action-modal",code:g[1]}))))))};var E=()=>a.createElement(f,null)},38804:function(e,t,n){n.d(t,{d:function(){return o}});var a=n(67294);const o=e=>{let{name:t,code:n}=e;const{0:o,1:l}=(0,a.useState)(!1);return a.createElement("div",{className:"show-code"},a.createElement("input",{type:"checkbox",name:t,id:t,onChange:()=>{l((e=>!e))}}),a.createElement("label",{htmlFor:t,className:"label"},"Show Code"),o&&a.createElement("pre",{className:"code"},a.createElement("code",{lang:"javascript"},n)))}},66158:function(e,t,n){n.d(t,{y:function(){return m}});var a=n(67294),o=n(56678),l=n(25661),i=n(37242),r=n(88083),c=n(71082);const s=n(67268).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var d=function(){const{0:e,1:t}=(0,a.useState)([]);(0,a.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:n,1:o}=(0,a.useState)(null);return(0,a.useEffect)((()=>{const e=window.location.pathname;o(e)}),[]),a.createElement(s,null,a.createElement("div",{className:"intra-page"},a.createElement("ul",null,e.map((e=>a.createElement("li",{key:e.id,className:"list"},a.createElement(c.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const m=e=>{let{title:t,children:n}=e;return a.createElement(o.Z,null,a.createElement("div",{className:"page-header-section"},a.createElement("h1",null,t)),a.createElement(l.Z,null),a.createElement("div",{className:"page-section"},a.createElement(i.W2,null,n," ",a.createElement(r.Z,null)),a.createElement(d,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-sistent-components-modal-code-js-bb5f14faa2c467f89fdf.js.map