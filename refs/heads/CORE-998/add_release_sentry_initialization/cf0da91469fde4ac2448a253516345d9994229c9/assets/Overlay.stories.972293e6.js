import{s as o,a as e,j as l,r as d}from"./index.adf085fa.js";import{d as c,C as m,e as p}from"./Modal.04903467.js";import{k as u}from"./Dialog.module.8134fdd4.js";import"./theme.608fa8d7.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.6c365d5d.js";import"./useFocusRing.module.55fcfc9f.js";import"./OverlayArrow.module.b937a485.js";import"./context.module.5e648b33.js";import"./Button.module.7614afc9.js";import"./useButton.module.e4b5f1aa.js";import"./Collection.module.7f76eda9.js";import"./useTreeState.module.09b19695.js";const f=o(c)`
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
