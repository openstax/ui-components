import{s as o,a as e,j as l,r as d}from"./index.3bef755b.js";import{c,C as m,d as p}from"./Modal.703f39ac.js";import{k as u}from"./Dialog.module.df01f4f8.js";import"./theme.ff2e73a0.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.f288380e.js";import"./useFocusRing.module.d6a99936.js";import"./OverlayArrow.module.ef2e3e69.js";import"./context.module.49a97fc8.js";import"./Button.module.4bba30da.js";import"./useButton.module.37113c8d.js";import"./Collection.module.204264fd.js";import"./useTreeState.module.68c64420.js";const f=o(c)`
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
