import{s as o,a as e,j as l,r as d}from"./index.bd5cf011.js";import{c,C as m,d as p}from"./Modal.6dad73c7.js";import{k as u}from"./Dialog.module.4150ebf9.js";import"./theme.d3a0bfc0.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.4843f7ff.js";import"./useFocusRing.module.55efec08.js";import"./OverlayArrow.module.e6febd0a.js";import"./context.module.e1785199.js";import"./Button.module.c16bdbe8.js";import"./useButton.module.a985a503.js";import"./Collection.module.b8397897.js";import"./useTreeState.module.e3703796.js";const f=o(c)`
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
