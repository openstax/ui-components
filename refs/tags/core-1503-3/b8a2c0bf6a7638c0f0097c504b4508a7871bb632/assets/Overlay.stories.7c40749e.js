import{s as o,a as e,j as l,r as d}from"./index.27cf8e2c.js";import{c,C as m,d as p}from"./Modal.cd411e52.js";import{k as u}from"./Dialog.module.3ddbe309.js";import"./theme.697fe45e.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.db7766ea.js";import"./useFocusRing.module.6d34efbe.js";import"./OverlayArrow.module.702fa2e9.js";import"./context.module.05e858cb.js";import"./Button.module.a790372c.js";import"./useButton.module.7143ecda.js";import"./Collection.module.8cac716c.js";import"./useTreeState.module.1b648dd8.js";const f=o(c)`
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
