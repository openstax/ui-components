import{s as o,a as e,j as l,r as d}from"./index.217a48c1.js";import{d as c,C as m,e as p}from"./Modal.411a0f08.js";import{k as u}from"./Dialog.module.66bb6fb2.js";import"./theme.6297c26f.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.a5fd6f11.js";import"./useFocusRing.module.b2c208cb.js";import"./OverlayArrow.module.5e4f85f0.js";import"./context.module.31ef14dc.js";import"./Button.module.22a3591b.js";import"./useButton.module.06b6687c.js";import"./Collection.module.0638ad8f.js";import"./useTreeState.module.b16f96ea.js";const f=o(c)`
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
