import{s as o,a as e,j as l,r as d}from"./index.a63550aa.js";import{c,C as m,d as p}from"./Modal.70996bce.js";import{k as u}from"./Dialog.module.8a186577.js";import"./theme.1e4478e4.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.034026fb.js";import"./useFocusRing.module.881429e7.js";import"./OverlayArrow.module.8bf8529e.js";import"./context.module.0bb6a1e8.js";import"./Button.module.a671eea7.js";import"./useButton.module.0be7faa5.js";import"./Collection.module.c782fc67.js";import"./useTreeState.module.fe0f6bc8.js";const f=o(c)`
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
