import{s as o,a as e,j as l,r as d}from"./index.beb92222.js";import{c,C as m,d as p}from"./Modal.8ee92b09.js";import{k as u}from"./Dialog.module.2dbf3fac.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.5cdd05e9.js";import"./useFocusRing.module.209a79a7.js";import"./OverlayArrow.module.52c48408.js";import"./context.module.7d04dba8.js";import"./Button.module.1b9bc7ae.js";import"./useButton.module.92405fb7.js";import"./Collection.module.ce9c644c.js";import"./useTreeState.module.a1aeeaa8.js";const f=o(c)`
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
