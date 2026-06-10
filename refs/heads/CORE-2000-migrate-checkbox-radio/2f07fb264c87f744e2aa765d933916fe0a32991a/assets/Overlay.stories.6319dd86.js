import{s as o,a as e,j as l,r as d}from"./index.91f12c85.js";import{c,C as m,d as p}from"./Modal.b438fcbc.js";import{k as u}from"./Dialog.module.7e1e5a51.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.c22c3e1d.js";import"./useFocusRing.module.839c6e05.js";import"./OverlayArrow.module.c0005718.js";import"./context.module.31374f1e.js";import"./Button.module.3643134f.js";import"./useButton.module.cdaad12c.js";import"./Collection.module.db7878d2.js";import"./useTreeState.module.efac07b4.js";const f=o(c)`
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
