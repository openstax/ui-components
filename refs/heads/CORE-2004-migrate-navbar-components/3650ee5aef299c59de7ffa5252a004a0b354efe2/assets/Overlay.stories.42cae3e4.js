import{s as o,a as e,j as l,r as d}from"./index.de4c684f.js";import{c,C as m,d as p}from"./Modal.13b982fa.js";import{k as u}from"./Dialog.module.8e2ac179.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.e1eac4ba.js";import"./useFocusRing.module.793feb7b.js";import"./OverlayArrow.module.f84e0f28.js";import"./context.module.721291c8.js";import"./Button.module.bbd077bb.js";import"./useButton.module.0710a66e.js";import"./Collection.module.d7de0499.js";import"./useTreeState.module.7ef814af.js";const f=o(c)`
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
