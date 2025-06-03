import{s as o,a as e,j as l,r as d}from"./index.cc4cf4d6.js";import{d as c,C as m,e as p}from"./Modal.b8411d09.js";import{k as u}from"./Dialog.module.bb22c08f.js";import"./theme.df157495.js";import"./palette.15e4d008.js";import"./useTreeState.module.30870418.js";import"./Collection.module.7949dd12.js";import"./useFocusRing.module.ad304b6e.js";import"./OverlayArrow.module.fc2b7af1.js";import"./Button.module.c427d024.js";import"./useButton.module.4575b742.js";const f=o(c)`
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
