import{s as o,a as e,j as l,r as d}from"./index.c92cacfb.js";import{d as c,C as m,e as p}from"./Modal.63c797f3.js";import{k as u}from"./Dialog.module.da77fc3c.js";import"./theme.f459f3be.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.4000dd5f.js";import"./useFocusRing.module.f7f4ef25.js";import"./OverlayArrow.module.573d4a7c.js";import"./context.module.81838618.js";import"./Button.module.7c522c32.js";import"./useButton.module.ef5aeffa.js";import"./Collection.module.d7946c2c.js";import"./useTreeState.module.89e7e833.js";const f=o(c)`
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
