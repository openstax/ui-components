import{s as o,a as e,j as l,r as d}from"./index.0c79af41.js";import{d as c,C as m,e as p}from"./Modal.a7f1ab03.js";import{k as u}from"./Dialog.module.37ca5324.js";import"./theme.b5bbaa15.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.70d2bd62.js";import"./useFocusRing.module.bcc39552.js";import"./OverlayArrow.module.1bd813c4.js";import"./context.module.5d1ff231.js";import"./Button.module.5fe4e89b.js";import"./useButton.module.c98de408.js";import"./Collection.module.c7dff705.js";import"./useTreeState.module.b8e317e3.js";const f=o(c)`
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
