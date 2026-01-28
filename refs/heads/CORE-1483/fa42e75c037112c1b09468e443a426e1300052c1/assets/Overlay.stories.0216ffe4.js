import{s as o,a as e,j as l,r as d}from"./index.caafeed6.js";import{c,C as m,d as p}from"./Modal.36ffa330.js";import{k as u}from"./Dialog.module.b8f2986b.js";import"./theme.73b2196b.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.74cc3ff7.js";import"./useFocusRing.module.0de5ccb5.js";import"./OverlayArrow.module.0af9270f.js";import"./context.module.cf5392d7.js";import"./Button.module.8eeaa890.js";import"./useButton.module.c53a8eac.js";import"./Collection.module.3bb5c184.js";import"./useTreeState.module.3af4ae74.js";const f=o(c)`
  background-color: rgba(0, 0, 0, 0.89);
`,h=o(m)`
  height: 4rem;
  width: 4rem;
  position: absolute;
  right: 2em;
  top: 2em;
`,y=o(p)`
  color: #fff;
`,w=o(u)`
  position: relative;
  flex-grow: 1;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,W=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{W as Default};
