import{s as o,a as e,j as l,r as d}from"./index.4c7c9e65.js";import{c,C as m,d as p}from"./Modal.95801351.js";import{k as u}from"./Dialog.module.63896734.js";import"./theme.87efd615.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.fadbb040.js";import"./useFocusRing.module.3bafb37c.js";import"./OverlayArrow.module.c429c505.js";import"./context.module.11e486e1.js";import"./Button.module.2cafa3c8.js";import"./useButton.module.2b22df95.js";import"./Collection.module.63b5061f.js";import"./useTreeState.module.62b35410.js";const f=o(c)`
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
