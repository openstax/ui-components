import{s as o,a as e,j as l,r as d}from"./index.3d937027.js";import{c,C as m,d as p}from"./Modal.1d8af544.js";import{k as u}from"./Dialog.module.e06c4df6.js";import"./theme.faf9aa84.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.91fac4e4.js";import"./useFocusRing.module.d084052f.js";import"./OverlayArrow.module.1d2482de.js";import"./context.module.0293aa53.js";import"./Button.module.40eb5513.js";import"./useButton.module.8eae8f9a.js";import"./Collection.module.47c151f1.js";import"./useTreeState.module.c73a22b9.js";const f=o(c)`
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
