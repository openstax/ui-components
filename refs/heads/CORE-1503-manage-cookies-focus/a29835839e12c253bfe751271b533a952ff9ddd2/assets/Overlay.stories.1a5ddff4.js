import{s as o,a as e,j as l,r as d}from"./index.810f4178.js";import{c,C as m,d as p}from"./Modal.3714068b.js";import{k as u}from"./Dialog.module.54400930.js";import"./theme.a2601d66.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.8db65047.js";import"./useFocusRing.module.001182d4.js";import"./OverlayArrow.module.9e795c68.js";import"./context.module.2d15cc5f.js";import"./Button.module.cd5e3342.js";import"./useButton.module.1786df5e.js";import"./Collection.module.f1efd80d.js";import"./useTreeState.module.a6adb69a.js";const f=o(c)`
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
