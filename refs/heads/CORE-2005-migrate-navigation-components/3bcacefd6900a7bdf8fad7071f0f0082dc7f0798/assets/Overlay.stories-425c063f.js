import{s as o,j as e,a as l,r as d}from"./index-a84d1d7a.js";import{c,C as m,d as p}from"./Modal-f3abafc5.js";import{d as u}from"./Dialog-6389c71b.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-3ca63f75.js";import"./useFocusRing-11418ec0.js";import"./OverlayArrow-b783cc62.js";import"./context-d8ee8066.js";import"./Button-e04a1e06.js";import"./useButton-02bbc958.js";import"./Collection-c36a691c.js";import"./useTreeState-667c3256.js";const f=o(c)`
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
