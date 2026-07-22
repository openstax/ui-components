import{s as o,a as e,j as l,r as d}from"./index.9732b206.js";import{c,C as m,d as p}from"./Modal.34a3b216.js";import{k as u}from"./Dialog.module.dc1a9375.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.2bd53e4c.js";import"./useFocusRing.module.367e66e4.js";import"./OverlayArrow.module.d2eecfd8.js";import"./context.module.d2d414a6.js";import"./Button.module.a5d50629.js";import"./Hidden.module.4f736ce3.js";import"./useButton.module.6d5393cb.js";import"./Collection.module.4806dc7e.js";import"./FocusScope.module.193add90.js";import"./useTreeState.module.d55b3797.js";const f=o(c)`
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
