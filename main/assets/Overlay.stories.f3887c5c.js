import{s as o,a as e,j as l,r as d}from"./index.5ae6b948.js";import{d as c,C as m,e as p}from"./Modal.b5fda724.js";import{k as u}from"./Dialog.module.9e3c78ec.js";import"./theme.2eb635e8.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.0f78c7a0.js";import"./useFocusRing.module.1d4a7783.js";import"./OverlayArrow.module.e926dbff.js";import"./context.module.2c259688.js";import"./Button.module.2d5a902b.js";import"./useButton.module.fa606007.js";import"./Collection.module.b27fddbb.js";import"./useTreeState.module.896c6aa2.js";const f=o(c)`
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
