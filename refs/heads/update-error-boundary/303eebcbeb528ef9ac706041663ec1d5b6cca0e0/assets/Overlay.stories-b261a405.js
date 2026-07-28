import{s as o,j as e,a as l,r as d}from"./index-1b99ed79.js";import{c,C as m,d as p}from"./Modal-a33f3e29.js";import{d as u}from"./Dialog-585eb46f.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./VisuallyHidden-66a92321.js";import"./useFocusRing-eaa9d689.js";import"./OverlayArrow-282c5307.js";import"./context-dae88839.js";import"./Button-cb214005.js";import"./useButton-95bc4026.js";import"./Collection-32879c73.js";import"./useTreeState-929fe6b4.js";const f=o(c)`
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
