import{s as o,a as e,j as l,r as d}from"./index.ce91dad7.js";import{d as c,C as m,e as p}from"./Modal.c7abaaf9.js";import{k as u}from"./Dialog.module.1119fede.js";import"./theme.ab33c2a9.js";import"./palette.15e4d008.js";import"./RSPContexts.module.80a613a7.js";import"./useFocusRing.module.9be1e3d5.js";import"./OverlayArrow.module.55b3164e.js";import"./context.module.b3d394e1.js";import"./Button.module.32052beb.js";import"./useButton.module.2ce63a7a.js";import"./Collection.module.a115f033.js";import"./Text.module.e30545f2.js";import"./useTreeState.module.d8767b0b.js";const f=o(c)`
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
