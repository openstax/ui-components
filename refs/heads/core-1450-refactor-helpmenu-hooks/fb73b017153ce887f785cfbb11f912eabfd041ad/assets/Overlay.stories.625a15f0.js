import{s as o,a as e,j as l,r as d}from"./index.07c1b2d6.js";import{c,C as m,d as p}from"./Modal.c7176b6e.js";import{k as u}from"./Dialog.module.2f6cb2cd.js";import"./theme.8995dcdf.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.a686395c.js";import"./useFocusRing.module.9b8da44b.js";import"./OverlayArrow.module.854f284e.js";import"./context.module.ccb9c1c7.js";import"./Button.module.e419248b.js";import"./useButton.module.325ded3d.js";import"./Collection.module.81e6c8a2.js";import"./useTreeState.module.21b11768.js";const f=o(c)`
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
