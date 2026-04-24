import{s as o,a as e,j as l,r as d}from"./index.36f5dfba.js";import{c,C as m,d as p}from"./Modal.6dd3c84b.js";import{k as u}from"./Dialog.module.bafb2d39.js";import"./theme.1b1f074d.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.ae10d097.js";import"./useFocusRing.module.0f4434a8.js";import"./OverlayArrow.module.dad026c2.js";import"./context.module.e7d75cc4.js";import"./Button.module.9fd0a508.js";import"./useButton.module.d5dc0645.js";import"./Collection.module.d0ed6441.js";import"./useTreeState.module.5b20f4c8.js";const f=o(c)`
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
