import{s as o,a as e,j as l,r as d}from"./index.069edce0.js";import{d as c,C as m,e as p}from"./Modal.33e9b2d7.js";import{n as u}from"./Dialog.module.5062e1da.js";import"./theme.7690d78e.js";import"./palette.15e4d008.js";import"./context.module.f7ec4f70.js";import"./focusSafely.module.e4ff997f.js";import"./OverlayArrow.module.86837da0.js";import"./FocusScope.module.8468bc4c.js";import"./isScrollable.module.9c3b1acb.js";const f=o(c)`
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