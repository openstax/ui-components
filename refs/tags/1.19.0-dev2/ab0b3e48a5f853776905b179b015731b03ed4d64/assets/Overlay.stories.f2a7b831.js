import{s as o,a as e,j as l,r as d}from"./index.f87a91fe.js";import{c,C as m,d as p}from"./Modal.c8327513.js";import{k as u}from"./Dialog.module.c0126e4b.js";import"./theme.8e2e2444.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.74c7b07d.js";import"./useFocusRing.module.b8376a91.js";import"./OverlayArrow.module.cfc1c070.js";import"./context.module.c597e578.js";import"./Button.module.463f6375.js";import"./useButton.module.43f19e26.js";import"./Collection.module.590d4e54.js";import"./useTreeState.module.9c56d9c4.js";const f=o(c)`
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
