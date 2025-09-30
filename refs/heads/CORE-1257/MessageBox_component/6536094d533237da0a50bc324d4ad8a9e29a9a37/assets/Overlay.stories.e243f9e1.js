import{s as o,a as e,j as l,r as d}from"./index.86b5046c.js";import{c,C as m,d as p}from"./Modal.f030376b.js";import{k as u}from"./Dialog.module.aa9aadd6.js";import"./theme.1c05b18b.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.bd3fdc22.js";import"./useFocusRing.module.461411b9.js";import"./OverlayArrow.module.9483e51a.js";import"./context.module.08071df4.js";import"./Button.module.b1ab226b.js";import"./useButton.module.85de3ebf.js";import"./Collection.module.f3ee9153.js";import"./useTreeState.module.e336fd01.js";const f=o(c)`
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
