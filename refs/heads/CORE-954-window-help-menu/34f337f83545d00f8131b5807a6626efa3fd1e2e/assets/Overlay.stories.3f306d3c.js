import{s as o,a as e,j as l,r as d}from"./index.58c9c329.js";import{c,C as m,d as p}from"./Modal.9c0569d8.js";import{k as u}from"./Dialog.module.a81f6ae3.js";import"./theme.3cc92f89.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.d2358fcf.js";import"./useFocusRing.module.91db6f55.js";import"./OverlayArrow.module.d1b7e799.js";import"./context.module.08c53a8b.js";import"./Button.module.552fb8ad.js";import"./useButton.module.78a22f29.js";import"./Collection.module.5ccca091.js";import"./useTreeState.module.810af67d.js";const f=o(c)`
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
