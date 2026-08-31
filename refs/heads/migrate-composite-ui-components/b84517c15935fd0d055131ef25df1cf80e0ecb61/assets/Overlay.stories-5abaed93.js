import{s as o,j as e,a as l,r as d}from"./index-7b5cc3ce.js";import{c,C as m,d as p}from"./Modal-c0a55042.js";import{d as u}from"./Dialog-051f730e.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./VisuallyHidden-683b6771.js";import"./useFocusRing-1998ec8f.js";import"./OverlayArrow-21e8528c.js";import"./context-a98c0383.js";import"./Button-977c23d0.js";import"./Hidden-3f516dcd.js";import"./useButton-7ecf3fae.js";import"./Collection-29537d34.js";import"./FocusScope-41eec973.js";import"./useTreeState-39fabc3b.js";const f=o(c)`
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
