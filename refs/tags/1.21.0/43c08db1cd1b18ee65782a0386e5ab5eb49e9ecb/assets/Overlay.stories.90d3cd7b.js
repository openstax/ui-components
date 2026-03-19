import{s as o,a as e,j as l,r as d}from"./index.5d25bf12.js";import{c,C as m,d as p}from"./Modal.4cc06d63.js";import{k as u}from"./Dialog.module.553f5572.js";import"./theme.7d07f9a5.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.705227a4.js";import"./useFocusRing.module.478b4960.js";import"./OverlayArrow.module.c5ca3d0b.js";import"./context.module.4fa2fb87.js";import"./Button.module.2873a5d7.js";import"./useButton.module.6fca81ff.js";import"./Collection.module.3500dfb2.js";import"./useTreeState.module.5d638cea.js";const f=o(c)`
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
