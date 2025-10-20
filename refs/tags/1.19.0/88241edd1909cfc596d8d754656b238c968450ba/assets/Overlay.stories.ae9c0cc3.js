import{s as o,a as e,j as l,r as d}from"./index.a39ae2d7.js";import{c,C as m,d as p}from"./Modal.5d24e811.js";import{k as u}from"./Dialog.module.dfb90bb3.js";import"./theme.7db12104.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.15c285ec.js";import"./useFocusRing.module.7dd38b4e.js";import"./OverlayArrow.module.7cf694f9.js";import"./context.module.f0fb5150.js";import"./Button.module.6d6269e6.js";import"./useButton.module.e5c4e9f8.js";import"./Collection.module.d8130e88.js";import"./useTreeState.module.b2c7e5a1.js";const f=o(c)`
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
