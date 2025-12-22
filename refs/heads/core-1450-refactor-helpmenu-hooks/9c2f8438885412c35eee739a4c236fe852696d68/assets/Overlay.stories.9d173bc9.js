import{s as o,a as e,j as l,r as d}from"./index.b11bfc39.js";import{c,C as m,d as p}from"./Modal.85164474.js";import{k as u}from"./Dialog.module.9daf08de.js";import"./theme.2b93f1dd.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.d391f796.js";import"./useFocusRing.module.881fbd5b.js";import"./OverlayArrow.module.25e51d3f.js";import"./context.module.cd75fb55.js";import"./Button.module.c3411fe9.js";import"./useButton.module.61aebc55.js";import"./Collection.module.70c47223.js";import"./useTreeState.module.56c6d514.js";const f=o(c)`
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
