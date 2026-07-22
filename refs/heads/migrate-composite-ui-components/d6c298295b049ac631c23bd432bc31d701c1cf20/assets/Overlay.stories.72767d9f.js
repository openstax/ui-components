import{s as o,a as e,j as l,r as d}from"./index.80ce4677.js";import{c,C as m,d as p}from"./Modal.46133a74.js";import{k as u}from"./Dialog.module.f2d65493.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.92c8bb71.js";import"./useFocusRing.module.ef882394.js";import"./OverlayArrow.module.6071b136.js";import"./context.module.b45c425d.js";import"./Button.module.125f36fc.js";import"./Hidden.module.2da4d726.js";import"./useButton.module.62e34136.js";import"./Collection.module.18d7af62.js";import"./FocusScope.module.29cc93ce.js";import"./useTreeState.module.24cc78b4.js";const f=o(c)`
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
