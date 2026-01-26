import{s as o,a as e,j as l,r as d}from"./index.51d91d8e.js";import{c,C as m,d as p}from"./Modal.4a4b5dbb.js";import{k as u}from"./Dialog.module.7965be0c.js";import"./theme.93d2d472.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.3d9f12d6.js";import"./useFocusRing.module.9f1e7692.js";import"./OverlayArrow.module.8e0d79ff.js";import"./context.module.ece2d1fe.js";import"./Button.module.e9f9d388.js";import"./useButton.module.f793ca07.js";import"./Collection.module.77e4d2b4.js";import"./useTreeState.module.57124f4b.js";const f=o(c)`
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
