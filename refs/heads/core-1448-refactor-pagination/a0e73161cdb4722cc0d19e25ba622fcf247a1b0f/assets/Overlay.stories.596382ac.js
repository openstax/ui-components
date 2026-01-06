import{s as o,a as e,j as l,r as d}from"./index.97ecd76e.js";import{c,C as m,d as p}from"./Modal.38913bf1.js";import{k as u}from"./Dialog.module.48c173de.js";import"./theme.77988faf.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.bb06af6d.js";import"./useFocusRing.module.e0fe8a29.js";import"./OverlayArrow.module.2fa7a07c.js";import"./context.module.c932fb5c.js";import"./Button.module.28087eeb.js";import"./useButton.module.39ab81c2.js";import"./Collection.module.456bed97.js";import"./useTreeState.module.a7faae97.js";const f=o(c)`
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
