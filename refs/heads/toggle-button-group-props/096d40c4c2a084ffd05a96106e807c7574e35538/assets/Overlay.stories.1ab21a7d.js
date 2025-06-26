import{s as o,a as e,j as l,r as d}from"./index.7f4708a9.js";import{d as c,C as m,e as p}from"./Modal.54604e6d.js";import{k as u}from"./Dialog.module.5900f0e1.js";import"./theme.167f6352.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.8860fbe3.js";import"./useFocusRing.module.c278eff0.js";import"./OverlayArrow.module.b6e8b209.js";import"./context.module.08242fd6.js";import"./Button.module.54f9d076.js";import"./useButton.module.58d6885b.js";import"./Collection.module.120d7a33.js";import"./useTreeState.module.8f799d71.js";const f=o(c)`
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
