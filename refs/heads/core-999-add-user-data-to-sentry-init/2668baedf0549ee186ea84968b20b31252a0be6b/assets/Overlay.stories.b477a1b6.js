import{s as o,a as e,j as l,r as d}from"./index.6257544b.js";import{d as c,C as m,e as p}from"./Modal.206f0a4d.js";import{k as u}from"./Dialog.module.0c0e4ad1.js";import"./theme.9e4ddf18.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.5d0ab8ac.js";import"./useFocusRing.module.b459486a.js";import"./OverlayArrow.module.b59eca05.js";import"./context.module.35b17430.js";import"./Button.module.c8774860.js";import"./useButton.module.1d2adc31.js";import"./Collection.module.1a129a96.js";import"./useTreeState.module.b8687771.js";const f=o(c)`
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
