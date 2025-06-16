import{s as o,a as e,j as l,r as d}from"./index.c3f899c4.js";import{d as c,C as m,e as p}from"./Modal.f28e10e2.js";import{k as u}from"./Dialog.module.7dc6f121.js";import"./theme.e03456da.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.f30b365c.js";import"./useFocusRing.module.dbb75c3b.js";import"./OverlayArrow.module.8ec02937.js";import"./context.module.00a2ee0b.js";import"./Button.module.dd5fb9fe.js";import"./useButton.module.b758843c.js";import"./Collection.module.068b7248.js";import"./useTreeState.module.4b3182c5.js";const f=o(c)`
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
