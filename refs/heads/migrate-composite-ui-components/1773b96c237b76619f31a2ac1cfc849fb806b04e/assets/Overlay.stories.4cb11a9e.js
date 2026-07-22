import{s as o,a as e,j as l,r as d}from"./index.34d5bdce.js";import{c,C as m,d as p}from"./Modal.3ef0a1a9.js";import{k as u}from"./Dialog.module.fbd0f2d3.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.242e44a1.js";import"./useFocusRing.module.b94519a6.js";import"./OverlayArrow.module.0fa10ef0.js";import"./context.module.e8b1fb9f.js";import"./Button.module.09eccfc1.js";import"./Hidden.module.65452010.js";import"./useButton.module.ae867694.js";import"./Collection.module.1dfa783c.js";import"./FocusScope.module.af13f9e7.js";import"./useTreeState.module.ef03bdb6.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:i,show:n,...s})=>n?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:i})]})}):null,A=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{A as Default};
