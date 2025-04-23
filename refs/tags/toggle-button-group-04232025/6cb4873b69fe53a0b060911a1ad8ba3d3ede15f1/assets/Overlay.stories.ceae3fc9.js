import{s as o,a as e,j as l,r as d}from"./index.722bcc42.js";import{d as c,C as m,e as p}from"./Modal.32e6ea57.js";import{l as u}from"./Dialog.module.fb89f950.js";import"./theme.c3194663.js";import"./palette.15e4d008.js";import"./context.module.018045bd.js";import"./OverlayArrow.module.ad1eabed.js";import"./useButton.module.a8cb4965.js";import"./Collection.module.1537d92e.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,$=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{$ as Default};
