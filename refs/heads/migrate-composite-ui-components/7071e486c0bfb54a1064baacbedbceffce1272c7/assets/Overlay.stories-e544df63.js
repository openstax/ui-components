import{s as o,j as e,a as l,r as d}from"./index-2e18f280.js";import{c,C as m,d as p}from"./Modal-eccc895e.js";import{d as u}from"./Dialog-fbcf93e3.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./VisuallyHidden-781aad86.js";import"./useFocusRing-c07143c7.js";import"./OverlayArrow-9806f204.js";import"./context-2c2a4cb4.js";import"./Button-cccfa484.js";import"./Hidden-110ca2c9.js";import"./useButton-1a7cb8e4.js";import"./Collection-45bee07f.js";import"./FocusScope-e2b46b5b.js";import"./useTreeState-f62d68ee.js";const f=o(c)`
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
