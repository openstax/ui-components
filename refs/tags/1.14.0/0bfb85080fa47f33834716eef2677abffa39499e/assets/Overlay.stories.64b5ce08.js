import{s as o,a as e,j as l,r as d}from"./index.68e5c861.js";import{d as c,C as m,e as p}from"./Modal.ae22a548.js";import{l as u}from"./Dialog.module.51a6607e.js";import"./theme.c9e78a0d.js";import"./palette.15e4d008.js";import"./context.module.725cfac0.js";import"./OverlayArrow.module.dd666a8f.js";import"./Hidden.module.a26f812d.js";import"./useButton.module.b9fbf560.js";import"./Collection.module.4e95d544.js";import"./FocusScope.module.f556a18f.js";const f=o(c)`
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
