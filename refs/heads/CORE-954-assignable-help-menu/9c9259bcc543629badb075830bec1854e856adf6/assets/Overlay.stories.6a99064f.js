import{s as o,a as e,j as l,r as d}from"./index.275c3d05.js";import{d as c,C as m,e as p}from"./Modal.841281ed.js";import{k as u}from"./Dialog.module.e93a59ae.js";import"./theme.f1eeab5d.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.431fe3cd.js";import"./useFocusRing.module.eef34ac4.js";import"./OverlayArrow.module.06d04c30.js";import"./context.module.123aa522.js";import"./Button.module.45864509.js";import"./useButton.module.39b3eef1.js";import"./Collection.module.e10f2ec9.js";import"./useTreeState.module.dbf42e7b.js";const f=o(c)`
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
