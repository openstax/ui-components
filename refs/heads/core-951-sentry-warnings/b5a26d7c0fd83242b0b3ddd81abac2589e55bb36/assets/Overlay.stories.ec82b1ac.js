import{s as o,a as e,j as l,r as d}from"./index.c68b4d2f.js";import{d as c,C as m,e as p}from"./Modal.e4eab2ae.js";import{k as u}from"./Dialog.module.09a51098.js";import"./theme.b2bae99d.js";import"./palette.15e4d008.js";import"./useTreeState.module.99ecc8bc.js";import"./Collection.module.4bd39e99.js";import"./useFocusRing.module.148955a4.js";import"./OverlayArrow.module.51144fca.js";import"./Button.module.6d0c5574.js";import"./useButton.module.7040ca1b.js";const f=o(c)`
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
