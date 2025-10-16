import{s as o,a as e,j as l,r as d}from"./index.ebaf06cd.js";import{c,C as m,d as p}from"./Modal.08d209ee.js";import{k as u}from"./Dialog.module.53ae35c8.js";import"./theme.a2ab34a0.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.eedcd6ad.js";import"./useFocusRing.module.78ddc1fa.js";import"./OverlayArrow.module.f2e5990e.js";import"./context.module.a7db674c.js";import"./Button.module.342a93e4.js";import"./useButton.module.4da3d446.js";import"./Collection.module.e657b145.js";import"./useTreeState.module.d0c5f0ca.js";const f=o(c)`
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
