import{s as o,a as e,j as l,r as d}from"./index.79120064.js";import{c,C as m,d as p}from"./Modal.30cef1dc.js";import{k as u}from"./Dialog.module.634ed722.js";import"./theme.12ce9f5d.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.df1fb9a7.js";import"./useFocusRing.module.266736a4.js";import"./OverlayArrow.module.1c723dad.js";import"./context.module.6041b98a.js";import"./Button.module.596c860a.js";import"./useButton.module.71c2a333.js";import"./Collection.module.48691819.js";import"./useTreeState.module.ef3f0dc4.js";const f=o(c)`
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
