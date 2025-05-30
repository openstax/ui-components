import{s as o,a as e,j as l,r as d}from"./index.3da1bfd0.js";import{d as c,C as m,e as p}from"./Modal.4db858e4.js";import{k as u}from"./Dialog.module.e5ed81c7.js";import"./theme.577cf909.js";import"./palette.15e4d008.js";import"./useTreeState.module.b58bb53e.js";import"./Collection.module.78e13864.js";import"./useFocusRing.module.09ea4fbb.js";import"./OverlayArrow.module.d44cf321.js";import"./Button.module.4e803da2.js";import"./useButton.module.62e6bd00.js";const f=o(c)`
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
