import{s as o,a as e,j as l,r as d}from"./index.f5b07e0b.js";import{c,C as m,d as p}from"./Modal.c7496002.js";import{k as u}from"./Dialog.module.0bdfa475.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.fb71ccda.js";import"./useFocusRing.module.9030c39a.js";import"./OverlayArrow.module.e4fe79a6.js";import"./context.module.9667934b.js";import"./Button.module.74b9e455.js";import"./Hidden.module.6087b984.js";import"./useButton.module.228e69f7.js";import"./Collection.module.74527af5.js";import"./FocusScope.module.1a5f45cc.js";import"./useTreeState.module.edbe31f3.js";const f=o(c)`
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
