import{s as o,a as e,j as l,r as d}from"./index.6f835c86.js";import{c,C as m,d as p}from"./Modal.7a5c0cc9.js";import{k as u}from"./Dialog.module.f81f10ae.js";import"./theme.70751264.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.44e38d43.js";import"./useFocusRing.module.96ff117b.js";import"./OverlayArrow.module.a51e2a16.js";import"./context.module.c1f58a16.js";import"./Button.module.d5960e02.js";import"./useButton.module.0a488349.js";import"./Collection.module.fa499ba0.js";import"./useTreeState.module.ad1577f1.js";const f=o(c)`
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
