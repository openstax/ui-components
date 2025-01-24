import{s as o,a as e,j as l,r as d}from"./index.ab5ff1f7.js";import{d as c,C as m,e as u}from"./Modal.f8b076ee.js";import{n as p}from"./Dialog.module.e9469b7d.js";import"./theme.75f8fe72.js";import"./palette.15e4d008.js";import"./context.module.9d54f9e8.js";import"./OverlayArrow.module.c35148d0.js";import"./FocusScope.module.792345ed.js";const f=o(c)`
  background-color: rgba(0, 0, 0, 0.89);
`,h=o(m)`
  height: 4rem;
  width: 4rem;
  position: absolute;
  right: 2em;
  top: 2em;
`,y=o(u)`
  color: #fff;
`,w=o(p)`
  position: relative;
  flex-grow: 1;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,B=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{B as Default};
