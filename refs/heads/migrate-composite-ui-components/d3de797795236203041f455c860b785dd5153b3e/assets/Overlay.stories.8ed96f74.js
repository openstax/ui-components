import{s as o,a as e,j as l,r as d}from"./index.6eef170d.js";import{c,C as m,d as p}from"./Modal.a46f2443.js";import{k as u}from"./Dialog.module.081df265.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.3aaeb8cb.js";import"./useFocusRing.module.12193b3d.js";import"./OverlayArrow.module.36c05b0d.js";import"./context.module.e2dce8e1.js";import"./Button.module.8357fec4.js";import"./Hidden.module.a5303c19.js";import"./useButton.module.2c6c0793.js";import"./Collection.module.19ee6905.js";import"./FocusScope.module.041c4a71.js";import"./useTreeState.module.9927e606.js";const f=o(c)`
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
