import{s as o,a as e,j as l,r as d}from"./index.6a46d10b.js";import{d as c,C as m,e as p}from"./Modal.9aa7d04f.js";import{k as u}from"./Dialog.module.de9a3643.js";import"./theme.6118982a.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.1f4c5df1.js";import"./useFocusRing.module.ec264aa1.js";import"./OverlayArrow.module.c885ac68.js";import"./context.module.49c9b943.js";import"./Button.module.f46ebf71.js";import"./useButton.module.260ea417.js";import"./Collection.module.36daaf65.js";import"./useTreeState.module.77fa9534.js";const f=o(c)`
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
