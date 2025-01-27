import{s as o,a as e,j as l,r as d}from"./index.4d692fb5.js";import{d as c,C as m,e as p}from"./Modal.d786df38.js";import{l as u}from"./Dialog.module.c3649d53.js";import"./theme.ac00b3a8.js";import"./palette.15e4d008.js";import"./context.module.992083d1.js";import"./OverlayArrow.module.2c31857b.js";import"./Hidden.module.26b5b782.js";import"./useButton.module.1e8601a1.js";import"./Collection.module.ab50a2f1.js";import"./FocusScope.module.5c092a1e.js";const f=o(c)`
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
