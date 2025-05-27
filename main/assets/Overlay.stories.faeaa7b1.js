import{s as o,a as e,j as l,r as d}from"./index.dbff1511.js";import{d as c,C as m,e as p}from"./Modal.0f842a6e.js";import{k as u}from"./Dialog.module.fcc830e5.js";import"./theme.7a5a8684.js";import"./palette.15e4d008.js";import"./useTreeState.module.bbe46e81.js";import"./Collection.module.9db131f5.js";import"./useFocusRing.module.adbe0f5c.js";import"./OverlayArrow.module.effbeacc.js";import"./Button.module.f776f56a.js";import"./useButton.module.a9be1933.js";const f=o(c)`
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
