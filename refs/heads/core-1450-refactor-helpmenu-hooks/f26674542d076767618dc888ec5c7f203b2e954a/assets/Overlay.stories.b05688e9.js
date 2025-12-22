import{s as o,a as e,j as l,r as d}from"./index.3a7c0ce1.js";import{c,C as m,d as p}from"./Modal.c205814c.js";import{k as u}from"./Dialog.module.5c68c779.js";import"./theme.faa60f54.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.acf8dff1.js";import"./useFocusRing.module.dce4182c.js";import"./OverlayArrow.module.f8aea076.js";import"./context.module.437d4e9b.js";import"./Button.module.4186e615.js";import"./useButton.module.5d9c2401.js";import"./Collection.module.9f042b78.js";import"./useTreeState.module.5d1370c5.js";const f=o(c)`
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
