import{s as o,a as e,j as l,r as d}from"./index.14a97abd.js";import{d as c,C as m,e as p}from"./Modal.4d764fd4.js";import{k as u}from"./Dialog.module.82b51538.js";import"./theme.bc278bd7.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.5ea6b3ba.js";import"./useFocusRing.module.0130d255.js";import"./OverlayArrow.module.1a7cf3fe.js";import"./context.module.fcf81413.js";import"./Button.module.31e3f809.js";import"./useButton.module.76d86e94.js";import"./Collection.module.a9903673.js";import"./useTreeState.module.ec941e53.js";const f=o(c)`
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
