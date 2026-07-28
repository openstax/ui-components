import{s as o,j as e,a as l,r as d}from"./index-4d5f071c.js";import{c,C as m,d as p}from"./Modal-63753ca6.js";import{d as u}from"./Dialog-2b32bb79.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-ef784d8e.js";import"./useFocusRing-ed504e30.js";import"./OverlayArrow-18ae2c13.js";import"./context-303e5aef.js";import"./Button-e6758852.js";import"./useButton-ef08d7ba.js";import"./Collection-87ad4a4f.js";import"./useTreeState-1629211c.js";const f=o(c)`
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
