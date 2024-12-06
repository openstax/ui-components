import{s as o,a as e,j as l,r as d}from"./index.56f7f4f0.js";import{d as c,C as m,e as p}from"./Modal.b919d6e9.js";import{n as u}from"./Dialog.module.26c732b9.js";import"./theme.7c2850be.js";import"./palette.15e4d008.js";import"./context.module.9782951c.js";import"./focusSafely.module.c0485436.js";import"./OverlayArrow.module.41ca31fa.js";import"./FocusScope.module.7e9d372f.js";import"./isScrollable.module.b610a077.js";const f=o(c)`
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
