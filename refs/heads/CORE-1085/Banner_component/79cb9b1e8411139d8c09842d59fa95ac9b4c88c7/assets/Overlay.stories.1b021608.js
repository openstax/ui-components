import{s as o,a as e,j as l,r as d}from"./index.3e02da38.js";import{c,C as m,d as p}from"./Modal.3283fd88.js";import{k as u}from"./Dialog.module.dc2e8908.js";import"./theme.92b14b32.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.79192145.js";import"./useFocusRing.module.0087e0fb.js";import"./OverlayArrow.module.2b6ff940.js";import"./context.module.0861e9bf.js";import"./Button.module.ab75db5d.js";import"./useButton.module.72fe30f5.js";import"./Collection.module.e0bde576.js";import"./useTreeState.module.863afe90.js";const f=o(c)`
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
