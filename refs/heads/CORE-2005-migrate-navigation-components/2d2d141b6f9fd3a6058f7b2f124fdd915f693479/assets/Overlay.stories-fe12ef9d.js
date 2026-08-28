import{s as o,j as e,a as l,r as d}from"./index-1293f3a9.js";import{c,C as m,d as p}from"./Modal-e7fee0fa.js";import{d as u}from"./Dialog-4256cde8.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-38bae7fd.js";import"./useFocusRing-f2d46e7e.js";import"./OverlayArrow-b46e2fdb.js";import"./context-2ffd8006.js";import"./Button-a3d122f3.js";import"./useButton-6e341a21.js";import"./Collection-a2332310.js";import"./useTreeState-607fd514.js";const f=o(c)`
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
