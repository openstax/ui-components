import{s as o,a as e,j as l,r as d}from"./index.4c08c77b.js";import{c,C as m,d as p}from"./Modal.328781bc.js";import{k as u}from"./Dialog.module.ca5c4c99.js";import"./theme.6c1366c4.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.047c50c6.js";import"./useFocusRing.module.643381dc.js";import"./OverlayArrow.module.8dc10fcc.js";import"./context.module.237291cc.js";import"./Button.module.6afd7f3d.js";import"./useButton.module.156ae38e.js";import"./Collection.module.87e08818.js";import"./useTreeState.module.f0744343.js";const f=o(c)`
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
