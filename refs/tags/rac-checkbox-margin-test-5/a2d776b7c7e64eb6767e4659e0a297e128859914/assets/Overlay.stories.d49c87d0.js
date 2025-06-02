import{s as o,a as e,j as l,r as d}from"./index.e7ac3957.js";import{d as c,C as m,e as p}from"./Modal.a69f8e1e.js";import{k as u}from"./Dialog.module.52b7063c.js";import"./theme.4149d575.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.1ba43349.js";import"./useFocusRing.module.a08fca12.js";import"./OverlayArrow.module.20526042.js";import"./context.module.622a8a74.js";import"./Button.module.9645869f.js";import"./useButton.module.d84365ff.js";import"./Collection.module.77c528e4.js";import"./useTreeState.module.287d3d8e.js";const f=o(c)`
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
