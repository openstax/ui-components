import{s as o,a as e,j as l,r as d}from"./index.5640775c.js";import{c,C as m,d as p}from"./Modal.5cc20697.js";import{k as u}from"./Dialog.module.9255064c.js";import"./theme.5f041dd9.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.459d5763.js";import"./useFocusRing.module.819f4c7d.js";import"./OverlayArrow.module.6d63019d.js";import"./context.module.ec364ef6.js";import"./Button.module.42472b05.js";import"./useButton.module.4489f135.js";import"./Collection.module.d104b86e.js";import"./useTreeState.module.bc82e632.js";const f=o(c)`
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
