import{s as o,a as e,j as l,r as d}from"./index.a6587f7c.js";import{c,C as m,d as p}from"./Modal.00195859.js";import{k as u}from"./Dialog.module.f0191185.js";import"./theme.ca319df7.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.e2da0385.js";import"./useFocusRing.module.c5cee7f3.js";import"./OverlayArrow.module.2785f5ad.js";import"./context.module.c2f69083.js";import"./Button.module.56993cd9.js";import"./useButton.module.09e2bf19.js";import"./Collection.module.8331ee9c.js";import"./useTreeState.module.535105fa.js";const f=o(c)`
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
