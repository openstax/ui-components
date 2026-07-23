import{s as o,a as e,j as l,r as d}from"./index.b57afb2c.js";import{c,C as m,d as p}from"./Modal.0b40d9a3.js";import{k as u}from"./Dialog.module.f4f208fc.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.d0d1e5a3.js";import"./useFocusRing.module.3a317c65.js";import"./OverlayArrow.module.d3b35e6d.js";import"./context.module.889f177d.js";import"./Button.module.e2ab8ead.js";import"./useButton.module.0ab174e5.js";import"./Collection.module.81dae9e3.js";import"./useTreeState.module.4a5edb91.js";const f=o(c)`
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
