import{s as o,a as e,j as l,r as d}from"./index.73d4fe07.js";import{c,C as m,d as p}from"./Modal.631860e0.js";import{k as u}from"./Dialog.module.b99d1c61.js";import"./theme.492f6a78.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.e29ae76d.js";import"./useFocusRing.module.aa02cab0.js";import"./OverlayArrow.module.6b3727d6.js";import"./context.module.e9becb0e.js";import"./Button.module.3f0cc27b.js";import"./useButton.module.8a0b42f3.js";import"./Collection.module.f0bab75e.js";import"./useTreeState.module.6cb84fde.js";const f=o(c)`
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
