import{s as o,a as e,j as l,r as d}from"./index.dccd3f26.js";import{c,C as m,d as p}from"./Modal.3d55dbfb.js";import{k as u}from"./Dialog.module.5387a631.js";import"./theme.8adfa14c.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.f2fd7fda.js";import"./useFocusRing.module.75b16bd8.js";import"./OverlayArrow.module.0b8d6312.js";import"./context.module.9e75aead.js";import"./Button.module.3a5a2b56.js";import"./useButton.module.51f7691a.js";import"./Collection.module.32fcd421.js";import"./useTreeState.module.f1eae936.js";const f=o(c)`
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
