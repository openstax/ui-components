import{s as o,a as e,j as l,r as d}from"./index.d7c45636.js";import{c,C as m,d as p}from"./Modal.435bbd3b.js";import{k as u}from"./Dialog.module.105e8a52.js";import"./theme.83f6fe53.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.c6146286.js";import"./useFocusRing.module.78f817ac.js";import"./OverlayArrow.module.868fb81d.js";import"./context.module.7ddc1581.js";import"./Button.module.071aad07.js";import"./useButton.module.3d51d69d.js";import"./Collection.module.f4014de3.js";import"./useTreeState.module.ef6dab0c.js";const f=o(c)`
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
