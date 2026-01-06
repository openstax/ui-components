import{s as o,a as e,j as l,r as d}from"./index.9f98f890.js";import{c,C as m,d as p}from"./Modal.749818ed.js";import{k as u}from"./Dialog.module.31ed3bb8.js";import"./theme.94c332cc.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.d0a51043.js";import"./useFocusRing.module.d2849c4d.js";import"./OverlayArrow.module.0b63e44b.js";import"./context.module.a4391884.js";import"./Button.module.33575a69.js";import"./useButton.module.ffefb0a4.js";import"./Collection.module.967fc0cb.js";import"./useTreeState.module.4823a5dc.js";const f=o(c)`
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
