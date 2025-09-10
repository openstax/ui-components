import{s as o,a as e,j as l,r as d}from"./index.515a76d5.js";import{d as c,C as m,e as p}from"./Modal.d38135d6.js";import{k as u}from"./Dialog.module.095bfb2e.js";import"./theme.3b0839ab.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.e7c8a4b3.js";import"./useFocusRing.module.6f1818ac.js";import"./OverlayArrow.module.e9a026ed.js";import"./context.module.44c41772.js";import"./Button.module.6fc2d186.js";import"./useButton.module.68bb9fb5.js";import"./Collection.module.f1b66420.js";import"./useTreeState.module.8a4a1891.js";const f=o(c)`
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
