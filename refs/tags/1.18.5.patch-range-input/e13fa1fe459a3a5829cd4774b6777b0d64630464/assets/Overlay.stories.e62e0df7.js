import{s as o,a as e,j as l,r as d}from"./index.6bca83e6.js";import{d as c,C as m,e as p}from"./Modal.7e78f597.js";import{k as u}from"./Dialog.module.fe05d50d.js";import"./theme.e6785e88.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.dd98a900.js";import"./useFocusRing.module.2bdc77e5.js";import"./OverlayArrow.module.7c516475.js";import"./context.module.12b9aea5.js";import"./Button.module.59775961.js";import"./useButton.module.6a130ada.js";import"./Collection.module.ba2defb2.js";import"./useTreeState.module.61f1d391.js";const f=o(c)`
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
