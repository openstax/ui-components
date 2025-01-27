import{s as o,a as e,j as l,r as d}from"./index.6311e692.js";import{d as c,C as m,e as p}from"./Modal.d285eab7.js";import{l as u}from"./Dialog.module.dbe88397.js";import"./theme.eb75eac4.js";import"./palette.15e4d008.js";import"./context.module.e7c01591.js";import"./OverlayArrow.module.d46f9749.js";import"./Hidden.module.8f8e3ef0.js";import"./useButton.module.5ef4911e.js";import"./Collection.module.0b824e65.js";import"./FocusScope.module.04521bb3.js";const f=o(c)`
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
