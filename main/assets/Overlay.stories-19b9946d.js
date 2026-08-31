import{s as o,j as e,a as l,r as d}from"./index-788b202e.js";import{c,C as m,d as p}from"./Modal-9f61b9be.js";import{d as u}from"./Dialog-bf2bb6b5.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-d6b276e7.js";import"./useFocusRing-fbe4d19f.js";import"./OverlayArrow-651a8f8c.js";import"./context-373662f9.js";import"./Button-ca8ea009.js";import"./useButton-56df494a.js";import"./Collection-0fc0c0f8.js";import"./useTreeState-7fad3765.js";const f=o(c)`
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
