import{s as o,a as e,j as l,r as d}from"./index.02056440.js";import{d as c,C as m,e as p}from"./Modal.4cfae694.js";import{k as u}from"./Dialog.module.d287c00a.js";import"./theme.8ae5fa1c.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.dd2a1e76.js";import"./useFocusRing.module.6cc71912.js";import"./OverlayArrow.module.7639f1de.js";import"./context.module.8659e4bd.js";import"./Button.module.d5b0a6c5.js";import"./useButton.module.7e3b4491.js";import"./Collection.module.16848228.js";import"./useTreeState.module.f91652dc.js";const f=o(c)`
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
