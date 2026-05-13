import{s as o,a as e,j as l,r as d}from"./index.cb2c8139.js";import{c,C as m,d as p}from"./Modal.133dc885.js";import{k as u}from"./Dialog.module.ef925196.js";import"./theme.00f75872.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.c9b023d8.js";import"./useFocusRing.module.09b5f3f5.js";import"./OverlayArrow.module.082241a9.js";import"./context.module.f94a98bd.js";import"./Button.module.fdae7f86.js";import"./useButton.module.7b65df7b.js";import"./Collection.module.e5267128.js";import"./useTreeState.module.e4e8e1c2.js";const f=o(c)`
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
