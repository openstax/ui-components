import{s as o,a as e,j as l,r as d}from"./index.16cb692d.js";import{c,C as m,d as p}from"./Modal.d5191754.js";import{k as u}from"./Dialog.module.d55506fc.js";import"./theme.0b073f40.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.e6ad33ce.js";import"./useFocusRing.module.feffa39c.js";import"./OverlayArrow.module.042a0400.js";import"./context.module.3a7e72a4.js";import"./Button.module.a7cedcd1.js";import"./useButton.module.676e1a9a.js";import"./Collection.module.5510ac75.js";import"./useTreeState.module.918b839d.js";const f=o(c)`
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
