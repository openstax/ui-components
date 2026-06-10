import{s as o,a as e,j as l,r as d}from"./index.08db14f5.js";import{c,C as m,d as p}from"./Modal.6223108f.js";import{k as u}from"./Dialog.module.fa8ca7fd.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.72cf1f11.js";import"./useFocusRing.module.35a4203d.js";import"./OverlayArrow.module.a0eee73f.js";import"./context.module.209b2345.js";import"./Button.module.436f5140.js";import"./useButton.module.3a1de91e.js";import"./Collection.module.dbb73945.js";import"./useTreeState.module.32275a25.js";const f=o(c)`
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
