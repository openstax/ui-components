import{s as o,j as e,a as l,r as d}from"./index-2a86ddcc.js";import{c,C as m,d as p}from"./Modal-fbad5d29.js";import{d as u}from"./Dialog-49e47f7d.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-a8a6c3a1.js";import"./useFocusRing-cf2ff162.js";import"./OverlayArrow-2fd441af.js";import"./context-9002cf1c.js";import"./Button-0c1667ee.js";import"./useButton-800fd6a1.js";import"./Collection-af431719.js";import"./useTreeState-282bf983.js";const f=o(c)`
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
