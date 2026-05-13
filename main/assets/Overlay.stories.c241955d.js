import{s as o,a as e,j as l,r as d}from"./index.00a2a56c.js";import{c,C as m,d as p}from"./Modal.246e3aa7.js";import{k as u}from"./Dialog.module.5041756d.js";import"./theme.650dd248.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.6a016c1c.js";import"./useFocusRing.module.cd350b9c.js";import"./OverlayArrow.module.ba8984c2.js";import"./context.module.dbb11ea5.js";import"./Button.module.8a18e10e.js";import"./useButton.module.c1d9099a.js";import"./Collection.module.22d33e8d.js";import"./useTreeState.module.7cff65a3.js";const f=o(c)`
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
