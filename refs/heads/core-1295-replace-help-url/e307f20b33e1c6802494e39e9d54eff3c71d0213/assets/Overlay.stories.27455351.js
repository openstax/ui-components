import{s as o,a as e,j as l,r as d}from"./index.2a1aae0e.js";import{c,C as m,d as p}from"./Modal.40dd125c.js";import{k as u}from"./Dialog.module.bf9991b6.js";import"./theme.6c5d108a.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.91a87a6c.js";import"./useFocusRing.module.452f8111.js";import"./OverlayArrow.module.e938e7ed.js";import"./context.module.27f044a2.js";import"./Button.module.19f3fc81.js";import"./useButton.module.193cc18f.js";import"./Collection.module.72352e89.js";import"./useTreeState.module.34d9accc.js";const f=o(c)`
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
