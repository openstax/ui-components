import{s as o,a as e,j as l,r as d}from"./index.b59d52da.js";import{c,C as m,d as p}from"./Modal.5c0159ee.js";import{k as u}from"./Dialog.module.bfe00bae.js";import"./theme.5b7d07ee.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.d9a964bb.js";import"./useFocusRing.module.17b33b36.js";import"./OverlayArrow.module.ebb67ecd.js";import"./context.module.cd354128.js";import"./Button.module.7074e1c0.js";import"./useButton.module.8ed0f2e6.js";import"./Collection.module.fe5d1a55.js";import"./useTreeState.module.c53650b1.js";const f=o(c)`
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
