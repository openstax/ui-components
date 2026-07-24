import{s as o,a as e,j as l,r as d}from"./index.e2cd4e30.js";import{c,C as m,d as p}from"./Modal.01a43102.js";import{k as u}from"./Dialog.module.0b47314b.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.dbd88afa.js";import"./useFocusRing.module.daff7fe4.js";import"./OverlayArrow.module.d47d7814.js";import"./context.module.a95fa1a8.js";import"./Button.module.9054b322.js";import"./useButton.module.ba02c15d.js";import"./Collection.module.0f83caea.js";import"./useTreeState.module.c6b7c842.js";const f=o(c)`
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
