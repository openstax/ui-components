import{s as o,a as e,j as l,r as d}from"./index.007141e8.js";import{c,C as m,d as p}from"./Modal.0329d3d1.js";import{k as u}from"./Dialog.module.8a74b3e6.js";import"./theme.e1533d60.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.012b2a18.js";import"./useFocusRing.module.06540f0a.js";import"./OverlayArrow.module.67080155.js";import"./context.module.a2fa50fb.js";import"./Button.module.6d763fb0.js";import"./useButton.module.fce5d8c1.js";import"./Collection.module.cd5ff569.js";import"./useTreeState.module.e5ccf460.js";const f=o(c)`
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
