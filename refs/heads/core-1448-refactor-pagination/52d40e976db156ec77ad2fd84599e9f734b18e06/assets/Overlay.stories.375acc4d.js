import{s as o,a as e,j as l,r as d}from"./index.bf911a0e.js";import{c,C as m,d as p}from"./Modal.2c1ceae6.js";import{k as u}from"./Dialog.module.ce19e41e.js";import"./theme.612ebb1c.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.7fe5bd66.js";import"./useFocusRing.module.67a70e0b.js";import"./OverlayArrow.module.39160cf6.js";import"./context.module.430f6f83.js";import"./Button.module.65c1dfa7.js";import"./useButton.module.c5cb3fe6.js";import"./Collection.module.ed956ff6.js";import"./useTreeState.module.e6c0dbd0.js";const f=o(c)`
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
