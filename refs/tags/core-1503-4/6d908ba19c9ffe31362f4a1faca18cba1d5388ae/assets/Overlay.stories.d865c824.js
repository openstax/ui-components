import{s as o,a as e,j as l,r as d}from"./index.867606f6.js";import{c,C as m,d as p}from"./Modal.ff37cfda.js";import{k as u}from"./Dialog.module.00a6ea67.js";import"./theme.d71eb643.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.34a1fc39.js";import"./useFocusRing.module.a853279f.js";import"./OverlayArrow.module.da1cd654.js";import"./context.module.73ebd558.js";import"./Button.module.ddb5f1ec.js";import"./useButton.module.0364b7a9.js";import"./Collection.module.4ca3a1dc.js";import"./useTreeState.module.4f200b20.js";const f=o(c)`
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
