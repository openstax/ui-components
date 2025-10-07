import{s as o,a as e,j as l,r as d}from"./index.d9ca2166.js";import{c,C as m,d as p}from"./Modal.7bb588b1.js";import{k as u}from"./Dialog.module.c779cd5f.js";import"./theme.3edf69de.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.17db04f3.js";import"./useFocusRing.module.f46e2d00.js";import"./OverlayArrow.module.f66310ff.js";import"./context.module.9c666556.js";import"./Button.module.5b17e375.js";import"./useButton.module.3a89c2ab.js";import"./Collection.module.ee56f82b.js";import"./useTreeState.module.12d69c8b.js";const f=o(c)`
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
