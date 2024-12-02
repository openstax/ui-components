import{s as o,a as e,j as l,r as d}from"./index.93484bbe.js";import{d as c,C as m,e as p}from"./Modal.7e195e57.js";import{n as u}from"./Dialog.module.7a7d6aab.js";import"./theme.93e2a079.js";import"./palette.15e4d008.js";import"./context.module.4b17ed65.js";import"./focusSafely.module.c50de9e1.js";import"./OverlayArrow.module.5001665a.js";import"./FocusScope.module.5230caf3.js";import"./isScrollable.module.b1a267fc.js";const f=o(c)`
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
