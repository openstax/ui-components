import{s as o,a as e,j as l,r as d}from"./index.52210f8f.js";import{d as c,C as m,e as p}from"./Modal.624d15f0.js";import{n as u}from"./Dialog.module.c7c03301.js";import"./theme.a2fe6e85.js";import"./palette.15e4d008.js";import"./context.module.2e90d596.js";import"./focusSafely.module.6462c9ae.js";import"./OverlayArrow.module.0971d0b0.js";import"./FocusScope.module.b751d6d7.js";import"./isScrollable.module.9a3de2cc.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,D=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default};
