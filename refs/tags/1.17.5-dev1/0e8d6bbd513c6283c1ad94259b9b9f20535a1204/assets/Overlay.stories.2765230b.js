import{s as o,a as e,j as l,r as d}from"./index.25aec46f.js";import{d as c,C as m,e as p}from"./Modal.13ff95fe.js";import{k as u}from"./Dialog.module.4916533c.js";import"./theme.dc3599a9.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.5311cc6e.js";import"./useFocusRing.module.5ba3a1ea.js";import"./OverlayArrow.module.7c602be9.js";import"./context.module.8c30aefe.js";import"./Button.module.8477d730.js";import"./useButton.module.fdf4c4da.js";import"./Collection.module.7887d2ea.js";import"./useTreeState.module.08b67905.js";const f=o(c)`
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
