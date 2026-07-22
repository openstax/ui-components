import{s as o,a as e,j as l,r as d}from"./index.d6ddf68c.js";import{c,C as m,d as p}from"./Modal.ec5be430.js";import{k as u}from"./Dialog.module.2f6304e8.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.c74ed86a.js";import"./useFocusRing.module.d588cc5f.js";import"./OverlayArrow.module.fcdaa5ba.js";import"./context.module.d8eed0d3.js";import"./Button.module.8de35bcb.js";import"./Hidden.module.a9639160.js";import"./useButton.module.df7ed860.js";import"./Collection.module.d8b0e7fe.js";import"./FocusScope.module.5f6549b0.js";import"./useTreeState.module.536c3d4e.js";const f=o(c)`
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
