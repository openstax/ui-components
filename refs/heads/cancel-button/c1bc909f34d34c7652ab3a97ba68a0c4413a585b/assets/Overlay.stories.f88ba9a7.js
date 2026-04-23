import{s as o,a as e,j as l,r as d}from"./index.5ec55e82.js";import{c,C as m,d as p}from"./Modal.954046f0.js";import{k as u}from"./Dialog.module.267028e7.js";import"./theme.a1793be1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.0632e8aa.js";import"./useFocusRing.module.3668c5e0.js";import"./OverlayArrow.module.2fc49ee7.js";import"./context.module.832f8857.js";import"./Button.module.aeffeac0.js";import"./useButton.module.b0e3c08c.js";import"./Collection.module.ae692ec5.js";import"./useTreeState.module.43ecda4b.js";const f=o(c)`
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
