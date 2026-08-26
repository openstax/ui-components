import{s as o,j as e,a as l,r as d}from"./index-5e423046.js";import{c,C as m,d as p}from"./Modal-d904a0a7.js";import{d as u}from"./Dialog-5b271188.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-fd58dd58.js";import"./useFocusRing-31641249.js";import"./OverlayArrow-cd60ecfd.js";import"./context-9bbca4cd.js";import"./Button-7a3fe4cf.js";import"./Hidden-6d040365.js";import"./useButton-4c14a3ca.js";import"./Collection-2b064cd2.js";import"./FocusScope-9ab21979.js";import"./useTreeState-de9f3c9f.js";const f=o(c)`
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
