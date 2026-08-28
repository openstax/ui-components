import{s as o,j as e,a as l,r as d}from"./index-24599a65.js";import{c,C as m,d as p}from"./Modal-f163db23.js";import{d as u}from"./Dialog-00510bdc.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./VisuallyHidden-585a3c4b.js";import"./useFocusRing-ec63e2ee.js";import"./OverlayArrow-ecf5f0a7.js";import"./context-a7cb0a40.js";import"./Button-4adae6f2.js";import"./Hidden-e4df40c4.js";import"./useButton-7808b1fa.js";import"./Collection-80d21af2.js";import"./FocusScope-081c5657.js";import"./useTreeState-9c37d2a5.js";const f=o(c)`
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
