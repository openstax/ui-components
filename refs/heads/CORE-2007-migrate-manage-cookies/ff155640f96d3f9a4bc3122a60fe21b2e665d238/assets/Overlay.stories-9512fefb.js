import{s as o,j as e,a as l,r as d}from"./index-42144532.js";import{c,C as m,d as p}from"./Modal-c61c414b.js";import{d as u}from"./Dialog-f542e0bd.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-5cf6d24a.js";import"./useFocusRing-3b9e5d80.js";import"./OverlayArrow-df78e51b.js";import"./context-ac140894.js";import"./Button-73607743.js";import"./useButton-a4a284f6.js";import"./Collection-7796d9ba.js";import"./useTreeState-3f1f3012.js";const f=o(c)`
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
