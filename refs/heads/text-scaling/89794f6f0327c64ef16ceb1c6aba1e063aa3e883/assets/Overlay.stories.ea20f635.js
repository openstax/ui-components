import{s as o,a as e,j as l,r as d}from"./index.0e35f9e1.js";import{d as c,C as m,e as p}from"./Modal.55e4865e.js";import{l as u}from"./Dialog.module.31495c06.js";import"./theme.6bab1d26.js";import"./palette.15e4d008.js";import"./context.module.b83dae6a.js";import"./OverlayArrow.module.1693cf45.js";import"./Hidden.module.272cb3e9.js";import"./useButton.module.2e479d47.js";import"./Collection.module.4f8f8245.js";import"./FocusScope.module.2105fd97.js";const f=o(c)`
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
