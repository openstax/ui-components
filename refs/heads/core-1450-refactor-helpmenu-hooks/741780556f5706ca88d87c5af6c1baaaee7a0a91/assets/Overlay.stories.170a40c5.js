import{s as o,a as e,j as l,r as d}from"./index.69bc1b29.js";import{c,C as m,d as p}from"./Modal.6283c429.js";import{k as u}from"./Dialog.module.d2698588.js";import"./theme.63b39195.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.680cbf16.js";import"./useFocusRing.module.0cb66c74.js";import"./OverlayArrow.module.f49e0587.js";import"./context.module.e740236e.js";import"./Button.module.9f0fcf69.js";import"./useButton.module.f34ab1dc.js";import"./Collection.module.74816146.js";import"./useTreeState.module.76ea674b.js";const f=o(c)`
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
