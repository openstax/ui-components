import{s as o,a as e,j as l,r as d}from"./index.0a27c5ce.js";import{d as c,C as m,e as p}from"./Modal.5c1c9847.js";import{n as u}from"./Dialog.module.475aae53.js";import"./theme.3d34f3e6.js";import"./palette.15e4d008.js";import"./context.module.cbef6687.js";import"./focusSafely.module.baee9b88.js";import"./OverlayArrow.module.af6871ce.js";import"./FocusScope.module.ba3a5f3c.js";import"./isScrollable.module.6d6276d4.js";const f=o(c)`
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
