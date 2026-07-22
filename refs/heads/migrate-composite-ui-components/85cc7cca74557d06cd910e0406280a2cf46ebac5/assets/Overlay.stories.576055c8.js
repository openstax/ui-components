import{s as o,a as e,j as l,r as d}from"./index.652f5500.js";import{c,C as m,d as p}from"./Modal.e4812899.js";import{k as u}from"./Dialog.module.96245eb4.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.170eb7f6.js";import"./useFocusRing.module.eae33ec3.js";import"./OverlayArrow.module.ac7895ea.js";import"./context.module.96e305a7.js";import"./Button.module.4fde5ab2.js";import"./Hidden.module.27893b24.js";import"./useButton.module.3697732d.js";import"./Collection.module.4d5f2a38.js";import"./FocusScope.module.538bc5dc.js";import"./useTreeState.module.f016cb94.js";const f=o(c)`
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
