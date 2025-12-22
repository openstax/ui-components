import{s as o,a as e,j as l,r as d}from"./index.1940b973.js";import{c,C as m,d as p}from"./Modal.c8dfc4c2.js";import{k as u}from"./Dialog.module.f0d5eb45.js";import"./theme.8cb4384f.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.12e8ad68.js";import"./useFocusRing.module.b1754a57.js";import"./OverlayArrow.module.9694790e.js";import"./context.module.cf91de77.js";import"./Button.module.d9f07fbe.js";import"./useButton.module.6b9c1eb2.js";import"./Collection.module.b53c360e.js";import"./useTreeState.module.f463ace0.js";const f=o(c)`
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
