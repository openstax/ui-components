import{s as o,a as e,j as l,r as d}from"./index.3eca7034.js";import{d as c,C as m,e as p}from"./Modal.1936bfc7.js";import{k as u}from"./Dialog.module.6b7342e3.js";import"./theme.9a6f3037.js";import"./palette.15e4d008.js";import"./useTreeState.module.93a2e30f.js";import"./Collection.module.f125b14b.js";import"./useFocusRing.module.b489b1c4.js";import"./OverlayArrow.module.be335e74.js";import"./Button.module.beb3e37f.js";import"./useButton.module.b4ddbfd9.js";const f=o(c)`
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
