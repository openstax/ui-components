import{s as o,a as e,j as l,r as d}from"./index.91cf3542.js";import{c,C as m,d as p}from"./Modal.a9b45af4.js";import{k as u}from"./Dialog.module.73a1d246.js";import"./theme.a831f6fb.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.770f4cb7.js";import"./useFocusRing.module.b8321487.js";import"./OverlayArrow.module.910deb78.js";import"./context.module.222ef97b.js";import"./Button.module.7403ba62.js";import"./useButton.module.775e6a25.js";import"./Collection.module.6d744adb.js";import"./useTreeState.module.b9e35aa8.js";const f=o(c)`
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
