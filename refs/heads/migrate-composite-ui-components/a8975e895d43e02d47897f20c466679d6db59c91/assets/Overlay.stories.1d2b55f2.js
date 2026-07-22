import{s as o,a as e,j as l,r as d}from"./index.37f1621c.js";import{c,C as m,d as p}from"./Modal.d7b6fd9c.js";import{k as u}from"./Dialog.module.dc6b2e35.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.3b52cb76.js";import"./useFocusRing.module.0afedc9a.js";import"./OverlayArrow.module.de4b9cdc.js";import"./context.module.81a51207.js";import"./Button.module.104685eb.js";import"./Hidden.module.f09fe4f7.js";import"./useButton.module.5378e3a1.js";import"./Collection.module.905b8811.js";import"./FocusScope.module.7df9a234.js";import"./useTreeState.module.951c800f.js";const f=o(c)`
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
