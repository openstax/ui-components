import{s as o,a as e,j as l,r as d}from"./index.d8fdcec6.js";import{d as c,C as m,e as p}from"./Modal.f4e4cd3e.js";import{k as u}from"./Dialog.module.ac29564e.js";import"./theme.7b7c4c4a.js";import"./palette.15e4d008.js";import"./RSPContexts.module.b776ffc8.js";import"./useFocusRing.module.08ff59c3.js";import"./OverlayArrow.module.fd4c77ed.js";import"./context.module.058314f3.js";import"./Button.module.1faf95b1.js";import"./useButton.module.7843c65c.js";import"./Collection.module.ce978365.js";import"./useTreeState.module.9a32e23a.js";import"./VisuallyHidden.module.7e3aee97.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,z=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{z as Default};
