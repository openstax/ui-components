import{s as o,a as e,j as l,r as d}from"./index.7e4b207f.js";import{d as c,C as m,e as p}from"./Modal.7b67ea80.js";import{k as u}from"./Dialog.module.a9750718.js";import"./theme.a48a4dd0.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.7603c2da.js";import"./useFocusRing.module.d6811e15.js";import"./OverlayArrow.module.8b1f763e.js";import"./context.module.5b8a8f3c.js";import"./Button.module.d3ce6886.js";import"./useButton.module.844cbaae.js";import"./Collection.module.4bf97b0d.js";import"./useTreeState.module.7f072ea6.js";const f=o(c)`
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
