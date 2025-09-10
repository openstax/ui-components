import{s as o,a as e,j as l,r as d}from"./index.b2621a8a.js";import{d as c,C as m,e as p}from"./Modal.57f4725d.js";import{k as u}from"./Dialog.module.e0a8f557.js";import"./theme.4b70bcd5.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.24898c7c.js";import"./useFocusRing.module.f1baf383.js";import"./OverlayArrow.module.f66f286a.js";import"./context.module.8c2030d1.js";import"./Button.module.51829b69.js";import"./useButton.module.4bab03b2.js";import"./Collection.module.66c42983.js";import"./useTreeState.module.afeb6032.js";const f=o(c)`
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
