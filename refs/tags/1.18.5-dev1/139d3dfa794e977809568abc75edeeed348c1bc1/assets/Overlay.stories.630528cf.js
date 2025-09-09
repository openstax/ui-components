import{s as o,a as e,j as l,r as d}from"./index.040b9f37.js";import{d as c,C as m,e as p}from"./Modal.07526aab.js";import{k as u}from"./Dialog.module.4ff72bb4.js";import"./theme.08015d47.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.76e0086d.js";import"./useFocusRing.module.70f6d498.js";import"./OverlayArrow.module.83362056.js";import"./context.module.ac019fcc.js";import"./Button.module.df0878e7.js";import"./useButton.module.ef125a5e.js";import"./Collection.module.e463db19.js";import"./useTreeState.module.42ced00e.js";const f=o(c)`
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
