import{s as o,j as e,a as l,r as d}from"./index-574c3e39.js";import{c,C as m,d as p}from"./Modal-a1d8ab02.js";import{d as u}from"./Dialog-2a33276f.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-f46b8ac8.js";import"./useFocusRing-bb0d694b.js";import"./OverlayArrow-3da9df34.js";import"./context-e65fd97a.js";import"./Button-0129c793.js";import"./useButton-32f08e5a.js";import"./Collection-2af09140.js";import"./useTreeState-d4e5ffb3.js";const f=o(c)`
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
