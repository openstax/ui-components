import{s as o,j as e,a as l,r as d}from"./index-3d0a9b78.js";import{c,C as m,d as p}from"./Modal-db4a18ba.js";import{d as u}from"./Dialog-bd500379.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-73a3d0c1.js";import"./useFocusRing-e6b2b871.js";import"./OverlayArrow-4a1e9b62.js";import"./context-8a917c2e.js";import"./Button-a5629a39.js";import"./useButton-36b3396b.js";import"./Collection-3c9bee8a.js";import"./useTreeState-9acab970.js";const f=o(c)`
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
