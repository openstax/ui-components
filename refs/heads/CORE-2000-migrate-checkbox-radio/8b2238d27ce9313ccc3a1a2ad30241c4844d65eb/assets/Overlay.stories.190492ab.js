import{s as o,a as e,j as l,r as d}from"./index.bde1cc9b.js";import{c,C as m,d as p}from"./Modal.07eb7b95.js";import{k as u}from"./Dialog.module.9776371f.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.03f30460.js";import"./useFocusRing.module.3337d38d.js";import"./OverlayArrow.module.8ec538a3.js";import"./context.module.6ac6eab5.js";import"./Button.module.57516a8e.js";import"./useButton.module.713c539a.js";import"./Collection.module.a184eedc.js";import"./useTreeState.module.01a4d308.js";const f=o(c)`
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
