import{s as o,a as e,j as l,r as d}from"./index.4091d793.js";import{c,C as m,d as p}from"./Modal.817b5c06.js";import{k as u}from"./Dialog.module.66dd3cdd.js";import"./theme.e7090325.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.dd47ca06.js";import"./useFocusRing.module.fa1c8d10.js";import"./OverlayArrow.module.e0ba7ed5.js";import"./context.module.2dea785b.js";import"./Button.module.8a5a2079.js";import"./useButton.module.661318e7.js";import"./Collection.module.986d29a5.js";import"./useTreeState.module.01972f2a.js";const f=o(c)`
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
