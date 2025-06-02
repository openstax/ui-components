import{s as o,a as e,j as l,r as d}from"./index.34fd5b17.js";import{d as c,C as m,e as p}from"./Modal.1cffc731.js";import{k as u}from"./Dialog.module.abc4aeeb.js";import"./theme.465cf21c.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.5535221c.js";import"./useFocusRing.module.5f106e3b.js";import"./OverlayArrow.module.89ba4bdd.js";import"./context.module.ea639fc4.js";import"./Button.module.ce7a1eaf.js";import"./useButton.module.aff74857.js";import"./Collection.module.e9af9668.js";import"./useTreeState.module.5902029d.js";const f=o(c)`
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
