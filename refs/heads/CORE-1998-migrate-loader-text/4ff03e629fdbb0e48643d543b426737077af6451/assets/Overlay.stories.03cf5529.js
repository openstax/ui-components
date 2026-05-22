import{s as o,a as e,j as l,r as d}from"./index.d6a31b4c.js";import{c,C as m,d as p}from"./Modal.e2a64461.js";import{k as u}from"./Dialog.module.3fe7708e.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.72f7518a.js";import"./useFocusRing.module.51137961.js";import"./OverlayArrow.module.8c515fc1.js";import"./context.module.e798d41c.js";import"./Button.module.0055a9d4.js";import"./useButton.module.5235f49f.js";import"./Collection.module.2779d59c.js";import"./useTreeState.module.cb170023.js";const f=o(c)`
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
