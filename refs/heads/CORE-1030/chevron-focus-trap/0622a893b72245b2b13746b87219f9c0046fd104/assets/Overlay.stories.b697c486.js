import{s as o,a as e,j as l,r as d}from"./index.2d4485a1.js";import{d as c,C as m,e as p}from"./Modal.8e91ae77.js";import{k as u}from"./Dialog.module.0522cde4.js";import"./theme.7ac48908.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.fa273d49.js";import"./useFocusRing.module.08386828.js";import"./OverlayArrow.module.070cd530.js";import"./context.module.e2b11994.js";import"./Button.module.71bfa7bb.js";import"./useButton.module.1ada284a.js";import"./Collection.module.6f250d03.js";import"./useTreeState.module.6254506b.js";const f=o(c)`
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
