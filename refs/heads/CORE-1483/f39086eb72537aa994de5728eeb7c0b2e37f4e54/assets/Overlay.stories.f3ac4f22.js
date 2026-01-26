import{s as o,a as e,j as l,r as d}from"./index.b757a763.js";import{c,C as m,d as p}from"./Modal.511ba88a.js";import{k as u}from"./Dialog.module.24e9995c.js";import"./theme.41870ae7.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.e41ddf56.js";import"./useFocusRing.module.e52cf5d7.js";import"./OverlayArrow.module.0dcbb3b2.js";import"./context.module.14418222.js";import"./Button.module.e1acaf65.js";import"./useButton.module.2c09f88e.js";import"./Collection.module.71afb8af.js";import"./useTreeState.module.7e0e6845.js";const f=o(c)`
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
