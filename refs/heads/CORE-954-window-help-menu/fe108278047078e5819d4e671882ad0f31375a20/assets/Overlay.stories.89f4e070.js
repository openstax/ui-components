import{s as o,a as e,j as l,r as d}from"./index.b219e867.js";import{c,C as m,d as p}from"./Modal.1dfa1bb8.js";import{k as u}from"./Dialog.module.a422a68a.js";import"./theme.cfbbe147.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.d3c03d85.js";import"./useFocusRing.module.15e3d93c.js";import"./OverlayArrow.module.d7d1e12e.js";import"./context.module.2d6ae0a1.js";import"./Button.module.2f774b4e.js";import"./useButton.module.251b3ad6.js";import"./Collection.module.a9addd45.js";import"./useTreeState.module.5fbc5184.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,W=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{W as Default};
