import{s as o,a as e,j as l,r as d}from"./index.964940cc.js";import{d as c,C as m,e as p}from"./Modal.67cd90b3.js";import{k as u}from"./Dialog.module.24c88936.js";import"./theme.f522d3c7.js";import"./palette.15e4d008.js";import"./RSPContexts.module.a5a294a0.js";import"./useFocusRing.module.bd802165.js";import"./OverlayArrow.module.8d625800.js";import"./context.module.cc338bef.js";import"./Button.module.cd2d3213.js";import"./useButton.module.1ebeee7f.js";import"./Collection.module.d4acd5b8.js";import"./Text.module.c6b9972d.js";import"./useTreeState.module.a0443c64.js";const f=o(c)`
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
