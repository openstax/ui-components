import{s as o,a as e,j as l,r as d}from"./index.92dc451b.js";import{c,C as m,d as p}from"./Modal.3873b2bf.js";import{k as u}from"./Dialog.module.e588ac39.js";import"./theme.11c81b00.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.0ae6419a.js";import"./useFocusRing.module.d89eaa9f.js";import"./OverlayArrow.module.f4844a5a.js";import"./context.module.8756b534.js";import"./Button.module.68431157.js";import"./useButton.module.61570390.js";import"./Collection.module.2f2649af.js";import"./useTreeState.module.bb4bd3f7.js";const f=o(c)`
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
