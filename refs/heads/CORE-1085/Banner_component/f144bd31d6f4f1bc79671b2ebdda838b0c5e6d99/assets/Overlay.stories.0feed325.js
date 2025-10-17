import{s as o,a as e,j as l,r as d}from"./index.03d519e8.js";import{c,C as m,d as p}from"./Modal.38129778.js";import{k as u}from"./Dialog.module.2e89f49b.js";import"./theme.26768929.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.551e39f8.js";import"./useFocusRing.module.9993e2ac.js";import"./OverlayArrow.module.185b538e.js";import"./context.module.65e0d974.js";import"./Button.module.f7c982d8.js";import"./useButton.module.4f744438.js";import"./Collection.module.bfe45739.js";import"./useTreeState.module.e213bbd1.js";const f=o(c)`
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
