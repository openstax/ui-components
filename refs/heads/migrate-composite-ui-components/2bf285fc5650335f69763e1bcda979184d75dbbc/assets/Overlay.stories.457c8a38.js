import{s as o,a as e,j as l,r as d}from"./index.1de2f366.js";import{c,C as m,d as p}from"./Modal.85db25ea.js";import{k as u}from"./Dialog.module.60b1c472.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.5190997c.js";import"./useFocusRing.module.2b0b40c5.js";import"./OverlayArrow.module.9e2347ec.js";import"./context.module.f9c5733e.js";import"./Button.module.2f1674d9.js";import"./Hidden.module.e16a7b61.js";import"./useButton.module.bf6d7f59.js";import"./Collection.module.18781132.js";import"./FocusScope.module.e98aec71.js";import"./useTreeState.module.68ba357a.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:i,show:n,...s})=>n?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:i})]})}):null,A=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{A as Default};
