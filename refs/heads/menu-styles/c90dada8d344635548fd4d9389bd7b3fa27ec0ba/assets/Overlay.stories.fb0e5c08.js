import{s as o,a as e,j as l,r as d}from"./index.c8bb93d4.js";import{c,C as m,d as p}from"./Modal.11a0e4df.js";import{k as u}from"./Dialog.module.430b6821.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.48c88ade.js";import"./useFocusRing.module.df7f34f6.js";import"./OverlayArrow.module.6c96e9e1.js";import"./context.module.8568ac81.js";import"./Button.module.dbae6a4d.js";import"./useButton.module.c5c46847.js";import"./Collection.module.9368b86d.js";import"./useTreeState.module.bea5e242.js";const f=o(c)`
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
