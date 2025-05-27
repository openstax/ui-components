import{s as o,a as e,j as l,r as d}from"./index.01b405be.js";import{d as c,C as m,e as p}from"./Modal.1ba3345b.js";import{k as u}from"./Dialog.module.06ef7bc1.js";import"./theme.3ba0a4aa.js";import"./palette.15e4d008.js";import"./useTreeState.module.b77595f0.js";import"./Collection.module.63ebd613.js";import"./useFocusRing.module.17f3bb89.js";import"./OverlayArrow.module.debfc22c.js";import"./Button.module.b4f45811.js";import"./useButton.module.0feb6ccf.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,E=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as Default};
