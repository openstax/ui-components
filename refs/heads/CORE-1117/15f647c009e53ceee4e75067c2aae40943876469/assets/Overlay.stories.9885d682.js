import{s as o,a as e,j as l,r as d}from"./index.4b36b55f.js";import{d as c,C as m,e as p}from"./Modal.dbec5b18.js";import{k as u}from"./Dialog.module.0aa07a46.js";import"./theme.d87ac4c6.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.2dcb5340.js";import"./useFocusRing.module.6aba7ad5.js";import"./OverlayArrow.module.364ad344.js";import"./context.module.2a97766e.js";import"./Button.module.63b55d3e.js";import"./useButton.module.5bf66407.js";import"./Collection.module.e17edbfe.js";import"./useTreeState.module.c17c99f7.js";const f=o(c)`
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
