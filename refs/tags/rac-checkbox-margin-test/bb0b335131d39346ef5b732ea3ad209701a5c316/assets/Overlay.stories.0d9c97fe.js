import{s as o,a as e,j as l,r as d}from"./index.a256598c.js";import{d as c,C as m,e as p}from"./Modal.d1f8bb12.js";import{k as u}from"./Dialog.module.bc6e515e.js";import"./theme.62555c7c.js";import"./palette.15e4d008.js";import"./RSPContexts.module.f74e6624.js";import"./useFocusRing.module.362d06ad.js";import"./OverlayArrow.module.7148ecd6.js";import"./context.module.949c8956.js";import"./Button.module.6f58f1a2.js";import"./useButton.module.21d3d59b.js";import"./Collection.module.e0878697.js";import"./useTreeState.module.230d1f2c.js";import"./VisuallyHidden.module.fd05c706.js";const f=o(c)`
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
