import{s as o,a as e,j as l,r as d}from"./index.863dff2c.js";import{c,C as m,d as p}from"./Modal.7b1eb3a2.js";import{k as u}from"./Dialog.module.93fa67c7.js";import"./theme.c3e714e8.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.75a52eb1.js";import"./useFocusRing.module.ad42d1ce.js";import"./OverlayArrow.module.b0d5f3a3.js";import"./context.module.ddc5fa6e.js";import"./Button.module.40ea32b2.js";import"./useButton.module.06c56ab7.js";import"./Collection.module.bd06d785.js";import"./useTreeState.module.25de5bfa.js";const f=o(c)`
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
