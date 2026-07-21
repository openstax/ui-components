import{s as o,a as e,j as l,r as d}from"./index.6230b141.js";import{c,C as m,d as p}from"./Modal.ffcaa70a.js";import{k as u}from"./Dialog.module.658b7a88.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.8322532a.js";import"./useFocusRing.module.75522451.js";import"./OverlayArrow.module.aacc0374.js";import"./context.module.e700db4f.js";import"./Button.module.8517c931.js";import"./Hidden.module.20bb48f4.js";import"./useButton.module.4a54fb63.js";import"./Collection.module.7ad5e601.js";import"./FocusScope.module.42166267.js";import"./useTreeState.module.340e3553.js";const f=o(c)`
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
