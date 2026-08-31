import{s as o,j as e,a as l,r as d}from"./index-902f1469.js";import{c,C as m,d as p}from"./Modal-bd934ab3.js";import{d as u}from"./Dialog-e2cdf36c.js";import"./theme-8bbc88f0.js";import"./palette-f868513b.js";import"./VisuallyHidden-05412b8e.js";import"./useFocusRing-66f2b1cb.js";import"./OverlayArrow-af645a22.js";import"./context-5ec8525c.js";import"./Button-3c404b9a.js";import"./useButton-7d405c6c.js";import"./Collection-3a29fb4d.js";import"./useTreeState-f1e3e41d.js";const f=o(c)`
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
