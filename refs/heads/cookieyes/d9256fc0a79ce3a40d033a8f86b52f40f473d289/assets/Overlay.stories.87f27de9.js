import{s as o,a as e,j as l,r as d}from"./index.88aa9f22.js";import{d as c,C as m,e as p}from"./Modal.a89e6aa9.js";import{l as u}from"./Dialog.module.ee074435.js";import"./theme.9bd14cce.js";import"./palette.15e4d008.js";import"./context.module.6eb2c600.js";import"./OverlayArrow.module.b58ced2e.js";import"./Hidden.module.fa9cb266.js";import"./useButton.module.fdfb5ada.js";import"./Collection.module.107bb477.js";import"./FocusScope.module.cf984a12.js";const f=o(c)`
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
