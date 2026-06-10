import{s as o,a as e,j as l,r as d}from"./index.50f6533e.js";import{c,C as m,d as p}from"./Modal.b9d22e3a.js";import{k as u}from"./Dialog.module.2aad0f92.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.6da70c1d.js";import"./useFocusRing.module.7d1a665f.js";import"./OverlayArrow.module.7b9de665.js";import"./context.module.e6a5f215.js";import"./Button.module.82123d86.js";import"./useButton.module.03bfdee7.js";import"./Collection.module.d61f37e9.js";import"./useTreeState.module.906fc833.js";const f=o(c)`
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
