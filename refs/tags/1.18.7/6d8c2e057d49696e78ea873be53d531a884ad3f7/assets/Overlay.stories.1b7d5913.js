import{s as o,a as e,j as l,r as d}from"./index.8faafd05.js";import{c,C as m,d as p}from"./Modal.3c49aa3d.js";import{k as u}from"./Dialog.module.0d0a5536.js";import"./theme.4ee3c75d.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.67104a67.js";import"./useFocusRing.module.222f1b84.js";import"./OverlayArrow.module.8dd3bb0b.js";import"./context.module.54dbf5bb.js";import"./Button.module.347fa9ba.js";import"./useButton.module.1d44f603.js";import"./Collection.module.f6202573.js";import"./useTreeState.module.677e1117.js";const f=o(c)`
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
