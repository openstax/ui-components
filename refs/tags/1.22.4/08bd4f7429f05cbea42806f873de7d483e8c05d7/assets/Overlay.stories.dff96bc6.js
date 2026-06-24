import{s as o,a as e,j as l,r as d}from"./index.7847cb89.js";import{c,C as m,d as p}from"./Modal.8889d13e.js";import{k as u}from"./Dialog.module.183d7c4b.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.8d3aab06.js";import"./useFocusRing.module.71020aa8.js";import"./OverlayArrow.module.964905ae.js";import"./context.module.c64274f1.js";import"./Button.module.dc842462.js";import"./useButton.module.4c1f306b.js";import"./Collection.module.efa4bc08.js";import"./useTreeState.module.97eeeba9.js";const f=o(c)`
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
