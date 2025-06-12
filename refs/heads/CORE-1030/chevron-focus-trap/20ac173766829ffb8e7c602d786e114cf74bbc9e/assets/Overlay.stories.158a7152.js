import{s as o,a as e,j as l,r as d}from"./index.0868e1f8.js";import{d as c,C as m,e as p}from"./Modal.e059c736.js";import{k as u}from"./Dialog.module.648a2d09.js";import"./theme.e53cbf2f.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.ecebf322.js";import"./useFocusRing.module.b3ec30c8.js";import"./OverlayArrow.module.a8a3d0d7.js";import"./context.module.8d47dd9d.js";import"./Button.module.194ef162.js";import"./useButton.module.dc3d1d5f.js";import"./Collection.module.4f374c18.js";import"./useTreeState.module.86e5bcce.js";const f=o(c)`
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
