import{s as o,a as e,j as l,r as d}from"./index.2b887cc0.js";import{c,C as m,d as p}from"./Modal.5103e70b.js";import{k as u}from"./Dialog.module.6777c006.js";import"./theme.fc3bece1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.fb59a814.js";import"./useFocusRing.module.2ca3e192.js";import"./OverlayArrow.module.16d68e53.js";import"./context.module.b25fc1c3.js";import"./Button.module.1b80e886.js";import"./useButton.module.4677ee94.js";import"./Collection.module.bd2fd1d3.js";import"./useTreeState.module.46e8e312.js";const f=o(c)`
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
