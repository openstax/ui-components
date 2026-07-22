import{s as o,a as e,j as l,r as d}from"./index.5158ac54.js";import{c,C as m,d as p}from"./Modal.614a7045.js";import{k as u}from"./Dialog.module.4890b0cb.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./VisuallyHidden.module.2438956c.js";import"./useFocusRing.module.f19dffd1.js";import"./OverlayArrow.module.93c244b9.js";import"./context.module.f263809a.js";import"./Button.module.0f2e4529.js";import"./Hidden.module.2467e320.js";import"./useButton.module.11402693.js";import"./Collection.module.f70b51f4.js";import"./FocusScope.module.398567ea.js";import"./useTreeState.module.4e7a0172.js";const f=o(c)`
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
`,v=({className:r,onClose:t,children:i,show:n,...s})=>n?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:i})]})}):null,A=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{A as Default};
