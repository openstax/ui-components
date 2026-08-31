import{s as o,j as e,a as l,r as d}from"./index-2a2117df.js";import{c,C as m,d as p}from"./Modal-25d1ef94.js";import{d as u}from"./Dialog-98a088d5.js";import"./theme-8bbc88f0.js";import"./palette-f868513b.js";import"./VisuallyHidden-10b860e3.js";import"./useFocusRing-fadb0d4c.js";import"./OverlayArrow-35dbceee.js";import"./context-574cfb1c.js";import"./Button-56fe4b5b.js";import"./useButton-b9f6d9dd.js";import"./Collection-cf7a6894.js";import"./useTreeState-a86ea22c.js";const f=o(c)`
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
