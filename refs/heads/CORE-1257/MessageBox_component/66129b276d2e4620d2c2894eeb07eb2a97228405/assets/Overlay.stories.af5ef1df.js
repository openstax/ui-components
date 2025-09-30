import{s as o,a as e,j as l,r as d}from"./index.417789e7.js";import{c,C as m,d as p}from"./Modal.30eb40e3.js";import{k as u}from"./Dialog.module.36a7127d.js";import"./theme.11dcc8ad.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.1d656dce.js";import"./useFocusRing.module.1247a38a.js";import"./OverlayArrow.module.1a65dd6d.js";import"./context.module.5c58119b.js";import"./Button.module.b8257a02.js";import"./useButton.module.e39520c6.js";import"./Collection.module.8e53a26d.js";import"./useTreeState.module.4433be84.js";const f=o(c)`
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
