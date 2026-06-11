import{s as o,a as e,j as l,r as d}from"./index.d815c62a.js";import{c,C as m,d as p}from"./Modal.b5d92503.js";import{k as u}from"./Dialog.module.6f7eb220.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.5dec7ae2.js";import"./useFocusRing.module.5097aff4.js";import"./OverlayArrow.module.1b4d88d9.js";import"./context.module.cc14a4fa.js";import"./Button.module.b45c4673.js";import"./useButton.module.8f45d5bc.js";import"./Collection.module.ce9797c2.js";import"./useTreeState.module.e41090ab.js";const f=o(c)`
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
