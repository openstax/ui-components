import{s as o,a as e,j as l,r as d}from"./index.5571ca31.js";import{c,C as m,d as p}from"./Modal.2aa72cc3.js";import{k as u}from"./Dialog.module.0fbbf6c7.js";import"./theme.e119d586.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.1a32effc.js";import"./useFocusRing.module.8840545a.js";import"./OverlayArrow.module.96c506f1.js";import"./context.module.33c2349f.js";import"./Button.module.8c9b331d.js";import"./useButton.module.065546c3.js";import"./Collection.module.18f09fb6.js";import"./useTreeState.module.1c374dfb.js";const f=o(c)`
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
