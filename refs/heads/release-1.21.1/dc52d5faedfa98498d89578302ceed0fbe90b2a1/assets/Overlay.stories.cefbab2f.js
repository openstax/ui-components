import{s as o,a as e,j as l,r as d}from"./index.de69091e.js";import{c,C as m,d as p}from"./Modal.03c9ef21.js";import{k as u}from"./Dialog.module.23e2fdfb.js";import"./theme.5b2c2782.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.b727607b.js";import"./useFocusRing.module.6e8ec749.js";import"./OverlayArrow.module.77053d8a.js";import"./context.module.d5d915c4.js";import"./Button.module.549569e5.js";import"./useButton.module.950efd50.js";import"./Collection.module.b92de956.js";import"./useTreeState.module.97f0405f.js";const f=o(c)`
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
