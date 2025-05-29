import{s as o,a as e,j as l,r as d}from"./index.f7b2f93a.js";import{d as c,C as m,e as p}from"./Modal.cc0bc890.js";import{k as u}from"./Dialog.module.4a7097f8.js";import"./theme.bf2601d7.js";import"./palette.15e4d008.js";import"./useTreeState.module.3d791dfa.js";import"./Collection.module.8c06e19e.js";import"./useFocusRing.module.f85b1a5e.js";import"./OverlayArrow.module.6e30c7bb.js";import"./Button.module.e2f71407.js";import"./useButton.module.cd86af0d.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,E=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as Default};
