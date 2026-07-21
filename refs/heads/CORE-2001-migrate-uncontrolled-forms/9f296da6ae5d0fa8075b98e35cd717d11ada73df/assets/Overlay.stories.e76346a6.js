import{s as o,a as e,j as l,r as d}from"./index.cd07473f.js";import{c,C as m,d as p}from"./Modal.706d8c88.js";import{k as u}from"./Dialog.module.90a33986.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.1217dd1d.js";import"./useFocusRing.module.8cb8ca93.js";import"./OverlayArrow.module.b2ef638e.js";import"./context.module.ef289415.js";import"./Button.module.db34faf6.js";import"./useButton.module.8534f5a0.js";import"./Collection.module.644ffe8a.js";import"./useTreeState.module.902859bd.js";const f=o(c)`
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
