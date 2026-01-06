import{s as o,a as e,j as l,r as d}from"./index.122b7736.js";import{c,C as m,d as p}from"./Modal.d02bc932.js";import{k as u}from"./Dialog.module.c11d5596.js";import"./theme.21ddec2f.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.0b93b0c9.js";import"./useFocusRing.module.29723948.js";import"./OverlayArrow.module.f88da5b6.js";import"./context.module.1f1a841a.js";import"./Button.module.f4860166.js";import"./useButton.module.641a53a9.js";import"./Collection.module.2d076068.js";import"./useTreeState.module.cfab5eb8.js";const f=o(c)`
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
