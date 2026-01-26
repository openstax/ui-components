import{s as o,a as e,j as l,r as d}from"./index.32774466.js";import{c,C as m,d as p}from"./Modal.1fdc68e4.js";import{k as u}from"./Dialog.module.681a190a.js";import"./theme.c99223a2.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.7af997a3.js";import"./useFocusRing.module.cf862bf4.js";import"./OverlayArrow.module.fb4ac2cb.js";import"./context.module.c8cee43f.js";import"./Button.module.deb7379c.js";import"./useButton.module.ea2cf59e.js";import"./Collection.module.f1ec8c81.js";import"./useTreeState.module.1e78d99d.js";const f=o(c)`
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
