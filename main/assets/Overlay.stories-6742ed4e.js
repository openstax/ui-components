import{s as o,j as e,a as l,r as d}from"./index-6a37c30d.js";import{c,C as m,d as p}from"./Modal-6ca6c220.js";import{d as u}from"./Dialog-26980c02.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-99a2c298.js";import"./useFocusRing-bcd7ea86.js";import"./OverlayArrow-a40486a4.js";import"./context-f1eb16d2.js";import"./Button-c2e2e24a.js";import"./useButton-2d2f4d8e.js";import"./Collection-e0819768.js";import"./useTreeState-1ae0d6ec.js";const f=o(c)`
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
