import{s as o,a as e,j as l,r as d}from"./index.8a9520f0.js";import{c,C as m,d as p}from"./Modal.729d4055.js";import{k as u}from"./Dialog.module.fb02c00f.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.8608630d.js";import"./useFocusRing.module.4306117b.js";import"./OverlayArrow.module.cd4082b0.js";import"./context.module.c1429bc4.js";import"./Button.module.f7748fc3.js";import"./useButton.module.10398b9d.js";import"./Collection.module.b7dbcc50.js";import"./useTreeState.module.6aa966f9.js";const f=o(c)`
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
