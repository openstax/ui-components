import{s as o,a as e,j as l,r as d}from"./index.90f9d8bf.js";import{d as c,C as m,e as p}from"./Modal.bc29b800.js";import{k as u}from"./Dialog.module.1af701d4.js";import"./theme.f8c52f16.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.9c9fb692.js";import"./useFocusRing.module.920c953f.js";import"./OverlayArrow.module.8a40d5a3.js";import"./context.module.ac2691c3.js";import"./Button.module.7f0229a9.js";import"./useButton.module.d342bb85.js";import"./Collection.module.6dd2f59d.js";import"./useTreeState.module.3ebe64e5.js";const f=o(c)`
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
