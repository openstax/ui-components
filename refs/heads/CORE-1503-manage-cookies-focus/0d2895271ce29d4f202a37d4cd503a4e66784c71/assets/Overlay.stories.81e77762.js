import{s as o,a as e,j as l,r as d}from"./index.044e9759.js";import{c,C as m,d as p}from"./Modal.cf1bce5f.js";import{k as u}from"./Dialog.module.ea8fc9c5.js";import"./theme.446491bd.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.7808770e.js";import"./useFocusRing.module.e6272c9c.js";import"./OverlayArrow.module.b370df4e.js";import"./context.module.799210ff.js";import"./Button.module.2ab6cbdf.js";import"./useButton.module.dc39a4cd.js";import"./Collection.module.384d88e7.js";import"./useTreeState.module.da83927f.js";const f=o(c)`
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
