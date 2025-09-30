import{s as o,a as e,j as l,r as d}from"./index.3d4d9294.js";import{d as c,C as m,e as p}from"./Modal.f7c854d1.js";import{k as u}from"./Dialog.module.f4557991.js";import"./theme.28440579.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.5787c790.js";import"./useFocusRing.module.acfe7bfa.js";import"./OverlayArrow.module.db48e8a3.js";import"./context.module.3d004b19.js";import"./Button.module.d65d22f7.js";import"./useButton.module.72c7363a.js";import"./Collection.module.eecb320d.js";import"./useTreeState.module.c38764cd.js";const f=o(c)`
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
