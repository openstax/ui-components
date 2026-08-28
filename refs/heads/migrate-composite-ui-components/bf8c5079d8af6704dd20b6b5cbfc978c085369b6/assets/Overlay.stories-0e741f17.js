import{s as o,j as e,a as l,r as d}from"./index-889390ef.js";import{c,C as m,d as p}from"./Modal-fce08be6.js";import{d as u}from"./Dialog-d5047cd1.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./VisuallyHidden-dc76252e.js";import"./useFocusRing-346b2f5a.js";import"./OverlayArrow-5b4a2467.js";import"./context-250399c4.js";import"./Button-1efdd9ad.js";import"./Hidden-fc318b56.js";import"./useButton-a5bd1574.js";import"./Collection-d3305129.js";import"./FocusScope-04c1753e.js";import"./useTreeState-1c73ff51.js";const f=o(c)`
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
