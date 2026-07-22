import{s as o,a as e,j as l,r as d}from"./index.088c8a11.js";import{c,C as m,d as p}from"./Modal.5197f3be.js";import{k as u}from"./Dialog.module.f038548e.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.a00dc408.js";import"./useFocusRing.module.aec2e6e3.js";import"./OverlayArrow.module.ff62a467.js";import"./context.module.765eb233.js";import"./Button.module.b3dee338.js";import"./Hidden.module.09d0c978.js";import"./useButton.module.7d59b370.js";import"./Collection.module.71e2f479.js";import"./FocusScope.module.6eb3331c.js";import"./useTreeState.module.919fbb70.js";const f=o(c)`
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
