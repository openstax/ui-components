import{s as o,a as e,j as l,r as d}from"./index.c9822ead.js";import{d as c,C as m,e as p}from"./Modal.25b4f299.js";import{k as u}from"./Dialog.module.9dbb8aa1.js";import"./theme.faecafb9.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.4ec9174d.js";import"./useFocusRing.module.c582b2dd.js";import"./OverlayArrow.module.65f27815.js";import"./context.module.a395e934.js";import"./Button.module.16580fdd.js";import"./useButton.module.c7f535ba.js";import"./Collection.module.278f8bb3.js";import"./useTreeState.module.56863a85.js";const f=o(c)`
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
