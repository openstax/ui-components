import{s as o,a as e,j as l,r as d}from"./index.0bc7eaa6.js";import{d as c,C as m,e as p}from"./Modal.9ad94bdb.js";import{l as u}from"./Dialog.module.fbfa0c8b.js";import"./theme.c64d2254.js";import"./palette.15e4d008.js";import"./context.module.df77b4f9.js";import"./OverlayArrow.module.3448a0ae.js";import"./Hidden.module.17aa5339.js";import"./useButton.module.8853fc49.js";import"./Collection.module.fc1b0fcb.js";import"./FocusScope.module.c8b2048f.js";const f=o(c)`
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
