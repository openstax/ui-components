import{s as o,a as e,j as l,r as d}from"./index.aaee157d.js";import{c,C as m,d as p}from"./Modal.7822f796.js";import{k as u}from"./Dialog.module.1c3758ad.js";import"./theme.63888eb2.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.30eb19ff.js";import"./useFocusRing.module.6dbbc871.js";import"./OverlayArrow.module.5928fc6c.js";import"./context.module.c9f8d907.js";import"./Button.module.328f2f63.js";import"./useButton.module.86742081.js";import"./Collection.module.57d71c45.js";import"./useTreeState.module.a8ab5ee6.js";const f=o(c)`
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
