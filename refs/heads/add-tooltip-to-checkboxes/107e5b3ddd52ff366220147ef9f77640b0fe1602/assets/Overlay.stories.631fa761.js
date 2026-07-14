import{s as o,a as e,j as l,r as d}from"./index.4e69b304.js";import{c,C as m,d as p}from"./Modal.97dc5cff.js";import{k as u}from"./Dialog.module.699c4ee3.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./RSPContexts.module.673f5d1f.js";import"./useFocusRing.module.89e2b32a.js";import"./OverlayArrow.module.245c8e1b.js";import"./context.module.2bca1765.js";import"./Button.module.1f9a78c6.js";import"./useButton.module.87a492c9.js";import"./Collection.module.a8ef57f9.js";import"./useTreeState.module.2c55f98a.js";import"./VisuallyHidden.module.55906f73.js";const f=o(c)`
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
