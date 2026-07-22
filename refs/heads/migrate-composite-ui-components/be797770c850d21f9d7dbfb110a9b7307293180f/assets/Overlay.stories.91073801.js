import{s as o,a as e,j as l,r as d}from"./index.2bf602ce.js";import{c,C as m,d as p}from"./Modal.8dade602.js";import{k as u}from"./Dialog.module.e48a0e56.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.e3b6e552.js";import"./useFocusRing.module.6e60fef6.js";import"./OverlayArrow.module.bc5c0080.js";import"./context.module.180862e1.js";import"./Button.module.5276be63.js";import"./Hidden.module.2cbc25bc.js";import"./useButton.module.76caaf0a.js";import"./Collection.module.ce693891.js";import"./FocusScope.module.0268f557.js";import"./useTreeState.module.1e470de7.js";const f=o(c)`
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
