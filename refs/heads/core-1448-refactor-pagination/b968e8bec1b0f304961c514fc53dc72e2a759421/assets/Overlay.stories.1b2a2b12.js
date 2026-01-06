import{s as o,a as e,j as l,r as d}from"./index.2111f8e4.js";import{c,C as m,d as p}from"./Modal.4f3b591b.js";import{k as u}from"./Dialog.module.b8af2bce.js";import"./theme.937d8d2b.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.019bbef0.js";import"./useFocusRing.module.ae39e878.js";import"./OverlayArrow.module.a738aa22.js";import"./context.module.6ae65def.js";import"./Button.module.b49ec1ac.js";import"./useButton.module.2d6879f1.js";import"./Collection.module.6814c12b.js";import"./useTreeState.module.5d102f46.js";const f=o(c)`
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
