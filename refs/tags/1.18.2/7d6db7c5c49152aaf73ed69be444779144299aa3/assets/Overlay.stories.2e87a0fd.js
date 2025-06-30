import{s as o,a as e,j as l,r as d}from"./index.87822e44.js";import{d as c,C as m,e as p}from"./Modal.0502fdc5.js";import{k as u}from"./Dialog.module.6c354332.js";import"./theme.32c65e48.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.d8c428d1.js";import"./useFocusRing.module.2f07d33c.js";import"./OverlayArrow.module.6a695bdb.js";import"./context.module.27ddeb9d.js";import"./Button.module.00e026d7.js";import"./useButton.module.9aaf5e8e.js";import"./Collection.module.eca8e176.js";import"./useTreeState.module.02c81fc4.js";const f=o(c)`
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
