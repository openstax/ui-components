import{s as o,a as e,j as l,r as d}from"./index.edfd0bba.js";import{c,C as m,d as p}from"./Modal.4ef8f930.js";import{k as u}from"./Dialog.module.a436104d.js";import"./theme.ee3d3dc8.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.2ceecd6b.js";import"./useFocusRing.module.aac19547.js";import"./OverlayArrow.module.2250da3e.js";import"./context.module.262c00d0.js";import"./Button.module.7018c3d7.js";import"./useButton.module.712bcdb0.js";import"./Collection.module.ef2b2adf.js";import"./useTreeState.module.ab690db6.js";const f=o(c)`
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
