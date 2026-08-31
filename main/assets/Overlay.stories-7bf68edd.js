import{s as o,j as e,a as l,r as d}from"./index-5d5ecec5.js";import{c,C as m,d as p}from"./Modal-678ed15b.js";import{d as u}from"./Dialog-26bdbf00.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./VisuallyHidden-6551db3b.js";import"./useFocusRing-0597b27e.js";import"./OverlayArrow-e83b25a8.js";import"./context-438509ae.js";import"./Button-0d114c95.js";import"./Hidden-4d907325.js";import"./useButton-7eb0e240.js";import"./Collection-db772d46.js";import"./FocusScope-1905bc82.js";import"./useTreeState-85b01918.js";const f=o(c)`
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
