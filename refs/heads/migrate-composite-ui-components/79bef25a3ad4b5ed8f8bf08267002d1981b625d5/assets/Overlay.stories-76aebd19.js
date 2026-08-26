import{s as o,j as e,a as l,r as d}from"./index-3cc9c786.js";import{c,C as m,d as p}from"./Modal-e1871b60.js";import{d as u}from"./Dialog-3d55ea18.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-9a8b8ad7.js";import"./useFocusRing-fc027e0e.js";import"./OverlayArrow-0ac292b5.js";import"./context-28a935ee.js";import"./Button-e3ad5626.js";import"./Hidden-453f41bc.js";import"./useButton-a51c2f63.js";import"./Collection-bb256caa.js";import"./FocusScope-987b7826.js";import"./useTreeState-4c7060e7.js";const f=o(c)`
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
