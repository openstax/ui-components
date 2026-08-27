import{s as o,j as e,a as l,r as d}from"./index-82ae8bbf.js";import{c,C as m,d as p}from"./Modal-d1db18cc.js";import{d as u}from"./Dialog-39780342.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./VisuallyHidden-186d6489.js";import"./useFocusRing-6af8ce7d.js";import"./OverlayArrow-4d99f132.js";import"./context-48143e3d.js";import"./Button-6aeeda0e.js";import"./Hidden-a42d9e9a.js";import"./useButton-9098b094.js";import"./Collection-69fb12b5.js";import"./FocusScope-cc927f36.js";import"./useTreeState-c65474d7.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:i,show:n,...s})=>n?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:i})]})}):null,A=()=>{const[r,t]=d.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{A as Default};
