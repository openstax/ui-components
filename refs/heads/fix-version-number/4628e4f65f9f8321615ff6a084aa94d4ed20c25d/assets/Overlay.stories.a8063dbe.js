import{s as o,a as e,j as l,r as d}from"./index.bdcef5ee.js";import{d as c,C as m,e as p}from"./Modal.47c0bda3.js";import{k as u}from"./Dialog.module.10615626.js";import"./theme.90922121.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.0f74e124.js";import"./useFocusRing.module.80c66c7d.js";import"./OverlayArrow.module.6c710143.js";import"./context.module.d4ec1028.js";import"./Button.module.c8124910.js";import"./useButton.module.4d32e2c3.js";import"./Collection.module.72526e90.js";import"./useTreeState.module.0d484702.js";const f=o(c)`
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
