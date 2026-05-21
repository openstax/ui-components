import{s as o,a as e,j as l,r as d}from"./index.b8eea321.js";import{c,C as m,d as p}from"./Modal.cfe92170.js";import{k as u}from"./Dialog.module.0b412f86.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.e00e2517.js";import"./useFocusRing.module.a60d8ca0.js";import"./OverlayArrow.module.afecfb70.js";import"./context.module.528b13c4.js";import"./Button.module.03d0eba1.js";import"./useButton.module.bf8db9c4.js";import"./Collection.module.0318f0d9.js";import"./useTreeState.module.fe08c748.js";const f=o(c)`
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
