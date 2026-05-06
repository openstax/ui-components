import{s as o,a as e,j as l,r as d}from"./index.8f0a2c28.js";import{c,C as m,d as p}from"./Modal.e029e093.js";import{k as u}from"./Dialog.module.27a17373.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.7fa4cfaf.js";import"./useFocusRing.module.1e2cd607.js";import"./OverlayArrow.module.cd4b3341.js";import"./context.module.c9748400.js";import"./Button.module.2587a89a.js";import"./useButton.module.b7af77f8.js";import"./Collection.module.7095f470.js";import"./useTreeState.module.d6b7c4a8.js";const f=o(c)`
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
