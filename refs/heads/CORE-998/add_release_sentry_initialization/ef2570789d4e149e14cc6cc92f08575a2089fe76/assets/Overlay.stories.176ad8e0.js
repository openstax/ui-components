import{s as o,a as e,j as l,r as d}from"./index.b72de98d.js";import{d as c,C as m,e as p}from"./Modal.4c1f701c.js";import{k as u}from"./Dialog.module.a0f1a2d4.js";import"./theme.0c933903.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.b2605eb0.js";import"./useFocusRing.module.d931eb60.js";import"./OverlayArrow.module.39f052a4.js";import"./context.module.586f6da9.js";import"./Button.module.8f09dfc6.js";import"./useButton.module.f0ff1b27.js";import"./Collection.module.51c77504.js";import"./useTreeState.module.05b2f5f0.js";const f=o(c)`
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
