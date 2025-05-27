import{s as o,a as e,j as l,r as d}from"./index.f54093e7.js";import{d as c,C as m,e as p}from"./Modal.8493b356.js";import{k as u}from"./Dialog.module.c7d62270.js";import"./theme.d2122246.js";import"./palette.15e4d008.js";import"./useTreeState.module.7c1552f5.js";import"./Collection.module.2cce318b.js";import"./useFocusRing.module.dadb4a17.js";import"./OverlayArrow.module.7de0bc43.js";import"./Button.module.9a5ea9a6.js";import"./useButton.module.fe26e510.js";const f=o(c)`
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
