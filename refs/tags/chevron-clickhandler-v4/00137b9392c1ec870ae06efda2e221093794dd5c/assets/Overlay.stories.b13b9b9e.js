import{s as o,a as e,j as l,r as d}from"./index.dc7cd7b1.js";import{d as c,C as m,e as p}from"./Modal.1ab15151.js";import{k as u}from"./Dialog.module.8bc2c1ea.js";import"./theme.16560e64.js";import"./palette.15e4d008.js";import"./useTreeState.module.79b3f67d.js";import"./Collection.module.d1e50380.js";import"./useFocusRing.module.dabaa8d3.js";import"./OverlayArrow.module.93d95df8.js";import"./Button.module.113e8004.js";import"./useButton.module.03f4f641.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,E=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as Default};
