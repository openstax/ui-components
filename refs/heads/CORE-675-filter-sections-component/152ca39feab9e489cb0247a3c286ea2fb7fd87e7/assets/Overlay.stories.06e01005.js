import{s as o,a as e,j as l,r as d}from"./index.cf96068e.js";import{d as c,C as m,e as p}from"./Modal.f0fe0419.js";import{l as u}from"./Dialog.module.68856558.js";import"./theme.86ecbb1f.js";import"./palette.15e4d008.js";import"./context.module.9a4939e0.js";import"./OverlayArrow.module.389d8ae7.js";import"./Hidden.module.83cf58fd.js";import"./useButton.module.26af66a5.js";import"./Collection.module.4da1fcef.js";import"./FocusScope.module.11cba4f7.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,E=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as Default};
