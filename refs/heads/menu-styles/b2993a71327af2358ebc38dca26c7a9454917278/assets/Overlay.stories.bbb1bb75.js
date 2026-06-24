import{s as o,a as e,j as l,r as d}from"./index.af192ac9.js";import{c,C as m,d as p}from"./Modal.46500b63.js";import{k as u}from"./Dialog.module.0f6582b7.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.ea6e845c.js";import"./useFocusRing.module.9ca0bfa4.js";import"./OverlayArrow.module.770c8e2c.js";import"./context.module.1fad9a0d.js";import"./Button.module.f299e16b.js";import"./useButton.module.0dba6a7e.js";import"./Collection.module.480725e7.js";import"./useTreeState.module.ba15ac32.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,W=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{W as Default};
