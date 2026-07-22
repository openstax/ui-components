import{s as o,a as e,j as l,r as d}from"./index.3934db12.js";import{c,C as m,d as p}from"./Modal.068f99c7.js";import{k as u}from"./Dialog.module.3d234687.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.c9a188e7.js";import"./useFocusRing.module.3df13270.js";import"./OverlayArrow.module.6b1330f2.js";import"./context.module.87cfead5.js";import"./Button.module.b7d937a7.js";import"./useButton.module.e4d32f35.js";import"./Collection.module.940cea72.js";import"./useTreeState.module.30dab9b1.js";const f=o(c)`
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
