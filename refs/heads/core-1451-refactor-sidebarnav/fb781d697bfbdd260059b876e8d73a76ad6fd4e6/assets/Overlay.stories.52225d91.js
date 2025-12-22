import{s as o,a as e,j as l,r as d}from"./index.e30e1bf8.js";import{c,C as m,d as p}from"./Modal.5f384061.js";import{k as u}from"./Dialog.module.ad1ecdd2.js";import"./theme.c41f28b7.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.a79332fa.js";import"./useFocusRing.module.6894b1ca.js";import"./OverlayArrow.module.08cc89a8.js";import"./context.module.f6278275.js";import"./Button.module.967d94d5.js";import"./useButton.module.559d36a4.js";import"./Collection.module.bcf3c0d1.js";import"./useTreeState.module.6518c18c.js";const f=o(c)`
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
