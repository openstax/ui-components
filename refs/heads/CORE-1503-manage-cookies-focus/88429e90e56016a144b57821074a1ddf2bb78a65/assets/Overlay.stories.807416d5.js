import{s as o,a as e,j as l,r as d}from"./index.01199e2f.js";import{c,C as m,d as p}from"./Modal.05934206.js";import{k as u}from"./Dialog.module.61d48652.js";import"./theme.c39df871.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.b13a40a6.js";import"./useFocusRing.module.24f6b4cd.js";import"./OverlayArrow.module.51235ac1.js";import"./context.module.341aec33.js";import"./Button.module.e68ad4d8.js";import"./useButton.module.c9635ead.js";import"./Collection.module.02006903.js";import"./useTreeState.module.bacabc73.js";const f=o(c)`
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
