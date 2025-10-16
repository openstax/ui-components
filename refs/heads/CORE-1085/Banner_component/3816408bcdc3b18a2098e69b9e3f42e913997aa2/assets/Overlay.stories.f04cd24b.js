import{s as o,a as e,j as l,r as d}from"./index.18776f80.js";import{c,C as m,d as p}from"./Modal.109ce29e.js";import{k as u}from"./Dialog.module.b9d2567a.js";import"./theme.a62307c5.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.5a848d55.js";import"./useFocusRing.module.147020b3.js";import"./OverlayArrow.module.1f9b8717.js";import"./context.module.1c0a0698.js";import"./Button.module.b1042289.js";import"./useButton.module.5c0bb359.js";import"./Collection.module.db2ca705.js";import"./useTreeState.module.1e4b5db8.js";const f=o(c)`
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
