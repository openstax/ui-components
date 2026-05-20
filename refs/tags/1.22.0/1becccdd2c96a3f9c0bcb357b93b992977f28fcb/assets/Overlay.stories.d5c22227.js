import{s as o,a as e,j as l,r as d}from"./index.d84dcec4.js";import{c,C as m,d as p}from"./Modal.97e22e49.js";import{k as u}from"./Dialog.module.7befd289.js";import"./theme.b4e37fba.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.afb04179.js";import"./useFocusRing.module.3b645c77.js";import"./OverlayArrow.module.e0c66066.js";import"./context.module.1dd84072.js";import"./Button.module.7bff40bd.js";import"./useButton.module.f3046c9c.js";import"./Collection.module.fbfac22e.js";import"./useTreeState.module.86170cee.js";const f=o(c)`
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
