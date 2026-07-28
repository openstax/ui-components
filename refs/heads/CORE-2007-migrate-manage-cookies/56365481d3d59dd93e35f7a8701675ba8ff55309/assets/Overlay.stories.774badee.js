import{s as o,a as e,j as l,r as d}from"./index.29966ebf.js";import{c,C as m,d as p}from"./Modal.952ab8ae.js";import{k as u}from"./Dialog.module.53b669bb.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.6cbdf111.js";import"./useFocusRing.module.4fa3b96f.js";import"./OverlayArrow.module.60671de4.js";import"./context.module.2d79b1a7.js";import"./Button.module.a3dcc30a.js";import"./useButton.module.9de1aa60.js";import"./Collection.module.75e860f0.js";import"./useTreeState.module.13d1b6e8.js";const f=o(c)`
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
