import{s as o,a as e,j as l,r as d}from"./index.b5746b1a.js";import{d as c,C as m,e as p}from"./Modal.c2cfc6e5.js";import{k as u}from"./Dialog.module.7063f1d4.js";import"./theme.91937cdd.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.4be977e1.js";import"./useFocusRing.module.a904b2f7.js";import"./OverlayArrow.module.7326a520.js";import"./context.module.808955ae.js";import"./Button.module.95aab1aa.js";import"./useButton.module.b0e11eb9.js";import"./Collection.module.9f8c4239.js";import"./useTreeState.module.1a24554c.js";const f=o(c)`
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
