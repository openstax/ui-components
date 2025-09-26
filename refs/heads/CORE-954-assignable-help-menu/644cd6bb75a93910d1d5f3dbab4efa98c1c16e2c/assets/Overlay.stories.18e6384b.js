import{s as o,a as e,j as l,r as d}from"./index.f7a4f65c.js";import{d as c,C as m,e as p}from"./Modal.78a3c8c5.js";import{k as u}from"./Dialog.module.4c205f69.js";import"./theme.637808db.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.d462b537.js";import"./useFocusRing.module.a2851361.js";import"./OverlayArrow.module.09df0dd5.js";import"./context.module.28b418ef.js";import"./Button.module.b78ea298.js";import"./useButton.module.223f1d8b.js";import"./Collection.module.dede75a1.js";import"./useTreeState.module.c4857c2c.js";const f=o(c)`
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
