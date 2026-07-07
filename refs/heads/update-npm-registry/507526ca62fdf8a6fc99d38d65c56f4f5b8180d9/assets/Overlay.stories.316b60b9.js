import{s as o,a as e,j as l,r as d}from"./index.e722ff33.js";import{c,C as m,d as p}from"./Modal.e3307960.js";import{k as u}from"./Dialog.module.96c355b7.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.9a9d41e6.js";import"./useFocusRing.module.0c83f502.js";import"./OverlayArrow.module.e6f56a1c.js";import"./context.module.bbc0f41f.js";import"./Button.module.743cd07c.js";import"./useButton.module.1eadec84.js";import"./Collection.module.5cad06fb.js";import"./useTreeState.module.d95b9f58.js";const f=o(c)`
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
