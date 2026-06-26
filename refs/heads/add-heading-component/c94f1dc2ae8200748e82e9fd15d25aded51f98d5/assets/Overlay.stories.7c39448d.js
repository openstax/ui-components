import{s as o,a as e,j as l,r as d}from"./index.ff576309.js";import{c,C as m,d as p}from"./Modal.29563d5d.js";import{k as u}from"./Dialog.module.5deb2c3d.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.9e30cb84.js";import"./useFocusRing.module.c80986a4.js";import"./OverlayArrow.module.baf29b15.js";import"./context.module.3791cb9b.js";import"./Button.module.98482c48.js";import"./useButton.module.23007894.js";import"./Collection.module.673833a5.js";import"./useTreeState.module.2773fb94.js";const f=o(c)`
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
