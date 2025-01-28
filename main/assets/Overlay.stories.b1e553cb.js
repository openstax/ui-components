import{s as o,a as e,j as l,r as d}from"./index.9b638a39.js";import{d as c,C as m,e as u}from"./Modal.2ff2fe76.js";import{n as p}from"./Dialog.module.e743800e.js";import"./theme.e81936ef.js";import"./palette.15e4d008.js";import"./context.module.ee8a93fc.js";import"./OverlayArrow.module.40f35c5e.js";import"./FocusScope.module.d4bd33d0.js";const f=o(c)`
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
