import{s as o,a as e,j as l,r as d}from"./index.7f66607f.js";import{c,C as m,d as p}from"./Modal.fc1c5055.js";import{k as u}from"./Dialog.module.ae41eb9f.js";import"./theme.2861fddf.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.4b900f04.js";import"./useFocusRing.module.451ef938.js";import"./OverlayArrow.module.f4d0ffb8.js";import"./context.module.05c081c9.js";import"./Button.module.3153aec9.js";import"./useButton.module.c8cba45a.js";import"./Collection.module.2c741660.js";import"./useTreeState.module.8b7022c9.js";const f=o(c)`
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
