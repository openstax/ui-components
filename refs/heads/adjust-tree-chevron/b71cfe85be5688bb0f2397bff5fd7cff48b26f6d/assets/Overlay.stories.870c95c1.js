import{s as o,a as e,j as l,r as d}from"./index.d08558f3.js";import{d as c,C as m,e as p}from"./Modal.b7de081a.js";import{k as u}from"./Dialog.module.7b0c64e0.js";import"./theme.76bc4b2b.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.34d63b6c.js";import"./useFocusRing.module.ae530b9b.js";import"./OverlayArrow.module.9be9c057.js";import"./context.module.c19404e4.js";import"./Button.module.2bf3edb8.js";import"./useButton.module.567a6684.js";import"./Collection.module.f6f7979c.js";import"./useTreeState.module.58393697.js";const f=o(c)`
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
