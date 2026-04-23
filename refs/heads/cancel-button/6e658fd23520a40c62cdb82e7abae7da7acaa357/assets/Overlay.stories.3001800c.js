import{s as o,a as e,j as l,r as d}from"./index.e1c8d601.js";import{c,C as m,d as p}from"./Modal.4ffd205d.js";import{k as u}from"./Dialog.module.32938e7b.js";import"./theme.d8d45c04.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.6d35ae4a.js";import"./useFocusRing.module.5cb20062.js";import"./OverlayArrow.module.9ccd21cd.js";import"./context.module.a6c381cc.js";import"./Button.module.35838380.js";import"./useButton.module.46381871.js";import"./Collection.module.5ea84c08.js";import"./useTreeState.module.bfb9d1dd.js";const f=o(c)`
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
