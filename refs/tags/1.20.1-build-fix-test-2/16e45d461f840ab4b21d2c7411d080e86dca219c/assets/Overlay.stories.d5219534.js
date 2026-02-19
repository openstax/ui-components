import{s as o,a as e,j as l,r as d}from"./index.db687d6f.js";import{c,C as m,d as p}from"./Modal.15c98bd4.js";import{k as u}from"./Dialog.module.a661df1e.js";import"./theme.f064affc.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.8b1d1629.js";import"./useFocusRing.module.ee096386.js";import"./OverlayArrow.module.c52d9f48.js";import"./context.module.e35bb66b.js";import"./Button.module.dafd91c3.js";import"./useButton.module.0c0690bc.js";import"./Collection.module.f69b7553.js";import"./useTreeState.module.e7c25612.js";const f=o(c)`
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
