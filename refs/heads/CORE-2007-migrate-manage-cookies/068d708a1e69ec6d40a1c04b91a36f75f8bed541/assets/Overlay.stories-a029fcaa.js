import{s as o,j as e,a as l,r as d}from"./index-eb83cddb.js";import{c,C as m,d as p}from"./Modal-7563076a.js";import{d as u}from"./Dialog-fc4b2c9e.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-b9289708.js";import"./useFocusRing-36033347.js";import"./OverlayArrow-303da9e8.js";import"./context-e9c2fce8.js";import"./Button-b4e93eb8.js";import"./useButton-e22d0ffe.js";import"./Collection-96ab132a.js";import"./useTreeState-12c38387.js";const f=o(c)`
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
