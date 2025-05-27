import{s as o,a as e,j as l,r as d}from"./index.40ca4ef0.js";import{d as c,C as m,e as p}from"./Modal.7c8ce437.js";import{k as u}from"./Dialog.module.cf05ca63.js";import"./theme.21d7e301.js";import"./palette.15e4d008.js";import"./useTreeState.module.098b39dd.js";import"./Collection.module.ba43f41e.js";import"./useFocusRing.module.dd225e63.js";import"./OverlayArrow.module.30892b24.js";import"./Button.module.e79344d2.js";import"./useButton.module.b3bb057b.js";const f=o(c)`
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
