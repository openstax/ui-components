import{s as o,a as e,j as l,r as d}from"./index.4f9fd98e.js";import{c,C as m,d as p}from"./Modal.d089b412.js";import{k as u}from"./Dialog.module.8030932e.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.43565a30.js";import"./useFocusRing.module.f50b7001.js";import"./OverlayArrow.module.b0538934.js";import"./context.module.99ddbbd9.js";import"./Button.module.29f82554.js";import"./useButton.module.2bdf1831.js";import"./Collection.module.f75fcbc5.js";import"./useTreeState.module.b83a29f2.js";const f=o(c)`
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
