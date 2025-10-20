import{s as o,a as e,j as l,r as d}from"./index.54a18bae.js";import{c,C as m,d as p}from"./Modal.0f64dc1f.js";import{k as u}from"./Dialog.module.c6495691.js";import"./theme.fe159d0f.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.e6020649.js";import"./useFocusRing.module.120f0503.js";import"./OverlayArrow.module.c9add2b9.js";import"./context.module.667d7e0e.js";import"./Button.module.075ec6d4.js";import"./useButton.module.a6db1dff.js";import"./Collection.module.0a59f86a.js";import"./useTreeState.module.ab900ca8.js";const f=o(c)`
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
