import{s as o,a as e,j as l,r as d}from"./index.8f51e422.js";import{d as c,C as m,e as p}from"./Modal.670c513d.js";import{k as u}from"./Dialog.module.2f92329a.js";import"./theme.2cc37264.js";import"./palette.15e4d008.js";import"./RSPContexts.module.73a8b9f7.js";import"./useFocusRing.module.eb7e2819.js";import"./OverlayArrow.module.e8b84cc0.js";import"./context.module.3e39767d.js";import"./Button.module.ebb80593.js";import"./useButton.module.29ec2b43.js";import"./Collection.module.44685a59.js";import"./useTreeState.module.325f1a11.js";import"./VisuallyHidden.module.b24d9400.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,z=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{z as Default};
