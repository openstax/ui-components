import{s as o,a as e,j as l,r as d}from"./index.eef28c89.js";import{c,C as m,d as p}from"./Modal.8558df55.js";import{k as u}from"./Dialog.module.c5240c3c.js";import"./theme.f6710c2f.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.c65d4927.js";import"./useFocusRing.module.5deef2a0.js";import"./OverlayArrow.module.2878aacd.js";import"./context.module.bcec7b30.js";import"./Button.module.23437f88.js";import"./useButton.module.c5fcf265.js";import"./Collection.module.32e49481.js";import"./useTreeState.module.76c1f9e7.js";const f=o(c)`
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
