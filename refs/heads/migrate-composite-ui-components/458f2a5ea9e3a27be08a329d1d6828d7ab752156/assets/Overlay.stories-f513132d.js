import{s as o,j as e,a as l,r as d}from"./index-a305f466.js";import{c,C as m,d as p}from"./Modal-ff741811.js";import{d as u}from"./Dialog-775c8106.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./VisuallyHidden-88351089.js";import"./useFocusRing-de446a71.js";import"./OverlayArrow-c0a58211.js";import"./context-1e96466a.js";import"./Button-e6f775e0.js";import"./Hidden-16cd4541.js";import"./useButton-cfcf508f.js";import"./Collection-9eeb7c92.js";import"./FocusScope-eeacd05c.js";import"./useTreeState-d65a3488.js";const f=o(c)`
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
