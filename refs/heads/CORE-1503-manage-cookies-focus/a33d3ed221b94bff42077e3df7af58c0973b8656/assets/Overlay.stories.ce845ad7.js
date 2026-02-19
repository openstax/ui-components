import{s as o,a as e,j as l,r as d}from"./index.77dc174b.js";import{c,C as m,d as p}from"./Modal.1210a580.js";import{k as u}from"./Dialog.module.ddd63a4f.js";import"./theme.efb68a94.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.ed709140.js";import"./useFocusRing.module.cd4dc1fd.js";import"./OverlayArrow.module.39fcfdd7.js";import"./context.module.25fdc995.js";import"./Button.module.fe582f09.js";import"./useButton.module.be4798f5.js";import"./Collection.module.01303243.js";import"./useTreeState.module.0f6aaeee.js";const f=o(c)`
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
