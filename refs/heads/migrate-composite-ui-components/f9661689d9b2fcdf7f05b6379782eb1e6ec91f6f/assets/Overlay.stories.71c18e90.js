import{s as o,a as e,j as l,r as d}from"./index.fde0685b.js";import{c,C as m,d as p}from"./Modal.19f4a15c.js";import{k as u}from"./Dialog.module.99669828.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.abc71f5f.js";import"./useFocusRing.module.aeca6d22.js";import"./OverlayArrow.module.5fb0d453.js";import"./context.module.d91a5ff2.js";import"./Button.module.68b7d1b6.js";import"./Hidden.module.d3054d75.js";import"./useButton.module.7331a077.js";import"./Collection.module.a30fed5b.js";import"./FocusScope.module.acee0589.js";import"./useTreeState.module.fbd81ae4.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:i,show:n,...s})=>n?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:i})]})}):null,A=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{A as Default};
