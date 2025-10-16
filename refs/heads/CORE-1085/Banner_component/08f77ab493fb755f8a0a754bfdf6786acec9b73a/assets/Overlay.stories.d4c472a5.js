import{s as o,a as e,j as l,r as d}from"./index.952a20c3.js";import{c,C as m,d as p}from"./Modal.19cc5216.js";import{k as u}from"./Dialog.module.6c045f02.js";import"./theme.ecc09727.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.21510114.js";import"./useFocusRing.module.ef43c21e.js";import"./OverlayArrow.module.cfcd711d.js";import"./context.module.dd9492c8.js";import"./Button.module.c1508317.js";import"./useButton.module.b3a2ab02.js";import"./Collection.module.8984c4d7.js";import"./useTreeState.module.865ea0b6.js";const f=o(c)`
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
