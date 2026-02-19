import{s as o,a as e,j as l,r as d}from"./index.335a09ea.js";import{c,C as m,d as p}from"./Modal.9e9c68db.js";import{k as u}from"./Dialog.module.1489b5a1.js";import"./theme.a46833aa.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.a21d67a7.js";import"./useFocusRing.module.f42953aa.js";import"./OverlayArrow.module.bdbd55e5.js";import"./context.module.60478231.js";import"./Button.module.726ed212.js";import"./useButton.module.e5fdf239.js";import"./Collection.module.0239152d.js";import"./useTreeState.module.42ba97eb.js";const f=o(c)`
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
