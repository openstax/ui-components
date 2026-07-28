import{s as o,a as e,j as l,r as d}from"./index.66ccc16b.js";import{c,C as m,d as p}from"./Modal.0e309d2c.js";import{k as u}from"./Dialog.module.4823fbe9.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.0e0654e7.js";import"./useFocusRing.module.b925221d.js";import"./OverlayArrow.module.ba08d96b.js";import"./context.module.6b3312c2.js";import"./Button.module.2a86ed5b.js";import"./useButton.module.5b96224e.js";import"./Collection.module.b7589833.js";import"./useTreeState.module.b1dce167.js";const f=o(c)`
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
