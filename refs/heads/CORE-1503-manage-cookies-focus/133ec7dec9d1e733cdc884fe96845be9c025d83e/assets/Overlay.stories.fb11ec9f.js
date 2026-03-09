import{s as o,a as e,j as l,r as d}from"./index.e7e4f3ae.js";import{c,C as m,d as p}from"./Modal.a52a7c29.js";import{k as u}from"./Dialog.module.11c1809a.js";import"./theme.30358d9f.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.a0ac9549.js";import"./useFocusRing.module.50c850ae.js";import"./OverlayArrow.module.326f9da7.js";import"./context.module.e20d7a6a.js";import"./Button.module.e0d473aa.js";import"./useButton.module.3ea3c50f.js";import"./Collection.module.2c7d66ed.js";import"./useTreeState.module.ce4fce14.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,W=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{W as Default};
