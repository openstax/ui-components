import{s as o,a as e,j as l,r as d}from"./index.a0288aa0.js";import{c,C as m,d as p}from"./Modal.04e724db.js";import{k as u}from"./Dialog.module.676a8179.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.6f0cc464.js";import"./useFocusRing.module.26dc1272.js";import"./OverlayArrow.module.6becfc30.js";import"./context.module.c94d4b6a.js";import"./Button.module.2c0940ad.js";import"./Hidden.module.a49fb230.js";import"./useButton.module.a4a4551d.js";import"./Collection.module.ca8439c1.js";import"./FocusScope.module.0d0ca1df.js";import"./useTreeState.module.21e6ae29.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:i,show:n,...s})=>n?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:i})]})}):null,A=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{A as Default};
