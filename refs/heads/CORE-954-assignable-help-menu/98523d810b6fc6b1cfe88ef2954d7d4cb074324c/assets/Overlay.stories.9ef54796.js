import{s as o,a as e,j as l,r as d}from"./index.5c74dffd.js";import{d as c,C as m,e as p}from"./Modal.b6f334ae.js";import{k as u}from"./Dialog.module.17b2592e.js";import"./theme.41418f80.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.daaf5062.js";import"./useFocusRing.module.e3a9d4d9.js";import"./OverlayArrow.module.f7d352e5.js";import"./context.module.c4073eef.js";import"./Button.module.9b9b5188.js";import"./useButton.module.d6d66488.js";import"./Collection.module.667421e7.js";import"./useTreeState.module.089f3c30.js";const f=o(c)`
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
