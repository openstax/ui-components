import{s as o,a as e,j as l,r as d}from"./index.a37925c8.js";import{c,C as m,d as p}from"./Modal.1c8a05b9.js";import{k as u}from"./Dialog.module.17b5a2aa.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.3362e801.js";import"./useFocusRing.module.aad7678d.js";import"./OverlayArrow.module.5782498b.js";import"./context.module.97c17d50.js";import"./Button.module.a81afe84.js";import"./useButton.module.cf4eb0cd.js";import"./Collection.module.fff83cb0.js";import"./useTreeState.module.771b03b9.js";const f=o(c)`
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
