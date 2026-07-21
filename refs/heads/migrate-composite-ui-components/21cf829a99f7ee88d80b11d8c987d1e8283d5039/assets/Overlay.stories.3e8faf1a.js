import{s as o,a as e,j as l,r as d}from"./index.c39542ce.js";import{c,C as m,d as p}from"./Modal.2328b97a.js";import{k as u}from"./Dialog.module.dda90f0d.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.48b66513.js";import"./useFocusRing.module.4b3c8f38.js";import"./OverlayArrow.module.e2e96f63.js";import"./context.module.af17b1db.js";import"./Button.module.fe43f4a9.js";import"./Hidden.module.e7a81615.js";import"./useButton.module.66943ff5.js";import"./Collection.module.3c4efd74.js";import"./FocusScope.module.0d8894c6.js";import"./useTreeState.module.70f4b335.js";const f=o(c)`
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
