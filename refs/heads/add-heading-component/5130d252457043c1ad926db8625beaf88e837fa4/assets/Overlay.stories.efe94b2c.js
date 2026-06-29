import{s as o,a as e,j as l,r as d}from"./index.c2f7aee3.js";import{c,C as m,d as p}from"./Modal.cd85a0b3.js";import{k as u}from"./Dialog.module.047c3621.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.c91339b3.js";import"./useFocusRing.module.2e0da007.js";import"./OverlayArrow.module.ca2805b5.js";import"./context.module.43c42159.js";import"./Button.module.284a91c9.js";import"./useButton.module.89bb1486.js";import"./Collection.module.eeb69e37.js";import"./useTreeState.module.683630ff.js";const f=o(c)`
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
