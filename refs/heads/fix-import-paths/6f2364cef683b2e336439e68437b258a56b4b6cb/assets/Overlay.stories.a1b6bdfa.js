import{s as o,a as e,j as l,r as d}from"./index.a9467b83.js";import{c,C as m,d as p}from"./Modal.b3317794.js";import{k as u}from"./Dialog.module.ed94d0af.js";import"./theme.af2d03ac.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.38d10fe0.js";import"./useFocusRing.module.9d8a2ae0.js";import"./OverlayArrow.module.f1d52674.js";import"./context.module.225b5bda.js";import"./Button.module.75356183.js";import"./useButton.module.736605a9.js";import"./Collection.module.9c43b380.js";import"./useTreeState.module.df457e5c.js";const f=o(c)`
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
