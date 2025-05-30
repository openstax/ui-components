import{s as o,a as e,j as l,r as d}from"./index.44dcedd8.js";import{d as c,C as m,e as p}from"./Modal.8d6e351c.js";import{k as u}from"./Dialog.module.8501bf2c.js";import"./theme.632686a9.js";import"./palette.15e4d008.js";import"./RSPContexts.module.4b948ff8.js";import"./useFocusRing.module.d602e730.js";import"./OverlayArrow.module.885cf600.js";import"./context.module.11ab16e1.js";import"./Button.module.c83c9446.js";import"./useButton.module.7e8c5855.js";import"./Collection.module.93a342d2.js";import"./Text.module.4ac1b264.js";import"./useTreeState.module.62695f28.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,z=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{z as Default};
