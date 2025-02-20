import{s as o,a as e,j as l,r as d}from"./index.f09e7bf3.js";import{d as c,C as m,e as p}from"./Modal.62359cfd.js";import{l as u}from"./Dialog.module.3dba56b6.js";import"./theme.18fe5a74.js";import"./palette.15e4d008.js";import"./context.module.86edc84f.js";import"./OverlayArrow.module.7c1f8c9b.js";import"./Hidden.module.9a7d5e7b.js";import"./useButton.module.a1a7d796.js";import"./Collection.module.d02059cb.js";import"./FocusScope.module.c88fe1c5.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,E=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as Default};
