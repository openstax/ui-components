import{s as o,a as e,j as l,r as d}from"./index.96928e17.js";import{d as c,C as m,e as p}from"./Modal.783a0c0e.js";import{k as u}from"./Dialog.module.f48e7ad0.js";import"./theme.e4769a80.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.0d3dc116.js";import"./useFocusRing.module.c891d4bf.js";import"./OverlayArrow.module.7cdad0c9.js";import"./context.module.e7fa66f3.js";import"./Button.module.211a1013.js";import"./useButton.module.eeaa7f20.js";import"./Collection.module.a6b5330b.js";import"./useTreeState.module.6b46194c.js";const f=o(c)`
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
