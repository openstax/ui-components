import{s as o,a as e,j as l,r as d}from"./index.de1284b4.js";import{c,C as m,d as p}from"./Modal.b805d1e2.js";import{k as u}from"./Dialog.module.58a7ee49.js";import"./theme.475b90c2.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.d270848e.js";import"./useFocusRing.module.527368b8.js";import"./OverlayArrow.module.e5bc4e12.js";import"./context.module.de9cd171.js";import"./Button.module.a6404ee5.js";import"./useButton.module.e9b5cef1.js";import"./Collection.module.21a908f5.js";import"./useTreeState.module.d21dbb21.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,W=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{W as Default};
