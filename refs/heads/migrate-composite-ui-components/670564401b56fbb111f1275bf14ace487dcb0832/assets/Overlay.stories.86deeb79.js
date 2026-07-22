import{s as o,a as e,j as l,r as d}from"./index.044b63e4.js";import{c,C as m,d as p}from"./Modal.c8dec371.js";import{k as u}from"./Dialog.module.d0135cbe.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.c965f71d.js";import"./useFocusRing.module.b82e6b75.js";import"./OverlayArrow.module.acabb315.js";import"./context.module.8a5420b1.js";import"./Button.module.154621d6.js";import"./Hidden.module.d46d8721.js";import"./useButton.module.5b1634a6.js";import"./Collection.module.7befe71b.js";import"./FocusScope.module.14313a77.js";import"./useTreeState.module.1feb285b.js";const f=o(c)`
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
