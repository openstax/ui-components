import{s as o,a as e,j as l,r as d}from"./index.d59c93d3.js";import{c,C as m,d as p}from"./Modal.fcde1222.js";import{k as u}from"./Dialog.module.f845a4c8.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.614dfdad.js";import"./useFocusRing.module.8fc72c4c.js";import"./OverlayArrow.module.b6d64022.js";import"./context.module.6e03584b.js";import"./Button.module.16b26ae1.js";import"./useButton.module.ce8ca5f5.js";import"./Collection.module.e6e4add9.js";import"./useTreeState.module.ac8b42fe.js";const f=o(c)`
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
