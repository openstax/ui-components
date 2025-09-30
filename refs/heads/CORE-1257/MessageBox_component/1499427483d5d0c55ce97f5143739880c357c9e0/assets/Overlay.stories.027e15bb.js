import{s as o,a as e,j as l,r as d}from"./index.fe78f6c2.js";import{c,C as m,d as p}from"./Modal.2efebda0.js";import{k as u}from"./Dialog.module.4bb7a9b9.js";import"./theme.e8feacdb.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.15f4d8d9.js";import"./useFocusRing.module.7cd19e02.js";import"./OverlayArrow.module.0b0bde23.js";import"./context.module.fde96bd9.js";import"./Button.module.faf48828.js";import"./useButton.module.8b4bd82a.js";import"./Collection.module.8e1bbb65.js";import"./useTreeState.module.0efba4af.js";const f=o(c)`
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
