import{s as o,j as e,a as l,r as d}from"./index-036ffbd0.js";import{c,C as m,d as p}from"./Modal-a4cd4e44.js";import{d as u}from"./Dialog-7ded68e7.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./VisuallyHidden-5f3527a5.js";import"./useFocusRing-fea1e67b.js";import"./OverlayArrow-e300baea.js";import"./context-1f577250.js";import"./Button-b63937fa.js";import"./Hidden-25112f20.js";import"./useButton-7f90f243.js";import"./Collection-a41bc16c.js";import"./FocusScope-da61fd26.js";import"./useTreeState-457c7cd4.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:i,show:n,...s})=>n?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:i})]})}):null,A=()=>{const[r,t]=d.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{A as Default};
