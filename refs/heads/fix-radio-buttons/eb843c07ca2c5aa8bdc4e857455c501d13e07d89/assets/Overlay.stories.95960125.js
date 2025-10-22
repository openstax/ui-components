import{s as o,a as e,j as l,r as d}from"./index.d239ade3.js";import{d as c,C as m,e as p}from"./Modal.b7bf6919.js";import{k as u}from"./Dialog.module.d83d3c40.js";import"./theme.c713de35.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.c46a0287.js";import"./useFocusRing.module.851ea9a1.js";import"./OverlayArrow.module.0f2f3170.js";import"./context.module.a3f0af25.js";import"./Button.module.611b3131.js";import"./useButton.module.b4155631.js";import"./Collection.module.d103679a.js";import"./useTreeState.module.5081f0ab.js";const f=o(c)`
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
