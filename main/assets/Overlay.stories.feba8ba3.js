import{s as o,a as e,j as l,r as d}from"./index.e65b35b3.js";import{d as c,C as m,e as p}from"./Modal.814fff89.js";import{k as u}from"./Dialog.module.3f6bc8ac.js";import"./theme.5b878526.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.a93e6b97.js";import"./useFocusRing.module.c590aaf8.js";import"./OverlayArrow.module.046828a0.js";import"./context.module.fdd51b68.js";import"./Button.module.f8b2332b.js";import"./useButton.module.ca25e792.js";import"./Collection.module.f1b03b92.js";import"./useTreeState.module.8429c1a1.js";const f=o(c)`
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
