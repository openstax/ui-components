import{s as o,j as e,a as l,r as d}from"./index-2712b3cb.js";import{c,C as m,d as p}from"./Modal-8ab40e0a.js";import{d as u}from"./Dialog-1e1da172.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-edcf4e41.js";import"./useFocusRing-5b5e1e4e.js";import"./OverlayArrow-fb2f07be.js";import"./context-1a71db3d.js";import"./Button-4935ba7e.js";import"./useButton-45780e55.js";import"./Collection-1b6fcd92.js";import"./useTreeState-c5ea916d.js";const f=o(c)`
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
