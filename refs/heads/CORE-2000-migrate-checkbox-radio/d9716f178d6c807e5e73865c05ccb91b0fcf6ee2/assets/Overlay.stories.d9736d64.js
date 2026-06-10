import{s as o,a as e,j as l,r as d}from"./index.8f986b2f.js";import{c,C as m,d as p}from"./Modal.5d6cb60f.js";import{k as u}from"./Dialog.module.00b85346.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.0d3d06ff.js";import"./useFocusRing.module.a054ee84.js";import"./OverlayArrow.module.4ccfd03e.js";import"./context.module.ccea0fe2.js";import"./Button.module.c1a6c698.js";import"./useButton.module.4bb95ae5.js";import"./Collection.module.96d5fdab.js";import"./useTreeState.module.629867cf.js";const f=o(c)`
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
