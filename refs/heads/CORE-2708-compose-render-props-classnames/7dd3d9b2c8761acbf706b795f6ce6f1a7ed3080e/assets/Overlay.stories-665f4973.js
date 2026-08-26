import{s as o,j as e,a as l,r as d}from"./index-f0add398.js";import{c,C as m,d as p}from"./Modal-0ee9f2cb.js";import{d as u}from"./Dialog-34bc1165.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-7a6dd58d.js";import"./useFocusRing-ac7f6a4f.js";import"./OverlayArrow-a727c75d.js";import"./context-1e6d14eb.js";import"./Button-292b7e53.js";import"./useButton-63415e35.js";import"./Collection-34441c29.js";import"./useTreeState-424e801e.js";const f=o(c)`
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
