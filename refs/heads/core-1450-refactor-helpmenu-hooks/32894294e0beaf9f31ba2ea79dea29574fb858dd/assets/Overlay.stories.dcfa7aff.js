import{s as o,a as e,j as l,r as d}from"./index.543c969e.js";import{c,C as m,d as p}from"./Modal.5e8060c0.js";import{k as u}from"./Dialog.module.74459ee9.js";import"./theme.d9792c9b.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.d17edd6e.js";import"./useFocusRing.module.54ccaa8e.js";import"./OverlayArrow.module.50b960f1.js";import"./context.module.f8a89be1.js";import"./Button.module.528c2a46.js";import"./useButton.module.a0a69c08.js";import"./Collection.module.5bd157b6.js";import"./useTreeState.module.162b4de5.js";const f=o(c)`
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
