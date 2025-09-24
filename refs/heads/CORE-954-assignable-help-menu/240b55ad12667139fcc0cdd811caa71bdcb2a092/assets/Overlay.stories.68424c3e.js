import{s as o,a as e,j as l,r as d}from"./index.d75e0607.js";import{d as c,C as m,e as p}from"./Modal.b34b1403.js";import{k as u}from"./Dialog.module.8a470a20.js";import"./theme.5fee477c.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.9894bbee.js";import"./useFocusRing.module.d4d86887.js";import"./OverlayArrow.module.e2b47b46.js";import"./context.module.25743320.js";import"./Button.module.03418106.js";import"./useButton.module.86f36f81.js";import"./Collection.module.22734059.js";import"./useTreeState.module.ca19a871.js";const f=o(c)`
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
