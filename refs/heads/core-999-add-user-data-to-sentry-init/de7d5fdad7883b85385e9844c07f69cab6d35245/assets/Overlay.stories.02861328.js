import{s as o,a as e,j as l,r as d}from"./index.cac12bbc.js";import{d as c,C as m,e as p}from"./Modal.b8a5c828.js";import{k as u}from"./Dialog.module.d3fddf1f.js";import"./theme.9f91f243.js";import"./palette.15e4d008.js";import"./useTreeState.module.3b9f91c3.js";import"./Collection.module.83e45fed.js";import"./useFocusRing.module.0ef0d940.js";import"./OverlayArrow.module.e21935d3.js";import"./Button.module.3632d609.js";import"./useButton.module.2fc10783.js";const f=o(c)`
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
