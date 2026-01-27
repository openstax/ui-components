import{s as o,a as e,j as l,r as d}from"./index.81dfb6b1.js";import{c,C as m,d as p}from"./Modal.4ddddc22.js";import{k as u}from"./Dialog.module.1631e792.js";import"./theme.7ceff249.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.40cf73e5.js";import"./useFocusRing.module.3c6a9e23.js";import"./OverlayArrow.module.02565d75.js";import"./context.module.c115203f.js";import"./Button.module.e88ccaec.js";import"./useButton.module.14846d47.js";import"./Collection.module.85d8cba8.js";import"./useTreeState.module.210be2da.js";const f=o(c)`
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
