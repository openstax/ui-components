import{s as o,j as e,a as l,r as d}from"./index-94c190e1.js";import{c,C as m,d as p}from"./Modal-1f76c9f9.js";import{d as u}from"./Dialog-bc0fba59.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-bed8e118.js";import"./useFocusRing-49e0b8e3.js";import"./OverlayArrow-54e23faf.js";import"./context-29cf9f11.js";import"./Button-7a6b5a8d.js";import"./useButton-43fc9096.js";import"./Collection-cc038264.js";import"./useTreeState-96b7b0c2.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,W=()=>{const[r,t]=d.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{W as Default};
