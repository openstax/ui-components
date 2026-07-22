import{s as o,a as e,j as l,r as d}from"./index.f7108b46.js";import{c,C as m,d as p}from"./Modal.ce884071.js";import{k as u}from"./Dialog.module.8ab26bbb.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.d3b0d489.js";import"./useFocusRing.module.cfe0e68a.js";import"./OverlayArrow.module.c7cb388b.js";import"./context.module.753a63d7.js";import"./Button.module.dbd42776.js";import"./Hidden.module.8d1cc264.js";import"./useButton.module.8ff6a8a6.js";import"./Collection.module.c4b8817c.js";import"./FocusScope.module.9cc0c290.js";import"./useTreeState.module.d06ff0d5.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:i,show:n,...s})=>n?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:i})]})}):null,A=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{A as Default};
