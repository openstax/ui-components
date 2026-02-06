import{s as o,a as e,j as l,r as d}from"./index.7f352088.js";import{c,C as m,d as p}from"./Modal.4aa514bc.js";import{k as u}from"./Dialog.module.be6fd27e.js";import"./theme.cc28a4ee.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.36a16ae1.js";import"./useFocusRing.module.036f809c.js";import"./OverlayArrow.module.5bf4d33b.js";import"./context.module.d43e93cd.js";import"./Button.module.c825950a.js";import"./useButton.module.816184ba.js";import"./Collection.module.c90c77f9.js";import"./useTreeState.module.fbebae8a.js";const f=o(c)`
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
