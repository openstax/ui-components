import{s as o,a as e,j as l,r as d}from"./index.518083e7.js";import{d as c,C as m,e as p}from"./Modal.a1d21dd4.js";import{k as u}from"./Dialog.module.6115d37e.js";import"./theme.f311a2da.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.fe58980a.js";import"./useFocusRing.module.64931f0a.js";import"./OverlayArrow.module.029abaf3.js";import"./context.module.1c5c4981.js";import"./Button.module.850e3dfe.js";import"./useButton.module.8af71f18.js";import"./Collection.module.ba8f8d7e.js";import"./useTreeState.module.0a209f4a.js";const f=o(c)`
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
