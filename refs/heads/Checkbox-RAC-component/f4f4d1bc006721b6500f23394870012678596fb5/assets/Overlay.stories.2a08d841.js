import{s as o,a as e,j as l,r as d}from"./index.56241f9c.js";import{d as c,C as m,e as p}from"./Modal.4ce24e09.js";import{k as u}from"./Dialog.module.dfaa94d4.js";import"./theme.214696be.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.37d6f11f.js";import"./useFocusRing.module.45dfdaf4.js";import"./OverlayArrow.module.d089b349.js";import"./context.module.4f9d8356.js";import"./Button.module.5cbd66b5.js";import"./useButton.module.85223889.js";import"./Collection.module.9442a610.js";import"./useTreeState.module.2b5da96d.js";const f=o(c)`
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
