import{s as o,a as e,j as l,r as d}from"./index.0958d440.js";import{c,C as m,d as p}from"./Modal.460e57a9.js";import{k as u}from"./Dialog.module.5c54cf9b.js";import"./theme.48d111e7.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.454c7903.js";import"./useFocusRing.module.5faf7d13.js";import"./OverlayArrow.module.332d0eb0.js";import"./context.module.1c33aef1.js";import"./Button.module.1481a788.js";import"./useButton.module.a97ddd89.js";import"./Collection.module.6c05d418.js";import"./useTreeState.module.ee70f091.js";const f=o(c)`
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
