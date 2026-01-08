import{s as o,a as e,j as l,r as d}from"./index.d8d8debb.js";import{c,C as m,d as p}from"./Modal.7668442b.js";import{k as u}from"./Dialog.module.4611bfcb.js";import"./theme.80f39061.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.c321f40c.js";import"./useFocusRing.module.d9a5a371.js";import"./OverlayArrow.module.61aed297.js";import"./context.module.4d983a65.js";import"./Button.module.d4db665e.js";import"./useButton.module.93ddb8e0.js";import"./Collection.module.c0e77319.js";import"./useTreeState.module.aab9d156.js";const f=o(c)`
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
