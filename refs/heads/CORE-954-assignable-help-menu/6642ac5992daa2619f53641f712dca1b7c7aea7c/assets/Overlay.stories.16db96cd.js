import{s as o,a as e,j as l,r as d}from"./index.1d4fd22b.js";import{d as c,C as m,e as p}from"./Modal.4f3670de.js";import{k as u}from"./Dialog.module.0e2b3e04.js";import"./theme.f2f944c8.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.34b5cc5e.js";import"./useFocusRing.module.65829788.js";import"./OverlayArrow.module.8bf8c2fa.js";import"./context.module.6adf29b8.js";import"./Button.module.96ab0b3b.js";import"./useButton.module.6442461d.js";import"./Collection.module.462be43a.js";import"./useTreeState.module.5c658aaa.js";const f=o(c)`
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
