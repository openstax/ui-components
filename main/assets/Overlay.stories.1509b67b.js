import{s as o,a as e,j as l,r as d}from"./index.31ec41c5.js";import{d as c,C as m,e as p}from"./Modal.fcebb26b.js";import{k as u}from"./Dialog.module.e9c8d4b7.js";import"./theme.455e3fb8.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.2421e52d.js";import"./useFocusRing.module.620dc375.js";import"./OverlayArrow.module.08672efe.js";import"./context.module.b256b1a9.js";import"./Button.module.5ebc7e98.js";import"./useButton.module.d4983e58.js";import"./Collection.module.ba792399.js";import"./useTreeState.module.512e18d1.js";const f=o(c)`
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
