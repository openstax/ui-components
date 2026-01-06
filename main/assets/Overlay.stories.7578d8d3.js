import{s as o,a as e,j as l,r as d}from"./index.dab0bae4.js";import{c,C as m,d as p}from"./Modal.1c51fcf7.js";import{k as u}from"./Dialog.module.d97456be.js";import"./theme.4c0514e2.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.4390b063.js";import"./useFocusRing.module.186fe2c6.js";import"./OverlayArrow.module.36ae93d0.js";import"./context.module.6bb86195.js";import"./Button.module.4dda79b4.js";import"./useButton.module.ce0a5871.js";import"./Collection.module.4cbca5d1.js";import"./useTreeState.module.8bb223da.js";const f=o(c)`
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
