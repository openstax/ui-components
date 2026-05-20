import{s as o,a as e,j as l,r as d}from"./index.66ada5b7.js";import{c,C as m,d as p}from"./Modal.a7849617.js";import{k as u}from"./Dialog.module.5707682a.js";import"./theme.3f59fdbf.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.5f439955.js";import"./useFocusRing.module.ee0fb11a.js";import"./OverlayArrow.module.e605da1d.js";import"./context.module.e0e5ad0c.js";import"./Button.module.f55ee80f.js";import"./useButton.module.34620dbb.js";import"./Collection.module.e185f506.js";import"./useTreeState.module.800dd290.js";const f=o(c)`
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
