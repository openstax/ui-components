import{s as o,a as e,j as l,r as d}from"./index.db6776a4.js";import{c,C as m,d as p}from"./Modal.2ea40790.js";import{k as u}from"./Dialog.module.345602b3.js";import"./theme.6b72730c.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.28dcef92.js";import"./useFocusRing.module.55090908.js";import"./OverlayArrow.module.70a71803.js";import"./context.module.a7d9fee5.js";import"./Button.module.94d0221a.js";import"./useButton.module.da557485.js";import"./Collection.module.2d91e21c.js";import"./useTreeState.module.ea925c10.js";const f=o(c)`
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
