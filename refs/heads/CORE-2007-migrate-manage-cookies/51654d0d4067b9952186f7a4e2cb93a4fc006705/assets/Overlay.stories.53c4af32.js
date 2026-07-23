import{s as o,a as e,j as l,r as d}from"./index.0a3c727d.js";import{c,C as m,d as p}from"./Modal.32bf0486.js";import{k as u}from"./Dialog.module.e79a974e.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.f85d63e8.js";import"./useFocusRing.module.d184f928.js";import"./OverlayArrow.module.05398806.js";import"./context.module.693b5561.js";import"./Button.module.5736616e.js";import"./useButton.module.6f545216.js";import"./Collection.module.9cc6853d.js";import"./useTreeState.module.54479bbd.js";const f=o(c)`
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
