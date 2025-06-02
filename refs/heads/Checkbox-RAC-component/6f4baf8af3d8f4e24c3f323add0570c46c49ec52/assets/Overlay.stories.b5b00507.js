import{s as o,a as e,j as l,r as d}from"./index.7885c401.js";import{d as c,C as m,e as p}from"./Modal.a94cdfdf.js";import{k as u}from"./Dialog.module.82238431.js";import"./theme.925a20ce.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.297ac03a.js";import"./useFocusRing.module.6302375c.js";import"./OverlayArrow.module.f281b7d6.js";import"./context.module.eff4f9f2.js";import"./Button.module.0e32f998.js";import"./useButton.module.5e8b8636.js";import"./Collection.module.1861f3a0.js";import"./useTreeState.module.5250adc5.js";const f=o(c)`
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
