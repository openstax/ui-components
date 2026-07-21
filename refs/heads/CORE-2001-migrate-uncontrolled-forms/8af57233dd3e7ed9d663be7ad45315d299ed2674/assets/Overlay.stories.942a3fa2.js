import{s as o,a as e,j as l,r as d}from"./index.c4169142.js";import{c,C as m,d as p}from"./Modal.09386068.js";import{k as u}from"./Dialog.module.310b2a0c.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.764a72b8.js";import"./useFocusRing.module.5be683fc.js";import"./OverlayArrow.module.bac71c6d.js";import"./context.module.9c1fb9d0.js";import"./Button.module.f2c15482.js";import"./useButton.module.d3129de0.js";import"./Collection.module.97ce4fa1.js";import"./useTreeState.module.62901016.js";const f=o(c)`
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
