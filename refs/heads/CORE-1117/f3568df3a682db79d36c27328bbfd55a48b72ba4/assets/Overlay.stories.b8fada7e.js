import{s as o,a as e,j as l,r as d}from"./index.ce0241c7.js";import{d as c,C as m,e as p}from"./Modal.97cd59a5.js";import{k as u}from"./Dialog.module.16df3a2e.js";import"./theme.d797b6bd.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.3ed3332e.js";import"./useFocusRing.module.1ae2676e.js";import"./OverlayArrow.module.b9376811.js";import"./context.module.bc4f193c.js";import"./Button.module.c59fa80d.js";import"./useButton.module.bac1c261.js";import"./Collection.module.94fac5a9.js";import"./useTreeState.module.f56218f3.js";const f=o(c)`
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
