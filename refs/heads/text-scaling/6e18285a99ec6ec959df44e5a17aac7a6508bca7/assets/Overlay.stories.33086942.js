import{s as o,a as e,j as l,r as d}from"./index.c8dc9ec8.js";import{d as c,C as m,e as p}from"./Modal.cb5f5eda.js";import{l as u}from"./Dialog.module.a15a237e.js";import"./theme.257d9bc4.js";import"./palette.15e4d008.js";import"./context.module.5112510d.js";import"./OverlayArrow.module.baafd6f9.js";import"./Hidden.module.49e48360.js";import"./useButton.module.8c51044f.js";import"./Collection.module.be524f28.js";import"./FocusScope.module.69ad759a.js";const f=o(c)`
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
