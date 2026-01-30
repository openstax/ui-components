import{s as o,a as e,j as l,r as d}from"./index.215f4b9b.js";import{c,C as m,d as p}from"./Modal.10fdba0e.js";import{k as u}from"./Dialog.module.a4002fc9.js";import"./theme.e0760cd3.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.a5b3140e.js";import"./useFocusRing.module.eed8ff9e.js";import"./OverlayArrow.module.669c62f1.js";import"./context.module.3310220a.js";import"./Button.module.794d297c.js";import"./useButton.module.257c7807.js";import"./Collection.module.b454aee2.js";import"./useTreeState.module.87f6d584.js";const f=o(c)`
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
