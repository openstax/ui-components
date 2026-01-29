import{s as o,a as e,j as l,r as d}from"./index.fabca33b.js";import{c,C as m,d as p}from"./Modal.b03a335c.js";import{k as u}from"./Dialog.module.e89c9859.js";import"./theme.7d65ad6e.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.972e58ac.js";import"./useFocusRing.module.bf281d1a.js";import"./OverlayArrow.module.d1bc311a.js";import"./context.module.2924e6c2.js";import"./Button.module.996d8e2a.js";import"./useButton.module.fbb9165d.js";import"./Collection.module.48d1d4cd.js";import"./useTreeState.module.f6b12518.js";const f=o(c)`
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
