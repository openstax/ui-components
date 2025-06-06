import{s as o,a as e,j as l,r as d}from"./index.e2f6827d.js";import{d as c,C as m,e as p}from"./Modal.76d4e088.js";import{k as u}from"./Dialog.module.e768bb5a.js";import"./theme.f8c44abb.js";import"./palette.15e4d008.js";import"./useTreeState.module.5e8de5f7.js";import"./Collection.module.c7ed2ced.js";import"./useFocusRing.module.d607e266.js";import"./OverlayArrow.module.21a4e296.js";import"./Button.module.ccc2034a.js";import"./useButton.module.af4a9b35.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,E=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as Default};
