import{s as o,a as e,j as l,r as d}from"./index.85ae25d8.js";import{c,C as m,d as p}from"./Modal.8bf34842.js";import{k as u}from"./Dialog.module.7e1956e8.js";import"./theme.1c2c1863.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.4f8c6c7d.js";import"./useFocusRing.module.249111bf.js";import"./OverlayArrow.module.4e7efcf6.js";import"./context.module.7a701e50.js";import"./Button.module.bc67202a.js";import"./useButton.module.45768283.js";import"./Collection.module.61f4df8f.js";import"./useTreeState.module.5078a42e.js";const f=o(c)`
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
