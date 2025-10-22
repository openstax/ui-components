import{s as o,a as e,j as l,r as d}from"./index.cbfa8774.js";import{c,C as m,d as p}from"./Modal.c8faa613.js";import{k as u}from"./Dialog.module.58eeab95.js";import"./theme.4163cde7.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.4782fcc2.js";import"./useFocusRing.module.e3564eb8.js";import"./OverlayArrow.module.6ec7fd9b.js";import"./context.module.88bcfb75.js";import"./Button.module.0081712b.js";import"./useButton.module.bddd2370.js";import"./Collection.module.cd318cf7.js";import"./useTreeState.module.15ca9757.js";const f=o(c)`
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
