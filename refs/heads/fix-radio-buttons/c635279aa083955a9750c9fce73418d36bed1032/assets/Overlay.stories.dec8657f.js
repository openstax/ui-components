import{s as o,a as e,j as l,r as d}from"./index.221f68d3.js";import{c,C as m,d as p}from"./Modal.739f890d.js";import{k as u}from"./Dialog.module.8bd80ea9.js";import"./theme.412e53c9.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.ac52cdca.js";import"./useFocusRing.module.359a7211.js";import"./OverlayArrow.module.980bfb5a.js";import"./context.module.116ede5a.js";import"./Button.module.a1258f8d.js";import"./useButton.module.02e5a16f.js";import"./Collection.module.19d224dd.js";import"./useTreeState.module.4d9c3952.js";const f=o(c)`
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
