import{s as o,a as e,j as l,r as d}from"./index.426d7292.js";import{c,C as m,d as p}from"./Modal.40675156.js";import{k as u}from"./Dialog.module.c790fcdc.js";import"./theme.3d086095.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.d9ef0583.js";import"./useFocusRing.module.52097e1d.js";import"./OverlayArrow.module.73b017f2.js";import"./context.module.0b5e77e5.js";import"./Button.module.ab9607a1.js";import"./useButton.module.85c724bf.js";import"./Collection.module.08b4d4ce.js";import"./useTreeState.module.ccea3147.js";const f=o(c)`
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
