import{s as o,a as e,j as l,r as d}from"./index.6a72da6e.js";import{d as c,C as m,e as p}from"./Modal.a6aec3b2.js";import{k as u}from"./Dialog.module.daaaf25e.js";import"./theme.5df48c3f.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.18cf97e9.js";import"./useFocusRing.module.323af50f.js";import"./OverlayArrow.module.443ecbfc.js";import"./context.module.d0a60a1b.js";import"./Button.module.3f5463c5.js";import"./useButton.module.650fc9b1.js";import"./Collection.module.707fa21d.js";import"./useTreeState.module.762cb9c6.js";const f=o(c)`
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
