import{s as o,a as e,j as l,r as d}from"./index.837c2439.js";import{d as c,C as m,e as p}from"./Modal.24feed97.js";import{k as u}from"./Dialog.module.412840eb.js";import"./theme.108e3497.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.ea4e9610.js";import"./useFocusRing.module.fe4029c6.js";import"./OverlayArrow.module.d5859410.js";import"./context.module.45618bf3.js";import"./Button.module.fa3751f3.js";import"./useButton.module.e3251c36.js";import"./Collection.module.3a8cbc2d.js";import"./useTreeState.module.f467b2e3.js";const f=o(c)`
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
