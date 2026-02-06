import{s as o,a as e,j as l,r as d}from"./index.78285902.js";import{c,C as m,d as p}from"./Modal.c28ad946.js";import{k as u}from"./Dialog.module.2a46b036.js";import"./theme.d8535946.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.6b7f771c.js";import"./useFocusRing.module.17274fc5.js";import"./OverlayArrow.module.6e2792af.js";import"./context.module.81474cbb.js";import"./Button.module.17dbe4b1.js";import"./useButton.module.71eade0f.js";import"./Collection.module.87f5deae.js";import"./useTreeState.module.2cb129b0.js";const f=o(c)`
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
