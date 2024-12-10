import{s as o,a as e,j as l,r as d}from"./index.85bc48f1.js";import{d as c,C as m,e as p}from"./Modal.10b9f576.js";import{n as u}from"./Dialog.module.6e338181.js";import"./theme.571e65aa.js";import"./palette.15e4d008.js";import"./context.module.055d7357.js";import"./focusSafely.module.08fcbe1c.js";import"./OverlayArrow.module.213da7fe.js";import"./FocusScope.module.ea4ec330.js";import"./isScrollable.module.c1a5d100.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,D=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default};
