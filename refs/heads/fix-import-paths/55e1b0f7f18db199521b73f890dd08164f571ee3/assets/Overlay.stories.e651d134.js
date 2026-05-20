import{s as o,a as e,j as l,r as d}from"./index.b98655f3.js";import{c,C as m,d as p}from"./Modal.e6bce69b.js";import{k as u}from"./Dialog.module.0989f6b4.js";import"./theme.cf63f8c7.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.ef612c93.js";import"./useFocusRing.module.9a0c50f9.js";import"./OverlayArrow.module.99eb36f7.js";import"./context.module.a67b54e9.js";import"./Button.module.3b635ed6.js";import"./useButton.module.883feff2.js";import"./Collection.module.8e05d2ef.js";import"./useTreeState.module.440c8b4c.js";const f=o(c)`
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
