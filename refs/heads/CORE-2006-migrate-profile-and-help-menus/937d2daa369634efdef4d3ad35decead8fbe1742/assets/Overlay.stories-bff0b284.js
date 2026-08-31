import{s as o,j as e,a as l,r as d}from"./index-4f7e923e.js";import{c,C as m,d as p}from"./Modal-e3dbf536.js";import{d as u}from"./Dialog-d0b8be80.js";import"./theme-8bbc88f0.js";import"./palette-f868513b.js";import"./VisuallyHidden-8f0b8464.js";import"./useFocusRing-dcf6ca9b.js";import"./OverlayArrow-30014d30.js";import"./context-3464ed93.js";import"./Button-cbd6e0a7.js";import"./useButton-c6632430.js";import"./Collection-236474b7.js";import"./useTreeState-efcb9a10.js";const f=o(c)`
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
