import{s as o,a as e,j as l,r as d}from"./index.924fd51e.js";import{c,C as m,d as p}from"./Modal.39763197.js";import{k as u}from"./Dialog.module.acd7ba1f.js";import"./theme.848ff9a2.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.88ae68c1.js";import"./useFocusRing.module.15917e67.js";import"./OverlayArrow.module.be0acdb4.js";import"./context.module.ae7b0bdf.js";import"./Button.module.06a19140.js";import"./useButton.module.4cf00a89.js";import"./Collection.module.68a8d76c.js";import"./useTreeState.module.43c49e7c.js";const f=o(c)`
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
