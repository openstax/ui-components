import{s as o,a as e,j as l,r as d}from"./index.6188c728.js";import{c,C as m,d as p}from"./Modal.7931a57d.js";import{k as u}from"./Dialog.module.a3335022.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.66551f64.js";import"./useFocusRing.module.ccbdfcb9.js";import"./OverlayArrow.module.ff9fe4a3.js";import"./context.module.4f2a89dc.js";import"./Button.module.f3c1ea4c.js";import"./useButton.module.ba397f4b.js";import"./Collection.module.60a17016.js";import"./useTreeState.module.c5a363d3.js";const f=o(c)`
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
