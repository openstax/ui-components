import{s as o,a as e,j as l,r as d}from"./index.00bdaae9.js";import{c,C as m,d as p}from"./Modal.d4e596e9.js";import{k as u}from"./Dialog.module.76e85044.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.fff219c5.js";import"./useFocusRing.module.b9ee67dc.js";import"./OverlayArrow.module.21d5deef.js";import"./context.module.77c61730.js";import"./Button.module.537640f5.js";import"./useButton.module.d956571d.js";import"./Collection.module.0120f51d.js";import"./useTreeState.module.80192f1f.js";const f=o(c)`
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
