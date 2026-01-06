import{s as o,a as e,j as l,r as d}from"./index.d72593e4.js";import{c,C as m,d as p}from"./Modal.49886455.js";import{k as u}from"./Dialog.module.89e988d4.js";import"./theme.1a6b3730.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.e4ccea41.js";import"./useFocusRing.module.beacb981.js";import"./OverlayArrow.module.6089414e.js";import"./context.module.725f905a.js";import"./Button.module.cedd04d0.js";import"./useButton.module.6e359bc9.js";import"./Collection.module.c94e60aa.js";import"./useTreeState.module.c99a89c1.js";const f=o(c)`
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
