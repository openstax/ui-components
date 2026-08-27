import{s as o,j as e,a as l,r as d}from"./index-401d3572.js";import{c,C as m,d as p}from"./Modal-f7e923e8.js";import{d as u}from"./Dialog-9e3472ca.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./VisuallyHidden-5de8a358.js";import"./useFocusRing-9cbfdfd7.js";import"./OverlayArrow-58ac7133.js";import"./context-129c94fe.js";import"./Button-c95043ee.js";import"./Hidden-1c73929c.js";import"./useButton-3af8ea51.js";import"./Collection-c6e14f64.js";import"./FocusScope-1028a59a.js";import"./useTreeState-37db3a57.js";const f=o(c)`
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
