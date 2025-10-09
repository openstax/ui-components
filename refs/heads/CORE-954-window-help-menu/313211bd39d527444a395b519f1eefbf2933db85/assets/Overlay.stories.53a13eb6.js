import{s as o,a as e,j as l,r as d}from"./index.1b1d803d.js";import{c,C as m,d as p}from"./Modal.b5d259bc.js";import{k as u}from"./Dialog.module.085f9e58.js";import"./theme.ee99e843.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.36b887a4.js";import"./useFocusRing.module.665de249.js";import"./OverlayArrow.module.006dc926.js";import"./context.module.78e6cd0b.js";import"./Button.module.7b9a5193.js";import"./useButton.module.1eff40bc.js";import"./Collection.module.00321c1d.js";import"./useTreeState.module.52353040.js";const f=o(c)`
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
