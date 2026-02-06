import{s as o,a as e,j as l,r as d}from"./index.c221f3cc.js";import{c,C as m,d as p}from"./Modal.8babb382.js";import{k as u}from"./Dialog.module.c75fbcab.js";import"./theme.9307ba9a.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.4d23e0f1.js";import"./useFocusRing.module.9dd2cfd7.js";import"./OverlayArrow.module.720288cc.js";import"./context.module.757ba2d6.js";import"./Button.module.6cab6406.js";import"./useButton.module.cb65f455.js";import"./Collection.module.1d489323.js";import"./useTreeState.module.7858e1bf.js";const f=o(c)`
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
