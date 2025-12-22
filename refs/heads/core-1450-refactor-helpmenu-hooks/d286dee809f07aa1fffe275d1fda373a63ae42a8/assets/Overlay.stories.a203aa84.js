import{s as o,a as e,j as l,r as d}from"./index.4a767a68.js";import{c,C as m,d as p}from"./Modal.03631f9a.js";import{k as u}from"./Dialog.module.76828b6a.js";import"./theme.0ce87b94.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.9de88a87.js";import"./useFocusRing.module.cf123900.js";import"./OverlayArrow.module.51f6ac2a.js";import"./context.module.decc80c8.js";import"./Button.module.fac53c94.js";import"./useButton.module.ccf73a97.js";import"./Collection.module.03192d4e.js";import"./useTreeState.module.fa795270.js";const f=o(c)`
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
