import{s as o,a as e,j as l,r as d}from"./index.64eca7f9.js";import{c,C as m,d as p}from"./Modal.1ea53717.js";import{k as u}from"./Dialog.module.32874aac.js";import"./theme.fb46484b.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.87cbb61e.js";import"./useFocusRing.module.c45c12b7.js";import"./OverlayArrow.module.4989e243.js";import"./context.module.0a16dcb7.js";import"./Button.module.8055a418.js";import"./useButton.module.732dc45d.js";import"./Collection.module.c8d55143.js";import"./useTreeState.module.0b5ceada.js";const f=o(c)`
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
