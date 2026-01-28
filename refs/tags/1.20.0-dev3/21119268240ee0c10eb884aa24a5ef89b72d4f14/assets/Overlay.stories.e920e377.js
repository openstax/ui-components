import{s as o,a as e,j as l,r as d}from"./index.c51a7bcd.js";import{c,C as m,d as p}from"./Modal.ecda89a5.js";import{k as u}from"./Dialog.module.935c108b.js";import"./theme.d091109d.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.fadf068d.js";import"./useFocusRing.module.20828055.js";import"./OverlayArrow.module.f4336192.js";import"./context.module.3c7ea2c8.js";import"./Button.module.acbe1597.js";import"./useButton.module.6f1ed581.js";import"./Collection.module.042bbf88.js";import"./useTreeState.module.49159670.js";const f=o(c)`
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
