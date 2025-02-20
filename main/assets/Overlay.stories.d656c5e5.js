import{s as o,a as e,j as l,r as d}from"./index.fa43fba7.js";import{d as c,C as m,e as p}from"./Modal.29105675.js";import{l as u}from"./Dialog.module.09855c6a.js";import"./theme.ab406f57.js";import"./palette.15e4d008.js";import"./context.module.742a2143.js";import"./OverlayArrow.module.f1af7b3a.js";import"./Hidden.module.6bee436d.js";import"./useButton.module.b601f8f1.js";import"./Collection.module.d7019bf5.js";import"./FocusScope.module.9d41729b.js";const f=o(c)`
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
