import{s as o,a as e,j as l,r as d}from"./index.c3a91293.js";import{c,C as m,d as p}from"./Modal.5c945d32.js";import{k as u}from"./Dialog.module.cae03410.js";import"./theme.aa99a804.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.53e831c7.js";import"./useFocusRing.module.18dd7f0d.js";import"./OverlayArrow.module.700db967.js";import"./context.module.11a16827.js";import"./Button.module.3136aebb.js";import"./useButton.module.6133a619.js";import"./Collection.module.ac348216.js";import"./useTreeState.module.1ab62f46.js";const f=o(c)`
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
