import{s as o,a as e,j as l,r as d}from"./index.a333fe6c.js";import{c,C as m,d as p}from"./Modal.721f4cf2.js";import{k as u}from"./Dialog.module.fddf3e8f.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.4183cd11.js";import"./useFocusRing.module.ee1fc797.js";import"./OverlayArrow.module.94c36aec.js";import"./context.module.ce413104.js";import"./Button.module.d51f0b2c.js";import"./useButton.module.11c6fdaf.js";import"./Collection.module.f81d5a05.js";import"./useTreeState.module.a80467fb.js";const f=o(c)`
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
