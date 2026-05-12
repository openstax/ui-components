import{s as o,a as e,j as l,r as d}from"./index.fb5a3664.js";import{c,C as m,d as p}from"./Modal.c048e2cf.js";import{k as u}from"./Dialog.module.cf71b410.js";import"./theme.ec49cf02.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.4fcca34e.js";import"./useFocusRing.module.220ce024.js";import"./OverlayArrow.module.7dfb772d.js";import"./context.module.3e6f6c3a.js";import"./Button.module.495b8627.js";import"./useButton.module.f61d153a.js";import"./Collection.module.ea81f6b9.js";import"./useTreeState.module.cab278f9.js";const f=o(c)`
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
